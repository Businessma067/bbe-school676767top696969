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
                r"""From the elementary symmetric data $u+v=5$ and $uv=6$, the distance $|u-v|$ is evaluated by first forming $(u-v)^2=(u+v)^2-4uv$ and then taking the principal square root, yielding the constant $1$.""",
                True,
                r"""Pass to the squared gap before taking roots:

Identity:

$$(u-v)^2=(u+v)^2-4uv=5^2-4\cdot 6=1$$

Principal root:

$$|u-v|=\sqrt{1}=1$$

The printed constant matches.""",
            ),
            (
                r"Reducing $\dfrac{j^3-1331}{j-11}$ to $j^2+121$ for $j\neq 11$ is treated as an identity, because substituting $j=0$ makes both sides equal $121$.",
                False,
                
            ),
            (
                r"""Cancelling $w-2$ from $\dfrac{w^3-8}{w-2}$ leaves $w^2+2w+4$ for $w\neq 2$. Substituting $w=1$ recovers the same integer on the original fraction and on the reduced quadratic.""",
                True,
                r"""Difference of cubes with constant $2^3$:

Identity:

$$\frac{w^3-8}{w-2}=w^2+2w+4$$

The substitution check is consistent with a true polynomial identity.""",
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
                r"""Cancelling $m-6$ from $\dfrac{m^3-216}{m-6}$ leaves $m^2+6m+36$ for $m\neq 6$. Substituting $m=1$ recovers the same integer on the original fraction and on the reduced quadratic.""",
                True,
                r"""Difference of cubes with constant $6^3$:

Identity:

$$\frac{m^3-216}{m-6}=m^2+6m+36$$

The substitution check is consistent with a true polynomial identity.""",
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
                r"""For $q\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{q}{q-1}-\dfrac{q-1}{q}}{\dfrac{q}{q-1}+\dfrac{q-1}{q}}$ is reduced to $\dfrac{2q-1}{2q^2-2q+1}$ after clearing the inner denominators once, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Clear each inner pair over $q(q-1)$:

Numerator:

$$\frac{q}{q-1}-\frac{q-1}{q}=\frac{q^2-(q-1)^2}{q(q-1)}=\frac{2q-1}{q(q-1)}$$

Denominator:

$$\frac{q}{q-1}+\frac{q-1}{q}=\frac{q^2+(q-1)^2}{q(q-1)}=\frac{2q^2-2q+1}{q(q-1)}$$

Quotient:

$$\frac{2q-1}{2q^2-2q+1}$$

The printed target matches the reduced form.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Simplifying $16^{5/4}$ is treated as producing the integer $32$.",
                True,
                
            ),
            (
                r"""Provided $v\neq 0$, reducing $\dfrac{(v^{2})^{3}}{v^{4}}$ by multiplying exponents upstairs then subtracting downstairs leaves $v^{2}$. A numerical check at $v=2$ recovers $4$ on both sides and is consistent with the identity.""",
                True,
                r"""Numerator:

$$(v^{2})^{3}=v^{6}$$

Quotient:

$$\frac{v^{6}}{v^{4}}=v^{2}$$

The check at $v=2$ is consistent because the algebra already matches.""",
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
                r"""Provided $c\neq 0$, reducing $\dfrac{(c^{2})^{3}}{c^{4}}$ by multiplying exponents upstairs then subtracting downstairs leaves $c^{2}$. A numerical check at $c=2$ recovers $4$ on both sides and is consistent with the identity.""",
                True,
                r"""Numerator:

$$(c^{2})^{3}=c^{6}$$

Quotient:

$$\frac{c^{6}}{c^{4}}=c^{2}$$

The check at $c=2$ is consistent because the algebra already matches.""",
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
                r"""Denesting $\sqrt{14+2\sqrt{13}}$ is claimed to produce $\sqrt{13}-1$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Square the printed difference:

Square:

$$(\sqrt{13}-1)^2=13-2\sqrt{13}+1=14-2\sqrt{13}$$

The cross term has the wrong sign for $\sqrt{14+2\sqrt{13}}$.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"On the half-line $h<0$, the quotient $|h|/(-h)$ equals $1$.",
                True,
                
            ),
            (
                r"""From the elementary symmetric data $u+v=7$ and $uv=10$, the distance $|u-v|$ is evaluated by first forming $(u-v)^2=(u+v)^2-4uv$ and then taking the principal square root, yielding the constant $3$.""",
                True,
                r"""Pass to the squared gap before taking roots:

Identity:

$$(u-v)^2=(u+v)^2-4uv=7^2-4\cdot 10=9$$

Principal root:

$$|u-v|=\sqrt{9}=3$$

The printed constant matches.""",
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
                r"""Provided $m\neq 0$, reducing $\dfrac{(m^{2})^{3}}{m^{4}}$ by cancelling the printed digits $2,3,4$ in order is claimed to leave $m^{-1}$, and substituting $m=1$ is offered as confirmation.""",
                False,
                r"""Correct reduction:

$$\frac{(m^{2})^{3}}{m^{4}}=m^{2}$$

Digit-wise cancellation is not a law of exponents. Agreement at $m=1$ hides the error because every power of $1$ equals $1$.""",
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
                r"""From the elementary symmetric data $u+v=12$ and $uv=32$, the distance $|u-v|$ is evaluated by first forming $(u-v)^2=(u+v)^2-4uv$ and then taking the principal square root, yielding the constant $4$.""",
                True,
                r"""Pass to the squared gap before taking roots:

Identity:

$$(u-v)^2=(u+v)^2-4uv=12^2-4\cdot 32=16$$

Principal root:

$$|u-v|=\sqrt{16}=4$$

The printed constant matches.""",
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
                r"""A marker treats $w^4+4z^4$ as identically equal to $(w^2+2z^2)^2$ for every real pair $(w,z)$, citing a shortened Sophie Germain argument.""",
                False,
                r"""The expression $w^4+4z^4$ is not already a square:

Expand:

$$(w^2+2z^2)^2=w^4+4w^2z^2+4z^4$$

An extra middle term $4w^2z^2$ appears. The Sophie Germain rewrite must subtract $(2wz)^2$ after adding it.""",
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
                r"""From the elementary symmetric data $u+v=15$ and $uv=50$, the distance $|u-v|$ is evaluated by first forming $(u-v)^2=(u+v)^2-4uv$ and then taking the principal square root, yielding the constant $5$.""",
                True,
                r"""Pass to the squared gap before taking roots:

Identity:

$$(u-v)^2=(u+v)^2-4uv=15^2-4\cdot 50=25$$

Principal root:

$$|u-v|=\sqrt{25}=5$$

The printed constant matches.""",
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
                r"""For $z\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{z}{z-1}-\dfrac{z-1}{z}}{\dfrac{z}{z-1}+\dfrac{z-1}{z}}$ is reduced to $\dfrac{2z-1}{2z^2-2z+1}$ after clearing the inner denominators once.""",
                True,
                r"""Clear each inner pair over $z(z-1)$:

Numerator:

$$\frac{z}{z-1}-\frac{z-1}{z}=\frac{z^2-(z-1)^2}{z(z-1)}=\frac{2z-1}{z(z-1)}$$

Denominator:

$$\frac{z}{z-1}+\frac{z-1}{z}=\frac{z^2+(z-1)^2}{z(z-1)}=\frac{2z^2-2z+1}{z(z-1)}$$

Quotient:

$$\frac{2z-1}{2z^2-2z+1}$$

The printed target matches the reduced form.""",
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
                r"""Cancelling $t-4$ from $\dfrac{t^3-64}{t-4}$ leaves $t^2+4t+16$ for $t\neq 4$. Substituting $t=1$ recovers the same integer on the original fraction and on the reduced quadratic.""",
                True,
                r"""Difference of cubes with constant $4^3$:

Identity:

$$\frac{t^3-64}{t-4}=t^2+4t+16$$

The substitution check is consistent with a true polynomial identity.""",
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
                r"""For $v\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{v}{v-1}-\dfrac{v-1}{v}}{\dfrac{v}{v-1}+\dfrac{v-1}{v}}$ is reduced to $\dfrac{2v-1}{2v^2-2v+1}$ after clearing the inner denominators once, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Clear each inner pair over $v(v-1)$:

Numerator:

$$\frac{v}{v-1}-\frac{v-1}{v}=\frac{v^2-(v-1)^2}{v(v-1)}=\frac{2v-1}{v(v-1)}$$

Denominator:

$$\frac{v}{v-1}+\frac{v-1}{v}=\frac{v^2+(v-1)^2}{v(v-1)}=\frac{2v^2-2v+1}{v(v-1)}$$

Quotient:

$$\frac{2v-1}{2v^2-2v+1}$$

The printed target matches the reduced form.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""Cancelling $w-12$ from $\dfrac{w^3-1728}{w-12}$ leaves $w^2+12w+144$ for $w\neq 12$. Substituting $w=1$ recovers the same integer on the original fraction and on the reduced quadratic.""",
                True,
                r"""Difference of cubes with constant $12^3$:

Identity:

$$\frac{w^3-1728}{w-12}=w^2+12w+144$$

The substitution check is consistent with a true polynomial identity.""",
            ),
            (
                r"Subtracting the swapped pair $\dfrac{k}{m}-\dfrac{m}{k}$ for $km\neq 0$ is said to equal $\dfrac{k^2-m^2}{km}$, and substituting $k=5$, $m=3$ makes both sides equal $16/15$.",
                True,
                
            ),
            (
                r"""Denesting $\sqrt{10+4\sqrt{6}}$ is claimed to produce $\sqrt{6}+2$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                True,
                r"""Square:

$$(\sqrt{6}+2)^2=6+4\sqrt{6}+4=10+4\sqrt{6}$$

Match.""",
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
                r"""Denesting $\sqrt{15+6\sqrt{6}}$ is claimed to produce $3+\sqrt{6}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                True,
                r"""Square:

$$(3+\sqrt{6})^2=9+6\sqrt{6}+6=15+6\sqrt{6}$$

Match.""",
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
                r"""Provided $v\neq 0$, reducing $\dfrac{(v^{2})^{3}}{v^{4}}$ by cancelling the printed digits $2,3,4$ in order is claimed to leave $v^{-1}$, and substituting $v=1$ is offered as confirmation.""",
                False,
                r"""Correct reduction:

$$\frac{(v^{2})^{3}}{v^{4}}=v^{2}$$

Digit-wise cancellation is not a law of exponents. Agreement at $v=1$ hides the error because every power of $1$ equals $1$.""",
            ),
            (
                r"Matching positive roots, $\sqrt{13+4\sqrt{3}}$ is identified with $1+2\sqrt{3}$.",
                True,
                
            ),
            (
                r"""A marker treats $u^4+4v^4$ as identically equal to $(u^2+2v^2)^2$ for every real pair $(u,v)$, citing a shortened Sophie Germain argument.""",
                False,
                r"""The expression $u^4+4v^4$ is not already a square:

Expand:

$$(u^2+2v^2)^2=u^4+4u^2v^2+4v^4$$

An extra middle term $4u^2v^2$ appears. The Sophie Germain rewrite must subtract $(2uv)^2$ after adding it.""",
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
                r"""A marker treats $h^4+4k^4$ as identically equal to $(h^2+2k^2)(h^2-2k^2)$ for every real pair $(h,k)$, citing a shortened Sophie Germain argument.""",
                False,
                r"""A difference of squares in $h^2$ and $2k^2$ would give

Product:

$$(h^2+2k^2)(h^2-2k^2)=h^4-4k^4$$

The sign of the last term is wrong for $h^4+4k^4$.""",
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
                r"""From the elementary symmetric data $u+v=13$ and $uv=36$, the distance $|u-v|$ is evaluated by first forming $(u-v)^2=(u+v)^2-4uv$ and then taking the principal square root, yielding the constant $5$.""",
                True,
                r"""Pass to the squared gap before taking roots:

Identity:

$$(u-v)^2=(u+v)^2-4uv=13^2-4\cdot 36=25$$

Principal root:

$$|u-v|=\sqrt{25}=5$$

The printed constant matches.""",
            ),
            (
                r"Treating the sign quotient $|\ell|/\ell$ as identically $1$ for every $\ell\neq 0$ is proposed.",
                False,
                
            ),
            (
                r"""Cancelling $j-13$ from $\dfrac{j^3-2197}{j-13}$ leaves $j^2+13j+169$ for $j\neq 13$. Substituting $j=1$ recovers the same integer on the original fraction and on the reduced quadratic.""",
                True,
                r"""Difference of cubes with constant $13^3$:

Identity:

$$\frac{j^3-2197}{j-13}=j^2+13j+169$$

The substitution check is consistent with a true polynomial identity.""",
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
                r"""Adding and subtracting $4f^2g^2$ inside $f^4+4g^4$ is claimed to produce the difference of squares $(f^2+2g^2)^2-(2fg)^2$, which then factors as $(f^2-2fg+2g^2)(f^2+2fg+2g^2)$ on every real pair $(f,g)$, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Complete to a difference of squares by inserting $\pm 4f^2g^2$:

Rewrite:

$$f^4+4g^4=(f^2+2g^2)^2-(2fg)^2$$

Factor:

$$=(f^2-2fg+2g^2)(f^2+2fg+2g^2)$$

Both steps are identities in the two letters.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""Cancelling $m-6$ from $\dfrac{m^3-216}{m-6}$ leaves $m^2+6m+36$ for $m\neq 6$. Substituting $m=1$ recovers the same integer on the original fraction and on the reduced quadratic, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Difference of cubes with constant $6^3$:

Identity:

$$\frac{m^3-216}{m-6}=m^2+6m+36$$

The substitution check is consistent with a true polynomial identity.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""For $u\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{u}{u-1}-\dfrac{u-1}{u}}{\dfrac{u}{u-1}+\dfrac{u-1}{u}}$ is reduced to $\dfrac{2u-1}{2u^2-2u+1}$ after clearing the inner denominators once.""",
                True,
                r"""Clear each inner pair over $u(u-1)$:

Numerator:

$$\frac{u}{u-1}-\frac{u-1}{u}=\frac{u^2-(u-1)^2}{u(u-1)}=\frac{2u-1}{u(u-1)}$$

Denominator:

$$\frac{u}{u-1}+\frac{u-1}{u}=\frac{u^2+(u-1)^2}{u(u-1)}=\frac{2u^2-2u+1}{u(u-1)}$$

Quotient:

$$\frac{2u-1}{2u^2-2u+1}$$

The printed target matches the reduced form.""",
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
                r"""Cancelling $q-10$ from $\dfrac{q^3-1000}{q-10}$ leaves $q^2+10q+100$ for $q\neq 10$. Substituting $q=1$ recovers the same integer on the original fraction and on the reduced quadratic.""",
                True,
                r"""Difference of cubes with constant $10^3$:

Identity:

$$\frac{q^3-1000}{q-10}=q^2+10q+100$$

The substitution check is consistent with a true polynomial identity.""",
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
                r"""Provided $c\neq 0$, reducing $\dfrac{(c^{2})^{3}}{c^{4}}$ by multiplying exponents upstairs then subtracting downstairs leaves $c^{2}$. A numerical check at $c=2$ recovers $4$ on both sides and is consistent with the identity, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Numerator:

$$(c^{2})^{3}=c^{6}$$

Quotient:

$$\frac{c^{6}}{c^{4}}=c^{2}$$

The check at $c=2$ is consistent because the algebra already matches.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""Denesting $\sqrt{9+4\sqrt{5}}$ is claimed to produce $2+\sqrt{5}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                True,
                r"""Square:

$$(2+\sqrt{5})^2=4+4\sqrt{5}+5=9+4\sqrt{5}$$

Match.""",
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
                r"""Provided $g\neq 0$, reducing $\dfrac{(g^{2})^{3}}{g^{4}}$ by cancelling the printed digits $2,3,4$ in order is claimed to leave $g^{-1}$, and substituting $g=1$ is offered as confirmation.""",
                False,
                r"""Correct reduction:

$$\frac{(g^{2})^{3}}{g^{4}}=g^{2}$$

Digit-wise cancellation is not a law of exponents. Agreement at $g=1$ hides the error because every power of $1$ equals $1$.""",
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
                r"""Denesting $\sqrt{11+6\sqrt{2}}$ is claimed to produce $3-\sqrt{2}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Square:

$$(3-\sqrt{2})^2=9-6\sqrt{2}+2=11-6\sqrt{2}$$

Wrong middle sign.

A single probe at $0$ cannot replace the algebraic comparison above.""",
            ),
            (
                r"Cancelling a difference of squares, $\dfrac{j^2-121}{j-11}$ is said to leave $j+11$ for $j\neq 11$, and substituting $j=0$ recovers $11$ on both sides.",
                True,
                
            ),
            (
                r"""From the elementary symmetric data $u+v=6$ and $uv=8$, the distance $|u-v|$ is evaluated by first forming $(u-v)^2=(u+v)^2-4uv$ and then taking the principal square root, yielding the constant $2$.""",
                True,
                r"""Pass to the squared gap before taking roots:

Identity:

$$(u-v)^2=(u+v)^2-4uv=6^2-4\cdot 8=4$$

Principal root:

$$|u-v|=\sqrt{4}=2$$

The printed constant matches.""",
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
                r"""From the elementary symmetric data $u+v=12$ and $uv=32$, the distance $|u-v|$ is evaluated by first forming $(u-v)^2=(u+v)^2-4uv$ and then taking the principal square root, yielding the constant $4$, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Pass to the squared gap before taking roots:

Identity:

$$(u-v)^2=(u+v)^2-4uv=12^2-4\cdot 32=16$$

Principal root:

$$|u-v|=\sqrt{16}=4$$

The printed constant matches.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""A marker treats $n^4+4m^4$ as identically equal to $(n^2+2m^2)(n^2-2m^2)$ for every real pair $(n,m)$, citing a shortened Sophie Germain argument.""",
                False,
                r"""A difference of squares in $n^2$ and $2m^2$ would give

Product:

$$(n^2+2m^2)(n^2-2m^2)=n^4-4m^4$$

The sign of the last term is wrong for $n^4+4m^4$.""",
            ),
            (
                r"Simplifying a monomial radical, $(16k^4)^{1/4}$ is rewritten as $2k$ for every real $k$.",
                False,
                
            ),
            (
                r"""For $m\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{m}{m-1}-\dfrac{m-1}{m}}{\dfrac{m}{m-1}+\dfrac{m-1}{m}}$ is reduced to $\dfrac{2m-1}{2m^2-2m}$ after clearing the inner denominators once.""",
                False,
                r"""Clear each inner pair over $m(m-1)$:

