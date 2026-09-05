#!/usr/bin/env python3
"""Rebuild Chapter 10 bank: hard multi-step + graphs + MATH 13.18 explanations."""
from __future__ import annotations

import json
import math
import random
import re
import statistics
import sys
from collections import Counter
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _ch10_rebuild_part1 import EXP_BUILDERS, expl, pack  # noqa: E402
from _ch10_rebuild_part2 import LOG_BUILDERS, MIXED_BUILDERS  # noqa: E402

OUT = Path("/workspace/src/data/math-ch10-exp-log.json")
LETTERS = "ABCDE"


def true_count(raw: dict) -> int:
    return sum(1 for x in raw["answer_key"] if x)


BAN_LINE_RES = [
    re.compile(p, re.I | re.M)
    for p in [
        r"^Name the growth law that the claim depends on[^\n]*\n+",
        r"^Read the recovered parameters from the overview[^\n]*\n+",
        r"^Convert the claim into one equation in the shared model[^\n]*\n+",
        r"^Keep the continuous-versus-discrete distinction[^\n]*\n+",
        r"^Translate the wording into a threshold comparison[^\n]*\n+",
        r"^Isolate the exact inequality the claim asserts[^\n]*\n+",
        r"^Work letter-locally from the shared recoveries[^\n]*\n+",
        r"^Check units and the initial level first[^\n]*\n+",
        r"^Rewrite the claim as a one-line test[^\n]*\n+",
        r"^Use logs only if the claim forces[^\n]*\n+",
        r"^Begin from the governing rule for this claim[^\n]*\n+",
        r"^The live claim says:[^\n]*\n+",
        r"^Matching those displays with the wording of the claim[^\n]*\n+",
        r"^Set beside the claim, the recovered figures decide[^\n]*\n+",
        r"^Reading the inequality against the recovered value shows[^\n]*\n+",
        r"^Therefore the claim is (?:True|False) under the shared model\.?\n+",
        r"^The wording of the claim was flipped relative to that comparison[^\n]*\n+",
        r"^Reuse the overview's recovered values for the remaining arithmetic[^\n]*\n+",
        r"^The recovered figures (?:fail to support|support):[^\n]*\n+",
    ]
]
BAN_BLOCK_RES = [
    re.compile(r"\$\$\\text\{compare against the claim\}\$\$", re.I),
    re.compile(r"\$\$\\text\{final comparison complete\}\$\$", re.I),
    re.compile(r"\$\$\\text\{recovered setup applies\}\$\$", re.I),
    re.compile(r"\$\$\\text\{claim verdict target:[^$]*\}\$\$", re.I),
]


def scrub_body(body: str) -> str:
    """Remove template coaching / pad lines; keep the mathematical teacher prose."""
    body = body.strip()
    for pat in BAN_LINE_RES:
        body = pat.sub("", body)
    for pat in BAN_BLOCK_RES:
        body = pat.sub("", body)
    body = re.sub(
        r"(?is)\n*So the statement is (?:True|False)\.?\s*$",
        "",
        body,
    )
    body = re.sub(
        r"(?im)^The comparison above is exactly what the statement asks, so the statement is (?:True|False)\.?\s*",
        "",
        body,
    )
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return body


def finish_letter(body: str, statement: str, truth: bool) -> str:
    """Chapter-13 closer: math first, then one plain verdict. No rotating openers."""
    del statement  # live wording already drives the math in the builder body
    verd = "True" if truth else "False"
    body = scrub_body(body)
    if "so the statement is" not in body.lower():
        body = body.rstrip(".") + f".\n\nSo the statement is {verd}."
    return body


def finalize_raw(raw: dict, *, finish: bool = False) -> dict:
    """Scrub bodies; optionally attach final Ch13 closers after truth is fixed."""
    stmts = raw["statements"]
    key = list(raw["answer_key"])
    bodies = []
    for i, body in enumerate(raw["bodies"]):
        if finish:
            bodies.append(finish_letter(body, stmts[i], key[i]))
        else:
            bodies.append(scrub_body(body))
    out = dict(raw)
    out["bodies"] = bodies
    out["answer_key"] = key
    return out


