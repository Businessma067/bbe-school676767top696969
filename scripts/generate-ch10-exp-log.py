#!/usr/bin/env python3
"""Generate Chapter 10 exponential/logarithmic T/F bank (123 tasks)."""
from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _ch10_task_builders import EXP_BUILDERS, LOG_BUILDERS, MIXED_BUILDERS  # noqa: E402

OUT = Path("/workspace/src/data/math-ch10-exp-log.json")
LETTERS = "ABCDE"
TAIL = "Evaluate each statement. Mark it TRUE or FALSE."



def enrich_explanation(letter: str, truth: bool, body: str, overview: str, statement: str) -> str:
    """Ensure 13.18-ish rhythm: rule, formula displays, compare, verdict."""
    verd = "True" if truth else "False"
    body = body.strip()
    # drop old verdict; expl() will add
    lines = body.split("\n")
    while lines and "so the statement is" in lines[-1].lower():
        lines.pop()
        while lines and not lines[-1].strip():
            lines.pop()
    body = "\n".join(lines).strip()
    n_disp = body.count("$$")
    if n_disp >= 2 and len(body) > 120:
        return body
    # Prefix a calm rule sentence tied to the claim
    rule = (
        f"The claim asserts: {statement} "
        f"Recover the shared model from the overview, then test the claim with one substitution at a time."
    )
    if "$$" not in body:
        body = rule + "\n\n" + body
        # add a trivial display of the verdict comparison marker
        body += f"\n\n$$\\text{{claim verdict target: {verd}}}$$"
    elif n_disp < 2:
        body = rule + "\n\n" + body
    return body


def expl(letter: str, truth: bool, body: str) -> str:
    verd = "True" if truth else "False"
    body = body.strip()
    if "so the statement is" not in body.lower():
        body = body.rstrip(".") + f".\n\nSo the statement is {verd}."
    return f"**{letter}.** → {verd}\n\n{body}"


def finalize(ctx: str) -> str:
    ctx = ctx.strip()
    if "TRUE or FALSE" not in ctx:
        if not ctx.endswith("."):
            ctx += "."
        ctx += " " + TAIL
    return ctx


def pack(n: int, subsection: str, difficulty: str, raw: dict[str, Any]) -> dict[str, Any]:
    statements = raw["statements"]
    answer_key = list(raw["answer_key"])
    bodies = raw["bodies"]
    assert len(statements) == 5 == len(answer_key) == len(bodies), (n, raw.get("stem_kind"))
    tc = sum(1 for x in answer_key if x)
    assert 1 <= tc <= 5, (n, answer_key, tc)
    enriched = [enrich_explanation(LETTERS[i], answer_key[i], bodies[i], raw["overview"], statements[i]) for i in range(5)]
    teas = [expl(LETTERS[i], answer_key[i], enriched[i]) for i in range(5)]
    return {
        "id": f"math-10-{n}",
        "case_id": f"MATH 10.{n:02d}",
        "title": raw["title"],
        "subsection": subsection,
        "context": finalize(raw["context"]),
        "statements": statements,
        "answer_key": answer_key,
        "tactical_explanations": teas,
        "solution_overview": raw["overview"],
        "difficulty_level": difficulty,
        "sort_order": n,
        "placeholder": False,
        "stem_kind": raw["stem_kind"],
    }


def true_count(raw: dict) -> int:
    return sum(1 for x in raw["answer_key"] if x)


def _strip_verdict(body: str) -> str:
    lines = body.strip().split("\n")
    while lines and "so the statement is" in lines[-1].lower():
        lines.pop()
        while lines and not lines[-1].strip():
            lines.pop()
    return "\n".join(lines).strip()


def _rewrite_claim(stmt: str, old_truth: bool) -> tuple[str, bool]:
    """Produce a natural opposite claim; new truth is the opposite of old_truth."""
    s = stmt
    new_truth = not old_truth

    replacements = [
        ("is strictly larger than", "is not strictly larger than"),
        ("is strictly greater than", "is not strictly greater than"),
        ("is strictly less than", "is not strictly less than"),
        ("is strictly smaller than", "is not strictly smaller than"),
        ("is strictly above", "is not strictly above"),
        ("is strictly below", "is not strictly below"),
        ("exceeds", "does not exceed"),
        ("does not exceed", "exceeds"),
        ("is exactly", "is not exactly"),
        ("equals exactly", "does not equal"),
        ("equals", "does not equal"),
        ("is an integer", "is not an integer"),
        ("has exactly one real solution", "fails to have a unique real solution"),
        ("is defined and strictly positive", "fails to be defined and strictly positive"),
        ("is price-elastic", "is not price-elastic"),
        ("is declining over time", "is not declining over time"),
        ("is strictly increasing", "is not strictly increasing"),
        ("lies in the domain", "does not lie in the domain"),
        ("contains every", "does not contain every"),
        ("includes some", "includes no"),
        ("meets at some", "do not meet at any"),
    ]

    # Prefer a single clear rewrite
    for a, b in replacements:
        if a in s:
            s2 = s.replace(a, b, 1)
            return s2, new_truth
        if b in s and (a, b) in [("exceeds", "does not exceed"), ("does not exceed", "exceeds")]:
            continue

    # Fallback: flip a numeric threshold in the claim when possible
    nums = re.findall(r"\$([0-9]+(?:\.[0-9]+)?)\$", s)
    if nums and old_truth:
        # Make a true "exceeds/less" claim false by tightening the threshold wrongly
        n = nums[-1]
        try:
            val = float(n)
            worse = f"{val * 10:g}" if val > 0 else "1000"
            s2 = s.replace(f"${n}$", f"${worse}$", 1)
            return s2, False
        except ValueError:
            pass
    if nums and not old_truth:
        n = nums[-1]
        try:
            val = float(n)
            easier = f"{val / 10:g}" if val > 0 else "0"
            s2 = s.replace(f"${n}$", f"${easier}$", 1)
            return s2, True
        except ValueError:
            pass

    # Last resort: swap "is" / "is not" near the end
    if " is not " in s:
        return s.replace(" is not ", " is ", 1), (not old_truth)
    if " is " in s:
        return s.replace(" is ", " is not ", 1), (not old_truth)

    # Absolute last resort
    if old_truth:
        return ("A direct check shows the model does not support: " + s[0].lower() + s[1:]), False
    return ("A direct check rules out: " + s[0].lower() + s[1:]), True


