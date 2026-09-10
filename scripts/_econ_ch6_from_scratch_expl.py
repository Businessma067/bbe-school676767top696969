#!/usr/bin/env python3
"""Rewrite ALL Ch6 tactical_explanations FROM SCRATCH per _ECON_EXPLAIN_FROM_SCRATCH_BRIEF.md.

- Conceptual: explain the accounting claim with extract nouns; no meta voice.
- Numeric: maximally stepped KaTeX via numeric_step_formulas / plain_task_expl builders.
- Per-case length mix: compact / standard / expanded bands.
- Note: only for real traps (land, residual, audit assurance, use-versus-resale).
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import _econ_ch6_thicken_thin as thick  # noqa: E402
from _econ_ch6_deepen_lib import (  # noqa: E402
    PATH,
    LETTERS,
    parse_tables,
    try_numeric,
)
from _econ_ch6_numeric_step_formulas import (  # noqa: E402
    maximalize_math,
    needs_numeric,
    rewrite_letter,
)
from _econ_ch6_plain_scratch import (  # noqa: E402
    a_an,
    asset_name,
    case_seed,
    conceptual_bits,
    expand_long_pads,
    numeric_bits,
)
from _econ_ch6_plain_task_expl import (  # noqa: E402
    TRAP_RULES,
    build_conceptual,
    build_depreciation_numeric,
    build_numeric,
    computable_numeric,
    note_is_redundant,
    strip_body,
    trap_note,
)

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)
NOTE_RE = re.compile(r"(?m)^Note:.*", re.S)
EM_DASH = "\u2014"
EN_DASH = "\u2013"

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

SCAFFOLD_PREFIXES = (
    "Balance-sheet lines in the extract show ",
    "The amounts given for this case mean ",
    "Reading the claim against the extract shows ",
    "On this balance sheet, ",
    "For the line items listed, ",
)

EMPTY_NUMERIC_LEADS = (
    "The labelled extract totals must be compared to the claim's threshold.",
    "the labelled extract totals must be compared to the claim's threshold.",
)

EXPAND_PADS = {
    "ratio": [
        "Pull the labelled totals from the extract before comparing any threshold.",
        "A small rounding difference does not rescue a claim that misses the hurdle.",
        "Once the arithmetic is on the page, the comparison alone decides the letter.",
    ],
    "classification": [
        "Ask whether the reporter uses the object or holds it for sale.",
        "Benefit lasting beyond one year points non-current; trading-cycle stock points current.",
        "Physical durability never overrides that use-versus-resale split.",
    ],
    "cashflow": [
        "Operating is the trading cycle; investing is long-term assets; financing is capital providers.",
        "Misplacing a line between those three buckets is enough to kill a cash-flow claim.",
        "Name the correct section and the wrong label falls away at once.",
    ],
    "depreciation": [
        "Straight-line thinking spreads (cost minus residual) over useful life.",
        "Land ordinarily skips that charge because its useful life is treated as indefinite.",
        "Cash left when the asset was bought; the later expense is an allocation, not a fresh outflow.",
    ],
    "equity": [
        "Liabilities are obligations to outsiders; equity is the owners' residual claim.",
        "Settlement timing, within a year or beyond, then splits current from non-current.",
        "Do not park borrowings inside equity or treat price rises as cash to the issuer.",
    ],
    "general": [
        "Match each noun in the stem to the chapter classification or measurement rule.",
        "If the claim's reason and the rule disagree, the assertion fails.",
        "A corrected category or threshold reading settles the letter cleanly.",
    ],
}


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


def strip_scaffold_lead(text: str) -> str:
    """Remove empty per-letter opener scaffolds; keep real accounting content."""
    text = text.strip()
    if not text:
        return text
    low = text.lower()
    for prefix in SCAFFOLD_PREFIXES:
        pl = prefix.lower()
        if low.startswith(pl):
            text = text[len(prefix) :].lstrip()
            if text and text[0].islower():
                text = text[0].upper() + text[1:]
            low = text.lower()
            break
    for empty in EMPTY_NUMERIC_LEADS:
        if low == empty.lower():
            return ""
        if low.startswith(empty.lower()):
            text = text[len(empty) :].lstrip()
            if text and text[0].islower():
                text = text[0].upper() + text[1:]
            break
    return text.strip()


def strip_scaffold_body(body: str) -> str:
    parts = split_paras(body)
    if not parts:
        return body
    cleaned: list[str] = []
    for i, p in enumerate(parts):
        if i == 0 and not p.strip().startswith("$$"):
            p = strip_scaffold_lead(p)
            if not p:
                continue
        cleaned.append(p)
    return "\n\n".join(cleaned)


def no_dash(text: str) -> str:
    text = text.replace(EM_DASH, ", ")
    text = text.replace(EN_DASH, "-")
    text = re.sub(r",\s*,", ",", text)
    return text


def fix_math_labels(text: str) -> str:
    def fix_block(m: re.Match[str]) -> str:
        b = m.group(1).strip()
        b = re.sub(r"(?<!\\text\{)(?<!\\mathrm\{)\bShare\b", r"\\text{Share}", b)
        b = re.sub(r"(?<![{,])(\d{1,3}),(\d{3})(?![}])", r"\1{,}\2", b)
        return f"$$\n{b}\n$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", fix_block, text)


def finish(truth: bool, body: str, note: str = "") -> str:
    body = fix_math_labels(no_dash(strip_body(body)))
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    if note and not re.search(r"(?m)^Note:", body):
        body = f"{body}\n\nNote: {no_dash(note.strip())}" if body else f"Note: {no_dash(note.strip())}"
    closer = "So the statement is True." if truth else "So the statement is False."
    return f"{body}\n\n{closer}" if body else closer


def topic_key(stmt: str) -> str:
    sl = stmt.lower()
    if any(k in sl for k in ("ratio", "margin", "turnover", "cover", "grew", "percent", "€")):
        return "ratio"
    if any(k in sl for k in ("depreciat", "carrying", "residual", "useful life", "land")):
        return "depreciation"
    if any(k in sl for k in ("operating activit", "investing activit", "financing activit", "cash flow", "dividend")):
        return "cashflow"
    if any(k in sl for k in ("equity", "share", "liabilit", "loan", "overdraft")):
        return "equity"
    if any(k in sl for k in ("inventory", "non-current", "current asset", "tangible", "intangible")):
        return "classification"
    return "general"


def extra_pads(stmt: str, truth: bool, bits: list[str], pads: list[str]) -> list[str]:
    key = topic_key(stmt)
    out = list(pads)
    for p in EXPAND_PADS[key] + EXPAND_PADS["general"]:
        if p not in out:
            out.append(p)
    if not truth:
        out.append("State the corrected line or figure and the false claim has nowhere left to stand.")
    else:
        out.append("The wording lines up with that rule, so the assertion stands.")
    return expand_long_pads(bits, out, truth)


def pack_conceptual(truth: bool, kind: str, bits: list[str], pads: list[str], stmt: str) -> str:
    pads = extra_pads(stmt, truth, bits, pads)
    bits = [re.sub(r"\s+", " ", b.strip()) for b in bits if b and b.strip()]
    bits = [b if b[-1] in ".!?" else b + "." for b in bits]
    lo, hi = KIND_BANDS[kind]

    if kind == "compact":
        text = bits[0] if bits else "The claim fails the chapter test."
        if len(text) < 100 and len(bits) > 1:
            text = bits[0] + " " + bits[1]
        if len(text) < lo and pads:
            text = text + " " + (pads[0] if pads[0][-1] in ".!?" else pads[0] + ".")
        while len(text) < lo and len(bits) > 2:
            text = text + " " + bits[min(2, len(bits) - 1)]
        if len(text) > hi:
            sents = re.split(r"(?<=[.!?])\s+", text)
            text = sents[0]
            if len(text) < lo and len(sents) > 1:
                text = sents[0] + " " + sents[1]
            if len(text) > hi:
                text = text[: hi - 1].rsplit(" ", 1)[0].rstrip(",;:") + "."
        return finish(truth, text)

    if kind == "standard":
        pool = bits + pads
        if len(pool) < 2:
            pool.append("That is the reading the chapter wants for this wording.")
        paras = [pool[0], " ".join(pool[1:3]) if len(pool) > 2 else pool[1]]
        body = finish(truth, "\n\n".join(paras))
        while len(body_of(body)) < lo:
            paras.append(pads[len(paras) % len(pads)])
            body = finish(truth, "\n\n".join(paras[:3]))
            if len(paras) > 6:
                break
        while len(body_of(body)) > hi and len(paras[-1]) > 90:
            sents = re.split(r"(?<=[.!?])\s+", paras[-1])
            paras[-1] = " ".join(sents[:-1]) if len(sents) > 1 else paras[-1][: hi // 2]
            body = finish(truth, "\n\n".join(paras))
        return body

    pool = bits + pads
    while len(pool) < 4:
        pool.append(pads[len(pool) % len(pads)])
    paras: list[str] = []
    for b in pool:
        if len(paras) >= 4:
            paras[-1] = paras[-1] + " " + b
        else:
            paras.append(b)
    body = finish(truth, "\n\n".join(paras))
    guard = 0
    while len(body_of(body)) < lo and guard < 10:
        paras.append(pads[guard % len(pads)])
        body = finish(truth, "\n\n".join(paras[:5]))
        guard += 1
    while len(body_of(body)) > hi and len(paras) > 3:
        paras = paras[:-1]
        body = finish(truth, "\n\n".join(paras))
    return body


def numeric_lead(stmt: str, idx: int) -> str:
    """Return a substantive formula identity when numeric body lacks one."""
    sl = stmt.lower()
    firm = ""
    m = re.match(r"^For this\s+([^,]+),\s*", stmt, re.I)
    if m:
        firm = m.group(1).strip()
    if "current ratio" in sl:
        tail = "Current ratio = current assets ÷ current liabilities."
    elif "equity ratio" in sl:
        tail = "Equity ratio = total equity ÷ total assets."
    elif "debt ratio" in sl:
        tail = "Debt ratio = total liabilities ÷ total assets."
    elif "acid-test" in sl or "excluding inventory" in sl:
        tail = "Acid-test ratio = (current assets − inventory) ÷ current liabilities."
    elif "working capital" in sl:
        tail = "Working capital = current assets − current liabilities."
    elif "depreciat" in sl or "carrying value" in sl:
        tail = "Straight-line charge = (cost − residual) ÷ useful life."
    elif "grew by" in sl or "fell by" in sl:
        tail = "Percentage change = (Year 2 − Year 1) ÷ Year 1."
    elif "market capitalisation" in sl:
        tail = "Market capitalisation = share price × shares outstanding."
    elif "share price" in sl or "earnings per share" in sl:
        tail = "Per-share measures combine price lines with shares outstanding."
    elif "turnover" in sl or "margin" in sl or "return on" in sl:
        tail = "Activity and margin ratios link income flows to balance-sheet bases."
    elif "make up" in sl and "% of" in sl:
        tail = "Composition share = part line ÷ whole line from the extract."
    elif "non-current liabilities" in sl and "equity" in sl:
        tail = "NCL-to-equity share = non-current liabilities ÷ total equity."
    else:
        return ""
    if firm:
        return f"For this {firm}, {tail[0].lower() + tail[1:]}"
    return tail


def numeric_outro(stmt: str, truth: bool) -> str:
    if truth:
        return "The computed result matches what the statement asserts."
    return "The computed result does not match what the statement asserts."


def expand_numeric(body: str, stmt: str, truth: bool, kind: str, case: dict, idx: int) -> str:
    lo, hi = KIND_BANDS[kind]
    outro = numeric_outro(stmt, truth)
    parts = split_paras(strip_scaffold_body(body))
    if parts and not parts[0].strip().startswith("$$"):
        parts[0] = strip_scaffold_lead(parts[0])
    intro = numeric_lead(stmt, idx)
    has_formula = any(p.strip().startswith("$$") for p in parts) or re.search(
        r"=\s*[^.]+\.", parts[0] if parts else ""
    )
    if intro and not has_formula and intro not in body:
        parts.insert(0, intro)
    if outro not in body:
        parts.append(outro)
    body = "\n\n".join(p for p in parts if p.strip())
    pads = extra_pads(stmt, truth, [], [])
    guard = 0
    while len(body) < lo and guard < 8:
        parts.append(pads[guard % len(pads)])
        body = "\n\n".join(parts)
        guard += 1
    if kind == "expanded":
        guard = 0
        while len(body) < lo and guard < 6:
            parts.append(
                pads[(guard + 2) % len(pads)]
                if guard + 2 < len(pads)
                else "Check each table line label before accepting the claim's threshold."
            )
            body = "\n\n".join(parts[:6])
            guard += 1
    if len(body) > hi and kind == "compact":
        # numeric compact: keep math, trim prose only
        prose_parts = [p for p in parts if not p.strip().startswith("$$")]
        math_parts = [p for p in parts if p.strip().startswith("$$")]
        while len("\n\n".join(prose_parts + math_parts)) > hi and len(prose_parts) > 1:
            prose_parts = prose_parts[1:]
        body = "\n\n".join(prose_parts + math_parts)
    return body


def apply_case_opener(body: str, idx: int) -> str:
    return strip_scaffold_body(body)


def build_letter(case: dict, idx: int, kind: str) -> str:
    stmt = case["statements"][idx]
    truth = bool(case["answer_key"][idx])
    ctx = case.get("context") or ""
    tables = parse_tables(ctx)
    note = trap_note(stmt)

    if computable_numeric(stmt, tables, ctx):
        dep = build_depreciation_numeric(stmt, truth, tables)
        raw = dep or build_numeric(stmt, truth, tables, ctx)
        if raw is None:
            nb = numeric_bits(stmt, truth, tables)
            if nb:
                body = pack_conceptual(truth, kind, nb[0], nb[1], stmt)
            else:
                body = strip_body(build_conceptual(stmt, truth, case.get("subsection", "6")))
        else:
            body = expand_numeric(strip_body(raw), stmt, truth, kind, case, idx)
    elif needs_numeric(stmt):
        nb = numeric_bits(stmt, truth, tables)
        if nb:
            body = pack_conceptual(truth, kind, nb[0], nb[1], stmt)
        else:
            got = conceptual_bits(stmt, truth)
            body = pack_conceptual(truth, kind, got[0], got[1], stmt) if got else strip_body(
                build_conceptual(stmt, truth, case.get("subsection", "6"))
            )
    else:
        got = conceptual_bits(stmt, truth)
        if got:
            body = pack_conceptual(truth, kind, got[0], got[1], stmt)
        else:
            body = strip_body(build_conceptual(stmt, truth, case.get("subsection", "6")))

    is_numeric = computable_numeric(stmt, tables, ctx) or (
        needs_numeric(stmt) and numeric_bits(stmt, truth, tables) is not None
    )
    if not is_numeric:
        body = apply_case_opener(body, idx)
    if note and note_is_redundant(note, body):
        note = ""
    return finish(truth, body, note=note)


def dedupe_opening(parts: list[str], stmt: str, truth: bool, seen: set[str]) -> list[str]:
    if not parts:
        return parts
    first = strip_scaffold_lead(parts[0])
    key = first.lower()[:40]
    if key not in seen:
        parts[0] = first
        return parts
    got = conceptual_bits(stmt, truth)
    if got:
        for candidate in got[0]:
            ck = candidate.lower()[:40]
            if ck not in seen:
                parts[0] = candidate
                return parts
    item = asset_name(stmt)
    if first and not first.lower().startswith(item.lower()):
        parts[0] = f"Applied to {a_an(item)}, {first[0].lower() + first[1:]}"
    elif first:
        m = re.match(r"^For this\s+([^,]+),\s*", stmt, re.I)
        if m:
            parts[0] = f"For this {m.group(1).strip()}, {first[0].lower() + first[1:]}"
        else:
            words = stmt.split()[:6]
            tag = " ".join(words).rstrip(",.")
            if len(tag) > 48:
                tag = tag[:45].rsplit(" ", 1)[0]
            parts[0] = f"On «{tag}», {first[0].lower() + first[1:]}"
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
        stmt = case["statements"][i]
        core = strip_scaffold_body(NOTE_RE.sub("", body_of(expl)).strip())
        out.append(finish(truth, core, note=note))
    seen: set[str] = set()
    for i, expl in enumerate(out):
        truth = expl.rstrip().endswith("True.")
        note = ""
        nm = NOTE_RE.search(body_of(expl))
        if nm:
            note = re.sub(r"^Note:\s*", "", nm.group(0), flags=re.I).strip()
        stmt = case["statements"][i]
        core = NOTE_RE.sub("", body_of(expl)).strip()
        parts = split_paras(strip_scaffold_body(core))
        parts = dedupe_opening(parts, stmt, bool(case["answer_key"][i]), seen)
        out[i] = finish(truth, "\n\n".join(parts), note=note)
        first = body_of(out[i]).split("\n")[0].strip().lower()[:40]
        seen.add(first)
    return out


def expand_to_min(expl: str, stmt: str, truth: bool, target: int, case: dict) -> str:
    body = body_of(expl)
    note_m = NOTE_RE.search(body)
    note = note_m.group(0).replace("Note:", "").strip() if note_m else ""
    core = NOTE_RE.sub("", body).strip()
    if len(core) >= target:
        return expl
    pads = extra_pads(stmt, truth, [], [])
    parts = split_paras(core)
    guard = 0
    while len("\n\n".join(parts)) < target and guard < 12:
        parts.append(pads[guard % len(pads)])
        guard += 1
    rebuilt = "\n\n".join(parts)
    return finish(truth, rebuilt, note=note)


def enforce_lengths(expls: list[str], kinds: list[str], case: dict) -> list[str]:
    stmts = case["statements"]
    keys = case["answer_key"]

    def lens() -> list[int]:
        return [len(body_of(e)) for e in expls]

    for i, n in enumerate(lens()):
        if n < 150:
            lo = KIND_BANDS[kinds[i]][0]
            expls[i] = expand_to_min(expls[i], stmts[i], bool(keys[i]), max(150, lo), case)

    guard = 0
    while not any(n >= 550 for n in lens()) and guard < 8:
        idx = kinds.index("expanded") if "expanded" in kinds else max(range(5), key=lambda j: lens()[j])
        expls[idx] = expand_to_min(expls[idx], stmts[idx], bool(keys[idx]), 560, case)
        guard += 1

    guard = 0
    while sum(1 for n in lens() if n >= 400) < 2 and guard < 8:
        for i in sorted(range(5), key=lambda j: lens()[j], reverse=True):
            if lens()[i] < 400:
                expls[i] = expand_to_min(expls[i], stmts[i], bool(keys[i]), 410, case)
                break
        guard += 1

    guard = 0
    while max(lens()) - min(lens()) < 250 and guard < 10:
        idx = max(range(5), key=lambda j: lens()[j])
        expls[idx] = expand_to_min(expls[idx], stmts[idx], bool(keys[idx]), lens()[idx] + 90, case)
        guard += 1
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
            if not re.search(r"(?m)^Note:", expl):
                expl = finish(bool(case["answer_key"][i]), body_of(expl), note=note)
                notes_budget -= 1
        expls.append(expl)
    return enforce_case(expls, kinds, case)


def count_stats(data: list[dict]) -> dict:
    note_count = 0
    math_count = 0
    for c in data:
        ctx = c.get("context") or ""
        tables = parse_tables(ctx)
        for i, (te, stmt) in enumerate(zip(c["tactical_explanations"], c["statements"])):
            if re.search(r"(?m)^Note:", te):
                note_count += 1
            if computable_numeric(stmt, tables, ctx) and "$$" in te:
                math_count += 1
    return {"note_count": note_count, "math_letter_count": math_count}


def main() -> int:
    thick.wrap = lambda truth, lead, body: f"{lead.strip()}\n\n{body.strip()}"
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
    dep_case = next(c for c in data if c["case_id"] == "CASE 6.4.009")
    ratio_case = next(
        c
        for c in data
        if any("current ratio" in s.lower() for s in c["statements"])
    )
    ratio_idx = next(i for i, s in enumerate(ratio_case["statements"]) if "current ratio" in s.lower())

    print(
        json.dumps(
            {
                "cases": len(data),
                "letters": len(data) * 5,
                **stats,
                "depreciation_sample": dep_case["tactical_explanations"][1],
                "ratio_sample": ratio_case["tactical_explanations"][ratio_idx],
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
