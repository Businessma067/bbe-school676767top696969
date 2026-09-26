# -*- coding: utf-8 -*-
"""Clean 5.C micro-splits; thicken 11/12/13 to keep math avg in 550–700."""
import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
by = {t["case_id"]: t for t in data["math"]}

by["DEMO MATH 5.H01"]["tactical_explanations"][2] = r"""**C.** → True

From the baseline $(90,90)$, shift by $15$ pages toward colour:

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

# Clean 5 D if over-split
d5 = by["DEMO MATH 5.H01"]["tactical_explanations"][3]
if d5.count(DD) // 2 >= 6 and ("55\\cdot 100" in d5 or "First" in d5):
    by["DEMO MATH 5.H01"]["tactical_explanations"][3] = r"""**D.** → True

An all-colour batch of $180$ pages yields

$$
55\cdot 180=9900
$$

Any mix that includes mono pages earns strictly less, because mono is cheaper than colour. A target of EUR $10000$ therefore exceeds every feasible nonnegative revenue, so no solution $(m,c)$ exists.

So the statement is True."""

by["DEMO MATH 11.H01"]["tactical_explanations"] = [
    r"""**A.** → True

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

So the statement is True.""",
    r"""**B.** → False

Maximise $R$ by setting marginal revenue to zero:

$$
90-6q=0\qquad\Rightarrow\qquad q=15
$$

Choke quantity where price vanishes:

$$
90-3q=0\qquad\Rightarrow\qquad q=30
$$

Compare:

$$
15\neq 30
$$

The revenue maximiser is $q=15$, not the choke quantity $q=30$.

So the statement is False.""",
    r"""**C.** → True

Compute the true increment $R(5)-R(4)$:

$$
R(5)=90\cdot 5-3\cdot 25=450-75=375
$$

$$
R(4)=90\cdot 4-3\cdot 16=360-48=312
$$

$$
375-312=63
$$

The linear approximation using $R'(4)=66$ predicts

$$
66\cdot 1=66
$$

Because $R''(q)=-6<0$, the graph is concave and the tangent overestimates:

$$
66>63
$$

So the statement is True.""",
    r"""**D.** → False

At the revenue-maximising quantity $q=15$ from letter B,

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

So the statement is False.""",
    r"""**E.** → False

Past the revenue peak $q=15$, marginal revenue is already negative. At $q=16$:

$$
R'(16)=90-6\cdot 16=90-96=-6
$$

$$
-6<0
$$

Moving from $q=16$ to $q=17$ therefore lowers revenue even though more units are sold. Selling more does not raise revenue on the declining side of $R$.

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

The claim’s threshold is $3.4\%=0.034$. Compare:

$$
0.03432>0.034
$$

So the statement is True.""",
    r"""**C.** → False

Apply Bayes using the overview’s joint and marginal:

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
                errors.append(f"{task['case_id']} {letter} $$")
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
