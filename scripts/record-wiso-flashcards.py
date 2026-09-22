#!/usr/bin/env python3
"""Re-film WiSo How-it-works Flashcards: German topic switch walkthrough."""
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
    setup_auth_context,
    soft_click,
)

BASE = "http://127.0.0.1:8080"
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "how-it-works"
TMP = Path("/tmp/hiw-wiso-flashcards-hq")

W, H, DPR, FPS = 1710, 983, 2, 60

# Same choreography as BBE: open → Know → switch topic → Don't know → Know.
HIW_INIT = """
window.__HIW_FLASH_START = 'Knappheit';
window.__HIW_FLASH_NEXT = ['Angebot', 'Folge'];
"""


async def card_term(page) -> str:
    return await page.evaluate(
        """() => {
          const card = document.querySelector('[aria-label*="Karteikarten"], [aria-label*="Flashcard"]');
          if (!card) return '';
          const t = (card.innerText || '').split('\\n').map(s => s.trim()).filter(Boolean);
          const skip = /^(Wort|Begriff|Definition|Erklärung|Tippen|WORD|MEANING)/i;
          for (const line of t) {
            if (!skip.test(line) && line.length < 80) return line;
          }
          return t.find(l => !skip.test(l)) || '';
        }"""
    )


async def select_topic(page, value: str):
    sel = page.locator("select").first
    await sel.wait_for(state="visible", timeout=15000)
    await sel.select_option(value)
    await page.wait_for_timeout(400)


async def prep(page):
    await page.goto(f"{BASE}/wiso/flashcards/german", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(2200)
    await page.evaluate(
        """() => {
          localStorage.removeItem('bbe-flashcard-progress:wiso-german');
          window.__HIW_FLASH_START = 'Knappheit';
          window.__HIW_FLASH_NEXT = ['Angebot', 'Folge'];
        }"""
    )
    reset = page.get_by_role("button", name=re.compile(r"Fortschritt zurücksetzen", re.I))
    if await reset.count():
        await soft_click(page, reset, 500)
    await select_topic(page, "wiso-de-1")
    for _ in range(10):
        term = await card_term(page)
        if "knappheit" in term.lower():
            break
        await page.wait_for_timeout(200)
    else:
        raise SystemExit(f"expected Knappheit, got {await card_term(page)!r}")
    await page.evaluate(
        """() => {
          window.__HIW_FLASH_START = 'Knappheit';
          window.__HIW_FLASH_NEXT = ['Angebot', 'Folge'];
        }"""
    )


async def demo(page):
    flip = page.get_by_role("button", name="Umdrehen", exact=True)
    know = page.get_by_role("button", name="Kann ich", exact=True)
    dont = page.get_by_role("button", name="Kann ich nicht", exact=True)

    await page.wait_for_timeout(1600)
    await soft_click(page, flip, 620, steps=32, move_ms=480)
    await soft_click(page, know, 820, steps=32, move_ms=480)

    for _ in range(25):
        if "angebot" in (await card_term(page)).lower():
            break
        await page.wait_for_timeout(100)
    else:
        raise SystemExit(f"expected Angebot after Kann ich, got {await card_term(page)!r}")

    # Topic switch (like BBE Meanings → Synonyms). Pin opening card of the new topic.
    await page.evaluate("() => { window.__HIW_FLASH_START = 'Voraussetzung'; }")
    # Glide to the topic select, then change it so the cursor motion is visible.
    sel = page.locator("select").first
    box = await sel.bounding_box()
    if box:
        from hiw_capture import glide

        await glide(
            page,
            box["x"] + box["width"] * 0.55,
            box["y"] + box["height"] / 2,
            steps=28,
            duration_ms=450,
        )
        await page.wait_for_timeout(200)
    await select_topic(page, "wiso-de-2")
    for _ in range(20):
        if "voraussetzung" in (await card_term(page)).lower():
            break
        await page.wait_for_timeout(100)
    else:
        raise SystemExit(
            f"expected Voraussetzung after topic switch, got {await card_term(page)!r}"
        )

    await soft_click(page, flip, 620, steps=32, move_ms=480)
    await soft_click(page, dont, 820, steps=32, move_ms=480)

    for _ in range(25):
        if "folge" in (await card_term(page)).lower():
            break
        await page.wait_for_timeout(100)
    else:
        raise SystemExit(f"expected Folge after Kann ich nicht, got {await card_term(page)!r}")

    await soft_click(page, flip, 620, steps=32, move_ms=480)
    await soft_click(page, know, 780, steps=32, move_ms=480)
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
        out_mp4=OUT / "wiso-flashcards.mp4",
        out_poster=OUT / "wiso-flashcards-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=10.0,
    )


if __name__ == "__main__":
    asyncio.run(main())
