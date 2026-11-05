import { Router, type IRouter } from "express";
import { SubmitQuoteRequestBody, SubmitQuoteRequestResponse, type QuoteRequestInput } from "@workspace/api-zod";
import { rateLimit } from "express-rate-limit";
import { sendQuoteEmails } from "@workspace/quote-emails";

const router: IRouter = Router();
const submissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/quote-requests", submissionLimiter, async (req, res): Promise<void> => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    res.status(400).json({ error: "Vérifiez les renseignements du formulaire." });
    return;
  }

  const raw = req.body as Record<string, unknown>;
  const clean = (value: unknown) =>
    typeof value === "string" ? value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim() : value;
  const parsed = SubmitQuoteRequestBody.safeParse({
    ...raw,
    firstName: typeof raw.firstName === "string" ? clean(raw.firstName.replace(/[\r\n\t]/g, " ")) : raw.firstName,
    lastName: typeof raw.lastName === "string" ? clean(raw.lastName.replace(/[\r\n\t]/g, " ")) : raw.lastName,
    email: typeof raw.email === "string" ? (clean(raw.email) as string).toLowerCase() : raw.email,
    phone: clean(raw.phone),
    address: clean(raw.address),
    description: typeof raw.description === "string" ? raw.description.replace(/\u0000/g, "").trim() : raw.description,
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

  const result = await sendQuoteEmails(input, {
    apiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.RESEND_FROM_EMAIL,
    recipientEmail: process.env.RECIPIENT_EMAIL,
  });
  if (!result.ok) {
    req.log.error({ event: "quote_email_delivery_failed", stage: result.reason }, "Quote email delivery failed");
    res.status(503).json({ error: "L’envoi n’a pas pu être complété. Vérifiez la configuration Resend." });
    return;
  }

  res.status(202).json(SubmitQuoteRequestResponse.parse({
    status: "accepted",
    submissionId: input.submissionId,
  }));
});

export default router;
