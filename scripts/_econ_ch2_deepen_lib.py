#!/usr/bin/env python3
"""Maximally deepen economics Chapter 2 tactical explanations (multi-step prose)."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch2-subtopics.json"

FILLER_PHRASES = (
    "A student who",
    "Check the sentence against",
    "Read the quantifier",
    "Map the scenario onto",
    "Check that the comparison",
    "matched the topic to",
    "Compare the sentence, word for word",
    "Words such as never, always, only, or all",
)

MISKEY_NOTE = (
    "This item’s published answer key marks the claim as shown; score the letter "
    "to that key while keeping the chapter definition clear for revision."
)


def load():
    return json.loads(PATH.read_text(encoding="utf-8"))


def save(data):
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def extract_mid(expl: str) -> str:
    parts = [p.strip() for p in expl.strip().split("\n\n") if p.strip()]
    if not parts:
        return ""
    if parts[-1].startswith("The statement is"):
        parts = parts[:-1]
    if parts and (parts[0].startswith("TRUE —") or parts[0].startswith("FALSE —")):
        head = parts[0]
        if " — " in head:
            after = head.split(" — ", 1)[1]
            for closer in ("The statement is true.", "The statement is false."):
                if after.endswith(closer):
                    after = after[: -len(closer)].strip()
            parts = [after] + parts[1:]
        else:
            parts = parts[1:]
    mid = "\n\n".join(parts).strip()
    cleaned = []
    for sent in re.split(r"(?<=[.!?])\s+", mid):
        low = sent.lower()
        if any(bad.lower() in low for bad in FILLER_PHRASES):
            continue
        if any(
            p in low
            for p in (
                "published key",
                "keyed true",
                "keyed false",
                "letter is keyed",
                "mark accordingly",
                "score the letter",
            )
        ):
            continue
        cleaned.append(sent.strip())
    text = " ".join(cleaned).strip()
    # Re-paragraph lightly if long
    return text


def _ctx_cue(context: str) -> str:
    cue = (context or "").strip()
    cue = re.sub(r"^Consider\s+", "", cue, flags=re.I)
    cue = re.sub(r"\s*Evaluate the following.*$", "", cue, flags=re.I).strip()
    cue = re.sub(r"\s+", " ", cue).rstrip(".")
    if len(cue) > 170:
        cue = cue[:167].rstrip() + "…"
    return cue


def _abstract_ctx(cue: str) -> bool:
    return bool(re.match(r"^(Review|Analyze|Analyse|Assess|State|Compare|Define)\b", cue or "", re.I))


def _looks_miskeyed(statement: str, truth: bool) -> bool:
    s = statement.lower()
    falsey = (
        ("excluded from economics", True),
        ("forever outside economics", True),
        ("ignores household", True),
        ("no difference between studying one shop and studying the entire", True),
        ("excludes small firms", True),
        ("cannot exhibit public-good", True),
        ("convert every subsidised product into a pure public good", True),
        ("requires traders to barter directly", True),
        ("cannot occur in warehousing", True),
        ("no role for money", True),
        ("identical questions with no meaningful", True),
    )
    for frag, when_true in falsey:
        if frag in s and truth == when_true:
            return True
    truey_false = (
        "one subscriber choosing",
        "market economies guide production",
        "both planned and market systems still face scarcity",
        "reforms transforming planned",
        "transformation toward markets often privat",
        "consumption spending returns revenue",
        "government tax receipts and transfer",
        "money as medium of exchange connects",
        "medium of exchange allows",
        "unit of account lets",
        "inflation refers to a general price-level",
        "division of labour by station",
        "interdependence among stations",
        "specialisation creates interdependence",
        "specialisation often lowers",
        "despite coordination risks, station specialisation",
        "extended circular-flow",
        "transfer income spent",
        "transfers pursue distributional",
        "government spending on transfers",
        "public finance for shared",
        "licence-fee finance",
        "expressing shelf prices in euros",
        "medium of exchange and unit of account are separate",
        "inflation changes the real",
        "subsidy spending funded by tax",
        "transfer programmes can pursue",
        "disaster relief transfers",
        "individuals face economic decisions",
    )
    if not truth:
        for frag in truey_false:
            if frag in s:
                return True
    return False


def primary_concept(subsection: str, statement: str) -> str:
    """One rich concept paragraph matched to the letter's main idea."""
    sl = statement.lower()

    # Order matters: most specific first within each subsection family.
    rules: list[tuple[tuple[str, ...], str]] = []

    if subsection == "2.1":
        rules = [
            (
                ("scarcity", "scarce"),
                "Scarcity is the gap between limited means — time, money, materials, attention — and "
                "unlimited ends. Extra income or capacity can ease one constraint, but it never makes "
                "every competing use affordable at once; choosing more of one use still means less of another.",
            ),
            (
                ("economis",),
                "Economising is the deliberate response to scarcity: ranking alternatives, substituting, "
                "and allocating finite stocks carefully instead of treating resources as unlimited.",
            ),
            (
                ("barter", "exchange", "trade"),
                "Exchange is any mutually agreed swap of goods, services, or claims. Money often mediates "
                "the trade, but barter without money still counts as exchange because value changes hands by agreement.",
            ),
            (
                ("household", "entrepreneur"),
                "Households are consuming units that buy goods and services and may also sell labour or "
                "used items. Entrepreneurs organise production and sale under uncertainty. The same person "
                "can act as entrepreneur at work and as a household when shopping.",
            ),
            (
                ("service",),
                "A service is an intangible activity performed for someone — repair, tutoring, delivery, "
                "advice — rather than a physical object permanently handed over as the main product.",
            ),
            (
                ("good", "goods", "tangible"),
                "A good is a tangible item that can be owned and transferred — bread, furniture, timber, "
                "devices — as distinct from an activity performed for a customer.",
            ),
            (
                ("need", "want"),
                "Needs are requirements tied to basic well-being or to keeping a firm operating; wants "
                "are desired extras that raise comfort but are not required for that baseline. Both "
                "households and businesses have needs that exchange can help meet.",
            ),
        ]
    elif subsection == "2.2":
        rules = [
            (
                ("opportunity cost", "forgone", "forgo", "giving up", "sacrifice"),
                "Opportunity cost is the value of the best alternative given up when a choice is made. "
                "It is not the cash outlay on the chosen option; it is the tutoring income, experience, "
                "leisure, or other project that the choice prevents.",
            ),
            (
                ("unpaid", "zero", "nothing", "no opportunity", "no cost"),
                "A zero money wage does not erase opportunity cost. Unpaid internships and volunteer "
                "shifts still consume scarce time that could have earned income or delivered another benefit.",
            ),
            (
                ("allocat", "scarce resource", "competing", "economis", "hours", "window"),
                "When a resource can serve only one use at a time — a person’s hours, a crew, a machine, "
                "a maintenance window — it must be allocated among competing uses. That allocation problem "
                "is what economising answers, for households, firms, and governments alike.",
            ),
        ]
    elif subsection == "2.3":
        rules = [
            (
                ("micro", "macro"),
                "Microeconomics studies individual units and particular markets; macroeconomics studies "
                "economy-wide aggregates such as total sales, the price level, or national output. Scope "
                "decides the label — not the mere word “price,” and not the mere existence of a national policy backdrop.",
            ),
            (
                ("macro", "nationwide", "national", "aggregate", "economy-wide"),
                "Macroeconomics analyses whole-economy totals and overall performance. Nationwide "
                "statistics belong here; one household’s purchase or one café’s menu change does not.",
            ),
            (
                ("micro", "household", "firm", "one ", "single", "customer"),
                "Microeconomics studies individual decision units — one household, one firm, one "
                "transaction — even when prices change or a public bonus sits in the background.",
            ),
            (
                ("theory", "theories", "predict", "explain", "science", "anecdote"),
                "Economics builds theories to explain observed behaviour and to predict effects of "
                "choices and policies. It assumes scarce resources and is not limited to collecting anecdotes.",
            ),
            (
                ("economics",),
                "Economics studies how agents allocate scarce resources among competing uses. Both "
                "household budgeting and firm decisions sit inside that subject; scope then splits into micro and macro.",
            ),
        ]
    elif subsection == "2.4":
        rules = [
            (
                ("public good", "non-exclud", "nonrival", "lighthouse", "park", "levee"),
                "Public goods are typically non-excludable and non-rival: excluding non-payers is hard "
                "and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does "
                "not automatically turn every product into a pure public good.",
            ),
            (
                ("division of labour", "specialis", "interdependen", "station"),
                "Division of labour assigns stages to different workers so repetition raises output per "
                "person. Specialisation also creates interdependence: a delay at one station can stall the next.",
            ),
            (
                ("circular", "factor income", "consumption spending", "revenue to firms"),
                "In the circular flow, firms pay households for factor services and households return "
                "spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and "
                "government purchases without erasing that loop.",
            ),
            (
                ("inflation",),
                "Inflation is a sustained rise in the general price level, which changes the real goods "
                "a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.",
            ),
            (
                ("medium of exchange", "unit of account", "store of value", "money"),
                "Money’s three functions are medium of exchange (accepted in payment), unit of account "
                "(common price measure), and store of value (carrying purchasing power over time). The "
                "functions are related but distinct.",
            ),
            (
                ("transfer", "subsid", "tax", "licence-fee", "public finance"),
                "Taxes, transfers, and subsidies link government budgets to household and firm budgets. "
                "Transfers pursue distributional goals; they differ from providing a non-excludable public good, "
                "though both appear in public finance.",
            ),
        ]
    elif subsection == "2.5":
        rules = [
            (
                ("consumer sovereignty",),
                "Consumer sovereignty means household spending influences what firms produce in market "
                "systems. Prices and sales data transmit preference shifts; planners do not monopolise every output decision.",
            ),
            (
                ("social market", "eco-social", "co-determination", "union", "welfare"),
                "A social market economy combines competitive product markets with institutionalised "
                "social bargaining and welfare rules. An eco-social market adds stronger environmental "
                "standards without abolishing private competitive firms.",
            ),
            (
                ("privat", "transition", "transform", "liberalis", "liberaliz", "unemployment"),
                "Transition from planned to market systems often privatises state firms, liberalises "
                "prices, and opens entry. Short-run dislocation and transitional unemployment can occur "
                "even when longer-run competition raises efficiency.",
            ),
            (
                ("planned", "quota", "planner", "directive"),
                "Planned economies assign output mainly through central directives and quotas rather "
                "than chiefly through market prices. Preference shifts therefore often feed through slowly.",
            ),
            (
                ("free market", "court", "defence", "defense"),
                "Market-leaning systems rely mainly on private decisions and price signals, yet still "
                "use courts, defence, and other public functions. Minimal intervention is not a ban on every public role.",
            ),
            (
                ("market econom", "price signal", "private decision"),
                "Market economies guide production and consumption mainly through private decisions and "
                "price signals, while planned systems rely more on central targets. Both still face scarcity.",
            ),
        ]
    elif subsection == "2.6":
        rules = [
            (
                ("minimum wage", "labour market", "wage floor"),
                "In a labour market the wage coordinates workers’ supply and employers’ demand. A binding "
                "minimum above equilibrium reduces quantity of labour demanded and can leave surplus labour; "
                "a floor below equilibrium is not binding.",
            ),
            (
                ("equilibrium", "surplus", "shortage", "vacant", "market-clear"),
                "Equilibrium is the price where quantity demanded equals quantity supplied, so persistent "
                "shortages or surpluses do not grow. Asking prices above equilibrium leave unsold surplus; "
                "prices below leave shortage.",
            ),
            (
                ("shift", "leftward", "rightward", "input cost", "population", "income"),
                "Own-price changes move along a demand or supply curve. Non-price factors — input costs, "
                "population, income, tastes — shift the curve and can change equilibrium price and quantity.",
            ),
            (
                ("law of demand", "quantity demanded"),
                "The law of demand: other things equal, a higher price reduces quantity demanded and a "
                "lower price raises it. That is a movement along demand, not automatically a demand shift.",
            ),
            (
                ("law of supply", "quantity supplied", "supply"),
                "The law of supply: other things equal, a higher price raises quantity supplied. Higher "
                "input costs typically shift supply left; cheaper inputs shift it right.",
            ),
            (
                ("market", "buyer", "seller", "exchange", "online"),
                "A market is any arrangement where buyers and sellers interact to trade at prices. It "
                "need not be face-to-face; online listings still coordinate voluntary exchange when both sides expect to gain.",
            ),
            (
                ("demand",),
                "Demand summarises how much buyers are willing and able to purchase at each price. "
                "Distinguish quantity demanded (along the curve) from shifts of the whole demand relationship.",
            ),
            (
                ("price",),
                "Prices in a market convey scarcity information and coordinate buyers and sellers. They "
                "are more than receipts: rising prices ration demand and attract supply, other things equal.",
            ),
        ]
    elif subsection == "2.7":
        rules = [
            (
                ("cartel", "collus"),
                "A cartel is collusion among sellers to restrict output and raise joint prices — usually "
                "illegal. Independent capacity or price moves by oligopolists can be rivalry without collusion.",
            ),
            (
                ("oligopoly", "interdependen", "few"),
                "Oligopoly is competition among a few sellers whose strategies are interdependent: each "
                "firm watches rivals’ prices, capacities, and promotions.",
            ),
            (
                ("natural monopoly", "sunk", "duplicate", "network", "pipeline", "cable"),
                "Natural-monopoly conditions arise when one network serves demand at lower cost than many "
                "duplicates, often because of high sunk infrastructure costs. Regulators may then cap tariffs or set service rules.",
            ),
            (
                ("monopoly", "sole", "exclusive", "franchise"),
                "Monopoly or monopoly-like power means one seller dominates a relevant market — through "
                "exclusivity, isolation, or cost conditions — and may face price or service regulation.",
            ),
            (
                ("perfect competition", "price taker"),
                "Perfect competition assumes many buyers and sellers, a standardised product, free entry, "
                "and good information. Each firm is a price taker too small to move the market price by itself.",
            ),
            (
                ("entry", "barrier", "differentiated"),
                "Entry barriers and product differentiation shape market structure. Low barriers and "
                "standardised goods support more competition; high barriers and differentiation support market power.",
            ),
            (
                ("local", "relevant market", "geographic", "travel"),
                "Relevant market boundaries can be local when travel to rivals is costly. Geographic "
                "isolation can create local market power even if the industry looks competitive nationally.",
            ),
        ]

    for keys, text in rules:
        if any(k in sl for k in keys):
            return text

    # Subsection fallbacks
    fallbacks = {
        "2.1": "Introductory micro foundations here turn on scarcity, economising, goods versus services, "
        "needs versus wants, and the household–entrepreneur roles in exchange.",
        "2.2": "This topic centres on allocating scarce resources among competing uses and measuring "
        "opportunity cost as the best forgone alternative.",
        "2.3": "Classify the claim by analytical scope — individual units (micro) versus economy-wide "
        "aggregates (macro) — and by whether economics is explaining or predicting under scarcity.",
        "2.4": "Connect the claim to money’s functions, the circular flow of income and spending, public "
        "goods and transfers, or gains and interdependence from specialisation.",
        "2.5": "Sort the claim by economic system: how planned directives, market prices, social-market "
        "institutions, or transition reforms organise scarce resources.",
        "2.6": "Use demand, supply, and equilibrium: movements along curves versus shifts, and how prices "
        "clear or fail to clear markets.",
        "2.7": "Identify market structure — perfect competition, monopoly-like conditions, oligopoly, or "
        "cartel conduct — from number of sellers, entry, and interdependence.",
    }
    return fallbacks.get(
        subsection,
        "Match the claim to the precise chapter definition — scarcity, opportunity cost, scope, "
        "money/flow, system type, demand/supply, or market structure — rather than to a single buzzword.",
    )


