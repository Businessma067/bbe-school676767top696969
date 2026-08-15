# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

t = json.loads(Path(__file__).with_name("_ch1_tasks_dump.json").read_text(encoding="utf-8"))
for u in t:
    blob = "\n".join(
        [u["context"], u["solution_overview"], *u["statements"], *u["tactical_explanations"]]
    )
    if "cond$1" in blob or "($frost" in blob or "-$3" in blob or "\\emptyset)" in blob:
        print("scar", u["id"])
    if re.search(r"\$[^$\n]{0,50}\(\$", blob):
        m = re.search(r".{0,30}\$[^$\n]{0,50}\(\$.{0,30}", blob)
        print("nest", u["id"], (m.group(0).replace("\n", "|") if m else ""))

ws, ps = [], []
single_all = 0
for u in t:
    ww, pp = [], []
    for e in u["tactical_explanations"]:
        b = re.sub(r"^\*\*[A-E]\.\*\*[^\n]*\n*", "", e)
        ww.append(len(re.findall(r"\S+", b)))
        pp.append(len([x for x in re.split(r"\n\s*\n", b.strip()) if x.strip()]))
    ws += ww
    ps += pp
    if all(p <= 1 for p in pp):
        single_all += 1
print(
    "words",
    min(ws),
    sorted(ws)[len(ws) // 2],
    max(ws),
)
print(
    "paras",
    min(ps),
    sorted(ps)[len(ps) // 2],
    max(ps),
    "pct>=3",
    round(sum(1 for p in ps if p >= 3) / len(ps), 2),
    "single_all",
    single_all,
)
u = next(x for x in t if x["id"] == "math-1-1")
print("---1B---")
print(u["tactical_explanations"][1][:600])
u = next(x for x in t if x["id"] == "math-1-108")
print("108 words", [len(re.findall(r"\S+", re.sub(r"^\*\*[A-E]\.\*\*[^\n]*\n*", "", e))) for e in u["tactical_explanations"]])
print("108 paras", [len([x for x in re.split(r"\n\s*\n", re.sub(r"^\*\*[A-E]\.\*\*[^\n]*\n*", "", e).strip()) if x.strip()]) for e in u["tactical_explanations"]])
