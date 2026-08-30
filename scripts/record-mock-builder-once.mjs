import { chromium } from "playwright";
import { spawn } from "child_process";
import { renameSync, existsSync } from "fs";
import { join } from "path";

const BASE = "http://127.0.0.1:5173";
const OUT = join(process.cwd(), "tmp-demo-recordings/promo");
const W = 1440;
const H = 900;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function inject(page) {
  await page.addStyleTag({
    content: `
    html.promo-recording, html.promo-recording * { cursor:none!important; }
    #promo-cursor{position:fixed;z-index:2147483646;width:28px;height:28px;pointer-events:none;transform:translate(-2px,-2px)}
    #promo-cursor .dot{position:absolute;left:0;top:0;width:10px;height:10px;border-radius:9999px;background:#E85D3A;box-shadow:0 0 0 2px #fff,0 4px 14px rgba(0,0,0,.35)}
    #promo-cursor .ring{position:absolute;left:-10px;top:-10px;width:30px;height:30px;border-radius:9999px;border:2px solid rgba(232,93,58,.95);background:rgba(232,93,58,.14)}
    #promo-cursor.clicking .ring{transform:scale(.65)}
  `,
  });
  await page.evaluate(() => {
    document.documentElement.classList.add("promo-recording");
    const c = document.createElement("div");
    c.id = "promo-cursor";
    c.innerHTML = '<div class="ring"></div><div class="dot"></div>';
    document.body.appendChild(c);
    window.addEventListener(
      "mousemove",
      (e) => {
        c.style.left = e.clientX + "px";
        c.style.top = e.clientY + "px";
      },
      true,
    );
    window.addEventListener("mousedown", () => c.classList.add("clicking"), true);
    window.addEventListener("mouseup", () => c.classList.remove("clicking"), true);
  });
}

async function clickSlow(page, loc, zoom = false) {
  const el = typeof loc === "string" ? page.locator(loc).first() : loc;
  await el.scrollIntoViewIfNeeded().catch(() => {});
  await sleep(400);
  const box = await el.boundingBox();
  if (box) {
    if (zoom) {
      await page.evaluate(
        async ({ cx, cy }) => {
          const r = document.documentElement;
          r.style.transformOrigin = `${(cx / innerWidth) * 100}% ${(cy / innerHeight) * 100}%`;
          r.style.transition = "transform 850ms cubic-bezier(0.22,1,0.36,1)";
          r.style.transform = "scale(1.4)";
          await new Promise((res) => setTimeout(res, 920));
        },
        { cx: box.x + box.width / 2, cy: box.y + box.height / 2 },
      );
    }
    await page.mouse.move(box.x + box.width / 2, box.y + Math.min(box.height / 2, 16), {
      steps: 20,
    });
    await sleep(200);
  }
  await el.click({ force: true });
  await sleep(700);
  if (zoom) {
    await page.evaluate(async () => {
      document.documentElement.style.transition =
        "transform 750ms cubic-bezier(0.22,1,0.36,1)";
      document.documentElement.style.transform = "scale(1)";
      await new Promise((res) => setTimeout(res, 820));
    });
  }
}

const browser = await chromium.launch({
  headless: true,
  args: ["--disable-dev-shm-usage"],
});
const context = await browser.newContext({
  viewport: { width: W, height: H },
  recordVideo: { dir: OUT, size: { width: W, height: H } },
});
await context.addInitScript(() => {
  try {
    sessionStorage.setItem("bbe_intro_played", "1");
  } catch {}
});
const page = await context.newPage();

await page.goto(`${BASE}/products/custom-mock-builder`, { waitUntil: "networkidle" });
await inject(page);
await sleep(1200);

await clickSlow(page, page.locator("button").filter({ hasText: /^Math$/i }).first(), true);
await sleep(800);
await clickSlow(page, page.locator("button").filter({ hasText: /^Economics$/i }).first(), true);
await sleep(800);

