# -*- coding: utf-8 -*-
"""Strict audit: flag remaining jammed/misaligned Ch5 tables."""
import json
import re
from pathlib import Path

raw = json.loads(Path("textbook/output/linear_eq_60_raw.json").read_text(encoding="utf-8"))
ts = Path("src/data/math-ch5-linear-equations.ts").read_text(encoding="utf-8")
bad = []

def check(num, title, md, where):
    if not md:
        return
    flags = []
    if re.search(r"\|\s*\d+\s+\$[\d,]", md):
        flags.append("num+money-jam")
    if "| (projected)" in md or "| (recorded)" in md:
        flags.append("orphan-tag")
    if "not needed" in md.lower() or "floor space" in md.lower():
        flags.append("meta-row")
    if re.search(r"\|\s*[^|\n]*\d+\s+(km|hrs?|mL|L)\s+\d", md):
        flags.append("unit-jam")
    # column count consistency
    widths = set()
    for ln in md.splitlines():
        if not ln.strip().startswith("|"):
            continue
        if re.match(r"^\|\s*-+", ln):
            continue
        widths.add(ln.count("|"))
    if len(widths) > 1:
        flags.append(f"width:{sorted(widths)}")
    # header/role mess like 'Reference True Value Role'
    header = md.splitlines()[0] if md else ""
    if "Value Role" in header or header.count("Role") > 1:
        flags.append("bad-header")
    if flags:
        bad.append((where, num, title, flags, md))

for t in raw:
    check(t["num"], t.get("title"), t.get("tables_markdown") or "", "raw")

# TS tables
for m in re.finditer(
    r'case_id: "MATH 5\.(\d+)"[\s\S]*?tables_markdown: `([\s\S]*?)`,\n\s*statements:',
    ts,
):
    check(int(m.group(1)), "", m.group(2), "ts")

# tasks that should have fixed tables present
for n in [15, 50, 52, 54, 56, 60]:
    if f"MATH 5.{n:02d}" not in ts:
        bad.append(("ts", n, "", ["missing-task"], ""))
    elif f'case_id: "MATH 5.{n:02d}"' in ts:
        # ensure not still broken phrase
        pass

print("bad count", len(bad))
for where, num, title, flags, md in bad:
    print(where, num, flags)
    print(md[:300])
    print()
if not bad:
    print("ALL CLEAR")
