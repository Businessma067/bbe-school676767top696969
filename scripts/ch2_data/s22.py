from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="Warm-up: adding two fractions",
        subsection="2.2",
        difficulty="1/5",
        context=CTX,
        items=[
            (
                r"""Adding reciprocals: for $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{a+b}{ab}$.""",
                True,
                r"""Least common denominator of $a$ and $b$ is their product, not their sum $a+b$.""",
            ),
            (
                r"""Cross-multiplying gives $\dfrac{2}{x}+\dfrac{3}{y}=\dfrac{2y+3x}{xy}$ for $x,y\neq 0$.""",
                True,
                r"""Least common denominator of $x$ and $y$ is the product $xy$:

$$\frac{\cdots}{x}+\frac{\cdots}{y}=\frac{\cdots}{xy}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $p,q\neq 0$, the sum $\dfrac{p}{q}+\dfrac{q}{p}$ equals $\dfrac{p^2+q^2}{pq}$.""",
                True,
                r"""Over $hk\neq 0$ the true combination is

$$\frac{h}{k}+\frac{k}{h}=\frac{h^2+k^2}{hk}$$

Squaring the sum in the numerator would add a cross term $2hk$.""",
            ),
            (
                r"""Using $m+n$ as a common denominator is wrong: for $m,n\neq 0$, $\dfrac{1}{m}+\dfrac{1}{n}=\dfrac{1}{m+n}$ is false.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$m\cdot n$$

Combine:

$$\frac{\cdots}{m}+\frac{\cdots}{n}=\frac{\cdots}{mn}$$""",
            ),
            (
                r"""Clearing to $uv$, one has $\dfrac{4}{u}+\dfrac{1}{v}=\dfrac{4v+u}{uv}$ for $u,v\neq 0$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$u\cdot v$$

Combine:

$$\frac{\cdots}{u}+\frac{\cdots}{v}=\frac{\cdots}{uv}$$""",
            ),
        ],
        overview=r"Five LCD additions with a wrong common denominator on one line.",
    ),
    task(
        title="Warm-up: cancelling a common factor",
        subsection="2.2",
        difficulty="1/5",
        context=CTX,
        items=[
            (
                r"""After cancelling, for $x\neq 3$, $\dfrac{x^2-9}{x-3}=x+3$.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{x^2-9}{x-3}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""For $t\neq -2$, simplifying $\dfrac{t^2-4}{t+2}$ leaves $t-2$.""",
                True,
                r"""Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$""",
            ),
            (
                r"""Removing the factor $a-5$ gives $\dfrac{a^2-25}{a-5}=a+5$ for $a\neq 5$.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{a^2-25}{a-5}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""For $k\neq 1$, the quotient $\dfrac{k^2-1}{k-1}$ simplifies to $k+1$.""",
                True,
                r"""Least common denominator of $t$ and $u$ is the product $tu$:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""A sign slip makes $\dfrac{x^2-4}{x-2}=x-2$ false for $x\neq 2$.""",
                False,
                r"""Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.""",
            ),
        ],
        overview=r"Five difference-of-squares cancellations, including one sign error.",
    ),
    task(
        title="Warm-up: product of simple fractions",
        subsection="2.2",
        difficulty="2/5",
        context=CTX,
        items=[
            (
                r"""Multiplying monomial fractions: for $a,b\neq 0$, $\dfrac{3a}{2b}\cdot\dfrac{4b}{3a}=2$.""",
                True,
                r"""Least common denominator of $2b$ and $3a$ is the product $2b3a$:

$$\frac{\cdots}{2b}+\frac{\cdots}{3a}=\frac{\cdots}{2b3a}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $x,y\neq 0$, $\dfrac{2x}{y}\cdot\dfrac{y}{4x}=\dfrac{1}{2}$.""",
                True,
                r"""Least common denominator of $y$ and $4x$ is the product $y4x$:

$$\frac{\cdots}{y}+\frac{\cdots}{4x}=\frac{\cdots}{y4x}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Reciprocal factors collapse: for $p,q\neq 0$, $\dfrac{5p}{q}\cdot\dfrac{q}{5p}=1$.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{5p}{q}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""For $m,n\neq 0$, the product $\dfrac{m}{n}\cdot\dfrac{n}{m}$ equals $0$ (false).""",
                False,
                r"""Clear to the product denominator:

LCD:

$$n\cdot m$$

Combine:

$$\frac{\cdots}{n}+\frac{\cdots}{m}=\frac{\cdots}{nm}$$""",
            ),
            (
                r"""For $u,v\neq 0$, $\dfrac{6u}{v}\cdot\dfrac{v}{3u}=2$.""",
                True,
                r"""Least common denominator of $v$ and $3u$ is their product, not their sum $v+3u$.""",
            ),
        ],
        overview=r"Five monomial fraction products with one false zero claim.",
    ),
    task(
        title="Warm-up: partial fraction split on $x^2-1$",
        subsection="2.2",
        difficulty="2/5",
        context=CTX,
        items=[
            (
                r"""Decomposing over $x^2-1$: for $x\neq\pm 1$, $\dfrac{1}{x^2-1}=\dfrac{1}{2(x-1)}-\dfrac{1}{2(x+1)}$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$x^2-1\cdot 2(x-1)$$

Combine:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{2(x-1)}=\frac{\cdots}{x^2-12(x-1)}$$""",
            ),
            (
                r"""Doubling the numerator, for $x\neq\pm 1$, $\dfrac{2}{x^2-1}=\dfrac{1}{x-1}-\dfrac{1}{x+1}$.""",
                True,
                r"""Least common denominator of $x^2-1$ and $x-1$ is the product $x^2-1x-1$:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{x-1}=\frac{\cdots}{x^2-1x-1}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{3}{x^2-1}=\dfrac{3}{2(x-1)}-\dfrac{3}{2(x+1)}$.""",
                True,
                r"""Least common denominator of $x^2-1$ and $2(x-1)$ is the product $x^2-12(x-1)$:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{2(x-1)}=\frac{\cdots}{x^2-12(x-1)}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Omitting the factor $\tfrac12$ makes $\dfrac{1}{x^2-1}=\dfrac{1}{x-1}-\dfrac{1}{x+1}$ false for $x\neq\pm 1$.""",
                False,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{1}{x^2-1}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{4}{x^2-1}=\dfrac{2}{x-1}-\dfrac{2}{x+1}$.""",
                True,
                r"""Least common denominator of $x^2-1$ and $x-1$ is their product, not their sum $x^2-1+x-1$.""",
            ),
        ],
        overview=r"Five partial-fraction decompositions with a missing one-half factor on one line.",
    ),
    task(
        title="Cancelled factor kept as the remainder",
        subsection="2.2",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""The stacked quotient $\dfrac{\dfrac{8a^2b}{4x^2-16}}{\dfrac{4ab}{2x+4}}$ simplifies to $\dfrac{a}{x-2}$ for $x\neq\pm 2$ and $a,b\neq 0$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$4x^2-16\cdot 2x+4$$

Combine:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$""",
            ),
            (
                r"""For $m\neq 0$, $\dfrac{4(9m)}{(-9m)^2}=\dfrac{4}{9m}$.""",
                True,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-9m)^2$.

Square the denominator:

$$(-9m)^2=81m^2$$

The denominator becomes a positive power of $m$.

Reduce the quotient:

$$\frac{4}{9 m}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.""",
            ),
            (
                r"""Let $x$ be a nonzero real number. Twice the reciprocal of the sum of $x$ and the reciprocal of $x$ equals twice $x$ divided by the sum of the square of $x$ and one.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
            (
                r"""For $m,n\neq 0$, $\dfrac{m}{n}+\dfrac{n}{m}=\dfrac{m^2+n^2}{mn}$.""",
                True,
                r"""Over $hk\neq 0$ the true combination is

$$\frac{h}{k}+\frac{k}{h}=\frac{h^2+k^2}{hk}$$

Squaring the sum in the numerator would add a cross term $2hk$.""",
            ),
            (
                r"""Let $k$ be a nonzero real letter. Twice the reciprocal of the sum of $k$ and the reciprocal of $k$ equals $k$ divided by the sum of the square of $k$ and one.""",
                False,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $k\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{k+\frac{1}{k}}=\frac{2k}{k^2+1}$$

Twice the reciprocal of $k+\dfrac{1}{k}$ clears to a single rational expression.

Right-hand wording:

$$\frac{k}{k^2+1}$$

The claim's right side must be read from the same verbal description.

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
        ],
        overview=r"Five independent fraction claims. A cancelled linear factor is not the remainder; an LCD is a product; striking a letter that is not a factor of every term fails even if a single test point hides the error.",
    ),
    task(
        title="LCD taken as a sum of denominators",
        subsection="2.2",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For $r,s\neq 0$, $\dfrac{1}{r}+\dfrac{1}{s}=\dfrac{1}{r+s}$.""",
                False,
                r"""Least common denominator of $r$ and $s$ is their product, not their sum $r+s$.""",
            ),
            (
                r"""Provided $x\neq 0$, the sum $\dfrac{3}{x}+\dfrac{5}{x}$ equals $\dfrac{8}{x}$.""",
                True,
                r"""Least common denominator of $x$ and $x$ is the product $xx$:

$$\frac{\cdots}{x}+\frac{\cdots}{x}=\frac{\cdots}{xx}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $h,k,s\neq 0$, $\dfrac{3ks}{4h}\cdot\dfrac{2h^3k^2}{5}\div\dfrac{3(hk)^2}{4s}=\dfrac{2ks}{5}$.""",
                False,
                r"""The claim chains three monomial fractions in $h$, $k$, and $s$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3ks}{4h}\cdot\frac{2h^3k^2}{5}\cdot\frac{4s}{3h^2k^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 k s^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

After every cancellation the surviving power of $s$ is $s^2$, so the printed right-hand side (missing that power) fails.""",
            ),
            (
                r"""For $r,s\neq 0$ and $r\neq -s$, $\dfrac{2}{r}+\dfrac{9}{s}=\dfrac{2s+9r}{r+s}$.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$r\cdot s$$

Combine:

$$\frac{\cdots}{r}+\frac{\cdots}{s}=\frac{\cdots}{rs}$$""",
            ),
            (
                r"""Clearing $\dfrac{1}{3h}+\dfrac{1}{6h}$ for $h\neq 0$ equals $\dfrac{1}{2h}$.""",
                True,
                r"""Least common denominator of $3h$ and $6h$ is the product $3h6h$:

$$\frac{\cdots}{3h}+\frac{\cdots}{6h}=\frac{\cdots}{3h6h}$$

Adding numerators over added denominators is not an identity.""",
            ),
        ],
        overview=r"Common denominators are products of the distinct denominator factors. Adding numerators over added denominators, or using a sum of coefficients as an LCD, both fail; equal denominators really do add in the numerators.",
    ),
    task(
        title="A letter struck from only one term",
        subsection="2.2",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For $a,b\neq 0$ and $a\neq -b$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{b+a}{a+b}$.""",
                False,
                r"""The numerator of the claimed sum has the right cross-multiply form, but the denominator is $a+b$ instead of $ab$. Clear with the product denominator first.

Correct combination:

$$\frac{1}{a}+\frac{1}{b}=\frac{1b+1a}{ab}$$

Only $ab$ is the common denominator for unrelated linear factors.

The printed denominator $a+b$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{7x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{3}{x-1}-\dfrac{1}{1-x}=\dfrac{7}{x-1}$.""",
                False,
                r"""Least common denominator of $x^2-1$ and $1+x$ is the product $x^2-11+x$:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{1+x}=\frac{\cdots}{x^2-11+x}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $1$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{1}{2}$ over $x-1$ and $\dfrac{1}{2}$ over $x+1$.""",
                True,
                r"""The words describe a partial-fraction split of $\dfrac{1}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{1}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$\dfrac{1}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{1}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator.""",
            ),
            (
                r"""For $q\neq 0$, $\dfrac{4(2q)}{(-2q)^2}=\dfrac{2}{q}$.""",
                True,
                r"""Least common denominator of $(-2q)^2$ and $q$ is their product, not their sum $(-2q)^2+q$.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{x+3}{x^2-1}-\dfrac{1}{x+1}=\dfrac{2}{x-1}$.""",
                True,
                r"""Least common denominator of $x^2-1$ and $x+1$ is the product $x^2-1x+1$:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{x+1}=\frac{\cdots}{x^2-1x+1}$$

Adding numerators over added denominators is not an identity.""",
            ),
        ],
        overview=r"A letter may be cancelled only when it is a factor of every term. Splitting a sum over a shared denominator is legal; keeping a cancelled linear factor as the remainder is not.",
    ),
    task(
        title="Nested unit fraction with a swapped report",
        subsection="2.2",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For $r,s\neq 0$, $\dfrac{1}{r}+\dfrac{1}{s}=\dfrac{1}{r+s}$ (variant 1).""",
                False,
                r"""Least common denominator of $r$ and $s$ is the product $rs$:

$$\frac{\cdots}{r}+\frac{\cdots}{s}=\frac{\cdots}{rs}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Collapsing $\dfrac{1}{1+\dfrac{1}{z}}$ for $z\neq 0,-1$ equals $\dfrac{z}{z+1}$.""",
                True,
                r"""Least common denominator of $z$ and $z+1$ is the product $zz+1$:

$$\frac{\cdots}{z}+\frac{\cdots}{z+1}=\frac{\cdots}{zz+1}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Someone rewrites $\dfrac{1}{1-\dfrac{1}{t}}$ for $t\neq 0,1$ as $\dfrac{t}{t+1}$.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$t\cdot t+1$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{t+1}=\frac{\cdots}{tt+1}$$""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $8$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $4$ over $x-1$ and $4$ over $x+1$.""",
                True,
                r"""The words describe a partial-fraction split of $\dfrac{8}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{8}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$4\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{8}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator.""",
            ),
            (
                r"""For $f,g,h\neq 0$, $\dfrac{3gh}{4f}\cdot\dfrac{2f^3g^2}{5}\div\dfrac{3(fg)^2}{4h}=\dfrac{2gh^2}{5}$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$4f\cdot 5$$

Combine:

$$\frac{\cdots}{4f}+\frac{\cdots}{5}=\frac{\cdots}{4f5}$$""",
            ),
        ],
        overview=r"""A continued unit fraction is cleared from the inside. Plus and minus nests produce $z/(z+1)$ and $t/(t-1)$ respectively; swapping a cleared nest with its reciprocal, or dropping a binomial cross term, both fail.""",
    ),
    task(
        title="Test point after a difference-of-squares cancel",
        subsection="2.2",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For $x\neq\pm 2$, $\dfrac{1}{x-2}-\dfrac{1}{x+2}=\dfrac{4}{x^2-4}$.""",
                True,
                r"""Least common denominator of $x-2$ and $x+2$ is the product $x-2x+2$:

$$\frac{\cdots}{x-2}+\frac{\cdots}{x+2}=\frac{\cdots}{x-2x+2}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $h,s,k\neq 0$, $\dfrac{3sk}{4h}\cdot\dfrac{2h^3s^2}{5}\div\dfrac{3(hs)^2}{4k}=\dfrac{2sk}{5}$.""",
                False,
                r"""The claim chains three monomial fractions in $h$, $s$, and $k$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3sk}{4h}\cdot\frac{2h^3s^2}{5}\cdot\frac{4k}{3h^2s^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 k^{2} s}{5}$$

Track every letter exponent through the product before reading off the monomial.

After every cancellation the surviving power of $k$ is $k^2$, so the printed right-hand side (missing that power) fails.""",
            ),
            (
                r"""For $p,q\neq 0$, $\dfrac{4}{p}+\dfrac{5}{q}=\dfrac{4q+5p}{pq}$.""",
                True,
                r"""Least common denominator of $p$ and $q$ is the product $pq$:

$$\frac{\cdots}{p}+\frac{\cdots}{q}=\frac{\cdots}{pq}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8p^2b}{4x^2-16}}{\dfrac{4pb}{2x+4}}$ simplifies to $\dfrac{p}{x-2}$ for $x\neq\pm 2$ and $p,b\neq 0$.""",
                True,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8p^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4pb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{p}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $6$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $6$ over $x-1$ and $6$ over $x+1$.""",
                False,
                r"""Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
        ],
        overview=r"""A cancelled linear factor is not the remainder. Difference of cubes produces $k^2+3k+9$; flipping the middle sign, or equating a cancelled remainder to an unrelated plus-denominator fraction, both fail.""",
    ),
    task(
        title="Binomial square missing the doubled cross term",
        subsection="2.2",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For $x\neq\pm 1$, $\dfrac{4x-2}{x^2-1}-\dfrac{3}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{4}{x-1}$.""",
                True,
                r"""Least common denominator of $x^2-1$ and $1+x$ is their product, not their sum $x^2-1+1+x$.""",
            ),
            (
                r"""Expanding $\bigl(1-\dfrac{1}{u}\bigr)^2$ on $u\neq 0$ equals $1-\dfrac{2}{u}+\dfrac{1}{u^2}$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$u\cdot u$$

Combine:

$$\frac{\cdots}{u}+\frac{\cdots}{u}=\frac{\cdots}{uu}$$""",
            ),
            (
                r"""Provided $v\neq 0$, rewriting $\bigl(v+\dfrac{1}{v}\bigr)^2$ as $v^2+\dfrac{1}{v^2}$.""",
                False,
                r"""Least common denominator of $v$ and $v^2$ is the product $vv^2$:

$$\frac{\cdots}{v}+\frac{\cdots}{v^2}=\frac{\cdots}{vv^2}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""After cancelling a factor of $\dfrac{5y^2-45}{y-3}$ for $y\neq 3$, the remainder $5y-15$ is recorded.""",
                False,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{5y^2-45}{y-3}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""For $q\neq 0$, $\dfrac{4(6q)}{(-6q)^2}=\dfrac{4}{6q}$.""",
                True,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-6q)^2$.