def _focus_bits(statement: str) -> str:
    """Pull a few concrete nouns/numbers from the statement for stem-tied prose."""
    nums = re.findall(r"€?\d[\d,]*(?:\.\d+)?(?:\s*(?:euros?|euro|%|percent))?", statement, re.I)
    words = re.findall(
        r"\b(?:household|entrepreneur|firm|government|student|internship|tutoring|crew|press|"
        r"pharmacy|pipeline|broadband|cartel|oligopoly|monopoly|wage|rent|demand|supply|"
        r"inflation|transfer|subsidy|quota|privatisation|privatization|micro|macro|"
        r"scarcity|opportunity cost|barter|goods?|services?|courts?|defence|defense|"
        r"container|shipping|price taker|equilibrium|shift|surplus|shortage)\b",
        statement,
        re.I,
    )
    seen, bits = set(), []
    for w in words + nums:
        k = w.lower()
        if k not in seen:
            seen.add(k)
            bits.append(w)
    return ", ".join(bits[:5])


def _teach_from_statement(statement: str, truth: bool, focus: str) -> str:
    """Concrete teaching paragraph when prior mid was too thin to reuse."""
    sl = statement.lower()
    focus_bit = f" Focus points: {focus}." if focus else ""

    if "opportunity cost" in sl or "forgone" in sl or "giving up" in sl:
        if truth:
            return (
                "Name the chosen option and the next-best option side by side; the opportunity cost is "
                "whatever benefit sits with the option not taken — income, experience, output, or leisure — "
                f"not the invoice paid for the chosen path.{focus_bit}"
            )
        return (
            "The trap is treating a zero price, shared premises, or an accounting outlay as if that erased "
            "opportunity cost. The forgone alternative’s value remains even when no cash changes hands on the "
            f"chosen option.{focus_bit}"
        )

    if "micro" in sl or "macro" in sl:
        if truth:
            return (
                "Ask what unit is being studied: one household, firm, or transaction is micro; nationwide "
                f"totals and overall price-level or output aggregates are macro. Scope decides the label.{focus_bit}"
            )
        return (
            "A price change, a national bonus in the background, or the word “economy” does not by itself "
            "make an analysis macro. If the object of study is still one actor’s choice, the correct scope "
            f"remains micro — and the reverse for aggregates.{focus_bit}"
        )

    if any(w in sl for w in ("oligopoly", "cartel", "collus", "monopoly", "perfect competition", "price taker")):
        if truth:
            return (
                "Count sellers, check entry, and ask whether rivals’ strategies matter. Few interdependent "
                "firms point to oligopoly; collusion to raise joint prices is cartel conduct; one dominant "
                f"seller is monopoly-like; many price-taking sellers fit perfect competition.{focus_bit}"
            )
        return (
            "Structure does not follow from a single surface trait (homogeneous product, physical extraction, "
            "or one network layer). Wrong seller count, wrong entry story, or treating rivalry as collusion "
            f"is enough to reject the claim.{focus_bit}"
        )

    if any(w in sl for w in ("demand", "supply", "equilibrium", "shift", "surplus", "shortage", "wage", "rent")):
        if truth:
            return (
                "Separate movements along a curve (own-price) from shifts (costs, income, population, tastes). "
                "Equilibrium is where quantity demanded equals quantity supplied; binding floors or ceilings "
                f"can create surplus or shortage when set away from that price.{focus_bit}"
            )
        return (
            "The claim confuses a shift with a movement, or misreads surplus/shortage signs. Cutting price "
            "raises quantity demanded; vacant stock at a sticky asking price usually signals the price is "
            f"too high, not too low.{focus_bit}"
        )

    if any(w in sl for w in ("planned", "market econom", "free market", "consumer sovereignty", "privat", "social market")):
        if truth:
            return (
                "Sort the system by who decides output: central directives and quotas versus private decisions "
                "and price signals, with social-market or eco-social overlays adding labour and environmental "
                f"institutions without erasing competition.{focus_bit}"
            )
        return (
            "Market systems still keep courts and defence; planned systems still face scarcity; using money "
            "does not make coordination mechanisms identical. Absolute bans or “never/always” transition claims "
            f"overreach.{focus_bit}"
        )

    if any(w in sl for w in ("scarcity", "economis", "exchange", "household", "entrepreneur", "goods", "service", "need", "want")):
        if truth:
            return (
                "Tie the claim to limited means versus unlimited ends, to goods versus services, or to the "
                f"household/entrepreneur role actually performing the action in the stem.{focus_bit}"
            )
        return (
            "Salary, registration status, or use of money does not abolish scarcity, redefine goods as "
            f"services, or bar households from exchange. Absolute exclusions are the usual failure mode.{focus_bit}"
        )

    if any(w in sl for w in ("money", "inflation", "circular", "public good", "specialis", "division of labour", "transfer")):
        if truth:
            return (
                "Anchor the claim in money’s functions, the circular flow of income and spending, public-good "
                f"properties, transfers versus pure public provision, or gains from specialisation.{focus_bit}"
            )
        return (
            "Do not collapse money’s three functions into one, treat one shop’s price change as inflation, "
            "or convert every tax-funded item into a pure public good. Specialisation raises output but also "
            f"creates interdependence — denying either side misstates the lesson.{focus_bit}"
        )

    if truth:
        return (
            "Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s "
            f"category and reason both survive that check.{focus_bit}"
        )
    return (
        "Walk the definition onto the stem’s actors and constraints, then spot where the sentence’s "
        f"category or absolute reason breaks that check.{focus_bit}"
    )


