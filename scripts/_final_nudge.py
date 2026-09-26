# -*- coding: utf-8 -*-
"""Final +4 avg nudge for math (>=550)."""
import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
by = {t["case_id"]: t for t in data["math"]}

by["DEMO MATH 8.H01"]["tactical_explanations"][3] = r"""**D.** → True

Original daytime bill at $d=20$:

$$
0.8\cdot 20=16
$$

$$
12+16=28
$$

After waiving the EUR $12$ base, only the kilometre charge remains:

$$
16
$$

The saving versus the original daytime tariff is

$$
28-16=12
$$

exactly the waived base fee.

So the statement is True."""

by["DEMO MATH 5.H01"]["tactical_explanations"][0] = r"""**A.** → True

Eliminate $m$ by substituting $m=180-c$ into the revenue equation:

$$
35(180-c)+55c=8100
$$

$$
35\cdot 180-35c+55c=8100
$$

$$
6300+20c=8100
$$

$$
20c=1800
$$

$$
c=\frac{1800}{20}=90
$$

$$
m=180-90=90
$$

The unique baseline solution is therefore $(m,c)=(90,90)$.

So the statement is True."""

by["MATH 12.187"]["tactical_explanations"][1] = r"""**B.** → True

The overview already recovers the Subspecies A joint as one of the three summands of $P(T^+)$:

$$
P(S_A\cap T^{+})=0.03432
$$

The claim’s threshold is $3.4\%=0.034$. Compare:

$$
0.03432>0.034
$$

so the joint probability clears the hurdle.

So the statement is True."""

by["MATH 13.108"]["tactical_explanations"][2] = r"""**C.** → True

For a binomial count $X\sim\mathrm{Bin}(n,p)$, the variance formula is $np(1-p)$. Insert $n=50$, $p=0.8$, and $1-p=0.2$:

$$
\mathrm{Var}(X)=50\cdot 0.8\cdot 0.2
$$

$$
50\cdot 0.8=40
$$

$$
40\cdot 0.2=8
$$

The variance equals $8$, matching the claim.

So the statement is True."""

by["DEMO MATH 11.H01"]["tactical_explanations"][3] = r"""**D.** → False

From letter B the revenue maximiser is $q=15$. Marginal revenue there is zero:

$$
R'(15)=90-6\cdot 15=90-90=0
$$

while price is still positive:

$$
P(15)=90-3\cdot 15=90-45=45
$$

$$
45\neq 0
$$

Price does not equal marginal revenue at the revenue peak.

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
checked = 0
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, letter in enumerate("ABCDE"):
            checked += 1
            want = "True" if task["answer_key"][i] else "False"
            expl = task["tactical_explanations"][i]
            if not expl.startswith(f"**{letter}.** → {want}"):
                errors.append(f"{task['case_id']} {letter}")
            if expl.count(DD) % 2:
                errors.append(f"$$ {task['case_id']} {letter}")
print("checked", checked, "errors", len(errors))
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
