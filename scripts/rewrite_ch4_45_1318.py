#!/usr/bin/env python3
"""Rewrite Chapter 4.5 explanations to MATH 13.18 tutoring depth."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))

from _ch4_45_bodies import rewrite_task  # noqa: E402

PATH = ROOT / "src/data/math-ch4-cases.json"
HEADER_RE = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\b")


def validate(tid: str, letter: str, text: str, truth: bool) -> list[str]:
    issues = []
    verd = "True" if truth else "False"
    hm = HEADER_RE.match(text.strip())
    if not hm or hm.group(1) != letter or hm.group(2) != verd:
        issues.append(f"{tid} {letter}: bad header")
    if "so the statement is" not in text.lower():
        issues.append(f"{tid} {letter}: missing closer")
    if text.count("$$") % 2:
        issues.append(f"{tid} {letter}: odd $$")
    if len(text) < 180:
        issues.append(f"{tid} {letter}: still thin ({len(text)})")
    return issues


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    issues: list[str] = []
    lens: list[int] = []
    ov_lens: list[int] = []
    n = 0

    for task in tasks:
        if task.get("subsection") != "4.5":
            continue
        overview, expls = rewrite_task(task)
        task["solution_overview"] = overview
        task["tactical_explanations"] = expls
        ov_lens.append(len(overview))
        for i, letter in enumerate("ABCDE"):
            issues.extend(validate(task["id"], letter, expls[i], bool(task["answer_key"][i])))
            lens.append(len(expls[i]))
        n += 1

    if issues:
        print("ISSUES:")
        for iss in issues[:40]:
            print(" ", iss)
        if len(issues) > 40:
            print(f"  ... +{len(issues) - 40}")
        raise SystemExit(1)

    PATH.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    print(
        f"Rewrote {n} Ch4.5 tasks; letter avg={sum(lens)/len(lens):.0f} "
        f"min={min(lens)} max={max(lens)}; overview avg={sum(ov_lens)/len(ov_lens):.0f}"
    )


if __name__ == "__main__":
    main()
