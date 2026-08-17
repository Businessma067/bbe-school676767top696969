# -*- coding: utf-8 -*-
"""Fix Ch1 Logic symbol scars: English names inside broken $...$, split connectives, etc."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
TS = ROOT / "src" / "data" / "math-ch1-logic.ts"


def fix_text(s: str) -> str:
    # $\{Owen\}$ / $\{Priya, Quinn\}$ written as $\{ $Name$ \}$
    s = re.sub(
        r"\$\\\{\$\s*([A-Za-z][A-Za-z ,\-']*?)\s*\$\\\}\$",
        r"{\1}",
        s,
    )
    # roster is $\{ $Owen$ \}$ variants already covered; also bare $\{Owen$\}
    s = re.sub(
        r"\$\\\{([A-Za-z][A-Za-z ,\-']*)\\\}\$",
        r"{\1}",
        s,
    )
    # Owen $\Rightarrow \neg$ Priya  →  Owen ⇒ ¬Priya in prose, or keep symbols without mid-word dollars
    s = re.sub(
        r"\$\\neg\$\s+([A-Za-z])",
        r"$\\neg$\\,\1",
        s,
    )
    # Split: $\neg$ $(P  →  $\neg(P
    s = re.sub(r"\$\\neg\$\s*\(", r"$\\neg(", s)
    # Lone connective dollars between English: Xᶜ already handled elsewhere
    # `$A \cap B =$ [5, 10]` → `$A \cap B = [5, 10]$`
    s = re.sub(
        r"\$([^$=]+)=\$\s*(\[[^\]]+\]|\([^)]+\))",
        r"$\1= \2$",
        s,
    )
    # Currency already escaped in money tasks — leave \$ alone
    return s


def main() -> None:
    text = TS.read_text(encoding="utf-8")
    # Process string literals roughly by walking quoted segments is hard;
    # apply globally — patterns are specific enough.
    new = fix_text(text)
    if new != text:
        TS.write_text(new, encoding="utf-8")
        print("updated", TS)
    else:
        print("no changes")


if __name__ == "__main__":
    main()
