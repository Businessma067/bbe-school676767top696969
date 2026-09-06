#!/usr/bin/env python3
"""Expand compressed Chapter 6 tactical_explanations into stepped algebra."""

from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("src/data/math-ch6-inequalities.json")
GOLD_E = Path("/tmp/gold_6_113_E.txt").read_text()

LETTERS = "ABCDE"


def header(letter: str, truth: bool) -> str:
    return f"**{letter}.** → {'True' if truth else 'False'}"


def closer(truth: bool) -> str:
    return f"So the statement is {'True' if truth else 'False'}."


def wrap(letter: str, truth: bool, body: str) -> str:
    body = body.strip()
    return f"{header(letter, truth)}\n\n{body}\n\n{closer(truth)}"


# ---------------------------------------------------------------------------
# Family expanders for 6.99 / 6.103 / 6.107 (control ratio)
# ---------------------------------------------------------------------------

def expand_ratio_family(zero: int, pole: int, letter: str, truth: bool) -> str:
    # R(x)=(x-zero)/(x-pole) with pole negative like -1,-2,-3 so pole_val = -|pole| wait
    # Actually pole is given as the absolute value of the negative pole: pole_pt = -p where p=1,2,3
    # Looking at data: R=(x-3)/(x+1) so zero=3, pole=-1
    z, p = zero, pole  # pole is the actual excluded value e.g. -1
    assert p < 0 < z
    # R-1 numerator: (x-z)-(x-p) wait (x-z)/(x-p) - 1 = ((x-z)-(x-p))/(x-p) = (x-z-x+p)/(x-p)=(p-z)/(x-p)
    # For p=-1,z=3: (-1-3)/(x+1)=(-4)/(x+1) — matches "(-1-3)/(x+1)"
    # For p=-2,z=4: (-2-4)/(x+2)
    num_const = p - z  # negative
    if letter == "A":
        body = f"""Start from the claimed strict positivity of the control ratio.

$$
R(x)=\\dfrac{{x-{z}}}{{x+{-p}}}
$$

$$
R(x)>0
$$

The critical points are the numerator zero and the excluded pole.

$$
x-{z}=0\\Rightarrow x={z}
$$

$$
x+{-p}=0\\Rightarrow x={p}
$$

(the pole $x={p}$ is never allowed).

Sign chart on the open intervals:

| Interval | Sign of $R(x)$ |
| --- | --- |
| $(-\\infty,{p})$ | $+$ |
| $({p},{z})$ | $-$ |
| $({z},\\infty)$ | $+$ |

The strict inequality keeps only the positive intervals, so

$$
x<{p}\\quad\\text{{or}}\\quad x>{z}
$$

which is exactly the claimed set."""
    elif letter == "B":
        body = f"""The claimed solution set for $R(x)\\le 0$ would have to include every $x$ where the ratio is defined and nonpositive.

At the pole the denominator vanishes:

$$
x={p}\\Rightarrow x+{-p}=0
$$

so $R({p})$ is undefined. A value that makes the denominator zero is excluded from every solution set of a rational inequality, regardless of the inequality symbol.

Therefore $x={p}$ cannot belong to the solution of $R(x)\\le 0$."""
    elif letter == "C":
        body = f"""Evaluate the ratio at the claimed zero.

$$
R({z})=\\dfrac{{{z}-{z}}}{{{z}+{-p}}}=\\dfrac{{0}}{{{z-p}}}
$$

$$
={z-p}\\ne 0\\text{{ in the denominator, so }}R({z})=0
$$

The numerator is zero and the denominator is nonzero, confirming the claim."""
        # fix awkward last line
        body = f"""Evaluate the ratio at the claimed zero.

$$
R({z})=\\dfrac{{{z}-{z}}}{{{z}+{-p}}}=\\dfrac{{0}}{{{z - p}}}
$$

Since the denominator ${z - p}$ is nonzero,

$$
R({z})=0
$$

The numerator is zero and the denominator is nonzero, confirming the claim."""
    elif letter == "D":
        body = f"""Solve the non-strict inequality on the domain $x\\ne {p}$.

$$
R(x)=\\dfrac{{x-{z}}}{{x+{-p}}}\\le 0
$$

Critical points: zero $x={z}$, pole $x={p}$ (excluded).

On $({p},{z})$ the numerator and denominator have opposite signs, so $R(x)<0$.
At $x={z}$ the numerator vanishes, so $R({z})=0$.
Outside that closed stretch the ratio is positive (or undefined at the pole).

Hence

$$
R(x)\\le 0\\quad\\text{{exactly on }}({p},{z}]
$$

matching the claim."""
    elif letter == "E":
        body = f"""Rewrite the comparison $R(x)>1$ by moving the constant to one side.

$$
\\dfrac{{x-{z}}}{{x+{-p}}}-1>0
$$

Write $1$ over the same denominator.

$$
1=\\dfrac{{x+{-p}}}{{x+{-p}}}
$$

$$
\\dfrac{{x-{z}-(x+{-p})}}{{x+{-p}}}>0
$$

$$
\\dfrac{{{num_const}}}{{x+{-p}}}>0
$$

The constant numerator ${num_const}$ is negative, so the fraction is positive precisely when the denominator is negative:

$$
x+{-p}<0\\Rightarrow x<{p}
$$

(the pole itself is excluded). This is exactly the claimed condition."""
    else:
        raise ValueError(letter)
    return wrap(letter, truth, body)


