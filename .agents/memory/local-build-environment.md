---
name: Portable website builds
description: Keep external Vercel builds independent of Replit preview runtime settings
---

The Aubois site also targets Vercel as a static website. Keep static builds independent of managed preview runtime variables, and keep the internal design sandbox out of the Vercel website deployment.

**Why:** External builds do not receive Replit's preview configuration. Requiring it at build time caused the user's Vercel deployment to fail before the website could compile.

**How to apply:** Verify portable builds with PORT and BASE_PATH absent rather than injecting them to hide a failure. Preserve explicitly supplied preview settings and keep external hosting scoped to the client-facing website.