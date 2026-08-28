from __future__ import annotations

from common import task

TASKS = [
    task(
        title="Cancelled factor kept as the remainder",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""The stacked quotient $\dfrac{\dfrac{8a^2b}{4x^2-16}}{\dfrac{4ab}{2x+4}}$ simplifies to $\dfrac{a}{x-2}$ for $x\neq\pm 2$ and $a,b\neq 0$.""",
                True,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8a^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4ab}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{a}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"On $uv\neq 0$, adding $\dfrac{3}{u}+\dfrac{5}{v}$ with common denominator $u+v$ is claimed to produce $\dfrac{8}{u+v}$.",
                False,
                r"""Least common denominator of distinct monomials is their product, not their sum:
$$\frac{3}{u}+\frac{5}{v}=\frac{3v+5u}{uv}.$$
The quantity $\dfrac{8}{u+v}$ is a different rational expression.""",
            ),
            (
                r"""Let $x$ be a nonzero real number. Twice the reciprocal of the sum of $x$ and the reciprocal of $x$ equals twice $x$ divided by the sum of the square of $x$ and one.""",
                True,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $x\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{x+\frac{1}{x}}=\frac{2x}{x^2+1}$$

Twice the reciprocal of $x+\dfrac{1}{x}$ clears to a single rational expression.

Right-hand wording:

$$\frac{2x}{x^2+1}$$

The claim's right side must be read from the same verbal description.

Both translations agree, so the statement is an identity on $x\neq 0$.""",
            ),
            (
                r"After expanding $\bigl(1+\dfrac{1}{z}\bigr)^2$ for $z\neq 0$, a notebook records $1+\dfrac{2}{z}+\dfrac{1}{z^2}$.",
                True,
                r"""Binomial square produces the doubled cross term:
$$\left(1+\frac{1}{z}\right)^2=1+\frac{2}{z}+\frac{1}{z^2}=\frac{z^2+2z+1}{z^2}$$
for $z\neq 0$.""",
            ),
            (
                r"Combining $\dfrac{h}{k}+\dfrac{k}{h}$ on $hk\neq 0$ is rewritten as $\dfrac{(h+k)^2}{hk}$.",
                False,
                r"""Clear the product $hk$:
$$\frac{h}{k}+\frac{k}{h}=\frac{h^2+k^2}{hk}.$$
The claimed numerator $(h+k)^2=h^2+2hk+k^2$ inserts an extra $2hk$, which is the cross term of a square of a sum.""",
            ),
        ],
        overview=r"Five independent fraction claims. A cancelled linear factor is not the remainder; an LCD is a product; striking a letter that is not a factor of every term fails even if a single test point hides the error.",
    ),
    task(
        title="LCD taken as a sum of denominators",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Combining $\dfrac{6}{t}+\dfrac{7}{u}$ on $tu\neq 0$ with common denominator $t+u$ is claimed to produce $\dfrac{13}{t+u}$.",
                False,
                r"""Least common denominator of $t$ and $u$ is the product $tu$:
$$\frac{6}{t}+\frac{7}{u}=\frac{6u+7t}{tu}.$$
Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"Provided $x\neq 0$, the sum $\dfrac{3}{x}+\dfrac{5}{x}$ is recorded as $\dfrac{8}{x}$.",
                True,
                r"""Equal denominators add by combining the numerators over that shared denominator:
$$\frac{3}{x}+\frac{5}{x}=\frac{8}{x}$$
for $x\neq 0$.""",
            ),
            (
                r"Whenever $vw\neq 0$, rewriting $\dfrac{1}{v}+\dfrac{1}{w}$ as $\dfrac{v+w}{vw}$ is accepted.",
                True,
                r"""Least common denominator of distinct algebraic factors is the product of those factors. The common denominator is the product $vw$:
$$\frac{1}{v}+\frac{1}{w}=\frac{w+v}{vw}=\frac{v+w}{vw}.$$""",
            ),
            (
                r"""For $r,s\neq 0$ and $r\neq -s$, $\dfrac{2}{r}+\dfrac{9}{s}=\dfrac{2s+9r}{r+s}$.""",
                False,
                r"""The numerator of the claimed sum has the right cross-multiply form, but the denominator is $r+s$ instead of $rs$. Clear with the product denominator first.

Correct combination:

$$\frac{2}{r}+\frac{9}{s}=\frac{2s+9r}{rs}$$

Only $rs$ is the common denominator for unrelated linear factors.

The printed denominator $r+s$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
            (
                r"Clearing $\dfrac{1}{3h}+\dfrac{1}{6h}$ for $h\neq 0$ is said to leave $\dfrac{1}{2h}$.",
                True,
                r"""Least common denominator of distinct algebraic factors is the product of those factors. The common denominator is $6h$:
$$\frac{1}{3h}+\frac{1}{6h}=\frac{2}{6h}+\frac{1}{6h}=\frac{3}{6h}=\frac{1}{2h}.$$""",
            ),
        ],
        overview=r"Common denominators are products of the distinct denominator factors. Adding numerators over added denominators, or using a sum of coefficients as an LCD, both fail; equal denominators really do add in the numerators.",
    ),
    task(
        title="A letter struck from only one term",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Whenever $k\neq 0$, striking $k$ from $\dfrac{k+3}{k}$ is treated as leaving $1+3$.",
                False,
                r"""Term-by-term splitting keeps the leftover denominator:
$$\frac{k+3}{k}=1+\frac{3}{k}.$$
Cancelling $k$ from the whole numerator as if it produced $1+3$ drops that remaining $k$.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{7x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{3}{x-1}-\dfrac{1}{1-x}=\dfrac{7}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{7x-1}{x^2-1}-\frac{2}{x+1}+\frac{3}{x-1}+\frac{1}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{9 x + 5}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{9 x + 5}{x^{2} - 1}$, not $\dfrac{7}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Reducing $\dfrac{5v+5}{v+1}$ for $v\neq -1$ is recorded as $5$. Checking at $v=0$ is then said to recover the original value $5$.",
                True,
                r"""Factor the common $5$:
$$\frac{5(v+1)}{v+1}=5$$
for $v\neq -1$. At $v=0$ both the remainder and the original fraction equal $5$.""",
            ),
            (
                r"""For $q\neq 0$, $\dfrac{4(2q)}{(-2q)^2}=\dfrac{2}{q}$.""",
                True,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-2q)^2$.

Square the denominator:

$$(-2q)^2=4q^2$$

The denominator becomes a positive power of $q$.

Reduce the quotient:

$$\frac{2}{q}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.""",
            ),
            (
                r"Factoring $\dfrac{3w-3}{w-1}$ whenever $w\neq 1$ is claimed to leave $3$. At $w=0$ that remainder is then said to match the original value $3$.",
                True,
                r"""Factor $3$ from the numerator:
$$\frac{3(w-1)}{w-1}=3$$
for $w\neq 1$. At $w=0$ the original fraction is $\dfrac{-3}{-1}=3$.""",
            ),
        ],
        overview=r"A letter may be cancelled only when it is a factor of every term. Splitting a sum over a shared denominator is legal; keeping a cancelled linear factor as the remainder is not.",
    ),
    task(
        title="Nested unit fraction with a swapped report",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"After clearing the inner layer of $1+\dfrac{1}{1+\dfrac{1}{x}}$ for $x\neq 0,-1$, a candidate reports $\dfrac{x+1}{2x+1}$ instead of $\dfrac{2x+1}{x+1}$.",
                False,
                r"""Innermost, $1+\dfrac{1}{x}=\dfrac{x+1}{x}$. Its reciprocal is $\dfrac{x}{x+1}$, and adding $1$ gives
$$1+\frac{x}{x+1}=\frac{2x+1}{x+1}.$$
The reported form is the reciprocal of the cleared nest.""",
            ),
            (
                r"Collapsing $\dfrac{1}{1+\dfrac{1}{z}}$ for $z\neq 0,-1$ is recorded as $\dfrac{z}{z+1}$.",
                True,
                r"""A nested unit fraction is cleared from the inside by reciprocating each completed layer. Clear the inner sum first:
$$1+\frac{1}{z}=\frac{z+1}{z},\qquad \frac{1}{1+\dfrac{1}{z}}=\frac{z}{z+1}.$$""",
            ),
            (
                r"Someone rewrites $\dfrac{1}{1-\dfrac{1}{t}}$ for $t\neq 0,1$ as $\dfrac{t}{t+1}$.",
                False,
                r"""The minus nest produces a minus in the surviving denominator:
$$1-\frac{1}{t}=\frac{t-1}{t},\qquad \frac{1}{1-\dfrac{1}{t}}=\frac{t}{t-1}.$$
The claimed $t+1$ belongs to the plus nest, not the minus nest.""",
            ),
            (
                r"Provided $u\neq 0$, adding $1+\dfrac{1}{u}+\dfrac{1}{u^2}$ is said to equal $\dfrac{u^2+u+1}{u^2}$.",
                True,
                r"""Least common denominator of distinct algebraic factors is the product of those factors. The common denominator is $u^2$:
$$1+\frac{1}{u}+\frac{1}{u^2}=\frac{u^2+u+1}{u^2}.$$""",
            ),
            (
                r"""For $f,g,h\neq 0$, $\dfrac{3gh}{4f}\cdot\dfrac{2f^3g^2}{5}\div\dfrac{3(fg)^2}{4h}=\dfrac{2gh^2}{5}$.""",
                True,
                r"""The claim chains three monomial fractions in $f$, $g$, and $h$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3gh}{4f}\cdot\frac{2f^3g^2}{5}\cdot\frac{4h}{3f^2g^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 g h^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial.""",
            ),
        ],
        overview=r"A continued unit fraction is cleared from the inside. Plus and minus nests produce $z/(z+1)$ and $t/(t-1)$ respectively; swapping a cleared nest with its reciprocal, or dropping a binomial cross term, both fail.",
    ),
    task(
        title="Test point after a difference-of-squares cancel",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Simplifying $\dfrac{x^2-25}{x+5}$ for $x\neq -5$ is claimed to leave $x-5$. Checking at $x=0$ is then said to give $-5$, matching the original $-5$.",
                True,
                r"""Difference of squares cancels against the plus factor:
$$\frac{x^2-25}{x+5}=\frac{(x-5)(x+5)}{x+5}=x-5$$
for $x\neq -5$. At $x=0$ both the remainder and the original fraction equal $-5$.""",
            ),
            (
                r"Cancelling in $\dfrac{y^2-36}{y-6}$ for $y\neq 6$ is recorded as leaving $y-6$. Substituting $y=0$ is then claimed to recover the original $6$.",
                False,
                r"""The surviving factor is the plus remainder:
$$\frac{(y-6)(y+6)}{y-6}=y+6.$$
At $y=0$ the original fraction equals $6$, but the claimed remainder $y-6$ equals $-6$.""",
            ),
            (
                r"""For $p,q\neq 0$, $\dfrac{4}{p}+\dfrac{5}{q}=\dfrac{4q+5p}{pq}$.""",
                True,
                r"""The claim adds two simple fractions in $p$ and $q$. The least common denominator is the product $pq$, not their sum.

Clear to one fraction:

$$\frac{4}{p}+\frac{5}{q}=\frac{4q+5p}{pq}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
            (
                r"On $k\neq 3$, the quotient $\dfrac{k^3-27}{k-3}$ is recorded as $k^2+3k+9$. Checking at $k=0$ is then said to recover the original value $9$.",
                True,
                r"""Difference of cubes:
$$\frac{k^3-27}{k-3}=k^2+3k+9$$
for $k\neq 3$. At $k=0$ the remainder is $9$, and the original fraction is $\dfrac{-27}{-3}=9$.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $6$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $6$ over $x-1$ and $6$ over $x+1$.""",
                False,
                r"""The verbal decomposition puts the full numerator $6$ on each partial fraction. Clear that difference and compare with $\dfrac{6}{x^2-1}$.

Combine the printed partials:

$$\frac{6}{x-1}-\frac{6}{x+1}=\frac{26}{x^2-1}$$

The common denominator $(x-1)(x+1)$ doubles the intended numerator.

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.""",
            ),
        ],
        overview=r"A cancelled linear factor is not the remainder. Difference of cubes produces $k^2+3k+9$; flipping the middle sign, or equating a cancelled remainder to an unrelated plus-denominator fraction, both fail.",
    ),
    task(
        title="Binomial square missing the doubled cross term",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""For $x\neq\pm 1$, $\dfrac{4x-2}{x^2-1}-\dfrac{3}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{4}{x-1}$.""",
                True,
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

The claimed right-hand side $\dfrac{4}{x-1}$ matches after the full clear.""",
            ),
            (
                r"Expanding $\bigl(1-\dfrac{1}{u}\bigr)^2$ on $u\neq 0$ is recorded as $1-\dfrac{2}{u}+\dfrac{1}{u^2}$.",
                True,
                r"""Binomial square with a minus still produces a doubled cross term, now negative:
$$\left(1-\frac{1}{u}\right)^2=1-\frac{2}{u}+\frac{1}{u^2}.$$""",
            ),
            (
                r"Provided $v\neq 0$, rewriting $\bigl(v+\dfrac{1}{v}\bigr)^2$ as $v^2+\dfrac{1}{v^2}$ is accepted.",
                False,
                r"""The cross term is $2\cdot v\cdot\dfrac{1}{v}=2$:
$$\left(v+\frac{1}{v}\right)^2=v^2+2+\frac{1}{v^2}.$$
Omitting the constant $2$ fails identically except at isolated points.""",
            ),
            (
                r"After cancelling a factor of $\dfrac{5y^2-45}{y-3}$ for $y\neq 3$, the remainder $5y-15$ is recorded.",
                False,
                r"""Factor $5$ and a difference of squares:
$$\frac{5(y^2-9)}{y-3}=\frac{5(y-3)(y+3)}{y-3}=5(y+3)=5y+15.$$
The claimed $5y-15=5(y-3)$ is three times the cancelled factor, not the surviving one.""",
            ),
            (
                r"Combining $\dfrac{h}{k}+\dfrac{k}{h}-2$ on $hk\neq 0$ as $\dfrac{(h-k)^2}{hk}$ is accepted.",
                True,
                r"""Two algebraic fractions are combined by clearing them against the product of their denominators. Clear the product $hk$:
$$\frac{h}{k}+\frac{k}{h}-2=\frac{h^2+k^2-2hk}{hk}=\frac{(h-k)^2}{hk}.$$""",
            ),
        ],
        overview=r"A binomial square always produces a doubled cross term. The combination $h/k+k/h-2$ is a genuine square in the numerator; keeping a cancelled factor $y-3$ as the remainder is not.",
    ),
    task(
        title="Twice a reciprocal without an arithmetic mean",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Let $x$ be a nonzero real number. Twice the reciprocal of the sum of $x$ and the reciprocal of $x$ equals $x$ divided by the sum of the square of $x$ and one.""",
                False,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $x\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{x+\frac{1}{x}}=\frac{2x}{x^2+1}$$

Twice the reciprocal of $x+\dfrac{1}{x}$ clears to a single rational expression.

Right-hand wording:

$$\frac{x}{x^2+1}$$

The claim's right side must be read from the same verbal description.

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"A candidate identifies $\dfrac{2hk}{h+k}$ with $\dfrac{h+k}{2}$ whenever $hk\neq 0$ and $h+k\neq 0$.",
                False,
                r"""The two expressions agree when $h=k$, not identically:
$$\frac{2hk}{h+k}\neq\frac{h+k}{2}.$$
The first is the reciprocal of $\dfrac{h+k}{2hk}$; the second is an arithmetic mean of the letters.""",
            ),
            (
                r"On $tu\neq 0$, rewriting $\dfrac{t}{u}+\dfrac{u}{t}$ as $\dfrac{t^2+u^2}{tu}$ is accepted.",
                True,
                r"""Two algebraic fractions are combined by clearing them against the product of their denominators. Clear the product $tu$:
$$\frac{t}{u}+\frac{u}{t}=\frac{t^2+u^2}{tu}.$$""",
            ),
            (
                r"""For $m,t,n\neq 0$, $\dfrac{3tn}{4m}\cdot\dfrac{2m^3t^2}{5}\div\dfrac{3(mt)^2}{4n}=\dfrac{2tn^2}{5}$.""",
                True,
                r"""The claim chains three monomial fractions in $m$, $t$, and $n$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3tn}{4m}\cdot\frac{2m^3t^2}{5}\cdot\frac{4n}{3m^2t^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 n^{2} t}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial.""",
            ),
            (
                r"Provided $w\neq -1$, reducing $\dfrac{w^2+2w+1}{w+1}$ is recorded as $w+1$. Checking at $w=0$ is then said to recover the original value $1$.",
                True,
                r"""The numerator is a square:
$$\frac{(w+1)^2}{w+1}=w+1$$
for $w\neq -1$. At $w=0$ both sides of the original fraction equal $1$.""",
            ),
        ],
        overview=r"Twice the reciprocal of a sum of unit fractions is $2hk/(h+k)$, which is not the arithmetic mean $(h+k)/2$. Striking a letter from only one term of a numerator still fails.",
    ),
    task(
        title="Cubic remainder checked at a vanishing test point",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Provided $t\neq 3$, reducing $\dfrac{t^3-27}{t-3}$ is recorded as $t^2+3t+9$. Checking that remainder at $t=0$ is then said to recover the original value $9$.",
                True,
                r"""Difference of cubes:
$$\frac{t^3-27}{t-3}=t^2+3t+9$$
for $t\neq 3$. At $t=0$ the remainder is $9$, and $\dfrac{-27}{-3}=9$.""",
            ),
            (
                r"""For $m,n\neq 0$, $\dfrac{5}{m}+\dfrac{2}{n}=\dfrac{5n+2m}{mn}$.""",
                True,
                r"""The claim adds two simple fractions in $m$ and $n$. The least common denominator is the product $mn$, not their sum.

Clear to one fraction:

$$\frac{5}{m}+\frac{2}{n}=\frac{5n+2m}{mn}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
            (
                r"After clearing $\dfrac{1}{1+\dfrac{1}{w}}$ for $w\neq 0,-1$, a candidate reports $\dfrac{w}{w+1}$.",
                True,
                r"""A nested unit fraction is cleared from the inside by reciprocating each completed layer. The inner sum is $\dfrac{w+1}{w}$, so the reciprocal is
$$\frac{1}{1+\dfrac{1}{w}}=\frac{w}{w+1}.$$""",
            ),
            (
                r"Rewriting $\dfrac{h}{k}+\dfrac{k}{h}$ on $hk\neq 0$ as $\dfrac{(h+k)^2}{hk}$ is accepted.",
                False,
                r"""The genuine common-denominator form is
$$\frac{h}{k}+\frac{k}{h}=\frac{h^2+k^2}{hk}.$$
Replacing the numerator by $(h+k)^2$ inserts the extra cross term $2hk$.""",
            ),
            (
                r"Whenever $z\neq 6$, cancelling in $\dfrac{z^2-36}{z-6}$ is treated as leaving $z-6$.",
                False,
                r"""Difference of squares leaves the plus factor:
$$\frac{(z-6)(z+6)}{z-6}=z+6.$$
The claimed remainder is the cancelled factor itself.""",
            ),
        ],
        overview=r"A cubic-over-linear difference of cubes cancels to a quadratic whose value at $0$ matches the original fraction. An LCD is still a product; a cancelled linear factor is still not the remainder.",
    ),
    task(
        title="Difference of reciprocals over reciprocal squares",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Dividing $\dfrac{\dfrac{1}{t}-\dfrac{1}{u}}{\dfrac{1}{t^2}-\dfrac{1}{u^2}}$ for $tu\neq 0$, $t\neq u$, and $t\neq -u$ is said to equal $\dfrac{tu}{t+u}$.",
                True,
                r"""The numerator is $\dfrac{u-t}{tu}$. The denominator is
$$\frac{u^2-t^2}{t^2u^2}=\frac{(u-t)(u+t)}{t^2u^2}.$$
Dividing cancels $u-t$ and leaves $\dfrac{tu}{t+u}$.""",
            ),
            (
                r"""For $s\neq 0$, $\dfrac{4(8s)}{(-8s)^2}=\dfrac{4}{8s}$.""",
                True,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-8s)^2$.

Square the denominator:

$$(-8s)^2=64s^2$$

The denominator becomes a positive power of $s$.

Reduce the quotient:

$$\frac{1}{2 s}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.""",
            ),
            (
                r"Provided $x\neq 0$, the difference $\dfrac{1}{x^2}-\dfrac{1}{(x+1)^2}$ is recorded as $\dfrac{2x+1}{x^2(x+1)^2}$.",
                True,
                r"""Least common denominator of distinct algebraic factors is the product of those factors. Over the common denominator $x^2(x+1)^2$,
$$\frac{(x+1)^2-x^2}{x^2(x+1)^2}=\frac{2x+1}{x^2(x+1)^2}.$$""",
            ),
            (
                r"After cancelling $\dfrac{y^2-49}{y-7}$ for $y\neq 7$, a tutor claims the remainder $y+7$ and the original fraction take different values at $y=0$.",
                False,
                r"""Difference of squares leaves the plus remainder:
$$\frac{y^2-49}{y-7}=y+7.$$
At $y=0$ that remainder equals $7$, and the original fraction is $\dfrac{-49}{-7}=7$. The two values agree wherever both are defined.""",
            ),
            (
                r"""Let $u$ be a nonzero real number. Twice the reciprocal of the sum of $u$ and the reciprocal of $u$ equals twice $u$ divided by the sum of the square of $u$ and one.""",
                True,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $u\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{u+\frac{1}{u}}=\frac{2u}{u^2+1}$$

Twice the reciprocal of $u+\dfrac{1}{u}$ clears to a single rational expression.

Right-hand wording:

$$\frac{2u}{u^2+1}$$

The claim's right side must be read from the same verbal description.

Both translations agree, so the statement is an identity on $u\neq 0$.""",
            ),
        ],
        overview=r"A difference of unit fractions over a difference of reciprocal squares cancels to $tu/(t+u)$. A sign slip on $w-v$, or claiming that a cancelled remainder disagrees with the original at a legal test point, both fail.",
    ),
    task(
        title="Compound fraction whose simplified ratio is flipped",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Simplifying $\dfrac{1-\dfrac{1}{x+1}}{1+\dfrac{1}{x-1}}$ for $x\neq \pm 1$ and $x\neq 0$ is claimed to equal $\dfrac{x-1}{x+1}$.",
                True,
                r"""The upper layer collapses to $\dfrac{x}{x+1}$ and the lower layer to $\dfrac{x}{x-1}$. Dividing multiplies by the reciprocal:
$$\frac{x}{x+1}\cdot\frac{x-1}{x}=\frac{x-1}{x+1}.$$""",
            ),
            (
                r"Clearing $1-\dfrac{5}{t+3}$ for $t\neq -3$ is recorded as $\dfrac{t-2}{t+3}$.",
                True,
                r"""A constant minus a unit-over-linear fraction is rewritten over that same linear denominator:
$$1-\frac{5}{t+3}=\frac{t+3-5}{t+3}=\frac{t-2}{t+3}.$$""",
            ),
            (
                r"""For $u,v,w\neq 0$, $\dfrac{3vw}{4u}\cdot\dfrac{2u^3v^2}{5}\div\dfrac{3(uv)^2}{4w}=\dfrac{2vw}{5}$.""",
                False,
                r"""The claim chains three monomial fractions in $u$, $v$, and $w$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3vw}{4u}\cdot\frac{2u^3v^2}{5}\cdot\frac{4w}{3u^2v^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 v w^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

After every cancellation the surviving power of $w$ is $w^2$, so the printed right-hand side (missing that power) fails.""",
            ),
            (
                r"Whenever $v\neq \pm 3$, someone writes $\dfrac{v+3}{v-3}-\dfrac{v-3}{v+3}=\dfrac{6v}{v^2-9}$.",
                False,
                r"""Let $A=v+3$ and $B=v-3$. Then $A-B=6$ and $A+B=2v$, so
$$\frac{A}{B}-\frac{B}{A}=\frac{A^2-B^2}{AB}=\frac{12v}{v^2-9}.$$
The claimed numerator $6v$ is half of the correct numerator.""",
            ),
            (
                r"Collapsing $\dfrac{1}{1-\dfrac{1}{w}}$ for $w\neq 0,1$ is recorded as $\dfrac{w}{w-1}$.",
                True,
                r"""A nested unit fraction is cleared from the inside by reciprocating each completed layer. The inner difference is $\dfrac{w-1}{w}$, so the reciprocal is
$$\frac{1}{1-\dfrac{1}{w}}=\frac{w}{w-1}.$$""",
            ),
        ],
        overview=r"A compound fraction is two ordinary layers: collapse each, then multiply by the reciprocal of the lower layer. A ratio minus its reciprocal over $v^2-9$ produces $12v$, not $6v$.",
    ),
    task(
        title="Three poles sharing a product LCD",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""For $x,y\neq 0$ and $x\neq -y$, $\dfrac{2}{x}+\dfrac{3}{y}=\dfrac{2y+3x}{x+y}$.""",
                False,
                r"""The numerator of the claimed sum has the right cross-multiply form, but the denominator is $x+y$ instead of $xy$. Clear with the product denominator first.

Correct combination:

$$\frac{2}{x}+\frac{3}{y}=\frac{2y+3x}{xy}$$

Only $xy$ is the common denominator for unrelated linear factors.

The printed denominator $x+y$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
            (
                r"A notebook copies $\dfrac{1}{t}+\dfrac{1}{t+3}+\dfrac{1}{t-3}$ after excluding $t\in\{-3,0,3\}$ as $\dfrac{3t^2}{t(t^2-9)}$.",
                False,
                r"""The numerator is
$$(t^2-9)+t(t-3)+t(t+3)=3t^2-9,$$
not $3t^2$. The constant $-9$ comes from the product attached to the summand $1/t$.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $5$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{5}{2}$ over $x-1$ and $\dfrac{5}{2}$ over $x+1$.""",
                True,
                r"""The words describe a partial-fraction split of $\dfrac{5}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{5}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$\dfrac{5}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{5}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator.""",
            ),
            (
                r"After factoring $\dfrac{v-3}{v^2-8v+15}$ for $v\neq 3,5$, a reduction to $\dfrac{1}{v-5}$ is recorded.",
                True,
                r"""A ratio of quadratics is reduced by factoring both ends completely and cancelling one shared linear factor. The quadratic factors as $(v-3)(v-5)$, so
$$\frac{v-3}{(v-3)(v-5)}=\frac{1}{v-5}$$
for $v\neq 3,5$.""",
            ),
            (
                r"On $w\neq \pm 3$, someone writes $\dfrac{w^2+w-6}{w^2-9}=\dfrac{w-2}{w+3}$.",
                False,
                r"""Factor both ends:
$$w^2+w-6=(w+3)(w-2),\qquad w^2-9=(w-3)(w+3),$$
so the reduced form is $\dfrac{w-2}{w-3}$. The claimed denominator $w+3$ is the cancelled factor.""",
            ),
        ],
        overview=r"The LCD of three distinct linear denominators is their product; expanding produces a quadratic whose constant term is easy to drop. Cancelling one linear factor from a quadratic ratio leaves the other factor, not the cancelled one.",
    ),
    task(
        title="Continued nest that lands on a linear remainder",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Clearing the nest $\dfrac{1}{1-\dfrac{1}{1-\dfrac{1}{x}}}$ for $x\neq 0,1$ is said to leave $1-x$.",
                True,
                r"""Innermost, $1-\dfrac{1}{x}=\dfrac{x-1}{x}$, so $\dfrac{1}{1-\dfrac{1}{x}}=\dfrac{x}{x-1}$. The next layer is
$$1-\frac{x}{x-1}=\frac{-1}{x-1}.$$
Taking the reciprocal yields $1-x$.""",
            ),
            (
                r"Collapsing $\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{u}}}$ for $u\neq 0,-1,-\dfrac{1}{2}$ is said to equal $\dfrac{u+1}{2u+1}$.",
                True,
                r"""A nested unit fraction is cleared from the inside by reciprocating each completed layer. Innermost, $1+\dfrac{1}{u}=\dfrac{u+1}{u}$, so $\dfrac{1}{1+\dfrac{1}{u}}=\dfrac{u}{u+1}$. Then
$$1+\frac{u}{u+1}=\frac{2u+1}{u+1},\qquad \frac{1}{1+\dfrac{1}{1+\dfrac{1}{u}}}=\frac{u+1}{2u+1}.$$""",
            ),
            (
                r"Provided $v\neq 0$, putting $v+\dfrac{1}{v}$ over one denominator produces $\dfrac{v^2+1}{v}$.",
                True,
                r"""Two algebraic fractions are combined by clearing them against the product of their denominators. Clear the shared denominator $v$:
$$v+\frac{1}{v}=\frac{v^2+1}{v}.$$""",
            ),
            (
                r"""Let $w$ be a nonzero real quantity. Twice the reciprocal of the sum of $w$ and the reciprocal of $w$ equals $w$ divided by the sum of the square of $w$ and one.""",
                False,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $w\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{w+\frac{1}{w}}=\frac{2w}{w^2+1}$$

Twice the reciprocal of $w+\dfrac{1}{w}$ clears to a single rational expression.

Right-hand wording:

$$\frac{w}{w^2+1}$$

The claim's right side must be read from the same verbal description.

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"Whenever $t\neq 8$, reducing $\dfrac{t^2-64}{t-8}$ is claimed as $t-8$, and that remainder at $t=0$ is said to match the original $-8$.",
                False,
                r"""Difference of squares leaves the plus remainder:
$$\frac{t^2-64}{t-8}=t+8.$$
At $t=0$ the original fraction equals $8$, while the claimed remainder $t-8$ equals $-8$.""",
            ),
        ],
        overview=r"A three-layer minus nest of unit fractions simplifies to $1-x$; the matching plus nest simplifies to $(u+1)/(2u+1)$. Dropping the $2$ when squaring $h+1/h$, or keeping a cancelled factor as the remainder, both fail.",
    ),
    task(
        title="Stacked negative powers missing a leftover factor",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Simplifying $\dfrac{\dfrac{1}{x}+\dfrac{1}{x^2}}{\dfrac{1}{x^2}-\dfrac{1}{x^3}}$ for $x\neq 0,1$ is claimed to equal $\dfrac{x(x+1)}{x-1}$.",
                True,
                r"""The numerator is $\dfrac{x+1}{x^2}$ and the denominator is $\dfrac{x-1}{x^3}$. Dividing multiplies by the reciprocal:
$$\frac{x+1}{x^2}\cdot\frac{x^3}{x-1}=\frac{x(x+1)}{x-1}.$$""",
            ),
            (
                r"""For $a,c,b\neq 0$, $\dfrac{3cb}{4a}\cdot\dfrac{2a^3c^2}{5}\div\dfrac{3(ac)^2}{4b}=\dfrac{2cb}{5}$.""",
                False,
                r"""The claim chains three monomial fractions in $a$, $c$, and $b$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3cb}{4a}\cdot\frac{2a^3c^2}{5}\cdot\frac{4b}{3a^2c^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 b^{2} c}{5}$$

