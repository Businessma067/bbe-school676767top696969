#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path

p = Path("src/data/math-ch11-financial.ts")
lines = []
fixed = 0
for line in p.read_text(encoding="utf-8").split("\n"):
    m = re.match(r"^(\*\*\d+\.\*\*)\s+(.*)$", line)
    if not m:
        lines.append(line)
        continue
    body = m.group(2)
    # Match: ... \approx $6.55\%$, prose here.$
    new = re.sub(
        r"(\\+approx)\s*\$([0-9.]+)(\\+%)\$,\s*(.+?)\.?\$$",
        lambda mm: f"{mm.group(1)} {mm.group(2)}{mm.group(3)}$, {mm.group(4).rstrip('). ')}.",
        body,
    )
    if new != body:
        fixed += 1
        body = new
    lines.append(f"{m.group(1)} {body}")

p.write_text("\n".join(lines), encoding="utf-8")
print("fixed", fixed)
