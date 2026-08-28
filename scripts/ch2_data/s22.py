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
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8a^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4ab}$$

Result:

$$\frac{a}{x - 2}$$

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"On $uv\neq 0$, adding $\dfrac{3}{u}+\dfrac{5}{v}$ with common denominator $u+v$ is claimed to produce $\dfrac{8}{u+v}$.",
                False,
                
            ),
            (
                r"""Let $x$ be a nonzero real number. Twice the reciprocal of the sum of $x$ and the reciprocal of $x$ equals twice $x$ divided by the sum of the square of $x$ and one.""",
                True,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{x+\frac{1}{x}}=\frac{2x}{x^2+1}$$

Right-hand wording:

$$\frac{2x}{x^2+1}$$

Both translations agree, so the statement is an identity on $x\neq 0$.""",
            ),
            (
                r"After expanding $\bigl(1+\dfrac{1}{z}\bigr)^2$ for $z\neq 0$, a notebook records $1+\dfrac{2}{z}+\dfrac{1}{z^2}$.",
                True,
                
            ),
            (
                r"Combining $\dfrac{h}{k}+\dfrac{k}{h}$ on $hk\neq 0$ is rewritten as $\dfrac{(h+k)^2}{hk}$.",
                False,
                
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
                
            ),
            (
                r"Provided $x\neq 0$, the sum $\dfrac{3}{x}+\dfrac{5}{x}$ is recorded as $\dfrac{8}{x}$.",
                True,
                
            ),
            (
                r"Whenever $vw\neq 0$, rewriting $\dfrac{1}{v}+\dfrac{1}{w}$ as $\dfrac{v+w}{vw}$ is accepted.",
                True,
                
            ),
            (
                r"""For $r,s\neq 0$ and $r\neq -s$, $\dfrac{2}{r}+\dfrac{9}{s}=\dfrac{2s+9r}{r+s}$.""",
                False,
                r"""Clear with the product denominator (not the sum):

Correct identity:

$$\frac{2}{r}+\frac{9}{s}=\frac{2s+9r}{rs}$$

The printed denominator $r+s$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
            (
                r"Clearing $\dfrac{1}{3h}+\dfrac{1}{6h}$ for $h\neq 0$ is said to leave $\dfrac{1}{2h}$.",
                True,
                
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
                
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{7x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{3}{x-1}-\dfrac{1}{1-x}=\dfrac{7}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

Clear:

$$\frac{7x-1}{x^2-1}-\frac{2}{x+1}+\frac{3}{x-1}+\frac{1}{x-1}$$

Simplified left-hand side:

$$\frac{9 x + 5}{x^{2} - 1}$$

After the full clear the left-hand side is $\frac{9 x + 5}{x^{2} - 1}$, not $\dfrac{7}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Reducing $\dfrac{5v+5}{v+1}$ for $v\neq -1$ is recorded as $5$. Checking at $v=0$ is then said to recover the original value $5$.",
                True,
                
            ),
            (
                r"""For $q\neq 0$, $\dfrac{4(2q)}{(-2q)^2}=\dfrac{2}{q}$.""",
                True,
                r"""Square the monomial in the denominator first — the minus sign disappears:

Denominator:

$$(-2q)^2=4q^2$$

Quotient:

$$\frac{2}{q}$$

The printed right-hand side matches.""",
            ),
            (
                r"Factoring $\dfrac{3w-3}{w-1}$ whenever $w\neq 1$ is claimed to leave $3$. At $w=0$ that remainder is then said to match the original value $3$.",
                True,
                
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
                
            ),
            (
                r"Collapsing $\dfrac{1}{1+\dfrac{1}{z}}$ for $z\neq 0,-1$ is recorded as $\dfrac{z}{z+1}$.",
                True,
                
            ),
            (
                r"Someone rewrites $\dfrac{1}{1-\dfrac{1}{t}}$ for $t\neq 0,1$ as $\dfrac{t}{t+1}$.",
                False,
                
            ),
            (
                r"Provided $u\neq 0$, adding $1+\dfrac{1}{u}+\dfrac{1}{u^2}$ is said to equal $\dfrac{u^2+u+1}{u^2}$.",
                True,
                
            ),
            (
                r"""For $f,g,h\neq 0$, $\dfrac{3gh}{4f}\cdot\dfrac{2f^3g^2}{5}\div\dfrac{3(fg)^2}{4h}=\dfrac{2gh^2}{5}$.""",
                True,
                r"""Division by a fraction is multiplication by its reciprocal:

Rewrite:

$$\frac{3gh}{4f}\cdot\frac{2f^3g^2}{5}\cdot\frac{4h}{3f^2g^2}$$

Cancel:

$$\frac{2 g h^{2}}{5}$$

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
                
            ),
            (
                r"Cancelling in $\dfrac{y^2-36}{y-6}$ for $y\neq 6$ is recorded as leaving $y-6$. Substituting $y=0$ is then claimed to recover the original $6$.",
                False,
                
            ),
            (
                r"""For $p,q\neq 0$, $\dfrac{4}{p}+\dfrac{5}{q}=\dfrac{4q+5p}{pq}$.""",
                True,
                r"""Least common denominator of $p$ and $q$ is the product $pq$:

Clear:

$$\frac{4}{p}+\frac{5}{q}=\frac{4q+5p}{pq}$$

Numerator and denominator both match.""",
            ),
            (
                r"On $k\neq 3$, the quotient $\dfrac{k^3-27}{k-3}$ is recorded as $k^2+3k+9$. Checking at $k=0$ is then said to recover the original value $9$.",
                True,
                
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $6$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $6$ over $x-1$ and $6$ over $x+1$.""",
                False,
                r"""Clear the printed decomposition:

Combine:

$$\frac{6}{x-1}-\frac{6}{x+1}=\frac{26}{x^2-1}$$

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
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

Clear:

$$\frac{4x-2}{x^2-1}-\frac{3}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

Simplified left-hand side:

$$\frac{4}{x - 1}$$

The claimed right-hand side $\dfrac{4}{x-1}$ matches after the full clear.""",
            ),
            (
                r"Expanding $\bigl(1-\dfrac{1}{u}\bigr)^2$ on $u\neq 0$ is recorded as $1-\dfrac{2}{u}+\dfrac{1}{u^2}$.",
                True,
                
            ),
            (
                r"Provided $v\neq 0$, rewriting $\bigl(v+\dfrac{1}{v}\bigr)^2$ as $v^2+\dfrac{1}{v^2}$ is accepted.",
                False,
                
            ),
            (
                r"After cancelling a factor of $\dfrac{5y^2-45}{y-3}$ for $y\neq 3$, the remainder $5y-15$ is recorded.",
                False,
                
            ),
            (
                r"Combining $\dfrac{h}{k}+\dfrac{k}{h}-2$ on $hk\neq 0$ as $\dfrac{(h-k)^2}{hk}$ is accepted.",
                True,
                
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
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{x+\frac{1}{x}}=\frac{2x}{x^2+1}$$

Right-hand wording:

$$\frac{x}{x^2+1}$$

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"A candidate identifies $\dfrac{2hk}{h+k}$ with $\dfrac{h+k}{2}$ whenever $hk\neq 0$ and $h+k\neq 0$.",
                False,
                
            ),
            (
                r"On $tu\neq 0$, rewriting $\dfrac{t}{u}+\dfrac{u}{t}$ as $\dfrac{t^2+u^2}{tu}$ is accepted.",
                True,
                
            ),
            (
                r"""For $m,t,n\neq 0$, $\dfrac{3tn}{4m}\cdot\dfrac{2m^3t^2}{5}\div\dfrac{3(mt)^2}{4n}=\dfrac{2tn^2}{5}$.""",
                True,
                r"""Division by a fraction is multiplication by its reciprocal:

Rewrite:

$$\frac{3tn}{4m}\cdot\frac{2m^3t^2}{5}\cdot\frac{4n}{3m^2t^2}$$

Cancel:

$$\frac{2 n^{2} t}{5}$$

The printed right-hand side matches the fully cancelled monomial.""",
            ),
            (
                r"Provided $w\neq -1$, reducing $\dfrac{w^2+2w+1}{w+1}$ is recorded as $w+1$. Checking at $w=0$ is then said to recover the original value $1$.",
                True,
                
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
                
            ),
            (
                r"""For $m,n\neq 0$, $\dfrac{5}{m}+\dfrac{2}{n}=\dfrac{5n+2m}{mn}$.""",
                True,
                r"""Least common denominator of $m$ and $n$ is the product $mn$:

Clear:

$$\frac{5}{m}+\frac{2}{n}=\frac{5n+2m}{mn}$$

Numerator and denominator both match.""",
            ),
            (
                r"After clearing $\dfrac{1}{1+\dfrac{1}{w}}$ for $w\neq 0,-1$, a candidate reports $\dfrac{w}{w+1}$.",
                True,
                
            ),
            (
                r"Rewriting $\dfrac{h}{k}+\dfrac{k}{h}$ on $hk\neq 0$ as $\dfrac{(h+k)^2}{hk}$ is accepted.",
                False,
                
            ),
            (
                r"Whenever $z\neq 6$, cancelling in $\dfrac{z^2-36}{z-6}$ is treated as leaving $z-6$.",
                False,
                
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
                
            ),
            (
                r"""For $s\neq 0$, $\dfrac{4(8s)}{(-8s)^2}=\dfrac{4}{8s}$.""",
                True,
                r"""Square the monomial in the denominator first — the minus sign disappears:

Denominator:

$$(-8s)^2=64s^2$$

Quotient:

$$\frac{1}{2 s}$$

The printed right-hand side matches.""",
            ),
            (
                r"Provided $x\neq 0$, the difference $\dfrac{1}{x^2}-\dfrac{1}{(x+1)^2}$ is recorded as $\dfrac{2x+1}{x^2(x+1)^2}$.",
                True,
                
            ),
            (
                r"After cancelling $\dfrac{y^2-49}{y-7}$ for $y\neq 7$, a tutor claims the remainder $y+7$ and the original fraction take different values at $y=0$.",
                False,
                
            ),
            (
                r"""Let $u$ be a nonzero real number. Twice the reciprocal of the sum of $u$ and the reciprocal of $u$ equals twice $u$ divided by the sum of the square of $u$ and one.""",
                True,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{u+\frac{1}{u}}=\frac{2u}{u^2+1}$$

Right-hand wording:

$$\frac{2u}{u^2+1}$$

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
                
            ),
            (
                r"Clearing $1-\dfrac{5}{t+3}$ for $t\neq -3$ is recorded as $\dfrac{t-2}{t+3}$.",
                True,
                
            ),
            (
                r"""For $u,v,w\neq 0$, $\dfrac{3vw}{4u}\cdot\dfrac{2u^3v^2}{5}\div\dfrac{3(uv)^2}{4w}=\dfrac{2vw}{5}$.""",
                False,
                r"""Division by a fraction is multiplication by its reciprocal:

Rewrite:

$$\frac{3vw}{4u}\cdot\frac{2u^3v^2}{5}\cdot\frac{4w}{3u^2v^2}$$

Cancel:

$$\frac{2 v w^{2}}{5}$$

After every cancellation the surviving power of $w$ is $w^2$, so the printed right-hand side (missing that power) fails.""",
            ),
            (
                r"Whenever $v\neq \pm 3$, someone writes $\dfrac{v+3}{v-3}-\dfrac{v-3}{v+3}=\dfrac{6v}{v^2-9}$.",
                False,
                
            ),
            (
                r"Collapsing $\dfrac{1}{1-\dfrac{1}{w}}$ for $w\neq 0,1$ is recorded as $\dfrac{w}{w-1}$.",
                True,
                
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
                r"""Clear with the product denominator (not the sum):

Correct identity:

$$\frac{2}{x}+\frac{3}{y}=\frac{2y+3x}{xy}$$

The printed denominator $x+y$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
            (
                r"A notebook copies $\dfrac{1}{t}+\dfrac{1}{t+3}+\dfrac{1}{t-3}$ after excluding $t\in\{-3,0,3\}$ as $\dfrac{3t^2}{t(t^2-9)}$.",
                False,
                
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $5$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{5}{2}$ over $x-1$ and $\dfrac{5}{2}$ over $x+1$.""",
                True,
                r"""Translate, then clear:

Target:

$$\frac{5}{x^2-1}$$

Decomposition:

$$\dfrac{5}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{5}{x^2-1}$$

The coefficients survive the clear.""",
            ),
            (
                r"After factoring $\dfrac{v-3}{v^2-8v+15}$ for $v\neq 3,5$, a reduction to $\dfrac{1}{v-5}$ is recorded.",
                True,
                
            ),
            (
                r"On $w\neq \pm 3$, someone writes $\dfrac{w^2+w-6}{w^2-9}=\dfrac{w-2}{w+3}$.",
                False,
                
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
                
            ),
            (
                r"Collapsing $\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{u}}}$ for $u\neq 0,-1,-\dfrac{1}{2}$ is said to equal $\dfrac{u+1}{2u+1}$.",
                True,
                
            ),
            (
                r"Provided $v\neq 0$, putting $v+\dfrac{1}{v}$ over one denominator produces $\dfrac{v^2+1}{v}$.",
                True,
                
            ),
            (
                r"""Let $w$ be a nonzero real quantity. Twice the reciprocal of the sum of $w$ and the reciprocal of $w$ equals $w$ divided by the sum of the square of $w$ and one.""",
                False,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{w+\frac{1}{w}}=\frac{2w}{w^2+1}$$

Right-hand wording:

$$\frac{w}{w^2+1}$$

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"Whenever $t\neq 8$, reducing $\dfrac{t^2-64}{t-8}$ is claimed as $t-8$, and that remainder at $t=0$ is said to match the original $-8$.",
                False,
                
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
                
            ),
            (
                r"""For $a,c,b\neq 0$, $\dfrac{3cb}{4a}\cdot\dfrac{2a^3c^2}{5}\div\dfrac{3(ac)^2}{4b}=\dfrac{2cb}{5}$.""",
                False,
                r"""Division by a fraction is multiplication by its reciprocal:

Rewrite:

$$\frac{3cb}{4a}\cdot\frac{2a^3c^2}{5}\cdot\frac{4b}{3a^2c^2}$$

Cancel:

$$\frac{2 b^{2} c}{5}$$

After every cancellation the surviving power of $b$ is $b^2$, so the printed right-hand side (missing that power) fails.""",
            ),
            (
                r"On $v\neq 0$ and $v\neq 1$, someone writes $\dfrac{1}{v^2}-\dfrac{1}{v^3}=\dfrac{v-1}{v^2}$.",
                False,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8x^2b}{4x^2-16}}{\dfrac{4xb}{2x+4}}$ simplifies to $\dfrac{x}{x-2}$ for $x\neq\pm 2$ and $x,b\neq 0$.""",
                True,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8x^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4xb}$$

Result:

$$\frac{x}{x - 2}$$

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"Combining $\dfrac{h}{k}-\dfrac{k}{h}$ on $hk\neq 0$ is rewritten as $\dfrac{(h-k)^2}{hk}$.",
                False,
                
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
                
            ),
            (
                r"A script records $\dfrac{v^2-49}{v-7}-\dfrac{v^2-9}{v-3}+\dfrac{5}{v+2}$ for $v\notin\{-2,3,7\}$ as $\dfrac{v+7}{v+2}$.",
                False,
                
            ),
            (
                r"Provided $w\neq 8$, the cancelled remainder of $\dfrac{w^2-64}{w-8}$ is $w+8$, and at $w=0$ this is said to match the original $8$.",
                True,
                
            ),
            (
                r"On $h\neq 3$, reducing $\dfrac{h^2+6h+9}{h+3}$ is claimed to leave $h-3$.",
                False,
                
            ),
            (
                r"""For $t\neq 0$, $\dfrac{4(5t)}{(-5t)^2}=\dfrac{4}{5t}$.""",
                True,
                r"""Square the monomial in the denominator first — the minus sign disappears:

Denominator:

$$(-5t)^2=25t^2$$

Quotient:

$$\frac{4}{5 t}$$

The printed right-hand side matches.""",
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
                
            ),
            (
                r"Squaring $\bigl(1+\dfrac{1}{k}\bigr)$ for $k\neq 0$ is claimed equal to $1+\dfrac{1}{k^2}$.",
                False,
                
            ),
            (
                r"""Let $u$ be a nonzero real number. Twice the reciprocal of the sum of $u$ and the reciprocal of $u$ equals $u$ divided by the sum of the square of $u$ and one.""",
                False,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{u+\frac{1}{u}}=\frac{2u}{u^2+1}$$

Right-hand wording:

$$\frac{u}{u^2+1}$$

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"Provided $t\neq \pm 3$, reducing $\dfrac{6t}{t^2-9}\cdot\dfrac{t-3}{3}$ is claimed to leave $\dfrac{2t}{t+3}$.",
                True,
                
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{2x-2}{x^2-1}-\dfrac{1}{1+x}+\dfrac{1}{x-1}-\dfrac{1}{1-x}=\dfrac{3}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

Clear:

$$\frac{2x-2}{x^2-1}-\frac{1}{x+1}+\frac{1}{x-1}+\frac{1}{x-1}$$

Simplified left-hand side:

$$\frac{3 x + 1}{x^{2} - 1}$$

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
                r"""Division by a fraction is multiplication by its reciprocal:

Rewrite:

$$\frac{3yz}{4x}\cdot\frac{2x^3y^2}{5}\cdot\frac{4z}{3x^2y^2}$$

Cancel:

$$\frac{2 y z^{2}}{5}$$

The printed right-hand side matches the fully cancelled monomial.""",
            ),
            (
                r"On $hk\neq 0$ and $h\neq k$, someone writes $\dfrac{h}{h-k}+\dfrac{k}{k-h}=0$.",
                False,
                
            ),
            (
                r"Provided $v\neq 0$, the halved form $\dfrac{(v+5)^2-(v-5)^2}{2v}$ equals $10$.",
                True,
                
            ),
            (
                r"Whenever $w\neq z$, rewriting $\dfrac{w}{w-z}-\dfrac{z}{w-z}$ as $1$ is accepted.",
                True,
                
            ),
            (
                r"Combining $\dfrac{3}{y}+\dfrac{8}{y}$ for $y\neq 0$ with LCD taken as $y+y=2y$ is claimed to produce $\dfrac{11}{2y}$.",
                False,
                
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
                r"""Clear the printed decomposition:

Combine:

$$\frac{3}{x-1}-\frac{3}{x+1}=\frac{23}{x^2-1}$$

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.""",
            ),
            (
                r"A notebook records $\dfrac{t^2-36}{t^2-t-30}=\dfrac{t-6}{t+5}$ whenever $t\neq 6$ and $t\neq -5$.",
                False,
                
            ),
            (
                r"Factoring both ends of $\dfrac{u^2-8u+15}{u^2-9}$ reduces it to $\dfrac{u-5}{u+3}$ off $u=\pm 3$.",
                True,
                
            ),
            (
                r"""For $p\neq 0$, $\dfrac{4(8p)}{(-8p)^2}=\dfrac{4}{8p}$.""",
                True,
                r"""Square the monomial in the denominator first — the minus sign disappears:

Denominator:

$$(-8p)^2=64p^2$$

Quotient:

$$\frac{1}{2 p}$$

The printed right-hand side matches.""",
            ),
            (
                r"With $w\neq 1$, someone writes $\dfrac{w^3-1}{w-1}=w^2-w+1$.",
                False,
                
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
                
            ),
            (
                r"""Let $k$ be a nonzero real letter. Twice the reciprocal of the sum of $k$ and the reciprocal of $k$ equals twice $k$ divided by the sum of the square of $k$ and one.""",
                True,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{k+\frac{1}{k}}=\frac{2k}{k^2+1}$$

Right-hand wording:

$$\frac{2k}{k^2+1}$$

Both translations agree, so the statement is an identity on $k\neq 0$.""",
            ),
            (
                r"The companion $\dfrac{v^2-10v+25}{v-5}$ is reduced to $v-5$ for $v\neq 5$, and at $v=0$ the remainder is said to equal the original $-5$.",
                True,
                
            ),
            (
                r"Provided $h\neq -k$ and $h\neq k$, the quotient $\dfrac{h^2-k^2}{(h+k)^2}$ equals $\dfrac{h+k}{h-k}$.",
                False,
                
            ),
            (
                r"On $z\neq -5$, someone writes $\dfrac{z^2+25}{z+5}=z+5$.",
                False,
                
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
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8u^2b}{4x^2-16}}{\dfrac{4ub}{2x+4}}$ simplifies to $\dfrac{u}{x+2}$ for $x\neq\pm 2$ and $u,b\neq 0$.""",
                False,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8u^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4ub}$$

Result:

$$\frac{u}{x - 2}$$

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"After cancelling $\dfrac{z^3-125}{z-5}$ for $z\neq 5$, the quadratic $z^2+5z+25$ is recorded, and at $z=0$ it is said to match the original $25$.",
                True,
                
            ),
            (
                r"Provided $xy\neq 0$ and $3y+5x\neq 0$, someone writes $\dfrac{\dfrac{3}{x}-\dfrac{5}{y}}{\dfrac{3}{x}+\dfrac{5}{y}}=\dfrac{3x-5y}{3x+5y}$.",
                False,
                
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $6$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $3$ over $x-1$ and $3$ over $x+1$.""",
                True,
                r"""Translate, then clear:

Target:

$$\frac{6}{x^2-1}$$

Decomposition:

$$3\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{6}{x^2-1}$$

The coefficients survive the clear.""",
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
                
            ),
            (
                r"Someone treats $\dfrac{5\cdot(5t)}{(-5t)^2}$ for $t\neq 0$ as $-\dfrac{1}{t}$.",
                False,
                
            ),
            (
                r"""For $q\neq 0$, $\dfrac{4(3q)}{(-3q)^2}=-\dfrac{4}{3q}$.""",
                False,
                r"""Square the monomial in the denominator first — the minus sign disappears:

Denominator:

$$(-3q)^2=9q^2$$

Quotient:

$$\frac{4}{3 q}$$

A minus sign on the right-hand side cannot survive: the squared factor is positive.""",
            ),
            (
                r"Provided $v\neq 3$, reducing $\dfrac{15}{5v-15}$ is claimed to leave $\dfrac{3}{v-3}$.",
                True,
                
            ),
            (
                r"Combining $\dfrac{h}{k}+\dfrac{k}{h}-2$ on $hk\neq 0$ as $\dfrac{(h+k)^2}{hk}$ is accepted.",
                False,
                
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
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{w+\frac{1}{w}}=\frac{2w}{w^2+1}$$

Right-hand wording:

$$\frac{2w}{w^2+1}$$

Both translations agree, so the statement is an identity on $w\neq 0$.""",
            ),
            (
                r"Identifying $\dfrac{2hk}{h+k}$ with $\dfrac{h+k}{2}$ whenever $hk\neq 0$ and $h+k\neq 0$.",
                False,
                
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{3x-3}{x^2-1}-\dfrac{4}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{5}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

Clear:

$$\frac{3x-3}{x^2-1}-\frac{4}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

Simplified left-hand side:

$$\frac{2 \left(x + 2\right)}{x^{2} - 1}$$

After the full clear the left-hand side is $\frac{2 \left(x + 2\right)}{x^{2} - 1}$, not $\dfrac{5}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Clearing the three-layer plus nest $1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{k}}}$ for $k\neq 0,-1,-\dfrac{1}{2}$ is said to leave $\dfrac{3k+2}{2k+1}$.",
                True,
                
            ),
            (
                r"On $w\neq 0$, $\bigl(1-\dfrac{1}{w}\bigr)^2$ is recorded as $1-\dfrac{1}{w^2}$.",
                False,
                
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
                
            ),
            (
                r"A script writes $\dfrac{1}{u}+\dfrac{1}{v}+\dfrac{1}{w}=\dfrac{u+v+w}{uvw}$ whenever $uvw\neq 0$.",
                False,
                
            ),
            (
                r"Adding $\dfrac{1}{3x}+\dfrac{1}{6x}$ for $x\neq 0$ is said to leave $\dfrac{1}{2x}$.",
                True,
                
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $7$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{7}{2}$ over $x-1$ and $\dfrac{7}{2}$ over $x+1$.""",
                True,
                r"""Translate, then clear:

Target:

$$\frac{7}{x^2-1}$$

Decomposition:

$$\dfrac{7}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{7}{x^2-1}$$

The coefficients survive the clear.""",
            ),
            (
                r"On $h\neq \pm k$, someone writes $\dfrac{3h-3k}{h^2-k^2}=\dfrac{3}{h-k}$.",
                False,
                
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
                
            ),
            (
                r"""For $r\neq 0$, $\dfrac{4(6r)}{(-6r)^2}=-\dfrac{4}{6r}$.""",
                False,
                r"""Square the monomial in the denominator first — the minus sign disappears:

Denominator:

$$(-6r)^2=36r^2$$

Quotient:

$$\frac{2}{3 r}$$

A minus sign on the right-hand side cannot survive: the squared factor is positive.""",
            ),
            (
                r"Subtracting neighbouring unit factors $\dfrac{1}{u-3}-\dfrac{1}{u-5}$ equals $\dfrac{-2}{(u-3)(u-5)}$ off $u=3,5$.",
                True,
                
            ),
            (
                r"""For $p,q\neq 0$ and $p\neq -q$, $\dfrac{4}{p}+\dfrac{5}{q}=\dfrac{4q+5p}{p+q}$.""",
                False,
                r"""Clear with the product denominator (not the sum):

Correct identity:

$$\frac{4}{p}+\frac{5}{q}=\frac{4q+5p}{pq}$$

The printed denominator $p+q$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
            (
                r"With $w\neq \pm 3$, someone writes $\dfrac{w^2+w-6}{w^2-9}=\dfrac{w+2}{w-3}$.",
                False,
                
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
                
            ),
            (
                r"After squaring $\bigl(1+\dfrac{3}{x}\bigr)$ for $x\neq 0$, a candidate drops the cross term and records $1+\dfrac{9}{x^2}$.",
                False,
                
            ),
            (
                r"Bare opposite unit fractions $\dfrac{1}{v-w}+\dfrac{1}{w-v}$ are claimed to vanish for every $v\neq w$.",
                True,
                
            ),
            (
                r"Provided $hk\neq 0$ and $h\neq -k$, the split $\dfrac{1}{h(h+k)}+\dfrac{1}{k(h+k)}$ equals $\dfrac{1}{hk}$.",
                True,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8u^2b}{4x^2-16}}{\dfrac{4ub}{2x+4}}$ simplifies to $\dfrac{u}{x-2}$ for $x\neq\pm 2$ and $u,b\neq 0$.""",
                True,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8u^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4ub}$$