Square the denominator:

$$(-6q)^2=36q^2$$

The denominator becomes a positive power of $q$.

Reduce the quotient:

$$\frac{2}{3 q}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.""",
            ),
        ],
        overview=r"""A binomial square always produces a doubled cross term. The combination $h/k+k/h-2$ is a genuine square in the numerator; keeping a cancelled factor $y-3$ as the remainder is not.""",
    ),
    task(
        title="Twice a reciprocal without an arithmetic mean",
        subsection="2.2",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""Let $x$ be a nonzero real number. Twice the reciprocal of the sum of $x$ and the reciprocal of $x$ equals $x$ divided by the sum of the square of $x$ and one.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
            (
                r"""For $p,q\neq 0$, $\dfrac{1}{p}+\dfrac{1}{q}=\dfrac{1}{p+q}$ (variant 1).""",
                False,
                r"""Least common denominator of $p$ and $q$ is the product $pq$:

$$\frac{\cdots}{p}+\frac{\cdots}{q}=\frac{\cdots}{pq}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $2$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $2$ over $x-1$ and $2$ over $x+1$.""",
                False,
                r"""The verbal decomposition puts the full numerator $2$ on each partial fraction. Clear that difference and compare with $\dfrac{2}{x^2-1}$.

Combine the printed partials:

