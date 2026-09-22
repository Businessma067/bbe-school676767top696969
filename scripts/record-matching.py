#!/usr/bin/env python3
"""Re-film How-it-works Matching: Economics All topics → topic 2 board walkthrough."""
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
TMP = Path("/tmp/hiw-matching-hq")

W, H, DPR, FPS = 1710, 983, 2, 60

# Exact board from the reference clip (left concepts + right meanings by term).
HIW_INIT = """
window.__HIW_MATCHING = {
  left: ['Market', 'Oligopoly', 'Market economy', 'Cartel', 'Marginal cost'],
  right: ['Oligopoly', 'Cartel', 'Marginal cost', 'Market', 'Market economy'],
};
"""

MATCH_STEPS = [
    ("Market", r"buyers and sellers meet"),
    ("Oligopoly", r"only a few suppliers"),
    # One wrong attempt (reference Accuracy dips to 67%):
    ("Market economy", r"usually illegal"),
    ("Market economy", r"individuals and businesses make most"),
    ("Cartel", r"usually illegal"),
    ("Marginal cost", r"one additional unit"),
]


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
    await page.goto(f"{BASE}/matching/economics", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(2200)
    await page.get_by_text("Connect concept", exact=False).first.wait_for(
        state="visible", timeout=30000
    )
    # Keep HIW unset on All topics so the opener board looks organic (like the reference).
    await page.evaluate("() => { delete window.__HIW_MATCHING; }")
    all_btn = page.get_by_role("button", name=re.compile(r"^All topics$", re.I))
    await soft_click(page, all_btn, 450)
    await soft_click(page, page.get_by_role("button", name=re.compile(r"^Reshuffle$", re.I)), 350)
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
    # Hold on All topics opener (reference starts here before topic 2).
    await page.wait_for_timeout(900)

    # Arm HIW pins, then switch to topic 2 so startRound applies the reference board.
    await page.evaluate(HIW_INIT)
    topic = page.get_by_role(
        "button",
        name=re.compile(r"2\.\s*Economic Systems", re.I),
    )
    await soft_click(page, topic, 420, steps=26, move_ms=340)
    terms = await left_terms(page)
    print(f"topic-2 board: {terms}", flush=True)
    if set(terms) != set(
        ["Market", "Oligopoly", "Market economy", "Cartel", "Marginal cost"]
    ):
        # Reshuffle once so startRound re-reads HIW pins.
        await soft_click(page, page.get_by_role("button", name=re.compile(r"^Reshuffle$", re.I)), 350)
        terms = await left_terms(page)
        print(f"after reshuffle: {terms}", flush=True)
        if set(terms) != set(
            ["Market", "Oligopoly", "Market economy", "Cartel", "Marginal cost"]
        ):
            raise SystemExit(f"HIW board not applied: {terms}")

    for i, (concept, meaning_re) in enumerate(MATCH_STEPS):
        # Wrong attempt (i==2) pauses a touch longer so Accuracy 67% is readable.
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
        out_mp4=OUT / "matching.mp4",
        out_poster=OUT / "matching-poster.jpg",
        tmp=TMP,
        css_w=W,
        css_h=H,
        dpr=DPR,
        fps=FPS,
        target_dur=10.0,
    )


if __name__ == "__main__":
    asyncio.run(main())
