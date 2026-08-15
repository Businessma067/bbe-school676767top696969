# -*- coding: utf-8 -*-
"""Deeper g.19 semantic checks: repairs, tip/trap placement, advice red flags."""
from __future__ import annotations

import json
import re
from pathlib import Path

path = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.19.json")
data = json.loads(path.read_text(encoding="utf-8"))
letters = "ABCDE"

# Pairs that should be near-twins (same task T/F contrast)
print("=== REPAIR vs TRUE TWIN CROSS-CHECK ===")
for task in data["tasks"]:
    stmts = task["statements"]
    keys = task["answer_key"]
    expls = task["tactical_explanations"]
    true_set = {s for s, k in zip(stmts, keys) if k}
    for i, (s, k, e) in enumerate(zip(stmts, keys, expls)):
        if k:
            continue
        parts = [p for p in e.strip().split("\n\n") if p.strip()]
        closing = parts[-1]
        quotes = re.findall(r'"([^"]+)"', closing)
        repair = quotes[-1] if quotes else None
        loc = f"{task['id']}.{letters[i]}"
        print(f"\n{loc}")
        print(f"  BAD:    {s}")
        print(f"  REPAIR: {repair}")
        # Is repair equal to some true statement in same task?
        if repair in true_set:
            print("  MATCH true twin in task: YES")
        else:
            # normalize fragment: repair may be partial
            hit = [t for t in true_set if repair and (repair in t or t in repair)]
            if hit:
                print(f"  PARTIAL twin hit: {hit[0]}")
            else:
                print("  NO twin in task (ok if unique)")
        # Flag repairs that still contain inversion scars
        if repair:
            scars = [
                r"\bwhere is\b",
                r"\bwhere are\b",
                r"\bwhere did\b",
                r"\bwhat did\b",
                r"\bwhy did\b",
                r"\bwhy was\b",
                r"\bwhether (?:can|does|has|had|will|would|were|is)\b",
                r"\bif (?:has|had|does|can|will)\b",
                r"\bhow (?:much|long|far|often) (?:will|did|does|is)\b",
                r"\bwhich \w+ (?:are|is|do|did|should|would) (?:you|we|he|she|the)\b",
            ]
            for scar in scars:
                if re.search(scar, repair, re.I):
                    # allow if scar is outside embed... hard; just print
                    print(f"  !! possible scar in repair: {scar}")

print("\n=== TIP ON FALSE / TRAP ON TRUE ===")
for task in data["tasks"]:
    for i, (s, k, e) in enumerate(zip(task["statements"], task["answer_key"], task["tactical_explanations"])):
        has_tip = "**Tip:**" in e
        has_trap = "**Trap:**" in e
        if k and has_trap:
            print(f"TRAP_ON_TRUE {task['id']}.{letters[i]}: {s}")
        if (not k) and has_tip:
            print(f"TIP_ON_FALSE {task['id']}.{letters[i]}: {s}")

print("\n=== BODY MENTIONS OF WRONG DIAGNOSIS KEYWORDS ===")
# Look for blaming stranded prep
for task in data["tasks"]:
    for i, e in enumerate(task["tactical_explanations"]):
        if re.search(r"stranded by break|stranded by that belongs|and stranded by", e, re.I):
            print(f"STRANDED_BY_BLAME {task['id']}.{letters[i]}")
        if re.search(r"item is \*\*false\*\*|Mark it|Reject this|Accept the line|Keep this", e):
            print(f"UI_COACH {task['id']}.{letters[i]} :: {re.findall(r'.{0,40}(?:item is \*\*false\*\*|Mark it|Reject this|Accept the line|Keep this).{0,40}', e)}")

print("\n=== HIGHLIGHT vs STATEMENT CONTAINMENT ===")
for task in data["tasks"]:
    for i, (s, h) in enumerate(zip(task["statements"], task["highlights"])):
        if h not in s:
            print(f"HL_MISS {task['id']}.{letters[i]}: hl={h!r} not in stmt")
