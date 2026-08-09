# -*- coding: utf-8 -*-
"""Scan Ch11 for currency $ colliding with KaTeX assignments."""
import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
raw = json.loads((ROOT / "textbook/output/ch11_raw.json").read_text(encoding="utf-8"))

# $var$ = $1,234  or  $var$ = -$1,234
PAT_ASSIGN = re.compile(
    r"\$[^$\n]{1,40}\$\s*=\s*-?\$\d"
)
# leftover open currency after math close like: = -$8,000 < 0 and $a_1$
PAT_OPEN_MONEY = re.compile(
    r"=\s*-?\$\d[\d,]*(?:\.\d+)?(?:\s*[<>=])"
)

FIELDS = (
    "title", "context", "statements", "given", "formulas",
    "steps", "explanations", "answer_key_text",
)

def walk(obj, path, hits):
    if isinstance(obj, dict):
        for k, v in obj.items():
            walk(v, path + [k], hits)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk(v, path + [str(i)], hits)
    elif isinstance(obj, str):
        for m in PAT_ASSIGN.finditer(obj):
            hits.append(("ASSIGN", "/".join(path), m.group(0), obj[max(0, m.start()-40):m.end()+40]))
        for m in PAT_OPEN_MONEY.finditer(obj):
            # skip if already escaped \$
            start = m.start()
            if start > 0 and obj[start - 1] == "\\":
                continue
            # skip if this is inside a properly escaped math span we already rewrote —
            # still report for audit
            hits.append(("OPEN_MONEY", "/".join(path), m.group(0), obj[max(0, m.start()-40):m.end()+40]))

total = 0
for sub in raw["subsections"]:
    sid = sub["id"]
    hits = []
    for ti, t in enumerate(sub["tasks"]):
        walk(t, [sid, f"t{t.get('local_num', ti+1)}"], hits)
    print(f"=== {sid} hits={len(hits)} ===")
    for kind, path, snip, ctx in hits[:40]:
        safe = ctx.replace("\n", "\\n").encode("ascii", "replace").decode()
        print(f"  [{kind}] {path}: ...{safe}...")
    if len(hits) > 40:
        print(f"  ... +{len(hits)-40} more")
    total += len(hits)
print(f"TOTAL {total}")