$$\frac{2}{x-1}-\frac{2}{x+1}=\frac{22}{x^2-1}$$

The common denominator $(x-1)(x+1)$ doubles the intended numerator.

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.""",
            ),
            (
                r"""For $m,t,n\neq 0$, $\dfrac{3tn}{4m}\cdot\dfrac{2m^3t^2}{5}\div\dfrac{3(mt)^2}{4n}=\dfrac{2tn^2}{5}$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$4m\cdot 5$$

Combine:

$$\frac{\cdots}{4m}+\frac{\cdots}{5}=\frac{\cdots}{4m5}$$""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{8x-4}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{8}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{8x-4}{x^2-1}-\frac{2}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{9 x + 1}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{9 x + 1}{x^{2} - 1}$, not $\dfrac{8}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
        ],
        overview=r"""Twice the reciprocal of a sum of unit fractions is $2hk/(h+k)$, which is not the arithmetic mean $(h+k)/2$. Striking a letter from only one term of a numerator still fails.""",
    ),
    task(
        title="Cubic remainder checked at a vanishing test point",
        subsection="2.2",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For $p,q,r\neq 0$, $\dfrac{3qr}{4p}\cdot\dfrac{2p^3q^2}{5}\div\dfrac{3(pq)^2}{4r}=\dfrac{2qr^2}{5}$.""",
                True,
                r"""The claim chains three monomial fractions in $p$, $q$, and $r$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3qr}{4p}\cdot\frac{2p^3q^2}{5}\cdot\frac{4r}{3p^2q^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 q r^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial.""",
            ),
            (
                r"""For $m,n\neq 0$, $\dfrac{5}{m}+\dfrac{2}{n}=\dfrac{5n+2m}{mn}$.""",
                True,
                r"""Least common denominator of $m$ and $n$ is the product $mn$:

$$\frac{\cdots}{m}+\frac{\cdots}{n}=\frac{\cdots}{mn}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $f\neq 4$, $\dfrac{f^2-16}{f-4}=f+4$.""",
                True,
                r"""Least common denominator of $t$ and $u$ is the product $tu$:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Rewriting $\dfrac{h}{k}+\dfrac{k}{h}$ on $hk\neq 0$ as $\dfrac{(h+k)^2}{hk}$.""",
                False,
                r"""Clear to the common denominator $hk$:

Combine:

$$\frac{h}{k}+\frac{k}{h}=\frac{h^2+k^2}{hk}$$

Compare:

$$\frac{(h+k)^2}{hk}=\frac{h^2+2hk+k^2}{hk}$$

The squared-sum numerator carries an extra $2hk$.""",
            ),
            (
                r"""Whenever $z\neq 6$, cancelling in $\dfrac{z^2-36}{z-6}$ is treated as leaving $z-6$.""",
                False,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{z^2-36}{z-6}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
        ],
        overview=r"""A cubic-over-linear difference of cubes cancels to a quadratic whose value at $0$ matches the original fraction. An LCD is still a product; a cancelled linear factor is still not the remainder.""",
    ),
    task(
        title="Difference of reciprocals over reciprocal squares",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $5$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $5$ over $x-1$ and $5$ over $x+1$.""",
                False,
                r"""The verbal decomposition puts the full numerator $5$ on each partial fraction. Clear that difference and compare with $\dfrac{5}{x^2-1}$.

Combine the printed partials:

$$\frac{5}{x-1}-\frac{5}{x+1}=\frac{25}{x^2-1}$$

The common denominator $(x-1)(x+1)$ doubles the intended numerator.

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.""",
            ),
            (
                r"""For $s\neq 0$, $\dfrac{4(8s)}{(-8s)^2}=\dfrac{4}{8s}$.""",
                True,
                r"""Least common denominator of $(-8s)^2$ and $8s$ is their product, not their sum $(-8s)^2+8s$.""",
            ),
            (
                r"""Provided $x\neq 0$, the difference $\dfrac{1}{x^2}-\dfrac{1}{(x+1)^2}$ equals $\dfrac{2x+1}{x^2(x+1)^2}$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$x^2\cdot (x+1)^2$$

Combine:

$$\frac{\cdots}{x^2}+\frac{\cdots}{(x+1)^2}=\frac{\cdots}{x^2(x+1)^2}$$""",
            ),
            (
                r"""For $r\neq 0$, $\dfrac{4(9r)}{(-9r)^2}=\dfrac{4}{9r}$.""",
                True,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-9r)^2$.

Square the denominator:

$$(-9r)^2=81r^2$$

The denominator becomes a positive power of $r$.

Reduce the quotient:

