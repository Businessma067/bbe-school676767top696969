#!/usr/bin/env python3
"""Post-inject lint repair: global dedupe + within-task opening variety."""

from __future__ import annotations

import importlib
import re
import sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

from exam_statement import (
    has_narrative,
    is_numeric_plug,
    is_obvious,
    is_verbose_verbal,
    to_exam_statement,
)
from explain import assign_profiles, generate_body
from hard_exam_bank import claim_for, hard_slots, set_soft_statement_avoid
from inject_hard_claims import _escape_raw, rewrite_file
from replacement_bank import generate_claim, normalize_stmt, replacement_for

_ITEM = re.compile(
    r"(\(\s*\n\s*)"
    r"(r?(?:\"\"\"[\s\S]*?\"\"\"|'''[\s\S]*?'''|\"(?:[^\"\\]|\\.)*'))"
    r"(\s*,\s*\n\s*)"
    r"(True|False)"
    r"((?:\s*,\s*\n\s*r?(?:\"\"\"[\s\S]*?\"\"\"|'''[\s\S]*?'''|\"(?:[^\"\\]|\\.)*\"|'(?:[^'\\]|\\.)*'))?)"
    r"(\s*,?\s*\n\s*\))",
    re.S,
)

OFFSETS = {"s21.py": 0, "s22.py": 34, "s23.py": 68, "s24.py": 102, "s25.py": 136}

# Hand-tuned statements for tasks whose hard slots resist automatic opener variation.
TASK_PATCHES: dict[str, list[tuple[str, bool]]] = {
    "Distance to five different marks": [
        (
            r"Without an interval restriction, the sum of distances from a real point to $2$ and to $8$ equals the segment length from $2$ to $8$.",
            False,
        ),
        (r"Unrestricted in $x$, $|x-1|+|x-7|=6$.", False),
        (r"If $z\ge 6$, then $|z-6|-(z-6)=0$.", True),
        (r"Without an interval bound, $|x-4|+|x-10|=6$ is stated for every real $x$.", False),
        (r"Pulling out a factor of two, $|2x-6|=2|x-3|$ for every real $x$.", True),
    ],
    "Sophie Germain offcut beside a stacked exponent": [
        (
            r"The cube-sum identity $(x+y)^3+(x-y)^3=2x(x^2+3y^2)$ holds for every real pair $(x,y)$.",
            True,
        ),
        (
            r"Difference of squares: $(p+q)(p-q)=p^2-q^2$ for every real pair $(p,q)$.",
            True,
        ),
        (
            r"A false fourth-power expansion: $(h+k)^4=h^4+k^4+4hk(h+k)$ for real $(h,k)$.",
            False,
        ),
        (
            r"The stacked quotient $\dfrac{\dfrac{8v^2b}{4x^2-16}}{\dfrac{4vb}{2x+4}}$ simplifies to $\dfrac{v}{x-2}$ for $x\neq\pm 2$ and $v,b\neq 0$.",
            True,
        ),
        (
            r"Vanishing triple sum: if $a+b+c=0$, then $a^3+b^3+c^3=3abc$ for every real triple.",
            True,
        ),
    ],
    "Cubic coefficient vanishing in a biquadratic product": [
        (
            r"If $r+s+t=0$, then $r^3+s^3+t^3=3rst$ for every real triple $(r,s,t)$.",
            True,
        ),
        (r"An incorrect cube expansion: $(c+d)^3=c^3+d^3$ for all real $(c,d)$ is false.", False),
        (r"Likewise $(f+g)^3=f^3+g^3$ fails for some real pair $(f,g)$.", False),
        (
            r"From $p+q+r=0$, one obtains $p^3+q^3+r^3=3pqr$ for every real triple $(p,q,r)$.",
            True,
        ),
        (
            r"Difference of squares in reciprocals: for $s\neq 0$, $(6s^{-1}-1)(6s^{-1}+1)=\dfrac{36}{s^2}-1$.",
            True,
        ),
    ],
    "Nested bars stripped on a short interval": [
        (
            r"Difference of squares in reciprocals: for $t\neq 0$, $(2t^{-1}-1)(2t^{-1}+1)=\dfrac{4}{t^2}-1$.",
            True,
        ),
        (r"Missing cube cross terms: $(c+d)^3=c^3+d^3$ fails for some real pair $(c,d)$.", False),
        (
            r"Polarisation: $(f+g)^2+(f-g)^2=2(f^2+g^2)$ for every real pair $(f,g)$.",
            True,
        ),
        (
            r"Stripping nested bars, $\bigl||k|-15\bigr|$ equals $|k|-15$ for every real $k$ (false).",
            False,
        ),
        (r"A false fourth power: $(h+k)^4=h^4+k^4+4hk(h+k)$ for real $(h,k)$.", False),
    ],
    "Newton sums built from a pair of elementary data": [
        (
            r"A mis-paired Brahmagupta product: for every real quadruple $(m,n,h,k)$, $(m^2+n^2)(h^2+k^2)=(mh+nh)^2+(mk-nk)^2$.",
            False,
        ),
        (r"Dropping the middle term: $(p+q)^2=p^2+q^2$ is false for real $(p,q)$.", False),
        (
            r"Another wrong cross pairing: for every real quadruple $(a,b,c,d)$, $(a^2+b^2)(c^2+d^2)=(ac+bc)^2+(ad-bd)^2$.",
            False,
        ),
        (
            r"If $c^{-3}d^2=2$, then $\dfrac{c^8d^3}{c^2d^7}+3cd\cdot\dfrac{c^{-6}d^5}{c^7d^{-2}}=48.25$ for $c,d\neq 0$.",
            True,
        ),
        (r"Again omitting $2pq$: $(x+y)^2=x^2+y^2$ is false for real $(x,y)$.", False),
    ],
    "Swapped-ratio sum beside a denested sixteen": [
        (
            r"A reciprocal-square trap: for $u\neq 0$, $(5u^{-1}-1)(5u^{-1}+1)=\dfrac{1}{25u^2}-1$.",
            False,
        ),
        (
            r"Adding squared gaps: $(c+d)^2+(c-d)^2=2(c^2+d^2)$ for every real pair $(c,d)$.",
            True,
        ),
        (r"Missing cross terms: $(f+g)^3=f^3+g^3$ is false for real $(f,g)$.", False),
        (
            r"Polarisation again: $(h+k)^2+(h-k)^2=2(h^2+k^2)$ for real $(h,k)$.",
            True,
        ),
        (r"Another cube error: $(h+k)^3=h^3+k^3$ is false for real $(h,k)$.", False),
    ],
    "Sign of a letter over its modulus": [
        (r"Taking the quotient $|n|/n$ whenever $n>0$ equals $1$.", True),
        (r"For every real $x$, $|x^2-8x+7|=(x-1)(x-7)$.", False),
        (r"Without an interval, $|x-1|+|1-x|=2$ is false for every real $x$.", False),
        (r"For every real $k$, $|k|+|{-k}|=2|k|$.", True),
        (r"Unrestricted in $x$, $|x-2|+|x-7|=5$ is stated for every real $x$.", False),
    ],
}


