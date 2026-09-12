#!/usr/bin/env python3
"""Restore old centered formula style in ch6 explanations.

- Drop prose-only $$ duplicates (plain English formula copied into math).
- Wrap bare numeric comparisons after a display into their own $$…$$.
- Leave each step as a separate centered $$ block (no aligned/gather in data).
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src/data/economics-cases-ch6-subtopics.json"

PROSE_MATH_RE = re.compile(r"\$\$\s*\n([^\n]+)\n\s*\$\$")
BARE_COMPARE_RE = re.compile(
    r"(?<=\$\$)\s*\n\n("
    r"\d[\d{,}.]*\s*(?:\\le|\\ge|\\leq|\\geq|\\approx|[<>≤≥≈])\s*[^\n]+"
    r")\s*(?=\n\n|\n?$)"
)


def is_prose_math_line(line: str) -> bool:
    t = line.strip()
    if not t or "\\" in t:
        return False
    # Plain English definition / narrative wrongly wrapped as display math.
    if re.search(r"[A-Za-z]{3,}", t) and (
        "=" in t or "÷" in t or "−" in t or "–" in t or "/" in t
    ):
        return True
    if t.startswith("From the extract"):
        return True
    return False


def clean_expl(ex: str) -> str:
    if not isinstance(ex, str) or "$$" not in ex:
        return ex

    def drop_prose(m: re.Match[str]) -> str:
        line = m.group(1).strip()
        if is_prose_math_line(line):
            return ""
        return m.group(0)

    out = PROSE_MATH_RE.sub(drop_prose, ex)
    # Collapse leftover blank runs from removals.
    out = re.sub(r"\n{3,}", "\n\n", out)

    def wrap_bare(m: re.Match[str]) -> str:
        body = m.group(1).strip()
        # Normalize unicode compares to TeX where helpful.
        body = (
            body.replace("≤", r"\le ")
            .replace("≥", r"\ge ")
            .replace("≈", r"\approx ")
        )
        body = re.sub(r"\s+", " ", body).strip()
        return f"\n\n$$\n{body}\n$$"

    out = BARE_COMPARE_RE.sub(wrap_bare, out)
    out = re.sub(r"\n{3,}", "\n\n", out).strip() + "\n"
    # Prefer trailing content without forcing extra newline issues in JSON — strip outer.
    return out.strip()


def main() -> None:
    data = json.loads(PATH.read_text())
    changed = 0
    prose_removed = 0
    bare_wrapped = 0
    for case in data:
        te = case.get("tactical_explanations")
        if not isinstance(te, list):
            continue
        new_te = []
        for ex in te:
            if not isinstance(ex, str):
                new_te.append(ex)
                continue
            before = ex
            after = clean_expl(ex)
            if after != before:
                changed += 1
                if PROSE_MATH_RE.search(before):
                    # count removals roughly
                    before_n = sum(
                        1
                        for m in PROSE_MATH_RE.finditer(before)
                        if is_prose_math_line(m.group(1))
                    )
                    after_n = sum(
                        1
                        for m in PROSE_MATH_RE.finditer(after)
                        if is_prose_math_line(m.group(1))
                    )
                    prose_removed += max(0, before_n - after_n)
                if BARE_COMPARE_RE.search(before) and not BARE_COMPARE_RE.search(after):
                    bare_wrapped += 1
            new_te.append(after)
        case["tactical_explanations"] = new_te

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"letters_changed={changed} prose_removed~={prose_removed} bare_wrapped~={bare_wrapped}")


if __name__ == "__main__":
    main()
