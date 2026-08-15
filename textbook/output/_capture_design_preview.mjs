import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";

const outDir = path.resolve("textbook/output/design-preview");
fs.mkdirSync(outDir, { recursive: true });

const base = "http://localhost:8080";
const variants = ["blue", "mint", "indigo"];
const pages = [
  { key: "home", path: "/" },
  { key: "economics", path: "/demo-practice/economics" },
  { key: "math", path: "/demo-practice/math" },
  { key: "english", path: "/demo-practice/english" },
];

async function prep(page) {
  await page.addStyleTag({
    content: `
      [class*="IntroSplash"], .fixed.inset-0.z-\\[100\\] { display: none !important; }
      button[aria-label="Open AI assistant"],
      div:has(> div > p:text-is("Design preview")) { visibility: hidden !important; }
    `,
  });
  // Fallback hide overlays
  await page.evaluate(() => {
    document.querySelectorAll("body > div, body *").forEach((el) => {
      const t = el.textContent || "";
      if (t.includes("Design preview") && el.className?.includes?.("fixed")) {
        el.style.visibility = "hidden";
      }
    });
    const splash = document.querySelector('[class*="z-[100]"]');
    if (splash) splash.style.display = "none";
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(400);
}

const browser = await chromium.launch({ headless: true });

// Desktop captures
const desktop = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const dpage = await desktop.newPage();

for (const variant of variants) {
  for (const p of pages) {
    const url = `${base}${p.path}?design=${variant}`;
    console.log("desktop", url);
    await dpage.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await prep(dpage);
    const file = path.join(outDir, `${variant}-${p.key}-desktop.png`);
    await dpage.screenshot({ path: file, fullPage: false });
  }
}
await desktop.close();

// Mobile captures: home + economics for each variant
const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mpage = await mobile.newPage();
for (const variant of variants) {
  for (const p of [
    { key: "home", path: "/" },
    { key: "economics", path: "/demo-practice/economics" },
  ]) {
    const url = `${base}${p.path}?design=${variant}`;
    console.log("mobile", url);
    await mpage.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await prep(mpage);
    const file = path.join(outDir, `${variant}-${p.key}-mobile.png`);
    await mpage.screenshot({ path: file, fullPage: false });
  }
}
await mobile.close();
await browser.close();
console.log("done", outDir);
