from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="Leftovers a clerk records after expanding",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""The inequality $a^2-ab\ge ab-b^2$ holds for every real pair $(a,b)$.""",
                True,
                r"""The inequality compares two quadratic-looking sides in $a$ and $b$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$a^2-ab-(ab-b^2)=a^2-2ab+b^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(a-b)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line.""",
            ),
            (
                r"After collecting only the $xy$ term in $(2x-y+3)^2$, a marker records its coefficient as $+4$. The remaining terms are not needed to judge the claim.",
                False,
                r"""In a square of a sum, each mixed product is doubled. The pair $2x$ and $-y$ contributes

$$
2\cdot(2x)\cdot(-y)=-4xy.
$$

The collected coefficient is $-4$, not $+4$.""",
            ),
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
                r"Given $a+b+c=0$ with $a=4$ and $b=-1$, a note sets $c=3$ and concludes $a^3+b^3+c^3=3abc$ without expanding.",
                False,
                r"""The vanishing-sum rule needs $c=-(a+b)=-3$, not $c=3$. With the printed values one has $a+b+c=6\neq 0$, and

$$
4^3+(-1)^3+3^3=64-1+27=90,\qquad 3\cdot 4\cdot(-1)\cdot 3=-36.
$$

The two sides disagree.""",
            ),
            (
                r"Subtracting $(r-s)^2$ from $(r+s)^2$ is claimed to leave $4rs$ on every real pair $(r,s)$.",
                True,
                r"""Expand the two binomial squares:

$$
(r+s)^2=r^2+2rs+s^2,\qquad (r-s)^2=r^2-2rs+s^2.
$$

Their difference is $4rs$, matching the claim.""",
            ),
        ],
        overview="Five independent leftovers: an elementary square-sum, a mixed-term coefficient, a cube difference, a vanishing-sum trap, and a polarisation remainder.",
    ),
    task(
        title="Near-miss remainders after a square is subtracted",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"A student expands $(3t-1)^2$, subtracts $9t^2+1$, and claims the difference is identically zero.",
                False,
                r"""The binomial square still carries a cross term:

$$
(3t-1)^2=9t^2-6t+1.
$$

Subtracting $9t^2+1$ leaves $-6t$, not the zero polynomial.""",
            ),
            (
                r"With the elementary data $u+v=5$ and $uv=6$, expanding $(u+v)^2-2uv$ is said to leave $u^2+v^2=13$.",
                True,
                r"""The same square-sum identity used on a new pair:

$$
(u+v)^2-2uv=5^2-2\cdot 6=25-12=13.
$$

The reported value is correct.""",
            ),
            (
                r"Factoring $w^2-16$ as $(w-4)^2$ is presented as valid on the whole real line.",
                False,
                r"""A difference of squares is not a square of a difference:

$$
w^2-16=(w-4)(w+4),\qquad (w-4)^2=w^2-8w+16.
$$

The two polynomials already disagree at $w=0$.""",
            ),
            (
                r"""The inequality $r^2-rs\ge rs-s^2$ holds for every real pair $(r,s)$.""",
                True,
                r"""The inequality compares two quadratic-looking sides in $r$ and $s$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$r^2-rs-(rs-s^2)=r^2-2rs+s^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(r-s)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line.""",
            ),
            (
                r"An examiner lists $(2h+5)^2=4h^2+10h+25$ as a standard expansion.",
                False,
                r"""The cross term in $(U+V)^2$ is $2UV$, not $UV$:

$$
2\cdot(2h)\cdot 5=20h.
$$

The listed middle coefficient $10$ is the undoubled product $2h\cdot 5$.""",
            ),
        ],
        overview="Five separate near-misses: a dropped linear cross term, an elementary square-sum, a squared difference, a completed-square leftover, and a halved middle term.",
    ),
    task(
        title="Doubled products a marker forgets to double",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Hunting the mixed product in $(4k-3)^2$, a marker records the coefficient of $k$ as $-24$.",
                True,
                r"""The cross term is $2\cdot(4k)\cdot(-3)$:

$$
(4k-3)^2=16k^2-24k+9.
$$

The collected coefficient of $k$ is $-24$.""",
            ),
            (
                r"""If $c^{-3}d^2=2$, then $\dfrac{c^8d^3}{c^2d^7}+3cd\cdot\dfrac{c^{-6}d^5}{c^7d^{-2}}=48$ for $c,d\neq 0$.""",
                False,
                r"""The given relation $c^{-3}d^2=2$ does not determine the claim by inspection alone. Set $R=c^{-3}d^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{c^8d^3}{c^2d^7}=c^6d^{-4}=R^{-2}$$

Powers of $c$ and $d$ collapse to a negative power of $R$.

Second summand:

