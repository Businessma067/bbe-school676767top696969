# -*- coding: utf-8 -*-
import json
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.20.json")
d = json.loads(p.read_text(encoding="utf-8-sig"))
e = d["tasks"][4]["tactical_explanations"][4]
old = 'one item → "criterion"; several → "criteria".'
new = 'One item → "criterion"; several → "criteria".'
if old not in e:
    raise SystemExit("not found: " + repr(e[100:250]))
d["tasks"][4]["tactical_explanations"][4] = e.replace(old, new, 1)
p.write_text(json.dumps(d, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("fixed")