$$\frac{4}{9 r}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.""",
            ),
            (
                r"""Let $u$ be a nonzero real number. Twice the reciprocal of the sum of $u$ and the reciprocal of $u$ equals twice $u$ divided by the sum of the square of $u$ and one.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
        ],
        overview=r"""A difference of unit fractions over a difference of reciprocal squares cancels to $tu/(t+u)$. A sign slip on $w-v$, or claiming that a cancelled remainder disagrees with the original at a legal test point, both fail.""",
    ),
    task(
        title="Compound fraction whose simplified ratio is flipped",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $r\neq 5$, $\dfrac{r^2-25}{r-5}=r+5$.""",
                True,
                r"""Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $7$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $7$ over $x-1$ and $7$ over $x+1$.""",
                False,
                r"""The verbal decomposition puts the full numerator $7$ on each partial fraction. Clear that difference and compare with $\dfrac{7}{x^2-1}$.

Combine the printed partials:

$$\frac{7}{x-1}-\frac{7}{x+1}=\frac{27}{x^2-1}$$

The common denominator $(x-1)(x+1)$ doubles the intended numerator.

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.""",
            ),
            (
                r"""For $u,v,w\neq 0$, $\dfrac{3vw}{4u}\cdot\dfrac{2u^3v^2}{5}\div\dfrac{3(uv)^2}{4w}=\dfrac{2vw}{5}$.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$4u\cdot 5$$

Combine:

$$\frac{\cdots}{4u}+\frac{\cdots}{5}=\frac{\cdots}{4u5}$$""",
            ),
            (
                r"""Whenever $v\neq \pm 3$, someone writes $\dfrac{v+3}{v-3}-\dfrac{v-3}{v+3}=\dfrac{6v}{v^2-9}$.""",
                False,
                r"""Least common denominator of $v-3$ and $v+3$ is the product $v-3v+3$:

$$\frac{\cdots}{v-3}+\frac{\cdots}{v+3}=\frac{\cdots}{v-3v+3}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Collapsing $\dfrac{1}{1-\dfrac{1}{w}}$ for $w\neq 0,1$ equals $\dfrac{w}{w-1}$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$w\cdot w-1$$

Combine:

$$\frac{\cdots}{w}+\frac{\cdots}{w-1}=\frac{\cdots}{ww-1}$$""",
            ),
        ],
        overview=r"""A compound fraction is two ordinary layers: collapse each, then multiply by the reciprocal of the lower layer. A ratio minus its reciprocal over $v^2-9$ produces $12v$, not $6v$.""",
    ),
    task(
        title="Three poles sharing a product LCD",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $x,y\neq 0$ and $x\neq -y$, $\dfrac{2}{x}+\dfrac{3}{y}=\dfrac{2y+3x}{x+y}$.""",
                False,
                r"""Least common denominator of $x$ and $y$ is the product $xy$:

$$\frac{\cdots}{x}+\frac{\cdots}{y}=\frac{\cdots}{xy}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8m^2b}{4x^2-16}}{\dfrac{4mb}{2x+4}}$ simplifies to $\dfrac{m}{x+2}$ for $x\neq\pm 2$ and $m,b\neq 0$.""",
                False,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8m^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4mb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{m}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $5$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{5}{2}$ over $x-1$ and $\dfrac{5}{2}$ over $x+1$.""",
                True,
                r"""Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$2\cdot 2$$

Combine:

$$\frac{\cdots}{2}+\frac{\cdots}{2}=\frac{\cdots}{22}$$""",
            ),
            (
                r"""After factoring $\dfrac{v-3}{v^2-8v+15}$ for $v\neq 3,5$, a reduction to $\dfrac{1}{v-5}$ is recorded.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{v-3}{v^2-8v+15}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $2$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $1$ over $x-1$ and $1$ over $x+1$.""",
                True,
                r"""The words describe a partial-fraction split of $\dfrac{2}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{2}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$1\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{2}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator.""",
            ),
        ],
        overview=r"The LCD of three distinct linear denominators is their product; expanding produces a quadratic whose constant term is easy to drop. Cancelling one linear factor from a quadratic ratio leaves the other factor, not the cancelled one.",
    ),
    task(
        title="Continued nest that lands on a linear remainder",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Clearing the nest $\dfrac{1}{1-\dfrac{1}{1-\dfrac{1}{x}}}$ for $x\neq 0,1$ equals $1-x$.""",
                True,
                r"""Least common denominator of $t$ and $u$ is the product $tu$:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $c,d\neq 0$, $\dfrac{2}{c}+\dfrac{4}{d}=\dfrac{2d+4c}{cd}$.""",
                True,
                r"""Least common denominator of $c$ and $d$ is the product $cd$:

$$\frac{\cdots}{c}+\frac{\cdots}{d}=\frac{\cdots}{cd}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $s\neq 0$, $\dfrac{4(4s)}{(-4s)^2}=-\dfrac{4}{4s}$.""",
                False,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-4s)^2$.

Square the denominator:

$$(-4s)^2=16s^2$$

The denominator becomes a positive power of $s$.

Reduce the quotient:

$$\frac{1}{s}$$

Cancel the common power of the variable against the numerator.

A minus sign on the right-hand side cannot survive: the squared factor is positive.""",
            ),
            (
                r"""Let $w$ be a nonzero real quantity. Twice the reciprocal of the sum of $w$ and the reciprocal of $w$ equals $w$ divided by the sum of the square of $w$ and one.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
            (
                r"""For $t,w\neq 0$, $\dfrac{1}{t}+\dfrac{1}{w}=\dfrac{1}{t+w}$.""",
                False,
                r"""Least common denominator of $t$ and $w$ is their product, not their sum $t+w$.""",
            ),
        ],
        overview=r"""A three-layer minus nest of unit fractions simplifies to $1-x$; the matching plus nest simplifies to $(u+1)/(2u+1)$. Dropping the $2$ when squaring $h+1/h$, or keeping a cancelled factor as the remainder, both fail.""",
    ),
    task(
        title="Stacked negative powers missing a leftover factor",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $3$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{3}{2}$ over $x-1$ and $\dfrac{3}{2}$ over $x+1$.""",
                True,
                r"""The words describe a partial-fraction split of $\dfrac{3}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{3}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$\dfrac{3}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{3}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator.""",
            ),
            (
                r"""For $a,c,b\neq 0$, $\dfrac{3cb}{4a}\cdot\dfrac{2a^3c^2}{5}\div\dfrac{3(ac)^2}{4b}=\dfrac{2cb}{5}$.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$4a\cdot 5$$

Combine:

$$\frac{\cdots}{4a}+\frac{\cdots}{5}=\frac{\cdots}{4a5}$$""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{2x-2}{x^2-1}-\dfrac{1}{1+x}+\dfrac{1}{x-1}-\dfrac{1}{1-x}=\dfrac{2}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{2x-2}{x^2-1}-\frac{1}{x+1}+\frac{1}{x-1}+\frac{1}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{3 x + 1}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{3 x + 1}{x^{2} - 1}$, not $\dfrac{2}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8x^2b}{4x^2-16}}{\dfrac{4xb}{2x+4}}$ simplifies to $\dfrac{x}{x-2}$ for $x\neq\pm 2$ and $x,b\neq 0$.""",
                True,
                r"""Least common denominator of $4x^2-16$ and $2x+4$ is the product $4x^2-162x+4$:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Combining $\dfrac{h}{k}-\dfrac{k}{h}$ on $hk\neq 0$ is rewritten as $\dfrac{(h-k)^2}{hk}$.""",
                False,
                r"""Use $(h-k)^2=(h+k)^2-4hk$ with the printed symmetric data.

