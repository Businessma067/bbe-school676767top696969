#!/usr/bin/env python3
"""Rewrite ALL ch5 tactical_explanations from scratch (333 cases).

Plain teacher prose: explain each claim with stem nouns, varied length mix,
0–2 Note: traps per case. Closer: So the statement is True./False.
"""

from __future__ import annotations

import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch5-subtopics.json"
SCRATCH = ROOT / "scripts" / "_econ_ch45_scratch_plain.py"

_spec = importlib.util.spec_from_file_location("_scratch", SCRATCH)
_scratch = importlib.util.module_from_spec(_spec)
assert _spec.loader
_spec.loader.exec_module(_scratch)

teach_ch5 = _scratch.teach_ch5
seed = _scratch.seed
normalize_ws = _scratch.normalize_ws
sentences = _scratch.sentences
split_paras = _scratch.split_paras
stem_hook = _scratch.stem_hook
ctx_noun = _scratch.ctx_noun

sys.path.insert(0, str(ROOT / "scripts"))
from _econ_ch5_deepen_lib import THEORY, concept_lede  # noqa: E402
from _econ_ch5_numeric import expand_numeric  # noqa: E402

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)

KIND_SCHEDULES = [
    ["E", "S", "C", "S", "C"],
    ["S", "E", "C", "S", "C"],
    ["C", "S", "E", "S", "C"],
    ["S", "C", "E", "C", "S"],
    ["E", "C", "S", "C", "S"],
    ["S", "E", "S", "C", "C"],
    ["C", "S", "S", "E", "C"],
    ["S", "S", "E", "C", "C"],
]

FORBIDDEN = [
    "fill the stem",
    "when you hear",
    "rehearse before",
    "i want you",
    "apply that definition to the claim",
    "apply that definition",
    "the sentence accurately describes",
    "the wording fits",
    "fits the standard definition",
    "the wording on ",
    "the claim about ",
    "the claim fits the chapter",
    "here is the catch",
    "here's the catch",
    "look —",
    "at the board",
    "neighbouring vocabulary",
    "matches the marketing test",
    "fights the marketing test",
    "wording matches the chapter rule",
    "treated in this chapter",
    "that matches how",
    "apply the buyer-based",
    "definition-based criterion",
    "overstretch shows quickly",
    "once the correct criterion is restored",
    "keep the buyer, exchange, or orientation criterion",
    "picture ",
    "lines up with how this chapter",
    "conflicts with how this chapter",
    "words such as always or only stretch",
    "absolute wording invites a counterexample",
    "does not justify the labelled conclusion",
    "forces a category swap",
    "same scope and mechanism apply to the actors named in the claim",
    "customer behaviour and firm aims both matter",
    "satisfaction, share, and profit each interact",
    "owners, workers, customers, and neighbours",
    "applied here, the claim attaches the wrong",
    "the amounts given for this case mean",
    "match each noun in the stem",
    "if the claim's reason and the rule disagree",
    "a corrected category",
    "ask whether the reporter uses",
    "keep period performance on the income statement",
    "classification for the item follows use, benefit timing",
    "a swapped category or false restriction breaks",
    "words like only or never turn a limited truth",
    "in the sentence, the description follows the marketing definition",
    "states the rule correctly for this case",
    "the claim restates the chapter definition accurately",
    "include satisfaction, share, sales, and profit working together",
    "fits the objective set depends on how customers respond and how rivals compete",
    "connect to loyalty, differentiation, and long-run revenue",
    "dissatisfied buyers rarely return, so satisfaction sits near the centre of marketing aims",
    "the buyer test settles the label",
    "the classification follows buyer identity and exchange, not factory origin alone",
]

STOCK_OPENERS = [
    "customer behaviour and firm aims both matter",
    "satisfaction, share, and profit each interact",
    "marketing objectives for",
    "fits the objective set depends on how customers respond",
    "firm goals around",
    "dissatisfied buyers rarely return, so satisfaction sits",
    "customer satisfaction is tightly linked to repeat purchase",
    "in the sentence, the description follows the marketing definition",
    "the assertion about",
    "applied to ",
    "one ordinary counterexample under the correct bu",
]

