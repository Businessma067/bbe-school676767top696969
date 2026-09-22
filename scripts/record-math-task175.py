#!/usr/bin/env python3
"""Re-film How-it-works Math: Ch.11 Task 175 — scroll the SOLUTION panel, not the question."""
from __future__ import annotations

import asyncio
import json
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
TMP = Path("/tmp/hiw-math-hq")

# Match English sharpness: CSS 1710×983 @2× → 3420×1966
W, H, DPR, FPS = 1710, 983, 2, 60

PROGRESS = {
    "passed": [],
    "revision": ["math-11-5", "math-11-10", "math-11-13", "math-11-16"],
}


async def prep(page):
    await page.goto(f"{BASE}/products/full-course-math", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(3500)

    ch = page.locator("button").filter(
        has_text=re.compile(r"Differentiation and single-variable optimization", re.I)
    ).first
    await soft_click(page, ch, 2200)
    practice = page.locator("button").filter(has_text=re.compile(r"^Practice$"))
    if await practice.count():
        await soft_click(page, practice.first, 1400)

    exam = page.locator("button").filter(has_text=re.compile(r"Exam-Style", re.I)).first
    await soft_click(page, exam, 2200)

    clicked = await page.evaluate(
        """() => {
          const exam = [...document.querySelectorAll('button')]
            .find(b => /Exam-Style/i.test(b.textContent || ''));
          const root = exam?.closest('li');
          if (!root) return 'no-root';
          // Prefer the Podcast studio task by title text in the row, else Task 15.
          const byTitle = [...root.querySelectorAll('button')]
            .find(b => /Podcast studio/i.test(b.textContent || ''));
          const task = byTitle || [...root.querySelectorAll('button')]
            .find(b => /^\\s*Task 15\\b/.test(b.textContent || ''));
          if (!task) return 'no-task';
          task.scrollIntoView({ block: 'center' });
          task.click();
          return byTitle ? 'ok-title' : 'ok-task15';
        }"""
    )
    print(f"open Podcast in Exam-Style: {clicked}", flush=True)
    if not str(clicked).startswith("ok"):
        for _ in range(80):
            hit = await page.evaluate(
                """() => {
                  const t = [...document.querySelectorAll('button')]
                    .find(b => /Podcast studio/i.test(b.textContent || '')
                      || (b.textContent || '').trim() === 'Task 176');
                  if (!t) {
                    const nodes = [...document.querySelectorAll('button')]
                      .filter(b => /^Task \\d+/.test((b.textContent || '').trim()));
                    nodes.at(-1)?.scrollIntoView({ block: 'end' });
                    return false;
                  }
                  t.scrollIntoView({ block: 'center' });
                  t.click();
                  return true;
                }"""
            )
            if hit:
                break
            await page.wait_for_timeout(200)
        else:
            raise SystemExit("Could not open Podcast studio task")

    await page.get_by_text(
        "Podcast studio", exact=False
    ).first.wait_for(state="visible", timeout=30000)
    await page.wait_for_timeout(800)


async def demo(page):
    await page.wait_for_timeout(200)
    await page.evaluate(
        """() => {
          const btn = [...document.querySelectorAll('button')]
            .find(b => /Check Answers/i.test(b.textContent || ''));
          btn?.scrollIntoView({ block: 'end' });
        }"""
    )
    await page.wait_for_timeout(140)

    boxes = page.locator('button[role="checkbox"]:not([disabled])')
    await boxes.first.wait_for(state="visible", timeout=20000)
    for i in (0, 1, 3):  # A, B, D — answer key T,T,F,T,F
        await soft_click(page, boxes.nth(i), 200, steps=12)

    await page.wait_for_timeout(120)
    await soft_click(
        page,
        page.locator("button").filter(has_text=re.compile(r"Check Answers", re.I)).first,
        480,
        steps=14,
    )

    if not await open_solution_panel(page):
        raise SystemExit("solution panel did not open")
    await page.wait_for_timeout(200)

    ok = await scroll_solution(page, ms=5200)
    print(f"scrolled solution panel: {ok}", flush=True)
    if not ok:
        raise SystemExit("failed to scroll solution panel")
    await page.wait_for_timeout(320)


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
        await setup_auth_context(
            ctx,
            extra_local={"bbe.math.progress.v1": json.dumps(PROGRESS)},
        )
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
        out_mp4=OUT / "math.mp4",
        out_poster=OUT / "math-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=9.4,
    )


if __name__ == "__main__":
    asyncio.run(main())
