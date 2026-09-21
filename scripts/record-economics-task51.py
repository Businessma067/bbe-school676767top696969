#!/usr/bin/env python3
"""
Re-film How-it-works Economics: Full Course → Ch.6 Accounting → Task 51
(Liquidity From the Balance Sheet), matching the published clip:

  answer A/C → Check Answers → Explanation panel → smooth scroll to end.

Output: public/how-it-works/economics.mp4 + economics-poster.jpg (~10s, 16:9).
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
TMP = Path("/tmp/hiw-econ-task51")
CASES_PATH = ROOT / "src" / "data" / "economics-cases-ch6-subtopics.json"
BACKUP_PATH = Path("/tmp/hiw-econ-task51-cases.bak.json")

# 16:9 to match HowItWorksSection economics aspect
W, H = 1920, 1080
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
        "user_metadata": {"full_name": "Lukas"},
        "app_metadata": {},
        "created_at": "2026-01-01T00:00:00Z",
    },
}

# Classic Task 51 from the published how-it-works clip (numbers CA=369, CL=151).
TASK_51 = {
    "subsection": "6.1",
    "case_id": "CASE 6.1.051",
    "title": "Liquidity From the Balance Sheet 51",
    "context": (
        "Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.\n\n"
        "| € in thousands | Amount |\n"
        "| --- | ---: |\n"
        "| **ASSETS** | |\n"
        "| Buildings | 407 |\n"
        "| Machinery | 133 |\n"
        "| Office equipment | 47 |\n"
        "| Patents, trademarks and licences | 62 |\n"
        "| Inventory | 160 |\n"
        "| Trade receivables | 115 |\n"
        "| Cash and cash equivalents | 94 |\n"
        "| Total assets | **1018** |\n"
        "| **EQUITY** | |\n"
        "| Share capital | 209 |\n"
        "| Retained earnings | 383 |\n"
        "| Total equity | **592** |\n"
        "| **LIABILITIES** | |\n"
        "| Long-term bank loan | 202 |\n"
        "| Bonds payable | 73 |\n"
        "| Trade payables | 85 |\n"
        "| Bank overdraft | 66 |\n"
        "| Total liabilities | **426** |\n"
        "| Total equity and liabilities | **1018** |\n\n"
        "Evaluate the following economic assertions:"
    ),
    "statements": [
        "Profit for the year increases equity through retained earnings, while a loss decreases equity.",
        "The current ratio exceeds 1.67.",
        "Working capital of €218 thousand is positive on this balance sheet.",
        "After excluding inventory, the remaining current assets still cover current liabilities more than 0.67 times over.",
        "The current ratio is below 0.62.",
    ],
    "answer_key": [True, True, True, True, False],
    "tactical_explanations": [
        (
            "Period profit flows into retained earnings on the balance sheet; a loss reduces them. "
            "Equity is the residual claim after liabilities, so profit raises equity and a loss lowers it.\n\n"
            "So the statement is True."
        ),
        (
            "Current assets are Inventory + Trade receivables + Cash:\n\n"
            "$$\n"
            r"\text{CA} = 160 + 115 + 94 = 369"
            "\n$$\n\n"
            "Current liabilities are Trade payables + Bank overdraft:\n\n"
            "$$\n"
            r"\text{CL} = 85 + 66 = 151"
            "\n$$\n\n"
            "$$\n"
            r"\text{Current ratio} = \frac{\text{CA}}{\text{CL}} = \frac{369}{151} \approx 2.4437 > 1.67"
            "\n$$\n\n"
            "So the statement is True."
        ),
        (
            "Working capital is the euro surplus of current assets over current liabilities:\n\n"
            "$$\n"
            r"\text{WC} = \text{CA} - \text{CL} = 369 - 151 = 218"
            "\n$$\n\n"
            "The stem cites €218 thousand; the arithmetic matches and WC is positive.\n\n"
            "So the statement is True."
        ),
        (
            "Acid-test (quick) ratio = (current assets − inventory) ÷ current liabilities.\n\n"
            "$$\n"
            r"\text{CA} - \text{Inventory} = 369 - 160 = 209"
            "\n$$\n\n"
            "$$\n"
            r"\text{Acid-test} = \frac{209}{151} \approx 1.3841 > 0.67"
            "\n$$\n\n"
            "After stripping inventory, remaining current assets still cover current liabilities more than 0.67×.\n\n"
            "So the statement is True."
        ),
        (
            "From statement B, the current ratio is about 2.44, which is far above 0.62. "
            "The claim that the ratio is below 0.62 is therefore false.\n\n"
            "$$\n"
            r"\frac{369}{151} \approx 2.44 \not< 0.62"
            "\n$$\n\n"
            "So the statement is False."
        ),
    ],
    "difficulty_level": "3/5",
    "tier": "core",
    "half": "a",
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
  /* Keep the chrome clean like the published clip (signed-in look). */
  a[href="/login"], a[href="/signup"],
  a[href$="/login"], a[href$="/signup"] { display:none !important; }
  * { scrollbar-width: none !important; }
  *::-webkit-scrollbar { width:0 !important; height:0 !important; }
"""