Numerator:

$$\frac{m}{m-1}-\frac{m-1}{m}=\frac{m^2-(m-1)^2}{m(m-1)}=\frac{2m-1}{m(m-1)}$$

Denominator:

$$\frac{m}{m-1}+\frac{m-1}{m}=\frac{m^2+(m-1)^2}{m(m-1)}=\frac{2m^2-2m+1}{m(m-1)}$$

Quotient:

$$\frac{2m-1}{2m^2-2m+1}$$

The printed denominator drops the constant $+1$, so the claim is false.""",
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
                r"""For $z\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{z}{z-1}-\dfrac{z-1}{z}}{\dfrac{z}{z-1}+\dfrac{z-1}{z}}$ is reduced to $\dfrac{2z-1}{2z^2-2z+1}$ after clearing the inner denominators once, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Clear each inner pair over $z(z-1)$:

Numerator:

$$\frac{z}{z-1}-\frac{z-1}{z}=\frac{z^2-(z-1)^2}{z(z-1)}=\frac{2z-1}{z(z-1)}$$

Denominator:

$$\frac{z}{z-1}+\frac{z-1}{z}=\frac{z^2+(z-1)^2}{z(z-1)}=\frac{2z^2-2z+1}{z(z-1)}$$

Quotient:

$$\frac{2z-1}{2z^2-2z+1}$$

