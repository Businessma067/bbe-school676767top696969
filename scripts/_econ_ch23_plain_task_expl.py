#!/usr/bin/env python3
"""Rewrite ALL ch2–ch3 tactical_explanations as plain task answers.

Grounds each letter in statement + title + answer_key with Fuhrmann ch2/ch3
definitions. Direct answer-key voice — no teacher scaffolding or exam meta.
"""
from __future__ import annotations

import json
import re
import statistics
import sys
from pathlib import Path

ROOT = Path("/workspace")
FILES = [
    ROOT / "src/data/economics-cases-ch2-subtopics.json",
    ROOT / "src/data/economics-cases-ch3-subtopics.json",
]

KIND_PATTERNS: list[tuple[str, ...]] = [
    ("S", "M", "L", "S", "M"),
    ("M", "S", "L", "M", "S"),
    ("L", "S", "M", "L", "S"),
    ("S", "L", "M", "S", "L"),
    ("M", "L", "S", "M", "L"),
    ("L", "M", "S", "L", "M"),
    ("S", "M", "S", "L", "M"),
    ("M", "S", "M", "L", "S"),
]

FORBIDDEN = re.compile(
    r"when you hear|rehearse before|I want you to|fill the stem|neighbouring vocabulary|"
    r"at the board|concrete check:|keep the stem's own nouns|teaching move|"
    r"standard classroom sense|I would accept|I would push back|picture the actors|"
    r"look at what the sentence|say it aloud|hold the chapter map|"
    r"if you swapped in a rival label|stem nouns either fit|the auditor's opinion|"
    r"walk the nouns|strip away the surrounding|compare this wording to the trap|"
    r"once you name the right category|students often rescue|refuse the category jump|"
    r"the familiar words hide|do not let neighbouring|restore the textbook criterion|"
    r"matches the chapter reading|whichever the stem is testing|"
    r"the claim tracks|reading .+ carefully|judge the claim as printed",
    re.I,
)

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)

NOTES: dict[str, list[str]] = {
    "2.1": [
        "Note: scarcity is not poverty — high-income households still rank rival uses.",
        "Note: barter and cash are both exchange; money helps but is not required.",
        "Note: needs support basic well-being; wants are desired extras even when both have prices.",
    ],
    "2.2": [
        "Note: opportunity cost is the next-best forgone benefit, not a sum of every rejected option.",
        "Note: a zero wage does not erase opportunity cost — time still has a forgone alternative.",
    ],
    "2.3": [
        "Note: unit of analysis decides micro vs macro, not whether a government word appears.",
    ],
    "2.4": [
        "Note: inflation is a general price-level rise, not one shop's sale.",
        "Note: own-price moves you along a curve; other determinants shift it.",
    ],
    "2.5": [
        "Note: consumer sovereignty means spending signals steer production.",
    ],
    "2.6": [
        "Note: a binding ceiling below equilibrium creates shortage; a floor above creates surplus.",
    ],
    "2.7": [
        "Note: structure labels turn on seller count, product sameness, entry, and collusion.",
    ],
    "3.1": [
        "Note: leased tools remain capital — ownership is not the test.",
        "Note: labour covers office and service work, not only shop-floor muscle.",
    ],
    "3.2": [
        "Note: sector follows the firm's main activity, not the raw material's origin story.",
        "Note: GDP tracks activity; it is not a wellbeing score.",
    ],
    "3.3": [
        "Note: needing revenue is not the same as chasing owner profit as the primary aim.",
    ],
    "3.4": [
        "Note: EU size = staff headcount AND (turnover OR balance-sheet total).",
    ],
    "3.5": [
        "Note: reach is where the firm makes and/or sells, not whether an input was imported.",
    ],
    "3.6": [
        "Note: every shareholder is a stakeholder; not every stakeholder is a shareholder.",
    ],
}

