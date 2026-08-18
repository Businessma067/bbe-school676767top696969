#!/usr/bin/env python3
"""Regenerate flagged questions from structured quantities. Does not write Supabase.

Writes:
  textbook/output/question_repair_diff.json  — before/after grouped by check
  textbook/output/answer_key_conflicts.json  — Python verdict ≠ stored key
"""

from __future__ import annotations

import json
import math
import sys
from collections import defaultdict
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from explanation_builder import (
    Quantities,
    format_number,
    render,
    seal_question_explanations,
)
from parse_bbe import rewrite_task_explanations
from validate_questions import audit_task, iter_case_files, load_json_tasks

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
OUT = ROOT / "textbook" / "output"
LETTERS = "ABCDE"


def snapshot_task(task: dict) -> dict:
    return {
        "id": task.get("id"),
        "context": task.get("context"),
        "statements": list(task.get("statements") or []),
        "answer_key": list(task.get("answer_key") or []),
        "tactical_explanations": list(task.get("tactical_explanations") or []),
        "solution_overview": task.get("solution_overview") or "",
    }


def pair_np(ctx: str) -> list[tuple[int, float]]:
    import re

    pairs: list[tuple[int, float]] = []
    for pat in (
        r"batches of\s+(\d+)\s+units.{0,120}?probability of\s+(0?\.\d+).{0,120}?probability of\s+(0?\.\d+)",
        r"each complete\s+(\d+)\s+independent trials.{0,80}?probability\s+(0?\.\d+).{0,80}?probability\s+(0?\.\d+)",
        r"attempts\s+(\d+)\s+free throws.{0,80}?probability\s+(0?\.\d+).{0,80}?probability\s+(0?\.\d+)",
    ):
        m = re.search(pat, ctx, re.I | re.S)
        if m and m.lastindex and m.lastindex >= 3:
            n = int(m.group(1))
            return [(n, float(m.group(2))), (n, float(m.group(3)))]
    n_m = re.search(
        r"batches of\s+(\d+)|each complete\s+(\d+)|attempts\s+(\d+)|reviews\s+(\d+)",
        ctx,
        re.I,
    )
    ps = [float(x) for x in re.findall(r"probability(?: of)?\s+(0?\.\d+)", ctx, re.I)]
    if n_m and len(ps) >= 2:
        n = int(next(g for g in n_m.groups() if g))
        return [(n, ps[0]), (n, ps[1])]
    for m in re.finditer(
        r"(?:makes|Line \d+)\s+(\d+)\s+units per hour.{0,80}?probability\s+(0?\.\d+)",
        ctx,
        re.I | re.S,
    ):
        pairs.append((int(m.group(1)), float(m.group(2))))
    if len(pairs) >= 2:
        return pairs[:2]
    return []


def range_bounds(ctx: str, stmt: str) -> tuple[int, int] | None:
    import re

    blob = ctx + " " + stmt
    m = re.search(r"between\s+(\d+)\s+and\s+(\d+)", blob, re.I)
    if m:
        return int(m.group(1)), int(m.group(2))
    return None


