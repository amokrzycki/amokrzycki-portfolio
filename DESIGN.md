---
name: Adrian Mokrzycki Portfolio
description: A restrained editorial publication of software and its supporting systems.
colors:
  canvas: "#f7f8f8"
  ink: "#20272b"
  muted: "#59636a"
  accent: "#294b72"
  rule: "#d9dfe1"
  frame-ground: "#e7ecef"
  kajtek-ground: "#e9ece4"
  basket-ground: "#e5eeea"
  selection-background: "#cbdbea"
  selection-text: "#1c3652"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3.5rem, 7.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  case-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  project-title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(25px, 2.65vw, 36px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  reading-body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.65
  link:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.65
  metadata:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  plate: "2px"
  viewer: "4px"
  capture: "8px"
spacing:
  gutter: "clamp(22px, 4.45vw, 64px)"
  section-gap: "clamp(80px, 10vw, 144px)"
  column-gap: "40px"
  reading-paragraph: "22px"
  disclosure-gap: "24px"
  link-gap: "14px"
  viewer-padding: "20px"
components:
  text-link:
    textColor: "{colors.accent}"
    typography: "{typography.link}"
  navigation-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  product-plate-frame:
    backgroundColor: "{colors.frame-ground}"
    rounded: "{rounded.plate}"
    padding: "clamp(30px, 5.8vw, 84px) clamp(16px, 3vw, 44px)"
    width: "100%"
  product-plate-kajtek:
    backgroundColor: "{colors.kajtek-ground}"
    rounded: "{rounded.plate}"
    padding: "clamp(50px, 9vw, 130px) clamp(30px, 5.8vw, 84px)"
    width: "100%"
  product-plate-basket:
    backgroundColor: "{colors.basket-ground}"
    rounded: "{rounded.plate}"
    padding: "clamp(18px, 3.4vw, 48px)"
    width: "100%"
  viewer-close:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.link}"
  image-viewer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.viewer}"
    width: "min(1400px, calc(100vw - 48px))"
---

# Design system

## Authority and mode

[docs/portfolio-direction.md](docs/portfolio-direction.md) is the constitution. This Experience surface presents Adrian and three personal projects through a restrained editorial composition. [docs/homepage-direction.md](docs/homepage-direction.md) records homepage order. CSS in src/styles/global.css owns the implemented values.

## Color and type