Result:

$$\frac{u}{x - 2}$$

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
                
            ),
            (
                r"The three-pole sum $\dfrac{1}{u}+\dfrac{1}{u+5}+\dfrac{1}{u-5}$ is copied as $\dfrac{3u^2}{u(u^2-25)}$ after excluding $u\in\{-5,0,5\}$.",
                False,
                
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $4$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $4$ over $x-1$ and $4$ over $x+1$.""",
                False,
                r"""Clear the printed decomposition:

Combine:

$$\frac{4}{x-1}-\frac{4}{x+1}=\frac{24}{x^2-1}$$

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.""",
            ),
            (
                r"After reducing $\dfrac{w^4-1}{w^2-1}$ whenever $w^2\neq 1$, a remainder $w^2+1$ is recorded.",
                True,
                
            ),
            (
                r"""For $u,w,v\neq 0$, $\dfrac{3wv}{4u}\cdot\dfrac{2u^3w^2}{5}\div\dfrac{3(uw)^2}{4v}=\dfrac{2wv}{5}$.""",
                False,
                r"""Division by a fraction is multiplication by its reciprocal:

Rewrite:

$$\frac{3wv}{4u}\cdot\frac{2u^3w^2}{5}\cdot\frac{4v}{3u^2w^2}$$

Cancel:

$$\frac{2 v^{2} w}{5}$$

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
                r"""Square the monomial in the denominator first — the minus sign disappears:

Denominator:

$$(-2s)^2=4s^2$$

Quotient:

$$\frac{2}{s}$$

The printed right-hand side matches.""",
            ),
            (
                r"Subtracting in the opposite order, $\dfrac{k}{h}-\dfrac{h}{k}$ for $hk\neq 0$ is claimed to equal $\dfrac{h^2-k^2}{hk}$.",
                False,
                
            ),
            (
                r"The stacked ratio $\dfrac{\dfrac{3}{x}-\dfrac{5}{y}}{\dfrac{1}{x}+\dfrac{1}{y}}$ reduces to $\dfrac{3y-5x}{x+y}$ for $xy\neq 0$ and $x\neq -y$.",
                True,
                
            ),
            (
                r"Provided $t\neq u$, the cubic ratio $\dfrac{t^3-u^3}{t^2+tu+u^2}$ equals $t-u$.",
                True,
                
            ),
            (
                r"A swapped-ratio difference $\dfrac{v+3}{v-3}-\dfrac{v-3}{v+3}=\dfrac{6v}{v^2-9}$ once $v\neq\pm 3$.",
                False,
                
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
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{3}{1-x}=\frac{3}{x-1}$$

Clear:

$$\frac{5x-1}{x^2-1}-\frac{2}{x+1}+\frac{1}{x-1}+\frac{3}{x-1}$$

Simplified left-hand side:

$$\frac{7 x + 5}{x^{2} - 1}$$

After the full clear the left-hand side is $\frac{7 x + 5}{x^{2} - 1}$, not $\dfrac{6}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Cancelling $\dfrac{u^3-125}{u-5}$ for $u\neq 5$ is recorded as $u^2+5u+25$, and at $u=0$ that remainder is said to match the original $25$.",
                True,
                
            ),
            (
                r"Combining $\dfrac{6}{t}+\dfrac{8}{u}$ on $tu\neq 0$ over LCD $t+u$ is claimed to produce $\dfrac{14}{t+u}$.",
                False,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8p^2b}{4x^2-16}}{\dfrac{4pb}{2x+4}}$ simplifies to $\dfrac{p}{x+2}$ for $x\neq\pm 2$ and $p,b\neq 0$.""",
                False,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8p^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4pb}$$

Result:

$$\frac{p}{x - 2}$$

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"On $w\neq 0$, expanding $\bigl(w-\dfrac{1}{w}\bigr)^2$ is recorded as $w^2-2+\dfrac{1}{w^2}$.",
                True,
                
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
                
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $1$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $1$ over $x-1$ and $1$ over $x+1$.""",
                False,
                r"""Clear the printed decomposition:

Combine:

$$\frac{1}{x-1}-\frac{1}{x+1}=\frac{21}{x^2-1}$$

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.""",
            ),
            (
                r"Subtracting $\dfrac{1}{(u-3)^2}-\dfrac{1}{(u+3)^2}$ produces $\dfrac{12u}{(u^2-9)^2}$ off $u=\pm 3$.",
                True,
                
            ),
            (
                r"The squared-difference quotient $\dfrac{(v-w)^2}{v^2-w^2}$ reduces to $\dfrac{v-w}{v+w}$ for $v\neq\pm w$.",
                True,
                
            ),
            (
                r"On $z\neq 5$, someone writes $\dfrac{z^2-25}{z-5}=z-5$.",
                False,
                
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
                
            ),
            (
                r"""For $c,d\neq 0$ and $c\neq -d$, $\dfrac{8}{c}+\dfrac{3}{d}=\dfrac{8d+3c}{c+d}$.""",
                False,
                r"""Clear with the product denominator (not the sum):

Correct identity:

$$\frac{8}{c}+\frac{3}{d}=\frac{8d+3c}{cd}$$

The printed denominator $c+d$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
            (
                r"After cancelling $\dfrac{v^3-27}{v-3}$ for $v\neq 3$ as $v^2+3v+9$, a second rewriting $v^2-3v+9$ is treated as the same polynomial.",
                False,
                
            ),
            (
                r"On $hk\neq 0$, rewriting $\dfrac{h}{k}+\dfrac{k}{h}+2$ as $\dfrac{(h+k)^2}{hk}$ is accepted.",
                True,
                
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{7x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{3}{x-1}-\dfrac{1}{1-x}=\dfrac{5}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

Clear:

$$\frac{7x-1}{x^2-1}-\frac{2}{x+1}+\frac{3}{x-1}+\frac{1}{x-1}$$

Simplified left-hand side:

$$\frac{9 x + 5}{x^{2} - 1}$$

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
                
            ),
            (
                r"On $yz\neq 0$, adding $\dfrac{7}{y}+\dfrac{3}{z}$ with common denominator $y+z$ is claimed to produce $\dfrac{10}{y+z}$.",
                False,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8a^2b}{4x^2-16}}{\dfrac{4ab}{2x+4}}$ simplifies to $\dfrac{a}{x+2}$ for $x\neq\pm 2$ and $a,b\neq 0$.""",
                False,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8a^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4ab}$$

Result:

$$\frac{a}{x - 2}$$

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"Whenever $x\neq 0$, $\bigl(1+\dfrac{1}{x}\bigr)^2$ is treated as $1+\dfrac{1}{x^2}$.",
                False,
                
            ),
            (
                r"Combining $\dfrac{1}{h^2}-\dfrac{1}{k^2}$ on $hk\neq 0$ as $\dfrac{k^2-h^2}{h^2k^2}$ is accepted.",
                True,
                
            ),
        ],
        overview=r"A closing mix: a cubic with the wrong middle sign that a test at $0$ fails to catch, an LCD-as-sum trap, a minus nest, a binomial square missing its cross term, and a genuine difference of reciprocal squares.",
    ),
]
