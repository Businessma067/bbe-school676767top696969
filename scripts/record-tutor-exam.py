#!/usr/bin/env python3
"""Re-film How-it-works Tutor Exam: Math All→Logic→Elementary algebra walkthrough."""
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
TMP = Path("/tmp/hiw-tutor-hq")

W, H, DPR, FPS = 1710, 983, 2, 60

# Pins Q1/Q2 once Elementary algebra is selected (see buildTutorExam __HIW_TUTOR).
HIW_INIT = """
window.__HIW_TUTOR = {
  terms: ['Distributive law', 'Difference of squares'],
  modes: ['identify', 'define'],
  choiceTerms: [
    ['Zero and negative exponents', 'Distributive law', 'Adding fractions', 'Sum of first $n$ naturals'],
    ['Sum and difference of cubes', 'Roots as fractional powers', 'Geometric series (finite)', 'Difference of squares'],
  ],
};
"""


async def body_text(page) -> str:
    return await page.evaluate("() => document.body.innerText || ''")


async def prep(page):
    await page.goto(f"{BASE}/tutor-exam/math", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(2000)
    await page.get_by_text("Theory exam with Tutor Bot", exact=False).first.wait_for(
        state="visible", timeout=30000
    )
    # Keep HIW unset on All topics / Logic so those questions look organic.
    await page.evaluate("() => { delete window.__HIW_TUTOR; }")
    await soft_click(page, page.get_by_role("button", name=re.compile(r"^All topics$")), 400)
    await soft_click(page, page.get_by_role("button", name=re.compile(r"^Reshuffle$", re.I)), 400)
    print("prep All topics ok", flush=True)


async def click_choice_b_distributive(page):
    a = page.get_by_text("Zero and negative exponents", exact=False).first
    try:
        box = await a.bounding_box()
        if box:
            await glide(page, box["x"] + box["width"] / 2, box["y"] + box["height"] / 2, steps=14)
            await page.wait_for_timeout(220)
    except Exception:
        pass

    choice = page.locator("ul button, li button").filter(
        has_text=re.compile(r"^Distributive law$", re.I)
    ).first
    if await choice.count() == 0:
        choice = page.locator("ul button, li button").filter(
            has_text=re.compile(r"Distributive law", re.I)
        ).first
    await soft_click(page, choice, 580, steps=14)
    for _ in range(20):
        text = await body_text(page)
        if any(
            s in text
            for s in ("Reveal", "REVEAL", "Theory check", "Correct", "Nice recall", "Next question")
        ):
            print("answer registered", flush=True)
            return
        await page.wait_for_timeout(120)
    raise SystemExit("answer did not register")


async def demo(page):
    # Brief beat on All topics (reference opener).
    await page.wait_for_timeout(900)

    await soft_click(page, page.get_by_role("button", name=re.compile(r"^Logic$")), 420, steps=14)
    await page.wait_for_timeout(450)

    # Arm HIW pins just before Elementary algebra so Q1/Q2 match the reference.
    await page.evaluate(HIW_INIT)
    await soft_click(
        page,
        page.get_by_role("button", name=re.compile(r"^Elementary algebra$")),
        420,
        steps=14,
    )
    # Ensure HIW pins applied after section change.
    text = await body_text(page)
    if "Multiplication distributes" not in text or "Distributive law" not in text:
        await soft_click(page, page.get_by_role("button", name=re.compile(r"^Reshuffle$", re.I)), 400)
        text = await body_text(page)
        if "Multiplication distributes" not in text:
            raise SystemExit("HIW tutor Q1 not applied")

    await page.wait_for_timeout(220)
    await click_choice_b_distributive(page)

    await page.evaluate(
        """() => {
          document.scrollingElement?.scrollBy({ top: 160, behavior: 'smooth' });
        }"""
    )
    await page.wait_for_timeout(320)

    nxt = page.get_by_role("button", name=re.compile(r"Next question", re.I))
    await nxt.first.wait_for(state="visible", timeout=8000)
    await soft_click(page, nxt.first, 480, steps=14)

    await page.wait_for_timeout(320)
    text = await body_text(page)
    if "Difference of squares" in text:
        # Hover near option C then settle on D — matches reference pacing.
        for label in (
            r"a\s*\+\s*ar|geometric",
            r"\(a\s*[-−]\s*b\)|\(a-b\)",
        ):
            loc = page.locator("ul button, li button").filter(
                has_text=re.compile(label, re.I)
            ).first
            try:
                box = await loc.bounding_box()
                if box:
                    await glide(
                        page,
                        box["x"] + box["width"] * 0.55,
                        box["y"] + box["height"] / 2,
                        steps=12,
                    )
                    await page.wait_for_timeout(280)
            except Exception:
                pass
        await page.wait_for_timeout(420)
    else:
        await page.wait_for_timeout(600)


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
        out_mp4=OUT / "tutor-exam.mp4",
        out_poster=OUT / "tutor-exam-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=9.2,
    )


if __name__ == "__main__":
    asyncio.run(main())
