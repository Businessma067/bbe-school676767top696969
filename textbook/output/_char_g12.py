# -*- coding: utf-8 -*-
from pathlib import Path
import re
import collections

t = Path(r"src/data/english/grammar_parts/g.12.json").read_text(encoding="utf-8")
for ch in ["'", "\u2019", "\u2018", '"', "\u201c", "\u201d", "-", "\u2013", "\u2014", "\u2192", "...", "\u2026"]:
    print(repr(ch), t.count(ch))
print("doesnt_straight", t.count("doesn't"))
print("doesnt_curly", t.count("doesn\u2019t"))
print("backslash_num", len(re.findall(r"(?<!\\)\\[0-9]", t)))
