# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

d = json.loads(Path("textbook/output/ch11_raw.json").read_text(encoding="utf-8"))
bad = re.compile(
    r"\b(Sdiscrete|Scont|Kyearly|EARmax|aordinary|PVII|PVIII|PVI|Fdue|Fordinary|Pdue|Pordinary)\b"
)
hits = []
for sub in d["subsections"]:
    for t in sub["tasks"]:
        blob = "\n".join(
            [t.get(k) or "" for k in ("given", "formulas", "steps")]
            + (t.get("explanations") or [])
            + (t.get("statements") or [])
        )
        for m in bad.finditer(blob):
            hits.append(f"{sub['id']}/{t['local_num']}: {m.group(0)}")
print("glued leftover", len(hits))
for h in hits[:30]:
    print(" ", h)
sub = next(s for s in d["subsections"] if s["id"] == "11.5")
t = next(x for x in sub["tasks"] if x["local_num"] == 18)
print("--- 11.5/18 explanations with discrete/cont ---")
for e in t["explanations"]:
    if "discrete" in e or "mathrm{discrete}" in e or "mathrm{cont}" in e:
        print(e[:260])
        print("---")
