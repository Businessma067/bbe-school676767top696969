#!/usr/bin/env python3
"""
Re-film How-it-works Math: Full Course → Ch.11 → Task 175 (Podcast studio).
Matches the source walkthrough: check A/C/E → Submit → scroll FULL SOLUTION.
"""
from __future__ import annotations

import asyncio
import base64
import json
import os
import re
import shutil
import subprocess
import time
from pathlib import Path

from playwright.async_api import async_playwright

BASE = os.environ.get("DEMO_BASE_URL", "http://127.0.0.1:8080")
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "how-it-works"
TMP = Path("/tmp/hiw-math-refilm")

# Same aspect as the previous clip (3420/1966). Capture at 1× CSS size for sharp
# first-generation encodes (no upscale).
W, H = 1710, 983
FPS = 60

SUPA_KEY = "sb-kntpsdgggolkqnywxedq-auth-token"
ANON_KEY = (
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
    "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtudHBzZGdnZ29sa3FueXd4ZWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1ODkzNjIsImV4cCI6MjA5OTE2NTM2Mn0."
    "awDJV4ZL742sHzjBVHn_PnKVX6cdP81ipkns0xVPYKw"
)
FAKE_SESSION = {
    "access_token": "demo-recording-token",
    "token_type": "bearer",
    "expires_in": 31536000,
    "expires_at": 4102444800,
    "refresh_token": "demo-recording-refresh",
    "user": {
        "id": "00000000-0000-4000-8000-000000000001",
        "aud": "authenticated",
        "role": "authenticated",
        "email": "georgtyrin@gmail.com",
        "user_metadata": {"full_name": "Yehor"},
        "app_metadata": {},
        "created_at": "2026-01-01T00:00:00Z",
    },
}
PROGRESS = {
    "passed": [],
    "revision": ["math-11-5", "math-11-10", "math-11-13", "math-11-16"],
}

CURSOR_JS = """
(() => {
  const install = () => {
    if (document.getElementById('__demo_cursor')) return;
    const c = document.createElement('div');
    c.id = '__demo_cursor';
    c.style.cssText = [
      'position:fixed','left:0','top:0','width:22px','height:22px','z-index:2147483647',
      'pointer-events:none','transform:translate(-2px,-2px)','opacity:0'
    ].join(';');
    c.innerHTML = "<svg width='22' height='22' viewBox='0 0 22 22'>" +
      "<path d='M3 2 L3 17 L7.2 13.2 L9.8 19.4 L12.6 18.2 L10.1 12.2 L15.6 12.2 Z'" +
      " fill='#111827' stroke='#ffffff' stroke-width='1.4' stroke-linejoin='round'/></svg>";
    document.body.appendChild(c);
    window.addEventListener('mousemove', (e) => {
      c.style.opacity = '1';
      c.style.left = e.clientX + 'px';
      c.style.top = e.clientY + 'px';
    }, true);
  };
  if (document.body) install();
  else document.addEventListener('DOMContentLoaded', install);
  setInterval(install, 1500);
})();
"""

HIDE_CSS = """
  [data-floating-assistant], #chat-widget, .crisp-client,
  iframe[title*="chat" i],
  button.fixed.bottom-5.right-5,
  a.fixed.bottom-5.right-5,
  .fixed.bottom-4.right-4, .fixed.bottom-5.right-5 { display:none !important; }
  * { scrollbar-width: none !important; }
  *::-webkit-scrollbar { width:0 !important; height:0 !important; }
"""


async def hide_chrome(page):
    await page.add_style_tag(content=HIDE_CSS)


async def glide(page, x, y, steps=36):
    await page.mouse.move(x, y, steps=steps)


async def soft_click(page, locator, pause=900):
    try:
        await locator.scroll_into_view_if_needed()
    except Exception:
        pass
    box = None
    try:
        box = await locator.bounding_box()
    except Exception:
        pass
    if box:
        await glide(page, box["x"] + box["width"] / 2, box["y"] + box["height"] / 2)
        await page.wait_for_timeout(280)
    await locator.click(force=True)
    await page.wait_for_timeout(pause)


async def maybe(page, locator, pause=900):
    try:
        if await locator.count() and await locator.first.is_visible():
            await soft_click(page, locator.first, pause)
            return True
    except Exception:
        pass
    return False


