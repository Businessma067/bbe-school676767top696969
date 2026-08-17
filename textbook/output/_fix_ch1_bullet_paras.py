# -*- coding: utf-8 -*-
"""Ensure each bullet is its own blank-line-separated paragraph."""
from __future__ import annotations

import re
from pathlib import Path

TS = Path("src/data/math-ch1-logic.ts")
text = TS.read_text(encoding="utf-8")
orig = text

# Inside strings: turn "• a\n• b" into "• a\n\n• b" (and same for leftover "- ")
# Careful: only when the newline is a single \n between list markers.
text, n = re.subn(r"(\\n)([•\-]\s+)", r"\\n\\n\2", text)
# Collapse accidental triple blank lines created by the above when already \n\n•
text = text.replace(r"\n\n\n\n• ", r"\n\n• ")
text = text.replace(r"\n\n\n\n- ", r"\n\n- ")
# More general collapse of 3+ blank lines in strings
text = re.sub(r"(\\n){3,}", r"\\n\\n", text)

if text != orig:
    TS.write_text(text, encoding="utf-8")
    print(f"separated bullet paras, extra_markers={n}")
else:
    print("no change", n)
