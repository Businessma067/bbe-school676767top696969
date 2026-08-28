from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="Spare-script leftovers with a gh coefficient",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $x\neq\pm 1$, $\dfrac{5x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{3}{1-x}=\dfrac{3}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{3}{1-x}=\frac{3}{x-1}$$

Clear:

$$\frac{5x-1}{x^2-1}-\frac{2}{x+1}+\frac{1}{x-1}+\frac{3}{x-1}$$

Simplified left-hand side:

$$\frac{7 x + 5}{x^{2} - 1}$$

After the full clear the left-hand side is $\frac{7 x + 5}{x^{2} - 1}$, not $\dfrac{3}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Reducing $\dfrac{j^3-1331}{j-11}$ to $j^2+121$ for $j\neq 11$ is treated as an identity, because substituting $j=0$ makes both sides equal $121$.",
                False,
                
            ),
            (
                r"""If $n>0$, then $\dfrac{n^{2/3}\cdot\sqrt[3]{n\sqrt{n}}}{n^{1/6}\cdot\sqrt[6]{n^5}}=\sqrt[6]{n}$.""",
                True,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$n^{2/3}\cdot(n\cdotn^{1/2})^{1/3}=n^{2/3}\cdotn^{(1+1/2)/3}=n^{2/3}\cdotn^{1/2}$$

Denominator:

$$n^{1/6}\cdot(n^5)^{1/6}=n^{1/6}\cdotn^{5/6}=n$$

Quotient:

$$\sqrt[6]{n}$$

The fully reduced power matches the printed right-hand side.""",
            ),
            (
                r"Restricting to negative $\ell$, the quotient $|\ell|/\ell$ equals $-1$.",
                True,
                
            ),
            (
                r"Given the elementary symmetric data $k+m=11$ and $km=13$, the sum of squares $k^2+m^2$ is evaluated as $95$.",
                True,
                
            ),
        ],
        overview=r"Five unlinked claims: the $fh$ coefficient in $(2f+g-3h)^2$, a cubic remainder that accidentally matches at $0$, the wrong conjugate of $\sqrt{14+2\sqrt{13}}$, the piecewise value of $|\ell|/\ell$ on $\ell<0$, and $k^2+m^2$ from $k+m=11$, $km=13$.",
    ),
    task(
        title="Sophie Germain offcut beside a stacked exponent",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Inserting $f=1$ and $g=1$ into both $f^4+4g^4$ and $(f^2+2fg+2g^2)(f^2-2fg+2g^2)$ produces $5$ on each side, and the two polynomials are then treated as identically equal.",
                True,
                
            ),
            (
                r"Cancelling $h-14$ from $\dfrac{h^2-21h+98}{h-14}$ is said to leave $h-7$ for $h\neq 14$, and substituting $h=0$ recovers $-7$ on both the original fraction and the reduced line.",
                True,
                
            ),
            (
                r"Raising the stack $(j^2)^{3/2}$ is claimed to equal $j^3$ for every real $j$.",
                False,
                
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{8x-4}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{4}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

Clear:

$$\frac{8x-4}{x^2-1}-\frac{2}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

Simplified left-hand side:

$$\frac{9 x + 1}{x^{2} - 1}$$

After the full clear the left-hand side is $\frac{9 x + 1}{x^{2} - 1}$, not $\dfrac{4}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Given the pair $u+v=16$ and $uv=15$, the distance $|u-v|$ is read off as $14$.",
                True,
                
            ),
        ],
        overview=r"Independent claims: Sophie Germain's $f^4+4g^4$ checked at $(1,1)$, a quadratic remainder $h-7$, $(j^2)^{3/2}=|j|^3$, a sign error in $|s-16|/(16-s)$ for $s>16$, and $|u-v|=14$ from $u+v=16$, $uv=15$.",
    ),
    task(
        title="Nested remainder against a piecewise constant",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"The coefficient of $gh$ in the expansion of $(f-3g+h)^2$ is claimed to be $+6$.",
                False,
                
            ),
            (
                r"""If $a>0$, then $\dfrac{a^{2/3}\cdot\sqrt[3]{a\sqrt{a}}}{a^{1/6}\cdot\sqrt[6]{a^5}}=\sqrt[3]{a}$.""",
                False,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$a^{2/3}\cdot(a\cdota^{1/2})^{1/3}=a^{2/3}\cdota^{(1+1/2)/3}=a^{2/3}\cdota^{1/2}$$

Denominator:

$$a^{1/6}\cdot(a^5)^{1/6}=a^{1/6}\cdota^{5/6}=a$$

Quotient:

$$\sqrt[6]{a}$$

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
            (
                r"Simplifying $16^{5/4}$ is treated as producing the integer $32$.",
                True,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8p^2b}{4x^2-16}}{\dfrac{4pb}{2x+4}}$ simplifies to $\dfrac{p}{x-2}$ for $x\neq\pm 2$ and $p,b\neq 0$.""",
                True,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8p^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4pb}$$

Result:

$$\frac{p}{x - 2}$$

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"Whenever $r+s+t=0$ at the specific values $r=2$, $s=11$, $t=-13$, the sum of cubes $r^3+s^3+t^3$ equals $3rst$, hence $-858$.",
                True,
                
            ),
        ],
        overview=r"Five unlinked lines: a wrong-sign $gh$ coefficient, a two-storey unit nest, $16^{5/4}=32$, the piecewise constant $22$ of $|\ell\pm 11|$ inside $(-11,11)$, and $r^3+s^3+t^3=3rst$ at $(2,11,-13)$.",
    ),
    task(
        title="Cubic coefficient vanishing in a biquadratic product",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"The cubic coefficient in the product $(n^2+2n+2)(n^2-2n+2)$ is claimed to be $0$, so that the product is even in $n$.",
                True,
                
            ),
            (
                r"Reducing $\dfrac{w^3-2744}{w-14}$ to $w^2+196$ for $w\neq 14$ is treated as an identity after a check at $w=0$ gives $196$ on both sides.",
                False,
                
            ),
            (
                r"Denesting $\sqrt{15+2\sqrt{14}}$ is claimed to equal $\sqrt{14}-1$.",
                False,
                
            ),
            (
                r"Pulling out the positive factor $2$, the identity $|2m-14|=2|m-7|$ is accepted for every real $m$.",
                True,
                
            ),
            (
                r"""If $c>0$, then $\dfrac{c^{2/3}\cdot\sqrt[3]{c\sqrt{c}}}{c^{1/6}\cdot\sqrt[6]{c^5}}=\sqrt[3]{c}$.""",
                False,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$c^{2/3}\cdot(c\cdotc^{1/2})^{1/3}=c^{2/3}\cdotc^{(1+1/2)/3}=c^{2/3}\cdotc^{1/2}$$

Denominator:

$$c^{1/6}\cdot(c^5)^{1/6}=c^{1/6}\cdotc^{5/6}=c$$

Quotient:

$$\sqrt[6]{c}$$

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
        ],
        overview=r"Unlinked claims: odd powers cancel in a Sophie-Germain product, a cubic remainder that matches at $0$ only, the wrong conjugate of $\sqrt{15+2\sqrt{14}}$, $|2m-14|=2|m-7|$, and $f^3+g^3+h^3=3fgh$ at $(5,8,-13)$.",
    ),
    task(
        title="Cancelled cubic checked away from zero",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Expanding $(f+2g-h)^2$ is written with the coefficient of $gh$ equal to $+4$.",
                False,
                
            ),
            (
                r"After cancelling, $\dfrac{j^3-3375}{j-15}$ equals $j^2+15j+225$ for $j\neq 15$, and substituting $j=1$ gives $241$ on both the original fraction and the reduced quadratic.",
                True,
                
            ),
            (
                r"""For $x\neq 0$, $(8x^{-1}-1)(8x^{-1}+1)=\dfrac{64}{x^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=8x^{-1}$:

Expand:

$$(8x^{-1})^2-1=\frac{64}{x^2}-1$$

The coefficient on the reciprocal square is $64$, matching the claim.""",
            ),
            (
                r"On the half-line $h<0$, the quotient $|h|/(-h)$ equals $1$.",
                True,
                
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{8x-4}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{8}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

Clear:

$$\frac{8x-4}{x^2-1}-\frac{2}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

Simplified left-hand side:

$$\frac{9 x + 1}{x^{2} - 1}$$

After the full clear the left-hand side is $\frac{9 x + 1}{x^{2} - 1}$, not $\dfrac{8}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
        ],
        overview=r"Five independent lines: a wrong-sign $gh$ term in $(f+2g-h)^2$, a cubic remainder checked at $j=1$, $(k^{2/3})^{3/2}=|k|$, $|h|/(-h)=1$ on $h<0$, and $u^2+v^2=197$ from $u+v=15$, $uv=14$.",
    ),
    task(
        title="Swapped-ratio sum beside a denested sixteen",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""If $e>0$, then $\dfrac{e^{2/3}\cdot\sqrt[3]{e\sqrt{e}}}{e^{1/6}\cdot\sqrt[6]{e^5}}=\sqrt[3]{e}$.""",
                False,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$e^{2/3}\cdot(e\cdote^{1/2})^{1/3}=e^{2/3}\cdote^{(1+1/2)/3}=e^{2/3}\cdote^{1/2}$$

Denominator:

$$e^{1/6}\cdot(e^5)^{1/6}=e^{1/6}\cdote^{5/6}=e$$

Quotient:

$$\sqrt[6]{e}$$

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
            (
                r"Adding the swapped pair $\dfrac{j}{k}+\dfrac{k}{j}$ for $jk\neq 0$ is said to equal $\dfrac{j^2+k^2}{jk}$, and substituting $j=3$, $k=5$ makes both sides equal $34/15$.",
                True,
                
            ),
            (
                r"Denesting $\sqrt{16+2\sqrt{55}}$ is claimed to equal $\sqrt{11}-\sqrt{5}$.",
                False,
                
            ),
            (
                r"Adding the opposite insides $|21-\ell|+|\ell-21|$ is claimed to equal $2|\ell-21|$ for every real $\ell$.",
                True,
                
            ),
            (
                r"Given $r+s=13$ and $rs=21$, the sum $r^2+s^2$ is claimed to equal $169$.",
                False,
                
            ),
        ],
        overview=r"Unlinked claims: the $fh$ coefficient $+6$ in $(f-2g+3h)^2$, $j/k+k/j$, the wrong conjugate of $\sqrt{16+2\sqrt{55}}$, $|21-\ell|+|\ell-21|=2|\ell-21|$, and $r^2+s^2=127$ rather than $169$.",
    ),
    task(
        title="Mixed-term cancellation in a Germain product",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $h\neq 0$, $(8h^{-1}-1)(8h^{-1}+1)=\dfrac{64}{h^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=8h^{-1}$:

Expand:

$$(8h^{-1})^2-1=\frac{64}{h^2}-1$$

The coefficient on the reciprocal square is $64$, matching the claim.""",
            ),
            (
                r"Clearing the stacked difference $\dfrac{\dfrac{1}{h}-\dfrac{1}{j}}{\dfrac{1}{h}+\dfrac{1}{j}}$ is said to leave $\dfrac{h-j}{h+j}$ whenever $hj\neq 0$ and $h\neq -j$.",
                False,
                
            ),
            (
                r"Matching positive roots, $\sqrt{11+2\sqrt{24}}$ is identified with $2\sqrt{2}+\sqrt{3}$.",
                True,
                
            ),
            (
                r"""Let $p$ be a nonzero real parameter. Twice the reciprocal of the sum of $p$ and the reciprocal of $p$ equals twice $p$ divided by the sum of the square of $p$ and one.""",
                True,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{p+\frac{1}{p}}=\frac{2p}{p^2+1}$$

Right-hand wording:

$$\frac{2p}{p^2+1}$$

Both translations agree, so the statement is an identity on $p\neq 0$.""",
            ),
            (
                r"Evaluating $m^3+n^3$ from $m+n=11$ and $mn=13$ is claimed to give $1331$.",
                False,
                
            ),
        ],
        overview=r"Independent claims: Sophie Germain's product recovering $f^4+4g^4$, a sign error in a stacked difference of unit fractions, the denesting $\sqrt{11+2\sqrt{24}}=2\sqrt{2}+\sqrt{3}$, $|\ell-21|/(\ell-21)=1$ for $\ell>21$, and $m^3+n^3=902$ rather than $1331$.",
    ),
    task(
        title="Sign error on gh next to a cube-sum trap",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Expanding the trinomial $(3f-g-h)^2$ is written with the coefficient of $gh$ equal to $-2$.",
                False,
                
            ),
            (
                r"""Let $k$ be a nonzero real letter. Twice the reciprocal of the sum of $k$ and the reciprocal of $k$ equals $k$ divided by the sum of the square of $k$ and one.""",
                False,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{k+\frac{1}{k}}=\frac{2k}{k^2+1}$$

Right-hand wording:

$$\frac{k}{k^2+1}$$

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"Composing the rational powers $(t^{3/4})^{4/3}$ is said to return $t$ whenever $t>0$.",
                True,
                
            ),
            (
                r"The product of absolute values $|u-15|\,|u+15|$ is identified with $|u^2-225|$ for every real $u$.",
                True,
                
            ),
            (
                r"Evaluating the cubes at $f=4$, $g=7$, $h=-11$ (which sum to $0$) is claimed to make $f^3+g^3+h^3$ vanish.",
                False,
                
            ),
        ],
        overview=r"Unlinked claims: a wrong-sign $gh$ coefficient in $(3f-g-h)^2$, cancelling $(s^2-16)/(s^2-s-12)$, $(t^{3/4})^{4/3}=t$ for $t>0$, $|u^2-225|$ as a product of bars, and $f^3+g^3+h^3=3fgh\neq 0$ at $(4,7,-11)$.",
    ),
    task(
        title="Visible fg coefficient beside a stripped nest",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"The coefficient of $fg$ in the expansion of $(f+4g-h)^2$ is recorded as $8$.",
                True,
                
            ),
            (
                r"""Let $h$ be a nonzero real letter. Twice the reciprocal of the sum of $h$ and the reciprocal of $h$ equals twice $h$ divided by the sum of the square of $h$ and one.""",
                True,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{h+\frac{1}{h}}=\frac{2h}{h^2+1}$$

Right-hand wording:

$$\frac{2h}{h^2+1}$$

Both translations agree, so the statement is an identity on $h\neq 0$.""",
            ),
            (
                r"Simplifying the power $16^{3/2}$ is treated as producing the integer $64$.",
                True,
                
            ),
            (
                r"Stripping the outer bars in $\bigl||k|-13\bigr|$ down to $|k|-13$ is proposed for every real $k$.",
                False,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8v^2b}{4x^2-16}}{\dfrac{4vb}{2x+4}}$ simplifies to $\dfrac{v}{x-2}$ for $x\neq\pm 2$ and $v,b\neq 0$.""",
                True,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8v^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4vb}$$

Result:

$$\frac{v}{x - 2}$$

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
        ],
        overview=r"Five independent lines: the $fg$ coefficient $8$ in $(f+4g-h)^2$, a cancelled-factor leftover, $16^{3/2}=64$, nested bars that cannot be stripped, and $1/v+1/w=3/5$ from $v+w=21$, $vw=35$.",
    ),
    task(
        title="Half-line scaling beside a denested twenty-one",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Expanding the square $(2f-3g+h)^2$ is written with the coefficient of $fg$ equal to $+12$.",
                False,
                
            ),
            (
                r"Rewriting the stacked ratio $\dfrac{1-\dfrac{1}{j}}{1+\dfrac{1}{j}}$ as $\dfrac{j+1}{j-1}$ is claimed for $j\neq 0$ and $j\neq -1$.",
                False,
                
            ),
            (
                r"""For $h\neq 0$, $(3h^{-1}-1)(3h^{-1}+1)=\dfrac{1}{9h^2}-1$.""",
                False,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=3h^{-1}$:

Expand:

$$(3h^{-1})^2-1=\frac{9}{h^2}-1$$

The reciprocal square carries numerator $9$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"Pulling the constant factor, $|-5\ell+15|$ is rewritten as $5|\ell-3|$ for every real $\ell$.",
                True,
                
            ),
            (
                r"Given the pair $u+v=16$ and $uv=15$, the swapped-ratio sum $u/v+v/u$ is evaluated as $226/15$.",
                True,
                
            ),
        ],
        overview=r"Unlinked claims: a wrong-sign $fg$ coefficient, a reciprocal trap in a stacked unit ratio, $\sqrt{21+8\sqrt{5}}=4+\sqrt{5}$, $|-5\ell+15|=5|\ell-3|$, and $u/v+v/u=226/15$.",
    ),
    task(
        title="Cube-root monomial against a linear ratio",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""If $q>0$, then $\dfrac{q^{2/3}\cdot\sqrt[3]{q\sqrt{q}}}{q^{1/6}\cdot\sqrt[6]{q^5}}=\sqrt[3]{q}$.""",
                False,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$q^{2/3}\cdot(q\cdotq^{1/2})^{1/3}=q^{2/3}\cdotq^{(1+1/2)/3}=q^{2/3}\cdotq^{1/2}$$

