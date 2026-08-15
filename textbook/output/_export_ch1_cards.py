# -*- coding: utf-8 -*-
"""Export compact task cards for rewrite."""
import json
from pathlib import Path

tasks = json.loads(Path(__file__).with_name("_ch1_tasks_dump.json").read_text(encoding="utf-8"))
out = []
for t in tasks:
    out.append(
        {
            "id": t["id"],
            "subsection": t["subsection"],
            "diff": t["difficulty_level"],
            "title": t["title"],
            "context": t["context"],
            "statements": t["statements"],
            "answer_key": t["answer_key"],
            "expl_cores": t["tactical_explanations"],
            "overview": t["solution_overview"],
        }
    )
Path(__file__).with_name("_ch1_rewrite_cards.json").write_text(
    json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8"
)
print("cards", len(out))
# print a few hard ones
for tid in ("math-1-1", "math-1-46", "math-1-80", "math-1-108"):
    t = next(x for x in out if x["id"] == tid)
    print("=" * 60, tid, t["diff"])
    print("CTX:", t["context"][:300].replace("\n", " / "))
    for i, (s, a, e) in enumerate(zip(t["statements"], t["answer_key"], t["expl_cores"])):
        print(f"  {chr(65+i)}={'T' if a else 'F'}: {s[:120]}")
        # strip header for core peek
        body = e.split("\n\n", 1)[-1] if "\n\n" in e else e
        print("     core:", body[:160].replace("\n", " "))
