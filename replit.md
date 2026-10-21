# Service d’Arbres Aubois

Site vitrine en français présentant les services d’élagage, d’abattage d’arbres, de taille de haies et d’entretien des arbres de Service d’Arbres Aubois à Montmagny et dans le secteur de Berthier-sur-Mer.

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
- `artifacts/lavallee-construction/public/` — supplied logo, credential images, and illustrative arboriculture imagery

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

- Site vitrine en français pour Service d’Arbres Aubois, entreprise spécialisée en élagage, abattage d’arbres, taille de haies et entretien des arbres à Montmagny et Berthier-sur-Mer
- Navigation responsive, services arboricoles, section d’assurance et de certifications, témoignages, FAQ, coordonnées et formulaire de soumission
- Demande de soumission en trois étapes qui prépare un courriel dans la messagerie du visiteur; aucune transmission automatique ni téléversement de fichiers

## User preferences

- Garder la structure et le logo fourni de Service d’Arbres Aubois; utiliser le vert comme accent et préserver le noir `#1B1B1B` de la navigation, du pied de page et du texte.
- Identifier les images comme illustratives lorsqu’elles ne documentent pas une réalisation vérifiée.
- Ne pas inventer de réalisations, adresse, territoire desservi, numéro RBQ, certifications, garanties ou témoignages.
- Ne pas réutiliser la même photo à plusieurs endroits du site; choisir des visuels distincts et adaptés au contenu.
- Conserver inchangés les compteurs et statistiques du gabarit; utiliser uniquement des témoignages vérifiés.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