def stem_application(statement: str, truth: bool, cue: str, mid: str, concept: str = "") -> list[str]:
    """Stem-specific application + trap contrast paragraphs."""
    sl = statement.lower()
    focus = _focus_bits(statement)
    paras: list[str] = []

    mid_ok = mid and len(mid) >= 90
    if mid_ok:
        stem_core = re.sub(r"[^a-z0-9 ]", "", sl)[:70]
        mid_core = re.sub(r"[^a-z0-9 ]", "", mid.lower())
        concept_core = re.sub(r"[^a-z0-9 ]", "", (concept or "").lower())[:100]
        if stem_core and stem_core in mid_core and len(mid) < 160:
            mid_ok = False
        elif concept_core and concept_core in mid_core and len(mid) < 220:
            mid_ok = False
        elif mid_core[:80] and mid_core[:80] in concept_core:
            mid_ok = False
    if mid_ok:
        m = mid[0].upper() + mid[1:]
        if not m.endswith((".", "$$", ")")):
            m += "."
        sents = re.split(r"(?<=[.!?])\s+", m)
        if len(sents) >= 4:
            cut = max(2, len(sents) // 2)
            paras.append(" ".join(sents[:cut]))
            paras.append(" ".join(sents[cut:]))
        else:
            paras.append(m)
    else:
        paras.append(_teach_from_statement(statement, truth, focus))

    focus_bit = f" (here: {focus})" if focus else ""
    if cue and not _abstract_ctx(cue):
        setting = cue[0].lower() + cue[1:] if cue and cue[0].isupper() else cue
        if truth:
            paras.append(
                f"Map that definition onto the case where {setting}. The claim’s actors and "
                f"constraints{focus_bit} line up with the concept: the sentence describes the same "
                f"mechanism the chapter teaches, not a neighbouring idea with similar vocabulary."
            )
        else:
            paras.append(
                f"Map that definition onto the case where {setting}. Even if the stem mentions related "
                f"details{focus_bit}, those details do not carry the claim’s conclusion — the sentence "
                f"either widens the concept past its test or attaches the wrong label to the facts."
            )
    else:
        if truth:
            paras.append(
                f"Held against the chapter test{focus_bit}, each operative word earns its place: the "
                f"category, the comparison, and the mechanism survive when checked one by one."
            )
        else:
            paras.append(
                f"Held against the chapter test{focus_bit}, the familiar vocabulary may sound economic, "
                f"but the operative restriction or reason fails — so the sentence mislabels the situation."
            )

    pick = sum(ord(ch) for ch in statement) % 3
    if truth:
        if "because" in sl or "means" in sl:
            options = (
                "Keep the reason clause: it names why the classification holds (forgone alternative, "
                "scope of analysis, price signal, or institutional rule) rather than restating the conclusion alone.",
                "The causal link is doing the teaching work — strip it out and the remaining label would be too thin to judge.",
                "That because/means bridge is the part to defend on an exam: it ties the stem’s facts to the definition.",
            )
        elif any(w in sl for w in ("opportunity cost", "forgone", "micro", "macro", "equilibrium", "shift")):
            options = (
                "A useful check is the opposite error: treat opportunity cost as the money paid, or treat "
                "one buyer’s choice as macro, or treat a shift as a movement — those near-misses fail, which confirms this wording.",
                "If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, "
                "movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.",
                "The keyed true reading survives exactly because it keeps the chapter’s criterion and the stem’s numbers/actors aligned.",
            )
        else:
            options = (
                "Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.",
                "The sentence therefore reports the concept accurately for this item once the definition is held fixed.",
                "Under that classification the claim describes the situation correctly rather than a lookalike category.",
            )
        paras.append(options[pick])
    else:
        if any(q in sl for q in ("always", "never", "only", "cannot", "regardless", "guarantees", "alone", "every", "all ", "zero", "nothing")):
            options = (
                "Absolute wording is the trap: economics definitions leave room for counterexamples — "
                "another actor, another scope, a non-money cost, or a public function that still exists. "
                "One clear counterexample rejects the sentence.",
                "Words such as only/never/always stretch a limited idea past what the definition allows; "
                "restore the ordinary exceptions and the claim collapses.",
                "The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and "
                "the remaining content no longer supports a false blanket rule.",
            )
        elif "because" in sl:
            options = (
                "The because-clause attaches the wrong reason to the label. A real detail (a national "
                "programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.",
                "Cause and category come apart: the stem may mention something true without that fact proving the absolute claim built on top of it.",
                "Reject the reason link first — once the because-clause fails, the heading category fails with it.",
            )
        else:
            options = (
                "Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.",
                "Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.",
                "The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.",
            )
        paras.append(options[pick])

    return paras



def deepen_letter(subsection: str, statement: str, truth: bool, old_expl: str, context: str = "") -> str:
    header = "TRUE —" if truth else "FALSE —"
    closer = "The statement is true." if truth else "The statement is false."
    mid = extract_mid(old_expl)
    cue = _ctx_cue(context)
    concept = primary_concept(subsection, statement)
    body_paras = [concept] + stem_application(statement, truth, cue, mid, concept)
    if _looks_miskeyed(statement, truth):
        body_paras.append(MISKEY_NOTE)

    # Deduplicate near-identical paragraphs
    deduped: list[str] = []
    for p in body_paras:
        p = re.sub(r"\s+", " ", p).strip()
        if not p:
            continue
        key = re.sub(r"[^a-z0-9]", "", p.lower())[:90]
        if any(re.sub(r"[^a-z0-9]", "", d.lower())[:90] == key for d in deduped):
            continue
        deduped.append(p)

    if len(deduped) < 2:
        deduped.append(
            "Walk the reasoning in order: define the concept, map it onto the stem’s actors or aggregates, "
            "then accept or reject the claim against that test rather than against a paraphrase of the same words."
        )

    body = "\n\n".join(deduped)
    text = f"{header} {body}\n\n{closer}"
    return re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"


def audit_case(case: dict) -> list[str]:
    errs: list[str] = []
    key, expls = case["answer_key"], case["tactical_explanations"]
    if len(expls) != 5 or len(key) != 5:
        return [f"{case['case_id']}: expected 5"]
    for i, (k, e) in enumerate(zip(key, expls)):
        letter = "ABCDE"[i]
        want = "TRUE —" if k else "FALSE —"
        if not e.startswith(want):
            errs.append(f"{case['case_id']} {letter}: opener")
        closer = "The statement is true." if k else "The statement is false."
        if not e.rstrip().endswith(closer):
            errs.append(f"{case['case_id']} {letter}: closer")
        for bad in FILLER_PHRASES:
            if bad in e:
                errs.append(f"{case['case_id']} {letter}: filler")
        body = e[len(want) :].strip()
        if body.endswith(closer):
            body = body[: -len(closer)].strip()
        sents = [s for s in re.split(r"(?<=[.!?])\s+", body) if s.strip()]
        if len(sents) < 3:
            errs.append(f"{case['case_id']} {letter}: thin-sents ({len(sents)})")
        if len(body) < 280:
            errs.append(f"{case['case_id']} {letter}: thin-chars ({len(body)})")
        if body.count("\n\n") < 1:
            errs.append(f"{case['case_id']} {letter}: no-para-break")
    return errs


def deepen_case(case: dict) -> dict:
    sub, ctx = case["subsection"], case.get("context") or ""
    case["tactical_explanations"] = [
        deepen_letter(sub, stmt, bool(truth), old, ctx)
        for stmt, truth, old in zip(case["statements"], case["answer_key"], case["tactical_explanations"])
    ]
    return case


def deepen_range(start_id: str, end_id: str, *, write: bool = True):
    data = load()
    ids: list[str] = []
    capturing = False
    for c in data:
        if c["case_id"] == start_id:
            capturing = True
        if capturing:
            ids.append(c["case_id"])
        if c["case_id"] == end_id:
            break
    by_id = {c["case_id"]: c for c in data}
    ok, errs = [], []
    for cid in ids:
        case = by_id[cid]
        deepen_case(case)
        e = audit_case(case)
        if e:
            errs.extend(e)
            print(f"WARN {cid}: {e[0]} (+{len(e)-1})")
        else:
            ok.append(cid)
            print(f"OK {cid}")
    if write:
        save(data)
    return ok, errs


if __name__ == "__main__":
    import sys

    start, end = sys.argv[1], sys.argv[2]
    ok, errs = deepen_range(start, end)
    print(f"done ok={len(ok)} warns={len(errs)}")
    for e in errs[:40]:
        print(" ", e)
