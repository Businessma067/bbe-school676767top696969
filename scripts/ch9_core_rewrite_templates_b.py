"""Rewrite Ch9 core explanations that still use enricher-template openers (batch B).

Scope: the task ids in /tmp/ch9-template-b.json (math-9-22, 24, 26, 27, 29,
33, 34, 39, 41, 44, 45, 46, 47, 50, 56). Only those records in
src/data/math-ch9-polynomials.json are updated.

Style: Chapter 4 (src/data/math-ch4-cases.json) and the rewritten math-9-9 /
math-9-97 cards. Each letter opens with a unique narrative sentence, alternates
single-line $$ displays $$ with prose, and closes with
", so the statement is True/False."

Stems, statements and context are never rewritten. Answer keys that disagreed
with the algebra are recorded in KEY_FIXES.

Run: python3 scripts/ch9_core_rewrite_templates_b.py
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

DATA = Path(__file__).resolve().parents[1] / "src/data/math-ch9-polynomials.json"

TARGET_IDS = [
    "math-9-22",
    "math-9-24",
    "math-9-26",
    "math-9-27",
    "math-9-29",
    "math-9-33",
    "math-9-34",
    "math-9-39",
    "math-9-41",
    "math-9-44",
    "math-9-45",
    "math-9-46",
    "math-9-47",
    "math-9-50",
    "math-9-56",
]

LETTERS = "ABCDE"

BANNED = [
    r"\\deg",
    r"\\circ",
    r"\\text\{",
    "Matching the claim",
    "read the stem fully",
    "translate words",
    "Keep the intermediate",
    "From the stem,",
    "Each letter is then",
    "as forced by the coefficients",
    "for every real shift of the graph",
    "and the same holds after replacing",
    "equals settled by",
    "A solver who",
    "rushed solver",
    "Watch.",
    "Trap:",
    "—",
    "Statement A links",
    "Statement B links",
    "Statement C links",
    "Statement D links",
    "Statement E links",
    "concrete polynomial fact",
    "Substitute, factor, differentiate",
    "This settles the claim",
    "That is not what the claim asserts",
    "The algebra matches",
    "corrected figure",
    "highest power p'",
    "yes-or-no decision",
    "The stem produces",
    "Retargeted",
]

FORBIDDEN_OPENER_PREFIXES = [
    "Work from the polynomial named in the stem",
    "A polynomial is evaluated by substituting",
    "A real root is where the graph meets",
    "Turning points and acceleration signs",
    "The highest power and the number in front",
    "The model is an ordinary polynomial",
    "Evenness and oddness are identities",
]

# (task id, statement index) -> corrected truth value.
KEY_FIXES: dict[tuple[str, int], bool] = {
    ("math-9-24", 3): False,  # interval averages 10, 14, 18, 22; max on [15, 20]
    ("math-9-26", 3): True,   # a_n != 0, so the highest power of p is x^n
    ("math-9-29", 2): False,  # h'(10) = -0.2, not positive
    ("math-9-33", 2): True,   # p_e + p_o = p identically
    ("math-9-33", 3): True,   # only even powers => p(-x)=p(x) => odd part is 0
    ("math-9-44", 1): True,   # p(0)=a_0=a_n != 0
    ("math-9-44", 3): True,   # odd n: coefficients pair, p(1)=2*(first-half sum)
    ("math-9-44", 4): True,   # x^2+1 has palindromic coefficients 1, 0, 1
    ("math-9-45", 3): True,   # monic integer p, integer root => x-a divides in Z[x]
    ("math-9-47", 2): False,  # interval rates 10, 15, 20, 20, 15; max not on [0, 8]
    ("math-9-56", 2): True,   # h'(10) = -0.2 < 0
    ("math-9-56", 3): True,   # (1/500)t^3 is present and nonzero
}

EXPL: dict[str, list[str]] = {}

EXPL["math-9-22"] = [
    r"""
Speed is falling when the derivative of the modelled cubic is negative, so differentiate first.

$$v(t)=0.0004t^{3}-0.036t^{2}+0.9t$$

$$v'(t)=0.0012t^{2}-0.072t+0.9$$

At $t=40$ that quadratic equals $0.0012\cdot 1600-0.072\cdot 40+0.9=1.92-2.88+0.9=-0.06$.

$$v'(40)=-0.06$$

A negative value means the first van is slowing down, so the statement is True.
""",
    r"""
Whole-run average speed is total distance over total time, read from the last column of the table.

$$s(40)=440$$

Divide by the $40$ s recorded from the depot:

$$\frac{440}{40}=11$$

That quotient is $11$ m/s, matching the claimed whole-run average of the second van. The table starts at $0$ m, so no offset has to be subtracted, so the statement is True.
""",
    r"""
Convert the $11$ m/s whole-run average into kilometres per hour before comparing it with $45$.

$$11\cdot 3.6=39.6$$

The converted average is $39.6$ km/h. The comparison asked for is the strict inequality

$$39.6>45$$

which fails. The second van's whole-run average stays below $45$ km/h, not above it, by about $5$ km/h, so the statement is False.
""",
    r"""
Interval speeds are the successive distance jumps divided by the common $8$ s width.

$$6,\quad 10,\quad 14,\quad 14,\quad 11$$

Those five rates come from the jumps $48,80,112,112,88$. The largest value is $14$, attained on $[16,24]$ and on $[24,32]$, not on the opening block.

