# -*- coding: utf-8 -*-
"""Find mangled KaTeX patterns across all overviews/A-E."""
import json
import re
from pathlib import Path

data = json.loads(Path(__file__).with_name("ch5_expl_overrides.json").read_text(encoding="utf-8"))

patterns = [
    ("split_paren", re.compile(r"\$[^$\n]*\$\([^$)]*\)\$")),  # $3x+9$(5)$
    ("orphan_eq", re.compile(r"\$\s*=\s*")),  # $= 260
    ("title_dangle", re.compile(r"\*\*[^*]*[+\-×·/]\.\*\*")),
    ("display_trunc", re.compile(r"\$\$\s*\d+\.\d+[a-zA-Z]\s*=\s*0\s*\$\$")),
    ("space_dollar_eq", re.compile(r"\$\s+[^=$\n]+\s*\n?\s*\$=")),
]

hits = {name: [] for name, _ in patterns}
for key, item in data.items():
    chunks = [("ov", item.get("solution_overview") or "")] + [
        (chr(65 + i), e or "") for i, e in enumerate(item.get("tactical_explanations") or [])
    ]
    for where, text in chunks:
        for name, rx in patterns:
            for m in rx.finditer(text):
                hits[name].append((int(key), where, m.group(0)[:80]))

for name, lst in hits.items():
    print(f"=== {name}: {len(lst)} ===")
    for n, w, s in lst[:25]:
        print(f"  T{n}/{w}: {s!r}")
    if len(lst) > 25:
        print(f"  ... +{len(lst)-25}")
