# -*- coding: utf-8 -*-
import json, re
from pathlib import Path

back = dbl = unpack = 0
for i in range(1, 21):
    d = json.loads(Path(f"src/data/english/grammar_parts/g.{i}.json").read_text(encoding="utf-8-sig"))
    for t in d["tasks"]:
        for e in t["tactical_explanations"]:
            if re.search(r"\\[0-9]", e):
                back += 1
            head = e.strip().split("\n\n", 1)[0].replace("\n", " ")
            if re.search(r'\."\.\*\*$', head):
                dbl += 1
            if re.search(r"(?i)unpacks?\s+(?:fairly\s+)?into\s+The", e):
                unpack += 1
print("back", back, "claim_dbl", dbl, "unpack_bare", unpack)
d = json.loads(Path("src/data/english/grammar_parts/g.5.json").read_text(encoding="utf-8-sig"))
for e in d["tasks"][18]["tactical_explanations"]:
    if "briefed" in e.lower():
        paras = [p for p in e.strip().split("\n\n") if p.strip()]
        print("SAMPLE:", paras[1][:240] if len(paras) > 1 else paras[0][:240])
