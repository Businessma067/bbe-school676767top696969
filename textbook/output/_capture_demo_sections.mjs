import { chromium } from "playwright";
import path from "node:path";

const outDir = path.resolve("textbook/output/design-preview");
const base = "http://localhost:8080";
const variants = ["blue", "mint", "indigo"];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const variant of variants) {
  await page.goto(`${base}/?design=${variant}`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(800);
  // Scroll to demo section with live task UI
  await page.evaluate(() => {
    const el = [...document.querySelectorAll("h2")].find((h) => h.textContent?.includes("How it works"));
    el?.scrollIntoView({ block: "start" });
    for (const n of document.querySelectorAll(".fixed")) {
      const t = n.textContent || "";
      if (t.includes("Design preview") || t.includes("assistant")) n.style.visibility = "hidden";
    }
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, `${variant}-demo-desktop.png`) });

  // Subject tabs: math + english demo
  await page.getByRole("button", { name: "Math", exact: true }).click();
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(outDir, `${variant}-demo-math-desktop.png`) });

  await page.getByRole("button", { name: "English", exact: true }).click();
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(outDir, `${variant}-demo-english-desktop.png`) });

  console.log("demo", variant);
}

await browser.close();