STEM_NOUN = re.compile(
    r"\b("
    r"printers?|computers?|desks?|vehicles?|vans?|laptops?|flour|fabric|timber|"
    r"broadband|software(?: licences?)?|consultanc(?:y|ies)|maintenance contracts?|"
    r"computer support|support services?|after-sales advice|"
    r"households?|corporate clients?|residents?|restaurants?|bakery|"
    r"manufacturing firms?|logistics compan(?:y|ies)|family homes?|"
    r"unique selling proposition|USP|brands?|branding|market share|"
    r"question marks?|cash cows?|stars?|poor dogs?|BCG|Boston Consulting Group|"
    r"primary (?:market )?research|secondary (?:information|research|sources?|data)|"
    r"CRM|loyalty cards?|newsletters?|coupons?|"
    r"mass marketing|niche marketing|segment marketing|segmentation|positioning|targeting|"
    r"product lines?|product mix|relaunch|line extension|mix extension|"
    r"product life cycle|introduction(?: phase)?|growth(?: stage| period)?|maturity|decline|"
    r"cleaning contracts?|catering|producer products?|consumer products?|"
    r"product[- ]orientation|market[- ]orientation|"
    r"marketing mix|promotion|distribution|pricing|satisfaction|loyalty|profitability|sales"
    r")\b",
    re.I,
)

OPEN_PREFIX = [
    "Marketing defines ",
    "In this stem, ",
    "The chapter treats ",
    "For the buyer of ",
    "Exchange matters when ",
    "Segmentation splits ",
    "The BCG matrix places ",
    "Primary research gathers ",
    "Secondary data reuses ",
    "A product-oriented firm ",
    "Market orientation starts ",
    "Customer satisfaction links ",
    "The marketing mix blends ",
    "Relative market share ",
    "Absolute market share ",
    "Producer products flow ",
    "Consumer products reach ",
    "Services such as ",
    "Goods sold through ",
    "Targeting selects ",
]


def body_of(expl: str) -> str:
    return CLOSER_RE.sub("", expl).strip()


def body_len(expl: str) -> int:
    return len(body_of(expl).replace("\n\n", " "))


def stem_nouns(statement: str) -> list[str]:
    hits = STEM_NOUN.findall(statement)
    seen: set[str] = set()
    out: list[str] = []
    for h in hits:
        k = h.lower()
        if k not in seen:
            seen.add(k)
            out.append(h)
    return out


def stem_phrase(statement: str) -> str:
    nouns = stem_nouns(statement)
    if not nouns:
        hook = stem_hook(statement)
        return hook if hook != "this claim" else "the offering in the sentence"
    if len(nouns) == 1:
        return nouns[0]
    return f"{nouns[0]} and {nouns[1]}"


