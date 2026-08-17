#!/usr/bin/env python3
"""Finish Ch11 → Ch13: unwrap prose-in-math steps; merge split equations."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")


def unwrap_prose_math(body: str) -> str:
    """$Interest for Offer (i) = 10,000...$ → Interest for Offer (i): $10,000...$"""
    m = re.match(r"^\$(.+)\$(\.?)$", body.strip())
    if not m:
        return body
    inner, dot = m.group(1), m.group(2)
    # already has nested $ — handle lightly
    if inner.count("$") - inner.count("\\$") > 0:
        # e.g. Option (a): with n = 1, $R_a = 10.80\%$ (the nominal rate) exactly
        # Drop outer dollars if starts with prose
        if re.match(r"^[A-Za-z]", inner) and " " in inner.split("=")[0]:
            # Find first '=' that is outside inner math — rough: after a prose label
            mm = re.match(
                r"^(.+?):\s*\$(.+)$",
                inner,
            )
            if mm:
                return f"{mm.group(1)}: ${mm.group(2)}{dot}"
            # "Option (a): with n = 1, $R_a = ..."
            mm = re.match(r"^([^$]+),\s*\$(.+)$", inner)
            if mm:
                left = mm.group(1).rstrip()
                left = re.sub(r"\bn = (\d+)\b", r"$n = \1$", left)
                return f"{left}, ${mm.group(2)}{dot}"
            return f"{inner}{dot}"
        return body

    left, sep, right = inner.partition(" = ")
    if not sep:
        return body
    # Pure math variable on the left (no spaces / no prose colon-label with words)
    if " " not in left and ":" not in left:
        return body  # keep $R = ...$
    # Prose label
    return f"{left}: ${right}${dot}"


def merge_split_math(body: str) -> str:
    """$R_i = (1.016)^{4}$ - 1 ≈ 1.06... ≈ $6.55\\%$ → one math span."""
    # Pattern: $LHS = (....)$ - 1 ≈/≈ rest ≈ $pct$
    m = re.match(
        r"^\$(.+?)\$( - 1)(?:\s*)(?:≈|\\approx)(.+?)(?:≈|\\approx)\s*\$?([0-9.]+)(?:\\%)?\$?\.?$",
        body.strip(),
    )
    if m:
        lhs, minus, mid, pct = m.group(1), m.group(2), m.group(3), m.group(4)
        mid = mid.strip()
        mid = re.sub(r"\s*≈\s*", r" \\approx ", mid)
        return f"${lhs}{minus} \\approx {mid} \\approx {pct}\\\\%$."

    # Simpler: $expr)$ - 1 = ... ≈ $pct$
    m = re.match(
        r"^\$(.+?)\$( - 1 = .+?)(?:≈|\\approx)\s*\$?([0-9.]+)(?:\\%)?\$?\.?$",
        body.strip(),
    )
    if m:
        return f"${m.group(1)}{m.group(2)} \\approx {m.group(3)}\\\\%$."

    return body


def fix_body(body: str) -> str:
    body = unwrap_prose_math(body)
    body = merge_split_math(body)
    # leftover $= 
    body = body.replace(" $= ", ": $")
    # (n = 1) bare
    body = re.sub(r"(?<!\$)\(n = (\d+)\)", r"($n = \1$)", body)
    # nominal rate bare
    body = re.sub(
        r"\b([A-Za-z][A-Za-z0-9_]*)\s*=\s*nominal rate\s*=\s*([0-9.]+)%",
        lambda m: f"${m.group(1)} = {m.group(2)}\\\\%$ (the nominal rate)",
        body,
    )
    # bare (6.61%)
    body = re.sub(
        r"\((\d+(?:\.\d+)?)%\)",
        lambda m: f"(${m.group(1)}\\\\%$)",
        body,
    )

    # wrap bare percents outside math
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
            m = re.match(r"(\d+(?:\.\d+)?)%", body[i:])
            if m:
                out.append(f"${m.group(1)}\\\\%$")
                i += len(m.group(0))
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

    tmp = body.replace("\\$", "")
    if tmp.count("$") % 2 == 1:
        return None
    return body


def main() -> None:
    raw = PATH.read_text(encoding="utf-8")
    lines = []
    for line in raw.split("\n"):
        m = re.match(r"^(\*\*\d+\.\*\*)\s+(.*)$", line)
        if not m:
            lines.append(line)
            continue
        fixed = fix_body(m.group(2))
        if fixed is None:
            lines.append(line)
        else:
            lines.append(f"{m.group(1)} {fixed}")
    text = "\n".join(lines)
    text = re.sub(r"(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)", r"\1\n\n\2", text)
    PATH.write_text(text, encoding="utf-8")

    # samples
    import importlib.util

    # quick textual samples
    t = PATH.read_text(encoding="utf-8")
    for key in ["math-11-1", "math-11-3", "math-11-10"]:
        i = t.find("id: `" + key + "`")
        j = t.find("**Part 3: Solve.**", i)
        k = t.find("**Answer.**", j)
        print("====", key, "====")
        print(t[j:k])
        print()


if __name__ == "__main__":
    main()
