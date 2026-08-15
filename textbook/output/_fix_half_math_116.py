# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

inp = Path("textbook/output/ch11_subsection_fixes/11.6_INPUT.json")
data = json.loads(inp.read_text(encoding="utf-8"))
pat = re.compile(r"[A-Za-z0-9)']\s*=\s*\$")
print("n tasks", len(data))
for t in data:
    for f in ["given", "formulas", "steps", "context", "title"]:
        s = t.get(f, "") or ""
        for m in pat.finditer(s):
            i = m.start()
            print(f"t{t['local_num']}/{f}: ...{s[max(0,i-50):i+90]}...")
    for i, e in enumerate(t.get("explanations") or []):
        for m in pat.finditer(e):
            j = m.start()
            print(f"t{t['local_num']}/expl[{i}]: ...{e[max(0,j-50):j+90]}...")
    for i, st in enumerate(t.get("statements") or []):
        for m in pat.finditer(st):
            j = m.start()
            print(f"t{t['local_num']}/stmt[{i}]: ...{st[max(0,j-50):j+90]}...")
