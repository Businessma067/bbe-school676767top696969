#!/usr/bin/env python3
"""Rewrite Ch9 core tactical_explanations that still use enricher template openers.

Batch A: ids listed in /tmp/ch9-template-a.json.

Style: Chapter 4 tutor voice (unique narrative opener, single-line $$ displays,
connecting prose, close with ', so the statement is True|False.').

EXPL maps each task id to five explanation bodies INCLUDING the
``**A.** → True|False`` header line.

KEY_FIXES records honest answer-key flips where algebra disagrees with the
live key (enricher inverted several generator-correct truths). Stems and
statements are never rewritten.

Run: python3 scripts/ch9_core_rewrite_templates_a.py
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

DATA = Path(__file__).resolve().parents[1] / "src/data/math-ch9-polynomials.json"
BATCH = Path("/tmp/ch9-template-a.json")

LETTERS = "ABCDE"

TEMPLATE_OPENERS = [
    "Work from the polynomial named in the stem",
    "A polynomial is evaluated by substituting",
    "A real root is where the graph meets",
    "Turning points and acceleration signs",
    "The highest power and the number in front",
    "The model is an ordinary polynomial",
    "Evenness and oddness are identities",
    "A real root is an input where the graph meets",
    "Two written formulas name the same polynomial",
    "A quadratic function is a polynomial whose highest power",
    "Far from the origin the leading term dwarfs",
    "The claim is a statement about a concrete polynomial",
]

BANNED = [
    r"\\deg",
    r"\\circ",
    r"\\text\{",
    "Matching the claim",
    "read the stem fully",
    "translate words into algebra",
    "The rewritten claim restates",
    "yes-or-no decision",
    "Retargeted",
    "This settles the claim",
    "Keep the intermediate",
    "From the stem,",
    "Each letter is then",
    "That is not what the claim asserts",
    "The arithmetic does not match the claim",
    "That is the comparison the claim asked for",
    "as forced by the coefficients",
    "A solver who",
    "rushed solver",
    "Watch.",
    "Trap:",
    "—",
]

# (task id, 0-based statement index) -> honest truth value.
KEY_FIXES: dict[tuple[str, int], bool] = {
    ("math-9-2", 3): True,    # p(x)=x^3-2x+4 has top power x^3
    ("math-9-4", 4): False,   # p(2)=(1)(4)(-1)=-4, so x=2 is not a root
    ("math-9-5", 3): False,   # (2x-1)(x^2+1) has leading coefficient 2, not 1
    ("math-9-6", 4): True,    # s(x)=4x^2+x-2 has leading coefficient 4
    ("math-9-7", 3): True,    # x(x-2)(x+2)=0 at 0, 2, -2
    ("math-9-14", 3): True,   # C(q)=q^3-6q^2+20q has top power q^3
    ("math-9-19", 4): True,   # p-ell = x^3-2x still has top power x^3
    ("math-9-21", 3): True,   # p(sqrt(3))=(3-3)^2-1=-1
}

EXPL: dict[str, list[str]] = {}

EXPL["math-9-2"] = [
    r"""**A.** → True

At the origin every positive power of $x$ drops out, leaving only the leftover constant.

$$p(x)=x^{3}-2x+4$$

$$p(0)=0-0+4=4$$

That leftover $4$ is exactly the claimed height. Substituting $x=1$ instead gives $1-2+4=3$, a different column, not this intercept. The value at $x=0$ is $4$, so the statement is True.""",
    r"""**B.** → True

One step to the right of the origin, each written power of $x$ is just $1$.

$$p(1)=1^{3}-2\cdot 1+4$$

$$p(1)=1-2+4=3$$

The three terms add to $3$, matching the claim. The intercept $p(0)=4$ is a different height, so this $3$ is not a recycled constant term. The value at $x=1$ is $3$, so the statement is True.""",
    r"""**C.** → False

A negative input flips the sign of every odd power, so both the cube and the linear term change sign.

$$p(-1)=(-1)^{3}-2(-1)+4$$

$$p(-1)=-1+2+4=5$$

The three contributions add to $5$, not to the claimed $7$. Mixing up $(-1)^{3}=-1$ with $+1$ is how $7$ appears. The actual height is $5$, so the statement is False.""",
    r"""**D.** → True

Scan the written powers from largest exponent to smallest: the top surviving term names the highest power.

$$p(x)=x^{3}-2x+4$$

The $x^{3}$ term is present with coefficient $1\neq 0$, and nothing of exponent $4$ or more is written.

$$x^{3}$$

A missing $x^{2}$ term does not lower that top exponent. The highest power is $x^{3}$, so the statement is True.""",
    r"""**E.** → False

The constant term is the number written with no $x$ attached, equivalently the height at $x=0$.

$$p(x)=x^{3}-2x+4$$

$$p(0)=4$$

