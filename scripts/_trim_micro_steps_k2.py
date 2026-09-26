# -*- coding: utf-8 -*-
"""Trim write-then-eval micro-arithmetic in DEMO MOCK math tactical_explanations.

Keep real algebra stepped; collapse trivial numeric write→eval triples into one display.
Bump CONTENT_REV to 2026-09-26k2.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src" / "data" / "mock-exam-demo-sourced.json"
TS = ROOT / "src" / "lib" / "mock-exam-demo-content.ts"
REV = "2026-09-26k2 · trim micro-steps"

data = json.loads(PATH.read_text(encoding="utf-8"))

PATCH: dict[str, dict[str, str]] = {}

# ── DEMO MATH 7.H01 (priority: short parametric claims) ─────────────────────
PATCH["DEMO MATH 7.H01"] = {
    "A": r"""**A.** → False

Two distinct real roots require a strictly positive discriminant. Expand

$$
\Delta=(2k+1)^{2}-4(k^{2}-4)
$$

First square:

$$
(2k+1)^{2}=4k^{2}+4k+1
$$

Then the second term:

$$
4(k^{2}-4)=4k^{2}-16
$$

Subtract:

$$
\Delta=4k^{2}+4k+1-(4k^{2}-16)=4k^{2}+4k+1-4k^{2}+16=4k+17
$$

At $k=-5$:

$$
\Delta=4(-5)+17=-20+17=-3<0
$$

so $g_{-5}$ has no real roots. The claim that every real $k$ yields two distinct real roots fails.

So the statement is False.""",
    "B": r"""**B.** → True

For a monic quadratic $x^{2}-Bx+C$, the axis of symmetry is $x=B/2$. Here $B=2k+1$, so

$$
x=\frac{2k+1}{2}=k+\frac{1}{2}
$$

This identity holds for every real parameter $k$; no discriminant restriction appears. Quick checks: at $k=0$ the axis is $x=\tfrac12$; at $k=2$ it is $x=\tfrac52$, matching $B=5$.

So the statement is True.""",
    "C": r"""**C.** → False

Substitute $k=2$ into each coefficient. Linear term:

$$
2k+1=2\cdot 2+1=5
$$

Constant term:

$$
k^{2}-4=2^{2}-4=0
$$

The specialised quadratic is therefore

$$
g_2(x)=x^{2}-5x=x(x-5)
$$

Roots $x=0$ or $x=5$. The claim asserts $1$ and $5$; only one of those matches, so the statement is false.

So the statement is False.""",
    "D": r"""**D.** → False

A double root at $0$ would require both $g_k(0)=0$ and $g_k'(0)=0$. Constant term:

$$
g_k(0)=k^{2}-4=0\qquad\Rightarrow\qquad k=\pm 2
$$

Differentiate:

$$
g_k'(x)=2x-(2k+1)\qquad\Rightarrow\qquad g_k'(0)=-(2k+1)=0\qquad\Rightarrow\qquad k=-\frac{1}{2}
$$

Check $k=-\tfrac12$ against $k^{2}-4=0$:

$$
\Bigl(-\frac{1}{2}\Bigr)^{2}-4=\frac{1}{4}-4=-\frac{15}{4}\neq 0
$$

Conversely, at $k=2$: $g_2'(0)=-(4+1)=-5\neq 0$. At $k=-2$: $g_{-2}'(0)=-(-4+1)=3\neq 0$. The two conditions are incompatible, so no such $k$ exists.

So the statement is False.""",
    "E": r"""**E.** → True

For $k=0$ the quadratic is

$$
g_0(x)=x^{2}-x-4
$$

Axis from letter B: $x=\tfrac12$. Evaluate:

$$
g_0\Bigl(\frac{1}{2}\Bigr)=\Bigl(\frac{1}{2}\Bigr)^{2}-\frac{1}{2}-4=\frac{1}{4}-\frac{1}{2}-4=-\frac{17}{4}
$$

Alternatively via the discriminant shortcut $\Delta=4\cdot 0+17=17$:

$$
-\frac{\Delta}{4}=-\frac{17}{4}
$$

which matches the claimed vertex $y$-coordinate.

So the statement is True.""",
}

# ── DEMO MATH 2.H02 — numeric write-then-eval chains ────────────────────────
PATCH["DEMO MATH 2.H02"] = {
    "A": r"""**A.** → True

Records (1) and (2) alone already determine the squared sum. Expand the binomial:

$$
(p+q)^{2}=p^{2}+2pq+q^{2}=(p^{2}+q^{2})+2pq
$$

Substitute records (1) and (2):

$$
(p+q)^{2}=250+2\cdot 75=250+150=400
$$

Take the nonnegative square root:

$$
|p+q|=\sqrt{400}=20
$$

exactly as claimed. (The signed sum itself may still be $+20$ or $-20$; the absolute value is forced.)