def repair_ch13_duplicates(task: dict, conflicts: list[dict]) -> None:
    """Re-derive colliding letters from n, p in the stem. Leave answer_key untouched."""
    import re

    ctx = task.get("context") or ""
    pairs = pair_np(ctx)
    if len(pairs) < 2:
        return
    (n_a, p_a), (n_b, p_b) = pairs[0], pairs[1]
    stmts = list(task.get("statements") or [])
    keys = list(task.get("answer_key") or [])
    expls = list(task.get("tactical_explanations") or [])
    used: set[str] = set()

    def mean(n: int, p: float) -> float:
        return n * p

    def var(n: int, p: float) -> float:
        return n * p * (1 - p)

    def sd(n: int, p: float) -> float:
        return math.sqrt(var(n, p))

    def binomial_median(n: int, p: float) -> float:
        val = (n + 1) * p
        if abs(val - round(val)) < 1e-12:
            return (val + (val - 1)) / 2.0
        return math.floor(val)

    new = []
    for i, stmt in enumerate(stmts):
        letter = LETTERS[i]
        is_true = bool(keys[i]) if i < len(keys) else True
        low = stmt.lower()
        q: Quantities | None = None
        bounds = range_bounds(ctx, stmt)

        if "median" in low:
            med = binomial_median(n_b, p_b)
            mu = mean(n_b, p_b)
            rounded = int(round(mu))  # school half-up via Python 3 round (banker's on *.5)
            q = Quantities(
                letter=letter,
                is_true=is_true,
                formula=r"\mathrm{median}\approx\lfloor(n+1)p\rfloor,\quad E[X]=np",
                substitution=f"(n_B+1)p_B = ({n_b}+1)\\cdot{p_b} = {(n_b+1)*p_b:g}",
                value=med,
                value_display=format_number(med),
                extras=[
                    f"Player B has mean {format_number(mu, 4)}. The nearest whole number is {rounded}. "
                    f"The binomial median is {format_number(med, 4)}.",
                ],
                mistake="A student who treated the mean as if it were already the median would mark the statement true.",
            )
            computed = math.isclose(med, rounded, abs_tol=1e-9)
        elif "falls inside" in low or "inside the" in low and "mean" in low:
            mu = mean(n_b, p_b)
            lo, hi = bounds or (0, 0)
            q = Quantities(
                letter=letter,
                is_true=is_true,
                formula=r"E[X]=np",
                substitution=f"{n_b}\\cdot{p_b}",
                value=mu,
                value_display=format_number(mu, 4),
                compare="at least" if False else None,
                extras=[
                    f"= {format_number(mu, 4)}, which is "
                    f"{'' if lo <= mu <= hi else 'not '}inside [{lo}, {hi}].",
                ],
                mistake=(
                    f"A student who compared {format_number(mu, 4)} with the nearest endpoint "
                    f"instead of asking whether it lies in [{lo}, {hi}] would mark the statement true."
                ),
            )
            computed = lo <= mu <= hi
        elif "within one standard deviation" in low or "entirely within one" in low:
            mu = mean(n_a, p_a)
            s = sd(n_a, p_a)
            lo, hi = bounds or (0, 0)
            dist = max(abs(lo - mu), abs(hi - mu)) if bounds else 0
            q = Quantities(
                letter=letter,
                is_true=is_true,
                formula=r"E[X]=np,\quad \mathrm{SD}(X)=\sqrt{np(1-p)}",
                substitution=f"n_A={n_a},\\ p_A={p_a}",
                value=s,
                value_display=format_number(s, 4),
                extras=[
                    f"Mean {format_number(mu, 4)}; SD {format_number(s, 4)}. "
                    f"The interval [{lo}, {hi}] extends {format_number(dist, 4)} from the mean.",
                ],
                mistake=(
                    f"A student who compared the two lines' SDs instead of checking whether "
                    f"[{lo}, {hi}] sits inside one SD of {format_number(mu, 4)} would mark the statement true."
                ),
            )
            computed = dist <= s + 1e-9
        elif "standard deviation" in low and "mean" in low and "within one" not in low:
            import re as _re

            mu_a, mu_b = mean(n_a, p_a), mean(n_b, p_b)
            use_b = bool(_re.search(r"of (?:line |player )?b's standard", low))
            use_a = bool(_re.search(r"of (?:line |player )?a's standard", low))
            s_ref = sd(n_b, p_b) if use_b or not use_a else sd(n_a, p_a)
            gap = abs(mu_b - mu_a) / s_ref if s_ref else float("inf")
            thr_m = _re.search(r"more than\s+(\d+(?:\.\d+)?)", low)
            thr = float(thr_m.group(1)) if thr_m else 3.0
            q = Quantities(
                letter=letter,
                is_true=is_true,
                formula=r"\dfrac{|E[A]-E[B]|}{\mathrm{SD}(\mathrm{ref})}",
                substitution=(
                    f"|{format_number(mu_a,4)}-{format_number(mu_b,4)}|"
                    f"/{format_number(s_ref,4)}"
                ),
                value=gap,
                value_display=format_number(gap, 4),
                compare="greater than",
                threshold=thr,
                threshold_display=format_number(thr, 4),
                mistake=(
                    f"A student who compared the two standard deviations instead of measuring "
                    f"the mean gap in SD units ({format_number(s_ref, 4)}) would mark the statement true."
                ),
            )
            computed = gap > thr
        else:
            new.append(expls[i] if i < len(expls) else "")
            continue

        if computed is not None and computed != is_true:
            conflicts.append(
                {
                    "id": task.get("id"),
                    "letter": letter,
                    "stored": is_true,
                    "computed": computed,
                    "statement": stmt,
                }
            )
        new.append(render(q, used, stmt))

    # If we only replaced some letters, keep uniqueness across the whole question.
    task["tactical_explanations"] = seal_question_explanations(new, stmts, keys)


