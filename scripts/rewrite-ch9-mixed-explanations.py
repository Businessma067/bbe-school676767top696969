"""Rewrite every tactical explanation in the Chapter 9 mixed exam (polynomials).

Style target: Chapter 4 (src/data/math-ch4-cases.json) — a narrative opener, one
formula per display, prose between displays, and a closing line of the form
", so the statement is True/False."

The dictionary also records the answer-key corrections that were required
because a few statements could not be justified as keyed (see
scripts/ch9-mixed-exam-key-fixes.md).
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

DATA = Path(__file__).resolve().parents[1] / "src/data/math-ch9-mixed-exam.json"

LETTERS = "ABCDE"

BANNED = [
    r"\\deg",
    r"\\circ",
    "Matching the claim",
    "read the stem fully",
    "translate words into algebra",
    "Retargeted",
    "The stem produces",
]

# (task id, statement index) -> corrected truth value.
KEY_FIXES = {
    ("math-9-e4", 2): False,   # composition degrees multiply, and mn = nm
    ("math-9-e4", 3): False,   # nesting is not commutative for cubics
    ("math-9-e5", 3): False,   # stationary abscissas +-sqrt(k/3) depend on k
    ("math-9-e5", 4): False,   # k = 1 gives g(1) = 0 with three distinct zeros
    ("math-9-e7", 3): True,    # q(p(2)) = 4 and p(q(0)) = 2 both hold
    ("math-9-e9", 1): False,   # p - q is a cubic: three real meetings, not zero
    ("math-9-e9", 3): False,   # x^2 - x - 2 is neither odd nor even
    ("math-9-e10", 3): False,  # x^3 - x + 2 keeps only one real root
    ("math-9-e10", 4): False,  # v'(t) = 2t - 4 > 0 for t > 2
    ("math-9-e11", 3): False,  # the double root leaves two distinct axis points
    ("math-9-e12", 1): False,  # third differences 36, 60, 84 are not constant
    ("math-9-e12", 3): False,  # the constant term is p(0) = 2
    ("math-9-e17", 2): False,  # the lead of q(p(x)) is 2, not 3
    ("math-9-e24", 2): False,  # degree n allows at most n roots
    ("math-9-e24", 3): False,  # a vertical shift preserves evenness
    ("math-9-e28", 4): False,  # three distinct zeros: 0, 3, -1
    ("math-9-e29", 3): False,  # adding c != 0 destroys oddness
}

EXPL: dict[str, list[str]] = {}

EXPL["math-9-e1"] = [
    r"""
The three marked crossings plus the monic normalisation pin the polynomial down completely: a monic cubic with simple zeros at $-2$, $1$ and $3$.

$$p(x)=(x+2)(x-1)(x-3)$$

$$p(x)=x^{3}-2x^{2}-5x+6$$

Only the leading term survives at the far ends, since dividing by $x^{3}$ leaves $1-\frac{2}{x}-\frac{5}{x^{2}}+\frac{6}{x^{3}}$, which tends to $1$. An odd power with a positive coefficient therefore keeps the sign of $x$ itself.

$$\lim_{x\to+\infty}p(x)=+\infty$$

$$\lim_{x\to-\infty}p(x)=-\infty$$

The right end rises and the left end falls exactly as described, so the statement is True.
""",
    r"""
Two things are asserted here, and the first one already fails: $x=2$ is not on the axis at all.

$$p(2)=8-8-10+6=-4$$

The crossings sit at $-2$, $1$ and $3$, so at $x=2$ the graph is four units below the axis — neither a crossing nor a touch. The derivative value quoted belongs to a different abscissa.

$$p'(x)=3x^{2}-4x-5$$

$$p'(1)=3-4-5=-6$$

That slope is genuinely nonzero, because $1$ is a simple root, but nothing happening at $x=2$ forces it. The premise about $x=2$ is false, so the statement is False.
""",
    r"""
Counting turning points is the easy half; the interval named in the claim is the trap. The zeros visible on the figure are $-2$, $1$ and $3$, so $-1$ is not a zero of $p$.

$$p(-1)=-1-2+5+6=8$$

The consecutive zeros bracketing the left hump are $-2$ and $1$. For the record, the stationary abscissas come from the derivative.

$$p'(x)=3x^{2}-4x-5$$

$$x=\frac{2\pm\sqrt{19}}{3}$$

Those values are about $-0.79$ and $2.12$, so exactly one of them does lie between the genuinely consecutive zeros $-2$ and $1$. The count is fine but the pair of zeros named is not, so the statement is False.
""",
    r"""
The $y$-intercept is the height at $x=0$, never the height above some other marked abscissa.

$$p(0)=6$$

$$p(2)=-4$$

The Vieta half of the sentence is sound: for a monic cubic the constant term equals $(-1)^{3}$ times the product of the three roots.

$$(-1)^{3}(-2)(1)(3)=6$$

So $6$ is both the intercept and the signed root product, but it is $p(0)$ that equals $6$; $p(2)$ is $-4$. The intercept has been attached to the wrong argument, so the statement is False.
""",
    r"""
The marked vertical through the origin invites a slope reading, so differentiate first and substitute afterwards.

$$p'(x)=3x^{2}-4x-5$$

$$p'(0)=-5$$

The tangent at the intercept has slope $-5$; a slope of $-4$ would need the linear coefficient to be $-4$ instead. Note also that $p(0)=6$ is the height there, not the steepness. The slope is $-5$, not $-4$, so the statement is False.
""",
]

EXPL["math-9-e2"] = [
    r"""
Finite differences of a polynomial sampled at unit spacing lose one degree per pass, so the level at which they settle to a constant is the degree. Start from the tabulated row.

$$1,\ 1,\ 3,\ 13,\ 37,\ 81$$

First differences:

$$0,\ 2,\ 10,\ 24,\ 44$$

Second differences:

$$2,\ 8,\ 14,\ 20$$

Third differences:

$$6,\ 6,\ 6$$

The second row still moves, which rules out a quadratic, and the third row is constant. For a cubic with leading coefficient $a$ the third difference on unit spacing is $3!\,a=6a$, so $a=1$. Third differences are constantly $6$ and the source is a cubic, so the statement is True.
""",
    r"""
A linear model would need the first differences to be constant, one level earlier than the second differences.

$$0,\ 2,\ 10,\ 24,\ 44$$

Those jumps grow, so no straight line passes through the samples, and there is no noise here to ignore: the third differences are exactly $6$, the signature of an exact cubic with leading coefficient $1$.

$$6,\ 6,\ 6$$

Failure of constant second differences pushes the required degree up, never down. A linear fit is impossible rather than merely inaccurate, so the statement is False.
""",
    r"""
Both numbers can be read from the table once each column is matched with the right argument.

$$p(2)=3$$

$$p(5)-p(4)=81-37=44$$

The reconstruction $p(x)=x^{3}-2x^{2}+x+1$ gives the same values independently: $8-8+2+1=3$ and $125-50+5+1=81$.

$$p(5)=81$$

Both stated numbers agree with the samples, so the statement is True.
""",
    r"""
Six samples determine exactly one polynomial of degree at most five, and that one is the cubic. They cannot forbid a higher-degree polynomial from passing through the same six points: add a multiple of the product of all six nodes.

$$r(x)=p(x)+c\,x(x-1)(x-2)(x-3)(x-4)(x-5)$$

Every factor of that product vanishes at one of the tabulated arguments, so $r$ reproduces all six listed values for any real $c$, while its top term is new.

$$r(x)=c\,x^{6}+\dots$$

For $c\neq0$ that is a degree-$6$ polynomial agreeing with the table. The samples force degree at least $3$, not exactly $3$, so the statement is False.
""",
    r"""
Test the proposed closed form against the table rather than trusting its shape.

$$p(0)=1$$

$$p(1)=1-2+1+1=1$$

The quartic $x^{4}-2x^{2}+x+1$ survives those two columns, which is exactly why it is offered, but the next one breaks it.

$$2^{4}-2\cdot 2^{2}+2+1=11$$

The table records $3$ at $x=2$, not $11$. A quartic would also need its fourth differences constant, whereas these samples go constant one level earlier. The closed form contradicts a listed column, so the statement is False.
""",
]

EXPL["math-9-e3"] = [
    r"""
Multiply two factors first, then distribute the third, keeping $t$ as the variable throughout.

$$(t-1)(t-4)=t^{2}-5t+4$$

$$\left(t^{2}-5t+4\right)(t-6)=t^{3}-5t^{2}+4t-6t^{2}+30t-24$$

$$h(t)=t^{3}-11t^{2}+34t-24$$

Two quick audits: the constant term should be $(-1)(-4)(-6)=-24$, and the table's first entry is indeed $h(0)=-24$. The expansion is the stated cubic, so the statement is True.
""",
    r"""
For a monic cubic, Vieta ties the roots — each counted as often as its multiplicity — to the coefficient of $t^{2}$.

$$r_{1}+r_{2}+r_{3}=-\frac{-11}{1}$$

$$1+4+6=11$$

All three factors are distinct and appear once, so every root is simple and the multiplicity-weighted sum is the plain sum. Both routes deliver $11$, so the statement is True.
""",
    r"""
Far-field behaviour is set by the leading term $t^{3}$, whose coefficient is $1$.

$$h(t)=t^{3}\left(1-\frac{11}{t}+\frac{34}{t^{2}}-\frac{24}{t^{3}}\right)$$

The bracket tends to $1$, so for large $t$ the imbalance grows like $t^{3}$; the table is already climbing, from $h(6)=0$ to $h(7)=18$.

$$\lim_{t\to+\infty}h(t)=+\infty$$

Odd degree with a positive lead gives exactly the stated rise, so the statement is True.
""",
    r"""
Read the constant term off the expansion, or equivalently evaluate the factored model at $t=0$.

$$h(0)=(0-1)(0-4)(0-6)$$

$$h(0)=-24$$

The table lists $-24$ in the first column too, so the constant term is $-24$ and not $-23$. The reasoning appended is sound in itself — a nonzero constant term is precisely the statement that $t=0$ is not a root — but the value quoted is off by one. The constant term is $-24$, so the statement is False.
""",
    r"""
A cubic always carries three roots counting multiplicity; that tally says nothing about how many *distinct* times the graph reaches the axis, nor about which of those times fall inside the recorded window. Roots can coincide, and roots can sit outside $[0,7]$.

$$(t-1)^{2}(t-6)=t^{3}-8t^{2}+13t-6$$

This cubic also has three roots with multiplicity, yet it merely touches the axis at $t=1$ and crosses only at $t=6$. The lock model happens to be kinder.

$$h(t)=(t-1)(t-4)(t-6)$$

Its zeros $1$, $4$, $6$ are simple and all inside the window, so three crossings do occur — but because the roots are distinct and in range, not because the multiplicity total is three. The stated implication is invalid, so the statement is False.
""",
]

EXPL["math-9-e4"] = [
    r"""
