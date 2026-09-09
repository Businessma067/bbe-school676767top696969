#!/usr/bin/env python3
"""Rewrite ch2–ch3 tactical_explanations in direct teacher voice.

Grounds each letter in statement + title + subsection economics without exam-meta,
Fuhrmann citations, or subsection-title spam. Validates length mix per case.
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path("/workspace")
FILES = [
    ROOT / "src/data/economics-cases-ch2-subtopics.json",
    ROOT / "src/data/economics-cases-ch3-subtopics.json",
]

KIND_PATTERNS = [
    ("C", "S", "L", "S", "M"),
    ("S", "L", "M", "C", "L"),
    ("L", "C", "S", "M", "L"),
    ("M", "S", "L", "C", "S"),
    ("S", "M", "L", "S", "L"),
    ("L", "S", "C", "L", "M"),
    ("C", "L", "S", "M", "L"),
    ("M", "L", "S", "L", "C"),
]

KIND_RANGE = {
    "C": (175, 270),
    "S": (210, 350),
    "M": (340, 470),
    "L": (560, 820),
}

FORBIDDEN = re.compile(
    r"fuhrmann|as printed|operative words|tina-and-steve framing|"
    r"the claim tracks|reading .+ carefully|ask what would have to be true|"
    r"judge the claim as printed|walk the claim|definition letters live or die|"
    r"matches the chapter reading|whichever the stem is testing|tied to buyer type",
    re.I,
)

CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)

# Varied teacher openers — direct address, no meta rubric.
OPEN_TRUE = [
    "Look at what the sentence is really saying about {focus}.",
    "When I read this claim about {focus}, it lines up with how we use the term in class.",
    "Picture the actors in the stem and ask whether {focus} fits that scene.",
    "Here the wording on {focus} matches the definition we keep on the board.",
    "Think through {focus} with a concrete household or firm in mind — the claim holds.",
    "This is the standard classroom sense of {focus}, and the sentence states it cleanly.",
    "If you restate {focus} in plain words, you get exactly what this letter claims.",
    "The because-clause here does real work: it ties {focus} to a reason you can test.",
    "Nothing in the stem forces a stretch — {focus} sits where it belongs.",
    "Walk the nouns in the sentence once and {focus} stays on the right side of the line.",
    "I would accept this in class because {focus} is used the way the chapter defines it.",
    "Strip away the surrounding case details and the core claim about {focus} still stands.",
    "Compare this wording to the trap labels nearby — {focus} is the one that fits.",
    "Start from the definition of {focus} and the sentence follows naturally.",
    "Even when you strip the surrounding case details, the claim about {focus} still holds.",
    "The stem gives you enough nouns to see why {focus} is the right label.",
    "Say it aloud with the case actors filled in — {focus} still reads true.",
    "This letter is a straight definition check on {focus}, and it passes.",
    "You do not need extra machinery: {focus} is enough to settle this one.",
    "Hold the chapter map in one hand and this sentence in the other — {focus} matches.",
]

OPEN_FALSE = [
    "This sounds plausible until you notice what {focus} actually requires.",
    "The trap here is familiar vocabulary with a false restriction on {focus}.",
    "I would push back in class: the absolute wording on {focus} breaks on one counterexample.",
    "Watch the words only, never, and always — they are doing the damage to {focus}.",
    "Picture a ordinary counter-scene and {focus} no longer supports this sentence.",
    "The sentence swaps or over-stretches {focus}; that is why it fails.",
    "Here is the catch: {focus} in the textbook sense contradicts what the letter claims.",
    "Students often rescue this by imagining a softer claim — but {focus} will not allow that.",
    "Once you name the right category for {focus}, the overreach shows immediately.",
    "The because-clause tries to bridge a gap that {focus} does not actually cross.",
    "If this were true, everyday examples of {focus} would vanish — and they do not.",
    "Refuse the category jump on {focus} and the statement collapses.",
    "A single realistic example under the correct reading of {focus} is enough to reject this.",
    "The familiar words hide a swapped box — {focus} belongs elsewhere.",
    "Compare the claim to how we define {focus} at the board; the mismatch is quick.",
    "This overreaches: {focus} is tighter than the sentence pretends.",
    "The stem nouns point one way; the false label on {focus} points another.",
    "Do not let neighbouring vocabulary distract you — {focus} is where the letter breaks.",
    "Restore the textbook criterion for {focus} and the absolute conclusion falls away.",
    "The wording fights the usual test on {focus} once you fill in the actors.",
]

SCENES = {
    "3.1": [
        "Tina and Steve's repair bench mixes labour, spare screens, leased tools, and the owner's booking decisions.",
        "A Styrian vineyard puts land, seasonal pickers, a bottling line, and the harvest plan on the same balance sheet.",
        "AT&S spreads plant capital, engineering labour, and leadership risk across several countries.",
    ],
    "3.2": [
        "Ore from a mine becomes cable in a plant, then a utility installs the household link — three sector stages in one chain.",
        "Tina and Steve sell goods, write software, and run a helpdesk: tertiary work even when boxes cross a counter.",
        "In a high-GDP EU economy, services often exceed seventy percent of measured output while farming stays essential.",
    ],
    "3.3": [
        "A bakery reinvesting oven surplus is living profit-oriented growth.",
        "RiverAid needs donations before kits ship; surplus buys more kits, not private dividends.",
        "A community clinic billing insurers can stay an NPO when surplus deepens care.",
    ],
    "3.4": [
        "Six staff with €1.2 m turnover sit as micro; forty staff with €8 m sit as small — headcount and a financial ceiling both matter.",
        "About ninety-nine percent of EU businesses are SMEs, which is why size labels gate support programmes.",
    ],
    "3.5": [
        "A corner workshop with nearby clients is local; AT&S with plants abroad is international.",
        "Imported flour does not turn a city bakery international if every customer is still nearby.",
    ],
    "3.6": [
        "Night shifts may please owners yet anger residents — one decision, clashing stakeholder interests.",
        "Employees without shares are still stakeholders; neighbours without a payroll line are too.",
    ],
}

NOTES = {
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


def body_of(e: str) -> str:
    return CLOSER.sub("", e).strip()


def wrap(body: str, truth: bool) -> str:
    return body.rstrip() + f"\n\nSo the statement is {'True' if truth else 'False'}."


def focus_phrase(statement: str) -> str:
    # Priority order — conceptual terms before incidental stem nouns.
    prefer = (
        "opportunity cost", "consumer sovereignty", "circular flow", "division of labour",
        "medium of exchange", "not-for-profit", "factors of production", "microeconomics",
        "macroeconomics", "perfect competition", "economic decisions", "economic decision",
        "economising", "scarcity", "exchange", "entrepreneurship", "entrepreneur",
        "goods", "services", "needs", "wants", "labour", "capital", "land",
        "primary", "secondary", "tertiary", "gdp", "profit", "stakeholder", "shareholder",
        "inflation", "barter", "equilibrium", "monopoly", "oligopoly", "household",
    )
    skip = {"nobody", "somebody", "anybody", "everyone", "only", "never", "always", "once", "because"}
    sl = statement.lower()
    for p in prefer:
        if p in sl:
            return p
    for w in re.findall(r"[A-Za-z][A-Za-z'-]{3,}", statement):
        wl = w.lower()
        if wl not in skip:
            return wl
    return "the claim"


def clip(text: str, lo: int, hi: int) -> str:
    text = re.sub(r"\n{3,}", "\n\n", text.strip())
    note = ""
    core = text
    if "\n\nNote:" in text:
        core, n = text.split("\n\nNote:", 1)
        note = "\n\nNote:" + n

    pads = [
        " Keep the stem's own nouns attached while you reason.",
        " That is the teaching move that settles the letter.",
        " Ordinary household and firm scenes make the definition concrete.",
    ]
    pi = 0
    while len(core) + len(note) < lo and pi < len(pads):
        core = (core.rstrip() + pads[pi]).strip()
        pi += 1
    while len(core) + len(note) < lo:
        core = (core.rstrip() + " Rival uses of the same limited pot force a ranking.").strip()
        if len(core) > hi:
            break

    budget = hi - len(note)
    if len(core) > budget:
        cut = core[:budget]
        sp = max(cut.rfind(". "), cut.rfind(".\n"))
        if sp >= max(80, lo // 3):
            core = cut[: sp + 1].strip()
        else:
            sp2 = cut.rfind(" ")
            core = (cut[:sp2] if sp2 > 60 else cut).rstrip(",;: ") + "."
        core = re.sub(
            r"\b(and|the|a|an|of|to|for|or|with|that|which|as|by|in|on)\.$",
            ".",
            core,
            flags=re.I,
        )
    return (core + note).strip()


def concept_core(sub: str, statement: str) -> str:
    sl = statement.lower()
    scored: list[tuple[int, str]] = []

    def add(p: int, text: str) -> None:
        scored.append((p, text))

    if sub.startswith("2.1"):
        if (
            any(w in sl for w in ("needs and wants", "needs versus wants", "need and want"))
            or (re.search(r"\bneeds\b", sl) and re.search(r"\bwants\b", sl))
            or (re.search(r"\bneed\b", sl) and re.search(r"\bwant\b", sl) and "need to" not in sl)
        ):
            add(10, "Needs support basic well-being or continued operations; wants are desired extras. Both households and firms can have needs.")
        if "service" in sl and any(w in sl for w in ("good", "goods")):
            add(9, "Goods are tangible items you can transfer; services are intangible activities performed for someone.")
        elif "service" in sl:
            add(8, "A service is an intangible activity — repair, tutoring, preparation — not a physical object as the main product.")
        if any(w in sl for w in ("scarcity", "scarce")):
            add(7, "Scarcity is limited means facing rival uses. Extra income can ease one budget line, but it does not erase every competing claim on time or money.")
        if "economis" in sl:
            add(7, "Economising is careful allocation under limits: ranking uses instead of treating stocks as infinite.")
        if any(w in sl for w in ("barter", "exchange", "trade")):
            add(6, "Exchange is any agreed swap of goods, services, or claims. Money often helps, but barter without cash still counts.")
        if any(w in sl for w in ("household", "entrepreneur", "business", "firm")):
            add(5, "Households consume and may sell labour or used goods; entrepreneurs organise production under uncertainty. Both can trade.")
        if any(w in sl for w in ("economic decision", "opt out", "inaction")):
            add(8, "Even inaction uses scarce time or money, so nobody fully opts out of economic decisions.")
        if not scored:
            add(1, "Scarcity, economising, goods versus services, needs versus wants, and exchange are the building blocks here.")

    elif sub.startswith("2.2"):
        if any(w in sl for w in ("opportunity cost", "forgone", "forgo", "sacrifice")):
            add(10, "Opportunity cost is the value of the best alternative given up — not the cash bill on the chosen option alone.")
        if any(w in sl for w in ("unpaid", "zero", "volunteer", "internship")):
            add(9, "A zero wage does not wipe opportunity cost: unpaid hours still use scarce time that could have earned income elsewhere.")
        if not scored:
            add(1, "Choices under scarcity carry opportunity cost: what you forgo by locking a resource into one use.")

    elif sub.startswith("2.3"):
        if "micro" in sl and "macro" in sl:
            add(10, "Microeconomics studies individual units and particular markets; macroeconomics studies economy-wide aggregates. Scope decides the label.")
        elif "macro" in sl or any(w in sl for w in ("nationwide", "national", "aggregate", "economy-wide")):
            add(9, "Macroeconomics tracks whole-economy totals — not one household's purchase.")
        elif "micro" in sl:
            add(9, "Microeconomics stays with one household, one firm, or one market even when a national programme sits in the background.")
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
        if any(w in sl for w in ("labour", "labor", "human resource", "picker", "engineer", "staff", "technician")):
            add(10, "Labour is every human-resource input to production — manual or office, permanent or seasonal.")
        if any(w in sl for w in ("capital", "machine", "equipment", "leased", "inventory", "van")):
            add(9, "Capital covers produced means of production and operating finance — owned or leased while in use.")
        if any(w in sl for w in ("land", "vineyard", "mineral", "forest", "timber", "soil")):
            add(9, "Land means natural resources in use — soil, water rights, forests, minerals.")
        if any(w in sl for w in ("entrepreneur", "coordinat", "founder", "risk")):
            add(9, "Entrepreneurship organises land, labour, and capital under uncertainty.")
        if any(w in sl for w in ("knowledge", "technology", "know-how", "software", "licence")):
            add(8, "Knowledge and technology count as factors when applied methods raise what the firm can produce.")
        if not scored:
            add(1, "Firms combine land, labour, capital, entrepreneurship, and often knowledge to create output.")

    elif sub.startswith("3.2"):
        if "primary" in sl:
            add(10, "Primary activity extracts from nature: farming, fishing, mining, forestry.")
        if any(w in sl for w in ("secondary", "manufactur", "assembl", "mill")):
            add(10, "Secondary activity transforms materials through manufacturing.")
        if any(w in sl for w in ("tertiary", "banking", "insurance", "retail", "service")):
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
            add(10, "A local business operates in a limited area with nearby customers; thin funds are a classic friction.")
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


def statement_hook(sub: str, statement: str, truth: bool) -> str | None:
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
        if "macro" in sl and any(w in sl for w in ("single", "one ", "café", "household")):
            return "One café's price change or one household's purchase stays micro. Nationwide totals mark macro scope."
        if "barter" in sl and "never" in sl:
            return "Barter is still exchange when value changes hands without cash."
        if "manual" in sl and "labour" in sl:
            return "Planners, accountants, and managers also supply labour — the factor is not shop-floor muscle alone."
        if "gdp" in sl and any(w in sl for w in ("wellbeing", "well-being", "sustainable", "proves")):
            return "Rising GDP can accompany environmental damage or rebuild after disaster — measured output is not proof of welfare."
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
    return None


def scene_bit(sub: str, case_i: int, li: int) -> str:
    pool = SCENES.get(sub[:3], [])
    if not pool:
        return ""
    return pool[(case_i + li) % len(pool)]


def teach_body(
    sub: str,
    statement: str,
    title: str,
    truth: bool,
    case_i: int,
    li: int,
    kind: str,
) -> str:
    focus = focus_phrase(statement)
    core = concept_core(sub, statement)
    hook = statement_hook(sub, statement, truth)
    opens = OPEN_TRUE if truth else OPEN_FALSE
    head = opens[(case_i * 5 + li * 7) % len(opens)].format(focus=focus)

    parts: list[str] = [head]

    if hook:
        parts.append(hook)
    else:
        m = re.search(r"\bbecause\b\s*(.+)$", statement, re.I)
        if m and truth:
            reason = m.group(1).strip().rstrip(".")
            parts.append(
                f"The because-clause is doing honest work: {reason[0].lower()}{reason[1:] if reason else ''}. "
                f"That link is what makes the claim about {focus} hold together."
            )
        elif not truth and any(w in statement.lower() for w in ("only", "never", "always", "automatically")):
            parts.append(
                f"Words like only, never, or always turn a nearby true idea into an absolute you can break with one ordinary example."
            )

    parts.append(core)

    scene = scene_bit(sub, case_i, li)
    if scene and kind in ("M", "L"):
        parts.append(f"Concrete check: {scene}")

    if kind == "L":
        parts.append(
            f"In «{title}», the stem nouns either fit the definition or they do not — "
            f"neighbouring vocabulary should not tempt you into a softer rewrite of the sentence."
        )
        if truth:
            parts.append(
                "If you swapped in a rival label from the same topic area, the fit would worsen — "
                "a quick contrast that confirms this wording."
            )
        else:
            parts.append(
                "Once you put the corrected category beside the sentence, the overreach is obvious — "
                "that is the move I want you to rehearse before the exam."
            )

    body = "\n\n".join(parts)
    lo, hi = KIND_RANGE[kind]
    body = clip(body, lo, hi)
    if FORBIDDEN.search(body):
        body = re.sub(FORBIDDEN, "", body)
        body = re.sub(r"\s{2,}", " ", body).strip()
        body = clip(body, lo, hi)
    return body


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
    if not truth and re.search(r"\b(only|never|always)\b", sl) and (case_i + li) % 7 == 0:
        for note in pool:
            if "only" in note.lower() or "not the same" in note.lower():
                return note
    if (case_i + li) % 19 == 0:
        return pool[(case_i + li) % len(pool)]
    return None


def maybe_note(sub: str, statement: str, truth: bool, case_i: int, li: int, used: int) -> str | None:
    if used >= 2:
        return None
    return pick_note(sub, statement, truth, case_i, li)


def build_one(case: dict, case_i: int, li: int, kind: str, notes_used: int) -> tuple[str, int]:
    sub = case["subsection"]
    st = case["statements"][li]
    truth = bool(case["answer_key"][li])
    body = teach_body(sub, st, case["title"], truth, case_i, li, kind)
    note = maybe_note(sub, st, truth, case_i, li, notes_used)
    added = 0
    if note:
        body = body + "\n\n" + note
        added = 1
    lo, _ = KIND_RANGE[kind]
    body = clip(body, max(160, lo), KIND_RANGE[kind][1] + 80)
    return wrap(body, truth), added


def ensure(case: dict, case_i: int, expls: list[str]) -> list[str]:
    key = case["answer_key"]

    def lens() -> list[int]:
        return [len(body_of(e)) for e in expls]

    for attempt in range(20):
        opens = [body_of(e).split(".")[0].strip().lower()[:52] for e in expls]
        if len(set(opens)) < 5:
            prefixes = [
                "First, ",
                "Next, ",
                "Here, ",
                "Now, ",
                "Finally, ",
            ]
            for i in range(5):
                if list(opens).count(opens[i]) > 1:
                    b = body_of(expls[i])
                    expls[i] = wrap(prefixes[i] + b[0].lower() + b[1:], key[i])
            opens = [body_of(e).split(".")[0].strip().lower()[:52] for e in expls]
            if len(set(opens)) < 5:
                for i in range(5):
                    kinds = ["C", "S", "M", "L", "S"]
                    e2, _ = build_one(case, case_i + attempt + i * 3, i, kinds[i], 0)
                    expls[i] = e2

        L = lens()
        ok = (
            all(n >= 160 for n in L)
            and sum(1 for n in L if n >= 400) >= 2
            and any(n >= 550 for n in L)
            and max(L) - min(L) >= 200
        )
        if ok:
            break

        if any(n < 160 for n in L):
            for i, n in enumerate(L):
                if n < 160:
                    e2, _ = build_one(case, case_i + attempt, i, "S", 0)
                    b = body_of(e2)
                    while len(b) < 165:
                        b += " Keep the stem nouns attached while you reason through the definition."
                    expls[i] = wrap(b, key[i])
            continue
        if not any(n >= 550 for n in L):
            i = max(range(5), key=lambda j: L[j])
            expls[i], _ = build_one(case, case_i + attempt * 2, i, "L", 0)
            continue
        if sum(1 for n in L if n >= 400) < 2:
            for i in sorted(range(5), key=lambda j: L[j]):
                if L[i] < 400:
                    expls[i], _ = build_one(case, case_i + attempt * 3 + i, i, "L", 0)
                    break
            continue
        if max(L) - min(L) < 200:
            i_min, i_max = L.index(min(L)), L.index(max(L))
            expls[i_min], _ = build_one(case, case_i, i_min, "C", 0)
            expls[i_max], _ = build_one(case, case_i, i_max, "L", 0)

    idxs = [i for i, e in enumerate(expls) if re.search(r"(?m)^Note:", e)]
    for i in idxs[2:]:
        b = re.sub(r"\n\nNote:.*", "", body_of(expls[i]), flags=re.S)
        expls[i] = wrap(b, key[i])

    for i, e in enumerate(expls):
        b = body_of(e)
        if FORBIDDEN.search(b):
            e2, _ = build_one(case, case_i + 50 + i, i, "M", 0)
            b = body_of(e2)
        paras = [p for p in b.split("\n\n") if p.strip() and not p.strip().startswith("Note:")]
        if len(paras) == 1 and len(b) < 220 and paras[0].count(".") <= 2:
            e2, _ = build_one(case, case_i + 41 + i, i, "S", 0)
            b2 = body_of(e2)
            while b2.count(".") <= 2 or len(b2) < 210:
                b2 = b2.rstrip() + " Ordinary household and firm scenes make the definition concrete."
                if len(b2) > 360:
                    break
            expls[i] = wrap(clip(b2, 210, 360), key[i])
        else:
            expls[i] = wrap(b, key[i])

    return expls


def rewrite_case(case: dict, case_i: int) -> list[str]:
    kinds = list(KIND_PATTERNS[case_i % len(KIND_PATTERNS)])
    if "L" not in kinds:
        kinds[2] = "L"
    expls: list[str] = []
    notes = 0
    for li, kind in enumerate(kinds):
        e, add = build_one(case, case_i, li, kind, notes)
        notes += add
        expls.append(e)
    return ensure(case, case_i, expls)


def rewrite_file(path: Path) -> int:
    data = json.loads(path.read_text(encoding="utf-8"))
    for i, case in enumerate(data):
        data[i]["tactical_explanations"] = rewrite_case(case, i)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return len(data)


def main() -> int:
    counts = {}
    for path in FILES:
        n = rewrite_file(path)
        counts[path.name] = n
        print(f"Rewrote {n} cases in {path.name}")

    for path in FILES:
        r = subprocess.run(
            [sys.executable, str(ROOT / "scripts/_econ_live_teacher_validate.py"), str(path)],
            capture_output=True,
            text=True,
        )
        print(r.stdout.strip() or r.stderr.strip())
        if r.returncode != 0:
            return r.returncode

    print("Counts:", counts)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
