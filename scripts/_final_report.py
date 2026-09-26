# -*- coding: utf-8 -*-
import json
import re
import subprocess
from pathlib import Path

ts = Path("src/lib/mock-exam-demo-content.ts").read_text(encoding="utf-8")
m = re.search(r'MOCK_EXAM_DEMO_CONTENT_REV\s*=\s*\n?\s*"([^"]+)"', ts)
print("REV:", m.group(1) if m else "MISSING")

stat = subprocess.check_output(
    ["git", "diff", "--stat", "--", "src/data/mock-exam-demo-sourced.json", "src/lib/mock-exam-demo-content.ts"],
    text=True,
)
print(stat)

# Ensure statements/answer_key/case_id unchanged vs HEAD for structure
head = subprocess.check_output(
    ["git", "show", "HEAD:src/data/mock-exam-demo-sourced.json"],
    text=True,
    encoding="utf-8",
)
old = json.loads(head)
new = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
for sub in ("economics", "math"):
    for o, n in zip(old[sub], new[sub]):
        assert o["case_id"] == n["case_id"]
        assert o["statements"] == n["statements"]
        assert o["answer_key"] == n["answer_key"]
print("statements/answer_key/case_id unchanged: OK")

DD = "$$"
print("\nBEFORE (HEAD) / AFTER")
for label, data in (("BEFORE", old), ("AFTER", new)):
    for sub in ("economics", "math"):
        lens = [len(e) for t in data[sub] for e in t["tactical_explanations"]]
        blocks = [e.count(DD) // 2 for t in data[sub] for e in t["tactical_explanations"]]
        print(
            label,
            sub,
            "n=",
            len(lens),
            "avg=",
            round(sum(lens) / len(lens), 1),
            "min=",
            min(lens),
            "max=",
            max(lens),
            "$$avg=",
            round(sum(blocks) / len(blocks), 2),
        )
