# -*- coding: utf-8 -*-
"""Final scar cleanup after binomial rewrite."""
from __future__ import annotations

import importlib.util
import json
import re
from pathlib import Path

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

WRONG_EXIST = (
    "An existential claim needs only one working witness.\n\n"
)


def fix(s: str) -> str:
    if not s:
        return s
    # Exactly $16$ people are in A only$ (not B). → drop stray $ before gloss
    s = re.sub(r" only\$\s*(\((?:not [AB]|frost)[^)]*\))", r" only \1", s)
    s = re.sub(r"(\d+)\$\s*(\((?:not [AB])[^)]*\))", r"\1 \2", s)
    # -$3 style still
    s = re.sub(r"(?<![\\$])-\$(\d)", r"$-\1", s)
    s = s.replace(r"\emptyset \in D 3", r"\emptyset \in D")
    s = s.replace(r"$\\emptyset \\in D 3$", r"$\\emptyset \\in D$")
    return s


def fix_expl(e: str, stmt: str) -> str:
    e = fix(e)
    sl = stmt.lower()
    # Drop wrongly attached existential principle on uniqueness / exactly-one claims
    if ("unique" in sl or "exactly one" in sl or "exactly 1" in sl) and WRONG_EXIST in e:
        e = e.replace(WRONG_EXIST, "")
    # Drop universal principle on claims that aren't universal
    if "A universal claim fails as soon as a single counterexample appears.\n\n" in e:
        if not any(w in sl for w in ("for all", "for every", "\\forall", "always", "every x", "any x")):
            # keep if implication-universal style "x in A =>"
            if "\\forall" not in stmt and "for all" not in sl and "for every" not in sl:
                if not re.search(r"\\in A\\s*\\Rightarrow", stmt):
                    e = e.replace(
                        "A universal claim fails as soon as a single counterexample appears.\n\n",
                        "",
                    )
    e = re.sub(r"\n{3,}", "\n\n", e)
    return e.strip()


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    for t in tasks:
        t["context"] = fix(t["context"])
        t["solution_overview"] = fix(t["solution_overview"])
        t["statements"] = [fix(s) for s in t["statements"]]
        t["tactical_explanations"] = [
            fix_expl(e, t["statements"][i]) for i, e in enumerate(t["tactical_explanations"])
        ]
    # Also patch principle_for guard in rewrite for future — done here on data
    build.write_ts(tasks)
    DUMP.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
    print("cleaned", len(tasks))


if __name__ == "__main__":
    main()
