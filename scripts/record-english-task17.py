#!/usr/bin/env python3
"""Re-film How-it-works English: Vocabulary → Confusable Pairs → Task 17."""
from __future__ import annotations

import asyncio
import re
import shutil
from pathlib import Path

from playwright.async_api import async_playwright

from hiw_capture import (
    capture_screencast,
    encode_hiw,
    hide_chrome,
    open_solution_panel,
    scroll_solution,
    setup_auth_context,
    soft_click,
)

BASE = "http://127.0.0.1:8080"
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "how-it-works"
TMP = Path("/tmp/hiw-english-hq")

# High-res capture matching prior English clip sharpness
W, H, DPR, FPS = 1710, 983, 2, 60


async def prep(page):
    await page.goto(f"{BASE}/products/full-course-english", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(3500)

    # Open Vocabulary chapter
    vocab = page.locator("button").filter(has_text=re.compile(r"Vocabulary", re.I)).first
    await soft_click(page, vocab, 1600)

    # Expand Confusable Pairs subsection
    pairs = page.locator("button").filter(has_text=re.compile(r"Confusable Pairs", re.I)).first
    await soft_click(page, pairs, 1400)

    opened = False
    for _ in range(80):
        hit = await page.evaluate(
            """() => {
              // Prefer Task 17 under the Confusable Pairs block if possible
              const buttons = [...document.querySelectorAll('button')];
              const t = buttons.find(b => /^\\s*Task 17\\b/.test((b.textContent || '').trim()));
              if (!t) {
                const scroller = document.querySelector('.practice-scroll');
                if (scroller) scroller.scrollTop += 180;
                return false;
              }
              t.scrollIntoView({ block: 'center' });
              t.click();
              return true;
            }"""
        )
        if hit:
            opened = True
            break
        await page.wait_for_timeout(150)
    if not opened:
        raise SystemExit("Could not open Task 17")

    await page.get_by_text(re.compile(r"TASK\s*17", re.I)).first.wait_for(
        state="visible", timeout=20000
    )
    # Confirm confusable / vocabulary content
    await page.get_by_text("precise word choice", exact=False).first.wait_for(
        state="visible", timeout=15000
    )
    await page.evaluate(
        """() => {
          const btn = [...document.querySelectorAll('button')]
            .find(b => /Check Answers/i.test(b.textContent || ''));
          btn?.scrollIntoView({ block: 'end' });
        }"""
    )
    await page.wait_for_timeout(700)


async def demo(page):
    await page.wait_for_timeout(450)
    boxes = page.locator('button[role="checkbox"]:not([disabled])')
    await boxes.first.wait_for(state="visible", timeout=20000)
    # Answer key [T,F,F,F,T] — check A and E (same spirit as prior clip)
    for i in (0, 4):
        await soft_click(page, boxes.nth(i), 520)

    await page.wait_for_timeout(320)
    await soft_click(
        page,
        page.locator("button").filter(has_text=re.compile(r"Check Answers", re.I)).first,
        1000,
    )

    # Submit auto-opens for non-Texts; ensure panel, then explicit Explanation if needed
    if not await open_solution_panel(page):
        raise SystemExit("solution panel did not open")
    await page.wait_for_timeout(450)

    ok = await scroll_solution(page, ms=6200)
    print(f"scrolled solution: {ok}", flush=True)
    await page.wait_for_timeout(1100)


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
        out_mp4=OUT / "english.mp4",
        out_poster=OUT / "english-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=10.5,
    )


if __name__ == "__main__":
    asyncio.run(main())
