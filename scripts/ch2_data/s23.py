from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="Warm-up: product and quotient of powers",
        subsection="2.3",
        difficulty="1/5",
        context=CTX,
        items=[
            (
                r"""Multiplying powers: for $a\neq 0$, $a^3\cdot a^4=a^7$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Dividing indices, for $x\neq 0$, $x^5/x^2=x^3$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $b\neq 0$, the product $b^2\cdot b^3$ equals $b^5$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""An exponent slip gives $t^4/t^2=t^3$ for $t\neq 0$ (false).""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $p\neq 0$, cancelling three factors in $p^6/p^3$ leaves $p^2$.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{t^2-9}{t-3}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
        ],
        overview=r"Five index laws on a single letter base.",
    ),
    task(
        title="Warm-up: power of a power",
        subsection="2.3",
        difficulty="1/5",
        context=CTX,
        items=[
            (
                r"""For $x>0$, raising a square to the third power gives $(x^2)^3=x^6$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""Adding exponents incorrectly, $(a^3)^2=a^5$ is false for $a>0$.""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $b>0$, halving the exponent in $(b^4)^{1/2}=b^2$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $y>0$, squaring a square root returns $y$: $(y^{1/2})^2=y$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $z>0$, the identity $(z^3)^{1/3}=z$ holds.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"Five power-of-a-power checks, including one added-exponent error.",
    ),
    task(
        title="Warm-up: negative and zero exponents",
        subsection="2.3",
        difficulty="2/5",
        context=CTX,
        items=[
            (
                r"""For $a\neq 0$, a negative index means $a^{-3}=1/a^3$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""Reciprocating once, for $x\neq 0$, $x^{-1}=1/x$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Any nonzero base satisfies $b^0=1$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""A sign error makes $t^{-2}=-1/t^2$ for $t\neq 0$ (false).""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $p\neq 0$, $p^{-4}=1/p^4$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"Five reciprocal and zero-exponent identities with one sign trap.",
    ),
    task(
        title="Warm-up: fractional exponents and roots",
        subsection="2.3",
        difficulty="2/5",
        context=CTX,
        items=[
            (
                r"""For $x>0$, the half-power $x^{1/2}$ equals $\sqrt{x}$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $a>0$, the cube root is $a^{1/3}=\sqrt[3]{a}$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $b>0$, $b^{2/3}=(\sqrt[3]{b})^2$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Confusing a half-power with a square, $y^{1/2}=y^2$ is false for $y>0$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $z>0$, $z^{3/2}=z\sqrt{z}$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"Five links between fractional exponents and radicals.",
    ),
    task(
        title="A stacked power compared with a product after a rewrite",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $p\neq 0$, $(2p^{-1}-1)(2p^{-1}+1)=\dfrac{4}{p^2}-1$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""If $a>0$, then $\dfrac{a^{2/3}\cdot\sqrt[3]{a\sqrt{a}}}{a^{1/6}\cdot\sqrt[6]{a^5}}=\sqrt[3]{a}$.""",
                False,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$a^{2/3}\cdot(a\cdota^{1/2})^{1/3}=a^{2/3}\cdota^{(1+1/2)/3}=a^{2/3}\cdota^{1/2}$$

Inside the cube root, $a\cdot\sqrt{a}$ becomes a single power of $a$.

Denominator:

$$a^{1/6}\cdot(a^5)^{1/6}=a^{1/6}\cdota^{5/6}=a$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{a}$$

Subtract exponents only after both sides use the same base and fractional form.

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
            (
                r"""For positive $b$, raising $b$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $b$.""",
                True,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For positive $m$, raising $m$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $m$.""",
                True,
                r"""The claim describes a tower of powers on positive $m$. Translate each English step into an exponent, multiplying powers inside out.

Inner power:

$$(m^{2})^{3}=m^{6}$$

Squaring then cubing multiplies the exponents.

Principal square root:

$$(m^{6})^{1/2}=m^{3}$$

The outer root halves the accumulated exponent.

The reduced power is the cube of the base, matching the wording.""",
            ),
            (
                r"""For $u>0$, $(u^4)^{1/2}/u=u$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"""Five independent exponent claims. A stack multiplies; a product adds. After rewriting, $(x^{-2})^{-3}=x^{6}$ is not the same as $x^{-2}x^{-3}=x^{-5}$.""",
    ),
    task(
        title="A minus in the denominator that has to be flipped twice",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $w>0$, $(w^{2/3})(w^{1/3})=w$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Working with $q\neq 0$, a slip writes $\dfrac{1}{q^{-3}}=-q^{3}$, reading the minus in the exponent as a change of sign.""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $v\neq 0$, $(v^2/v^{-3})^{1/2}=v^{5/2}$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $p\neq 0$, $(7p^{-1}-1)(7p^{-1}+1)=\dfrac{49}{p^2}-1$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""If $c>0$, then $\dfrac{c^{2/3}\cdot\sqrt[3]{c\sqrt{c}}}{c^{1/6}\cdot\sqrt[6]{c^5}}=\sqrt[3]{c}$.""",
                False,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$c^{2/3}\cdot(c\cdotc^{1/2})^{1/3}=c^{2/3}\cdotc^{(1+1/2)/3}=c^{2/3}\cdotc^{1/2}$$

Inside the cube root, $c\cdot\sqrt{c}$ becomes a single power of $c$.

Denominator:

$$c^{1/6}\cdot(c^5)^{1/6}=c^{1/6}\cdotc^{5/6}=c$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{c}$$

Subtract exponents only after both sides use the same base and fractional form.

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
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
                r"""For $a>0$, $(a^2)^3=a^5$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For positive $x$, raising $x$ to the second power, then to the third, and finally taking the principal square root of the result yields $x$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $r\neq 0$, $(4r^{-1}-1)(4r^{-1}+1)=\dfrac{1}{16r^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=4r^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4r^{-1})^2-1=\frac{16}{r^2}-1$$

The reciprocal square carries coefficient $16$ on $r^2$ in the denominator.

The reciprocal square carries numerator $16$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""If $e>0$, then $\dfrac{e^{2/3}\cdot\sqrt[3]{e\sqrt{e}}}{e^{1/6}\cdot\sqrt[6]{e^5}}=\sqrt[6]{e}$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For positive $w$, raising $w$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $w$.""",
                True,
                r"""The claim describes a tower of powers on positive $w$. Translate each English step into an exponent, multiplying powers inside out.

Inner power:

$$(w^{2})^{3}=w^{6}$$

Squaring then cubing multiplies the exponents.

Principal square root:

$$(w^{6})^{1/2}=w^{3}$$

The outer root halves the accumulated exponent.

The reduced power is the cube of the base, matching the wording.""",
            ),
        ],
        overview=r"""Five independent surd claims. Products of square roots may pass inside one radicand; sums may not. $\sqrt{12}\sqrt{3}=6$, but $\sqrt{18}+\sqrt{32}\neq\sqrt{50}$.""",
    ),
    task(
        title="Zero exponents mixed with a cancelled stack",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For positive $m$, raising $m$ to the second power, then to the third, and finally taking the principal square root of the result yields $m$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""Power of a power multiplies exponents; it does not add $2+3$ before the root. Reduce the tower on positive $m$ first.

Correct tower:

$$((m^{2})^{3})^{1/2}=m^{3}$$

The accumulated exponent is $6$, then halved by the principal square root.

The power $\tfrac{5}{2}$ would describe a different expression.""",
            ),
            (
                r"""treats $0^{-3}\cdot 0^{3}$ as $0^{0}$ and then as $1$, by the product rule for exponents.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $a\neq 0$, $(a^{-2}a^5)/a= a^2$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Treating $(2b)^{0}=2b^{0}$ for every $b\neq 0$ is offered, so the left side is read as $2$.""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For positive $x$, raising $x$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $x$.""",
                True,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
        ],
        overview=r"""Five independent zero-exponent claims. On a nonzero base, $a^{0}=1$. A negative power of $0$ is undefined; $(2b)^{0}$ is not $2b^{0}$.""",
    ),
    task(
        title="Integer values of short fractional powers",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For $w\neq 0$, $(4w^{-1}-1)(4w^{-1}+1)=\dfrac{1}{16w^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=4w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4w^{-1})^2-1=\frac{16}{w^2}-1$$

The reciprocal square carries coefficient $16$ on $w^2$ in the denominator.

The reciprocal square carries numerator $16$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""Rewriting $32^{2/5}$ as $8$ is entered on a mark scheme.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For positive $z$, raising $z$ to the second power, then to the third, and finally taking the principal square root of the result yields $z$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $p\neq 0$, $(6p^{-1}-1)(6p^{-1}+1)=\dfrac{36}{p^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=6p^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(6p^{-1})^2-1=\frac{36}{p^2}-1$$

The reciprocal square carries coefficient $36$ on $p^2$ in the denominator.

The printed coefficient $36$ is the one that survives the expansion.""",
            ),
            (
                r"""For $r\neq 0$, $(6r^{-1}-1)(6r^{-1}+1)=\dfrac{1}{36r^2}-1$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"""Five independent numerical powers. $27^{2/3}=9$ and $\sqrt[3]{54}=3\sqrt[3]{2}$, but $32^{2/5}=4$ and $8^{2/3}\cdot 4^{-1/2}=2$.""",
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
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $t\neq 0$, $(2t^{-1}-1)(2t^{-1}+1)=\dfrac{1}{4t^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=2t^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2t^{-1})^2-1=\frac{4}{t^2}-1$$

The reciprocal square carries coefficient $4$ on $t^2$ in the denominator.

The reciprocal square carries numerator $4$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""Extracting $\sqrt{32}=4\sqrt{2}$ as a positive square root.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""writes $\sqrt{45}-\sqrt{20}=\sqrt{25}$ as positive roots.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Taking positive roots, $\sqrt{8}+\sqrt{18}$ is rewritten as $5\sqrt{2}$.""",
                True,
                r"""Square roots do not split over addition. Squaring the sum produces

$$(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab}$$

For $a=b=1$ one has $\sqrt{2}\neq 2$.""",
            ),
        ],
        overview=r"""Five independent like-surd reductions. Extract the largest square, then add coefficients. $\sqrt{50}-\sqrt{18}=2\sqrt{2}$; $\sqrt{12}+\sqrt{27}$ is $5\sqrt{3}$, not $\sqrt{39}$.""",
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
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $r\neq 0$, $(6r^{-1}-1)(6r^{-1}+1)=\dfrac{36}{r^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=6r^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(6r^{-1})^2-1=\frac{36}{r^2}-1$$

The reciprocal square carries coefficient $36$ on $r^2$ in the denominator.

The printed coefficient $36$ is the one that survives the expansion.""",
            ),
            (
                r"""Whenever $u,v>0$, treating $(u/v)^{4}=u^{4}/v^{4}$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""If $g>0$, then $\dfrac{g^{2/3}\cdot\sqrt[3]{g\sqrt{g}}}{g^{1/6}\cdot\sqrt[6]{g^5}}=\sqrt[6]{g}$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $t\neq 0$, $(7t^{-1}-1)(7t^{-1}+1)=\dfrac{1}{49t^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=7t^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7t^{-1})^2-1=\frac{49}{t^2}-1$$

The reciprocal square carries coefficient $49$ on $t^2$ in the denominator.

The reciprocal square carries numerator $49$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
        ],
        overview=r"""Five independent quotient-power claims. A negative exponent swaps the fraction; $(x/y)^{-2}=(y/x)^{2}$, which is not $x^{2}/y^{2}$. A zero exponent is $1$.""",
    ),
    task(
        title="Cube roots split over products only",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""The cube-root product $\sqrt[3]{2}\sqrt[3]{4}$ is rewritten as $2$ in the reals.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $k\neq 0$, $(6k^{-1}-1)(6k^{-1}+1)=\dfrac{1}{36k^2}-1$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""If $e>0$, then $\dfrac{e^{2/3}\cdot\sqrt[3]{e\sqrt{e}}}{e^{1/6}\cdot\sqrt[6]{e^5}}=\sqrt[3]{e}$.""",
                False,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$e^{2/3}\cdot(e\cdote^{1/2})^{1/3}=e^{2/3}\cdote^{(1+1/2)/3}=e^{2/3}\cdote^{1/2}$$

Inside the cube root, $e\cdot\sqrt{e}$ becomes a single power of $e$.

Denominator:

$$e^{1/6}\cdot(e^5)^{1/6}=e^{1/6}\cdote^{5/6}=e$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{e}$$

Subtract exponents only after both sides use the same base and fractional form.

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
            (
                r"""writes $\sqrt[3]{24}=8\sqrt[3]{3}$ in the reals.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Factoring $\sqrt[3]{32}$ as $4\sqrt[3]{2}$ equals valid.""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
        ],
        overview=r"""Five independent cube-root lines. Products split; sums do not. $\sqrt[3]{2}\sqrt[3]{4}=2$ and $\sqrt[3]{54}=3\sqrt[3]{2}$, while $\sqrt[3]{24}=2\sqrt[3]{3}$.""",
    ),
    task(
        title="Several fractional exponents on one letter",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $x\neq 0$, $(3x^{-1}-1)(3x^{-1}+1)=\dfrac{9}{x^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=3x^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3x^{-1})^2-1=\frac{9}{x^2}-1$$

The reciprocal square carries coefficient $9$ on $x^2$ in the denominator.

The printed coefficient $9$ is the one that survives the expansion.""",
            ),
            (
                r"""If $j>0$, then $\dfrac{j^{2/3}\cdot\sqrt[3]{j\sqrt{j}}}{j^{1/6}\cdot\sqrt[6]{j^5}}=\sqrt[6]{j}$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $k\neq 0$, $(7k^{-1}-1)(7k^{-1}+1)=\dfrac{1}{49k^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=7k^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7k^{-1})^2-1=\frac{49}{k^2}-1$$

The reciprocal square carries coefficient $49$ on $k^2$ in the denominator.

The reciprocal square carries numerator $49$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""For $m>0$, $(m^2)^3=m^5$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $k\neq 0$, $(5k^{-1}-1)(5k^{-1}+1)=\dfrac{25}{k^2}-1$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"""Five independent fractional-power calculations. Inside the mixed quotient the exponents total $1$, and the outer square makes $x^{2}$. Stacking multiplies; a quotient subtracts.""",
    ),
    task(
        title="Denesting a nested radical by the wrong conjugate",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $r>0$, $(r^2)^3=r^5$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Squaring $\sqrt{5}+\sqrt{3}$ equals $8+2\sqrt{15}$ in the positive reals.""",
                True,
                r"""Square roots do not split over addition. Squaring the sum produces

$$(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab}$$

For $a=b=1$ one has $\sqrt{2}\neq 2$.""",
            ),
            (
                r"""For positive $a$, raising $a$ to the second power, then to the third, and finally taking the principal square root of the result yields $a$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $x\neq 0$, $(8x^{-1}-1)(8x^{-1}+1)=\dfrac{64}{x^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=8x^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(8x^{-1})^2-1=\frac{64}{x^2}-1$$

The reciprocal square carries coefficient $64$ on $x^2$ in the denominator.

The printed coefficient $64$ is the one that survives the expansion.""",
            ),
            (
                r"""For $t>0$, $(t^{2})^{1/2}=t$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"""Five independent nested-radical checks. $\sqrt{8+2\sqrt{15}}=\sqrt{5}+\sqrt{3}$; the minus conjugate denests the minus companion. Splitting a radicand as a sum of roots fails.""",
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
                r"""The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.""",
            ),
            (
                r"""For $k\neq 0$, $(4k^{-1}-1)(4k^{-1}+1)=\dfrac{1}{16k^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=4k^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4k^{-1})^2-1=\frac{16}{k^2}-1$$

The reciprocal square carries coefficient $16$ on $k^2$ in the denominator.

The reciprocal square carries numerator $16$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""For $x\neq 0$, $(5x^{-1}-1)(5x^{-1}+1)=\dfrac{25}{x^2}-1$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $v\neq 0$, $(3v^{-1}-1)(3v^{-1}+1)=\dfrac{1}{9v^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=3v^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3v^{-1})^2-1=\frac{9}{v^2}-1$$

The reciprocal square carries coefficient $9$ on $v^2$ in the denominator.

The reciprocal square carries numerator $9$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""On the positive denominator $\sqrt{5}-1$, the unit $1/(\sqrt{5}-1)$ is rewritten as $(\sqrt{5}+1)/4$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
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
                r"""On $x>0$, expanding $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}$ equals $x+1/x$ with the cross term omitted.""",
                False,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(U+V)^2$$

Cross term:

$$2\cdot(U)\cdot(V)$$

The collected coefficient contradicts the printed value.""",
            ),
            (
                r"""For $c\neq 0$, $c^{2}/c^{0}=c^2$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $f>0$, $(f^{3})^{1/3}=f$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For positive $z$, raising $z$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $z$.""",
                True,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $k\neq 0$, $(3k^{-1}-1)(3k^{-1}+1)=\dfrac{9}{k^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=3k^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3k^{-1})^2-1=\frac{9}{k^2}-1$$

The reciprocal square carries coefficient $9$ on $k^2$ in the denominator.

The printed coefficient $9$ is the one that survives the expansion.""",
            ),
        ],
        overview=r"""Five independent binomial-square checks. $(\sqrt{x}-x^{-1/2})^{2}=x-2+1/x$; the cross term is identically $\pm 2$ or $\pm 4$ and must not be dropped.""",
    ),
    task(
        title="Rewriting a new base from a given power",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Given $2^{k}=5$, rewrites $4^{k}$ as $25$ without solving for $k$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""If $g>0$, then $\dfrac{g^{2/3}\cdot\sqrt[3]{g\sqrt{g}}}{g^{1/6}\cdot\sqrt[6]{g^5}}=\sqrt[3]{g}$.""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $v\neq 0$, $(1v^{-1}-1)(1v^{-1}+1)=\dfrac{1}{v^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=1v^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1v^{-1})^2-1=\frac{1}{v^2}-1$$

The reciprocal square carries coefficient $1$ on $v^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion.""",
            ),
            (
                r"""For positive $a$, raising $a$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $a$.""",
                True,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $h\neq 0$, $(1h^{-1}-1)(1h^{-1}+1)=\dfrac{1}{1h^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=1h^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1h^{-1})^2-1=\frac{1}{h^2}-1$$

The reciprocal square carries coefficient $1$ on $h^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion.""",
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
                r"""For $s\neq 0$, $(3s^{-1}-1)(3s^{-1}+1)=\dfrac{1}{9s^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=3s^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3s^{-1})^2-1=\frac{9}{s^2}-1$$

The reciprocal square carries coefficient $9$ on $s^2$ in the denominator.

The reciprocal square carries numerator $9$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""claims $(a^{m})^{k}=a^{m+k}$ identically for $a>0$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Whenever $c,d>0$, treating $(c^{2}d^{3})^{4}$ as $c^{8}d^{12}$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $h>0$, $(h^2)^3=h^5$.""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""If $m>0$, then $\dfrac{m^{2/3}\cdot\sqrt[3]{m\sqrt{m}}}{m^{1/6}\cdot\sqrt[6]{m^5}}=\sqrt[6]{m}$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
        ],
        overview=r"""Five independent two-letter power claims. $(a^{m}b^{n})^{k}=a^{mk}b^{nk}$, not $a^{m+k}$. Adding the outer exponent is the product trap.""",
    ),
    task(
        title="Fractional powers of twelve, twenty-seven, and thirty-two",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $n\neq 0$, $(1n^{-1}-1)(1n^{-1}+1)=\dfrac{1}{n^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=1n^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1n^{-1})^2-1=\frac{1}{n^2}-1$$

The reciprocal square carries coefficient $1$ on $n^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion.""",
            ),
            (
                r"""Reducing $32^{3/5}$ to $4$ is treated as correct.""",
                False,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{t^2-9}{t-3}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""For $n\neq 0$, $(3n^{-1}-1)(3n^{-1}+1)=\dfrac{1}{9n^2}-1$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $s\neq 0$, $(2s^{-1}-1)(2s^{-1}+1)=\dfrac{4}{s^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=2s^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2s^{-1})^2-1=\frac{4}{s^2}-1$$

The reciprocal square carries coefficient $4$ on $s^2$ in the denominator.

The printed coefficient $4$ is the one that survives the expansion.""",
            ),
            (
                r"""For positive $n$, raising $n$ to the second power, then to the third, and finally taking the principal square root of the result yields $n$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
        ],
        overview=r"""Five independent numerical rewrites. $27^{4/3}=81$ and $4^{5/2}=32$, but $32^{3/5}=8$ and $\sqrt{18}\sqrt{8}=12$, not $\sqrt{26}$.""",
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
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $u\neq 0$, $(1u^{-1}-1)(1u^{-1}+1)=\dfrac{1}{1u^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=1u^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1u^{-1})^2-1=\frac{1}{u^2}-1$$

The reciprocal square carries coefficient $1$ on $u^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion.""",
            ),
            (
                r"""Reducing $2^{m+n}4^{m-n}/8^{m}$ to $2^{-n}$ for integers $m,n$ equals valid.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{t^2-9}{t-3}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""Someone writes $32^{k}=2^{k+5}$ for every integer $k$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""On integer $n$, rewriting $4^{n}/2^{n}=2^{n}$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"""Five independent change-of-base lines. Rewrite $4=2^{2}$, $8=2^{3}$, $32=2^{5}$, then multiply exponents. Adding the index $3$ or $5$ is the product trap.""",
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
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $n\neq 0$, $(4n^{-1}-1)(4n^{-1}+1)=\dfrac{16}{n^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=4n^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4n^{-1})^2-1=\frac{16}{n^2}-1$$

The reciprocal square carries coefficient $16$ on $n^2$ in the denominator.

The printed coefficient $16$ is the one that survives the expansion.""",
            ),
            (
                r"""writes $\sqrt[4]{x^{4}}=x^{2}$ for every $x>0$.""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For positive $p$, raising $p$ to the second power, then to the third, and finally taking the principal square root of the result yields $p$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.""",
            ),
            (
                r"""For $w\neq 0$, $(1w^{-1}-1)(1w^{-1}+1)=\dfrac{1}{w^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=1w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1w^{-1})^2-1=\frac{1}{w^2}-1$$

The reciprocal square carries coefficient $1$ on $w^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion.""",
            ),
        ],
        overview=r"""Five independent fourth-root claims. Divide exponents by $4$. $\sqrt[4]{a^{2}b^{6}}=a^{1/2}b^{3/2}$ and $\sqrt[4]{c^{8}}=c^{2}$, while $\sqrt[4]{x^{4}}=x$ on $x>0$.""",
    ),
    task(
        title="A minus sign stranded in a denominator",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Working with $a,b\neq 0$, the quotient $a^{5}b^{-3}/(a^{-2}b^{4})$ equals $a^{7}/b^{7}$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For positive $t$, raising $t$ to the second power, then to the third, and finally taking the principal square root of the result yields $t$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $n\neq 0$, $(8n^{-1}-1)(8n^{-1}+1)=\dfrac{64}{n^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=8n^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(8n^{-1})^2-1=\frac{64}{n^2}-1$$

The reciprocal square carries coefficient $64$ on $n^2$ in the denominator.

The printed coefficient $64$ is the one that survives the expansion.""",
            ),
            (
                r"""For $h>0$, $(h^2)^3=h^5$ (variant 1).""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""Provided $f\neq 0$, inverting $1/f^{-5}$ is rewritten as $f^{5}$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"""Five independent monomial quotients. A negative exponent in a denominator flips sign. $a^{5}b^{-3}/(a^{-2}b^{4})=a^{7}/b^{7}$; forgetting the flip leaves $c^{4}/c^{-3}$ looking like $c$.""",
    ),
    task(
        title="Stacked roots multiplying reciprocal exponents",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $p\neq 0$, $(5p^{-1}-1)(5p^{-1}+1)=\dfrac{1}{25p^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=5p^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5p^{-1})^2-1=\frac{25}{p^2}-1$$

The reciprocal square carries coefficient $25$ on $p^2$ in the denominator.

The reciprocal square carries numerator $25$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""For positive $q$, raising $q$ to the second power, then to the third, and finally taking the principal square root of the result yields $q$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $h\neq 0$, $(5h^{-1}-1)(5h^{-1}+1)=\dfrac{25}{h^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=5h^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5h^{-1})^2-1=\frac{25}{h^2}-1$$

The reciprocal square carries coefficient $25$ on $h^2$ in the denominator.

The printed coefficient $25$ is the one that survives the expansion.""",
            ),
            (
                r"""For $m>0$, $(m^2)^3=m^5$ (variant 3).""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For positive $k$, raising $k$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $k$.""",
                True,
                r"""The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.""",
            ),
        ],
        overview=r"""Five independent stacked-root rewrites. Reciprocal exponents multiply: a cube root inside a fourth root is $x^{1/12}$. Adding $1/2+1/3$ is the wrong operation.""",
    ),
    task(
        title="Conjugate surds multiplying to a difference of radicands",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""The numerical product $(\sqrt{5}+\sqrt{3})(\sqrt{5}-\sqrt{3})$ equals $2$ in the positive reals.""",
                True,
                r"""Square roots do not split over addition. Squaring the sum produces

$$(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab}$$

For $a=b=1$ one has $\sqrt{2}\neq 2$.""",
            ),
            (
                r"""For $c>0$, $(c^2)^3=c^5$ (variant 1).""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""If $p>0$, then $\dfrac{p^{2/3}\cdot\sqrt[3]{p\sqrt{p}}}{p^{1/6}\cdot\sqrt[6]{p^5}}=\sqrt[3]{p}$.""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $p\neq 0$, $(4p^{-1}-1)(4p^{-1}+1)=\dfrac{16}{p^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=4p^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4p^{-1})^2-1=\frac{16}{p^2}-1$$

The reciprocal square carries coefficient $16$ on $p^2$ in the denominator.

The printed coefficient $16$ is the one that survives the expansion.""",
            ),
            (
                r"""On $p,q\ge 0$, $(\sqrt{p}+\sqrt{q})^{2}=p+q+2\sqrt{pq}$ is printed as valid.""",
                True,
                r"""Square roots do not split over addition. Squaring the sum produces

$$(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab}$$

For $a=b=1$ one has $\sqrt{2}\neq 2$.""",
            ),
        ],
        overview=r"""Five independent conjugate-surd claims. The product of conjugates is a difference of radicands. Each separate square still carries a cross term $\pm 2\sqrt{\,\cdot\,}$.""",
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
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $t\neq 0$, $(7t^{-1}-1)(7t^{-1}+1)=\dfrac{49}{t^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=7t^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7t^{-1})^2-1=\frac{49}{t^2}-1$$

