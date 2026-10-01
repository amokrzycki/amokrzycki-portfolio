import assert from "node:assert/strict";
import { log } from "node:console";
import { existsSync, readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const routes = ["/", "/work/random-frame/", "/work/kajtek/"];
for (const route of [...routes, ...routes.map((route) => `/pl${route}`)]) {
  const html = readFileSync(`dist${route}index.html`, "utf8");
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: one h1`);
  assert.ok(html.includes(`lang="${route.startsWith("/pl/") ? "pl" : "en"}"`));
  assert.ok(html.includes('<main id="main">'));
  assert.ok(html.includes('aria-labelledby="viewer-title"'));
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    assert.ok(
      !/(_image|@fs|\/home\/|file:)/.test(href),
      `${route}: leaked destination`,
    );
    if (!href.startsWith("/")) continue;
    const [path, fragment] = href.split("#");
    const destination = `dist${path}${path.endsWith("/") ? "index.html" : ""}`;
    assert.ok(existsSync(destination), `${route}: missing ${href}`);
    if (fragment) {
      assert.ok(
        readFileSync(destination, "utf8").includes(`id="${fragment}"`),
        `${route}: missing anchor ${href}`,
      );
    }
  }
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  for (const [tag] of main.matchAll(/<img\b[^>]*>/g)) {
    assert.ok(/alt="[^"]+"/.test(tag), `${route}: missing image description`);
    assert.ok(/width="\d+"/.test(tag) && /height="\d+"/.test(tag));
  }
}

const css = readFileSync("src/styles/global.css", "utf8");
const color = (name, theme) =>
  css.match(
    new RegExp(`--${name}: light-dark\\((#[0-9a-f]{6}), (#[0-9a-f]{6})\\)`),
  )[theme === "light" ? 1 : 2];
const luminance = (hex) =>
  hex
    .slice(1)
    .match(/../g)
    .map((part) => {
      const value = parseInt(part, 16) / 255;
      return value <= 0.04045
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4;
    })
    .reduce(
      (sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index],
      0,
    );
for (const theme of ["light", "dark"]) {
  for (const foreground of ["ink", "muted", "subtle", "accent"]) {
    for (const background of [
      "canvas",
      "surface",
      "hover-ground",
      "frame-ground",
      "kajtek-ground",
    ]) {
      const values = [
        luminance(color(foreground, theme)),
        luminance(color(background, theme)),
      ].sort((a, b) => b - a);
      assert.ok(
        (values[0] + 0.05) / (values[1] + 0.05) >= 4.5,
        `${theme}: ${foreground}/${background}: text contrast`,
      );
    }
  }
}

// The actual head script must restore before paint and never persist on load.
const layout = readFileSync("src/layouts/Site.astro", "utf8");
const bootstrap = layout.match(/<script is:inline>([\s\S]*?)<\/script>/)[1];
for (const saved of [null, "light", "dark", "system", "invalid", "blocked"]) {
  const dataset = {};
  runInNewContext(bootstrap, {
    document: { documentElement: { dataset } },
    localStorage: {
      getItem() {
        if (saved === "blocked") throw new Error("Storage blocked");
        return saved;
      },
      setItem() {
        assert.fail("Initial load must not persist a preference");
      },
      removeItem() {
        assert.fail("Initial load must not change storage");
      },
    },
  });
  assert.equal(
    dataset.theme,
    ["light", "dark"].includes(saved) ? saved : "system",
  );
}
for (const route of [...routes, ...routes.map((route) => `/pl${route}`)]) {
  const html = readFileSync(`dist${route}index.html`, "utf8");
  assert.ok(
    html.indexOf(bootstrap.trim()) >= 0 &&
      html.indexOf(bootstrap.trim()) < html.indexOf("<body"),
    `${route}: pre-paint theme`,
  );
  assert.equal((html.match(/name="portfolio-theme"/g) ?? []).length, 3);
}
// Exercise the actual focusout handler: label activation must not hide its radio.
const themeControl = readFileSync("src/components/ThemeControl.astro", "utf8");
const focusout = themeControl
  .match(
    /control.addEventListener\("focusout", \(event\) => \{([\s\S]*?)\n {2}\}\);/,
  )[1]
  .replace(" as Node", "");
const inside = {};
for (const relatedTarget of [null, inside, {}]) {
  const control = { open: true, contains: (node) => node === inside };
  runInNewContext(focusout, { control, event: { relatedTarget } });
  assert.equal(
    control.open,
    relatedTarget === null || relatedTarget === inside,
    "Theme menu stays open during label activation and closes on keyboard exit",
  );
}
log(
  "Six routes: links, images, landmarks, both theme contrasts and pre-paint theme restoration passed.",
);
