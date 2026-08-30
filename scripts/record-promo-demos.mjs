/**
 * Promo demos: Playwright viewport recording + DOM cursor/zoom, then 120fps encode.
 * Usage: node scripts/record-promo-demos.mjs [math|economics|english|mock-builder]
 */
import { chromium } from "playwright";
import { spawn } from "child_process";
import { mkdirSync, writeFileSync, renameSync, existsSync } from "fs";
import { join } from "path";

const BASE = process.env.DEMO_BASE_URL || "http://127.0.0.1:5173";
const OUT = join(process.cwd(), "tmp-demo-recordings/promo");
const W = 1440;
const H = 900;
mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function injectPromoFx(page) {
  await page.addStyleTag({
    content: `
      html.promo-recording, html.promo-recording body, html.promo-recording body * {
        cursor: none !important;
      }
      #promo-cursor {
        position: fixed; z-index: 2147483646; left: 0; top: 0;
        width: 28px; height: 28px; pointer-events: none;
        transform: translate(-2px, -2px);
      }
      #promo-cursor .dot {
        position: absolute; left: 0; top: 0; width: 10px; height: 10px;
        border-radius: 9999px; background: #E85D3A;
        box-shadow: 0 0 0 2px #fff, 0 4px 14px rgba(0,0,0,.35);
      }
      #promo-cursor .ring {
        position: absolute; left: -10px; top: -10px; width: 30px; height: 30px;
        border-radius: 9999px; border: 2px solid rgba(232,93,58,.95);
        background: rgba(232,93,58,.14);
        transition: transform .12s ease, opacity .12s ease;
      }
      #promo-cursor.clicking .ring { transform: scale(.65); opacity: .85; }
      [class*="FloatingAssistant"], button[aria-label*="chat" i] { display:none!important; }
    `,
  });
  await page.evaluate(() => {
    document.documentElement.classList.add("promo-recording");
    let c = document.getElementById("promo-cursor");
    if (!c) {
      c = document.createElement("div");
      c.id = "promo-cursor";
      c.innerHTML = '<div class="ring"></div><div class="dot"></div>';
      document.body.appendChild(c);
    }
    const move = (x, y) => {
      c.style.left = x + "px";
      c.style.top = y + "px";
    };
    window.__promoMove = move;
    window.__promoClick = (on) => c.classList.toggle("clicking", !!on);
    window.addEventListener("mousemove", (e) => move(e.clientX, e.clientY), true);
    window.addEventListener("mousedown", () => c.classList.add("clicking"), true);
    window.addEventListener("mouseup", () => c.classList.remove("clicking"), true);
  });
}

async function glide(page, x, y, steps = 24) {
  await page.mouse.move(x, y, { steps });
  await page.evaluate(({ x, y }) => window.__promoMove?.(x, y), { x, y }).catch(() => {});
  await sleep(120);
}

async function clickSlow(page, locator, { zoom = false, post = 700, pre = 400, steps = 22 } = {}) {
  const loc = typeof locator === "string" ? page.locator(locator).first() : locator;
  await loc.scrollIntoViewIfNeeded().catch(() => {});
  await sleep(pre);
  const box = await loc.boundingBox();
  if (!box) {
    await loc.click({ force: true });
    await sleep(post);
    return;
  }
  const cx = box.x + box.width / 2;
  const cy = box.y + Math.min(box.height / 2, 18);
  if (zoom) {
    await page.evaluate(
      async ({ cx, cy }) => {
        const root = document.documentElement;
        root.style.transformOrigin = `${(cx / innerWidth) * 100}% ${(cy / innerHeight) * 100}%`;
        root.style.transition = "transform 900ms cubic-bezier(0.22,1,0.36,1)";
        root.style.transform = "scale(1.42)";
        await new Promise((r) => setTimeout(r, 980));
      },
      { cx, cy },
    );
  }
  await glide(page, cx, cy, steps);
  await sleep(200);
  await page.evaluate(() => window.__promoClick?.(true));
  await loc.click({ force: true });
  await sleep(160);
  await page.evaluate(() => window.__promoClick?.(false));
  await sleep(post);
  if (zoom) {
    await page.evaluate(async () => {
      const root = document.documentElement;
      root.style.transition = "transform 800ms cubic-bezier(0.22,1,0.36,1)";
      root.style.transform = "scale(1)";
      await new Promise((r) => setTimeout(r, 880));
    });
  }
}