def expand_quadratic_family(r1: int, r2: int, mid: int, letter: str, truth: bool) -> str:
    # Q(x)=-(x-r1)(x-r2), mid=(r1+r2)/2, Q(mid)=((r2-r1)/2)^2
    half = (r2 - r1) // 2
    qmid = half * half
    if letter == "A":
        body = f"""The quality score is the downward-opening factored quadratic

$$
Q(x)=-(x-{r1})(x-{r2})
$$

A product $(x-{r1})(x-{r2})$ is nonpositive between the roots, so $-$ times that product is nonnegative on $[{r1},{r2}]$:

$$
Q(x)\\ge 0\\iff {r1}\\le x\\le {r2}
$$

which is exactly the accepted-settings interval $[{r1},{r2}]$."""
    elif letter == "B":
        body = f"""Substitute the midpoint into the factored score.

$$
Q({mid})=-({mid}-{r1})({mid}-{r2})
$$

$$
=-({half})({-half})
$$

$$
=-(-{qmid})={qmid}
$$

So $Q({mid})={qmid}$, matching the claim."""
    elif letter == "C":
        body = f"""For a quadratic, the axis of symmetry is the midpoint of the roots.

$$
x=\\dfrac{{{r1}+{r2}}}{{2}}={mid}
$$

Because $Q$ opens downward, that axis is where the maximum occurs. Hence the highest score is at $x={mid}$."""
    elif letter == "D":
        body = f"""At a root the factored score vanishes:

$$
Q({r1})=-({r1}-{r1})({r1}-{r2})=0
$$

The claim asks for the strict inequality $Q(x)>0$. Zero fails that strict test, so $x={r1}$ is excluded from the positive set."""
    elif letter == "E":
        body = f"""Outside the roots the product $(x-{r1})(x-{r2})$ is positive, so

$$
Q(x)=-(x-{r1})(x-{r2})<0
$$

exactly when

$$
x<{r1}\\quad\\text{{or}}\\quad x>{r2}
$$

matching the claim."""
    else:
        raise ValueError(letter)
    return wrap(letter, truth, body)


def expand_temp_family(target: int, radius: int, letter: str, truth: bool) -> str:
    lo, hi = target - radius, target + radius
    if letter == "A":
        body = f"""Unfold the absolute-value compliance rule.

$$
|T-{target}|\\le {radius}
$$

$$
-{radius}\\le T-{target}\\le {radius}
$$

Add ${target}$ through all three parts.

$$
{lo}\\le T\\le {hi}
$$

which is exactly the claimed closed interval."""
    elif letter == "B":
        body = f"""Check the claimed endpoint against the compliance rule.

$$
|T-{target}|=|{hi}-{target}|={radius}
$$

The non-strict inequality $|T-{target}|\\le {radius}$ allows equality, so $T={hi}$ is compliant."""
    elif letter == "C":
        body = f"""The comfort rule is the strict version

$$
|T-{target}|<{radius}
$$

At the left endpoint

$$
|{lo}-{target}|={radius}
$$

which fails the strict test. Both endpoints of $[{lo},{hi}]$ are excluded by comfort."""
    elif letter == "D":
        body = f"""Compliance is the closed interval $[{lo},{hi}]$. Its complement in the reals is the open exterior

$$
T<{lo}\\quad\\text{{or}}\\quad T>{hi}
$$

which is exactly the claimed noncompliance set."""
    elif letter == "E":
        body = f"""Unfold the non-strict exterior condition.

$$
|T-{target}|\\ge {radius}
$$

$$
T-{target}\\le -{radius}\\quad\\text{{or}}\\quad T-{target}\\ge {radius}
$$

$$
T\\le {lo}\\quad\\text{{or}}\\quad T\\ge {hi}
$$

Both boundary points are included. The claimed “open exterior” is therefore wrong."""
    else:
        raise ValueError(letter)
    return wrap(letter, truth, body)


