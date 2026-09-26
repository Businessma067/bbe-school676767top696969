# -*- coding: utf-8 -*-
import json
from pathlib import Path

d = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
t = next(x for x in d["math"] if x["case_id"] == "DEMO MATH 5.H01")
Path("scripts/_5c.txt").write_text(t["tactical_explanations"][2], encoding="utf-8")
print(len(t["tactical_explanations"][2]), t["tactical_explanations"][2].count("$$") // 2)
