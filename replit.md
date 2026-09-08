# Lavallée Construction

Site vitrine en français présentant les services, réalisations et demandes de soumission de Lavallée Construction.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/lavallee-construction run dev` — run the website through its managed workflow
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/lavallee-construction/src/` — pages, reusable sections, and site interactions
- `artifacts/lavallee-construction/src/index.css` — global palette and visual tokens
- `artifacts/lavallee-construction/public/` — supplied logo and local construction media

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

- Rich French-language construction company homepage
- Responsive navigation, service dropdown, gallery, testimonials, FAQ, contact/map, and career CTA
- Three-step quote request flow with validation and confirmation

## User preferences

- Keep the supplied logo intact and prominent.
- Limit the palette to the logo blue, `#1B1B1B`, `#E4E4E4`, and white.
- Do not use gradients, placeholder imagery, or inconsistent component styles.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