The reciprocal square carries coefficient $49$ on $t^2$ in the denominator.

The printed coefficient $49$ is the one that survives the expansion.""",
            ),
            (
                r"""For positive $n$, raising $n$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $n$.""",
                True,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $w\neq 0$, $(7w^{-1}-1)(7w^{-1}+1)=\dfrac{1}{49w^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=7w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7w^{-1})^2-1=\frac{49}{w^2}-1$$

The reciprocal square carries coefficient $49$ on $w^2$ in the denominator.

The reciprocal square carries numerator $49$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""For $x\neq 0$, $x^{8}/x^{6}=x^2$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"""Five independent two-letter stacks. Distribute the outer exponents, then add or subtract. $(x^{1/2}y^{-1/3})^{6}/(x^{-1}y^{2})^{2}=x^{5}/y^{6}$.""",
    ),
    task(
        title="Independent traps from nested roots to given powers",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $r>0$, $(r^2)^3=r^5$ (variant 1).""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $c\neq 0$, $c^{3}/c^{1}=c^2$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Working with $x>0$, the expansion of $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}$ equals $x-2+1/x$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $r\neq 0$, $(7r^{-1}-1)(7r^{-1}+1)=\dfrac{49}{r^2}-1$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $t\neq 0$, $(6t^{-1}-1)(6t^{-1}+1)=\dfrac{1}{36t^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=6t^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(6t^{-1})^2-1=\frac{36}{t^2}-1$$

The reciprocal square carries coefficient $36$ on $t^2$ in the denominator.

The reciprocal square carries numerator $36$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
        ],
        overview=r"""Five independent calculations: a minus-conjugate denesting, a given-power cube, a binomial square of a root and its reciprocal, $\sqrt{a}\sqrt{b}$ versus $\sqrt{a+b}$, and a rationalised unit.""",
    ),
    task(
        title="A powered monomial quotient in two letters",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The quotient identity $(a^{m}b^{n})^{k}/(a^{n}b^{m})^{k}=(a/b)^{k(m-n)}$ holds for $a,b>0$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For positive $q$, raising $q$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $q$.""",
                True,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $h\neq 0$, $(5h^{-1}-1)(5h^{-1}+1)=\dfrac{1}{25h^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=5h^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5h^{-1})^2-1=\frac{25}{h^2}-1$$

