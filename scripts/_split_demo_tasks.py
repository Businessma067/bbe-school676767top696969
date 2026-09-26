# -*- coding: utf-8 -*-
"""Split demo dumps into per-task files for rewriting."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
bundle = json.loads((ROOT / "scripts/_demo_bundle.json").read_text(encoding="utf-8"))
out = ROOT / "scripts/_demo_tasks"
out.mkdir(exist_ok=True)

for subj in ["math", "economics"]:
    d = out / subj
    d.mkdir(exist_ok=True)
    for t in bundle[subj]:
        path = d / f"{t['i']:02d}_{t['case_id'].replace(' ', '_').replace('.', '_')}.md"
        parts = [
            f"# {t['case_id']}",
            f"ak={t['answer_key']}",
            f"current_lens={t['current_lens']}",
            f"## title\n{t['title']}",
            f"## context\n{t['context']}",
        ]
        for i, L in enumerate("ABCDE"):
            parts.append(f"## statement {L}\n{t['statements'][i]}")
            parts.append(f"## current {L}\n{t['current'][i]}")
        path.write_text("\n\n".join(parts), encoding="utf-8")
        print("wrote", path.name)
