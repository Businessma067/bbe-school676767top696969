#!/usr/bin/env python3
"""Audit and fix bare TeX outside $ in Ch11 overviews + tacticals."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")
TEX = r"times|approx|leq|geq|ln|frac|quad|mathrm|cdot|%"


def outside_tex(s: str) -> bool:
    check = s.replace("\\$", "")
    check = re.sub(r"\$[^$]*\$", "", check)
    return bool(re.search(rf"\\({TEX})", check))


def fix_line_content(s: str) -> str:
    """If TeX sits outside math, wrap the offending equation-ish span."""
    if not outside_tex(s):
        return s
    # Common: (at 5\%):
    s = re.sub(r"\(at ([0-9.]+)\\%\)", r"(at $\1\\%$)", s)
    s = re.sub(r"\(at ([0-9.]+)%\)", r"(at $\1\\%$)", s)
    # Bare 'approx' word leftovers already handled
    # Wrap runs containing \times/\approx that aren't in $
    if not outside_tex(s):
        return s

    # Nuclear for short calc ledes: wrap whole line content if it's mostly formula
    if re.match(r"^[A-Za-z].{0,40}=.*\\(times|approx)", s) and s.count("$") == 0:
        return "$" + s.rstrip(".") + "$."

    # Split and wrap pieces with tex
    currency = []

    def save(m):
        currency.append(m.group(0))
        return f"¤{len(currency)-1}¤"

    tmp = re.sub(r"\\\$", save, s)
    # protect existing math
    maths = []

    def save_m(m):
        maths.append(m.group(0))
        return f"«{len(maths)-1}»"

    tmp = re.sub(r"\$[^$]*\$", save_m, tmp)
    # now wrap remaining tex-bearing tokens (between spaces/punctuation)
    def wrap_seg(m):
        seg = m.group(0)
        if "\\" in seg or "=" in seg:
            return f"${seg}$"
        return seg

    # wrap contiguous chunks that contain backslash commands
    tmp2 = []
    for part in re.split(r"(\s+)", tmp):
        if re.search(rf"\\({TEX})", part):
            part = f"${part.strip()}$"
        tmp2.append(part)
    tmp = "".join(tmp2)
    tmp = tmp.replace("$$", "$")
    for i, m in enumerate(maths):
        tmp = tmp.replace(f"«{i}»", m)
    for i, c in enumerate(currency):
        tmp = tmp.replace(f"¤{i}¤", c)
    return tmp


def main() -> None:
    # Only auto-fix the known Part3 scar pattern; audit the rest
    text = PATH.read_text(encoding="utf-8")
    text = re.sub(r"\(at ([0-9.]+)\\%\)", r"(at $\1\\%$)", text)

    # Audit after import via scanning template lines that are numbered or calc
    bad = []
    for i, line in enumerate(text.split("\n"), 1):
        # content lines inside templates
        if outside_tex(line) and re.search(rf"\\({TEX})", line):
            # ignore comment-like
            if "Part 2" in line or "Formula" in line and line.strip().startswith("Indifference"):
                pass
            bad.append((i, line[:140]))

    PATH.write_text(text, encoding="utf-8")
    print("remaining_lines_with_outside_tex", len(bad))
    for ln, s in bad[:30]:
        print(f"{ln}: {s}")


if __name__ == "__main__":
    main()
