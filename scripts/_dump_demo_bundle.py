# -*- coding: utf-8 -*-
"""
Dump every demo letter (stmt + key + expl) as JSON for the rewrite pass.
"""
import json
from pathlib import Path

data = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
out = {"economics": [], "math": []}
for sub in ("economics", "math"):
    for t in data[sub]:
        out[sub].append(
            {
                "case_id": t["case_id"],
                "statements": t["statements"],
                "answer_key": t["answer_key"],
                "expl_lens": [len(e) for e in t["tactical_explanations"]],
                "expl_blocks": [e.count("$$") // 2 for e in t["tactical_explanations"]],
                "tactical_explanations": t["tactical_explanations"],
                "solution_overview": (t.get("solution_overview") or "")[:500],
            }
        )
Path("scripts/_demo_expl_bundle.json").write_text(
    json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
)
print("wrote bundle", {s: len(out[s]) for s in out})
