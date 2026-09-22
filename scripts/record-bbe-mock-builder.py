#!/usr/bin/env python3
"""Film BBE How-it-works Mock Builder: expand chapters → multi-select one chapter → mixer → exam → next."""
from __future__ import annotations

import asyncio
import re
import shutil
from pathlib import Path

from playwright.async_api import async_playwright

from hiw_capture import (
    capture_screencast,
    encode_hiw,
    glide,
    hide_chrome,
    setup_auth_context,
)

BASE = "http://127.0.0.1:8080"
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "how-it-works"
TMP = Path("/tmp/hiw-bbe-mock-builder-hq")

W, H, DPR, FPS = 1710, 983, 2, 60

MOCK_ID = "hiw-bbe-mock-builder"

# Slower defaults so compression does not make the cursor look frantic.
MOVE_MS = 780
MOVE_STEPS = 52
CLICK_PAUSE = 620


def _q(index: int, stem: str, tag: str, statements: list[str] | None = None):
    texts = statements or [
        "Scarcity means unlimited wants meet limited resources.",
        "Opportunity cost is irrelevant under scarcity.",
        "Trade-offs disappear when prices rise.",
        "Choice is forced by scarcity.",
        "Scarcity is only a temporary shortage.",
    ]
    return {
        "id": f"{MOCK_ID}-q{index}",
        "index": index,
        "subject": "economics",
        "stem": stem,
        "maxPoints": 5,
        "subtopicTag": tag,
        "statements": [
            {
                "id": f"{MOCK_ID}-q{index}-s{j + 1}",
                "text": text,
                "isTrue": j in (0, 3),
                "explanation": "",
            }
            for j, text in enumerate(texts)
        ],
    }


HIW_MOCK = {
    "id": MOCK_ID,
    "user_id": "00000000-0000-4000-8000-000000000001",
    "subject": "economics",
    "title": "Custom Economics · 12q",
    "chapters": ["2.1", "2.2", "2.3"],
    "question_count": 12,
    "duration_minutes": 24,
    "points_total": 60,
    "created_at": "2026-09-22T12:00:00.000Z",
    "questions": [
        _q(1, "A firm faces rising scarcity in its input market.", "#2.1 - Being part of the economy"),
        _q(
            2,
            "Households weigh opportunity cost when choosing how to spend Saturday.",
            "#2.2 - Scarcity of resources and opportunity cost",
            [
                "Opportunity cost is the next-best alternative given up.",
                "Scarcity disappears once prices are posted.",
                "Every choice has a trade-off under limited means.",
                "Money cost alone always equals opportunity cost.",
                "Free goods still face opportunity cost if time is scarce.",
            ],
        ),
        _q(3, "Markets coordinate decisions across buyers and sellers.", "#2.3 - Economics is the study of economic decisions"),
        *[
            _q(i, f"Practice case {i} on chapter 2 topics.", "#2.1 - Being part of the economy")
            for i in range(4, 13)
        ],
    ],
}


def _ease(t: float) -> float:
    return t * t * (3.0 - 2.0 * t)


async def smooth_scroll_by(page, dy: float, ms: int = 640):
    if abs(dy) < 8:
        return
    await page.evaluate(
        """([dy, ms]) => new Promise((res) => {
          const el = document.scrollingElement || document.documentElement;
          const start = el.scrollTop;
          const t0 = performance.now();
          const ease = (t) => t * t * (3 - 2 * t);
          (function step(now) {
            const p = Math.min(1, (now - t0) / ms);
            el.scrollTop = start + dy * ease(p);
            if (p < 1) requestAnimationFrame(step);
            else res();
          })(t0);
        })""",
        [float(dy), int(ms)],
    )
    await page.wait_for_timeout(50)


async def reveal(page, locator, pad: float = 0.42):
    for _ in range(5):
        box = await locator.bounding_box()
        if not box:
            await page.wait_for_timeout(70)
            continue
        mid_y = box["y"] + box["height"] / 2
        target = H * pad
        delta = mid_y - target
        if abs(delta) < 40:
            return box
        ms = max(480, min(900, int(abs(delta) * 1.05)))
        await smooth_scroll_by(page, delta, ms=ms)
        await page.wait_for_timeout(100)
    return await locator.bounding_box()


async def soft_click(page, locator, pause=CLICK_PAUSE, steps=MOVE_STEPS, move_ms=MOVE_MS):
    await reveal(page, locator)
    box = await locator.bounding_box()
    if box:
        await glide(
            page,
            box["x"] + box["width"] / 2,
            box["y"] + box["height"] / 2,
            steps=steps,
            duration_ms=move_ms,
        )
        await page.wait_for_timeout(200)
    await locator.click(force=True)
    await page.wait_for_timeout(pause)


async def chapter_btn(page, num: int):
    return page.locator("button").filter(has_text=re.compile(rf"Chapter {num}(?!\d)")).first


async def chapter_row(page, num: int):
    return (await chapter_btn(page, num)).locator("xpath=ancestor::li[1]")


async def open_chapter(page, num: int):
    await soft_click(page, await chapter_btn(page, num), pause=540)


async def check_subtopic(page, chapter: int, label: str):
    row = await chapter_row(page, chapter)
    item = row.locator("label").filter(has_text=re.compile(label, re.I)).first
    await soft_click(page, item, pause=520)


