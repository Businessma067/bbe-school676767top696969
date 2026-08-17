#!/usr/bin/env python3
"""
Wrap any leftover bare number/currency/percent tokens sitting OUTSIDE $...$
in Ch11 tactical_explanations, matching the Chapter 13 convention where
every quantity (even in a one-off aside) lives inside math.
"""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")


def wrap_line(s: str) -> str:
    out: list[str] = []
    i = 0
    in_math = False
    n = len(s)
    while i < n:
        if s.startswith("\\$", i) and not in_math:
            # bare currency token outside math: \$1,234.56 optionally with trailing %? unlikely
            j = i + 2
            # consume digits/commas/decimal
            k = j
            while k < n and (s[k].isdigit() or s[k] in ",."):
                k += 1
            token = s[i:k]
            out.append("$" + token + "$")
            i = k
            continue
        if s[i] == "$":
            in_math = not in_math
            out.append("$")
            i += 1
            continue
        if not in_math and s[i].isdigit():
            j = i
            while j < n and (s[j].isdigit() or s[j] in ",."):
                j += 1
            # optional trailing % or \%
            token = s[i:j]
            rest = s[j:]
            if rest.startswith("\\%"):
                token += "\\%"
                j += 2
            elif rest.startswith("%"):
                token += "\\%"
                j += 1
            out.append("$" + token + "$")
            i = j
            continue
        out.append(s[i])
        i += 1
    return "".join(out)


def process_body(body: str) -> str:
    # Only touch text OUTSIDE of $$...$$ display blocks too - but those already
    # start/end with $$ which our char-scan treats as two single $ toggles,
    # net effect: still correctly tracks in_math state. Safe.
    return wrap_line(body)


def main() -> None:
    s = PATH.read_text(encoding="utf-8")

    def repl(m: re.Match[str]) -> str:
        header = m.group(1)  # **A) ...**  (true)
        rest = m.group(2)
        return header + process_body(rest)

    # Match each tactical_explanations string: header line then rest until closing backtick
    pattern = re.compile(
        r"(\*\*[A-E]\)[^\n]*\*\*\s*\((?:true|false)\))(.*?)(?=`,\n|`\n)",
        re.S,
    )
    new_s, n = pattern.subn(repl, s)
    Path(PATH).write_text(new_s, encoding="utf-8")
    print("blocks_processed", n)


if __name__ == "__main__":
    main()
