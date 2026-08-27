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
                r"After expanding $(2f+g-3h)^2$ and collecting like terms, the coefficient of $fh$ is read off as $-12$.",
                True,
                r"""The square of a three-term sum produces twice every pairwise product. The $f$--$h$ cross term is
$$2\cdot(2f)\cdot(-3h)=-12fh.$$
The collected coefficient of $fh$ is therefore $-12$, matching the claim. (The remaining cross terms are $4fg$ and $-6gh$, which are not asked for here.)""",
            ),
            (
                r"Reducing $\dfrac{j^3-1331}{j-11}$ to $j^2+121$ for $j\neq 11$ is treated as an identity, because substituting $j=0$ makes both sides equal $121$.",
                False,
                r"""Difference of cubes with $1331=11^3$ gives
$$\frac{j^3-1331}{j-11}=j^2+11j+121\qquad(j\neq 11).$$
The printed remainder drops the linear term $11j$. At $j=0$ that missing term happens to vanish, so both the original fraction and $j^2+121$ equal $121$, but the two polynomials differ at every other point (for instance at $j=1$ the genuine remainder is $133$ while $1+121=122$). A single vanishing check does not restore the identity.""",
            ),
            (
                r"Denesting $\sqrt{14+2\sqrt{13}}$ is claimed to produce the difference $\sqrt{13}-1$.",
                False,
                r"""Square the two candidate conjugates:
$$(1+\sqrt{13})^2=1+2\sqrt{13}+13=14+2\sqrt{13},\qquad(\sqrt{13}-1)^2=14-2\sqrt{13}.$$
Both $1+\sqrt{13}$ and the principal square root are positive, so
$$\sqrt{14+2\sqrt{13}}=1+\sqrt{13}.$$
The printed difference denests the companion $\sqrt{14-2\sqrt{13}}$ instead.""",
            ),
            (
                r"Restricting to negative $\ell$, the quotient $|\ell|/\ell$ equals $-1$.",
                True,
                r"""On $\ell<0$ the definition gives $|\ell|=-\ell$, hence
$$\frac{|\ell|}{\ell}=\frac{-\ell}{\ell}=-1.$$
The quotient is the piecewise constant $-1$ on that half-line (and equals $+1$ on $\ell>0$, which is not claimed).""",
            ),
            (
                r"Given the elementary symmetric data $k+m=11$ and $km=13$, the sum of squares $k^2+m^2$ is evaluated as $95$.",
                True,
                r"""The identity $k^2+m^2=(k+m)^2-2km$ does not require finding $k$ or $m$:
$$k^2+m^2=11^2-2\cdot 13=121-26=95.$$
Omitting the correction $-2km$ would have left the distractor $121$.""",
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
                r"""At $(1,1)$ one has $1+4=5$ and $(1+2+2)(1-2+2)=5\cdot 1=5$. The numerical match is not accidental: adding and subtracting $4f^2g^2$ produces a difference of squares,
$$f^4+4g^4=(f^2+2g^2)^2-(2fg)^2=(f^2-2fg+2g^2)(f^2+2fg+2g^2).$$
The identity holds for every $f$ and $g$, so the factorisation is legitimate.""",
            ),
            (
                r"Cancelling $h-14$ from $\dfrac{h^2-21h+98}{h-14}$ is said to leave $h-7$ for $h\neq 14$, and substituting $h=0$ recovers $-7$ on both the original fraction and the reduced line.",
                True,
                r"""The numerator factors as $(h-14)(h-7)$ because $14+7=21$ and $14\cdot 7=98$. For $h\neq 14$,
$$\frac{(h-14)(h-7)}{h-14}=h-7.$$
At $h=0$ the original fraction is $98/(-14)=-7$, matching the reduced value. The check is consistent with a genuine cancellation.""",
            ),
            (
                r"Raising the stack $(j^2)^{3/2}$ is claimed to equal $j^3$ for every real $j$.",
                False,
                r"""For real $j$,
$$(j^2)^{3/2}=\bigl(|j|^2\bigr)^{3/2}=|j|^3.$$
At $j=-2$ the left-hand side is $4^{3/2}=8$ while $j^3=-8$. The identity holds only on $j\ge 0$.""",
            ),
            (
                r"On the half-line $s>16$, the quotient $\dfrac{|s-16|}{16-s}$ is claimed to equal $1$.",
                False,
                r"""For $s>16$ one has $|s-16|=s-16$ and $16-s=-(s-16)$, so
$$\frac{|s-16|}{16-s}=\frac{s-16}{-(s-16)}=-1.$$
The printed value $1$ has the wrong sign; the quotient is the piecewise constant $-1$ on that half-line.""",
            ),
            (
                r"Given the pair $u+v=16$ and $uv=15$, the distance $|u-v|$ is read off as $14$.",
                True,
                r"""The elementary identity
$$(u-v)^2=(u+v)^2-4uv=256-60=196$$
gives $|u-v|=\sqrt{196}=14$. Taking $196$ itself, or taking $u+v=16$ as the distance, would both be wrong; the square root is required.""",
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
                r"""Twice the $g$--$h$ product is
$$2\cdot(-3g)\cdot h=-6gh.$$
The printed $+6$ has the wrong sign; the two sides of the claimed expansion differ by $12gh$.""",
            ),
            (
                r"Clearing the two-storey nest $1+\dfrac{1}{1+\dfrac{1}{j}}$ for $j\neq 0$ and $j\neq -1$ is said to leave $\dfrac{2j+1}{j+1}$.",
                True,
                r"""Innermost, $1+1/j=(j+1)/j$, so
$$\frac{1}{1+\dfrac{1}{j}}=\frac{j}{j+1}.$$
Adding the outer $1$ produces
$$1+\frac{j}{j+1}=\frac{j+1+j}{j+1}=\frac{2j+1}{j+1}.$$""",
            ),
            (
                r"Simplifying $16^{5/4}$ is treated as producing the integer $32$.",
                True,
                r"""Write $16=2^4$:
$$16^{5/4}=(2^4)^{5/4}=2^5=32.$$
Equivalently $\bigl(16^{1/4}\bigr)^5=2^5=32$. The distractor $16^{3/4}=8$ uses a different exponent.""",
            ),
            (
                r"On the open interval $-11<\ell<11$, the sum $|\ell+11|+|\ell-11|$ is claimed to equal $2|\ell|$.",
                False,
                r"""Inside $|\ell|<11$ the two insides have opposite signs, and
$$|\ell+11|+|\ell-11|=(\ell+11)+(11-\ell)=22.$$
The printed $2|\ell|$ is the formula that holds outside $|\ell|\ge 11$, not on the stated interval. At $\ell=0$ the sum is $22$, not $0$.""",
            ),
            (
                r"Whenever $r+s+t=0$ at the specific values $r=2$, $s=11$, $t=-13$, the sum of cubes $r^3+s^3+t^3$ equals $3rst$, hence $-858$.",
                True,
                r"""The identity $r^3+s^3+t^3-3rst=(r+s+t)(\cdots)$ collapses when $r+s+t=0$, leaving $r^3+s^3+t^3=3rst$. Directly,
$$8+1331+(-2197)=-858,\qquad 3\cdot 2\cdot 11\cdot(-13)=-858.$$
The sum of cubes is not identically $0$ merely because the letters sum to $0$.""",
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
                r"""Write the factors as $(n^2+2\pm 2n)$. Their product is a difference of squares,
$$(n^2+2)^2-(2n)^2=n^4+4n^2+4-4n^2=n^4+4,$$
in which every odd power has cancelled. Equivalently the $n^3$ contributions $n^2\cdot(-2n)+2n\cdot n^2$ sum to $0$. The product equals $n^4+4$, an even polynomial.""",
            ),
            (
                r"Reducing $\dfrac{w^3-2744}{w-14}$ to $w^2+196$ for $w\neq 14$ is treated as an identity after a check at $w=0$ gives $196$ on both sides.",
                False,
                r"""Since $2744=14^3$,
$$\frac{w^3-2744}{w-14}=w^2+14w+196\qquad(w\neq 14).$$
Dropping $14w$ leaves $w^2+196$. At $w=0$ the missing term vanishes and both sides equal $196$, but at $w=1$ the genuine remainder is $211$ while $1+196=197$. The zero-substitution does not justify the reduction.""",
            ),
            (
                r"Denesting $\sqrt{15+2\sqrt{14}}$ is claimed to equal $\sqrt{14}-1$.",
                False,
                r"""$$(1+\sqrt{14})^2=1+2\sqrt{14}+14=15+2\sqrt{14},\qquad(\sqrt{14}-1)^2=15-2\sqrt{14}.$$
The principal square root is $1+\sqrt{14}$, not the printed difference.""",
            ),
            (
                r"Pulling out the positive factor $2$, the identity $|2m-14|=2|m-7|$ is accepted for every real $m$.",
                True,
                r"""Absolute value splits over a product:
$$|2m-14|=|2(m-7)|=|2|\,|m-7|=2|m-7|.$$
No sign restriction on $m$ is required.""",
            ),
            (
                r"Evaluating the cubes at $f=5$, $g=8$, $h=-13$ (which sum to $0$) is claimed to give $f^3+g^3+h^3=-1560$.",
                True,
                r"""First $5+8-13=0$, so $f^3+g^3+h^3=3fgh$. Then
$$3\cdot 5\cdot 8\cdot(-13)=-1560.$$
Directly, $125+512-2197=-1560$. The sum of cubes is the product $3fgh$, not $0$.""",
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
                r"""Twice the $g$--$h$ product is
$$2\cdot(2g)\cdot(-h)=-4gh.$$
The printed $+4$ is the wrong sign. The full expansion is $f^2+4g^2+h^2+4fg-2fh-4gh$.""",
            ),
            (
                r"After cancelling, $\dfrac{j^3-3375}{j-15}$ equals $j^2+15j+225$ for $j\neq 15$, and substituting $j=1$ gives $241$ on both the original fraction and the reduced quadratic.",
                True,
                r"""Difference of cubes with $3375=15^3$:
$$\frac{j^3-3375}{j-15}=j^2+15j+225\qquad(j\neq 15).$$
At $j=1$ the quadratic is $1+15+225=241$, while
$$\frac{1-3375}{1-15}=\frac{-3374}{-14}=241.$$
The linear term is visible at this test point, unlike a check at $0$.""",
            ),
            (
                r"Composing the stack $\bigl(k^{2/3}\bigr)^{3/2}$ is claimed to return $k$ for every real $k\neq 0$.",
                False,
                r"""In the reals, $k^{2/3}=\bigl(k^2\bigr)^{1/3}=|k|^{2/3}$. Then
$$\bigl(|k|^{2/3}\bigr)^{3/2}=|k|.$$
At $k=-8$ the stack is $4$, not $-8$. The identity holds for $k>0$ only.""",
            ),
            (
                r"On the half-line $h<0$, the quotient $|h|/(-h)$ equals $1$.",
                True,
                r"""For $h<0$ one has $|h|=-h$, so
$$\frac{|h|}{-h}=\frac{-h}{-h}=1.$$
The displayed quotient is the piecewise constant $1$ on that half-line.""",
            ),
            (
                r"Given $u+v=15$ and $uv=14$, the sum $u^2+v^2$ is evaluated as $197$.",
                True,
                r"""$$u^2+v^2=(u+v)^2-2uv=225-28=197.$$
The distractor $225$ is $(u+v)^2$ with the cross term dropped.""",
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
                r"The coefficient of $fh$ in the expansion of $(f-2g+3h)^2$ is recorded as $+6$.",
                True,
                r"""Twice the $f$--$h$ product is
$$2\cdot f\cdot(3h)=6fh.$$
The collected coefficient is $+6$. (The $gh$ coefficient, by contrast, is $2\cdot(-2)\cdot 3=-12$.)""",
            ),
            (
                r"Adding the swapped pair $\dfrac{j}{k}+\dfrac{k}{j}$ for $jk\neq 0$ is said to equal $\dfrac{j^2+k^2}{jk}$, and substituting $j=3$, $k=5$ makes both sides equal $34/15$.",
                True,
                r"""A common denominator $jk$ produces
$$\frac{j}{k}+\frac{k}{j}=\frac{j^2+k^2}{jk}.$$
At $j=3$ and $k=5$ both sides equal $34/15$:
$$\frac{3}{5}+\frac{5}{3}=\frac{9+25}{15}=\frac{34}{15},\qquad\frac{9+25}{15}=\frac{34}{15}.$$
The printed numerator is $j^2+k^2$, not the distractor $j+k$ that belongs to $1/j+1/k$.""",
            ),
            (
                r"Denesting $\sqrt{16+2\sqrt{55}}$ is claimed to equal $\sqrt{11}-\sqrt{5}$.",
                False,
                r"""$$(\sqrt{11}+\sqrt{5})^2=11+2\sqrt{55}+5=16+2\sqrt{55},\qquad(\sqrt{11}-\sqrt{5})^2=16-2\sqrt{55}.$$
The principal square root is $\sqrt{11}+\sqrt{5}$. The printed difference denests the minus companion.""",
            ),
            (
                r"Adding the opposite insides $|21-\ell|+|\ell-21|$ is claimed to equal $2|\ell-21|$ for every real $\ell$.",
                True,
                r"""Opposite order does not change absolute value: $|21-\ell|=|\ell-21|$. The sum is therefore
$$|\ell-21|+|\ell-21|=2|\ell-21|.$$""",
            ),
            (
                r"Given $r+s=13$ and $rs=21$, the sum $r^2+s^2$ is claimed to equal $169$.",
                False,
                r"""$$r^2+s^2=(r+s)^2-2rs=169-42=127.$$
The printed $169$ is $(r+s)^2$ with the correction $-2rs$ dropped.""",
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
                r"Distributing $(f^2-2fg+2g^2)(f^2+2fg+2g^2)$ is said to recover $f^4+4g^4$ after the mixed $f^2g^2$ terms cancel.",
                True,
                r"""The product is a difference of squares:
$$(f^2+2g^2)^2-(2fg)^2=f^4+4f^2g^2+4g^4-4f^2g^2=f^4+4g^4.$$
The two contributions to $f^2g^2$ cancel, leaving no middle even-powered term of that type.""",
            ),
            (
                r"Clearing the stacked difference $\dfrac{\dfrac{1}{h}-\dfrac{1}{j}}{\dfrac{1}{h}+\dfrac{1}{j}}$ is said to leave $\dfrac{h-j}{h+j}$ whenever $hj\neq 0$ and $h\neq -j$.",
                False,
                r"""The numerator is $(j-h)/(hj)$ and the denominator is $(j+h)/(hj)$, so the stack equals
$$\frac{j-h}{j+h}=-\frac{h-j}{h+j}.$$
The printed numerator $h-j$ has the opposite order; the two sides differ by a sign.""",
            ),
            (
                r"Matching positive roots, $\sqrt{11+2\sqrt{24}}$ is identified with $2\sqrt{2}+\sqrt{3}$.",
                True,
                r"""Square the proposed denesting:
$$(2\sqrt{2}+\sqrt{3})^2=8+4\sqrt{6}+3=11+4\sqrt{6}.$$
Since $2\sqrt{24}=2\sqrt{4\cdot 6}=4\sqrt{6}$, the radicand is exactly $11+2\sqrt{24}$. Both $2\sqrt{2}+\sqrt{3}$ and the principal square root are positive, so they are equal.""",
            ),
            (
                r"On the half-line $\ell>21$, the quotient $\dfrac{|\ell-21|}{\ell-21}$ equals $1$.",
                True,
                r"""For $\ell>21$ one has $|\ell-21|=\ell-21$, hence
$$\frac{|\ell-21|}{\ell-21}=1.$$
The quotient is the piecewise constant $1$ on that half-line.""",
            ),
            (
                r"Evaluating $m^3+n^3$ from $m+n=11$ and $mn=13$ is claimed to give $1331$.",
                False,
                r"""The cube-of-a-sum identity rearranges to
$$m^3+n^3=(m+n)^3-3mn(m+n)=1331-3\cdot 13\cdot 11=1331-429=902.$$
The printed $1331$ is $(m+n)^3$ with the correction $-3mn(m+n)$ dropped.""",
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
                r"""Twice the $g$--$h$ product is
$$2\cdot(-g)\cdot(-h)=+2gh.$$
The printed $-2$ has the wrong sign. The two minus signs in $-g$ and $-h$ make that cross term positive.""",
            ),
            (
                r"Cancelling the quadratic ratio $\dfrac{s^2-16}{s^2-s-12}$ down to $\dfrac{s+4}{s+3}$ is claimed for $s\neq 4$ and $s\neq -3$.",
                True,
                r"""Factor both polynomials:
$$s^2-16=(s-4)(s+4),\qquad s^2-s-12=(s-4)(s+3).$$
For $s\neq 4$ the common factor $s-4$ cancels, leaving $(s+4)/(s+3)$, and $s\neq -3$ keeps the remaining denominator alive.""",
            ),
            (
                r"Composing the rational powers $(t^{3/4})^{4/3}$ is said to return $t$ whenever $t>0$.",
                True,
                r"""Multiply the exponents:
$$\bigl(t^{3/4}\bigr)^{4/3}=t^{(3/4)\cdot(4/3)}=t^1=t.$$
Positivity of $t$ keeps every real power well-defined in the usual elementary sense.""",
            ),
            (
                r"The product of absolute values $|u-15|\,|u+15|$ is identified with $|u^2-225|$ for every real $u$.",
                True,
                r"""The product rule gives
$$|u-15|\,|u+15|=\bigl|(u-15)(u+15)\bigr|=|u^2-225|.$$
Dropping the outer bars would fail whenever $|u|<15$.""",
            ),
            (
                r"Evaluating the cubes at $f=4$, $g=7$, $h=-11$ (which sum to $0$) is claimed to make $f^3+g^3+h^3$ vanish.",
                False,
                r"""The letters do sum to $0$, so $f^3+g^3+h^3=3fgh$, not $0$:
$$3\cdot 4\cdot 7\cdot(-11)=-924.$$
Directly, $64+343-1331=-924$. Vanishing of the linear sum does not force the cubes to vanish.""",
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
                r"""Twice the $f$--$g$ product is
$$2\cdot f\cdot(4g)=8fg.$$
The collected coefficient is $8$.""",
            ),
            (
                r"Reducing the quadratic $\dfrac{j^2-29j+210}{j-14}$ to $j-14$ for $j\neq 14$ is treated as an identity.",
                False,
                r"""The numerator is $(j-14)(j-15)$ because $14+15=29$ and $14\cdot 15=210$. For $j\neq 14$,
$$\frac{(j-14)(j-15)}{j-14}=j-15.$$
The printed remainder $j-14$ repeats the cancelled factor instead of the surviving one.""",
            ),
            (
                r"Simplifying the power $16^{3/2}$ is treated as producing the integer $64$.",
                True,
                r"""$$16^{3/2}=(4^2)^{3/2}=4^3=64,$$
or equivalently $\bigl(\sqrt{16}\bigr)^3=4^3=64$.""",
            ),
            (
                r"Stripping the outer bars in $\bigl||k|-13\bigr|$ down to $|k|-13$ is proposed for every real $k$.",
                False,
                r"""By definition $\bigl||k|-13\bigr|=|k|-13$ only when $|k|\ge 13$. For $k=0$,
$$\bigl||0|-13\bigr|=13,\qquad |0|-13=-13.$$
The identity fails throughout $|k|<13$.""",
            ),
            (
                r"Given the elementary data $v+w=21$ and $vw=35$, the sum of reciprocals $1/v+1/w$ is evaluated as $3/5$.",
                True,
                r"""$$\frac{1}{v}+\frac{1}{w}=\frac{v+w}{vw}=\frac{21}{35}=\frac{3}{5}.$$
The reciprocal $35/21$ is a different number.""",
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
                r"""Twice the $f$--$g$ product is
$$2\cdot(2f)\cdot(-3g)=-12fg.$$
The printed $+12$ has the wrong sign.""",
            ),
            (
                r"Rewriting the stacked ratio $\dfrac{1-\dfrac{1}{j}}{1+\dfrac{1}{j}}$ as $\dfrac{j+1}{j-1}$ is claimed for $j\neq 0$ and $j\neq -1$.",
                False,
                r"""Clear the inner layer:
$$1-\frac{1}{j}=\frac{j-1}{j},\qquad 1+\frac{1}{j}=\frac{j+1}{j},$$
so the stack equals $(j-1)/(j+1)$. The printed form is the reciprocal of the correct simplification.""",
            ),
            (
                r"Matching positive roots, $\sqrt{21+8\sqrt{5}}$ is identified with $4+\sqrt{5}$.",
                True,
                r"""Square the proposed denesting:
$$(4+\sqrt{5})^2=16+8\sqrt{5}+5=21+8\sqrt{5}.$$
Both $4+\sqrt{5}$ and the principal square root are positive, so they are equal. The conjugate $4-\sqrt{5}$ squares to $21-8\sqrt{5}$ instead.""",
            ),
            (
                r"Pulling the constant factor, $|-5\ell+15|$ is rewritten as $5|\ell-3|$ for every real $\ell$.",
                True,
                r"""Factor $-5$:
$$|-5\ell+15|=|-5(\ell-3)|=|-5|\,|\ell-3|=5|\ell-3|.$$
The leading minus is absorbed by the absolute value.""",
            ),
            (
                r"Given the pair $u+v=16$ and $uv=15$, the swapped-ratio sum $u/v+v/u$ is evaluated as $226/15$.",
                True,
                r"""$$\frac{u}{v}+\frac{v}{u}=\frac{u^2+v^2}{uv}=\frac{(u+v)^2-2uv}{uv}=\frac{256-30}{15}=\frac{226}{15}.$$
The distractor $(u+v)/uv=16/15$ is $1/u+1/v$, a different sum.""",
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
                r"After collecting terms in $(f-g+2h)^2$, the coefficient of $gh$ is read off as $-4$.",
                True,
                r"""Twice the $g$--$h$ product is
$$2\cdot(-g)\cdot(2h)=-4gh.$$
The collected coefficient is $-4$.""",
            ),
            (
                r"Subtracting the swapped pair $\dfrac{k}{m}-\dfrac{m}{k}$ for $km\neq 0$ is said to equal $\dfrac{k^2-m^2}{km}$, and substituting $k=5$, $m=3$ makes both sides equal $16/15$.",
                True,
                r"""A common denominator $km$ produces
$$\frac{k}{m}-\frac{m}{k}=\frac{k^2-m^2}{km}.$$
At $(5,3)$ both sides equal $16/15$:
$$\frac{5}{3}-\frac{3}{5}=\frac{25-9}{15}=\frac{16}{15}.$$""",
            ),
            (
                r"Extracting the real cube root $\sqrt[3]{-125j^6}$ is claimed to equal $-5j^2$ for every real $j$.",
                True,
                r"""The real cube root splits:
$$\sqrt[3]{-125j^6}=\sqrt[3]{-125}\,\sqrt[3]{j^6}=-5\cdot j^2,$$
because $j^6=(j^2)^3$ with $j^2\ge 0$. No absolute value is needed on $j^2$.""",
            ),
            (
                r"Restricting to negative $s$, the quotient $|s|/s$ is claimed to equal $1$.",
                False,
                r"""On $s<0$ one has $|s|=-s$, so
$$\frac{|s|}{s}=\frac{-s}{s}=-1.$$
The printed value $1$ is the formula that holds on $s>0$, not on the stated half-line.""",
            ),
            (
                r"Reading the distance $|r-s|$ from $r+s=14$ and $rs=13$ as $14$ is treated as correct.",
                False,
                r"""$$(r-s)^2=(r+s)^2-4rs=196-52=144,$$
so $|r-s|=\sqrt{144}=12$, not $14$. The printed $14$ copies the stored sum instead of taking the square root of $144$.""",
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
                r"""Twice the $f$--$g$ product is
$$2\cdot(2f)\cdot(3g)=12fg.$$
The printed $5$ looks like a sum of the visible coefficients $2$ and $3$, not the doubled product.""",
            ),
            (
                r"Cancelling a cubic against a difference of squares, $\dfrac{h^3-16h}{h^2-16}$ is said to equal $h$ for $h\neq\pm 4$.",
                True,
                r"""Factor $h$ from the numerator:
$$\frac{h(h^2-16)}{h^2-16}=h\qquad(h^2\neq 16).$$
The common factor $h^2-16$ cancels on the stated domain.""",
            ),
            (
                r"Simplifying the radical $\sqrt{16j^2}$ to $4j$ is asserted for every real $j$.",
                False,
                r"""$$\sqrt{16j^2}=4\sqrt{j^2}=4|j|.$$
Writing $4j$ fails as soon as $j<0$: at $j=-1$ the left-hand side is $4$ while $4j=-4$.""",
            ),
            (
                r"On the positive half-line $\ell>0$, the quotient $|2\ell|/\ell$ equals $2$.",
                True,
                r"""For $\ell>0$ one has $|2\ell|=2\ell$, hence
$$\frac{|2\ell|}{\ell}=2.$$
The quotient is the piecewise constant $2$ on that half-line (and equals $-2$ on $\ell<0$).""",
            ),
            (
                r"Factoring the biquadratic $n^4+64$ as $(n^2+4n+8)(n^2-4n+8)$ is offered as an identity.",
                True,
                r"""This is Sophie Germain's identity with a scaled second letter: $n^4+4\cdot 2^4=n^4+64$. Adding and subtracting $16n^2$ gives
$$n^4+64=(n^2+8)^2-(4n)^2=(n^2-4n+8)(n^2+4n+8).$$""",
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
                r"""Twice the $f$--$h$ product is
$$2\cdot f\cdot(-4h)=-8fh.$$
The collected coefficient is $-8$.""",
            ),
            (
                r"Reducing the sum-of-cubes quotient $\dfrac{n^3+2744}{n+14}$ to $n^2+14n+196$ for $n\neq -14$ is treated as an identity.",
                False,
                r"""Sum of cubes uses
$$n^3+14^3=(n+14)(n^2-14n+196).$$
The printed middle sign $+14n$ belongs to a difference of cubes, not a sum. Expanding the printed quadratic against $n+14$ produces extra linear terms instead of cancelling them.""",
            ),
            (
                r"Matching positive roots, $\sqrt{13+4\sqrt{3}}$ is identified with $1+2\sqrt{3}$.",
                True,
                r"""$$(1+2\sqrt{3})^2=1+4\sqrt{3}+12=13+4\sqrt{3}.$$
Both sides are positive, so the principal square roots match. The conjugate $2\sqrt{3}-1$ squares to $13-4\sqrt{3}$.""",
            ),
            (
                r"For every real $t\neq 13$, the quotient $\dfrac{|t-13|}{|13-t|}$ equals $1$.",
                True,
                r"""Opposite insides have the same absolute value:
$$|13-t|=|t-13|,$$
so the quotient of those two nonnegative quantities is $1$ wherever it is defined.""",
            ),
            (
                r"Treating the vanishing of $u+v+w$ at $u=1$, $v=14$, $w=-15$ as forcing $u^3+v^3+w^3=0$ is proposed.",
                False,
                r"""The letters sum to $0$, hence $u^3+v^3+w^3=3uvw$:
$$3\cdot 1\cdot 14\cdot(-15)=-630.$$
Directly, $1+2744-3375=-630$. The cubes equal $3uvw$, not $0$.""",
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
                r"""Factor by grouping:
$$fg+11f+13g+143=f(g+11)+13(g+11)=(f+13)(g+11),$$
using $13\cdot 11=143$. Distributing the right-hand side recovers the original four terms.""",
            ),
            (
                r"Clearing the nested remainder $1-\dfrac{1}{1+\dfrac{1}{j}}$ is said to leave $\dfrac{1}{j+1}$ for $j\neq 0$ and $j\neq -1$.",
                True,
                r"""Innermost, $1+1/j=(j+1)/j$, so $1/(1+1/j)=j/(j+1)$. Then
$$1-\frac{j}{j+1}=\frac{1}{j+1}.$$""",
            ),
            (
                r"Reducing the power $16^{3/4}$ to the integer $4$ is treated as correct.",
                False,
                r"""$$16^{3/4}=(2^4)^{3/4}=2^3=8.$$
The printed $4$ is $16^{1/2}$, a different rational power.""",
            ),
            (
                r"Identifying the sum $|k+m|$ with $|k|+|m|$ identically on the mixed-sign region $k>0$, $m<0$ is proposed.",
                False,
                r"""The triangle inequality $|k+m|\le |k|+|m|$ becomes equality only when $k$ and $m$ have the same sign (or one vanishes). On $k>0$ and $m<0$ take $k=3$ and $m=-1$:
$$|k+m|=2,\qquad |k|+|m|=4.$$
The two sides are not identically equal on that region.""",
            ),
            (
                r"Given the elementary data $r+s=21$ and $rs=35$, the sum $r^2+s^2$ is evaluated as $371$.",
                True,
                r"""$$r^2+s^2=(r+s)^2-2rs=441-70=371.$$
Dropping $-2rs$ would have left the distractor $441$.""",
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
                r"""Twice the $g$--$h$ product is
$$2\cdot(-g)\cdot h=-2gh.$$
The printed $+2$ has the wrong sign.""",
            ),
            (
                r"Cancelling a visible linear factor, $\dfrac{j^2-35j+300}{j-15}$ is said to leave $j-20$ for $j\neq 15$.",
                True,
                r"""The numerator is $(j-15)(j-20)$ because $15+20=35$ and $15\cdot 20=300$. For $j\neq 15$ the quotient is $j-20$.""",
            ),
            (
                r"Extracting a cube root, $\sqrt[3]{8s^6}$ is simplified to $2s^2$ for every real $s$.",
                True,
                r"""$$\sqrt[3]{8s^6}=\sqrt[3]{8}\,\sqrt[3]{s^6}=2s^2,$$
because $s^6=(s^2)^3$ with $s^2\ge 0$.""",
            ),
            (
                r"Treating the sign quotient $|\ell|/\ell$ as identically $1$ for every $\ell\neq 0$ is proposed.",
                False,
                r"""The quotient equals $+1$ on $\ell>0$ and $-1$ on $\ell<0$. At $\ell=-2$ one has $2/(-2)=-1\neq 1$. The identity is only piecewise constant.""",
            ),
            (
                r"Adding the reciprocals from $k+m=11$ and $km=13$ is claimed to give $1/k+1/m=11/13$.",
                True,
                r"""$$\frac{1}{k}+\frac{1}{m}=\frac{k+m}{km}=\frac{11}{13}.$$""",
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
                r"The coefficient of $fg$ in the expansion of $(3f-g-2h)^2$ is recorded as $-6$.",
                True,
                r"""Twice the $f$--$g$ product is
$$2\cdot(3f)\cdot(-g)=-6fg.$$
The collected coefficient is $-6$.""",
            ),
            (
                r"Reducing the cubic $\dfrac{w^3-2197}{w-13}$ to $w^2+169$ for $w\neq 13$ is treated as an identity after a check at $w=0$ gives $169$ on both sides.",
                False,
                r"""Since $2197=13^3$,
$$\frac{w^3-2197}{w-13}=w^2+13w+169\qquad(w\neq 13).$$
Dropping $13w$ leaves $w^2+169$. At $w=0$ the missing term vanishes, but at $w=1$ the genuine remainder is $183$ while $1+169=170$.""",
            ),
            (
                r"Denesting the radicand $\sqrt{11+6\sqrt{2}}$ is claimed to equal $3+\sqrt{2}$.",
                True,
                r"""$$(3+\sqrt{2})^2=9+6\sqrt{2}+2=11+6\sqrt{2}.$$
Both $3+\sqrt{2}$ and the principal square root are positive, so they are equal. The conjugate $3-\sqrt{2}$ squares to $11-6\sqrt{2}$.""",
            ),
            (
                r"Stripping nested bars, $\bigl||k|-15\bigr|$ is rewritten as $|k|-15$ for every real $k$.",
                False,
                r"""The identity $\bigl||k|-15\bigr|=|k|-15$ requires $|k|\ge 15$. For $k=0$,
$$\bigl||0|-15\bigr|=15,\qquad |0|-15=-15.$$
The printed stripping fails throughout $|k|<15$.""",
            ),
            (
                r"Given the sums $r+s=13$ and $rs=14$, the sum of squares $r^2+s^2$ is claimed to equal $169$.",
                False,
                r"""$$r^2+s^2=(r+s)^2-2rs=169-28=141.$$
The printed $169$ is $(r+s)^2$ with $-2rs$ dropped.""",
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
                r"Expanding the square $(f+2g+h)^2$ is written with the coefficient of $gh$ equal to $2$.",
                False,
                r"""Twice the $g$--$h$ product is
$$2\cdot(2g)\cdot h=4gh.$$
The printed $2$ forgot to double. The collected coefficient is $4$.""",
            ),
            (
                r"Cancelling a difference of fourth powers, $\dfrac{j^4-1}{j^2-1}$ is said to leave $j^2+1$ whenever $j\neq\pm 1$.",
                True,
                r"""$$j^4-1=(j^2-1)(j^2+1),$$
so the quotient is $j^2+1$ on $j^2\neq 1$.""",
            ),
            (
                r"Raising the stacked power $(s^2)^{3/2}$ is claimed to equal $s^3$ for every real $s$.",
                False,
                r"""$$(s^2)^{3/2}=|s|^3.$$
At $s=-2$ the left-hand side is $8$ while $s^3=-8$. The unsigned cube $|s|^3$ is the correct real value.""",
            ),
            (
                r"Pulling a positive factor, $|2t-32|$ is rewritten as $2|t-16|$ for every real $t$.",
                True,
                r"""$$|2t-32|=|2(t-16)|=2|t-16|.$$
No sign restriction on $t$ is required.""",
            ),
            (
                r"Completing the square, $k^4+4m^4$ is identified with $(k^2+2m^2)^2$ as an identity in $k$ and $m$.",
                False,
                r"""$$(k^2+2m^2)^2=k^4+4k^2m^2+4m^4.$$
The extra middle term $4k^2m^2$ is precisely what Sophie Germain's identity subtracts before factoring as a difference of squares. The two polynomials agree only when $km=0$.""",
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
                r"""Twice the $f$--$g$ product is
$$2\cdot f\cdot(-3g)=-6fg.$$
The collected coefficient is $-6$.""",
            ),
            (
                r"After cancelling, $\dfrac{h^2-16h+63}{h-7}$ equals $h-9$ for $h\neq 7$.",
                True,
                r"""The numerator is $(h-7)(h-9)$ because $7+9=16$ and $7\cdot 9=63$. For $h\neq 7$ the quotient is $h-9$.""",
            ),
            (
                r"Denesting the nested radical $\sqrt{16+2\sqrt{15}}$ is claimed to equal $2+\sqrt{15}$.",
                False,
                r"""$$(2+\sqrt{15})^2=4+4\sqrt{15}+15=19+4\sqrt{15}\neq 16+2\sqrt{15}.$$
The genuine denesting is $1+\sqrt{15}$, whose square is $1+2\sqrt{15}+15=16+2\sqrt{15}$. Inflating the constant from $1$ to $2$ breaks the identity.""",
            ),
            (
                r"Treating the quotient $|k|/k$ as identically $-1$ for every $k\neq 0$ is proposed.",
                False,
                r"""The quotient equals $-1$ only on $k<0$. For $k=2$ one has $|2|/2=1\neq -1$. The value is piecewise constant, not a single constant on $k\neq 0$.""",
            ),
            (
                r"Reading the gap $|u-v|$ from $u+v=16$ and $uv=21$ as $16$ is treated as correct.",
                False,
                r"""$$(u-v)^2=(u+v)^2-4uv=256-84=172,$$
so $|u-v|=\sqrt{172}=2\sqrt{43}$, not $16$. The printed $16$ copies the stored sum.""",
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
                r"""Twice the $f$--$h$ product is
$$2\cdot f\cdot(-5h)=-10fh.$$
The printed $+10$ has the wrong sign.""",
            ),
            (
                r"Rewriting the compound ratio $\dfrac{1+\dfrac{j}{k}}{1-\dfrac{j}{k}}$ as $\dfrac{k-j}{k+j}$ is claimed for $k\neq 0$ and $k\neq j$.",
                False,
                r"""$$1+\frac{j}{k}=\frac{k+j}{k},\qquad 1-\frac{j}{k}=\frac{k-j}{k},$$
so the stack equals $(k+j)/(k-j)$. The printed form is the reciprocal of the correct simplification.""",
            ),
            (
                r"Cubing the two-thirds power, $\bigl(t^{2/3}\bigr)^3$ is said to equal $t^2$ for every real $t$.",
                True,
                r"""In the reals, $t^{2/3}=|t|^{2/3}$, hence
$$\bigl(|t|^{2/3}\bigr)^3=|t|^2=t^2.$$
Equivalently $\bigl((t^{1/3})^2\bigr)^3=(t^{1/3})^6=t^2$ wherever the real cube root is used.""",
            ),
            (
                r"On the open interval $-15<\ell<15$, the sum $|\ell+15|+|\ell-15|$ equals $30$.",
                True,
                r"""Inside $|\ell|<15$ the insides have opposite signs, and
$$|\ell+15|+|\ell-15|=(\ell+15)+(15-\ell)=30.$$
The sum is the piecewise constant $30$ on that interval (and equals $2|\ell|$ outside).""",
            ),
            (
                r"Recording the cubes at $r=3$, $s=8$, $t=-11$ (which sum to $0$) as $r^3+s^3+t^3=0$ is proposed.",
                False,
                r"""The letters sum to $0$, so $r^3+s^3+t^3=3rst$:
$$3\cdot 3\cdot 8\cdot(-11)=-792.$$
Directly, $27+512-1331=-792$. The cubes do not vanish.""",
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
                r"""Twice the $g$--$h$ product is
$$2\cdot(-g)\cdot(-h)=2gh.$$
The two minus signs make that cross term positive, with coefficient $2$.""",
            ),
            (
                r"Reducing the quadratic $\dfrac{m^2-15m+56}{m-7}$ to $m-7$ for $m\neq 7$ is treated as an identity.",
                False,
                r"""The numerator is $(m-7)(m-8)$ because $7+8=15$ and $7\cdot 8=56$. For $m\neq 7$ the quotient is $m-8$. The printed remainder repeats the cancelled factor.""",
            ),
            (
                r"Simplifying the power $16^{5/4}$ is treated as producing the integer $8$.",
                False,
                r"""$$16^{5/4}=(2^4)^{5/4}=2^5=32.$$
The printed $8$ is $16^{3/4}$, a different rational power.""",
            ),
            (
                r"Writing the quotient $\bigl|\dfrac{r}{s}\bigr|$ as $\dfrac{|r|}{|s|}$ for $s\neq 0$ is accepted.",
                True,
                r"""Absolute value splits over a quotient:
$$\biggl|\frac{r}{s}\biggr|=\frac{|r|}{|s|}.$$
Dropping the bars on $s$ alone would fail for $s<0$.""",
            ),
            (
                r"Given the elementary data $k+m=11$ and $km=21$, the sum $k^2+m^2$ is claimed to equal $121$.",
                False,
                r"""$$k^2+m^2=(k+m)^2-2km=121-42=79.$$
The printed $121$ is $(k+m)^2$ with $-2km$ dropped.""",
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
                r"Expanding the square $(f-g+3h)^2$ is written with the coefficient of $fh$ equal to $3$.",
                False,
                r"""Twice the $f$--$h$ product is
$$2\cdot f\cdot(3h)=6fh.$$
The printed $3$ forgot to double.""",
            ),
            (
                r"Cancelling a difference of squares, $\dfrac{j^2-121}{j-11}$ is said to leave $j+11$ for $j\neq 11$, and substituting $j=0$ recovers $11$ on both sides.",
                True,
                r"""$$j^2-121=(j-11)(j+11),$$
so the quotient is $j+11$ for $j\neq 11$. At $j=0$ the original fraction is $(-121)/(-11)=11$, matching the reduced value.""",
            ),
            (
                r"Matching positive roots, $\sqrt{16+2\sqrt{15}}$ is identified with $1+\sqrt{15}$.",
                True,
                r"""$$(1+\sqrt{15})^2=1+2\sqrt{15}+15=16+2\sqrt{15}.$$
Both sides are positive, so the principal square roots match.""",
            ),
            (
                r"Dropping the bars around $2\ell+16$ and writing $2\ell+16$ for every real $\ell$ is offered as an identity.",
                False,
                r"""$$|2\ell+16|=2|\ell+8|.$$
This equals $2\ell+16$ only on $\ell\ge -8$. At $\ell=-10$,
$$|2(-10)+16|=|-4|=4,\qquad 2(-10)+16=-4.$$""",
            ),
            (
                r"Squaring a single Sophie-Germain factor, $n^4+4m^4$ is identified with $(n^2+2nm+2m^2)^2$.",
                False,
                r"""$$(n^2+2nm+2m^2)^2=n^4+4n^3m+8n^2m^2+8nm^3+4m^4,$$
which contains odd powers. The genuine factorisation multiplies by the conjugate $n^2-2nm+2m^2$, cancelling those odd terms and recovering $n^4+4m^4$.""",
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
                r"""Twice the $f$--$g$ product is
$$2\cdot f\cdot(-5g)=-10fg.$$
The collected coefficient is $-10$.""",
            ),
            (
                r"Clearing the three-storey nest $1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{j}}}$ is said to leave $\dfrac{2j+1}{3j+2}$ for $j\neq 0$, $j\neq -1$, and $j\neq -1/2$.",
                False,
                r"""Innermost, $1+1/j=(j+1)/j$. The next layer is
$$1+\frac{j}{j+1}=\frac{2j+1}{j+1},\qquad\frac{1}{1+\dfrac{1}{1+\dfrac{1}{j}}}=\frac{j+1}{2j+1}.$$
Adding the outer $1$ produces
$$1+\frac{j+1}{2j+1}=\frac{3j+2}{2j+1}.$$
The printed form is the reciprocal of the correct simplification.""",
            ),
            (
                r"Denesting the radicand $\sqrt{16+2\sqrt{55}}$ is claimed to equal $2+\sqrt{11}$.",
                False,
                r"""$$(2+\sqrt{11})^2=4+4\sqrt{11}+11=15+4\sqrt{11}\neq 16+2\sqrt{55}.$$
The genuine denesting is $\sqrt{11}+\sqrt{5}$, whose square is $11+2\sqrt{55}+5=16+2\sqrt{55}$.""",
            ),
            (
                r"Restricting to positive $\ell$, the quotient $\dfrac{|\ell-21|}{21-\ell}$ is claimed to equal $1$.",
                False,
                r"""On $0<\ell<21$ one has $|\ell-21|=21-\ell$, so the quotient is $1$. But on $\ell>21$ one has $|\ell-21|=\ell-21$ and $21-\ell=-(\ell-21)$, so the quotient is $-1$. The printed identity fails on the unbounded part of $\ell>0$.""",
            ),
            (
                r"Given the pair $u+v=14$ and $uv=13$, the sum $u^2+v^2$ is evaluated as $170$.",
                True,
                r"""$$u^2+v^2=(u+v)^2-2uv=196-26=170.$$""",
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
                r"""Twice the $f$--$g$ product is
$$2\cdot(2f)\cdot(2g)=8fg.$$
The printed $4$ is the product of the visible coefficients without the extra factor $2$ from the square.""",
            ),
            (
                r"Cancelling a quadratic, $\dfrac{h^2-21h+104}{h-13}$ is said to leave $h-8$ for $h\neq 13$.",
                True,
                r"""The numerator is $(h-13)(h-8)$ because $13+8=21$ and $13\cdot 8=104$. For $h\neq 13$ the quotient is $h-8$.""",
            ),
            (
                r"Simplifying a monomial radical, $(16k^4)^{1/4}$ is rewritten as $2k$ for every real $k$.",
                False,
                r"""$$(16k^4)^{1/4}=2(k^4)^{1/4}=2|k|.$$
Writing $2k$ fails for $k<0$. At $k=-1$ the left-hand side is $2$ while $2k=-2$.""",
            ),
            (
                r"Claiming the absolute value $|\ell^2+14|$ can equal $0$ for some real $\ell$ is proposed.",
                False,
                r"""For every real $\ell$ one has $\ell^2+14\ge 14>0$, hence
$$|\ell^2+14|=\ell^2+14\ge 14.$$
The absolute value never hits zero.""",
            ),
            (
                r"Adding the reciprocals from $r+s=13$ and $rs=21$ is claimed to give $1/r+1/s=13/21$.",
                True,
                r"""$$\frac{1}{r}+\frac{1}{s}=\frac{r+s}{rs}=\frac{13}{21}.$$""",
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
                r"""Twice the $f$--$h$ product is
$$2\cdot f\cdot(2h)=4fh.$$
The printed $2$ forgot to double.""",
            ),
            (
                r"Adding the swapped pair $\dfrac{j}{j-13}+\dfrac{13}{13-j}$ is said to vanish whenever $j\neq 13$.",
                False,
                r"""The second denominator is the opposite of the first:
$$\frac{13}{13-j}=-\frac{13}{j-13}.$$
The sum is therefore
$$\frac{j-13}{j-13}=1$$
on $j\neq 13$, not $0$.""",
            ),
            (
                r"Extracting the real cube root $\sqrt[3]{-8s^9}$ is claimed to equal $-2s^3$ for every real $s$.",
                True,
                r"""$$\sqrt[3]{-8s^9}=\sqrt[3]{-8}\,\sqrt[3]{s^9}=-2s^3,$$
because $s^9=(s^3)^3$ and the real cube root of $-8$ is $-2$.""",
            ),
            (
                r"Dropping a minus, $|-\ell|$ is rewritten as $-\ell$ for every real $\ell$.",
                False,
                r"""$|-\ell|=|\ell|$, which equals $-\ell$ only when $\ell\le 0$. For $\ell=3$,
$$|-3|=3\neq -3.$$""",
            ),
            (
                r"Evaluating the cubes at $r=5$, $u=11$, $w=-16$ (which sum to $0$) is claimed to give $r^3+u^3+w^3=-2640$.",
                True,
                r"""First $5+11-16=0$, so $r^3+u^3+w^3=3ruw$. Then
$$3\cdot 5\cdot 11\cdot(-16)=-2640.$$
Directly, $125+1331-4096=-2640$. The sum of cubes is $3ruw$, not $0$.""",
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
                r"""Twice the $g$--$h$ product is
$$2\cdot(-4g)\cdot h=-8gh.$$
The collected coefficient is $-8$.""",
            ),
            (
                r"Subtracting the unit fractions $\dfrac{1}{n-11}-\dfrac{1}{n+11}$ is said to leave $\dfrac{11}{n^2-121}$ whenever $n\neq\pm 11$.",
                False,
                r"""A common denominator $n^2-121$ produces
$$\frac{(n+11)-(n-11)}{n^2-121}=\frac{22}{n^2-121}.$$
The printed numerator $11$ is half of the correct numerator.""",
            ),
            (
                r"Denesting the nested radical $\sqrt{21+8\sqrt{5}}$ is claimed to equal $4-\sqrt{5}$.",
                False,
                r"""$$(4-\sqrt{5})^2=16-8\sqrt{5}+5=21-8\sqrt{5}.$$
The printed conjugate denests $\sqrt{21-8\sqrt{5}}$, not the plus form. The genuine plus denesting is $4+\sqrt{5}$.""",
            ),
            (
                r"Opposite linear forms satisfy $|3\ell-21|=|21-3\ell|$ for every real $\ell$.",
                True,
                r"""For any real $T$ one has $|-T|=|T|$. Set $T=3\ell-21$. Then
$$|21-3\ell|=|-(3\ell-21)|=|3\ell-21|.$$""",
            ),
            (
                r"Rewriting the swapped-ratio sum $k/m+m/k$ from $k+m=15$ and $km=21$ as $15/21$ is treated as correct.",
                False,
                r"""$$\frac{k}{m}+\frac{m}{k}=\frac{k^2+m^2}{km}=\frac{(k+m)^2-2km}{km}=\frac{225-42}{21}=\frac{183}{21}=\frac{61}{7}.$$
The printed $15/21$ is $1/k+1/m$, a different sum.""",
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
                r"Expanding the square $(3f-2g+h)^2$ is written with the coefficient of $fg$ equal to $-6$.",
                False,
                r"""Twice the $f$--$g$ product is
$$2\cdot(3f)\cdot(-2g)=-12fg.$$
The printed $-6$ is only half of the genuine coefficient.""",
            ),
            (
                r"Cancelling a quadratic, $\dfrac{k^2-29k+210}{k-15}$ is said to leave $k-14$ for $k\neq 15$.",
                True,
                r"""The numerator is $(k-15)(k-14)$ because $15+14=29$ and $15\cdot 14=210$. For $k\neq 15$ the quotient is $k-14$.""",
            ),
            (
                r"Combining the exponents, $t^{-3}t^{5/2}$ is claimed to equal $t^{1/2}$ for every $t>0$.",
                False,
                r"""Add the exponents:
$$-3+\frac{5}{2}=\frac{-6+5}{2}=-\frac{1}{2}.$$
Hence $t^{-3}t^{5/2}=t^{-1/2}$ on $t>0$. The printed $t^{1/2}$ has the opposite exponent sign.""",
            ),
            (
                r"On the half-line $\ell<11$, the quotient $\dfrac{|\ell-11|}{11-\ell}$ equals $1$ wherever $\ell\neq 11$.",
                True,
                r"""For $\ell<11$ one has $|\ell-11|=11-\ell$, hence
$$\frac{|\ell-11|}{11-\ell}=1.$$
The quotient is the piecewise constant $1$ on that half-line.""",
            ),
            (
                r"Recording a vanishing of cubes at $r=6$, $s=7$, $t=-13$ (which sum to $0$) as $r^3+s^3+t^3=0$ is proposed.",
                False,
                r"""The letters sum to $0$, so $r^3+s^3+t^3=3rst$:
$$3\cdot 6\cdot 7\cdot(-13)=-1638.$$
Directly, $216+343-2197=-1638$. The cubes equal $3rst$, not $0$.""",
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
                r"The coefficient of $fh$ in the expansion of $(2f-g-2h)^2$ is recorded as $-8$.",
                True,
                r"""Twice the $f$--$h$ product is
$$2\cdot(2f)\cdot(-2h)=-8fh.$$
The collected coefficient is $-8$.""",
            ),
            (
                r"Clearing a difference of reciprocal squares, $\dfrac{1}{j^2}-\dfrac{1}{k^2}$ is said to equal $\dfrac{k-j}{j^2k^2}$ whenever $jk\neq 0$.",
                False,
                r"""A common denominator $j^2k^2$ produces
$$\frac{k^2-j^2}{j^2k^2}=\frac{(k-j)(k+j)}{j^2k^2}.$$
The printed numerator $k-j$ drops the factor $k+j$.""",
            ),
            (
                r"Composing the powers $(t^{3/2})^{2/3}$ is said to return $t$ whenever $t>0$.",
                True,
                r"""Multiply the exponents:
$$\bigl(t^{3/2}\bigr)^{2/3}=t^{(3/2)\cdot(2/3)}=t^1=t.$$""",
            ),
            (
                r"Subtracting two absolute values, $|\ell+11|-|\ell|$ is claimed to equal $11$ for every real $\ell$.",
                False,
                r"""The reverse triangle inequality only gives $\bigl||\ell+11|-|\ell|\bigr|\le 11$. Equality $|\ell+11|-|\ell|=11$ holds for $\ell\ge 0$ but fails for $\ell=-12$:
$$|-1|-|-12|=1-12=-11\neq 11.$$""",
            ),
            (
                r"Given the elementary data $u+v=21$ and $uv=16$, the sum $u^2+v^2$ is claimed to equal $441$.",
                False,
                r"""$$u^2+v^2=(u+v)^2-2uv=441-32=409.$$
The printed $441$ is $(u+v)^2$ with $-2uv$ dropped.""",
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
                r"""Twice the $g$--$h$ product is
$$2\cdot(3g)\cdot(-2h)=-12gh.$$
The printed $-6$ is only half of the genuine coefficient.""",
            ),
            (
                r"Reducing the sum-of-cubes quotient $\dfrac{h^3+1331}{h+11}$ to $h^2+11h+121$ for $h\neq -11$ is treated as an identity.",
                False,
                r"""Sum of cubes uses
$$h^3+11^3=(h+11)(h^2-11h+121).$$
The printed middle sign $+11h$ belongs to a difference of cubes. Expanding the printed quadratic against $h+11$ fails to cancel the mixed terms.""",
            ),
            (
                r"Denesting the nested radical $\sqrt{13+2\sqrt{30}}$ is claimed to equal $\sqrt{10}-\sqrt{3}$.",
                False,
                r"""$$(\sqrt{10}+\sqrt{3})^2=10+2\sqrt{30}+3=13+2\sqrt{30},\qquad(\sqrt{10}-\sqrt{3})^2=13-2\sqrt{30}.$$
The printed difference denests the minus companion. The principal square root is $\sqrt{10}+\sqrt{3}$.""",
            ),
            (
                r"Folding the distance, $|\ell|+|\ell-21|$ equals $21$ throughout the closed interval $0\le\ell\le 21$.",
                True,
                r"""On $0\le\ell\le 21$ one has $|\ell|=\ell$ and $|\ell-21|=21-\ell$, so
$$|\ell|+|\ell-21|=\ell+(21-\ell)=21.$$
The sum is the piecewise constant $21$ on that interval (and equals $2|\ell|-21$ for $\ell>21$).""",
            ),
            (
                r"Evaluating the cubes at $r=4$, $s=11$, $t=-15$ (which sum to $0$) is claimed to give $r^3+s^3+t^3=3rst$, hence $-1980$.",
                True,
                r"""First $4+11-15=0$, so $r^3+s^3+t^3=3rst$. Then
$$3\cdot 4\cdot 11\cdot(-15)=-1980.$$
Directly, $64+1331-3375=-1980$.""",
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
                r"""Twice the $g$--$h$ product is
$$2\cdot(-2g)\cdot(-3h)=12gh.$$
The two minus signs make that cross term positive, with coefficient $12$.""",
            ),
            (
                r"Simplifying the stacked ratio $\dfrac{j-\dfrac{1}{j}}{j+\dfrac{1}{j}}$ to $\dfrac{j-1}{j+1}$ is claimed for every real $j\neq 0$.",
                False,
                r"""Clear the inner layer over the common denominator $j$:
$$\frac{j-\dfrac{1}{j}}{j+\dfrac{1}{j}}=\frac{(j^2-1)/j}{(j^2+1)/j}=\frac{j^2-1}{j^2+1}.$$
The printed $(j-1)/(j+1)$ is a different rational function (and would require cancelling $j+1$ from $j^2-1=(j-1)(j+1)$ against a denominator $j+1$, not $j^2+1$).""",
            ),
            (
                r"Composing the fifth-power stack $(w^{2/5})^{5/2}$ is said to return $w$ whenever $w>0$.",
                True,
                r"""Multiply the exponents:
$$\bigl(w^{2/5}\bigr)^{5/2}=w^{(2/5)\cdot(5/2)}=w^1=w.$$""",
            ),
            (
                r"Treating the scaled quotient $|2\ell|/\ell$ as identically $2$ for every $\ell\neq 0$ is proposed.",
                False,
                r"""$|2\ell|/\ell=2\ell/\ell=2$ only on $\ell>0$. On $\ell<0$ one has $|2\ell|=-2\ell$, so the quotient is $-2$. At $\ell=-3$ the value is $6/(-3)=-2\neq 2$.""",
            ),
            (
                r"Reading the distance $|k-m|$ from $k+m=16$ and $km=35$ as $6$ is treated as correct.",
                False,
                r"""$$(k-m)^2=(k+m)^2-4km=256-140=116,$$
so $|k-m|=\sqrt{116}=2\sqrt{29}$, not $6$. The printed $6$ is not the square root of $116$.""",
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
                r"""Twice the $f$--$g$ product is
$$2\cdot(2f)\cdot(-5g)=-20fg.$$
The printed $-10$ is only half of the genuine coefficient.""",
            ),
            (
                r"Cancelling a cubic against a quadratic, $\dfrac{s^3-35s}{s^2-35}$ is said to equal $s$ whenever $s^2\neq 35$.",
                True,
                r"""Factor $s$ from the numerator:
$$\frac{s(s^2-35)}{s^2-35}=s\qquad(s^2\neq 35).$$""",
            ),
            (
                r"Denesting the nested radical $\sqrt{21+12\sqrt{3}}$ is claimed to equal $2\sqrt{3}-3$.",
                False,
                r"""$$(3+2\sqrt{3})^2=9+12\sqrt{3}+12=21+12\sqrt{3}.$$
The printed conjugate squares to the minus companion:
$$(2\sqrt{3}-3)^2=12-12\sqrt{3}+9=21-12\sqrt{3}.$$
Although $2\sqrt{3}-3$ is positive, it denests $\sqrt{21-12\sqrt{3}}$, not the plus form. The genuine plus denesting is $3+2\sqrt{3}$.""",
            ),
            (
                r"Adding opposite quotients, $|\ell|/\ell+|\ell|/(-\ell)$ equals $0$ for every $\ell\neq 0$.",
                True,
                r"""On $\ell>0$ one has $|\ell|=\ell$, so
$$\frac{\ell}{\ell}+\frac{\ell}{-\ell}=1-1=0.$$
On $\ell<0$ one has $|\ell|=-\ell$, so
$$\frac{-\ell}{\ell}+\frac{-\ell}{-\ell}=-1+1=0.$$
The sum of the two piecewise constants is identically $0$ on $\ell\neq 0$.""",
            ),
            (
                r"Given the large sum $u+v=35$ and product $uv=21$, the sum $u^2+v^2$ is claimed to equal $1225$.",
                False,
                r"""$$u^2+v^2=(u+v)^2-2uv=1225-42=1183.$$
The printed $1225$ is $(u+v)^2$ with $-2uv$ dropped.""",
            ),
        ],
        overview=r"Five unlinked lines: a halved $fg$ coefficient, $(s^3-35s)/(s^2-35)=s$, the wrong conjugate of $\sqrt{21+12\sqrt{3}}$, $|\ell|/\ell+|\ell|/(-\ell)=0$, and $u^2+v^2=1183$ rather than $1225$.",
    ),
]
