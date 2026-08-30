#!/usr/bin/env python3
"""
Records the homepage "How it works" demos (economics / math / english) straight
from the live app UI using a CDP screencast, then encodes smooth 120fps MP4s.

Run inside the sandbox:
    python3 scripts/record-how-it-works.py [subject ...]

Output: public/how-it-works/<subject>.mp4 + <subject>-poster.jpg
"""
import asyncio, json, os, subprocess, sys, shutil
from pathlib import Path
from playwright.async_api import async_playwright

BASE = os.environ.get("DEMO_BASE_URL", "http://localhost:8080")
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "how-it-works"
TMP = Path("/tmp/hiw")
W, H = 1440, 900
FPS = 120


SUPA_KEY = "sb-kntpsdgggolkqnywxedq-auth-token"
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
        "email": "demo@bbe-school.com",
        "user_metadata": {"full_name": "Demo Student"},
        "app_metadata": {},
        "created_at": "2026-01-01T00:00:00Z",
    },
}


# ---------------------------------------------------------------- helpers
async def hide_chrome(page):
    await page.add_style_tag(content="""
      [data-floating-assistant], #chat-widget, .crisp-client,
      iframe[title*="chat" i],
      button.fixed.bottom-5.right-5 { display:none !important; }
      * { scrollbar-width: none !important; }
      *::-webkit-scrollbar { width:0 !important; height:0 !important; }
    """)


async def smooth_scroll(page, dy, ms=900, selector=None):
    await page.evaluate(
        """([dy, ms, sel]) => new Promise(res => {
            const el = sel ? document.querySelector(sel) : null;
            const target = el || document.scrollingElement;
            const start = target.scrollTop;
            const t0 = performance.now();
            const ease = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
            function step(now){
              const p = Math.min(1, (now - t0)/ms);
              target.scrollTop = start + dy*ease(p);
              if (p < 1) requestAnimationFrame(step); else res();
            }
            requestAnimationFrame(step);
        })""",
        [dy, ms, selector],
    )


async def smooth_scroll_panel(page, dy, ms=1200):
    """Smoothly scrolls the largest inner scrollable panel (explanation drawer)."""
    await page.evaluate(
        """([dy, ms]) => new Promise(res => {
            const cands = [...document.querySelectorAll('div,section,aside')]
              .filter(e => e.scrollHeight - e.clientHeight > 80 && e.clientHeight > 200
                        && getComputedStyle(e).overflowY !== 'visible');
            const target = cands.sort((a,b)=> (b.scrollHeight-b.clientHeight)-(a.scrollHeight-a.clientHeight))[0]
                        || document.scrollingElement;
            const start = target.scrollTop, t0 = performance.now();
            const ease = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
            function step(now){
              const p = Math.min(1,(now-t0)/ms);
              target.scrollTop = start + dy*ease(p);
              if (p<1) requestAnimationFrame(step); else res();
            }
            requestAnimationFrame(step);
        })""",
        [dy, ms],
    )


async def glide(page, x, y, steps=28):
    await page.mouse.move(x, y, steps=steps)


async def soft_click(page, locator, pause=520):
    """Move the cursor to the element, then click — reads as human motion."""
    try:
        await locator.scroll_into_view_if_needed(timeout=4000)
    except Exception:
        pass
    box = await locator.bounding_box()
    if box:
        await glide(page, box["x"] + box["width"] / 2, box["y"] + box["height"] / 2)
        await page.wait_for_timeout(160)
    await locator.click(force=True)
    await page.wait_for_timeout(pause)


async def maybe(page, locator, pause=520):
    try:
        if await locator.count() and await locator.first.is_visible():
            await soft_click(page, locator.first, pause)
            return True
    except Exception:
        pass
    return False


async def answer_statements(page, indices):
    boxes = page.locator('button[role="checkbox"]:not([disabled])')
    try:
        await boxes.first.wait_for(state="visible", timeout=20000)
    except Exception:
        return
    n = await boxes.count()
    for i in indices:
        if i < n:
            await soft_click(page, boxes.nth(i), 420)


