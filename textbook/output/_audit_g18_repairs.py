# -*- coding: utf-8 -*-
"""Semantic spot-check: repairs; soft vs hard falses for g.18."""
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.18.json")
data = json.loads(p.read_text(encoding="utf-8"))
LETTERS = "ABCDE"

# Extract false repairs and print for human review
rows = []
for task in data["tasks"]:
    for i, (stmt, key, expl) in enumerate(
        zip(task["statements"], task["answer_key"], task["tactical_explanations"])
    ):
        letter = LETTERS[i]
        parts = expl.rstrip().split("\n\n")
        last = parts[-1]
        # claim==stmt
        header = expl.split("\n", 1)[0]
        claim = header[len(f"**{letter}) ") : -2]
        assert claim == stmt, (task["id"], letter, claim, stmt)
        assert ("**true**" in last.lower()) == bool(key) or (
            key is False and "**false**" in last.lower() and "**true**" in last.lower()
        )
        if key:
            assert "**true**" in last.lower(), (task["id"], letter, last)
            assert not (
                "**false**" in last.lower() and "**true**" not in last.lower()
            )
        else:
            assert "**false**" in last.lower(), (task["id"], letter, last)
            quotes = re.findall(r'"([^"]+)"', last)
            rows.append(f"{task['id']} {letter}\n  BAD: {stmt}\n  FIX: {quotes[-1] if quotes else 'MISSING'}")

out = Path(__file__).with_name("_audit_g18_repairs.txt")
out.write_text("\n\n".join(rows), encoding="utf-8")
print(f"OK claims+closings; wrote {len(rows)} false repairs to {out}")