OPEN_TRUE = [
    "The claim about {focus} is correct.",
    "{focus} is defined the way this sentence says.",
    "This matches the chapter definition of {focus}.",
    "The sentence accurately describes {focus}.",
    "The wording on {focus} fits the standard definition.",
    "This is a correct statement about {focus}.",
    "The assertion about {focus} holds.",
    "Yes — this is how {focus} works in the chapter.",
]

OPEN_FALSE = [
    "The claim about {focus} is wrong.",
    "This overstates or mislabels {focus}.",
    "The sentence does not hold for {focus}.",
    "The absolute wording on {focus} breaks on a counterexample.",
    "This misapplies {focus}.",
    "The claim fails on {focus}.",
    "No — this misstates {focus}.",
    "The assertion about {focus} does not survive the definition.",
]


def focus_phrase(statement: str) -> str:
    prefer = (
        "opportunity cost", "consumer sovereignty", "circular flow", "division of labour",
        "medium of exchange", "not-for-profit", "factors of production", "microeconomics",
        "macroeconomics", "perfect competition", "economic decisions", "economising",
        "scarcity", "exchange", "entrepreneurship", "entrepreneur", "goods", "services",
        "needs", "wants", "labour", "capital", "land", "primary", "secondary", "tertiary",
        "gdp", "profit", "stakeholder", "shareholder", "inflation", "barter", "equilibrium",
        "monopoly", "oligopoly", "household", "minimum wage", "law of demand", "law of supply",
    )
    skip = {"nobody", "somebody", "only", "never", "always", "once", "because", "means"}
    sl = statement.lower()
    for p in prefer:
        if p in sl:
            return p
    for w in re.findall(r"[A-Za-z][A-Za-z'-]{3,}", statement):
        if w.lower() not in skip:
            return w.lower()
    return "the claim"


def claim_snippet(statement: str, limit: int = 85) -> str:
    s = re.sub(r"\s+", " ", statement.strip()).rstrip(".")
    if len(s) <= limit:
        return s
    cut = s[: limit - 1]
    sp = cut.rfind(" ")
    if sp > 35:
        cut = cut[:sp]
    return cut.rstrip(",;:") + "…"


def context_anchor(context: str, title: str) -> str:
    """Short concrete scene — prefer titled vignettes over generic analyze-stems."""
    title = title.strip()
    if title and not re.match(
        r"^(scarcity|goods|labour|land|capital|business operations|stakeholder|sector|gdp|sme|msme)\b",
        title,
        re.I,
    ):
        return title
    cue = (context or "").strip()
    cue = re.sub(r"^(Consider|Analyze|Review|Assess)\s+", "", cue, flags=re.I)
    cue = re.sub(r"\s*Evaluate the following.*$", "", cue, flags=re.I).strip()
    cue = re.sub(r"\s+", " ", cue).rstrip(".")
    if len(cue) > 80:
        return title or cue[:77].rstrip() + "…"
    if cue and not re.match(r"^(scarcity|how|what|the distinction|statements|analyze)\b", cue, re.I):
        return cue
    return title


