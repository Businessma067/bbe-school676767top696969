#!/usr/bin/env python3
"""Re-film How-it-works Economics: Accounting Task 51 (no AI tabs)."""
from __future__ import annotations

import asyncio
import json
import re
import time
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
TMP = Path("/tmp/hiw-econ-hq")
CASES_PATH = ROOT / "src" / "data" / "economics-cases-ch6-subtopics.json"
BACKUP_PATH = Path("/tmp/hiw-econ-task51-cases.bak.json")

# 16:9 CSS viewport; dpr=2 → 3840×2160 encode
W, H, DPR, FPS = 1920, 1080, 2, 60

TASK_51 = {
    "subsection": "6.1",
    "case_id": "CASE 6.1.051",
    "title": "Liquidity From the Balance Sheet 51",
    "context": (
        "Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.\n\n"
        "| € in thousands | Amount |\n| --- | ---: |\n| **ASSETS** | |\n"
        "| Buildings | 407 |\n| Machinery | 133 |\n| Office equipment | 47 |\n"
        "| Patents, trademarks and licences | 62 |\n| Inventory | 160 |\n"
        "| Trade receivables | 115 |\n| Cash and cash equivalents | 94 |\n"
        "| Total assets | **1018** |\n| **EQUITY** | |\n| Share capital | 209 |\n"
        "| Retained earnings | 383 |\n| Total equity | **592** |\n| **LIABILITIES** | |\n"
        "| Long-term bank loan | 202 |\n| Bonds payable | 73 |\n| Trade payables | 85 |\n"
        "| Bank overdraft | 66 |\n| Total liabilities | **426** |\n"
        "| Total equity and liabilities | **1018** |\n\n"
        "Evaluate the following economic assertions:"
    ),
    "statements": [
        "Profit for the year increases equity through retained earnings, while a loss decreases equity.",
        "The current ratio exceeds 1.67.",
        "Working capital of €218 thousand is positive on this balance sheet.",
        "After excluding inventory, the remaining current assets still cover current liabilities more than 0.67 times over.",
        "The current ratio is below 0.62.",
    ],
    "answer_key": [True, True, True, True, False],
    "tactical_explanations": [
        (
            "Period profit flows into retained earnings on the balance sheet; a loss reduces them. "
            "Equity is the residual claim after liabilities, so profit raises equity and a loss lowers it.\n\n"
            "So the statement is True."
        ),
        (
            "Current assets are Inventory + Trade receivables + Cash:\n\n"
            "$$\n\\text{CA} = 160 + 115 + 94 = 369\n$$\n\n"
            "Current liabilities are Trade payables + Bank overdraft:\n\n"
            "$$\n\\text{CL} = 85 + 66 = 151\n$$\n\n"
            "$$\n\\text{Current ratio} = \\frac{\\text{CA}}{\\text{CL}} = \\frac{369}{151} \\approx 2.4437 > 1.67\n$$\n\n"
            "So the statement is True."
        ),
        (
            "Working capital is the euro surplus of current assets over current liabilities:\n\n"
            "$$\n\\text{WC} = \\text{CA} - \\text{CL} = 369 - 151 = 218\n$$\n\n"
            "The stem cites €218 thousand; the arithmetic matches and WC is positive.\n\n"
            "So the statement is True."
        ),
        (
            "Acid-test (quick) ratio = (current assets − inventory) ÷ current liabilities.\n\n"
            "$$\n\\text{CA} - \\text{Inventory} = 369 - 160 = 209\n$$\n\n"
            "$$\n\\text{Acid-test} = \\frac{209}{151} \\approx 1.3841 > 0.67\n$$\n\n"
            "After stripping inventory, remaining current assets still cover current liabilities more than 0.67×.\n\n"
            "So the statement is True."
        ),
        (
            "From statement B, the current ratio is about 2.44, which is far above 0.62. "
            "The claim that the ratio is below 0.62 is therefore false.\n\n"
            "$$\n\\frac{369}{151} \\approx 2.44 \\not< 0.62\n$$\n\n"
            "So the statement is False."
        ),
    ],
    "difficulty_level": "3/5",
    "tier": "core",
    "half": "a",
}


