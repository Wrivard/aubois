# Gestion Jagster Inc.

Site vitrine en français présentant les services de rénovation résidentielle et les demandes de soumission gratuite de Gestion Jagster Inc. à Québec et dans les environs.

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
- `artifacts/lavallee-construction/public/` — supplied logo and tile-installation images

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

- Site vitrine en français pour Gestion Jagster Inc., entrepreneur général en rénovation résidentielle à Québec et dans les environs
- Navigation responsive, services résidentiels, présentation de projets, témoignages, FAQ, coordonnées et formulaire de soumission gratuite
- Demande de soumission en trois étapes qui prépare un courriel dans la messagerie du visiteur; aucune transmission automatique ni téléversement de fichiers

## User preferences

- Garder le gabarit existant, le logo fourni de Gestion Jagster Inc. et l'accent `#D0B07C`.
- Ne pas attribuer les photos d’illustration à des réalisations confirmées de Gestion Jagster Inc. ni inventer de réalisations, licences, garanties ou témoignages.
- Conserver inchangés les compteurs et statistiques du gabarit jusqu'à nouvelle instruction explicite.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
