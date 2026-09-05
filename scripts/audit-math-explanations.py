#!/usr/bin/env python3
"""Audit tactical explanations across Ch1–5, Ch7–9 banks.

Checks: header/key match, $ / $$ balance, English-in-math, thin letters,
missing closers, repeated openers, bare \\frac in statements, answer_key length.
"""

from __future__ import annotations

import json
import re
import statistics
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

BANKS = [
    ("ch1-core", "src/data/math-ch1-logic.ts", "ts"),
    ("ch1-exam", "src/data/math-ch1-exam.json", "json"),
    ("ch2", "src/data/math-ch2-cases.json", "json"),
    ("ch3-core", "src/data/math-ch11-financial.ts", "ts"),
    ("ch3-exam", "src/data/math-ch3-exam.json", "json"),
    ("ch4", "src/data/math-ch4-cases.json", "json"),
    ("ch5-core", "src/data/math-ch5-linear-equations.ts", "ts"),
    ("ch5-exam", "src/data/math-ch5-exam.json", "json"),
    ("ch7-core", "src/data/math-ch7-linear-quadratic.json", "json"),
    ("ch7-mixed", "src/data/math-ch7-mixed-exam.json", "json"),
    ("ch8-core", "src/data/math-ch8-power-functions.ts", "ts"),
    ("ch8-exam", "src/data/math-ch8-exam.json", "json"),
    ("ch9-core", "src/data/math-ch9-polynomials.json", "json"),
    ("ch9-mixed", "src/data/math-ch9-mixed-exam.json", "json"),
]

HEADER_RE = re.compile(
    r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\b", re.M
)
HEADER_PAREN_RE = re.compile(
    r"^\*\*([A-E])\)\s*(.+?)\.\*\*\s*\((true|false)\)", re.I | re.M
)
CLOSE_RE = re.compile(
    r"so the statement is\s+(True|False)\.?\s*$", re.I | re.M
)
ENGLISH_IN_MATH_RE = re.compile(
    r"\$\$[^$]*\b[A-Za-z]{3,}(?:\s+[A-Za-z]{3,})+[^$]*\$\$"
)
OPENER_RE = re.compile(r"^\*\*[A-E]\.\*\*.*?\n\n([^\n]+)", re.S)


def load_json(path: Path) -> list[dict]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, str):
        data = json.loads(data)
    if isinstance(data, dict):
        for k in ("tasks", "cases", "items", "data"):
            if isinstance(data.get(k), list):
                return data[k]
        raise SystemExit(f"No task list in {path}")
    if isinstance(data, list):
        return data
    raise SystemExit(f"Unexpected JSON root in {path}")


def load_ts_tasks(path: Path) -> list[dict]:
    """Best-effort extract of case objects from TS banks via JSON-ish blocks."""
    text = path.read_text(encoding="utf-8")
    # Prefer exported arrays that look like case lists
    tasks: list[dict] = []
    # Split on case_id / id markers
    chunks = re.split(r"(?=\n\s*(?:case_id|id):\s*)", text)
    current: dict | None = None
    for ch in chunks:
        cid_m = re.search(r"(?:case_id|id):\s*[`'\"]([^`'\"]+)[`'\"]", ch)
        if not cid_m:
            continue
        cid = cid_m.group(1)
        stmts = re.findall(
            r"statements:\s*\[([\s\S]*?)\],\s*\n\s*(?:answer_key|tactical)",
            ch,
        )
        keys = re.findall(
            r"answer_key:\s*\[([^\]]+)\]",
            ch,
        )
        expl_block = re.search(
            r"tactical_explanations:\s*\[([\s\S]*?)\n\s*\],",
            ch,
        )
        overview_m = re.search(
            r"solution_overview:\s*`([\s\S]*?)`",
            ch,
        )
        if not expl_block or not keys:
            continue
        key_raw = keys[0]
        answer_key = []
        for tok in re.findall(r"\b(true|false)\b", key_raw, re.I):
            answer_key.append(tok.lower() == "true")
        expls = re.findall(r"`([\s\S]*?)`", expl_block.group(1))
        if len(expls) < 5:
            # double-quoted fallback
            expls = re.findall(r'"((?:\\.|[^"\\])*)"', expl_block.group(1))
            expls = [bytes(e, "utf-8").decode("unicode_escape") for e in expls]
        if len(answer_key) != 5 or len(expls) < 5:
            continue
        statements = []
        if stmts:
            statements = re.findall(r"`([\s\S]*?)`", stmts[0])
            if len(statements) < 5:
                statements = re.findall(r'"((?:\\.|[^"\\])*)"', stmts[0])
        tasks.append(
            {
                "case_id": cid,
                "statements": statements[:5] if statements else ["?"] * 5,
                "answer_key": answer_key[:5],
                "tactical_explanations": expls[:5],
                "solution_overview": overview_m.group(1) if overview_m else "",
            }
        )
    return tasks