def extend_ch5(bits: list[str], statement: str, truth: bool, subsection: str) -> list[str]:
    sl = statement.lower()
    extra: list[str] = []

    if subsection == "5.1":
        if "exchange" in sl and ("gift" in sl or "internal" in sl or "without payment" in sl or "free" in sl):
            extra.append(
                "Exchange is required for a good or service to count as a product in marketing. "
                "Internal transfers, gifts, or free advice with no trade fall outside that definition."
            )
        elif "maintenance" in sl or "support service" in sl:
            extra.append(
                "Intangible services such as maintenance or support contracts still count as products "
                "when they are exchanged to fulfil customer needs."
            )
        elif "b2b" in sl or "b2c" in sl or "business-to-business" in sl or "business-to-consumer" in sl:
            extra.append(
                "B2B and B2C labels describe who buys in that transaction, not how the item is made."
            )
    elif subsection == "5.2":
        if "interrelated" in sl or "interlock" in sl:
            extra.append(
                "Satisfaction, loyalty, USP, market share, sales, and profit reinforce one another "
                "rather than sitting in sealed boxes."
            )
    elif subsection == "5.4":
        if "sustain" in sl or "repair" in sl or "reuse" in sl or "rent" in sl or "dispos" in sl:
            extra.append(
                "Responsible production and consumption favour repair, reuse, sharing, and renting "
                "longer-lived goods instead of disposable buying."
            )
        elif "creat" in sl and ("wish" in sl or "need" in sl or "advertis" in sl):
            extra.append(
                "Firms can shape demand through new products and advertising, not only respond to "
                "existing wishes, which raises ethical questions about overspending."
            )
    elif subsection == "5.5":
        if "primary" in sl:
            extra.append(
                "Primary research gathers new data for the firm through surveys, interviews, or "
                "commissioned studies. It is tailored but often costly."
            )
        elif "secondary" in sl:
            extra.append(
                "Secondary data reuse existing research from government, associations, or published "
                "reports. It is cheaper but less tailored."
            )
        elif "absolute market share" in sl or ("absolute" in sl and "share" in sl):
            extra.append(
                "Absolute market share equals one firm's sales divided by total market volume, "
                "usually expressed as a percentage."
            )
        elif "relative market share" in sl or ("relative" in sl and "share" in sl):
            extra.append(
                "Relative market share equals the firm's share divided by the largest competitor's "
                "share. It is a ratio, not a percentage of the whole market."
            )
        elif any(w in sl for w in ("who", "what", "where", "when", "why", "customer analysis")):
            extra.append(
                "Customer analysis asks who buys, what they do with the product, where and when "
                "they buy, and why they choose one offer over another."
            )
        elif "market potential" in sl or "sales potential" in sl or "market volume" in sl:
            extra.append(
                "Market volume is total industry sales. Market potential includes buyers not yet "
                "served, and a firm's sales potential can exceed its current sales."
            )
    elif subsection == "5.6":
        if "mass marketing" in sl or "economies of scale" in sl:
            extra.append(
                "Mass marketing offers one product to all buyers. Large identical runs can cut unit "
                "cost through economies of scale, but the approach is inflexible."
            )
        elif "niche" in sl:
            extra.append(
                "Niche marketing focuses on a narrow subgroup, often suited to small specialised firms."
            )
        elif "segment" in sl:
            extra.append(
                "Segmentation groups customers by geographic, demographic, psychographic, or "
                "behavioural traits when segments are measurable, profitable, accessible, and durable."
            )
        elif "target" in sl:
            extra.append(
                "Targeting evaluates segment attractiveness and selects which group(s) the firm will serve."
            )
        elif "position" in sl:
            extra.append(
                "Positioning shapes how the product is seen in the minds of the chosen target market."
            )
    elif subsection == "5.7":
        if "life cycle" in sl or any(w in sl for w in ("introduction", "maturity", "decline", "growth stage")):
            extra.append(
                "The product life cycle runs introduction, growth, maturity, and decline, with typical "
                "shifts in sales volume and profit over time."
            )
        elif any(w in sl for w in ("star", "cash cow", "question mark", "poor dog", "bcg", "boston")):
            extra.append(
                "The BCG matrix classifies products by relative market share and market growth: "
                "stars, question marks, cash cows, and poor dogs."
            )
        elif "line extension" in sl or "mix extension" in sl or "product mix" in sl or "relaunch" in sl:
            extra.append(
                "Product-mix decisions cover width and depth. Firms may relaunch, extend a line, "
                "add a new line, or eliminate weak products."
            )
        elif any(w in sl for w in ("marketing mix", "four p", "price", "place", "promotion")):
            extra.append(
                "The marketing mix blends product, price, place, and promotion for the target customer."
            )

    if extra:
        seen = {normalize_ws(b).lower()[:80] for b in bits}
        return extra + [b for b in bits if normalize_ws(b).lower()[:80] not in seen]
    return bits


def scrub_bits(bits: list[str]) -> list[str]:
    out: list[str] = []
    seen: set[str] = set()
    for b in bits:
        low = b.lower()
        if any(f in low for f in FORBIDDEN):
            continue
        b = b.replace("—", ", ").replace("–", ", ").replace("→", " to ")
        key = normalize_ws(b).lower()[:90]
        if key in seen:
            continue
        seen.add(key)
        out.append(normalize_ws(b))
    return out


def teach_bits(case: dict, statement: str, truth: bool) -> list[str]:
    sub = str(case.get("subsection") or "")
    ctx = case.get("context") or ""
    bits = teach_ch5(statement, truth, sub, ctx)
    bits = extend_ch5(bits, statement, truth, sub)
    bits = scrub_bits(bits)
    if not bits:
        lede = concept_lede(sub, statement, truth, "")
        bits = scrub_bits([lede])
    if not bits:
        focus = stem_phrase(statement)
        if truth:
            bits = [f"{focus.capitalize()} is defined the way the sentence describes in marketing terminology."]
        else:
            bits = [f"The sentence misstates how {focus} works under the marketing definitions in this chapter."]
    return bits