async function scrollSlow(page, delta, steps = 10) {
  const each = delta / steps;
  for (let i = 0; i < steps; i++) {
    await page.mouse.wheel(0, each);
    await sleep(100);
  }
  await sleep(350);
}

async function encode120(rawWebm, outMp4) {
  await new Promise((resolve, reject) => {
    // blend interpolate is much faster than MCI and still smooths motion
    const args = [
      "-y",
      "-i",
      rawWebm,
      "-vf",
      "minterpolate=fps=120:mi_mode=blend,scale=1440:900:flags=lanczos",
      "-c:v",
      "libx264",
      "-preset",
      "medium",
      "-crf",
      "17",
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart",
      "-an",
      outMp4,
    ];
    const p = spawn("ffmpeg", args, { stdio: "inherit" });
    p.on("close", (code) => (code === 0 ? resolve() : reject(new Error("encode " + code))));
  });
}

async function recordClip(name, demoFn) {
  console.log(`\n=== PROMO ${name} ===`);
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--autoplay-policy=no-user-gesture-required"],
  });
  const context = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: 1,
    recordVideo: { dir: OUT, size: { width: W, height: H } },
  });
  await context.addInitScript(() => {
    try {
      sessionStorage.setItem("bbe_intro_played", "1");
    } catch {}
  });
  const page = await context.newPage();
  page.setDefaultTimeout(60000);
  try {
    await demoFn(page);
    await sleep(1000);
  } catch (e) {
    console.error(name, "demo error", e.message);
    await page.screenshot({ path: join(OUT, `${name}-error.png`), fullPage: true }).catch(() => {});
    throw e;
  } finally {
    const video = page.video();
    await page.close();
    await context.close();
    await browser.close();
    if (video) {
      const path = await video.path();
      const raw = join(OUT, `${name}-raw.webm`);
      try {
        renameSync(path, raw);
      } catch {
        /* already named */
      }
      const final = join(OUT, `${name}.mp4`);
      console.log("encoding 120fps", name);
      await encode120(existsSync(raw) ? raw : path, final);
      console.log("wrote", final);
      return final;
    }
  }
}

async function openTaskNotFirst(page, taskNums = [3, 4, 2]) {
  for (const n of taskNums) {
    const btn = page.locator("button").filter({ hasText: new RegExp(`^Task ${n}$`) }).first();
    if (await btn.count()) {
      await btn.scrollIntoViewIfNeeded();
      await sleep(300);
      await clickSlow(page, btn, { zoom: true, post: 900 });
      return n;
    }
  }
  return null;
}

