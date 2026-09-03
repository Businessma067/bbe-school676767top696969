#!/usr/bin/env python3
"""Report the Chapter 7 bank diversity metrics used while rewriting the stems."""

from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch7-linear-quadratic.json")


def is_fg(task: dict) -> bool:
    ctx = task.get("context", "")
    return bool(re.search(r"f\(x\)\s*=", ctx)) and bool(re.search(r"g\(x\)\s*=", ctx))


def main() -> None:
    tasks = json.loads(PATH.read_text())["tasks"]
    kinds = Counter(t.get("stem_kind") for t in tasks)
    fg = [t["case_id"] for t in tasks if is_fg(t)]
    fg_formula = [t["case_id"] for t in tasks if is_fg(t) and t.get("stem_kind") == "formula"]

    overviews = [t.get("solution_overview") or "" for t in tasks]
    max_ov = max(overviews, key=len)
    dup_para = 0
    for ov in overviews:
        paras = [p.strip() for p in re.split(r"\n\s*\n", ov) if p.strip()]
        counts = Counter(paras)
        if counts and max(counts.values()) > 1:
            dup_para += 1

    expls = [e for t in tasks for e in t.get("tactical_explanations", [])]
    lens = sorted(len(e) for e in expls)
    titles = [t["title"] for t in tasks]
    dup_titles = [ti for ti, c in Counter(titles).items() if c > 1]

    print(f"tasks: {len(tasks)}")
    print(f"stem_kind: {dict(kinds)}")
    print(f"fg-in-context tasks: {len(fg)}  (formula only: {len(fg_formula)})")
    print(f"max overview length: {len(max_ov)}  ({tasks[overviews.index(max_ov)]['case_id']})")
    print(f"overviews with a repeated paragraph: {dup_para}")
    print(f"'Matching the claim' occurrences: {sum('Matching the claim' in e for e in expls)}")
    if lens:
        print(f"explanations: n={len(lens)} min={lens[0]} median={lens[len(lens)//2]} max={lens[-1]}")
    print(f"duplicate titles: {dup_titles}")
    print(f"tasks with tables_markdown: {sum(1 for t in tasks if t.get('tables_markdown'))}")


if __name__ == "__main__":
    main()
