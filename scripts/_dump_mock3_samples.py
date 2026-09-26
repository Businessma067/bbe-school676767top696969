# -*- coding: utf-8 -*-
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/data/mock-exam-3-sourced.json").read_text(encoding="utf-8"))
out = ROOT / "scripts/_mock3_samples.md"
parts = []

# Math: short calc (MATH 7), medium, logic heavy (13.36 or first logic), algebra steps
math_picks = [6, 0, 12]  # indices to dump fully
for ti in math_picks:
    task = data["math"][ti]
    parts.append(f"# MATH {ti} {task['case_id']} ak={task['answer_key']}")
    parts.append(f"## context\n{task.get('context','')[:800]}")
    stmts = task["statements"]
    for i, L in enumerate("ABCDE"):
        parts.append(f"## statement {L}\n{stmts[i]}")
        parts.append(f"## explanation {L} (len={len(task['tactical_explanations'][i])})\n{task['tactical_explanations'][i]}")
    parts.append("\n---\n")

# Econ picks: short and longer
econ_picks = [5, 0, 2]
for ti in econ_picks:
    task = data["economics"][ti]
    parts.append(f"# ECON {ti} {task['case_id']} ak={task['answer_key']}")
    parts.append(f"## context\n{task.get('context','')[:1200]}")
    stmts = task["statements"]
    for i, L in enumerate("ABCDE"):
        parts.append(f"## statement {L}\n{stmts[i]}")
        parts.append(f"## explanation {L} (len={len(task['tactical_explanations'][i])})\n{task['tactical_explanations'][i]}")
    parts.append("\n---\n")

out.write_text("\n".join(parts), encoding="utf-8")
print("wrote", out, "chars", out.stat().st_size)