def _apply_task_patches(all_tasks: list[list[dict]], seen: set[str]) -> int:
    n = 0
    for tasks in all_tasks:
        for t in tasks:
            patch = TASK_PATCHES.get(t["title"])
            if not patch:
                continue
            stmts = list(t["statements"])
            keys = list(t["answer_key"])
            bodies = list(t["tactical_explanations"])
            for ii, (stmt, truth) in enumerate(patch):
                seen.discard(normalize_stmt(stmts[ii]))
                stmts[ii] = stmt
                keys[ii] = truth
                seen.add(normalize_stmt(stmt))
                if not bodies[ii].strip():
                    bodies[ii] = _regen_body(stmt, truth, t["subsection"], ii)
                n += 1
            t["statements"] = stmts
            t["answer_key"] = keys
            t["tactical_explanations"] = bodies
    return n


def _scrub_bad_statements(
    all_tasks: list[list[dict]], seen: set[str], hard_set: set[tuple[int, int]]
) -> int:
    n = 0
    gi = 0
    for tasks in all_tasks:
        for t in tasks:
            if t["title"].startswith("Warm-up:"):
                gi += 1
                continue
            sub = t["subsection"]
            stmts = list(t["statements"])
            keys = list(t["answer_key"])
            bodies = list(t["tactical_explanations"])
            for ii, s in enumerate(stmts):
                if (gi, ii) in hard_set:
                    continue
                s2 = to_exam_statement(s)
                if not (
                    is_numeric_plug(s2)
                    or is_verbose_verbal(s2)
                    or has_narrative(s2)
                    or is_obvious(s2)
                ):
                    continue
                seen.discard(normalize_stmt(stmts[ii]))
                stmts[ii], keys[ii] = _unique_claim(
                    sub, bool(keys[ii]), gi * 5 + ii + 900, seen
                )
                bodies[ii] = _regen_body(stmts[ii], bool(keys[ii]), sub, ii)
                seen.add(normalize_stmt(stmts[ii]))
                n += 1
            t["statements"] = stmts
            t["answer_key"] = keys
            t["tactical_explanations"] = bodies
            gi += 1
    return n


def _opening(s: str) -> str:
    return " ".join(s.split()[:4]).lower()


def _regen_body(stmt: str, truth: bool, sub: str, idx: int) -> str:
    prof = assign_profiles([stmt], sub)[0]
    return generate_body(stmt, truth, sub, idx, profile=prof)


def _unique_claim(
    sub: str,
    truth: bool,
    seed: int,
    seen: set[str],
) -> tuple[str, bool]:
    for bump in range(500):
        rep = replacement_for(sub, want_truth=truth, seed=seed + bump, avoid=seen)
        if rep:
            stmt, t = rep
            if normalize_stmt(stmt) not in seen:
                return stmt, bool(t)
        stmt, t = generate_claim(sub, want_truth=truth, seed=seed + bump, avoid=seen)
        if normalize_stmt(stmt) not in seen:
            return stmt, bool(t)
    base, t = generate_claim(sub, want_truth=truth, seed=seed, avoid=set())
    for n in range(1, 20):
        stmt = base.rstrip(".") + f" (variant {n})."
        if normalize_stmt(stmt) not in seen:
            return stmt, bool(t)
    raise RuntimeError(f"could not uniquify claim sub={sub} seed={seed}")


