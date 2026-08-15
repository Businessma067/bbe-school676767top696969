# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

fix = json.loads(Path("textbook/output/ch11_subsection_fixes/11.4.json").read_text(encoding="utf-8"))
raw = json.loads(Path("textbook/output/ch11_raw.json").read_text(encoding="utf-8"))
raw4 = next(s for s in raw["subsections"] if s["id"] == "11.4")["tasks"]

print("same content?", json.dumps(fix, ensure_ascii=False) == json.dumps(raw4, ensure_ascii=False))


def count_bare(tasks):
    n = 0
    samples = []
    for t in tasks:
        blob = "\n".join(
            [t.get(k) or "" for k in ("given", "formulas", "steps")]
            + (t.get("explanations") or [])
            + (t.get("statements") or [])
        )
        for m in re.finditer(r"(?<![_$\\])\b(sn|fn|s\d{1,2}|an)\b", blob):
            # skip if already inside $...$ roughly: look back for unpaired $
            before = blob[max(0, m.start() - 40) : m.start()]
            if before.count("$") % 2 == 1:
                continue
            n += 1
            if len(samples) < 8:
                samples.append(f"{t['local_num']}:{m.group(0)}")
    return n, samples


nf, sf = count_bare(fix)
nr, sr = count_bare(raw4)
print("bare in fix", nf, sf)
print("bare in raw", nr, sr)
print("fix formulas0 ascii:", (fix[0].get("formulas") or "")[:100].encode("ascii", "replace").decode())
print("raw  formulas0 ascii:", (raw4[0].get("formulas") or "")[:100].encode("ascii", "replace").decode())
