# -*- coding: utf-8 -*-
import json
from pathlib import Path

src = json.loads(Path("textbook/output/wiso_math_retranslate/ch12-p02.json").read_text(encoding="utf-8"))
outdir = Path("textbook/output/wiso_math_retranslate/_extract_ch12p02")
outdir.mkdir(exist_ok=True)
for i, c in enumerate(src):
    cid = c["case_id"].replace(" ", "_")
    p = outdir / f"{i:02d}_{cid}.txt"
    parts = []
    parts.append(f"CASE {c['case_id']}")
    parts.append(f"ANSWER {json.dumps(c['answer_key'])}")
    parts.append(f"TITLE_DE {c.get('title_de_existing', '')}")
    parts.append(f"CONTEXT_DE {c.get('context_de_existing', '')}")
    parts.append("STATEMENTS_DE:")
    for j, s in enumerate(c.get("statements_de_existing") or []):
        parts.append(f"  {chr(65+j)}. {s}")
    parts.append("")
    for j, e in enumerate(c["tactical_explanations_en"]):
        parts.append(f"=== EXPL {j} {chr(65+j)} ===")
        parts.append(e)
        parts.append("")
    p.write_text("\n".join(parts), encoding="utf-8")
    print(p.name, sum(len(x) for x in c["tactical_explanations_en"]))
print("done", len(src))
