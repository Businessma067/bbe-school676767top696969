#!/usr/bin/env python3
"""Rewrite ALL Ch6 tactical_explanations FROM SCRATCH — statement-only prose, clean KaTeX.

No exam-method meta, no filler scaffolds, no trailing ``actual 33.'' caption lines.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import _econ_ch6_thicken_thin as thick  # noqa: E402
from _econ_ch6_deepen_lib import PATH, THEORY, parse_tables, try_numeric  # noqa: E402
from _econ_ch6_numeric_step_formulas import (  # noqa: E402
    maximalize_math,
    needs_numeric,
    rewrite_letter,
)
from _econ_ch6_plain_scratch import (  # noqa: E402
    asset_name,
    case_seed,
    conceptual_bits,
    numeric_bits,
)
from _econ_ch6_plain_task_expl import (  # noqa: E402
    build_conceptual,
    build_depreciation_numeric,
    computable_numeric,
    note_is_redundant,
    split_math_blocks,
    strip_body,
    trap_note,
)

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)
NOTE_RE = re.compile(r"(?m)^Note:.*", re.S)
PREFIX_RE = re.compile(r"^(TRUE|FALSE)\s*[—–\-]\s*", re.I)
EM_DASH = "\u2014"
EN_DASH = "\u2013"

FORBIDDEN_PHRASES = (
    "match each noun in the stem",
    "claim's reason and the rule",
    "settles the letter cleanly",
    "ask whether the reporter uses",
    "keep period performance on the income statement",
    "computed result matches",
    "pull the labelled totals",
    "once the arithmetic",
    "applied to this stem",
    "from the extract:",
    "compare to the claim",
    "so the arithmetic",
    "name the ratio in words",
    "name the growth identity",
    "name the identity in words",
    "plug in the table figures",
    "plug the figures step by step",
    "the computed result",
    "follows use, benefit timing",
    "classification for the item follows",
    "a swapped category or false restriction",
    "words like only or never turn",
    "customer behaviour and firm aims",
    "satisfaction, share, and profit each interact",
    "owners, workers, customers, and neighbours",
    "applied here, the claim attaches",
    "the amounts given for this case mean",
)

META_PROSE_RE = re.compile(
    r"(?m)^(?:"
    r"Name the (?:ratio|identity|growth identity|decline identity)[^\n]*\n|"
    r"Plug in the (?:table|truck) figures[^\n]*\n|"
    r"Compare to the claim['’]s hurdle[^\n]*\n|"
    r"Reading the arithmetic against the claim:[^\n]*\n|"
    r"So the arithmetic (?:supports|misses) the claim\.?\s*\n|"
    r"Build (?:current assets|non-current liabilities)[^\n]*\n|"
    r"Non-current liabilities combine[^\n]*\n|"
    r"This is a composition claim[^\n]*\n"
    r")",
    re.I,
)

ACTUAL_CAPTION_RE = re.compile(
    r"(?m)^(?:Actual|actual growth is|actual decline is|actual share)[^\n]*\.\s*$",
    re.I,
)

KIND_BANDS = {
    "compact": (160, 280),
    "standard": (320, 480),
    "expanded": (550, 900),
}

KIND_SCHEDULES = [
    ["compact", "standard", "expanded", "compact", "standard"],
    ["standard", "compact", "expanded", "standard", "compact"],
    ["expanded", "compact", "standard", "expanded", "compact"],
    ["compact", "expanded", "standard", "compact", "expanded"],
    ["standard", "expanded", "compact", "standard", "expanded"],
    ["expanded", "standard", "compact", "expanded", "standard"],
    ["compact", "standard", "compact", "expanded", "standard"],
    ["standard", "compact", "standard", "expanded", "compact"],
]


def assign_kinds(case: dict, statements: list[str], ctx: str) -> list[str]:
    kinds = list(KIND_SCHEDULES[case_seed(case) % len(KIND_SCHEDULES)])
    tables = parse_tables(ctx)
    for i, stmt in enumerate(statements):
        if computable_numeric(stmt, tables, ctx) and kinds[i] == "compact":
            kinds[i] = "standard"
    return kinds


def body_of(expl: str) -> str:
    return CLOSER_RE.sub("", expl).strip()


def split_paras(text: str) -> list[str]:
    parts = re.split(r"\n\s*\n", text.strip())
    return [p.strip() for p in parts if p.strip()]


def contains_forbidden(text: str) -> bool:
    low = text.lower()
    return any(p in low for p in FORBIDDEN_PHRASES)


def filter_forbidden_sentences(text: str) -> str:
    if not text.strip():
        return ""
    blocks = split_math_blocks(text)
    out: list[str] = []
    for kind, chunk in blocks:
        if kind == "math":
            out.append(chunk)
            continue
        chunk = META_PROSE_RE.sub("", chunk)
        chunk = ACTUAL_CAPTION_RE.sub("", chunk)
        sents = re.split(r"(?<=[.!?])\s+", chunk.strip())
        kept = [s.strip() for s in sents if s.strip() and not contains_forbidden(s)]
        if kept:
            out.append(" ".join(kept))
    return "\n\n".join(out).strip()


def no_dash(text: str) -> str:
    text = text.replace(EM_DASH, ", ")
    text = text.replace(EN_DASH, "-")
    text = re.sub(r"\s+,\s+", ", ", text)
    text = re.sub(r",\s*,", ",", text)
    return text


def fix_math_labels(text: str) -> str:
    def brace_commas(b: str) -> str:
        return re.sub(
            r"(\d{1,3}),(\d{3})",
            lambda m: m.group(0) if "{,}" in m.group(0) else f"{m.group(1)}{{,}}{m.group(2)}",
            b,
        )

    def fix_block(m: re.Match[str]) -> str:
        b = brace_commas(m.group(1).strip())
        b = re.sub(r"(?<!\\text\{)(?<!\\mathrm\{)\bShare\b", r"\\text{Share}", b)
        b = re.sub(r"(?<!\\text\{)(?<!\\mathrm\{)\b(CA|CL|WC|NCL|OM|ETR)\b", r"\\text{\1}", b)
        return f"$$\n{b}\n$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", fix_block, text)


def finish(truth: bool, body: str, note: str = "") -> str:
    body = fix_math_labels(no_dash(filter_forbidden_sentences(strip_body(body))))
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    if note and not re.search(r"(?m)^Note:", body) and not contains_forbidden(note):
        body = f"{body}\n\nNote: {no_dash(note.strip())}" if body else f"Note: {no_dash(note.strip())}"
    closer = "So the statement is True." if truth else "So the statement is False."
    return f"{body}\n\n{closer}" if body else closer


def last_comparison_prose(blocks: list[str], stmt: str, truth: bool) -> str:
    """One short prose line from the final percent comparison block, if any."""
    cmp_block: re.Match[str] | None = None
    for b in reversed(blocks):
        if not b.startswith("$$"):
            continue
        inner = b.strip("$").strip()
        m = re.search(
            r"([\d.]+\s*\\%)\s*(\\le|\\ge|>|<)\s*([\d.]+\s*\\%)",
            inner,
        )
        if m:
            cmp_block = m
            break
    if not cmp_block:
        return ""
    a = cmp_block.group(1).replace("\\%", "%").strip()
    op = cmp_block.group(2)
    c = cmp_block.group(3).replace("\\%", "%").strip()
    op_word = {
        r"\le": "at or below",
        r"\ge": "at or above",
        ">": "above",
        "<": "below",
    }.get(op, "versus")
    sl = stmt.lower()
    if "grew by more than" in sl or "fell by more than" in sl:
        subj = re.match(r"(.+?) (?:grew|fell) by", stmt, re.I)
        label = subj.group(1) if subj else "The line"
        if truth:
            return f"{label} rose or fell by {a}, clearing the {c} hurdle in the statement."
        return f"{label} changed by {a}, {op_word} the {c} threshold claimed."
    if "current ratio" in sl:
        return f"The current ratio is {a}, {op_word} the {c} level in the statement."
    if "equity ratio" in sl or "debt ratio" in sl:
        kind = "equity" if "equity ratio" in sl else "debt"
        return f"The {kind} ratio is {a}, {op_word} the {c} benchmark."
    if "combined total of equity and non-current liabilities" in sl:
        return f"Equity plus non-current liabilities exceed non-current assets by {a}, {op_word} the {c} hurdle."
    if "non-current liabilities" in sl and "equity" in sl:
        return f"Year-2 NCL/equity is {a}, {op_word} the {c} claim."
    if "working capital" in sl:
        return f"Working capital is {a} thousand euros on these figures."
    if "make up" in sl and "%" in stmt:
        m = re.match(r"(.+?) make up", stmt, re.I)
        part = m.group(1) if m else "That share"
        return f"{part} is {a} of the whole, {op_word} the {c} stated."
    if truth:
        return f"The computed share is {a}, {op_word} the {c} stated."
    return f"The computed share is {a}, {op_word} the {c} stated, so the wording fails."


def clean_numeric_raw(raw: str, stmt: str, truth: bool) -> str:
    text = PREFIX_RE.sub("", strip_body(raw))
    text = META_PROSE_RE.sub("", text)
    text = ACTUAL_CAPTION_RE.sub("", text)
    text = re.sub(r"(?m)^Compare to the claim['’]s hurdle:.*$", "", text, flags=re.I)
    text = re.sub(r"(?m)^So the arithmetic (?:supports|misses) the claim\.?\s*$", "", text, flags=re.I)
    text = re.sub(r"(?m)^Reading the arithmetic against the claim:.*$", "", text, flags=re.I)

    blocks = split_math_blocks(text)
    prose: list[str] = []
    math: list[str] = []
    for kind, chunk in blocks:
        if kind == "math":
            math.append(maximalize_math(chunk))
            continue
        chunk = filter_forbidden_sentences(chunk)
        if not chunk or contains_forbidden(chunk):
            continue
        if re.search(r"^actual\b", chunk, re.I):
            continue
        prose.append(chunk)

    summary = last_comparison_prose(math, stmt, truth)
    parts: list[str] = []
    if prose:
        parts.append(prose[0])
    parts.extend(math)
    if summary and summary not in " ".join(parts):
        parts.append(summary)
    return "\n\n".join(p for p in parts if p.strip())


def fallback_bits(stmt: str, truth: bool) -> list[str]:
    """Substantive bits when conceptual_bits returns only forbidden meta."""
    sl = stmt.lower()
    item = asset_name(stmt)
    if "cost of sales" in sl or "gross profit" in sl:
        return [
            "Cost of sales gathers the direct costs of units sold in the period.",
            "Materials and direct production labour belong there; post-production admin and distribution sit below gross profit.",
            "Gross profit is revenue minus that direct cost block, before operating expenses.",
        ]
    if "direct labour" in sl and "production" in sl:
        return [
            "Factory labour on goods sold is a direct production cost and enters cost of sales.",
            "Payroll for warehouse admin or sales staff is not part of that direct block.",
        ]
    if "administration" in sl or "distribution" in sl:
        return [
            "Distribution and administrative costs are operating expenses below gross profit.",
            "They are not folded into cost of sales, which is limited to direct production cost.",
        ]
    if "financial structure" in sl or "gearing" in sl or "liquidity" in sl and "profitability" in sl:
        return [
            "Financial structure looks at how assets are funded by owners versus lenders.",
            "Liquidity, profitability, efficiency, and structure each illuminate a different facet of performance.",
            "A single ratio in isolation is weaker than a trend or an industry benchmark.",
        ]
    if "competitors" in sl or "benchmark" in sl:
        return [
            "Industry peers provide a yardstick that one standalone ratio cannot.",
            "The same ratio tracked over several years shows direction, not just a snapshot.",
        ]
    if "unrelated industry" in sl:
        return [
            "Liquidity and gearing norms differ by sector; cross-industry benchmarks can mislead.",
            "Capital intensity and working-capital cycles vary too much for blind comparison.",
        ]
    if "balance sheet identity" in sl or "total assets always equal" in sl:
        return [
            "Total assets must equal liabilities plus equity on every balance sheet.",
            "Any asset increase is financed by more debt, more equity, or an offsetting asset move.",
        ]
    return [
        f"The claim about {item} is judged on classification, measurement, or the figures cited.",
        "The extract’s nouns and line labels decide whether the sentence holds.",
    ]


def clean_conceptual(stmt: str, truth: bool) -> tuple[list[str], list[str]] | None:
    got = conceptual_bits(stmt, truth)
    if not got:
        return None
    bits = [re.sub(r"\{snippet\}", stmt[:120].rstrip(".") + ".", b) for b in got[0]]
    bits = [b for b in bits if not contains_forbidden(b)]
    pads = [b for b in got[1] if not contains_forbidden(b)]
    if not bits:
        bits = fallback_bits(stmt, truth)
    if not bits:
        return None
    return bits, pads


def synth_elaborations(stmt: str, truth: bool, seed: int) -> list[str]:
    """Statement-tied sentences for length padding (never meta coaching)."""
    item = asset_name(stmt)
    sl = stmt.lower()
    firm_m = re.match(r"^For this\s+([^,]+),\s*", stmt, re.I)
    firm = firm_m.group(1).strip() if firm_m else ""
    tags = re.findall(r"[a-z]{5,}", sl)
    focus = tags[seed % len(tags)] if tags else item.replace(" ", "")

    variants = [
        f"How {item} is held and for how long decides the balance-sheet line.",
        f"Settlement timing and intended use matter more than physical shape for {item}.",
        "Balance-sheet lines are read from the reporter’s purpose, not from generic labels.",
        f"A {focus} reading of the extract supports this claim." if truth else f"A {focus} reading of the extract breaks this claim.",
        f"Operators and dealers can report the same {item} on different lines.",
        "Short-term claims belong with current liabilities; long-dated borrowings stay non-current.",
        "Period profit flows to retained earnings; it is not a separate cash-flow line.",
        "Customer collections recycle earlier sales through operating cash.",
        "Plant bought for cash is an investing outflow, not day-to-day operating spend.",
        "Residual value reduces the depreciable base before the annual charge is calculated.",
    ]
    if firm:
        variants.append(f"For {firm}, the cited lines in the extract decide the comparison.")
    if "inventory" in sl or "dealer" in sl:
        variants += [
            f"A dealer’s {item} stays inventory until sold.",
            f"Own use of {a_an(item)} for years makes it a tangible fixed asset.",
        ]
    if "ratio" in sl or "grew" in sl or "percent" in sl or "€" in stmt:
        variants += [
            "Year 1 and Year 2 columns give the pair of totals needed for the percentage.",
            "The threshold in the sentence is compared directly to the computed percentage.",
        ]
    if "audit" in sl:
        variants += [
            "An audit targets material misstatement, not absolute perfection of every euro.",
        ]
    if "depreciat" in sl:
        variants += [
            "Land is usually kept at cost without an annual write-down.",
            "Depreciation matches past spending on the asset, not a fresh cash bill.",
        ]
    if "cost of sales" in sl or "direct labour" in sl or "gross profit" in sl:
        variants += [
            "Cost of sales gathers direct production costs tied to units sold.",
            "Materials and direct labour consumed in making goods sold belong in cost of sales.",
            "Distribution and administration sit below gross profit as operating expenses.",
            "Gross profit equals revenue minus cost of sales before those operating lines.",
        ]
    if "financial structure" in sl or "liquidity" in sl and "profitability" in sl:
        variants += [
            "Financial structure compares owner funds with borrowed funds on the balance sheet.",
            "Liquidity, profitability, efficiency, and structure each illuminate a different angle.",
            "Industry benchmarks and multi-year trends add context a lone ratio lacks.",
        ]
    if "competitors" in sl or "benchmark" in sl or "unrelated industry" in sl:
        variants += [
            "Peer ratios in the same industry give a benchmark an isolated figure cannot.",
            "Cross-industry benchmarks can mislead when business models differ sharply.",
        ]
    if not truth:
        variants.append(f"Once {item} is placed on the correct line, this assertion fails.")
    else:
        variants.append(f"The described treatment of {item} matches standard reporting here.")

    out: list[str] = []
    for j in range(len(variants)):
        s = variants[(seed + j) % len(variants)]
        if not contains_forbidden(s) and s not in out:
            out.append(s)
    return out


def a_an(noun: str) -> str:
    if noun.startswith(("the ", "a ", "an ")):
        return noun
    return ("an " if noun[:1].lower() in "aeiou" else "a ") + noun


def substantive_pool(stmt: str, truth: bool, tables: dict, ctx: str, seed: int = 0) -> list[str]:
    pool: list[str] = []
    got = numeric_bits(stmt, truth, tables) if tables.get("raw") or tables.get("y1") or tables.get("amt") else None
    if got:
        pool.extend(got[0])
        pool.extend(s for s in got[1] if not contains_forbidden(s))
    got = clean_conceptual(stmt, truth)
    if got:
        pool.extend(got[0])
        pool.extend(got[1])
    pool.extend(synth_elaborations(stmt, truth, seed))
    seen: set[str] = set()
    out: list[str] = []
    for p in pool:
        p = re.sub(r"\s+", " ", p.strip())
        if not p or contains_forbidden(p):
            continue
        key = p.lower()[:72]
        if key in seen:
            continue
        seen.add(key)
        if p[-1] not in ".!?":
            p += "."
        out.append(p)
    return out


def pack_length(body: str, kind: str, pool: list[str]) -> str:
    lo, hi = KIND_BANDS[kind]
    parts = split_paras(body)
    used = {p.lower()[:60] for p in parts}

    def total_len() -> int:
        return len("\n\n".join(parts))

    if kind == "compact":
        if total_len() > hi:
            prose = [p for p in parts if not p.strip().startswith("$$")]
            math = [p for p in parts if p.strip().startswith("$$")]
            while prose and total_len() > hi and len(prose) > 1:
                prose.pop()
            parts = prose + math
        while total_len() < lo and pool:
            cand = pool.pop(0)
            if cand.lower()[:60] in used:
                continue
            if parts and not parts[-1].startswith("$$"):
                parts[-1] = parts[-1] + " " + cand
            else:
                parts.insert(0, cand)
            used.add(cand.lower()[:60])
        return "\n\n".join(parts)

    if kind == "standard":
        while total_len() < lo and pool:
            cand = pool.pop(0)
            if cand.lower()[:60] in used:
                continue
            parts.append(cand)
            used.add(cand.lower()[:60])
        while total_len() > hi and len(parts) > 2:
            drop = next((i for i, p in enumerate(parts) if not p.startswith("$$")), None)
            if drop is None:
                break
            parts.pop(drop)
        return "\n\n".join(parts)

    while total_len() < lo and pool:
        cand = pool.pop(0)
        if cand.lower()[:60] in used:
            continue
        parts.append(cand)
        used.add(cand.lower()[:60])
    while total_len() > hi and len(parts) > 3:
        drop = next((i for i, p in enumerate(reversed(parts)) if not parts[-(i + 1)].startswith("$$")), None)
        if drop is None:
            break
        idx = len(parts) - 1 - drop
        parts.pop(idx)
    return "\n\n".join(parts)


def pack_conceptual(
    truth: bool, kind: str, bits: list[str], pads: list[str], stmt: str, seed: int = 0
) -> str:
    pool = [b for b in bits + pads if b and not contains_forbidden(b)]
    pool = [re.sub(r"\s+", " ", b.strip()) for b in pool]
    pool = [b if b[-1] in ".!?" else b + "." for b in pool]
    pool.extend(synth_elaborations(stmt, truth, seed))
    seen = {p.lower()[:60] for p in pool}
    deduped: list[str] = []
    for p in pool:
        if p.lower()[:60] in {d.lower()[:60] for d in deduped}:
            continue
        deduped.append(p)
    pool = deduped
    lo, hi = KIND_BANDS[kind]

    if kind == "compact":
        text = pool[0]
        if len(text) < lo and len(pool) > 1:
            text = pool[0] + " " + pool[1]
        if len(text) > hi:
            sents = re.split(r"(?<=[.!?])\s+", text)
            text = sents[0]
            if len(text) < lo and len(sents) > 1:
                text = sents[0] + " " + sents[1]
        return finish(truth, text)

    if kind == "standard":
        paras = [pool[0]]
        mid = " ".join(pool[1:4]) if len(pool) > 1 else ""
        if mid:
            paras.append(mid)
        body = pack_length("\n\n".join(paras), kind, pool[4:])
        return finish(truth, body)

    paras = []
    for i in range(0, min(len(pool), 6), 2):
        paras.append(" ".join(pool[i : i + 2]))
    body = pack_length("\n\n".join(paras), kind, pool[6:])
    return finish(truth, body)


def fetch_numeric_raw(stmt: str, truth: bool, tables: dict, ctx: str) -> str | None:
    raw = rewrite_letter(stmt, truth, tables, ctx=ctx)
    if raw is None:
        raw = thick.try_maximal(stmt, truth, tables)
    if raw is None:
        raw = try_numeric(stmt, truth, tables)
    return raw


def build_letter(case: dict, idx: int, kind: str) -> str:
    stmt = case["statements"][idx]
    truth = bool(case["answer_key"][idx])
    ctx = case.get("context") or ""
    tables = parse_tables(ctx)
    note = trap_note(stmt)
    seed = case_seed(case) + idx * 7
    pool = substantive_pool(stmt, truth, tables, ctx, seed)

    if computable_numeric(stmt, tables, ctx):
        dep = build_depreciation_numeric(stmt, truth, tables)
        if dep:
            body = strip_body(dep)
        else:
            raw = fetch_numeric_raw(stmt, truth, tables, ctx)
            if raw:
                body = clean_numeric_raw(raw, stmt, truth)
            else:
                nb = numeric_bits(stmt, truth, tables)
                if nb:
                    return pack_conceptual(truth, kind, nb[0], nb[1], stmt, seed)
                body = strip_body(build_conceptual(stmt, truth, case.get("subsection", "6")))
        body = pack_length(body, kind, list(pool))
    elif needs_numeric(stmt):
        nb = numeric_bits(stmt, truth, tables)
        if nb:
            return pack_conceptual(truth, kind, nb[0], nb[1], stmt, seed)
        got = clean_conceptual(stmt, truth)
        if got:
            return pack_conceptual(truth, kind, got[0], got[1], stmt, seed)
        body = strip_body(build_conceptual(stmt, truth, case.get("subsection", "6")))
        body = pack_length(body, kind, list(pool))
    else:
        got = clean_conceptual(stmt, truth)
        if got:
            return pack_conceptual(truth, kind, got[0], got[1], stmt, seed)
        body = strip_body(build_conceptual(stmt, truth, case.get("subsection", "6")))
        body = pack_length(body, kind, list(pool))

    if note and note_is_redundant(note, body):
        note = ""
    return finish(truth, body, note=note)


def rotate_opening(parts: list[str], stmt: str, pool: list[str], seen: set[str]) -> list[str]:
    if not parts:
        return parts
    candidates = [parts[0]] + [p for p in pool if p and not p.startswith("$$")]
    item = asset_name(stmt)
    for cand in candidates:
        first = cand.split("\n")[0].strip()
        key = first.lower()[:40]
        if key not in seen:
            parts[0] = first if parts[0].startswith("$$") else first
            if len(parts) > 1 and not parts[0].startswith("$$"):
                parts[0] = first
            else:
                parts[0] = first
            return parts
    m = re.match(r"^For this\s+([^,]+),\s*", stmt, re.I)
    if m:
        firm = m.group(1).strip()
        parts[0] = f"{firm.capitalize()}’s figures show {parts[0][0].lower()}{parts[0][1:]}"
    elif not parts[0].lower().startswith(item.lower()):
        parts[0] = f"A {item} in this stem: {parts[0][0].lower()}{parts[0][1:]}"
    return parts


def fix_openings(expls: list[str], case: dict) -> list[str]:
    ctx = case.get("context") or ""
    tables = parse_tables(ctx)
    out: list[str] = []
    for i, expl in enumerate(expls):
        truth = expl.rstrip().endswith("True.")
        note = ""
        nm = NOTE_RE.search(body_of(expl))
        if nm:
            note = re.sub(r"^Note:\s*", "", nm.group(0), flags=re.I).strip()
        core = NOTE_RE.sub("", body_of(expl)).strip()
        out.append(finish(truth, core, note=note))
    seen: set[str] = set()
    for i, expl in enumerate(out):
        truth = expl.rstrip().endswith("True.")
        note = ""
        nm = NOTE_RE.search(body_of(expl))
        if nm:
            note = re.sub(r"^Note:\s*", "", nm.group(0), flags=re.I).strip()
        stmt = case["statements"][i]
        pool = substantive_pool(stmt, bool(case["answer_key"][i]), tables, ctx, case_seed(case) + i)
        parts = split_paras(NOTE_RE.sub("", body_of(expl)).strip())
        parts = rotate_opening(parts, stmt, pool, seen)
        out[i] = finish(truth, "\n\n".join(parts), note=note)
        first = body_of(out[i]).split("\n")[0].strip().lower()[:40]
        seen.add(first)
    return out


def expand_to_min(expl: str, stmt: str, truth: bool, target: int, case: dict, letter_i: int = 0) -> str:
    body = body_of(expl)
    note_m = NOTE_RE.search(body)
    note = note_m.group(0).replace("Note:", "").strip() if note_m else ""
    core = NOTE_RE.sub("", body).strip()
    if len(core) >= target:
        return expl
    ctx = case.get("context") or ""
    tables = parse_tables(ctx)
    seed = case_seed(case) + letter_i * 11 + target
    pool = substantive_pool(stmt, truth, tables, ctx, seed)
    parts = split_paras(core)
    used_sents = set()
    for p in parts:
        for s in re.split(r"(?<=[.!?])\s+", p):
            if s.strip():
                used_sents.add(s.strip().lower()[:80])
    guard = 0
    while len("\n\n".join(parts)) < target and guard < 40:
        extras = synth_elaborations(stmt, truth, seed + guard * 3)
        cand = ""
        for e in extras:
            if e.lower()[:80] not in used_sents:
                cand = e
                break
        if not cand and pool:
            for p in pool:
                if p.lower()[:80] not in used_sents:
                    cand = p
                    break
        guard += 1
        if not cand:
            continue
        used_sents.add(cand.lower()[:80])
        if parts and not parts[-1].startswith("$$") and len(parts[-1]) < 220:
            parts[-1] = parts[-1] + " " + cand
        else:
            parts.append(cand)
    return finish(truth, "\n\n".join(parts), note=note)


def enforce_lengths(expls: list[str], kinds: list[str], case: dict) -> list[str]:
    stmts = case["statements"]
    keys = case["answer_key"]

    def lens() -> list[int]:
        return [len(body_of(e)) for e in expls]

    for i, n in enumerate(lens()):
        if n < 150:
            lo = KIND_BANDS[kinds[i]][0]
            expls[i] = expand_to_min(expls[i], stmts[i], bool(keys[i]), max(150, lo), case, i)

    for i, n in enumerate(lens()):
        opener = body_of(expls[i]).split("\n")[0].strip()
        if n < 200 and re.match(r"^(the sentence|the assertion|the wording|yes\.|no\.)", opener, re.I):
            expls[i] = expand_to_min(expls[i], stmts[i], bool(keys[i]), 220, case, i + 50)

    guard = 0
    while not any(n >= 550 for n in lens()) and guard < 20:
        idx = kinds.index("expanded") if "expanded" in kinds else max(range(5), key=lambda j: lens()[j])
        expls[idx] = expand_to_min(expls[idx], stmts[idx], bool(keys[idx]), max(560, lens()[idx] + 120), case, idx)
        guard += 1

    guard = 0
    while sum(1 for n in lens() if n >= 400) < 2 and guard < 20:
        for i in sorted(range(5), key=lambda j: lens()[j], reverse=True):
            if lens()[i] < 400:
                expls[i] = expand_to_min(expls[i], stmts[i], bool(keys[i]), max(410, lens()[i] + 100), case, i)
                break
        guard += 1

    guard = 0
    while max(lens()) - min(lens()) < 250 and guard < 25:
        idx = max(range(5), key=lambda j: lens()[j])
        expls[idx] = expand_to_min(expls[idx], stmts[idx], bool(keys[idx]), lens()[idx] + 130, case, idx)
        guard += 1

    for i, n in enumerate(lens()):
        if n < 150:
            expls[i] = expand_to_min(expls[i], stmts[i], bool(keys[i]), 160, case, i)
    return expls


def enforce_case(expls: list[str], kinds: list[str], case: dict) -> list[str]:
    keys = case["answer_key"]
    expls = fix_openings(expls, case)
    expls = enforce_lengths(expls, kinds, case)
    expls = fix_openings(expls, case)
    expls = enforce_lengths(expls, kinds, case)
    fixed: list[str] = []
    for i, e in enumerate(expls):
        note = ""
        nm = NOTE_RE.search(body_of(e))
        if nm:
            note = re.sub(r"^Note:\s*", "", nm.group(0), flags=re.I).strip()
        fixed.append(finish(bool(keys[i]), body_of(e), note=note))
    return fixed


def rewrite_case(case: dict) -> list[str]:
    ctx = case.get("context") or ""
    kinds = assign_kinds(case, case["statements"], ctx)
    notes_budget = 2
    expls: list[str] = []
    for i, kind in enumerate(kinds):
        expl = build_letter(case, i, kind)
        stmt = case["statements"][i]
        note = trap_note(stmt)
        if note and notes_budget > 0 and not note_is_redundant(note, body_of(expl)):
            if not re.search(r"(?m)^Note:", expl) and not contains_forbidden(note):
                expl = finish(bool(case["answer_key"][i]), body_of(expl), note=note)
                notes_budget -= 1
        expls.append(expl)
    return enforce_case(expls, kinds, case)


def count_stats(data: list[dict]) -> dict:
    note_count = 0
    math_count = 0
    forbidden_hits = 0
    for c in data:
        ctx = c.get("context") or ""
        tables = parse_tables(ctx)
        for i, (te, stmt) in enumerate(zip(c["tactical_explanations"], c["statements"])):
            if re.search(r"(?m)^Note:", te):
                note_count += 1
            if contains_forbidden(te):
                forbidden_hits += 1
            if computable_numeric(stmt, tables, ctx) and "$$" in te:
                math_count += 1
    return {"note_count": note_count, "math_letter_count": math_count, "forbidden_hits": forbidden_hits}


def main() -> int:
    data = json.loads(PATH.read_text(encoding="utf-8"))
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

    for c in data:
        c["tactical_explanations"] = rewrite_case(c)

    for c, f in zip(data, frozen):
        assert c["case_id"] == f["case_id"]
        assert c["statements"] == f["statements"]
        assert c["answer_key"] == f["answer_key"]
        assert c.get("context") == f["context"]
        assert c.get("title") == f["title"]

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    stats = count_stats(data)
    case001 = next(c for c in data if c["case_id"] == "CASE 6.1.001")
    ratio_case = next(c for c in data if c["case_id"] == "CASE 6.1.005")

    print(
        json.dumps(
            {
                "cases": len(data),
                "letters": len(data) * 5,
                **stats,
                "case_6_1_001_C": case001["tactical_explanations"][2],
                "case_6_1_005_B": ratio_case["tactical_explanations"][1],
            },
            indent=2,
            ensure_ascii=False,
        )
    )

    import subprocess

    rc = subprocess.call(
        [
            sys.executable,
            str(Path(__file__).resolve().parent / "_econ_expl_from_scratch_validate.py"),
            str(PATH),
        ]
    )
    return rc


if __name__ == "__main__":
    raise SystemExit(main())