CMP_LINE = __import__("re").compile(
    r"=\s*(?P<val>\$?-?[\d,]+(?:\.\d+)?%?)\s*,\s*which is\s+(?P<neg>not\s+)?(?P<op>greater than|less than|at least|at most)\s+(?P<thr>\$?-?[\d,]+(?:\.\d+)?%?)",
    flags=__import__("re").I,
)


def conflict_from_explanation(task: dict, conflicts: list[dict]) -> None:
    import re

    keys = list(task.get("answer_key") or [])
    stmts = list(task.get("statements") or [])
    for i, expl in enumerate(task.get("tactical_explanations") or []):
        m = CMP_LINE.search(expl or "")
        if not m:
            continue
        val = float(m.group("val").replace(",", "").replace("$", "").replace("%", ""))
        thr = float(m.group("thr").replace(",", "").replace("$", "").replace("%", ""))
        if "%" in m.group("val") and "%" not in m.group("thr") and thr <= 1.5:
            thr *= 100
        if "%" in m.group("thr") and "%" not in m.group("val") and val <= 1.5:
            val *= 100
        op = m.group("op").lower()
        holds = val > thr if op == "greater than" else val < thr if op == "less than" else val >= thr if op == "at least" else val <= thr
        claimed_true = not bool(m.group("neg"))
        stored = bool(keys[i]) if i < len(keys) else None
        if stored is not None and claimed_true != stored:
            conflicts.append(
                {
                    "id": task.get("id"),
                    "letter": LETTERS[i],
                    "stored": stored,
                    "computed": claimed_true,
                    "evidence": m.group(0),
                    "statement": stmts[i] if i < len(stmts) else "",
                }
            )


def unified_lines(old: str, new: str) -> list[dict]:
    old_ls = (old or "").splitlines() or [""]
    new_ls = (new or "").splitlines() or [""]
    # Short structural diff: drop equal prefix/suffix, mark the rest.
    i = 0
    while i < min(len(old_ls), len(new_ls)) and old_ls[i] == new_ls[i]:
        i += 1
    j = 0
    while j < min(len(old_ls) - i, len(new_ls) - i) and old_ls[-1 - j] == new_ls[-1 - j]:
        j += 1
    lines = [{"type": "unchanged", "content": ln} for ln in old_ls[:i]]
    for ln in old_ls[i : len(old_ls) - j or None]:
        lines.append({"type": "removed", "content": ln})
    for ln in new_ls[i : len(new_ls) - j or None]:
        lines.append({"type": "added", "content": ln})
    if j:
        for ln in old_ls[len(old_ls) - j :]:
            lines.append({"type": "unchanged", "content": ln})
    return lines[:80]


