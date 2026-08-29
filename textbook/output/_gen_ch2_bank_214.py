#!/usr/bin/env python3
"""Generate textbook/output/_ch2_bank_214.py from scripts/ch2_data s21–s24."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CH2 = ROOT / "scripts" / "ch2_data"
sys.path.insert(0, str(CH2))

from assemble import bind_explanations  # noqa: E402
from explain import assign_profiles, generate_body  # noqa: E402
from emit_tasks import _escape_raw  # noqa: E402
from replacement_bank import replacement_for, normalize_stmt  # noqa: E402
from s21 import TASKS as T21  # noqa: E402
from s22 import TASKS as T22  # noqa: E402
from s23 import TASKS as T23  # noqa: E402
from s24 import TASKS as T24  # noqa: E402

LETTERS = "ABCDE"
OUT = Path(__file__).resolve().parent / "_ch2_bank_214.py"

FORBIDDEN_FRAGMENTS = (
    r"4(2y)",
    r"3yz}{4x}",
    r"4x-2}{x^2-1}",
    r"2y+3x}{x+y}",
    r"(2x^{-1}-1)(2x^{-1}+1)",
)

DEFAULT_CONTEXT = {
    "2.1": "Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?",
    "2.2": "Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?",
    "2.3": "Let $x$ be a positive real number. Which of the following statements is/are correct?",
    "2.4": "Let $x$ be a real number. Which of the following statements is/are correct?",
}


NARRATIVE_REWRITES: dict[str, str] = {
    r"Reading $9y^2-12y+4$ as $(3y-2)^2$ is valid for every real $y$.": (
        r"For every real $y$, $9y^2-12y+4=(3y-2)^2$."
    ),
    r"Working with $q\neq 0$, a slip writes $\dfrac{1}{q^{-3}}=-q^{3}$, reading the minus in the exponent as a change of sign.": (
        r"For $q\neq 0$, it holds that $\dfrac{1}{q^{-3}}=-q^{3}$."
    ),
    r"Working with $a,b\neq 0$, the quotient $a^{5}b^{-3}/(a^{-2}b^{4})$ equals $a^{7}/b^{7}$.": (
        r"For $a,b\neq 0$, $\dfrac{a^{5}b^{-3}}{a^{-2}b^{4}}=\dfrac{a^{7}}{b^{7}}$."
    ),
    r"Working with $x>0$, the expansion of $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}$ equals $x-2+1/x$.": (
        r"For $x>0$, $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}=x-2+\dfrac{1}{x}$."
    ),
}


def _clean_statement(stmt: str) -> str:
    return NARRATIVE_REWRITES.get(stmt.strip(), stmt)


def _is_forbidden(stmt: str) -> bool:
    return any(frag in stmt for frag in FORBIDDEN_FRAGMENTS)


def _fix_truth_mix(task: dict, seen: set[str]) -> dict:
    keys = list(task["answer_key"])
    trues = sum(keys)
    if 1 <= trues <= 4:
        return task
    sub = task["subsection"]
    want = False if trues == 5 else True
    seed = hash(task["title"]) & 0xFFFF
    for attempt in range(40):
        rep = replacement_for(sub, want_truth=want, seed=seed + attempt, avoid=seen)
        if rep is None:
            continue
        stmt, truth = rep
        stmt = normalize_stmt(stmt)
        if stmt in seen:
            continue
        idx = 4
        seen.discard(task["statements"][idx])
        task["statements"][idx] = stmt
        task["answer_key"][idx] = truth
        seen.add(stmt)
        profiles = assign_profiles(task["statements"], sub)
        expls = list(task.get("tactical_explanations") or [""] * 5)
        expls[idx] = generate_body(
            task["statements"][idx],
            truth,
            sub,
            idx,
            profile=profiles[idx],
        )
        task["tactical_explanations"] = expls
        return task
    return task


def _convert_task(raw: dict, seen: set[str]) -> dict:
    task = dict(raw)
    sub = task["subsection"]
    stmts = list(task["statements"])
    keys = list(task["answer_key"])
    expls = list(task.get("tactical_explanations") or [""] * 5)

    for i in range(5):
        cleaned = _clean_statement(stmts[i])
        if cleaned != stmts[i]:
            seen.discard(stmts[i])
            stmts[i] = cleaned
            profiles = assign_profiles(stmts, sub)
            expls[i] = generate_body(stmts[i], keys[i], sub, i, profile=profiles[i])

    for i in range(5):
        if _is_forbidden(stmts[i]):
            want = keys[i]
            rep = replacement_for(sub, want_truth=want, seed=i + hash(task["title"]), avoid=seen)
            if rep:
                stmt, truth = rep
                stmt = normalize_stmt(stmt)
                n = 0
                base = stmt
                while stmt in seen:
                    n += 1
                    stmt = base.rstrip(".") + f" (variant {n})."
                seen.discard(stmts[i])
                stmts[i] = stmt
                keys[i] = truth
                profiles = assign_profiles(stmts, sub)
                expls[i] = generate_body(
                    stmts[i], keys[i], sub, i, profile=profiles[i]
                )

    task["statements"] = stmts
    task["answer_key"] = keys
    profiles = assign_profiles(stmts, sub)
    for i in range(5):
        if not (expls[i] or "").strip():
            expls[i] = generate_body(stmts[i], keys[i], sub, i, profile=profiles[i])
    task["tactical_explanations"] = expls
    for s in stmts:
        seen.add(s)

    task = _fix_truth_mix(task, seen)
    task = bind_explanations(task)

    ctx = task["context"].strip()
    if ctx == "Evaluate each statement. Mark it TRUE or FALSE.":
        ctx = DEFAULT_CONTEXT.get(sub, ctx)

    items: list[tuple[str, bool, str]] = []
    for i in range(5):
        items.append((task["statements"][i], bool(task["answer_key"][i]), task["tactical_explanations"][i]))

    return {
        "subsection": sub,
        "title": task["title"],
        "diff": task["difficulty_level"],
        "overview": task["solution_overview"],
        "context": ctx,
        "items": items,
    }


def _emit_bank(tasks: list[dict]) -> str:
    lines = [
        '"""Chapter 2 elementary algebra exam bank (subsections 2.1–2.4, 136 tasks)."""',
        "",
        "from __future__ import annotations",
        "",
        "BANK_214: list[dict] = [",
    ]
    for t in tasks:
        title = t["title"].replace('"', '\\"')
        lines.append("    {")
        lines.append(f'        "subsection": "{t["subsection"]}",')
        lines.append(f'        "title": "{title}",')
        lines.append(f'        "diff": "{t["diff"]}",')
        lines.append(f'        "overview": {_escape_raw(t["overview"])},')
        lines.append(f'        "context": {_escape_raw(t["context"])},')
        lines.append('        "items": [')
        for stmt, ans, expl in t["items"]:
            lines.append("            (")
            lines.append(f"                {_escape_raw(stmt)},")
            lines.append(f"                {ans},")
            lines.append(f"                {_escape_raw(expl)},")
            lines.append("            ),")
        lines.append("        ],")
        lines.append("    },")
    lines.append("]")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    seen: set[str] = set()
    bank: list[dict] = []
    for chunk in (T21, T22, T23, T24):
        for raw in chunk:
            bank.append(_convert_task(raw, seen))

    OUT.write_text(_emit_bank(bank), encoding="utf-8")
    print(f"Wrote {OUT} ({len(bank)} tasks)")


if __name__ == "__main__":
    main()
