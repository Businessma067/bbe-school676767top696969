# -*- coding: utf-8 -*-
import json
from pathlib import Path

d = json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
for cid in ["DEMO MATH 5.H01", "DEMO MATH 8.H01", "DEMO MATH 11.H01"]:
    t = next(x for x in d["math"] if x["case_id"] == cid)
    Path("scripts/_keys_out.txt").write_text(
        Path("scripts/_keys_out.txt").read_text(encoding="utf-8")
        if Path("scripts/_keys_out.txt").exists()
        else ""
        + f"\n{cid}\nkeys={t['answer_key']}\n"
        + "\n".join(f"  {L}: {s}" for L, s in zip("ABCDE", t["statements"])),
        encoding="utf-8",
    )
# rewrite cleanly
parts = []
for cid in ["DEMO MATH 5.H01", "DEMO MATH 8.H01", "DEMO MATH 11.H01", "MATH 12.187", "MATH 13.108"]:
    t = next(x for x in d["math"] if x["case_id"] == cid)
    parts.append(f"## {cid}\nkeys={t['answer_key']}")
    for L, s, k in zip("ABCDE", t["statements"], t["answer_key"]):
        parts.append(f"  {L} ({'T' if k else 'F'}): {s}")
Path("scripts/_keys_out.txt").write_text("\n".join(parts), encoding="utf-8")
print("ok")
