# -*- coding: utf-8 -*-
"""Deep structural + semantic audit helper for g.19."""
from __future__ import annotations

import json
import re
from pathlib import Path

path = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.19.json")
data = json.loads(path.read_text(encoding="utf-8"))
letters = "ABCDE"
issues: list[tuple] = []

# Semantic notes to print for human review
print("=== STATEMENT / KEY DUMP ===")
for task in data["tasks"]:
    tid = task["id"]
    print(f"\n{tid} diff={task['difficulty_level']}")
    for i, (s, k) in enumerate(zip(task["statements"], task["answer_key"])):
        print(f"  {letters[i]} [{'T' if k else 'F'}] {s}")

    ov = task["solution_overview"]
    m = re.search(r"\*\*Answer\.\*\*\s*(.+)$", ov)
    if m:
        ans = m.group(1).strip()
        expected = ", ".join(
            f"{letters[i]}={'TRUE' if k else 'FALSE'}" for i, k in enumerate(task["answer_key"])
        )
        if ans != expected:
            issues.append((tid, "OVERVIEW_KEY_MISMATCH", ans, expected))

    for i, (s, k, e) in enumerate(
        zip(task["statements"], task["answer_key"], task["tactical_explanations"])
    ):
        loc = f"{tid}.{letters[i]}"
        header = e.split("\n")[0]
        hm = re.match(r"^\*\*([A-E])\) (.*)\*\*\s*$", header)
        if not hm:
            issues.append((loc, "BAD_HEADER", header[:120]))
            continue
        letter, claim = hm.group(1), hm.group(2)
        if letter != letters[i]:
            issues.append((loc, "LETTER", letter))
        if claim != s:
            issues.append((loc, "CLAIM_NE_STMT", repr(claim), repr(s)))
        if re.search(r'[.?!]["\u201d]?\.\*\*$', header) or claim.endswith(".."):
            issues.append((loc, "DBL_PERIOD", header[-50:]))

        parts = [p for p in e.strip().split("\n\n") if p.strip()]
        closing = parts[-1]
        if closing.startswith("**Tip:") or closing.startswith("**Trap:"):
            issues.append((loc, "TIPTRAP_CLOSING", closing[:60]))

        if k:
            if "**true**" not in closing:
                issues.append((loc, "TRUE_KEY_NO_TRUE_IN_CLOSING", closing[:200]))
            if re.search(r"\bis \*\*false\*\*", closing):
                issues.append((loc, "TRUE_KEY_FALSE_VERDICT", closing[:200]))
        else:
            if "**false**" not in closing:
                issues.append((loc, "FALSE_KEY_NO_FALSE_IN_CLOSING", closing[:200]))
            quotes = re.findall(r'"([^"]+)"', closing)
            if not quotes:
                issues.append((loc, "FALSE_NO_REPAIR_QUOTE", closing[:200]))
            else:
                # repair should look related
                repair = quotes[-1]
                if repair.strip() == s.strip():
                    issues.append((loc, "REPAIR_EQUALS_BAD_STMT", repair))

        # banned stamp closings
        if closing.startswith("So the statement"):
            issues.append((loc, "STAMP", closing[:80]))
        if re.search(r"\(true\)|\(false\)", closing, re.I):
            issues.append((loc, "BARE_PAREN_TF", closing[:80]))

        # body length
        body_parts = parts[1:]
        if body_parts and (body_parts[0].startswith("**Tip:") or body_parts[0].startswith("**Trap:")):
            issues.append((loc, "NO_BODY_BEFORE_TIPTRAP", ""))
        main = [p for p in body_parts if not p.startswith("**Tip:") and not p.startswith("**Trap:") and p != closing]
        # actually closing is last; body sentences before tip/trap
        teaching = []
        for p in parts[1:]:
            if p.startswith("**Tip:") or p.startswith("**Trap:"):
                continue
            if p is closing or p == closing:
                continue
            teaching.append(p)
        # recount without identity: all non tiptrap except last
        teaching = []
        for p in parts[1:-1]:
            if not (p.startswith("**Tip:") or p.startswith("**Trap:")):
                teaching.append(p)
        if not teaching:
            issues.append((loc, "MISSING_TEACHING_BODY", ""))

print("\n=== STRUCTURAL ISSUES ===")
print("count", len(issues))
for x in issues:
    print(x)

# Print closings for human semantic scan
print("\n=== CLOSINGS ===")
for task in data["tasks"]:
    for i, (s, k, e) in enumerate(
        zip(task["statements"], task["answer_key"], task["tactical_explanations"])
    ):
        parts = [p for p in e.strip().split("\n\n") if p.strip()]
        closing = parts[-1].replace("\n", " ")
        print(f"{task['id']}.{letters[i]} [{'T' if k else 'F'}] {closing}")
