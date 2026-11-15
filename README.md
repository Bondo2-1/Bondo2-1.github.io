# Mohamed Khaled — Portfolio

A light editorial portfolio for an automation developer and software engineer. Built with Next.js App Router, TypeScript, Tailwind CSS, and Phosphor icons. The production build exports static HTML; no application server, contact backend, or account is required.

## Run locally

Use Node.js 22 or newer and npm.

```powershell
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```powershell
npm run lint
npm run typecheck
npm run build
npm run preview
```

`preview` serves the production export at the same address. Stop the development server before starting it.

## GitHub Pages hosting

Deployment targets [bondo2-1.github.io](https://bondo2-1.github.io) in the public [Bondo2-1.github.io repository](https://github.com/Bondo2-1/Bondo2-1.github.io). Initial publication is in progress. GitHub Pages and standard GitHub Actions runners are free for public repositories.

Push changes to `main` to run `.github/workflows/deploy.yml`. The workflow installs locked dependencies with Node.js 22, runs lint and TypeScript checks, prepares assets, builds the static export, and deploys `out/`. You can also run it manually from the repository's Actions tab. In Settings → Pages, the publishing source must remain **GitHub Actions**.

This is a user site at the domain root, so no `basePath` is needed. If you move it to a project repository, update root-relative assets and the Next.js configuration before deployment. Dependencies, browser profiles, screenshots, and generated outputs stay out of Git. Source code, artwork/reference images, and the unchanged résumé PDF are approved for public publication; generation prompts and internal review records remain local and ignored.

## Content and assets

Edit `src/data/portfolio.ts` for factual content and contact links. Page composition lives in `src/app/page.tsx`, with layout and styling alongside it. The mobile menu uses native HTML details with progressive enhancement; content remains readable without JavaScript. Motion respects reduced-motion preferences.

The [assets guide](assets/README.md) describes the generated illustrations, official n8n logo, local fonts, résumé, and taste-skill sources. Exact generation prompts are retained locally in `assets/prompts/` and excluded from the public repository. `assets/` holds originals; preparation creates optimized files in `public/assets/`. Both development and build run preparation automatically. The downloadable résumé is the unchanged supplied PDF, including its original contact details.

The hero robot blinks every two seconds and follows a mouse cursor. It has a smooth head, no glasses, and a charcoal hoodie with pink details and the official n8n logo. The pause control was removed at the user's request; reduced motion keeps the eyes open and centered. `public/hero-mascot.js` enhances server-rendered artwork and uses no animation library.

United Elite now has two approved illustrations: the card-playing developer and a saleswoman comparing bank options. SVG masks from `assets/layers/experience-art.json` isolate the three floating logo cards and bank cloud. CSS moves them slowly while figures and the form stay still. `public/experience-art.js` suspends motion offscreen, in hidden tabs, and under reduced motion.

Contact links use the actual email, GitHub, and LinkedIn from the résumé. Project cards have no speculative repository links. There are no forms or invented success states.

## Design checks

Install design-taste-frontend locally, then run:

```powershell
npm run build
$env:TASTE_SKILL_PATH = 'C:\Users\Lenovo\.codex\skills\taste-skill'
npm run qa
```

The path defaults to `~/.codex/skills/taste-skill`. Checks run sequentially against the static export using the skill's headless browser scripts. Screenshots are written under `shots/`; browser profiles stay under `.taste-skill/`. The documented light palette, fonts, pill navigation, real contact links, and illustration-first imagery are explicit design choices. See `VALIDATION.md` for the latest results and any limitations.

For a fix round after the full audit, `npm run qa -- --quick` checks consistency at desktop and phone widths while retaining the full layout and performance checks. Nonzero QA results remain visible; the wrapper does not suppress design findings.

Page metadata uses `https://bondo2-1.github.io` for canonical and social URLs. `public/share.jpg` is a still of this page's own hero, captured during validation.
