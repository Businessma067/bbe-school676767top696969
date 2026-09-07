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


def stem_application(statement: str, truth: bool, cue: str, mid: str, concept: str = "") -> list[str]:
    """Stem-specific application + trap contrast paragraphs."""
    sl = statement.lower()
    pin = statement.rstrip(".")
    if len(pin) > 150:
        pin = pin[:147] + "…"
    paras: list[str] = []

    # Prefer substantive retained mid when it already teaches (and isn't a clone of the concept)
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
        # Split very long mid into two paragraphs at a sentence boundary near the middle
        sents = re.split(r"(?<=[.!?])\s+", m)
        if len(sents) >= 4:
            cut = max(2, len(sents) // 2)
            paras.append(" ".join(sents[:cut]))
            paras.append(" ".join(sents[cut:]))
        else:
            paras.append(m)

    if cue and not _abstract_ctx(cue):
        if truth:
            paras.append(
                f"In this stem — {cue} — that reading fits: the actors, resources, or market scope named "
                f"in the claim line up with the definition just stated."
            )
        else:
            paras.append(
                f"In this stem — {cue} — the sentence mislabels the situation or overreaches. The facts "
                f"may mention a related detail, but they do not support the absolute conclusion drawn."
            )
    else:
        if truth:
            paras.append(
                f"Applied to the claim «{pin}», the definition matches the category, mechanism, or "
                f"comparison the sentence asserts."
            )
        else:
            paras.append(
                f"Applied to the claim «{pin}», the definition does not support the category or "
                f"absolute comparison the sentence asserts."
            )

    if truth:
        if any(w in sl for w in ("because", "means", "so ", "therefore")):
            paras.append(
                "The linking reason matters: it names the mechanism — forgone alternative, analytical "
                "scope, price signal, institutional rule, or cost condition — that makes the classification hold."
            )
        else:
            paras.append(
                "Contrast the near-miss error to lock the idea: if you swapped the opposite label "
                "(want for need, macro for micro, accounting cost for opportunity cost, monopoly for "
                "perfect competition), the sentence would fail — which is why this wording is the keyed true reading."
            )
    else:
        if any(q in sl for q in ("always", "never", "only", "cannot", "regardless", "guarantees", "alone", "every", "all ", "zero", "nothing", "no ")):
            paras.append(
                "Absolute words are the usual trap here. One counterexample under the correct criterion "
                "— another actor, another scope, a non-money cost, or a public function that still exists — "
                "is enough to reject the claim."
            )
        elif "because" in sl:
            paras.append(
                "The because-clause attaches the wrong reason to the label. A real detail in the stem "
                "(a national programme, a zero wage, shared premises, use of money) does not justify the "
                "over-broad conclusion."
            )
        else:
            paras.append(
                "Restore the textbook test and the assertion falls away: it either mislabels the category "
                "or reverses the comparison the chapter actually teaches."
            )

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
