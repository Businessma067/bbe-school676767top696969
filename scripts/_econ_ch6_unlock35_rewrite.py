#!/usr/bin/env python3
"""Rewrite first floor(n*0.35)=218 Ch6 tactical_explanations into natural tutor prose.

Only touches cases[0:218]. Locked cases unchanged.
"""

from __future__ import annotations

import json
import math
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from _econ_ch6_deepen_lib import (  # noqa: E402
    CLASS_RX,
    enrich,
    fmt,
    getv,
    growth,
    parse_dep,
    parse_tables,
    pct,
    subject_keys,
    try_numeric,
)

PATH = Path("/workspace/src/data/economics-cases-ch6-subtopics.json")
UNLOCK_RATIO = 0.35
LETTERS = "ABCDE"

ROBOT = re.compile(
    r"("
    r"The statement is (true|false)\.|"
    r"Name the identity in words:\s*|"
    r"The wording matches the relevant rule for[^.]*\.|"
    r"Absolute or misapplied wording conflicts with the rule for[^.]*\.|"
    r"Reading the arithmetic against the claim:[^.]*\.|"
    r"so the statement (holds|does not hold)\.|"
    r"Rejected claim:\s*\"[^\"]*\"|"
    r"Applied here:\s*\"[^\"]*\""
    r")",
    re.I,
)


def unlock_n(n: int) -> int:
    return max(1, int(n * UNLOCK_RATIO)) if n else 0


def prefix(truth: bool) -> str:
    return "TRUE — " if truth else "FALSE — "


def sentences_join(parts: list[str]) -> str:
    out = []
    for p in parts:
        p = re.sub(r"\s+", " ", (p or "").strip())
        if not p:
            continue
        if p[-1] not in ".!?":
            p += "."
        out.append(p)
    return " ".join(out)


