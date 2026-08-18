#!/usr/bin/env python3
"""Validate ingested true/false question banks.

Flags questions where 2+ statements share byte-identical explanation text
(after stripping the Statement X — True/False header). Real per-statement
writeups should not collide even when they reuse the same formula family.
"""

from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
LETTERS = "ABCDE"


def explanation_body(text: str) -> str:
    s = (text or "").replace("**", "")
    lines = s.splitlines()
    if lines and lines[0].lower().startswith("statement "):
        lines = lines[1:]
    return "\n".join(lines).strip()


def iter_case_files() -> list[Path]:
    return sorted(
        p
        for p in DATA.glob("*.json")
        if "cases" in p.name and p.name != "book-embeddings.json"
    )


def load_tasks(path: Path) -> list[dict]:
    data = json.loads(path.read_text())
    if isinstance(data, list):
        return [t for t in data if isinstance(t, dict)]
    if isinstance(data, dict) and isinstance(data.get("tasks"), list):
        return data["tasks"]
    return []


def audit_file(path: Path) -> list[dict]:
    hits = []
    for task in load_tasks(path):
        expls = task.get("tactical_explanations") or task.get("explanations") or []
        bodies = [explanation_body(e) for e in expls]
        counts = Counter(b for b in bodies if b)
        dups = {b: n for b, n in counts.items() if n >= 2}
        if not dups:
            continue
        letters_by_body = {}
        for i, body in enumerate(bodies):
            if body in dups:
                letters_by_body.setdefault(body, []).append(LETTERS[i] if i < 5 else str(i))
        sample = max(dups, key=len)
        hits.append(
            {
                "file": path.name,
                "id": task.get("id") or task.get("case_id") or task.get("title"),
                "subsection": task.get("subsection") or "",
                "shared_by": max(dups.values()),
                "letters": letters_by_body.get(sample, []),
                "generic_placeholder": "Organize counts into a table" in sample,
                "sample": sample[:160].replace("\n", " / "),
            }
        )
    return hits


def main() -> int:
    all_hits = []
    print(f"{'file':40} {'tasks':>6} {'dup>=2':>7}")
    for path in iter_case_files():
        tasks = load_tasks(path)
        hits = audit_file(path)
        all_hits.extend(hits)
        print(f"{path.name:40} {len(tasks):6} {len(hits):7}")
    print()
    if not all_hits:
        print("No duplicate per-statement explanations found.")
        return 0
    print(f"FLAGGED {len(all_hits)} questions with identical explanation text:")
    for h in all_hits:
        print(
            f"  {h['id']:18} {h['subsection']:6} n={h['shared_by']} "
            f"letters={''.join(h['letters'])} generic={h['generic_placeholder']}"
        )
    return 1


if __name__ == "__main__":
    sys.exit(main())
