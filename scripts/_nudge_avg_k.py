# -*- coding: utf-8 -*-
"""Nudge math avg back into 550–700 by thickening a few lean letters."""
import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
by = {t["case_id"]: t for t in data["math"]}

# Medium-depth 12.187: reuse overview figures, show the letter's own arithmetic.
by["MATH 12.187"]["tactical_explanations"] = [
    r"""**A.** → True

The overview already recovers the three subspecies contributions to a positive test and their total

$$
P(T^{+})=0.03432+0.0229+0.02535=0.08257
$$

Compare with the claimed $7\%$ threshold:

$$
0.08257>0.07
$$

So the statement is True.""",
    r"""**B.** → True

The overview recovers the Subspecies A joint as one summand of $P(T^+)$:

$$
P(S_A\cap T^{+})=0.03432
$$

Compare with $3.4\%=0.034$:

$$
0.03432>0.034
$$

So the statement is True.""",
    r"""**C.** → False

Bayes with the overview's joint and marginal:

$$
P(S_A\mid T^{+})=\frac{0.03432}{0.08257}
$$

$$
\frac{0.03432}{0.08257}\approx 0.4156
$$

$$
0.4156\times 100\%\approx 41.56\%
$$

The claim needs more than $45\%$:

$$
41.56\%\ngtr 45\%
$$

So the statement is False.""",
    r"""**D.** → True

A field test returns either a positive or a negative result; those two outcomes partition the sample space, so $T^{-}$ is the complement of $T^{+}$:

$$
P(T^{-})=1-P(T^{+})
$$

With the recovered $P(T^{+})=0.08257$ this also gives $P(T^{-})=0.91743$, but the equality itself is what the claim asserts — no independence or prevalence assumption is required.

So the statement is True.""",
    r"""**E.** → True

The overview recovers both joints as summands of $P(T^+)$:

$$
P(S_C\cap T^{+})=0.02535,\qquad P(S_B\cap T^{+})=0.0229
$$

Both posteriors divide by the same marginal $P(T^{+})=0.08257$, so comparing posteriors is the same as comparing joints:

$$
\frac{0.02535}{0.08257}>\frac{0.0229}{0.08257}
$$

because $0.02535>0.0229$. Hence $P(S_C\mid T^{+})>P(S_B\mid T^{+})$.

So the statement is True.""",
]

# Thicken DEMO MATH 11 A/D a notch (still compact)
by["DEMO MATH 11.H01"]["tactical_explanations"][0] = r"""**A.** → True

Start from the linear demand and form revenue:

$$
P(q)=90-3q
$$

$$
R(q)=q\cdot P(q)=q(90-3q)=90q-3q^{2}
$$

Differentiate term by term:

$$
R'(q)=90-6q
$$

Evaluate at $q=4$:

$$
6\cdot 4=24,\qquad 90-24=66
$$

so $R'(4)=66$, matching the claim.

So the statement is True."""

by["DEMO MATH 11.H01"]["tactical_explanations"][3] = r"""**D.** → False

From letter B the revenue maximiser is $q=15$. Price and marginal revenue there:

$$
P(15)=90-3\cdot 15=90-45=45
$$

$$
R'(15)=90-6\cdot 15=90-90=0
$$

Compare:

$$
45\neq 0
$$

At the quantity that maximises $R$, price equals $45$ while marginal revenue equals $0$, so they are not equal.

So the statement is False."""

# Thicken DEMO MATH 7 slightly where very short — leave if already ok

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


print("nudge", {s: stats(s) for s in ("economics", "math")})

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
print("ok")