Substituting one polynomial into another multiplies the two highest powers instead of adding them. Write the leading behaviour of each map as $f(u)=au^{m}+\dots$ and $g(x)=bx^{n}+\dots$ with $a\neq0$ and $b\neq0$.

$$f(g(x))=a\left(bx^{n}+\dots\right)^{m}+\dots$$

$$\left(bx^{n}\right)^{m}=b^{m}x^{mn}$$

$$f(g(x))=ab^{m}x^{mn}+\dots$$

The coefficient $ab^{m}$ is a product of nonzero numbers, so the top term cannot cancel, and every other term of the expansion carries a strictly smaller power. The highest power is $x^{mn}$, so the statement is True.
""",
    r"""
Adding the highest powers is the rule for a product, not for a nesting.

$$f(x)g(x)=ab\,x^{m+n}+\dots$$

$$f(g(x))=ab^{m}x^{mn}+\dots$$

One example separates the two rules. Take $f(u)=u^{3}$ and $g(x)=x^{2}$, so $m=3$ and $n=2$.

$$f(g(x))=x^{6}$$

Here $mn=6$ while $m+n=5$. Nesting produces $x^{mn}$, and $mn=m+n$ happens only in the isolated case $m=n=2$, so the statement is False.
""",
    r"""
Both nestings carry the same highest power, because the exponent multiplication that produced it is itself commutative.

$$f(g(x))=ab^{m}x^{mn}+\dots$$

$$g(f(x))=ba^{n}x^{nm}+\dots$$

$$mn=nm$$

Unequal degrees change the leading *coefficients* — $ab^{m}$ against $ba^{n}$ — but not the top power. With $f(u)=u^{3}$ and $g(x)=x^{2}$ one order gives $x^{6}$ and so does the other, even though $m\neq n$. The highest power is $x^{mn}$ either way, so the statement is False.
""",
    r"""
Equal degrees fix the top power of both nestings at $x^{9}$, but the lower coefficients are free, and they are what break the symmetry.

$$f(u)=u^{3}$$

$$g(x)=x^{3}+1$$

$$f(g(x))=x^{9}+3x^{6}+3x^{3}+1$$

$$g(f(x))=x^{9}+1$$

Both are degree $9$, as $mn=9$ predicts, yet they differ from the $x^{6}$ term downward — for instance at $x=1$ they give $8$ and $2$. A single counterexample defeats a claim about all cubics, so the statement is False.
""",
    r"""
With $m=n=2$ the nested degree is $mn=4$ whichever way round the substitution runs, and the top coefficient cannot collapse.

$$f(g(x))=ab^{2}x^{4}+\dots$$

$$g(f(x))=ba^{2}x^{4}+\dots$$

Both $ab^{2}$ and $ba^{2}$ are products of nonzero numbers, hence nonzero. A concrete pair makes it visible.

$$f(u)=u^{2}+1$$

$$g(x)=x^{2}-1$$

$$f(g(x))=x^{4}-2x^{2}+2$$

$$g(f(x))=x^{4}+2x^{2}$$

Each nesting attains the highest power $x^{4}$, so the statement is True.
""",
]

EXPL["math-9-e5"] = [
    r"""
Oddness is the identity $g_{k}(-x)=-g_{k}(x)$, and every term of this family carries an odd power of $x$.

$$g_{k}(-x)=(-x)^{3}-k(-x)$$

$$g_{k}(-x)=-x^{3}+kx$$

$$g_{k}(-x)=-\left(x^{3}-kx\right)$$

The parameter rides along untouched, so the identity holds for every real $k$ — including $k=0$, where the family degenerates to $g_{0}(x)=x^{3}$. The symmetry never depends on $k$, so the statement is True.
""",
    r"""
Factor first, because the repeated-root question is really a question about the quadratic factor.

$$g_{k}(x)=x\left(x^{2}-k\right)$$

For $k>0$ the zeros are $0$ and $\pm\sqrt{k}$, three different numbers, so all roots are simple. For $k<0$ the factor $x^{2}-k$ is strictly positive and $x=0$ is the only real zero, again simple. Only $k=0$ collapses the zeros onto one another.

$$g_{0}(x)=x^{3}$$

That is a root of multiplicity three at the origin, a genuine repeat, and no other parameter value produces one. The equivalence claimed is exactly right, so the statement is True.
""",
    r"""
Fix $k>0$ and use the same factorisation.

$$g_{k}(x)=x\left(x^{2}-k\right)$$

$$x^{2}=k$$

$$x=\pm\sqrt{k}$$

With $k$ strictly positive the three numbers $-\sqrt{k}$, $0$, $\sqrt{k}$ are distinct, so there are three distinct real zeros. The substitution check is immediate.

$$g_{k}(\sqrt{k})=k\sqrt{k}-k\sqrt{k}=0$$

Both halves hold for every positive $k$, so the statement is True.
""",
    r"""
The derivative equation is quoted correctly, but its solutions move with the parameter.

$$g_{k}'(x)=3x^{2}-k$$

$$3x^{2}-k=0$$

$$x=\pm\sqrt{\frac{k}{3}}$$

For $k=3$ the stationary abscissas are $\pm1$; for $k=12$ they are $\pm2$; for $k<0$ there is no stationary point at all, since $3x^{2}=k$ has no real solution; and for $k=0$ the single flat point sits at the origin. The abscissas depend on $k$ through $\sqrt{k/3}$, so the statement is False.
""",
    r"""
Solve the two requirements in order instead of assuming they conflict.

$$g_{k}(1)=1-k$$

$$1-k=0$$

The only candidate is $k=1$, so test whether that value also delivers three distinct zeros.

$$g_{1}(x)=x\left(x^{2}-1\right)$$

$$g_{1}(x)=x(x-1)(x+1)$$

The zeros $-1$, $0$, $1$ are distinct and $g_{1}(1)=0$ as required, so such a $k$ does exist. The claimed impossibility fails at $k=1$, so the statement is False.
""",
]

EXPL["math-9-e6"] = [
    r"""
A touch at $x=2$ means the factor $(x-2)$ occurs an even number of times; a crossing at $x=-1$ means $(x+1)$ occurs an odd number of times. With total degree three and a monic lead there is only one way to spend the exponents.

$$p(x)=(x-2)^{2}(x+1)$$

$$p(x)=x^{3}-3x^{2}+4$$

The sign pattern confirms the multiplicities: near $x=2$ the squared factor is non-negative while $(x+1)$ stays near $3$, so the graph returns to the same side of the axis, whereas at $x=-1$ only one factor changes sign and the graph passes through. The reconstruction is the stated product, so the statement is True.
""",
    r"""
Differentiate the reconstruction and look at where the tangent really is horizontal.

$$p'(x)=3x^{2}-6x$$

$$p'(x)=3x(x-2)$$

The flat points are $x=0$ and $x=2$; the double root is one of them, as multiplicity at least two always forces $p'=0$. Now test the two abscissas quoted.

$$p'(3)=27-18=9$$

$$p'(-1)=3+6=9$$

The second half of the claim is right, since a simple root has no reason to be flat, but $p'(3)=9\neq0$. The horizontal tangent at $x=3$ does not exist, so the statement is False.
""",
    r"""
Vieta wants the roots added with multiplicity, and the double root at $2$ must be counted twice, not three times.

$$2\cdot 2+(-1)=3$$

$$-(-3)=3$$

So the correctly weighted sum is $3$ and it does match minus the coefficient of $x^{2}$ in $x^{3}-3x^{2}+4$. The arithmetic written in the statement, however, puts weight three on the root $2$.

$$3\cdot 2+(-1)=5$$

That comes to $5$, not $3$: the multiplicity used is the degree rather than the exponent of $(x-2)$. The stated computation is wrong, so the statement is False.
""",
    r"""
Counting roots with multiplicity and counting distinct roots are different tallies, and only the first reaches three here.

$$p(x)=(x-2)^{2}(x+1)$$

$$2+1=3$$

The zero set is $\{2,-1\}$: two numbers, with $2$ of multiplicity two and $-1$ of multiplicity one. That total of three is exactly what produced the touch-and-cross picture in the first place, so it cannot also certify three separate zeros. There are two distinct real zeros, not three, so the statement is False.
""",
    r"""
The constant term of a polynomial is its value at $x=0$, and $x=2$ happens to be a root of this one.

$$p(0)=4$$

$$p(2)=0$$

The Vieta identity offered is correct on its own: for a monic cubic the constant term equals $(-1)^{3}$ times the product of the roots taken with multiplicity, and that multiset is $\{2,2,-1\}$.

$$(-1)^{3}(2)^{2}(-1)=4$$

So $4$ is indeed the constant term, but calling it $p(2)$ is wrong — that value is zero. The label sits on the wrong argument, so the statement is False.
""",
]

EXPL["math-9-e7"] = [
    r"""
Feeding $p$ into an affine outer map only shifts the values; it cannot change which power is on top.

$$q(p(x))=p(x)+1$$

$$q(p(x))=\left(x^{2}-2x+3\right)+1$$

$$q(p(x))=x^{2}-2x+4$$

The quadratic term passes through untouched because $q$ multiplies its input by $1$, and nested degrees multiply: $2\cdot1=2$. The highest power is $x^{2}$, so the statement is True.
""",
    r"""
Read the top coefficient off the nested form.

$$q(p(x))=x^{2}-2x+4$$

The general rule agrees: if $q(u)=cu+d$ and $p$ has leading coefficient $a$, then the nesting has leading coefficient $ca$, and here both numbers are $1$.

$$1\cdot 1=1$$

The $+1$ from $q$ only lifts the constant term, moving $3$ to $4$. The leading coefficient is $1$, so the statement is True.
""",
    r"""
The leading coefficient of a nesting with an affine outer map is the outer slope times the inner lead, and both are $1$ here.

$$q(u)=1\cdot u+1$$

$$q(p(x))=x^{2}-2x+4$$

A lead of $2$ would need either an outer slope of $2$ or an inner polynomial starting with $2x^{2}$; neither is present, and adding a constant can never rescale a coefficient.

$$1\cdot 1=1$$

The leading coefficient is $1$, not $2$, so the statement is False.
""",
    r"""
Work each nesting from the inside out and keep the order of the two maps straight.

$$p(2)=4-4+3=3$$

$$q(3)=3+1=4$$

That settles the first value, $q(p(2))=4$. The other direction starts with the affine map.

$$q(0)=1$$

$$p(1)=1-2+3=2$$

So $p(q(0))=2$. Both evaluations land on the quoted numbers, so the statement is True.
""",
    r"""
Nested degrees multiply, and one of the two factors here is $1$.

$$q(p(x))=x^{2}-2x+4$$

$$p(q(x))=(x+1)^{2}-2(x+1)+3$$

$$p(q(x))=x^{2}+2$$

Both nestings are quadratic, since $2\cdot1=1\cdot2=2$, and an affine map cannot manufacture a cubic term in either position. The two do share a highest power, but it is $x^{2}$ and not $x^{3}$, so the statement is False.
""",
]

EXPL["math-9-e8"] = [
    r"""
