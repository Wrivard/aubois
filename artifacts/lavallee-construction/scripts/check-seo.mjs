import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist/public");
const { siteUrl } = JSON.parse(await readFile(path.join(root, "seo.config.json"), "utf8"));
const titles = new Set();
for (const route of ["/", "/soumission", "/politique-de-confidentialite"]) {
  const html = await readFile(path.join(output, route, "index.html"), "utf8");
  const title = html.match(/<title[^>]*>([^<]+)<\/title>/)?.[1];
  assert.ok(title, `${route}: missing static title`);
  assert.ok(!titles.has(title), `${route}: duplicate title`);
  titles.add(title);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: H1 count`);
  assert.ok(html.includes(`rel="canonical" href="${siteUrl}${route}"`), `${route}: incorrect canonical`);
  assert.ok(html.includes(`property="og:url" content="${siteUrl}${route}"`), `${route}: incorrect OG URL`);
  assert.ok(html.includes('property="og:image"'), `${route}: missing social image`);
  assert.ok(html.includes('name="twitter:image"'), `${route}: missing Twitter image`);
  assert.ok(html.includes('content="index, follow"'), `${route}: not indexable`);
  assert.ok(html.includes('data-prerendered="true"'), `${route}: missing static content`);
  assert.ok(!html.includes('data-testid="brand-page-loader"'), `${route}: loader obscures content`);
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const schema = JSON.parse(match[1]);
    assert.ok(schema["@graph"]?.length, `${route}: empty schema`);
  }
  for (const asset of html.matchAll(/(?:src|href)="(\/(?:assets|photos)\/[^"?#]+)/g)) {
    await stat(path.join(output, asset[1]));
  }
  if (route === "/soumission") {
    assert.match(html, /<h1[^>]*>\s*Parlons de votre projet\.\s*<\/h1>/, "Submission H1 must stay unchanged");
    assert.ok(html.includes("button-project-type-elagage"), "Submission form missing");
  }
  if (route === "/") {
    assert.ok(html.includes("Depuis 12 ans"), "Incorrect company experience");
    assert.ok(!html.includes(">25<span"), "Old experience stat still present");
  }
  console.log(`SEO checks passed: ${route}`);
}
const sitemap = await readFile(path.join(output, "sitemap.xml"), "utf8");
assert.ok(sitemap.startsWith('<?xml version="1.0"'), "Sitemap must be XML, not the SPA shell");
for (const route of ["/", "/soumission", "/politique-de-confidentialite"]) {
  assert.ok(sitemap.includes(`<loc>${siteUrl}${route}</loc>`), `Sitemap missing ${route}`);
}
assert.ok(!sitemap.includes("/404"), "404 must not be in sitemap");
const robots = await readFile(path.join(output, "robots.txt"), "utf8");
assert.ok(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`));
const notFound = await readFile(path.join(output, "404.html"), "utf8");
assert.ok(notFound.includes('content="noindex, follow"'));
assert.ok(!notFound.includes('rel="canonical"'));
console.log("Sitemap, robots, assets, schemas, and 404 checks passed.");
