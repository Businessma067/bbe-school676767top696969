import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.11.json")
data = json.loads(p.read_text(encoding="utf-8"))
letters = "ABCDE"
missing = []

for task in data["tasks"]:
    keys = task["answer_key"]
    for i, (expl, key) in enumerate(zip(task["tactical_explanations"], keys)):
        parts = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = parts[-1]
        has_true = "**true**" in closing
        has_false = "**false**" in closing
        m = re.match(r"\*\*([A-E])\) (.+?)\*\*", parts[0], re.S)
        claim = m.group(2) if m else None
        stmt = task["statements"][i]
        ends_punct = stmt[-1] in ".?!"
        if ends_punct:
            header_ok = claim == stmt
        else:
            header_ok = claim == stmt + "."
        issues = []
        if key and not has_true:
            issues.append("missing **true** in closing")
        if (not key) and not has_false:
            issues.append("missing **false** in closing")
        if key and has_false and not has_true:
            issues.append("has **false** but key true")
        if (not key) and has_true and not has_false:
            issues.append("has **true** but no **false** while key false")
        if not header_ok:
            issues.append(f"claim mismatch claim={claim!r} stmt={stmt!r}")
        if issues:
            missing.append((task["id"], letters[i], key, issues, closing[:180]))

out = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_audit_g11_verdicts.txt")
lines = []
for row in missing:
    lines.append(f"{row[0]} {row[1]} key={row[2]} | {'; '.join(row[3])}")
    lines.append(f"  CLOSE: {row[4]}")
    lines.append("")
lines.append(f"TOTAL flagged closings: {len(missing)}")
out.write_text("\n".join(lines), encoding="utf-8")
print(f"Wrote {len(missing)} to {out}")