$$3cd\cdot\frac{c^{-6}d^5}{c^7d^{-2}}=3R^{4}$$

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
                r"A student expands $(f+g)^2$, subtracts $f^2+g^2$, and claims the remainder is identically zero.",
                False,
                r"""The binomial square is $f^2+2fg+g^2$. Subtracting the two outer squares leaves
$$2fg,$$
which is not the zero polynomial.""",
            ),
            (
                r"""The product of the sum of the squares of $a$ and $b$ with the sum of the squares of $c$ and $d$ equals the sum of the square of $a\cdot c-b\cdot d$ and the square of $a\cdot d+b\cdot c$, for every real quadruple.""",
                True,
                r"""The claim describes a product of two sums of squares in four letters. Translate the wording, then verify with Brahmagupta's identity.

Brahmagupta identity:

$$(a^2+b^2)(c^2+d^2)=(a\cdot c-b\cdot d)^2+(a\cdot d+b\cdot c)^2$$

Cross pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

The symbolic translation matches the printed verbal pairing on both squares.""",
            ),
            (
                r"Matching $n^2+6n+8$ with $(n+3)^2$ is accepted as an identity.",
                False,
                r"""A monic perfect square with middle term $6n$ would need constant $3^2=9$:

$$
(n+3)^2=n^2+6n+9.
$$

The given trinomial is one smaller, so it is not a square of a linear binomial.""",
            ),
        ],
        overview="Five coefficient and comparison checks: a doubled middle, a square-nonnegativity rewrite, a dropped cross term, a grouped difference of squares, and a near-miss perfect square.",
    ),
    task(
        title="Perfect squares that miss the constant by one",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Reading $9y^2-12y+4$ as $(3y-2)^2$ is valid for every real $y$.",
                True,
                r"""Expand the proposed square:

$$
(3y-2)^2=9y^2-12y+4.
$$

Every coefficient matches, including the minus on the middle term.""",
            ),
            (
                r"Treating $x^2+9$ as $(x+3)^2$ is recorded as an identity, the middle term being declared unnecessary.",
                False,
                r"""$$
(x+3)^2=x^2+6x+9
$$

Equating that with $x^2+9$ discards $6x$, which is the error $(U+V)^2=U^2+V^2$.""",
            ),
            (
                r"With $p+q=6$ and $pq=8$, a booklet reports $p^2+q^2=28$.",
                False,
                r"""The square-sum identity still doubles the product:

$$
(p+q)^2-2pq=36-16=20.
$$

The booklet computed $36-8=28$, dropping the factor $2$.""",
            ),
            (
                r"Splitting $z^2-25$ as $(z-5)(z+5)$ holds for every real $z$.",
                True,
                r"""Difference of squares:

$$
z^2-25=(z-5)(z+5).
$$

Distributing the right-hand side recovers $z^2-25$ with no leftover.""",
            ),
            (
                r"""If $p^{-3}q^2=2$, then $\dfrac{p^8q^3}{p^2q^7}+3pq\cdot\dfrac{p^{-6}q^5}{p^7q^{-2}}=48.25$ for $p,q\neq 0$.""",
                True,
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

The printed value matches the fully reduced substitution.""",
            ),
        ],
        overview="Five recognition checks: a genuine perfect square, a missing middle, an undoubled elementary product, a difference of squares, and a subtracted-square remainder.",
    ),
    task(
        title="Grouping a linear sum inside a square difference",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Grouping $y+z$ first, expanding $x^2-(y+z)^2$ is reported to leave $x^2-y^2-z^2-2yz$ on every real triple.",
                True,
                r"""Expand the inner square and subtract:

$$
(y+z)^2=y^2+2yz+z^2,\qquad x^2-(y+z)^2=x^2-y^2-z^2-2yz.
$$

The mixed term $-2yz$ must be kept.""",
            ),
            (
                r"Whenever $c+d=11$ and $cd=24$, the value of $(c-d)^2$ is reported as $25$.",
                True,
                r"""The companion identity $(c-d)^2=(c+d)^2-4cd$ yields

$$
11^2-4\cdot 24=121-96=25.
$$

The reported value matches.""",
            ),
            (
                r"""The sum of the fourth power of $p$ and four times the fourth power of $q$ equals the square of $p^2+2q^2$ for every real pair $(p,q)$.""",
                False,
                r"""The wording stops at a single square. Expand $p^2+2q^2$ and compare with $p^4+4q^4$ before accepting the verbal equality.

Expand the printed square:

$$(p^2+2q^2)^2=p^4+4p^2q^2+4q^4$$

The cross term $4p^2q^2$ is not present in $p^4+4q^4$.

The Sophie Germain rewrite must subtract $(2pq)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"A note concludes that $(u-v)^3=u^3-v^3$ for every real pair, the middle terms being cancelled by habit.",
                False,
                r"""The cube of a difference still carries the mixed terms

$$
(u-v)^3=u^3-3u^2v+3uv^2-v^3=u^3-v^3-3uv(u-v).
$$

Those terms vanish only when $uv(u-v)=0$, not identically.""",
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
        overview="Five rewrite checks: a grouped difference of squares, an elementary gap square, a binomial remainder, a cube with dropped mixed terms, and an off-by-one perfect square.",
    ),
    task(
        title="Signs that flip only the cross term",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""The product of the sum of the squares of $u$ and $v$ with the sum of the squares of $w$ and $z$ equals the sum of the square of $u\cdot w-v\cdot z$ and the square of $u\cdot z+v\cdot w$, for every real quadruple.""",
                True,
                r"""The claim describes a product of two sums of squares in four letters. Translate the wording, then verify with Brahmagupta's identity.

Brahmagupta identity:

$$(u^2+v^2)(w^2+z^2)=(u\cdot w-v\cdot z)^2+(u\cdot z+v\cdot w)^2$$

Cross pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

The symbolic translation matches the printed verbal pairing on both squares.""",
            ),
            (
                r"Factoring $16-t^2$ as $(4-t)(4+t)$ is accepted for every real $t$.",
                True,
                r"""Difference of squares with first term $4$:

$$
16-t^2=(4-t)(4+t).
$$

The order of factors does not matter.""",
            ),
            (
                r"Given $r+s=0$, a student sets $r=5$, $s=5$ and concludes $r^2+s^2=0$.",
                False,
                r"""The hypothesis $r+s=0$ forces $s=-r=-5$, not $s=5$. With the printed pair
$$r+s=10\neq 0,\qquad r^2+s^2=50\neq 0.$$
Even under a genuine vanishing sum, $r^2+s^2=2r^2$ vanishes only at the origin.""",
            ),
            (
                r"Completing the square, $x^2+6x+5$ is rewritten as $(x+3)^2$ with no leftover constant.",
                False,
                r"""Half of $6$ is $3$, and $3^2=9$:

$$
x^2+6x+5=(x+3)^2-4.
$$

Omitting the $-4$ identifies the quadratic with a different polynomial.""",
            ),
            (
                r"Collecting the $xy$ term in $(x+2y)^2$, the recorded coefficient $+4$ is accepted.",
                True,
                r"""The mixed product is

$$
2\cdot x\cdot(2y)=4xy
$$

Together with $x^2$ and $4y^2$, the expansion is $x^2+4xy+4y^2$.""",
            ),
        ],
        overview="Five sign and factoring checks: two opposite binomials, a difference of squares, a vanishing-sum trap, a completed-square leftover, and a doubled middle.",
    ),
    task(
        title="A doubled middle that refuses to be halved",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
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
                r"With $a-b=3$ and $ab=10$, expanding $(a-b)^2+4ab$ is said to leave $(a+b)^2=49$.",
                True,
                r"""The polarisation identity $(a+b)^2=(a-b)^2+4ab$ gives

$$
3^2+4\cdot 10=9+40=49.
$$

The reported square is correct.""",
            ),
            (
                r"On the real line, $4x^2+12x+9$ is identified with $(2x+3)^2$.",
                True,
                r"""$$
(2x+3)^2=4x^2+12x+9
$$

Matching a square $(px+q)^2$ to this trinomial forces $p^2=4$ and $2pq=12$, hence $p=2$ and $q=3$.""",
            ),
            (
                r"""The product of the sum of the squares of $f$ and $g$ with the sum of the squares of $t$ and $x$ equals the sum of the square of $f\cdot t-g\cdot x$ and the square of $f\cdot x+g\cdot t$, for every real quadruple.""",
                True,
                r"""The claim describes a product of two sums of squares in four letters. Translate the wording, then verify with Brahmagupta's identity.

Brahmagupta identity:

$$(f^2+g^2)(t^2+x^2)=(f\cdot t-g\cdot x)^2+(f\cdot x+g\cdot t)^2$$

Cross pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

The symbolic translation matches the printed verbal pairing on both squares.""",
            ),
            (
                r"Matching $n^2+10n+16$ with $(n+5)^2$ is accepted on a checklist.",
                False,
                r"""$$
(n+5)^2=n^2+10n+25
$$

The constant $16$ is not $5^2$, so the trinomial is not a square of a linear binomial.""",
            ),
        ],
        overview="Five middle-term checks: a doubled product, a polarisation square, a genuine perfect square, a halved cross term, and a constant that misses $5^2$.",
    ),
    task(
        title="Three-term squares with a dropped factor two",
        subsection="2.1",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Expanding $(x+y+z)^2$ and subtracting $x^2+y^2+z^2$, a clerk reports the remainder $xy+yz+zx$.",
                False,
                r"""The clerk subtracts the three squares from the expanded trinomial square. Expand the product of sums first — each mixed pair appears twice:

Expand $(x+y+z)^2$:

$$
(x+y+z)^2=x^2+y^2+z^2+2xy+2yz+2zx
$$

Subtract $x^2+y^2+z^2$ from both sides:

$$
(x+y+z)^2-(x^2+y^2+z^2)=2xy+2yz+2zx
$$

Factor the surviving cross terms:

$$
2(xy+yz+zx)
$$

The reported remainder $xy+yz+zx$ drops the factor $2$ on every mixed product.""",
            ),
            (
                r"""The inequality $x^2+xy\ge xy+y^2$ holds for every real pair $(x,y)$.""",
                False,
                r"""The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$x^2+xy-(xy+y^2)=x^2-y^2=(x-y)(x+y)$$

The factorisation $(x-y)(x+y)$ is not a square, so the sign can change.

For $x=0$, $y=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.""",
            ),
            (
                r"A student expands $(a+b)^3$, subtracts $a^3+b^3$, and claims the difference is identically zero.",
                False,
                r"""$$
(a+b)^3=a^3+3a^2b+3ab^2+b^3=a^3+b^3+3ab(a+b)
$$

Subtracting the two cubes leaves $3ab(a+b)$, not zero.""",
            ),
            (
                r"Difference of squares writes $9m^2-16n^2=(3m-4n)(3m+4n)$ for every real pair.",
                True,
                r"""View the expression as

$$
(3m)^2-(4n)^2
$$

The difference-of-squares identity supplies the two linear factors.""",
            ),
            (
                r"Inserting $x=2$ into $(x+4)^2-x^2-16$ is said to produce $0$.",
                False,
                r"""Expand first:

$$
(x+4)^2-x^2-16=8x.
$$

At $x=2$ the remainder is $16$, not $0$. The cross term $8x$ is absent only at $x=0$.""",
            ),
        ],
        overview="Five independent claims: a dropped factor two on mixed products, an elementary square-sum, a cube remainder, a scaled difference of squares, and a numerical cross-term check.",
    ),
    task(
        title="Cubes whose odd-powered terms survive",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Working from the pair $(\alpha,\beta)$, rewriting $(\alpha+\beta)^3-(\alpha-\beta)^3$ as $6\alpha^2\beta+2\beta^3$ is accepted.",
                True,
                r"""The odd-powered terms in $\beta$ survive:

$$
(\alpha+\beta)^3-(\alpha-\beta)^3=2(3\alpha^2\beta+\beta^3)=6\alpha^2\beta+2\beta^3.
$$

Equivalently the factorisation $2\beta(3\alpha^2+\beta^2)$.""",
            ),
            (
                r"""The product of the sum of the squares of $p$ and $q$ with the sum of the squares of $r$ and $s$ equals the sum of the square of $p\cdot r-q\cdot s$ and the square of $p\cdot s+q\cdot r$, for every real quadruple.""",
                True,
                r"""The claim describes a product of two sums of squares in four letters. Translate the wording, then verify with Brahmagupta's identity.

Brahmagupta identity:

$$(p^2+q^2)(r^2+s^2)=(p\cdot r-q\cdot s)^2+(p\cdot s+q\cdot r)^2$$

Cross pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

The symbolic translation matches the printed verbal pairing on both squares.""",
            ),
            (
                r"After collecting only the $xy$ term in $(3x-y)^2$, a marker records its coefficient as $-3$.",
                False,
                r"""The mixed product is

$$
2\cdot(3x)\cdot(-y)=-6xy
$$

Recording $-3$ keeps only the undoubled product $3x\cdot(-y)$.""",
            ),
            (
                r"A script shows $x^4-16=(x^2-4)^2$, confusing a difference of squares with a square of a difference.",
                False,
                r"""$$
(x^2-4)^2=x^4-8x^2+16
$$

which still contains an $x^2$ term. At $x=0$ the two sides are $-16$ and $+16$.""",
            ),
            (
                r"""The inequality $m^2-mn\ge mn-n^2$ holds for every real pair $(m,n)$.""",
                True,
                r"""The inequality compares two quadratic-looking sides in $m$ and $n$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$m^2-mn-(mn-n^2)=m^2-2mn+n^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(m-n)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line.""",
            ),
        ],
        overview="Five mixed claims: a cube difference, a Newton cube-sum, a halved cross term, a biquadratic near-miss, and a completed-square leftover.",
    ),
    task(
        title="Elementary cubes evaluated from two symmetric values",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Given $t+w=5$ and $tw=4$, a clerk reports $t^3+w^3=125$.",
                False,
                r"""The cube-sum identity still subtracts the mixed block $3tw(t+w)$:

$$
(t+w)^3-3tw(t+w)=125-3\cdot 4\cdot 5=125-60=65.
$$

Reporting $125$ keeps only $(t+w)^3$.""",
            ),
            (
                r"From the data $c+d=3$ and $cd=2$, the fourth-power sum $c^4+d^4$ is reported as $17$.",
                True,
                r"""First $c^2+d^2=(c+d)^2-2cd=9-4=5$. Then

$$
c^4+d^4=(c^2+d^2)^2-2c^2d^2=25-2\cdot 4=17.
$$

The reported value matches.""",
            ),
            (
                r"""If $m^{-3}n^2=2$, then $\dfrac{m^8n^3}{m^2n^7}+3mn\cdot\dfrac{m^{-6}n^5}{m^7n^{-2}}=48$ for $m,n\neq 0$.""",
                False,
                r"""The given relation $m^{-3}n^2=2$ does not determine the claim by inspection alone. Set $R=m^{-3}n^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{m^8n^3}{m^2n^7}=m^6n^{-4}=R^{-2}$$

Powers of $m$ and $n$ collapse to a negative power of $R$.

Second summand:

$$3mn\cdot\frac{m^{-6}n^5}{m^7n^{-2}}=3R^{4}$$

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
                r"Expanding $(x^2+x+1)(x^2-x+1)$ is claimed to recover $x^4+x^2+1$ after the odd powers cancel.",
                True,
                r"""The product is a difference of squares in $x^2+1$ and $x$:

$$
(x^2+1)^2-x^2=x^4+2x^2+1-x^2=x^4+x^2+1.
$$

The cubic and linear terms cancel.""",
            ),
            (
                r"The coefficient of $bc$ in $(a-b-c)^2$ is recorded as $-2$.",
                False,
                r"""Write the square as

$$
\bigl(a-(b+c)\bigr)^2=a^2-2a(b+c)+(b+c)^2
$$

The inner square contributes $+2bc$, and $-2a(b+c)$ produces no $bc$. The collected coefficient is $+2$.""",
            ),
        ],
        overview="Five evaluations: a dropped Newton correction, a fourth-power sum, a sum-of-cubes sign error, a mirror-quadratic product, and a mixed-sign square.",
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
                r"""The verbal claim is a Sophie Germain factorisation in $f$ and $g$. Insert $\pm 4f^2g^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$f^4+4g^4=(f^2+2g^2)^2-(2fg)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(f^2-2fg+2g^2)(f^2+2fg+2g^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.""",
            ),
            (
                r"Whenever $\lambda+\mu=7$ and $\lambda\mu=10$, completing the evaluation of $(\lambda-\mu)^2$ yields $9$.",
                True,
                r"""$$
(\lambda-\mu)^2=(\lambda+\mu)^2-4\lambda\mu=49-40=9.
$$

The reported gap square is correct.""",
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
            (
                r"The coefficient of $xyz$ in $(x+y+z)^3$ is recorded as $3$.",
                False,
                r"""In the product of three trinomials the monomial $xyz$ arises from $3!=6$ permutations:
$$(x+y+z)^3=\sum x^3+3\sum x^2(y+z)+6xyz.$$
The coefficient is $6$. Recording $3$ confuses that count with the $3x^2 y$ pattern.""",
            ),
            (
                r"One textbook prints $x^4+4=(x^2+2)^2$, stopping after the incomplete square.",
                False,
                r"""$$
(x^2+2)^2=x^4+4x^2+4
$$

which exceeds $x^4+4$ by $4x^2$. That extra term is precisely what Sophie Germain subtracts before factoring as a difference of squares.""",
            ),
        ],
        overview="Five factoring and coefficient claims: a biquadratic split, an elementary gap, a four-term grouping, a cubed-trinomial count, and an incomplete square.",
    ),
    task(
        title="Reciprocal squares built from a linear sum",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Given $x+\dfrac{1}{x}=3$ with $x\neq 0$, a note reports $x^2+\dfrac{1}{x^2}=7$.",
                True,
                r"""Square the given sum and subtract $2$:

$$
\left(x+\frac{1}{x}\right)^2=x^2+2+\frac{1}{x^2}=9,
$$

hence $x^2+1/x^2=7$.""",
            ),
            (
                r"Given $y+\dfrac{1}{y}=3$ with $y\neq 0$, a booklet reports $y^3+\dfrac{1}{y^3}=27$.",
                False,
                r"""Cube the linear sum:

$$
\left(y+\frac{1}{y}\right)^3=y^3+\frac{1}{y^3}+3\left(y+\frac{1}{y}\right).
$$

Thus $y^3+1/y^3=27-9=18$, not $27$.""",
            ),
            (
                r"After grouping $b+c$, a clerk treats $x^2-(b+c)^2$ as identical to $x^2-b^2-c^2$.",
                False,
                r"""Expand the inner square:

$$
(b+c)^2=b^2+2bc+c^2,\qquad x^2-(b+c)^2=x^2-b^2-c^2-2bc.
$$

Dropping $-2bc$ is the usual mixed-term error.""",
            ),
            (
                r"""The sum of the fourth power of $c$ and four times the fourth power of $d$ factors as the product of $c^2-2cd+2d^2$ and $c^2+2cd+2d^2$ for every real pair $(c,d)$.""",
                True,
                r"""The verbal claim is a Sophie Germain factorisation in $c$ and $d$. Insert $\pm 4c^2d^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$c^4+4d^4=(c^2+2d^2)^2-(2cd)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(c^2-2cd+2d^2)(c^2+2cd+2d^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.""",
            ),
            (
                r"Distributing $(2x-3y)^2$ is said to produce $4x^2-6xy+9y^2$.",
                False,
                r"""The middle term is

$$
2\cdot(2x)\cdot(-3y)=-12xy
$$

The listed $-6xy$ is the undoubled product $2x\cdot(-3y)$.""",
            ),
        ],
        overview="Five independent evaluations: a reciprocal square, a reciprocal cube with a dropped correction, a mixed-sign coefficient, a biquadratic factorisation, and a halved cross term.",
    ),
    task(
        title="Four terms that group into a difference of squares",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Grouping $x^2+2xy+y^2-z^2$ as $(x+y)^2-z^2$ is rewritten further as $(x+y-z)(x+y+z)$.",
                True,
                r"""The first three terms are a perfect square. Difference of squares then splits the result:

$$
(x+y)^2-z^2=(x+y-z)(x+y+z).
$$""",
            ),
            (
                r"""The product of the sum of the squares of $m$ and $n$ with the sum of the squares of $h$ and $k$ equals the sum of the square of $m\cdot h-n\cdot k$ and the square of $m\cdot k+n\cdot h$, for every real quadruple.""",
                True,
                r"""The claim describes a product of two sums of squares in four letters. Translate the wording, then verify with Brahmagupta's identity.

Brahmagupta identity:

$$(m^2+n^2)(h^2+k^2)=(m\cdot h-n\cdot k)^2+(m\cdot k+n\cdot h)^2$$

Cross pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

The symbolic translation matches the printed verbal pairing on both squares.""",
            ),
            (
                r"Hunting $x^2 y^2$ in $(x+y)^4$, a marker records the coefficient $6$.",
                True,
                r"""The binomial theorem gives the middle term

$$
\dbinom{4}{2}x^2 y^2=6x^2 y^2
$$

Equivalently, $(x^2+2xy+y^2)^2$ contributes $2\cdot x^2\cdot y^2+(2xy)^2=6x^2 y^2$.""",
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
                r"Hunting $xy$ in $(x-2y+4)^2$, a marker records the coefficient as $-2$.",
                False,
                r"""The pair $x$ and $-2y$ contributes

$$
2\cdot x\cdot(-2y)=-4xy
$$

Recording $-2$ keeps only the undoubled product.""",
            ),
        ],
        overview="Five grouping and coefficient claims: a difference of squares, a vanishing-sum cube check, a fourth-power middle, a leading-two leftover, and a mixed-term coefficient.",
    ),
    task(
        title="Half the sum of three squared gaps",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"A candidate writes $a^2+b^2+c^2-ab-bc-ca=\dfrac{1}{2}\bigl((a-b)^2+(b-c)^2+(c-a)^2\bigr)$ and checks it at $(a,b,c)=(3,1,0)$, both sides equal to $7$.",
                True,
                r"""The algebraic identity is standard: expanding the right-hand side produces

$$
\frac12\bigl(2a^2+2b^2+2c^2-2ab-2bc-2ca\bigr)=a^2+b^2+c^2-ab-bc-ca.
$$

At $(3,1,0)$ both sides equal $9+1+0-3=7$, and $\frac12(4+1+9)=7$.""",
            ),
            (
                r"Whenever $m+n=8$ and $mn=15$, expanding $(m+n)^2-4mn$ leaves $(m-n)^2=4$.",
                True,
                r"""$$
(m-n)^2=(m+n)^2-4mn=64-60=4.
$$

The reported gap square is correct.""",
            ),
            (
                r"Factoring $x^3-1$ as $(x-1)(x^2-x+1)$ is accepted.",
                False,
                r"""Difference of cubes uses a plus in the quadratic factor:

$$
x^3-1=(x-1)(x^2+x+1).
$$

The printed minus is the sum-of-cubes pattern.""",
            ),
            (
                r"The coefficient of $x^2 y$ in $(x+y)^3$ is recorded as $1$.",
                False,
                r"""$$
(x+y)^3=x^3+3x^2 y+3xy^2+y^3
$$

The coefficient of $x^2 y$ is $3$, not $1$.""",
            ),
            (
                r"""The sum of the fourth power of $p$ and four times the fourth power of $q$ factors as the product of $p^2-2pq+2q^2$ and $p^2+2pq+2q^2$ for every real pair $(p,q)$.""",
                True,
                r"""The verbal claim is a Sophie Germain factorisation in $p$ and $q$. Insert $\pm 4p^2q^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$p^4+4q^4=(p^2+2q^2)^2-(2pq)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(p^2-2pq+2q^2)(p^2+2pq+2q^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.""",
            ),
        ],
        overview="Five identity checks: a half-sum of squared gaps, an elementary difference square, a cubes-factor sign, a binomial coefficient, and a truncated Brahmagupta product.",
    ),
    task(
        title="A cyclic product of three linear binomials",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Expanding $(x+y)(y+z)(z+x)$ and subtracting $xy(x+y)+yz(y+z)+zx(z+x)$, a note claims the remainder is $2xyz$.",
                True,
                r"""The cyclic product identity is

$$
(x+y)(y+z)(z+x)=(x+y+z)(xy+yz+zx)-xyz.
$$

Meanwhile $(x+y+z)(xy+yz+zx)$ exceeds $xy(x+y)+yz(y+z)+zx(z+x)$ by $3xyz$. Subtracting that cyclic sum therefore leaves $2xyz$.""",
            ),
            (
                r"Given $a+b=6$ and $ab=5$, the value of $a^3+b^3$ is reported as $126$.",
                True,
                r"""$$
(a+b)^3-3ab(a+b)=216-3\cdot 5\cdot 6=216-90=126.
$$

The reported cube-sum matches.""",
            ),
            (
                r"""The inequality $p^2+pq\ge pq+q^2$ holds for every real pair $(p,q)$.""",
                False,
                r"""The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$p^2+pq-(pq+q^2)=p^2-q^2=(p-q)(p+q)$$

The factorisation $(p-q)(p+q)$ is not a square, so the sign can change.

For $p=0$, $q=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.""",
            ),
            (
                r"Given $s=x+y+z=4$ and $p=xy+yz+zx=1$, a clerk reports $x^2+y^2+z^2=15$.",
                False,
                r"""The three-letter identity is $x^2+y^2+z^2=s^2-2p$:

$$
16-2\cdot 1=14.
$$

Reporting $15$ computes $s^2-p$, dropping the factor $2$.""",
            ),
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $b$ equals the square of $a^2+2b^2$ for every real pair $(a,b)$.""",
                False,
                r"""The wording stops at a single square. Expand $a^2+2b^2$ and compare with $a^4+4b^4$ before accepting the verbal equality.