$$\frac{48}{8}=6$$

The first interval is the slowest of the five, so the statement is False.
""",
    r"""
A cubic in $t$ is a polynomial whose highest surviving power is $t^{3}$ with a nonzero coefficient.

$$v(t)=0.0004t^{3}-0.036t^{2}+0.9t$$

The coefficient $0.0004$ of $t^{3}$ is not zero, and no $t^{4}$ or higher appears. Factoring out $t$ does not lower that top power:

$$v(t)=t(0.0004t^{2}-0.036t+0.9)$$

The speed model is therefore a cubic polynomial in $t$, so the statement is True.
""",
]

EXPL["math-9-24"] = [
    r"""
Every positive power of $q$ vanishes at the origin, so $C(0)$ is the constant term sitting at the end of the rule.

$$C(q)=0.02q^{3}-0.6q^{2}+8q+20$$

$$C(0)=20$$

That leftover $20$ is exactly the claimed height. The tabled total cost at $q=0$ is the same $20$ euros, confirming the constant term of the cubic, so the statement is True.
""",
    r"""
Plug $q=10$ into the cubic and collect the four terms; the claimed height $40$ is then a comparison.

$$C(10)=0.02\cdot 1000-0.6\cdot 100+8\cdot 10+20$$

$$C(10)=20-60+80+20=60$$

The model returns $60$, not $40$. Substituting the claimed $40$ would require the four terms to add to $40$, which they do not. The two numbers disagree, so the statement is False.
""",
    r"""
Average cost per dozen over a run is the rise in total cost divided by the rise in output.

$$C_{\mathrm{table}}(20)=340,\qquad C_{\mathrm{table}}(0)=20$$

$$\frac{340-20}{20}=16$$

That quotient is $16$ euros per dozen from $0$ to $20$, matching the claim for the second workshop. The initial $20$ euros is subtracted before dividing, so the statement is True.
""",
    r"""
Four adjacent $5$-dozen blocks sit in the table; rank them by rise in cost over $5$.

$$10,\quad 14,\quad 18,\quad 22$$

Those averages come from the jumps $50,70,90,110$. The largest is $22$, on $[15,20]$, not on the opening block $[0,5]$.

$$\frac{70-20}{5}=10$$

The first interval is the cheapest of the four, so the statement is False.
""",
    r"""
Scan the written rule for the largest exponent whose coefficient is not zero.

$$C(q)=0.02q^{3}-0.6q^{2}+8q+20$$

The term $0.02q^{3}$ is present with a nonzero coefficient, and no $q^{4}$ appears. Collecting like powers leaves the same top exponent.

$$0.02q^{3}+\cdots+20$$

The highest power of $q$ in $C$ is therefore $q^{3}$, so the statement is True.
""",
]

EXPL["math-9-26"] = [
    r"""
Far to the right the leading term $a_n x^{n}$ dwarfs the rest, and an odd power of a large positive $x$ stays positive.

$$p(x)=a_n x^{n}+\cdots+a_0$$

If $n$ is odd and $a_n>0$, then $a_n x^{n}\to+\infty$ as $x\to+\infty$. Factoring out $x^{n}$ leaves

$$p(x)=x^{n}\left(a_n+\frac{a_{n-1}}{x}+\cdots+\frac{a_0}{x^{n}}\right)$$

The bracket tends to $a_n>0$ while $x^{n}\to+\infty$, so $p(x)\to+\infty$, so the statement is True.
""",
    r"""
An even power stays positive on both sides of the origin, so a positive leading coefficient lifts the left-hand end as well.

$$p(x)=a_n x^{n}+\cdots+a_0$$

When $n$ is even, $x^{n}>0$ for $x\neq 0$, and $a_n>0$ keeps the leading term positive. As $x\to-\infty$,

$$a_n x^{n}\to+\infty$$

The lower terms cannot override that sign, so $p(x)\to+\infty$ rather than $-\infty$ on the far left, so the statement is False.
""",
    r"""
Substituting $x=0$ kills every positive power, leaving only the constant term of the expanded rule.

$$p(0)=a_n\cdot 0^{n}+\cdots+a_0$$

$$p(0)=a_0$$

That leftover $a_0$ is exactly $p(0)$. No further coefficients are needed: every positive power of $x$ is already zero at the origin, which is the definition of the constant term, so the statement is True.
""",
    r"""
The coefficient $a_n$ is declared nonzero, so the term $a_n x^{n}$ survives and no higher power is written.

$$p(x)=a_n x^{n}+\cdots+a_0,\qquad a_n\neq 0$$

The highest surviving exponent is therefore $n$. Dropping a lower coefficient $a_k$ with $k<n$ cannot raise or lower that top power.

$$a_n x^{n}$$

The highest power of $x$ in $p$ is $x^{n}$, so the statement is True.
""",
    r"""
Odd degree controls the two ends of the graph, but oddness of the function is the identity $p(-x)=-p(x)$.

$$p(x)=x^{3}+1$$

This cubic has odd $n=3$ and leading coefficient $1$, yet

$$p(-x)=-x^{3}+1\neq -p(x)$$

The extra constant term already breaks oddness. An odd highest power controls the ends, not the identity $p(-x)=-p(x)$, so the statement is False.
""",
]

EXPL["math-9-27"] = [
    r"""
