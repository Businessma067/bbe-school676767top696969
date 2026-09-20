import json
import re
from pathlib import Path

ov = json.loads(Path(r"src/data/wiso/math-de-ch11.json").read_text(encoding="utf-8"))
src = json.loads(
    Path(r"textbook/output/wiso_math_retranslate/ch11-p03.json").read_text(encoding="utf-8")
)
issues = []
for c in src:
    cid = c["case_id"]
    expls = ov[cid]["tactical_explanations"]
    key = c["answer_key"]
    for i, e in enumerate(expls):
        letter = chr(65 + i)
        if "—" in e:
            issues.append(f"{cid} {letter}: emdash")
        if re.search(r"\b(True|False|So the statement)\b", e):
            issues.append(f"{cid} {letter}: EN leftover")
        if "логик" in e:
            issues.append(f"{cid} {letter}: cyrillic")
        want = "wahr" if key[i] else "falsch"
        if not e.strip().endswith(f"Die Aussage ist {want}."):
            issues.append(f"{cid} {letter}: closer")
        en = c["tactical_explanations_en"][i]
        marker = "$$"
        if en.count(marker) != e.count(marker):
            issues.append(
                f"{cid} {letter}: $$ {en.count(marker)} vs {e.count(marker)}"
            )
print("cases", len(src), "issues", len(issues))
for x in issues:
    print(x)
print("11.45 A header:", ov["MATH 11.45"]["tactical_explanations"][0].split("\n", 1)[0])
print("11.57 C has Erlöslogik:", "Erlöslogik" in ov["MATH 11.57"]["tactical_explanations"][2])
