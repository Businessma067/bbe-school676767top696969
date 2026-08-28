from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="Warm-up: polarisation identity",
        subsection="2.5",
        difficulty="1/5",
        context=CTX,
        items=[
            (
                r"""The polarisation remainder $(a+b)^2-(a-b)^2=4ab$ holds for every real pair $(a,b)$.""",
                True,
                r"""Expand the two binomial squares separately:

First square:

$$(r+s)^2=r^2+2rs+s^2$$

Second square:

$$(r-s)^2=r^2-2rs+s^2$$

Subtract:

$$(r+s)^2-(r-s)^2=4rs$$

The cross terms add rather than cancel.""",
            ),
            (
                r"""Likewise for $(x+y)^2-(x-y)^2=4xy$ with real $(x,y)$.""",
                True,
                r"""Expand the two binomial squares separately:

First square:

$$(r+s)^2=r^2+2rs+s^2$$

Second square:

$$(r-s)^2=r^2-2rs+s^2$$

Subtract:

$$(r+s)^2-(r-s)^2=4rs$$

The cross terms add rather than cancel.""",
            ),
            (
                r"""Halving the cross term incorrectly gives $(p+q)^2-(p-q)^2=2(p^2+q^2)$ for real $(p,q)$ (false).""",
                False,
                r"""Expand the two binomial squares separately:

First square:

$$(r+s)^2=r^2+2rs+s^2$$

Second square:

$$(r-s)^2=r^2-2rs+s^2$$

Subtract:

$$(r+s)^2-(r-s)^2=4rs$$

The cross terms add rather than cancel.""",
            ),
            (
                r"""For real $(m,n)$, subtracting the squares yields $(m+n)^2-(m-n)^2=4mn$.""",
                True,
                r"""Expand the two binomial squares separately:

First square:

$$(r+s)^2=r^2+2rs+s^2$$

Second square:

$$(r-s)^2=r^2-2rs+s^2$$

Subtract:

$$(r+s)^2-(r-s)^2=4rs$$

The cross terms add rather than cancel.""",
            ),
            (
                r"""With real $(u,v)$, $(u+v)^2-(u-v)^2=4uv$.""",
                True,
                r"""Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.""",
            ),
        ],
        overview=r"Five polarisation remainders with one halved coefficient.",
    ),
    task(
        title="Warm-up: symmetric sums in three letters",
        subsection="2.5",
        difficulty="1/5",
        context=CTX,
        items=[
            (
                r"""If $a+b+c=s$, then $a^2+b^2+c^2=s^2-2(ab+bc+ca)$ for every real triple.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""With $x+y+z=s$, one has $x^2+y^2+z^2=s^2-2(xy+yz+zx)$ for every real triple.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Whenever $p+q+r=s$, the square sum is $p^2+q^2+r^2=s^2-2(pq+qr+rp)$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""Replacing the symmetric sum by $abc$ makes $a^2+b^2+c^2=s^2-2abc$ false when $a+b+c=s$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For $m+n+t=s$, the identity $m^2+n^2+t^2=s^2-2(mn+nt+tm)$ holds for every real triple.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five square-sum formulas in three letters with one swapped symmetric term.",
    ),
    task(
        title="Warm-up: mixed fraction and square",
        subsection="2.5",
        difficulty="2/5",
        context=CTX,
        items=[
            (
                r"""For $x\neq 2$, cancelling gives $\dfrac{x^2-4}{x-2}=x+2$.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{x^2-4}{x-2}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""Expanding a binomial: $(a+b)^2=a^2+2ab+b^2$ for every real pair $(a,b)$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""For $t\neq 0$, index arithmetic gives $t^3/t=t^2$.""",
                True,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""For every real $k$, $|k-3|=3-k$ is false.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For $p\neq 0$, combining powers yields $p^{-1}\cdot p^3=p^2$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five mixed one-step checks across fractions, squares, indices, and absolute value.",
    ),
    task(
        title="Warm-up: inequality from a square",
        subsection="2.5",
        difficulty="2/5",
        context=CTX,
        items=[
            (
                r"""From $(a-b)^2\ge 0$, one gets $a^2+b^2\ge 2ab$ for every real pair $(a,b)$.""",
                True,
                r"""Use $(a-b)^2=(a+b)^2-4ab$ with the printed symmetric data.

$$(a-b)^2=(a+b)^2-4ab$$""",
            ),
            (
                r"""Similarly, $x^2+y^2\ge xy$ for every real pair $(x,y)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Nonnegativity of a square gives $(p-q)^2\ge 0$ for all real $(p,q)$.""",
                True,
                r"""Use $(p-q)^2=(p+q)^2-4pq$ with the printed symmetric data.

$$(p-q)^2=(p+q)^2-4pq$$""",
            ),
            (
                r"""The reversed inequality $m^2+n^2\le 2mn$ fails for some real pair $(m,n)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real $t$, the square $t^2$ is nonnegative.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five inequalities equivalent to nonnegativity of a square.",
    ),
    task(
        title="Mixed algebra — set 1",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The stacked quotient $\dfrac{\dfrac{8v^2b}{4x^2-16}}{\dfrac{4vb}{2x+4}}$ simplifies to $\dfrac{v}{x+2}$ for $x\neq\pm 2$ and $v,b\neq 0$.""",
                False,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8v^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4vb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{v}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"""For every real pair $(r,s)$, $(r+s)^3=r^3+s^3$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For $q\neq 0$, $(3q^{-1}-1)(3q^{-1}+1)=\dfrac{9}{q^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=3q^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3q^{-1})^2-1=\frac{9}{q^2}-1$$

The reciprocal square carries coefficient $9$ on $q^2$ in the denominator.

The printed coefficient $9$ is the one that survives the expansion.""",
            ),
            (
                r"""Restricting to negative $\ell$, the quotient $|\ell|/\ell$ equals $-1$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(a,b)$, $(a+b)^2+(a-b)^2=2(a^2+b^2)$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
        ],
        overview=r"""Five unlinked claims: the $fh$ coefficient in $(2f+g-3h)^2$, a cubic remainder that accidentally matches at $0$, the wrong conjugate of $\sqrt{14+2\sqrt{13}}$, the piecewise value of $|\ell|/\ell$ on $\ell<0$, and $k^2+m^2$ from $k+m=11$, $km=13$.""",
    ),
    task(
        title="Sophie Germain offcut beside a stacked exponent",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The cube-sum identity $(x+y)^3+(x-y)^3=2x(x^2+3y^2)$ holds for every real pair $(x,y)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Difference of squares: $(p+q)(p-q)=p^2-q^2$ for every real pair $(p,q)$.""",
                True,
                r"""A difference of squares is not a square of a difference:

$$w^2-16=(w-4)(w+4),\qquad (w-4)^2=w^2-8w+4^2$$

At the test point $w=0$ the two polynomials already disagree.""",
            ),
            (
                r"""A false fourth-power expansion: $(h+k)^4=h^4+k^4+4hk(h+k)$ for real $(h,k)$.""",
                False,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8v^2b}{4x^2-16}}{\dfrac{4vb}{2x+4}}$ simplifies to $\dfrac{v}{x-2}$ for $x\neq\pm 2$ and $v,b\neq 0$.""",
                True,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8v^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4vb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{v}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
            (
                r"""Vanishing triple sum: if $a+b+c=0$, then $a^3+b^3+c^3=3abc$ for every real triple.""",
                True,
                r"""The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.""",
            ),
        ],
        overview=r"""Independent claims: Sophie Germain's $f^4+4g^4$ checked at $(1,1)$, a quadratic remainder $h-7$, $(j^2)^{3/2}=|j|^3$, a sign error in $|s-16|/(16-s)$ for $s>16$, and $|u-v|=14$ from $u+v=16$, $uv=15$.""",
    ),
    task(
        title="Nested remainder against a piecewise constant",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real pair $(a,b)$, $(a+b)^3=a^3+b^3$.""",
                False,
                r"""The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.""",
            ),
            (
                r"""For $q\neq 0$, $(6q^{-1}-1)(6q^{-1}+1)=\dfrac{1}{36q^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=6q^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(6q^{-1})^2-1=\frac{36}{q^2}-1$$

The reciprocal square carries coefficient $36$ on $q^2$ in the denominator.

The reciprocal square carries numerator $36$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""Simplifying $16^{5/4}$ is treated as producing the integer $32$.""",
                True,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""Let $p$ be a nonzero real parameter. Twice the reciprocal of the sum of $p$ and the reciprocal of $p$ equals $p$ divided by the sum of the square of $p$ and one.""",
                False,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $p\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{p+\frac{1}{p}}=\frac{2p}{p^2+1}$$

Twice the reciprocal of $p+\dfrac{1}{p}$ clears to a single rational expression.

Right-hand wording:

$$\frac{p}{p^2+1}$$

The claim's right side must be read from the same verbal description.

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"""Whenever $r+s+t=0$ at the specific values $r=2$, $s=11$, $t=-13$, the sum of cubes $r^3+s^3+t^3$ equals $3rst$, hence $-858$.""",
                True,
                r"""The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.""",
            ),
        ],
        overview=r"""Five unlinked lines: a wrong-sign $gh$ coefficient, a two-storey unit nest, $16^{5/4}=32$, the piecewise constant $22$ of $|\ell\pm 11|$ inside $(-11,11)$, and $r^3+s^3+t^3=3rst$ at $(2,11,-13)$.""",
    ),
    task(
        title="Cubic coefficient vanishing in a biquadratic product",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""If $r+s+t=0$, then $r^3+s^3+t^3=3rst$ for every real triple $(r,s,t)$.""",
                True,
                r"""The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.""",
            ),
            (
                r"""An incorrect cube expansion: $(c+d)^3=c^3+d^3$ for all real $(c,d)$ is false.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Likewise $(f+g)^3=f^3+g^3$ fails for some real pair $(f,g)$.""",
                False,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""From $p+q+r=0$, one obtains $p^3+q^3+r^3=3pqr$ for every real triple $(p,q,r)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Difference of squares in reciprocals: for $s\neq 0$, $(6s^{-1}-1)(6s^{-1}+1)=\dfrac{36}{s^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=5q^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5q^{-1})^2-1=\frac{25}{q^2}-1$$

The reciprocal square carries coefficient $25$ on $q^2$ in the denominator.

The printed coefficient $25$ is the one that survives the expansion.""",
            ),
        ],
        overview=r"""Unlinked claims: odd powers cancel in a Sophie-Germain product, a cubic remainder that matches at $0$ only, the wrong conjugate of $\sqrt{15+2\sqrt{14}}$, $|2m-14|=2|m-7|$, and $f^3+g^3+h^3=3fgh$ at $(5,8,-13)$.""",
    ),
    task(
        title="Cancelled cubic checked away from zero",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Expanding $(f+2g-h)^2$ is written with the coefficient of $gh$ equal to $+4$.""",
                False,
                r"""In a square of a sum, each mixed product is doubled. The pair contributes $2\cdot(f)\cdot(2g)$, not the undoubled product.""",
            ),
            (
                r"""For every real triple $(p,q,a)$ with $p+q+a=0$, $p^3+q^3+a^3=3pqa$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $n>0$, then $\dfrac{n^{2/3}\cdot\sqrt[3]{n\sqrt{n}}}{n^{1/6}\cdot\sqrt[6]{n^5}}=\sqrt[6]{n}$.""",
                True,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$n^{2/3}\cdot(n\cdotn^{1/2})^{1/3}=n^{2/3}\cdotn^{(1+1/2)/3}=n^{2/3}\cdotn^{1/2}$$

Inside the cube root, $n\cdot\sqrt{n}$ becomes a single power of $n$.

Denominator:

$$n^{1/6}\cdot(n^5)^{1/6}=n^{1/6}\cdotn^{5/6}=n$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{n}$$

Subtract exponents only after both sides use the same base and fractional form.

The fully reduced power matches the printed right-hand side.""",
            ),
            (
                r"""On the half-line $h<0$, the quotient $|h|/(-h)$ equals $1$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8q^2b}{4x^2-16}}{\dfrac{4qb}{2x+4}}$ simplifies to $\dfrac{q}{x+2}$ for $x\neq\pm 2$ and $q,b\neq 0$.""",
                False,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8q^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4qb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{q}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
        ],
        overview=r"""Five independent lines: a wrong-sign $gh$ term in $(f+2g-h)^2$, a cubic remainder checked at $j=1$, $(k^{2/3})^{3/2}=|k|$, $|h|/(-h)=1$ on $h<0$, and $u^2+v^2=197$ from $u+v=15$, $uv=14$.""",
    ),
    task(
        title="Swapped-ratio sum beside a denested sixteen",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""A reciprocal-square trap: for $u\neq 0$, $(5u^{-1}-1)(5u^{-1}+1)=\dfrac{1}{25u^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=5u^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5u^{-1})^2-1=\frac{25}{u^2}-1$$

The reciprocal square carries coefficient $25$ on $u^2$ in the denominator.

The reciprocal square carries numerator $25$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""Adding squared gaps: $(c+d)^2+(c-d)^2=2(c^2+d^2)$ for every real pair $(c,d)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Missing cross terms: $(f+g)^3=f^3+g^3$ is false for real $(f,g)$.""",
                False,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(U+V)^2$$

Cross term:

$$2\cdot(U)\cdot(V)$$

The collected coefficient contradicts the printed value.""",
            ),
            (
                r"""Polarisation again: $(h+k)^2+(h-k)^2=2(h^2+k^2)$ for real $(h,k)$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""Another cube error: $(h+k)^3=h^3+k^3$ is false for real $(h,k)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Unlinked claims: the $fh$ coefficient $+6$ in $(f-2g+3h)^2$, $j/k+k/j$, the wrong conjugate of $\sqrt{16+2\sqrt{55}}$, $|21-\ell|+|\ell-21|=2|\ell-21|$, and $r^2+s^2=127$ rather than $169$.""",
    ),
    task(
        title="Mixed-term cancellation in a Germain product",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""If $q>0$, then $\dfrac{q^{2/3}\cdot\sqrt[3]{q\sqrt{q}}}{q^{1/6}\cdot\sqrt[6]{q^5}}=\sqrt[6]{q}$.""",
                True,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$q^{2/3}\cdot(q\cdotq^{1/2})^{1/3}=q^{2/3}\cdotq^{(1+1/2)/3}=q^{2/3}\cdotq^{1/2}$$

Inside the cube root, $q\cdot\sqrt{q}$ becomes a single power of $q$.

Denominator:

$$q^{1/6}\cdot(q^5)^{1/6}=q^{1/6}\cdotq^{5/6}=q$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{q}$$

Subtract exponents only after both sides use the same base and fractional form.

The fully reduced power matches the printed right-hand side.""",
            ),
            (
                r"""Clearing the stacked difference $\dfrac{\dfrac{1}{h}-\dfrac{1}{j}}{\dfrac{1}{h}+\dfrac{1}{j}}$ equals $\dfrac{h-j}{h+j}$ whenever $hj\neq 0$ and $h\neq -j$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Matching positive roots, $\sqrt{11+2\sqrt{24}}$ is identified with $2\sqrt{2}+\sqrt{3}$.""",
                True,
                r"""Square the candidate conjugates:

Sum form:

$$(1+\sqrt{13})^2=14+2\sqrt{13}$$

Difference form:

$$(\sqrt{13}-1)^2=14-2\sqrt{13}$$

Both $1+\sqrt{13}$ and the principal root are positive.""",
            ),
            (
                r"""For $u\neq 0$, $(4u^{-1}-1)(4u^{-1}+1)=\dfrac{16}{u^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=4u^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4u^{-1})^2-1=\frac{16}{u^2}-1$$

The reciprocal square carries coefficient $16$ on $u^2$ in the denominator.

The printed coefficient $16$ is the one that survives the expansion.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^3=x^3+y^3$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Independent claims: Sophie Germain's product recovering $f^4+4g^4$, a sign error in a stacked difference of unit fractions, the denesting $\sqrt{11+2\sqrt{24}}=2\sqrt{2}+\sqrt{3}$, $|\ell-21|/(\ell-21)=1$ for $\ell>21$, and $m^3+n^3=902$ rather than $1331$.""",
    ),
    task(
        title="Sign error on gh next to a cube-sum trap",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Expanding the trinomial $(3f-g-h)^2$ is written with the coefficient of $gh$ equal to $-2$.""",
                False,
                r"""In a square of a sum, each mixed product is doubled. The pair contributes $2\cdot(3f)\cdot(-g)$, not the undoubled product.""",
            ),
            (
                r"""If $d>0$, then $\dfrac{d^{2/3}\cdot\sqrt[3]{d\sqrt{d}}}{d^{1/6}\cdot\sqrt[6]{d^5}}=\sqrt[6]{d}$.""",
                True,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$d^{2/3}\cdot(d\cdotd^{1/2})^{1/3}=d^{2/3}\cdotd^{(1+1/2)/3}=d^{2/3}\cdotd^{1/2}$$

Inside the cube root, $d\cdot\sqrt{d}$ becomes a single power of $d$.

Denominator:

$$d^{1/6}\cdot(d^5)^{1/6}=d^{1/6}\cdotd^{5/6}=d$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{d}$$

Subtract exponents only after both sides use the same base and fractional form.

The fully reduced power matches the printed right-hand side.""",
            ),
            (
                r"""For every real triple $(f,g,h)$ with $f+g+h=0$, $f^3+g^3+h^3=3fgh$.""",
                True,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""The product of absolute values $|u-15|\,|u+15|$ is identified with $|u^2-225|$ for every real $u$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(t,w)$, $(t+w)^3=t^3+w^3$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Unlinked claims: a wrong-sign $gh$ coefficient in $(3f-g-h)^2$, cancelling $(s^2-16)/(s^2-s-12)$, $(t^{3/4})^{4/3}=t$ for $t>0$, $|u^2-225|$ as a product of bars, and $f^3+g^3+h^3=3fgh\neq 0$ at $(4,7,-11)$.""",
    ),
    task(
        title="Visible fg coefficient beside a stripped nest",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""The coefficient of $fg$ in the expansion of $(f+4g-h)^2$ equals $8$.""",
                True,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(f+4g-h)^2$$

Cross term:

$$2\cdot(f)\cdot(4g)$$

The collected coefficient matches $fg$.""",
            ),
            (
                r"""For $m\neq 0$, $(4m^{-1}-1)(4m^{-1}+1)=\dfrac{16}{m^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=4m^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4m^{-1})^2-1=\frac{16}{m^2}-1$$

The reciprocal square carries coefficient $16$ on $m^2$ in the denominator.

The printed coefficient $16$ is the one that survives the expansion.""",
            ),
            (
                r"""Simplifying the power $16^{3/2}$ is treated as producing the integer $64$.""",
                True,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""Stripping the outer bars in $\bigl||k|-13\bigr|$ down to $|k|-13$ is proposed for every real $k$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $h>0$, then $\dfrac{h^{2/3}\cdot\sqrt[3]{h\sqrt{h}}}{h^{1/6}\cdot\sqrt[6]{h^5}}=\sqrt[3]{h}$.""",
                False,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$h^{2/3}\cdot(h\cdoth^{1/2})^{1/3}=h^{2/3}\cdoth^{(1+1/2)/3}=h^{2/3}\cdoth^{1/2}$$

Inside the cube root, $h\cdot\sqrt{h}$ becomes a single power of $h$.

Denominator:

$$h^{1/6}\cdot(h^5)^{1/6}=h^{1/6}\cdoth^{5/6}=h$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{h}$$

Subtract exponents only after both sides use the same base and fractional form.

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
        ],
        overview=r"""Five independent lines: the $fg$ coefficient $8$ in $(f+4g-h)^2$, a cancelled-factor leftover, $16^{3/2}=64$, nested bars that cannot be stripped, and $1/v+1/w=3/5$ from $v+w=21$, $vw=35$.""",
    ),
    task(
        title="Half-line scaling beside a denested twenty-one",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Expanding the square $(2f-3g+h)^2$ is written with the coefficient of $fg$ equal to $+12$.""",
                False,
                r"""In a square of a sum, each mixed product is doubled. The pair contributes $2\cdot(2f)\cdot(-3g)$, not the undoubled product.""",
            ),
            (
                r"""For every real pair $(c,d)$, $(c+d)^3=c^3+d^3$ (variant 2).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
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
                r"""Pulling the constant factor, $|-5\ell+15|$ is rewritten as $5|\ell-3|$ for every real $\ell$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real triple $(t,w,x)$ with $t+w+x=0$, $t^3+w^3+x^3=3twx$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Unlinked claims: a wrong-sign $fg$ coefficient, a reciprocal trap in a stacked unit ratio, $\sqrt{21+8\sqrt{5}}=4+\sqrt{5}$, $|-5\ell+15|=5|\ell-3|$, and $u/v+v/u=226/15$.""",
    ),
    task(
        title="Cube-root monomial against a linear ratio",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $m\neq 0$, $(1m^{-1}-1)(1m^{-1}+1)=\dfrac{1}{1m^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=1m^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1m^{-1})^2-1=\frac{1}{m^2}-1$$

The reciprocal square carries coefficient $1$ on $m^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion.""",
            ),
            (
                r"""For every real triple $(p,q,r)$ with $p+q+r=0$, $p^3+q^3+r^3=3pqr$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $k>0$, then $\dfrac{k^{2/3}\cdot\sqrt[3]{k\sqrt{k}}}{k^{1/6}\cdot\sqrt[6]{k^5}}=\sqrt[3]{k}$.""",
                False,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$k^{2/3}\cdot(k\cdotk^{1/2})^{1/3}=k^{2/3}\cdotk^{(1+1/2)/3}=k^{2/3}\cdotk^{1/2}$$

Inside the cube root, $k\cdot\sqrt{k}$ becomes a single power of $k$.

Denominator:

$$k^{1/6}\cdot(k^5)^{1/6}=k^{1/6}\cdotk^{5/6}=k$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{k}$$

Subtract exponents only after both sides use the same base and fractional form.

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
            (
                r"""For every real pair $(m,n)$, $(m+n)^3=m^3+n^3$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^3=x^3+y^3$ (variant 1).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Independent claims: the $gh$ coefficient $-4$ in $(f-g+2h)^2$, $k/m-m/k$ checked at $(5,3)$, $\sqrt[3]{-125j^6}=-5j^2$, $|s|/s=-1$ on $s<0$, and $|r-s|=12$ rather than $14$.""",
    ),
    task(
        title="Leftover factor mistaken for a remainder",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real pair $(r,s)$, $(r+s)^3=r^3+s^3$ (variant 1).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real triple $(c,d,h)$ with $c+d+h=0$, $c^3+d^3+h^3=3cdh$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Simplifying the radical $\sqrt{16j^2}$ to $4j$ is asserted for every real $j$.""",
                False,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $m\neq 0$, $(6m^{-1}-1)(6m^{-1}+1)=\dfrac{36}{m^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=6m^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(6m^{-1})^2-1=\frac{36}{m^2}-1$$

The reciprocal square carries coefficient $36$ on $m^2$ in the denominator.

The printed coefficient $36$ is the one that survives the expansion.""",
            ),
            (
                r"""Factoring the biquadratic $n^4+64$ as $(n^2+4n+8)(n^2-4n+8)$ is offered as an identity.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
        ],
        overview=r"""Five unlinked lines: a guessed $fg$ coefficient $5$ instead of $12$, $(h^3-16h)/(h^2-16)=h$, $\sqrt{16j^2}=4|j|$, $|2\ell|/\ell=2$ on $\ell>0$, and $n^4+64$ factored by a scaled Sophie-Germain step.""",
    ),
    task(
        title="Middle-sign error in a sum of cubes",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real pair $(a,b)$, $(a+b)^2+( a-b)^2=2(a^2+b^2)$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""Let $p$ be a nonzero real parameter. Twice the reciprocal of the sum of $p$ and the reciprocal of $p$ equals twice $p$ divided by the sum of the square of $p$ and one.""",
                True,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $p\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{p+\frac{1}{p}}=\frac{2p}{p^2+1}$$

Twice the reciprocal of $p+\dfrac{1}{p}$ clears to a single rational expression.

Right-hand wording:

$$\frac{2p}{p^2+1}$$

The claim's right side must be read from the same verbal description.

Both translations agree, so the statement is an identity on $p\neq 0$.""",
            ),
            (
                r"""Matching positive roots, $\sqrt{13+4\sqrt{3}}$ is identified with $1+2\sqrt{3}$.""",
                True,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""Let $t$ be a nonzero real number. Twice the reciprocal of the sum of $t$ and the reciprocal of $t$ equals $t$ divided by the sum of the square of $t$ and one.""",
                False,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $t\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{t+\frac{1}{t}}=\frac{2t}{t^2+1}$$

Twice the reciprocal of $t+\dfrac{1}{t}$ clears to a single rational expression.

Right-hand wording:

$$\frac{t}{t^2+1}$$

The claim's right side must be read from the same verbal description.

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^3=x^3+y^3$ (variant 2).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Independent claims: the $fh$ coefficient $-8$ in $(f+g-4h)^2$, the middle sign in $(n^3+14^3)/(n+14)$, $\sqrt{13+4\sqrt{3}}=1+2\sqrt{3}$, $|t-13|/|13-t|=1$, and $u^3+v^3+w^3=3uvw$ at $(1,14,-15)$.""",
    ),
    task(
        title="Grouped four-term product on a mixed card",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Grouping the four-term polynomial $fg+11f+13g+143$ as $(f+13)(g+11)$ is offered as an identity.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""Clearing the nested remainder $1-\dfrac{1}{1+\dfrac{1}{j}}$ equals $\dfrac{1}{j+1}$ for $j\neq 0$ and $j\neq -1$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Reducing the power $16^{3/4}$ to the integer $4$ is treated as correct.""",
                False,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{t^2-9}{t-3}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""Identifying the sum $|k+m|$ with $|k|+|m|$ identically on the mixed-sign region $k>0$, $m<0$ is proposed.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Let $h$ be a nonzero real letter. Twice the reciprocal of the sum of $h$ and the reciprocal of $h$ equals $h$ divided by the sum of the square of $h$ and one.""",
                False,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $h\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{h+\frac{1}{h}}=\frac{2h}{h^2+1}$$

Twice the reciprocal of $h+\dfrac{1}{h}$ clears to a single rational expression.

Right-hand wording:

$$\frac{h}{h^2+1}$$

The claim's right side must be read from the same verbal description.

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
        ],
        overview=r"""Unlinked claims: grouping $fg+11f+13g+143$, a nested unit remainder $1/(j+1)$, $16^{3/4}=8$ rather than $4$, the triangle inequality on mixed signs, and $r^2+s^2=371$.""",
    ),
    task(
        title="Quadratic remainder beside a cube-root monomial",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Expanding the trinomial $(2f-g+h)^2$ is written with the coefficient of $gh$ equal to $+2$.""",
                False,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(2f-g+h)^2$$

Cross term:

$$2\cdot(2f)\cdot(-g)$$

The collected coefficient contradicts $gh$.""",
            ),
            (
                r"""Cancelling a visible linear factor, $\dfrac{j^2-35j+300}{j-15}$ equals $j-20$ for $j\neq 15$.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{j^2-35j+300}{j-15}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8n^2b}{4x^2-16}}{\dfrac{4nb}{2x+4}}$ simplifies to $\dfrac{n}{x+2}$ for $x\neq\pm 2$ and $n,b\neq 0$.""",
                False,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8n^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4nb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{n}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"""Treating the sign quotient $|\ell|/\ell$ as identically $1$ for every $\ell\neq 0$ is proposed.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For $t\neq 0$, $(4t^{-1}-1)(4t^{-1}+1)=\dfrac{1}{16t^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=4t^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4t^{-1})^2-1=\frac{16}{t^2}-1$$

The reciprocal square carries coefficient $16$ on $t^2$ in the denominator.

The reciprocal square carries numerator $16$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
        ],
        overview=r"""Five independent lines: a wrong-sign $gh$ coefficient, the remainder $j-20$, $\sqrt[3]{8s^6}=2s^2$, $|\ell|/\ell$ only piecewise $1$, and $1/k+1/m=11/13$.""",
    ),
    task(
        title="Nested bars stripped on a short interval",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Difference of squares in reciprocals: for $t\neq 0$, $(2t^{-1}-1)(2t^{-1}+1)=\dfrac{4}{t^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=2t^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2t^{-1})^2-1=\frac{4}{t^2}-1$$

The reciprocal square carries coefficient $4$ on $t^2$ in the denominator.

The printed coefficient $4$ is the one that survives the expansion.""",
            ),
            (
                r"""Missing cube cross terms: $(c+d)^3=c^3+d^3$ fails for some real pair $(c,d)$.""",
                False,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(U+V)^2$$

Cross term:

$$2\cdot(U)\cdot(V)$$

The collected coefficient contradicts the printed value.""",
            ),
            (
                r"""Polarisation: $(f+g)^2+(f-g)^2=2(f^2+g^2)$ for every real pair $(f,g)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Stripping nested bars, $\bigl||k|-15\bigr|$ equals $|k|-15$ for every real $k$ (false).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""A false fourth power: $(h+k)^4=h^4+k^4+4hk(h+k)$ for real $(h,k)$.""",
                False,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
        ],
        overview=r"""Unlinked claims: the $fg$ coefficient $-6$ in $(3f-g-2h)^2$, a cubic remainder that matches only at $0$, $\sqrt{11+6\sqrt{2}}=3+\sqrt{2}$, nested bars that cannot be stripped, and $r^2+s^2=141$ rather than $169$.""",
    ),
    task(
        title="Unsigned cube from a stacked square",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The stacked quotient $\dfrac{\dfrac{8t^2b}{4x^2-16}}{\dfrac{4tb}{2x+4}}$ simplifies to $\dfrac{t}{x+2}$ for $x\neq\pm 2$ and $t,b\neq 0$.""",
                False,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8t^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4tb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{t}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"""Cancelling a difference of fourth powers, $\dfrac{j^4-1}{j^2-1}$ equals $j^2+1$ whenever $j\neq\pm 1$.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{j^4-1}{j^2-1}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""For every real pair $(u,v)$, $(u+v)^3=u^3+v^3$.""",
                False,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""For $v\neq 0$, $(8v^{-1}-1)(8v^{-1}+1)=\dfrac{64}{v^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=8v^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(8v^{-1})^2-1=\frac{64}{v^2}-1$$

The reciprocal square carries coefficient $64$ on $v^2$ in the denominator.

The printed coefficient $64$ is the one that survives the expansion.""",
            ),
            (
                r"""Completing the square, $k^4+4m^4$ is identified with $(k^2+2m^2)^2$ as an identity in $k$ and $m$.""",
                False,
                r"""Half of $-8$ is $-4$, and $(-4)^2=16$. Add and subtract $16$:

$$x^2-8x+20=(x^2-8x+16)+4=(x-4)^2+4$$

The leftover constant is $+4$, not zero.""",
            ),
        ],
        overview=r"""Independent claims: a forgotten doubling of $gh$, $(j^4-1)/(j^2-1)=j^2+1$, $(s^2)^{3/2}=|s|^3$, $|2t-32|=2|t-16|$, and $(k^2+2m^2)^2$ versus $k^4+4m^4$.""",
    ),
    task(
        title="Inflated denesting of sixteen plus a surd",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""The coefficient of $fg$ in the expansion of $(f-3g-h)^2$ equals $-6$.""",
                True,
                r"""In a square of a sum, each mixed product is doubled. The pair contributes $2\cdot(f)\cdot(-3g)$, not the undoubled product.""",
            ),
            (
                r"""If $f>0$, then $\dfrac{f^{2/3}\cdot\sqrt[3]{f\sqrt{f}}}{f^{1/6}\cdot\sqrt[6]{f^5}}=\sqrt[3]{f}$.""",
                False,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$f^{2/3}\cdot(f\cdotf^{1/2})^{1/3}=f^{2/3}\cdotf^{(1+1/2)/3}=f^{2/3}\cdotf^{1/2}$$

Inside the cube root, $f\cdot\sqrt{f}$ becomes a single power of $f$.

Denominator:

$$f^{1/6}\cdot(f^5)^{1/6}=f^{1/6}\cdotf^{5/6}=f$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{f}$$

Subtract exponents only after both sides use the same base and fractional form.

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
            (
                r"""For every real pair $(f,g)$, $(f+g)^3=f^3+g^3$ (variant 2).""",
                False,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""Treating the quotient $|k|/k$ as identically $-1$ for every $k\neq 0$ is proposed.""",
                False,
                r"""If $k\neq 0$ then $|k|=\pm k$, hence

$$\frac{|k|}{k}=\pm 1$$""",
            ),
            (
                r"""For every real pair $(t,w)$, $(t+w)^3=t^3+w^3$ (variant 1).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Five unlinked lines: the $fg$ coefficient $-6$ in $(f-3g-h)^2$, the remainder $h-9$, an inflated denesting of $\sqrt{16+2\sqrt{15}}$, $|k|/k$ only piecewise $-1$, and $|u-v|=\sqrt{172}$ rather than $16$.""",
    ),
    task(
        title="Compound ratio reciprocal trap",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Expanding the trinomial $(f+2g-5h)^2$ is written with the coefficient of $fh$ equal to $+10$.""",
                False,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(f+2g-5h)^2$$

Cross term:

$$2\cdot(f)\cdot(2g)$$

The collected coefficient contradicts $fh$.""",
            ),
            (
                r"""For $k\neq 0$, $(7k^{-1}-1)(7k^{-1}+1)=\dfrac{49}{k^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=7k^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7k^{-1})^2-1=\frac{49}{k^2}-1$$

The reciprocal square carries coefficient $49$ on $k^2$ in the denominator.

The printed coefficient $49$ is the one that survives the expansion.""",
            ),
            (
                r"""For every real pair $(u,v)$, $(u+v)^2+( u-v)^2=2(u^2+v^2)$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""On the open interval $-15<\ell<15$, the sum $|\ell+15|+|\ell-15|$ equals $30$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $k>0$, then $\dfrac{k^{2/3}\cdot\sqrt[3]{k\sqrt{k}}}{k^{1/6}\cdot\sqrt[6]{k^5}}=\sqrt[6]{k}$.""",
                True,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$k^{2/3}\cdot(k\cdotk^{1/2})^{1/3}=k^{2/3}\cdotk^{(1+1/2)/3}=k^{2/3}\cdotk^{1/2}$$

Inside the cube root, $k\cdot\sqrt{k}$ becomes a single power of $k$.

Denominator:

$$k^{1/6}\cdot(k^5)^{1/6}=k^{1/6}\cdotk^{5/6}=k$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{k}$$

Subtract exponents only after both sides use the same base and fractional form.

The fully reduced power matches the printed right-hand side.""",
            ),
        ],
        overview=r"""Unlinked claims: a wrong-sign $fh$ coefficient, a reciprocal trap in $(1+j/k)/(1-j/k)$, $(t^{2/3})^3=t^2$, the piecewise constant $30$ of $|\ell\pm 15|$ inside $(-15,15)$, and $r^3+s^3+t^3=-792$ at $(3,8,-11)$.""",
    ),
    task(
        title="Dropped bars on a two-letter quotient",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The coefficient of $gh$ in the expansion of $(4f-g-h)^2$ equals $2$.""",
                True,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(4f-g-h)^2$$

Cross term:

$$2\cdot(4f)\cdot(-g)$$

The collected coefficient matches $gh$.""",
            ),
            (
                r"""Reducing the quadratic $\dfrac{m^2-15m+56}{m-7}$ to $m-7$ for $m\neq 7$ is treated as an identity.""",
                False,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{m^2-15m+56}{m-7}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""For $h\neq 0$, $(1h^{-1}-1)(1h^{-1}+1)=\dfrac{1}{h^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=1h^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1h^{-1})^2-1=\frac{1}{h^2}-1$$

The reciprocal square carries coefficient $1$ on $h^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion.""",
            ),
            (
                r"""Writing the quotient $\bigl|\dfrac{r}{s}\bigr|$ as $\dfrac{|r|}{|s|}$ for $s\neq 0$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(t,w)$, $(t+w)^3=t^3+w^3$ (variant 2).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Independent claims: the $gh$ coefficient $2$ in $(4f-g-h)^2$, a cancelled-factor leftover $m-7$ instead of $m-8$, $16^{5/4}=32$ rather than $8$, $|r/s|=|r|/|s|$, and $k^2+m^2=79$ rather than $121$.""",
    ),
    task(
        title="Single-point check of a fourth-power split",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""If $n>0$, then $\dfrac{n^{2/3}\cdot\sqrt[3]{n\sqrt{n}}}{n^{1/6}\cdot\sqrt[6]{n^5}}=\sqrt[3]{n}$.""",
                False,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$n^{2/3}\cdot(n\cdotn^{1/2})^{1/3}=n^{2/3}\cdotn^{(1+1/2)/3}=n^{2/3}\cdotn^{1/2}$$

Inside the cube root, $n\cdot\sqrt{n}$ becomes a single power of $n$.

Denominator:

$$n^{1/6}\cdot(n^5)^{1/6}=n^{1/6}\cdotn^{5/6}=n$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{n}$$

Subtract exponents only after both sides use the same base and fractional form.

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined.""",
            ),
            (
                r"""For every real pair $(p,q)$, $(p+q)^2+( p-q)^2=2(p^2+q^2)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $b>0$, then $\dfrac{b^{2/3}\cdot\sqrt[3]{b\sqrt{b}}}{b^{1/6}\cdot\sqrt[6]{b^5}}=\sqrt[6]{b}$.""",
                True,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$b^{2/3}\cdot(b\cdotb^{1/2})^{1/3}=b^{2/3}\cdotb^{(1+1/2)/3}=b^{2/3}\cdotb^{1/2}$$

Inside the cube root, $b\cdot\sqrt{b}$ becomes a single power of $b$.

Denominator:

$$b^{1/6}\cdot(b^5)^{1/6}=b^{1/6}\cdotb^{5/6}=b$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{b}$$

Subtract exponents only after both sides use the same base and fractional form.

The fully reduced power matches the printed right-hand side.""",
            ),
            (
                r"""Dropping the bars around $2\ell+16$ and writing $2\ell+16$ for every real $\ell$ is offered as an identity.""",
                False,
                r"""Dropping the bars requires $2u+1\ge 0$. For a counter-example take $u=-2$:

At the test point:

$$|2\cdot(-2)+1|=3,\qquad 2\cdot(-2)+1=-3$$""",
            ),
            (
                r"""Squaring a single Sophie-Germain factor, $n^4+4m^4$ is identified with $(n^2+2nm+2m^2)^2$.""",
                False,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
        ],
        overview=r"""Five unlinked lines: a forgotten doubling of $fh$, $(j^2-121)/(j-11)=j+11$ checked at $0$, $\sqrt{16+2\sqrt{15}}=1+\sqrt{15}$, $|2\ell+16|$ versus $2\ell+16$, and the square of one Sophie-Germain factor.""",
    ),
    task(
        title="Continued nest written as its reciprocal",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The coefficient of $fg$ in the expansion of $(f-5g+h)^2$ equals $-10$.""",
                True,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(f-5g+h)^2$$

Cross term:

$$2\cdot(f)\cdot(-5g)$$

The collected coefficient matches $fg$.""",
            ),
            (
                r"""Clearing the three-storey nest $1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{j}}}$ equals $\dfrac{2j+1}{3j+2}$ for $j\neq 0$, $j\neq -1$, and $j\neq -1/2$.""",
                False,
                r"""Work from the innermost layer outward:

Inner:

$$1+\frac{1}{x}=\frac{x+1}{x}$$

Reciprocal:

$$\frac{1}{1+\frac{1}{x}}=\frac{x}{x+1}$$

Outer:

$$1+\frac{x}{x+1}=\frac{2x+1}{x+1}$$""",
            ),
            (
                r"""For every real pair $(f,g)$, $(f+g)^3=f^3+g^3$ (variant 3).""",
                False,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""If $f>0$, then $\dfrac{f^{2/3}\cdot\sqrt[3]{f\sqrt{f}}}{f^{1/6}\cdot\sqrt[6]{f^5}}=\sqrt[6]{f}$.""",
                True,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$f^{2/3}\cdot(f\cdotf^{1/2})^{1/3}=f^{2/3}\cdotf^{(1+1/2)/3}=f^{2/3}\cdotf^{1/2}$$

Inside the cube root, $f\cdot\sqrt{f}$ becomes a single power of $f$.

Denominator:

$$f^{1/6}\cdot(f^5)^{1/6}=f^{1/6}\cdotf^{5/6}=f$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{f}$$

Subtract exponents only after both sides use the same base and fractional form.

The fully reduced power matches the printed right-hand side.""",
            ),
            (
                r"""For every real pair $(t,w)$, $(t+w)^2+( t-w)^2=2(t^2+w^2)$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
        ],
        overview=r"""Unlinked claims: the $fg$ coefficient $-10$ in $(f-5g+h)^2$, a three-storey nest written as its reciprocal, a false denesting $2+\sqrt{11}$, $|\ell-21|/(21-\ell)$ not constantly $1$ on $\ell>0$, and $u^2+v^2=170$.""",
    ),
    task(
        title="Vanishing of a shifted square's absolute value",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Expanding the trinomial $(2f+2g-h)^2$ is written with the coefficient of $fg$ equal to $4$.""",
                False,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(2f+2g-h)^2$$

Cross term:

$$2\cdot(2f)\cdot(2g)$$

The collected coefficient contradicts $fg$.""",
            ),
            (
                r"""Let $m$ be a nonzero real letter. Twice the reciprocal of the sum of $m$ and the reciprocal of $m$ equals $m$ divided by the sum of the square of $m$ and one.""",
                False,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $m\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{m+\frac{1}{m}}=\frac{2m}{m^2+1}$$

Twice the reciprocal of $m+\dfrac{1}{m}$ clears to a single rational expression.

Right-hand wording:

$$\frac{m}{m^2+1}$$

The claim's right side must be read from the same verbal description.

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols.""",
            ),
            (
                r"""Simplifying a monomial radical, $(16k^4)^{1/4}$ is rewritten as $2k$ for every real $k$.""",
                False,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""For $s\neq 0$, $(5s^{-1}-1)(5s^{-1}+1)=\dfrac{1}{25s^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=5s^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5s^{-1})^2-1=\frac{25}{s^2}-1$$

The reciprocal square carries coefficient $25$ on $s^2$ in the denominator.

The reciprocal square carries numerator $25$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^2+( x-y)^2=2(x^2+y^2)$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
        ],
        overview=r"""Independent claims: a forgotten extra factor $2$ in an $fg$ coefficient, the remainder $h-8$, $(16k^4)^{1/4}=2|k|$, the range of $|\ell^2+14|$, and $1/r+1/s=13/21$.""",
    ),
    task(
        title="Signed cube root of a monomial",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real pair $(r,s)$, $(r+s)^3=r^3+s^3$ (variant 2).""",
                False,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""For every real pair $(c,d)$, $(c+d)^3=c^3+d^3$ (variant 5).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real triple $(f,g,h)$ with $f+g+h=0$, $f^3+g^3+h^3=3fgh$ (variant 1).""",
                True,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""Dropping a minus, $|-\ell|$ is rewritten as $-\ell$ for every real $\ell$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Let $h$ be a nonzero real letter. Twice the reciprocal of the sum of $h$ and the reciprocal of $h$ equals twice $h$ divided by the sum of the square of $h$ and one.""",
                True,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $h\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{h+\frac{1}{h}}=\frac{2h}{h^2+1}$$

Twice the reciprocal of $h+\dfrac{1}{h}$ clears to a single rational expression.

Right-hand wording:

$$\frac{2h}{h^2+1}$$

The claim's right side must be read from the same verbal description.

Both translations agree, so the statement is an identity on $h\neq 0$.""",
            ),
        ],
        overview=r"""Five unlinked lines: a forgotten doubling of $fh$, opposite linear fractions summing to $1$ not $0$, $\sqrt[3]{-8s^9}=-2s^3$, $|-\ell|=|\ell|$, and $r^3+u^3+w^3=3ruw$ at $(5,11,-16)$.""",
    ),
    task(
        title="Wrong conjugate of twenty-one plus eight roots",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real pair $(a,b)$, $(a+b)^2+( a-b)^2=2(a^2+b^2)$ (variant 1).""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""Subtracting the unit fractions $\dfrac{1}{n-11}-\dfrac{1}{n+11}$ equals $\dfrac{11}{n^2-121}$ whenever $n\neq\pm 11$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For $s\neq 0$, $(8s^{-1}-1)(8s^{-1}+1)=\dfrac{64}{s^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=8s^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(8s^{-1})^2-1=\frac{64}{s^2}-1$$

The reciprocal square carries coefficient $64$ on $s^2$ in the denominator.

The printed coefficient $64$ is the one that survives the expansion.""",
            ),
            (
                r"""Opposite linear forms satisfy $|3\ell-21|=|21-3\ell|$ for every real $\ell$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $h>0$, then $\dfrac{h^{2/3}\cdot\sqrt[3]{h\sqrt{h}}}{h^{1/6}\cdot\sqrt[6]{h^5}}=\sqrt[6]{h}$.""",
                True,
                r"""Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$h^{2/3}\cdot(h\cdoth^{1/2})^{1/3}=h^{2/3}\cdoth^{(1+1/2)/3}=h^{2/3}\cdoth^{1/2}$$

Inside the cube root, $h\cdot\sqrt{h}$ becomes a single power of $h$.

Denominator:

$$h^{1/6}\cdot(h^5)^{1/6}=h^{1/6}\cdoth^{5/6}=h$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{h}$$

Subtract exponents only after both sides use the same base and fractional form.

The fully reduced power matches the printed right-hand side.""",
            ),
        ],
        overview=r"""Unlinked claims: the $gh$ coefficient $-8$ in $(f-4g+h)^2$, a halved numerator $11$ instead of $22$, the wrong conjugate of $\sqrt{21+8\sqrt{5}}$, $|3\ell-21|=|21-3\ell|$, and $k/m+m/k=61/7$ rather than $5/7$.""",
    ),
    task(
        title="Exponent addition flipping a sign",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Let $m$ be a nonzero real letter. Twice the reciprocal of the sum of $m$ and the reciprocal of $m$ equals twice $m$ divided by the sum of the square of $m$ and one.""",
                True,
                r"""The statement is entirely worded. Translate each English phrase into symbols for $m\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{m+\frac{1}{m}}=\frac{2m}{m^2+1}$$

Twice the reciprocal of $m+\dfrac{1}{m}$ clears to a single rational expression.

Right-hand wording:

$$\frac{2m}{m^2+1}$$

The claim's right side must be read from the same verbal description.

Both translations agree, so the statement is an identity on $m\neq 0$.""",
            ),
            (
                r"""Cancelling a quadratic, $\dfrac{k^2-29k+210}{k-15}$ equals $k-14$ for $k\neq 15$.""",
                True,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{k^2-29k+210}{k-15}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""For every real pair $(f,g)$, $(f+g)^3=f^3+g^3$ (variant 4).""",
                False,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""On the half-line $\ell<11$, the quotient $\dfrac{|\ell-11|}{11-\ell}$ equals $1$ wherever $\ell\neq 11$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(t,w)$, $(t+w)^3=t^3+w^3$ (variant 3).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Independent claims: a halved $fg$ coefficient, the remainder $k-14$, $t^{-3}t^{5/2}=t^{-1/2}$ rather than $t^{1/2}$, $|\ell-11|/(11-\ell)=1$ on $\ell<11$, and $r^3+s^3+t^3=-1638$ at $(6,7,-13)$.""",
    ),
    task(
        title="Difference of reciprocal squares with a dropped factor",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $p\neq 0$, $(8p^{-1}-1)(8p^{-1}+1)=\dfrac{64}{p^2}-1$.""",
                True,
                r"""The product is a difference of squares. Set $A=8p^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(8p^{-1})^2-1=\frac{64}{p^2}-1$$

The reciprocal square carries coefficient $64$ on $p^2$ in the denominator.

The printed coefficient $64$ is the one that survives the expansion.""",
            ),
            (
                r"""For every real pair $(p,q)$, $(p+q)^3=p^3+q^3$ (variant 1).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real triple $(u,v,c)$ with $u+v+c=0$, $u^3+v^3+c^3=3uvc$.""",
                True,
                r"""The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.""",
            ),
            (
                r"""For $p\neq 0$, $(4p^{-1}-1)(4p^{-1}+1)=\dfrac{1}{16p^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=4p^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4p^{-1})^2-1=\frac{16}{p^2}-1$$

The reciprocal square carries coefficient $16$ on $p^2$ in the denominator.

The reciprocal square carries numerator $16$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^3=x^3+y^3$ (variant 3).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Five unlinked lines: the $fh$ coefficient $-8$ in $(2f-g-2h)^2$, a dropped factor $k+j$ in $1/j^2-1/k^2$, $(t^{3/2})^{2/3}=t$ for $t>0$, $|\ell+11|-|\ell|$ not identically $11$, and $u^2+v^2=409$ rather than $441$.""",
    ),
    task(
        title="Folded distance on a bounded interval",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Expanding the trinomial $(f+3g-2h)^2$ is written with the coefficient of $gh$ equal to $-6$.""",
                False,
                r"""In a square of a sum, each mixed product is doubled. The pair contributes $2\cdot(f)\cdot(3g)$, not the undoubled product.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8b^2c}{4x^2-16}}{\dfrac{4bc}{2x+4}}$ simplifies to $\dfrac{b}{x+2}$ for $x\neq\pm 2$ and $b,c\neq 0$.""",
                False,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8b^2c}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4bc}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{b}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder.""",
            ),
            (
                r"""For every real pair $(f,g)$, $(f+g)^3=f^3+g^3$ (variant 5).""",
                False,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""Folding the distance, $|\ell|+|\ell-21|$ equals $21$ throughout the closed interval $0\le\ell\le 21$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real triple $(t,w,u)$ with $t+w+u=0$, $t^3+w^3+u^3=3twu$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Unlinked claims: a halved $gh$ coefficient, the middle sign in $(h^3+11^3)/(h+11)$, the wrong conjugate of $\sqrt{13+2\sqrt{30}}$, the folded distance $21$ on $[0,21]$, and $r^3+s^3+t^3=3rst$ at $(4,11,-15)$.""",
    ),
    task(
        title="Nested j-minus-reciprocal over a plus",
        subsection="2.5",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The coefficient of $gh$ in the expansion of $(f-2g-3h)^2$ equals $12$.""",
                True,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(f-2g-3h)^2$$

Cross term:

$$2\cdot(f)\cdot(-2g)$$

The collected coefficient matches $gh$.""",
            ),
            (
                r"""For $x\neq 0$, $(5x^{-1}-1)(5x^{-1}+1)=\dfrac{1}{25x^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=5x^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5x^{-1})^2-1=\frac{25}{x^2}-1$$

The reciprocal square carries coefficient $25$ on $x^2$ in the denominator.

The reciprocal square carries numerator $25$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""For every real triple $(u,v,p)$ with $u+v+p=0$, $u^3+v^3+p^3=3uvp$.""",
                True,
                r"""Innermost stack multiplies exponents:

Inner:

$$(t^{2})^{3}=t^{6}$$

Outer:

$$(t^{6})^{1/2}=t^{3}$$

Adding exponents first would be the product rule, not the power-of-a-power rule.""",
            ),
            (
                r"""Treating the scaled quotient $|2\ell|/\ell$ as identically $2$ for every $\ell\neq 0$ is proposed.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8q^2b}{4x^2-16}}{\dfrac{4qb}{2x+4}}$ simplifies to $\dfrac{q}{x-2}$ for $x\neq\pm 2$ and $q,b\neq 0$.""",
                True,
                r"""The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8q^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4qb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{q}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.""",
            ),
        ],
        overview=r"""Independent claims: the $gh$ coefficient $12$ in $(f-2g-3h)^2$, $(j-1/j)/(j+1/j)=(j^2-1)/(j^2+1)$, $(w^{2/5})^{5/2}=w$ for $w>0$, $|2\ell|/\ell$ only piecewise $2$, and $|k-m|=2\sqrt{29}$ rather than $6$.""",
    ),
    task(
        title="Closing card with thirty-five and a piecewise ratio",
        subsection="2.5",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Expanding the square $(2f-5g+h)^2$ is written with the coefficient of $fg$ equal to $-10$.""",
                False,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(2f-5g+h)^2$$

Cross term:

$$2\cdot(2f)\cdot(-5g)$$

The collected coefficient contradicts $fg$.""",
            ),
            (
                r"""For every real triple $(c,d,m)$ with $c+d+m=0$, $c^3+d^3+m^3=3cdm$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For $p\neq 0$, $(3p^{-1}-1)(3p^{-1}+1)=\dfrac{1}{9p^2}-1$.""",
                False,
                r"""The product is a difference of squares. Set $A=3p^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3p^{-1})^2-1=\frac{9}{p^2}-1$$

The reciprocal square carries coefficient $9$ on $p^2$ in the denominator.

The reciprocal square carries numerator $9$, not $1$. Swapping numerator and denominator is the last-step error.""",
            ),
            (
                r"""Adding opposite quotients, $|\ell|/\ell+|\ell|/(-\ell)$ equals $0$ for every $\ell\neq 0$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(t,w)$, $(t+w)^3=t^3+w^3$ (variant 4).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Five unlinked lines: a halved $fg$ coefficient, $(s^3-35s)/(s^2-35)=s$, the wrong conjugate of $\sqrt{21+12\sqrt{3}}$, $|\ell|/\ell+|\ell|/(-\ell)=0$, and $u^2+v^2=1183$ rather than $1225$.""",
    ),
]

