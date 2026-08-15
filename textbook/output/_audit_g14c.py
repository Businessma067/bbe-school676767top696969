import json, re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.14.json")
data = json.loads(p.read_text(encoding="utf-8"))
letters = "ABCDE"

# semantic mismatches: advice mentions wrong form
patterns_checks = []
for t in data["tasks"]:
    for i, (stmt, key, expl, hl) in enumerate(zip(t["statements"], t["answer_key"], t["tactical_explanations"], t["highlights"])):
        issues = []
        # if statement uses 'is X', closing shouldn't say 'not are' as the error form
        if re.search(r'\bis\b', stmt) and re.search(r'not are\b', expl):
            issues.append("says not are but stmt has is")
        if re.search(r'\bare\b', stmt) and re.search(r'not is\b', expl) and not re.search(r'\bis\b', stmt):
            issues.append("says not is but stmt has are")
        # Trap/Tip with **true**/ **false** not as verdict
        for m in re.finditer(r'\*\*(true|false)\*\*', expl):
            # context window
            start=max(0,m.start()-40); end=min(len(expl), m.end()+40)
            ctx=expl[start:end].replace('\n',' ')
            # if in Tip/Trap paragraph
            # find which para
            pass
        paras = [x.strip() for x in expl.strip().split('\n\n') if x.strip()]
        for pi, para in enumerate(paras):
            if para.startswith('**Trap:') or para.startswith('**Tip:'):
                if '**true**' in para or '**false**' in para:
                    issues.append(f"bold tf in Tip/Trap: {para[:120]}")
        # rebuild-as wrong direction in body
        if 'Rebuild as' in expl and 'takes' in expl:
            issues.append('rebuild_as_look')
        # Check repairs in false items: repaired verb should be bare / be
        if key is False:
            quoted = re.findall(r'"([^"]+\.)"', expl)
            if quoted:
                repair = quoted[-1]
                # crude: if highlight still appears as whole word in repair
                if re.search(rf'\b{re.escape(hl)}\b', repair):
                    issues.append(f"hl remains in repair: {repair}")
        if issues:
            print(f"{t['id']} {letters[i]}:")
            for x in issues:
                print(" ", x)

# Check solution overview Answer lines match keys
print("\n=== OVERVIEW vs KEY ===")
for t in data["tasks"]:
    ov = t["solution_overview"]
    m = re.search(r"\*\*Answer\.\*\*\s*(.+)$", ov)
    if not m:
        print(t["id"], "NO ANSWER LINE")
        continue
    ans = m.group(1)
    # parse A=TRUE etc
    parts = re.findall(r"([A-E])=(TRUE|FALSE)", ans)
    expected = [("TRUE" if k else "FALSE") for k in t["answer_key"]]
    got = [v for _,v in parts]
    if got != expected:
        print(t["id"], "MISMATCH", got, expected)
    else:
        pass
print("overview checks done")

# Mid-body double period headers?
print("\n=== HEADER PERIOD RULE ===")
for t in data["tasks"]:
    for i,(stmt,expl) in enumerate(zip(t["statements"], t["tactical_explanations"])):
        first=expl.split("\n",1)[0]
        if stmt.endswith(".") and first.endswith(".**"):
            # **A) stmt.**  where stmt already has . → ends with ..**
            if first.endswith("..**"):
                print("DOUBLE PERIOD", t["id"], letters[i], first[-20:])
