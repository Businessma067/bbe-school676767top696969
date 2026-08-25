from __future__ import annotations

from common import task

TASKS = [
    task(
        title="Nested square roots collapsing to seven eighths",
        subsection="2.3",
        difficulty="4/5",
        context=r"A drill sheet nests square roots around a single positive letter $x$. Judge each claim on its own domain.",
        items=[
            (
                r"Whenever $x>0$, the nested radical $\sqrt{x\sqrt{x\sqrt{x}}}$ equals $x^{7/8}$.",
                True,
                r"""Innermost, $\sqrt{x}=x^{1/2}$. Then
$$x\sqrt{x}=x\cdot x^{1/2}=x^{3/2},\qquad \sqrt{x\sqrt{x}}=(x^{3/2})^{1/2}=x^{3/4}.$$
One more storey:
$$x\sqrt{x\sqrt{x}}=x\cdot x^{3/4}=x^{7/4},\qquad \sqrt{x\sqrt{x\sqrt{x}}}=(x^{7/4})^{1/2}=x^{7/8}.$$""",
            ),
            (
                r"Reducing the two-storey nest, a booklet claims $\sqrt{x\sqrt{x}}=x^{3/4}$ on $x>0$.",
                True,
                r"""On $x>0$,
$$\sqrt{x\sqrt{x}}=\bigl(x\cdot x^{1/2}\bigr)^{1/2}=(x^{3/2})^{1/2}=x^{3/4}.$$
That is the inner block of the three-storey nest.""",
            ),
            (
                r"An examiner records $\sqrt{x\sqrt{x\sqrt{x}}}=x^{1/2}$ for every $x>0$.",
                False,
                r"""The three-storey nest is $x^{7/8}$, not $x^{1/2}$. The claimed exponent keeps only the innermost square root and discards the two outer factors of $x$.""",
            ),
            (
                r"Restricting to $x>0$, the identity $\sqrt{\sqrt{x}}=x^{1/4}$ is accepted.",
                True,
                r"""A square root is the power $1/2$, so
$$\sqrt{\sqrt{x}}=(x^{1/2})^{1/2}=x^{1/4}$$
on $x>0$.""",
            ),
            (
                r"Taking the same two-storey nest, a slip writes $\sqrt{x\sqrt{x}}=x$ identically on $x>0$.",
                False,
                r"""The two-storey nest is $x^{3/4}$, not $x$. Equality would require $3/4=1$, which fails for $x\neq 1$.""",
            ),
        ],
        overview="Nested square roots become a single rational power by writing each $\\sqrt{\\cdot}$ as exponent $1/2$ and adding exponents inside each radicand. The three-storey nest is $x^{7/8}$.",
    ),
    task(
        title="A cube-root tower of squared factors",
        subsection="2.3",
        difficulty="5/5",
        context=r"Nested cube roots of squares of a positive $x$ appear on a blackboard. Treat every identity separately.",
        items=[
            (
                r"Working with $x>0$, $\sqrt[3]{x^2\sqrt[3]{x^2\sqrt[3]{x^2}}}=x^{26/27}$.",
                True,
                r"""Innermost $\sqrt[3]{x^2}=x^{2/3}$. The next storey is
$$x^2\cdot x^{2/3}=x^{8/3},\qquad \sqrt[3]{x^2\sqrt[3]{x^2}}=x^{8/9}.$$
The outer storey:
$$x^2\cdot x^{8/9}=x^{26/9},\qquad \sqrt[3]{x^2\sqrt[3]{x^2\sqrt[3]{x^2}}}=x^{26/27}.$$""",
            ),
            (
                r"The innermost cube root $\sqrt[3]{x^2}$ is rewritten as $x^{2/3}$ on $x>0$.",
                True,
                r"""A cube root is the power $1/3$, so
$$\sqrt[3]{x^2}=(x^2)^{1/3}=x^{2/3}$$
on $x>0$.""",
            ),
            (
                r"Stopping one storey early, a candidate claims the full nest equals $x^{8/9}$ for $x>0$.",
                False,
                r"""The exponent $8/9$ is only the two-storey nest $\sqrt[3]{x^2\sqrt[3]{x^2}}$. The outer factor $x^2$ and the outer cube root push the exponent from $8/9$ to $26/27$.""",
            ),
            (
                r"A three-storey nest without extra squares, $\sqrt[3]{x\sqrt[3]{x\sqrt[3]{x}}}$, is said to equal $x^{13/27}$ on $x>0$.",
                True,
                r"""Innermost $\sqrt[3]{x}=x^{1/3}$. Then
$$x\cdot x^{1/3}=x^{4/3},\qquad \sqrt[3]{x\sqrt[3]{x}}=x^{4/9},$$
$$x\cdot x^{4/9}=x^{13/9},\qquad \sqrt[3]{x\sqrt[3]{x\sqrt[3]{x}}}=x^{13/27}.$$""",
            ),
            (
                r"A blackboard states that the squared three-storey nest collapses to $x$ for every $x>0$.",
                False,
                r"""The squared nest is $x^{26/27}$, which equals $x$ only when $x=1$ (or $x=0$, excluded). It is not an identity on $x>0$.""",
            ),
        ],
        overview="Each cube root contributes a factor $1/3$ on the exponent. Nesting $x^2$ three times produces $x^{26/27}$; nesting $x$ three times produces $x^{13/27}$.",
    ),
    task(
        title="Squaring a mixed-power monomial",
        subsection="2.3",
        difficulty="4/5",
        context=r"Mixed integer and half-integer powers of a positive $x$ are multiplied, divided, then squared. Each line is a separate bookkeeping check.",
        items=[
            (
                r"After combining exponents on $x>0$, $\bigl(x^{-2}x^{5/2}/x^{-1/2}\bigr)^2=x^2$.",
                True,
                r"""Division by $x^{-1/2}$ multiplies by $x^{1/2}$. The inner exponent is
$$-2+\frac{5}{2}+\frac{1}{2}=1,$$
so the inner monomial is $x$. Squaring gives $x^2$.""",
            ),
            (
                r"The same left-hand side is recorded as $x^5$ whenever $x>0$.",
                False,
                r"""The inner combination is $x^1$, and the outer square produces $x^2$, not $x^5$. The exponent $5$ would require adding $2$ and $5/2$ while dropping the remaining signs.""",
            ),
            (
                r"Clearing the inner quotient first, $x^{-2}x^{5/2}x^{1/2}$ simplifies to $x$ on $x>0$.",
                True,
                r"""Add the exponents:
$$-2+\frac{5}{2}+\frac{1}{2}=-2+3=1.$$
The product is $x^1=x$.""",
            ),
            (
                r"A marker treats $(x^k)^2=x^{k+2}$ as a general rule for $x>0$.",
                False,
                r"""Power of a power multiplies exponents: $(x^k)^2=x^{2k}$. Adding $2$ is the product rule $x^k\cdot x^2$, not a stacked power.""",
            ),
            (
                r"Dividing half-integer powers, $x^{5/2}/x^{-1/2}=x^3$ holds on $x>0$.",
                True,
                r"""Subtract exponents:
$$\frac{5}{2}-\Bigl(-\frac{1}{2}\Bigr)=\frac{5}{2}+\frac{1}{2}=3,$$
so the quotient is $x^3$.""",
            ),
        ],
        overview="Inside a quotient, dividing by $x^{-1/2}$ adds $+1/2$. The mixed product $x^{-2}x^{5/2}x^{1/2}$ is $x$, and the outer square makes $x^2$, not $x^5$.",
    ),
    task(
        title="Fourth-root product of two monomials",
        subsection="2.3",
        difficulty="4/5",
        context=r"Fourth roots of monomials in two strictly positive letters $a$ and $b$. Each claim has its own rewriting.",
        items=[
            (
                r"Combining fourth roots on $a,b>0$, $\sqrt[4]{a^2 b^6}\,\sqrt[4]{a^6 b^2}=a^2 b^2$.",
                True,
                r"""The product of fourth roots is the fourth root of the product:
$$\sqrt[4]{a^2 b^6\cdot a^6 b^2}=\sqrt[4]{a^8 b^8}=(a^8 b^8)^{1/4}=a^2 b^2.$$
Alternatively, $\sqrt[4]{a^2 b^6}=a^{1/2}b^{3/2}$ and $\sqrt[4]{a^6 b^2}=a^{3/2}b^{1/2}$, whose product is $a^2 b^2$.""",
            ),
            (
                r"The same product is entered as $a^4 b^4$ for all $a,b>0$.",
                False,
                r"""The fourth root of $a^8 b^8$ is $a^2 b^2$, not $a^4 b^4$. The extra factor $a^2 b^2$ would appear if the outer root were a square root instead of a fourth root.""",
            ),
            (
                r"Extracting exponents, $\sqrt[4]{a^2 b^6}=a^{1/2}b^{3/2}$ on $a,b>0$.",
                True,
                r"""Divide each exponent by $4$:
$$(a^2 b^6)^{1/4}=a^{2/4}b^{6/4}=a^{1/2}b^{3/2}.$$""",
            ),
            (
                r"A student writes $\sqrt[4]{a^4}=a^2$ for every $a>0$.",
                False,
                r"""$(a^4)^{1/4}=a$ on $a>0$, not $a^2$. Dividing the exponent by $4$ yields $1$, not $2$.""",
            ),
            (
                r"The compact form $\sqrt[4]{a^8 b^8}=ab$ holds on $a,b>0$.",
                False,
                r"""$(a^8 b^8)^{1/4}=a^2 b^2$ on $a,b>0$, not $ab$. Dividing the exponents by $4$ yields $2$, not $1$.""",
            ),
        ],
        overview="A product of fourth roots is a fourth root of a product. Here the radicand is $a^8 b^8$, so the simplified monomial is $a^2 b^2$, not $a^4 b^4$.",
    ),
    task(
        title="A cube-root base raised to minus three halves",
        subsection="2.3",
        difficulty="4/5",
        context=r"A positive letter $x$ is raised to fractional powers that should cancel to a monomial. Judge each stacking rule separately.",
        items=[
            (
                r"Combining the two factors on $x>0$, $(x^{1/3})^{-3/2}\,x^{3/2}=x$.",
                True,
                r"""Power of a power:
$$(x^{1/3})^{-3/2}=x^{(1/3)\cdot(-3/2)}=x^{-1/2}.$$
Then $x^{-1/2}x^{3/2}=x^{1}=x$.""",
            ),
            (
                r"The first factor alone is rewritten $(x^{1/3})^{-3/2}=x^{-1/2}$ for $x>0$.",
                True,
                r"""Multiply the exponents $1/3$ and $-3/2$:
$$\frac{1}{3}\cdot\Bigl(-\frac{3}{2}\Bigr)=-\frac{1}{2}.$$""",
            ),
            (
                r"A candidate writes $(x^{1/3})^{-3}=x^{-3}$ on $x>0$.",
                False,
                r"""Power of a power multiplies: $(x^{1/3})^{-3}=x^{-1}$. The claimed $x^{-3}$ would treat the outer exponent as applying only to the $1$, ignoring the $1/3$.""",
            ),
            (
                r"A slip records $(x^{1/3})^{-3/2}=x^{-1/6}$ for $x>0$.",
                False,
                r"""The mistaken exponent $-1/6$ is $\frac{1}{3}\cdot\bigl(-\frac{1}{2}\bigr)$, which drops the $3$ in $-3/2$. The correct product of exponents is $-1/2$.""",
            ),
            (
                r"Cancelling half-powers, $x^{3/2}/x^{1/2}=x$ on $x>0$.",
                True,
                r"""Subtract exponents: $3/2-1/2=1$, so the quotient is $x$.""",
            ),
        ],
        overview="Stacking fractional powers multiplies exponents. $(x^{1/3})^{-3/2}$ is $x^{-1/2}$, and multiplying by $x^{3/2}$ recovers $x$.",
    ),
    task(
        title="Quotient of powered monomials in two letters",
        subsection="2.3",
        difficulty="5/5",
        context=r"Integer exponents $m$, $n$, and $k$ sit on two positive letters $a$ and $b$. Each line is an independent identity.",
        items=[
            (
                r"The quotient identity $(a^m b^n)^k/(a^n b^m)^k=(a/b)^{k(m-n)}$ holds for $a,b>0$.",
                True,
                r"""Distribute the outer $k$:
$$\frac{a^{mk}b^{nk}}{a^{nk}b^{mk}}=a^{k(m-n)}b^{k(n-m)}=\frac{a^{k(m-n)}}{b^{k(m-n)}}=\Bigl(\frac{a}{b}\Bigr)^{k(m-n)}.$$""",
            ),
            (
                r"The matching reciprocal form $(a^m b^n)^k/(a^n b^m)^k=(a/b)^{k(n-m)}$ is claimed for $a,b>0$.",
                False,
                r"""The exponent $k(n-m)$ is the negative of $k(m-n)$. That would describe $(b/a)^{k(m-n)}$, not $(a/b)^{k(m-n)}$.""",
            ),
            (
                r"Expanding only the numerator, $(a^m b^n)^k=a^{mk}b^{nk}$ on $a,b>0$.",
                True,
                r"""A power of a product splits, and a power of a power multiplies:
$$(a^m b^n)^k=(a^m)^k(b^n)^k=a^{mk}b^{nk}.$$""",
            ),
            (
                r"A note claims $(a^m)^k=a^{m+k}$ identically for $a>0$.",
                False,
                r"""Power of a power multiplies: $(a^m)^k=a^{mk}$. Adding $m+k$ is the product rule $a^m a^k$.""",
            ),
            (
                r"Collecting opposite exponents, $a^{k(m-n)}b^{k(n-m)}=(a/b)^{k(m-n)}$ on $a,b>0$.",
                True,
                r"""Write $b^{k(n-m)}=b^{-k(m-n)}$, so
$$a^{k(m-n)}b^{-k(m-n)}=\Bigl(\frac{a}{b}\Bigr)^{k(m-n)}.$$""",
            ),
        ],
        overview="After distributing $k$, the quotient of two powered monomials is $(a/b)^{k(m-n)}$. Adding exponents instead of multiplying them is the usual trap.",
    ),
    task(
        title="Clearing two negative exponents in a fraction",
        subsection="2.3",
        difficulty="3/5",
        context=r"A monomial quotient in nonzero $a$ and $b$ still carries several negative exponents. Simplify each line on its stated domain.",
        items=[
            (
                r"Working with $a,b\neq 0$, $a^5 b^{-3}/(a^{-2} b^4)=a^7/b^7$.",
                True,
                r"""Division by $a^{-2}$ multiplies by $a^{2}$, and division by $b^4$ multiplies by $b^{-4}$:
$$a^{5+2}b^{-3-4}=a^7 b^{-7}=\frac{a^7}{b^7}.$$""",
            ),
            (
                r"The reduced monomial is said to equal $a^3/b^7$ whenever $a,b\neq 0$.",
                False,
                r"""Forgetting to invert $a^{-2}$ in the denominator leaves $a^{5-(-0)}$ looking like $a^3$ after a sign error on $a$ only. The $a$-exponent is $5-(-2)=7$, not $3$.""",
            ),
            (
                r"Inverting a negative power, $1/a^{-2}=a^2$ for every $a\neq 0$.",
                True,
                r"""By definition $a^{-2}=1/a^2$, so $1/a^{-2}=a^2$. Equivalently, $a^{0-(-2)}=a^2$.""",
            ),
            (
                r"A student writes $b^{-3}/b^4=b$ for $b\neq 0$.",
                False,
                r"""Subtract exponents: $-3-4=-7$, so $b^{-3}/b^4=b^{-7}=1/b^7$, not $b$.""",
            ),
            (
                r"Subtracting exponents on the $a$-factors, $a^5/a^{-2}=a^7$ for $a\neq 0$.",
                True,
                r"""$5-(-2)=7$, hence $a^5/a^{-2}=a^7$.""",
            ),
        ],
        overview="A negative exponent in a denominator flips sign when the quotient is written as a product. The monomial $a^5 b^{-3}/(a^{-2}b^4)$ is $a^7/b^7$.",
    ),
    task(
        title="A negative power of a negative power",
        subsection="2.3",
        difficulty="3/5",
        context=r"Negative integer exponents are stacked as a power of a power, then compared with a plain product. Each claim uses $x\neq 0$.",
        items=[
            (
                r"Raising a negative power, $(x^{-2})^{-3}=x^6$ for every $x\neq 0$.",
                True,
                r"""Multiply the exponents: $(-2)\cdot(-3)=6$, so $(x^{-2})^{-3}=x^6$.""",
            ),
            (
                r"The stacked power is recorded as $x^{-5}$ whenever $x\neq 0$.",
                False,
                r"""The exponent $-5$ is $-2+(-3)$, which would be the product $x^{-2}x^{-3}$, not the stacked power $(x^{-2})^{-3}$.""",
            ),
            (
                r"Without the outer minus, $(x^{-2})^3=x^{-6}$ for $x\neq 0$.",
                True,
                r"""$(-2)\cdot 3=-6$, so $(x^{-2})^3=x^{-6}=1/x^6$.""",
            ),
            (
                r"A candidate treats $(x^m)^n=x^{m+n}$ as an identity on $x\neq 0$.",
                False,
                r"""Stacked powers multiply: $(x^m)^n=x^{mn}$. The sum $m+n$ belongs to the product $x^m x^n$.""",
            ),
            (
                r"Multiplying instead of stacking, $x^{-2}\cdot x^{-3}=x^{-5}$ for $x\neq 0$.",
                True,
                r"""The product rule adds exponents: $-2+(-3)=-5$.""",
            ),
        ],
        overview="$(x^{-2})^{-3}=x^{6}$ because stacked exponents multiply and two minuses make a plus. Adding $-2$ and $-3$ is a different operation, the product $x^{-5}$.",
    ),
    task(
        title="Adding the first two reciprocal powers",
        subsection="2.3",
        difficulty="3/5",
        context=r"Negative exponents of a nonzero $x$ are rewritten over a common denominator. Judge each translation separately.",
        items=[
            (
                r"Adding the first two negative powers, $x^{-1}+x^{-2}=(x+1)/x^2$ for $x\neq 0$.",
                True,
                r"""Write $x^{-1}=1/x$ and $x^{-2}=1/x^2$. Then
$$\frac{1}{x}+\frac{1}{x^2}=\frac{x+1}{x^2}.$$""",
            ),
            (
                r"The same sum is claimed to equal $x^{-3}$ for every $x\neq 0$.",
                False,
                r"""Exponents add only when powers are multiplied, not when they are added. $x^{-1}+x^{-2}$ is a sum of two terms, not $x^{-3}$.""",
            ),
            (
                r"The translation $x^{-1}=1/x$ holds for every $x\neq 0$.",
                True,
                r"""This is the definition of a negative exponent: $x^{-n}=1/x^n$ for $n=1$.""",
            ),
            (
                r"A marker writes $x^{-1}+x^{-2}=1/(x+x^2)$ as an identity on $x\neq 0$.",
                False,
                r"""The sum of reciprocals is not the reciprocal of the sum. The correct common-denominator form is $(x+1)/x^2$, whereas $1/(x+x^2)=1/(x(x+1))$.""",
            ),
            (
                r"Squaring a reciprocal, $x^{-2}=(x^{-1})^2$ for $x\neq 0$.",
                True,
                r"""$(x^{-1})^2=x^{-2}$ by multiplying exponents, and both sides equal $1/x^2$.""",
            ),
        ],
        overview="Negative exponents are reciprocals. Adding them requires a common denominator: $x^{-1}+x^{-2}=(x+1)/x^2$, not $x^{-3}$ and not $1/(x+x^2)$.",
    ),
    task(
        title="Three surds reduced to a single double root",
        subsection="2.3",
        difficulty="3/5",
        context=r"Numerical square roots that share the factor $\sqrt{2}$ are to be reduced and combined. No extra letters appear.",
        items=[
            (
                r"Combining the three surds, $\sqrt{50}-\sqrt{18}+\sqrt{8}=4\sqrt{2}$ as positive square roots.",
                True,
                r"""Factor each radicand:
$$\sqrt{50}=5\sqrt{2},\qquad \sqrt{18}=3\sqrt{2},\qquad \sqrt{8}=2\sqrt{2}.$$
Then $5\sqrt{2}-3\sqrt{2}+2\sqrt{2}=4\sqrt{2}$.""",
            ),
            (
                r"Reducing the first radicand, $\sqrt{50}=5\sqrt{2}$ as a positive square root.",
                True,
                r"""$\sqrt{50}=\sqrt{25\cdot 2}=\sqrt{25}\sqrt{2}=5\sqrt{2}$.""",
            ),
            (
                r"A student records $\sqrt{18}=6\sqrt{2}$ as positive square roots.",
                False,
                r"""$\sqrt{18}=\sqrt{9\cdot 2}=3\sqrt{2}$, not $6\sqrt{2}$. The factor $6$ would be $\sqrt{36}$.""",
            ),
            (
                r"Simplifying the last radicand, $\sqrt{8}=4\sqrt{2}$ as a positive square root.",
                False,
                r"""$\sqrt{8}=\sqrt{4\cdot 2}=2\sqrt{2}$, not $4\sqrt{2}$. The coefficient $4$ would belong to $\sqrt{32}$.""",
            ),
            (
                r"The combination $\sqrt{50}-\sqrt{18}+\sqrt{8}$ is said to equal $2\sqrt{2}$ as positive square roots.",
                False,
                r"""The coefficients are $5-3+2=4$, so the combination is $4\sqrt{2}$, not $2\sqrt{2}$.""",
            ),
        ],
        overview="Pull out the largest square factor of each radicand, then add the coefficients of $\\sqrt{2}$. The combination is $4\\sqrt{2}$.",
    ),
    task(
        title="Rationalising six over a shifted root of seven",
        subsection="2.3",
        difficulty="4/5",
        context=r"A binomial surd sits in a denominator. Rationalise by the conjugate and compare the two common numerical slips.",
        items=[
            (
                r"Rationalising the given quotient, $6/(\sqrt{7}-2)=2(\sqrt{7}+2)$ in the positive reals.",
                True,
                r"""Multiply numerator and denominator by the conjugate $\sqrt{7}+2$:
$$\frac{6}{\sqrt{7}-2}\cdot\frac{\sqrt{7}+2}{\sqrt{7}+2}=\frac{6(\sqrt{7}+2)}{7-4}=\frac{6(\sqrt{7}+2)}{3}=2(\sqrt{7}+2).$$""",
            ),
            (
                r"The rationalised form is recorded as $3(\sqrt{7}+2)$ in the positive reals.",
                False,
                r"""After multiplying by the conjugate, the denominator is $3$, so $6/3=2$ is the remaining coefficient. Keeping $3$ would mean forgetting to divide $6$ by $7-4$.""",
            ),
            (
                r"The conjugate product $(\sqrt{7}-2)(\sqrt{7}+2)$ equals $3$.",
                True,
                r"""Difference of squares: $(\sqrt{7})^2-2^2=7-4=3$.""",
            ),
            (
                r"A candidate writes $6/(\sqrt{7}-2)=-2(\sqrt{7}+2)$ after flipping a sign, still in the positive reals.",
                False,
                r"""$\sqrt{7}>2$, so the original denominator is positive and the value is positive. The rationalised form $2(\sqrt{7}+2)$ is positive; the extra minus sign is wrong.""",
            ),
            (
                r"Multiplying numerator and denominator by $\sqrt{7}+2$ is a valid rationalising step on the nonzero conjugate.",
                True,
                r"""The conjugate of $\sqrt{7}-2$ is $\sqrt{7}+2$. Multiplying top and bottom by the same nonzero quantity does not change the value, and it clears the surd from the denominator.""",
            ),
        ],
        overview="Rationalise $6/(\\sqrt{7}-2)$ by $\\sqrt{7}+2$. The denominator becomes $3$, so the coefficient is $2$, not $3$.",
    ),
    task(
        title="Unit fractions with conjugate root-of-three denominators",
        subsection="2.3",
        difficulty="4/5",
        context=r"Two unit fractions whose denominators are conjugates in $\sqrt{3}$ are added. Each line has its own rationalising check.",
        items=[
            (
                r"Adding the pair, $1/(\sqrt{3}+1)+1/(\sqrt{3}-1)=\sqrt{3}$ for these nonzero denominators.",
                True,
                r"""A common denominator is $(\sqrt{3}+1)(\sqrt{3}-1)=2$:
$$\frac{\sqrt{3}-1+\sqrt{3}+1}{2}=\frac{2\sqrt{3}}{2}=\sqrt{3}.$$""",
            ),
            (
                r"A student concludes that the sum is a rational number in $\mathbb{R}$.",
                False,
                r"""The sum equals $\sqrt{3}$, which is irrational. The rational $2$ appears only as the common denominator, not as the value of the sum.""",
            ),
            (
                r"The common denominator $(\sqrt{3}+1)(\sqrt{3}-1)$ equals $2$ in the positive reals.",
                True,
                r"""Difference of squares: $3-1=2$.""",
            ),
            (
                r"Someone records $1/(\sqrt{3}-1)=\sqrt{3}+1$ without dividing by $2$, for this positive denominator.",
                False,
                r"""Rationalising gives
$$\frac{1}{\sqrt{3}-1}\cdot\frac{\sqrt{3}+1}{\sqrt{3}+1}=\frac{\sqrt{3}+1}{2},$$
not $\sqrt{3}+1$.""",
            ),
            (
                r"Rationalising the other unit, $1/(\sqrt{3}+1)=(\sqrt{3}-1)/2$ on this positive denominator.",
                True,
                r"""Multiply by $\sqrt{3}-1$:
$$\frac{\sqrt{3}-1}{3-1}=\frac{\sqrt{3}-1}{2}.$$""",
            ),
        ],
        overview="The two conjugate unit fractions add to $\\sqrt{3}$. Each separate rationalisation still has denominator $2$; dropping that $2$ is the usual slip.",
    ),
    task(
        title="Conjugate surds whose product is two",
        subsection="2.3",
        difficulty="3/5",
        context=r"Products of conjugate surds, including a two-letter identity on $a,b\ge 0$. Judge each expansion on its domain.",
        items=[
            (
                r"The numerical product $(\sqrt{5}+\sqrt{3})(\sqrt{5}-\sqrt{3})$ equals $2$ in the positive reals.",
                True,
                r"""Difference of squares:
$$(\sqrt{5})^2-(\sqrt{3})^2=5-3=2.$$""",
            ),
            (
                r"Expanding without the minus, the same product is claimed to equal $8$ as real numbers.",
                False,
                r"""Adding the radicands $5+3=8$ would be $(\sqrt{5})^2+(\sqrt{3})^2$, not the conjugate product. The conjugate product is the difference $2$.""",
            ),
            (
                r"In two letters, $(\sqrt{a}+\sqrt{b})(\sqrt{a}-\sqrt{b})=a-b$ for $a,b\ge 0$.",
                True,
                r"""Difference of squares: $(\sqrt{a})^2-(\sqrt{b})^2=a-b$ on $a,b\ge 0$.""",
            ),
            (
                r"Squaring the plus-conjugate, $(\sqrt{5}+\sqrt{3})^2=8+2\sqrt{15}$.",
                True,
                r"""$(u+v)^2=u^2+2uv+v^2$ with $u=\sqrt{5}$ and $v=\sqrt{3}$:
$$5+2\sqrt{15}+3=8+2\sqrt{15}.$$""",
            ),
            (
                r"A note writes $(\sqrt{5}-\sqrt{3})^2=2$ as an identity on the positive reals.",
                False,
                r"""$(\sqrt{5}-\sqrt{3})^2=5-2\sqrt{15}+3=8-2\sqrt{15}$, not $2$. The value $2$ belongs to the conjugate product, not to this square.""",
            ),
        ],
        overview="Conjugate surds multiply to a difference of radicands. $(\\sqrt{5}+\\sqrt{3})(\\sqrt{5}-\\sqrt{3})=2$, while each separate square still carries a cross term $\\pm 2\\sqrt{15}$.",
    ),
    task(
        title="Denesting six plus twice the root of five",
        subsection="2.3",
        difficulty="5/5",
        context=r"Simple denesting of a two-term surd under a square root is compared with linear combinations of $1$ and $\sqrt{5}$. Positive square roots throughout.",
        items=[
            (
                r"Matching positive roots, $\sqrt{6+2\sqrt{5}}=1+\sqrt{5}$.",
                True,
                r"""Square the proposed denesting:
$$(1+\sqrt{5})^2=1+2\sqrt{5}+5=6+2\sqrt{5}.$$
Both $1+\sqrt{5}$ and $\sqrt{6+2\sqrt{5}}$ are positive, so they are equal.""",
            ),
            (
                r"Squaring the proposed denesting, $(1+\sqrt{5})^2=6+2\sqrt{5}$ in the positive reals.",
                True,
                r"""Expand: $1+2\sqrt{5}+5=6+2\sqrt{5}$.""",
            ),
            (
                r"A candidate writes $\sqrt{6+2\sqrt{5}}=\sqrt{5}-1$ as positive square roots.",
                False,
                r"""$(\sqrt{5}-1)^2=6-2\sqrt{5}$, which denests the minus companion $\sqrt{6-2\sqrt{5}}$, not the plus form.""",
            ),
            (
                r"The companion denesting $\sqrt{6-2\sqrt{5}}=\sqrt{5}-1$ holds for positive roots.",
                True,
                r"""$(\sqrt{5}-1)^2=5-2\sqrt{5}+1=6-2\sqrt{5}$ and $\sqrt{5}-1>0$, so the positive square roots match.""",
            ),
            (
                r"A worksheet states $\sqrt{6+2\sqrt{5}}=2+\sqrt{5}$ as positive square roots.",
                False,
                r"""$(2+\sqrt{5})^2=4+4\sqrt{5}+5=9+4\sqrt{5}\neq 6+2\sqrt{5}$. The constant term must be $1$, not $2$.""",
            ),
        ],
        overview="To denest $\\sqrt{6+2\\sqrt{5}}$, guess $1+\\sqrt{5}$ and square. The minus companion is $\\sqrt{5}-1$. Swapping those two, or inflating the constant, breaks the identity.",
    ),
    task(
        title="Cube roots of fifty-four and sixteen",
        subsection="2.3",
        difficulty="4/5",
        context=r"Integer cube factors are pulled out of $54$ and $16$. Compare the reduced difference with two illegal shortcuts.",
        items=[
            (
                r"Subtracting the reduced cube roots, $\sqrt[3]{54}-\sqrt[3]{16}=\sqrt[3]{2}$ in the reals.",
                True,
                r"""$\sqrt[3]{54}=\sqrt[3]{27\cdot 2}=3\sqrt[3]{2}$ and $\sqrt[3]{16}=\sqrt[3]{8\cdot 2}=2\sqrt[3]{2}$, so
$$3\sqrt[3]{2}-2\sqrt[3]{2}=\sqrt[3]{2}.$$""",
            ),
            (
                r"Factoring the first radicand, $\sqrt[3]{54}=3\sqrt[3]{2}$ in the reals.",
                True,
                r"""$54=27\cdot 2$ and $\sqrt[3]{27}=3$, hence $\sqrt[3]{54}=3\sqrt[3]{2}$.""",
            ),
            (
                r"Factoring the second radicand, $\sqrt[3]{16}=4\sqrt[3]{2}$ in the reals.",
                False,
                r"""$16=8\cdot 2$ and $\sqrt[3]{8}=2$, so $\sqrt[3]{16}=2\sqrt[3]{2}$, not $4\sqrt[3]{2}$. The coefficient $4$ would be $\sqrt[3]{64}$.""",
            ),
            (
                r"Someone claims $\sqrt[3]{54}-\sqrt[3]{16}=0$ in the reals.",
                False,
                r"""The reduced forms are $3\sqrt[3]{2}$ and $2\sqrt[3]{2}$, which are not equal, so the difference is $\sqrt[3]{2}\neq 0$.""",
            ),
            (
                r"A note writes $\sqrt[3]{54}-\sqrt[3]{16}=\sqrt[3]{38}$ in the reals.",
                False,
                r"""Cube roots do not pass through a difference: $\sqrt[3]{a}-\sqrt[3]{b}\neq\sqrt[3]{a-b}$ in general. Here $54-16=38$ is a distractor.""",
            ),
        ],
        overview="Extract cube factors $27$ and $8$. Then $\\sqrt[3]{54}-\\sqrt[3]{16}=3\\sqrt[3]{2}-2\\sqrt[3]{2}=\\sqrt[3]{2}$. Cube roots do not subtract inside the radicand.",
    ),
    task(
        title="A squared root-difference over a plain difference",
        subsection="2.3",
        difficulty="5/5",
        context=r"Letters $a>b>0$ appear in a quotient of surds. One factor of $\sqrt{a}-\sqrt{b}$ should cancel, not two.",
        items=[
            (
                r"Cancelling one factor on $a>b>0$, $(\sqrt{a}-\sqrt{b})^2/(a-b)=(\sqrt{a}-\sqrt{b})/(\sqrt{a}+\sqrt{b})$.",
                True,
                r"""Factor $a-b=(\sqrt{a}-\sqrt{b})(\sqrt{a}+\sqrt{b})$. Then
$$\frac{(\sqrt{a}-\sqrt{b})^2}{(\sqrt{a}-\sqrt{b})(\sqrt{a}+\sqrt{b})}=\frac{\sqrt{a}-\sqrt{b}}{\sqrt{a}+\sqrt{b}}.$$""",
            ),
            (
                r"The same quotient is said to equal $1/(\sqrt{a}+\sqrt{b})$ for $a>b>0$.",
                False,
                r"""That would require cancelling $\sqrt{a}-\sqrt{b}$ twice, leaving only the conjugate in the denominator. After one cancellation a factor $\sqrt{a}-\sqrt{b}$ remains in the numerator.""",
            ),
            (
                r"Factoring the plain difference, $a-b=(\sqrt{a}-\sqrt{b})(\sqrt{a}+\sqrt{b})$ on $a,b\ge 0$.",
                True,
                r"""This is the difference-of-squares identity with $\sqrt{a}$ and $\sqrt{b}$, valid on $a,b\ge 0$.""",
            ),
            (
                r"A candidate cancels $\sqrt{a}-\sqrt{b}$ twice and obtains $1/(a-b)$ on $a>b>0$.",
                False,
                r"""The denominator is already $a-b$. Cancelling both copies of $\sqrt{a}-\sqrt{b}$ from the numerator would require two such factors in $a-b$, which it does not have. The result $1/(a-b)$ is not the simplified quotient.""",
            ),
            (
                r"Dividing the other way, $(a-b)/(\sqrt{a}-\sqrt{b})=\sqrt{a}+\sqrt{b}$ on $a>b>0$.",
                True,
                r"""Cancel one factor $\sqrt{a}-\sqrt{b}$ from $a-b=(\sqrt{a}-\sqrt{b})(\sqrt{a}+\sqrt{b})$.""",
            ),
        ],
        overview="Write $a-b$ as a conjugate product. Then $(\\sqrt{a}-\\sqrt{b})^2/(a-b)$ simplifies to $(\\sqrt{a}-\\sqrt{b})/(\\sqrt{a}+\\sqrt{b})$, not to $1/(\\sqrt{a}+\\sqrt{b})$.",
    ),
    task(
        title="Product of roots is not a root of a sum",
        subsection="2.3",
        difficulty="3/5",
        context=r"Square-root identities on $a,b\ge 0$, including one numerical check. Each statement names its own domain.",
        items=[
            (
                r"The product rule $\sqrt{a}\sqrt{b}=\sqrt{ab}$ holds for all $a,b\ge 0$.",
                True,
                r"""On the nonnegative reals, $\sqrt{a}=a^{1/2}$ and $\sqrt{b}=b^{1/2}$, so
$$a^{1/2}b^{1/2}=(ab)^{1/2}=\sqrt{ab}.$$""",
            ),
            (
                r"Splitting a radicand, $\sqrt{a+b}=\sqrt{a}+\sqrt{b}$ is claimed for all $a,b\ge 0$.",
                False,
                r"""Squaring the right-hand side produces $a+b+2\sqrt{ab}$, not $a+b$. The identity fails whenever $ab>0$; e.g. $a=b=1$ gives $\sqrt{2}\neq 2$.""",
            ),
            (
                r"Checking the product rule at $a=b=1$, both sides equal $1$.",
                True,
                r"""$\sqrt{1}\sqrt{1}=1$ and $\sqrt{1\cdot 1}=1$.""",
            ),
            (
                r"Expanding a sum of roots, $\sqrt{a}+\sqrt{b}=\sqrt{a+b+2\sqrt{ab}}$ for $a,b\ge 0$.",
                True,
                r"""Both sides are nonnegative, and
$$(\sqrt{a}+\sqrt{b})^2=a+2\sqrt{ab}+b.$$
Taking positive square roots recovers the identity.""",
            ),
            (
                r"A numerical split $\sqrt{9\cdot 4}=\sqrt{9}+\sqrt{4}$ is asserted.",
                False,
                r"""The left-hand side is $\sqrt{36}=6$. The right-hand side is $3+2=5$. The product rule would have required $\sqrt{9}\sqrt{4}=6$, not a sum of roots.""",
            ),
        ],
        overview="On $a,b\\ge 0$, products of square roots may pass inside a single radicand. Sums may not: $\\sqrt{a+b}\\neq\\sqrt{a}+\\sqrt{b}$ in general.",
    ),
    task(
        title="Sixth power of a mixed two-letter monomial",
        subsection="2.3",
        difficulty="5/5",
        context=r"Two positive letters $x$ and $y$ enter a sixth power in the numerator and a square in the denominator. Keep a running exponent for each letter.",
        items=[
            (
                r"Combining all exponents on $x,y>0$, $(x^{1/2} y^{-1/3})^6/(x^{-1} y^2)^2=x^5/y^6$.",
                True,
                r"""Numerator: $x^{3}y^{-2}$. Denominator: $x^{-2}y^{4}$. The quotient is
$$x^{3-(-2)}y^{-2-4}=x^5 y^{-6}=\frac{x^5}{y^6}.$$""",
            ),
            (
                r"The numerator power $(x^{1/2} y^{-1/3})^6$ simplifies to $x^3 y^{-2}$ for $x,y>0$.",
                True,
                r"""Multiply each inner exponent by $6$:
$$\frac{1}{2}\cdot 6=3,\qquad \Bigl(-\frac{1}{3}\Bigr)\cdot 6=-2.$$""",
            ),
            (
                r"The denominator square $(x^{-1} y^2)^2$ is $x^{-2} y^4$ for $x,y>0$.",
                True,
                r"""$(x^{-1})^2=x^{-2}$ and $(y^2)^2=y^4$.""",
            ),
            (
                r"A slip writes the full quotient as $x^5/y^2$ for $x,y>0$.",
                False,
                r"""The $y$-exponent is $-2-4=-6$, not $-2$. Dropping the denominator's $y^4$ would leave $y^{-2}$ and the false form $x^5/y^2$.""",
            ),
            (
                r"A candidate records $(y^{-1/3})^6=y^{-1/18}$ for $y>0$.",
                False,
                r"""Multiply, do not divide: $(-1/3)\cdot 6=-2$. The exponent $-1/18$ is $(-1/3)/6$.""",
            ),
        ],
        overview="Distribute $6$ and $2$ onto each letter, then subtract exponents in the quotient. The result is $x^5/y^6$, not $x^5/y^2$.",
    ),
    task(
        title="Bases two, four, and eight in one quotient",
        subsection="2.3",
        difficulty="4/5",
        context=r"The integer pair $(m,n)$ sits on bases that are themselves powers of $2$. Rewrite everything with base $2$ before adding exponents.",
        items=[
            (
                r"Reducing to base $2$, $2^{m+n}4^{m-n}/8^m=2^{-n}$ for all integers $m,n$.",
                True,
                r"""Write $4=2^2$ and $8=2^3$. Then
$$2^{m+n}\cdot 2^{2(m-n)}\cdot 2^{-3m}=2^{m+n+2m-2n-3m}=2^{-n}.$$""",
            ),
            (
                r"Changing the middle base, $4^{m-n}=2^{2m-2n}$ for every integer pair $(m,n)$.",
                True,
                r"""$4^{m-n}=(2^2)^{m-n}=2^{2(m-n)}=2^{2m-2n}$.""",
            ),
            (
                r"Changing the last base, $8^m=2^{m+3}$ as an identity in the integer $m$.",
                False,
                r"""$8^m=(2^3)^m=2^{3m}$, not $2^{m+3}$. Adding $3$ is the product rule $2^m\cdot 2^3$, not a change of base.""",
            ),
            (
                r"The original quotient is claimed to equal $2^{m-n}$ for all integers $m,n$.",
                False,
                r"""After collecting exponents the $m$-terms cancel and only $-n$ remains. The claimed $2^{m-n}$ still carries $m$.""",
            ),
            (
                r"A slip expands $2^{m+n}=2^m+2^n$ as a general rule for integers $m,n$.",
                False,
                r"""An exponent on a sum in the exponent is a product: $2^{m+n}=2^m\cdot 2^n$, not a sum of powers.""",
            ),
        ],
        overview="Rewrite $4=2^2$ and $8=2^3$, then add exponents. The $m$-terms cancel and the quotient is $2^{-n}$.",
    ),
    task(
        title="Squaring a root minus its reciprocal",
        subsection="2.3",
        difficulty="4/5",
        context=r"On $x>0$, expand $\bigl(\sqrt{x}-1/\sqrt{x}\bigr)^2$ and compare with two truncated versions.",
        items=[
            (
                r"Expanding on $x>0$, $(\sqrt{x}-1/\sqrt{x})^2=x+1/x-2$.",
                True,
                r"""$(u-v)^2=u^2-2uv+v^2$ with $u=\sqrt{x}$ and $v=x^{-1/2}$:
$$x-2\cdot\sqrt{x}\cdot x^{-1/2}+x^{-1}=x-2+\frac{1}{x}.$$""",
            ),
            (
                r"The cross term in that square is $-2$ for every $x>0$.",
                True,
                r"""$-2\cdot\sqrt{x}\cdot\frac{1}{\sqrt{x}}=-2\cdot 1=-2$.""",
            ),
            (
                r"A candidate writes $(\sqrt{x}-1/\sqrt{x})^2=x+1/x$, omitting the middle term, on $x>0$.",
                False,
                r"""Omitting $-2uv$ is the usual incomplete square. The missing term is $-2$, so the identity requires $x+1/x-2$.""",
            ),
            (
                r"The product of the two pieces, $\sqrt{x}\cdot 1/\sqrt{x}$, equals $1$ on $x>0$.",
                True,
                r"""$\sqrt{x}\cdot x^{-1/2}=x^{1/2-1/2}=x^0=1$.""",
            ),
            (
                r"A note asserts the square equals $(x-1)/x$ for $x>0$.",
                False,
                r"""The correct compact form is $(x-1)^2/x=(x^2-2x+1)/x=x-2+1/x$. The claimed $(x-1)/x$ drops one factor $x-1$.""",
            ),
        ],
        overview="Expand $(\\sqrt{x}-x^{-1/2})^2$ as $x-2+1/x$. The cross term is identically $-2$ on $x>0$.",
    ),
    task(
        title="Denesting eight plus twice the root of fifteen",
        subsection="2.3",
        difficulty="5/5",
        context=r"The surd $\sqrt{8+2\sqrt{15}}$ is compared with sums of square roots. Positive roots throughout.",
        items=[
            (
                r"The positive denesting $\sqrt{8+2\sqrt{15}}=\sqrt{5}+\sqrt{3}$ holds.",
                True,
                r"""Square the proposed sum:
$$(\sqrt{5}+\sqrt{3})^2=5+2\sqrt{15}+3=8+2\sqrt{15}.$$
Both sides of the claimed denesting are positive.""",
            ),
            (
                r"Squaring that sum, $(\sqrt{5}+\sqrt{3})^2=8+2\sqrt{15}$ in the positive reals.",
                True,
                r"""$5+2\sqrt{5\cdot 3}+3=8+2\sqrt{15}$.""",
            ),
            (
                r"A naive split writes $\sqrt{8+2\sqrt{15}}=\sqrt{8}+\sqrt{15}$ as positive square roots.",
                False,
                r"""Square roots do not split over a sum. Numerically $\sqrt{8}+\sqrt{15}\approx 6.70$, while $\sqrt{8+2\sqrt{15}}=\sqrt{5}+\sqrt{3}\approx 3.97$.""",
            ),
            (
                r"The companion $\sqrt{8-2\sqrt{15}}=\sqrt{5}-\sqrt{3}$ (positive roots) is valid.",
                True,
                r"""$(\sqrt{5}-\sqrt{3})^2=5-2\sqrt{15}+3=8-2\sqrt{15}$ and $\sqrt{5}-\sqrt{3}>0$.""",
            ),
            (
                r"Someone records $\sqrt{8+2\sqrt{15}}=4+\sqrt{15}$ as positive square roots.",
                False,
                r"""$(4+\sqrt{15})^2=16+8\sqrt{15}+15=31+8\sqrt{15}\neq 8+2\sqrt{15}$.""",
            ),
        ],
        overview="Denest $\\sqrt{8+2\\sqrt{15}}$ by matching $(\\sqrt{5}+\\sqrt{3})^2$. The minus companion is $\\sqrt{5}-\\sqrt{3}$. Splitting the original radicand as a sum of roots fails.",
    ),
    task(
        title="Replacing four to the x by a square of two to the x",
        subsection="2.3",
        difficulty="4/5",
        context=r"A hypothesis $2^x=5$ is given. Rewrite higher powers by exponent algebra only; do not solve for $x$.",
        items=[
            (
                r"Given that $2^x=5$, the rewrite $4^x=25$ follows.",
                True,
                r"""Write $4=2^2$, so $4^x=(2^2)^x=(2^x)^2=5^2=25$.""",
            ),
            (
                r"Under the same hypothesis, $8^x=125$.",
                True,
                r"""$8^x=(2^3)^x=(2^x)^3=5^3=125$.""",
            ),
            (
                r"A student concludes $2^{2x}=10$ from $2^x=5$.",
                False,
                r"""$2^{2x}=(2^x)^2=5^2=25$, not $10$. Doubling the exponent squares the given value; it does not double it.""",
            ),
            (
                r"The reciprocal base gives $(1/2)^x=5$ from $2^x=5$.",
                False,
                r"""$(1/2)^x=2^{-x}=(2^x)^{-1}=5^{-1}=1/5$, the reciprocal of $5$, not $5$ itself.""",
            ),
            (
                r"From $2^x=5$ a note claims $4^x=20$.",
                False,
                r"""$4^x=(2^x)^2=25$, not $20$. The figure $20$ looks like $4\cdot 5$ rather than $5^2$.""",
            ),
        ],
        overview="A given power $2^x=5$ substitutes after rewriting the new base as a power of $2$. Then $4^x=(2^x)^2=25$ and $8^x=(2^x)^3=125$, while $(1/2)^x=1/5$.",
    ),
    task(
        title="The zero exponent on a nonzero base",
        subsection="2.3",
        difficulty="3/5",
        context=r"The rule for a zero exponent on a nonzero base is mixed with inverse powers. Each line names its own excluded points.",
        items=[
            (
                r"The zero-power rule $a^0=1$ holds for every $a\neq 0$.",
                True,
                r"""For $a\neq 0$ one has $a^n/a^n=a^{n-n}=a^0$ and $a^n/a^n=1$, so $a^0=1$.""",
            ),
            (
                r"A booklet treats the expression $0^{-2}$ as a defined real number.",
                False,
                r"""$0^{-2}=1/0^2$, and division by zero is undefined. Negative exponents require a nonzero base.""",
            ),
            (
                r"Cancelling inverse squares, $x^2\cdot x^{-2}=1$ for $x\neq 0$.",
                True,
                r"""Add exponents: $2+(-2)=0$, so $x^2 x^{-2}=x^0=1$ on $x\neq 0$.""",
            ),
            (
                r"A false assignment $a^0=0$ is claimed for every $a\neq 0$.",
                False,
                r"""The zero exponent produces $1$, not $0$. For instance $2^0=1$.""",
            ),
            (
                r"The product rule $(ab)^0=0$ is claimed for $a,b\neq 0$.",
                False,
                r"""Both $(ab)^0$ and $a^0 b^0$ equal $1$, not $0$. A zero exponent does not force a zero value.""",
            ),
        ],
        overview="On a nonzero base, $a^0=1$ and inverse powers cancel to $1$. Negative exponents of $0$ are undefined, and a zero exponent is not the value $0$.",
    ),
    task(
        title="Square root of a product of two squares",
        subsection="2.3",
        difficulty="4/5",
        context=r"One line uses an absolute value under a square root of $a^2 b^2$. The remaining lines stay with positive letters or ordinary fractional powers.",
        items=[
            (
                r"The absolute-value identity $\sqrt{a^2 b^2}=|ab|$ holds for all real $a,b$.",
                True,
                r"""$\sqrt{a^2 b^2}=\sqrt{(ab)^2}=|ab|$ for all real $a,b$, because a square root returns the nonnegative square root.""",
            ),
            (
                r"Restricting both letters to $a,b>0$, $\sqrt{a^2 b^2}=ab$.",
                True,
                r"""On $a,b>0$ one has $ab>0$, so $|ab|=ab$.""",
            ),
            (
                r"A worksheet claims $\sqrt{a^2 b^2}=a^2 b^2$ for $a,b>0$.",
                False,
                r"""The square root halves the even exponents: $(a^2 b^2)^{1/2}=ab$ on $a,b>0$, not $a^2 b^2$.""",
            ),
            (
                r"Taking only one letter, $(x^2)^{1/2}=x$ on $x>0$.",
                True,
                r"""Multiply exponents: $2\cdot\frac{1}{2}=1$, so $(x^2)^{1/2}=x$ on $x>0$.""",
            ),
            (
                r"Someone writes $\sqrt{a^2 b^2}=ab$ for all real $a,b$, dropping the absolute value.",
                False,
                r"""If $a=1$ and $b=-1$, then $\sqrt{a^2 b^2}=1$ while $ab=-1$. The identity on all reals needs $|ab|$.""",
            ),
        ],
        overview="As fractional powers on $x>0$, $(x^2)^{1/2}=x$. On all reals, $\\sqrt{a^2 b^2}=|ab|$; dropping the absolute value fails when $ab<0$.",
    ),
    task(
        title="Roots stacked as a single fractional power",
        subsection="2.3",
        difficulty="5/5",
        context=r"Different roots stacked on a positive $x$ are rewritten as one rational power. Keep the product of the reciprocal integers.",
        items=[
            (
                r"Stacking a fourth root on a cube root, $\sqrt[4]{\sqrt[3]{x}}=x^{1/12}$ for $x>0$.",
                True,
                r"""$\sqrt[3]{x}=x^{1/3}$, then $(x^{1/3})^{1/4}=x^{1/12}$.""",
            ),
            (
                r"The stacked fourth-on-cube root is recorded as $x^{7/12}$ for $x>0$.",
                False,
                r"""The exponent $7/12$ would be $1/3+1/4$. Stacked roots multiply the reciprocal exponents: $(1/3)\cdot(1/4)=1/12$.""",
            ),
            (
                r"A cube root of a square root, $\sqrt[3]{\sqrt{x}}=x^{1/6}$ on $x>0$.",
                True,
                r"""$(x^{1/2})^{1/3}=x^{1/6}$.""",
            ),
            (
                r"A fourth root of a cube, $\sqrt[4]{x^3}=x^{4/3}$ on $x>0$.",
                False,
                r"""$(x^3)^{1/4}=x^{3/4}$, not $x^{4/3}$. The fraction $4/3$ inverts the correct $3/4$.""",
            ),
            (
                r"A square-root tower $\sqrt{\sqrt{\sqrt{x}}}$ is claimed to equal $x^{1/6}$ on $x>0$.",
                False,
                r"""$\sqrt{\sqrt{\sqrt{x}}}=(x^{1/2})^{1/2\cdot 1/2}=x^{1/8}$, not $x^{1/6}$. Three square roots multiply three factors $1/2$.""",
            ),
        ],
        overview="Stacked roots multiply their reciprocal exponents: a cube root inside a fourth root is $x^{1/12}$. Adding $1/3+1/4$ is the wrong operation.",
    ),
    task(
        title="Reciprocal powers and one substituted square",
        subsection="2.3",
        difficulty="4/5",
        context=r"Negative exponents are read as reciprocals. One line rewrites a given power $3^y=2$ by exponent algebra, without solving for $y$.",
        items=[
            (
                r"The reciprocal cube $x^{-3}=1/x^3$ holds for every $x\neq 0$.",
                True,
                r"""By definition $x^{-n}=1/x^n$ with $n=3$.""",
            ),
            (
                r"A sign error writes $x^{-3}=-x^3$ for every $x\neq 0$.",
                False,
                r"""A negative exponent is a reciprocal, not a change of sign. For $x=2$, $2^{-3}=1/8$ while $-2^3=-8$.""",
            ),
            (
                r"Inverting a negative fourth power, $1/x^{-4}=x^4$ for $x\neq 0$.",
                True,
                r"""$1/x^{-4}=x^{4}$ because $x^{-(-4)}=x^{4}$.""",
            ),
            (
                r"Given that $3^y=2$, the rewrite $9^y=4$ follows.",
                True,
                r"""$9^y=(3^2)^y=(3^y)^2=2^2=4$. This substitutes the given power; it does not solve for $y$.""",
            ),
            (
                r"Multiplying two copies, a claim $x^{-1}x^{-1}=x^{-1}$ is made for $x\neq 0$.",
                False,
                r"""Add the exponents: $-1+(-1)=-2$, so $x^{-1}x^{-1}=x^{-2}=1/x^2$.""",
            ),
        ],
        overview="Negative exponents are reciprocals, not minus signs. Given $3^y=2$, one may rewrite $9^y=(3^y)^2=4$ without solving the exponential equation.",
    ),
    task(
        title="Power of a quotient versus a swapped pair",
        subsection="2.3",
        difficulty="4/5",
        context=r"Quotients of two positive letters $x$ and $y$ are raised to integer powers, including a swap from a negative exponent.",
        items=[
            (
                r"The swapped-quotient identity $(x/y)^{-2}=(y/x)^2$ holds for $x,y>0$.",
                True,
                r"""$(x/y)^{-2}=\bigl((x/y)^{-1}\bigr)^2=(y/x)^2$.""",
            ),
            (
                r"Raising a ratio, $(x/y)^k=x^k/y^k$ for $x,y>0$ and integer $k$.",
                True,
                r"""A power of a quotient splits: $(x/y)^k=x^k y^{-k}=x^k/y^k$.""",
            ),
            (
                r"A mistaken swap writes $(x/y)^{-2}=x^2/y^2$ for $x,y>0$.",
                False,
                r"""$(x/y)^{-2}=(y/x)^2=y^2/x^2$, the reciprocal of $x^2/y^2$. The claimed form is $(x/y)^2$, missing the minus on the exponent.""",
            ),
            (
                r"The matching form $x^k/y^k=(x/y)^k$ holds for $x,y>0$.",
                True,
                r"""This is the same splitting rule read right to left.""",
            ),
            (
                r"Inverting first, a claim $(x^{-1}/y^{-1})^2=x^2/y^2$ is made for $x,y\neq 0$.",
                False,
                r"""$x^{-1}/y^{-1}=y/x$, so the square is $y^2/x^2$, not $x^2/y^2$.""",
            ),
        ],
        overview="A negative exponent on a quotient swaps numerator and denominator. $(x/y)^{-2}=(y/x)^2$, which is not $x^2/y^2$.",
    ),
    task(
        title="Cube roots of products and of sums",
        subsection="2.3",
        difficulty="4/5",
        context=r"Cube-root algebra in the letters $a$ and $b$, plus a positive $x$ and one numerical factorisation of $24$.",
        items=[
            (
                r"The cube-root product $\sqrt[3]{a}\sqrt[3]{b}=\sqrt[3]{ab}$ holds for all real $a,b$.",
                True,
                r"""Cube roots are defined on all reals, and
$$\sqrt[3]{a}\sqrt[3]{b}=a^{1/3}b^{1/3}=(ab)^{1/3}=\sqrt[3]{ab}.$$""",
            ),
            (
                r"Splitting a cube-root of a sum is claimed: $\sqrt[3]{a+b}=\sqrt[3]{a}+\sqrt[3]{b}$ identically for real $a,b$.",
                False,
                r"""Cube roots do not split over addition. For $a=b=1$, $\sqrt[3]{2}\neq 2$.""",
            ),
            (
                r"Extracting an even power, $\sqrt[3]{x^6}=x^2$ on $x>0$.",
                True,
                r"""$(x^6)^{1/3}=x^{2}$ on $x>0$.""",
            ),
            (
                r"Factoring a numerical cube, $\sqrt[3]{24}=8\sqrt[3]{3}$.",
                False,
                r"""$24=8\cdot 3$ and $\sqrt[3]{8}=2$, so $\sqrt[3]{24}=2\sqrt[3]{3}$, not $8\sqrt[3]{3}$. The $8$ is the factor inside the radicand, not the coefficient.""",
            ),
            (
                r"A leftover claim $\sqrt[3]{x^6}=x$ is recorded for $x>0$.",
                False,
                r"""The exponent $6/3=2$, so the result is $x^2$, not $x$.""",
            ),
        ],
        overview="Cube roots split over products, not over sums. On $x>0$, $\\sqrt[3]{x^6}=x^2$. Numerically $\\sqrt[3]{24}=2\\sqrt[3]{3}$.",
    ),
    task(
        title="Three exponents that cancel on a positive base",
        subsection="2.3",
        difficulty="5/5",
        context=r"Powers of a positive $x$ carry integer exponents $m$ and $n$, plus one substituted square of a given power of $2$. Do not solve for the unknown exponent.",
        items=[
            (
                r"Three powers multiplying, $x^{m}x^{n}x^{-m-n}=1$ for $x>0$.",
                True,
                r"""Add the exponents: $m+n+(-m-n)=0$, so the product is $x^0=1$.""",
            ),
            (
                r"From a given $2^k=3$, the rewrite $4^k=9$ follows.",
                True,
                r"""$4^k=(2^2)^k=(2^k)^2=3^2=9$. This is substitution, not solving $2^k=3$.""",
            ),
            (
                r"A product-of-powers slip writes $x^{m}x^{n}=x^{mn}$ for $x>0$.",
                False,
                r"""The product rule adds exponents: $x^m x^n=x^{m+n}$. Multiplication of exponents is the stacked rule $(x^m)^n$.""",
            ),
            (
                r"A rational-power identity $(x^{m/n})^{n}=x^{m}$ holds for $x>0$ and $n\neq 0$.",
                True,
                r"""Multiply the exponents: $\frac{m}{n}\cdot n=m$, so $(x^{m/n})^n=x^m$ on $x>0$.""",
            ),
            (
                r"A mistaken quotient rule $x^{m}/x^{n}=x^{m/n}$ is claimed for $x>0$.",
                False,
                r"""A quotient of powers subtracts exponents: $x^m/x^n=x^{m-n}$. The ratio of exponents $m/n$ is a different operation.""",
            ),
        ],
        overview="Products add exponents; stacked powers multiply them; quotients subtract them. Given $2^k=3$, one may still rewrite $4^k=(2^k)^2=9$.",
    ),
    task(
        title="Mixed leftover traps from the powers subsection",
        subsection="2.3",
        difficulty="5/5",
        context=r"Five leftover traps from powers and roots, each with its own domain in $x$, $y$, $a$, or $b$.",
        items=[
            (
                r"A leftover nested form, $\sqrt{x^3}=x^{3/2}$ on $x>0$.",
                True,
                r"""$\sqrt{x^3}=(x^3)^{1/2}=x^{3/2}$ on $x>0$. Equivalently $x\sqrt{x}$.""",
            ),
            (
                r"Dividing two square roots, $\sqrt{a}/\sqrt{b}=\sqrt{a/b}$ on $a\ge 0$, $b>0$.",
                True,
                r"""$\frac{a^{1/2}}{b^{1/2}}=\bigl(\frac{a}{b}\bigr)^{1/2}=\sqrt{a/b}$.""",
            ),
            (
                r"A false binomial square $(\sqrt{x}+\sqrt{y})^2=x+y$ is claimed for $x,y>0$.",
                False,
                r"""$(\sqrt{x}+\sqrt{y})^2=x+2\sqrt{xy}+y$, not $x+y$. The cross term $2\sqrt{xy}$ is missing.""",
            ),
            (
                r"Raising a two-thirds power, $(x^{2/3})^3=x^2$ holds on $x>0$.",
                True,
                r"""Multiply the exponents: $\frac{2}{3}\cdot 3=2$, so $(x^{2/3})^3=x^2$.""",
            ),
            (
                r"A product of two copies $\sqrt{x}\cdot\sqrt{x}$ is said to equal $x^{1/4}$ on $x>0$.",
                False,
                r"""$\sqrt{x}\cdot\sqrt{x}=x^{1/2+1/2}=x$, not $x^{1/4}$. The exponent $1/4$ would be a nested square root $\sqrt{\sqrt{x}}$.""",
            ),
        ],
        overview="Fractional powers still add, subtract, and multiply in the usual way. Square roots split over products and quotients, but a binomial square of roots keeps the cross term $2\\sqrt{xy}$.",
    ),
]


