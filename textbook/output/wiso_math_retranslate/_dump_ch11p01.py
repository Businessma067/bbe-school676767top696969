import json
from pathlib import Path

src = Path(__file__).with_name("ch11-p01.json")
d = json.loads(src.read_text(encoding="utf-8"))
out = Path(__file__).with_name("_ch11-p01_en_dump.txt")
parts = []
for c in d:
    parts.append("=" * 80)
    parts.append(
        f"CASE {c['case_id']} answer_key {c['answer_key']} "
        f"overview_short {c['solution_overview_short']}"
    )
    parts.append("--- STATEMENTS EN ---")
    for j, s in enumerate(c["statements_en"]):
        parts.append(f"[{j}] {s}")
    parts.append("--- TACTICAL EN ---")
    for j, t in enumerate(c["tactical_explanations_en"]):
        parts.append(f"--- letter {j} ---")
        parts.append(t)
    parts.append("--- OVERVIEW EN ---")
    parts.append(c.get("solution_overview_en", ""))
    parts.append("--- EXISTING DE TACTICAL (ref) ---")
    for j, t in enumerate(c.get("tactical_explanations_de_existing") or []):
        parts.append(f"--- de letter {j} ---")
        parts.append(t or "")
    parts.append("--- EXISTING DE OVERVIEW ---")
    parts.append(c.get("solution_overview_de_existing") or "")

out.write_text("\n".join(parts), encoding="utf-8")
print(f"wrote {out} cases={len(d)} chars={out.stat().st_size}")
