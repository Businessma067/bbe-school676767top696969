#!/usr/bin/env python3
"""
Records the homepage "How it works" demos (economics / math / english) straight
from the live app UI using a CDP screencast, then encodes smooth 120fps MP4s.

The recording shows a visible cursor gliding across the real interface, opens a
randomly picked (non-first) chapter/task, demonstrates Timed mode and the
calculator, answers statements and slowly scrolls through the full explanation.

Run inside the sandbox:
    python3 scripts/record-how-it-works.py [subject ...]

Output: public/how-it-works/<subject>.mp4 + <subject>-poster.jpg
"""
import asyncio, base64, json, os, random, shutil, subprocess, sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE = os.environ.get("DEMO_BASE_URL", "http://localhost:8080")
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "how-it-works"
TMP = Path("/tmp/hiw")
W, H = 1440, 900
FPS = 120

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
        "email": "demo@bbe-school.com",
        "user_metadata": {"full_name": "Demo Student"},
        "app_metadata": {},
        "created_at": "2026-01-01T00:00:00Z",
    },
}

CURSOR_JS = """
(() => {
  const install = () => {
    if (document.getElementById('__demo_cursor')) return;
    const c = document.createElement('div');
    c.id = '__demo_cursor';
    c.style.cssText = [
      'position:fixed','left:0','top:0','width:22px','height:22px','z-index:2147483647',
      'pointer-events:none','transform:translate(-2px,-2px)','opacity:0',
      'transition:opacity .25s ease'
    ].join(';');
    c.innerHTML = "<svg width='22' height='22' viewBox='0 0 22 22'>" +
      "<path d='M3 2 L3 17 L7.2 13.2 L9.8 19.4 L12.6 18.2 L10.1 12.2 L15.6 12.2 Z'" +
      " fill='#111827' stroke='#ffffff' stroke-width='1.4' stroke-linejoin='round'/></svg>";
    const ring = document.createElement('div');
    ring.id = '__demo_ring';
    ring.style.cssText = [
      'position:fixed','left:0','top:0','width:34px','height:34px','border-radius:999px',
      'z-index:2147483646','pointer-events:none','opacity:0',
      'background:radial-gradient(circle, rgba(232,93,58,.35) 0%, rgba(232,93,58,0) 70%)',
      'transform:translate(-17px,-17px) scale(.6)','transition:opacity .18s ease, transform .35s ease'
    ].join(';');
    document.body.appendChild(ring);
    document.body.appendChild(c);
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    const place = () => {
      c.style.left = x + 'px'; c.style.top = y + 'px';
      ring.style.left = x + 'px'; ring.style.top = y + 'px';
    };
    place();
    window.addEventListener('mousemove', (e) => {
      x = e.clientX; y = e.clientY; c.style.opacity = '1'; place();
    }, true);
    window.addEventListener('mousedown', () => {
      ring.style.opacity = '1';
      ring.style.transform = 'translate(-17px,-17px) scale(1.15)';
      setTimeout(() => {
        ring.style.opacity = '0';
        ring.style.transform = 'translate(-17px,-17px) scale(.6)';
      }, 260);
    }, true);
  };
  if (document.body) install();
  else document.addEventListener('DOMContentLoaded', install);
  setInterval(install, 1500);
})();
"""


# ---------------------------------------------------------------- helpers
async def hide_chrome(page):
    await page.add_style_tag(content="""
      [data-floating-assistant], #chat-widget, .crisp-client,
      iframe[title*="chat" i],
      button.fixed.bottom-5.right-5 { display:none !important; }
      * { scrollbar-width: none !important; }
      *::-webkit-scrollbar { width:0 !important; height:0 !important; }
    """)


async def smooth_scroll(page, dy, ms=1400, selector=None):
    await page.evaluate(
        """([dy, ms, sel]) => new Promise(res => {
            const el = sel ? document.querySelector(sel) : null;
            const target = el || document.scrollingElement;
            const start = target.scrollTop;
            const t0 = performance.now();
            const ease = t => t < .5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;
            function step(now){
              const p = Math.min(1, (now - t0)/ms);
              target.scrollTop = start + dy*ease(p);
              if (p < 1) requestAnimationFrame(step); else res();
            }
            requestAnimationFrame(step);
        })""",
        [dy, ms, selector],
    )


async def pick_panel(page):
    """Returns True if a big inner scrollable panel exists (explanation drawer)."""
    return await page.evaluate(
        """() => {
            const cands = [...document.querySelectorAll('div,section,aside')]
              .filter(e => e.scrollHeight - e.clientHeight > 120 && e.clientHeight > 240
                        && getComputedStyle(e).overflowY !== 'visible');
            return cands.length > 0;
        }"""
    )