def clip(text: str, lo: int, hi: int) -> str:
    text = re.sub(r"\s+", " ", text.strip())
    if len(text) <= hi:
        return text if text.endswith(".") else text.rstrip(".") + "."
    cut = text[: hi - 1]
    sp = max(cut.rfind(". "), cut.rfind("; "))
    if sp >= max(40, lo // 3):
        cut = cut[: sp + 1].strip()
    else:
        sp2 = cut.rfind(" ")
        cut = (cut[:sp2] if sp2 > 40 else cut).rstrip(",;: ") + "."
    return cut


def concept_core(sub: str, statement: str) -> str:
    sl = statement.lower()
    scored: list[tuple[int, str]] = []

    def add(p: int, text: str) -> None:
        scored.append((p, text))

    if sub.startswith("2.1"):
        if (
            any(w in sl for w in ("needs and wants", "needs versus wants"))
            or (re.search(r"\bneeds\b", sl) and re.search(r"\bwants\b", sl))
            or (re.search(r"\bneed\b", sl) and re.search(r"\bwant\b", sl) and "need to" not in sl)
        ):
            add(10, "Needs support basic well-being or continued operations; wants are desired extras.")
        if "service" in sl and any(w in sl for w in ("good", "goods")):
            add(9, "Goods are tangible items you can transfer; services are intangible activities performed for someone.")
        elif "service" in sl:
            add(8, "A service is an intangible activity — repair, tutoring, preparation — not a physical object as the main product.")
        elif any(w in sl for w in ("good", "goods", "tangible", "intangible")):
            add(8, "A good is a tangible item that can be owned and handed over.")
        if any(w in sl for w in ("scarcity", "scarce")):
            add(7, "Scarcity is limited means facing rival uses. Extra income eases one budget line but does not erase every competing claim on time or money.")
        if "economis" in sl:
            add(7, "Economising is careful allocation under limits: ranking uses instead of treating stocks as infinite.")
        if any(w in sl for w in ("barter", "exchange", "trade")):
            add(6, "Exchange is any agreed swap of goods, services, or claims. Money often helps, but barter without cash still counts.")
        if any(w in sl for w in ("household", "entrepreneur", "business", "firm")):
            add(5, "Households consume and may sell labour or used goods; entrepreneurs organise production under uncertainty. Both can trade.")
        if any(w in sl for w in ("economic decision", "opt out", "inaction")):
            add(8, "Even inaction uses scarce time or money, so nobody fully opts out of economic decisions.")
        if not scored:
            add(1, "Scarcity, economising, goods versus services, needs versus wants, and exchange are the core ideas here.")

    elif sub.startswith("2.2"):
        if any(w in sl for w in ("opportunity cost", "forgone", "forgo", "sacrifice")):
            add(10, "Opportunity cost is the value of the best alternative given up — not the cash bill on the chosen option alone.")
        if any(w in sl for w in ("unpaid", "zero", "volunteer", "internship")):
            add(9, "A zero wage does not wipe opportunity cost: unpaid hours still use scarce time that could have earned income elsewhere.")
        if not scored:
            add(1, "Choices under scarcity carry opportunity cost: what you forgo by locking a resource into one use.")

    elif sub.startswith("2.3"):
        if "micro" in sl and "macro" in sl:
            add(10, "Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates.")
        elif "macro" in sl or any(w in sl for w in ("nationwide", "national", "aggregate", "economy-wide")):
            add(9, "Macroeconomics tracks whole-economy totals — not one household's purchase.")
        elif "micro" in sl:
            add(9, "Microeconomics stays with one household, one firm, or one market.")
        else:
            add(1, "Economics studies allocation of scarce resources; micro and macro split by the scope of the question.")

    elif sub.startswith("2.4"):
        if any(w in sl for w in ("public good", "non-exclud", "nonrival", "lighthouse")):
            add(10, "Public goods are hard to exclude non-payers from and often non-rival in use.")
        elif any(w in sl for w in ("division of labour", "specialis", "interdependen")):
            add(9, "Division of labour raises output per person through repetition, but it also creates interdependence across stations.")
        elif any(w in sl for w in ("circular", "factor income", "consumption")):
            add(8, "In the circular flow, firms pay households for factors and households return spending as firm revenue.")
        elif "inflation" in sl:
            add(9, "Inflation is a sustained rise in the general price level, not one shop's promotion.")
        elif any(w in sl for w in ("medium of exchange", "unit of account", "store of value", "money")):
            add(8, "Money works as medium of exchange, unit of account, and store of value — related roles that stay distinct.")
        else:
            add(1, "Money, circular flow, specialisation, and public finance organise how agents trade under scarcity.")

    elif sub.startswith("2.5"):
        if "consumer sovereignty" in sl:
            add(10, "Consumer sovereignty means household spending influences what firms produce through price and sales signals.")
        elif any(w in sl for w in ("social market", "eco-social", "mixed")):
            add(9, "A social market pairs competitive markets with social rules; eco-social variants add environmental standards.")
        else:
            add(1, "Economic systems differ in how production and distribution decisions are coordinated.")

    elif sub.startswith("2.6"):
        if any(w in sl for w in ("minimum wage", "wage floor")):
            add(10, "A binding wage floor above equilibrium reduces quantity of labour demanded and can leave surplus labour.")
        elif any(w in sl for w in ("equilibrium", "surplus", "shortage")):
            add(9, "Equilibrium is where quantity demanded equals quantity supplied.")
        elif any(w in sl for w in ("law of demand", "quantity demanded")):
            add(9, "Other things equal, a higher price lowers quantity demanded — a move along demand.")
        elif any(w in sl for w in ("law of supply", "quantity supplied")):
            add(8, "Other things equal, a higher price raises quantity supplied.")
        else:
            add(1, "Markets coordinate buyers and sellers at prices; own-price moves along curves, while other factors shift them.")

    elif sub.startswith("2.7"):
        if "perfect competition" in sl or "price taker" in sl:
            add(10, "Perfect competition asks many sellers, a homogeneous product, free entry, and good information.")
        elif "monopoly" in sl:
            add(9, "A monopoly is a single seller; local exclusivity can create monopoly-like power.")
        elif "oligopoly" in sl or "duopoly" in sl:
            add(9, "Oligopoly means few large interdependent sellers who watch each other's prices and capacity.")
        elif "cartel" in sl:
            add(9, "A cartel coordinates rivals to weaken competition — distinct from open rivalry.")
        else:
            add(1, "Competitive heat rises with more suppliers and closer substitutes.")

    elif sub.startswith("3.1"):
        if any(w in sl for w in ("labour", "labor", "human resource", "picker", "engineer", "staff", "technician", "manager", "handler")):
            add(10, "Labour is every human-resource input to production — manual or office, permanent or seasonal.")
        if any(w in sl for w in ("capital", "machine", "equipment", "leased", "inventory", "van", "barrel")):
            add(9, "Capital covers produced means of production and operating finance — owned or leased while in use.")
        if any(w in sl for w in ("land", "vineyard", "mineral", "forest", "timber", "soil", "water")):
            add(9, "Land means natural resources in use — soil, water rights, forests, minerals.")
        if any(w in sl for w in ("entrepreneur", "coordinat", "founder", "risk")):
            add(9, "Entrepreneurship organises land, labour, and capital under uncertainty.")
        if any(w in sl for w in ("knowledge", "technology", "know-how", "software", "licence", "fermentation")):
            add(8, "Knowledge and technology count as factors when applied methods raise what the firm can produce.")
        if not scored:
            add(1, "Firms combine land, labour, capital, entrepreneurship, and often knowledge to create output.")

    elif sub.startswith("3.2"):
        if "primary" in sl:
            add(10, "Primary activity extracts from nature: farming, fishing, mining, forestry.")
        if any(w in sl for w in ("secondary", "manufactur", "assembl", "mill", "smelt")):
            add(10, "Secondary activity transforms materials through manufacturing.")
        if any(w in sl for w in ("tertiary", "banking", "insurance", "retail", "service", "tourism")):
            add(9, "Tertiary activity supplies services rather than extraction or fabrication.")
        if any(w in sl for w in ("gdp", "wellbeing", "well-being", "growth")):
            add(10, "GDP totals the money value of final output inside borders; it is not a welfare score.")
        if not scored:
            add(1, "Sector labels follow the stage of activity — extract, manufacture, or serve.")

    elif sub.startswith("3.3"):
        if any(w in sl for w in ("not-for-profit", "npo", "donation", "humanitarian", "mission")):
            add(10, "Not-for-profits pursue a mission, not owner profit; surpluses usually return to the mission.")
        elif any(w in sl for w in ("break-even", "covering costs")):
            add(10, "Profit-oriented firms aim for revenue above total costs, not merely break-even.")
        elif any(w in sl for w in ("guarantees profit", "demand alone", "regardless of expense")):
            add(10, "Profit compares revenue with total costs; strong demand alone does not finish the comparison.")
        else:
            add(5, "Profit appears when revenue exceeds total costs and expenses.")

    elif sub.startswith("3.4"):
        if "micro" in sl:
            add(10, "EU micro firms need fewer than 10 staff and turnover ≤ €2m or balance sheet ≤ €2m.")
        elif "medium" in sl:
            add(10, "EU medium firms need fewer than 250 staff and turnover ≤ €50m or balance sheet ≤ €43m.")
        elif "small" in sl or "sme" in sl:
            add(9, "EU small firms need fewer than 50 staff and turnover ≤ €10m or balance sheet ≤ €10m.")
        else:
            add(5, "EU MSME classes pair a staff ceiling with a financial alternative.")

    elif sub.startswith("3.5"):
        if any(w in sl for w in ("undercapital", "local", "regional", "nearby")):
            add(10, "A local business operates in a limited area with nearby customers.")
        elif "national" in sl or "home market" in sl:
            add(9, "A national business serves the home-country market but not foreign markets.")
        elif "international" in sl or "multinational" in sl or "abroad" in sl:
            add(9, "International businesses make and/or sell in more than one country.")
        else:
            add(5, "Reach runs local → national → international depending on where the firm makes and/or sells.")

    elif sub.startswith("3.6"):
        if "stakeholder" in sl and "shareholder" in sl:
            add(10, "Shareholders own shares; they are stakeholders, but not all stakeholders are shareholders.")
        elif "greenwash" in sl or ("environment" in sl and "slogan" in sl):
            add(9, "Environmental responsibility needs concrete activities and proven results — not greenwashing.")
        elif "conflict" in sl or "trade-off" in sl:
            add(9, "Stakeholder interests often pull in different directions; management has to surface trade-offs.")
        else:
            add(5, "Businesses operate among people and groups whose interests must be considered.")

    if not scored:
        add(1, "Apply the chapter definition to the claim's exact wording rather than a neighbouring idea.")
    scored.sort(key=lambda x: -x[0])
    return scored[0][1]


def statement_reason(sub: str, statement: str, truth: bool, anchor: str) -> str | None:
    """Statement-specific middle paragraph."""
    sl = statement.lower()
    if not truth:
        if "scarcity disappears" in sl or ("salary" in sl and "scarcity" in sl):
            return (
                "A steady salary reallocates the budget — it does not abolish scarcity. "
                "Competing uses for the same euro and the same evening still remain after payday."
            )
        if "only registered businesses" in sl or ("households" in sl and "never" in sl and "economis" in sl):
            return (
                "Households rank spending every week: rent, food, transport, savings. "
                "Scarcity and economising are not privileges reserved for firms with a trade register."
            )
        if "households can never participate" in sl or ("exchange" in sl and "entrepreneur" in sl and "never" in sl):
            return (
                "Households buy, sell used goods, swap services, and barter all the time. "
                "Exchange does not require someone to hold an entrepreneur's licence on the other side."
            )
        if "goods must be intangible" in sl:
            return "Goods are tangible; services are intangible activities — this sentence reverses the pair."
        if "opportunity cost" in sl and any(w in sl for w in ("sum", "combined", "zero", "electricity", "bill")):
            return "Opportunity cost names one next-best forgone benefit, not a shopping-list total and not the cash outlay alone."
        if "macro" in sl and any(w in sl for w in ("single", "one ", "café", "cafe", "household")):
            return "One café's price change or one household's purchase stays micro. Nationwide totals mark macro scope."
        if "barter" in sl and "never" in sl:
            return "Barter is still exchange when value changes hands without cash."
        if "manual" in sl and "labour" in sl:
            return "Planners, accountants, and managers also supply labour — the factor is not shop-floor muscle alone."
        if "seasonal" in sl and "labour" in sl:
            return "Contract length does not decide the factor. Seasonal pickers still supply labour while they work."
        if "want rather than labour" in sl or ("want" in sl and "labour" in sl and "intangible" in sl):
            return "Performing a service is labour as a production factor. A household want is not the same label as a factor input."
        if "timber ready for milling is land" in sl or ("timber" in sl and "land because" in sl):
            return "Timber in inventory is a produced good stored as capital stock, not raw land still in the forest."
        if "mineral rights are capital" in sl:
            return "Mineral rights are natural-resource land inputs; tradability does not reclassify them as capital."
        if "oak barrels are land" in sl:
            return "Oak barrels are manufactured capital goods. Forest origin does not make finished barrels into land."
        if "gdp" in sl and any(w in sl for w in ("wellbeing", "well-being", "sustainable", "proves", "necessarily")):
            return "Rising GDP can accompany environmental damage or rebuild after disaster — measured output is not proof of welfare."
        if "entrepreneurship is absent" in sl or ("entrepreneurship" in sl and "absent" in sl):
            return "Ordering capital or hiring labour is often exactly when entrepreneurship is present — organising factors under uncertainty."
        if any(w in sl for w in ("only", "never", "always", "automatically", "regardless", "guarantees", "identical", "no meaningful")):
            return "Words such as only, never, always, or automatically turn a nearby true idea into an absolute you can break with one ordinary example."
        m = re.search(r"\bbecause\b\s*(.+)$", statement, re.I)
        if m:
            reason = m.group(1).strip().rstrip(".")
            return f"The because-clause fails: {reason[0].lower()}{reason[1:]} does not justify the conclusion."
    else:
        if "economis" in sl:
            return (
                "Economising is exactly what you do when money or time is limited: "
                "you compare options and refuse to spend as if the pot were infinite."
            )
        if "opt out" in sl or "inaction" in sl:
            return (
                "Keeping pocket money unspent still decides against buying something today. "
                "That is an economic choice about scarce resources — there is no neutral exit."
            )
        if "service" in sl and "intangible" in sl:
            return "Installing software or preparing a drink is work performed for someone without handing over a physical product as the main item — that is a service."
        if "vineyard" in sl or "hillside" in sl:
            return "Hillside vineyards are natural resources in productive use — that is the land factor."
        if "leased" in sl and "capital" in sl:
            return "Leased equipment still functions as capital while the firm uses it in production."
        m = re.search(r"\bbecause\b\s*(.+)$", statement, re.I)
        if m:
            reason = m.group(1).strip().rstrip(".")
            return f"The because-clause is correct: {reason[0].lower()}{reason[1:]}."
    named = re.search(
        r"\b(Tina|Steve|Jonas|Fatima|bakery|café|cafe|vineyard|winery|AT&S|RiverAid)\b",
        anchor,
        re.I,
    )
    if named:
        scene = named.group(0)
        if truth:
            return f"In the {scene} example, the nouns in the claim line up with the definition."
        return f"In the {scene} example, a concrete counterexample shows the claim does not hold."
    return None


def pick_note(sub: str, statement: str, truth: bool, case_i: int, li: int) -> str | None:
    pool = NOTES.get(sub[:3], [])
    if not pool:
        return None
    sl = statement.lower()
    for note in pool:
        key = note.split(":", 1)[-1].lower()
        if "scarcity" in sl and "poverty" in key and "scarcity" in key:
            return note
        if "opportunity cost" in sl and "opportunity" in key:
            return note
        if "barter" in sl and "barter" in key:
            return note
        if ("need" in sl or "want" in sl) and "need" in key:
            return note
        if ("micro" in sl or "macro" in sl) and "micro" in key:
            return note
        if "inflation" in sl and "inflation" in key:
            return note
        if ("shift" in sl or "curve" in sl) and "curve" in key:
            return note
        if "stakeholder" in sl and "stakeholder" in key:
            return note
        if "leased" in sl and "leased" in key:
            return note
        if "gdp" in sl and "gdp" in key:
            return note
        if ("npo" in sl or "not-for-profit" in sl or "mission" in sl) and "revenue" in key:
            return note
        if ("sme" in sl or "micro" in sl or "medium" in sl) and "headcount" in key:
            return note
        if ("international" in sl or "local" in sl) and "reach" in key:
            return note
        if "manual" in sl and "labour" in sl and "shop-floor" in key:
            return note
    if not truth and re.search(r"\b(only|never|always)\b", sl) and (case_i + li) % 5 == 0:
        for note in pool:
            if "not the same" in note.lower() or "not a" in note.lower():
                return note
    if (case_i + li) % 17 == 0:
        return pool[(case_i + li) % len(pool)]
    return None


def body_len(expl: str) -> int:
    body = CLOSER_RE.sub("", expl).strip()
    body = re.sub(r"\n\nNote:.*", "", body, flags=re.S)
    return len(body)


def build_expl(
    statement: str,
    truth: bool,
    sub: str,
    title: str,
    context: str,
    case_i: int,
    li: int,
    kind: str,
) -> str:
    focus = focus_phrase(statement)
    snippet = claim_snippet(statement)
    anchor = context_anchor(context, title)
    core = concept_core(sub, statement)
    reason = statement_reason(sub, statement, truth, anchor)

    opens = OPEN_TRUE if truth else OPEN_FALSE
    opener = opens[(case_i * 3 + li * 11) % len(opens)].format(focus=focus, snippet=snippet)

    paras: list[str] = [opener]
    if reason:
        paras.append(reason)
    elif truth and re.search(r"\bmeans\b|\bis the\b|\bare the\b", statement, re.I):
        paras.append(f"The definition matches: {core.split('.')[0]}.")
    else:
        paras.append(core.split(".")[0] + ".")

    if core not in "\n\n".join(paras):
        paras.append(core)

    if kind == "L" and anchor and len(anchor) < 60:
        if truth:
            paras.append(f"In «{anchor}», the claim fits the definition as written.")
        elif not reason or "example" not in (reason or ""):
            paras.append(f"In «{anchor}», one ordinary counterexample is enough to reject the claim.")

    # De-dupe near-identical paragraphs
    deduped: list[str] = []
    seen: set[str] = set()
    for p in paras:
        key = re.sub(r"\s+", " ", p.strip().lower())[:80]
        if key not in seen:
            deduped.append(p)
            seen.add(key)
    paras = deduped

    # Trim to kind length
    if kind == "S":
        while len(paras) > 2:
            paras.pop()
        while len(paras) < 2:
            paras.append(core.split(".")[0] + ".")
        body = "\n\n".join(paras[:2])
        if len(body) < 80:
            paras.append(core.split(".")[0] + ".")
            body = "\n\n".join(paras[:2])
        if len(body) > 280:
            body = clip(body, 80, 280)
    elif kind == "M":
        while len(paras) < 2:
            paras.append(core)
        body = "\n\n".join(paras[:3])
        if len(body) < 180:
            paras.append("Apply that definition to the claim's exact wording.")
            body = "\n\n".join(paras[:3])
        if len(body) > 520:
            body = clip(body, 180, 520)
    else:  # L
        while len(paras) < 3:
            paras.append("Apply that definition directly to the claim's nouns and the verdict follows.")
        body = "\n\n".join(paras[:4])
        if len(body) < 320:
            paras.append("The chapter criterion settles the wording once applied to the claim.")
            body = "\n\n".join(paras[:4])
        if len(body) > 720:
            body = clip(body, 320, 720)

    return body


def wrap(body: str, truth: bool, note: str | None) -> str:
    parts = [body]
    if note:
        parts.append(note)
    parts.append(f"So the statement is {'True' if truth else 'False'}.")
    return "\n\n".join(parts)


def rewrite_case(case: dict, case_i: int) -> list[str]:
    sub = case["subsection"]
    kinds = list(KIND_PATTERNS[case_i % len(KIND_PATTERNS)])
    if "L" not in kinds:
        kinds[2] = "L"
    expls: list[str] = []
    notes_used = 0
    for li, kind in enumerate(kinds):
        st = case["statements"][li]
        truth = bool(case["answer_key"][li])
        body = build_expl(st, truth, sub, case["title"], case["context"], case_i, li, kind)
        note = None
        if notes_used < 2:
            note = pick_note(sub, st, truth, case_i, li)
            if note:
                notes_used += 1
        expls.append(wrap(body, truth, note))
    return expls


def validate_file(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    issues: list[str] = []
    note_cases = 0
    note_letters = 0
    short_bodies = 0
    bad_closers = 0
    forbidden_hits = 0
    lens: list[int] = []

    for case in data:
        key = case["answer_key"]
        expls = case["tactical_explanations"]
        case_notes = sum(1 for e in expls if re.search(r"(?m)^Note:", e))
        if case_notes:
            note_cases += 1
        note_letters += case_notes
        for i, (e, k) in enumerate(zip(expls, key)):
            truth = bool(k)
            expected = f"So the statement is {'True' if truth else 'False'}."
            if not e.rstrip().endswith(expected):
                bad_closers += 1
                issues.append(f"{case['case_id']} letter {chr(65+i)}: bad closer")
            bl = body_len(e)
            lens.append(bl)
            if bl < 80:
                short_bodies += 1
                issues.append(f"{case['case_id']} letter {chr(65+i)}: body {bl} chars")
            if FORBIDDEN.search(e):
                forbidden_hits += 1
                issues.append(f"{case['case_id']} letter {chr(65+i)}: forbidden phrase")
        if case_notes > 2:
            issues.append(f"{case['case_id']}: {case_notes} notes")

    return {
        "file": path.name,
        "cases": len(data),
        "note_cases": note_cases,
        "note_letters": note_letters,
        "short_bodies": short_bodies,
        "bad_closers": bad_closers,
        "forbidden_hits": forbidden_hits,
        "body_min": min(lens) if lens else 0,
        "body_med": statistics.median(lens) if lens else 0,
        "body_max": max(lens) if lens else 0,
        "issues": issues[:20],
        "issue_count": len(issues),
    }


def rewrite_file(path: Path) -> int:
    data = json.loads(path.read_text(encoding="utf-8"))
    for i, case in enumerate(data):
        case["tactical_explanations"] = rewrite_case(case, i)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return len(data)


def main() -> int:
    # Save before sample
    ch2 = json.loads((ROOT / "src/data/economics-cases-ch2-subtopics.json").read_text())
    before_a = ch2[0]["tactical_explanations"][0]

    for path in FILES:
        n = rewrite_file(path)
        print(f"Rewrote {n} cases in {path.name}")

    ch2_after = json.loads((ROOT / "src/data/economics-cases-ch2-subtopics.json").read_text())
    after_a = ch2_after[0]["tactical_explanations"][0]

    print("\n=== CASE 2.1.01 A BEFORE ===")
    print(before_a)
    print("\n=== CASE 2.1.01 A AFTER ===")
    print(after_a)

    print("\n=== VALIDATION ===")
    ok = True
    for path in FILES:
        r = validate_file(path)
        print(json.dumps({k: v for k, v in r.items() if k != "issues"}, indent=2))
        if r["issues"]:
            print("Sample issues:", r["issues"][:5])
        if r["issue_count"]:
            ok = False

    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
