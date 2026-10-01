# Product captures

These assets are selected from the portfolio's existing lossless PNG captures. The source applications are the sibling `random-frame` and `kajtek` repositories. This pass reframes existing captures; it does not recreate product states or invent data. The original capture automation is not committed here.

Random Frame shows the actual frontend before drawing an image and before enabling sync. No third-party images or private data appear. Kajtek shows the complete cassette in its ready state and selected catalog/playlist details from the existing controlled captures. Its recorded RMF playlist contains Fleetwood Mac, ATB and Laura Branigan, plus a news interval. Artwork is a product fallback, not an external image.

## Shipped selection

| Inline asset                 | Size        | Stable original               | Framing                                                             |
| ---------------------------- | ----------- | ----------------------------- | ------------------------------------------------------------------- |
| random-frame.png             | 2880 × 1800 | /images/random-frame.png      | Full desktop window, initial state                                  |
| kajtek.png                   | 1768 × 850  | /images/kajtek.png            | Complete red cassette, ready state                                  |
| random-frame-sync-detail.png | 1180 × 720  | /images/random-frame-sync.png | Sync dialog with breathing room; crop at x850, y550                 |
| kajtek-catalog-detail.png    | 1230 × 1080 | /images/kajtek-catalog.png    | Search, filters and selected station rows; crop at x590, y175       |
| kajtek-playlist-mobile.png   | 1120 × 340  | /images/kajtek-history.png    | Narrow-screen crop of the four playlist states; crop at x615, y1030 |
| kajtek-playlist-detail.png   | 1650 × 465  | /images/kajtek-history.png    | Playlist and timing states; crop at x365, y950                      |

All crops preserve the source pixel scale and use lossless PNG. Inline media uses Astro's responsive PNG delivery. Inspection loads the unchanged original from `public/images`; no image transformation endpoint is a navigable destination. Long original pages are available for inspection rather than rendered continuously in the narrative.

For future captures: use a reproducible reviewed state, avoid browser chrome, preserve natural UI proportions, inspect text at the displayed size, and choose framing around the point being explained. Keep the complete capture when an editorial crop refers to it. Do not fetch uncontrolled random content for Random Frame.
