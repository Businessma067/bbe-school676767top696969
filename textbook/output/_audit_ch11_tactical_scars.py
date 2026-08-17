#!/usr/bin/env python3
"""Post-rewrite audit of Ch11 tactical_explanations for scars introduced by parallel subagents."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")
TEX = r"times|approx|leq|geq|ln|frac|quad|mathrm|cdot|%"


def digits_outside(s: str) -> bool:
    t = s.replace("\\$", "")
    t = re.sub(r"\$[^$]*\$", "", t)
    return bool(re.search(r"\d", t))


def outside_tex(s: str) -> bool:
    t = s.replace("\\$", "")
    t = re.sub(r"\$[^$]*\$", "", t)
    return bool(re.search(rf"\\({TEX})", t))


def main() -> None:
    s = PATH.read_text(encoding="utf-8")

    hr = len(re.findall(r"\n---\n", s))
    broken_th = len(re.findall(r"\d\$, \$\d", s))
    trailing_dashes = len(re.findall(r"---\n\n\*\*[A-E]\)", s))

    print("horizontal_rules(---)", hr)
    print("broken_thousands", broken_th)
    print("dash_before_next_stmt", trailing_dashes)

    # scan tactical_explanations blocks for digits/tex outside math and unbalanced $
    bad_digits = []
    bad_tex = []
    unbalanced = []
    for m in re.finditer(r"`(\*\*[A-E]\).*?)`", s, re.S):
        block = m.group(1)
        # strip leading header (before first blank line) - header often has plain "(true)" text, fine
        parts = block.split("\n\n", 1)
        body = parts[1] if len(parts) > 1 else ""
        if not body:
            continue
        if digits_outside(body):
            bad_digits.append(body[:100])
        if outside_tex(body):
            bad_tex.append(body[:100])
        tmp = body.replace("\\$", "")
        if tmp.count("$") % 2 == 1:
            unbalanced.append(body[:100])

    print("digits_outside_math", len(bad_digits))
    for b in bad_digits[:15]:
        print(" -", b)
    print("tex_outside_math", len(bad_tex))
    for b in bad_tex[:15]:
        print(" -", b)
    print("unbalanced_dollars", len(unbalanced))
    for b in unbalanced[:15]:
        print(" -", b)


if __name__ == "__main__":
    main()