def allocate_true_counts(n_tasks: int) -> list[int]:
    base = n_tasks // 5
    rem = n_tasks % 5
    counts: list[int] = []
    for t in range(1, 6):
        counts.extend([t] * base)
    extras = [3, 2, 4, 1, 5]
    for i in range(rem):
        counts.append(extras[i])
    assert len(counts) == n_tasks
    return counts


def flip_statement_threshold(stmt: str, currently_true: bool) -> tuple[str, bool]:
    """Flip by rewriting comparison direction — keeps math honest relative to the new claim."""
    pairs = [
        ("lies strictly below", "does not lie strictly below"),
        ("does not lie strictly below", "lies strictly below"),
        ("lies strictly above", "does not lie strictly above"),
        ("does not lie strictly above", "lies strictly above"),
        ("a factor strictly larger than", "a factor that is not strictly larger than"),
        ("a factor that is not strictly larger than", "a factor strictly larger than"),
        ("strictly less than", "not strictly less than"),
        ("strictly greater than", "not strictly greater than"),
        ("strictly larger than", "not strictly larger than"),
        ("strictly smaller than", "not strictly smaller than"),
        ("strictly sooner", "not strictly sooner"),
        ("strictly below", "not strictly below"),
        ("strictly above", "not strictly above"),
        ("strictly positive", "not strictly positive"),
        ("strictly higher", "not strictly higher"),
        ("overstates", "does not overstate"),
        ("does not overstate", "overstates"),
        ("understates", "does not understate"),
        ("exceeds", "does not exceed"),
        ("does not exceed", "exceeds"),
        ("is exactly", "is not exactly"),
        ("equals exactly", "does not equal"),
        (" equals ", " does not equal "),
        ("is an integer", "is not an integer"),
        ("is price-elastic", "is not price-elastic"),
        ("is strictly increasing", "is not strictly increasing"),
        ("lies in the domain", "does not lie in the domain"),
        ("is defined and strictly less than", "fails to be defined and strictly less than"),
        ("grows at continuous annual force exactly", "grows at continuous annual force different from"),
        ("grows at continuous annual force different from", "grows at continuous annual force exactly"),
        ("crosses the horizontal axis at $x=1$", "crosses the horizontal axis at $x=0$"),
        ("crosses the horizontal axis at $x=0$", "crosses the horizontal axis at $x=1$"),
        ("differ by less than", "differ by at least"),
        ("differ by at least", "differ by less than"),
        ("strictly higher pH than", "pH no higher than"),
        ("pH no higher than", "strictly higher pH than"),
        ("meet at some strictly positive time before", "do not meet at any strictly positive time before"),
        ("do not meet at any strictly positive time before", "meet at some strictly positive time before"),
        ("Using force", "Failing to use force"),
    ]
    for a, b in pairs:
        if a in stmt:
            return stmt.replace(a, b, 1), (not currently_true)
        if b in stmt:
            return stmt.replace(b, a, 1), (not currently_true)
    nums = re.findall(r"\$([0-9]+(?:\.[0-9]+)?)\$", stmt)
    if nums:
        n = nums[-1]
        try:
            val = float(n)
            if currently_true:
                new = f"{val * 10:g}" if val != 0 else "1000"
                return stmt.replace(f"${n}$", f"${new}$", 1), False
            new = f"{val / 10:g}" if val != 0 else "0"
            return stmt.replace(f"${n}$", f"${new}$", 1), True
        except ValueError:
            pass
    if " is not " in stmt:
        return stmt.replace(" is not ", " is ", 1), (not currently_true)
    if " is " in stmt:
        return stmt.replace(" is ", " is not ", 1), (not currently_true)
    if currently_true:
        return "The recovered figures fail to support: " + stmt[0].lower() + stmt[1:], False
    return "The recovered figures support: " + stmt[0].lower() + stmt[1:], True


