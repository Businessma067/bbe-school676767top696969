# -*- coding: utf-8 -*-
import json
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
data = json.loads((ROOT / "textbook/output/ch11_raw.json").read_text(encoding="utf-8"))
out = ROOT / "textbook/output/ch11_subsection_fixes"
out.mkdir(exist_ok=True)
for sub in data["subsections"]:
    p = out / f"{sub['id']}_INPUT.json"
    p.write_text(json.dumps(sub["tasks"], ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", p.name, len(sub["tasks"]))
