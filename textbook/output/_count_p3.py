#!/usr/bin/env python3
import re
from pathlib import Path

t = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\math-ch11-financial.ts").read_text(
    encoding="utf-8"
)
print("Part3 headers", len(re.findall(r"\*\*Part 3: Solve\.\*\*", t)))
print("task ids", len(re.findall(r"id: `math-11-\d+`", t)))

steps = 0
for n in range(41, 81):
    m = re.search(
        rf"id: `math-11-{n}`,.*?\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*",
        t,
        re.S,
    )
    steps += len(re.findall(r"^\*\*\d+\.\*\*", m.group(1), re.M))
print("steps 41-80", steps)

# any task with 2 Part 3?
for n in range(1, 101):
    m = re.search(rf"id: `math-11-{n}`,(.*?)(?=id: `math-11-\d+`|\Z)", t, re.S)
    if not m:
        continue
    c = len(re.findall(r"\*\*Part 3: Solve\.\*\*", m.group(1)))
    if c != 1:
        print(f"math-11-{n} has {c} Part3")
