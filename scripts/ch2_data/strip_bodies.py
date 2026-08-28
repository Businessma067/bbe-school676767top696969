"""Strip handcrafted explanation bodies from s21–s25; keep (statement, truth) only."""

from __future__ import annotations

import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
PAT = re.compile(
    r"(,\s*(?:True|False),\s*)"
    r'r(?:"""(?:\\.|[^"\\]|"(?!""))*?"""|\'(?:\\.|[^\'])*?\')\s*,?\s*\n(\s*)\)',
    re.S,
)


def strip_file(path: Path) -> int:
    text = path.read_text()
    new, n = PAT.subn(r"\1\n\2)", text)
    if n:
        path.write_text(new)
    return n


def main() -> None:
    total = 0
    for path in sorted(HERE.glob("s2[1-5].py")):
        n = strip_file(path)
        print(f"{path.name}: stripped {n} explanation bodies")
        total += n
    print(f"total {total}")


if __name__ == "__main__":
    main()