Composition multiplies the two highest powers: $q$ contributes $x^{3}$ and $p$ contributes $x^{2}$.

$$r(x)=q(p(x))=(x^{2}+1)^{3}-(x^{2}+1)$$

The cube of $x^{2}$ is $x^{6}$, and subtracting $p(x)$ cannot cancel that top term.

$$(x^{2})^{3}=x^{6}$$

No higher power appears, so the highest power of $x$ in $r$ is $x^{6}$, so the statement is True.
""",
    r"""
Send $x=0$ through $p$ first, then through $q$.

$$p(0)=1$$

$$r(0)=q(1)=1^{3}-1=0$$

The nested value is $0$. Expanding gives $r(x)=x^{6}+3x^{4}+2x^{2}$, which has no constant term, so substituting $x=0$ recovers the same height $0$. The composition $q(1)$ is the same computation as $r(0)$ at the origin $x=0$, so the statement is True.
""",
    r"""
A cubic would have highest power $x^{3}$, but the composition already produced $x^{6}$.

$$r(x)=(x^{2}+1)^{3}-(x^{2}+1)=x^{6}+3x^{4}+2x^{2}$$

The $x^{6}$ term has coefficient $1\neq 0$. Calling $r$ cubic would require that term to vanish.

$$x^{6}$$

The nested polynomial is degree six, not three, so calling it cubic fails, so the statement is False.
""",
    r"""
The leading term of $q(p(x))$ is the product of the two leading terms, each of which is $1$.

$$p(x)=x^{2}+\cdots,\qquad q(u)=u^{3}+\cdots$$

$$q(p(x))=(x^{2})^{3}+\cdots=x^{6}+\cdots$$

The coefficient of $x^{6}$ is $1$. Expanding $r(x)=x^{6}+3x^{4}+2x^{2}$ confirms the same leading $1$, not a larger number, so the statement is True.
""",
    r"""
Nesting $q$ after $p$ is not the same operation as multiplying the two formulas.

$$q(p(x))=(x^{2}+1)^{3}-(x^{2}+1)=x^{6}+3x^{4}+2x^{2}$$

$$q(x)p(x)=(x^{3}-x)(x^{2}+1)=x^{5}-x$$

Those two polynomials are different: one begins with $x^{6}$ and the other with $x^{5}$. Composition is not the product of the two rules, so the statement is False.
""",
]

EXPL["math-9-29"] = [
    r"""
Every term of $h$ carries a positive power of $t$, so the height at the opening instant is zero.

$$h(t)=0.002t^{3}-0.09t^{2}+t$$

$$h(0)=0$$

The constant term is missing, which is exactly the claimed height $0$. Factoring $h(t)=t(0.002t^{2}-0.09t+1)$ makes the same vanishing at $t=0$ visible without expanding, so the statement is True.
""",
    r"""
Substitute $t=10$ into the cubic and add the three resulting numbers.

$$h(10)=0.002\cdot 1000-0.09\cdot 100+10$$

$$h(10)=2-9+10=3$$

The height is $3$ m, matching the claim. The same arithmetic in fractions is $2-9+10=3$, and no extra constant sits in the rule to change that sum of metres at $t=10$ minutes, so the statement is True.
""",
    r"""
Instantaneous rate is the derivative; differentiate the cubic and evaluate at $t=10$.

$$h'(t)=0.006t^{2}-0.18t+1$$

$$h'(10)=0.006\cdot 100-0.18\cdot 10+1=0.6-1.8+1=-0.2$$

That value is negative, not positive. The water is falling through at $t=10$ rather than still rising. A positive $h'(10)$ would have required $0.6-1.8+1>0$, so the statement is False.
""",
    r"""
The written rule begins with a nonzero multiple of $t^{3}$, and no higher power appears.

$$h(t)=0.002t^{3}-0.09t^{2}+t$$

The coefficient $0.002$ of $t^{3}$ is not zero. Factoring out $t$ leaves a quadratic whose $t^{2}$ term still produces $t^{3}$ overall.

$$h(t)=t(0.002t^{2}-0.09t+1)$$

The highest power of $t$ in $h$ is $t^{3}$, so the statement is True.
""",
    r"""
Compare the two endpoint heights by evaluating the cubic at $t=30$ and at $t=0$.

$$h(0)=0$$

$$h(30)=0.002\cdot 27000-0.09\cdot 900+30=54-81+30=3$$

The right-hand height is $3$ m, not $0$. The two endpoints disagree: the lock does not return to its starting level at $t=30$ minutes after opening the valve, so the statement is False.
""",
]

EXPL["math-9-33"] = [
    r"""
Replacing $x$ by $-x$ in the even-part formula swaps the two summands and leaves the average unchanged.

$$p_{\mathrm{e}}(-x)=\frac{p(-x)+p(x)}{2}$$

$$p_{\mathrm{e}}(-x)=p_{\mathrm{e}}(x)$$

That identity is the definition of an even function, and it holds for every polynomial $p$. No extra assumption on the coefficients is required, so the statement is True.
""",
    r"""
The odd-part formula changes sign under $x\mapsto -x$, which is exactly the oddness identity.

$$p_{\mathrm{o}}(-x)=\frac{p(-x)-p(x)}{2}=-\frac{p(x)-p(-x)}{2}$$

