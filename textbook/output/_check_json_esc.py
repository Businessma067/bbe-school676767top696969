#!/usr/bin/env python3
import re
from pathlib import Path

s = Path("src/data/math-ch11-financial.ts").read_text(encoding="utf-8")

pattern = re.compile(r"`(\*\*[A-E]\)[\s\S]*?)`(,|\s*\])", re.M)
count = 0
bad = []
for m in pattern.finditer(s):
    block = m.group(1)
    tmp = block.replace("\\$", "")
    if tmp.count("$") % 2 == 1:
        bad.append(block[:200])
    count += 1
print("total_explanation_blocks", count)
print("unbalanced", len(bad))
for b in bad[:20]:
    print(" -", b.replace("\n", " | ")[:200])
