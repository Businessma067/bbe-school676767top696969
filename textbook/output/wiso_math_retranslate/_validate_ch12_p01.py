#!/usr/bin/env python3
import json
import re
from pathlib import Path

rows = json.loads(Path("textbook/output/wiso_math_retranslate/_ch12_p01_mt.json").read_text(encoding="utf-8"))
pack = json.loads(Path("textbook/output/wiso_math_retranslate/ch12-p01.json").read_text(encoding="utf-8"))
print("rows", len(rows))
EN = re.compile(
    r"\b(the|and|of|to|is|for|that|with|this|from|are|was|were|have|has|which|each|"
    r"statement|claim|committee|calculate|number|ways|total|given|using|then|than|"
    r"more|less|first|next|compare|divide|matches|exactly|probability|combination|"
    r"expected|condition|True|False|So the|men|women|hand|cards|deck|flush|pair)\b",
    re.I,
)
issues = []
for row, src in zip(rows, pack):
    for i, e in enumerate(row["tactical_explanations"]):
        letter = chr(65 + i)
        want_h = "Richtig" if row["answer_key"][i] else "Falsch"
        want_c = "wahr" if row["answer_key"][i] else "falsch"
        cid = row["case_id"]
        if f"**{letter}.** → {want_h}" not in e[:50]:
            issues.append(f"{cid} {letter}: bad header: {e[:60]!r}")
        if not e.strip().endswith(f"Die Aussage ist {want_c}."):
            issues.append(f"{cid} {letter}: bad closer: {e.strip()[-80]!r}")
        if "—" in e:
            issues.append(f"{cid} {letter}: em dash")
        prose = re.sub(r"\$\$[\s\S]+?\$\$", " ", e)
        prose = re.sub(r"\$[^$]+\$", " ", prose)
        m = EN.findall(prose)
        if m:
            issues.append(f"{cid} {letter}: EN {sorted(set(m))[:15]}")
        en = src["tactical_explanations_en"][i]
        ratio = len(e) / max(len(en), 1)
        if ratio < 0.7:
            issues.append(f"{cid} {letter}: short ratio {ratio:.2f}")

print("issues", len(issues))
for x in issues[:100]:
    print(x)

# show sample
print("\n=== SAMPLE 12.01 A ===")
print(rows[0]["tactical_explanations"][0][:800])
print("\n=== SAMPLE 12.02 B ===")
print(rows[1]["tactical_explanations"][1][:800])