async function demoMath(page) {
  await page.goto(`${BASE}/demo-practice/math`, { waitUntil: "networkidle" });
  await injectPromoFx(page);
  await sleep(1000);

  await clickSlow(page, page.getByRole("button", { name: /2\.\s*Elementary algebra/i }), {
    zoom: true,
    post: 1000,
  });
  await sleep(600);

  // Open a subsection if collapsed
  const sub = page.locator("button").filter({ hasText: /Expanding|factoring|identit/i }).first();
  if (await sub.count()) {
    await clickSlow(page, sub, { post: 700 });
  }

  await openTaskNotFirst(page, [4, 5, 3, 2]);
  await page.getByRole("button", { name: /Check Answers \/ Submit/i }).waitFor({ state: "visible" });
  await sleep(800);

  const hide = page.locator('button[title="Hide chapters"]');
  if (await hide.count()) await clickSlow(page, hide, { post: 600 });

  // Linger on problem
  await scrollSlow(page, 140, 8);
  await sleep(1200);
  await scrollSlow(page, 100, 6);
  await sleep(900);

  // Timed mode peek
  const timedOff = page.getByRole("button", { name: /Timed Mode OFF/i });
  if (await timedOff.count()) {
    await clickSlow(page, timedOff, { zoom: true, post: 900 });
    await sleep(1000);
    const untimed = page.getByRole("button", { name: /Switch to Untimed Mode|Timed Mode ON/i });
    if (await untimed.count()) await clickSlow(page, untimed.first(), { post: 800 });
  }

  // Calculator deep dive
  await clickSlow(page, page.getByRole("button", { name: /^Calculator$/i }), { zoom: true, post: 1100 });
  await sleep(700);
  for (const label of ["7", "8", "+", "6", "="]) {
    const key = page.locator("button").filter({ hasText: new RegExp(`^${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`) }).first();
    if (await key.count()) {
      const b = await key.boundingBox();
      if (b) await glide(page, b.x + b.width / 2, b.y + b.height / 2, 10);
      await key.click({ force: true });
      await sleep(380);
    }
  }
  await sleep(1400);
  // Second calc
  for (const label of ["CE", "√", "4", "9", "="]) {
    const key = page.locator("button").filter({ hasText: new RegExp(`^${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`) }).first();
    if (await key.count()) {
      await key.click({ force: true });
      await sleep(360);
    }
  }
  await sleep(1200);

  const close = page.locator("button").filter({ hasText: /^Close/i }).first();
  if (await close.count()) await clickSlow(page, close, { post: 700 });
  else await clickSlow(page, page.getByRole("button", { name: /^Calculator$/i }), { post: 600 });

  // Answer slowly
  const boxes = page.locator('button[role="checkbox"]:not([disabled])');
  await boxes.first().waitFor({ state: "visible" });
  for (const i of [0, 2, 3, 4]) {
    const b = await boxes.nth(i).boundingBox();
    if (!b) continue;
    await glide(page, b.x + b.width / 2, b.y + b.height / 2, 16);
    await sleep(280);
    await boxes.nth(i).click({ force: true });
    await sleep(520);
  }
  await sleep(700);

  await clickSlow(page, page.getByRole("button", { name: /Check Answers \/ Submit/i }), {
    zoom: true,
    post: 1400,
  });

  const expl = page.getByRole("button", { name: /^Explanation$/i });
  if (await expl.count()) {
    await clickSlow(page, expl, { zoom: true, post: 1500 });
    await scrollSlow(page, 300, 12);
    await sleep(1400);
    await scrollSlow(page, 240, 10);
    await sleep(1600);
  }
  await sleep(1800);
}

async function demoEconomics(page) {
  await page.goto(`${BASE}/demo-practice/economics`, { waitUntil: "networkidle" });
  await injectPromoFx(page);
  await sleep(1100);

  await clickSlow(
    page,
    page.getByRole("button", { name: /Focus on different types of businesses/i }),
    { zoom: true, post: 1100 },
  );
  await sleep(700);
  await openTaskNotFirst(page, [3, 4, 2]);
  await page.getByRole("button", { name: /Check Answers \/ Submit/i }).waitFor({ state: "visible" });
  await sleep(700);

  const hide = page.locator('button[title="Hide chapters"]');
  if (await hide.count()) await clickSlow(page, hide, { post: 500 });

  await scrollSlow(page, 160, 8);
  await sleep(1100);
  await scrollSlow(page, 180, 8);
  await sleep(1000);
  await scrollSlow(page, -80, 5);
  await sleep(700);

  // Timed peek
  const timedOff = page.getByRole("button", { name: /Timed Mode OFF/i });
  if (await timedOff.count()) {
    await clickSlow(page, timedOff, { zoom: true, post: 900 });
    await sleep(900);
    const untimed = page.getByRole("button", { name: /Switch to Untimed Mode|Timed Mode ON/i });
    if (await untimed.count()) await clickSlow(page, untimed.first(), { post: 700 });
  }

  const boxes = page.locator('button[role="checkbox"]:not([disabled])');
  await boxes.first().waitFor({ state: "visible" });
  for (const i of [0, 1, 2, 4]) {
    const b = await boxes.nth(i).boundingBox();
    if (!b) continue;
    await glide(page, b.x + b.width / 2, b.y + b.height / 2, 14);
    await sleep(260);
    await boxes.nth(i).click({ force: true });
    await sleep(500);
  }

  await clickSlow(page, page.getByRole("button", { name: /Check Answers \/ Submit/i }), {
    zoom: true,
    post: 1300,
  });

  const expl = page.getByRole("button", { name: /^Explanation$/i });
  if (await expl.count()) {
    await clickSlow(page, expl, { zoom: true, post: 1400 });
    await sleep(800);
    const aiButtons = page.locator("button").filter({ hasText: /^AI/ });
    const n = await aiButtons.count();
    for (let i = 0; i < Math.min(n, 3); i++) {
      await clickSlow(page, aiButtons.nth(i), { zoom: i === 0, post: 1100 });
      await sleep(600);
    }
    await scrollSlow(page, 280, 10);
    await sleep(1500);
  }
  await sleep(1700);
}

