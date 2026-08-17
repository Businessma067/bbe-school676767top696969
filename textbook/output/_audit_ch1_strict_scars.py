# -*- coding: utf-8 -*-
"""Per-task scan for render-breaking scars only (strict)."""
from __future__ import annotations

import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")
TS = Path("src/data/math-ch1-logic.ts")
t = TS.read_text(encoding="utf-8")
parts = re.split(r'(?=^\s*id:\s*"math-1-\d+")', t, flags=re.M)
issues = []

def unescape(raw: str) -> str:
    return raw.replace(r"\\", "\0").replace(r"\n", "\n").replace(r'\"', '"').replace("\0", "\\")

for part in parts:
    m = re.match(r'\s*id:\s*"(math-1-\d+)"', part)
    if not m:
        continue
    tid = m.group(1)
    strings = []
    om = re.search(r'solution_overview:\s*"((?:\\.|[^"\\])*)"', part)
    if om:
        strings.append(("ov", om.group(1)))
    arr = re.search(r"tactical_explanations:\s*\[([\s\S]*?)\],\s*\n\s*difficulty_level", part)
    if arr:
        for i, em in enumerate(re.finditer(r'"((?:\\.|[^"\\])*)"', arr.group(1))):
            strings.append((f"e{i}", em.group(1)))

    for kind, raw in strings:
        s = unescape(raw)
        # literal visible scars
        if "$\\{$" in raw or "$\\}$" in raw:
            issues.append(f"{tid}.{kind}: split_brace")
        # unmatched $ ignoring $$ and \$
        tmp = []
        i = 0
        while i < len(s):
            if s.startswith("$$", i):
                j = s.find("$$", i+2)
                if j < 0:
                    issues.append(f"{tid}.{kind}: unclosed_display")
                    break
                i = j+2
                continue
            if s[i] == "\\" and i+1 < len(s) and s[i+1] == "$":
                i += 2
                continue
            if s[i] == "$":
                j = i+1
                while j < len(s):
                    if s[j] == "\\" and j+1 < len(s) and s[j+1] == "$":
                        j += 2
                        continue
                    if s[j] == "$":
                        break
                    j += 1
                if j >= len(s) or s[j] != "$":
                    # currency-like $digits without close is OK
                    rest = s[i+1:i+20]
                    if not re.match(r"\d", rest):
                        issues.append(f"{tid}.{kind}: unclosed_$ near {s[i:i+40]!r}")
                    i += 1
                    continue
                inner = s[i+1:j]
                if inner.count("{") != inner.count("}"):
                    issues.append(f"{tid}.{kind}: unbalanced ${inner[:50]!r}")
                i = j+1
                continue
            i += 1
        # leading dash left?
        if re.search(r"(?m)^-\s+\S", s):
            issues.append(f"{tid}.{kind}: leftover_dash_bullet")

out = Path("textbook/output/_audit_ch1_strict_scars.txt")
out.write_text("\n".join([f"count={len(issues)}", *issues]) or "clean", encoding="utf-8")
print(f"strict_issues={len(issues)} -> {out}")
for x in issues[:60]:
    print(x)
