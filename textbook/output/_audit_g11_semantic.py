# Deep semantic checks for g.11 (manual-rules encoded)
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.11.json")
data = json.loads(p.read_text(encoding="utf-8"))
out = []

# Expected pedagogical verdicts (exam English)
# Flags for advice quality heuristics
for task in data["tasks"]:
    for i, (stmt, key, expl) in enumerate(
        zip(task["statements"], task["answer_key"], task["tactical_explanations"])
    ):
        letter = "ABCDE"[i]
        # extract repair quotes from closing
        parts = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = parts[-1]
        repairs = re.findall(r'"([^"]+)"', closing)
        # false without repair quote when a clear form fix exists
        if not key and not repairs:
            # skip if closing mentions no fix needed? all falses should have repairs typically
            if "holds" not in closing.lower():
                out.append(f"{task['id']} {letter}: FALSE closing has no quoted repair")
        # true with a repair that changes the statement (bad)
        if key and repairs:
            for r in repairs:
                if r != stmt and r.lower() not in expl.lower()[:200]:
                    # might be ok showing parallel form
                    pass
        # Tip/Trap bans from style about click commands
        banned = [
            "Mark it wrong",
            "Keep this",
            "Accept the line",
            "Reject this",
            "Call it wrong",
            "So the statement holds",
            "So the statement is false",
        ]
        for b in banned:
            if b in expl:
                out.append(f"{task['id']} {letter}: banned phrase {b!r}")

        # wrong-key hunches for known patterns
        s = stmt.lower()
        # double comparative
        if re.search(r"\bmore\s+\w+er\b", s) or "more better" in s or "more worse" in s or "more farther" in s:
            if key is True:
                out.append(f"{task['id']} {letter}: KEY maybe wrong — double comparative marked TRUE: {stmt}")
        if re.search(r"\bmost\s+\w+est\b", s):
            if key is True:
                out.append(f"{task['id']} {letter}: KEY maybe wrong — double superlative marked TRUE")
        # as ... than
        if re.search(r"\bas\s+\w+\s+than\b", s) or "as good than" in s or "as steep than" in s or "as long than" in s:
            if key is True:
                out.append(f"{task['id']} {letter}: KEY maybe wrong — as...than marked TRUE")
        # of the two / between the two + -est
        if (("of the two" in s or "between the two" in s) and re.search(r"\b(the\s+)?\w+est\b", s)):
            if key is True:
                out.append(f"{task['id']} {letter}: KEY maybe wrong — pair+superlative marked TRUE: {stmt}")
        # of all / of the N (N>=3) + comparative (the worse, the less, the more)
        if re.search(r"\bof (all|the (three|four|five))\b", s):
            if re.search(r"\bthe (worse|less|more)\b", s) and key is True:
                out.append(f"{task['id']} {letter}: KEY maybe wrong — group+comparative marked TRUE")
        # one of the + comparative
        if "one of the" in s and re.search(r"\b(smarter|funnier|taller|better)\b", s) and "best" not in s:
            if "smartest" not in s and "funniest" not in s and "tallest" not in s:
                if key is True:
                    out.append(f"{task['id']} {letter}: KEY maybe wrong — one of + comparative TRUE")
        # one of + singular after superlative
        if re.search(r"one of the \w+est \w+(?!s)\b", s) or "tallest player" in s:
            if key is True:
                out.append(f"{task['id']} {letter}: KEY maybe wrong — one of + singular TRUE")
        # gooder
        if "gooder" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong — gooder TRUE")
        # superior/preferable than
        if ("superior than" in s or "preferable than" in s) and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong — Latinate+than TRUE")
        # prefer ... than
        if "prefers tea than" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        # would rather to
        if "would rather to" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        # fewer traffic / less mistakes
        if "less mistakes" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        if "fewer traffic" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        # more and more + -er
        if "more and more louder" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        # increasingly more
        if "increasingly more" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        # correlative missing the
        if stmt.startswith("More she") and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        # much the + comparative
        if "much the harder" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        # more slow / more graceful as adverb
        if ("more slow " in s or "more graceful " in s) and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong — adj for adverb TRUE")
        # bigest
        if "bigest" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        # taller than any girl (no other)
        if "any girl in her class" in s and "other" not in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong — missing other TRUE")
        # shortest of any other
        if "shortest of any other" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        # most cheap
        if "most cheap" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")
        # a lot more harder
        if "more harder" in s and key is True:
            out.append(f"{task['id']} {letter}: KEY maybe wrong")

# Spot-check True items that look suspicious
suspicious_true = []
for task in data["tasks"]:
    for i, (stmt, key) in enumerate(zip(task["statements"], task["answer_key"])):
        if not key:
            continue
        s = stmt.lower()
        # elder of the two — OK true
        # quicker as adverb — contested but bank says true
        # by far a better — OK
        # prefer rather than — OK
        if "quicker than" in s:
            suspicious_true.append((task["id"], "ABCDE"[i], "quicker adverb marked TRUE (intentional?)"))
        if "by far a better" in s:
            suspicious_true.append((task["id"], "ABCDE"[i], "by far + comparative marked TRUE (ok)"))
        if "the elder of the two" in s:
            suspicious_true.append((task["id"], "ABCDE"[i], "elder of the two marked TRUE (ok)"))

out_path = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_audit_g11_semantic.txt")
text = "HEURISTIC KEY PROBLEMS:\n" + ("\n".join(out) if out else "(none)") + "\n\nSUSPICIOUS/CONTESTED TRUES:\n" + "\n".join(f"{a} {b}: {c}" for a,b,c in suspicious_true)
out_path.write_text(text, encoding="utf-8")
print("wrote", out_path)
print(text)
