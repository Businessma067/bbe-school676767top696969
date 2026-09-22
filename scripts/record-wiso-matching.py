#!/usr/bin/env python3
"""Re-film WiSo How-it-works Matching: Wirtschaft All topics → 1.4 board walkthrough."""
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
TMP = Path("/tmp/hiw-wiso-matching-hq")

W, H, DPR, FPS = 1710, 983, 2, 60

# Same board shape as BBE Economics matching (German Markt / Oligopol deck).
HIW_INIT = """
window.__HIW_MATCHING = {
  left: ['Markt', 'Oligopol', 'Marktwirtschaft', 'Kartell', 'Grenzkosten'],
  right: ['Oligopol', 'Kartell', 'Grenzkosten', 'Markt', 'Marktwirtschaft'],
};
"""

MATCH_STEPS = [
    ("Markt", r"Käufer und Verkäufer|Mechanismus"),
    ("Oligopol", r"wenigen Anbietern"),
    # One wrong attempt so Trefferquote dips (same beats as BBE):
    ("Marktwirtschaft", r"meist illegale|Absprache"),
    ("Marktwirtschaft", r"Individuen und Unternehmen"),
    ("Kartell", r"meist illegale|Absprache"),
    ("Grenzkosten", r"zusätzlichen Einheit"),
]

TARGET = {"Markt", "Oligopol", "Marktwirtschaft", "Kartell", "Grenzkosten"}


async def left_terms(page) -> list[str]:
    return await page.evaluate(
        """() => [...document.querySelectorAll('[data-match-side="left"]')]
            .map(el => {
              const id = el.getAttribute('data-match-id') || '';
              const fromId = id.split('::').slice(2).join('::');
              if (fromId) return fromId;
              return (el.innerText || '').split('\\n').map(s => s.trim()).filter(s => s && s !== '·')[0] || '';
            })
            .filter(Boolean)"""
    )


async def prep(page):
    await page.goto(f"{BASE}/wiso/matching/economics", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(2200)
    await page.get_by_text("Begriff", exact=False).first.wait_for(
        state="visible", timeout=30000
    )
    await page.evaluate("() => { delete window.__HIW_MATCHING; }")
    all_btn = page.get_by_role("button", name=re.compile(r"^Alle Themen$", re.I))
    await soft_click(page, all_btn, 450)
    await soft_click(page, page.get_by_role("button", name=re.compile(r"^Mischen$", re.I)), 350)
    terms = await left_terms(page)
    print(f"all-topics board: {terms}", flush=True)


async def match_pair(page, concept: str, meaning_re: str, pause=380):
    left = page.locator('[data-match-side="left"]').filter(has_text=concept).first
    right = page.locator('[data-match-side="right"]').filter(
        has_text=re.compile(meaning_re, re.I)
    ).first
    await soft_click(page, left, 160, steps=24, move_ms=300)
    await soft_click(page, right, pause, steps=24, move_ms=320)


async def demo(page):
    await page.wait_for_timeout(900)

    await page.evaluate(HIW_INIT)
    topic = page.get_by_role(
        "button",
        name=re.compile(r"1\.4\s*Der Wirtschaftskreislauf", re.I),
    )
    await soft_click(page, topic, 420, steps=26, move_ms=340)
    terms = await left_terms(page)
    print(f"topic board: {terms}", flush=True)
    if set(terms) != TARGET:
        await soft_click(page, page.get_by_role("button", name=re.compile(r"^Mischen$", re.I)), 350)
        terms = await left_terms(page)
        print(f"after reshuffle: {terms}", flush=True)
        if set(terms) != TARGET:
            raise SystemExit(f"HIW board not applied: {terms}")

    for i, (concept, meaning_re) in enumerate(MATCH_STEPS):
        pause = 480 if i == 2 else (280 if i < len(MATCH_STEPS) - 1 else 380)
        await match_pair(page, concept, meaning_re, pause=pause)
    await page.wait_for_timeout(280)


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
        out_mp4=OUT / "wiso-matching.mp4",
        out_poster=OUT / "wiso-matching-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=10.0,
    )


if __name__ == "__main__":
    asyncio.run(main())