So the statement is True.""",
    "C": r"""**C.** → True

Record (4) forces the sign of the sum. Multiply both sides of $\frac{1}{p}+\frac{1}{q}=\frac{4}{15}$ by $pq=75$:

$$
p+q=\frac{4}{15}\cdot 75=20
$$

matching letter A's $|p+q|=20$. The two numbers are the roots of

$$
t^{2}-20t+75=0
$$

Discriminant:

$$
20^{2}-4\cdot 75=400-300=100
$$

$$
t=\frac{20\pm\sqrt{100}}{2}=\frac{20\pm 10}{2}
$$

so $t=15$ or $t=5$. The unordered pair is $\{5,15\}$, and the reciprocal sum matches record (4) automatically.

So the statement is True.""",
    "E": r"""**E.** → True

From records (1) and (2) expand the squared difference:

$$
(p-q)^{2}=p^{2}-2pq+q^{2}=250-2\cdot 75=250-150=100
$$

$$
|p-q|=\sqrt{100}=10
$$

as claimed. If in addition record (4) holds, then

$$
p+q=\frac{4}{15}\cdot 75=\frac{300}{15}=20
$$

Cube identity with $p^{2}+q^{2}-pq=250-75=175$:

$$
p^{3}+q^{3}=(p+q)(p^{2}-pq+q^{2})=20\cdot 175=3500
$$

which is exactly the displayed identity.

So the statement is True.""",
}

# ── DEMO MATH 6.H02 — discriminant / abs micro-evals ────────────────────────
PATCH["DEMO MATH 6.H02"] = {
    "A": r"""**A.** → True

The claim is a universal "no counterexample" statement on the closed interval $[1,4]$. Critical points of the absolute expressions are $x=1$, $x=4$ and $x=\tfrac{3}{2}$.

On $[1,\tfrac{3}{2}]$: $x^{2}-5x+4\le 0$ and $2x-3\le 0$, so the inequality reads

$$
-(x^{2}-5x+4)+(3-2x)\le x+6
$$

Expand and rearrange:

$$
-x^{2}+3x-1\le x+6\qquad\Rightarrow\qquad 0\le x^{2}-2x+7
$$

Discriminant of $x^{2}-2x+7$:

$$
(-2)^{2}-4\cdot 7=4-28=-24<0
$$

so the right side is always positive; the inequality holds identically on this piece.

On $[\tfrac{3}{2},4]$: $x^{2}-5x+4\le 0$ and $2x-3\ge 0$, so

$$
-(x^{2}-5x+4)+(2x-3)\le x+6
$$

$$
-x^{2}+7x-7\le x+6\qquad\Rightarrow\qquad 0\le x^{2}-6x+13
$$

Discriminant of $x^{2}-6x+13$:

$$
(-6)^{2}-4\cdot 13=36-52=-16<0
$$

so this piece likewise holds identically. Hence no point of $[1,4]$ is a counterexample.

So the statement is True.""",
    "B": r"""**B.** → True

The claim only asks for existence inside the open interval $(1,2)$. Domain of the radical requires $2x+5\ge 0$, i.e. $x\ge -\tfrac{5}{2}$, which already contains $(1,2)$. Pick the convenient interior test point $x=\tfrac{3}{2}$:

$$
\sqrt{2\cdot\frac{3}{2}+5}+\left|\frac{3}{2}-2\right|=\sqrt{8}+\frac{1}{2}=2\sqrt{2}+\frac{1}{2}
$$

With $\sqrt{2}\approx 1.414$, one has $2\sqrt{2}+\tfrac12\approx 3.328\le 4$. So at least one point of $(1,2)$ satisfies the inequality.

So the statement is True.""",
    "E": r"""**E.** → False

The claim asks whether the solution set meets $[-4,-2]$. The pole $x=-1$ does not meet that interval, so every point of $[-4,-2]$ is domain-legal. Test the interior point $x=-3$:

$$
\frac{|2(-3)-5|}{|-3+1|}+|-3-2|=\frac{|-11|}{2}+5=\frac{11}{2}+5=10.5
$$

$$
10.5\le 4
$$

is false. The same failure pattern persists throughout $[-4,-2]$ (the expression stays larger than $4$ on that segment). The intersection with $[-4,-2]$ is therefore empty.

So the statement is False.""",
}

# ── DEMO MATH 8.H01 D/E — bill arithmetic ───────────────────────────────────
PATCH["DEMO MATH 8.H01"] = {
    "D": r"""**D.** → True

Original daytime bill at $d=20$:

$$
12+0.8\cdot 20=12+16=28
$$

After waiving the EUR $12$ base, only the kilometre charge $16$ remains. The saving versus the original daytime tariff is

$$
28-16=12
$$

exactly the waived base fee.

So the statement is True.""",
    "E": r"""**E.** → False

Evaluate the daytime bill at the two distances:

$$
C_{\mathrm{day}}(10)=12+0.8\cdot 10=12+8=20
$$

