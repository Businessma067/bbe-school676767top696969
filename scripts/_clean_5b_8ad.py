# -*- coding: utf-8 -*-
"""Clean remaining padded 5.B and 8.A/D without collapsing avg below 550."""
import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
by = {t["case_id"]: t for t in data["math"]}

by["DEMO MATH 5.H01"]["tactical_explanations"][1] = r"""**B.** → True

Keep $m+c=180$ and revenue $8100$, but replace the colour price by $60$:

$$
35(180-c)+60c=8100
$$

$$
6300-35c+60c=8100
$$

$$
6300+25c=8100
$$

$$
25c=1800
$$

$$
c=\frac{1800}{25}=72
$$

$$
72<75
$$

so the new colour count falls below $75$.

So the statement is True."""

# Also clean 5 C if it has micro padding — check length; if >600 with splits, replace
if "35\\cdot 100" in by["DEMO MATH 5.H01"]["tactical_explanations"][2] or "First the constant" in by["DEMO MATH 5.H01"]["tactical_explanations"][2]:
    by["DEMO MATH 5.H01"]["tactical_explanations"][2] = r"""**C.** → True

From the baseline $(90,90)$, shift by $15$ pages:

$$
(m,c)=(75,105)
$$

Revenue at the new mix:

$$
35\cdot 75=2625
$$

$$
55\cdot 105=5775
$$

$$
2625+5775=8400
$$

$$
8400-8100=300
$$

Revenue rises by exactly EUR $300$.

So the statement is True."""

by["DEMO MATH 8.H01"]["tactical_explanations"][0] = r"""**A.** → True

Daytime tariff has a fixed base of EUR $12$ and a per-kilometre rate of EUR $0.8$. For distance $d$:

$$
C_{\mathrm{day}}(d)=12+0.8d
$$

Spot-check at $d=10$ and $d=20$:

$$
C_{\mathrm{day}}(10)=12+8=20
$$

$$
C_{\mathrm{day}}(20)=12+16=28
$$

Both match $12+0.8d$, so the claimed daytime formula is exact.

So the statement is True."""

by["DEMO MATH 8.H01"]["tactical_explanations"][3] = r"""**D.** → True

Original daytime bill at $d=20$:

$$
0.8\cdot 20=16
$$

$$
12+16=28
$$

Waiving the base leaves only the kilometre charge $16$. The saving is

$$
28-16=12
$$

exactly the waived EUR $12$ base fee.

So the statement is True."""

# Clean 8 E if it has weird splits
e8 = by["DEMO MATH 8.H01"]["tactical_explanations"][4]
if "0.8\\times 10=8\\qquad 8+8=16" in e8 or e8.count(DD) // 2 >= 10:
    by["DEMO MATH 8.H01"]["tactical_explanations"][4] = r"""**E.** → False

Daytime bills at $d=10$ and $d=20$:

$$
C_{\mathrm{day}}(10)=12+0.8\cdot 10=12+8=20
$$

$$
C_{\mathrm{day}}(20)=12+0.8\cdot 20=12+16=28
$$

Ratio:

$$
\frac{28}{20}=1.4\neq 2
$$

Doubling distance multiplies the bill by $1.4$, not by $2$: the kilometre part scales, but the fixed base does not.

So the statement is False."""


def stats(subject):
    lens, blocks = [], []
    for t in data[subject]:
        for e in t["tactical_explanations"]:
            lens.append(len(e))
            blocks.append(e.count(DD) // 2)
    return {
        "avg": round(sum(lens) / len(lens), 1),
        "min": min(lens),
        "max": max(lens),
        "bavg": round(sum(blocks) / len(blocks), 2),
    }


print(stats("economics"), stats("math"))

errors = []
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, letter in enumerate("ABCDE"):
            want = "True" if task["answer_key"][i] else "False"
            expl = task["tactical_explanations"][i]
            if not expl.startswith(f"**{letter}.** → {want}"):
                errors.append(f"{task['case_id']} {letter}")
            if expl.count(DD) % 2:
                errors.append(f"{task['case_id']} {letter} $$")
print("errors", len(errors))
if errors:
    raise SystemExit(1)

PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
ts = TS.read_text(encoding="utf-8")
ts2, n = re.subn(
    r'export const MOCK_EXAM_DEMO_CONTENT_REV\s*=\s*\n?\s*"[^"]*";',
    f'export const MOCK_EXAM_DEMO_CONTENT_REV =\n  "{REV}";',
    ts,
    count=1,
)
assert n == 1
TS.write_text(ts2, encoding="utf-8")
print("wrote")
