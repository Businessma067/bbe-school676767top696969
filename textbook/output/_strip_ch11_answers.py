#!/usr/bin/env python3
"""Strip Ch11 overview Answer-sheet lines; report length by difficulty."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")

ANS = re.compile(
    r"\n\n\*\*Answer\.\*\* A=(?:TRUE|FALSE), B=(?:TRUE|FALSE), "
    r"C=(?:TRUE|FALSE), D=(?:TRUE|FALSE), E=(?:TRUE|FALSE)\s*",
    re.I,
)


def main() -> None:
    s = PATH.read_text(encoding="utf-8")
    new, n = ANS.subn("\n", s)
    # also catch single-newline variant
    new2, n2 = re.subn(
        r"\n\*\*Answer\.\*\* A=(?:TRUE|FALSE), B=(?:TRUE|FALSE), "
        r"C=(?:TRUE|FALSE), D=(?:TRUE|FALSE), E=(?:TRUE|FALSE)\s*",
        "\n",
        new,
        flags=re.I,
    )
    PATH.write_text(new2, encoding="utf-8")
    print("removed", n + n2)
    left = len(re.findall(r"\*\*Answer\.\*\*", new2))
    print("remaining_Answer_markers", left)


if __name__ == "__main__":
    main()
