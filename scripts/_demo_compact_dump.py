# -*- coding: utf-8 -*-
"""Compact dump: statements + ak only for all demo tasks."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
parts = []
for subj in ["math", "economics"]:
    parts.append(f"\n{'='*60}\n{subj.upper()}\n{'='*60}")
    for ti, t in enumerate(data[subj]):
        parts.append(f"\n### {ti} {t['case_id']} ak={t['answer_key']}")
        parts.append(f"CTX:\n{t['context'][:600]}")
        for i, L in enumerate("ABCDE"):
            parts.append(f"{L}: {t['statements'][i]}")
out = ROOT / "scripts/_demo_compact.md"
out.write_text("\n".join(parts), encoding="utf-8")
print("wrote", out.stat().st_size)
