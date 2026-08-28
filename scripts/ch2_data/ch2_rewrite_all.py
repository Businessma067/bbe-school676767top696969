#!/usr/bin/env python3
"""Full Chapter 2 rewrite: exam statements, easy prepend, regenerate explanations."""

from __future__ import annotations

import re
import sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

from easy_bank import easy_tasks_for
from emit_tasks import emit_module
from exam_statement import (
    has_narrative,
    is_numeric_plug,
    is_obvious,
    is_verbose_verbal,
    to_exam_statement,
)
from replacement_bank import normalize_stmt, replacement_for

# Load current tasks (with old bodies — we discard bodies).
from s21 import TASKS as T21  # noqa: E402
from s22 import TASKS as T22  # noqa: E402
from s23 import TASKS as T23  # noqa: E402
from s24 import TASKS as T24  # noqa: E402
from s25 import TASKS as T25  # noqa: E402

SUB_FILES = {
    "2.1": ("s21.py", T21),
    "2.2": ("s22.py", T22),
    "2.3": ("s23.py", T23),
    "2.4": ("s24.py", T24),
    "2.5": ("s25.py", T25),
}

_NARRATIVE_TITLE = re.compile(
    r"\b(clerk|student|marker|leftovers|records|reports|near-miss|forgets|ticks)\b",
    re.I,
)


def _opening(s: str) -> str:
    return " ".join(s.split()[:4]).lower()


def _latex_keys(s: str) -> list[str]:
    return [
        re.sub(r"\s+", "", frag)[:28]
        for frag in re.findall(r"\$([^$]{12,})\$", s)
    ]


def _clean_title(title: str, subsection: str, index: int) -> str:
    t = title.strip()
    if t.startswith("Warm-up:"):
        return t
    if _NARRATIVE_TITLE.search(t):
        topics = {
            "2.1": "Binomial identities",
            "2.2": "Rational expressions",
            "2.3": "Indices and radicals",
            "2.4": "Absolute value",
            "2.5": "Mixed algebra",
        }
        return f"{topics.get(subsection, 'Algebra')} — set {index + 1}"
    return t


def _replace_statement(
    sub: str,
    *,
    want_truth: bool,
    seed: int,
    seen: set[str],
    local: set[str],
) -> tuple[str, bool]:
    avoid = seen | local
    rep = replacement_for(sub, want_truth=want_truth, seed=seed, avoid=avoid)
    if rep is None:
        raise RuntimeError(f"no replacement for {sub} truth={want_truth}")
    s, truth = rep
    s = normalize_stmt(s)
    n = 0
    base = s
    while s in seen or s in local:
        n += 1
        s = base.rstrip(".") + f" (variant {n})."
    return s, truth


def _fix_task_variety(task: dict, *, sub: str, gi: int, seen: set[str]) -> dict:
    stmts = list(task["statements"])
    keys = list(task["answer_key"])

    for _round in range(12):
        firsts = [_opening(s) for s in stmts]
        if len(set(firsts)) >= 4:
            break
        worst = Counter(firsts).most_common(1)[0][0]
        for ii in range(4, -1, -1):
            if _opening(stmts[ii]) != worst:
                continue
            old = stmts[ii]
            seen.discard(old)
            stmts[ii], keys[ii] = _replace_statement(
                sub,
                want_truth=bool(keys[ii]),
                seed=gi * 5 + ii + _round * 17,
                seen=seen,
                local=set(stmts[:ii] + stmts[ii + 1 :]),
            )
            seen.add(stmts[ii])
            break

    for _round in range(12):
        hits: Counter[str] = Counter()
        for s in stmts:
            for k in _latex_keys(s):
                hits[k] += 1
        bad = {k for k, n in hits.items() if n >= 3}
        if not bad:
            break
        for ii in range(4, -1, -1):
            if not any(k in bad for k in _latex_keys(stmts[ii])):
                continue
            old = stmts[ii]
            seen.discard(old)
            stmts[ii], keys[ii] = _replace_statement(
                sub,
                want_truth=bool(keys[ii]),
                seed=gi * 5 + ii + 100 + _round * 23,
                seen=seen,
                local=set(stmts[:ii] + stmts[ii + 1 :]),
            )
            seen.add(stmts[ii])
            break

    return {**task, "statements": stmts, "answer_key": keys}


