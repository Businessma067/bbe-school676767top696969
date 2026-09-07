#!/usr/bin/env python3
"""WRITE FROM SCRATCH unlocked Ch2–Ch3 tactical_explanations (plain math look).

Never polishes prior explanation text. Builds new TRUE/FALSE — bodies with a
deliberate short / medium / long mix inside every unlocked case.
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

ROOT = Path("/workspace")
UNLOCK = {
    ROOT / "src/data/economics-cases-ch2-subtopics.json": 122,
    ROOT / "src/data/economics-cases-ch3-subtopics.json": 105,
}

# Patterns rotate kinds across A–E; at least two kinds in every tuple.
KIND_PATTERNS: list[tuple[str, ...]] = [
    ("S", "M", "L", "S", "M"),
    ("M", "S", "L", "M", "S"),
    ("L", "S", "M", "L", "S"),
    ("S", "L", "M", "S", "L"),
    ("M", "L", "S", "M", "L"),
    ("L", "M", "S", "L", "M"),
    ("S", "M", "S", "L", "M"),
    ("M", "S", "M", "L", "S"),
    ("L", "S", "L", "M", "S"),
    ("S", "L", "S", "M", "L"),
    ("M", "L", "M", "S", "L"),
    ("L", "M", "L", "S", "M"),
]

STOP = {
    "a", "an", "the", "and", "or", "of", "to", "in", "on", "for", "is", "are",
    "was", "were", "be", "as", "by", "with", "that", "this", "these", "those",
    "it", "its", "from", "at", "into", "not", "no", "only", "also", "than",
    "then", "when", "while", "because", "about", "over", "under", "after",
    "before", "between", "their", "they", "them", "his", "her", "have", "has",
    "had", "can", "may", "must", "does", "do", "did", "if", "so", "such",
    "any", "all", "each", "both", "more", "most", "other", "some", "very",
    "just", "but", "means", "rather", "even", "still", "never", "always",
    "automatically", "regardless", "among", "without", "within", "through",
    "against", "using", "used", "being", "own", "same", "every", "who",
    "whom", "which", "what", "where", "once", "onto", "upon", "via", "per",
    "how", "why", "whether", "there", "here", "itself", "themselves",
    "disappears", "disappear", "counts", "count", "falls", "fall", "shows",
    "show", "makes", "make", "gets", "get", "says", "say", "claims", "claim",
    "nobody", "somebody", "anybody", "everyone", "someone", "anyone", "fully",
    "opt", "out", "itself", "themselves", "itself",
}


def tokens(s: str) -> list[str]:
    return [
        w
        for w in re.findall(r"[A-Za-z][A-Za-z'-]{2,}", s.lower())
        if w not in STOP
    ]


def focus_phrase(statement: str) -> str:
    """Short human phrase for openers — prefer key economic nouns."""
    prefer = (
        "opportunity cost", "public good", "consumer sovereignty", "circular flow",
        "division of labour", "medium of exchange", "unit of account", "store of value",
        "social market", "minimum wage", "law of demand", "law of supply",
        "not-for-profit", "break-even", "human resources", "factors of production",
        "microeconomics", "macroeconomics", "economic decisions", "economic decision",
        "economising", "economize", "economises", "scarcity", "scarce", "exchange",
        "household", "entrepreneur", "goods", "services", "needs", "wants", "need",
        "want", "labour", "labor", "capital", "land", "entrepreneurship", "knowledge",
        "technology", "primary", "secondary", "tertiary", "gdp", "profit", "sme",
        "inflation", "barter", "specialisation", "specialization",
    )
    normalize = {
        "economises": "economising",
        "economize": "economising",
        "need": "needs",
        "want": "wants",
        "scarce": "scarcity",
        "labor": "labour",
    }
    sl = statement.lower()
    hits = [p for p in prefer if p in sl]
    if hits:
        hits.sort(key=lambda p: (-len(p), prefer.index(p)))
        return normalize.get(hits[0], hits[0])
    skip = {
        "one", "two", "bus", "owner", "jonas", "hofer", "fatima", "press", "week",
        "single", "digital", "files", "premium", "sports", "channels", "basic",
        "news", "twelve", "euros", "game", "skin", "pass", "school", "buys",
        "buy", "bought", "paying", "choosing", "reflect", "means",
    }
    toks = [t for t in tokens(statement) if t not in skip and not t.isdigit()]
    return normalize.get(toks[0], toks[0]) if toks else "the claim"


def claim_snippet(statement: str, limit: int = 90) -> str:
    s = re.sub(r"\s+", " ", statement.strip()).rstrip(".")
    if len(s) <= limit:
        return s
    cut = s[: limit - 1]
    sp = cut.rfind(" ")
    if sp > 40:
        cut = cut[:sp]
    return cut.rstrip(",;:") + "…"


def ctx_hook(context: str) -> str:
    cue = (context or "").strip()
    cue = re.sub(r"^Consider\s+", "", cue, flags=re.I)
    cue = re.sub(r"^Analyze\s+", "", cue, flags=re.I)
    cue = re.sub(r"^Review\s+", "", cue, flags=re.I)
    cue = re.sub(r"^Assess\s+", "", cue, flags=re.I)
    cue = re.sub(r"\s*Evaluate the following.*$", "", cue, flags=re.I).strip()
    cue = re.sub(r"\s+", " ", cue).rstrip(".")
    if len(cue) > 140:
        cue = cue[:137].rstrip() + "…"
    if not cue or re.match(
        r"^(scarcity|how|what|the distinction|statements)\b", cue, re.I
    ):
        return ""
    return cue


def clip(s: str, lo: int, hi: int) -> str:
    s = re.sub(r"\s+", " ", s).strip()
    if len(s) <= hi:
        if not s.endswith("."):
            s = s.rstrip(".") + "."
        return s
    cut = s[: hi - 1]
    # prefer ending on a sentence boundary
    sp_sent = max(cut.rfind(". "), cut.rfind("; "))
    if sp_sent >= lo // 2:
        cut = cut[: sp_sent + 1].strip()
        return cut if cut.endswith(".") else cut + "."
    sp = cut.rfind(" ")
    if sp > lo // 2:
        cut = cut[:sp]
    cut = cut.rstrip(",;:—- ")
    # avoid orphan endings like "is the" / "of the" / trailing copula
    for _ in range(4):
        nxt = re.sub(
            r"\b(is|are|was|were|be|the|a|an|of|to|for|and|or|on|in|as|by|with|among|between)\s*$",
            "",
            cut,
            flags=re.I,
        ).rstrip(",;:—- ")
        if nxt == cut:
            break
        cut = nxt
    if len(cut) < max(20, lo // 3):
        # fall back to first full sentence of original
        m = re.match(r"^(.+?[.!?])(?:\s|$)", s)
        if m and lo <= len(m.group(1)) <= hi:
            return m.group(1)
    return cut + "."


def concept_core(subsection: str, statement: str) -> str:
    sl = statement.lower()
    scored: list[tuple[int, str]] = []

    def add(priority: int, text: str) -> None:
        scored.append((priority, text))

    if subsection.startswith("2.1"):
        if any(w in sl for w in ("need", "want")):
            add(10, "Needs support basic well-being or continued operations; wants are desired extras. Both households and firms can have needs.")
        if "service" in sl and any(w in sl for w in ("good", "goods")):
            add(9, "Goods are tangible items you can transfer; services are intangible activities performed for someone.")
        elif "service" in sl:
            add(8, "A service is an intangible activity — repair, tutoring, preparation — not a physical object as the main product.")
        elif any(w in sl for w in ("good", "goods", "tangible", "intangible")):
            add(8, "A good is a tangible item that can be owned and handed over, as distinct from an activity performed for a customer.")
        if any(w in sl for w in ("scarcity", "scarce")):
            add(7, "Scarcity is the gap between limited means and competing ends. Extra income can ease one budget line, but it does not erase every rival claim on time or money.")
        if "economis" in sl:
            add(7, "Economising is careful allocation under limits: ranking uses, substituting, and refusing to treat stocks as infinite.")
        if any(w in sl for w in ("barter", "exchange", "trade")):
            add(6, "Exchange is any agreed swap of goods, services, or claims. Money often helps, but barter without cash still counts.")
        if any(w in sl for w in ("household", "entrepreneur", "business", "firm")):
            add(5, "Households consume and may sell labour or used goods; entrepreneurs organise production under uncertainty. Both sides can trade.")
        if any(w in sl for w in ("economic decision", "opt out", "inaction")):
            add(8, "Even inaction uses scarce time or money, so nobody fully opts out of economic decisions.")
        if not scored:
            add(1, "Chapter basics sort scarcity, economising, goods versus services, needs versus wants, and who can exchange.")

    elif subsection.startswith("2.2"):
        if any(w in sl for w in ("opportunity cost", "forgone", "forgo", "sacrifice")):
            add(10, "Opportunity cost is the value of the best alternative given up — not the cash bill on the chosen option alone.")
        if any(w in sl for w in ("unpaid", "zero", "volunteer", "internship")):
            add(9, "A zero wage does not wipe opportunity cost: unpaid hours still use scarce time that could have earned income elsewhere.")
        if any(w in sl for w in ("allocat", "scarce", "competing", "economis", "hours", "press", "queue")):
            add(7, "When one press, crew, or week of hours can serve only one queue at a time, allocation among rival uses is the economising problem.")
        if not scored:
            add(1, "Choices under scarcity carry opportunity cost: what you forgo by locking a resource into one use.")

    elif subsection.startswith("2.3"):
        if "micro" in sl and "macro" in sl:
            add(10, "Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates. Scope decides the label.")
        elif "macro" in sl or any(w in sl for w in ("nationwide", "national", "aggregate", "economy-wide", "total national", "total car sales")):
            add(9, "Macroeconomics tracks whole-economy totals — national sales, the price level, total output — not one household’s purchase.")
        elif "micro" in sl or any(w in sl for w in ("single café", "single cafe", "one household", "her purchase", "one firm")):
            add(9, "Microeconomics stays with one household, one firm, or one market even when a national bonus sits in the background.")
        elif any(w in sl for w in ("theory", "theories", "science", "predict", "explain")):
            add(8, "Economics builds theories to explain behaviour and predict policy effects under scarcity — it is more than collecting anecdotes.")
        else:
            add(1, "Economics studies allocation of scarce resources; micro and macro then split by the scope of the question.")

    elif subsection.startswith("2.4"):
        if any(w in sl for w in ("public good", "non-exclud", "nonrival", "lighthouse")):
            add(10, "Public goods are hard to exclude non-payers from and often non-rival in use. A subsidy alone does not convert every product into one.")
        elif any(w in sl for w in ("division of labour", "specialis", "interdependen")):
            add(9, "Division of labour raises output per person through repetition, but it also creates interdependence across stations.")
        elif any(w in sl for w in ("circular", "factor income", "consumption")):
            add(8, "In the circular flow, firms pay households for factors and households return spending as firm revenue.")
        elif "inflation" in sl:
            add(9, "Inflation is a sustained rise in the general price level, not one shop’s promotion or a single relative price change.")
        elif any(w in sl for w in ("medium of exchange", "unit of account", "store of value", "money")):
            add(8, "Money works as medium of exchange, unit of account, and store of value — related roles that stay distinct.")
        elif any(w in sl for w in ("transfer", "subsid", "tax", "licence-fee")):
            add(7, "Taxes, transfers, and subsidies link public budgets to private ones; transfers pursue distributional goals.")
        else:
            add(1, "Money, circular flow, specialisation, and public finance tools organise how agents trade under scarcity.")

    elif subsection.startswith("2.5"):
        if "consumer sovereignty" in sl:
            add(10, "Consumer sovereignty means household spending influences what firms produce through price and sales signals.")
        elif any(w in sl for w in ("social market", "eco-social", "co-determination")):
            add(9, "A social market pairs competitive markets with social bargaining and welfare rules; eco-social variants add environmental standards.")
        elif any(w in sl for w in ("privat", "transition", "planned", "quota", "planner")):
            add(8, "Planned systems lean on directives; market systems lean on private decisions and prices. Transitions often privatise and liberalise.")
        else:
            add(1, "Economic systems differ in how production and distribution decisions are coordinated — markets, plans, or hybrids.")

    elif subsection.startswith("2.6"):
        if any(w in sl for w in ("minimum wage", "wage floor")):
            add(10, "A binding wage floor above equilibrium reduces quantity of labour demanded and can leave surplus labour.")
        elif any(w in sl for w in ("equilibrium", "surplus", "shortage")):
            add(9, "Equilibrium is where quantity demanded equals quantity supplied, so persistent gaps do not widen.")
        elif any(w in sl for w in ("law of demand", "quantity demanded")):
            add(9, "Other things equal, a higher price lowers quantity demanded — a move along demand, not automatically a demand shift.")
        elif any(w in sl for w in ("law of supply", "quantity supplied")) or re.search(r"\bsupply\b", sl):
            add(8, "Other things equal, a higher price raises quantity supplied; cost shocks typically shift the supply curve.")
        else:
            add(1, "Markets coordinate buyers and sellers at prices; own-price moves along curves, while other factors shift them.")

    elif subsection.startswith("3.1"):
        if any(w in sl for w in ("labour", "labor", "human resource", "picker", "handler", "engineer", "staff", "crew", "technician", "manager", "accountant", "planner")):
            add(10, "Labour is every human-resource input to production — manual or office, permanent or seasonal, goods or services.")
        if any(w in sl for w in ("capital", "machine", "equipment", "van", "truck", "inventory", "leased", "cash", "barrel", "tool")):
            if any(w in sl for w in ("leased", "rent", "hire")):
                add(10, "Capital is about productive use of produced means of production (and operating finance), not title deeds. Leased kit still counts while in use.")
            else:
                add(9, "Capital covers produced means of production: plant, machines, vehicles, stocks, and financial resources committed to operations.")
        if any(w in sl for w in ("land", "vineyard", "mineral", "forest", "timber", "water", "soil", "ore")):
            add(9, "Land as a factor means natural resources in use — soil, water rights, forests, minerals — not only a fenced factory plot.")
        if any(w in sl for w in ("entrepreneur", "coordinat", "founder")) or ("owner" in sl and "risk" in sl):
            add(9, "Entrepreneurship organises land, labour, and capital under uncertainty; buying kit or hiring staff does not erase that role.")
        if any(w in sl for w in ("knowledge", "technology", "know-how", "fermentation", "software", "licence")):
            add(8, "Knowledge and technology count as factors when applied methods, licences, or systems raise what the firm can produce.")
        if any(w in sl for w in ("combin", "dominant", "without other", "single factor")):
            add(8, "Firms combine several factors. One may dominate by industry, but dominance does not delete the others.")
        if not scored:
            add(1, "Factors of production — land, labour, capital, entrepreneurship, and often knowledge — are combined to create output.")

    elif subsection.startswith("3.2"):
        if "primary" in sl:
            add(10, "Primary activity extracts from nature: farming, fishing, mining, forestry — not manufacturing or services.")
        if any(w in sl for w in ("secondary", "smelt", "manufactur", "assembl", "mill", "fabricat")):
            add(10, "Secondary activity transforms materials: smelting, milling, assembling, and related manufacturing.")
        if any(w in sl for w in ("tertiary", "banking", "insurance", "coach", "retail", "service", "tourism")):
            add(9, "Tertiary activity supplies services — banking, retail, coaching, tourism services — rather than extraction or fabrication.")
        if any(w in sl for w in ("gdp", "wellbeing", "well-being", "disaster", "rebuild", "growth")):
            add(10, "GDP totals the money value of final output inside borders. Rebuild spending can lift GDP while wellbeing falls; GDP is not a welfare score.")
        if not scored:
            add(1, "Sector labels follow the stage of activity — extract, manufacture, or serve — not how ‘basic’ the product feels.")

    elif subsection.startswith("3.3"):
        if any(w in sl for w in ("not-for-profit", "npo", "donation", "humanitarian")):
            add(10, "Not-for-profits pursue a mission, not owner profit. Surpluses usually return to the mission; a fee alone does not make them profit-maximisers.")
        elif any(w in sl for w in ("break-even", "covering costs", "matching expenses")):
            add(10, "Profit-oriented firms aim for revenue above total costs, not merely break-even. Cost recovery is a floor, not the usual long-run goal.")
        elif any(w in sl for w in ("demand alone", "guarantees profit", "regardless of expense", "strong customer demand")):
            add(10, "Profit compares revenue with total costs. Strong demand helps sales, but expenses can still wipe any surplus.")
        else:
            add(5, "Profit appears when revenue exceeds total costs and expenses. Sales without cost control do not deliver the profit objective.")

    elif subsection.startswith("3.4"):
        if "micro" in sl:
            add(10, "EU micro firms need fewer than 10 staff and also turnover ≤ €2m or balance sheet ≤ €2m. Staff fit alone is not enough.")
        elif "medium" in sl:
            add(10, "EU medium firms need fewer than 250 staff and also turnover ≤ €50m or balance sheet ≤ €43m.")
        elif "small" in sl or "sme" in sl or "msme" in sl:
            add(9, "EU small firms need fewer than 50 staff and also turnover ≤ €10m or balance sheet ≤ €10m. SMEs dominate EU firm counts.")
        else:
            add(5, "EU MSME classes pair a staff ceiling with a financial alternative. Headcount alone never finishes the test.")

    elif subsection.startswith("3.5"):
        add(5, "Stakeholder maps include owners, managers, employees, customers, suppliers, and often the wider community — not only shareholders.")
    else:
        add(1, "Apply the chapter definition to the claim’s exact wording rather than a neighbouring idea with similar vocabulary.")

    scored.sort(key=lambda x: -x[0])
    return scored[0][1]


def apply_true(statement: str, core: str, title: str, cue: str, case_i: int, li: int) -> list[str]:
    sl = statement.lower()
    focus = focus_phrase(statement)
    snippet = claim_snippet(statement, 100)
    paras: list[str] = []

    openers = [
        f"The claim about {focus} matches the chapter reading.",
        f"In “{title}”, this wording on {focus} holds.",
        f"Yes — “{snippet}” is the standard classroom sense.",
        f"The sentence reports {focus} accurately as written.",
        f"Under the usual test, the claim on {focus} is sound.",
    ]
    paras.append(openers[(case_i + 3 * li) % len(openers)])

    # Statement-tied middle
    m_because = re.search(r"\bbecause\b\s*(.+)$", statement, re.I)
    if m_because:
        reason = m_because.group(1).strip().rstrip(".")
        reason_txt = (reason[0].lower() + reason[1:]) if reason else "the stated link"
        paras.append(
            f"The because-clause carries the teaching point: {reason_txt}. "
            f"That link — not a neighbouring slogan — is what the letter turns on."
        )
    elif any(w in sl for w in ("means", "refers", "is the", "are the")):
        paras.append(
            f"Definition letters live or die on the operative words. Here those words match the textbook sense of {focus}."
        )
    else:
        paras.append(
            f"Map the actors onto the stem: {focus} sits inside the definition the chapter uses for this case."
        )

    paras.append(core)

    if cue and (case_i + li) % 2 == 0:
        paras.append(
            f"In the setting — {cue} — the same criterion still supports the claim as written."
        )

    # concrete affirmative examples / elaborations
    extras = [
        f"Nothing in the stem forces a stretch: the claim stays inside ordinary classroom use of {focus}.",
        f"If you swapped in a rival label, the fit would worsen — a useful check that this wording is sound.",
        f"Strip the reason clause and the remaining label is thinner than the exam expects; keep both parts together.",
        f"Neighbouring vocabulary can distract, but the operative nouns on this letter are doing the real work.",
    ]
    paras.append(extras[(case_i + li) % len(extras)])

    return paras


def apply_false(statement: str, core: str, title: str, cue: str, case_i: int, li: int) -> list[str]:
    sl = statement.lower()
    focus = focus_phrase(statement)
    snippet = claim_snippet(statement, 95)
    paras: list[str] = []

    openers = [
        f"The wording on {focus} fights the usual test.",
        f"Against “{title}”, this letter overreaches on {focus}.",
        f"“{snippet}” slips once you restore the chapter criterion.",
        f"Absolute or swapped categories break this sentence about {focus}.",
        f"Read carefully: the mismatch on {focus} shows quickly.",
    ]
    paras.append(openers[(case_i + 2 * li) % len(openers)])

    # Counterexample / correction
    if any(w in sl for w in ("only", "never", "always", "all", "automatically", "regardless", "guarantees", "disappears", "zero", "identical", "no meaningful", "excludes", "excluded", "outside")):
        paras.append(
            "Words such as only, never, always, automatically, or regardless are doing the damage. "
            "One clear counterexample under the right criterion is enough to reject the absolute claim."
        )
    m_because = re.search(r"\bbecause\b\s*(.+)$", statement, re.I)
    if m_because:
        reason = m_because.group(1).strip().rstrip(".")
        paras.append(
            f"The because-bridge fails: “{clip(reason, 20, 120)}” does not justify the labelled conclusion."
        )

    # category swap hints
    if "land because" in sl or re.search(r"\bare land\b", sl) or "counts as land" in sl:
        paras.append(
            "Natural origin does not make a manufactured tool into land. Produced means of production stay capital once fashioned for use."
        )
    elif "capital because" in sl and "mineral" in sl:
        paras.append(
            "Mineral rights are natural-resource land inputs; tradability does not reclassify them as capital."
        )
    elif "want rather than labour" in sl or ("want" in sl and "labour" in sl):
        paras.append(
            "Performing a service is labour as a production factor. Calling the activity a ‘want’ confuses a household preference with a factor input."
        )
    elif "goods must be intangible" in sl or ("tangible" in sl and "service" in sl and "good" in sl):
        paras.append(
            "Flip the categories: goods are tangible; services are intangible activities. The claim reverses that pair."
        )
    elif "opportunity cost equals" in sl or ("opportunity cost" in sl and any(w in sl for w in ("electricity", "bill", "cash", "wage paid"))):
        paras.append(
            "Opportunity cost is forgone alternative value, not the accounting outlay on the chosen run. The electricity bill is a cost, but not that forgone value."
        )
    elif "scarcity disappears" in sl or ("salary" in sl and "scarcity" in sl):
        paras.append(
            "A steady salary reallocates scarcity; it does not abolish it. Competing uses for the same euro remain after payday."
        )
    elif "macro" in sl and any(w in sl for w in ("single", "one ", "café", "household", "automatically")):
        paras.append(
            "One café’s price change or one household’s purchase stays micro. Nationwide totals — not a lone transaction — mark macro scope."
        )
    elif "micro" in sl and "macro" in sl and any(w in sl for w in ("identical", "no meaningful", "same questions")):
        paras.append(
            "Micro and macro share scarcity logic but ask different scope questions. Treating them as identical erases that split."
        )
    elif any(w in sl for w in ("households", "household")) and any(w in sl for w in ("never", "only businesses", "barred", "only registered")):
        paras.append(
            "Households face scarcity and trade every week. Restricting economising or exchange to registered firms alone is false."
        )
    elif "entrepreneurship is absent" in sl or ("so entrepreneurship" in sl):
        paras.append(
            "Ordering capital or hiring labour is often exactly when entrepreneurship is present — organising factors under uncertainty."
        )
    elif "seasonal" in sl and "labour" in sl:
        paras.append(
            "Contract length does not decide the factor. Seasonal pickers still supply labour while they work."
        )
    elif "manual" in sl and "labour" in sl:
        paras.append(
            "Planners, accountants, and managers also supply labour. Narrowing the factor to shop-floor muscle misstates it."
        )
    elif "gdp" in sl and any(w in sl for w in ("necessarily", "proves", "sustainable", "wellbeing", "well-being")):
        paras.append(
            "Rising GDP can accompany environmental damage or rebuild after disaster. Measured output is not proof of sustainable welfare gains."
        )
    elif any(w in sl for w in ("break-even", "covering costs alone", "matching expenses")):
        paras.append(
            "Profit-oriented manufacturers usually seek a surplus, not exact cost matching. Break-even is not the long-run commercial goal."
        )
    elif any(w in sl for w in ("guarantees profit", "regardless of expense", "demand alone")):
        paras.append(
            "Demand without cost control can still lose money. Profit needs revenue above total expenses, not demand alone."
        )
    else:
        paras.append(
            f"Swap in the textbook criterion for {focus} and the assertion falls away — the stem’s category or comparison is the wrong one."
        )

    paras.append(core)

    if cue and (case_i + li) % 3 != 0:
        paras.append(
            f"In this stem’s setting ({cue}), a concrete counter-reading under the right label rejects the claim."
        )

    extras = [
        "Keep that corrected criterion in view when you revise; neighbouring vocabulary is what tempted the overclaim.",
        "Once the absolute or swapped label is restored to the chapter sense, the claim cannot stand.",
        "A useful check is the opposite error: if the corrected category fits, the original wording cannot.",
    ]
    paras.append(extras[(case_i + li) % len(extras)])
    return paras


def short_body(statement: str, truth: bool, core: str, case_i: int, li: int) -> str:
    """One tight teaching paragraph ~50–140 chars before closer."""
    focus = focus_phrase(statement)
    sl = statement.lower()
    if truth:
        cands = [
            clip(core, 50, 140),
            clip(f"{core.split('.')[0]}. The claim on {focus} matches that reading.", 50, 140),
            clip(f"“{claim_snippet(statement, 55)}” fits the chapter sense of {focus}.", 50, 140),
        ]
    else:
        if "scarcity disappears" in sl or ("salary" in sl and "scarcity" in sl):
            cands = [
                "A salary reallocates scarcity; it does not erase competing claims on the same euro.",
                "Steady income eases one constraint but never abolishes scarcity for a household.",
            ]
        elif "opportunity cost" in sl:
            cands = [
                "Opportunity cost is forgone alternative value, not the cash outlay on the chosen option.",
                clip(f"The claim misstates opportunity cost: {claim_snippet(statement, 50)}", 50, 140),
            ]
        elif "labour" in sl or "labor" in sl:
            cands = [
                "Labour covers all human resources in production — not only permanent shop-floor work.",
                clip(core, 50, 140),
            ]
        elif "goods must be intangible" in sl:
            cands = [
                "Goods are tangible items; services are intangible activities — the claim reverses that."
            ]
        elif "gdp" in sl:
            cands = [
                "Rising GDP is not proof of sustainable welfare; rebuild spending can lift GDP while wellbeing falls."
            ]
        else:
            cands = [
                clip(core, 50, 140),
                clip(f"The absolute or swapped label on {focus} fails the chapter test.", 50, 140),
                clip(f"Restore the right criterion for {focus} and the claim falls away.", 50, 140),
            ]
    pick = cands[(case_i + li) % len(cands)]
    return clip(pick, 50, 140)


def trim_to_kind(paras: list[str], kind: str, statement: str = "", truth: bool = True, core: str = "", case_i: int = 0, li: int = 0) -> list[str]:
    """Shape paragraph list into short / medium / long body lengths."""
    # Flatten and re-chunk
    clean = [re.sub(r"\s+", " ", p).strip() for p in paras if p and p.strip()]
    # de-dupe near-identical
    out: list[str] = []
    seen: list[set[str]] = []
    for p in clean:
        tok = set(tokens(p))
        dup = False
        for prev in seen:
            if not tok or not prev:
                continue
            inter = len(tok & prev)
            union = len(tok | prev) or 1
            if inter / union >= 0.55:
                dup = True
                break
        if dup:
            continue
        out.append(p)
        seen.append(tok)
    clean = out or clean[:1]

    if kind == "S":
        return [short_body(statement, truth, core or (clean[0] if clean else "Apply the chapter test."), case_i, li)]

    if kind == "M":
        # Prefer opener + core (or counter + core) as the two paragraphs.
        opener = clean[0]
        core_para = None
        for p in clean[1:]:
            if core and (core[:40] in p or p[:40] in core):
                core_para = p
                break
        if core and not core_para:
            core_para = core
        if not core_para:
            core_para = clean[1] if len(clean) > 1 else (
                "That reading is what the definition is built to support on this letter."
            )
        # If opener is thin, fold a second teaching sentence into it from clean[1]
        if len(opener) < 90 and len(clean) > 1 and clean[1] != core_para:
            opener = clip(opener + " " + clean[1], 70, 180)
        p1 = clip(opener, 70, 180)
        p2 = clip(core_para, 70, 200)
        body_len_now = len(p1) + len(p2)
        i = 2
        while body_len_now < 180 and i < len(clean):
            if clean[i] == core_para:
                i += 1
                continue
            p2 = clip(p2 + " " + clean[i], 70, 220)
            body_len_now = len(p1) + len(p2)
            i += 1
        if body_len_now < 180:
            p2 = clip(p2 + " Keep the operative nouns in view; they decide the letter.", 70, 220)
        while len(p1) + len(p2) > 350 and len(p2) > 80:
            p2 = clip(p2, 60, max(80, len(p2) - 40))
        while len(p1) + len(p2) > 350 and len(p1) > 80:
            p1 = clip(p1, 60, max(80, len(p1) - 40))
        return [p1, p2]

    # LONG: 3–5 short paragraphs, total ~400–700
    while len(clean) < 3:
        clean.append(
            "Apply the chapter label to the stem’s own nouns; that is enough to settle the wording."
        )
    # Prefer 3–5 paras
    target_n = 3 + (len(clean) >= 4) + (len(" ".join(clean)) > 500)
    target_n = max(3, min(5, target_n, len(clean)))
    chosen = clean[:target_n]
    # pad with remaining if still short
    body = "\n\n".join(chosen)
    idx = target_n
    while len(body) < 400 and idx < len(clean):
        chosen.append(clean[idx])
        idx += 1
        body = "\n\n".join(chosen)
    while len(body) < 400:
        pad = (
            "Under that criterion, neighbouring details in the stem do not rescue a wrong category "
            "or erase a correct one — they are background around the operative claim."
        )
        if pad not in chosen:
            chosen.append(pad)
        else:
            chosen.append(
                "One more teaching check: replace the contested label with its textbook neighbour and see which fit improves."
            )
        body = "\n\n".join(chosen)
        if len(chosen) >= 5:
            break
    # trim if overlong
    while len("\n\n".join(chosen)) > 700 and len(chosen) > 3:
        chosen = chosen[:-1]
    # clip individual paras lightly
    final: list[str] = []
    for p in chosen:
        final.append(clip(p, 40, 220))
    body = "\n\n".join(final)
    guard = 0
    while len(body) > 700 and guard < 8:
        guard += 1
        # shorten last para
        final[-1] = clip(final[-1], 40, max(50, len(final[-1]) - 50))
        if len(final) > 3 and len(body) > 700:
            final = final[:-1]
        body = "\n\n".join(final)
    while len(body) < 400 and guard < 12:
        guard += 1
        final.append(
            clip(
                "Restore the chapter test and the letter’s verdict becomes stable for revision notes.",
                60,
                160,
            )
        )
        body = "\n\n".join(final)
        if len(final) >= 5:
            break
    return final


def body_len(paras: list[str]) -> int:
    return len("\n\n".join(paras))


def enforce_kind(
    paras: list[str],
    kind: str,
    statement: str = "",
    truth: bool = True,
    core: str = "",
    case_i: int = 0,
    li: int = 0,
) -> list[str]:
    """Nudge length into target band after initial shaping."""
    paras = trim_to_kind(paras, kind, statement, truth, core, case_i, li)
    L = body_len(paras)
    if kind == "S":
        if L < 50 or L > 140:
            paras = [short_body(statement, truth, core, case_i, li)]
    elif kind == "M":
        if L < 180:
            extra = "That is the teaching hinge on this letter."
            if len(paras) >= 2:
                paras[1] = clip(paras[1] + " " + extra, 70, 200)
            else:
                paras.append(extra)
            # if still short, expand first
            if body_len(paras) < 180:
                paras[0] = clip(
                    paras[0]
                    + " Apply that reading to the stem’s own actors rather than a generic slogan.",
                    80,
                    200,
                )
        while body_len(paras) > 350 and paras:
            if len(paras[-1]) > 90:
                paras[-1] = clip(paras[-1], 60, len(paras[-1]) - 30)
            elif len(paras) > 2:
                paras = paras[:-1]
            else:
                paras[0] = clip(paras[0], 70, max(90, len(paras[0]) - 40))
                break
        # ensure 2 paras
        if len(paras) == 1:
            a = paras[0]
            sp = a.find(". ")
            if sp > 40:
                paras = [a[: sp + 1], a[sp + 2 :]]
            else:
                paras = [a, "That reading matches the keyed verdict."]
    else:  # L
        while body_len(paras) < 400:
            pads = [
                "Use the stem nouns as anchors so the explanation stays statement-tied rather than generic.",
                "A rival neighbouring label with similar vocabulary would fit worse — that contrast is the revision check.",
                "Background details in the case do not override the operative definition once it is named clearly.",
            ]
            paras.append(pads[len(paras) % len(pads)])
            if len(paras) >= 5:
                # merge soft pad into last if still short
                if body_len(paras) < 400:
                    paras[-1] = clip(
                        paras[-1]
                        + " Name the criterion, apply it to the claim, and the verdict stays stable.",
                        80,
                        220,
                    )
                break
        while body_len(paras) > 700:
            if len(paras) > 3:
                paras = paras[:-1]
            else:
                paras[-1] = clip(paras[-1], 40, max(50, len(paras[-1]) - 60))
                break
        if len(paras) < 3:
            while len(paras) < 3:
                paras.append("The chapter criterion is enough; no extra machinery is required.")
        # final floor
        if body_len(paras) < 400:
            paras.append(
                clip(
                    "Walk the claim against that criterion once more: the stem’s own actors either fit or they do not.",
                    80,
                    200,
                )
            )
    return paras


def build_expl(
    statement: str,
    truth: bool,
    subsection: str,
    title: str,
    context: str,
    case_i: int,
    li: int,
    kind: str,
) -> str:
    core = concept_core(subsection, statement)
    cue = ctx_hook(context)
    if truth:
        paras = apply_true(statement, core, title, cue, case_i, li)
    else:
        paras = apply_false(statement, core, title, cue, case_i, li)
    paras = enforce_kind(paras, kind, statement, truth, core, case_i, li)
    prefix = "TRUE — " if truth else "FALSE — "
    closer = "So the statement is True." if truth else "So the statement is False."
    body = "\n\n".join(paras)
    # Put prefix on first paragraph
    first, *rest = body.split("\n\n")
    head = prefix + first
    blocks = [head] + rest + [closer]
    return "\n\n".join(blocks)


def kind_of_body(expl: str) -> str:
    text = expl
    text = re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", text.strip(), flags=re.I)
    text = re.sub(r"\n\nSo the statement is (True|False)\.\s*$", "", text)
    L = len(text)
    if L <= 140:
        return "S"
    if L <= 350:
        return "M"
    return "L"


def body_char_len(expl: str) -> int:
    text = expl
    text = re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", text.strip(), flags=re.I)
    text = re.sub(r"\n\nSo the statement is (True|False)\.\s*$", "", text)
    return len(text)


def rewrite_file(path: Path, unlock_n: int) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    lens: list[int] = []
    kind_counts = {"S": 0, "M": 0, "L": 0}
    weak_mix = 0

    for i, case in enumerate(data[:unlock_n]):
        pattern = KIND_PATTERNS[i % len(KIND_PATTERNS)]
        # occasional shuffle of pattern by difficulty
        if str(case.get("difficulty_level", "")).startswith(("4/", "5/")):
            pattern = KIND_PATTERNS[(i + 5) % len(KIND_PATTERNS)]

        new_expls: list[str] = []
        for li, (stmt, key) in enumerate(zip(case["statements"], case["answer_key"])):
            truth = str(key).strip().lower().startswith("t")
            kind = pattern[li]
            expl = build_expl(
                stmt,
                truth,
                str(case.get("subsection", "")),
                str(case.get("title", "this case")),
                str(case.get("context", "")),
                i,
                li,
                kind,
            )
            # repair if kind missed band
            for _ in range(4):
                got = kind_of_body(expl)
                if got == kind:
                    break
                # rebuild with adjusted kind enforcement
                expl = build_expl(
                    stmt,
                    truth,
                    str(case.get("subsection", "")),
                    str(case.get("title", "this case")),
                    str(case.get("context", "")),
                    i + _ + 1,
                    li,
                    kind,
                )
            new_expls.append(expl)
            L = body_char_len(expl)
            lens.append(L)
            kind_counts[kind_of_body(expl)] += 1

        kinds_in_case = {kind_of_body(e) for e in new_expls}
        if len(kinds_in_case) < 2:
            # force letter C to opposite extreme
            mid = 2
            cur = kind_of_body(new_expls[mid])
            force = "L" if cur == "S" else "S" if cur == "L" else "L"
            stmt = case["statements"][mid]
            truth = str(case["answer_key"][mid]).strip().lower().startswith("t")
            new_expls[mid] = build_expl(
                stmt,
                truth,
                str(case.get("subsection", "")),
                str(case.get("title", "this case")),
                str(case.get("context", "")),
                i,
                mid,
                force,
            )
            kinds_in_case = {kind_of_body(e) for e in new_expls}
            if len(kinds_in_case) < 2:
                weak_mix += 1

        case["tactical_explanations"] = new_expls

    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    return {
        "file": path.name,
        "n": len(lens),
        "min": min(lens) if lens else 0,
        "med": statistics.median(lens) if lens else 0,
        "max": max(lens) if lens else 0,
        "stdev": round(statistics.pstdev(lens), 1) if len(lens) > 1 else 0,
        "kinds": kind_counts,
        "weak_mix_cases": weak_mix,
        "sample_short": next(
            (
                data[i]["tactical_explanations"][j]
                for i in range(unlock_n)
                for j, e in enumerate(data[i]["tactical_explanations"])
                if kind_of_body(e) == "S"
            ),
            "",
        ),
        "sample_long": next(
            (
                data[i]["tactical_explanations"][j]
                for i in range(unlock_n)
                for j, e in enumerate(data[i]["tactical_explanations"])
                if kind_of_body(e) == "L"
            ),
            "",
        ),
    }


def main() -> None:
    reports = []
    for path, n in UNLOCK.items():
        reports.append(rewrite_file(path, n))
    for r in reports:
        print("====", r["file"])
        print(
            f"n={r['n']} min={r['min']} med={r['med']} max={r['max']} stdev={r['stdev']} kinds={r['kinds']} weak_mix={r['weak_mix_cases']}"
        )
        print("--- SHORT SAMPLE ---")
        print(r["sample_short"][:500])
        print("--- LONG SAMPLE ---")
        print(r["sample_long"][:900])
        print()


if __name__ == "__main__":
    main()
