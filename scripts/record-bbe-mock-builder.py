#!/usr/bin/env python3
"""Film BBE Mock Builder HIW matching the user reference recording.

Choreography (one continuous pass, slow mouse + eased scroll):
  expand Ch.2 → expand Ch.3 → tick 3.3 / 3.4 / 3.5 → drag mixer →
  set 12 questions → Create → Timed start → answer Q1 → Next → mark on Q2.
"""
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

# Match the reference pace: deliberate cursor, no darting.
MOVE_MS = 920
MOVE_STEPS = 58
CLICK_PAUSE = 680


def _q(index: int, stem: str, tag: str, statements: list[str]):
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
                "isTrue": j in (0, 2),
                "explanation": "",
            }
            for j, text in enumerate(statements)
        ],
    }


HIW_MOCK = {
    "id": MOCK_ID,
    "user_id": "00000000-0000-4000-8000-000000000001",
    "subject": "economics",
    "title": "Custom Economics · 12q",
    "chapters": ["3.3", "3.4", "3.5"],
    "question_count": 12,
    "duration_minutes": 24,
    "points_total": 60,
    "created_at": "2026-09-23T08:00:00.000Z",
    "questions": [
        _q(
            1,
            "Consider how investors treat retained profit as reward for capital placed at risk. Evaluate the following economic assertions:",
            "#3.3 - Businesses can be profit-oriented or not-for-profit",
            [
                "Retained profit is a return on capital left in the firm.",
                "Owners never bear risk when profits are retained.",
                "Risk and return are linked for equity capital.",
                "Retained profit is always an external source of finance.",
                "Only new share issues can reward capital providers.",
            ],
        ),
        _q(
            2,
            "Review how not-for-profit organisations finance their activities. Evaluate the following economic assertions:",
            "#3.4 - Businesses come \"in all sizes\": large and small",
            [
                "Not-for-profits can raise funds through donations and grants.",
                "They never charge fees for any services.",
                "Surplus may be reinvested in the organisation’s purpose.",
                "Not-for-profits never generate any surplus by definition.",
                "Only for-profit firms can use bank loans.",
            ],
        ),
        _q(
            3,
            "Compare local, national and international firms. Evaluate:",
            "#3.5 - Businesses may be local, national or international",
            [
                "An international firm operates across national borders.",
                "Local firms cannot employ staff.",
                "National firms trade mainly within one country.",
                "Scale alone decides whether a firm is international.",
                "International firms never face exchange-rate risk.",
            ],
        ),
        *[
            _q(
                i,
                f"Practice case {i} on business types and scale.",
                "#3.3 - Businesses can be profit-oriented or not-for-profit",
                [
                    "Profit orientation shapes how surplus is used.",
                    "All organisations maximise shareholder dividends.",
                    "Scale and market reach can differ independently.",
                    "Not-for-profits cannot hire employees.",
                    "International reach requires a stock-market listing.",
                ],
            )
            for i in range(4, 13)
        ],
    ],
}


def _ease(t: float) -> float:
    return t * t * (3.0 - 2.0 * t)


async def smooth_scroll_by(page, dy: float, ms: int = 780):
    if abs(dy) < 6:
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
    await page.wait_for_timeout(60)


async def reveal(page, locator, pad: float = 0.4):
    """One continuous eased scroll toward the target — never jump."""
    for _ in range(6):
        box = await locator.bounding_box()
        if not box:
            await page.wait_for_timeout(80)
            continue
        mid_y = box["y"] + box["height"] / 2
        target = H * pad
        delta = mid_y - target
        if abs(delta) < 36:
            return box
        ms = max(560, min(1100, int(abs(delta) * 1.15)))
        await smooth_scroll_by(page, delta, ms=ms)
        await page.wait_for_timeout(90)
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
        await page.wait_for_timeout(220)
    await locator.click(force=True)
    await page.wait_for_timeout(pause)


async def chapter_btn(page, num: int):
    return page.locator("button").filter(has_text=re.compile(rf"Chapter {num}(?!\d)")).first


async def chapter_row(page, num: int):
    return (await chapter_btn(page, num)).locator("xpath=ancestor::li[1]")


async def open_chapter(page, num: int):
    await soft_click(page, await chapter_btn(page, num), pause=720)


async def check_subtopic(page, chapter: int, label: str):
    row = await chapter_row(page, chapter)
    item = row.locator("label").filter(has_text=re.compile(label, re.I)).first
    await soft_click(page, item, pause=560)


