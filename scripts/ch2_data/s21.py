from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="Warm-up: square of a sum",
        subsection="2.1",
        difficulty="1/5",
        context=CTX,
        items=[
            (
                r"""The identity $(a+b)^2=a^2+2ab+b^2$ holds for every real pair $(a,b)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Squaring $x+1$ yields $x^2+2x+1$ for every real $x$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""When $p$ and $q$ are real, $(p-q)^2=p^2-2pq+q^2$.""",
                True,
                r"""Use $(p-q)^2=(p+q)^2-4pq$ with the printed symmetric data.

$$(p-q)^2=(p+q)^2-4pq$$""",
            ),
            (
                r"""Doubling inside a square: $(2t)^2=4t^2$ for every real $t$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Omitting the middle term gives $(m+n)^2=m^2+n^2$, which is false for real $(m,n)$.""",
                False,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
        ],
        overview=r"Five direct square expansions: three standard identities, one monomial square, and one missing middle term.",
    ),
    task(
        title="Warm-up: difference of two squares",
        subsection="2.1",
        difficulty="1/5",
        context=CTX,
        items=[
            (
                r"""Factoring a difference: $x^2-y^2=(x-y)(x+y)$ for every real pair $(x,y)$.""",
                True,
                r"""Difference of squares in $x$ and $s$:

$$(x-s)(x+s) = x^2-s^2$$

$$= x^2-(y+z)^2$$

The grouping is an identity in the three letters.""",
            ),
            (
                r"""The unit shift $a^2-1=(a-1)(a+1)$ holds for every real $a$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Reordering factors, $u^2-v^2=(u+v)(u-v)$ for all real $(u,v)$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""Squaring a difference is not factoring: $k^2-9=(k-3)^2$ is false for real $k$.""",
                False,
                r"""A difference of squares is not a square of a difference:

$$k^2-9=(k-3)(k+3),\qquad (k-3)^2=k^2-6k+3^2$$

At the test point $k=0$ the two polynomials already disagree.""",
            ),
            (
                r"""The gap-four pattern $r^2-4=(r-2)(r+2)$ holds for every real $r$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five factorisations of a difference of squares, including one squared-difference trap.",
    ),
    task(
        title="Warm-up: elementary sum and product data",
        subsection="2.1",
        difficulty="2/5",
        context=CTX,
        items=[
            (
                r"""If $a+b=s$ and $ab=p$, then $a^2+b^2=s^2-2p$ for every real pair with sum $s$ and product $p$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Whenever $m+n=t$ and $mn=q$, one has $m^2+n^2=t^2-2q$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""From $u+v=r$ and $uv=w$, it follows that $u^2+v^2=r^2-2w$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Given $c+d=h$ and $cd=k$, the identity $c^2+d^2=h^2-2k$ holds.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Replacing $2p$ by $p$ makes $a^2+b^2=s^2-p$ false when $a+b=s$ and $ab=p$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Five square-sum recoveries from sum and product using $a^2+b^2=(a+b)^2-2ab$.""",
    ),
    task(
        title="Warm-up: cube sum under a vanishing triple sum",
        subsection="2.1",
        difficulty="2/5",
        context=CTX,
        items=[
            (
                r"""If $a+b+c=0$, then $a^3+b^3+c^3=3abc$ for every real triple $(a,b,c)$.""",
                True,
                r"""The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.""",
            ),
            (
                r"""Vanishing $x+y+z=0$ implies $x^3+y^3+z^3=3xyz$ for every real triple $(x,y,z)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Whenever $p+q+r=0$, the cube sum satisfies $p^3+q^3+r^3=3pqr$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""Under $a+b+c=0$, the claim $a^3+b^3+c^3=0$ is false for real triples $(a,b,c)$.""",
                False,
                r"""The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.""",
            ),
            (
                r"""With $m+n+t=0$, one has $m^3+n^3+t^3=3mnt$ for every real triple $(m,n,t)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five uses of the vanishing-sum cube identity with letter-only hypotheses.",
    ),
    task(
        title="Binomial identities — set 1",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""The inequality $a^2-ab\ge ab-b^2$ holds for every real pair $(a,b)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(r,s)$, $(r+s)^3-(r^3+s^3+3rs)=3rs(r+s)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The sum of the fourth power of $m$ and four times the fourth power of $n$ equals the square of $m^2+2n^2$ for every real pair $(m,n)$.""",
                False,
                r"""The wording stops at a single square. Expand $m^2+2n^2$ and compare with $m^4+4n^4$ before accepting the verbal equality.

Expand the printed square:

$$(m^2+2n^2)^2=m^4+4m^2n^2+4n^4$$

The cross term $4m^2n^2$ is not present in $m^4+4n^4$.

The Sophie Germain rewrite must subtract $(2mn)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"""Given $a+b+c=0$ with $a=4$ and $b=-1$, sets $c=3$ and concludes $a^3+b^3+c^3=3abc$.""",
                False,
                r"""The vanishing-sum rule needs $c=-(a+b)=-3$, not $c=3$. With the printed values one has $a+b+c\neq 0$, and

Direct cubes:

$$4^3+(-1)^3+(3)^3 = 64-1+27$$

$$= 90$$

Compare:

$$3\cdot 4\cdot (-1)\cdot (3)=-36$$

The two sides disagree.""",
            ),
            (
                r"""The inequality $c^2+cd\ge cd+d^2$ holds for every real pair $(c,d)$.""",
                False,
                r"""The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$c^2+cd-(cd+d^2)=c^2-d^2=(c-d)(c+d)$$

The factorisation $(c-d)(c+d)$ is not a square, so the sign can change.

For $c=0$, $d=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.""",
            ),
        ],
        overview=r"Five independent leftovers: an elementary square-sum, a mixed-term coefficient, a cube difference, a vanishing-sum trap, and a polarisation remainder.",
    ),
    task(
        title="Binomial identities — set 2",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For every real quadruple $(a,b,c,d)$, $(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
            (
                r"""For every real pair $(c,d)$, $(c+d)^2=c^2+2cd+d^2$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real $k$, $(3k-2)^2-(9k^2-12k+3)=1$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $r^2-rs\ge rs-s^2$ holds for every real pair $(r,s)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The identity $(2h+5)^2=4h^2+10h+25$ as a standard expansion.""",
                False,
                r"""The cross term in $(U+V)^2$ is $2UV$, not $UV$: the middle coefficient must be $2\cdot(2h)\cdot(5)$.""",
            ),
        ],
        overview=r"Five separate near-misses: a dropped linear cross term, an elementary square-sum, a squared difference, a completed-square leftover, and a halved middle term.",
    ),
    task(
        title="Binomial identities — set 3",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $b$ equals the square of $a^2+2b^2$ for every real pair $(a,b)$.""",
                False,
                r"""The wording stops at a single square. Expand $a^2+2b^2$ and compare with $a^4+4b^4$ before accepting the verbal equality.

Expand the printed square:

$$(a^2+2b^2)^2=a^4+4a^2b^2+4b^4$$

The cross term $4a^2b^2$ is not present in $a^4+4b^4$.

The Sophie Germain rewrite must subtract $(2ab)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"""If $c^{-3}d^2=2$, then $\dfrac{c^8d^3}{c^2d^7}+3cd\cdot\dfrac{c^{-6}d^5}{c^7d^{-2}}=48$ for $c,d\neq 0$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real value where defined, $(f+g)^2-(f^2+g^2)=the remainder is identically zero$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real quadruple $(u,v,w,z)$, $(u^2+v^2)(w^2+z^2)=(uw-vz)^2+(uz+vw)^2$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(u^2+v^2)(w^2+z^2)=(uw-vz)^2+(uz+vw)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^2-(x^2+xy+xy+y^2)=0$.""",
                False,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
        ],
        overview=r"Five coefficient and comparison checks: a doubled middle, a square-nonnegativity rewrite, a dropped cross term, a grouped difference of squares, and a near-miss perfect square.",
    ),
    task(
        title="Perfect squares that miss the constant by one",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""Reading $9y^2-12y+4$ as $(3y-2)^2$ is valid for every real $y$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $r^2+rs\ge rs+s^2$ holds for every real pair $(r,s)$.""",
                False,
                r"""The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$r^2+rs-(rs+s^2)=r^2-s^2=(r-s)(r+s)$$

The factorisation $(r-s)(r+s)$ is not a square, so the sign can change.

For $r=0$, $s=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.""",
            ),
            (
                r"""For every real $f$, $(f+1)^2=f^2+1$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Splitting $z^2-25$ as $(z-5)(z+5)$ holds for every real $z$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $p^{-3}q^2=2$, then $\dfrac{p^8q^3}{p^2q^7}+3pq\cdot\dfrac{p^{-6}q^5}{p^7q^{-2}}=48.25$ for $p,q\neq 0$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five recognition checks: a genuine perfect square, a missing middle, an undoubled elementary product, a difference of squares, and a subtracted-square remainder.",
    ),
    task(
        title="Grouping a linear sum inside a square difference",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For every real pair $(p,q)$, $(p+q)^2-(p-q)^2=4pq$.""",
                True,
                r"""Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.""",
            ),
            (
                r"""For every real quadruple $(f,g,t,x)$, $(f^2+g^2)(t^2+x^2)=(ft-gx)^2+(fx+gt)^2$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(f^2+g^2)(t^2+x^2)=(ft-gx)^2+(fx+gt)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
            (
                r"""The sum of the fourth power of $p$ and four times the fourth power of $q$ equals the square of $p^2+2q^2$ for every real pair $(p,q)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real $m$, $(m+1)^2=m^2+1$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $c^2-cd\ge cd-d^2$ holds for every real pair $(c,d)$.""",
                True,
                r"""The inequality compares two quadratic-looking sides in $c$ and $d$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$c^2-cd-(cd-d^2)=c^2-2cd+d^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(c-d)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line.""",
            ),
        ],
        overview=r"Five rewrite checks: a grouped difference of squares, an elementary gap square, a binomial remainder, a cube with dropped mixed terms, and an off-by-one perfect square.",
    ),
    task(
        title="Signs that flip only the cross term",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For every real pair $(m,n)$, $(m+n)^2-(m^2+n^2)=2mn$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(a,b)$, $a^3+b^3=(a+b)(a^2-ab+b^2)$.""",
                True,
                r"""The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.""",
            ),
            (
                r"""If $p^{-3}q^2=2$, then $\dfrac{p^8q^3}{p^2q^7}+3pq\cdot\dfrac{p^{-6}q^5}{p^7q^{-2}}=48$ for $p,q\neq 0$.""",
                False,
                r"""The given relation $p^{-3}q^2=2$ does not determine the claim by inspection alone. Set $R=p^{-3}q^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{p^8q^3}{p^2q^7}=p^6q^{-4}=R^{-2}$$

Powers of $p$ and $q$ collapse to a negative power of $R$.

Second summand:

$$3pq\cdot\frac{p^{-6}q^5}{p^7q^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The small reciprocal term survives alongside the larger power term.

Dropping the summand $R^{-2}=\tfrac{1}{4}$ leaves $48$, which is not the value of the original expression.""",
            ),
            (
                r"""Completing the square, $x^2+6x+5$ is rewritten as $(x+3)^2$ with no leftover constant.""",
                False,
                r"""Half of $+6$ is $3$, and $(3)^2=9$. Add and subtract $9$:

$$x^2+6x+5=(x^2+6x+9)-4=(x+3)^2-4$$

The leftover constant is $-4$, not zero.""",
            ),
            (
                r"""Collecting the $xy$ term in $(x+2y)^2$, the recorded coefficient $+4$.""",
                True,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(x+2y)^2$$

Cross term:

$$2\cdot(x)\cdot(2y)$$

The collected coefficient matches the printed value.""",
            ),
        ],
        overview=r"Five sign and factoring checks: two opposite binomials, a difference of squares, a vanishing-sum trap, a completed-square leftover, and a doubled middle.",
    ),
    task(
        title="A doubled middle that refuses to be halved",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""The sum of the fourth power of $u$ and four times the fourth power of $v$ factors as the product of $u^2-2uv+2v^2$ and $u^2+2uv+2v^2$ for every real pair $(u,v)$.""",
                True,
                r"""The verbal claim is a Sophie Germain factorisation in $u$ and $v$. Insert $\pm 4u^2v^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$u^4+4v^4=(u^2+2v^2)^2-(2uv)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(u^2-2uv+2v^2)(u^2+2uv+2v^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.""",
            ),
            (
                r"""With $a-b=3$ and $ab=10$, expanding $(a-b)^2+4ab$ equals $(a+b)^2=49$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $x^2-xy\ge xy-y^2$ holds for every real pair $(x,y)$.""",
                True,
                r"""The inequality compares two quadratic-looking sides in $x$ and $y$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$x^2-xy-(xy-y^2)=x^2-2xy+y^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(x-y)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line.""",
            ),
            (
                r"""For every real pair $(m,n)$, $(m+n)^2-(m-n)^2=4mn$.""",
                True,
                r"""Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^2=x^2+y^2$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"""Five middle-term checks: a doubled product, a polarisation square, a genuine perfect square, a halved cross term, and a constant that misses $5^2$.""",
    ),
    task(
        title="Three-term squares with a dropped factor two",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For all real values in $(x+y+z)^2$, subtracting $x^2+y^2+z^2$ from the expansion leaves $xy+yz+zx$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $x^2+xy\ge xy+y^2$ holds for every real pair $(x,y)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real value where defined, $(a+b)^3-(a^3+b^3)=identically zero$.""",
                False,
                r"""The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.""",
            ),
            (
                r"""The sum of the fourth power of $f$ and four times the fourth power of $g$ equals the square of $f^2+2g^2$ for every real pair $(f,g)$.""",
                False,
                r"""The wording stops at a single square. Expand $f^2+2g^2$ and compare with $f^4+4g^4$ before accepting the verbal equality.

Expand the printed square:

$$(f^2+2g^2)^2=f^4+4f^2g^2+4g^4$$

The cross term $4f^2g^2$ is not present in $f^4+4g^4$.

The Sophie Germain rewrite must subtract $(2fg)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"""For every real $t$, $(t+1)^2=t^2+1$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five independent claims: a dropped factor two on mixed products, an elementary square-sum, a cube remainder, a scaled difference of squares, and a numerical cross-term check.",
    ),
    task(
        title="Cubes whose odd-powered terms survive",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Working from the pair $(\alpha,\beta)$, rewriting $(\alpha+\beta)^3-(\alpha-\beta)^3$ as $6\alpha^2\beta+2\beta^3$.""",
                True,
                r"""Set $A=m+n$ and $B=m-n$. Then $A-B=2n$ and

Factor:

$$A^3-B^3=(A-B)(A^2+AB+B^2)$$

Expand:

$$A^2+AB+B^2=3m^2+n^2$$

The difference is $2n(3m^2+n^2)$.""",
            ),
            (
                r"""For every real quadruple $(p,q,r,s)$, $(p^2+q^2)(r^2+s^2)=(pr-qs)^2+(ps+qr)^2$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(p^2+q^2)(r^2+s^2)=(pr-qs)^2+(ps+qr)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
            (
                r"""For every real pair $(u,v)$, $(u+v)^2=u^2+v^2$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $a^{-3}b^2=2$, then $\dfrac{a^8b^3}{a^2b^7}+3ab\cdot\dfrac{a^{-6}b^5}{a^7b^{-2}}=48.25$ for $a,b\neq 0$.""",
                True,
                r"""The given relation $a^{-3}b^2=2$ does not determine the claim by inspection alone. Set $R=a^{-3}b^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{a^8b^3}{a^2b^7}=a^6b^{-4}=R^{-2}$$

Powers of $a$ and $b$ collapse to a negative power of $R$.

Second summand:

$$3ab\cdot\frac{a^{-6}b^5}{a^7b^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution.""",
            ),
            (
                r"""The inequality $m^2-mn\ge mn-n^2$ holds for every real pair $(m,n)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five mixed claims: a cube difference, a Newton cube-sum, a halved cross term, a biquadratic near-miss, and a completed-square leftover.",
    ),
    task(
        title="Elementary cubes evaluated from two symmetric values",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real $r$, $(r+1)^2=r^2+1$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real $c$, $(6c-1)^2=36c^2-12c+1$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $m^{-3}n^2=2$, then $\dfrac{m^8n^3}{m^2n^7}+3mn\cdot\dfrac{m^{-6}n^5}{m^7n^{-2}}=48$ for $m,n\neq 0$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(h,k)$, $(h+k)^2-(h-k)^2=4hk$.""",
                True,
                r"""Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.""",
            ),
            (
                r"""For every real quadruple $(m,n,h,k)$, $(m^2+n^2)(h^2+k^2)=(mh-nk)^2+(mk+nh)^2$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(m^2+n^2)(h^2+k^2)=(mh-nk)^2+(mk+nh)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
        ],
        overview=r"Five evaluations: a dropped Newton correction, a fourth-power sum, a sum-of-cubes sign error, a mirror-quadratic product, and a mixed-sign square.",
    ),
    task(
        title="A hidden square inside a biquadratic difference",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""The sum of the fourth power of $f$ and four times the fourth power of $g$ factors as the product of $f^2-2fg+2g^2$ and $f^2+2fg+2g^2$ for every real pair $(f,g)$.""",
                True,
                r"""Adding and subtracting $4f^2g^2$ produces a difference of squares:

$$f^4+4g^4 = (f^2+2g^2)^2-(2fg)^2$$

$$= (f^2-2fg+2g^2)(f^2+2fg+2g^2)$$""",
            ),
            (
                r"""Whenever $\lambda+\mu=7$ and $\lambda\mu=10$, completing the evaluation of $(\lambda-\mu)^2$ yields $9$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $u^2+uv\ge uv+v^2$ holds for every real pair $(u,v)$.""",
                False,
                r"""The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$u^2+uv-(uv+v^2)=u^2-v^2=(u-v)(u+v)$$

The factorisation $(u-v)(u+v)$ is not a square, so the sign can change.

For $u=0$, $v=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.""",
            ),
            (
                r"""The coefficient of $xyz$ in $(x+y+z)^3$ equals $3$.""",
                False,
                r"""Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(U+V)^2$$

Cross term:

$$2\cdot(U)\cdot(V)$$

The collected coefficient contradicts $xyz$.""",
            ),
            (
                r"""The sum of the fourth power of $c$ and four times the fourth power of $d$ equals the square of $c^2+2d^2$ for every real pair $(c,d)$.""",
                False,
                r"""The wording stops at a single square. Expand $c^2+2d^2$ and compare with $c^4+4d^4$ before accepting the verbal equality.

Expand the printed square:

$$(c^2+2d^2)^2=c^4+4c^2d^2+4d^4$$

The cross term $4c^2d^2$ is not present in $c^4+4d^4$.

The Sophie Germain rewrite must subtract $(2cd)^2$ after adding it — the wording stops one step too early.""",
            ),
        ],
        overview=r"Five factoring and coefficient claims: a biquadratic split, an elementary gap, a four-term grouping, a cubed-trinomial count, and an incomplete square.",
    ),
    task(
        title="Reciprocal squares built from a linear sum",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""The sum of the fourth power of $r$ and four times the fourth power of $s$ factors as the product of $r^2-2rs+2s^2$ and $r^2+2rs+2s^2$ for every real pair $(r,s)$.""",
                True,
                r"""The verbal claim is a Sophie Germain factorisation in $r$ and $s$. Insert $\pm 4r^2s^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$r^4+4s^4=(r^2+2s^2)^2-(2rs)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(r^2-2rs+2s^2)(r^2+2rs+2s^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.""",
            ),
            (
                r"""For every real pair $(c,d)$, $(c+d)^2=c^2+d^2$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""After grouping $b+c$, treats $x^2-(b+c)^2$ as identical to $x^2-b^2-c^2$.""",
                False,
                r"""Difference of squares in $x$ and $s$:

$$(x-s)(x+s) = x^2-s^2$$

$$= x^2-(y+z)^2$$

The grouping is an identity in the three letters.""",
            ),
            (
                r"""The sum of the fourth power of $c$ and four times the fourth power of $d$ factors as the product of $c^2-2cd+2d^2$ and $c^2+2cd+2d^2$ for every real pair $(c,d)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Distributing $(2x-3y)^2$ equals $4x^2-6xy+9y^2$.""",
                False,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
        ],
        overview=r"Five independent evaluations: a reciprocal square, a reciprocal cube with a dropped correction, a mixed-sign coefficient, a biquadratic factorisation, and a halved cross term.",
    ),
    task(
        title="Four terms that group into a difference of squares",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real quadruple $(f,g,t,x)$, $(f^2+g^2)(t^2+x^2)=(ft+gt)^2+(fx-gx)^2$.""",
                False,
                r"""The right-hand squares use a wrong letter pairing inside each square. Compare with the standard Brahmagupta cross terms.

Correct identity:

$$(f^2+g^2)(t^2+x^2)=(ft-gx)^2+(fx+gt)^2$$

This is the standard sum-of-squares product factorisation.

Printed pairing:

$$(ft+gt)^2+(fx-gx)^2$$

Factoring shows these squares are not the same polynomials.

Expanding both readings separates them; the error appears only in the cross pairing.""",
            ),
            (
                r"""For every real $p$, $(7p-1)^2=49p^2-14p+1$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $u+v=s$ and $uv=p$, then $u^2+v^2=s^2-2p$ for every real pair with sum $s$ and product $p$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $a^{-3}v^2=2$, then $\dfrac{a^8v^3}{a^2v^7}+3uv\cdot\dfrac{a^{-6}v^5}{a^7v^{-2}}=48.25$ for $a,v\neq 0$.""",
                True,
                r"""The given relation $a^{-3}v^2=2$ does not determine the claim by inspection alone. Set $R=a^{-3}v^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{a^8v^3}{a^2v^7}=a^6v^{-4}=R^{-2}$$

Powers of $a$ and $v$ collapse to a negative power of $R$.

Second summand:

$$3uv\cdot\frac{a^{-6}v^5}{a^7v^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution.""",
            ),
            (
                r"""For every real $x$, $(x+1)^2=x^2+1$.""",
                False,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
        ],
        overview=r"Five grouping and coefficient claims: a difference of squares, a vanishing-sum cube check, a fourth-power middle, a leading-two leftover, and a mixed-term coefficient.",
    ),
    task(
        title="Half the sum of three squared gaps",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""If $r+s=s$ and $rs=p$, then $r^2+s^2=s^2-2p$ for every real pair with sum $s$ and product $p$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real quadruple $(u,v,w,z)$, $(u^2+v^2)(w^2+z^2)=(uw+vw)^2+(uz-vz)^2$.""",
                False,
                r"""The right-hand squares use a wrong letter pairing inside each square. Compare with the standard Brahmagupta cross terms.

Correct identity:

$$(u^2+v^2)(w^2+z^2)=(uw-vz)^2+(uz+vw)^2$$

This is the standard sum-of-squares product factorisation.

Printed pairing:

$$(uw+vw)^2+(uz-vz)^2$$

Factoring shows these squares are not the same polynomials.

Expanding both readings separates them; the error appears only in the cross pairing.""",
            ),
            (
                r"""Factoring $x^3-1$ as $(x-1)(x^2-x+1)$.""",
                False,
                r"""Difference of cubes leaves three terms in the quotient:

Factor:

$$\frac{j^3-1331}{j-11}=j^2+11j+121$$

At the test point:

$$j = 0 \Rightarrow 121 \text{ on both sides, but } j$$

$$= 1 \Rightarrow 133 \neq 122$$""",
            ),
            (
                r"""The coefficient of $x^2 y$ in $(x+y)^3$ equals $1$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The sum of the fourth power of $p$ and four times the fourth power of $q$ factors as the product of $p^2-2pq+2q^2$ and $p^2+2pq+2q^2$ for every real pair $(p,q)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five identity checks: a half-sum of squared gaps, an elementary difference square, a cubes-factor sign, a binomial coefficient, and a truncated Brahmagupta product.",
    ),
    task(
        title="A cyclic product of three linear binomials",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real $a$, $(2a-1)^2=4a^2-4a+1$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""If $c^{-3}b^2=2$, then $\dfrac{c^8b^3}{c^2b^7}+3ab\cdot\dfrac{c^{-6}b^5}{c^7b^{-2}}=48.25$ for $c,b\neq 0$.""",
                True,
                r"""The given relation $c^{-3}b^2=2$ does not determine the claim by inspection alone. Set $R=c^{-3}b^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{c^8b^3}{c^2b^7}=c^6b^{-4}=R^{-2}$$

Powers of $c$ and $b$ collapse to c negative power of $R$.

Second summand:

$$3ab\cdot\frac{c^{-6}b^5}{c^7b^{-2}}=3R^{4}$$

The mixed monomial piece also becomes c pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution.""",
            ),
            (
                r"""The inequality $p^2+pq\ge pq+q^2$ holds for every real pair $(p,q)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $s=x+y+z=4$ and $p=xy+yz+zx=1$, then $x^2+y^2+z^2=15$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real quadruple $(p,q,r,s)$, $(p^2+q^2)(r^2+s^2)=(pr+qr)^2+(ps-qs)^2$.""",
                False,
                r"""The right-hand squares use a wrong letter pairing inside each square. Compare with the standard Brahmagupta cross terms.

Correct identity:

$$(p^2+q^2)(r^2+s^2)=(pr-qs)^2+(ps+qr)^2$$

This is the standard sum-of-squares product factorisation.

Printed pairing:

$$(pr+qr)^2+(ps-qs)^2$$

Factoring shows these squares are not the same polynomials.

Expanding both readings separates them; the error appears only in the cross pairing.""",
            ),
        ],
        overview=r"Five mixed claims: a cyclic-product remainder, a Newton cube-sum, a difference of cubes, a three-letter square-sum, and a trinomial-square leftover.",
    ),
    task(
        title="Mixed signs inside a three-letter square",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""If $u^{-3}v^2=2$, then $\dfrac{u^8v^3}{u^2v^7}+3uv\cdot\dfrac{u^{-6}v^5}{u^7v^{-2}}=48.25$ for $u,v\neq 0$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real $c$, $(c+1)^2=c^2+1$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real quadruple $(p,q,a,s)$, $(p^2+q^2)(a^2+s^2)=(pr-qs)^2+(ps+qr)^2$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(p^2+q^2)(a^2+s^2)=(pr-qs)^2+(ps+qr)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
            (
                r"""Someone equates $(x^2-y^2)^2$ with $x^4-y^4$.""",
                False,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""For every real pair $(t,w)$, $(t+w)^2=t^2+w^2$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five expansion checks: a mixed-sign coefficient, an undoubled elementary product, a completed square, a biquadratic confusion, and a binomial remainder.",
    ),
    task(
        title="Newton sums built from a pair of elementary data",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""A mis-paired Brahmagupta product: for every real quadruple $(m,n,h,k)$, $(m^2+n^2)(h^2+k^2)=(mh+nh)^2+(mk-nk)^2$.""",
                False,
                r"""The right-hand squares use a wrong letter pairing inside each square. Compare with the standard Brahmagupta cross terms.

Correct identity:

$$(m^2+n^2)(h^2+k^2)=(mh-nk)^2+(mk+nh)^2$$

This is the standard sum-of-squares product factorisation.

Printed pairing:

$$(mh+nh)^2+(mk-nk)^2$$

Factoring shows these squares are not the same polynomials.

Expanding both readings separates them; the error appears only in the cross pairing.""",
            ),
            (
                r"""Dropping the middle term: $(p+q)^2=p^2+q^2$ is false for real $(p,q)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Another wrong cross pairing: for every real quadruple $(a,b,c,d)$, $(a^2+b^2)(c^2+d^2)=(ac+bc)^2+(ad-bd)^2$.""",
                False,
                r"""The right-hand squares use a wrong letter pairing inside each square. Compare with the standard Brahmagupta cross terms.

Correct identity:

$$(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$$

This is the standard sum-of-squares product factorisation.

Printed pairing:

$$(ac+bc)^2+(ad-bd)^2$$

Factoring shows these squares are not the same polynomials.

Expanding both readings separates them; the error appears only in the cross pairing.""",
            ),
            (
                r"""If $c^{-3}d^2=2$, then $\dfrac{c^8d^3}{c^2d^7}+3cd\cdot\dfrac{c^{-6}d^5}{c^7d^{-2}}=48.25$ for $c,d\neq 0$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Again omitting $2pq$: $(x+y)^2=x^2+y^2$ is false for real $(x,y)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five power-sum and factoring claims: a fourth-power Newton evaluation, an undoubled square-sum, a linear coefficient, a grouping factorisation, and a degree mismatch.",
    ),
    task(
        title="A square of a difference of two squares",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Expanding $(x^2-y^2)^2$ produces $x^4-2x^2 y^2+y^4$ identically.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The sum of the fourth power of $r$ and four times the fourth power of $s$ equals the square of $r^2+2s^2$ for every real pair $(r,s)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The identity $(m+n)^2-(m-n)^2=4mn$ is used to report that $mn=6$ forces the left-hand side to equal $24$, independently of how the mass is split.""",
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
                r"""The inequality $a^2-rs\ge rs-s^2$ holds for every real pair $(a,s)$.""",
                True,
                r"""The inequality compares two quadratic-looking sides in $a$ and $s$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$a^2-rs-(rs-s^2)=a^2-2rs+s^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(a-s)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line.""",
            ),
            (
                r"""Rewriting $x^2-10x+21$ as $(x-5)^2$ with no leftover.""",
                False,
                r"""A difference of squares factors as $(x-3.1622776601683795)(x+3.1622776601683795)$, not as a square of a difference $(x-3.1622776601683795)^2$.""",
            ),
        ],
        overview=r"Five rewrite checks: a squared difference of squares, an undoubled elementary product, a polarisation consequence, a mixed-term coefficient, and a completed-square leftover.",
    ),
    task(
        title="Four letters and the six doubled pairwise products",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Collecting the mixed term $ab$ in $(a+b+c+d)^2$, the coefficient $2$ is recorded.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $c^{-3}b^2=2$, then $\dfrac{c^8b^3}{c^2b^7}+3ab\cdot\dfrac{c^{-6}b^5}{c^7b^{-2}}=48.25$ for $c,b\neq 0$, under the standing domain label $D_{1}$.""",
                True,
                r"""The given relation $c^{-3}b^2=2$ does not determine the claim by inspection alone. Set $R=c^{-3}b^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{c^8b^3}{c^2b^7}=c^6b^{-4}=R^{-2}$$

Powers of $c$ and $b$ collapse to c negative power of $R$.

Second summand:

$$3ab\cdot\frac{c^{-6}b^5}{c^7b^{-2}}=3R^{4}$$

The mixed monomial piece also becomes c pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution.""",
            ),
            (
                r"""Sophie Germain’s completing step writes $t^4+4=(t^2+2)^2-(2t)^2$ before factoring.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""For every real quadruple $(a,v,w,z)$, $(a^2+v^2)(w^2+z^2)=(uw-vz)^2+(uz+vw)^2$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+v^2)(w^2+z^2)=(uw-vz)^2+(uz+vw)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $b$ factors as the product of $a^2-2ab+2b^2$ and $a^2+2ab+2b^2$ for every real pair $(a,b)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five coefficient and rewrite claims: a four-letter mixed product, an elementary gap, a Sophie Germain completing step, a reciprocal square, and a binomial remainder.",
    ),
    task(
        title="Mirror quadratics whose odd powers cancel",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Rewriting $x^4+x^2+1$ as $(x^2+1)^2-x^2$ exhibits a difference of squares in $x^2+1$ and $x$.""",
                True,
                r"""A difference of squares is not a square of a difference:

$$w^2-16=(w-4)(w+4)$$

$$(w-4)^2=w^2-8w+4^2$$

At the test point $w=0$ the two polynomials already disagree.""",
            ),
            (
                r"""Given $k+\ell=7$ and $k\ell=12$, a report sets $k^2+\ell^2=37$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The sum of the fourth power of $h$ and four times the fourth power of $k$ factors as the product of $h^2-2hk+2k^2$ and $h^2+2hk+2k^2$ for every real pair $(h,k)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(h,k)$, $(h+k)^2=h^2+k^2$.""",
                False,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""If $a^{-3}n^2=2$, then $\dfrac{a^8n^3}{a^2n^7}+3mn\cdot\dfrac{a^{-6}n^5}{a^7n^{-2}}=48.25$ for $a,n\neq 0$.""",
                True,
                r"""The given relation $a^{-3}n^2=2$ does not determine the claim by inspection alone. Set $R=a^{-3}n^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{a^8n^3}{a^2n^7}=a^6n^{-4}=R^{-2}$$

Powers of $a$ and $n$ collapse to a negative power of $R$.

Second summand:

$$3mn\cdot\frac{a^{-6}n^5}{a^7n^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution.""",
            ),
        ],
        overview=r"Five rewrite checks: a mirror-quadratic identity, an undoubled elementary product, a binomial remainder, a fourth-power near-miss, and a vanishing-sum trap.",
    ),
    task(
        title="Three cubes after a vanishing linear sum",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The inequality $p^2-pq\ge pq-q^2$ holds for every real pair $(p,q)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real $p$, $(5p-1)^2=25p^2-10p+1$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $s$ equals the square of $a^2+2s^2$ for every real pair $(a,s)$.""",
                False,
                r"""The wording stops at a single square. Expand $a^2+2s^2$ and compare with $a^4+4s^4$ before accepting the verbal equality.

Expand the printed square:

$$(a^2+2s^2)^2=a^4+4a^2s^2+4s^4$$

The cross term $4a^2s^2$ is not present in $a^4+4s^4$.

The Sophie Germain rewrite must subtract $(2rs)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"""For every real pair $(m,n)$, $(m+n)^2=m^2+n^2$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $a^2+rs\ge rs+s^2$ holds for every real pair $(a,s)$.""",
                False,
                r"""The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$a^2+rs-(rs+s^2)=a^2-s^2=(a-s)(a+s)$$

The factorisation $(a-s)(a+s)$ is not a square, so the sign can change.

For $a=0$, $s=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.""",
            ),
        ],
        overview=r"Five independent hard checks: a vanishing-sum cube, Sophie Germain, a Newton cube-sum, a truncated Brahmagupta product, and a leading-two leftover.",
    ),
    task(
        title="Brahmagupta’s product against a cubed trinomial",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real quadruple $(f,g,t,a)$, $(f^2+g^2)(t^2+a^2)=(ft-gx)^2+(fx+gt)^2$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(f^2+g^2)(t^2+a^2)=(ft-gx)^2+(fx+gt)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
            (
                r"""For every real $c$, $(3c-1)^2=9c^2-6c+1$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""If $f+g=s$ and $fg=p$, then $f^2+g^2=s^2-2p$ for every real pair with sum $s$ and product $p$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $h^2-hk\ge hk-k^2$ holds for every real pair $(h,k)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real $t$, $(t+1)^2=t^2+1$ (variant 2).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five coefficient and product claims: a cubed-trinomial count, a Newton cube-sum, a Brahmagupta evaluation, an incomplete square, and a fourth-power middle.",
    ),
    task(
        title="Brahmagupta’s product of two sums of squares",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $n$ factors as the product of $a^2-2mn+2n^2$ and $a^2+2mn+2n^2$ for every real pair $(a,n)$.""",
                True,
                r"""The verbal claim is a Sophie Germain factorisation in $a$ and $n$. Insert $\pm 4a^2n^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$a^4+4n^4=(a^2+2n^2)^2-(2mn)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(a^2-2mn+2n^2)(a^2+2mn+2n^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.""",
            ),
            (
                r"""If $m^{-3}n^2=2$, then $\dfrac{m^8n^3}{m^2n^7}+3mn\cdot\dfrac{m^{-6}n^5}{m^7n^{-2}}=48.25$ for $m,n\neq 0$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real $u$, $(2u-1)^2=4u^2-4u+1$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real quadruple $(a,v,w,z)$, $(a^2+v^2)(w^2+z^2)=(uw-vz)^2+(uz+vw)^2$, under the standing domain label $D_{1}$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+v^2)(w^2+z^2)=(uw-vz)^2+(uz+vw)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^2=x^2+y^2$ (variant 2).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five hard identities: a Brahmagupta product, a vanishing first factor of the three-cube identity, a reciprocal cube, a missing half on squared gaps, and a scaled fourth-power middle.",
    ),
    task(
        title="Completing the square under a leading coefficient two",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Completing the square rewrites $2x^2-8x+10$ as $2(x-2)^2+2$ for every real $x$.""",
                True,
                r"""Half of the linear coefficient $-8$ is $-4$, and $(-4)^2=16$.

Complete:

$$x^2-8x+10 = (x^2-8x+16)-6$$

$$= (x-4)^2-6$$

The leftover constant is $-6$, not zero.""",
            ),
            (
                r"""The inequality $a^2-xy\ge xy-y^2$ holds for every real pair $(a,y)$.""",
                True,
                r"""The inequality compares two quadratic-looking sides in $a$ and $y$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$a^2-xy-(xy-y^2)=a^2-2xy+y^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(a-y)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line.""",
            ),
            (
                r"""For every real pair $(f,g)$, $(f+g)^2-(f-g)^2=4fg$.""",
                True,
                r"""Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.""",
            ),
            (
                r"""For every real $h$, $(h+1)^2=h^2+1$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $a^{-3}b^2=2$, then $\dfrac{a^8b^3}{a^2b^7}+3ab\cdot\dfrac{a^{-6}b^5}{a^7b^{-2}}=48$ for $a,b\neq 0$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five hard rewrites: a leading-two completed square, a scaled fourth-power coefficient, a three-letter square-sum, a fifth-power near-miss, and a degree mismatch.",
    ),
    task(
        title="Factoring a biquadratic after a completed square",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Adding and subtracting $4x^2 y^2$ turns $x^4+4y^4$ into $(x^2+2y^2)^2-(2xy)^2$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real quadruple $(a,b,e,d)$, $(a^2+b^2)(e^2+d^2)=(ac-bd)^2+(ad+bc)^2$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+b^2)(e^2+d^2)=(ac-bd)^2+(ad+bc)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
            (
                r"""The sum of the fourth power of $u$ and four times the fourth power of $v$ equals the square of $u^2+2v^2$ for every real pair $(u,v)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real $m$, $(m+1)^2=m^2+1$ (variant 1).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $a^2+pq\ge pq+q^2$ holds for every real pair $(a,q)$.""",
                False,
                r"""The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$a^2+pq-(pq+q^2)=a^2-q^2=(a-q)(a+q)$$

The factorisation $(a-q)(a+q)$ is not a square, so the sign can change.

For $a=0$, $q=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.""",
            ),
        ],
        overview=r"Five hard checks: Sophie Germain’s completing step, a three-cube numerical test, a polarisation square, a degree mismatch, and a cubed-trinomial count.",
    ),
    task(
        title="A cubic leftover after a cubed binomial is subtracted",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The sum of the fourth power of $m$ and four times the fourth power of $n$ factors as the product of $m^2-2mn+2n^2$ and $m^2+2mn+2n^2$ for every real pair $(m,n)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""Given $p+q+r=0$ with $p=4$, $q=-1$, sets $r=3$ and concludes $p^3+q^3+r^3=3pqr$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $a^{-3}q^2=2$, then $\dfrac{a^8q^3}{a^2q^7}+3pq\cdot\dfrac{a^{-6}q^5}{a^7q^{-2}}=48.25$ for $a,q\neq 0$.""",
                True,
                r"""The given relation $a^{-3}q^2=2$ does not determine the claim by inspection alone. Set $R=a^{-3}q^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{a^8q^3}{a^2q^7}=a^6q^{-4}=R^{-2}$$

Powers of $a$ and $q$ collapse to a negative power of $R$.

Second summand:

$$3pq\cdot\frac{a^{-6}q^5}{a^7q^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution.""",
            ),
            (
                r"""Someone writes $(x+y)(y+z)(z+x)=(x+y+z)(xy+yz+zx)$, dropping the $-xyz$ correction.""",
                False,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""For every real $t$, $(t+1)^2=t^2+1$ (variant 3).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five leftover checks: a cubed-binomial remainder, a vanishing-sum trap, a grouped difference of squares, a cyclic-product correction, and opposite binomials.",
    ),
    task(
        title="Binomial identities — set 27",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The sum of the fourth power of $c$ and four times the fourth power of $b$ equals the square of $c^2+2b^2$ for every real pair $(c,b)$.""",
                False,
                r"""The wording stops at c single square. Expand $c^2+2b^2$ and compare with $c^4+4b^4$ before accepting the verbal equality.

Expand the printed square:

$$(c^2+2b^2)^2=c^4+4c^2b^2+4b^4$$

The cross term $4c^2b^2$ is not present in $c^4+4b^4$.

The Sophie Germain rewrite must subtract $(2ab)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"""If $p+q=s$ and $pq=p$, then $p^2+q^2=s^2-2p$ for every real pair with sum $s$ and product $p$ (variant 1).""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $a^2+xy\ge xy+y^2$ holds for every real pair $(a,y)$.""",
                False,
                r"""The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$a^2+xy-(xy+y^2)=a^2-y^2=(a-y)(a+y)$$

The factorisation $(a-y)(a+y)$ is not a square, so the sign can change.

For $a=0$, $y=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.""",
            ),
            (
                r"""If $u^{-3}v^2=2$, then $\dfrac{u^8v^3}{u^2v^7}+3uv\cdot\dfrac{u^{-6}v^5}{u^7v^{-2}}=48$ for $u,v\neq 0$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The companion difference $(h+k)^3-(h-k)^3$ is rewritten as $2h(h^2+3k^2)$ as well.""",
                False,
                r"""Set $A=m+n$ and $B=m-n$. Then $A-B=2n$ and

$$A^3-B^3=(A-B)(A^2+AB+B^2)$$

The quadratic factor expands to $3m^2+n^2$, so the difference is $2n(3m^2+n^2)$.""",
            ),
        ],
        overview=r"""Five polarisation and power claims: a numerical $4mn$, a biquadratic factorisation, a reciprocal square, a reciprocal fourth power, and a cube-difference sign pattern.""",
    ),
    task(
        title="Hunting one mixed product in a shifted trinomial square",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real pair $(r,s)$, $(r+s)^2-(r-s)^2=4rs$.""",
                True,
                r"""Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.""",
            ),
            (
                r"""The inequality $u^2-uv\ge uv-v^2$ holds for every real pair $(u,v)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real $f$, $(6f-1)^2=36f^2-12f+1$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $q$ factors as the product of $a^2-2pq+2q^2$ and $a^2+2pq+2q^2$ for every real pair $(a,q)$.""",
                True,
                r"""The verbal claim is a Sophie Germain factorisation in $a$ and $q$. Insert $\pm 4a^2q^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$a^4+4q^4=(a^2+2q^2)^2-(2pq)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(a^2-2pq+2q^2)(a^2+2pq+2q^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.""",
            ),
            (
                r"""If $p+q+r=3$ and $pq+qr+rp=2$, then $p^2+q^2+r^2=7$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five coefficient and elementary-sum claims: a trinomial mixed term, a vanishing-sum trap, a three-cube specialisation, a dropped factor two, and a three-letter square-sum.",
    ),
    task(
        title="A biquadratic that is already a completed square",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Recognising $x^4+2x^2 y^2+y^4$ as $(x^2+y^2)^2$ is valid for every real pair.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real quadruple $(a,b,e,d)$, $(a^2+b^2)(e^2+d^2)=(ac-bd)^2+(ad+bc)^2$, under the standing domain label $D_{1}$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+b^2)(e^2+d^2)=(ac-bd)^2+(ad+bc)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
            (
                r"""Grouping $x^3+3x^2-x-3$ as $x^2(x+3)-(x+3)$ factors as $(x^2-1)(x+3)=(x-1)(x+1)(x+3)$.""",
                True,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""If $a^{-3}v^2=2$, then $\dfrac{a^8v^3}{a^2v^7}+3uv\cdot\dfrac{a^{-6}v^5}{a^7v^{-2}}=48$ for $a,v\neq 0$.""",
                False,
                r"""The given relation $a^{-3}v^2=2$ does not determine the claim by inspection alone. Set $R=a^{-3}v^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{a^8v^3}{a^2v^7}=a^6v^{-4}=R^{-2}$$

Powers of $a$ and $v$ collapse to a negative power of $R$.

Second summand:

$$3uv\cdot\frac{a^{-6}v^5}{a^7v^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The small reciprocal term survives alongside the larger power term.

Dropping the summand $R^{-2}=\tfrac{1}{4}$ leaves $48$, which is not the value of the original expression.""",
            ),
            (
                r"""The inequality $a^2+ab\ge ab+b^2$ holds for every real pair $(a,b)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
        ],
        overview=r"Five hard recognitions: a biquadratic square, a Newton cube-sum, a grouping factorisation, a degree mismatch, and a squared Sophie Germain factor.",
    ),
    task(
        title="Walking around three squared differences",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real $r$, $(7r-1)^2=49r^2-14r+1$.""",
                True,
                r"Expand or factor with the named elementary identity; compare the result to the printed claim.",
            ),
            (
                r"""prints $x^4+4=(x^2+2x+2)^2$ for every real $x$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""The inequality $m^2+mn\ge mn+n^2$ holds for every real pair $(m,n)$.""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real pair $(h,k)$, $(h+k)^2=h^2+k^2$ (variant 2).""",
                False,
                r"""Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$""",
            ),
            (
                r"""For every real quadruple $(m,n,h,a)$, $(m^2+n^2)(h^2+a^2)=(mh-nk)^2+(mk+nh)^2$.""",
                True,
                r"""The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(m^2+n^2)(h^2+a^2)=(mh-nk)^2+(mk+nh)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.""",
            ),
        ],
        overview=r"Five closing checks: a half-sum of squared gaps, a squared Sophie Germain factor, a cube-sum identity, a cube-difference trap, and a vanishing-sum slip.",
    ),
]

