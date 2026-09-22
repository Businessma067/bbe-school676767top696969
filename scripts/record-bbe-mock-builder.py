#!/usr/bin/env python3
"""Film BBE How-it-works Mock Builder: pick topics → mixer → build → start → answer → next."""
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


def _q(index: int, stem: str, tag: str):
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
            for j, text in enumerate(
                [
                    "Scarcity means unlimited wants meet limited resources.",
                    "Opportunity cost is irrelevant under scarcity.",
                    "Trade-offs disappear when prices rise.",
                    "Choice is forced by scarcity.",
                    "Scarcity is only a temporary shortage.",
                ]
            )
        ],
    }


HIW_MOCK = {
    "id": MOCK_ID,
    "user_id": "00000000-0000-4000-8000-000000000001",
    "subject": "economics",
    "title": "Custom Economics · 12q",
    "chapters": ["2.1", "4.1", "5.1"],
    "question_count": 12,
    "duration_minutes": 24,
    "points_total": 60,
    "created_at": "2026-09-22T12:00:00.000Z",
    "questions": [
        _q(1, "A firm faces rising scarcity in its input market.", "#2.1 - Being part of the economy"),
        _q(2, "Demand rises after a successful campaign.", "#5.1 - What a product is"),
        _q(3, "A partnership raises capital for expansion.", "#4.1 - Sole proprietorship / sole traders"),
        *[
            _q(i, f"Practice case {i} on the selected topics.", "#2.1 - Being part of the economy")
            for i in range(4, 13)
        ],
    ],
}


def _ease(t: float) -> float:
    return t * t * (3.0 - 2.0 * t)


async def smooth_scroll_by(page, dy: float, ms: int = 520):
    """Animate document scrollTop — feels like a real scroll, no jump."""
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
    await page.wait_for_timeout(40)


async def reveal(page, locator, pad: float = 0.45):
    """Bring locator into view with one smooth scroll — never scrollIntoView jump."""
    for _ in range(4):
        box = await locator.bounding_box()
        if not box:
            await page.wait_for_timeout(60)
            continue
        mid_y = box["y"] + box["height"] / 2
        target = H * pad
        delta = mid_y - target
        if abs(delta) < 48:
            return box
        ms = max(380, min(720, int(abs(delta) * 0.85)))
        await smooth_scroll_by(page, delta, ms=ms)
        await page.wait_for_timeout(80)
    return await locator.bounding_box()


async def soft_click(page, locator, pause=480, steps=38, move_ms=520):
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
        await page.wait_for_timeout(150)
    await locator.click(force=True)
    await page.wait_for_timeout(pause)


async def chapter_btn(page, num: int):
    return page.locator("button").filter(has_text=re.compile(rf"Chapter {num}(?!\d)")).first


async def chapter_row(page, num: int):
    return (await chapter_btn(page, num)).locator("xpath=ancestor::li[1]")


async def open_chapter(page, num: int):
    await soft_click(page, await chapter_btn(page, num), 420, steps=34, move_ms=480)


async def close_chapter(page, num: int):
    # Collapse after picking so the page stays short and scrolls stay small.
    row = await chapter_row(page, num)
    if await row.locator("input[type=checkbox]").count() == 0:
        return
    await soft_click(page, await chapter_btn(page, num), 320, steps=28, move_ms=400)


async def check_subtopic(page, chapter: int, label: str):
    row = await chapter_row(page, chapter)
    item = row.locator("label").filter(has_text=re.compile(label, re.I)).first
    await soft_click(page, item, 380, steps=32, move_ms=460)


async def drag_weight_handle(page, dx=70, dy=-36):
    handle = page.locator("[data-weight-handle]").first
    await handle.wait_for(state="visible", timeout=10000)
    await reveal(page, handle, pad=0.5)
    box = await handle.bounding_box()
    if not box:
        raise SystemExit("no weight handle box")
    x = box["x"] + box["width"] / 2
    y = box["y"] + box["height"] / 2
    await glide(page, x, y, steps=34, duration_ms=480)
    await page.wait_for_timeout(160)
    await page.mouse.down()
    await page.wait_for_timeout(70)
    steps = 24
    for i in range(1, steps + 1):
        t = _ease(i / steps)
        await page.mouse.move(x + dx * t, y + dy * t)
        await page.wait_for_timeout(20)
    await page.wait_for_timeout(80)
    await page.mouse.up()
    await page.wait_for_timeout(300)


async def prep(page):
    await page.goto(f"{BASE}/products/custom-mock-builder", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(1400)
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
    # Ease into the picker instead of starting at the hero.
    await smooth_scroll_by(page, 260, ms=560)


async def demo(page):
    await page.wait_for_timeout(480)

    await open_chapter(page, 2)
    await check_subtopic(page, 2, r"2\.1")
    await close_chapter(page, 2)

    await open_chapter(page, 4)
    await check_subtopic(page, 4, r"4\.1")
    await close_chapter(page, 4)

    await open_chapter(page, 5)
    await check_subtopic(page, 5, r"5\.1")
    await close_chapter(page, 5)
    await page.wait_for_timeout(240)

    await page.get_by_text("Drag the point", exact=False).first.wait_for(
        state="visible", timeout=8000
    )
    await drag_weight_handle(page, dx=78, dy=-44)
    await page.wait_for_timeout(220)
    await drag_weight_handle(page, dx=-48, dy=30)
    await page.wait_for_timeout(220)

    count = page.locator("#custom-q-count")
    await soft_click(page, count, 280, steps=30, move_ms=440)
    await count.fill("")
    await page.wait_for_timeout(80)
    await count.type("12", delay=70)
    await page.wait_for_timeout(140)
    await count.press("Enter")
    await page.wait_for_timeout(260)

    create = page.get_by_role(
        "button", name=re.compile(r"Create Economics Mock from Full Course", re.I)
    )
    await soft_click(page, create, 720, steps=36, move_ms=520)

    dialog = page.get_by_role("dialog")
    await dialog.wait_for(state="visible", timeout=10000)
    await page.wait_for_timeout(300)
    untimed = dialog.get_by_role("button", name=re.compile(r"Untimed practice", re.I))
    await soft_click(page, untimed, 900, steps=34, move_ms=480)

    await page.get_by_text("Question 1 /", exact=False).first.wait_for(
        state="visible", timeout=20000
    )
    await page.wait_for_timeout(420)
    boxes = page.locator('button[role="checkbox"]')
    await boxes.first.wait_for(state="visible", timeout=10000)
    for i in (0, 3):
        await soft_click(page, boxes.nth(i), 340, steps=32, move_ms=440)
        await page.wait_for_timeout(120)

    # Show the handoff to the next question (no teleport).
    nxt = page.get_by_role("button", name=re.compile(r"^Next$", re.I))
    await soft_click(page, nxt, 640, steps=36, move_ms=500)
    await page.get_by_text("Question 2 /", exact=False).first.wait_for(
        state="visible", timeout=10000
    )
    await page.wait_for_timeout(580)


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
    # Mild compress only — heavy speedup makes motion look abrupt again.
    encode_hiw(
        frames,
        out_mp4=OUT / "mock-builder.mp4",
        out_poster=OUT / "mock-builder-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=16.0,
    )


if __name__ == "__main__":
    asyncio.run(main())
