import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  publicPages, renderPage, renderSeoHead, renderSitemap, renderRobots,
} from "../dist/server/entry-server.js";

const output = fileURLToPath(new URL("../dist/public/", import.meta.url));
const template = await readFile(path.join(output, "index.html"), "utf8");
const headPattern = /<!--seo-head:start-->[\s\S]*?<!--seo-head:end-->/;
if (!headPattern.test(template)) throw new Error("Missing SEO head markers in the built HTML.");
if (!template.includes('<div id="root"></div>')) throw new Error("Missing prerender root in the built HTML.");

for (const route of [...Object.keys(publicPages), "/404.html"]) {
  const markup = renderPage(route);
  if ((markup.match(/<h1\b/g) ?? []).length !== 1) throw new Error(`${route}: expected exactly one H1.`);
  if (markup.includes('data-testid="brand-page-loader"')) throw new Error(`${route}: loading overlay must not obscure the static page.`);
  const html = template
    .replace(headPattern, () => `<!--seo-head:start-->\n${renderSeoHead(route)}\n<!--seo-head:end-->`)
    .replace('<div id="root"></div>', () => `<div id="root" data-prerendered="true">${markup}</div>`);
  const destination = route === "/404.html"
    ? path.join(output, "404.html")
    : path.join(output, route, "index.html");
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
  console.log(`Prerendered ${route}`);
}
await writeFile(path.join(output, "robots.txt"), renderRobots());
await writeFile(path.join(output, "sitemap.xml"), renderSitemap());
