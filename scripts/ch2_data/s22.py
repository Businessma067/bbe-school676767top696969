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
                r"""After cancelling the linear factor, $\dfrac{j^3-8}{j-2}$ is recorded as $j^2+4$ for $j\neq 2$. A single substitution $j=0$ is then cited as confirmation because both sides agree at that point.""",
                False,
                r"""Difference of cubes yields three terms, not two:

Correct quotient:

$$\frac{j^3-8}{j-2}=j^2+2j+4$$

Printed claim:

$$j^2+4$$

At $j=0$ both may agree (constant term $4$), yet at $j=1$ the linear term $2$ already separates them.""",
            ),
            (
                r"On $uv\neq 0$, adding $\dfrac{3}{u}+\dfrac{5}{v}$ with common denominator $u+v$ is claimed to produce $\dfrac{8}{u+v}$.",
                False,
                
            ),
            (
                r"""For $x\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{x}{x-1}-\dfrac{x-1}{x}}{\dfrac{x}{x-1}+\dfrac{x-1}{x}}$ is reduced to $\dfrac{2x-1}{2x^2-2x+1}$ after clearing the inner denominators once.""",
                True,
                r"""Clear each inner pair over $x(x-1)$:

Numerator:

$$\frac{x}{x-1}-\frac{x-1}{x}=\frac{x^2-(x-1)^2}{x(x-1)}=\frac{2x-1}{x(x-1)}$$

Denominator:

$$\frac{x}{x-1}+\frac{x-1}{x}=\frac{x^2+(x-1)^2}{x(x-1)}=\frac{2x^2-2x+1}{x(x-1)}$$

Quotient:

$$\frac{2x-1}{2x^2-2x+1}$$

The printed target matches the reduced form.""",
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
                r"""After cancelling the linear factor, $\dfrac{j^3-216}{j-6}$ is recorded as $j^2+36$ for $j\neq 6$. A single substitution $j=0$ is then cited as confirmation because both sides agree at that point.""",
                False,
                r"""Difference of cubes yields three terms, not two:

Correct quotient:

$$\frac{j^3-216}{j-6}=j^2+6j+36$$

Printed claim:

$$j^2+36$$

At $j=0$ both may agree (constant term $36$), yet at $j=1$ the linear term $6$ already separates them.""",
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
                r"""On $x^2\neq 1$, decomposing $\dfrac{5}{x^2-1}$ as $\dfrac{5}{2}\dfrac{1}{x-1}-\dfrac{5}{2}\dfrac{1}{x+1}$ is accepted after clearing the common denominator $(x-1)(x+1)$.""",
                True,
                r"""Difference of squares in the denominator:

Factor:

$$x^2-1=(x-1)(x+1)$$

Clear:

$$\dfrac{5}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{\dfrac{5}{2}(x+1)-\dfrac{5}{2}(x-1)}{(x-1)(x+1)}=\frac{5}{x^2-1}$$

The coefficients match.""",
            ),
            (
                r"Reducing $\dfrac{5v+5}{v+1}$ for $v\neq -1$ is recorded as $5$. Checking at $v=0$ is then said to recover the original value $5$.",
                True,
                
            ),
            (
                r"""On $cde\neq 0$, adding $\dfrac{2}{c}+\dfrac{3}{d}+\dfrac{5}{e}$ with common denominator $c+d+e$ is claimed to give $\dfrac{10}{c+d+e}$.""",
                False,
                r"""Least common denominator of $c$, $d$, $e$ is the product, not the sum:

Correct combination:

$$\frac{2}{c}+\frac{3}{d}+\frac{5}{e}=\frac{2de+3ce+5cd}{cde}$$

The printed $\dfrac{10}{c+d+e}$ agrees only on a thin set, not identically.""",
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
                r"""On $x^2\neq 1$, decomposing $\dfrac{7}{x^2-1}$ as $\dfrac{7}{2}\dfrac{1}{x-1}-\dfrac{7}{2}\dfrac{1}{x+1}$ is accepted after clearing the common denominator $(x-1)(x+1)$.""",
                True,
                r"""Difference of squares in the denominator:

Factor:

$$x^2-1=(x-1)(x+1)$$

Clear:

$$\dfrac{7}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{\dfrac{7}{2}(x+1)-\dfrac{7}{2}(x-1)}{(x-1)(x+1)}=\frac{7}{x^2-1}$$

The coefficients match.""",
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
                r"""For $y\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{y}{y-1}-\dfrac{y-1}{y}}{\dfrac{y}{y-1}+\dfrac{y-1}{y}}$ is reduced to $\dfrac{2y-1}{2y^2-2y}$ after clearing the inner denominators once.""",
                False,
                r"""Clear each inner pair over $y(y-1)$:

Numerator:

$$\frac{y}{y-1}-\frac{y-1}{y}=\frac{y^2-(y-1)^2}{y(y-1)}=\frac{2y-1}{y(y-1)}$$

Denominator:

$$\frac{y}{y-1}+\frac{y-1}{y}=\frac{y^2+(y-1)^2}{y(y-1)}=\frac{2y^2-2y+1}{y(y-1)}$$

Quotient:

$$\frac{2y-1}{2y^2-2y+1}$$

The printed denominator drops the constant $+1$, so the claim is false.""",
            ),
            (
                r"On $k\neq 3$, the quotient $\dfrac{k^3-27}{k-3}$ is recorded as $k^2+3k+9$. Checking at $k=0$ is then said to recover the original value $9$.",
                True,
                
            ),
            (
                r"""After cancelling the linear factor, $\dfrac{j^3-27}{j-3}$ is recorded as $j^2+3j+9$ for $j\neq 3$. A single substitution $j=0$ is then cited as confirmation because both sides agree at that point, and the algebraic identity is in fact correct.""",
                True,
                r"""Difference of cubes with $3^3$ in the constant term:

Factor:

$$\frac{j^3-27}{j-3}=j^2+3j+9$$

The printed quotient matches. Agreement at $j=0$ is consistent but not the reason the identity holds.""",
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
                r"""Combining $\dfrac{1}{s}+\dfrac{1}{t}+\dfrac{1}{u}$ on $stu\neq 0$ with least common denominator $stu$ produces $\dfrac{tu+su+st}{stu}$. The sum-of-denominators shortcut $s+t+u$ is rejected.""",
                True,
                r"""The LCD of three monomial denominators is the product $stu$:

Clear:

$$\frac{1}{s}+\frac{1}{t}+\frac{1}{u}=\frac{tu+su+st}{stu}$$

Using $s+t+u$ as a common denominator is not an identity.""",
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
                r"""For $r\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{r}{r-1}-\dfrac{r-1}{r}}{\dfrac{r}{r-1}+\dfrac{r-1}{r}}$ is reduced to $\dfrac{2r-1}{2r^2-2r}$ after clearing the inner denominators once.""",
                False,
                r"""Clear each inner pair over $r(r-1)$:

Numerator:

$$\frac{r}{r-1}-\frac{r-1}{r}=\frac{r^2-(r-1)^2}{r(r-1)}=\frac{2r-1}{r(r-1)}$$

Denominator:

$$\frac{r}{r-1}+\frac{r-1}{r}=\frac{r^2+(r-1)^2}{r(r-1)}=\frac{2r^2-2r+1}{r(r-1)}$$

Quotient:

$$\frac{2r-1}{2r^2-2r+1}$$

The printed denominator drops the constant $+1$, so the claim is false.""",
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
                r"""Combining $\dfrac{1}{r}+\dfrac{1}{s}+\dfrac{1}{t}$ on $rst\neq 0$ with least common denominator $rst$ produces $\dfrac{st+rt+rs}{rst}$. The sum-of-denominators shortcut $r+s+t$ is rejected.""",
                True,
                r"""The LCD of three monomial denominators is the product $rst$:

Clear:

$$\frac{1}{r}+\frac{1}{s}+\frac{1}{t}=\frac{st+rt+rs}{rst}$$

Using $r+s+t$ as a common denominator is not an identity.""",
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
                r"""After cancelling the linear factor, $\dfrac{t^3-125}{t-5}$ is recorded as $t^2+25$ for $t\neq 5$. A single substitution $t=0$ is then cited as confirmation because both sides agree at that point.""",
                False,
                r"""Difference of cubes yields three terms, not two:

Correct quotient:

$$\frac{t^3-125}{t-5}=t^2+5t+25$$

Printed claim:

$$t^2+25$$

At $t=0$ both may agree (constant term $25$), yet at $t=1$ the linear term $5$ already separates them.""",
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
                r"""On $uvw\neq 0$, adding $\dfrac{2}{u}+\dfrac{3}{v}+\dfrac{5}{w}$ with common denominator $u+v+w$ is claimed to give $\dfrac{10}{u+v+w}$.""",
                False,
                r"""Least common denominator of $u$, $v$, $w$ is the product, not the sum:

Correct combination:

$$\frac{2}{u}+\frac{3}{v}+\frac{5}{w}=\frac{2vw+3uw+5uv}{uvw}$$

The printed $\dfrac{10}{u+v+w}$ agrees only on a thin set, not identically.""",
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
                r"""After cancelling the linear factor, $\dfrac{j^3-64}{j-4}$ is recorded as $j^2+16$ for $j\neq 4$. A single substitution $j=0$ is then cited as confirmation because both sides agree at that point.""",
                False,
                r"""Difference of cubes yields three terms, not two:

Correct quotient:

$$\frac{j^3-64}{j-4}=j^2+4j+16$$

Printed claim:

$$j^2+16$$

At $j=0$ both may agree (constant term $16$), yet at $j=1$ the linear term $4$ already separates them.""",
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
                r"""On $x^2\neq 1$, decomposing $\dfrac{2}{x^2-1}$ as $1\dfrac{1}{x-1}-1\dfrac{1}{x+1}$ is accepted after clearing the common denominator $(x-1)(x+1)$.""",
                True,
                r"""Difference of squares in the denominator:

Factor:

$$x^2-1=(x-1)(x+1)$$

Clear:

$$1\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{1(x+1)-1(x-1)}{(x-1)(x+1)}=\frac{2}{x^2-1}$$

The coefficients match.""",
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
                r"""For $s\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{s}{s-1}-\dfrac{s-1}{s}}{\dfrac{s}{s-1}+\dfrac{s-1}{s}}$ is reduced to $\dfrac{2s-1}{2s^2-2s+1}$ after clearing the inner denominators once.""",
                True,
                r"""Clear each inner pair over $s(s-1)$:

Numerator:

$$\frac{s}{s-1}-\frac{s-1}{s}=\frac{s^2-(s-1)^2}{s(s-1)}=\frac{2s-1}{s(s-1)}$$

Denominator:

$$\frac{s}{s-1}+\frac{s-1}{s}=\frac{s^2+(s-1)^2}{s(s-1)}=\frac{2s^2-2s+1}{s(s-1)}$$

Quotient:

$$\frac{2s-1}{2s^2-2s+1}$$

The printed target matches the reduced form.""",
            ),
            (
                r"A notebook copies $\dfrac{1}{t}+\dfrac{1}{t+3}+\dfrac{1}{t-3}$ after excluding $t\in\{-3,0,3\}$ as $\dfrac{3t^2}{t(t^2-9)}$.",
                False,
                
            ),
            (
                r"""After cancelling the linear factor, $\dfrac{w^3-8}{w-2}$ is recorded as $w^2+2w+4$ for $w\neq 2$. A single substitution $w=0$ is then cited as confirmation because both sides agree at that point, and the algebraic identity is in fact correct.""",
                True,
                r"""Difference of cubes with $2^3$ in the constant term:

Factor:

$$\frac{w^3-8}{w-2}=w^2+2w+4$$

The printed quotient matches. Agreement at $w=0$ is consistent but not the reason the identity holds.""",
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
                r"""For $n\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{n}{n-1}-\dfrac{n-1}{n}}{\dfrac{n}{n-1}+\dfrac{n-1}{n}}$ is reduced to $\dfrac{2n-1}{2n^2-2n+1}$ after clearing the inner denominators once.""",
                True,
                r"""Clear each inner pair over $n(n-1)$:

Numerator:

$$\frac{n}{n-1}-\frac{n-1}{n}=\frac{n^2-(n-1)^2}{n(n-1)}=\frac{2n-1}{n(n-1)}$$

Denominator:

$$\frac{n}{n-1}+\frac{n-1}{n}=\frac{n^2+(n-1)^2}{n(n-1)}=\frac{2n^2-2n+1}{n(n-1)}$$

Quotient:

$$\frac{2n-1}{2n^2-2n+1}$$

The printed target matches the reduced form.""",
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
                r"""Combining $\dfrac{1}{x}+\dfrac{1}{y}+\dfrac{1}{z}$ on $xyz\neq 0$ with least common denominator $xyz$ produces $\dfrac{yz+xz+xy}{xyz}$. The sum-of-denominators shortcut $x+y+z$ is rejected.""",
                True,
                r"""The LCD of three monomial denominators is the product $xyz$:

Clear:

$$\frac{1}{x}+\frac{1}{y}+\frac{1}{z}=\frac{yz+xz+xy}{xyz}$$

Using $x+y+z$ as a common denominator is not an identity.""",
            ),
            (
                r"On $v\neq 0$ and $v\neq 1$, someone writes $\dfrac{1}{v^2}-\dfrac{1}{v^3}=\dfrac{v-1}{v^2}$.",
                False,
                
            ),
            (
                r"""A marker writes $\dfrac{4}{x^2-1}=\dfrac{4}{x-1}-\dfrac{4}{x+1}$ for $x^2\neq 1$, omitting the factor $\tfrac{1}{2}$ in each partial term.""",
                False,
                r"""Clearing the printed right-hand side gives

Combine:

$$\frac{4}{x-1}-\frac{4}{x+1}=\frac{4(x+1)-4(x-1)}{x^2-1}=\frac{24}{x^2-1)}$$

The result is $\dfrac{24}{x^2-1}$, twice the intended left-hand side.""",
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
                r"""Combining $\dfrac{1}{m}+\dfrac{1}{n}+\dfrac{1}{p}$ on $mnp\neq 0$ with least common denominator $mnp$ produces $\dfrac{np+mp+mn}{mnp}$. The sum-of-denominators shortcut $m+n+p$ is rejected.""",
                True,
                r"""The LCD of three monomial denominators is the product $mnp$:

Clear:

$$\frac{1}{m}+\frac{1}{n}+\frac{1}{p}=\frac{np+mp+mn}{mnp}$$

Using $m+n+p$ as a common denominator is not an identity.""",
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
                r"""After cancelling the linear factor, $\dfrac{w^3-27}{w-3}$ is recorded as $w^2+9$ for $w\neq 3$. A single substitution $w=0$ is then cited as confirmation because both sides agree at that point.""",
                False,
                r"""Difference of cubes yields three terms, not two:

Correct quotient:

$$\frac{w^3-27}{w-3}=w^2+3w+9$$

Printed claim:

$$w^2+9$$

At $w=0$ both may agree (constant term $9$), yet at $w=1$ the linear term $3$ already separates them.""",
            ),
            (
                r"Provided $t\neq \pm 3$, reducing $\dfrac{6t}{t^2-9}\cdot\dfrac{t-3}{3}$ is claimed to leave $\dfrac{2t}{t+3}$.",
                True,
                
            ),
            (
                r"""For $h\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{h}{h-1}-\dfrac{h-1}{h}}{\dfrac{h}{h-1}+\dfrac{h-1}{h}}$ is reduced to $\dfrac{2h-1}{2h^2-2h}$ after clearing the inner denominators once.""",
                False,
                r"""Clear each inner pair over $h(h-1)$:

Numerator:

$$\frac{h}{h-1}-\frac{h-1}{h}=\frac{h^2-(h-1)^2}{h(h-1)}=\frac{2h-1}{h(h-1)}$$

Denominator:

$$\frac{h}{h-1}+\frac{h-1}{h}=\frac{h^2+(h-1)^2}{h(h-1)}=\frac{2h^2-2h+1}{h(h-1)}$$

Quotient:

$$\frac{2h-1}{2h^2-2h+1}$$

The printed denominator drops the constant $+1$, so the claim is false.""",
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
                r"""On $x^2\neq 1$, decomposing $\dfrac{1}{x^2-1}$ as $\dfrac{1}{2}\dfrac{1}{x-1}-\dfrac{1}{2}\dfrac{1}{x+1}$ is accepted after clearing the common denominator $(x-1)(x+1)$.""",
                True,
                r"""Difference of squares in the denominator:

Factor:

$$x^2-1=(x-1)(x+1)$$

Clear:

$$\dfrac{1}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{\dfrac{1}{2}(x+1)-\dfrac{1}{2}(x-1)}{(x-1)(x+1)}=\frac{1}{x^2-1}$$

The coefficients match.""",
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
                r"""After cancelling the linear factor, $\dfrac{j^3-216}{j-6}$ is recorded as $j^2+36$ for $j\neq 6$. A single substitution $j=0$ is then cited as confirmation because both sides agree at that point, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Difference of cubes yields three terms, not two:

Correct quotient:

$$\frac{j^3-216}{j-6}=j^2+6j+36$$

Printed claim:

$$j^2+36$$

At $j=0$ both may agree (constant term $36$), yet at $j=1$ the linear term $6$ already separates them.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""On $x^2\neq 1$, decomposing $\dfrac{3}{x^2-1}$ as $\dfrac{3}{2}\dfrac{1}{x-1}-\dfrac{3}{2}\dfrac{1}{x+1}$ is accepted after clearing the common denominator $(x-1)(x+1)$.""",
                True,
                r"""Difference of squares in the denominator:

Factor:

$$x^2-1=(x-1)(x+1)$$

Clear:

$$\dfrac{3}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{\dfrac{3}{2}(x+1)-\dfrac{3}{2}(x-1)}{(x-1)(x+1)}=\frac{3}{x^2-1}$$

The coefficients match.""",
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
                r"""For $q\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{q}{q-1}-\dfrac{q-1}{q}}{\dfrac{q}{q-1}+\dfrac{q-1}{q}}$ is reduced to $\dfrac{2q-1}{2q^2-2q+1}$ after clearing the inner denominators once.""",
                True,
                r"""Clear each inner pair over $q(q-1)$:

Numerator:

$$\frac{q}{q-1}-\frac{q-1}{q}=\frac{q^2-(q-1)^2}{q(q-1)}=\frac{2q-1}{q(q-1)}$$

Denominator:

$$\frac{q}{q-1}+\frac{q-1}{q}=\frac{q^2+(q-1)^2}{q(q-1)}=\frac{2q^2-2q+1}{q(q-1)}$$

Quotient:

$$\frac{2q-1}{2q^2-2q+1}$$

The printed target matches the reduced form.""",
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
                r"""On $x^2\neq 1$, decomposing $\dfrac{7}{x^2-1}$ as $\dfrac{7}{2}\dfrac{1}{x-1}-\dfrac{7}{2}\dfrac{1}{x+1}$ is accepted after clearing the common denominator $(x-1)(x+1)$, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Difference of squares in the denominator:

Factor:

$$x^2-1=(x-1)(x+1)$$

Clear:

$$\dfrac{7}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{\dfrac{7}{2}(x+1)-\dfrac{7}{2}(x-1)}{(x-1)(x+1)}=\frac{7}{x^2-1}$$

The coefficients match.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""For $k\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{k}{k-1}-\dfrac{k-1}{k}}{\dfrac{k}{k-1}+\dfrac{k-1}{k}}$ is reduced to $\dfrac{2k-1}{2k^2-2k+1}$ after clearing the inner denominators once.""",
                True,
                r"""Clear each inner pair over $k(k-1)$:

Numerator:

$$\frac{k}{k-1}-\frac{k-1}{k}=\frac{k^2-(k-1)^2}{k(k-1)}=\frac{2k-1}{k(k-1)}$$

Denominator:

$$\frac{k}{k-1}+\frac{k-1}{k}=\frac{k^2+(k-1)^2}{k(k-1)}=\frac{2k^2-2k+1}{k(k-1)}$$

Quotient:

$$\frac{2k-1}{2k^2-2k+1}$$

The printed target matches the reduced form.""",
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
                r"""Combining $\dfrac{1}{p}+\dfrac{1}{q}+\dfrac{1}{r}$ on $pqr\neq 0$ with least common denominator $pqr$ produces $\dfrac{qr+pr+pq}{pqr}$. The sum-of-denominators shortcut $p+q+r$ is rejected.""",
                True,
                r"""The LCD of three monomial denominators is the product $pqr$:

Clear:

$$\frac{1}{p}+\frac{1}{q}+\frac{1}{r}=\frac{qr+pr+pq}{pqr}$$

Using $p+q+r$ as a common denominator is not an identity.""",
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
                r"""After cancelling the linear factor, $\dfrac{j^3-343}{j-7}$ is recorded as $j^2+7j+49$ for $j\neq 7$. A single substitution $j=0$ is then cited as confirmation because both sides agree at that point, and the algebraic identity is in fact correct.""",
                True,
                r"""Difference of cubes with $7^3$ in the constant term:

Factor:

$$\frac{j^3-343}{j-7}=j^2+7j+49$$

The printed quotient matches. Agreement at $j=0$ is consistent but not the reason the identity holds.""",
            ),
            (
                r"Identifying $\dfrac{2hk}{h+k}$ with $\dfrac{h+k}{2}$ whenever $hk\neq 0$ and $h+k\neq 0$.",
                False,
                
            ),
            (
                r"""For $w\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{w}{w-1}-\dfrac{w-1}{w}}{\dfrac{w}{w-1}+\dfrac{w-1}{w}}$ is reduced to $\dfrac{2w-1}{2w^2-2w}$ after clearing the inner denominators once.""",
                False,
                r"""Clear each inner pair over $w(w-1)$:

Numerator:

$$\frac{w}{w-1}-\frac{w-1}{w}=\frac{w^2-(w-1)^2}{w(w-1)}=\frac{2w-1}{w(w-1)}$$

Denominator:

$$\frac{w}{w-1}+\frac{w-1}{w}=\frac{w^2+(w-1)^2}{w(w-1)}=\frac{2w^2-2w+1}{w(w-1)}$$

Quotient:

$$\frac{2w-1}{2w^2-2w+1}$$

The printed denominator drops the constant $+1$, so the claim is false.""",
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
                r"""After cancelling the linear factor, $\dfrac{j^3-729}{j-9}$ is recorded as $j^2+81$ for $j\neq 9$. A single substitution $j=0$ is then cited as confirmation because both sides agree at that point.""",
                False,
                r"""Difference of cubes yields three terms, not two:

Correct quotient:

$$\frac{j^3-729}{j-9}=j^2+9j+81$$

Printed claim:

$$j^2+81$$

At $j=0$ both may agree (constant term $81$), yet at $j=1$ the linear term $9$ already separates them.""",
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
                r"""A marker writes $\dfrac{7}{x^2-1}=\dfrac{7}{x-1}-\dfrac{7}{x+1}$ for $x^2\neq 1$, omitting the factor $\tfrac{1}{2}$ in each partial term.""",
                False,
                r"""Clearing the printed right-hand side gives

Combine:

$$\frac{7}{x-1}-\frac{7}{x+1}=\frac{7(x+1)-7(x-1)}{x^2-1}=\frac{27}{x^2-1)}$$

The result is $\dfrac{27}{x^2-1}$, twice the intended left-hand side.""",
            ),
            (
                r"Subtracting neighbouring unit factors $\dfrac{1}{u-3}-\dfrac{1}{u-5}$ equals $\dfrac{-2}{(u-3)(u-5)}$ off $u=3,5$.",
                True,
                
            ),
            (
                r"""Combining $\dfrac{1}{w}+\dfrac{1}{x}+\dfrac{1}{y}$ on $wxy\neq 0$ with least common denominator $wxy$ produces $\dfrac{xy+wy+wx}{wxy}$. The sum-of-denominators shortcut $w+x+y$ is rejected.""",
                True,
                r"""The LCD of three monomial denominators is the product $wxy$:

Clear:

$$\frac{1}{w}+\frac{1}{x}+\frac{1}{y}=\frac{xy+wy+wx}{wxy}$$

Using $w+x+y$ as a common denominator is not an identity.""",
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
                r"""On $x^2\neq 1$, decomposing $\dfrac{4}{x^2-1}$ as $2\dfrac{1}{x-1}-2\dfrac{1}{x+1}$ is accepted after clearing the common denominator $(x-1)(x+1)$.""",
                True,
                r"""Difference of squares in the denominator:

Factor:

$$x^2-1=(x-1)(x+1)$$

Clear:

$$2\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{2(x+1)-2(x-1)}{(x-1)(x+1)}=\frac{4}{x^2-1}$$

The coefficients match.""",
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
                r"""For $v\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{v}{v-1}-\dfrac{v-1}{v}}{\dfrac{v}{v-1}+\dfrac{v-1}{v}}$ is reduced to $\dfrac{2v-1}{2v^2-2v+1}$ after clearing the inner denominators once.""",
                True,
                r"""Clear each inner pair over $v(v-1)$:

Numerator:

$$\frac{v}{v-1}-\frac{v-1}{v}=\frac{v^2-(v-1)^2}{v(v-1)}=\frac{2v-1}{v(v-1)}$$

Denominator:

$$\frac{v}{v-1}+\frac{v-1}{v}=\frac{v^2+(v-1)^2}{v(v-1)}=\frac{2v^2-2v+1}{v(v-1)}$$

Quotient:

$$\frac{2v-1}{2v^2-2v+1}$$

The printed target matches the reduced form.""",
            ),
            (
                r"After reducing $\dfrac{w^4-1}{w^2-1}$ whenever $w^2\neq 1$, a remainder $w^2+1$ is recorded.",
                True,
                
            ),
            (
                r"""After cancelling the linear factor, $\dfrac{j^3-1000}{j-10}$ is recorded as $j^2+10j+100$ for $j\neq 10$. A single substitution $j=0$ is then cited as confirmation because both sides agree at that point, and the algebraic identity is in fact correct.""",
                True,
                r"""Difference of cubes with $10^3$ in the constant term:

Factor:

$$\frac{j^3-1000}{j-10}=j^2+10j+100$$

The printed quotient matches. Agreement at $j=0$ is consistent but not the reason the identity holds.""",
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
                r"""On $jkl\neq 0$, adding $\dfrac{2}{j}+\dfrac{3}{k}+\dfrac{5}{l}$ with common denominator $j+k+l$ is claimed to give $\dfrac{10}{j+k+l}$.""",
                False,
                r"""Least common denominator of $j$, $k$, $l$ is the product, not the sum:

Correct combination:

$$\frac{2}{j}+\frac{3}{k}+\frac{5}{l}=\frac{2kl+3jl+5jk}{jkl}$$

The printed $\dfrac{10}{j+k+l}$ agrees only on a thin set, not identically.""",
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
                r"""For $n\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{n}{n-1}-\dfrac{n-1}{n}}{\dfrac{n}{n-1}+\dfrac{n-1}{n}}$ is reduced to $\dfrac{2n-1}{2n^2-2n+1}$ after clearing the inner denominators once, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Clear each inner pair over $n(n-1)$:

Numerator:

$$\frac{n}{n-1}-\frac{n-1}{n}=\frac{n^2-(n-1)^2}{n(n-1)}=\frac{2n-1}{n(n-1)}$$

Denominator:

$$\frac{n}{n-1}+\frac{n-1}{n}=\frac{n^2+(n-1)^2}{n(n-1)}=\frac{2n^2-2n+1}{n(n-1)}$$

Quotient:

$$\frac{2n-1}{2n^2-2n+1}$$

The printed target matches the reduced form.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""On $npq\neq 0$, adding $\dfrac{2}{n}+\dfrac{3}{p}+\dfrac{5}{q}$ with common denominator $n+p+q$ is claimed to give $\dfrac{10}{n+p+q}$.""",
                False,
                r"""Least common denominator of $n$, $p$, $q$ is the product, not the sum:

Correct combination:

$$\frac{2}{n}+\frac{3}{p}+\frac{5}{q}=\frac{2pq+3nq+5np}{npq}$$

The printed $\dfrac{10}{n+p+q}$ agrees only on a thin set, not identically.""",
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
                r"""After cancelling the linear factor, $\dfrac{j^3-125}{j-5}$ is recorded as $j^2+5j+25$ for $j\neq 5$. A single substitution $j=0$ is then cited as confirmation because both sides agree at that point, and the algebraic identity is in fact correct.""",
                True,
                r"""Difference of cubes with $5^3$ in the constant term:

Factor:

$$\frac{j^3-125}{j-5}=j^2+5j+25$$

The printed quotient matches. Agreement at $j=0$ is consistent but not the reason the identity holds.""",
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
                r"""Combining $\dfrac{1}{m}+\dfrac{1}{n}+\dfrac{1}{p}$ on $mnp\neq 0$ with least common denominator $mnp$ produces $\dfrac{np+mp+mn}{mnp}$. The sum-of-denominators shortcut $m+n+p$ is rejected, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""The LCD of three monomial denominators is the product $mnp$:

Clear:

$$\frac{1}{m}+\frac{1}{n}+\frac{1}{p}=\frac{np+mp+mn}{mnp}$$

Using $m+n+p$ as a common denominator is not an identity.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""After cancelling the linear factor, $\dfrac{j^3-1}{j-1}$ is recorded as $j^2+1$ for $j\neq 1$. A single substitution $j=0$ is then cited as confirmation because both sides agree at that point.""",
                False,
                r"""Difference of cubes yields three terms, not two:

Correct quotient:

$$\frac{j^3-1}{j-1}=j^2+1j+1$$

Printed claim:

$$j^2+1$$

At $j=0$ both may agree (constant term $1$), yet at $j=1$ the linear term $1$ already separates them.""",
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
                r"""A marker writes $\dfrac{6}{x^2-1}=\dfrac{6}{x-1}-\dfrac{6}{x+1}$ for $x^2\neq 1$, omitting the factor $\tfrac{1}{2}$ in each partial term.""",
                False,
                r"""Clearing the printed right-hand side gives

Combine:

$$\frac{6}{x-1}-\frac{6}{x+1}=\frac{6(x+1)-6(x-1)}{x^2-1}=\frac{26}{x^2-1)}$$

The result is $\dfrac{26}{x^2-1}$, twice the intended left-hand side.""",
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
