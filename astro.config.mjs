// @ts-check

import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { SITE_URL } = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
