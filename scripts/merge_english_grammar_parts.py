#!/usr/bin/env python3
"""Merge grammar_parts/g.*.json into grammar.json and audit."""
from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PARTS = ROOT / "src" / "data" / "english" / "grammar_parts"
OUT = ROOT / "src" / "data" / "english" / "grammar.json"

ORDER = [f"g.{i}" for i in range(1, 21)]


def difficulty(n: int) -> str:
    if n <= 4:
        return "1/5"
    if n <= 8:
        return "2/5"
    if n <= 12:
        return "3/5"
    if n <= 16:
        return "4/5"
    return "5/5"


def main() -> int:
    missing = []
    subsections = []
    tasks = []
    all_stmts: list[str] = []
    errors: list[str] = []

    for sid in ORDER:
        path = PARTS / f"{sid}.json"
        if not path.exists():
            missing.append(sid)
            continue
        data = json.loads(path.read_text(encoding="utf-8-sig"))
        title = data.get("title") or sid
        part_tasks = data.get("tasks") or []
        subsections.append({"id": sid, "title": title})
        if len(part_tasks) != 20:
            errors.append(f"{sid}: expected 20 tasks, got {len(part_tasks)}")
        for t in part_tasks:
            t["subsection"] = sid
            so = int(t.get("sort_order") or 0)
            if t.get("difficulty_level") != difficulty(so):
                t["difficulty_level"] = difficulty(so)
            if not (t.get("solution_overview") or "").strip():
                errors.append(f"{t.get('id')}: missing solution_overview")
            for field in ("statements", "answer_key", "tactical_explanations", "highlights"):
                if len(t.get(field) or []) != 5:
                    errors.append(f"{t.get('id')}: {field} len != 5")
            for a, e in zip(t.get("answer_key") or [], t.get("tactical_explanations") or []):
                pref = "TRUE" if a else "FALSE"
                if not str(e).lstrip().startswith(("TRUE —", "TRUE—", "TRUE.", "FALSE —", "FALSE—", "FALSE.")):
                    # normalize later; soft for now
                    pass
                if a and not str(e).upper().startswith("TRUE"):
                    errors.append(f"{t.get('id')}: expl should be TRUE")
                if (not a) and not str(e).upper().startswith("FALSE"):
                    errors.append(f"{t.get('id')}: expl should be FALSE")
            n_true = sum(1 for x in (t.get("answer_key") or []) if x)
            if not (1 <= n_true <= 5):
                errors.append(f"{t.get('id')}: true count {n_true}")
            all_stmts.extend(t.get("statements") or [])
            tasks.append(t)

    print(f"parts present: {20 - len(missing)}/20 missing={missing}")
    print(f"tasks={len(tasks)}")
    uniq = len(set(all_stmts))
    print(f"statements unique/total={uniq}/{len(all_stmts)}")
    if len(all_stmts) != uniq:
        c = Counter(all_stmts)
        dups = [(n, s[:80]) for s, n in c.items() if n > 1][:10]
        print("dup samples:", dups)
        errors.append(f"duplicate statements: {len(all_stmts) - uniq}")

    if missing:
        print("WAIT: not merging until all parts exist")
        return 2

    if errors:
        print("AUDIT ISSUES:")
        for e in errors[:40]:
            print(" -", e)
        if len(errors) > 40:
            print(f" ... +{len(errors)-40}")
        # still merge if only soft? require no errors
        return 1

    payload = {"subsections": subsections, "tasks": tasks}
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {OUT}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
