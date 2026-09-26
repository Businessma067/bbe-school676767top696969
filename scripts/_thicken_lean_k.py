# -*- coding: utf-8 -*-
"""Bring lean math cases (5,8,11,12,13) up to medium mock-3/4 depth."""
import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
by = {t["case_id"]: t for t in data["math"]}

by["DEMO MATH 5.H01"]["tactical_explanations"] = [
    r"""**A.** → True

Substitute $m=180-c$ into the revenue equation:

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

The unique baseline solution is $(m,c)=(90,90)$.

So the statement is True.""",
    r"""**B.** → True

Keep $m+c=180$ and total revenue $8100$, but replace the colour price by $60$:

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

So the statement is True.""",
    r"""**C.** → True

From the baseline $(90,90)$, shift by $15$ pages to

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

Compare with the original $8100$:

$$
8400>8100
$$

so the shifted mix earns more.

So the statement is True.""",
    r"""**D.** → False

At the baseline $(90,90)$ the colour share of pages is

$$
\frac{90}{180}=\frac{1}{2}=0.5
$$

Half of the book is colour, so the claim that colour is strictly less than half fails.

So the statement is False.""",
    r"""**E.** → True

Mono revenue at the baseline:

$$
35\cdot 90=3150
$$

Colour revenue:

$$
55\cdot 90=4950
$$

$$
3150+4950=8100
$$

which recovers the stem total, so the split is consistent.

So the statement is True.""",
]

by["DEMO MATH 8.H01"]["tactical_explanations"] = [
    r"""**A.** → True

Daytime tariff has two pieces: a fixed base of EUR $12$ and a per-kilometre rate of EUR $0.8$. For distance $d$ the kilometre charge is $0.8d$, so

$$
C_{\mathrm{day}}(d)=12+0.8d
$$

which is exactly the claimed daytime bill.

So the statement is True.""",
    r"""**B.** → True

Night runs keep the same kilometre rate and add a flat surcharge of EUR $5$:

$$
C_{\mathrm{night}}(d)=C_{\mathrm{day}}(d)+5
$$

$$
C_{\mathrm{night}}(d)=12+0.8d+5=17+0.8d
$$

for every $d>0$. The night bill is therefore exactly EUR $5$ more than the day bill at the same distance.

So the statement is True.""",
    r"""**C.** → False

Set the two bills equal and simplify:

$$
12+0.8d=12+0.8d+5
$$

$$
0=5
$$

The identity $0=5$ is absurd, so no real break-even distance $d^{*}$ exists. Parallel affine tariffs with a positive gap never meet.

So the statement is False.""",
    r"""**D.** → True

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

So the statement is True.""",
    r"""**E.** → False

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

Doubling distance multiplies the bill by $1.4$, not by $2$: the kilometre part scales, but the fixed base of $12$ does not.

So the statement is False.""",
]

by["DEMO MATH 11.H01"]["tactical_explanations"] = [
    r"""**A.** → True

Form revenue from linear demand and expand:

$$
P(q)=90-3q
$$

$$
R(q)=q(90-3q)=90q-3q^{2}
$$

Differentiate:

$$
R'(q)=90-6q
$$

At $q=4$:

$$
6\cdot 4=24,\qquad 90-24=66
$$

so $R'(4)=66$, matching the claim.

So the statement is True.""",
    r"""**B.** → False

Set marginal revenue to zero:

$$
90-6q=0\qquad\Rightarrow\qquad q=15
$$

Choke quantity where $P(q)=0$:

$$
90-3q=0\qquad\Rightarrow\qquad q=30
$$

$$
15\neq 30
$$

The revenue maximiser is $q=15$, not the choke quantity $q=30$.

So the statement is False.""",
    r"""**C.** → True

True increment $R(5)-R(4)$:

$$
R(5)=90\cdot 5-3\cdot 25=450-75=375
$$

$$
R(4)=90\cdot 4-3\cdot 16=360-48=312
$$

$$
375-312=63
$$

Tangent prediction with $R'(4)=66$:

$$
66\cdot 1=66
$$

Because $R''(q)=-6<0$, the tangent overestimates:

$$
66>63
$$

So the statement is True.""",
    r"""**D.** → False

At the revenue maximiser $q=15$ from letter B:

$$
P(15)=90-3\cdot 15=90-45=45
$$

$$
R'(15)=90-6\cdot 15=90-90=0
$$

$$
45\neq 0
$$

Price and marginal revenue are not equal there.

So the statement is False.""",
    r"""**E.** → False

Average revenue equals price under this demand:

$$
AR(q)=\frac{R(q)}{q}=P(q)=90-3q
$$

Marginal revenue is $R'(q)=90-6q$. At $q=10$:

$$
AR(10)=90-30=60
$$

$$
R'(10)=90-60=30
$$

$$
60\neq 30
$$

Average and marginal revenue differ.

So the statement is False.""",
]

