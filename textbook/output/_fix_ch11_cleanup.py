#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path

p = Path("src/data/math-ch11-financial.ts")
s = p.read_text(encoding="utf-8")

# trailing ", \%." junk
s = re.sub(r", \\%\s*\.?", ".", s)
s = re.sub(r", \\\\%\s*\.?", ".", s)

# R_3: \approx $6.55\%$, prose).$
s = re.sub(
    r"\\approx\s*\$([0-9.]+)\\%\$,\s*(.*?)\)\.?\$",
    r"\\approx \1\\%$, \2.",
    s,
)
s = re.sub(
    r"\\approx\s*\$([0-9.]+)\\%\$,\s*(.*?)\.\$",
    r"\\approx \1\\%$, \2.",
    s,
)

lines = []
for line in s.split("\n"):
    m = re.match(r"^(\*\*\d+\.\*\*)\s+(.*)$", line)
    if m:
        body = re.sub(
            r"(?<![\\a-zA-Z])approx(?![a-zA-Z])",
            r"\\approx",
            m.group(2),
        )
        # ensure \\approx in .ts source (two backslashes)
        body = body.replace("\\approx", "\\\\approx")
        while "\\\\\\\\approx" in body:
            body = body.replace("\\\\\\\\approx", "\\\\approx")
        line = f"{m.group(1)} {body}"
    lines.append(line)

p.write_text("\n".join(lines), encoding="utf-8")
print("cleaned", p.stat().st_size)
