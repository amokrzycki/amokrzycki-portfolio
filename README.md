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

Set `SITE_URL` to the confirmed production origin before building for deployment. It enables absolute canonical and language-alternate URLs. The first pass is not deployed; a launch still needs social artwork, sitemap/robots metadata and launch review.

## Imagery

Product images are fresh lossless PNG captures from the current sibling project sources, with responsive PNG delivery and full-resolution links. Random Frame uses image-free states with empty local data. Kajtek shows complete cassette and application states, with a reviewed recorded playlist. [Capture notes and dimensions](src/assets/README.md) document the sources and controlled capture setup. Manrope is self-hosted under its included OFL license.
