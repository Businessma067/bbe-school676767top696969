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
                r"Whenever $p+q=7$ and $pq=10$, expanding $(p+q)^2-2pq$ is reported to leave $p^2+q^2=29$. A clerk ticks the line.",
                True,
                r"""The elementary identity $p^2+q^2=(p+q)^2-2pq$ converts the given data into a number:

$$
(p+q)^2-2pq=7^2-2\cdot 10=49-20=29.
$$

The reported leftover matches.""",
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
                r"On every real pair $(m,n)$, rewriting $(m+n)^3-(m-n)^3$ as $2n(3m^2+n^2)$ is accepted.",
                True,
                r"""Set $A=m+n$ and $B=m-n$. Then $A-B=2n$ and

$$
A^3-B^3=(A-B)(A^2+AB+B^2).
$$

The quadratic factor expands to $3m^2+n^2$, so the difference is $2n(3m^2+n^2)$.""",
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
                r"Completing the square rewrites $x^2-8x+20$ as $(x-4)^2+4$ for every real $x$.",
                True,
                r"""Half of $-8$ is $-4$, and $(-4)^2=16$. Add and subtract $16$:

$$
x^2-8x+20=(x^2-8x+16)+4=(x-4)^2+4.
$$

The leftover constant is $+4$, not zero.""",
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
                r"Because $(d-e)^2\ge 0$ for all reals, the comparison $d^2+e^2\ge 2de$ is accepted on every pair.",
                True,
                r"""Expand the square:

$$
(d-e)^2=d^2-2de+e^2\ge 0,
$$

which rearranges to $d^2+e^2\ge 2de$, with equality only when $d=e$.""",
            ),
            (
                r"A student expands $(f+g)^2$, subtracts $f^2+g^2$, and claims the remainder is identically zero.",
                False,
                r"""The binomial square is $f^2+2fg+g^2$. Subtracting the two outer squares leaves
$$2fg,$$
which is not the zero polynomial.""",
            ),
            (
                r"Once $s=y+z$ is written, the product $(x-s)(x+s)$ is rewritten as $x^2-(y+z)^2$ identically.",
                True,
                r"""Difference of squares in $x$ and $s$:

$$
(x-s)(x+s)=x^2-s^2=x^2-(y+z)^2.
$$

The grouping is an identity in the three letters.""",
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
                r"A booklet claims $(2x+3)^2-(4x^2+9)$ is identically zero.",
                False,
                r"""Expand the square and subtract the outer terms:
$$(2x+3)^2=4x^2+12x+9.$$
Subtracting $4x^2+9$ leaves $12x$, the doubled cross term, not zero.""",
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
                r"After expanding $(2a+b)^2$ and subtracting $4a^2+b^2$, the remainder is identically $4ab$.",
                True,
                r"""$$
(2a+b)^2=4a^2+4ab+b^2
$$

Removing the two outer squares leaves the doubled cross term $4ab$.""",
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
                r"Matching $x^2+2x+1$ with $(x+1)^2+1$ is recorded as an identity.",
                False,
                r"""$$
(x+1)^2=x^2+2x+1
$$

 already. The extra $+1$ makes the right-hand side one larger for every $x$.""",
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
                r"Comparing $(3q+2)^2$ with $(3q-2)^2$, a marker claims the two expansions are identical.",
                False,
                r"""The two expansions are
$$(3q+2)^2=9q^2+12q+4,\qquad (3q-2)^2=9q^2-12q+4.$$
They differ by $24q$, so they are not identical.""",
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
                r"Collecting the $xy$ term in $(x+3y)^2$, the recorded coefficient $+6$ is accepted.",
                True,
                r"""The cross term is

$$
2\cdot x\cdot(3y)=6xy
$$

The expansion is $x^2+6xy+9y^2$.""",
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
                r"An examiner lists $(2h+5k)^2=4h^2+10hk+25k^2$ as a standard expansion.",
                False,
                r"""The mixed coefficient must be

$$
2\cdot 2h\cdot 5k=20hk
$$

The listed $10hk$ is the undoubled product $2h\cdot 5k$.""",
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
                r"""Each pair appears twice in the product of sums, so

$$
(x+y+z)^2=x^2+y^2+z^2+2xy+2yz+2zx.
$$

The remainder is $2(xy+yz+zx)$, not the undoubled sum of mixed products.""",
            ),
            (
                r"Provided $h+k=9$ and $hk=14$, the square sum $h^2+k^2$ is reported as $53$.",
                True,
                r"""$$
(h+k)^2-2hk=81-28=53.
$$

The reported value matches the identity.""",
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
                r"Whenever $p+q=4$ and $pq=3$, the sum of cubes $p^3+q^3$ is reported as $28$.",
                True,
                r"""Newton’s rewrite $p^3+q^3=(p+q)^3-3pq(p+q)$ gives

$$
4^3-3\cdot 3\cdot 4=64-36=28.
$$

The reported value is correct.""",
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
                r"Completing the square rewrites $x^2-6x+10$ as $(x-3)^2+1$ for every real $x$.",
                True,
                r"""Half of $-6$ is $-3$, and $9$ is added and subtracted:

$$
x^2-6x+10=(x-3)^2+1.
$$

The leftover $+1$ is required.""",
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
                r"Factoring $x^3+8$ as $(x+2)(x^2+2x+4)$ is accepted.",
                False,
                r"""Sum of cubes uses a minus in the quadratic factor:

$$
x^3+8=(x+2)(x^2-2x+4).
$$

The printed plus on the middle term is the difference-of-cubes pattern, used on a sum.""",
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
                r"Factoring over the reals, a script writes $x^4-16=(x-2)(x+2)(x^2+4)$ and checks the constant term $(-2)(2)(4)=-16$.",
                True,
                r"""Difference of squares twice:

$$
x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4).
$$

The quadratic $x^2+4$ has no real root, so the real factorisation stops there. The constant-term check is consistent.""",
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
                r"Grouping four terms, $ac+ad+bc+bd$ is rewritten as $(a+b)(c+d)$ identically.",
                True,
                r"""Factor by grouping:

$$
a(c+d)+b(c+d)=(a+b)(c+d).
$$

Distributing the product recovers the four original terms.""",
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
                r"On every real $y\neq\pm 1$, factoring $y^4-1$ as $(y-1)(y+1)(y^2+1)$ is accepted.",
                True,
                r"""Difference of squares twice:

$$
y^4-1=(y^2-1)(y^2+1)=(y-1)(y+1)(y^2+1).
$$

The identity holds for every real $y$; the restriction $y\neq\pm 1$ is needed only if one later cancels a linear factor.""",
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
                r"With $p+q+r=0$ and $p=2$, $q=3$, a note sets $r=-5$ and concludes $p^3+q^3+r^3=3pqr$.",
                True,
                r"""The third letter is forced: $r=-(2+3)=-5$. Then

$$
8+27-125=-90,\qquad 3\cdot 2\cdot 3\cdot(-5)=-90.
$$

The vanishing-sum rule applies, and the numerical check matches.""",
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
                r"Completing the square for $2x^2-8x+10$ is recorded as $2(x-2)^2$ with no leftover.",
                False,
                r"""Factor $2$ first:

$$
2x^2-8x+10=2(x^2-4x)+10=2\bigl((x-2)^2-4\bigr)+10=2(x-2)^2+2.
$$

The leftover $+2$ cannot be dropped.""",
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
                r"Evaluating $(1^2+2^2)(2^2+3^2)$ by quoting only $(2-6)^2=16$, a clerk declares the product equal to $16$.",
                False,
                r"""Brahmagupta’s identity needs two squares:

$$
(ac-bd)^2+(ad+bc)^2=(2-6)^2+(3+4)^2=16+49=65,
$$

matching $5\cdot 13=65$. The omitted second square is $49$.""",
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
                r"Difference of cubes factors $8-t^3$ as $(2-t)(4+2t+t^2)$ identically.",
                True,
                r"""$$
8-t^3=2^3-t^3=(2-t)(4+2t+t^2).
$$

The quadratic factor carries a plus on the middle term.""",
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
                r"A student expands $(2x-y+3)^2$, subtracts $4x^2+y^2+9$, and claims the difference is identically zero.",
                False,
                r"""The full square is

$$
4x^2+y^2+9-4xy+12x-6y
$$

Subtracting the three outer squares leaves $-4xy+12x-6y$, not zero.""",
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
                r"After grouping $a-(b+c)$, the coefficient of $bc$ in $(a-b-c)^2$ is recorded as $+2$.",
                True,
                r"""$$
\bigl(a-(b+c)\bigr)^2=a^2-2a(b+c)+(b+c)^2.
$$

The inner square contributes $+2bc$, and the cross terms with $a$ do not produce $bc$.""",
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
                r"Given $p+q=4$ and $pq=1$, a computation of $p^4+q^4$ is reported as $194$.",
                True,
                r"""First $p^2+q^2=16-2=14$. Then

$$
p^4+q^4=(p^2+q^2)^2-2(pq)^2=196-2=194.
$$

The reported power-sum is correct.""",
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
                r"Factoring by grouping, $x^3+x^2-x-1$ is rewritten as $(x+1)^2(x-1)$ identically.",
                True,
                r"""Group:

$$
x^2(x+1)-(x+1)=(x^2-1)(x+1)=(x-1)(x+1)^2.
$$

The factorisation is an identity.""",
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
                r"Whenever $u+v=9$ and $uv=20$, expanding $(u+v)^2-2uv$ is said to leave $61$.",
                False,
                r"""$$
81-40=41.
$$

Reporting $61$ computes $81-20$, dropping the factor $2$.""",
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
                r"With $\alpha+\beta=12$ and $\alpha\beta=32$, the value $(\alpha-\beta)^2$ is reported as $16$.",
                True,
                r"""$$
(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta=144-128=16.
$$

The reported gap square matches.""",
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
                r"A booklet claims $(2u-3v)^2-(4u^2+9v^2)$ is identically zero.",
                False,
                r"""$$
(2u-3v)^2=4u^2-12uv+9v^2
$$

Subtracting the outer squares leaves $-12uv$, not zero.""",
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
                r"On every real pair, $(2u-3v)^2-(4u^2+9v^2)$ equals $-12uv$.",
                True,
                r"""$$
(2u-3v)^2=4u^2-12uv+9v^2
$$

Subtracting $4u^2+9v^2$ leaves exactly the cross term $-12uv$.""",
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
                r"Given $a+b+c=0$ with $a=2$, $b=3$, a note sets $c=-5$ and concludes $a^3+b^3+c^3=3abc$ without expanding, then checks $-90=-90$.",
                True,
                r"""The third letter is forced: $c=-(2+3)=-5$. The identity $a+b+c=0\Rightarrow a^3+b^3+c^3=3abc$ then gives

$$
8+27-125=-90,\qquad 3\cdot 2\cdot 3\cdot(-5)=-90.
$$""",
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
                r"Whenever $p+q=6$ and $pq=7$, the Newton evaluation $p^3+q^3=90$ is reported.",
                True,
                r"""$$
(p+q)^3-3pq(p+q)=216-3\cdot 7\cdot 6=216-126=90.
$$

The reported cube-sum is correct.""",
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
                r"Stopping after an incomplete square, a booklet prints $x^4+4=(x^2+2)^2$.",
                False,
                r"""$$
(x^2+2)^2=x^4+4x^2+4
$$

The extra $4x^2$ is the term Sophie Germain subtracts before factoring.""",
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
                r"Under $a+b+c=0$, the combination $a^3+b^3+c^3-3abc$ is reported to vanish even though $a^2+b^2+c^2-ab-bc-ca$ need not.",
                True,
                r"""The factorisation is

$$
(a+b+c)(a^2+b^2+c^2-ab-bc-ca)
$$

The first factor vanishes, so the whole product vanishes. The quadratic factor equals $\frac12\sum(a-b)^2$, which is zero only when $a=b=c$ (hence only at the origin under a vanishing sum).""",
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
                r"Omitting the factor $\dfrac{1}{2}$, a clerk equates $u^2+v^2+w^2-uv-vw-wu$ with $(u-v)^2+(v-w)^2+(w-u)^2$ identically.",
                False,
                r"""The correct identity includes a factor $\frac12$ on the right. At $(u,v,w)=(2,0,0)$
$$u^2+v^2+w^2-uv-vw-wu=4,\qquad (u-v)^2+(v-w)^2+(w-u)^2=8.$$
The two sides are not identical.""",
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
                r"The coefficient of $xyz$ in $(2x+y+z)^2$ is recorded as $2$.",
                False,
                r"""A square of a linear form is homogeneous of degree $2$, so the degree-$3$ monomial $xyz$ does not appear. Its coefficient is $0$, not $2$. The count $2$ belongs to mixed products such as

$$
2\cdot(2x)\cdot y=4xy
$$

""",
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
                r"Whenever $m-n=2$ and $mn=15$, expanding $(m-n)^2+4mn$ yields $(m+n)^2=64$.",
                True,
                r"""$$
(m+n)^2=(m-n)^2+4mn=4+60=64.
$$

The reported square is correct.""",
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
                r"Collecting $x^2 y$ in $(x+y+z)^3$, a marker records the coefficient $1$.",
                False,
                r"""The expansion contains $3x^2(y+z)$, so the coefficient of $x^2 y$ is $3$:

$$
(x+y+z)^3=\sum x^3+3\sum x^2(y+z)+6xyz.
$$

Recording $1$ counts only one of the three contributing permutations.""",
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
                r"Expanding $(x+2)^3$ and subtracting $x^3+8$, the remainder is identically $6x^2+12x$.",
                True,
                r"""$$
(x+2)^3=x^3+6x^2+12x+8
$$

Removing the two cubes leaves the mixed terms $6x^2+12x$, which factor as $6x(x+2)$.""",
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
                r"The polarisation identity $(m+n)^2-(m-n)^2=4mn$ is used, with $m=5$ and $n=3$, to report the left-hand side equal to $60$.",
                True,
                r"""Directly,

$$
8^2-2^2=64-4=60
$$

The identity $4mn=4\cdot 5\cdot 3=60$ agrees.""",
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
                r"Given $y+\dfrac{1}{y}=5$ with $y\neq 0$, a note reports $y^4+\dfrac{1}{y^4}=625$.",
                False,
                r"""First $y^2+1/y^2=23$. Then

$$
y^4+\frac{1}{y^4}=\left(y^2+\frac{1}{y^2}\right)^2-2=529-2=527.
$$

Reporting $625$ is $(y+1/y)^4$, which still contains the mixed terms.""",
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
                r"Given $c+d=0$ and $cd=-4$, a booklet reports $c^2+d^2=0$.",
                False,
                r"""$$
c^2+d^2=(c+d)^2-2cd=0-2(-4)=8.
$$

A vanishing sum does not force a vanishing square-sum.""",
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
                r"With $p+q=1$ and $pq=-6$, the cube sum $p^3+q^3$ is reported as $19$.",
                True,
                r"""$$
(p+q)^3-3pq(p+q)=1-3(-6)(1)=1+18=19.
$$

The roots $3$ and $-2$ confirm $27-8=19$.""",
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
                r"A booklet prints $x^4+4y^4=(x^2+2xy+2y^2)^2$ for every real pair.",
                False,
                r"""Squaring one Sophie Germain factor produces extra cubic terms:

$$
(x^2+2xy+2y^2)^2=x^4+4x^3 y+8x^2 y^2+8xy^3+4y^4,
$$

which is not $x^4+4y^4$. The identity multiplies by the mirror factor $x^2-2xy+2y^2$.""",
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
                r"On every real pair $(h,k)$, rewriting $(h+k)^3+(h-k)^3$ as $2h(h^2+3k^2)$ is accepted.",
                True,
                r"""The even-powered terms in $k$ survive:

$$
(h+k)^3+(h-k)^3=2(h^3+3hk^2)=2h(h^2+3k^2).
$$""",
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