def dollar_balance(s: str) -> tuple[int, int]:
    """Return (single_dollar_count_mod_2, display_dollar_pair_issues)."""
    # Remove display math first
    displays = re.findall(r"\$\$(.+?)\$\$", s, re.S)
    rest = re.sub(r"\$\$.+?\$\$", "", s, flags=re.S)
    singles = rest.count("$")
    # odd singles => imbalance
    unpaired_display = 0
    # leftover $$ markers
    if "$$" in rest:
        unpaired_display = rest.count("$$")
    return singles % 2, unpaired_display


def first_opener(expl: str) -> str:
    m = OPENER_RE.search(expl)
    if not m:
        return ""
    return re.sub(r"\s+", " ", m.group(1).strip())[:80]


def audit_task(bank: str, t: dict) -> list[str]:
    issues: list[str] = []
    cid = t.get("case_id") or t.get("id") or "?"
    key = t.get("answer_key") or []
    expls = t.get("tactical_explanations") or []
    stmts = t.get("statements") or []
    if len(key) != 5:
        issues.append(f"{bank}/{cid}: answer_key len={len(key)}")
    if len(expls) != 5:
        issues.append(f"{bank}/{cid}: tactical_explanations len={len(expls)}")
        return issues
    if len(stmts) == 5:
        for i, st in enumerate(stmts):
            if re.search(r"(?<!\$)\\frac\{", st) or re.search(
                r"(?<!\$)\\dfrac\{", st
            ):
                issues.append(f"{bank}/{cid}: bare \\frac in statement {i}")

    openers: list[str] = []
    for i, (ans, expl) in enumerate(zip(key, expls)):
        letter = "ABCDE"[i]
        verd = "True" if ans else "False"
        hm = HEADER_RE.match(expl.strip())
        if not hm:
            pm = HEADER_PAREN_RE.match(expl.strip())
            if not pm:
                issues.append(f"{bank}/{cid}/{letter}: bad/missing header")
            else:
                if pm.group(1) != letter:
                    issues.append(f"{bank}/{cid}/{letter}: header letter mismatch")
                if pm.group(3).lower() != verd.lower():
                    issues.append(
                        f"{bank}/{cid}/{letter}: header verdict {pm.group(3)} != key {verd}"
                    )
        else:
            if hm.group(1) != letter:
                issues.append(f"{bank}/{cid}/{letter}: header letter mismatch")
            if hm.group(2) != verd:
                issues.append(
                    f"{bank}/{cid}/{letter}: header {hm.group(2)} != key {verd}"
                )
        if not CLOSE_RE.search(expl):
            # also accept trailing (true)/(false) chapter styles
            if not re.search(r"\((true|false)\)\s*$", expl.strip(), re.I):
                issues.append(f"{bank}/{cid}/{letter}: missing closer")
        odd, disp = dollar_balance(expl)
        if odd:
            issues.append(f"{bank}/{cid}/{letter}: unbalanced $")
        if disp:
            issues.append(f"{bank}/{cid}/{letter}: stray $$")
        if ENGLISH_IN_MATH_RE.search(expl):
            issues.append(f"{bank}/{cid}/{letter}: possible English-in-$$")
        if len(expl) < 180:
            issues.append(f"{bank}/{cid}/{letter}: thin ({len(expl)} chars)")
        for bad in (
            "Assumption:",
            "How to solve",
            "**Trap",
            "**Watch",
            "A solver who",
            "It is important to note",
            "From the figure:",
            "From the table:",
        ):
            if bad in expl:
                issues.append(f"{bank}/{cid}/{letter}: banned phrase {bad!r}")
        openers.append(first_opener(expl))

    nonempty = [o for o in openers if o]
    if len(nonempty) >= 3 and len(set(nonempty)) == 1:
        issues.append(f"{bank}/{cid}: all five openers identical")
    elif len(nonempty) >= 4:
        c = Counter(nonempty)
        dup = [o for o, n in c.items() if n >= 3]
        if dup:
            issues.append(f"{bank}/{cid}: opener repeated 3+: {dup[0][:60]!r}")
    return issues


