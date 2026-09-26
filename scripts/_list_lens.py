# -*- coding: utf-8 -*-
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/data/mock-exam-3-sourced.json").read_text(encoding="utf-8"))
for subj in ["math", "economics"]:
    print("====", subj)
    for ti, task in enumerate(data[subj]):
        te = task["tactical_explanations"]
        lens = [len(x) for x in te]
        print(ti, task["case_id"], lens, "spread", max(lens) - min(lens))
