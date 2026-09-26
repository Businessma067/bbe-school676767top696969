# -*- coding: utf-8 -*-
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/data/mock-exam-3-sourced.json").read_text(encoding="utf-8"))
parts = []
for ti, task in enumerate(data["economics"]):
    if not str(task["case_id"]).startswith("CASE 6"):
        continue
    te = task["tactical_explanations"]
    lens = [len(x) for x in te]
    parts.append(f"# {ti} {task['case_id']} ak={task['answer_key']} lens={lens}")
    parts.append(f"## context\n{task.get('context','')[:1500]}")
    for i, L in enumerate("ABCDE"):
        parts.append(f"## statement {L}\n{task['statements'][i]}")
        parts.append(f"## expl {L} (len={len(te[i])})\n{te[i]}")
    parts.append("\n====\n")
out = ROOT / "scripts/_mock3_econ6.md"
out.write_text("\n".join(parts), encoding="utf-8")
print("wrote", out, out.stat().st_size)
