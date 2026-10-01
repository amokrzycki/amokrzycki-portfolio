# Portfolio Direction

## 1. Purpose

This portfolio is not a résumé rendered as a website.

It is a product in itself and should demonstrate the same qualities expected from the work it presents:

- visual restraint,
- strong information architecture,
- polished UX,
- technical depth,
- attention to detail,
- performance,
- accessibility,
- thoughtful engineering.

The primary audience is technical recruiters, engineering managers, product teams, founders and other developers.

The site should make it immediately clear that Adrian is capable of taking ownership beyond a narrow frontend specialization.

---

## 2. Positioning

Adrian is a product-oriented full-stack engineer with a strong frontend bias.

Frontend engineering is the strongest specialization, but not the boundary of competence.

The defining characteristic is breadth combined with willingness to go deep where the problem requires it.

Typical scope includes:

- UI and interaction design,
- frontend architecture,
- TypeScript and JavaScript,
- backend services and APIs,
- state and data synchronization,
- application security,
- performance,
- databases,
- Rust,
- desktop applications,
- infrastructure,
- deployment,
- networking,
- reverse engineering,
- debugging systems outside the immediate application layer.

The portfolio should communicate:

> I care about how the interface feels, but I also care about what happens after the request leaves the browser.

Do not present Adrian as a generic "Frontend Developer who also knows backend".

Do not present him as a collection of unrelated technologies.

Present him as an engineer who follows the problem across abstraction boundaries.

---

## 3. Professional context

Commercial software development experience since 2021.

Current work is effectively full-stack with a frontend-heavy profile, despite historical job titles being frontend-oriented.

Professional experience includes:

- complex React and TypeScript applications,
- product-facing UI engineering,
- application architecture,
- monorepos,
- state management,
- API integration and design,
- backend contributions,
- Rails,
- Node.js,
- automated testing,
- performance work,
- telemetry and observability,
- application security,
- technical debt reduction,
- internal tooling,
- technical ownership,
- temporary technical leadership,
- reverse engineering undocumented systems.

Education:

- M.Sc. in Information Technology, Cybersecurity specialization,
- B.Sc. in Information Technology, Internet and Mobile Technologies,
- earlier technical IT education.

Education and certifications are supporting evidence, not the core of the site's identity.

Do not turn the portfolio into an education/certification showcase.

---

## 4. Core idea

The portfolio should feel like it was designed and engineered by the same person.

The visual layer and technical layer must reinforce each other.

A useful internal principle:

> From interface to infrastructure.

This does not necessarily need to appear as public-facing copy.

Alternative conceptual statements:

> I build software across the stack, with an eye for the part people actually use.

> Interfaces first. Systems included.

> I design the surface and build what keeps it running.

Avoid generic slogans such as:

- "Crafting digital experiences"
- "Turning ideas into reality"
- "Passionate developer"
- "Building delightful experiences"
- "Pixel-perfect developer"
- "Bridging design and technology"

---

## 5. Personality

The site should feel:

- precise,
- calm,
- confident,
- technically credible,
- slightly playful,
- highly polished,
- opinionated without being loud,
- premium without looking expensive for its own sake.

It should not feel:

- corporate,
- sterile,
- pretentious,
- cyberpunk,
- "hacker",
- startup SaaS,
- portfolio-template-like,
- experimental for the sake of experimentation.

There should be small moments of personality rather than a constant stream of visual effects.

Target ratio:

95% controlled and intentional.

5% unexpected detail.

---

## 6. Visual direction

Reference qualities:

- Apple-like restraint,
- editorial composition,
- strong typography,
- generous whitespace,
- excellent rhythm,
- carefully controlled motion,
- premium product presentation,
- strong real-world screenshots and product imagery.

"Apple-like" refers to discipline, hierarchy and presentation quality.

It does NOT mean:

- copying apple.com,
- excessive blur,
- glass everywhere,
- huge gradients,
- oversized product typography on every section,
- scroll-jacking,
- gratuitous 3D scenes.

The website should feel expensive because very little is arbitrary.

---

## 7. Design rules

Prefer:

- typography-led layouts,
- asymmetric composition where appropriate,
- large areas of negative space,
- strong type hierarchy,
- authentic application screenshots,
- full-width project moments,
- subtle depth,
- careful transitions,
- clear hover/focus states,
- details that reward exploration,
- content-first layouts.

Avoid:

- grids of generic project cards,
- skill bars,
- percentage proficiency,
- large clouds of technology logos,
- floating icons,
- fake terminal windows,
- fake code editors,
- decorative dashboards,
- gratuitous Bento grids,
- excessive cards,
- pill-shaped everything,
- excessive border radii,
- glowing gradient blobs,
- glassmorphism as decoration,
- parallax everywhere,
- custom cursor gimmicks,
- constant scroll reveals,
- marquee text without purpose,
- meaningless statistics,
- stock imagery,
- AI-generated visual filler.

Every decorative element must justify its existence.

---

## 8. Interaction and motion

Motion should clarify relationships, provide continuity or add tactility.

Default hierarchy:

1. CSS transitions and animations.
2. Native browser capabilities.
3. Motion library only where the interaction genuinely benefits from it.

Potential uses:

- page transitions,
- project image transitions,
- subtle hover responses,
- navigation state,
- selected-work transitions,
- command palette,
- interactive product demonstrations.

Avoid:

- animating every section into view,
- repetitive fade-up animations,
- excessive springs,
- constant cursor-following elements,
- forcing the user through timed sequences.

Respect `prefers-reduced-motion`.

The site must remain excellent without animation.

---

## 9. Technology direction

Primary architecture:

- Astro,
- TypeScript,
- semantic HTML,
- custom CSS,
- static generation.

React should be used as an island only where component state or interaction complexity justifies it.

React is a tool, not the architecture of the whole website.

Do not default to Tailwind.

Prefer a small explicit CSS design system with tokens for:

- spacing,
- typography,
- colors,
- layout widths,
- easing,
- durations,
- radii,
- breakpoints.

Potential interactive React islands:

- command palette,
- advanced project demo,
- complex media viewer,
- isolated interactive experiments.

Do not introduce a dependency unless it earns its place.

---

## 10. Performance

Performance is part of the design.

Targets:

- static HTML wherever possible,
- minimal JavaScript,
- no unnecessary hydration,
- aggressive image optimization,
- responsive images,
- careful font loading,
- no layout shifts caused by media,
- excellent Core Web Vitals.

The portfolio itself should serve as evidence of engineering discipline.

---

## 11. SEO architecture

English is the default language.

Use real URLs for both languages.

Example:

/
/work/random-frame/
/work/kajtek/

/pl/
/pl/work/random-frame/
/pl/work/kajtek/

Requirements:

- static HTML,
- unique title and description per page,
- canonical URLs,
- hreflang for `en`, `pl` and `x-default`,
- sitemap.xml,
- robots.txt,
- Open Graph metadata,
- social images,
- semantic heading hierarchy,
- JSON-LD where appropriate,
- descriptive internal links,
- accessible image descriptions.

SEO should be supported primarily by useful case-study content, not keyword stuffing.

---

## 12. Information architecture

Suggested top-level navigation:

- Work
- About
- Contact
- EN / PL

Optional:

- Résumé

Do not create navigation items merely because portfolios traditionally have them.

Homepage:

1. Hero
2. Selected work
3. Short statement about engineering approach
4. Capabilities / range
5. About
6. Contact
7. Small note that the portfolio itself is also engineered as a project
8. Footer

Projects should have dedicated case-study pages.

---

## 13. Selected work

### Kajtek

Kajtek is an internet radio player inspired by the Polish Unitra/Kajtek cassette-player aesthetic.

It is useful in the portfolio because it demonstrates product and interface craft without hiding behind a heavy frontend framework.

Relevant areas to expose:

- vanilla TypeScript architecture,
- custom UI and visual identity,
- skeuomorphic/retro design handled with restraint,
- internet radio streaming,
- multiple provider integrations,
- stream failover,
- ad detection / station switching,
- track blacklist,
- album artwork resolution,
- favorites and history,
- Web Audio visualisation,
- animated cassette reels and VU meter,
- theme/accent system,
- CI/CD,
- deployment,
- provider/API investigation and reverse engineering.

The story is not:

> "I built a radio player."

The stronger story is:

> A deliberately lightweight web product where interface design, audio APIs, unreliable external streams and reverse-engineered integrations all had to behave as one coherent experience.

Kajtek should primarily represent:

**product craft + frontend engineering + curiosity.**

---

### Random Frame

Random Frame is a cross-platform desktop application for exploring random public images one frame at a time.

The client uses Tauri 2 with a plain HTML/CSS/TypeScript interface and a Rust backend.

Relevant areas:

- desktop UX,
- custom window chrome,
- history,
- favorites,
- statistics,
- keyboard-oriented interaction,
- Linux and Windows distribution,
- automatic updates,
- source identifier research,
- Tauri/Rust integration,
- local persistence,
- privacy-conscious architecture,
- optional encrypted synchronization.

The synchronization subsystem deserves particular attention.

It includes:

- client-owned encryption,
- recovery-key-based synchronization,
- encrypted snapshots,
- merge logic,
- optimistic concurrency,
- revision ETags,
- compare-and-swap updates,
- conflict handling,
- independent Rust/Axum synchronization server,
- SQLite durability,
- authentication,
- nginx,
- systemd,
- Cloudflare,
- deployment workflow,
- backups and rollback.

The story is not:

> "I made a random image viewer."

The stronger story is:

> A deliberately simple product whose implementation expands into desktop engineering, local-first state, cryptography, synchronization, backend design and production infrastructure.

Random Frame should primarily represent:

**systems thinking + engineering breadth + product restraint.**

---

## 14. Relationship between the projects

The two projects are complementary.

Kajtek demonstrates:

- UI taste,
- frontend craftsmanship,
- product thinking,
- lightweight web architecture,
- playful interaction.

Random Frame demonstrates:

- application architecture,
- desktop engineering,
- Rust,
- synchronization,
- backend,
- privacy,
- infrastructure.

Together they support the main positioning:

Adrian is frontend-heavy, but the work does not stop at the frontend.

---

## 15. Case-study philosophy

Case studies should not read like README files.

Each should explain:

1. What the product is.
2. Why it exists.
3. What made it interesting.
4. Important design decisions.
5. Important engineering decisions.
6. Difficult constraints.
7. Selected implementation details.
8. What changed during development.
9. Current result.
10. What Adrian would improve next.

Technical depth should progressively disclose.

A non-technical reader should understand the project without reading implementation details.

A developer should be able to go deeper.

Use optional sections such as:

- Engineering details
- Architecture
- Under the hood
- Design decisions

Do not dump every technology onto the first screen.

---

## 16. Homepage copy philosophy

Copy should be concise and concrete.

Prefer evidence over self-description.

Instead of:

> I am a versatile developer passionate about creating performant applications.

Prefer:

> I work mostly on interfaces. The boundary tends not to last very long.

Or:

> I build the interface, then keep following the problem.

Or:

> Frontend-heavy. Product-minded. Comfortable beyond the browser.

The site should demonstrate breadth before explicitly claiming it.

---

## 17. Skills presentation

Do not create a conventional skills section containing dozens of logos.

If capabilities are shown, organize them by the kinds of problems Adrian solves.

Possible groups:

### Interfaces

Product UI, interaction, accessibility, responsive systems, performance.

### Applications

React, TypeScript, state, data synchronization, testing, desktop applications.

### Systems

APIs, Node.js, Rails, Rust, databases, security.

### Delivery

Linux, Docker, CI/CD, deployment, observability, networking.

Technologies may appear as supporting details, not as the primary hierarchy.

---

## 18. About section

Do not write a generic biography.

The section should explain the engineering mentality.

Core idea:

Adrian started and remains frontend-heavy, but naturally follows technical problems outside the frontend layer.

He is equally willing to tune UI spacing, inspect an API, trace application state, debug a backend service, configure deployment infrastructure or question the surrounding network.

This breadth should be framed as ownership rather than indecision.

---

## 19. Portfolio as a project

The site itself is evidence.

Possible understated line near the end:

> The site is part of the work too.

Optionally expose:

- architecture,
- performance,
- accessibility,
- localization,
- SEO,
- design system.

Do not make the portfolio itself a third featured project equal to Kajtek and Random Frame.

---

## 20. AI design constraint

AI tools may critique and propose alternatives, but they must not continuously expand the visual language.

Any proposed change must preserve this document's principles.

A critique should answer:

- What concrete problem exists?
- Is it functional, visual or subjective?
- Does the proposed change preserve the established visual system?
- Does it improve hierarchy, usability, accessibility or clarity?
- Does it add unnecessary visual entropy?

Do not implement changes simply because an AI critique can find something different to do.

Consistency beats perpetual optimization.

---

## 21. Final standard

The desired reaction is not:

> "This developer knows a lot of technologies."

It is:

> "This person clearly knows how to build things."

And then, after looking deeper:

> "Apparently much more of the system than I initially expected."
