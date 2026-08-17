#!/usr/bin/env python3
"""Re-apply Part 3 for math-11-41..80; fix thousands scars only inside those blocks."""
from __future__ import annotations

import re
from pathlib import Path
import importlib.util

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\math-ch11-financial.ts")

spec = importlib.util.spec_from_file_location(
    "rw", r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_rewrite_p3_41_80.py"
)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)
PART3 = mod.PART3


def fix_thousands(s: str) -> str:
    prev = None
    while prev != s:
        prev = s
        s = re.sub(r"(\d)\$, \$(\d)", r"\1,\2", s)
    return s


def digits_outside_math(s: str) -> bool:
    # File uses \\$ for currency (two backslash chars + dollar when written as \\\\ in python)
    tmp = s.replace("\\$", "")
    tmp = re.sub(r"\$[^$]*\$", "", tmp)
    return bool(re.search(r"\d", tmp))


def main() -> None:
    src = PATH.read_text(encoding="utf-8")
    touched = 0
    for n in range(41, 81):
        body = fix_thousands(PART3[n])
        tid = f"math-11-{n}"
        pattern = re.compile(
            rf"(id: `{tid}`,.*?\*\*Part 3: Solve\.\*\*\n\n)(.*?)(\n\n\*\*Answer\.\*\*)",
            re.S,
        )
        m = pattern.search(src)
        if not m:
            raise SystemExit(f"missing {tid}")
        old = m.group(2)
        if old != body:
            touched += 1
        src = src[: m.start(2)] + body + src[m.end(2) :]

    PATH.write_text(src, encoding="utf-8")

    # Verify from disk
    t = PATH.read_text(encoding="utf-8")
    bad = []
    for n in range(41, 81):
        tid = f"math-11-{n}"
        m = re.search(
            rf"id: `{tid}`,.*?\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*",
            t,
            re.S,
        )
        body = m.group(1)
        if body != fix_thousands(PART3[n]):
            bad.append(f"{n}: body mismatch")
        if re.search(r"\d\$, \$", body):
            bad.append(f"{n}: thousands scar")
        if "×" in body:
            bad.append(f"{n}: unicode times")
        if re.search(r"\\{3,}approx", body):
            bad.append(f"{n}: triple approx")
        if re.search(r"\$At\s", body):
            bad.append(f"{n}: At scar")
        # compare first line escapes to expected
        exp = fix_thousands(PART3[n]).split("\n")[0]
        got = body.split("\n")[0]
        if exp != got:
            bad.append(f"{n}: line1 mismatch\n  exp={exp!r}\n  got={got!r}")
        for line in body.split("\n"):
            mm = re.match(r"^\*\*\d+\.\*\*\s+(.*)$", line)
            if mm and digits_outside_math(mm.group(2) if False else mm.group(1)):
                # soft check - print only
                pass

    print(f"touched={touched}")
    print(f"bad={len(bad)}")
    for b in bad[:30]:
        print(b)

    for n in (41, 52, 53):
        m = re.search(
            rf"id: `math-11-{n}`,.*?\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*",
            t,
            re.S,
        )
        print("=" * 40, f"math-11-{n}")
        print(m.group(1))


if __name__ == "__main__":
    main()
