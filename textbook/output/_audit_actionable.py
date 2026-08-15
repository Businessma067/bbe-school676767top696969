# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

raw = json.loads(Path("textbook/output/ch11_raw.json").read_text(encoding="utf-8"))


def unpaired(s: str) -> bool:
    n = 0
    i = 0
    while i < len(s):
        if s[i] == "\\" and i + 1 < len(s) and s[i + 1] == "$":
            i += 2
            continue
        if s[i] == "$":
            n += 1
        i += 1
    return n % 2 == 1


GLUED = re.compile(
    r"\b(?:Sdiscrete|Scontinuous|PVII+|PVI+|aordinary|adue|Kyearly|Kcontinuous|EARmax)\b"
)
# also bare EAR as word glued? skip plain EAR in prose

# False math: English glue inside a SINGLE $...$ span
ENGLISH_IN_SPAN = re.compile(
    r"\$([^$]*\b(?:and|monthly|yearly|amount invested|rate of)\b[^$]*)\$"
)


def walk(obj, path, acc):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == "answer_key":
                continue
            walk(v, path + [k], acc)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk(v, path + [str(i)], acc)
    elif isinstance(obj, str):
        acc.append(("/".join(path), obj))


rows = []
for sub in raw["subsections"]:
    for t in sub["tasks"]:
        acc = []
        walk(t, [sub["id"], f"t{t['local_num']}"], acc)
        for p, s in acc:
            if unpaired(s):
                rows.append(("UNPAIRED", p, s[:240].replace("\n", " | ")))
            for m in GLUED.finditer(s):
                ctx = s[max(0, m.start() - 50) : m.end() + 50].replace("\n", " | ")
                rows.append(("GLUED", p, ctx))
            for m in ENGLISH_IN_SPAN.finditer(s):
                # skip if it's LaTeX with \mathrm only false?
                inner = m.group(1)
                if "\\" in inner and "and" not in inner.lower() and "amount" not in inner.lower():
                    continue
                ctx = m.group(0)[:180].replace("\n", " | ")
                rows.append(("ENGLISH_IN_$", p, ctx))

# Also find remaining `$var$ = $` after fix (should be 0)
ASSIGN = re.compile(r"\$[^$\n]{1,40}\$\s*=\s*-?\$\d")
for sub in raw["subsections"]:
    for t in sub["tasks"]:
        acc = []
        walk(t, [sub["id"], f"t{t['local_num']}"], acc)
        for p, s in acc:
            for m in ASSIGN.finditer(s):
                rows.append(("ASSIGN", p, m.group(0)))

outp = Path("textbook/output/_audit_actionable.txt")
outp.write_text("\n".join(f"[{a}] {b}: {c}" for a, b, c in rows), encoding="utf-8")
print("total", len(rows))
from collections import Counter

print(Counter(a for a, _, _ in rows))
for a, b, c in rows[:100]:
    line = f"[{a}] {b}: {c}"
    print(line.encode("ascii", "replace").decode())
