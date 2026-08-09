#!/usr/bin/env python3
"""Audit English Texts / Grammar / Vocabulary banks."""
from __future__ import annotations

import json
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BANKS = {
    "grammar": (ROOT / "src/data/english/grammar.json", 20),
    "texts": (ROOT / "src/data/english/texts.json", 5),
    "vocabulary": (ROOT / "src/data/english/vocabulary.json", 6),
}


def difficulty(n: int) -> str:
    if n <= 6:
        return "1/5"
    if n <= 12:
        return "2/5"
    if n <= 18:
        return "3/5"
    if n <= 24:
        return "4/5"
    return "5/5"


def audit_bank(name: str, path: Path, expected_subs: int) -> list[str]:
    errors: list[str] = []
    data = json.loads(path.read_text(encoding="utf-8"))
    subs = data.get("subsections") or []
    tasks = data.get("tasks") or []
    if len(subs) != expected_subs:
        errors.append(f"{name}: expected {expected_subs} subsections, got {len(subs)}")
    by = defaultdict(list)
    ids = set()
    true_counts: Counter[int] = Counter()
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
            prefix = "TRUE." if a else "FALSE."
            if not str(e).startswith(prefix):
                errors.append(f"{name}:{tid}: explanation prefix mismatch ({prefix})")
        so = t.get("sort_order")
        if t.get("difficulty_level") != difficulty(int(so)):
            errors.append(
                f"{name}:{tid}: difficulty {t.get('difficulty_level')} != expected {difficulty(int(so))}"
            )
        if name == "texts" and not (t.get("passage") or "").strip():
            errors.append(f"{name}:{tid}: missing passage")
    for s in subs:
        sid = s["id"]
        if len(by[sid]) != 30:
            errors.append(f"{name}:{sid}: expected 30 tasks, got {len(by[sid])}")
    missing = {1, 2, 3, 4, 5} - set(true_counts)
    if missing:
        errors.append(f"{name}: missing true-count values {sorted(missing)}")
    print(f"{name}: tasks={len(tasks)} subs={len(subs)} true-dist={dict(sorted(true_counts.items()))}")
    return errors


def main() -> int:
    all_errors: list[str] = []
    for name, (path, nsubs) in BANKS.items():
        if not path.exists():
            all_errors.append(f"missing {path}")
            continue
        all_errors.extend(audit_bank(name, path, nsubs))
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