Track every letter exponent through the product before reading off the monomial.

After every cancellation the surviving power of $b$ is $b^2$, so the printed right-hand side (missing that power) fails.""",
            ),
            (
                r"On $v\neq 0$ and $v\neq 1$, someone writes $\dfrac{1}{v^2}-\dfrac{1}{v^3}=\dfrac{v-1}{v^2}$.",
                False,
                r"""Least common denominator of distinct algebraic factors is the product of those factors. The common denominator is $v^3$, not $v^2$:
$$\frac{1}{v^2}-\frac{1}{v^3}=\frac{v-1}{v^3}.$$""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8x^2b}{4x^2-16}}{\dfrac{4xb}{2x+4}}$ simplifies to $\dfrac{x}{x-2}$ for $x\neq\pm 2$ and $x,b\neq 0$.""",
                True,
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

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"Combining $\dfrac{h}{k}-\dfrac{k}{h}$ on $hk\neq 0$ is rewritten as $\dfrac{(h-k)^2}{hk}$.",
                False,
                r"""The genuine difference is
$$\frac{h}{k}-\frac{k}{h}=\frac{h^2-k^2}{hk}.$$
The square $(h-k)^2=h^2-2hk+k^2$ is the numerator of $\dfrac{h}{k}+\dfrac{k}{h}-2$, a different combination.""",
            ),
        ],
        overview=r"A stack of negative powers is two ordinary fractions. Multiply by the reciprocal of the lower layer; dropping a leftover factor $x$, or using the wrong common power, both fail. Difference of cubes still cancels to $w^2+3w+9$.",
    ),
    task(
        title="Cancel two pieces then add a leftover ratio",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Combining $\dfrac{u^2-25}{u-5}-\dfrac{u^2-9}{u-3}+\dfrac{8}{u+1}$ for $u\notin\{-1,3,5\}$ is said to equal $\dfrac{2(u+5)}{u+1}$.",
                True,
                r"""Cancel the first two quotients:
$$\frac{u^2-25}{u-5}=u+5,\qquad \frac{u^2-9}{u-3}=u+3.$$
The combination becomes
$$(u+5)-(u+3)+\frac{8}{u+1}=2+\frac{8}{u+1}=\frac{2(u+5)}{u+1}.$$""",
            ),
            (
                r"A script records $\dfrac{v^2-49}{v-7}-\dfrac{v^2-9}{v-3}+\dfrac{5}{v+2}$ for $v\notin\{-2,3,7\}$ as $\dfrac{v+7}{v+2}$.",
                False,
                r"""A common linear factor may be cancelled only after it is written as a factor of every term. The cancelled remainders are $v+7$ and $v+3$, so
$$(v+7)-(v+3)+\frac{5}{v+2}=4+\frac{5}{v+2}=\frac{4v+13}{v+2},$$
not $\dfrac{v+7}{v+2}$.""",
            ),
            (
                r"Provided $w\neq 8$, the cancelled remainder of $\dfrac{w^2-64}{w-8}$ is $w+8$, and at $w=0$ this is said to match the original $8$.",
                True,
                r"""Difference of squares:
$$\frac{(w-8)(w+8)}{w-8}=w+8.$$
At $w=0$ the original fraction is $\dfrac{-64}{-8}=8$.""",
            ),
            (
                r"On $h\neq 3$, reducing $\dfrac{h^2+6h+9}{h+3}$ is claimed to leave $h-3$.",
                False,
                r"""The numerator is $(h+3)^2$, so