def summarize(bank: str, tasks: list[dict]) -> dict:
    letters = []
    overs = []
    for t in tasks:
        overs.append(len(t.get("solution_overview") or ""))
        for e in t.get("tactical_explanations") or []:
            letters.append(len(e))
    return {
        "bank": bank,
        "n": len(tasks),
        "med_letter": statistics.median(letters) if letters else 0,
        "min_letter": min(letters) if letters else 0,
        "max_letter": max(letters) if letters else 0,
        "med_overview": statistics.median(overs) if overs else 0,
        "thin_lt180": sum(1 for x in letters if x < 180),
        "thin_lt250": sum(1 for x in letters if x < 250),
    }


def main() -> None:
    all_issues: list[str] = []
    rows = []
    for bank, rel, kind in BANKS:
        path = ROOT / rel
        if not path.exists():
            print(f"MISSING {rel}", file=sys.stderr)
            continue
        tasks = load_ts_tasks(path) if kind == "ts" else load_json(path)
        rows.append(summarize(bank, tasks))
        for t in tasks:
            all_issues.extend(audit_task(bank, t))

    print("=== LENGTH SUMMARY ===")
    for r in rows:
        print(
            f"{r['bank']:12} n={r['n']:4} med_let={r['med_letter']:5.0f} "
            f"min={r['min_letter']:4} max={r['max_letter']:5} "
            f"med_ov={r['med_overview']:5.0f} "
            f"thin<180={r['thin_lt180']:4} thin<250={r['thin_lt250']:4}"
        )

    # Group issues by category
    cats: dict[str, list[str]] = defaultdict(list)
    for iss in all_issues:
        if "thin" in iss:
            cats["thin"].append(iss)
        elif "header" in iss or "verdict" in iss:
            cats["header"].append(iss)
        elif "unbalanced" in iss or "stray $$" in iss:
            cats["katex"].append(iss)
        elif "English-in" in iss:
            cats["english_math"].append(iss)
        elif "closer" in iss:
            cats["closer"].append(iss)
        elif "opener" in iss or "openers" in iss:
            cats["opener"].append(iss)
        elif "banned" in iss or "bare" in iss:
            cats["banned"].append(iss)
        else:
            cats["other"].append(iss)

    print("\n=== ISSUE COUNTS ===")
    for k, v in sorted(cats.items(), key=lambda kv: -len(kv[1])):
        print(f"{k:15} {len(v)}")

    print(f"\nTOTAL ISSUES: {len(all_issues)}")
    # Print up to 40 non-thin issues, then thin sample
    non_thin = [i for i in all_issues if "thin" not in i]
    print("\n=== NON-THIN ISSUES (up to 60) ===")
    for i in non_thin[:60]:
        print(i)
    if len(non_thin) > 60:
        print(f"... +{len(non_thin) - 60} more")

    print("\n=== THIN SAMPLE (up to 40) ===")
    for i in cats["thin"][:40]:
        print(i)
    if len(cats["thin"]) > 40:
        print(f"... +{len(cats['thin']) - 40} more")


if __name__ == "__main__":
    main()
