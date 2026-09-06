#!/usr/bin/env python3
"""
Records the homepage "How it works" demos (economics / math / english) from the
Full Course UI using a CDP screencast, then encodes smooth 120fps MP4s.

Flows (what appears on video — not copy):
  Economics: open guide → show task count → open a task → submit → explanation
             → scroll → AI explanation beside a statement
  Math:      open guide → expand & show all questions → open one → timed mode
             → calculator → submit → scroll explanations
  English:   open Texts “guide” (chapter) → show all questions → open a Texts
             task → submit → Show solution in the text

Run:
    DEMO_BASE_URL=http://localhost:8080 python3 scripts/record-how-it-works.py [subject ...]

Output: public/how-it-works/<subject>.mp4 + <subject>-poster.jpg
"""
import asyncio, base64, json, os, random, re, shutil, subprocess, sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE = os.environ.get("DEMO_BASE_URL", "http://localhost:8080")
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "how-it-works"
TMP = Path("/tmp/hiw")
W, H = 1440, 900
FPS = 120

# Prefer a workspace-local browser cache when present (arm64 installs).
_BROWSER_CANDIDATES = [
    ROOT / ".playwright-browsers",
    Path(os.environ.get("PLAYWRIGHT_BROWSERS_PATH", "")),
]
for _c in _BROWSER_CANDIDATES:
    if _c and _c.is_dir() and any(_c.glob("chromium*")):
        os.environ["PLAYWRIGHT_BROWSERS_PATH"] = str(_c)
        break

SUPA_KEY = "sb-kntpsdgggolkqnywxedq-auth-token"
ANON_KEY = (
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
    "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtudHBzZGdnZ29sa3FueXd4ZWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1ODkzNjIsImV4cCI6MjA5OTE2NTM2Mn0."
    "awDJV4ZL742sHzjBVHn_PnKVX6cdP81ipkns0xVPYKw"
)
# Admin email unlocks RequireFullCourse (client-side tier = full).
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
        "user_metadata": {"full_name": "Demo Student"},
        "app_metadata": {},
        "created_at": "2026-01-01T00:00:00Z",
    },
}

