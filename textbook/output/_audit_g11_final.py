import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.11.json")
data = json.loads(p.read_text(encoding="utf-8"))
assert len(data["tasks"]) == 20
letters = "ABCDE"
issues = []
both = []
for task in data["tasks"]:
    assert len(task["statements"]) == 5
    assert len(task["answer_key"]) == 5
    assert len(task["tactical_explanations"]) == 5
    for i, (stmt, key, expl) in enumerate(
        zip(task["statements"], task["answer_key"], task["tactical_explanations"])
    ):
        parts = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = parts[-1]
        m = re.match(r"\*\*([A-E])\) (.+?)\*\*", parts[0], re.S)
        claim = m.group(2) if m else None
        letter = m.group(1) if m else "?"
        if letter != letters[i]:
            issues.append(f"{task['id']}: letter {letter} expected {letters[i]}")
        ends = stmt[-1] in ".?!"
        if ends and claim != stmt:
            issues.append(f"{task['id']} {letters[i]}: claim period/header mismatch")
        if (not ends) and claim != stmt + ".":
            issues.append(f"{task['id']} {letters[i]}: claim should append period")
        ht, hf = "**true**" in closing, "**false**" in closing
        if key and not ht:
            issues.append(f"{task['id']} {letters[i]}: missing true")
        if (not key) and not hf:
            issues.append(f"{task['id']} {letters[i]}: missing false")
        if key and hf:
            both.append(f"{task['id']} {letters[i]} TRUE-key closing also has **false**")
        if (not key) and ht:
            both.append(f"{task['id']} {letters[i]} FALSE-key closing also has **true**")
        # overview answer line check lightly
    ov = task.get("solution_overview", "")
    m2 = re.search(r"A=(\w+), B=(\w+), C=(\w+), D=(\w+), E=(\w+)", ov)
    if m2:
        for i, lab in enumerate(m2.groups()):
            want = "TRUE" if task["answer_key"][i] else "FALSE"
            if lab != want:
                issues.append(f"{task['id']}: overview {letters[i]}={lab} != key {want}")

out = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_audit_g11_final.txt")
out.write_text(
    "ISSUES:\n"
    + ("\n".join(issues) if issues else "(none)")
    + "\n\nDUAL-VERDICT CLOSINGS:\n"
    + ("\n".join(both) if both else "(none)")
    + "\n",
    encoding="utf-8",
)
print("issues", len(issues), "dual", len(both))
