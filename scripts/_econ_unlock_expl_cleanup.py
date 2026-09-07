#!/usr/bin/env python3
"""Clean unlocked (~35%) economics explanations: drop robotic closers, keep teaching body."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UNLOCK_RATIO = 0.35

FILES = [
    ROOT / "src/data/economics-cases-ch2-subtopics.json",
    ROOT / "src/data/economics-cases-ch3-subtopics.json",
    ROOT / "src/data/economics-cases-ch4-subtopics.json",
    ROOT / "src/data/economics-cases-ch5-subtopics.json",
    ROOT / "src/data/economics-cases-ch6-subtopics.json",
]

# Whole-line fillers / verdict padding (case-insensitive match on stripped line).
FILLER_LINE = re.compile(
    r"""^(
      The\ statement\ is\ (true|false)\.?
      |Those\ restricting\ words\ stretch\b.*
      |The\ sentence\ therefore\ reports\b.*
      |Nothing\ in\ the\ wording\ contradicts\b.*
      |Under\ that\ definition\ the\ assertion\ is\ the\ right\ description\b.*
      |Once\ the\ defining\ feature\ is\ restored\b.*
      |The\ mislabelled\ category\ or\ reversed\ comparison\b.*
      |Swap\ in\ the\ textbook\ criterion\b.*
      |The\ absolute\ wording\ is\ what\ breaks\b.*
      |One\ clear\ counterexample\ under\ the\ right\ criterion\b.*
      |The\ claim\ therefore\b.*
      |That\ reading\ stretches\b.*
      |The\ sentence\ therefore\b.*
      |Connect\ the\ claim\ to\b.*
      |Sort\ the\ claim\ by\b.*
      |Evaluated\ against\ the\ textbook\ standard\b.*
      |The\ assertion\ (is|falls|holds|fails)\b.*\b(case|claim|statement)\b.*
    )$""",
    re.I | re.X,
)

PREFIX = re.compile(r"^(TRUE|FALSE)\s*[—–-]\s*", re.I)


def unlock_count(n: int) -> int:
    return max(1, int(n * UNLOCK_RATIO)) if n else 0


def clean_expl(expl: str, truth: bool) -> str:
    want = "TRUE" if truth else "FALSE"
    text = (expl or "").strip()
    m = PREFIX.match(text)
    body = text[m.end() :].strip() if m else text
    paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
    kept: list[str] = []
    for p in paras:
        # Drop paragraphs that are only filler lines
        lines = [ln.strip() for ln in p.split("\n") if ln.strip()]
        lines = [ln for ln in lines if not FILLER_LINE.match(ln)]
        if not lines:
            continue
        kept.append("\n".join(lines))
    if not kept:
        # Fallback: first non-empty sentence of original body
        first = re.split(r"(?<=[.!?])\s+", body)
        first = next((s.strip() for s in first if s.strip()), body.strip())
        kept = [first]
    # Prefer 1–3 teaching paragraphs; drop trailing micro-padding if >3
    if len(kept) > 3:
        kept = kept[:3]
    out = f"{want} — {kept[0]}"
    for extra in kept[1:]:
        out += f"\n\n{extra}"
    return out.strip() + "\n" if out.endswith("\n") else out.strip()


def main() -> None:
    total_cases = 0
    total_letters = 0
    for path in FILES:
        cases = json.loads(path.read_text())
        n = unlock_count(len(cases))
        changed = 0
        for c in cases[:n]:
            old = list(c["tactical_explanations"])
            new = [
                clean_expl(e, bool(t))
                for e, t in zip(c["tactical_explanations"], c["answer_key"])
            ]
            if new != old:
                c["tactical_explanations"] = new
                changed += 1
            total_letters += len(new)
        total_cases += n
        path.write_text(json.dumps(cases, ensure_ascii=False, indent=2) + "\n")
        print(f"{path.name}: cleaned unlocked {n}/{len(cases)} cases ({changed} changed)")
    print(f"done: {total_cases} unlocked cases, {total_letters} letters")


if __name__ == "__main__":
    main()
