# -*- coding: utf-8 -*-
import json
import subprocess
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
old = json.loads(
    subprocess.check_output(
        ["git", "-C", str(ROOT), "show", "HEAD:src/data/english/grammar_parts/g.20.json"],
        text=True,
        encoding="utf-8",
    )
)
new = json.loads((ROOT / "src/data/english/grammar_parts/g.20.json").read_text(encoding="utf-8"))
ok = True
letters = "ABCDE"
for a, b in zip(old["tasks"], new["tasks"]):
    for k in ["statements", "answer_key", "highlights", "id", "case_id", "difficulty_level", "sort_order"]:
        if a[k] != b[k]:
            print("DIFF", a["id"], k)
            ok = False
    if a["solution_overview"] == b["solution_overview"]:
        print("overview NOT changed", a["id"])
        ok = False
    if a["tactical_explanations"] == b["tactical_explanations"]:
        print("tacs NOT changed", a["id"])
        ok = False
    ans_line = [L for L in b["solution_overview"].splitlines() if L.startswith("**Answer.**")][0]
    for i, v in enumerate(a["answer_key"]):
        want = f"{letters[i]}={'TRUE' if v else 'FALSE'}"
        if want not in ans_line:
            print("answer mismatch", a["id"], want, ans_line)
            ok = False
print("PASS" if ok else "FAIL")
t = new["tasks"][-1]
print("T20 Answer:", [L for L in t["solution_overview"].splitlines() if "Answer" in L][0])
print("T20 E:", t["tactical_explanations"][4].split("\n")[0])
text = (ROOT / "src/data/english/grammar_parts/g.20.json").read_text(encoding="utf-8")
print("has cafe", "café" in text)
print("no replacement", "\ufffd" not in text)