$$p_{\mathrm{o}}(-x)=-p_{\mathrm{o}}(x)$$

The two sides match for every $p$. An odd part built this way is always an odd function, independently of the coefficients of $p$, so the statement is True.
""",
    r"""
Add the two halves: the $p(-x)$ terms cancel and the $p(x)$ terms double, then the $2$ cancels.

$$p_{\mathrm{e}}(x)+p_{\mathrm{o}}(x)=\frac{p(x)+p(-x)}{2}+\frac{p(x)-p(-x)}{2}$$

$$p_{\mathrm{e}}(x)+p_{\mathrm{o}}(x)=p(x)$$

The reconstruction is an identity, not a special case. Every polynomial is the sum of its even part and its odd part, so the statement is True.
""",
    r"""
A polynomial of only even powers satisfies $p(-x)=p(x)$, so the odd-part numerator vanishes identically.

$$p(-x)=p(x)$$

$$p_{\mathrm{o}}(x)=\frac{p(x)-p(-x)}{2}=0$$

The odd part is the zero polynomial. For a concrete check, $p(x)=x^{2}$ has $p_{\mathrm{o}}=0$, and the same holds for any even-powered $p$, including $x^{4}$, so the statement is True.
""",
    r"""
The even part keeps every even power of $p$, so $x^{2}$ already produces a non-constant even part.

$$p(x)=x^{2}$$

$$p_{\mathrm{e}}(x)=\frac{x^{2}+(-x)^{2}}{2}=x^{2}$$

That even part is quadratic, not a constant. The construction $p_{\mathrm{e}}$ retains all even powers of the original $p$, not merely the constant term, so the statement is False.
""",
]

EXPL["math-9-34"] = [
    r"""
If $p$ begins $a_n x^{n}$ and $q$ begins $b_m x^{m}$, then $q(p(x))$ begins $b_m(a_n x^{n})^{m}$.

$$q(p(x))=b_m a_n^{m} x^{nm}+\cdots$$

The product $a_n^{m}b_m$ is nonzero because both leading coefficients are nonzero. The highest power is therefore $x^{nm}$, not a lower leftover.

$$x^{nm}$$

Composition multiplies the two exponents, so the statement is True.
""",
    r"""
Adding the two exponents would describe a product $p(x)q(x)$, not a composition.

$$p(x)q(x)=a_n b_m x^{n+m}+\cdots$$

$$q(p(x))=b_m a_n^{m} x^{nm}+\cdots$$

Those top powers $x^{n+m}$ and $x^{nm}$ agree only in special cases such as $n=m=2$. In general the composition is not of highest power $x^{n+m}$, so the claim fails, so the statement is False.
""",
    r"""
The same leading-term arithmetic with the roles reversed still multiplies the exponents.

$$p(q(x))=a_n(b_m x^{m})^{n}+\cdots=a_n b_m^{n} x^{mn}+\cdots$$

Since $mn=nm$, the highest power is again $x^{nm}$. A concrete pair $p(x)=x^{2}$, $q(x)=x^{3}$ gives $p(q(x))=x^{6}$.

$$x^{mn}=x^{nm}$$

Both nestings share that top power, so the statement is True.
""",
    r"""
A linear shift composed with a square already fails to commute.

$$p(x)=x+1,\qquad q(x)=x^{2}$$

$$p(q(x))=x^{2}+1,\qquad q(p(x))=(x+1)^{2}=x^{2}+2x+1$$

Those two results differ by the middle term $2x$. Composition of two polynomials, one of them shifted, is not commutative in general, as this pair already shows, so the statement is False.
""",
    r"""
Non-constant $p$ has $n\ge 1$ and the stem already forces $m\ge 1$, so the composition has highest power $x^{nm}$ with $nm\ge 1$.

$$q(p(x))=b_m a_n^{m} x^{nm}+\cdots$$

A non-zero constant would require every positive power to vanish, but $nm\ge 1$ and $b_m a_n^{m}\neq 0$.

$$nm\ge 1$$

The nested polynomial cannot be a non-zero constant, so the statement is True.
""",
]

EXPL["math-9-39"] = [
    r"""
Even degree with a positive leading coefficient sends both ends of the graph upward.

$$p(x)=x^{4}-4x^{2}$$

The leading term is $x^{4}$. As $x\to\pm\infty$, that fourth power tends to $+\infty$ and dominates $-4x^{2}$.

$$p(x)=x^{4}\left(1-\frac{4}{x^{2}}\right)\to+\infty$$

Both ends lift, matching the claim for $x\to\pm\infty$, so the statement is True.
""",
    r"""
The cubic $q$ has leading term $-x^{3}$, which dives on the far right.

$$q(x)=-x^{3}+x$$

$$q(x)=x^{3}\left(-1+\frac{1}{x^{2}}\right)$$

As $x\to+\infty$ the bracket tends to $-1$ while $x^{3}\to+\infty$, so $q(x)\to-\infty$. The graph dives on that side rather than rising toward $+\infty$ as claimed here, so the statement is False.
""",
    r"""
Only even powers appear in $p$, so replacing $x$ by $-x$ changes nothing.

$$p(-x)=(-x)^{4}-4(-x)^{2}=x^{4}-4x^{2}$$

$$p(-x)=p(x)$$