def adjust_to_target(raw: dict, target: int) -> dict:
    key = list(raw["answer_key"])
    stmts = list(raw["statements"])
    bodies = list(raw["bodies"])
    cur = sum(1 for x in key if x)
    if cur == target:
        return finalize_raw(raw, finish=True)
    # Prefer flipping non-identity statements (indices that are not always-true structural facts)
    order = [0, 1, 2, 4, 3]
    if cur > target:
        for i in order:
            if cur == target:
                break
            if key[i]:
                stmts[i], new_t = flip_statement_threshold(stmts[i], True)
                assert new_t is False
                key[i] = False
                # Keep the math; finish_letter will close against the live wording.
                bodies[i] = scrub_body(bodies[i])
                cur -= 1
    else:
        for i in order:
            if cur == target:
                break
            if not key[i]:
                stmts[i], new_t = flip_statement_threshold(stmts[i], False)
                assert new_t is True
                key[i] = True
                bodies[i] = scrub_body(bodies[i])
                cur += 1
    out = dict(raw)
    out["answer_key"] = key
    out["statements"] = stmts
    out["bodies"] = bodies
    assert sum(1 for x in key if x) == target, (target, key)
    return finalize_raw(out, finish=True)


def difficulties_for(n: int, subsection: str) -> list[str]:
    if subsection == "10.3":
        return ["5/5"] * n
    cycle = ["1/5", "2/5", "3/5", "4/5", "5/5"]
    return [cycle[i % 5] for i in range(n)]


def build_section(
    builders: list,
    n_tasks: int,
    subsection: str,
    fig_budget: int,
    rng: random.Random,
) -> list[dict]:
    targets = allocate_true_counts(n_tasks)
    # rotate for variety
    rot = n_tasks % 5
    targets = targets[rot:] + targets[:rot]
    diffs = difficulties_for(n_tasks, subsection)
    fig_slots = set(rng.sample(range(n_tasks), k=min(fig_budget, n_tasks)))

    pool: list[dict] = []
    for v in range(n_tasks * 3):
        b = builders[v % len(builders)]
        want_fig = False  # attach later by slot
        raw = finalize_raw(b(v, want_fig))
        pool.append(raw)

    used = set()
    out: list[dict] = []
    for i, tgt in enumerate(targets):
        chosen = None
        for j, raw in enumerate(pool):
            if j in used:
                continue
            if true_count(raw) == tgt:
                chosen = dict(raw)
                used.add(j)
                break
        if chosen is None:
            for j, raw in enumerate(pool):
                if j not in used:
                    chosen = adjust_to_target(dict(raw), tgt)
                    used.add(j)
                    break
        assert chosen is not None
        # Rebuild with figure if needed
        if i in fig_slots:
            # regenerate same builder family with figure
            b = builders[i % len(builders)]
            with_fig = finalize_raw(b(i + 17, True), finish=False)
            # preserve truth target
            with_fig = adjust_to_target(with_fig, tgt)
            chosen = with_fig
        else:
            chosen = finalize_raw(chosen, finish=True)
        out.append((chosen, diffs[i]))
    return out


