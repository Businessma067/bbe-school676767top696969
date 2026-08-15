# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.15.json")
raw = p.read_text(encoding="utf-8")
data = json.loads(raw)

issues = []

# file-level scars
for pat, name in [
    (r"\\[0-9]", "backslash digit"),
    ("\ufffd", "replacement char"),
    ("â€", "mojibake"),
    ("Ã", "mojibake2"),
]:
    if re.search(pat, raw):
        issues.append(("FILE", name))

print("=== ALL 100 ===")
for t in data["tasks"]:
    print(f"\n{t['id']} keys={t['answer_key']}")
    for i, (s, k, e) in enumerate(
        zip(t["statements"], t["answer_key"], t["tactical_explanations"])
    ):
        letter = "ABCDE"[i]
        m = re.match(r"\*\*([A-E])\) (.*?)\*\*\n", e, re.S)
        claim = m.group(2) if m else None
        expect = s if s and s[-1] in ".?!" else s + "."
        if claim != expect:
            issues.append((t["id"], letter, "CLAIM!=STMT", claim, s))
            print(f"  {letter} CLAIM MISMATCH")
            print(f"       claim={claim!r}")
            print(f"       stmt ={s!r}")

        repairs = re.findall(r'"([^"]{8,140})"', e)
        parts = [x for x in e.strip().split("\n\n") if x.strip()]
        close = parts[-1]
        t_hit = bool(re.search(r"\*\*true\*\*", close, re.I))
        f_hit = bool(re.search(r"\*\*false\*\*", close, re.I))
        if k and not t_hit:
            issues.append((t["id"], letter, "TRUE missing bold true close"))
        if (not k) and not f_hit:
            issues.append((t["id"], letter, "FALSE missing bold false close"))
        if k and f_hit and not t_hit:
            issues.append((t["id"], letter, "TRUE key but false-only close"))
        if (not k) and t_hit and not f_hit:
            issues.append((t["id"], letter, "FALSE key but true-only close"))

        print(f"  {letter} [{k}] {s}")
        if not k and repairs:
            # prefer quoted repairs that look like full sentences
            cands = [r for r in repairs if r[0].isupper() and " " in r]
            if cands:
                print(f"       repair: {cands[-1]}")

# banned closing stamps in last para
bans = [
    r"So the statement holds",
    r"So the statement is false",
    r"Keep this",
    r"Accept the line",
    r"Mark it wrong",
    r"Reject this",
    r"Call it wrong",
    r"Strike",
]
for t in data["tasks"]:
    for i, e in enumerate(t["tactical_explanations"]):
        parts = [x for x in e.strip().split("\n\n") if x.strip()]
        close = parts[-1]
        for b in bans:
            if re.search(b, close, re.I):
                issues.append((t["id"], "ABCDE"[i], "banned close", b))

print("\n=== ISSUES ===")
for x in issues:
    print(x)
print("count", len(issues))
