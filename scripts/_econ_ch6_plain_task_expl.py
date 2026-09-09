#!/usr/bin/env python3
"""Rewrite ALL Ch6 tactical_explanations as plain task answers.

Plain answer-key voice: explain this case's figures or wording directly.
Stepped $$ KaTeX for numeric letters; Note: only for real traps.
Closer: So the statement is True./False. (no TRUE/FALSE prefix).
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
    ASSET_WORD,
    INTANG_WORD,
    a_an,
    asset_name,
    conceptual_bits,
    numeric_bits,
)

PREFIX_RE = re.compile(r"^(TRUE|FALSE)\s*[—–\-]\s*", re.I)
CLOSER_RE = re.compile(r"\n*\s*So the statement is (True|False)\.?\s*$", re.I | re.M)
OLD_CLOSER_RE = re.compile(r"\n*\s*The statement is (true|false)\.?\s*$", re.I | re.M)

THEATRICAL = (
    "When you hear",
    "don't picture",
    "Look at the table",
    "Walk through",
    "Ask who would read",
    "Here's the catch",
    "Here is the catch",
    "Talk it through at the board",
    "rehearse before the exam",
    "Applied to this stem",
)

META_DROP = re.compile(
    r"(?m)^(?:"
    r"Name the (?:ratio|identity|growth identity|decline identity|coverage identity)[^\n]*\n|"
    r"Plug in the (?:table|truck) figures[^\n]*\n|"
    r"Compare to the claim['’]s hurdle[^\n]*\n|"
    r"Reading the arithmetic against the claim:[^\n]*\n|"
    r"So the arithmetic (?:supports|misses) the claim\.?\s*\n|"
    r"Build (?:current assets|non-current liabilities)[^\n]*\n|"
    r"Non-current liabilities combine[^\n]*\n"
    r")",
    re.I,
)

TRAP_RULES: list[tuple[re.Pattern[str], str]] = [
    (
        re.compile(r"land.*depreciat|depreciat.*land|land is not subject", re.I),
        "Land is not depreciated like buildings and machinery — it is kept at cost.",
    ),
    (
        re.compile(r"residual.*ignored|ignore.*residual|residual value of the €", re.I),
        "Straight-line depreciation uses (cost − residual) ÷ useful life; residual is not ignored.",
    ),
    (
        re.compile(r"inventory because inventory can include any physical", re.I),
        "Inventory is stock held for sale or cycle use — not every machine the firm owns.",
    ),
    (
        re.compile(r"depends mainly on its purchase price", re.I),
        "Purchase price is cost; inventory versus fixed asset follows intended use.",
    ),
    (
        re.compile(r"owner's equity is the portion of assets financed by bank loans", re.I),
        "Bank loans are liabilities; equity is the owners' residual claim after liabilities.",
    ),
    (
        re.compile(
            r"shareholder sells shares|already-issued shares transfers|price rise.*cash to the issuer",
            re.I,
        ),
        "Secondary-market trades move cash between investors, not into the issuer's cash balance.",
    ),
    (
        re.compile(r"always be classified identically", re.I),
        "The same physical item can be inventory for a dealer and a fixed asset for an operator.",
    ),
    (
        re.compile(r"collecting payment on a trade receivable.*revenue|receivable.*new revenue", re.I),
        "Collecting a receivable is cash from an earlier sale — not new revenue.",
    ),
    (
        re.compile(r"low inventory turnover always proves that goods sell quickly", re.I),
        "Low turnover means stock moves slowly; high turnover signals fast sales.",
    ),
]


def strip_body(text: str) -> str:
    text = PREFIX_RE.sub("", text.strip())
    text = CLOSER_RE.sub("", text)
    text = OLD_CLOSER_RE.sub("", text)
    return text.strip()


def finish(truth: bool, body: str, note: str = "") -> str:
    body = strip_body(body)
    body = META_DROP.sub("", body)
    body = scrub_theatrical(body)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    if note and not re.search(r"(?m)^Note:", body):
        body = f"{body}\n\nNote: {note}" if body else f"Note: {note}"
    closer = "So the statement is True." if truth else "So the statement is False."
    return f"{body}\n\n{closer}" if body else closer


def scrub_theatrical(text: str) -> str:
    blocks = split_math_blocks(text)
    cleaned: list[str] = []
    for kind, chunk in blocks:
        if kind == "math":
            cleaned.append(chunk)
            continue
        for phrase in THEATRICAL:
            if phrase.lower() in chunk.lower():
                sents = re.split(r"(?<=[.!?])\s+", chunk)
                sents = [s for s in sents if phrase.lower() not in s.lower()]
                chunk = " ".join(sents)
        chunk = re.sub(r"(?m)^Look at the table —\s*", "From the figures: ", chunk)
        chunk = re.sub(r"(?m)^Walk through the words against the definition —\s*", "", chunk)
        chunk = re.sub(r"(?m)^Ask who would read it:\s*", "", chunk)
        chunk = re.sub(
            r"When you hear \"audit\", don't picture a guarantee that every euro is perfect\.[^.]*\.\s*",
            "An audit gives reasonable assurance, not absolute certainty. ",
            chunk,
            flags=re.I,
        )
        chunk = re.sub(
            r"That's exactly what this claim says about[^.]*\.\s*",
            "",
            chunk,
            flags=re.I,
        )
        chunk = chunk.replace("From the extract:", "").strip()
        if chunk:
            cleaned.append(chunk)
    return "\n\n".join(cleaned).strip()


def split_math_blocks(text: str) -> list[tuple[str, str]]:
    parts = re.split(r"(\$\$[\s\S]*?\$\$)", text)
    out: list[tuple[str, str]] = []
    for p in parts:
        if not p.strip():
            continue
        out.append(("math" if p.startswith("$$") else "prose", p.strip()))
    return out


def plain_verdict(stmt: str, truth: bool, detail: str = "") -> str:
    if detail:
        return detail.rstrip(".") + "."
    if truth:
        return "The computed result matches the claim."
    return "The computed result does not match the claim."


def plainify_numeric(raw: str, stmt: str, truth: bool) -> str:
    """Turn stepped numeric builder output into plain task-answer prose + KaTeX."""
    text = strip_body(raw)
    text = scrub_theatrical(text)

    # peel optional lead before first blank line if it looks like a definition
    lead = ""
    if "\n\n" in text:
        first, rest = text.split("\n\n", 1)
        if "$$" not in first and len(first) < 180:
            lead = first.strip()
            text = rest

    blocks = split_math_blocks(text)
    prose_bits: list[str] = []
    math_bits: list[str] = []
    verdict = ""

    for kind, chunk in blocks:
        if kind == "math":
            math_bits.append(maximalize_math(chunk))
        else:
            chunk = META_DROP.sub("", chunk).strip()
            chunk = scrub_theatrical(chunk)
            if not chunk:
                continue
            if re.search(r"Compare to the claim|So the arithmetic|Reading the arithmetic", chunk, re.I):
                m = re.search(
                    r"actual[^.]*\.|Year \d[^.]*\.|acid-test[^.]*\.|growth is[^.]*\.|"
                    r"computed[^.]*\.|Those values[^.]*\.|Those figures[^.]*\.",
                    chunk,
                    re.I,
                )
                if m:
                    verdict = m.group(0).strip()
                continue
            if re.match(r"^(Threshold|Claimed|Actual|Year \d NCL)", chunk, re.I):
                verdict = verdict or chunk
                continue
            prose_bits.append(chunk)

    if lead and lead not in " ".join(prose_bits):
        prose_bits.insert(0, lead)

    if not prose_bits and not math_bits:
        prose_bits = [text[:200]]

    parts: list[str] = []
    if prose_bits:
        parts.append("\n\n".join(prose_bits[:2]))
    if math_bits:
        parts.extend(math_bits)
    if not verdict:
        verdict = plain_verdict(stmt, truth)
    parts.append(verdict)

    return finish(truth, "\n\n".join(p for p in parts if p))


def build_numeric(stmt: str, truth: bool, tables: dict, ctx: str) -> str | None:
    raw = rewrite_letter(stmt, truth, tables, ctx=ctx)
    if raw is None:
        raw = thick.try_maximal(stmt, truth, tables)
    if raw is None:
        raw = try_numeric(stmt, truth, tables)
    if raw is None:
        return None
    if "$$" not in raw:
        raw = maximalize_math(raw)
    return plainify_numeric(raw, stmt, truth)


def format_conceptual(bits: list[str], pads: list[str], truth: bool) -> str:
    """One or two short paragraphs — no exam-meta padding."""
    uniq: list[str] = []
    for b in bits + (pads[:1] if not truth and pads else []):
        b = re.sub(r"\s+", " ", b.strip())
        if not b:
            continue
        if b[-1] not in ".!?":
            b += "."
        norm = b.lower()[:60]
        if any(norm == u.lower()[:60] for u in uniq):
            continue
        uniq.append(b)
    if not uniq:
        uniq = ["The claim does not match the chapter rule for this wording."]
    if len(uniq) >= 3:
        body = "\n\n".join([" ".join(uniq[:2]), uniq[2]])
    elif len(uniq) == 2:
        body = "\n\n".join(uniq)
    else:
        body = uniq[0]
    return finish(truth, body)


def audit_expl(stmt: str, truth: bool) -> str:
    sl = stmt.lower()
    if truth:
        if "reasonable assurance" in sl and "not an absolute guarantee" in sl:
            return finish(
                truth,
                "An audit gives reasonable assurance, not absolute certainty — "
                "the opinion targets material misstatement in the figures, not perfection or future profit.",
            )
        return finish(
            truth,
            "The claim describes the audit's limited assurance correctly: "
            "reasonable confidence that the statements are free from material misstatement.",
        )
    return finish(
        truth,
        "An audit provides reasonable assurance about material misstatement, not absolute certainty. "
        "The claim overstates what an audit opinion guarantees.",
    )


def financial_vs_mgmt(stmt: str, truth: bool) -> str:
    sl = stmt.lower()
    if "management accounting" in sl and "decisions such as" in sl:
        return finish(
            truth,
            "Management accounting supports internal decisions such as pricing and cost control. "
            "That matches the claim.",
        )
    if "published version" in sl or "discloses" in sl or "lender" in sl or "tax authorit" in sl:
        return finish(
            truth,
            "Financial statements prepared for outsiders — lenders, shareholders, or tax authorities — "
            "are financial accounting, not management reports.",
        )
    if "financial accounting" in sl and "only external" in sl:
        return finish(
            truth,
            "Financial accounting serves external users such as banks and tax authorities, "
            "but managers also use those published statements.",
        )
    return format_conceptual(*conceptual_bits(stmt, truth), truth)


def depreciation_cash(stmt: str, truth: bool) -> str:
    return finish(
        truth,
        "Depreciation allocates past asset cost over useful life; unlike wages or energy, "
        "it does not trigger a cash payment in the period charged.",
    )


def inventory_current(stmt: str, truth: bool) -> str:
    m = re.search(r"inventory of €([\d,]+) thousand", stmt, re.I)
    amt = m.group(1) if m else None
    if amt:
        return finish(
            truth,
            f"Inventory of €{amt} thousand is stock expected to be sold or used within the operating cycle, "
            "so it belongs among current assets.",
        )
    return finish(
        truth,
        "Inventory is held for sale or cycle use and is classified as a current asset.",
    )


def build_conceptual(stmt: str, truth: bool, subsection: str) -> str:
    sl = stmt.lower()

    if ("reasonable assurance" in sl or "independent audit" in sl) and "audit" in sl:
        return audit_expl(stmt, truth)
    if any(
        k in sl
        for k in (
            "financial accounting",
            "management accounting",
            "published version",
            "discloses",
            "tax authorit",
        )
    ):
        return financial_vs_mgmt(stmt, truth)
    if re.search(r"inventory.*?current asset", sl):
        return inventory_current(stmt, truth)
    if "depreciation" in sl and "cash" in sl and "does not cause" in sl:
        return depreciation_cash(stmt, truth)

    got = conceptual_bits(stmt, truth)
    if got:
        return format_conceptual(got[0], got[1], truth)

    # minimal fallback tied to subsection topic
    return finish(
        truth,
        f"The wording {'matches' if truth else 'conflicts with'} the chapter rule for {subsection} "
        f"({'accepted' if truth else 'rejected'} on its own terms).",
    )


def build_depreciation_numeric(stmt: str, truth: bool, tables: dict) -> str | None:
    """Stepped straight-line math for Asset A/B depreciation comparisons."""
    sl = stmt.lower()
    if "annual depreciation charge is more than" not in sl and "combined annual depreciation" not in sl:
        return None
    nb = numeric_bits(stmt, truth, tables)
    if not nb:
        return None
    bits, _ = nb
    # rebuild with aligned KaTeX when we can parse asset table
    from _econ_ch6_deepen_lib import fmt, parse_dep, pct

    assets = parse_dep(tables["raw"])
    if not assets:
        return format_conceptual(bits, [], truth)

    keys = list(assets.keys())
    ann = {k: (a["cost"] - a["resid"]) / a["life"] for k, a in assets.items()}
    a_key, b_key = keys[0], keys[1] if len(keys) > 1 else keys[0]
    a_ann, b_ann = ann[a_key], ann[b_key]

    m = re.search(
        r"asset a's annual depreciation charge is more than (\d+(?:\.\d+)?)% higher than asset b's",
        stmt,
        re.I,
    )
    if m:
        th = float(m.group(1))
        prem = (a_ann - b_ann) / b_ann * 100
        ac, ar, al = fmt(assets[a_key]["cost"]), fmt(assets[a_key]["resid"]), fmt(assets[a_key]["life"])
        bc, br, bl = fmt(assets[b_key]["cost"]), fmt(assets[b_key]["resid"]), fmt(assets[b_key]["life"])
        ra, rb = fmt(round(a_ann)), fmt(round(b_ann))
        body = "\n\n".join(
            [
                "Annual depreciation = (cost − residual) ÷ useful life for each asset.",
                f"$$\n\\text{{Asset A}} = \\frac{{{ac} - {ar}}}{{{al}}} = {ra}\n$$",
                f"$$\n\\text{{Asset B}} = \\frac{{{bc} - {br}}}{{{bl}}} = {rb}\n$$",
                "$$\n"
                "\\begin{aligned}\n"
                f"&\\frac{{{ra} - {rb}}}{{{rb}}} = {prem:.1f}\\% \\\\[0.65em]\n"
                f"&\\text{{Claim: more than {th:g}\\% higher}}\n"
                "\\end{aligned}\n"
                "$$",
                f"Asset A's charge is {prem:.1f}% above Asset B's, "
                f"{'which exceeds' if prem > th else 'which does not exceed'} the {th:g}% threshold.",
            ]
        )
        note = ""
        if "residual" in tables["raw"].lower():
            note = "Straight-line depreciation subtracts residual value before dividing by useful life."
        return finish(truth, body, note=note)

    return None


def computable_numeric(stmt: str, tables: dict, ctx: str) -> bool:
    """True when the letter should show stepped arithmetic from the extract."""
    if not needs_numeric(stmt):
        return False
    if re.search(
        r"return on capital employed relates|asset turnover relates|"
        r"inventory turnover is typically|widening gap between revenue|"
        r"financing its non-current assets soundly|similar rates tends|"
        r"cost of sales grows more slowly than revenue over a period|"
        r"cost of sales consistently outpaces its revenue growth|"
        r"profit for the year increased by exactly €3 thousand|"
        r"single return on capital employed figure is (?:most informative|always fully meaningful)",
        stmt,
        re.I,
    ):
        return False
    return (
        rewrite_letter(stmt, True, tables, ctx=ctx) is not None
        or thick.try_maximal(stmt, True, tables) is not None
        or try_numeric(stmt, True, tables) is not None
        or build_depreciation_numeric(stmt, True, tables) is not None
    )
    for rx, note in TRAP_RULES:
        if rx.search(stmt):
            return note
    return ""


def note_is_redundant(note: str, body: str) -> bool:
    if note.lower() in body.lower():
        return True
    keywords = [w for w in re.findall(r"[a-z]{5,}", note.lower()) if w not in {"straight", "before", "after"}]
    if not keywords:
        return False
    hits = sum(1 for w in keywords if w in body.lower())
    return hits >= max(2, len(keywords) * 2 // 3)


def trap_note(stmt: str) -> str:
    for rx, note in TRAP_RULES:
        if rx.search(stmt):
            return note
    return ""


def explain_letter(case: dict, idx: int) -> str:
    stmt = case["statements"][idx]
    truth = bool(case["answer_key"][idx])
    tables = parse_tables(case.get("context") or "")
    ctx = case.get("context") or ""
    note = trap_note(stmt)

    if needs_numeric(stmt):
        dep = build_depreciation_numeric(stmt, truth, tables)
        if dep:
            out = dep
        else:
            out = build_numeric(stmt, truth, tables, ctx)
        if out is None:
            nb = numeric_bits(stmt, truth, tables)
            if nb:
                body = strip_body(format_conceptual(nb[0], nb[1], truth))
                use_note = note if not note_is_redundant(note, body) else ""
                return finish(truth, body, note=use_note)
            out = build_conceptual(stmt, truth, case.get("subsection", "6"))
    else:
        out = build_conceptual(stmt, truth, case.get("subsection", "6"))

    body = strip_body(out)
    if note and (note_is_redundant(note, body) or note.lower() in body.lower()):
        note = ""
    return finish(truth, body, note=note)


def validate(data: list[dict]) -> dict:
    errs: list[str] = []
    note_count = 0
    math_numeric = 0
    numeric_total = 0
    charts = 0

    for c in data:
        charts += str(c).count("[[CHART]]")
        for i, (te, key, stmt) in enumerate(
            zip(c["tactical_explanations"], c["answer_key"], c["statements"])
        ):
            want = "True" if key else "False"
            if not te.rstrip().endswith(f"So the statement is {want}."):
                errs.append(f"{c['case_id']} {LETTERS[i]}: bad closer")
            if PREFIX_RE.match(te):
                errs.append(f"{c['case_id']} {LETTERS[i]}: TRUE/FALSE prefix")
            for bad in THEATRICAL + ("Applied to this stem",):
                if bad.lower() in te.lower():
                    errs.append(f"{c['case_id']} {LETTERS[i]}: theatrical `{bad}`")
            if re.search(r"(?m)^Note:", te):
                note_count += 1
            if computable_numeric(stmt, parse_tables(c.get("context") or ""), c.get("context") or ""):
                numeric_total += 1
                if "$$" in te:
                    math_numeric += 1
                else:
                    errs.append(f"{c['case_id']} {LETTERS[i]}: numeric without $$")
            elif needs_numeric(stmt):
                pass

    return {
        "errors": errs,
        "note_count": note_count,
        "math_letter_count": math_numeric,
        "numeric_total": numeric_total,
        "charts": charts,
    }


def main() -> None:
    data = json.loads(PATH.read_text())
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
        c["tactical_explanations"] = [explain_letter(c, i) for i in range(5)]

    for c, f in zip(data, frozen):
        assert c["case_id"] == f["case_id"]
        assert c["statements"] == f["statements"]
        assert c["answer_key"] == f["answer_key"]
        assert c.get("context") == f["context"]
        assert c.get("title") == f["title"]

    report = validate(data)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    audit = next(c for c in data if c["case_id"] == "CASE 6.4.008")
    dep = next(c for c in data if c["case_id"] == "CASE 6.4.009")

    print(json.dumps({
        "cases": len(data),
        "letters": len(data) * 5,
        "note_count": report["note_count"],
        "math_letter_count": report["math_letter_count"],
        "numeric_total": report["numeric_total"],
        "charts": report["charts"],
        "validation_errors": len(report["errors"]),
        "errors_sample": report["errors"][:12],
        "audit_sample_D": audit["tactical_explanations"][3],
        "depreciation_sample_B": dep["tactical_explanations"][1],
    }, indent=2, ensure_ascii=False))

    if report["errors"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
