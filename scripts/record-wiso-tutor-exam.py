#!/usr/bin/env python3
"""Re-film WiSo How-it-works Tutor Exam: Math Alle Themen→Logik→Elementare Algebra."""
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
TMP = Path("/tmp/hiw-wiso-tutor-hq")

W, H, DPR, FPS = 1710, 983, 2, 60

# Same Q1/Q2 choreography as BBE, German WiSo math terms.
HIW_INIT = """
window.__HIW_TUTOR = {
  terms: ['Distributivgesetz', 'Differenz von Quadraten'],
  modes: ['identify', 'define'],
  choiceTerms: [
    ['Nullte und negative Exponenten', 'Distributivgesetz', 'Brüche addieren', 'Summe der ersten $n$ natürlichen Zahlen'],
    ['Summe und Differenz von Kuben', 'Wurzeln als gebrochene Potenzen', 'Geometrische Reihe (endlich)', 'Differenz von Quadraten'],
  ],
};
"""


async def body_text(page) -> str:
    return await page.evaluate("() => document.body.innerText || ''")


async def prep(page):
    await page.goto(f"{BASE}/wiso/tutor-exam/math", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(2000)
    await page.get_by_text("Theorieprüfung mit Tutor Bot", exact=False).first.wait_for(
        state="visible", timeout=30000
    )
    await page.evaluate("() => { delete window.__HIW_TUTOR; }")
    await soft_click(page, page.get_by_role("button", name=re.compile(r"^Alle Themen$")), 400)
    await soft_click(page, page.get_by_role("button", name=re.compile(r"^Neu mischen$", re.I)), 400)
    print("prep Alle Themen ok", flush=True)


async def click_choice_b_distributive(page):
    a = page.get_by_text("Nullte und negative Exponenten", exact=False).first
    try:
        box = await a.bounding_box()
        if box:
            await glide(
                page,
                box["x"] + box["width"] / 2,
                box["y"] + box["height"] / 2,
                steps=30,
                duration_ms=420,
            )
            await page.wait_for_timeout(340)
    except Exception:
        pass

    choice = page.locator("ul button, li button").filter(
        has_text=re.compile(r"^Distributivgesetz$", re.I)
    ).first
    if await choice.count() == 0:
        choice = page.locator("ul button, li button").filter(
            has_text=re.compile(r"Distributivgesetz", re.I)
        ).first
    await soft_click(page, choice, 780, steps=32, move_ms=480)
    for _ in range(20):
        text = await body_text(page)
        if any(
            s in text
            for s in (
                "Auflösung",
                "AUFLÖSUNG",
                "Theorie-Check",
                "Richtig",
                "Stimmt",
                "Nächste Frage",
            )
        ):
            print("answer registered", flush=True)
            return
        await page.wait_for_timeout(120)
    raise SystemExit("answer did not register")


async def demo(page):
    await page.wait_for_timeout(1400)

    await soft_click(page, page.get_by_role("button", name=re.compile(r"^Logik$")), 560, steps=30, move_ms=450)
    await page.wait_for_timeout(650)

    await page.evaluate(HIW_INIT)
    await soft_click(
        page,
        page.get_by_role("button", name=re.compile(r"^Elementare Algebra$")),
        580,
        steps=30,
        move_ms=450,
    )
    text = await body_text(page)
    if "distributiv über die Addition" not in text or "Distributivgesetz" not in text:
        await soft_click(page, page.get_by_role("button", name=re.compile(r"^Neu mischen$", re.I)), 400)
        text = await body_text(page)
        if "distributiv über die Addition" not in text:
            raise SystemExit("HIW tutor Q1 not applied")

    await page.wait_for_timeout(380)
    await click_choice_b_distributive(page)

    await page.evaluate(
        """() => {
          document.scrollingElement?.scrollBy({ top: 160, behavior: 'smooth' });
        }"""
    )
    await page.wait_for_timeout(480)

    nxt = page.get_by_role("button", name=re.compile(r"Nächste Frage", re.I))
    await nxt.first.wait_for(state="visible", timeout=8000)
    await soft_click(page, nxt.first, 640, steps=30, move_ms=450)

    await page.wait_for_timeout(480)
    text = await body_text(page)
    if "Differenz von Quadraten" in text:
        for label in (
            r"a\s*\+\s*ar|Geometrische",
            r"\(a\s*[-−]\s*b\)|\(a-b\)|a\^\{?2\}?\s*-\s*b",
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
                        steps=28,
                        duration_ms=500,
                    )
                    await page.wait_for_timeout(420)
            except Exception:
                pass
        await page.wait_for_timeout(650)
    else:
        await page.wait_for_timeout(800)


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
        out_mp4=OUT / "wiso-tutor-exam.mp4",
        out_poster=OUT / "wiso-tutor-exam-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=10.0,
    )


if __name__ == "__main__":
    asyncio.run(main())
