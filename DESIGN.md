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
    padding: "clamp(30px, 5.8vw, 84px) clamp(28px, 8vw, 115px)"
    width: "100%"
  product-plate-kajtek:
    backgroundColor: "{colors.kajtek-ground}"
    rounded: "{rounded.plate}"
    padding: "clamp(50px, 9vw, 130px) clamp(30px, 5.8vw, 84px)"
    width: "100%"
  viewer-close:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    typography: "{typography.label}"
  image-viewer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.viewer}"
    padding: "{spacing.viewer-padding}"
    width: "1150px"
---

# Design System: Adrian Mokrzycki Portfolio

## Overview

**Creative North Star: "A publication of software and its supporting systems"**

A calm, light-first editorial portfolio. Typography, proportion, negative space and complete authentic application captures carry the visual identity. Adrian's identity remains compact; the work receives generous space. The applications provide their own character inside one coherent portfolio system.

This is an Experience surface: visitors understand the products before opening technical detail. The durable visual authority is [portfolio-direction.md](portfolio-direction.md), with the approved first-surface contract in [docs/homepage-direction.md](docs/homepage-direction.md). This document records the implemented system rather than expanding it.

**Key Characteristics:**

- Cool porcelain, charcoal, slate and restrained blue.
- Manrope typography, open compositions and fine structural rules.
- Full application captures with understated tonal grounds.
- Native interactions and brief, optional motion.

The first design review disposition is **SHIP**, with no material fixes. This is a reviewed first pass, not a production launch; the production hostname remains unresolved.

## Colors

The frontmatter owns the palette values; the existing CSS custom properties in [global.css](src/styles/global.css) remain the implementation source.

### Primary

- **Restrained blue** (`accent`): text actions and visible keyboard focus. It signals interaction without becoming a decorative wash.

### Neutral

- **Cool porcelain** (`canvas`): page and image-viewer background; the site declares a light color scheme.
- **Charcoal** (`ink`): headings and primary text.
- **Slate** (`muted`): supporting copy, captions and metadata.
- **Fine grey** (`rule`): section dividers, disclosures and viewer controls.
- **Pale blue-grey** (`frame-ground`): the Random Frame product plate.
- **Muted olive-grey** (`kajtek-ground`): the Kajtek product plate.
- **Selection blue** (`selection-background`, `selection-text`): a controlled text-selection pair.

**The Palette Economy Rule.** Let the products retain their real interface colors; keep the surrounding portfolio inside this palette.

## Typography

**Display and Body Font:** self-hosted variable Manrope, with a sans-serif fallback. Latin and Latin Extended WOFF2 files support both languages; Latin is preloaded, with `font-display: swap` and font synthesis disabled. The font is distributed under the SIL Open Font License in [public/fonts/OFL.txt](public/fonts/OFL.txt).

The type is expressive through scale and spacing. Display and heading roles use medium weight in the finished CSS; navigation uses medium weight and the compact name uses semibold. Headings balance their wrapping. No distinct monospace role is currently implemented.

### Hierarchy

- **Display:** the homepage statement; use the normative fluid display token, not an oversized greeting.
- **Case display:** a smaller project-name scale that inherits display leading and tracking.
- **Headline:** section titles. Case-body headings are more compact (`clamp(22px, 2.1vw, 29px)`); the ownership statement uses `clamp(25px, 2.9vw, 39px)` with more open leading (1.3).
- **Project title:** the name beneath a desktop capture, or above a mobile capture.
- **Body / reading body:** base interface text and quieter narrative text. Reading columns stop at 70ch; project supporting copy stops at 53ch and uses slightly looser leading (1.8).
- **Label / link / metadata:** navigation and viewer controls, text actions, then quiet project descriptors. There is no decorative all-caps label system.

At the mobile breakpoint the homepage display uses `clamp(3.25rem, 11.4vw, 4.75rem)` in English. Polish uses `clamp(1.875rem, 8.5vw, 3.7rem)` to preserve its full words. Mobile case titles use `clamp(2.8rem, 10vw, 4.5rem)`. Localization must preserve readability rather than force identical title sizes.

## Layout

The content width is capped at 1280px; the outer shell includes the fluid gutters on both sides. Major spacing is fluid through the gutter and section-gap tokens. These are an open editorial layout, not a fixed twelve-column CSS grid: homepage positioning and ownership sections use a 7:5 split, while project captions and case-study rows use 5:7. Media spans both columns. Section rules establish rhythm without enclosing paragraphs in cards.

Two viewport breakpoints are implemented:

- **At 1000px and below:** the ownership section becomes equal columns and its definition-list rows stack their labels above descriptions.
- **At 700px and below:** the header wraps into a full-width navigation row; primary compositions become one column. Project order is identity, media, caption. The ownership list resumes a compact label/description split, and footer content stacks. Product-image corners tighten, enlargement labels stay visible, and explicit mobile spacing replaces selected fluid values.

There is no hidden hamburger navigation. Mobile navigation links receive at least 44px in each direction. Media remains uncropped, responsive and independently enlargeable.