The identity holds for every $x$. A single odd power would have broken evenness; none is present in $x^{4}-4x^{2}$. Evenness is the identity $p(-x)=p(x)$, which holds here identically, so the statement is True.
""",
    r"""
Factor $p$ by pulling out $x^{2}$, then factor the remaining difference of squares.

$$p(x)=x^{2}(x^{2}-4)=x^{2}(x-2)(x+2)$$

The distinct real roots are $x=0$, $x=2$ and $x=-2$. Multiplicity two at the origin does not add a new root.

$$p(0)=p(2)=p(-2)=0$$

Those three numbers are exactly the listed roots, counting $0$ once even though it is a double root, so the statement is True.
""",
    r"""
Compare the two leading terms: $x^{4}$ against $-x^{3}$.

$$p(x)=x^{4}-4x^{2},\qquad q(x)=-x^{3}+x$$

The highest power of $p$ is $x^{4}$ and the highest power of $q$ is $x^{3}$. Those exponents are different.

$$4\neq 3$$

The two polynomials do not share a highest power of $x$: one is quartic and the other is cubic, so the statement is False.
""",
]

EXPL["math-9-41"] = [
    r"""
Meetings are roots of $p-q$. Because $n>m$ the difference still has highest power $x^{n}$, hence at most $n$ roots unless it is identically zero.

$$p(x)-q(x)=a_n x^{n}+\cdots$$

A nonzero polynomial of highest power $x^{n}$ has at most $n$ distinct real roots. The zero polynomial is the case $p=q$.

$$p-q\equiv 0\iff p=q$$

So the graphs meet in at most $n$ points unless they coincide, so the statement is True.
""",
    r"""
A nonzero polynomial of highest power $x^{n}$ cannot have $n+1$ distinct roots.

$$p-q=a_n x^{n}+\cdots,\qquad a_n\neq 0$$

If $p\neq q$, then $p-q$ has at most $n$ zeros. Listing $n+1$ distinct meetings would force $p-q$ to vanish identically, hence $p=q$.

$$n+1>n$$

The extra meeting is impossible without coincidence, so the statement is False.
""",
    r"""
The zero polynomial has no highest power at all; a surviving $x^{n}$ term means $p-q$ is not identically zero.

$$p-q=c_n x^{n}+\cdots,\qquad c_n\neq 0$$

Two graphs coincide precisely when their difference is the zero polynomial. A nonzero leading term forbids that.

$$c_n\neq 0$$

The graphs therefore cannot be the same, so the statement is True.
""",
    r"""
Replacing $q$ by $q+c$ leaves $p-(q+c)$ still of highest power $x^{n}$, so the meeting bound does not rise.

$$p(x)-(q(x)+c)=a_n x^{n}+\cdots$$

A vertical shift changes only the constant term of the difference. The top power $x^{n}$ survives, and at most $n$ roots remain.

$$p-(q+c)\not\equiv 0$$

Translating $q$ cannot create more than $n$ meetings, so the statement is False.
""",
    r"""
Unequal leading coefficients stop the $x^{n}$ terms from cancelling, so $p-q$ still has highest power $x^{n}$.

$$p(x)-q(x)=(a_n-b_n)x^{n}+\cdots,\qquad a_n\neq b_n$$

The coefficient $a_n-b_n$ is nonzero, so the difference is not of lower order. At most $n$ distinct roots remain.

$$a_n-b_n\neq 0$$

The meeting bound is still $n$, so the statement is True.
""",
]

EXPL["math-9-44"] = [
    r"""
Palindromic coefficients mean $x^{n}p(1/x)=p(x)$ for $x\neq 0$, so a nonzero root is closed under taking reciprocals.

$$x^{n}p(1/x)=p(x)$$

If $p(r)=0$ and $r\neq 0$, then $r^{n}p(1/r)=0$, hence $p(1/r)=0$.

$$p(1/r)=0$$

The reciprocal of a nonzero root is again a root. A root at $0$ is excluded by the hypothesis $r\neq 0$, so the statement is True.
""",
    r"""
The value $p(0)$ is the constant term $a_0$, and palindromy forces $a_0=a_n$, which is declared nonzero.

$$p(0)=a_0=a_n$$

$$a_n\neq 0$$

If $p(0)$ vanished then $a_n$ would vanish, contradicting the stem. The constant term cannot be zero for a palindromic polynomial with $a_n\neq 0$, because $a_0=a_n$ identically, so the statement is True.
""",
    r"""
Evenness needs $p(-x)=p(x)$, which palindromy does not force: a palindromic quadratic with a linear term is already a counter-example.

$$p(x)=x^{2}+x+1$$

The coefficients $1,1,1$ read the same forwards and backwards, yet

$$p(-x)=x^{2}-x+1\neq p(x)$$

Palindromy is not evenness: the linear term $x$ already fails the test $p(-x)=p(x)$, so the statement is False.
""",
    r"""
Odd $n$ gives an even number of coefficients, palindromically paired, and $p(1)$ is their sum.

$$p(1)=a_n+\cdots+a_0=2(a_0+a_1+\cdots+a_{(n-1)/2})$$

Each $a_k$ equals $a_{n-k}$ with $k\neq n-k$ because $n$ is odd, so there is no unpaired middle term.

$$n=3:\quad p(x)=x^{3}+2x^{2}+2x+1\implies p(1)=6=2(1+2)$$

