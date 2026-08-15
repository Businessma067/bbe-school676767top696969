# -*- coding: utf-8 -*-
import json, re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.12.json")
data = json.loads(p.read_text(encoding="utf-8-sig"))

# Align T8/E body transform with closing repair
ti, ei = 7, 4
expl = data["tasks"][ti]["tactical_explanations"][ei]
old = (
    'Whereas requires a full clause, not a noun phrase. "Whereas the power cut" → "Whereas the power failed…" or switch to despite / in spite of. Contrast linkers are not interchangeable without rewriting what follows.'
)
new = (
    'Whereas requires a full clause, not a noun phrase. "Whereas the power cut" → "In spite of the power cut…" (same noun the legal D line already uses) or rebuild as "Whereas the power failed…" Contrast linkers are not interchangeable without rewriting what follows.'
)
if old not in expl:
    raise SystemExit("T8/E body fragment not found")
data["tasks"][ti]["tactical_explanations"][ei] = expl.replace(old, new, 1)

p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# residual coach / imperative scan
hits = []
for ti, task in enumerate(data["tasks"], 1):
    for ei, expl in enumerate(task["tactical_explanations"]):
        loc = f"T{ti}/{chr(65+ei)}"
        if re.search(r"(?i)\bwrite \"", expl) or re.search(r"(?i)\brepair to ", expl) or re.search(
            r"(?i)mark \*\*false\*\*", expl
        ):
            hits.append(loc)
        stmt = task["statements"][ei]
        m = re.match(r"\*\*([A-E])\) (.*?)\*\*", expl, re.S)
        assert m and m.group(2) == stmt and m.group(1) == chr(65 + ei), loc
        parts = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = parts[-1]
        key = task["answer_key"][ei]
        has_t = bool(re.search(r"\*\*true\*\*", closing, re.I))
        has_f = bool(re.search(r"\*\*false\*\*", closing, re.I))
        assert (key and has_t and not has_f) or ((not key) and has_f), (loc, closing)

print("coach hits", hits)
print("OK claims+closings for", sum(len(t["statements"]) for t in data["tasks"]), "items")