$$(h-k)^2=(h+k)^2-4hk$$""",
            ),
        ],
        overview=r"""A stack of negative powers is two ordinary fractions. Multiply by the reciprocal of the lower layer; dropping a leftover factor $x$, or using the wrong common power, both fail. Difference of cubes still cancels to $w^2+3w+9$.""",
    ),
    task(
        title="Cancel two pieces then add a leftover ratio",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $r\neq 4$, $\dfrac{r^2-16}{r-4}=r+4$.""",
                True,
                r"""Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.""",
            ),
            (
                r"""For $c,d\neq 0$, $\dfrac{1}{c}+\dfrac{1}{d}=\dfrac{1}{c+d}$.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$c\cdot d$$

Combine:

$$\frac{\cdots}{c}+\frac{\cdots}{d}=\frac{\cdots}{cd}$$""",
            ),
            (
                r"""For $f\neq 6$, $\dfrac{f^2-36}{f-6}=f+6$.""",
                True,
                r"""Least common denominator of $t$ and $u$ is the product $tu$:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $4$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $2$ over $x-1$ and $2$ over $x+1$.""",
                True,
                r"""The words describe a partial-fraction split of $\dfrac{4}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{4}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$2\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{4}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator.""",
            ),
            (
                r"""For $t\neq 0$, $\dfrac{4(5t)}{(-5t)^2}=\dfrac{4}{5t}$.""",
                True,
                r"""Least common denominator of $(-5t)^2$ and $5t$ is the product $(-5t)^25t$:

$$\frac{\cdots}{(-5t)^2}+\frac{\cdots}{5t}=\frac{\cdots}{(-5t)^25t}$$

Adding numerators over added denominators is not an identity.""",
            ),
        ],
        overview=r"Cancel each difference of squares first, then add the leftover unit-over-linear term. A pair of quotients over the same linear denominator collapses to a constant, not to zero.",
    ),
    task(
        title="A product of reciprocal rational pieces",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Multiplying $\Bigl(\dfrac{x}{x-3}-\dfrac{x}{x+3}\Bigr)\cdot\dfrac{x^2-9}{6x}$ for $x\neq 0,\pm 3$ equals $1$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$x-3\cdot x+3$$

Combine:

$$\frac{\cdots}{x-3}+\frac{\cdots}{x+3}=\frac{\cdots}{x-3x+3}$$""",
            ),
            (
                r"""For $n\neq 0$, $\dfrac{4(7n)}{(-7n)^2}=-\dfrac{4}{7n}$.""",
                False,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-7n)^2$.

Square the denominator:

$$(-7n)^2=49n^2$$

The denominator becomes a positive power of $n$.

Reduce the quotient:

$$\frac{4}{7 n}$$

Cancel the common power of the variable against the numerator.

A minus sign on the right-hand side cannot survive: the squared factor is positive.""",
            ),
            (
                r"""Let $u$ be a nonzero real number. Twice the reciprocal of the sum of $u$ and the reciprocal of $u$ equals $u$ divided by the sum of the square of $u$ and one.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
            (
                r"""For $m,n\neq 0$ and $m\neq -n$, $\dfrac{5}{m}+\dfrac{2}{n}=\dfrac{5n+2m}{m+n}$.""",
                False,
                r"""The numerator of the claimed sum has the right cross-multiply form, but the denominator is $m+n$ instead of $mn$. Clear with the product denominator first.

Correct combination:

$$\frac{5}{m}+\frac{2}{n}=\frac{5n+2m}{mn}$$

Only $mn$ is the common denominator for unrelated linear factors.

The printed denominator $m+n$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{2x-2}{x^2-1}-\dfrac{1}{1+x}+\dfrac{1}{x-1}-\dfrac{1}{1-x}=\dfrac{3}{x-1}$.""",
                False,
                r"""Least common denominator of $x^2-1$ and $1+x$ is the product $x^2-11+x$:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{1+x}=\frac{\cdots}{x^2-11+x}$$

Adding numerators over added denominators is not an identity.""",
            ),
        ],
        overview=r"""The difference $x/(x-3)-x/(x+3)$ simplifies to $6x/(x^2-9)$, which is reciprocal to $(x^2-9)/(6x)$. Adding a ratio to its reciprocal produces $2(u^2+25)/(u^2-25)$, not a linear numerator.""",
    ),
    task(
        title="Constant from a difference of expanded squares",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $x,y,z\neq 0$, $\dfrac{3yz}{4x}\cdot\dfrac{2x^3y^2}{5}\div\dfrac{3(xy)^2}{4z}=\dfrac{2yz^2}{5}$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$4x\cdot 5$$

Combine:

$$\frac{\cdots}{4x}+\frac{\cdots}{5}=\frac{\cdots}{4x5}$$""",
            ),
            (
                r"""On $hk\neq 0$ and $h\neq k$, someone writes $\dfrac{h}{h-k}+\dfrac{k}{k-h}=0$.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$h-k\cdot k-h$$

Combine:

$$\frac{\cdots}{h-k}+\frac{\cdots}{k-h}=\frac{\cdots}{h-kk-h}$$""",
            ),
            (
                r"""Provided $v\neq 0$, the halved form $\dfrac{(v+5)^2-(v-5)^2}{2v}$ equals $10$.""",
                True,
                r"""Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.""",
            ),
            (
                r"""Whenever $w\neq z$, rewriting $\dfrac{w}{w-z}-\dfrac{z}{w-z}$ as $1$.""",
                True,
                r"""Least common denominator of $w-z$ and $w-z$ is the product $w-zw-z$:

$$\frac{\cdots}{w-z}+\frac{\cdots}{w-z}=\frac{\cdots}{w-zw-z}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8m^2b}{4x^2-16}}{\dfrac{4mb}{2x+4}}$ simplifies to $\dfrac{m}{x-2}$ for $x\neq\pm 2$ and $m,b\neq 0$.""",
                True,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8m^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4mb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{m}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
        ],
        overview=r"""The difference of two expanded squares is a constant times the letter, so the quotient by that letter is constant. Opposite linear denominators $h-k$ and $k-h$ make the paired sum equal $1$, not $0$.""",
    ),
    task(
        title="Quadratic over quadratic with the wrong leftover",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $3$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $3$ over $x-1$ and $3$ over $x+1$.""",
                False,
                r"""Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
            (
                r"""For $p,q\neq 0$, $\dfrac{1}{p}+\dfrac{1}{q}=\dfrac{1}{p+q}$ (variant 3).""",
                False,
                r"""Least common denominator of $p$ and $q$ is the product $pq$:

$$\frac{\cdots}{p}+\frac{\cdots}{q}=\frac{\cdots}{pq}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{9x-3}{x^2-1}-\dfrac{1}{1+x}+\dfrac{2}{x-1}-\dfrac{2}{1-x}=\dfrac{6}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{9x-3}{x^2-1}-\frac{1}{x+1}+\frac{2}{x-1}+\frac{2}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{2 \left(6 x + 1\right)}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{2 \left(6 x + 1\right)}{x^{2} - 1}$, not $\dfrac{6}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"""For $p\neq 0$, $\dfrac{4(8p)}{(-8p)^2}=\dfrac{4}{8p}$.""",
                True,
                r"""Least common denominator of $(-8p)^2$ and $8p$ is their product, not their sum $(-8p)^2+8p$.""",
            ),
            (
                r"""For $m,n,t\neq 0$, $\dfrac{3nt}{4m}\cdot\dfrac{2m^3n^2}{5}\div\dfrac{3(mn)^2}{4t}=\dfrac{2nt^2}{5}$.""",
                True,
                r"""The claim chains three monomial fractions in $m$, $n$, and $t$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3nt}{4m}\cdot\frac{2m^3n^2}{5}\cdot\frac{4t}{3m^2n^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 n t^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial.""",
            ),
        ],
        overview=r"""Factor both quadratics completely, cancel one shared linear factor, and keep the leftover linear ratio. Difference of cubes produces $w^2+w+1$, not $w^2-w+1$.""",
    ),
    task(
        title="Sum of squares treated as a square of a sum",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $m\neq 0$, $\dfrac{4(3m)}{(-3m)^2}=\dfrac{4}{3m}$.""",
                True,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-3m)^2$.

Square the denominator:

$$(-3m)^2=9m^2$$

The denominator becomes a positive power of $m$.

Reduce the quotient:

$$\frac{4}{3 m}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.""",
            ),
            (
                r"""Let $k$ be a nonzero real letter. Twice the reciprocal of the sum of $k$ and the reciprocal of $k$ equals twice $k$ divided by the sum of the square of $k$ and one.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
            (
                r"""For $f\neq 5$, $\dfrac{f^2-25}{f-5}=f+5$.""",
                True,
                r"""Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.""",
            ),
            (
                r"""Provided $h\neq -k$ and $h\neq k$, the quotient $\dfrac{h^2-k^2}{(h+k)^2}$ equals $\dfrac{h+k}{h-k}$.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$(h+k)^2\cdot h-k$$

Combine:

$$\frac{\cdots}{(h+k)^2}+\frac{\cdots}{h-k}=\frac{\cdots}{(h+k)^2h-k}$$""",
            ),
            (
                r"""On $z\neq -5$, someone writes $\dfrac{z^2+25}{z+5}=z+5$.""",
                False,
                r"""Least common denominator of $t$ and $u$ is the product $tu$:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Adding numerators over added denominators is not an identity.""",
            ),
        ],
        overview=r"""Only a genuine expanded square $(t\pm 3)^2$ cancels to $t\pm 3$. A sum of squares leaves a leftover cross-term correction $-2xy/(x+y)$.""",
    ),
    task(
        title="Swapped two-letter ratios in a stacked quotient",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $x\neq\pm 1$, $\dfrac{6x-4}{x^2-1}-\dfrac{1}{1+x}+\dfrac{2}{x-1}-\dfrac{1}{1-x}=\dfrac{-4}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{6x-4}{x^2-1}-\frac{1}{x+1}+\frac{2}{x-1}+\frac{1}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{8 x}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{8 x}{x^{2} - 1}$, not $\dfrac{-4}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8u^2b}{4x^2-16}}{\dfrac{4ub}{2x+4}}$ simplifies to $\dfrac{u}{x+2}$ for $x\neq\pm 2$ and $u,b\neq 0$.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$4x^2-16\cdot 2x+4$$

