import assert from "node:assert/strict";
import { log } from "node:console";
import { existsSync, readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const projectSlugs = ["random-frame", "kajtek", "zielony-koszyk"];
const routes = [
  "/",
  "/about/",
  ...projectSlugs.map((slug) => `/work/${slug}/`),
];
const allRoutes = [...routes, ...routes.map((route) => `/pl${route}`)];
for (const route of allRoutes) {
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
  const base = route.startsWith("/pl/") ? "/pl" : "";
  const slug = route.match(/\/work\/([^/]+)\//)?.[1];
  if (slug) {
    const next =
      projectSlugs[(projectSlugs.indexOf(slug) + 1) % projectSlugs.length];
    assert.ok(
      /class="next-project"/.test(main) &&
        main.includes(`href="${base}/work/${next}/"`),
      `${route}: next project follows selected-work order`,
    );
    assert.ok(
      main.includes(`href="/images/${slug}.png"`),
      `${route}: correct opening image`,
    );
  }
  if (route === "/" || route === "/pl/") {
    assert.equal((main.match(/<article\b/g) ?? []).length, projectSlugs.length);
    for (const project of projectSlugs) {
      assert.ok(main.includes(`href="${base}/work/${project}/"`));
      assert.ok(main.includes(`href="/images/${project}.png"`));
    }
  }
  if (slug === "zielony-koszyk") {
    assert.ok(
      !/research|thesis|test bed|JMeter|Web Vitals|\bE[123]\b|badawcz|badań|magister|inżyniersk/i.test(
        main,
      ),
      `${route}: product story has no research framing`,
    );
    assert.equal(
      (main.match(/data-image-viewer/g) ?? []).length,
      3,
      `${route}: homepage, product editor and saved order captures`,
    );
    assert.ok(
      main.includes('href="/images/zielony-koszyk-product-editor.png"'),
    );
    const projectLinks = main.match(
      /<div class="project-links">([\s\S]*?)<\/div>/,
    )?.[1];
    assert.ok(projectLinks, `${route}: project source links`);
    assert.deepEqual(
      [...projectLinks.matchAll(/href="([^"]+)"/g)].map((link) => link[1]),
      [
        "https://github.com/amokrzycki/zielony-koszyk",
        "https://github.com/amokrzycki/zielony-koszyk-backend",
      ],
      `${route}: project actions are exactly the two source repositories`,
    );
    for (const repo of ["zielony-koszyk", "zielony-koszyk-backend"]) {
      assert.ok(
        main.includes(`href="https://github.com/amokrzycki/${repo}"`),
        `${route}: source ${repo}`,
      );
    }
    assert.equal((main.match(/class="engineering-details"/g) ?? []).length, 3);
    assert.ok(
      main.includes("auth-explanation") &&
        (main.match(/name="auth-step"/g) ?? []).length === 4,
      `${route}: four-stage auth walkthrough`,
    );
    assert.ok(
      !main.includes("zielony-koszyk-mfa-login.png"),
      `${route}: MFA form retired`,
    );
    assert.ok(
      !/href="[^"]*(?:\/releases\/|zielony\.amokrzycki\.ovh)/.test(main),
      `${route}: source-only project actions`,
    );
  }
  if (slug) {
    const explanation = {
      "random-frame": "sync",
      kajtek: "metadata",
      "zielony-koszyk": "auth",
    }[slug];
    assert.equal(
      (main.match(new RegExp(`name="${explanation}-step"`, "g")) ?? []).length,
      4,
    );
    for (let index = 0; index < 4; index++) {
      assert.ok(main.includes(`aria-controls="${explanation}-panel-${index}"`));
      assert.ok(main.includes(`id="${explanation}-panel-${index}"`));
    }
    assert.ok(
      main.indexOf('class="explanation-controls"') <
        main.indexOf('class="explanation-panels"'),
    );
  }
  if (route.endsWith("/about/")) {
    const home = route.startsWith("/pl/") ? "/pl/" : "/";
    const sections = [
      "about-title",
      "experience",
      "education",
      "working-range",
      "personal",
    ].map((id) => main.indexOf(`id="${id}"`));
    assert.ok(sections.every((position) => position >= 0));
    assert.deepEqual(
      sections,
      [...sections].sort((a, b) => a - b),
    );
    assert.equal((main.match(/<article\b/g) ?? []).length, 3);
    assert.equal((main.match(/<dt\b/g) ?? []).length, 4);
    assert.ok(main.includes(`href="${home}#work"`));
    assert.ok(main.includes(`href="${home}#contact"`));
    const homepage = readFileSync(`dist${home}index.html`, "utf8");
    assert.ok(homepage.includes(`href="${route}"`));
    assert.ok(
      html.includes(`href="${home === "/" ? "/pl/about/" : "/about/"}"`),
    );
  }
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
      "basket-ground",
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
for (const route of allRoutes) {
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
  `${allRoutes.length} routes: project navigation, sources, links, images, landmarks, both theme contrasts and pre-paint theme restoration passed.`,
);