Group the factors in pairs before multiplying; the bookkeeping stays manageable that way.

$$(x-1)^{2}=x^{2}-2x+1$$

$$(x+2)(x-3)=x^{2}-x-6$$

$$\left(x^{2}-2x+1\right)\left(x^{2}-x-6\right)=x^{4}-3x^{3}-3x^{2}+11x-6$$

Two audits: the constant term must be $(-1)^{2}(2)(-3)=-6$, and the roots with multiplicity sum to $1+1-2+3=3$, matching the coefficient $-3$ on $x^{3}$. The expansion is the stated quartic, so the statement is True.
""",
    r"""
Multiplicity is the exponent on the matching linear factor, so read it off the given form.

$$p(x)=(x-1)^{2}(x+2)(x-3)$$

The factor $(x-1)$ appears squared, and the remaining factors do not vanish at $x=1$.

$$(1+2)(1-3)=-6$$

Hence $(x-1)^{2}$ divides $p$ while $(x-1)^{3}$ does not: the multiplicity is exactly $2$, which certainly meets the threshold "at least $2$". The derivative test agrees.

$$p'(1)=4-9-6+11=0$$

The zero at $1$ is a genuine double root, so the statement is True.
""",
    r"""
List the roots with their multiplicities and add them.

$$1+1+(-2)+3=3$$

Vieta reads the same number off the expansion of this monic quartic, as minus the coefficient of $x^{3}$.

$$-\frac{-3}{1}=3$$

The weighting matters: counting the root $1$ only once would give $2$ and break the match. Both routes give $3$, so the statement is True.
""",
    r"""
A multiple root does force a horizontal tangent, but only at that root — which is $x=1$, not $x=2$.

$$p'(x)=4x^{3}-9x^{2}-6x+11$$

$$p'(1)=4-9-6+11=0$$

$$p'(2)=32-36-12+11=-5$$

At $x=2$ the curve is descending with slope $-5$, and it is not even on the axis there, since $p(2)=(1)(4)(-1)=-4$. The derivative value claimed is wrong and the reason is applied at the wrong point, so the statement is False.
""",
    r"""
Degree four is the multiplicity total, not the number of different zeros.

$$p(x)=(x-1)^{2}(x+2)(x-3)$$

Setting each factor to zero gives $x=1$, $x=-2$ and $x=3$: three numbers, because the square contributes the same root twice.

$$2+1+1=4$$

Graphically the quartic touches the axis at $1$ and crosses at $-2$ and $3$. The distinct count stops at three, so the statement is False.
""",
]

EXPL["math-9-e9"] = [
    r"""
The solid curve meets the axis at $-2$, $1$ and $3$, and a monic cubic with those three simple zeros is completely determined.

$$p(x)=(x+2)(x-1)(x-3)$$

$$p(x)=x^{3}-2x^{2}-5x+6$$

Each factor is linear and appears once, so every zero has multiplicity one and the graph passes through the axis at all three — no tangency anywhere. The marked intercept agrees as well.

$$p(0)=6$$

The factorisation and the three crossings are as described, so the statement is True.
""",
    r"""
Meetings of the two curves are the zeros of their difference, so form it.

$$p(x)-q(x)=\left(x^{3}-2x^{2}-5x+6\right)-\left(x^{2}-x-2\right)$$

$$p(x)-q(x)=x^{3}-3x^{2}-4x+8$$

The degree claim is right: subtracting a quadratic leaves the $x^{3}$ term alone. But a cubic takes both signs, so it must vanish somewhere, and one sign change already settles the count.

$$p(1)-q(1)=2$$

$$p(2)-q(2)=-4$$

A continuous function running from $2$ down to $-4$ crosses zero between $1$ and $2$; two further sign changes, on $(-2,-1)$ and on $(3,4)$, give three meetings in all. The number is three, not zero, so the statement is False.
""",
    r"""
A meeting point forces equal heights only. Equal slopes is a separate and much stronger condition — it means the curves are tangent, that is, the difference has a repeated root there.

$$p(x)-q(x)=x^{3}-3x^{2}-4x+8$$

$$p'(x)-q'(x)=3x^{2}-6x-4$$

For automatic tangency, every zero of the first expression would have to be a zero of the second. Test the meeting near $x\approx1.29$.

$$3(1.29)^{2}-6(1.29)-4\approx-6.7$$

The slope gap there is nowhere near zero, so the curves cut across each other. Equal values do not imply equal slopes, so the statement is False.
""",
    r"""
Oddness demands $q(-x)=-q(x)$ for every $x$, so substitute and compare.

$$q(-x)=(-x)^{2}-(-x)-2$$

$$q(-x)=x^{2}+x-2$$

$$-q(x)=-x^{2}+x+2$$

These two disagree, for instance at $x=1$, where they give $0$ and $2$. A cleaner test settles it in one line: any odd function must satisfy $q(0)=0$, while here the constant term is $-2$.

$$q(0)=-2$$

The dashed parabola is in fact neither odd nor even, since the linear term blocks evenness as well. It is not odd, so the statement is False.
""",
    r"""
Subtracting a quadratic cannot touch the cubic term, so the far-field contest is decided by $x^{3}$.

$$p(x)-q(x)=x^{3}-3x^{2}-4x+8$$

$$p(x)-q(x)=x^{3}\left(1-\frac{3}{x}-\frac{4}{x^{2}}+\frac{8}{x^{3}}\right)$$

The bracket tends to $1$, so the gap between the curves eventually grows like $x^{3}$ itself.

$$\lim_{x\to+\infty}\left(p(x)-q(x)\right)=+\infty$$

The cubic term dominates and the limit is $+\infty$ exactly as stated, so the statement is True.
""",
]

EXPL["math-9-e10"] = [
    r"""
Build the polynomial from its zeros, then evaluate.

$$p(x)=x(x+1)(x-2)$$

Monic with the three simple zeros $-1$, $0$, $2$ — no other monic cubic has that zero set, since each zero contributes one linear factor and three factors exhaust the degree.

$$p(1)=1\cdot 2\cdot(-1)$$

$$p(1)=-2$$

The expanded form $x^{3}-x^{2}-2x$ gives $1-1-2=-2$ as well. The value at $1$ is $-2$, so the statement is True.
""",
    r"""
Reflecting the input flips the sign of odd-power terms only, and this polynomial has none.

$$f(-x)=(-x)^{4}+1$$

$$(-x)^{4}=x^{4}$$

$$f(-x)=x^{4}+1$$

The result is $f(x)$ again for every real $x$, which is exactly the definition of an even function; the graph is symmetric about the vertical axis. The identity holds, so the statement is True.
""",
    r"""
Nesting here means substituting $x^{2}+1$ for $u$ in $u^{2}-u$.

$$\left(x^{2}+1\right)^{2}-\left(x^{2}+1\right)$$

$$=x^{4}+2x^{2}+1-x^{2}-1$$

$$=x^{4}+x^{2}$$

Degrees multiply under nesting, $2\cdot2=4$, and the leading coefficient $1\cdot1^{2}=1$ cannot vanish, so no cancellation reaches the top term. The highest power is $x^{4}$, so the statement is True.
""",
    r"""
Lifting a graph can destroy real roots, and this lift destroys two of them. The turning heights of $x^{3}-x$ come from its derivative.

$$\frac{d}{dx}\left(x^{3}-x\right)=3x^{2}-1$$

$$x=\pm\frac{1}{\sqrt{3}}$$

The local maximum height is $\frac{2}{3\sqrt{3}}\approx0.385$ and the local minimum is $\approx-0.385$. Adding $2$ raises the local minimum to about $1.615$, so the hump-and-dip section sits entirely above the axis and only the far-left branch still reaches it.

$$x^{3}-x+2=0$$

$$x\approx-1.52$$

Exactly one real root survives, not three, so the statement is False.
""",
    r"""
Acceleration is the derivative of speed, so differentiate before judging signs.

$$v(t)=t^{2}-4t+3$$

$$v'(t)=2t-4$$

The vertex of this parabola sits at $t=2$, and to its right the speed is increasing: for any $t>2$ the quantity $2t-4$ is positive.

$$v'(3)=2$$

Negative acceleration occurs on $t<2$ instead, where $v'(1)=-2$. The sign on $t>2$ is the opposite of the one claimed, so the statement is False.
""",
]

EXPL["math-9-e11"] = [
    r"""
Two claims, both readable from the sketch once the multiplicity pattern is fixed: a touch at $x=2$ needs an even exponent, a crossing at $x=-1$ an odd one, and a monic cubic has exactly three to spend.

$$p(x)=(x-2)^{2}(x+1)$$

$$p(x)=x^{3}-3x^{2}+4$$

The leading term $x^{3}$ has an odd power and a positive coefficient, so the right branch climbs without bound.

$$\lim_{x\to+\infty}p(x)=+\infty$$

Tangency at $2$ follows from the square, since $(x-2)^{2}\ge0$ keeps the sign of $p$ unchanged on both sides of $2$. Both halves hold, so the statement is True.
""",
    r"""
At a simple zero the graph cuts the axis, and a nonzero slope is exactly what a cut looks like.

$$p'(x)=3x^{2}-6x$$

$$p'(-1)=3+6=9$$

The horizontal tangents are the zeros of $3x(x-2)$, namely $x=0$ and $x=2$ — the latter being the double root, where multiplicity at least two always forces the derivative to vanish. The simple zero at $-1$ is not on that list.

$$p'(x)=3x(x-2)$$

The slope there is $9$, not $0$, so the statement is False.
""",
    r"""
The constant term is the height at $x=0$, and it is also fixed by the multiset of roots.

$$p(0)=4$$

$$(-1)^{3}\cdot 2^{2}\cdot(-1)=4$$

For a monic cubic the constant term equals $(-1)^{3}$ times the product of the roots counted with multiplicity, and that multiset is $\{2,2,-1\}$ with product $-4$.

$$(-1)^{3}(-4)=4$$

The sketch's marked intercept, the expansion $x^{3}-3x^{2}+4$ and the Vieta product all agree on $4$, so the statement is True.
""",
    r"""
A cubic always carries three roots counting multiplicity, but a double root spends two of those three at a single point of the axis.

$$p(x)=(x-2)^{2}(x+1)$$

$$2+1=3$$

The sketch shows the curve bouncing off the axis at $x=2$ and passing through it at $x=-1$: the axis is reached at two distinct abscissas, and only one of them is a crossing. The multiplicity total of three does not convert into three distinct crossings, so the statement is False.
""",
    r"""
Between a crossing and a touch the graph has to turn around, and the derivative locates the turn.

$$p'(x)=3x^{2}-6x$$

$$p'(x)=3x(x-2)$$

$$p'(0)=0$$

