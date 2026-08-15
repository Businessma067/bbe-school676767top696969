# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.15.json")
data = json.loads(p.read_text(encoding="utf-8"))

print("=== highlight not in statement ===")
for t in data["tasks"]:
    for i, (s, h) in enumerate(zip(t["statements"], t["highlights"])):
        if h not in s:
            print(t["id"], "ABCDE"[i], "HIGHLIGHT", repr(h), "not in", repr(s))

print("\n=== premature bold verdicts in body (not last para) ===")
for t in data["tasks"]:
    for i, (k, e) in enumerate(zip(t["answer_key"], t["tactical_explanations"])):
        parts = [x for x in e.strip().split("\n\n") if x.strip()]
        for pi, para in enumerate(parts[:-1]):
            if re.search(r"\*\*(true|false)\*\*", para, re.I):
                # Tip/Trap ok? trap may mention false
                kind = "Tip/Trap" if para.strip().startswith("**") else "body"
                print(t["id"], "ABCDE"[i], f"para{pi}", kind, "key="+str(k), para[:140].replace("\n", " "))

print("\n=== soft true phrasing without bold? already checked ===")

print("\n=== suspicious advice snippets ===")
# look for wrong correlative teaching
for t in data["tasks"]:
    for i, e in enumerate(t["tactical_explanations"]):
        if re.search(r"hardly.*\bthan\b.*right|than.*hardly.*correct|scarcely.*than(?!.*wrong|.*fail|.*not)", e, re.I):
            # too broad — skip
            pass
        if "when" in e.lower() and "no sooner" in e.lower() and "pairs with when" in e.lower():
            print(t["id"], "ABCDE"[i], "TEACHES no sooner + when??")
        if re.search(r"no sooner[^\n]{0,40}when[^\n]{0,20}(right|correct|pairs)", e, re.I):
            print(t["id"], "ABCDE"[i], "suspected no-sooner+when endorsement", e[e.lower().find('no sooner'):e.lower().find('no sooner')+120])

print("\n=== café unicode check ===")
s = data["tasks"][0]["statements"][1]
print(repr(s))
print([hex(ord(c)) for c in s if ord(c) > 127])
