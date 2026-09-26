# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
by = {t["case_id"]: t for t in data["math"]}
e = by["DEMO MATH 8.H01"]["tactical_explanations"][2]
e = e.replace(
    "Parallel affine tariffs with a positive gap never meet.",
    "Parallel affine tariffs with a fixed positive gap never meet, so no break-even distance exists.",
)
by["DEMO MATH 8.H01"]["tactical_explanations"][2] = e

for subject in ("economics", "math"):
    lens = [len(x) for t in data[subject] for x in t["tactical_explanations"]]
    blocks = [x.count(DD) // 2 for t in data[subject] for x in t["tactical_explanations"]]
    print(
        subject,
        "avg",
        round(sum(lens) / len(lens), 1),
        "min",
        min(lens),
        "max",
        max(lens),
        "bavg",
        round(sum(blocks) / len(blocks), 2),
    )

errors = []
checked = 0
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, letter in enumerate("ABCDE"):
            checked += 1
            want = "True" if task["answer_key"][i] else "False"
            expl = task["tactical_explanations"][i]
            if not expl.startswith(f"**{letter}.** → {want}"):
                errors.append(f"{task['case_id']} {letter}")
            if expl.count(DD) % 2:
                errors.append(f"$$ {task['case_id']} {letter}")
print("checked", checked, "errors", len(errors))
if errors:
    raise SystemExit(1)

PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
ts = TS.read_text(encoding="utf-8")
ts2, n = re.subn(
    r'export const MOCK_EXAM_DEMO_CONTENT_REV\s*=\s*\n?\s*"[^"]*";',
    f'export const MOCK_EXAM_DEMO_CONTENT_REV =\n  "{REV}";',
    ts,
    count=1,
)
assert n == 1
TS.write_text(ts2, encoding="utf-8")
print("wrote")
