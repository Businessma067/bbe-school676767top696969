import json
import re

data = json.load(open("logic_parsed.json", encoding="utf-8"))
count_spaced = 0
count_other = 0
examples = []
BS = chr(92)
for t in data:
    fields = (
        [t.get("context", ""), t.get("general_solution", "")]
        + t.get("statements", [])
        + t.get("explanations_raw", [])
    )
    for f in fields:
        for m in re.finditer(r".{0,4}" + re.escape(BS) + r".{0,4}", f):
            seg = m.group(0)
            if re.fullmatch(r"\S*\s" + re.escape(BS) + r"\s\S*", seg):
                count_spaced += 1
            else:
                count_other += 1
                if len(examples) < 30:
                    examples.append((t["pdf_num"], seg))

print("spaced", count_spaced, "other", count_other)
for pn, e in examples:
    print(pn, repr(e))
