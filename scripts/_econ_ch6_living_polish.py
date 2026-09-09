#!/usr/bin/env python3
"""Polish ALL Ch6 tactical_explanations into living-teacher + stepped KaTeX.

- Keep/restore $$ arithmetic for numeric claims
- Surround formulas with clear teacher prose (no bare state-lines)
- Strip TRUE—/FALSE—, claim-hurdle meta, exam-tick scaffolding
- Non-numeric: live teacher prose
- Closer: So the statement is True./False. matching answer_key
- Does not change statements, context, or answer_key
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from _econ_ch6_deepen_lib import (  # noqa: E402
    enrich,
    parse_tables,
    try_numeric,
)

PATH = Path("src/data/economics-cases-ch6-subtopics.json")
LETTERS = "ABCDE"

CLOSER_RE = re.compile(r"\n*\s*So the statement is (True|False)\.?\s*$", re.I)
OLD_CLOSER_RE = re.compile(
    r"\n*\s*The statement is (true|false)\.?\s*$", re.I
)
PREFIX_RE = re.compile(r"^(TRUE|FALSE)\s*[—–\-]\s*", re.I)

ASSET_WORD = re.compile(
    r"\b(pallet loader|industrial dishwasher|warehouse crane|delivery scooter|"
    r"packaging line|concrete mixer|laptop computer|refrigerated van|"
    r"forklift|conveyor belt|printing press|sewing machine|drill press|"
    r"delivery van|woodworking lathe|oven|freezer|tractor|compressor|"
    r"generator|scanner|photocopier|server rack|milling machine|lathe|"
    r"plant, machinery|machinery|equipment)\b",
    re.I,
)
INTANG_WORD = re.compile(
    r"\b(operating licence|brand name|registered design|development patent|"
    r"concession right|franchise agreement|patent|licence|license|trademark)\b",
    re.I,
)
FIRM_WORD = re.compile(
    r"\b(bakery|brewery|clothing retailer|food retailer|logistics company|"
    r"packaging manufacturer|retail group|manufacturing firm|software firm|"
    r"transport company|construction firm|dealer|operator)\b",
    re.I,
)

FORBIDDEN_SUB = [
    (re.compile(r"(?m)^Name the (?:ratio|identity|growth identity|decline identity|coverage identity) in words:[^\n]*\n*", re.I), ""),
    (re.compile(r"Name the (?:ratio|identity|growth identity|decline identity|coverage identity) in words:\s*[^\n]*", re.I), ""),
    (re.compile(r"(?m)^This is a composition claim:[^\n]*\n*", re.I), ""),
    (re.compile(r"This is a composition claim:\s*[^\n]*", re.I), ""),
    (re.compile(r"\s*Plug the figures step by step:\s*", re.I), "\n\n"),
    (re.compile(r"\s*Plug in the (?:table|truck) figures[^\n.:]*[.:]?\s*", re.I), "\n\n"),
    (re.compile(r"(?m)^Hold the statement against the chapter map[^\n]*\n*", re.I), ""),
    (re.compile(r"(?m)^Spell out the claim[^\n]*\n*", re.I), ""),
    (re.compile(r"\s*So the arithmetic supports the claim\.", re.I), ""),
    (re.compile(r"\s*so the statement (?:does not hold|holds)\.", re.I), ""),
    (re.compile(r"(?m)^Reading the arithmetic against the claim:\s*", re.I), ""),
    (re.compile(r"\bbefore you tick\b", re.I), "before you decide"),
    (re.compile(r"\bboard check\b", re.I), "check"),
    (re.compile(r"\bexam trap\b", re.I), "common trap"),
    (re.compile(r"\bstem rubric\b", re.I), "wording"),
    (re.compile(r"\btextbook test\b", re.I), "chapter rule"),
    (re.compile(r"\bclaim(?:'s|’s)? hurdle\b", re.I), "claim"),
    (re.compile(r"\bmisses the hurdle\b", re.I), "misses the target"),
    (re.compile(r"(?m)^Absolute or misapplied wording conflicts with the rule for[^.]*\.\s*", re.I), ""),
    (re.compile(r"Absolute or misapplied wording conflicts with the rule for[^.]*\.\s*", re.I), ""),
    (re.compile(r"The wording matches the relevant rule for[^.]*\.\s*", re.I), ""),
    (re.compile(r"Rejected claim:\s*\"[^\"]*\"\.?", re.I), ""),
    (re.compile(r"Applied here:\s*\"[^\"]*\"\.?", re.I), ""),
    (re.compile(r"(?m)^Using the stem facts:\s*\"[^\"]*\"\.?", re.I), ""),
    (re.compile(r"Using the stem facts:\s*\"[^\"]*\"\.?", re.I), ""),
]

# Bare formula opening: "Current ratio = current assets ÷ current liabilities."
BARE_EQ_OPEN = re.compile(
    r"^(?P<label>[A-Za-z][A-Za-z0-9 \-()/]+?)\s*=\s*(?P<rhs>[^\n]+)\.\s*$"
)


def a_an(noun: str) -> str:
    if noun.startswith(("the ", "a ", "an ")):
        return noun
    return ("an " if noun[:1].lower() in "aeiou" else "a ") + noun


def asset_name(stmt: str) -> str:
    m = ASSET_WORD.search(stmt)
    if m:
        return m.group(1).lower()
    m = INTANG_WORD.search(stmt)
    if m:
        return m.group(1).lower()
    return "the item"


def firm_name(stmt: str, ctx: str = "") -> str | None:
    m = FIRM_WORD.search(stmt) or FIRM_WORD.search(ctx)
    return m.group(1).lower() if m else None


def strip_closers(text: str) -> str:
    text = CLOSER_RE.sub("", text.strip())
    text = OLD_CLOSER_RE.sub("", text.strip())
    return text.strip()


def scrub_meta(text: str) -> str:
    """Strip forbidden scaffolding from any letter body."""
    for rx, repl in FORBIDDEN_SUB:
        text = rx.sub(repl, text)
    return text


def _dedupe_sentences(para: str) -> str:
    # Split on sentence ends but keep KaTeX blocks intact
    if "$$" in para:
        return para
    parts = re.split(r"(?<=[.!?])\s+", para.strip())
    out: list[str] = []
    for p in parts:
        p = p.strip()
        if not p:
            continue
        if out and out[-1] == p:
            continue
        out.append(p)
    return " ".join(out)


def _cap_para(para: str) -> str:
    if not para or para.startswith("$$"):
        return para
    # leave math-leading lines alone
    for i, ch in enumerate(para):
        if ch.isalpha():
            return para[:i] + ch.upper() + para[i + 1 :]
        if ch in "$":
            return para
    return para


def finish(truth: bool, body: str) -> str:
    body = body.strip()
    body = PREFIX_RE.sub("", body).strip()
    body = strip_closers(body)
    body = scrub_meta(body)
    body = rewrite_threshold_lines(body, truth)
    body = scrub_meta(body)  # second pass after verdict rewrite
    # collapse excess blank lines
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    # tidy spaces before punctuation left by scrubbing
    body = re.sub(r" +([.,;:])", r"\1", body)
    body = re.sub(r"  +", " ", body)
    paras = []
    for p in re.split(r"\n\s*\n", body):
        p = p.strip()
        if not p:
            continue
        # collapse single-newline duplicated sentences inside a para
        lines = [ln.strip() for ln in p.split("\n") if ln.strip()]
        if len(lines) >= 2 and all("$$" not in ln for ln in lines):
            dedup_lines: list[str] = []
            for ln in lines:
                if dedup_lines and dedup_lines[-1] == ln:
                    continue
                dedup_lines.append(ln)
            p = " ".join(dedup_lines) if len(dedup_lines) < len(lines) else "\n".join(dedup_lines)
            # if we collapsed duplicates that were full sentence copies, join with space
            if len(dedup_lines) == 1:
                p = dedup_lines[0]
            elif len(set(dedup_lines)) < len(lines):
                p = " ".join(dedup_lines)
        p = _dedupe_sentences(p)
        p = _cap_para(p)
        paras.append(p)
    paras = dedupe_paras(paras)
    # If last prose para stacks multiple compare sentences, keep one
    if paras:
        last = paras[-1]
        if "$$" not in last:
            sents = re.split(r"(?<=[.!?])\s+", last.strip())
            compare_rx = re.compile(
                r"^(The claim requires |Set beside the claim|Compared with the claim)",
                re.I,
            )
            compares = [s for s in sents if compare_rx.match(s)]
            others = [s for s in sents if not compare_rx.match(s)]
            if len(compares) > 1:
                paras[-1] = (" ".join(others + [compares[-1]])).strip()
    body = "\n\n".join(paras)
    closer = "So the statement is True." if truth else "So the statement is False."
    return f"{body}\n\n{closer}"


def living_compare(claimed: str, actual: str, truth: bool) -> str:
    claimed = claimed.strip().rstrip(".")
    actual = actual.strip().rstrip(".")
    # Normalise claim fragments like "is below 1.22" / "exceeds 1.54"
    claim_phrase = claimed
    if re.match(r"^(is below|below|exceeds|more than|less than|exactly)\b", claimed, re.I):
        claim_phrase = claimed[0].lower() + claimed[1:] if claimed else claimed
        need = f"a result that {claim_phrase}"
    else:
        need = claim_phrase
    if truth:
        variants = [
            f"The claim requires {need}; the figures give {actual}, which clears that test.",
            f"Set beside the claim ({claimed}), the computed {actual} supports the wording.",
            f"Compared with the claim ({claimed}), {actual} is enough for the wording to hold.",
        ]
    else:
        variants = [
            f"The claim requires {need}; the figures give {actual}, which misses that test.",
            f"Set beside the claim ({claimed}), the computed {actual} does not match.",
            f"Compared with the claim ({claimed}), {actual} is not enough for the wording to hold.",
        ]
    pick = (len(claimed) + len(actual) + (1 if truth else 0)) % len(variants)
    return variants[pick]


def dedupe_paras(paras: list[str]) -> list[str]:
    out: list[str] = []
    for p in paras:
        if out and out[-1].strip() == p.strip():
            continue
        out.append(p)
    return out


def rewrite_threshold_lines(text: str, truth: bool) -> str:
    def thr(m: re.Match) -> str:
        return living_compare(m.group(1).strip(), m.group(2).strip(), truth)

    text = re.sub(
        r"(?m)^Threshold:\s*(.+?)\.\s*Actual\s+(.+?)\.\s*$",
        thr,
        text,
    )
    text = re.sub(
        r"(?m)^Claimed:\s*(.+?)\.\s*Actual\s+(.+?)\.\s*$",
        thr,
        text,
    )
    text = re.sub(
        r"(?m)^Claimed exactly\s+(.+?)\.\s*Actual\s+(.+?)\.\s*$",
        thr,
        text,
    )
    text = re.sub(
        r"Claimed:\s*(.+?)\.\s*Actual\s+(.+?)\.",
        thr,
        text,
    )
    # Growth / decline verdict remnants
    text = re.sub(
        r"(?m)^(?:Read against the claim,\s*)?actual growth is\s+([\d.]+%),\s*which is not more than the claimed\s+([\d.]+%)\.?(?:\s*So the arithmetic misses the claim\.?)?\s*$",
        lambda m: living_compare(f"more than {m.group(2)}", m.group(1), False),
        text,
        flags=re.I,
    )
    text = re.sub(
        r"(?m)^(?:Read against the claim,\s*)?actual growth is\s+([\d.]+%),\s*which is more than the claimed\s+([\d.]+%)\.?(?:\s*So the arithmetic supports the claim\.?)?\s*$",
        lambda m: living_compare(f"more than {m.group(2)}", m.group(1), True),
        text,
        flags=re.I,
    )
    text = re.sub(
        r"(?m)^(?:Read against the claim,\s*)?actual decline is\s+([\d.]+%),\s*which is not more than the claimed\s+([\d.]+%)\.?(?:\s*So the arithmetic misses the claim\.?)?\s*$",
        lambda m: living_compare(f"fell by more than {m.group(2)}", m.group(1) + " decline", False),
        text,
        flags=re.I,
    )
    text = re.sub(
        r"(?m)^(?:Read against the claim,\s*)?actual decline is\s+([\d.]+%),\s*which is more than the claimed\s+([\d.]+%)\.?(?:\s*So the arithmetic supports the claim\.?)?\s*$",
        lambda m: living_compare(f"fell by more than {m.group(2)}", m.group(1) + " decline", True),
        text,
        flags=re.I,
    )
    text = re.sub(
        r"(?m)^(?:Read against the claim,\s*)?actual(?:\s+share)?\s+([\d.]+%?)\s+exceeds\s+([\d.]+%?)\.?(?:\s*So the arithmetic supports the claim\.?)?\s*$",
        lambda m: living_compare(f"exceeds {m.group(2)}", m.group(1), truth),
        text,
        flags=re.I,
    )
    text = re.sub(
        r"(?m)^(?:Read against the claim,\s*)?actual(?:\s+share)?\s+([\d.]+%?)\s+(?:is below|below)\s+([\d.]+%?)\.?(?:\s*So the arithmetic (?:supports|misses) the claim\.?)?\s*$",
        lambda m: living_compare(f"below {m.group(2)}", m.group(1), truth),
        text,
        flags=re.I,
    )
    text = re.sub(
        r"(?m)^(?:Read against the claim,\s*)?actual share\s+([^\n]+?)\s+matches\s+[“'\"]([^”'\"]+)[”'\"]\s*\.?\s*$",
        lambda m: living_compare(m.group(2), m.group(1), True),
        text,
        flags=re.I,
    )
    text = re.sub(
        r"(?m)^(?:Read against the claim,\s*)?actual share\s+([^\n]+?)\s+(?:does not match|misses)\s+[“'\"]([^”'\"]+)[”'\"]\s*\.?\s*$",
        lambda m: living_compare(m.group(2), m.group(1), False),
        text,
        flags=re.I,
    )
    text = re.sub(
        r"(?m)^(.+?),\s*which is consistent with\s+[“'\"]([^”'\"]+)[”'\"]\s*\.\s*$",
        lambda m: living_compare(m.group(2), m.group(1).strip(), True),
        text,
        flags=re.I,
    )
    text = re.sub(
        r"(?m)^(.+?),\s*which is (?:not consistent|inconsistent) with\s+[“'\"]([^”'\"]+)[”'\"]\s*\.\s*$",
        lambda m: living_compare(m.group(2), m.group(1).strip(), False),
        text,
        flags=re.I,
    )
    text = re.sub(
        r"(?m)^(?:Read against the claim,\s*)?(?:actual\s+)?(.+?)\s+versus\s+[“'\"]([^”'\"]+)[”'\"]\s*\.?\s*$",
        lambda m: living_compare(m.group(2), m.group(1).strip(), truth),
        text,
        flags=re.I,
    )
    text = re.sub(r"\s*So the arithmetic (?:supports|misses) the claim\.", "", text, flags=re.I)
    text = re.sub(
        r"(?m)^Once the arithmetic is on the page, the letter is decided by that comparison alone\.\s*$",
        "",
        text,
    )
    text = re.sub(
        r"(?m)^Pull the labelled totals from the extract before comparing any threshold\.\s*$",
        "Pull the labelled totals from the extract before comparing.",
        text,
    )
    text = re.sub(
        r"(?m)^(\d+(?:\.\d+)? years\s*[≥>=]\s*life\s*\d+(?:\.\d+)? with residual 0)\s*$",
        lambda m: (
            f"Elapsed life reaches useful life with a nil residual ({m.group(1)}), so the asset is fully written down."
            if truth
            else f"Even with ({m.group(1)}), the claim’s wording still fails the chapter test."
        ),
        text,
        flags=re.I,
    )
    return text



def expand_bare_formula_open(first: str, seed: int) -> str | None:
    m = BARE_EQ_OPEN.match(first.strip())
    if not m:
        return None
    label = m.group("label").strip()
    rhs = m.group("rhs").strip()
    # Skip if already long teacher prose
    if len(first) > 120:
        return None
    leads = [
        f"Start from the definition: {label} = {rhs}.",
        f"The working identity is {label} = {rhs}.",
        f"Compute {label.lower()} as {rhs}.",
        f"Use {label} = {rhs} on the extract figures.",
    ]
    return leads[seed % len(leads)]


def ensure_prose_before_math(paras: list[str], stmt: str, seed: int) -> list[str]:
    """If the body opens on $$ or a bare equation line, add a living lead."""
    if not paras:
        return paras
    first = paras[0].strip()
    if first.startswith("$$"):
        # invent a lead from statement
        lead = math_lead_from_stmt(stmt, seed)
        return [lead] + paras
    bare = expand_bare_formula_open(first, seed)
    if bare:
        paras = [bare] + paras[1:]
    return paras


def math_lead_from_stmt(stmt: str, seed: int) -> str:
    sl = stmt.lower()
    if "current ratio" in sl:
        opts = [
            "Walk the liquidity claim with the current ratio: current assets over current liabilities.",
            "Liquidity here means whether current assets cover current liabilities.",
        ]
    elif "acid-test" in sl or "quick ratio" in sl:
        opts = [
            "Tighten the liquidity test by removing inventory from current assets, then divide by current liabilities.",
            "The acid-test (quick) ratio strips stock out of the cover before dividing by current liabilities.",
        ]
    elif "equity ratio" in sl:
        opts = [
            "Judge financing structure with the equity ratio: equity as a share of total assets.",
            "The equity ratio places equity against total assets.",
        ]
    elif "debt ratio" in sl:
        opts = [
            "Judge leverage with the debt ratio: debt as a share of total assets.",
            "The debt ratio places debt against total assets.",
        ]
    elif "working capital" in sl:
        opts = [
            "Working capital is the euro gap between current assets and current liabilities.",
            "Compute working capital as current assets minus current liabilities.",
        ]
    elif "turnover" in sl:
        opts = [
            "Turnover ratios compare a flow (revenue or cost of sales) with an average stock of assets.",
            "Read the efficiency claim as a turnover: flow ÷ average balance.",
        ]
    elif "grew" in sl or "fell" in sl or "growth" in sl:
        opts = [
            "Percentage change is (Year 2 − Year 1) ÷ Year 1; then compare with the claim.",
            "Compute the period change from the two year figures before judging the claim.",
        ]
    elif "margin" in sl or "gross profit" in sl:
        opts = [
            "Margins put a profit line over revenue for the same year.",
            "Compute the margin from the extract’s profit and revenue lines.",
        ]
    elif "%" in stmt or "percentage" in sl or "share of" in sl or "make up" in sl:
        opts = [
            "Express the named line as a percentage of the stated base from the extract.",
            "Divide the named part by the stated whole using the extract totals.",
        ]
    elif "depreciat" in sl:
        opts = [
            "Straight-line depreciation spreads (cost − residual) evenly over useful life.",
            "Allocate depreciable cost over the useful life, then compare with the claim.",
        ]
    else:
        opts = [
            "Pull the named figures from the extract and work the comparison step by step.",
            "Use the extract totals to test the numeric claim directly.",
        ]
    return opts[seed % len(opts)]


def polish_katex_letter(expl: str, stmt: str, truth: bool, seed: int) -> str:
    text = PREFIX_RE.sub("", expl.strip())
    text = strip_closers(text)
    text = scrub_meta(text)
    text = rewrite_threshold_lines(text, truth)

    # Soften leftover robotic openers
    text = re.sub(
        r"(?m)^Use the case figures for (.+?) and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold\.\s*$",
        r"Take the Year 1 and Year 2 figures for \1 and compute the percentage change before comparing with the claim.",
        text,
    )

    paras = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    paras = ensure_prose_before_math(paras, stmt, seed)
    # Composition letters often open on "From the extract…" after scaffold strip
    if paras and re.match(r"^From the extract", paras[0], re.I):
        if looks_numeric(stmt) or "%" in stmt or "share" in stmt.lower() or "make up" in stmt.lower():
            paras = [math_lead_from_stmt(stmt, seed)] + paras

    # If first para is still "Build X from the extract:" keep it — it's fine teacher voice
    # Drop empty leftovers
    cleaned = []
    for p in paras:
        p = re.sub(r"[ \t]+\n", "\n", p).strip()
        if not p:
            continue
        # Drop pure leftover scaffolding fragments
        if re.fullmatch(r"(Name the|Threshold:|Claimed:|Plug).*", p, re.I):
            continue
        cleaned.append(p)
    cleaned = dedupe_paras(cleaned)

    # Keep a single trailing comparison sentence
    compare_rx = re.compile(
        r"^(The claim requires |Set beside the claim|Compared with the claim)",
        re.I,
    )
    compare_idxs = [i for i, p in enumerate(cleaned) if compare_rx.match(p) and "$$" not in p]
    if len(compare_idxs) > 1:
        keep = compare_idxs[-1]
        cleaned = [p for i, p in enumerate(cleaned) if i not in compare_idxs or i == keep]

    body = "\n\n".join(cleaned)
    # Ensure at least one prose sentence that is not only math
    if not re.search(r"[A-Za-z]{4,}", re.sub(r"\$\$[\s\S]*?\$\$", "", body)):
        body = math_lead_from_stmt(stmt, seed) + "\n\n" + body
    return finish(truth, body)


def polish_try_numeric(raw: str, stmt: str, truth: bool, seed: int) -> str:
    """Convert deepen_lib wrap() output into living closer style."""
    text = PREFIX_RE.sub("", raw.strip())
    text = strip_closers(text)
    text = OLD_CLOSER_RE.sub("", text).strip()
    # deepen uses "The statement is true/false" already stripped
    return polish_katex_letter(text + "\n\nSo the statement is True.", stmt, truth, seed)


# ── conceptual / non-numeric expansions ─────────────────────────────────────

def expand_conceptual(stmt: str, truth: bool, te: str, subsection: str, seed: int) -> str:
    """Expand thin or scaffold-y non-numeric letters into living teacher prose."""
    existing = strip_closers(PREFIX_RE.sub("", te.strip()))
    robotic = re.search(
        r"Absolute or misapplied wording|Rejected claim:|Applied here:|Using the stem facts:|"
        r"The wording matches the relevant rule for|Sort the movement into",
        existing,
        re.I,
    )
    # If already substantial and clean, light cleanup only
    if (
        len(existing) >= 220
        and not robotic
        and not PREFIX_RE.match(te)
        and "$$" not in existing
    ):
        return finish(truth, existing)

    item = asset_name(stmt)
    firm = firm_name(stmt)
    sl = stmt.lower()
    paras: list[str] = []

    # Cash-flow classification
    if re.search(r"cash flow from (operating|investing|financing)", sl) or (
        "Sort the movement into" in existing
    ):
        paras = _cf_paras(stmt, truth, firm, seed)
    elif "investing" in sl and "financing" in sl and "separate" in sl:
        who = f"For this {firm}, " if firm else ""
        if truth:
            paras = [
                f"{who}investing and financing are separate cash-flow sections — one tracks long-term asset deals, the other tracks capital providers.".strip(),
                "An investing outflow (for example buying plant) can sit in the same year as a dividend without forcing both into one bucket.",
                "Keep the three cash-flow headings distinct and the claim’s wording holds.",
            ]
        else:
            paras = [
                f"{who}investing and financing stay separate sections on the cash-flow statement.".strip(),
                "You cannot collapse a plant purchase and a dividend into one label just because they both move cash out.",
                "The claim’s merge of those buckets is what fails.",
            ]
    elif "negative cash flow from investing" in sl and ("trouble" in sl or "always" in sl):
        paras = [
            "A negative investing cash flow often means the firm bought long-term assets — growth spending, not automatic distress.",
            "Counterexample: a healthy manufacturer funding a new plant can show an investing outflow while operating cash stays strong.",
            "Absolute wording like \"always proves … trouble\" overreads a normal investing sign.",
        ]
    # Asset use vs resale
    elif any(k in sl for k in ("inventory", "non-current", "fixed asset", "tangible", "intangible", "dealer", "resale", "held for")) and (
        ASSET_WORD.search(stmt) or INTANG_WORD.search(stmt) or "same" in sl
    ):
        paras = _asset_paras(stmt, truth, item, seed)
    # Depreciation / land
    elif "depreciat" in sl or ("land" in sl and ("depreciat" in sl or "useful life" in sl)):
        paras = _dep_paras(stmt, truth, item, seed)
    # Equity / liability
    elif any(k in sl for k in ("equity", "liabilit", "overdraft", "loan", "shareholder", "market capitalisation", "market capitalization")):
        paras = _fin_paras(stmt, truth, seed)
    # Audit / accounting type
    elif any(k in sl for k in ("audit", "financial accounting", "management accounting", "tax authorit", "reasonable assurance")):
        paras = _acct_paras(stmt, truth, seed)
    else:
        # Reuse/expand existing first sentence, then teach
        first = existing.split("\n\n")[0].strip() if existing else ""
        if first and len(first) > 40 and "Sort the movement" not in first:
            paras = [first]
        else:
            paras = [
                f"Read the claim against the chapter rule for this {subsection} topic.",
            ]
        if truth:
            paras.append(
                "The nouns and the reason line up with the definition, so the wording survives a careful check."
            )
            paras.append(
                "Nothing in the sentence forces a wrong category, reversed comparison, or absolute overclaim."
            )
        else:
            paras.append(
                "A scope word, swapped category, or broken reason is enough to reject the whole sentence."
            )
            if "always" in sl or "never" in sl or "only" in sl or "because" in sl:
                paras.append(
                    "Watch absolute or because-clauses: the familiar topic word does not rescue a false reason."
                )
            else:
                paras.append(
                    "Match each labelled idea to the chapter definition; here the claim’s detail fails that match."
                )

    # Length / variety pads that stay statement-tied
    body = "\n\n".join(paras)
    if len(body) < 200:
        pad = _pad_for(stmt, truth, item, seed)
        if pad and pad.lower() not in body.lower():
            paras.append(pad)
            body = "\n\n".join(paras)
    return finish(truth, body)


def _cf_paras(stmt: str, truth: bool, firm: str | None, seed: int) -> list[str]:
    sl = stmt.lower()
    who = f"For this {firm}, " if firm else ""
    if "purchase" in sl and ("plant" in sl or "machin" in sl or "long-term asset" in sl):
        if truth:
            return [
                f"{who}cash paid for plant, machinery, or similar long-term assets is an investing outflow.".strip(),
                "Operating covers the trading cycle; financing covers owners and lenders. Asset purchases sit in investing.",
                "Name investing first and the classification in the claim lines up.",
            ]
        return [
            f"{who}buying long-term productive assets is investing, not an operating cash outflow.".strip(),
            "Operating is day-to-day trading cash; a plant purchase is a capital expenditure.",
            "Misfiling that payment under operating is what breaks the claim.",
        ]
    if "dividend" in sl:
        if truth:
            return [
                f"{who}dividends paid are a financing outflow — cash returned to equity providers.".strip(),
                "They are not an operating cost and not an investing asset purchase.",
                "Keep financing as the home for dividends and the claim holds.",
            ]
        return [
            f"{who}dividends paid belong in financing, not in operating or investing.".strip(),
            "Operating is the trading cycle; investing is long-term assets; financing is capital providers.",
            "Parking dividends in the wrong section is enough to kill the claim.",
        ]
    if "loan" in sl or "borrow" in sl or "repay" in sl:
        if truth:
            return [
                f"{who}drawing or repaying bank funding is a financing cash movement.".strip(),
                "Lenders are capital providers, so those receipts and repayments sit under financing.",
                "That section reading matches the claim.",
            ]
        return [
            f"{who}loan drawdowns and repayments are financing, not operating sales cash.".strip(),
            "Confusing a financing principal movement with operating profit cash is the trap.",
            "Put the movement back under financing and the false label falls away.",
        ]
    if "receivable" in sl or "inventory" in sl or "supplier" in sl or "customer" in sl:
        if truth:
            return [
                f"{who}trading-cycle cash — customers, inventory, suppliers — is operating.".strip(),
                "Investing is reserved for long-term assets; financing for owners and lenders.",
                "Read that way, the operating label in the claim is right.",
            ]
        return [
            f"{who}customer and supplier cash belongs in operating, not investing or financing.".strip(),
            "A receivables collection does not become investing just because cash rose.",
            "The wrong section label is what fails.",
        ]
    # Generic CF
    if truth:
        opts = [
            [
                f"{who}sort the cash movement into operating, investing, or financing before judging the wording.".strip(),
                "Operating is the trading cycle; investing is long-term assets; financing is capital providers.",
                "Once the correct bucket is named, the claim’s label matches.",
            ],
            [
                f"{who}cash-flow headings stay distinct: trading, long-term assets, and capital providers.".strip(),
                "Place the event in the right section using that map.",
                "The claim uses the matching section name, so it stands.",
            ],
        ]
    else:
        opts = [
            [
                f"{who}sort the cash movement into operating, investing, or financing before judging the wording.".strip(),
                "Operating is the trading cycle; investing is long-term assets; financing is capital providers.",
                "The claim files the event in the wrong bucket, so it fails.",
            ],
            [
                f"{who}a familiar cash-flow word is not enough if the section is wrong.".strip(),
                "Misplacing a line between the three buckets kills the assertion.",
                "Name the correct section and the false label falls away.",
            ],
        ]
    return opts[seed % len(opts)]


def _asset_paras(stmt: str, truth: bool, item: str, seed: int) -> list[str]:
    sl = stmt.lower()
    it = a_an(item)
    if "same" in sl and ("non-current" in sl and "inventory" in sl):
        third = (
            "Intended use — own operations versus resale — decides the line, which is exactly what the claim says."
            if truth
            else "Physical identity alone never freezes the category without looking at each reporter’s purpose."
        )
        return [
            f"The same physical {item} need not share one balance-sheet line everywhere.",
            "An operator using it beyond one year records a non-current tangible; a dealer holding it for customers records inventory.",
            third,
        ]
    if "dealer" in sl and "non-current" in sl and not truth:
        return [
            f"A dealer’s {item} held for customers is merchandise, not a non-current operating asset.",
            "Being a business rather than a household does not turn trading stock into plant.",
            f"Counterexample: {it} on the showroom floor stays inventory until sold.",
        ]
    if "dealer" in sl and ("inventory" in sl or "not a fixed" in sl) and truth:
        return [
            f"A dealer displaying {it} for sale holds inventory — current stock, not the dealer’s fixed asset.",
            "Fixed assets are used in operations across periods; goods bought to resell stay in the trading cycle.",
            "That use-versus-resale split matches the claim.",
        ]
    if ("own" in sl or "operations" in sl or "in service" in sl) and "non-current" in sl and truth:
        return [
            f"Multi-year operating use of {it} fits the non-current tangible test.",
            "Useful life beyond the period plus own use — not resale — drive that line.",
            "Tangible means physical substance; non-current means long-term benefit. The wording lines up with that rule.",
        ]
    if "inventory" in sl and ("because" in sl) and ("any physical" in sl or "owns" in sl) and not truth:
        return [
            f"Physical form alone does not make {it} inventory.",
            "Inventory is held for sale or for cycle consumption — not every machine the firm owns.",
            f"Counterexample: {it} used daily in the firm’s own operations is plant, depreciated as a non-current asset.",
        ]
    if "intention" in sl or "intent" in sl:
        if truth:
            return [
                f"Intent to use {it} in operations beyond one period places it among non-current assets.",
                "Resale intent would have put the same object in inventory instead.",
                "Management’s purpose — use versus sell quickly — is the classification switch the claim describes.",
            ]
        return [
            f"Intent matters, but the claim’s reason still has to match the chapter rule for {item}.",
            "Use beyond one year supports non-current; ordinary resale supports inventory.",
            "Here the stated reason does not carry the label, so the assertion fails.",
        ]
    if "buyer" in sl and "inventory" in sl and not truth:
        return [
            f"After the sale, the buyer’s purpose governs classification of the {item}.",
            "The dealer’s former stock label does not travel with the object automatically.",
            "If the buyer puts it into multi-year operations, it becomes that buyer’s non-current tangible — not inventory by inheritance.",
        ]
    if "resold" in sl or "resale" in sl or "bought to" in sl:
        if truth:
            return [
                f"Bought to resell, {it} belongs in inventory (current).",
                "It is not an operating fixed asset of the dealer while it waits for a customer.",
                "Trading-cycle purpose is what the claim asserts, and that matches the rule.",
            ]
    # fallback asset
    if truth:
        return [
            f"Classification of {it} follows intended use and timing, not appearance alone.",
            "Own use beyond one year points non-current; holding for sale points inventory.",
            "Read that way, the claim’s label is the right one.",
        ]
    return [
        f"Classification of {it} follows intended use and timing, not appearance alone.",
        "Own use beyond one year points non-current; holding for sale points inventory.",
        "The claim’s category or reason disagrees with that split, so it fails.",
    ]


def _dep_paras(stmt: str, truth: bool, item: str, seed: int) -> list[str]:
    sl = stmt.lower()
    if "land" in sl:
        if "not" in sl and "depreciat" in sl and truth:
            return [
                "Land is ordinarily not depreciated because its useful life is treated as indefinite.",
                "Buildings and machines wear out; bare land in the chapter’s reading does not get that systematic write-down.",
                "That exception is exactly what the claim states.",
            ]
        if not truth:
            return [
                "Land is the usual exception to systematic depreciation in this chapter’s reading.",
                "You do not write land down each year the way you write down a machine’s depreciable cost.",
                "The claim’s treatment of land as an ordinary depreciating asset is what fails.",
            ]
    if "straight-line" in sl or "evenly" in sl:
        if truth:
            return [
                "Under the straight-line method, depreciable cost (cost − residual) is spread evenly over useful life.",
                f"Each period gets the same charge for {item} when life and residual are unchanged.",
                "That even allocation is what the claim describes.",
            ]
    if "cash" in sl:
        if truth:
            return [
                "Cash left when the asset was bought; later depreciation is an allocation, not a fresh cash outflow.",
                "Profit is reduced without a matching cash payment in that later year.",
                "Separating the purchase cash from the periodic expense matches the claim.",
            ]
        return [
            "Depreciation after purchase is not a new cash payment each year.",
            "The cash moved at acquisition; the expense only allocates that cost over useful life.",
            "Treating each year’s depreciation as a fresh outflow is the mistake.",
        ]
    if truth:
        return [
            "Depreciation recognises that a depreciable asset’s service potential is consumed over useful life.",
            f"For {item}, charge (cost − residual) ÷ life under straight-line thinking unless the claim specifies otherwise.",
            "That allocation idea matches the wording.",
        ]
    return [
        "Depreciation allocates depreciable cost over useful life; it does not restate every related claim as true.",
        "Watch for wrong objects (such as land), wrong cash stories, or wrong timing.",
        "Here the claim’s detail fails the chapter rule.",
    ]


def _fin_paras(stmt: str, truth: bool, seed: int) -> list[str]:
    sl = stmt.lower()
    if "overdraft" in sl:
        if not truth:
            return [
                "Bank overdrafts are presented as current liabilities.",
                "Even if rolled in practice, they are not parked with non-current debt on the balance sheet.",
                "Calling an overdraft non-current is the classification error.",
            ]
        return [
            "Bank overdrafts sit among current liabilities — due on demand in presentation terms.",
            "They finance working cash but still belong with short-term claims.",
            "That current presentation matches the claim.",
        ]
    if "shareholder sells" in sl or "secondary" in sl:
        if not truth:
            return [
                "When one shareholder sells shares to another, cash moves between investors.",
                "The corporation is not a party to that secondary trade and does not receive fresh equity cash from it.",
                "Absolute wording that the company always receives proceeds is false.",
            ]
        return [
            "Secondary-market trading changes who owns existing shares; it does not, by itself, inject fresh equity into the issuer.",
            "Primary issues or similar company transactions are what raise new capital.",
            "That distinction is what the claim states.",
        ]
    if "loan" in sl and "equity" in sl:
        if not truth:
            return [
                "Borrowed funds are liabilities — obligations to lenders — not equity.",
                "Equity is the owners’ residual claim after liabilities.",
                "Parking a bank loan inside equity mixes the two sides of the financing identity.",
            ]
    if truth:
        return [
            "Liabilities are obligations to outsiders; equity is the owners’ residual claim.",
            "Settlement timing — within a year or beyond — then splits current from non-current.",
            "Applied to this wording, the claim’s category is the right one.",
        ]
    return [
        "Liabilities are obligations to outsiders; equity is the owners’ residual claim.",
        "Settlement timing — within a year or beyond — then splits current from non-current.",
        "The claim mixes those ideas or overstates them, so it fails.",
    ]


def _acct_paras(stmt: str, truth: bool, seed: int) -> list[str]:
    sl = stmt.lower()
    if "reasonable assurance" in sl:
        return [
            "An audit provides reasonable assurance about material misstatement, not absolute certainty.",
            "The opinion is about fair presentation of the figures, not a guarantee of future profits.",
            "That limited assurance reading matches the claim." if truth else "Overstating the audit as a guarantee is what fails.",
        ]
    if "management accounting" in sl or "financial accounting" in sl:
        if truth:
            return [
                "Financial accounting reports for external users; management accounting serves internal decisions.",
                "A published extract aimed at lenders or shareholders is financial reporting by purpose.",
                "Keep that audience split in view and the claim holds.",
            ]
        return [
            "Financial and management accounting differ by audience and often by format.",
            "Internal management reports need not follow the statutory published layout.",
            "The claim’s collapse of that distinction is wrong.",
        ]
    if "tax" in sl:
        if not truth:
            return [
                "Tax authorities are a standard external user of financial statements.",
                "Reported profit feeds assessments; denying any legitimate interest overreads privacy of management figures.",
                "That absolute denial is what fails.",
            ]
    if truth:
        return [
            "External financial reporting gives outsiders a structured view of position and performance.",
            "It does not promise perfect foresight or unlimited uses beyond fair presentation.",
            "Read within that scope, the claim is sound.",
        ]
    return [
        "External financial reporting gives outsiders a structured view of position and performance.",
        "Claims that erase users, demand absolute guarantees, or freeze internal formats go beyond the chapter.",
        "That overreach is why this wording fails.",
    ]


def _pad_for(stmt: str, truth: bool, item: str, seed: int) -> str:
    sl = stmt.lower()
    pads_t = [
        "Ask whether the reporter uses the object or holds it for sale.",
        "Name the correct section or line first; the wrong label then falls away.",
        "A single clear counterexample is enough when the claim speaks in absolutes.",
    ]
    pads_f = [
        "The familiar topic word is not enough if the reason or category is wrong.",
        "Replace the broken reason with the chapter criterion and the assertion drops.",
        "Absolute words like always or never are often the failure point.",
    ]
    if "cash" in sl:
        return (
            "Operating, investing, and financing stay separate buckets on the cash-flow statement."
        )
    if item != "the item":
        return f"Keep {item} tied to use-versus-resale (or the right financing line) rather than to physical appearance alone."
    return (pads_t if truth else pads_f)[seed % 3]


def looks_numeric(stmt: str) -> bool:
    sl = stmt.lower()
    if re.search(
        r"(grew|fell) by more than \d|(grew|fell) by exactly|current ratio|acid-test|"
        r"equity ratio|debt ratio|working capital|turnover|margin|coverage|"
        r"make up (more|less) than|more than \d+(\.\d+)?%|less than \d+(\.\d+)?%|"
        r"exceeds €|exceeds \d|amount to (more|less)|market capitalisation|"
        r"earnings per share|depreciat(?:ion|ed) of €|straight-line|"
        r"% of |percentage|share of total|doubled|turned positive",
        sl,
    ):
        return True
    if re.search(r"€\s*[\d,]+", stmt) and re.search(
        r"ratio|working capital|total|exceed|below|more than|less than|equal", sl
    ):
        return True
    return False


def process_letter(
    case: dict,
    idx: int,
    tables: dict,
) -> str:
    stmt = case["statements"][idx]
    truth = bool(case["answer_key"][idx])
    te = case["tactical_explanations"][idx]
    seed = (int(re.search(r"(\d+)$", case["case_id"]).group(1)) * 7 + idx * 3) % 97
    sub = case.get("subsection") or "6.1"

    has_math = "$$" in te
    numeric = looks_numeric(stmt)

    if has_math:
        return polish_katex_letter(te, stmt, truth, seed)

    # Restore stepped KaTeX when the stem is numeric but the letter lost formulas
    rebuilt = try_numeric(stmt, truth, tables) if numeric else None
    if rebuilt and "$$" in rebuilt:
        return polish_try_numeric(rebuilt, stmt, truth, seed)

    if numeric and re.search(r"\d", te) and len(strip_closers(te)) >= 180:
        return finish(truth, strip_closers(PREFIX_RE.sub("", te)))

    return expand_conceptual(stmt, truth, te, sub, seed)


def main() -> None:
    data = json.loads(PATH.read_text())
    assert len(data) == 223, len(data)

    # Freeze immutable fields
    frozen = [
        {
            "statements": list(c["statements"]),
            "answer_key": list(c["answer_key"]),
            "context": c.get("context"),
            "case_id": c["case_id"],
        }
        for c in data
    ]

    katex_before = sum("$$" in e for c in data for e in c["tactical_explanations"])
    changed = 0

    for c in data:
        tables = enrich(parse_tables(c.get("context") or ""))
        # enrich returns dict of floats when given y1/y2 — parse_tables returns structure
        # try_numeric expects tables dict with y1/y2/amt/months keys; enrich each year inside try_numeric
        # so pass raw parse_tables
        tables = parse_tables(c.get("context") or "")
        new_expls = []
        for i in range(5):
            new = process_letter(c, i, tables)
            if new != c["tactical_explanations"][i]:
                changed += 1
            new_expls.append(new)
        c["tactical_explanations"] = new_expls

    # Verify immutables
    for c, f in zip(data, frozen):
        assert c["case_id"] == f["case_id"]
        assert c["statements"] == f["statements"]
        assert c["answer_key"] == f["answer_key"]
        assert c.get("context") == f["context"]

    # Validate closers + no prefixes
    errs = []
    katex_letters = 0
    for c in data:
        for i, (te, key) in enumerate(zip(c["tactical_explanations"], c["answer_key"])):
            if "$$" in te:
                katex_letters += 1
            want = "True" if key else "False"
            if not te.rstrip().endswith(f"So the statement is {want}."):
                errs.append(f"{c['case_id']} {LETTERS[i]}: bad closer")
            if PREFIX_RE.match(te):
                errs.append(f"{c['case_id']} {LETTERS[i]}: prefix")
            for bad in (
                "Name the identity in words",
                "Name the ratio in words",
                "This is a composition claim",
                "Plug the figures step by step",
                "So the arithmetic supports the claim",
                "before you tick",
                "Hold the statement against the chapter map",
                "TRUE —",
                "FALSE —",
            ):
                if bad in te:
                    errs.append(f"{c['case_id']} {LETTERS[i]}: leftover `{bad}`")

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(
        json.dumps(
            {
                "cases": len(data),
                "letters_changed": changed,
                "katex_before": katex_before,
                "katex_after": katex_letters,
                "err_count": len(errs),
                "errs_sample": errs[:20],
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
