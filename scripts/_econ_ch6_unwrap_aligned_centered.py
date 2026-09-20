#!/usr/bin/env python3
"""Unwrap ch6 aligned KaTeX stacks back to centered one-line $$ displays."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch6-subtopics.json")
ALIGNED = re.compile(
    r"\$\$\s*\\begin\{aligned\}\s*([\s\S]*?)\\end\{aligned\}\s*\$\$",
    re.M,
)


def strip_align_amp(row: str) -> str:
    s = row.strip()
    if not s:
        return ""
    # \text{CA} &= 406  → \text{CA} = 406
    s = re.sub(r"\s*&=\s*", " = ", s)
    # \frac{a}{b} &\approx 1.2 → \frac{a}{b} \approx 1.2
    s = re.sub(r"\s*&\s*(\\approx|\\simeq|\\leq|\\geq|\\le|\\ge|\\neq|>|<)", r" \1", s)
    # lone &= 205 already handled; lone & 205 → 205 / = 205
    s = re.sub(r"^\s*&\s*", "", s)
    s = re.sub(r"\s{2,}", " ", s).strip()
    return s


def unwrap_aligned(body: str) -> str:
    rows = re.split(r"\\\\", body)
    blocks: list[str] = []
    for row in rows:
        # drop alignment spacing hints
        row = re.sub(r"\[[^\]]*\]", "", row)
        line = strip_align_amp(row)
        if not line:
            continue
        # skip decorative asset-only labels as bare text? keep as math text
        blocks.append(f"$$\n{line}\n$$")
    return "\n\n".join(blocks)


def convert_text(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        return unwrap_aligned(m.group(1))

    return ALIGNED.sub(repl, text)


def main() -> None:
    data = json.loads(PATH.read_text())
    changed = 0
    left = 0
    for case in data:
        new = []
        for e in case["tactical_explanations"]:
            fe = convert_text(e)
            if fe != e:
                changed += 1
            left += fe.count("\\begin{aligned}")
            new.append(fe)
        case["tactical_explanations"] = new
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"changed={changed} aligned_left={left}")
    # sample
    for c in data:
        for i, e in enumerate(c["tactical_explanations"]):
            if "Acid-test" in e and "Inventory" in e:
                print(c["case_id"], chr(65 + i))
                print(e[:700])
                return


if __name__ == "__main__":
    main()
