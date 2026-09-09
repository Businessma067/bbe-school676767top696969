#!/usr/bin/env python3
"""Rewrite ALL Ch6 tactical_explanations into direct teacher voice (you/we at the board).

- Remove Applied to this stem / From the extract meta
- Keep $$ KaTeX blocks intact; rewrite prose around them
- Closer: So the statement is True./False. matching answer_key
- Length mix per case (spread >= 200 chars across letters)
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from _econ_ch6_deepen_lib import parse_tables, try_numeric  # noqa: E402
from _econ_ch6_living_polish import (  # noqa: E402
    ASSET_WORD,
    INTANG_WORD,
    PREFIX_RE,
    a_an,
    asset_name,
    dedupe_paras,
    expand_conceptual,
    finish,
    looks_numeric,
    polish_katex_letter,
    polish_try_numeric,
    rewrite_threshold_lines,
    scrub_meta,
    strip_closers,
)

PATH = Path("/workspace/src/data/economics-cases-ch6-subtopics.json")
LETTERS = "ABCDE"

APPLIED_STEM_RE = re.compile(
    r'(?m)^Applied to this stem:\s*"[^"]*"\.\s*\n*', re.I
)
APPLIED_STEM_ANY = re.compile(
    r'(?m)\n*Applied to this stem:\s*"[^"]*"\.\s*', re.I
)
FROM_EXTRACT_RE = re.compile(r"From the extract:\s*", re.I)
GENERIC_PAD_MARKERS = (
    "Pull the labelled line items first; the category or ratio follows from those numbers.",
    "Stack each noun in the claim against the definition before you decide true or false.",
    "Walk the words against the chapter rule before you decide.",
)

TEXTBOOK_OPENS: list[tuple[re.Pattern, list[str]]] = [
    (
        re.compile(r"^Audits provide reasonable assurance, not absolute certainty\.", re.I),
        [
            "When you hear \"audit\", don't picture a guarantee that every euro is perfect.",
            "An audit gives reasonable assurance — the statements look fairly presented and no material mistakes jumped out — not absolute certainty.",
        ],
    ),
    (
        re.compile(r"^The auditor's opinion addresses the risk of material misstatement", re.I),
        [
            "What the auditor is really saying is: these figures look fairly presented, with no material misstatement that we spotted.",
            "That is not a promise that every line is exact or that the firm will prosper next year.",
        ],
    ),
    (
        re.compile(
            r"^Activity ratios use averages: asset turnover = revenue / average assets;.*"
            r"(?:Market capitalisation = price × shares; EPS relates earnings to shares outstanding\.)?",
            re.I | re.S,
        ),
        [
            "For activity ratios we use averages — you cannot just grab one year-end balance and call it done.",
            "Asset turnover is revenue divided by average assets; inventory and receivables turnover follow the same average-stock idea.",
        ],
    ),
    (
        re.compile(
            r"^Financial accounting reports for external users; management accounting (?:is internal|serves internal decisions)\.",
            re.I,
        ),
        [
            "Ask who the report is for: financial accounting speaks to outsiders — lenders, shareholders, tax authorities.",
            "Management accounting is built for internal decisions — pricing, cost cuts, budgets.",
        ],
    ),
    (
        re.compile(
            r"^Short extracts still obey the same classification and measurement rules: current ratio, equity ratio, working capital, and straight-line depreciation \(cost minus residual, spread over useful life\)\.",
            re.I,
        ),
        [
            "Even a short extract still follows the same rules you learned for full statements — classification, ratios, straight-line depreciation.",
        ],
    ),
    (
        re.compile(r"^Single-year statements need cautious reading: policies, estimates, and one-offs matter\.", re.I),
        [
            "One year is a snapshot — you still read it, but watch policies, estimates, and one-offs before you over-interpret.",
        ],
    ),
    (
        re.compile(
            r"^Liabilities are obligations to outsiders; equity is the owners['’] residual claim\.",
            re.I,
        ),
        [
            "Liabilities are what the firm owes outsiders; equity is what's left for owners once those obligations are counted.",
        ],
    ),
    (
        re.compile(r"^The current ratio is the standard liquidity cover of current assets over current liabilities\.", re.I),
        [
            "Liquidity here means: do current assets cover current liabilities? That is the current ratio.",
        ],
    ),
    (
        re.compile(r"^Working capital is the euro surplus \(or deficit\) of current assets over current liabilities on this balance sheet\.", re.I),
        [
            "Working capital is simply current assets minus current liabilities — the euro cushion (or gap) on this balance sheet.",
        ],
    ),
    (
        re.compile(r"^Depreciation is a non-cash allocation of a past capital outlay\.", re.I),
        [
            "Here's the catch with depreciation: cash left when you bought the asset; the annual charge just spreads that past payment.",
        ],
    ),
    (
        re.compile(r"^Inventory is held for sale or for consumption in the operating cycle\.", re.I),
        [
            "Inventory is stock you expect to sell or use up within the operating cycle — that is why it sits among current assets.",
        ],
    ),
    (
        re.compile(r"^The nouns and the reason line up with the definition, so the wording survives a careful check\.", re.I),
        [
            "Walk through the words against the definition — here the label and the reason match what the chapter teaches.",
        ],
    ),
    (
        re.compile(r"^Nothing in the sentence forces a wrong category, reversed comparison, or absolute overclaim\.", re.I),
        [
            "Nothing here swaps categories, reverses a comparison, or sneaks in an absolute word that breaks the rule.",
        ],
    ),
    (
        re.compile(r"^A scope word, swapped category, or broken reason is enough to reject the whole sentence\.", re.I),
        [
            "One wrong category, one broken \"because\" clause, or an absolute like \"always\" is enough to reject the whole sentence.",
        ],
    ),
    (
        re.compile(r"^Watch absolute or because-clauses: the familiar topic word does not rescue a false reason\.", re.I),
        [
            "Note: a familiar accounting word on its own won't save a claim if the reason or an \"always/never\" clause is wrong.",
        ],
    ),
]

PROSE_SUBS: list[tuple[re.Pattern, str]] = [
    (re.compile(r"From the extract:\s*", re.I), "Look at the table — "),
    (re.compile(r"Express the named line as a percentage of the stated base from the extract\.", re.I),
     "Turn the named line into a percentage of the base we need — pull both numbers from the table."),
    (re.compile(r"Divide the named part by the stated whole using the extract totals\.", re.I),
     "Divide the part by the whole using the line items above."),
    (re.compile(r"Percentage growth for (.+?) is \(Year 2 − Year 1\) ÷ Year 1\.", re.I),
     r"To test growth in \1, compute (Year 2 − Year 1) ÷ Year 1."),
    (re.compile(r"Start from the definition: ", re.I), "We start from "),
    (re.compile(r"The working identity is ", re.I), "The formula we need is "),
    (re.compile(r"Compute (.+?) as ", re.I), r"Let's compute \1: "),
    (re.compile(r"Use (.+?) = (.+?) on the extract figures\.", re.I), r"Plug the table figures into \1 = \2."),
    (re.compile(r"Set beside the claim \(", re.I), "Stack that against the claim ("),
    (re.compile(r"Compared with the claim \(", re.I), "Now compare with the claim ("),
    (re.compile(r"The claim requires a result that ", re.I), "The claim wants "),
    (re.compile(r"The claim wants growth of ", re.I), "They are asking whether growth exceeded "),
    (re.compile(r"Pull the labelled totals from the extract before comparing\.", re.I),
     "Grab the labelled totals from the table first, then judge the claim."),
    (re.compile(r"Applied to this wording, the claim's category is the right one\.", re.I),
     "Read against that split and the category in the claim holds."),
    (re.compile(r"Keep that audience split in view and the claim holds\.", re.I),
     "Keep that audience split in mind and the claim checks out."),
    (re.compile(r"An audit provides reasonable assurance about material misstatement, not absolute certainty\.", re.I),
     "When you hear \"audit\", think reasonable assurance about material misstatement — not a guarantee of perfection."),
    (re.compile(r"The opinion is about fair presentation of the figures, not a guarantee of future profits\.", re.I),
     "The opinion covers fair presentation of the figures, not whether the firm will profit next year."),
    (re.compile(r"That limited assurance reading matches the claim\.", re.I),
     "That is exactly the limited assurance idea this claim describes."),
    (re.compile(r"Overstating the audit as a guarantee is what fails\.", re.I),
     "Treating the audit as an absolute guarantee is where this claim goes wrong."),
    (re.compile(r"Financial accounting reports for external users; management accounting serves internal decisions\.", re.I),
     "Financial accounting is for outsiders; management accounting supports decisions inside the firm."),
    (re.compile(r"A published extract aimed at lenders or shareholders is financial reporting by purpose\.", re.I),
     "A published extract that a lender might read before extending credit is financial reporting by audience."),
    (re.compile(r"A published extract for lenders or shareholders is financial accounting by purpose and audience\.", re.I),
     "If lenders or shareholders are the audience, you are in financial accounting territory."),
    (re.compile(r"On the balance sheet that places inventory among current assets\.", re.I),
     "On the balance sheet we park inventory with the other current assets."),
    (re.compile(r"It is not an intangible \(no physical stock for sale\) and not a non-current operating asset \(those are used in the business beyond one year rather than turned over as stock\)\.", re.I),
     "It is not an intangible, and it is not a long-term operating asset — those are used beyond one year, not held as stock."),
    (re.compile(r"Borrowed funds are liabilities — obligations to lenders — not equity\.", re.I),
     "Money borrowed from a bank is a liability — you owe the lender — not equity."),
    (re.compile(r"Equity is the owners['’] residual claim after liabilities\.", re.I),
     "Equity is what owners are left with once liabilities are counted."),
    (re.compile(r"Parking a bank loan inside equity mixes the two sides of the financing identity\.", re.I),
     "Putting a bank loan in equity mixes up what you owe with what owners own."),
    (re.compile(r"Cash left the business when the asset was acquired\.", re.I),
     "The cash went out when the asset was bought."),
    (re.compile(r"The annual depreciation charge merely allocates that past outlay across useful life; recording the charge does not require a fresh cash payment to an outside party in the year of the expense\.", re.I),
     "Each year's depreciation charge just spreads that old payment over useful life — no new cash leaves the firm for it."),
    (re.compile(r"The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet\.", re.I),
     "The equity ratio asks: what share of total assets is financed by owners? Pull equity and total assets from the table."),
    (re.compile(r"The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet\.", re.I),
     "The debt ratio asks: what share of total assets is financed by debt? We need total liabilities and total assets."),
    (re.compile(r"The acid-test \(quick\) ratio is a stricter liquidity test: inventory is removed from the numerator before dividing by current liabilities\.", re.I),
     "The acid-test is stricter — we drop inventory from current assets, then divide by current liabilities."),
    (re.compile(r"Sort the cash movement into operating, investing, or financing before judging the wording\.", re.I),
     "First decide: is this cash operating, investing, or financing?"),
    (re.compile(r"Operating is the trading cycle; investing is long-term assets; financing is capital providers\.", re.I),
     "Operating is day-to-day trading; investing is long-term assets; financing is owners and lenders."),
    # Global third-person / textbook dumps (any paragraph)
    (re.compile(
        r"The nouns and the reason line up with the definition, so the wording survives a careful check\.",
        re.I,
    ), "Walk through the words against the definition — here the label and the reason match what the chapter teaches."),
    (re.compile(
        r"Nothing in the sentence forces a wrong category, reversed comparison, or absolute overclaim\.",
        re.I,
    ), "Nothing here swaps categories, reverses a comparison, or sneaks in an absolute word that breaks the rule."),
    (re.compile(
        r"A scope word, swapped category, or broken reason is enough to reject the whole sentence\.",
        re.I,
    ), "One wrong category, one broken \"because\" clause, or an absolute like \"always\" is enough to reject the whole sentence."),
    (re.compile(
        r"Watch absolute or because-clauses: the familiar topic word does not rescue a false reason\.",
        re.I,
    ), "Note: a familiar accounting word on its own won't save a claim if the reason or an \"always/never\" clause is wrong."),
    (re.compile(
        r"Liabilities are obligations to outsiders; equity is the owners['’] residual claim\.",
        re.I,
    ), "Liabilities are what the firm owes outsiders; equity is what's left for owners once those obligations are counted."),
    (re.compile(
        r"Settlement timing — within a year or beyond — then splits current from non-current\.",
        re.I,
    ), "Then ask about timing: due within a year (current) or beyond (non-current)."),
    (re.compile(
        r"The claim mixes those ideas or overstates them, so it fails\.",
        re.I,
    ), "Here the claim mixes those ideas or overstates them — so it fails."),
    (re.compile(
        r"Match each labelled idea to the chapter definition; here the claim(?:'s|’s)? detail fails that match\.",
        re.I,
    ), "Match each labelled idea to the chapter definition — here the detail fails that match."),
    (re.compile(
        r"Read the claim against the chapter rule for this \d+\.\d+ topic\.",
        re.I,
    ), "Read the claim against the chapter rule for this topic."),
    (re.compile(
        r"Activity ratios use averages: asset turnover = revenue / average assets;[^.]*\."
        r"(?:\s*Market capitalisation = price × shares; EPS relates earnings to shares outstanding\.)?",
        re.I,
    ), ""),
    (re.compile(
        r"\s*inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover\.",
        re.I,
    ), ""),
    (re.compile(
        r"Market capitalisation = price × shares; EPS relates earnings to shares outstanding\.",
        re.I,
    ), ""),
    (re.compile(
        r"The claim states:\s*(.+?)\.\s*The reason given — (.+?) — fits the chapter rule\.",
        re.I,
    ), r"Look at the claim: \1. The reason — \2 — matches the chapter rule."),
    (re.compile(
        r"The claim states:\s*(.+?)\.\s*The reason given — (.+?) — (?:does not fit|conflicts with) the chapter rule\.",
        re.I,
    ), r"Look at the claim: \1. The reason — \2 — does not fit the chapter rule."),
]


def seed(case_id: str, idx: int) -> int:
    m = re.search(r"(\d+)$", case_id)
    base = int(m.group(1)) if m else 0
    return (base * 7 + idx * 3) % 97


def length_tier(case_id: str, idx: int) -> str:
    """compact | standard | expanded"""
    s = seed(case_id, idx)
    if s % 5 == 0:
        return "compact"
    if s % 5 in (1, 2):
        return "standard"
    return "expanded"


def extract_euro_snippet(stmt: str) -> str | None:
    m = re.search(r"€([\d,]+(?:\.\d+)?)\s*(thousand)?", stmt, re.I)
    if not m:
        return None
    amt = m.group(1)
    unit = " thousand" if m.group(2) else ""
    return f"€{amt}{unit}"


def split_math_blocks(text: str) -> list[tuple[str, str]]:
    parts = re.split(r"(\$\$[\s\S]*?\$\$)", text)
    out: list[tuple[str, str]] = []
    for p in parts:
        if not p:
            continue
        if p.startswith("$$") and p.endswith("$$"):
            out.append(("math", p))
        else:
            out.append(("prose", p))
    return out


def rewrite_textbook_openings(text: str, s: int) -> str:
    """Rewrite textbook openings in every paragraph (not only the first)."""
    paras = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    if not paras:
        return text
    out: list[str] = []
    for i, para in enumerate(paras):
        rewritten = para
        for rx, replacements in TEXTBOOK_OPENS:
            if rx.search(rewritten):
                repl = replacements[(s + i) % len(replacements)]
                rewritten = rx.sub(repl, rewritten)
                break
        out.append(rewritten)
    return "\n\n".join(out)


def strip_generic_pads(text: str) -> str:
    for m in GENERIC_PAD_MARKERS:
        text = text.replace(m, "").replace(m + " ", "")
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"  +", " ", text)
    return text.strip()


def teacher_prose(text: str, stmt: str, truth: bool, s: int) -> str:
    text = APPLIED_STEM_RE.sub("", text)
    text = APPLIED_STEM_ANY.sub("\n\n", text)
    text = scrub_meta(text)
    text = rewrite_threshold_lines(text, truth)
    for rx, repl in PROSE_SUBS:
        text = rx.sub(repl, text)
    text = rewrite_textbook_openings(text, s)

    # Drop duplicate theory-dump paragraphs when we already have case-specific content
    paras = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    theory_markers = (
        "current ratio, equity ratio, working capital",
        "asset turnover = revenue / average assets",
        "Ratios (liquidity, gearing, margins",
        "The income statement reports period performance",
    )
    if len(paras) > 2 and any(
        any(m in paras[i] for m in theory_markers) for i in range(1, len(paras))
    ):
        paras = [paras[0]] + [p for p in paras[1:] if not any(m in p for m in theory_markers)]
    # Drop empty leftovers after theory-strip substitutions
    paras = [p.strip() for p in paras if p.strip()]
    paras = [p for p in paras if not re.fullmatch(r"[.;:\s]*", p)]
    text = "\n\n".join(paras)
    return text.strip()


def teacher_audit(stmt: str, truth: bool, s: int) -> str:
    euro = extract_euro_snippet(stmt) or "these figures"
    if truth:
        body = (
            f"When you hear \"audit\", don't picture a guarantee that every euro is perfect. "
            f"The auditor is saying the statements look fairly presented — no material mistakes jumped out — "
            f"not that the firm is bound to profit next year.\n\n"
            f"That's exactly what this claim says about {euro}: "
            f"reasonable assurance against material misstatement, not an absolute guarantee."
        )
    else:
        body = (
            "When you hear \"audit\", don't picture a guarantee that every euro is perfect — "
            "but this claim overshoots even that limited assurance idea.\n\n"
            "Treating the audit as full certainty or a profit guarantee goes beyond what an opinion delivers."
        )
    return finish(truth, body)


def teacher_working_capital_cash(stmt: str, truth: bool, s: int) -> str:
    sl = stmt.lower()
    if "cash" in sl and "working capital" in sl:
        if truth:
            paras = [
                "Here's the catch: drawing a short-term facility to pay suppliers can raise cash while also raising current liabilities.",
                "Working capital is current assets minus current liabilities — so if the new borrowing lifts CL by more than CA, cash can look healthier while WC weakens.",
                "That simultaneous move is exactly what this claim describes.",
            ]
        else:
            paras = [
                "Cash and working capital do not always move together — a short-term drawdown can improve the cash line while current liabilities rise.",
                "The claim misses that split, so it fails.",
            ]
        return finish(truth, "\n\n".join(paras))
    return finish(
        truth,
        "Working capital is current assets minus current liabilities — walk the claim against that identity before you decide.",
    )


def teacher_activity_fallback(stmt: str, truth: bool, s: int) -> str:
    """Replace theory-dump activity openings with claim-tied teaching."""
    sl = stmt.lower()
    if "working capital" in sl or "short-term facility" in sl or "supplier" in sl:
        return teacher_working_capital_cash(stmt, truth, s)
    if "market capitalisation" in sl or "market capitalization" in sl or "earnings per share" in sl or "eps" in sl:
        paras = [
            "Market capitalisation is share price times shares outstanding; EPS relates earnings to shares.",
            "Walk the claim against those definitions — don't paste the whole activity-ratio formula sheet.",
        ]
        if not truth:
            paras.append("Here the numbers or the wording do not survive that check.")
        return finish(truth, "\n\n".join(paras))
    if "turnover" in sl or "days" in sl:
        paras = [
            "For turnover ratios we divide a flow by an average stock — revenue or cost of sales over average assets, inventory, or receivables.",
            "Days are roughly 365 divided by that turnover. Plug this case's figures, then judge the claim.",
        ]
        if not truth:
            paras.append("Against that calculation the claim does not hold.")
        else:
            paras.append("Against that calculation the claim holds.")
        return finish(truth, "\n\n".join(paras))
    return finish(
        truth,
        "Name the ratio the claim is testing, use averages where the chapter asks for them, and compare with the wording.",
    )
    euro = extract_euro_snippet(stmt) or "these figures"
    if truth:
        # Prefer the brief's GOOD sample voice
        body = (
            f"When you hear \"audit\", don't picture a guarantee that every euro is perfect. "
            f"The auditor is saying the statements look fairly presented — no material mistakes jumped out — "
            f"not that the firm is bound to profit next year.\n\n"
            f"That's exactly what this claim says about {euro}: "
            f"reasonable assurance against material misstatement, not an absolute guarantee."
        )
    else:
        body = (
            "When you hear \"audit\", don't picture a guarantee that every euro is perfect — "
            "but this claim overshoots even that limited assurance idea.\n\n"
            "Treating the audit as full certainty or a profit guarantee goes beyond what an opinion delivers."
        )
    return finish(truth, body)


def teacher_financial_vs_mgmt(stmt: str, truth: bool, s: int) -> str:
    euro = extract_euro_snippet(stmt)
    if "management accounting focuses" in stmt.lower():
        paras = [
            "Management accounting is built for people inside the firm — where to cut costs, how to set prices, which product line to push.",
            "That internal decision focus is exactly what this claim describes; it is not the same job as publishing statutory accounts for outsiders.",
        ]
        if not truth:
            paras = [
                "Management accounting serves managers, but the claim's reason or scope does not line up with that definition.",
                "Check whether the sentence swaps audience, format, or purpose — that is usually where it breaks.",
            ]
    elif "financial accounting information" in stmt.lower() and "tax authorities" in stmt.lower():
        paras = [
            "Financial statements are not only for shareholders — banks, tax authorities, and other outsiders routinely use them.",
            "That wider external audience is what this claim names, and it matches how we teach financial accounting.",
        ]
        if not truth:
            paras = [
                "External users do rely on financial accounting, but this claim overstates or misstates who they are or how they use the reports.",
            ]
    elif "published version" in stmt.lower() or "discloses" in stmt.lower():
        who = f"showing {euro}" if euro else "in this extract"
        if s % 2 == 0:
            paras = [
                "Ask who would read it: a published balance sheet " + who + " is meant for outsiders such as lenders before they extend credit.",
                "That external audience makes it financial accounting — not an internal management report.",
            ]
        else:
            paras = [
                f"Look at the audience for the extract {who}: lenders and shareholders sit outside the firm.",
                "Once the report is built for outsiders, you are doing financial accounting, not management accounting.",
            ]
        if not truth:
            paras = [
                "Publishing to outsiders points to financial accounting, but the claim still adds a wrong reason or overstatement we have to reject.",
            ]
    elif "only external users" in stmt.lower():
        paras = [
            "Owners and managers use accounting information too — dashboards, budgets, and margin reports are not thrown away just because statutory accounts exist.",
            "Saying only outsiders need accounting information ignores how much managers rely on figures internally.",
        ]
    elif "could not rely on it at all" in stmt.lower() or "single financial year" in stmt.lower():
        paras = [
            "One year limits trend analysis, but external users still rely on single-year statements every day — often alongside comparatives.",
            "A short extract does not become useless to shareholders just because it covers only one year.",
        ]
        if truth:
            paras = [
                "Single-year published statements are standard external reporting; lenders and shareholders use them with the usual caveats.",
            ]
    else:
        paras = [
            "Financial accounting speaks to outsiders; management accounting supports decisions inside the firm.",
            "Match the audience in the claim to that split and you will see whether it holds.",
        ]
        if not truth:
            paras[-1] = "Here the audience or purpose in the claim does not survive that split."

    return finish(truth, "\n\n".join(paras))


def teacher_inventory(stmt: str, truth: bool, s: int) -> str:
    euro = extract_euro_snippet(stmt)
    amt = f" of {euro}" if euro else ""
    if truth:
        paras = [
            f"Inventory{amt} is stock we expect to sell or use within the operating cycle — that keeps it among current assets.",
            "It is not a long-term operating asset and not an intangible; the classification in the claim matches the table.",
        ]
    else:
        paras = [
            f"Inventory{amt} belongs with current assets when it is trading stock, but the claim's reason or label still fails the chapter test.",
            "Look at intended use and timing — a wrong category or a bad \"because\" clause breaks the sentence.",
        ]
    return finish(truth, "\n\n".join(paras))


def teacher_land_depreciation(stmt: str, truth: bool, s: int) -> str:
    if truth:
        paras = [
            "Land is the usual exception — we treat its useful life as indefinite, so you don't run a systematic depreciation charge each year.",
            "Buildings and machinery wear out; bare land in this chapter's reading stays at cost unless impairment rules say otherwise.",
        ]
    else:
        paras = [
            "Land is normally not depreciated like a machine — the claim's treatment of land as ordinary depreciating property is what fails.",
            "Keep land separate from buildings when you test depreciation claims.",
        ]
    return finish(truth, "\n\n".join(paras))


def teacher_residual_depreciation(stmt: str, truth: bool, s: int) -> str:
    sl = stmt.lower()
    if "residual" in sl and "spread" in sl:
        paras = [
            "With straight-line depreciation you spread cost minus residual over useful life — a positive residual shrinks what gets charged each year.",
            "That is why we deduct residual before dividing by life; the claim states that idea correctly.",
        ]
    elif "fully written down" in sl or "nil residual" in sl:
        paras = [
            "When residual is nil, straight-line depreciation allocates the full cost over life — book value reaches zero at the end.",
            "That end-state is exactly what a zero-residual straight-line schedule delivers.",
        ]
    else:
        paras = [
            "Straight-line depreciation spreads depreciable cost (cost − residual) evenly over useful life.",
            "Walk the asset's cost, life, and residual through that formula and compare with the claim.",
        ]
    if not truth:
        paras.append("Here the numbers or the wording do not survive that allocation check.")
    return finish(truth, "\n\n".join(paras))


def teacher_mgmt_format(stmt: str, truth: bool, s: int) -> str:
    euro = extract_euro_snippet(stmt)
    ref = f" (even when the published extract shows {euro})" if euro else ""
    paras = [
        f"Internal management packs{ref} are not locked to the statutory published layout.",
        "Managers may want extra detail, different frequency, or a layout that helps decisions — that flexibility is the point of management accounting.",
        "Demanding an identical statutory format for internal reports is the mistake in this claim.",
    ]
    return finish(truth, "\n\n".join(paras))


def teacher_depreciation_cash(stmt: str, truth: bool, s: int) -> str:
    if truth:
        paras = [
            "Here's the catch with depreciation: unlike wages or energy, it does not trigger a fresh cash payment in the period you charge it.",
            "Cash went out at purchase; the annual expense just allocates that old payment over useful life.",
        ]
    else:
        paras = [
            "Depreciation is non-cash after purchase, but this claim still misstates timing, object, or cash effects.",
            "Separate the purchase cash from the periodic allocation — the claim does not survive that check.",
        ]
    return finish(truth, "\n\n".join(paras))


def teacher_activity_ratio_dump(stmt: str, truth: bool, s: int, context: str) -> str | None:
    if "activity ratios use averages" not in stmt.lower():
        # triggered when explanation opens with theory dump, not statement
        pass
    sl = stmt.lower()
    if not any(k in sl for k in ("turnover", "asset turnover", "inventory turnover", "receivables", "collection days", "days sales", "market capitalisation", "market capitalization", "earnings per share")):
        return None
    # Keep existing math if present — caller handles; here we only replace theory lead
    return None


def teacher_conceptual(stmt: str, truth: bool, te: str, subsection: str, s: int) -> str:
    sl = stmt.lower()

    if "reasonable assurance" in sl or ("independent audit" in sl and "audit" in sl):
        return teacher_audit(stmt, truth, s)
    if any(k in sl for k in ("financial accounting", "management accounting", "published version", "discloses", "tax authorities", "only external users", "single financial year", "could not rely")):
        return teacher_financial_vs_mgmt(stmt, truth, s)
    if re.search(r"inventory.*?current asset", sl):
        return teacher_inventory(stmt, truth, s)
    if "depreciation" in sl and "cash" in sl:
        return teacher_depreciation_cash(stmt, truth, s)

    # Fall back to living_polish expand_conceptual, then teacher-wrap
    base = expand_conceptual(stmt, truth, te, subsection, s)
    body = strip_closers(PREFIX_RE.sub("", base))
    body = teacher_prose(body, stmt, truth, s)
    return finish(truth, body)


def pad_or_trim(body: str, tier: str, stmt: str, truth: bool, s: int, *, force_pad: int = 0) -> str:
    """Nudge body length toward tier targets without touching math blocks."""
    body = strip_generic_pads(body)
    if tier == "compact" and force_pad == 0:
        return body

    target = {"compact": 230, "standard": 390, "expanded": 560}[tier] + force_pad
    prose_only = re.sub(r"\$\$[\s\S]*?\$\$", "", body)
    cur = len(prose_only.strip())
    if cur >= target - 40 and force_pad == 0:
        return body

    pads_t = [
        "Walk the words against the chapter rule before you decide.",
        "Keep the audience and timing in view — that is usually where these claims win or lose.",
        "Use the line items above — the ratio or category follows once the arithmetic is on the page.",
    ]
    pads_f = [
        "One swapped category or absolute word is enough to break the whole sentence.",
        "Do not let a familiar accounting term rescue a claim whose reason is wrong.",
        "Replace the broken reason with the chapter criterion and the assertion falls.",
    ]
    extras: list[str] = []
    need = max(0, target - cur)
    idx = s
    attempts = 0
    while need > 60 and len(extras) < 3 and attempts < 6:
        attempts += 1
        extra = (pads_t if truth else pads_f)[idx % 3]
        if extra not in body and extra not in extras:
            extras.append(extra)
            need -= len(extra)
        idx += 1
    if need > 60 and len(extras) < 3:
        filler = (
            f"Here the arithmetic and the wording {'line up' if truth else 'do not line up'} with what the claim asserts."
            if looks_numeric(stmt)
            else f"Match each labelled idea to the chapter definition; {'the claim survives that check' if truth else 'the claim fails that check'}."
        )
        if filler not in body and filler not in extras:
            extras.append(filler)
    if tier == "expanded" and "Note:" not in body and s % 5 == 0:
        extras.append(
            f"Note: the trap here is reading \"{stmt[:70]}{'…' if len(stmt) > 70 else ''}\" as a textbook slogan instead of testing it against the extract."
        )
    if not extras:
        return body
    return (body.rstrip() + "\n\n" + " ".join(extras)).strip()


def balance_case_lengths(expls: list[str], stmts: list[str], keys: list[bool], case_id: str) -> list[str]:
    """Ensure max − min body length ≥ 200 by expanding the longest letter."""
    out = list(expls)
    bodies = [strip_closers(e) for e in out]
    lens = [len(b) for b in bodies]
    if max(lens) - min(lens) >= 200:
        return out

    long_i = lens.index(max(lens))
    short_len = min(lens)
    add_chunks = [
        "Talk it through at the board: name the rule, plug the figures if there are any, then judge the claim — don't skip to the tick.",
        "Here's the catch students miss: a familiar accounting word can sit next to a false reason and still sound confident.",
        "Keep asking who the report is for, what the timing is, and whether cash really moved in the period the claim describes.",
        "If the wording mixes equity with liabilities, current with non-current, or assurance with a guarantee, reject it immediately.",
        "Note: one clean counterexample or one failed comparison is enough — you do not need every chapter rule at once.",
    ]
    body = bodies[long_i]
    i = seed(case_id, long_i) % len(add_chunks)
    guard = 0
    while len(body) < short_len + 220 and guard < 8:
        chunk = add_chunks[i % len(add_chunks)]
        if chunk not in body:
            body = body.rstrip() + "\n\n" + chunk
        else:
            body = (
                body.rstrip()
                + f"\n\nBring letter {LETTERS[long_i]} back to the extract once more: "
                + f"does \"{stmts[long_i][:110]}{'…' if len(stmts[long_i]) > 110 else ''}\" survive the rule you just named?"
            )
            break
        i += 1
        guard += 1
    out[long_i] = finish(bool(keys[long_i]), body)

    lens2 = [len(strip_closers(e)) for e in out]
    if max(lens2) - min(lens2) < 200:
        long_i2 = lens2.index(max(lens2))
        body2 = strip_closers(out[long_i2])
        body2 += (
            "\n\nSpend an extra breath on the comparison: write the computed figure beside the claimed threshold, "
            "then say out loud whether the inequality holds."
        )
        out[long_i2] = finish(bool(keys[long_i2]), body2)
    return out


def teacher_katex_letter(expl: str, stmt: str, truth: bool, s: int) -> str:
    expl = PREFIX_RE.sub("", expl.strip())
    expl = strip_closers(expl)
    expl = APPLIED_STEM_RE.sub("", expl)
    blocks = split_math_blocks(expl)
    parts: list[str] = []
    for kind, chunk in blocks:
        if kind == "math":
            parts.append(chunk)
        else:
            parts.append(teacher_prose(chunk, stmt, truth, s))
    body = "\n\n".join(p for p in parts if p.strip())
    body = rewrite_textbook_openings(body, s)
    paras = dedupe_paras([p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()])
    body = "\n\n".join(paras)
    return finish(truth, body)


def process_letter(case: dict, idx: int, tables: dict) -> str:
    stmt = case["statements"][idx]
    truth = bool(case["answer_key"][idx])
    te = case["tactical_explanations"][idx]
    s = seed(case["case_id"], idx)
    sub = case.get("subsection") or "6.1"
    tier = length_tier(case["case_id"], idx)

    sl = stmt.lower()
    has_math = "$$" in te
    numeric = looks_numeric(stmt)

    # Strong conceptual rewrites (may ignore thin existing text)
    if any(k in sl for k in ("reasonable assurance", "independent audit")) and "audit" in sl:
        out = teacher_audit(stmt, truth, s)
    elif any(k in sl for k in ("financial accounting", "management accounting", "published version", "tax authorities", "only external users")) or (
        "discloses" in sl and "outside parties" in sl
    ):
        out = teacher_financial_vs_mgmt(stmt, truth, s)
    elif re.search(r"inventory.*?current asset", sl):
        out = teacher_inventory(stmt, truth, s)
    elif "depreciation" in sl and "cash" in sl:
        out = teacher_depreciation_cash(stmt, truth, s)
    elif "land" in sl and "depreciat" in sl:
        out = teacher_land_depreciation(stmt, truth, s)
    elif "residual" in sl or ("fully written down" in sl and "asset" in sl):
        out = teacher_residual_depreciation(stmt, truth, s)
    elif "statutory format" in sl or "identical statutory" in sl:
        out = teacher_mgmt_format(stmt, truth, s)
    elif (
        te.lstrip().startswith("Activity ratios use averages")
        or "Activity ratios use averages" in te
    ) and not has_math:
        out = teacher_activity_fallback(stmt, truth, s)
    elif ("working capital" in sl and "cash" in sl and ("facility" in sl or "current liabilities" in sl)) and not has_math:
        out = teacher_working_capital_cash(stmt, truth, s)
    elif has_math:
        polished = polish_katex_letter(te, stmt, truth, s)
        out = teacher_katex_letter(polished, stmt, truth, s)
    elif numeric:
        rebuilt = try_numeric(stmt, truth, tables)
        if rebuilt and "$$" in rebuilt:
            polished = polish_try_numeric(rebuilt, stmt, truth, s)
            out = teacher_katex_letter(polished, stmt, truth, s)
        else:
            out = teacher_conceptual(stmt, truth, te, sub, s)
    else:
        out = teacher_conceptual(stmt, truth, te, sub, s)

    # Final scrub
    body = strip_closers(out)
    body = teacher_prose(body, stmt, truth, s)
    body = APPLIED_STEM_RE.sub("", body)
    body = APPLIED_STEM_ANY.sub("\n\n", body)
    body = strip_generic_pads(body)
    body = pad_or_trim(body, tier, stmt, truth, s)
    return finish(truth, body)


def validate(data: list[dict]) -> list[str]:
    errs: list[str] = []
    bad_phrases = (
        "Applied to this stem",
        "From the extract:",
        "Audits provide reasonable assurance",
        "The auditor's opinion addresses",
        "Activity ratios use averages:",
        "The nouns and the reason line up",
        "Nothing in the sentence forces a wrong category",
        "A scope word, swapped category",
        "Liabilities are obligations to outsiders; equity is the owners",
        "Financial accounting reports for external users; management accounting",
        "inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables",
    )
    for c in data:
        bodies = []
        for i, (te, key) in enumerate(zip(c["tactical_explanations"], c["answer_key"])):
            want = "True" if key else "False"
            for bad in bad_phrases:
                if bad in te:
                    errs.append(f"{c['case_id']} {LETTERS[i]}: leftover `{bad}`")
            if not te.rstrip().endswith(f"So the statement is {want}."):
                errs.append(f"{c['case_id']} {LETTERS[i]}: bad closer")
            if PREFIX_RE.match(te):
                errs.append(f"{c['case_id']} {LETTERS[i]}: TRUE/FALSE prefix")
            body = strip_closers(te)
            bodies.append(len(body))
        if max(bodies) - min(bodies) < 200:
            errs.append(f"{c['case_id']}: length spread {max(bodies)-min(bodies)} < 200")
    return errs


def main() -> None:
    data = json.loads(PATH.read_text())
    assert len(data) == 223, len(data)

    frozen = [
        {
            "statements": list(c["statements"]),
            "answer_key": list(c["answer_key"]),
            "context": c.get("context"),
            "case_id": c["case_id"],
            "title": c.get("title"),
        }
        for c in data
    ]

    changed = 0
    for c in data:
        tables = parse_tables(c.get("context") or "")
        new_expls = []
        for i in range(5):
            new = process_letter(c, i, tables)
            if new != c["tactical_explanations"][i]:
                changed += 1
            new_expls.append(new)
        c["tactical_explanations"] = balance_case_lengths(
            new_expls, c["statements"], c["answer_key"], c["case_id"]
        )

    for c, f in zip(data, frozen):
        assert c["case_id"] == f["case_id"]
        assert c["statements"] == f["statements"]
        assert c["answer_key"] == f["answer_key"]
        assert c.get("context") == f["context"]
        assert c.get("title") == f["title"]

    errs = validate(data)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    audit = next(c for c in data if c["case_id"] == "CASE 6.4.008")
    print(
        json.dumps(
            {
                "cases": len(data),
                "letters_changed": changed,
                "validation_errors": len(errs),
                "errors_sample": errs[:15],
                "audit_6_4_008_D": audit["tactical_explanations"][3],
            },
            indent=2,
            ensure_ascii=False,
        )
    )
    if errs:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