$$\frac{(h+3)^2}{h+3}=h+3.$$
The claimed remainder $h-3$ is $\dfrac{h^2-9}{h+3}$, a different numerator.""",
            ),
            (
                r"""For $t\neq 0$, $\dfrac{4(5t)}{(-5t)^2}=\dfrac{4}{5t}$.""",
                True,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-5t)^2$.

Square the denominator:

$$(-5t)^2=25t^2$$

The denominator becomes a positive power of $t$.

Reduce the quotient:

$$\frac{4}{5 t}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.""",
            ),
        ],
        overview=r"Cancel each difference of squares first, then add the leftover unit-over-linear term. A pair of quotients over the same linear denominator collapses to a constant, not to zero.",
    ),
    task(
        title="A product of reciprocal rational pieces",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Multiplying $\Bigl(\dfrac{x}{x-3}-\dfrac{x}{x+3}\Bigr)\cdot\dfrac{x^2-9}{6x}$ for $x\neq 0,\pm 3$ is said to leave $1$.",
                True,
                r"""The difference simplifies first:
$$\frac{x}{x-3}-\frac{x}{x+3}=x\cdot\frac{6}{x^2-9}=\frac{6x}{x^2-9}.$$
Multiplying by the second factor then cancels everything to $1$.""",
            ),
            (
                r"Squaring $\bigl(1+\dfrac{1}{k}\bigr)$ for $k\neq 0$ is claimed equal to $1+\dfrac{1}{k^2}$.",
                False,
                r"""Binomial square of a sum always produces a doubled cross term in the expansion:
$$\left(1+\frac{1}{k}\right)^2=1+\frac{2}{k}+\frac{1}{k^2}.$$""",
            ),
            (
                r"""Let $u$ be a nonzero real number. Twice the reciprocal of the sum of $u$ and the reciprocal of $u$ equals $u$ divided by the sum of the square of $u$ and one.""",
                False,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $u\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{u+\frac{1}{u}}=\frac{2u}{u^2+1}$$

Twice the reciprocal of $u+\dfrac{1}{u}$ clears to a single rational expression.

Right-hand wording:

$$\frac{u}{u^2+1}$$

The claim's right side must be read from the same verbal description.

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"Provided $t\neq \pm 3$, reducing $\dfrac{6t}{t^2-9}\cdot\dfrac{t-3}{3}$ is claimed to leave $\dfrac{2t}{t+3}$.",
                True,
                r"""A common linear factor may be cancelled only after it is written as a factor of every term. Cancel the shared $t-3$:
$$\frac{6t}{(t-3)(t+3)}\cdot\frac{t-3}{3}=\frac{2t}{t+3}.$$""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{2x-2}{x^2-1}-\dfrac{1}{1+x}+\dfrac{1}{x-1}-\dfrac{1}{1-x}=\dfrac{3}{x-1}$.""",
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

After the full clear the left-hand side is $\frac{3 x + 1}{x^{2} - 1}$, not $\dfrac{3}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
        ],
        overview=r"The difference $x/(x-3)-x/(x+3)$ simplifies to $6x/(x^2-9)$, which is reciprocal to $(x^2-9)/(6x)$. Adding a ratio to its reciprocal produces $2(u^2+25)/(u^2-25)$, not a linear numerator.",
    ),
    task(
        title="Constant from a difference of expanded squares",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""For $x,y,z\neq 0$, $\dfrac{3yz}{4x}\cdot\dfrac{2x^3y^2}{5}\div\dfrac{3(xy)^2}{4z}=\dfrac{2yz^2}{5}$.""",
                True,
                r"""The claim chains three monomial fractions in $x$, $y$, and $z$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3yz}{4x}\cdot\frac{2x^3y^2}{5}\cdot\frac{4z}{3x^2y^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 y z^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial.""",
            ),
            (
                r"On $hk\neq 0$ and $h\neq k$, someone writes $\dfrac{h}{h-k}+\dfrac{k}{k-h}=0$.",
                False,
                r"""Rewrite the second summand by $k-h=-(h-k)$:
$$\frac{h}{h-k}+\frac{k}{k-h}=\frac{h-k}{h-k}=1.$$
The two terms add to $1$, not to $0$.""",
            ),
            (
                r"Provided $v\neq 0$, the halved form $\dfrac{(v+5)^2-(v-5)^2}{2v}$ equals $10$.",
                True,
                r"""A difference of expanded squares factors as a constant times the remaining linear letter. Use $A^2-B^2=(A-B)(A+B)$ with $A=v+5$ and $B=v-5$:
$$(A-B)(A+B)=10\cdot 2v=20v,\qquad \frac{20v}{2v}=10.$$""",
            ),
            (
                r"Whenever $w\neq z$, rewriting $\dfrac{w}{w-z}-\dfrac{z}{w-z}$ as $1$ is accepted.",
                True,
                r"""Fractions that already share a denominator subtract by subtracting the numerators:
$$\frac{w-z}{w-z}=1.$$""",
            ),
            (
                r"Combining $\dfrac{3}{y}+\dfrac{8}{y}$ for $y\neq 0$ with LCD taken as $y+y=2y$ is claimed to produce $\dfrac{11}{2y}$.",
                False,
                r"""The two summands already share the denominator $y$, so
$$\frac{3}{y}+\frac{8}{y}=\frac{11}{y}.$$
Treating the LCD as the sum of the two copies of $y$ halves the true sum.""",
            ),
        ],
        overview=r"The difference of two expanded squares is a constant times the letter, so the quotient by that letter is constant. Opposite linear denominators $h-k$ and $k-h$ make the paired sum equal $1$, not $0$.",
    ),
    task(
        title="Quadratic over quadratic with the wrong leftover",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $3$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $3$ over $x-1$ and $3$ over $x+1$.""",
                False,
                r"""The verbal decomposition puts the full numerator $3$ on each partial fraction. Clear that difference and compare with $\dfrac{3}{x^2-1}$.

Combine the printed partials:

$$\frac{3}{x-1}-\frac{3}{x+1}=\frac{23}{x^2-1}$$

The common denominator $(x-1)(x+1)$ doubles the intended numerator.

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.""",
            ),
            (
                r"A notebook records $\dfrac{t^2-36}{t^2-t-30}=\dfrac{t-6}{t+5}$ whenever $t\neq 6$ and $t\neq -5$.",
                False,
                r"""The denominator is $(t-6)(t+5)$ and the numerator is $(t-6)(t+6)$, so
$$\frac{t+6}{t+5}.$$
The claimed numerator $t-6$ is the cancelled factor.""",
            ),
            (
                r"Factoring both ends of $\dfrac{u^2-8u+15}{u^2-9}$ reduces it to $\dfrac{u-5}{u+3}$ off $u=\pm 3$.",
                True,
                r"""A ratio of quadratics is reduced by factoring both ends completely and cancelling one shared linear factor. Here $u^2-8u+15=(u-3)(u-5)$ and $u^2-9=(u-3)(u+3)$, so
$$\frac{(u-3)(u-5)}{(u-3)(u+3)}=\frac{u-5}{u+3}$$
for $u\neq \pm 3$.""",
            ),
            (
                r"""For $p\neq 0$, $\dfrac{4(8p)}{(-8p)^2}=\dfrac{4}{8p}$.""",
                True,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-8p)^2$.

