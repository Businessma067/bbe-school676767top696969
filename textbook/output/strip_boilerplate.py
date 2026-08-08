# -*- coding: utf-8 -*-
"""Strip repetitive boilerplate from detailed batch explanations, then remerge."""
from __future__ import annotations

import json
import re
from pathlib import Path

BATCH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\batches")

BOILER = [
    r"Each line of arithmetic is displayed separately\..*?(?:\n\n|$)",
    r"The system above has already produced the relevant values, so we use those values rather than estimating from the story\..*?(?:\n\n|$)",
    r"This keeps the reasoning tied to both original equations, not to just one piece of data\.\s*",
    r"As a final sense check, return to the wording rather than only the last number\..*?(?:\n\n|$)",
    r"First identify what it is actually asserting: it is not enough to recognize familiar-looking numbers from the prompt\.\s*",
    r"The statement must be tested against the solved values and against the exact condition it mentions\.\s*",
]


def clean_block(text: str) -> str:
    out = text
    for pat in BOILER:
        out = re.sub(pat, "", out, flags=re.S)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out.strip()


for path in sorted(BATCH.glob("detailed_*.json")):
    arr = json.loads(path.read_text(encoding="utf-8"))
    changed = 0
    for item in arr:
        before = item["solution_overview"]
        item["solution_overview"] = clean_block(before)
        if item["solution_overview"] != before:
            changed += 1
        for i, e in enumerate(item["tactical_explanations"]):
            c = clean_block(e)
            if c != e:
                item["tactical_explanations"][i] = c
                changed += 1
    path.write_text(json.dumps(arr, ensure_ascii=False, indent=2), encoding="utf-8")
    print(path.name, "cleaned segments ~", changed)