async function demoEnglish(page) {
  await page.goto(`${BASE}/demo-practice/english`, { waitUntil: "domcontentloaded" });
  await injectPromoFx(page);
  await sleep(1200);

  await clickSlow(page, page.locator("button").filter({ hasText: /1\.\s*Texts/ }).first(), {
    zoom: true,
    post: 900,
  });
  await sleep(900);

  // Switch to Task 2
  const show = page.locator('button:has-text("Show chapters")');
  if (await show.isVisible().catch(() => false)) {
    await clickSlow(page, show, { post: 700 });
  }
  const t2 = page.locator("button").filter({ hasText: /^Task 2$/ }).first();
  if (await t2.count()) {
    await t2.scrollIntoViewIfNeeded();
    await sleep(400);
    await t2.click({ force: true });
    await sleep(1100);
  }

  await page.getByRole("button", { name: /Check Answers \/ Submit/i }).waitFor({ state: "visible" });

  const untimed = page.getByRole("button", { name: /Switch to Untimed Mode/i });
  if (await untimed.isVisible().catch(() => false)) {
    await untimed.click({ force: true });
    await sleep(500);
  }

  // Annotation tools
  for (const tool of ["Highlight", "Underline", "Note"]) {
    const b = page.getByRole("button", { name: new RegExp(`^${tool}$`) });
    if (await b.isVisible().catch(() => false)) {
      await clickSlow(page, b, { zoom: tool === "Highlight", post: 600 });
      if (tool === "Highlight") {
        const phrase = page.locator("p, span, div").filter({ hasText: /workweek|trial|hours|week/i }).first();
        if (await phrase.count()) {
          const box = await phrase.boundingBox();
          if (box) {
            await glide(page, box.x + 8, box.y + box.height / 2, 12);
            await page.mouse.down();
            await page.mouse.move(box.x + Math.min(280, box.width - 8), box.y + box.height / 2, {
              steps: 18,
            });
            await page.mouse.up();
            await sleep(1100);
          }
        }
      }
    }
  }

  // Color chips
  const colors = page.locator('button[aria-label*="color" i], button[title*="color" i]');
  // fallback: round color buttons near toolbar
  await sleep(500);

  await scrollSlow(page, 220, 10);
  await sleep(1100);
  await scrollSlow(page, 180, 8);
  await sleep(900);

  const boxes = page.locator('button[role="checkbox"]:not([disabled])');
  await boxes.first().waitFor({ state: "visible" });
  for (const i of [0, 2, 3, 4]) {
    const b = await boxes.nth(i).boundingBox();
    if (!b) continue;
    await glide(page, b.x + b.width / 2, b.y + b.height / 2, 14);
    await sleep(250);
    await boxes.nth(i).click({ force: true });
    await sleep(480);
  }

  await clickSlow(page, page.getByRole("button", { name: /Check Answers \/ Submit/i }), {
    zoom: true,
    post: 1300,
  });

  const expl = page.getByRole("button", { name: /Show Explanation|^Explanation$/i });
  if (await expl.isVisible().catch(() => false)) {
    await clickSlow(page, expl, { zoom: true, post: 1500 });
    await scrollSlow(page, 260, 10);
    await sleep(1500);
  }
  await sleep(1700);
}

