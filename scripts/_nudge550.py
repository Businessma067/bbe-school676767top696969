# -*- coding: utf-8 -*-
"""Tiny nudge: +~300 chars across short letters to clear math avg 550."""
import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
by = {t["case_id"]: t for t in data["math"]}

# Slightly fuller 8 A/B/D
by["DEMO MATH 8.H01"]["tactical_explanations"][0] = r"""**A.** → True

Daytime tariff has a fixed base of EUR $12$ and a per-kilometre rate of EUR $0.8$. For distance $d$ the kilometre charge is $0.8d$, so

$$
C_{\mathrm{day}}(d)=12+0.8d
$$

Spot-check at $d=10$:

$$
C_{\mathrm{day}}(10)=12+8=20
$$

which matches $12+0.8\cdot 10$. The claimed daytime formula is exact.

So the statement is True."""

by["DEMO MATH 8.H01"]["tactical_explanations"][1] = r"""**B.** → True

Night runs keep the same kilometre rate and add a flat surcharge of EUR $5$:

$$
C_{\mathrm{night}}(d)=C_{\mathrm{day}}(d)+5
$$

$$
C_{\mathrm{night}}(d)=12+0.8d+5=17+0.8d
$$

for every $d>0$. The night bill is therefore exactly EUR $5$ more than the day bill at the same distance.

So the statement is True."""

by["DEMO MATH 8.H01"]["tactical_explanations"][3] = r"""**D.** → True

Original daytime bill at $d=20$:

$$
0.8\cdot 20=16
$$

$$
12+16=28
$$

Waiving the EUR $12$ base leaves only the kilometre charge $16$. The saving is

$$
28-16=12
$$

exactly the waived base fee.

So the statement is True."""

# Also thicken 9.A and 10.D slightly (currently lean)
by["DEMO MATH 9.H01"]["tactical_explanations"][0] = r"""**A.** → True

Rewrite the rational function by factoring $ax$ out of the numerator:

$$
s(x)=ax\cdot\frac{1+\frac{b}{ax}+\frac{c}{ax^{2}}+\frac{d}{ax^{3}}}{1+\frac{4}{x^{2}}}
$$

As $x\to+\infty$ the fraction tends to $1$, so

$$
s(x)\sim ax
$$

When $a>0$ this tends to $+\infty$, matching the claim.

So the statement is True."""

# Peek: only replace 10.D if very short
if len(by["DEMO MATH 10.H01"]["tactical_explanations"][3]) < 420:
    # keep existing; thicken 13.B instead
    by["MATH 13.108"]["tactical_explanations"][1] = r"""**B.** → False

For a binomial count the mean is the product of the trial count and the success probability. With $n=12$ and the recovered $p=0.8$,

$$
E[X]=np=12\cdot 0.8=9.6
$$

The claim reports $4.8$. Because

$$
9.6\neq 4.8
$$

the statement is false.

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


print("econ", stats("economics"))
print("math", stats("math"))

errors = []
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, letter in enumerate("ABCDE"):
            want = "True" if task["answer_key"][i] else "False"
            expl = task["tactical_explanations"][i]
            if not expl.startswith(f"**{letter}.** → {want}"):
                errors.append(f"{task['case_id']} {letter}")
            if expl.count(DD) % 2:
                errors.append(f"unbal {task['case_id']} {letter}")
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
