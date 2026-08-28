from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="A stacked power compared with a product after a rewrite",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Denesting $\sqrt{14+2\sqrt{13}}$ is claimed to produce $1+\sqrt{13}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                True,
                r"""Square the candidate conjugate:

Square:

$$(1+\sqrt{13})^2=1+2\sqrt{13}+13=14+2\sqrt{13}$$

Both $1+\sqrt{13}$ and the principal square root are positive, so they coincide.""",
            ),
            (
                r"On $w\neq 0$, simplifying $w^{5}w^{-2}/w^{-1}$ is claimed to leave $w^{4}$. A marker then substitutes $w=2$ and ticks $16$.",
                True,
                
            ),
            (
                r"""On the nonnegative reals, the product identity $\sqrt{2}\sqrt{8}=\sqrt{16}=4$ is accepted; a competing note that would replace the product by $\sqrt{2}+\sqrt{8}$ is rejected.""",
                True,
                r"""A product of principal square roots is the principal root of the product:

Identity:

$$\sqrt{2}\sqrt{8}=\sqrt{16}=4$$

By contrast $(\sqrt{2}+\sqrt{8})^2=2+8+2\sqrt{16}\neq 16$ in general.""",
            ),
            (
                r"Provided $a\neq 0$, rewriting $a^{-4}(a^{2})^{2}$ as $1$ is accepted, because the second factor is said to cancel the first.",
                True,
                
            ),
            (
                r"For $b\neq 0$, a candidate records $((b^{-1})^{2})^{-1}$ as $b^{-3}$, mixing a stack with the product $b^{-1}b^{-2}$.",
                False,
                
            ),
        ],
        overview=r"Five independent exponent claims. A stack multiplies; a product adds. After rewriting, $(x^{-2})^{-3}=x^{6}$ is not the same as $x^{-2}x^{-3}=x^{-5}$.",
    ),
    task(
        title="A minus in the denominator that has to be flipped twice",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Clearing $\dfrac{p^{3}p^{-1}}{p^{-2}}$ for $p\neq 0$ is recorded as $p^{4}$. Substituting $p=2$ is then said to recover $16$.",
                True,
                
            ),
            (
                r"Working with $q\neq 0$, a slip writes $\dfrac{1}{q^{-3}}=-q^{3}$, reading the minus in the exponent as a change of sign.",
                False,
                
            ),
            (
                r"Provided $r\neq 0$, inverting $\dfrac{r^{-4}}{r^{-1}}$ is claimed to leave $r^{-3}$, the same monomial as the uninverted quotient.",
                False,
                
            ),
            (
                r"""On the nonnegative reals, the product identity $\sqrt{4}\sqrt{9}=\sqrt{36}=6$ is accepted; a competing note that would replace the product by $\sqrt{4}+\sqrt{9}$ is rejected.""",
                True,
                r"""A product of principal square roots is the principal root of the product:

Identity:

$$\sqrt{4}\sqrt{9}=\sqrt{36}=6$$

By contrast $(\sqrt{4}+\sqrt{9})^2=4+9+2\sqrt{36}\neq 36$ in general.""",
            ),
            (
                r"On $u\neq 0$, rewriting $\dfrac{u^{-1}+u^{-2}}{u^{-2}}$ as $u+1$ is accepted after a common denominator is cleared in the numerator.",
                True,
                
            ),
        ],
        overview=r"Five independent reciprocal-power checks. A minus in a denominator flips when the quotient is written as a product; inverting a simplified quotient is a further step.",
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
                
            ),
            (
                r"""On the nonnegative reals, the product identity $\sqrt{8}\sqrt{2}=\sqrt{16}=4$ is accepted; a competing note that would replace the product by $\sqrt{8}+\sqrt{2}$ is rejected.""",
                True,
                r"""A product of principal square roots is the principal root of the product:

Identity:

$$\sqrt{8}\sqrt{2}=\sqrt{16}=4$$

By contrast $(\sqrt{8}+\sqrt{2})^2=8+2+2\sqrt{16}\neq 16$ in general.""",
            ),
            (
                r"On $c,d\ge 0$, the product rule $\sqrt{c}\sqrt{d}=\sqrt{cd}$ is printed as valid.",
                True,
                
            ),
            (
                r"""On $q\neq 0$, simplifying $\dfrac{q^{5}q^{-2}}{q^{-1}}$ by adding exponents in the numerator then subtracting the denominator leaves $q^{4}$.""",
                True,
                r"""Numerator:

$$q^{5}q^{-2}=q^{3}$$

Quotient:

$$\frac{q^{3}}{q^{-1}}=q^{4}$$""",
            ),
            (
                r"A booklet claims $\sqrt{27}\sqrt{3}=9$ as positive square roots.",
                True,
                
            ),
        ],
        overview=r"Five independent surd claims. Products of square roots may pass inside one radicand; sums may not. $\sqrt{12}\sqrt{3}=6$, but $\sqrt{18}+\sqrt{32}\neq\sqrt{50}$.",
    ),
    task(
        title="Zero exponents mixed with a cancelled stack",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Whenever $a\neq 0$, rewriting $\dfrac{a^{5}}{a^{5}}$ as $a^{0}$ and then as $1$ is accepted.",
                True,
                
            ),
            (
                r"A booklet treats $0^{-3}\cdot 0^{3}$ as $0^{0}$ and then as $1$, by the product rule for exponents.",
                False,
                
            ),
            (
                r"On $x\neq 0$, cancelling $x^{3}x^{-3}x^{0}$ is claimed to leave $x^{0}$, hence $1$.",
                True,
                
            ),
            (
                r"Treating $(2b)^{0}=2b^{0}$ for every $b\neq 0$ is offered, so the left side is read as $2$.",
                False,
                
            ),
            (
                r"""Whenever $a>0$, a note treats $((a^{2})^{3})^{1/2}$ as $a^{3}$, multiplying exponents inward before the outer root.""",
                True,
                r"""Power of a power multiplies, working inside out:

Inner:

$$(a^{2})^{3}=a^{6}$$

Outer root:

$$(a^{6})^{1/2}=a^{3}$$

The printed target matches.""",
            ),
        ],
        overview=r"Five independent zero-exponent claims. On a nonzero base, $a^{0}=1$. A negative power of $0$ is undefined; $(2b)^{0}$ is not $2b^{0}$.",
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
                
            ),
            (
                r"Rewriting $32^{2/5}$ as $8$ is entered on a mark scheme.",
                False,
                
            ),
            (
                r"""For $w\neq 0$, rewriting $(w^{-2})^{-3}$ as $w^{6}$ is accepted; comparing with the product $w^{-2}w^{-3}=w^{-5}$ shows the two rules diverge.""",
                True,
                r"""Power of a power:

$$(w^{-2})^{-3}=w^{6}$$

Product rule:

$$w^{-2}w^{-3}=w^{-5}$$

The stacked form is $$w^{6}$$; the product is different.""",
            ),
            (
                r"Extracting $\sqrt[3]{54}$ as $3\sqrt[3]{2}$ is claimed in the reals.",
                True,
                
            ),
            (
                r"""Denesting $\sqrt{14+2\sqrt{13}}$ is claimed to produce $\sqrt{13}-1$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                False,
                r"""Square the printed difference:

Square:

$$(\sqrt{13}-1)^2=13-2\sqrt{13}+1=14-2\sqrt{13}$$

The cross term has the wrong sign for $\sqrt{14+2\sqrt{13}}$.""",
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
                r"""On $q\neq 0$, simplifying $\dfrac{q^{5}q^{-2}}{q^{-1}}$ by adding exponents in the numerator then subtracting the denominator leaves $q^{4}$, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Numerator:

$$q^{5}q^{-2}=q^{3}$$

Quotient:

$$\frac{q^{3}}{q^{-1}}=q^{4}$$

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Reducing $\sqrt{12}+\sqrt{27}$ is claimed to equal $\sqrt{39}$.",
                False,
                
            ),
            (
                r"Extracting $\sqrt{32}=4\sqrt{2}$ as a positive square root is accepted.",
                True,
                
            ),
            (
                r"A note writes $\sqrt{45}-\sqrt{20}=\sqrt{25}$ as positive roots.",
                False,
                
            ),
            (
                r"Taking positive roots, $\sqrt{8}+\sqrt{18}$ is rewritten as $5\sqrt{2}$.",
                True,
                
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
                r"""Denesting $\sqrt{16+6\sqrt{7}}$ is claimed to produce $\sqrt{7}-3$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                False,
                r"""Square:

$$(\sqrt{7}-3)^2=7-6\sqrt{7}+9=16-6\sqrt{7}$$

Wrong sign; also negative.""",
            ),
            (
                r"A mistaken swap writes $(p/q)^{-3}=p^{3}/q^{3}$ for $p,q>0$.",
                False,
                
            ),
            (
                r"Whenever $u,v>0$, treating $(u/v)^{4}=u^{4}/v^{4}$ is accepted.",
                True,
                
            ),
            (
                r"""Denesting $\sqrt{16+6\sqrt{7}}$ is claimed to produce $\sqrt{7}-3$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Square:

$$(\sqrt{7}-3)^2=7-6\sqrt{7}+9=16-6\sqrt{7}$$

Wrong sign; also negative.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"On $c,d>0$, rewriting $(c/d)^{0}=0$ is printed as valid.",
                False,
                
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
                
            ),
            (
                r"""Denesting $\sqrt{9+4\sqrt{5}}$ is claimed to produce $\sqrt{5}-2$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                False,
                r"""Square:

$$(\sqrt{5}-2)^2=5-4\sqrt{5}+4=9-4\sqrt{5}$$

Wrong sign.""",
            ),
            (
                r"Extracting $\sqrt[3]{54}=3\sqrt[3]{2}$ in the reals is accepted.",
                True,
                
            ),
            (
                r"A student writes $\sqrt[3]{24}=8\sqrt[3]{3}$ in the reals.",
                False,
                
            ),
            (
                r"Factoring $\sqrt[3]{32}$ as $4\sqrt[3]{2}$ is recorded as valid.",
                False,
                
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
                
            ),
            (
                r"""A candidate replaces $\sqrt{5+b}$ by $\sqrt{5}+\sqrt{5}$ and, after checking the single case where one radicand vanishes, treats the split as an identity on all nonnegative $a,b$.""",
                False,
                r"""Square roots do not split over addition:

Square the sum:

$$(\sqrt{5}+\sqrt{5})^2=5+5+2\sqrt{25}$$

For a concrete counter-example take equal radicands $1$: $\sqrt{2}\neq 2$.""",
            ),
            (
                r"Working with $z>0$, the stack $(z^{1/3})^{-3/2}$ is rewritten as $z^{-1/2}$.",
                True,
                
            ),
            (
                r"Someone records $(w^{2/3})^{3}=w^{5/3}$ for $w>0$, adding the exponents.",
                False,
                
            ),
            (
                r"""A candidate replaces $\sqrt{5+b}$ by $\sqrt{5}+\sqrt{5}$ and, after checking the single case where one radicand vanishes, treats the split as an identity on all nonnegative $a,b$, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Square roots do not split over addition:

Square the sum:

$$(\sqrt{5}+\sqrt{5})^2=5+5+2\sqrt{25}$$

For a concrete counter-example take equal radicands $1$: $\sqrt{2}\neq 2$.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                
            ),
            (
                r"Squaring $\sqrt{5}+\sqrt{3}$ is recorded as $8+2\sqrt{15}$ in the positive reals.",
                True,
                
            ),
            (
                r"""On the nonnegative reals, the product identity $\sqrt{2}\sqrt{18}=\sqrt{36}=6$ is accepted; a competing note that would replace the product by $\sqrt{2}+\sqrt{18}$ is rejected.""",
                True,
                r"""A product of principal square roots is the principal root of the product:

Identity:

$$\sqrt{2}\sqrt{18}=\sqrt{36}=6$$

By contrast $(\sqrt{2}+\sqrt{18})^2=2+18+2\sqrt{36}\neq 36$ in general.""",
            ),
            (
                r"A naive split writes $\sqrt{12+2\sqrt{32}}=\sqrt{12}+\sqrt{32}$ as positive square roots.",
                False,
                
            ),
            (
                r"Taking positive roots, $\sqrt{8-2\sqrt{15}}$ is accepted as $\sqrt{5}-\sqrt{3}$.",
                True,
                
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
                r"""A candidate replaces $\sqrt{4+b}$ by $\sqrt{4}+\sqrt{4}$ and, after checking the single case where one radicand vanishes, treats the split as an identity on all nonnegative $a,b$.""",
                False,
                r"""Square roots do not split over addition:

Square the sum:

$$(\sqrt{4}+\sqrt{4})^2=4+4+2\sqrt{16}$$

For a concrete counter-example take equal radicands $1$: $\sqrt{2}\neq 2$.""",
            ),
            (
                r"Clearing $1/(\sqrt{5}-\sqrt{3})$ is claimed to equal $(\sqrt{5}-\sqrt{3})/2$, the conjugate already in the denominator.",
                False,
                
            ),
            (
                r"""For $x\neq 0$, rewriting $(x^{-2})^{-3}$ as $x^{6}$ is accepted; comparing with the product $x^{-2}x^{-3}=x^{-5}$ shows the two rules diverge.""",
                True,
                r"""Power of a power:

$$(x^{-2})^{-3}=x^{6}$$

Product rule:

$$x^{-2}x^{-3}=x^{-5}$$

The stacked form is $$x^{6}$$; the product is different.""",
            ),
            (
                r"Someone rationalises $4/(\sqrt{18}-\sqrt{8})$ and claims the value $\sqrt{18}+\sqrt{8}$ without dividing by the difference of squares.",
                False,
                
            ),
            (
                r"On the positive denominator $\sqrt{5}-1$, the unit $1/(\sqrt{5}-1)$ is rewritten as $(\sqrt{5}+1)/4$.",
                True,
                
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
                
            ),
            (
                r"Expanding $\bigl(\sqrt{y}+y^{-1/2}\bigr)^{2}$ for $y>0$ is claimed to equal $y+2+1/y$.",
                True,
                
            ),
            (
                r"Whenever $t>0$, the product $\sqrt{t}\cdot t^{-1/2}$ is accepted as $1$.",
                True,
                
            ),
            (
                r"""On $w\neq 0$, simplifying $\dfrac{w^{5}w^{-2}}{w^{-1}}$ by adding exponents in the numerator then subtracting the denominator leaves $w^{4}$.""",
                True,
                r"""Numerator:

$$w^{5}w^{-2}=w^{3}$$

Quotient:

$$\frac{w^{3}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"Working with $w>0$, $\bigl(\sqrt{w}-1/\sqrt{w}\bigr)^{2}$ is rewritten as $(w-1)^{2}/w$.",
                True,
                
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
                
            ),
            (
                r"""Whenever $q>0$, a note treats $((q^{2})^{3})^{1/2}$ as $q^{3}$, multiplying exponents inward before the outer root.""",
                True,
                r"""Power of a power multiplies, working inside out:

Inner:

$$(q^{2})^{3}=q^{6}$$

Outer root:

$$(q^{6})^{1/2}=q^{3}$$

The printed target matches.""",
            ),
            (
                r"From $2^{k}=5$, a student concludes $2^{3k}=15$.",
                False,
                
            ),
            (
                r"""Denesting $\sqrt{7+4\sqrt{3}}$ is claimed to produce $\sqrt{3}-2$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                False,
                r"""Square:

$$(\sqrt{3}-2)^2=3-4\sqrt{3}+4=7-4\sqrt{3}$$

Wrong sign on the middle term; also $\sqrt{3}-2<0$ cannot be a principal root.""",
            ),
            (
                r"Starting from $5^{t}=4$, a slip writes $25^{t}=8$.",
                False,
                
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
                
            ),
            (
                r"A note claims $(a^{m})^{k}=a^{m+k}$ identically for $a>0$.",
                False,
                
            ),
            (
                r"Whenever $c,d>0$, treating $(c^{2}d^{3})^{4}$ as $c^{8}d^{12}$ is accepted.",
                True,
                
            ),
            (
                r"Someone records $(p^{3}q^{-1})^{2}=p^{5}q$ for $p,q>0$, adding $2$ to the first exponent.",
                False,
                
            ),
            (
                r"""Denesting $\sqrt{8+2\sqrt{15}}$ is claimed to produce $\sqrt{5}-\sqrt{3}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                False,
                r"""Square:

$$(\sqrt{5}-\sqrt{3})^2=5-2\sqrt{15}+3=8-2\sqrt{15}$$

Wrong sign.""",
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
                
            ),
            (
                r"Reducing $32^{3/5}$ to $4$ is treated as correct.",
                False,
                
            ),
            (
                r"""Denesting $\sqrt{10+4\sqrt{6}}$ is claimed to produce $\sqrt{6}-2$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                False,
                r"""Square:

$$(\sqrt{6}-2)^2=6-4\sqrt{6}+4=10-4\sqrt{6}$$

Wrong sign.""",
            ),
            (
                r"A candidate records $\sqrt{18}\cdot\sqrt{8}=\sqrt{26}$ as positive square roots.",
                False,
                
            ),
            (
                r"""On the nonnegative reals, the product identity $\sqrt{9}\sqrt{4}=\sqrt{36}=6$ is accepted; a competing note that would replace the product by $\sqrt{9}+\sqrt{4}$ is rejected.""",
                True,
                r"""A product of principal square roots is the principal root of the product:

Identity:

$$\sqrt{9}\sqrt{4}=\sqrt{36}=6$$

By contrast $(\sqrt{9}+\sqrt{4})^2=9+4+2\sqrt{36}\neq 36$ in general.""",
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
                r"""Denesting $\sqrt{14+2\sqrt{13}}$ is claimed to produce $1+\sqrt{13}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Square the candidate conjugate:

Square:

$$(1+\sqrt{13})^2=1+2\sqrt{13}+13=14+2\sqrt{13}$$

Both $1+\sqrt{13}$ and the principal square root are positive, so they coincide.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"A slip expands $8^{m}$ as $2^{m+3}$ as an identity in the integer $m$.",
                False,
                
            ),
            (
                r"Reducing $2^{m+n}4^{m-n}/8^{m}$ to $2^{-n}$ for integers $m,n$ is recorded as valid.",
                True,
                
            ),
            (
                r"Someone writes $32^{k}=2^{k+5}$ for every integer $k$.",
                False,
                
            ),
            (
                r"On integer $n$, rewriting $4^{n}/2^{n}=2^{n}$ is accepted.",
                True,
                
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
                r"""On the nonnegative reals, the product identity $\sqrt{4}\sqrt{9}=\sqrt{36}=6$ is accepted; a competing note that would replace the product by $\sqrt{4}+\sqrt{9}$ is rejected, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""A product of principal square roots is the principal root of the product:

Identity:

$$\sqrt{4}\sqrt{9}=\sqrt{36}=6$$

By contrast $(\sqrt{4}+\sqrt{9})^2=4+9+2\sqrt{36}\neq 36$ in general.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Combining $\sqrt[4]{16}\sqrt[4]{81}$ as positive fourth roots is claimed to equal $12$.",
                False,
                
            ),
            (
                r"A student writes $\sqrt[4]{x^{4}}=x^{2}$ for every $x>0$.",
                False,
                
            ),
            (
                r"""On the nonnegative reals, the product identity $\sqrt{4}\sqrt{9}=\sqrt{36}=6$ is accepted; a competing note that would replace the product by $\sqrt{4}+\sqrt{9}$ is rejected, and a margin check at the probe value equal to $1$ is cited as supporting evidence.""",
                True,
                r"""A product of principal square roots is the principal root of the product:

Identity:

$$\sqrt{4}\sqrt{9}=\sqrt{36}=6$$

By contrast $(\sqrt{4}+\sqrt{9})^2=4+9+2\sqrt{36}\neq 36$ in general.

A single probe at $1$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Someone records $\sqrt[4]{32}=4\sqrt[4]{2}$ as a positive fourth root.",
                False,
                
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
                
            ),
            (
                r"""On the nonnegative reals, the product identity $\sqrt{8}\sqrt{2}=\sqrt{16}=4$ is accepted; a competing note that would replace the product by $\sqrt{8}+\sqrt{2}$ is rejected, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""A product of principal square roots is the principal root of the product:

Identity:

$$\sqrt{8}\sqrt{2}=\sqrt{16}=4$$

By contrast $(\sqrt{8}+\sqrt{2})^2=8+2+2\sqrt{16}\neq 16$ in general.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Subtracting exponents, $d^{5}/d^{-2}=d^{7}$ for $d\neq 0$ is accepted.",
                True,
                
            ),
            (
                r"A candidate records $e^{-3}/e^{4}=e$ for $e\neq 0$.",
                False,
                
            ),
            (
                r"Provided $f\neq 0$, inverting $1/f^{-5}$ is rewritten as $f^{5}$.",
                True,
                
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
                
            ),
            (
                r"""Whenever $a>0$, a note treats $((a^{2})^{3})^{1/2}$ as $a^{3}$, multiplying exponents inward before the outer root, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Power of a power multiplies, working inside out:

Inner:

$$(a^{2})^{3}=a^{6}$$

Outer root:

$$(a^{6})^{1/2}=a^{3}$$

The printed target matches.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"On $z>0$, a cube root of a square $\sqrt[3]{z^{2}}$ is rewritten as $z^{2/3}$.",
                True,
                
            ),
            (
                r"A fourth root of a cube, $\sqrt[4]{w^{3}}$ is claimed to equal $w^{4/3}$ on $w>0$.",
                False,
                
            ),
            (
                r"""Whenever $w>0$, a note treats $((w^{2})^{3})^{1/2}$ as $w^{3}$, multiplying exponents inward before the outer root.""",
                True,
                r"""Power of a power multiplies, working inside out:

Inner:

$$(w^{2})^{3}=w^{6}$$

Outer root:

$$(w^{6})^{1/2}=w^{3}$$

The printed target matches.""",
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
                
            ),
            (
                r"Adding radicands, $(\sqrt{12}+\sqrt{3})(\sqrt{12}-\sqrt{3})$ is claimed to equal $15$.",
                False,
                
            ),
            (
                r"""For $q\neq 0$, rewriting $(q^{-2})^{-3}$ as $q^{6}$ is accepted; comparing with the product $q^{-2}q^{-3}=q^{-5}$ shows the two rules diverge.""",
                True,
                r"""Power of a power:

$$(q^{-2})^{-3}=q^{6}$$

Product rule:

$$q^{-2}q^{-3}=q^{-5}$$

The stacked form is $$q^{6}$$; the product is different.""",
            ),
            (
                r"A note writes $(\sqrt{8}-\sqrt{2})^{2}=6$ as an identity on the positive reals.",
                False,
                
            ),
            (
                r"On $p,q\ge 0$, $(\sqrt{p}+\sqrt{q})^{2}=p+q+2\sqrt{pq}$ is printed as valid.",
                True,
                
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
                r"""On $x\neq 0$, simplifying $\dfrac{x^{5}x^{-2}}{x^{-1}}$ by adding exponents in the numerator then subtracting the denominator leaves $x^{4}$.""",
                True,
                r"""Numerator:

$$x^{5}x^{-2}=x^{3}$$

Quotient:

$$\frac{x^{3}}{x^{-1}}=x^{4}$$""",
            ),
            (
                r"A slip writes the stack $(y^{-1/3})^{6}=y^{-1/18}$ for $y>0$.",
                False,
                
            ),
            (
                r"""Denesting $\sqrt{11+6\sqrt{2}}$ is claimed to produce $3-\sqrt{2}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                False,
                r"""Square:

$$(3-\sqrt{2})^2=9-6\sqrt{2}+2=11-6\sqrt{2}$$

Wrong middle sign.""",
            ),
            (
                r"Someone records $(b^{-2}c^{1/2})^{4}=b^{2}c^{2}$ for $b,c>0$.",
                False,
                
            ),
            (
                r"Working with $u,v>0$, $(u^{-1}v^{3})^{2}(u^{2}v^{-1})^{3}$ is claimed to equal $u^{4}v^{3}$.",
                True,
                
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
                
            ),
            (
                r"Given $2^{k}=5$, rewriting $2^{3k}$ as $125$ is accepted without solving for $k$.",
                True,
                
            ),
            (
                r"Working with $x>0$, the expansion of $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}$ is recorded as $x-2+1/x$.",
                True,
                
            ),
            (
                r"""Denesting $\sqrt{16+6\sqrt{7}}$ is claimed to produce $\sqrt{7}-3$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $1$ is cited as supporting evidence.""",
                False,
                r"""Square:

$$(\sqrt{7}-3)^2=7-6\sqrt{7}+9=16-6\sqrt{7}$$

Wrong sign; also negative.

A single probe at $1$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Rationalising $1/(\sqrt{48}-\sqrt{12})$ is claimed to equal $\sqrt{48}+\sqrt{12}$.",
                False,
                
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
                
            ),
            (
                r"""Denesting $\sqrt{9+4\sqrt{5}}$ is claimed to produce $\sqrt{5}-2$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Square:

$$(\sqrt{5}-2)^2=5-4\sqrt{5}+4=9-4\sqrt{5}$$

Wrong sign.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Expanding only a cube, $(p^{2}q^{-3})^{3}=p^{6}q^{-9}$ on $p,q>0$ is accepted.",
                True,
                
            ),
            (
                r"""On the nonnegative reals, the product identity $\sqrt{5}\sqrt{20}=\sqrt{100}=10$ is accepted; a competing note that would replace the product by $\sqrt{5}+\sqrt{20}$ is rejected.""",
                True,
                r"""A product of principal square roots is the principal root of the product:

Identity:

$$\sqrt{5}\sqrt{20}=\sqrt{100}=10$$

By contrast $(\sqrt{5}+\sqrt{20})^2=5+20+2\sqrt{100}\neq 100$ in general.""",
            ),
            (
                r"Collecting $u^{6}v^{-4}/(u^{-2}v^{3})$ for $u,v>0$ is rewritten as $u^{8}/v^{7}$.",
                True,
                
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
                
            ),
            (
                r"A three-storey cube nest $\sqrt[3]{y\sqrt[3]{y\sqrt[3]{y}}}$ is recorded as $y^{13/27}$ on $y>0$.",
                True,
                
            ),
            (
                r"On $z>0$, $\sqrt{z\sqrt{z\sqrt{z}}}$ is claimed to equal $z^{1/2}$.",
                False,
                
            ),
            (
                r"Stacking $\sqrt[4]{w^{2}}$ as $w^{1/2}$ for $w>0$ is accepted.",
                True,
                
            ),
            (
                r"""A candidate replaces $\sqrt{5+b}$ by $\sqrt{5}+\sqrt{5}$ and, after checking the single case where one radicand vanishes, treats the split as an identity on all nonnegative $a,b$, and a margin check at the probe value equal to $1$ is cited as supporting evidence.""",
                False,
                r"""Square roots do not split over addition:

Square the sum:

$$(\sqrt{5}+\sqrt{5})^2=5+5+2\sqrt{25}$$

For a concrete counter-example take equal radicands $1$: $\sqrt{2}\neq 2$.

A single probe at $1$ cannot replace the algebraic comparison above.""",
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
                
            ),
            (
                r"Dividing $(c-d)/(\sqrt{c}-\sqrt{d})$ for $c>d>0$ is claimed to leave $\sqrt{c}-\sqrt{d}$.",
                False,
                
            ),
            (
                r"""On the nonnegative reals, the product identity $\sqrt{2}\sqrt{18}=\sqrt{36}=6$ is accepted; a competing note that would replace the product by $\sqrt{2}+\sqrt{18}$ is rejected, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""A product of principal square roots is the principal root of the product:

Identity:

$$\sqrt{2}\sqrt{18}=\sqrt{36}=6$$

By contrast $(\sqrt{2}+\sqrt{18})^2=2+18+2\sqrt{36}\neq 36$ in general.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"A candidate cancels twice in $(\sqrt{u}-\sqrt{v})^{2}/(u-v)$ and obtains $1/(u-v)$ for $u>v>0$.",
                False,
                
            ),
            (
                r"""Whenever $x>0$, a note treats $((x^{2})^{3})^{1/2}$ as $x^{3}$, multiplying exponents inward before the outer root.""",
                True,
                r"""Power of a power multiplies, working inside out:

Inner:

$$(x^{2})^{3}=x^{6}$$

Outer root:

$$(x^{6})^{1/2}=x^{3}$$

The printed target matches.""",
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
                r"""A candidate replaces $\sqrt{4+b}$ by $\sqrt{4}+\sqrt{4}$ and, after checking the single case where one radicand vanishes, treats the split as an identity on all nonnegative $a,b$, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Square roots do not split over addition:

Square the sum:

$$(\sqrt{4}+\sqrt{4})^2=4+4+2\sqrt{16}$$

For a concrete counter-example take equal radicands $1$: $\sqrt{2}\neq 2$.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"A product-of-powers slip writes $x^{m}x^{n}=x^{mn}$ for $x>0$.",
                False,
                
            ),
            (
                r"A rational-power identity $(x^{m/n})^{n}=x^{m}$ holds for $x>0$ and $n\neq 0$.",
                True,
                
            ),
            (
                r"A mistaken quotient rule $x^{m}/x^{n}=x^{m/n}$ is claimed for $x>0$.",
                False,
                
            ),
            (
                r"Three powers multiplying, $t^{m}t^{n}t^{-m-n}=1$ for $t>0$ is accepted.",
                True,
                
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
                r"""On $w\neq 0$, simplifying $\dfrac{w^{5}w^{-2}}{w^{-1}}$ by adding exponents in the numerator then subtracting the denominator leaves $w^{4}$, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Numerator:

$$w^{5}w^{-2}=w^{3}$$

Quotient:

$$\frac{w^{3}}{w^{-1}}=w^{4}$$

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Denesting $\sqrt{12+2\sqrt{32}}$ is claimed to equal $\sqrt{8}-\sqrt{4}$.",
                False,
                
            ),
            (
                r"Rationalising $3/(\sqrt{5}-1)$ is recorded as $3(\sqrt{5}+1)/4$.",
                True,
                
            ),
            (
                r"""On $q\neq 0$, simplifying $\dfrac{q^{5}q^{-2}}{q^{-1}}$ by adding exponents in the numerator then subtracting the denominator leaves $q^{4}$, and a margin check at the probe value equal to $1$ is cited as supporting evidence.""",
                True,
                r"""Numerator:

$$q^{5}q^{-2}=q^{3}$$

Quotient:

$$\frac{q^{3}}{q^{-1}}=q^{4}$$

A single probe at $1$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Evaluating $32^{2/5}\cdot 27^{-1/3}$ as $4/3$ is accepted.",
                True,
                
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
                
            ),
            (
                r"""Whenever $x>0$, a note treats $((x^{2})^{3})^{1/2}$ as $x^{3}$, multiplying exponents inward before the outer root, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Power of a power multiplies, working inside out:

Inner:

$$(x^{2})^{3}=x^{6}$$

Outer root:

$$(x^{6})^{1/2}=x^{3}$$

The printed target matches.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Squaring a reciprocal, $z^{-2}=(z^{-1})^{2}$ for $z\neq 0$ is accepted.",
                True,
                
            ),
            (
                r"Someone records $w^{-1}+w^{-2}=w^{-3}$ for every $w\neq 0$.",
                False,
                
            ),
            (
                r"On $u\neq 0$, $u^{-4}u^{2}$ is claimed to equal $u^{-8}$.",
                False,
                
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
                
            ),
            (
                r"""Denesting $\sqrt{8+2\sqrt{15}}$ is claimed to produce $\sqrt{5}-\sqrt{3}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Square:

$$(\sqrt{5}-\sqrt{3})^2=5-2\sqrt{15}+3=8-2\sqrt{15}$$

Wrong sign.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"On $t>0$, $(t^{-3})^{2/3}=t^{-2}$ is accepted.",
                True,
                
            ),
            (
                r"Evaluating $16^{3/4}\cdot 8^{-1/3}$ as $2$ is entered.",
                False,
                
            ),
            (
                r"""Denesting $\sqrt{8+2\sqrt{15}}$ is claimed to produce $\sqrt{5}-\sqrt{3}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $1$ is cited as supporting evidence.""",
                False,
                r"""Square:

$$(\sqrt{5}-\sqrt{3})^2=5-2\sqrt{15}+3=8-2\sqrt{15}$$

Wrong sign.

A single probe at $1$ cannot replace the algebraic comparison above.""",
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
                
            ),
            (
                r"Dividing two square roots, $\sqrt{45}/\sqrt{5}=\sqrt{9}$ on the positive reals is claimed.",
                True,
                
            ),
            (
                r"""Denesting $\sqrt{10+4\sqrt{6}}$ is claimed to produce $\sqrt{6}-2$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Square:

$$(\sqrt{6}-2)^2=6-4\sqrt{6}+4=10-4\sqrt{6}$$

Wrong sign.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Raising a two-thirds power, $(x^{2/3})^{3}=x^{2}$ holds on $x>0$.",
                True,
                
            ),
            (
                r"A product of two copies $\sqrt{x}\cdot\sqrt{x}$ is said to equal $x^{1/4}$ on $x>0$.",
                False,
                
            ),
        ],
        overview=r"Five leftover independent claims. Fractional powers still add, subtract, and multiply in the usual way. A binomial square of roots keeps the cross term; $\sqrt{x}\cdot\sqrt{x}=x$.",
    ),
]
