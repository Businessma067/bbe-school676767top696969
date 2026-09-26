# -*- coding: utf-8 -*-
import json
from pathlib import Path

d = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
DD = "$$"

rows = []
for s in ("economics", "math"):
    for t in d[s]:
        for i, e in enumerate(t["tactical_explanations"]):
            rows.append((len(e), e.count(DD) // 2, s, t["case_id"], "ABCDE"[i], e))

rows.sort(reverse=True)
out = []
for r in rows[:6]:
    out.append(f"=== {r[2]} {r[3]} {r[4]} len={r[0]} blocks={r[1]}\n{r[5]}\n")
Path("scripts/_outliers.txt").write_text("\n".join(out), encoding="utf-8")
print("top", [(r[3], r[4], r[0], r[1]) for r in rows[:8]])
print("econ", end=" ")
xs = [r for r in rows if r[2] == "economics"]
print(round(sum(x[0] for x in xs) / len(xs), 1), round(sum(x[1] for x in xs) / len(xs), 2))
print("math", end=" ")
xs = [r for r in rows if r[2] == "math"]
print(round(sum(x[0] for x in xs) / len(xs), 1), round(sum(x[1] for x in xs) / len(xs), 2))