const ch3 = page.locator("button").filter({ hasText: /Chapter 3|Focus on different/i }).first();
await clickSlow(page, ch3, true);
await sleep(600);

const allBtns = page.locator("button").filter({ hasText: /^All$/ });
if ((await allBtns.count()) > 1) await clickSlow(page, allBtns.nth(1), true);
else if (await allBtns.count()) await clickSlow(page, allBtns.first(), false);
await sleep(900);

const ch5 = page.locator("button").filter({ hasText: /Chapter 5|Marketing/i }).first();
if (await ch5.count()) {
  await clickSlow(page, ch5, true);
  await sleep(500);
  const checks = page.locator('input[type="checkbox"]');
  const n = await checks.count();
  console.log("checkboxes", n);
  for (let i = Math.max(0, n - 4); i < n; i++) {
    const b = await checks.nth(i).boundingBox();
    if (b) await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2, { steps: 12 });
    await checks.nth(i).click({ force: true }).catch(() => {});
    await sleep(450);
  }
}

await page.mouse.wheel(0, 220);
await sleep(1000);

const qLabel = page.locator("text=/Number of Questions/i").first();
if (await qLabel.count()) {
  await qLabel.scrollIntoViewIfNeeded();
  await sleep(600);
  await page.evaluate(async () => {
    document.documentElement.style.transformOrigin = "50% 70%";
    document.documentElement.style.transition =
      "transform 900ms cubic-bezier(0.22,1,0.36,1)";
    document.documentElement.style.transform = "scale(1.35)";
    await new Promise((r) => setTimeout(r, 1000));
  });
  const plus = page.locator("button").filter({ hasText: /^\+$/ }).first();
  if (await plus.count()) {
    for (let i = 0; i < 3; i++) {
      await plus.click({ force: true });
      await sleep(350);
    }
  }
  await page.evaluate(async () => {
    document.documentElement.style.transform = "scale(1)";
    await new Promise((r) => setTimeout(r, 850));
  });
}

await page.mouse.wheel(0, 180);
await sleep(900);

const canvas = page.locator("canvas").first();
if (await canvas.count()) {
  const box = await canvas.boundingBox();
  if (box) {
    await page.evaluate(
      async ({ cx, cy }) => {
        const r = document.documentElement;
        r.style.transformOrigin = `${(cx / innerWidth) * 100}% ${(cy / innerHeight) * 100}%`;
        r.style.transition = "transform 900ms cubic-bezier(0.22,1,0.36,1)";
        r.style.transform = "scale(1.4)";
        await new Promise((res) => setTimeout(res, 1000));
      },
      { cx: box.x + box.width / 2, cy: box.y + box.height / 2 },
    );
    await page.mouse.move(box.x + box.width * 0.35, box.y + box.height * 0.4, { steps: 16 });
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.65, box.y + box.height * 0.6, { steps: 24 });
    await page.mouse.up();
    await sleep(1000);
    await page.evaluate(async () => {
      document.documentElement.style.transform = "scale(1)";
      await new Promise((r) => setTimeout(r, 850));
    });
  }
}

const build = page.getByRole("button", { name: /Build|Generate|Create/i }).first();
if (await build.count()) {
  await clickSlow(page, build, true);
  await sleep(2000);
}

await sleep(1800);
const video = page.video();
await page.close();
await context.close();
await browser.close();
const path = await video.path();
const raw = join(OUT, "mock-builder-raw.webm");
try {
  renameSync(path, raw);
} catch {}
const final = join(OUT, "mock-builder.mp4");
await new Promise((resolve, reject) => {
  const p = spawn(
    "ffmpeg",
    [
      "-y",
      "-i",
      existsSync(raw) ? raw : path,
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
      final,
    ],
    { stdio: "inherit" },
  );
  p.on("close", (c) => (c === 0 ? resolve() : reject(new Error("enc"))));
});
console.log("done", final);
