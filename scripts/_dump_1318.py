# -*- coding: utf-8 -*-
import json
from pathlib import Path

data = json.loads(Path("src/data/mock-exam-4-sourced.json").read_text(encoding="utf-8"))
for t in data["math"]:
    if t["case_id"] == "MATH 13.18":
        for i, e in enumerate(t["tactical_explanations"]):
            print("=" * 40, "LETTER", "ABCDE"[i], "len", len(e), "blocks", e.count("$$") // 2)
            print(e)
            print()