def sort_key(raw: dict):
    sub = tuple(int(x) for x in str(raw["subsection"]).split("."))
    tail = str(raw["case_id"]).split(".")[-1]
    sort = int(tail) if tail.isdigit() else 0
    return (sub, sort, raw["case_id"])


def patch_task_51() -> None:
    TMP.mkdir(parents=True, exist_ok=True)
    rows = json.loads(CASES_PATH.read_text())
    BACKUP_PATH.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n")
    # Drop any existing 6.1.051, then place our case so it sorts to global Task 51.
    rows = [r for r in rows if r.get("case_id") != "CASE 6.1.051"]
    # Insert with case_id that sorts as the 51st after subsection/order sort.
    # Easier: replace whatever currently occupies index 50 after sort.
    ordered = sorted(rows, key=sort_key)
    victim = ordered[50]
    for i, r in enumerate(rows):
        if r.get("case_id") == victim["case_id"]:
            rows[i] = {**TASK_51, "case_id": victim["case_id"], "subsection": victim["subsection"]}
            # Keep victim id/subsection so Task 51 index is unchanged; overlay classic content.
            rows[i]["title"] = "Liquidity From the Balance Sheet 51"
            break
    CASES_PATH.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n")
    # verify
    check = sorted(json.loads(CASES_PATH.read_text()), key=sort_key)
    print(f"patched Task 51 -> {check[50]['title']} ({check[50]['case_id']})", flush=True)


def restore_cases() -> None:
    if BACKUP_PATH.exists():
        CASES_PATH.write_text(BACKUP_PATH.read_text())
        print("restored economics-cases-ch6-subtopics.json", flush=True)


async def hide_chrome(page):
    await page.add_style_tag(content=HIDE_CSS)


async def glide(page, x, y, steps=28):
    await page.mouse.move(x, y, steps=steps)


async def soft_click(page, locator, pause=550):
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
        await page.wait_for_timeout(160)
    await locator.click(force=True)
    await page.wait_for_timeout(pause)


