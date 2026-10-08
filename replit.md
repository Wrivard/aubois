# Les Constructions Godin

Site vitrine en français présentant les services de construction et de rénovation résidentielle des Constructions Godin en Mauricie, à Tadoussac et à Baie-Comeau.

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

- Site vitrine en français pour Les Constructions Godin, entreprise de construction et de rénovation résidentielle desservant la Mauricie, Tadoussac et Baie-Comeau
- Navigation responsive, services résidentiels, présentation de projets, témoignages, FAQ, coordonnées et formulaire de soumission gratuite
- Demande de soumission en trois étapes qui prépare un courriel dans la messagerie du visiteur; aucune transmission automatique ni téléversement de fichiers

## User preferences

- Garder le gabarit existant, le logo fourni des Constructions Godin et l'accent `#795931`; préserver le noir `#1B1B1B` de la navigation, du pied de page et du texte.
- Utiliser les photos fournies par le client pour illustrer les projets; ne pas inventer de réalisations, licences, garanties ou témoignages.
- Ne pas réutiliser la même photo à plusieurs endroits du site; choisir des visuels distincts et adaptés au contenu.
- Conserver inchangés les compteurs et statistiques du gabarit; utiliser uniquement des témoignages vérifiés.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