Cool porcelain, charcoal, slate and restrained blue surround the products. Random Frame uses a blue-grey ground; Kajtek uses olive-grey; Zielony Koszyk uses a muted mint ground (#e5eeea in light mode, #27312d in dark mode). Preserve the products' own interface colors. The default follows the OS/browser color scheme. A warm charcoal dark canvas (#1c1c1a), soft off-white ink (#e5e4df), stone secondary copy (#b4b3ab), and subdued slate (#292d2d) and olive (#2c2e27) plates preserve the same hierarchy. Shared semantic CSS tokens use light-dark() with explicit color-scheme overrides; imagery retains its original colors.

Self-hosted variable Manrope supplies every type role. Latin is preloaded; Latin Extended supports Polish. Display and section headings use medium weight and balanced wrapping. The name uses semibold in the header. Display type stops at 6rem; case titles stop at 5rem. Body is 16px, narrative is 15px and metadata is 12–13px. Captions use 13–14px. Reading copy stops at 70ch. No decorative monospace role is needed.

## Composition

The content width is 1280px with fluid 22–64px gutters and 80–144px major gaps. Hero uses a 7:5 split. About, working method, project captions and case sections use 5:7. Random Frame's main image spans both columns. Kajtek's opening uses 4:8, with its text beside the cassette. Rules separate ideas without enclosing text in cards.

The homepage order is header, name and introduction, concise About, selected work beginning with Random Frame, working-method interlude, Kajtek, Zielony Koszyk, email action and footer. Zielony Koszyk opens with a 5:7 text row above a full-width catalogue plate; its case heading uses 7:5. The plate uses tighter 18–48px padding so the storefront remains legible. The large ownership statement and capabilities list have no role in this composition.

At 700px, navigation wraps into its own row and the compositions become single columns. Project introductions precede images and descriptions. Captions follow their media. Radio walkthroughs use vertical flows and two-column controls. The email action scales to fit narrow screens; the footer stacks. There is no hamburger menu.

## Media

A primary interface view establishes each project. Selected dialog, playlist, product-editor and order crops appear inside the relevant narrative section. Details use a 5:7 image/caption composition; portrait crops stop at 480px so a supporting editor does not overwhelm its section. The playlist and order use a wide strip. Long original pages are available in the viewer rather than repeated in the page. Responsive lossless PNGs preserve text. Zielony Koszyk captures use the English application in light mode, with Playwright at 1440 × 1000 and 2× density. Temporary copies of the real frontend/backend run against a disposable PostgreSQL database with public catalogue data and a synthetic account. The order was placed through the checkout; the editor intentionally shows both languages. Asset notes in src/assets/README.md record framing and provenance.

Images with useful detail are stable public links enhanced by the shared native dialog. A visible Enlarge label and zoom cursor signal inspection. The viewer fits the original to the available space and supports zoom up to eight times that fitted size, with scrolling; Close, Escape and backdrop dismissal restore focus. Native modality contains keyboard focus. Viewer controls stay outside the scroll area. Modified clicks and no-JavaScript navigation open the public original. Transformation URLs are never link destinations.

## Depth and shapes

Tonal image plates are flat with 2px corners. Captures use 8px corners, reduced to 4px on mobile, and the shared offset soft shadow `0 18px 40px -15px`, with `#20272b42` in light mode and `#10100e66` in dark mode. The viewer uses 4px corners and a dark translucent backdrop. No decorative card system or pill family is present.

## Reading and interactions

Native topic-specific disclosures reveal two short technical paragraphs: the mechanism and its limitation. The decision belongs in the visible narrative. A blue summary, fine rule, 44px minimum height and rotating plus establish a consistent affordance.

Random Frame's radio walkthrough illustrates revisions r7–r9 across two devices and the server, including client-side merge and bounded retries. Kajtek illustrates ESKA's REST/HLS disagreement, title comparison, combination and expiry. Zielony Koszyk follows password acceptance, a pending token, transactional challenge consumption and session issuance on a mint ground. Two columns distinguish client credentials from server state; an account-access line keeps the boundary explicit. Native radio controls precede the panels in DOM and visual order. CSS selects a panel without JavaScript and reserves enough space for every stage. Unsupported selector behavior leaves a readable static sequence.

The header has a quiet 44px theme disclosure with crossfading monitor, sun and moon icons. Native radio choices select System, Light or Dark; localized help explains that System follows device settings. Escape restores focus, and outside clicks or leaving the control dismiss it. A head script restores explicit overrides before paint; choosing System removes the stored override. System changes remain live, including without JavaScript. The control uses no hydration or dependency.

Links use restrained SVG arrows, a one-pixel underline on hover/focus and a 44px minimum action height. The language link points to the equivalent static route. Focus outlines are blue with a six-pixel offset; text selection and scrollbars follow the palette. The skip link leads to main.

## Motion and delivery

Content is visible immediately. Link arrows shift three pixels over 220ms; supported cross-document transitions use 150ms. Reduced motion disables the transitions and smooth scrolling. There are no scroll reveals or animation dependencies.

Astro generates ten static routes. Project navigation cycles through the selected-work order: Random Frame, Kajtek, Zielony Koszyk. Explanations are optional section metadata; Zielony Koszyk uses catalogue/editor/order captures and an auth walkthrough, following shared product identity, order snapshots and the authentication boundary. Its case study links to both source repositories and has no live or download action. The small image-viewer script is shared; walkthroughs and disclosures use native HTML/CSS. Absolute canonical, alternate-language and Open Graph URLs depend on the confirmed SITE_URL. No production origin, availability, benchmark or outcome is invented.