Twice the first-half sum recovers $p(1)$, so the statement is True.
""",
    r"""
The coefficients of $x^{2}+1$ are $1$, $0$, $1$, which read the same forwards and backwards.

$$x^{2}+1=1\cdot x^{2}+0\cdot x+1$$

Check $a_k=a_{2-k}$: $a_0=a_2=1$ and $a_1=a_1=0$. The leading coefficient $1$ is nonzero.

$$1,\;0,\;1$$

That list is palindromic, so $x^{2}+1$ is an example of the stem's coefficient condition, so the statement is True.
""",
]

EXPL["math-9-45"] = [
    r"""
Write $p(x)=x^{n}+\cdots+a_0$. If $p(k)=0$ for an integer $k$, rearrange to show $k$ divides $a_0$.

$$k^{n}+a_{n-1}k^{n-1}+\cdots+a_1 k+a_0=0$$

$$a_0=-k(k^{n-1}+\cdots+a_1)$$

The parenthesis is an integer because every coefficient is an integer. Thus $k$ divides $p(0)=a_0$. The same argument works for a negative integer root, so the statement is True.
""",
    r"""
The integer-root test lists only the divisors of the constant term as candidates.

$$p(0)=6$$

Any integer root must divide $6$, so it lies in $\{\pm 1,\pm 2,\pm 3,\pm 6\}$. No other integer can be a root.

$$\pm 1,\pm 2,\pm 3,\pm 6$$

Those are precisely the divisors of $6$, including the negative ones required by the integer-root test, so the statement is True.
""",
    r"""
A single counter-example kills a universal claim: $x^{2}+1$ never vanishes at an integer.

$$p(x)=x^{2}+1$$

This polynomial is monic with integer coefficients, yet $p(n)=n^{2}+1\ge 1$ for every integer $n$.

$$p(0)=1\neq 0$$

No integer root exists, so not every monic integer polynomial has one. The claim is universal and this cubic-free quadratic already kills it, so the statement is False.
""",
    r"""
Dividing a monic integer polynomial by the monic linear factor $x-a$ keeps integer coefficients.

$$p(x)=(x-a)q(x)$$

Synthetic division of a monic integer polynomial by $x-a$ produces a monic $q$ with integer coefficients: each running total stays integral.

$$q(x)\in\mathbb{Z}[x]$$

Thus $x-a$ is a factor in the integer-coefficient polynomials, so the statement is True.
""",
    r"""
Evaluate the named cubic at $x=-1$; the value is not zero.

$$p(x)=x^{3}+x+1$$

$$p(-1)=-1-1+1=-1$$

A root would require $p(-1)=0$. The leftover $-1$ shows $x+1$ is not a factor. Among the candidates $\pm 1$, neither works: $p(1)=3\neq 0$ either, so $-1$ is not a root of this cubic polynomial at all, as claimed, so the statement is False.
""",
]

EXPL["math-9-46"] = [
    r"""
Acceleration is $v_b'$, and a minimum of acceleration occurs where $a'=0$ with $a''>0$.

$$a(t)=0.00006t^{2}-2bt+0.4$$

$$a'(t)=0.00012t-2b$$

Setting $a'(t)=0$ isolates $t=\dfrac{2b}{0.00012}$. The second derivative $a''=0.00012>0$ confirms a minimum rather than a maximum of acceleration, matching the claim, so the statement is True.
""",
    r"""
Substitute the given $b$ into the critical-time formula and compare with $75$.

$$b=0.005$$

$$t=\frac{2\cdot 0.005}{0.00012}=\frac{0.01}{0.00012}=\frac{250}{3}\approx 83.3$$

That instant is after $t=75$, not before. The claimed inequality $t<75$ fails: $\frac{250}{3}>75$, so the minimum occurs later than $75$, so the statement is False.
""",
    r"""
The critical time is proportional to $b$, so increasing $b$ slides the minimum later.

$$t=\frac{2b}{0.00012}$$

The factor $\dfrac{2}{0.00012}$ is a positive constant. Differentiating with respect to $b$ gives

$$\frac{dt}{db}=\frac{2}{0.00012}>0$$

Larger $b$ therefore moves the moment of minimal acceleration to the right, so the statement is True.
""",
    r"""
The coefficient of $t^{3}$ is $0.00002$, independent of $b$ and nonzero.

$$v_b(t)=0.00002t^{3}-bt^{2}+0.4t$$

For every $b>0$ the $t^{3}$ term survives. No higher power is present, and $b$ only affects the quadratic term.

$$0.00002\neq 0$$

The speed is a cubic polynomial in $t$ for every such $b$, since the $t^{3}$ coefficient never vanishes, so the statement is True.
""",
    r"""
Evaluate the acceleration at $t=0$: the $b$-term is multiplied by $t$ and vanishes.

$$a(t)=0.00006t^{2}-2bt+0.4$$

$$a(0)=0.4$$

That value is positive for every $b>0$. The sign of $a(0)$ does not depend on $b$: the parameter $b$ multiplies $t$ and is absent at the origin, leaving $0.4>0$ always, independently of $b$, so the statement is False.
""",
]

EXPL["math-9-47"] = [
    r"""
Substitute $t=10$ into the cubic output model and compare the result with $90$.

$$Q(t)=-\frac{1}{50}t^{3}+t^{2}+2t$$

$$Q(10)=-\frac{1000}{50}+100+20=-20+100+20=100$$

