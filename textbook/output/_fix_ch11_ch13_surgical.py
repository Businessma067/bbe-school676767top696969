#!/usr/bin/env python3
"""Surgical repair of remaining Ch11 Part-3 split-math scars."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")


def fix_split(body: str) -> str | None:
    """Return fixed body, or None if pattern did not match."""
    s = body.strip()

    # Case A: R_i = (1.016)^{4}$ - 1 approx 1.06... approx $6.55%.
    m = re.match(
        r"^\$?(?P<name>[A-Za-z][A-Za-z0-9_{}]*)\s*=\s*"
        r"(?P<pow>\([^)]+\)(?:\^\{[^}]+\})?)\$ - 1\s+"
        r"(?:approx|≈|\\approx)\s+"
        r"(?P<mid>.+?)\s+"
        r"(?:approx|≈|\\approx)\s+"
        r"\$?(?P<pct>[0-9.]+)(?:\\%)?\$?\.?"
        r"(?P<rest>.*)$",
        s,
    )
    if m:
        rest = m.group("rest").strip(" .$")
        core = (
            f"${m.group('name')} = {m.group('pow')} - 1 "
            f"\\\\approx {m.group('mid').strip()} "
            f"\\\\approx {m.group('pct')}\\\\%$."
        )
        if rest:
            core = core[:-1] + f", {rest.lstrip(', ')}."
        return core

    # Case B: R_{ii} = (1.0325)^{2}$ - 1 = 1.066... approx $6.61%.
    m = re.match(
        r"^\$?(?P<name>[A-Za-z][A-Za-z0-9_{}]*)\s*=\s*"
        r"(?P<pow>\([^)]+\)(?:\^\{[^}]+\})?)\$ - 1 = "
        r"(?P<mid>.+?)\s+"
        r"(?:approx|≈|\\approx)\s+"
        r"\$?(?P<pct>[0-9.]+)(?:\\%)?\$?\.?"
        r"(?P<rest>.*)$",
        s,
    )
    if m:
        rest = m.group("rest").strip(" .$")
        core = (
            f"${m.group('name')} = {m.group('pow')} - 1 = "
            f"{m.group('mid').strip()} "
            f"\\\\approx {m.group('pct')}\\\\%$."
        )
        if rest:
            core = core[:-1] + f", {rest.lstrip(', ')}."
        return core

    # Case C: R_M = (1.005)^{12}$ - 1 approx $6.17%.
    m = re.match(
        r"^\$?(?P<name>[A-Za-z][A-Za-z0-9_{}]*)\s*=\s*"
        r"(?P<pow>\([^)]+\)(?:\^\{[^}]+\})?)\$ - 1\s+"
        r"(?:approx|≈|\\approx)\s+"
        r"\$?(?P<pct>[0-9.]+)(?:\\%)?\$?\.?"
        r"(?P<rest>.*)$",
        s,
    )
    if m:
        rest = m.group("rest").strip(" .$")
        core = (
            f"${m.group('name')} = {m.group('pow')} - 1 "
            f"\\\\approx {m.group('pct')}\\\\%$."
        )
        if rest:
            core = core[:-1] + f", {rest.lstrip(', ')}."
        return core

    return None


def fix_body(body: str) -> str:
    fixed = fix_split(body)
    if fixed is not None:
        body = fixed

    # Bare "Target ratio = ..."
    if "$" not in body:
        m = re.match(r"^([A-Za-z][A-Za-z ]{1,40}?)\s*=\s*(.+)$", body)
        if m and re.search(
            r"ratio|gap|growth|interest|rate|value|sum|difference|target|^ln$",
            m.group(1),
            re.I,
        ):
            label, rest = m.group(1).strip(), m.group(2).strip().rstrip(".")
            rest = rest.replace("×", r"\times")
            body = f"{label}: ${rest}$."

    # Difference approx → Difference: $\approx
    if re.match(r"^Difference\s+(?:approx|≈)", body):
        body = re.sub(
            r"^Difference\s+(?:approx|≈|\\approx)\s*",
            "Difference: $\\\\approx ",
            body,
        )
        if not body.rstrip().endswith("$") and not body.rstrip().endswith("$."):
            body = body.rstrip(".") + "$."

    # Word approx → \\approx (only the bare word)
    body = re.sub(r"(?<![\\a-zA-Z])approx(?![a-zA-Z])", "\\\\approx", body)

    # Fix R_3 line with trailing ).$
    body = re.sub(
        r"\\approx\s*\$([0-9.]+)\\%\$,(.*?)\)\.?\$$",
        r"\\\\approx \1\\\\%$, \2.",
        body,
    )
    body = re.sub(
        r"\\approx\s*\$([0-9.]+)\\%\$ ,(.*)\.$$",
        r"\\\\approx \1\\\\%$, \2.",
        body,
    )

    return body


def main() -> None:
    # self-test
    tests = [
        r"R_i = (1.016)^{4}$ - 1 approx 1.065533 - 1 = 0.065533 approx $6.55\%.",
        r"R_{ii} = (1.0325)^{2}$ - 1 = 1.066056 - 1 = 0.066056 approx $6.61\%.",
        r"R_M = (1.005)^{12}$ - 1 approx $6.17\%.",
    ]
    for t in tests:
        print("IN ", t[:60])
        print("OUT", fix_split(t))
        print()

    raw = PATH.read_text(encoding="utf-8")
    lines = []
    nfix = 0
    for line in raw.split("\n"):
        m = re.match(r"^(\*\*\d+\.\*\*)\s+(.*)$", line)
        if not m:
            lines.append(line)
            continue
        new_body = fix_body(m.group(2))
        if new_body != m.group(2):
            nfix += 1
        lines.append(f"{m.group(1)} {new_body}")
    text = "\n".join(lines)
    text = re.sub(r"(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)", r"\1\n\n\2", text)
    PATH.write_text(text, encoding="utf-8")
    print("fixed_lines", nfix)


if __name__ == "__main__":
    main()