def expand_kits_family(order_min: int, letter: str, truth: bool) -> str:
    # same resources: 2n<=100, 3n<=180, 1.5n<=72
    if letter == "A":
        body = """Material A uses $2$ kg per kit against $100$ kg available.

$$
2n\\le 100
$$

Divide both sides by the positive coefficient $2$.

$$
n\\le 50
$$

So material A permits at most $50$ kits."""
    elif letter == "B":
        body = """Material B uses $3$ kg per kit against $180$ kg available.

$$
3n\\le 180
$$

Divide both sides by $3$.

$$
n\\le 60
$$

So material B permits at most $60$ kits."""
    elif letter == "C":
        body = """Labor uses $1.5$ hours per kit against $72$ hours available.

$$
1.5n\\le 72
$$

Divide both sides by $1.5$.

$$
n\\le \\dfrac{72}{1.5}=48
$$

So labor permits at most $48$ kits."""
    elif letter == "D":
        body = """Combine the three resource upper bounds.

$$
n\\le 50,\\qquad n\\le 60,\\qquad n\\le 48
$$

The overall production cap is the tightest of these:

$$
n\\le \\min\\{50,60,48\\}=48
$$

The claim that the overall cap is $50$ is therefore false."""
    elif letter == "E":
        body = f"""From the three resource limits the feasible integer counts satisfy

$$
n\\le 48
$$

together with the order minimum

$$
n\\ge {order_min}
$$

Since ${order_min}\\le 48$, the integer range $[{order_min},48]$ is nonempty, so the order minimum is feasible."""
    else:
        raise ValueError(letter)
    return wrap(letter, truth, body)


def expand_budget_service(fixed: int, per: int, budget: int, claimed: int, letter: str, truth: bool) -> str:
    max_u = (budget - fixed) // per
    # verify exact
    exact = (budget - fixed) / per
    body = f"""Translate the service budget into a linear inequality in the unit count $u$.

$$
{fixed}+{per}u\\le {budget}
$$

Subtract the fixed charge.

$$
{per}u\\le {budget - fixed}
$$

Divide by the positive rate ${per}$.

$$
u\\le \\dfrac{{{budget - fixed}}}{{{per}}}={max_u if exact == max_u else exact}
$$

The largest admissible integer count is ${max_u}$, not the claimed ${claimed}$."""
    return wrap(letter, truth, body)


def parse_budget_from_statement(stmt: str):
    m = re.search(
        r"charges\s+(\d+)\s+EUR plus\s+(\d+)\s+EUR per unit.*?budget of\s+(\d+)\s+EUR.*?at most\s+\$(\d+)\$",
        stmt,
        re.I | re.S,
    )
    if not m:
        m = re.search(
            r"charges\s+(\d+)\s+EUR plus\s+(\d+)\s+EUR per unit.*?budget of\s+(\d+)\s+EUR.*?at most\s+(\d+)",
            stmt,
            re.I | re.S,
        )
    if not m:
        return None
    return tuple(map(int, m.groups()))


# ---------------------------------------------------------------------------
# Generic helpers for expanding remaining short math jumps
# ---------------------------------------------------------------------------

def expand_abs_unfold(center, radius, closed=True):
    lo, hi = center - radius, center + radius
    if closed:
        return f"""$$
|{lo}-placeholder|
$$"""


def try_expand_by_heuristics(case_id: str, letter: str, truth: bool, stmt: str, old: str, ctx: str) -> str | None:
    """Return a new explanation if we have a targeted expansion; else None."""
    # Budget service one-liners
    if "budget condition is" in old and "service charges" in stmt.lower():
        parsed = parse_budget_from_statement(stmt)
        if parsed:
            fixed, per, budget, claimed = parsed
            return expand_budget_service(fixed, per, budget, claimed, letter, truth)

    return None


# ---------------------------------------------------------------------------
# Hand-crafted expansions keyed by (case_id, letter)
# ---------------------------------------------------------------------------