Denominator:

$$q^{1/6}\cdot(q^5)^{1/6}=q^{1/6}\cdotq^{5/6}=q$$

Quotient:

$$\sqrt[6]{q}$$

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
            (
                r"Subtracting the swapped pair $\dfrac{k}{m}-\dfrac{m}{k}$ for $km\neq 0$ is said to equal $\dfrac{k^2-m^2}{km}$, and substituting $k=5$, $m=3$ makes both sides equal $16/15$.",
                True,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8q^2b}{4x^2-16}}{\dfrac{4qb}{2x+4}}$ simplifies to $\dfrac{q}{x-2}$ for $x\neq\pm 2$ and $q,b\neq 0$.""",
                True,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8q^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4qb}$$

Result:

$$\frac{q}{x - 2}$$

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"Restricting to negative $s$, the quotient $|s|/s$ is claimed to equal $1$.",
                False,
                
            ),
            (
                r"Reading the distance $|r-s|$ from $r+s=14$ and $rs=13$ as $14$ is treated as correct.",
                False,
                
            ),
        ],
        overview=r"Independent claims: the $gh$ coefficient $-4$ in $(f-g+2h)^2$, $k/m-m/k$ checked at $(5,3)$, $\sqrt[3]{-125j^6}=-5j^2$, $|s|/s=-1$ on $s<0$, and $|r-s|=12$ rather than $14$.",
    ),
    task(
        title="Leftover factor mistaken for a remainder",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"The coefficient of $fg$ in the expansion of $(2f+3g-h)^2$ is claimed to be $5$.",
                False,
                
            ),
            (
                r"Cancelling a cubic against a difference of squares, $\dfrac{h^3-16h}{h^2-16}$ is said to equal $h$ for $h\neq\pm 4$.",
                True,
                
            ),
            (
                r"Simplifying the radical $\sqrt{16j^2}$ to $4j$ is asserted for every real $j$.",
                False,
                
            ),
            (
                r"""If $d>0$, then $\dfrac{d^{2/3}\cdot\sqrt[3]{d\sqrt{d}}}{d^{1/6}\cdot\sqrt[6]{d^5}}=\sqrt[6]{d}$.""",
                True,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$d^{2/3}\cdot(d\cdotd^{1/2})^{1/3}=d^{2/3}\cdotd^{(1+1/2)/3}=d^{2/3}\cdotd^{1/2}$$

Denominator:

$$d^{1/6}\cdot(d^5)^{1/6}=d^{1/6}\cdotd^{5/6}=d$$

Quotient:

$$\sqrt[6]{d}$$

The fully reduced power matches the printed right-hand side.""",
            ),
            (
                r"Factoring the biquadratic $n^4+64$ as $(n^2+4n+8)(n^2-4n+8)$ is offered as an identity.",
                True,
                
            ),
        ],
        overview=r"Five unlinked lines: a guessed $fg$ coefficient $5$ instead of $12$, $(h^3-16h)/(h^2-16)=h$, $\sqrt{16j^2}=4|j|$, $|2\ell|/\ell=2$ on $\ell>0$, and $n^4+64$ factored by a scaled Sophie-Germain step.",
    ),
    task(
        title="Middle-sign error in a sum of cubes",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"After expanding $(f+g-4h)^2$, the coefficient of $fh$ is read off as $-8$.",
                True,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8x^2b}{4x^2-16}}{\dfrac{4xb}{2x+4}}$ simplifies to $\dfrac{x}{x+2}$ for $x\neq\pm 2$ and $x,b\neq 0$.""",
                False,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8x^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4xb}$$

Result:

$$\frac{x}{x - 2}$$

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"Matching positive roots, $\sqrt{13+4\sqrt{3}}$ is identified with $1+2\sqrt{3}$.",
                True,
                
            ),
            (
                r"""For $s\neq 0$, $(2s^{-1}-1)(2s^{-1}+1)=\dfrac{4}{s^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=2s^{-1}$:

Expand:

$$(2s^{-1})^2-1=\frac{4}{s^2}-1$$

The coefficient on the reciprocal square is $4$, matching the claim.""",
            ),
            (
                r"Treating the vanishing of $u+v+w$ at $u=1$, $v=14$, $w=-15$ as forcing $u^3+v^3+w^3=0$ is proposed.",
                False,
                
            ),
        ],
        overview=r"Independent claims: the $fh$ coefficient $-8$ in $(f+g-4h)^2$, the middle sign in $(n^3+14^3)/(n+14)$, $\sqrt{13+4\sqrt{3}}=1+2\sqrt{3}$, $|t-13|/|13-t|=1$, and $u^3+v^3+w^3=3uvw$ at $(1,14,-15)$.",
    ),
    task(
        title="Grouped four-term product on a mixed card",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Grouping the four-term polynomial $fg+11f+13g+143$ as $(f+13)(g+11)$ is offered as an identity.",
                True,
                
            ),
            (
                r"Clearing the nested remainder $1-\dfrac{1}{1+\dfrac{1}{j}}$ is said to leave $\dfrac{1}{j+1}$ for $j\neq 0$ and $j\neq -1$.",
                True,
                
            ),
            (
                r"Reducing the power $16^{3/4}$ to the integer $4$ is treated as correct.",
                False,
                
            ),
            (
                r"Identifying the sum $|k+m|$ with $|k|+|m|$ identically on the mixed-sign region $k>0$, $m<0$ is proposed.",
                False,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8m^2b}{4x^2-16}}{\dfrac{4mb}{2x+4}}$ simplifies to $\dfrac{m}{x-2}$ for $x\neq\pm 2$ and $m,b\neq 0$.""",
                True,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8m^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4mb}$$

