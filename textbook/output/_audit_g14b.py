import json, re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.14.json")
data = json.loads(p.read_text(encoding="utf-8"))
letters = "ABCDE"

# Find all closings where last **/true|false** token mismatches key
print("=== LAST-TOKEN vs KEY MISMATCHES ===")
for t in data["tasks"]:
    for i, (stmt, key, expl) in enumerate(zip(t["statements"], t["answer_key"], t["tactical_explanations"])):
        paras = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = paras[-1]
        tokens = re.findall(r"\*\*(true|false)\*\*", closing, flags=re.I)
        if tokens:
            claimed = tokens[-1].lower() == "true"
            if claimed != bool(key):
                print(f"{t['id']} {letters[i]} key={key} last={tokens[-1]} :: {closing[:200]}")

print("\n=== ALL '**true** version' / dual-bold closings ===")
for t in data["tasks"]:
    for i, expl in enumerate(t["tactical_explanations"]):
        paras = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = paras[-1]
        tokens = re.findall(r"\*\*(true|false)\*\*", closing, flags=re.I)
        if len(tokens) > 1:
            print(f"{t['id']} {letters[i]} tokens={tokens} :: {closing[:220]}")

print("\n=== Soft/edge triggers check (agreed/stressed/provides) ===")
for t in data["tasks"]:
    for i, (stmt, key) in enumerate(zip(t["statements"], t["answer_key"])):
        low = stmt.lower()
        # spot potential non-mandative
        for cue in ["agreed that", "stressed that", "provides that", "provide that", "states that"]:
            if cue in low:
                print(f"{t['id']} {letters[i]} KEY={key} | {stmt}")

print("\n=== Repairs that may be wrong (quoted sentences ending) ===")
for t in data["tasks"]:
    for i, (stmt, key, expl) in enumerate(zip(t["statements"], t["answer_key"], t["tactical_explanations"])):
        if key is not False:
            continue
        quoted = re.findall(r'"([^"]+)"', expl)
        # last quoted often repair
        if quoted:
            repair = quoted[-1]
            # repair should still contain mandative trigger words from stmtish
            # check if repair still has -s form of highlight
            hl = t["highlights"][i]
            if hl in repair and not repair.startswith("that "):
                # highlight left in repair = bad unless highlight is the good form
                # for false, highlight is usually the bad bit
                print(f"POSSIBLE BAD REPAIR {t['id']} {letters[i]} hl={hl!r} still in repair: {repair}")