The model returns $100$ units, not $90$. The two numbers disagree: claiming $90$ undercounts the cubic by $10$ units at $t=10$, so $Q(10)\neq 90$, so the statement is False.
""",
    r"""
Whole-run average rate is the last tabled total divided by the $40$ h span.

$$Q_{\mathrm{table}}(40)=640$$

$$\frac{640}{40}=16$$

That quotient is $16$ units per hour. The second line's average output over the full run matches the claim, because $640$ units in $40$ h is exactly $16$ per hour, as required here, so the statement is True.
""",
    r"""
Five successive $8$-hour blocks have interval rates equal to the jumps in cumulative output divided by $8$.

$$10,\quad 15,\quad 20,\quad 20,\quad 15$$

Those rates come from the jumps $80,120,160,160,120$. The largest value is $20$, on $[16,24]$ and on $[24,32]$, not on $[0,8]$.

$$\frac{80}{8}=10$$

The opening block is the slowest of the five, so the statement is False.
""",
    r"""
Differentiate the cubic and read the constant term of $Q'$, which is $Q'(0)$.

$$Q'(t)=-\frac{3}{50}t^{2}+2t+2$$

$$Q'(0)=2$$

The linear term $2t$ in $Q$ differentiates to the constant $2$. That matches the claimed instantaneous rate at the start of the run, before any quadratic or cubic contribution appears, so the statement is True.
""",
    r"""
The model carries a nonzero multiple of $t^{3}$ and no higher power.

$$Q(t)=-\frac{1}{50}t^{3}+t^{2}+2t$$

The coefficient $-\frac{1}{50}$ of $t^{3}$ is not zero. Factoring out $t$ does not cancel that cubic term.

$$Q(t)=\frac{t(-t^{2}+50t+100)}{50}$$

The output model is a cubic polynomial in $t$, with a surviving $t^{3}$ term of coefficient $-\frac{1}{50}$, so the statement is True.
""",
]

EXPL["math-9-50"] = [
    r"""
Factor the unshifted cubic and count distinct real zeros.

$$p(x)=x^{3}-x=x(x-1)(x+1)$$

The three factors vanish at $x=0$, $x=1$ and $x=-1$. For $c=0$ one has $q=p$, so those three axis meetings remain.

$$p(0)=p(1)=p(-1)=0$$

The graph meets the $x$-axis three times when $c=0$, once at each of those three roots, so the statement is True.
""",
    r"""
A vertical shift does not change the derivative, so the stationary $x$-values stay put.

$$q(x)=p(x)+c=x^{3}-x+c$$

$$q'(x)=3x^{2}-1=p'(x)$$

The equation $q'(x)=0$ is $x=\pm\frac{1}{\sqrt{3}}$, independent of $c$. Turning abscissas do not move with the vertical shift $c$; only the turning heights move with $c$, so the statement is False.
""",
    r"""
The local max and min of $p$ sit at heights $\pm\frac{2}{3\sqrt{3}}$; shifting past those heights leaves a single real root.

$$p\left(\pm\frac{1}{\sqrt{3}}\right)=\mp\frac{2}{3\sqrt{3}}$$

For $c>\frac{2}{3\sqrt{3}}$ the whole graph of $q$ lies above the axis except for one crossing on the far left. A cubic always has at least one real root, and the other two become complex.

$$c=1\implies q(x)=x^{3}-x+1$$

That shifted cubic has only one real root, so the statement is True.
""",
    r"""
Directly compare $p(-x)$ with $-p(x)$.

$$p(-x)=-x^{3}+x$$

$$-p(x)=-x^{3}+x$$

The two sides are identical. Every power in $p$ is odd, which is the expanded form of the oddness test. The identity $p(-x)=-p(x)$ holds for every real $x$, and the graph is symmetric through the origin, matching oddness of $p$ itself, so the statement is True.
""",
    r"""
Adding a nonzero constant breaks oddness: $q(-x)=-p(x)+c$ while $-q(x)=-p(x)-c$.

$$q(-x)=-x^{3}+x+c$$

$$-q(x)=-x^{3}+x-c$$

Those agree for every $x$ if and only if $c=0$. A raised copy is odd only in that special case; any nonzero $c$ produces $q(-x)\neq -q(x)$, so $q$ is not odd for every $c$, as claimed, so the statement is False.
""",
]

EXPL["math-9-56"] = [
    r"""
Each term of the height rule has a positive power of $t$, so the sluice starts at height zero.

$$h(t)=\frac{1}{500}t^{3}-\frac{9}{100}t^{2}+t$$

$$h(0)=0$$

There is no constant term. The claimed opening height $0$ is exactly $h(0)$. Factoring $h(t)=t\bigl(\frac{1}{500}t^{2}-\frac{9}{100}t+1\bigr)$ shows the same vanishing, so the statement is True.
""",
    r"""
Insert $t=10$ into the three-term rule and simplify the arithmetic.

$$h(10)=\frac{1000}{500}-\frac{9}{100}\cdot 100+10$$

$$h(10)=2-9+10=3$$

The height is $3$ m, matching the claim. The same evaluation in decimals is $0.002\cdot 1000-0.09\cdot 100+10=3$, confirming the fractional arithmetic at $t=10$ minutes, so the statement is True.
""",
    r"""