The $-2$ belongs to the linear term $-2x$, not to the leftover constant. Reading the coefficient of $x$ as the constant mixes the two lowest terms. The constant term is $4$, not $-2$, so the statement is False.""",
]

EXPL["math-9-3"] = [
    r"""**A.** → True

Look at the written formula in descending powers: the largest exponent that actually appears is the highest power.

$$q(x)=4x^{3}-x+5$$

The cubic term $4x^{3}$ is present, and no $x^{4}$ is written.

$$4x^{3}$$

A missing $x^{2}$ term does not change that top exponent. The highest power of $x$ in $q$ is $x^{3}$, so the statement is True.""",
    r"""**B.** → True

The leading coefficient is the number sitting in front of the highest surviving power, not the leftover constant.

$$q(x)=4x^{3}-x+5$$

The top term is $4\cdot x^{3}$, so that number is $4$.

$$4$$

The $5$ is $q(0)$, and the $-1$ is the coefficient of $x$; neither is the lead. The leading coefficient is $4$, so the statement is True.""",
    r"""**C.** → False

A quadratic stops at $x^{2}$. Read the top power of $q$ before naming the family.

$$q(x)=4x^{3}-x+5$$

The $x^{3}$ term has coefficient $4\neq 0$, so the graph is a cubic, not a parabola.

$$x^{3}$$

How many terms happen to be written does not matter; only the highest surviving power does. The function is cubic rather than quadratic, so the statement is False.""",
    r"""**D.** → True

Every positive power of $x$ vanishes at the origin, so $q(0)$ is exactly the constant term of the written rule.

$$q(0)=4\cdot 0^{3}-0+5$$

$$q(0)=5$$

That $5$ is the number named in the claim. Substituting $x=1$ gives $4-1+5=8$, a different height, not this intercept. The constant term of $4x^{3}-x+5$ is already $5$ on sight. The value at $0$ is $5$, so the statement is True.""",
    r"""**E.** → False

The coefficient of $x$ is $-1$, but the leading coefficient is the number in front of the highest power.

$$q(x)=4x^{3}-x+5$$

The top term is $4x^{3}$, so the lead is $4$, not $-1$.

$$4\neq -1$$

Quoting the linear coefficient as the lead is the usual mix-up between the two ends of the polynomial. The leading coefficient is $4$, so the statement is False.""",
]

EXPL["math-9-4"] = [
    r"""**A.** → True

A product of linear factors vanishes exactly where one of those factors is zero, so read the three roots off the brackets.

$$p(x)=(x-1)(x+2)(x-3)$$

$$x=1,\qquad x=-2,\qquad x=3$$

Those are the three numbers named in the claim. Expanding to $x^{3}-2x^{2}-5x+6$ is only a check; it does not move the zeros. The roots are $1$, $-2$ and $3$, so the statement is True.""",
    r"""**B.** → True

The first bracket already vanishes at $x=1$, so the whole product is zero there without expanding.

$$p(1)=(1-1)(1+2)(1-3)$$

$$p(1)=0\cdot 3\cdot(-2)=0$$

The expanded cubic $x^{3}-2x^{2}-5x+6$ gives the same $1-2-5+6=0$. A neighbouring non-root $p(2)=-4$ shows that vanishing is special to $x=1$ among these two integers. The value is $0$, so the statement is True.""",
    r"""**C.** → True

The constant term of a product is the product of the constant pieces, which is also $p(0)$.

$$p(0)=(0-1)(0+2)(0-3)$$

$$p(0)=(-1)\cdot 2\cdot(-3)=6$$

From the expansion $x^{3}-2x^{2}-5x+6$ the same $6$ sits as the leftover constant. Both routes give the claimed height $6$. The value at $0$ is $6$, so the statement is True.""",
    r"""**D.** → False

Three linear factors multiply to a cubic: the highest power is the sum of the three exponents $1+1+1$.

$$(x-1)(x+2)(x-3)=x^{3}-2x^{2}-5x+6$$

The $x^{3}$ term survives with coefficient $1\neq 0$.

$$x^{3}$$

A quadratic would have stopped at $x^{2}$. After expanding, the top power is $x^{3}$, not $x^{2}$, so the statement is False.""",
    r"""**E.** → False

The listed roots are $1$, $-2$ and $3$; the integer $2$ is not among them, so test it in the product.

$$p(2)=(2-1)(2+2)(2-3)$$

$$p(2)=1\cdot 4\cdot(-1)=-4$$

The height is $-4$, not $0$. Expanding gives the same check: $8-8-10+6=-4$. A root would have required a factor $x-2$, which is absent. The value is nonzero, so the statement is False.""",
]

EXPL["math-9-5"] = [
    r"""**A.** → True

Multiply the highest power in each bracket: the line contributes $x^{1}$ and the quadratic contributes $x^{2}$.

$$p(x)=(2x-1)(x^{2}+1)$$

$$2x\cdot x^{2}=2x^{3}$$

