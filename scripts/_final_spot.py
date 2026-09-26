# -*- coding: utf-8 -*-
import json
from pathlib import Path

d = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
by = {t["case_id"]: t for t in d["math"]}
parts = []
for cid, i in [("DEMO MATH 5.H01", 1), ("DEMO MATH 8.H01", 0), ("DEMO MATH 8.H01", 3), ("CASE 6.5.034", 0)]:
    if cid.startswith("CASE"):
        t = next(x for x in d["economics"] if x["case_id"] == cid)
    else:
        t = by[cid]
    e = t["tactical_explanations"][i]
    parts.append(f"=== {cid} {'ABCDE'[i]} len={len(e)}\n{e}\n")
Path("scripts/_final_spot.txt").write_text("\n".join(parts), encoding="utf-8")
print("ok")
