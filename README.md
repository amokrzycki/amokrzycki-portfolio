# Adrian Mokrzycki — portfolio

Astro, static pages, custom CSS. English and Polish homepages and case studies for Random Frame and Kajtek. Native image enlargement and technical disclosures; no UI framework or animation dependency.

- [Product context](PRODUCT.md)

## Development

```sh
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Build

```sh
npm run build
```

Set `SITE_URL` to the confirmed production origin before building for deployment. It enables absolute canonical and language-alternate URLs. The first pass is not deployed; a launch still needs final product captures, social artwork, sitemap/robots metadata, and factual review of the case-study copy.

## Imagery

Product images are optimized captures of the actual sibling project interfaces. Random Frame shows the existing empty state without the desktop backend. Kajtek shows the actual player ready to play. Capture provenance lives next to each source image. Manrope is self-hosted under its included OFL license.