Expanding fully gives $p(x)=2x^{3}-x^{2}+2x-1$, whose top term is that $2x^{3}$. No $x^{4}$ is created by the product of a line and a quadratic. The highest power is $x^{3}$, so the statement is True.""",
    r"""**B.** → True

A real root requires a vanishing factor. The quadratic $x^{2}+1$ is at least $1$ for every real $x$, so it never hits zero.

$$x^{2}+1\ge 1>0$$

The only remaining factor is the line:

$$2x-1=0\implies x=\frac{1}{2}$$

That single real abscissa is the unique real root of the product. The graph meets the axis once, so the statement is True.""",
    r"""**C.** → True

At the origin the product collapses to the product of the two constant pieces.

$$p(0)=(0-1)(0+1)$$

$$p(0)=(-1)\cdot 1=-1$$

The expanded form $2x^{3}-x^{2}+2x-1$ displays the same leftover $-1$. A neighbouring value $p(1)=(1)(2)=2$ is a different height, not this intercept. The value at $0$ is $-1$, so the statement is True.""",
    r"""**D.** → False

The leading coefficient of a product is the product of the two leading coefficients.

$$(2x-1)(x^{2}+1)$$

The line contributes $2$ and the quadratic contributes $1$, so the cubic lead is $2\cdot 1=2$.

$$2x^{3}$$

Expanding confirms $p(x)=2x^{3}-x^{2}+2x-1$. The number in front of $x^{3}$ is $2$, not $1$, so the statement is False.""",
    r"""**E.** → False

Evenness is the identity $p(-x)=p(x)$ on the whole line, so replace every $x$ by $-x$ and compare.

$$p(-x)=(-2x-1)(x^{2}+1)$$

$$p(-x)=-2x^{3}-x^{2}-2x-1$$

The original expansion $2x^{3}-x^{2}+2x-1$ is not the same polynomial: the odd powers have flipped. A numerical check $p(1)=2$ against $p(-1)=-4$ already fails. The two sides disagree, so the statement is False.""",
]

EXPL["math-9-6"] = [
    r"""**A.** → True

Add the two cubics coefficient by coefficient: like powers combine, and opposite $x^{3}$ terms cancel.

$$s(x)=(x^{3}-x^{3})+4x^{2}+x-2$$

$$s(x)=4x^{2}+x-2$$

Every coefficient of the claimed quadratic matches. A leftover $x^{3}$ would have survived if the two leading $1$ and $-1$ had failed to cancel; they do cancel. The sum is exactly that quadratic, so the statement is True.""",
    r"""**B.** → False

The highest power of a sum is the highest power that does not cancel. Here the two cubic leads are $1$ and $-1$.

$$1+(-1)=0$$

After that cancellation the next term is $4x^{2}$, with coefficient $4\neq 0$.

$$s(x)=4x^{2}+x-2$$

The $x^{3}$ term is gone, so the highest remaining power is $x^{2}$, not $x^{3}$, so the statement is False.""",
    r"""**C.** → True

The constant term of the sum is the sum of the two constant terms, which is also $s(0)$.

$$s(0)=p(0)+q(0)=0+(-2)$$

$$s(0)=-2$$

From the simplified rule $4x^{2}+x-2$ the same $-2$ sits as the leftover constant. A neighbouring check $s(1)=4+1-2=3$ is a different height. The value at $0$ is $-2$, so the statement is True.""",
    r"""**D.** → True

After the two $x^{3}$ terms cancel, the surviving top power is $x^{2}$, which is the signature of a quadratic.

$$s(x)=4x^{2}+x-2$$

The coefficient of $x^{2}$ is $4\neq 0$, and no cubic term remains.

$$x^{2}$$

A cubic would have needed a surviving $x^{3}$. Counting the original two cubics without adding them would wrongly keep degree $3$. The sum is a quadratic function, so the statement is True.""",
    r"""**E.** → True

Once the cubic terms have cancelled, the leading coefficient is the number in front of the new highest power $x^{2}$.

$$s(x)=4x^{2}+x-2$$

That number is $4$. The cancelled $x^{3}$ coefficients $1$ and $-1$ are no longer the lead.

$$4$$

Reading the original cubic leads instead of the simplified quadratic is the trap. The leading coefficient of $s$ is $4$, so the statement is True.""",
]

EXPL["math-9-7"] = [
    r"""**A.** → True

To test whether $p$ is odd, replace every $x$ by $-x$ and compare the result with $-p(x)$.

$$p(-x)=(-x)^{3}-4(-x)$$

$$p(-x)=-x^{3}+4x=-(x^{3}-4x)=-p(x)$$

Only odd powers appear, so each term picks up a minus sign. A numerical check $p(2)=0$ and $p(-2)=0$ is consistent but weaker than the identity. The identity $p(-x)=-p(x)$ holds, so the statement is True.""",
    r"""**B.** → False

Symmetry about the $y$-axis is evenness, the identity $p(-x)=p(x)$, not the odd test.

