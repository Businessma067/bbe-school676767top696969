# -*- coding: utf-8 -*-
import json
from pathlib import Path

d = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
DD = "$$"
for t in d["math"]:
    lens = [len(e) for e in t["tactical_explanations"]]
    bl = [e.count(DD) // 2 for e in t["tactical_explanations"]]
    print(t["case_id"], lens, "avg", round(sum(lens) / 5), "b", bl)
print("---")
xs = [len(e) for t in d["math"] for e in t["tactical_explanations"]]
print("overall", round(sum(xs) / len(xs), 1))