$$
C_{\mathrm{day}}(20)=12+0.8\cdot 20=12+16=28
$$

$$
\frac{28}{20}=1.4\neq 2
$$

Doubling distance multiplies the bill by $1.4$, not by $2$. The kilometre part scales ($8\to 16$), but the fixed base of $12$ does not. Homogeneity would require $C_{\mathrm{day}}(2d)=2\,C_{\mathrm{day}}(d)$; at $d=10$ that would need $28=40$, which fails.

So the statement is False.""",
}

# ── DEMO MATH 10.H01 A — redundant rewrite / numeric micro-steps ────────────
PATCH["DEMO MATH 10.H01"] = {
    "A": r"""**A.** → True

Set the two trajectories equal:

$$
4e^{0.3t}=16e^{-0.6t}
$$

Divide by $4$, then multiply by $e^{0.6t}$:

$$
e^{0.3t}=4e^{-0.6t}\qquad\Rightarrow\qquad e^{0.9t}=4
$$

$$
t=\frac{\ln 4}{0.9}=\frac{1}{0.9}\ln 4
$$

Numerically, $\ln 4=2\ln 2\approx 1.386294$, so $t^{*}\approx 1.540327$. Uniqueness: $t\mapsto e^{0.9t}$ is strictly increasing. Verify via the ratio:

$$
\frac{f(t^{*})}{g(t^{*})}=\frac{1}{4}e^{0.9t^{*}}=\frac{1}{4}\cdot 4=1
$$

so $f(t^{*})=g(t^{*})$ holds.

So the statement is True.""",
}

# ── MATH 12.187 A / 13.108 C — trivial add / multiply chains ────────────────
PATCH["MATH 12.187"] = {
    "A": r"""**A.** → True

The overview already recovers the three subspecies contributions to a positive test. Adding them gives the unconditional positive-test probability:

$$
P(T^{+})=0.03432+0.0229+0.02535=0.08257
$$

Compare with the claimed $7\%$ threshold:

$$
0.08257>0.07
$$

So the statement is True.""",
}

PATCH["MATH 13.108"] = {
    "C": r"""**C.** → True

For a binomial count $X\sim\mathrm{Bin}(n,p)$, the variance formula is $np(1-p)$. Insert $n=50$, $p=0.8$, and $1-p=0.2$:

$$
\mathrm{Var}(X)=50\cdot 0.8\cdot 0.2=8
$$

The variance equals $8$, matching the claim.

So the statement is True.""",
}

LETTERS = "ABCDE"


def walk(obj):
    if isinstance(obj, dict):
        if "case_id" in obj and "tactical_explanations" in obj:
            yield obj
        for v in obj.values():
            yield from walk(v)
    elif isinstance(obj, list):
        for v in obj:
            yield from walk(v)


changed = 0
stats_before = []
stats_after = []

for case in walk(data):
    cid = case["case_id"]
    if cid not in PATCH:
        continue
    expls = case["tactical_explanations"]
    for letter, body in PATCH[cid].items():
        i = LETTERS.index(letter)
        old = expls[i]
        if old == body:
            continue
        # never touch answer headers mismatch
        want = case["answer_key"][i]
        header = f"**{letter}.** → {'True' if want else 'False'}"
        if not body.startswith(header):
            raise SystemExit(f"header mismatch {cid} {letter}")
        n_old = len(re.findall(r"\$\$", old)) // 2
        n_new = len(re.findall(r"\$\$", body)) // 2
        stats_before.append((cid, letter, n_old, len(old)))
        stats_after.append((cid, letter, n_new, len(body)))
        expls[i] = body
        changed += 1

PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

ts = TS.read_text(encoding="utf-8")
ts2, nsub = re.subn(
    r'export const MOCK_EXAM_DEMO_CONTENT_REV =\s*\n?\s*"[^"]*";',
    f'export const MOCK_EXAM_DEMO_CONTENT_REV =\n  "{REV}";',
    ts,
    count=1,
)
if nsub != 1:
    raise SystemExit(f"CONTENT_REV sub failed ({nsub})")
TS.write_text(ts2, encoding="utf-8")

print(f"patched {changed} letters; rev → {REV}")
print("cid letter  $$:before→after  chars:before→after")
for (a, b), (c, d) in zip(stats_before, stats_after):
    print(f"  {a[0]} {a[1]}  {a[2]}→{c[2]}  {a[3]}→{c[3]}")

# overall math averages
math_cases = [c for c in walk(data) if "MATH" in c.get("case_id", "")]
chars = []
dds = []
for c in math_cases:
    for te in c["tactical_explanations"]:
        chars.append(len(te))
        dds.append(len(re.findall(r"\$\$", te)) // 2)
print(f"math overall: avg chars={sum(chars)/len(chars):.0f}, avg $$={sum(dds)/len(dds):.1f}")
