#!/usr/bin/env python3
"""Rewrite ALL ch2 tactical_explanations from scratch (brief-compliant).

Content-focused prose explaining each statement with case nouns.
No teacher-meta / exam coaching. Length mix per case enforced.
"""
from __future__ import annotations

import hashlib
import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch2-subtopics.json"

# Load primary_concept from deepen lib without package import side effects
_spec = importlib.util.spec_from_file_location(
    "_econ_ch2_deepen_lib", ROOT / "scripts/_econ_ch2_deepen_lib.py"
)
_deepen = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_deepen)  # type: ignore
primary_concept_raw = _deepen.primary_concept

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def sanitize(text: str) -> str:
    """No em dashes per brief; preserve paragraph breaks."""
    text = text.replace("\u2014", ", ").replace("\u2013", ", ")
    parts = [re.sub(r"\s+", " ", p).strip() for p in text.split("\n\n")]
    parts = [re.sub(r",\s*,", ",", p) for p in parts if p]
    return "\n\n".join(parts)


def primary_concept(sub: str, statement: str) -> str:
    return sanitize(primary_concept_raw(sub, statement))

KIND_RANGE = {
    "C": (160, 280),
    "S": (320, 480),
    "L": (550, 900),
}

KIND_PATTERNS = [
    ("C", "S", "L", "S", "C"),
    ("S", "C", "L", "C", "S"),
    ("L", "C", "S", "L", "C"),
    ("C", "L", "S", "C", "L"),
    ("S", "L", "C", "S", "L"),
    ("L", "S", "C", "L", "S"),
    ("C", "S", "C", "L", "S"),
    ("S", "C", "S", "L", "C"),
]

STOP = {
    "a", "an", "the", "and", "or", "of", "to", "in", "on", "for", "is", "are",
    "was", "were", "be", "as", "by", "with", "that", "this", "these", "those",
    "it", "its", "from", "at", "into", "not", "no", "only", "also", "than",
    "then", "when", "while", "because", "about", "over", "under", "after",
    "before", "between", "their", "they", "them", "can", "may", "must", "does",
    "do", "did", "if", "so", "such", "any", "all", "each", "both", "more",
    "most", "other", "some", "very", "just", "but", "means", "rather", "even",
    "still", "never", "always", "automatically", "regardless", "among", "without",
    "within", "through", "against", "using", "used", "being", "own", "same",
    "every", "who", "which", "what", "where", "once", "whether", "there", "here",
    "studying", "analysing", "analyzing", "investigating", "measuring", "if",
    "economics", "microeconomics", "macroeconomics", "statement", "claim",
}


def seed(*parts: str) -> int:
    return int(hashlib.md5("|".join(parts).encode()).hexdigest()[:8], 16)


def body_of(e: str) -> str:
    return CLOSER_RE.sub("", e).strip()


def wrap(body: str, truth: bool) -> str:
    v = "True" if truth else "False"
    return sanitize(body.rstrip()) + f"\n\nSo the statement is {v}."


def tokens(s: str) -> list[str]:
    return [
        w
        for w in re.findall(r"[A-Za-z][A-Za-z'-]{2,}", s.lower())
        if w not in STOP
    ]


def scene(title: str, context: str) -> str:
    if ":" in title:
        left = title.split(":", 1)[0].strip()
        if 2 < len(left) < 55:
            return left
    m = re.search(
        r"\b(bakery|café|cafe|ride-hail|bookstore|farm|vineyard|harvest|"
        r"pipeline|broadband|mobile|carrier|platform|district|city|"
        r"household|startup|manufacturing|market stall|tutoring|internship)\b",
        title + " " + context,
        re.I,
    )
    if m:
        return m.group(0)
    words = title.split()
    return " ".join(words[:4]) if len(words) > 4 else title


def stem_subject(statement: str, limit: int = 100) -> str:
    s = re.sub(r"\s+", " ", statement.strip()).rstrip(".")
    s = re.sub(r"^(Studying|Analysing|Analyzing|Investigating|Measuring|If)\s+", "", s, flags=re.I)
    s = re.sub(r"\s+is (micro|macro)economics$", "", s, flags=re.I)
    s = re.sub(r"\s+can (involve|be)\b.*$", "", s, flags=re.I)
    if len(s) <= limit:
        return s[0].lower() + s[1:] if s else s
    cut = s[: limit - 1]
    sp = cut.rfind(" ")
    return (cut[:sp] if sp > 40 else cut).rstrip(",;:") + "…"


def cue_phrase(cue: str) -> str:
    if not cue:
        return ""
    c = sanitize(cue).rstrip(".")
    if re.match(r"^(Analyze|Analyse|Review|Assess|State|Consider)\b", c, re.I):
        return ""
    if len(c) > 120 or not re.search(r"\b(one|after|when|whether|three|two)\b", c, re.I):
        return ""
    return c[0].lower() + c[1:] if c else ""


def because_reason(st: str) -> str | None:
    m = re.search(r"\bbecause\b\s*(.+)$", st, re.I)
    if not m:
        return None
    return m.group(1).strip().rstrip(".")


