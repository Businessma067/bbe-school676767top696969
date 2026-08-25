"""Assemble Chapter 2 task JSON from subsection modules."""

from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

from s21 import TASKS as T21  # noqa: E402
from s22 import TASKS as T22  # noqa: E402
from s23 import TASKS as T23  # noqa: E402
from s24 import TASKS as T24  # noqa: E402
from s25 import TASKS as T25  # noqa: E402


def lint(tasks: list[dict]) -> list[str]:
    errs: list[str] = []
    titles = []
    stmt_set = set()
    openings = []
    for t in tasks:
        titles.append(t["title"])
        if len(t["statements"]) != 5:
            errs.append(f"{t['title']}: not 5 statements")
        if len(t["answer_key"]) != 5:
            errs.append(f"{t['title']}: not 5 answers")
        if sum(t["answer_key"]) in (0, 5):
            # allow rare all-true/all-false but flag if too many later
            pass
        firsts = []
        for s in t["statements"]:
            if s in stmt_set:
                errs.append(f"duplicate statement: {s[:80]}")
            stmt_set.add(s)
            key = " ".join(s.split()[:4]).lower()
            firsts.append(key)
            openings.append(key)
        if len(set(firsts)) < 4:
            errs.append(f"{t['title']}: statement openings too similar")
        if t["context"].lower().startswith("let $") and t["context"].count("Which of the following") :
            pass
    if len(titles) != len(set(titles)):
        errs.append("duplicate titles")
    return errs


def main() -> None:
    raw = T21 + T22 + T23 + T24 + T25
    out_tasks = []
    for i, t in enumerate(raw, start=1):
        item = dict(t)
        item["id"] = f"math-2-{i}"
        item["case_id"] = f"MATH 2.{i:02d}"
        item["sort_order"] = i
        out_tasks.append(item)
    errs = lint(out_tasks)
    if errs:
        print("LINT ERRORS:")
        for e in errs:
            print(" -", e)
        sys.exit(1)
    dest = Path("/workspace/src/data/math-ch2-cases.json")
    dest.write_text(json.dumps({"tasks": out_tasks}, indent=1, ensure_ascii=False) + "\n")
    print(f"wrote {len(out_tasks)} tasks to {dest}")
    print(Counter(t["subsection"] for t in out_tasks))


if __name__ == "__main__":
    main()
