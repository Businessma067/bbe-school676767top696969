# -*- coding: utf-8 -*-
import json
from pathlib import Path

d = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
t = next(x for x in d["math"] if x["case_id"] == "DEMO MATH 9.H01")
Path("scripts/_9a.txt").write_text(
    f"key={t['answer_key'][0]}\nstmt={t['statements'][0]}\n\nCURRENT:\n{t['tactical_explanations'][0]}",
    encoding="utf-8",
)
print("ok", len(t["tactical_explanations"][0]))
