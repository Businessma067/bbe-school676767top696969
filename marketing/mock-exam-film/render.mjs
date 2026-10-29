import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { readFileSync, mkdirSync, existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const fonts = {
  "/fonts/Inter-Regular.ttf": "/usr/share/fonts/truetype/macos/Inter-Regular.ttf",
  "/fonts/Inter-SemiBold.ttf": "/usr/share/fonts/truetype/macos/Inter-SemiBold.ttf",
  "/fonts/Inter-Bold.ttf": "/usr/share/fonts/truetype/macos/Inter-Bold.ttf",
  "/fonts/NotoSerif-Regular.ttf": "/usr/share/fonts/truetype/noto/NotoSerif-Regular.ttf",
  "/fonts/NotoSerif-Bold.ttf": "/usr/share/fonts/truetype/noto/NotoSerif-Bold.ttf",
  "/fonts/JetBrainsMono-Regular.ttf": "/usr/share/fonts/truetype/jetbrains-mono/JetBrainsMono-Regular.ttf",
};
const types = { ".html": "text/html; charset=utf-8", ".ttf": "font/ttf", ".jpg": "image/jpeg" };

const args = process.argv.slice(2);
const atIdx = args.indexOf("--at");
const only = atIdx >= 0 ? args[atIdx + 1].split(",").map(Number) : null;
const FPS = 30;
const FILM = 24;
const PORT = 8931;
const DEBUG = 9333;
const framesDir = "/tmp/mock-exam-film-frames";
const outDir = "/opt/cursor/artifacts";

mkdirSync(framesDir, { recursive: true });
mkdirSync(outDir, { recursive: true });

const server = createServer((req, res) => {
  const url = new URL(req.url ?? "/", "http://127.0.0.1");
  if (fonts[url.pathname]) {
    res.setHeader("Content-Type", "font/ttf");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(readFileSync(fonts[url.pathname]));
    return;
  }
  const file = url.pathname === "/" ? "index.html" : url.pathname.replace(/^\//, "");
  const path = join(root, file);
  if (!existsSync(path)) {
    res.writeHead(404);
    res.end("missing");
    return;
  }
  res.setHeader("Content-Type", types[extname(path)] ?? "application/octet-stream");
  res.end(readFileSync(path));
});

await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));

const userData = "/tmp/mock-exam-film-chrome";
const chrome = spawn(
  "/usr/bin/google-chrome",
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--mute-audio",
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-background-networking",
    "--force-device-scale-factor=1",
    "--force-color-profile=srgb",
    "--window-size=1920,1080",
    `--remote-debugging-port=${DEBUG}`,
    `--user-data-dir=${userData}`,
    `http://127.0.0.1:${PORT}/?scrub=1`,
  ],
  { stdio: "ignore" },
);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForJson() {
  for (let i = 0; i < 40; i += 1) {
    try {
      const res = await fetch(`http://127.0.0.1:${DEBUG}/json/list`);
      const list = await res.json();
      const page = list.find((entry) => entry.type === "page" && entry.webSocketDebuggerUrl);
      if (page) return page;
    } catch {
      /* chrome still booting */
    }
    await sleep(200);
  }
  throw new Error("Chrome did not open a debuggable page");
}

const page = await waitForJson();
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve);
  ws.addEventListener("error", reject);
});

let nextId = 0;
const pending = new Map();
ws.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(JSON.stringify(message.error)));
  else resolve(message.result);
});

function send(method, params = {}) {
  const id = ++nextId;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 1920,
  height: 1080,
  deviceScaleFactor: 1,
  mobile: false,
});
await send("Runtime.evaluate", {
  expression: "document.fonts.ready.then(() => true)",
  awaitPromise: true,
});
await send("Runtime.evaluate", {
  expression: "window.renderAt(0)",
  awaitPromise: true,
});

const times = only ?? Array.from({ length: FPS * FILM }, (_, i) => i / FPS);
for (let i = 0; i < times.length; i += 1) {
  const time = times[i];
  await send("Runtime.evaluate", {
    expression: `window.renderAt(${time})`,
    awaitPromise: true,
  });
  const shot = await send("Page.captureScreenshot", { format: "jpeg", quality: 92 });
  const name = only ? `key-${String(time).replace(".", "_")}.jpg` : `${String(i).padStart(4, "0")}.jpg`;
  await writeFile(join(framesDir, name), Buffer.from(shot.data, "base64"));
  if (!only && i % 30 === 0) console.log(`frame ${i}/${times.length} t=${time.toFixed(2)}`);
}

if (!only) {
  const out = join(outDir, "mock-exam-animation.mp4");
  await new Promise((resolve, reject) => {
    const ff = spawn(
      "ffmpeg",
      [
        "-y",
        "-framerate",
        String(FPS),
        "-i",
        join(framesDir, "%04d.jpg"),
        "-c:v",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        "-crf",
        "17",
        "-preset",
        "medium",
        "-movflags",
        "+faststart",
        out,
      ],
      { stdio: "inherit" },
    );
    ff.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg ${code}`))));
  });
  console.log(out);
} else {
  console.log(framesDir);
}

ws.close();
chrome.kill("SIGKILL");
server.close();
process.exit(0);
