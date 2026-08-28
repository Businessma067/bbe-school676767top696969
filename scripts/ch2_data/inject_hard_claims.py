#!/usr/bin/env python3
"""Replace ~30% of Ch2 statements with genuinely hard exam claims.

Reads s21–s25.py, swaps selected item slots for (statement, truth, body)
triples from hard_exam_bank, and writes the files back.
"""

from __future__ import annotations

import re
from pathlib import Path

from hard_exam_bank import claim_for, hard_slots, slots_to_harden

HERE = Path(__file__).resolve().parent

_ITEM = re.compile(
    r"(\(\s*\n\s*)"
    r"(r?(?:\"\"\"[\s\S]*?\"\"\"|'''[\s\S]*?'''|\"(?:[^\"\\]|\\.)*\"|'(?:[^'\\]|\\.)*'))"
    r"(\s*,\s*\n\s*)"
    r"(True|False)"
    r"((?:\s*,\s*\n\s*r?(?:\"\"\"[\s\S]*?\"\"\"|'''[\s\S]*?'''|\"(?:[^\"\\]|\\.)*\"|'(?:[^'\\]|\\.)*'))?)"
    r"(\s*,?\s*\n\s*\))",
    re.S,
)


def _escape_raw(s: str) -> str:
    if "\\" in s or "$" in s or "\n" in s:
        if '"""' in s:
            return "r'''" + s.replace("'''", r"\'\'\'") + "'''"
        return 'r"""' + s + '"""'
    return 'r"' + s.replace('"', r"\"") + '"'


def rewrite_file(path: Path, task_offset: int) -> int:
    text = path.read_text()
    matches = list(_ITEM.finditer(text))
    n_tasks = len(re.findall(r"^\s*task\(", text, re.M))
    if len(matches) != n_tasks * 5:
        print(f"  warn {path.name}: {len(matches)} items vs {n_tasks * 5} expected")

    replacements: list[tuple[int, int, str]] = []
    count = 0
    for idx, m in enumerate(matches):
        task_i = idx // 5
        item_i = idx % 5
        global_i = task_offset + task_i
        if item_i not in slots_to_harden(global_i):
            continue
        sub = f"2.{1 + global_i // 30}"
        claim = claim_for(global_i, item_i, sub)
        block = (
            f"{m.group(1)}{_escape_raw(claim.statement)},\n"
            f"                {claim.truth},\n"
            f"                {_escape_raw(claim.body)},\n"
            f"            )"
        )
        # Replace from start of "(" through end of ")"
        replacements.append((m.start(), m.end(), block))
        count += 1

    out = text
    for start, end, block in reversed(replacements):
        out = out[:start] + block + out[end:]
    path.write_text(out)
    return count


def main() -> None:
    # Reset statement memory inside the bank
    from hard_exam_bank import _SEEN_STATEMENTS, all_hard_claims

    _SEEN_STATEMENTS.clear()
    # Pre-generate in order so uniqueness pass is stable
    _ = all_hard_claims()
    _SEEN_STATEMENTS.clear()

    files = [
        (HERE / "s21.py", 0),
        (HERE / "s22.py", 30),
        (HERE / "s23.py", 60),
        (HERE / "s24.py", 90),
        (HERE / "s25.py", 120),
    ]
    total = 0
    for path, offset in files:
        n = rewrite_file(path, offset)
        total += n
        print(f"{path.name}: injected {n}")
    print(f"TOTAL injected {total} / {len(hard_slots())}")


if __name__ == "__main__":
    main()
