#!/usr/bin/env python3
import re
from pathlib import Path

t = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\math-ch11-financial.ts").read_text(
    encoding="utf-8"
)


def digits_outside_math(s: str) -> bool:
    # Remove currency \\$ (two backslashes + dollar in file = written \\$ in python read as \\$)
    # When reading file, \\$ is chars: \ \ $
    tmp = s
    tmp = tmp.replace("\\\\$", "")  # won't work - file has two backslash chars
    # In Python string from file read: backslash-backslash-dollar
    # Represented in Python source as "\\\\$"
    tmp = s.replace("\\$", "")  # this removes ONE backslash + dollar; if file has TWO backslashes,
    # first replace of "\\$" (one bs + dollar) would leave one backslash behind

    # Correct approach: remove sequences of backslash(es) before dollar used as currency
    tmp = re.sub(r"\\+\$", "", s)  # remove \$ or \\$ currency
    tmp = re.sub(r"\$[^$]*\$", "", tmp)
    return bool(re.search(r"\d", tmp))


real_scars = []
digits = []
other = []
touched_ok = 0

for n in range(41, 81):
    m = re.search(
        rf"id: `math-11-{n}`,.*?\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*",
        t,
        re.S,
    )
    body = m.group(1)
    touched_ok += 1
    # Real thousands scar: digit $ , $ digit  (number split)
    for h in re.finditer(r"(\d)\$, \$(\d)", body):
        i = h.start()
        real_scars.append(f"{n}: {body[max(0,i-15):i+20]!r}")
    if "×" in body:
        other.append(f"{n}: unicode ×")
    if re.search(r"\\{3,}(approx|times)", body):
        other.append(f"{n}: triple escape")
    if re.search(r"\$At\s", body):
        other.append(f"{n}: $At")
    if re.search(r"needed\s*=", body, re.I):
        other.append(f"{n}: needed=")
    if re.search(r"\$(?:\\mathrm\{)?PV_?\d\}?:\s", body):
        other.append(f"{n}: PV colon")
    for line in body.split("\n"):
        mm = re.match(r"^\*\*\d+\.\*\*\s+(.*)$", line)
        if mm and digits_outside_math(mm.group(1)):
            digits.append(f"{n}: {mm.group(1)[:140]}")

print("tasks", touched_ok)
print("real_scars", len(real_scars))
for x in real_scars:
    print(" ", x)
print("digits_outside", len(digits))
for x in digits[:40]:
    print(" ", x)
print("other", len(other))
for x in other:
    print(" ", x)

# spot-check escapes on 52
m = re.search(
    r"id: `math-11-52`,.*?\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*",
    t,
    re.S,
)
print("52_repr_line1", repr(m.group(1).split("\n")[0]))
