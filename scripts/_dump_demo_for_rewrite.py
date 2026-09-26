# -*- coding: utf-8 -*-
"""Dump full demo math+econ tasks for rewriting."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
out_dir = ROOT / "scripts/_demo_rewrite_dumps"
out_dir.mkdir(exist_ok=True)

# also save before stats
before = {"math": [], "economics": []}

for subj in ["math", "economics"]:
    parts = []
    for ti, task in enumerate(data[subj]):
        te = task["tactical_explanations"]
        lens = [len(x) for x in te]
        before[subj].append({"case_id": task["case_id"], "lens": lens, "spread": max(lens) - min(lens)})
        parts.append(f"# {ti} {task['case_id']} chapter={task.get('chapter')} ak={task['answer_key']}")
        parts.append(f"## title\n{task.get('title','')}")
        parts.append(f"## context\n{task.get('context','')}")
        stmts = task["statements"]
        for i, L in enumerate("ABCDE"):
            parts.append(f"## statement {L}\n{stmts[i]}")
            parts.append(f"## CURRENT explanation {L} (len={len(te[i])})\n{te[i]}")
        parts.append("\n========\n")
    (out_dir / f"{subj}.md").write_text("\n".join(parts), encoding="utf-8")
    print(subj, "wrote", len(parts), "sections")

(ROOT / "scripts/_before_stats.json").write_text(json.dumps(before, indent=2), encoding="utf-8")
print("before stats saved")
