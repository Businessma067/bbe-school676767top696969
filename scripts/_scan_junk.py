# -*- coding: utf-8 -*-
"""Scan for leftover junk micro-step patterns."""
import json
import re
from pathlib import Path

d = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
flags = []
patterns = [
    (r"90-20=70", "orphan subtract"),
    (r"First the constant piece", "padding"),
    (r"Differentiate the first term", "padding"),
    (r"Recover \$p\$ once more", "padding"),
    (r"35\\cdot 100=3500", "micro split"),
    (r"Try a concrete candidate", "redundant cases"),
    (r"\\text\{[^}]+\} = \\frac\{\\text", "formula teach"),
    (r"9\+0\.6=9\.6", "orphan"),
    (r"0\.00144\+0\.000096", "orphan"),
]
for sub in ("economics", "math"):
    for t in d[sub]:
        for i, e in enumerate(t["tactical_explanations"]):
            for pat, label in patterns:
                if re.search(pat, e):
                    flags.append(f"{t['case_id']} {'ABCDE'[i]}: {label}")
print("flags", len(flags))
for f in flags:
    print(f)
