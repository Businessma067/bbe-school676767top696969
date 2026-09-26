# -*- coding: utf-8 -*-
import json
from pathlib import Path

d = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
DD = "$$"
rows = []
for t in d["math"]:
    for i, e in enumerate(t["tactical_explanations"]):
        rows.append((len(e), e.count(DD) // 2, t["case_id"], "ABCDE"[i], e))
rows.sort()
lines = []
for r in rows[:10]:
    lines.append(f"=== SHORT {r[2]} {r[3]} len={r[0]} blocks={r[1]}\n{r[4]}\n")
for r in sorted(rows, reverse=True)[:5]:
    lines.append(f"=== LONG {r[2]} {r[3]} len={r[0]} blocks={r[1]}\n{r[4][:800]}\n")
# fixed spotchecks
by = {t["case_id"]: t for t in d["math"]}
for cid, i in [("DEMO MATH 5.H01", 0), ("DEMO MATH 8.H01", 2), ("DEMO MATH 11.H01", 0), ("MATH 13.108", 4)]:
    e = by[cid]["tactical_explanations"][i]
    lines.append(f"=== FIXED {cid} {'ABCDE'[i]} len={len(e)} blocks={e.count(DD)//2}\n{e}\n")
Path("scripts/_spotcheck2.txt").write_text("\n".join(lines), encoding="utf-8")
print("math avg", round(sum(r[0] for r in rows) / len(rows), 1), "bavg", round(sum(r[1] for r in rows) / len(rows), 2))
print("shortest", [(r[2], r[3], r[0]) for r in rows[:8]])
