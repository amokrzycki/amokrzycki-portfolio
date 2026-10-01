import assert from "node:assert/strict";
import { log } from "node:console";
import { existsSync, readFileSync } from "node:fs";

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
const color = (name) => css.match(new RegExp(`--${name}: (#[0-9a-f]{6})`))[1];
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
for (const foreground of ["ink", "muted", "accent"]) {
  for (const background of ["canvas", "frame-ground", "kajtek-ground"]) {
    const values = [
      luminance(color(foreground)),
      luminance(color(background)),
    ].sort((a, b) => b - a);
    assert.ok(
      (values[0] + 0.05) / (values[1] + 0.05) >= 4.5,
      `${foreground}/${background}: text contrast`,
    );
  }
}
log(
  "Six routes: links, image destinations, descriptions, dimensions, landmarks and text contrast passed.",
);