The stationary abscissa $x=0$ lies strictly inside $(-1,2)$, and it is a local maximum: $p(0)=4$ while $p(-1)=p(2)=0$. Rolle's theorem gives the same conclusion without any computation, since $p$ takes equal values at the two roots and therefore has a flat point between them. A local extremum does sit on that interval, so the statement is True.
""",
]

EXPL["math-9-e12"] = [
    r"""
Difference the sampled column repeatedly and watch which level flattens out.

$$2,\ 0,\ 6,\ 56,\ 210,\ 552$$

$$-2,\ 6,\ 50,\ 154,\ 342$$

$$8,\ 44,\ 104,\ 188$$

$$36,\ 60,\ 84$$

$$24,\ 24$$

Only the last row is constant. On unit spacing a degree-$n$ polynomial with leading coefficient $a$ has $n$-th difference $n!\,a$, so $4!\,a=24$ gives $a=1$. Constant fourth differences equal to $24$ diagnose a monic quartic, so the statement is True.
""",
    r"""
Check the third row instead of assuming it has settled.

$$36,\ 60,\ 84$$

Those numbers are not constant: they climb by $24$ each step, which is precisely the constant fourth difference showing through. Constancy arrives one level later.

$$24,\ 24$$

A cubic is pinned down by four samples, and the cubic through the first four entries here already misses the fifth: its Newton form $2-2x+8\binom{x}{2}+36\binom{x}{3}$ predicts $186$ at $x=4$ while the table records $210$. Third differences are not constant and no cubic fits all six samples, so the statement is False.
""",
    r"""
First identify the model. A constant fourth difference of $24$ means a monic quartic, and the closed form reproducing the samples is

$$p(x)=x^{4}-3x^{2}+2$$

with $p(3)=81-27+2=56$ and $p(5)=625-75+2=552$ matching the table. Only even powers appear, so reflecting the input changes nothing.

$$p(-x)=(-x)^{4}-3(-x)^{2}+2$$

$$p(-x)=p(x)$$

The sampled value therefore transfers straight across the axis.

$$p(-2)=p(2)=6$$

The evenness argument and the transferred value are both sound, so the statement is True.
""",
    r"""
The constant term of a polynomial is its value at $x=0$, which is the first column of the table, not the second.

$$p(0)=2$$

$$p(1)=0$$

The sample $p(1)=0$ says that $x=1$ is a root, visible in the factorisation $\left(x^{2}-1\right)\left(x^{2}-2\right)$, while the constant term is the product $(-1)(-2)=2$ of the two constant terms there. A root and a constant term coincide only when the root is $0$. The constant term is $2$, so the statement is False.
""",
    r"""
This is the converse direction of the difference test, and it does hold. Write the leading term as $ax^{4}$.

$$\Delta^{4}p(x)=4!\,a$$

Each differencing pass on unit spacing lowers the degree by one and multiplies the leading coefficient by the old degree, so after four passes a quartic leaves a constant, and every lower-degree term has already been annihilated.

$$24a=24$$

With $a=1$ that constant is exactly the $24$ the table produces. A degree-$4$ model and constant fourth differences are two descriptions of the same data, so the statement is True.
""",
]

EXPL["math-9-e13"] = [
    r"""
Expand the squared factor first, multiply out, and apply the leading minus sign last.

$$(t-2)^{2}=t^{2}-4t+4$$

$$\left(t^{2}-4t+4\right)(t-5)=t^{3}-9t^{2}+24t-20$$

$$c(t)=-t^{3}+9t^{2}-24t+20$$

The table backs the result at both ends of the test: $c(0)=20$ and $c(6)=-(4)^{2}(1)=-16$. The expansion is the stated cubic, so the statement is True.
""",
    r"""
Vieta counts each root as often as its multiplicity, and $t=2$ is a double root of this camber model.

$$c(t)=-(t-2)^{2}(t-5)$$

$$2+2+5=9$$

The coefficients give the same total. For $at^{3}+bt^{2}+\dots$ the weighted root sum is $-b/a$, and here $a=-1$, $b=9$.

$$-\frac{9}{-1}=9$$

The claimed $10$ would need a different root multiset, such as $2$, $3$ and $5$. The sum is $9$, so the statement is False.
""",
    r"""
The limit direction quoted is right, but the reason given is impossible: a cubic cannot have leading coefficient $0$.

$$c(t)=-t^{3}+9t^{2}-24t+20$$

The leading coefficient is $-1$. Factoring it out shows the far-field behaviour.

$$c(t)=-t^{3}\left(1-\frac{9}{t}+\frac{24}{t^{2}}-\frac{20}{t^{3}}\right)$$

$$\lim_{t\to+\infty}c(t)=-\infty$$

So the camber does dive, driven by lead $-1$ on an odd degree; a lead of $0$ would delete the cubic term altogether and leave a quadratic, whose two ends point the same way. The coefficient cited is wrong, so the statement is False.
""",
    r"""
Evaluate the factored model at $t=0$ to read its constant term.

$$c(0)=-(0-2)^{2}(0-5)$$

$$c(0)=-(4)(-5)=20$$

The expanded form ends in $+20$ and the table's first entry is $20$, so the constant term is $20$ and not $21$. The clause attached to the number is fine in itself — a nonzero constant term says exactly that $t=0$ is not a root — but the value is wrong, so the statement is False.
""",
    r"""
This model displays the gap between the two counts directly.

$$c(t)=-(t-2)^{2}(t-5)$$

Three roots with multiplicity, yes: $2$, $2$ and $5$. But only two distinct abscissas, and at the double root the curve grazes the axis instead of crossing it, as the samples $c(1)=4$, $c(2)=0$, $c(3)=2$ show — the camber comes down to zero and goes back up on the same side.

$$c(4)=4$$

$$c(6)=-16$$

That sign change is the one genuine crossing in the window, at $t=5$. A multiplicity total of three does not force three distinct crossings, so the statement is False.
""",
]

EXPL["math-9-e14"] = [
    r"""
Test each half against its own symmetry definition by substituting $-x$.

$$p_{\mathrm{even}}(-x)=\tfrac12\left(p(-x)+p(x)\right)$$

The bracket is the same sum as before with the terms swapped, so the even part reproduces itself. The odd part picks up a sign instead.

$$p_{\mathrm{odd}}(-x)=\tfrac12\left(p(-x)-p(x)\right)$$

$$p_{\mathrm{odd}}(-x)=-p_{\mathrm{odd}}(x)$$

Concretely, for $p(x)=x^{3}+x^{2}$ the two halves are $x^{2}$ and $x^{3}$: the even powers gather in one, the odd powers in the other. Both symmetries hold for every $p$, so the statement is True.
""",
    r"""
Add the two definitions and watch the reflected values cancel.

$$p_{\mathrm{even}}(x)+p_{\mathrm{odd}}(x)=\tfrac12\left(p(x)+p(-x)\right)+\tfrac12\left(p(x)-p(-x)\right)$$

$$p_{\mathrm{even}}(x)+p_{\mathrm{odd}}(x)=\tfrac12\left(2p(x)\right)$$

$$p_{\mathrm{even}}(x)+p_{\mathrm{odd}}(x)=p(x)$$

The equality holds at every real $x$, and two polynomials that agree at every real number have the same coefficients, so this is an identity of polynomials rather than a numerical accident. The decomposition rebuilds $p$, so the statement is True.
""",
    r"""
The core fact is a theorem, but the condition bolted onto it is not part of the argument. If $p$ is odd then $p(-x)=-p(x)$, and the definition collapses.

$$p_{\mathrm{even}}(x)=\tfrac12\left(p(x)-p(x)\right)$$

$$p_{\mathrm{even}}(x)=0$$

That happens for every odd $p$, with no coefficient surgery of any kind. Flipping the sign of the leading coefficient of an odd polynomial is also irrelevant, since $x^{3}+x$ and $-x^{3}+x$ are both odd and both have vanishing even part.

$$\tfrac12\left(\left(-x^{3}+x\right)+\left(x^{3}-x\right)\right)=0$$

Making an unconditional vanishing contingent on replacing the leading coefficient misdescribes the result, so the statement is False.
""",
    r"""
Evaluate the odd part at the origin straight from the definition.

$$p_{\mathrm{odd}}(0)=\tfrac12\left(p(0)-p(-0)\right)$$

$$p_{\mathrm{odd}}(0)=0$$

The odd part always destroys the constant term; it is the even part that keeps it, since $p_{\mathrm{even}}(0)=\tfrac12(p(0)+p(0))=p(0)$. So the claimed identity holds only in the special case $p(0)=0$, and a one-line example breaks it: for $p(x)=x+1$ the odd part is $x$.

$$p_{\mathrm{odd}}(0)=0\neq 1=p(0)$$

The identity fails for every $p$ with nonzero constant term, so the statement is False.
""",
    r"""
The even part is assembled from the even-power terms of $p$ alone, because the $-x$ substitution flips the sign of every odd-power term and the average keeps only what survives.

$$p_{\mathrm{even}}(x)=a_{0}+a_{2}x^{2}+a_{4}x^{4}+\dots$$

Every exponent present is even, so the degree of a nonzero even part is even. An odd-degree example makes the point: take $p(x)=x^{3}-3x^{2}+x$.

$$p_{\mathrm{even}}(x)=-3x^{2}$$

The degree of $p$ is $3$ while its even part has degree $2$; the top odd power always lands in the odd half. An even part cannot have odd degree, so the statement is False.
""",
]

EXPL["math-9-e15"] = [
    r"""
The factor $(x-a)$ is squared for every value of the parameter, and multiplicity at least two always forces a horizontal tangent.

$$p_{a}(x)=(x-a)^{2}(x+1)$$

$$p_{a}'(x)=2(x-a)(x+1)+(x-a)^{2}$$

$$p_{a}'(x)=(x-a)\left(3x-a+2\right)$$

The factor $(x-a)$ survives differentiation, so substituting $x=a$ annihilates the derivative.

$$p_{a}'(a)=0$$

Both assertions hold for every real $a$ — even for $a=-1$, where the roots collide into a triple root and the tangent is still flat, so the statement is True.
""",
    r"""
The factor $(x+1)$ contains no parameter, so it cannot move.

$$p_{a}(-1)=(-1-a)^{2}(-1+1)$$

$$p_{a}(-1)=0$$

Whatever $a$ is, the second factor vanishes at $x=-1$, so $-1$ belongs to the zero set of every member of the family; only the double root at $x=a$ slides along the axis. For the single value $a=-1$ the two roots collide and $-1$ becomes a triple root, which is still a root.

$$p_{-1}(x)=(x+1)^{3}$$

The evaluation is zero for every $a$, so the statement is True.
""",
    r"""
An odd polynomial contains no even powers, so expand and demand that the two even-power coefficients vanish.

$$p_{a}(x)=x^{3}+(1-2a)x^{2}+\left(a^{2}-2a\right)x+a^{2}$$

$$1-2a=0$$

$$a^{2}=0$$

The first requirement gives $a=\tfrac12$ and the second gives $a=0$; no single parameter satisfies both, so no member of this family is odd. The suggested value fails on inspection.