$$p(-x)=-x^{3}+4x$$

$$p(x)=x^{3}-4x$$

The two sides are opposites, which is origin symmetry, not mirror symmetry across the vertical axis. The graph of an odd cubic is rotationally symmetric about the origin. The $y$-axis test fails, so the statement is False.""",
    r"""**C.** → True

Every odd function vanishes at the origin, and this cubic has no constant term to begin with.

$$p(0)=0^{3}-4\cdot 0$$

$$p(0)=0$$

Factoring $p(x)=x(x^{2}-4)$ makes the same fact visible: the explicit factor of $x$ forces $p(0)=0$. A neighbouring root $p(2)=0$ is a different abscissa, not this intercept. The height at the origin is $0$, so the statement is True.""",
    r"""**D.** → True

Factor out the obvious $x$, then split the remaining difference of squares.

$$p(x)=x(x^{2}-4)=x(x-2)(x+2)$$

The product vanishes at $x=0$, $x=2$ and $x=-2$.

$$0,\quad 2,\quad -2$$

Those three numbers are exactly the claimed roots. Expanding back to $x^{3}-4x$ does not add extra zeros. The roots are $0$, $2$ and $-2$, so the statement is True.""",
    r"""**E.** → False

The integer $2$ is a root of the factored cubic, so the height there is $0$ rather than $4$.

$$p(2)=2^{3}-4\cdot 2$$

$$p(2)=8-8=0$$

From the factors, $p(2)=2(0)(4)=0$ as well. The claimed $4$ would have been $p(2)$ for $x^{3}-4$, missing the linear term $-4x$. The value is $0$, not $4$, so the statement is False.""",
]

EXPL["math-9-8"] = [
    r"""**A.** → True

On the far right a cubic is ruled by its leading term, here $-2x^{3}$ with a negative coefficient.

$$p(x)=-2x^{3}+x+1$$

$$x\to+\infty\implies -2x^{3}\to-\infty$$

The lower terms $x+1$ grow strictly slower than $x^{3}$, so they cannot flip that far-out sign. Odd degree with a negative lead dives on the right. The graph goes to $-\infty$ as $x\to+\infty$, so the statement is True.""",
    r"""**B.** → False

On the far left, $x^{3}$ itself is negative, so a negative times a negative leading coefficient sends the cubic up.

$$x\to-\infty\implies x^{3}\to-\infty$$

$$-2x^{3}\to+\infty$$

Thus $p(x)\to+\infty$ as $x\to-\infty$, not to $-\infty$. The lower terms still cannot overtake the cubic. The left-hand end rises, so the statement is False.""",
    r"""**C.** → True

Rewrite in descending powers and read the number in front of the highest surviving term.

$$p(x)=-2x^{3}+x+1$$

The top term is $-2\cdot x^{3}$, so the leading coefficient is $-2$.

$$-2$$

The $+1$ is the constant term and the $+1$ in front of $x$ is the linear coefficient; neither is the lead. The leading coefficient is $-2$, so the statement is True.""",
    r"""**D.** → True

At the origin every positive power vanishes, so $p(0)$ is the leftover constant of the written rule.

$$p(0)=-2\cdot 0+0+1$$

$$p(0)=1$$

That $1$ is the $y$-intercept of the graph. A neighbouring value $p(1)=-2+1+1=0$ is a different height, not this intercept. The value at $0$ is $1$, matching the claim, so the statement is True.""",
    r"""**E.** → False

A quadratic would have highest power $x^{2}$. This rule still carries a nonzero cubic term.

$$p(x)=-2x^{3}+x+1$$

The coefficient of $x^{3}$ is $-2\neq 0$.

$$-2x^{3}$$

Missing the $x^{2}$ term does not demote a cubic to a parabola. The family is settled by the top surviving power alone. The function is cubic rather than quadratic, so the statement is False.""",
]

EXPL["math-9-11"] = [
    r"""**A.** → True

Meetings with the constant graph $c(x)=0$ are the real roots of $p$, so factor the cubic.

$$p(x)=x^{3}-x=x(x^{2}-1)$$

$$x(x-1)(x+1)=0$$

The three distinct zeros are $x=0$, $x=1$ and $x=-1$. Each gives a crossing of the horizontal axis, hence a meeting with $c$. Three distinct real roots give three meetings, so the statement is True.""",
    r"""**B.** → True

To test oddness, substitute $-x$ and compare with $-p(x)$.

$$p(-x)=(-x)^{3}-(-x)=-x^{3}+x$$

$$p(-x)=-(x^{3}-x)=-p(x)$$

Only odd powers appear, so the identity holds on the whole line. A numerical check $p(2)=8-2=6$ against $p(-2)=-6$ matches the odd pairing. The function is odd, so the statement is True.""",
    r"""**C.** → False

The leading coefficient is the number in front of the highest power $x^{3}$, not the coefficient of $-x$.

$$p(x)=x^{3}-x$$

