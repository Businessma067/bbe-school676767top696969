#!/usr/bin/env python3
"""Replace ~30% of Ch2 statements with must-finish hard exam claims."""

from __future__ import annotations

import re
from pathlib import Path

from hard_exam_bank import all_hard_claims, hard_slots, slots_to_harden

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


def rewrite_file(path: Path, task_offset: int, by_slot: dict) -> int:
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
        claim = by_slot[(global_i, item_i)]
        block = (
            f"{m.group(1)}{_escape_raw(claim.statement)},\n"
            f"                {claim.truth},\n"
            f"                {_escape_raw(claim.body)},\n"
            f"            )"
        )
        replacements.append((m.start(), m.end(), block))
        count += 1

    out = text
    for start, end, block in reversed(replacements):
        out = out[:start] + block + out[end:]
    path.write_text(out)
    return count


def main() -> None:
    claims = all_hard_claims()
    slots = hard_slots()
    assert len(claims) == len(slots)
    by_slot = {slot: claim for slot, claim in zip(slots, claims)}
    # uniqueness report
    stmts = [c.statement for c in claims]
    print(f"unique hard statements: {len(set(stmts))} / {len(stmts)}")

    files = [
        (HERE / "s21.py", 0),
        (HERE / "s22.py", 30),
        (HERE / "s23.py", 60),
        (HERE / "s24.py", 90),
        (HERE / "s25.py", 120),
    ]
    # Restore clean soft+old by re-reading is wrong — files already have previous hard.
    # Re-inject overwrites hard slots only; OK.
    total = 0
    for path, offset in files:
        n = rewrite_file(path, offset, by_slot)
        total += n
        print(f"{path.name}: injected {n}")
    print(f"TOTAL injected {total} / {len(slots)}")


if __name__ == "__main__":
    main()
