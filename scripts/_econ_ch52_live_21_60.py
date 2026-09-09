#!/usr/bin/env python3
"""Apply live-teacher rewrites for CASE 5.2.21–CASE 5.2.60."""
from __future__ import annotations
import json, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src/data/economics-cases-ch5-subtopics.json"
REWRITES = Path(__file__).with_name("_econ_ch52_live_21_60.json")
def main() -> int:
    rewrites = json.loads(REWRITES.read_text())
    data = json.loads(DATA.read_text())
    by = {c["case_id"]: c for c in data}
    for cid, expl in rewrites.items():
        by[cid]["tactical_explanations"] = expl
    DATA.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Applied {len(rewrites)} cases")
    return 0
if __name__ == "__main__":
    raise SystemExit(main())
