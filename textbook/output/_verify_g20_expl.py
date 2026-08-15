# -*- coding: utf-8 -*-
import json
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.20.json")
new = json.loads(p.read_text(encoding="utf-8"))
letters = "ABCDE"
t = new["tasks"][0]
print("--- overview ---")
print(t["solution_overview"][:600])
print("--- A ---")
print(t["tactical_explanations"][0])
print("--- B ---")
print(t["tactical_explanations"][1])
print("answer_key", t["answer_key"])

for task in new["tasks"]:
    ov = task["solution_overview"]
    assert "**Part 1: What to watch for.**" in ov
    assert "**Part 2: How to decide.**" in ov
    assert "**Answer.**" in ov
    for i, (s, k, e) in enumerate(zip(task["statements"], task["answer_key"], task["tactical_explanations"])):
        prefix = f"**{letters[i]}) {s}"
        assert e.startswith(prefix), (task["id"], i, e[:80], prefix[:80])
        first = e.split("\n")[0]
        assert ("(true)" in first) == k, (task["id"], i, first, k)
        assert ("(false)" in first) == (not k), (task["id"], i, first, k)
print("ALL 20 TASKS VALID")
print("tasks", len(new["tasks"]))
