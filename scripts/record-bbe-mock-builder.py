#!/usr/bin/env python3
"""Film BBE Mock Builder HIW — continuous mouse, scrollbar-like scroll.

Choreography:
  open Ch.2 → open Ch.3 → tick 3.3 / 3.4 / 3.5 by mouse only →
  glide to sticky weight handle (no scroll-up) → nudge mixer →
  set 12q → Create → Timed → mark Q1 fast/smooth → Next → mark Q2.
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

# Retina capture so high-res playback stays sharp.
W, H, DPR, FPS = 1710, 983, 2, 60

MOCK_ID = "hiw-bbe-mock-builder"

# Dense, smooth cursor — short enough that encode barely compresses.
MOVE_MS = 520
MOVE_STEPS = 48
CLICK_PAUSE = 280
FAST_MOVE_MS = 380
FAST_STEPS = 40
FAST_PAUSE = 160


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


async def wheel_scroll_by(page, dy: float, ms: int = 900):
    """Scrollbar-like page scroll via many small wheel ticks (captures well on screencast)."""
    if abs(dy) < 4:
        return
    # Dense ticks (~60Hz) so encode keeps temporal detail instead of looking ~15 FPS.
    ticks = max(36, min(96, int(abs(dy) / 8)))
    delay = max(10, int(ms / ticks))
    for i in range(1, ticks + 1):
        t0 = (i - 1) / ticks
        t1 = i / ticks
        step = dy * (_ease(t1) - _ease(t0))
        await page.mouse.wheel(0, step)
        await page.wait_for_timeout(delay)
    await page.wait_for_timeout(40)


async def reveal_if_needed(page, locator, pad: float = 0.42):
    """Only scroll when the target is off-screen — never bounce an already-visible control."""
    for _ in range(5):
        box = await locator.bounding_box()
        if not box:
            await page.wait_for_timeout(60)
            continue
        top = box["y"]
        bot = box["y"] + box["height"]
        # Fully / mostly visible → leave scroll alone.
        if top >= 40 and bot <= H - 40:
            return box
        mid_y = box["y"] + box["height"] / 2
        delta = mid_y - H * pad
        if abs(delta) < 28:
            return box
        ms = max(700, min(1400, int(abs(delta) * 1.35)))
        await wheel_scroll_by(page, delta, ms=ms)
        await page.wait_for_timeout(70)
    return await locator.bounding_box()


async def mouse_click(
    page,
    locator,
    *,
    pause=CLICK_PAUSE,
    steps=MOVE_STEPS,
    move_ms=MOVE_MS,
    allow_scroll=False,
    pad=0.42,
):
    if allow_scroll:
        await reveal_if_needed(page, locator, pad=pad)
    box = await locator.bounding_box()
    if not box:
        raise SystemExit(f"no box for click target")
    await glide(
        page,
        box["x"] + box["width"] / 2,
        box["y"] + box["height"] / 2,
        steps=steps,
        duration_ms=move_ms,
    )
    await page.wait_for_timeout(90)
    await locator.click(force=True)
    await page.wait_for_timeout(pause)


async def chapter_btn(page, num: int):
    return page.locator("button").filter(has_text=re.compile(rf"Chapter {num}(?!\d)")).first


async def chapter_row(page, num: int):
    return (await chapter_btn(page, num)).locator("xpath=ancestor::li[1]")


async def open_chapter(page, num: int):
    # Chapters stay in view after the initial settle — mouse only.
    await mouse_click(page, await chapter_btn(page, num), pause=420)


async def check_subtopic(page, chapter: int, label: str):
    row = await chapter_row(page, chapter)
    item = row.locator("label").filter(has_text=re.compile(label, re.I)).first
    # Mouse glide between checkboxes — do not scroll the page down.
    await mouse_click(page, item, pause=240, move_ms=440, steps=42, allow_scroll=False)


async def drag_weight_handle(page, dx=64, dy=-28):
    handle = page.locator("[data-weight-handle]").first
    await handle.wait_for(state="visible", timeout=10000)
    # Sticky panel on the right — NEVER reveal/scroll; that was the wasted “go up”.
    box = await handle.bounding_box()
    if not box:
        raise SystemExit("no weight handle box")
    x = box["x"] + box["width"] / 2
    y = box["y"] + box["height"] / 2
    await glide(page, x, y, steps=44, duration_ms=560)
    await page.wait_for_timeout(140)
    await page.mouse.down()
    await page.wait_for_timeout(70)
    steps = 32
    for i in range(1, steps + 1):
        t = _ease(i / steps)
        await page.mouse.move(x + dx * t, y + dy * t)
        await page.wait_for_timeout(16)
    await page.wait_for_timeout(80)
    await page.mouse.up()
    await page.wait_for_timeout(280)


async def prep(page):
    await page.goto(f"{BASE}/products/custom-mock-builder", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(1400)
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
    # Gentle settle into the picker — one scrollbar-like nudge.
    await wheel_scroll_by(page, 220, ms=780)


async def demo(page):
    await page.wait_for_timeout(360)

    await open_chapter(page, 2)
    await page.wait_for_timeout(200)
    await open_chapter(page, 3)
    await page.wait_for_timeout(260)

    # Pick 3.3 → 3.4 → 3.5 with the mouse only (no page scroll between ticks).
    for label in (r"3\.3", r"3\.4", r"3\.5"):
        await check_subtopic(page, 3, label)
        await page.wait_for_timeout(90)

    await page.get_by_text("Drag the point", exact=False).first.wait_for(
        state="visible", timeout=8000
    )
    await page.wait_for_timeout(160)
    # Straight to the sticky diagram — nudge once, no scroll-up detour.
    await drag_weight_handle(page, dx=78, dy=22)
    await page.wait_for_timeout(200)

    count = page.locator("#custom-q-count")
    await mouse_click(page, count, pause=260, allow_scroll=True, pad=0.55)
    await count.fill("")
    await page.wait_for_timeout(50)
    await count.type("12", delay=70)
    await page.wait_for_timeout(100)
    await count.press("Enter")
    await page.wait_for_timeout(220)

    create = page.get_by_role(
        "button", name=re.compile(r"Create Economics Mock from Full Course", re.I)
    )
    await mouse_click(page, create, pause=700, allow_scroll=True, pad=0.72)

    dialog = page.get_by_role("dialog")
    await dialog.wait_for(state="visible", timeout=10000)
    await page.wait_for_timeout(260)
    timed = dialog.get_by_role("button", name=re.compile(r"^Timed", re.I))
    await mouse_click(page, timed, pause=780)

    await page.get_by_text("Question 1 /", exact=False).first.wait_for(
        state="visible", timeout=20000
    )
    await page.wait_for_timeout(320)
    boxes = page.locator('button[role="checkbox"]')
    await boxes.first.wait_for(state="visible", timeout=10000)
    # Faster answering, still continuous glide.
    for i in (0, 2):
        await mouse_click(
            page,
            boxes.nth(i),
            pause=FAST_PAUSE,
            move_ms=FAST_MOVE_MS,
            steps=FAST_STEPS,
            allow_scroll=True,
            pad=0.45,
        )

    nxt = page.get_by_role("button", name=re.compile(r"^Next$", re.I))
    await mouse_click(
        page, nxt, pause=480, move_ms=FAST_MOVE_MS, steps=FAST_STEPS, allow_scroll=True, pad=0.7
    )
    await page.get_by_text("Question 2 /", exact=False).first.wait_for(
        state="visible", timeout=10000
    )
    await page.get_by_text(
        "not-for-profit organisations finance", exact=False
    ).first.wait_for(state="visible", timeout=8000)
    print("on question 2", flush=True)
    await page.wait_for_timeout(280)
    boxes2 = page.locator('button[role="checkbox"]')
    await mouse_click(
        page,
        boxes2.nth(0),
        pause=FAST_PAUSE,
        move_ms=FAST_MOVE_MS,
        steps=FAST_STEPS,
        allow_scroll=True,
        pad=0.45,
    )
    await page.wait_for_timeout(520)


async def main():
    if TMP.exists():
        shutil.rmtree(TMP)
    TMP.mkdir(parents=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=[
                "--disable-dev-shm-usage",
                "--font-render-hinting=none",
                "--force-device-scale-factor=2",
            ],
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
    # Keep near natural length so setpts doesn't drop temporal resolution to ~15 FPS.
    target = min(28.0, max(22.0, span * 0.92))
    encode_hiw(
        frames,
        out_mp4=OUT / "mock-builder.mp4",
        out_poster=OUT / "mock-builder-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=target,
    )


if __name__ == "__main__":
    asyncio.run(main())
