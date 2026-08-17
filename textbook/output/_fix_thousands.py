from pathlib import Path
import re

p = Path("src/data/math-ch11-financial.ts")
s = p.read_text(encoding="utf-8")
n = 0
prev = None
while prev != s:
    prev = s
    s, c = re.subn(r"(\d)\$, \$(\d)", r"\1,\2", s)
    n += c
p.write_text(s, encoding="utf-8")
print("fixed", n, "remaining", len(re.findall(r"\d\$, \$", s)))
