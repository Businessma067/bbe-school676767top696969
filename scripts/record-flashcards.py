#!/usr/bin/env python3
"""Re-film How-it-works Flashcards: English Meanings→Synonyms walkthrough."""
from __future__ import annotations

import asyncio
import shutil
from pathlib import Path

from playwright.async_api import async_playwright

from hiw_capture import (
    capture_screencast,
    encode_hiw,
    hide_chrome,
    setup_auth_context,
    soft_click,
)

BASE = "http://127.0.0.1:8080"
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "how-it-works"
TMP = Path("/tmp/hiw-flashcards-hq")

W, H, DPR, FPS = 1710, 983, 2, 60

# Pins next cards after Know / Don't know (see FlashcardSubjectView __HIW_FLASH_NEXT).
HIW_INIT = """
window.__HIW_FLASH_NEXT = ['enable', 'inelastic'];
"""


async def card_term(page) -> str:
    return await page.evaluate(
        """() => {
          const card = document.querySelector('[aria-label*="Flashcard term"], [aria-label*="Flashcard explanation"]');
          if (!card) return '';
          const t = (card.innerText || '').split('\\n').map(s => s.trim()).filter(Boolean);
          const skip = /^(WORD|MEANING|SYNONYMS|ANTONYMS|Tap to flip)/i;
          for (const line of t) {
            if (!skip.test(line) && line.length < 80) return line;
          }
          return t.find(l => !skip.test(l)) || '';
        }"""
    )


async def prep(page):
    await page.goto(f"{BASE}/flashcards/english", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(2200)
    await page.evaluate(
        """() => {
          localStorage.removeItem('bbe-flashcard-progress:english');
          window.__HIW_FLASH_NEXT = ['enable', 'inelastic'];
        }"""
    )
    reset = page.get_by_role("button", name="Reset progress")
    if await reset.count():
        await soft_click(page, reset, 500)
    await soft_click(page, page.get_by_role("button", name="2. Meanings"), 500)
    for _ in range(8):
        term = await card_term(page)
        if "amortisation" in term.lower():
            break
        await page.wait_for_timeout(200)
    else:
        raise SystemExit(f"expected amortisation, got {await card_term(page)!r}")
    # Re-arm after Reset (component remounts / progress clear).
    await page.evaluate("() => { window.__HIW_FLASH_NEXT = ['enable', 'inelastic']; }")


async def demo(page):
    flip = page.get_by_role("button", name="Flip", exact=True)
    know = page.get_by_role("button", name="Know", exact=True)
    dont = page.get_by_role("button", name="Don't know", exact=True)

    # Hold on WORD "amortisation" so the opener matches the reference.
    await page.wait_for_timeout(900)
    await soft_click(page, flip, 400, steps=14)
    await soft_click(page, know, 580, steps=14)

    for _ in range(25):
        if "enable" in (await card_term(page)).lower():
            break
        await page.wait_for_timeout(70)
    else:
        raise SystemExit(f"expected enable after Know, got {await card_term(page)!r}")
    await soft_click(page, page.get_by_role("button", name="1. Synonyms"), 340, steps=14)

    await soft_click(page, flip, 380, steps=14)
    await soft_click(page, dont, 560, steps=14)

    for _ in range(25):
        if "inelastic" in (await card_term(page)).lower():
            break
        await page.wait_for_timeout(70)
    else:
        raise SystemExit(f"expected inelastic after Don't know, got {await card_term(page)!r}")

    await soft_click(page, flip, 400, steps=14)
    await soft_click(page, know, 520, steps=14)
    # End mid-exit like the reference (don't wait for the next card to settle).
    await page.wait_for_timeout(180)


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
        await ctx.add_init_script(HIW_INIT)
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
        out_mp4=OUT / "flashcards.mp4",
        out_poster=OUT / "flashcards-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=9.4,
    )


if __name__ == "__main__":
    asyncio.run(main())