def main() -> int:
    import subprocess

    before_by_id: dict[str, dict] = {}
    flags_by_id: dict[str, dict] = {}
    files = {
        p.name: (p, load_json_tasks(p), json.loads(p.read_text()))
        for p in iter_case_files()
    }
    for name, (_path, tasks, _raw) in files.items():
        subject = "economics" if name.startswith("economics") else "math"
        for t in tasks:
            t["_file"] = name
            t["_subject"] = subject
            tid = t.get("id") or t.get("case_id")
            before_by_id[tid] = snapshot_task(t)
            flagged = audit_task(t)
            if flagged:
                flags_by_id[tid] = flagged

    conflicts: list[dict] = []

    for name, (path, tasks, raw) in files.items():
        if not name.startswith("economics"):
            continue
        changed = 0
        for t in tasks:
            tid = t.get("id") or t.get("case_id")
            if tid not in flags_by_id:
                continue
            rewrite_task_explanations(t)
            changed += 1
        print(f"{name:42} regenerated={changed:4}")
        if isinstance(raw, list):
            path.write_text(json.dumps(tasks, ensure_ascii=False, indent=2) + "\n")
        else:
            raw["tasks"] = tasks
            path.write_text(json.dumps(raw, ensure_ascii=False, indent=2) + "\n")

    ch13_path = DATA / "math-cases-ch13-binomial.json"
    ch13 = json.loads(ch13_path.read_text())
    ch13_tasks = ch13["tasks"] if isinstance(ch13, dict) else ch13
    n13 = 0
    for t in ch13_tasks:
        tid = t.get("id")
        flagged = flags_by_id.get(tid)
        if not flagged or "dup_explanation" not in flagged["failed_checks"]:
            continue
        repair_ch13_duplicates(t, conflicts)
        n13 += 1
    print(f"{'math-cases-ch13-binomial.json':42} regenerated={n13:4}")
    if isinstance(ch13, dict):
        ch13["tasks"] = ch13_tasks
        ch13_path.write_text(json.dumps(ch13, ensure_ascii=False, indent=2) + "\n")
    else:
        ch13_path.write_text(json.dumps(ch13_tasks, ensure_ascii=False, indent=2) + "\n")

    print("rebuilding Chapter 12 from PDF extracts…")
    subprocess.check_call([sys.executable, str(ROOT / "scripts" / "build-ch12-probability.py")])

    after_files = {p.name: load_json_tasks(p) for p in iter_case_files()}
    after_by_id: dict[str, dict] = {}
    for name, tasks in after_files.items():
        subject = "economics" if name.startswith("economics") else "math"
        for t in tasks:
            t["_file"] = name
            t["_subject"] = subject
            tid = t.get("id") or t.get("case_id")
            after_by_id[tid] = t
            conflict_from_explanation(t, conflicts)

    by_check: dict[str, list[dict]] = defaultdict(list)
    changed_ids = []
    for tid, before in before_by_id.items():
        after = after_by_id.get(tid)
        if not after:
            continue
        old_e = before["tactical_explanations"]
        new_e = after.get("tactical_explanations") or []
        if old_e == new_e and before["context"] == after.get("context"):
            continue
        changed_ids.append(tid)
        checks = (flags_by_id.get(tid) or {}).get("failed_checks") or ["unflagged_rebuild"]
        entry = {
            "id": tid,
            "file": after.get("_file"),
            "topic": after.get("subsection"),
            "subject": after.get("_subject"),
            "title": (after.get("title") or "")[:80],
            "failed_checks": checks,
            "letters": [],
        }
        for i, letter in enumerate(LETTERS):
            old = old_e[i] if i < len(old_e) else ""
            new = new_e[i] if i < len(new_e) else ""
            if old == new:
                continue
            entry["letters"].append(
                {
                    "letter": letter,
                    "old": old,
                    "new": new,
                    "diff": unified_lines(old, new),
                }
            )
        for check in checks:
            by_check[check].append(entry)

    OUT.mkdir(parents=True, exist_ok=True)
    diff_path = OUT / "question_repair_diff.json"
    conflict_path = OUT / "answer_key_conflicts.json"
    payload = {
        "changed_questions": len(changed_ids),
        "conflicts": conflicts,
        "by_check": {k: v for k, v in sorted(by_check.items(), key=lambda kv: -len(kv[1]))},
    }
    # Deduplicate entries nested under multiple checks: keep as grouped copies for review.
    diff_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    conflict_path.write_text(json.dumps(conflicts, ensure_ascii=False, indent=2) + "\n")
    print(f"changed {len(changed_ids)} questions; conflicts {len(conflicts)}")
    print(f"wrote {diff_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
