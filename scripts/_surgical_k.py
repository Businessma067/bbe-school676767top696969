# -*- coding: utf-8 -*-
"""
Surgical cleanup on hybrid (~685 math / ~390 econ):
replace only known-junk letters; keep the rest.
"""
import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
by = {t["case_id"]: t for t in data["math"]}

# --- 5.A: drop micro 35·100 / 35·80 split ---
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

# --- 8.C: drop redundant 0=5 / 12=17 / concrete trials ---
by["DEMO MATH 8.H01"]["tactical_explanations"][2] = r"""**C.** → False

Set the daytime and night bills equal:

$$
12+0.8d=12+0.8d+5
$$

Subtract $12+0.8d$ from both sides:

$$
0=5
$$

The identity $0=5$ is absurd, so no real break-even distance $d^{*}$ exists. Parallel affine tariffs with a positive gap never meet.

So the statement is False."""

# --- 11 all: replace over-padded derivative teaching ---
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

Moving from $q=16$ to $q=17$ therefore lowers revenue even though more units are sold.

So the statement is False.""",
]

# --- 12.187: overview reuse, no 4×98 micro ---
by["MATH 12.187"]["tactical_explanations"] = [
    r"""**A.** → True

The overview already recovers the three subspecies contributions to a positive test. Adding them:

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

but the complementarity identity itself is what the claim asserts.

So the statement is True.""",
    r"""**E.** → True

The overview recovers both joints:

$$
P(S_C\cap T^{+})=0.02535,\qquad P(S_B\cap T^{+})=0.0229
$$

Both posteriors divide by the same marginal $P(T^{+})=0.08257$, so comparing posteriors equals comparing joints:

$$
0.02535>0.0229
$$

hence $P(S_C\mid T^{+})>P(S_B\mid T^{+})$.

So the statement is True.""",
]

# --- 13.108 A–E clean ---
by["MATH 13.108"]["tactical_explanations"] = [
    r"""**A.** → True

From the stem mean $E[X]=11.2$ on $n=14$ independent trials,

$$
p=\dfrac{E[X]}{n}=\dfrac{11.2}{14}=0.8
$$

Failure probability:

$$
1-p=1-0.8=0.2
$$

which matches the claim.

So the statement is True.""",
    r"""**B.** → False

With $n=12$ and recovered $p=0.8$,

$$
E[X]=np=12\cdot 0.8=9.6
$$

$$
9.6\neq 4.8
$$

so the claim is false.

So the statement is False.""",
    r"""**C.** → True

Binomial variance at $n=50$, $p=0.8$:

$$
\mathrm{Var}(X)=50\cdot 0.8\cdot 0.2
$$

$$
50\cdot 0.8=40\qquad 40\cdot 0.2=8
$$

which matches the claimed variance.

So the statement is True.""",
    r"""**D.** → False

Three independent successes:

$$
p^{3}=(0.8)^{3}=0.512
$$

$$
0.512\ge 0.3
$$

so the claim’s inequality fails.

So the statement is False.""",
    r"""**E.** → False

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

Sum:

$$
0.000064+0.001536+0.01536+0.08192+0.24576=0.34464
$$

$$
0.34464<0.5
$$

The probability is below $0.5$, so the claim fails.

So the statement is False.""",
]

# Light orphan cleanup across all math (safe patterns only)
ORPHAN = re.compile(
    r"\n\$\$\n(?:4\\times 98=392|4\\times 94=376|4\\times 85=340)\n\$\$"
)


def clean(text: str) -> str:
    text = ORPHAN.sub("", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


for t in data["math"]:
    t["tactical_explanations"] = [clean(e) for e in t["tactical_explanations"]]


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


print("BEFORE surgical was hybrid 685/390")
print("AFTER ", {s: stats(s) for s in ("economics", "math")})

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
Path("scripts/_surg_err.txt").write_text("\n".join(errors) or "none", encoding="utf-8")
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
