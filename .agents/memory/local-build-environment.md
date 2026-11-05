---
name: Portable website builds
description: Keep external Vercel builds independent of Replit preview runtime settings
---

The Aubois site also targets Vercel as a static website. Keep static builds independent of managed preview runtime variables, and keep the internal design sandbox out of the Vercel website deployment.

**Why:** External builds do not receive Replit's preview configuration. Requiring it at build time caused the user's Vercel deployment to fail before the website could compile.

**How to apply:** Verify portable builds with PORT and BASE_PATH absent rather than injecting them to hide a failure. Preserve explicitly supplied preview settings and keep external hosting scoped to the client-facing website.

SEO improvements must retain portable static hosting, without adding a required runtime rendering server. Verify initial HTML at the extensionless canonical URLs, not merely the generated files.

**Why:** A static host's SPA fallback can serve the homepage instead of an existing route-specific HTML file. Successful file-generation checks alone do not prove crawlers receive the correct page.

**How to apply:** Check raw HTTP responses for each canonical route and ensure preview and production routing preserve per-page HTML. Keep both hosting configurations consistent when changing public routes.

Vercel compiles serverless functions separately after the website build succeeds. Command-line TypeScript overrides in a custom validation script do not configure that separate compiler.

**Why:** A local check with explicit Web API types passed while Vercel's subsequent function compiler used the repository configuration and failed on the same source.

**How to apply:** Validate serverless code through checked-in TypeScript configuration, not only command-line overrides, and check the function entry point against the root configuration as well.