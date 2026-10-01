# Adrian Mokrzycki’s portfolio

A bilingual portfolio built with Astro. It presents two personal projects, Random Frame and Kajtek, with case studies covering their interfaces and the engineering behind them.

## Stack

- Astro 7 with static generation
- TypeScript and custom CSS
- No UI framework or runtime dependency beyond Astro
- Self-hosted Manrope font

## Projects

- [Random Frame](https://github.com/amokrzycki/random-frame): a desktop image viewer with local history and optional encrypted sync.
- [Kajtek](https://github.com/amokrzycki/kajtek): an internet radio player with a cassette-inspired interface and integrations for Polish radio providers.

The site includes English and Polish homepages and project pages. Project copy and metadata live in `src/data/projects.ts`; the pages are generated from the project slugs.

## Run locally

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev -- --background
```

Astro’s background server can be managed with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Build and checks

```sh
npm run build
npm run lint
npm run check:site
```

Set `SITE_URL` to the production origin when building for deployment. Astro uses it to generate canonical, language alternate and social metadata URLs.

## License

The portfolio source is released under the MIT License. See [LICENSE](LICENSE). The Manrope font is distributed under the SIL Open Font License; its license is in `public/fonts/OFL.txt`.

© 2026 Adrian Mokrzycki