async def prep_task_175(page):
    await page.goto(f"{BASE}/products/full-course-math", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(3500)

    ch = page.locator("button").filter(
        has_text=re.compile(r"Differentiation and single-variable optimization", re.I)
    ).first
    await soft_click(page, ch, 2200)
    await maybe(page, page.locator("button").filter(has_text=re.compile(r"^Practice$")), 1400)

    # Open Exam-Style (11.5). Podcast studio is local Task 16 there (= global Task 175).
    exam = page.locator("button").filter(has_text=re.compile(r"Exam-Style", re.I)).first
    await soft_click(page, exam, 2200)

    clicked = await page.evaluate(
        """() => {
          const exam = [...document.querySelectorAll('button')]
            .find(b => /Exam-Style/i.test(b.textContent || ''));
          const root = exam?.closest('li');
          if (!root) return 'no-root';
          const task = [...root.querySelectorAll('button')]
            .find(b => /^\\s*Task 16\\b/.test(b.textContent || ''));
          if (!task) return 'no-task16';
          task.scrollIntoView({ block: 'center' });
          task.click();
          return 'ok';
        }"""
    )
    print(f"open Task 16 in Exam-Style: {clicked}", flush=True)
    if clicked != "ok":
        # Fallback: scroll full chapter rail for global Task 175.
        for _ in range(60):
            hit = await page.evaluate(
                """() => {
                  const t = [...document.querySelectorAll('button')]
                    .find(b => (b.textContent || '').trim() === 'Task 175');
                  if (!t) {
                    const nodes = [...document.querySelectorAll('button')]
                      .filter(b => /^Task \\d+$/.test((b.textContent || '').trim()));
                    nodes.at(-1)?.scrollIntoView({ block: 'end' });
                    return false;
                  }
                  t.scrollIntoView({ block: 'center' });
                  t.click();
                  return true;
                }"""
            )
            if hit:
                break
            await page.wait_for_timeout(200)
        else:
            raise SystemExit("Could not open Task 175")

    await page.get_by_text(
        "Podcast studio: advertising spend and listeners", exact=False
    ).first.wait_for(state="visible", timeout=30000)
    # Confirm badge
    await page.get_by_text(re.compile(r"TASK\s*175", re.I)).first.wait_for(
        state="visible", timeout=10000
    )
    await page.wait_for_timeout(800)


async def demo_task_175(page):
    await page.wait_for_timeout(1200)
    await page.evaluate(
        """() => new Promise(res => {
          const t = document.scrollingElement;
          const start = t.scrollTop, dy = 100, ms = 800, t0 = performance.now();
          const ease = p => p < .5 ? 2*p*p : 1 - Math.pow(-2*p+2,2)/2;
          (function step(now){
            const p = Math.min(1, (now-t0)/ms);
            t.scrollTop = start + dy*ease(p);
            if (p < 1) requestAnimationFrame(step); else res();
          })(t0);
        })"""
    )
    await page.wait_for_timeout(450)

    boxes = page.locator('button[role="checkbox"]:not([disabled])')
    await boxes.first.wait_for(state="visible", timeout=20000)
    for i in (0, 2, 4):  # A, C, E — same as source clip
        await soft_click(page, boxes.nth(i), 780)

    await page.wait_for_timeout(600)
    submit = page.locator("button").filter(has_text=re.compile(r"Check Answers", re.I)).first
    await soft_click(page, submit, 1800)

    panel = page.get_by_text("FULL SOLUTION", exact=False).first
    try:
        await panel.wait_for(state="visible", timeout=10000)
    except Exception:
        exp = page.locator("button").filter(
            has_text=re.compile(r"^(Explanation|Show Explanation)$", re.I)
        ).first
        await soft_click(page, exp, 1400)
        await panel.wait_for(state="visible", timeout=10000)

    await page.wait_for_timeout(1100)
    await page.evaluate(
        """() => new Promise(res => {
          const candidates = [...document.querySelectorAll('div,aside,section')]
            .filter(el => /FULL SOLUTION/i.test(el.textContent || '')
              && el.scrollHeight > el.clientHeight + 40);
          const target = candidates.sort((a,b) => b.scrollHeight - a.scrollHeight)[0]
            || document.scrollingElement;
          const start = target.scrollTop;
          const dy = Math.min(1200, Math.max(700, target.scrollHeight - target.clientHeight - start));
          const ms = 6200, t0 = performance.now();
          const ease = p => p < .5 ? 2*p*p : 1 - Math.pow(-2*p+2,2)/2;
          (function step(now){
            const p = Math.min(1, (now-t0)/ms);
            target.scrollTop = start + dy*ease(p);
            if (p < 1) requestAnimationFrame(step); else res();
          })(t0);
        })"""
    )
    await page.wait_for_timeout(2200)


async def record():
    if TMP.exists():
        shutil.rmtree(TMP)
    frames_dir = TMP / "frames"
    frames_dir.mkdir(parents=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=["--disable-dev-shm-usage", "--font-render-hinting=none"],
        )
        ctx = await browser.new_context(
            viewport={"width": W, "height": H},
            device_scale_factor=1,
        )
        await ctx.add_init_script(
            f"try{{localStorage.setItem({json.dumps(SUPA_KEY)}, {json.dumps(json.dumps(FAKE_SESSION))});"
            f"localStorage.setItem('bbe.math.progress.v1', {json.dumps(json.dumps(PROGRESS))});"
            f"sessionStorage.setItem('bbe-intro-seen','1');"
            f"localStorage.setItem('bbe-intro-seen','1');}}catch(e){{}}"
        )
        await ctx.add_init_script(CURSOR_JS)

        async def _use_anon_key(route):
            headers = {
                **route.request.headers,
                "authorization": f"Bearer {ANON_KEY}",
                "apikey": ANON_KEY,
            }
            await route.continue_(headers=headers)

        await ctx.route("**/*.supabase.co/rest/v1/**", _use_anon_key)
        await ctx.route("**/*.supabase.co/auth/v1/**", lambda r: r.abort())
        await ctx.route("**/_serverFn/**", lambda r: r.abort())

        page = await ctx.new_page()
        page.set_default_timeout(60000)
        print("=== prep ===", flush=True)
        await prep_task_175(page)

        cdp = await ctx.new_cdp_session(page)
        frames: list[tuple[Path, float]] = []
        t0 = time.monotonic()

        def on_frame(params):
            idx = len(frames)
            path = frames_dir / f"f{idx:05d}.jpg"
            path.write_bytes(base64.b64decode(params["data"]))
            # Prefer wall clock — CDP timestamps can compress the timeline.
            frames.append((path, time.monotonic() - t0))
            asyncio.ensure_future(
                cdp.send("Page.screencastFrameAck", {"sessionId": params["sessionId"]})
            )

        cdp.on("Page.screencastFrame", on_frame)
        await cdp.send(
            "Page.startScreencast",
            {
                "format": "jpeg",
                "quality": 98,
                "maxWidth": W,
                "maxHeight": H,
                "everyNthFrame": 1,
            },
        )
        print("=== record ===", flush=True)
        try:
            await demo_task_175(page)
        finally:
            try:
                await cdp.send("Page.stopScreencast")
            except Exception:
                pass
            await page.wait_for_timeout(400)
            await ctx.close()
            await browser.close()

    return frames


def encode(frames: list[tuple[Path, float]]):
    frames = frames[2:-2] if len(frames) > 20 else frames
    if len(frames) < 12:
        raise SystemExit(f"only {len(frames)} frames")

    concat = TMP / "math.ffconcat"
    lines = ["ffconcat version 1.0"]
    ts = [t for _, t in frames]
    for i, (path, t) in enumerate(frames):
        nxt = ts[i + 1] if i + 1 < len(frames) else t + (1 / 30)
        dur = max(1 / FPS, min(0.25, nxt - t if nxt > t else 1 / 30))
        lines.append(f"file '{path}'")
        lines.append(f"duration {dur:.5f}")
    lines.append(f"file '{frames[-1][0]}'")
    concat.write_text("\n".join(lines))

    OUT.mkdir(parents=True, exist_ok=True)
    mp4 = OUT / "math.mp4"
    poster = OUT / "math-poster.jpg"

    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            str(concat),
            "-vf",
            f"fps={FPS},scale={W}:{H - (H % 2)}:flags=lanczos,format=yuv420p",
            "-c:v",
            "libx264",
            "-preset",
            "slow",
            "-crf",
            "12",
            "-profile:v",
            "high",
            "-pix_fmt",
            "yuv420p",
            "-movflags",
            "+faststart",
            "-an",
            str(mp4),
        ],
        check=True,
    )
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-ss",
            "2.0",
            "-i",
            str(mp4),
            "-frames:v",
            "1",
            "-q:v",
            "2",
            str(poster),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    probe = subprocess.run(
        [
            "ffprobe",
            "-v",
            "error",
            "-select_streams",
            "v:0",
            "-show_entries",
            "stream=width,height,r_frame_rate,bit_rate,nb_frames",
            "-show_entries",
            "format=duration,size",
            "-of",
            "default=noprint_wrappers=1",
            str(mp4),
        ],
        capture_output=True,
        text=True,
    )
    print(probe.stdout)
    print(f"wrote {mp4} ({mp4.stat().st_size // 1024} KB)")


def main():
    frames = asyncio.run(record())
    print(f"captured {len(frames)} frames, span={frames[-1][1] - frames[0][1]:.2f}s")
    encode(frames)


if __name__ == "__main__":
    main()
