# Repository Guidelines

## Project Structure & Module Organization

This is Mohamed Khaled's statically exported Next.js portfolio. App Router pages and global styles live in `src/app/`; shared components are in `src/components/`. Edit résumé facts, projects, experience, and skill groups in `src/data/portfolio.ts`.

The [assets directory](assets/) holds originals, the [manifest](assets/manifest.json), masks, fonts, résumé, and unmodified taste files. Prompts and internal review records remain local and ignored. `scripts/prepare-assets.mjs` generates `public/assets/`, served at `/assets/`. Preserve originals; never edit generated outputs. Production export: `out/`.

## Build, Test, and Development Commands

Use Node.js 22+ and npm; commit `package-lock.json`.

- `npm ci`: install locked dependencies.
- `npm run dev`: prepare assets and start development.
- `npm run build`: prepare assets and export the production site.
- `npm run preview`: serve the export locally on port 3000.
- `npm run lint`: run ESLint without permitted warnings.
- `npm run typecheck`: check TypeScript.
- `npm run qa`: run installed design-taste-frontend checks after building; set `TASTE_SKILL_PATH` if installed elsewhere.

GitHub Pages deploys `main` through `.github/workflows/deploy.yml` to `https://bondo2-1.github.io`. Keep root-relative paths for this user site.

## Coding Style & Icons

Use two-space indentation, strict TypeScript, descriptive names, PascalCase components, and camelCase data. Prefer server components; add client JavaScript only for interaction.

**Use `@phosphor-icons/react` for all interface icons**, with regular weight and consistent sizing. Server components import from `@phosphor-icons/react/ssr`. Hide decorative icons from assistive technology and name icon-only controls. Do not add Lucide or imitate technology logos.

## Design, Assets & Motion

Keep the warm-gray palette, Anton headings, Inter body, IBM Plex Mono metadata, and content-sized footer. Generate illustrations through the built-in image model; save transparent originals and exact prompts. Preserve the taste kit and document justified checker overrides.

Keep `m.abdelmaqsooud` lowercase; group the hero name immediately above the role headline.

The hero robot blinks every two seconds and follows fine pointers; its pause button was removed. Experience artwork uses [SVG masks](assets/layers/experience-art.json): float only the three logo cards and bank cloud over 6.5–8 seconds. Keep figures, held cards, and form still. Preserve complete canvases. Honor reduced motion and suspend loops offscreen or in hidden tabs.

Use native smooth scrolling for section links, with instant scrolling under reduced motion.

## Validation & Pull Requests

Run lint, typecheck, build, and design checks. Inspect desktop, tablet, mobile, keyboard navigation, reduced motion, and 320px overflow. There is no unit-test framework or coverage threshold. Never invent résumé claims, links, or contact confirmations.

Use imperative commits, focused pull requests, descriptions, validation results, and interface screenshots. Keep credentials out of source control.
