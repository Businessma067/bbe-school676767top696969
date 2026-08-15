# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.20.json")
d = json.loads(p.read_text(encoding="utf-8"))
notes = []

for t in d["tasks"]:
    for i, (s, k, e) in enumerate(zip(t["statements"], t["answer_key"], t["tactical_explanations"])):
        L = chr(65 + i)
        # claim
        if not e.startswith(f"**{L}) {s}"):
            notes.append((t["id"], L, "CLAIM_MISMATCH"))
        # closing TF
        parts = e.strip().split("\n\n")
        closing = parts[-1]
        cbolds = re.findall(r"\*\*(true|false)\*\*", closing, re.I)
        if not cbolds:
            notes.append((t["id"], L, "NO_CLOSING_TF", closing[-160:]))
        else:
            use = cbolds[-1].lower()
            exp = "true" if k else "false"
            if use != exp:
                notes.append((t["id"], L, "CLOSING_MISMATCH", use, exp, closing[:200]))
        # repair quote presence for falses
        if not k and '"' not in closing and "\u201c" not in closing:
            notes.append((t["id"], L, "FALSE_NO_REPAIR_QUOTE", closing[:160]))
        # who's + noun
        m = re.search(r"who's\s+(\w+)", s, re.I)
        if m:
            w = m.group(1).lower()
            ok = w in {"been", "responsible", "attending"} or w.endswith("ing")
            if ok and not k:
                notes.append((t["id"], L, "SUSPECT_FALSE_GOOD_WHOS", s))
            if (not ok) and k:
                notes.append((t["id"], L, "SUSPECT_TRUE_BAD_WHOS", s))
        if re.search(r"\bwhomever\s+(arrives|is|finishes|meets|was|are)\b", s, re.I) and k:
            notes.append((t["id"], L, "SUSPECT_TRUE_WHOMEVER_SUBJ", s))
        if re.search(r"\bbetween\b.{0,50}\band I\b", s) and k:
            notes.append((t["id"], L, "SUSPECT_TRUE_BETWEEN_I", s))
        if "less formal approvals" in s.lower():
            notes.append((t["id"], L, "AMBIG_LESS_FORMAL", k, s))
        if re.search(r"\bless than \w+ applications\b", s, re.I):
            notes.append((t["id"], L, "LESS_THAN_NUM_COUNT", k, s))
        # effect as influence (no 'a change/settlement/reduction/improvements')
        if re.search(r"\beffect\b", s, re.I) and not re.search(
            r"effect (a |an |several |lasting |little )", s, re.I
        ):
            if "had little effect" not in s.lower() and k:
                # verb effect used wrongly as influence?
                if re.search(r"will effect|to effect|may effect|effect (your|the|parents|audience|my|project)", s, re.I):
                    notes.append((t["id"], L, "SUSPECT_TRUE_EFFECT_INFLUENCE", s))
        # affect / effect noun check: had little effect should be true
        if "little effect" in s.lower() and not k:
            notes.append((t["id"], L, "SUSPECT_FALSE_EFFECT_NOUN", s))

print("issues/notes:", len(notes))
for n in notes:
    print(n)
print("tasks", len(d["tasks"]), "items", sum(len(t["statements"]) for t in d["tasks"]))
