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
                r"""For $p\neq 0$, $(2p^{-1}-1)(2p^{-1}+1)=\dfrac{4}{p^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=2p^{-1}$:

Expand:

$$(2p^{-1})^2-1=\frac{4}{p^2}-1$$

The coefficient on the reciprocal square is $4$, matching the claim.""",
            ),
            (
                r"On $w\neq 0$, simplifying $w^{5}w^{-2}/w^{-1}$ is claimed to leave $w^{4}$. A marker then substitutes $w=2$ and ticks $16$.",
                True,
                
            ),
            (
                r"""For positive $b$, raising $b$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $b$.""",
                True,
                r"""Translate the tower, multiplying exponents inside out:

Inner:

$$(b^{2})^{3}=b^{6}$$

Outer root:

$$(b^{6})^{1/2}=b^{3}$$

The wording matches the reduced power.""",
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
                r"""For $p\neq 0$, $(7p^{-1}-1)(7p^{-1}+1)=\dfrac{49}{p^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=7p^{-1}$:

Expand:

$$(7p^{-1})^2-1=\frac{49}{p^2}-1$$

The coefficient on the reciprocal square is $49$, matching the claim.""",
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
                r"""For positive $x$, raising $x$ to the second power, then to the third, and finally taking the principal square root of the result yields $x$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((x^{2})^{3})^{1/2}=x^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
            ),
            (
                r"On $c,d\ge 0$, the product rule $\sqrt{c}\sqrt{d}=\sqrt{cd}$ is printed as valid.",
                True,
                
            ),
            (
                r"""If $e>0$, then $\dfrac{e^{2/3}\cdot\sqrt[3]{e\sqrt{e}}}{e^{1/6}\cdot\sqrt[6]{e^5}}=\sqrt[6]{e}$.""",
                True,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$e^{2/3}\cdot(e\cdote^{1/2})^{1/3}=e^{2/3}\cdote^{(1+1/2)/3}=e^{2/3}\cdote^{1/2}$$

Denominator:

$$e^{1/6}\cdot(e^5)^{1/6}=e^{1/6}\cdote^{5/6}=e$$

Quotient:

$$\sqrt[6]{e}$$

The fully reduced power matches the printed right-hand side.""",
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
                r"""For positive $x$, raising $x$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $x$.""",
                True,
                r"""Translate the tower, multiplying exponents inside out:

Inner:

$$(x^{2})^{3}=x^{6}$$

Outer root:

$$(x^{6})^{1/2}=x^{3}$$

The wording matches the reduced power.""",
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
                r"""For positive $z$, raising $z$ to the second power, then to the third, and finally taking the principal square root of the result yields $z$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((z^{2})^{3})^{1/2}=z^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
            ),
            (
                r"Extracting $\sqrt[3]{54}$ as $3\sqrt[3]{2}$ is claimed in the reals.",
                True,
                
            ),
            (
                r"""For $r\neq 0$, $(6r^{-1}-1)(6r^{-1}+1)=\dfrac{1}{36r^2}-1$.""",
                False,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=6r^{-1}$:

Expand:

$$(6r^{-1})^2-1=\frac{36}{r^2}-1$$

The reciprocal square carries numerator $36$, not $1$. Swapping numerator and denominator is the last-step error.""",
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
                r"""If $a>0$, then $\dfrac{a^{2/3}\cdot\sqrt[3]{a\sqrt{a}}}{a^{1/6}\cdot\sqrt[6]{a^5}}=\sqrt[6]{a}$.""",
                True,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$a^{2/3}\cdot(a\cdota^{1/2})^{1/3}=a^{2/3}\cdota^{(1+1/2)/3}=a^{2/3}\cdota^{1/2}$$

Denominator:

$$a^{1/6}\cdot(a^5)^{1/6}=a^{1/6}\cdota^{5/6}=a$$

Quotient:

$$\sqrt[6]{a}$$

The fully reduced power matches the printed right-hand side.""",
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
                r"""For positive $k$, raising $k$ to the second power, then to the third, and finally taking the principal square root of the result yields $k$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((k^{2})^{3})^{1/2}=k^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
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
                r"""If $g>0$, then $\dfrac{g^{2/3}\cdot\sqrt[3]{g\sqrt{g}}}{g^{1/6}\cdot\sqrt[6]{g^5}}=\sqrt[6]{g}$.""",
                True,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$g^{2/3}\cdot(g\cdotg^{1/2})^{1/3}=g^{2/3}\cdotg^{(1+1/2)/3}=g^{2/3}\cdotg^{1/2}$$

Denominator:

$$g^{1/6}\cdot(g^5)^{1/6}=g^{1/6}\cdotg^{5/6}=g$$

Quotient:

$$\sqrt[6]{g}$$

The fully reduced power matches the printed right-hand side.""",
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
                r"""For $k\neq 0$, $(6k^{-1}-1)(6k^{-1}+1)=\dfrac{1}{36k^2}-1$.""",
                False,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=6k^{-1}$:

Expand:

$$(6k^{-1})^2-1=\frac{36}{k^2}-1$$

The reciprocal square carries numerator $36$, not $1$. Swapping numerator and denominator is the last-step error.""",
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
                r"""If $j>0$, then $\dfrac{j^{2/3}\cdot\sqrt[3]{j\sqrt{j}}}{j^{1/6}\cdot\sqrt[6]{j^5}}=\sqrt[6]{j}$.""",
                True,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$j^{2/3}\cdot(j\cdotj^{1/2})^{1/3}=j^{2/3}\cdotj^{(1+1/2)/3}=j^{2/3}\cdotj^{1/2}$$

Denominator:

$$j^{1/6}\cdot(j^5)^{1/6}=j^{1/6}\cdotj^{5/6}=j$$

Quotient:

$$\sqrt[6]{j}$$

The fully reduced power matches the printed right-hand side.""",
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
                r"""For $k\neq 0$, $(5k^{-1}-1)(5k^{-1}+1)=\dfrac{25}{k^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=5k^{-1}$:

Expand:

$$(5k^{-1})^2-1=\frac{25}{k^2}-1$$

The coefficient on the reciprocal square is $25$, matching the claim.""",
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
                r"""For positive $a$, raising $a$ to the second power, then to the third, and finally taking the principal square root of the result yields $a$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((a^{2})^{3})^{1/2}=a^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
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
                r"""For positive $b$, raising $b$ to the second power, then to the third, and finally taking the principal square root of the result yields $b$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((b^{2})^{3})^{1/2}=b^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
            ),
            (
                r"Clearing $1/(\sqrt{5}-\sqrt{3})$ is claimed to equal $(\sqrt{5}-\sqrt{3})/2$, the conjugate already in the denominator.",
                False,
                
            ),
            (
                r"""For $x\neq 0$, $(5x^{-1}-1)(5x^{-1}+1)=\dfrac{25}{x^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=5x^{-1}$:

Expand:

$$(5x^{-1})^2-1=\frac{25}{x^2}-1$$

The coefficient on the reciprocal square is $25$, matching the claim.""",
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
                r"""For positive $z$, raising $z$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $z$.""",
                True,
                r"""Translate the tower, multiplying exponents inside out:

Inner:

$$(z^{2})^{3}=z^{6}$$

Outer root:

$$(z^{6})^{1/2}=z^{3}$$

The wording matches the reduced power.""",
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
                r"""If $g>0$, then $\dfrac{g^{2/3}\cdot\sqrt[3]{g\sqrt{g}}}{g^{1/6}\cdot\sqrt[6]{g^5}}=\sqrt[3]{g}$.""",
                False,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$g^{2/3}\cdot(g\cdotg^{1/2})^{1/3}=g^{2/3}\cdotg^{(1+1/2)/3}=g^{2/3}\cdotg^{1/2}$$

Denominator:

$$g^{1/6}\cdot(g^5)^{1/6}=g^{1/6}\cdotg^{5/6}=g$$

Quotient:

$$\sqrt[6]{g}$$

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
            (
                r"From $2^{k}=5$, a student concludes $2^{3k}=15$.",
                False,
                
            ),
            (
                r"""For positive $a$, raising $a$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $a$.""",
                True,
                r"""Translate the tower, multiplying exponents inside out:

Inner:

$$(a^{2})^{3}=a^{6}$$

Outer root:

$$(a^{6})^{1/2}=a^{3}$$

The wording matches the reduced power.""",
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
                r"""If $m>0$, then $\dfrac{m^{2/3}\cdot\sqrt[3]{m\sqrt{m}}}{m^{1/6}\cdot\sqrt[6]{m^5}}=\sqrt[6]{m}$.""",
                True,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$m^{2/3}\cdot(m\cdotm^{1/2})^{1/3}=m^{2/3}\cdotm^{(1+1/2)/3}=m^{2/3}\cdotm^{1/2}$$

Denominator:

$$m^{1/6}\cdot(m^5)^{1/6}=m^{1/6}\cdotm^{5/6}=m$$

Quotient:

$$\sqrt[6]{m}$$

The fully reduced power matches the printed right-hand side.""",
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
                r"""For $n\neq 0$, $(3n^{-1}-1)(3n^{-1}+1)=\dfrac{1}{9n^2}-1$.""",
                False,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=3n^{-1}$:

Expand:

$$(3n^{-1})^2-1=\frac{9}{n^2}-1$$

The reciprocal square carries numerator $9$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"A candidate records $\sqrt{18}\cdot\sqrt{8}=\sqrt{26}$ as positive square roots.",
                False,
                
            ),
            (
                r"""For positive $n$, raising $n$ to the second power, then to the third, and finally taking the principal square root of the result yields $n$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((n^{2})^{3})^{1/2}=n^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
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
                r"""For positive $p$, raising $p$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $p$.""",
                True,
                r"""Translate the tower, multiplying exponents inside out:

Inner:

$$(p^{2})^{3}=p^{6}$$

Outer root:

$$(p^{6})^{1/2}=p^{3}$$

The wording matches the reduced power.""",
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
                r"""For $u\neq 0$, $(3u^{-1}-1)(3u^{-1}+1)=\dfrac{1}{9u^2}-1$.""",
                False,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=3u^{-1}$:

Expand:

$$(3u^{-1})^2-1=\frac{9}{u^2}-1$$

The reciprocal square carries numerator $9$, not $1$. Swapping numerator and denominator is the last-step error.""",
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
                r"""For positive $p$, raising $p$ to the second power, then to the third, and finally taking the principal square root of the result yields $p$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((p^{2})^{3})^{1/2}=p^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
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
                r"""For positive $t$, raising $t$ to the second power, then to the third, and finally taking the principal square root of the result yields $t$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((t^{2})^{3})^{1/2}=t^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
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
                r"""For positive $q$, raising $q$ to the second power, then to the third, and finally taking the principal square root of the result yields $q$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((q^{2})^{3})^{1/2}=q^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
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
                r"""For positive $k$, raising $k$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $k$.""",
                True,
                r"""Translate the tower, multiplying exponents inside out:

Inner:

$$(k^{2})^{3}=k^{6}$$

Outer root:

$$(k^{6})^{1/2}=k^{3}$$

The wording matches the reduced power.""",
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
                r"""If $p>0$, then $\dfrac{p^{2/3}\cdot\sqrt[3]{p\sqrt{p}}}{p^{1/6}\cdot\sqrt[6]{p^5}}=\sqrt[3]{p}$.""",
                False,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$p^{2/3}\cdot(p\cdotp^{1/2})^{1/3}=p^{2/3}\cdotp^{(1+1/2)/3}=p^{2/3}\cdotp^{1/2}$$

Denominator:

$$p^{1/6}\cdot(p^5)^{1/6}=p^{1/6}\cdotp^{5/6}=p$$

Quotient:

$$\sqrt[6]{p}$$

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
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
                r"""For $r\neq 0$, $(2r^{-1}-1)(2r^{-1}+1)=\dfrac{4}{r^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=2r^{-1}$:

Expand:

$$(2r^{-1})^2-1=\frac{4}{r^2}-1$$

The coefficient on the reciprocal square is $4$, matching the claim.""",
            ),
            (
                r"A slip writes the stack $(y^{-1/3})^{6}=y^{-1/18}$ for $y>0$.",
                False,
                
            ),
            (
                r"""For positive $n$, raising $n$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $n$.""",
                True,
                r"""Translate the tower, multiplying exponents inside out:

Inner:

$$(n^{2})^{3}=n^{6}$$

Outer root:

$$(n^{6})^{1/2}=n^{3}$$

The wording matches the reduced power.""",
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
                r"""For $r\neq 0$, $(7r^{-1}-1)(7r^{-1}+1)=\dfrac{49}{r^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=7r^{-1}$:

Expand:

$$(7r^{-1})^2-1=\frac{49}{r^2}-1$$

The coefficient on the reciprocal square is $49$, matching the claim.""",
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
                r"""For positive $q$, raising $q$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $q$.""",
                True,
                r"""Translate the tower, multiplying exponents inside out:

Inner:

$$(q^{2})^{3}=q^{6}$$

Outer root:

$$(q^{6})^{1/2}=q^{3}$$

The wording matches the reduced power.""",
            ),
            (
                r"Expanding only a cube, $(p^{2}q^{-3})^{3}=p^{6}q^{-9}$ on $p,q>0$ is accepted.",
                True,
                
            ),
            (
                r"""If $p>0$, then $\dfrac{p^{2/3}\cdot\sqrt[3]{p\sqrt{p}}}{p^{1/6}\cdot\sqrt[6]{p^5}}=\sqrt[6]{p}$.""",
                True,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$p^{2/3}\cdot(p\cdotp^{1/2})^{1/3}=p^{2/3}\cdotp^{(1+1/2)/3}=p^{2/3}\cdotp^{1/2}$$

Denominator:

$$p^{1/6}\cdot(p^5)^{1/6}=p^{1/6}\cdotp^{5/6}=p$$

Quotient:

$$\sqrt[6]{p}$$

The fully reduced power matches the printed right-hand side.""",
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
                r"""For positive $h$, raising $h$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $h$.""",
                True,
                r"""Translate the tower, multiplying exponents inside out:

Inner:

$$(h^{2})^{3}=h^{6}$$

Outer root:

$$(h^{6})^{1/2}=h^{3}$$

The wording matches the reduced power.""",
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
                r"""For positive $w$, raising $w$ to the second power, then to the third, and finally taking the principal square root of the result yields $w$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((w^{2})^{3})^{1/2}=w^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
            ),
            (
                r"A candidate cancels twice in $(\sqrt{u}-\sqrt{v})^{2}/(u-v)$ and obtains $1/(u-v)$ for $u>v>0$.",
                False,
                
            ),
            (
                r"""For $w\neq 0$, $(6w^{-1}-1)(6w^{-1}+1)=\dfrac{1}{36w^2}-1$.""",
                False,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=6w^{-1}$:

Expand:

$$(6w^{-1})^2-1=\frac{36}{w^2}-1$$

The reciprocal square carries numerator $36$, not $1$. Swapping numerator and denominator is the last-step error.""",
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
                r"""If $c>0$, then $\dfrac{c^{2/3}\cdot\sqrt[3]{c\sqrt{c}}}{c^{1/6}\cdot\sqrt[6]{c^5}}=\sqrt[6]{c}$.""",
                True,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$c^{2/3}\cdot(c\cdotc^{1/2})^{1/3}=c^{2/3}\cdotc^{(1+1/2)/3}=c^{2/3}\cdotc^{1/2}$$

Denominator:

$$c^{1/6}\cdot(c^5)^{1/6}=c^{1/6}\cdotc^{5/6}=c$$

Quotient:

$$\sqrt[6]{c}$$

The fully reduced power matches the printed right-hand side.""",
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
                r"""For positive $t$, raising $t$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $t$.""",
                True,
                r"""Translate the tower, multiplying exponents inside out:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer root:

$$(t^{6})^{1/2}=t^{3}$$

The wording matches the reduced power.""",
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
                r"""If $j>0$, then $\dfrac{j^{2/3}\cdot\sqrt[3]{j\sqrt{j}}}{j^{1/6}\cdot\sqrt[6]{j^5}}=\sqrt[3]{j}$.""",
                False,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$j^{2/3}\cdot(j\cdotj^{1/2})^{1/3}=j^{2/3}\cdotj^{(1+1/2)/3}=j^{2/3}\cdotj^{1/2}$$

Denominator:

$$j^{1/6}\cdot(j^5)^{1/6}=j^{1/6}\cdotj^{5/6}=j$$

Quotient:

$$\sqrt[6]{j}$$

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
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
                r"""For $x\neq 0$, $(6x^{-1}-1)(6x^{-1}+1)=\dfrac{1}{36x^2}-1$.""",
                False,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=6x^{-1}$:

Expand:

$$(6x^{-1})^2-1=\frac{36}{x^2}-1$$

The reciprocal square carries numerator $36$, not $1$. Swapping numerator and denominator is the last-step error.""",
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
                r"""If $m>0$, then $\dfrac{m^{2/3}\cdot\sqrt[3]{m\sqrt{m}}}{m^{1/6}\cdot\sqrt[6]{m^5}}=\sqrt[3]{m}$.""",
                False,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$m^{2/3}\cdot(m\cdotm^{1/2})^{1/3}=m^{2/3}\cdotm^{(1+1/2)/3}=m^{2/3}\cdotm^{1/2}$$

Denominator:

$$m^{1/6}\cdot(m^5)^{1/6}=m^{1/6}\cdotm^{5/6}=m$$

Quotient:

$$\sqrt[6]{m}$$

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
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
                r"""For $u\neq 0$, $(6u^{-1}-1)(6u^{-1}+1)=\dfrac{36}{u^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=6u^{-1}$:

Expand:

$$(6u^{-1})^2-1=\frac{36}{u^2}-1$$

The coefficient on the reciprocal square is $36$, matching the claim.""",
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
                r"""For positive $h$, raising $h$ to the second power, then to the third, and finally taking the principal square root of the result yields $h$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies; it does not add $2+3$ before the root:

Correct tower:

$$((h^{2})^{3})^{1/2}=h^{3}$$

The power $\tfrac{5}{2}$ would describe a different expression.""",
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
