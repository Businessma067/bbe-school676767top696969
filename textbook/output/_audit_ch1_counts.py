import json
import re
from collections import Counter
from pathlib import Path

text = Path("src/data/math-ch1-logic.ts").read_text(encoding="utf-8")
print("cases", len(re.findall(r'case_id: "MATH 1\.', text)))
print("subs", re.findall(r'id: "1\.\d"', text)[:10])
print("size_kb", round(Path("src/data/math-ch1-logic.ts").stat().st_size / 1024, 1))
print("diffs", Counter(re.findall(r'difficulty_level: "(\d/5)"', text)))
# per subsection from polished
banks = Path("textbook/output/ch1_logic_banks")
for sid in ("1.1", "1.2", "1.3", "1.4"):
    b = json.loads((banks / f"{sid}_POLISHED.json").read_text(encoding="utf-8"))
    print(sid, "n", len(b), "diffs", Counter(t["difficulty_level"] for t in b))
