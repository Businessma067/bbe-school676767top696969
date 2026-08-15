# -*- coding: utf-8 -*-
"""Deep structural audit for g.18.json claims / keys / closings."""
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.18.json")
data = json.loads(p.read_text(encoding="utf-8"))
LETTERS = "ABCDE"
issues = []
closings = []

for task in data["tasks"]:
    stmts = task["statements"]
    keys = task["answer_key"]
    expls = task["tactical_explanations"]
    assert len(stmts) == len(keys) == len(expls) == 5
    overview = task.get("solution_overview", "")
    # parse Answer line
    m_ans = re.search(
        r"A=(TRUE|FALSE),\s*B=(TRUE|FALSE),\s*C=(TRUE|FALSE),\s*D=(TRUE|FALSE),\s*E=(TRUE|FALSE)",
        overview,
    )
    if m_ans:
        ov_keys = [x == "TRUE" for x in m_ans.groups()]
        if ov_keys != keys:
            issues.append((task["id"], "*", "OVERVIEW_KEY_MISMATCH", ov_keys, keys))
    else:
        issues.append((task["id"], "*", "NO_OVERVIEW_ANSWER_LINE", overview[-80:]))

    for i, (stmt, key, expl) in enumerate(zip(stmts, keys, expls)):
        letter = LETTERS[i]
        lines = expl.strip().split("\n")
        header = lines[0].strip()
        m = re.match(rf"^\*\*{letter}\) (.+)\*\*$", header)
        if not m:
            issues.append((task["id"], letter, "BAD_HEADER", header[:100]))
            continue
        claim = m.group(1)
        if claim.rstrip(".?!") != stmt.rstrip(".?!"):
            issues.append((task["id"], letter, "CLAIM_MISMATCH", claim, stmt))
        # statement already ends with punct → claim must equal statement (no added period)
        if stmt.endswith((".", "?", "!")) and claim != stmt:
            issues.append((task["id"], letter, "CLAIM_NE_STMT", repr(claim), repr(stmt)))

        parts = expl.rstrip().split("\n\n")
        last = parts[-1]
        trues = len(re.findall(r"\*\*true\*\*", last, re.I))
        falses = len(re.findall(r"\*\*false\*\*", last, re.I))
        all_t = len(re.findall(r"\*\*true\*\*", expl, re.I))
        all_f = len(re.findall(r"\*\*false\*\*", expl, re.I))

        # repair quotes for false items
        repairs = re.findall(r'"([^"]+)"', last)
        if key is True:
            if trues == 0 and all_t == 0:
                issues.append((task["id"], letter, "MISSING_TRUE_MARK", last[:160]))
            if falses > 0 and "**true**" not in last.lower():
                issues.append((task["id"], letter, "KEY_TRUE_CLOSING_ONLY_FALSE", last[:160]))
        else:
            if falses == 0 and all_f == 0:
                issues.append((task["id"], letter, "MISSING_FALSE_MARK", last[:160]))
            if trues > 0 and falses == 0:
                issues.append((task["id"], letter, "KEY_FALSE_CLOSING_ONLY_TRUE", last[:160]))
            if not repairs:
                issues.append((task["id"], letter, "FALSE_NO_REPAIR_QUOTE", last[:160]))

        closings.append(
            f"{task['id']} {letter} key={'T' if key else 'F'} "
            f"t={trues}/T{all_t} f={falses}/F{all_f} | {last.replace(chr(10), ' ')[:200]}"
        )

out = Path(__file__).with_name("_audit_g18_deep.txt")
out.write_text(
    f"ISSUES ({len(issues)})\n"
    + "\n".join(str(x) for x in issues)
    + "\n\n==== CLOSINGS ====\n"
    + "\n".join(closings),
    encoding="utf-8",
)
print(f"Wrote {out} issues={len(issues)}")
for x in issues:
    print(x)
