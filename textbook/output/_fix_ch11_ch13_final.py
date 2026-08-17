#!/usr/bin/env python3
"""Repair Ch11 Part-3 to Ch13 style (final pass)."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")


def fix_body(body: str) -> str:
    original = body

    # A) Only repair scar: missing open $ and early close before " - 1"
    #    "R_i = (1.016)^{4}$ - 1 ≈ ..." or "$R_i = (1.016)^{4}$ - 1 ≈ ..."
    if re.search(r"\)\$( - 1)", body) or re.match(
        r"^[A-Za-z][A-Za-z0-9_{}]*\s*=\s*\([^)]+\)\$ - 1", body
    ):
        body = re.sub(
            r"^\$?([A-Za-z][A-Za-z0-9_{}]*)\s*=\s*(\([^)]+\)(?:\^\{[^}]+\})?)\$( - 1)\s*(?:≈|\\approx)\s*",
            r"$\1 = \2\3 \\approx ",
            body,
        )
        body = re.sub(
            r"\s*(?:≈|\\approx)\s*\$?([0-9.]+)(?:\\{1,2}%)?\$?\.?$",
            r" \\approx \1\\\\%$.",
            body,
        )
        body = body.replace("≈", r"\approx")

    # B) Unwrap "$Prose label = formula$" (no nested dollars)
    m = re.match(r"^\$(.+)\$(\.?)$", body.strip())
    if m:
        inner, dot = m.group(1), m.group(2)
        if "$" not in inner.replace("\\$", ""):
            left, sep, right = inner.partition(" = ")
            if sep and (" " in left or re.search(r"[a-z]{3,}", left)):
                body = f"{left}: ${right}${dot}"

    # C) Nested outer wrap: "$Option (a): with n = 1, $R_a = ... exactly$."
    m = re.match(r"^\$(.+)\$$", body.strip().rstrip("."))
    if m and body.count("$") >= 4:
        inner = m.group(1)
        if re.match(r"^[A-Za-z].*:", inner) and " = " in inner:
            body = inner
            if body.endswith(" exactly"):
                pass
            body = re.sub(r"\bwith n = (\d+)\b", r"with $n = \1$", body)
            if not body.endswith("."):
                body += "."

    # D) $= scar
    body = body.replace(" $= ", ": $")

    # E) (n = 1)
    body = re.sub(r"(?<!\$)\(n = (\d+)\)", r"($n = \1$)", body)

    # F) bare (6.61%)
    body = re.sub(
        r"\((\d+(?:\.\d+)?)%\)",
        lambda mm: f"(${mm.group(1)}\\\\%$)",
        body,
    )

    # G) wrap bare percents outside math; ensure \\% inside math
    out: list[str] = []
    i = 0
    in_math = False
    while i < len(body):
        if body.startswith("\\$", i):
            out.append("\\$")
            i += 2
            continue
        if body[i] == "$":
            in_math = not in_math
            out.append("$")
            i += 1
            continue
        if not in_math:
            mm = re.match(r"(\d+(?:\.\d+)?)%", body[i:])
            if mm:
                out.append(f"${mm.group(1)}\\\\%$")
                i += len(mm.group(0))
                continue
            mm = re.match(r"(\d+(?:\.\d+)?)(?= point\b)", body[i:])
            if mm:
                out.append(f"${mm.group(1)}$")
                i += len(mm.group(0))
                continue
        if in_math and body[i] == "%":
            bs = 0
            j = len(out) - 1
            while j >= 0 and out[j] == "\\":
                bs += 1
                j -= 1
            if bs == 0:
                out.append("\\\\%")
            elif bs == 1:
                out.append("\\%")
            else:
                out.append("%")
            i += 1
            continue
        out.append(body[i])
        i += 1
    body = "".join(out)

    # H) remaining unicode approx
    if "≈" in body:
        body = body.replace("≈", r"\approx")

    tmp = body.replace("\\$", "")
    if tmp.count("$") % 2 == 1:
        return original
    return body


def main() -> None:
    raw = PATH.read_text(encoding="utf-8")
    lines = []
    for line in raw.split("\n"):
        m = re.match(r"^(\*\*\d+\.\*\*)\s+(.*)$", line)
        if not m:
            lines.append(line)
            continue
        lines.append(f"{m.group(1)} {fix_body(m.group(2))}")
    text = "\n".join(lines)
    text = re.sub(r"(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)", r"\1\n\n\2", text)
    PATH.write_text(text, encoding="utf-8")
    print("done", PATH.stat().st_size)


if __name__ == "__main__":
    main()