async def drag_weight_handle(page, dx=70, dy=-36):
    handle = page.locator("[data-weight-handle]").first
    await handle.wait_for(state="visible", timeout=10000)
    await reveal(page, handle, pad=0.5)
    box = await handle.bounding_box()
    if not box:
        raise SystemExit("no weight handle box")
    x = box["x"] + box["width"] / 2
    y = box["y"] + box["height"] / 2
    await glide(page, x, y, steps=44, duration_ms=700)
    await page.wait_for_timeout(220)
    await page.mouse.down()
    await page.wait_for_timeout(100)
    steps = 32
    for i in range(1, steps + 1):
        t = _ease(i / steps)
        await page.mouse.move(x + dx * t, y + dy * t)
        await page.wait_for_timeout(26)
    await page.wait_for_timeout(120)
    await page.mouse.up()
    await page.wait_for_timeout(420)


async def prep(page):
    await page.goto(f"{BASE}/products/custom-mock-builder", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(1500)
    await page.get_by_role("heading", name="Select topics & subtopics").wait_for(
        state="visible", timeout=20000
    )
    await page.evaluate(
        """(row) => {
          window.__HIW_CUSTOM_MOCK = row;
          try { localStorage.setItem('bbe-custom-mock:' + row.id, JSON.stringify(row)); } catch (e) {}
        }""",
        HIW_MOCK,
    )
    await smooth_scroll_by(page, 240, ms=700)


async def demo(page):
    await page.wait_for_timeout(500)

    # One continuous pass: expand a few chapters, then multi-select inside Chapter 2.
    await open_chapter(page, 2)
    await page.wait_for_timeout(280)
    await open_chapter(page, 4)
    await page.wait_for_timeout(280)
    await open_chapter(page, 5)
    await page.wait_for_timeout(360)

    # Stay in Chapter 2 and pick several topics (no collapse / bounce back up).
    await reveal(page, await chapter_btn(page, 2), pad=0.28)
    await page.wait_for_timeout(200)
    for label in (r"2\.1", r"2\.2", r"2\.3"):
        await check_subtopic(page, 2, label)
        await page.wait_for_timeout(180)

    await page.get_by_text("Drag the point", exact=False).first.wait_for(
        state="visible", timeout=8000
    )
    await page.wait_for_timeout(280)
    await drag_weight_handle(page, dx=86, dy=-48)
    await page.wait_for_timeout(320)

    count = page.locator("#custom-q-count")
    await soft_click(page, count, pause=400)
    await count.fill("")
    await page.wait_for_timeout(80)
    await count.type("12", delay=95)
    await page.wait_for_timeout(160)
    await count.press("Enter")
    await page.wait_for_timeout(320)

    create = page.get_by_role(
        "button", name=re.compile(r"Create Economics Mock from Full Course", re.I)
    )
    await soft_click(page, create, pause=780)

    dialog = page.get_by_role("dialog")
    await dialog.wait_for(state="visible", timeout=10000)
    await page.wait_for_timeout(380)
    untimed = dialog.get_by_role("button", name=re.compile(r"Untimed practice", re.I))
    await soft_click(page, untimed, pause=980)

    await page.get_by_text("Question 1 /", exact=False).first.wait_for(
        state="visible", timeout=20000
    )
    await page.wait_for_timeout(520)
    boxes = page.locator('button[role="checkbox"]')
    await boxes.first.wait_for(state="visible", timeout=10000)
    for i in (0, 3):
        await soft_click(page, boxes.nth(i), pause=480)
        await page.wait_for_timeout(160)

    # Show the next question loading in clearly.
    nxt = page.get_by_role("button", name=re.compile(r"^Next$", re.I))
    await soft_click(page, nxt, pause=720)
    await page.get_by_text("Question 2 /", exact=False).first.wait_for(
        state="visible", timeout=10000
    )
    await page.get_by_text(
        "Households weigh opportunity cost when choosing how to spend Saturday",
        exact=False,
    ).first.wait_for(state="visible", timeout=8000)
    print("on question 2", flush=True)
    # Let the new stem sit on screen so the handoff is obvious.
    await page.wait_for_timeout(1600)
    # Light scroll over the new statements so loading feels alive.
    await smooth_scroll_by(page, 120, ms=700)
    await page.wait_for_timeout(700)


async def main():
    if TMP.exists():
        shutil.rmtree(TMP)
    TMP.mkdir(parents=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=["--disable-dev-shm-usage", "--font-render-hinting=none"],
        )
        ctx = await browser.new_context(
            viewport={"width": W, "height": H},
            device_scale_factor=DPR,
        )
        await setup_auth_context(ctx)
        page = await ctx.new_page()
        page.set_default_timeout(60000)
        print("=== prep ===", flush=True)
        await prep(page)
        print("=== record ===", flush=True)
        frames = await capture_screencast(page, ctx, demo, TMP / "frames", W, H, DPR)
        await ctx.close()
        await browser.close()

    span = frames[-1][1] - frames[0][1]
    print(f"captured {len(frames)} frames, span={span:.2f}s")
    # Keep playback close to real timing — only trim if clearly over budget.
    encode_hiw(
        frames,
        out_mp4=OUT / "mock-builder.mp4",
        out_poster=OUT / "mock-builder-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=30.0,
    )


if __name__ == "__main__":
    asyncio.run(main())
