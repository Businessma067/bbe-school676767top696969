#!/usr/bin/env python3
"""Final QA for patched ch12-p01 overlay explanations."""
from __future__ import annotations

import json
import re
from pathlib import Path

pack = json.loads(Path("textbook/output/wiso_math_retranslate/ch12-p01.json").read_text(encoding="utf-8"))
overlay = json.loads(Path("src/data/wiso/math-de-ch12.json").read_text(encoding="utf-8"))
KATEX_RE = re.compile(r"(\$\$[\s\S]+?\$\$|(?<!\\)\$[^$\n]+?(?<!\\)\$)")
EN = re.compile(
    r"\b(This|statement|asks|for|the|total|number|of|possible|committees|"
    r"As determined|in the|solution overview|ways to|select|people from|"
    r"members is given by|combination formula|The claim states that|"
    r"So the statement is|True|False|probability|Calculate|Next we|"
    r"First we|Comparing these|Expressed as|approximately|which matches|"
    r"We have already|Using the|To find this|To simplify|greatest common|"
    r"divisible by|Dividing the|numerator and denominator)\b"
)
issues = []
for c in pack:
    cid = c["case_id"]
    te = overlay[cid]["tactical_explanations"]
    assert len(te) == 5
    for i, (en, de) in enumerate(zip(c["tactical_explanations_en"], te)):
        letter = chr(65 + i)
        want_h = "Richtig" if c["answer_key"][i] else "Falsch"
        want_c = "wahr" if c["answer_key"][i] else "falsch"
        if not de.startswith(f"**{letter}.** → {want_h}"):
            issues.append(f"{cid} {letter} header")
        if not de.strip().endswith(f"Die Aussage ist {want_c}."):
            issues.append(f"{cid} {letter} closer")
        if "—" in de:
            issues.append(f"{cid} {letter} emdash")
        en_k = KATEX_RE.findall(en)
        de_k = KATEX_RE.findall(de)
        if en_k != de_k:
            # find first diff
            for j, (a, b) in enumerate(zip(en_k, de_k)):
                if a != b:
                    issues.append(f"{cid} {letter} katex[{j}] differs")
                    break
            else:
                issues.append(f"{cid} {letter} katex len {len(en_k)}!={len(de_k)}")
        prose = KATEX_RE.sub(" ", de)
        hits = EN.findall(prose)
        if hits:
            issues.append(f"{cid} {letter} EN leftover: {hits[:8]}")
        if len(de) < 0.75 * len(en):
            issues.append(f"{cid} {letter} short {len(de)}/{len(en)}")

out = Path("textbook/output/wiso_math_retranslate/_ch12_p01_qa.txt")
out.write_text("\n".join(issues) if issues else "OK all 20 cases / 100 explanations\n", encoding="utf-8")
print(f"issues={len(issues)}")
print(out.read_text(encoding="utf-8")[:3000])
