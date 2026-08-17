#!/usr/bin/env python3
"""Apply explicit Ch13 Part-3 rewrites for math-11-81..123."""
from __future__ import annotations

import importlib.util
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PATH = ROOT / "src" / "data" / "math-ch11-financial.ts"
HERE = Path(__file__).resolve().parent


def load_part3_extra() -> dict[int, str]:
    path = HERE / "_part3_101_123.py"
    # File is bare PART3[n] = ... assignments; exec into namespace
    ns: dict = {"PART3": {}}
    code = "PART3 = {}\n" + path.read_text(encoding="utf-8")
    exec(code, ns)
    return ns["PART3"]


# Import PART3 81-100 from the partial apply module by exec of that file's PART3 dict
def load_part3_81_100() -> dict[int, str]:
    path = HERE / "_apply_part3_81_123.py"
    text = path.read_text(encoding="utf-8")
    # Only keep PART3 assignments (file currently has PART3 dict + entries through 100)
    ns: dict = {"PART3": {}}
    # Extract from PART3: dict... through last PART3[100]
    start = text.find("PART3: dict[int, str] = {}")
    if start < 0:
        start = text.find("PART3 = {}")
    exec(text[start:], ns)
    return ns["PART3"]


def digits_outside(s: str) -> bool:
    t = s.replace("\\$", "")
    t = re.sub(r"\$[^$]*\$", "", t)
    return bool(re.search(r"\d", t))


def main() -> None:
    part3 = {}
    part3.update(load_part3_81_100())
    part3.update(load_part3_extra())
    missing = [n for n in range(81, 124) if n not in part3]
    if missing:
        raise SystemExit(f"missing PART3 for {missing}")

    src = PATH.read_text(encoding="utf-8")
    touched = 0
    sample = None

    for n in range(81, 124):
        tid = f"math-11-{n}"
        id_pos = src.find(f"id: `{tid}`")
        if id_pos < 0:
            raise SystemExit(f"missing id {tid}")
        p3 = src.find("**Part 3: Solve.**", id_pos)
        ans = src.find("**Answer.**", p3)
        next_id = src.find("id: `math-11-", id_pos + 10)
        if 0 < next_id < p3:
            raise SystemExit(f"part3 past next for {tid}")

        new_block = part3[n].rstrip() + "\n\n"
        if src[p3:ans] != new_block:
            touched += 1
            src = src[:p3] + new_block + src[ans:]
        if n == 81:
            sample = new_block

    PATH.write_text(src, encoding="utf-8")
    print("tasks_touched", touched)
    print("--- SAMPLE math-11-81 ---")
    print(sample)

    # Audit
    bad_d = 0
    bad_split = 0
    bad_eng = 0
    samples = []
    eng_re = re.compile(
        r"\$(?:At |Interest |Over |Extending |Since |Compare |Annual |Monthly |Needed |Difference |Gap =|FV of|This |Tranche |Discount )"
    )
    for n in range(81, 124):
        tid = f"math-11-{n}"
        i = src.find(f"id: `{tid}`")
        j = src.find("**Part 3: Solve.**", i)
        k = src.find("**Answer.**", j)
        block = src[j:k]
        bad_split += len(re.findall(r"\d\$, \$", block))
        for line in block.splitlines():
            m = re.match(r"^\*\*\d+\.\*\*\s+(.*)$", line)
            if not m:
                continue
            body = m.group(1)
            if digits_outside(body):
                bad_d += 1
                if len(samples) < 15:
                    samples.append(("digit", tid, body[:140]))
            if eng_re.search(body):
                bad_eng += 1
                if len(samples) < 15:
                    samples.append(("eng", tid, body[:140]))
    print(
        "audit digits_outside",
        bad_d,
        "eng_scar",
        bad_eng,
        "comma_split",
        bad_split,
    )
    for s in samples:
        print(" ", s)


if __name__ == "__main__":
    main()