Combine:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$""",
            ),
            (
                r"""For $u,v\neq 0$, $\dfrac{3}{u}+\dfrac{5}{v}=\dfrac{3v+5u}{uv}$.""",
                True,
                r"""Least common denominator of $u$ and $v$ is the product $uv$:

$$\frac{\cdots}{u}+\frac{\cdots}{v}=\frac{\cdots}{uv}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8h^2b}{4x^2-16}}{\dfrac{4hb}{2x+4}}$ simplifies to $\dfrac{h}{x+2}$ for $x\neq\pm 2$ and $h,b\neq 0$.""",
                False,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8h^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4hb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{h}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $6$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $3$ over $x-1$ and $3$ over $x+1$.""",
                True,
                r"""Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
        ],
        overview=r"""Dividing $h/k-k/h$ by $h/k+k/h$ cancels the shared $hk$ and leaves $(h^2-k^2)/(h^2+k^2)$. Reciprocating that result, or swapping which letter sits with which coefficient, both fail.""",
    ),
    task(
        title="Squared minus sign in a monomial denominator",
        subsection="2.2",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $r\neq 6$, $\dfrac{r^2-36}{r-6}=r+6$.""",
                True,
                r"""Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{3x-3}{x^2-1}-\dfrac{4}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{1}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{3x-3}{x^2-1}-\frac{4}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{2 \left(x + 2\right)}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{2 \left(x + 2\right)}{x^{2} - 1}$, not $\dfrac{1}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"""For $q\neq 0$, $\dfrac{4(3q)}{(-3q)^2}=-\dfrac{4}{3q}$.""",
                False,
                r"""Least common denominator of $(-3q)^2$ and $3q$ is the product $(-3q)^23q$:

$$\frac{\cdots}{(-3q)^2}+\frac{\cdots}{3q}=\frac{\cdots}{(-3q)^23q}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $h,k\neq 0$, $\dfrac{2}{h}+\dfrac{6}{k}=\dfrac{2k+6h}{hk}$.""",
                True,
                r"""Least common denominator of $h$ and $k$ is the product $hk$:

$$\frac{\cdots}{h}+\frac{\cdots}{k}=\frac{\cdots}{hk}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Combining $\dfrac{h}{k}+\dfrac{k}{h}-2$ on $hk\neq 0$ as $\dfrac{(h+k)^2}{hk}$.""",
                False,
                r"""Clear to the common denominator $hk$:

Combine:

$$\frac{h}{k}+\frac{k}{h}=\frac{h^2+k^2}{hk}$$

Compare:

$$\frac{(h+k)^2}{hk}=\frac{h^2+2hk+k^2}{hk}$$

The squared-sum numerator carries an extra $2hk$.""",
            ),
        ],
        overview=r"""Squaring a negative monomial removes the minus sign. Coefficients in the numerator must be counted exactly. The combination $h/k+k/h-2$ is $(h-k)^2/hk$, not $(h+k)^2/hk$.""",
    ),
    task(
        title="Harmonic-looking product over a two-letter sum",
        subsection="2.2",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Let $w$ be a nonzero real quantity. Twice the reciprocal of the sum of $w$ and the reciprocal of $w$ equals twice $w$ divided by the sum of the square of $w$ and one.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
            (
                r"""For $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{b+a}{ab}$.""",
                True,
                r"""The claim adds two simple fractions in $a$ and $b$. The least common denominator is the product $ab$, not their sum.

Clear to one fraction:

$$\frac{1}{a}+\frac{1}{b}=\frac{b+a}{ab}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{3x-3}{x^2-1}-\dfrac{4}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{5}{x-1}$.""",
                False,
                r"""Least common denominator of $x^2-1$ and $1+x$ is their product, not their sum $x^2-1+1+x$.""",
            ),
            (
                r"""Clearing the three-layer plus nest $1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{k}}}$ for $k\neq 0,-1,-\dfrac{1}{2}$ equals $\dfrac{3k+2}{2k+1}$.""",
                True,
                r"""Innermost, $1+\dfrac{1}{x}=\dfrac{x+1}{x}$. Its reciprocal is $\dfrac{x}{x+1}$, and adding $1$ gives

