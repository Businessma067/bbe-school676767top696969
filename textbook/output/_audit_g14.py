import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.14.json")
data = json.loads(p.read_text(encoding="utf-8"))
print("tasks", len(data["tasks"]))
issues = []
for t in data["tasks"]:
    n = len(t["statements"])
    if n != 5:
        issues.append((t["id"], "stmt_count", n))
    if len(t["answer_key"]) != n:
        issues.append((t["id"], "key_len", len(t["answer_key"])))
    if len(t["tactical_explanations"]) != n:
        issues.append((t["id"], "expl_len", len(t["tactical_explanations"])))
    if len(t["highlights"]) != n:
        issues.append((t["id"], "hl_len", len(t["highlights"])))
    letters = "ABCDE"
    for i, (stmt, key, expl, hl) in enumerate(
        zip(t["statements"], t["answer_key"], t["tactical_explanations"], t["highlights"])
    ):
        first = expl.split("\n", 1)[0]
        if stmt.endswith((".", "!", "?")):
            expect = f"**{letters[i]}) {stmt}**"
        else:
            expect = f"**{letters[i]}) {stmt}.**"
        if first.strip() != expect:
            issues.append((t["id"], letters[i], "header_mismatch"))
            print("HDR", t["id"], letters[i])
            print("  got:", first.strip()[:140])
            print("  exp:", expect[:140])
        if hl not in stmt:
            issues.append((t["id"], letters[i], "hl_missing", hl))
        paras = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = paras[-1] if paras else ""
        tokens = re.findall(r"\*\*(true|false)\*\*", closing, flags=re.I)
        if not tokens:
            issues.append((t["id"], letters[i], "no_tf_in_closing", closing[:160]))
        else:
            claimed = tokens[-1].lower() == "true"
            if claimed != bool(key):
                issues.append(
                    (t["id"], letters[i], "closing_vs_key", claimed, key, closing[:180])
                )
        if key is False:
            quoted = re.findall(r'"([^"]+)"', expl)
            if not quoted:
                issues.append((t["id"], letters[i], "false_no_quoted_repair"))
        body = expl.lower()
        if "not are" in body and " is " in stmt.lower() and " are " not in stmt.lower():
            issues.append((t["id"], letters[i], "advice_says_are_but_stmt_is"))
        if "not is" in body and " are " in stmt.lower() and " is " not in stmt.lower():
            issues.append((t["id"], letters[i], "advice_says_is_but_stmt_are"))

print("ISSUES", len(issues))
for x in issues:
    print(x)
