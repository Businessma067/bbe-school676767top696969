"""Chapter 2 elementary algebra exam bank (subsection 2.5 — mixed exam sets, 34 tasks).

Formal exam claims only. Every explanation is authored and verified by hand
(no templated generation): each True claim is checked algebraically, and each
False claim is checked against the actual correct value or a concrete
counterexample.
"""

from __future__ import annotations

BANK_25: list[dict] = [
    {
        "subsection": "2.5",
        "title": "Warm-up: expanding and factoring refresher",
        "diff": "1/5",
        "overview": r"Five quick checks on squaring binomials and factoring a difference of squares, including one missing cross term and one wrong factor pair.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $(x+3)^2=x^2+6x+9$.""",
                True,
                r"""**A.** → True

Expand the square:

$$(x+3)^2=x^2+2\cdot3\cdot x+3^2=x^2+6x+9$$

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $(x-4)(x+4)=x^2-16$.""",
                True,
                r"""**B.** → True

Multiply the conjugate pair using the difference of squares:

$$(x-4)(x+4)=x^2-16$$

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $x^2-9=(x-3)(x+9)$.""",
                False,
                r"""**C.** → False

Factor $x^2-9$ correctly as a difference of squares:

$$x^2-9=(x-3)(x+3)$$

The claimed factor $(x+9)$ does not match: expanding $(x-3)(x+9)=x^2+6x-27\neq x^2-9$. So the statement is False.""",
            ),
            (
                r"""For every real $x$, $(x+5)^2=x^2+25$.""",
                False,
                r"""**D.** → False

Expanding correctly gives:

$$(x+5)^2=x^2+10x+25$$

The claim omits the middle term $10x$. So the statement is False.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x-y)^2=x^2-2xy+y^2$.""",
                True,
                r"""**E.** → True

Expand the square of a difference:

$$(x-y)^2=x^2-2xy+y^2$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Warm-up: simplifying basic rational expressions",
        "diff": "1/5",
        "overview": r"Five short rational-expression simplifications: adding, multiplying, and cancelling simple fractions, with one wrong common denominator and one wrong cancellation.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq0$, $\dfrac1x+\dfrac1x=\dfrac2x$.""",
                True,
                r"""**A.** → True

Adding two identical fractions doubles the numerator:

$$\frac1x+\frac1x=\frac2x$$

So the statement is True.""",
            ),
            (
                r"""For $x\neq0$, $\dfrac2x\cdot\dfrac x4=\dfrac12$.""",
                True,
                r"""**B.** → True

Multiply numerators and denominators, then cancel the common factor $x$:

$$\frac2x\cdot\frac x4=\frac{2x}{4x}=\frac12$$

So the statement is True.""",
            ),
            (
                r"""For $x\neq-1$, $\dfrac{x^2-1}{x+1}=x+1$.""",
                False,
                r"""**C.** → False

Factor the numerator as a difference of squares and cancel:

$$\frac{x^2-1}{x+1}=\frac{(x-1)(x+1)}{x+1}=x-1$$

The correct reduction is $x-1$, not $x+1$. So the statement is False.""",
            ),
            (
                r"""For $x\neq0$, $\dfrac1x+\dfrac1{2x}=\dfrac2{3x}$.""",
                False,
                r"""**D.** → False

Use the common denominator $2x$:

$$\frac1x+\frac1{2x}=\frac2{2x}+\frac1{2x}=\frac3{2x}$$

The correct sum is $\dfrac{3}{2x}$, not $\dfrac{2}{3x}$. So the statement is False.""",
            ),
            (
                r"""For $x,y\neq0$, $\dfrac xy\cdot\dfrac yx=1$.""",
                True,
                r"""**E.** → True

The factors cancel completely:

$$\frac xy\cdot\frac yx=\frac{xy}{xy}=1$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Warm-up: powers and roots refresher",
        "diff": "2/5",
        "overview": r"Five direct evaluations of exponent rules for positive $x$, including one exponent-addition slip and one negative-exponent sign error.",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""$x^{1/2}\cdot x^{1/2}=x$ for $x>0$.""",
                True,
                r"""**A.** → True

Add the exponents when multiplying like bases:

$$x^{1/2}\cdot x^{1/2}=x^{1/2+1/2}=x^1=x$$

So the statement is True.""",
            ),
            (
                r"""$(x^2)^3=x^5$ for real $x$.""",
                False,
                r"""**B.** → False

Multiply the exponents for a power of a power:

$$(x^2)^3=x^{2\cdot3}=x^6$$

The correct result is $x^6$, not $x^5$. So the statement is False.""",
            ),
            (
                r"""$x^{-2}=-x^2$ for $x>0$.""",
                False,
                r"""**C.** → False

A negative exponent means a reciprocal, not a negative sign:

$$x^{-2}=\frac1{x^2}$$

For $x>0$, $\dfrac1{x^2}>0$, which cannot equal $-x^2<0$. So the statement is False.""",
            ),
            (
                r"""$\sqrt{x^2}=x$ for $x>0$.""",
                True,
                r"""**D.** → True

Since $x>0$, $|x|=x$, so:

$$\sqrt{x^2}=|x|=x$$

So the statement is True.""",
            ),
            (
                r"""$x^{2/3}=\left(x^{1/3}\right)^2$ for $x>0$.""",
                True,
                r"""**E.** → True

Rewrite the fractional exponent as a power of a root:

$$x^{2/3}=\left(x^{1/3}\right)^2$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Warm-up: absolute value basics",
        "diff": "2/5",
        "overview": r"Five basic absolute value facts for a real number, including the classic sign flip for negative inputs and a false additive rule.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $|x|\ge0$.""",
                True,
                r"""**A.** → True

By definition, absolute value measures distance from $0$, which is never negative:

$$|x|\ge0$$

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $|-x|=|x|$.""",
                True,
                r"""**B.** → True

Negation does not change distance from $0$:

$$|-x|=|x|$$

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x|^2=x^2$.""",
                True,
                r"""**C.** → True

Squaring removes the sign either way:

$$|x|^2=x^2$$

So the statement is True.""",
            ),
            (
                r"""For every real $x<0$, $|x|=x$.""",
                False,
                r"""**D.** → False

For $x<0$, the absolute value flips the sign:

$$|x|=-x$$

So $|x|=x$ would force $x=0$, contradicting $x<0$. So the statement is False.""",
            ),
            (
                r"""For every real $x$, $|x+3|=|x|+3$.""",
                False,
                r"""**E.** → False

Test $x=-5$: $|{-5}+3|=|-2|=2$, while $|{-5}|+3=5+3=8$. Since $2\neq8$, the claimed equality fails. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Sum and product identities for two numbers",
        "diff": "3/5",
        "overview": r"From $a+b=7$ and $ab=10$, evaluate $a^2+b^2$, $(a-b)^2$, $a^3+b^3$, and the pair $\{a,b\}$ itself, with two wrong formulas as bait.",
        "context": r"""Let $a$ and $b$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $a+b=7$ and $ab=10$, then $a^2+b^2=29$.""",
                True,
                r"""**A.** → True

Use $a^2+b^2=(a+b)^2-2ab$:

$$a^2+b^2=7^2-2\cdot10=49-20=29$$

So the statement is True.""",
            ),
            (
                r"""If $a+b=7$ and $ab=10$, then $a^3+b^3=343$.""",
                False,
                r"""**B.** → False

The correct identity is $a^3+b^3=(a+b)^3-3ab(a+b)$, not $(a+b)^3$ alone:

$$a^3+b^3=7^3-3\cdot10\cdot7=343-210=133$$

Cubing $a+b$ without the correction term gives $343$, which is wrong. So the statement is False.""",
            ),
            (
                r"""If $a+b=7$ and $ab=10$, then $(a-b)^2=9$.""",
                True,
                r"""**C.** → True

Use $(a-b)^2=(a+b)^2-4ab$:

$$(a-b)^2=49-40=9$$

So the statement is True.""",
            ),
            (
                r"""If $a+b=7$ and $ab=10$, then $\{a,b\}=\{2,5\}$.""",
                True,
                r"""**D.** → True

$a$ and $b$ are the roots of $t^2-7t+10=0$:

$$t^2-7t+10=(t-2)(t-5)=0$$

So $\{a,b\}=\{2,5\}$, and the statement is True.""",
            ),
            (
                r"""If $a+b=7$ and $ab=10$, then $a^2+b^2=49$.""",
                False,
                r"""**E.** → False

This forgets to subtract $2ab$:

$$a^2+b^2=(a+b)^2-2ab=49-20=29\neq49$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Reciprocal sums raised to higher powers",
        "diff": "4/5",
        "overview": r"From $a+\frac1a=3$, climb to $a^2+\frac1{a^2}$, $a^3+\frac1{a^3}$, and $a^4+\frac1{a^4}$, with two arithmetic slips as bait.",
        "context": r"""Let $a$ be a nonzero real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $a+\dfrac1a=3$ (with $a\neq0$), then $a^2+\dfrac1{a^2}=7$.""",
                True,
                r"""**A.** → True

Square the given sum:

$$\left(a+\frac1a\right)^2=a^2+2+\frac1{a^2}=9$$

$$a^2+\frac1{a^2}=9-2=7$$

So the statement is True.""",
            ),
            (
                r"""If $a+\dfrac1a=3$, then $a^3+\dfrac1{a^3}=18$.""",
                True,
                r"""**B.** → True

Cube the given sum:

$$\left(a+\frac1a\right)^3=a^3+\frac1{a^3}+3\left(a+\frac1a\right)=27$$

$$a^3+\frac1{a^3}=27-3\cdot3=18$$

So the statement is True.""",
            ),
            (
                r"""If $a+\dfrac1a=3$, then $a^4+\dfrac1{a^4}=47$.""",
                True,
                r"""**C.** → True

Square the result from part A:

$$\left(a^2+\frac1{a^2}\right)^2=a^4+2+\frac1{a^4}=49$$

$$a^4+\frac1{a^4}=49-2=47$$

So the statement is True.""",
            ),
            (
                r"""If $a+\dfrac1a=3$, then $a^2+\dfrac1{a^2}=9$.""",
                False,
                r"""**D.** → False

Squaring the sum gives $9$ only before subtracting the cross term $2$:

$$a^2+\frac1{a^2}=\left(a+\frac1a\right)^2-2=9-2=7\neq9$$

So the statement is False.""",
            ),
            (
                r"""If $a+\dfrac1a=3$, then $a^3+\dfrac1{a^3}=24$.""",
                False,
                r"""**E.** → False

The correct value subtracts $3\left(a+\dfrac1a\right)=9$, not $3$:

$$a^3+\frac1{a^3}=27-9=18\neq24$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A reciprocal difference and its powers",
        "diff": "4/5",
        "overview": r"From $t-\frac1t=2$ with $t>0$, find $t^2+\frac1{t^2}$, $t^3-\frac1{t^3}$, and the positive value of $t+\frac1t$, with two sign-flip errors as bait.",
        "context": r"""Let $t$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $t-\dfrac1t=2$ for some $t>0$, then $t^2+\dfrac1{t^2}=6$.""",
                True,
                r"""**A.** → True

Square the given difference:

$$\left(t-\frac1t\right)^2=t^2-2+\frac1{t^2}=4$$

$$t^2+\frac1{t^2}=4+2=6$$

So the statement is True.""",
            ),
            (
                r"""If $t-\dfrac1t=2$, then $t^3-\dfrac1{t^3}=14$.""",
                True,
                r"""**B.** → True

Cube the given difference:

$$\left(t-\frac1t\right)^3=t^3-\frac1{t^3}-3\left(t-\frac1t\right)=8$$

$$t^3-\frac1{t^3}=8+3\cdot2=14$$

So the statement is True.""",
            ),
            (
                r"""If $t-\dfrac1t=2$ and $t>0$, then $t+\dfrac1t=2\sqrt2$.""",
                True,
                r"""**C.** → True

Square $t+\dfrac1t$ using the part A result:

$$\left(t+\frac1t\right)^2=t^2+\frac1{t^2}+2=6+2=8$$

Since $t>0$, $t+\dfrac1t>0$, so:

$$t+\frac1t=\sqrt8=2\sqrt2$$

So the statement is True.""",
            ),
            (
                r"""If $t-\dfrac1t=2$, then $t^2+\dfrac1{t^2}=2$.""",
                False,
                r"""**D.** → False

A sign slip treats the correction term as $+2$ instead of $-2$ when squaring:

$$t^2+\frac1{t^2}=\left(t-\frac1t\right)^2+2=4+2=6\neq2$$

So the statement is False.""",
            ),
            (
                r"""If $t-\dfrac1t=2$, then $t^3-\dfrac1{t^3}=2$.""",
                False,
                r"""**E.** → False

A sign slip subtracts instead of adds the correction term:

$$t^3-\frac1{t^3}=\left(t-\frac1t\right)^3+3\left(t-\frac1t\right)=8+6=14\neq2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Cancelling a product of rational expressions",
        "diff": "3/5",
        "overview": r"Factor and cancel a product of two rational expressions in $x$, then check a related quotient and the full excluded domain.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq3,-2$, $\dfrac{x^2-9}{x^2-x-6}=\dfrac{x+3}{x+2}$.""",
                True,
                r"""**A.** → True

Factor numerator and denominator:

$$\frac{x^2-9}{x^2-x-6}=\frac{(x-3)(x+3)}{(x-3)(x+2)}=\frac{x+3}{x+2}$$

So the statement is True.""",
            ),
            (
                r"""For $x\neq3,-2,-3$, $\dfrac{x^2-9}{x^2-x-6}\cdot\dfrac{x+2}{x+3}=1$.""",
                True,
                r"""**B.** → True

Using the reduction from part A:

$$\frac{x+3}{x+2}\cdot\frac{x+2}{x+3}=1$$

So the statement is True.""",
            ),
            (
                r"""For $x\neq3,-2,-3$, $\dfrac{x^2-9}{x^2-x-6}\cdot\dfrac{x+2}{x+3}=x+3$.""",
                False,
                r"""**C.** → False

The factor $(x+2)$ cancels with the numerator's $(x+2)$, and $(x+3)$ cancels with the denominator's $(x+3)$, leaving:

$$\frac{x+3}{x+2}\cdot\frac{x+2}{x+3}=1\neq x+3$$

So the statement is False.""",
            ),
            (
                r"""For $x\neq3,-2,-3$, $\dfrac{x^2-9}{x^2-x-6}\div\dfrac{x+2}{x+3}=\left(\dfrac{x+3}{x+2}\right)^2$.""",
                True,
                r"""**D.** → True

Dividing by a fraction multiplies by its reciprocal:

$$\frac{x+3}{x+2}\div\frac{x+2}{x+3}=\frac{x+3}{x+2}\cdot\frac{x+3}{x+2}=\left(\frac{x+3}{x+2}\right)^2$$

So the statement is True.""",
            ),
            (
                r"""In the expression $\dfrac{x^2-9}{x^2-x-6}\cdot\dfrac{x+2}{x+3}$, the only value excluded from the domain is $x=3$.""",
                False,
                r"""**E.** → False

The factored denominator $(x-3)(x+2)$ and the multiplier's denominator $(x+3)$ vanish at $x=3$, $x=-2$, and $x=-3$ respectively, so all three values must be excluded, not just $x=3$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Reducing a stacked fraction to a single ratio",
        "diff": "4/5",
        "overview": r"Reduce a stacked fraction in $t$ to a single ratio, evaluate it at a point, and probe its domain and a flipped variant.",
        "context": r"""Let $t$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $t\neq0,1$, $\dfrac{1+\frac1t}{1-\frac1t}=\dfrac{t+1}{t-1}$.""",
                True,
                r"""**A.** → True

Combine each level over the denominator $t$:

$$\frac{1+\frac1t}{1-\frac1t}=\frac{\frac{t+1}{t}}{\frac{t-1}{t}}=\frac{t+1}{t-1}$$

So the statement is True.""",
            ),
            (
                r"""At $t=3$, $\dfrac{1+\frac1t}{1-\frac1t}=2$.""",
                True,
                r"""**B.** → True

Substitute $t=3$ into the reduced form from part A:

$$\frac{t+1}{t-1}=\frac{3+1}{3-1}=\frac42=2$$

So the statement is True.""",
            ),
            (
                r"""For $t\neq0,1$, $\dfrac{1+\frac1t}{1-\frac1t}=\dfrac{t-1}{t+1}$.""",
                False,
                r"""**C.** → False

The reduction from part A gives $\dfrac{t+1}{t-1}$, not its reciprocal $\dfrac{t-1}{t+1}$. So the statement is False.""",
            ),
            (
                r"""The expression $\dfrac{1+\frac1t}{1-\frac1t}$ is undefined only at $t=0$.""",
                False,
                r"""**D.** → False

The expression also has $1-\dfrac1t=0$ at $t=1$, which makes the outer fraction undefined there too. So the domain excludes both $t=0$ and $t=1$, not $t=0$ alone. So the statement is False.""",
            ),
            (
                r"""At $t=-1$, $\dfrac{1+\frac1t}{1-\frac1t}=0$.""",
                True,
                r"""**E.** → True

$$\frac{t+1}{t-1}=\frac{-1+1}{-1-1}=\frac0{-2}=0$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Expanding, subtracting, and reading off a remainder",
        "diff": "3/5",
        "overview": r"Expand a square and a product, subtract them, and read off the resulting linear expression at a chosen point and at its root.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $(x+2)^2-(x-1)(x+3)=2x+7$.""",
                True,
                r"""**A.** → True

Expand both pieces:

$$(x+2)^2=x^2+4x+4,\qquad (x-1)(x+3)=x^2+2x-3$$

Subtract:

$$(x^2+4x+4)-(x^2+2x-3)=2x+7$$

So the statement is True.""",
            ),
            (
                r"""At $x=-2$, $(x+2)^2-(x-1)(x+3)=3$.""",
                True,
                r"""**B.** → True

Using the reduced form from part A:

$$2(-2)+7=3$$

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $(x+2)^2-(x-1)(x+3)=x^2+7$.""",
                False,
                r"""**C.** → False

The $x^2$ terms cancel in the subtraction (part A), leaving only the linear expression $2x+7$; there is no $x^2$ term in the simplified result. So the statement is False.""",
            ),
            (
                r"""Setting $2x+7=0$ gives $x=-\dfrac72$, and at this value $(x+2)^2-(x-1)(x+3)=0$.""",
                True,
                r"""**D.** → True

$$2x+7=0\ \Rightarrow\ x=-\frac72$$

Since the original expression equals $2x+7$ for every real $x$ (part A), substituting $x=-\dfrac72$ gives $0$. So the statement is True.""",
            ),
            (
                r"""For every real $x$, $(x+2)^2-(x-1)(x+3)>0$.""",
                False,
                r"""**E.** → False

At $x=-4$: $2(-4)+7=-1<0$, so the expression is negative there. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A radical expression built from a difference of squares",
        "diff": "4/5",
        "overview": r"Rewrite $\frac{x-4}{\sqrt x-2}$ using a difference of squares, evaluate it at two points, and identify why $x=4$ must be excluded.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\ge0$ and $x\neq4$, $\dfrac{x-4}{\sqrt x-2}=\sqrt x+2$.""",
                True,
                r"""**A.** → True

Write $x-4$ as a difference of squares in $\sqrt x$:

$$x-4=\left(\sqrt x-2\right)\left(\sqrt x+2\right)$$

$$\frac{x-4}{\sqrt x-2}=\sqrt x+2$$

So the statement is True.""",
            ),
            (
                r"""At $x=9$, $\dfrac{x-4}{\sqrt x-2}=5$.""",
                True,
                r"""**B.** → True

$$\sqrt9+2=3+2=5$$

So the statement is True.""",
            ),
            (
                r"""At $x=0$, $\dfrac{x-4}{\sqrt x-2}=-2$.""",
                False,
                r"""**C.** → False

$$\frac{0-4}{\sqrt0-2}=\frac{-4}{-2}=2,\qquad \sqrt0+2=2$$

Both computations give $2$, not $-2$. So the statement is False.""",
            ),
            (
                r"""For $x\ge0$ and $x\neq4$, $\dfrac{x-4}{\sqrt x-2}=\sqrt x-2$.""",
                False,
                r"""**D.** → False

The correct factorization gives $\sqrt x+2$, not $\sqrt x-2$; the second factor of $x-4=(\sqrt x-2)(\sqrt x+2)$ carries a plus sign. So the statement is False.""",
            ),
            (
                r"""In $\dfrac{x-4}{\sqrt x-2}$, the restriction $x\neq4$ is needed because at $x=4$ both the numerator and the denominator vanish.""",
                True,
                r"""**E.** → True

At $x=4$: numerator $x-4=0$ and denominator $\sqrt x-2=0$, an indeterminate $\frac00$ form, so $x=4$ must be excluded. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Fractional exponents after a substitution",
        "diff": "5/5",
        "overview": r"From $y=8^{2/3}$, evaluate $y^{3/2}$, $y^{-1/2}$, and $y^2$ using exponent rules, with two misapplied-exponent errors as bait.",
        "context": r"""Let $y$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""$8^{2/3}=4$.""",
                True,
                r"""**A.** → True

Take the cube root, then square:

$$8^{2/3}=\left(8^{1/3}\right)^2=2^2=4$$

So the statement is True.""",
            ),
            (
                r"""If $y=8^{2/3}$, then $y^{3/2}=8$.""",
                True,
                r"""**B.** → True

With $y=8^{2/3}=4$ (part A):

$$y^{3/2}=4^{3/2}=\left(4^{1/2}\right)^3=2^3=8$$

So the statement is True.""",
            ),
            (
                r"""If $y=8^{2/3}$, then $y^{-1/2}=\dfrac12$.""",
                True,
                r"""**C.** → True

With $y=4$:

$$y^{-1/2}=4^{-1/2}=\frac1{4^{1/2}}=\frac12$$

So the statement is True.""",
            ),
            (
                r"""$8^{2/3}=\dfrac{16}{3}$.""",
                False,
                r"""**D.** → False

The exponent $\dfrac23$ means "cube root, then square," not "multiply by $\dfrac23$":

$$8^{2/3}=\left(8^{1/3}\right)^2=4\neq\frac{16}{3}$$

So the statement is False.""",
            ),
            (
                r"""If $y=8^{2/3}$, then $y^2=8$.""",
                False,
                r"""**E.** → False

With $y=4$:

$$y^2=4^2=16\neq8$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Two solutions from one absolute value equation, one common value",
        "diff": "3/5",
        "overview": r"Solve $|a-1|=3$ for both values of $a$, then show both give the same value of $a^2-2a$, with two false readings of the equation as bait.",
        "context": r"""Let $a$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $|a-1|=3$, then $a=4$ or $a=-2$.""",
                True,
                r"""**A.** → True

Split into two linear cases:

$$a-1=3\ \Rightarrow\ a=4,\qquad a-1=-3\ \Rightarrow\ a=-2$$

So the statement is True.""",
            ),
            (
                r"""If $a=4$ satisfies $|a-1|=3$, then $a^2-2a=8$.""",
                True,
                r"""**B.** → True

$$4^2-2\cdot4=16-8=8$$

So the statement is True.""",
            ),
            (
                r"""If $a=-2$ satisfies $|a-1|=3$, then $a^2-2a=8$.""",
                True,
                r"""**C.** → True

$$(-2)^2-2(-2)=4+4=8$$

Both roots give the same value because $a^2-2a=(a-1)^2-1=3^2-1=8$, regardless of which sign was chosen for $a-1$. So the statement is True.""",
            ),
            (
                r"""If $|a-1|=3$, then $a=2$.""",
                False,
                r"""**D.** → False

Substituting $a=2$ gives $|2-1|=1\neq3$, so $a=2$ does not satisfy the equation. So the statement is False.""",
            ),
            (
                r"""If $|a-1|=3$, then $a-1=3$ only, and $a-1=-3$ is not possible.""",
                False,
                r"""**E.** → False

An absolute value equation $|a-1|=3$ splits into two cases, $a-1=3$ and $a-1=-3$; both are valid and neither can be discarded. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Sum and product of two solutions from an absolute value equation",
        "diff": "3/5",
        "overview": r"Solve $|2x+3|=7$, then check the sum and product of its two solutions, with a sign error and a false extra solution as bait.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $|2x+3|=7$, then $x=2$ or $x=-5$.""",
                True,
                r"""**A.** → True

$$2x+3=7\ \Rightarrow\ x=2,\qquad 2x+3=-7\ \Rightarrow\ x=-5$$

So the statement is True.""",
            ),
            (
                r"""If $x=2$ or $x=-5$ solves $|2x+3|=7$, then in both cases $(2x+3)^2=49$.""",
                True,
                r"""**B.** → True

Squaring an absolute value equation removes the bars: $|2x+3|=7\ \Rightarrow\ (2x+3)^2=49$, which both solutions satisfy by construction. So the statement is True.""",
            ),
            (
                r"""If $|2x+3|=7$, then the sum of its two solutions is $-3$.""",
                True,
                r"""**C.** → True

$$2+(-5)=-3$$

So the statement is True.""",
            ),
            (
                r"""If $|2x+3|=7$, then the product of its two solutions is $10$.""",
                False,
                r"""**D.** → False

$$2\cdot(-5)=-10\neq10$$

So the statement is False.""",
            ),
            (
                r"""$x=5$ is a solution of $|2x+3|=7$.""",
                False,
                r"""**E.** → False

$$|2(5)+3|=|13|=13\neq7$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A constant sum of two absolute values on an interval",
        "diff": "3/5",
        "overview": r"On $2\le x\le5$, evaluate the constant sum $|x-2|+|x-5|$ and the linear difference $|x-2|-|x-5|$, and test a point outside the interval.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $2\le x\le5$, $|x-2|+|x-5|=3$.""",
                True,
                r"""**A.** → True

For $2\le x\le5$: $x-2\ge0$ and $x-5\le0$, so:

$$|x-2|+|x-5|=(x-2)+(5-x)=3$$

So the statement is True.""",
            ),
            (
                r"""At $x=3$, $|x-2|+|x-5|=3$.""",
                True,
                r"""**B.** → True

$$|3-2|+|3-5|=1+2=3$$

So the statement is True.""",
            ),
            (
                r"""At $x=6$, $|x-2|+|x-5|=3$.""",
                False,
                r"""**C.** → False

$x=6$ lies outside $[2,5]$, so both bars open positively:

$$|6-2|+|6-5|=4+1=5\neq3$$

So the statement is False.""",
            ),
            (
                r"""For $2\le x\le5$, $|x-2|-|x-5|=2x-7$.""",
                True,
                r"""**D.** → True

$$(x-2)-(5-x)=2x-7$$

So the statement is True.""",
            ),
            (
                r"""For $2\le x\le5$, $|x-2|+|x-5|=2x-7$.""",
                False,
                r"""**E.** → False

The sum $|x-2|+|x-5|$ is the constant $3$ on this interval (part A), while $2x-7$ is the linear expression for the difference (part D), not the sum; they only coincide at $x=5$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "The minimum of a sum of two absolute values",
        "diff": "5/5",
        "overview": r"Solve $|t-3|+|t+1|=6$ by cases, then use the same expression to find its minimum value over all real $t$.",
        "context": r"""Let $t$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The equation $|t-3|+|t+1|=6$ has exactly two real solutions, $t=4$ and $t=-2$.""",
                True,
                r"""**A.** → True

Case $t\ge3$: $(t-3)+(t+1)=6\ \Rightarrow\ t=4$ (valid, $\ge3$). Case $t\le-1$: $(3-t)+(-t-1)=6\ \Rightarrow\ t=-2$ (valid, $\le-1$). Case $-1<t<3$: $(3-t)+(t+1)=4\neq6$, no solution there. So the statement is True.""",
            ),
            (
                r"""For every $t$ with $-1\le t\le3$, $|t-3|+|t+1|=4$.""",
                True,
                r"""**B.** → True

For $-1\le t\le3$: $t-3\le0$ and $t+1\ge0$, so:

$$|t-3|+|t+1|=(3-t)+(t+1)=4$$

So the statement is True.""",
            ),
            (
                r"""The minimum possible value of $|t-3|+|t+1|$, over all real $t$, is $4$.""",
                True,
                r"""**C.** → True

$|t-3|+|t+1|$ is the sum of the distances from $t$ to $3$ and from $t$ to $-1$. The smallest possible sum of distances to two fixed points equals the distance between them, $|3-(-1)|=4$, attained for every $t$ in $[-1,3]$ (part B). So the statement is True.""",
            ),
            (
                r"""The equation $|t-3|+|t+1|=6$ has a solution with $-1\le t\le3$.""",
                False,
                r"""**D.** → False

On $[-1,3]$ the expression is constantly $4$ (part B), so it never reaches $6$ there; the actual solutions $t=4$ and $t=-2$ (part A) lie outside this interval. So the statement is False.""",
            ),
            (
                r"""The equation $|t-3|+|t+1|=2$ has a real solution.""",
                False,
                r"""**E.** → False

Since the minimum value of $|t-3|+|t+1|$ over all real $t$ is $4$ (part C), the sum can never equal $2$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A three-variable square and its cross terms",
        "diff": "3/5",
        "overview": r"Expand $(x+y+z)^2$ and a signed variant, then use given values of the sum and one symmetric function to find the other, with a missing-factor-of-2 error as bait.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $x,y,z$, $(x+y+z)^2=x^2+y^2+z^2+2xy+2yz+2zx$.""",
                True,
                r"""**A.** → True

Expand the square of a three-term sum:

$$(x+y+z)^2=x^2+y^2+z^2+2xy+2yz+2zx$$

So the statement is True.""",
            ),
            (
                r"""If $x+y+z=6$ and $xy+yz+zx=11$, then $x^2+y^2+z^2=14$.""",
                True,
                r"""**B.** → True

$$x^2+y^2+z^2=(x+y+z)^2-2(xy+yz+zx)=6^2-2\cdot11=36-22=14$$

So the statement is True.""",
            ),
            (
                r"""If $x+y+z=6$ and $x^2+y^2+z^2=14$, then $xy+yz+zx=25$.""",
                False,
                r"""**C.** → False

$$xy+yz+zx=\frac{(x+y+z)^2-(x^2+y^2+z^2)}2=\frac{36-14}2=11\neq25$$

So the statement is False.""",
            ),
            (
                r"""For all real $x,y,z$, $(x+y+z)^2=x^2+y^2+z^2+xy+yz+zx$.""",
                False,
                r"""**D.** → False

The correct expansion doubles the cross terms (part A):

$$(x+y+z)^2=x^2+y^2+z^2+2(xy+yz+zx)$$

Dropping the factor of $2$, as claimed here, does not match this identity in general. So the statement is False.""",
            ),
            (
                r"""For all real $x,y,z$, $(x-y+z)^2=x^2+y^2+z^2-2xy-2yz+2zx$.""",
                True,
                r"""**E.** → True

Apply the same expansion with $-y$ in place of $y$:

$$\bigl(x+(-y)+z\bigr)^2=x^2+y^2+z^2+2\bigl(x(-y)+(-y)z+zx\bigr)=x^2+y^2+z^2-2xy-2yz+2zx$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Solving a linear system before evaluating",
        "diff": "3/5",
        "overview": r"Solve the linear system $x+y=5$, $x-y=1$, then evaluate $xy$, $x^2-y^2$, $x^2+y^2$, and $x^3-y^3$, with two classic sum/difference confusions as bait.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $x+y=5$ and $x-y=1$, then $x=3$ and $y=2$.""",
                True,
                r"""**A.** → True

Add and subtract the two equations:

$$2x=6\ \Rightarrow\ x=3,\qquad 2y=4\ \Rightarrow\ y=2$$

So the statement is True.""",
            ),
            (
                r"""If $x+y=5$ and $x-y=1$, then $xy=6$.""",
                True,
                r"""**B.** → True

$$xy=3\cdot2=6$$

So the statement is True.""",
            ),
            (
                r"""If $x+y=5$ and $x-y=1$, then $x^2-y^2=5$.""",
                True,
                r"""**C.** → True

$$x^2-y^2=(x-y)(x+y)=1\cdot5=5$$

So the statement is True.""",
            ),
            (
                r"""If $x+y=5$ and $x-y=1$, then $x^2+y^2=25$.""",
                False,
                r"""**D.** → False

This mistakes $x^2+y^2$ for $(x+y)^2$:

$$x^2+y^2=3^2+2^2=13\neq25$$

So the statement is False.""",
            ),
            (
                r"""If $x+y=5$ and $x-y=1$, then $x^3-y^3=25$.""",
                False,
                r"""**E.** → False

$$x^3-y^3=(x-y)(x^2+xy+y^2)=1\cdot(9+6+4)=19\neq25$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A vanishing sum and its symmetric functions",
        "diff": "5/5",
        "overview": r"From $a+b+c=0$ and $a^2+b^2+c^2=8$, recover $ab+bc+ca$ and a related sum of squares, with two sign errors as bait.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $a+b+c=0$ and $a^2+b^2+c^2=8$, then $ab+bc+ca=-4$.""",
                True,
                r"""**A.** → True

$$(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)$$

$$0=8+2(ab+bc+ca)\ \Rightarrow\ ab+bc+ca=-4$$

So the statement is True.""",
            ),
            (
                r"""If $a+b+c=0$, then $(a+b)^2+(b+c)^2+(c+a)^2=a^2+b^2+c^2$.""",
                True,
                r"""**B.** → True

Since $a+b+c=0$: $a+b=-c$, $b+c=-a$, $c+a=-b$, so:

$$(a+b)^2+(b+c)^2+(c+a)^2=c^2+a^2+b^2=a^2+b^2+c^2$$

So the statement is True.""",
            ),
            (
                r"""If $a+b+c=0$, then $a^3+b^3+c^3=3abc$.""",
                True,
                r"""**C.** → True

For any real $a,b,c$: $a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$. Since $a+b+c=0$, the right side vanishes:

$$a^3+b^3+c^3=3abc$$

So the statement is True.""",
            ),
            (
                r"""If $a+b+c=0$ and $a^2+b^2+c^2=8$, then $ab+bc+ca=4$.""",
                False,
                r"""**D.** → False

Solving $0=8+2(ab+bc+ca)$ gives $ab+bc+ca=-4$ (part A); the claimed value $4$ has the wrong sign. So the statement is False.""",
            ),
            (
                r"""If $a+b+c=0$ and $a^2+b^2+c^2=8$, then $(a+b)^2+(b+c)^2+(c+a)^2=16$.""",
                False,
                r"""**E.** → False

By part B, $(a+b)^2+(b+c)^2+(c+a)^2=a^2+b^2+c^2=8$, not $16$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "From a squared reciprocal sum back to the first power",
        "diff": "4/5",
        "overview": r"From $m^2+\frac1{m^2}=7$, work backward to $m+\frac1m$, $m-\frac1m$, and $m^4+\frac1{m^4}$, with two forgotten-constant errors as bait.",
        "context": r"""Let $m$ be a nonzero real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $m^2+\dfrac1{m^2}=7$, then $m+\dfrac1m=3$ or $m+\dfrac1m=-3$.""",
                True,
                r"""**A.** → True

$$\left(m+\frac1m\right)^2=m^2+2+\frac1{m^2}=7+2=9\ \Rightarrow\ m+\frac1m=\pm3$$

So the statement is True.""",
            ),
            (
                r"""If $m^2+\dfrac1{m^2}=7$, then $m-\dfrac1m=\sqrt5$ or $m-\dfrac1m=-\sqrt5$.""",
                True,
                r"""**B.** → True

$$\left(m-\frac1m\right)^2=m^2-2+\frac1{m^2}=7-2=5\ \Rightarrow\ m-\frac1m=\pm\sqrt5$$

So the statement is True.""",
            ),
            (
                r"""If $m^2+\dfrac1{m^2}=7$ and $m>0$, then $m+\dfrac1m=3$.""",
                True,
                r"""**C.** → True

For $m>0$, both $m>0$ and $\dfrac1m>0$, so $m+\dfrac1m>0$. Combined with $m+\dfrac1m=\pm3$ from part A, only the positive value is possible:

$$m+\frac1m=3$$

So the statement is True.""",
            ),
            (
                r"""If $m^2+\dfrac1{m^2}=7$, then $m+\dfrac1m=9$.""",
                False,
                r"""**D.** → False

This skips the square root step:

$$\left(m+\frac1m\right)^2=9\ \Rightarrow\ m+\frac1m=\pm3\neq9$$

So the statement is False.""",
            ),
            (
                r"""If $m^2+\dfrac1{m^2}=7$, then $m^4+\dfrac1{m^4}=49$.""",
                False,
                r"""**E.** → False

$$m^4+\frac1{m^4}=\left(m^2+\frac1{m^2}\right)^2-2=7^2-2=47\neq49$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A three-step chain of rational operations",
        "diff": "5/5",
        "overview": r"Chain a division and a multiplication of three rational expressions in $x$ down to a single binomial, checking an intermediate step and the final domain.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq3,-3,2,-2$, $\dfrac{x^2-4}{x+3}\div\dfrac{x-2}{x^2-9}\times\dfrac1{x+2}=x-3$.""",
                True,
                r"""**A.** → True

Factor everything and flip the division:

$$\frac{x^2-4}{x+3}\div\frac{x-2}{x^2-9}\times\frac1{x+2}=\frac{(x-2)(x+2)}{x+3}\cdot\frac{(x-3)(x+3)}{x-2}\cdot\frac1{x+2}$$

Cancel $(x-2)$, $(x+3)$, and $(x+2)$:

$$=x-3$$

So the statement is True.""",
            ),
            (
                r"""At $x=5$, $\dfrac{x^2-4}{x+3}\div\dfrac{x-2}{x^2-9}\times\dfrac1{x+2}=2$.""",
                True,
                r"""**B.** → True

Using the reduced form from part A:

$$5-3=2$$

So the statement is True.""",
            ),
            (
                r"""For $x\neq3,-3,2$, $\dfrac{x^2-4}{x+3}\div\dfrac{x-2}{x^2-9}=(x+2)(x-3)$.""",
                True,
                r"""**C.** → True

$$\frac{x^2-4}{x+3}\div\frac{x-2}{x^2-9}=\frac{(x-2)(x+2)}{x+3}\cdot\frac{(x-3)(x+3)}{x-2}=(x+2)(x-3)$$

So the statement is True.""",
            ),
            (
                r"""For $x\neq3,-3,2,-2$, $\dfrac{x^2-4}{x+3}\div\dfrac{x-2}{x^2-9}\times\dfrac1{x+2}=x+3$.""",
                False,
                r"""**D.** → False

The final multiplication by $\dfrac1{x+2}$ cancels the factor $(x+2)$ from part C, leaving $x-3$ (part A), not $x+3$. So the statement is False.""",
            ),
            (
                r"""The expression $\dfrac{x^2-4}{x+3}\div\dfrac{x-2}{x^2-9}\times\dfrac1{x+2}$ is defined at $x=-2$.""",
                False,
                r"""**E.** → False

The final factor $\dfrac1{x+2}$ is undefined at $x=-2$, so this value must be excluded from the domain. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Swapping variables inside a compact ratio",
        "diff": "4/5",
        "overview": r"Simplify a fraction of two rational expressions in $x$ and $y$, evaluate it numerically, and examine what happens under swapping and at $x=y$.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x,y\neq0$ and $x\neq-y$, $\dfrac{\frac1x-\frac1y}{\frac1x+\frac1y}=\dfrac{y-x}{y+x}$.""",
                True,
                r"""**A.** → True

Combine each level over the common denominator $xy$:

$$\frac{\frac1x-\frac1y}{\frac1x+\frac1y}=\frac{\frac{y-x}{xy}}{\frac{y+x}{xy}}=\frac{y-x}{y+x}$$

So the statement is True.""",
            ),
            (
                r"""At $x=2,\ y=3$, $\dfrac{\frac1x-\frac1y}{\frac1x+\frac1y}=\dfrac15$.""",
                True,
                r"""**B.** → True

$$\frac{3-2}{3+2}=\frac15$$

So the statement is True.""",
            ),
            (
                r"""For $x,y\neq0$ and $x\neq-y$, $\dfrac{\frac1x-\frac1y}{\frac1x+\frac1y}=\dfrac{x-y}{x+y}$.""",
                False,
                r"""**C.** → False

From part A the correct ratio is $\dfrac{y-x}{y+x}$; the claimed form has the numerator's sign flipped. So the statement is False.""",
            ),
            (
                r"""Swapping $x$ and $y$ negates the value of $\dfrac{\frac1x-\frac1y}{\frac1x+\frac1y}$.""",
                True,
                r"""**D.** → True

Swapping $x$ and $y$ in $\dfrac{y-x}{y+x}$ (part A) gives $\dfrac{x-y}{x+y}=-\dfrac{y-x}{y+x}$, the negative of the original value. So the statement is True.""",
            ),
            (
                r"""The expression $\dfrac{\frac1x-\frac1y}{\frac1x+\frac1y}$ is undefined when $x=y\neq0$.""",
                False,
                r"""**E.** → False

At $x=y$ (with $x\neq0$): the numerator $\dfrac1x-\dfrac1y=0$ and the denominator $\dfrac1x+\dfrac1y=\dfrac2x\neq0$, so the expression equals $0$ and is perfectly defined. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A squared equation read two different ways",
        "diff": "3/5",
        "overview": r"From $(n-3)^2=25$, extract both values of $n$ and the absolute-value form, with two incomplete readings of the equation as bait.",
        "context": r"""Let $n$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $(n-3)^2=25$, then $n=8$ or $n=-2$.""",
                True,
                r"""**A.** → True

$$n-3=\pm5\ \Rightarrow\ n=8\text{ or }n=-2$$

So the statement is True.""",
            ),
            (
                r"""If $(n-3)^2=25$, then $|n-3|=5$.""",
                True,
                r"""**B.** → True

Taking the (nonnegative) square root of both sides of $(n-3)^2=25$ gives $|n-3|=5$. So the statement is True.""",
            ),
            (
                r"""If $(n-3)^2=25$, then $n-3=5$ only.""",
                False,
                r"""**C.** → False

$(n-3)^2=25$ means $n-3=5$ **or** $n-3=-5$ (part A); discarding the second case loses a valid solution. So the statement is False.""",
            ),
            (
                r"""If $(n-3)^2=25$, then $n=2$.""",
                False,
                r"""**D.** → False

$(2-3)^2=(-1)^2=1\neq25$, so $n=2$ does not satisfy the equation. So the statement is False.""",
            ),
            (
                r"""If $(n-3)^2=25$, then $n^2-6n-16=0$.""",
                True,
                r"""**E.** → True

Expand $(n-3)^2=25$:

$$n^2-6n+9=25\ \Rightarrow\ n^2-6n-16=0$$

Both $n=8$ and $n=-2$ (part A) satisfy this quadratic. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Odd and even powers under a sign change",
        "diff": "3/5",
        "overview": r"Compare $(-x)^3$, $|-x|^3$, and $(-x)^4$ to their unsigned counterparts, testing where sign flips do and do not occur.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $(-x)^3=-x^3$.""",
                True,
                r"""**A.** → True

An odd power distributes the sign:

$$(-x)^3=(-1)^3x^3=-x^3$$

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $|-x|^3=|x|^3$.""",
                True,
                r"""**B.** → True

Since $|-x|=|x|$ for every real $x$, cubing both sides preserves the equality:

$$|-x|^3=|x|^3$$

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $(-x)^4=-x^4$.""",
                False,
                r"""**C.** → False

An even power removes the sign entirely:

$$(-x)^4=(-1)^4x^4=x^4$$

Since $x^4\ge0$, this equals $-x^4$ only when $x=0$, not for every real $x$. So the statement is False.""",
            ),
            (
                r"""For every real $x<0$, $|x|^3=-x^3$.""",
                True,
                r"""**D.** → True

For $x<0$, $|x|=-x$, so:

$$|x|^3=(-x)^3=-x^3$$

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $(-x)^3=x^3$.""",
                False,
                r"""**E.** → False

By part A, $(-x)^3=-x^3$, which equals $x^3$ only when $x=0$, not for every real $x$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Absolute value inequalities versus equalities",
        "diff": "3/5",
        "overview": r"Test four classic absolute-value rules for two real numbers — multiplicativity, the triangle inequality, and the reverse triangle inequality — against two false equalities.",
        "context": r"""Let $a$ and $b$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $a,b$: $|ab|=|a|\,|b|$.""",
                True,
                r"""**A.** → True

Absolute value is multiplicative:

$$|ab|=|a|\,|b|$$

So the statement is True.""",
            ),
            (
                r"""For all real $a,b$: $|a+b|\le|a|+|b|$.""",
                True,
                r"""**B.** → True

This is the triangle inequality, which holds for all real $a,b$:

$$|a+b|\le|a|+|b|$$

So the statement is True.""",
            ),
            (
                r"""For all real $a,b$: $|a+b|=|a|+|b|$.""",
                False,
                r"""**C.** → False

Test $a=1,\ b=-1$: $|a+b|=|0|=0$, while $|a|+|b|=1+1=2$. Since $0\neq2$, equality fails here (it only holds when $a$ and $b$ share a sign, or one of them is $0$). So the statement is False.""",
            ),
            (
                r"""For all real $a,b$: $|a-b|\ge|a|-|b|$.""",
                True,
                r"""**D.** → True

By the reverse triangle inequality, $|a-b|\ge\bigl||a|-|b|\bigr|$, and any number's absolute value is at least the number itself, so $\bigl||a|-|b|\bigr|\ge|a|-|b|$. Chaining these gives $|a-b|\ge|a|-|b|$ for all real $a,b$. So the statement is True.""",
            ),
            (
                r"""For all real $a,b$ with $b\neq0$: $\left|\dfrac{a}{b}\right|=\dfrac{a}{b}$.""",
                False,
                r"""**E.** → False

Test $a=1,\ b=-1$: $\left|\dfrac{a}{b}\right|=|-1|=1$, while $\dfrac ab=-1$. Since $1\neq-1$, the equality fails whenever $a/b<0$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Two absolute value conditions and their combinations",
        "diff": "5/5",
        "overview": r"Combine $|x-2|=3$ and $|y+1|=4$ into four possible $(x,y)$ pairs, then check the extreme values of $x+y$ and a claimed product.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $|x-2|=3$, then $x=5$ or $x=-1$.""",
                True,
                r"""**A.** → True

$$x-2=\pm3\ \Rightarrow\ x=5\text{ or }x=-1$$

So the statement is True.""",
            ),
            (
                r"""If $|y+1|=4$, then $y=3$ or $y=-5$.""",
                True,
                r"""**B.** → True

$$y+1=\pm4\ \Rightarrow\ y=3\text{ or }y=-5$$

So the statement is True.""",
            ),
            (
                r"""If $|x-2|=3$ and $|y+1|=4$, the largest possible value of $x+y$ is $8$.""",
                True,
                r"""**C.** → True

Checking all four combinations of $x\in\{5,-1\}$ and $y\in\{3,-5\}$ (parts A, B): the sums are $8,\,0,\,2,\,-6$. The largest is $8$ (at $x=5,\ y=3$). So the statement is True.""",
            ),
            (
                r"""If $|x-2|=3$ and $|y+1|=4$, the smallest possible value of $x+y$ is $-7$.""",
                False,
                r"""**D.** → False

From the same four sums $8,0,2,-6$ (part C), the smallest is $-6$ (at $x=-1,\ y=-5$), not $-7$. So the statement is False.""",
            ),
            (
                r"""If $|x-2|=3$ and $|y+1|=4$, the product $xy$ can equal $20$.""",
                False,
                r"""**E.** → False

The four possible products are $5\cdot3=15$, $5\cdot(-5)=-25$, $(-1)\cdot3=-3$, and $(-1)\cdot(-5)=5$. None of these equals $20$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Recovering a sum from a given difference and product",
        "diff": "4/5",
        "overview": r"From $p-q=4$ and $pq=5$, recover $p^2+q^2$, $(p+q)^2$, and $p^3-q^3$, with a one-sided reading of the sum as bait.",
        "context": r"""Let $p$ and $q$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $p-q=4$ and $pq=5$, then $p^2+q^2=26$.""",
                True,
                r"""**A.** → True

$$p^2+q^2=(p-q)^2+2pq=16+10=26$$

So the statement is True.""",
            ),
            (
                r"""If $p-q=4$ and $pq=5$, then $(p+q)^2=36$.""",
                True,
                r"""**B.** → True

$$(p+q)^2=(p-q)^2+4pq=16+20=36$$

So the statement is True.""",
            ),
            (
                r"""If $p-q=4$ and $pq=5$, then $p+q=6$, and $p+q=-6$ is impossible.""",
                False,
                r"""**C.** → False

$(p+q)^2=36$ gives $p+q=6$ **or** $p+q=-6$ (part B); both branches actually occur, e.g. $(p,q)=(5,1)$ gives $p+q=6$, while $(p,q)=(-1,-5)$ satisfies $p-q=4,\ pq=5$ and gives $p+q=-6$. So ruling out $-6$ is incorrect, and the statement is False.""",
            ),
            (
                r"""If $p-q=4$ and $pq=5$, then $p^3-q^3=124$.""",
                True,
                r"""**D.** → True

$$p^3-q^3=(p-q)^3+3pq(p-q)=64+60=124$$

So the statement is True.""",
            ),
            (
                r"""If $p-q=4$ and $pq=5$, then $p^2+q^2=16$.""",
                False,
                r"""**E.** → False

This forgets to add $2pq$:

$$p^2+q^2=(p-q)^2+2pq=16+10=26\neq16$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A sum of cubes and the sign of a cubic",
        "diff": "5/5",
        "overview": r"Factor $x^3+8$ as a sum of cubes, check the quadratic factor has no real roots, and use this to read off the sign of the cubic.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $x^3+8=(x+2)(x^2-2x+4)$.""",
                True,
                r"""**A.** → True

Apply the sum-of-cubes identity:

$$x^3+8=x^3+2^3=(x+2)\left(x^2-2x+4\right)$$

So the statement is True.""",
            ),
            (
                r"""At $x=-2$, both sides of $x^3+8=(x+2)(x^2-2x+4)$ equal $0$.""",
                True,
                r"""**B.** → True

$$(-2)^3+8=0,\qquad \bigl(-2+2\bigr)\bigl((-2)^2-2(-2)+4\bigr)=0\cdot12=0$$

So the statement is True.""",
            ),
            (
                r"""The quadratic $x^2-2x+4$ has two distinct real roots.""",
                False,
                r"""**C.** → False

The discriminant of $x^2-2x+4$ is:

$$(-2)^2-4\cdot1\cdot4=4-16=-12<0$$

A negative discriminant means no real roots at all. So the statement is False.""",
            ),
            (
                r"""For every real $x$, $x^3+8=(x+2)(x^2+2x+4)$.""",
                False,
                r"""**D.** → False

Expanding $(x+2)(x^2+2x+4)=x^3+4x^2+8x+8$, which is not $x^3+8$ in general (the middle terms only vanish for the correct factor $x^2-2x+4$, part A). So the statement is False.""",
            ),
            (
                r"""Since $x^2-2x+4>0$ for every real $x$, the sign of $x^3+8$ matches the sign of $x+2$.""",
                True,
                r"""**E.** → True

Since $x^2-2x+4$ has no real roots (part C) and equals $4>0$ at $x=0$, it stays positive for every real $x$. Then $x^3+8=(x+2)(x^2-2x+4)$ (part A) is $(x+2)$ times a positive factor, so its sign matches the sign of $(x+2)$. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A tower of powers built from one exponential equation",
        "diff": "4/5",
        "overview": r"From $2^x=3$, build $4^x$, $8^x$, $2^{x+1}$, and $2^{2x-1}$ using exponent rules, with two misapplied rules as bait.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $2^x=3$, then $4^x=9$.""",
                True,
                r"""**A.** → True

$$4^x=(2^2)^x=(2^x)^2=3^2=9$$

So the statement is True.""",
            ),
            (
                r"""If $2^x=3$, then $8^x=27$.""",
                True,
                r"""**B.** → True

$$8^x=(2^3)^x=(2^x)^3=3^3=27$$

So the statement is True.""",
            ),
            (
                r"""If $2^x=3$, then $2^{x+1}=6$.""",
                True,
                r"""**C.** → True

$$2^{x+1}=2^x\cdot2^1=3\cdot2=6$$

So the statement is True.""",
            ),
            (
                r"""If $2^x=3$, then $2^{2x-1}=8$.""",
                False,
                r"""**D.** → False

$$2^{2x-1}=\frac{(2^x)^2}{2}=\frac{9}{2}=4.5\neq8$$

So the statement is False.""",
            ),
            (
                r"""If $2^x=3$, then $4^x=6$.""",
                False,
                r"""**E.** → False

This mistakes squaring for doubling: by part A, $4^x=(2^x)^2=9$, not $2\cdot2^x=6$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A three-term rational combination that collapses to one",
        "diff": "5/5",
        "overview": r"Combine three rational terms in $x$ over a common denominator to a constant value, checking an intermediate numerator and the identity's full domain.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq\pm1$, $\dfrac{x}{x-1}-\dfrac1{x+1}-\dfrac2{x^2-1}=1$.""",
                True,
                r"""**A.** → True

Combine over the common denominator $(x-1)(x+1)$:

$$\frac{x}{x-1}-\frac1{x+1}-\frac2{x^2-1}=\frac{x(x+1)-(x-1)-2}{x^2-1}=\frac{x^2-1}{x^2-1}=1$$

So the statement is True.""",
            ),
            (
                r"""At $x=5$, $\dfrac{x}{x-1}-\dfrac1{x+1}-\dfrac2{x^2-1}=1$.""",
                True,
                r"""**B.** → True

$$\frac54-\frac16-\frac2{24}=\frac{15}{12}-\frac2{12}-\frac1{12}=\frac{12}{12}=1$$

So the statement is True.""",
            ),
            (
                r"""Rewriting every term of $\dfrac{x}{x-1}-\dfrac1{x+1}-\dfrac2{x^2-1}$ over the common denominator $(x-1)(x+1)$ is a valid first step.""",
                True,
                r"""**C.** → True

Since $x^2-1=(x-1)(x+1)$ already contains both other denominators, $(x-1)(x+1)$ is exactly the least common denominator needed. So the statement is True.""",
            ),
            (
                r"""Before the final cancellation, the combined numerator of $\dfrac{x}{x-1}-\dfrac1{x+1}-\dfrac2{x^2-1}$ equals $2x-1$.""",
                False,
                r"""**D.** → False

The combined numerator, before recognizing the cancellation (part A), is:

$$x(x+1)-(x-1)-2=x^2+x-x+1-2=x^2-1$$

not $2x-1$. So the statement is False.""",
            ),
            (
                r"""The identity $\dfrac{x}{x-1}-\dfrac1{x+1}-\dfrac2{x^2-1}=1$ holds only for $x>1$, not for $x<-1$.""",
                False,
                r"""**E.** → False

Testing $x=-5$ (which satisfies $x<-1$):

$$\frac{-5}{-6}-\frac1{-4}-\frac2{24}=\frac56+\frac14-\frac1{12}=\frac{10}{12}+\frac3{12}-\frac1{12}=1$$

The identity holds there too (as guaranteed by part A for every $x\neq\pm1$), so it is not restricted to $x>1$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Equal absolute values split into two linear cases",
        "diff": "3/5",
        "overview": r"Solve $|2x-1|=|x+4|$ by splitting into two linear cases, then verify both sides at each solution and rule out a false third root.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The equation $|2x-1|=|x+4|$ has exactly two real solutions, $x=5$ and $x=-1$.""",
                True,
                r"""**A.** → True

Case $2x-1=x+4$: $x=5$. Case $2x-1=-(x+4)$: $3x=-3\ \Rightarrow\ x=-1$. So the statement is True.""",
            ),
            (
                r"""At $x=5$, both sides of $|2x-1|=|x+4|$ equal $9$.""",
                True,
                r"""**B.** → True

$$|2(5)-1|=9,\qquad |5+4|=9$$

So the statement is True.""",
            ),
            (
                r"""At $x=-1$, both sides of $|2x-1|=|x+4|$ equal $1$.""",
                False,
                r"""**C.** → False

$$|2(-1)-1|=|-3|=3,\qquad |-1+4|=|3|=3$$

Both sides equal $3$, not $1$. So the statement is False.""",
            ),
            (
                r"""Squaring both sides of $|2x-1|=|x+4|$ leads to the same two solutions found by case splitting.""",
                True,
                r"""**D.** → True

Since both sides of $|2x-1|=|x+4|$ are nonnegative, squaring is reversible:

$$(2x-1)^2=(x+4)^2\ \Longleftrightarrow\ |2x-1|=|x+4|$$

which leads to the same solutions $x=5$ and $x=-1$ (part A). So the statement is True.""",
            ),
            (
                r"""$x=0$ is a solution of $|2x-1|=|x+4|$.""",
                False,
                r"""**E.** → False

$$|2(0)-1|=1,\qquad |0+4|=4$$

Since $1\neq4$, $x=0$ is not a solution. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A reciprocal sum feeding several higher powers",
        "diff": "4/5",
        "overview": r"From $r+\frac1r=5$, evaluate a rewritten fraction and climb to $r^3+\frac1{r^3}$ and $r^4+\frac1{r^4}$, with two forgotten-constant errors as bait.",
        "context": r"""Let $r$ be a nonzero real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $r+\dfrac1r=5$, then $\dfrac{r^2+1}{r}=5$.""",
                True,
                r"""**A.** → True

Split the fraction:

$$\frac{r^2+1}{r}=r+\frac1r=5$$

So the statement is True.""",
            ),
            (
                r"""If $r+\dfrac1r=5$, then $\dfrac{r^4+1}{r^2}=23$.""",
                True,
                r"""**B.** → True

$$\frac{r^4+1}{r^2}=r^2+\frac1{r^2}=\left(r+\frac1r\right)^2-2=25-2=23$$

So the statement is True.""",
            ),
            (
                r"""If $r+\dfrac1r=5$, then $r^3+\dfrac1{r^3}=110$.""",
                True,
                r"""**C.** → True

$$r^3+\frac1{r^3}=\left(r+\frac1r\right)^3-3\left(r+\frac1r\right)=125-15=110$$

So the statement is True.""",
            ),
            (
                r"""If $r+\dfrac1r=5$, then $r^2+\dfrac1{r^2}=25$.""",
                False,
                r"""**D.** → False

$$r^2+\frac1{r^2}=\left(r+\frac1r\right)^2-2=25-2=23\neq25$$

So the statement is False.""",
            ),
            (
                r"""If $r+\dfrac1r=5$, then $r^4+\dfrac1{r^4}=529$.""",
                False,
                r"""**E.** → False

$$r^4+\frac1{r^4}=\left(r^2+\frac1{r^2}\right)^2-2=23^2-2=529-2=527\neq529$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Checking the three-variable square identity numerically",
        "diff": "5/5",
        "overview": r"Plug $a=3,\ b=-2,\ c=1$ into the three-variable square identity and the factorisation of $a^3+b^3+c^3-3abc$, checking each numeric piece.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $a=3$, $b=-2$, $c=1$: $(a+b+c)^2=4$.""",
                True,
                r"""**A.** → True

$$a+b+c=3-2+1=2,\qquad (a+b+c)^2=4$$

So the statement is True.""",
            ),
            (
                r"""For $a=3$, $b=-2$, $c=1$: $a^2+b^2+c^2+2(ab+bc+ca)=14$.""",
                False,
                r"""**B.** → False

$$a^2+b^2+c^2=9+4+1=14,\qquad ab+bc+ca=-6-2+3=-5$$

$$a^2+b^2+c^2+2(ab+bc+ca)=14+2(-5)=4\neq14$$

The claim ignores the contribution of the cross-term sum $2(ab+bc+ca)$; the correct total matches $(a+b+c)^2=4$ from part A. So the statement is False.""",
            ),
            (
                r"""For $a=3$, $b=-2$, $c=1$: $ab+bc+ca=-5$.""",
                True,
                r"""**C.** → True

$$ab+bc+ca=(3)(-2)+(-2)(1)+(1)(3)=-6-2+3=-5$$

So the statement is True.""",
            ),
            (
                r"""For $a=3$, $b=-2$, $c=1$: $a^3+b^3+c^3-3abc=38$.""",
                True,
                r"""**D.** → True

$$a^3+b^3+c^3=27-8+1=20,\qquad 3abc=3(3)(-2)(1)=-18$$

$$a^3+b^3+c^3-3abc=20-(-18)=38$$

This also matches $(a+b+c)(a^2+b^2+c^2-ab-bc-ca)=2\cdot\bigl(14-(-5)\bigr)=2\cdot19=38$ (parts A, C). So the statement is True.""",
            ),
            (
                r"""For $a=3$, $b=-2$, $c=1$: $ab+bc+ca=5$.""",
                False,
                r"""**E.** → False

By part C, $ab+bc+ca=-5$, not $5$; this reverses the correct sign. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "The square root of a square is not always the base",
        "diff": "3/5",
        "overview": r"Distinguish $\sqrt{x^2}=|x|$ from the false claim $\sqrt{x^2}=x$, checking both the nonnegative and negative cases separately.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $\sqrt{x^2}=|x|$.""",
                True,
                r"""**A.** → True

By definition, the principal square root returns a nonnegative value, and $|x|$ is exactly the nonnegative number whose square is $x^2$:

$$\sqrt{x^2}=|x|$$

So the statement is True.""",
            ),
            (
                r"""For every real $x\ge0$, $\sqrt{x^2}=x$.""",
                True,
                r"""**B.** → True

For $x\ge0$, $|x|=x$, so by part A:

$$\sqrt{x^2}=|x|=x$$

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $\sqrt{x^2}=x$.""",
                False,
                r"""**C.** → False

Test $x=-3$: $\sqrt{(-3)^2}=\sqrt9=3\neq-3$. So the statement is False.""",
            ),
            (
                r"""For every real $x$, $\left(\sqrt{x^2}\right)^2=x^2$.""",
                True,
                r"""**D.** → True

Squaring a square root of a nonnegative number returns that number:

$$\left(\sqrt{x^2}\right)^2=x^2$$

So the statement is True.""",
            ),
            (
                r"""For every real $x<0$, $\sqrt{x^2}=x$.""",
                False,
                r"""**E.** → False

For $x<0$, $|x|=-x>0$, so by part A, $\sqrt{x^2}=|x|=-x\neq x$. Test $x=-3$: $\sqrt9=3\neq-3$. So the statement is False.""",
            ),
        ],
    },
]