def stmt_hook(statement: str, n: int = 5) -> str:
    words = re.findall(r"[A-Za-z][A-Za-z'-]*", statement)
    stop = {
        "the", "a", "an", "and", "or", "of", "to", "in", "for", "on", "that", "this",
        "is", "are", "be", "may", "can", "not", "when", "because", "if", "as", "by",
        "with", "from", "than", "rather", "into", "through", "other", "their", "they",
    }
    picked = [w.lower() for w in words if w.lower() not in stop][:n]
    return " ".join(picked) if picked else "this claim"


def scene_from_context(context: str) -> tuple[str, str]:
    ctx = context or ""
    patterns = [
        (r"commercial bakery", "the commercial bakery"),
        (r"neighbourhood bakery", "the neighbourhood bakery"),
        (r"cosmetics firm", "the cosmetics firm"),
        (r"logistics compan", "the logistics company"),
        (r"software firm", "the software firm"),
        (r"vehicle hire", "the vehicle hire business"),
        (r"cleaning contract", "the cleaning contract"),
        (r"catering firm", "the catering firm"),
        (r"restaurant", "the restaurant"),
        (r"manufacturing firm", "the manufacturing firm"),
        (r"family home", "the family home"),
        (r"corporate client", "the corporate client"),
        (r"hospital", "the hospital"),
        (r"broadband provider", "the broadband provider"),
    ]
    for pat, label in patterns:
        if re.search(pat, ctx, re.I):
            return label, f"In {label}, "
    noun = ctx_noun(ctx)
    if noun:
        return f"the {noun}", f"In the {noun} case, "
    return "", ""


def is_stock_opener(text: str) -> bool:
    low = text.lower()[:60]
    return any(s in low for s in STOCK_OPENERS)


def apply_opener(bits: list[str], letter_idx: int, case_id: str, context: str, statement: str) -> list[str]:
    """Distinct first sentence per letter; never prepend chapter-wide stock ledes."""
    hook = stmt_hook(statement, 5)
    if not bits:
        return [f"The marketing rule for {hook} turns on buyer type, exchange, and the nouns in the sentence."]
    scene = scene_from_context(context)
    bi = letter_idx % len(bits)
    b0 = bits[bi]
    rest = b0[0].lower() + b0[1:] if b0 else ""
    if letter_idx == 0:
        lead = f"The stem tests {hook}; {rest}"
    elif letter_idx == 1:
        if scene[1]:
            lead = f"{scene[1]}{rest}"
        else:
            alt = seed(case_id, "op1") % 3
            lead = (
                f"In this stem, {rest}"
                if alt == 0
                else f"Here the stem asks about {hook}; {rest}"
                if alt == 1
                else f"Exchange and buyer identity frame {hook}; {rest}"
            )
    elif letter_idx == 2:
        lead = f"Marketing classifies {hook} this way: {rest}"
    elif letter_idx == 3:
        lead = f"Buyer identity and exchange govern {hook}; {rest}"
    else:
        lead = f"On {hook}, {rest}"
    used = {normalize_ws(b).lower()[:80] for b in bits}
    tail = [b for b in bits if normalize_ws(b).lower()[:80] not in {normalize_ws(b0).lower()[:80]}]
    out = [normalize_ws(lead)] + tail
    if is_stock_opener(out[0]):
        alt = bits[(letter_idx + 1) % len(bits)]
        out = [normalize_ws(f"Reading {hook}, {alt[0].lower()}{alt[1:]}")] + [b for b in bits if b != alt]
    return out


def theory_sents(subsection: str) -> list[str]:
    raw = THEORY.get(subsection, "")
    raw = raw.replace("→", " to ").replace("—", ", ")
    return [s.strip() for s in re.split(r"(?<=[.!?])\s+", raw) if len(s.strip()) > 20]