def build_handcrafted() -> dict[tuple[str, str], str]:
    H: dict[tuple[str, str], str] = {}

    # ----- Family 99/103/107, 100/104/108, 101/105, 102/106 -----
    for cid, z, p in [("MATH 6.99", 3, -1), ("MATH 6.103", 4, -2), ("MATH 6.107", 5, -3)]:
        keys = [True, False, True, True, True]
        for i, L in enumerate(LETTERS):
            H[(cid, L)] = expand_ratio_family(z, p, L, keys[i])

    for cid, r1, r2, mid in [
        ("MATH 6.100", 3, 9, 6),
        ("MATH 6.104", 4, 10, 7),
        ("MATH 6.108", 5, 11, 8),
    ]:
        keys = [True, True, True, False, True]
        for i, L in enumerate(LETTERS):
            H[(cid, L)] = expand_quadratic_family(r1, r2, mid, L, keys[i])

    for cid, tgt in [("MATH 6.101", 20), ("MATH 6.105", 21)]:
        keys = [True, True, False, True, False]
        for i, L in enumerate(LETTERS):
            H[(cid, L)] = expand_temp_family(tgt, 4, L, keys[i])

    for cid, omin in [("MATH 6.102", 40), ("MATH 6.106", 42)]:
        keys = [True, True, True, False, True]
        for i, L in enumerate(LETTERS):
            H[(cid, L)] = expand_kits_family(omin, L, keys[i])

    # ----- MATH 6.113 A–D (keep E as gold) -----
    H[("MATH 6.113", "A")] = wrap(
        "A",
        False,
        r"""The remaining strength after $n$ hard falls is

$$
S(n)=100-0.8n^{2}
$$

Require $S(n)\ge 64$ with $n\ge 0$ an integer.

$$
100-0.8n^{2}\ge 64
$$

$$
0.8n^{2}\le 36
$$

$$
n^{2}\le 45
$$

$$
n\le\sqrt{45}\approx 6.71
$$

The largest admissible integer is therefore $n=6$. Checking the next integer:

$$
S(7)=100-0.8\cdot 49=100-39.2=60.8<64
$$

so $n=7$ fails. The claim that every integer up through a larger value works is false.""",
    )

    H[("MATH 6.113", "B")] = wrap(
        "B",
        True,
        r"""Cost per climbing-hold kit:

$$
6\cdot 1.5+2\cdot 4+3=9+8+3=20\text{ EUR}
$$

Budget constraint with $900$ EUR:

$$
20n\le 900\Rightarrow n\le 45
$$

Storage constraint $8n\le 280$:

$$
n\le 35
$$

The overall maximum is the tighter bound

$$
n\le\min\{45,35\}=35
$$

which is less than $40$, matching the claim.""",
    )

    H[("MATH 6.113", "C")] = wrap(
        "C",
        False,
        r"""Start from

$$
|x(x-6)|\le 5
$$

$$
-5\le x^{2}-6x\le 5
$$

Split into two quadratic inequalities.

Right part:

$$
x^{2}-6x-5\le 0
$$

Roots $3\pm\sqrt{14}$, so

$$
x\in\bigl[3-\sqrt{14},\,3+\sqrt{14}\bigr]
$$

Left part:

$$
x^{2}-6x+5\ge 0
$$

$$
(x-1)(x-5)\ge 0
$$

$$
x\le 1\quad\text{or}\quad x\ge 5
$$

Intersecting yields

$$
\bigl[3-\sqrt{14},1\bigr]\cup\bigl[5,3+\sqrt{14}\bigr]
$$

not the claimed $[-1,1]\cup[5,7]$. The endpoints $\pm 1$ and $7$ do not match $3\pm\sqrt{14}$.""",
    )

    H[("MATH 6.113", "D")] = wrap(
        "D",
        False,
        r"""Intensity at distance $d\ge 0$ is

$$
I(d)=\dfrac{90}{d+1}
$$

Visibility requires $I(d)\ge 6$.

$$
\dfrac{90}{d+1}\ge 6
$$

Since $d+1>0$, multiply through safely.

$$
90\ge 6(d+1)
$$

$$
15\ge d+1
$$

$$
d\le 14
$$

At the claimed boundary $d=15$:

$$
I(15)=\dfrac{90}{16}=5.625<6
$$

so $d=15$ is not visible. The claimed set is wrong.""",
    )

    H[("MATH 6.113", "E")] = GOLD_E  # preserve gold

    return H


# ---------------------------------------------------------------------------
# Additional batch expansions for remaining short exam / word-problem items
# ---------------------------------------------------------------------------

