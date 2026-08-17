# -*- coding: utf-8 -*-
"""Replace leading dash lists with bullets; fix known Ch1 symbol scars."""
from __future__ import annotations

import re
from pathlib import Path

TS = Path("src/data/math-ch1-logic.ts")
text = TS.read_text(encoding="utf-8")
orig = text

# 1) Leading list dashes inside string literals: \n-  → \n• 
# Only when it looks like a list item (not an em-dash prose hyphen mid-sentence;
# those are already " - " with spaces around in prose, not \n- ).
text, n_dash = re.subn(r"(\\n)-\s+", r"\1• ", text)

# 2) Prefer set braces for digit lists that are meant as sets of members
# already OK once FlashcardMath accepts them; still wrap common "share $a,b,c$" 
# when adjacent to set language? skip — renderer fix is enough.

# 3) Fix split / scar patterns from earlier eras
replacements = [
    # split brace dollars
    (r"\$\\\{\$\s*", r"{"),
    (r"\s*\$\\\}\$", r"}"),
]

for pat, repl in replacements:
    text, _ = re.subn(pat, repl, text)

# 4) Ensure closing brace on truncated roster lines if any
# Specific known line from user complaint is already closed in source.

if text != orig:
    TS.write_text(text, encoding="utf-8")
    print(f"updated dashes={n_dash}")
else:
    print("no content changes", n_dash)
