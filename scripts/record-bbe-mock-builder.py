#!/usr/bin/env python3
"""Film BBE Mock Builder HIW — human-like scroll, continuous mouse.

Choreography:
  open Ch.2 → open Ch.3 → tick 3.3 / 3.4 / 3.5 by mouse only →
  glide to sticky weight handle (no scroll-up) → drag mixer farther →
  smooth scroll to 12q → Create → Timed → mark Q1 → Next → mark Q2.
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


async def human_scroll_by(page, dy: float, ms: int | None = None):
    """Animate document scrollTop — real motion frames, never jump/scrollIntoView."""
    if abs(dy) < 3:
        return
    # ~1.4px/ms feels like a person dragging the scrollbar / trackpad.
    duration = int(ms if ms is not None else max(900, min(2200, abs(dy) * 1.45)))
    await page.evaluate(
        """([dy, ms]) => new Promise((res) => {
          const el = document.scrollingElement || document.documentElement;
          const start = el.scrollTop;
          const max = Math.max(0, el.scrollHeight - el.clientHeight);
          const target = Math.max(0, Math.min(max, start + dy));
          const dist = target - start;
          if (Math.abs(dist) < 1) { res(); return; }
          const t0 = performance.now();
          const ease = (t) => t * t * (3 - 2 * t);
          const step = (now) => {
            const p = Math.min(1, (now - t0) / ms);
            el.scrollTop = start + dist * ease(p);
            if (p < 1) requestAnimationFrame(step);
            else {
              el.scrollTop = target;
              res();
            }
          };
          requestAnimationFrame(step);
        })""",
        [float(dy), int(duration)],
    )
    # Let screencast pick up the last frames of the ease.
    await page.wait_for_timeout(120)


async def reveal_smooth(page, locator, pad: float = 0.48):
    """Bring target into view with animated scroll only (no teleport)."""
    for _ in range(6):
        box = await locator.bounding_box()
        if not box:
            await page.wait_for_timeout(70)
            continue
        mid_y = box["y"] + box["height"] / 2
        # Comfortable band — don't micro-adjust.
        low, high = H * (pad - 0.12), H * (pad + 0.12)
        if low <= mid_y <= high and box["y"] >= 36 and box["y"] + box["height"] <= H - 36:
            return box
        delta = mid_y - H * pad
        if abs(delta) < 24:
            return box
        await human_scroll_by(page, delta)
        await page.wait_for_timeout(80)
    return await locator.bounding_box()


async def mouse_click(
    page,
    locator,
    *,
    pause=CLICK_PAUSE,
    steps=MOVE_STEPS,
    move_ms=MOVE_MS,
    allow_scroll=False,
    pad=0.48,
):
    if allow_scroll:
        await reveal_smooth(page, locator, pad=pad)
    box = await locator.bounding_box()
    if not box:
        raise SystemExit("no box for click target")
    x = box["x"] + box["width"] / 2
    y = box["y"] + box["height"] / 2
    await glide(page, x, y, steps=steps, duration_ms=move_ms)
    await page.wait_for_timeout(90)
    # Coordinate click — never locator.click() (that scrollIntoView-teleports).
    await page.mouse.click(x, y)
    await page.wait_for_timeout(pause)


async def chapter_btn(page, num: int):
    return page.locator("button").filter(has_text=re.compile(rf"Chapter {num}(?!\d)")).first


async def chapter_row(page, num: int):
    return (await chapter_btn(page, num)).locator("xpath=ancestor::li[1]")


async def open_chapter(page, num: int):
    btn = await chapter_btn(page, num)
    await btn.wait_for(state="visible", timeout=10000)
    await mouse_click(page, btn, pause=420, allow_scroll=True, pad=0.4)


async def check_subtopic(page, chapter: int, label: str):
    row = await chapter_row(page, chapter)
    item = row.locator("label").filter(has_text=re.compile(label, re.I)).first
    await item.wait_for(state="visible", timeout=10000)
    box = await item.bounding_box()
    # If the next tick sits below the fold, ease down a little — never jump.
    if box and box["y"] + box["height"] > H - 56:
        await human_scroll_by(page, (box["y"] + box["height"] / 2) - H * 0.62)
    await mouse_click(page, item, pause=240, move_ms=440, steps=42, allow_scroll=False)


async def drag_weight_handle(page, dx=130, dy=48):
    handle = page.locator("[data-weight-handle]").first
    await handle.wait_for(state="visible", timeout=12000)
    # Sticky panel — glide only; do not scroll the page up.
    box = await handle.bounding_box()
    if not box:
        raise SystemExit("no weight handle box")
    x = box["x"] + box["width"] / 2
    y = box["y"] + box["height"] / 2
    await glide(page, x, y, steps=44, duration_ms=560)
    await page.wait_for_timeout(140)
    await page.mouse.down()
    await page.wait_for_timeout(80)
    steps = 44
    for i in range(1, steps + 1):
        t = _ease(i / steps)
        await page.mouse.move(x + dx * t, y + dy * t)
        await page.wait_for_timeout(18)
    await page.wait_for_timeout(100)
    await page.mouse.up()
    await page.wait_for_timeout(320)


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
    await human_scroll_by(page, 220, ms=1000)


async def demo(page):
    await page.wait_for_timeout(360)

    await open_chapter(page, 2)
    await page.wait_for_timeout(200)
    await open_chapter(page, 3)
    await page.wait_for_timeout(260)

    for label in (r"3\.3", r"3\.4", r"3\.5"):
        await check_subtopic(page, 3, label)
        await page.wait_for_timeout(90)

    await page.locator("[data-weight-handle]").first.wait_for(
        state="visible", timeout=12000
    )
    await page.wait_for_timeout(160)
    # Bigger mixer move so the weight shift reads clearly.
    await drag_weight_handle(page, dx=145, dy=55)
    await page.wait_for_timeout(220)

    count = page.locator("#custom-q-count")
    # Explicit human scroll down to the count field (this was the teleport).
    await reveal_smooth(page, count, pad=0.55)
    await mouse_click(page, count, pause=260, allow_scroll=False)
    # Keyboard only after focus — locator.fill/type would scrollIntoView-teleport.
    await page.keyboard.press("Control+a")
    await page.keyboard.press("Backspace")
    await page.wait_for_timeout(50)
    await page.keyboard.type("12", delay=70)
    await page.wait_for_timeout(100)
    await page.keyboard.press("Enter")
    await page.wait_for_timeout(220)

    create = page.get_by_role(
        "button", name=re.compile(r"Create Economics Mock from Full Course", re.I)
    )
    await reveal_smooth(page, create, pad=0.78)
    await mouse_click(page, create, pause=700, allow_scroll=False)

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
    # Slightly longer budget so the visible scroll ease isn't time-compressed away.
    target = min(30.0, max(24.0, span * 0.94))
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
