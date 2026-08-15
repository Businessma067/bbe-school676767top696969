# -*- coding: utf-8 -*-
import json, sys
from pathlib import Path
sys.stdout.reconfigure(encoding="utf-8")
tasks = {t["id"]: t for t in json.loads(Path("textbook/output/_ch1_tasks_dump.json").read_text(encoding="utf-8"))}
for tid in ["math-1-38", "math-1-39"]:
    print("====", tid)
    print(tasks[tid]["tactical_explanations"][2])
    print()
