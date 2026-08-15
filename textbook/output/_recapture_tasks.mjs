import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";

const outDir = path.resolve("textbook/output/design-preview");
const base = "http://localhost:8080";
const variants = ["blue", "mint", "indigo"];

async function hideChrome(page) {
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    for (const el of document.querySelectorAll(".fixed")) {
      const t = el.textContent || "";
      if (t.includes("Design preview") || t.includes("Open AI assistant") || el.className.includes("z-[100]")) {
        el.style.visibility = "hidden";
        if (el.className.includes("inset-0")) el.style.display = "none";
      }
    }
  });
}

async function openEconomics(page) {
  await page.getByRole("button", { name: /Basic Economic Concepts/i }).click({ timeout: 8000 });
  await page.waitForTimeout(800);
}

async function openMath(page) {
  // Expand chapter 1 Logic then pick first task if needed
  const ch = page.getByRole("button", { name: /1\.\s*Logic/i }).first();
  await ch.click({ timeout: 8000 });
  await page.waitForTimeout(500);
  // Some UIs need a second click on a nested task
  const taskBtn = page.locator("aside button, nav button").filter({ hasText: /M\.|Task|1\./ }).nth(1);
  if (await page.getByText("Pick a chapter").count()) {
    await ch.click().catch(() => {});
    await page.waitForTimeout(400);
  }
  // Click first available leaf task row
  const leaf = page.locator("aside button").filter({ hasText: /E\.|M\./ }).first();
  if (await leaf.count()) {
    await leaf.click().catch(() => {});
    await page.waitForTimeout(600);
  }
}

async function openEnglish(page) {
  const ch = page.getByRole("button", { name: /1\.\s*Texts/i }).first();
  await ch.click({ timeout: 8000 });
  await page.waitForTimeout(500);
  const leaf = page.locator("aside button, aside a").filter({ hasText: /T\.|Text|Reading/i }).first();
  if (await leaf.count()) {
    await leaf.click().catch(() => {});
    await page.waitForTimeout(600);
  }
  // If still empty, click chapter again (toggle) then first topic
  if (await page.getByText("Pick a chapter").count()) {
    await page.getByRole("button", { name: /Texts/i }).first().click().catch(() => {});
    await page.waitForTimeout(400);
  }
}

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

for (const variant of variants) {
  // economics
  await page.goto(`${base}/demo-practice/economics?design=${variant}`, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(1200);
  await openEconomics(page);
  await hideChrome(page);
  await page.screenshot({ path: path.join(outDir, `${variant}-economics-desktop.png`) });
  console.log("econ", variant);

  // math
  await page.goto(`${base}/demo-practice/math?design=${variant}`, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(1200);
  await openMath(page);
  await hideChrome(page);
  await page.screenshot({ path: path.join(outDir, `${variant}-math-desktop.png`) });
  console.log("math", variant);

  // english
  await page.goto(`${base}/demo-practice/english?design=${variant}`, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(1200);
  await openEnglish(page);
  await hideChrome(page);
  await page.screenshot({ path: path.join(outDir, `${variant}-english-desktop.png`) });
  console.log("english", variant);
}

const mctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mpage = await mctx.newPage();
for (const variant of variants) {
  await mpage.goto(`${base}/demo-practice/economics?design=${variant}`, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await mpage.waitForTimeout(1200);
  await openEconomics(mpage);
  await hideChrome(mpage);
  await mpage.screenshot({ path: path.join(outDir, `${variant}-economics-mobile.png`) });
  console.log("mobile econ", variant);
}

await browser.close();
console.log("done");
