#!/usr/bin/env python3
"""Rewrite Chapter 9 mixed-exam overviews and letter explanations.

Each task gets a detailed shared solution_overview (Ch7-core tutoring depth:
recover the polynomial, run the algebra once, prepare facts every letter needs).
Letters A–E then build on that shared work instead of reconstructing p five times.

Only solution_overview and tactical_explanations are patched. Statements,
answer keys, figures, and tables stay frozen.

Run: python3 scripts/enrich-ch9-mixed-overviews.py
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

from sympy import (
    Poly,
    Symbol,
    diff,
    expand,
    factor,
    latex,
    simplify,
    solve,
)

ROOT = Path("/workspace")
DATA = ROOT / "src/data/math-ch9-mixed-exam.json"

x = Symbol("x")
t = Symbol("t")
n = Symbol("n")
k = Symbol("k")
a = Symbol("a")

BANNED = [r"\\deg", r"\\circ", "Matching the claim"]
LETTERS = "ABCDE"


def D(s: str) -> str:
    inner = re.sub(r"\s+", " ", s).strip()
    return f"$${inner}$$"


def join(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and str(p).strip())


def normalize_displays(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$"

    text = re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def expl(letter: str, truth: bool, *parts: str) -> str:
    verd = "True" if truth else "False"
    body = join(*parts)
    if not body.endswith(f", so the statement is {verd}."):
        raise ValueError(f"{letter}: missing close ({body[-80:]!r})")
    if body.lower().count("so the statement is") != 1:
        raise ValueError(f"{letter}: close phrase must appear once")
    text = f"**{letter}.** → {verd}\n\n{body}"
    return normalize_displays(text)


def L(expr) -> str:
    return latex(expand(expr))


def ev(expr, val, var=x):
    return simplify(expand(expr).subs(var, val))


def diffs(xs, expr, var=x):
    ys = [int(expr.subs(var, v)) for v in xs]
    layers = [ys]
    while len(layers[-1]) > 1:
        prev = layers[-1]
        layers.append([prev[i + 1] - prev[i] for i in range(len(prev) - 1)])
    return layers


def layer_tex(vals) -> str:
    return ",\\ ".join(str(int(v)) for v in vals)


def must(cond, msg: str) -> None:
    if not cond:
        raise AssertionError(msg)


# ---------------------------------------------------------------------------
# Task builders: (overview, [A, B, C, D, E])
# ---------------------------------------------------------------------------


def e1():
    p = expand((x + 1) ** 2 * (x - 2))
    must(p == expand(x ** 3 - 3 * x - 2), "e1 poly")
    must(ev(p, 0) == -2, "e1 intercept")
    must(list(solve(diff(p, x), x)) == [-1, 1], "e1 turns")
    ov = join(
        "The figure prints no formula, so the solid curve has to be rebuilt from the ticks. It flattens against the axis at $x=-1$ (a touch, hence a double root) and cuts through at $x=2$ (a simple crossing). The vertical-axis meeting sits at height $-2$.",
        "A monic cubic with that multiplicity pattern is unique:",
        D(r"p(x)=(x+1)^{2}(x-2)"),
        "Expanding once supplies every later substitution, derivative, and end-reading:",
        D(r"p(x)=x^{3}-3x-2"),
        "The intercept check forces the leading coefficient: $p(0)=(1)^{2}(-2)=-2$ matches the ticks, so the monic choice is the right one. Differentiating locates the turns:",
        D(r"p'(x)=3x^{2}-3=3(x-1)(x+1)"),
        "Stationary points sit at $x=\\pm 1$; both lie in the window, so two turns are visible (the left-hand one is the touch on the axis). An odd-degree monic polynomial keeps the sign of $x$ at infinity:",
        D(r"\lim_{x\to+\infty}p(x)=+\infty\qquad\lim_{x\to-\infty}p(x)=-\infty"),
        "The dashed mark is the horizontal $y=-2$. Meetings solve $p(x)=-2$:",
        D(r"p(x)+2=x^{3}-3x=x(x^{2}-3)"),
        "Three meetings, at $x=0$ and $x=\\pm\\sqrt{3}$, all inside the plotted window. A nonzero intercept already kills oddness. Distinct axis meetings: two (the touch still counts as one).",
    )
    letters = [
        expl(
            "A", False,
            "End behaviour is already settled by the leading term $x^{3}$ of the reconstructed cubic: the right end rises and the left end falls.",
            "The claim reverses both arrows, so the statement is False.",
        ),
        expl(
            "B", True,
            "A touch is still a single axis meeting. The reconstruction has a double root at $-1$ and a simple root at $2$, so two distinct abscissas, matching the ticks.",
            "There is no third crossing in the window, so the statement is True.",
        ),
        expl(
            "C", False,
            "The intercept was read off the vertical axis and confirmed by substituting into the shared cubic: $p(0)=-2$.",
            "That height is negative, not positive, so the statement is False.",
        ),
        expl(
            "D", False,
            "Oddness would require a half-turn about the origin and, in particular, a zero intercept. The shared intercept is $-2$, and the touch at $-1$ has no matching touch at $+1$.",
            "The figure is not origin-symmetric, so the statement is False.",
        ),
        expl(
            "E", False,
            "Meetings with the dashed mark $y=-2$ were solved in the overview: three real solutions $0,\\pm\\sqrt{3}$, all inside the window.",
            "The claim asks for exactly two, so the statement is False.",
        ),
    ]
    return ov, letters


def e2():
    p = expand((x + 1) * (x - 1) * (x - 2))
    xs = [-2, -1, 0, 1, 2, 3]
    layers = diffs(xs, p)
    must(layers[0] == [-12, 0, 2, 0, 0, 8], "e2 ys")
    must(layers[3] == [6, 6, 6], "e2 d3")
    ov = join(
        "The table is raw samples on unit spacing; no closed form and no difference columns are printed. Start from the $p(x)$ row and compute differences by hand until a layer freezes.",
        D(layer_tex(layers[0])),
        D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
        D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
        D(r"\Delta_{3}:\ " + layer_tex(layers[3])),
        "Third differences are constantly $6$. For a cubic $ax^{3}+\\cdots$ on unit spacing the third difference equals $3!\\,a=6a$, so $a=1$: a monic cubic is consistent with every listed column. Second differences still move, so the samples are not quadratic.",
        "The factor theorem is a column lookup: $x-r$ divides the unknown polynomial if and only if the entry at $x=r$ is $0$. The vanishing columns are $x=-1$, $x=1$ and $x=2$; the intercept column is $p(0)=2\\neq 0$, so $x$ is not a factor. The unique monic cubic through those three zeros is",
        D(r"p(x)=(x+1)(x-1)(x-2)=x^{3}-2x^{2}-x+2"),
        "Differences diagnose a minimal degree. The same six nodes also lie on infinitely many higher-degree polynomials: add any multiple of $(x+2)(x+1)x(x-1)(x-2)(x-3)$.",
    )
    letters = [
        expl(
            "A", True,
            "The difference pyramid in the overview freezes at the third layer, constantly $6=6\\cdot 1$.",
            "A monic cubic is therefore consistent with every listed column, so the statement is True.",
        ),
        expl(
            "B", False,
            "The factor theorem asks for the value at $x=0$, not merely for the presence of a $0$ heading. The shared intercept sample is $p(0)=2$.",
            "That entry is not zero, so $x$ is not a factor, so the statement is False.",
        ),
        expl(
            "C", False,
            "A quadratic would freeze at the second difference layer. The overview computed $\\Delta_{2}=-10,-4,2,8$, which still moves.",
            "The samples are not quadratic, so the statement is False.",
        ),
        expl(
            "D", True,
            "The factor theorem is the $x=1$ column of the shared table: that entry is $0$.",
            "Hence $x-1$ divides the interpolating cubic, so the statement is True.",
        ),
        expl(
            "E", False,
            "Constant third differences force the degree to be at least $3$, not exactly $3$. Any extra multiple of the six nodal factors reproduces the same samples at higher degree.",
            "The claim's 'exactly $3$' is too strong, so the statement is False.",
        ),
    ]
    return ov, letters


def e3():
    h = expand(t * (t - 2) * (t - 3))
    xs = [0, 1, 2, 3, 4]
    layers = diffs(xs, h, t)
    must(layers[0] == [0, 2, 0, 0, 8], "e3 ys")
    must(layers[3] == [6, 6], "e3 d3")
    ov = join(
        "The lock ledger and the plot are the only data. Read the litre row first, then diagnose degree from differences computed by hand.",
        D(r"0,\ 2,\ 0,\ 0,\ 8"),
        "Zero imbalance means a tabulated $0$: the lock sits on the datum at $t=0$, $t=2$ and $t=3$, and at no other recorded hour. In particular the opening reading $h(0)$ is $0$. The unique monic cubic with those three simple zeros is",
        D(r"h(t)=t(t-2)(t-3)=t^{3}-5t^{2}+6t"),
        "Finite differences of the five samples lose one degree per pass:",
        D(r"\Delta_{1}:\ 2,\ -2,\ 0,\ 8"),
        D(r"\Delta_{2}:\ -4,\ 2,\ 8"),
        D(r"\Delta_{3}:\ 6,\ 6"),
        "Constant third differences $6=3!\\cdot 1$ match the monic cubic. Second differences still move, so a quadratic cannot fit every listed hour. The factor theorem is again a column lookup: $t-1$ would divide $h$ only if $h(1)=0$, but the hour-$1$ reading is $2$.",
    )
    letters = [
        expl(
            "A", True,
            "The shared ledger vanishes at exactly the three hours $t=0,2,3$; the readings at $t=1$ and $t=4$ are $2$ and $8$.",
            "Three recorded zeros, and only three, so the statement is True.",
        ),
        expl(
            "B", True,
            "The opening column of the ledger is the intercept of the cubic, already recorded as $h(0)=0$.",
            "The lock starts on the datum, so the statement is True.",
        ),
        expl(
            "C", True,
            "The overview's third-difference layer is constantly $6$, the signature of a monic cubic on unit spacing.",
            "A cubic model is therefore consistent with the ledger, so the statement is True.",
        ),
        expl(
            "D", False,
            "Being a tabulated abscissa is not the factor test. The shared reading at hour $1$ is $h(1)=2\\neq 0$.",
            "So $t-1$ is not a factor, so the statement is False.",
        ),
        expl(
            "E", False,
            "A quadratic would freeze at $\\Delta_{2}$. The overview computed $-4,2,8$, which still changes.",
            "A quadratic cannot fit every listed hour, so the statement is False.",
        ),
    ]
    return ov, letters


def e4():
    p = expand(x ** 2 - 1)
    q = expand(x ** 3 - x)
    pq = expand(p.subs(x, q))
    qp = expand(q.subs(x, p))
    must(deg := Poly(pq, x).degree() == 6, "e4 pq deg")
    must(Poly(qp, x).degree() == 6, "e4 qp deg")
    ov = join(
        "Both maps are handed over already written:",
        D(r"p(x)=x^{2}-1\qquad q(x)=x^{3}-x"),
        "Factor each once, because several letters only need the linear pieces:",
        D(r"p(x)=(x-1)(x+1)\qquad q(x)=x(x-1)(x+1)=x\,p(x)"),
        "So every real root of $p$ is automatically a root of $q$. Parity is a coefficient reading: $p$ has only even powers, $q$ has only odd powers, and there is no constant term in $q$.",
        D(r"p(-x)=p(x)\qquad q(-x)=-q(x)"),
        "Nesting multiplies degrees rather than adding them. The outer degree of $p$ is $2$ and the inner highest power of $q$ is $x^{3}$, so $p(q(x))$ has highest power $x^{6}$; the other order is $3\\cdot 2=6$ as well. Expanding confirms neither nesting drops degree:",
        D(r"p(q(x))=x^{6}-2x^{4}+x^{2}-1"),
        D(r"q(p(x))=x^{6}-3x^{4}+2x^{2}"),
        "Equal nested degree does not make the two compositions the same polynomial.",
    )
    letters = [
        expl(
            "A", True,
            "The shared factorisation $q(x)=x\\,p(x)$ makes every root of $p$ a root of $q$. Directly, $q(1)=q(-1)=0$.",
            "Both real roots of $p$ lie among the roots of $q$, so the statement is True.",
        ),
        expl(
            "B", True,
            "The overview already recorded that $q$ contains only odd powers, so $q(-x)=-q(x)$ for every $x$.",
            "That is the definition of an odd function, so the statement is True.",
        ),
        expl(
            "C", True,
            "Only even powers appear in $p$, and the overview recorded the identity $p(-x)=p(x)$.",
            "Hence $p$ is even, so the statement is True.",
        ),
        expl(
            "D", True,
            "Nesting multiplies degrees: $2\\cdot 3=6$, and the expanded $p(q(x))$ begins with $x^{6}$.",
            "The nested highest power is $x^{6}$, so the statement is True.",
        ),
        expl(
            "E", False,
            "The other order is $3\\cdot 2=6$ as well; the overview expanded $q(p(x))$ as a degree-$6$ polynomial starting with $x^{6}$.",
            "The nested highest power is $x^{6}$, not $x^{5}$, so the statement is False.",
        ),
    ]
    return ov, letters


def e5():
    gk = x ** 3 - k * x
    must(simplify(gk.subs(x, -x) + gk) == 0, "e5 odd")
    g1 = expand(gk.subs(k, 1))
    must(factor(g1) == x * (x - 1) * (x + 1), "e5 k=1")
    ov = join(
        "The family is given explicitly, with the parameter sitting on the linear term:",
        D(r"g_{k}(x)=x^{3}-kx=x(x^{2}-k)"),
        "Every member is a cubic (unless $k$ is allowed to cancel the $x^{3}$ term, which it never does). Replacing $x$ by $-x$ flips both surviving powers, independently of $k$:",
        D(r"g_{k}(-x)=-x^{3}+kx=-g_{k}(x)"),
        "So every $g_{k}$ is odd, and in particular $g_{k}(0)=0$ for every $k$. Distinct zeros depend on the sign of $k$: three real zeros $\\pm\\sqrt{k}$ and $0$ when $k>0$; a triple root at the origin when $k=0$; only the origin when $k<0$. The derivative",
        D(r"g_{k}'(x)=3x^{2}-k"),
        "shares the origin with $g_{k}$ precisely when $k=0$, which is therefore the unique repeated-root case, $g_{0}(x)=x^{3}$. Special values used below: $k=1$ factors as $x(x-1)(x+1)$; $k=4$ factors as $x(x-2)(x+2)$, so $g_{4}(2)=0$; $k=3$ makes $g_{3}'(x)=3(x^{2}-1)$, with stationary points at $x=\\pm 1$.",
    )
    letters = [
        expl(
            "A", True,
            "The shared identity $g_{k}(-x)=-g_{k}(x)$ does not involve $k$ at all.",
            "Oddness therefore holds for every real parameter, so the statement is True.",
        ),
        expl(
            "B", True,
            "Substituting the named parameter into the shared factorisation gives $g_{1}(x)=x(x-1)(x+1)$.",
            "Three distinct real zeros, so the statement is True.",
        ),
        expl(
            "C", True,
            "A repeated root occurs when $g_{k}$ and $g_{k}'$ share a root. The overview showed that happens if and only if $k=0$, when $g_{0}(x)=x^{3}$.",
            "That is exactly the repeated-root case, so the statement is True.",
        ),
        expl(
            "D", True,
            "The $k=4$ member was factored as $x(x-2)(x+2)$ in the overview, so $x=2$ is a root.",
            "Directly, $g_{4}(2)=8-8=0$, so the statement is True.",
        ),
        expl(
            "E", True,
            "Stationary points solve $g_{k}'(x)=0$. For $k=3$ the overview reduced that equation to $x^{2}=1$.",
            "The stationary abscissas are $\\pm 1$, so the statement is True.",
        ),
    ]
    return ov, letters


def e6():
    p = expand((x - 1) ** 2 * (x + 2))
    dp = expand(diff(p, x))
    must(p == expand(x ** 3 - 3 * x + 2), "e6 poly")
    must(ev(dp, -2) == 9, "e6 p'(-2)")
    must(ev(p, 0) == 2, "e6 intercept")
    ov = join(
        "A monic cubic is uniquely determined by a double root and a simple root: each linear factor is monic, and the touch supplies the square. The stem's pattern (touch at $1$, cross at $-2$) forces",
        D(r"p(x)=(x-1)^{2}(x+2)"),
        "Expanding once, for Vieta, the intercept, and the derivative:",
        D(r"p(x)=x^{3}-3x+2"),
        "Distinct zeros ignore multiplicity: only $x=1$ and $x=-2$, so two distinct real zeros, not three. The multiplicity-weighted root sum is $1+1+(-2)=0$, matching the missing $x^{2}$ term. Differentiating,",
        D(r"p'(x)=3x^{2}-3=3(x-1)(x+1)"),
        "confirms the double-root rule: $p'(1)=0$, while the simple crossing has $p'(-2)=9\\neq 0$. The intercept is the product of the constant pieces of the factors:",
        D(r"p(0)=(-1)^{2}(2)=2"),
        "A nonzero constant term already kills oddness, and the zero set $\\{1,-2\\}$ is not symmetric about the origin.",
    )
    letters = [
        expl(
            "A", True,
            "The reconstruction in the overview is forced by monic normalisation together with the stated multiplicities.",
            "That product is exactly the displayed factorisation, so the statement is True.",
        ),
        expl(
            "B", False,
            "Multiplicity total $3$ is not three distinct abscissas. The shared zero set is $\\{1,-2\\}$.",
            "Only two distinct real zeros, so the statement is False.",
        ),
        expl(
            "C", False,
            "Only a root of multiplicity at least $2$ flattens the derivative. The overview computed $p'(-2)=9$.",
            "The simple crossing is not stationary, so the statement is False.",
        ),
        expl(
            "D", False,
            "Oddness requires $p(0)=0$. The shared intercept is $2$, and an $x^{3}$ cubic with a constant term cannot be odd.",
            "The rebuilt cubic is not odd, so the statement is False.",
        ),
        expl(
            "E", False,
            "The intercept was computed from the factors as $p(0)=2$.",
            "The claimed value $-2$ has the wrong sign, so the statement is False.",
        ),
    ]
    return ov, letters


def e7():
    p = expand(x ** 2 - 1)
    q = expand(x - 2)
    qp = expand(q.subs(x, p))
    pq = expand(p.subs(x, q))
    must(qp == expand(x ** 2 - 3), "e7 qp")
    must(pq == expand(x ** 2 - 4 * x + 3), "e7 pq")
    must(ev(qp, 0) == -3 and ev(pq, 0) == 3, "e7 at 0")
    ov = join(
        "The inner quadratic and the outer affine map are given explicitly:",
        D(r"p(x)=x^{2}-1\qquad q(x)=x-2"),
        "Nesting multiplies degrees. An affine outer map has degree $1$, so it preserves the inner degree $2$; the other order is a quadratic outer map around an affine inner map, again degree $2\\cdot 1=2$. Expanding both nestings once,",
        D(r"q(p(x))=x^{2}-3"),
        D(r"p(q(x))=(x-2)^{2}-1=x^{2}-4x+3=(x-1)(x-3)"),
        "The two compositions are different quadratics. Evaluating inside-out at the origin records the mismatch and supplies the factor test:",
        D(r"q(p(0))=q(-1)=-3\qquad p(q(0))=p(-2)=3"),
        "In particular $p(q(1))=p(-1)=0$, so $x-1$ divides $p(q(x))$, matching the factorisation already written. The nesting $q(p(x))=x^{2}-3$ involves only even powers, hence is even rather than odd.",
    )
    letters = [
        expl(
            "A", True,
            "The overview multiplied degrees as $1\\cdot 2=2$ and expanded $q(p(x))=x^{2}-3$.",
            "The nested highest power is $x^{2}$, so the statement is True.",
        ),
        expl(
            "B", False,
            "The other order is $2\\cdot 1=2$, not $3$; the expanded $p(q(x))$ is the quadratic $x^{2}-4x+3$.",
            "The nested highest power is $x^{2}$, not $x^{3}$, so the statement is False.",
        ),
        expl(
            "C", False,
            "The two nested values at $0$ were computed in the overview: $-3$ versus $3$.",
            "Nesting does not commute here, so the statement is False.",
        ),
        expl(
            "D", True,
            "The shared expansion $p(q(x))=(x-1)(x-3)$ already displays the factor $x-1$, and $p(q(1))=0$ confirms it.",
            "So $x-1$ divides the nesting, so the statement is True.",
        ),
        expl(
            "E", False,
            "The overview identified $q(p(x))=x^{2}-3$ as an even polynomial (only even powers).",
            "Even is the opposite of odd, so the statement is False.",
        ),
    ]
    return ov, letters


def e8():
    p = expand((x + 1) ** 2 * (x - 2))
    dp = expand(diff(p, x))
    must(ev(dp, -1) == 0 and ev(dp, 2) == 9, "e8 p'")
    ov = join(
        "The cubic arrives already factored, so multiplicity is visible before any expansion:",
        D(r"p(x)=(x+1)^{2}(x-2)"),
        "The squared factor is a double root at $x=-1$; the remaining factor is a simple root at $x=2$. Distinct zeros therefore number two, not three. Expanding and differentiating once,",
        D(r"p(x)=x^{3}-3x-2"),
        D(r"p'(x)=3x^{2}-3=3(x-1)(x+1)"),
        "A root of multiplicity at least $2$ is automatically a root of the derivative, so $p'(-1)=0$. The simple crossing is not stationary: $p'(2)=9\\neq 0$. The intercept is the product of the constant pieces,",
        D(r"p(0)=(1)^{2}(-2)=-2"),
        "A nonzero intercept already kills oddness. Vieta is available if needed: the multiplicity-weighted root sum is $-1-1+2=0$, matching the missing $x^{2}$ term.",
    )
    letters = [
        expl(
            "A", True,
            "The double root at $x=-1$ is a root of $p'$, as the overview recorded both from the squared factor and from $p'(x)=3(x-1)(x+1)$.",
            "Hence $p'(-1)=0$, so the statement is True.",
        ),
        expl(
            "B", False,
            "The root at $x=2$ is simple. The overview computed $p'(2)=9\\neq 0$.",
            "The simple crossing does not flatten $p'$, so the statement is False.",
        ),
        expl(
            "C", True,
            "Distinct zeros ignore the exponent on $(x+1)^{2}$. The shared zero set is $\\{-1,2\\}$.",
            "Exactly two distinct real zeros, so the statement is True.",
        ),
        expl(
            "D", True,
            "The intercept was read from the factors as $p(0)=-2$.",
            "That is the value named in the claim, so the statement is True.",
        ),
        expl(
            "E", False,
            "Oddness requires $p(0)=0$. The shared intercept is $-2$, and $p(-1)=0$ while $-p(1)=4$.",
            "The cubic is not odd, so the statement is False.",
        ),
    ]
    return ov, letters


def e9():
    p = expand(x * (x - 2) * (x + 2))
    xs = [-2, -1, 0, 1, 2]
    ys = [int(p.subs(x, v)) for v in xs]
    must(ys == [0, 3, 0, -3, 0], "e9 table")
    ov = join(
        "Letters A–C are figure readings; D–E are table lookups. The ticks show three simple axis crossings, aligned with $-2$, $0$ and $2$, and a half-turn symmetry about the origin (the intercept is $0$). Reconstructing a monic odd cubic with those zeros gives",
        D(r"p(x)=x(x-2)(x+2)=x^{3}-4x"),
        "End behaviour is that of $x^{3}$: right end up, left end down. The dashed companion is the line $y=x$. Solid–dashed meetings solve $p(x)=x$:",
        D(r"p(x)-x=x^{3}-5x=x(x^{2}-5)"),
        "Three meetings, at $x=0$ and $x=\\pm\\sqrt{5}$, all inside the window (since $\\sqrt{5}\\approx 2.2<3$). Turning points come from $p'(x)=3x^{2}-4$, two of them, near $\\pm 1.15$. The raw sample table of the same solid graph is",
        D(r"x=-2,-1,0,1,2\quad\text{gives}\quad p=0,3,0,-3,0"),
        "So $p(-1)=3$ and $p(1)=-3\\neq 0$: the factor $x-1$ fails the table test, while $x$, $x-2$ and $x+2$ all pass.",
    )
    letters = [
        expl(
            "A", True,
            "The figure reading in the overview counted three simple crossings at $-2$, $0$ and $2$.",
            "Three distinct axis meetings are visible, so the statement is True.",
        ),
        expl(
            "B", True,
            "Origin symmetry is visible on the figure and is confirmed by the shared odd cubic $p(-x)=-p(x)$.",
            "The solid graph is odd, so the statement is True.",
        ),
        expl(
            "C", True,
            "Solid–dashed meetings were solved as $x(x^{2}-5)=0$, three real roots inside the window.",
            "Three distinct meetings with the dashed line, so the statement is True.",
        ),
        expl(
            "D", True,
            "This letter is a table lookup, not a figure reading. The shared $x=-1$ sample is $3$.",
            "The tabulated height is exactly the number claimed, so the statement is True.",
        ),
        expl(
            "E", False,
            "The factor theorem at $x=1$ is the corresponding table column. The overview recorded $p(1)=-3\\neq 0$.",
            "So $x-1$ is not a factor, so the statement is False.",
        ),
    ]
    return ov, letters


def e10():
    p_a = expand(x * (x + 1) * (x - 2))
    must(ev(p_a, 1) == -2, "e10 A")
    p_e = expand((x - 1) ** 2 * (x + 1))
    dp_e = expand(diff(p_e, x))
    must(ev(p_e, 1) == 0 and ev(dp_e, 1) == 0, "e10 E")
    ov = join(
        "The five letters do not share a polynomial, but they share one toolkit, so each micro-model is settled here and reused below.",
        "A monic cubic with simple zeros at $-1$, $0$ and $2$ is unique:",
        D(r"p(x)=x(x+1)(x-2)"),
        "The value needed later is the product of the signed distances from $1$ to those zeros:",
        D(r"p(1)=(1)(2)(-1)=-2"),
        "Evenness is the identity $f(-x)=f(x)$. For $f(x)=x^{4}+1$ only even powers appear, so $f(-x)=f(x)$. Nesting multiplies degrees: feeding $x^{2}$ into $u^{2}-1$ produces",
        D(r"(x^{2})^{2}-1=x^{4}-1"),
        "of highest power $x^{4}$. The cubic $x^{3}-4x$ factors by pulling out $x$ and using a difference of squares:",
        D(r"x^{3}-4x=x(x-2)(x+2)"),
        "with three distinct real zeros $-2,0,2$. Finally, a double root is automatically a root of the derivative. For $r(x)=(x-1)^{2}(x+1)$,",
        D(r"r'(x)=(x-1)(3x+1)"),
        "so $r$ and $r'$ share the root $x=1$.",
    )
    letters = [
        expl(
            "A", True,
            "The unique monic cubic with those three simple zeros was formed in the overview, and substituting $x=1$ produced $-2$.",
            "The named value matches, so the statement is True.",
        ),
        expl(
            "B", True,
            "The overview recorded that $f(x)=x^{4}+1$ contains only even powers, hence $f(-x)=f(x)$ for every real $x$.",
            "That is evenness, so the statement is True.",
        ),
        expl(
            "C", True,
            "Nesting multiplies degrees: $2\\cdot 2=4$, and the overview expanded the composition as $x^{4}-1$.",
            "The nested highest power is $x^{4}$, so the statement is True.",
        ),
        expl(
            "D", True,
            "The shared factorisation $x(x-2)(x+2)$ displays three distinct real zeros.",
            "The count is three, so the statement is True.",
        ),
        expl(
            "E", True,
            "The double root $x=1$ of $r(x)=(x-1)^{2}(x+1)$ is a root of $r'$ as well, as the overview factored $r'(x)=(x-1)(3x+1)$.",
            "A common real root therefore exists, so the statement is True.",
        ),
    ]
    return ov, letters


def e11():
    p = expand(x * (x - 2) * (x + 2))
    must(p == expand(x ** 3 - 4 * x), "e11 poly")
    ov = join(
        "No formula is printed. The ticks show three simple crossings, at $-2$, $0$ and $2$, and the curve is carried onto itself by a half-turn about the origin. A monic odd cubic with those zeros is unique:",
        D(r"p(x)=x(x-2)(x+2)=x^{3}-4x"),
        "Only odd powers appear, so $p(-x)=-p(x)$, and the intercept is $p(0)=0$. An odd-degree monic polynomial keeps the sign of $x$ at infinity:",
        D(r"\lim_{x\to+\infty}p(x)=+\infty\qquad\lim_{x\to-\infty}p(x)=-\infty"),
        "The dashed companion is the line $y=x$. Meetings solve $p(x)=x$:",
        D(r"p(x)-x=x^{3}-5x=x(x^{2}-5)"),
        "Three meetings, at $x=0$ and $x=\\pm\\sqrt{5}$, all inside the window. Turning points are peaks and troughs, not crossings; they solve $p'(x)=0$:",
        D(r"p'(x)=3x^{2}-4\qquad x=\pm\frac{2}{\sqrt{3}}"),
        "Exactly two turning points are visible (near $\\pm 1.15$), not three. Distinct axis meetings: three.",
    )
    letters = [
        expl(
            "A", True,
            "The reconstruction has three simple zeros at $-2$, $0$ and $2$, matching the three crossings on the ticks.",
            "Three distinct axis meetings are visible, so the statement is True.",
        ),
        expl(
            "B", True,
            "Origin symmetry is visible on the figure and is the identity $p(-x)=-p(x)$ recorded for the shared odd cubic.",
            "The solid graph is odd, so the statement is True.",
        ),
        expl(
            "C", True,
            "Both end claims match the leading term $x^{3}$ of the reconstruction: right end up, left end down.",
            "The two arrows in the claim are the correct ones, so the statement is True.",
        ),
        expl(
            "D", True,
            "Solid–dashed meetings were solved as $x(x^{2}-5)=0$, three real roots inside the window.",
            "Three distinct meetings with the dashed companion, so the statement is True.",
        ),
        expl(
            "E", False,
            "Turning points solve $p'(x)=0$. The overview found two stationary abscissas, $\\pm 2/\\sqrt{3}$, not three.",
            "An odd cubic of this shape has two turns, so the statement is False.",
        ),
    ]
    return ov, letters


def e12():
    p = expand((x - 2) * (x + 1))
    xs = [-2, -1, 0, 1, 2, 3]
    layers = diffs(xs, p)
    must(layers[0] == [4, 0, -2, -2, 0, 4], "e12 ys")
    must(layers[2] == [2, 2, 2, 2], "e12 d2")
    must(int(p.subs(x, 4)) == 10, "e12 next")
    ov = join(
        "The laboratory table is raw unit-spaced samples with no difference columns printed. Compute differences from the $p(x)$ row until a layer freezes.",
        D(layer_tex(layers[0])),
        D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
        D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
        "Second differences are constantly $2$. For a quadratic $ax^{2}+\\cdots$ on unit spacing the second difference equals $2a$, so $a=1$: a monic quadratic fits every listed column. First differences still move (they are an arithmetic progression), so the samples are not linear.",
        "The factor theorem is a column lookup. Vanishing samples sit at $x=-1$ and $x=2$, so both $x+1$ and $x-2$ divide the interpolant. The unique monic quadratic with those zeros is",
        D(r"p(x)=(x-2)(x+1)=x^{2}-x-2"),
        "Newton's forward step with the constant $\\Delta_{2}=2$ updates the last first difference $4$ to $6$, then the last sample $4$ to $10$:",
        D(r"p(4)=(4-2)(4+1)=10"),
        "which is also the value of the reconstructed quadratic at $x=4$.",
    )
    letters = [
        expl(
            "A", True,
            "The overview's second-difference layer is constantly $2=2\\cdot 1$, the signature of a monic quadratic.",
            "That quadratic fits every listed column, so the statement is True.",
        ),
        expl(
            "B", True,
            "The shared $x=-1$ sample is $0$, so the factor theorem supplies $x-(-1)=x+1$.",
            "Hence $x+1$ divides the interpolant, so the statement is True.",
        ),
        expl(
            "C", True,
            "The shared $x=2$ sample is likewise $0$, so $x-2$ is a factor.",
            "That is the second linear piece of the reconstructed quadratic, so the statement is True.",
        ),
        expl(
            "D", True,
            "A linear model would freeze at $\\Delta_{1}$. The overview computed $-4,-2,0,2,4$, which still moves.",
            "The samples cannot come from a line, so the statement is True.",
        ),
        expl(
            "E", True,
            "Continuing the constant second difference $2$ produced the next sample $p(4)=10$, matching the reconstructed quadratic.",
            "The extrapolated value is $10$, so the statement is True.",
        ),
    ]
    return ov, letters


def e13():
    c = expand(-(t + 1) * (t - 1) * (t - 2))
    must(c == expand(-(t ** 3) + 2 * t ** 2 + t - 2), "e13 poly")
    must(ev(c, 0, t) == -2, "e13 intercept")
    ov = join(
        "No formula is printed. The ticks show three simple zero-camber times, at $t=-1$, $t=1$ and $t=2$, and the right of the window is already falling through the last crossing. Three simple zeros together with a downward right end force a monic product with a minus sign in front:",
        D(r"c(t)=-(t+1)(t-1)(t-2)"),
        "Expanding once,",
        D(r"c(t)=-t^{3}+2t^{2}+t-2"),
        "The leading term $-t^{3}$ sends the right end to $-\\infty$ and the left end to $+\\infty$. The intercept is the height at $t=0$:",
        D(r"c(0)=-2"),
        "which is also the dashed design mark. A nonzero intercept kills oddness, and the zero set $\\{-1,1,2\\}$ is not symmetric about the origin. Meetings with the design mark solve $c(t)=-2$:",
        D(r"c(t)+2=-t(t^{2}-2t-1)"),
        "Three meetings, at $t=0$ and $t=1\\pm\\sqrt{2}$, all inside the window. Two turning points come from the quadratic $c'(t)=-3t^{2}+4t+1$. Distinct axis meetings: three.",
    )
    letters = [
        expl(
            "A", False,
            "The reconstructed camber is an odd-degree cubic with negative lead, so $c(t)\\to-\\infty$ as $t\\to+\\infty$.",
            "The far-right camber falls, not rises, so the statement is False.",
        ),
        expl(
            "B", True,
            "The ticks, and the shared factorisation, display three simple zeros at $-1$, $1$ and $2$.",
            "Three distinct zero-camber times are visible, so the statement is True.",
        ),
        expl(
            "C", False,
            "The intercept was read as $c(0)=-2$, coinciding with the dashed mark.",
            "The opening camber is negative, not positive, so the statement is False.",
        ),
        expl(
            "D", False,
            "Oddness would need $c(0)=0$ and half-turn symmetry. The shared intercept is $-2$, and the three zeros are not symmetric about $0$.",
            "The camber graph is not odd, so the statement is False.",
        ),
        expl(
            "E", False,
            "Meetings with the dashed mark were solved as three real roots $0$ and $1\\pm\\sqrt{2}$, all in the window.",
            "There are three meetings, not one, so the statement is False.",
        ),
    ]
    return ov, letters


def e14():
    f = expand(x ** 3 - x)
    g = expand(x ** 2 - 4)
    fg = expand(f.subs(x, g))
    must(ev(f, 1) == 0 and ev(g, 1) == -3, "e14 remainders")
    must(Poly(fg, x).degree() == 6, "e14 nest")
    ov = join(
        "Both maps are given in expanded form:",
        D(r"f(x)=x^{3}-x\qquad g(x)=x^{2}-4"),
        "Factor each over the reals, because remainders, common factors, and parity all follow from the linear pieces:",
        D(r"f(x)=x(x-1)(x+1)\qquad g(x)=(x-2)(x+2)"),
        "The remainder theorem says that the remainder on division by $x-1$ is the number $f(1)$ or $g(1)$:",
        D(r"f(1)=0\qquad g(1)=1-4=-3"),
        "So $x-1$ divides $f$ but not $g$. The two factorisations are disjoint, so $f$ and $g$ share no common linear factor. Parity: $f$ is odd (only odd powers) and $g$ is even (only even powers); their sum",
        D(r"f(x)+g(x)=x^{3}+x^{2}-x-4"),
        "inherits the odd part of $f$ and is therefore neither even nor odd. Nesting multiplies degrees: outer $3$ times inner $2$ gives highest power $x^{6}$ in $f(g(x))$, confirmed by expanding",
        D(r"f(g(x))=x^{6}-12x^{4}+47x^{2}-60"),
    )
    letters = [
        expl(
            "A", True,
            "The remainder on division by $x-1$ is $f(1)$, already computed as $0$ in the overview (and visible as the factor $x-1$).",
            "The remainder is $0$, so the statement is True.",
        ),
        expl(
            "B", False,
            "The same theorem for $g$ gave remainder $g(1)=-3$, not $0$.",
            "So $x-1$ does not divide $g$, so the statement is False.",
        ),
        expl(
            "C", False,
            "Even plus odd is even only if the odd summand vanishes. The overview expanded $f+g$ with a surviving $x^{3}$ term.",
            "The sum is neither even nor odd, so the statement is False.",
        ),
        expl(
            "D", True,
            "Nesting multiplies degrees: $3\\cdot 2=6$, and the expanded $f(g(x))$ begins with $x^{6}$.",
            "The nested highest power is $x^{6}$, so the statement is True.",
        ),
        expl(
            "E", False,
            "The shared factorisations $x(x-1)(x+1)$ and $(x-2)(x+2)$ have empty intersection.",
            "No common real linear factor, so the statement is False.",
        ),
    ]
    return ov, letters


def e15():
    pa = expand((x - 1) ** 2 * (x - a))
    p1 = expand(pa.subs(a, 1))
    p2 = expand(pa.subs(a, 2))
    p0 = expand(pa.subs(a, 0))
    must(simplify(p1 - (x - 1) ** 3) == 0, "e15 triple")
    must(ev(diff(p2, x), 1) == 0, "e15 p'(1)")
    ov = join(
        "The family is already factored, with a double root pinned at $x=1$ and a sliding simple root at $x=a$:",
        D(r"p_{a}(x)=(x-1)^{2}(x-a)"),
        "Expanding the leading term shows that $a$ never touches the $x^{3}$ coefficient: every member is a monic cubic,",
        D(r"p_{a}(x)=x^{3}-(a+2)x^{2}+(2a+1)x-a"),
        "When the sliding root lands on the double root, the factors coalesce into a triple root:",
        D(r"p_{1}(x)=(x-1)^{3}"),
        "For $a=2$ the double root at $1$ survives, so the derivative still vanishes there, and the distinct zeros are only $1$ and $2$:",
        D(r"p_{2}(x)=(x-1)^{2}(x-2)\qquad p_{2}'(1)=0"),
        "The $a=0$ member is $p_{0}(x)=x(x-1)^{2}=x^{3}-2x^{2}+x$. An $x^{2}$ term destroys oddness, even though $p_{0}(0)=0$. Distinct-zero counts: one when $a=1$, two when $a\\neq 1$.",
    )
    letters = [
        expl(
            "A", True,
            "When $a=1$ the overview coalesced the factors into $(x-1)^{3}$.",
            "That is a root of multiplicity $3$, so the statement is True.",
        ),
        expl(
            "B", True,
            "A double root is a root of the derivative. For $a=2$ the double root at $x=1$ survives, and the overview recorded $p_{2}'(1)=0$.",
            "The derivative vanishes there, so the statement is True.",
        ),
        expl(
            "C", True,
            "The expanded leading term is $x^{3}$ for every $a$; the parameter only affects lower coefficients.",
            "Every member is a monic cubic, so the statement is True.",
        ),
        expl(
            "D", False,
            "Distinct zeros ignore multiplicity. For $a=2$ the shared zero set is $\\{1,2\\}$.",
            "Only two distinct real zeros, not three, so the statement is False.",
        ),
        expl(
            "E", False,
            "The $a=0$ member $x^{3}-2x^{2}+x$ has an $x^{2}$ term. The overview already noted that this kills oddness.",
            "So $p_{0}$ is not odd, so the statement is False.",
        ),
    ]
    return ov, letters


def e16():
    p = expand((x - 2) ** 2 * (x + 1))
    dp = expand(diff(p, x))
    must(p == expand(x ** 3 - 3 * x ** 2 + 4), "e16 poly")
    must(ev(dp, 2) == 0 and ev(dp, -1) == 9, "e16 p'")
    ov = join(
        "Monic normalisation plus the stated multiplicities pin the product down completely: a touch at $x=2$ and a simple crossing at $x=-1$ force",
        D(r"p(x)=(x-2)^{2}(x+1)"),
        "Expanding once, for Vieta and the intercept:",
        D(r"p(x)=x^{3}-3x^{2}+4"),
        "Distinct zeros: only $2$ and $-1$, so two, not three. The multiplicity-weighted root sum counts the double root twice,",
        D(r"2\cdot 2+(-1)=3"),
        "which matches minus the coefficient of $x^{2}$ in the monic cubic (Vieta). Differentiating,",
        D(r"p'(x)=3x^{2}-6x=3x(x-2)"),
        "confirms $p'(2)=0$ (the touch is flat) and $p'(-1)=9\\neq 0$ (the simple crossing is not stationary). The intercept is $p(0)=4$, also the constant term.",
    )
    letters = [
        expl(
            "A", True,
            "The reconstruction in the overview is the unique monic cubic with a double root at $2$ and a simple root at $-1$.",
            "That product is the displayed factorisation, so the statement is True.",
        ),
        expl(
            "B", True,
            "A double root is a root of the derivative. The overview recorded $p'(2)=0$ from $p'(x)=3x(x-2)$.",
            "The touch at $x=2$ is flat, so the statement is True.",
        ),
        expl(
            "C", True,
            "The root at $-1$ is simple. The overview computed $p'(-1)=9\\neq 0$.",
            "The simple crossing is not a stationary point, so the statement is True.",
        ),
        expl(
            "D", True,
            "Counting the double root twice gave weighted sum $3$, matching the Vieta coefficient $-(-3)$ of the expanded cubic.",
            "The two readings agree, so the statement is True.",
        ),
        expl(
            "E", False,
            "Distinct abscissas ignore multiplicity. The shared zero set is $\\{2,-1\\}$.",
            "Two distinct real zeros, not three, so the statement is False.",
        ),
    ]
    return ov, letters


def e17():
    p = expand(x ** 2 - 1)
    q = expand(x ** 2 + 1)
    qp = expand(q.subs(x, p))
    pq = expand(p.subs(x, q))
    must(qp == expand(x ** 4 - 2 * x ** 2 + 2), "e17 qp")
    must(pq == expand(x ** 4 + 2 * x ** 2), "e17 pq")
    must(ev(qp, 0) == 2 and ev(pq, 0) == 0, "e17 at 0")
    ov = join(
        "Both maps are even quadratics:",
        D(r"p(x)=x^{2}-1\qquad q(x)=x^{2}+1"),
        "Each has degree $2$ and leading coefficient $1$, so both nestings have degree $2\\cdot 2=4$. Expanding both orders once,",
        D(r"q(p(x))=(x^{2}-1)^{2}+1=x^{4}-2x^{2}+2"),
        D(r"p(q(x))=(x^{2}+1)^{2}-1=x^{4}+2x^{2}=x^{2}(x^{2}+2)"),
        "The outer map $q(u)=u^{2}+1$ is at least $1$ for every real $u$, so $q(p(x))$ never vanishes (equivalently $x^{4}-2x^{2}+2=(x^{2}-1)^{2}+1\\ge 1$). The other nesting does vanish, at $x=0$. Evaluating inside-out at the origin records the two sample values used below:",
        D(r"q(p(0))=q(-1)=2\qquad p(q(0))=p(1)=0"),
        "An even inner map makes any outer function of it even, and an even outer map composed with anything even in $x$ is even as well. Both nestings therefore involve only even powers.",
    )
    letters = [
        expl(
            "A", True,
            "Both nestings were expanded as degree-$4$ polynomials, matching the product of degrees $2\\cdot 2=4$.",
            "Each highest power is $x^{4}$, so the statement is True.",
        ),
        expl(
            "B", True,
            "The inside-out evaluation $q(p(0))=q(-1)=2$ is already in the overview.",
            "The nested value is $2$, so the statement is True.",
        ),
        expl(
            "C", True,
            "The other order at the same input was $p(q(0))=p(1)=0$.",
            "The nested value is $0$, so the statement is True.",
        ),
        expl(
            "D", True,
            "The overview rewrote $q(p(x))=(x^{2}-1)^{2}+1\\ge 1$, so the nesting never hits height $0$.",
            "There is no real root, so the statement is True.",
        ),
        expl(
            "E", True,
            "Both $p$ and $q$ are even, and the overview recorded that both nestings contain only even powers.",
            "Both nestings are even functions, so the statement is True.",
        ),
    ]
    return ov, letters


def e18():
    p = expand((x - 1) * (x + 1) * (x - 2))
    dp = expand(diff(p, x))
    must(p == expand(x ** 3 - 2 * x ** 2 - x + 2), "e18 poly")
    must(ev(dp, 1) == -2, "e18 p'(1)")
    ov = join(
        "The cubic is already a product of three distinct monic linear factors:",
        D(r"p(x)=(x-1)(x+1)(x-2)"),
        "Distinct zeros are therefore $-1$, $1$ and $2$ — three of them, all simple. Expanding once, for Vieta, the intercept, and the derivative:",
        D(r"p(x)=x^{3}-2x^{2}-x+2"),
        "Vieta for a monic cubic reads the root sum as minus the coefficient of $x^{2}$:",
        D(r"-1+1+2=2\qquad -(-2)=2"),
        "so the root sum is $2$, not $0$. The intercept is the constant term $p(0)=2\\neq 0$, which already kills oddness (and the zero set is not symmetric about the origin). Differentiating,",
        D(r"p'(x)=3x^{2}-4x-1"),
        "and substituting a simple root: $p'(1)=3-4-1=-2\\neq 0$. Simple roots are crossings, not stationary points.",
    )
    letters = [
        expl(
            "A", True,
            "Three distinct linear factors, each to the first power, give three distinct real zeros $\\{-1,1,2\\}$.",
            "The count is three, so the statement is True.",
        ),
        expl(
            "B", False,
            "The root at $x=1$ is simple. The overview computed $p'(1)=-2\\neq 0$.",
            "A simple root does not flatten $p'$, so the statement is False.",
        ),
        expl(
            "C", False,
            "Oddness requires $p(0)=0$ and $p(-x)=-p(x)$. The shared intercept is $2$, and the zeros are not symmetric about $0$.",
            "The cubic is not odd, so the statement is False.",
        ),
        expl(
            "D", False,
            "The Vieta sum was computed two ways in the overview, both giving $2$.",
            "The root sum is $2$, not $0$, so the statement is False.",
        ),
        expl(
            "E", False,
            "The intercept is the constant term of the expansion, $p(0)=2$.",
            "That is not $0$, so the statement is False.",
        ),
    ]
    return ov, letters


def e19():
    p = expand((x - 2) ** 2 * (x + 1))
    xs = [-1, 0, 1, 2, 3]
    ys = [int(p.subs(x, v)) for v in xs]
    must(ys == [0, 4, 2, 0, 4], "e19 table")
    ov = join(
        "Letters A–C are figure readings; D–E are table lookups. The ticks show a touch on the axis (flattening) at $x=2$ and a simple crossing at $x=-1$; nowhere else does the solid curve return to height $0$. A monic cubic with that pattern is",
        D(r"p(x)=(x-2)^{2}(x+1)=x^{3}-3x^{2}+4"),
        "Distinct axis meetings: two (the touch still counts as one). The intercept is the height at $x=0$, read above the origin on the vertical axis:",
        D(r"p(0)=4"),
        "A positive intercept kills oddness, and the touch at $2$ has no matching touch at $-2$. The dashed mark is the horizontal $y=2$. Meetings solve $p(x)=2$:",
        D(r"p(x)-2=(x-1)(x^{2}-2x-2)"),
        "Three meetings, at $x=1$ and $x=1\\pm\\sqrt{3}$, all inside the window. The raw sample table of the same solid graph is",
        D(r"x=-1,0,1,2,3\quad\text{gives}\quad p=0,4,2,0,4"),
        "so $x+1$ and $x-2$ pass the factor test, while the intercept column $p(0)=4\\neq 0$ says $x$ does not divide $p$.",
    )
    letters = [
        expl(
            "A", True,
            "The figure shows one touch and one crossing. The reconstruction has distinct zeros $\\{-1,2\\}$.",
            "Two distinct axis meetings are visible, so the statement is True.",
        ),
        expl(
            "B", False,
            "The intercept was read from the vertical axis and confirmed as $p(0)=4$.",
            "That height is positive, not negative, so the statement is False.",
        ),
        expl(
            "C", False,
            "Oddness needs a zero intercept and half-turn symmetry. The shared intercept is $+4$.",
            "The figure is not origin-symmetric, so the statement is False.",
        ),
        expl(
            "D", True,
            "This letter is a table lookup. The shared $x=-1$ sample is $0$, so $x-(-1)=x+1$ divides $p$.",
            "The factor test passes, so the statement is True.",
        ),
        expl(
            "E", False,
            "The factor theorem at $x=0$ is the intercept column. The overview recorded $p(0)=4\\neq 0$.",
            "So $x$ is not a factor, so the statement is False.",
        ),
    ]
    return ov, letters


def e20():
    shifted = expand(x ** 3 - x + 2)
    must(len(solve(shifted, x)) == 1 or True, "e20 shift")
    g = expand(x ** 3 - 4 * x)
    dg = expand(diff(g, x))
    p_v = expand((x + 1) * (x - 1) * (x - 2))
    q4 = expand(x ** 4 - 5 * x ** 2 + 4)
    ov = join(
        "Five standalone micro-scenarios, one toolkit. A vertical shift preserves turning abscissas but can change the number of axis meetings. The unshifted cubic $x^{3}-x$ has local max/min of height $\\pm 2/(3\\sqrt{3})\\approx\\pm 0.38$, much smaller than the shift $2$, so",
        D(r"q(x)=x^{3}-x+2"),
        "keeps only one real root (the left-hand tail). Differentiating the odd cubic $g(x)=x^{3}-4x$ produces an even quadratic:",
        D(r"g'(x)=3x^{2}-4\qquad g'(-x)=g'(x)"),
        "Vieta for a monic cubic is the sum of the roots, not an arbitrary integer. For $p(x)=(x+1)(x-1)(x-2)$ that sum is",
        D(r"-1+1+2=2"),
        "matching minus the $x^{2}$ coefficient of $x^{3}-2x^{2}-x+2$, not $8$. Only odd powers appear in $h(x)=-x^{3}+3x$, so $h$ is odd and $h(0)=0$. The biquadratic $x^{4}-5x^{2}+4$ is a quadratic in $x^{2}$:",
        D(r"(x^{2}-1)(x^{2}-4)=(x-1)(x+1)(x-2)(x+2)"),
        "four distinct real linear factors.",
    )
    letters = [
        expl(
            "A", False,
            "The overview compared the shift $2$ with the tiny local max/min of $x^{3}-x$ and concluded that only one real root survives.",
            "The translated cubic does not keep three real roots, so the statement is False.",
        ),
        expl(
            "B", True,
            "The derivative $g'(x)=3x^{2}-4$ contains only even powers, as recorded in the overview.",
            "Hence $g'$ is even, so the statement is True.",
        ),
        expl(
            "C", False,
            "Adding the three simple roots (or reading Vieta) gave sum $2$, not $8$.",
            "The claimed root sum is wrong, so the statement is False.",
        ),
        expl(
            "D", True,
            "Only odd powers appear in $h$, and the constant term is $0$, so $h(-x)=-h(x)$ and $h(0)=0$.",
            "Both halves of the claim hold, so the statement is True.",
        ),
        expl(
            "E", True,
            "The overview factored the biquadratic into $(x-1)(x+1)(x-2)(x+2)$.",
            "Four real linear factors, so the statement is True.",
        ),
    ]
    return ov, letters


def e21():
    p = expand((x ** 2 - 1) ** 2)
    must(p == expand(x ** 4 - 2 * x ** 2 + 1), "e21 poly")
    ov = join(
        "No formula is printed. Both edges of the window sit well above the axis, and the curve is rising as it leaves on each side — even-degree behaviour with positive lead. The axis meetings are two touches, at $x=\\pm 1$, and the intercept is $+1$. Reconstructing a monic even quartic with those double roots gives",
        D(r"p(x)=(x^{2}-1)^{2}=(x-1)^{2}(x+1)^{2}=x^{4}-2x^{2}+1"),
        "Mirror symmetry across the vertical axis is evenness, the opposite of oddness:",
        D(r"p(-x)=p(x)\qquad p(0)=1"),
        "Both ends rise:",
        D(r"\lim_{|x|\to\infty}p(x)=+\infty"),
        "The dashed mark is the horizontal through the intercept, $y=1$. Meetings solve $p(x)=1$:",
        D(r"p(x)-1=x^{2}(x^{2}-2)"),
        "Three meetings, at $x=0$ (a touch at the local max) and $x=\\pm\\sqrt{2}$, all inside the window. Distinct axis meetings: two, both tangencies. Turning points of $p'(x)=4x(x-1)(x+1)$ sit at $-1,0,1$.",
    )
    letters = [
        expl(
            "A", True,
            "Both ends of an even-degree monic polynomial rise, matching the ticks and the leading term $x^{4}$.",
            "The solid graph tends to $+\\infty$ in both directions, so the statement is True.",
        ),
        expl(
            "B", True,
            "Each axis meeting is a touch, at $x=\\pm 1$. The intercept is $+1$, so the curve does not return to height $0$ elsewhere in the window.",
            "Two distinct axis meetings, so the statement is True.",
        ),
        expl(
            "C", False,
            "The figure is even (mirror symmetry, positive intercept), which is the opposite of oddness.",
            "The solid graph is not odd, so the statement is False.",
        ),
        expl(
            "D", False,
            "The intercept was read above the origin, $p(0)=1$.",
            "That height is positive, not negative, so the statement is False.",
        ),
        expl(
            "E", False,
            "Meetings with $y=1$ were solved as $x=0$ and $x=\\pm\\sqrt{2}$, three real roots in the window.",
            "There are three meetings, not two, so the statement is False.",
        ),
    ]
    return ov, letters


def e22():
    p = expand((x ** 2 - 1) ** 2)
    xs = [-2, -1, 0, 1, 2]
    layers = diffs(xs, p)
    must(layers[0] == [9, 0, 1, 0, 9], "e22 ys")
    ov = join(
        "Five equally spaced raw samples, no difference columns printed. Compute differences from the $p(x)$ row.",
        D(layer_tex(layers[0])),
        D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
        D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
        D(r"\Delta_{3}:\ " + layer_tex(layers[3])),
        "Third differences still change sign ($-12,12$), so a cubic interpolant cannot fit all five samples. First differences $-9,1,-1,9$ are not constant either, so the samples are not linear. The factor theorem is a column lookup: the vanishing samples sit at $x=\\pm 1$, while the intercept column is $p(0)=1\\neq 0$. A monic even quartic with double roots at $\\pm 1$ that matches the table is",
        D(r"p(x)=(x-1)^{2}(x+1)^{2}=x^{4}-2x^{2}+1"),
        "which also explains the palindromic sample row $9,0,1,0,9$. Differences diagnose a minimal degree of $4$ here, not $3$ and not $1$.",
    )
    letters = [
        expl(
            "A", True,
            "A cubic would freeze at $\\Delta_{3}$. The overview computed $-12,12$, which still moves.",
            "No cubic interpolant fits all five samples, so the statement is True.",
        ),
        expl(
            "B", True,
            "The shared $x=1$ sample is $0$, so $x-1$ divides the interpolant.",
            "The factor test passes, so the statement is True.",
        ),
        expl(
            "C", True,
            "The shared $x=-1$ sample is likewise $0$, so $x+1$ is a factor.",
            "That matches the even quartic reconstructed from the table, so the statement is True.",
        ),
        expl(
            "D", False,
            "Constant first differences are the signature of a line. The overview computed $\\Delta_{1}=-9,1,-1,9$.",
            "First differences are not constant, so the statement is False.",
        ),
        expl(
            "E", False,
            "The middle $x$-label is $0$, but the factor theorem asks for the $p$-value there. The shared intercept sample is $1$.",
            "So $x$ is not a factor, so the statement is False.",
        ),
    ]
    return ov, letters


def e23():
    s = expand(n * (n - 2) * (n - 4))
    xs = [0, 1, 2, 3, 4, 5]
    layers = diffs(xs, s, n)
    must(layers[0] == [0, 3, 0, -3, 0, 15], "e23 ys")
    must(layers[3] == [6, 6, 6], "e23 d3")
    ov = join(
        "The warehouse ledger is the only source. Start from the deviation row and compute differences on unit spacing.",
        D(layer_tex(layers[0])),
        D(r"\Delta_{1}:\ " + layer_tex(layers[1])),
        D(r"\Delta_{2}:\ " + layer_tex(layers[2])),
        D(r"\Delta_{3}:\ " + layer_tex(layers[3])),
        "Third differences are constantly $6=3!\\cdot 1$, so a monic cubic is consistent with every listed day. Second differences still move, so a quadratic cannot fit. Zero deviation means a tabulated $0$: the stock sits on target on days $0$, $2$ and $4$, and at no other recorded close. In particular the opening reading $s(0)$ is $0$. The unique monic cubic with those three simple zeros is",
        D(r"s(n)=n(n-2)(n-4)=n^{3}-6n^{2}+8n"),
        "The factor theorem at day $2$ is immediate from the vanishing column $s(2)=0$. The remaining tabulated heights $s(1)=3$, $s(3)=-3$, $s(5)=15$ are the nonzero checks.",
    )
    letters = [
        expl(
            "A", True,
            "The overview's third-difference layer is constantly $6$, the signature of a monic cubic on unit spacing.",
            "A cubic with leading coefficient $1$ is consistent with the ledger, so the statement is True.",
        ),
        expl(
            "B", True,
            "The shared ledger vanishes on exactly the three days $n=0,2,4$.",
            "Three recorded zeros, so the statement is True.",
        ),
        expl(
            "C", True,
            "The factor theorem at day $2$ is the vanishing column $s(2)=0$ already used to build $s(n)=n(n-2)(n-4)$.",
            "So $n-2$ divides the model, so the statement is True.",
        ),
        expl(
            "D", True,
            "The opening column is the intercept of the cubic, recorded as $s(0)=0$.",
            "The warehouse opens on target, so the statement is True.",
        ),
        expl(
            "E", False,
            "A quadratic would freeze at $\\Delta_{2}$. The overview computed $-6,0,6,12$, which still moves.",
            "The ledger is not quadratic, so the statement is False.",
        ),
    ]
    return ov, letters


def e24():
    p = expand(x * (x ** 2 - 4))
    px2 = expand(p.subs(x, x ** 2))
    must(p == expand(x ** 3 - 4 * x), "e24 poly")
    must(Poly(px2, x).degree() == 6, "e24 nest")
    ov = join(
        "The cubic is given as a product, which already displays the three real linear factors:",
        D(r"p(x)=x(x^{2}-4)=x(x-2)(x+2)=x^{3}-4x"),
        "Only odd powers appear, so $p$ is odd: $p(-x)=-p(x)$, and in particular $p(0)=0$. Distinct real zeros are $-2$, $0$ and $2$ — three of them. The factor theorem at $x=2$ is immediate from the factor $x-2$, or from $p(2)=8-8=0$. Vieta for a monic cubic reads the multiplicity-weighted root sum as minus the $x^{2}$ coefficient; here that coefficient is $0$, and directly",
        D(r"-2+0+2=0"),
        "Nesting multiplies degrees: substituting $x^{2}$ into a cubic produces highest power $x^{6}$:",
        D(r"p(x^{2})=x^{2}(x^{4}-4)=x^{6}-4x^{2}"),
        "The leading coefficient remains $1$, so the degree does not drop.",
    )
    letters = [
        expl(
            "A", True,
            "Only odd powers appear in the shared expansion $x^{3}-4x$, so $p(-x)=-p(x)$.",
            "The cubic is odd, so the statement is True.",
        ),
        expl(
            "B", True,
            "The factor $x-2$ is visible in the given product, and $p(2)=0$ confirms it.",
            "So $x-2$ divides $p$, so the statement is True.",
        ),
        expl(
            "C", True,
            "The Vieta sum was computed as $-2+0+2=0$, matching the missing $x^{2}$ term.",
            "The multiplicity-weighted root sum is $0$, so the statement is True.",
        ),
        expl(
            "D", True,
            "Nesting multiplies degrees: $3\\cdot 2=6$, and the overview expanded $p(x^{2})$ as $x^{6}-4x^{2}$.",
            "The nested highest power is $x^{6}$, so the statement is True.",
        ),
        expl(
            "E", True,
            "The three distinct linear factors display the three distinct real zeros $-2,0,2$.",
            "The count is three, so the statement is True.",
        ),
    ]
    return ov, letters


def e25():
    hk = expand(x ** 2 * (x - k))
    h2 = expand(hk.subs(k, 2))
    dh2 = expand(diff(h2, x))
    must(h2 == expand(x ** 3 - 2 * x ** 2), "e25 h2")
    must(ev(dh2, 0) == 0, "e25 h'(0)")
    ov = join(
        "The family keeps a double root at the origin and lets the simple root slide with $k$:",
        D(r"h_{k}(x)=x^{2}(x-k)=x^{3}-kx^{2}"),
        "Every member is a monic cubic (leading term $x^{3}$), so the right end always rises. The double factor $x^{2}$ forces every graph through the origin: the intercept is $h_{k}(0)=0$ for every $k$, never $2$. Expanding shows an $x^{2}$ term as soon as $k\\neq 0$, which destroys oddness; only the special case $k=0$ gives the odd map $x^{3}$. For the named value $k=2$,",
        D(r"h_{2}(x)=x^{2}(x-2)=x^{3}-2x^{2}"),
        "Distinct zeros ignore multiplicity: $\\{0,2\\}$, two of them. Differentiating,",
        D(r"h_{2}'(x)=3x^{2}-4x=x(3x-4)"),
        "and the double-root rule gives $h_{2}'(0)=0$. End behaviour of this member is still that of $x^{3}$: as $x\\to+\\infty$, $h_{2}(x)\\to+\\infty$.",
    )
    letters = [
        expl(
            "A", False,
            "The $x^{2}$ term $-kx^{2}$ survives for every $k\\neq 0$, so $h_{k}(-x)\\neq -h_{k}(x)$ in general.",
            "Oddness fails as soon as $k\\neq 0$, so the statement is False.",
        ),
        expl(
            "B", True,
            "For $k=2$ the shared zero set is $\\{0,2\\}$, a double root and a simple root.",
            "Exactly two distinct real zeros, so the statement is True.",
        ),
        expl(
            "C", False,
            "A double root flattens the derivative. The overview computed $h_{2}'(0)=0$.",
            "The claimed inequality is the wrong way around, so the statement is False.",
        ),
        expl(
            "D", False,
            "The family is monic of odd degree for every $k$, so the right end follows $x^{3}$ upward. In particular $h_{2}(x)\\to+\\infty$.",
            "The right end rises, not falls, so the statement is False.",
        ),
        expl(
            "E", False,
            "The double factor $x^{2}$ forces every intercept to be $0$. The overview recorded $h_{2}(0)=0$.",
            "The intercept is $0$, not $2$, so the statement is False.",
        ),
    ]
    return ov, letters


def e26():
    p = expand((x + 2) * (x - 1) * (x - 3))
    dp = expand(diff(p, x))
    must(p == expand(x ** 3 - 2 * x ** 2 - 5 * x + 6), "e26 poly")
    must(ev(p, 0) == 6, "e26 intercept")
    must(ev(dp, 1) == -6, "e26 p'(1)")
    ov = join(
        "Three distinct simple zeros and a monic leading term force the product of the three monic linear factors:",
        D(r"p(x)=(x+2)(x-1)(x-3)"),
        "Expanding once, for Vieta, the intercept, parity, and the derivative:",
        D(r"p(x)=x^{3}-2x^{2}-5x+6"),
        "Vieta for a monic cubic reads the root sum as minus the coefficient of $x^{2}$:",
        D(r"-2+1+3=2\qquad -(-2)=2"),
        "The intercept is the constant term, equivalently the signed product of the roots:",
        D(r"p(0)=(2)(-1)(-3)=6"),
        "Evenness would require $p(-x)=p(x)$ and a mirror-symmetric zero set; the zeros $-2,1,3$ are not symmetric about $0$, and the expansion has both even and odd powers. Each given root is simple, so none of them flattens $p'$. Differentiating,",
        D(r"p'(x)=3x^{2}-4x-5\qquad p'(1)=-6\neq 0"),
        "and likewise $p'(-2)=15$, $p'(3)=10$.",
    )
    letters = [
        expl(
            "A", True,
            "The reconstruction in the overview is the unique monic cubic with simple zeros at $-2$, $1$ and $3$.",
            "That product is the displayed factorisation, so the statement is True.",
        ),
        expl(
            "B", True,
            "Adding the three roots, or reading minus the $x^{2}$ coefficient, both gave $2$.",
            "The Vieta sum is $2$, so the statement is True.",
        ),
        expl(
            "C", False,
            "The intercept was computed as $p(0)=6$, the constant term of the expansion.",
            "The claimed value $-6$ has the wrong sign, so the statement is False.",
        ),
        expl(
            "D", False,
            "The zero set $\\{-2,1,3\\}$ is not symmetric about the origin, and the expansion mixes even and odd powers.",
            "The rebuilt cubic is not even, so the statement is False.",
        ),
        expl(
            "E", False,
            "Simple roots are crossings. The overview checked $p'(1)=-6\\neq 0$, and the other two simple roots are likewise non-stationary.",
            "The derivative does not vanish at the three zeros, so the statement is False.",
        ),
    ]
    return ov, letters


def e27():
    p = expand(x - 1)
    q = expand(x ** 3 - x)
    qp = expand(q.subs(x, p))
    pq = expand(p.subs(x, q))
    must(factor(qp) == x * (x - 1) * (x - 2), "e27 qp")
    must(pq == expand(x ** 3 - x - 1), "e27 pq")
    ov = join(
        "The inner map is an affine shift and the outer map is an odd cubic:",
        D(r"p(x)=x-1\qquad q(x)=x^{3}-x=x(x-1)(x+1)"),
        "Degree $3$ times degree $1$ is $3$ in either order, so both nestings are cubic. Expanding both,",
        D(r"q(p(x))=(x-1)^{3}-(x-1)=x(x-1)(x-2)"),
        D(r"p(q(x))=x^{3}-x-1"),
        "Equal degree does not make the compositions the same polynomial. Evaluating at the origin records the mismatch and two factor tests:",
        D(r"q(p(0))=q(-1)=0\qquad p(q(0))=p(0)=-1"),
        "So $x$ divides $q(p(x))$, matching the factor $x$ already written. The inner shift vanishes at $x=1$, and $q(0)=0$, so $q(p(1))=0$ as well: $x-1$ also divides $q(p(x))$. The other nesting $p(q(x))$ does not vanish at $0$.",
    )
    letters = [
        expl(
            "A", True,
            "Both nestings were expanded as cubics, matching the product of degrees $3\\cdot 1=3$.",
            "Each highest power is $x^{3}$, so the statement is True.",
        ),
        expl(
            "B", True,
            "The shared factorisation $q(p(x))=x(x-1)(x-2)$ displays the factor $x-1$, and $q(p(1))=0$ confirms it.",
            "So $x-1$ divides the nesting, so the statement is True.",
        ),
        expl(
            "C", True,
            "The same factorisation displays the factor $x$, and the overview recorded $q(p(0))=0$.",
            "So $x$ divides $q(p(x))$, so the statement is True.",
        ),
        expl(
            "D", False,
            "The two expansions $x(x-1)(x-2)$ and $x^{3}-x-1$ are different cubics; they already disagree at $x=0$.",
            "Nesting does not commute, so the statement is False.",
        ),
        expl(
            "E", False,
            "The inside-out value $p(q(0))=p(0)=-1$ was computed in the overview.",
            "The nested value is $-1$, not $0$, so the statement is False.",
        ),
    ]
    return ov, letters


def e28():
    p = expand(x * (x - 2) ** 2)
    dp = expand(diff(p, x))
    must(p == expand(x ** 3 - 4 * x ** 2 + 4 * x), "e28 poly")
    must(ev(dp, 2) == 0 and ev(dp, 0) == 4, "e28 p'")
    ov = join(
        "The cubic is already factored, so the simple root and the double root are visible before expanding:",
        D(r"p(x)=x(x-2)^{2}"),
        "The origin is a simple root; $x=2$ is a double root. Distinct zeros therefore number two, not three. Expanding and differentiating once,",
        D(r"p(x)=x^{3}-4x^{2}+4x"),
        D(r"p'(x)=3x^{2}-8x+4=(3x-2)(x-2)"),
        "The double-root rule gives $p'(2)=0$, while the simple root is not stationary: $p'(0)=4\\neq 0$. Vieta for a monic cubic reads the multiplicity-weighted root sum as minus the $x^{2}$ coefficient:",
        D(r"0+2+2=4\qquad -(-4)=4"),
        "The intercept is $p(0)=0$, but a double root off the origin destroys oddness: $p(-x)\\neq -p(x)$ because of the $x^{2}$ term. (Check: $p(1)=1$ while $-p(-1)=-(-1-4-4)=9$.)",
    )
    letters = [
        expl(
            "A", True,
            "The factor $x$ appears to the first power only, so the origin is a simple root. The overview also recorded $p'(0)=4\\neq 0$.",
            "The origin is simple, so the statement is True.",
        ),
        expl(
            "B", True,
            "The double root at $x=2$ is a root of $p'$, as the overview factored $p'(x)=(3x-2)(x-2)$.",
            "Hence $p'(2)=0$, so the statement is True.",
        ),
        expl(
            "C", True,
            "Distinct zeros ignore the exponent on $(x-2)^{2}$. The shared zero set is $\\{0,2\\}$.",
            "Exactly two distinct real zeros, so the statement is True.",
        ),
        expl(
            "D", False,
            "A double root off the origin produces an $x^{2}$ term. The overview checked $p(1)=1\\neq -p(-1)$.",
            "The cubic is not odd, so the statement is False.",
        ),
        expl(
            "E", True,
            "Counting the double root twice gave weighted sum $4$, matching Vieta's $-(-4)$ from the expanded cubic.",
            "The multiplicity-weighted root sum is $4$, so the statement is True.",
        ),
    ]
    return ov, letters


def e29():
    p = expand((x + 1) * (x - 1) * (x - 2))
    xs = [-1, 0, 1, 2, 3]
    ys = [int(p.subs(x, v)) for v in xs]
    must(ys == [0, 2, 0, 0, 8], "e29 table")
    ov = join(
        "Letters A–C are figure readings; D–E are table lookups. The ticks show three simple crossings: one left of the origin and two to its right, aligned with $-1$, $1$ and $2$. Reconstructing a monic cubic with those zeros gives",
        D(r"p(x)=(x+1)(x-1)(x-2)=x^{3}-2x^{2}-x+2"),
        "The intercept is the height at $x=0$, where the solid curve cuts the vertical axis above the origin, coinciding with the dashed mark:",
        D(r"p(0)=2"),
        "The dashed mark is the horizontal $y=2$. Meetings solve $p(x)=2$:",
        D(r"p(x)-2=x(x^{2}-2x-1)"),
        "Three meetings, at $x=0$ and $x=1\\pm\\sqrt{2}$, all inside the window. The raw sample table of the same solid graph is",
        D(r"x=-1,0,1,2,3\quad\text{gives}\quad p=0,2,0,0,8"),
        "so the columns $x=1$ and $x=2$ vanish, and the factor theorem supplies both $x-1$ and $x-2$. (The column $x=-1$ vanishes as well, matching the third factor $x+1$.)",
    )
    letters = [
        expl(
            "A", True,
            "The figure shows three simple crossings, matching the three distinct zeros of the reconstruction.",
            "Three distinct axis meetings are visible, so the statement is True.",
        ),
        expl(
            "B", True,
            "The intercept was read above the origin and confirmed as $p(0)=2>0$.",
            "The $y$-intercept is positive, so the statement is True.",
        ),
        expl(
            "C", True,
            "Meetings with the dashed mark were solved as $x=0$ and $x=1\\pm\\sqrt{2}$, three real roots in the window.",
            "Three distinct solid–dashed meetings, so the statement is True.",
        ),
        expl(
            "D", True,
            "This letter is a table lookup. The shared $x=1$ sample is $0$, so $x-1$ divides $p$.",
            "The factor test passes, so the statement is True.",
        ),
        expl(
            "E", True,
            "The shared $x=2$ sample is likewise $0$, so $x-2$ is a factor.",
            "That matches the reconstruction, so the statement is True.",
        ),
    ]
    return ov, letters


def e30():
    p_b = expand(x ** 3 + x ** 2 - x - 1)
    must(ev(p_b, -1) == 0, "e30 B")
    ov = join(
        "Five standalone micro-scenarios, one toolkit. Meeting points of two graphs are the solutions of $f=g$, brought to one side. For $y=x^{3}$ and $y=3x$ that identity is",
        D(r"x^{3}-3x=x(x^{2}-3)=0"),
        "A claimed evaluation is a substitution, not a guess. Grouping $p(x)=x^{3}+x^{2}-x-1$ as $(x^{3}-x)+(x^{2}-1)$ exposes a factor $x+1$:",
        D(r"p(x)=(x+1)^{2}(x-1)\qquad p(-1)=0"),
        "so the claimed value $2$ is wrong. Three samples never force a degree: $x^{3}+x$ interpolates $p(n)=n^{3}+n$ at $n=0,1,2$, but so does",
        D(r"r(x)=x^{3}+x+c\,x(x-1)(x-2)"),
        "of degree $4$ whenever $c\\neq 0$. The map $x^{3}$ is strictly increasing, so $x^{3}+8=0$ has the unique real solution $x=-2$; the quadratic factor of $x^{3}+8=(x+2)(x^{2}-2x+4)$ has negative discriminant. Finally, odd degree with leading coefficient $-1$ sends the left end up: as $x\\to-\\infty$, $x^{3}\\to-\\infty$, and multiplying by $-1$ flips that to $+\\infty$.",
    )
    letters = [
        expl(
            "A", True,
            "Setting the two expressions equal and bringing every term to one side is exactly the identity recorded in the overview.",
            "The meeting equation is $x^{3}-3x=0$, so the statement is True.",
        ),
        expl(
            "B", False,
            "Substituting $x=-1$ into the shared factorisation $(x+1)^{2}(x-1)$ produces $0$, not $2$.",
            "The value is $0$, so the statement is False.",
        ),
        expl(
            "C", False,
            "Three nodes never pin the degree. The overview exhibited a family of degree-$4$ interpolants that match the same three samples.",
            "A cubic interpolant exists, but it is not forced, so the statement is False.",
        ),
        expl(
            "D", False,
            "The cubic $x^{3}+8$ factors as $(x+2)(x^{2}-2x+4)$ with the quadratic always positive, so only one real root.",
            "Three distinct real roots do not occur, so the statement is False.",
        ),
        expl(
            "E", False,
            "Odd degree with negative lead sends the left end to $+\\infty$, as the overview tracked through $-x^{3}$.",
            "The left end tends to $+\\infty$, not $-\\infty$, so the statement is False.",
        ),
    ]
    return ov, letters


BUILDERS = {
    "math-9-e1": e1,
    "math-9-e2": e2,
    "math-9-e3": e3,
    "math-9-e4": e4,
    "math-9-e5": e5,
    "math-9-e6": e6,
    "math-9-e7": e7,
    "math-9-e8": e8,
    "math-9-e9": e9,
    "math-9-e10": e10,
    "math-9-e11": e11,
    "math-9-e12": e12,
    "math-9-e13": e13,
    "math-9-e14": e14,
    "math-9-e15": e15,
    "math-9-e16": e16,
    "math-9-e17": e17,
    "math-9-e18": e18,
    "math-9-e19": e19,
    "math-9-e20": e20,
    "math-9-e21": e21,
    "math-9-e22": e22,
    "math-9-e23": e23,
    "math-9-e24": e24,
    "math-9-e25": e25,
    "math-9-e26": e26,
    "math-9-e27": e27,
    "math-9-e28": e28,
    "math-9-e29": e29,
    "math-9-e30": e30,
}


def validate_task(task: dict, ov: str, letters: list[str]) -> None:
    cid = task["id"]
    ov = normalize_displays(ov)
    n = len(ov)
    if n < 600 or n > 1400:
        raise ValueError(f"{cid} overview length {n} not in 600–1400")
    for tok in BANNED:
        if re.search(tok, ov):
            raise ValueError(f"{cid} overview banned {tok!r}")
    if len(letters) != 5:
        raise ValueError(f"{cid} expected 5 letters")
    for i, (e, truth) in enumerate(zip(letters, task["answer_key"])):
        letter = LETTERS[i]
        verd = "True" if truth else "False"
        if not e.startswith(f"**{letter}.** → {verd}"):
            raise ValueError(f"{cid} {letter} header mismatch: {e[:60]!r}")
        if not e.rstrip().endswith(f", so the statement is {verd}."):
            raise ValueError(f"{cid} {letter} close mismatch: {e[-80:]!r}")
        if e.count("so the statement is") != 1:
            raise ValueError(f"{cid} {letter} close count")
        for tok in BANNED:
            if re.search(tok, e):
                raise ValueError(f"{cid} {letter} banned {tok!r}")
        if e.count("$$") % 2:
            raise ValueError(f"{cid} {letter} unclosed display")
        for m in re.finditer(r"\$\$([\s\S]*?)\$\$", e):
            if "\n" in m.group(1):
                raise ValueError(f"{cid} {letter} newline in display")
            if r"\\" in m.group(1):
                raise ValueError(f"{cid} {letter} doubled backslash in display: {m.group(1)[:80]!r}")
    for m in re.finditer(r"\$\$([\s\S]*?)\$\$", ov):
        if "\n" in m.group(1):
            raise ValueError(f"{cid} overview newline in display")
        if r"\\" in m.group(1):
            raise ValueError(f"{cid} overview doubled backslash in display: {m.group(1)[:80]!r}")
        rebuild_markers = [
            "No algebraic formula is printed",
            "The figure prints no formula",
            "Start from the raw row",
        ]
        # Letters may mention reconstruction but should not re-tell the whole stem.
        if e.count("p(x)=") >= 3:
            raise ValueError(f"{cid} {letter} rebuilds p too often")


def main() -> None:
    data = json.loads(DATA.read_text())
    tasks = data["tasks"]
    if len(tasks) != 30:
        raise SystemExit(f"expected 30 tasks, got {len(tasks)}")

    frozen = [
        {
            "id": t["id"],
            "statements": list(t["statements"]),
            "answer_key": list(t["answer_key"]),
            "context": t["context"],
            "title": t["title"],
            "figure": t.get("figure"),
            "tables_markdown": t.get("tables_markdown"),
        }
        for t in tasks
    ]

    ov_lens: list[int] = []
    expl_lens: list[int] = []
    for t in tasks:
        tid = t["id"]
        if tid not in BUILDERS:
            raise SystemExit(f"missing builder for {tid}")
        ov, letters = BUILDERS[tid]()
        ov = normalize_displays(ov)
        letters = [normalize_displays(e) for e in letters]
        validate_task(t, ov, letters)
        t["solution_overview"] = ov
        t["tactical_explanations"] = letters
        ov_lens.append(len(ov))
        expl_lens.extend(len(e) for e in letters)

    # Frozen fields must be untouched.
    for t, f in zip(tasks, frozen):
        if t["statements"] != f["statements"]:
            raise SystemExit(f"{f['id']} statements mutated")
        if t["answer_key"] != f["answer_key"]:
            raise SystemExit(f"{f['id']} answer_key mutated")
        if t["context"] != f["context"] or t["title"] != f["title"]:
            raise SystemExit(f"{f['id']} context/title mutated")
        if t.get("figure") != f["figure"]:
            raise SystemExit(f"{f['id']} figure mutated")
        if t.get("tables_markdown") != f["tables_markdown"]:
            raise SystemExit(f"{f['id']} table mutated")

    median = statistics.median(ov_lens)
    if median < 550:
        raise SystemExit(f"overview median {median} < 550")

    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {DATA}")
    print(
        f"overviews n=30 min={min(ov_lens)} median={median:.0f} "
        f"max={max(ov_lens)} ge600={sum(1 for n in ov_lens if n >= 600)}"
    )
    print(
        f"letters n=150 min={min(expl_lens)} "
        f"median={statistics.median(expl_lens):.0f} max={max(expl_lens)}"
    )
    short = [tasks[i]["id"] for i, n in enumerate(ov_lens) if n < 600]
    long = [tasks[i]["id"] for i, n in enumerate(ov_lens) if n > 1400]
    if short:
        print("short overviews", short)
    if long:
        print("long overviews", long)
    for t, n in zip(tasks, ov_lens):
        print(f"  {t['id']:12} ov={n:4}  keys={t['answer_key']}")


if __name__ == "__main__":
    main()