The printed target matches the reduced form.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""Cancelling $j-8$ from $\dfrac{j^3-512}{j-8}$ leaves $j^2+8j+64$ for $j\neq 8$. Substituting $j=1$ recovers the same integer on the original fraction and on the reduced quadratic.""",
                True,
                r"""Difference of cubes with constant $8^3$:

Identity:

$$\frac{j^3-512}{j-8}=j^2+8j+64$$

The substitution check is consistent with a true polynomial identity.""",
            ),
            (
                r"Opposite linear forms satisfy $|3\ell-21|=|21-3\ell|$ for every real $\ell$.",
                True,
                
            ),
            (
                r"""Denesting $\sqrt{8+2\sqrt{15}}$ is claimed to produce $\sqrt{5}+\sqrt{3}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign.""",
                True,
                r"""Square:

$$(\sqrt{5}+\sqrt{3})^2=5+2\sqrt{15}+3=8+2\sqrt{15}$$

Both sides positive.""",
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
                r"""For $s\notin\{0,1\}$, the nested quotient $\dfrac{\dfrac{s}{s-1}-\dfrac{s-1}{s}}{\dfrac{s}{s-1}+\dfrac{s-1}{s}}$ is reduced to $\dfrac{2s-1}{2s^2-2s+1}$ after clearing the inner denominators once, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Clear each inner pair over $s(s-1)$:

Numerator:

$$\frac{s}{s-1}-\frac{s-1}{s}=\frac{s^2-(s-1)^2}{s(s-1)}=\frac{2s-1}{s(s-1)}$$

Denominator:

$$\frac{s}{s-1}+\frac{s-1}{s}=\frac{s^2+(s-1)^2}{s(s-1)}=\frac{2s^2-2s+1}{s(s-1)}$$

Quotient:

$$\frac{2s-1}{2s^2-2s+1}$$

The printed target matches the reduced form.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""Denesting $\sqrt{15+6\sqrt{6}}$ is claimed to produce $3+\sqrt{6}$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                True,
                r"""Square:

$$(3+\sqrt{6})^2=9+6\sqrt{6}+6=15+6\sqrt{6}$$

Match.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""Provided $r\neq 0$, reducing $\dfrac{(r^{2})^{3}}{r^{4}}$ by multiplying exponents upstairs then subtracting downstairs leaves $r^{2}$. A numerical check at $r=2$ recovers $4$ on both sides and is consistent with the identity.""",
                True,
                r"""Numerator:

$$(r^{2})^{3}=r^{6}$$

Quotient:

$$\frac{r^{6}}{r^{4}}=r^{2}$$

The check at $r=2$ is consistent because the algebra already matches.""",
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
                r"""Denesting $\sqrt{7+4\sqrt{3}}$ is claimed to produce $\sqrt{3}-2$ as the principal square root, after comparing squared conjugates and discarding the form whose cross term has the opposite sign, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Square:

$$(\sqrt{3}-2)^2=3-4\sqrt{3}+4=7-4\sqrt{3}$$

Wrong sign on the middle term; also $\sqrt{3}-2<0$ cannot be a principal root.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""A marker treats $h^4+4k^4$ as identically equal to $(h^2+2k^2)(h^2-2k^2)$ for every real pair $(h,k)$, citing a shortened Sophie Germain argument, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""A difference of squares in $h^2$ and $2k^2$ would give

Product:

$$(h^2+2k^2)(h^2-2k^2)=h^4-4k^4$$

The sign of the last term is wrong for $h^4+4k^4$.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
                r"""From the elementary symmetric data $u+v=11$ and $uv=24$, the distance $|u-v|$ is evaluated by first forming $(u-v)^2=(u+v)^2-4uv$ and then taking the principal square root, yielding the constant $6$.""",
                False,
                r"""Pass to the squared gap before taking roots:

Identity:

$$(u-v)^2=(u+v)^2-4uv=11^2-4\cdot 24=25$$

Principal root:

$$|u-v|=\sqrt{25}=5$$

The true distance is $5$, not $6$.""",
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
                r"""A marker treats $j^4+4k^4$ as identically equal to $(j^2+2jk+2k^2)^2$ for every real pair $(j,k)$, citing a shortened Sophie Germain argument, and a margin check at the probe value equal to $0$ is cited as supporting evidence.""",
                False,
                r"""Squaring one Sophie Germain factor alone produces

Expand:

$$(j^2+2jk+2k^2)^2=j^4+4j^3k+8j^2k^2+8jk^3+4k^4$$

Cross terms survive; the identity requires the product of both conjugate factors.

A single probe at $0$ cannot replace the algebraic comparison above.""",
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
