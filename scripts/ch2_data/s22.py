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
                r"Provided $t\neq 3$, reducing $\dfrac{t^2-9}{t-3}$ is recorded as $t+3$. Checking that remainder at $t=0$ is then said to recover the original value $3$.",
                True,
                r"""Difference of squares factors the numerator, and the cancelled linear factor is not the remainder:
$$\frac{t^2-9}{t-3}=\frac{(t-3)(t+3)}{t-3}=t+3$$
for $t\neq 3$. At $t=0$ the remainder is $3$, and the original fraction is $\dfrac{-9}{-3}=3$.""",
            ),
            (
                r"On $uv\neq 0$, adding $\dfrac{3}{u}+\dfrac{5}{v}$ with common denominator $u+v$ is claimed to produce $\dfrac{8}{u+v}$.",
                False,
                r"""Least common denominator of distinct monomials is their product, not their sum:
$$\frac{3}{u}+\frac{5}{v}=\frac{3v+5u}{uv}.$$
The quantity $\dfrac{8}{u+v}$ is a different rational expression.""",
            ),
            (
                r"Whenever $w\neq 0$, striking $w$ from $\dfrac{w+k}{w}$ is treated as leaving $1+k$. Substituting $w=1$ is then said to confirm the identity because both sides equal $1+k$.",
                False,
                r"""Split the fraction term by term:
$$\frac{w+k}{w}=1+\frac{k}{w}.$$
The claimed remainder $1+k$ agrees with the true split only at $w=1$, so that test point cannot certify an identity.""",
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
                r"After taking $8x$ as a least common denominator of $\dfrac{1}{3x}+\dfrac{1}{5x}$ for $x\neq 0$, a clerk calls that choice legitimate.",
                False,
                r"""The denominators are $3x$ and $5x$. Their least common multiple is $15x$, not the coefficient-sum $8x$:
$$\frac{1}{3x}+\frac{1}{5x}=\frac{5}{15x}+\frac{3}{15x}=\frac{8}{15x}.$$
The integer $8$ is the resulting numerator, not a factor of the LCD.""",
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
                r"On $t\neq 0$, splitting $\dfrac{t+8}{t}$ produces $1+\dfrac{8}{t}$.",
                True,
                r"""Write the numerator as a sum over the shared denominator:
$$\frac{t+8}{t}=\frac{t}{t}+\frac{8}{t}=1+\frac{8}{t}.$$""",
            ),
            (
                r"Reducing $\dfrac{5v+5}{v+1}$ for $v\neq -1$ is recorded as $5$. Checking at $v=0$ is then said to recover the original value $5$.",
                True,
                r"""Factor the common $5$:
$$\frac{5(v+1)}{v+1}=5$$
for $v\neq -1$. At $v=0$ both the remainder and the original fraction equal $5$.""",
            ),
            (
                r"After cancelling in $\dfrac{u(u+7)}{u+7}$ whenever $u\neq -7$, a note leaves $u+7$.",
                False,
                r"""The cancelled factor is $u+7$, so the surviving remainder is $u$:
$$\frac{u(u+7)}{u+7}=u.$$
Keeping the cancelled factor is the usual remainder swap.""",
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
                r"Squaring $\bigl(1-\dfrac{1}{v}\bigr)$ on $v\neq 0$ is treated as $1-\dfrac{1}{v^2}$.",
                False,
                r"""Binomial square still produces a doubled cross term:
$$\left(1-\frac{1}{v}\right)^2=1-\frac{2}{v}+\frac{1}{v^2}.$$
Dropping $-\dfrac{2}{v}$ is the usual missing-middle error.""",
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
                r"Provided $h\neq 7$, reducing $\dfrac{h^2-49}{h-7}$ is filed as $h+7$, and that remainder is then treated as equal to $\dfrac{h^2+49}{h+7}$.",
                False,
                r"""The first rewriting is correct:
$$\frac{(h-7)(h+7)}{h-7}=h+7.$$
The second fraction $\dfrac{h^2+49}{h+7}$ does not cancel to $h+7$, because $h^2+49$ is not $(h+7)^2$.""",
            ),
            (
                r"On $k\neq 3$, the quotient $\dfrac{k^3-27}{k-3}$ is recorded as $k^2+3k+9$. Checking at $k=0$ is then said to recover the original value $9$.",
                True,
                r"""Difference of cubes:
$$\frac{k^3-27}{k-3}=k^2+3k+9$$
for $k\neq 3$. At $k=0$ the remainder is $9$, and the original fraction is $\dfrac{-27}{-3}=9$.""",
            ),
            (
                r"With $w\neq 5$, someone writes $\dfrac{w^3-125}{w-5}=w^2-5w+25$.",
                False,
                r"""Difference of cubes keeps a plus middle term:
$$\frac{w^3-125}{w-5}=w^2+5w+25.$$
The claimed minus on the linear term is the sum-of-cubes sign pattern, not the difference-of-cubes pattern.""",
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
                r"Squaring $\bigl(1+\dfrac{1}{t}\bigr)$ for $t\neq 0$ is claimed to produce $1+\dfrac{1}{t^2}$.",
                False,
                r"""The square of a sum keeps the doubled product:
$$\left(1+\frac{1}{t}\right)^2=1+\frac{2}{t}+\frac{1}{t^2}.$$
Dropping $\dfrac{2}{t}$ is the usual binomial-square trap.""",
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
                r"Taking twice the reciprocal of $\dfrac{1}{h}+\dfrac{1}{k}$ for $hk\neq 0$ and $h+k\neq 0$ is said to produce $\dfrac{2hk}{h+k}$.",
                True,
                r"""The sum of unit fractions is $\dfrac{h+k}{hk}$, so twice its reciprocal is
$$\frac{2}{\dfrac{1}{h}+\dfrac{1}{k}}=\frac{2hk}{h+k}.$$""",
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
                r"Whenever $v\neq 0$, striking $v$ from $\dfrac{3v+5}{v}$ is treated as leaving $3+5$.",
                False,
                r"""Split term by term:
$$\frac{3v+5}{v}=3+\frac{5}{v}.$$
The integer $5$ still sits over $v$; cancelling $v$ from the whole numerator as if it produced $3+5$ is illegal.""",
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
                r"On $uv\neq 0$, adding $\dfrac{8}{u}+\dfrac{3}{v}$ with common denominator $u+v$ is claimed to produce $\dfrac{11}{u+v}$.",
                False,
                r"""The LCD is the product $uv$, not the sum $u+v$:
$$\frac{8}{u}+\frac{3}{v}=\frac{8v+3u}{uv}.$$
The claimed $\dfrac{11}{u+v}$ adds numerators over added denominators.""",
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
                r"Someone treats $\dfrac{\dfrac{1}{v}-\dfrac{1}{w}}{\dfrac{1}{v}+\dfrac{1}{w}}$ on $vw\neq 0$ and $v\neq -w$ as $\dfrac{v-w}{v+w}$.",
                False,
                r"""The stack simplifies to
$$\frac{\dfrac{w-v}{vw}}{\dfrac{w+v}{vw}}=\frac{w-v}{w+v}=-\frac{v-w}{v+w}.$$
The claimed ratio has the opposite sign in the numerator.""",
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
                r"Combining $\dfrac{3}{h-3}-\dfrac{3}{h+3}$ for $h\neq \pm 3$ is said to equal $\dfrac{18}{h^2-9}$.",
                True,
                r"""Least common denominator of distinct algebraic factors is the product of those factors. Factor $3$ and use the common denominator $h^2-9$:
$$3\left(\frac{1}{h-3}-\frac{1}{h+3}\right)=3\cdot\frac{6}{h^2-9}=\frac{18}{h^2-9}.$$""",
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
                r"On $u\neq 5$, adding $1+\dfrac{1}{u-5}$ is said to produce $\dfrac{u}{u-5}$.",
                False,
                r"""The constant $1$ contributes $u-5$, not $u$:
$$1+\frac{1}{u-5}=\frac{u-5+1}{u-5}=\frac{u-4}{u-5}.$$
The claimed numerator $u$ would match $1+\dfrac{1}{u-1}$, a different shift.""",
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
                r"Combining $\dfrac{1}{x}+\dfrac{1}{x+1}+\dfrac{1}{x-1}$ for $x\notin\{-1,0,1\}$ is said to equal $\dfrac{3x^2-1}{x(x^2-1)}$.",
                True,
                r"""Least common denominator of distinct algebraic factors is the product of those factors. The LCD is the product $x(x^2-1)$:
$$\frac{(x^2-1)+x(x-1)+x(x+1)}{x(x^2-1)}=\frac{3x^2-1}{x(x^2-1)}.$$""",
            ),
            (
                r"A notebook copies $\dfrac{1}{t}+\dfrac{1}{t+3}+\dfrac{1}{t-3}$ after excluding $t\in\{-3,0,3\}$ as $\dfrac{3t^2}{t(t^2-9)}$.",
                False,
                r"""The numerator is
$$(t^2-9)+t(t-3)+t(t+3)=3t^2-9,$$
not $3t^2$. The constant $-9$ comes from the product attached to the summand $1/t$.""",
            ),
            (
                r"Subtracting $\dfrac{1}{u^2-9}-\dfrac{1}{u^2-1}$ away from $u=\pm 1,\pm 3$ is claimed to equal $\dfrac{8}{u^2-9}$.",
                False,
                r"""The common denominator is $(u^2-9)(u^2-1)$:
$$\frac{(u^2-1)-(u^2-9)}{(u^2-9)(u^2-1)}=\frac{8}{(u^2-9)(u^2-1)}.$$
The factor $u^2-1$ remains in the denominator; the claim drops it.""",
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
                r"Squaring $h+\dfrac{1}{h}$ without the cross term, someone writes $\bigl(h+\dfrac{1}{h}\bigr)^2=h^2+\dfrac{1}{h^2}$ for $h\neq 0$.",
                False,
                r"""The cross term is $2$:
$$\left(h+\frac{1}{h}\right)^2=h^2+2+\frac{1}{h^2}.$$
Omitting that constant fails identically.""",
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
                r"Dividing matching geometric pieces $\dfrac{\dfrac{1}{t}+\dfrac{1}{t^2}}{\dfrac{1}{t}-\dfrac{1}{t^2}}$ is said to leave $\dfrac{t+1}{t-1}$ for $t\neq 0,1$.",
                True,
                r"""Both layers share the denominator $t^2$, so that power cancels:
$$\frac{\dfrac{t+1}{t^2}}{\dfrac{t-1}{t^2}}=\frac{t+1}{t-1}.$$""",
            ),
            (
                r"On $v\neq 0$ and $v\neq 1$, someone writes $\dfrac{1}{v^2}-\dfrac{1}{v^3}=\dfrac{v-1}{v^2}$.",
                False,
                r"""Least common denominator of distinct algebraic factors is the product of those factors. The common denominator is $v^3$, not $v^2$:
$$\frac{1}{v^2}-\frac{1}{v^3}=\frac{v-1}{v^3}.$$""",
            ),
            (
                r"After cancelling $\dfrac{w^3-27}{w-3}$ for $w\neq 3$, the quadratic $w^2+3w+9$ is recorded, and at $w=0$ that remainder is said to match the original value $9$.",
                True,
                r"""Cubes cancel a linear factor and leave a quadratic whose middle sign follows the original cube. Difference of cubes:
$$\frac{w^3-27}{w-3}=w^2+3w+9.$$
At $w=0$ the remainder is $9$, and $\dfrac{-27}{-3}=9$.""",
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
                r"Whenever $k\neq -5$, someone writes $\dfrac{k^2+10k+25}{k+5}-\dfrac{k^2-25}{k+5}=0$.",
                False,
                r"""Share the denominator $k+5$:
$$\frac{(k+5)^2-(k^2-25)}{k+5}=\frac{10k+50}{k+5}=10.$$
The difference is the constant $10$, not $0$.""",
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
                r"After clearing $1+\dfrac{1}{1+\dfrac{1}{v}}$ for $v\neq 0,-1$, a report of $\dfrac{2v+1}{v+1}$ is accepted.",
                True,
                r"""A nested unit fraction is cleared from the inside by reciprocating each completed layer. Innermost, $1+\dfrac{1}{v}=\dfrac{v+1}{v}$. Reciprocating and adding $1$ gives
$$1+\frac{v}{v+1}=\frac{2v+1}{v+1}.$$""",
            ),
            (
                r"Provided $t\neq \pm 3$, reducing $\dfrac{6t}{t^2-9}\cdot\dfrac{t-3}{3}$ is claimed to leave $\dfrac{2t}{t+3}$.",
                True,
                r"""A common linear factor may be cancelled only after it is written as a factor of every term. Cancel the shared $t-3$:
$$\frac{6t}{(t-3)(t+3)}\cdot\frac{t-3}{3}=\frac{2t}{t+3}.$$""",
            ),
            (
                r"Adding swapped linear ratios $\dfrac{u+5}{u-5}+\dfrac{u-5}{u+5}=\dfrac{2u}{u^2-25}$ off $u=\pm 5$.",
                False,
                r"""Let $A=u+5$ and $B=u-5$. Then
$$\frac{A}{B}+\frac{B}{A}=\frac{A^2+B^2}{AB}=\frac{2(u^2+25)}{u^2-25}.$$
The claimed linear numerator $2u$ belongs to a different combination.""",
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
                r"Dividing $(x+3)^2-(x-3)^2$ by $x\neq 0$ is said to leave the constant $12$.",
                True,
                r"""A difference of expanded squares factors as a constant times the remaining linear letter. Use $A^2-B^2=(A-B)(A+B)$ with $A=x+3$ and $B=x-3$:
$$(A-B)(A+B)=6\cdot 2x=12x.$$
Then $\dfrac{12x}{x}=12$ for $x\neq 0$.""",
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
                r"Reducing $\dfrac{x^2-25}{x^2-5x}$ for $x\neq 0,5$ is said to leave $\dfrac{x+5}{x}$.",
                True,
                r"""A common linear factor may be cancelled only after it is written as a factor of every term. Factor both ends and cancel $x-5$:
$$\frac{(x-5)(x+5)}{x(x-5)}=\frac{x+5}{x}.$$""",
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
                r"Pulling five from $\dfrac{5v-15}{v^2-9}$ is claimed to leave $\dfrac{5}{v+3}$ off $v=\pm 3$.",
                True,
                r"""Factor the numerator and a difference of squares:
$$\frac{5(v-3)}{(v-3)(v+3)}=\frac{5}{v+3}.$$""",
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
                r"Cancelling a genuine square, $\dfrac{t^2+6t+9}{t+3}$ equals $t+3$ for $t\neq -3$, and at $t=0$ this remainder is said to match the original value $3$.",
                True,
                r"""The numerator is a genuine square:
$$\frac{(t+3)^2}{t+3}=t+3.$$
At $t=0$ the original fraction is $\dfrac{9}{3}=3$.""",
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
                r"Filing $\dfrac{\dfrac{t}{u}+\dfrac{u}{t}}{\dfrac{t}{u}-\dfrac{u}{t}}$ for $tu\neq 0$ and $t\neq \pm u$ as $\dfrac{t^2-u^2}{t^2+u^2}$.",
                False,
                r"""The stack is the reciprocal of the previous shape:
$$\frac{\dfrac{t^2+u^2}{tu}}{\dfrac{t^2-u^2}{tu}}=\frac{t^2+u^2}{t^2-u^2}.$$
The claimed form swaps the two quadratic pieces.""",
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
                r"On $k\neq 0$, expanding $\bigl(1+\dfrac{1}{k}\bigr)^2$ is recorded as $\dfrac{k^2+2k+1}{k^2}$.",
                True,
                r"""Binomial square of a sum always produces a doubled cross term, written over the common denominator $k^2$:
$$\left(1+\frac{1}{k}\right)^2=\frac{(k+1)^2}{k^2}=\frac{k^2+2k+1}{k^2}.$$""",
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
                r"Squaring the minus, $\dfrac{9}{(-3u)^2}$ equals $\dfrac{1}{u^2}$ for every $u\neq 0$.",
                True,
                r"""Squaring a negative monomial removes the minus sign before the remaining coefficients cancel:
$$(-3u)^2=9u^2,\qquad \frac{9}{9u^2}=\frac{1}{u^2}.$$""",
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
                r"Taking twice the reciprocal of $\dfrac{1}{t}+\dfrac{1}{u}$ for $tu\neq 0$ and $t+u\neq 0$ produces $\dfrac{2tu}{t+u}$.",
                True,
                r"""Twice the reciprocal of a sum of unit fractions is the product of the letters over their sum. The inner sum is $\dfrac{t+u}{tu}$, so
$$\frac{2}{\dfrac{1}{t}+\dfrac{1}{u}}=\frac{2tu}{t+u}.$$""",
            ),
            (
                r"Identifying $\dfrac{2hk}{h+k}$ with $\dfrac{h+k}{2}$ whenever $hk\neq 0$ and $h+k\neq 0$.",
                False,
                r"""The product-over-sum is the reciprocal of $\dfrac{h+k}{2hk}$, not the arithmetic mean:
$$\frac{2hk}{h+k}\neq\frac{h+k}{2}.$$
They agree when $h=k$, not identically.""",
            ),
            (
                r"After cancelling $\dfrac{v^3+27}{v+3}$ for $v\neq -3$, the quadratic $v^2-3v+9$ at $v=0$ is said to match the original $9$.",
                True,
                r"""Cubes cancel a linear factor and leave a quadratic whose middle sign follows the original cube. Sum of cubes:
$$\frac{v^3+27}{v+3}=v^2-3v+9.$$
At $v=0$ the remainder is $9$, and $\dfrac{27}{3}=9$.""",
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
                r"Provided $z\neq \pm 5$, reducing $\dfrac{2z-10}{z^2-25}$ leaves $\dfrac{2}{z+5}$.",
                True,
                r"""A ratio of quadratics is reduced by factoring both ends completely and cancelling one shared linear factor. Factor both ends:
$$\frac{2(z-5)}{(z-5)(z+5)}=\frac{2}{z+5}$$
for $z\neq \pm 5$.""",
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
                r"Copying the reduced form of $\dfrac{t-3}{t^2-8t+15}$ after excluding $t\in\{3,5\}$ as $\dfrac{1}{t-3}$.",
                False,
                r"""The quadratic factors as $(t-3)(t-5)$, so
$$\frac{t-3}{(t-3)(t-5)}=\frac{1}{t-5}.$$
The claimed $\dfrac{1}{t-3}$ keeps the cancelled factor and drops the surviving one.""",
            ),
            (
                r"Subtracting neighbouring unit factors $\dfrac{1}{u-3}-\dfrac{1}{u-5}$ equals $\dfrac{-2}{(u-3)(u-5)}$ off $u=3,5$.",
                True,
                r"""Over the product of the two linear denominators,
$$\frac{(u-5)-(u-3)}{(u-3)(u-5)}=\frac{-2}{(u-3)(u-5)}.$$""",
            ),
            (
                r"The pair $\dfrac{1}{v(v+1)}+\dfrac{1}{v(v-1)}$ is combined to $\dfrac{2}{v^2-1}$ for $v\neq 0,\pm 1$.",
                True,
                r"""Least common denominator of distinct algebraic factors is the product of those factors. The LCD is $v(v^2-1)$:
$$\frac{(v-1)+(v+1)}{v(v^2-1)}=\frac{2v}{v(v^2-1)}=\frac{2}{v^2-1}.$$""",
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
                r"Opposite linear denominators are added as $\dfrac{tu}{t-u}+\dfrac{tu}{u-t}=tu$ after $tu\neq 0$ and $t\neq u$.",
                False,
                r"""The second term is the opposite of the first:
$$\frac{tu}{u-t}=-\frac{tu}{t-u},$$
so the sum is $0$, not $tu$.""",
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
                r"Dropping a factor, $\dfrac{1}{v^2-25}-\dfrac{1}{v^2-9}$ is claimed to equal $\dfrac{16}{v^2-25}$ away from $v=\pm 3,\pm 5$.",
                False,
                r"""The common denominator is $(v^2-25)(v^2-9)$:
$$\frac{(v^2-9)-(v^2-25)}{(v^2-25)(v^2-9)}=\frac{16}{(v^2-25)(v^2-9)}.$$
The factor $v^2-9$ remains; the claim drops it.""",
            ),
            (
                r"After reducing $\dfrac{w^4-1}{w^2-1}$ whenever $w^2\neq 1$, a remainder $w^2+1$ is recorded.",
                True,
                r"""Difference of squares factors the numerator so a shared linear factor can cancel. Difference of squares in the letter $w^2$:
$$\frac{w^4-1}{w^2-1}=w^2+1$$
for $w\neq \pm 1$.""",
            ),
            (
                r"Differencing reciprocal squares $\dfrac{1}{(z-1)^2}-\dfrac{1}{(z+1)^2}$ produces $\dfrac{4z}{(z^2-1)^2}$ off $z=\pm 1$.",
                True,
                r"""A difference of reciprocal squares is written over the product of the squared linear factors. Over $(z^2-1)^2$, the numerator is
$$(z+1)^2-(z-1)^2=\bigl((z+1)-(z-1)\bigr)\bigl((z+1)+(z-1)\bigr)=2\cdot 2z=4z.$$""",
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
                r"Squaring the sum $\dfrac{h}{k}+\dfrac{k}{h}$ for $hk\neq 0$ is said to equal $\dfrac{(h^2+k^2)^2}{h^2k^2}$.",
                True,
                r"""The square of a sum of swapped ratios is the square of the single cleared fraction. The inner sum is $\dfrac{h^2+k^2}{hk}$, so its square is
$$\left(\frac{h}{k}+\frac{k}{h}\right)^2=\frac{(h^2+k^2)^2}{h^2k^2}.$$""",
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
                r"Clearing $\dfrac{1}{x+\dfrac{1}{x+\dfrac{1}{x}}}$ for $x\neq 0$ is said to equal $\dfrac{x^2+1}{x(x^2+2)}$.",
                True,
                r"""Innermost, $x+\dfrac{1}{x}=\dfrac{x^2+1}{x}$. Reciprocating and adding the outer $x$ gives
$$x+\frac{x}{x^2+1}=\frac{x(x^2+2)}{x^2+1}.$$
The outer reciprocal is $\dfrac{x^2+1}{x(x^2+2)}$.""",
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
                r"With $k\neq 0$ and $h\neq k$, someone writes $\dfrac{1+\dfrac{h}{k}}{1-\dfrac{h}{k}}=\dfrac{k-h}{k+h}$.",
                False,
                r"""The upper layer is $\dfrac{k+h}{k}$ and the lower layer is $\dfrac{k-h}{k}$, so the stack is
$$\frac{k+h}{k-h}.$$
The claimed ratio is the reciprocal of the correct simplification.""",
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
                r"Squaring the sum $\dfrac{1}{x}+\dfrac{1}{y}$ for $xy\neq 0$ is claimed to leave $\dfrac{1}{x^2}+\dfrac{1}{y^2}$.",
                False,
                r"""Binomial square of a sum always produces a doubled cross term in the expansion:
$$\left(\frac{1}{x}+\frac{1}{y}\right)^2=\frac{1}{x^2}+\frac{2}{xy}+\frac{1}{y^2}.$$""",
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
                r"Provided $u\neq 0,5$, collapsing $\dfrac{1-\dfrac{5}{u}}{1-\dfrac{1}{u}}$ is recorded as $\dfrac{u-5}{u-1}$.",
                True,
                r"""A compound fraction is cleared by writing each layer over the same inner denominator $u$:
$$\frac{\dfrac{u-5}{u}}{\dfrac{u-1}{u}}=\frac{u-5}{u-1}.$$""",
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
                r"Clearing $\dfrac{1}{1+\dfrac{1}{w-1}}$ for $w\neq 0,1$ is said to leave $\dfrac{w-1}{w}$.",
                True,
                r"""A nested unit fraction is cleared from the inside by reciprocating each completed layer. The inner sum is $\dfrac{w}{w-1}$, so the reciprocal is
$$\frac{1}{1+\dfrac{1}{w-1}}=\frac{w-1}{w}.$$""",
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
                r"After clearing $\dfrac{1}{1-\dfrac{1}{u}}$ for $u\neq 0,1$, a candidate reports $\dfrac{u}{u-1}$.",
                True,
                r"""A nested unit fraction is cleared from the inside by reciprocating each completed layer. The inner difference is $\dfrac{u-1}{u}$, so the reciprocal is
$$\frac{1}{1-\dfrac{1}{u}}=\frac{u}{u-1}.$$""",
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
