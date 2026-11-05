export type QuoteEmailData = {
  submissionId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  address: string;
  description: string;
};

const SITE_NAME = "Service d’Arbres Aubois";
const SITE_URL = "https://www.arbresaubois.ca";
const OWNER_EMAIL = "matisaube1@gmail.com";
const PHONE_DISPLAY = "(418) 941-8897";
const PHONE_LINK = "+14189418897";
const green = "#438a46";
const ink = "#20251f";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]!);
}

function detailsTable(data: QuoteEmailData, includeContact: boolean) {
  const rows = [
    ["Service demandé", data.projectType],
    ["Adresse ou secteur", data.address],
    ...(includeContact ? [
      ["Nom", `${data.firstName} ${data.lastName}`],
      ["Téléphone", data.phone],
      ["Courriel", data.email],
    ] : []),
    ["Description du projet", data.description],
  ];
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:24px 0">
    ${rows.map(([label, value]) => `<tr>
      <th align="left" valign="top" style="width:34%;padding:13px 12px;border-bottom:1px solid #e5e9e3;color:#687269;font-size:13px;font-weight:600">${escapeHtml(label)}</th>
      <td valign="top" style="padding:13px 12px;border-bottom:1px solid #e5e9e3;color:${ink};font-size:14px;line-height:1.6;white-space:pre-wrap;word-break:break-word">${escapeHtml(value)}</td>
    </tr>`).join("")}
  </table>`;
}

function emailShell(preheader: string, content: string) {
  return `<!doctype html>
<html lang="fr-CA">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#f3f5f2;color:${ink};font-family:Arial,Helvetica,sans-serif">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f5f2;padding:30px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border:1px solid #e6e9e5">
        <tr><td style="padding:27px 32px;background:#1b1b1b;border-bottom:4px solid ${green}">
          <img src="${SITE_URL}/logo-service-arbres-aubois.png" width="112" alt="" style="display:block;width:112px;height:auto;margin:0 0 12px;border:0">
          <a href="${SITE_URL}" style="color:#ffffff;text-decoration:none;font-size:19px;font-weight:700">${SITE_NAME}</a>
          <div style="margin-top:7px;color:#b7c6b5;font-size:12px;letter-spacing:1.5px;text-transform:uppercase">Élagage · Essouchement · Abattage</div>
        </td></tr>
        <tr><td style="padding:32px">
          ${content}
        </td></tr>
        <tr><td style="padding:21px 32px;background:#f7f8f6;border-top:1px solid #e6e9e5;color:#626b61;font-size:12px;line-height:1.7">
          Montmagny, Berthier-sur-Mer et L’Islet<br>
          <a href="tel:${PHONE_LINK}" style="color:${green};font-weight:700;text-decoration:none">${PHONE_DISPLAY}</a>
          &nbsp;·&nbsp; <a href="${SITE_URL}" style="color:${green};text-decoration:none">arbresaubois.ca</a>
        </td></tr>
      </table>
      <div style="padding:16px 8px;color:#7b8379;font-size:11px;line-height:1.5">Ce message concerne une demande de soumission adressée à ${SITE_NAME}.</div>
    </td></tr>
  </table>
</body>
</html>`;
}

export function customerConfirmationEmail(data: QuoteEmailData) {
  const name = escapeHtml(data.firstName);
  return {
    subject: "Nous avons reçu votre demande de soumission",
    html: emailShell(
      "Votre demande de soumission est bien reçue.",
      `<p style="margin:0 0 9px;color:${green};font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase">Confirmation de réception</p>
       <h1 style="margin:0 0 15px;color:${ink};font-size:27px;line-height:1.25">Merci ${name}, votre demande est bien reçue.</h1>
       <p style="margin:0;color:#59625a;font-size:15px;line-height:1.7">Notre équipe de Service d’Arbres Aubois prendra connaissance des détails ci-dessous et communiquera avec vous pour la suite.</p>
       <h2 style="margin:28px 0 0;color:${ink};font-size:16px">Récapitulatif de votre demande</h2>
       ${detailsTable(data, false)}
       <p style="margin:26px 0 0;color:#59625a;font-size:14px;line-height:1.7">Une question entre-temps? Appelez-nous au <a href="tel:${PHONE_LINK}" style="color:${green};font-weight:700;text-decoration:none">${PHONE_DISPLAY}</a>.</p>`,
    ),
    text: `Bonjour ${data.firstName},\n\nNous avons bien reçu votre demande de soumission. Notre équipe en prendra connaissance et communiquera avec vous pour la suite.\n\nRÉCAPITULATIF\nService : ${data.projectType}\nAdresse ou secteur : ${data.address}\nDescription :\n${data.description}\n\nService d’Arbres Aubois\n${PHONE_DISPLAY}\n${SITE_URL}`,
  };
}

export function ownerQuoteNotificationEmail(data: QuoteEmailData) {
  return {
    subject: `Nouvelle demande de soumission — ${data.firstName} ${data.lastName}`,
    replyTo: data.email,
    html: emailShell(
      `Nouvelle demande de ${data.firstName} ${data.lastName} — ${data.projectType}.`,
      `<p style="margin:0 0 9px;color:${green};font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase">Nouvelle demande de soumission</p>
       <h1 style="margin:0 0 15px;color:${ink};font-size:27px;line-height:1.25">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</h1>
       <p style="margin:0;color:#59625a;font-size:14px;line-height:1.7">Une nouvelle demande a été envoyée depuis le formulaire de Service d’Arbres Aubois.</p>
       <h2 style="margin:24px 0 0;color:${ink};font-size:16px">Coordonnées et demande</h2>
       ${detailsTable(data, true)}
       <p style="margin:22px 0 0;color:#59625a;font-size:13px">Pour répondre directement au client, répondez à ce courriel ou écrivez à <a href="mailto:${escapeHtml(data.email)}" style="color:${green}">${escapeHtml(data.email)}</a>.</p>
       <p style="margin:13px 0 0;color:#7b8379;font-size:11px">Référence : ${escapeHtml(data.submissionId)}</p>`,
    ),
    text: `Nouvelle demande de soumission — ${data.firstName} ${data.lastName}\n\nService demandé : ${data.projectType}\nAdresse ou secteur : ${data.address}\nTéléphone : ${data.phone}\nCourriel : ${data.email}\n\nDescription du projet :\n${data.description}\n\nRéférence : ${data.submissionId}`,
  };
}

export const quoteEmailDefaults = {
  ownerEmail: OWNER_EMAIL,
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
};