Square the denominator:

$$(-8p)^2=64p^2$$

The denominator becomes a positive power of $p$.

Reduce the quotient:

$$\frac{1}{2 p}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.""",
            ),
            (
                r"With $w\neq 1$, someone writes $\dfrac{w^3-1}{w-1}=w^2-w+1$.",
                False,
                r"""Difference of cubes keeps a plus middle term:
$$\frac{w^3-1}{w-1}=w^2+w+1.$$
The claimed minus on the linear term is the sum-of-cubes pattern.""",
            ),
        ],
        overview=r"Factor both quadratics completely, cancel one shared linear factor, and keep the leftover linear ratio. Difference of cubes produces $w^2+w+1$, not $w^2-w+1$.",
    ),
    task(
        title="Sum of squares treated as a square of a sum",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Treating $\dfrac{x^2+y^2}{x+y}$ as identical to $x+y$ whenever $x+y\neq 0$ is claimed to be legitimate.",
                False,
                r"""Rewrite the numerator by completing the square of the sum:
$$\frac{x^2+y^2}{x+y}=x+y-\frac{2xy}{x+y}.$$
The extra term vanishes only if $xy=0$, not identically.""",
            ),
            (
                r"""Let $k$ be a nonzero real letter. Twice the reciprocal of the sum of $k$ and the reciprocal of $k$ equals twice $k$ divided by the sum of the square of $k$ and one.""",
                True,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $k\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{k+\frac{1}{k}}=\frac{2k}{k^2+1}$$

Twice the reciprocal of $k+\dfrac{1}{k}$ clears to a single rational expression.

Right-hand wording:

$$\frac{2k}{k^2+1}$$

The claim's right side must be read from the same verbal description.

Both translations agree, so the statement is an identity on $k\neq 0$.""",
            ),
            (
                r"The companion $\dfrac{v^2-10v+25}{v-5}$ is reduced to $v-5$ for $v\neq 5$, and at $v=0$ the remainder is said to equal the original $-5$.",
                True,
                r"""The numerator is a genuine square:
$$\frac{(v-5)^2}{v-5}=v-5.$$
At $v=0$ the original fraction is $\dfrac{25}{-5}=-5$.""",
            ),
            (
                r"Provided $h\neq -k$ and $h\neq k$, the quotient $\dfrac{h^2-k^2}{(h+k)^2}$ equals $\dfrac{h+k}{h-k}$.",
                False,
                r"""Cancel one factor $h+k$:
$$\frac{(h-k)(h+k)}{(h+k)^2}=\frac{h-k}{h+k}.$$
The claimed form is the reciprocal of the correct simplification.""",
            ),
            (
                r"On $z\neq -5$, someone writes $\dfrac{z^2+25}{z+5}=z+5$.",
                False,
                r"""There is no $10z$ cross term in $z^2+25$:
$$\frac{z^2+25}{z+5}=z+5-\frac{10z}{z+5}.$$
The quotient equals $z+5$ only at isolated points, not identically.""",
            ),
        ],
        overview=r"Only a genuine expanded square $(t\pm 3)^2$ cancels to $t\pm 3$. A sum of squares leaves a leftover cross-term correction $-2xy/(x+y)$.",
    ),
    task(
        title="Swapped two-letter ratios in a stacked quotient",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Simplifying $\dfrac{\dfrac{h}{k}-\dfrac{k}{h}}{\dfrac{h}{k}+\dfrac{k}{h}}$ for $hk\neq 0$ is said to equal $\dfrac{h^2-k^2}{h^2+k^2}$.",
                True,
                r"""The numerator is $\dfrac{h^2-k^2}{hk}$ and the denominator is $\dfrac{h^2+k^2}{hk}$, so the stack cancels $hk$ and leaves
$$\frac{h^2-k^2}{h^2+k^2}.$$""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8u^2b}{4x^2-16}}{\dfrac{4ub}{2x+4}}$ simplifies to $\dfrac{u}{x+2}$ for $x\neq\pm 2$ and $u,b\neq 0$.""",
                False,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8u^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4ub}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{u}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"After cancelling $\dfrac{z^3-125}{z-5}$ for $z\neq 5$, the quadratic $z^2+5z+25$ is recorded, and at $z=0$ it is said to match the original $25$.",
                True,
                r"""Cubes cancel a linear factor and leave a quadratic whose middle sign follows the original cube. Difference of cubes:
$$\frac{z^3-125}{z-5}=z^2+5z+25.$$
At $z=0$ the remainder is $25$, and $\dfrac{-125}{-5}=25$.""",
            ),
            (
                r"Provided $xy\neq 0$ and $3y+5x\neq 0$, someone writes $\dfrac{\dfrac{3}{x}-\dfrac{5}{y}}{\dfrac{3}{x}+\dfrac{5}{y}}=\dfrac{3x-5y}{3x+5y}$.",
                False,
                r"""Clear $xy$ in both layers:
$$\frac{\dfrac{3y-5x}{xy}}{\dfrac{3y+5x}{xy}}=\frac{3y-5x}{3y+5x}.$$
Each numerator term follows the opposite denominator, so the letters are swapped in the claim.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $6$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $3$ over $x-1$ and $3$ over $x+1$.""",
                True,
                r"""The words describe a partial-fraction split of $\dfrac{6}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{6}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$3\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{6}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator.""",
            ),
        ],
        overview=r"Dividing $h/k-k/h$ by $h/k+k/h$ cancels the shared $hk$ and leaves $(h^2-k^2)/(h^2+k^2)$. Reciprocating that result, or swapping which letter sits with which coefficient, both fail.",
    ),
    task(
        title="Squared minus sign in a monomial denominator",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Evaluating $\dfrac{3\cdot(3k)}{(-3k)^2}$ for $k\neq 0$ is said to leave $\dfrac{1}{k}$.",
                True,
                r"""Squaring a negative monomial removes the minus sign before any coefficients cancel:
$$(-3k)^2=9k^2,\qquad \frac{9k}{9k^2}=\frac{1}{k}.$$""",
            ),
            (
                r"Someone treats $\dfrac{5\cdot(5t)}{(-5t)^2}$ for $t\neq 0$ as $-\dfrac{1}{t}$.",
                False,
                r"""The square $(-5t)^2=25t^2$ is positive, so
$$\frac{25t}{25t^2}=\frac{1}{t}.$$
A minus would survive only if the square were omitted from that factor.""",
            ),
            (
                r"""For $q\neq 0$, $\dfrac{4(3q)}{(-3q)^2}=-\dfrac{4}{3q}$.""",
                False,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-3q)^2$.