async def prep_task_51(page):
    await page.goto(f"{BASE}/products/full-course-economics", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(3200)

    # Open Accounting → Practice (theory is the default on chapter click).
    ch = page.locator("button").filter(has_text=re.compile(r"Accounting", re.I)).first
    await soft_click(page, ch, 1400)
    practice = page.locator("button").filter(has_text=re.compile(r"^Practice$")).first
    await soft_click(page, practice, 1400)

    # Expand the chapter row so Task 1..N appear in the sidebar.
    expand = page.locator('button[aria-label="Expand chapter"]').last
    if await expand.count():
        await soft_click(page, expand, 900)

    # Open Task 51 in the chapter list
    opened = False
    hit = {"ok": False, "n": 0}
    for _ in range(120):
        hit = await page.evaluate(
            """() => {
              const buttons = [...document.querySelectorAll('button')];
              const t = buttons.find(b => /^\\s*Task 51\\b/.test((b.textContent || '').trim()));
              if (!t) {
                const tasks = buttons.filter(b => /^Task \\d+/.test((b.textContent || '').trim()));
                const scroller = document.querySelector('.practice-scroll');
                if (scroller) scroller.scrollTop += 220;
                else tasks.at(-1)?.scrollIntoView({ block: 'end' });
                return { ok: false, n: tasks.length };
              }
              t.scrollIntoView({ block: 'center' });
              t.click();
              return { ok: true, n: 0 };
            }"""
        )
        if hit and hit.get("ok"):
            opened = True
            break
        await page.wait_for_timeout(120)
    if not opened:
        raise SystemExit(f"Could not open Task 51 (last={hit})")

    await page.get_by_text(re.compile(r"TASK\s*51", re.I)).first.wait_for(
        state="visible", timeout=20000
    )
    await page.get_by_text("Evaluate the following economic assertions", exact=False).first.wait_for(
        state="visible", timeout=20000
    )
    # Scroll so statements + submit are in view (table still partially visible)
    await page.evaluate(
        """() => {
          const btn = [...document.querySelectorAll('button')]
            .find(b => /Check Answers/i.test(b.textContent || ''));
          btn?.scrollIntoView({ block: 'end' });
        }"""
    )
    await page.wait_for_timeout(700)


async def demo_task_51(page):
    """Timed for ~10s of screencast."""
    await page.wait_for_timeout(500)

    boxes = page.locator('button[role="checkbox"]:not([disabled])')
    await boxes.first.wait_for(state="visible", timeout=20000)
    # Same picks as the published clip: A and C
    for i in (0, 2):
        await soft_click(page, boxes.nth(i), 520)

    await page.wait_for_timeout(350)
    submit = page.locator("button").filter(has_text=re.compile(r"Check Answers", re.I)).first
    await soft_click(page, submit, 1000)

    # Submit auto-opens the solution; fall back to the Explanation button if needed.
    panel = page.get_by_text("FULL SOLUTION", exact=False).first
    try:
        await panel.wait_for(state="visible", timeout=4000)
    except Exception:
        exp = page.locator("button").filter(
            has_text=re.compile(r"Explanation", re.I)
        ).first
        await soft_click(page, exp, 800)
        await panel.wait_for(state="visible", timeout=8000)

    await page.wait_for_timeout(450)

    pt = await page.evaluate(
        """() => {
          const panels = [...document.querySelectorAll('.practice-scroll')]
            .filter(el => el.closest('[data-practice-surface]')
              && /FULL SOLUTION|Answer key|Full solution/i.test(
                   (el.closest('[data-practice-surface]') || el).textContent || '')
              && el.scrollHeight > el.clientHeight + 40);
          const target = panels.sort((a,b) =>
            (b.scrollHeight - b.clientHeight) - (a.scrollHeight - a.clientHeight)
          )[0];
          if (!target) return null;
          const rect = target.getBoundingClientRect();
          return {
            x: Math.round(rect.left + Math.min(rect.width * 0.55, rect.width - 40)),
            y: Math.round(rect.top + Math.min(rect.height * 0.35, 280)),
          };
        }"""
    )
    if pt:
        await glide(page, pt["x"], pt["y"], steps=28)
        await page.wait_for_timeout(250)

    scrolled = await page.evaluate(
        """() => new Promise(res => {
          const panels = [...document.querySelectorAll('.practice-scroll')]
            .filter(el => el.closest('[data-practice-surface]')
              && /FULL SOLUTION|Answer key|Full solution/i.test(
                   (el.closest('[data-practice-surface]') || el).textContent || '')
              && el.scrollHeight > el.clientHeight + 40);
          const target = panels.sort((a,b) =>
            (b.scrollHeight - b.clientHeight) - (a.scrollHeight - a.clientHeight)
          )[0];
          if (!target) { res(false); return; }
          const start = target.scrollTop;
          const dy = Math.max(180, target.scrollHeight - target.clientHeight - start);
          const ms = 6200, t0 = performance.now();
          const ease = p => p < .5 ? 2*p*p : 1 - Math.pow(-2*p+2, 2)/2;
          (function step(now){
            const p = Math.min(1, (now - t0) / ms);
            target.scrollTop = start + dy * ease(p);
            if (p < 1) requestAnimationFrame(step); else res(true);
          })(t0);
        })"""
    )
    print(f"scrolled solution panel: {scrolled}", flush=True)
    if not scrolled:
        # Fallback: wheel-scroll under the cursor
        for _ in range(45):
            await page.mouse.wheel(0, 32)
            await page.wait_for_timeout(90)
    await page.wait_for_timeout(1200)


async def record():
    frames_dir = TMP / "frames"
    if frames_dir.exists():
        shutil.rmtree(frames_dir)
    frames_dir.mkdir(parents=True, exist_ok=True)

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
        await prep_task_51(page)

        cdp = await ctx.new_cdp_session(page)
        frames: list[tuple[Path, float]] = []
        t0 = time.monotonic()

        def on_frame(params):
            idx = len(frames)
            path = frames_dir / f"f{idx:05d}.jpg"
            path.write_bytes(base64.b64decode(params["data"]))
            frames.append((path, time.monotonic() - t0))
            asyncio.ensure_future(
                cdp.send("Page.screencastFrameAck", {"sessionId": params["sessionId"]})
            )

        cdp.on("Page.screencastFrame", on_frame)
        await cdp.send(
            "Page.startScreencast",
            {
                "format": "jpeg",
                "quality": 92,
                "maxWidth": W,
                "maxHeight": H,
                "everyNthFrame": 1,
            },
        )
        print("=== record ===", flush=True)
        try:
            await demo_task_51(page)
        finally:
            try:
                await cdp.send("Page.stopScreencast")
            except Exception:
                pass
            await page.wait_for_timeout(300)
            await ctx.close()
            await browser.close()

    return frames


def encode(frames: list[tuple[Path, float]]):
    frames = frames[2:-2] if len(frames) > 20 else frames
    if len(frames) < 12:
        raise SystemExit(f"only {len(frames)} frames")

    concat = TMP / "econ.ffconcat"
    lines = ["ffconcat version 1.0"]
    ts = [t for _, t in frames]
    # Preserve wall-clock pacing. CDP often sends few frames during waits;
    # allow larger gaps so idle time is not compressed away.
    for i, (path, t) in enumerate(frames):
        nxt = ts[i + 1] if i + 1 < len(frames) else t + (1 / 30)
        raw = nxt - t if nxt > t else 1 / 30
        dur = max(1 / FPS, min(0.85, raw))
        lines.append(f"file '{path}'")
        lines.append(f"duration {dur:.5f}")
    lines.append(f"file '{frames[-1][0]}'")
    concat.write_text("\n".join(lines))

    OUT.mkdir(parents=True, exist_ok=True)
    mp4 = OUT / "economics.mp4"
    poster = OUT / "economics-poster.jpg"
    raw_mp4 = TMP / "economics-raw.mp4"

    subprocess.run(
        [
            "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(concat),
            "-vf", f"fps={FPS},scale={W}:{H}:flags=lanczos,format=yuv420p",
            "-c:v", "libx264", "-preset", "slow", "-crf", "16",
            "-profile:v", "high", "-pix_fmt", "yuv420p",
            "-movflags", "+faststart", "-an", str(raw_mp4),
        ],
        check=True,
    )

    # Nudge toward ~10s if CDP still under-delivered a touch.
    probe = subprocess.run(
        [
            "ffprobe", "-v", "error",
            "-show_entries", "format=duration",
            "-of", "csv=p=0",
            str(raw_mp4),
        ],
        capture_output=True,
        text=True,
    )
    dur = float((probe.stdout or "0").strip() or "0")
    target = 10.0
    if 6.5 <= dur < 9.4:
        factor = target / dur
        subprocess.run(
            [
                "ffmpeg", "-y", "-i", str(raw_mp4),
                "-filter:v", f"setpts={factor:.5f}*PTS,fps={FPS}",
                "-c:v", "libx264", "-preset", "slow", "-crf", "16",
                "-profile:v", "high", "-pix_fmt", "yuv420p",
                "-movflags", "+faststart", "-an", str(mp4),
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    else:
        shutil.copy2(raw_mp4, mp4)

    subprocess.run(
        [
            "ffmpeg", "-y", "-ss", "1.2", "-i", str(mp4),
            "-frames:v", "1", "-q:v", "2", str(poster),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    probe = subprocess.run(
        [
            "ffprobe", "-v", "error",
            "-select_streams", "v:0",
            "-show_entries", "stream=width,height,r_frame_rate",
            "-show_entries", "format=duration,size",
            "-of", "default=noprint_wrappers=1",
            str(mp4),
        ],
        capture_output=True,
        text=True,
    )
    print(probe.stdout)
    print(f"wrote {mp4} ({mp4.stat().st_size // 1024} KB)")


def main():
    patched = False
    try:
        patch_task_51()
        patched = True
        # Give Vite a moment to pick up the JSON change if the server is already up.
        time.sleep(1.5)
        frames = asyncio.run(record())
        print(f"captured {len(frames)} frames, span={frames[-1][1] - frames[0][1]:.2f}s")
        encode(frames)
    finally:
        if patched:
            restore_cases()


if __name__ == "__main__":
    main()
