#!/usr/bin/env python3
"""Normalize Ch11 Part-3 / calc steps to Ch13 style: prose outside $, math inside $."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")


def wrap_bare_percents_in_prose(s: str) -> str:
    """Turn bare 7.20% / 1.00 point numbers into $7.20\\%$ when outside math."""

    def repl(m: re.Match[str]) -> str:
        # skip if already inside $...$ — crude: odd number of $ before match
        before = s[: m.start()]
        # ignore currency \$
        dollars = len(re.findall(r"(?<!\\)\$", before))
        if dollars % 2 == 1:
            return m.group(0)
        num = m.group(1)
        return f"${num}\\%$"

    return re.sub(r"(?<!\$)(?<!\\)\b(\d+(?:\.\d+)?)%", repl, s)


def fix_numbered_body(body: str) -> str:
    # "$R$ = ..." scars
    body = re.sub(
        r"\$([A-Za-z][A-Za-z0-9_]*)\$\s*=\s*",
        r"$\1 = ",
        body,
    )

    # "R = nominal rate = 7.20%" (with or without $)
    body = re.sub(
        r"(?:\$)?([A-Za-z][A-Za-z0-9_]*)(?:\$)?\s*=\s*nominal rate\s*=\s*\$?([0-9.]+)\\?%\$?",
        r"$\1 = \2\\%$ (the nominal rate)",
        body,
    )
    body = re.sub(
        r"\$([A-Za-z][A-Za-z0-9_]*) = nominal rate \$=\s*([0-9.]+)\\%\$",
        r"$\1 = \2\\%$ (the nominal rate)",
        body,
    )

    # "(n = 1)" bare → "($n = 1$)"
    body = re.sub(r"\(n = (\d+)\)", r"($n = \1$)", body)
    body = re.sub(r"\(k = (-?[\d.]+)\)", r"($k = \1$)", body)

    # Convert every "label $= formula" → "label: $formula"
    # and "mathExpr $= formula" → "$mathExpr = formula"
    def split_eq(m: re.Match[str]) -> str:
        left = m.group(1).rstrip()
        # pure/short math fragment
        mathish = bool(
            re.match(
                r"^([0-9|\\].*|\$|[A-Za-z]_?[A-Za-z0-9]*(\([^)]*\))?)$",
                left,
            )
        ) or bool(re.search(r"(\\times|\\approx|\\ln|\\frac|/)", left))
        prose = bool(
            re.search(
                r"\b(rate|gap|growth|interest|jump|sum|ratio|terms|loss|"
                r"projection|offer|option|account|fund|periodic|nominal|"
                r"effective|balance|value|deposit|difference|target|extra|"
                r"first|second|total|quarterly|monthly|annual|doubling|"
                r"tripling|present|future|naive|linear|infinite|constant|"
                r"dividing|combination|extraction|series|adjustments)\b",
                left,
                re.I,
            )
        )
        if prose and not re.match(r"^[\d|$\\]", left.strip()):
            return f"{left}: $"
        if left.startswith("$"):
            return f"{left} = "
        if mathish or re.match(r"^[\d|A-Za-z\\]", left.strip()):
            return f"${left} = "
        return f"{left}: $"

    # Apply repeatedly for multiple `$=` on one line
    for _ in range(8):
        if "$=" not in body:
            break
        body2 = re.sub(
            r"(?:(?<=^)|(?<=;\s)|(?<=:\s)|(?<=,\s))([^$=\n]{1,100}?) \$= ",
            split_eq,
            body,
            count=1,
        )
        if body2 == body:
            # fallback: first `$=`
            body2 = re.sub(r" \$= ", ": $", body, count=1)
        body = body2

    # Bare "FV = ..." / "R = ..." whole-step equations without leading $
    if not body.lstrip().startswith("$") and re.match(
        r"^[A-Za-z][A-Za-z0-9_]*\s*=\s*", body
    ):
        # If it's a short variable equation, wrap all
        if body.rstrip().endswith("$"):
            body = "$" + body
        else:
            # convert trailing % and wrap
            body = body.replace(" × ", r" \times ")
            body = re.sub(r"(?<!\\)%", r"\\%", body)
            if not body.endswith("$"):
                body = "$" + body.rstrip(".") + "$."
                body = body.replace("$$.", "$.")

    # "Label = expr" without dollars (prose label)
    m = re.match(
        r"^([A-Za-z][A-Za-z0-9()/%\- ]{1,60}?)\s*=\s*(.+)$",
        body,
    )
    if m and "$" not in m.group(1) and not body.startswith("$"):
        label, rest = m.group(1).strip(), m.group(2).strip()
        if re.search(
            r"\b(rate|gap|growth|interest|jump|sum|ratio|value|balance|"
            r"difference|target|deposit|doubling|tripling|periodic|"
            r"nominal|effective|total|extra|first|second)\b",
            label,
            re.I,
        ):
            rest = rest.replace(" × ", r" \times ")
            rest = re.sub(r"(?<![\\$])%", r"\\%", rest)
            if rest.endswith("$"):
                body = f"{label}: ${rest}" if not rest.startswith("$") else f"{label}: {rest}"
            else:
                # strip trailing prose after math?
                # "0.24 percentage points, which..."
                mm = re.match(
                    r"^(.+?)(\s+(?:percentage points|points)\b.*)?$",
                    rest,
                )
                if mm and mm.group(2):
                    calc = mm.group(1).rstrip()
                    tail = mm.group(2)
                    calc = re.sub(r"(?<![\\$])%", r"\\%", calc)
                    body = f"{label}: ${calc}${tail}"
                else:
                    rest2 = rest.rstrip(".")
                    body = f"{label}: ${rest2}$."

    # At 11%: t = ... → At 11%: $t = ...
    body = re.sub(r":\s*([A-Za-zδ|\\][^=$\n]{0,40}?)\s*=\s*", r": $\1 = ", body)
    body = re.sub(r"\bAt δ\s*=\s*", r"At $\\delta = ", body)

    # Collapse accidental $$
    body = body.replace("$$", "$")

    # Fix double "(the nominal rate)" 
    body = re.sub(
        r"\(the nominal rate\)\s*\(the nominal rate\)",
        "(the nominal rate)",
        body,
    )

    body = wrap_bare_percents_in_prose(body)

    # Cleanup ": :"
    body = re.sub(r":\s*:", ":", body)
    return body


def fix_line(line: str) -> str:
    m = re.match(r"^(\*\*\d+\.\*\*)\s+(.*)$", line)
    if not m:
        return line
    return f"{m.group(1)} {fix_numbered_body(m.group(2))}"


def ensure_blank_between_steps(text: str) -> str:
    return re.sub(r"(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)", r"\1\n\n\2", text)


def main() -> None:
    s = PATH.read_text(encoding="utf-8")
    lines = s.split("\n")
    out = [fix_line(L) if L.startswith("**") and re.match(r"^\*\*\d+\.\*\*", L) else L for L in lines]
    s2 = "\n".join(out)

    # Global leftovers
    s2 = s2.replace(r"\text{", r"\mathrm{")
    s2 = re.sub(r" \$= ", ": $", s2)
    s2 = ensure_blank_between_steps(s2)

    PATH.write_text(s2, encoding="utf-8")
    print("wrote", PATH, "bytes", PATH.stat().st_size)


if __name__ == "__main__":
    main()