def sort_key(raw: dict):
    sub = tuple(int(x) for x in str(raw["subsection"]).split("."))
    tail = str(raw["case_id"]).split(".")[-1]
    sort = int(tail) if tail.isdigit() else 0
    return (sub, sort, raw["case_id"])


def patch_task_51() -> None:
    TMP.mkdir(parents=True, exist_ok=True)
    rows = json.loads(CASES_PATH.read_text())
    BACKUP_PATH.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n")
    rows = [r for r in rows if r.get("case_id") != "CASE 6.1.051"]
    ordered = sorted(rows, key=sort_key)
    victim = ordered[50]
    for i, r in enumerate(rows):
        if r.get("case_id") == victim["case_id"]:
            rows[i] = {**TASK_51, "case_id": victim["case_id"], "subsection": victim["subsection"]}
            rows[i]["title"] = "Liquidity From the Balance Sheet 51"
            break
    CASES_PATH.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n")
    print("patched Task 51", flush=True)


def restore_cases() -> None:
    if BACKUP_PATH.exists():
        CASES_PATH.write_text(BACKUP_PATH.read_text())
        print("restored cases", flush=True)


async def prep(page):
    await page.goto(f"{BASE}/products/full-course-economics", wait_until="domcontentloaded")
    await hide_chrome(page)
    await page.wait_for_timeout(3200)
    ch = page.locator("button").filter(has_text=re.compile(r"Accounting", re.I)).first
    await soft_click(page, ch, 1400)
    await soft_click(page, page.locator("button").filter(has_text=re.compile(r"^Practice$")).first, 1400)
    expand = page.locator('button[aria-label="Expand chapter"]').last
    if await expand.count():
        await soft_click(page, expand, 900)
    for _ in range(120):
        hit = await page.evaluate(
            """() => {
              const t = [...document.querySelectorAll('button')]
                .find(b => /^\\s*Task 51\\b/.test((b.textContent || '').trim()));
              if (!t) {
                const scroller = document.querySelector('.practice-scroll');
                if (scroller) scroller.scrollTop += 220;
                return false;
              }
              t.scrollIntoView({ block: 'center' }); t.click(); return true;
            }"""
        )
        if hit:
            break
        await page.wait_for_timeout(120)
    else:
        raise SystemExit("Could not open Task 51")
    await page.get_by_text(re.compile(r"TASK\s*51", re.I)).first.wait_for(state="visible", timeout=20000)
    await page.evaluate(
        """() => {
          const btn = [...document.querySelectorAll('button')]
            .find(b => /Check Answers/i.test(b.textContent || ''));
          btn?.scrollIntoView({ block: 'end' });
        }"""
    )
    await page.wait_for_timeout(700)


async def demo(page):
    await page.wait_for_timeout(500)
    boxes = page.locator('button[role="checkbox"]:not([disabled])')
    await boxes.first.wait_for(state="visible", timeout=20000)
    for i in (0, 2):
        await soft_click(page, boxes.nth(i), 520)
    await page.wait_for_timeout(350)
    await soft_click(page, page.locator("button").filter(has_text=re.compile(r"Check Answers", re.I)).first, 1000)
    if not await open_solution_panel(page):
        raise SystemExit("solution panel did not open")
    await page.wait_for_timeout(450)
    ok = await scroll_solution(page, ms=6200)
    print(f"scrolled solution: {ok}", flush=True)
    await page.wait_for_timeout(1200)


async def main():
    patched = False
    try:
        patch_task_51()
        patched = True
        time.sleep(1.2)
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
            out_mp4=OUT / "economics.mp4",
            out_poster=OUT / "economics-poster.jpg",
            tmp=TMP,
            css_w=W,
            css_h=H,
            dpr=DPR,
            fps=FPS,
        )
    finally:
        if patched:
            restore_cases()


if __name__ == "__main__":
    asyncio.run(main())
