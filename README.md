# Adrian Mokrzycki — portfolio

Astro, static pages, custom CSS. English and Polish homepages and case studies for Random Frame and Kajtek. Native image enlargement and technical disclosures; no UI framework or animation dependency.

- [Product context](PRODUCT.md)
- [Design constitution](docs/portfolio-direction.md)

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
npm run lint
npm run check:site
```

Set `SITE_URL` to the confirmed production origin before building for deployment. It enables absolute canonical and language-alternate URLs. A launch still needs social artwork and sitemap/robots metadata for the confirmed origin.

## Imagery

Product imagery uses the existing lossless PNG captures, with selected editorial crops and responsive PNG delivery. A native dialog provides fitted and actual-size inspection through stable public originals. Random Frame uses image-free states with empty local data. Kajtek shows its complete cassette, catalog controls and a reviewed recorded playlist. [Capture notes and dimensions](src/assets/README.md) document the sources and controlled capture setup. Manrope is self-hosted under its included OFL license.