async function demoMockBuilder(page) {
  await page.goto(`${BASE}/products/custom-mock-builder`, { waitUntil: "networkidle" });
  await injectPromoFx(page);
  await sleep(1400);

  // Switch subjects
  for (const sub of ["Math", "English", "Economics"]) {
    const tab = page.locator("button").filter({ hasText: new RegExp(`^${sub}$`) }).first();
    if (await tab.count()) {
      await clickSlow(page, tab, { zoom: sub === "Math", post: 1000 });
      await sleep(700);
    }
  }

  // Expand chapters / select subtopics
  const chapters = page.locator("button").filter({ hasText: /^\d+\./ });
  const chCount = await chapters.count();
  if (chCount > 1) {
    await clickSlow(page, chapters.nth(1), { zoom: true, post: 900 });
  } else if (chCount > 0) {
    await clickSlow(page, chapters.first(), { post: 800 });
  }
  await sleep(600);

  if (chCount > 2) {
    await clickSlow(page, chapters.nth(2), { post: 800 });
  }

  const checks = page.locator('input[type="checkbox"], button[role="checkbox"]');
  const n = await checks.count();
  for (let i = 1; i < Math.min(n, 6); i++) {
    const b = await checks.nth(i).boundingBox();
    if (b) await glide(page, b.x + b.width / 2, b.y + b.height / 2, 10);
    await checks.nth(i).click({ force: true }).catch(() => {});
    await sleep(420);
  }

  await scrollSlow(page, 260, 10);
  await sleep(1000);

  // Question count controls
  const steppers = page.locator("button").filter({ hasText: /^[+\-–]$|^Increase|^Decrease/ });
  if (await steppers.count()) {
    await clickSlow(page, steppers.first(), { zoom: true, post: 600 });
    await sleep(400);
  }

  // Weight / canvas area
  const canvas = page.locator("canvas, [data-weight], text=/topic weight|balance|mix/i").first();
  if (await canvas.count()) {
    await canvas.scrollIntoViewIfNeeded();
    await sleep(600);
    const box = await canvas.boundingBox();
    if (box) {
      await page.evaluate(
        async ({ cx, cy }) => {
          const root = document.documentElement;
          root.style.transformOrigin = `${(cx / innerWidth) * 100}% ${(cy / innerHeight) * 100}%`;
          root.style.transition = "transform 900ms cubic-bezier(0.22,1,0.36,1)";
          root.style.transform = "scale(1.35)";
          await new Promise((r) => setTimeout(r, 1000));
        },
        { cx: box.x + box.width / 2, cy: box.y + box.height / 2 },
      );
      await glide(page, box.x + box.width * 0.4, box.y + box.height * 0.45, 14);
      await page.mouse.down();
      await page.mouse.move(box.x + box.width * 0.62, box.y + box.height * 0.55, { steps: 20 });
      await page.mouse.up();
      await sleep(900);
      await page.evaluate(async () => {
        document.documentElement.style.transition = "transform 800ms cubic-bezier(0.22,1,0.36,1)";
        document.documentElement.style.transform = "scale(1)";
        await new Promise((r) => setTimeout(r, 880));
      });
    }
  }

  await scrollSlow(page, 200, 8);
  await sleep(800);

  const build = page.getByRole("button", { name: /Build|Generate|Create/i }).first();
  if (await build.count()) {
    await clickSlow(page, build, { zoom: true, post: 1600 });
    await sleep(1500);
  }

  await scrollSlow(page, -120, 6);
  await sleep(1600);
}

async function main() {
  const only = process.argv[2];
  const jobs = [
    ["math", demoMath],
    ["economics", demoEconomics],
    ["english", demoEnglish],
    ["mock-builder", demoMockBuilder],
  ];
  const results = [];
  for (const [name, fn] of jobs) {
    if (only && only !== name) continue;
    results.push(await recordClip(name, fn));
  }
  writeFileSync(join(OUT, "manifest.json"), JSON.stringify(results, null, 2));
  console.log("\nAll:", results);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
