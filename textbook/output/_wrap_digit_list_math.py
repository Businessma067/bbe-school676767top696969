# -*- coding: utf-8 -*-
"""Wrap bare digit-list math $1,2,3$ as $\\{1,2,3\\}$ for consistent set rendering."""
from __future__ import annotations

import re
from pathlib import Path

TS = Path("src/data/math-ch1-logic.ts")
text = TS.read_text(encoding="utf-8")
orig = text

# In TS source, $1,2,3$ is written as $1,2,3$ (digits don't need escaping)
# Avoid touching currency \$1,000 or $1$ alone.
def wrap_lists(s: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = m.group(1)
        # skip if already looks like thousands currency grouping only one comma group of 3
        parts = [p.strip() for p in inner.split(",")]
        if all(re.fullmatch(r"\d+", p) for p in parts) and len(parts) >= 2:
            # currency-like 1,000 or 12,000 — single thousands group
            if len(parts) == 2 and len(parts[1]) == 3 and len(parts[0]) <= 3:
                return m.group(0)
            return "$\\\\{" + ",".join(parts) + "\\\\}$"
        return m.group(0)

    return re.sub(r"(?<!\\)\$(\d+(?:\s*,\s*\d+){1,})\$", repl, s)

text = wrap_lists(text)
if text != orig:
    TS.write_text(text, encoding="utf-8")
    print("wrapped digit lists")
else:
    print("no wrap changes")
