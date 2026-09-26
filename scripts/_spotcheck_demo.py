# -*- coding: utf-8 -*-
import json
from pathlib import Path

d = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
DD = "$$"
want = [
    ("CASE 6.5.034", 0),
    ("CASE 6.4.010", 1),
    ("DEMO MATH 5.H01", 0),
    ("DEMO MATH 8.H01", 2),
    ("DEMO MATH 11.H01", 0),
    ("MATH 13.108", 4),
    ("DEMO MATH 4.H02", 0),
]
by = {t["case_id"]: t for t in d["economics"] + d["math"]}
chunks = []
for cid, i in want:
    e = by[cid]["tactical_explanations"][i]
    chunks.append(f"=== {cid} {'ABCDE'[i]} len={len(e)} blocks={e.count(DD)//2}\n{e}\n")
Path("scripts/_spotcheck.txt").write_text("\n".join(chunks), encoding="utf-8")
print("ok")