def finish(truth: bool, parts: list[str], vary: int = 0) -> str:
    """Build 2–5 sentence tutor prose with light length variation."""
    del vary  # letter-index hook reserved; content variation comes from statement type
    text = sentences_join(parts)
    # Cap at 5 sentences
    sents = re.split(r"(?<=[.!?])\s+", text.strip())
    sents = [s for s in sents if s.strip()]
    if len(sents) > 5:
        sents = sents[:5]
    if len(sents) < 2:
        sents.append("Apply that rule directly to the wording in the stem.")
    body = " ".join(sents)
    # Prefer one paragraph; occasionally two when longer
    if len(body) > 320 and len(sents) >= 3:
        mid = max(2, len(sents) // 2)
        body = " ".join(sents[:mid]) + "\n\n" + " ".join(sents[mid:])
    return prefix(truth) + body


def strip_math_to_prose(expl: str) -> str:
    """Turn deepen $$ blocks into compact inline arithmetic where possible."""
    text = expl
    # Remove header prefix for processing
    text = re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", text.strip(), count=1)
    text = ROBOT.sub("", text)
    # Flatten $$...$$ to inline, dropping LaTeX commands lightly
    def repl(m):
        inner = m.group(1)
        inner = inner.replace("\\quad", ";").replace("\\to", "→")
        inner = re.sub(r"\\frac\{([^{}]+)\}\{([^{}]+)\}", r"(\1)/(\2)", inner)
        inner = re.sub(r"\\text\{([^{}]*)\}", r"\1", inner)
        inner = re.sub(r"\\%|%", "%", inner)
        inner = re.sub(r"[{}\\]", "", inner)
        inner = re.sub(r"\s+", " ", inner).strip()
        return inner

    text = re.sub(r"\$\$(.*?)\$\$", repl, text, flags=re.S)
    text = re.sub(r"\n{3,}", "\n\n", text)
    paras = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    # Drop near-duplicate paragraphs
    kept = []
    for p in paras:
        norm = re.sub(r"\s+", " ", p.lower())
        if any(norm[:80] == re.sub(r"\s+", " ", k.lower())[:80] for k in kept):
            continue
        kept.append(p)
    return " ".join(kept)


# ── Conceptual natural explainers ───────────────────────────────────────────

ASSET_WORD = re.compile(
    r"\b(pallet loader|industrial dishwasher|warehouse crane|delivery scooter|"
    r"packaging line|concrete mixer|laptop computer|refrigerated van|"
    r"forklift|conveyor belt|printing press|sewing machine|drill press|"
    r"delivery van|oven|freezer|tractor|compressor|generator|scanner|"
    r"photocopier|server rack|milling machine|lathe)\b",
    re.I,
)


def asset_name(stmt: str) -> str:
    m = ASSET_WORD.search(stmt)
    return m.group(1).lower() if m else "the item"


def a_an(noun: str) -> str:
    return ("an " if noun[:1].lower() in "aeiou" else "a ") + noun


def conceptual_natural(stmt: str, truth: bool, subsection: str, vary: int) -> str | None:
    sl = stmt.lower()
    item = asset_name(stmt)

    for rx, prose in CLASS_RX:
        if rx.search(stmt):
            # Statement-tied lead instead of shared boilerplate
            if "inventory because inventory can include any physical" in sl:
                return finish(
                    truth,
                    [
                        f"Calling {a_an(item)} inventory just because it is a physical machine stretches the definition",
                        "Inventory is stock held for sale or for consumption in the operating cycle, not every tangible thing a firm owns",
                        "When the business uses the machine in its own operations for more than a year, it belongs among non-current tangible assets",
                    ],
                    vary,
                )
            if "dealer for resale" in sl and "non-current" in sl:
                return finish(
                    truth,
                    [
                        f"A dealer holding {a_an(item)} for customers is holding merchandise, not a long-term operating asset",
                        "Resale intent puts the machine in inventory (current), even though the dealer is a business",
                        "Business form does not override the use-versus-resale test",
                    ],
                    vary,
                )
            if "kept in service" in sl and "non-current tangible" in sl:
                return finish(
                    truth,
                    [
                        f"Keeping {a_an(item)} in service for more than one year for the firm's own operations meets the non-current tangible asset test",
                        "Useful life beyond the current period plus operating use — not resale — drive that line",
                    ],
                    vary,
                )
            if "always be classified identically" in sl:
                return finish(
                    truth,
                    [
                        f"The same {item} need not sit on the same balance-sheet line for every entity",
                        "Classification follows how that reporting entity holds it: use in operations versus held for sale",
                        "Physical form alone does not freeze the category",
                    ],
                    vary,
                )
            if "may be a non-current asset for one business and inventory for another" in sl:
                return finish(
                    truth,
                    [
                        f"Intended use decides the line for {a_an(item)}",
                        "An operator records it as a non-current tangible asset; a dealer records the same machine as inventory",
                        "That dual outcome is exactly what the use-versus-resale rule predicts",
                    ],
                    vary,
                )
            if "depends mainly on its purchase price" in sl:
                return finish(
                    truth,
                    [
                        "Purchase price affects measurement (cost), not the inventory-versus-fixed-asset split",
                        "Management's intention — use in operations or hold for resale — decides the classification",
                    ],
                    vary,
                )
            if "depends on management's intention to use it in operations" in sl:
                return finish(
                    truth,
                    [
                        "Yes: management intent to use the asset in operations for more than one period places it among non-current assets",
                        "Resale intent would have put the same object in inventory instead",
                    ],
                    vary,
                )
            if "acquired for resale still counts among non-current" in sl:
                return finish(
                    truth,
                    [
                        "Goods acquired for resale enter inventory from day one",
                        "Staying unsold does not promote them into non-current operating assets",
                        "Resale intent, not elapsed time on the shelf, decides the line",
                    ],
                    vary,
                )
            if "recorded as inventory because it wears out" in sl:
                return finish(
                    truth,
                    [
                        "Wear and tear is handled by depreciating a fixed asset, not by labelling operating equipment as inventory",
                        "Daily use in the firm's own operations supports non-current classification",
                    ],
                    vary,
                )
            if "buyer must continue to record it as inventory" in sl:
                return finish(
                    truth,
                    [
                        "After the sale, the buyer's purpose governs classification",
                        "If the buyer puts the machine into its own operations, it becomes the buyer's non-current asset, not inventory",
                    ],
                    vary,
                )
            # Fallback to CLASS_RX prose without shared lead
            return finish(truth, [prose], vary)

    # Tangible fixed asset bought for own operations
    if re.search(r"bought by a business to support its own daily operations is a tangible fixed asset", sl):
        return finish(
            truth,
            [
                f"{a_an(item).capitalize()} bought to support the firm's own daily work delivers benefit across several periods",
                "That pattern is the textbook tangible fixed (non-current) asset",
                "It is not inventory, because it is not held for sale",
            ],
            vary,
        )
    if re.search(r"that a dealer displays for sale is not a fixed asset", sl):
        return finish(
            truth,
            [
                f"When a dealer displays {a_an(item)} for sale, the machine is merchandise",
                "Inventory stays current; it is not the dealer's fixed asset",
                "Only operating use beyond one year would put it among non-current tangibles",
            ],
            vary,
        )
    if "long-term assets should preferably be financed only with short-term trade credit" in sl:
        return finish(
            truth,
            [
                "Long-term assets should be matched with long-term finance (equity or non-current debt)",
                "Funding them only with short-term trade credit creates a maturity mismatch and refinancing risk",
                "So the claim is the opposite of sound financing practice",
            ],
            vary,
        )

    if re.search(r"correctly classified as a current liability", sl):
        return finish(
            truth,
            [
                "Current liabilities are obligations due within one year or the operating cycle",
                "Trade payables to suppliers sit in that bucket; the euro amount does not change the timing rule",
            ],
            vary,
        )
    if "reclassified as a current liability because nothing in the extract indicates" in sl:
        return finish(
            truth,
            [
                "A long-term bank loan stays non-current unless the extract shows a near-term maturity or breach that forces reclassification",
                "Silence about repayment within one year is not enough to shove it into current liabilities",
            ],
            vary,
        )
    if "within equity" in sl and ("loan" in sl or "bank" in sl):
        return finish(
            truth,
            [
                "A bank loan is a liability — an obligation to a lender",
                "Equity is the owners' residual interest after liabilities",
                "Borrowed funds cannot be parked inside equity",
            ],
            vary,
        )
    if "overdraft" in sl and "non-current" in sl:
        return finish(
            truth,
            [
                "Bank overdrafts are presented as current liabilities",
                "Even if the facility is often rolled over, the reporting convention keeps them with short-term claims",
            ],
            vary,
        )
    if re.search(r"inventory.*?correctly classified as a current asset", sl):
        return finish(
            truth,
            [
                "Inventory is held for sale or for consumption in the cycle, so it is a current asset",
                "It is neither an intangible nor a non-current operating asset",
            ],
            vary,
        )
    if "non-current assets normally have a useful life of more than one year" in sl:
        return finish(
            truth,
            [
                "Non-current assets are held for use beyond one accounting period",
                "Useful life beyond a year plus operating intent (not ordinary resale) define the category",
            ],
            vary,
        )
    if "shareholder sells shares to another" in sl and "corporation always receives" in sl:
        return finish(
            truth,
            [
                "On the secondary market, cash moves between investors, not into the company",
                "The issuer is not a party to that trade and does not receive fresh share capital from it",
            ],
            vary,
        )
    if "secondary-market trading changes who owns" in sl or "does not, by itself, inject fresh equity" in sl:
        return finish(
            truth,
            [
                "Exchange trading reshuffles who holds existing shares",
                "It does not raise new equity cash for the issuer; primary issues do that",
            ],
            vary,
        )
    if "voting rights ordinarily attach to common shares" in sl:
        return finish(
            truth,
            [
                "Ordinary (common) shares usually carry voting rights",
                "Preferred shareholders typically trade voting power for a preferential dividend claim",
                "That split is the standard corporate-finance reading",
            ],
            vary,
        )
    if "equity usually does not have to be repaid on a fixed schedule" in sl:
        return finish(
            truth,
            [
                "Equity is a residual claim without a contractual repayment calendar like a loan",
                "That permanence helps the firm stay solvent relative to scheduled debt service",
            ],
            vary,
        )
    if "profit for the year increases equity" in sl or (
        "profit for the year increases equity through retained earnings" in sl
    ):
        return finish(
            truth,
            [
                "Profit for the year flows into retained earnings and therefore lifts equity",
                "A loss does the reverse",
                "That is the basic link between the income statement and the equity section of the balance sheet",
            ],
            vary,
        )
    if "external financial reporting" in sl or "financial accounting rather than management" in sl:
        return finish(
            truth,
            [
                "Financial accounting serves external users — owners, lenders, regulators",
                "Management accounting is internal and free-form",
                "A published extract aimed at outsiders is financial accounting by purpose",
            ],
            vary,
        )
    if "could not rely on it at all" in sl and "one financial year" in sl:
        return finish(
            truth,
            [
                "Single-year statements are routinely used, often with prior-year comparatives",
                "One year limits trend reading but does not make the extract useless",
            ],
            vary,
        )
    if "reasonable assurance" in sl:
        return finish(
            truth,
            [
                "An audit gives reasonable assurance about material misstatement, not absolute certainty",
                "The opinion is not a guarantee of future profits or zero error",
            ],
            vary,
        )
    if "identical statutory format" in sl and "management" in sl:
        return finish(
            truth,
            [
                "Internal management reports need not copy the statutory published layout",
                "Managers may rearrange lines however decision-making requires",
            ],
            vary,
        )
    if "never be disclosed to any party outside" in sl:
        return finish(
            truth,
            [
                "Published financial figures exist precisely so outsiders can read them",
                "Shareholders, lenders, and tax authorities are normal audiences",
            ],
            vary,
        )
    if "not for guaranteeing the business will remain profitable" in sl:
        return finish(
            truth,
            [
                "Auditors opine on fair presentation of the figures, not on future profitability",
                "That correctly limits what an audit can claim",
            ],
            vary,
        )
    if "tax authorities have no legitimate interest" in sl:
        return finish(
            truth,
            [
                "Tax authorities are a standard external user of financial statements",
                "Reported profit feeds assessments, so denying any interest is wrong",
            ],
            vary,
        )
    if "added back" in sl and "depreciation" in sl and "indirect" in sl:
        return finish(
            truth,
            [
                "Under the indirect method, depreciation is added back to profit when reconciling to operating cash",
                "It reduced accrual profit without using cash",
            ],
            vary,
        )
    if "paying dividends is classified as an investing" in sl:
        return finish(
            truth,
            [
                "Dividends paid are a financing cash outflow — returning cash to providers of equity capital",
                "Investing outflows are purchases of long-term assets, not distributions to owners",
            ],
            vary,
        )
    if "collecting payment on a trade receivable is cash from operating" in sl:
        return finish(
            truth,
            [
                "Collecting a trade receivable returns cash from the core trading cycle",
                "That inflow sits in operating activities, not in investing or financing",
            ],
            vary,
        )
    if "negative cash flow from investing" in sl and "does not necessarily indicate a problem" in sl:
        return finish(
            truth,
            [
                "Negative investing cash flow often means the firm bought long-term assets",
                "That can be healthy growth spending, not automatically a distress signal",
            ],
            vary,
        )
    if "negative cash flow from investing activities in the same year that it pays a dividend" in sl:
        return finish(
            truth,
            [
                "Investing cash flows and dividend payments are separate classifications",
                "A firm can invest heavily and still pay a dividend in the same year if operating cash (or reserves) fund both",
            ],
            vary,
        )
    if "profit for the year is reported in the income statement" in sl and "does not appear as a separate" in sl:
        return finish(
            truth,
            [
                "Profit is an accrual income-statement result and feeds retained earnings on the balance sheet",
                "It does not appear as its own line on the cash-flow statement; cash flows are classified by activity instead",
            ],
            vary,
        )
    if "profit" in sl and "cash" in sl and (
        "never" in sl or "can never" in sl or "while still" in sl or "always means" in sl
    ):
        return finish(
            truth,
            [
                "Profit and cash movement are different measures",
                "A firm can show accrual profit while cash falls — for example after heavy investment or slower collections",
            ],
            vary,
        )
    if "market capitalisation values the equity" in sl or (
        "market capitalisation is the total market value" in sl
    ):
        return finish(
            truth,
            [
                "Market capitalisation = latest share price × shares outstanding",
                "It values the equity at market prices and is a common size measure for listed firms",
            ],
            vary,
        )
    if "depreciation" in sl and ("non-cash" in sl or "does not use cash" in sl or "cash outflow" in sl):
        return finish(
            truth,
            [
                "Depreciation allocates the cost of a long-lived asset over its useful life",
                "It is a non-cash expense: the cash left when the asset was purchased",
            ],
            vary,
        )

    # ── Cash-flow / P&L / depreciation teaching stems (Ch 6.2) ─────────────
    if "dividends paid" in sl and ("financing" in sl or "operating" in sl or "investing" in sl):
        if "investing" in sl and ("belongs" in sl or "classified" in sl):
            return finish(
                truth,
                [
                    "Dividends paid belong in financing activities — cash returned to equity providers",
                    "Investing covers purchases and sales of long-term assets, not owner distributions",
                    "Parking dividends in investing mislabels the cash-flow section",
                ],
                vary,
            )
        return finish(
            truth,
            [
                "Dividends paid to shareholders are financing cash outflows",
                "They are not operating cash — operating covers the trading cycle — and they are not investing outflows",
            ],
            vary,
        )

    if ("collects payment" in sl or "collecting payment" in sl or "customer collections of receivables" in sl) and (
        "cash" in sl or "financ" in sl or "operat" in sl
    ):
        if "financ" in sl and ("belongs" in sl or "classified" in sl):
            return finish(
                truth,
                [
                    "Collecting a receivable is cash from the core trading cycle",
                    "That inflow is operating, not financing — financing is borrowing, repayments, share issues, and dividends",
                ],
                vary,
            )
        return finish(
            truth,
            [
                "Cash collected on a trade receivable is an operating inflow",
                "It closes the sales cycle; it does not raise capital or sell a long-term asset",
            ],
            vary,
        )

    if ("repays part of a long-term bank loan" in sl or "repaying a bank loan" in sl) and "cash" in sl:
        if "operating" in sl:
            return finish(
                truth,
                [
                    "Loan principal repayments are financing outflows",
                    "Operating cash tracks the trading cycle, not the settlement of borrowed funds",
                ],
                vary,
            )
        return finish(
            truth,
            [
                "Repaying bank debt is a financing cash outflow",
                "The firm is returning capital to lenders, which sits outside operating and investing",
            ],
            vary,
        )

    if ("purchases new" in sl or "purchase of" in sl or "buying new" in sl) and (
        "investing" in sl or "operating" in sl
    ):
        if "operating" in sl and ("outflow" in sl or "belongs" in sl or "classified" in sl):
            return finish(
                truth,
                [
                    "Buying long-lived equipment for use in the business is an investing cash outflow",
                    "Operating outflows are day-to-day trading payments, not capital expenditure",
                ],
                vary,
            )
        return finish(
            truth,
            [
                "Cash paid for plant, machinery, or similar long-term assets is investing",
                "The asset will serve several periods; the cash-flow statement records that purchase under investing activities",
            ],
            vary,
        )

    if "negative cash flow from investing" in sl and (
        "always" in sl or "financial trouble" in sl or "distress" in sl or "proves" in sl
    ):
        return finish(
            truth,
            [
                "A negative investing cash flow often means the firm bought long-term assets",
                "That can be planned growth spending, not automatic proof of financial trouble",
            ],
            vary,
        )

    if "cash flow from operating activities reflects cash movements arising from the core trading" in sl:
        return finish(
            truth,
            [
                "Operating cash flow gathers receipts and payments from the core trading cycle",
                "That is the section that shows how well the business turns operations into cash",
            ],
            vary,
        )
    if "cash flow from investing activities reflects cash movements arising from buying or selling long-term" in sl:
        return finish(
            truth,
            [
                "Investing cash flows cover buying and selling long-term assets",
                "Plant purchases, equipment sales, and similar capital deals land here",
            ],
            vary,
        )
    if "cash flow from financing activities reflects cash movements arising from borrowing" in sl:
        return finish(
            truth,
            [
                "Financing cash flows cover borrowing, repayments, share issues, and dividends",
                "They show how the firm raises and returns capital, separate from trading and investing",
            ],
            vary,
        )
    if "cash flow from operations shows how well a business generates cash from its core" in sl:
        return finish(
            truth,
            [
                "Operating cash flow is the key read on whether the core business throws off cash",
                "Among the three sections it is usually watched first for sustainability",
            ],
            vary,
        )

    if "turnover for the year is reported in the statement of profit" in sl:
        return finish(
            truth,
            [
                "Turnover (revenue) belongs on the income statement for the period",
                "The balance sheet does not report the year's sales total as a line of its own",
            ],
            vary,
        )
    if "turnover for the year is reported in the balance sheet" in sl:
        return finish(
            truth,
            [
                "Turnover is a period performance figure on the income statement",
                "Putting it on the balance sheet confuses a flow measure with a point-in-time stock of assets and claims",
            ],
            vary,
        )
    if "income statement reports assets, liabilities and equity" in sl:
        return finish(
            truth,
            [
                "Assets, liabilities, and equity are balance-sheet stocks at a reporting date",
                "The income statement reports revenues, costs, and profit for a period — not the financing identity",
            ],
            vary,
        )
    if "balance sheet shows assets, liabilities and equity at a point in time" in sl and "income statement" in sl:
        return finish(
            truth,
            [
                "The balance sheet is a snapshot of assets, liabilities, and equity",
                "The income statement summarises revenues and expenses over the period — that split is correct",
            ],
            vary,
        )
    if "balance sheet of" in sl and "reports the revenue earned" in sl:
        return finish(
            truth,
            [
                "Revenue is an income-statement flow, not a balance-sheet line",
                "The balance sheet lists assets, equity, and liabilities at the date",
            ],
            vary,
        )
    if "balance sheet of" in sl and "shows its assets, equity and l" in sl:
        return finish(
            truth,
            [
                "A balance sheet presents assets, equity, and liabilities at a point in time",
                "That is exactly its job in the financial statement set",
            ],
            vary,
        )

    if "if revenues exceed costs" in sl or ("revenues exceed costs and expenses" in sl):
        return finish(
            truth,
            [
                "When revenues exceed costs and expenses, the firm reports a profit; the reverse is a loss",
                "That is the basic income-statement outcome test",
            ],
            vary,
        )
    if "gross profit shows earnings after deducting the direct costs" in sl:
        return finish(
            truth,
            [
                "Gross profit is revenue minus the direct cost of the goods sold",
                "Operating expenses such as admin and distribution come after that subtotal",
            ],
            vary,
        )
    if "cost of sales includes administration costs, shipping to customers and sales-staff" in sl:
        return finish(
            truth,
            [
                "Cost of sales covers production-linked costs — materials and production labour",
                "Administration, outbound shipping, and sales-staff costs are operating expenses, not COS",
            ],
            vary,
        )
    if "cost of sales covers costs directly tied to production" in sl:
        return finish(
            truth,
            [
                "Cost of sales is the direct production cost tied to goods sold",
                "Administration and distribution sit further down the income statement",
            ],
            vary,
        )

    if "land is depreciated on a straight-line basis" in sl:
        return finish(
            truth,
            [
                "Land is not depreciated under ordinary accounting rules — it has an indefinite useful life",
                "Buildings and machinery are depreciated; treating land the same way is wrong",
            ],
            vary,
        )
    if "depreciation reflects the gradual wearing out of a fixed asset" in sl:
        return finish(
            truth,
            [
                "Depreciation spreads the cost of a fixed asset as it is used up over its useful life",
                "That allocation matches expense to the periods that benefit from the asset",
            ],
            vary,
        )
    if "depreciation is a cash expense" in sl:
        return finish(
            truth,
            [
                "Depreciation is a non-cash expense on the income statement",
                "No cash leaves the bank when the depreciation charge is recorded — the cash left at purchase",
            ],
            vary,
        )
    if "depreciation has nothing to do with the wearing out" in sl:
        return finish(
            truth,
            [
                "Depreciation exists precisely because fixed assets wear out or are consumed over time",
                "Denying that link reverses the point of the charge",
            ],
            vary,
        )
    if "under the straight-line method, the depreciable cost is spread evenly" in sl or (
        "under the straight-line method, the depreciable amount of an asset is spread evenly" in sl
    ):
        return finish(
            truth,
            [
                "Straight-line depreciation spreads depreciable cost evenly over useful life",
                "Each year gets the same charge when residual value and life are unchanged",
            ],
            vary,
        )
    if "under the straight-line method, the depreciable amount of an asset is spread unevenly" in sl:
        return finish(
            truth,
            [
                "Straight-line means an even charge each period, not an uneven profile",
                "Uneven charges belong to methods such as diminishing balance, not straight-line",
            ],
            vary,
        )
    if "fixed asset that is never depreciated will automatically show a reduced value" in sl:
        return finish(
            truth,
            [
                "Without depreciation, the asset stays at cost on the books",
                "It does not automatically write itself down to a 'true' worn value",
            ],
            vary,
        )
    if "if a fixed asset were never depreciated, it would remain on the accounts at its original cost" in sl:
        return finish(
            truth,
            [
                "Skipping depreciation leaves the asset at historical cost and overstates carrying value after years of use",
                "That is why systematic depreciation is required for depreciable fixed assets",
            ],
            vary,
        )
    if "after depreciation, the carrying value of an asset on the balance sheet is lower" in sl:
        return finish(
            truth,
            [
                "Accumulated depreciation reduces carrying value below original cost",
                "Cost minus accumulated depreciation is the amount shown for the asset",
            ],
            vary,
        )
    if "accumulated depreciation is deducted from the original cost" in sl:
        return finish(
            truth,
            [
                "Carrying value equals cost less accumulated depreciation",
                "That net amount is what the balance sheet reports for the depreciable asset",
            ],
            vary,
        )
    if "depreciation recognises that the value of fixed assets decreases" in sl:
        return finish(
            truth,
            [
                "Depreciation recognises that fixed assets are used up over time",
                "Without it, asset values in the accounts would stay overstated relative to remaining service potential",
            ],
            vary,
        )

    if "a loss incurred during the year reduces the equity" in sl:
        return finish(
            truth,
            [
                "A loss reduces retained earnings and therefore equity on the balance sheet",
                "Profit does the opposite through the same equity channel",
            ],
            vary,
        )
    if "a profit earned during the year reduces the equity" in sl:
        return finish(
            truth,
            [
                "Profit increases equity via retained earnings; it does not reduce equity",
                "Only losses, dividends, and similar distributions pull equity down",
            ],
            vary,
        )
    if "when a" in sl and "makes a loss for the year, that loss is" in sl:
        return finish(
            truth,
            [
                "A period loss flows through retained earnings and reduces equity",
                "It is not a balance-sheet asset and not an investing cash-flow label by itself",
            ],
            vary,
        )
    if "when a" in sl and "earns a profit for the year, that profit is" in sl:
        return finish(
            truth,
            [
                "Profit for the year is added to retained earnings inside equity",
                "That is how the income statement updates the owners' residual claim",
            ],
            vary,
        )
    if "profit for the year and the net change in cash" in sl:
        return finish(
            truth,
            [
                "Profit is an accrual result; the net change in cash is the sum of operating, investing, and financing flows",
                "The two numbers need not match in any given period",
            ],
            vary,
        )
    if "net change in cash and cash equivalents for a period has" in sl:
        return finish(
            truth,
            [
                "The net change in cash equals operating plus investing plus financing cash flows (allowing for FX where relevant)",
                "It is not the same figure as accrual profit",
            ],
            vary,
        )
    if "rise in inventory or trade receivables during the year uses cash" in sl:
        return finish(
            truth,
            [
                "Building inventory or receivables ties up cash even when accrual profit looks healthy",
                "That is a classic reason profit and operating cash diverge",
            ],
            vary,
        )
    if "investing cash flow is an outflow in both years" in sl:
        return finish(
            truth,
            [
                "Read the investing line in each year of the extract",
                "A negative figure means net investing outflow — typically capital expenditure exceeding asset sales",
            ],
            vary,
        )
    if "proceeds from new borrowing were lower in year 2" in sl:
        return finish(
            truth,
            [
                "Compare the financing inflows from new borrowing across the two years in the extract",
                "The claim tracks whether Year 2 borrowing proceeds fell relative to Year 1",
            ],
            vary,
        )
    if "dividends paid rose from year 1 to year 2" in sl:
        return finish(
            truth,
            [
                "Compare the dividends-paid line across Year 1 and Year 2",
                "A larger absolute outflow in Year 2 means dividends rose",
            ],
            vary,
        )

    # because-structure
    if " because " in stmt:
        main, reason = stmt.split(" because ", 1)
        main, reason = main.strip().rstrip("."), reason.strip().rstrip(".")
        # Drop repetitive "For this X company," lead clutter in the replay
        main_soft = re.sub(
            r"^For this .+?, ",
            "",
            main,
            count=1,
            flags=re.I,
        )
        if truth:
            return finish(
                truth,
                [
                    f"{main_soft[0].upper() + main_soft[1:] if main_soft else main_soft}",
                    f"That holds because {reason}",
                    "The reason lines up with the chapter definition, so the assertion stands",
                ],
                vary,
            )
        return finish(
            truth,
            [
                f"It is not right that {main_soft[0].lower() + main_soft[1:] if main_soft else main_soft}",
                f"The offered reason — {reason} — does not carry the label under the chapter rules",
                "Replace that reason with the correct criterion and the claim falls away",
            ],
            vary,
        )

    return None


def numeric_natural(stmt: str, truth: bool, tables: dict, vary: int) -> str | None:
    """Compute figures and explain in tutor prose (no $$ scaffolding)."""
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    amt_raw = dict(tables["amt"])
    amt = enrich(amt_raw) if amt_raw else {}
    for k, v in amt_raw.items():
        amt.setdefault(k, v)
    months = tables["months"]
    sl = stmt.lower()

    m = re.match(
        r"(.+?) (grew|fell) by more than (\d+(?:\.\d+)?)% between Year 1 and Year 2\.?$",
        stmt,
        re.I,
    )
    if m and y1 and y2:
        subj, direction, th = m.group(1), m.group(2).lower(), float(m.group(3))
        a = getv(y1, tables, subject_keys(subj), 1)
        b = getv(y2, tables, subject_keys(subj), 2)
        if a is not None and b is not None:
            g = growth(a, b) * 100
            if direction == "grew":
                return finish(
                    truth,
                    [
                        f"{subj} moves from {fmt(a)} in Year 1 to {fmt(b)} in Year 2",
                        f"That is a change of {g:.1f}%, set against the claim of more than {th:g}% growth",
                        f"So the threshold is {'met' if g > th else 'not met'}",
                    ],
                    vary,
                )
            decline = -g
            return finish(
                truth,
                [
                    f"{subj} moves from {fmt(a)} in Year 1 to {fmt(b)} in Year 2",
                    f"The decline is {decline:.1f}%, against a claim of more than {th:g}%",
                    f"The claim is therefore {'supported' if decline > th else 'not supported'}",
                ],
                vary,
            )

    m = re.match(
        r"Cash flow from operating activities grew by more than (\d+(?:\.\d+)?)% from Year 1 to Year 2\.?$",
        stmt,
        re.I,
    )
    if m and tables["y1"] and tables["y2"]:
        th = float(m.group(1))
        a = tables["y1"].get("cash flow from operating activities")
        b = tables["y2"].get("cash flow from operating activities")
        if a is not None and b is not None:
            g = growth(a, b) * 100
            return finish(
                truth,
                [
                    f"Operating cash flow rises from {fmt(a)} to {fmt(b)}",
                    f"Growth is {g:.1f}% versus the claimed hurdle of more than {th:g}%",
                    f"That {'clears' if g > th else 'misses'} the hurdle",
                ],
                vary,
            )

    m = re.match(r"The current ratio (exceeds|is below|is exactly) (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m:
        verb, th = m.group(1).lower(), float(m.group(2))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            cr = bs["ca"] / bs["cl"]
            return finish(
                truth,
                [
                    "The current ratio is current assets ÷ current liabilities — the standard short-term liquidity cover",
                    f"Here that is {fmt(bs['ca'])} ÷ {fmt(bs['cl'])} ≈ {cr:.2f}",
                    f"The claim says the ratio {verb} {th:g}; {cr:.2f} {'agrees' if truth else 'does not agree'} with that reading",
                ],
                vary,
            )

    m = re.match(r"The current ratio in Year ([12]) is exactly (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m and (y1 or y2):
        yr, th = int(m.group(1)), float(m.group(2))
        bs = y1 if yr == 1 else y2
        cr = bs["cr"]
        return finish(
            truth,
            [
                f"Year {yr} current ratio = {fmt(bs['ca'])} ÷ {fmt(bs['cl'])} ≈ {cr:.2f}",
                f"The statement claims exactly {th:.2f}",
                f"Those figures {'match' if abs(cr - th) < 0.005 else 'do not match'}",
            ],
            vary,
        )

    m = re.match(
        r"Current liabilities are covered by current assets less than (\d+(?:\.\d+)?) times over in Year ([12])\.?$",
        stmt,
        re.I,
    )
    if m and (y1 or y2):
        th, yr = float(m.group(1)), int(m.group(2))
        bs = y1 if yr == 1 else y2
        cr = bs["cr"]
        return finish(
            truth,
            [
                f"In Year {yr} the current ratio is {fmt(bs['ca'])} ÷ {fmt(bs['cl'])} ≈ {cr:.2f}",
                "That ratio is how many times current assets cover current liabilities",
                f"Cover of less than {th:g} times {'holds' if cr < th else 'does not hold'}",
            ],
            vary,
        )

    m = re.match(
        r"After excluding inventory, the remaining current assets still cover current liabilities more than (\d+(?:\.\d+)?) times over\.?$",
        stmt,
        re.I,
    )
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            acid = (bs["ca"] - bs["inventory"]) / bs["cl"]
            return finish(
                truth,
                [
                    "The acid-test (quick) ratio strips inventory out of current assets before dividing by current liabilities",
                    f"That is ({fmt(bs['ca'])} − {fmt(bs['inventory'])}) ÷ {fmt(bs['cl'])} ≈ {acid:.2f}",
                    f"Compared with more than {th:g} times cover, the claim is {'right' if acid > th else 'wrong'}",
                ],
                vary,
            )

    m = re.match(r"The acid-test ratio exceeds (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            acid = (bs["ca"] - bs["inventory"]) / bs["cl"]
            return finish(
                truth,
                [
                    f"Acid-test = (current assets − inventory) ÷ current liabilities ≈ {acid:.2f}",
                    f"The claim needs a ratio above {th:g}",
                ],
                vary,
            )

    if "working capital" in sl and (amt or y1 or y2):
        if "doubled" in sl and y1 and y2:
            return finish(
                truth,
                [
                    "Working capital is current assets minus current liabilities",
                    f"It moves from {fmt(y1['wc'])} in Year 1 to {fmt(y2['wc'])} in Year 2",
                    f"Doubling would require more than {fmt(2 * y1['wc'])}; that {'happens' if y2['wc'] > 2 * y1['wc'] else 'does not happen'}",
                ],
                vary,
            )
        if "turned positive" in sl and y1 and y2:
            return finish(
                truth,
                [
                    f"Working capital is {fmt(y1['wc'])} in Year 1 and {fmt(y2['wc'])} in Year 2",
                    f"A turn to positive needs a sign change into surplus; here that {'occurs' if y1['wc'] <= 0 < y2['wc'] else 'does not occur'}",
                ],
                vary,
            )
        bs = amt if amt.get("ca") else (y2 or y1)
        if bs:
            claim_amt = re.search(r"€\s*([\d,]+)\s*thousand", stmt, re.I)
            parts = [
                "Working capital is the euro gap between current assets and current liabilities",
                f"On this sheet: {fmt(bs['ca'])} − {fmt(bs['cl'])} = {fmt(bs['wc'])}",
            ]
            if claim_amt:
                parts.append(
                    f"The stem cites €{claim_amt.group(1)} thousand and calls it "
                    f"{'positive' if 'positive' in sl else 'the working-capital figure'}; "
                    f"the arithmetic {'supports' if truth else 'does not support'} that"
                )
            else:
                parts.append(
                    f"Working capital is {'positive' if bs['wc'] > 0 else 'not positive'} on these figures"
                )
            return finish(truth, parts, vary)

    m = re.match(r"The (equity|debt) ratio (is below|exceeds) (\d+(?:\.\d+)?)%\.?$", stmt, re.I)
    if m:
        kind, verb, th = m.group(1).lower(), m.group(2).lower(), float(m.group(3))
        bs = amt if amt.get("assets") else (y2 or y1)
        if bs and bs.get("assets"):
            num = bs["equity"] if kind == "equity" else bs["liab"]
            ratio = num / bs["assets"] * 100
            return finish(
                truth,
                [
                    f"The {kind} ratio places {kind} against total assets so the financing structure can be read at a glance",
                    f"Here {fmt(num)} ÷ {fmt(bs['assets'])} ≈ {ratio:.1f}%",
                    f"The claim says the ratio {verb} {th:g}% — {ratio:.1f}% {'fits' if truth else 'does not fit'}",
                ],
                vary,
            )

    m = re.match(
        r"Non-current liabilities amount to (more|less) than (\d+(?:\.\d+)?)% of total equity in Year ([12])\.?$",
        stmt,
        re.I,
    )
    if m and (y1 or y2):
        which, th, yr = m.group(1).lower(), float(m.group(2)), int(m.group(3))
        bs = y1 if yr == 1 else y2
        ratio = bs["ncl"] / bs["equity"] * 100 if bs["equity"] else float("nan")
        return finish(
            truth,
            [
                f"Year {yr} non-current liabilities (long-term loan + bonds) = {fmt(bs['ncl'])}",
                f"Against equity of {fmt(bs['equity'])} that is {ratio:.1f}%",
                f"The claim wants {which} than {th:g}%; {ratio:.1f}% {'satisfies' if truth else 'fails'} that test",
            ],
            vary,
        )

    m = re.match(
        r"The (equity|debt) ratio (improved|fell) by more than (\d+(?:\.\d+)?) percentage points between Year 1 and Year 2\.?$",
        stmt,
        re.I,
    )
    if m and y1 and y2:
        kind, verb, th = m.group(1).lower(), m.group(2).lower(), float(m.group(3))
        if kind == "equity":
            r1, r2 = y1["er"] * 100, y2["er"] * 100
        else:
            r1, r2 = y1["dr"] * 100, y2["dr"] * 100
        delta = r2 - r1
        return finish(
            truth,
            [
                f"The {kind} ratio is {r1:.1f}% in Year 1 and {r2:.1f}% in Year 2",
                f"The change is {delta:+.1f} percentage points against a claim that it {verb} by more than {th:g} pp",
            ],
            vary,
        )

    m = re.match(r"(.+?) make up (more|less) than (\d+(?:\.\d+)?)% of (.+?)\.?$", stmt, re.I)
    if m:
        subj, which, th, ofwhat = m.group(1), m.group(2).lower(), float(m.group(3)), m.group(4)
        ym = re.search(r"year\s*([12])", ofwhat, re.I)
        yr = int(ym.group(1)) if ym else None
        bs = y1 if yr == 1 else y2 if yr == 2 else (amt or y2 or y1)
        if bs:
            aliases = {
                "non-current assets": "nca",
                "current assets": "ca",
                "total assets": "assets",
                "inventory": "inventory",
                "trade receivables": "receivables",
                "cash and cash equivalents": "cash",
                "buildings": "buildings",
                "non-current liabilities": "ncl",
                "current liabilities": "cl",
            }
            sk = aliases.get(re.sub(r"\s+in year [12]$", "", subj.lower()).strip(), subj.lower())
            dk = aliases.get(re.sub(r"\s+in year [12]$", "", ofwhat.lower()).strip(), ofwhat.lower())
            num, den = bs.get(sk), bs.get(dk)
            if num is not None and den:
                ratio = num / den * 100
                return finish(
                    truth,
                    [
                        f"{subj} as a share of {ofwhat} is {fmt(num)} ÷ {fmt(den)} ≈ {ratio:.1f}%",
                        "Composition claims just divide the part by the whole from the extract",
                        f"The stem claims {which} than {th:g}%; {ratio:.1f}% {'backs' if truth else 'does not back'} that comparison",
                    ],
                    vary,
                )

    m = re.match(
        r"The closing share price rose by more than (\d+(?:\.\d+)?)% from first to last month\.?$",
        stmt,
        re.I,
    )
    if m and months:
        th = float(m.group(1))
        start, end = months[0]["price"], months[-1]["price"]
        rise = (end - start) / start * 100
        return finish(
            truth,
            [
                "Price appreciation from the first listed month to the last is a simple percentage change on the closes",
                f"The close moves from {fmt(start)} to {fmt(end)}, a {rise:.1f}% rise",
                f"That is {'above' if rise > th else 'not above'} the claimed hurdle of more than {th:g}%",
            ],
            vary,
        )

    m = re.match(r"Market capitalisation at the last month exceeds €(\d+(?:\.\d+)?) million\.?$", stmt, re.I)
    if m and months and amt_raw.get("shares outstanding"):
        th = float(m.group(1))
        shares = amt_raw["shares outstanding"]
        end = months[-1]["price"]
        mcap = end * shares / 1_000_000
        return finish(
            truth,
            [
                "Market capitalisation multiplies the latest close by shares outstanding",
                f"Here {fmt(end)} × {fmt(shares)} ≈ €{mcap:.2f} million",
                f"Exceeding €{th:g} million is {'true' if mcap > th else 'false'} on these inputs",
            ],
            vary,
        )

    m = re.match(r"Market capitalisation rose by more than (\d+(?:\.\d+)?)% over the period\.?$", stmt, re.I)
    if m and months and amt_raw.get("shares outstanding"):
        th = float(m.group(1))
        shares = amt_raw["shares outstanding"]
        start, end = months[0]["price"], months[-1]["price"]
        g = (end - start) / start * 100
        return finish(
            truth,
            [
                "With shares fixed, market-cap growth equals the price change from first to last close",
                f"That change is {g:.1f}% against a claim of more than {th:g}%",
            ],
            vary,
        )

    m = re.match(r"Earnings per share exceeds €(\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m and months and amt_raw.get("shares outstanding"):
        th = float(m.group(1))
        shares = amt_raw["shares outstanding"]
        op_res = amt_raw.get("operating result (€ thousands)") or amt_raw.get("operating result")
        if op_res is not None:
            eps = op_res / (shares / 1000)
            return finish(
                truth,
                [
                    "EPS here links the operating result (in € thousands) to shares outstanding",
                    f"€{fmt(op_res)} thousand ÷ {fmt(shares / 1000)} ≈ €{eps:.2f}",
                    f"Exceeding €{th:g} is {'met' if eps > th else 'not met'}",
                ],
                vary,
            )

    m = re.match(r"Highest closing price is more than (\d+(?:\.\d+)?)% above the lowest\.?$", stmt, re.I)
    if m and months:
        th = float(m.group(1))
        prices = [x["price"] for x in months]
        max_p, min_p = max(prices), min(prices)
        spread = (max_p - min_p) / min_p * 100
        return finish(
            truth,
            [
                "The high–low gap is the percentage by which the peak closing price exceeds the trough",
                f"Here ({fmt(max_p)} − {fmt(min_p)}) ÷ {fmt(min_p)} ≈ {spread:.1f}%",
                f"More than {th:g}% above the trough {'holds' if spread > th else 'fails'}",
            ],
            vary,
        )

    m = re.match(r"Total shares traded over six months exceed (\d+(?:\.\d+)?)% of shares outstanding\.?$", stmt, re.I)
    if m and months and amt_raw.get("shares outstanding"):
        th = float(m.group(1))
        shares = amt_raw["shares outstanding"]
        total_vol = amt_raw.get("total shares traded (six months)") or sum(x["vol"] for x in months)
        turn = total_vol / shares * 100
        return finish(
            truth,
            [
                f"Six-month volume ÷ shares outstanding = {fmt(total_vol)} ÷ {fmt(shares)} ≈ {turn:.1f}%",
                f"Exceeding {th:g}% of the share count is {'correct' if turn > th else 'incorrect'}",
            ],
            vary,
        )

    m = re.match(r"Peak monthly share turnover exceeds ([\d,]+) shares\.?$", stmt, re.I)
    if m and months:
        th = float(m.group(1).replace(",", ""))
        vols = [x["vol"] for x in months]
        max_vol = max(vols)
        return finish(
            truth,
            [
                f"The busiest month prints {fmt(max_vol)} shares traded",
                f"The claim needs more than {fmt(th)}; that {'is' if max_vol > th else 'is not'} satisfied",
            ],
            vary,
        )

    if months and "share turnover peaked in the same month as the highest closing price" in sl:
        prices = [x["price"] for x in months]
        vols = [x["vol"] for x in months]
        ip, iv = prices.index(max(prices)), vols.index(max(vols))
        return finish(
            truth,
            [
                f"Peak close falls in {months[ip]['month']}; peak volume falls in {months[iv]['month']}",
                f"Those months {'coincide' if ip == iv else 'differ'}, so the claim is {'true' if ip == iv else 'false'}",
            ],
            vary,
        )

    if months and "closing price rose in more than half of the month-to-month steps" in sl:
        prices = [x["price"] for x in months]
        rising = sum(1 for i in range(1, len(prices)) if prices[i] > prices[i - 1])
        steps = len(prices) - 1
        return finish(
            truth,
            [
                f"Price rose in {rising} of {steps} month-to-month steps",
                f"More than half of {steps} means more than {steps / 2:g}; the claim is {'met' if rising > steps / 2 else 'not met'}",
            ],
            vary,
        )

    if months and "last closing price is below the first" in sl:
        start, end = months[0]["price"], months[-1]["price"]
        return finish(
            truth,
            [
                "Compare the first and last closing prices in the listing window",
                f"First close {fmt(start)} versus last close {fmt(end)}",
                f"The last print is {'below' if end < start else 'not below'} the first",
            ],
            vary,
        )

    if "retained earnings grew faster than total equity" in sl and y1 and y2:
        rg, eg = growth(y1["retained"], y2["retained"]) * 100, growth(y1["equity"], y2["equity"]) * 100
        return finish(
            truth,
            [
                f"Retained earnings grow about {rg:.1f}% while total equity grows about {eg:.1f}%",
                "Compare those two growth rates from the Year 1 and Year 2 equity block",
                f"RE {'does' if rg > eg else 'does not'} outpace equity as claimed",
            ],
            vary,
        )

    # Depreciation extracts
    if any(k in sl for k in ("depreciat", "carrying value", "written down", "residual value", "useful life")):
        assets = parse_dep(tables["raw"])
        if assets:
            ann = {k: (a["cost"] - a["resid"]) / a["life"] for k, a in assets.items()}
            mach = truck = comp = None
            for k in assets:
                lk = k.lower()
                if "machin" in lk or re.search(r"asset a\b", lk):
                    mach = k
                if "truck" in lk or "delivery" in lk or re.search(r"asset b\b", lk):
                    truck = k
                if "computer" in lk or re.search(r"asset c\b", lk):
                    comp = k
            keys = list(assets.keys())
            if mach is None and keys:
                mach = keys[0]
            if truck is None and len(keys) > 1:
                truck = keys[1]
            if comp is None and len(keys) > 2:
                comp = keys[2]

            m = re.search(
                r"after three years, more than (\d+(?:\.\d+)?)% of the machinery's purchase price has been depreciated",
                stmt,
                re.I,
            )
            if m and mach:
                th = float(m.group(1))
                frac = 3 * ann[mach] / assets[mach]["cost"]
                return finish(
                    truth,
                    [
                        "Straight-line annual charge is (cost − residual) ÷ useful life; three years of charges over cost is the depreciated share",
                        f"Here 3 × {fmt(round(ann[mach]))} ÷ {fmt(assets[mach]['cost'])} ≈ {pct(frac)}%",
                        f"More than {th:g}% depreciated is {'met' if frac * 100 > th else 'not met'}",
                    ],
                    vary,
                )

            m = re.search(r"combined annual depreciation for the three assets is €([\d,.]+)", stmt, re.I)
            if m and len(ann) >= 3:
                claimed = float(m.group(1).replace(",", ""))
                total = sum(ann.values())
                return finish(
                    truth,
                    [
                        "Sum each asset's straight-line annual charge: (cost − residual) ÷ life",
                        f"Combined annual depreciation ≈ €{fmt(round(total))} versus a claimed €{fmt(claimed)}",
                    ],
                    vary,
                )

            m = re.search(r"after three years, the delivery truck's carrying value is €([\d,.]+)", stmt, re.I)
            if m and truck:
                claimed = float(m.group(1).replace(",", ""))
                a = assets[truck]
                bv = a["cost"] - 3 * ann[truck]
                return finish(
                    truth,
                    [
                        "Carrying value after three years is cost minus three annual straight-line charges",
                        f"{fmt(a['cost'])} − 3 × {fmt(round(ann[truck]))} ≈ {fmt(round(bv))}, against a claimed €{fmt(claimed)}",
                    ],
                    vary,
                )

            m = re.search(
                r"after three years, the computer equipment, originally costing €([\d,.]+), is fully written down to nil",
                stmt,
                re.I,
            )
            if m and comp:
                a = assets[comp]
                return finish(
                    truth,
                    [
                        f"Computer equipment cost €{fmt(a['cost'])} with a {fmt(a['life'])}-year life and residual €{fmt(a['resid'])}",
                        f"After three years it is {'fully written down to nil' if 3 >= a['life'] and a['resid'] == 0 else 'not yet written down to nil'}",
                    ],
                    vary,
                )

            m = re.search(
                r"after three years, the combined carrying value of all three assets exceeds €([\d,.]+)",
                stmt,
                re.I,
            )
            if m and len(assets) >= 3:
                claimed = float(m.group(1).replace(",", ""))
                total_bv = 0.0
                for k, a in assets.items():
                    if 3 >= a["life"]:
                        bv = a["resid"]
                    else:
                        bv = a["cost"] - 3 * ann[k]
                    total_bv += bv
                return finish(
                    truth,
                    [
                        "Add the three carrying values after three years of straight-line depreciation (floored at residual when life is exhausted)",
                        f"Combined carrying value ≈ €{fmt(round(total_bv))} versus a claim of more than €{fmt(claimed)}",
                    ],
                    vary,
                )

            if "land is not subject to depreciation" in sl or "land is depreciated" in sl:
                return finish(
                    truth,
                    [
                        "Land ordinarily has an indefinite useful life and is not depreciated",
                        "Buildings and machinery take straight-line (or similar) charges; land does not",
                    ],
                    vary,
                )

    # Fallback: restyle deepen try_numeric
    raw = try_numeric(stmt, truth, tables)
    if raw:
        prose = strip_math_to_prose(raw)
        # Break into sentence-ish chunks
        bits = re.split(r"(?<=[.!?])\s+", prose)
        bits = [b.strip() for b in bits if b.strip() and len(b.strip()) > 3]
        # Drop empty leftovers from robot strip
        bits = [b for b in bits if not ROBOT.search(b)]
        if not bits:
            return None
        # Soften formula-only openings
        if bits[0].startswith("Use the case figures") or bits[0].startswith("Compute"):
            pass
        # Reject leftover theory dumps
        joined = " ".join(bits)
        if any(
            x in joined
            for x in (
                "The cash-flow statement splits operating",
                "The balance sheet identity is Assets",
                "The income statement reports period performance",
            )
        ):
            return None
        return finish(truth, bits[:4], vary)

    return None


def rewrite_letter(stmt: str, truth: bool, case: dict, letter_i: int) -> str:
    tables = parse_tables(case.get("context") or "")
    vary = letter_i + (hash(case.get("case_id", "")) % 5)

    n = numeric_natural(stmt, truth, tables, vary)
    if n:
        return n

    c = conceptual_natural(stmt, truth, case.get("subsection") or "6.1", vary)
    if c:
        return c

    # Last resort: statement-tied teaching without theory dumps
    snippet = stmt if len(stmt) <= 180 else stmt[:177] + "…"
    sl = stmt.lower()
    if "cash flow" in sl or "dividends" in sl or "investing" in sl or "financing" in sl or "operating activit" in sl:
        base = [
            f"Sort the claim into operating, investing, or financing before judging it: {snippet}",
            "Operating is the trading cycle; investing is long-term assets; financing is capital from owners and lenders",
            "On that map the assertion " + ("fits" if truth else "is mislabelled"),
        ]
    elif "depreciat" in sl:
        base = [
            f"Depreciation allocates depreciable cost over useful life — read the claim against that: {snippet}",
            "It is normally non-cash, and land is not depreciated like buildings",
            "Against that rule the statement is " + ("sound" if truth else "off"),
        ]
    elif any(k in sl for k in ("revenue", "profit", "cost of sales", "gross profit", "income statement", "turnover")):
        base = [
            f"Keep period performance on the income statement: {snippet}",
            "Revenue, costs, and profit are flows for the year; assets and liabilities are balance-sheet stocks",
            "With that split the claim is " + ("right" if truth else "wrong"),
        ]
    else:
        base = [
            f"Match the wording to the chapter definition: {snippet}",
            "Check classification, measurement, or the stated comparison against the extract",
            "On that criterion the assertion " + ("holds" if truth else "does not hold"),
        ]
    return finish(truth, base, vary)


def audit_case(case: dict) -> list[str]:
    errs = []
    expls = case["tactical_explanations"]
    # duplicate full paragraphs across letters
    bodies = [re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", e).strip() for e in expls]
    if len(set(bodies)) < 3:
        errs.append(f"{case['case_id']}: too many duplicate letter bodies")
    for i, (e, k) in enumerate(zip(expls, case["answer_key"])):
        want = "TRUE — " if k else "FALSE — "
        if not e.startswith(want):
            errs.append(f"{case['case_id']} {LETTERS[i]}: bad prefix")
        if "The statement is true" in e or "The statement is false" in e:
            errs.append(f"{case['case_id']} {LETTERS[i]}: robotic closer")
        if "Name the identity in words" in e:
            errs.append(f"{case['case_id']} {LETTERS[i]}: name-identity")
        if "The wording matches the relevant rule" in e:
            errs.append(f"{case['case_id']} {LETTERS[i]}: wording-matches")
        sents = re.split(r"(?<=[.!?])\s+", re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", e))
        sents = [s for s in sents if s.strip()]
        if not (2 <= len(sents) <= 6):
            errs.append(f"{case['case_id']} {LETTERS[i]}: sentence count {len(sents)}")
    return errs


def main() -> None:
    cases = json.loads(PATH.read_text())
    n = unlock_n(len(cases))
    assert n == 218, n

    locked_snapshot = [list(c["tactical_explanations"]) for c in cases[n:]]

    lens = []
    for i, case in enumerate(cases[:n]):
        new = [
            rewrite_letter(stmt, bool(key), case, li)
            for li, (stmt, key) in enumerate(zip(case["statements"], case["answer_key"]))
        ]
        case["tactical_explanations"] = new
        for e in new:
            lens.append(len(e))

    # Verify locked untouched
    for old, case in zip(locked_snapshot, cases[n:]):
        case["tactical_explanations"] = old  # ensure identity

    PATH.write_text(json.dumps(cases, ensure_ascii=False, indent=2) + "\n")

    # Reload audit
    cases2 = json.loads(PATH.read_text())
    assert [c["tactical_explanations"] for c in cases2[n:]] == locked_snapshot

    errs = []
    for c in cases2[:n]:
        errs.extend(audit_case(c))

    shared = 0
    for c in cases2[:n]:
        firsts = [
            re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", e).split("\n")[0][:90]
            for e in c["tactical_explanations"]
        ]
        if len(set(firsts)) == 1:
            shared += 1

    print(
        json.dumps(
            {
                "unlocked_cases": n,
                "unlocked_letters": n * 5,
                "locked_cases": len(cases2) - n,
                "avg_len": round(sum(lens) / len(lens)),
                "min_len": min(lens),
                "max_len": max(lens),
                "identical_first_line_cases": shared,
                "audit_errs": len(errs),
                "sample_errs": errs[:20],
            },
            indent=2,
        )
    )
    # sample
    for idx in (0, 50, 150, 217):
        c = cases2[idx]
        print(f"\n=== SAMPLE {idx} {c['case_id']} ===")
        for L, e in zip(LETTERS, c["tactical_explanations"]):
            print(f"{L} ({len(e)}): {e[:220].replace(chr(10), ' / ')}…")


if __name__ == "__main__":
    main()
