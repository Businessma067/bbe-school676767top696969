# -*- coding: utf-8 -*-
"""Fix wrong 11.E; thicken lean cases using correct statement-aligned content."""
import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
PATCH = Path("scripts/patch_demo_explanations.py")
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
ns = {}
src = PATCH.read_text(encoding="utf-8")
cut = src.find("# Apply + validate")
start = src.find("NEW = {}")
exec("NEW = {}\n" + src[start + len("NEW = {}") : cut], ns, ns)
AUTH = ns["NEW"]

by = {t["case_id"]: t for t in data["math"]}

# --- DEMO MATH 5: auth bodies with light thickening on A/C ---
by["DEMO MATH 5.H01"]["tactical_explanations"] = [AUTH["DEMO MATH 5.H01"][i].strip() for i in range(5)]
by["DEMO MATH 5.H01"]["tactical_explanations"][0] = r"""**A.** → True

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

So the statement is True."""

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

Compare with the baseline:

$$
8400-8100=300
$$

Revenue rises by exactly EUR $300$.

So the statement is True."""

# --- DEMO MATH 8: auth with slightly thicker A/B/E ---
by["DEMO MATH 8.H01"]["tactical_explanations"] = [AUTH["DEMO MATH 8.H01"][i].strip() for i in range(5)]
by["DEMO MATH 8.H01"]["tactical_explanations"][0] = r"""**A.** → True

Daytime tariff has two pieces: a fixed base of EUR $12$ and a per-kilometre rate of EUR $0.8$. For distance $d$ the kilometre charge is $0.8d$, so the bill is

$$
C_{\mathrm{day}}(d)=12+0.8d
$$

which is exactly the claimed daytime formula.

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

by["DEMO MATH 8.H01"]["tactical_explanations"][4] = r"""**E.** → False

Evaluate the daytime bill at the two distances:

$$
C_{\mathrm{day}}(10)=12+0.8\cdot 10=12+8=20
$$

$$
C_{\mathrm{day}}(20)=12+0.8\cdot 20=12+16=28
$$

Form the ratio:

$$
\frac{28}{20}=1.4
$$

$$
1.4\neq 2
$$

Doubling distance multiplies the bill by $1.4$, not by $2$. The kilometre part scales, but the fixed base of $12$ does not.

So the statement is False."""

# --- DEMO MATH 11: correct E from auth, keep medium A–D ---
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

At the revenue-maximising quantity $q=15$,

$$
R'(15)=0
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

# --- MATH 12.187 medium (overview reuse) ---
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

# --- MATH 13.108 ---
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

# E already good from earlier narrow polish — ensure it's the clean one
by["MATH 13.108"]["tactical_explanations"][4] = r"""**E.** → False

Let $X\sim\mathrm{Bin}(6,0.8)$. The event “at most $4$ successes” is

$$
P(X\le 4)=\sum_{x=0}^{4}\binom{6}{x}(0.8)^{x}(0.2)^{6-x}
$$

Term $x=0$:

$$
P(X=0)=\binom{6}{0}(0.8)^{0}(0.2)^{6}=0.000064
$$

Term $x=1$:

$$
\binom{6}{1}=6,\qquad (0.2)^{5}=0.00032
$$

$$
P(X=1)=6\cdot 0.8\cdot 0.00032=0.001536
$$

Term $x=2$:

$$
\binom{6}{2}=15,\qquad (0.8)^{2}=0.64,\qquad (0.2)^{4}=0.0016
$$

$$
P(X=2)=15\cdot 0.64\cdot 0.0016=0.01536
$$

Term $x=3$:

$$
\binom{6}{3}=20,\qquad (0.8)^{3}=0.512,\qquad (0.2)^{3}=0.008
$$

$$
P(X=3)=20\cdot 0.512\cdot 0.008=0.08192
$$

Term $x=4$:

$$
\binom{6}{4}=15,\qquad (0.8)^{4}=0.4096,\qquad (0.2)^{2}=0.04
$$

$$
P(X=4)=15\cdot 0.4096\cdot 0.04=0.24576
$$

Sum the five masses:

$$
0.000064+0.001536+0.01536+0.08192+0.24576=0.34464
$$

$$
0.34464<0.5
$$

The probability is below $0.5$, so the claim fails.

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


print("stats", {s: stats(s) for s in ("economics", "math")})

errors = []
checked = 0
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, letter in enumerate("ABCDE"):
            checked += 1
            want = "True" if task["answer_key"][i] else "False"
            expl = task["tactical_explanations"][i]
            if not expl.startswith(f"**{letter}.** → {want}"):
                errors.append(f"{task['case_id']} {letter} want {want} got {expl[:50]}")
            if expl.count(DD) % 2:
                errors.append(f"{task['case_id']} {letter} unbalanced")

Path("scripts/_fix_errs.txt").write_text("\n".join(errors) if errors else "none", encoding="utf-8")
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