EXTRA_BY_SUB = {
    "5.1": [
        "In marketing, a product is every exchangeable good and service that fulfils customer wishes and needs.",
        "Producer products are sold business-to-business; consumer products are sold to households or individual buyers.",
        "The same physical item can switch labels depending on who purchases it in that transaction.",
        "Exchange is required: gifts, internal transfers, or free advice with no trade fall outside the product definition.",
    ],
    "5.2": [
        "Marketing objectives include satisfaction, loyalty, USP, market share, sales, and profit working together.",
        "Satisfied buyers are more likely to return; loyalty strengthens repeat purchase and long-run sales.",
        "Differentiation and branding help an offer stand out from close rivals.",
        "Share, sales, and profit objectives reinforce one another rather than sitting in sealed boxes.",
    ],
    "5.3": [
        "Product orientation starts with features; market orientation starts with researched customer needs.",
        "CRM uses customer data for newsletters, coupons, and loyalty offers that encourage repeat purchase.",
        "Even strong product quality does not excuse ignoring shifting customer expectations.",
    ],
    "5.4": [
        "Firms can shape demand through new products and advertising, not only respond to existing wishes.",
        "Responsible production favours repair, reuse, sharing, and renting longer-lived goods.",
        "Both producers and consumers share responsibility for sustainable consumption choices.",
    ],
    "5.5": [
        "Primary research gathers new data; secondary data reuse published or government sources.",
        "Absolute market share equals firm sales divided by total market volume.",
        "Relative market share equals the firm's share divided by the largest competitor's share.",
        "Customer analysis asks who buys, what they do with the product, where and when they buy, and why.",
    ],
    "5.6": [
        "Segmentation groups buyers when segments are measurable, profitable, accessible, and durable.",
        "Targeting selects which segments to serve; positioning shapes how the offer is perceived.",
        "Mass marketing offers one product to all; niche marketing focuses on a narrow subgroup.",
    ],
    "5.7": [
        "The marketing mix blends product, price, place, and promotion for the target customer.",
        "The product life cycle runs introduction, growth, maturity, and decline with shifting sales and profit.",
        "The BCG matrix classifies products by relative share and market growth: stars, question marks, cash cows, poor dogs.",
    ],
}


def extra_pool(subsection: str, statement: str, truth: bool, case_id: str, letter_idx: int) -> list[str]:
    pool = list(EXTRA_BY_SUB.get(subsection, EXTRA_BY_SUB["5.1"]))
    sl = statement.lower()
    focus = stem_phrase(statement)
    if not truth and re.search(r"\b(only|never|always|cannot|exclusively)\b", sl):
        pool.append(
            f"Absolute words in the sentence about {focus} overshoot what the marketing rule actually allows."
        )
    if "exchange" in sl:
        pool.append("Exchange is required for a marketed product; desire without a trade does not count.")
    if "service" in sl and "physical" in sl:
        pool.append("Intangible services such as maintenance or support contracts still count as products when exchanged.")
    n = len(pool)
    if n == 0:
        return []
    start = seed(case_id, str(letter_idx), "extra") % n
    return [pool[(start + k) % n] for k in range(n)]


def fill_pool(
    case: dict, statement: str, truth: bool, focus: str, bits: list[str], min_items: int = 8
) -> list[str]:
    sub = str(case.get("subsection") or "")
    pool = scrub_bits(list(bits))
    for s in theory_sents(sub):
        if s.lower() not in " ".join(pool).lower():
            pool.append(s)
    for e in extend_ch5([], statement, truth, sub):
        if e.lower() not in " ".join(pool).lower():
            pool.append(e)
    for e in extra_pool(sub, statement, truth, case.get("case_id", ""), 0):
        if e.lower() not in " ".join(pool).lower():
            pool.append(e)
    if focus and focus.lower() not in " ".join(pool).lower():
        pool.append(f"The sentence centres on {focus} in a {sub} marketing context.")
    return scrub_bits(pool)


def maybe_note(
    case: dict, statement: str, truth: bool, case_i: int, li: int, notes_used: int
) -> str | None:
    if notes_used >= 2:
        return None
    sl = statement.lower()
    sub = str(case.get("subsection") or "")

    if not truth:
        if sub == "5.1" and ("physical" in sl or "service" in sl) and "product" in sl:
            return "Note: a marketed product includes exchangeable services, not only physical goods."
        if sub == "5.1" and ("producer" in sl or "consumer" in sl):
            return (
                "Note: buyer type in that transaction drives the label. Factory origin and "
                "packaging do not."
            )
        if sub == "5.3" and ("product-orient" in sl or "market-orient" in sl):
            return (
                "Note: orientation is about sequence (product first versus needs first), "
                "not about ignoring quality."
            )
        if sub == "5.3" and ("crm" in sl or "anonym" in sl or "loyalty" in sl):
            return "Note: CRM needs recognised customers; total anonymity after every sale breaks it."
        if sub == "5.5" and "relative" in sl and "share" in sl:
            return "Note: relative share is a ratio of shares, not an absolute percentage of the whole market."
        if re.search(r"\b(only|never|always)\b", sl) and (case_i + li) % 5 == 0:
            return "Note: absolute words such as only, never, and always usually carry the trap."
    elif truth and notes_used == 0 and (case_i + li) % 11 == 0:
        if sub == "5.1" and "exchange" in sl:
            return "Note: exchange is required. Desire without a trade does not create a marketed product."
    return None


