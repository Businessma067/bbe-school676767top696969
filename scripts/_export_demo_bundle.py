# -*- coding: utf-8 -*-
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
bundle = {}
for subj in ["math", "economics"]:
    bundle[subj] = []
    for ti, t in enumerate(data[subj]):
        bundle[subj].append({
            "i": ti,
            "case_id": t["case_id"],
            "title": t.get("title"),
            "context": t.get("context"),
            "statements": t["statements"],
            "answer_key": t["answer_key"],
            "current_lens": [len(x) for x in t["tactical_explanations"]],
            "current": t["tactical_explanations"],
        })
out = ROOT / "scripts/_demo_bundle.json"
out.write_text(json.dumps(bundle, ensure_ascii=False, indent=2), encoding="utf-8")
print("wrote", out, "bytes", out.stat().st_size)
