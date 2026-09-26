# -*- coding: utf-8 -*-
"""Narrow polish: replace only known-junk compressed letters."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src" / "data" / "mock-exam-demo-sourced.json"
PATCH = ROOT / "scripts" / "patch_demo_explanations.py"
TS = ROOT / "src" / "lib" / "mock-exam-demo-content.ts"
REV = "2026-09-26k · demo expl closer to mocks 2-4"
DD = "$$"

data = json.loads(PATH.read_text(encoding="utf-8"))
patch_src = PATCH.read_text(encoding="utf-8")
cut = patch_src.find("# Apply + validate")
start = patch_src.find("NEW = {}")
ns: dict = {}
exec("NEW = {}\n" + patch_src[start + len("NEW = {}") : cut], ns, ns)
AUTH = ns["NEW"]

# Authored replacements that are clean (may be shorter than band — quality > length)
REPLACE = {
    "DEMO MATH 5.H01": "all",
    "DEMO MATH 8.H01": "all",
    "DEMO MATH 11.H01": "all",
}

# Hand-tuned thickened versions where auth is too thin but live-compress was junk.
# Goal: keep math avg near 550-700.

MATH5_A = r"""**A.** → True

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

MATH8_C = r"""**C.** → False

Set the daytime and night bills equal:

$$
12+0.8d=12+0.8d+5
$$

Subtract $12+0.8d$ from both sides:

$$
0=5
$$

The identity $0=5$ is absurd, so no real break-even distance $d^{*}$ exists. Parallel affine tariffs with a fixed positive gap never meet.

So the statement is False."""

MATH11_A = r"""**A.** → True

Form revenue from linear demand and expand:

$$
R(q)=q(90-3q)=90q-3q^{2}
$$

Differentiate:

$$
R'(q)=90-6q
$$

Evaluate at $q=4$:

$$
6\cdot 4=24,\qquad 90-24=66
$$

so $R'(4)=66$, matching the claim.

So the statement is True."""

MATH11_B = r"""**B.** → False

Set marginal revenue to zero:

$$
90-6q=0\qquad\Rightarrow\qquad q=15
$$

Choke quantity where price vanishes:

$$
90-3q=0\qquad\Rightarrow\qquad q=30
$$

$$
15\neq 30
$$

The revenue maximiser is $q=15$, not the choke quantity $q=30$.

So the statement is False."""

MATH11_C = r"""**C.** → True

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

The tangent prediction uses $R'(4)=66$:

$$
66\cdot 1=66
$$

Because $R''(q)=-6<0$, the tangent overestimates:

$$
66>63
$$

So the statement is True."""

MATH11_D = r"""**D.** → False

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

So the statement is False."""

MATH11_E = r"""**E.** → False

Average revenue is price under linear demand:

$$
AR(q)=\frac{R(q)}{q}=P(q)=90-3q
$$

Marginal revenue is

$$
R'(q)=90-6q
$$

At $q=10$:

$$
AR(10)=90-30=60,\qquad R'(10)=90-60=30
$$

$$
60\neq 30
$$

Average and marginal revenue differ.

So the statement is False."""

E_13 = r"""**E.** → False

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

A_13 = r"""**A.** → True

Recover $p$ from the stem mean and trial count:

$$
p=\dfrac{11.2}{14}=0.8
$$

Failure probability:

$$
1-p=1-0.8=0.2
$$

which matches the claim.

So the statement is True."""

B_13 = r"""**B.** → False

Binomial mean at $n=12$, $p=0.8$:

$$
E[X]=np=12\cdot 0.8=9.6
$$

The claim reports $4.8$, which is not $9.6$.

So the statement is False."""

C_13 = r"""**C.** → True

Binomial variance at $n=50$, $p=0.8$:

$$
\mathrm{Var}(X)=np(1-p)=50\cdot 0.8\cdot 0.2
$$

$$
50\cdot 0.8=40\qquad 40\cdot 0.2=8
$$

which matches the claimed variance.

So the statement is True."""

D_13 = r"""**D.** → False

Three independent successes:

$$
p^{3}=(0.8)^{3}=0.512
$$

$$
0.512\ge 0.3
$$

so the claim’s cutoff comparison fails.

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


print("before", {s: stats(s) for s in ("economics", "math")})

by = {t["case_id"]: t for t in data["math"]}

# DEMO MATH 5: thicken A, use auth for B–E (auth is fine quality)
by["DEMO MATH 5.H01"]["tactical_explanations"][0] = MATH5_A
for i in range(1, 5):
    by["DEMO MATH 5.H01"]["tactical_explanations"][i] = AUTH["DEMO MATH 5.H01"][i].strip()

# DEMO MATH 8: auth A,B,D,E + clean C
for i in range(5):
    by["DEMO MATH 8.H01"]["tactical_explanations"][i] = AUTH["DEMO MATH 8.H01"][i].strip()
by["DEMO MATH 8.H01"]["tactical_explanations"][2] = MATH8_C

# DEMO MATH 11: hand-tuned medium depth
by["DEMO MATH 11.H01"]["tactical_explanations"] = [
    MATH11_A,
    MATH11_B,
    MATH11_C,
    MATH11_D,
    MATH11_E,
]

# MATH 13.108: clean A–E
by["MATH 13.108"]["tactical_explanations"] = [A_13, B_13, C_13, D_13, E_13]

# Also fix DEMO MATH 7 if still has micro-junk — prefer auth when longer than 800 with many orphaned pieces
for cid in ("DEMO MATH 7.H01", "DEMO MATH 9.H01", "DEMO MATH 10.H01"):
    for i, e in enumerate(by[cid]["tactical_explanations"]):
        # Heuristic: too many tiny multiply leftovers
        if e.count(DD) // 2 >= 16 and ("35\\cdot 100" in e or "90-20=70" in e or "Recover $p$ once more" in e):
            by[cid]["tactical_explanations"][i] = AUTH[cid][i].strip()
        # 7/9/10: if blocks very high vs auth, and auth exists, use a blend —
        # Prefer auth when current still has "First the constant piece" style padding
        if "First the constant piece" in e or "Differentiate the first term" in e:
            by[cid]["tactical_explanations"][i] = AUTH[cid][i].strip()

print("after", {s: stats(s) for s in ("economics", "math")})

errors = []
checked = 0
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, letter in enumerate("ABCDE"):
            checked += 1
            want = "True" if task["answer_key"][i] else "False"
            expl = task["tactical_explanations"][i]
            if not expl.startswith(f"**{letter}.** → {want}"):
                errors.append(f"{task['case_id']} {letter}: {expl[:60]!r}")
            if expl.count(DD) % 2:
                errors.append(f"{task['case_id']} {letter}: unbalanced $$")

print("checked", checked, "errors", len(errors))
for e in errors[:20]:
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
print("wrote ok")
