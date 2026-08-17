#!/usr/bin/env python3
"""Ch11 Part-3 numbered steps → Ch13 style (prose outside $, math inside)."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")


def fix_body(body: str) -> str:
    # 1) "Label $= formula$" → "Label: $formula$"
    body = body.replace(" $= ", ": $")

    # 2) "R = nominal rate = 7.20%" → "$R = 7.20\\%$ (the nominal rate)"
    def nom(m: re.Match[str]) -> str:
        return "$" + m.group(1) + " = " + m.group(2) + "\\\\%$ (the nominal rate)"

    body = re.sub(
        r"\b([A-Za-z][A-Za-z0-9_]*)\s*=\s*nominal rate\s*=\s*([0-9.]+)%",
        nom,
        body,
    )
    body = re.sub(
        r"\$([A-Za-z][A-Za-z0-9_]*)\$\s*=\s*nominal rate\s*=\s*([0-9.]+)(?:\\\\%)?",
        nom,
        body,
    )

    # 3) (n = 1) → ($n = 1$)
    body = re.sub(r"(?<!\$)\(n = (\d+)\)", r"($n = \1$)", body)

    # 4) Bare percents in parentheses: (6.61%) → ($6.61\\%$)
    body = re.sub(
        r"\((\d+(?:\.\d+)?)%\)",
        lambda m: "($" + m.group(1) + "\\\\%$)",
        body,
    )

    # 5) "than 7.44%" / "lower than 7.44%" outside math
    def wrap_outside(s: str) -> str:
        out: list[str] = []
        i = 0
        in_math = False
        while i < len(s):
            if s.startswith("\\$", i):
                out.append("\\$")
                i += 2
                continue
            ch = s[i]
            if ch == "$":
                in_math = not in_math
                out.append(ch)
                i += 1
                continue
            if not in_math:
                m = re.match(r"(\d+(?:\.\d+)?)%", s[i:])
                if m:
                    out.append("$" + m.group(1) + "\\\\%$")
                    i += len(m.group(0))
                    continue
                m = re.match(r"(\d+(?:\.\d+)?)(?= point\b)", s[i:])
                if m:
                    out.append("$" + m.group(1) + "$")
                    i += len(m.group(0))
                    continue
            out.append(ch)
            i += 1
        return "".join(out)

    body = wrap_outside(body)

    # 6) Ensure \\% inside math (repair single-backslash \% written wrongly)
    # After this, every % inside $...$ that isn't already \\% becomes \\%
    def repair_math_pct(s: str) -> str:
        out: list[str] = []
        i = 0
        in_math = False
        while i < len(s):
            if s.startswith("\\$", i):
                out.append("\\$")
                i += 2
                continue
            if s[i] == "$":
                in_math = not in_math
                out.append("$")
                i += 1
                continue
            if in_math and s[i] == "%":
                # count preceding backslashes in out
                bs = 0
                j = len(out) - 1
                while j >= 0 and out[j] == "\\":
                    bs += 1
                    j -= 1
                if bs == 0:
                    out.append("\\\\%")
                elif bs == 1:
                    # one backslash already — add one more for .ts source
                    out.append("\\%")
                else:
                    out.append("%")
                i += 1
                continue
            out.append(s[i])
            i += 1
        return "".join(out)

    body = repair_math_pct(body)

    # Safety: even dollar count (ignore \$)
    tmp = body.replace("\\$", "")
    if tmp.count("$") % 2 == 1:
        return None  # signal revert
    return body


def main() -> None:
    raw = PATH.read_text(encoding="utf-8")
    out_lines: list[str] = []
    changed = 0
    for line in raw.split("\n"):
        m = re.match(r"^(\*\*\d+\.\*\*)\s+(.*)$", line)
        if not m:
            out_lines.append(line)
            continue
        fixed = fix_body(m.group(2))
        if fixed is None:
            out_lines.append(line)
            continue
        new_line = f"{m.group(1)} {fixed}"
        if new_line != line:
            changed += 1
        out_lines.append(new_line)

    text = "\n".join(out_lines)
    text = re.sub(r"(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)", r"\1\n\n\2", text)
    PATH.write_text(text, encoding="utf-8")

    # verify key lines
    sample = PATH.read_text(encoding="utf-8")
    for needle in [
        "Periodic rate:",
        "gives $R =",
        "Gap:",
        "Offer (i):",
        "Interest for Offer (i):",
    ]:
        idx = sample.find(needle)
        if idx >= 0:
            frag = sample[idx : idx + 90].replace("\n", " ")
            print("OK", repr(frag))
        else:
            print("MISSING", needle)
    print("changed_lines", changed)


if __name__ == "__main__":
    main()
