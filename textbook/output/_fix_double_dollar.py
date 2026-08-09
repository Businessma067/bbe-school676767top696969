# -*- coding: utf-8 -*-
from pathlib import Path

p = Path("textbook/output/ch11_raw.json")
t = p.read_text(encoding="utf-8")
# JSON-escaped form in file
reps = [
    ("$, $\\\\$40{,}000/(1.05)^{2}$", "$, $40{,}000/(1.05)^{2}$"),
    ("$, $\\\\$65{,}000/(1.05)^{5}$", "$, $65{,}000/(1.05)^{5}$"),
    ("$, $\\\\$25{,}500/(1.06)^{3}$", "$, $25{,}500/(1.06)^{3}$"),
    ("$, $\\\\$42{,}000/(1.06)^{3}$", "$, $42{,}000/(1.06)^{3}$"),
]
# Try both 2 and 3 backslash encodings by searching actual snippets
n = 0
for a, b in [
    ("$\\\\$40{,}000/(1.05)^{2}$", "$40{,}000/(1.05)^{2}$"),
    ("$\\\\$65{,}000/(1.05)^{5}$", "$65{,}000/(1.05)^{5}$"),
    ("$\\\\$25{,}500/(1.06)^{3}$", "$25{,}500/(1.06)^{3}$"),
    ("$\\\\$42{,}000/(1.06)^{3}$", "$42{,}000/(1.06)^{3}$"),
]:
    c = t.count(a)
    if c:
        t = t.replace(a, b)
        n += c
        print("replaced", a, c)
print("total", n)
p.write_text(t, encoding="utf-8")