async def drag_weight_handle(page, dx=70, dy=-36):
    handle = page.locator("[data-weight-handle]").first
    await handle.wait_for(state="visible", timeout=10000)
    await reveal(page, handle, pad=0.48)
    box = await handle.bounding_box()
    if not box:
        raise SystemExit("no weight handle box")
    x = box["x"] + box["width"] / 2
    y = box["y"] + box["height"] / 2
    await glide(page, x, y, steps=50, duration_ms=860)
    await page.wait_for_timeout(260)
    await page.mouse.down()
    await page.wait_for_timeout(120)
    steps = 36
    for i in range(1, steps + 1):
        t = _ease(i / steps)
        await page.mouse.move(x + dx * t, y + dy * t)
        await page.wait_for_timeout(28)
    await page.wait_for_timeout(140)
    await page.mouse.up()
    await page.wait_for_timeout(480)


async def prep(page):
    await page.goto(f"{BASE}/products/custom-mock-builder", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(1600)
    await page.get_by_role("heading", name=re.compile(r"Select topics", re.I)).wait_for(
        state="visible", timeout=20000
    )
    await page.evaluate(
        """(row) => {
          window.__HIW_CUSTOM_MOCK = row;
          try { localStorage.setItem('bbe-custom-mock:' + row.id, JSON.stringify(row)); } catch (e) {}
        }""",
        HIW_MOCK,
    )
    # Drift into the chapter list in one ease (like the reference start).
    await smooth_scroll_by(page, 280, ms=900)


async def demo(page):
    await page.wait_for_timeout(580)

    # Continuous picker: open Ch.2, then Ch.3, then multi-select inside Ch.3.
    await open_chapter(page, 2)
    await page.wait_for_timeout(340)
    await open_chapter(page, 3)
    await page.wait_for_timeout(400)

    # Stay in Chapter 3 — pick 3.3 → 3.4 → 3.5 without bouncing away.
    await reveal(page, await chapter_btn(page, 3), pad=0.22)
    await page.wait_for_timeout(220)
    for label in (r"3\.3", r"3\.4", r"3\.5"):
        await check_subtopic(page, 3, label)
        await page.wait_for_timeout(200)

    await page.get_by_text("Drag the point", exact=False).first.wait_for(
        state="visible", timeout=8000
    )
    await page.wait_for_timeout(320)
    # Bias toward 3.4 (as in the reference), then ease back a little.
    await drag_weight_handle(page, dx=92, dy=28)
    await page.wait_for_timeout(280)
    await drag_weight_handle(page, dx=-40, dy=-55)
    await page.wait_for_timeout(300)

    count = page.locator("#custom-q-count")
    await soft_click(page, count, pause=420)
    await count.fill("")
    await page.wait_for_timeout(90)
    await count.type("12", delay=110)
    await page.wait_for_timeout(180)
    await count.press("Enter")
    await page.wait_for_timeout(360)

    create = page.get_by_role(
        "button", name=re.compile(r"Create Economics Mock from Full Course", re.I)
    )
    await soft_click(page, create, pause=900)

    dialog = page.get_by_role("dialog")
    await dialog.wait_for(state="visible", timeout=10000)
    await page.wait_for_timeout(420)
    # Reference used Timed — show that path.
    timed = dialog.get_by_role("button", name=re.compile(r"^Timed", re.I))
    await soft_click(page, timed, pause=1100)

    await page.get_by_text("Question 1 /", exact=False).first.wait_for(
        state="visible", timeout=20000
    )
    await page.wait_for_timeout(580)
    boxes = page.locator('button[role="checkbox"]')
    await boxes.first.wait_for(state="visible", timeout=10000)
    for i in (0, 2):
        await soft_click(page, boxes.nth(i), pause=520)
        await page.wait_for_timeout(180)

    nxt = page.get_by_role("button", name=re.compile(r"^Next$", re.I))
    await soft_click(page, nxt, pause=780)
    await page.get_by_text("Question 2 /", exact=False).first.wait_for(
        state="visible", timeout=10000
    )
    await page.get_by_text(
        "not-for-profit organisations finance", exact=False
    ).first.wait_for(state="visible", timeout=8000)
    print("on question 2", flush=True)
    await page.wait_for_timeout(700)
    # Mark one answer on Q2 so the loaded question feels active (as in the ref).
    boxes2 = page.locator('button[role="checkbox"]')
    await soft_click(page, boxes2.nth(0), pause=520)
    await page.wait_for_timeout(900)


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
    # Keep close to the ~32s reference — avoid heavy speedup that makes the mouse dart.
    encode_hiw(
        frames,
        out_mp4=OUT / "mock-builder.mp4",
        out_poster=OUT / "mock-builder-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=32.0,
    )


if __name__ == "__main__":
    asyncio.run(main())
