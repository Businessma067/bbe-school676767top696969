# -*- coding: utf-8 -*-
import json
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.15.json")
data = json.loads(p.read_text(encoding="utf-8"))

# dump non-ascii and weird phrases
phrases = []
for t in data["tasks"]:
    for i, e in enumerate(t["tactical_explanations"]):
        # find weird patterns
        if "model **true**" in e:
            phrases.append((t["id"], "ABCDE"[i], "model **true**"))
        if "a model true" in e.lower():
            phrases.append((t["id"], "ABCDE"[i], "model true phrasing"))
        # curly vs straight in claim vs stmt
        s = t["statements"][i]
        # collect apostrophe chars
        for label, text in [("stmt", s), ("expl", e[:120])]:
            for ch in text:
                if ch in "'ʼ'`" or ord(ch) in (0x2019, 0x2018, 0x02BC):
                    phrases.append((t["id"], "ABCDE"[i], label, "apos", repr(ch), hex(ord(ch))))

# unique
seen=set(); out=[]
for x in phrases:
    if x not in seen:
        seen.add(x); out.append(x)
for x in out:
    print(x)

# Manual semantic flags I'll print for review: ALL false repairs re-check
print("\n=== FALSE REPAIRS FULL ===")
import re
for t in data["tasks"]:
    for i,(s,k,e) in enumerate(zip(t["statements"], t["answer_key"], t["tactical_explanations"])):
        if k: continue
        parts=[x for x in e.strip().split("\n\n") if x.strip()]
        close=parts[-1]
        quotes=re.findall(r'"([^"]+)"', close)
        print(f"{t['id']} {'ABCDE'[i]}")
        print(f"  STMT: {s}")
        print(f"  CLOSE: {close[:200]}")
        if quotes:
            print(f"  FIXQ: {quotes[-1]}")