The top term is $1\cdot x^{3}$, so the lead is $1$.

$$1\neq -1$$

The $-1$ belongs to the linear term. Quoting that linear coefficient as the lead mixes the two ends of the polynomial. The leading coefficient is $1$, so the statement is False.""",
    r"""**D.** → True

The factor $x-1$ is visible after grouping, so $x=1$ is already a root.

$$p(1)=1^{3}-1$$

$$p(1)=0$$

From $p(x)=x(x-1)(x+1)$ the middle factor vanishes at $x=1$. The constant graph $c$ has $c(1)=0$ as well, so this is also a meeting of $p$ with $c$. Either route gives height $0$ on the axis. The value is $0$, so the statement is True.""",
    r"""**E.** → False

Odd degree with a positive leading coefficient rises on the right: the $x^{3}$ term goes to $+\infty$.

$$p(x)=x^{3}-x$$

$$x\to+\infty\implies p(x)\to+\infty$$

The linear term $-x$ cannot overtake $x^{3}$ far out. A negative lead would have been needed for a dive to $-\infty$. The graph goes to $+\infty$ as $x\to+\infty$, so the statement is False.""",
]

EXPL["math-9-14"] = [
    r"""**A.** → True

Zero output means every positive power of $q$ drops out, so the modelled cost at the origin is the constant term.

$$C(q)=q^{3}-6q^{2}+20q$$

$$C(0)=0$$

There is no leftover constant: the rule is $q(q^{2}-6q+20)$, with an explicit factor of $q$. Zero tonnes carry zero modelled handling cost. The value is $0$, so the statement is True.""",
    r"""**B.** → True

Two tonnes is a named input, so substitute $q=2$ term by term.

$$C(2)=2^{3}-6\cdot 2^{2}+20\cdot 2$$

$$C(2)=8-24+40=24$$

The three contributions add to $24$, which is $24$ hundred euros in the model's units. Factoring $C(2)=2(4-12+20)=2\cdot 12=24$ gives the same number. The cost at $q=2$ is $24$, so the statement is True.""",
    r"""**C.** → False

Compare the two named outputs by evaluating each side separately.

$$C(6)=6^{3}-6\cdot 6^{2}+20\cdot 6$$

$$C(6)=216-216+120=120$$

Meanwhile $C(0)=0$, so $120=0$ fails. The cubic and quadratic terms cancel at $q=6$, but the linear term still contributes $120$ hundred euros. The two values differ, so the statement is False.""",
    r"""**D.** → True

The written rule already displays a cubic term with coefficient $1$, and nothing of exponent $4$ appears.

$$C(q)=q^{3}-6q^{2}+20q$$

$$q^{3}$$

Factoring as $q(q^{2}-6q+20)$ does not lower the top power: distributing the outer $q$ still produces $q^{3}$. The highest power of $q$ in $C$ is $q^{3}$, so the statement is True.""",
    r"""**E.** → False

Pull out the obvious factor $q$ and inspect the remaining quadratic for positive roots.

$$C(q)=q(q^{2}-6q+20)$$

$$q^{2}-6q+20=0\qquad \Delta=36-80=-44<0$$

The discriminant is negative, so that quadratic never vanishes on $\mathbb{R}$. The only real root of $C$ is $q=0$, which is not a positive extra root. There is no other positive real root, so the statement is False.""",
]

EXPL["math-9-15"] = [
    r"""**A.** → True

Turning points of a polynomial sit where the derivative vanishes, and the derivative of a cubic is a quadratic.

$$p(x)=x^{3}-3x^{2}+2$$

$$p'(x)=3x^{2}-6x$$

A quadratic equation has at most two real roots, so a cubic can have at most two stationary points. Rolle's theorem also places at most one turn between each pair of roots, never a third. At most two turning points are possible, so the statement is True.""",
    r"""**B.** → True

Locate the stationary abscissas by setting the derivative to zero and factoring.

$$p'(x)=3x^{2}-6x=3x(x-2)$$

$$x=0,\qquad x=2$$

The two roots of $p'$ are $x=0$ and $x=2$, exactly the claimed pair. A second-derivative check is unnecessary for locating them. Those are the two stationary abscissas, so the statement is True.""",
    r"""**C.** → True

The $y$-intercept is the leftover constant of the cubic, read by substituting $x=0$.

$$p(0)=0-0+2$$

$$p(0)=2$$

That $2$ is the number named in the claim. The other stationary abscissa $x=2$ gives $p(2)=-2$, a different height, not this intercept. The value at $0$ is $2$, so the statement is True.""",
    r"""**D.** → False

The second stationary abscissa is $x=2$, but the claim is about the height there, not about where the turn sits.

$$p(2)=2^{3}-3\cdot 2^{2}+2$$

$$p(2)=8-12+2=-2$$

The height is $-2$, not $2$. Confusing $p(0)=2$ with $p(2)$ is the mix-up: the intercept and the right-hand turn have opposite signs. The value is $-2$, so the statement is False.""",
    r"""**E.** → True

Odd degree with a positive leading coefficient rises on the far right: the $x^{3}$ term dominates.

$$p(x)=x^{3}-3x^{2}+2$$

$$x\to+\infty\implies p(x)\to+\infty$$

The $-3x^{2}$ term cannot overtake $x^{3}$ for large positive $x$. A negative lead would have been needed for a dive. The graph goes to $+\infty$ as $x\to+\infty$, so the statement is True.""",
]

