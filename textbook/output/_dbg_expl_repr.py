# -*- coding: utf-8 -*-
import json
from pathlib import Path
t = json.loads(Path(__file__).with_name("_ch1_tasks_dump.json").read_text(encoding="utf-8"))
for tid, idx in [("math-1-75", 3), ("math-1-99", 3)]:
    e = next(x for x in t if x["id"] == tid)["tactical_explanations"][idx]
    Path(__file__).with_name(f"_dbg_{tid}.txt").write_text(repr(e), encoding="utf-8")
print("ok")
