import { SubmitQuoteRequestBody, SubmitQuoteRequestResponse } from "../lib/api-zod/src/generated/api";
import { sendQuoteEmails, type QuoteEmailData } from "../lib/quote-emails/src/index";

const attempts = new Map<string, { count: number; expiresAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_BODY_BYTES = 16 * 1024;

function json(data: unknown, status = 200, headers: Record<string, string> = {}) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

function isAllowedRequest(request: Request) {
  const now = Date.now();
  for (const [key, value] of attempts) {
    if (value.expiresAt <= now) attempts.delete(key);
  }

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  const current = attempts.get(ip);
  if (current && current.expiresAt > now && current.count >= MAX_ATTEMPTS) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.expiresAt - now) / 1000)) };
  }
  attempts.set(ip, current && current.expiresAt > now
    ? { ...current, count: current.count + 1 }
    : { count: 1, expiresAt: now + WINDOW_MS });
  return { allowed: true, retryAfter: 0 };
}

function normalizeBody(body: Record<string, unknown>) {
  const clean = (value: unknown) =>
    typeof value === "string" ? value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim() : value;
  return {
    ...body,
    firstName: typeof body.firstName === "string" ? clean(body.firstName.replace(/[\r\n\t]/g, " ")) : body.firstName,
    lastName: typeof body.lastName === "string" ? clean(body.lastName.replace(/[\r\n\t]/g, " ")) : body.lastName,
    email: typeof body.email === "string" ? (clean(body.email) as string).toLowerCase() : body.email,
    phone: clean(body.phone),
    address: clean(body.address),
    description: typeof body.description === "string" ? body.description.replace(/\u0000/g, "").trim() : body.description,
  };
}

export async function POST(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return json({ error: "Méthode non permise." }, 405, { Allow: "POST" });
  }
  const limit = isAllowedRequest(request);
  if (!limit.allowed) {
    return json({ error: "Trop de demandes. Réessayez plus tard." }, 429, { "Retry-After": String(limit.retryAfter) });
  }

  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) return json({ error: "La demande est trop volumineuse." }, 413);

  let rawBody: unknown;
  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).byteLength > MAX_BODY_BYTES) {
      return json({ error: "La demande est trop volumineuse." }, 413);
    }
    rawBody = JSON.parse(text);
  } catch {
    return json({ error: "Le formulaire contient des données invalides." }, 400);
  }

  if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    return json({ error: "Vérifiez les renseignements du formulaire." }, 400);
  }

  const parsed = SubmitQuoteRequestBody.safeParse(normalizeBody(rawBody as Record<string, unknown>));
  if (!parsed.success) return json({ error: "Vérifiez les renseignements du formulaire." }, 400);

  const input = parsed.data as QuoteEmailData & { companyWebsite?: string };
  if (input.companyWebsite?.trim()) {
    return json(SubmitQuoteRequestResponse.parse({ status: "accepted", submissionId: input.submissionId }), 202);
  }

  const environment = (globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  }).process?.env ?? {};
  const result = await sendQuoteEmails(input, {
    apiKey: environment.RESEND_API_KEY,
    fromEmail: environment.RESEND_FROM_EMAIL,
    recipientEmail: environment.RECIPIENT_EMAIL,
  });
  if (!result.ok) {
    const isConfigurationError = ["configuration", "sender", "recipient"].includes(result.reason);
    const status = isConfigurationError ? 503 : 502;
    return json({ error: "L’envoi n’a pas pu être complété. Vérifiez la configuration Resend." }, status);
  }

  return json(SubmitQuoteRequestResponse.parse({ status: "accepted", submissionId: input.submissionId }), 202);
}