Square the denominator:

$$(-3q)^2=9q^2$$

The denominator becomes a positive power of $q$.

Reduce the quotient:

$$\frac{4}{3 q}$$

Cancel the common power of the variable against the numerator.

A minus sign on the right-hand side cannot survive: the squared factor is positive.""",
            ),
            (
                r"Provided $v\neq 3$, reducing $\dfrac{15}{5v-15}$ is claimed to leave $\dfrac{3}{v-3}$.",
                True,
                r"""A constant over a scaled linear factor cancels the integer coefficient of the denominator:
$$\frac{15}{5(v-3)}=\frac{3}{v-3}$$
for $v\neq 3$.""",
            ),
            (
                r"Combining $\dfrac{h}{k}+\dfrac{k}{h}-2$ on $hk\neq 0$ as $\dfrac{(h+k)^2}{hk}$ is accepted.",
                False,
                r"""The numerator of the genuine combination is $(h-k)^2$:
$$\frac{h}{k}+\frac{k}{h}-2=\frac{(h-k)^2}{hk}.$$
Replacing it by $(h+k)^2$ is the plus-square of $h/k+k/h+2$.""",
            ),
        ],
        overview=r"Squaring a negative monomial removes the minus sign. Coefficients in the numerator must be counted exactly. The combination $h/k+k/h-2$ is $(h-k)^2/hk$, not $(h+k)^2/hk$.",
    ),
    task(
        title="Harmonic-looking product over a two-letter sum",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Let $w$ be a nonzero real quantity. Twice the reciprocal of the sum of $w$ and the reciprocal of $w$ equals twice $w$ divided by the sum of the square of $w$ and one.""",
                True,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $w\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{w+\frac{1}{w}}=\frac{2w}{w^2+1}$$

Twice the reciprocal of $w+\dfrac{1}{w}$ clears to a single rational expression.

Right-hand wording:

$$\frac{2w}{w^2+1}$$

The claim's right side must be read from the same verbal description.

Both translations agree, so the statement is an identity on $w\neq 0$.""",
            ),
            (
                r"Identifying $\dfrac{2hk}{h+k}$ with $\dfrac{h+k}{2}$ whenever $hk\neq 0$ and $h+k\neq 0$.",
                False,
                r"""The product-over-sum is the reciprocal of $\dfrac{h+k}{2hk}$, not the arithmetic mean:
$$\frac{2hk}{h+k}\neq\frac{h+k}{2}.$$
They agree when $h=k$, not identically.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{3x-3}{x^2-1}-\dfrac{4}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{5}{x-1}$.""",
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

After the full clear the left-hand side is $\frac{2 \left(x + 2\right)}{x^{2} - 1}$, not $\dfrac{5}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Clearing the three-layer plus nest $1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{k}}}$ for $k\neq 0,-1,-\dfrac{1}{2}$ is said to leave $\dfrac{3k+2}{2k+1}$.",
                True,
                r"""Innermost, $1+\dfrac{1}{k}=\dfrac{k+1}{k}$. Reciprocating and adding $1$ twice more yields
$$1+\frac{k+1}{2k+1}=\frac{3k+2}{2k+1}.$$""",
            ),
            (
                r"On $w\neq 0$, $\bigl(1-\dfrac{1}{w}\bigr)^2$ is recorded as $1-\dfrac{1}{w^2}$.",
                False,
                r"""Binomial square of a sum always produces a doubled cross term in the expansion. The doubled cross term survives with a minus:
$$\left(1-\frac{1}{w}\right)^2=1-\frac{2}{w}+\frac{1}{w^2}.$$""",
            ),
        ],
        overview=r"Twice the reciprocal of a sum of unit fractions is $2tu/(t+u)$, not the arithmetic mean. A three-layer plus nest of unit fractions simplifies to $(3k+2)/(2k+1)$. Sum of cubes still cancels to $v^2-3v+9$.",
    ),
    task(
        title="Three unit fractions with a false linear numerator",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Combining $\dfrac{1}{h}+\dfrac{1}{k}+\dfrac{1}{t}$ for $hkt\neq 0$ is said to equal $\dfrac{kt+ht+hk}{hkt}$.",
                True,
                r"""The common denominator is the product $hkt$:
$$\frac{kt+ht+hk}{hkt}.$$
Each numerator after clearing is the product of the other two letters.""",
            ),
            (
                r"A script writes $\dfrac{1}{u}+\dfrac{1}{v}+\dfrac{1}{w}=\dfrac{u+v+w}{uvw}$ whenever $uvw\neq 0$.",
                False,
                r"""Each numerator after clearing is the product of the other two letters, not the leftover single letter:
$$\frac{1}{u}+\frac{1}{v}+\frac{1}{w}=\frac{vw+uw+uv}{uvw}.$$
The claimed numerator $u+v+w$ is a different polynomial.""",
            ),
            (
                r"Adding $\dfrac{1}{3x}+\dfrac{1}{6x}$ for $x\neq 0$ is said to leave $\dfrac{1}{2x}$.",
                True,
                r"""Least common denominator of distinct algebraic factors is the product of those factors. The common denominator is $6x$:
$$\frac{1}{3x}+\frac{1}{6x}=\frac{2}{6x}+\frac{1}{6x}=\frac{1}{2x}.$$""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $7$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{7}{2}$ over $x-1$ and $\dfrac{7}{2}$ over $x+1$.""",
                True,
                r"""The words describe a partial-fraction split of $\dfrac{7}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{7}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$\dfrac{7}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{7}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator.""",
            ),
            (
                r"On $h\neq \pm k$, someone writes $\dfrac{3h-3k}{h^2-k^2}=\dfrac{3}{h-k}$.",
                False,
                r"""Cancel the shared difference:
$$\frac{3(h-k)}{(h-k)(h+k)}=\frac{3}{h+k}.$$
The surviving denominator is the sum $h+k$, not the cancelled difference.""",
            ),
        ],
        overview=r"Three unit fractions combine over $hkt$ with numerator $kt+ht+hk$. Replacing that numerator by $h+k+t$ is the usual error. A two-letter difference over a difference of squares cancels to $3/(h+k)$.",
    ),
    task(
        title="Cancelled linear factor kept in the denominator",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Reducing $\dfrac{x-5}{x^2-8x+15}$ for $x\neq 5,3$ is said to leave $\dfrac{1}{x-3}$.",
                True,
                r"""A linear-over-quadratic reduces by cancelling the matching linear factor of the denominator. The quadratic is $(x-5)(x-3)$, so
