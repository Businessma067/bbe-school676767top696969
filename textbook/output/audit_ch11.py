# -*- coding: utf-8 -*-
"""Audit Ch11 raw + emitted structure."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = json.loads((ROOT / "textbook/output/ch11_raw.json").read_text(encoding="utf-8"))
TS = (ROOT / "src/data/math-ch11-financial.ts").read_text(encoding="utf-8")

issues = []
total = 0
for sub in RAW["subsections"]:
    sid = sub["id"]
    n = len(sub["tasks"])
    total += n
    print(f"{sid}: {n}")
    for t in sub["tasks"]:
        if len(t["statements"]) != 5:
            issues.append(f"{sid}/{t['local_num']}: statements {len(t['statements'])}")
        if len(t["answer_key"]) != 5:
            issues.append(f"{sid}/{t['local_num']}: answers {len(t['answer_key'])}")
        if len(t.get("explanations") or []) != 5:
            issues.append(f"{sid}/{t['local_num']}: expl {len(t.get('explanations') or [])}")
        if not (t.get("context") or "").strip():
            issues.append(f"{sid}/{t['local_num']}: empty context")
        if not re.match(r"^[1-5]/5$", t["difficulty_level"]):
            issues.append(f"{sid}/{t['local_num']}: bad diff {t['difficulty_level']}")
        for i, s in enumerate(t["statements"]):
            if len(s) < 8:
                issues.append(f"{sid}/{t['local_num']}/S{i}: short stmt")

# TS checks
assert TS.count("subsection:") == total
assert "MATH_CH11_FINANCIAL" in TS
assert total == 123, total

# currency swallow quick check on contexts
from audit_full_ch5_text import find_old_swallows, split_math  # type: ignore

# Inline minimal
CURRENCY = re.compile(
    r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])"
)

def looks_like_math_inner(inner: str) -> bool:
    t = (inner or "").strip()
    if not t: return False
    if "|" in t: return False
    if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", t): return False
    if re.search(r"[A-Za-z]{4,}", t) and not re.search(r"[=<>≠≤≥]", t) and not re.search(r"\\[a-zA-Z]+", t):
        return False
    if re.search(r"[=<>≠≤≥+×·\-/^\\()_]", t) and re.search(r"[A-Za-z0-9]", t): return True
    return False

def split_math(text: str):
    s = text or ""
    parts=[]; i=0; buf=[]
    def flush():
        if buf: parts.append(("text", "".join(buf))); buf.clear()
    while i < len(s):
        if s.startswith("$$", i):
            end=s.find("$$", i+2)
            if end!=-1:
                flush(); parts.append(("display", s[i+2:end].strip())); i=end+2; continue
        if s[i]=="$":
            m=CURRENCY.match(s,i)
            if m:
                after=s.find("$", m.end()); between="" if after==-1 else s[i+1:after]
                if not (after!=-1 and looks_like_math_inner(between)):
                    buf.append(m.group(0)); i=m.end(); continue
            end=s.find("$", i+1)
            if end!=-1:
                inner=s[i+1:end]
                if looks_like_math_inner(inner):
                    flush(); parts.append(("inline", inner.strip())); i=end+1; continue
        buf.append(s[i]); i+=1
    flush()
    return parts or [("text", s)]

prose_math=0
for sub in RAW["subsections"]:
    for t in sub["tasks"]:
        for blob in [t["context"], *t["statements"], *t.get("explanations", [])]:
            for kind,val in split_math(blob):
                if kind in ("inline","display") and re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", val) and not re.search(r"[=<>]", val):
                    prose_math += 1
                    issues.append(f"prose-as-math: {val[:60]}")

print("TOTAL", total)
print("prose_math", prose_math)
print("ISSUES", len(issues))
for x in issues[:40]:
    print(" ", x)
if issues:
    raise SystemExit(1)
print("AUDIT PASS")
