#!/usr/bin/env python3
from pathlib import Path

p = Path("src/data/math-ch11-financial.ts")
s = p.read_text(encoding="utf-8")
n = s.count(" $= ")
s = s.replace(" $= ", ": $")
# fix accidental double colons
s = s.replace(": :", ":")
p.write_text(s, encoding="utf-8")
print("replaced", n)
