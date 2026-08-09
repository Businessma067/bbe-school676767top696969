# -*- coding: utf-8 -*-
"""Audit half-math: bare algebra LHS joined to $math$ RHS (or reverse)."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
raw = json.loads((ROOT / "textbook/output/ch11_raw.json").read_text(encoding="utf-8"))

# bare LHS = $math  e.g. 2A(t+k) = $r A...
PAT_LHS = re.compile(
    r"(?<![\\$])([A-Za-z0-9][A-Za-z0-9'()_*^{}\\+\-×·/\s]{0,40}?)\s*=\s*\$"
)
# $math$ = bare RHS with letters  e.g. $x$ = 2A(t+k) without wrapping — softer
PAT_RHS = re.compile(
    r"\$([^$\n]{1,60})\$\s*=\s*([A-Za-z][A-Za-z0-9'()_*^{}+\-/\s]{0,40})(?=\s|$|[.;,])"
)
# number × $e^{...}$ mid-glue
PAT_TIMES_MATH = re.compile(r"\d\s*[×x]\s*\$")


def walk(obj, path, acc):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == "answer_key":
                continue
            walk(v, path + [k], acc)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk(v, path + [str(i)], acc)
    elif isinstance(obj, str):
        acc.append(("/".join(path), obj))


by = {f"11.{i}": [] for i in range(1, 8)}
for sub in raw["subsections"]:
    for t in sub["tasks"]:
        acc = []
        walk(t, [sub["id"], f"t{t['local_num']}"], acc)
        for p, s in acc:
            for m in PAT_LHS.finditer(s):
                lhs = m.group(1).strip()
                # skip pure currency prose like "approximately = $..." weird
                if re.fullmatch(r"[\d.,\s]+", lhs):
                    continue
                # skip if lhs ends with backslash command start
                snip = s[max(0, m.start() - 20) : m.end() + 50].replace("\n", "\\n")
                by[sub["id"]].append(("LHS_EQ_MATH", p, snip))
            for m in PAT_TIMES_MATH.finditer(s):
                snip = s[max(0, m.start() - 15) : m.end() + 40].replace("\n", "\\n")
                by[sub["id"]].append(("NUM_TIMES_MATH", p, snip))

lines = []
print("=== COUNTS ===")
for sid, hits in by.items():
    print(sid, len(hits))
    lines.append(f"## {sid} ({len(hits)})")
    for kind, p, sn in hits[:50]:
        safe = sn.encode("ascii", "replace").decode()
        lines.append(f"  [{kind}] {p}: ...{safe}...")
        print(f"  [{kind}] {p}: ...{safe}..."[:220])
    if len(hits) > 50:
        lines.append(f"  ... +{len(hits)-50} more")

(ROOT / "textbook/output/_audit_half_math.txt").write_text("\n".join(lines), encoding="utf-8")
print("total", sum(len(v) for v in by.values()))
