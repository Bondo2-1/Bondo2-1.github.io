GATE: OFF (no build active)

# Portfolio validation

## GitHub Pages preparation — 15 November 2026

Prepared `.github/workflows/deploy.yml` for a public `Bondo2-1/Bondo2-1.github.io` user site. The workflow uses Node.js 22, locked npm dependencies, lint, TypeScript checks, static export, and GitHub's Pages actions pinned to verified release commits. Canonical and social metadata now target `https://bondo2-1.github.io`. Source originals remain intact; generated outputs, browser profiles, environment files, and local QA artifacts are excluded from Git.

Lint, TypeScript, and production build passed. All 28 root-relative export links checked exist locally; the canonical and social-image URLs point to the intended domain. A credential-pattern scan found no matches in staged text files. The local publication inventory is `.taste-skill/publication-scope.json`: 99 files, approximately 29.58 MB, including source, artwork/references, prompts, and the unchanged résumé.

The user subsequently approved public source code, artwork/reference images, and the original résumé PDF. Generation prompts and internal review records are excluded from Git while remaining intact locally. Publication is in progress; online verification will be recorded after deployment.

## Hero name and headline grouping — 15 November 2026

Kept the navbar wordmark as lowercase `m.abdelmaqsooud`. Moved the title-case personal name into the hero copy column, directly before the role headline, with a 20px desktop gap and 16px phone gap. The desktop metadata remains right-aligned; smaller screens remove its already-empty row. No copy, contact details, illustration, or animation behavior changed. Contributor guidance and the page plan record the approved hierarchy.

Lint, TypeScript, and the static production build passed. Copy lint reported **420 words, 0 FAIL, 0 WARN**. Export checks confirm the lowercase wordmark, one personal-name label immediately before the headline, and one `h1`. Captured first screens at [1440px](shots/hero-name-1440-first-screen.png), [1024px](shots/hero-name-1024-first-screen.png), [820px](shots/hero-name-820-first-screen.png), [768px](shots/hero-name-768-first-screen.png), [390px](shots/hero-name-390-first-screen.png), [320 × 640px](shots/hero-name-320-first-screen.png), and [reduced motion](shots/hero-name-reduced-first-screen.png). Desktop, tablet, and phone views were inspected; the grouping stays readable and the wordmark fits at 320px. The capture runner reported no horizontal-overflow warnings. The social preview was refreshed from the current hero.

The gate reports `GATE: OFF (no build active)`. This spacing change used targeted rendering and copy checks; broader audit findings and previous manual-interaction limitations remain recorded below. Kit files and existing checker waivers were preserved.

## SDN image-only replacement — 15 November 2026

Installed the user-approved [office developer](assets/illustrations/sdn-office-developer.png), with the [exact prompt](assets/prompts/sdn-office-developer.md) and original review inputs retained. The active `sdn-container-support` asset now serves this image; the former container illustration is archived in the manifest. The approved PNG and installed original are byte-identical. Only the illustration and its corresponding alternative text changed in the SDN presentation.

The [scope verification](.taste-skill/sdn-image-only-change.json) passed four checks: page/style/component source files are unchanged; portfolio data outside the alternative text is unchanged; the exported earlier-experience section matches its previous markup after normalizing that text; and the installed PNG matches the approved draft. Dates, role title, responsibilities, technologies, and section layout remain intact. No animation was added to this image.

Lint, TypeScript, and the production build passed. Copy lint reported **420 words, 0 FAIL, 0 WARN**. Captured [desktop](shots/sdn-office-1440.png), [1024px](shots/sdn-office-1024.png), [820px](shots/sdn-office-820.png), [768px](shots/sdn-office-768.png), [phone](shots/sdn-office-390.png), [320 × 640px](shots/sdn-office-320.png), and [reduced motion](shots/sdn-office-reduced.png). Dedicated SDN crops are saved for [desktop](shots/sdn-office-1440-section.png) and [phone](shots/sdn-office-390-section.png). Targeted visual checks confirm the approved scene fits the existing frame. Both WebP variants retain transparency; sizes are approximately 268 KB and 97 KB.

Desktop and phone capture metadata recorded no console errors. Local preview checks returned HTTP 200 for the page and new image. The gate reports `GATE: OFF (no build active)`. Broader layout/performance audits and manual keyboard checks were not repeated for this image-only change; their existing findings remain recorded below. Kit files and existing checker waivers were preserved.

## Approved experience artwork and floating objects — 15 November 2026

