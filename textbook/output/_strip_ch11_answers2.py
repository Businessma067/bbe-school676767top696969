#!/usr/bin/env python3
from pathlib import Path
import re

p = Path("src/data/math-ch11-financial.ts")
s = p.read_text(encoding="utf-8")
new, n = re.subn(
    r"\n+\*\*Answer\.\*\* A=(?:TRUE|FALSE), B=(?:TRUE|FALSE), "
    r"C=(?:TRUE|FALSE), D=(?:TRUE|FALSE), E=(?:TRUE|FALSE)",
    "",
    s,
    flags=re.I,
)
p.write_text(new, encoding="utf-8")
left = len(re.findall(r"\*\*Answer\.\*\*", new))
print("removed", n, "remaining", left)
