# -*- coding: utf-8 -*-
"""Focused ban verifier for g.12 punct/symbol pass."""
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.12.json")
data = json.loads(p.read_text(encoding="utf-8-sig"))

BACKREF = re.compile(r"(?<!\\)\\[0-9]")
bans = []

for ti, task in enumerate(data["tasks"]):
    stmts = task["statements"]
    for ei, (stmt, expl) in enumerate(zip(stmts, task["tactical_explanations"])):
        loc = f"t{ti+1}/{chr(65+ei)}"
        m = re.match(r"\*\*([A-E])\) (.*?)\*\*", expl, re.S)
        if not m:
            bans.append(("NO_CLAIM", loc))
            continue
        letter, claim = m.group(1), m.group(2)
        if letter != chr(65 + ei):
            bans.append(("LETTER", loc, letter))
        if claim != stmt:
            # double period case: claim == stmt + '.'
            if claim == stmt + ".":
                bans.append(("DBL_CLAIM_PERIOD", loc, claim[-50:]))
            else:
                bans.append(("CLAIM_NE_STMT", loc))
        # also flag ." .** style
        if re.search(r'[.?!]["\u201d]\.$', claim):
            bans.append(("DBL_AFTER_QUOTE", loc, claim[-40:]))
        if BACKREF.search(expl) or BACKREF.search(stmt):
            bans.append(("BACKREF", loc))
        if "\ufffd" in expl or "\ufffd" in stmt:
            bans.append(("FFFD", loc))
        # unpack/paraphrase without arrow+quotes
        if re.search(r"(?i)\bunpacks?\b", expl) and "\u2192" not in expl:
            bans.append(("UNPACK_NO_ARROW", loc))
        if re.search(r"(?i)\bparaphrases?\s+(cleanly\s+)?(as|into)\s+(?![\\"\u201c])", expl):
            if "\u2192" not in expl:
                bans.append(("PARA_NO_ARROW", loc))

print("BANS", len(bans))
for b in bans:
    print(b)

# Also list tip lines that look like form-pairs without arrow
print("\n--- TIP / form-pair candidates ---")
for ti, task in enumerate(data["tasks"]):
    for ei, expl in enumerate(task["tactical_explanations"]):
        loc = f"t{ti+1}/{chr(65+ei)}"
        for tip in re.finditer(r"(?im)^\*\*Tip:\*\* (.+)$", expl):
            body = tip.group(1)
            if "\u2192" not in body and re.search(r"(?i)(\+|not |/|vs |versus |before |after )", body):
                print(loc, body)
        # body form charts with "versus" that are linker patterns
        for mm in re.finditer(
            r"(?i)(because(?: of)?|despite|although|owing(?: to)?|noun|clause)[^.!\n]{0,40}(versus|vs\.?)[^.!\n]{0,40}",
            expl,
        ):
            chunk = mm.group(0)
            if "\u2192" not in expl[max(0, mm.start() - 40) : mm.end() + 40]:
                print("VS", loc, chunk)