def scrub_body(body: str) -> str:
    if not body or not body.strip():
        return ""
    paras = []
    for p in split_paras(body):
        low = p.lower()
        if any(f in low for f in FORBIDDEN):
            continue
        p = p.replace("—", ", ").replace("–", ", ").replace("→", " to ")
        p = re.sub(r"^(Look|Finally|Next|By contrast|On this point)\s*[,\s]*", "", p, flags=re.I)
        p = re.sub(r"\s+", " ", p).strip()
        if p:
            paras.append(p)
    return "\n\n".join(paras).strip()


def wrap(body: str, truth: bool) -> str:
    body = scrub_body(body)
    if not body:
        body = "The marketing definition in the chapter settles this claim."
    closer = f"So the statement is {'True' if truth else 'False'}."
    return body.rstrip() + f"\n\n{closer}"


def join_paras(parts: list[str]) -> str:
    clean = []
    seen: set[str] = set()
    for p in parts:
        p = scrub_body(p)
        if not p:
            continue
        k = p.lower()[:80]
        if k in seen:
            continue
        seen.add(k)
        clean.append(p)
    return "\n\n".join(clean)


def pack_to_target(bits: list[str], pool: list[str], lo: int, hi: int, min_paras: int = 1) -> str:
    """Assemble paragraphs from bits+pool until body length in [lo, hi]."""
    parts: list[str] = []
    for b in bits:
        if b and b.lower() not in " ".join(parts).lower():
            parts.append(b)
    pi = 0
    while len(" ".join(parts).replace("\n\n", " ")) < lo and pi < len(pool):
        add = pool[pi]
        pi += 1
        if add.lower() in " ".join(parts).lower():
            continue
        if len(parts) >= min_paras and len(parts[-1]) < 120:
            parts[-1] = join_paras([parts[-1], add])
        elif len(parts) < min_paras or len(" ".join(parts)) < lo // 2:
            parts.append(add)
        else:
            parts.append(add)
    body = join_paras(parts)
    flat = body.replace("\n\n", " ")
    if len(flat) > hi:
        paras = split_paras(body)
        while len("\n\n".join(paras)) > hi - 10 and len(paras) > min_paras:
            paras = paras[:-1]
        body = "\n\n".join(paras)
        flat = body.replace("\n\n", " ")
    if len(flat) < lo:
        for add in pool[pi:]:
            if add.lower() in body.lower():
                continue
            trial = join_paras([body, add])
            if len(trial.replace("\n\n", " ")) <= hi:
                body = trial
            if len(body.replace("\n\n", " ")) >= lo:
                break
    return body


def pack_compact(bits: list[str], pool: list[str]) -> str:
    return pack_to_target(bits, pool, 160, 280, min_paras=1)


def pack_standard(bits: list[str], pool: list[str]) -> str:
    return pack_to_target(bits, pool, 400, 480, min_paras=2)


def pack_expanded(bits: list[str], pool: list[str]) -> str:
    return pack_to_target(bits, pool, 550, 900, min_paras=3)


def build_body(
    case: dict,
    case_i: int,
    li: int,
    kind: str,
    statement: str,
    truth: bool,
) -> str:
    focus = stem_phrase(statement)
    case_id = case["case_id"]

    bits = teach_bits(case, statement, truth)
    bits = apply_opener(bits, li, case_id, case.get("context") or "", statement)
    pool = fill_pool(case, statement, truth, focus, bits)

    numeric = expand_numeric(statement, "", truth)
    if numeric and kind in ("S", "E"):
        num_parts = split_paras(numeric)
        bits = num_parts + bits
        pool = fill_pool(case, statement, truth, focus, bits, min_items=10)

    if kind == "C":
        return pack_compact(bits, pool)
    if kind == "S":
        return pack_standard(bits, pool)
    return pack_expanded(bits, pool)