async def open_task(page, chapter_text, task_text=None):
    """Click the chapter (and optionally a task) until the task panel renders."""
    submit = page.locator("button").filter(has_text="Check Answers").first
    for attempt in range(6):
        if await submit.count() and await submit.is_visible():
            break
        await maybe(page, page.locator("button").filter(has_text=chapter_text).first, 900)
        if task_text:
            await maybe(page, page.locator("aside button").filter(has_text=task_text).first, 800)
        await page.wait_for_timeout(900)
    await wait_task(page)


async def wait_task(page):
    await page.locator("button").filter(has_text="Check Answers").first.wait_for(
        state="visible", timeout=45000
    )
    await page.wait_for_timeout(600)


async def collapse_sidebar(page):
    await maybe(page, page.locator('button[title="Hide chapters"]'), 500)


async def show_explanation(page, scrolls=(320, 300, 280)):
    await maybe(page, page.locator("button").filter(has_text="Check Answers").first, 1400)
    opened = await maybe(
        page, page.locator("button").filter(has_text="Explanation").first, 1400
    )
    for dy in scrolls:
        await smooth_scroll_panel(page, dy, 1300)
        await page.wait_for_timeout(900)
    return opened


# ---------------------------------------------------------------- flows
async def prep(page, path, chapter, task=None):
    await page.goto(f"{BASE}{path}", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(3200)
    await open_task(page, chapter, task)
    await collapse_sidebar(page)
    await page.wait_for_timeout(800)


async def prep_math(page):
    await prep(page, "/demo-practice/math", "1. Logic")


async def demo_math(page):
    await smooth_scroll(page, 160, 900)
    await page.wait_for_timeout(600)

    # calculator tool
    if await maybe(page, page.locator("button").filter(has_text="Calculator").first, 1000):
        import re as _re

        for k in ["7", "8", "\u00d7", "2", "4", "="]:
            key = page.locator("button").filter(
                has_text=_re.compile(rf"^\s*{_re.escape(k)}\s*$")
            ).first
            try:
                if await key.count():
                    await soft_click(page, key, 260)
            except Exception:
                pass
        await page.wait_for_timeout(900)
        await maybe(page, page.locator("button").filter(has_text="Close").first, 700)

    await answer_statements(page, [0, 1, 3])
    await show_explanation(page, scrolls=(340, 320, 300, 300))
    await page.wait_for_timeout(1400)


async def prep_economics(page):
    await prep(page, "/demo-practice/economics", "Basic Economic Concepts", "Task 1")


async def demo_economics(page):
    await smooth_scroll(page, 200, 900)
    await page.wait_for_timeout(600)

    await answer_statements(page, [0, 2, 3])
    await show_explanation(page, scrolls=(320, 300, 300))
    # AI explanation panel
    await maybe(page, page.locator("button").filter(has_text="AI").first, 1800)
    await smooth_scroll(page, 260, 1100)
    await page.wait_for_timeout(1400)


async def prep_english(page):
    await prep(page, "/demo-practice/english", "1. Texts")
    await maybe(page, page.locator("button").filter(has_text="Untimed").first, 500)


async def demo_english(page):
    # annotation toolbar
    if await maybe(page, page.locator("button").filter(has_text="Highlight").first, 500):
        para = page.locator("p").filter(has_text=" the ").first
        try:
            box = await para.bounding_box()
        except Exception:
            box = None
        if box:
            y = box["y"] + min(18, box["height"] / 2)
            await glide(page, box["x"] + 6, y)
            await page.mouse.down()
            await page.mouse.move(box["x"] + min(340, box["width"] - 10), y, steps=26)
            await page.mouse.up()
            await page.wait_for_timeout(900)

    await smooth_scroll(page, 220, 950)
    await answer_statements(page, [0, 2, 4])
    await show_explanation(page, scrolls=(340, 320, 300, 300))
    await page.wait_for_timeout(1400)


FLOWS = {
    "economics": (prep_economics, demo_economics),
    "math": (prep_math, demo_math),
    "english": (prep_english, demo_english),
}


# ---------------------------------------------------------------- capture
async def record_with_screencast(subject, flows, browser):
    prep_fn, act_fn = flows
    frames_dir = TMP / subject
    if frames_dir.exists():
        shutil.rmtree(frames_dir)
    frames_dir.mkdir(parents=True, exist_ok=True)

    ctx = await browser.new_context(viewport={"width": W, "height": H}, device_scale_factor=1)
    await ctx.add_init_script(
        f"try{{localStorage.setItem({json.dumps(SUPA_KEY)}, {json.dumps(json.dumps(FAKE_SESSION))});"
        f"sessionStorage.setItem('bbe-intro-seen','1');localStorage.setItem('bbe-intro-seen','1');}}catch(e){{}}"
    )
    page = await ctx.new_page()
    page.set_default_timeout(45000)
    await prep_fn(page)
    cdp = await ctx.new_cdp_session(page)
    frames = []
    import base64

    def on_frame(params):
        idx = len(frames)
        p = frames_dir / f"f{idx:05d}.jpg"
        p.write_bytes(base64.b64decode(params["data"]))
        frames.append((p, params["metadata"].get("timestamp")))
        asyncio.ensure_future(
            cdp.send("Page.screencastFrameAck", {"sessionId": params["sessionId"]})
        )

    cdp.on("Page.screencastFrame", on_frame)
    await cdp.send(
        "Page.startScreencast",
        {"format": "jpeg", "quality": 92, "maxWidth": W, "maxHeight": H, "everyNthFrame": 1},
    )
    try:
        await act_fn(page)
    finally:
        try:
            await cdp.send("Page.stopScreencast")
        except Exception:
            pass
        await page.wait_for_timeout(400)
        await ctx.close()
    return frames


def encode(subject, frames):
    frames = frames[:-2] if len(frames) > 8 else frames
    if len(frames) < 5:
        raise SystemExit(f"{subject}: only {len(frames)} frames captured")
    ts = [t for _, t in frames]
    base = ts[0]
    concat = TMP / f"{subject}.ffconcat"
    lines = ["ffconcat version 1.0"]
    for i, (p, t) in enumerate(frames):
        nxt = ts[i + 1] if i + 1 < len(frames) else t + 0.08
        dur = max(1 / FPS, min(1.2, (nxt - t)))
        lines.append(f"file '{p}'")
        lines.append(f"duration {dur:.5f}")
    lines.append(f"file '{frames[-1][0]}'")
    concat.write_text("\n".join(lines))

    OUT.mkdir(parents=True, exist_ok=True)
    mp4 = OUT / f"{subject}.mp4"
    subprocess.run(
        [
            "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(concat),
            "-vf", f"fps={FPS},format=yuv420p",
            "-c:v", "libx264", "-preset", "slow", "-crf", "23",
            "-movflags", "+faststart", "-an", str(mp4),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    poster = OUT / f"{subject}-poster.jpg"
    subprocess.run(
        ["ffmpeg", "-y", "-ss", "1.5", "-i", str(mp4), "-frames:v", "1", "-q:v", "3", str(poster)],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    dur = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(mp4)],
        capture_output=True, text=True,
    ).stdout.strip()
    print(f"{subject}: {len(frames)} frames -> {mp4} ({dur}s, {mp4.stat().st_size//1024} KB)")


async def main():
    subjects = sys.argv[1:] or list(FLOWS)
    TMP.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--disable-dev-shm-usage"])
        for s in subjects:
            print(f"=== recording {s} ===", flush=True)
            frames = await record_with_screencast(s, FLOWS[s], browser)
            encode(s, frames)
        await browser.close()


if __name__ == "__main__":
    asyncio.run(main())