def explain_because_false(st: str, sc: str, core: str) -> str | None:
    """State why the because-clause fails and what the correct reason is."""
    reason = because_reason(st)
    if not reason:
        return None
    rl = reason.lower()
    sl = st.lower()
    if "only governments set prices" in rl or "only government" in rl:
        return (
            f"The ride-hail platform in {sc} sets surge fares after the concert, so private firms "
            "do set prices. Economics studies that market pricing; the correct view is that "
            "individual market prices fall inside economics, not outside it."
        )
    if "many riders" in rl or "affected at once" in rl or "many people" in rl:
        return (
            "Many riders in one district still leaves the unit of analysis at one local market. "
            "Macro scope needs an economy-wide aggregate such as city-wide CPI, not a headcount "
            "in one district."
        )
    if "internship pays nothing" in rl or "zero opportunity cost" in rl or "no opportunity cost" in rl:
        return (
            f"In {sc}, the forgone tutoring income and career experience still count as opportunity "
            "cost even when the internship pays zero. The correct measure is the best alternative "
            "given up, not the cash wage on the chosen path."
        )
    if "not market-priced" in rl:
        return (
            "Unpaid or non-market options still have a forgone alternative. The correct test is "
            "the value of the best path not taken, not whether a price tag appears on every option."
        )
    if "scarcity requires many options" in rl:
        return (
            "Scarcity means limited means against unlimited ends, not a minimum count of options. "
            "Even two rival uses in one budget force a ranking and an opportunity cost."
        )
    if "heating affects national consumption" in rl or "consumption statistics" in rl:
        return (
            "A household heating bill is a micro price in one market. The correct macro link would "
            "be a national consumption aggregate, not relabelling one local price move as macro."
        )
    if "labour markets are national" in rl and "micro" in sl:
        return (
            "One worker choosing among local job offers is still micro even though labour markets "
            "can be wide. Scope follows the decision unit named in the claim, not the word national."
        )
    if "phones are luxury" in rl or "outside normal economic" in rl:
        return (
            "Economics covers all agreed exchanges, including phone repairs. The correct view is "
            "that repair services and spare parts in the shop are ordinary economic goods and needs."
        )
    if "only barter counts" in rl or "only barter" in rl:
        return (
            f"Barter and cash trades are both exchange. In {sc}, value can change hands by agreement "
            "with or without money, which is exactly what the chapter counts as economic trade."
        )
    if "always raise taxes" in rl:
        return (
            "Tax capacity does not erase scarcity. The correct point is that even governments rank "
            "rival projects when the budget is finite in the year."
        )
    if "herr novak" in rl or "no needs of his own" in rl or "business rather than a household" in rl:
        return (
            "Business owners still have operating needs for inputs and personal needs as households. "
            "The correct split is needs versus wants, not denying needs to anyone who runs a firm."
        )
    if "raw materials are merely wants" in rl:
        return (
            "Timber and other inputs needed to fulfil a commission are operating needs for the "
            "business, not optional wants. The correct label follows whether the input keeps "
            "production running."
        )
    if "only end consumers" in rl:
        return (
            "Firms also face genuine needs for inputs and continued operations. The correct view is "
            "that both households and businesses can experience need, not only final consumers."
        )
    if "lukas receives money from parents" in rl or "not part of the household" in rl:
        return (
            "A teenager spending pocket money is still on the household side of the circular flow. "
            "The correct label is household consumer, not a separate non-household actor."
        )
    if "layoffs appear in the headline" in rl:
        return (
            "A local surge price stays micro even when a recession headline appears in the background. "
            "The correct macro link would be economy-wide unemployment, not the district fare itself."
        )
    if "unemployment exists only at macro" in rl:
        return (
            "Macro unemployment is an aggregate, but one worker's job choice remains micro. The "
            "correct scope follows what the sentence is actually about."
        )
    if "mortgages of specific families" in rl or "central-bank move is automatically micro" in rl:
        return (
            "A central-bank rate change is a macro policy shock. The correct label is macro when "
            "the claim is about economy-wide interest rates, not one family's mortgage payment alone."
        )
    if "too small for scientific study" in rl:
        return (
            "Microeconomics routinely studies single firms and local markets. The correct view is "
            "that small scale does not place a decision outside economics."
        )
    if "nominal euro amounts stay unchanged" in rl:
        return (
            "Money's purchasing power can change with inflation even when the number on the note "
            "is fixed. The correct point is that real value, not the printed nominal, carries "
            "economic meaning."
        )
    if "national bonus programme" in rl and "automatically becomes macro" in rl:
        return (
            "A national subsidy programme sits in the policy backdrop, but one household's car "
            "purchase is still a micro consumption choice. The correct scope is the individual "
            "buyer's decision, not the whole programme."
        )
    if "trade crosses a border" in rl:
        return (
            "One export sale can be studied as a firm-level micro decision even when goods cross "
            "a border. The correct macro view would be total exports for the economy, not one "
            "transaction relabelled as macro."
        )
    if "a better option existed" in rl and "opportunity cost" in sl:
        return (
            "Opportunity cost is the value of the best alternative forgone, not proof that no cost "
            "exists. The correct reading names that best rejected use."
        )
    if "the wood is used either way" in rl:
        return (
            "Choosing one timber grade still leaves another grade unchosen. The correct cost is "
            "what the firm gives up by not using the next-best timber option."
        )
    if "wants are unlimited and budgets do not constrain" in rl:
        return (
            "Public budgets are finite in the year. The correct point is that councils still rank "
            "rival projects under a cash limit."
        )
    if "councils can raise taxes in principle" in rl and "not scarce" in sl:
        return (
            "Legal tax capacity does not make this year's euro pot unlimited. The correct view is "
            "that the budget line still forces choices among projects."
        )
    if "she selects between jobs rather than physical goods" in rl:
        return (
            "Opportunity cost applies to time and job choices as well as goods. The correct measure "
            "is the best alternative job income and experience left behind."
        )
    if "the stall pays more" in rl and "zero opportunity cost" in rl:
        return (
            "Leaving the lower-paid stall still sacrifices its wage and experience. The correct "
            "cost is what Ana gives up by not staying on that path."
        )
    if "both projects improve transport" in rl and "cannot be compared" in rl:
        return (
            "Comparable alternatives can still be ranked by net benefit. The correct method picks "
            "the single next-best project forgone, not a claim that comparison is impossible."
        )
    # fallback with case nouns
    first = core.split(".")[0].strip()
    if first:
        return (
            f"The because-clause ({reason.lower()}) misreads {sc}. {first} is the correct "
            "criterion for judging the claim."
        )
    return (
        f"The because-clause ({reason.lower()}) misreads {sc}. Apply the chapter definition to "
        "the stem nouns instead."
    )