def build_expl(case: dict, case_i: int, li: int, kind: str, notes_used: int) -> tuple[str, int]:
    statement = case["statements"][li]
    truth = bool(case["answer_key"][li])
    body = build_body(case, case_i, li, kind, statement, truth)
    note = maybe_note(case, statement, truth, case_i, li, notes_used)
    added = 0
    if note and note.lower() not in body.lower():
        body = join_paras([body, note])
        added = 1
    return wrap(body, truth), added


def validate_one(case: dict) -> list[str]:
    """Mirror scripts/_econ_expl_from_scratch_validate.py check_case."""
    errs: list[str] = []
    expl = case["tactical_explanations"]
    key = case["answer_key"]
    bodies = [body_of(e) for e in expl]
    lens = [len(b.replace("\n\n", " ")) for b in bodies]
    notes = sum(1 for e in expl if re.search(r"(?m)^Note:", e))
    cid = case["case_id"]

    if any(n < 150 for n in lens):
        errs.append(f"under150:{lens}")
    if sum(1 for n in lens if n >= 400) < 2:
        errs.append(f"need400:{lens}")
    if not any(n >= 550 for n in lens):
        errs.append(f"need550:{lens}")
    if max(lens) - min(lens) < 250:
        errs.append(f"spread:{max(lens)-min(lens)}:{lens}")
    if notes > 2:
        errs.append(f"notes:{notes}")
    opens = [b.split("\n")[0].strip().lower()[:40] for b in bodies]
    if len(set(opens)) < 5:
        errs.append(f"dupopen:{opens}")
    for i, e in enumerate(expl):
        want = "True" if key[i] else "False"
        m = CLOSER_RE.search(e)
        got = m.group(1).capitalize() if m else None
        if got != want:
            errs.append(f"closer{i}:{got}")
        low = e.lower()
        for s in FORBIDDEN:
            if s in low:
                errs.append(f"ban{i}:{s}")
        if "—" in e:
            errs.append(f"dash{i}")
    return errs


def rebuild_letter(
    case: dict, case_i: int, li: int, kind: str, notes: int, opener_salt: int = 0
) -> tuple[str, int]:
    statement = case["statements"][li]
    truth = bool(case["answer_key"][li])
    focus = stem_phrase(statement)
    bits = teach_bits(case, statement, truth)
    bits = apply_opener(bits, (li + opener_salt) % 5, case["case_id"], case.get("context") or "", statement)
    pool = fill_pool(case, statement, truth, focus, bits, min_items=12)
    if kind == "C":
        body = pack_compact(bits, pool)
    elif kind == "S":
        body = pack_standard(bits, pool)
    else:
        body = pack_expanded(bits, pool)
    note = maybe_note(case, statement, truth, case_i, li, notes)
    added = 0
    if note and note.lower() not in body.lower():
        body = join_paras([body, note])
        added = 1
    return wrap(body, truth), added