by["MATH 12.187"]["tactical_explanations"] = [
    r"""**A.** → True

The overview already recovers the three subspecies contributions to a positive test. Adding them gives the unconditional positive-test probability:

$$
P(T^{+})=0.03432+0.0229+0.02535
$$

$$
0.03432+0.0229=0.05722
$$

$$
0.05722+0.02535=0.08257
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

Bayes using the overview's joint and marginal:

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

With the recovered $P(T^{+})=0.08257$,

$$
1-0.08257=0.91743
$$

but the complementarity identity itself is what the claim asserts — no independence or prevalence assumption is required.

So the statement is True.""",
    r"""**E.** → True

The overview recovers both joints as summands of $P(T^+)$:

$$
P(S_C\cap T^{+})=0.02535
$$

$$
P(S_B\cap T^{+})=0.0229
$$

Both posteriors divide by the same marginal $P(T^{+})=0.08257$, so

$$
P(S_C\mid T^{+})=\frac{0.02535}{0.08257},\qquad P(S_B\mid T^{+})=\frac{0.0229}{0.08257}
$$

and the inequality of posteriors reduces to $0.02535>0.0229$, which holds.

So the statement is True.""",
]

# 13.108 A–D already ok-ish; thicken C slightly and leave E
by["MATH 13.108"]["tactical_explanations"][0] = r"""**A.** → True

From the stem mean $E[X]=11.2$ on $n=14$ independent trials, the common success probability is

$$
p=\dfrac{E[X]}{n}=\dfrac{11.2}{14}=0.8
$$

Each trial fails with the complementary probability

$$
1-p=1-0.8=0.2
$$

which is exactly the failure probability stated in the claim.

So the statement is True."""

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

by["MATH 13.108"]["tactical_explanations"][2] = r"""**C.** → True

Binomial variance is $np(1-p)$. Insert $n=50$, $p=0.8$, and $1-p=0.2$:

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

by["MATH 13.108"]["tactical_explanations"][3] = r"""**D.** → False

Independence means a run of three successes multiplies the same probability on every trial:

$$
p^{3}=(0.8)^{3}
$$

$$
(0.8)^{3}=0.512
$$

Compare with the claimed cutoff $0.3$:

$$
0.512\ge 0.3
$$

The inequality in the claim therefore fails.

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


print({s: stats(s) for s in ("economics", "math")})

errors = []
checked = 0
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, letter in enumerate("ABCDE"):
            checked += 1
            want = "True" if task["answer_key"][i] else "False"
            expl = task["tactical_explanations"][i]
            if not expl.startswith(f"**{letter}.** → {want}"):
                errors.append(f"{task['case_id']} {letter}: {expl[:40]!r}")
            if expl.count(DD) % 2:
                errors.append(f"{task['case_id']} {letter} unbalanced")
print("checked", checked, "errors", len(errors))
for e in errors[:10]:
    print(e)
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
