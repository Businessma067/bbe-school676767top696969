# -*- coding: utf-8 -*-
import json
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.9.json")
d = json.loads(p.read_text(encoding="utf-8"))
bad = []
tips = traps = 0
for t in d["tasks"]:
    for i, (s, e, k) in enumerate(zip(t["statements"], t["tactical_explanations"], t["answer_key"])):
        letter = "ABCDE"[i]
        stmt = s if s.endswith((".", "?", "!")) else s + "."
        expect = f"**{letter}) {stmt}**"
        if not e.startswith(expect):
            bad.append((t["id"], letter, "header mismatch", e[:80]))
        if "**Tip:**" in e:
            tips += 1
        if "Trap:" in e:
            traps += 1
        if k and not e.rstrip().split("\n")[-1].startswith("So the statement holds"):
            bad.append((t["id"], letter, "missing/true closing"))
        if (not k) and not e.rstrip().split("\n")[-1].startswith("So the statement is false"):
            bad.append((t["id"], letter, "missing/false closing"))
        if "(true)" in e or "(false)" in e:
            bad.append((t["id"], letter, "bare true/false tag"))

print(f"tips={tips} traps={traps} bad={len(bad)}")
for b in bad[:15]:
    print(b)
print("---T1A---")
print(d["tasks"][0]["tactical_explanations"][0])
print("---T2C---")
print(d["tasks"][1]["tactical_explanations"][2])
print("---T17E---")
print(d["tasks"][16]["tactical_explanations"][4])
