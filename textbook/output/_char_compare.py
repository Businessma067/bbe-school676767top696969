# -*- coding: utf-8 -*-
from pathlib import Path
import re

for name in ["g.5.json", "g.7.json", "g.11.json", "g.12.json", "g.17.json"]:
    t = Path("src/data/english/grammar_parts") / name
    if not t.exists():
        continue
    s = t.read_text(encoding="utf-8")
    print(
        name,
        "arrow",
        s.count("\u2192"),
        "em",
        s.count("\u2014"),
        "apos_curly",
        s.count("\u2019"),
        "apos_str",
        len(re.findall(r"(?<![A-Za-z])'(?=[A-Za-z])|(?<=[A-Za-z])'(?![A-Za-z])|(?<=[A-Za-z])'(?=[A-Za-z])", s)),
        "doesnt_str",
        s.count("doesn't"),
        "doesnt_c",
        s.count("doesn\u2019t"),
        "bsn",
        len(re.findall(r"(?<!\\)\\[0-9]", s)),
    )
