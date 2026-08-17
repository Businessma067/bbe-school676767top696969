#!/usr/bin/env python3
"""List Ch11 statements with giveaway wording (comparison+verdict baked in)."""
from __future__ import annotations

import re
from pathlib import Path

# Use node to export? Parse TS lightly via regex on statements arrays.
text = Path("src/data/math-ch11-financial.ts").read_text(encoding="utf-8")

# Split by task id
tasks = re.split(r"\n  \{\n    id: `", text)[1:]
pat = re.compile(
    r"(UNDERVALUED|OVERVALUED|good buy|worse buy|"
    r"which is below|which is above|which exceeds|which is less than|"
    r"which is more than|making it|so the stock|so it is|"
    r"UNDERSTATES|OVERSTATES|shortfall is said|"
    r"which would be LESS|which would be MORE)",
    re.I,
)

n = 0
for chunk in tasks:
    m = re.match(r"(math-11-\d+)`", chunk)
    if not m:
        continue
    tid = m.group(1)
    sm = re.search(r"statements: \[(.*?)\],\n    answer_key:", chunk, re.S)
    if not sm:
        continue
    stmts = re.findall(r"`([^`]*)`", sm.group(1))
    for i, s in enumerate(stmts):
        if pat.search(s):
            n += 1
            print(f"{tid}.{chr(65+i)}: {s[:160]}")
print("TOTAL", n)
