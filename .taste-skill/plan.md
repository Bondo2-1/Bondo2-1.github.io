# Service portfolio
Client direction: warm-gray editorial palette, Anton + Inter + IBM Plex Mono, editorial hero with a user-requested n8n robot, pill navigation, flat white cards, black footer, solid buttons, wordmark, and one word-highlight moment. These are approved choices rather than a random palette deal.

## Screens at 1440 × 900

- Hero: role, location, phone, résumé download, projects anchor; editorial type beside a generated clean-shaven robot with an official n8n logo. The lowercase navbar wordmark remains; the title-case personal name sits directly above the role headline with a 20px desktop / 16px phone gap. Desktop metadata stays aligned on the right; its empty row is removed on smaller screens. One desktop screen; phone content grows. User-requested changes on 15 November 2026 supersede the initial text-only hero.

Desktop spacing update, 16 November 2026: preserve the hero content's intrinsic height and reserve 40px above the contact row (32px below 801px window height). Short desktop windows cap headline size at 11svh; when content still cannot fit, the hero grows beyond the viewport instead of overlapping the location or phone. Normal desktop views retain a full-screen hero. Phone typography and artwork remain unchanged.

Local typing experiment: `.hero-code` is decorative artwork behind the mascot. The requested loop types the snippet, holds it briefly, then fades before starting again. The user requested removal of the background pause button, overriding the design check's `loop-pause` requirement for this effect. The loop suspends offscreen and in hidden tabs, and reduced motion displays the complete still snippet. The design audit's contrast, busy-ground, and container-edge findings for the code reflect its intentional blur, muted color, and offset within the illustration. The snippet is hidden from assistive technology.

Local entrance adjustment: the name, introductory line, and hero buttons fade over 880ms and rise 7px. The original stagger still sets their order. A page script adapts these animations after creation so the motion kit stays intact. Reduced motion displays the hero at rest.
- Projects: HireHustle matching and commerce API; two distinct generated conceptual illustrations; 2 screens.
- Experience: United Elite role details with the approved card-playing developer, then its approved sales/bank-comparison illustration on a separate row; 2 screens. Three logo cards and the bank cloud drift slowly; characters and form stay still.
- Earlier experience: the SDN support role with its approved seated office developer showing PostgreSQL, Docker Swarm updates, and API logs; image-only replacement on 15 November 2026. Existing role text and layout are preserved. One desktop screen, growing with stacked content on smaller viewports.
- About: graduation, military service, SDN production support and Docker Swarm deployments, then current United Elite automation work; standing Docker character from the user reference and Cairo University education. Content can grow to fit the longer biography. Word-highlight emphasizes the career introduction. Updated 15 November 2026.
- Skills: six factual skill groups with Phosphor interface glyphs; 1 screen.
- Contact/footer: real email, GitHub, LinkedIn, original résumé; content height with balanced padding. The user removed the lower name/legal rows and requested a shorter black area on 15 November 2026.

## Voice

Technical and direct; first-person summary, specific project descriptions, actual tool names; no fabricated outcomes, customers, or numbers. Audience: recruiters. Primary action: Download Resume.

## Motion and overrides

The hero enters once; controls answer hover and press; word-highlight is the only scroll-driven moment. The hero robot blinks every two seconds and watches the fine pointer as explicitly requested. The revised character has no hair or glasses and wears a charcoal hoodie with pink details and the official white-and-pink n8n logo. The user explicitly removed the pause button on 15 November 2026; reduced motion still keeps the eyes open and centered. Motion is suspended offscreen and when the tab is hidden. These requested behaviors override the skill's service-page loop and pause-control defaults without changing kit files. Section links use native smooth scrolling, with instant scrolling under reduced motion. No scroll-jacking, shader, carousel, or scroll reveal.

User-approved departures from skill defaults: illustration-first imagery, the supplied colors and three fonts, uppercase display headings, rounded pill navigation, functional Phosphor glyphs with text-only technology names, and real email/social links. Preserve the kit; record specific checker waivers only when an actual finding conflicts with these choices.

The annotated hero reference requests a narrow character area on the right. Its 1.7:1 text/art allocation intentionally differs from the equal-width project and experience rows; preserve headline legibility and the whole standing figure. The hero character and two-second blink are explicit user overrides, rather than additional kit effects. The confirmed phone number and compact footer also override the kit's reserved-contact and full-screen-footer defaults. Keep these exceptions scoped to their requested elements; raw checker results remain in the validation report.

The user approved both United Elite images on 15 November 2026 and requested slow up/down motion specifically for the logo cards and bank cloud. Their 6.5–8 second cycles and 4–8px travel override the kit's shorter loop cadence and service-page loop restriction. Approved PNGs remain byte-identical; SVG masks separate moving areas in the browser. No regeneration or logo/text redraw was required. The two United Elite rows keep artwork readable; the existing SDN role follows in its own section. No added pause button, extra moment, rotation, or whole-scene movement.
