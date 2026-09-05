#!/usr/bin/env python3
"""Rewrite Chapter 9 core + mixed explanations into the MATH 7.79 tutoring voice.

Quality bar (from MATH 7.79), not a topic template:

  **A.** → True/False
  teaching narrative that names the idea
  one formula per $$ display
  connecting prose
  close: "…, so the statement is True/False."

Letters are self-contained. Overviews are short structural prep (~100–550
chars), never a shared tutorial that letters depend on. Never “as in the
overview”. Never paste inverse-line-around-parabola claims onto polynomial
tasks.

Also strips leftover “From the figure/table:” prefixes on mixed statements.

Run: python3 scripts/rewrite-ch9-expl-779-voice.py
"""
from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

from sympy import Poly, Symbol, diff, expand, factor, simplify

ROOT = Path(__file__).resolve().parents[1]
CORE = ROOT / "src/data/math-ch9-polynomials.json"
MIXED = ROOT / "src/data/math-ch9-mixed-exam.json"

x = Symbol("x")
t = Symbol("t")
n = Symbol("n")
k = Symbol("k")
a = Symbol("a")

LETTERS = "ABCDE"
FROM_PREFIX = re.compile(r"^From the (?:figure|table):\s*", re.I)
TEMPLATE_TAIL = (
    "Each letter is then a substitution, a count of the highest power, a "
    "factorisation, a tabled increment, or an identity that has to hold for "
    "every polynomial of the stated shape."
)
STEM_FIX = "The stem fixes the polynomial (or the pair) that every letter refers to."
BANNED = [
    r"\\deg",
    r"\\circ",
    "Matching the claim",
    "as in the overview",
    "from the overview",
    "in the overview",
    "the overview",
]


def D(s: str) -> str:
    inner = re.sub(r"\s+", " ", s).strip()
    return f"$${inner}$$"


def join(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and str(p).strip())