MOCK_AI = {
    "classic_explanation": (
        "This statement is false because it confuses a necessary condition with a "
        "sufficient one. In the textbook framing, the claim only holds when both "
        "demand and cost conditions are met — the stem never establishes that."
    ),
    "textbook_context": (
        "Chapter theory: a claim is only true when every element of the definition "
        "is present. Partial overlap with the wording is not enough for TRUE."
    ),
    "highlight_text": "necessary condition with a sufficient one",
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


async def panel_point(page):
    return await page.evaluate(
        """() => {
            const vis = e => { const r = e.getBoundingClientRect();
              return r.width > 260 && r.height > 260 && r.right > 0 && r.left < innerWidth; };
            const cands = [...document.querySelectorAll('.practice-scroll,div,section,aside')]
              .filter(e => vis(e) && e.scrollHeight - e.clientHeight > 80
                        && ['auto','scroll'].includes(getComputedStyle(e).overflowY));
            const t = cands.sort((a,b)=>(b.scrollHeight-b.clientHeight)-(a.scrollHeight-a.clientHeight))[0];
            if (!t) return null;
            const r = t.getBoundingClientRect();
            return [Math.round(r.left + r.width/2), Math.round(r.top + Math.min(r.height/2, 380))];
        }"""
    )


async def read_scroll(page, total=1600, step=14, delay=90, pause=900, chunks=5):
    pt = await panel_point(page)
    if pt:
        await glide(page, pt[0], pt[1], steps=60)
    per = max(1, total // chunks)
    for _ in range(chunks):
        moved = 0
        while moved < per:
            await page.mouse.wheel(0, step)
            await page.wait_for_timeout(delay)
            moved += step
        await page.wait_for_timeout(pause)


async def glide(page, x, y, steps=90):
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
            await soft_click(page, boxes.nth(i), 520)


async def task_open(page):
    btn = page.locator("button").filter(has_text="Check Answers").first
    try:
        return bool(await btn.count()) and await btn.is_visible()
    except Exception:
        return False


async def task_buttons(page):
    return page.locator("button").filter(has_text=re.compile(r"^Task \d+"))


async def scroll_sidebar_list(page, dy=420, ms=1600):
    await page.evaluate(
        """([dy, ms]) => new Promise(res => {
            const cands = [...document.querySelectorAll('.practice-scroll, ul, nav, aside, div')]
              .filter(e => {
                const r = e.getBoundingClientRect();
                return r.width > 160 && r.width < 420 && r.height > 200
                  && e.scrollHeight - e.clientHeight > 40
                  && ['auto','scroll'].includes(getComputedStyle(e).overflowY);
              });
            const target = cands.sort((a,b)=>(b.scrollHeight-b.clientHeight)-(a.scrollHeight-a.clientHeight))[0]
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
    await page.wait_for_timeout(500)


async def expand_all_visible_chevrons(page, limit=12):
    """Open collapsed chapter/subtopic rows so the full task list is visible."""
    for _ in range(limit):
        closed = page.locator('button[aria-label="Expand chapter"], button[aria-label*="Expand"]')
        # Prefer chevron buttons that are still rotated closed (-rotate-90)
        clicked = False
        count = await closed.count()
        for i in range(min(count, 8)):
            btn = closed.nth(i)
            try:
                if not await btn.is_visible():
                    continue
                await soft_click(page, btn, 700)
                clicked = True
                break
            except Exception:
                continue
        if not clicked:
            # Fallback: click subsection titles that look collapsed
            subs = page.locator("button").filter(
                has_text=re.compile(r"^(Sets:|Set Operations|Propositional|Quantifiers|Exam-Style|The Rise|Dynamic Pricing|Marshall|Nudge|Antibiotic)")
            )
            if await subs.count():
                await soft_click(page, subs.first, 800)
                continue
            break
        await page.wait_for_timeout(400)


async def show_features(page, *, timed=True, calc=True):
    if timed:
        timed_btn = page.locator("button").filter(has_text=re.compile(r"Timed", re.I)).first
        if await maybe(page, timed_btn, 1100):
            await maybe(page, page.locator("button").filter(has_text="Hard").first, 900)
            await page.wait_for_timeout(700)

    if calc:
        calc_btn = page.locator("button").filter(has_text=re.compile(r"Calculator", re.I)).first
        if await maybe(page, calc_btn, 1300):
            for k in ["7", "8", "×", "2", "4", "="]:
                key = page.locator("button").filter(
                    has_text=re.compile(rf"^\s*{re.escape(k)}\s*$")
                ).first
                try:
                    if await key.count():
                        await soft_click(page, key, 420)
                except Exception:
                    pass
            await page.wait_for_timeout(700)
            await maybe(page, page.locator("button").filter(has_text="Close").first, 800)


async def open_explanation(page):
    pat = re.compile(r"^(Explanation|Show Explanation)$", re.I)
    for _ in range(3):
        btn = page.locator("button").filter(has_text=pat).first
        try:
            if await btn.count() and await btn.is_visible():
                await soft_click(page, btn, 1600)
        except Exception:
            pass
        try:
            panel = page.get_by_text("FULL SOLUTION", exact=False).first
            if await panel.count() and await panel.is_visible():
                return True
            # English Texts uses inline "Show solution in the text" after submit
            if await page.get_by_text("Show solution in the text", exact=False).count():
                return True
        except Exception:
            pass
        await page.wait_for_timeout(700)
    return False


async def submit_and_explain(page, total=2000):
    await maybe(page, page.locator("button").filter(has_text="Check Answers").first, 1600)
    await open_explanation(page)
    await page.wait_for_timeout(700)
    await read_scroll(page, total=total)


async def wait_for_access(page):
    """Pass RequireFullCourse gate (admin fake session → full tier)."""
    for _ in range(40):
        body = (await page.locator("body").inner_text()).lower()
        if "checking course access" in body:
            await page.wait_for_timeout(400)
            continue
        if "log in" in body and "checking" not in body and page.url.endswith("/login"):
            raise RuntimeError("Redirected to login — fake admin session failed")
        break
    await page.wait_for_timeout(800)


async def goto_course(page, path):
    await page.goto(f"{BASE}{path}", wait_until="domcontentloaded")
    await hide_chrome(page)
    await wait_for_access(page)
    await page.wait_for_timeout(2200)


async def open_theory_by_title(page, title_fragment):
    """Click chapter name (opens Theory Reader for econ/math)."""
    btn = page.locator("button").filter(has_text=title_fragment).first
    await soft_click(page, btn, 1800)
    # Theory header marker
    for _ in range(20):
        if await page.get_by_text("Theory", exact=False).count():
            break
        await page.wait_for_timeout(250)
    await page.wait_for_timeout(900)
    await smooth_scroll(page, 280, 1400)
    await page.wait_for_timeout(800)


async def leave_theory(page):
    """Practice button returns to the task list."""
    await maybe(page, page.locator("button").filter(has_text=re.compile(r"Practice")).first, 1400)
    await page.wait_for_timeout(700)


async def expand_chapter_tasks(page, chapter_label):
    """Expand a chapter's task list via the chevron (not the theory title)."""
    # Find the chapter row, click its expand chevron
    row = page.locator("li").filter(has_text=chapter_label).first
    try:
        chevron = row.locator('button[aria-label="Expand chapter"], button[aria-label="Collapse chapter"]').first
        if await chevron.count():
            label = await chevron.get_attribute("aria-label")
            if label and "Expand" in label:
                await soft_click(page, chevron, 1000)
            return True
    except Exception:
        pass
    # Fallback: click any Expand chapter near the label
    return await maybe(page, page.locator('button[aria-label="Expand chapter"]').first, 1000)


async def highlight_task_count(page, chapter_label):
    """Pause cursor on the chapter's done/total badge."""
    row = page.locator("li, button, div").filter(has_text=chapter_label).first
    try:
        box = await row.bounding_box()
        if box:
            await glide(page, box["x"] + box["width"] - 28, box["y"] + box["height"] / 2, steps=70)
            await page.wait_for_timeout(1400)
    except Exception:
        pass


async def open_task_n(page, n=1):
    tasks = await task_buttons(page)
    try:
        count = await tasks.count()
    except Exception:
        count = 0
    if not count:
        return False
    idx = min(max(n - 1, 0), count - 1)
    await soft_click(page, tasks.nth(idx), 1600)
    return await task_open(page)


# ---------------------------------------------------------------- flows
async def prep_economics(page, rng):
    await goto_course(page, "/products/full-course-economics")
    for _ in range(50):
        if await page.locator("button").filter(has_text="Marketing").count():
            await expand_chapter_tasks(page, "Marketing")
            tasks = await task_buttons(page)
            if await tasks.count():
                break
        await page.wait_for_timeout(400)


async def demo_economics(page):
    # Guide → task count → task → submit → explanation → scroll → AI
    await open_theory_by_title(page, "Marketing")
    await leave_theory(page)
    await expand_chapter_tasks(page, "Marketing")
    await highlight_task_count(page, "Marketing")
    await scroll_sidebar_list(page, dy=260, ms=1200)
    tasks = await task_buttons(page)
    count = await tasks.count()
    pick = min(5, count - 1) if count > 1 else 0
    if count:
        await soft_click(page, tasks.nth(pick), 1600)
    await maybe(page, page.locator('button[title="Collapse chapters"], button[title="Hide chapters"]'), 800)
    await smooth_scroll(page, 140, 1200)
    await page.wait_for_timeout(600)
    await answer_statements(page, [0, 2, 3])
    await submit_and_explain(page, total=2000)
    await show_ai_explanation(page)
    await read_scroll(page, total=1100, chunks=3)
    await page.wait_for_timeout(1400)


async def prep_math(page, rng):
    await goto_course(page, "/products/full-course-math")
    for _ in range(40):
        if await page.locator("button").filter(has_text="Logic").count():
            break
        await page.wait_for_timeout(400)


async def demo_math(page):
    # Guide → expand all questions → open one → timed → calc → submit → scroll
    await open_theory_by_title(page, "1. Logic")
    await leave_theory(page)
    await expand_chapter_tasks(page, "Logic")
    for sub in [
        "Sets: Elements, Subsets & Power Sets",
        "Set Operations, Complements & Counting",
        "Propositional Logic & Implications",
        "Quantifiers, Validity & Deduction",
        "Exam-Style",
    ]:
        node = page.locator("button").filter(has_text=sub).first
        try:
            if await node.count():
                await soft_click(page, node, 700)
        except Exception:
            pass
    await scroll_sidebar_list(page, dy=520, ms=1800)
    await page.wait_for_timeout(900)
    await scroll_sidebar_list(page, dy=-200, ms=1000)

    tasks = await task_buttons(page)
    count = await tasks.count()
    pick = min(3, count - 1) if count > 1 else 0
    if count:
        await soft_click(page, tasks.nth(pick), 1800)
    await maybe(page, page.locator('button[title="Hide chapters"]'), 800)
    await smooth_scroll(page, 120, 1100)
    await show_features(page, timed=True, calc=True)
    await answer_statements(page, [0, 1, 3])
    await submit_and_explain(page, total=2400)
    await page.wait_for_timeout(1400)


async def prep_english(page, rng):
    await goto_course(page, "/products/full-course-english")
    for _ in range(40):
        if await page.locator("button").filter(has_text="Texts").count():
            break
        await page.wait_for_timeout(400)


async def demo_english(page):
    # Texts chapter → show all questions → open passage task → submit → show in text
    await soft_click(page, page.locator("button").filter(has_text=re.compile(r"Texts")).first, 1200)
    await expand_chapter_tasks(page, "Texts")
    passages = [
        "The Rise of the Four-Day Workweek",
        "Dynamic Pricing and the Rise of Algorithmic Price Discrimination",
        "The Rise and Fall of the Classical Gold Standard",
        "Reshoring, Nearshoring, and the Post-Pandemic Reordering of Global Supply Chains",
        "The Marshall Plan and the Politics of Economic Recovery",
    ]
    for title in passages:
        node = page.locator("button").filter(has_text=title).first
        try:
            if await node.count():
                await soft_click(page, node, 650)
        except Exception:
            pass
    await scroll_sidebar_list(page, dy=560, ms=2000)
    await page.wait_for_timeout(1000)
    await scroll_sidebar_list(page, dy=-280, ms=1200)

    tasks = await task_buttons(page)
    if await tasks.count():
        await soft_click(page, tasks.first, 1800)
    await page.wait_for_timeout(1000)

    await read_scroll(page, total=700, chunks=3)
    await answer_statements(page, [0, 2, 4])
    await maybe(page, page.locator("button").filter(has_text="Check Answers").first, 1600)
    await open_explanation(page)
    await page.wait_for_timeout(800)
    await read_scroll(page, total=1400, chunks=4)
    show_in = page.locator("button").filter(
        has_text=re.compile(r"Show solution in the text", re.I)
    ).first
    await maybe(page, show_in, 1800)
    await page.wait_for_timeout(1200)
    shows = page.locator("button").filter(
        has_text=re.compile(r"Show solution in the text", re.I)
    )
    if await shows.count() > 1:
        await soft_click(page, shows.nth(1), 1600)
    await page.wait_for_timeout(1600)


FLOWS = {
    "economics": (prep_economics, demo_economics),
    "math": (prep_math, demo_math),
    "english": (prep_english, demo_english),
}


# ---------------------------------------------------------------- capture
async def install_routes(ctx):
    async def _supabase_rest(route):
        """Anon key + rewrite full-tier economics_cases → demo (RLS only exposes demo)."""
        url = route.request.url
        headers = {
            **route.request.headers,
            "authorization": f"Bearer {ANON_KEY}",
            "apikey": ANON_KEY,
        }
        if "economics_cases" in url and "tier=eq.full" in url:
            url = url.replace("tier=eq.full", "tier=eq.demo")
            await route.continue_(url=url, headers=headers)
            return
        await route.continue_(headers=headers)

    def _decode_server_fn(url: str):
        try:
            part = url.rsplit("/", 1)[-1]
            pad = "=" * ((4 - len(part) % 4) % 4)
            return json.loads(base64.urlsafe_b64decode(part + pad))
        except Exception:
            return {}

    async def _mock_explain(route):
        meta = _decode_server_fn(route.request.url)
        export = str(meta.get("export", ""))
        if "explainCase" in export:
            # Seroval cross-JSON object (x-tss-serialized) matches Start's client decoder.
            body = {
                "t": 10,
                "i": 0,
                "p": {
                    "k": ["classic_explanation", "textbook_context", "highlight_text"],
                    "v": [
                        {"t": 1, "s": MOCK_AI["classic_explanation"]},
                        {"t": 1, "s": MOCK_AI["textbook_context"]},
                        {"t": 1, "s": MOCK_AI["highlight_text"]},
                    ],
                },
            }
            await route.fulfill(
                status=200,
                content_type="application/json",
                headers={"x-tss-serialized": "true"},
                body=json.dumps(body),
            )
            return
        await route.fulfill(status=200, content_type="application/json", body="null")

    await ctx.route("**/*.supabase.co/rest/v1/**", _supabase_rest)
    await ctx.route("**/*.supabase.co/auth/v1/**", lambda r: r.abort())
    await ctx.route("**/_serverFn/**", _mock_explain)


async def show_ai_explanation(page):
    """Open AI beside a statement; inject copy if the mocked server-fn fails."""
    ai = page.locator("button").filter(has_text=re.compile(r"^AI explanation$")).first
    if not await maybe(page, ai, 1800):
        return
    await page.wait_for_timeout(1600)
    # Prefer real mock payload; fall back to a visual inject so the video still shows the feature.
    has_copy = await page.get_by_text(MOCK_AI["classic_explanation"][:40], exact=False).count()
    if has_copy:
        return
    await page.evaluate(
        """(mock) => {
            const labels = [...document.querySelectorAll('p')].filter(
              (p) => (p.textContent || '').trim() === 'AI explanation'
            );
            const host = labels.map((p) => p.closest('div')).find(Boolean);
            if (!host) return false;
            // Keep the header row; replace the rest with demo content.
            host.innerHTML = `
              <div class="flex items-center justify-between gap-2">
                <p class="text-[10px] font-bold uppercase tracking-widest text-taupe">AI explanation</p>
              </div>
              <span class="rounded-md bg-destructive/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-destructive">Answer: FALSE</span>
              <p class="text-sm leading-relaxed text-foreground">${mock.classic_explanation}</p>
              <div class="overflow-hidden rounded-lg border border-border bg-[#fdf9f0]">
                <div class="border-b border-border/60 bg-white/60 px-3 py-1.5">
                  <span class="text-[10px] font-bold uppercase tracking-widest text-taupe">Textbook</span>
                </div>
                <div class="px-3 py-3 text-sm leading-relaxed text-foreground">${mock.textbook_context}</div>
              </div>`;
            return true;
        }""",
        MOCK_AI,
    )
    await page.wait_for_timeout(900)


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
    await install_routes(ctx)

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
        launch_kwargs = {"headless": True, "args": ["--disable-dev-shm-usage", "--no-sandbox"]}
        # Prefer full chromium if headless_shell path is broken under mixed arch.
        arm_chrome = None
        bp = Path(os.environ.get("PLAYWRIGHT_BROWSERS_PATH", ""))
        if bp.is_dir():
            for cand in bp.glob("chromium-*/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"):
                arm_chrome = cand
                break
        if arm_chrome and arm_chrome.exists():
            launch_kwargs["executable_path"] = str(arm_chrome)
        browser = await p.chromium.launch(**launch_kwargs)
        for s in subjects:
            print(f"=== recording {s} ===", flush=True)
            frames = await record_with_screencast(s, FLOWS[s], browser, rng)
            encode(s, frames)
        await browser.close()


if __name__ == "__main__":
    asyncio.run(main())
