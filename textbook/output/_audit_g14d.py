import json, re
from pathlib import Path
p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.14.json")
data = json.loads(p.read_text(encoding="utf-8"))
letters="ABCDE"
# banned closing voices
bans = [
    r"So the statement holds",
    r"So the statement is false",
    r"\bKeep this\b",
    r"\bAccept the line\b",
    r"\bMark it wrong\b",
    r"\bReject this\b",
    r"\bCall it wrong\b",
    r"\bStrike\b",
    r"\(true\)",
    r"\(false\)",
]
for t in data["tasks"]:
    for i, expl in enumerate(t["tactical_explanations"]):
        for b in bans:
            if re.search(b, expl, re.I):
                print("BAN", t["id"], letters[i], b)
        paras=[x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing=paras[-1]
        if closing.startswith("**Tip:") or closing.startswith("**Trap:"):
            print("CLOSING IS TIP/TRAP", t["id"], letters[i])
# solution overview typos
for t in data["tasks"]:
    ov=t["solution_overview"]
    if "are/are" in ov or "is/is" in ov:
        print("OV typo", t["id"], [line for line in ov.splitlines() if "are/are" in line or "is/is" in line])
# Check false closings that don't quote full repair sentence
print("\n=== FALSE without full-sentence repair quote ===")
for t in data["tasks"]:
    for i,(stmt,key,expl) in enumerate(zip(t["statements"], t["answer_key"], t["tactical_explanations"])):
        if key is not False: continue
        qs=re.findall(r'"([^"]+)"', expl)
        # prefer sentence-like with capital start
        full=[q for q in qs if q[:1].isupper() and q.endswith(".")]
        if not full:
            print(t["id"], letters[i], "quotes:", qs)
