"""Re-audit g.3 after verdict fixes."""
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.3.json")
data = json.loads(p.read_text(encoding="utf-8"))
letters = "ABCDE"
issues = []

for ti, task in enumerate(data["tasks"], 1):
    for i, (s, k, e) in enumerate(
        zip(task["statements"], task["answer_key"], task["tactical_explanations"])
    ):
        L = letters[i]
        m = re.match(r"\*\*([A-E])\) (.+?)\*\*\s*\n", e, re.S)
        if not m:
            issues.append(f"T{ti}/{L}: NO_CLAIM")
            continue
        claim = m.group(2)
        if claim.rstrip(".") != s.rstrip("."):
            issues.append(f"T{ti}/{L}: CLAIM_MISMATCH")
        paras = [x.strip() for x in e.strip().split("\n\n") if x.strip()]
        close = paras[-1]
        has_true = bool(re.search(r"\*\*true\*\*", close, re.I))
        has_false = bool(re.search(r"\*\*false\*\*", close, re.I))
        if k and not has_true:
            issues.append(f"T{ti}/{L}: NO_TRUE | {close[:100]}")
        if k and has_false:
            issues.append(f"T{ti}/{L}: FALSE_ON_TRUE | {close[:100]}")
        if (not k) and not has_false:
            issues.append(f"T{ti}/{L}: NO_FALSE | {close[:100]}")
        body = "\n\n".join(paras[1:-1])
        for mm in re.finditer(r"\*\*(true|false)\*\*", body, re.I):
            ctx = body[max(0, mm.start() - 25) : mm.end() + 25]
            if "version" in ctx.lower() and mm.group(1).lower() == "true" and not k:
                continue
            issues.append(f"T{ti}/{L}: MID_BOLD {mm.group(1)} | {ctx!r}")

for ti, task in enumerate(data["tasks"], 1):
    m = re.search(r"\*\*Answer\.\*\*\s*(.+)$", task["solution_overview"])
    if not m:
        issues.append(f"T{ti}: NO_ANSWER_LINE")
        continue
    expect = ", ".join(
        f"{letters[i]}={'TRUE' if k else 'FALSE'}" for i, k in enumerate(task["answer_key"])
    )
    got = m.group(1).strip()
    if got != expect:
        issues.append(f"T{ti}: ANSWER_LINE_MISMATCH want={expect} got={got}")

print("ISSUES", len(issues))
for x in issues:
    print(x)

# Manual semantic flags for report
print("\n--- KEY CHECK SUMMARY ---")
print(f"tasks={len(data['tasks'])} statements={sum(len(t['statements']) for t in data['tasks'])}")
