# -*- coding: utf-8 -*-
"""Drop Tip only when Trap is already present and Tip restates the body."""
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
kept = 0
for t in data["tasks"]:
    new = []
    for e in t["tactical_explanations"]:
        if "**Tip:**" not in e:
            new.append(e)
            continue
        before, tip_and_rest = e.split("**Tip:**", 1)
        tip_line, _, _ = tip_and_rest.lstrip().partition("\n")
        tip = tip_line.strip()
        rest = tip_and_rest[len(tip_line) :].lstrip("\n").lstrip()
        has_trap = "Trap:" in before
        tip_w = content_words(tip)
        body_w = content_words(before)
        novel = tip_w - body_w
        overlap = len(tip_w & body_w) / max(1, len(tip_w))
        # Only strip tip when Trap already carries the exam-near-miss cue
        # AND tip mostly restates body.
        drop = has_trap and overlap >= 0.75 and len(novel) <= 2
        if drop:
            rebuilt = before.rstrip() + ("\n\n" + rest if rest else "\n")
            if not rebuilt.endswith("\n"):
                rebuilt += "\n"
            rebuilt = re.sub(r"\n\n\.\n\n", "\n\n", rebuilt)
            new.append(rebuilt)
            removed += 1
        else:
            new.append(e)
            kept += 1
    t["tactical_explanations"] = new

jp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
tips = sum(1 for t in data["tasks"] for e in t["tactical_explanations"] if "**Tip:**" in e)
traps = sum(1 for t in data["tasks"] for e in t["tactical_explanations"] if "Trap:" in e)
orphans = sum(1 for t in data["tasks"] for e in t["tactical_explanations"] if re.search(r"\n\.\n", e))
bad = 0
samples_no_tip_true = 0
samples_tip_true = 0
for t in data["tasks"]:
    for i, e in enumerate(t["tactical_explanations"]):
        last = e.rstrip().split("\n")[-1]
        k = t["answer_key"][i]
        if k and not last.startswith("So the statement holds"):
            bad += 1
        if (not k) and not last.startswith("So the statement is false"):
            bad += 1
        if k and "**Tip:**" in e:
            samples_tip_true += 1
        if k and "**Tip:**" not in e:
            samples_no_tip_true += 1
print(
    f"removed={removed} kept={kept} tips={tips} traps={traps} "
    f"orphans={orphans} bad={bad} true_with_tip={samples_tip_true} true_without={samples_no_tip_true}"
)
