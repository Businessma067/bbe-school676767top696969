# -*- coding: utf-8 -*-
import json, re, statistics
from collections import Counter
from pathlib import Path

tasks = json.loads(Path(__file__).with_name("_ch1_tasks_dump.json").read_text(encoding="utf-8"))
print("n", len(tasks))
t = tasks[0]
print("SAMPLE", t["id"], t["title"])
print("OVERVIEW:\n", t["solution_overview"][:800])
print("---A---\n", t["tactical_explanations"][0][:1000])
print("---C---\n", t["tactical_explanations"][2][:1000])

pads = [
    "Name the concrete",
    "Write the claimed arrow",
    "Once the English is translated",
    "Pull the one shared fact",
    "Holding the claim",
    "Use the scenario above",
    "Part 1",
    "Step 1",
]
for p in pads:
    c = sum(
        1
        for t in tasks
        for e in t["tactical_explanations"] + [t["solution_overview"]]
        if p in e
    )
    if c:
        print("pad", p, c)

words, paras = [], []
for t in tasks:
    for e in t["tactical_explanations"]:
        body = re.sub(r"^\*\*[A-E]\.\*\* → (True|False)\n\n", "", e)
        words.append(len(re.findall(r"\b\w+\b", body)))
        paras.append(len([p for p in body.split("\n\n") if p.strip()]))
print("words min/med/max", min(words), statistics.median(words), max(words))
print("paras min/med/max", min(paras), statistics.median(paras), max(paras))

ratios = []
for t in tasks:
    ws = []
    for e in t["tactical_explanations"]:
        body = re.sub(r"^\*\*[A-E]\.\*\* → (True|False)\n\n", "", e)
        ws.append(len(re.findall(r"\b\w+\b", body)))
    ratios.append(max(ws) / max(1, min(ws)))
print("within-task word ratio med/min/max", statistics.median(ratios), min(ratios), max(ratios))

pat = re.compile(
    r"-\$|=\s*\\emptyset\)|\\emptyset\s+\\in\s+\w+\s+\d|"
    r"\$[^$\n]{0,80}\([^)$]{0,40}\)|(?<!\$)\bx\^2\b|(?<!\$)\b2\^3\b"
)
scars = []
for t in tasks:
    fields = [("ctx", t["context"]), ("ov", t["solution_overview"])]
    fields += [(f"s{i}", s) for i, s in enumerate(t["statements"])]
    fields += [(f"e{i}", e) for i, e in enumerate(t["tactical_explanations"])]
    for field, val in fields:
        for m in pat.finditer(val):
            scars.append(
                (
                    t["id"],
                    field,
                    m.group(),
                    val[max(0, m.start() - 25) : m.end() + 25].replace("\n", " "),
                )
            )
print("scar count", len(scars))
for s in scars[:25]:
    print(s)
print("subs", Counter(t["subsection"] for t in tasks))
print("diff", Counter(t["difficulty_level"] for t in tasks))
