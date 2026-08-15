import json, re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.7.json")
data = json.loads(p.read_text(encoding="utf-8"))

print("=== SOFT VERDICTS ===")
for task in data["tasks"]:
    for i, (k, e) in enumerate(zip(task["answer_key"], task["tactical_explanations"])):
        letter = "ABCDE"[i]
        verdict = e.strip().split("\n\n")[-1]
        if k and "**true**" not in verdict:
            print("TRUE_SOFT", task["case_id"], letter)
            print(" ", verdict)
        if (not k) and "**false**" not in verdict:
            print("FALSE_SOFT", task["case_id"], letter)
            print(" ", verdict)

print("\n=== HIGHLIGHT CONTAINMENT ===")
for task in data["tasks"]:
    for i, (s, h) in enumerate(zip(task["statements"], task["highlights"])):
        if h.lower() not in s.lower():
            # allow minor inflection mismatches like refuse/refused
            print("HL?", task["case_id"], "ABCDE"[i], repr(h))
            print("   ", s)

print("\n=== ANSWER LINE vs KEY ===")
for task in data["tasks"]:
    m = re.search(r"\*\*Answer\.\*\*\s*(.*)$", task["solution_overview"])
    if not m:
        print("NO ANSWER", task["case_id"])
        continue
    ans = m.group(1)
    parsed = []
    for part in ans.split(","):
        part = part.strip()
        val = "TRUE" in part.upper() and "FALSE" not in part.upper()
        # careful: TRUE/FALSE
        if "FALSE" in part.upper():
            parsed.append(False)
        elif "TRUE" in part.upper():
            parsed.append(True)
        else:
            print("PARSEFAIL", task["case_id"], part)
    if parsed != task["answer_key"]:
        print("MISMATCH OVERVIEW", task["case_id"], parsed, task["answer_key"])

print("\n=== EDGE CASES TO REVIEW ===")
edges = [
    ("en-g-7-07", 4),  # listen music
    ("en-g-7-11", 2),  # refused not to
    ("en-g-7-14", 0),  # never stop to wonder
    ("en-g-7-16", 4),  # enjoy when
    ("en-g-7-18", 4),  # refuse offer of driving
    ("en-g-7-19", 3),  # enjoy that
]
by_id = {t["id"]: t for t in data["tasks"]}
for tid, idx in edges:
    t = by_id[tid]
    print("---", tid, "ABCDE"[idx], "key=", t["answer_key"][idx])
    print("STMT:", t["statements"][idx])
    print("EXPL:", t["tactical_explanations"][idx][-200:].replace("\n", " / "))
