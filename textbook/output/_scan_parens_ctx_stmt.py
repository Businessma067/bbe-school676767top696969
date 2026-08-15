# -*- coding: utf-8 -*-
"""Scan context+statements for leftover explanatory parentheses outside math."""
import json
import re
from pathlib import Path

RAW = Path("textbook/output/ch11_raw.json")
data = json.loads(RAW.read_text(encoding="utf-8"))


def strip_math(s: str) -> str:
    s = re.sub(r"\$\$[\s\S]*?\$\$", " ", s or "")
    s = re.sub(r"\$(?![\d])[^$\n]+?\$", " ", s)
    # also protect currency $1,234
    s = re.sub(r"\$\d[\d,]*(?:\.\d+)?", " ", s)
    return s


hits = []
for sub in data["subsections"]:
    for t in sub["tasks"]:
        for field, text in [("context", t.get("context") or "")] + [
            (f"S{i}", s) for i, s in enumerate(t.get("statements") or [])
        ]:
            prose = strip_math(text)
            if "(" in prose or ")" in prose:
                # find remaining paren groups in prose
                for m in re.finditer(r"\([^)]*\)", prose):
                    hits.append(f"{sub['id']}/{t['local_num']}/{field}: {m.group(0)[:80]}")

print("paren leftovers in context/statements:", len(hits))
for h in hits[:40]:
    print(" ", h)