EXPL["math-9-16"] = [
    r"""**A.** → True

The factor theorem says $x-2$ divides $p$ precisely when $p(2)=0$, so substitute that abscissa.

$$p(2)=2^{3}-4\cdot 2^{2}+2+6$$

$$p(2)=8-16+2+6=0$$

The remainder is $0$, so $x-2$ is a factor. Expanding later as $(x-2)(x+1)(x-3)$ is consistent with this vanishing. The value $p(2)=0$ gives the factor $x-2$, so the statement is True.""",
    r"""**B.** → True

The same test at $x=-1$ decides whether $x+1$ is a factor.

$$p(-1)=(-1)^{3}-4(-1)^{2}+(-1)+6$$

$$p(-1)=-1-4-1+6=0$$

The remainder is $0$, so $x+1$ divides $p$. A neighbouring check $p(1)=4\neq 0$ shows $x-1$ is not a factor, which is a different letter. The value $p(-1)=0$ gives the factor $x+1$, so the statement is True.""",
    r"""**C.** → True

One unit to the right of the origin, substitute $x=1$ term by term.

$$p(1)=1^{3}-4\cdot 1^{2}+1+6$$

$$p(1)=1-4+1+6=4$$

The four contributions add to $4$, matching the claim. This is not a root: $p(1)\neq 0$, so $x-1$ is not a factor, but the claimed height is $4$ rather than $0$. The value at $x=1$ is $4$, so the statement is True.""",
    r"""**D.** → True

Test the remaining integer $x=3$ by the factor theorem.

$$p(3)=3^{3}-4\cdot 3^{2}+3+6$$

$$p(3)=27-36+3+6=0$$

The remainder is $0$, so $x-3$ is a factor. Together with $p(2)=p(-1)=0$ this reconstructs $p(x)=(x-2)(x+1)(x-3)$. Expanding that product recovers $x^{3}-4x^{2}+x+6$. The value $p(3)=0$ gives the factor $x-3$, so the statement is True.""",
    r"""**E.** → False

A cubic with three distinct real roots already listed cannot have an empty real-root set.

$$p(2)=p(-1)=p(3)=0$$

$$p(x)=(x-2)(x+1)(x-3)$$

Those three real zeros are visible both from the factor theorem and from the reconstructed product. "No real roots" would require a cubic that never crosses the axis, which this one does three times. There are three real roots, so the statement is False.""",
]

EXPL["math-9-19"] = [
    r"""**A.** → True

Meetings of the two graphs are the real roots of the difference $p-\ell$.

$$p(x)-\ell(x)=x^{3}-x-x=x^{3}-2x$$

$$x(x^{2}-2)=0$$

The solutions are $x=0$ and $x=\pm\sqrt{2}$, three distinct real abscissas. Each gives a point where the cubic and the line share a height. Three distinct real roots of $p-\ell$ give three meetings, so the statement is True.""",
    r"""**B.** → True

The origin is a meeting when both graphs have height $0$ at $x=0$.

$$p(0)=0^{3}-0=0$$

$$\ell(0)=0$$

Both pass through $(0,0)$. From the factored difference $x(x^{2}-2)$, the explicit factor of $x$ already names this meeting. A neighbouring check $p(1)=0$ against $\ell(1)=1$ is not a meeting. The two graphs meet at the origin, so the statement is True.""",
    r"""**C.** → False

A cubic minus a line is still typically cubic, so the difference can have up to three real roots.

$$p(x)-\ell(x)=x^{3}-2x$$

Here that cubic difference has three distinct real zeros $0,\pm\sqrt{2}$, which is already a counter-example.

$$x(x^{2}-2)=0$$

A line and a quadratic meet at most twice; a line and a cubic can meet three times. Three meetings occur in this pair, so the statement is False.""",
    r"""**D.** → False

Compare the two heights at $x=1$ separately rather than assuming a meeting.

$$p(1)=1^{3}-1=0$$

$$\ell(1)=1$$

The cubic sits at $0$ while the line sits at $1$. From $p-\ell=x(x^{2}-2)$, the value at $x=1$ is $1-2=-1\neq 0$, confirming no meeting there. The meetings are at $0$ and $\pm\sqrt{2}$, not at $1$. The two heights differ, so the statement is False.""",
    r"""**E.** → True

The highest power of a difference is the highest power that does not cancel. The line $\ell(x)=x$ has no $x^{3}$ to cancel $p$'s cubic term.

$$p(x)-\ell(x)=x^{3}-2x$$

The $x^{3}$ term survives with coefficient $1\neq 0$.

$$x^{3}$$

The linear terms combine to $-2x$, which is lower. The difference still has highest power $x^{3}$, so the statement is True.""",
]