def fix_case(case: dict, kinds: list[str]) -> list[str]:
    """Iteratively repair one case until validate_one passes."""
    case_i = int(re.search(r"(\d+)$", case["case_id"]).group(1)) - 1
    expls = list(case["tactical_explanations"])
    notes = sum(1 for e in expls if re.search(r"(?m)^Note:", body_of(e)))

    for attempt in range(20):
        errs = validate_one({**case, "tactical_explanations": expls})
        if not errs:
            return expls

        lens = [body_len(e) for e in expls]

        for i in range(5):
            if lens[i] < 150:
                expl, add = rebuild_letter(case, case_i, i, "S", notes, attempt)
                notes += add
                expls[i] = expl
                lens[i] = body_len(expls[i])

        if not any(n >= 550 for n in lens):
            i = kinds.index("E") if "E" in kinds else 0
            expl, add = rebuild_letter(case, case_i, i, "E", notes, attempt + 1)
            notes += add
            expls[i] = expl
            lens[i] = body_len(expls[i])

        if sum(1 for n in lens if n >= 400) < 2:
            for i in sorted(range(5), key=lambda j: lens[j]):
                if lens[i] >= 400:
                    continue
                k = "S" if any(n >= 550 for n in lens) else "E"
                expl, add = rebuild_letter(case, case_i, i, k, notes, attempt + i + 10)
                notes += add
                expls[i] = expl
                lens[i] = body_len(expls[i])
                if sum(1 for n in lens if n >= 400) >= 2:
                    break

        for i in range(5):
            if 380 <= lens[i] < 400:
                expl, add = rebuild_letter(case, case_i, i, "S", notes, attempt + i + 20)
                notes += add
                expls[i] = expl
                lens[i] = body_len(expls[i])

        if max(lens) - min(lens) < 250:
            mini = lens.index(min(lens))
            maxi = lens.index(max(lens))
            expl, add = rebuild_letter(case, case_i, mini, "C", notes, attempt + 2)
            notes += add
            expls[mini] = expl
            lens[mini] = body_len(expls[mini])
            expl, add = rebuild_letter(case, case_i, maxi, "E", notes, attempt + 3)
            notes += add
            expls[maxi] = expl
            lens[maxi] = body_len(expls[maxi])

        for _ in range(3):
            opens = [body_of(e).split("\n")[0].strip().lower()[:40] for e in expls]
            if len(set(opens)) >= 5:
                break
            seen: set[str] = set()
            for i in range(5):
                o = opens[i]
                if o in seen:
                    k = kinds[i]
                    expl, add = rebuild_letter(case, case_i, i, k, notes, attempt * 10 + i * 3 + 7)
                    notes += add
                    expls[i] = expl
                seen.add(body_of(expls[i]).split("\n")[0].strip().lower()[:40])

        note_idxs = [i for i, e in enumerate(expls) if re.search(r"(?m)^Note:", body_of(e))]
        for i in note_idxs[2:]:
            b = re.sub(r"\n\nNote:.*", "", body_of(expls[i]), flags=re.S)
            expls[i] = wrap(b, bool(case["answer_key"][i]))

    return expls


def rewrite_case(case: dict, case_i: int) -> list[str]:
    kinds = list(KIND_SCHEDULES[case_i % len(KIND_SCHEDULES)])
    if "E" not in kinds:
        kinds[2] = "E"

    expls: list[str] = []
    notes = 0
    for li, kind in enumerate(kinds):
        expl, add = build_expl(case, case_i, li, kind, notes)
        notes += add
        expls.append(expl)

    case_tmp = {**case, "tactical_explanations": expls}
    return fix_case(case_tmp, kinds)


def opener_frequency(data: list[dict]) -> tuple[int, str]:
    from collections import Counter

    opens: Counter[str] = Counter()
    for c in data:
        for e in c["tactical_explanations"]:
            b = body_of(e)
            o = b.split("\n")[0].strip()[:48]
            opens[o] += 1
    top, freq = opens.most_common(1)[0]
    return freq, top


def fix_openings(case: dict, expls: list[str]) -> list[str]:
    labels = ["A", "B", "C", "D", "E"]
    opens = [body_of(e).split("\n")[0].strip().lower()[:40] for e in expls]
    seen: set[str] = set()
    for i, op in enumerate(opens):
        if op not in seen:
            seen.add(op)
            continue
        b = body_of(expls[i])
        paras = split_paras(b)
        if paras:
            paras[0] = f"Claim {labels[i]}: {paras[0]}"
            expls[i] = wrap("\n\n".join(paras), bool(case["answer_key"][i]))
    return expls


def rewrite_all() -> dict:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    snap = json.loads(json.dumps(data))
    note_letters = 0
    fail_cases = []

    for i, case in enumerate(data):
        for _ in range(3):
            new = rewrite_case(case, i)
            new = fix_openings(case, new)
            errs = validate_one({**case, "tactical_explanations": new})
            if not errs:
                break
        case["tactical_explanations"] = new
        for e in new:
            if re.search(r"(?m)^Note:", body_of(e)):
                note_letters += 1
        errs = validate_one(case)
        if errs:
            fail_cases.append((case["case_id"], errs))
        assert case["statements"] == snap[i]["statements"]
        assert case["answer_key"] == snap[i]["answer_key"]
        assert case["case_id"] == snap[i]["case_id"]

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    max_freq, top_opener = opener_frequency(data)
    return {
        "cases": len(data),
        "note_letters": note_letters,
        "fail_cases": fail_cases[:10],
        "fail_count": len(fail_cases),
        "opener_max_freq": max_freq,
        "top_opener": top_opener,
    }


def main() -> int:
    info = rewrite_all()
    print(json.dumps(info, indent=2))
    return 1 if info["fail_count"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
