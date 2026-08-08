# -*- coding: utf-8 -*-
"""Thin out Watch/Why tips: only real traps, always on their own paragraph."""
from __future__ import annotations

import json
import re
from pathlib import Path

OUT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\ch5_expl_overrides.json")
RAW = json.loads(
    Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\linear_eq_60_raw.json").read_text(
        encoding="utf-8"
    )
)
BY = {t["num"]: t for t in RAW}

TIP_RE = re.compile(
    r"\n\s*\*\*(Watch|Why it fails)\.\*\*\s*(.+?)\s*$",
    flags=re.S,
)

# Tip bodies that are textbook filler — drop even if FALSE
GENERIC_TIP = re.compile(
    r"(?i)^("
    r"confirm a unit price|"
    r"match the .+ coefficient|"
    r"multiply each quantity|"
    r"subtract the .+ price|"
    r"use the total count after|"
    r"use the simplified|"
    r"substitute the solved|"
    r"recompute when the order|"
    r"a price gap is found by subtraction|"
    r"build both combinations|"
    r"for a one-account scenario|"
    r"add the fee back when|"
    r"a receipt total and its food|"
    r"returns reduce gross|"
    r"net equals gross only|"
    r"the same number can be gross|"
    r"build the equations from net|"
    r"use differences to cancel|"
    r"remove the usage charge to uncover|"
    r"multiply the number built|"
    r"the material-cost data is useful here"
    r")"
)

TRAP_STMT = re.compile(
    r"(?i)\b("
    r"more than|less than|exceed|at least|at most|strictly|"
    r"percent|%|proportion|share|ratio|"
    r"fee|tax|loyalty|forecast|advertised|projected|distractor|"
    r"transfer|moved|difference between|"
    r"double|twice|half|pooled|"
    r"round(?:ing|ed|s)?|within|"
    r"liter|converted|waste|offset|scale factor|"
    r"rival|competitor|hypothetical|were |would |had "
    r")\b"
)

TRAP_TIP = re.compile(
    r"(?i)\b("
    r"gap|transfer|fee|tax|distractor|percent|%|base|"
    r"round|threshold|strict|equality|near|thin|"
    r"convert|liter|mL|retainer|markup|forecast|"
    r"do not|don't|not the|rather than|instead of|"
    r"both sides|mis-transfer|double-count|unit"
    r")\b"
)

NEAR_MISS_BODY = re.compile(
    r"(?i)\b("
    r"only just|though only|near miss|thin|hair|exactly \d|"
    r"not more than|far below|just above|just below|midpoint|"
    r"equality fails|strict"
    r")\b"
)


def strip_period(s: str) -> str:
    s = s.strip()
    # tip line ends without a sentence period (keep mid-text decimals like 0.32)
    if s.endswith("."):
        s = s[:-1].rstrip()
    return s


def should_keep(stmt: str, verdict: bool, body: str, tip_kind: str, tip_text: str) -> bool:
    tip_text = tip_text.strip()
    if len(tip_text) < 12:
        return False
    if GENERIC_TIP.search(tip_text):
        return False

    trap_stmt = bool(TRAP_STMT.search(stmt))
    trap_tip = bool(TRAP_TIP.search(tip_text))
    near = bool(NEAR_MISS_BODY.search(body))

    # Classic traps
    if trap_stmt and trap_tip:
        return True
    if near:
        return True

    # FALSE with a real conceptual tip (not "wrong number")
    if not verdict:
        if re.search(r"(?i)\b(fee|tax|gap|transfer|percent|%|round|convert|distractor|threshold|base of)\b", tip_text):
            return True
        if trap_stmt:
            return True
        # Drop plain "the answer is X not Y" restatements
        return False

    # TRUE: only keep when trap/watch is warranted
    if trap_stmt or near:
        return True
    if re.search(r"(?i)\b(fee|delivery|net sales|gross|loyalty|forecast|convert|L →|liter)\b", tip_text):
        return True
    return False


def polish_block(text: str, stmt: str, verdict: bool) -> str:
    m = TIP_RE.search(text)
    if not m:
        # ensure no trailing glued tip variants
        return text.strip()

    body = text[: m.start()].rstrip()
    kind = m.group(1)
    tip = strip_period(m.group(2))

    if not should_keep(stmt, verdict, body, kind, tip):
        return body

    label = "**Watch.**" if kind.lower().startswith("watch") else "**Why it fails.**"
    # Always a blank line before the tip
    return f"{body}\n\n{label} {tip}"


def main() -> None:
    data = json.loads(OUT.read_text(encoding="utf-8"))
    kept = dropped = 0
    for key, entry in data.items():
        task = BY[int(key)]
        new_expls = []
        for i, expl in enumerate(entry["tactical_explanations"]):
            before = bool(TIP_RE.search(expl))
            polished = polish_block(expl, task["statements"][i], task["answer_key"][i])
            after = bool(TIP_RE.search(polished))
            if before and after:
                kept += 1
            elif before and not after:
                dropped += 1
            new_expls.append(polished)
        entry["tactical_explanations"] = new_expls

    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"kept {kept}, dropped {dropped}, total tips now {kept}")


if __name__ == "__main__":
    main()
