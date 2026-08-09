#!/usr/bin/env python3
"""Merge texts_expl_patches/t.N.json into src/data/english/texts.json."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BANK = ROOT / "src" / "data" / "english" / "texts.json"
PATCH_DIR = ROOT / "textbook" / "output" / "texts_expl_patches"


def main() -> None:
    bank = json.loads(BANK.read_text(encoding="utf-8"))
    by_id = {t["id"]: t for t in bank["tasks"]}
    patches = sorted(PATCH_DIR.glob("t.*.json"))
    # exclude *_INPUT.json
    patches = [p for p in patches if not p.name.endswith("_INPUT.json")]
    if not patches:
        raise SystemExit("No patch files found")

    updated_tasks = 0
    missing_hl = 0
    bad_hl = 0
    for path in patches:
        data = json.loads(path.read_text(encoding="utf-8"))
        sid = data["subsection_id"]
        sub = next(s for s in bank["subsections"] if s["id"] == sid)
        passage = sub["passage"]
        for pt in data["tasks"]:
            tid = pt["id"]
            if tid not in by_id:
                raise SystemExit(f"{path.name}: unknown task {tid}")
            expls = pt["tactical_explanations"]
            highs = pt["highlights"]
            if len(expls) != 5 or len(highs) != 5:
                raise SystemExit(f"{tid}: need 5 explanations and 5 highlights")
            for h in highs:
                if not h:
                    missing_hl += 1
                    continue
                if h not in passage:
                    bad_hl += 1
                    print(f"WARN {tid}: highlight not in passage: {h[:80]!r}")
            by_id[tid]["tactical_explanations"] = expls
            by_id[tid]["highlights"] = highs
            updated_tasks += 1
        print(f"merged {path.name}: {len(data['tasks'])} tasks")

    BANK.write_text(json.dumps(bank, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {updated_tasks} tasks → {BANK}")
    print(f"empty highlights: {missing_hl}, bad highlights: {bad_hl}")


if __name__ == "__main__":
    main()