async def smooth_scroll_panel(page, dy, ms=1600):
    """Smoothly scrolls the largest inner scrollable panel, else the page."""
    await page.evaluate(
        """([dy, ms]) => new Promise(res => {
            const cands = [...document.querySelectorAll('div,section,aside')]
              .filter(e => e.scrollHeight - e.clientHeight > 120 && e.clientHeight > 240
                        && getComputedStyle(e).overflowY !== 'visible');
            const target = cands.sort((a,b)=> (b.scrollHeight-b.clientHeight)-(a.scrollHeight-a.clientHeight))[0]
                        || document.scrollingElement;
            const start = target.scrollTop, t0 = performance.now();
            const ease = t => t < .5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;
            function step(now){
              const p = Math.min(1,(now-t0)/ms);
              target.scrollTop = start + dy*ease(p);
              if (p<1) requestAnimationFrame(step); else res();
            }
            requestAnimationFrame(step);
        })""",
        [dy, ms],
    )


async def read_scroll(page, total=1600, chunk=170, ms=1500, pause=850):
    """Slow reading pass: many short eased scrolls with pauses in between."""
    done = 0
    while done < total:
        step = min(chunk, total - done)
        await smooth_scroll_panel(page, step, ms)
        await page.wait_for_timeout(pause)
        done += step


async def glide(page, x, y, steps=90):
    """Very smooth cursor travel."""
    await page.mouse.move(x, y, steps=steps)
    await page.wait_for_timeout(120)


async def soft_click(page, locator, pause=900):
    try:
        await locator.scroll_into_view_if_needed(timeout=4000)
        await page.wait_for_timeout(320)
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


async def answer_statements(page, indices):
    boxes = page.locator('button[role="checkbox"]:not([disabled])')
    try:
        await boxes.first.wait_for(state="visible", timeout=20000)
    except Exception:
        return
    n = await boxes.count()
    for i in indices:
        if i < n:
            await soft_click(page, boxes.nth(i), 700)


async def task_open(page):
    btn = page.locator("button").filter(has_text="Check Answers").first
    try:
        return bool(await btn.count()) and await btn.is_visible()
    except Exception:
        return False


async def unlocked_tasks(page):
    import re as _re

    all_tasks = page.locator("button").filter(has_text=_re.compile(r"^Task \d+$"))
    return all_tasks


async def open_random_task(page, group_labels, rng):
    """Expands a (preferably non-first) chapter/subtopic and opens a random
    unlocked task."""
    order = list(group_labels)
    rng.shuffle(order)
    for label in order:
        node = page.locator("button").filter(has_text=label).first
        try:
            if not await node.count():
                continue
            await soft_click(page, node, 1200)
        except Exception:
            continue
        if await task_open(page):
            return True
        tasks = await unlocked_tasks(page)
        try:
            count = await tasks.count()
        except Exception:
            count = 0
        if count:
            idx = rng.randrange(count) if count > 1 else 0
            await soft_click(page, tasks.nth(idx), 1600)
            if await task_open(page):
                return True
    return False


async def collapse_sidebar(page):
    await maybe(page, page.locator('button[title="Hide chapters"]'), 800)


async def show_features(page):
    """Timed mode + calculator, if present in this view."""
    import re as _re

    timed = page.locator("button").filter(has_text=_re.compile(r"Timed", _re.I)).first
    if await maybe(page, timed, 1400):
        for lvl in ["Hard", "Standard"]:
            await maybe(page, page.locator("button").filter(has_text=lvl).first, 1100)
        await page.wait_for_timeout(1600)

    calc = page.locator("button").filter(has_text=_re.compile(r"Calculator", _re.I)).first
    if await maybe(page, calc, 1300):
        for k in ["7", "8", "×", "2", "4", "="]:
            key = page.locator("button").filter(
                has_text=_re.compile(rf"^\s*{_re.escape(k)}\s*$")
            ).first
            try:
                if await key.count():
                    await soft_click(page, key, 420)
            except Exception:
                pass
        await page.wait_for_timeout(1200)
        await maybe(page, page.locator("button").filter(has_text="Close").first, 900)


async def show_explanation(page, total=2000):
    await maybe(page, page.locator("button").filter(has_text="Check Answers").first, 1800)
    await maybe(page, page.locator("button").filter(has_text="Explanation").first, 1600)
    await read_scroll(page, total=total, chunk=170, ms=1500, pause=800)


# ---------------------------------------------------------------- flows
MATH_GROUPS = [
    "Set Operations, Complements & Counting",
    "Sets: Elements, Subsets & Power Sets",
    "Propositional Logic & Implications",
]
ECON_GROUPS = [
    "5. Marketing",
    "4. Forms of business ownership",
    "6. Accounting",
    "3. Focus on different types of businesses",
]
ENG_GROUPS = [
    "The Rise of the Four-Day Workweek",
    "Dynamic Pricing and the Rise of Algorithmic Price Discrimination",
]


