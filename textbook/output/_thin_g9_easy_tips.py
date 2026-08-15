# -*- coding: utf-8 -*-
"""For difficulty 1/5 true items, drop Tip when it only restates the body."""
from __future__ import annotations

import json
import re
from pathlib import Path

jp = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.9.json")
data = json.loads(jp.read_text(encoding="utf-8"))


def normalize(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


def content_words(s: str) -> set[str]:
    return {w for w in normalize(s).split() if len(w) > 3}


removed = 0
for t in data["tasks"]:
    if t.get("difficulty_level") != "1/5":
        continue
    new = []
    for i, e in enumerate(t["tactical_explanations"]):
        if not t["answer_key"][i] or "**Tip:**" not in e:
            new.append(e)
            continue
        before, tip_and_rest = e.split("**Tip:**", 1)
        tip_line, _, _ = tip_and_rest.lstrip().partition("\n")
        tip = tip_line.strip()
        rest = tip_and_rest[len(tip_line) :].lstrip("\n").lstrip()
        tip_w = content_words(tip)
        body_w = content_words(before)
        novel = tip_w - body_w
        overlap = len(tip_w & body_w) / max(1, len(tip_w))
        if overlap >= 0.7 and len(novel) <= 2:
            rebuilt = before.rstrip() + ("\n\n" + rest if rest else "\n")
            if not rebuilt.endswith("\n"):
                rebuilt += "\n"
            new.append(rebuilt)
            removed += 1
        else:
            new.append(e)
    t["tactical_explanations"] = new

jp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
tips = sum(1 for t in data["tasks"] for e in t["tactical_explanations"] if "**Tip:**" in e)
traps = sum(1 for t in data["tasks"] for e in t["tactical_explanations"] if "Trap:" in e)
print(f"removed_easy_true_tips={removed} tips={tips} traps={traps}")
# final integrity
assert all(len(t["statements"]) == len(t["answer_key"]) == len(t["tactical_explanations"]) == 5 for t in data["tasks"])
for t in data["tasks"]:
    for i, e in enumerate(t["tactical_explanations"]):
        stmt = t["statements"][i]
        if not stmt.endswith((".", "?", "!")):
            stmt += "."
        assert e.startswith(f"**{'ABCDE'[i]}) {stmt}**")
        assert "So the statement" in e
        assert "(true)" not in e and "(false)" not in e
print("integrity OK")
print("--- samples ---")
print(data["tasks"][0]["tactical_explanations"][0])
print("---")
print(data["tasks"][8]["tactical_explanations"][2])
print("---")
print(data["tasks"][17]["tactical_explanations"][1])