$$\frac{x-5}{(x-5)(x-3)}=\frac{1}{x-3}.$$""",
            ),
            (
                r"""For $r\neq 0$, $\dfrac{4(6r)}{(-6r)^2}=-\dfrac{4}{6r}$.""",
                False,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-6r)^2$.

Square the denominator:

$$(-6r)^2=36r^2$$

The denominator becomes a positive power of $r$.

Reduce the quotient:

$$\frac{2}{3 r}$$

Cancel the common power of the variable against the numerator.

A minus sign on the right-hand side cannot survive: the squared factor is positive.""",
            ),
            (
                r"Subtracting neighbouring unit factors $\dfrac{1}{u-3}-\dfrac{1}{u-5}$ equals $\dfrac{-2}{(u-3)(u-5)}$ off $u=3,5$.",
                True,
                r"""Over the product of the two linear denominators,
$$\frac{(u-5)-(u-3)}{(u-3)(u-5)}=\frac{-2}{(u-3)(u-5)}.$$""",
            ),
            (
                r"""For $p,q\neq 0$ and $p\neq -q$, $\dfrac{4}{p}+\dfrac{5}{q}=\dfrac{4q+5p}{p+q}$.""",
                False,
                r"""The numerator of the claimed sum has the right cross-multiply form, but the denominator is $p+q$ instead of $pq$. Clear with the product denominator first.

Correct combination:

$$\frac{4}{p}+\frac{5}{q}=\frac{4q+5p}{pq}$$

Only $pq$ is the common denominator for unrelated linear factors.

The printed denominator $p+q$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
            (
                r"With $w\neq \pm 3$, someone writes $\dfrac{w^2+w-6}{w^2-9}=\dfrac{w+2}{w-3}$.",
                False,
                r"""Factor both quadratics:
$$w^2+w-6=(w+3)(w-2),\qquad w^2-9=(w-3)(w+3),$$
so the reduced form is $\dfrac{w-2}{w-3}$. The claimed numerator $w+2$ has the wrong constant.""",
            ),
        ],
        overview=r"Factor $x^2-8x+15=(x-5)(x-3)$ and cancel $x-5$ to leave $1/(x-3)$. Keeping the cancelled factor, or swapping a constant in a nearby quadratic ratio, both fail.",
    ),
    task(
        title="Opposite linear factors that differ by a minus",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Adding $\dfrac{1}{h(h-k)}+\dfrac{1}{k(k-h)}$ for $hk\neq 0$ and $h\neq k$ is said to leave $-\dfrac{1}{hk}$.",
                True,
                r"""Opposite linear factors differ by a global minus sign and therefore cancel or change sign together. Rewrite $k-h=-(h-k)$:
$$\frac{1}{h(h-k)}-\frac{1}{k(h-k)}=\frac{k-h}{hk(h-k)}=-\frac{1}{hk}.$$""",
            ),
            (
                r"After squaring $\bigl(1+\dfrac{3}{x}\bigr)$ for $x\neq 0$, a candidate drops the cross term and records $1+\dfrac{9}{x^2}$.",
                False,
                r"""Binomial square of a sum always produces a doubled cross term; here that term is $2\cdot 1\cdot\dfrac{3}{x}=\dfrac{6}{x}$:
$$\left(1+\frac{3}{x}\right)^2=1+\frac{6}{x}+\frac{9}{x^2}.$$""",
            ),
            (
                r"Bare opposite unit fractions $\dfrac{1}{v-w}+\dfrac{1}{w-v}$ are claimed to vanish for every $v\neq w$.",
                True,
                r"""Opposite linear denominators differ by a global minus:
$$\frac{1}{w-v}=-\frac{1}{v-w},\qquad \frac{1}{v-w}+\frac{1}{w-v}=0.$$""",
            ),
            (
                r"Provided $hk\neq 0$ and $h\neq -k$, the split $\dfrac{1}{h(h+k)}+\dfrac{1}{k(h+k)}$ equals $\dfrac{1}{hk}$.",
                True,
                r"""Two unit fractions over a shared linear factor add by adding the remaining letters in the numerator. Share the factor $h+k$:
$$\frac{k+h}{hk(h+k)}=\frac{1}{hk}.$$""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8u^2b}{4x^2-16}}{\dfrac{4ub}{2x+4}}$ simplifies to $\dfrac{u}{x-2}$ for $x\neq\pm 2$ and $u,b\neq 0$.""",
                True,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8u^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4ub}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{u}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
        ],
        overview=r"The identity $k-h=-(h-k)$ turns $\frac{1}{h(h-k)}+\frac{1}{k(k-h)}$ into $-1/(hk)$, not $+1/(hk)$. Bare opposite unit fractions cancel to $0$; so do opposite copies of $tu/(t-u)$.",
    ),
    task(
        title="Cubic LCD of three neighbouring linears",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Combining $\dfrac{1}{t-3}+\dfrac{1}{t-5}+\dfrac{1}{t-6}$ off $\{3,5,6\}$ is said to equal $\dfrac{3t^2-28t+63}{(t-3)(t-5)(t-6)}$.",
                True,
                r"""The LCD is the product of the three linears. The numerator is
$$(t-5)(t-6)+(t-3)(t-6)+(t-3)(t-5)=3t^2-28t+63.$$""",
            ),
            (
                r"The three-pole sum $\dfrac{1}{u}+\dfrac{1}{u+5}+\dfrac{1}{u-5}$ is copied as $\dfrac{3u^2}{u(u^2-25)}$ after excluding $u\in\{-5,0,5\}$.",
                False,
                r"""The LCD is $u(u^2-25)$. The numerator is
$$(u^2-25)+u(u-5)+u(u+5)=3u^2-25,$$
not $3u^2$. The constant $-25$ comes from the product attached to $1/u$.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $4$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $4$ over $x-1$ and $4$ over $x+1$.""",
                False,
                r"""The verbal decomposition puts the full numerator $4$ on each partial fraction. Clear that difference and compare with $\dfrac{4}{x^2-1}$.

Combine the printed partials:

$$\frac{4}{x-1}-\frac{4}{x+1}=\frac{24}{x^2-1}$$

The common denominator $(x-1)(x+1)$ doubles the intended numerator.

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.""",
            ),
            (
                r"After reducing $\dfrac{w^4-1}{w^2-1}$ whenever $w^2\neq 1$, a remainder $w^2+1$ is recorded.",
                True,
                r"""Difference of squares factors the numerator so a shared linear factor can cancel. Difference of squares in the letter $w^2$:
$$\frac{w^4-1}{w^2-1}=w^2+1$$
for $w\neq \pm 1$.""",
            ),
            (
                r"""For $u,w,v\neq 0$, $\dfrac{3wv}{4u}\cdot\dfrac{2u^3w^2}{5}\div\dfrac{3(uw)^2}{4v}=\dfrac{2wv}{5}$.""",
                False,
                r"""The claim chains three monomial fractions in $u$, $w$, and $v$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3wv}{4u}\cdot\frac{2u^3w^2}{5}\cdot\frac{4v}{3u^2w^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 v^{2} w}{5}$$

Track every letter exponent through the product before reading off the monomial.

After every cancellation the surviving power of $v$ is $v^2$, so the printed right-hand side (missing that power) fails.""",
            ),
        ],
        overview=r"The LCD of three distinct linear denominators is their product. Subtracting reciprocal quadratics keeps both quadratic factors. A difference of reciprocal squares over $(z\pm 1)^2$ produces $4z/(z^2-1)^2$.",
    ),
    task(
        title="Square of a swapped-ratio sum beside a cubic",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""For $s\neq 0$, $\dfrac{4(2s)}{(-2s)^2}=\dfrac{2}{s}$.""",
                True,
                r"""The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-2s)^2$.

Square the denominator:

$$(-2s)^2=4s^2$$

The denominator becomes a positive power of $s$.

Reduce the quotient:

$$\frac{2}{s}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.""",
            ),
            (
                r"Subtracting in the opposite order, $\dfrac{k}{h}-\dfrac{h}{k}$ for $hk\neq 0$ is claimed to equal $\dfrac{h^2-k^2}{hk}$.",
                False,
                r"""The swapped order flips the sign:
$$\frac{k}{h}-\frac{h}{k}=\frac{k^2-h^2}{hk}=-\frac{h^2-k^2}{hk}.$$
The claimed numerator matches $\dfrac{h}{k}-\dfrac{k}{h}$, not this order.""",
            ),
            (
                r"The stacked ratio $\dfrac{\dfrac{3}{x}-\dfrac{5}{y}}{\dfrac{1}{x}+\dfrac{1}{y}}$ reduces to $\dfrac{3y-5x}{x+y}$ for $xy\neq 0$ and $x\neq -y$.",
                True,
                r"""The numerator is $\dfrac{3y-5x}{xy}$ and the denominator is $\dfrac{x+y}{xy}$, so the stack is
$$\frac{3y-5x}{x+y}.$$""",
            ),
            (
                r"Provided $t\neq u$, the cubic ratio $\dfrac{t^3-u^3}{t^2+tu+u^2}$ equals $t-u$.",
                True,
                r"""Cubes cancel a linear factor and leave a quadratic whose middle sign follows the original cube. Difference of cubes:
$$t^3-u^3=(t-u)(t^2+tu+u^2),$$
so the quotient is $t-u$ for $t\neq u$.""",
            ),
            (
                r"A swapped-ratio difference $\dfrac{v+3}{v-3}-\dfrac{v-3}{v+3}=\dfrac{6v}{v^2-9}$ once $v\neq\pm 3$.",
                False,
                r"""Let $A=v+3$ and $B=v-3$. Then $A-B=6$ and $A+B=2v$, so
$$\frac{A}{B}-\frac{B}{A}=\frac{12v}{v^2-9}.$$
The claimed numerator $6v$ is half of the correct numerator.""",
            ),
        ],
        overview=r"The square of $h/k+k/h$ is $(h^2+k^2)^2/(h^2k^2)$. Swapping the order of a difference flips the sign of $h^2-k^2$. A ratio minus its reciprocal over $v^2-9$ produces $12v/(v^2-9)$, not $6v/(v^2-9)$.",
    ),
    task(
        title="Outer reciprocal of a two-storey $x$-nest",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""For $x\neq\pm 1$, $\dfrac{5x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{3}{1-x}=\dfrac{6}{x-1}$.""",
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

After the full clear the left-hand side is $\frac{7 x + 5}{x^{2} - 1}$, not $\dfrac{6}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Cancelling $\dfrac{u^3-125}{u-5}$ for $u\neq 5$ is recorded as $u^2+5u+25$, and at $u=0$ that remainder is said to match the original $25$.",
                True,
                r"""Cubes cancel a linear factor and leave a quadratic whose middle sign follows the original cube. Difference of cubes:
$$\frac{u^3-125}{u-5}=u^2+5u+25.$$
At $u=0$ the remainder is $25$, and $\dfrac{-125}{-5}=25$.""",
            ),
            (
                r"Combining $\dfrac{6}{t}+\dfrac{8}{u}$ on $tu\neq 0$ over LCD $t+u$ is claimed to produce $\dfrac{14}{t+u}$.",
                False,
                r"""The LCD is the product $tu$:
$$\frac{6}{t}+\frac{8}{u}=\frac{6u+8t}{tu}.$$
Adding numerators over added denominators is not an identity.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8p^2b}{4x^2-16}}{\dfrac{4pb}{2x+4}}$ simplifies to $\dfrac{p}{x+2}$ for $x\neq\pm 2$ and $p,b\neq 0$.""",
                False,
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

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"On $w\neq 0$, expanding $\bigl(w-\dfrac{1}{w}\bigr)^2$ is recorded as $w^2-2+\dfrac{1}{w^2}$.",
                True,
                r"""Binomial square of a sum always produces a doubled cross term in the expansion. The cross term is $2\cdot w\cdot\bigl(-\dfrac{1}{w}\bigr)=-2$:
