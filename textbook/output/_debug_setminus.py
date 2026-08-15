# -*- coding: utf-8 -*-
import json, re, sys
from pathlib import Path
sys.stdout.reconfigure(encoding="utf-8")
tasks = {t["id"]: t for t in json.loads(Path("textbook/output/_ch1_tasks_dump.json").read_text(encoding="utf-8"))}
for tid in ["math-1-5", "math-1-38", "math-1-39"]:
    t = tasks[tid]
    print("====", tid)
    for i, s in enumerate(t["statements"]):
        if "setminus" in s:
            print(f" stmt{i}:", repr(s))
    for i, e in enumerate(t["tactical_explanations"]):
        if "setminus" in e and "$" not in e[e.find("setminus") - 20 : e.find("setminus") + 5]:
            # find bare
            for m in re.finditer(r".{0,30}\\setminus.{0,30}", e):
                print(f" expl{i}:", repr(m.group(0)))