$$1+\frac{x}{x+1}=\frac{2x+1}{x+1}$$""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{8x-4}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{4}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{8x-4}{x^2-1}-\frac{2}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{9 x + 1}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{9 x + 1}{x^{2} - 1}$, not $\dfrac{4}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
        ],
        overview=r"""Twice the reciprocal of a sum of unit fractions is $2tu/(t+u)$, not the arithmetic mean. A three-layer plus nest of unit fractions simplifies to $(3k+2)/(2k+1)$. Sum of cubes still cancels to $v^2-3v+9$.""",
    ),
    task(
        title="Three unit fractions with a false linear numerator",
        subsection="2.2",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $r,s\neq 0$, $\dfrac{2}{r}+\dfrac{3}{s}=\dfrac{2s+3r}{rs}$.""",
                True,
                r"""Least common denominator of $r$ and $s$ is their product, not their sum $r+s$.""",
            ),
            (
                r"""A script writes $\dfrac{1}{u}+\dfrac{1}{v}+\dfrac{1}{w}=\dfrac{u+v+w}{uvw}$ whenever $uvw\neq 0$.""",
                False,
                r"""Least common denominator of $u$ and $v$ is the product $uv$:

$$\frac{\cdots}{u}+\frac{\cdots}{v}=\frac{\cdots}{uv}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8x^2b}{4x^2-16}}{\dfrac{4xb}{2x+4}}$ simplifies to $\dfrac{x}{x+2}$ for $x\neq\pm 2$ and $x,b\neq 0$.""",
                False,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8x^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4xb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{x}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $7$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{7}{2}$ over $x-1$ and $\dfrac{7}{2}$ over $x+1$.""",
                True,
                r"""Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$2\cdot 2$$

Combine:

$$\frac{\cdots}{2}+\frac{\cdots}{2}=\frac{\cdots}{22}$$""",
            ),
            (
                r"""On $h\neq \pm k$, someone writes $\dfrac{3h-3k}{h^2-k^2}=\dfrac{3}{h-k}$.""",
                False,
                r"""Least common denominator of $h^2-k^2$ and $h-k$ is the product $h^2-k^2h-k$:

$$\frac{\cdots}{h^2-k^2}+\frac{\cdots}{h-k}=\frac{\cdots}{h^2-k^2h-k}$$

Adding numerators over added denominators is not an identity.""",
            ),
        ],
        overview=r"""Three unit fractions combine over $hkt$ with numerator $kt+ht+hk$. Replacing that numerator by $h+k+t$ is the usual error. A two-letter difference over a difference of squares cancels to $3/(h+k)$.""",
    ),
    task(
        title="Cancelled linear factor kept in the denominator",
        subsection="2.2",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $x\neq\pm 1$, $\dfrac{5x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{3}{1-x}=\dfrac{3}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{3}{1-x}=\frac{3}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{5x-1}{x^2-1}-\frac{2}{x+1}+\frac{1}{x-1}+\frac{3}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{7 x + 5}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{7 x + 5}{x^{2} - 1}$, not $\dfrac{3}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"""For $r\neq 0$, $\dfrac{4(6r)}{(-6r)^2}=-\dfrac{4}{6r}$.""",
                False,
                r"""Least common denominator of $(-6r)^2$ and $6r$ is their product, not their sum $(-6r)^2+6r$.""",
            ),
            (
                r"""For $x,z,y\neq 0$, $\dfrac{3zy}{4x}\cdot\dfrac{2x^3z^2}{5}\div\dfrac{3(xz)^2}{4y}=\dfrac{2zy^2}{5}$.""",
                True,
                r"""The claim chains three monomial fractions in $x$, $z$, and $y$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3zy}{4x}\cdot\frac{2x^3z^2}{5}\cdot\frac{4y}{3x^2z^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 y^{2} z}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial.""",
            ),
            (
                r"""For $p,q\neq 0$ and $p\neq -q$, $\dfrac{4}{p}+\dfrac{5}{q}=\dfrac{4q+5p}{p+q}$.""",
                False,
                r"""Least common denominator of $p$ and $q$ is the product $pq$:

$$\frac{\cdots}{p}+\frac{\cdots}{q}=\frac{\cdots}{pq}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""With $w\neq \pm 3$, someone writes $\dfrac{w^2+w-6}{w^2-9}=\dfrac{w+2}{w-3}$.""",
                False,
                r"""Least common denominator of $w^2-9$ and $w-3$ is the product $w^2-9w-3$:

$$\frac{\cdots}{w^2-9}+\frac{\cdots}{w-3}=\frac{\cdots}{w^2-9w-3}$$

Adding numerators over added denominators is not an identity.""",
            ),
        ],
        overview=r"""Factor $x^2-8x+15=(x-5)(x-3)$ and cancel $x-5$ to leave $1/(x-3)$. Keeping the cancelled factor, or swapping a constant in a nearby quadratic ratio, both fail.""",
    ),
    task(
        title="Opposite linear factors that differ by a minus",
        subsection="2.2",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Adding $\dfrac{1}{h(h-k)}+\dfrac{1}{k(k-h)}$ for $hk\neq 0$ and $h\neq k$ equals $-\dfrac{1}{hk}$.""",
                True,
                r"""Least common denominator of $h(h-k)$ and $k(k-h)$ is the product $h(h-k)k(k-h)$:

$$\frac{\cdots}{h(h-k)}+\frac{\cdots}{k(k-h)}=\frac{\cdots}{h(h-k)k(k-h)}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $c,d\neq 0$, $\dfrac{1}{c}+\dfrac{1}{d}=\dfrac{1}{c+d}$ (variant 1).""",
                False,
                r"""Least common denominator of $c$ and $d$ is their product, not their sum $c+d$.""",
            ),
            (
                r"""Bare opposite unit fractions $\dfrac{1}{v-w}+\dfrac{1}{w-v}$ are claimed to vanish for every $v\neq w$.""",
                True,
                r"""Least common denominator of $v-w$ and $w-v$ is the product $v-ww-v$:

$$\frac{\cdots}{v-w}+\frac{\cdots}{w-v}=\frac{\cdots}{v-ww-v}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{4x-2}{x^2-1}-\dfrac{3}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{2}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{4x-2}{x^2-1}-\frac{3}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{4}{x - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{4}{x - 1}$, not $\dfrac{2}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8u^2b}{4x^2-16}}{\dfrac{4ub}{2x+4}}$ simplifies to $\dfrac{u}{x-2}$ for $x\neq\pm 2$ and $u,b\neq 0$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$4x^2-16\cdot 2x+4$$

