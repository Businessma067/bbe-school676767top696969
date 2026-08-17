#!/usr/bin/env python3
import re
from pathlib import Path

t = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\math-ch11-financial.ts").read_text(
    encoding="utf-8"
)


def digits_outside_math(s: str) -> bool:
    # Remove currency \$ first (in file: \\$ = two chars \ and $)
    # When read from file, currency is backslash-backslash-dollar? 
    # In .ts source: \\$ means two backslashes + dollar in the file bytes? 
    # Template literal content: characters \ $ for currency escape in the OUTPUT string,
    # but in the .ts SOURCE file we write \\$ which is \ \ $ (two backslashes and dollar).
    tmp = s.replace("\\$", "")  # remove one-backslash dollar OR...
    # Actually file has: \\$ as chars \, \, $
    tmp = s.replace("\\\\$", "")  # remove \\$
    tmp = re.sub(r"\$[^$]*\$", "", tmp)
    return bool(re.search(r"\d", tmp))


issues = []
for n in range(41, 81):
    tid = f"math-11-{n}"
    m = re.search(
        rf"id: `{tid}`,.*?\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*",
        t,
        re.S,
    )
    body = m.group(1)
    for h in re.finditer(r"\d\$, \$", body):
        i = h.start()
        issues.append(f"{n} THOUSANDS {body[max(0,i-25):i+25]!r}")
    if "×" in body:
        issues.append(f"{n} UNICODE_TIMES")
    if re.search(r"\\{3,}approx", body):
        issues.append(f"{n} TRIPLE_APPROX")
    if re.search(r"\$At\s", body):
        issues.append(f"{n} AT_SCAR")
    for line in body.split("\n"):
        mm = re.match(r"^\*\*\d+\.\*\*\s+(.*)$", line)
        if not mm:
            continue
        s = mm.group(1)
        if digits_outside_math(s):
            issues.append(f"{n} DIGITS {s[:120]}")
        if re.search(r"needed\s*=", s, re.I):
            issues.append(f"{n} NEEDED {s[:80]}")
        if re.search(r"\$(?:\\mathrm\{)?P(?:DV|V)_?\d\}?:\s", s):
            issues.append(f"{n} COLON {s[:80]}")

print(f"issues={len(issues)}")
for i in issues:
    print(i)

# show raw repr of one currency and one so-clause
m = re.search(
    r"id: `math-11-52`,.*?\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*",
    t,
    re.S,
)
print("---52 line1 repr---")
print(repr(m.group(1).split("\n")[0]))
m42 = re.search(
    r"id: `math-11-42`,.*?\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*",
    t,
    re.S,
)
print("---42 line1 repr---")
print(repr(m42.group(1).split("\n")[0]))