Installed the approved [card-playing developer](assets/illustrations/automation-card-player.png) and [sales bank-comparison scene](assets/illustrations/sales-bank-comparison.png), replacing the United Elite processing illustration. Their source PNG hashes match the reviewed drafts exactly; originals, exact prompts, reference inputs, and approval metadata are preserved. United Elite now has two readable presentation rows. The existing SDN role follows in an earlier-experience section. The bank-workflow summary describes the user's supplied form without adding rates, approval outcomes, or a preferred bank.

[SVG masks](assets/layers/experience-art.json) isolate precisely three floating logo cards and the bank cloud. CSS moves these objects vertically by 4–8px over 6.5–8 seconds. Figures, held cards, thought dots, desk, and form stay still. Reduced motion and JavaScript-free rendering show the complete original artwork at rest. Motion pauses offscreen and in hidden tabs. No new animation library, pause button, form endpoint, or route was added.

Visual QA caught an empty first scene during lazy loading. The page now paints the complete original first and enables its clipped copies together only after their images load and decode. A failed moving-layer decode retains the still composition. The [behavior harness](.taste-skill/experience-motion-behavior.json) passed load/decode readiness, failure fallback, reduced-motion changes, and per-scene offscreen/hidden-tab handling. [Full-page comparisons](.taste-skill/experience-motion-page-comparison.json) found changes in both floating areas and zero changes above the comparison threshold in sampled stationary regions. [Normal](shots/experience-art-motion-active.png) and [reduced-motion](shots/experience-art-motion-reduced.png) isolated renders also verified cutout boundaries. Temporary diagnostic pages were removed from the export.

Lint, TypeScript, and the production static build passed. Copy lint reported **420 words, 0 FAIL, 0 WARN**. Initial performance checks identified oversized layer variants; the preparation script now supports manifest-defined widths, and these scenes use 480/560/800/960px WebP variants. The [final performance check](.taste-skill/experience-art-performance.log) reported **0 FAIL, 6 WARN**, with no broken requests, no long tasks, and zero layout shift. Remaining warnings concern the existing JavaScript budget, requested fonts, and hero/logo sizing.

Final captures: [1440px](shots/experience-verified-1440.png), [1024px](shots/experience-verified-1024.png), [820px](shots/experience-verified-820.png), [768px](shots/experience-verified-768.png), [390px](shots/experience-verified-390.png), [320 × 640px](shots/experience-verified-320.png), [desktop reduced motion](shots/experience-verified-reduced-1440.png), and [phone reduced motion](shots/experience-verified-reduced-390.png). The experience section can be reviewed separately at [desktop](shots/experience-verified-1440-section.png) and [phone](shots/experience-verified-390-section.png) widths.

The [broader QA log](.taste-skill/experience-art-qa.log) retains **24 raw FAIL, 29 WARN**, matching the preceding consistency audit's counts. These include the existing footer-email focus-visibility failure, heading/style conventions, reserved phone formatting, rigid section heights, and column/container rules. Collision, tap-target, intermediate first-screen, asset, and 320px overflow checks passed; desktop, phone, and narrow-width metadata recorded no console errors. Requested slow service-page loops are documented in the page plan; kit files and existing checker waivers remain unchanged. The gate reports `GATE: OFF (no build active)`. No new manual keyboard/cursor session was recorded.

## Robot refinement and pause removal — 15 November 2026

Replaced the hero artwork with a newly generated [smooth-headed robot](assets/illustrations/hero-n8n-robot-v2.png), without hair or glasses, wearing a charcoal hoodie with pink details. The [exact prompt](assets/prompts/hero-n8n-robot-v2.md) and supplied logo references are preserved. The previous robot remains archived in the manifest. The hoodie uses the official, unmodified white-and-pink n8n SVG variant; eye and logo coordinates were adjusted for the new image.

Removed the pause button from server-rendered markup, its Phosphor imports, all associated styles, and button-related JavaScript state and listeners. The eyes still blink every two seconds and follow fine pointers. Reduced motion, offscreen suspension, hidden-tab suspension, and the static open-eye fallback remain supported. This user-requested removal supersedes the pause-control guidance in the preceding robot revision.

Lint, TypeScript, and the production build passed. Copy lint reported **381 words, 0 FAIL, 0 WARN**. The [updated behavior harness](.taste-skill/mascot-behavior-v2.json) passed pointer direction/bounds, ignored touch events, reduced-motion changes, coarse-pointer handling, and offscreen/hidden-tab suspension. It also verified that no removed button is queried and that the exported HTML contains the new logo and no pause button. This is an isolated logic check, not a manual browser cursor session.

