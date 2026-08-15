# -*- coding: utf-8 -*-
import json
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.20.json")
data = json.loads(p.read_text(encoding="utf-8"))
letters = "ABCDE"
tips = traps = both = 0
for t in data["tasks"]:
    assert len(t["statements"]) == len(t["answer_key"]) == len(t["tactical_explanations"]) == 5
    for i, (s, k, e) in enumerate(zip(t["statements"], t["answer_key"], t["tactical_explanations"])):
        assert e.startswith(f"**{letters[i]}) {s}")
        first = e.split("\n")[0]
        assert "(true)" not in first and "(false)" not in first
        last = e.strip().split("\n")[-1]
        if k:
            assert last.startswith("So the statement holds:"), (t["id"], letters[i], last)
        else:
            assert last.startswith("So the statement is false:"), (t["id"], letters[i], last)
        has_tip = "**Tip:**" in e
        has_trap = "**Trap:**" in e
        if has_tip:
            tips += 1
        if has_trap:
            traps += 1
        if has_tip and has_trap:
            both += 1

sample = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_g20_expl_sample.txt")
sample.write_text(
    "\n====\n".join(
        [
            data["tasks"][0]["tactical_explanations"][0],
            data["tasks"][0]["tactical_explanations"][1],
            data["tasks"][11]["tactical_explanations"][0],
            data["tasks"][-1]["tactical_explanations"][-1],
        ]
    ),
    encoding="utf-8",
)
print(f"OK tips={tips} traps={traps} both={both} total={20*5}")
