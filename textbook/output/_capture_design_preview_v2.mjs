import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const base = "http://localhost:8080";
const variants = ["blue", "mint", "indigo"];
const outDir = path.resolve("textbook/output/design-preview-v2");
fs.mkdirSync(outDir, { recursive: true });

async function clean(page) {
  await page.evaluate(() => {
    for (const element of document.querySelectorAll(".fixed")) {
      const text = element.textContent || "";
      if (
        text.includes("Design preview") ||
        text.includes("Open AI assistant") ||
        element.className.includes("z-[100]")
      ) {
        element.style.display = "none";
      }
    }
  });
  await page.waitForTimeout(300);
}

async function showDemo(page, subject) {
  await page.getByRole("button", { name: subject, exact: true }).click();
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    const heading = [...document.querySelectorAll("h2")].find((node) =>
      node.textContent?.includes("How it works"),
    );
    heading?.scrollIntoView({ block: "start" });
  });
  await page.waitForTimeout(300);
}

const browser = await chromium.launch({ headless: true });

const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const desktopPage = await desktop.newPage();

for (const variant of variants) {
  await desktopPage.goto(`${base}/?design=${variant}`, {
    waitUntil: "networkidle",
    timeout: 60_000,
  });
  await clean(desktopPage);
  await desktopPage.screenshot({
    path: path.join(outDir, `${variant}-home-desktop.png`),
  });

  for (const subject of ["Economics", "Math", "English"]) {
    await showDemo(desktopPage, subject);
    await clean(desktopPage);
    await desktopPage.screenshot({
      path: path.join(outDir, `${variant}-${subject.toLowerCase()}-task-desktop.png`),
    });
  }
}

await desktop.close();

const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mobilePage = await mobile.newPage();

for (const variant of variants) {
  await mobilePage.goto(`${base}/?design=${variant}`, {
    waitUntil: "networkidle",
    timeout: 60_000,
  });
  await clean(mobilePage);
  await mobilePage.screenshot({
    path: path.join(outDir, `${variant}-home-mobile.png`),
  });

  await showDemo(mobilePage, "Economics");
  await clean(mobilePage);
  await mobilePage.screenshot({
    path: path.join(outDir, `${variant}-economics-task-mobile.png`),
  });
}

await mobile.close();
await browser.close();

console.log(`Captured ${variants.length * 6} screenshots in ${outDir}`);
