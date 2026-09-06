#!/usr/bin/env python3
"""Assemble Chapter 10 diverse rewrite bank (10.1→50, 10.2→55, 10.3→32 after numeric pass).

Writes src/data/math-ch10-exp-log.json from the three diverse builder modules.
"""
from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from _ch10_diverse_exp import EXP_COUNT, build_exp_tasks  # noqa: E402
from _ch10_diverse_log import LOG_COUNT, build_log_tasks  # noqa: E402
from _ch10_diverse_mixed import MIXED_COUNT, build_mixed_tasks  # noqa: E402
from ch10_numeric_abcd_pass import apply_pass as apply_numeric_abcd_pass  # noqa: E402

OUT = ROOT / "src/data/math-ch10-exp-log.json"


def difficulty(section: str, i: int) -> str:
    if section == "10.3":
        return "5/5"
    return f"{(i % 5) + 1}/5"


_OVERESC = re.compile(r"\\\\([A-Za-z]+)")


def fix_overescaped_latex(s: str) -> str:
    """Collapse rf-string over-escapes like \\\\approx → \\approx."""
    prev = None
    while prev != s:
        prev = s
        s = _OVERESC.sub(r"\\\1", s)
    return s


def normalize_displays(text: str) -> str:
    text = fix_overescaped_latex(text)

    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)


def pack_task(
    raw: dict, *, subsection: str, local_index: int, sort_order: int, diff: str
) -> dict:
    case_id = f"MATH {subsection}.{local_index}"
    tid = f"ch10-{subsection.replace('.', '')}-{local_index:03d}"
    out = {
        "id": tid,
        "case_id": case_id,
        "title": raw["title"],
        "subsection": subsection,
        "context": normalize_displays(raw["context"]),
        "statements": [normalize_displays(s) for s in raw["statements"]],
        "answer_key": list(raw["answer_key"]),
        "tactical_explanations": [
            normalize_displays(e) for e in raw["tactical_explanations"]
        ],
        "solution_overview": normalize_displays(raw["solution_overview"]),
        "difficulty_level": diff,
        "sort_order": sort_order,
        "placeholder": False,
        "stem_kind": raw["stem_kind"],
    }
    if raw.get("figure"):
        out["figure"] = raw["figure"]
    if raw.get("tables_markdown"):
        out["tables_markdown"] = normalize_displays(raw["tables_markdown"])
    return out


def audit(tasks: list[dict]) -> None:
    assert len(tasks) == EXP_COUNT + LOG_COUNT + MIXED_COUNT
    by_sub = Counter(t["subsection"] for t in tasks)
    assert by_sub["10.1"] == 44 and by_sub["10.2"] == 49 and by_sub["10.3"] == 30
    for t in tasks:
        assert len(t["statements"]) == 5
        assert len(t["answer_key"]) == 5
        assert len(t["tactical_explanations"]) == 5
        blob = json.dumps(
            {
                "c": t["context"],
                "s": t["statements"],
                "o": t["solution_overview"],
                "e": t["tactical_explanations"],
            },
            ensure_ascii=False,
        )
        # Reject over-escaped relation tokens that stack vertically in KaTeX
        assert r"\\\\neq" not in blob
        assert r"\\\\to" not in blob
        assert r"\\\\infty" not in blob
        assert r"\\\\ell" not in blob
        for i, e in enumerate(t["tactical_explanations"]):
            let = "ABCDE"[i]
            verd = "True" if t["answer_key"][i] else "False"
            assert e.startswith(f"**{let}.** → {verd}"), (t["case_id"], let, e[:60])
            assert f"So the statement is {verd}." in e
    figs = sum(1 for t in tasks if t.get("figure"))
    tabs = sum(1 for t in tasks if t.get("tables_markdown"))
    print(
        "OK",
        len(tasks),
        "figs",
        figs,
        "tabs",
        tabs,
        "stem",
        dict(Counter(t["stem_kind"] for t in tasks)),
        "diff",
        dict(Counter(t["difficulty_level"] for t in tasks)),
    )


def main() -> None:
    tasks: list[dict] = []
    sort = 1
    for i, raw in enumerate(build_exp_tasks(), start=1):
        tasks.append(
            pack_task(
                raw,
                subsection="10.1",
                local_index=i,
                sort_order=sort,
                diff=difficulty("10.1", i - 1),
            )
        )
        sort += 1
    for i, raw in enumerate(build_log_tasks(), start=1):
        tasks.append(
            pack_task(
                raw,
                subsection="10.2",
                local_index=i,
                sort_order=sort,
                diff=difficulty("10.2", i - 1),
            )
        )
        sort += 1
    for i, raw in enumerate(build_mixed_tasks(), start=1):
        tasks.append(
            pack_task(
                raw,
                subsection="10.3",
                local_index=i,
                sort_order=sort,
                diff=difficulty("10.3", i - 1),
            )
        )
        sort += 1

    audit(tasks)
    # Numeric/a-b-c-d pass: simplify exotic letters and inject concrete calibrations.
    tasks = apply_numeric_abcd_pass(tasks, add_extras=True)
    payload = {
        "chapter": 10,
        "title": "Exponential and logarithmic functions",
        "tasks": tasks,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("wrote", OUT, "bytes", OUT.stat().st_size)


if __name__ == "__main__":
    main()
