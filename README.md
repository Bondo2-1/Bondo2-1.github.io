# Mohamed Khaled — Portfolio

A portfolio for an automation developer and software engineer. It uses Next.js App Router, TypeScript, Tailwind CSS, and Phosphor icons. The production build exports a static site to `out/`.

[View the live portfolio](https://bondo2-1.github.io/)

## Development

Use Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

Run `preview` after building. Stop the development server first to free port 3000.

## Project structure

| Path | Contents |
| --- | --- |
| `src/app/` | Page layout, metadata, and styles |
| `src/components/` | Navigation and illustration components |
| `src/data/portfolio.ts` | Projects, experience, skills, and contact details |
| `assets/` | Source illustrations, animation masks, fonts and licenses, and the résumé |
| `public/` | Browser scripts, favicon, and social preview image |

Development and production builds run `assets/prepare.mjs` to generate responsive WebP files and copy the runtime assets to `public/assets/`. Update `assets/manifest.json` when adding an illustration. Keep the full canvas for artwork with animation masks or overlays. The résumé PDF is copied directly from `assets/resume/`.

## Deployment

Pushes to `main` run the [GitHub Pages workflow](.github/workflows/deploy.yml). It installs locked dependencies, runs lint and TypeScript checks, builds the static export, and deploys `out/`. Set the Pages source to **GitHub Actions** in the repository settings.
