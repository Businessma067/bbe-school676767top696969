#!/usr/bin/env python3
"""Ch11 → Ch13 style: numbers/formulas in $...$, prose outside. Minimal safe edits."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")

# In the .ts source, KaTeX percent must appear as \\% (two backslashes).
PCT = "\\\\%"


def fix_numbered_body(body: str) -> str:
    original = body

    # 0) Unwrap over-greedy "$Prose label: math = ...$" or "$Interest for Offer..."
    #    Keep pure math steps like "$R = ...$" or "$FV = ...$".
    um = re.match(r"^\$([A-Za-z][^$]{2,80}? = .+)\$$", body.rstrip().rstrip("."))
    if um:
        inner = um.group(1)
        # Prose if it has a space before first "=" and a word longer than var
        left, _, right = inner.partition(" = ")
        if " " in left or ":" in left:
            # "Offer (i): periodic rate = 0.064/4 = 0.016"
            if ":" in left:
                label, _, expr_left = left.partition(":")
                label = label.strip()
                expr_left = expr_left.strip()
                if expr_left:
                    body = f"{label}: ${expr_left} = {right}$."
                else:
                    body = f"{label}: ${right}$."
            else:
                body = f"{left}: ${right}$."
        # else leave pure math

    # 1) Prose label before $=  →  label: $
    def label_eq(m: re.Match[str]) -> str:
        prefix = m.group(1)
        left = m.group(2)
        token = left.strip()
        if re.fullmatch(r"[A-Za-z]_?[A-Za-z0-9]*|[|δ]|\\[A-Za-z]+", token):
            return f"{prefix}${token} = "
        if re.fullmatch(r"[\d./]+", token):
            return f"{prefix}${token} = "
        return f"{prefix}{left}: $"

    body = re.sub(r"(^|(?<=: )|(?<=; ))([^$=\n]{1,80}?) \$= ", label_eq, body)
    if " $=" in body:
        body = body.replace(" $= ", ": $")

    # 2) Bare "R = nominal rate = 7.20%"
    body = re.sub(
        r"\b([A-Za-z][A-Za-z0-9_]*)\s*=\s*nominal rate\s*=\s*([0-9.]+)%",
        rf"$\1 = \2{PCT}$ (the nominal rate)",
        body,
    )
    # also "$R_a$ = nominal rate = 10.80\%"
    body = re.sub(
        rf"\$([A-Za-z][A-Za-z0-9_]*)\$\s*=\s*nominal rate\s*=\s*([0-9.]+)(?:\\%|{PCT}|%)",
        rf"$\1 = \2{PCT}$ (the nominal rate)",
        body,
    )

    # 3) (n = 1)
    body = re.sub(r"(?<!\$)\(n = (\d+)\)", r"($n = \1$)", body)

    # 4) Fix split math: "$R_i = (1.016)^{4}$ - 1 ≈ 1.06..."
    body = re.sub(
        rf"\$([A-Za-z][A-Za-z0-9_{{}}]*)\s*=\s*(\([^)]+\)\^?\{{[^}}]+\}}|\([^)]+\))\$( - 1[^.]*?)(?:≈|\\approx)\s*([0-9.]+(?:\s*-\s*1\s*=\s*[0-9.]+)?)\s*(?:≈|\\approx)\s*\$?([0-9.]+)%?\$?",
        rf"$\1 = \2\3 \\approx \4 \\approx \5{PCT}$.",
        body,
    )
    # simpler split fix: "$expr)$ - 1 ≈" → keep one math span
    body = re.sub(
        r"\$([^$]+)\$(\s*-\s*1\s*)(?:≈|\\approx)",
        r"$\1\2\\approx",
        body,
    )

    # 5) Whole-step bare equation with no dollars
    if "$" not in body and re.match(r"^[A-Za-z][A-Za-z0-9_{}\\]*\s*=", body):
        b = body.rstrip()
        end = ""
        if b.endswith("."):
            b, end = b[:-1], "."
        b = b.replace(" × ", r" \times ").replace("×", r"\times")
        b = re.sub(r"(?<!\\)%", PCT, b)
        body = f"${b}${end}"

    # 6) Bare "Label = calc" without dollars
    if "$" not in body:
        m = re.match(r"^([A-Za-z][A-Za-z ]{1,40}?)\s*=\s*(.+)$", body)
        if m:
            label, rest = m.group(1).strip(), m.group(2).strip()
            if re.search(
                r"rate|gap|growth|interest|jump|sum|ratio|value|balance|"
                r"difference|target|deposit|doubling|total|extra|first|second",
                label,
                re.I,
            ):
                mm = re.match(
                    r"^(.*?)(\s+(?:percentage points|points)\b.*)$",
                    rest,
                )
                if mm:
                    calc, tail = mm.group(1).rstrip(), mm.group(2)
                    calc = calc.replace(" × ", r" \times ")
                    calc = re.sub(r"(?<!\\)%", PCT, calc)
                    tail = re.sub(rf"\b(\d+(?:\.\d+)?)%", rf"$\1{PCT}$", tail)
                    tail = re.sub(r"\b(\d+(?:\.\d+)?) point", r"$\1$ point", tail)
                    body = f"{label}: ${calc}${tail}"
                else:
                    r = rest.rstrip(".")
                    r = r.replace(" × ", r" \times ")
                    r = re.sub(r"(?<!\\)%", PCT, r)
                    body = f"{label}: ${r}$."

    # 7) Wrap bare N.NN% outside math (write \\% into .ts)
    def wrap_pct(s: str) -> str:
        out: list[str] = []
        i = 0
        in_math = False
        while i < len(s):
            if s[i] == "\\" and i + 1 < len(s) and s[i + 1] == "$":
                out.append("\\$")
                i += 2
                continue
            if s[i] == "$":
                in_math = not in_math
                out.append("$")
                i += 1
                continue
            if not in_math:
                m = re.match(r"(\d+(?:\.\d+)?)%", s[i:])
                if m:
                    out.append(f"${m.group(1)}{PCT}$")
                    i += len(m.group(0))
                    continue
                m = re.match(r"(\d+(?:\.\d+)?) (?=point\b)", s[i:])
                if m:
                    out.append(f"${m.group(1)}$ ")
                    i += len(m.group(0))
                    continue
            out.append(s[i])
            i += 1
        return "".join(out)

    body = wrap_pct(body)

    # 8) Cleanup
    body = body.replace("$$", "$")
    body = re.sub(r":\s*:", ":", body)
    body = re.sub(
        r"\(the nominal rate\)\s*\(the nominal rate\)",
        "(the nominal rate)",
        body,
    )
    # Normalize bare % inside math to \\%
    def fix_math_pct(s: str) -> str:
        out: list[str] = []
        i = 0
        in_math = False
        while i < len(s):
            if s[i] == "\\" and i + 1 < len(s) and s[i + 1] == "$":
                out.append("\\$")
                i += 2
                continue
            if s[i] == "$":
                in_math = not in_math
                out.append("$")
                i += 1
                continue
            if in_math and s[i] == "%" and (i == 0 or s[i - 1] != "\\"):
                out.append(PCT)
                i += 1
                continue
            out.append(s[i])
            i += 1
        return "".join(out)

    body = fix_math_pct(body)

    tmp = re.sub(r"\\\$", "", body)
    if tmp.count("$") % 2 == 1:
        return original
    return body


def main() -> None:
    s = PATH.read_text(encoding="utf-8")
    lines = []
    for line in s.split("\n"):
        m = re.match(r"^(\*\*\d+\.\*\*)\s+(.*)$", line)
        if m:
            lines.append(f"{m.group(1)} {fix_numbered_body(m.group(2))}")
        else:
            lines.append(line)
    s2 = "\n".join(lines)
    s2 = re.sub(r"(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)", r"\1\n\n\2", s2)
    PATH.write_text(s2, encoding="utf-8")
    print("wrote", PATH.stat().st_size)


if __name__ == "__main__":
    main()
