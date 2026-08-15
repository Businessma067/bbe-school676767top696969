# -*- coding: utf-8 -*-
"""Patch remaining leaked-latex scars after binomial rewrite."""
from __future__ import annotations

import importlib.util
import json
import re
from pathlib import Path

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

REPLACEMENTS = [
    # mangled symmetric-difference style statements
    (
        r"\(E \\setminus F\$\) \\cup \$\(\$F \\setminus E\$\)\$ = \\\{1, 4, 6, 7\\\}\$",
        r"$(E \\setminus F) \\cup (F \\setminus E) = \\{1, 4, 6, 7\\}$",
    ),
    (
        r"\(E \\setminus F\$\) \\cap \$\(\$F \\setminus E\$\)\$ = \\emptyset\$",
        r"$(E \\setminus F) \\cap (F \\setminus E) = \\emptyset$",
    ),
    (
        r"\(A \\setminus B\$\) \\cap \$\(\$B \\setminus A\$\)\$ = \\emptyset\$\.?",
        r"$(A \\setminus B) \\cap (B \\setminus A) = \\emptyset$.",
    ),
    # set difference fragments missing $
    (r"(?<!\$)\(E \\setminus F\)(?!\$)", r"$(E \\setminus F)$"),
    (r"(?<!\$)\(B \\setminus A\)(?!\$)", r"$(B \\setminus A)$"),
    (r"(?<!\$)\(A \\setminus B\)(?!\$)", r"$(A \\setminus B)$"),
    (r"(?<!\$)\(F \\setminus E\)(?!\$)", r"$(F \\setminus E)$"),
    (r"(?<!\$)\(P \\land Q\)(?!\$)", r"$(P \\land Q)$"),
    (r"(?<!\$)\(P \\lor Q\)(?!\$)", r"$(P \\lor Q)$"),
    (r"(?<!\$)\(4 = 2 \\times 2\)(?!\$)", r"$(4 = 2 \\times 2)$"),
    (r"(?<!\$)\(= 3 \\times 5\)(?!\$)", r"$= 3 \\times 5$"),
    # garbage trailing numbers from old scars
    (r"must be false, not true\.\s*14\b", "must be false, not true."),
    (r"\\emptyset \\in D 3", r"\\emptyset \\in D"),
    (r"\$\\emptyset \\in D 3\$", r"$\\emptyset \\in D$"),
]


def fix(s: str) -> str:
    if not s:
        return s
    exact = [
        (
            "$(E \\setminus F) \\cup $(F \\setminus E)$ = \\{1, 4, 6, 7\\}$",
            "$(E \\setminus F) \\cup (F \\setminus E) = \\{1, 4, 6, 7\\}$",
        ),
        (
            "$(E \\setminus F) \\cap $(F \\setminus E)$ = \\emptyset$",
            "$(E \\setminus F) \\cap (F \\setminus E) = \\emptyset$",
        ),
        (
            "$(A \\setminus B) \\cap $(B \\setminus A)$ = \\emptyset$.",
            "$(A \\setminus B) \\cap (B \\setminus A) = \\emptyset$.",
        ),
        (
            "$(A \\setminus B) \\cap $(B \\setminus A)$ = \\emptyset$",
            "$(A \\setminus B) \\cap (B \\setminus A) = \\emptyset$",
        ),
        (
            "(E \\setminus F$) \\cup $($F \\setminus E$)$ = \\{1, 4, 6, 7\\}$",
            "$(E \\setminus F) \\cup (F \\setminus E) = \\{1, 4, 6, 7\\}$",
        ),
        (
            "(E \\setminus F$) \\cap $($F \\setminus E$)$ = \\emptyset$",
            "$(E \\setminus F) \\cap (F \\setminus E) = \\emptyset$",
        ),
        (
            "(A \\setminus B$) \\cap $($B \\setminus A$)$ = \\emptyset$.",
            "$(A \\setminus B) \\cap (B \\setminus A) = \\emptyset$.",
        ),
    ]
    for a, b in exact:
        s = s.replace(a, b)
    for a, b in REPLACEMENTS:
        s = re.sub(a, b, s)
    s = re.sub(r"(?<!\$)\(= 2\^([0-9n]+)\)(?!\$)", r"$(= 2^\1)$", s)
    s = re.sub(
        r"nor 28 \(= 2\^[^\n\$]{0,40}",
        "nor $28 (= 2^2 \\times 7)$",
        s,
    )
    s = s.replace("must be false, not true. 14", "must be false, not true.")
    return s


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    for t in tasks:
        t["context"] = fix(t["context"])
        t["solution_overview"] = fix(t["solution_overview"])
        t["statements"] = [fix(s) for s in t["statements"]]
        t["tactical_explanations"] = [fix(s) for s in t["tactical_explanations"]]
        build.normalize_task_dollars(t)
    build.write_ts(tasks)
    DUMP.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
    print("patched", len(tasks))


if __name__ == "__main__":
    main()
