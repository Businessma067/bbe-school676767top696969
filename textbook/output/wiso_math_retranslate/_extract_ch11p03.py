import json
import os
from pathlib import Path

src = json.loads(Path(__file__).with_name("ch11-p03.json").read_text(encoding="utf-8"))
out_dir = Path(__file__).with_name("_extract")
out_dir.mkdir(exist_ok=True)
parts = []
for c in src:
    parts.append("=" * 80)
    parts.append(f"CASE {c['case_id']} KEY {c['answer_key']}")
    for j, t in enumerate(c["tactical_explanations_en"]):
        parts.append(f"--- EXPL {j} ---")
        parts.append(t)
    parts.append("--- OVERVIEW ---")
    parts.append(c.get("solution_overview_en") or "")
(out_dir / "ch11-p03-all.txt").write_text("\n".join(parts), encoding="utf-8")
compact = [
    {
        "case_id": c["case_id"],
        "answer_key": c["answer_key"],
        "tactical_explanations_en": c["tactical_explanations_en"],
        "solution_overview_en": c.get("solution_overview_en"),
    }
    for c in src
]
(out_dir / "ch11-p03-en.json").write_text(
    json.dumps(compact, ensure_ascii=False, indent=2), encoding="utf-8"
)
print("cases", len(src))
print(
    "chars",
    sum(len(t) for c in src for t in c["tactical_explanations_en"]),
)