Combine:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$""",
            ),
        ],
        overview=r"""The identity $k-h=-(h-k)$ turns $\frac{1}{h(h-k)}+\frac{1}{k(k-h)}$ into $-1/(hk)$, not $+1/(hk)$. Bare opposite unit fractions cancel to $0$; so do opposite copies of $tu/(t-u)$.""",
    ),
    task(
        title="Cubic LCD of three neighbouring linears",
        subsection="2.2",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $a,b\neq 0$, $\dfrac{3}{a}+\dfrac{3}{b}=\dfrac{3b+3a}{ab}$.""",
                True,
                r"""Least common denominator of $a$ and $b$ is their product, not their sum $a+b$.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8h^2b}{4x^2-16}}{\dfrac{4hb}{2x+4}}$ simplifies to $\dfrac{h}{x-2}$ for $x\neq\pm 2$ and $h,b\neq 0$.""",
                True,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8h^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4hb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{h}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $4$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $4$ over $x-1$ and $4$ over $x+1$.""",
                False,
                r"""Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{6x-4}{x^2-1}-\dfrac{1}{1+x}+\dfrac{2}{x-1}-\dfrac{1}{1-x}=\dfrac{4}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{6x-4}{x^2-1}-\frac{1}{x+1}+\frac{2}{x-1}+\frac{1}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{8 x}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{8 x}{x^{2} - 1}$, not $\dfrac{4}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"""For $u,w,v\neq 0$, $\dfrac{3wv}{4u}\cdot\dfrac{2u^3w^2}{5}\div\dfrac{3(uw)^2}{4v}=\dfrac{2wv}{5}$.""",
                False,
                r"""Least common denominator of $4u$ and $5$ is the product $4u5$:

$$\frac{\cdots}{4u}+\frac{\cdots}{5}=\frac{\cdots}{4u5}$$

Adding numerators over added denominators is not an identity.""",
            ),
        ],
        overview=r"""The LCD of three distinct linear denominators is their product. Subtracting reciprocal quadratics keeps both quadratic factors. A difference of reciprocal squares over $(z\pm 1)^2$ produces $4z/(z^2-1)^2$.""",
    ),
    task(
        title="Square of a swapped-ratio sum beside a cubic",
        subsection="2.2",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $s\neq 0$, $\dfrac{4(2s)}{(-2s)^2}=\dfrac{2}{s}$.""",
                True,
                r"""Least common denominator of $(-2s)^2$ and $s$ is their product, not their sum $(-2s)^2+s$.""",
            ),
            (
                r"""For $c,d\neq 0$, $\dfrac{1}{c}+\dfrac{1}{d}=\dfrac{1}{c+d}$ (variant 2).""",
                False,
                r"""Least common denominator of $c$ and $d$ is the product $cd$:

$$\frac{\cdots}{c}+\frac{\cdots}{d}=\frac{\cdots}{cd}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""The stacked ratio $\dfrac{\dfrac{3}{x}-\dfrac{5}{y}}{\dfrac{1}{x}+\dfrac{1}{y}}$ reduces to $\dfrac{3y-5x}{x+y}$ for $xy\neq 0$ and $x\neq -y$.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{3}{x}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""Provided $t\neq u$, the cubic ratio $\dfrac{t^3-u^3}{t^2+tu+u^2}$ equals $t-u$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
            (
                r"""For $h,k\neq 0$ and $h\neq -k$, $\dfrac{6}{h}+\dfrac{1}{k}=\dfrac{6k+h}{h+k}$.""",
                False,
                r"""The numerator of the claimed sum has the right cross-multiply form, but the denominator is $h+k$ instead of $hk$. Clear with the product denominator first.

Correct combination:

$$\frac{6}{h}+\frac{1}{k}=\frac{6k+1h}{hk}$$

Only $hk$ is the common denominator for unrelated linear factors.

The printed denominator $h+k$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
        ],
        overview=r"""The square of $h/k+k/h$ is $(h^2+k^2)^2/(h^2k^2)$. Swapping the order of a difference flips the sign of $h^2-k^2$. A ratio minus its reciprocal over $v^2-9$ produces $12v/(v^2-9)$, not $6v/(v^2-9)$.""",
    ),
    task(
        title="Outer reciprocal of a two-storey $x$-nest",
        subsection="2.2",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $x\neq\pm 1$, $\dfrac{5x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{3}{1-x}=\dfrac{6}{x-1}$.""",
                False,
                r"""Least common denominator of $x^2-1$ and $1+x$ is the product $x^2-11+x$:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{1+x}=\frac{\cdots}{x^2-11+x}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""For $p\neq 7$, $\dfrac{p^2-49}{p-7}=p+7$.""",
                True,
                r"""Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.""",
            ),
            (
                r"""For $c,d,e\neq 0$, $\dfrac{3de}{4c}\cdot\dfrac{2c^3d^2}{5}\div\dfrac{3(cd)^2}{4e}=\dfrac{2de^2}{5}$.""",
                True,
                r"""The claim chains three monomial fractions in $c$, $d$, and $e$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3de}{4c}\cdot\frac{2c^3d^2}{5}\cdot\frac{4e}{3c^2d^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 d e^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8p^2b}{4x^2-16}}{\dfrac{4pb}{2x+4}}$ simplifies to $\dfrac{p}{x+2}$ for $x\neq\pm 2$ and $p,b\neq 0$.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$4x^2-16\cdot 2x+4$$

Combine:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$""",
            ),
            (
                r"""For $n\neq 0$, $\dfrac{4(6n)}{(-6n)^2}=-\dfrac{4}{6n}$.""",
                False,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-6n)^2$.

Square the denominator:

$$(-6n)^2=36n^2$$

The denominator becomes a positive power of $n$.

Reduce the quotient:

$$\frac{2}{3 n}$$

Cancel the common power of the variable against the numerator.

A minus sign on the right-hand side cannot survive: the squared factor is positive.""",
            ),
        ],
        overview=r"""A continued nest $1/(x+1/(x+1/x))$ simplifies to $(x^2+1)/(x(x^2+2))$. The stack $(1+h/k)/(1-h/k)$ is $(k+h)/(k-h)$, not the swapped ratio. An LCD remains a product.""",
    ),
    task(
        title="Quartic cancel mixed with reciprocal squares",
        subsection="2.2",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $h,k\neq 0$, $\dfrac{6}{h}+\dfrac{1}{k}=\dfrac{6k+h}{hk}$.""",
                True,
                r"""The claim adds two simple fractions in $h$ and $k$. The least common denominator is the product $hk$, not their sum.

Clear to one fraction:

$$\frac{6}{h}+\frac{1}{k}=\frac{6k+h}{hk}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $1$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $1$ over $x-1$ and $1$ over $x+1$.""",
                False,
                r"""Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$""",
            ),
            (
                r"""Subtracting $\dfrac{1}{(u-3)^2}-\dfrac{1}{(u+3)^2}$ produces $\dfrac{12u}{(u^2-9)^2}$ off $u=\pm 3$.""",
                True,
                r"""Least common denominator of $(u-3)^2$ and $(u+3)^2$ is the product $(u-3)^2(u+3)^2$:

$$\frac{\cdots}{(u-3)^2}+\frac{\cdots}{(u+3)^2}=\frac{\cdots}{(u-3)^2(u+3)^2}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""The squared-difference quotient $\dfrac{(v-w)^2}{v^2-w^2}$ reduces to $\dfrac{v-w}{v+w}$ for $v\neq\pm w$.""",
                True,
                r"""Use $(v-w)^2=(v+w)^2-4vw$ with the printed symmetric data.

$$(v-w)^2=(v+w)^2-4vw$$""",
            ),
            (
                r"""On $z\neq 5$, someone writes $\dfrac{z^2-25}{z-5}=z-5$.""",
                False,
                r"""Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.""",
            ),
        ],
        overview=r"""A cancellation $t^4-1$ over $t^2-1$ leaves $t^2+1$. A squared sum of unit fractions keeps the cross term $2/xy$. A difference of reciprocal squares over $(u\pm 3)^2$ produces $12u/(u^2-9)^2$.""",
    ),
    task(
        title="Two candidate rewritings of a compound stack",
        subsection="2.2",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $r,s,t\neq 0$, $\dfrac{3st}{4r}\cdot\dfrac{2r^3s^2}{5}\div\dfrac{3(rs)^2}{4t}=\dfrac{2st}{5}$.""",
                False,
                r"""The claim chains three monomial fractions in $r$, $s$, and $t$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3st}{4r}\cdot\frac{2r^3s^2}{5}\cdot\frac{4t}{3r^2s^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 s t^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

After every cancellation the surviving power of $t$ is $t^2$, so the printed right-hand side (missing that power) fails.""",
            ),
            (
                r"""For $c,d\neq 0$ and $c\neq -d$, $\dfrac{8}{c}+\dfrac{3}{d}=\dfrac{8d+3c}{c+d}$.""",
                False,
                r"""Least common denominator of $c$ and $d$ is the product $cd$:

$$\frac{\cdots}{c}+\frac{\cdots}{d}=\frac{\cdots}{cd}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""After cancelling $\dfrac{v^3-27}{v-3}$ for $v\neq 3$ as $v^2+3v+9$, a second rewriting $v^2-3v+9$ is treated as the same polynomial.""",
                False,
                r"""Difference of cubes leaves three terms in the quotient:

Factor:

$$\frac{j^3-1331}{j-11}=j^2+11j+121$$

At the test point:

$$j = 0 \Rightarrow 121 \text{ on both sides, but } j$$

$$= 1 \Rightarrow 133 \neq 122$$""",
            ),
            (
                r"""Let $t$ be a nonzero real number. Twice the reciprocal of the sum of $t$ and the reciprocal of $t$ equals twice $t$ divided by the sum of the square of $t$ and one.""",
                True,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $t\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{t+\frac{1}{t}}=\frac{2t}{t^2+1}$$

Twice the reciprocal of $t+\dfrac{1}{t}$ clears to a single rational expression.

Right-hand wording:

$$\frac{2t}{t^2+1}$$

The claim's right side must be read from the same verbal description.

Both translations agree, so the statement is an identity on $t\neq 0$.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{7x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{3}{x-1}-\dfrac{1}{1-x}=\dfrac{5}{x-1}$.""",
                False,
                r"""Least common denominator of $x^2-1$ and $1+x$ is the product $x^2-11+x$:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{1+x}=\frac{\cdots}{x^2-11+x}$$

Adding numerators over added denominators is not an identity.""",
            ),
        ],
        overview=r"""Two candidate simplifications of a compound fraction need not be equal: one may be the reciprocal of the other. The plus combination $h/k+k/h+2$ really is $(h+k)^2/hk$; mixing a difference-of-cubes quadratic with a sum-of-cubes quadratic is not.""",
    ),
    task(
        title="Exam mix of leftover cancellation traps",
        subsection="2.2",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $r,s\neq 0$, $\dfrac{1}{r}+\dfrac{1}{s}=\dfrac{1}{r+s}$ (variant 3).""",
                False,
                r"""Least common denominator of $r$ and $s$ is their product, not their sum $r+s$.""",
            ),
            (
                r"""For $p,r,q\neq 0$, $\dfrac{3rq}{4p}\cdot\dfrac{2p^3r^2}{5}\div\dfrac{3(pr)^2}{4q}=\dfrac{2rq^2}{5}$.""",
                True,
                r"""The claim chains three monomial fractions in $p$, $r$, and $q$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3rq}{4p}\cdot\frac{2p^3r^2}{5}\cdot\frac{4q}{3p^2r^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 q^{2} r}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8a^2b}{4x^2-16}}{\dfrac{4ab}{2x+4}}$ simplifies to $\dfrac{a}{x+2}$ for $x\neq\pm 2$ and $a,b\neq 0$.""",
                False,
                r"""Clear to the product denominator:

LCD:

$$4x^2-16\cdot 2x+4$$

Combine:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$""",
            ),
            (
                r"""Whenever $x\neq 0$, $\bigl(1+\dfrac{1}{x}\bigr)^2$ is treated as $1+\dfrac{1}{x^2}$.""",
                False,
                r"""Least common denominator of $x$ and $x^2$ is the product $xx^2$:

$$\frac{\cdots}{x}+\frac{\cdots}{x^2}=\frac{\cdots}{xx^2}$$

Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""Combining $\dfrac{1}{h^2}-\dfrac{1}{k^2}$ on $hk\neq 0$ as $\dfrac{k^2-h^2}{h^2k^2}$.""",
                True,
                r"""Clear to the product denominator:

LCD:

$$h^2\cdot k^2$$

Combine:

$$\frac{\cdots}{h^2}+\frac{\cdots}{k^2}=\frac{\cdots}{h^2k^2}$$""",
            ),
        ],
        overview=r"""A closing mix: a cubic with the wrong middle sign that a test at $0$ fails to catch, an LCD-as-sum trap, a minus nest, a binomial square missing its cross term, and a genuine difference of reciprocal squares.""",
    ),
]

