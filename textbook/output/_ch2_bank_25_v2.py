"""Chapter 2 elementary algebra exam bank (subsection 2.5 — mixed exam sets, 34 tasks).

Formal exam claims only. Every task carries five *independent* statements: five
different techniques, never five variants of one given. No statement asks the
candidate to evaluate an expression after concrete numbers are handed to the
letters; every claim is a symbolic identity, a symbolic implication, or a
statement about a solution set.

Explanations follow the MATH 13.18 rhythm: one opening sentence naming the idea,
named steps carrying one display each, then the verdict.
"""

from __future__ import annotations

BANK_25: list[dict] = [
    {
        "subsection": "2.5",
        "title": "Warm-up: expanding, factoring, and splitting fractions",
        "diff": "1/5",
        "overview": r"Five unrelated checks: squaring a binomial, applying the distributive law, factoring a difference of squares, negating a bracket, and splitting a single fraction into two terms.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, it holds that $(x+2)^2=x^2+4x+4$.""",
                True,
                r"""**A.** → True

Squaring a binomial produces the cross term twice.

Expand $(x+2)^2$:

$$(x+2)^2=x^2+2\cdot 2\cdot x+2^2=x^2+4x+4$$

The claimed right-hand side is exactly $x^2+4x+4$, so the statement is True.""",
            ),
            (
                r"""For every real $z$, it holds that $3(z-4)=3z-4$.""",
                False,
                r"""**B.** → False

The distributive law multiplies the outer factor into every term of the bracket, not only into the first one.

Distribute $3$ over $z-4$:

$$3(z-4)=3z-3\cdot 4=3z-12$$

The claim keeps the constant as $-4$, so it forgets the factor $3$ in the second term. Since $3z-12=3z-4$ would force $-12=-4$, the two sides disagree for every real $z$. So the statement is False.""",
            ),
            (
                r"""For every real $y$, it holds that $y^2-25=(y-5)(y+5)$.""",
                True,
                r"""**C.** → True

Here $25=5^2$, so $y^2-25$ is a difference of two squares.

Factor:

$$y^2-25=y^2-5^2=(y-5)(y+5)$$

Expanding back confirms the factorisation, since $(y-5)(y+5)=y^2+5y-5y-25=y^2-25$. So the statement is True.""",
            ),
            (
                r"""For every real $y$, it holds that $-(y-3)=-y-3$.""",
                False,
                r"""**D.** → False

A minus sign in front of a bracket changes the sign of each term inside it.

Remove the bracket:

$$-(y-3)=-y+3$$

The claim leaves the second sign unchanged and offers $-y-3$. The two expressions differ by $6$ for every real $y$, so the statement is False.""",
            ),
            (
                r"""For every real $x$ with $x\neq0$, it holds that $\dfrac{x+1}{x}=1+\dfrac1x$.""",
                True,
                r"""**E.** → True

A sum in the numerator may be split over the common denominator.

Split the numerator:

$$\frac{x+1}{x}=\frac{x}{x}+\frac{1}{x}=1+\frac1x$$

Both steps need only $x\neq0$, which is exactly the stated restriction. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Warm-up: fractions, signs, and exponent basics",
        "diff": "1/5",
        "overview": r"Five separate basics: adding fractions over a common denominator, the sign of an odd power, the value of a zero exponent, the square root of a square, and the power of a product.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $a$, $b$, $c$ with $b\neq0$, it holds that $\dfrac ab+\dfrac cb=\dfrac{a+c}{b}$.""",
                True,
                r"""**A.** → True

Two fractions with the same denominator are added by adding numerators.

Add over the common denominator $b$:

$$\frac ab+\frac cb=\frac{a+c}{b}$$

The denominator is unchanged, and $b\neq0$ keeps both sides defined. So the statement is True.""",
            ),
            (
                r"""For every real $c$, it holds that $(-c)^3=-c^3$.""",
                True,
                r"""**B.** → True

An odd power keeps the sign of its base.

Expand the cube of $-c$:

$$(-c)^3=(-1)^3c^3=-c^3$$

The factor $(-1)^3=-1$ survives because the exponent $3$ is odd. So the statement is True.""",
            ),
            (
                r"""For every real $a$ with $a\neq0$, it holds that $a^0=0$.""",
                False,
                r"""**C.** → False

The zero exponent comes from cancelling equal powers, not from multiplying by nothing.

Write the quotient of two equal powers:

$$a^0=\frac{a^1}{a^1}=1$$

So $a^0=1$ for every $a\neq0$, and the claimed value $0$ is never attained. So the statement is False.""",
            ),
            (
                r"""For every real $a$, it holds that $\sqrt{a^2}=a$.""",
                False,
                r"""**D.** → False

A square root is by definition nonnegative, so it returns the absolute value of the base.

Correct rule:

$$\sqrt{a^2}=|a|$$

For $a<0$ the left-hand side is positive while $a$ is negative, so the claimed equality fails on the whole half-line $a<0$. So the statement is False.""",
            ),
            (
                r"""For all real $b$ and $c$, it holds that $(bc)^2=b^2c^2$.""",
                True,
                r"""**E.** → True

A power of a product is the product of the powers.

Expand the square:

$$(bc)^2=(bc)(bc)=b\cdot b\cdot c\cdot c=b^2c^2$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Warm-up: rearranging and comparing",
        "diff": "2/5",
        "overview": r"Five independent checks: recognising a perfect square trinomial, dividing an equation by a nonzero constant, expanding a product of two binomials, cancelling a common factor, and multiplying an inequality by a negative number.",
        "context": r"""Let $p$, $q$, and $r$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $p$, it holds that $p^2+2p+1=(p+1)^2$.""",
                True,
                r"""**A.** → True

The trinomial has the shape of a completed square, with $2p$ as the cross term.

Read the square backwards:

$$(p+1)^2=p^2+2\cdot 1\cdot p+1^2=p^2+2p+1$$

The expansion reproduces the left-hand side term by term. So the statement is True.""",
            ),
            (
                r"""If $2p=6q$, then $p=3q$.""",
                True,
                r"""**B.** → True

An equation may be divided by a nonzero constant on both sides.

Divide by $2$:

$$\frac{2p}{2}=\frac{6q}{2}$$

The left-hand side becomes $p$ and the right-hand side becomes $3q$, so $p=3q$. So the statement is True.""",
            ),
            (
                r"""For every real $r$, it holds that $(r+1)(r+2)=r^2+2$.""",
                False,
                r"""**C.** → False

A product of two binomials contributes four products, not two.

Expand term by term:

$$(r+1)(r+2)=r^2+2r+r+2=r^2+3r+2$$

The claim drops the linear part $3r$. Since $r^2+3r+2=r^2+2$ would force $r=0$, the identity fails for every other real $r$. So the statement is False.""",
            ),
            (
                r"""For every real $q$ with $q\neq0$, it holds that $\dfrac{3q}{q^2}=\dfrac3q$.""",
                True,
                r"""**D.** → True

Numerator and denominator share the factor $q$, which is nonzero.

Cancel one factor of $q$:

$$\frac{3q}{q^2}=\frac{3q}{q\cdot q}=\frac3q$$

So the statement is True.""",
            ),
            (
                r"""If $p<q$, then $-2p<-2q$.""",
                False,
                r"""**E.** → False

Multiplying an inequality by a negative number reverses its direction.

Multiply $p<q$ by $-2$:

$$-2p>-2q$$

The claim keeps the original direction, so it is the reverse of the correct conclusion. Because $p<q$ excludes equality, $-2p>-2q$ is strict and the claimed inequality can never hold. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Warm-up: powers, roots, and absolute value",
        "diff": "2/5",
        "overview": r"Five distinct rules: adding exponents of equal bases, adding two reciprocals, raising a product to a power, removing an absolute value without knowing the sign, and multiplying two square roots.",
        "context": r"""Let $u$, $v$, and $w$ be positive real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $u>0$, it holds that $u^3\cdot u^4=u^7$.""",
                True,
                r"""**A.** → True

Powers of the same base are multiplied by adding exponents.

Add the exponents:

$$u^3\cdot u^4=u^{3+4}=u^7$$

So the statement is True.""",
            ),
            (
                r"""For $u>0$ and $v>0$, it holds that $u^{-1}+v^{-1}=(u+v)^{-1}$.""",
                False,
                r"""**B.** → False

A sum of reciprocals is not the reciprocal of the sum; the two fractions must first be put over a common denominator.

Add the reciprocals:

$$u^{-1}+v^{-1}=\frac1u+\frac1v=\frac{u+v}{uv}$$

The claim offers $\dfrac{1}{u+v}$. Comparing the two, equality would force $(u+v)^2=uv$, which is impossible for $u,v>0$ because $(u+v)^2>uv$ there. So the statement is False.""",
            ),
            (
                r"""For $u>0$ and $v>0$, it holds that $\left(u^2v\right)^3=u^6v^3$.""",
                True,
                r"""**C.** → True

Each factor inside the bracket is raised to the outer exponent.

Distribute the exponent $3$:

$$\left(u^2v\right)^3=\left(u^2\right)^3v^3=u^{2\cdot3}v^3=u^6v^3$$

So the statement is True.""",
            ),
            (
                r"""For $u>0$ and $v>0$, it holds that $|u-v|=u-v$.""",
                False,
                r"""**D.** → False

Positivity of $u$ and $v$ says nothing about the sign of their difference.

Correct rule:

$$|u-v|=\begin{cases}u-v,&u\ge v\\ v-u,&u<v\end{cases}$$

Whenever $v>u$ the left-hand side is positive while $u-v$ is negative, so the claimed identity fails on that whole region. So the statement is False.""",
            ),
            (
                r"""For $u>0$ and $v>0$, it holds that $\sqrt u\cdot\sqrt v=\sqrt{uv}$.""",
                True,
                r"""**E.** → True

For nonnegative bases the square root is multiplicative.

Square the left-hand side:

$$\left(\sqrt u\cdot\sqrt v\right)^2=\left(\sqrt u\right)^2\left(\sqrt v\right)^2=uv$$

The left-hand side is positive and squares to $uv$, so it equals $\sqrt{uv}$. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Rational differences, absolute value, and a cube factorisation",
        "diff": "3/5",
        "overview": r"Five unrelated pieces of work: combining two fractions over a common denominator, factoring a sum of cubes, using the symmetry of the absolute value, multiplying fractional exponents, and testing a rational equation against its domain.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$ with $x\neq1$ and $x\neq-1$, it holds that $\dfrac{1}{x-1}-\dfrac{1}{x+1}=\dfrac{2}{x^2-1}$.""",
                True,
                r"""**A.** → True

The two denominators are exactly the factors of $x^2-1$, so their product is the common denominator.

Common denominator:

$$\frac{1}{x-1}-\frac{1}{x+1}=\frac{(x+1)-(x-1)}{(x-1)(x+1)}$$

The numerator collapses to $x+1-x+1=2$, and the denominator is $(x-1)(x+1)=x^2-1$:

$$\frac{1}{x-1}-\frac{1}{x+1}=\frac{2}{x^2-1}$$

The only excluded values are $x=1$ and $x=-1$, which the statement already removes. So the statement is True.""",
            ),
            (
                r"""For all real $x$ and $y$, it holds that $x^3+y^3=(x+y)\left(x^2+xy+y^2\right)$.""",
                False,
                r"""**B.** → False

A sum of cubes factors with a minus sign in front of the mixed term.

Correct identity:

$$x^3+y^3=(x+y)\left(x^2-xy+y^2\right)$$

Expanding the claimed product instead gives

$$(x+y)\left(x^2+xy+y^2\right)=x^3+2x^2y+2xy^2+y^3$$

which exceeds $x^3+y^3$ by $2xy(x+y)$. That correction term is nonzero as soon as $xy\neq0$ and $x+y\neq0$. So the statement is False.""",
            ),
            (
                r"""For every real $y$, it holds that $|y-3|+|3-y|=2|y-3|$.""",
                True,
                r"""**C.** → True

An absolute value is unchanged when the sign of its argument is flipped.

Use the symmetry:

$$|3-y|=|-(y-3)|=|y-3|$$

The left-hand side is therefore a sum of two equal terms:

$$|y-3|+|3-y|=|y-3|+|y-3|=2|y-3|$$

So the statement is True.""",
            ),
            (
                r"""For $z>0$, it holds that $\left(z^{1/3}\right)^{6}=z^{3}$.""",
                False,
                r"""**D.** → False

A power of a power multiplies the two exponents.

Multiply the exponents:

$$\left(z^{1/3}\right)^{6}=z^{\frac13\cdot 6}=z^{2}$$

The claim reads $z^3$, which would require $\tfrac13\cdot 6=3$. For $z>0$ the equation $z^2=z^3$ holds only at $z=1$, so the claimed identity fails for every other positive $z$. So the statement is False.""",
            ),
            (
                r"""The equation $\dfrac{z}{z-1}=\dfrac{1}{z-1}$ has no real solution.""",
                True,
                r"""**E.** → True

Both sides carry the same denominator, so for admissible $z$ the equation reduces to an equation between numerators.

Compare the numerators for $z\neq1$:

$$\frac{z}{z-1}=\frac{1}{z-1}\quad\Longrightarrow\quad z=1$$

The only candidate produced by the algebra is $z=1$, and there both fractions are undefined because $z-1=0$. Hence no real number satisfies the equation. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Quartic factorisation, a square estimate, and cyclic reciprocals",
        "diff": "3/5",
        "overview": r"Five independent items: completing a quartic to a difference of squares, comparing $a^2+b^2$ with $2ab$, simplifying the root of a perfect square, adding three cyclic reciprocals under a vanishing sum, and combining an even power with a fractional exponent.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $a$, it holds that $a^4+a^2+1=\left(a^2+a+1\right)\left(a^2-a+1\right)$.""",
                True,
                r"""**A.** → True

Adding and subtracting $a^2$ turns the quartic into a difference of two squares.

Complete the square in $a^2$:

$$a^4+a^2+1=\left(a^4+2a^2+1\right)-a^2=\left(a^2+1\right)^2-a^2$$

Now factor the difference of squares:

$$\left(a^2+1\right)^2-a^2=\left(a^2+1-a\right)\left(a^2+1+a\right)$$

Reordering the terms inside each bracket gives exactly $\left(a^2+a+1\right)\left(a^2-a+1\right)$. So the statement is True.""",
            ),
            (
                r"""For all real $a$ and $b$, it holds that $a^2+b^2\ge 2ab$.""",
                True,
                r"""**B.** → True

The difference of the two sides is a perfect square.

Move everything to one side:

$$a^2+b^2-2ab=(a-b)^2$$

A square of a real number is never negative, so $(a-b)^2\ge0$ for every real pair, which is the claimed inequality. Equality occurs exactly when $a=b$. So the statement is True.""",
            ),
            (
                r"""For every real $b$, it holds that $\sqrt{b^2-2b+1}=b-1$.""",
                False,
                r"""**C.** → False

The radicand is a completed square, and the square root of a square is an absolute value.

Rewrite the radicand:

$$b^2-2b+1=(b-1)^2$$

Hence

$$\sqrt{b^2-2b+1}=\sqrt{(b-1)^2}=|b-1|$$

For $b<1$ the value $|b-1|=1-b$ is positive while $b-1$ is negative, so the claimed equality fails on the whole half-line $b<1$. So the statement is False.""",
            ),
            (
                r"""If $a+b+c=0$ and $abc\neq0$, then $\dfrac{1}{ab}+\dfrac{1}{bc}+\dfrac{1}{ca}=0$.""",
                True,
                r"""**D.** → True

All three denominators divide $abc$, which is nonzero by assumption.

Combine over $abc$:

$$\frac{1}{ab}+\frac{1}{bc}+\frac{1}{ca}=\frac{c}{abc}+\frac{a}{abc}+\frac{b}{abc}=\frac{a+b+c}{abc}$$

The numerator is the given sum $a+b+c=0$ while the denominator stays nonzero, so the quotient is $0$. So the statement is True.""",
            ),
            (
                r"""For every real $a$, it holds that $\left(a^2\right)^{3/2}=a^3$.""",
                False,
                r"""**E.** → False

A fractional exponent with an even denominator passes through a square root, so the base is felt only through its absolute value.

Rewrite the left-hand side:

$$\left(a^2\right)^{3/2}=\left(\sqrt{a^2}\right)^{3}=|a|^{3}$$

For $a\ge0$ this does agree with $a^3$, but for $a<0$ the left-hand side is positive while $a^3$ is negative. A single sign check on the negative half-line already breaks the claimed identity. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Compound fractions, exponent laws, and a radical equation",
        "diff": "3/5",
        "overview": r"Five separate techniques: clearing a fraction inside a fraction, adding negative exponents, multiplying an inequality by a negative number, expanding a cube of a difference, and discarding an extraneous root of a radical equation.",
        "context": r"""Let $p$, $q$, and $r$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $p$ with $p\neq0$ and $p\neq-1$, it holds that $\dfrac{1}{1+\frac1p}=\dfrac{p}{p+1}$.""",
                True,
                r"""**A.** → True

The inner sum is cleared first, then the outer reciprocal is taken.

Add the terms in the denominator:

$$1+\frac1p=\frac{p+1}{p}$$

Taking the reciprocal of that single fraction turns it upside down:

$$\frac{1}{\frac{p+1}{p}}=\frac{p}{p+1}$$

The restrictions $p\neq0$ and $p\neq-1$ are exactly what keeps both fractions defined. So the statement is True.""",
            ),
            (
                r"""For $q>0$, it holds that $q^{1/2}\cdot q^{-3/2}=\dfrac1q$.""",
                True,
                r"""**B.** → True

Powers of the same base multiply by adding exponents, negative ones included.

Add the exponents:

$$q^{1/2}\cdot q^{-3/2}=q^{\frac12-\frac32}=q^{-1}$$

A negative exponent is a reciprocal, so $q^{-1}=\dfrac1q$. So the statement is True.""",
            ),
            (
                r"""If $p<q$ and $r<0$, then $pr<qr$.""",
                False,
                r"""**C.** → False

Multiplication by a negative number reverses the direction of an inequality.

Subtract the two sides of the claim:

$$qr-pr=r(q-p)$$

Here $q-p>0$ because $p<q$, and $r<0$, so the product $r(q-p)$ is negative. That means $qr<pr$, the opposite of the claim, and it happens for every admissible pair. So the statement is False.""",
            ),
            (
                r"""For all real $p$ and $q$, it holds that $(p-q)^3=p^3-q^3$.""",
                False,
                r"""**D.** → False

Cubing a difference produces two mixed terms that the claim ignores.

Expand the cube:

$$(p-q)^3=p^3-3p^2q+3pq^2-q^3$$

The difference between the two sides is therefore

$$(p-q)^3-\left(p^3-q^3\right)=-3pq(p-q)$$

which is nonzero whenever $p\neq q$ and $pq\neq0$. So the statement is False.""",
            ),
            (
                r"""The equation $\sqrt{q+1}=q-1$ has exactly one real solution.""",
                True,
                r"""**E.** → True

Squaring a radical equation may create roots that the original equation rejects, so the candidates must be tested against the sign condition $q-1\ge0$.

Square both sides:

$$q+1=(q-1)^2=q^2-2q+1$$

Collect the terms:

$$q^2-3q=0\quad\Longleftrightarrow\quad q(q-3)=0$$

The candidates are $q=0$ and $q=3$. For $q=0$ the right-hand side is $-1<0$ while a square root is never negative, so this root is extraneous. For $q=3$ both sides equal $2$. Exactly one candidate survives. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Reciprocal towers, conjugates, and partial fractions",
        "diff": "4/5",
        "overview": r"Five unrelated moves: squaring a reciprocal sum, rationalising a two-term radical denominator, splitting a product denominator into partial fractions, factoring $x^4-1$, and comparing two fractions by subtraction.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $x\neq0$ and $x+\dfrac1x=k$ for some real $k$, then $x^2+\dfrac1{x^2}=k^2-2$.""",
                True,
                r"""**A.** → True

Squaring the given sum produces the wanted expression plus a constant cross term.

Square both sides of $x+\dfrac1x=k$:

$$\left(x+\frac1x\right)^2=x^2+2\cdot x\cdot\frac1x+\frac1{x^2}=x^2+2+\frac1{x^2}$$

The cross term is the constant $2$ because $x\cdot\dfrac1x=1$. Hence

$$x^2+\frac1{x^2}=k^2-2$$

The argument uses only $x\neq0$, so it holds for every admissible $k$. So the statement is True.""",
            ),
            (
                r"""For $y>0$, it holds that $\dfrac{1}{\sqrt{y+1}+\sqrt y}=\sqrt{y+1}-\sqrt y$.""",
                True,
                r"""**B.** → True

Multiplying by the conjugate turns the two-term radical denominator into a difference of squares.

Expand the conjugate product:

$$\left(\sqrt{y+1}+\sqrt y\right)\left(\sqrt{y+1}-\sqrt y\right)=(y+1)-y=1$$

The two factors multiply to $1$, so each is the reciprocal of the other:

$$\frac{1}{\sqrt{y+1}+\sqrt y}=\sqrt{y+1}-\sqrt y$$

So the statement is True.""",
            ),
            (
                r"""For every real $z$ with $z\neq0$ and $z\neq-1$, it holds that $\dfrac{1}{z(z+1)}=\dfrac1z-\dfrac1{z+1}$.""",
                True,
                r"""**C.** → True

A product of two consecutive linear factors splits into a difference of two simple fractions.

Combine the right-hand side:

$$\frac1z-\frac1{z+1}=\frac{(z+1)-z}{z(z+1)}=\frac{1}{z(z+1)}$$

The numerator reduces to $1$, which is exactly the left-hand side. So the statement is True.""",
            ),
            (
                r"""For every real $x$, it holds that $x^4-1=\left(x^2-1\right)^2$.""",
                False,
                r"""**D.** → False

The quartic is a difference of squares in $x^2$, so the second factor is a sum, not a repetition of the first.

Correct factorisation:

$$x^4-1=\left(x^2\right)^2-1^2=\left(x^2-1\right)\left(x^2+1\right)$$

The claimed square expands to

$$\left(x^2-1\right)^2=x^4-2x^2+1$$

and the difference between the two right-hand sides is $2x^2-2$, which vanishes only for $x=\pm1$. So the statement is False.""",
            ),
            (
                r"""If $x>y>0$, then $\dfrac{x}{x+1}<\dfrac{y}{y+1}$.""",
                False,
                r"""**E.** → False

Subtracting the two fractions shows which one is larger.

Subtract over the common denominator:

$$\frac{x}{x+1}-\frac{y}{y+1}=\frac{x(y+1)-y(x+1)}{(x+1)(y+1)}=\frac{x-y}{(x+1)(y+1)}$$

For $x>y>0$ the numerator $x-y$ is positive and both factors of the denominator are positive, so the difference is positive and $\dfrac{x}{x+1}>\dfrac{y}{y+1}$. The claim has the inequality the wrong way round. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A vanishing sum, a ratio estimate, and a discriminant claim",
        "diff": "4/5",
        "overview": r"Five independent items: the cube-sum identity under $a+b+c=0$, solving $a^2=b^2$, bounding a ratio plus its reciprocal, reading the discriminant of a quadratic, and concluding from a vanishing sum of two squares.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $a+b+c=0$, then $a^3+b^3+c^3=3abc$.""",
                True,
                r"""**A.** → True

The condition lets one letter be eliminated, after which a cube expansion finishes the work.

Eliminate $c$ by writing $c=-(a+b)$:

$$a^3+b^3+c^3=a^3+b^3-(a+b)^3$$

Expanding the cube gives $(a+b)^3=a^3+3a^2b+3ab^2+b^3$, so the cubes cancel:

$$a^3+b^3-(a+b)^3=-3a^2b-3ab^2=-3ab(a+b)$$

Finally $-(a+b)=c$, hence $-3ab(a+b)=3abc$. So the statement is True.""",
            ),
            (
                r"""If $a^2=b^2$, then $a=b$.""",
                False,
                r"""**B.** → False

Equal squares leave two possibilities, because the squaring map identifies a number with its negative.

Move everything to one side and factor:

$$a^2-b^2=0\quad\Longleftrightarrow\quad(a-b)(a+b)=0$$

A product vanishes when one factor vanishes, so $a=b$ or $a=-b$. The second branch is genuinely available: any pair with $b=-a$ and $a\neq0$ satisfies the hypothesis while $a\neq b$. So the statement is False.""",
            ),
            (
                r"""If $a>0$ and $b>0$, then $\dfrac ab+\dfrac ba\ge2$.""",
                True,
                r"""**C.** → True

Putting the two fractions over the common denominator $ab$ exposes a square.

Combine and subtract $2$:

$$\frac ab+\frac ba-2=\frac{a^2+b^2-2ab}{ab}=\frac{(a-b)^2}{ab}$$

The numerator is a square, hence nonnegative, and the denominator $ab$ is positive because $a>0$ and $b>0$. The quotient is therefore nonnegative, which is the claimed bound, with equality exactly for $a=b$. So the statement is True.""",
            ),
            (
                r"""If the equation $ax^2+bx+c=0$ with $a\neq0$ has no real solution, then $b^2>4ac$.""",
                False,
                r"""**D.** → False

The number of real roots is decided by the sign of the discriminant $b^2-4ac$.

Complete the square:

$$ax^2+bx+c=a\left(x+\frac{b}{2a}\right)^2+\frac{4ac-b^2}{4a}$$

A real solution requires $\left(x+\frac{b}{2a}\right)^2=\frac{b^2-4ac}{4a^2}$, which is solvable exactly when $b^2-4ac\ge0$. Absence of real solutions therefore means $b^2-4ac<0$, that is $b^2<4ac$. The claim states the opposite inequality. So the statement is False.""",
            ),
            (
                r"""If $a^2+b^2=0$, then $a=0$ and $b=0$.""",
                True,
                r"""**E.** → True

Over the reals a sum of squares can vanish only if every summand vanishes.

Bound one square by the equation:

$$a^2=-b^2\le0$$

At the same time $a^2\ge0$, so $a^2=0$ and hence $a=0$. Substituting back leaves $b^2=0$, so $b=0$ as well. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Proportion, stacked fractions, and root arithmetic",
        "diff": "4/5",
        "overview": r"Five unrelated checks: squaring a sum of squares, converting a proportion into a product, multiplying two square roots, taking an odd root of a cube, and simplifying a quotient of reciprocal sums.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $x$ and $y$, it holds that $x^4+y^4=\left(x^2+y^2\right)^2$.""",
                False,
                r"""**A.** → False

Squaring a sum of two terms always leaves a cross term behind.

Expand the right-hand side:

$$\left(x^2+y^2\right)^2=x^4+2x^2y^2+y^4$$

Comparing with the left-hand side, the two differ by $2x^2y^2$, which is positive as soon as $xy\neq0$. So the statement is False.""",
            ),
            (
                r"""If $x$, $y$, and $z$ are nonzero and $\dfrac xy=\dfrac yz$, then $y^2=xz$.""",
                True,
                r"""**B.** → True

A proportion may be cleared by multiplying both sides by the two denominators.

Multiply the equation by $yz$:

$$\frac xy\cdot yz=\frac yz\cdot yz$$

The left-hand side becomes $xz$ and the right-hand side becomes $y^2$, so $y^2=xz$. The step is legitimate because $y$ and $z$ are nonzero. So the statement is True.""",
            ),
            (
                r"""For $x\ge0$, it holds that $\sqrt x\cdot\sqrt{x^3}=x^2$.""",
                True,
                r"""**C.** → True

For nonnegative radicands the roots may be merged into a single root.

Merge the two roots:

$$\sqrt x\cdot\sqrt{x^3}=\sqrt{x\cdot x^3}=\sqrt{x^4}$$

Since $x^4=\left(x^2\right)^2$ and $x^2\ge0$, the root returns $x^2$ itself:

$$\sqrt{x^4}=x^2$$

So the statement is True.""",
            ),
            (
                r"""For every real $z$ with $z\neq0$, it holds that $\sqrt[3]{z^3}=|z|$.""",
                False,
                r"""**D.** → False

An odd root is defined for negative arguments and keeps their sign, unlike a square root.

Correct rule for the cube root:

$$\sqrt[3]{z^3}=z$$

For $z<0$ the left-hand side is negative while $|z|$ is positive, so the claimed identity fails on the whole negative half-line. So the statement is False.""",
            ),
            (
                r"""For nonzero $y$ and $z$ with $y\neq z$, it holds that $\dfrac{\frac1y+\frac1z}{\frac1y-\frac1z}=\dfrac{z+y}{z-y}$.""",
                True,
                r"""**E.** → True

Numerator and denominator are each combined over $yz$, and that common factor then cancels.

Combine the two levels separately:

$$\frac1y+\frac1z=\frac{z+y}{yz},\qquad \frac1y-\frac1z=\frac{z-y}{yz}$$

Dividing the two results multiplies by the reciprocal, and the factor $yz$ drops out:

$$\frac{\frac{z+y}{yz}}{\frac{z-y}{yz}}=\frac{z+y}{yz}\cdot\frac{yz}{z-y}=\frac{z+y}{z-y}$$

The condition $y\neq z$ keeps the denominator nonzero. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Quartic factorisation, a denested radical, and a symmetric estimate",
        "diff": "5/5",
        "overview": r"Five separate items: completing $a^4+4$ to a difference of squares, splitting off the integer part of a rational expression, denesting a radical, proving a symmetric estimate by three squares, and simplifying a power of a power.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $a$, it holds that $a^4+4=\left(a^2+2a+2\right)\left(a^2-2a+2\right)$.""",
                True,
                r"""**A.** → True

Adding and subtracting $4a^2$ turns the quartic into a difference of two squares.

Complete the square in $a^2$:

$$a^4+4=\left(a^4+4a^2+4\right)-4a^2=\left(a^2+2\right)^2-(2a)^2$$

Factor the difference of squares:

$$\left(a^2+2\right)^2-(2a)^2=\left(a^2+2-2a\right)\left(a^2+2+2a\right)$$

Reordering each bracket gives $\left(a^2+2a+2\right)\left(a^2-2a+2\right)$. So the statement is True.""",
            ),
            (
                r"""For every real $c$, it holds that $\dfrac{c^2+5}{c^2+2}=1+\dfrac{5}{c^2+2}$.""",
                False,
                r"""**B.** → False

Splitting off the integer part means writing the numerator as the denominator plus a remainder.

Rewrite the numerator against $c^2+2$:

$$\frac{c^2+5}{c^2+2}=\frac{\left(c^2+2\right)+3}{c^2+2}=1+\frac{3}{c^2+2}$$

The remainder is $3$, not $5$, so the claimed right-hand side is too large by $\dfrac{2}{c^2+2}$. Since $c^2+2\ge2$, that gap never closes for any real $c$. So the statement is False.""",
            ),
            (
                r"""It holds that $\sqrt{7+4\sqrt3}=2+\sqrt3$.""",
                True,
                r"""**C.** → True

A nested radical of this shape is checked by squaring the proposed value.

Square the right-hand side:

$$\left(2+\sqrt3\right)^2=4+2\cdot2\cdot\sqrt3+3=7+4\sqrt3$$

The candidate $2+\sqrt3$ is positive and its square is the radicand, so it is the square root of $7+4\sqrt3$. So the statement is True.""",
            ),
            (
                r"""For all real $a$ and $b$, it holds that $a^2+b^2+1\ge ab+a+b$.""",
                True,
                r"""**D.** → True

Doubling the difference of the two sides makes three complete squares appear.

Double and regroup:

$$2\left(a^2+b^2+1-ab-a-b\right)=(a-b)^2+(a-1)^2+(b-1)^2$$

Each bracket on the right is a square, so the sum is nonnegative, and therefore

$$a^2+b^2+1-ab-a-b\ge0$$

Equality needs $a=b$, $a=1$ and $b=1$ at once, that is $a=b=1$. So the statement is True.""",
            ),
            (
                r"""For $a>0$, it holds that $\left(a^{2}\right)^{1/3}=a^{3/2}$.""",
                False,
                r"""**E.** → False

Exponents of a power of a power are multiplied, not exchanged.

Multiply the exponents:

$$\left(a^{2}\right)^{1/3}=a^{2\cdot\frac13}=a^{2/3}$$

The claim offers $a^{3/2}$, which comes from inverting the fraction. For $a>0$ the equality $a^{2/3}=a^{3/2}$ forces $\tfrac23=\tfrac32$ unless $a=1$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Absolute value of a product, fifth powers, and exponent shifts",
        "diff": "3/5",
        "overview": r"Five unrelated pieces: factoring inside an absolute value, simplifying a quotient of negative powers, expanding a difference of fifth powers, adding two equal square roots, and subtracting exponents carrying a symbolic index.",
        "context": r"""Let $u$, $v$, and $w$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $u$, it holds that $\left|u^2-4\right|=|u-2|\,|u+2|$.""",
                True,
                r"""**A.** → True

The absolute value of a product is the product of the absolute values, so the radicand may be factored first.

Factor inside the bars:

$$u^2-4=(u-2)(u+2)$$

Now apply multiplicativity:

$$\left|u^2-4\right|=|(u-2)(u+2)|=|u-2|\,|u+2|$$

No sign assumption on $u$ is needed, since the rule holds for arbitrary real factors. So the statement is True.""",
            ),
            (
                r"""For nonzero $u$ and $v$ with $u+v\neq0$, it holds that $\dfrac{u^{-1}+v^{-1}}{(uv)^{-1}}=\dfrac{1}{u+v}$.""",
                False,
                r"""**B.** → False

Dividing by $(uv)^{-1}$ means multiplying by $uv$, which clears the whole numerator.

Combine the numerator first:

$$u^{-1}+v^{-1}=\frac{v+u}{uv}$$

Dividing by $(uv)^{-1}=\dfrac{1}{uv}$ multiplies by $uv$:

$$\frac{\frac{u+v}{uv}}{\frac{1}{uv}}=\frac{u+v}{uv}\cdot uv=u+v$$

The correct value is $u+v$, whereas the claim offers its reciprocal. Equality would force $(u+v)^2=1$, so the identity fails for all other admissible pairs. So the statement is False.""",
            ),
            (
                r"""For all real $u$ and $v$, it holds that $u^5-v^5=(u-v)\left(u^4+u^3v+u^2v^2+uv^3+v^4\right)$.""",
                True,
                r"""**C.** → True

A difference of equal powers always carries the factor $u-v$, with a full symmetric sum beside it.

Multiply out the right-hand side:

$$u\left(u^4+u^3v+u^2v^2+uv^3+v^4\right)=u^5+u^4v+u^3v^2+u^2v^3+uv^4$$

$$v\left(u^4+u^3v+u^2v^2+uv^3+v^4\right)=u^4v+u^3v^2+u^2v^3+uv^4+v^5$$

Subtracting the second line from the first cancels every mixed term and leaves $u^5-v^5$. So the statement is True.""",
            ),
            (
                r"""For $w>0$, it holds that $\sqrt w+\sqrt w=\sqrt{2w}$.""",
                False,
                r"""**D.** → False

Adding two equal roots doubles them; the factor $2$ does not move inside the radical unchanged.

Add the two terms:

$$\sqrt w+\sqrt w=2\sqrt w=\sqrt{4w}$$

The claim reads $\sqrt{2w}$, and $\sqrt{4w}=\sqrt{2w}$ would force $4w=2w$, that is $w=0$. That value is excluded by $w>0$. So the statement is False.""",
            ),
            (
                r"""For $u>0$ and every integer $n$, it holds that $\dfrac{u^{n+2}}{u^{n-1}}=u^3$.""",
                True,
                r"""**E.** → True

Dividing powers of one base subtracts exponents, even when the index is a letter.

Subtract the exponents:

$$\frac{u^{n+2}}{u^{n-1}}=u^{(n+2)-(n-1)}=u^{3}$$

The symbolic part $n$ cancels, so the value is $u^3$ for every integer $n$. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A reciprocal difference, the factor theorem, and a fraction comparison",
        "diff": "5/5",
        "overview": r"Five independent items: expanding $(x+y)^2$ against $x^2+y^2$, expanding a reciprocal difference, applying the factor theorem, removing an absolute value on the wrong side, and comparing a fraction with $1$ by subtraction.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $x$ and $y$, it holds that $x^2+y^2=(x+y)^2-xy$.""",
                False,
                r"""**A.** → False

Removing a square of a sum costs two copies of the mixed product, not one.

Expand and subtract:

$$(x+y)^2-xy=x^2+2xy+y^2-xy=x^2+xy+y^2$$

The result exceeds $x^2+y^2$ by $xy$, so the two sides agree only when $xy=0$. For every pair with both letters nonzero the identity breaks. So the statement is False.""",
            ),
            (
                r"""For every real $x$ with $x\neq0$, it holds that $x^2+\dfrac{1}{x^2}-\left(x-\dfrac1x\right)^2=2$.""",
                True,
                r"""**B.** → True

The bracket is expanded first; its cross term is a constant because $x$ and $\dfrac1x$ multiply to $1$.

Expand the square:

$$\left(x-\frac1x\right)^2=x^2-2\cdot x\cdot\frac1x+\frac{1}{x^2}=x^2-2+\frac{1}{x^2}$$

Subtract this from $x^2+\dfrac{1}{x^2}$:

$$x^2+\frac{1}{x^2}-\left(x^2-2+\frac{1}{x^2}\right)=2$$

Both variable terms cancel and only the constant survives, for every $x\neq0$. So the statement is True.""",
            ),
            (
                r"""The polynomial $y^3-2y+1$ is divisible by $y-1$.""",
                True,
                r"""**C.** → True

A linear factor $y-1$ divides a polynomial exactly when the polynomial vanishes at the corresponding zero of that factor.

Evaluate the polynomial at the zero of $y-1$:

$$1^3-2\cdot1+1=0$$

The remainder is $0$, so the division is exact. Carrying it out confirms the factorisation:

$$y^3-2y+1=(y-1)\left(y^2+y-1\right)$$

So the statement is True.""",
            ),
            (
                r"""For every real $z$, it holds that $|z-3|=3-z$.""",
                False,
                r"""**D.** → False

An absolute value equals the negated argument only where that argument is nonpositive.

Case description:

$$|z-3|=\begin{cases}z-3,&z\ge3\\ 3-z,&z<3\end{cases}$$

The claimed formula is the second branch, so it is correct only for $z\le3$. For $z>3$ the left-hand side is positive while $3-z$ is negative. So the statement is False.""",
            ),
            (
                r"""For $z>1$, it holds that $\dfrac{z+1}{z-1}>1$.""",
                True,
                r"""**E.** → True

Comparing a fraction with $1$ is done by subtracting $1$ and inspecting the sign.

Subtract $1$:

$$\frac{z+1}{z-1}-1=\frac{(z+1)-(z-1)}{z-1}=\frac{2}{z-1}$$

For $z>1$ the denominator $z-1$ is positive, so the difference $\dfrac{2}{z-1}$ is positive and the fraction exceeds $1$. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Difference of cubes, cross-multiplication, and a radical equation",
        "diff": "4/5",
        "overview": r"Five separate techniques: factoring a difference of cubes, comparing two positive fractions by cross-multiplication, cancelling a product of rational expressions, describing the solution set of an absolute-value inequality, and solving a radical equation.",
        "context": r"""Let $s$, $t$, and $u$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $s$, it holds that $s^3-8=(s-2)\left(s^2+2s+4\right)$.""",
                True,
                r"""**A.** → True

Here $8=2^3$, so the expression is a difference of cubes.

Apply the identity with the second base equal to $2$:

$$s^3-2^3=(s-2)\left(s^2+2s+2^2\right)$$

A direct expansion confirms it, since

$$(s-2)\left(s^2+2s+4\right)=s^3+2s^2+4s-2s^2-4s-8=s^3-8$$

So the statement is True.""",
            ),
            (
                r"""For $t>0$, it holds that $\dfrac{t+1}{t+2}>\dfrac{t+2}{t+3}$.""",
                False,
                r"""**B.** → False

Both denominators are positive for $t>0$, so the comparison may be settled by cross-multiplication.

Multiply out both cross products:

$$(t+1)(t+3)=t^2+4t+3,\qquad (t+2)^2=t^2+4t+4$$

The first product is smaller by exactly $1$, so

$$\frac{t+1}{t+2}<\frac{t+2}{t+3}$$

The claim reverses the true direction, and the gap $1$ never closes. So the statement is False.""",
            ),
            (
                r"""For every real $u$ with $u\neq0$ and $u\neq-1$, it holds that $\dfrac{u^2+u}{u^2}\cdot\dfrac{u}{u+1}=1$.""",
                True,
                r"""**C.** → True

Factoring the first numerator exposes the factors that the second fraction removes.

Factor and multiply:

$$\frac{u(u+1)}{u^2}\cdot\frac{u}{u+1}=\frac{u^2(u+1)}{u^2(u+1)}$$

Both $u$ and $u+1$ are nonzero under the stated restrictions, so the quotient reduces to $1$. So the statement is True.""",
            ),
            (
                r"""For every real $s$, the inequality $|s|>1$ holds precisely when $s>1$.""",
                False,
                r"""**D.** → False

An absolute value measures distance from the origin in both directions.

Solve the inequality:

$$|s|>1\quad\Longleftrightarrow\quad s\in(-\infty,-1)\cup(1,\infty)$$

The claim keeps only the right branch and loses the whole half-line $s<-1$, where $|s|>1$ also holds. So the statement is False.""",
            ),
            (
                r"""For $t\ge0$, the equation $\sqrt t=t$ holds precisely when $t=0$ or $t=1$.""",
                True,
                r"""**E.** → True

Squaring is safe here because both sides are already nonnegative on the stated domain.

Square and collect:

$$t=t^2\quad\Longleftrightarrow\quad t(t-1)=0$$

The candidates are $t=0$ and $t=1$, and both satisfy the original equation since $\sqrt0=0$ and $\sqrt1=1$. No further solution exists, because the quadratic has no other root. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A vanishing sum in factored form, conjugate denominators, and exponent inversion",
        "diff": "5/5",
        "overview": r"Five unrelated items: rewriting each bracket under $p+q+r=0$, rationalising a denominator with a conjugate, combining two reciprocal powers, inverting a negative fractional exponent, and squaring an inequality.",
        "context": r"""Let $p$, $q$, and $r$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $p+q+r=0$, then $(p+q)(q+r)(r+p)=-pqr$.""",
                True,
                r"""**A.** → True

The condition lets each two-term bracket be replaced by a single letter.

Rewrite the three brackets:

$$p+q=-r,\qquad q+r=-p,\qquad r+p=-q$$

Multiplying the three replacements collects three minus signs:

$$(p+q)(q+r)(r+p)=(-r)(-p)(-q)=-pqr$$

So the statement is True.""",
            ),
            (
                r"""For $p>0$ with $p\neq1$, it holds that $\dfrac{1}{\sqrt p-1}=\dfrac{\sqrt p+1}{p-1}$.""",
                True,
                r"""**B.** → True

Multiplying numerator and denominator by the conjugate of the denominator removes the root from below.

Expand the conjugate product in the denominator:

$$\left(\sqrt p-1\right)\left(\sqrt p+1\right)=p-1$$

Hence

$$\frac{1}{\sqrt p-1}=\frac{\sqrt p+1}{\left(\sqrt p-1\right)\left(\sqrt p+1\right)}=\frac{\sqrt p+1}{p-1}$$

The restriction $p\neq1$ keeps $p-1\neq0$, and $p>0$ makes the root defined. So the statement is True.""",
            ),
            (
                r"""For every real $q$ with $q\neq0$, it holds that $\dfrac1q-\dfrac{1}{q^2}=\dfrac{1}{q-q^2}$.""",
                False,
                r"""**C.** → False

The left-hand side is combined over $q^2$, and the outcome is then compared with the proposed fraction.

Combine over $q^2$:

$$\frac1q-\frac{1}{q^2}=\frac{q-1}{q^2}$$

The proposed right-hand side is $\dfrac{1}{q(1-q)}$. Equating the two and clearing denominators gives

$$q(q-1)(1-q)=q^2\quad\Longleftrightarrow\quad q^2-q+1=0$$

after dividing by the nonzero factor $-q$. The last quadratic has discriminant $1-4=-3<0$, so no real $q$ satisfies it and the two sides never agree. So the statement is False.""",
            ),
            (
                r"""For $q>0$, it holds that $\left(q^{-1/2}\right)^{-4}=q^{2}$.""",
                True,
                r"""**D.** → True

Two negative exponents multiply to a positive one.

Multiply the exponents:

$$\left(q^{-1/2}\right)^{-4}=q^{\left(-\frac12\right)\cdot(-4)}=q^{2}$$

The product of the two negatives is $+2$, which is the claimed exponent. So the statement is True.""",
            ),
            (
                r"""If $p>q$, then $p^2>q^2$.""",
                False,
                r"""**E.** → False

Squaring compares distances from the origin, which need not respect the original order.

Factor the difference:

$$p^2-q^2=(p-q)(p+q)$$

The first factor is positive because $p>q$, but the sign of the second is unrestricted. Whenever $p+q<0$, the difference is negative and $p^2<q^2$, so the whole region of pairs with $p>q$ and $p+q<0$ contradicts the claim. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Symmetric expansion, a triangle bound, and a proportion",
        "diff": "4/5",
        "overview": r"Five unrelated moves: expanding a square and cancelling one mixed term, adding two equal fractional powers, applying the triangle inequality, solving a proportion by cross-multiplication, and splitting a fraction into partial fractions.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $x$ and $y$, it holds that $(x+y)^2-xy=x^2+xy+y^2$.""",
                True,
                r"""**A.** → True

Expanding the square produces two copies of $xy$, and the subtraction removes one of them.

Expand and cancel:

$$(x+y)^2-xy=x^2+2xy+y^2-xy=x^2+xy+y^2$$

So the statement is True.""",
            ),
            (
                r"""For $y>0$, it holds that $y^{1/2}+y^{1/2}=y$.""",
                False,
                r"""**B.** → False

Adding a term to itself doubles it and leaves the exponent alone.

Add the two equal powers:

$$y^{1/2}+y^{1/2}=2y^{1/2}=2\sqrt y$$

Setting $2\sqrt y=y$ and squaring gives $4y=y^2$, that is $y=4$ for positive $y$. A single value cannot support a claim made for all $y>0$. So the statement is False.""",
            ),
            (
                r"""For every real $x$, it holds that $|x|+|x-1|\ge1$.""",
                True,
                r"""**C.** → True

The triangle inequality bounds a sum of absolute values from below by the absolute value of the sum.

Rewrite the second term and add:

$$|x|+|x-1|=|x|+|1-x|\ge|x+(1-x)|=|1|=1$$

The two arguments were chosen so that their sum is the constant $1$, which produces the bound. Equality holds exactly on the interval $0\le x\le1$. So the statement is True.""",
            ),
            (
                r"""The solution set of the equation $\dfrac{1}{x-1}=\dfrac{2}{x+1}$ is $\{3\}$.""",
                True,
                r"""**D.** → True

A proportion with nonzero denominators may be cleared by cross-multiplication.

Cross-multiply for $x\neq1$ and $x\neq-1$:

$$x+1=2(x-1)$$

Expanding and collecting gives $x+1=2x-2$, hence $x=3$. That value violates neither restriction, and substituting it returns $\tfrac12=\tfrac12$. So the solution set is exactly $\{3\}$ and the statement is True.""",
            ),
            (
                r"""For every real $z$ with $z\neq1$ and $z\neq-1$, it holds that $\dfrac{2}{z^2-1}=\dfrac{1}{z-1}+\dfrac{1}{z+1}$.""",
                False,
                r"""**E.** → False

The sum on the right is combined over the product of its denominators.

Add the two fractions:

$$\frac{1}{z-1}+\frac{1}{z+1}=\frac{(z+1)+(z-1)}{z^2-1}=\frac{2z}{z^2-1}$$

The numerator is $2z$, not $2$, so the correct partial-fraction pair for $\dfrac{2}{z^2-1}$ uses a difference instead of a sum. The two sides agree only at $z=1$, which is excluded. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Symmetric functions, a denested radical, and a fourth power",
        "diff": "5/5",
        "overview": r"Five independent items: expressing a sum of cubes through symmetric functions, denesting a radical with two roots, expanding a fourth power, comparing $\sqrt{a+b}$ with $\sqrt a+\sqrt b$, and testing subtractivity of the absolute value.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $a+b=s$ and $ab=p$ for real numbers $s$ and $p$, then $a^3+b^3=s^3-3ps$.""",
                True,
                r"""**A.** → True

Cubing the sum produces the wanted cubes together with a multiple of the product.

Cube the first condition:

$$s^3=(a+b)^3=a^3+3a^2b+3ab^2+b^3=a^3+b^3+3ab(a+b)$$

The correction term contains both given quantities, since $ab=p$ and $a+b=s$:

$$s^3=a^3+b^3+3ps$$

Solving for the cubes gives $a^3+b^3=s^3-3ps$. So the statement is True.""",
            ),
            (
                r"""It holds that $\sqrt{5+2\sqrt6}=\sqrt2+\sqrt3$.""",
                True,
                r"""**B.** → True

A radicand of the form $m+n\sqrt6$ is denested by squaring the proposed value.

Square the right-hand side:

$$\left(\sqrt2+\sqrt3\right)^2=2+2\sqrt2\sqrt3+3=5+2\sqrt6$$

The candidate is positive and its square is the radicand, so it is the square root of $5+2\sqrt6$. So the statement is True.""",
            ),
            (
                r"""For all real $a$ and $b$, it holds that $(a+b)^4=a^4+b^4+4ab\left(a^2+b^2\right)$.""",
                False,
                r"""**C.** → False

A fourth power of a binomial has five terms, and the middle one is easy to lose.

Expand completely:

$$(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$$

The claimed right-hand side expands to $a^4+b^4+4a^3b+4ab^3$, which reproduces four of the five terms:

$$(a+b)^4-\left(a^4+b^4+4ab\left(a^2+b^2\right)\right)=6a^2b^2$$

The gap $6a^2b^2$ is positive whenever $ab\neq0$. So the statement is False.""",
            ),
            (
                r"""For $a>0$ and $b>0$, it holds that $\sqrt{a+b}<\sqrt a+\sqrt b$.""",
                True,
                r"""**D.** → True

Both sides are positive, so squaring is an equivalent comparison.

Square the right-hand side:

$$\left(\sqrt a+\sqrt b\right)^2=a+2\sqrt{ab}+b$$

Against the square $a+b$ of the left-hand side this is larger by $2\sqrt{ab}$, which is strictly positive because $a>0$ and $b>0$. A larger square with positive bases means a larger value. So the statement is True.""",
            ),
            (
                r"""For all real $a$ and $b$, it holds that $|a-b|=|a|-|b|$.""",
                False,
                r"""**E.** → False

The right-hand side can be negative, while the left-hand side never is.

Correct general bound:

$$|a|-|b|\le|a-b|$$

Equality is special: it needs $|b|\le|a|$ together with $a$ and $b$ of the same sign. As soon as $|b|>|a|$ the right-hand side is negative and cannot equal an absolute value. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A reciprocal difference quotient, divisibility, and root cancellation",
        "diff": "4/5",
        "overview": r"Five unrelated items: reducing a difference quotient of reciprocals, dividing $u^n-1$ by $u-1$, taking the square root of a squared bracket, deducing an order relation from squares, and subtracting fractional exponents.",
        "context": r"""Let $u$, $v$, and $w$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For nonzero $u$ and $v$ with $u\neq v$, it holds that $\dfrac{\frac{1}{u^2}-\frac{1}{v^2}}{\frac1u-\frac1v}=\dfrac1u+\dfrac1v$.""",
                True,
                r"""**A.** → True

The numerator is a difference of squares in the two reciprocals, and one of its factors is the denominator.

Factor the numerator:

$$\frac{1}{u^2}-\frac{1}{v^2}=\left(\frac1u-\frac1v\right)\left(\frac1u+\frac1v\right)$$

The condition $u\neq v$ makes $\dfrac1u-\dfrac1v$ nonzero, so it cancels:

$$\frac{\left(\frac1u-\frac1v\right)\left(\frac1u+\frac1v\right)}{\frac1u-\frac1v}=\frac1u+\frac1v$$

So the statement is True.""",
            ),
            (
                r"""For every positive integer $n$, the polynomial $u^n-1$ is divisible by $u-1$.""",
                True,
                r"""**B.** → True

Divisibility by a linear factor is decided by the value of the polynomial at the zero of that factor.

Evaluate at the zero of $u-1$:

$$1^n-1=0$$

The remainder vanishes for every positive integer $n$, so the division is exact. The quotient is the geometric sum:

$$u^n-1=(u-1)\left(u^{n-1}+u^{n-2}+\cdots+u+1\right)$$

So the statement is True.""",
            ),
            (
                r"""For every real $v$, it holds that $\sqrt{(v-2)^2}=v-2$.""",
                False,
                r"""**C.** → False

A square root of a square returns the absolute value of the bracket.

Correct rule:

$$\sqrt{(v-2)^2}=|v-2|$$

For $v<2$ the left-hand side is positive while $v-2$ is negative, so the claimed identity fails on the whole half-line $v<2$. So the statement is False.""",
            ),
            (
                r"""If $u^2>v^2$, then $u>v$.""",
                False,
                r"""**D.** → False

Squares record only the distance from the origin, so they cannot recover the order.

Rewrite the hypothesis:

$$u^2>v^2\quad\Longleftrightarrow\quad|u|>|v|$$

A pair with $u$ negative and $|u|>|v|$ satisfies the hypothesis, yet then $u<0\le|v|$ and the conclusion may fail. Every such pair contradicts the claim. So the statement is False.""",
            ),
            (
                r"""For $w>0$, it holds that $\dfrac{w^{3/4}}{w^{1/4}}=w^{1/2}$.""",
                True,
                r"""**E.** → True

Dividing powers of the same base subtracts the exponents.

Subtract the exponents:

$$\frac{w^{3/4}}{w^{1/4}}=w^{\frac34-\frac14}=w^{1/2}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A three-square identity, telescoping fractions, and a squared condition",
        "diff": "5/5",
        "overview": r"Five separate items: rewriting a symmetric quadratic form as a sum of three squares, squaring the condition $x+y+z=0$, telescoping a difference of two fractions, inverting a negative fractional exponent, and showing a rational equation has an empty solution set.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $x$, $y$, $z$, it holds that $x^2+y^2+z^2-xy-yz-zx=\tfrac12\left[(x-y)^2+(y-z)^2+(z-x)^2\right]$.""",
                True,
                r"""**A.** → True

Expanding the three squares on the right counts every square twice and every mixed product once with a minus sign.

Expand the bracket:

$$(x-y)^2+(y-z)^2+(z-x)^2=2x^2+2y^2+2z^2-2xy-2yz-2zx$$

Halving that result gives

$$\tfrac12\left[(x-y)^2+(y-z)^2+(z-x)^2\right]=x^2+y^2+z^2-xy-yz-zx$$

which is the left-hand side. As a by-product the form is never negative. So the statement is True.""",
            ),
            (
                r"""If $x+y+z=0$, then $x^2+y^2+z^2=2(xy+yz+zx)$.""",
                False,
                r"""**B.** → False

Squaring the condition links the sum of squares to the sum of products, but with the opposite sign.

Square the condition:

$$0=(x+y+z)^2=x^2+y^2+z^2+2(xy+yz+zx)$$

Solving for the sum of squares gives

$$x^2+y^2+z^2=-2(xy+yz+zx)$$

The claim drops the minus sign. Both versions can agree only when $xy+yz+zx=0$, which under the condition forces $x=y=z=0$. So the statement is False.""",
            ),
            (
                r"""For every real $x$ with $x\neq0$ and $x\neq-1$, it holds that $\dfrac3x-\dfrac{3}{x+1}=\dfrac{3}{x(x+1)}$.""",
                True,
                r"""**C.** → True

The common factor $3$ may be pulled out before the two fractions are combined.

Factor and combine:

$$\frac3x-\frac{3}{x+1}=3\left(\frac1x-\frac{1}{x+1}\right)=3\cdot\frac{(x+1)-x}{x(x+1)}$$

The inner numerator reduces to $1$, so

$$\frac3x-\frac{3}{x+1}=\frac{3}{x(x+1)}$$

So the statement is True.""",
            ),
            (
                r"""For $y>0$, it holds that $\left(\dfrac1y\right)^{-1/2}=\dfrac{1}{\sqrt y}$.""",
                False,
                r"""**D.** → False

A negative exponent applied to a reciprocal turns the base back the right way up.

Rewrite the base and multiply the exponents:

$$\left(\frac1y\right)^{-1/2}=\left(y^{-1}\right)^{-1/2}=y^{1/2}=\sqrt y$$

The correct value is $\sqrt y$, whereas the claim gives its reciprocal. The two agree only at $y=1$. So the statement is False.""",
            ),
            (
                r"""The equation $\dfrac{1}{z-1}=\dfrac1z$ has no real solution.""",
                True,
                r"""**E.** → True

Equal fractions with equal numerators force equal denominators, provided neither denominator vanishes.

Cross-multiply for $z\neq0$ and $z\neq1$:

$$z=z-1$$

Subtracting $z$ leaves $0=-1$, a contradiction, so no admissible $z$ works. The two excluded values are not solutions either, since there one side is undefined. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Grouping, a conjugate quotient, and absolute-value sums",
        "diff": "3/5",
        "overview": r"Five unrelated items: factoring by grouping, comparing $p^3$ with $p^2$ on the unit interval, writing $q-1$ as a product of conjugates, cancelling only part of a numerator, and locating where a sum of two absolute values is constant.",
        "context": r"""Let $p$, $q$, and $r$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $p$ and $q$, it holds that $p^2-q^2+p-q=(p-q)(p+q+1)$.""",
                True,
                r"""**A.** → True

Both halves of the left-hand side contain the factor $p-q$, one after factoring a difference of squares.

Group the four terms in pairs:

$$p^2-q^2+p-q=(p-q)(p+q)+(p-q)$$

Pulling out the common factor gives

$$(p-q)(p+q)+(p-q)=(p-q)(p+q+1)$$

So the statement is True.""",
            ),
            (
                r"""If $0<p<1$, then $p^3>p^2$.""",
                False,
                r"""**B.** → False

On the unit interval each further factor of $p$ makes a power smaller, not larger.

Compare the two powers by factoring:

$$p^3-p^2=p^2(p-1)$$

Here $p^2>0$ while $p-1<0$ because $p<1$, so the difference is negative and $p^3<p^2$ throughout the interval. The claim asserts the opposite everywhere. So the statement is False.""",
            ),
            (
                r"""For $q\ge0$, it holds that $\dfrac{q-1}{\sqrt q+1}=\sqrt q-1$.""",
                True,
                r"""**C.** → True

The numerator factors as a product of conjugates once $q$ is written as $\left(\sqrt q\right)^2$.

Factor the numerator:

$$q-1=\left(\sqrt q\right)^2-1^2=\left(\sqrt q-1\right)\left(\sqrt q+1\right)$$

The denominator cancels one factor, and it is never zero because $\sqrt q\ge0$ gives $\sqrt q+1\ge1$:

$$\frac{q-1}{\sqrt q+1}=\sqrt q-1$$

So the statement is True.""",
            ),
            (
                r"""For all real $q$ and $r$ with $r\neq0$, it holds that $\dfrac{r+q}{r}=1+q$.""",
                False,
                r"""**D.** → False

Splitting a fraction divides every term of the numerator by the denominator.

Split correctly:

$$\frac{r+q}{r}=\frac rr+\frac qr=1+\frac qr$$

The claim leaves $q$ undivided, so the two sides differ by $q-\dfrac qr$, which is nonzero whenever $q\neq0$ and $r\neq1$. So the statement is False.""",
            ),
            (
                r"""For every real $p$, it holds that $|p-1|+|p-4|=3$.""",
                False,
                r"""**E.** → False

A sum of two absolute values is constant only between the two reference points.

Inspect the region to the right of both points, where $p>4$:

$$|p-1|+|p-4|=(p-1)+(p-4)=2p-5$$

That expression exceeds $3$ as soon as $p>4$, so the claimed constant value fails there. The value $3$ is attained exactly on the interval $1\le p\le4$, not for every real $p$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Cyclic reciprocals, sixth powers, and a positive quartic",
        "diff": "5/5",
        "overview": r"Five independent items: adding three reciprocals over the common denominator, factoring a difference of sixth powers, multiplying two negative exponents, splitting off the integer part of a rational expression, and comparing $b^3$ with $b^2$.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $abc\neq0$ and $ab+bc+ca=0$, then $\dfrac1a+\dfrac1b+\dfrac1c=0$.""",
                True,
                r"""**A.** → True

The three reciprocals share the denominator $abc$, which is nonzero by assumption.

Combine over $abc$:

$$\frac1a+\frac1b+\frac1c=\frac{bc+ca+ab}{abc}$$

The numerator is exactly the given combination $ab+bc+ca=0$, and the denominator stays nonzero, so the quotient is $0$. So the statement is True.""",
            ),
            (
                r"""For all real $a$ and $b$, it holds that $a^6-b^6=\left(a^2-b^2\right)\left(a^4+a^2b^2+b^4\right)$.""",
                True,
                r"""**B.** → True

Read in terms of $a^2$ and $b^2$, the left-hand side is a difference of cubes.

Substitute the squares:

$$a^6-b^6=\left(a^2\right)^3-\left(b^2\right)^3$$

The difference-of-cubes identity applied to the bases $a^2$ and $b^2$ gives

$$\left(a^2\right)^3-\left(b^2\right)^3=\left(a^2-b^2\right)\left(a^4+a^2b^2+b^4\right)$$

which is the claimed factorisation. So the statement is True.""",
            ),
            (
                r"""For every real $a$ with $a\neq0$, it holds that $\left(a^{-3}\right)^{-2}=a^{-6}$.""",
                False,
                r"""**C.** → False

Two negative exponents multiply to a positive exponent.

Multiply the exponents:

$$\left(a^{-3}\right)^{-2}=a^{(-3)\cdot(-2)}=a^{6}$$

The claim keeps the sign negative. Since $a^6=a^{-6}$ would force $a^{12}=1$, that is $a=\pm1$, the identity fails for every other nonzero $a$. So the statement is False.""",
            ),
            (
                r"""For every real $c$, it holds that $\dfrac{c^2-1}{c^2+1}=1-\dfrac{2}{c^2+1}$.""",
                True,
                r"""**D.** → True

The numerator is written as the denominator plus a remainder, which separates the integer part.

Rewrite the numerator against $c^2+1$:

$$\frac{c^2-1}{c^2+1}=\frac{\left(c^2+1\right)-2}{c^2+1}=1-\frac{2}{c^2+1}$$

No restriction is needed, since $c^2+1\ge1$ never vanishes. So the statement is True.""",
            ),
            (
                r"""For every real $b$, it holds that $b^3\ge b^2$.""",
                False,
                r"""**E.** → False

Comparing the two powers means inspecting the sign of their difference.

Factor the difference:

$$b^3-b^2=b^2(b-1)$$

The factor $b^2$ is nonnegative, so the sign is decided by $b-1$. For every $b<1$ with $b\neq0$ the difference is negative, hence $b^3<b^2$ on the whole half-line $b<1$ apart from the single point $b=0$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Absolute cubes, a symmetric fraction sum, and a cancellation trap",
        "diff": "4/5",
        "overview": r"Five unrelated items: pulling a cube out of an absolute value, adding two fractions with different denominators, combining a cube root with a negative exponent, cancelling a variable factor in an equation, and factoring a difference of cubes.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, it holds that $|x|^3=\left|x^3\right|$.""",
                True,
                r"""**A.** → True

The absolute value is multiplicative, so it passes through any power.

Write the cube as a product and split it:

$$\left|x^3\right|=|x\cdot x\cdot x|=|x|\,|x|\,|x|=|x|^3$$

Both sides are nonnegative and agree for positive and negative $x$ alike, since an odd power of a negative number has its sign removed on both sides. So the statement is True.""",
            ),
            (
                r"""For nonzero $x$ and $y$, it holds that $\dfrac yx+\dfrac xy=\dfrac{x^2+y^2}{xy}$.""",
                True,
                r"""**B.** → True

The common denominator of the two fractions is the product $xy$.

Expand each fraction to the denominator $xy$:

$$\frac yx+\frac xy=\frac{y\cdot y}{xy}+\frac{x\cdot x}{xy}=\frac{y^2+x^2}{xy}$$

Both letters are nonzero, so $xy\neq0$ and the combination is legitimate. So the statement is True.""",
            ),
            (
                r"""For $y>0$, it holds that $\sqrt[3]{y^6}\cdot y^{-2}=y$.""",
                False,
                r"""**C.** → False

The cube root divides the exponent by $3$, and the negative power then subtracts.

Rewrite the root as a power and add the exponents:

$$\sqrt[3]{y^6}\cdot y^{-2}=y^{6/3}\cdot y^{-2}=y^{2-2}=y^{0}=1$$

The product is the constant $1$, not $y$, so the two sides agree only at the single value $y=1$ and differ everywhere else on the positive axis. So the statement is False.""",
            ),
            (
                r"""If $x^2=xy$, then $x=y$.""",
                False,
                r"""**D.** → False

Cancelling a variable factor is only allowed once that factor is known to be nonzero.

Move everything to one side and factor:

$$x^2-xy=0\quad\Longleftrightarrow\quad x(x-y)=0$$

The product vanishes if $x=0$ or if $x=y$. The first branch is a genuine alternative: every pair with $x=0$ and $y\neq0$ satisfies the hypothesis while contradicting the conclusion. So the statement is False.""",
            ),
            (
                r"""For all real $y$ and $z$, it holds that $y^3-z^3=(y-z)^3$.""",
                False,
                r"""**E.** → False

A difference of cubes is not the cube of the difference.

Correct identity:

$$y^3-z^3=(y-z)\left(y^2+yz+z^2\right)$$

The cube of the difference expands to $(y-z)^3=y^3-3y^2z+3yz^2-z^3$, so the two expressions differ by $3yz(y-z)$. That correction vanishes only when $yz=0$ or $y=z$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A cube of a sum, a continued fraction, and a denesting attempt",
        "diff": "5/5",
        "overview": r"Five independent items: expanding a cube under a linear substitution, collapsing a two-level continued fraction, testing a denesting of a radical, inverting a negative fractional exponent, and passing to reciprocals in an inequality.",
        "context": r"""Let $s$, $t$, and $u$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $s+t=u$, then $s^3+t^3+3stu=u^3$.""",
                True,
                r"""**A.** → True

Cubing the hypothesis produces the mixed term in a form that the condition can absorb.

Cube both sides of $s+t=u$:

$$u^3=(s+t)^3=s^3+3s^2t+3st^2+t^3=s^3+t^3+3st(s+t)$$

The bracket $s+t$ is the given $u$, so the mixed term becomes $3stu$:

$$u^3=s^3+t^3+3stu$$

So the statement is True.""",
            ),
            (
                r"""For every real $t$ with $t\neq0$, $t\neq-1$ and $t\neq-\tfrac12$, it holds that $\dfrac{1}{1+\dfrac{1}{1+\frac1t}}=\dfrac{t+1}{2t+1}$.""",
                True,
                r"""**B.** → True

A continued fraction is simplified from the innermost level outwards.

Clear the innermost sum:

$$1+\frac1t=\frac{t+1}{t}$$

Its reciprocal enters the middle level:

$$1+\frac{1}{\frac{t+1}{t}}=1+\frac{t}{t+1}=\frac{2t+1}{t+1}$$

Taking the outer reciprocal turns that single fraction upside down and gives $\dfrac{t+1}{2t+1}$. The three excluded values are exactly the ones that would make a level vanish. So the statement is True.""",
            ),
            (
                r"""For $s>0$, it holds that $\sqrt{s+\dfrac1s-2}=\sqrt s+\dfrac{1}{\sqrt s}$.""",
                False,
                r"""**C.** → False

The radicand is a completed square, but the square that produces it carries a minus sign.

Identify the square:

$$\left(\sqrt s-\frac{1}{\sqrt s}\right)^2=s-2+\frac1s$$

Hence the correct value of the root is the absolute value of that difference:

$$\sqrt{s+\frac1s-2}=\left|\sqrt s-\frac{1}{\sqrt s}\right|$$

The claimed right-hand side is the corresponding sum, whose square is $s+2+\dfrac1s$. The two differ by $4$ under the root, so they never agree for $s>0$. So the statement is False.""",
            ),
            (
                r"""For every real $u$ with $u\neq0$, it holds that $\left(u^{-2}\right)^{-1/2}=|u|$.""",
                True,
                r"""**D.** → True

The inner power is positive, so the outer fractional exponent is applied to a positive base.

Multiply the exponents:

$$\left(u^{-2}\right)^{-1/2}=u^{(-2)\cdot\left(-\frac12\right)}=u^{1}$$

That formal step must be read through the square root, which returns a nonnegative value:

$$\left(\frac{1}{u^2}\right)^{-1/2}=\left(u^2\right)^{1/2}=\sqrt{u^2}=|u|$$

For negative $u$ the absolute value is what the left-hand side actually produces. So the statement is True.""",
            ),
            (
                r"""If $s>t$, then $\dfrac1s<\dfrac1t$.""",
                False,
                r"""**E.** → False

Passing to reciprocals reverses an inequality only when both sides carry the same sign.

Subtract the two reciprocals:

$$\frac1s-\frac1t=\frac{t-s}{st}$$

The numerator $t-s$ is negative because $s>t$, so the sign of the whole expression is decided by $st$. Whenever $s$ and $t$ have opposite signs, $st<0$ and the difference is positive, so $\dfrac1s>\dfrac1t$. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A reciprocal product, absolute differences, and a quadratic count",
        "diff": "4/5",
        "overview": r"Five unrelated checks: multiplying a reciprocal sum by a reciprocal difference, evaluating a difference of two absolute values, factoring a four-term expression by grouping, adding two irrational exponents, and counting the solutions of a quadratic equation.",
        "context": r"""Let $p$, $q$, and $r$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $p$ with $p\neq0$, it holds that $\left(p+\dfrac1p\right)\left(p-\dfrac1p\right)=p^2-\dfrac{1}{p^2}$.""",
                True,
                r"""**A.** → True

The two brackets are conjugates, so their product is a difference of squares.

Apply the identity with the bases $p$ and $\dfrac1p$:

$$\left(p+\frac1p\right)\left(p-\frac1p\right)=p^2-\left(\frac1p\right)^2=p^2-\frac{1}{p^2}$$

So the statement is True.""",
            ),
            (
                r"""For every real $q$, it holds that $|q|-|q-2|=2$.""",
                False,
                r"""**B.** → False

A difference of two absolute values changes with the position of $q$ relative to both reference points.

Evaluate on the left region, where $q<0$:

$$|q|-|q-2|=(-q)-(2-q)=-2$$

There the value is $-2$, not $2$. The claimed value $2$ appears only for $q\ge2$, so the identity is far from universal. So the statement is False.""",
            ),
            (
                r"""For all real $p$ and $q$, it holds that $pq-p-q+1=(p-1)(q-1)$.""",
                True,
                r"""**C.** → True

The four terms group into two pairs sharing a common bracket.

Group in pairs:

$$pq-p-q+1=p(q-1)-(q-1)$$

Pulling out $q-1$ leaves

$$p(q-1)-(q-1)=(p-1)(q-1)$$

So the statement is True.""",
            ),
            (
                r"""For $r>0$, it holds that $r^{\sqrt2}\cdot r^{\sqrt2}=r^{2}$.""",
                False,
                r"""**D.** → False

Multiplying two powers of one base adds the exponents; it does not multiply them.

Add the exponents:

$$r^{\sqrt2}\cdot r^{\sqrt2}=r^{\sqrt2+\sqrt2}=r^{2\sqrt2}$$

The claimed exponent $2$ comes from computing $\sqrt2\cdot\sqrt2$ instead. Since $2\sqrt2\neq2$, the two sides agree only at $r=1$. So the statement is False.""",
            ),
            (
                r"""The equation $q^2=q$ has exactly one real solution.""",
                False,
                r"""**E.** → False

Dividing by $q$ would lose a solution, so the equation is solved by factoring instead.

Collect and factor:

$$q^2-q=0\quad\Longleftrightarrow\quad q(q-1)=0$$

The product vanishes for $q=0$ and for $q=1$, and both values satisfy the original equation. There are two real solutions, not one. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A three-variable cube identity, root splitting, and an extraneous root",
        "diff": "5/5",
        "overview": r"Five separate items: verifying the cube identity for three variables, splitting a root of a cube, multiplying two rational expressions, discarding an extraneous root of a radical equation, and testing additivity of the absolute value.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $x$, $y$, $z$, it holds that $x^3+y^3+z^3-3xyz=(x+y+z)\left(x^2+y^2+z^2-xy-yz-zx\right)$.""",
                True,
                r"""**A.** → True

The product on the right is expanded and the mixed terms are collected.

Multiply the first letter into the second bracket:

$$x\left(x^2+y^2+z^2-xy-yz-zx\right)=x^3+xy^2+xz^2-x^2y-xyz-x^2z$$

The analogous products with $y$ and with $z$ produce $y^3+yx^2+yz^2-y^2z-xyz-xy^2$ and $z^3+zx^2+zy^2-z^2x-xyz-yz^2$. Adding all three lines cancels every term of the form $x^2y$ against its partner and leaves only the cubes together with three copies of $-xyz$:

$$x^3+y^3+z^3-3xyz$$

So the statement is True.""",
            ),
            (
                r"""For $x>0$, it holds that $\sqrt{x^3}=x\sqrt x$.""",
                True,
                r"""**B.** → True

The radicand splits into a perfect square times the remaining factor.

Split the power under the root:

$$\sqrt{x^3}=\sqrt{x^2\cdot x}=\sqrt{x^2}\cdot\sqrt x$$

Since $x>0$, the first root is $x$ itself, so the product is $x\sqrt x$. So the statement is True.""",
            ),
            (
                r"""For every real $y$ with $y\neq2$ and $y\neq-2$, it holds that $\dfrac{1}{y-2}\cdot\dfrac{y+2}{y^2-4}=\dfrac{1}{y^2-4}$.""",
                False,
                r"""**C.** → False

Factoring $y^2-4$ shows which factor actually cancels and which one is squared.

Multiply and factor the denominator:

$$\frac{1}{y-2}\cdot\frac{y+2}{(y-2)(y+2)}=\frac{y+2}{(y-2)^2(y+2)}=\frac{1}{(y-2)^2}$$

The factor $y+2$ cancels, leaving $(y-2)^2$ below, not $y^2-4$. Equating the two candidate answers gives $(y-2)^2=y^2-4$, hence $y=2$, which is excluded. So the statement is False.""",
            ),
            (
                r"""The equation $\sqrt{z+3}=z+1$ has exactly one real solution.""",
                True,
                r"""**D.** → True

Squaring the equation is only an implication, so each candidate has to be checked against the sign condition $z+1\ge0$.

Square both sides:

$$z+3=(z+1)^2=z^2+2z+1$$

Collect and factor:

$$z^2+z-2=0\quad\Longleftrightarrow\quad(z+2)(z-1)=0$$

For $z=-2$ the right-hand side of the original equation is $-1<0$, which no square root can equal, so this candidate is extraneous. For $z=1$ both sides equal $2$. Exactly one solution survives. So the statement is True.""",
            ),
            (
                r"""For all real $x$ and $y$, it holds that $|x+y|=|x|+|y|$.""",
                False,
                r"""**E.** → False

The triangle inequality gives only one direction, and equality is a special case.

General bound:

$$|x+y|\le|x|+|y|$$

Equality requires $x$ and $y$ to have the same sign, that is $xy\ge0$. For any pair of opposite signs the left-hand side is strictly smaller, since the two contributions partly cancel. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Symmetric functions, mixed radicals, and a divisibility test",
        "diff": "4/5",
        "overview": r"Five unrelated items: expressing a sum of reciprocals through symmetric functions, multiplying a square root by a fourth root, applying the factor theorem, cancelling a common factor in a quotient, and reducing an estimate to a perfect square.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $a+b=s$ and $ab=p$ with $p\neq0$ and $s\neq0$, then $\dfrac1a+\dfrac1b=\dfrac ps$.""",
                False,
                r"""**A.** → False

Adding the two reciprocals produces the sum on top and the product below, not the other way round.

Combine over $ab$:

$$\frac1a+\frac1b=\frac{b+a}{ab}=\frac sp$$

The correct value is $\dfrac sp$, while the claim offers the reciprocal $\dfrac ps$. Equality would force $s^2=p^2$, so the claim fails for every pair whose sum and product differ in absolute value. So the statement is False.""",
            ),
            (
                r"""For $a>0$, it holds that $\sqrt a\cdot\sqrt[4]a=a^{3/4}$.""",
                True,
                r"""**B.** → True

Both roots are written as fractional powers, after which the exponents add.

Convert and add:

$$\sqrt a\cdot\sqrt[4]a=a^{1/2}\cdot a^{1/4}=a^{\frac12+\frac14}=a^{3/4}$$

So the statement is True.""",
            ),
            (
                r"""The polynomial $b^4+1$ is divisible by $b+1$.""",
                False,
                r"""**C.** → False

A linear factor $b+1$ divides a polynomial exactly when the polynomial vanishes at the zero of that factor.

Evaluate at the zero of $b+1$:

$$(-1)^4+1=1+1=2$$

The remainder is $2$, not $0$, so the division leaves a nonzero remainder and $b+1$ is not a factor. So the statement is False.""",
            ),
            (
                r"""For every real $c$ with $c\neq0$, it holds that $\dfrac{c^2+2c}{c}=c+2$.""",
                True,
                r"""**D.** → True

The numerator carries the factor $c$, which the denominator removes.

Factor and cancel:

$$\frac{c^2+2c}{c}=\frac{c(c+2)}{c}=c+2$$

The cancellation is legitimate because $c\neq0$. So the statement is True.""",
            ),
            (
                r"""For every real $c$, it holds that $c^2+1\ge 2c$.""",
                True,
                r"""**E.** → True

The difference of the two sides is a complete square.

Move everything to one side:

$$c^2-2c+1=(c-1)^2$$

A real square is never negative, so $c^2+1-2c\ge0$ for every real $c$, with equality exactly at $c=1$. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A symmetric quartic, a polynomial quotient, and an interval",
        "diff": "5/5",
        "overview": r"Five independent items: factoring a symmetric quartic, dividing a difference of cubes by a linear factor, translating an absolute-value inequality into an interval, iterating fractional exponents, and testing a cube sum under a vanishing sum.",
        "context": r"""Let $u$, $v$, and $w$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $u$ and $v$, it holds that $u^4+u^2v^2+v^4=\left(u^2+uv+v^2\right)\left(u^2-uv+v^2\right)$.""",
                True,
                r"""**A.** → True

Adding and subtracting $u^2v^2$ turns the left-hand side into a difference of two squares.

Complete the square:

$$u^4+u^2v^2+v^4=\left(u^4+2u^2v^2+v^4\right)-u^2v^2=\left(u^2+v^2\right)^2-(uv)^2$$

Factor that difference of squares:

$$\left(u^2+v^2\right)^2-(uv)^2=\left(u^2+v^2-uv\right)\left(u^2+v^2+uv\right)$$

Reordering the terms inside the brackets gives the claimed product. So the statement is True.""",
            ),
            (
                r"""For every real $u$ with $u\neq1$, it holds that $\dfrac{u^3-1}{u-1}=u^2+u+1$.""",
                True,
                r"""**B.** → True

The numerator is a difference of cubes, and the denominator is one of its factors.

Factor the numerator:

$$u^3-1=(u-1)\left(u^2+u+1\right)$$

Cancelling the nonzero factor $u-1$ leaves

$$\frac{u^3-1}{u-1}=u^2+u+1$$

So the statement is True.""",
            ),
            (
                r"""For every real $v$, the inequality $|v-1|<2$ holds precisely when $-1<v<3$.""",
                True,
                r"""**C.** → True

An absolute-value bound below a positive number is equivalent to a two-sided bound.

Unfold the absolute value:

$$|v-1|<2\quad\Longleftrightarrow\quad-2<v-1<2$$

Adding $1$ throughout shifts the interval:

$$-1<v<3$$

Both steps are equivalences, so the two descriptions define the same set. So the statement is True.""",
            ),
            (
                r"""For $w>0$, it holds that $\left(w^{1/2}\right)^{1/3}=w^{2/3}$.""",
                False,
                r"""**D.** → False

Iterated exponents are multiplied, and the product of two proper fractions is smaller than either.

Multiply the exponents:

$$\left(w^{1/2}\right)^{1/3}=w^{\frac12\cdot\frac13}=w^{1/6}$$

The claim reads $w^{2/3}$, which is what one gets by adding a wrong pair of fractions. For $w>0$ the equality $w^{1/6}=w^{2/3}$ holds only at $w=1$. So the statement is False.""",
            ),
            (
                r"""If $u+v+w=0$, then $u^3+v^3+w^3=0$.""",
                False,
                r"""**E.** → False

Under a vanishing sum the three cubes do collapse, but to a product rather than to zero.

Eliminate $w$ by writing $w=-(u+v)$:

$$u^3+v^3+w^3=u^3+v^3-(u+v)^3=-3uv(u+v)$$

Since $-(u+v)=w$, the value is $3uvw$:

$$u^3+v^3+w^3=3uvw$$

That vanishes only when at least one of the letters is $0$, so any triple with $uvw\neq0$ and $u+v+w=0$ refutes the claim. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A domain gap, even roots, and a difference of two squares",
        "diff": "4/5",
        "overview": r"Five unrelated items: cancelling a factor that vanishes inside the stated domain, bounding a sum of two absolute values from below, taking an even root of an even power, subtracting the squares of two binomials, and reducing a quotient of quadratics.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The identity $\dfrac{x^2-1}{x-1}=x+1$ holds for every real $x$.""",
                False,
                r"""**A.** → False

The algebra is correct, but the claim is made on a domain that the left-hand side does not cover.

Factor and cancel for $x\neq1$:

$$\frac{x^2-1}{x-1}=\frac{(x-1)(x+1)}{x-1}=x+1$$

At $x=1$ the denominator is $0$, so the left-hand side is undefined while the right-hand side equals $2$. An identity claimed for every real $x$ must hold at $x=1$ as well. So the statement is False.""",
            ),
            (
                r"""For every real $y$, it holds that $|y-1|+|y-4|\ge3$.""",
                True,
                r"""**B.** → True

The two arguments are chosen so that their difference is constant, which is exactly what the triangle inequality needs.

Reverse the second term and add:

$$|y-1|+|y-4|=|y-1|+|4-y|\ge|(y-1)+(4-y)|=3$$

The inner sum is the constant $3$, independent of $y$, so the bound holds everywhere. Equality is attained on the interval $1\le y\le4$. So the statement is True.""",
            ),
            (
                r"""For every real $z$, it holds that $\sqrt[4]{z^4}=z$.""",
                False,
                r"""**C.** → False

An even root is nonnegative by definition, so it cannot reproduce a negative base.

Correct rule:

$$\sqrt[4]{z^4}=|z|$$

For $z<0$ the left-hand side is positive while the right-hand side of the claim is negative, so the identity fails on the whole negative half-line. So the statement is False.""",
            ),
            (
                r"""For all real $y$ and $z$, it holds that $(y+z)^2-(y-z)^2=2yz$.""",
                False,
                r"""**D.** → False

The squares of the sum and of the difference differ only in the sign of the mixed term, so subtracting them keeps two copies of it.

Expand both squares:

$$(y+z)^2=y^2+2yz+z^2,\qquad (y-z)^2=y^2-2yz+z^2$$

Subtracting removes the pure squares and doubles the mixed term:

$$(y+z)^2-(y-z)^2=4yz$$

The claim gives half of the correct value, so the two agree only when $yz=0$. So the statement is False.""",
            ),
            (
                r"""For every real $x$ with $x\neq0$ and $x\neq2$, it holds that $\dfrac{x^2-4}{x^2-2x}=\dfrac{x+2}{x}$.""",
                True,
                r"""**E.** → True

Numerator and denominator are factored first, so that the shared factor becomes visible.

Factor both parts:

$$\frac{x^2-4}{x^2-2x}=\frac{(x-2)(x+2)}{x(x-2)}$$

The factor $x-2$ is nonzero under the stated restrictions and cancels:

$$\frac{(x-2)(x+2)}{x(x-2)}=\frac{x+2}{x}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Squaring a vanishing sum, divisibility, and a stacked reciprocal",
        "diff": "5/5",
        "overview": r"Five separate items: squaring the condition $a+b+c=0$, factoring a sum of cubes, clearing a reciprocal inside a denominator, inverting a negative fractional exponent, and adding two fractions with consecutive denominators.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $a+b+c=0$, then $a^2+b^2+c^2=-2(ab+bc+ca)$.""",
                True,
                r"""**A.** → True

Squaring the condition produces exactly the two symmetric sums that the claim relates.

Square the condition:

$$0=(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)$$

Moving the mixed part to the other side gives

$$a^2+b^2+c^2=-2(ab+bc+ca)$$

So the statement is True.""",
            ),
            (
                r"""For all real $a$ and $b$, the polynomial $a^3+b^3$ is divisible by $a+b$.""",
                True,
                r"""**B.** → True

Read as a polynomial in $a$, the expression vanishes at the zero of $a+b$.

Substitute $a=-b$:

$$(-b)^3+b^3=-b^3+b^3=0$$

The remainder is $0$, so $a+b$ is a factor, and the explicit quotient is the standard one:

$$a^3+b^3=(a+b)\left(a^2-ab+b^2\right)$$

So the statement is True.""",
            ),
            (
                r"""For every real $a$ with $a\neq0$ and $a\neq1$, it holds that $\dfrac{1}{1-\frac1a}=\dfrac{a}{a-1}$.""",
                True,
                r"""**C.** → True

The denominator is combined into a single fraction before the outer reciprocal is taken.

Combine the denominator:

$$1-\frac1a=\frac{a-1}{a}$$

Taking the reciprocal of a single fraction inverts it:

$$\frac{1}{\frac{a-1}{a}}=\frac{a}{a-1}$$

The restrictions $a\neq0$ and $a\neq1$ keep every step defined. So the statement is True.""",
            ),
            (
                r"""For $b>0$, it holds that $\dfrac{1}{b^{-2/3}}=b^{-3/2}$.""",
                False,
                r"""**D.** → False

Dividing by a negative power changes the sign of the exponent; it does not invert the fraction in the exponent.

Move the power into the numerator:

$$\frac{1}{b^{-2/3}}=b^{2/3}$$

The claim replaces $\tfrac23$ by $-\tfrac32$, which mixes a sign change with an inversion. For $b>0$ the equality $b^{2/3}=b^{-3/2}$ forces $\tfrac23=-\tfrac32$ unless $b=1$. So the statement is False.""",
            ),
            (
                r"""For every real $c$ with $c\neq0$ and $c\neq-1$, it holds that $\dfrac1c+\dfrac{1}{c+1}=\dfrac{1}{c(c+1)}$.""",
                False,
                r"""**E.** → False

Adding the two fractions over their product keeps a linear numerator.

Combine over $c(c+1)$:

$$\frac1c+\frac{1}{c+1}=\frac{(c+1)+c}{c(c+1)}=\frac{2c+1}{c(c+1)}$$

The numerator is $2c+1$, not $1$. The numerator $1$ belongs to the difference of the same two fractions, so the claim replaces a subtraction by an addition. Equality would need $2c+1=1$, that is $c=0$, which is excluded. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Undoing a root, a parallelogram identity, and reciprocal order",
        "diff": "4/5",
        "overview": r"Five unrelated items: undoing an $n$-th root by an $n$-th power, adding the squares of a sum and a difference, comparing $|p+q|$ with $|p|+|q|$, dividing a quartic by a quadratic, and inverting a bound on the unit interval.",
        "context": r"""Let $p$, $q$, and $r$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $p>0$ and every positive integer $n$, it holds that $\left(p^{1/n}\right)^n=p$.""",
                True,
                r"""**A.** → True

The $n$-th root of a positive number is defined as the positive solution of $t^n=p$.

Multiply the exponents:

$$\left(p^{1/n}\right)^n=p^{\frac1n\cdot n}=p^{1}=p$$

The exponent product is $1$ for every positive integer $n$, so the two operations undo each other. So the statement is True.""",
            ),
            (
                r"""For all real $p$ and $q$, it holds that $(p-q)^2+(p+q)^2=2\left(p^2+q^2\right)$.""",
                True,
                r"""**B.** → True

Both squares carry the same pure terms and opposite mixed terms.

Expand and add:

$$(p-q)^2+(p+q)^2=\left(p^2-2pq+q^2\right)+\left(p^2+2pq+q^2\right)$$

The two mixed terms cancel and the pure terms double:

$$(p-q)^2+(p+q)^2=2p^2+2q^2$$

So the statement is True.""",
            ),
            (
                r"""For all real $p$ and $q$, it holds that $|p+q|\ge|p|+|q|$.""",
                False,
                r"""**C.** → False

The triangle inequality runs in the opposite direction.

Correct bound:

$$|p+q|\le|p|+|q|$$

Whenever $p$ and $q$ have opposite signs the two contributions partly cancel on the left while the right-hand side keeps both magnitudes, so the left-hand side is strictly smaller there. The claimed inequality can therefore hold only in the equality case $pq\ge0$, never as a general law. So the statement is False.""",
            ),
            (
                r"""For every real $r$ with $r\neq1$ and $r\neq-1$, it holds that $\dfrac{r^4-1}{r^2-1}=r^2+1$.""",
                True,
                r"""**D.** → True

The numerator is a difference of squares in $r^2$, and the denominator is one of the two factors.

Factor the numerator:

$$r^4-1=\left(r^2-1\right)\left(r^2+1\right)$$

Cancelling $r^2-1$, which is nonzero under the stated restrictions, leaves

$$\frac{r^4-1}{r^2-1}=r^2+1$$

So the statement is True.""",
            ),
            (
                r"""If $0<p<1$, then $\dfrac1p<1$.""",
                False,
                r"""**E.** → False

Taking reciprocals of positive numbers reverses the comparison with $1$.

Subtract $1$ from the reciprocal:

$$\frac1p-1=\frac{1-p}{p}$$

For $0<p<1$ both the numerator $1-p$ and the denominator $p$ are positive, so the difference is positive and $\dfrac1p>1$ on the whole interval. The claim states the reverse. So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A cube sum comparison, symmetric squares, and an absolute-value equation",
        "diff": "5/5",
        "overview": r"Five independent items: expanding a cube sum against a factored product, expressing a squared difference through symmetric functions, recognising a perfect square under a root, combining two fractions with different denominators, and counting the solutions of an absolute-value equation.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $x$ and $y$, it holds that $x^3+y^3+(x+y)^3=2(x+y)\left(x^2+xy+y^2\right)$.""",
                False,
                r"""**A.** → False

Both terms on the left carry the factor $x+y$, so the comparison reduces to the second factor.

Pull out the common factor:

$$x^3+y^3+(x+y)^3=(x+y)\left(x^2-xy+y^2\right)+(x+y)\left(x^2+2xy+y^2\right)$$

Adding the two brackets gives

$$x^3+y^3+(x+y)^3=(x+y)\left(2x^2+xy+2y^2\right)$$

The claimed right-hand side is $(x+y)\left(2x^2+2xy+2y^2\right)$, which is larger by $(x+y)xy$. That correction is nonzero whenever $xy\neq0$ and $x+y\neq0$. So the statement is False.""",
            ),
            (
                r"""If $x+y=s$ and $xy=p$ for real numbers $s$ and $p$, then $(x-y)^2=s^2-4p$.""",
                True,
                r"""**B.** → True

The squares of the sum and of the difference share the pure terms and differ in the mixed term.

Expand both squares:

$$(x+y)^2=x^2+2xy+y^2,\qquad (x-y)^2=x^2-2xy+y^2$$

Subtracting shows that the difference of the two squares is four times the product:

$$(x-y)^2=(x+y)^2-4xy=s^2-4p$$

So the statement is True.""",
            ),
            (
                r"""For $x\ge0$, it holds that $\sqrt x+\sqrt{x+2\sqrt x+1}=2\sqrt x+1$.""",
                True,
                r"""**C.** → True

The second radicand is a completed square in $\sqrt x$.

Identify the square:

$$x+2\sqrt x+1=\left(\sqrt x\right)^2+2\sqrt x+1=\left(\sqrt x+1\right)^2$$

Since $\sqrt x+1\ge1>0$, the root returns the bracket itself:

$$\sqrt{x+2\sqrt x+1}=\sqrt x+1$$

Adding the first term gives $\sqrt x+\left(\sqrt x+1\right)=2\sqrt x+1$. So the statement is True.""",
            ),
            (
                r"""For every real $y$ with $y\neq0$ and $y\neq1$, it holds that $\dfrac{y}{y-1}-\dfrac1y=\dfrac{y^2+y-1}{y(y-1)}$.""",
                False,
                r"""**D.** → False

The two fractions are combined over $y(y-1)$, and the sign of the second numerator has to be carried along.

Combine over $y(y-1)$:

$$\frac{y}{y-1}-\frac1y=\frac{y\cdot y-(y-1)}{y(y-1)}=\frac{y^2-y+1}{y(y-1)}$$

The correct numerator is $y^2-y+1$, while the claim offers $y^2+y-1$. The two differ by $2y-2$, which vanishes only at $y=1$, an excluded value. So the statement is False.""",
            ),
            (
                r"""The equation $|z|=z^2$ has exactly three real solutions.""",
                True,
                r"""**E.** → True

The absolute value is resolved by splitting the real line at the origin.

Treat the nonnegative branch, where $|z|=z$:

$$z=z^2\quad\Longleftrightarrow\quad z(z-1)=0$$

This gives $z=0$ and $z=1$. On the negative branch $|z|=-z$, so

$$-z=z^2\quad\Longleftrightarrow\quad z(z+1)=0$$

which contributes $z=-1$, the value $z=0$ already being counted. The solution set is $\{-1,0,1\}$, of size three. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A reciprocal quotient, a squared root sum, and a cancellation law",
        "diff": "4/5",
        "overview": r"Five unrelated items: simplifying a quotient of reciprocal differences, squaring a sum of a root and its reciprocal, recognising a perfect square in a quartic, shifting an absolute value, and cancelling a nonzero factor in an equation.",
        "context": r"""Let $a$, $b$, and $c$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For nonzero $a$ and $b$ with $a+b\neq0$, it holds that $\dfrac{a^{-1}-b^{-1}}{a^{-1}+b^{-1}}=\dfrac{b-a}{b+a}$.""",
                True,
                r"""**A.** → True

Numerator and denominator are combined over $ab$, which then cancels.

Combine both levels over $ab$:

$$a^{-1}-b^{-1}=\frac{b-a}{ab},\qquad a^{-1}+b^{-1}=\frac{b+a}{ab}$$

Dividing the two multiplies by the reciprocal of the second, and the factor $ab$ drops out:

$$\frac{\frac{b-a}{ab}}{\frac{b+a}{ab}}=\frac{b-a}{ab}\cdot\frac{ab}{b+a}=\frac{b-a}{b+a}$$

So the statement is True.""",
            ),
            (
                r"""For $b>0$, it holds that $\left(b^{1/2}+b^{-1/2}\right)^2=b+b^{-1}$.""",
                False,
                r"""**B.** → False

Squaring a two-term sum produces a cross term, and here that cross term is a constant.

Expand the square:

$$\left(b^{1/2}+b^{-1/2}\right)^2=b+2\cdot b^{1/2}\cdot b^{-1/2}+b^{-1}$$

The middle product is $b^{1/2-1/2}=b^0=1$, so the correct value is

$$\left(b^{1/2}+b^{-1/2}\right)^2=b+2+b^{-1}$$

The claim loses the constant $2$, and no positive $b$ repairs the gap. So the statement is False.""",
            ),
            (
                r"""For every real $c$, it holds that $c^4-2c^2+1=\left(c^2-1\right)^2$.""",
                True,
                r"""**C.** → True

Read as a quadratic in $c^2$, the left-hand side is a completed square.

Expand the proposed square:

$$\left(c^2-1\right)^2=\left(c^2\right)^2-2c^2+1=c^4-2c^2+1$$

The expansion reproduces the left-hand side term by term. So the statement is True.""",
            ),
            (
                r"""For every real $a$, it holds that $|a-1|=|a|-1$.""",
                False,
                r"""**D.** → False

An absolute value is never negative, while the proposed right-hand side can be.

Compare the two sides on the interval $0\le a<1$:

$$|a-1|=1-a>0,\qquad |a|-1=a-1<0$$

A positive number cannot equal a negative one, so the claim already fails on that whole interval. So the statement is False.""",
            ),
            (
                r"""If $a^2=ac$ and $a\neq0$, then $a=c$.""",
                True,
                r"""**E.** → True

With the factor known to be nonzero, cancellation is legitimate.

Collect and factor:

$$a^2-ac=0\quad\Longleftrightarrow\quad a(a-c)=0$$

The hypothesis $a\neq0$ rules out the first factor, so the second must vanish, that is $a-c=0$. So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "Cyclic fractions, a conjugate quotient, and exponent sums",
        "diff": "5/5",
        "overview": r"Five separate items: replacing each numerator under a vanishing sum, factoring a difference of fourth powers, rationalising a quotient of two radical sums, adding fractional exponents, and clearing reciprocals inside two denominators.",
        "context": r"""Let $u$, $v$, and $w$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $u$, $v$, $w$ are nonzero with $u+v+w=0$, then $\dfrac{u+v}{w}+\dfrac{v+w}{u}+\dfrac{w+u}{v}=-3$.""",
                True,
                r"""**A.** → True

The condition turns every two-term numerator into the negative of the matching denominator.

Rewrite the three numerators:

$$u+v=-w,\qquad v+w=-u,\qquad w+u=-v$$

Each fraction therefore collapses to $-1$:

$$\frac{-w}{w}+\frac{-u}{u}+\frac{-v}{v}=-1-1-1=-3$$

All three denominators are nonzero by assumption, so every step is defined. So the statement is True.""",
            ),
            (
                r"""For all real $u$ and $v$, it holds that $u^4-v^4=(u-v)\left(u^3+v^3\right)$.""",
                False,
                r"""**B.** → False

The cofactor of $u-v$ in a difference of fourth powers is the full symmetric sum, not just the outer two terms.

Correct factorisation:

$$u^4-v^4=(u-v)\left(u^3+u^2v+uv^2+v^3\right)$$

The claimed cofactor omits the middle pair $u^2v+uv^2$, so the two right-hand sides differ by

$$(u-v)\left(u^2v+uv^2\right)=uv(u-v)(u+v)$$

That expression is nonzero whenever $uv\neq0$ and $u^2\neq v^2$. So the statement is False.""",
            ),
            (
                r"""For $u>0$ and $v>0$ with $u\neq v$, it holds that $\dfrac{\sqrt u-\sqrt v}{\sqrt u+\sqrt v}=\dfrac{u-2\sqrt{uv}+v}{u-v}$.""",
                True,
                r"""**C.** → True

Multiplying numerator and denominator by the conjugate of the denominator clears the roots from below.

Multiply by the conjugate:

$$\frac{\sqrt u-\sqrt v}{\sqrt u+\sqrt v}=\frac{\left(\sqrt u-\sqrt v\right)^2}{\left(\sqrt u+\sqrt v\right)\left(\sqrt u-\sqrt v\right)}$$

The new denominator is a difference of squares, namely $u-v$, and the new numerator is

$$\left(\sqrt u-\sqrt v\right)^2=u-2\sqrt{uv}+v$$

The restriction $u\neq v$ keeps the denominator nonzero. So the statement is True.""",
            ),
            (
                r"""For $w>0$, it holds that $w^{1/2}\cdot w^{1/3}=w^{1/6}$.""",
                False,
                r"""**D.** → False

Multiplying powers of one base adds the exponents; the exponents themselves are not multiplied.

Add the two fractions:

$$w^{1/2}\cdot w^{1/3}=w^{\frac12+\frac13}=w^{5/6}$$

The claimed exponent $\tfrac16$ is the product $\tfrac12\cdot\tfrac13$. Since $\tfrac56\neq\tfrac16$, the two sides agree only at $w=1$. So the statement is False.""",
            ),
            (
                r"""For every real $w$ with $w\neq0$, $w\neq1$ and $w\neq-1$, it holds that $\dfrac{1}{1-\frac1w}-\dfrac{1}{1+\frac1w}=\dfrac{2w}{w^2-1}$.""",
                True,
                r"""**E.** → True

Each of the two stacked fractions is cleared separately before the subtraction.

Clear both denominators:

$$\frac{1}{1-\frac1w}=\frac{w}{w-1},\qquad \frac{1}{1+\frac1w}=\frac{w}{w+1}$$

Subtracting the two results over the common denominator $w^2-1$ gives

$$\frac{w}{w-1}-\frac{w}{w+1}=\frac{w(w+1)-w(w-1)}{(w-1)(w+1)}=\frac{2w}{w^2-1}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.5",
        "title": "A shifted square, a cancellation trap, and a quartic bound",
        "diff": "5/5",
        "overview": r"Five unrelated items: factoring after recognising a shifted square, cancelling a common factor in a quotient of quadratics, converting an absolute-value bound into a closed interval, adding two negative powers, and reducing a quartic estimate to a square.",
        "context": r"""Let $x$, $y$, and $z$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $x$ and $y$, it holds that $x^2+2xy+y^2-1=(x+y-1)(x+y+1)$.""",
                True,
                r"""**A.** → True

The first three terms form a complete square, which turns the whole expression into a difference of squares.

Collect the square:

$$x^2+2xy+y^2-1=(x+y)^2-1$$

Now factor with the bases $x+y$ and $1$:

$$(x+y)^2-1^2=(x+y-1)(x+y+1)$$

So the statement is True.""",
            ),
            (
                r"""For every real $y$ with $y\neq3$ and $y\neq-3$, it holds that $\dfrac{y^2+3y}{y^2-9}=\dfrac{y}{y+3}$.""",
                False,
                r"""**B.** → False

Factoring both parts shows which factor cancels and which one survives.

Factor numerator and denominator:

$$\frac{y^2+3y}{y^2-9}=\frac{y(y+3)}{(y-3)(y+3)}$$

The common factor is $y+3$, so cancelling it leaves

$$\frac{y(y+3)}{(y-3)(y+3)}=\frac{y}{y-3}$$

The correct denominator is $y-3$, while the claim keeps $y+3$. Equating the two would force $y-3=y+3$ for $y\neq0$, which is impossible. So the statement is False.""",
            ),
            (
                r"""The solution set of the inequality $|z-2|\le1$ is the interval $[1,3]$.""",
                True,
                r"""**C.** → True

An absolute value bounded by a number is equivalent to a two-sided bound on the argument.

Unfold the absolute value:

$$|z-2|\le1\quad\Longleftrightarrow\quad-1\le z-2\le1$$

Adding $2$ throughout shifts both bounds:

$$1\le z\le3$$

Both endpoints belong to the set, since there $|z-2|=1$, so the solution set is the closed interval $[1,3]$. So the statement is True.""",
            ),
            (
                r"""For every real $z$ with $z\neq0$, it holds that $z^{-1}+z^{-2}=\dfrac{1}{z+z^2}$.""",
                False,
                r"""**D.** → False

Negative powers are added over the common denominator $z^2$; they do not combine into a single reciprocal of a sum.

Combine over $z^2$:

$$z^{-1}+z^{-2}=\frac{z}{z^2}+\frac{1}{z^2}=\frac{z+1}{z^2}$$

The claim offers $\dfrac{1}{z(z+1)}$. Equating the two and clearing denominators gives

$$(z+1)^2z=z^2\quad\Longleftrightarrow\quad z\left(z^2+z+1\right)=0$$

The quadratic factor has discriminant $1-4=-3<0$, so the only root is $z=0$, which is excluded. The two sides therefore never agree. So the statement is False.""",
            ),
            (
                r"""For every real $x$, it holds that $x^4+1\ge 2x^2$.""",
                True,
                r"""**E.** → True

The difference of the two sides is a complete square in $x^2$.

Move everything to one side:

$$x^4-2x^2+1=\left(x^2-1\right)^2$$

A real square is never negative, so the inequality holds for every real $x$, with equality exactly at $x=\pm1$. So the statement is True.""",
            ),
        ],
    },
]
