/**
 * Records homepage "How it works" demo videos for Math, Economics, English.
 * Run: node scripts/record-how-it-works-demos.mjs
 */
import { chromium } from "playwright";
import { mkdirSync, writeFileSync, renameSync } from "fs";
import { join } from "path";

const BASE = process.env.DEMO_BASE_URL || "http://127.0.0.1:5173";
const OUT = join(process.cwd(), "tmp-demo-recordings");
mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function clickTrueCheckboxes(page, indices) {
  const boxes = page.locator('button[role="checkbox"]:not([disabled])');
  await boxes.first().waitFor({ state: "visible", timeout: 20000 });
  for (const i of indices) {
    const box = boxes.nth(i);
    if (await box.count()) {
      await box.scrollIntoViewIfNeeded();
      await box.click({ force: true });
      await sleep(380);
    }
  }
}

async function waitForTask(page) {
  await page.getByRole("button", { name: /Check Answers \/ Submit/i }).waitFor({
    state: "visible",
    timeout: 45000,
  });
  await sleep(500);
}

async function hideSidebar(page) {
  const collapse = page.locator('button[title="Hide chapters"]');
  if (await collapse.count()) {
    await collapse.first().click().catch(() => {});
    await sleep(400);
  }
}

async function hideChat(page) {
  await page.addStyleTag({
    content: `
      [class*="assistant"], [class*="FloatingAssistant"], iframe[title*="chat" i],
      button[aria-label*="chat" i], #chat-widget, .crisp-client, [data-floating-assistant] {
        display: none !important; visibility: hidden !important;
      }
    `,
  }).catch(() => {});
}

async function tapCalcKeys(page, keys) {
  for (const k of keys) {
    const escaped = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const key = page.locator("button").filter({ hasText: new RegExp(`^${escaped}$`) }).first();
    if (await key.count()) {
      await key.click({ force: true }).catch(() => {});
      await sleep(200);
    }
  }
}

async function recordSubject(browser, name, run) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
    recordVideo: {
      dir: OUT,
      size: { width: 1280, height: 800 },
    },
  });
  const page = await context.newPage();
  page.setDefaultTimeout(45000);
  console.log(`\n=== Recording ${name} ===`);
  let finalPath = null;
  try {
    await run(page);
    await sleep(500);
  } catch (err) {
    console.error(`${name} failed:`, err.message);
    await page.screenshot({ path: join(OUT, `${name}-error.png`), fullPage: true }).catch(() => {});
    throw err;
  } finally {
    const video = page.video();
    await page.close();
    await context.close();
    if (video) {
      const path = await video.path();
      finalPath = join(OUT, `${name}-raw.webm`);
      try {
        renameSync(path, finalPath);
      } catch {
        finalPath = path;
      }
      console.log(`${name} raw video:`, finalPath);
    }
  }
  return { name, path: finalPath };
}

async function demoMath(page) {
  await page.goto(`${BASE}/demo-practice/math`, { waitUntil: "networkidle" });
  await hideChat(page);
  await sleep(900);

  await page.getByRole("button", { name: /1\.\s*Logic/i }).first().click();
  await sleep(800);
  await waitForTask(page);
  await hideSidebar(page);
  await sleep(500);

  // Calculator tour
  await page.getByRole("button", { name: /^Calculator$/i }).first().click();
  await sleep(1100);
  await tapCalcKeys(page, ["7", "8", "+", "2", "="]);
  await sleep(900);

  // Answer a few statements while calc is open
  await clickTrueCheckboxes(page, [0, 1, 3]);
  await sleep(400);

  // Close calculator so explanation panel can show
  const closeCalc = page.locator("button").filter({ hasText: /^Close$/i }).first();
  if (await closeCalc.count()) {
    await closeCalc.click();
    await sleep(500);
  } else {
    await page.getByRole("button", { name: /^Calculator$/i }).first().click();
    await sleep(500);
  }

  await page.getByRole("button", { name: /Check Answers \/ Submit/i }).click();
  await sleep(1100);

  const expl = page.getByRole("button", { name: /^Explanation$/i });
  if (await expl.count()) {
    await expl.first().click();
    await sleep(1800);
    await page.mouse.wheel(0, 280);
    await sleep(1400);
    await page.mouse.wheel(0, 200);
    await sleep(1200);
  }
  await sleep(1600);
}

