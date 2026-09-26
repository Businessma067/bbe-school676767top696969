# -*- coding: utf-8 -*-
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
parts = []
for subj in ["math", "economics"]:
    for ti, t in enumerate(data[subj]):
        ov = t.get("solution_overview") or ""
        parts.append(f"## {subj} {ti} {t['case_id']} ovlen={len(ov)}")
        parts.append(ov)
        parts.append("---")
out = ROOT / "scripts/_demo_overviews.md"
out.write_text("\n".join(parts), encoding="utf-8")
print("done", out.stat().st_size)