Result:

$$\frac{m}{x - 2}$$

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
        ],
        overview=r"Unlinked claims: grouping $fg+11f+13g+143$, a nested unit remainder $1/(j+1)$, $16^{3/4}=8$ rather than $4$, the triangle inequality on mixed signs, and $r^2+s^2=371$.",
    ),
    task(
        title="Quadratic remainder beside a cube-root monomial",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Expanding the trinomial $(2f-g+h)^2$ is written with the coefficient of $gh$ equal to $+2$.",
                False,
                
            ),
            (
                r"Cancelling a visible linear factor, $\dfrac{j^2-35j+300}{j-15}$ is said to leave $j-20$ for $j\neq 15$.",
                True,
                
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{6x-4}{x^2-1}-\dfrac{1}{1+x}+\dfrac{2}{x-1}-\dfrac{1}{1-x}=\dfrac{-4}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

Clear:

$$\frac{6x-4}{x^2-1}-\frac{1}{x+1}+\frac{2}{x-1}+\frac{1}{x-1}$$

Simplified left-hand side:

$$\frac{8 x}{x^{2} - 1}$$

After the full clear the left-hand side is $\frac{8 x}{x^{2} - 1}$, not $\dfrac{-4}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Treating the sign quotient $|\ell|/\ell$ as identically $1$ for every $\ell\neq 0$ is proposed.",
                False,
                
            ),
            (
                r"""If $k>0$, then $\dfrac{k^{2/3}\cdot\sqrt[3]{k\sqrt{k}}}{k^{1/6}\cdot\sqrt[6]{k^5}}=\sqrt[3]{k}$.""",
                False,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$k^{2/3}\cdot(k\cdotk^{1/2})^{1/3}=k^{2/3}\cdotk^{(1+1/2)/3}=k^{2/3}\cdotk^{1/2}$$

Denominator:

$$k^{1/6}\cdot(k^5)^{1/6}=k^{1/6}\cdotk^{5/6}=k$$

Quotient:

$$\sqrt[6]{k}$$

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
        ],
        overview=r"Five independent lines: a wrong-sign $gh$ coefficient, the remainder $j-20$, $\sqrt[3]{8s^6}=2s^2$, $|\ell|/\ell$ only piecewise $1$, and $1/k+1/m=11/13$.",
    ),
    task(
        title="Nested bars stripped on a short interval",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Let $t$ be a nonzero real number. Twice the reciprocal of the sum of $t$ and the reciprocal of $t$ equals $t$ divided by the sum of the square of $t$ and one.""",
                False,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{t+\frac{1}{t}}=\frac{2t}{t^2+1}$$

Right-hand wording:

$$\frac{t}{t^2+1}$$

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"Reducing the cubic $\dfrac{w^3-2197}{w-13}$ to $w^2+169$ for $w\neq 13$ is treated as an identity after a check at $w=0$ gives $169$ on both sides.",
                False,
                
            ),
            (
                r"Denesting the radicand $\sqrt{11+6\sqrt{2}}$ is claimed to equal $3+\sqrt{2}$.",
                True,
                
            ),
            (
                r"Stripping nested bars, $\bigl||k|-15\bigr|$ is rewritten as $|k|-15$ for every real $k$.",
                False,
                
            ),
            (
                r"Given the sums $r+s=13$ and $rs=14$, the sum of squares $r^2+s^2$ is claimed to equal $169$.",
                False,
                
            ),
        ],
        overview=r"Unlinked claims: the $fg$ coefficient $-6$ in $(3f-g-2h)^2$, a cubic remainder that matches only at $0$, $\sqrt{11+6\sqrt{2}}=3+\sqrt{2}$, nested bars that cannot be stripped, and $r^2+s^2=141$ rather than $169$.",
    ),
    task(
        title="Unsigned cube from a stacked square",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $x\neq\pm 1$, $\dfrac{3x-3}{x^2-1}-\dfrac{4}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{1}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

Clear:

$$\frac{3x-3}{x^2-1}-\frac{4}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

Simplified left-hand side:

$$\frac{2 \left(x + 2\right)}{x^{2} - 1}$$

After the full clear the left-hand side is $\frac{2 \left(x + 2\right)}{x^{2} - 1}$, not $\dfrac{1}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Cancelling a difference of fourth powers, $\dfrac{j^4-1}{j^2-1}$ is said to leave $j^2+1$ whenever $j\neq\pm 1$.",
                True,
                
            ),
            (
                r"Raising the stacked power $(s^2)^{3/2}$ is claimed to equal $s^3$ for every real $s$.",
                False,
                
            ),
            (
                r"""Let $t$ be a nonzero real number. Twice the reciprocal of the sum of $t$ and the reciprocal of $t$ equals twice $t$ divided by the sum of the square of $t$ and one.""",
                True,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{t+\frac{1}{t}}=\frac{2t}{t^2+1}$$

Right-hand wording:

$$\frac{2t}{t^2+1}$$

Both translations agree, so the statement is an identity on $t\neq 0$.""",
            ),
            (
                r"Completing the square, $k^4+4m^4$ is identified with $(k^2+2m^2)^2$ as an identity in $k$ and $m$.",
                False,
                
            ),
        ],
        overview=r"Independent claims: a forgotten doubling of $gh$, $(j^4-1)/(j^2-1)=j^2+1$, $(s^2)^{3/2}=|s|^3$, $|2t-32|=2|t-16|$, and $(k^2+2m^2)^2$ versus $k^4+4m^4$.",
    ),
    task(
        title="Inflated denesting of sixteen plus a surd",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"The coefficient of $fg$ in the expansion of $(f-3g-h)^2$ is recorded as $-6$.",
                True,
                
            ),
            (
                r"""For $w\neq 0$, $(4w^{-1}-1)(4w^{-1}+1)=\dfrac{1}{16w^2}-1$.""",
                False,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=4w^{-1}$:

Expand:

$$(4w^{-1})^2-1=\frac{16}{w^2}-1$$

The reciprocal square carries numerator $16$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"Denesting the nested radical $\sqrt{16+2\sqrt{15}}$ is claimed to equal $2+\sqrt{15}$.",
                False,
                
            ),
            (
                r"Treating the quotient $|k|/k$ as identically $-1$ for every $k\neq 0$ is proposed.",
                False,
                
            ),
            (
                r"Reading the gap $|u-v|$ from $u+v=16$ and $uv=21$ as $16$ is treated as correct.",
                False,
                
            ),
        ],
        overview=r"Five unlinked lines: the $fg$ coefficient $-6$ in $(f-3g-h)^2$, the remainder $h-9$, an inflated denesting of $\sqrt{16+2\sqrt{15}}$, $|k|/k$ only piecewise $-1$, and $|u-v|=\sqrt{172}$ rather than $16$.",
    ),
    task(
        title="Compound ratio reciprocal trap",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Expanding the trinomial $(f+2g-5h)^2$ is written with the coefficient of $fh$ equal to $+10$.",
                False,
                
            ),
            (
                r"""Let $m$ be a nonzero real letter. Twice the reciprocal of the sum of $m$ and the reciprocal of $m$ equals twice $m$ divided by the sum of the square of $m$ and one.""",
                True,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{m+\frac{1}{m}}=\frac{2m}{m^2+1}$$

Right-hand wording:

$$\frac{2m}{m^2+1}$$

Both translations agree, so the statement is an identity on $m\neq 0$.""",
            ),
            (
                r"Cubing the two-thirds power, $\bigl(t^{2/3}\bigr)^3$ is said to equal $t^2$ for every real $t$.",
                True,
                
            ),
            (
                r"On the open interval $-15<\ell<15$, the sum $|\ell+15|+|\ell-15|$ equals $30$.",
                True,
                
            ),
            (
                r"""For $w\neq 0$, $(3w^{-1}-1)(3w^{-1}+1)=\dfrac{9}{w^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=3w^{-1}$:

Expand:

$$(3w^{-1})^2-1=\frac{9}{w^2}-1$$

The coefficient on the reciprocal square is $9$, matching the claim.""",
            ),
        ],
        overview=r"Unlinked claims: a wrong-sign $fh$ coefficient, a reciprocal trap in $(1+j/k)/(1-j/k)$, $(t^{2/3})^3=t^2$, the piecewise constant $30$ of $|\ell\pm 15|$ inside $(-15,15)$, and $r^3+s^3+t^3=-792$ at $(3,8,-11)$.",
    ),
    task(
        title="Dropped bars on a two-letter quotient",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"The coefficient of $gh$ in the expansion of $(4f-g-h)^2$ is recorded as $2$.",
                True,
                
            ),
            (
                r"Reducing the quadratic $\dfrac{m^2-15m+56}{m-7}$ to $m-7$ for $m\neq 7$ is treated as an identity.",
                False,
                
            ),
            (
                r"""Let $h$ be a nonzero real letter. Twice the reciprocal of the sum of $h$ and the reciprocal of $h$ equals $h$ divided by the sum of the square of $h$ and one.""",
                False,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{h+\frac{1}{h}}=\frac{2h}{h^2+1}$$

Right-hand wording:

$$\frac{h}{h^2+1}$$

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"Writing the quotient $\bigl|\dfrac{r}{s}\bigr|$ as $\dfrac{|r|}{|s|}$ for $s\neq 0$ is accepted.",
                True,
                
            ),
            (
                r"Given the elementary data $k+m=11$ and $km=21$, the sum $k^2+m^2$ is claimed to equal $121$.",
                False,
                
            ),
        ],
        overview=r"Independent claims: the $gh$ coefficient $2$ in $(4f-g-h)^2$, a cancelled-factor leftover $m-7$ instead of $m-8$, $16^{5/4}=32$ rather than $8$, $|r/s|=|r|/|s|$, and $k^2+m^2=79$ rather than $121$.",
    ),
    task(
        title="Single-point check of a fourth-power split",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""The stacked quotient $\dfrac{\dfrac{8v^2b}{4x^2-16}}{\dfrac{4vb}{2x+4}}$ simplifies to $\dfrac{v}{x+2}$ for $x\neq\pm 2$ and $v,b\neq 0$.""",
                False,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8v^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4vb}$$

Result:

$$\frac{v}{x - 2}$$

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"Cancelling a difference of squares, $\dfrac{j^2-121}{j-11}$ is said to leave $j+11$ for $j\neq 11$, and substituting $j=0$ recovers $11$ on both sides.",
                True,
                
            ),
            (
                r"""For $q\neq 0$, $(3q^{-1}-1)(3q^{-1}+1)=\dfrac{9}{q^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=3q^{-1}$:

Expand:

$$(3q^{-1})^2-1=\frac{9}{q^2}-1$$

The coefficient on the reciprocal square is $9$, matching the claim.""",
            ),
            (
                r"Dropping the bars around $2\ell+16$ and writing $2\ell+16$ for every real $\ell$ is offered as an identity.",
                False,
                
            ),
            (
                r"Squaring a single Sophie-Germain factor, $n^4+4m^4$ is identified with $(n^2+2nm+2m^2)^2$.",
                False,
                
            ),
        ],
        overview=r"Five unlinked lines: a forgotten doubling of $fh$, $(j^2-121)/(j-11)=j+11$ checked at $0$, $\sqrt{16+2\sqrt{15}}=1+\sqrt{15}$, $|2\ell+16|$ versus $2\ell+16$, and the square of one Sophie-Germain factor.",
    ),
    task(
        title="Continued nest written as its reciprocal",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"The coefficient of $fg$ in the expansion of $(f-5g+h)^2$ is recorded as $-10$.",
                True,
                
            ),
            (
                r"Clearing the three-storey nest $1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{j}}}$ is said to leave $\dfrac{2j+1}{3j+2}$ for $j\neq 0$, $j\neq -1$, and $j\neq -1/2$.",
                False,
                
            ),
            (
                r"Denesting the radicand $\sqrt{16+2\sqrt{55}}$ is claimed to equal $2+\sqrt{11}$.",
                False,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8n^2b}{4x^2-16}}{\dfrac{4nb}{2x+4}}$ simplifies to $\dfrac{n}{x-2}$ for $x\neq\pm 2$ and $n,b\neq 0$.""",
                True,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8n^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4nb}$$

Result:

$$\frac{n}{x - 2}$$

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"Given the pair $u+v=14$ and $uv=13$, the sum $u^2+v^2$ is evaluated as $170$.",
                True,
                
            ),
        ],
        overview=r"Unlinked claims: the $fg$ coefficient $-10$ in $(f-5g+h)^2$, a three-storey nest written as its reciprocal, a false denesting $2+\sqrt{11}$, $|\ell-21|/(21-\ell)$ not constantly $1$ on $\ell>0$, and $u^2+v^2=170$.",
    ),
    task(
        title="Vanishing of a shifted square's absolute value",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Expanding the trinomial $(2f+2g-h)^2$ is written with the coefficient of $fg$ equal to $4$.",
                False,
                
            ),
            (
                r"""For $q\neq 0$, $(6q^{-1}-1)(6q^{-1}+1)=\dfrac{1}{36q^2}-1$.""",
                False,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=6q^{-1}$:

Expand:

$$(6q^{-1})^2-1=\frac{36}{q^2}-1$$

The reciprocal square carries numerator $36$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"Simplifying a monomial radical, $(16k^4)^{1/4}$ is rewritten as $2k$ for every real $k$.",
                False,
                
            ),
            (
                r"""Let $p$ be a nonzero real parameter. Twice the reciprocal of the sum of $p$ and the reciprocal of $p$ equals $p$ divided by the sum of the square of $p$ and one.""",
                False,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{p+\frac{1}{p}}=\frac{2p}{p^2+1}$$

Right-hand wording:

$$\frac{p}{p^2+1}$$

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"Adding the reciprocals from $r+s=13$ and $rs=21$ is claimed to give $1/r+1/s=13/21$.",
                True,
                
            ),
        ],
        overview=r"Independent claims: a forgotten extra factor $2$ in an $fg$ coefficient, the remainder $h-8$, $(16k^4)^{1/4}=2|k|$, the range of $|\ell^2+14|$, and $1/r+1/s=13/21$.",
    ),
    task(
        title="Signed cube root of a monomial",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"The coefficient of $fh$ in the expansion of $(f+g+2h)^2$ is claimed to be $2$.",
                False,
                
            ),
            (
                r"Adding the swapped pair $\dfrac{j}{j-13}+\dfrac{13}{13-j}$ is said to vanish whenever $j\neq 13$.",
                False,
                
            ),
            (
                r"Extracting the real cube root $\sqrt[3]{-8s^9}$ is claimed to equal $-2s^3$ for every real $s$.",
                True,
                
            ),
            (
                r"Dropping a minus, $|-\ell|$ is rewritten as $-\ell$ for every real $\ell$.",
                False,
                
            ),
            (
                r"""For $q\neq 0$, $(5q^{-1}-1)(5q^{-1}+1)=\dfrac{25}{q^2}-1$.""",
                True,
                r"""Difference of squares $(A-1)(A+1)=A^2-1$ with $A=5q^{-1}$:

Expand:

$$(5q^{-1})^2-1=\frac{25}{q^2}-1$$

The coefficient on the reciprocal square is $25$, matching the claim.""",
            ),
        ],
        overview=r"Five unlinked lines: a forgotten doubling of $fh$, opposite linear fractions summing to $1$ not $0$, $\sqrt[3]{-8s^9}=-2s^3$, $|-\ell|=|\ell|$, and $r^3+u^3+w^3=3ruw$ at $(5,11,-16)$.",
    ),
    task(
        title="Wrong conjugate of twenty-one plus eight roots",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"After expanding $(f-4g+h)^2$, the coefficient of $gh$ is read off as $-8$.",
                True,
                
            ),
            (
                r"Subtracting the unit fractions $\dfrac{1}{n-11}-\dfrac{1}{n+11}$ is said to leave $\dfrac{11}{n^2-121}$ whenever $n\neq\pm 11$.",
                False,
                
            ),
            (
                r"""If $b>0$, then $\dfrac{b^{2/3}\cdot\sqrt[3]{b\sqrt{b}}}{b^{1/6}\cdot\sqrt[6]{b^5}}=\sqrt[3]{b}$.""",
                False,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$b^{2/3}\cdot(b\cdotb^{1/2})^{1/3}=b^{2/3}\cdotb^{(1+1/2)/3}=b^{2/3}\cdotb^{1/2}$$

Denominator:

$$b^{1/6}\cdot(b^5)^{1/6}=b^{1/6}\cdotb^{5/6}=b$$

Quotient:

$$\sqrt[6]{b}$$

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
            (
                r"Opposite linear forms satisfy $|3\ell-21|=|21-3\ell|$ for every real $\ell$.",
                True,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8q^2b}{4x^2-16}}{\dfrac{4qb}{2x+4}}$ simplifies to $\dfrac{q}{x+2}$ for $x\neq\pm 2$ and $q,b\neq 0$.""",
                False,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8q^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4qb}$$