$$p_{0}(x)=x^{3}+x^{2}$$

Oddness would need $p_{0}(-1)=-p_{0}(1)=-2$, whereas $p_{0}(-1)=-1+1=0$. No parameter works, so the statement is False.
""",
    r"""
The constant term is the value at $x=0$, so substitute the parameter first and the argument second.

$$p_{2}(x)=(x-2)^{2}(x+1)$$

$$p_{2}(0)=(-2)^{2}(1)$$

$$p_{2}(0)=4$$

The general expansion agrees, since the constant term of $(x-a)^{2}(x+1)$ is $a^{2}$, which is $4$ at $a=2$; the expanded cubic $x^{3}-3x^{2}+4$ ends in $+4$ as well. The constant term is $4$, so the statement is True.
""",
    r"""
The leading coefficient comes from multiplying the three leading $x$'s, and the parameter lives only in the constants of the factors.

$$(x-a)^{2}(x+1)=x^{3}+(1-2a)x^{2}+\left(a^{2}-2a\right)x+a^{2}$$

The coefficient of $x^{3}$ is $1$ for every $a$: every member of the family is monic. What $a$ does control is the lower coefficients, hence the position of the double root.

$$p_{0}(x)=x^{3}+x^{2}$$

$$p_{3}(x)=x^{3}-5x^{2}+3x+9$$

Both are monic and the lead is parameter-free, so the statement is False.
""",
]

EXPL["math-9-e16"] = [
    r"""
Translate the multiplicity data into exponents: a double zero at $1$ contributes $(x-1)^{2}$, a simple zero at $3$ contributes $(x-3)$, and those exponents already add up to the degree of a cubic.

$$p(x)=(x-1)^{2}(x-3)$$

$$p(x)=x^{3}-5x^{2}+7x-3$$

Monic normalisation is what makes the answer unique: any other cubic with this zero-and-multiplicity pattern is a nonzero constant multiple of this one. The reconstruction is the stated product, so the statement is True.
""",
    r"""
Differentiate the factored form and keep the result factored.

$$p'(x)=2(x-1)(x-3)+(x-1)^{2}$$

$$p'(x)=(x-1)\left(3x-7\right)$$

The double root leaves a factor $(x-1)$ behind in the derivative, so the beam model has a horizontal tangent at $x=1$; the simple root at $3$ has no such factor.

$$p'(1)=0$$

$$p'(3)=(2)(2)=4$$

A double zero is a flat point and a simple zero is a transversal crossing, so the statement is True.
""",
    r"""
Add the roots with multiplicity: $1$ counted twice, $3$ counted once.

$$2\cdot 1+3=5$$

Vieta reads the same number off the expansion, as minus the coefficient of $x^{2}$.

$$p(x)=x^{3}-5x^{2}+7x-3$$

$$-(-5)=5$$

The weighting is doing real work: counting $1$ only once would give $4$ and destroy the match. Both routes give $5$, so the statement is True.
""",
    r"""
The multiplicity total is three, but the double zero occupies one abscissa twice.

$$p(x)=(x-1)^{2}(x-3)$$

$$2+1=3$$

The distinct zeros are $1$ and $3$: two numbers. Graphically the deflection curve touches the axis at $x=1$ and crosses it at $x=3$, which is precisely why the two counts differ. There are two distinct real zeros, not three, so the statement is False.
""",
    r"""
Both halves of the sentence compute the same constant term, one by substitution and one by Vieta.

$$p(0)=(0-1)^{2}(0-3)$$

$$p(0)=-3$$

For a monic cubic the constant term is $(-1)^{3}$ times the product of the roots with multiplicity, and that multiset is $\{1,1,3\}$.

$$(-1)^{3}(1)^{2}(3)=-3$$

The expansion $x^{3}-5x^{2}+7x-3$ ends in $-3$ as well, so all three readings agree on the same constant term, so the statement is True.
""",
]

EXPL["math-9-e17"] = [
    r"""
The outer map is affine, so it rescales and shifts the inner values without disturbing which power is on top.

$$q(p(x))=2\left(x^{2}+x+1\right)-1$$

$$q(p(x))=2x^{2}+2x+1$$

Nested degrees multiply, $2\cdot1=2$, and the coefficient $2$ on $x^{2}$ is nonzero, so nothing cancels there. The highest power is $x^{2}$, so the statement is True.
""",
    r"""
For an affine outer map the leading coefficient of the nesting is the outer slope times the inner lead.

$$q(u)=2u-1$$

$$q(p(x))=2x^{2}+2x+1$$

$$2\cdot 1=2$$

The direct expansion and the rule agree, and the $-1$ in $q$ only lowers the constant term from $2$ to $1$. The lead is $2$, so the statement is True.
""",
    r"""
Only two numbers can influence this lead: the slope $2$ of the outer map and the leading coefficient $1$ of the inner quadratic.

$$q(p(x))=2x^{2}+2x+1$$

$$2\cdot 1=2$$

Nothing else can migrate into the top term — the $+x$ and $+1$ inside $p$ contribute to the lower coefficients, and the $-1$ from $q$ contributes to the constant. A lead of $3$ never appears, so the statement is False.
""",
    r"""
Evaluate each nesting from the inside out; the two orders happen to agree at this input.

$$p(0)=1$$

$$q(1)=2-1=1$$

That gives $q(p(0))=1$. Reversing the order:

$$q(0)=-1$$

$$p(-1)=1-1+1=1$$

So $p(q(0))=1$ as well. This is a coincidence at one point rather than a general commutation, since $q(p(x))=2x^{2}+2x+1$ and $p(q(x))=4x^{2}-2x+1$ give $5$ and $3$ at $x=1$. Both quoted values are correct, so the statement is True.
""",
    r"""
Compute the second nesting in full and compare the top powers.

$$p(q(x))=(2x-1)^{2}+(2x-1)+1$$

$$p(q(x))=4x^{2}-2x+1$$

$$q(p(x))=2x^{2}+2x+1$$

Degrees multiply in either order — quadratic into affine or affine into quadratic both give $2\cdot1=2$ — so both nestings top out at $x^{2}$. Only the coefficients differ, $4$ against $2$. The shared highest power is $x^{2}$ as claimed, so the statement is True.
""",
]

EXPL["math-9-e18"] = [
    r"""
Multiply the last two factors first, then distribute the remaining one.

$$(x-2)(x-4)=x^{2}-6x+8$$

$$(x+1)\left(x^{2}-6x+8\right)=x^{3}-6x^{2}+8x+x^{2}-6x+8$$

$$p(x)=x^{3}-5x^{2}+2x+8$$

Two checks: the constant term must be $(1)(-2)(-4)=8$, and $p(2)=8-20+4+8=0$ as the factor $(x-2)$ demands. The expansion is the stated cubic, so the statement is True.
""",
    r"""
Multiplicity at least two requires, first of all, that the number be a root; test that.

$$p(1)=(1+1)(1-2)(1-4)$$

$$p(1)=(2)(-1)(-3)=6$$

Six is not zero, so the graph sits six units above the axis at $x=1$ and the multiplicity there is $0$. The three factors of this cubic are distinct and each appears once, so its roots are $-1$, $2$ and $4$, all simple — this polynomial has no multiple root anywhere. The number $1$ is not even a root, so the statement is False.
""",
    r"""
Read the roots off the factors, add them, and confirm with Vieta.

$$-1+2+4=5$$

$$p(x)=x^{3}-5x^{2}+2x+8$$

$$-\frac{-5}{1}=5$$

Every root is simple, so multiplicity weighting changes nothing here. The claimed $6$ would require the coefficient of $x^{2}$ to be $-6$, which it is not. The sum is $5$, so the statement is False.
""",
    r"""
Neither part of this sentence survives inspection. First, $x=3$ is not a root of $p$ at all.

$$p(3)=(4)(1)(-1)=-4$$

Second, the derivative there is nonzero.

$$p'(x)=3x^{2}-10x+2$$

$$p'(3)=27-30+2=-1$$

The slope $-1$ is small but not zero: at $x=3$ the curve is between the roots $2$ and $4$, still descending toward its local minimum near $x\approx3.12$. Both the value and the reason are wrong, so the statement is False.
""",
    r"""
Degree three caps the number of zeros at three, however they are counted.

$$p(x)=(x+1)(x-2)(x-4)$$

The zeros are $-1$, $2$ and $4$: three distinct numbers, each of multiplicity one, so the weighted total is also three. A fourth distinct zero would contribute a fourth linear factor and force the degree up to four.

$$1+1+1=3$$

There are three distinct real zeros, not four, so the statement is False.
""",
]

EXPL["math-9-e19"] = [
    r"""
Two properties to verify: the parity and the absence of real zeros.

$$p(-x)=(-x)^{4}+1=x^{4}+1$$

Only an even power appears, so $p(-x)=p(x)$ and the graph is symmetric about the vertical axis — an even quartic. For the zeros, note that a fourth power is never negative.

$$x^{4}\ge 0$$

$$p(x)\ge 1$$

So $p(x)=0$ has no real solution, and the table echoes it: every listed value is at least $1$. Both properties hold, so the statement is True.
""",
    r"""
Difference the sampled column and see where it settles.

$$1,\ 2,\ 17,\ 82,\ 257,\ 626$$

$$1,\ 15,\ 65,\ 175,\ 369$$

$$14,\ 50,\ 110,\ 194$$

$$36,\ 60,\ 84$$

The third row still moves, climbing by $24$ each step; constancy arrives only one level later, at the value $24=4!\cdot 1$. Four samples determine a cubic, and the cubic through the first four entries gives $233$ at $x=4$ instead of the tabulated $257$ — the shortfall is exactly that missing fourth difference. No cubic fits all six samples, so the statement is False.
""",
    r"""
Read the sample, confirm it against the closed form, then use the symmetry.

$$p(2)=17$$

$$2^{4}+1=17$$

Table and formula agree. Since only the even power $x^{4}$ occurs, replacing $x$ by $-x$ leaves the expression unchanged.

$$p(-2)=(-2)^{4}+1=17$$

Evenness forces the value at $-2$ to equal the value at $2$, so the statement is True.
""",
    r"""
An even-degree polynomial with positive leading coefficient sends both ends the same way, so the two halves of this sentence cannot both hold.

$$p(x)=x^{4}+1$$

$$\lim_{x\to+\infty}p(x)=+\infty$$

The right-hand claim is fine. On the left, the fourth power destroys the sign of the input: $p(-10)=10001$, identical to $p(10)$.

$$\lim_{x\to-\infty}p(x)=+\infty$$

The left end rises rather than falling, so the statement is False.
""",
    r"""
The constant term is the value at $x=0$, and both the table and the closed form report it.

$$p(0)=1$$

$$0^{4}+1=1$$

The first column of the table is $1$, matching the formula. The claimed $2$ is the next sample instead, since $p(1)=1+1=2$ — a value of the polynomial, not its constant term.

$$p(1)=2$$