Expand the printed square:

$$(a^2+2b^2)^2=a^4+4a^2b^2+4b^4$$

The cross term $4a^2b^2$ is not present in $a^4+4b^4$.

The Sophie Germain rewrite must subtract $(2ab)^2$ after adding it — the wording stops one step too early.""",
            ),
        ],
        overview="Five mixed claims: a cyclic-product remainder, a Newton cube-sum, a difference of cubes, a three-letter square-sum, and a trinomial-square leftover.",
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
                r"""The given relation $u^{-3}v^2=2$ does not determine the claim by inspection alone. Set $R=u^{-3}v^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{u^8v^3}{u^2v^7}=u^6v^{-4}=R^{-2}$$

Powers of $u$ and $v$ collapse to a negative power of $R$.

Second summand:

$$3uv\cdot\frac{u^{-6}v^5}{u^7v^{-2}}=3R^{4}$$

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
                r"Whenever $f+g=10$ and $fg=21$, a note reports $f^2+g^2=79$.",
                False,
                r"""$$
(f+g)^2-2fg=100-42=58.
$$

Reporting $79$ computes $100-21$, dropping the factor $2$ on the product.""",
            ),
            (
                r"On every real $x$, completing the square gives $x^2-6x+10=(x-3)^2+1$.",
                True,
                r"""Add and subtract $9$:

$$
x^2-6x+10=(x-3)^2+1.
$$

The leftover constant is $+1$.""",
            ),
            (
                r"Someone equates $(x^2-y^2)^2$ with $x^4-y^4$.",
                False,
                r"""$$
(x^2-y^2)^2=x^4-2x^2 y^2+y^4
$$

while $x^4-y^4=(x^2-y^2)(x^2+y^2)$. At $(x,y)=(1,1)$ the two sides are $0$ and $0$, but at $(1,0)$ they are $1$ and $1$; at $(2,1)$ they are $9$ versus $15$.""",
            ),
            (
                r"After expanding $(4p-q)^2$ and subtracting $16p^2+q^2$, a clerk reports remainder $0$.",
                False,
                r"""$$
(4p-q)^2=16p^2-8pq+q^2.
$$

Subtracting the outer squares leaves $-8pq$, not the zero polynomial.""",
            ),
        ],
        overview="Five expansion checks: a mixed-sign coefficient, an undoubled elementary product, a completed square, a biquadratic confusion, and a binomial remainder.",
    ),
    task(
        title="Newton sums built from a pair of elementary data",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
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
                r"From $r+s=5$ and $rs=3$, a clerk reports $r^2+s^2=22$.",
                False,
                r"""$$
(r+s)^2-2rs=25-6=19.
$$

Reporting $22$ computes $25-3$, dropping the factor $2$.""",
            ),
            (
                r"Expanding $(2x-y+1)^2$ and reading only the $x$ coefficient, a marker records $+4$.",
                True,
                r"""The pair $2x$ and $1$ contributes

$$
2\cdot(2x)\cdot 1=4x
$$

No other pair produces a linear $x$ term, so the collected coefficient is $+4$.""",
            ),
            (
                r"""If $c^{-3}d^2=2$, then $\dfrac{c^8d^3}{c^2d^7}+3cd\cdot\dfrac{c^{-6}d^5}{c^7d^{-2}}=48.25$ for $c,d\neq 0$.""",
                True,
                r"""The given relation $c^{-3}d^2=2$ does not determine the claim by inspection alone. Set $R=c^{-3}d^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{c^8d^3}{c^2d^7}=c^6d^{-4}=R^{-2}$$

Powers of $c$ and $d$ collapse to a negative power of $R$.

Second summand:

$$3cd\cdot\frac{c^{-6}d^5}{c^7d^{-2}}=3R^{4}$$

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
                r"Hunting the monomial $x^3 y$ in $(x+y)^5$, a marker records the coefficient $5$.",
                False,
                r"""The binomial expansion
$$(x+y)^5=x^5+5x^4 y+10x^3 y^2+10x^2 y^3+5xy^4+y^5$$
is homogeneous of degree $5$, so $x^3 y$ (degree $4$) does not appear. Recording $5$ copies the coefficient of $x^4 y$ onto the wrong monomial.""",
            ),
        ],
        overview="Five power-sum and factoring claims: a fourth-power Newton evaluation, an undoubled square-sum, a linear coefficient, a grouping factorisation, and a degree mismatch.",
    ),
    task(
        title="A square of a difference of two squares",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Expanding $(x^2-y^2)^2$ produces $x^4-2x^2 y^2+y^4$ identically.",
                True,
                r"""The binomial square

$$
(U-V)^2=U^2-2UV+V^2
$$

 with $U=x^2$ and $V=y^2$ yields $x^4-2x^2 y^2+y^4$.""",
            ),
            (
                r"""The sum of the fourth power of $r$ and four times the fourth power of $s$ equals the square of $r^2+2s^2$ for every real pair $(r,s)$.""",
                False,
                r"""The wording stops at a single square. Expand $r^2+2s^2$ and compare with $r^4+4s^4$ before accepting the verbal equality.

Expand the printed square:

$$(r^2+2s^2)^2=r^4+4r^2s^2+4s^4$$

The cross term $4r^2s^2$ is not present in $r^4+4s^4$.

The Sophie Germain rewrite must subtract $(2rs)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"The identity $(m+n)^2-(m-n)^2=4mn$ is used to report that $mn=6$ forces the left-hand side to equal $24$, independently of how the mass is split.",
                True,
                r"""Polarisation gives $4mn$ regardless of the separate values of $m$ and $n$. If $mn=6$,
$$(m+n)^2-(m-n)^2=4\cdot 6=24.$$""",
            ),
            (
                r"The coefficient of $uv$ in $(3u+v-1)^2$ is recorded as $+3$.",
                False,
                r"""The pair $3u$ and $v$ contributes

$$
2\cdot(3u)\cdot v=6uv.
$$

Recording $+3$ keeps only the undoubled product $3u\cdot v$.""",
            ),
            (
                r"Rewriting $x^2-10x+21$ as $(x-5)^2$ with no leftover is accepted.",
                False,
                r"""$$
(x-5)^2=x^2-10x+25,\qquad x^2-10x+21=(x-5)^2-4.
$$

The leftover $-4$ cannot be dropped.""",
            ),
        ],
        overview="Five rewrite checks: a squared difference of squares, an undoubled elementary product, a polarisation consequence, a mixed-term coefficient, and a completed-square leftover.",
    ),
    task(
        title="Four letters and the six doubled pairwise products",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Collecting the mixed term $ab$ in $(a+b+c+d)^2$, the coefficient $2$ is recorded.",
                True,
                r"""In the product of two copies of $a+b+c+d$, the pair $\{a,b\}$ occurs twice:
$$(a+b+c+d)^2=\sum a^2+2\sum ab.$$
The collected coefficient of $ab$ is $2$, just as in a two-letter square.""",
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
                r"Sophie Germain’s completing step writes $t^4+4=(t^2+2)^2-(2t)^2$ before factoring.",
                True,
                r"""Add and subtract $4t^2$:

$$
t^4+4=t^4+4t^2+4-4t^2=(t^2+2)^2-(2t)^2.
$$

The right-hand side is a difference of squares.""",
            ),
            (
                r"Given $y+\dfrac{1}{y}=4$ with $y\neq 0$, a booklet reports $y^2+\dfrac{1}{y^2}=16$.",
                False,
                r"""Squaring produces

$$
y^2+2+1/y^2=16
$$

so $y^2+1/y^2=14$. Reporting $16$ forgets to subtract $2$.""",
            ),
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $b$ factors as the product of $a^2-2ab+2b^2$ and $a^2+2ab+2b^2$ for every real pair $(a,b)$.""",
                True,
                r"""The verbal claim is a Sophie Germain factorisation in $a$ and $b$. Insert $\pm 4a^2b^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$a^4+4b^4=(a^2+2b^2)^2-(2ab)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(a^2-2ab+2b^2)(a^2+2ab+2b^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.""",
            ),
        ],
        overview="Five coefficient and rewrite claims: a four-letter mixed product, an elementary gap, a Sophie Germain completing step, a reciprocal square, and a binomial remainder.",
    ),
    task(
        title="Mirror quadratics whose odd powers cancel",
        subsection="2.1",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Rewriting $x^4+x^2+1$ as $(x^2+1)^2-x^2$ exhibits a difference of squares in $x^2+1$ and $x$.",
                True,
                r"""$$
(x^2+1)^2-x^2=x^4+2x^2+1-x^2=x^4+x^2+1.
$$

Factoring the difference of squares recovers $(x^2-x+1)(x^2+x+1)$.""",
            ),
            (
                r"Given $k+\ell=7$ and $k\ell=12$, a report sets $k^2+\ell^2=37$.",
                False,
                r"""$$
49-2\cdot 12=25.
$$

Reporting $37$ computes $49-12$, dropping the factor $2$.""",
            ),
            (
                r"""The sum of the fourth power of $h$ and four times the fourth power of $k$ factors as the product of $h^2-2hk+2k^2$ and $h^2+2hk+2k^2$ for every real pair $(h,k)$.""",
                True,
                r"""The verbal claim is a Sophie Germain factorisation in $h$ and $k$. Insert $\pm 4h^2k^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$h^4+4k^4=(h^2+2k^2)^2-(2hk)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(h^2-2hk+2k^2)(h^2+2hk+2k^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.""",
            ),
            (
                r"Factoring $y^4-1$ as $(y-1)^4$ is accepted over the reals.",
                False,
                r"""$$
(y-1)^4=y^4-4y^3+6y^2-4y+1
$$

which still contains odd powers. The correct real factorisation of $y^4-1$ is $(y-1)(y+1)(y^2+1)$.""",
            ),
            (
                r"Given $a+b=0$ and $ab=-9$, a booklet reports $a^2+b^2=0$.",
                False,
                r"""$$
a^2+b^2=(a+b)^2-2ab=0-2(-9)=18.
$$

A vanishing sum does not force a vanishing square-sum; here $a=-b$ and $ab=-a^2=-9$ give $a^2=9$ and $a^2+b^2=18$.""",
            ),
        ],
        overview="Five rewrite checks: a mirror-quadratic identity, an undoubled elementary product, a binomial remainder, a fourth-power near-miss, and a vanishing-sum trap.",
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
                r"""The inequality compares two quadratic-looking sides in $p$ and $q$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$p^2-pq-(pq-q^2)=p^2-2pq+q^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(p-q)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line.""",
            ),
            (
                r"Expanding $(x^2+2xy+2y^2)(x^2-2xy+2y^2)$ is claimed to recover $x^4+4y^4$ after the $4x^2 y^2$ terms cancel.",
                True,
                r"""The product is a difference of squares:

$$
(x^2+2y^2)^2-(2xy)^2=x^4+4x^2 y^2+4y^4-4x^2 y^2=x^4+4y^4.
$$

This is Sophie Germain’s identity.""",
            ),
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
                r"Evaluating $(1^2+2^2)(3^2+4^2)$ by quoting only $(1\cdot 3-2\cdot 4)^2=25$, a clerk declares the product equal to $25$.",
                False,
                r"""Brahmagupta’s identity keeps two squares:

$$
(3-8)^2+(4+6)^2=25+100=125,
$$

matching $5\cdot 25=125$. Omitting $(ad+bc)^2$ drops $100$.""",
            ),
            (
                r"Completing $2x^2-8x+10$ is recorded as $2(x-2)^2$ with no leftover.",
                False,
                r"""$$
2x^2-8x+10=2(x-2)^2+2.
$$

At $x=2$ the original quadratic equals $2$, not $0$. The leftover $+2$ cannot be dropped.""",
            ),
        ],
        overview="Five independent hard checks: a vanishing-sum cube, Sophie Germain, a Newton cube-sum, a truncated Brahmagupta product, and a leading-two leftover.",
    ),
    task(
        title="Brahmagupta’s product against a cubed trinomial",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Hunting the monomial $xyz$ in $(x+y+z)^3$, a marker records its coefficient as $1$, counting only one permutation.",
                False,
                r"""Each of the $3!=6$ orders $x\cdot y\cdot z$ appears in the product of three trinomials:
$$(x+y+z)^3=\sum x^3+3\sum x^2(y+z)+6xyz.$$
The coefficient of $xyz$ is $6$, not $1$.""",
            ),
            (
                r"With $u+v=2$ and $uv=-3$, the sum $u^3+v^3$ is reported as $26$.",
                True,
                r"""$$
(u+v)^3-3uv(u+v)=8-3(-3)(2)=8+18=26.
$$

The pair $(3,-1)$ confirms $27-1=26$.""",
            ),
            (
                r"Evaluating $(1^2+2^2)(3^2+4^2)$ by Brahmagupta as $(3-8)^2+(4+6)^2$ is reported to give $125$.",
                True,
                r"""$$
(ac-bd)^2+(ad+bc)^2=25+100=125,
$$

and $(1+4)(9+16)=5\cdot 25=125$. The two routes agree.""",
            ),
            (
                r"""The inequality $h^2-hk\ge hk-k^2$ holds for every real pair $(h,k)$.""",
                True,
                r"""The inequality compares two quadratic-looking sides in $h$ and $k$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$h^2-hk-(hk-k^2)=h^2-2hk+k^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(h-k)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line.""",
            ),
            (
                r"Hunting $x^2 y^2$ in $(x+y)^4$, a marker records the coefficient $4$.",
                False,
                r"""The binomial coefficient is

$$
\dbinom{4}{2}=6
$$

so the term is $6x^2 y^2$. Recording $4$ copies the outer binomial coefficients $4$ onto the middle monomial.""",
            ),
        ],
        overview="Five coefficient and product claims: a cubed-trinomial count, a Newton cube-sum, a Brahmagupta evaluation, an incomplete square, and a fourth-power middle.",
    ),
    task(
        title="Brahmagupta’s product of two sums of squares",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Evaluating $(1^2+1^2)(2^2+3^2)$ by Brahmagupta as $(2-3)^2+(3+2)^2$ is reported to give $26$.",
                True,
                r"""$$
(ac-bd)^2+(ad+bc)^2=1+25=26,
$$

and $(1+1)(4+9)=2\cdot 13=26$. The two routes agree.""",
            ),
            (
                r"""If $m^{-3}n^2=2$, then $\dfrac{m^8n^3}{m^2n^7}+3mn\cdot\dfrac{m^{-6}n^5}{m^7n^{-2}}=48.25$ for $m,n\neq 0$.""",
                True,
                r"""The given relation $m^{-3}n^2=2$ does not determine the claim by inspection alone. Set $R=m^{-3}n^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{m^8n^3}{m^2n^7}=m^6n^{-4}=R^{-2}$$

Powers of $m$ and $n$ collapse to a negative power of $R$.

Second summand:

$$3mn\cdot\frac{m^{-6}n^5}{m^7n^{-2}}=3R^{4}$$

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
                r"Whenever $x+\dfrac{1}{x}=4$ with $x\neq 0$, the cube sum $x^3+\dfrac{1}{x^3}$ is reported as $52$.",
                True,
                r"""$$
\left(x+\frac{1}{x}\right)^3=x^3+\frac{1}{x^3}+3\left(x+\frac{1}{x}\right),
$$

so $x^3+1/x^3=64-12=52$.""",
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
            (
                r"Hunting $x^2 y^2$ in $(x+2y)^4$, a marker records the coefficient $4$.",
                False,
                r"""The term is

$$
\dbinom{4}{2}x^2(2y)^2=6\cdot 4\,x^2 y^2=24x^2 y^2
$$

Recording $4$ ignores both the binomial $6$ and the inner factor $4$.""",
            ),
        ],
        overview="Five hard identities: a Brahmagupta product, a vanishing first factor of the three-cube identity, a reciprocal cube, a missing half on squared gaps, and a scaled fourth-power middle.",
    ),
    task(
        title="Completing the square under a leading coefficient two",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Completing the square rewrites $2x^2-8x+10$ as $2(x-2)^2+2$ for every real $x$.",
                True,
                r"""Factor $2$ from the first two terms:

$$
2(x^2-4x)+10=2\bigl((x-2)^2-4\bigr)+10=2(x-2)^2+2.
$$

Expanding the right-hand side recovers $2x^2-8x+10$.""",
            ),
            (
                r"Hunting $x^3 y$ in $(x+2y)^4$, a marker records the coefficient $4$.",
                False,
                r"""The binomial term is

$$
\binom{4}{1}x^3(2y)=8x^3 y.
$$

Recording $4$ copies $\binom{4}{1}$ without the inner factor $2$.""",
            ),
            (
                r"Given $s=p+q+r=6$ and $\sigma=pq+qr+rp=11$, the sum of squares $p^2+q^2+r^2$ is reported as $14$.",
                True,
                r"""$$
p^2+q^2+r^2=s^2-2\sigma=36-22=14.
$$

The identity needs both elementary symmetric sums.""",
            ),
            (
                r"A candidate claims $x^5-1=(x-1)^5$, treating a difference of fifth powers as a fifth power of a difference.",
                False,
                r"""At $x=2$ one has $2^5-1=31$ versus $(2-1)^5=1$. The binomial expansion still contains middle terms:
$$(x-1)^5=x^5-5x^4+10x^3-10x^2+5x-1.$$""",
            ),
            (
                r"""If $a^{-3}b^2=2$, then $\dfrac{a^8b^3}{a^2b^7}+3ab\cdot\dfrac{a^{-6}b^5}{a^7b^{-2}}=48$ for $a,b\neq 0$.""",
                False,
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

Dropping the summand $R^{-2}=\tfrac{1}{4}$ leaves $48$, which is not the value of the original expression.""",
            ),
        ],
        overview="Five hard rewrites: a leading-two completed square, a scaled fourth-power coefficient, a three-letter square-sum, a fifth-power near-miss, and a degree mismatch.",
    ),
    task(
        title="Factoring a biquadratic after a completed square",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Adding and subtracting $4x^2 y^2$ turns $x^4+4y^4$ into $(x^2+2y^2)^2-(2xy)^2$.",
                True,
                r"""$$
(x^2+2y^2)^2=x^4+4x^2 y^2+4y^4,
$$

so subtracting $(2xy)^2$ cancels the extra $4x^2 y^2$ and leaves $x^4+4y^4$. Difference of squares then factors the result.""",
            ),
            (
                r"Substituting $a=4$, $b=-2$, $c=-1$ into both sides of $a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$ produces $31$ on each side.",
                True,
                r"""The cubes give $64-8-1=55$ and $3abc=24$, so the left-hand side is $31$. The first factor is $4-2-1=1$, and the quadratic factor is

$$
16+4+1-(-8)-(2)-(-4)=21+8-2+4=31.
$$

Both sides equal $31$.""",
            ),
            (
                r"""The sum of the fourth power of $u$ and four times the fourth power of $v$ equals the square of $u^2+2v^2$ for every real pair $(u,v)$.""",
                False,
                r"""The wording stops at a single square. Expand $u^2+2v^2$ and compare with $u^4+4v^4$ before accepting the verbal equality.

Expand the printed square:

$$(u^2+2v^2)^2=u^4+4u^2v^2+4v^4$$

The cross term $4u^2v^2$ is not present in $u^4+4v^4$.

The Sophie Germain rewrite must subtract $(2uv)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"Hunting $x^2 y^3$ in $(x+y)^5$, a marker records the coefficient $5$.",
                False,
                r"""The binomial theorem gives

$$
\binom{5}{3}x^2 y^3=10x^2 y^3.
$$

Recording $5$ copies the outer coefficient of $x^4 y$ onto the wrong monomial.""",
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
        ],
        overview="Five hard checks: Sophie Germain’s completing step, a three-cube numerical test, a polarisation square, a degree mismatch, and a cubed-trinomial count.",
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
                r"""The verbal claim is a Sophie Germain factorisation in $m$ and $n$. Insert $\pm 4m^2n^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$m^4+4n^4=(m^2+2n^2)^2-(2mn)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(m^2-2mn+2n^2)(m^2+2mn+2n^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.""",
            ),
            (
                r"Given $p+q+r=0$ with $p=4$, $q=-1$, a note sets $r=3$ and concludes $p^3+q^3+r^3=3pqr$.",
                False,
                r"""The third letter must be $r=-(4-1)=-3$, not $3$. With the printed values, $p+q+r=6\neq 0$ and

$$
64-1+27=90,\qquad 3\cdot 4\cdot(-1)\cdot 3=-36.
$$""",
            ),
            (
                r"On every real triple, $x^2-(y+z)^2$ equals $(x-y-z)(x+y+z)$.",
                True,
                r"""Set $s=y+z$. Difference of squares gives

$$
x^2-s^2=(x-s)(x+s)=(x-y-z)(x+y+z).
$$""",
            ),
            (
                r"Someone writes $(x+y)(y+z)(z+x)=(x+y+z)(xy+yz+zx)$, dropping the $-xyz$ correction.",
                False,
                r"""The exact identity is

$$
(x+y)(y+z)(z+x)=(x+y+z)(xy+yz+zx)-xyz.
$$

Dropping $-xyz$ overshoots the cyclic product by $xyz$.""",
            ),
            (
                r"A marker accepts $(5w-1)^2=(5w+1)^2$ after declaring the middle sign irrelevant.",
                False,
                r"""The expansions are $25w^2-10w+1$ and $25w^2+10w+1$. They differ by
$$20w,$$
so they agree only at $w=0$, not identically.""",
            ),
        ],
        overview="Five leftover checks: a cubed-binomial remainder, a vanishing-sum trap, a grouped difference of squares, a cyclic-product correction, and opposite binomials.",
    ),
    task(
        title="Polarisation leftovers after two squares collide",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
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
                r"Factoring $x^4-y^4$ as $(x-y)(x+y)(x^2+y^2)$ is accepted over the reals.",
                True,
                r"""Difference of squares twice:

$$
x^4-y^4=(x^2-y^2)(x^2+y^2)=(x-y)(x+y)(x^2+y^2).
$$

The last quadratic has no further real linear factors.""",
            ),
            (
                r"Whenever $x+\dfrac{1}{x}=5$ with $x\neq 0$, the square sum $x^2+\dfrac{1}{x^2}$ is reported as $23$.",
                True,
                r"""$$
25-2=23.
$$

Squaring the given sum produces the extra constant $2$, which must be subtracted.""",
            ),
            (
                r"""If $u^{-3}v^2=2$, then $\dfrac{u^8v^3}{u^2v^7}+3uv\cdot\dfrac{u^{-6}v^5}{u^7v^{-2}}=48$ for $u,v\neq 0$.""",
                False,
                r"""The given relation $u^{-3}v^2=2$ does not determine the claim by inspection alone. Set $R=u^{-3}v^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{u^8v^3}{u^2v^7}=u^6v^{-4}=R^{-2}$$

Powers of $u$ and $v$ collapse to a negative power of $R$.

Second summand:

$$3uv\cdot\frac{u^{-6}v^5}{u^7v^{-2}}=3R^{4}$$

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
                r"The companion difference $(h+k)^3-(h-k)^3$ is rewritten as $2h(h^2+3k^2)$ as well.",
                False,
                r"""That formula belongs to the sum of the two cubes. The difference keeps the odd powers of $k$:

$$
(h+k)^3-(h-k)^3=2k(3h^2+k^2).
$$""",
            ),
        ],
        overview="Five polarisation and power claims: a numerical $4mn$, a biquadratic factorisation, a reciprocal square, a reciprocal fourth power, and a cube-difference sign pattern.",
    ),
    task(
        title="Hunting one mixed product in a shifted trinomial square",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"After collecting only the $xy$ term in $(2x-y+3)^2$, a marker records its coefficient as $-4$.",
                True,
                r"""The pair $2x$ and $-y$ contributes

$$
2\cdot(2x)\cdot(-y)=-4xy
$$

The constant $3$ does not affect that monomial.""",
            ),
            (
                r"""The inequality $u^2-uv\ge uv-v^2$ holds for every real pair $(u,v)$.""",
                True,
                r"""The inequality compares two quadratic-looking sides in $u$ and $v$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$u^2-uv-(uv-v^2)=u^2-2uv+v^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(u-v)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line.""",
            ),
            (
                r"The three-cube factorisation is used at $(a,b,c)=(1,1,-2)$ to report $a^3+b^3+c^3-3abc=0$ because $a+b+c=0$.",
                True,
                r"""The linear sum vanishes:
$$1+1-2=0,$$
so the first factor of $a^3+b^3+c^3-3abc$ is zero. Directly, $1+1-8-3(1)(1)(-2)=-6+6=0$.""",
            ),
            (
                r"Expanding $(x+y+z)^2$ as $x^2+y^2+z^2+xy+yz+zx$ is accepted, and the coefficient of $xy$ is therefore recorded as $1$.",
                False,
                r"""Each mixed product is doubled:
$$(x+y+z)^2=x^2+y^2+z^2+2xy+2yz+2zx.$$
The recorded expansion is short by $xy+yz+zx$, and the coefficient of $xy$ is $2$, not $1$.""",
            ),
            (
                r"Given $p+q+r=3$ and $pq+qr+rp=2$, a clerk reports $p^2+q^2+r^2=7$.",
                False,
                r"""$$
s^2-2\sigma=9-4=5.
$$

Reporting $7$ computes $9-2$, dropping the factor $2$ on the elementary pairwise sum.""",
            ),
        ],
        overview="Five coefficient and elementary-sum claims: a trinomial mixed term, a vanishing-sum trap, a three-cube specialisation, a dropped factor two, and a three-letter square-sum.",
    ),
    task(
        title="A biquadratic that is already a completed square",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Recognising $x^4+2x^2 y^2+y^4$ as $(x^2+y^2)^2$ is valid for every real pair.",
                True,
                r"""The middle term is exactly $2\cdot x^2\cdot y^2$:
$$x^4+2x^2 y^2+y^4=(x^2+y^2)^2.$$
The trinomial in $x^2$ and $y^2$ is a perfect square.""",
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
                r"Grouping $x^3+3x^2-x-3$ as $x^2(x+3)-(x+3)$ factors as $(x^2-1)(x+3)=(x-1)(x+1)(x+3)$.",
                True,
                r"""The common factor $x+3$ leaves $x^2-1$, which splits as a difference of squares:
$$x^2(x+3)-(x+3)=(x^2-1)(x+3)=(x-1)(x+1)(x+3).$$""",
            ),
            (
                r"The coefficient of $x^2 y$ in $(2x+y)^3$ is recorded as $2$.",
                False,
                r"""$$
(2x+y)^3=8x^3+12x^2 y+6xy^2+y^3.
$$

The coefficient of $x^2 y$ is $12$, not $2$. Recording $2$ copies the leading $2$ from $2x$ and stops.""",
            ),
            (
                r"""The inequality $a^2+ab\ge ab+b^2$ holds for every real pair $(a,b)$.""",
                False,
                r"""The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$a^2+ab-(ab+b^2)=a^2-b^2=(a-b)(a+b)$$

The factorisation $(a-b)(a+b)$ is not a square, so the sign can change.

For $a=0$, $b=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.""",
            ),
        ],
        overview="Five hard recognitions: a biquadratic square, a Newton cube-sum, a grouping factorisation, a degree mismatch, and a squared Sophie Germain factor.",
    ),
    task(
        title="Walking around three squared differences",
        subsection="2.1",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Evaluating $\dfrac12\bigl((a-b)^2+(b-c)^2+(c-a)^2\bigr)$ at $(a,b,c)=(5,1,0)$ is reported to equal $a^2+b^2+c^2-ab-bc-ca=21$.",
                True,
                r"""The right-hand side is $25+1+0-5-0-0=21$. The left-hand side is

$$
\frac12\bigl(16+1+25\bigr)=21.
$$

The identity holds at this triple, as it does in general.""",
            ),
            (
                r"A booklet prints $x^4+4=(x^2+2x+2)^2$ for every real $x$.",
                False,
                r"""$$
(x^2+2x+2)^2
$$

 expands with a $4x^3$ term and a $8x^2$ term. Sophie Germain multiplies by the mirror $x^2-2x+2$, rather than squaring one factor.""",
            ),
            (
                r"""The inequality $m^2+mn\ge mn+n^2$ holds for every real pair $(m,n)$.""",
                False,
                r"""The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$m^2+mn-(mn+n^2)=m^2-n^2=(m-n)(m+n)$$

The factorisation $(m-n)(m+n)$ is not a square, so the sign can change.

For $m=0$, $n=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.""",
            ),
            (
                r"Rewriting the difference $(\rho+\sigma)^3-(\rho-\sigma)^3$ as $2\rho(\rho^2+3\sigma^2)$ is accepted on every real pair.",
                False,
                r"""That formula belongs to the sum of the two cubes. The difference keeps the odd-powered terms in $\sigma$:

$$
(\rho+\sigma)^3-(\rho-\sigma)^3=2\sigma(3\rho^2+\sigma^2).
$$""",
            ),
            (
                r"Given $a+b+c=0$ with $a=1$, $b=1$, a slip sets $c=2$ and concludes $a^3+b^3+c^3=3abc$.",
                False,
                r"""The third letter must be $c=-2$, not $2$. With $c=2$ one has $a+b+c=4\neq 0$ and

$$
1+1+8=10,\qquad 3\cdot 1\cdot 1\cdot 2=6.
$$""",
            ),
        ],
        overview="Five closing checks: a half-sum of squared gaps, a squared Sophie Germain factor, a cube-sum identity, a cube-difference trap, and a vanishing-sum slip.",
    ),
]