EXPL["math-9-20"] = [
    r"""**A.** → True

No items sold means every positive power of $n$ drops out, so the modelled revenue at $n=0$ is the constant term.

$$R(n)=-\frac{1}{10}n^{3}+3n^{2}+20n$$

$$R(0)=0$$

There is no leftover constant: an explicit factor of $n$ is visible after grouping $R(n)=\frac{n}{10}(-n^{2}+30n+200)$. Zero sales give zero revenue. The value is $0$, so the statement is True.""",
    r"""**B.** → True

Ten items is a named integer, so substitute $n=10$ term by term.

$$R(10)=-\frac{1}{10}\cdot 1000+3\cdot 100+20\cdot 10$$

$$R(10)=-100+300+200=400$$

The three contributions add to $400$ euros. Factoring $R(10)=\frac{10}{10}(-100+300+200)=400$ gives the same total. A neighbouring value $R(0)=0$ is the no-sales intercept, not this height. The revenue at $n=10$ is $400$, so the statement is True.""",
    r"""**C.** → False

The leading coefficient is the number in front of $n^{3}$, which is already written as a negative fraction.

$$R(n)=-\frac{1}{10}n^{3}+3n^{2}+20n$$

$$-\frac{1}{10}<0$$

That negative cubic lead makes the model open downwards for large $n$. The quadratic coefficient $3$ is positive, but it is not the lead. The leading coefficient is negative, so the statement is False.""",
    r"""**D.** → False

Rearrange the claimed identity: subtracting $R(5)$ from both sides leaves $0=R(0)$, which does not constrain $R(5)$.

$$R(5)=R(0)+R(5)\implies R(0)=0$$

And $R(0)=0$ already, so the equality holds for every $R(5)$. Direct evaluation:

$$R(5)=-\frac{125}{10}+75+100=\frac{325}{2}$$

That height $\frac{325}{2}$ is not $0$. The identity does not force $R(5)=0$, so the statement is False.""",
    r"""**E.** → True

The written rule already displays a cubic term whose coefficient is nonzero.

$$R(n)=-\frac{1}{10}n^{3}+3n^{2}+20n$$

$$-\frac{1}{10}\neq 0$$

No $n^{4}$ appears, and grouping a factor of $n$ does not cancel the $n^{3}$ after distributing. A quadratic stall model would have stopped at $n^{2}$. The highest power of $n$ in $R$ is $n^{3}$, so the statement is True.""",
]

EXPL["math-9-21"] = [
    r"""**A.** → True

Expand the square first, then subtract $1$, and collect like powers.

$$(x^{2}-3)^{2}-1=x^{4}-6x^{2}+9-1$$

$$p(x)=x^{4}-6x^{2}+8$$

Every coefficient of the claimed quartic matches. A leftover constant $9$ would have remained if the $-1$ had been forgotten; it is not. The expanded form is $x^{4}-6x^{2}+8$, so the statement is True.""",
    r"""**B.** → True

Only even powers appear after expanding, so replacing $x$ by $-x$ leaves every term unchanged.

$$p(-x)=((-x)^{2}-3)^{2}-1=(x^{2}-3)^{2}-1$$

$$p(-x)=p(x)$$

From $p(x)=x^{4}-6x^{2}+8$ the same identity is visible termwise. A numerical check $p(2)=8-24+8=-8=p(-2)$ agrees. The graph is symmetric about the $y$-axis. The even test holds, so the statement is True.""",
    r"""**C.** → False

Squaring $x^{2}$ produces $x^{4}$, so the highest power cannot stop at $x^{2}$.

$$(x^{2}-3)^{2}=x^{4}-6x^{2}+9$$

$$p(x)=x^{4}-6x^{2}+8$$

The $x^{4}$ term has coefficient $1\neq 0$. A quadratic would have required that top term to cancel, which it does not. The highest power is $x^{4}$, not $x^{2}$, so the statement is False.""",
    r"""**D.** → True

The inner square vanishes at $x=\sqrt{3}$, so the whole expression collapses to $-1$.

$$p(\sqrt{3})=(3-3)^{2}-1$$

$$p(\sqrt{3})=0-1=-1$$

From the expanded form, $(\sqrt{3})^{4}-6\cdot 3+8=9-18+8=-1$ as well. A neighbouring value $p(0)=8$ is the constant term, not this height. The value is $-1$, so the statement is True.""",
    r"""**E.** → False

Set the expanded quartic to zero and factor as a quadratic in $x^{2}$.

$$x^{4}-6x^{2}+8=(x^{2}-2)(x^{2}-4)$$

$$x=\pm\sqrt{2},\qquad x=\pm 2$$

Four distinct real roots. From the original shape, $(x^{2}-3)^{2}=1$ gives $x^{2}-3=\pm 1$, hence $x^{2}=4$ or $x^{2}=2$, the same four zeros. The polynomial has real roots, so the statement is False.""",
]


