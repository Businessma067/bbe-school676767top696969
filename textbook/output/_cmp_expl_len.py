# -*- coding: utf-8 -*-
import json
from pathlib import Path

ov = json.loads(Path("textbook/output/ch5_expl_overrides.json").read_text(encoding="utf-8"))
raw = json.loads(Path("textbook/output/linear_eq_60_raw.json").read_text(encoding="utf-8"))
b01 = json.loads(Path("textbook/output/ch5_expl_override_01_15.json").read_text(encoding="utf-8"))

for n in [1, 4, 52]:
    t = raw[n - 1]
    print("====", n, "====")
    print("overview len", len(ov[str(n)]["solution_overview"]))
    for i, e in enumerate(ov[str(n)]["tactical_explanations"]):
        print(f"  {chr(65+i)} now={len(e)} pdf={len(t['explanations'][i])}")
        print("   NOW:", e[:220].replace("\n", " | "))
        if str(n) in b01:
            orig = b01[str(n)]["tactical_explanations"][i]
            print("   ORIG:", orig[:220].replace("\n", " | "))
        print()