async def prep(page, path, top_label, groups, rng):
    await page.goto(f"{BASE}{path}", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(3600)
    if top_label:
        await maybe(page, page.locator("button").filter(has_text=top_label).first, 1200)
    ok = await open_random_task(page, groups, rng)
    if not ok:
        await open_random_task(page, groups, rng)
    await collapse_sidebar(page)
    await page.wait_for_timeout(900)


async def prep_math(page, rng):
    await prep(page, "/demo-practice/math", "1. Logic", MATH_GROUPS, rng)


async def demo_math(page):
    await smooth_scroll(page, 140, 1300)
    await page.wait_for_timeout(700)
    await show_features(page)
    await answer_statements(page, [0, 1, 3])
    await show_explanation(page, total=2200)
    await page.wait_for_timeout(1600)


async def prep_economics(page, rng):
    await prep(page, "/demo-practice/economics", None, ECON_GROUPS, rng)


async def demo_economics(page):
    await smooth_scroll(page, 160, 1300)
    await page.wait_for_timeout(700)
    await show_features(page)
    await answer_statements(page, [0, 2, 3])
    await show_explanation(page, total=1800)
    # AI double-panel explanation
    await maybe(page, page.locator("button").filter(has_text="AI").first, 2200)
    await read_scroll(page, total=900, chunk=180, ms=1500, pause=800)
    await page.wait_for_timeout(1400)


async def prep_english(page, rng):
    await prep(page, "/demo-practice/english", "1. Texts", ENG_GROUPS, rng)


async def demo_english(page):
    # annotation toolbar: highlight a sentence with a visible drag
    if await maybe(page, page.locator("button").filter(has_text="Highlight").first, 900):
        para = page.locator("p").filter(has_text=" the ").first
        try:
            box = await para.bounding_box()
        except Exception:
            box = None
        if box:
            y = box["y"] + min(18, box["height"] / 2)
            await glide(page, box["x"] + 6, y)
            await page.mouse.down()
            await page.mouse.move(box["x"] + min(360, box["width"] - 10), y, steps=90)
            await page.mouse.up()
            await page.wait_for_timeout(1200)

    await read_scroll(page, total=620, chunk=160, ms=1500, pause=750)
    await show_features(page)
    await answer_statements(page, [0, 2, 4])
    await show_explanation(page, total=2000)
    await page.wait_for_timeout(1600)


FLOWS = {
    "economics": (prep_economics, demo_economics),
    "math": (prep_math, demo_math),
    "english": (prep_english, demo_english),
}


# ---------------------------------------------------------------- capture
async def record_with_screencast(subject, flows, browser, rng):
    prep_fn, act_fn = flows
    frames_dir = TMP / subject
    if frames_dir.exists():
        shutil.rmtree(frames_dir)
    frames_dir.mkdir(parents=True, exist_ok=True)

    ctx = await browser.new_context(
        viewport={"width": W, "height": H}, device_scale_factor=2
    )
    await ctx.add_init_script(
        f"try{{localStorage.setItem({json.dumps(SUPA_KEY)}, {json.dumps(json.dumps(FAKE_SESSION))});"
        f"sessionStorage.setItem('bbe-intro-seen','1');localStorage.setItem('bbe-intro-seen','1');}}catch(e){{}}"
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
    page.set_default_timeout(45000)
    await prep_fn(page, rng)
    cdp = await ctx.new_cdp_session(page)
    frames = []

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
        {"format": "jpeg", "quality": 95, "maxWidth": W * 2, "maxHeight": H * 2,
         "everyNthFrame": 1},
    )
    try:
        await act_fn(page)
    finally:
        try:
            await cdp.send("Page.stopScreencast")
        except Exception:
            pass
        await page.wait_for_timeout(500)
        await ctx.close()
    return frames


def encode(subject, frames):
    frames = frames[:-2] if len(frames) > 8 else frames
    if len(frames) < 5:
        raise SystemExit(f"{subject}: only {len(frames)} frames captured")
    ts = [t for _, t in frames]
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
            "-vf", f"fps={FPS},scale={W}:-2:flags=lanczos,format=yuv420p",
            "-c:v", "libx264", "-preset", "slow", "-crf", "20",
            "-movflags", "+faststart", "-an", str(mp4),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    poster = OUT / f"{subject}-poster.jpg"
    subprocess.run(
        ["ffmpeg", "-y", "-ss", "1.5", "-i", str(mp4), "-frames:v", "1", "-q:v", "2", str(poster)],
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
    rng = random.Random(os.environ.get("DEMO_SEED", "bbe-2026"))
    TMP.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--disable-dev-shm-usage"])
        for s in subjects:
            print(f"=== recording {s} ===", flush=True)
            frames = await record_with_screencast(s, FLOWS[s], browser, rng)
            encode(s, frames)
        await browser.close()


if __name__ == "__main__":
    asyncio.run(main())