Result:

$$\frac{q}{x - 2}$$

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
        ],
        overview=r"Unlinked claims: the $gh$ coefficient $-8$ in $(f-4g+h)^2$, a halved numerator $11$ instead of $22$, the wrong conjugate of $\sqrt{21+8\sqrt{5}}$, $|3\ell-21|=|21-3\ell|$, and $k/m+m/k=61/7$ rather than $5/7$.",
    ),
    task(
        title="Exponent addition flipping a sign",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The stacked quotient $\dfrac{\dfrac{8h^2b}{4x^2-16}}{\dfrac{4hb}{2x+4}}$ simplifies to $\dfrac{h}{x-2}$ for $x\neq\pm 2$ and $h,b\neq 0$.""",
                True,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8h^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4hb}$$

Result:

$$\frac{h}{x - 2}$$

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"Cancelling a quadratic, $\dfrac{k^2-29k+210}{k-15}$ is said to leave $k-14$ for $k\neq 15$.",
                True,
                
            ),
            (
                r"Combining the exponents, $t^{-3}t^{5/2}$ is claimed to equal $t^{1/2}$ for every $t>0$.",
                False,
                
            ),
            (
                r"On the half-line $\ell<11$, the quotient $\dfrac{|\ell-11|}{11-\ell}$ equals $1$ wherever $\ell\neq 11$.",
                True,
                
            ),
            (
                r"Recording a vanishing of cubes at $r=6$, $s=7$, $t=-13$ (which sum to $0$) as $r^3+s^3+t^3=0$ is proposed.",
                False,
                
            ),
        ],
        overview=r"Independent claims: a halved $fg$ coefficient, the remainder $k-14$, $t^{-3}t^{5/2}=t^{-1/2}$ rather than $t^{1/2}$, $|\ell-11|/(11-\ell)=1$ on $\ell<11$, and $r^3+s^3+t^3=-1638$ at $(6,7,-13)$.",
    ),
    task(
        title="Difference of reciprocal squares with a dropped factor",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""If $q>0$, then $\dfrac{q^{2/3}\cdot\sqrt[3]{q\sqrt{q}}}{q^{1/6}\cdot\sqrt[6]{q^5}}=\sqrt[6]{q}$.""",
                True,
                r"""Convert every radical to a fractional exponent, then add and subtract:

Numerator:

$$q^{2/3}\cdot(q\cdotq^{1/2})^{1/3}=q^{2/3}\cdotq^{(1+1/2)/3}=q^{2/3}\cdotq^{1/2}$$

Denominator:

$$q^{1/6}\cdot(q^5)^{1/6}=q^{1/6}\cdotq^{5/6}=q$$

Quotient:

$$\sqrt[6]{q}$$

The fully reduced power matches the printed right-hand side.""",
            ),
            (
                r"Clearing a difference of reciprocal squares, $\dfrac{1}{j^2}-\dfrac{1}{k^2}$ is said to equal $\dfrac{k-j}{j^2k^2}$ whenever $jk\neq 0$.",
                False,
                
            ),
            (
                r"Composing the powers $(t^{3/2})^{2/3}$ is said to return $t$ whenever $t>0$.",
                True,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8m^2b}{4x^2-16}}{\dfrac{4mb}{2x+4}}$ simplifies to $\dfrac{m}{x+2}$ for $x\neq\pm 2$ and $m,b\neq 0$.""",
                False,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8m^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4mb}$$

Result:

$$\frac{m}{x - 2}$$

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"Given the elementary data $u+v=21$ and $uv=16$, the sum $u^2+v^2$ is claimed to equal $441$.",
                False,
                
            ),
        ],
        overview=r"Five unlinked lines: the $fh$ coefficient $-8$ in $(2f-g-2h)^2$, a dropped factor $k+j$ in $1/j^2-1/k^2$, $(t^{3/2})^{2/3}=t$ for $t>0$, $|\ell+11|-|\ell|$ not identically $11$, and $u^2+v^2=409$ rather than $441$.",
    ),
    task(
        title="Folded distance on a bounded interval",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Expanding the trinomial $(f+3g-2h)^2$ is written with the coefficient of $gh$ equal to $-6$.",
                False,
                
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{6x-4}{x^2-1}-\dfrac{1}{1+x}+\dfrac{2}{x-1}-\dfrac{1}{1-x}=\dfrac{4}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

Clear:

$$\frac{6x-4}{x^2-1}-\frac{1}{x+1}+\frac{2}{x-1}+\frac{1}{x-1}$$

Simplified left-hand side:

$$\frac{8 x}{x^{2} - 1}$$

After the full clear the left-hand side is $\frac{8 x}{x^{2} - 1}$, not $\dfrac{4}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
            (
                r"Denesting the nested radical $\sqrt{13+2\sqrt{30}}$ is claimed to equal $\sqrt{10}-\sqrt{3}$.",
                False,
                
            ),
            (
                r"Folding the distance, $|\ell|+|\ell-21|$ equals $21$ throughout the closed interval $0\le\ell\le 21$.",
                True,
                
            ),
            (
                r"Evaluating the cubes at $r=4$, $s=11$, $t=-15$ (which sum to $0$) is claimed to give $r^3+s^3+t^3=3rst$, hence $-1980$.",
                True,
                
            ),
        ],
        overview=r"Unlinked claims: a halved $gh$ coefficient, the middle sign in $(h^3+11^3)/(h+11)$, the wrong conjugate of $\sqrt{13+2\sqrt{30}}$, the folded distance $21$ on $[0,21]$, and $r^3+s^3+t^3=3rst$ at $(4,11,-15)$.",
    ),
    task(
        title="Nested j-minus-reciprocal over a plus",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"The coefficient of $gh$ in the expansion of $(f-2g-3h)^2$ is recorded as $12$.",
                True,
                
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8h^2b}{4x^2-16}}{\dfrac{4hb}{2x+4}}$ simplifies to $\dfrac{h}{x+2}$ for $x\neq\pm 2$ and $h,b\neq 0$.""",
                False,
                r"""Factor every polynomial factor before cancelling:

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

Linear factor:

$$2x+4=2(x+2)$$

Division:

$$\frac{8h^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4hb}$$

Result:

$$\frac{h}{x - 2}$$

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"Composing the fifth-power stack $(w^{2/5})^{5/2}$ is said to return $w$ whenever $w>0$.",
                True,
                
            ),
            (
                r"Treating the scaled quotient $|2\ell|/\ell$ as identically $2$ for every $\ell\neq 0$ is proposed.",
                False,
                
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{2x-2}{x^2-1}-\dfrac{1}{1+x}+\dfrac{1}{x-1}-\dfrac{1}{1-x}=\dfrac{2}{x-1}$.""",
                False,
                r"""Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\dfrac{1}{1-x}=-\dfrac{1}{x-1}$:

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

Clear:

$$\frac{2x-2}{x^2-1}-\frac{1}{x+1}+\frac{1}{x-1}+\frac{1}{x-1}$$

Simplified left-hand side:

$$\frac{3 x + 1}{x^{2} - 1}$$

After the full clear the left-hand side is $\frac{3 x + 1}{x^{2} - 1}$, not $\dfrac{2}{x-1}$. The discrepancy appears only at the last coefficient.""",
            ),
        ],
        overview=r"Independent claims: the $gh$ coefficient $12$ in $(f-2g-3h)^2$, $(j-1/j)/(j+1/j)=(j^2-1)/(j^2+1)$, $(w^{2/5})^{5/2}=w$ for $w>0$, $|2\ell|/\ell$ only piecewise $2$, and $|k-m|=2\sqrt{29}$ rather than $6$.",
    ),
    task(
        title="Closing card with thirty-five and a piecewise ratio",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Expanding the square $(2f-5g+h)^2$ is written with the coefficient of $fg$ equal to $-10$.",
                False,
                
            ),
            (
                r"Cancelling a cubic against a quadratic, $\dfrac{s^3-35s}{s^2-35}$ is said to equal $s$ whenever $s^2\neq 35$.",
                True,
                
            ),
            (
                r"""Let $m$ be a nonzero real letter. Twice the reciprocal of the sum of $m$ and the reciprocal of $m$ equals $m$ divided by the sum of the square of $m$ and one.""",
                False,
                r"""Translate the wording into symbols before simplifying:

Left-hand wording:

$$\frac{2}{m+\frac{1}{m}}=\frac{2m}{m^2+1}$$

Right-hand wording:

$$\frac{m}{m^2+1}$$

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"Adding opposite quotients, $|\ell|/\ell+|\ell|/(-\ell)$ equals $0$ for every $\ell\neq 0$.",
                True,
                
            ),
            (
                r"Given the large sum $u+v=35$ and product $uv=21$, the sum $u^2+v^2$ is claimed to equal $1225$.",
                False,
                
            ),
        ],
        overview=r"Five unlinked lines: a halved $fg$ coefficient, $(s^3-35s)/(s^2-35)=s$, the wrong conjugate of $\sqrt{21+12\sqrt{3}}$, $|\ell|/\ell+|\ell|/(-\ell)=0$, and $u^2+v^2=1183$ rather than $1225$.",
    ),
]
