import { Router, type IRouter } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";
import {
  SubmitQuoteRequestBody,
  SubmitQuoteRequestResponse,
  type QuoteRequestInput,
} from "@workspace/api-zod";
import { rateLimit } from "express-rate-limit";
import { customerConfirmationEmail, ownerQuoteNotificationEmail, quoteEmailDefaults } from "../lib/quote-emails";

const router: IRouter = Router();
const resend = new ReplitConnectors().createProxyFetch("resend");
const submissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

async function sendEmail(input: {
  from: string;
  to: string;
  reply_to?: string;
  subject: string;
  html: string;
  text: string;
  idempotencyKey: string;
}) {
  const { idempotencyKey, ...email } = input;
  return resend("/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(email),
  });
}

router.post("/quote-requests", submissionLimiter, async (req, res): Promise<void> => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    res.status(400).json({ error: "Vérifiez les renseignements du formulaire." });
    return;
  }
  const raw = req.body as Record<string, unknown>;
  const normalize = (value: unknown) =>
    typeof value === "string" ? value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim() : value;
  const parsed = SubmitQuoteRequestBody.safeParse({
    ...raw,
    firstName: typeof raw.firstName === "string" ? normalize(raw.firstName.replace(/[\r\n\t]/g, " ")) : raw.firstName,
    lastName: typeof raw.lastName === "string" ? normalize(raw.lastName.replace(/[\r\n\t]/g, " ")) : raw.lastName,
    email: typeof raw.email === "string" ? (normalize(raw.email) as string).toLowerCase() : raw.email,
    phone: typeof raw.phone === "string" ? normalize(raw.phone) : raw.phone,
    address: typeof raw.address === "string" ? normalize(raw.address) : raw.address,
    description: typeof raw.description === "string"
      ? raw.description.replace(/\u0000/g, "").trim()
      : raw.description,
  });
  if (!parsed.success) {
    res.status(400).json({ error: "Vérifiez les renseignements du formulaire." });
    return;
  }

  const input = parsed.data as QuoteRequestInput;
  if (input.companyWebsite?.trim()) {
    res.status(202).json(SubmitQuoteRequestResponse.parse({
      status: "accepted",
      submissionId: input.submissionId,
    }));
    return;
  }

  const senderEmail = process.env.RESEND_FROM_EMAIL?.trim();
  if (!senderEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
    req.log.error({ event: "quote_email_sender_not_configured" }, "Quote email sender is unavailable");
    res.status(503).json({ error: "L’envoi des courriels n’est pas encore configuré." });
    return;
  }

  const normalized = {
    ...input,
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    phone: input.phone,
    projectType: input.projectType,
    address: input.address,
    description: input.description,
  };
  const senderDomain = senderEmail.split("@")[1]?.toLowerCase();
  const domainResponse = await resend("/domains");
  if (!domainResponse.ok) {
    req.log.error({ event: "quote_email_domain_check_failed", statusCode: domainResponse.status }, "Unable to verify quote email sender");
    res.status(503).json({ error: "L’envoi des courriels est temporairement indisponible." });
    return;
  }

  const domainPayload = await domainResponse.json() as { data?: Array<{ name?: string; status?: string }> } | null;
  const senderDomainVerified = domainPayload?.data?.some(
    (domain) => domain.name?.toLowerCase() === senderDomain && domain.status === "verified",
  );
  if (!senderDomainVerified) {
    req.log.error({ event: "quote_email_domain_unverified" }, "Quote email sender domain is not verified");
    res.status(503).json({ error: "Le domaine d’envoi n’est pas encore vérifié dans Resend." });
    return;
  }

  const from = `${quoteEmailDefaults.siteName} <${senderEmail}>`;
  const ownerEmail = ownerQuoteNotificationEmail(normalized);
  const customerEmail = customerConfirmationEmail(normalized);
  const ownerResponse = await sendEmail({
    from,
    to: quoteEmailDefaults.ownerEmail,
    reply_to: ownerEmail.replyTo,
    subject: ownerEmail.subject,
    html: ownerEmail.html,
    text: ownerEmail.text,
    idempotencyKey: `${input.submissionId}-owner`,
  });
  if (!ownerResponse.ok) {
    req.log.error({ event: "quote_owner_email_failed", statusCode: ownerResponse.status }, "Unable to deliver quote notification");
    res.status(503).json({ error: "La demande n’a pas pu être envoyée. Veuillez réessayer." });
    return;
  }

  const customerResponse = await sendEmail({
    from,
    to: normalized.email,
    reply_to: quoteEmailDefaults.ownerEmail,
    subject: customerEmail.subject,
    html: customerEmail.html,
    text: customerEmail.text,
    idempotencyKey: `${input.submissionId}-customer`,
  });
  if (!customerResponse.ok) {
    req.log.error({ event: "quote_customer_email_failed", statusCode: customerResponse.status }, "Unable to deliver quote receipt");
    res.status(503).json({ error: "La demande a été reçue, mais la confirmation ne peut pas être livrée pour le moment. Réessayez ou appelez-nous." });
    return;
  }

  res.status(202).json(SubmitQuoteRequestResponse.parse({
    status: "accepted",
    submissionId: input.submissionId,
  }));
});

export default router;
