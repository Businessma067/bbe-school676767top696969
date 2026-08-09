#!/usr/bin/env python3
"""Audit English Texts / Grammar / Vocabulary banks."""
from __future__ import annotations

import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# name -> (path, expected_subs, tasks_per_sub)
BANKS = {
    "grammar": (ROOT / "src/data/english/grammar.json", 20, 20),
    "texts": (ROOT / "src/data/english/texts.json", 16, 10),
    "vocabulary": (ROOT / "src/data/english/vocabulary.json", 6, 30),
}


def difficulty_for(sort_order: int, tasks_per_sub: int) -> str | None:
    """Map sort_order to difficulty band. None = skip check (irregular bank)."""
    n = int(sort_order)
    if tasks_per_sub == 20:
        if n <= 4:
            return "1/5"
        if n <= 8:
            return "2/5"
        if n <= 12:
            return "3/5"
        if n <= 16:
            return "4/5"
        return "5/5"
    if tasks_per_sub == 30:
        if n <= 6:
            return "1/5"
        if n <= 12:
            return "2/5"
        if n <= 18:
            return "3/5"
        if n <= 24:
            return "4/5"
        return "5/5"
    # texts (10/sub) uses a custom curve — do not enforce here
    return None


def expl_ok(answer: bool, expl: str) -> bool:
    s = str(expl).lstrip()
    # Letter claim header — verdict shown in answer_key / UI table
    if re.match(r"^\*\*[A-E]\)", s):
        return True
    # Math Ch11 style: **A) ...** (true|false) leftover
    m = re.search(r"\((true|false)\)", s, flags=re.I)
    if m:
        got = m.group(1).lower() == "true"
        return got is bool(answer)
    # Legacy: TRUE — / FALSE —
    u = s.upper()
    want = "TRUE" if answer else "FALSE"
    return u.startswith(want)


def audit_bank(name: str, path: Path, expected_subs: int, tasks_per_sub: int) -> list[str]:
    errors: list[str] = []
    data = json.loads(path.read_text(encoding="utf-8-sig"))
    subs = data.get("subsections") or []
    tasks = data.get("tasks") or []
    if len(subs) != expected_subs:
        errors.append(f"{name}: expected {expected_subs} subsections, got {len(subs)}")
    passage_by_sub = {
        s["id"]: (s.get("passage") or "").strip()
        for s in subs
        if s.get("id")
    }
    by = defaultdict(list)
    ids: set[str] = set()
    true_counts: Counter[int] = Counter()
    all_stmts: list[str] = []
    for t in tasks:
        sid = t.get("subsection")
        by[sid].append(t)
        tid = t.get("id")
        if tid in ids:
            errors.append(f"{name}: duplicate id {tid}")
        ids.add(tid)
        for field in ("statements", "answer_key", "tactical_explanations", "highlights"):
            if len(t.get(field) or []) != 5:
                errors.append(f"{name}:{tid}: {field} length != 5")
        n_true = sum(1 for a in t.get("answer_key") or [] if a)
        if not (1 <= n_true <= 5):
            errors.append(f"{name}:{tid}: true count {n_true} not in 1..5")
        true_counts[n_true] += 1
        for a, e in zip(t.get("answer_key") or [], t.get("tactical_explanations") or []):
            if not expl_ok(bool(a), str(e)):
                errors.append(f"{name}:{tid}: explanation prefix mismatch")
        so = int(t.get("sort_order") or 0)
        expected_diff = difficulty_for(so, tasks_per_sub)
        if expected_diff is not None and t.get("difficulty_level") != expected_diff:
            errors.append(
                f"{name}:{tid}: difficulty {t.get('difficulty_level')} != expected {expected_diff}"
            )
        if name == "grammar" and not (t.get("solution_overview") or "").strip():
            errors.append(f"{name}:{tid}: missing solution_overview")
        if name == "texts":
            passage = (t.get("passage") or "").strip() or passage_by_sub.get(sid or "", "")
            if not passage:
                errors.append(f"{name}:{tid}: missing passage")
        all_stmts.extend(t.get("statements") or [])
    for s in subs:
        sid = s["id"]
        if len(by[sid]) != tasks_per_sub:
            errors.append(f"{name}:{sid}: expected {tasks_per_sub} tasks, got {len(by[sid])}")
    missing = {1, 2, 3, 4, 5} - set(true_counts)
    if missing and name != "texts":
        errors.append(f"{name}: missing true-count values {sorted(missing)}")
    uniq = len(set(all_stmts))
    print(
        f"{name}: tasks={len(tasks)} subs={len(subs)} "
        f"true-dist={dict(sorted(true_counts.items()))} "
        f"stmts unique/total={uniq}/{len(all_stmts)}"
    )
    if name == "grammar" and all_stmts and uniq < len(all_stmts):
        errors.append(f"{name}: duplicate statements: {len(all_stmts) - uniq}")
    return errors


def main() -> int:
    all_errors: list[str] = []
    for name, (path, nsubs, ntasks) in BANKS.items():
        if not path.exists():
            all_errors.append(f"missing {path}")
            continue
        all_errors.extend(audit_bank(name, path, nsubs, ntasks))
    if all_errors:
        print("AUDIT FAILED:")
        for e in all_errors[:50]:
            print(" -", e)
        if len(all_errors) > 50:
            print(f" ... and {len(all_errors) - 50} more")
        return 1
    print("AUDIT OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