The reciprocal square carries coefficient $25$ on $h^2$ in the denominator.

The reciprocal square carries numerator $25$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""If $p>0$, then $\dfrac{p^{2/3}\cdot\sqrt[3]{p\sqrt{p}}}{p^{1/6}\cdot\sqrt[6]{p^5}}=\sqrt[6]{p}$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $r\neq 0$, $(2r^{-1}-1)(2r^{-1}+1)=\dfrac{1}{4r^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=2r^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2r^{-1})^2-1=\frac{4}{r^2}-1$$

The reciprocal square carries coefficient $4$ on $r^2$ in the denominator.

The reciprocal square carries numerator $4$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
        ],
        overview=r"""Five independent monomial-quotient claims. After distributing $k$, $(a^{m}b^{n})^{k}/(a^{n}b^{m})^{k}=(a/b)^{k(m-n)}$. Adding the outer exponent instead of multiplying it is the trap.""",
    ),
    task(
        title="Nested radicals rewritten as a single rational power",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $r\neq 0$, $(1r^{-1}-1)(1r^{-1}+1)=\dfrac{1}{1r^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=1r^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1r^{-1})^2-1=\frac{1}{r^2}-1$$

The reciprocal square carries coefficient $1$ on $r^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion.""",
            ),
            (
                r"""A three-storey cube nest $\sqrt[3]{y\sqrt[3]{y\sqrt[3]{y}}}$ equals $y^{13/27}$ on $y>0$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $f>0$, $(f^2)^3=f^5$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Stacking $\sqrt[4]{w^{2}}$ as $w^{1/2}$ for $w>0$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For positive $h$, raising $h$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $h$.""",
                True,
                r"""The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.""",
            ),
        ],
        overview=r"""Five independent nests, each with its own index. Write every root as a reciprocal exponent and multiply. $\sqrt{x\sqrt{x}}=x^{3/4}$ and the three-storey cube nest is $y^{13/27}$.""",
    ),
    task(
        title="Cancelling one conjugate factor, not two",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $m\neq 0$, $(3m^{-1}-1)(3m^{-1}+1)=\dfrac{1}{9m^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=3m^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3m^{-1})^2-1=\frac{9}{m^2}-1$$

The reciprocal square carries coefficient $9$ on $m^2$ in the denominator.

The reciprocal square carries numerator $9$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""For $p>0$, $(p^2)^3=p^5$ (variant 2).""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For positive $w$, raising $w$ to the second power, then to the third, and finally taking the principal square root of the result yields $w$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.""",
            ),
            (
                r"""For $x\neq 0$, $(1x^{-1}-1)(1x^{-1}+1)=\dfrac{1}{x^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=1x^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1x^{-1})^2-1=\frac{1}{x^2}-1$$

The reciprocal square carries coefficient $1$ on $x^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion.""",
            ),
            (
                r"""For $w\neq 0$, $(6w^{-1}-1)(6w^{-1}+1)=\dfrac{1}{36w^2}-1$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"""Five independent conjugate-cancellation claims. Write $a-b$ as a conjugate product. Then $(\sqrt{a}-\sqrt{b})^{2}/(a-b)$ keeps one factor of $\sqrt{a}-\sqrt{b}$ in the numerator.""",
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
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $k\neq 0$, $(2k^{-1}-1)(2k^{-1}+1)=\dfrac{1}{4k^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=2k^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2k^{-1})^2-1=\frac{4}{k^2}-1$$

The reciprocal square carries coefficient $4$ on $k^2$ in the denominator.

The reciprocal square carries numerator $4$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""A rational-power identity $(x^{m/n})^{n}=x^{m}$ holds for $x>0$ and $n\neq 0$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $h>0$, $(h^2)^3=h^5$ (variant 2).""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""Three powers multiplying, $t^{m}t^{n}t^{-m-n}=1$ for $t>0$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"""Five independent exponent-arithmetic claims. Products add, stacks multiply, quotients subtract. Given $3^{y}=2$, one may still rewrite $9^{y}=(3^{y})^{2}=4$.""",
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
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $w\neq 0$, $(6w^{-1}-1)(6w^{-1}+1)=\dfrac{36}{w^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=6w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(6w^{-1})^2-1=\frac{36}{w^2}-1$$

The reciprocal square carries coefficient $36$ on $w^2$ in the denominator.

The printed coefficient $36$ is the one that survives the expansion.""",
            ),
            (
                r"""Rationalising $3/(\sqrt{5}-1)$ equals $3(\sqrt{5}+1)/4$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""If $j>0$, then $\dfrac{j^{2/3}\cdot\sqrt[3]{j\sqrt{j}}}{j^{1/6}\cdot\sqrt[6]{j^5}}=\sqrt[3]{j}$.""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $n\neq 0$, $(2n^{-1}-1)(2n^{-1}+1)=\dfrac{4}{n^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=2n^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2n^{-1})^2-1=\frac{4}{n^2}-1$$

The reciprocal square carries coefficient $4$ on $n^2$ in the denominator.

The printed coefficient $4$ is the one that survives the expansion.""",
            ),
        ],
        overview=r"""Five independent mixed calculations: a like-surd combination equal to $5\sqrt{3}$, a minus-conjugate denesting trap, a rationalised unit, a missing cross term $+2$, and $32^{2/5}\cdot 27^{-1/3}=4/3$.""",
    ),
    task(
        title="Adding reciprocal powers is not multiplying them",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Adding $x^{-1}+x^{-2}$ for $x\neq 0$ equals $(x+1)/x^{2}$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $x\neq 0$, $(6x^{-1}-1)(6x^{-1}+1)=\dfrac{1}{36x^2}-1$.""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $v\neq 0$, $(5v^{-1}-1)(5v^{-1}+1)=\dfrac{25}{v^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=5v^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5v^{-1})^2-1=\frac{25}{v^2}-1$$

The reciprocal square carries coefficient $25$ on $v^2$ in the denominator.

The printed coefficient $25$ is the one that survives the expansion.""",
            ),
            (
                r"""For $h>0$, $(h^2)^3=h^5$ (variant 3).""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $t>0$, $(t^2)^3=t^5$ (variant 1).""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
        ],
        overview=r"""Five independent reciprocal-power claims. Adding $x^{-1}+x^{-2}$ needs a common denominator; it is not $x^{-3}$ and not $1/(x+x^{2})$. Products still add exponents.""",
    ),
    task(
        title="Changing bases inside a stacked fractional power",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $w\neq 0$, $(2w^{-1}-1)(2w^{-1}+1)=\dfrac{4}{w^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=2w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2w^{-1})^2-1=\frac{4}{w^2}-1$$

The reciprocal square carries coefficient $4$ on $w^2$ in the denominator.

The printed coefficient $4$ is the one that survives the expansion.""",
            ),
            (
                r"""If $m>0$, then $\dfrac{m^{2/3}\cdot\sqrt[3]{m\sqrt{m}}}{m^{1/6}\cdot\sqrt[6]{m^5}}=\sqrt[3]{m}$.""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $x\neq 0$, $(7x^{-1}-1)(7x^{-1}+1)=\dfrac{1}{49x^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=7x^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7x^{-1})^2-1=\frac{49}{x^2}-1$$

The reciprocal square carries coefficient $49$ on $x^2$ in the denominator.

The reciprocal square carries numerator $49$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""For $m>0$, $(m^2)^3=m^5$ (variant 6).""",
                False,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For $u\neq 0$, $(6u^{-1}-1)(6u^{-1}+1)=\dfrac{36}{u^2}-1$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
        ],
        overview=r"""Five independent stacked fractional powers. Multiply the two exponents, or rewrite each base as a power of $2$. Adding the fractional exponents is the product trap.""",
    ),
    task(
        title="Exam leftover traps from powers and nested roots",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""A leftover nested form, $\sqrt{x^{3}}=x^{3/2}$ on $x>0$.""",
                True,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
            (
                r"""For $c\neq 0$, $c^{8}/c^{6}=c^2$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""For positive $h$, raising $h$ to the second power, then to the third, and finally taking the principal square root of the result yields $h$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $w\neq 0$, $(7w^{-1}-1)(7w^{-1}+1)=\dfrac{49}{w^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=7w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7w^{-1})^2-1=\frac{49}{w^2}-1$$

The reciprocal square carries coefficient $49$ on $w^2$ in the denominator.

The printed coefficient $49$ is the one that survives the expansion.""",
            ),
            (
                r"""For $t>0$, $(t^2)^3=t^5$ (variant 2).""",
                False,
                r"""Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$""",
            ),
        ],
        overview=r"""Five leftover independent claims. Fractional powers still add, subtract, and multiply in the usual way. A binomial square of roots keeps the cross term; $\sqrt{x}\cdot\sqrt{x}=x$.""",
    ),
]