Captured [1440px](shots/robot-v2-1440.png), [1024px](shots/robot-v2-1024.png), [820px](shots/robot-v2-820.png), [768px](shots/robot-v2-768.png), [390px](shots/robot-v2-390-detail.png), [320 × 640px](shots/robot-v2-320-detail.png), and [reduced motion](shots/robot-v2-reduced-detail.png). Inspected desktop, tablet, and narrow-phone renders: the complete figure, face overlays, and hoodie logo align without visible clipping. Desktop capture metadata records no console errors. Both WebP variants retain alpha and are approximately 131 KB and 56 KB. The social preview was refreshed. Local HTTP verification returned 200 and confirmed the new logo and absent pause button.

The gate reports `GATE: OFF (no build active)`. This revision used targeted artwork, behavior, and rendering checks; the prior broader design audit was not repeated and remains not fully green, as recorded below. Kit files and existing checker waivers remain unchanged.

## Animated n8n hero robot — 15 November 2026

Added the user-requested standing robot to the right of the hero, with glasses, a simple smile, and no beard or mustache. The [transparent original](assets/illustrations/hero-n8n-robot.png) was generated with the built-in OpenAI image model using the [saved prompt](assets/prompts/hero-n8n-robot.md) and [supplied reference](assets/references/hero-robot-reference.png). The hoodie displays the new official n8n logo from its [brand guidelines](https://guidelines.n8n.design/logo), stored unchanged in `assets/brands/n8n-logo.svg`. The logo and eyes are HTML layers over the artwork; no logo was imitated by the image model. The manifest preserves the complete canvas so overlay positions remain aligned.

The eyes blink briefly once per two-second cycle and follow fine pointers. A named 44px pause button stops both behaviors. Reduced motion keeps the eyes open and centered and hides the unnecessary pause control. Tracking and blinking stop offscreen or in a hidden tab. Touch pointers do not drive the eyes. The character, logo, and centered open eyes are present without JavaScript. No animation library or WebGL was added.

Lint, TypeScript, and the static production build passed. An isolated event harness verified pointer direction, pause/resume, reduced-motion changes, coarse-pointer behavior, offscreen suspension, and hidden-tab suspension; results are saved in [.taste-skill/mascot-behavior.json](.taste-skill/mascot-behavior.json). This is a logic check, not a manual browser cursor/keyboard session. Browser checks passed accessible names, image alternatives, focus-ring styles, tap targets, collisions, first-screen checks at intermediate widths, and the 320px overflow walk.

Final renders were captured and inspected at [1440px](shots/robot-final-1440.png), [1024px](shots/robot-final-1024.png), [768px](shots/robot-final-768.png), [390px](shots/robot-final-390-detail.png), [320 × 640px](shots/robot-final-320-detail.png), and [390px with reduced motion](shots/robot-final-reduced-detail.png). The whole standing figure remains visible, the logo and eyes align, and mobile content grows instead of clipping. The social preview was refreshed from the final desktop hero. Captures stabilize scrolling and do not establish animation timing.

Copy lint reported 381 words, **0 FAIL, 0 WARN**. Performance reported **0 FAIL, 6 WARN**, with zero broken requests, zero layout shift, and no long tasks. Warnings concern the existing Next.js JavaScript budget, three requested font families, and image sizing at both widths; the vector logo retains its official intrinsic dimensions, and the robot variants retain extra pixels for high-density displays.

The broader design audit remains **not fully green**. The [QA log](.taste-skill/robot-qa.log) and [final consistency report](.taste-skill/robot-consistency/report.json) preserve its findings. Final consistency reported **24 raw FAIL, 29 WARN**, including section heights, footer structure, split-column conventions, reserved phone formatting, heading conventions, and a footer-email focus-visibility failure from the quick checker. Both checked widths recorded no console errors; the intermediate first-screen and 320px overflow checks passed. The hero wrapper was corrected after the first snapshot and checked again. The user-requested character, narrow right column, phone number, growing mobile hero, and compact footer are documented exceptions in the [page plan](.taste-skill/plan.md). Existing checker waivers and unmodified kit files were preserved. The gate reports `GATE: OFF (no build active)`; the earlier full-audit findings remain below.

## Brand, phone, and section scrolling — 15 November 2026

The navigation wordmark now reads `m.abdelmaqsooud`, with an accessible home label that includes the visible name. The hero displays the résumé's verified phone number, `+20 128 008 8412`, below the location as a `tel:` link with a 44px touch target. This explicit request supersedes the original instruction to omit the phone number.

Section links use native CSS smooth scrolling, with instant scrolling when reduced motion is enabled. No scrolling library or additional client code was added. The existing mobile-menu focus handler preserves the native anchor movement. The longer wordmark uses responsive sizing so the menu remains accessible at narrow widths.

Lint, TypeScript, and the production static build passed. The exported HTML includes the updated accessible brand and telephone link; the compiled CSS contains smooth scrolling and its reduced-motion override. Captures were made at [1440px](shots/navigation-update-1440.png), [1024px](shots/navigation-update-1024.png), [768px](shots/navigation-update-768.png), [390px](shots/navigation-update-390.png), [320 × 640px](shots/navigation-update-320.png), and [390px with reduced motion](shots/navigation-update-reduced.png). Desktop and phone hero renders were inspected, including the narrow 320px layout; the brand and contact details fit without visible horizontal clipping. Desktop and narrow-phone capture metadata recorded no console errors. The social preview was refreshed from the updated desktop hero.

The screenshot runner stabilizes scrolling, so captures verify layout rather than animation timing; scrolling behavior and reduced-motion handling were checked in source and compiled CSS. The previous full-audit build remains closed, and the gate reports OFF. Historical full-audit findings remain below.

## About biography and Docker character — 15 November 2026

Replaced the generic About summary with a professional account of graduation, military service, production support at SDN, integrations involving 3S Egypt and Union Courier, Docker Swarm deployments, and current automation work at United Elite. New details come from the user's supplied career history; no military dates, ranks, or performance claims were added. Biography content is stored in the typed `about` object in `src/data/portfolio.ts`.

The About visual is now a standing stylized character based on the supplied reference, wearing a Docker hoodie. It was generated with the built-in OpenAI image model, followed by a cutout-cleanup edit. The [selected original](assets/illustrations/about-docker-engineer.png), [exact prompts](assets/prompts/about-docker-engineer.md), and reference files are preserved under `assets/`. The prior processing-module illustration remains archived. Both WebP variants retain transparency and are about 111 KB. Docker clothing branding is explicitly user-requested; interface icons remain Phosphor.

Lint, TypeScript, and the static production build passed. Copy lint reported 377 words, 0 FAIL, and 0 WARN. Renders were captured at [1440px](shots/about-update-1440.png), [768px](shots/about-update-768.png), [390px](shots/about-update-390.png), and [320px](shots/about-update-320.png). Desktop and narrow-phone About tiles and the tablet render were inspected; the text and complete standing character remain visible, and no console errors were recorded in the desktop/narrow-phone tile metadata. About can grow with its content to avoid clipping the longer story. The gate command reports OFF because the previous full-audit build is closed.

## Compact contact footer — 15 November 2026

The footer now follows its content instead of filling the viewport. Desktop vertical padding is 64px; phone padding is 48px, with smaller gaps between contact elements. The inner wrapper no longer stretches to full height. This user-requested change overrides the kit's full-screen closing-section convention, and is recorded in `AGENTS.md` and the page plan.

Lint, TypeScript, and the production build passed. Inspected [desktop footer](shots/compact-footer-tiles/desktop-sec-06-a.jpg) and [phone footer](shots/compact-footer-tiles/mobile-sec-06-a.jpg) captures measured 500px and 528px respectively, with no console errors recorded by the screenshot runner. The gate reports OFF because no build is active; historical full-audit findings remain below.

## Footer update — 15 November 2026

Changed the email link and its inherited icon color to mint (`#d1ffca`). Removed the large footer wordmark and the copyright/location/illustration-credit row, including their unused styles, as requested.

Lint, TypeScript, and the production build passed. Copy lint reported 0 FAIL and 0 WARN. The rebuilt HTML retains the email link and contains neither removed footer block. [Desktop](shots/footer-edit-1440.png) and [phone](shots/footer-edit-390.png) renders were inspected. The prior gate build is closed, so the gate command reports OFF; the full audit below records the previous build's results.

## Original full audit — 14 November 2026

Original gate result: `GATE: OPEN 8 (rounds used up)`.

Validated on 14 November 2026. The implementation is runnable and exported, but the taste-skill design audit is **not fully green**: eight findings remain after three rounds, with five documented waivers and fourteen nonblocking warnings. Kit files and checker behavior were preserved.

## Passing checks

- `npm run lint`, `npm run typecheck`, and `npm run build` passed. The build produces a static `out/` directory.
- Final copy lint: 349 words, **0 FAIL, 0 WARN**.
- Final performance audit at desktop and phone widths: **0 FAIL, 4 WARN**. Both runs reported zero layout shift, zero broken requests, and zero unmounted modules. Warnings concern the Next.js JavaScript budget and the three requested font families, once per viewport.
- Automated checks passed accessible control names, image alternatives, heading order, skip link, focus visibility, menu state, and tap targets. Reduced-motion and hidden-content checks passed in the full audit. The native mobile disclosure and its selection, Escape, focus-management, and resize handlers were reviewed in source; no separate manual keyboard session was recorded.
- Narrow-screen checks reported no horizontal overflow failure at 320px.
- All internal anchors and referenced local files resolve. Local HTTP checks returned 200 for the page, original PDF, WebP artwork, and motion module.
- The hero has no image. All five illustration originals have real alpha transparency; their large WebP derivatives are approximately 111–172 KB each.
- The exported résumé's SHA-256 matches the supplied PDF. The webpage HTML contains no phone number; the original downloadable PDF retains it as requested.

## Visual review

Full-page captures were inspected at each target viewport:

| Viewport | Final capture |
|---|---|
| 1440 × 900 | [Desktop](shots/final-1440.png) |
| 1024 × 768 | [Small desktop](shots/final-1024.png) |
| 820 × 1180 | [Tablet](shots/final-820.png) |
| 768 × 1024 | [Small tablet](shots/final-768.png) |
| 390 × 844 | [Phone](shots/final-390.png) |

The layout stress check also captured 320px. Desktop sections occupy the planned eight screens. Phone sections grow to fit their stacked content. Every illustration renders, text stays readable, and the footer links have sufficient space. `public/share.jpg` is a fresh capture of this page's own hero.

## Five applied waivers

Exact targets and reasons are stored in [.taste-skill/waivers.json](.taste-skill/waivers.json).

| Check | Reason |
|---|---|
| `no-visual`, skills | The approved skills section uses categorized text and small Phosphor glyphs, without a large picture or product mockup. |
| `button-styles` | The same primary control is black on light surfaces and inverted on the black footer, alongside one outlined secondary style. |
| `copy-headings` | HireHustle and employer names are factual names from the résumé; their adjacent categories and role descriptions provide context. |
| `heading-scale` | Project/employer titles and skill/education subheadings have distinct, consistent visual roles and sizes. |
| `container-edges`, navigation | The approved white pill has internal padding; its outer edges align with the page. |

## Eight remaining design findings

These remain visible in the gate result; they were not silently waived or suppressed.

1. `container-edges`, project tags: pill text is inset from the page edge.
2. `container-edges`, project copy: text sits inside the approved 40px card padding.
3. `container-edges`, experience tags: text sits inside its chip padding.
4. `split-pair`, HireHustle: the inner grid follows the padded card edges rather than the outer page edges.
5. `split-pair`, commerce backend: the same padded-card alignment rule is flagged.
6. `screen-height`, phone projects: stacked content occupies roughly 2.17 screens, exceeding the kit's strict two-screen limit.
7. `screen-height`, phone experience: stacked content occupies roughly 2.26 screens. The approved plan allows phone content to grow.
8. `neighbour`, phone skills: the kit's whole-screen framing includes part of the footer after the naturally sized skills section.

The gate also retains fourteen nonblocking warnings, including the intentional About word-highlight behavior, project/experience sections without action buttons, varied whitespace, and section-ground heuristics. Raw findings are available locally in `.taste-skill/gate-final.log` and `.taste-skill/gate.json`; broader audit and performance logs remain in the same directory. QA intentionally returns a nonzero status for unresolved findings.

## Assets and delivery

Kind: service portfolio. Client direction: warm gray, black/white surfaces, mint/yellow accents; Anton, Inter, IBM Plex Mono; editorial text hero; padded pill navigation; solid buttons; black footer. One `word-highlight` moment appears in About, with no shaders, WebGL, scene, or background loop. Voice: technical, direct, first person, using actual résumé facts. No facts or client name were invented.

All artwork was generated with the built-in OpenAI image model. Original PNGs are in `assets/illustrations/`: `automation-systems.png`, `united-elite-operations.png`, `sdn-container-support.png`, `hirehustle-ranking.png`, and `commerce-api.png`. The [manifest](assets/manifest.json) maps every file to its [exact generation prompt](assets/prompts/). No client photographs or replacement screenshots are outstanding.

The original résumé, real email, LinkedIn, and GitHub are connected. There is no contact form, backend, or simulated send confirmation. No canonical production domain is configured; Next.js uses localhost for social metadata until hosting is chosen. Publication remains outside this task.