The constant term is $1$, not $2$, so the statement is False.
""",
]

EXPL["math-9-e20"] = [
    r"""
The exponent on the relevant factor decides touch against cross.

$$p(x)=(x-2)^{2}(x+1)$$

$$(x-2)^{2}\ge 0$$

Near $x=2$ the factor $(x+1)$ stays close to $3$ and keeps a fixed sign, while the squared factor is non-negative on both sides, so $p$ drops to zero and returns to the same side of the axis.

$$p(1.9)=(0.01)(2.9)>0$$

$$p(2.1)=(0.01)(3.1)>0$$

An even multiplicity is exactly a tangency, so the graph touches the axis at $x=2$, so the statement is True.
""",
    r"""
Differentiate, then test the symmetry of what comes out.

$$g'(x)=3x^{2}-4$$

$$g'(-x)=3(-x)^{2}-4=3x^{2}-4$$

Only an even power remains, so $g'(-x)=g'(x)$ for all $x$. That is the general pattern rather than an accident: differentiating lowers every exponent by one, so the odd powers of an odd function become even powers in the derivative. The derivative is even, so the statement is True.
""",
    r"""
Read the roots off the factors, minding the signs, and add.

$$p(x)=(x+3)(x-1)(x-4)$$

$$-3+1+4=2$$

Vieta agrees once the product is expanded, since the weighted root sum is minus the coefficient of $x^{2}$.

$$p(x)=x^{3}-2x^{2}-11x+12$$

$$-(-2)=2$$

The claimed $8$ comes from adding $3+1+4$, that is, from misreading the factor $(x+3)$ as the root $+3$ instead of $-3$. The sum is $2$, so the statement is False.
""",
    r"""
Substitute $-x$ and compare with $-h(x)$.

$$h(-x)=-(-x)^{3}+3(-x)$$

$$h(-x)=x^{3}-3x$$

$$-h(x)=-\left(-x^{3}+3x\right)=x^{3}-3x$$

The two agree for every $x$, because every power present is odd. Putting $x=0$ into that identity gives $h(0)=-h(0)$, so the value at the origin has to be zero, and directly:

$$h(0)=0$$

Both claims hold, so the statement is True.
""",
    r"""
Start with the degree, which the label already gets wrong.

$$x^{5}-5x^{2}+4$$

The top power is $5$, so this is a quintic; a product of four real linear factors has degree $4$, and the counts cannot be reconciled. Factoring shows the deeper problem: $x=1$ is a root, and what remains does not split into real linear pieces.

$$x^{5}-5x^{2}+4=(x-1)\left(x^{4}+x^{3}+x^{2}-4x-4\right)$$

The quartic factor has only two real zeros, near $-0.84$ and $1.46$, leaving an irreducible quadratic behind — three real linear factors in all. Lowering the exponent to $4$ would give the tidy split the claim describes, $x^{4}-5x^{2}+4=(x-1)(x+1)(x-2)(x+2)$, but that is a different polynomial. Both the degree label and the factor count are wrong, so the statement is False.
""",
]

EXPL["math-9-e21"] = [
    r"""
End behaviour is decided by the leading term, which here is $-x^{3}$.

$$p(x)=-x^{3}+3x^{2}+4x$$

$$p(x)=-x^{3}\left(1-\frac{3}{x}-\frac{4}{x^{2}}\right)$$

The bracket tends to $1$, so far to the right the curve behaves like $-x^{3}$: an odd power carrying a negative sign, which sends large positive inputs to large negative outputs.

$$\lim_{x\to+\infty}p(x)=-\infty$$

Odd degree with a negative lead produces exactly the described fall, so the statement is True.
""",
    r"""
The graph does pass through the axis at the origin, but it does so with a nonzero slope.

$$p(x)=-x(x-4)(x+1)$$

$$p'(x)=-3x^{2}+6x+4$$

$$p'(0)=4$$

The factor $x$ appears once, so $x=0$ is a simple root, and simple roots are crossings: the sign of $p$ really does flip, with $p(-0.1)\approx-0.37$ and $p(0.1)\approx0.43$. A touch would need the factor $x$ to appear at least twice, which would also make $p'(0)=0$. The slope at the origin is $4$, not $0$, so the statement is False.
""",
    r"""
For a cubic $ax^{3}+bx^{2}+cx+d$ the constant term is $a$ times $(-1)^{3}$ times the product of the roots with multiplicity. The crossings on the figure are $-1$, $0$ and $4$, so that product is zero.

$$(-1)(0)(4)=0$$

$$d=(-1)\cdot(-1)^{3}\cdot 0=0$$

The intercept read from the figure is the same number.

$$p(0)=0$$

Both are zero for the same structural reason: $x=0$ is itself a root, so the factorisation $-x(x-4)(x+1)$ carries no constant term. Intercept and signed root product agree, so the statement is True.
""",
    r"""
The conclusion drawn is right, but the number supporting it belongs to a different abscissa.

$$p'(x)=-3x^{2}+6x+4$$

$$p'(4)=-48+24+4=-20$$

The rightmost crossing is at $x=4$, and there the slope is $-20$, so the curve slices through rather than flattening. The statement, however, evaluates the derivative at $x=5$, past the last root.

$$p'(5)=-75+30+4=-41$$

The value $-20$ is the slope at $4$, not at $5$, so the statement is False.
""",
    r"""
Three distinct real zeros say nothing about the sign of the leading coefficient, and this very figure is the counterexample.

$$p(x)=-x(x-4)(x+1)$$

The zeros $-1$, $0$ and $4$ are distinct while the leading coefficient is $-1$, so the right end falls and the left end rises. The construction generalises: multiplying any upward cubic by $-1$ keeps its zero set and reverses its ends.

$$-p(x)=x(x-4)(x+1)$$

Downward cubics with three distinct zeros exist in abundance, so the statement is False.
""",
]

EXPL["math-9-e22"] = [
    r"""
Accumulating a quantity raises the polynomial degree by one, so a quadratic speed produces a cubic distance.

$$v(t)=\frac{t^{2}}{10}-\frac{t}{2}+2$$

$$s(t)=\frac{t^{3}}{30}-\frac{t^{2}}{4}+2t$$

Each term integrates to one of higher degree, and the $t^{3}$ term cannot disappear because the coefficient $\tfrac{1}{10}$ is nonzero. The ledger's own differences say the same thing: an exactly quadratic column would need constant second differences, whereas these move.

$$0,\ 1,\ 3,\ 4$$

Distance is one degree above speed, so the statement is False.
""",
    r"""
The distance column is cumulative, so the total for the whole run is its last entry minus its first.

$$s(10)=28$$

$$s(10)-s(0)=28-0$$

The entries increase throughout — $0$, $3$, $6$, $10$, $17$, $28$ — which is what a cumulative ledger looks like; per-interval readings would not be monotone in that way. The ledger records $28$ m over $[0,10]$, so the statement is True.
""",
    r"""
Constant second differences of a sampled column constrain the polynomial interpolating those samples, not the motion that generated them: infinitely many models pass through six points, and only the interpolant of degree at most five is pinned down. In any case this ledger does not have constant second differences.

$$3,\ 3,\ 4,\ 7,\ 11$$

$$0,\ 1,\ 3,\ 4$$

The second row moves, exactly as a cubic distance column should. Constant acceleration would mean a linear speed, while the stem's speed is quadratic with a genuinely varying derivative.

$$v'(t)=\frac{t}{5}-\frac{1}{2}$$

A finite table could not license the stated conclusion even if it were flat, so the statement is False.
""",
    r"""
Average speed over a run is total distance divided by total time.

$$\frac{s(10)-s(0)}{10-0}=\frac{28}{10}$$

$$\frac{28}{10}=\frac{14}{5}$$

That is $2.8$ m/s, and it sits between the extremes of the speed model, whose minimum is $v\!\left(\tfrac52\right)=\tfrac{11}{8}$ and whose final value is $v(10)=7$ — a sanity check that the quotient is a plausible mean. The average equals $\tfrac{14}{5}$, so the statement is True.
""",
    r"""
Constant first differences of the distance column would mean equal distance covered in every equal time slot, that is, a linear ledger.

$$s(t)=mt+c$$

$$v(t)=s'(t)=m$$

A linear distance function has constant speed $m$. The stem's speed is genuinely quadratic, with nonzero $t^{2}$ coefficient, so it takes different values at different times.

$$v(0)=2$$

$$v(10)=7$$

The two pictures cannot coexist, which is precisely the contradiction the statement identifies; and indeed the recorded first differences $3$, $3$, $4$, $7$, $11$ are not constant. The reasoning is sound, so the statement is True.
""",
]

EXPL["math-9-e23"] = [
    r"""
Multiply the two shifted factors and keep the bare factor $t$ outside.

$$(t+1)(t-3)=t^{2}-2t-3$$

$$s(t)=t\left(t^{2}-2t-3\right)$$

$$s(t)=t^{3}-2t^{2}-3t$$

The sample column confirms the algebra: $s(1)=1-2-3=-4$ and $s(4)=64-32-12=20$, both tabulated. The expansion is the stated form, so the statement is True.
""",
    r"""
The roots are already visible in the factorisation, and all three are simple.

$$s(t)=(t+1)\,t\,(t-3)$$

$$-1+0+3=2$$

Vieta produces the same total from the coefficients of the monic cubic.

$$-\frac{-2}{1}=2$$

Since no root repeats, multiplicity weighting leaves the sum untouched. Both routes give $2$, so the statement is True.
""",
    r"""
Only the leading term matters far from the origin, and it is $t^{3}$ with coefficient $1$.

$$s(t)=t^{3}\left(1-\frac{2}{t}-\frac{3}{t^{2}}\right)$$

The bracket tends to $1$, so the spill excess eventually grows like $t^{3}$; the table has already turned upward, from $s(3)=0$ to $s(4)=20$.

$$\lim_{t\to+\infty}s(t)=+\infty$$

Odd degree with a positive lead gives the stated rise, so the statement is True.
""",
    r"""
The constant term is the value at $t=0$, and the bare factor $t$ makes that value zero.

$$s(t)=t\left(t^{2}-2t-3\right)$$

$$s(0)=0$$

The expanded form $t^{3}-2t^{2}-3t$ carries no constant term at all, which is the same observation from the other side, and the table lists $0$ in the $t=0$ column. The two halves of the claim are equivalent rather than merely coincident, since a vanishing constant term is exactly what "$t=0$ is a root" means, so the statement is True.
""",
    r"""
A cubic carries three roots counting multiplicity by construction, and no such count can guarantee three separate crossings inside a window. Two things can intervene: repeated roots, and roots outside the recorded range.

$$(t+1)^{2}(t-3)$$

That cubic also has three roots with multiplicity, yet it only touches the axis at $t=-1$ before crossing at $t=3$. The spill model happens to be better behaved.

$$s(t)=(t+1)\,t\,(t-3)$$