The completed verification supplied by the finish pass covers six static routes: `/`, `/pl/`, and both project case studies under `/work/` and `/pl/work/`. Homepage and representative case pages had no horizontal overflow at 320, 390, 768, 1024 and 1920px. Absolute canonical, hreflang and Open Graph URL metadata is conditional on configured `SITE_URL`; do not invent a production hostname.

## Elevation & Depth

The page is flat at rest. Tonal plates separate the application screenshots from the canvas; fine rules separate reading sections. Shadows belong to application captures and the modal viewer, not to every content block.

### Shadow Vocabulary

- **Capture depth** (`0 18px 40px -15px #20272b42`): the real application image above its pale plate.
- **Modal depth** (`0 24px 80px #10191b4d`): the native image viewer, accompanied by a dark translucent backdrop (`#141d24bb`).

**The Evidence Depth Rule.** Use depth to clarify the displayed product or modal state, not to add decorative containers around copy.

## Shapes

Corners are gently softened, with separate plate, viewer and capture radii in the frontmatter. Captures tighten to the viewer radius on mobile. There is no pill-shaped component family. Fine borders are one pixel; the global keyboard outline is two pixels with a six-pixel offset. Product plates clip their contents, while the viewer contains the full image inside available viewport height.

## Components

### Text actions and navigation

Actions remain plain text links with inline SVG arrows. Text links have a minimum 44px height; underline thickness is one pixel with a six-pixel offset. Hover and focus reveal the underline, and arrows shift three pixels horizontally. The name links home, and the language link moves to the equivalent real EN/PL route. The compact header uses no decorative badge or active-navigation pill.

### Product plates

A full-width native button places the authentic application capture on its project ground. The button has a translated accessible enlargement name, and the image retains descriptive alt text. Random Frame and Kajtek preserve distinct source widths and padding; these are project presentation variants, not additional generic card components. The first homepage capture and case-study captures load eagerly; other homepage media loads lazily through Astro responsive images.

The enlargement label appears on hover or keyboard focus and remains visible on mobile. On hover-capable devices only, the image lifts three pixels. No image is cropped to fill an arbitrary card ratio.

**Capture provenance:**

- [random-frame.webp](src/assets/random-frame.webp) and [its provenance](src/assets/random-frame.webp.json): captured from the actual local Random Frame frontend at 1100×720 on 2026-10-01. Its existing empty state was revealed because the Tauri backend cannot run in the browser; dialogs and the backend error were hidden. The case study discloses this limit. No invented content or third-party image fills the interface.
- [kajtek.webp](src/assets/kajtek.webp) and [its provenance](src/assets/kajtek.webp.json): captured from the actual local Kajtek frontend and committed CSS in its ready state on 2026-10-01. No generated artwork or invented product data.

### Image viewer and close control

The enlargement uses a native modal `dialog`, a translated accessible label, and an autofocus close button in a `method="dialog"` form. The viewer fits within viewport bounds, preserves the image's alt text, and uses `object-fit: contain`. Escape and outside-backdrop clicks close it; native modal behavior restores focus to the trigger. Escape, focus restoration and disclosure behavior passed the finish verification.

The close control is quiet and rectangular, with a fine border and minimum 90×44px size. Its focus treatment is the common visible outline; there is no extra animated close state.

### Engineering disclosure

Native `details`/`summary` reveals optional technical reading below the product explanation. A ruled boundary, blue summary text, minimum 44px target and inline plus icon establish the pattern. Opening rotates the plus by 45 degrees; the content remains ordinary selectable prose. Use browser semantics rather than a custom accordion runtime.

### Ownership list and editorial rows

Capabilities use a definition list, with fine top rules and compact labels beside descriptions. Case sections and About/Contact use open two-column rows. Contact is a larger text link, and the next-project link closes a case study with generous type. There are no input fields, chips, or generic project cards in the implemented system.

### Motion and accessibility

Already-visible content is the default. CSS uses the incumbent easing (`cubic-bezier(0.16, 1, 0.3, 1)`) and short state duration (220ms). Image lift uses 380ms; supported cross-document view transitions use 150ms. Smooth anchor scrolling is native. No scroll reveals or animation dependency is present.

Reduced motion disables transitions, animations, hover translations and smooth scrolling, including view-transition animations. The finish verification passed reduced-motion behavior. A focus-revealed skip link leads to `main`; semantic headings, labelled navigation, alt text, native controls, visible outlines and deliberate mobile targets remain part of the visual system.

## Do's and Don'ts

### Do:

- Do let typography, proportion and negative space establish hierarchy.
- Do use authentic complete application captures and keep their provenance beside the source assets.
- Do introduce products before disclosing their technical depth.
- Do retain visible keyboard focus, native semantics, reduced motion and uncropped touch-accessible enlargement.
- Do compose localized text for its real length and preserve real EN/PL paths.

### Don't:

- Don't turn selected work into a generic grid of cards or technologies.
- Don't add decorative glass, neon, gradients, fake terminals, stock imagery or generated visual filler.
- Don't animate content into visibility or require motion to understand a page.
- Don't expand the visual language merely because another variation is possible.
- Don't present the first-pass review as a production launch or invent the hostname, metrics or outcomes.
