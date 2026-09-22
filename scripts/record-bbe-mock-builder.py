#!/usr/bin/env python3
"""Film BBE How-it-works Mock Builder: pick topics → mixer → build → start → answer Q1."""
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
    soft_click,
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
        *[_q(i, f"Practice case {i} on the selected topics.", "#2.1 - Being part of the economy") for i in range(4, 13)],
    ],
}


async def chapter_row(page, num: int):
    # Prefer the expandable chapter header button, then its enclosing <li>.
    btn = page.locator("button").filter(has_text=re.compile(rf"Chapter {num}(?!\d)")).first
    return btn.locator("xpath=ancestor::li[1]")


async def open_chapter(page, num: int):
    btn = page.locator("button").filter(has_text=re.compile(rf"Chapter {num}(?!\d)")).first
    await soft_click(page, btn, 380, steps=24, move_ms=320)


async def check_subtopic(page, chapter: int, label: str):
    row = await chapter_row(page, chapter)
    item = row.locator("label").filter(has_text=re.compile(label, re.I)).first
    await soft_click(page, item, 280, steps=22, move_ms=280)


async def drag_weight_handle(page, dx=70, dy=-36):
    handle = page.locator("[data-weight-handle]").first
    await handle.wait_for(state="visible", timeout=10000)
    box = await handle.bounding_box()
    if not box:
        raise SystemExit("no weight handle box")
    x = box["x"] + box["width"] / 2
    y = box["y"] + box["height"] / 2
    await glide(page, x, y, steps=26, duration_ms=360)
    await page.wait_for_timeout(120)
    await page.mouse.down()
    steps = 18
    for i in range(1, steps + 1):
        t = i / steps
        e = t * t * (3 - 2 * t)
        await page.mouse.move(x + dx * e, y + dy * e)
        await page.wait_for_timeout(18)
    await page.mouse.up()
    await page.wait_for_timeout(280)


async def prep(page):
    await page.goto(f"{BASE}/products/custom-mock-builder", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(1800)
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


async def demo(page):
    await page.wait_for_timeout(500)

    # Open a few chapters and pick topics (enough for the mixer polygon).
    await open_chapter(page, 2)
    await check_subtopic(page, 2, r"2\.1")
    await open_chapter(page, 4)
    await check_subtopic(page, 4, r"4\.1")
    await open_chapter(page, 5)
    await check_subtopic(page, 5, r"5\.1")

    await page.get_by_text("Drag the point", exact=False).first.wait_for(
        state="visible", timeout=8000
    )
    await drag_weight_handle(page, dx=78, dy=-42)
    await page.wait_for_timeout(220)
    await drag_weight_handle(page, dx=-48, dy=28)

    # Bump question count a bit ("add several questions").
    count = page.locator("#custom-q-count")
    await soft_click(page, count, 200, steps=20, move_ms=260)
    await count.fill("12")
    await count.press("Enter")
    await page.wait_for_timeout(280)

    create = page.get_by_role(
        "button", name=re.compile(r"Create Economics Mock from Full Course", re.I)
    )
    await soft_click(page, create, 700, steps=28, move_ms=400)

    dialog = page.get_by_role("dialog")
    await dialog.wait_for(state="visible", timeout=10000)
    untimed = dialog.get_by_role("button", name=re.compile(r"Untimed practice", re.I))
    await soft_click(page, untimed, 900, steps=28, move_ms=380)

    # First question: mark a couple of True answers.
    await page.get_by_text("Question 1 /", exact=False).first.wait_for(
        state="visible", timeout=20000
    )
    await page.wait_for_timeout(350)
    boxes = page.locator('button[role="checkbox"]')
    await boxes.first.wait_for(state="visible", timeout=10000)
    for i in (0, 3):
        await soft_click(page, boxes.nth(i), 280, steps=22, move_ms=280)
    await page.wait_for_timeout(420)


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

    print(f"captured {len(frames)} frames, span={frames[-1][1] - frames[0][1]:.2f}s")
    encode_hiw(
        frames,
        out_mp4=OUT / "mock-builder.mp4",
        out_poster=OUT / "mock-builder-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=12.0,
    )


if __name__ == "__main__":
    asyncio.run(main())