def normalize_displays(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$" if inner else ""

    text = re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def expl(letter: str, truth: bool, *parts: str) -> str:
    verd = "True" if truth else "False"
    body = join(*parts)
    if body.lower().count("so the statement is") != 1:
        raise ValueError(f"{letter}: close phrase must appear once ({body[-120:]!r})")
    if not body.endswith(f", so the statement is {verd}."):
        raise ValueError(f"{letter}: missing close ({body[-80:]!r})")
    low = body.lower()
    for b in ("as in the overview", "from the overview", "in the overview", "the overview"):
        if b in low:
            raise ValueError(f"{letter}: overview dependence ({b})")
    return normalize_displays(f"**{letter}.** → {verd}\n\n{body}")


def ov(*parts: str) -> str:
    text = normalize_displays(join(*parts))
    n = len(text)
    if n < 100 or n > 550:
        raise ValueError(f"overview length {n} not in 100–550:\n{text}")
    low = text.lower()
    if "each letter is then" in low or "as in the overview" in low:
        raise ValueError("overview template/dependence")
    return text


def must(cond, msg: str) -> None:
    if not cond:
        raise AssertionError(msg)


def ev(expr, val, var=x):
    return simplify(expand(expr).subs(var, val))


def diffs(xs, expr, var=x):
    ys = [int(expr.subs(var, v)) for v in xs]
    layers = [ys]
    while len(layers[-1]) > 1:
        prev = layers[-1]
        layers.append([prev[i + 1] - prev[i] for i in range(len(prev) - 1)])
    return layers


def mixed_e01():
    p = expand((x + 1) ** 2 * (x - 2))
    must(p == expand(x ** 3 - 3 * x - 2), "e01 poly")
    must(ev(p, 0) == -2, "e01 intercept")
    overview = ov(
        "The figure prints no formula. A touch at $x=-1$ (double root) and a simple crossing at $x=2$, with intercept $-2$, force the monic cubic",
        D(r"p(x)=(x+1)^{2}(x-2)=x^{3}-3x-2"),
        "An odd-degree monic polynomial keeps the sign of $x$ at infinity. Meetings with the dashed mark $y=-2$ solve $p(x)+2=0$.",
    )
    letters = [
        expl("A", False,
            "End behaviour of a polynomial is the behaviour of its highest-power term, so rebuild the solid curve from the ticks and read that term.",
            D(r"p(x)=(x+1)^{2}(x-2)=x^{3}-3x-2"),
            "The cubic is monic of odd degree, so it keeps the sign of $x$ itself at infinity.",
            D(r"\lim_{x\to+\infty}p(x)=+\infty"),
            D(r"\lim_{x\to-\infty}p(x)=-\infty"),
            "The right end rises and the left end falls. The claim reverses both arrows, so the statement is False."),
        expl("B", True,
            "An axis meeting is a distinct abscissa where the height is zero; a touch still counts as one meeting, not two.",
            D(r"p(x)=(x+1)^{2}(x-2)"),
            "The square marks a double root at $x=-1$, and the remaining factor is a simple root at $x=2$.",
            D(r"x=-1\qquad x=2"),
            "Those are two distinct abscissas, matching the ticks, and nothing else in the window returns to height $0$. Two distinct axis meetings are visible, so the statement is True."),
        expl("C", False,
            "The $y$-intercept is the height at $x=0$, read on the vertical axis and confirmed by substituting into the rebuilt cubic.",
            D(r"p(x)=(x+1)^{2}(x-2)"),
            D(r"p(0)=(1)^{2}(-2)=-2"),
            "That height is negative. A positive intercept would have required the constant term to change sign. The intercept is $-2$, not a positive height, so the statement is False."),
        expl("D", False,
            "Oddness is the identity $p(-x)=-p(x)$, which in particular forces a zero intercept and a zero set symmetric about the origin.",
            D(r"p(x)=x^{3}-3x-2"),
            D(r"p(0)=-2\neq 0"),
            "A nonzero intercept already kills oddness. The touch at $-1$ also has no matching touch at $+1$, so the figure is not a half-turn about the origin. The solid graph is not odd, so the statement is False."),
        expl("E", False,
            "Meetings with the dashed mark $y=-2$ are the roots of $p(x)+2=0$, so expand and factor that difference.",
            D(r"p(x)=x^{3}-3x-2"),
            D(r"p(x)+2=x^{3}-3x=x(x^{2}-3)"),
            "Three real solutions appear: $x=0$ and $x=\\pm\\sqrt{3}$, all inside the plotted window. The claim asks for exactly two. Three meetings occur, not two, so the statement is False."),
    ]
    return overview, letters


def mixed_e02():
    p = expand((x + 1) * (x - 1) * (x - 2))
    layers = diffs([-2, -1, 0, 1, 2, 3], p)
    must(layers[0] == [-12, 0, 2, 0, 0, 8], "e02 ys")
    must(layers[3] == [6, 6, 6], "e02 d3")
    overview = ov(
        "The table is raw unit-spaced samples; no closed form is printed. Differences freeze at the third layer, constantly $6=3!\\cdot 1$.",
        D(r"p(x)=(x+1)(x-1)(x-2)=x^{3}-2x^{2}-x+2"),
        "The factor theorem is a column lookup: $x-r$ divides $p$ only when the entry at $x=r$ is $0$. Constant third differences diagnose a minimal degree, not an exact one.",
    )
    letters = [
        expl("A", True,
            "On unit spacing the third differences of a cubic $ax^{3}+\\cdots$ are constantly $3!\\,a=6a$, so compute the pyramid from the listed row.",
            D(r"-12,\ 0,\ 2,\ 0,\ 0,\ 8"),
            D(r"\Delta_{3}:\ 6,\ 6,\ 6"),
            "The third layer is constantly $6$, hence $a=1$. A monic cubic is consistent with every listed column, so the statement is True."),
        expl("B", False,
            "The factor theorem asks for the value at $x=0$, not merely for a $0$ sitting in the heading of that column.",
            D(r"x=-2,-1,0,1,2,3"),
            D(r"p= -12,\ 0,\ 2,\ 0,\ 0,\ 8"),
            "The intercept sample is $p(0)=2$, which is not zero. A heading labelled $0$ is the input, not the height. The factor $x$ fails the table test, so the statement is False."),
        expl("C", False,
            "A quadratic on unit spacing freezes at the second-difference layer. Compute that layer from the listed samples.",
            D(r"\Delta_{1}:\ 12,\ 2,\ -2,\ 0,\ 8"),
            D(r"\Delta_{2}:\ -10,\ -4,\ 2,\ 8"),
            "Those second differences still move, so the samples are not quadratic. The interpolant is at least cubic. A quadratic does not fit every listed column, so the statement is False."),
        expl("D", True,
            "The factor theorem at $x=1$ is the corresponding table column: $x-1$ divides the unknown polynomial if and only if that entry is $0$.",
            D(r"p(1)=0"),
            "The $x=1$ sample vanishes, so $x-1$ is a factor of any interpolant through the six nodes. Directly, the monic cubic $(x+1)(x-1)(x-2)$ displays that factor. The factor test passes, so the statement is True."),
        expl("E", False,
            "Constant third differences force the degree to be at least $3$, not exactly $3$. Any extra multiple of the six nodal factors reproduces the same samples at higher degree.",
            D(r"(x+2)(x+1)x(x-1)(x-2)(x-3)"),
            "Adding a nonzero multiple of that product to a cubic interpolant keeps every tabulated height and raises the degree. The claim's “exactly $3$” is too strong, so the statement is False."),
    ]
    return overview, letters


def mixed_e03():
    h = expand(t * (t - 2) * (t - 3))
    layers = diffs([0, 1, 2, 3, 4], h, t)
    must(layers[0] == [0, 2, 0, 0, 8], "e03 ys")
    must(layers[3] == [6, 6], "e03 d3")
    overview = ov(
        "The lock ledger is the only data. Zero imbalance means a tabulated $0$: that happens at $t=0,2,3$.",
        D(r"h(t)=t(t-2)(t-3)=t^{3}-5t^{2}+6t"),
        "Third differences of the five samples are constantly $6=3!\\cdot 1$, the signature of a monic cubic. The factor test at hour $1$ is the reading $h(1)$, not the mere presence of that hour.",
    )
    letters = [
        expl("A", True,
            "Zero imbalance is a tabulated $0$ in the litre row, so read the five recorded hours one by one.",
            D(r"t=0,1,2,3,4"),
            D(r"h=0,\ 2,\ 0,\ 0,\ 8"),
            "The lock sits on the datum at $t=0$, $t=2$ and $t=3$, and at no other recorded hour. Three recorded zeros, and only three, so the statement is True."),
        expl("B", True,
            "The opening imbalance is the intercept of the ledger, the height at $t=0$.",
            D(r"h(0)=0"),
            "That first column is already a tabulated $0$. Equivalently, the unique monic cubic through the three zeros $0,2,3$ is $h(t)=t(t-2)(t-3)$, which vanishes at the origin. The lock starts on the datum, so the statement is True."),
        expl("C", True,
            "Finite differences of equally spaced samples lose one degree per pass. Compute them from the litre row until a layer freezes.",
            D(r"0,\ 2,\ 0,\ 0,\ 8"),
            D(r"\Delta_{3}:\ 6,\ 6"),
            "The third layer is constantly $6=3!\\cdot 1$, so a monic cubic is consistent with every listed hour. A cubic model matches the ledger, so the statement is True."),
        expl("D", False,
            "Being a tabulated abscissa is not the factor test. The factor $t-1$ divides $h$ only if the hour-$1$ reading is $0$.",
            D(r"h(1)=2"),
            "That entry is not zero. The hour is recorded because the ledger lists every integer mark, not because $t-1$ is a factor. The factor test fails, so the statement is False."),
        expl("E", False,
            "A quadratic on unit spacing would freeze at the second-difference layer. Compute that layer from the litre row.",
            D(r"\Delta_{1}:\ 2,\ -2,\ 0,\ 8"),
            D(r"\Delta_{2}:\ -4,\ 2,\ 8"),
            "Those second differences still change, so a quadratic cannot fit every listed hour. The ledger needs a cubic. A quadratic model is incompatible, so the statement is False."),
    ]
    return overview, letters


def mixed_e04():
    p = expand(x ** 2 - 1)
    q = expand(x ** 3 - x)
    must(Poly(expand(p.subs(x, q)), x).degree() == 6, "e04 pq")
    must(Poly(expand(q.subs(x, p)), x).degree() == 6, "e04 qp")
    overview = ov(
        "Both maps are already written.",
        D(r"p(x)=x^{2}-1\qquad q(x)=x^{3}-x"),
        "Factor to linear pieces: $p=(x-1)(x+1)$ and $q=x\\,p(x)$. Parity is a coefficient reading. Nesting multiplies highest powers rather than adding them.",
    )
    letters = [
        expl("A", True,
            "A common linear factor is the shortest proof that a root of $p$ is a root of $q$, so factor both maps.",
            D(r"p(x)=(x-1)(x+1)"),
            D(r"q(x)=x(x-1)(x+1)=x\,p(x)"),
            "Every real root of $p$ is already a root of $q$. Directly, $q(1)=q(-1)=0$. Both real roots of $p$ lie among the roots of $q$, so the statement is True."),
        expl("B", True,
            "Oddness is the identity $q(-x)=-q(x)$, which holds as soon as only odd powers appear.",
            D(r"q(x)=x^{3}-x"),
            D(r"q(-x)=-x^{3}+x=-q(x)"),
            "There is no even-power term and no leftover constant. That is the definition of an odd function, so the statement is True."),
        expl("C", True,
            "Evenness is the identity $p(-x)=p(x)$, which holds as soon as only even powers appear.",
            D(r"p(x)=x^{2}-1"),
            D(r"p(-x)=(-x)^{2}-1=p(x)"),
            "Squaring kills the minus sign, and there is no odd-power term to survive the swap. Hence $p$ is even, so the statement is True."),
        expl("D", True,
            "Nesting multiplies highest powers: the outer map $p$ has degree $2$ and the inner map $q$ has degree $3$.",
            D(r"p(q(x))=(x^{3}-x)^{2}-1"),
            D(r"p(q(x))=x^{6}-2x^{4}+x^{2}-1"),
            "The leading term is $x^{6}$, and nothing cancels it because the leading coefficients are $1$ and $1$. The nested highest power is $x^{6}$, so the statement is True."),
        expl("E", False,
            "The other order multiplies the same two degrees: outer $3$ times inner $2$ is again $6$, not $5$.",
            D(r"q(p(x))=(x^{2}-1)^{3}-(x^{2}-1)"),
            D(r"q(p(x))=x^{6}-3x^{4}+2x^{2}"),
            "The expansion begins with $x^{6}$. A drop to $x^{5}$ would have needed the leading coefficients to cancel, which they do not. The nested highest power is $x^{6}$, not $x^{5}$, so the statement is False."),
    ]
    return overview, letters


def mixed_e05():
    gk = x ** 3 - k * x
    must(simplify(gk.subs(x, -x) + gk) == 0, "e05 odd")
    overview = ov(
        "The parameter sits on the linear term of an otherwise fixed cubic.",
        D(r"g_{k}(x)=x^{3}-kx=x(x^{2}-k)"),
        "Every member is odd, independently of $k$. Distinct zeros and stationary points then follow from the sign of $k$ and from $g_{k}'(x)=3x^{2}-k$.",
    )
    letters = [
        expl("A", True,
            "Oddness is a coefficient reading: replacing $x$ by $-x$ must flip the whole formula, and that test does not see $k$ as soon as only odd powers appear.",
            D(r"g_{k}(x)=x^{3}-kx"),
            D(r"g_{k}(-x)=-x^{3}+kx=-g_{k}(x)"),
            "The identity holds for every real parameter. In particular $g_{k}(0)=0$ for every $k$. Oddness therefore holds for every real $k$, so the statement is True."),
        expl("B", True,
            "Three distinct real zeros appear when the quadratic factor $x^{2}-k$ has two distinct real roots besides the origin, so substitute the named parameter.",
            D(r"g_{1}(x)=x^{3}-x=x(x-1)(x+1)"),
            "The three linear pieces are distinct. The zeros are $-1$, $0$ and $1$. Three distinct real zeros occur when $k=1$, so the statement is True."),
        expl("C", True,
            "A repeated root occurs when $g_{k}$ and $g_{k}'$ share a root. Differentiate the family and compare.",
            D(r"g_{k}'(x)=3x^{2}-k"),
            "The origin is always a root of $g_{k}$. It is also a root of $g_{k}'$ precisely when $k=0$, in which case $g_{0}(x)=x^{3}$ has a triple root at $0$. For $k\\neq 0$ the nonzero roots $\\pm\\sqrt{k}$ (when they exist) are simple. The value $k=0$ is exactly the repeated-root case, so the statement is True."),
        expl("D", True,
            "A claimed root is a substitution, so put $k=4$ and $x=2$ into the family.",
            D(r"g_{4}(x)=x^{3}-4x=x(x-2)(x+2)"),
            D(r"g_{4}(2)=8-8=0"),
            "The factor $x-2$ is visible once $k=4$ is a perfect square. Directly, the two terms cancel. The named input is a root, so the statement is True."),
        expl("E", True,
            "Stationary points solve $g_{k}'(x)=0$. For the named parameter that derivative is an even quadratic.",
            D(r"g_{3}'(x)=3x^{2}-3=3(x^{2}-1)"),
            D(r"x=\pm 1"),
            "Those are the two real solutions. The stationary abscissas of $g_{3}$ are $\\pm 1$, so the statement is True."),
    ]
    return overview, letters


def mixed_e06():
    p = expand((x - 1) ** 2 * (x + 2))
    dp = expand(diff(p, x))
    must(p == expand(x ** 3 - 3 * x + 2), "e06 poly")
    must(ev(dp, -2) == 9, "e06 p'")
    overview = ov(
        "A monic cubic is uniquely determined by a double root and a simple root: the touch supplies the square.",
        D(r"p(x)=(x-1)^{2}(x+2)=x^{3}-3x+2"),
        "Distinct zeros ignore multiplicity. A double root flattens $p'$; a simple crossing does not. The intercept is the product of the constant pieces.",
    )
    letters = [
        expl("A", True,
            "Monic normalisation plus the stated multiplicities pin the product down completely: a touch at $1$ and a simple crossing at $-2$.",
            D(r"p(x)=(x-1)^{2}(x+2)"),
            D(r"p(x)=(x^{2}-2x+1)(x+2)=x^{3}-3x+2"),
            "Each linear factor is monic, and the square is forced by the touch. That product is exactly the displayed factorisation, so the statement is True."),
        expl("B", False,
            "Distinct zeros ignore the exponent on a repeated factor. The rebuilt cubic vanishes only where a linear piece vanishes.",
            D(r"p(x)=(x-1)^{2}(x+2)"),
            D(r"x=1\qquad x=-2"),
            "Those are two distinct abscissas, not three. Multiplicity total $3$ is not three distinct roots. Only two distinct real zeros occur, so the statement is False."),
        expl("C", False,
            "Only a root of multiplicity at least $2$ is automatically a root of the derivative. The crossing at $-2$ is simple, so differentiate and substitute.",
            D(r"p'(x)=3x^{2}-3=3(x-1)(x+1)"),
            D(r"p'(-2)=3\cdot 4-3=9\neq 0"),
            "The simple crossing is not stationary. The claimed vanishing of $p'$ at $-2$ does not occur, so the statement is False."),
        expl("D", False,
            "Oddness requires $p(0)=0$ and $p(-x)=-p(x)$. Compute the intercept from the factors.",
            D(r"p(0)=(-1)^{2}(2)=2"),
            "A nonzero constant term already kills oddness. The zero set $\\{1,-2\\}$ is not symmetric about the origin either. The rebuilt cubic is not odd, so the statement is False."),
        expl("E", False,
            "The intercept is the product of the constant pieces of the factors, equivalently the value at $x=0$.",
            D(r"p(x)=(x-1)^{2}(x+2)"),
            D(r"p(0)=(-1)^{2}(2)=2"),
            "The claimed value $-2$ has the wrong sign: it would have needed an odd number of negative constant pieces. The intercept is $2$, not $-2$, so the statement is False."),
    ]
    return overview, letters


def mixed_e07():
    p = expand(x ** 2 - 1)
    q = expand(x - 2)
    must(expand(q.subs(x, p)) == expand(x ** 2 - 3), "e07 qp")
    must(expand(p.subs(x, q)) == expand(x ** 2 - 4 * x + 3), "e07 pq")
    overview = ov(
        "The inner quadratic and the outer affine map are given explicitly.",
        D(r"p(x)=x^{2}-1\qquad q(x)=x-2"),
        "Nesting multiplies degrees: $1\\cdot 2=2$ and $2\\cdot 1=2$. Expanding both orders gives different quadratics, so the compositions do not commute.",
    )
    letters = [
        expl("A", True,
            "An affine outer map has degree $1$, so it preserves the inner degree rather than raising it. Expand the nesting to confirm.",
            D(r"q(p(x))=(x^{2}-1)-2=x^{2}-3"),
            "The highest power that appears is $x^{2}$. Nothing of degree $3$ can appear because $q$ is a line. The nested highest power is $x^{2}$, so the statement is True."),
        expl("B", False,
            "The other order is a quadratic outer map around an affine inner map, so the degrees multiply as $2\\cdot 1=2$, not $3$.",
            D(r"p(q(x))=(x-2)^{2}-1=x^{2}-4x+3"),
            "The expansion is quadratic. A cubic would have needed the inner map to contribute an $x^{2}$ of its own, which a line does not. The nested highest power is $x^{2}$, not $x^{3}$, so the statement is False."),
        expl("C", False,
            "Nesting in opposite orders is a different composition, so evaluate both inside-out at the origin and compare.",
            D(r"q(p(0))=q(-1)=-3"),
            D(r"p(q(0))=p(-2)=4-1=3"),
            "The two numbers disagree. Equal nested degree does not make the two polynomials the same. Nesting does not commute here, so the statement is False."),
        expl("D", True,
            "The factor theorem at $x=1$ asks whether $p(q(1))$ vanishes, equivalently whether $x-1$ appears after expanding the nesting.",
            D(r"p(q(x))=(x-2)^{2}-1=(x-1)(x-3)"),
            D(r"p(q(1))=p(-1)=0"),
            "The linear factor $x-1$ is visible in the factorisation, and the substitution confirms it. So $x-1$ divides the nesting, so the statement is True."),
        expl("E", False,
            "Oddness requires only odd powers. The nesting $q(p(x))$ is a quadratic in $x^{2}$.",
            D(r"q(p(x))=x^{2}-3"),
            "Only even powers appear, so the nesting is even rather than odd. Even is the opposite of odd, so the statement is False."),
    ]
    return overview, letters


def mixed_e08():
    p = expand((x + 1) ** 2 * (x - 2))
    dp = expand(diff(p, x))
    must(ev(dp, -1) == 0 and ev(dp, 2) == 9, "e08 p'")
    overview = ov(
        "The cubic arrives already factored, so multiplicity is visible before any expansion.",
        D(r"p(x)=(x+1)^{2}(x-2)=x^{3}-3x-2"),
        "A double root flattens $p'$; a simple crossing does not. Distinct zeros ignore the exponent. The intercept is the product of the constant pieces.",
    )
    letters = [
        expl("A", True,
            "A root of multiplicity at least $2$ is automatically a root of the derivative, so read the squared factor and confirm by differentiating.",
            D(r"p(x)=(x+1)^{2}(x-2)"),
            D(r"p'(x)=3x^{2}-3=3(x-1)(x+1)"),
            "The factor $x+1$ survives in $p'$, hence $p'(-1)=0$. The double root at $x=-1$ is stationary, so the statement is True."),
        expl("B", False,
            "The root at $x=2$ is simple, so it need not flatten $p'$. Substitute into the derivative.",
            D(r"p'(x)=3x^{2}-3"),
            D(r"p'(2)=12-3=9\neq 0"),
            "The simple crossing is not a stationary point. The claimed vanishing of $p'$ at $2$ does not occur, so the statement is False."),
        expl("C", True,
            "Distinct zeros ignore the exponent on $(x+1)^{2}$. The cubic vanishes only where a linear piece vanishes.",
            D(r"p(x)=(x+1)^{2}(x-2)"),
            D(r"x=-1\qquad x=2"),
            "Those are two distinct abscissas. Multiplicity total $3$ is not three distinct roots. Exactly two distinct real zeros occur, so the statement is True."),
        expl("D", True,
            "The intercept is the height at $x=0$, equivalently the product of the constant pieces of the factors.",
            D(r"p(x)=(x+1)^{2}(x-2)"),
            D(r"p(0)=(1)^{2}(-2)=-2"),
            "That is the number named in the claim. Expanding to $x^{3}-3x-2$ displays the same constant term. The intercept is $-2$, so the statement is True."),
        expl("E", False,
            "Oddness requires $p(0)=0$ and $p(-x)=-p(x)$. The intercept is already a counter-example.",
            D(r"p(0)=-2\neq 0"),
            D(r"p(-1)=0\qquad -p(1)=4"),
            "A nonzero intercept kills oddness, and the two sample values disagree as well. The cubic is not odd, so the statement is False."),
    ]
    return overview, letters


def mixed_e09():
    p = expand(x * (x - 2) * (x + 2))
    must([int(p.subs(x, v)) for v in [-2, -1, 0, 1, 2]] == [0, 3, 0, -3, 0], "e09 table")
    overview = ov(
        "The ticks show three simple crossings at $-2$, $0$ and $2$, and a half-turn about the origin.",
        D(r"p(x)=x(x-2)(x+2)=x^{3}-4x"),
        "The dashed companion is the line $y=x$. Letters A–C are figure readings; D–E are table lookups of the same solid graph.",
    )
    letters = [
        expl("A", True,
            "An axis meeting is a distinct abscissa where the solid curve has height zero. Read the ticks: three simple crossings, aligned with $-2$, $0$ and $2$.",
            D(r"p(x)=x(x-2)(x+2)"),
            "Each factor is simple, so each crossing is a distinct meeting. Nothing else in the window returns to height $0$. Three distinct axis meetings are visible, so the statement is True."),
        expl("B", True,
            "Oddness is a half-turn about the origin. The figure is carried onto itself by that half-turn, and the intercept is $0$.",
            D(r"p(x)=x^{3}-4x"),
            D(r"p(-x)=-p(x)"),
            "Only odd powers appear, which is the algebraic form of that symmetry. The solid graph is odd, so the statement is True."),
        expl("C", True,
            "Solid–dashed meetings solve $p(x)=x$. Bring every term to one side and factor.",
            D(r"p(x)-x=x^{3}-5x=x(x^{2}-5)"),
            "Three real solutions appear: $x=0$ and $x=\\pm\\sqrt{5}$. Since $\\sqrt{5}\\approx 2.2$ sits inside the window, all three meetings are visible. Three distinct meetings with the dashed line occur, so the statement is True."),
        expl("D", True,
            "This letter is a table lookup, not a figure reading. The claim is the tabulated height at $x=-1$.",
            D(r"x=-2,-1,0,1,2"),
            D(r"p=0,\ 3,\ 0,\ -3,\ 0"),
            "The $x=-1$ sample is $3$. Directly, $p(-1)=-1+4=3$ on the odd cubic $x^{3}-4x$. The tabulated height is exactly the number claimed, so the statement is True."),
        expl("E", False,
            "The factor theorem at $x=1$ is the corresponding table column: $x-1$ divides $p$ only if that entry is $0$.",
            D(r"p(1)=-3"),
            "The $x=1$ sample is not zero. Oddness even predicts the sign: $p(1)=-p(-1)=-3$. The factor $x-1$ fails the table test, so the statement is False."),
    ]
    return overview, letters


def mixed_e10():
    must(ev(expand(x * (x + 1) * (x - 2)), 1) == -2, "e10 A")
    r = expand((x - 1) ** 2 * (x + 1))
    must(ev(r, 1) == 0 and ev(diff(r, x), 1) == 0, "e10 E")
    overview = ov(
        "The five letters do not share a polynomial. Each micro-scenario is settled in its own letter: a monic cubic through three named zeros, evenness of $x^{4}+1$, nested degree, a difference of squares, and a double-root derivative test.",
        D(r"x(x+1)(x-2)\qquad x^{4}+1\qquad (x^{2})^{2}-1"),
        "The toolkit is the factor theorem, a coefficient reading for parity, and the rule that nesting multiplies highest powers.",
    )
    letters = [
        expl("A", True,
            "A monic cubic with those three simple zeros is the product of the three monic linear factors. Substitute $x=1$ into that product.",
            D(r"p(x)=x(x+1)(x-2)"),
            D(r"p(1)=(1)(2)(-1)=-2"),
            "The three signed distances from $1$ to the zeros multiply to $-2$. That is the named value, so the statement is True."),
        expl("B", True,
            "Evenness is the identity $f(-x)=f(x)$, which holds as soon as only even powers appear.",
            D(r"f(x)=x^{4}+1"),
            D(r"f(-x)=(-x)^{4}+1=f(x)"),
            "The fourth power kills the minus sign, and the leftover constant does not see $x$ at all. That identity holds for every real $x$, so the statement is True."),
        expl("C", True,
            "Nesting multiplies highest powers: feeding a degree-$2$ inner map into a degree-$2$ outer map produces degree $4$.",
            D(r"(x^{2})^{2}-1=x^{4}-1"),
            "The leading term is $x^{4}$, and subtracting $1$ cannot cancel it. The nested highest power is $x^{4}$, so the statement is True."),
        expl("D", True,
            "A cubic of this shape factors by pulling out $x$ and writing the rest as a difference of squares.",
            D(r"x^{3}-4x=x(x^{2}-4)=x(x-2)(x+2)"),
            "The three linear pieces are distinct, so the zeros are $-2$, $0$ and $2$. Three distinct real zeros occur, so the statement is True."),
        expl("E", True,
            "A double root is automatically a root of the derivative. Write $r(x)=(x-1)^{2}(x+1)$ and differentiate.",
            D(r"r'(x)=2(x-1)(x+1)+(x-1)^{2}=(x-1)(3x+1)"),
            "The factor $x-1$ survives in $r'$, so $r$ and $r'$ share the root $x=1$. A common real root therefore exists, so the statement is True."),
    ]
    return overview, letters


def mixed_e11():
    p = expand(x * (x - 2) * (x + 2))
    must(p == expand(x ** 3 - 4 * x), "e11 poly")
    overview = ov(
        "No formula is printed. Three simple crossings at $-2$, $0$ and $2$, together with a half-turn about the origin, force the monic odd cubic",
        D(r"p(x)=x(x-2)(x+2)=x^{3}-4x"),
        "The dashed companion is the line $y=x$. Turning points solve $p'(x)=0$ and are not the same as axis meetings.",
    )
    letters = [
        expl("A", True,
            "An axis meeting is a distinct abscissa of height zero. The ticks show three simple crossings, aligned with $-2$, $0$ and $2$.",
            D(r"p(x)=x(x-2)(x+2)"),
            "Each factor is to the first power, so each crossing is a distinct meeting. Nothing else in the window returns to height $0$. Three distinct axis meetings are visible, so the statement is True."),
        expl("B", True,
            "Oddness is a half-turn about the origin. The figure is carried onto itself by that half-turn, and the intercept is $0$.",
            D(r"p(x)=x^{3}-4x"),
            D(r"p(-x)=-p(x)"),
            "Only odd powers appear. That is the algebraic form of the visible symmetry. The solid graph is odd, so the statement is True."),
        expl("C", True,
            "End behaviour of a polynomial is the behaviour of its highest-power term. Rebuild from the ticks and read that term.",
            D(r"p(x)=x^{3}-4x"),
            D(r"\lim_{x\to+\infty}p(x)=+\infty"),
            D(r"\lim_{x\to-\infty}p(x)=-\infty"),
            "A monic cubic keeps the sign of $x$ at infinity: the right end rises and the left end falls. Both arrows in the claim are the correct ones, so the statement is True."),
        expl("D", True,
            "Solid–dashed meetings solve $p(x)=x$. Bring every term to one side and factor.",
            D(r"p(x)-x=x^{3}-5x=x(x^{2}-5)"),
            "Three real solutions appear: $x=0$ and $x=\\pm\\sqrt{5}$, all inside the window. Three distinct meetings with the dashed companion occur, so the statement is True."),
        expl("E", False,
            "Turning points are peaks and troughs, not crossings. They solve $p'(x)=0$.",
            D(r"p'(x)=3x^{2}-4"),
            D(r"x=\pm\frac{2}{\sqrt{3}}"),
            "Exactly two real stationary abscissas appear, near $\\pm 1.15$. An odd cubic of this shape has two turns, not three. The claim overcounts the turns, so the statement is False."),
    ]
    return overview, letters


def mixed_e12():
    p = expand((x - 2) * (x + 1))
    layers = diffs([-2, -1, 0, 1, 2, 3], p)
    must(layers[0] == [4, 0, -2, -2, 0, 4], "e12 ys")
    must(layers[2] == [2, 2, 2, 2], "e12 d2")
    must(int(p.subs(x, 4)) == 10, "e12 next")
    overview = ov(
        "The laboratory table is raw unit-spaced samples. Second differences freeze at $2=2\\cdot 1$, the signature of a monic quadratic.",
        D(r"p(x)=(x-2)(x+1)=x^{2}-x-2"),
        "The factor theorem is a column lookup. Newton's forward step with constant $\\Delta_{2}=2$ produces the next sample.",
    )
    letters = [
        expl("A", True,
            "On unit spacing the second differences of a quadratic $ax^{2}+\\cdots$ are constantly $2a$. Compute the pyramid from the listed row.",
            D(r"4,\ 0,\ -2,\ -2,\ 0,\ 4"),
            D(r"\Delta_{2}:\ 2,\ 2,\ 2,\ 2"),
            "The second layer is constantly $2$, hence $a=1$. A monic quadratic fits every listed column, so the statement is True."),
        expl("B", True,
            "The factor theorem at $x=-1$ is the corresponding table column: $x+1$ divides the interpolant if and only if that entry is $0$.",
            D(r"p(-1)=0"),
            "The $x=-1$ sample vanishes. Equivalently, the monic quadratic through the two vanishing columns is $(x-2)(x+1)$, which displays the factor. The factor test passes, so the statement is True."),
        expl("C", True,
            "The same theorem at $x=2$ is the corresponding column.",
            D(r"p(2)=0"),
            "The $x=2$ sample vanishes, so $x-2$ is a factor. Together with $x+1$ that pins the unique monic quadratic $x^{2}-x-2$. The factor test passes, so the statement is True."),
        expl("D", True,
            "A linear model would freeze at the first-difference layer. Compute that layer from the listed samples.",
            D(r"\Delta_{1}:\ -4,\ -2,\ 0,\ 2,\ 4"),
            "Those first differences still move: they form an arithmetic progression, the signature of a quadratic rather than a line. The samples cannot come from a linear polynomial, so the statement is True."),
        expl("E", True,
            "Newton's forward step with constant second difference $2$ updates the last first difference $4$ to $6$, then the last sample $4$ to $10$. Directly,",
            D(r"p(x)=(x-2)(x+1)"),
            D(r"p(4)=(4-2)(4+1)=10"),
            "Both readings agree. The extrapolated sample at $x=4$ equals $10$, so the statement is True."),
    ]
    return overview, letters


def mixed_e13():
    c = expand(-(t + 1) * (t - 1) * (t - 2))
    must(c == expand(-(t ** 3) + 2 * t ** 2 + t - 2), "e13 poly")
    must(ev(c, 0, t) == -2, "e13 intercept")
    overview = ov(
        "No formula is printed. Three simple zero-camber times at $t=-1,1,2$, together with a falling right end, force",
        D(r"c(t)=-(t+1)(t-1)(t-2)=-t^{3}+2t^{2}+t-2"),
        "The dashed design mark is the horizontal $y=-2$, which is also the intercept. Meetings solve $c(t)=-2$.",
    )
    letters = [
        expl("A", False,
            "End behaviour follows the leading term. Rebuild the camber from the ticks: three simple zeros and a downward right end force a minus sign in front of the monic product.",
            D(r"c(t)=-(t+1)(t-1)(t-2)=-t^{3}+2t^{2}+t-2"),
            D(r"\lim_{t\to+\infty}c(t)=-\infty"),
            "The leading term $-t^{3}$ sends the far-right camber down, not up. The claim reverses that arrow, so the statement is False."),
        expl("B", True,
            "A zero-camber time is a distinct abscissa of height zero. The ticks show three simple crossings, aligned with $t=-1$, $t=1$ and $t=2$.",
            D(r"c(t)=-(t+1)(t-1)(t-2)"),
            "Each factor is simple, so each crossing is a distinct meeting. Three distinct zero-camber times are visible, so the statement is True."),
        expl("C", False,
            "The opening camber is the height at $t=0$, read on the vertical axis and confirmed by substituting.",
            D(r"c(t)=-(t+1)(t-1)(t-2)"),
            D(r"c(0)=-(1)(-1)(-2)=-2"),
            "That height is negative, and it coincides with the dashed design mark. The opening camber is not positive, so the statement is False."),
        expl("D", False,
            "Oddness would need $c(0)=0$ and a zero set symmetric about the origin.",
            D(r"c(0)=-2\neq 0"),
            "A nonzero intercept already kills oddness. The zeros $\\{-1,1,2\\}$ are not symmetric about $0$ either. The camber graph is not odd, so the statement is False."),
        expl("E", False,
            "Meetings with the dashed mark $y=-2$ are the roots of $c(t)+2=0$.",
            D(r"c(t)+2=-t(t^{2}-2t-1)"),
            "Three real solutions appear: $t=0$ and $t=1\\pm\\sqrt{2}$, all inside the window. The claim asks for exactly one. Three meetings occur, not one, so the statement is False."),
    ]
    return overview, letters


def mixed_e14():
    f = expand(x ** 3 - x)
    g = expand(x ** 2 - 4)
    must(ev(f, 1) == 0 and ev(g, 1) == -3, "e14 remainders")
    must(Poly(expand(f.subs(x, g)), x).degree() == 6, "e14 nest")
    overview = ov(
        "Both maps are given in expanded form.",
        D(r"f(x)=x^{3}-x\qquad g(x)=x^{2}-4"),
        "The remainder on division by $x-1$ is the number $f(1)$ or $g(1)$. Parity is a coefficient reading. Nesting multiplies degrees: $3\\cdot 2=6$.",
    )
    letters = [
        expl("A", True,
            "The remainder theorem says that the remainder on division by $x-1$ is the number $f(1)$, so substitute.",
            D(r"f(x)=x(x-1)(x+1)"),
            D(r"f(1)=0"),
            "The factor $x-1$ is already visible, so the remainder is $0$. The remainder is $0$, so the statement is True."),
        expl("B", False,
            "The same theorem for $g$ asks for $g(1)$, not for a guess from the shape of $f$.",
            D(r"g(x)=(x-2)(x+2)"),
            D(r"g(1)=1-4=-3"),
            "That remainder is $-3$, not $0$. The factor $x-1$ does not divide $g$. The remainder is not $0$, so the statement is False."),
        expl("C", False,
            "Even plus odd is even only if the odd summand vanishes. Add the two formulas and read the powers.",
            D(r"f(x)+g(x)=x^{3}+x^{2}-x-4"),
            "The $x^{3}$ term survives, so the sum is neither even nor odd. A surviving odd power kills evenness. The sum is not even, so the statement is False."),
        expl("D", True,
            "Nesting multiplies highest powers: outer degree $3$ times inner degree $2$ is $6$.",
            D(r"f(g(x))=(x^{2}-4)^{3}-(x^{2}-4)"),
            D(r"f(g(x))=x^{6}-12x^{4}+47x^{2}-60"),
            "The leading term is $x^{6}$, and the leading coefficients $1$ and $1$ do not cancel. The nested highest power is $x^{6}$, so the statement is True."),
        expl("E", False,
            "A common linear factor would have to appear in both factorisations.",
            D(r"f(x)=x(x-1)(x+1)"),
            D(r"g(x)=(x-2)(x+2)"),
            "The two lists of real linear factors are disjoint. No common real linear factor exists, so the statement is False."),
    ]
    return overview, letters


def mixed_e15():
    p2 = expand((x - 1) ** 2 * (x - 2))
    must(simplify(expand((x - 1) ** 2 * (x - 1)) - (x - 1) ** 3) == 0, "e15 triple")
    must(ev(diff(p2, x), 1) == 0, "e15 p'")
    overview = ov(
        "The family keeps a double root at $x=1$ and lets a simple root slide with $a$.",
        D(r"p_{a}(x)=(x-1)^{2}(x-a)=x^{3}-(a+2)x^{2}+(2a+1)x-a"),
        "Every member is a monic cubic. Distinct zeros ignore multiplicity: one when $a=1$, two otherwise. An $x^{2}$ term destroys oddness.",
    )
    letters = [
        expl("A", True,
            "When the sliding root lands on the double root, the two factors coalesce into a single triple factor.",
            D(r"p_{1}(x)=(x-1)^{2}(x-1)=(x-1)^{3}"),
            "That is a root of multiplicity $3$ at $x=1$. The named parameter is exactly the coalescence case, so the statement is True."),
        expl("B", True,
            "A double root is a root of the derivative, independently of where the remaining simple root sits. For $a=2$ the double root at $1$ survives.",
            D(r"p_{2}(x)=(x-1)^{2}(x-2)"),
            D(r"p_{2}'(x)=2(x-1)(x-2)+(x-1)^{2}=(x-1)(3x-5)"),
            "The factor $x-1$ survives in $p_{2}'$, hence $p_{2}'(1)=0$. The derivative vanishes there, so the statement is True."),
        expl("C", True,
            "The parameter $a$ never touches the coefficient of $x^{3}$. Expand the leading term of the family.",
            D(r"p_{a}(x)=(x-1)^{2}(x-a)=x^{3}-(a+2)x^{2}+\cdots"),
            "The leading coefficient is $1$ for every real $a$. Every member is a monic cubic, so the statement is True."),
        expl("D", False,
            "Distinct zeros ignore multiplicity. For $a=2$ the factors are $(x-1)^{2}$ and $(x-2)$.",
            D(r"p_{2}(x)=(x-1)^{2}(x-2)"),
            D(r"x=1\qquad x=2"),
            "Those are two distinct abscissas, not three. Only two distinct real zeros occur, so the statement is False."),
        expl("E", False,
            "Oddness requires only odd powers. The $a=0$ member still carries an $x^{2}$ term from the double root at $1$.",
            D(r"p_{0}(x)=x(x-1)^{2}=x^{3}-2x^{2}+x"),
            "The $x^{2}$ term survives, so $p_{0}(-x)\\neq -p_{0}(x)$. A zero intercept is not enough for oddness. So $p_{0}$ is not odd, so the statement is False."),
    ]
    return overview, letters


def mixed_e16():
    p = expand((x - 2) ** 2 * (x + 1))
    dp = expand(diff(p, x))
    must(p == expand(x ** 3 - 3 * x ** 2 + 4), "e16 poly")
    must(ev(dp, 2) == 0 and ev(dp, -1) == 9, "e16 p'")
    overview = ov(
        "Monic normalisation plus the stated multiplicities pin the product down: a touch at $x=2$ and a simple crossing at $x=-1$.",
        D(r"p(x)=(x-2)^{2}(x+1)=x^{3}-3x^{2}+4"),
        "A double root flattens $p'$. Vieta reads the multiplicity-weighted root sum as minus the $x^{2}$ coefficient. Distinct zeros ignore multiplicity.",
    )
    letters = [
        expl("A", True,
            "The unique monic cubic with a double root at $2$ and a simple root at $-1$ is the product of those monic linear factors.",
            D(r"p(x)=(x-2)^{2}(x+1)"),
            D(r"p(x)=(x^{2}-4x+4)(x+1)=x^{3}-3x^{2}+4"),
            "Each factor is monic, and the square is forced by the touch. That product is the displayed factorisation, so the statement is True."),
        expl("B", True,
            "A double root is a root of the derivative. Differentiate the rebuilt cubic and substitute $x=2$.",
            D(r"p'(x)=3x^{2}-6x=3x(x-2)"),
            D(r"p'(2)=0"),
            "The factor $x-2$ survives in $p'$, so the touch is flat. The derivative vanishes at the double root, so the statement is True."),
        expl("C", True,
            "The root at $-1$ is simple, so it need not flatten $p'$. Substitute into the derivative.",
            D(r"p'(x)=3x^{2}-6x"),
            D(r"p'(-1)=3+6=9\neq 0"),
            "The simple crossing is not a stationary point. The claimed inequality holds, so the statement is True."),
        expl("D", True,
            "Vieta for a monic cubic reads the multiplicity-weighted root sum as minus the coefficient of $x^{2}$. Count the double root twice.",
            D(r"2\cdot 2+(-1)=3"),
            D(r"p(x)=x^{3}-3x^{2}+4"),
            "Minus the $x^{2}$ coefficient is $-(-3)=3$. The two readings agree. The multiplicity-weighted root sum equals $3$, so the statement is True."),
        expl("E", False,
            "Distinct abscissas ignore multiplicity. The rebuilt cubic vanishes only at $2$ and at $-1$.",
            D(r"p(x)=(x-2)^{2}(x+1)"),
            D(r"x=2\qquad x=-1"),
            "Those are two distinct zeros, not three. Multiplicity total $3$ is not three distinct roots. Two distinct real zeros occur, so the statement is False."),
    ]
    return overview, letters


def mixed_e17():
    p = expand(x ** 2 - 1)
    q = expand(x ** 2 + 1)
    must(expand(q.subs(x, p)) == expand(x ** 4 - 2 * x ** 2 + 2), "e17 qp")
    must(expand(p.subs(x, q)) == expand(x ** 4 + 2 * x ** 2), "e17 pq")
    overview = ov(
        "Both maps are even quadratics.",
        D(r"p(x)=x^{2}-1\qquad q(x)=x^{2}+1"),
        "Nesting multiplies degrees: $2\\cdot 2=4$ in either order. Expanding gives different quartics. An even inner map makes any outer function of it even.",
    )
    letters = [
        expl("A", True,
            "Nesting multiplies highest powers. Each map has degree $2$, so both orders have degree $4$. Expand to confirm nothing cancels.",
            D(r"q(p(x))=(x^{2}-1)^{2}+1=x^{4}-2x^{2}+2"),
            D(r"p(q(x))=(x^{2}+1)^{2}-1=x^{4}+2x^{2}"),
            "Each expansion begins with $x^{4}$. Both nested highest powers are $x^{4}$, so the statement is True."),
        expl("B", True,
            "A nested value is computed inside-out: evaluate $p$ at $0$, then feed that number into $q$.",
            D(r"p(0)=-1"),
            D(r"q(p(0))=q(-1)=1+1=2"),
            "The nested value is $2$. Expanding $q(p(x))=x^{4}-2x^{2}+2$ and substituting $x=0$ gives the same $2$. The named value matches, so the statement is True."),
        expl("C", True,
            "The other order at the same input is a different composition. Evaluate $q$ at $0$, then feed that number into $p$.",
            D(r"q(0)=1"),
            D(r"p(q(0))=p(1)=1-1=0"),
            "The nested value is $0$. Expanding $p(q(x))=x^{2}(x^{2}+2)$ displays a factor $x^{2}$, which vanishes at the origin. The named value matches, so the statement is True."),
        expl("D", True,
            "The outer map $q(u)=u^{2}+1$ is at least $1$ for every real $u$, so composing it with anything never hits height $0$.",
            D(r"q(p(x))=(x^{2}-1)^{2}+1\ge 1"),
            "Equivalently $x^{4}-2x^{2}+2=(x^{2}-1)^{2}+1$ has no real root. There is no real root, so the statement is True."),
        expl("E", True,
            "An even inner map makes any outer function of it even, and an even outer map composed with anything even in $x$ is even as well.",
            D(r"q(p(-x))=q(p(x))"),
            D(r"p(q(-x))=p(q(x))"),
            "Both expansions contain only even powers. Both nestings are even functions, so the statement is True."),
    ]
    return overview, letters


def mixed_e18():
    p = expand((x - 1) * (x + 1) * (x - 2))
    dp = expand(diff(p, x))
    must(p == expand(x ** 3 - 2 * x ** 2 - x + 2), "e18 poly")
    must(ev(dp, 1) == -2, "e18 p'")
    overview = ov(
        "The cubic is already a product of three distinct monic linear factors.",
        D(r"p(x)=(x-1)(x+1)(x-2)=x^{3}-2x^{2}-x+2"),
        "Simple roots are crossings, not stationary points. Vieta reads the root sum as minus the $x^{2}$ coefficient. A nonzero intercept kills oddness.",
    )
    letters = [
        expl("A", True,
            "Three distinct linear factors, each to the first power, give three distinct real zeros.",
            D(r"p(x)=(x-1)(x+1)(x-2)"),
            D(r"x=-1,\ 1,\ 2"),
            "None of the factors repeats, so none of the zeros is multiple. The count is three, so the statement is True."),
        expl("B", False,
            "The root at $x=1$ is simple, so it need not flatten $p'$. Differentiate and substitute.",
            D(r"p'(x)=3x^{2}-4x-1"),
            D(r"p'(1)=3-4-1=-2\neq 0"),
            "A simple root is a crossing, not a stationary point. The claimed vanishing of $p'$ at $1$ does not occur, so the statement is False."),
        expl("C", False,
            "Oddness requires $p(0)=0$ and $p(-x)=-p(x)$. The intercept is the constant term of the expansion.",
            D(r"p(0)=2\neq 0"),
            "A nonzero intercept kills oddness. The zeros $\\{-1,1,2\\}$ are not symmetric about the origin either. The cubic is not odd, so the statement is False."),
        expl("D", False,
            "Vieta for a monic cubic reads the sum of the roots as minus the coefficient of $x^{2}$. Add the three simple roots.",
            D(r"-1+1+2=2"),
            D(r"p(x)=x^{3}-2x^{2}-x+2"),
            "Minus the $x^{2}$ coefficient is $-(-2)=2$, not $0$. A vanishing $x^{2}$ term would have been needed for sum $0$. The root sum is $2$, not $0$, so the statement is False."),
        expl("E", False,
            "The intercept is the height at $x=0$, equivalently the constant term after expanding.",
            D(r"p(x)=(x-1)(x+1)(x-2)"),
            D(r"p(0)=(-1)(1)(-2)=2"),
            "That product is $2$, not $0$. A zero intercept would have required one of the factors to be $x$ itself. The intercept is $2$, so the statement is False."),
    ]
    return overview, letters


def mixed_e19():
    p = expand((x - 2) ** 2 * (x + 1))
    must([int(p.subs(x, v)) for v in [-1, 0, 1, 2, 3]] == [0, 4, 2, 0, 4], "e19 table")
    overview = ov(
        "The ticks show a touch at $x=2$ and a simple crossing at $x=-1$; the intercept sits at height $4$.",
        D(r"p(x)=(x-2)^{2}(x+1)=x^{3}-3x^{2}+4"),
        "Letters A–C are figure readings; D–E are table lookups. The factor theorem is a column lookup: a factor $x-r$ needs a vanishing sample at $x=r$.",
    )
    letters = [
        expl("A", True,
            "An axis meeting is a distinct abscissa of height zero. The figure shows one touch (flattening) at $x=2$ and one simple crossing at $x=-1$.",
            D(r"p(x)=(x-2)^{2}(x+1)"),
            "A touch still counts as one meeting, not two. Nowhere else does the solid curve return to height $0$. Two distinct axis meetings are visible, so the statement is True."),
        expl("B", False,
            "The $y$-intercept is the height at $x=0$, read on the vertical axis and confirmed by substituting.",
            D(r"p(x)=(x-2)^{2}(x+1)"),
            D(r"p(0)=(-2)^{2}(1)=4"),
            "That height is positive, not negative. The claimed sign is the wrong one, so the statement is False."),
        expl("C", False,
            "Oddness needs a zero intercept and a half-turn about the origin.",
            D(r"p(0)=4\neq 0"),
            "A positive intercept already kills oddness. The touch at $2$ has no matching touch at $-2$. The figure is not origin-symmetric, so the statement is False."),
        expl("D", True,
            "This letter is a table lookup. The factor theorem at $x=-1$ is the corresponding column: $x+1$ divides $p$ if and only if that entry is $0$.",
            D(r"x=-1,0,1,2,3"),
            D(r"p=0,\ 4,\ 2,\ 0,\ 4"),
            "The $x=-1$ sample vanishes. The factor test passes, so the statement is True."),
        expl("E", False,
            "The factor theorem at $x=0$ is the intercept column, not the mere presence of a $0$ heading.",
            D(r"p(0)=4"),
            "That entry is not zero. A heading labelled $0$ is the input, not the height. The factor $x$ fails the table test, so the statement is False."),
    ]
    return overview, letters


def mixed_e20():
    overview = ov(
        "The five letters do not share a polynomial. Each micro-scenario is settled in its own letter: a vertical shift of $x^{3}-x$, the derivative of $x^{3}-4x$, a Vieta sum, oddness of $-x^{3}+3x$, and a biquadratic factorisation.",
        D(r"x^{3}-x+2\qquad 3x^{2}-4\qquad (x^{2}-1)(x^{2}-4)"),
        "A vertical shift preserves turning abscissas but can change the number of axis meetings.",
    )
    letters = [
        expl("A", False,
            "A vertical shift preserves turning abscissas but can change the number of axis meetings. The unshifted cubic $x^{3}-x$ has local max/min of height $\\pm 2/(3\\sqrt{3})\\approx\\pm 0.38$, much smaller than the shift $2$.",
            D(r"q(x)=x^{3}-x+2"),
            "Those tiny turning heights sit well below $2$, so only the left-hand tail still crosses the axis. The translated cubic keeps one real root, not three, so the statement is False."),
        expl("B", True,
            "Evenness of a derivative is a coefficient reading. Differentiate $g(x)=x^{3}-4x$ and inspect the powers.",
            D(r"g'(x)=3x^{2}-4"),
            D(r"g'(-x)=g'(x)"),
            "Only even powers appear, so $g'$ is even. Differentiating an odd cubic always produces an even quadratic of this shape. The derivative is even, so the statement is True."),
        expl("C", False,
            "Vieta for a monic cubic reads the sum of the roots, not an arbitrary integer. Add the three simple factors.",
            D(r"p(x)=(x+1)(x-1)(x-2)"),
            D(r"-1+1+2=2"),
            "Minus the $x^{2}$ coefficient of $x^{3}-2x^{2}-x+2$ is likewise $2$, not $8$. The claimed root sum is wrong, so the statement is False."),
        expl("D", True,
            "Oddness is the identity $h(-x)=-h(x)$, which holds as soon as only odd powers appear. The constant term of an odd map must be $0$.",
            D(r"h(x)=-x^{3}+3x"),
            D(r"h(-x)=x^{3}-3x=-h(x)"),
            D(r"h(0)=0"),
            "Both halves of the claim hold. The map is odd and vanishes at the origin, so the statement is True."),
        expl("E", True,
            "A biquadratic is a quadratic in $x^{2}$, so factor it as such and then split each difference of squares.",
            D(r"x^{4}-5x^{2}+4=(x^{2}-1)(x^{2}-4)"),
            D(r"(x-1)(x+1)(x-2)(x+2)"),
            "Four distinct real linear factors appear. The quartic factors completely over the reals, so the statement is True."),
    ]
    return overview, letters


def mixed_e21():
    p = expand((x ** 2 - 1) ** 2)
    must(p == expand(x ** 4 - 2 * x ** 2 + 1), "e21 poly")
    overview = ov(
        "Both edges of the window sit well above the axis and rise as they leave — even-degree behaviour with positive lead. Two touches at $x=\\pm 1$ and intercept $+1$ force",
        D(r"p(x)=(x^{2}-1)^{2}=x^{4}-2x^{2}+1"),
        "Mirror symmetry across the vertical axis is evenness, the opposite of oddness. The dashed mark is $y=1$.",
    )
    letters = [
        expl("A", True,
            "End behaviour of an even-degree polynomial with positive lead is that both arms rise. Rebuild from the ticks: two touches at $\\pm 1$ and a positive intercept force the monic even quartic",
            D(r"p(x)=(x-1)^{2}(x+1)^{2}=x^{4}-2x^{2}+1"),
            D(r"\lim_{|x|\to\infty}p(x)=+\infty"),
            "The leading term $x^{4}$ is positive for large $|x|$ on both sides. The solid graph tends to $+\\infty$ in both directions, so the statement is True."),
        expl("B", True,
            "An axis meeting is a distinct abscissa of height zero. Each meeting here is a touch, at $x=\\pm 1$.",
            D(r"p(x)=(x^{2}-1)^{2}"),
            D(r"p(0)=1\neq 0"),
            "The intercept is $+1$, so the curve does not return to height $0$ elsewhere in the window. Two distinct axis meetings (both tangencies) are visible, so the statement is True."),
        expl("C", False,
            "Oddness is a half-turn about the origin. The figure is instead mirrored across the vertical axis, which is evenness.",
            D(r"p(-x)=p(x)"),
            D(r"p(0)=1\neq 0"),
            "A positive intercept already kills oddness. Even is the opposite of odd. The solid graph is not odd, so the statement is False."),
        expl("D", False,
            "The $y$-intercept is the height at $x=0$, read above the origin on the vertical axis.",
            D(r"p(x)=(x^{2}-1)^{2}"),
            D(r"p(0)=1"),
            "That height is positive, not negative. The claimed sign is the wrong one, so the statement is False."),
        expl("E", False,
            "Meetings with the dashed mark $y=1$ (the horizontal through the intercept) solve $p(x)=1$.",
            D(r"p(x)-1=x^{2}(x^{2}-2)"),
            "Three real solutions appear: $x=0$ (a touch at the local max) and $x=\\pm\\sqrt{2}$, all inside the window. The claim asks for exactly two. Three meetings occur, not two, so the statement is False."),
    ]
    return overview, letters


def mixed_e22():
    p = expand((x ** 2 - 1) ** 2)
    layers = diffs([-2, -1, 0, 1, 2], p)
    must(layers[0] == [9, 0, 1, 0, 9], "e22 ys")
    overview = ov(
        "Five equally spaced raw samples, no difference columns printed. Third differences still change sign, so the interpolant is not cubic.",
        D(r"p(x)=(x-1)^{2}(x+1)^{2}=x^{4}-2x^{2}+1"),
        "The factor theorem is a column lookup. The palindromic sample row $9,0,1,0,9$ is the signature of an even quartic.",
    )
    letters = [
        expl("A", True,
            "A cubic on unit spacing would freeze at the third-difference layer. Compute the pyramid from the listed row.",
            D(r"9,\ 0,\ 1,\ 0,\ 9"),
            D(r"\Delta_{3}:\ -12,\ 12"),
            "Those third differences still change sign, so a cubic interpolant cannot fit all five samples. The claim is exactly that diagnosis, so the statement is True."),
        expl("B", True,
            "The factor theorem at $x=1$ is the corresponding table column: $x-1$ divides the interpolant if and only if that entry is $0$.",
            D(r"p(1)=0"),
            "The $x=1$ sample vanishes. The even quartic $(x-1)^{2}(x+1)^{2}$ that matches the palindromic row displays that factor with multiplicity $2$. The factor test passes, so the statement is True."),
        expl("C", True,
            "The same theorem at $x=-1$ is the corresponding column.",
            D(r"p(-1)=0"),
            "The $x=-1$ sample vanishes, so $x+1$ is a factor. Evenness of the sample row already predicted this matching pair of zeros. The factor test passes, so the statement is True."),
        expl("D", False,
            "Constant first differences are the signature of a line. Compute that layer from the listed samples.",
            D(r"\Delta_{1}:\ -9,\ 1,\ -1,\ 9"),
            "Those first differences are not constant. A linear interpolant is impossible. First differences are not constant, so the statement is False."),
        expl("E", False,
            "The middle $x$-label is $0$, but the factor theorem asks for the $p$-value there, not for the heading.",
            D(r"p(0)=1"),
            "The intercept sample is $1$, not $0$. A heading labelled $0$ is the input, not the height. The factor $x$ fails the table test, so the statement is False."),
    ]
    return overview, letters


def mixed_e23():
    s = expand(n * (n - 2) * (n - 4))
    layers = diffs([0, 1, 2, 3, 4, 5], s, n)
    must(layers[0] == [0, 3, 0, -3, 0, 15], "e23 ys")
    must(layers[3] == [6, 6, 6], "e23 d3")
    overview = ov(
        "The warehouse ledger is the only source. Third differences freeze at $6=3!\\cdot 1$, so a monic cubic is consistent with every listed day.",
        D(r"s(n)=n(n-2)(n-4)=n^{3}-6n^{2}+8n"),
        "Zero deviation means a tabulated $0$: that happens on days $0$, $2$ and $4$. The factor theorem is a column lookup.",
    )
    letters = [
        expl("A", True,
            "On unit spacing the third differences of a cubic $an^{3}+\\cdots$ are constantly $3!\\,a=6a$. Compute the pyramid from the deviation row.",
            D(r"0,\ 3,\ 0,\ -3,\ 0,\ 15"),
            D(r"\Delta_{3}:\ 6,\ 6,\ 6"),
            "The third layer is constantly $6$, hence $a=1$. A cubic with leading coefficient $1$ is consistent with the ledger, so the statement is True."),
        expl("B", True,
            "Zero deviation is a tabulated $0$ in the stock row. Read the six recorded days one by one.",
            D(r"n=0,1,2,3,4,5"),
            D(r"s=0,\ 3,\ 0,\ -3,\ 0,\ 15"),
            "The stock sits on target on days $0$, $2$ and $4$, and at no other recorded close. Three recorded zeros occur, so the statement is True."),
        expl("C", True,
            "The factor theorem at day $2$ is the corresponding column: $n-2$ divides the model if and only if $s(2)=0$.",
            D(r"s(2)=0"),
            "That column vanishes. Equivalently, the unique monic cubic through the three zeros $0,2,4$ is $n(n-2)(n-4)$, which displays the factor. The factor test passes, so the statement is True."),
        expl("D", True,
            "The opening deviation is the intercept of the ledger, the height at $n=0$.",
            D(r"s(0)=0"),
            "The first column is already a tabulated $0$. The warehouse opens on target, so the statement is True."),
        expl("E", False,
            "A quadratic on unit spacing would freeze at the second-difference layer. Compute that layer from the deviation row.",
            D(r"\Delta_{2}:\ -6,\ 0,\ 6,\ 12"),
            "Those second differences still move, so a quadratic cannot fit every listed day. The ledger needs a cubic. The ledger is not quadratic, so the statement is False."),
    ]
    return overview, letters


def mixed_e24():
    p = expand(x * (x ** 2 - 4))
    must(p == expand(x ** 3 - 4 * x), "e24 poly")
    must(Poly(expand(p.subs(x, x ** 2)), x).degree() == 6, "e24 nest")
    overview = ov(
        "The cubic is given as a product, which already displays the three real linear factors.",
        D(r"p(x)=x(x^{2}-4)=x(x-2)(x+2)=x^{3}-4x"),
        "Only odd powers appear, so $p$ is odd. Vieta reads the root sum as minus the $x^{2}$ coefficient. Nesting multiplies degrees: substituting $x^{2}$ produces $x^{6}$.",
    )
    letters = [
        expl("A", True,
            "Oddness is the identity $p(-x)=-p(x)$, which holds as soon as only odd powers appear.",
            D(r"p(x)=x^{3}-4x"),
            D(r"p(-x)=-x^{3}+4x=-p(x)"),
            "There is no even-power term and no leftover constant. The cubic is odd, so the statement is True."),
        expl("B", True,
            "The factor theorem at $x=2$ is immediate from the given product, or from substituting.",
            D(r"p(x)=x(x-2)(x+2)"),
            D(r"p(2)=2\cdot 0\cdot 4=0"),
            "The factor $x-2$ is visible before any expansion. So $x-2$ divides $p$, so the statement is True."),
        expl("C", True,
            "Vieta for a monic cubic reads the multiplicity-weighted root sum as minus the $x^{2}$ coefficient. Add the three simple roots.",
            D(r"-2+0+2=0"),
            D(r"p(x)=x^{3}-4x"),
            "The $x^{2}$ coefficient is already $0$, matching the sum. The multiplicity-weighted root sum is $0$, so the statement is True."),
        expl("D", True,
            "Nesting multiplies highest powers: substituting $x^{2}$ into a cubic produces degree $3\\cdot 2=6$.",
            D(r"p(x^{2})=x^{2}((x^{2})^{2}-4)=x^{6}-4x^{2}"),
            "The leading coefficient remains $1$, so the degree does not drop. The nested highest power is $x^{6}$, so the statement is True."),
        expl("E", True,
            "Three distinct linear factors display three distinct real zeros.",
            D(r"p(x)=x(x-2)(x+2)"),
            D(r"x=-2,\ 0,\ 2"),
            "None of the factors repeats. The count is three, so the statement is True."),
    ]
    return overview, letters


def mixed_e25():
    h2 = expand(x ** 2 * (x - 2))
    must(h2 == expand(x ** 3 - 2 * x ** 2), "e25 h2")
    must(ev(diff(h2, x), 0) == 0, "e25 h'")
    overview = ov(
        "The family keeps a double root at the origin and lets the simple root slide with $k$.",
        D(r"h_{k}(x)=x^{2}(x-k)=x^{3}-kx^{2}"),
        "Every member is a monic cubic, so the right end always rises. An $x^{2}$ term destroys oddness as soon as $k\\neq 0$. The intercept is $0$ for every $k$.",
    )
    letters = [
        expl("A", False,
            "Oddness requires only odd powers. Expanding the family shows an $x^{2}$ term as soon as $k\\neq 0$.",
            D(r"h_{k}(x)=x^{3}-kx^{2}"),
            "That even-power term survives for every $k\\neq 0$, so $h_{k}(-x)\\neq -h_{k}(x)$ in general. Only the special case $k=0$ gives the odd map $x^{3}$. Oddness fails as soon as $k\\neq 0$, so the statement is False."),
        expl("B", True,
            "Distinct zeros ignore multiplicity. For $k=2$ the factors are $x^{2}$ and $x-2$.",
            D(r"h_{2}(x)=x^{2}(x-2)"),
            D(r"x=0\qquad x=2"),
            "Those are two distinct abscissas: a double root at the origin and a simple root at $2$. Exactly two distinct real zeros occur, so the statement is True."),
        expl("C", False,
            "A double root flattens the derivative. For $k=2$ the double root is pinned at the origin, so differentiate and substitute.",
            D(r"h_{2}'(x)=3x^{2}-4x=x(3x-4)"),
            D(r"h_{2}'(0)=0"),
            "The claimed inequality is the wrong way around: the derivative does vanish at $0$. The double-root rule applies, so the statement is False."),
        expl("D", False,
            "Every member is monic of odd degree, so the right end follows $x^{3}$ upward. For the named parameter,",
            D(r"h_{2}(x)=x^{3}-2x^{2}"),
            D(r"\lim_{x\to+\infty}h_{2}(x)=+\infty"),
            "The leading term $x^{3}$ is positive for large positive $x$. The right end rises, not falls, so the statement is False."),
        expl("E", False,
            "The double factor $x^{2}$ forces every graph through the origin, independently of $k$.",
            D(r"h_{2}(0)=0"),
            "The intercept is $0$, not $2$. A claimed intercept $2$ would have needed a leftover constant term, which the family never has. The intercept is $0$, so the statement is False."),
    ]
    return overview, letters


def mixed_e26():
    p = expand((x + 2) * (x - 1) * (x - 3))
    dp = expand(diff(p, x))
    must(p == expand(x ** 3 - 2 * x ** 2 - 5 * x + 6), "e26 poly")
    must(ev(p, 0) == 6, "e26 intercept")
    must(ev(dp, 1) == -6, "e26 p'")
    overview = ov(
        "Three distinct simple zeros and a monic leading term force the product of the three monic linear factors.",
        D(r"p(x)=(x+2)(x-1)(x-3)=x^{3}-2x^{2}-5x+6"),
        "Vieta reads the root sum as minus the $x^{2}$ coefficient. Simple roots are crossings, not stationary points. Mixed even and odd powers kill evenness.",
    )
    letters = [
        expl("A", True,
            "The unique monic cubic with simple zeros at $-2$, $1$ and $3$ is the product of those three monic linear factors.",
            D(r"p(x)=(x+2)(x-1)(x-3)"),
            D(r"p(x)=x^{3}-2x^{2}-5x+6"),
            "Each factor is monic and to the first power. That product is the displayed factorisation, so the statement is True."),
        expl("B", True,
            "Vieta for a monic cubic reads the sum of the roots as minus the coefficient of $x^{2}$. Add the three simple roots.",
            D(r"-2+1+3=2"),
            D(r"p(x)=x^{3}-2x^{2}-5x+6"),
            "Minus the $x^{2}$ coefficient is $-(-2)=2$. The two readings agree. The Vieta sum is $2$, so the statement is True."),
        expl("C", False,
            "The intercept is the constant term, equivalently the signed product of the roots.",
            D(r"p(0)=(2)(-1)(-3)=6"),
            "The claimed value $-6$ has the wrong sign: it would have needed an odd number of negative constant pieces, but two of the three are negative. The intercept is $6$, not $-6$, so the statement is False."),
        expl("D", False,
            "Evenness requires $p(-x)=p(x)$ and a zero set symmetric about the origin. The zeros $-2,1,3$ are not symmetric about $0$.",
            D(r"p(x)=x^{3}-2x^{2}-5x+6"),
            "The expansion mixes even and odd powers. A surviving $x^{3}$ term kills evenness. The rebuilt cubic is not even, so the statement is False."),
        expl("E", False,
            "Simple roots are crossings, not stationary points. Differentiate and substitute one of them.",
            D(r"p'(x)=3x^{2}-4x-5"),
            D(r"p'(1)=3-4-5=-6\neq 0"),
            "Likewise $p'(-2)=15$ and $p'(3)=10$. The derivative does not vanish at the three zeros, so the statement is False."),
    ]
    return overview, letters


def mixed_e27():
    p = expand(x - 1)
    q = expand(x ** 3 - x)
    qp = expand(q.subs(x, p))
    pq = expand(p.subs(x, q))
    must(factor(qp) == x * (x - 1) * (x - 2), "e27 qp")
    must(pq == expand(x ** 3 - x - 1), "e27 pq")
    overview = ov(
        "The inner map is an affine shift and the outer map is an odd cubic.",
        D(r"p(x)=x-1\qquad q(x)=x^{3}-x"),
        "Degree $3$ times degree $1$ is $3$ in either order. Expanding gives different cubics, so the compositions do not commute. The factor theorem is a substitution into the nesting.",
    )
    letters = [
        expl("A", True,
            "Nesting multiplies highest powers: $3\\cdot 1=3$ in either order. Expand both nestings to confirm nothing drops degree.",
            D(r"q(p(x))=(x-1)^{3}-(x-1)=x(x-1)(x-2)"),
            D(r"p(q(x))=x^{3}-x-1"),
            "Each expansion is cubic. Both nested highest powers are $x^{3}$, so the statement is True."),
        expl("B", True,
            "The factor theorem at $x=1$ asks whether $q(p(1))$ vanishes. The inner shift vanishes at $1$, and $q(0)=0$.",
            D(r"q(p(1))=q(0)=0"),
            D(r"q(p(x))=x(x-1)(x-2)"),
            "The linear factor $x-1$ is visible in the factorisation. So $x-1$ divides the nesting, so the statement is True."),
        expl("C", True,
            "The same theorem at $x=0$ asks whether $q(p(0))$ vanishes.",
            D(r"q(p(0))=q(-1)=0"),
            "The factorisation $x(x-1)(x-2)$ already displays the factor $x$. So $x$ divides $q(p(x))$, so the statement is True."),
        expl("D", False,
            "Equal nested degree does not make the two compositions the same polynomial. Compare the expansions at a single point.",
            D(r"q(p(x))=x(x-1)(x-2)"),
            D(r"p(q(x))=x^{3}-x-1"),
            "They already disagree at $x=0$: $0$ versus $-1$. Nesting does not commute, so the statement is False."),
        expl("E", False,
            "A nested value is computed inside-out: evaluate $q$ at $0$, then feed that number into $p$.",
            D(r"q(0)=0"),
            D(r"p(q(0))=p(0)=-1"),
            "The nested value is $-1$, not $0$. The other order $q(p(0))$ does vanish, which is a different composition. The nested value is $-1$, so the statement is False."),
    ]
    return overview, letters


def mixed_e28():
    p = expand(x * (x - 2) ** 2)
    dp = expand(diff(p, x))
    must(p == expand(x ** 3 - 4 * x ** 2 + 4 * x), "e28 poly")
    must(ev(dp, 2) == 0 and ev(dp, 0) == 4, "e28 p'")
    overview = ov(
        "The cubic is already factored, so the simple root and the double root are visible before expanding.",
        D(r"p(x)=x(x-2)^{2}=x^{3}-4x^{2}+4x"),
        "A double root flattens $p'$; a simple root does not. Vieta counts the double root twice. An $x^{2}$ term destroys oddness.",
    )
    letters = [
        expl("A", True,
            "The factor $x$ appears to the first power only, so the origin is a simple root. Confirm by checking that $p'$ does not vanish there.",
            D(r"p'(x)=3x^{2}-8x+4=(3x-2)(x-2)"),
            D(r"p'(0)=4\neq 0"),
            "A simple root is a crossing, not a stationary point. The origin is simple, so the statement is True."),
        expl("B", True,
            "A double root is a root of the derivative. The squared factor is $(x-2)^{2}$, so $x=2$ must flatten $p'$.",
            D(r"p'(x)=(3x-2)(x-2)"),
            D(r"p'(2)=0"),
            "The factor $x-2$ survives in $p'$. The double root is stationary, so the statement is True."),
        expl("C", True,
            "Distinct zeros ignore the exponent on $(x-2)^{2}$. The cubic vanishes only where a linear piece vanishes.",
            D(r"p(x)=x(x-2)^{2}"),
            D(r"x=0\qquad x=2"),
            "Those are two distinct abscissas, not three. Exactly two distinct real zeros occur, so the statement is True."),
        expl("D", False,
            "Oddness requires only odd powers. Expanding produces an $x^{2}$ term from the double root off the origin.",
            D(r"p(x)=x^{3}-4x^{2}+4x"),
            D(r"p(1)=1\qquad -p(-1)=9"),
            "Those two sample values disagree, so $p(-x)\\neq -p(x)$. A zero intercept is not enough for oddness. The cubic is not odd, so the statement is False."),
        expl("E", True,
            "Vieta for a monic cubic reads the multiplicity-weighted root sum as minus the $x^{2}$ coefficient. Count the double root twice.",
            D(r"0+2+2=4"),
            D(r"p(x)=x^{3}-4x^{2}+4x"),
            "Minus the $x^{2}$ coefficient is $-(-4)=4$. The two readings agree. The multiplicity-weighted root sum is $4$, so the statement is True."),
    ]
    return overview, letters


def mixed_e29():
    p = expand((x + 1) * (x - 1) * (x - 2))
    must([int(p.subs(x, v)) for v in [-1, 0, 1, 2, 3]] == [0, 2, 0, 0, 8], "e29 table")
    overview = ov(
        "The ticks show three simple crossings, aligned with $-1$, $1$ and $2$. The intercept sits at height $2$, coinciding with the dashed mark.",
        D(r"p(x)=(x+1)(x-1)(x-2)=x^{3}-2x^{2}-x+2"),
        "Letters A–C are figure readings; D–E are table lookups. Meetings with $y=2$ solve $p(x)-2=0$.",
    )
    letters = [
        expl("A", True,
            "An axis meeting is a distinct abscissa of height zero. The figure shows three simple crossings: one left of the origin and two to its right.",
            D(r"p(x)=(x+1)(x-1)(x-2)"),
            "Each factor is simple, so each crossing is a distinct meeting. Three distinct axis meetings are visible, so the statement is True."),
        expl("B", True,
            "The $y$-intercept is the height at $x=0$, read above the origin on the vertical axis and confirmed by substituting.",
            D(r"p(x)=(x+1)(x-1)(x-2)"),
            D(r"p(0)=(1)(-1)(-2)=2"),
            "That height is positive. It also coincides with the dashed mark. The $y$-intercept is positive, so the statement is True."),
        expl("C", True,
            "Meetings with the dashed mark $y=2$ solve $p(x)=2$. Bring every term to one side and factor.",
            D(r"p(x)-2=x(x^{2}-2x-1)"),
            "Three real solutions appear: $x=0$ and $x=1\\pm\\sqrt{2}$, all inside the window. Three distinct solid–dashed meetings occur, so the statement is True."),
        expl("D", True,
            "This letter is a table lookup. The factor theorem at $x=1$ is the corresponding column: $x-1$ divides $p$ if and only if that entry is $0$.",
            D(r"x=-1,0,1,2,3"),
            D(r"p=0,\ 2,\ 0,\ 0,\ 8"),
            "The $x=1$ sample vanishes. The factor test passes, so the statement is True."),
        expl("E", True,
            "The same theorem at $x=2$ is the corresponding column.",
            D(r"p(2)=0"),
            "The $x=2$ sample vanishes, so $x-2$ is a factor. That matches the third linear piece of the rebuilt cubic. The factor test passes, so the statement is True."),
    ]
    return overview, letters


def mixed_e30():
    must(ev(expand(x ** 3 + x ** 2 - x - 1), -1) == 0, "e30 B")
    overview = ov(
        "The five letters do not share a polynomial. Each micro-scenario is settled in its own letter: a meeting equation, a substitution, an interpolation degree, the real roots of $x^{3}+8$, and the left-end sign of a cubic with negative lead.",
        D(r"x^{3}-3x=0\qquad (x+1)^{2}(x-1)\qquad x^{3}+8"),
        "Three samples never force a degree: extra nodal factors can raise it while keeping the same values.",
    )
    letters = [
        expl("A", True,
            "Meeting points of two graphs are the solutions of $f=g$, brought to one side. Set $x^{3}$ equal to $3x$ and rearrange.",
            D(r"x^{3}-3x=0"),
            D(r"x(x^{2}-3)=0"),
            "That is exactly the identity named in the claim. The meeting equation is $x^{3}-3x=0$, so the statement is True."),
        expl("B", False,
            "A claimed evaluation is a substitution, not a guess. Group $p(x)=x^{3}+x^{2}-x-1$ to expose a factor.",
            D(r"p(x)=(x^{3}-x)+(x^{2}-1)=(x+1)^{2}(x-1)"),
            D(r"p(-1)=0"),
            "The value is $0$, not $2$. Mixing up the leftover constant with the value at $-1$ is how $2$ appears. The actual height is $0$, so the statement is False."),
        expl("C", False,
            "Three samples never pin the degree. The cubic $x^{3}+x$ interpolates $p(n)=n^{3}+n$ at $n=0,1,2$, but so does any extra multiple of the three nodal factors.",
            D(r"r(x)=x^{3}+x+c\,x(x-1)(x-2)"),
            "Whenever $c\\neq 0$ that interpolant has degree $4$ and still matches the three samples. A cubic interpolant exists, but it is not forced, so the statement is False."),
        expl("D", False,
            "The map $x^{3}$ is strictly increasing, so $x^{3}+8=0$ has the unique real solution $x=-2$. Factor to see the other two roots are not real.",
            D(r"x^{3}+8=(x+2)(x^{2}-2x+4)"),
            "The quadratic has discriminant $4-16<0$, so it never vanishes. Three distinct real roots do not occur, so the statement is False."),
        expl("E", False,
            "Odd degree with negative lead sends the left end up, not down. Track the sign of $-x^{3}$ as $x\\to-\\infty$.",
            D(r"x\to-\infty\implies x^{3}\to-\infty"),
            D(r"-x^{3}\to+\infty"),
            "Multiplying a large negative cube by $-1$ flips it to $+\\infty$. The left end rises, so the statement is False."),
    ]
    return overview, letters


MIXED_BUILDERS = {
    f"math-9-e{i}": globals()[f"mixed_e{i:02d}"] for i in range(1, 31)
}


def formula_from_context(ctx: str) -> str | None:
    displays = re.findall(r"\$\$([^$]+)\$\$", ctx)
    if displays:
        inner = re.sub(r"\s+", " ", displays[0]).strip()
        if inner and "text" not in inner and len(inner) < 160:
            return inner
    m = re.search(r"Let\s+\$([^$]{0,120}?=[^$]{1,140})\$", ctx)
    if m:
        return re.sub(r"\s+", " ", m.group(1)).strip()
    return None


def strip_core_template(ov: str) -> str:
    ov = ov.replace(TEMPLATE_TAIL, "")
    ov = ov.replace(STEM_FIX, "")
    ov = re.sub(r"\n{3,}", "\n\n", ov)
    return ov.strip()


def core_overview(task: dict) -> str:
    """7.79 structural prep: unique to this stem, no letter-menu template."""
    ctx = task.get("context") or ""
    stmts = task.get("statements") or []
    kind = task.get("stem_kind") or ""
    given = formula_from_context(ctx)
    leftover = strip_core_template(task.get("solution_overview") or "")
    leftover_inner = leftover
    if given:
        compact_given = given.replace(" ", "")
        if leftover.replace(" ", "").replace("$", "") in {compact_given, ""}:
            leftover_inner = ""
    blob = " ".join(stmts).lower()

    facts: list[str] = []
    if any(k in blob for k in ("highest power", "leading coefficient")):
        facts.append(
            "Degree and the leading coefficient are read from the highest written power whose coefficient is not zero."
        )
    if re.search(r"\$[a-z]\([^)]*\)\s*=", " ".join(stmts)) or "p(0)" in blob:
        facts.append(
            "A value is obtained by substituting the named number and collecting powers."
        )
    if any(k in blob for k in ("odd", "even", "symmetric")):
        facts.append(
            "Parity is a coefficient reading: only odd powers make an odd map, only even powers make an even map."
        )
    if any(k in blob for k in ("factor", "root", "zero", "vieta")):
        facts.append(
            "The factor theorem is a substitution: $x-r$ divides a polynomial if and only if the value at $r$ is zero."
        )
    if any(k in blob for k in ("difference", "table", "sample")):
        facts.append(
            "On equally spaced samples, a frozen difference layer diagnoses the degree."
        )
    if any(k in blob for k in ("nest", "compos")):
        facts.append(
            "Nesting multiplies highest powers rather than adding them, and the two orders need not agree."
        )
    if "infty" in blob or r"\to" in blob:
        facts.append(
            "End behaviour follows the leading term alone."
        )
    if kind == "graph" or "figure" in ctx.lower():
        facts.append(
            "When no formula is printed, the polynomial is recovered from the visible zeros, intercept, and end behaviour."
        )
    if kind == "symbolic" and not given:
        facts.append(
            "No coefficients are fixed, so the reasoning runs on the structure of a general polynomial instead of on a single numerical example."
        )

    uniq: list[str] = []
    for f in facts:
        if f not in uniq:
            uniq.append(f)
    uniq = uniq[:2]

    parts: list[str] = []
    if kind == "graph":
        parts.append(
            "The figure prints no expanded formula, so the polynomial is recovered from the ticks: zeros, intercept, and the far-field sign."
        )
    elif kind == "table":
        parts.append(
            "The table is the whole stem: raw equally spaced samples, with no difference columns printed."
        )
    elif kind == "symbolic":
        parts.append(
            "Everything is stated for a general polynomial, so the reasoning runs on highest powers, parity, and the factor theorem instead of on a single numerical example."
        )
    elif kind == "parametric":
        parts.append(
            "The family is given explicitly, with the parameter sitting on a lower term, so the leading term never sees it."
        )
    elif kind == "applied":
        parts.append(
            "The model is a named polynomial of time, quantity, or cost; later claims are substitutions, derivatives, or tabled increments."
        )
    elif given:
        parts.append(
            "The stem names the polynomial that every later computation refers to."
        )
    else:
        parts.append(
            "The stem names the polynomial, the pair, or the multiplicity pattern that every later computation refers to."
        )

    if given:
        parts.append(D(given))

    if leftover_inner and leftover_inner not in "".join(parts):
        if STEM_FIX not in leftover_inner and TEMPLATE_TAIL not in leftover_inner:
            if 20 <= len(leftover_inner) <= 280:
                parts.append(leftover_inner)

    joined_so_far = " ".join(parts)
    for f in uniq:
        if f not in joined_so_far:
            parts.append(f)
            joined_so_far += " " + f

    text = normalize_displays(join(*parts))
    # Trim from the back if over-long.
    while len(text) > 550 and len(parts) > 2:
        parts.pop()
        text = normalize_displays(join(*parts))
    if len(text) > 550:
        text = text[:547].rsplit(" ", 1)[0] + "."
    if len(text) < 100:
        text = normalize_displays(
            join(
                text,
                "A later claim is a substitution, a leading-term reading, or a factor test on this same polynomial.",
            )
        )
    text = text.replace(TEMPLATE_TAIL, "").strip()
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


def polish_core_letter(task: dict, idx: int) -> str:
    letter = LETTERS[idx]
    truth = bool(task["answer_key"][idx])
    verd = "True" if truth else "False"
    case = task["case_id"]
    if case == "MATH 9.01" and idx == 2:
        return expl(
            "C", False,
            "A whole-run average is last distance over last time; converting metres per second into kilometres per hour uses the factor $3.6$. The L2 table ends at $1400$ m after $120$ s.",
            D(r"\bar v=\frac{1400}{120}=\frac{35}{3}\ \mathrm{m/s}"),
            D(r"\frac{35}{3}\cdot 3.6=42\ \mathrm{km/h}"),
            "The comparison is $42>45$, which fails. The whole-trip average is $42$ km/h, not more than $45$, so the statement is False.",
        )
    if case == "MATH 9.01" and idx == 3:
        return expl(
            "D", False,
            "On a discrete table the interval velocities are the first differences of distance over each $10$ s block.",
            D(r"\Delta s/\Delta t:\ 7,9,13,14,15,15,13,15,15,12,7,5"),
            "A local maximum of this sequence is a value strictly larger than both neighbours, or a plateau that falls on both sides. The plateau $15,15$ around $40$–$60$ s and the later plateau $15,15$ around $70$–$90$ s are two separate local peaks, with $13$ sitting between them.",
            "There are two local maxima, not only one, so the statement is False.",
        )
    if case == "MATH 9.01" and idx == 4:
        return expl(
            "E", False,
            "Interval averages on the L2 table are first differences of distance over each $10$ s block. The block from $60$ to $70$ s runs from $730$ m to $860$ m.",
            D(r"\frac{860-730}{10}=13\ \mathrm{m/s}"),
            "Several other blocks reach $15$ m/s, which is larger.",
            D(r"\frac{580-430}{10}=15"),
            D(r"\frac{1010-860}{10}=15"),
            "The highest interval average is $15$ m/s, not the $13$ on $[60,70]$, so the statement is False.",
        )
    text = normalize_displays(task["tactical_explanations"][idx])
    text = re.sub(r"\b[Tt]he overview\b[^.]*\.\s*", "", text)
    text = text.replace("as in the overview", "from the rebuilt formula")
    text = text.replace(TEMPLATE_TAIL, "")
    text = text.replace(
        "That is not what the claim asserts, so the statement is False.",
        "That comparison fails, so the statement is False.",
    )
    text = text.replace(
        "This is the comparison the claim asked for, so the statement is True.",
        "That is the comparison the claim asked for, so the statement is True.",
    )
    text = text.replace(
        "This settles the claim, so the statement is True.",
        "That settles the claim, so the statement is True.",
    )
    text = text.replace(
        "This settles the claim, so the statement is False.",
        "That settles the claim, so the statement is False.",
    )
    text = normalize_displays(text)
    if not text.startswith(f"**{letter}.** → {verd}"):
        raise ValueError(f"{case} {letter}: header mismatch {text[:60]!r}")
    if f"so the statement is {verd}." not in text:
        raise ValueError(f"{case} {letter}: missing close")
    return text


def strip_from_prefix(stmt: str) -> str:
    s = FROM_PREFIX.sub("", stmt).strip()
    if not s:
        return stmt
    if s[0].islower():
        s = s[0].upper() + s[1:]
    return s


def validate_letter(case: str, idx: int, e: str, truth: bool) -> None:
    letter = LETTERS[idx]
    verd = "True" if truth else "False"
    if not e.startswith(f"**{letter}.** → {verd}"):
        raise SystemExit(f"{case} {letter}: bad header {e[:70]!r}")
    closes = list(re.finditer(r"so the statement is (True|False)\.", e))
    if len(closes) != 1:
        raise SystemExit(f"{case} {letter}: close count {len(closes)}")
    if closes[0].group(1) != verd:
        raise SystemExit(f"{case} {letter}: close/header mismatch")
    low = e.lower()
    for b in BANNED:
        if b.startswith("\\"):
            if b in e:
                raise SystemExit(f"{case} {letter}: banned {b}")
        elif b in low:
            raise SystemExit(f"{case} {letter}: banned {b}")
    for m in re.finditer(r"\$\$([\s\S]*?)\$\$", e):
        if "\n" in m.group(1):
            raise SystemExit(f"{case} {letter}: multiline $$")


def rewrite_mixed(data: dict) -> None:
    tasks = data["tasks"]
    frozen = [
        {
            "id": t["id"],
            "context": t["context"],
            "title": t["title"],
            "answer_key": list(t["answer_key"]),
            "figure": t.get("figure"),
            "tables_markdown": t.get("tables_markdown"),
            "statements": list(t["statements"]),
        }
        for t in tasks
    ]
    ov_lens: list[int] = []
    expl_lens: list[int] = []
    for t, f in zip(tasks, frozen):
        t["statements"] = [strip_from_prefix(s) for s in t["statements"]]
        builder = MIXED_BUILDERS[t["id"]]
        overview, letters = builder()
        if len(letters) != 5:
            raise SystemExit(f"{t['id']}: expected 5 letters")
        for i, e in enumerate(letters):
            validate_letter(t["case_id"], i, e, bool(t["answer_key"][i]))
        t["solution_overview"] = overview
        t["tactical_explanations"] = letters
        ov_lens.append(len(overview))
        expl_lens.extend(len(e) for e in letters)
        if t["context"] != f["context"] or t["title"] != f["title"]:
            raise SystemExit(f"{t['id']} context/title mutated")
        if t["answer_key"] != f["answer_key"]:
            raise SystemExit(f"{t['id']} answer_key mutated")
        if t.get("figure") != f["figure"]:
            raise SystemExit(f"{t['id']} figure mutated")
        if t.get("tables_markdown") != f["tables_markdown"]:
            raise SystemExit(f"{t['id']} table mutated")
        stripped = [strip_from_prefix(s) for s in f["statements"]]
        if t["statements"] != stripped:
            raise SystemExit(f"{t['id']} statements drifted")

    median = statistics.median(ov_lens)
    if median > 550:
        raise SystemExit(f"mixed overview median {median} > 550")
    print(
        f"mixed overviews n=30 min={min(ov_lens)} median={median:.0f} "
        f"max={max(ov_lens)} gt550={sum(1 for n in ov_lens if n > 550)}"
    )
    print(
        f"mixed letters n=150 min={min(expl_lens)} "
        f"median={statistics.median(expl_lens):.0f} max={max(expl_lens)}"
    )
    for t, n in zip(tasks, ov_lens):
        print(f"  {t['id']:12} ov={n:4}")


def rewrite_core(data: dict) -> None:
    tasks = data["tasks"]
    frozen_keys = [list(t["answer_key"]) for t in tasks]
    frozen_stmts = [list(t["statements"]) for t in tasks]
    ov_lens: list[int] = []
    expl_lens: list[int] = []
    for t, key, stmts in zip(tasks, frozen_keys, frozen_stmts):
        t["statements"] = [strip_from_prefix(s) for s in t["statements"]]
        t["solution_overview"] = core_overview(t)
        t["tactical_explanations"] = [polish_core_letter(t, i) for i in range(5)]
        if t["answer_key"] != key:
            raise SystemExit(f"{t['case_id']} answer_key mutated")
        stripped = [strip_from_prefix(s) for s in stmts]
        if t["statements"] != stripped:
            raise SystemExit(f"{t['case_id']} statements drifted")
        for i, e in enumerate(t["tactical_explanations"]):
            validate_letter(t["case_id"], i, e, bool(t["answer_key"][i]))
        ov_lens.append(len(t["solution_overview"]))
        expl_lens.extend(len(e) for e in t["tactical_explanations"])
        if TEMPLATE_TAIL in t["solution_overview"] or "Each letter is then" in t["solution_overview"]:
            raise SystemExit(f"{t['case_id']} template tail survived")

    print(
        f"core overviews n={len(ov_lens)} min={min(ov_lens)} "
        f"median={statistics.median(ov_lens):.0f} max={max(ov_lens)}"
    )
    print(
        f"core letters n={len(expl_lens)} min={min(expl_lens)} "
        f"median={statistics.median(expl_lens):.0f} max={max(expl_lens)}"
    )
    short_ov = [tasks[i]["case_id"] for i, n in enumerate(ov_lens) if n < 100]
    long_ov = [tasks[i]["case_id"] for i, n in enumerate(ov_lens) if n > 550]
    if short_ov:
        print("short core overviews", short_ov)
    if long_ov:
        print("long core overviews", long_ov)


def main() -> None:
    mixed = json.loads(MIXED.read_text())
    core = json.loads(CORE.read_text())
    rewrite_mixed(mixed)
    rewrite_core(core)
    for path, data in ((MIXED, mixed), (CORE, core)):
        blob = json.dumps(data)
        if re.search(r"From the (figure|table):", blob):
            raise SystemExit(f"{path.name}: From-the-figure/table prefix survived")
        if "as in the overview" in blob.lower() or "from the overview" in blob.lower():
            raise SystemExit(f"{path.name}: overview dependence survived")
        if r"\deg" in blob:
            raise SystemExit(f"{path.name}: \\deg survived")
    MIXED.write_text(json.dumps(mixed, ensure_ascii=False, indent=2) + "\n")
    CORE.write_text(json.dumps(core, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {MIXED}")
    print(f"Wrote {CORE}")


if __name__ == "__main__":
    main()