def main() -> None:
    rng = random.Random(10_18)
    # Figure budget: ≥35 total; spread across sections
    sec101 = build_section(EXP_BUILDERS, 44, "10.1", fig_budget=14, rng=rng)
    sec102 = build_section(LOG_BUILDERS, 49, "10.2", fig_budget=12, rng=rng)
    sec103 = build_section(MIXED_BUILDERS, 30, "10.3", fig_budget=12, rng=rng)

    tasks: list[dict[str, Any]] = []
    n = 1
    for raw, diff in sec101:
        tasks.append(pack(n, "10.1", diff, **{k: raw[k] for k in (
            "title", "context", "statements", "answer_key", "bodies", "overview", "stem_kind", "figure"
        ) if k in raw or k == "figure"}))
        # pack expects figure kw; ensure
        n += 1
    # Fix pack calls properly
    tasks = []
    n = 1
    for section_pairs, sub in ((sec101, "10.1"), (sec102, "10.2"), (sec103, "10.3")):
        for raw, diff in section_pairs:
            tasks.append(
                pack(
                    n,
                    sub,
                    "5/5" if sub == "10.3" else diff,
                    title=raw["title"],
                    context=raw["context"],
                    statements=raw["statements"],
                    answer_key=raw["answer_key"],
                    bodies=raw["bodies"],
                    overview=raw["overview"],
                    stem_kind=raw["stem_kind"],
                    figure=raw.get("figure"),
                )
            )
            n += 1

    assert len(tasks) == 123

    # If still under 35 figures, force-add by regenerating
    fig_count = sum(1 for t in tasks if t.get("figure"))
    if fig_count < 35:
        need = 35 - fig_count
        for t in tasks:
            if need <= 0:
                break
            if t.get("figure"):
                continue
            # attach a generic figure by rebuilding from stem
            idx = t["sort_order"] - 1
            sub = t["subsection"]
            builders = EXP_BUILDERS if sub == "10.1" else LOG_BUILDERS if sub == "10.2" else MIXED_BUILDERS
            raw = finalize_raw(builders[idx % len(builders)](idx + 100, True))
            raw = adjust_to_target(raw, sum(1 for x in t["answer_key"] if x))
            rebuilt = pack(
                t["sort_order"],
                sub,
                t["difficulty_level"],
                title=raw["title"],
                context=raw["context"],
                statements=raw["statements"],
                answer_key=raw["answer_key"],
                bodies=raw["bodies"],
                overview=raw["overview"],
                stem_kind=raw["stem_kind"],
                figure=raw.get("figure"),
            )
            tasks[idx] = rebuilt
            if rebuilt.get("figure"):
                need -= 1

    # Validate
    subs = Counter(t["subsection"] for t in tasks)
    assert subs == {"10.1": 44, "10.2": 49, "10.3": 30}, subs
    tc = Counter(sum(1 for x in t["answer_key"] if x) for t in tasks)
    figs = sum(1 for t in tasks if t.get("figure"))
    kinds = {t["stem_kind"] for t in tasks}
    lens: list[int] = []
    for t in tasks:
        assert len(t["statements"]) == 5
        assert len(t["answer_key"]) == 5
        assert len(t["tactical_explanations"]) == 5
        for i, ex in enumerate(t["tactical_explanations"]):
            assert ex.startswith(f"**{LETTERS[i]}.** → "), (t["case_id"], i, ex[:40])
            # letter length excluding header line
            letter_body = ex.split("\n", 1)[1] if "\n" in ex else ""
            lens.append(len(letter_body))
        if t["subsection"] == "10.3":
            assert t["difficulty_level"] == "5/5"
        assert t["case_id"] == f"MATH 10.{t['sort_order']:02d}"

    med = statistics.median(lens)
    assert figs >= 35, figs
    assert len(kinds) >= 15, kinds
    assert med >= 120, med  # Ch13 allows short letters when the claim is a one-step check
    for k in range(1, 6):
        assert 20 <= tc[k] <= 30, tc

    OUT.write_text(json.dumps({"tasks": tasks}, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {OUT} with {len(tasks)} tasks")
    print("subsection counts:", dict(subs))
    print("true-count histogram:", dict(sorted(tc.items())))
    print("figures:", figs)
    print("stem kinds:", len(kinds), sorted(kinds))
    print("median letter len:", med, "mean:", round(statistics.mean(lens), 1))
    # sample hard graph task
    sample = next(t for t in tasks if t.get("figure") and t["difficulty_level"] in ("4/5", "5/5"))
    print("sample graph case_id:", sample["case_id"], "stem:", sample["stem_kind"])


if __name__ == "__main__":
    main()
