#!/usr/bin/env python3
"""Strip em/en clause-break dashes from econ tactical_explanations only."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

FILES = [
    ROOT / "src/data/economics-cases-ch2-subtopics.json",
    ROOT / "src/data/economics-cases-ch3-subtopics.json",
    ROOT / "src/data/economics-cases-ch4-subtopics.json",
    ROOT / "src/data/economics-cases-ch5-subtopics.json",
    ROOT / "src/data/economics-cases-ch6-subtopics.json",
]

EM = "\u2014"
EN = "\u2013"
MINUS = "\u2212"

MATH_BLOCK = re.compile(r"\$\$.*?\$\$", re.DOTALL)
INLINE_MATH = re.compile(r"(?<!\$)\$(?!\$)(?:\\.|[^$\\])+\$(?!\$)")

# Paired em-dash parenthetical:  left — middle — right
PAIRED_DASH = re.compile(rf"([^\n{EM}]+?) {EM} ([^{EM}\n]+?) {EM} ")

# Sentence-openers
YES_NO_DASH = re.compile(rf"(^|\n\n|\n)(Yes|No) {EM} ", re.MULTILINE)

# Single negative aside before lowercase continuation
NOT_ASIDE = re.compile(rf" {EM} (not\b[^\.!\n{EM}]{0,80}?)(?=[,\.;!\?\n]| {EM}|\s+[a-z]|\s*$)", re.IGNORECASE)

# Remaining clause-break dashes (em or spaced en)
CLAUSE_DASH = re.compile(rf" [{EM}{EN}] ")


def _capitalize_first(s: str) -> str:
    if not s:
        return s
    return s[0].upper() + s[1:]


def _join_period(left: str, right: str) -> str:
    left = left.rstrip()
    right = right.lstrip()
    if not right:
        return left
    if left.endswith((":", ";")):
        # After a label/colon, start a new sentence rather than stacking punctuation.
        return f"{left} {_capitalize_first(right)}"
    if left.endswith("."):
        return f"{left} {_capitalize_first(right)}"
    return f"{left}. {_capitalize_first(right)}"


def _replace_clause_dash(left: str, right: str) -> str:
    right = right.lstrip()
    if not right:
        return left.rstrip()
    # Comma when the tail clearly continues the same clause.
    if right.lower().startswith("not "):
        return f"{left.rstrip()}, {right}"
    return _join_period(left, right)


def strip_dashes_in_prose(text: str) -> str:
    s = text

    # 1) Paired parenthetical dashes:  X — Y — Z  ->  X (Y) Z
    prev = None
    while prev != s:
        prev = s
        s = PAIRED_DASH.sub(lambda m: f"{m.group(1).rstrip()} ({m.group(2).strip()}) ", s)

    # 2) Yes/No — opener -> Yes, / No,
    s = YES_NO_DASH.sub(lambda m: f"{m.group(1)}{m.group(2)}, ", s)

    # 3) Negative asides:  — not ...  -> , not ...
    s = NOT_ASIDE.sub(lambda m: f", {m.group(1).strip()}", s)

    # 4) Remaining spaced em/en clause dashes (one at a time, left to right)
    while True:
        m = CLAUSE_DASH.search(s)
        if not m:
            break
        s = _replace_clause_dash(s[: m.start()], s[m.end() :])

    return s


def protect_and_strip(text: str) -> str:
    """Preserve KaTeX blocks and compound en-dashes; strip prose dashes."""
    placeholders: list[str] = []

    def _stash(match: re.Match[str]) -> str:
        placeholders.append(match.group(0))
        return f"\x00MATH{len(placeholders) - 1}\x00"

    s = text or ""
    s = MATH_BLOCK.sub(_stash, s)
    s = INLINE_MATH.sub(_stash, s)

    s = strip_dashes_in_prose(s)

    s = re.sub(r"\.{2,}", ".", s)
    s = re.sub(r" +(\.)", r"\1", s)
    s = re.sub(r"\. +(\.)", ".", s)
    s = re.sub(r"[^\S\n]{2,}", " ", s)
    s = re.sub(r" +\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)

    for i, blob in enumerate(placeholders):
        s = s.replace(f"\x00MATH{i}\x00", blob)
    return s.strip()


def count_dashes_in_tactical(data: list) -> tuple[int, int]:
    em = en = 0
    for case in data:
        for expl in case.get("tactical_explanations", []):
            em += expl.count(EM)
            # Spaced en dash used as clause break (not compound/range)
            en += len(re.findall(rf" (?<!\d){EN} (?!\d)", expl))
    return em, en


def process_file(path: Path) -> tuple[int, int, int, int, str | None]:
    data = json.loads(path.read_text(encoding="utf-8"))
    before_em, before_en = count_dashes_in_tactical(data)
    sample_before: str | None = None
    sample_after: str | None = None

    for case in data:
        expls = case.get("tactical_explanations")
        if not expls:
            continue
        for i, expl in enumerate(expls):
            if EM in expl or re.search(rf" (?<!\d){EN} (?!\d)", expl):
                if sample_before is None:
                    sample_before = expl
                new = protect_and_strip(expl)
                if new != expl and sample_after is None and sample_before == expl:
                    sample_after = new
                expls[i] = new

    after_em, after_en = count_dashes_in_tactical(data)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return before_em, before_en, after_em, after_en, sample_before


def main() -> None:
    print("econ tactical_explanations dash strip\n")
    for path in FILES:
        before_em, before_en, after_em, after_en, sample = process_file(path)
        rel = path.relative_to(ROOT)
        print(f"{rel}:")
        print(f"  em dash: {before_em} -> {after_em}")
        print(f"  en dash (clause): {before_en} -> {after_en}")
        if sample and before_em > 0:
            new_sample = protect_and_strip(sample)
            print("  sample before:", sample[:120].replace("\n", " ") + "...")
            print("  sample after: ", new_sample[:120].replace("\n", " ") + "...")
        print()


if __name__ == "__main__":
    main()