Its roots $-1$, $0$, $3$ are distinct and inside the sampled range, so the graph does reach the axis three times — but because of those facts, not because the multiplicity total is three. The implication asserted is invalid, so the statement is False.
""",
]

EXPL["math-9-e24"] = [
    r"""
A vertical shift slides the graph past the axis, and the number of intersections can change with it.

$$p(x)=x^{2}$$

$$q(x)=x^{2}+c$$

With $c=0$ there is one root, a double root at the origin; with $c=-1$ there are two.

$$x^{2}-1=(x-1)(x+1)$$

With $c=1$ there are none, since $x^{2}+1\ge1$. That is three different counts from one $p$, and only one choice of $c$ was needed to make the point. Some shift does change the root count, so the statement is True.
""",
    r"""
Differentiation annihilates constants.

$$q(x)=p(x)+c$$

$$q'(x)=p'(x)+0$$

$$q'(x)=p'(x)$$

The two polynomials therefore have identical derivatives, hence identical sets of stationary abscissas: every turning point of $p$ lies directly below or above a turning point of $q$. Only the heights move, each by the same $c$. Turning abscissas are shift-invariant, so the statement is True.
""",
    r"""
No shift can lift the root count above the degree. Adding a constant leaves the leading term alone, so $q$ still has degree $n$.

$$q(x)=p(x)+c$$

Each distinct root $r$ of $q$ contributes a factor $(x-r)$, and distinct roots contribute distinct factors.

$$q(x)=(x-r_{1})(x-r_{2})\cdots(x-r_{k})\,g(x)$$

Comparing degrees on the two sides forces $k\le n$; having $n+1$ distinct roots would require a product of $n+1$ linear factors inside a degree-$n$ polynomial. Shifting can lower or rearrange the count but never push it past $n$, so the statement is False.
""",
    r"""
Adding a constant preserves reflection symmetry, because a constant is untouched by $x\mapsto-x$.

$$q(-x)=p(-x)+c$$

$$q(-x)=p(x)+c$$

$$q(-x)=q(x)$$

The middle step is exactly the evenness of $p$. A concrete case: $p(x)=x^{2}$ with $c=3$ gives $q(x)=x^{2}+3$, which is still even. Evenness survives every vertical shift, so the statement is False.
""",
    r"""
Oddness forces the graph through the origin, and a nonzero shift moves it off.

$$q(0)=p(0)+c=c$$

Any odd function $q$ satisfies $q(-0)=-q(0)$, hence $q(0)=0$; with $c\neq0$ that already fails. The general comparison tells the same story.

$$q(-x)=-p(x)+c$$

$$-q(x)=-p(x)-c$$

These agree only when $c=0$. For instance $x^{3}+1$ takes the value $2$ at $x=1$ and $0$ at $x=-1$, which are not negatives of one another. Oddness is destroyed for every $c\neq0$, so the statement is True.
""",
]

EXPL["math-9-e25"] = [
    r"""
A triple root at $x=1$ needs the factor $(x-1)$ three times, and the family already supplies two of them.

$$h_{k}(x)=(x-1)^{2}(x-k)$$

$$h_{1}(x)=(x-1)^{3}$$

For any $k\neq1$ the third factor vanishes at $k$ rather than at $1$, so the multiplicity at $1$ stays exactly two. At $k=1$ the collapse is complete, as the derivative confirms.

$$h_{1}'(x)=3(x-1)^{2}$$

Both $h_{1}$ and $h_{1}'$ vanish at $x=1$, and so does $h_{1}''(x)=6(x-1)$. Exactly one parameter value produces the triple root, so the statement is True.
""",
    r"""
The squared factor is $(x-1)$, so the tangency sits at $x=1$ and not at $x=2$.

$$h_{k}(x)=(x-1)^{2}(x-k)$$

$$h_{k}(2)=(1)^{2}(2-k)=2-k$$

For every $k\neq2$ that value is nonzero, so the graph is not even touching the axis at $x=2$. And for the one value $k=2$ the point $x=2$ becomes a simple root, where the curve crosses with nonzero slope.

$$h_{2}'(2)=1$$

No parameter gives tangency at $x=2$, so the statement is False.
""",
    r"""
Count the distinct zeros as a function of $k$ and the monotonicity claim collapses.

$$h_{k}(x)=(x-1)^{2}(x-k)$$

For every $k\neq1$ the zeros are $1$ and $k$: two distinct values. At $k=1$ they merge into one.

$$h_{1}(x)=(x-1)^{3}$$

So the count is $2$ at $k=0$, drops to $1$ at $k=1$, and returns to $2$ at $k=2$ — never exceeding two and certainly not increasing. Raising $k$ does not steadily raise the number of distinct zeros, so the statement is False.
""",
    r"""
The evaluation the sentence opens with is wrong, even though what it deduces afterwards is fine.

$$h_{k}(2)=(2-1)^{2}(2-k)$$

$$h_{k}(2)=2-k$$

The claimed $-k$ is the value at the origin instead.

$$h_{k}(0)=(-1)^{2}(0-k)=-k$$

From that correct version, $h_{k}(0)=0$ does force $k=0$, and $h_{0}(x)=x(x-1)^{2}$ does keep its double root at $1$. But the premise as written misplaces the argument, and a compound claim built on a false link fails, so the statement is False.
""",
    r"""
An even polynomial contains only even powers, so an odd degree with a nonzero lead rules evenness out immediately.

$$h_{k}(x)=x^{3}-(k+2)x^{2}+(2k+1)x-k$$

The coefficient of $x^{3}$ is $1$ for every $k$, so every member of the family is a genuine cubic. Evenness would require both odd-power coefficients to vanish, and the leading one is locked at $1$.

$$h_{k}(-x)=-x^{3}-(k+2)x^{2}-(2k+1)x-k$$

Comparing with $h_{k}(x)$, the $x^{3}$ terms have opposite signs and cannot match. No parameter makes the family even, so the statement is False.
""",
]

EXPL["math-9-e26"] = [
    r"""
Turn the multiplicity data straight into exponents: double at $-1$ gives $(x+1)^{2}$, simple at $2$ gives $(x-2)$, and $2+1=3$ exhausts a cubic.

$$p(x)=(x+1)^{2}(x-2)$$

$$p(x)=x^{3}-3x-2$$

Monic normalisation removes the last freedom, since any other cubic with this root pattern is a constant multiple. The sign behaviour matches a double root as well: near $x=-1$ the square is non-negative while $(x-2)$ is close to $-3$, so the curve stays below the axis on both sides and merely grazes it. The reconstruction is the stated product, so the statement is True.
""",
    r"""
Differentiate and factor the result.

$$p'(x)=3x^{2}-3$$

$$p'(x)=3(x-1)(x+1)$$

The double root leaves its trace: $(x+1)$ divides $p'$, so the tangent at $x=-1$ is horizontal. The simple root carries no such factor.

$$p'(-1)=0$$

$$p'(2)=12-3=9$$

A double zero is a flat point and a simple zero is a transversal crossing, so the statement is True.
""",
    r"""
The target value is right but the weights written are not: $-1$ is a double root and $2$ is simple, so $-1$ counts twice.

$$2(-1)+2=0$$

$$p(x)=x^{3}+0\cdot x^{2}-3x-2$$

There is no $x^{2}$ term, so minus its coefficient is $0$, agreeing with the correctly weighted sum. The arithmetic in the statement, however, gives weight three to $-1$.

$$3(-1)+2=-1$$

That is $-1$, not the $0$ the sentence asserts, so the statement is False.
""",
    r"""
Multiplicity three is a total, not a count of different zeros.

$$p(x)=(x+1)^{2}(x-2)$$

Solving gives $x=-1$ twice and $x=2$ once: two distinct real zeros.

$$2+1=3$$

The graph makes the difference visible — a touch at $-1$ and a crossing at $2$ — and it is precisely the doubled root that keeps the distinct count at two. Two distinct zeros, not three, so the statement is False.
""",
    r"""
The constant term is $p(0)$, while $p(2)$ is zero because $2$ is a root.

$$p(0)=(1)^{2}(-2)=-2$$

$$p(2)=(3)^{2}(0)=0$$

The Vieta half checks out: for a monic cubic the constant term equals $(-1)^{3}$ times the product of the roots with multiplicity, and that multiset is $\{-1,-1,2\}$.

$$(-1)^{3}(-1)^{2}(2)=-2$$

So $-2$ is the constant term, but it is not $p(2)$. The value is pinned to the wrong argument, so the statement is False.
""",
]

EXPL["math-9-e27"] = [
    r"""
The outer map is affine, so it cannot change which power sits on top.

$$q(p(x))=2-\left(x^{2}-3x+5\right)$$

$$q(p(x))=-x^{2}+3x-3$$

Nested degrees multiply, $2\cdot1=2$, and the coefficient $-1$ is nonzero, so the quadratic term stands. The highest power is $x^{2}$, so the statement is True.
""",
    r"""
Subtracting the inner quadratic flips the sign of its leading coefficient.

$$q(u)=-u+2$$

$$q(p(x))=-x^{2}+3x-3$$

The general rule gives the same answer, outer slope times inner lead.

$$(-1)\cdot 1=-1$$

Geometrically the parabola has been reflected and lifted: it now opens downward, with vertex value $-\tfrac34$ at $x=\tfrac32$. The leading coefficient is $-1$, so the statement is True.
""",
    r"""
A leading coefficient of $0$ would mean the $x^{2}$ term had vanished, but nothing in this nesting can cancel it: the outer slope is $-1$ and the inner lead is $1$.

$$q(p(x))=-x^{2}+3x-3$$

$$(-1)\cdot 1=-1$$

Only a constant outer map could flatten the composite, and $q(x)=2-x$ is not constant. The lead is $-1$, not $0$, so the statement is False.
""",
    r"""
Two evaluations, each worked from the inside out.

$$p(0)=5$$

$$q(5)=2-5=-3$$

That settles $q(p(0))=-3$. Reversing the order:

$$q(0)=2$$

$$p(2)=4-6+5=3$$

So $p(q(0))=3$. The two nestings are different polynomials, $-x^{2}+3x-3$ against $x^{2}-x+3$, so there is no reason for the values to coincide, and they do not. Both quoted numbers are correct, so the statement is True.
""",
    r"""
Compute the other nesting and compare the top powers.

$$p(q(x))=(2-x)^{2}-3(2-x)+5$$

$$p(q(x))=x^{2}-x+3$$

$$q(p(x))=-x^{2}+3x-3$$

Both are quadratic, since $2\cdot1=1\cdot2=2$ regardless of the order, and an affine map can never manufacture an $x^{3}$ term in either position. The shared highest power is $x^{2}$, not $x^{3}$, so the statement is False.
""",
]

EXPL["math-9-e28"] = [
    r"""
Expand the two shifted factors and leave the bare $x$ outside.

$$(x-3)^{2}=x^{2}-6x+9$$

$$\left(x^{2}-6x+9\right)(x+1)=x^{3}-5x^{2}+3x+9$$

$$p(x)=x\left(x^{3}-5x^{2}+3x+9\right)$$