def expand_remaining(task: dict, letter: str, truth: bool, stmt: str, old: str) -> str | None:
    """Expand remaining short explanations that still look compressed."""
    cid = task["case_id"]
    L = letter

    # Already long enough and not a jump? leave alone unless ultra patterns
    if len(old) >= 450 and "Sign chart" not in old:
        # still expand known jump patterns below
        pass

    # --- MATH 6.119 ---
    if cid == "MATH 6.119":
        if L == "A":
            return wrap(L, truth, r"""Salinity after adding $x$ litres of freshwater is

$$
S(x)=35-0.5x
$$

Require the band $32\le S(x)\le 34$.

$$
32\le 35-0.5x\le 34
$$

Subtract $35$ through all three parts.

$$
-3\le -0.5x\le -1
$$

Divide by $-0.5$ (reverse both inequalities).

$$
6\ge x\ge 2
$$

$$
2\le x\le 6
$$

matching the claim.""")
        if L == "B":
            return wrap(L, truth, r"""Start from

$$
|x^{2}-4x|\ge 5
$$

which splits into two cases.

Case $x^{2}-4x\ge 5$:

$$
x^{2}-4x-5\ge 0
$$

$$
(x+1)(x-5)\ge 0
$$

$$
x\le -1\quad\text{or}\quad x\ge 5
$$

Case $x^{2}-4x\le -5$:

$$
x^{2}-4x+5\le 0
$$

$$
(x-2)^{2}+1\le 0
$$

which never holds for real $x$.

So the solution is exactly $(-\infty,-1]\cup[5,\infty)$.""")
        if L == "C":
            return wrap(L, truth, r"""pH falls by $0.05$ per millilitre from $7.2$, so after $m$ millilitres

$$
\mathrm{pH}=7.2-0.05m
$$

The target band $5.8\le\mathrm{pH}\le 6.4$ rearranges to

$$
16\le m\le 28
$$

The acid budget $0.25m\le 6$ forces

$$
m\le 24
$$

Values $m=25,\ldots,28$ lie in the pH band but are unaffordable, so the claim that every integer in $16$–$28$ works is false.""")
        if L == "D":
            return wrap(L, truth, r"""Start from the claimed strict positivity.

$$
\dfrac{x+5}{2-x}>0
$$

Critical points: numerator zero $x=-5$, pole $x=2$ (excluded).

Sign chart:

| Interval | Sign |
| --- | --- |
| $(-\infty,-5)$ | $-$ |
| $(-5,2)$ | $+$ |
| $(2,\infty)$ | $-$ |

The strict inequality keeps only the positive open interval $(-5,2)$, matching the claim.""")
        if L == "E":
            return wrap(L, truth, r"""Let width be $w>0$ and length $2w$.

Trim constraint:

$$
2\bigl(w+2w\bigr)=6w\le 120\Rightarrow w\le 20
$$

Area constraint:

$$
w\cdot 2w=2w^{2}\ge 800\Rightarrow w^{2}\ge 400\Rightarrow w\ge 20
$$

(using $w>0$). The only common value is $w=20$, not the claimed interval $[18,20]$.""")

    # --- MATH 6.122 ---
    if cid == "MATH 6.122":
        if L == "A":
            return wrap(L, truth, r"""Unfold the bonding window.

$$
|T+5|\le 3
$$

$$
-3\le T+5\le 3
$$

$$
-8\le T\le -2
$$

Both endpoints satisfy equality in the non-strict absolute-value bound, so they are included. The claim that excludes them is false.""")
        if L == "B":
            return wrap(L, truth, r"""Cost per chemistry batch:

$$
1.5\cdot 4+0.2\cdot 30+5=6+6+5=17\text{ EUR}
$$

Budget: $17n\le 272\Rightarrow n\le 16$.
Solvent: enough for $n\le 40$.

Overall maximum:

$$
n\le\min\{16,40\}=16
$$

which is less than $20$, matching the claim.""")
        if L == "C":
            return wrap(L, truth, r"""Require, on the domain $x\ne -2$,

$$
\dfrac{|x-1|}{x+2}\le 1
$$

For $x>-2$ the denominator is positive, so

$$
|x-1|\le x+2
$$

which rearranges (after the usual absolute-value cases, or by squaring on that ray) to $x\ge -\tfrac12$.

For $x<-2$ the denominator is negative while the numerator is nonnegative, so the fraction is $\le 0\le 1$ automatically.

The full solution is

$$
(-\infty,-2)\cup\bigl[-\tfrac12,\infty\bigr)
$$

not the claimed half-line alone.""")
        if L == "D":
            return wrap(L, truth, r"""Height model:

$$
h(t)=-5t^{2}+40t
$$

Require $h(t)>60$.

$$
-5t^{2}+40t>60
$$

$$
-5t^{2}+40t-60>0
$$

Divide by $-5$ (reverse):

$$
t^{2}-8t+12<0
$$

$$
(t-2)(t-6)<0
$$

$$
2<t<6
$$

At the endpoints $h(2)=h(6)=60$, so the inclusive claim wrongly keeps them.""")
        if L == "E":
            return wrap(L, truth, r"""Peel the outer absolute value.

$$
\bigl||x|-2\bigr|\le 1
$$

$$
-1\le |x|-2\le 1
$$

$$
1\le |x|\le 3
$$

Translate back to $x$:

$$
x\in[-3,-1]\cup[1,3]
$$

matching the claim.""")

    # --- MATH 6.123 ---
    if cid == "MATH 6.123":
        if L == "A":
            return wrap(L, truth, r"""Require $u(t)=-0.4t^{2}+8t+10>30$.

$$
-0.4t^{2}+8t+10>30
$$

$$
-0.4t^{2}+8t-20>0
$$

Divide by $-0.4$ (reverse):

$$
t^{2}-20t+50<0
$$

Roots $10\pm 5\sqrt{2}$:

$$
t\in(10-5\sqrt{2},\,10+5\sqrt{2})\approx(2.93,17.07)
$$

not the claimed $(3,17)$.""")
        if L == "B":
            return wrap(L, truth, r"""Solve $|4x+3|\ge 2x+9$ by cases on the kink $x=-\tfrac34$.

For $x\ge -\tfrac34$:

$$
4x+3\ge 2x+9\Rightarrow 2x\ge 6\Rightarrow x\ge 3
$$

For $x<-\tfrac34$:

$$
-(4x+3)\ge 2x+9\Rightarrow -4x-3\ge 2x+9\Rightarrow -6x\ge 12\Rightarrow x\le -2
$$

Union:

$$
(-\infty,-2]\cup[3,\infty)
$$

matching the claim.""")
        if L == "C":
            return wrap(L, truth, r"""The absolute-value band

$$
|W-48|\le 10
$$

unfolds to

$$
38\le W\le 58
$$

Intersect with the hardware window $[35,55]$:

$$
[38,58]\cap[35,55]=[38,55]
$$

matching the claim.""")
        if L == "D":
            return wrap(L, truth, r"""Water limit: $12n\le 900\Rightarrow n\le 75$.
Fertilizer: $2n\le 140\Rightarrow n\le 70$.

Overall maximum:

$$
n\le\min\{75,70\}=70
$$

The claim that this maximum is strictly less than $70$ is false — $n=70$ is attainable.""")
        if L == "E":
            return wrap(L, truth, r"""Combine over a common denominator.

$$
\dfrac{1}{x-3}+\dfrac{1}{x+3}=\dfrac{2x}{x^{2}-9}
$$

Solve

$$
\dfrac{2x}{x^{2}-9}\le 0
$$

Poles at $x=\pm 3$ (excluded). Zero of the numerator at $x=0$.

Sign chart on $(-\infty,-3)$, $(-3,0)$, $(0,3)$, $(3,\infty)$ keeps

$$
(-\infty,-3)\cup[0,3)
$$

(including the zero $x=0$, excluding both poles), matching the claim.""")

    # --- MATH 6.115 ---
    if cid == "MATH 6.115":
        if L == "A":
            return wrap(L, truth, r"""Unfold the absolute-value tolerance.

$$
|3\theta-1|<0.5
$$

$$
-0.5<3\theta-1<0.5
$$

$$
0.5<3\theta<1.5
$$

Divide by $3$:

$$
\dfrac{1}{6}<\theta<\dfrac{1}{2}
$$

matching the claim.""")
        if L == "C":
            return wrap(L, truth, r"""Unfold the rating band.

$$
|r-200|\le 30
$$

$$
170\le r\le 230
$$

This closed interval already sits inside the broader window $[120,240]$, so the intersection is still $[170,230]$, matching the claim.""")

    # --- MATH 6.124 ---
    if cid == "MATH 6.124":
        if L == "A":
            return wrap(L, truth, r"""Remaining daylight model $60-1.2d$ with $d\ge 10$.

$$
60-1.2d\ge 24
$$

$$
-1.2d\ge -36
$$

Divide by $-1.2$ (reverse):

$$
d\le 30
$$

Together with $d\ge 10$:

$$
10\le d\le 30
$$

matching the claim.""")

    # --- MATH 6.125 ---
    if cid == "MATH 6.125":
        if L == "A":
            return wrap(L, truth, r"""Wind constraints $w\ge 0$, $w<18$, and $|w-10|>2$.

$$
|w-10|>2\Rightarrow w<8\text{ or }w>12
$$

Intersect with $0\le w<18$:

$$
[0,8)\cup(12,18)
$$

The claim that keeps only $(12,18)$ omits the lower band $[0,8)$.""")
        if L == "B":
            return wrap(L, truth, r"""Set $u=|x|\ge 0$ and solve the outer inequality.

$$
|2-u|\ge 1
$$

$$
2-u\le -1\quad\text{or}\quad 2-u\ge 1
$$

$$
u\ge 3\quad\text{or}\quad u\le 1
$$

Translate back:

$$
|x|\le 1\quad\text{or}\quad |x|\ge 3
$$

$$
(-\infty,-3]\cup[-1,1]\cup[3,\infty)
$$

matching the claim.""")
        if L == "C":
            return wrap(L, truth, r"""Extras cost $2.50+1.50+3=7$ EUR per keg, so

$$
7n\le 400\Rightarrow n\le\bigl\lfloor 400/7\bigr\rfloor=57
$$

Wort: $18n\le 900\Rightarrow n\le 50$.

Overall maximum $n\le 50$, which is not strictly less than $48$ — the claim fails.""")
        if L == "D":
            return wrap(L, truth, r"""For fixed $a>0$, solve

$$
\dfrac{x-a}{x+2a}<0
$$

Zero at $x=a$, pole at $x=-2a$ (excluded).

Sign chart on the three intervals determined by $-2a$ and $a$ keeps the open middle interval where numerator and denominator have opposite signs:

$$
-2a<x<a
$$

matching the claim.""")
        if L == "E":
            return wrap(L, truth, r"""Height of the isosceles triangle:

$$
h=\sqrt{10^{2}-\bigl(\tfrac{b}{2}\bigr)^{2}}=\sqrt{100-\tfrac{b^{2}}{4}}
$$

Area condition:

$$
\tfrac12 b h\ge 48\Rightarrow b\sqrt{100-\tfrac{b^{2}}{4}}\ge 96
$$

Squaring (both sides nonnegative on $0<b<20$) yields a quadratic in $b^{2}$ whose equality cases are $b=12$ and $b=16$, and the inequality holds on the closed band $[12,16]$.""")

    # --- MATH 6.126 ---
    if cid == "MATH 6.126":
        if L == "A":
            return wrap(L, truth, r"""Flow constraints $1.2\le s\le 3.5$ and $|s-2|\ge 0.3$.

$$
|s-2|\ge 0.3\Rightarrow s\le 1.7\text{ or }s\ge 2.3
$$

Intersecting with $[1.2,3.5]$ removes the open gap $(1.7,2.3)$. The claim that every speed in $[1.2,3.5]$ works is false.""")
        if L == "B":
            return wrap(L, truth, r"""Pressure drop $P=0.05L^{2}$ with $L\ge 8$.

$$
0.05L^{2}\le 20
$$

$$
L^{2}\le 400
$$

$$
L\le 20
$$

(using $L\ge 0$). Together with $L\ge 8$:

$$
8\le L\le 20
$$

matching the claim.""")
        if L == "C":
            return wrap(L, truth, r"""Both sides of $|5-2x|>|x+4|$ are nonnegative, so squaring preserves the inequality.

$$
(5-2x)^{2}>(x+4)^{2}
$$

$$
25-20x+4x^{2}>x^{2}+8x+16
$$

$$
3x^{2}-28x+9>0
$$

Factoring (or the quadratic formula) yields

$$
(1-3x)(9-x)>0
$$

hence

$$
x<\tfrac13\quad\text{or}\quad x>9
$$

matching the claim.""")
        if L == "D":
            return wrap(L, truth, r"""Cost per nutrition bar:

$$
0.04\cdot 25+0.06\cdot 3+0.2=1+0.18+0.2=1.38\text{ EUR}
$$

Budget: $1.38n\le 120\Rightarrow n\le 86$ (approximately; integer floor).
Powder: $0.04n\le 3\Rightarrow n\le 75$.

Overall maximum $n\le 75$, which is not strictly less than $70$.""")
        if L == "E":
            return wrap(L, truth, r"""Move the constant to one side over a common denominator.

$$
\dfrac{2x+1}{x-4}+3\ge 0
$$

$$
\dfrac{2x+1+3(x-4)}{x-4}\ge 0
$$

$$
\dfrac{2x+1+3x-12}{x-4}\ge 0
$$

$$
\dfrac{5x-11}{x-4}\ge 0
$$

Critical points: zero $x=\tfrac{11}{5}$, pole $x=4$ (excluded).

Sign chart keeps

$$
\bigl(-\infty,\tfrac{11}{5}\bigr]\cup(4,\infty)
$$

matching the claim.""")

    # --- MATH 6.127 ---
    if cid == "MATH 6.127":
        if L == "A":
            return wrap(L, truth, r"""Humidity $h=30+0.5c$ with cloud cover $c\le 40$ and $c\ge 0$.

$$
|h-45|\le 15
$$

$$
|30+0.5c-45|\le 15
$$

$$
|0.5c-15|\le 15
$$

$$
|c-30|\le 30
$$

$$
0\le c\le 60
$$

Intersect with $0\le c\le 40$:

$$
[0,40]
$$

matching the claim.""")
        if L == "B":
            return wrap(L, truth, r"""Supervisors: $n\le 12$.
Socks: $2n\le 50\Rightarrow n\le 25$.

Overall $n\le 12$. Requiring $n\ge 20$ contradicts $n\le 12$, so the claimed feasible range is empty.""")
        if L == "C":
            return wrap(L, truth, r"""Domain of the square root:

$$
|x|-1\ge 0\Rightarrow |x|\ge 1
$$

The inequality $\sqrt{|x|-1}<2$ squares (both sides nonnegative) to

$$
|x|-1<4\Rightarrow |x|<5
$$

Combine:

$$
1\le |x|<5
$$

$$
(-5,-1]\cup[1,5)
$$

matching the claim.""")
        if L == "D":
            return wrap(L, truth, r"""Critical points $x=-2$ and $x=3$ split the line into three pieces.

On $x\le -2$: $|x+2|-|x-3|=-5$.
On $-2\le x\le 3$: $|x+2|-|x-3|=2x-1$.
On $x\ge 3$: $|x+2|-|x-3|=5$.

Require the expression $\ge 1$: the outer rays give $-5\ge 1$ (never) and $5\ge 1$ (always for $x\ge 3$). On the middle piece

$$
2x-1\ge 1\Rightarrow x\ge 1
$$

so together with $x\le 3$ one gets $[1,3]$, then union with $[3,\infty)$ yields $[1,\infty)$.""")
        if L == "E":
            return wrap(L, truth, r"""Area $0.7h\ge 0.5$ forces

$$
h\ge\dfrac{5}{7}\approx 0.714
$$

Trim/height budget $12h\le 10$ forces

$$
h\le\dfrac{10}{12}\approx 0.833
$$

The feasible band is $\bigl[\tfrac57,\tfrac{5}{6}\bigr]$, not the claimed $[0.7,0.85]$.""")

    # --- MATH 6.128 ---
    if cid == "MATH 6.128":
        if L == "A":
            return wrap(L, truth, r"""Budget:

$$
25+8t\le 80\Rightarrow 8t\le 55\Rightarrow t\le 6.875
$$

Closing time forces the separate constraint $t\le 6$. A $7$-hour rental violates the closing limit even though $7$ is below a misread budget figure, so the claim is false.""")
        if L == "B":
            return wrap(L, truth, r"""Start from

$$
|x^{2}-9|\le 7
$$

$$
-7\le x^{2}-9\le 7
$$

$$
2\le x^{2}\le 16
$$

$$
x\in\bigl[-4,-\sqrt{2}\bigr]\cup\bigl[\sqrt{2},4\bigr]
$$

Replacing $\sqrt{2}$ by $1$ illegally widens the set.""")
        if L == "C":
            return wrap(L, truth, r"""Battery model $B(d)=40-0.5d^{2}$ with $B(d)\ge 10$.

$$
40-0.5d^{2}\ge 10
$$

$$
0.5d^{2}\le 30
$$

$$
d^{2}\le 60
$$

$$
d\le\sqrt{60}\approx 7.75
$$

At $d=8$:

$$
B(8)=40-0.5\cdot 64=40-32=8<10
$$

so $d=8$ fails.""")
        if L == "D":
            return wrap(L, truth, r"""Machine A: $2n\le 100\Rightarrow n\le 50$.
Machine B: $3n\le 120\Rightarrow n\le 40$.

Overall maximum:

$$
n\le\min\{50,40\}=40
$$

Producing $45$ units is impossible.""")
        if L == "E":
            return wrap(L, truth, r"""Domain of the square root: $3x+1\ge 0\Rightarrow x\ge -\tfrac13$.
Since a square root is nonnegative, the right-hand side must satisfy $2x-1\ge 0$, i.e. $x\ge\tfrac12$.

On $x\ge\tfrac12$ square both sides of $\sqrt{3x+1}\le 2x-1$:

$$
3x+1\le 4x^{2}-4x+1
$$

$$
0\le 4x^{2}-7x
$$

$$
x(4x-7)\ge 0
$$

With $x\ge\tfrac12$ this forces $x\ge\tfrac74$.

So the solution is exactly $x\ge\dfrac{7}{4}$.""")

    # --- MATH 6.126 already done; continue other exams below in second wave ---
    return None


def main() -> None:
    data = json.loads(PATH.read_text())
    hand = build_handcrafted()
    changed = 0
    skipped_gold = 0

    for task in data["tasks"]:
        cid = task["case_id"]
        keys = task["answer_key"]
        stmts = task["statements"]
        expls = task["tactical_explanations"]
        for i, old in enumerate(expls):
            letter = LETTERS[i]
            truth = bool(keys[i])
            stmt = stmts[i]
            key = (cid, letter)

            new = None
            if key in hand:
                new = hand[key]
            else:
                # budget one-liners
                if "The budget condition is" in old:
                    parsed = parse_budget_from_statement(stmt)
                    if parsed:
                        fixed, per, budget, claimed = parsed
                        new = expand_budget_service(fixed, per, budget, claimed, letter, truth)
                if new is None:
                    new = expand_remaining(task, letter, truth, stmt, old)

            if new is None:
                continue
            if cid == "MATH 6.113" and letter == "E":
                # force gold
                new = GOLD_E
                skipped_gold += 1
            if new != old:
                expls[i] = new
                changed += 1

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"changed={changed} gold_forced={skipped_gold}")


if __name__ == "__main__":
    main()