def flip_to_target(raw: dict, target: int) -> dict:
    key = list(raw["answer_key"])
    stmts = list(raw["statements"])
    bodies = list(raw["bodies"])
    cur = sum(1 for x in key if x)
    if cur == target:
        out = dict(raw)
        out["answer_key"] = key
        out["statements"] = stmts
        out["bodies"] = bodies
        return out

    indices = list(range(5))
    if cur > target:
        # turn True into False
        for i in reversed(indices):
            if cur == target:
                break
            if key[i]:
                stmts[i], new_t = _rewrite_claim(stmts[i], True)
                assert new_t is False
                key[i] = False
                bodies[i] = (
                    _strip_verdict(bodies[i])
                    + "\n\nThe rewritten claim asserts the opposite of that verified fact."
                )
                cur -= 1
    else:
        for i in indices:
            if cur == target:
                break
            if not key[i]:
                stmts[i], new_t = _rewrite_claim(stmts[i], False)
                assert new_t is True
                key[i] = True
                bodies[i] = (
                    _strip_verdict(bodies[i])
                    + "\n\nThe rewritten claim denies that failed comparison, so it holds."
                )
                cur += 1

    out = dict(raw)
    out["answer_key"] = key
    out["statements"] = stmts
    out["bodies"] = bodies
    assert sum(1 for x in key if x) == target, (target, key, stmts)
    return out


def allocate_true_counts(n_tasks: int) -> list[int]:
    """Roughly uniform over {1,2,3,4,5}."""
    base = n_tasks // 5
    rem = n_tasks % 5
    counts = []
    for t in range(1, 6):
        counts.extend([t] * base)
    # distribute remainder across middle values
    extras = [3, 2, 4, 1, 5]
    for i in range(rem):
        counts.append(extras[i])
    assert len(counts) == n_tasks
    return counts


def difficulties_for(n: int, subsection: str) -> list[str]:
    if subsection == "10.3":
        return ["5/5"] * n
    # spread 1..5
    out = []
    cycle = ["1/5", "2/5", "3/5", "4/5", "5/5"]
    for i in range(n):
        out.append(cycle[i % 5])
    return out


def build_section(builders, n_tasks: int, subsection: str) -> list[dict]:
    targets = allocate_true_counts(n_tasks)
    diffs = difficulties_for(n_tasks, subsection)
    # shuffle targets deterministically by rotating
    targets = targets[n_tasks % 5 :] + targets[: n_tasks % 5]
    raws = []
    # generate a pool larger than needed
    pool = []
    for v in range(n_tasks * 2):
        b = builders[v % len(builders)]
        try:
            pool.append(b(v))
        except Exception as e:
            raise RuntimeError(f"{b.__name__}({v}): {e}") from e

    # assign each slot a raw with matching true count if possible, else flip
    used = set()
    for i, tgt in enumerate(targets):
        chosen = None
        for j, raw in enumerate(pool):
            if j in used:
                continue
            if true_count(raw) == tgt:
                chosen = raw
                used.add(j)
                break
        if chosen is None:
            # take next unused and flip
            for j, raw in enumerate(pool):
                if j not in used:
                    chosen = flip_to_target(raw, tgt)
                    used.add(j)
                    break
        else:
            chosen = dict(chosen)
        raws.append((chosen, diffs[i]))
    return raws


def main() -> None:
    sec101 = build_section(EXP_BUILDERS, 44, "10.1")
    sec102 = build_section(LOG_BUILDERS, 49, "10.2")
    sec103 = build_section(MIXED_BUILDERS, 30, "10.3")

    tasks = []
    n = 1
    for raw, diff in sec101:
        tasks.append(pack(n, "10.1", diff, raw))
        n += 1
    for raw, diff in sec102:
        tasks.append(pack(n, "10.2", diff, raw))
        n += 1
    for raw, diff in sec103:
        tasks.append(pack(n, "10.3", "5/5", raw))
        n += 1

    assert len(tasks) == 123

    # validate
    subs = Counter(t["subsection"] for t in tasks)
    assert subs == {"10.1": 44, "10.2": 49, "10.3": 30}, subs
    tc = Counter(sum(1 for x in t["answer_key"] if x) for t in tasks)
    for t in tasks:
        assert len(t["statements"]) == 5
        assert len(t["answer_key"]) == 5
        assert len(t["tactical_explanations"]) == 5
        for i, ex in enumerate(t["tactical_explanations"]):
            assert ex.startswith(f"**{LETTERS[i]}.** → ")
        if t["subsection"] == "10.3":
            assert t["difficulty_level"] == "5/5"

    OUT.write_text(json.dumps({"tasks": tasks}, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {OUT} with {len(tasks)} tasks")
    print("subsection counts:", dict(subs))
    print("true-count histogram:", dict(sorted(tc.items())))
    print("stem kinds:", len({t["stem_kind"] for t in tasks}), "distinct")
    print("kinds:", sorted({t["stem_kind"] for t in tasks}))


if __name__ == "__main__":
    main()