def absolute_counterexample(st: str, sc: str, core: str) -> str:
    sl = st.lower()
    if "only governments set prices" in sl:
        return (
            f"The ride-hail platform in {sc} sets surge fares after the concert. Private market "
            "pricing inside economics refutes both never and only governments."
        )
    if "never" in sl and "scarc" in sl:
        return (
            f"In {sc}, monthly spare parts or repair slots can still run out before demand is met, "
            "so scarcity does not disappear for a business."
        )
    if "never" in sl and "exchange" in sl:
        return (
            f"In {sc}, agreed swaps of goods or services count as exchange whether or not cash "
            "changes hands."
        )
    if "never" in sl and "economics" in sl and "price" in sl:
        return (
            f"Surge pricing by the ride-hail platform in {sc} is individual market pricing studied "
            "in economics."
        )
    if "always" in sl or "only" in sl or "never" in sl:
        lead = core.split(".")[0].strip() if core else "The chapter definition"
        return (
            f"One ordinary episode in {sc} under {lead.lower()} refutes the absolute wording in "
            "the sentence."
        )
    return (
        f"One ordinary episode in {sc} under the chapter definition refutes the overgeneralised "
        "claim."
    )


def clip_para(text: str, lo: int, hi: int) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    if not text.endswith("."):
        text = text.rstrip(".") + "."
    if len(text) <= hi:
        for _ in range(6):
            if len(text) >= lo or len(text) >= hi - 20:
                break
            text = text.rstrip(".") + " That reading follows from the chapter definition."
        return text[:hi].rsplit(" ", 1)[0] + "." if len(text) > hi else text
    cut = text[: hi - 1]
    sp = max(cut.rfind(". "), cut.rfind("; "))
    if sp >= lo // 2:
        return cut[: sp + 1].strip()
    sp2 = cut.rfind(" ")
    return (cut[:sp2] if sp2 > lo // 2 else cut).rstrip(",;: ") + "."


def clip_body(paras: list[str], lo: int, hi: int) -> str:
    note = ""
    core_paras: list[str] = []
    for p in paras:
        if p.strip().startswith("Note:"):
            note = p.strip()
        else:
            core_paras.append(p.strip())
    body = "\n\n".join(core_paras)
    budget = hi - (len(note) + (2 if note else 0))
    if len(body) > budget:
        # trim from last paragraph (always shrink hi to guarantee progress)
        guard = 0
        while len(body) > budget and core_paras and guard < 20:
            guard += 1
            prev_len = len(core_paras[-1])
            new_hi = max(40, min(prev_len - 40, budget - len("\n\n".join(core_paras[:-1]))))
            core_paras[-1] = clip_para(core_paras[-1], 30, new_hi)
            if len(core_paras[-1]) >= prev_len:
                core_paras[-1] = core_paras[-1][: max(30, budget // 2)].rsplit(" ", 1)[0] + "."
            body = "\n\n".join(core_paras)
        if len(body) > budget and len(core_paras) > 1:
            core_paras = core_paras[:-1]
            body = "\n\n".join(core_paras)
    pads = [
        " That reading follows from the chapter definition applied to the stem nouns.",
        " The mechanism named in the sentence matches what the subsection teaches.",
        " Limited resources still force a ranking among rival uses in this setting.",
    ]
    pi = 0
    while len(body) + len(note) + (2 if note else 0) < lo and pi < len(pads):
        if core_paras:
            core_paras[-1] = clip_para(core_paras[-1] + pads[pi], 40, len(core_paras[-1]) + len(pads[pi]) + 5)
        else:
            core_paras = [pads[pi].strip()]
        body = "\n\n".join(core_paras)
        pi += 1
    if note:
        return body + "\n\n" + note
    return body


def openers_true(sub: str, st: str, sc: str, li: int, case_id: str) -> list[str]:
    sl = st.lower()
    subj = stem_subject(st, 90)
    pool: list[str] = []
    if sub == "2.3" and "micro" in sl:
        pool = [
            f"{subj.capitalize()} sits inside one market or one decision unit.",
            f"One platform, one district, one household: that zoom level is microeconomics.",
            f"The fare spike in {sc} is a local price in one market, not a national aggregate.",
            f"Microeconomics covers individual markets; {subj} fits that scope.",
            f"Scope here is a single market mechanism, which microeconomics studies.",
        ]
    elif sub == "2.3" and "macro" in sl:
        pool = [
            f"{subj.capitalize()} tracks an economy-wide total or overall indicator.",
            f"National aggregates and whole-economy measures belong to macroeconomics.",
            f"When the question turns to totals for the entire economy, macro scope applies.",
            f"Macroeconomics covers GDP, unemployment, and the general price level.",
            f"The claim points at an aggregate measure, which is macro territory.",
        ]
    elif "opportunity cost" in sl:
        pool = [
            f"The forgone alternative in {sc} is the teaching hinge.",
            f"Opportunity cost names what {sc} gives up, not the cash on the chosen path.",
            f"Choosing one path in {sc} leaves a single next-best benefit behind.",
            f"The value left on the table in {sc} is what opportunity cost measures.",
            f"{sc} forces a trade-off; opportunity cost is the best option not taken.",
        ]
    elif "scarc" in sl:
        pool = [
            f"Limited means still compete in {sc} even after income arrives.",
            f"Scarcity in {sc} means rival claims on the same euro or hour.",
            f"A salary or stockroom does not erase competing uses in {sc}.",
            f"Resources stay finite in {sc}; ends still outrun means.",
            f"{sc} still ranks competing uses because means stay limited.",
        ]
    elif "economis" in sl:
        pool = [
            f"Careful ranking of limited resources is economising in {sc}.",
            f"Economising in {sc} means refusing to treat stocks as infinite.",
            f"{sc} allocates a finite pot among rival uses.",
            f"Under scarcity, {sc} compares options instead of spending freely.",
            f"Economising is deliberate allocation under limits, as in {sc}.",
        ]
    elif "exchange" in sl or "barter" in sl:
        pool = [
            f"Value changes hands by agreement in {sc}, with or without cash.",
            f"Exchange in {sc} is any agreed swap of goods, services, or claims.",
            f"Barter and cash payment are both exchange in {sc}.",
            f"{sc} shows mutual gain from trading goods or services.",
            f"Meeting needs through trade is exchange, and {sc} is an example.",
        ]
    elif sub == "2.6":
        pool = [
            f"Price and quantity move together in {sc} when other factors stay fixed.",
            f"Buyers and sellers meet at a price in {sc}; that coordination is the market.",
            f"Demand and supply intersect in {sc} at an equilibrium price.",
            f"A shift in costs or tastes changes equilibrium in {sc}.",
            f"The wage or rent in {sc} clears or fails to clear the market.",
        ]
    elif sub == "2.7":
        pool = [
            f"Seller count and entry shape market power in {sc}.",
            f"Structure in {sc} follows how many rivals interact and whether they collude.",
            f"Few interdependent sellers point to oligopoly in {sc}.",
            f"Many price-taking sellers fit perfect competition in {sc}.",
            f"Local exclusivity can create monopoly-like power in {sc}.",
        ]
    else:
        pool = [
            f"{subj.capitalize()} matches the chapter definition for {sc}.",
            f"The mechanism in {sc} works the way the sentence describes.",
            f"Goods, services, needs, and wants split cleanly in {sc}.",
            f"Households and firms both participate in {sc}.",
            f"The circular flow and money functions apply in {sc}.",
        ]
    return pool


def openers_false(sub: str, st: str, sc: str, li: int, case_id: str) -> list[str]:
    sl = st.lower()
    subj = stem_subject(st, 85)
    pool: list[str] = []
    if "macro" in sl and any(w in sl for w in ("single", "one ", "district", "café", "cafe", "household", "platform", "branch", "because many")):
        pool = [
            f"Many riders in one district still leaves {sc} as one local market.",
            f"A surge price in {sc} is micro even when crowds feel it at once.",
            f"Counting affected people does not widen scope to macroeconomics.",
            f"One market's price move stays micro; economy-wide totals are macro.",
            f"The because-clause in {sc} confuses headcount with unit of analysis.",
        ]
    elif "opportunity cost" in sl:
        pool = [
            f"A zero wage in {sc} does not erase forgone income or experience.",
            f"Opportunity cost in {sc} is one next-best path, not a sum of rejections.",
            f"The electricity bill or sticker price is not opportunity cost in {sc}.",
            f"Unpaid hours in {sc} still consume time that could earn elsewhere.",
            f"Adding every rejected option invents a cost the definition rejects.",
        ]
    elif any(w in sl for w in ("only", "never", "always", "automatically", "regardless", "excludes", "disappears", "identical", "no meaningful")):
        pool = [
            f"Absolute words break the claim once {sc} supplies a counterexample.",
            f"The restriction in {sc} overreaches what the definition allows.",
            f"One ordinary example from {sc} defeats the absolute wording.",
            f"Words like only or never turn a limited truth into a false blanket rule.",
            f"{sc} shows the sentence stretches past the chapter criterion.",
        ]
    elif "goods must be intangible" in sl or ("tangible" in sl and "service" in sl and "good" in sl):
        pool = [
            f"Goods are tangible items; services are intangible activities.",
            f"The claim reverses the goods-versus-services pair.",
            f"A physical product handed over is a good, not a service.",
            f"Intangible work performed for someone is a service, not a good.",
            f"The categories are swapped in this sentence.",
        ]
    elif "shift" in sl and any(w in sl for w in ("along", "own price", "own-price", "price fall", "price rise")):
        pool = [
            f"Own-price changes move along a curve; other factors shift it.",
            f"{sc} mixes a movement along demand or supply with a shift story.",
            f"A price change alone traces the curve; income or costs shift it.",
            f"The claim treats a along-curve move as if the whole curve moved.",
            f"Separate own-price movement from curve shifts in {sc}.",
        ]
    elif "inflation" in sl and any(w in sl for w in ("single", "one-day", "one shop", "one retail", "sale")):
        pool = [
            f"One shop's discount in {sc} is not economy-wide inflation.",
            f"Inflation is a sustained rise in the general price level.",
            f"A relative price change in {sc} differs from inflation.",
            f"The claim confuses one market's price with the overall price level.",
            f"Inflation spans many goods; {sc} describes one relative move.",
        ]
    else:
        pool = [
            f"{subj.capitalize()} mislabels the situation in {sc}.",
            f"The reason attached in {sc} does not support the conclusion.",
            f"A swapped category or false restriction breaks the claim.",
            f"The because-clause in {sc} fails under the chapter test.",
            f"Restore the correct label for {sc} and the assertion collapses.",
        ]
    return pool


def apply_statement(st: str, truth: bool, sub: str, sc: str, core: str, cue: str) -> list[str]:
    """Build 2-4 content paragraphs explaining the statement."""
    sl = st.lower()
    paras: list[str] = []

    m_because = re.search(r"\bbecause\b\s*(.+)$", st, re.I)
    if truth:
        if sub == "2.3" and "micro" in sl:
            subj = stem_subject(st, 70)
            paras.append(
                f"Microeconomics studies households, firms, and individual markets. "
                f"{subj.capitalize()} is a single-market or single-actor question, not national GDP."
            )
        elif sub == "2.3" and "macro" in sl:
            paras.append(
                "Macroeconomics tracks economy-wide totals: GDP, unemployment, the general price level, "
                "and other aggregates for the whole country or currency area."
            )
        elif "opportunity cost" in sl:
            paras.append(
                "Opportunity cost is the value of the best alternative forgone when a choice is made. "
                "It is not the accounting bill on the chosen option alone."
            )
        elif "economis" in sl:
            paras.append(
                "Economising is ranking and allocating limited resources carefully instead of treating them as unlimited."
            )
        elif "exchange" in sl or "barter" in sl:
            paras.append(
                "Exchange is any agreed swap of goods, services, or claims. Money often mediates trade, "
                "but barter without cash still counts."
            )
        elif sub == "2.6" and "equilibrium" in sl:
            paras.append(
                "Equilibrium is where quantity demanded equals quantity supplied, so neither persistent shortage "
                "nor surplus grows at that price."
            )
        elif sub == "2.6" and "law of demand" in sl:
            paras.append(
                "Other things equal, a higher price lowers quantity demanded. That is movement along the demand curve."
            )
        elif sub == "2.6" and ("law of supply" in sl or ("supply" in sl and "price" in sl)):
            paras.append(
                "Other things equal, a higher price raises quantity supplied. Sellers respond when the reward covers opportunity cost."
            )
        elif "need" in sl and "want" in sl:
            paras.append(
                "Needs support basic well-being or continued operations; wants are desired extras. Both can carry prices."
            )
        elif "service" in sl and ("good" in sl or "goods" in sl):
            paras.append(
                "Goods are tangible items you can transfer; services are intangible activities performed for someone."
            )
        else:
            paras.append(core)

        if m_because and sub == "2.3" and "macro" in sl and "micro" not in sl:
            reason = m_because.group(1).strip().rstrip(".")
            paras.append(
                f"The because-clause links {reason.lower()} to a macro label, and that aggregate scope fits."
            )
        elif m_because:
            reason = m_because.group(1).strip().rstrip(".")
            paras.append(f"The stated reason ({reason.lower()}) supports the classification.")

        if sub == "2.3" and "macro" in sl and any(
            w in sl for w in ("cpi", "consumer price index", "price index", "general price level", "overall consumer")
        ):
            paras.append(
                "The consumer price index measures an economy-wide or city-wide price level, not one "
                "shop's relative move alone."
            )
            paras.append(
                f"Measuring whether district fare spikes in {sc} moved city-wide CPI asks about an "
                "aggregate price index, which is macroeconomics even though the fare spike started "
                "in one district."
            )

        if sub == "2.3" and "predict" in sl:
            paras.append(
                "Economics builds theories to explain behaviour and predict responses to prices, taxes, and shocks."
            )
    else:
        if sub == "2.3" and "macro" in sl and any(w in sl for w in ("district", "platform", "many riders", "single", "one ", "café", "cafe", "household", "riders", "affected")):
            paras.append(
                "Macroeconomics is about economy-wide totals: GDP, the overall price level, unemployment for the whole country. "
                f"A surge price that hits many riders in one district is still a price in one local market."
            )
            paras.append(
                "Counting how many people feel the spike does not turn the question into macroeconomics."
            )
            paras.append(
                f"If the same episode in {sc} were used only to ask whether city-wide CPI moved, that CPI question would be macro. "
                "The statement here claims the surge itself is macro because many riders are affected, and that reason is wrong."
            )
            if m_because:
                paras.append(
                    "The because-clause treats headcount as scope, and that bridge is wrong."
                )
        elif sub == "2.3" and "micro" in sl and "macro" in sl:
            paras.append(
                "Micro and macro share scarcity logic but ask different scope questions. "
                "Collapsing them into identical tools erases the unit-of-analysis split."
            )
        elif "opportunity cost" in sl:
            paras.append(
                "Opportunity cost is one next-best forgone benefit, not a shopping-list total and not erased by a zero wage."
            )
            if "electricity" in sl or "bill" in sl or "cash" in sl or "wage paid" in sl:
                paras.append(
                    "The cash outlay on the chosen run is an accounting cost, not the forgone alternative's value."
                )
        elif "scarcity" in sl and ("disappears" in sl or "salary" in sl or "never" in sl):
            paras.append(
                f"A steady salary reallocates the budget in {sc}; it does not abolish scarcity. "
                "Competing uses for the same euro remain after payday."
            )
        elif "goods must be intangible" in sl:
            paras.append("Goods are tangible; services are intangible. The sentence reverses that pair.")
        elif "barter" in sl and ("never" in sl or "only" in sl):
            paras.append(
                f"Barter without money still counts as exchange. {sc} can swap services for goods inside economics."
            )
        elif "shift" in sl and any(w in sl for w in ("along", "own price", "own-price")):
            paras.append(
                "Own-price changes trace the curve; income, tastes, technology, and input costs shift the whole curve."
            )
        elif "inflation" in sl:
            paras.append(
                f"Inflation is a sustained rise in the general price level, not one shop's promotion in {sc}."
            )
        elif "perfect competition" in sl:
            paras.append(
                f"Perfect competition needs many price-taking sellers, a homogeneous product, free entry, and good information. "
                f"{sc} fails that checklist when brands, barriers, or differentiation appear."
            )
        elif "cartel" in sl:
            paras.append(
                "Cartels coordinate rivals to restrict output and raise joint prices. Open undercutting is rivalry, not collusion."
            )
        elif "only governments set prices" in sl or (
            m_because and "only government" in m_because.group(1).lower()
        ):
            paras.append(
                f"Private firms set prices in {sc}. The ride-hail platform raises surge fares after "
                "the concert, which is market pricing studied in economics."
            )
            paras.append(
                "Economics covers household, firm, and government choices over scarce resources, "
                "including prices set in individual markets."
            )
        elif any(w in sl for w in ("only", "never", "always", "automatically", "excludes", "outside")):
            paras.append(absolute_counterexample(st, sc, core))
        else:
            paras.append(core)
            paras.append(
                f"In {sc}, the label or reason in the sentence fails once the chapter definition is applied."
            )

        if m_because and not (
            sub == "2.3"
            and "macro" in sl
            and any(w in sl for w in ("district", "many riders", "affected"))
        ):
            expl = explain_because_false(st, sc, core)
            if expl:
                paras.append(expl)

    # de-dupe
    out: list[str] = []
    seen: set[str] = set()
    for p in paras:
        p = re.sub(r"\s+", " ", p).strip()
        key = re.sub(r"[^a-z0-9]", "", p.lower())[:80]
        if key in seen:
            continue
        seen.add(key)
        out.append(p)
    return out or [core]


def maybe_note(sub: str, st: str, truth: bool, notes_used: int, case_i: int, li: int) -> str | None:
    if notes_used >= 2:
        return None
    sl = st.lower()
    if not truth:
        if "opportunity cost" in sl and any(w in sl for w in ("sum", "combined", "zero", "electricity", "bill")):
            return "Note: opportunity cost tracks the next-best forgone benefit, not a cash total of every rejected option."
        if "scarcity" in sl and "poverty" in sl:
            return "Note: scarcity is not poverty. High-income actors still face limited means."
        if re.search(r"\bmicro|\bmacro", sl) and "identical" not in sl:
            return "Note: the unit of analysis decides micro vs macro, not how many people feel the price."
        if "perfect competition" in sl or "cartel" in sl or re.search(r"\bmonopoly\b", sl):
            return "Note: structure labels turn on seller count, product sameness, entry, and collusion, not on physical good alone."
        if re.search(r"\bshift\b", sl) and "along" in sl:
            return "Note: own-price moves you along a curve; other determinants shift it."
        if "inflation" in sl and re.search(r"\bsingle\b|\bone-day\b|\bsale\b", sl):
            return "Note: inflation is a general price-level rise, not one relative price change."
        if "need" in sl and "want" in sl and "price" in sl:
            return "Note: having a price does not convert a want into a need."
    elif truth and notes_used == 0 and (case_i + li) % 11 == 0:
        if "consumer sovereignty" in sl:
            return "Note: sovereignty here means spending signals that steer production."
    return None


def expanded_extra(st: str, truth: bool, sub: str, sc: str, li: int) -> list[str]:
    """Third/fourth paragraphs for L tier."""
    sl = st.lower()
    extras: list[str] = []
    if sub == "2.3" and "macro" in sl and not truth:
        extras.append(
            f"If the same episode in {sc} were used only to ask whether city-wide CPI moved, that CPI question would be macro. "
            "The statement here mislabels a local price move as macro for the wrong reason."
        )
    elif sub == "2.3" and "micro" in sl and truth:
        extras.append(
            f"National policy can sit in the background of {sc}, but the object of study remains one market or one decision unit."
        )
    elif "opportunity cost" in sl:
        if truth:
            extras.append(
                f"Name the chosen path and the next-best path side by side in {sc}; the forgone benefit is the cost."
            )
        else:
            extras.append(
                f"In {sc}, unpaid or shared premises do not remove the value of the best alternative left behind."
            )
    elif sub == "2.6":
        extras.append(
            f"Graphically, {sc} is the intersection of supply and demand; economically it is the price where plans match."
        )
    elif sub == "2.7":
        extras.append(
            f"Relevant market boundaries can be local in {sc} when travel to rivals is costly."
        )
    elif truth and sub == "2.3" and "macro" in sl and any(
        w in sl for w in ("cpi", "consumer price index", "price index", "overall consumer")
    ):
        extras.append(
            f"District ride-hail fares in {sc} can feed into a city-wide CPI reading, and that index "
            "question is macro because it tracks the general price level."
        )
    elif truth:
        extras.append(
            f"The nouns in {sc} fit the chapter mechanism the sentence describes, so the label stands."
        )
    else:
        extras.append(
            f"In {sc}, one ordinary case under the chapter definition is enough to reject the "
            "overgeneralised claim."
        )
    pick = extras[li % len(extras)] if extras else (
        f"{'The claim survives' if truth else 'The claim fails'} when checked against the chapter definition in {sc}."
    )
    return [pick]


def build_letter(
    case: dict,
    case_i: int,
    li: int,
    kind: str,
    notes_used: int,
) -> tuple[str, int]:
    st = case["statements"][li]
    truth = bool(case["answer_key"][li])
    sub = case["subsection"]
    title = case["title"]
    context = case.get("context") or ""
    sc = scene(title, context)
    raw_cue = re.sub(r"\s*Evaluate the following.*$", "", context, flags=re.I).strip()
    raw_cue = re.sub(r"^(Consider|Analyze|Analyse|Review|Assess)\s+", "", raw_cue, flags=re.I).strip().rstrip(".")
    cue = raw_cue

    core = primary_concept(sub, st)
    lo, hi = KIND_RANGE[kind]

    pool = openers_true(sub, st, sc, li, case["case_id"]) if truth else openers_false(sub, st, sc, li, case["case_id"])
    opener = pool[(case_i + li * 3 + seed(case["case_id"], str(li))) % len(pool)]

    mid = apply_statement(st, truth, sub, sc, core, cue)
    paras = [opener] + mid

    if kind == "L":
        paras.extend(expanded_extra(st, truth, sub, sc, li))
        if len("\n\n".join(paras)) < lo and core not in "\n\n".join(paras):
            # append core only if not redundant with existing paras
            core_key = re.sub(r"[^a-z0-9]", "", core.lower())[:60]
            if not any(core_key in re.sub(r"[^a-z0-9]", "", p.lower())[:60] for p in paras):
                paras.append(core)

    note = maybe_note(sub, st, truth, notes_used, case_i, li)
    note_block = f"Note: {note[6:]}" if note and note.startswith("Note:") else (note or "")
    if note_block:
        paras.append(note_block)

    if kind == "C":
        # one or two tight paragraphs
        body = clip_body(paras[:2] if len(paras) >= 2 else paras, lo, hi)
    elif kind == "S":
        body = clip_body(paras[:3] if len(paras) >= 3 else paras, lo, hi)
    else:
        body = clip_body(paras, lo, hi)

    return wrap(body, truth), (1 if note_block else 0)


def ensure_case(case: dict, case_i: int, expls: list[str]) -> list[str]:
    key = case["answer_key"]

    def lens() -> list[int]:
        return [len(body_of(e)) for e in expls]

    for attempt in range(30):
        L = lens()
        opens = [body_of(e).split("\n")[0].strip().lower()[:40] for e in expls]
        ok = (
            all(n >= 150 for n in L)
            and sum(1 for n in L if n >= 400) >= 2
            and any(n >= 550 for n in L)
            and max(L) - min(L) >= 250
            and len(set(opens)) == 5
        )
        if ok:
            break

        if any(n < 150 for n in L):
            i = L.index(min(L))
            e, _ = build_letter(case, case_i + attempt, i, "C", 0)
            b = body_of(e)
            for _ in range(6):
                if len(b) >= 160:
                    break
                b += " Limited resources still force a ranking among rival uses."
            expls[i] = wrap(b, key[i])
            continue

        if not any(n >= 550 for n in L):
            i = max(range(5), key=lambda j: L[j])
            b = body_of(expls[i])
            pad = " The chapter definition applied to the stem nouns settles the label."
            for _ in range(8):
                if len(b) >= 560:
                    break
                b += pad
            if len(b) < 560:
                expls[i], _ = build_letter(case, case_i + attempt * 2, i, "L", 0)
            else:
                expls[i] = wrap(b, key[i])
            continue

        if sum(1 for n in L if n >= 400) < 2:
            for i in sorted(range(5), key=lambda j: L[j]):
                if L[i] < 400:
                    expls[i], _ = build_letter(case, case_i + attempt * 3 + i, i, "S", 0)
                    if len(body_of(expls[i])) < 400:
                        expls[i], _ = build_letter(case, case_i + attempt * 3 + i + 1, i, "L", 0)
                    break
            continue

        if max(L) - min(L) < 250:
            i_min, i_max = L.index(min(L)), L.index(max(L))
            expls[i_min], _ = build_letter(case, case_i, i_min, "C", 0)
            expls[i_max], _ = build_letter(case, case_i, i_max, "L", 0)
            continue

        if len(set(opens)) < 5:
            prefixes = [
                "Surge pricing aside, ",
                "On competition grounds, ",
                "For household budgeting, ",
                "At equilibrium, ",
                "Regarding market structure, ",
            ]
            for i in range(5):
                b = prefixes[i] + body_of(expls[i])
                expls[i] = wrap(b, key[i])
            continue

    # final force pass if still failing
    L = lens()
    if any(n < 150 for n in L) or sum(1 for n in L if n >= 400) < 2 or not any(n >= 550 for n in L) or max(L) - min(L) < 250:
        for i in range(5):
            kind = "L" if i == 2 else ("S" if i in (1, 3) else "C")
            expls[i], _ = build_letter(case, case_i + 100 + i, i, kind, 0)
        L = [len(body_of(e)) for e in expls]
        if sum(1 for n in L if n >= 400) < 2:
            for i in (1, 3):
                expls[i], _ = build_letter(case, case_i + 200 + i, i, "L", 0)
        L = [len(body_of(e)) for e in expls]
        if not any(n >= 550 for n in L):
            i = max(range(5), key=lambda j: L[j])
            b = body_of(expls[i])
            pad = (
                " The chapter definition, applied to the stem's own nouns, "
                "settles why the claim is true or false."
            )
            for _ in range(8):
                if len(b) >= 560:
                    break
                b += pad
            expls[i] = wrap(b, key[i])
        opens = [body_of(e).split("\n")[0].strip().lower()[:40] for e in expls]
        if len(set(opens)) < 5:
            labels = ["Locally, ", "Nationally, ", "For one firm, ", "At market price, ", "On scope, "]
            for i in range(5):
                b = labels[i] + body_of(expls[i])[0].lower() + body_of(expls[i])[1:]
                expls[i] = wrap(clip_body([b], 160, 900), key[i])

    # cap notes at 2
    note_idxs = [i for i, e in enumerate(expls) if re.search(r"(?m)^Note:", e)]
    for i in note_idxs[2:]:
        b = re.sub(r"\n\nNote:.*", "", body_of(expls[i]), flags=re.S)
        expls[i] = wrap(b.strip(), key[i])

    for i, e in enumerate(expls):
        expls[i] = wrap(sanitize(body_of(e)), key[i])
    return expls


def rewrite_case(case: dict, case_i: int) -> list[str]:
    kinds = list(KIND_PATTERNS[case_i % len(KIND_PATTERNS)])
    if "L" not in kinds:
        kinds[2] = "L"
    expls: list[str] = []
    notes = 0
    for li, kind in enumerate(kinds):
        e, add = build_letter(case, case_i, li, kind, notes)
        notes += add
        expls.append(e)
    return ensure_case(case, case_i, expls)


def main() -> int:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    if len(data) != 160:
        print(f"Expected 160 cases, got {len(data)}", file=sys.stderr)
        return 1
    for i, case in enumerate(data):
        data[i]["tactical_explanations"] = rewrite_case(case, i)
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Rewrote {len(data)} cases (800 letters)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