async function demoEconomics(page) {
  await page.goto(`${BASE}/demo-practice/economics`, { waitUntil: "networkidle" });
  await hideChat(page);
  await sleep(1100);

  await page.getByRole("button", { name: /Basic Economic Concepts/i }).first().click();
  await sleep(900);

  // Prefer Task 1 in the expanded list
  const task1 = page.locator("aside button").filter({ hasText: /^Task 1$/ }).first();
  if (await task1.count()) {
    await task1.click({ force: true });
    await sleep(700);
  }

  await waitForTask(page);
  await hideSidebar(page);
  await sleep(600);

  // Scroll through statements then answer
  await page.mouse.wheel(0, 120);
  await sleep(500);
  await clickTrueCheckboxes(page, [0, 2, 3]);
  await sleep(450);

  await page.getByRole("button", { name: /Check Answers \/ Submit/i }).click();
  await sleep(1100);

  const expl = page.getByRole("button", { name: /^Explanation$/i });
  if (await expl.count()) {
    await expl.first().click();
    await sleep(1600);
    // Click an AI statement button if present
    const aiA = page.getByRole("button", { name: /AI\s*[·•-]?\s*A/i }).first();
    if (await aiA.count()) {
      await aiA.click({ force: true });
      await sleep(1600);
    }
    await page.mouse.wheel(0, 240);
    await sleep(1300);
  }
  await sleep(1500);
}

async function demoEnglish(page) {
  await page.goto(`${BASE}/demo-practice/english`, { waitUntil: "domcontentloaded" });
  await hideChat(page);
  await sleep(1200);

  // Opening Texts auto-loads Task 1 and collapses the sidebar.
  // Do NOT click Task 1 afterward — its hit target is covered by Timed Mode.
  await page.locator("button").filter({ hasText: /1\.\s*Texts/ }).first().click();
  await sleep(1000);
  await waitForTask(page);

  const untimed = page.getByRole("button", { name: /Switch to Untimed Mode/i });
  if (await untimed.isVisible().catch(() => false)) {
    await untimed.click({ force: true });
    await sleep(400);
  }

  const highlight = page.getByRole("button", { name: /^Highlight$/i });
  if (await highlight.isVisible().catch(() => false)) {
    await highlight.click({ force: true });
    await sleep(300);
    const passage = page.locator("text=forty-hour").first();
    if (await passage.count()) {
      const box = await passage.boundingBox();
      if (box) {
        await page.mouse.move(box.x, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + Math.min(240, box.width), box.y + box.height / 2, {
          steps: 10,
        });
        await page.mouse.up();
        await sleep(800);
      }
    }
  }

  await page.mouse.wheel(0, 140);
  await sleep(600);

  await clickTrueCheckboxes(page, [0, 2, 4]);
  await sleep(450);

  await page.getByRole("button", { name: /Check Answers \/ Submit/i }).click();
  await sleep(1100);

  const expl = page.getByRole("button", { name: /Show Explanation|^Explanation$/i });
  if (await expl.isVisible().catch(() => false)) {
    await expl.click({ force: true });
    await sleep(1700);
    await page.mouse.wheel(0, 220);
    await sleep(1200);
  }
  await sleep(1500);
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage"],
  });

  const results = [];
  results.push(await recordSubject(browser, "math", demoMath));
  results.push(await recordSubject(browser, "economics", demoEconomics));
  results.push(await recordSubject(browser, "english", demoEnglish));

  await browser.close();
  writeFileSync(join(OUT, "manifest.json"), JSON.stringify(results, null, 2));
  console.log("\nDone.", results);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
