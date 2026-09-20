import json
from pathlib import Path

src = Path(__file__).with_name("ch11-p04.json")
d = json.loads(src.read_text(encoding="utf-8"))
parts = []
for c in d[5:]:
    parts.append("=" * 80)
    parts.append(f"CASE {c['case_id']} ANSWER {c['answer_key']}")
    parts.append("--- OVERVIEW ---")
    parts.append(c.get("solution_overview_en", ""))
    for j, t in enumerate(c["tactical_explanations_en"]):
        parts.append(f"--- {chr(65 + j)} ---")
        parts.append(t)
out = Path(__file__).with_name("_extract") / "ch11-p04-rest.txt"
out.write_text("\n".join(parts), encoding="utf-8")
print(f"wrote {out} chars={out.stat().st_size}")