Fully multiplied out this is $x^{4}-5x^{3}+3x^{2}+9x$, and a spot check agrees with the factored original: $1(1-5+3+9)=8$ while $1\cdot(1-3)^{2}\cdot 2=8$. The expansion is the stated one, so the statement is True.
""",
    r"""
Multiplicity at least two begins with being a root, and $x=1$ is not one.

$$p(1)=1\cdot(1-3)^{2}\cdot(1+1)$$

$$p(1)=1\cdot 4\cdot 2=8$$

None of the four factors $x$, $(x-3)$, $(x-3)$, $(x+1)$ vanishes at $x=1$, so its multiplicity is $0$. The only repeated root of this quartic is $x=3$, whose factor appears squared. A number with $p(1)=8$ cannot carry any multiplicity at all, so the statement is False.
""",
    r"""
Add the roots with multiplicity: $0$ once, $3$ twice, $-1$ once.

$$0+3+3+(-1)=5$$

Vieta reads the same number off the $x^{3}$ coefficient of the expanded monic quartic.

$$p(x)=x^{4}-5x^{3}+3x^{2}+9x$$

$$-\frac{-5}{1}=5$$

Counting the root $3$ only once would give $2$ and destroy the match, so the weighting is essential. The weighted sum is $5$, so the statement is True.
""",
    r"""
A root of multiplicity at least two always sits at a horizontal tangent, and $x=3$ is such a root. Write $p(x)=(x-3)^{2}g(x)$ with $g(x)=x(x+1)$ and differentiate.

$$p'(x)=2(x-3)g(x)+(x-3)^{2}g'(x)$$

$$p'(x)=(x-3)\left(2g(x)+(x-3)g'(x)\right)$$

Every term keeps a factor $(x-3)$, so substituting $x=3$ gives zero. The direct computation agrees.

$$p'(x)=4x^{3}-15x^{2}+6x+9$$

$$p'(3)=108-135+18+9=0$$

The double root does force the flat point, so the statement is True.
""",
    r"""
Degree four is the multiplicity total; the number of different zeros is smaller because one factor is squared.

$$p(x)=x(x-3)^{2}(x+1)$$

The zero set is $\{0,3,-1\}$, three numbers, with multiplicities $1$, $2$ and $1$.

$$1+2+1=4$$

Graphically the quartic crosses the axis at $-1$ and at $0$ and merely touches it at $3$. There are three distinct real zeros, not four, so the statement is False.
""",
]

EXPL["math-9-e29"] = [
    r"""
Adding a constant moves every point of the graph the same distance upward and leaves all slopes untouched.

$$q(x)=p(x)+2$$

$$q'(x)=p'(x)=3x^{2}-3$$

The stationary abscissas solve the same equation for both curves.

$$3x^{2}-3=0$$

They are $x=\pm1$ in each case, and the table shows the heights moving while those columns remain the turning ones: $p(-1)=2$ against $q(-1)=4$, and $p(1)=-2$ against $q(1)=0$. Both the shift description and the invariance of the turning abscissas are right, so the statement is True.
""",
    r"""
The local minimum of $p$ sits at $x=1$ with height $-2$, so lifting by exactly $2$ presses it onto the axis and merges two zeros into one.

$$p(x)=x\left(x^{2}-3\right)$$

$$q(x)=x^{3}-3x+2$$

$$q(x)=(x-1)^{2}(x+2)$$

So $p$ has the three distinct zeros $-\sqrt3$, $0$, $\sqrt3$, while $q$ has only $-2$ and the double zero $1$: three against two. The table records the collision as $q(1)=0$ at the old local minimum. The count really does drop, so the statement is True.
""",
    r"""
The intercept of the shifted curve is the old intercept plus the shift.

$$p(0)=0$$

$$q(0)=p(0)+2$$

$$q(0)=2$$

The $q$ row of the table lists $2$ in the $x=0$ column, and the closed form $x^{3}-3x+2$ ends in $+2$ — the constant term has moved by exactly the shift, no more. The value matches the table, so the statement is True.
""",
    r"""
Every nonzero shift destroys oddness, because an odd graph is obliged to pass through the origin.

$$q(0)=p(0)+c=c$$

$$q(-x)=-p(x)+c$$

$$-q(x)=-p(x)-c$$

The last two expressions agree only when $c=0$. The stem's own case makes it concrete: $q(x)=x^{3}-3x+2$ has $q(1)=0$, so oddness would demand $q(-1)=0$.

$$q(-1)=-1+3+2=4$$

The claim holds only at $c=0$, not for every real $c$, so the statement is False.
""",
    r"""
A constant is invisible at the far ends, where the cubic term dominates both curves.

$$p(x)=x^{3}\left(1-\frac{3}{x^{2}}\right)$$

$$\lim_{x\to-\infty}p(x)=-\infty$$

Since $q$ differs from $p$ by a fixed $2$, a bounded correction cannot rescue a quantity already heading downward without limit.

$$\lim_{x\to-\infty}q(x)=-\infty$$

Odd degree with a positive lead sends the left end down for both, so the statement is True.
""",
]

EXPL["math-9-e30"] = [
    r"""
Two curves meet where their heights agree, so set the expressions equal and collect on one side.

$$x^{3}=3x$$

$$x^{3}-3x=0$$

The rearrangement is reversible, so the meeting abscissas are exactly the zeros of the difference — nothing is gained or lost by moving $3x$ across. Factoring names them.

$$x\left(x^{2}-3\right)=0$$

The meetings are at $x=0$ and $x=\pm\sqrt3$, and the equation used to find them is the one stated, so the statement is True.
""",
    r"""
Substitute carefully; the sign flips do not cancel the way the claim needs.

$$p(-1)=(-1)^{4}+(-1)^{2}-(-1)-1$$

$$p(-1)=1+1+1-1=2$$

The value is $2$, so $x=-1$ is not a root and $(x+1)$ is not a factor. The root this quartic does have is at $x=1$, where $1+1-1-1=0$, and dividing out gives

$$p(x)=(x-1)\left(x^{3}+x^{2}+2x+1\right)$$

with the cubic factor nonzero at $-1$, since $-1+1-2+1=-1$. The value $p(-1)$ is $2$ rather than $0$, so the statement is False.
""",
    r"""
Agreement at three points is far too little to fix a degree, because three conditions are satisfied by a whole family of polynomials. Start from the data.

$$p(0)=0$$

$$p(1)=2$$

$$p(2)=10$$

The lowest-degree fit is already a quadratic, not a cubic.

$$3x^{2}-x$$

Indeed $3-1=2$ and $12-2=10$. Higher degrees qualify as well, since adding any multiple of the product of the three nodes changes nothing at those nodes.

$$3x^{2}-x+c\,x(x-1)(x-2)$$

Degrees $2$, $3$, $4$ and beyond all fit the three samples, so nothing forces a cubic, so the statement is False.
""",
    r"""
A fourth power is never negative, so the sign of $k$ decides the whole question.

$$x^{4}\ge 0$$

$$x^{4}+k\ge k$$

For any $k>0$ the expression stays at least $k>0$ and never reaches zero; the case $k=1$ is the familiar $x^{4}+1\ge1$.

$$x^{4}+1\ge 1$$

Real roots do exist when $k\le0$, namely $x=\pm\sqrt[4]{-k}$, but the claim quantifies over every real $k$ and positive values break it, so the statement is False.
""",
    r"""
For odd degree the two ends point in opposite directions, and a negative leading coefficient swaps which end does what. Write the polynomial as $-2x^{3}+bx^{2}+cx+d$ and pull out the top power.

$$p(x)=x^{3}\left(-2+\frac{b}{x}+\frac{c}{x^{2}}+\frac{d}{x^{3}}\right)$$

As $x\to-\infty$ the bracket tends to $-2$ while $x^{3}\to-\infty$, and a negative times a negative is positive.

$$\lim_{x\to-\infty}p(x)=+\infty$$

The bare case $p(x)=-2x^{3}$ shows it numerically, with $p(-10)=2000$. The left end rises rather than falling, since it is the right end that dives, so the statement is False.
""",
]


def main() -> None:
    payload = json.loads(DATA.read_text())
    tasks = payload["tasks"]

    missing = [t["id"] for t in tasks if t["id"] not in EXPL]
    if missing:
        raise SystemExit(f"no explanations authored for: {missing}")

    for task in tasks:
        bodies = [block.strip() for block in EXPL[task["id"]]]
        if len(bodies) != len(task["statements"]):
            raise SystemExit(f"{task['id']}: wrong number of explanations")
        for index, fixed in KEY_FIXES.items():
            if index[0] == task["id"]:
                task["answer_key"][index[1]] = fixed
        task["tactical_explanations"] = [
            f"**{LETTERS[i]}.** \u2192 {'True' if key else 'False'}\n\n{body}"
            for i, (key, body) in enumerate(zip(task["answer_key"], bodies))
        ]

    problems: list[str] = []
    lengths: list[int] = []
    for task in tasks:
        for i, (key, text) in enumerate(zip(task["answer_key"], task["tactical_explanations"])):
            label = f"{task['id']}.{LETTERS[i]}"
            lengths.append(len(text))
            verdict = "True" if key else "False"
            if not text.startswith(f"**{LETTERS[i]}.** \u2192 {verdict}"):
                problems.append(f"{label}: header does not match key ({verdict})")
            if not text.endswith(f", so the statement is {verdict}."):
                problems.append(f"{label}: closing line missing or wrong verdict")
            if "so the statement is" not in text:
                problems.append(f"{label}: no verdict sentence")
            for pattern in BANNED:
                if re.search(pattern, text):
                    problems.append(f"{label}: banned phrase {pattern!r}")
            for display in re.findall(r"\$\$(.+?)\$\$", text, flags=re.S):
                if "\n" in display:
                    problems.append(f"{label}: newline inside a display")
            openings = re.findall(r"\u2192 (?:True|False)\n\n(.+)", text)
            if not openings:
                problems.append(f"{label}: no narrative opener after the header")

        first_lines = [
            re.split(r"\n\n", text, maxsplit=2)[1] for text in task["tactical_explanations"]
        ]
        if len(set(first_lines)) < 4:
            problems.append(f"{task['id']}: repeated openers across letters")
        displays = [
            tuple(re.findall(r"\$\$(.+?)\$\$", text, flags=re.S))
            for text in task["tactical_explanations"]
        ]
        if len(set(displays)) < 4:
            problems.append(f"{task['id']}: repeated display sequences across letters")

    if problems:
        raise SystemExit("validation failed:\n" + "\n".join(problems))

    DATA.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")

    print(f"tasks rewritten: {len(tasks)}")
    print(f"explanations rewritten: {len(lengths)}")
    print(f"median explanation length: {int(statistics.median(lengths))} characters")
    print(f"shortest / longest: {min(lengths)} / {max(lengths)}")
    print(f"answer-key corrections applied: {len(KEY_FIXES)}")


if __name__ == "__main__":
    main()
