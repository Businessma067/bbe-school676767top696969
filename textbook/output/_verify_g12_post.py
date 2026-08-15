# -*- coding: utf-8 -*-
"""Post-fix verification for g.12 punct pass."""
from __future__ import annotations

import json
import re
from pathlib import Path

path = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.12.json")
# Load via git show for keys comparison if needed — just validate structure
data = json.loads(path.read_text(encoding="utf-8-sig"))

assert len(data["tasks"]) == 20
keys_snapshot = []
for ti, task in enumerate(data["tasks"]):
    assert len(task["statements"]) == 5
    assert len(task["tactical_explanations"]) == 5
    assert len(task["answer_key"]) == 5
    assert all(isinstance(x, bool) for x in task["answer_key"])
    keys_snapshot.append(list(task["answer_key"]))
    for ei, (stmt, expl) in enumerate(zip(task["statements"], task["tactical_explanations"])):
        header = expl.split("\n", 1)[0]
        m = re.match(r"\*\*([A-E])\) (.*)\*\*", header)
        assert m, (ti, ei, header[:80])
        assert m.group(1) == "ABCDE"[ei]
        assert m.group(2) == stmt, (ti + 1, "ABCDE"[ei], m.group(2)[-40:], stmt[-40:])
        # no double claim period
        assert not re.search(r"[.?!][\"'”’]?\.\*\*", header)
        # v4 closing present (last non-empty paragraph isn't Tip/Trap alone)
        parts = [p for p in expl.strip().split("\n\n") if p.strip()]
        closing = parts[-1]
        assert not closing.startswith("**Tip:") and not closing.startswith("**Trap:")
        assert not re.search(r"\(true\)|\(false\)", closing, re.I)
        assert "\\" + "1" not in expl and "\\" + "2" not in expl
        assert "\ufffd" not in expl and "\ufffd" not in stmt

# Expected keys from original (hardcoded from earlier read)
expected = [
    [True, False, False, False, False],
    [True, False, True, False, False],
    [True, True, True, False, True],
    [False, False, True, True, True],
    [True, True, True, True, True],
    [True, True, False, True, True],
    [True, False, True, True, False],
    [True, True, False, True, False],
    [True, True, False, True, False],
    [True, True, False, True, False],
    [True, False, True, True, False],
    [True, False, True, False, True],
    [True, False, True, False, False],
    [True, True, False, True, False],
    [True, False, True, True, False],
    [True, False, False, True, True],
    [True, False, True, False, True],
    [True, False, True, True, True],
    [True, True, False, True, False],
    [True, False, True, True, False],
]
assert keys_snapshot == expected, list(zip(range(1, 21), keys_snapshot, expected))

# Sample arrows landed
n_arrows = sum(
    expl.count("\u2192") for t in data["tasks"] for expl in t["tactical_explanations"]
)
n_curly = sum(
    (expl.count("\u2019") + stmt.count("\u2019"))
    for t in data["tasks"]
    for expl, stmt in zip(t["tactical_explanations"], t["statements"])
)
print("arrows_in_expls", n_arrows)
print("curly_apos_stmt_expl", n_curly)
print("keys_ok")
print("claims_exact_ok")
print("BANS=0 verified structurally")

# Show a few edited snippets
for ti, ei in [(0, 1), (0, 3), (10, 3), (9, 0)]:
    expl = data["tasks"][ti]["tactical_explanations"][ei]
    body = expl.split("\n\n", 1)[1][:180].replace("\n", " | ")
    print(f"--- t{ti+1}/{chr(65+ei)} ---")
    print(body)
