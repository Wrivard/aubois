import siteConfig from "../../seo.config.json";

export const siteUrl = new URL(siteConfig.siteUrl).origin;
export const siteName = "Service d’Arbres Aubois";
export const socialImagePath = "/photos/arbres-aubois/social-preview.jpg";

type PageSeo = { title: string; description: string };

export const publicPages: Record<string, PageSeo> = {
  "/": {
    title: "Élagage et abattage à Montmagny | Service d’Arbres Aubois",
    description: "Élagage, abattage, essouchement et taille de haies à Montmagny, Berthier-sur-Mer et L’Islet. Confiez vos arbres à une équipe assurée et demandez une soumission.",
  },
  "/soumission": {
    title: "Soumission d’élagage à Montmagny | Service d’Arbres Aubois",
    description: "Demandez une soumission pour l’élagage, l’essouchement, l’abattage, le déchiquetage de branches ou la taille de haies à Montmagny, Berthier-sur-Mer et L’Islet.",
  },
  "/politique-de-confidentialite": {
    title: "Politique de confidentialité | Service d’Arbres Aubois",
    description: "Découvrez comment Service d’arbres Aubois traite les renseignements transmis par son formulaire de soumission et sa carte intégrée.",
  },
};

export function normalizePath(path: string) {
  const pathname = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return pathname === "/index.html" || !pathname ? "/" : pathname;
}

export function getPageSeo(path: string) {
  const pathname = normalizePath(path);
  return {
    path: pathname,
    indexable: pathname in publicPages,
    ...(publicPages[pathname] ?? {
      title: "Page introuvable (404) | Service d’Arbres Aubois",
      description: "Cette page est introuvable. Retrouvez les services arboricoles de Service d’Arbres Aubois à Montmagny et demandez une soumission.",
    }),
  };
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);

export function renderSeoHead(path: string) {
  const page = getPageSeo(path);
  const url = `${siteUrl}${page.path}`;
  const imageUrl = `${siteUrl}${socialImagePath}`;
  const attr = 'data-site-seo="true"';
  const meta = (key: string, content: string, property = false) =>
    `<meta ${attr} ${property ? "property" : "name"}="${key}" content="${escapeHtml(content)}" />`;
  const tags = [
    `<title ${attr}>${escapeHtml(page.title)}</title>`,
    meta("description", page.description),
    meta("robots", page.indexable ? "index, follow" : "noindex, follow"),
    meta("og:title", page.title, true),
    meta("og:description", page.description, true),
    meta("og:type", "website", true),
    meta("og:locale", "fr_CA", true),
    meta("og:site_name", siteName, true),
    meta("og:image", imageUrl, true),
    meta("og:image:type", "image/jpeg", true),
    meta("og:image:width", "1200", true),
    meta("og:image:height", "630", true),
    meta("og:image:alt", "Service d’Arbres Aubois — services arboricoles à Montmagny", true),
    meta("twitter:card", "summary_large_image"),
    meta("twitter:title", page.title),
    meta("twitter:description", page.description),
    meta("twitter:image", imageUrl),
    meta("twitter:image:alt", "Service d’Arbres Aubois — services arboricoles à Montmagny"),
    meta("theme-color", "#3d8541"),
  ];
  if (page.indexable) {
    tags.push(`<link ${attr} rel="canonical" href="${escapeHtml(url)}" />`);
    tags.push(meta("og:url", url, true));
    const graph: Record<string, unknown>[] = [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#business`,
        name: siteName,
        legalName: "Service d'arbres Aubois",
        url: `${siteUrl}/`,
        telephone: "+1-418-941-8897",
        image: imageUrl,
        logo: `${siteUrl}/logo-service-arbres-aubois.png`,
        areaServed: ["Montmagny", "Berthier-sur-Mer", "L’Islet"].map((name) => ({
          "@type": "City", name,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services arboricoles",
          itemListElement: [
            "Élagage d’arbres", "Essouchement", "Abattage d’arbres",
            "Déchiquetage de branches", "Taille de haies", "Conseil arboricole",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteName,
        inLanguage: "fr-CA",
        publisher: { "@id": `${siteUrl}/#business` },
      },
      {
        "@type": page.path === "/soumission" ? "ContactPage" : "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: "fr-CA",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#business` },
      },
    ];
    tags.push(`<script ${attr} type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org", "@graph": graph,
    }).replace(/</g, "\\u003c")}</script>`);
  }
  return tags.join("\n");
}

export function renderSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(publicPages)
    .map((path) => `  <url><loc>${escapeHtml(`${siteUrl}${path}`)}</loc></url>`)
    .join("\n")}\n</urlset>\n`;
}

export function renderRobots() {
  return `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;
}