def _rewrite_task(task: dict, *, gi: int, seen: set[str], sub: str) -> dict:
    new_stmts: list[str] = []
    keys = list(task["answer_key"])
    local: set[str] = set()
    for ii, (stmt, truth) in enumerate(zip(task["statements"], keys)):
        s = to_exam_statement(stmt)
        if (
            is_obvious(s)
            or is_numeric_plug(s)
            or has_narrative(s)
            or is_verbose_verbal(s)
        ):
            s, truth = _replace_statement(
                sub,
                want_truth=bool(truth),
                seed=gi * 5 + ii,
                seen=seen,
                local=local,
            )
            keys[ii] = truth
        else:
            s = normalize_stmt(s)
            n = 0
            base = s
            while s in seen or s in local:
                n += 1
                s = base.rstrip(".") + f" (variant {n})."
        seen.add(s)
        local.add(s)
        new_stmts.append(s)

    out = {
        **task,
        "title": _clean_title(task["title"], sub, gi),
        "statements": new_stmts,
        "answer_key": keys,
        "tactical_explanations": [],
    }
    return _fix_task_variety(out, sub=sub, gi=gi, seen=seen)


def _finalize_task(task: dict, *, keep_authored_bodies: bool = False) -> dict:
    """Run through common.task to attach generated explanations."""
    from common import task as build_task

    items: list[tuple[str, bool] | tuple[str, bool, str]] = []
    expls = task.get("tactical_explanations") or []
    for i, (s, k) in enumerate(zip(task["statements"], task["answer_key"])):
        if (
            keep_authored_bodies
            and i < len(expls)
            and expls[i]
            and expls[i].strip()
        ):
            items.append((s, k, expls[i]))
        else:
            items.append((s, k))
    return build_task(
        title=task["title"],
        subsection=task["subsection"],
        difficulty=task["difficulty_level"],
        context=task.get("context") or "Evaluate each statement. Mark it TRUE or FALSE.",
        items=items,
        overview=task["solution_overview"],
    )


def _main_tasks_only(tasks: list[dict]) -> list[dict]:
    """Keep the 30 original 3/5+ tasks; drop any prepended warm-ups."""
    out = [t for t in tasks if not t["title"].startswith("Warm-up:")]
    return out[:30]


def main() -> None:
    global_seen: set[str] = set()

    for sub, (fname, old) in SUB_FILES.items():
        main_old = _main_tasks_only(old)
        # Reserve easy-task statements first so main content cannot collide.
        easy_raw = easy_tasks_for(sub)
        for t in easy_raw:
            for s in t["statements"]:
                global_seen.add(normalize_stmt(s))

        rewritten = []
        for gi, t in enumerate(main_old):
            rewritten.append(_rewrite_task(t, gi=gi, seen=global_seen, sub=sub))

        easy_built = easy_tasks_for(sub)
        main_built = [_finalize_task(t) for t in rewritten]
        tasks = easy_built + main_built
        text = emit_module(subsection=sub, tasks=tasks)
        (HERE / fname).write_text(text + "\n")
        print(f"wrote {fname}: {len(tasks)} tasks ({len(easy_raw)} easy + {len(main_old)} existing)")

    import subprocess

    out = subprocess.run(
        [sys.executable, "-c", """
import importlib, sys
sys.path.insert(0, ".")
from exam_statement import has_narrative, is_numeric_plug, is_verbose_verbal
for m in ["s21","s22","s23","s24","s25"]:
    importlib.import_module(m)
from s21 import TASKS as T21
from s22 import TASKS as T22
from s23 import TASKS as T23
from s24 import TASKS as T24
from s25 import TASKS as T25
all_t=T21+T22+T23+T24+T25
narr=sum(1 for t in all_t for s in t["statements"] if has_narrative(s))
num=sum(1 for t in all_t for s in t["statements"] if is_numeric_plug(s))
verb=sum(1 for t in all_t for s in t["statements"] if is_verbose_verbal(s))
empty=sum(1 for t in all_t for e in t["tactical_explanations"] if not e.strip())
stmts=[s for t in all_t for s in t["statements"]]
dup=len(stmts)-len(set(stmts))
print(f"narrative={narr} numeric={num} verbose={verb} empty={empty} dup={dup} tasks={len(all_t)}")
"""],
        cwd=str(HERE),
        capture_output=True,
        text=True,
    )
    print(out.stdout.strip())
    if out.returncode != 0:
        print(out.stderr)
        sys.exit(out.returncode)


if __name__ == "__main__":
    main()
