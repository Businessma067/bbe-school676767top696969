from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="Stacked exponents versus a plain product",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Stacked powers $(x^{-2})^{-3}$ for $x\neq 0$ are recorded as $x^{-5}$, the same exponent as the product $x^{-2}x^{-3}$.",
                False,
                r"""Power of a power multiplies exponents:
$$(x^{-2})^{-3}=x^{(-2)\cdot(-3)}=x^{6}.$$
The exponent $-5$ is $-2+(-3)$, which belongs to the product $x^{-2}x^{-3}$, not to the stacked power.""",
            ),
            (
                r"Multiplying $w^{5}w^{-2}$ whenever $w\neq 0$ is claimed to leave $w^{3}$.",
                True,
                r"""The product rule adds exponents:
$$w^{5}w^{-2}=w^{5+(-2)}=w^{3}$$
on $w\neq 0$.""",
            ),
            (
                r"On $t>0$, raising $(t^{2})^{3}$ is entered as $t^{5}$.",
                False,
                r"""Stacked exponents multiply:
$$(t^{2})^{3}=t^{6}.$$
Adding $2+3$ produces the false exponent $5$, which would describe the product $t^{2}t^{3}$.""",
            ),
            (
                r"Whenever $a\neq 0$, treating $a^{-4}a^{4}$ as $1$ is accepted as an identity.",
                True,
                r"""Add the exponents:
$$a^{-4}a^{4}=a^{0}=1$$
for $a\neq 0$.""",
            ),
            (
                r"A candidate records $(b^{-1})^{2}=b^{-3}$ for every $b\neq 0$.",
                False,
                r"""Multiply, do not add:
$$(b^{-1})^{2}=b^{-2}=\frac{1}{b^{2}}.$$
The exponent $-3$ is $-1+(-2)$, mixing a stacked power with a product.""",
            ),
        ],
        overview=r"Five independent exponent claims. Stacked powers multiply; products add. $(x^{-2})^{-3}=x^{6}$, while $x^{-2}x^{-3}=x^{-5}$.",
    ),
    task(
        title="Reciprocals hiding in a denominator",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Clearing $p^{3}/p^{-2}$ for $p\neq 0$ is recorded as $p^{5}$.",
                True,
                r"""A quotient subtracts exponents, and subtracting a minus adds:
$$\frac{p^{3}}{p^{-2}}=p^{3-(-2)}=p^{5}$$
on $p\neq 0$.""",
            ),
            (
                r"Working with $q\neq 0$, a slip writes $q^{-3}=-q^{3}$.",
                False,
                r"""A negative exponent is a reciprocal, not a change of sign:
$$q^{-3}=\frac{1}{q^{3}}.$$
For $q=2$ one has $2^{-3}=1/8$, whereas $-2^{3}=-8$.""",
            ),
            (
                r"Provided $r\neq 0$, inverting $1/r^{-4}$ is claimed to recover $r^{4}$.",
                True,
                r"""By definition $r^{-4}=1/r^{4}$, so
$$\frac{1}{r^{-4}}=r^{4}$$
on $r\neq 0$.""",
            ),
            (
                r"Someone records $s^{6}/s^{-1}$ as $s^{5}$ whenever $s\neq 0$, forgetting to flip the minus in the denominator.",
                False,
                r"""Subtracting the denominator's exponent gives
$$\frac{s^{6}}{s^{-1}}=s^{6-(-1)}=s^{7},$$
not $s^{5}$. Leaving the minus unflipped is the usual bookkeeping error.""",
            ),
            (
                r"For every $u\neq 0$, rewriting $u^{-1}=1/u$ is accepted.",
                True,
                r"""This is the definition of a negative exponent with $n=1$:
$$u^{-1}=\frac{1}{u}$$
on $u\neq 0$.""",
            ),
        ],
        overview=r"Five independent reciprocal-power checks. A minus in a denominator flips when the quotient is written as a product; a negative exponent is not a minus sign.",
    ),
    task(
        title="Products of roots versus roots of sums",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Whenever $a,b>0$, treating $\sqrt{a}+\sqrt{b}$ as $\sqrt{a+b}$ is accepted as an identity.",
                False,
                r"""Square roots do not split over addition. Squaring the sum produces
$$(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab},$$
not $a+b$. For $a=b=1$ one has $\sqrt{2}\neq 2$.""",
            ),
            (
                r"Taking nonnegative letters, the product $\sqrt{12}\sqrt{3}$ is rewritten as $6$.",
                True,
                r"""On the nonnegative reals a product of square roots is the square root of the product:
$$\sqrt{12}\sqrt{3}=\sqrt{36}=6.$$""",
            ),
            (
                r"On $c,d\ge 0$, the product rule $\sqrt{c}\sqrt{d}=\sqrt{cd}$ is printed as valid.",
                True,
                r"""Write each root as a half-power:
$$c^{1/2}d^{1/2}=(cd)^{1/2}=\sqrt{cd}$$
for $c,d\ge 0$.""",
            ),
            (
                r"Combining radicands, $\sqrt{18}+\sqrt{32}$ is claimed to equal $\sqrt{50}$.",
                False,
                r"""Extract squares first:
$$\sqrt{18}=3\sqrt{2},\qquad \sqrt{32}=4\sqrt{2},\qquad \sqrt{50}=5\sqrt{2}.$$
The sum is $7\sqrt{2}$, not $5\sqrt{2}$. Roots do not add inside a single radicand.""",
            ),
            (
                r"A booklet claims $\sqrt{27}\sqrt{3}=9$ as positive square roots.",
                True,
                r"""The product rule gives
$$\sqrt{27}\sqrt{3}=\sqrt{81}=9.$$""",
            ),
        ],
        overview=r"Five independent surd claims. Products of square roots may pass inside one radicand; sums may not. $\sqrt{12}\sqrt{3}=6$, but $\sqrt{18}+\sqrt{32}\neq\sqrt{50}$.",
    ),
    task(
        title="A zero power is not a zero value",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"For every $a\neq 0$, the rule $a^{0}=1$ is treated as valid.",
                True,
                r"""For $a\neq 0$ one has $a^{n}/a^{n}=a^{0}$ and $a^{n}/a^{n}=1$, so
$$a^{0}=1.$$""",
            ),
            (
                r"A booklet treats $0^{-3}$ as a defined real number.",
                False,
                r"""By definition $0^{-3}=1/0^{3}$, and division by zero is undefined. Negative exponents require a nonzero base.""",
            ),
            (
                r"Cancelling inverse cubes, $x^{3}x^{-3}=1$ for $x\neq 0$ is accepted.",
                True,
                r"""Add the exponents:
$$x^{3}x^{-3}=x^{0}=1$$
on $x\neq 0$.""",
            ),
            (
                r"Treating $b^{0}=0$ for every $b\neq 0$ is offered as an identity.",
                False,
                r"""The zero exponent produces $1$, not $0$. For instance $2^{0}=1$. A zero exponent is not a zero value.""",
            ),
            (
                r"On $c,d\neq 0$, the product $(cd)^{0}$ is rewritten as $1$.",
                True,
                r"""A nonzero product still has zero exponent $1$:
$$(cd)^{0}=1=c^{0}d^{0}$$
on $c,d\neq 0$.""",
            ),
        ],
        overview=r"Five independent zero-exponent claims. On a nonzero base, $a^{0}=1$ and inverse powers cancel to $1$. Negative powers of $0$ are undefined.",
    ),
    task(
        title="Integer values of short fractional powers",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Reducing $27^{2/3}$ to the integer $9$ is treated as correct.",
                True,
                r"""Write $27=3^{3}$ and multiply the exponents:
$$27^{2/3}=(3^{3})^{2/3}=3^{2}=9.$$""",
            ),
            (
                r"Rewriting $32^{2/5}$ as $8$ is entered on a mark scheme.",
                False,
                r"""Write $32=2^{5}$:
$$32^{2/5}=(2^{5})^{2/5}=2^{2}=4,$$
not $8$. The figure $8$ would be $2^{3}=32^{3/5}$.""",
            ),
            (
                r"Evaluating $8^{2/3}\cdot 4^{-1/2}$ as the integer $4$ is entered on a mark scheme.",
                False,
                r"""Rewrite both bases as powers of $2$:
$$8^{2/3}=(2^{3})^{2/3}=2^{2}=4,\qquad 4^{-1/2}=(2^{2})^{-1/2}=2^{-1}=\frac{1}{2}.$$
The product is $4\cdot\frac{1}{2}=2$, not $4$. The factor $4^{-1/2}$ was dropped.""",
            ),
            (
                r"Extracting $\sqrt[3]{54}$ as $3\sqrt[3]{2}$ is claimed in the reals.",
                True,
                r"""Factor a cube: $54=27\cdot 2$ and $\sqrt[3]{27}=3$, so
$$\sqrt[3]{54}=3\sqrt[3]{2}.$$""",
            ),
            (
                r"Simplifying $\sqrt{48}$ to $6\sqrt{2}$ as a positive square root is accepted.",
                False,
                r"""The largest square factor of $48$ is $16$:
$$\sqrt{48}=\sqrt{16\cdot 3}=4\sqrt{3},$$
not $6\sqrt{2}$. The coefficient $6$ would belong to $\sqrt{72}$.""",
            ),
        ],
        overview=r"Five independent numerical powers. $27^{2/3}=9$ and $\sqrt[3]{54}=3\sqrt[3]{2}$, but $32^{2/5}=4$ and $8^{2/3}\cdot 4^{-1/2}=2$.",
    ),
    task(
        title="Like surds collected after extracting squares",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Combining $\sqrt{50}-\sqrt{18}$ as positive square roots is recorded as $2\sqrt{2}$.",
                True,
                r"""Extract the square factors:
$$\sqrt{50}=5\sqrt{2},\qquad \sqrt{18}=3\sqrt{2}.$$
The difference is $5\sqrt{2}-3\sqrt{2}=2\sqrt{2}$.""",
            ),
            (
                r"Reducing $\sqrt{12}+\sqrt{27}$ is claimed to equal $\sqrt{39}$.",
                False,
                r"""Pull out squares: $\sqrt{12}=2\sqrt{3}$ and $\sqrt{27}=3\sqrt{3}$, so the sum is $5\sqrt{3}$. Roots do not add inside the radicand; $12+27=39$ is a distractor.""",
            ),
            (
                r"Extracting $\sqrt{32}=4\sqrt{2}$ as a positive square root is accepted.",
                True,
                r"""$32=16\cdot 2$ and $\sqrt{16}=4$, hence
$$\sqrt{32}=4\sqrt{2}.$$""",
            ),
            (
                r"A note writes $\sqrt{45}-\sqrt{20}=\sqrt{25}$ as positive roots.",
                False,
                r"""Reduce first: $\sqrt{45}=3\sqrt{5}$ and $\sqrt{20}=2\sqrt{5}$, so the difference is $\sqrt{5}$, not $5=\sqrt{25}$. Subtracting radicands is illegal.""",
            ),
            (
                r"Taking positive roots, $\sqrt{8}+\sqrt{18}$ is rewritten as $5\sqrt{2}$.",
                True,
                r"""$\sqrt{8}=2\sqrt{2}$ and $\sqrt{18}=3\sqrt{2}$, so
$$2\sqrt{2}+3\sqrt{2}=5\sqrt{2}.$$""",
            ),
        ],
        overview=r"Five independent like-surd reductions. Extract the largest square, then add coefficients. $\sqrt{50}-\sqrt{18}=2\sqrt{2}$; $\sqrt{12}+\sqrt{27}$ is $5\sqrt{3}$, not $\sqrt{39}$.",
    ),
    task(
        title="A negative exponent swapping a quotient",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Raising the quotient $(x/y)^{-2}$ for $x,y>0$ is recorded as $(y/x)^{2}$.",
                True,
                r"""A negative exponent inverts the base:
$$\Bigl(\frac{x}{y}\Bigr)^{-2}=\Bigl(\frac{y}{x}\Bigr)^{2}$$
on $x,y>0$.""",
            ),
            (
                r"A mistaken swap writes $(p/q)^{-3}=p^{3}/q^{3}$ for $p,q>0$.",
                False,
                r"""The minus on the exponent swaps numerator and denominator:
$$\Bigl(\frac{p}{q}\Bigr)^{-3}=\Bigl(\frac{q}{p}\Bigr)^{3}=\frac{q^{3}}{p^{3}}.$$
The claimed $p^{3}/q^{3}$ is $(p/q)^{3}$, missing the minus.""",
            ),
            (
                r"Whenever $u,v>0$, treating $(u/v)^{4}=u^{4}/v^{4}$ is accepted.",
                True,
                r"""A power of a quotient splits:
$$\Bigl(\frac{u}{v}\Bigr)^{4}=\frac{u^{4}}{v^{4}}$$
on $u,v>0$.""",
            ),
            (
                r"Inverting first, $(a^{-1}/b^{-1})^{2}$ is claimed to equal $a^{2}/b^{2}$ for $a,b\neq 0$.",
                False,
                r"""The inner quotient is $a^{-1}/b^{-1}=b/a$, so the square is
$$\Bigl(\frac{b}{a}\Bigr)^{2}=\frac{b^{2}}{a^{2}},$$
the reciprocal of the claimed form.""",
            ),
            (
                r"On $c,d>0$, rewriting $(c/d)^{0}=0$ is printed as valid.",
                False,
                r"""A zero exponent on a nonzero base produces $1$:
$$\Bigl(\frac{c}{d}\Bigr)^{0}=1$$
for $c,d>0$. The value $0$ would require a zero base, not a zero exponent.""",
            ),
        ],
        overview=r"Five independent quotient-power claims. A negative exponent swaps the fraction; $(x/y)^{-2}=(y/x)^{2}$, which is not $x^{2}/y^{2}$. A zero exponent is $1$.",
    ),
    task(
        title="Cube roots split over products only",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"The cube-root product $\sqrt[3]{2}\sqrt[3]{4}$ is rewritten as $2$ in the reals.",
                True,
                r"""Cube roots split over a product:
$$\sqrt[3]{2}\sqrt[3]{4}=\sqrt[3]{8}=2.$$""",
            ),
            (
                r"Splitting a sum, $\sqrt[3]{27}+\sqrt[3]{1}$ is claimed to equal $\sqrt[3]{28}$.",
                False,
                r"""Cube roots do not pass through a sum. The left-hand side is $3+1=4$, while $\sqrt[3]{28}$ is not an integer. In general $\sqrt[3]{a}+\sqrt[3]{b}\neq\sqrt[3]{a+b}$.""",
            ),
            (
                r"Extracting $\sqrt[3]{54}=3\sqrt[3]{2}$ in the reals is accepted.",
                True,
                r"""$54=27\cdot 2$ and $\sqrt[3]{27}=3$, so
$$\sqrt[3]{54}=3\sqrt[3]{2}.$$""",
            ),
            (
                r"A student writes $\sqrt[3]{24}=8\sqrt[3]{3}$ in the reals.",
                False,
                r"""$24=8\cdot 3$ and $\sqrt[3]{8}=2$, so
$$\sqrt[3]{24}=2\sqrt[3]{3},$$
not $8\sqrt[3]{3}$. The $8$ is the factor inside the radicand, not the coefficient.""",
            ),
            (
                r"Factoring $\sqrt[3]{32}$ as $4\sqrt[3]{2}$ is recorded as valid.",
                False,
                r"""$32=8\cdot 4$ and $\sqrt[3]{8}=2$, so $\sqrt[3]{32}=2\sqrt[3]{4}$. The coefficient $4$ would be $\sqrt[3]{64}$. Alternatively $4\sqrt[3]{2}=\sqrt[3]{128}\neq\sqrt[3]{32}$.""",
            ),
        ],
        overview=r"Five independent cube-root lines. Products split; sums do not. $\sqrt[3]{2}\sqrt[3]{4}=2$ and $\sqrt[3]{54}=3\sqrt[3]{2}$, while $\sqrt[3]{24}=2\sqrt[3]{3}$.",
    ),
    task(
        title="Several fractional exponents on one letter",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"After combining exponents on $x>0$, $\bigl(x^{-2}x^{5/2}/x^{-1/2}\bigr)^{2}$ is recorded as $x^{2}$.",
                True,
                r"""Division by $x^{-1/2}$ multiplies by $x^{1/2}$. The inner exponent is
$$-2+\frac{5}{2}+\frac{1}{2}=1,$$
so the inner monomial is $x$. The outer square produces $x^{2}$.""",
            ),
            (
                r"Clearing $y^{3/2}/y^{-3/2}$ for $y>0$ is claimed to leave $y^{0}$.",
                False,
                r"""Subtract exponents:
$$\frac{y^{3/2}}{y^{-3/2}}=y^{3/2-(-3/2)}=y^{3},$$
not $y^{0}$. Cancelling the matching $3/2$ while dropping both minus signs is the slip.""",
            ),
            (
                r"Working with $z>0$, the stack $(z^{1/3})^{-3/2}$ is rewritten as $z^{-1/2}$.",
                True,
                r"""Multiply the exponents:
$$\frac{1}{3}\cdot\Bigl(-\frac{3}{2}\Bigr)=-\frac{1}{2},$$
so $(z^{1/3})^{-3/2}=z^{-1/2}$ on $z>0$.""",
            ),
            (
                r"Someone records $(w^{2/3})^{3}=w^{5/3}$ for $w>0$, adding the exponents.",
                False,
                r"""Power of a power multiplies:
$$\bigl(w^{2/3}\bigr)^{3}=w^{2}.$$
Adding $2+3$ in the numerator produces the false $w^{5/3}$. Stacked exponents multiply, they do not add.""",
            ),
            (
                r"On $t>0$, the product $t^{-1/2}t^{3/2}$ is entered as $t$.",
                True,
                r"""Add the exponents:
$$-\frac{1}{2}+\frac{3}{2}=1,$$
so the product is $t$.""",
            ),
        ],
        overview=r"Five independent fractional-power calculations. Inside the mixed quotient the exponents total $1$, and the outer square makes $x^{2}$. Stacking multiplies; a quotient subtracts.",
    ),
    task(
        title="Denesting a nested radical by the wrong conjugate",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Denesting $\sqrt{8+2\sqrt{15}}$ is claimed to equal $\sqrt{5}-\sqrt{3}$.",
                False,
                r"""Square the minus conjugate:
$$(\sqrt{5}-\sqrt{3})^{2}=5-2\sqrt{15}+3=8-2\sqrt{15}.$$
That denests the companion $\sqrt{8-2\sqrt{15}}$. The plus form $\sqrt{8+2\sqrt{15}}$ matches $\sqrt{5}+\sqrt{3}$ instead.""",
            ),
            (
                r"Squaring $\sqrt{5}+\sqrt{3}$ is recorded as $8+2\sqrt{15}$ in the positive reals.",
                True,
                r"""Expand the binomial:
$$(\sqrt{5}+\sqrt{3})^{2}=5+2\sqrt{15}+3=8+2\sqrt{15}.$$""",
            ),
            (
                r"Matching positive roots, $\sqrt{18+2\sqrt{45}}$ is rewritten as $\sqrt{15}+\sqrt{3}$.",
                True,
                r"""Square the proposed sum:
$$(\sqrt{15}+\sqrt{3})^{2}=15+2\sqrt{45}+3=18+2\sqrt{45}.$$
Both sides are positive, so the principal square roots agree.""",
            ),
            (
                r"A naive split writes $\sqrt{12+2\sqrt{32}}=\sqrt{12}+\sqrt{32}$ as positive square roots.",
                False,
                r"""Square roots do not split over a sum. The correct denesting uses $8+4=12$ and $8\cdot 4=32$:
$$\sqrt{12+2\sqrt{32}}=\sqrt{8}+\sqrt{4}=2\sqrt{2}+2,$$
which is not $\sqrt{12}+\sqrt{32}$.""",
            ),
            (
                r"Taking positive roots, $\sqrt{8-2\sqrt{15}}$ is accepted as $\sqrt{5}-\sqrt{3}$.",
                True,
                r"""$(\sqrt{5}-\sqrt{3})^{2}=8-2\sqrt{15}$ and $\sqrt{5}-\sqrt{3}>0$, so the principal square roots match.""",
            ),
        ],
        overview=r"Five independent nested-radical checks. $\sqrt{8+2\sqrt{15}}=\sqrt{5}+\sqrt{3}$; the minus conjugate denests the minus companion. Splitting a radicand as a sum of roots fails.",
    ),
    task(
        title="Rationalising by the conjugate of the other binomial",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Rationalising $6/(\sqrt{7}-2)$ is recorded as $2(\sqrt{7}+2)$ in the positive reals.",
                True,
                r"""Multiply numerator and denominator by the conjugate $\sqrt{7}+2$:
$$\frac{6}{\sqrt{7}-2}\cdot\frac{\sqrt{7}+2}{\sqrt{7}+2}=\frac{6(\sqrt{7}+2)}{7-4}=\frac{6(\sqrt{7}+2)}{3}=2(\sqrt{7}+2).$$""",
            ),
            (
                r"Clearing $1/(\sqrt{5}-\sqrt{3})$ is claimed to equal $(\sqrt{5}-\sqrt{3})/2$, the conjugate already in the denominator.",
                False,
                r"""The correct multiplier is the plus conjugate. The denominator becomes $5-3=2$, and the numerator becomes $\sqrt{5}+\sqrt{3}$:
$$\frac{1}{\sqrt{5}-\sqrt{3}}=\frac{\sqrt{5}+\sqrt{3}}{2}.$$
Keeping $\sqrt{5}-\sqrt{3}$ in the numerator claims the other conjugate.""",
            ),
            (
                r"The product $(\sqrt{12}-\sqrt{3})(\sqrt{12}+\sqrt{3})$ is rewritten as $9$.",
                True,
                r"""Difference of squares:
$$(\sqrt{12})^{2}-(\sqrt{3})^{2}=12-3=9.$$""",
            ),
            (
                r"Someone rationalises $4/(\sqrt{18}-\sqrt{8})$ and claims the value $\sqrt{18}+\sqrt{8}$ without dividing by the difference of squares.",
                False,
                r"""Multiplying by the conjugate produces denominator $18-8=10$:
$$\frac{4}{\sqrt{18}-\sqrt{8}}=\frac{4(\sqrt{18}+\sqrt{8})}{10}=\frac{2}{5}(\sqrt{18}+\sqrt{8}).$$
Leaving the conjugate undivided is the slip.""",
            ),
            (
                r"On the positive denominator $\sqrt{5}-1$, the unit $1/(\sqrt{5}-1)$ is rewritten as $(\sqrt{5}+1)/4$.",
                True,
                r"""Multiply by $\sqrt{5}+1$:
$$\frac{\sqrt{5}+1}{5-1}=\frac{\sqrt{5}+1}{4}.$$""",
            ),
        ],
        overview=r"Five independent rationalising checks. Multiply by the opposite conjugate and divide by the difference of squares. Claiming the conjugate that already sat in the denominator is the usual trap.",
    ),
    task(
        title="A binomial square of a root and its reciprocal",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"On $x>0$, expanding $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}$ is recorded as $x+1/x$ with the cross term omitted.",
                False,
                r"""$(u-v)^{2}=u^{2}-2uv+v^{2}$ with $u=\sqrt{x}$ and $v=x^{-1/2}$:
$$x-2\cdot\sqrt{x}\cdot x^{-1/2}+x^{-1}=x-2+\frac{1}{x}.$$
Omitting the middle $-2$ is the incomplete square.""",
            ),
            (
                r"Expanding $\bigl(\sqrt{y}+y^{-1/2}\bigr)^{2}$ for $y>0$ is claimed to equal $y+2+1/y$.",
                True,
                r"""The cross term is $+2\cdot\sqrt{y}\cdot y^{-1/2}=+2$, so
$$y+2+\frac{1}{y}$$
on $y>0$.""",
            ),
            (
                r"Whenever $t>0$, the product $\sqrt{t}\cdot t^{-1/2}$ is accepted as $1$.",
                True,
                r"""Add the half-exponents:
$$t^{1/2}t^{-1/2}=t^{0}=1$$
on $t>0$.""",
            ),
            (
                r"A candidate writes $\bigl(u^{1/2}-2u^{-1/2}\bigr)^{2}=u+4/u$ for $u>0$, dropping $-4$.",
                False,
                r"""The cross term is $-2\cdot u^{1/2}\cdot 2u^{-1/2}=-4$, so
$$u-4+\frac{4}{u}.$$
Dropping $-4$ leaves the incomplete $u+4/u$.""",
            ),
            (
                r"Working with $w>0$, $\bigl(\sqrt{w}-1/\sqrt{w}\bigr)^{2}$ is rewritten as $(w-1)^{2}/w$.",
                True,
                r"""The expanded form $w-2+1/w$ has common denominator $w$:
$$\frac{w^{2}-2w+1}{w}=\frac{(w-1)^{2}}{w}.$$""",
            ),
        ],
        overview=r"Five independent binomial-square checks. $(\sqrt{x}-x^{-1/2})^{2}=x-2+1/x$; the cross term is identically $\pm 2$ or $\pm 4$ and must not be dropped.",
    ),
    task(
        title="Rewriting a new base from a given power",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Given $2^{k}=5$, a note rewrites $4^{k}$ as $25$ without solving for $k$.",
                True,
                r"""Write $4=2^{2}$, so
$$4^{k}=(2^{2})^{k}=(2^{k})^{2}=5^{2}=25.$$
The given power is substituted after a change of base; $k$ is never solved for.""",
            ),
            (
                r"Under the hypothesis $3^{n}=2$, the power $9^{n}$ is recorded as $4$.",
                True,
                r"""$9^{n}=(3^{2})^{n}=(3^{n})^{2}=2^{2}=4$. This is exponent algebra, not solving $3^{n}=2$.""",
            ),
            (
                r"From $2^{k}=5$, a student concludes $2^{3k}=15$.",
                False,
                r"""Tripling the exponent cubes the given value:
$$2^{3k}=(2^{k})^{3}=5^{3}=125,$$
                not $15$. The figure $15$ looks like $3\cdot 5$ rather than $5^{3}$.""",
            ),
            (
                r"Provided $2^{m}=3$, rewriting $8^{m}$ as $27$ is accepted.",
                True,
                r"""$8^{m}=(2^{3})^{m}=(2^{m})^{3}=3^{3}=27$.""",
            ),
            (
                r"Starting from $5^{t}=4$, a slip writes $25^{t}=8$.",
                False,
                r"""$25^{t}=(5^{2})^{t}=(5^{t})^{2}=4^{2}=16$, not $8$. Doubling the exponent squares the given value; it does not double it.""",
            ),
        ],
        overview=r"Five independent given-power rewrites. A new base is written as a power of the given base, then the given value is raised to that integer. No logarithm is taken.",
    ),
    task(
        title="Distributing an outer exponent across two letters",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Expanding $(a^{m}b^{n})^{k}$ for $a,b>0$ is recorded as $a^{mk}b^{nk}$.",
                True,
                r"""A power of a product splits, and a power of a power multiplies:
$$(a^{m}b^{n})^{k}=(a^{m})^{k}(b^{n})^{k}=a^{mk}b^{nk}$$
on $a,b>0$.""",
            ),
            (
                r"A note claims $(a^{m})^{k}=a^{m+k}$ identically for $a>0$.",
                False,
                r"""Stacked powers multiply: $(a^{m})^{k}=a^{mk}$. Adding $m+k$ is the product rule $a^{m}a^{k}$.""",
            ),
            (
                r"Whenever $c,d>0$, treating $(c^{2}d^{3})^{4}$ as $c^{8}d^{12}$ is accepted.",
                True,
                r"""Multiply each inner exponent by $4$:
$$2\cdot 4=8,\qquad 3\cdot 4=12.$$""",
            ),
            (
                r"Someone records $(p^{3}q^{-1})^{2}=p^{5}q$ for $p,q>0$, adding $2$ to the first exponent.",
                False,
                r"""Multiply both inner exponents by $2$:
$$(p^{3}q^{-1})^{2}=p^{6}q^{-2}=\frac{p^{6}}{q^{2}}.$$
Adding $3+2$ on $p$ and dropping the minus on $q$ produces the false $p^{5}q$.""",
            ),
            (
                r"On $u,v>0$, the quotient $(u^{2}v)^{3}/(uv^{2})^{3}$ is rewritten as $(u/v)^{3}$.",
                True,
                r"""Numerator $u^{6}v^{3}$, denominator $u^{3}v^{6}$. The quotient is
$$u^{3}v^{-3}=\Bigl(\frac{u}{v}\Bigr)^{3}.$$""",
            ),
        ],
        overview=r"Five independent two-letter power claims. $(a^{m}b^{n})^{k}=a^{mk}b^{nk}$, not $a^{m+k}$. Adding the outer exponent is the product trap.",
    ),
    task(
        title="Fractional powers of twelve, twenty-seven, and thirty-two",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Rewriting $27^{4/3}$ as $81$ is treated as valid.",
                True,
                r"""$27=3^{3}$, so
$$27^{4/3}=(3^{3})^{4/3}=3^{4}=81.$$""",
            ),
            (
                r"Reducing $32^{3/5}$ to $4$ is treated as correct.",
                False,
                r"""$32=2^{5}$, so
$$32^{3/5}=(2^{5})^{3/5}=2^{3}=8,$$
not $4$. The integer $4$ is $32^{2/5}$.""",
            ),
            (
                r"Evaluating $27^{2/3}\cdot 8^{-1/3}$ as $9/2$ is accepted.",
                True,
                r"""$27^{2/3}=9$ and $8^{-1/3}=1/2$, so the product is $9/2$.""",
            ),
            (
                r"A candidate records $\sqrt{18}\cdot\sqrt{8}=\sqrt{26}$ as positive square roots.",
                False,
                r"""The product rule multiplies radicands:
$$\sqrt{18}\sqrt{8}=\sqrt{144}=12,$$
not $\sqrt{18+8}$. Adding inside the radicand is the $\sqrt{a}+\sqrt{b}$ trap applied to a product.""",
            ),
            (
                r"Changing $4^{5/2}$ into $32$ is printed as valid.",
                True,
                r"""$4=2^{2}$, so
$$4^{5/2}=(2^{2})^{5/2}=2^{5}=32.$$""",
            ),
        ],
        overview=r"Five independent numerical rewrites. $27^{4/3}=81$ and $4^{5/2}=32$, but $32^{3/5}=8$ and $\sqrt{18}\sqrt{8}=12$, not $\sqrt{26}$.",
    ),
    task(
        title="Rewriting four, eight, and thirty-two as powers of two",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Changing $4^{m-n}$ into $2^{2m-2n}$ for integers $m,n$ is accepted.",
                True,
                r"""$4=2^{2}$, so
$$4^{m-n}=(2^{2})^{m-n}=2^{2(m-n)}=2^{2m-2n}.$$""",
            ),
            (
                r"A slip expands $8^{m}$ as $2^{m+3}$ as an identity in the integer $m$.",
                False,
                r"""$8^{m}=(2^{3})^{m}=2^{3m}$, not $2^{m+3}$. Adding $3$ is the product rule $2^{m}\cdot 2^{3}$, not a change of base.""",
            ),
            (
                r"Reducing $2^{m+n}4^{m-n}/8^{m}$ to $2^{-n}$ for integers $m,n$ is recorded as valid.",
                True,
                r"""Write $4=2^{2}$ and $8=2^{3}$. Then
$$2^{m+n}\cdot 2^{2(m-n)}\cdot 2^{-3m}=2^{m+n+2m-2n-3m}=2^{-n}.$$""",
            ),
            (
                r"Someone writes $32^{k}=2^{k+5}$ for every integer $k$.",
                False,
                r"""$32^{k}=(2^{5})^{k}=2^{5k}$, not $2^{k+5}$. The sum $k+5$ again confuses a stacked power with a product.""",
            ),
            (
                r"On integer $n$, rewriting $4^{n}/2^{n}=2^{n}$ is accepted.",
                True,
                r"""$4^{n}=(2^{2})^{n}=2^{2n}$, so
$$\frac{2^{2n}}{2^{n}}=2^{n}.$$""",
            ),
        ],
        overview=r"Five independent change-of-base lines. Rewrite $4=2^{2}$, $8=2^{3}$, $32=2^{5}$, then multiply exponents. Adding the index $3$ or $5$ is the product trap.",
    ),
    task(
        title="Fourth roots of even powers",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Extracting $\sqrt[4]{a^{2}b^{6}}$ for $a,b>0$ is recorded as $a^{1/2}b^{3/2}$.",
                True,
                r"""Divide each exponent by $4$:
$$(a^{2}b^{6})^{1/4}=a^{2/4}b^{6/4}=a^{1/2}b^{3/2}$$
on $a,b>0$.""",
            ),
            (
                r"Combining $\sqrt[4]{16}\sqrt[4]{81}$ as positive fourth roots is claimed to equal $12$.",
                False,
                r"""$\sqrt[4]{16}=2$ and $\sqrt[4]{81}=3$, so the product is $6$, not $12$. The figure $12$ looks like $16-4$ or $3\cdot 4$ rather than the product of the two fourth roots.""",
            ),
            (
                r"A student writes $\sqrt[4]{x^{4}}=x^{2}$ for every $x>0$.",
                False,
                r"""$(x^{4})^{1/4}=x$ on $x>0$, not $x^{2}$. Dividing the exponent by $4$ yields $1$, not $2$.""",
            ),
            (
                r"On $c>0$, $\sqrt[4]{c^{8}}=c^{2}$ is accepted.",
                True,
                r"""$(c^{8})^{1/4}=c^{2}$ on $c>0$.""",
            ),
            (
                r"Someone records $\sqrt[4]{32}=4\sqrt[4]{2}$ as a positive fourth root.",
                False,
                r"""$32=16\cdot 2$ and $\sqrt[4]{16}=2$, so
$$\sqrt[4]{32}=2\sqrt[4]{2},$$
                not $4\sqrt[4]{2}$. The coefficient $4$ is $\sqrt[4]{256}$.""",
            ),
        ],
        overview=r"Five independent fourth-root claims. Divide exponents by $4$. $\sqrt[4]{a^{2}b^{6}}=a^{1/2}b^{3/2}$ and $\sqrt[4]{c^{8}}=c^{2}$, while $\sqrt[4]{x^{4}}=x$ on $x>0$.",
    ),
    task(
        title="A minus sign stranded in a denominator",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Working with $a,b\neq 0$, the quotient $a^{5}b^{-3}/(a^{-2}b^{4})$ is recorded as $a^{7}/b^{7}$.",
                True,
                r"""Division by $a^{-2}$ multiplies by $a^{2}$, and division by $b^{4}$ multiplies by $b^{-4}$:
$$a^{5+2}b^{-3-4}=a^{7}b^{-7}=\frac{a^{7}}{b^{7}}.$$""",
            ),
            (
                r"Forgetting to invert, a slip writes $c^{4}/c^{-3}=c$ whenever $c\neq 0$.",
                False,
                r"""$4-(-3)=7$, so $c^{4}/c^{-3}=c^{7}$. Treating the denominator's $-3$ as an ordinary $3$ to be subtracted from $4$ leaves the false $c^{1}$.""",
            ),
            (
                r"Subtracting exponents, $d^{5}/d^{-2}=d^{7}$ for $d\neq 0$ is accepted.",
                True,
                r"""$5-(-2)=7$, hence $d^{5}/d^{-2}=d^{7}$.""",
            ),
            (
                r"A candidate records $e^{-3}/e^{4}=e$ for $e\neq 0$.",
                False,
                r"""Subtract exponents: $-3-4=-7$, so $e^{-3}/e^{4}=e^{-7}=1/e^{7}$, not $e$.""",
            ),
            (
                r"Provided $f\neq 0$, inverting $1/f^{-5}$ is rewritten as $f^{5}$.",
                True,
                r"""$1/f^{-5}=f^{5}$ because $f^{-(-5)}=f^{5}$.""",
            ),
        ],
        overview=r"Five independent monomial quotients. A negative exponent in a denominator flips sign. $a^{5}b^{-3}/(a^{-2}b^{4})=a^{7}/b^{7}$; forgetting the flip leaves $c^{4}/c^{-3}$ looking like $c$.",
    ),
    task(
        title="Stacked roots multiplying reciprocal exponents",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Stacking a fourth root on a cube root, $\sqrt[4]{\sqrt[3]{x}}=x^{1/12}$ for $x>0$ is accepted.",
                True,
                r"""$\sqrt[3]{x}=x^{1/3}$, then
$$(x^{1/3})^{1/4}=x^{1/12}$$
on $x>0$.""",
            ),
            (
                r"The stacked form $\sqrt[3]{\sqrt{y}}$ is recorded as $y^{5/6}$ for $y>0$, adding the reciprocal exponents.",
                False,
                r"""Stacked roots multiply the reciprocal exponents: $(1/2)\cdot(1/3)=1/6$. Adding $1/2+1/3=5/6$ is the product-of-powers rule applied by mistake.""",
            ),
            (
                r"On $z>0$, a cube root of a square $\sqrt[3]{z^{2}}$ is rewritten as $z^{2/3}$.",
                True,
                r"""$(z^{2})^{1/3}=z^{2/3}$ on $z>0$.""",
            ),
            (
                r"A fourth root of a cube, $\sqrt[4]{w^{3}}$ is claimed to equal $w^{4/3}$ on $w>0$.",
                False,
                r"""$(w^{3})^{1/4}=w^{3/4}$, not $w^{4/3}$. The fraction $4/3$ inverts the correct $3/4$.""",
            ),
            (
                r"Taking $t>0$, $\sqrt{\sqrt{\sqrt{t}}}$ is claimed to equal $t^{1/6}$.",
                False,
                r"""Three square roots multiply three factors $1/2$:
$$t^{(1/2)^{3}}=t^{1/8},$$
not $t^{1/6}$. The exponent $1/6$ would be a cube root of a square root.""",
            ),
        ],
        overview=r"Five independent stacked-root rewrites. Reciprocal exponents multiply: a cube root inside a fourth root is $x^{1/12}$. Adding $1/2+1/3$ is the wrong operation.",
    ),
    task(
        title="Conjugate surds multiplying to a difference of radicands",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"The numerical product $(\sqrt{5}+\sqrt{3})(\sqrt{5}-\sqrt{3})$ equals $2$ in the positive reals.",
                True,
                r"""Difference of squares:
$$(\sqrt{5})^{2}-(\sqrt{3})^{2}=5-3=2.$$""",
            ),
            (
                r"Adding radicands, $(\sqrt{12}+\sqrt{3})(\sqrt{12}-\sqrt{3})$ is claimed to equal $15$.",
                False,
                r"""The conjugate product is the difference $12-3=9$, not the sum $15$. Adding the radicands would be $(\sqrt{12})^{2}+(\sqrt{3})^{2}$.""",
            ),
            (
                r"In two letters, $(\sqrt{a}+\sqrt{b})(\sqrt{a}-\sqrt{b})=a-b$ for $a,b\ge 0$ is accepted.",
                True,
                r"""Difference of squares: $(\sqrt{a})^{2}-(\sqrt{b})^{2}=a-b$ on $a,b\ge 0$.""",
            ),
            (
                r"A note writes $(\sqrt{8}-\sqrt{2})^{2}=6$ as an identity on the positive reals.",
                False,
                r"""Expand: $8-2\sqrt{16}+2=10-8=2$, not $6$. The value $6$ looks like $8-2$ with the cross term omitted.""",
            ),
            (
                r"On $p,q\ge 0$, $(\sqrt{p}+\sqrt{q})^{2}=p+q+2\sqrt{pq}$ is printed as valid.",
                True,
                r"""$(u+v)^{2}=u^{2}+2uv+v^{2}$ with $u=\sqrt{p}$ and $v=\sqrt{q}$.""",
            ),
        ],
        overview=r"Five independent conjugate-surd claims. The product of conjugates is a difference of radicands. Each separate square still carries a cross term $\pm 2\sqrt{\,\cdot\,}$.",
    ),
    task(
        title="A sixth power in the numerator against a squared denominator",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Combining $(x^{1/2}y^{-1/3})^{6}/(x^{-1}y^{2})^{2}$ on $x,y>0$ is recorded as $x^{5}/y^{6}$.",
                True,
                r"""Numerator: $x^{3}y^{-2}$. Denominator: $x^{-2}y^{4}$. The quotient is
$$x^{3-(-2)}y^{-2-4}=x^{5}y^{-6}=\frac{x^{5}}{y^{6}}.$$""",
            ),
            (
                r"A slip writes the stack $(y^{-1/3})^{6}=y^{-1/18}$ for $y>0$.",
                False,
                r"""Multiply, do not divide: $(-1/3)\cdot 6=-2$. The exponent $-1/18$ is $(-1/3)/6$.""",
            ),
            (
                r"On $a>0$, $(a^{3/4})^{8/3}$ is rewritten as $a^{2}$.",
                True,
                r"""Multiply the exponents:
$$\frac{3}{4}\cdot\frac{8}{3}=2,$$
so the stacked power is $a^{2}$.""",
            ),
            (
                r"Someone records $(b^{-2}c^{1/2})^{4}=b^{2}c^{2}$ for $b,c>0$.",
                False,
                r"""Multiply each inner exponent by $4$:
$$b^{-8}c^{2}=\frac{c^{2}}{b^{8}}.$$
Adding $4$ to $-2$ on $b$ produces the false $b^{2}$.""",
            ),
            (
                r"Working with $u,v>0$, $(u^{-1}v^{3})^{2}(u^{2}v^{-1})^{3}$ is claimed to equal $u^{4}v^{3}$.",
                True,
                r"""The first factor is $u^{-2}v^{6}$; the second is $u^{6}v^{-3}$. The product is
$$u^{-2+6}v^{6-3}=u^{4}v^{3}.$$""",
            ),
        ],
        overview=r"Five independent two-letter stacks. Distribute the outer exponents, then add or subtract. $(x^{1/2}y^{-1/3})^{6}/(x^{-1}y^{2})^{2}=x^{5}/y^{6}$.",
    ),
    task(
        title="Independent traps from nested roots to given powers",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Denesting $\sqrt{24+2\sqrt{80}}$ is claimed to equal $\sqrt{20}-\sqrt{4}$.",
                False,
                r"""The factors $20$ and $4$ satisfy $20+4=24$ and $20\cdot 4=80$, so
$$(\sqrt{20}+\sqrt{4})^{2}=24+2\sqrt{80}.$$
The minus conjugate squares to $24-2\sqrt{80}$. The claimed difference is the wrong companion.""",
            ),
            (
                r"Given $2^{k}=5$, rewriting $2^{3k}$ as $125$ is accepted without solving for $k$.",
                True,
                r"""Tripling the exponent cubes the given value:
$$2^{3k}=(2^{k})^{3}=5^{3}=125.$$""",
            ),
            (
                r"Working with $x>0$, the expansion of $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}$ is recorded as $x-2+1/x$.",
                True,
                r"""The cross term is $-2\cdot\sqrt{x}\cdot x^{-1/2}=-2$, so the square is $x-2+1/x$.""",
            ),
            (
                r"Whenever $a,b>0$, treating $\sqrt{a}\sqrt{b}$ as $\sqrt{a+b}$ is accepted as an identity.",
                False,
                r"""The product rule gives $\sqrt{a}\sqrt{b}=\sqrt{ab}$, not $\sqrt{a+b}$. For $a=b=4$ one has $2\cdot 2=4$ while $\sqrt{8}=2\sqrt{2}$.""",
            ),
            (
                r"Rationalising $1/(\sqrt{48}-\sqrt{12})$ is claimed to equal $\sqrt{48}+\sqrt{12}$.",
                False,
                r"""The conjugate product in the denominator is $48-12=36$:
$$\frac{1}{\sqrt{48}-\sqrt{12}}=\frac{\sqrt{48}+\sqrt{12}}{36}=\frac{6\sqrt{3}}{36}=\frac{\sqrt{3}}{6}.$$
Leaving the conjugate undivided is the slip.""",
            ),
        ],
        overview=r"Five independent calculations: a minus-conjugate denesting, a given-power cube, a binomial square of a root and its reciprocal, $\sqrt{a}\sqrt{b}$ versus $\sqrt{a+b}$, and a rationalised unit.",
    ),
    task(
        title="A powered monomial quotient in two letters",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"The quotient identity $(a^{m}b^{n})^{k}/(a^{n}b^{m})^{k}=(a/b)^{k(m-n)}$ holds for $a,b>0$.",
                True,
                r"""Distribute the outer $k$:
$$\frac{a^{mk}b^{nk}}{a^{nk}b^{mk}}=a^{k(m-n)}b^{k(n-m)}=\Bigl(\frac{a}{b}\Bigr)^{k(m-n)}.$$""",
            ),
            (
                r"A matching reciprocal form claims that same quotient equals $(a/b)^{k(n-m)}$ for $a,b>0$.",
                False,
                r"""The exponent $k(n-m)$ is the negative of $k(m-n)$. That would describe $(b/a)^{k(m-n)}$, not $(a/b)^{k(m-n)}$.""",
            ),
            (
                r"Expanding only a cube, $(p^{2}q^{-3})^{3}=p^{6}q^{-9}$ on $p,q>0$ is accepted.",
                True,
                r"""Multiply each inner exponent by $3$:
$$2\cdot 3=6,\qquad (-3)\cdot 3=-9.$$""",
            ),
            (
                r"Treating $(r^{m}s^{n})^{k}$ as $r^{m+k}s^{n}$ for $r,s>0$ is offered as an identity.",
                False,
                r"""The outer $k$ multiplies every inner exponent: $r^{mk}s^{nk}$. Adding $k$ only to $r$ is the product rule $r^{m}r^{k}$ with $s$ left untouched.""",
            ),
            (
                r"Collecting $u^{6}v^{-4}/(u^{-2}v^{3})$ for $u,v>0$ is rewritten as $u^{8}/v^{7}$.",
                True,
                r"""Subtract exponents:
$$6-(-2)=8,\qquad -4-3=-7,$$
so the quotient is $u^{8}v^{-7}=u^{8}/v^{7}$.""",
            ),
        ],
        overview=r"Five independent monomial-quotient claims. After distributing $k$, $(a^{m}b^{n})^{k}/(a^{n}b^{m})^{k}=(a/b)^{k(m-n)}$. Adding the outer exponent instead of multiplying it is the trap.",
    ),
    task(
        title="Nested radicals rewritten as a single rational power",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Whenever $x>0$, the nest $\sqrt{x\sqrt{x}}$ is rewritten as $x^{3/4}$.",
                True,
                r"""Innermost $\sqrt{x}=x^{1/2}$, so $x\sqrt{x}=x^{3/2}$ and
$$\sqrt{x\sqrt{x}}=(x^{3/2})^{1/2}=x^{3/4}.$$""",
            ),
            (
                r"A three-storey cube nest $\sqrt[3]{y\sqrt[3]{y\sqrt[3]{y}}}$ is recorded as $y^{13/27}$ on $y>0$.",
                True,
                r"""Innermost $y^{1/3}$. The next storey is $y\cdot y^{1/3}=y^{4/3}$, whose cube root is $y^{4/9}$. The outer storey is $y\cdot y^{4/9}=y^{13/9}$, whose cube root is $y^{13/27}$.""",
            ),
            (
                r"On $z>0$, $\sqrt{z\sqrt{z\sqrt{z}}}$ is claimed to equal $z^{1/2}$.",
                False,
                r"""The three-storey square nest is $z^{7/8}$, not $z^{1/2}$. The claimed exponent keeps only the innermost square root and discards the two outer factors of $z$.""",
            ),
            (
                r"Stacking $\sqrt[4]{w^{2}}$ as $w^{1/2}$ for $w>0$ is accepted.",
                True,
                r"""$(w^{2})^{1/4}=w^{1/2}$ on $w>0$.""",
            ),
            (
                r"Someone records $\sqrt{\sqrt{t^{3}}}=t^{3/2}$ on $t>0$.",
                False,
                r"""Two square roots make a fourth root:
$$\sqrt{\sqrt{t^{3}}}=(t^{3})^{1/4}=t^{3/4},$$
not $t^{3/2}$. The exponent $3/2$ would be a single square root of $t^{3}$.""",
            ),
        ],
        overview=r"Five independent nests, each with its own index. Write every root as a reciprocal exponent and multiply. $\sqrt{x\sqrt{x}}=x^{3/4}$ and the three-storey cube nest is $y^{13/27}$.",
    ),
    task(
        title="Cancelling one conjugate factor, not two",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Cancelling one factor on $a>b>0$, $(\sqrt{a}-\sqrt{b})^{2}/(a-b)$ is recorded as $(\sqrt{a}-\sqrt{b})/(\sqrt{a}+\sqrt{b})$.",
                True,
                r"""Factor $a-b=(\sqrt{a}-\sqrt{b})(\sqrt{a}+\sqrt{b})$. Then
$$\frac{(\sqrt{a}-\sqrt{b})^{2}}{(\sqrt{a}-\sqrt{b})(\sqrt{a}+\sqrt{b})}=\frac{\sqrt{a}-\sqrt{b}}{\sqrt{a}+\sqrt{b}}.$$""",
            ),
            (
                r"Dividing $(c-d)/(\sqrt{c}-\sqrt{d})$ for $c>d>0$ is claimed to leave $\sqrt{c}-\sqrt{d}$.",
                False,
                r"""Cancel one factor $\sqrt{c}-\sqrt{d}$ from $c-d=(\sqrt{c}-\sqrt{d})(\sqrt{c}+\sqrt{d})$. The surviving factor is $\sqrt{c}+\sqrt{d}$, not $\sqrt{c}-\sqrt{d}$.""",
            ),
            (
                r"Factoring $p-q=(\sqrt{p}-\sqrt{q})(\sqrt{p}+\sqrt{q})$ on $p,q\ge 0$ is accepted.",
                True,
                r"""This is the difference-of-squares identity with $\sqrt{p}$ and $\sqrt{q}$, valid on $p,q\ge 0$.""",
            ),
            (
                r"A candidate cancels twice in $(\sqrt{u}-\sqrt{v})^{2}/(u-v)$ and obtains $1/(u-v)$ for $u>v>0$.",
                False,
                r"""The denominator is already $u-v$. Cancelling both copies of $\sqrt{u}-\sqrt{v}$ from the numerator would require two such factors in $u-v$, which it does not have. The result $1/(u-v)$ is not the simplified quotient.""",
            ),
            (
                r"On $m>n>0$, $(m-n)/(\sqrt{m}+\sqrt{n})$ is rewritten as $\sqrt{m}-\sqrt{n}$.",
                True,
                r"""Cancel $\sqrt{m}+\sqrt{n}$ from $m-n=(\sqrt{m}-\sqrt{n})(\sqrt{m}+\sqrt{n})$.""",
            ),
        ],
        overview=r"Five independent conjugate-cancellation claims. Write $a-b$ as a conjugate product. Then $(\sqrt{a}-\sqrt{b})^{2}/(a-b)$ keeps one factor of $\sqrt{a}-\sqrt{b}$ in the numerator.",
    ),
    task(
        title="Multiplying, stacking, and dividing exponents on one base",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Given $3^{y}=2$, the rewrite $9^{y}=4$ follows without solving for $y$.",
                True,
                r"""$9^{y}=(3^{2})^{y}=(3^{y})^{2}=2^{2}=4$. This substitutes the given power; it does not solve $3^{y}=2$.""",
            ),
            (
                r"A product-of-powers slip writes $x^{m}x^{n}=x^{mn}$ for $x>0$.",
                False,
                r"""The product rule adds exponents: $x^{m}x^{n}=x^{m+n}$. Multiplication of exponents is the stacked rule $(x^{m})^{n}$.""",
            ),
            (
                r"A rational-power identity $(x^{m/n})^{n}=x^{m}$ holds for $x>0$ and $n\neq 0$.",
                True,
                r"""Multiply the exponents: $\frac{m}{n}\cdot n=m$, so $(x^{m/n})^{n}=x^{m}$ on $x>0$.""",
            ),
            (
                r"A mistaken quotient rule $x^{m}/x^{n}=x^{m/n}$ is claimed for $x>0$.",
                False,
                r"""A quotient of powers subtracts exponents: $x^{m}/x^{n}=x^{m-n}$. The ratio of exponents $m/n$ is a different operation.""",
            ),
            (
                r"Three powers multiplying, $t^{m}t^{n}t^{-m-n}=1$ for $t>0$ is accepted.",
                True,
                r"""Add the exponents: $m+n+(-m-n)=0$, so the product is $t^{0}=1$.""",
            ),
        ],
        overview=r"Five independent exponent-arithmetic claims. Products add, stacks multiply, quotients subtract. Given $3^{y}=2$, one may still rewrite $9^{y}=(3^{y})^{2}=4$.",
    ),
    task(
        title="A mixed sheet of roots, conjugates, and a missing two",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Combining $\sqrt{48}-\sqrt{12}+\sqrt{27}$ as positive square roots is recorded as $5\sqrt{3}$.",
                True,
                r"""$\sqrt{48}=4\sqrt{3}$, $\sqrt{12}=2\sqrt{3}$, and $\sqrt{27}=3\sqrt{3}$, so
$$4\sqrt{3}-2\sqrt{3}+3\sqrt{3}=5\sqrt{3}.$$""",
            ),
            (
                r"Denesting $\sqrt{12+2\sqrt{32}}$ is claimed to equal $\sqrt{8}-\sqrt{4}$.",
                False,
                r"""$(\sqrt{8}-\sqrt{4})^{2}=8-2\sqrt{32}+4=12-2\sqrt{32}$, the minus companion. The plus nested radical matches $\sqrt{8}+\sqrt{4}=2\sqrt{2}+2$.""",
            ),
            (
                r"Rationalising $3/(\sqrt{5}-1)$ is recorded as $3(\sqrt{5}+1)/4$.",
                True,
                r"""Multiply by $\sqrt{5}+1$. The denominator is $5-1=4$, so the value is $3(\sqrt{5}+1)/4$.""",
            ),
            (
                r"On $x>0$, expanding $(\sqrt{x}+1/\sqrt{x})^{2}$ is claimed as $x+1/x$, omitting the middle $+2$.",
                False,
                r"""The cross term is $+2\cdot\sqrt{x}\cdot x^{-1/2}=+2$, so the square is $x+2+1/x$. Omitting $+2$ is the incomplete square.""",
            ),
            (
                r"Evaluating $32^{2/5}\cdot 27^{-1/3}$ as $4/3$ is accepted.",
                True,
                r"""$32^{2/5}=(2^{5})^{2/5}=4$ and $27^{-1/3}=1/3$, so the product is $4/3$.""",
            ),
        ],
        overview=r"Five independent mixed calculations: a like-surd combination equal to $5\sqrt{3}$, a minus-conjugate denesting trap, a rationalised unit, a missing cross term $+2$, and $32^{2/5}\cdot 27^{-1/3}=4/3$.",
    ),
    task(
        title="Adding reciprocal powers is not multiplying them",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Adding $x^{-1}+x^{-2}$ for $x\neq 0$ is recorded as $(x+1)/x^{2}$.",
                True,
                r"""Write $x^{-1}=1/x$ and $x^{-2}=1/x^{2}$. Then
$$\frac{1}{x}+\frac{1}{x^{2}}=\frac{x+1}{x^{2}}.$$""",
            ),
            (
                r"A marker writes $y^{-1}+y^{-2}=1/(y+y^{2})$ as an identity on $y\neq 0$.",
                False,
                r"""The sum of reciprocals is not the reciprocal of the sum. The correct common-denominator form is $(y+1)/y^{2}$, whereas $1/(y+y^{2})=1/(y(y+1))$.""",
            ),
            (
                r"Squaring a reciprocal, $z^{-2}=(z^{-1})^{2}$ for $z\neq 0$ is accepted.",
                True,
                r"""$(z^{-1})^{2}=z^{-2}$ by multiplying exponents, and both sides equal $1/z^{2}$.""",
            ),
            (
                r"Someone records $w^{-1}+w^{-2}=w^{-3}$ for every $w\neq 0$.",
                False,
                r"""Exponents add only when powers are multiplied, not when they are added. $w^{-1}+w^{-2}$ is a sum of two terms, not $w^{-3}$.""",
            ),
            (
                r"On $u\neq 0$, $u^{-4}u^{2}$ is claimed to equal $u^{-8}$.",
                False,
                r"""A product adds exponents: $-4+2=-2$, so $u^{-4}u^{2}=u^{-2}$. Multiplying $-4$ by $2$ is the stacked rule $(u^{-4})^{2}$.""",
            ),
        ],
        overview=r"Five independent reciprocal-power claims. Adding $x^{-1}+x^{-2}$ needs a common denominator; it is not $x^{-3}$ and not $1/(x+x^{2})$. Products still add exponents.",
    ),
    task(
        title="Changing bases inside a stacked fractional power",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Reducing $(4^{3/2})^{2/3}$ to $4$ is treated as correct.",
                True,
                r"""Multiply the exponents:
$$\bigl(4^{3/2}\bigr)^{2/3}=4^{(3/2)\cdot(2/3)}=4^{1}=4.$$
Equivalently $4^{3/2}=8$ and $8^{2/3}=4$.""",
            ),
            (
                r"A slip writes $(8^{2/3})^{3/2}=8^{2/3+3/2}$ as an identity.",
                False,
                r"""Stacked exponents multiply: $(8^{2/3})^{3/2}=8^{1}=8$. Adding $2/3+3/2=13/6$ is the product rule $8^{2/3}\cdot 8^{3/2}$.""",
            ),
            (
                r"On $t>0$, $(t^{-3})^{2/3}=t^{-2}$ is accepted.",
                True,
                r"""$(-3)\cdot(2/3)=-2$, so $(t^{-3})^{2/3}=t^{-2}$ on $t>0$.""",
            ),
            (
                r"Evaluating $16^{3/4}\cdot 8^{-1/3}$ as $2$ is entered.",
                False,
                r"""$16^{3/4}=(2^{4})^{3/4}=2^{3}=8$ and $8^{-1/3}=1/2$, so the product is $4$, not $2$.""",
            ),
            (
                r"Given $4^{k}=5$, rewriting $2^{2k}$ as $5$ without solving for $k$ is accepted.",
                True,
                r"""$2^{2k}=(2^{2})^{k}=4^{k}=5$. The given power is reused after a change of base.""",
            ),
        ],
        overview=r"Five independent stacked fractional powers. Multiply the two exponents, or rewrite each base as a power of $2$. Adding the fractional exponents is the product trap.",
    ),
    task(
        title="Exam leftover traps from powers and nested roots",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"A leftover nested form, $\sqrt{x^{3}}=x^{3/2}$ on $x>0$ is accepted.",
                True,
                r"""$\sqrt{x^{3}}=(x^{3})^{1/2}=x^{3/2}$ on $x>0$. Equivalently $x\sqrt{x}$.""",
            ),
            (
                r"Dividing two square roots, $\sqrt{45}/\sqrt{5}=\sqrt{9}$ on the positive reals is claimed.",
                True,
                r"""A quotient of square roots is the square root of the quotient:
$$\frac{\sqrt{45}}{\sqrt{5}}=\sqrt{9}=3.$$""",
            ),
            (
                r"A false binomial square $(\sqrt{12}+\sqrt{3})^{2}=15$ is claimed.",
                False,
                r"""$(\sqrt{12}+\sqrt{3})^{2}=12+2\sqrt{36}+3=15+12=27$, not $15$. The cross term $2\cdot\sqrt{12}\cdot\sqrt{3}=12$ was dropped, leaving the sum of radicands.""",
            ),
            (
                r"Raising a two-thirds power, $(x^{2/3})^{3}=x^{2}$ holds on $x>0$.",
                True,
                r"""Multiply the exponents: $\frac{2}{3}\cdot 3=2$, so $(x^{2/3})^{3}=x^{2}$.""",
            ),
            (
                r"A product of two copies $\sqrt{x}\cdot\sqrt{x}$ is said to equal $x^{1/4}$ on $x>0$.",
                False,
                r"""$\sqrt{x}\cdot\sqrt{x}=x^{1/2+1/2}=x$, not $x^{1/4}$. The exponent $1/4$ would be a nested square root $\sqrt{\sqrt{x}}$.""",
            ),
        ],
        overview=r"Five leftover independent claims. Fractional powers still add, subtract, and multiply in the usual way. A binomial square of roots keeps the cross term; $\sqrt{x}\cdot\sqrt{x}=x$.",
    ),
]