def _first_paragraph(text: str) -> str:
    parts = re.split(r"\n\n", text.strip(), maxsplit=2)
    return parts[1] if len(parts) > 1 else ""


def validate_task(task: dict, texts: list[str], problems: list[str], lengths: list[int]) -> None:
    keys = task["answer_key"]
    tid = task["id"]
    firsts: list[str] = []
    display_seqs: list[tuple[str, ...]] = []
    for i, (key, text) in enumerate(zip(keys, texts)):
        label = f"{tid}.{LETTERS[i]}"
        lengths.append(len(text))
        verdict = "True" if key else "False"
        if not text.startswith(f"**{LETTERS[i]}.** \u2192 {verdict}"):
            problems.append(f"{label}: header does not match key ({verdict})")
        if not text.rstrip().endswith(f", so the statement is {verdict}."):
            problems.append(f"{label}: closing line missing or wrong verdict")
        opener = _first_paragraph(text)
        if not opener:
            problems.append(f"{label}: no narrative opener after the header")
        for tmpl in TEMPLATE_OPENERS:
            if opener.startswith(tmpl):
                problems.append(f"{label}: template opener {tmpl!r}")
        for pattern in BANNED:
            if re.search(pattern, text):
                problems.append(f"{label}: banned phrase {pattern!r}")
        displays = re.findall(r"\$\$(.*?)\$\$", text, flags=re.S)
        display_seqs.append(tuple(displays))
        if not displays:
            problems.append(f"{label}: no display formula")
        for j, display in enumerate(displays):
            if display.strip() == "":
                problems.append(f"{label}: empty display")
            if "\n" in display:
                problems.append(f"{label}: newline inside a display")
            if j > 0 and display == displays[j - 1]:
                problems.append(f"{label}: consecutive identical displays")
        firsts.append(opener)
        n = len(text)
        if n < 300 or n > 850:
            problems.append(f"{label}: length {n} outside 300-850")
    if len(set(firsts)) != 5:
        problems.append(f"{tid}: openers not unique ({len(set(firsts))}/5 distinct)")
    if len(set(display_seqs)) < 4:
        problems.append(f"{tid}: repeated display sequences across letters")


def main() -> None:
    payload = json.loads(DATA.read_text())
    tasks = payload["tasks"]
    by_id = {t["id"]: t for t in tasks}

    expected = json.loads(BATCH.read_text()) if BATCH.exists() else []
    expected_ids = [row["id"] for row in expected] if expected else list(EXPL)

    missing = [tid for tid in expected_ids if tid not in by_id]
    if missing:
        raise SystemExit(f"ids not in bank: {missing}")
    leftover = [tid for tid in expected_ids if tid not in EXPL]
    if leftover:
        raise SystemExit(f"batch ids with no EXPL: {leftover}")
    extra = [tid for tid in EXPL if tid not in expected_ids]
    if extra:
        raise SystemExit(f"EXPL ids not in batch: {extra}")

    for (tid, index), fixed in KEY_FIXES.items():
        if tid not in EXPL:
            raise SystemExit(f"KEY_FIXES for id not in EXPL: {tid}")
        by_id[tid]["answer_key"][index] = fixed

    for tid, bodies in EXPL.items():
        task = by_id[tid]
        texts = [block.strip() for block in bodies]
        if len(texts) != 5:
            raise SystemExit(f"{tid}: expected 5 explanations, got {len(texts)}")
        if len(texts) != len(task["statements"]):
            raise SystemExit(f"{tid}: statement count mismatch")
        task["tactical_explanations"] = texts

    problems: list[str] = []
    lengths: list[int] = []
    for tid in expected_ids:
        validate_task(by_id[tid], by_id[tid]["tactical_explanations"], problems, lengths)

    print("=== validation summary ===")
    print(f"tasks rewritten: {len(EXPL)}")
    print(f"explanations rewritten: {len(lengths)}")
    print(f"median length: {int(statistics.median(lengths))} chars")
    print(f"shortest / longest: {min(lengths)} / {max(lengths)}")
    print(f"answer-key corrections: {len(KEY_FIXES)}")
    if problems:
        print(f"problems ({len(problems)}):")
        print("\n".join(problems))
        raise SystemExit("validation failed")
    print("unique openers: ok (5 distinct per task)")
    print("template openers: none")
    print("header/close match: ok")
    print("banned hits: none")
    print("lengths: ok")
    for (tid, index), fixed in sorted(KEY_FIXES.items()):
        print(f"  KEY_FIX {tid}.{LETTERS[index]} -> {fixed}")

    DATA.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    print(f"wrote {DATA}")


if __name__ == "__main__":
    main()