Differentiate the cubic height and evaluate the quadratic rate at $t=10$.

$$h'(t)=\frac{3}{500}t^{2}-\frac{18}{100}t+1$$

$$h'(10)=\frac{300}{500}-\frac{180}{100}+1=0.6-1.8+1=-0.2$$

That value is negative. The instantaneous rate at $t=10$ is therefore negative, not zero and not positive, matching the claim, so the statement is True.
""",
    r"""
The coefficient $\frac{1}{500}$ of $t^{3}$ is not zero, and no $t^{4}$ or higher is present.

$$h(t)=\frac{1}{500}t^{3}-\frac{9}{100}t^{2}+t$$

The written leading term is a nonzero multiple of $t^{3}$. Rewriting as $0.002t^{3}-0.09t^{2}+t$ does not cancel that cubic.

$$\frac{1}{500}\neq 0$$

The highest power of $t$ in $h$ is $t^{3}$, so the statement is True.
""",
    r"""
Compute the height at the right endpoint $t=30$ and compare it with the opening height $0$.

$$h(0)=0$$

$$h(30)=\frac{27000}{500}-\frac{9}{100}\cdot 900+30=54-81+30=3$$

The two heights are $3$ and $0$, which are not equal. The sluice does not return to its starting level at $t=30$ minutes after opening the gate, so the statement is False.
""",
]


def _body(block: str) -> str:
    return block.strip()


def main() -> None:
    payload = json.loads(DATA.read_text())
    tasks = payload["tasks"]
    by_id = {t["id"]: t for t in tasks}

    missing = [tid for tid in TARGET_IDS if tid not in EXPL]
    if missing:
        raise SystemExit(f"no explanations authored for: {missing}")
    extra = [tid for tid in EXPL if tid not in TARGET_IDS]
    if extra:
        raise SystemExit(f"unexpected EXPL ids: {extra}")

    for tid in TARGET_IDS:
        task = by_id[tid]
        bodies = [_body(block) for block in EXPL[tid]]
        if len(bodies) != len(task["statements"]):
            raise SystemExit(
                f"{tid}: expected {len(task['statements'])} explanations, got {len(bodies)}"
            )
        for (fix_id, index), value in KEY_FIXES.items():
            if fix_id == tid:
                task["answer_key"][index] = value
        task["tactical_explanations"] = [
            f"**{LETTERS[i]}.** \u2192 {'True' if key else 'False'}\n\n{body}"
            for i, (key, body) in enumerate(zip(task["answer_key"], bodies))
        ]

    problems: list[str] = []
    lengths: list[int] = []
    for tid in TARGET_IDS:
        task = by_id[tid]
        for i, (key, text) in enumerate(zip(task["answer_key"], task["tactical_explanations"])):
            label = f"{tid}.{LETTERS[i]}"
            n = len(text)
            lengths.append(n)
            verdict = "True" if key else "False"
            if not text.startswith(f"**{LETTERS[i]}.** \u2192 {verdict}"):
                problems.append(f"{label}: header does not match key ({verdict})")
            if not text.endswith(f", so the statement is {verdict}."):
                problems.append(f"{label}: closing line missing or wrong verdict")
            if n < 350 or n > 700:
                problems.append(f"{label}: length {n} outside 350-700")
            for pattern in BANNED:
                if re.search(pattern, text):
                    problems.append(f"{label}: banned phrase {pattern!r}")
            displays = re.findall(r"\$\$(.+?)\$\$", text, flags=re.S)
            if not displays:
                problems.append(f"{label}: no display formulae")
            if any("\n" in d for d in displays):
                problems.append(f"{label}: newline inside a display")
            if any(not d.strip() for d in displays):
                problems.append(f"{label}: empty display")
            if len(displays) != len(set(displays)):
                problems.append(f"{label}: duplicate display {displays!r}")
            openings = re.findall(r"\u2192 (?:True|False)\n\n(.+)", text)
            if not openings:
                problems.append(f"{label}: no narrative opener after the header")
            else:
                opener = openings[0]
                for prefix in FORBIDDEN_OPENER_PREFIXES:
                    if opener.startswith(prefix):
                        problems.append(f"{label}: forbidden opener {prefix!r}")

        first_lines = [
            re.split(r"\n\n", text, maxsplit=2)[1] for text in task["tactical_explanations"]
        ]
        if len(set(first_lines)) < 4:
            problems.append(f"{tid}: repeated openers across letters")
        display_seqs = [
            tuple(re.findall(r"\$\$(.+?)\$\$", text, flags=re.S))
            for text in task["tactical_explanations"]
        ]
        if len(set(display_seqs)) < 4:
            problems.append(f"{tid}: repeated display sequences across letters")

    if problems:
        raise SystemExit("validation failed:\n" + "\n".join(problems))

    DATA.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")

    print(f"tasks rewritten: {len(TARGET_IDS)}")
    print(f"explanations rewritten: {len(lengths)}")
    print(f"median explanation length: {int(statistics.median(lengths))} characters")
    print(f"shortest / longest: {min(lengths)} / {max(lengths)}")
    print(f"answer-key corrections applied: {len(KEY_FIXES)}")
    print("KEY_FIXES:")
    for (tid, idx), val in KEY_FIXES.items():
        print(f"  {tid} {LETTERS[idx]} -> {val}")


if __name__ == "__main__":
    main()