$$\left(w-\frac{1}{w}\right)^2=w^2-2+\frac{1}{w^2}.$$""",
            ),
        ],
        overview=r"A continued nest $1/(x+1/(x+1/x))$ simplifies to $(x^2+1)/(x(x^2+2))$. The stack $(1+h/k)/(1-h/k)$ is $(k+h)/(k-h)$, not the swapped ratio. An LCD remains a product.",
    ),
    task(
        title="Quartic cancel mixed with reciprocal squares",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Factoring $\dfrac{t^4-1}{t^2-1}$ whenever $t^2\neq 1$ is said to leave $t^2+1$.",
                True,
                r"""Difference of squares factors the numerator so a shared linear factor can cancel. Difference of squares in the letter $t^2$:
$$\frac{t^4-1}{t^2-1}=t^2+1$$
for $t\neq \pm 1$.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $1$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $1$ over $x-1$ and $1$ over $x+1$.""",
                False,
                r"""The verbal decomposition puts the full numerator $1$ on each partial fraction. Clear that difference and compare with $\dfrac{1}{x^2-1}$.

Combine the printed partials:

$$\frac{1}{x-1}-\frac{1}{x+1}=\frac{21}{x^2-1}$$

The common denominator $(x-1)(x+1)$ doubles the intended numerator.

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.""",
            ),
            (
                r"Subtracting $\dfrac{1}{(u-3)^2}-\dfrac{1}{(u+3)^2}$ produces $\dfrac{12u}{(u^2-9)^2}$ off $u=\pm 3$.",
                True,
                r"""A difference of reciprocal squares is written over the product of the squared linear factors. Over $(u^2-9)^2$, the numerator is
$$(u+3)^2-(u-3)^2=6\cdot 2u=12u.$$""",
            ),
            (
                r"The squared-difference quotient $\dfrac{(v-w)^2}{v^2-w^2}$ reduces to $\dfrac{v-w}{v+w}$ for $v\neq\pm w$.",
                True,
                r"""Factor the denominator as a difference of squares:
$$\frac{(v-w)^2}{(v-w)(v+w)}=\frac{v-w}{v+w}.$$""",
            ),
            (
                r"On $z\neq 5$, someone writes $\dfrac{z^2-25}{z-5}=z-5$.",
                False,
                r"""The surviving factor is the plus remainder:
$$\frac{(z-5)(z+5)}{z-5}=z+5.$$
The claimed remainder is the cancelled factor.""",
            ),
        ],
        overview=r"A cancellation $t^4-1$ over $t^2-1$ leaves $t^2+1$. A squared sum of unit fractions keeps the cross term $2/xy$. A difference of reciprocal squares over $(u\pm 3)^2$ produces $12u/(u^2-9)^2$.",
    ),
    task(
        title="Two candidate rewritings of a compound stack",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Two candidate rewritings of $\dfrac{1-\dfrac{3}{t}}{1+\dfrac{3}{t}}$ for $t\neq 0,-3$, namely $\dfrac{t-3}{t+3}$ and $\dfrac{t+3}{t-3}$, are treated as equal.",
                False,
                r"""The correct simplification is
$$\frac{\dfrac{t-3}{t}}{\dfrac{t+3}{t}}=\frac{t-3}{t+3}.$$
The two listed forms are reciprocals of each other, not identical.""",
            ),
            (
                r"""For $c,d\neq 0$ and $c\neq -d$, $\dfrac{8}{c}+\dfrac{3}{d}=\dfrac{8d+3c}{c+d}$.""",
                False,
                r"""The numerator of the claimed sum has the right cross-multiply form, but the denominator is $c+d$ instead of $cd$. Clear with the product denominator first.

Correct combination:

$$\frac{8}{c}+\frac{3}{d}=\frac{8d+3c}{cd}$$

Only $cd$ is the common denominator for unrelated linear factors.

The printed denominator $c+d$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
            (
                r"After cancelling $\dfrac{v^3-27}{v-3}$ for $v\neq 3$ as $v^2+3v+9$, a second rewriting $v^2-3v+9$ is treated as the same polynomial.",
                False,
                r"""Difference of cubes produces the plus-middle quadratic:
$$\frac{v^3-27}{v-3}=v^2+3v+9.$$
The companion $v^2-3v+9$ is the sum-of-cubes factor of $\dfrac{v^3+27}{v+3}$, a different quotient.""",
            ),
            (
                r"On $hk\neq 0$, rewriting $\dfrac{h}{k}+\dfrac{k}{h}+2$ as $\dfrac{(h+k)^2}{hk}$ is accepted.",
                True,
                r"""Two algebraic fractions are combined by clearing them against the product of their denominators. Clear the product $hk$:
$$\frac{h}{k}+\frac{k}{h}+2=\frac{h^2+2hk+k^2}{hk}=\frac{(h+k)^2}{hk}.$$""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{7x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{3}{x-1}-\dfrac{1}{1-x}=\dfrac{5}{x-1}$.""",
                False,
                r"""The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{7x-1}{x^2-1}-\frac{2}{x+1}+\frac{3}{x-1}+\frac{1}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{9 x + 5}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{9 x + 5}{x^{2} - 1}$, not $\dfrac{5}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
        ],
        overview=r"Two candidate simplifications of a compound fraction need not be equal: one may be the reciprocal of the other. The plus combination $h/k+k/h+2$ really is $(h+k)^2/hk$; mixing a difference-of-cubes quadratic with a sum-of-cubes quadratic is not.",
    ),
    task(
        title="Exam mix of leftover cancellation traps",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Provided $w\neq 5$, reducing $\dfrac{w^3-125}{w-5}$ is recorded as $w^2-5w+25$. Checking that remainder at $w=0$ is then said to recover the original value $25$.",
                False,
                r"""Difference of cubes produces the plus-middle quadratic:
$$\frac{w^3-125}{w-5}=w^2+5w+25,$$
not $w^2-5w+25$. At $w=0$ both quadratics equal $25$, so that test point does not catch the middle-sign error.""",
            ),
            (
                r"On $yz\neq 0$, adding $\dfrac{7}{y}+\dfrac{3}{z}$ with common denominator $y+z$ is claimed to produce $\dfrac{10}{y+z}$.",
                False,
                r"""The LCD is the product $yz$:
$$\frac{7}{y}+\frac{3}{z}=\frac{7z+3y}{yz}.$$
The claimed $\dfrac{10}{y+z}$ adds numerators over added denominators.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8a^2b}{4x^2-16}}{\dfrac{4ab}{2x+4}}$ simplifies to $\dfrac{a}{x+2}$ for $x\neq\pm 2$ and $a,b\neq 0$.""",
                False,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8a^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4ab}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{a}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"Whenever $x\neq 0$, $\bigl(1+\dfrac{1}{x}\bigr)^2$ is treated as $1+\dfrac{1}{x^2}$.",
                False,
                r"""Binomial square of a sum always produces a doubled cross term in the expansion. The doubled cross term $\dfrac{2}{x}$ is missing:
$$\left(1+\frac{1}{x}\right)^2=1+\frac{2}{x}+\frac{1}{x^2}.$$""",
            ),
            (
                r"Combining $\dfrac{1}{h^2}-\dfrac{1}{k^2}$ on $hk\neq 0$ as $\dfrac{k^2-h^2}{h^2k^2}$ is accepted.",
                True,
                r"""Difference of reciprocal squares over the product of the squares:
$$\frac{1}{h^2}-\frac{1}{k^2}=\frac{k^2-h^2}{h^2k^2}.$$""",
            ),
        ],
        overview=r"A closing mix: a cubic with the wrong middle sign that a test at $0$ fails to catch, an LCD-as-sum trap, a minus nest, a binomial square missing its cross term, and a genuine difference of reciprocal squares.",
    ),
]