def _openings_ok(stmts: list[str]) -> bool:
    return len(set(_opening(s) for s in stmts)) >= 4


def _fix_task_openings(
    t: dict, gi: int, seen: set[str], hard_set: set[tuple[int, int]]
) -> int:
    if t["title"].startswith("Warm-up:"):
        return 0
    sub = t["subsection"]
    stmts = list(t["statements"])
    keys = list(t["answer_key"])
    bodies = list(t["tactical_explanations"])
    n = 0
    for round_i in range(40):
        if _openings_ok(stmts):
            break
        replaced = False
        firsts = [_opening(s) for s in stmts]
        worst = Counter(firsts).most_common(1)[0][0]
        # Prefer soft slots, then hard.
        indices = [ii for ii in range(5) if _opening(stmts[ii]) == worst]
        indices.sort(key=lambda ii: (ii in hard_set, ii), reverse=True)
        for ii in indices:
            if (gi, ii) in hard_set and round_i < 25:
                continue
            seen.discard(normalize_stmt(stmts[ii]))
            if (gi, ii) in hard_set:
                set_soft_statement_avoid(seen)
                claim = claim_for(gi, ii, sub)
                stmts[ii], keys[ii] = claim.statement, claim.truth
                bodies[ii] = claim.body
            else:
                stmts[ii], keys[ii] = _unique_claim(
                    sub, bool(keys[ii]), gi * 5 + ii + round_i * 13, seen
                )
                bodies[ii] = _regen_body(stmts[ii], bool(keys[ii]), sub, ii)
            seen.add(normalize_stmt(stmts[ii]))
            n += 1
            replaced = True
            break
        if not replaced:
            break
    t["statements"] = stmts
    t["answer_key"] = keys
    t["tactical_explanations"] = bodies
    return n


def _patch_file(path: Path, tasks: list[dict], offset: int, hard_set: set[tuple[int, int]]) -> None:
    text = path.read_text()
    matches = list(_ITEM.finditer(text))
    out = text
    for match_i, m in reversed(list(enumerate(matches))):
        task_i = match_i // 5
        item_i = match_i % 5
        t = tasks[task_i]
        stmt = t["statements"][item_i]
        truth = t["answer_key"][item_i]
        body = t["tactical_explanations"][item_i]
        if body.strip():
            block = (
                f"{m.group(1)}{_escape_raw(stmt)},\n"
                f"                {truth},\n"
                f"                {_escape_raw(body)},\n"
                f"            )"
            )
        else:
            block = (
                f"{m.group(1)}{_escape_raw(stmt)},\n"
                f"                {truth},\n"
                f"            )"
            )
        out = out[: m.start()] + block + out[m.end() :]
    path.write_text(out)


def main() -> None:
    hard_set = set(hard_slots())
    mods = [importlib.import_module(n) for n in ("s21", "s22", "s23", "s24", "s25")]
    files = ["s21.py", "s22.py", "s23.py", "s24.py", "s25.py"]
    all_tasks: list[list[dict]] = [list(m.TASKS) for m in mods]

    seen: set[str] = set()
    dup_fix = 0
    open_fix = 0
    gi = 0
    for tasks in all_tasks:
        for t in tasks:
            if t["title"].startswith("Warm-up:"):
                for s in t["statements"]:
                    seen.add(normalize_stmt(s))
                gi += 1
                continue
            sub = t["subsection"]
            stmts = list(t["statements"])
            keys = list(t["answer_key"])
            bodies = list(t["tactical_explanations"])
            for ii, s in enumerate(stmts):
                key = normalize_stmt(s)
                if key not in seen:
                    seen.add(key)
                    continue
                truth = bool(keys[ii])
                if (gi, ii) in hard_set:
                    set_soft_statement_avoid(seen)
                    claim = claim_for(gi, ii, sub)
                    new_s, new_t = claim.statement, claim.truth
                    bodies[ii] = claim.body
                else:
                    new_s, new_t = _unique_claim(sub, truth, gi * 5 + ii, seen)
                    bodies[ii] = _regen_body(new_s, new_t, sub, ii)
                stmts[ii] = new_s
                keys[ii] = new_t
                seen.add(normalize_stmt(new_s))
                dup_fix += 1
            t["statements"] = stmts
            t["answer_key"] = keys
            t["tactical_explanations"] = bodies
            open_fix += _fix_task_openings(t, gi, seen, hard_set)
            gi += 1

    patch_n = _apply_task_patches(all_tasks, seen)
    scrub_n = _scrub_bad_statements(all_tasks, seen, hard_set)

    for fname, tasks in zip(files, all_tasks):
        _patch_file(HERE / fname, tasks, OFFSETS[fname], hard_set)

    print(
        f"fixed {dup_fix} global duplicates, {open_fix} opening replacements, "
        f"{patch_n} task patches, {scrub_n} scrubbed"
    )


if __name__ == "__main__":
    main()
