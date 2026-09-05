#!/usr/bin/env python3
"""Assemble Chapter 10 bank from _ch10_task_builders.py (quality builders).

Counts: 10.1=44, 10.2=49, 10.3=30. True-counts 1..5 roughly uniform.
Mixed difficulty always 5/5. Explanations use Ch13 letter headers.
"""
from __future__ import annotations

import json
import random
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts._ch10_task_builders import EXP_BUILDERS, LOG_BUILDERS, MIXED_BUILDERS

OUT = ROOT / "src/data/math-ch10-exp-log.json"
LETTERS = "ABCDE"


def expl(letter: str, truth: bool, body: str) -> str:
    verd = "True" if truth else "False"
    body = body.strip()
    if "so the statement is" not in body.lower():
        body = body.rstrip(".") + f".\n\nSo the statement is {verd}."
    return f"**{letter}.** → {verd}\n\n{body}"


def difficulty(section: str, i: int) -> str:
    if section == "10.3":
        return "5/5"
    return f"{(i % 5) + 1}/5"


def true_targets(n: int) -> list[int]:
    base, rem = divmod(n, 5)
    out: list[int] = []
    for k in range(1, 6):
        out.extend([k] * (base + (1 if k <= rem else 0)))
    # round-robin order so adjacent tasks vary
    buckets = {k: [k] * out.count(k) for k in range(1, 6)}
    ordered: list[int] = []
    for i in range(n):
        for off in range(5):
            k = ((i + off) % 5) + 1
            if buckets[k]:
                ordered.append(buckets[k].pop())
                break
    return ordered


_FLIP_PAIRS = [
    (r"strictly less than", "strictly greater than"),
    (r"strictly greater than", "strictly less than"),
    (r"less than", "greater than"),
    (r"greater than", "less than"),
    (r"exceeds", "is at most"),
    (r"is at most", "exceeds"),
    (r"more than", "at most"),
    (r"at most", "more than"),
    (r"smaller than", "larger than"),
    (r"larger than", "smaller than"),
]


def try_flip_claim(statement: str) -> str | None:
    for a, b in _FLIP_PAIRS:
        if re.search(rf"\b{a}\b", statement, flags=re.I):
            return re.sub(rf"\b{a}\b", b, statement, count=1, flags=re.I)
    return None


def force_flip_statement(statement: str) -> str:
    """Logically negate a claim so the statement's truth value flips."""
    soft = try_flip_claim(statement)
    if soft is not None:
        return soft
    return f"The following claim is incorrect: {statement}"


def retarget(task: dict[str, Any], want: int) -> dict[str, Any] | None:
    keys = list(task["answer_key"])
    stmts = list(task["statements"])
    bodies = list(task["bodies"])
    have = sum(1 for k in keys if k)
    if have == want:
        return task
    order = list(range(5))
    random.Random(want * 17 + have).shuffle(order)
    if have > want:
        for i in order:
            if have == want:
                break
            if keys[i]:
                stmts[i] = force_flip_statement(stmts[i])
                keys[i] = False
                have -= 1
    else:
        for i in order:
            if have == want:
                break
            if not keys[i]:
                stmts[i] = force_flip_statement(stmts[i])
                keys[i] = True
                have += 1
    if have != want:
        return None
    task = dict(task)
    task["statements"] = stmts
    task["answer_key"] = keys
    task["bodies"] = bodies
    return task


def pack(n: int, section: str, raw: dict[str, Any], diff: str) -> dict[str, Any]:
    teas = [expl(LETTERS[i], raw["answer_key"][i], raw["bodies"][i]) for i in range(5)]
    ctx = raw["context"].strip()
    if "Select true or false" not in ctx:
        if not ctx.endswith("."):
            ctx += "."
        ctx += " Which of the following statements is/are correct? Select true or false:"
    return {
        "id": f"math-10-{n}",
        "case_id": f"MATH 10.{n:02d}",
        "title": raw["title"],
        "subsection": section,
        "context": ctx,
        "statements": raw["statements"],
        "answer_key": raw["answer_key"],
        "tactical_explanations": teas,
        "solution_overview": raw["overview"].strip(),
        "difficulty_level": diff,
        "sort_order": n,
        "placeholder": False,
        "stem_kind": raw.get("stem_kind", "general"),
    }


def harvest(builders, need: int) -> list[dict[str, Any]]:
    """Generate many variants then pick `need` with balanced true counts."""
    pool: list[dict[str, Any]] = []
    for v in range(0, need * 12):
        fn = builders[v % len(builders)]
        try:
            raw = fn(v)
        except Exception:
            continue
        if not (1 <= sum(raw["answer_key"]) <= 5):
            continue
        # tag with variant so uniqueness is per (builder,v)
        raw = dict(raw)
        raw["_vid"] = v
        raw["_fn"] = fn.__name__
        pool.append(raw)

    targets = true_targets(need)
    chosen: list[dict[str, Any]] = []
    used: set[tuple[str, int]] = set()
    cursor = 0
    for want in targets:
        picked = None
        # scan pool cyclically
        for _ in range(len(pool)):
            cand = pool[cursor % len(pool)]
            cursor += 1
            uid = (cand["_fn"], cand["_vid"])
            if uid in used:
                continue
            adj = retarget(dict(cand), want)
            if adj is None:
                continue
            picked = adj
            used.add(uid)
            break
        if picked is None:
            raise RuntimeError(
                f"Could not fill true-count={want} (have {len(chosen)}/{need}; pool={len(pool)})"
            )
        chosen.append(picked)
    return chosen


def main() -> None:
    random.seed(10)
    exp = harvest(EXP_BUILDERS, 44)
    log = harvest(LOG_BUILDERS, 49)
    mix = harvest(MIXED_BUILDERS, 30)

    tasks: list[dict[str, Any]] = []
    n = 1
    for i, raw in enumerate(exp):
        tasks.append(pack(n, "10.1", raw, difficulty("10.1", i)))
        n += 1
    for i, raw in enumerate(log):
        tasks.append(pack(n, "10.2", raw, difficulty("10.2", i)))
        n += 1
    for i, raw in enumerate(mix):
        tasks.append(pack(n, "10.3", raw, difficulty("10.3", i)))
        n += 1

    assert len(tasks) == 123
    # validate
    neg = sum(s.startswith("It is not the case") for t in tasks for s in t["statements"])
    true_hist = Counter(sum(t["answer_key"]) for t in tasks)
    stem_hist = Counter(t["stem_kind"] for t in tasks)
    for t in tasks:
        assert len(t["statements"]) == 5
        assert all(t["tactical_explanations"][i].startswith(f"**{LETTERS[i]}.** → ") for i in range(5))
        if t["subsection"] == "10.3":
            assert t["difficulty_level"] == "5/5"
        assert 1 <= sum(t["answer_key"]) <= 5

    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")
    print("counts", Counter(t["subsection"] for t in tasks))
    print("true_hist", dict(sorted(true_hist.items())))
    print("stems", len(stem_hist), dict(stem_hist))
    print("negated_legacy", neg)
    print("diff", Counter(t["difficulty_level"] for t in tasks))


if __name__ == "__main__":
    main()
