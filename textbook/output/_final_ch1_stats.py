# -*- coding: utf-8 -*-
import json, re, statistics, sys
from pathlib import Path
sys.stdout.reconfigure(encoding="utf-8")

tasks = json.loads(Path("textbook/output/_ch1_tasks_dump.json").read_text(encoding="utf-8"))
HEADER = re.compile(r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*\n*", re.I)

def odd_dollars(s):
    n = 0
    i = 0
    while i < len(s):
        if s[i] == "\\" and i + 1 < len(s) and s[i + 1] == "$":
            i += 2
            continue
        if s.startswith("$$", i):
            i += 2
            continue
        if s[i] == "$":
            n += 1
        i += 1
    return n % 2

words, paras, ratios = [], [], []
odd = []
pads = []
bans = ["Name the concrete", "Write the claimed arrow", "Once the English", "Pull the one shared", "Holding the claim", "Use the scenario above", "**Part 1", "**Answer.**", "Step 1"]
for t in tasks:
    ws = []
    for e in t["tactical_explanations"]:
        body = HEADER.sub("", e)
        w = len(re.findall(r"\b\w+\b", body))
        p = len([x for x in body.split("\n\n") if x.strip()])
        words.append(w); paras.append(p); ws.append(w)
    ratios.append(max(ws)/max(1,min(ws)))
    for field, val in [("ctx", t["context"]), ("ov", t["solution_overview"])] + [(f"s{i}", s) for i,s in enumerate(t["statements"])] + [(f"e{i}", e) for i,e in enumerate(t["tactical_explanations"])]:
        if odd_dollars(val):
            odd.append((t["id"], field, val[:120].replace("\n"," ")))
        for b in bans:
            if b in val:
                pads.append((t["id"], b))

print("words min/med/max", min(words), statistics.median(words), max(words))
print("paras min/med/max", min(paras), statistics.median(paras), max(paras))
print("within-task ratio min/med/max", min(ratios), statistics.median(ratios), max(ratios))
print("odd $", len(odd))
for o in odd[:20]:
    print(" ", o)
print("pads", len(pads), pads[:10])
# D3 / minus scars
for t in tasks:
    blob = "\n".join([t["context"], t["solution_overview"], *t["statements"], *t["tactical_explanations"]])
    if "in D 3" in blob or "-$" in blob or r"= \emptyset)" in blob:
        print("SCAR", t["id"])
# sample overviews
print("=== OV1 ===")
print(tasks[0]["solution_overview"][:400])
print("=== EXPL hard 108 D ===")
print(tasks[-1]["tactical_explanations"][3][:900])
