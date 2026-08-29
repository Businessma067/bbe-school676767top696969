"""Chapter 2 elementary algebra exam bank (subsections 2.1–2.4, 136 tasks)."""

from __future__ import annotations

BANK_214: list[dict] = [
    {
        "subsection": "2.1",
        "title": "Warm-up: square of a sum",
        "diff": "1/5",
        "overview": r"Five direct square expansions: three standard identities, one monomial square, and one missing middle term.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The identity $(a+b)^2=a^2+2ab+b^2$ holds for every real pair $(a,b)$.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""Squaring $x+1$ yields $x^2+2x+1$ for every real $x$.""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""When $p$ and $q$ are real, $(p-q)^2=p^2-2pq+q^2$.""",
                True,
                r"""**C.** → True

Use $(p-q)^2=(p+q)^2-4pq$ with the printed symmetric data.

$$(p-q)^2=(p+q)^2-4pq$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Doubling inside a square: $(2t)^2=4t^2$ for every real $t$.""",
                True,
                r"""**D.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is True.""",
            ),
            (
                r"""Omitting the middle term gives $(m+n)^2=m^2+n^2$, which is false for real $(m,n)$.""",
                False,
                r"""**E.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Warm-up: difference of two squares",
        "diff": "1/5",
        "overview": r"Five factorisations of a difference of squares, including one squared-difference trap.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Factoring a difference: $x^2-y^2=(x-y)(x+y)$ for every real pair $(x,y)$.""",
                True,
                r"""**A.** → True

Factor the difference of squares in $x$ and $y$:

$$(x-y)(x+y)=x^2-y^2$$

Both factors match the printed identity.

So the statement is True.""",
            ),
            (
                r"""The unit shift $a^2-1=(a-1)(a+1)$ holds for every real $a$.""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""Reordering factors, $u^2-v^2=(u+v)(u-v)$ for all real $(u,v)$.""",
                True,
                r"""**C.** → True

Expand or factor with the named elementary identity; compare the result to the printed claim.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Squaring a difference is not factoring: $k^2-9=(k-3)^2$ is false for real $k$.""",
                False,
                r"""**D.** → False

A difference of squares is not a square of a difference:

$$k^2-9=(k-3)(k+3),\qquad (k-3)^2=k^2-6k+3^2$$

At the test point $k=0$ the two polynomials already disagree, so the statement is False.""",
            ),
            (
                r"""The gap-four pattern $r^2-4=(r-2)(r+2)$ holds for every real $r$.""",
                True,
                r"""**E.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Warm-up: elementary sum and product data",
        "diff": "2/5",
        "overview": r"""Five square-sum recoveries from sum and product using $a^2+b^2=(a+b)^2-2ab$.""",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $a+b=s$ and $ab=p$, then $a^2+b^2=s^2-2p$ for every real pair with sum $s$ and product $p$.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""Whenever $m+n=t$ and $mn=q$, one has $m^2+n^2=t^2-2q$.""",
                True,
                r"""**B.** → True

Expand or factor with the named elementary identity; compare the result to the printed claim, so the statement is True.""",
            ),
            (
                r"""From $u+v=r$ and $uv=w$, it follows that $u^2+v^2=r^2-2w$.""",
                True,
                r"""**C.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Given $c+d=h$ and $cd=k$, the identity $c^2+d^2=h^2-2k$ holds.""",
                True,
                r"""**D.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Replacing $2p$ by $p$ makes $a^2+b^2=s^2-p$ false when $a+b=s$ and $ab=p$.""",
                False,
                r"""**E.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Warm-up: cube sum under a vanishing triple sum",
        "diff": "2/5",
        "overview": r"Five uses of the vanishing-sum cube identity with letter-only hypotheses.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $a+b+c=0$, then $a^3+b^3+c^3=3abc$ for every real triple $(a,b,c)$.""",
                True,
                r"""**A.** → True

The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Vanishing $x+y+z=0$ implies $x^3+y^3+z^3=3xyz$ for every real triple $(x,y,z)$.""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""Whenever $p+q+r=0$, the cube sum satisfies $p^3+q^3+r^3=3pqr$.""",
                True,
                r"""**C.** → True

Expand or factor with the named elementary identity; compare the result to the printed claim.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Under $a+b+c=0$, the claim $a^3+b^3+c^3=0$ is false for real triples $(a,b,c)$.""",
                False,
                r"""**D.** → False

The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.

So the statement is False.""",
            ),
            (
                r"""With $m+n+t=0$, one has $m^3+n^3+t^3=3mnt$ for every real triple $(m,n,t)$.""",
                True,
                r"""**E.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Binomial identities — set 1",
        "diff": "3/5",
        "overview": r"Five independent leftovers: an elementary square-sum, a mixed-term coefficient, a cube difference, a vanishing-sum trap, and a polarisation remainder.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The inequality $a^2-ab\ge ab-b^2$ holds for every real pair $(a,b)$.""",
                True,
                r"""**A.** → True

Expand or factor with the named elementary identity; compare the result to the printed claim.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real pair $(r,s)$, $(r+s)^3-(r^3+s^3+3rs)=3rs(r+s)$.""",
                False,
                r"""**B.** → False

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is False.""",
            ),
            (
                r"""The sum of the fourth power of $m$ and four times the fourth power of $n$ equals the square of $m^2+2n^2$ for every real pair $(m,n)$.""",
                False,
                r"""**C.** → False

The wording stops at a single square. Expand $m^2+2n^2$ and compare with $m^4+4n^4$ before accepting the verbal equality.

Expand the printed square:

$$(m^2+2n^2)^2=m^4+4m^2n^2+4n^4$$

The cross term $4m^2n^2$ is not present in $m^4+4n^4$.

The Sophie Germain rewrite must subtract $(2mn)^2$ after adding it — the wording stops one step too early.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Given $a+b+c=0$ with $a=4$ and $b=-1$, sets $c=3$ and concludes $a^3+b^3+c^3=3abc$.""",
                False,
                r"""**D.** → False

The vanishing-sum rule needs $c=-(a+b)=-3$, not $c=3$. With the printed values one has $a+b+c\neq 0$, and

Direct cubes:

$$4^3+(-1)^3+(3)^3 = 64-1+27$$

$$= 90$$

Compare:

$$3\cdot 4\cdot (-1)\cdot (3)=-36$$

The two sides disagree, so the statement is False.""",
            ),
            (
                r"""The inequality $c^2+cd\ge cd+d^2$ holds for every real pair $(c,d)$.""",
                False,
                r"""**E.** → False

The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$c^2+cd-(cd+d^2) = c^2-d^2$$

$$= (c-d)(c+d)$$

The factorisation $(c-d)(c+d)$ is not a square, so the sign can change.

For $c=0$, $d=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Binomial identities — set 2",
        "diff": "3/5",
        "overview": r"Five separate near-misses: a dropped linear cross term, an elementary square-sum, a squared difference, a completed-square leftover, and a halved middle term.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real quadruple $(a,b,c,d)$, $(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$.""",
                True,
                r"""**A.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters, so the statement is True.""",
            ),
            (
                r"""For every real pair $(c,d)$, $(c+d)^2=c^2+2cd+d^2$.""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""For every real $k$, $(3k-2)^2-(9k^2-12k+3)=1$.""",
                False,
                r"""**C.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""The inequality $r^2-rs\ge rs-s^2$ holds for every real pair $(r,s)$.""",
                True,
                r"""**D.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""The identity $(2h+5)^2=4h^2+10h+25$ as a standard expansion.""",
                False,
                r"""**E.** → False

The cross term in $(U+V)^2$ is $2UV$, not $UV$: the middle coefficient must be $2\cdot(2h)\cdot(5)$, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Binomial identities — set 3",
        "diff": "3/5",
        "overview": r"Five coefficient and comparison checks: a doubled middle, a square-nonnegativity rewrite, a dropped cross term, a grouped difference of squares, and a near-miss perfect square.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $b$ equals the square of $a^2+2b^2$ for every real pair $(a,b)$.""",
                False,
                r"""**A.** → False

The wording stops at a single square. Expand $a^2+2b^2$ and compare with $a^4+4b^4$ before accepting the verbal equality.

Expand the printed square:

$$(a^2+2b^2)^2=a^4+4a^2b^2+4b^4$$

The cross term $4a^2b^2$ is not present in $a^4+4b^4$.

The Sophie Germain rewrite must subtract $(2ab)^2$ after adding it — the wording stops one step too early, so the statement is False.""",
            ),
            (
                r"""If $c^{-3}d^2=2$, then $\dfrac{c^8d^3}{c^2d^7}+3cd\cdot\dfrac{c^{-6}d^5}{c^7d^{-2}}=48$ for $c,d\neq 0$.""",
                False,
                r"""**B.** → False

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is False.""",
            ),
            (
                r"""For every real value where defined, $(f+g)^2-(f^2+g^2)=the remainder is identically zero$.""",
                False,
                r"""**C.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For every real quadruple $(u,v,w,z)$, $(u^2+v^2)(w^2+z^2)=(uw-vz)^2+(uz+vw)^2$.""",
                True,
                r"""**D.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(u^2+v^2)(w^2+z^2)=(uw-vz)^2+(uz+vw)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^2-(x^2+xy+xy+y^2)=0$.""",
                False,
                r"""**E.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Perfect squares that miss the constant by one",
        "diff": "3/5",
        "overview": r"Five recognition checks: a genuine perfect square, a missing middle, an undoubled elementary product, a difference of squares, and a subtracted-square remainder.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $y$, $9y^2-12y+4=(3y-2)^2$.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""The inequality $r^2+rs\ge rs+s^2$ holds for every real pair $(r,s)$.""",
                False,
                r"""**B.** → False

The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$r^2+rs-(rs+s^2) = r^2-s^2$$

$$= (r-s)(r+s)$$

The factorisation $(r-s)(r+s)$ is not a square, so the sign can change.

For $r=0$, $s=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.

So the statement is False.""",
            ),
            (
                r"""For every real $f$, $(f+1)^2=f^2+1$.""",
                False,
                r"""**C.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Splitting $z^2-25$ as $(z-5)(z+5)$ holds for every real $z$.""",
                True,
                r"""**D.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""If $p^{-3}q^2=2$, then $\dfrac{p^8q^3}{p^2q^7}+3pq\cdot\dfrac{p^{-6}q^5}{p^7q^{-2}}=48.25$ for $p,q\neq 0$.""",
                True,
                r"""**E.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Grouping a linear sum inside a square difference",
        "diff": "3/5",
        "overview": r"Five rewrite checks: a grouped difference of squares, an elementary gap square, a binomial remainder, a cube with dropped mixed terms, and an off-by-one perfect square.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real pair $(p,q)$, $(p+q)^2-(p-q)^2=4pq$.""",
                True,
                r"""**A.** → True

Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real quadruple $(f,g,t,x)$, $(f^2+g^2)(t^2+x^2)=(ft-gx)^2+(fx+gt)^2$.""",
                True,
                r"""**B.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(f^2+g^2)(t^2+x^2)=(ft-gx)^2+(fx+gt)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""The sum of the fourth power of $p$ and four times the fourth power of $q$ equals the square of $p^2+2q^2$ for every real pair $(p,q)$.""",
                False,
                r"""**C.** → False

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is False.""",
            ),
            (
                r"""For every real $m$, $(m+1)^2=m^2+1$.""",
                False,
                r"""**D.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
            (
                r"""The inequality $c^2-cd\ge cd-d^2$ holds for every real pair $(c,d)$.""",
                True,
                r"""**E.** → True

The inequality compares two quadratic-looking sides in $c$ and $d$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$c^2-cd-(cd-d^2)=c^2-2cd+d^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(c-d)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Signs that flip only the cross term",
        "diff": "3/5",
        "overview": r"Five sign and factoring checks: two opposite binomials, a difference of squares, a vanishing-sum trap, a completed-square leftover, and a doubled middle.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real pair $(m,n)$, $(m+n)^2-(m^2+n^2)=2mn$.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""For every real pair $(a,b)$, $a^3+b^3=(a+b)(a^2-ab+b^2)$.""",
                True,
                r"""**B.** → True

The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""If $p^{-3}q^2=2$, then $\dfrac{p^8q^3}{p^2q^7}+3pq\cdot\dfrac{p^{-6}q^5}{p^7q^{-2}}=48$ for $p,q\neq 0$.""",
                False,
                r"""**C.** → False

The given relation $p^{-3}q^2=2$ does not determine the claim by inspection alone. Set $R=p^{-3}q^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{p^8q^3}{p^2q^7} = p^6q^{-4}$$

$$= R^{-2}$$

Powers of $p$ and $q$ collapse to a negative power of $R$.

Second summand:

$$3pq\cdot\frac{p^{-6}q^5}{p^7q^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4} = \tfrac{1}{4}+48$$

$$= \tfrac{193}{4} = 48.25$$

The small reciprocal term survives alongside the larger power term.

Dropping the summand $R^{-2}=\tfrac{1}{4}$ leaves $48$, which is not the value of the original expression, so the statement is False.""",
            ),
            (
                r"""Completing the square, $x^2+6x+5$ is rewritten as $(x+3)^2$ with no leftover constant.""",
                False,
                r"""**D.** → False

Half of $+6$ is $3$, and $(3)^2=9$. Add and subtract $9$:

$$x^2+6x+5=(x^2+6x+9)-4=(x+3)^2-4$$

The leftover constant is $-4$, not zero.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Collecting the $xy$ term in $(x+2y)^2$, the recorded coefficient $+4$.""",
                True,
                r"""**E.** → True

Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(x+2y)^2$$

Cross term:

$$2\cdot(x)\cdot(2y)$$

The collected coefficient matches the printed value, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "A doubled middle that refuses to be halved",
        "diff": "3/5",
        "overview": r"""Five middle-term checks: a doubled product, a polarisation square, a genuine perfect square, a halved cross term, and a constant that misses $5^2$.""",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The sum of the fourth power of $u$ and four times the fourth power of $v$ factors as the product of $u^2-2uv+2v^2$ and $u^2+2uv+2v^2$ for every real pair $(u,v)$.""",
                True,
                r"""**A.** → True

The verbal claim is a Sophie Germain factorisation in $u$ and $v$. Insert $\pm 4u^2v^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$u^4+4v^4=(u^2+2v^2)^2-(2uv)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(u^2-2uv+2v^2)(u^2+2uv+2v^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum.

So the statement is True.""",
            ),
            (
                r"""With $a-b=3$ and $ab=10$, expanding $(a-b)^2+4ab$ equals $(a+b)^2=49$.""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""The inequality $x^2-xy\ge xy-y^2$ holds for every real pair $(x,y)$.""",
                True,
                r"""**C.** → True

The inequality compares two quadratic-looking sides in $x$ and $y$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$x^2-xy-(xy-y^2)=x^2-2xy+y^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(x-y)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line, so the statement is True.""",
            ),
            (
                r"""For every real pair $(m,n)$, $(m+n)^2-(m-n)^2=4mn$.""",
                True,
                r"""**D.** → True

Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^2=x^2+y^2$.""",
                False,
                r"""**E.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Three-term squares with a dropped factor two",
        "diff": "3/5",
        "overview": r"Five independent claims: a dropped factor two on mixed products, an elementary square-sum, a cube remainder, a scaled difference of squares, and a numerical cross-term check.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real values in $(x+y+z)^2$, subtracting $x^2+y^2+z^2$ from the expansion leaves $xy+yz+zx$.""",
                False,
                r"""**A.** → False

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is False.""",
            ),
            (
                r"""The inequality $x^2+xy\ge xy+y^2$ holds for every real pair $(x,y)$.""",
                False,
                r"""**B.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For every real value where defined, $(a+b)^3-(a^3+b^3)=identically zero$.""",
                False,
                r"""**C.** → False

The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.

The note uses values that do not sum to zero, so the shortcut fails.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""The sum of the fourth power of $f$ and four times the fourth power of $g$ equals the square of $f^2+2g^2$ for every real pair $(f,g)$.""",
                False,
                r"""**D.** → False

The wording stops at a single square. Expand $f^2+2g^2$ and compare with $f^4+4g^4$ before accepting the verbal equality.

Expand the printed square:

$$(f^2+2g^2)^2=f^4+4f^2g^2+4g^4$$

The cross term $4f^2g^2$ is not present in $f^4+4g^4$.

The Sophie Germain rewrite must subtract $(2fg)^2$ after adding it — the wording stops one step too early, so the statement is False.""",
            ),
            (
                r"""For every real pair $(a,b)$, $(a+b)^3-(a-b)^3=2b(3a^2+b^2)$.""",
                True,
                r"""**E.** → True

Set $A=m+n$ and $B=m-n$. Then $A-B=2n$ and

$$A^3-B^3=(A-B)(A^2+AB+B^2)$$

The quadratic factor expands to $3m^2+n^2$, so the difference is $2n(3m^2+n^2)$.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Cubes whose odd-powered terms survive",
        "diff": "4/5",
        "overview": r"Five mixed claims: a cube difference, a Newton cube-sum, a halved cross term, a biquadratic near-miss, and a completed-square leftover.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Working from the pair $(\alpha,\beta)$, rewriting $(\alpha+\beta)^3-(\alpha-\beta)^3$ as $6\alpha^2\beta+2\beta^3$.""",
                True,
                r"""**A.** → True

Set $A=m+n$ and $B=m-n$. Then $A-B=2n$ and

Factor:

$$A^3-B^3=(A-B)(A^2+AB+B^2)$$

Expand:

$$A^2+AB+B^2=3m^2+n^2$$

The difference is $2n(3m^2+n^2)$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real quadruple $(p,q,r,s)$, $(p^2+q^2)(r^2+s^2)=(pr-qs)^2+(ps+qr)^2$.""",
                True,
                r"""**B.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(p^2+q^2)(r^2+s^2)=(pr-qs)^2+(ps+qr)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real pair $(u,v)$, $(u+v)^2=u^2+v^2$.""",
                False,
                r"""**C.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim, so the statement is False.""",
            ),
            (
                r"""If $a^{-3}b^2=2$, then $\dfrac{a^8b^3}{a^2b^7}+3ab\cdot\dfrac{a^{-6}b^5}{a^7b^{-2}}=48.25$ for $a,b\neq 0$.""",
                True,
                r"""**D.** → True

The given relation $a^{-3}b^2=2$ does not determine the claim by inspection alone. Set $R=a^{-3}b^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{a^8b^3}{a^2b^7} = a^6b^{-4}$$

$$= R^{-2}$$

Powers of $a$ and $b$ collapse to a negative power of $R$.

Second summand:

$$3ab\cdot\frac{a^{-6}b^5}{a^7b^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4} = \tfrac{1}{4}+48$$

$$= \tfrac{193}{4} = 48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution, so the statement is True.""",
            ),
            (
                r"""The inequality $m^2-mn\ge mn-n^2$ holds for every real pair $(m,n)$.""",
                True,
                r"""**E.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Elementary cubes evaluated from two symmetric values",
        "diff": "4/5",
        "overview": r"Five evaluations: a dropped Newton correction, a fourth-power sum, a sum-of-cubes sign error, a mirror-quadratic product, and a mixed-sign square.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $r$, $(r+1)^2=r^2+1$.""",
                False,
                r"""**A.** → False

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is False.""",
            ),
            (
                r"""For every real $c$, $(6c-1)^2=36c^2-12c+1$.""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""If $m^{-3}n^2=2$, then $\dfrac{m^8n^3}{m^2n^7}+3mn\cdot\dfrac{m^{-6}n^5}{m^7n^{-2}}=48$ for $m,n\neq 0$.""",
                False,
                r"""**C.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real pair $(h,k)$, $(h+k)^2-(h-k)^2=4hk$.""",
                True,
                r"""**D.** → True

Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$, so the statement is True.""",
            ),
            (
                r"""For every real quadruple $(m,n,h,k)$, $(m^2+n^2)(h^2+k^2)=(mh-nk)^2+(mk+nh)^2$.""",
                True,
                r"""**E.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(m^2+n^2)(h^2+k^2)=(mh-nk)^2+(mk+nh)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "A hidden square inside a biquadratic difference",
        "diff": "4/5",
        "overview": r"Five factoring and coefficient claims: a biquadratic split, an elementary gap, a four-term grouping, a cubed-trinomial count, and an incomplete square.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The sum of the fourth power of $f$ and four times the fourth power of $g$ factors as the product of $f^2-2fg+2g^2$ and $f^2+2fg+2g^2$ for every real pair $(f,g)$.""",
                True,
                r"""**A.** → True

Adding and subtracting $4f^2g^2$ produces a difference of squares:

$$f^4+4g^4 = (f^2+2g^2)^2-(2fg)^2$$

$$= (f^2-2fg+2g^2)(f^2+2fg+2g^2)$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Whenever $\lambda+\mu=7$ and $\lambda\mu=10$, completing the evaluation of $(\lambda-\mu)^2$ yields $9$.""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""The inequality $u^2+uv\ge uv+v^2$ holds for every real pair $(u,v)$.""",
                False,
                r"""**C.** → False

The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$u^2+uv-(uv+v^2) = u^2-v^2$$

$$= (u-v)(u+v)$$

The factorisation $(u-v)(u+v)$ is not a square, so the sign can change.

For $u=0$, $v=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.

So the statement is False.""",
            ),
            (
                r"""The coefficient of $xyz$ in $(x+y+z)^3$ equals $3$.""",
                False,
                r"""**D.** → False

Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(U+V)^2$$

Cross term:

$$2\cdot(U)\cdot(V)$$

The collected coefficient contradicts $xyz$.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""The sum of the fourth power of $c$ and four times the fourth power of $d$ equals the square of $c^2+2d^2$ for every real pair $(c,d)$.""",
                False,
                r"""**E.** → False

The wording stops at a single square. Expand $c^2+2d^2$ and compare with $c^4+4d^4$ before accepting the verbal equality.

Expand the printed square:

$$(c^2+2d^2)^2=c^4+4c^2d^2+4d^4$$

The cross term $4c^2d^2$ is not present in $c^4+4d^4$.

The Sophie Germain rewrite must subtract $(2cd)^2$ after adding it — the wording stops one step too early, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Reciprocal squares built from a linear sum",
        "diff": "4/5",
        "overview": r"Five independent evaluations: a reciprocal square, a reciprocal cube with a dropped correction, a mixed-sign coefficient, a biquadratic factorisation, and a halved cross term.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The sum of the fourth power of $r$ and four times the fourth power of $s$ factors as the product of $r^2-2rs+2s^2$ and $r^2+2rs+2s^2$ for every real pair $(r,s)$.""",
                True,
                r"""**A.** → True

The verbal claim is a Sophie Germain factorisation in $r$ and $s$. Insert $\pm 4r^2s^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$r^4+4s^4=(r^2+2s^2)^2-(2rs)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(r^2-2rs+2s^2)(r^2+2rs+2s^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum, so the statement is True.""",
            ),
            (
                r"""For every real pair $(c,d)$, $(c+d)^2=c^2+d^2$.""",
                False,
                r"""**B.** → False

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is False.""",
            ),
            (
                r"""After grouping $b+c$, treats $x^2-(b+c)^2$ as identical to $x^2-b^2-c^2$.""",
                False,
                r"""**C.** → False

Difference of squares in $x$ and $s$:

$$(x-s)(x+s)=x^2-s^2=x^2-(y+z)^2$$

The grouping is an identity in the three letters.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""The sum of the fourth power of $c$ and four times the fourth power of $d$ factors as the product of $c^2-2cd+2d^2$ and $c^2+2cd+2d^2$ for every real pair $(c,d)$.""",
                True,
                r"""**D.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Distributing $(2x-3y)^2$ equals $4x^2-6xy+9y^2$.""",
                False,
                r"""**E.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Four terms that group into a difference of squares",
        "diff": "4/5",
        "overview": r"Five grouping and coefficient claims: a difference of squares, a vanishing-sum cube check, a fourth-power middle, a leading-two leftover, and a mixed-term coefficient.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real quadruple $(f,g,t,x)$, $(f^2+g^2)(t^2+x^2)=(ft+gt)^2+(fx-gx)^2$.""",
                False,
                r"""**A.** → False

The right-hand squares use a wrong letter pairing inside each square. Compare with the standard Brahmagupta cross terms.

Correct identity:

$$(f^2+g^2)(t^2+x^2)=(ft-gx)^2+(fx+gt)^2$$

This is the standard sum-of-squares product factorisation.

Printed pairing:

$$(ft+gt)^2+(fx-gx)^2$$

Factoring shows these squares are not the same polynomials.

Expanding both readings separates them; the error appears only in the cross pairing.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For every real $p$, $(7p-1)^2=49p^2-14p+1$.""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""If $u+v=s$ and $uv=p$, then $u^2+v^2=s^2-2p$ for every real pair with sum $s$ and product $p$.""",
                True,
                r"""**C.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""If $u^{-3}a^2=2$, then $\dfrac{u^8a^3}{u^2a^7}+3uv\cdot\dfrac{u^{-6}a^5}{u^7a^{-2}}=48.25$ for $u,a\neq 0$.""",
                True,
                r"""**D.** → True

The given relation $u^{-3}a^2=2$ does not determine the claim by inspection alone. Set $R=u^{-3}a^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{u^8a^3}{u^2a^7} = u^6a^{-4}$$

$$= R^{-2}$$

Powers of $u$ and $a$ collapse to a negative power of $R$.

Second summand:

$$3uv\cdot\frac{u^{-6}a^5}{u^7a^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4} = \tfrac{1}{4}+48$$

$$= \tfrac{193}{4} = 48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution, so the statement is True.""",
            ),
            (
                r"""For every real $x$, $(x+1)^2=x^2+1$.""",
                False,
                r"""**E.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Half the sum of three squared gaps",
        "diff": "4/5",
        "overview": r"Five identity checks: a half-sum of squared gaps, an elementary difference square, a cubes-factor sign, a binomial coefficient, and a truncated Brahmagupta product.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $r+s=s$ and $rs=p$, then $r^2+s^2=s^2-2p$ for every real pair with sum $s$ and product $p$.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""For every real quadruple $(u,v,w,z)$, $(u^2+v^2)(w^2+z^2)=(uw+vw)^2+(uz-vz)^2$.""",
                False,
                r"""**B.** → False

The right-hand squares use a wrong letter pairing inside each square. Compare with the standard Brahmagupta cross terms.

Correct identity:

$$(u^2+v^2)(w^2+z^2)=(uw-vz)^2+(uz+vw)^2$$

This is the standard sum-of-squares product factorisation.

Printed pairing:

$$(uw+vw)^2+(uz-vz)^2$$

Factoring shows these squares are not the same polynomials.

Expanding both readings separates them; the error appears only in the cross pairing, so the statement is False.""",
            ),
            (
                r"""Factoring $x^3-1$ as $(x-1)(x^2-x+1)$.""",
                False,
                r"""**C.** → False

Difference of cubes leaves three terms in the quotient:

Factor:

$$\frac{j^3-1331}{j-11}=j^2+11j+121$$

At the test point:

$$j = 0 \Rightarrow 121 \text{ on both sides, but } j$$

$$= 1 \Rightarrow 133 \neq 122$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""The coefficient of $x^2 y$ in $(x+y)^3$ equals $1$.""",
                False,
                r"""**D.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""The sum of the fourth power of $p$ and four times the fourth power of $q$ factors as the product of $p^2-2pq+2q^2$ and $p^2+2pq+2q^2$ for every real pair $(p,q)$.""",
                True,
                r"""**E.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "A cyclic product of three linear binomials",
        "diff": "4/5",
        "overview": r"Five mixed claims: a cyclic-product remainder, a Newton cube-sum, a difference of cubes, a three-letter square-sum, and a trinomial-square leftover.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $a$, $(2a-1)^2=4a^2-4a+1$.""",
                True,
                r"""**A.** → True

Expand or factor with the named elementary identity; compare the result to the printed claim.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""If $a^{-3}c^2=2$, then $\dfrac{a^8c^3}{a^2c^7}+3ab\cdot\dfrac{a^{-6}c^5}{a^7c^{-2}}=48.25$ for $a,c\neq 0$.""",
                True,
                r"""**B.** → True

The given relation $a^{-3}c^2=2$ does not determine the claim by inspection alone. Set $R=a^{-3}c^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{a^8c^3}{a^2c^7} = a^6c^{-4}$$

$$= R^{-2}$$

Powers of $a$ and $c$ collapse to a negative power of $R$.

Second summand:

$$3ab\cdot\frac{a^{-6}c^5}{a^7c^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4} = \tfrac{1}{4}+48$$

$$= \tfrac{193}{4} = 48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution, so the statement is True.""",
            ),
            (
                r"""The inequality $p^2+pq\ge pq+q^2$ holds for every real pair $(p,q)$.""",
                False,
                r"""**C.** → False

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is False.""",
            ),
            (
                r"""If $s=x+y+z=4$ and $p=xy+yz+zx=1$, then $x^2+y^2+z^2=15$.""",
                False,
                r"""**D.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real quadruple $(p,q,r,s)$, $(p^2+q^2)(r^2+s^2)=(pr+qr)^2+(ps-qs)^2$.""",
                False,
                r"""**E.** → False

The right-hand squares use a wrong letter pairing inside each square. Compare with the standard Brahmagupta cross terms.

Correct identity:

$$(p^2+q^2)(r^2+s^2)=(pr-qs)^2+(ps+qr)^2$$

This is the standard sum-of-squares product factorisation.

Printed pairing:

$$(pr+qr)^2+(ps-qs)^2$$

Factoring shows these squares are not the same polynomials.

Expanding both readings separates them; the error appears only in the cross pairing, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Mixed signs inside a three-letter square",
        "diff": "4/5",
        "overview": r"Five expansion checks: a mixed-sign coefficient, an undoubled elementary product, a completed square, a biquadratic confusion, and a binomial remainder.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $u^{-3}v^2=2$, then $\dfrac{u^8v^3}{u^2v^7}+3uv\cdot\dfrac{u^{-6}v^5}{u^7v^{-2}}=48.25$ for $u,v\neq 0$.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""For every real $c$, $(c+1)^2=c^2+1$.""",
                False,
                r"""**B.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For every real quadruple $(a,q,r,s)$, $(a^2+q^2)(r^2+s^2)=(pr-qs)^2+(ps+qr)^2$.""",
                True,
                r"""**C.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+q^2)(r^2+s^2)=(pr-qs)^2+(ps+qr)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters, so the statement is True.""",
            ),
            (
                r"""Someone equates $(x^2-y^2)^2$ with $x^4-y^4$.""",
                False,
                r"""**D.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real pair $(t,w)$, $(t+w)^2=t^2+w^2$.""",
                False,
                r"""**E.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Newton sums built from a pair of elementary data",
        "diff": "4/5",
        "overview": r"Five power-sum and factoring claims: a fourth-power Newton evaluation, an undoubled square-sum, a linear coefficient, a grouping factorisation, and a degree mismatch.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""A mis-paired Brahmagupta product: for every real quadruple $(m,n,h,k)$, $(m^2+n^2)(h^2+k^2)=(mh+nh)^2+(mk-nk)^2$.""",
                False,
                r"""**A.** → False

The right-hand squares use a wrong letter pairing inside each square. Compare with the standard Brahmagupta cross terms.

Correct identity:

$$(m^2+n^2)(h^2+k^2)=(mh-nk)^2+(mk+nh)^2$$

This is the standard sum-of-squares product factorisation.

Printed pairing:

$$(mh+nh)^2+(mk-nk)^2$$

Factoring shows these squares are not the same polynomials.

Expanding both readings separates them; the error appears only in the cross pairing.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Dropping the middle term: $(p+q)^2=p^2+q^2$ is false for real $(p,q)$.""",
                False,
                r"""**B.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Another wrong cross pairing: for every real quadruple $(a,b,c,d)$, $(a^2+b^2)(c^2+d^2)=(ac+bc)^2+(ad-bd)^2$.""",
                False,
                r"""**C.** → False

The right-hand squares use a wrong letter pairing inside each square. Compare with the standard Brahmagupta cross terms.

Correct identity:

$$(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$$

This is the standard sum-of-squares product factorisation.

Printed pairing:

$$(ac+bc)^2+(ad-bd)^2$$

Factoring shows these squares are not the same polynomials.

Expanding both readings separates them; the error appears only in the cross pairing, so the statement is False.""",
            ),
            (
                r"""If $c^{-3}d^2=2$, then $\dfrac{c^8d^3}{c^2d^7}+3cd\cdot\dfrac{c^{-6}d^5}{c^7d^{-2}}=48.25$ for $c,d\neq 0$.""",
                True,
                r"""**D.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""Again omitting $2pq$: $(x+y)^2=x^2+y^2$ is false for real $(x,y)$.""",
                False,
                r"""**E.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "A square of a difference of two squares",
        "diff": "4/5",
        "overview": r"Five rewrite checks: a squared difference of squares, an undoubled elementary product, a polarisation consequence, a mixed-term coefficient, and a completed-square leftover.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Expanding $(x^2-y^2)^2$ produces $x^4-2x^2 y^2+y^4$ identically.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""The sum of the fourth power of $r$ and four times the fourth power of $s$ equals the square of $r^2+2s^2$ for every real pair $(r,s)$.""",
                False,
                r"""**B.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""The identity $(m+n)^2-(m-n)^2=4mn$ is used to report that $mn=6$ forces the left-hand side to equal $24$, independently of how the mass is split.""",
                True,
                r"""**C.** → True

Expand the two binomial squares separately:

First square:

$$(r+s)^2=r^2+2rs+s^2$$

Second square:

$$(r-s)^2=r^2-2rs+s^2$$

Subtract:

$$(r+s)^2-(r-s)^2=4rs$$

The cross terms add rather than cancel.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""The inequality $r^2-rs\ge rs-a^2$ holds for every real pair $(r,a)$.""",
                True,
                r"""**D.** → True

The inequality compares two quadratic-looking sides in $r$ and $a$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$r^2-rs-(rs-a^2)=r^2-2rs+a^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(r-a)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line, so the statement is True.""",
            ),
            (
                r"""Rewriting $x^2-10x+21$ as $(x-5)^2$ with no leftover.""",
                False,
                r"""**E.** → False

A difference of squares factors as $(x-3.1622776601683795)(x+3.1622776601683795)$, not as a square of a difference $(x-3.1622776601683795)^2$, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Four letters and the six doubled pairwise products",
        "diff": "4/5",
        "overview": r"Five coefficient and rewrite claims: a four-letter mixed product, an elementary gap, a Sophie Germain completing step, a reciprocal square, and a binomial remainder.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Collecting the mixed term $ab$ in $(a+b+c+d)^2$, the coefficient $2$ is recorded.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""If $a^{-3}c^2=2$, then $\dfrac{a^8c^3}{a^2c^7}+3ab\cdot\dfrac{a^{-6}c^5}{a^7c^{-2}}=48.25$ for $a,c\neq 0$, under the standing domain label $D_{1}$.""",
                True,
                r"""**B.** → True

The given relation $a^{-3}c^2=2$ does not determine the claim by inspection alone. Set $R=a^{-3}c^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{a^8c^3}{a^2c^7} = a^6c^{-4}$$

$$= R^{-2}$$

Powers of $a$ and $c$ collapse to a negative power of $R$.

Second summand:

$$3ab\cdot\frac{a^{-6}c^5}{a^7c^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4} = \tfrac{1}{4}+48$$

$$= \tfrac{193}{4} = 48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution, so the statement is True.""",
            ),
            (
                r"""Sophie Germain’s completing step writes $t^4+4=(t^2+2)^2-(2t)^2$ before factoring.""",
                True,
                r"""**C.** → True

Expand or factor with the named elementary identity; compare the result to the printed claim.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real quadruple $(u,v,w,a)$, $(u^2+v^2)(w^2+a^2)=(uw-vz)^2+(uz+vw)^2$.""",
                True,
                r"""**D.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(u^2+v^2)(w^2+a^2)=(uw-vz)^2+(uz+vw)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $t$, $(t+1)^2=t^2+1$.""",
                False,
                r"""**E.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Mirror quadratics whose odd powers cancel",
        "diff": "4/5",
        "overview": r"Five rewrite checks: a mirror-quadratic identity, an undoubled elementary product, a binomial remainder, a fourth-power near-miss, and a vanishing-sum trap.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Rewriting $x^4+x^2+1$ as $(x^2+1)^2-x^2$ exhibits a difference of squares in $x^2+1$ and $x$.""",
                True,
                r"""**A.** → True

A difference of squares is not a square of a difference:

$$w^2-16=(w-4)(w+4),\qquad (w-4)^2=w^2-8w+4^2$$

At the test point $w=0$ the two polynomials already disagree.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Given $k+\ell=7$ and $k\ell=12$, a report sets $k^2+\ell^2=37$.""",
                False,
                r"""**B.** → False

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is False.""",
            ),
            (
                r"""The sum of the fourth power of $h$ and four times the fourth power of $k$ factors as the product of $h^2-2hk+2k^2$ and $h^2+2hk+2k^2$ for every real pair $(h,k)$.""",
                True,
                r"""**C.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real pair $(h,k)$, $(h+k)^2=h^2+k^2$.""",
                False,
                r"""**D.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim, so the statement is False.""",
            ),
            (
                r"""If $a^{-3}n^2=2$, then $\dfrac{a^8n^3}{a^2n^7}+3mn\cdot\dfrac{a^{-6}n^5}{a^7n^{-2}}=48.25$ for $a,n\neq 0$.""",
                True,
                r"""**E.** → True

The given relation $a^{-3}n^2=2$ does not determine the claim by inspection alone. Set $R=a^{-3}n^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{a^8n^3}{a^2n^7} = a^6n^{-4}$$

$$= R^{-2}$$

Powers of $a$ and $n$ collapse to a negative power of $R$.

Second summand:

$$3mn\cdot\frac{a^{-6}n^5}{a^7n^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4} = \tfrac{1}{4}+48$$

$$= \tfrac{193}{4} = 48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Three cubes after a vanishing linear sum",
        "diff": "5/5",
        "overview": r"Five independent hard checks: a vanishing-sum cube, Sophie Germain, a Newton cube-sum, a truncated Brahmagupta product, and a leading-two leftover.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The inequality $p^2-pq\ge pq-q^2$ holds for every real pair $(p,q)$.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""For every real $p$, $(5p-1)^2=25p^2-10p+1$.""",
                True,
                r"""**B.** → True

Expand or factor with the named elementary identity; compare the result to the printed claim.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""The sum of the fourth power of $r$ and four times the fourth power of $a$ equals the square of $r^2+2a^2$ for every real pair $(r,a)$.""",
                False,
                r"""**C.** → False

The wording stops at a single square. Expand $r^2+2a^2$ and compare with $r^4+4a^4$ before accepting the verbal equality.

Expand the printed square:

$$(r^2+2a^2)^2=r^4+4r^2a^2+4a^4$$

The cross term $4r^2a^2$ is not present in $r^4+4a^4$.

The Sophie Germain rewrite must subtract $(2rs)^2$ after adding it — the wording stops one step too early.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real $m$, $(m+1)^2=m^2+1$ (variant 1).""",
                False,
                r"""**D.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
            (
                r"""The inequality $r^2+rs\ge rs+a^2$ holds for every real pair $(r,a)$.""",
                False,
                r"""**E.** → False

The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$r^2+rs-(rs+a^2) = r^2-a^2$$

$$= (r-a)(r+a)$$

The factorisation $(r-a)(r+a)$ is not a square, so the sign can change.

For $r=0$, $a=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Brahmagupta’s product against a cubed trinomial",
        "diff": "5/5",
        "overview": r"Five coefficient and product claims: a cubed-trinomial count, a Newton cube-sum, a Brahmagupta evaluation, an incomplete square, and a fourth-power middle.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real quadruple $(a,g,t,x)$, $(a^2+g^2)(t^2+x^2)=(ft-gx)^2+(fx+gt)^2$.""",
                True,
                r"""**A.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+g^2)(t^2+x^2)=(ft-gx)^2+(fx+gt)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters, so the statement is True.""",
            ),
            (
                r"""For every real $c$, $(3c-1)^2=9c^2-6c+1$.""",
                True,
                r"""**B.** → True

Expand or factor with the named elementary identity; compare the result to the printed claim.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""If $f+g=s$ and $fg=p$, then $f^2+g^2=s^2-2p$ for every real pair with sum $s$ and product $p$.""",
                True,
                r"""**C.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""The inequality $h^2-hk\ge hk-k^2$ holds for every real pair $(h,k)$.""",
                True,
                r"""**D.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $t$, $(t+1)^2=t^2+1$ (variant 2).""",
                False,
                r"""**E.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Brahmagupta’s product of two sums of squares",
        "diff": "5/5",
        "overview": r"Five hard identities: a Brahmagupta product, a vanishing first factor of the three-cube identity, a reciprocal cube, a missing half on squared gaps, and a scaled fourth-power middle.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $n$ factors as the product of $a^2-2mn+2n^2$ and $a^2+2mn+2n^2$ for every real pair $(a,n)$.""",
                True,
                r"""**A.** → True

The verbal claim is a Sophie Germain factorisation in $a$ and $n$. Insert $\pm 4a^2n^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$a^4+4n^4=(a^2+2n^2)^2-(2mn)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(a^2-2mn+2n^2)(a^2+2mn+2n^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum, so the statement is True.""",
            ),
            (
                r"""If $m^{-3}n^2=2$, then $\dfrac{m^8n^3}{m^2n^7}+3mn\cdot\dfrac{m^{-6}n^5}{m^7n^{-2}}=48.25$ for $m,n\neq 0$.""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""For every real $u$, $(2u-1)^2=4u^2-4u+1$.""",
                True,
                r"""**C.** → True

Expand or factor with the named elementary identity; compare the result to the printed claim.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real quadruple $(u,v,w,a)$, $(u^2+v^2)(w^2+a^2)=(uw-vz)^2+(uz+vw)^2$, under the standing domain label $D_{1}$.""",
                True,
                r"""**D.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(u^2+v^2)(w^2+a^2)=(uw-vz)^2+(uz+vw)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real pair $(x,y)$, $(x+y)^2=x^2+y^2$ (variant 2).""",
                False,
                r"""**E.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Completing the square under a leading coefficient two",
        "diff": "5/5",
        "overview": r"Five hard rewrites: a leading-two completed square, a scaled fourth-power coefficient, a three-letter square-sum, a fifth-power near-miss, and a degree mismatch.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Completing the square rewrites $2x^2-8x+10$ as $2(x-2)^2+2$ for every real $x$.""",
                True,
                r"""**A.** → True

Half of the linear coefficient $-8$ is $-4$, and $(-4)^2=16$.

Complete:

$$x^2-8x+10 = (x^2-8x+16)-6$$

$$= (x-4)^2-6$$

The leftover constant is $-6$, not zero.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""The inequality $a^2-xy\ge xy-y^2$ holds for every real pair $(a,y)$.""",
                True,
                r"""**B.** → True

The inequality compares two quadratic-looking sides in $a$ and $y$. Bring every term to one side and factor before deciding whether the difference is always nonnegative.

Rearrange to one side:

$$a^2-xy-(xy-y^2)=a^2-2xy+y^2$$

Collecting like terms exposes a perfect square.

Recognise the square:

$$(a-y)^2\ge 0$$

A square is nonnegative for every real pair.

Since the difference is a square, the inequality holds on the whole line, so the statement is True.""",
            ),
            (
                r"""For every real pair $(f,g)$, $(f+g)^2-(f-g)^2=4fg$.""",
                True,
                r"""**C.** → True

Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $h$, $(h+1)^2=h^2+1$.""",
                False,
                r"""**D.** → False

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is False.""",
            ),
            (
                r"""If $a^{-3}b^2=2$, then $\dfrac{a^8b^3}{a^2b^7}+3ab\cdot\dfrac{a^{-6}b^5}{a^7b^{-2}}=48$ for $a,b\neq 0$.""",
                False,
                r"""**E.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Factoring a biquadratic after a completed square",
        "diff": "5/5",
        "overview": r"Five hard checks: Sophie Germain’s completing step, a three-cube numerical test, a polarisation square, a degree mismatch, and a cubed-trinomial count.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Adding and subtracting $4x^2 y^2$ turns $x^4+4y^4$ into $(x^2+2y^2)^2-(2xy)^2$.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""For every real quadruple $(a,e,c,d)$, $(a^2+e^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$.""",
                True,
                r"""**B.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+e^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.

So the statement is True.""",
            ),
            (
                r"""The sum of the fourth power of $u$ and four times the fourth power of $v$ equals the square of $u^2+2v^2$ for every real pair $(u,v)$.""",
                False,
                r"""**C.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real $m$, $(m+1)^2=m^2+1$ (variant 2).""",
                False,
                r"""**D.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim, so the statement is False.""",
            ),
            (
                r"""The inequality $a^2+pq\ge pq+q^2$ holds for every real pair $(a,q)$.""",
                False,
                r"""**E.** → False

The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$a^2+pq-(pq+q^2) = a^2-q^2$$

$$= (a-q)(a+q)$$

The factorisation $(a-q)(a+q)$ is not a square, so the sign can change.

For $a=0$, $q=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "A cubic leftover after a cubed binomial is subtracted",
        "diff": "5/5",
        "overview": r"Five leftover checks: a cubed-binomial remainder, a vanishing-sum trap, a grouped difference of squares, a cyclic-product correction, and opposite binomials.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The sum of the fourth power of $m$ and four times the fourth power of $n$ factors as the product of $m^2-2mn+2n^2$ and $m^2+2mn+2n^2$ for every real pair $(m,n)$.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""Given $p+q+r=0$ with $p=4$, $q=-1$, sets $r=3$ and concludes $p^3+q^3+r^3=3pqr$.""",
                False,
                r"""**B.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""If $a^{-3}q^2=2$, then $\dfrac{a^8q^3}{a^2q^7}+3pq\cdot\dfrac{a^{-6}q^5}{a^7q^{-2}}=48.25$ for $a,q\neq 0$.""",
                True,
                r"""**C.** → True

The given relation $a^{-3}q^2=2$ does not determine the claim by inspection alone. Set $R=a^{-3}q^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{a^8q^3}{a^2q^7} = a^6q^{-4}$$

$$= R^{-2}$$

Powers of $a$ and $q$ collapse to a negative power of $R$.

Second summand:

$$3pq\cdot\frac{a^{-6}q^5}{a^7q^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4} = \tfrac{1}{4}+48$$

$$= \tfrac{193}{4} = 48.25$$

The small reciprocal term survives alongside the larger power term.

The printed value matches the fully reduced substitution, so the statement is True.""",
            ),
            (
                r"""Someone writes $(x+y)(y+z)(z+x)=(x+y+z)(xy+yz+zx)$, dropping the $-xyz$ correction.""",
                False,
                r"""**D.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real $t$, $(t+1)^2=t^2+1$ (variant 3).""",
                False,
                r"""**E.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Binomial identities — set 27",
        "diff": "5/5",
        "overview": r"""Five polarisation and power claims: a numerical $4mn$, a biquadratic factorisation, a reciprocal square, a reciprocal fourth power, and a cube-difference sign pattern.""",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $c$ equals the square of $a^2+2c^2$ for every real pair $(a,c)$.""",
                False,
                r"""**A.** → False

The wording stops at a single square. Expand $a^2+2c^2$ and compare with $a^4+4c^4$ before accepting the verbal equality.

Expand the printed square:

$$(a^2+2c^2)^2=a^4+4a^2c^2+4c^4$$

The cross term $4a^2c^2$ is not present in $a^4+4c^4$.

The Sophie Germain rewrite must subtract $(2ab)^2$ after adding it — the wording stops one step too early.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""If $p+q=s$ and $pq=p$, then $p^2+q^2=s^2-2p$ for every real pair with sum $s$ and product $p$ (variant 1).""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""The inequality $a^2+xy\ge xy+y^2$ holds for every real pair $(a,y)$.""",
                False,
                r"""**C.** → False

The printed inequality looks like a square identity, but the middle signs differ. Rearrange and factor before testing whether the difference keeps one sign.

Difference of the two sides:

$$a^2+xy-(xy+y^2) = a^2-y^2$$

$$= (a-y)(a+y)$$

The factorisation $(a-y)(a+y)$ is not a square, so the sign can change.

For $a=0$, $y=1$ the left side is $0$ and the right side is $1$, so the inequality fails on that pair.

So the statement is False.""",
            ),
            (
                r"""If $u^{-3}v^2=2$, then $\dfrac{u^8v^3}{u^2v^7}+3uv\cdot\dfrac{u^{-6}v^5}{u^7v^{-2}}=48$ for $u,v\neq 0$.""",
                False,
                r"""**D.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""The companion difference $(h+k)^3-(h-k)^3$ is rewritten as $2h(h^2+3k^2)$ as well.""",
                False,
                r"""**E.** → False

Set $A=m+n$ and $B=m-n$. Then $A-B=2n$ and

$$A^3-B^3=(A-B)(A^2+AB+B^2)$$

The quadratic factor expands to $3m^2+n^2$, so the difference is $2n(3m^2+n^2)$.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Hunting one mixed product in a shifted trinomial square",
        "diff": "5/5",
        "overview": r"Five coefficient and elementary-sum claims: a trinomial mixed term, a vanishing-sum trap, a three-cube specialisation, a dropped factor two, and a three-letter square-sum.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real pair $(r,s)$, $(r+s)^2-(r-s)^2=4rs$.""",
                True,
                r"""**A.** → True

Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""The inequality $u^2-uv\ge uv-v^2$ holds for every real pair $(u,v)$.""",
                True,
                r"""**B.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""For every real $f$, $(6f-1)^2=36f^2-12f+1$.""",
                True,
                r"""**C.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $q$ factors as the product of $a^2-2pq+2q^2$ and $a^2+2pq+2q^2$ for every real pair $(a,q)$.""",
                True,
                r"""**D.** → True

The verbal claim is a Sophie Germain factorisation in $a$ and $q$. Insert $\pm 4a^2q^2$ to create a difference of squares, then factor.

Complete to a difference of squares:

$$a^4+4q^4=(a^2+2q^2)^2-(2pq)^2$$

The middle term is borrowed and repaid inside one square minus another.

Factor:

$$=(a^2-2pq+2q^2)(a^2+2pq+2q^2)$$

Both quadratic factors match the wording of the claim.

The product reproduces the original fourth-power sum, so the statement is True.""",
            ),
            (
                r"""If $p+q+r=3$ and $pq+qr+rp=2$, then $p^2+q^2+r^2=7$.""",
                False,
                r"""**E.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "A biquadratic that is already a completed square",
        "diff": "5/5",
        "overview": r"Five hard recognitions: a biquadratic square, a Newton cube-sum, a grouping factorisation, a degree mismatch, and a squared Sophie Germain factor.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Recognising $x^4+2x^2 y^2+y^4$ as $(x^2+y^2)^2$ is valid for every real pair.""",
                True,
                r"""**A.** → True

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is True.""",
            ),
            (
                r"""For every real quadruple $(a,e,c,d)$, $(a^2+e^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$, under the standing domain label $D_{1}$.""",
                True,
                r"""**B.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+e^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters.

So the statement is True.""",
            ),
            (
                r"""Grouping $x^3+3x^2-x-3$ as $x^2(x+3)-(x+3)$ factors as $(x^2-1)(x+3)=(x-1)(x+1)(x+3)$.""",
                True,
                r"""**C.** → True

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""If $u^{-3}a^2=2$, then $\dfrac{u^8a^3}{u^2a^7}+3uv\cdot\dfrac{u^{-6}a^5}{u^7a^{-2}}=48$ for $u,a\neq 0$.""",
                False,
                r"""**D.** → False

The given relation $u^{-3}a^2=2$ does not determine the claim by inspection alone. Set $R=u^{-3}a^2$, rewrite each summand in terms of $R$, and only then substitute $R=2$.

First summand:

$$\frac{u^8a^3}{u^2a^7} = u^6a^{-4}$$

$$= R^{-2}$$

Powers of $u$ and $a$ collapse to a negative power of $R$.

Second summand:

$$3uv\cdot\frac{u^{-6}a^5}{u^7a^{-2}}=3R^{4}$$

The mixed monomial piece also becomes a pure power of $R$.

Combine before substituting:

$$R^{-2}+3R^{4}$$

Both summands must be present; dropping either one changes the final value.

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4} = \tfrac{1}{4}+48$$

$$= \tfrac{193}{4} = 48.25$$

The small reciprocal term survives alongside the larger power term.

Dropping the summand $R^{-2}=\tfrac{1}{4}$ leaves $48$, which is not the value of the original expression, so the statement is False.""",
            ),
            (
                r"""The inequality $a^2+ab\ge ab+b^2$ holds for every real pair $(a,b)$.""",
                False,
                r"""**E.** → False

Expand or factor with the named elementary identity; compare the result to the printed claim, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.1",
        "title": "Walking around three squared differences",
        "diff": "5/5",
        "overview": r"Five closing checks: a half-sum of squared gaps, a squared Sophie Germain factor, a cube-sum identity, a cube-difference trap, and a vanishing-sum slip.",
        "context": r"""Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $r$, $(7r-1)^2=49r^2-14r+1$.""",
                True,
                r"""**A.** → True

Expand or factor with the named elementary identity; compare the result to the printed claim.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""prints $x^4+4=(x^2+2x+2)^2$ for every real $x$.""",
                False,
                r"""**B.** → False

Apply the relevant binomial or factor identity: $(a+b)^2=a^2+2ab+b^2$.

So the statement is False.""",
            ),
            (
                r"""The inequality $m^2+mn\ge mn+n^2$ holds for every real pair $(m,n)$.""",
                False,
                r"""**C.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real pair $(h,k)$, $(h+k)^2=h^2+k^2$ (variant 2).""",
                False,
                r"""**D.** → False

Apply the relevant binomial or factor identity:

$$(a+b)^2=a^2+2ab+b^2$$

So the statement is False.""",
            ),
            (
                r"""For every real quadruple $(a,n,h,k)$, $(a^2+n^2)(h^2+k^2)=(mh-nk)^2+(mk+nh)^2$.""",
                True,
                r"""**E.** → True

The claim is Brahmagupta's product of two sums of squares in four letters. Expand both sides or verify the standard cross pairing.

Brahmagupta identity:

$$(a^2+n^2)(h^2+k^2)=(mh-nk)^2+(mk+nh)^2$$

The pairings $(ac-bd)$ and $(ad+bc)$ are forced by the product structure.

Both sides match as an identity in the four letters, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Warm-up: adding two fractions",
        "diff": "1/5",
        "overview": r"Five LCD additions with a wrong common denominator on one line.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Adding reciprocals: for $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{a+b}{ab}$.""",
                True,
                r"""**A.** → True

Least common denominator of $a$ and $b$ is their product, not their sum $a+b$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Cross-multiplying gives $\dfrac{2}{x}+\dfrac{3}{y}=\dfrac{2y+3x}{xy}$ for $x,y\neq 0$.""",
                True,
                r"""**B.** → True

Least common denominator of $x$ and $y$ is the product $xy$:

$$\frac{\cdots}{x}+\frac{\cdots}{y}=\frac{\cdots}{xy}$$

Adding numerators over added denominators is not an identity, so the statement is True.""",
            ),
            (
                r"""For $p,q\neq 0$, the sum $\dfrac{p}{q}+\dfrac{q}{p}$ equals $\dfrac{p^2+q^2}{pq}$.""",
                True,
                r"""**C.** → True

Over $hk\neq 0$ the true combination is $\frac{h}{k}+\frac{k}{h}=\frac{h^2+k^2}{hk}$. Squaring the sum in the numerator would add a cross term $2hk$.

So the statement is True.""",
            ),
            (
                r"""Using $m+n$ as a common denominator is wrong: for $m,n\neq 0$, $\dfrac{1}{m}+\dfrac{1}{n}=\dfrac{1}{m+n}$ is false.""",
                False,
                r"""**D.** → False

Clear to the product denominator:

LCD:

$$m\cdot n$$

Combine:

$$\frac{\cdots}{m}+\frac{\cdots}{n}=\frac{\cdots}{mn}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Clearing to $uv$, one has $\dfrac{4}{u}+\dfrac{1}{v}=\dfrac{4v+u}{uv}$ for $u,v\neq 0$.""",
                True,
                r"""**E.** → True

Clear to the product denominator:

LCD:

$$u\cdot v$$

Combine:

$$\frac{\cdots}{u}+\frac{\cdots}{v}=\frac{\cdots}{uv}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Warm-up: cancelling a common factor",
        "diff": "1/5",
        "overview": r"Five difference-of-squares cancellations, including one sign error.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""After cancelling, for $x\neq 3$, $\dfrac{x^2-9}{x-3}=x+3$.""",
                True,
                r"""**A.** → True

Difference of squares (or another factorisation) clears the denominator:

$$\frac{x^2-9}{x-3}$$

The surviving expression is the true remainder on the stated domain.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $t\neq -2$, simplifying $\dfrac{t^2-4}{t+2}$ leaves $t-2$.""",
                True,
                r"""**B.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""Removing the factor $a-5$ gives $\dfrac{a^2-25}{a-5}=a+5$ for $a\neq 5$.""",
                True,
                r"""**C.** → True

Difference of squares (or another factorisation) clears the denominator:

$$\frac{a^2-25}{a-5}$$

The surviving expression is the true remainder on the stated domain.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $k\neq 1$, the quotient $\dfrac{k^2-1}{k-1}$ simplifies to $k+1$.""",
                True,
                r"""**D.** → True

Least common denominator of $t$ and $u$ is the product $tu$:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Adding numerators over added denominators is not an identity, so the statement is True.""",
            ),
            (
                r"""A sign slip makes $\dfrac{x^2-4}{x-2}=x-2$ false for $x\neq 2$.""",
                False,
                r"""**E.** → False

Least common denominator of $t$ and $u$ is their product, not their sum $t+u$, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Warm-up: product of simple fractions",
        "diff": "2/5",
        "overview": r"Five monomial fraction products with one false zero claim.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Multiplying monomial fractions: for $a,b\neq 0$, $\dfrac{3a}{2b}\cdot\dfrac{4b}{3a}=2$.""",
                True,
                r"""**A.** → True

Least common denominator of $2b$ and $3a$ is the product $2b3a$:

$$\frac{\cdots}{2b}+\frac{\cdots}{3a}=\frac{\cdots}{2b3a}$$

Adding numerators over added denominators is not an identity, so the statement is True.""",
            ),
            (
                r"""For $x,y\neq 0$, $\dfrac{2x}{y}\cdot\dfrac{y}{4x}=\dfrac{1}{2}$.""",
                True,
                r"""**B.** → True

Least common denominator of $y$ and $4x$ is the product $y4x$:

$$\frac{\cdots}{y}+\frac{\cdots}{4x}=\frac{\cdots}{y4x}$$

Adding numerators over added denominators is not an identity.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Reciprocal factors collapse: for $p,q\neq 0$, $\dfrac{5p}{q}\cdot\dfrac{q}{5p}=1$.""",
                True,
                r"""**C.** → True

Difference of squares (or another factorisation) clears the denominator: $\frac{5p}{q}$. The surviving expression is the true remainder on the stated domain.

So the statement is True.""",
            ),
            (
                r"""For $m,n\neq 0$, the product $\dfrac{m}{n}\cdot\dfrac{n}{m}$ equals $0$ (false).""",
                False,
                r"""**D.** → False

Clear to the product denominator:

LCD:

$$n\cdot m$$

Combine:

$$\frac{\cdots}{n}+\frac{\cdots}{m}=\frac{\cdots}{nm}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $u,v\neq 0$, $\dfrac{6u}{v}\cdot\dfrac{v}{3u}=2$.""",
                True,
                r"""**E.** → True

Least common denominator of $v$ and $3u$ is their product, not their sum $v+3u$, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Warm-up: partial fraction split on $x^2-1$",
        "diff": "2/5",
        "overview": r"Five partial-fraction decompositions with a missing one-half factor on one line.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Decomposing over $x^2-1$: for $x\neq\pm 1$, $\dfrac{1}{x^2-1}=\dfrac{1}{2(x-1)}-\dfrac{1}{2(x+1)}$.""",
                True,
                r"""**A.** → True

Clear to the product denominator:

LCD:

$$x^2-1\cdot 2(x-1)$$

Combine:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{2(x-1)}=\frac{\cdots}{x^2-12(x-1)}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Doubling the numerator, for $x\neq\pm 1$, $\dfrac{2}{x^2-1}=\dfrac{1}{x-1}-\dfrac{1}{x+1}$.""",
                True,
                r"""**B.** → True

Least common denominator of $x^2-1$ and $x-1$ is the product $x^2-1x-1$:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{x-1}=\frac{\cdots}{x^2-1x-1}$$

Adding numerators over added denominators is not an identity.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{3}{x^2-1}=\dfrac{3}{2(x-1)}-\dfrac{3}{2(x+1)}$.""",
                True,
                r"""**C.** → True

Least common denominator of $x^2-1$ and $2(x-1)$ is the product $x^2-12(x-1)$:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{2(x-1)}=\frac{\cdots}{x^2-12(x-1)}$$

Adding numerators over added denominators is not an identity, so the statement is True.""",
            ),
            (
                r"""Omitting the factor $\tfrac12$ makes $\dfrac{1}{x^2-1}=\dfrac{1}{x-1}-\dfrac{1}{x+1}$ false for $x\neq\pm 1$.""",
                False,
                r"""**D.** → False

Difference of squares (or another factorisation) clears the denominator: $\frac{1}{x^2-1}$. The surviving expression is the true remainder on the stated domain.

So the statement is False.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{4}{x^2-1}=\dfrac{2}{x-1}-\dfrac{2}{x+1}$.""",
                True,
                r"""**E.** → True

Least common denominator of $x^2-1$ and $x-1$ is their product, not their sum $x^2-1+x-1$, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Cancelled factor kept as the remainder",
        "diff": "3/5",
        "overview": r"Five independent fraction claims. A cancelled linear factor is not the remainder; an LCD is a product; striking a letter that is not a factor of every term fails even if a single test point hides the error.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The stacked quotient $\dfrac{\dfrac{8a^2b}{4x^2-16}}{\dfrac{4ab}{2x+4}}$ simplifies to $\dfrac{a}{x-2}$ for $x\neq\pm 2$ and $a,b\neq 0$.""",
                True,
                r"""**A.** → True

Clear to the product denominator:

LCD:

$$4x^2-16\cdot 2x+4$$

Combine:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $m\neq 0$, $\dfrac{4(9m)}{(-9m)^2}=\dfrac{4}{9m}$.""",
                True,
                r"""**B.** → True

The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-9m)^2$.

Square the denominator:

$$(-9m)^2=81m^2$$

The denominator becomes a positive power of $m$.

Reduce the quotient:

$$\frac{4}{9 m}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Let $x$ be a nonzero real number. Twice the reciprocal of the sum of $x$ and the reciprocal of $x$ equals twice $x$ divided by the sum of the square of $x$ and one.""",
                True,
                r"""**C.** → True

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

So the statement is True.""",
            ),
            (
                r"""For $m,n\neq 0$, $\dfrac{m}{n}+\dfrac{n}{m}=\dfrac{m^2+n^2}{mn}$.""",
                True,
                r"""**D.** → True

Over $hk\neq 0$ the true combination is $\frac{h}{k}+\frac{k}{h}=\frac{h^2+k^2}{hk}$. Squaring the sum in the numerator would add a cross term $2hk$.

So the statement is True.""",
            ),
            (
                r"""Let $k$ be a nonzero real letter. Twice the reciprocal of the sum of $k$ and the reciprocal of $k$ equals $k$ divided by the sum of the square of $k$ and one.""",
                False,
                r"""**E.** → False

The statement is entirely worded. Translate each English phrase into symbols for $k\neq 0$ before comparing the two sides.

Left-hand wording:

$$\frac{2}{k+\frac{1}{k}}=\frac{2k}{k^2+1}$$

Twice the reciprocal of $k+\dfrac{1}{k}$ clears to a single rational expression.

Right-hand wording:

$$\frac{k}{k^2+1}$$

The claim's right side must be read from the same verbal description.

The right-hand wording omits the factor $2$ in the numerator; the two sides disagree only after both have been written in symbols, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "LCD taken as a sum of denominators",
        "diff": "3/5",
        "overview": r"Common denominators are products of the distinct denominator factors. Adding numerators over added denominators, or using a sum of coefficients as an LCD, both fail; equal denominators really do add in the numerators.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r,s\neq 0$, $\dfrac{1}{r}+\dfrac{1}{s}=\dfrac{1}{r+s}$.""",
                False,
                r"""**A.** → False

Least common denominator of $r$ and $s$ is their product, not their sum $r+s$.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Provided $x\neq 0$, the sum $\dfrac{3}{x}+\dfrac{5}{x}$ equals $\dfrac{8}{x}$.""",
                True,
                r"""**B.** → True

Least common denominator of $x$ and $x$ is the product $xx$. Adding numerators over added denominators is not an identity.

So the statement is True.""",
            ),
            (
                r"""For $h,k,s\neq 0$, $\dfrac{3ks}{4h}\cdot\dfrac{2h^3k^2}{5}\div\dfrac{3(hk)^2}{4s}=\dfrac{2ks}{5}$.""",
                False,
                r"""**C.** → False

The claim chains three monomial fractions in $h$, $k$, and $s$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3ks}{4h}\cdot\frac{2h^3k^2}{5}\cdot\frac{4s}{3h^2k^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 k s^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

After every cancellation the surviving power of $s$ is $s^2$, so the printed right-hand side (missing that power) fails.

So the statement is False.""",
            ),
            (
                r"""For $r,s\neq 0$ and $r\neq -s$, $\dfrac{2}{r}+\dfrac{9}{s}=\dfrac{2s+9r}{r+s}$.""",
                False,
                r"""**D.** → False

Clear to the product denominator:

LCD:

$$r\cdot s$$

Combine:

$$\frac{\cdots}{r}+\frac{\cdots}{s}=\frac{\cdots}{rs}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Clearing $\dfrac{1}{3h}+\dfrac{1}{6h}$ for $h\neq 0$ equals $\dfrac{1}{2h}$.""",
                True,
                r"""**E.** → True

Least common denominator of $3h$ and $6h$ is the product $3h6h$:

$$\frac{\cdots}{3h}+\frac{\cdots}{6h}=\frac{\cdots}{3h6h}$$

Adding numerators over added denominators is not an identity, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "A letter struck from only one term",
        "diff": "3/5",
        "overview": r"A letter may be cancelled only when it is a factor of every term. Splitting a sum over a shared denominator is legal; keeping a cancelled linear factor as the remainder is not.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $a,b\neq 0$ and $a\neq -b$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{b+a}{a+b}$.""",
                False,
                r"""**A.** → False

The numerator of the claimed sum has the right cross-multiply form, but the denominator is $a+b$ instead of $ab$. Clear with the product denominator first.

Correct combination:

$$\frac{1}{a}+\frac{1}{b}=\frac{1b+1a}{ab}$$

Only $ab$ is the common denominator for unrelated linear factors.

The printed denominator $a+b$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{7x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{3}{x-1}-\dfrac{1}{1-x}=\dfrac{7}{x-1}$.""",
                False,
                r"""**B.** → False

Least common denominator of $x^2-1$ and $1+x$ is the product $x^2-11+x$: $\frac{\cdots}{x^2-1}+\frac{\cdots}{1+x}=\frac{\cdots}{x^2-11+x}$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $1$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{1}{2}$ over $x-1$ and $\dfrac{1}{2}$ over $x+1$.""",
                True,
                r"""**C.** → True

The words describe a partial-fraction split of $\dfrac{1}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{1}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$\dfrac{1}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{1}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator, so the statement is True.""",
            ),
            (
                r"""For $q\neq 0$, $\dfrac{4(2q)}{(-2q)^2}=\dfrac{2}{q}$.""",
                True,
                r"""**D.** → True

Least common denominator of $(-2q)^2$ and $q$ is their product, not their sum $(-2q)^2+q$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{x+3}{x^2-1}-\dfrac{1}{x+1}=\dfrac{2}{x-1}$.""",
                True,
                r"""**E.** → True

Least common denominator of $x^2-1$ and $x+1$ is the product $x^2-1x+1$:

$$\frac{\cdots}{x^2-1}+\frac{\cdots}{x+1}=\frac{\cdots}{x^2-1x+1}$$

Adding numerators over added denominators is not an identity, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Nested unit fraction with a swapped report",
        "diff": "3/5",
        "overview": r"""A continued unit fraction is cleared from the inside. Plus and minus nests produce $z/(z+1)$ and $t/(t-1)$ respectively; swapping a cleared nest with its reciprocal, or dropping a binomial cross term, both fail.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r,s\neq 0$, $\dfrac{1}{r}+\dfrac{1}{s}=\dfrac{1}{r+s}$ (variant 1).""",
                False,
                r"""**A.** → False

Least common denominator of $r$ and $s$ is their product, not their sum $r+s$.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Collapsing $\dfrac{1}{1+\dfrac{1}{z}}$ for $z\neq 0,-1$ equals $\dfrac{z}{z+1}$.""",
                True,
                r"""**B.** → True

Least common denominator of $z$ and $z+1$ is the product $zz+1$: $\frac{\cdots}{z}+\frac{\cdots}{z+1}=\frac{\cdots}{zz+1}$. Adding numerators over added denominators is not an identity.

So the statement is True.""",
            ),
            (
                r"""Someone rewrites $\dfrac{1}{1-\dfrac{1}{t}}$ for $t\neq 0,1$ as $\dfrac{t}{t+1}$.""",
                False,
                r"""**C.** → False

Least common denominator of $t$ and $t+1$ is the product $tt+1$:

$$\frac{\cdots}{t}+\frac{\cdots}{t+1}=\frac{\cdots}{tt+1}$$

Adding numerators over added denominators is not an identity.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $8$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $4$ over $x-1$ and $4$ over $x+1$.""",
                True,
                r"""**D.** → True

The words describe a partial-fraction split of $\dfrac{8}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{8}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$4\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{8}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator, so the statement is True.""",
            ),
            (
                r"""For $f,g,h\neq 0$, $\dfrac{3gh}{4f}\cdot\dfrac{2f^3g^2}{5}\div\dfrac{3(fg)^2}{4h}=\dfrac{2gh^2}{5}$.""",
                True,
                r"""**E.** → True

Clear to the product denominator:

LCD:

$$4f\cdot 5$$

Combine:

$$\frac{\cdots}{4f}+\frac{\cdots}{5}=\frac{\cdots}{4f5}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Test point after a difference-of-squares cancel",
        "diff": "3/5",
        "overview": r"""A cancelled linear factor is not the remainder. Difference of cubes produces $k^2+3k+9$; flipping the middle sign, or equating a cancelled remainder to an unrelated plus-denominator fraction, both fail.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq\pm 2$, $\dfrac{1}{x-2}-\dfrac{1}{x+2}=\dfrac{4}{x^2-4}$.""",
                True,
                r"""**A.** → True

Least common denominator of $x-2$ and $x+2$ is the product $x-2x+2$: $\frac{\cdots}{x-2}+\frac{\cdots}{x+2}=\frac{\cdots}{x-2x+2}$. Adding numerators over added denominators is not an identity.

So the statement is True.""",
            ),
            (
                r"""For $h,s,k\neq 0$, $\dfrac{3sk}{4h}\cdot\dfrac{2h^3s^2}{5}\div\dfrac{3(hs)^2}{4k}=\dfrac{2sk}{5}$.""",
                False,
                r"""**B.** → False

The claim chains three monomial fractions in $h$, $s$, and $k$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3sk}{4h}\cdot\frac{2h^3s^2}{5}\cdot\frac{4k}{3h^2s^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 k^{2} s}{5}$$

Track every letter exponent through the product before reading off the monomial.

After every cancellation the surviving power of $k$ is $k^2$, so the printed right-hand side (missing that power) fails.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $p,q\neq 0$, $\dfrac{4}{p}+\dfrac{5}{q}=\dfrac{4q+5p}{pq}$.""",
                True,
                r"""**C.** → True

Least common denominator of $p$ and $q$ is their product, not their sum $p+q$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8p^2b}{4x^2-16}}{\dfrac{4pb}{2x+4}}$ simplifies to $\dfrac{p}{x-2}$ for $x\neq\pm 2$ and $p,b\neq 0$.""",
                True,
                r"""**D.** → True

The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8p^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4pb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{p}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$, so the statement is True.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $6$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $6$ over $x-1$ and $6$ over $x+1$.""",
                False,
                r"""**E.** → False

Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Binomial square missing the doubled cross term",
        "diff": "3/5",
        "overview": r"""A binomial square always produces a doubled cross term. The combination $h/k+k/h-2$ is a genuine square in the numerator; keeping a cancelled factor $y-3$ as the remainder is not.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $a,b\neq 0$, $\dfrac{2a}{b}+\dfrac{3b}{a}=\dfrac{2a^2+3b^2}{ab}$.""",
                True,
                r"""**A.** → True

Least common denominator of $b$ and $a$ is the product $ba$:

$$\frac{\cdots}{b}+\frac{\cdots}{a}=\frac{\cdots}{ba}$$

Adding numerators over added denominators is not an identity.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Expanding $\bigl(1-\dfrac{1}{u}\bigr)^2$ on $u\neq 0$ equals $1-\dfrac{2}{u}+\dfrac{1}{u^2}$.""",
                True,
                r"""**B.** → True

Clear to the product denominator:

LCD:

$$u\cdot u$$

Combine:

$$\frac{\cdots}{u}+\frac{\cdots}{u}=\frac{\cdots}{uu}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Provided $v\neq 0$, rewriting $\bigl(v+\dfrac{1}{v}\bigr)^2$ as $v^2+\dfrac{1}{v^2}$.""",
                False,
                r"""**C.** → False

Least common denominator of $v$ and $v^2$ is the product $vv^2$:

$$\frac{\cdots}{v}+\frac{\cdots}{v^2}=\frac{\cdots}{vv^2}$$

Adding numerators over added denominators is not an identity, so the statement is False.""",
            ),
            (
                r"""After cancelling a factor of $\dfrac{5y^2-45}{y-3}$ for $y\neq 3$, the remainder $5y-15$ is recorded.""",
                False,
                r"""**D.** → False

Difference of squares (or another factorisation) clears the denominator: $\frac{5y^2-45}{y-3}$. The surviving expression is the true remainder on the stated domain.

So the statement is False.""",
            ),
            (
                r"""For $q\neq 0$, $\dfrac{4(6q)}{(-6q)^2}=\dfrac{4}{6q}$.""",
                True,
                r"""**E.** → True

The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-6q)^2$.

Square the denominator:

$$(-6q)^2=36q^2$$

The denominator becomes a positive power of $q$.

Reduce the quotient:

$$\frac{2}{3 q}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Twice a reciprocal without an arithmetic mean",
        "diff": "3/5",
        "overview": r"""Twice the reciprocal of a sum of unit fractions is $2hk/(h+k)$, which is not the arithmetic mean $(h+k)/2$. Striking a letter from only one term of a numerator still fails.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Let $x$ be a nonzero real number. Twice the reciprocal of the sum of $x$ and the reciprocal of $x$ equals $x$ divided by the sum of the square of $x$ and one.""",
                False,
                r"""**A.** → False

Least common denominator of $t$ and $u$ is the product $tu$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
            (
                r"""For $p,q\neq 0$, $\dfrac{1}{p}+\dfrac{1}{q}=\dfrac{1}{p+q}$ (variant 1).""",
                False,
                r"""**B.** → False

Least common denominator of $p$ and $q$ is their product, not their sum $p+q$.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $2$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $2$ over $x-1$ and $2$ over $x+1$.""",
                False,
                r"""**C.** → False

The verbal decomposition puts the full numerator $2$ on each partial fraction. Clear that difference and compare with $\dfrac{2}{x^2-1}$.

Combine the printed partials:

$$\frac{2}{x-1}-\frac{2}{x+1}=\frac{22}{x^2-1}$$

The common denominator $(x-1)(x+1)$ doubles the intended numerator.

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $m,t,n\neq 0$, $\dfrac{3tn}{4m}\cdot\dfrac{2m^3t^2}{5}\div\dfrac{3(mt)^2}{4n}=\dfrac{2tn^2}{5}$.""",
                True,
                r"""**D.** → True

Clear to the product denominator:

LCD:

$$4m\cdot 5$$

Combine:

$$\frac{\cdots}{4m}+\frac{\cdots}{5}=\frac{\cdots}{4m5}$$

So the statement is True.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{8x-4}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{8}{x-1}$.""",
                False,
                r"""**E.** → False

The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{8x-4}{x^2-1}-\frac{2}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{9 x + 1}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{9 x + 1}{x^{2} - 1}$, not $\dfrac{8}{x-1}$. The discrepancy appears only at the last coefficient, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Cubic remainder checked at a vanishing test point",
        "diff": "3/5",
        "overview": r"""A cubic-over-linear difference of cubes cancels to a quadratic whose value at $0$ matches the original fraction. An LCD is still a product; a cancelled linear factor is still not the remainder.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $p,q,r\neq 0$, $\dfrac{3qr}{4p}\cdot\dfrac{2p^3q^2}{5}\div\dfrac{3(pq)^2}{4r}=\dfrac{2qr^2}{5}$.""",
                True,
                r"""**A.** → True

The claim chains three monomial fractions in $p$, $q$, and $r$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3qr}{4p}\cdot\frac{2p^3q^2}{5}\cdot\frac{4r}{3p^2q^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 q r^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial, so the statement is True.""",
            ),
            (
                r"""For $m,n\neq 0$, $\dfrac{5}{m}+\dfrac{2}{n}=\dfrac{5n+2m}{mn}$.""",
                True,
                r"""**B.** → True

Least common denominator of $m$ and $n$ is the product $mn$:

$$\frac{\cdots}{m}+\frac{\cdots}{n}=\frac{\cdots}{mn}$$

Adding numerators over added denominators is not an identity.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $f\neq 4$, $\dfrac{f^2-16}{f-4}=f+4$.""",
                True,
                r"""**C.** → True

Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Rewriting $\dfrac{h}{k}+\dfrac{k}{h}$ on $hk\neq 0$ as $\dfrac{(h+k)^2}{hk}$.""",
                False,
                r"""**D.** → False

Over $hk\neq 0$ the true combination is $\frac{h}{k}+\frac{k}{h}=\frac{h^2+k^2}{hk}$. Squaring the sum in the numerator would add a cross term $2hk$.

So the statement is False.""",
            ),
            (
                r"""Whenever $z\neq 6$, cancelling in $\dfrac{z^2-36}{z-6}$ is treated as leaving $z-6$.""",
                False,
                r"""**E.** → False

Difference of squares (or another factorisation) clears the denominator:

$$\frac{z^2-36}{z-6}$$

The surviving expression is the true remainder on the stated domain, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Difference of reciprocals over reciprocal squares",
        "diff": "4/5",
        "overview": r"""A difference of unit fractions over a difference of reciprocal squares cancels to $tu/(t+u)$. A sign slip on $w-v$, or claiming that a cancelled remainder disagrees with the original at a legal test point, both fail.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $5$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $5$ over $x-1$ and $5$ over $x+1$.""",
                False,
                r"""**A.** → False

The verbal decomposition puts the full numerator $5$ on each partial fraction. Clear that difference and compare with $\dfrac{5}{x^2-1}$.

Combine the printed partials:

$$\frac{5}{x-1}-\frac{5}{x+1}=\frac{25}{x^2-1}$$

The common denominator $(x-1)(x+1)$ doubles the intended numerator.

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term, so the statement is False.""",
            ),
            (
                r"""For $s\neq 0$, $\dfrac{4(8s)}{(-8s)^2}=\dfrac{4}{8s}$.""",
                True,
                r"""**B.** → True

Least common denominator of $(-8s)^2$ and $8s$ is their product, not their sum $(-8s)^2+8s$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Provided $x\neq 0$, the difference $\dfrac{1}{x^2}-\dfrac{1}{(x+1)^2}$ equals $\dfrac{2x+1}{x^2(x+1)^2}$.""",
                True,
                r"""**C.** → True

Least common denominator of $x^2$ and $(x+1)^2$ is the product $x^2(x+1)^2$: $\frac{\cdots}{x^2}+\frac{\cdots}{(x+1)^2}=\frac{\cdots}{x^2(x+1)^2}$. Adding numerators over added denominators is not an identity.

So the statement is True.""",
            ),
            (
                r"""For $r\neq 0$, $\dfrac{4(9r)}{(-9r)^2}=\dfrac{4}{9r}$.""",
                True,
                r"""**D.** → True

The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-9r)^2$.

Square the denominator:

$$(-9r)^2=81r^2$$

The denominator becomes a positive power of $r$.

Reduce the quotient:

$$\frac{4}{9 r}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Let $u$ be a nonzero real number. Twice the reciprocal of the sum of $u$ and the reciprocal of $u$ equals twice $u$ divided by the sum of the square of $u$ and one.""",
                True,
                r"""**E.** → True

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Compound fraction whose simplified ratio is flipped",
        "diff": "4/5",
        "overview": r"""A compound fraction is two ordinary layers: collapse each, then multiply by the reciprocal of the lower layer. A ratio minus its reciprocal over $v^2-9$ produces $12v$, not $6v$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r\neq 5$, $\dfrac{r^2-25}{r-5}=r+5$.""",
                True,
                r"""**A.** → True

Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $7$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $7$ over $x-1$ and $7$ over $x+1$.""",
                False,
                r"""**B.** → False

The verbal decomposition puts the full numerator $7$ on each partial fraction. Clear that difference and compare with $\dfrac{7}{x^2-1}$.

Combine the printed partials:

$$\frac{7}{x-1}-\frac{7}{x+1}=\frac{27}{x^2-1}$$

The common denominator $(x-1)(x+1)$ doubles the intended numerator.

Twice the intended numerator appears — the factor $\tfrac{1}{2}$ was omitted in the wording of each partial term, so the statement is False.""",
            ),
            (
                r"""For $u,v,w\neq 0$, $\dfrac{3vw}{4u}\cdot\dfrac{2u^3v^2}{5}\div\dfrac{3(uv)^2}{4w}=\dfrac{2vw}{5}$.""",
                False,
                r"""**C.** → False

Clear to the product denominator:

LCD:

$$4u\cdot 5$$

Combine:

$$\frac{\cdots}{4u}+\frac{\cdots}{5}=\frac{\cdots}{4u5}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Whenever $v\neq \pm 3$, someone writes $\dfrac{v+3}{v-3}-\dfrac{v-3}{v+3}=\dfrac{6v}{v^2-9}$.""",
                False,
                r"""**D.** → False

Least common denominator of $v-3$ and $v+3$ is the product $v-3v+3$:

$$\frac{\cdots}{v-3}+\frac{\cdots}{v+3}=\frac{\cdots}{v-3v+3}$$

Adding numerators over added denominators is not an identity, so the statement is False.""",
            ),
            (
                r"""Collapsing $\dfrac{1}{1-\dfrac{1}{w}}$ for $w\neq 0,1$ equals $\dfrac{w}{w-1}$.""",
                True,
                r"""**E.** → True

Least common denominator of $w$ and $w-1$ is the product $ww-1$: $\frac{\cdots}{w}+\frac{\cdots}{w-1}=\frac{\cdots}{ww-1}$. Adding numerators over added denominators is not an identity.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Three poles sharing a product LCD",
        "diff": "4/5",
        "overview": r"The LCD of three distinct linear denominators is their product; expanding produces a quadratic whose constant term is easy to drop. Cancelling one linear factor from a quadratic ratio leaves the other factor, not the cancelled one.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $u,v\neq 0$, $\dfrac{3u}{2v}\cdot\dfrac{4v^2}{9u}=2v$.""",
                False,
                r"""**A.** → False

Least common denominator of $2v$ and $9u$ is their product, not their sum $2v+9u$.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8m^2b}{4x^2-16}}{\dfrac{4mb}{2x+4}}$ simplifies to $\dfrac{m}{x+2}$ for $x\neq\pm 2$ and $m,b\neq 0$.""",
                False,
                r"""**B.** → False

The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8m^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4mb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{m}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder, so the statement is False.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $5$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{5}{2}$ over $x-1$ and $\dfrac{5}{2}$ over $x+1$.""",
                True,
                r"""**C.** → True

Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$2\cdot 2$$

Combine:

$$\frac{\cdots}{2}+\frac{\cdots}{2}=\frac{\cdots}{22}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""After factoring $\dfrac{v-3}{v^2-8v+15}$ for $v\neq 3,5$, a reduction to $\dfrac{1}{v-5}$ is recorded.""",
                True,
                r"""**D.** → True

Difference of squares (or another factorisation) clears the denominator: $\frac{v-3}{v^2-8v+15}$. The surviving expression is the true remainder on the stated domain.

So the statement is True.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $2$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $1$ over $x-1$ and $1$ over $x+1$.""",
                True,
                r"""**E.** → True

The words describe a partial-fraction split of $\dfrac{2}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{2}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$1\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{2}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Continued nest that lands on a linear remainder",
        "diff": "4/5",
        "overview": r"""A three-layer minus nest of unit fractions simplifies to $1-x$; the matching plus nest simplifies to $(u+1)/(2u+1)$. Dropping the $2$ when squaring $h+1/h$, or keeping a cancelled factor as the remainder, both fail.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Clearing the nest $\dfrac{1}{1-\dfrac{1}{1-\dfrac{1}{x}}}$ for $x\neq 0,1$ equals $1-x$.""",
                True,
                r"""**A.** → True

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $c,d\neq 0$, $\dfrac{2}{c}+\dfrac{4}{d}=\dfrac{2d+4c}{cd}$.""",
                True,
                r"""**B.** → True

Least common denominator of $c$ and $d$ is the product $cd$. Adding numerators over added denominators is not an identity.

So the statement is True.""",
            ),
            (
                r"""For $s\neq 0$, $\dfrac{4(4s)}{(-4s)^2}=-\dfrac{4}{4s}$.""",
                False,
                r"""**C.** → False

The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-4s)^2$.

Square the denominator:

$$(-4s)^2=16s^2$$

The denominator becomes a positive power of $s$.

Reduce the quotient:

$$\frac{1}{s}$$

Cancel the common power of the variable against the numerator.

A minus sign on the right-hand side cannot survive: the squared factor is positive, so the statement is False.""",
            ),
            (
                r"""Let $w$ be a nonzero real quantity. Twice the reciprocal of the sum of $w$ and the reciprocal of $w$ equals $w$ divided by the sum of the square of $w$ and one.""",
                False,
                r"""**D.** → False

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $t,w\neq 0$, $\dfrac{1}{t}+\dfrac{1}{w}=\dfrac{1}{t+w}$.""",
                False,
                r"""**E.** → False

Least common denominator of $t$ and $w$ is the product $tw$:

$$\frac{\cdots}{t}+\frac{\cdots}{w}=\frac{\cdots}{tw}$$

Adding numerators over added denominators is not an identity, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Stacked negative powers missing a leftover factor",
        "diff": "4/5",
        "overview": r"""A stack of negative powers is two ordinary fractions. Multiply by the reciprocal of the lower layer; dropping a leftover factor $x$, or using the wrong common power, both fail. Difference of cubes still cancels to $w^2+3w+9$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $3$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{3}{2}$ over $x-1$ and $\dfrac{3}{2}$ over $x+1$.""",
                True,
                r"""**A.** → True

The words describe a partial-fraction split of $\dfrac{3}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{3}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$\dfrac{3}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{3}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $a,c,b\neq 0$, $\dfrac{3cb}{4a}\cdot\dfrac{2a^3c^2}{5}\div\dfrac{3(ac)^2}{4b}=\dfrac{2cb}{5}$.""",
                False,
                r"""**B.** → False

Clear to the product denominator:

LCD:

$$4a\cdot 5$$

Combine:

$$\frac{\cdots}{4a}+\frac{\cdots}{5}=\frac{\cdots}{4a5}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{2x-2}{x^2-1}-\dfrac{1}{1+x}+\dfrac{1}{x-1}-\dfrac{1}{1-x}=\dfrac{2}{x-1}$.""",
                False,
                r"""**C.** → False

The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{2x-2}{x^2-1}-\frac{1}{x+1}+\frac{1}{x-1}+\frac{1}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{3 x + 1}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{3 x + 1}{x^{2} - 1}$, not $\dfrac{2}{x-1}$. The discrepancy appears only at the last coefficient, so the statement is False.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8x^2b}{4x^2-16}}{\dfrac{4xb}{2x+4}}$ simplifies to $\dfrac{x}{x-2}$ for $x\neq\pm 2$ and $x,b\neq 0$.""",
                True,
                r"""**D.** → True

Least common denominator of $4x^2-16$ and $2x+4$ is the product $4x^2-162x+4$:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$

Adding numerators over added denominators is not an identity, so the statement is True.""",
            ),
            (
                r"""Combining $\dfrac{h}{k}-\dfrac{k}{h}$ on $hk\neq 0$ is rewritten as $\dfrac{(h-k)^2}{hk}$.""",
                False,
                r"""**E.** → False

Use $(h-k)^2=(h+k)^2-4hk$ with the printed symmetric data. $(h-k)^2=(h+k)^2-4hk$.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Cancel two pieces then add a leftover ratio",
        "diff": "4/5",
        "overview": r"Cancel each difference of squares first, then add the leftover unit-over-linear term. A pair of quotients over the same linear denominator collapses to a constant, not to zero.",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r\neq 4$, $\dfrac{r^2-16}{r-4}=r+4$.""",
                True,
                r"""**A.** → True

Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $c,d\neq 0$, $\dfrac{1}{c}+\dfrac{1}{d}=\dfrac{1}{c+d}$.""",
                False,
                r"""**B.** → False

Clear to the product denominator:

LCD:

$$c\cdot d$$

Combine:

$$\frac{\cdots}{c}+\frac{\cdots}{d}=\frac{\cdots}{cd}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $f\neq 6$, $\dfrac{f^2-36}{f-6}=f+6$.""",
                True,
                r"""**C.** → True

Least common denominator of $t$ and $u$ is the product $tu$. Adding numerators over added denominators is not an identity.

So the statement is True.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $4$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $2$ over $x-1$ and $2$ over $x+1$.""",
                True,
                r"""**D.** → True

The words describe a partial-fraction split of $\dfrac{4}{x^2-1}$. Translate into symbols, then clear the proposed difference of fractions.

Target rational expression:

$$\frac{4}{x^2-1}$$

The denominator is a difference of squares away from $x=\pm 1$.

Proposed decomposition:

$$2\left(\frac{1}{x-1}-\frac{1}{x+1}\right)=\frac{4}{x^2-1}$$

Each partial term carries half the numerator, as the wording requires.

Clearing reproduces the original rational expression with the correct numerator, so the statement is True.""",
            ),
            (
                r"""For $t\neq 0$, $\dfrac{4(5t)}{(-5t)^2}=\dfrac{4}{5t}$.""",
                True,
                r"""**E.** → True

Least common denominator of $(-5t)^2$ and $5t$ is the product $(-5t)^25t$:

$$\frac{\cdots}{(-5t)^2}+\frac{\cdots}{5t}=\frac{\cdots}{(-5t)^25t}$$

Adding numerators over added denominators is not an identity, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "A product of reciprocal rational pieces",
        "diff": "4/5",
        "overview": r"""The difference $x/(x-3)-x/(x+3)$ simplifies to $6x/(x^2-9)$, which is reciprocal to $(x^2-9)/(6x)$. Adding a ratio to its reciprocal produces $2(u^2+25)/(u^2-25)$, not a linear numerator.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Multiplying $\Bigl(\dfrac{x}{x-3}-\dfrac{x}{x+3}\Bigr)\cdot\dfrac{x^2-9}{6x}$ for $x\neq 0,\pm 3$ equals $1$.""",
                True,
                r"""**A.** → True

Clear to the product denominator:

LCD:

$$x-3\cdot x+3$$

Combine:

$$\frac{\cdots}{x-3}+\frac{\cdots}{x+3}=\frac{\cdots}{x-3x+3}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $n\neq 0$, $\dfrac{4(7n)}{(-7n)^2}=-\dfrac{4}{7n}$.""",
                False,
                r"""**B.** → False

The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-7n)^2$.

Square the denominator:

$$(-7n)^2=49n^2$$

The denominator becomes a positive power of $n$.

Reduce the quotient:

$$\frac{4}{7 n}$$

Cancel the common power of the variable against the numerator.

A minus sign on the right-hand side cannot survive: the squared factor is positive.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Let $u$ be a nonzero real number. Twice the reciprocal of the sum of $u$ and the reciprocal of $u$ equals $u$ divided by the sum of the square of $u$ and one.""",
                False,
                r"""**C.** → False

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

So the statement is False.""",
            ),
            (
                r"""For $m,n\neq 0$ and $m\neq -n$, $\dfrac{5}{m}+\dfrac{2}{n}=\dfrac{5n+2m}{m+n}$.""",
                False,
                r"""**D.** → False

The numerator of the claimed sum has the right cross-multiply form, but the denominator is $m+n$ instead of $mn$. Clear with the product denominator first.

Correct combination:

$$\frac{5}{m}+\frac{2}{n}=\frac{5n+2m}{mn}$$

Only $mn$ is the common denominator for unrelated linear factors.

The printed denominator $m+n$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.

So the statement is False.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{2x-2}{x^2-1}-\dfrac{1}{1+x}+\dfrac{1}{x-1}-\dfrac{1}{1-x}=\dfrac{3}{x-1}$.""",
                False,
                r"""**E.** → False

Least common denominator of $x^2-1$ and $1+x$ is the product $x^2-11+x$: $\frac{\cdots}{x^2-1}+\frac{\cdots}{1+x}=\frac{\cdots}{x^2-11+x}$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Constant from a difference of expanded squares",
        "diff": "4/5",
        "overview": r"""The difference of two expanded squares is a constant times the letter, so the quotient by that letter is constant. Opposite linear denominators $h-k$ and $k-h$ make the paired sum equal $1$, not $0$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $p,q\neq 0$ and $p\neq -q$, $\dfrac{4}{p}+\dfrac{4}{q}=\dfrac{4(p+q)}{pq}$.""",
                True,
                r"""**A.** → True

Clear to the product denominator:

LCD:

$$p\cdot q$$

Combine:

$$\frac{\cdots}{p}+\frac{\cdots}{q}=\frac{\cdots}{pq}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""On $hk\neq 0$ and $h\neq k$, someone writes $\dfrac{h}{h-k}+\dfrac{k}{k-h}=0$.""",
                False,
                r"""**B.** → False

Least common denominator of $h-k$ and $k-h$ is the product $h-kk-h$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
            (
                r"""Provided $v\neq 0$, the halved form $\dfrac{(v+5)^2-(v-5)^2}{2v}$ equals $10$.""",
                True,
                r"""**C.** → True

Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares and leaves the doubled cross term $4rs$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Whenever $w\neq z$, rewriting $\dfrac{w}{w-z}-\dfrac{z}{w-z}$ as $1$.""",
                True,
                r"""**D.** → True

Least common denominator of $w-z$ and $w-z$ is the product $w-zw-z$:

$$\frac{\cdots}{w-z}+\frac{\cdots}{w-z}=\frac{\cdots}{w-zw-z}$$

Adding numerators over added denominators is not an identity, so the statement is True.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8m^2b}{4x^2-16}}{\dfrac{4mb}{2x+4}}$ simplifies to $\dfrac{m}{x-2}$ for $x\neq\pm 2$ and $m,b\neq 0$.""",
                True,
                r"""**E.** → True

The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8m^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4mb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{m}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Quadratic over quadratic with the wrong leftover",
        "diff": "4/5",
        "overview": r"""Factor both quadratics completely, cancel one shared linear factor, and keep the leftover linear ratio. Difference of cubes produces $w^2+w+1$, not $w^2-w+1$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $3$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $3$ over $x-1$ and $3$ over $x+1$.""",
                False,
                r"""**A.** → False

Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $p,q\neq 0$, $\dfrac{1}{p}+\dfrac{1}{q}=\dfrac{1}{p+q}$ (variant 3).""",
                False,
                r"""**B.** → False

Least common denominator of $p$ and $q$ is the product $pq$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{9x-3}{x^2-1}-\dfrac{1}{1+x}+\dfrac{2}{x-1}-\dfrac{2}{1-x}=\dfrac{6}{x-1}$.""",
                False,
                r"""**C.** → False

The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{9x-3}{x^2-1}-\frac{1}{x+1}+\frac{2}{x-1}+\frac{2}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{2 \left(6 x + 1\right)}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{2 \left(6 x + 1\right)}{x^{2} - 1}$, not $\dfrac{6}{x-1}$. The discrepancy appears only at the last coefficient, so the statement is False.""",
            ),
            (
                r"""For $p\neq 0$, $\dfrac{4(8p)}{(-8p)^2}=\dfrac{4}{8p}$.""",
                True,
                r"""**D.** → True

Least common denominator of $(-8p)^2$ and $8p$ is their product, not their sum $(-8p)^2+8p$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $m,n,t\neq 0$, $\dfrac{3nt}{4m}\cdot\dfrac{2m^3n^2}{5}\div\dfrac{3(mn)^2}{4t}=\dfrac{2nt^2}{5}$.""",
                True,
                r"""**E.** → True

The claim chains three monomial fractions in $m$, $n$, and $t$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3nt}{4m}\cdot\frac{2m^3n^2}{5}\cdot\frac{4t}{3m^2n^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 n t^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Sum of squares treated as a square of a sum",
        "diff": "4/5",
        "overview": r"""Only a genuine expanded square $(t\pm 3)^2$ cancels to $t\pm 3$. A sum of squares leaves a leftover cross-term correction $-2xy/(x+y)$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $m\neq 0$, $\dfrac{4(3m)}{(-3m)^2}=\dfrac{4}{3m}$.""",
                True,
                r"""**A.** → True

The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-3m)^2$.

Square the denominator:

$$(-3m)^2=9m^2$$

The denominator becomes a positive power of $m$.

Reduce the quotient:

$$\frac{4}{3 m}$$

Cancel the common power of the variable against the numerator.

The printed right-hand side matches the reduced quotient, so the statement is True.""",
            ),
            (
                r"""Let $k$ be a nonzero real letter. Twice the reciprocal of the sum of $k$ and the reciprocal of $k$ equals twice $k$ divided by the sum of the square of $k$ and one.""",
                True,
                r"""**B.** → True

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $f\neq 5$, $\dfrac{f^2-25}{f-5}=f+5$.""",
                True,
                r"""**C.** → True

Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Provided $h\neq -k$ and $h\neq k$, the quotient $\dfrac{h^2-k^2}{(h+k)^2}$ equals $\dfrac{h+k}{h-k}$.""",
                False,
                r"""**D.** → False

Clear to the product denominator:

LCD:

$$(h+k)^2\cdot h-k$$

Combine:

$$\frac{\cdots}{(h+k)^2}+\frac{\cdots}{h-k}=\frac{\cdots}{(h+k)^2h-k}$$

So the statement is False.""",
            ),
            (
                r"""On $z\neq -5$, someone writes $\dfrac{z^2+25}{z+5}=z+5$.""",
                False,
                r"""**E.** → False

Least common denominator of $t$ and $u$ is the product $tu$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Swapped two-letter ratios in a stacked quotient",
        "diff": "4/5",
        "overview": r"""Dividing $h/k-k/h$ by $h/k+k/h$ cancels the shared $hk$ and leaves $(h^2-k^2)/(h^2+k^2)$. Reciprocating that result, or swapping which letter sits with which coefficient, both fail.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq\pm 1$, $\dfrac{6x-4}{x^2-1}-\dfrac{1}{1+x}+\dfrac{2}{x-1}-\dfrac{1}{1-x}=\dfrac{-4}{x-1}$.""",
                False,
                r"""**A.** → False

The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{6x-4}{x^2-1}-\frac{1}{x+1}+\frac{2}{x-1}+\frac{1}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{8 x}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{8 x}{x^{2} - 1}$, not $\dfrac{-4}{x-1}$. The discrepancy appears only at the last coefficient.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8u^2b}{4x^2-16}}{\dfrac{4ub}{2x+4}}$ simplifies to $\dfrac{u}{x+2}$ for $x\neq\pm 2$ and $u,b\neq 0$.""",
                False,
                r"""**B.** → False

Clear to the product denominator:

LCD:

$$4x^2-16\cdot 2x+4$$

Combine:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $u,v\neq 0$, $\dfrac{3}{u}+\dfrac{5}{v}=\dfrac{3v+5u}{uv}$.""",
                True,
                r"""**C.** → True

Least common denominator of $u$ and $v$ is their product, not their sum $u+v$.

So the statement is True.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8h^2b}{4x^2-16}}{\dfrac{4hb}{2x+4}}$ simplifies to $\dfrac{h}{x+2}$ for $x\neq\pm 2$ and $h,b\neq 0$.""",
                False,
                r"""**D.** → False

The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8h^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4hb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{h}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder, so the statement is False.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $6$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $3$ over $x-1$ and $3$ over $x+1$.""",
                True,
                r"""**E.** → True

Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Squared minus sign in a monomial denominator",
        "diff": "4/5",
        "overview": r"""Squaring a negative monomial removes the minus sign. Coefficients in the numerator must be counted exactly. The combination $h/k+k/h-2$ is $(h-k)^2/hk$, not $(h+k)^2/hk$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r\neq 6$, $\dfrac{r^2-36}{r-6}=r+6$.""",
                True,
                r"""**A.** → True

Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{3x-3}{x^2-1}-\dfrac{4}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{1}{x-1}$.""",
                False,
                r"""**B.** → False

The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{3x-3}{x^2-1}-\frac{4}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{2 \left(x + 2\right)}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{2 \left(x + 2\right)}{x^{2} - 1}$, not $\dfrac{1}{x-1}$. The discrepancy appears only at the last coefficient, so the statement is False.""",
            ),
            (
                r"""For $q\neq 0$, $\dfrac{4(3q)}{(-3q)^2}=-\dfrac{4}{3q}$.""",
                False,
                r"""**C.** → False

Least common denominator of $(-3q)^2$ and $3q$ is the product $(-3q)^23q$:

$$\frac{\cdots}{(-3q)^2}+\frac{\cdots}{3q}=\frac{\cdots}{(-3q)^23q}$$

Adding numerators over added denominators is not an identity.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $h,k\neq 0$, $\dfrac{2}{h}+\dfrac{6}{k}=\dfrac{2k+6h}{hk}$.""",
                True,
                r"""**D.** → True

Least common denominator of $h$ and $k$ is the product $hk$. Adding numerators over added denominators is not an identity.

So the statement is True.""",
            ),
            (
                r"""Combining $\dfrac{h}{k}+\dfrac{k}{h}-2$ on $hk\neq 0$ as $\dfrac{(h+k)^2}{hk}$.""",
                False,
                r"""**E.** → False

Clear to the common denominator $hk$:

Combine:

$$\frac{h}{k}+\frac{k}{h}=\frac{h^2+k^2}{hk}$$

Compare:

$$\frac{(h+k)^2}{hk}=\frac{h^2+2hk+k^2}{hk}$$

The squared-sum numerator carries an extra $2hk$, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Harmonic-looking product over a two-letter sum",
        "diff": "5/5",
        "overview": r"""Twice the reciprocal of a sum of unit fractions is $2tu/(t+u)$, not the arithmetic mean. A three-layer plus nest of unit fractions simplifies to $(3k+2)/(2k+1)$. Sum of cubes still cancels to $v^2-3v+9$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Let $w$ be a nonzero real quantity. Twice the reciprocal of the sum of $w$ and the reciprocal of $w$ equals twice $w$ divided by the sum of the square of $w$ and one.""",
                True,
                r"""**A.** → True

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{b+a}{ab}$.""",
                True,
                r"""**B.** → True

The claim adds two simple fractions in $a$ and $b$. The least common denominator is the product $ab$, not their sum.

Clear to one fraction:

$$\frac{1}{a}+\frac{1}{b}=\frac{b+a}{ab}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{3x-3}{x^2-1}-\dfrac{4}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{5}{x-1}$.""",
                False,
                r"""**C.** → False

Least common denominator of $x^2-1$ and $1+x$ is the product $x^2-11+x$: $\frac{\cdots}{x^2-1}+\frac{\cdots}{1+x}=\frac{\cdots}{x^2-11+x}$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
            (
                r"""Clearing the three-layer plus nest $1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{k}}}$ for $k\neq 0,-1,-\dfrac{1}{2}$ equals $\dfrac{3k+2}{2k+1}$.""",
                True,
                r"""**D.** → True

Work from the innermost layer outward:

Inner:

$$1+\frac{1}{x}=\frac{x+1}{x}$$

Reciprocal:

$$\frac{1}{1+\frac{1}{x}}=\frac{x}{x+1}$$

Outer:

$$1+\frac{x}{x+1}=\frac{2x+1}{x+1}$$

So the statement is True.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{8x-4}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{2}{1-x}=\dfrac{4}{x-1}$.""",
                False,
                r"""**E.** → False

The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{2}{1-x}=\frac{2}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{8x-4}{x^2-1}-\frac{2}{x+1}+\frac{1}{x-1}+\frac{2}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{9 x + 1}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{9 x + 1}{x^{2} - 1}$, not $\dfrac{4}{x-1}$. The discrepancy appears only at the last coefficient, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Three unit fractions with a false linear numerator",
        "diff": "5/5",
        "overview": r"""Three unit fractions combine over $hkt$ with numerator $kt+ht+hk$. Replacing that numerator by $h+k+t$ is the usual error. A two-letter difference over a difference of squares cancels to $3/(h+k)$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r,s\neq 0$, $\dfrac{2}{r}+\dfrac{3}{s}=\dfrac{2s+3r}{rs}$.""",
                True,
                r"""**A.** → True

Least common denominator of $r$ and $s$ is their product, not their sum $r+s$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""A script writes $\dfrac{1}{u}+\dfrac{1}{v}+\dfrac{1}{w}=\dfrac{u+v+w}{uvw}$ whenever $uvw\neq 0$.""",
                False,
                r"""**B.** → False

Least common denominator of $u$ and $v$ is the product $uv$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8x^2b}{4x^2-16}}{\dfrac{4xb}{2x+4}}$ simplifies to $\dfrac{x}{x+2}$ for $x\neq\pm 2$ and $x,b\neq 0$.""",
                False,
                r"""**C.** → False

The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8x^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4xb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{x}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; the printed $(x+2)$ is the factor that was cancelled, not the remainder, so the statement is False.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $7$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $\dfrac{7}{2}$ over $x-1$ and $\dfrac{7}{2}$ over $x+1$.""",
                True,
                r"""**D.** → True

Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$2\cdot 2$$

Combine:

$$\frac{\cdots}{2}+\frac{\cdots}{2}=\frac{\cdots}{22}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""On $h\neq \pm k$, someone writes $\dfrac{3h-3k}{h^2-k^2}=\dfrac{3}{h-k}$.""",
                False,
                r"""**E.** → False

Least common denominator of $h^2-k^2$ and $h-k$ is the product $h^2-k^2h-k$:

$$\frac{\cdots}{h^2-k^2}+\frac{\cdots}{h-k}=\frac{\cdots}{h^2-k^2h-k}$$

Adding numerators over added denominators is not an identity, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Cancelled linear factor kept in the denominator",
        "diff": "5/5",
        "overview": r"""Factor $x^2-8x+15=(x-5)(x-3)$ and cancel $x-5$ to leave $1/(x-3)$. Keeping the cancelled factor, or swapping a constant in a nearby quadratic ratio, both fail.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq\pm 1$, $\dfrac{5x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{3}{1-x}=\dfrac{3}{x-1}$.""",
                False,
                r"""**A.** → False

The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{3}{1-x}=\frac{3}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{5x-1}{x^2-1}-\frac{2}{x+1}+\frac{1}{x-1}+\frac{3}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{7 x + 5}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{7 x + 5}{x^{2} - 1}$, not $\dfrac{3}{x-1}$. The discrepancy appears only at the last coefficient, so the statement is False.""",
            ),
            (
                r"""For $r\neq 0$, $\dfrac{4(6r)}{(-6r)^2}=-\dfrac{4}{6r}$.""",
                False,
                r"""**B.** → False

Least common denominator of $(-6r)^2$ and $6r$ is their product, not their sum $(-6r)^2+6r$.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $x,z,y\neq 0$, $\dfrac{3zy}{4x}\cdot\dfrac{2x^3z^2}{5}\div\dfrac{3(xz)^2}{4y}=\dfrac{2zy^2}{5}$.""",
                True,
                r"""**C.** → True

The claim chains three monomial fractions in $x$, $z$, and $y$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3zy}{4x}\cdot\frac{2x^3z^2}{5}\cdot\frac{4y}{3x^2z^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 y^{2} z}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $p,q\neq 0$ and $p\neq -q$, $\dfrac{4}{p}+\dfrac{5}{q}=\dfrac{4q+5p}{p+q}$.""",
                False,
                r"""**D.** → False

Clear to the product denominator:

LCD:

$$p\cdot q$$

Combine:

$$\frac{\cdots}{p}+\frac{\cdots}{q}=\frac{\cdots}{pq}$$

So the statement is False.""",
            ),
            (
                r"""With $w\neq \pm 3$, someone writes $\dfrac{w^2+w-6}{w^2-9}=\dfrac{w+2}{w-3}$.""",
                False,
                r"""**E.** → False

Least common denominator of $w^2-9$ and $w-3$ is the product $w^2-9w-3$: $\frac{\cdots}{w^2-9}+\frac{\cdots}{w-3}=\frac{\cdots}{w^2-9w-3}$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Opposite linear factors that differ by a minus",
        "diff": "5/5",
        "overview": r"""The identity $k-h=-(h-k)$ turns $\frac{1}{h(h-k)}+\frac{1}{k(k-h)}$ into $-1/(hk)$, not $+1/(hk)$. Bare opposite unit fractions cancel to $0$; so do opposite copies of $tu/(t-u)$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Adding $\dfrac{1}{h(h-k)}+\dfrac{1}{k(k-h)}$ for $hk\neq 0$ and $h\neq k$ equals $-\dfrac{1}{hk}$.""",
                True,
                r"""**A.** → True

Clear to the product denominator:

LCD:

$$h(h-k)\cdot k(k-h)$$

Combine:

$$\frac{\cdots}{h(h-k)}+\frac{\cdots}{k(k-h)}=\frac{\cdots}{h(h-k)k(k-h)}$$

So the statement is True.""",
            ),
            (
                r"""For $c,d\neq 0$, $\dfrac{1}{c}+\dfrac{1}{d}=\dfrac{1}{c+d}$ (variant 1).""",
                False,
                r"""**B.** → False

Least common denominator of $c$ and $d$ is their product, not their sum $c+d$.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Bare opposite unit fractions $\dfrac{1}{v-w}+\dfrac{1}{w-v}$ are claimed to vanish for every $v\neq w$.""",
                True,
                r"""**C.** → True

Least common denominator of $v-w$ and $w-v$ is the product $v-ww-v$. Adding numerators over added denominators is not an identity.

So the statement is True.""",
            ),
            (
                r"""For $f,g\neq 0$, $\dfrac{1}{f}+\dfrac{1}{g}=\dfrac{1}{f+g}$.""",
                False,
                r"""**D.** → False

Least common denominator of $f$ and $g$ is their product, not their sum $f+g$.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8u^2b}{4x^2-16}}{\dfrac{4ub}{2x+4}}$ simplifies to $\dfrac{u}{x-2}$ for $x\neq\pm 2$ and $u,b\neq 0$.""",
                True,
                r"""**E.** → True

Clear to the product denominator:

LCD:

$$4x^2-16\cdot 2x+4$$

Combine:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Cubic LCD of three neighbouring linears",
        "diff": "5/5",
        "overview": r"""The LCD of three distinct linear denominators is their product. Subtracting reciprocal quadratics keeps both quadratic factors. A difference of reciprocal squares over $(z\pm 1)^2$ produces $4z/(z^2-1)^2$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $a,b\neq 0$, $\dfrac{3}{a}+\dfrac{3}{b}=\dfrac{3b+3a}{ab}$.""",
                True,
                r"""**A.** → True

Least common denominator of $a$ and $b$ is their product, not their sum $a+b$.

So the statement is True.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8h^2b}{4x^2-16}}{\dfrac{4hb}{2x+4}}$ simplifies to $\dfrac{h}{x-2}$ for $x\neq\pm 2$ and $h,b\neq 0$.""",
                True,
                r"""**B.** → True

The stacked quotient mixes a difference of squares with a linear factor. Factor every polynomial piece before cancelling any $(x\pm 2)$ factor.

Difference of squares:

$$4x^2-16=4(x-2)(x+2)$$

The quadratic denominator splits into the two linear factors the claim will test.

Linear factor:

$$2x+4=2(x+2)$$

The inner denominator shares the $(x+2)$ factor with the quadratic.

Rewrite the division:

$$\frac{8h^2b}{4(x-2)(x+2)}\cdot\frac{2(x+2)}{4hb}$$

Division becomes multiplication by the reciprocal; like factors can now cancel.

Reduced form:

$$\frac{h}{x - 2}$$

Only the surviving linear factor in the denominator determines the final claim.

After cancelling $(x+2)$ the surviving linear factor is $(x-2)$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $4$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $4$ over $x-1$ and $4$ over $x+1$.""",
                False,
                r"""**C.** → False

Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{6x-4}{x^2-1}-\dfrac{1}{1+x}+\dfrac{2}{x-1}-\dfrac{1}{1-x}=\dfrac{4}{x-1}$.""",
                False,
                r"""**D.** → False

The claim is an identity away from $x=\pm 1$. Put every term over the common denominator $(x-1)(x+1)=x^2-1$, and rewrite $\dfrac{1}{1-x}$ as $-\dfrac{1}{x-1}$ before combining like pieces.

Rewrite the last term:

$$-\frac{1}{1-x}=\frac{1}{x-1}$$

The reciprocal of $1-x$ carries a minus sign into the $(x-1)$ slot.

Clear denominators:

$$\frac{6x-4}{x^2-1}-\frac{1}{x+1}+\frac{2}{x-1}+\frac{1}{x-1}$$

All four pieces now share the same quadratic denominator or a factor of it.

Simplified left-hand side:

$$\frac{8 x}{x^{2} - 1}$$

Only after this full reduction can the result be compared with the claimed single fraction.

After the full clear the left-hand side is $\frac{8 x}{x^{2} - 1}$, not $\dfrac{4}{x-1}$. The discrepancy appears only at the last coefficient, so the statement is False.""",
            ),
            (
                r"""For $u,w,v\neq 0$, $\dfrac{3wv}{4u}\cdot\dfrac{2u^3w^2}{5}\div\dfrac{3(uw)^2}{4v}=\dfrac{2wv}{5}$.""",
                False,
                r"""**E.** → False

Clear to the product denominator:

LCD:

$$4u\cdot 5$$

Combine:

$$\frac{\cdots}{4u}+\frac{\cdots}{5}=\frac{\cdots}{4u5}$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Square of a swapped-ratio sum beside a cubic",
        "diff": "5/5",
        "overview": r"""The square of $h/k+k/h$ is $(h^2+k^2)^2/(h^2k^2)$. Swapping the order of a difference flips the sign of $h^2-k^2$. A ratio minus its reciprocal over $v^2-9$ produces $12v/(v^2-9)$, not $6v/(v^2-9)$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $s\neq 0$, $\dfrac{4(2s)}{(-2s)^2}=\dfrac{2}{s}$.""",
                True,
                r"""**A.** → True

Least common denominator of $(-2s)^2$ and $s$ is their product, not their sum $(-2s)^2+s$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $c,d\neq 0$, $\dfrac{1}{c}+\dfrac{1}{d}=\dfrac{1}{c+d}$ (variant 2).""",
                False,
                r"""**B.** → False

Least common denominator of $c$ and $d$ is the product $cd$:

$$\frac{\cdots}{c}+\frac{\cdots}{d}=\frac{\cdots}{cd}$$

Adding numerators over added denominators is not an identity.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""The stacked ratio $\dfrac{\dfrac{3}{x}-\dfrac{5}{y}}{\dfrac{1}{x}+\dfrac{1}{y}}$ reduces to $\dfrac{3y-5x}{x+y}$ for $xy\neq 0$ and $x\neq -y$.""",
                True,
                r"""**C.** → True

Difference of squares (or another factorisation) clears the denominator: $\frac{3}{x}$. The surviving expression is the true remainder on the stated domain.

So the statement is True.""",
            ),
            (
                r"""Provided $t\neq u$, the cubic ratio $\dfrac{t^3-u^3}{t^2+tu+u^2}$ equals $t-u$.""",
                True,
                r"""**D.** → True

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

So the statement is True.""",
            ),
            (
                r"""For $h,k\neq 0$ and $h\neq -k$, $\dfrac{6}{h}+\dfrac{1}{k}=\dfrac{6k+h}{h+k}$.""",
                False,
                r"""**E.** → False

The numerator of the claimed sum has the right cross-multiply form, but the denominator is $h+k$ instead of $hk$. Clear with the product denominator first.

Correct combination:

$$\frac{6}{h}+\frac{1}{k}=\frac{6k+1h}{hk}$$

Only $hk$ is the common denominator for unrelated linear factors.

The printed denominator $h+k$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Outer reciprocal of a two-storey $x$-nest",
        "diff": "5/5",
        "overview": r"""A continued nest $1/(x+1/(x+1/x))$ simplifies to $(x^2+1)/(x(x^2+2))$. The stack $(1+h/k)/(1-h/k)$ is $(k+h)/(k-h)$, not the swapped ratio. An LCD remains a product.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq\pm 1$, $\dfrac{5x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{1}{x-1}-\dfrac{3}{1-x}=\dfrac{6}{x-1}$.""",
                False,
                r"""**A.** → False

Least common denominator of $x^2-1$ and $1+x$ is the product $x^2-11+x$: $\frac{\cdots}{x^2-1}+\frac{\cdots}{1+x}=\frac{\cdots}{x^2-11+x}$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
            (
                r"""For $p\neq 7$, $\dfrac{p^2-49}{p-7}=p+7$.""",
                True,
                r"""**B.** → True

Least common denominator of $t$ and $u$ is their product, not their sum $t+u$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $c,d,e\neq 0$, $\dfrac{3de}{4c}\cdot\dfrac{2c^3d^2}{5}\div\dfrac{3(cd)^2}{4e}=\dfrac{2de^2}{5}$.""",
                True,
                r"""**C.** → True

The claim chains three monomial fractions in $c$, $d$, and $e$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3de}{4c}\cdot\frac{2c^3d^2}{5}\cdot\frac{4e}{3c^2d^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 d e^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial, so the statement is True.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8p^2b}{4x^2-16}}{\dfrac{4pb}{2x+4}}$ simplifies to $\dfrac{p}{x+2}$ for $x\neq\pm 2$ and $p,b\neq 0$.""",
                False,
                r"""**D.** → False

Clear to the product denominator:

LCD:

$$4x^2-16\cdot 2x+4$$

Combine:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $n\neq 0$, $\dfrac{4(6n)}{(-6n)^2}=-\dfrac{4}{6n}$.""",
                False,
                r"""**E.** → False

The quotient has a squared monomial in the denominator. Square that factor first — the minus sign cannot survive inside $(-6n)^2$.

Square the denominator:

$$(-6n)^2=36n^2$$

The denominator becomes a positive power of $n$.

Reduce the quotient:

$$\frac{2}{3 n}$$

Cancel the common power of the variable against the numerator.

A minus sign on the right-hand side cannot survive: the squared factor is positive, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Quartic cancel mixed with reciprocal squares",
        "diff": "5/5",
        "overview": r"""A cancellation $t^4-1$ over $t^2-1$ leaves $t^2+1$. A squared sum of unit fractions keeps the cross term $2/xy$. A difference of reciprocal squares over $(u\pm 3)^2$ produces $12u/(u^2-9)^2$.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $h,k\neq 0$, $\dfrac{6}{h}+\dfrac{1}{k}=\dfrac{6k+h}{hk}$.""",
                True,
                r"""**A.** → True

The claim adds two simple fractions in $h$ and $k$. The least common denominator is the product $hk$, not their sum.

Clear to one fraction:

$$\frac{6}{h}+\frac{1}{k}=\frac{6k+h}{hk}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction, so the statement is True.""",
            ),
            (
                r"""Away from the zeros of $x^2-1$, the rational expression whose numerator is $1$ and whose denominator is the difference of the square of $x$ and one decomposes as the difference of $1$ over $x-1$ and $1$ over $x+1$.""",
                False,
                r"""**B.** → False

Despite the long surrounding prose, the mathematical content is a single identity claim. Verify it with the named elementary rule.

Clear to the product denominator:

LCD:

$$t\cdot u$$

Combine:

$$\frac{\cdots}{t}+\frac{\cdots}{u}=\frac{\cdots}{tu}$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Subtracting $\dfrac{1}{(u-3)^2}-\dfrac{1}{(u+3)^2}$ produces $\dfrac{12u}{(u^2-9)^2}$ off $u=\pm 3$.""",
                True,
                r"""**C.** → True

Least common denominator of $(u-3)^2$ and $(u+3)^2$ is the product $(u-3)^2(u+3)^2$:

$$\frac{\cdots}{(u-3)^2}+\frac{\cdots}{(u+3)^2}=\frac{\cdots}{(u-3)^2(u+3)^2}$$

Adding numerators over added denominators is not an identity.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""The squared-difference quotient $\dfrac{(v-w)^2}{v^2-w^2}$ reduces to $\dfrac{v-w}{v+w}$ for $v\neq\pm w$.""",
                True,
                r"""**D.** → True

Use $(v-w)^2=(v+w)^2-4vw$ with the printed symmetric data. $(v-w)^2=(v+w)^2-4vw$.

So the statement is True.""",
            ),
            (
                r"""On $z\neq 5$, someone writes $\dfrac{z^2-25}{z-5}=z-5$.""",
                False,
                r"""**E.** → False

Least common denominator of $t$ and $u$ is their product, not their sum $t+u$, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Two candidate rewritings of a compound stack",
        "diff": "5/5",
        "overview": r"""Two candidate simplifications of a compound fraction need not be equal: one may be the reciprocal of the other. The plus combination $h/k+k/h+2$ really is $(h+k)^2/hk$; mixing a difference-of-cubes quadratic with a sum-of-cubes quadratic is not.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r,s,t\neq 0$, $\dfrac{3st}{4r}\cdot\dfrac{2r^3s^2}{5}\div\dfrac{3(rs)^2}{4t}=\dfrac{2st}{5}$.""",
                False,
                r"""**A.** → False

The claim chains three monomial fractions in $r$, $s$, and $t$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3st}{4r}\cdot\frac{2r^3s^2}{5}\cdot\frac{4t}{3r^2s^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 s t^{2}}{5}$$

Track every letter exponent through the product before reading off the monomial.

After every cancellation the surviving power of $t$ is $t^2$, so the printed right-hand side (missing that power) fails.

So the statement is False.""",
            ),
            (
                r"""For $c,d\neq 0$ and $c\neq -d$, $\dfrac{8}{c}+\dfrac{3}{d}=\dfrac{8d+3c}{c+d}$.""",
                False,
                r"""**B.** → False

Least common denominator of $c$ and $d$ is the product $cd$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
            (
                r"""After cancelling $\dfrac{v^3-27}{v-3}$ for $v\neq 3$ as $v^2+3v+9$, a second rewriting $v^2-3v+9$ is treated as the same polynomial.""",
                False,
                r"""**C.** → False

Difference of cubes leaves three terms in the quotient:

Factor:

$$\frac{j^3-1331}{j-11}=j^2+11j+121$$

At the test point:

$$j = 0 \Rightarrow 121 \text{ on both sides, but } j$$

$$= 1 \Rightarrow 133 \neq 122$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $u,v\neq 0$, $\dfrac{3}{u}+\dfrac{7}{v}=\dfrac{3v+7u}{uv}$.""",
                True,
                r"""**D.** → True

The claim adds two simple fractions in $u$ and $v$. The least common denominator is the product $uv$, not their sum.

Clear to one fraction:

$$\frac{3}{u}+\frac{7}{v}=\frac{3v+7u}{uv}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $x\neq\pm 1$, $\dfrac{7x-1}{x^2-1}-\dfrac{2}{1+x}+\dfrac{3}{x-1}-\dfrac{1}{1-x}=\dfrac{5}{x-1}$.""",
                False,
                r"""**E.** → False

Least common denominator of $x^2-1$ and $1+x$ is their product, not their sum $x^2-1+1+x$, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.2",
        "title": "Exam mix of leftover cancellation traps",
        "diff": "5/5",
        "overview": r"""A closing mix: a cubic with the wrong middle sign that a test at $0$ fails to catch, an LCD-as-sum trap, a minus nest, a binomial square missing its cross term, and a genuine difference of reciprocal squares.""",
        "context": r"""Let $x$ and $y$ be nonzero real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r,s\neq 0$, $\dfrac{1}{r}+\dfrac{1}{s}=\dfrac{1}{r+s}$ (variant 3).""",
                False,
                r"""**A.** → False

Least common denominator of $r$ and $s$ is their product, not their sum $r+s$.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $p,r,q\neq 0$, $\dfrac{3rq}{4p}\cdot\dfrac{2p^3r^2}{5}\div\dfrac{3(pr)^2}{4q}=\dfrac{2rq^2}{5}$.""",
                True,
                r"""**B.** → True

The claim chains three monomial fractions in $p$, $r$, and $q$. Division by a fraction is multiplication by its reciprocal; only then can common factors be cancelled in one pass.

Rewrite as one product:

$$\frac{3rq}{4p}\cdot\frac{2p^3r^2}{5}\cdot\frac{4q}{3p^2r^2}$$

Each division has been replaced by multiplication by the flipped denominator.

Cancel surviving powers:

$$\frac{2 q^{2} r}{5}$$

Track every letter exponent through the product before reading off the monomial.

The printed right-hand side matches the fully cancelled monomial, so the statement is True.""",
            ),
            (
                r"""The stacked quotient $\dfrac{\dfrac{8a^2b}{4x^2-16}}{\dfrac{4ab}{2x+4}}$ simplifies to $\dfrac{a}{x+2}$ for $x\neq\pm 2$ and $a,b\neq 0$.""",
                False,
                r"""**C.** → False

Clear to the product denominator:

LCD:

$$4x^2-16\cdot 2x+4$$

Combine:

$$\frac{\cdots}{4x^2-16}+\frac{\cdots}{2x+4}=\frac{\cdots}{4x^2-162x+4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Whenever $x\neq 0$, $\bigl(1+\dfrac{1}{x}\bigr)^2$ is treated as $1+\dfrac{1}{x^2}$.""",
                False,
                r"""**D.** → False

Least common denominator of $x$ and $x^2$ is the product $xx^2$: $\frac{\cdots}{x}+\frac{\cdots}{x^2}=\frac{\cdots}{xx^2}$. Adding numerators over added denominators is not an identity.

So the statement is False.""",
            ),
            (
                r"""Combining $\dfrac{1}{h^2}-\dfrac{1}{k^2}$ on $hk\neq 0$ as $\dfrac{k^2-h^2}{h^2k^2}$.""",
                True,
                r"""**E.** → True

Least common denominator of $h^2$ and $k^2$ is the product $h^2k^2$:

$$\frac{\cdots}{h^2}+\frac{\cdots}{k^2}=\frac{\cdots}{h^2k^2}$$

Adding numerators over added denominators is not an identity, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Warm-up: product and quotient of powers",
        "diff": "1/5",
        "overview": r"Five index laws on a single letter base.",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Multiplying powers: for $a\neq 0$, $a^3\cdot a^4=a^7$.""",
                True,
                r"""**A.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""Dividing indices, for $x\neq 0$, $x^5/x^2=x^3$.""",
                True,
                r"""**B.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $b\neq 0$, the product $b^2\cdot b^3$ equals $b^5$.""",
                True,
                r"""**C.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""An exponent slip gives $t^4/t^2=t^3$ for $t\neq 0$ (false).""",
                False,
                r"""**D.** → False

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

So the statement is False.""",
            ),
            (
                r"""For $p\neq 0$, cancelling three factors in $p^6/p^3$ leaves $p^2$.""",
                True,
                r"""**E.** → True

Difference of squares (or another factorisation) clears the denominator:

$$\frac{t^2-9}{t-3}$$

The surviving expression is the true remainder on the stated domain, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Warm-up: power of a power",
        "diff": "1/5",
        "overview": r"Five power-of-a-power checks, including one added-exponent error.",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x>0$, raising a square to the third power gives $(x^2)^3=x^6$.""",
                True,
                r"""**A.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Adding exponents incorrectly, $(a^3)^2=a^5$ is false for $a>0$.""",
                False,
                r"""**B.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is False.""",
            ),
            (
                r"""For $b>0$, halving the exponent in $(b^4)^{1/2}=b^2$.""",
                True,
                r"""**C.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""For $y>0$, squaring a square root returns $y$: $(y^{1/2})^2=y$.""",
                True,
                r"""**D.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $z>0$, the identity $(z^3)^{1/3}=z$ holds.""",
                True,
                r"""**E.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Warm-up: negative and zero exponents",
        "diff": "2/5",
        "overview": r"Five reciprocal and zero-exponent identities with one sign trap.",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $a\neq 0$, a negative index means $a^{-3}=1/a^3$.""",
                True,
                r"""**A.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Reciprocating once, for $x\neq 0$, $x^{-1}=1/x$.""",
                True,
                r"""**B.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""Any nonzero base satisfies $b^0=1$.""",
                True,
                r"""**C.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""A sign error makes $t^{-2}=-1/t^2$ for $t\neq 0$ (false).""",
                False,
                r"""**D.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is False.""",
            ),
            (
                r"""For $p\neq 0$, $p^{-4}=1/p^4$.""",
                True,
                r"""**E.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Warm-up: fractional exponents and roots",
        "diff": "2/5",
        "overview": r"Five links between fractional exponents and radicals.",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x>0$, the half-power $x^{1/2}$ equals $\sqrt{x}$.""",
                True,
                r"""**A.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $a>0$, the cube root is $a^{1/3}=\sqrt[3]{a}$.""",
                True,
                r"""**B.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is True.""",
            ),
            (
                r"""For $b>0$, $b^{2/3}=(\sqrt[3]{b})^2$.""",
                True,
                r"""**C.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""Confusing a half-power with a square, $y^{1/2}=y^2$ is false for $y>0$.""",
                False,
                r"""**D.** → False

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $z>0$, $z^{3/2}=z\sqrt{z}$.""",
                True,
                r"""**E.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "A stacked power compared with a product after a rewrite",
        "diff": "4/5",
        "overview": r"""Five independent exponent claims. A stack multiplies; a product adds. After rewriting, $(x^{-2})^{-3}=x^{6}$ is not the same as $x^{-2}x^{-3}=x^{-5}$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $p\neq 0$, $(2p^{-1}-1)(2p^{-1}+1)=\dfrac{4}{p^2}-1$.""",
                True,
                r"""**A.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""If $a>0$, then $\dfrac{a^{2/3}\cdot\sqrt[3]{a\sqrt{a}}}{a^{1/6}\cdot\sqrt[6]{a^5}}=\sqrt[3]{a}$.""",
                False,
                r"""**B.** → False

Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$a^{2/3}\cdot(a\cdota^{1/2})^{1/3} = a^{2/3}\cdota^{(1+1/2)/3}$$

$$= a^{2/3}\cdota^{1/2}$$

Inside the cube root, $a\cdot\sqrt{a}$ becomes a single power of $a$.

Denominator:

$$a^{1/6}\cdot(a^5)^{1/6} = a^{1/6}\cdota^{5/6}$$

$$= a$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{a}$$

Subtract exponents only after both sides use the same base and fractional form.

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined, so the statement is False.""",
            ),
            (
                r"""For positive $b$, raising $b$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $b$.""",
                True,
                r"""**C.** → True

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For positive $m$, raising $m$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $m$.""",
                True,
                r"""**D.** → True

The claim describes a tower of powers on positive $m$. Translate each English step into an exponent, multiplying powers inside out.

Inner power:

$$(m^{2})^{3}=m^{6}$$

Squaring then cubing multiplies the exponents.

Principal square root:

$$(m^{6})^{1/2}=m^{3}$$

The outer root halves the accumulated exponent.

The reduced power is the cube of the base, matching the wording, so the statement is True.""",
            ),
            (
                r"""For $u>0$, $(u^4)^{1/2}/u=u$.""",
                False,
                r"""**E.** → False

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "A minus in the denominator that has to be flipped twice",
        "diff": "4/5",
        "overview": r"Five independent reciprocal-power checks. A minus in a denominator flips when the quotient is written as a product; inverting a simplified quotient is a further step.",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $w>0$, $(w^{2/3})(w^{1/3})=w$.""",
                True,
                r"""**A.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""For $q\neq 0$, it holds that $\dfrac{1}{q^{-3}}=-q^{3}$.""",
                False,
                r"""**B.** → False

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $v\neq 0$, $(v^2/v^{-3})^{1/2}=v^{5/2}$.""",
                False,
                r"""**C.** → False

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $p\neq 0$, $(7p^{-1}-1)(7p^{-1}+1)=\dfrac{49}{p^2}-1$.""",
                True,
                r"""**D.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

So the statement is True.""",
            ),
            (
                r"""If $c>0$, then $\dfrac{c^{2/3}\cdot\sqrt[3]{c\sqrt{c}}}{c^{1/6}\cdot\sqrt[6]{c^5}}=\sqrt[3]{c}$.""",
                False,
                r"""**E.** → False

Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$c^{2/3}\cdot(c\cdotc^{1/2})^{1/3} = c^{2/3}\cdotc^{(1+1/2)/3}$$

$$= c^{2/3}\cdotc^{1/2}$$

Inside the cube root, $c\cdot\sqrt{c}$ becomes a single power of $c$.

Denominator:

$$c^{1/6}\cdot(c^5)^{1/6} = c^{1/6}\cdotc^{5/6}$$

$$= c$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{c}$$

Subtract exponents only after both sides use the same base and fractional form.

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Products of roots versus roots of sums",
        "diff": "3/5",
        "overview": r"""Five independent surd claims. Products of square roots may pass inside one radicand; sums may not. $\sqrt{12}\sqrt{3}=6$, but $\sqrt{18}+\sqrt{32}\neq\sqrt{50}$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $a>0$, $(a^2)^3=a^5$.""",
                False,
                r"""**A.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For positive $x$, raising $x$ to the second power, then to the third, and finally taking the principal square root of the result yields $x$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**B.** → False

The principal square root is the unique nonnegative number whose square is $n^2$: $\sqrt{n^2}=|n|$.

So the statement is False.""",
            ),
            (
                r"""For $r\neq 0$, $(4r^{-1}-1)(4r^{-1}+1)=\dfrac{1}{16r^2}-1$.""",
                False,
                r"""**C.** → False

The product is a difference of squares. Set $A=4r^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4r^{-1})^2-1=\frac{16}{r^2}-1$$

The reciprocal square carries coefficient $16$ on $r^2$ in the denominator.

The reciprocal square carries numerator $16$, not $1$. Swapping numerator and denominator is the last-step error.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""If $e>0$, then $\dfrac{e^{2/3}\cdot\sqrt[3]{e\sqrt{e}}}{e^{1/6}\cdot\sqrt[6]{e^5}}=\sqrt[6]{e}$.""",
                True,
                r"""**D.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is True.""",
            ),
            (
                r"""For positive $w$, raising $w$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $w$.""",
                True,
                r"""**E.** → True

The claim describes a tower of powers on positive $w$. Translate each English step into an exponent, multiplying powers inside out.

Inner power:

$$(w^{2})^{3}=w^{6}$$

Squaring then cubing multiplies the exponents.

Principal square root:

$$(w^{6})^{1/2}=w^{3}$$

The outer root halves the accumulated exponent.

The reduced power is the cube of the base, matching the wording, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Zero exponents mixed with a cancelled stack",
        "diff": "4/5",
        "overview": r"""Five independent zero-exponent claims. On a nonzero base, $a^{0}=1$. A negative power of $0$ is undefined; $(2b)^{0}$ is not $2b^{0}$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For positive $m$, raising $m$ to the second power, then to the third, and finally taking the principal square root of the result yields $m$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**A.** → False

Power of a power multiplies exponents; it does not add $2+3$ before the root. Reduce the tower on positive $m$ first.

Correct tower:

$$((m^{2})^{3})^{1/2}=m^{3}$$

The accumulated exponent is $6$, then halved by the principal square root.

The power $\tfrac{5}{2}$ would describe a different expression, so the statement is False.""",
            ),
            (
                r"""treats $0^{-3}\cdot 0^{3}$ as $0^{0}$ and then as $1$, by the product rule for exponents.""",
                False,
                r"""**B.** → False

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is False.""",
            ),
            (
                r"""For $a\neq 0$, $(a^{-2}a^5)/a= a^2$.""",
                True,
                r"""**C.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Treating $(2b)^{0}=2b^{0}$ for every $b\neq 0$ is offered, so the left side is read as $2$.""",
                False,
                r"""**D.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For positive $x$, raising $x$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $x$.""",
                True,
                r"""**E.** → True

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Integer values of short fractional powers",
        "diff": "3/5",
        "overview": r"""Five independent numerical powers. $27^{2/3}=9$ and $\sqrt[3]{54}=3\sqrt[3]{2}$, but $32^{2/5}=4$ and $8^{2/3}\cdot 4^{-1/2}=2$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $w\neq 0$, $(4w^{-1}-1)(4w^{-1}+1)=\dfrac{1}{16w^2}-1$.""",
                False,
                r"""**A.** → False

The product is a difference of squares. Set $A=4w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4w^{-1})^2-1=\frac{16}{w^2}-1$$

The reciprocal square carries coefficient $16$ on $w^2$ in the denominator.

The reciprocal square carries numerator $16$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""Rewriting $32^{2/5}$ as $8$ is entered on a mark scheme.""",
                False,
                r"""**B.** → False

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is False.""",
            ),
            (
                r"""For positive $z$, raising $z$ to the second power, then to the third, and finally taking the principal square root of the result yields $z$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**C.** → False

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $p\neq 0$, $(6p^{-1}-1)(6p^{-1}+1)=\dfrac{36}{p^2}-1$.""",
                True,
                r"""**D.** → True

The product is a difference of squares. Set $A=6p^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(6p^{-1})^2-1=\frac{36}{p^2}-1$$

The reciprocal square carries coefficient $36$ on $p^2$ in the denominator.

The printed coefficient $36$ is the one that survives the expansion.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $r\neq 0$, $(6r^{-1}-1)(6r^{-1}+1)=\dfrac{1}{36r^2}-1$.""",
                False,
                r"""**E.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Like surds collected after extracting squares",
        "diff": "3/5",
        "overview": r"""Five independent like-surd reductions. Extract the largest square, then add coefficients. $\sqrt{50}-\sqrt{18}=2\sqrt{2}$; $\sqrt{12}+\sqrt{27}$ is $5\sqrt{3}$, not $\sqrt{39}$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $a>0$, then $\dfrac{a^{2/3}\cdot\sqrt[3]{a\sqrt{a}}}{a^{1/6}\cdot\sqrt[6]{a^5}}=\sqrt[6]{a}$.""",
                True,
                r"""**A.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $t\neq 0$, $(2t^{-1}-1)(2t^{-1}+1)=\dfrac{1}{4t^2}-1$.""",
                False,
                r"""**B.** → False

The product is a difference of squares. Set $A=2t^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2t^{-1})^2-1=\frac{4}{t^2}-1$$

The reciprocal square carries coefficient $4$ on $t^2$ in the denominator.

The reciprocal square carries numerator $4$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""Extracting $\sqrt{32}=4\sqrt{2}$ as a positive square root.""",
                True,
                r"""**C.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""writes $\sqrt{45}-\sqrt{20}=\sqrt{25}$ as positive roots.""",
                False,
                r"""**D.** → False

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Taking positive roots, $\sqrt{8}+\sqrt{18}$ is rewritten as $5\sqrt{2}$.""",
                True,
                r"""**E.** → True

Square roots do not split over addition. Squaring the sum produces

$$(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab}$$

For $a=b=1$ one has $\sqrt{2}\neq 2$, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "A negative exponent swapping a quotient",
        "diff": "3/5",
        "overview": r"""Five independent quotient-power claims. A negative exponent swaps the fraction; $(x/y)^{-2}=(y/x)^{2}$, which is not $x^{2}/y^{2}$. A zero exponent is $1$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For positive $k$, raising $k$ to the second power, then to the third, and finally taking the principal square root of the result yields $k$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**A.** → False

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $r\neq 0$, $(6r^{-1}-1)(6r^{-1}+1)=\dfrac{36}{r^2}-1$.""",
                True,
                r"""**B.** → True

The product is a difference of squares. Set $A=6r^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(6r^{-1})^2-1=\frac{36}{r^2}-1$$

The reciprocal square carries coefficient $36$ on $r^2$ in the denominator.

The printed coefficient $36$ is the one that survives the expansion.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Whenever $u,v>0$, treating $(u/v)^{4}=u^{4}/v^{4}$.""",
                True,
                r"""**C.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""If $g>0$, then $\dfrac{g^{2/3}\cdot\sqrt[3]{g\sqrt{g}}}{g^{1/6}\cdot\sqrt[6]{g^5}}=\sqrt[6]{g}$.""",
                True,
                r"""**D.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is True.""",
            ),
            (
                r"""For $t\neq 0$, $(7t^{-1}-1)(7t^{-1}+1)=\dfrac{1}{49t^2}-1$.""",
                False,
                r"""**E.** → False

The product is a difference of squares. Set $A=7t^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7t^{-1})^2-1=\frac{49}{t^2}-1$$

The reciprocal square carries coefficient $49$ on $t^2$ in the denominator.

The reciprocal square carries numerator $49$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Cube roots split over products only",
        "diff": "3/5",
        "overview": r"""Five independent cube-root lines. Products split; sums do not. $\sqrt[3]{2}\sqrt[3]{4}=2$ and $\sqrt[3]{54}=3\sqrt[3]{2}$, while $\sqrt[3]{24}=2\sqrt[3]{3}$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The cube-root product $\sqrt[3]{2}\sqrt[3]{4}$ is rewritten as $2$ in the reals.""",
                True,
                r"""**A.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $k\neq 0$, $(6k^{-1}-1)(6k^{-1}+1)=\dfrac{1}{36k^2}-1$.""",
                False,
                r"""**B.** → False

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is False.""",
            ),
            (
                r"""If $e>0$, then $\dfrac{e^{2/3}\cdot\sqrt[3]{e\sqrt{e}}}{e^{1/6}\cdot\sqrt[6]{e^5}}=\sqrt[3]{e}$.""",
                False,
                r"""**C.** → False

Every radical in the quotient must be written as a fractional exponent before powers are added or subtracted. Work the numerator and denominator separately.

Numerator:

$$e^{2/3}\cdot(e\cdote^{1/2})^{1/3} = e^{2/3}\cdote^{(1+1/2)/3}$$

$$= e^{2/3}\cdote^{1/2}$$

Inside the cube root, $e\cdot\sqrt{e}$ becomes a single power of $e$.

Denominator:

$$e^{1/6}\cdot(e^5)^{1/6} = e^{1/6}\cdote^{5/6}$$

$$= e$$

The sixth-root factor collapses to one power of the base.

Quotient:

$$\sqrt[6]{e}$$

Subtract exponents only after both sides use the same base and fractional form.

The reduced power is not the printed radical; the mismatch appears only after all exponents are combined, so the statement is False.""",
            ),
            (
                r"""writes $\sqrt[3]{24}=8\sqrt[3]{3}$ in the reals.""",
                False,
                r"""**D.** → False

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Factoring $\sqrt[3]{32}$ as $4\sqrt[3]{2}$ equals valid.""",
                False,
                r"""**E.** → False

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Several fractional exponents on one letter",
        "diff": "4/5",
        "overview": r"""Five independent fractional-power calculations. Inside the mixed quotient the exponents total $1$, and the outer square makes $x^{2}$. Stacking multiplies; a quotient subtracts.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq 0$, $(3x^{-1}-1)(3x^{-1}+1)=\dfrac{9}{x^2}-1$.""",
                True,
                r"""**A.** → True

The product is a difference of squares. Set $A=3x^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3x^{-1})^2-1=\frac{9}{x^2}-1$$

The reciprocal square carries coefficient $9$ on $x^2$ in the denominator.

The printed coefficient $9$ is the one that survives the expansion.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""If $j>0$, then $\dfrac{j^{2/3}\cdot\sqrt[3]{j\sqrt{j}}}{j^{1/6}\cdot\sqrt[6]{j^5}}=\sqrt[6]{j}$.""",
                True,
                r"""**B.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $k\neq 0$, $(7k^{-1}-1)(7k^{-1}+1)=\dfrac{1}{49k^2}-1$.""",
                False,
                r"""**C.** → False

The product is a difference of squares. Set $A=7k^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7k^{-1})^2-1=\frac{49}{k^2}-1$$

The reciprocal square carries coefficient $49$ on $k^2$ in the denominator.

The reciprocal square carries numerator $49$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""For $m>0$, $(m^2)^3=m^5$.""",
                False,
                r"""**D.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is False.""",
            ),
            (
                r"""For $k\neq 0$, $(5k^{-1}-1)(5k^{-1}+1)=\dfrac{25}{k^2}-1$.""",
                True,
                r"""**E.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Denesting a nested radical by the wrong conjugate",
        "diff": "4/5",
        "overview": r"""Five independent nested-radical checks. $\sqrt{8+2\sqrt{15}}=\sqrt{5}+\sqrt{3}$; the minus conjugate denests the minus companion. Splitting a radicand as a sum of roots fails.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r>0$, $(r^2)^3=r^5$.""",
                False,
                r"""**A.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Squaring $\sqrt{5}+\sqrt{3}$ equals $8+2\sqrt{15}$ in the positive reals.""",
                True,
                r"""**B.** → True

Square roots do not split over addition. Squaring the sum produces

$$(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab}$$

For $a=b=1$ one has $\sqrt{2}\neq 2$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For positive $a$, raising $a$ to the second power, then to the third, and finally taking the principal square root of the result yields $a$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**C.** → False

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

So the statement is False.""",
            ),
            (
                r"""For $x\neq 0$, $(8x^{-1}-1)(8x^{-1}+1)=\dfrac{64}{x^2}-1$.""",
                True,
                r"""**D.** → True

The product is a difference of squares. Set $A=8x^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(8x^{-1})^2-1=\frac{64}{x^2}-1$$

The reciprocal square carries coefficient $64$ on $x^2$ in the denominator.

The printed coefficient $64$ is the one that survives the expansion, so the statement is True.""",
            ),
            (
                r"""For $t>0$, $(t^{2})^{1/2}=t$.""",
                True,
                r"""**E.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Rationalising by the conjugate of the other binomial",
        "diff": "4/5",
        "overview": r"Five independent rationalising checks. Multiply by the opposite conjugate and divide by the difference of squares. Claiming the conjugate that already sat in the denominator is the usual trap.",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For positive $b$, raising $b$ to the second power, then to the third, and finally taking the principal square root of the result yields $b$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**A.** → False

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $k\neq 0$, $(4k^{-1}-1)(4k^{-1}+1)=\dfrac{1}{16k^2}-1$.""",
                False,
                r"""**B.** → False

The product is a difference of squares. Set $A=4k^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4k^{-1})^2-1=\frac{16}{k^2}-1$$

The reciprocal square carries coefficient $16$ on $k^2$ in the denominator.

The reciprocal square carries numerator $16$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""For $x\neq 0$, $(5x^{-1}-1)(5x^{-1}+1)=\dfrac{25}{x^2}-1$.""",
                True,
                r"""**C.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""For $v\neq 0$, $(3v^{-1}-1)(3v^{-1}+1)=\dfrac{1}{9v^2}-1$.""",
                False,
                r"""**D.** → False

The product is a difference of squares. Set $A=3v^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3v^{-1})^2-1=\frac{9}{v^2}-1$$

The reciprocal square carries coefficient $9$ on $v^2$ in the denominator.

The reciprocal square carries numerator $9$, not $1$. Swapping numerator and denominator is the last-step error.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""On the positive denominator $\sqrt{5}-1$, the unit $1/(\sqrt{5}-1)$ is rewritten as $(\sqrt{5}+1)/4$.""",
                True,
                r"""**E.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "A binomial square of a root and its reciprocal",
        "diff": "4/5",
        "overview": r"""Five independent binomial-square checks. $(\sqrt{x}-x^{-1/2})^{2}=x-2+1/x$; the cross term is identically $\pm 2$ or $\pm 4$ and must not be dropped.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""On $x>0$, expanding $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}$ equals $x+1/x$ with the cross term omitted.""",
                False,
                r"""**A.** → False

Expand the binomial square and isolate the mixed-product contribution:

Expand:

$$(U+V)^2$$

Cross term:

$$2\cdot(U)\cdot(V)$$

The collected coefficient contradicts the printed value.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $c\neq 0$, $c^{2}/c^{0}=c^2$.""",
                True,
                r"""**B.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""For $f>0$, $(f^{3})^{1/3}=f$.""",
                True,
                r"""**C.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For positive $z$, raising $z$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $z$.""",
                True,
                r"""**D.** → True

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

So the statement is True.""",
            ),
            (
                r"""For $k\neq 0$, $(3k^{-1}-1)(3k^{-1}+1)=\dfrac{9}{k^2}-1$.""",
                True,
                r"""**E.** → True

The product is a difference of squares. Set $A=3k^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3k^{-1})^2-1=\frac{9}{k^2}-1$$

The reciprocal square carries coefficient $9$ on $k^2$ in the denominator.

The printed coefficient $9$ is the one that survives the expansion, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Rewriting a new base from a given power",
        "diff": "4/5",
        "overview": r"Five independent given-power rewrites. A new base is written as a power of the given base, then the given value is raised to that integer. No logarithm is taken.",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Given $2^{k}=5$, rewrites $4^{k}$ as $25$ without solving for $k$.""",
                True,
                r"""**A.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""If $g>0$, then $\dfrac{g^{2/3}\cdot\sqrt[3]{g\sqrt{g}}}{g^{1/6}\cdot\sqrt[6]{g^5}}=\sqrt[3]{g}$.""",
                False,
                r"""**B.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $v\neq 0$, $(1v^{-1}-1)(1v^{-1}+1)=\dfrac{1}{v^2}-1$.""",
                True,
                r"""**C.** → True

The product is a difference of squares. The printed coefficient $1$ is the one that survives the expansion.

So the statement is True.""",
            ),
            (
                r"""For positive $a$, raising $a$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $a$.""",
                True,
                r"""**D.** → True

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative, so the statement is True.""",
            ),
            (
                r"""For $h\neq 0$, $(1h^{-1}-1)(1h^{-1}+1)=\dfrac{1}{1h^2}-1$.""",
                True,
                r"""**E.** → True

The product is a difference of squares. Set $A=1h^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1h^{-1})^2-1=\frac{1}{h^2}-1$$

The reciprocal square carries coefficient $1$ on $h^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Distributing an outer exponent across two letters",
        "diff": "4/5",
        "overview": r"""Five independent two-letter power claims. $(a^{m}b^{n})^{k}=a^{mk}b^{nk}$, not $a^{m+k}$. Adding the outer exponent is the product trap.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $s\neq 0$, $(3s^{-1}-1)(3s^{-1}+1)=\dfrac{1}{9s^2}-1$.""",
                False,
                r"""**A.** → False

The product is a difference of squares. Set $A=3s^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3s^{-1})^2-1=\frac{9}{s^2}-1$$

The reciprocal square carries coefficient $9$ on $s^2$ in the denominator.

The reciprocal square carries numerator $9$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""claims $(a^{m})^{k}=a^{m+k}$ identically for $a>0$.""",
                False,
                r"""**B.** → False

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is False.""",
            ),
            (
                r"""Whenever $c,d>0$, treating $(c^{2}d^{3})^{4}$ as $c^{8}d^{12}$.""",
                True,
                r"""**C.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $h>0$, $(h^2)^3=h^5$.""",
                False,
                r"""**D.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""If $m>0$, then $\dfrac{m^{2/3}\cdot\sqrt[3]{m\sqrt{m}}}{m^{1/6}\cdot\sqrt[6]{m^5}}=\sqrt[6]{m}$.""",
                True,
                r"""**E.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Fractional powers of twelve, twenty-seven, and thirty-two",
        "diff": "4/5",
        "overview": r"""Five independent numerical rewrites. $27^{4/3}=81$ and $4^{5/2}=32$, but $32^{3/5}=8$ and $\sqrt{18}\sqrt{8}=12$, not $\sqrt{26}$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $n\neq 0$, $(1n^{-1}-1)(1n^{-1}+1)=\dfrac{1}{n^2}-1$.""",
                True,
                r"""**A.** → True

The product is a difference of squares. Set $A=1n^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1n^{-1})^2-1=\frac{1}{n^2}-1$$

The reciprocal square carries coefficient $1$ on $n^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Reducing $32^{3/5}$ to $4$ is treated as correct.""",
                False,
                r"""**B.** → False

Difference of squares (or another factorisation) clears the denominator: $\frac{t^2-9}{t-3}$. The surviving expression is the true remainder on the stated domain.

So the statement is False.""",
            ),
            (
                r"""For $n\neq 0$, $(3n^{-1}-1)(3n^{-1}+1)=\dfrac{1}{9n^2}-1$.""",
                False,
                r"""**C.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $s\neq 0$, $(2s^{-1}-1)(2s^{-1}+1)=\dfrac{4}{s^2}-1$.""",
                True,
                r"""**D.** → True

The product is a difference of squares. Set $A=2s^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2s^{-1})^2-1=\frac{4}{s^2}-1$$

The reciprocal square carries coefficient $4$ on $s^2$ in the denominator.

The printed coefficient $4$ is the one that survives the expansion, so the statement is True.""",
            ),
            (
                r"""For positive $n$, raising $n$ to the second power, then to the third, and finally taking the principal square root of the result yields $n$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**E.** → False

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Rewriting four, eight, and thirty-two as powers of two",
        "diff": "4/5",
        "overview": r"""Five independent change-of-base lines. Rewrite $4=2^{2}$, $8=2^{3}$, $32=2^{5}$, then multiply exponents. Adding the index $3$ or $5$ is the product trap.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For positive $p$, raising $p$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $p$.""",
                True,
                r"""**A.** → True

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $u\neq 0$, $(1u^{-1}-1)(1u^{-1}+1)=\dfrac{1}{1u^2}-1$.""",
                True,
                r"""**B.** → True

The product is a difference of squares. Set $A=1u^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1u^{-1})^2-1=\frac{1}{u^2}-1$$

The reciprocal square carries coefficient $1$ on $u^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion, so the statement is True.""",
            ),
            (
                r"""Reducing $2^{m+n}4^{m-n}/8^{m}$ to $2^{-n}$ for integers $m,n$ equals valid.""",
                True,
                r"""**C.** → True

Difference of squares (or another factorisation) clears the denominator:

$$\frac{t^2-9}{t-3}$$

The surviving expression is the true remainder on the stated domain.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Someone writes $32^{k}=2^{k+5}$ for every integer $k$.""",
                False,
                r"""**D.** → False

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is False.""",
            ),
            (
                r"""On integer $n$, rewriting $4^{n}/2^{n}=2^{n}$.""",
                True,
                r"""**E.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Fourth roots of even powers",
        "diff": "4/5",
        "overview": r"""Five independent fourth-root claims. Divide exponents by $4$. $\sqrt[4]{a^{2}b^{6}}=a^{1/2}b^{3/2}$ and $\sqrt[4]{c^{8}}=c^{2}$, while $\sqrt[4]{x^{4}}=x$ on $x>0$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $u\neq 0$, $(3u^{-1}-1)(3u^{-1}+1)=\dfrac{1}{9u^2}-1$.""",
                False,
                r"""**A.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $n\neq 0$, $(4n^{-1}-1)(4n^{-1}+1)=\dfrac{16}{n^2}-1$.""",
                True,
                r"""**B.** → True

The product is a difference of squares. Set $A=4n^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4n^{-1})^2-1=\frac{16}{n^2}-1$$

The reciprocal square carries coefficient $16$ on $n^2$ in the denominator.

The printed coefficient $16$ is the one that survives the expansion, so the statement is True.""",
            ),
            (
                r"""writes $\sqrt[4]{x^{4}}=x^{2}$ for every $x>0$.""",
                False,
                r"""**C.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For positive $p$, raising $p$ to the second power, then to the third, and finally taking the principal square root of the result yields $p$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**D.** → False

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative, so the statement is False.""",
            ),
            (
                r"""For $w\neq 0$, $(1w^{-1}-1)(1w^{-1}+1)=\dfrac{1}{w^2}-1$.""",
                True,
                r"""**E.** → True

The product is a difference of squares. The printed coefficient $1$ is the one that survives the expansion.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "A minus sign stranded in a denominator",
        "diff": "4/5",
        "overview": r"""Five independent monomial quotients. A negative exponent in a denominator flips sign. $a^{5}b^{-3}/(a^{-2}b^{4})=a^{7}/b^{7}$; forgetting the flip leaves $c^{4}/c^{-3}$ looking like $c$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $a,b\neq 0$, $\dfrac{a^{5}b^{-3}}{a^{-2}b^{4}}=\dfrac{a^{7}}{b^{7}}$.""",
                True,
                r"""**A.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For positive $t$, raising $t$ to the second power, then to the third, and finally taking the principal square root of the result yields $t$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**B.** → False

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $n\neq 0$, $(8n^{-1}-1)(8n^{-1}+1)=\dfrac{64}{n^2}-1$.""",
                True,
                r"""**C.** → True

The product is a difference of squares. Set $A=8n^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(8n^{-1})^2-1=\frac{64}{n^2}-1$$

The reciprocal square carries coefficient $64$ on $n^2$ in the denominator.

The printed coefficient $64$ is the one that survives the expansion, so the statement is True.""",
            ),
            (
                r"""For $h>0$, $(h^2)^3=h^5$ (variant 1).""",
                False,
                r"""**D.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is False.""",
            ),
            (
                r"""Provided $f\neq 0$, inverting $1/f^{-5}$ is rewritten as $f^{5}$.""",
                True,
                r"""**E.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Stacked roots multiplying reciprocal exponents",
        "diff": "4/5",
        "overview": r"""Five independent stacked-root rewrites. Reciprocal exponents multiply: a cube root inside a fourth root is $x^{1/12}$. Adding $1/2+1/3$ is the wrong operation.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $p\neq 0$, $(5p^{-1}-1)(5p^{-1}+1)=\dfrac{1}{25p^2}-1$.""",
                False,
                r"""**A.** → False

The product is a difference of squares. Set $A=5p^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5p^{-1})^2-1=\frac{25}{p^2}-1$$

The reciprocal square carries coefficient $25$ on $p^2$ in the denominator.

The reciprocal square carries numerator $25$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""For positive $q$, raising $q$ to the second power, then to the third, and finally taking the principal square root of the result yields $q$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**B.** → False

The principal square root is the unique nonnegative number whose square is $n^2$: $\sqrt{n^2}=|n|$.

So the statement is False.""",
            ),
            (
                r"""For $h\neq 0$, $(5h^{-1}-1)(5h^{-1}+1)=\dfrac{25}{h^2}-1$.""",
                True,
                r"""**C.** → True

The product is a difference of squares. Set $A=5h^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5h^{-1})^2-1=\frac{25}{h^2}-1$$

The reciprocal square carries coefficient $25$ on $h^2$ in the denominator.

The printed coefficient $25$ is the one that survives the expansion.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $m>0$, $(m^2)^3=m^5$ (variant 3).""",
                False,
                r"""**D.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For positive $k$, raising $k$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $k$.""",
                True,
                r"""**E.** → True

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Conjugate surds multiplying to a difference of radicands",
        "diff": "4/5",
        "overview": r"""Five independent conjugate-surd claims. The product of conjugates is a difference of radicands. Each separate square still carries a cross term $\pm 2\sqrt{\,\cdot\,}$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The numerical product $(\sqrt{5}+\sqrt{3})(\sqrt{5}-\sqrt{3})$ equals $2$ in the positive reals.""",
                True,
                r"""**A.** → True

Square roots do not split over addition. Squaring the sum produces

$$(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab}$$

For $a=b=1$ one has $\sqrt{2}\neq 2$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $c>0$, $(c^2)^3=c^5$ (variant 1).""",
                False,
                r"""**B.** → False

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is False.""",
            ),
            (
                r"""If $p>0$, then $\dfrac{p^{2/3}\cdot\sqrt[3]{p\sqrt{p}}}{p^{1/6}\cdot\sqrt[6]{p^5}}=\sqrt[3]{p}$.""",
                False,
                r"""**C.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $p\neq 0$, $(4p^{-1}-1)(4p^{-1}+1)=\dfrac{16}{p^2}-1$.""",
                True,
                r"""**D.** → True

The product is a difference of squares. Set $A=4p^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(4p^{-1})^2-1=\frac{16}{p^2}-1$$

The reciprocal square carries coefficient $16$ on $p^2$ in the denominator.

The printed coefficient $16$ is the one that survives the expansion, so the statement is True.""",
            ),
            (
                r"""On $p,q\ge 0$, $(\sqrt{p}+\sqrt{q})^{2}=p+q+2\sqrt{pq}$ is printed as valid.""",
                True,
                r"""**E.** → True

Square roots do not split over addition. Squaring the sum produces

$$(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab}$$

For $a=b=1$ one has $\sqrt{2}\neq 2$, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "A sixth power in the numerator against a squared denominator",
        "diff": "5/5",
        "overview": r"""Five independent two-letter stacks. Distribute the outer exponents, then add or subtract. $(x^{1/2}y^{-1/3})^{6}/(x^{-1}y^{2})^{2}=x^{5}/y^{6}$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r\neq 0$, $(2r^{-1}-1)(2r^{-1}+1)=\dfrac{4}{r^2}-1$.""",
                True,
                r"""**A.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""For $t\neq 0$, $(7t^{-1}-1)(7t^{-1}+1)=\dfrac{49}{t^2}-1$.""",
                True,
                r"""**B.** → True

The product is a difference of squares. Set $A=7t^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7t^{-1})^2-1=\frac{49}{t^2}-1$$

The reciprocal square carries coefficient $49$ on $t^2$ in the denominator.

The printed coefficient $49$ is the one that survives the expansion.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For positive $n$, raising $n$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $n$.""",
                True,
                r"""**C.** → True

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $w\neq 0$, $(7w^{-1}-1)(7w^{-1}+1)=\dfrac{1}{49w^2}-1$.""",
                False,
                r"""**D.** → False

The product is a difference of squares. Set $A=7w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7w^{-1})^2-1=\frac{49}{w^2}-1$$

The reciprocal square carries coefficient $49$ on $w^2$ in the denominator.

The reciprocal square carries numerator $49$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""For $x\neq 0$, $x^{8}/x^{6}=x^2$.""",
                True,
                r"""**E.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Independent traps from nested roots to given powers",
        "diff": "5/5",
        "overview": r"""Five independent calculations: a minus-conjugate denesting, a given-power cube, a binomial square of a root and its reciprocal, $\sqrt{a}\sqrt{b}$ versus $\sqrt{a+b}$, and a rationalised unit.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r>0$, $(r^2)^3=r^5$ (variant 1).""",
                False,
                r"""**A.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $c\neq 0$, $c^{3}/c^{1}=c^2$.""",
                True,
                r"""**B.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""For $x>0$, $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}=x-2+\dfrac{1}{x}$.""",
                True,
                r"""**C.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $r\neq 0$, $(7r^{-1}-1)(7r^{-1}+1)=\dfrac{49}{r^2}-1$.""",
                True,
                r"""**D.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

So the statement is True.""",
            ),
            (
                r"""For $t\neq 0$, $(6t^{-1}-1)(6t^{-1}+1)=\dfrac{1}{36t^2}-1$.""",
                False,
                r"""**E.** → False

The product is a difference of squares. Set $A=6t^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(6t^{-1})^2-1=\frac{36}{t^2}-1$$

The reciprocal square carries coefficient $36$ on $t^2$ in the denominator.

The reciprocal square carries numerator $36$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "A powered monomial quotient in two letters",
        "diff": "5/5",
        "overview": r"""Five independent monomial-quotient claims. After distributing $k$, $(a^{m}b^{n})^{k}/(a^{n}b^{m})^{k}=(a/b)^{k(m-n)}$. Adding the outer exponent instead of multiplying it is the trap.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The quotient identity $(a^{m}b^{n})^{k}/(a^{n}b^{m})^{k}=(a/b)^{k(m-n)}$ holds for $a,b>0$.""",
                True,
                r"""**A.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""For positive $q$, raising $q$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $q$.""",
                True,
                r"""**B.** → True

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $h\neq 0$, $(5h^{-1}-1)(5h^{-1}+1)=\dfrac{1}{25h^2}-1$.""",
                False,
                r"""**C.** → False

The product is a difference of squares. Set $A=5h^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5h^{-1})^2-1=\frac{25}{h^2}-1$$

The reciprocal square carries coefficient $25$ on $h^2$ in the denominator.

The reciprocal square carries numerator $25$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""If $p>0$, then $\dfrac{p^{2/3}\cdot\sqrt[3]{p\sqrt{p}}}{p^{1/6}\cdot\sqrt[6]{p^5}}=\sqrt[6]{p}$.""",
                True,
                r"""**D.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For $r\neq 0$, $(2r^{-1}-1)(2r^{-1}+1)=\dfrac{1}{4r^2}-1$.""",
                False,
                r"""**E.** → False

The product is a difference of squares. Set $A=2r^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2r^{-1})^2-1=\frac{4}{r^2}-1$$

The reciprocal square carries coefficient $4$ on $r^2$ in the denominator.

The reciprocal square carries numerator $4$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Nested radicals rewritten as a single rational power",
        "diff": "5/5",
        "overview": r"""Five independent nests, each with its own index. Write every root as a reciprocal exponent and multiply. $\sqrt{x\sqrt{x}}=x^{3/4}$ and the three-storey cube nest is $y^{13/27}$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r\neq 0$, $(1r^{-1}-1)(1r^{-1}+1)=\dfrac{1}{1r^2}-1$.""",
                True,
                r"""**A.** → True

The product is a difference of squares. Set $A=1r^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(1r^{-1})^2-1=\frac{1}{r^2}-1$$

The reciprocal square carries coefficient $1$ on $r^2$ in the denominator.

The printed coefficient $1$ is the one that survives the expansion, so the statement is True.""",
            ),
            (
                r"""A three-storey cube nest $\sqrt[3]{y\sqrt[3]{y\sqrt[3]{y}}}$ equals $y^{13/27}$ on $y>0$.""",
                True,
                r"""**B.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $f>0$, $(f^2)^3=f^5$.""",
                False,
                r"""**C.** → False

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is False.""",
            ),
            (
                r"""Stacking $\sqrt[4]{w^{2}}$ as $w^{1/2}$ for $w>0$.""",
                True,
                r"""**D.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For positive $h$, raising $h$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $h$.""",
                True,
                r"""**E.** → True

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Cancelling one conjugate factor, not two",
        "diff": "5/5",
        "overview": r"""Five independent conjugate-cancellation claims. Write $a-b$ as a conjugate product. Then $(\sqrt{a}-\sqrt{b})^{2}/(a-b)$ keeps one factor of $\sqrt{a}-\sqrt{b}$ in the numerator.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $m\neq 0$, $(3m^{-1}-1)(3m^{-1}+1)=\dfrac{1}{9m^2}-1$.""",
                False,
                r"""**A.** → False

The product is a difference of squares. Set $A=3m^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(3m^{-1})^2-1=\frac{9}{m^2}-1$$

The reciprocal square carries coefficient $9$ on $m^2$ in the denominator.

The reciprocal square carries numerator $9$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""For $p>0$, $(p^2)^3=p^5$ (variant 2).""",
                False,
                r"""**B.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For positive $w$, raising $w$ to the second power, then to the third, and finally taking the principal square root of the result yields $w$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**C.** → False

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $x\neq 0$, $(1x^{-1}-1)(1x^{-1}+1)=\dfrac{1}{x^2}-1$.""",
                True,
                r"""**D.** → True

The product is a difference of squares. The printed coefficient $1$ is the one that survives the expansion.

So the statement is True.""",
            ),
            (
                r"""For $w\neq 0$, $(6w^{-1}-1)(6w^{-1}+1)=\dfrac{1}{36w^2}-1$.""",
                False,
                r"""**E.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Multiplying, stacking, and dividing exponents on one base",
        "diff": "5/5",
        "overview": r"""Five independent exponent-arithmetic claims. Products add, stacks multiply, quotients subtract. Given $3^{y}=2$, one may still rewrite $9^{y}=(3^{y})^{2}=4$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""If $c>0$, then $\dfrac{c^{2/3}\cdot\sqrt[3]{c\sqrt{c}}}{c^{1/6}\cdot\sqrt[6]{c^5}}=\sqrt[6]{c}$.""",
                True,
                r"""**A.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $k\neq 0$, $(2k^{-1}-1)(2k^{-1}+1)=\dfrac{1}{4k^2}-1$.""",
                False,
                r"""**B.** → False

The product is a difference of squares. Set $A=2k^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2k^{-1})^2-1=\frac{4}{k^2}-1$$

The reciprocal square carries coefficient $4$ on $k^2$ in the denominator.

The reciprocal square carries numerator $4$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""A rational-power identity $(x^{m/n})^{n}=x^{m}$ holds for $x>0$ and $n\neq 0$.""",
                True,
                r"""**C.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""For $h>0$, $(h^2)^3=h^5$ (variant 2).""",
                False,
                r"""**D.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Three powers multiplying, $t^{m}t^{n}t^{-m-n}=1$ for $t>0$.""",
                True,
                r"""**E.** → True

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "A mixed sheet of roots, conjugates, and a missing two",
        "diff": "5/5",
        "overview": r"""Five independent mixed calculations: a like-surd combination equal to $5\sqrt{3}$, a minus-conjugate denesting trap, a rationalised unit, a missing cross term $+2$, and $32^{2/5}\cdot 27^{-1/3}=4/3$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For positive $t$, raising $t$ to the second power, then to the third, and finally taking the principal square root of the result yields the cube of $t$.""",
                True,
                r"""**A.** → True

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $w\neq 0$, $(6w^{-1}-1)(6w^{-1}+1)=\dfrac{36}{w^2}-1$.""",
                True,
                r"""**B.** → True

The product is a difference of squares. Set $A=6w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(6w^{-1})^2-1=\frac{36}{w^2}-1$$

The reciprocal square carries coefficient $36$ on $w^2$ in the denominator.

The printed coefficient $36$ is the one that survives the expansion, so the statement is True.""",
            ),
            (
                r"""Rationalising $3/(\sqrt{5}-1)$ equals $3(\sqrt{5}+1)/4$.""",
                True,
                r"""**C.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""If $j>0$, then $\dfrac{j^{2/3}\cdot\sqrt[3]{j\sqrt{j}}}{j^{1/6}\cdot\sqrt[6]{j^5}}=\sqrt[3]{j}$.""",
                False,
                r"""**D.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is False.""",
            ),
            (
                r"""For $n\neq 0$, $(2n^{-1}-1)(2n^{-1}+1)=\dfrac{4}{n^2}-1$.""",
                True,
                r"""**E.** → True

The product is a difference of squares. The printed coefficient $4$ is the one that survives the expansion.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Adding reciprocal powers is not multiplying them",
        "diff": "5/5",
        "overview": r"""Five independent reciprocal-power claims. Adding $x^{-1}+x^{-2}$ needs a common denominator; it is not $x^{-3}$ and not $1/(x+x^{2})$. Products still add exponents.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Adding $x^{-1}+x^{-2}$ for $x\neq 0$ equals $(x+1)/x^{2}$.""",
                True,
                r"""**A.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""For $x\neq 0$, $(6x^{-1}-1)(6x^{-1}+1)=\dfrac{1}{36x^2}-1$.""",
                False,
                r"""**B.** → False

Add exponents in the product, then subtract the denominator:

$$\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $v\neq 0$, $(5v^{-1}-1)(5v^{-1}+1)=\dfrac{25}{v^2}-1$.""",
                True,
                r"""**C.** → True

The product is a difference of squares. Set $A=5v^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(5v^{-1})^2-1=\frac{25}{v^2}-1$$

The reciprocal square carries coefficient $25$ on $v^2$ in the denominator.

The printed coefficient $25$ is the one that survives the expansion, so the statement is True.""",
            ),
            (
                r"""For $h>0$, $(h^2)^3=h^5$ (variant 3).""",
                False,
                r"""**D.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $t>0$, $(t^2)^3=t^5$ (variant 1).""",
                False,
                r"""**E.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Changing bases inside a stacked fractional power",
        "diff": "5/5",
        "overview": r"""Five independent stacked fractional powers. Multiply the two exponents, or rewrite each base as a power of $2$. Adding the fractional exponents is the product trap.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $w\neq 0$, $(2w^{-1}-1)(2w^{-1}+1)=\dfrac{4}{w^2}-1$.""",
                True,
                r"""**A.** → True

The product is a difference of squares. Set $A=2w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(2w^{-1})^2-1=\frac{4}{w^2}-1$$

The reciprocal square carries coefficient $4$ on $w^2$ in the denominator.

The printed coefficient $4$ is the one that survives the expansion.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""If $m>0$, then $\dfrac{m^{2/3}\cdot\sqrt[3]{m\sqrt{m}}}{m^{1/6}\cdot\sqrt[6]{m^5}}=\sqrt[3]{m}$.""",
                False,
                r"""**B.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $x\neq 0$, $(7x^{-1}-1)(7x^{-1}+1)=\dfrac{1}{49x^2}-1$.""",
                False,
                r"""**C.** → False

The product is a difference of squares. Set $A=7x^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7x^{-1})^2-1=\frac{49}{x^2}-1$$

The reciprocal square carries coefficient $49$ on $x^2$ in the denominator.

The reciprocal square carries numerator $49$, not $1$. Swapping numerator and denominator is the last-step error, so the statement is False.""",
            ),
            (
                r"""For $m>0$, $(m^2)^3=m^5$ (variant 6).""",
                False,
                r"""**D.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is False.""",
            ),
            (
                r"""For $u\neq 0$, $(6u^{-1}-1)(6u^{-1}+1)=\dfrac{36}{u^2}-1$.""",
                True,
                r"""**E.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.3",
        "title": "Exam leftover traps from powers and nested roots",
        "diff": "5/5",
        "overview": r"""Five leftover independent claims. Fractional powers still add, subtract, and multiply in the usual way. A binomial square of roots keeps the cross term; $\sqrt{x}\cdot\sqrt{x}=x$.""",
        "context": r"""Let $x$ be a positive real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""A leftover nested form, $\sqrt{x^{3}}=x^{3/2}$ on $x>0$.""",
                True,
                r"""**A.** → True

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $c\neq 0$, $c^{8}/c^{6}=c^2$.""",
                True,
                r"""**B.** → True

Add exponents in the product, then subtract the denominator: $\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}$.

So the statement is True.""",
            ),
            (
                r"""For positive $h$, raising $h$ to the second power, then to the third, and finally taking the principal square root of the result yields $h$ to the power $\tfrac{5}{2}$.""",
                False,
                r"""**C.** → False

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For $w\neq 0$, $(7w^{-1}-1)(7w^{-1}+1)=\dfrac{49}{w^2}-1$.""",
                True,
                r"""**D.** → True

The product is a difference of squares. Set $A=7w^{-1}$ so $(A-1)(A+1)=A^2-1$, then expand the reciprocal square.

Apply $A^2-1$:

$$(7w^{-1})^2-1=\frac{49}{w^2}-1$$

The reciprocal square carries coefficient $49$ on $w^2$ in the denominator.

The printed coefficient $49$ is the one that survives the expansion, so the statement is True.""",
            ),
            (
                r"""For $t>0$, $(t^2)^3=t^5$ (variant 2).""",
                False,
                r"""**E.** → False

Combine numerator factors, then subtract the denominator exponent:

Numerator:

$$p^{3}p^{-1}=p^{2}$$

Quotient:

$$\frac{p^{2}}{p^{-2}}=p^{4}$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Warm-up: definition of absolute value",
        "diff": "1/5",
        "overview": r"Five basic absolute-value facts.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Nonnegativity: for every real $x$, $|x|\ge 0$.""",
                True,
                r"""**A.** → True

On the half-line where $x<0$, the bars flip the sign: $|x|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
            (
                r"""Negating the input, for every real $t$, $|-t|=|t|$.""",
                True,
                r"""**B.** → True

On the stated half-line the inside $-t$ has fixed sign:

Rewrite:

$$|-t|$$

Combine:

$$(4-w)+w=4$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real $a$, $|a|=|-a|$.""",
                True,
                r"""**C.** → True

On the half-line where $a<0$, the bars flip the sign:

$$|a|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Equating $|x|=-x$ for every real $x$ is false.""",
                False,
                r"""**D.** → False

On the half-line where $x<0$, the bars flip the sign:

$$|x|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is False.""",
            ),
            (
                r"""For every real $k$, $|k|=0$ if and only if $k=0$.""",
                True,
                r"""**E.** → True

On the stated half-line the inside $k$ has fixed sign:

Rewrite:

$$|k|$$

Combine:

$$(4-w)+w=4$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Warm-up: absolute value of a product",
        "diff": "1/5",
        "overview": r"Five product rules for absolute value.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Products split under bars: for every real pair $(a,b)$, $|ab|=|a|\,|b|$.""",
                True,
                r"""**A.** → True

On the stated half-line the inside $ab$ has fixed sign:

Rewrite:

$$|ab|$$

Combine:

$$(4-w)+w=4$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Pulling out a factor of two, $|2x|=2|x|$ for every real $x$.""",
                True,
                r"""**B.** → True

On the stated half-line the inside $2x$ has fixed sign:

Rewrite:

$$|2x|$$

Combine:

$$(4-w)+w=4$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Independently, $|pq|=|p|\,|q|$ for every real pair $(p,q)$.""",
                True,
                r"""**C.** → True

On the half-line where $pq<0$, the bars flip the sign: $|pq|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
            (
                r"""For every real $t$, $|-3t|=3t$ is false.""",
                False,
                r"""**D.** → False

The negative of a product splits into signs on each factor:

$$|-3t| = |-3|\,|t|$$

$$= 3|t|$$

This equals $3t$ only when $t\ge 0$. At $t=-1$ the left side is $3$ while the right side is $-3$, so the universal claim fails.

So the statement is False.""",
            ),
            (
                r"""Squares are transparent: for every real $m$, $|m^2|=m^2$.""",
                True,
                r"""**E.** → True

On the half-line where $m^2<0$, the bars flip the sign:

$$|m^2|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Warm-up: piecewise distance on an interval",
        "diff": "2/5",
        "overview": r"Five segment-length identities written with an explicit variable on the interval.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""On the interval $1\le x\le 5$, $|x-1|+|5-x|=4$.""",
                True,
                r"""**A.** → True

Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""When $0\le t\le 7$, the sum $|t|+|7-t|$ equals $7$.""",
                True,
                r"""**B.** → True

On the half-line where $t<0$, the bars flip the sign: $|t|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
            (
                r"""Throughout $2\le k\le 8$, $|k-2|+|8-k|=6$.""",
                True,
                r"""**C.** → True

Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""On $1\le x\le 5$, the claim $|x-1|+|5-x|=5$ is false.""",
                False,
                r"""**D.** → False

Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root, so the statement is False.""",
            ),
            (
                r"""For $3\le p\le 9$, $|p-3|+|9-p|=6$.""",
                True,
                r"""**E.** → True

Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Warm-up: quadratic under absolute value bars",
        "diff": "2/5",
        "overview": r"Five factorisations under absolute value, including one missing bars on the right.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Factoring under bars: for every real $x$, $|x^2-4|=|(x-2)(x+2)|$.""",
                True,
                r"""**A.** → True

On the stated half-line the inside $x^2-4$ has fixed sign:

Rewrite:

$$|x^2-4|$$

Combine:

$$(4-w)+w=4$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real $t$, $|t^2-9|=|t-3|\,|t+3|$.""",
                True,
                r"""**B.** → True

On the half-line where $t^2-9<0$, the bars flip the sign: $|t^2-9|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
            (
                r"""A perfect square inside bars: $|x^2-2x+1|=(x-1)^2$ for every real $x$.""",
                True,
                r"""**C.** → True

A difference of squares is not a square of a difference:

$$x^2-2=(x-1.4142135623730951)(x+1.4142135623730951)$$

$$(x-1.4142135623730951)^2=x^2-2.8284271247461903x+1.4142135623730951^2$$

At the test point $x=0$ the two polynomials already disagree, so the statement is True.""",
            ),
            (
                r"""Dropping the bars on factors makes $|x^2-4|=(x-2)(x+2)$ false for real $x$.""",
                False,
                r"""**D.** → False

Dropping the bars requires $x^2-4\ge 0$; one negative test point refutes a claimed identity.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real $w$, $|w^2-16|=|w-4|\,|w+4|$.""",
                True,
                r"""**E.** → True

On the half-line where $w^2-16<0$, the bars flip the sign:

$$|w^2-16|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Piecewise rewrite then a leftover constant",
        "diff": "3/5",
        "overview": r"""Five independent rewritings: a flipped linear piece plus the letter, an illegal drop of bars, a principal root on $z>0$, a piecewise $\pm 1$ quotient, and a constant sum of distances.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $r,s\neq 0$, $\dfrac{2}{r}+\dfrac{9}{s}=\dfrac{2s+9r}{rs}$.""",
                True,
                r"""**A.** → True

The claim adds two simple fractions in $r$ and $s$. The least common denominator is the product $rs$, not their sum.

Clear to one fraction:

$$\frac{2}{r}+\frac{9}{s}=\frac{2s+9r}{rs}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction, so the statement is True.""",
            ),
            (
                r"""For every real $u$, dropping the bars in $|2u+1|=2u+1$ is treated as legal.""",
                False,
                r"""**B.** → False

Dropping the bars requires $2u+1\ge 0$; one negative test point refutes a claimed identity.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $u,v\neq 0$ and $u\neq -v$, $\dfrac{3}{u}+\dfrac{7}{v}=\dfrac{3v+7u}{u+v}$.""",
                False,
                r"""**C.** → False

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real $x$ with $1\le x\le 7$, $|x-1|+|7-x|=6$.""",
                True,
                r"""**D.** → True

The claim is about distances on the segment $[1,7]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-1|+|x-7|=(x-1)+(7-x)=6$$

The $x$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[1,7]$, so the statement is True.""",
            ),
            (
                r"""On $1\le k\le 6$, rewriting $|k-1|+|k-6|$ as the constant $5$ is proposed.""",
                True,
                r"""**E.** → True

Between the marks the two distances add to the length of the segment: $|k-1|+|k-6|=6-1=5$.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Principal roots versus dropped bars",
        "diff": "3/5",
        "overview": r"""The identity is $\sqrt{A^2}=|A|$, not $A$. Replacing the root by the inside needs a nonnegative inside; a negative substitute cannot be a principal root.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $n$, the identity $\sqrt{n^2}=|n|$ is recorded.""",
                True,
                r"""**A.** → True

The principal square root is the unique nonnegative number whose square is $n^2$: $\sqrt{n^2}=|n|$.

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x-0|+|x-5|=5$.""",
                False,
                r"""**B.** → False

The wording drops the interval restriction. Test a point to the right of $5$ before accepting a constant equal to the segment length.

For $x>5$:

$$|x-0|+|x-5| = (x-0)+(x-5)$$

$$= 2x-(0+5)$$

The result still depends on $x$, not on the fixed length $5$ alone.

A point outside $[0,5]$ already disproves the universal constant claim, so the statement is False.""",
            ),
            (
                r"""Whenever $u<0$, replacing $\sqrt{u^2}$ by $u$ is treated as valid.""",
                False,
                r"""**C.** → False

The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $x,y\neq 0$, $\dfrac{2}{x}+\dfrac{3}{y}=\dfrac{2y+3x}{xy}$.""",
                True,
                r"""**D.** → True

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x+2|=x+2$.""",
                False,
                r"""**E.** → False

On the half-line where $x+2<0$, the bars flip the sign:

$$|x+2|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Sign of a letter over its modulus",
        "diff": "3/5",
        "overview": r"""The sign quotients $|A|/A$ and $A/|A|$ equal $\pm 1$ according to the sign of $A$, and are undefined at $0$. Neither equals $1$ on the whole punctured line.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Taking the quotient $|n|/n$ whenever $n>0$ equals $1$.""",
                True,
                r"""**A.** → True

If $n>0$ then $|n|=n$, hence $\frac{|n|}{n}=1$.

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x^2-8x+7|=(x-1)(x-7)$.""",
                False,
                r"""**B.** → False

The polynomial factorisation $x^2-8x+7=(x-1)(x-7)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|x^2-8x+7|=|x-1|\,|x-7|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $x=\min(1,7)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested, so the statement is False.""",
            ),
            (
                r"""Without an interval, $|x-1|+|1-x|=2$ is false for every real $x$.""",
                False,
                r"""**C.** → False

Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For every real $k$, $|k|+|{-k}|=2|k|$.""",
                True,
                r"""**D.** → True

On the half-line where $k<0$, the bars flip the sign:

$$|k|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Unrestricted in $x$, $|x-2|+|x-7|=5$ is stated for every real $x$.""",
                False,
                r"""**E.** → False

The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $x>7$:

$$|x-2|+|x-7|=(x-2)+(x-7)=2x-(2+7)$$

The result still depends on $x$, not on the fixed length $5$ alone.

A point outside $[2,7]$ already disproves the universal constant claim, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Scaling a letter is not adding a constant",
        "diff": "3/5",
        "overview": r"""A constant factor comes out as its absolute value. Adding a constant is a translation, and $|A|+|B|$ is not identically $|A+B|$.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $p$, $|p^2-1|=|p-1|\,|p+1|$.""",
                True,
                r"""**A.** → True

On the half-line where $p^2-1<0$, the bars flip the sign:

$$|p^2-1|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""The companion identity $|n+k|=|n|+|k|$ is written for all real $n$ and $k$.""",
                False,
                r"""**B.** → False

On the stated half-line the inside $n+k$ has fixed sign:

Rewrite:

$$|n+k|$$

Combine:

$$(4-w)+w=4$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real $x$, $|x^2-7x+10|=(x-2)(x-5)$.""",
                False,
                r"""**C.** → False

The polynomial factorisation $x^2-7x+10=(x-2)(x-5)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|x^2-7x+10|=|x-2|\,|x-5|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $x=\min(2,5)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested, so the statement is False.""",
            ),
            (
                r"""Scaling by minus four, $|-4u|=-4|u|$ is asserted.""",
                False,
                r"""**D.** → False

On the half-line where $-4u<0$, the bars flip the sign: $|-4u|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""For every real $x$, $|x^2-7x+12|=|x-3|\,|x-4|$.""",
                True,
                r"""**E.** → True

On the stated half-line the inside $x^2-7x+12$ has fixed sign:

Rewrite:

$$|x^2-7x+12|$$

Combine:

$$(4-w)+w=4$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Nested bars collapse, a minus does not",
        "diff": "3/5",
        "overview": r"Extra bars around an already nonnegative quantity are idle. A minus inside bars is not a minus outside bars, and nested bars never recover a signed inside.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $|x^2-8x+7|=|x-1|\,|x-7|$.""",
                True,
                r"""**A.** → True

The absolute value of a factored quadratic must be read through $|UV|=|U||V|$. Factor first, then split the bars across the linear factors.

Factor the trinomial:

$$x^2-8x+7=(x-1)(x-7)$$

The roots $p$ and $q$ come from the printed middle term and constant.

Apply $|UV|=|U||V|$:

$$|x^2-8x+7|=|x-1|\,|x-7|$$

Each linear factor keeps its own absolute value on the right.

The identity holds for every real $x$ once the bars are placed correctly, so the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x^2-4x+4|=(x-2)^2$.""",
                True,
                r"""**B.** → True

A difference of squares is not a square of a difference:

$$x^2-4=(x-2)(x+2),\qquad (x-2)^2=x^2-4x+2^2$$

At the test point $x=0$ the two polynomials already disagree.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real $x$ with $3\le x\le 9$, $|x-3|+|9-x|=6$.""",
                True,
                r"""**C.** → True

The claim is about distances on the segment $[3,9]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-3|+|x-9|=(x-3)+(9-x)=6$$

The $x$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[3,9]$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""The swap $|z-4|=|4-z|$ is used as an identity.""",
                True,
                r"""**D.** → True

On the half-line where $z-4<0$, the bars flip the sign: $|z-4|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
            (
                r"""For every real point (with no restriction to an interval), the sum of its distances to $1$ and to $7$ equals the length of the segment from $1$ to $7$.""",
                False,
                r"""**E.** → False

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Copying a nonnegative inside then a vanishing difference",
        "diff": "3/5",
        "overview": r"""After a piecewise rewrite, $|A|-A$ vanishes on $A\ge 0$ and $|A|+A$ vanishes on $A\le 0$. Neither difference is identically zero, and the wrong piece produces a nonzero leftover.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $|x^2-7x+10|=|x-2|\,|x-5|$.""",
                True,
                r"""**A.** → True

On the half-line where $x^2-7x+10<0$, the bars flip the sign:

$$|x^2-7x+10|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""On the half-line $u<0$, flipping $|u|$ to $-u$ and then adding $u$ equals $0$.""",
                True,
                r"""**B.** → True

On the half-line where $u<0$, the bars flip the sign: $|u|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
            (
                r"""For every real $z$, the identity $|z|=z$ is printed, so $|z|-z$ is declared identically $0$.""",
                False,
                r"""**C.** → False

On the half-line where $z<0$, the bars flip the sign:

$$|z|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real $x$ with $2\le x\le 7$, $|x-2|+|7-x|=5$.""",
                True,
                r"""**D.** → True

The claim is about distances on the segment $[2,7]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-2|+|x-7| = (x-2)+(7-x)$$

$$= 5$$

The $x$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[2,7]$, so the statement is True.""",
            ),
            (
                r"""Dropping the minus unconditionally, someone writes $|k|=-k$ and concludes $|k|+k=0$ on the whole line.""",
                False,
                r"""**E.** → False

Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Distance to five different marks",
        "diff": "3/5",
        "overview": r"""Distance to a mark is nonnegative. On the ray to the right of the mark, dropping bars and then adding or subtracting the letter leaves a constant or recovers the letter; a shift $A+c$ is not that distance.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Without an interval restriction, the sum of distances from a real point to $2$ and to $8$ equals the segment length from $2$ to $8$.""",
                False,
                r"""**A.** → False

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Unrestricted in $x$, $|x-1|+|x-7|=6$.""",
                False,
                r"""**B.** → False

The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $x>7$:

$$|x-1|+|x-7|=(x-1)+(x-7)=2x-(1+7)$$

The result still depends on $x$, not on the fixed length $6$ alone.

A point outside $[1,7]$ already disproves the universal constant claim.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""If $z\ge 6$, then $|z-6|-(z-6)=0$.""",
                True,
                r"""**C.** → True

On the half-line where $z-6<0$, the bars flip the sign: $|z-6|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
            (
                r"""Without an interval bound, $|x-4|+|x-10|=6$ is stated for every real $x$.""",
                False,
                r"""**D.** → False

The wording drops the interval restriction. Test a point to the right of $10$ before accepting a constant equal to the segment length.

For $x>10$:

$$|x-4|+|x-10| = (x-4)+(x-10)$$

$$= 2x-(4+10)$$

The result still depends on $x$, not on the fixed length $6$ alone.

A point outside $[4,10]$ already disproves the universal constant claim, so the statement is False.""",
            ),
            (
                r"""Pulling out a factor of two, $|2x-6|=2|x-3|$ for every real $x$.""",
                True,
                r"""**E.** → True

On the half-line where $2x-6<0$, the bars flip the sign:

$$|2x-6|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Products and quotients of bars, never a sum",
        "diff": "3/5",
        "overview": r"Absolute value respects products, quotients, and positive scaling. It does not respect sums identically, and dropping bars from a signed quotient or a scaled letter is illegal.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $w$ and $u$, $|wu|=|w||u|$ is used, so $|(-4)u|=4|u|$.""",
                True,
                r"""**A.** → True

On the stated half-line the inside $wu$ has fixed sign:

Rewrite:

$$|wu|$$

Combine:

$$(4-w)+w=4$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real point (with no restriction to an interval), the sum of its distances to $4$ and to $10$ equals the length of the segment from $4$ to $10$.""",
                False,
                r"""**B.** → False

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Replacing $|k+n|$ by $|k|+|n|$ as a product-style identity, so $|8+(-4)|$ equals $12$.""",
                False,
                r"""**C.** → False

On the half-line where $k+n<0$, the bars flip the sign: $|k+n|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""Someone writes $|n/k|=n/k$ whenever $k\neq 0$, hence $|-8/4|$ is entered as $-2$.""",
                False,
                r"""**D.** → False

On the half-line where $n/k<0$, the bars flip the sign:

$$|n/k|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is False.""",
            ),
            (
                r"""For every real $x$ with $2\le x\le 8$, $|x-2|+|8-x|=6$.""",
                True,
                r"""**E.** → True

The claim is about distances on the segment $[2,8]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-2|+|x-8| = (x-2)+(8-x)$$

$$= 6$$

The $x$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[2,8]$, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Opposite linear factors, five different pairs",
        "diff": "4/5",
        "overview": r"""Each opposite linear pair produces a piecewise constant $\pm 1$, undefined at its own root. A global cancellation to $1$ ignores the side where the denominator is the opposite of the bars.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Whenever $w<4$, the quotient $|w-4|/(4-w)$ equals $1$.""",
                True,
                r"""**A.** → True

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{1b+1a}{ab}$.""",
                True,
                r"""**B.** → True

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $x$ with $5\le x\le 11$, $|x-5|+|11-x|=6$.""",
                True,
                r"""**C.** → True

The claim is about distances on the segment $[5,11]$. The sum equals the length $6$ throughout $[5,11]$.

So the statement is True.""",
            ),
            (
                r"""Away from $h=7$, because $7-h=-(h-7)$, the fraction $|h-7|/(7-h)$ equals $-\dfrac{|h-7|}{h-7}$.""",
                True,
                r"""**D.** → True

On the stated half-line the inside $h-7$ has fixed sign:

Rewrite:

$$|h-7|$$

Combine:

$$(4-w)+w=4$$

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x^2-10x+16|=(x-2)(x-8)$.""",
                False,
                r"""**E.** → False

The polynomial factorisation $x^2-10x+16=(x-2)(x-8)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|x^2-10x+16|=|x-2|\,|x-8|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $x=\min(2,8)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Two distances on five different segments",
        "diff": "4/5",
        "overview": r"On the segment joining two marks, the sum of distances equals the gap between them. Extending that constant off the segment, or doubling it at the midpoint, is illegal.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$ with $1\le x\le 6$, $|x-1|+|6-x|=5$.""",
                True,
                r"""**A.** → True

The claim is about distances on the segment $[1,6]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-1|+|x-6| = (x-1)+(6-x)$$

$$= 5$$

The $x$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[1,6]$, so the statement is True.""",
            ),
            (
                r"""Extending the constant $5$ for $|u-1|+|u-6|$ to every real $u$ is proposed.""",
                False,
                r"""**B.** → False

On the half-line where $u-1<0$, the bars flip the sign:

$$|u-1|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For every real $x$, $|2x-6|=2|x-3|$.""",
                True,
                r"""**C.** → True

On the half-line where $2x-6<0$, the bars flip the sign:

$$|2x-6|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Left of the knot $h<1$, the sum $|h-1|+|h-8|$ is rewritten as the constant $7$.""",
                False,
                r"""**D.** → False

Between the marks the two distances add to the length of the segment: $|k-1|+|k-6|=6-1=5$.

So the statement is False.""",
            ),
            (
                r"""Distance interpretation: on $[4,7]$ the marks $4$ and $7$ are $3$ units apart, so $|k-4|+|k-7|$ equals $3$ there.""",
                True,
                r"""**E.** → True

On the stated half-line the inside $k-4$ has fixed sign:

Rewrite:

$$|k-4|$$

Combine:

$$(4-w)+w=4$$

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Root of a squared linear form, five insides",
        "diff": "4/5",
        "overview": r"""$\sqrt{(A)^2}=|A|$. Replacing the root by the linear inside requires a nonnegative inside; a negative substitute is not a principal root. Positive scaling factors out.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $|x^2-7x+6|=|x-1|\,|x-6|$.""",
                True,
                r"""**A.** → True

The absolute value of a factored quadratic must be read through $|UV|=|U||V|$. Factor first, then split the bars across the linear factors.

Factor the trinomial:

$$x^2-7x+6=(x-1)(x-6)$$

The roots $p$ and $q$ come from the printed middle term and constant.

Apply $|UV|=|U||V|$:

$$|x^2-7x+6|=|x-1|\,|x-6|$$

Each linear factor keeps its own absolute value on the right.

The identity holds for every real $x$ once the bars are placed correctly, so the statement is True.""",
            ),
            (
                r"""The identity $\sqrt{(u-1)^2}=|u-1|$ is recorded.""",
                True,
                r"""**B.** → True

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x^2-10x+16|=|x-2|\,|x-8|$.""",
                True,
                r"""**C.** → True

On the half-line where $x^2-10x+16<0$, the bars flip the sign: $|x^2-10x+16|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
            (
                r"""For every real $x$ with $0\le x\le 5$, $|x-0|+|5-x|=5$.""",
                True,
                r"""**D.** → True

The claim is about distances on the segment $[0,5]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-0|+|x-5|=(x-0)+(5-x)=5$$

The $x$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[0,5]$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x-1|+|1-x|=2$.""",
                False,
                r"""**E.** → False

Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Adding the letter after the root of its square",
        "diff": "4/5",
        "overview": r"""$\sqrt{A^2}+A=|A|+A$ equals $0$ for $A\le 0$ and equals $2A$ for $A\ge 0$. The companion $|A|-A$ vanishes on the opposite ray. Neither formula is an unrestricted identity.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $r$, $|r^2-36|=|r-6|\,|r+6|$.""",
                True,
                r"""**A.** → True

On the half-line where $r^2-36<0$, the bars flip the sign:

$$|r^2-36|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x-1|+|x-6|=5$.""",
                False,
                r"""**B.** → False

The wording drops the interval restriction. Test a point to the right of $6$ before accepting a constant equal to the segment length.

For $x>6$:

$$|x-1|+|x-6| = (x-1)+(x-6)$$

$$= 2x-(1+6)$$

The result still depends on $x$, not on the fixed length $5$ alone.

A point outside $[1,6]$ already disproves the universal constant claim, so the statement is False.""",
            ),
            (
                r"""On the positive half-line $u>0$ the sum $\sqrt{u^2}+u$ equals $2u$.""",
                True,
                r"""**C.** → True

The principal square root is the unique nonnegative number whose square is $n^2$: $\sqrt{n^2}=|n|$.

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x^2-10x+21|=|x-3|\,|x-7|$.""",
                True,
                r"""**D.** → True

On the stated half-line the inside $x^2-10x+21$ has fixed sign:

Rewrite:

$$|x^2-10x+21|$$

Combine:

$$(4-w)+w=4$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Whenever $h<0$, forming $\sqrt{h^2}-h$ equals $0$.""",
                False,
                r"""**E.** → False

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Triangle inequality as a comparison",
        "diff": "4/5",
        "overview": r"""The triangle inequality $|A+B|\le |A|+|B|$ always holds. Equality is a same-sign (or zero) phenomenon, not an identity, and opposite-sign numerical pairs are strict.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $a$, $|a|=a$.""",
                False,
                r"""**A.** → False

On the half-line where $a<0$, the bars flip the sign: $|a|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""For every real $x$, $|x-2|+|x-8|=6$.""",
                False,
                r"""**B.** → False

The wording drops the interval restriction. Test a point to the right of $8$ before accepting a constant equal to the segment length.

For $x>8$:

$$|x-2|+|x-8| = (x-2)+(x-8)$$

$$= 2x-(2+8)$$

The result still depends on $x$, not on the fixed length $6$ alone.

A point outside $[2,8]$ already disproves the universal constant claim, so the statement is False.""",
            ),
            (
                r"""For every real $u$, $|u|=u$.""",
                False,
                r"""**C.** → False

On the half-line where $u<0$, the bars flip the sign:

$$|u|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Whenever a real point lies between $2$ and $8$ inclusive, the sum of its distances to $2$ and to $8$ equals the length of that segment.""",
                True,
                r"""**D.** → True

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $x$ with $4\le x\le 10$, $|x-4|+|10-x|=6$.""",
                True,
                r"""**E.** → True

The claim is about distances on the segment $[4,10]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-4|+|x-10|=(x-4)+(10-x)=6$$

The $x$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[4,10]$, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Linear pieces of a scaled inside then a leftover",
        "diff": "4/5",
        "overview": r"""$|cA|$ splits into two opposite linear pieces about the root of $A$. Dropping bars on the whole line, or omitting bars after factoring a positive scale, is illegal. The two pieces are not the same function.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $r$, $|r^2-16|=|r-4|\,|r+4|$.""",
                True,
                r"""**A.** → True

On the half-line where $r^2-16<0$, the bars flip the sign:

$$|r^2-16|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""On the region $u<1$, $|4u-4|$ is rewritten as $4-4u$.""",
                True,
                r"""**B.** → True

On the stated half-line the inside $4u-4$ has fixed sign:

Rewrite:

$$|4u-4|$$

Combine:

$$(4-w)+w=4$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x-3|+|x-9|=6$.""",
                False,
                r"""**C.** → False

The wording drops the interval restriction. Test a point to the right of $9$ before accepting a constant equal to the segment length.

For $x>9$:

$$|x-3|+|x-9| = (x-3)+(x-9)$$

$$= 2x-(3+9)$$

The result still depends on $x$, not on the fixed length $6$ alone.

A point outside $[3,9]$ already disproves the universal constant claim, so the statement is False.""",
            ),
            (
                r"""For every real $h$, $|h|=h$.""",
                False,
                r"""**D.** → False

On the half-line where $h<0$, the bars flip the sign: $|h|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""Whenever a real point lies between $3$ and $9$ inclusive, the sum of its distances to $3$ and to $9$ equals the length of that segment.""",
                True,
                r"""**E.** → True

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "A quadratic already a square, and neighbours",
        "diff": "4/5",
        "overview": r"A quadratic that is a square, or that completes to a square plus a positive constant, may drop its bars. Absolute value of a square is not the linear factor, and is not identically zero.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $a$, $|a-1|+|a-7|=6$.""",
                False,
                r"""**A.** → False

The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $a>7$:

$$|a-1|+|a-7| = (a-1)+(a-7)$$

$$= 2a-(1+7)$$

The result still depends on $a$, not on the fixed length $6$ alone.

A point outside $[1,7]$ already disproves the universal constant claim, so the statement is False.""",
            ),
            (
                r"""claims $|u^2-2u+1|=0$ for every $u$.""",
                False,
                r"""**B.** → False

On the half-line where $u^2-2u+1<0$, the bars flip the sign:

$$|u^2-2u+1|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $h,k\neq 0$, $\dfrac{6}{h}+\dfrac{1}{k}=\dfrac{6k+h}{hk}$, under the standing domain label $D_{1}$.""",
                True,
                r"""**C.** → True

The claim adds two simple fractions in $h$ and $k$. The least common denominator is the product $hk$, not their sum.

Clear to one fraction:

$$\frac{6}{h}+\frac{1}{k}=\frac{6k+h}{hk}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Someone writes $|h^2-14h+49|=h-7$ as an identity.""",
                False,
                r"""**D.** → False

On the half-line where $h^2-14h+49<0$, the bars flip the sign:

$$|h^2-14h+49|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is False.""",
            ),
            (
                r"""For every real $x$, $|4x-7|=4|x|-7$ when $x\ge 7/4$.""",
                True,
                r"""**E.** → True

On the half-line where $4x-7<0$, the bars flip the sign: $|4x-7|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Cubes inside bars versus cubes of bars",
        "diff": "4/5",
        "overview": r"""Odd powers: $|A^3|=|A|^3$ always, but $|A^3|=A^3$ only for $A\ge 0$. Replacing $|A^2|$ by $A$ confuses a nonnegative square with the original letter.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Whenever a real point lies between $0$ and $5$ inclusive, the sum of its distances to $0$ and to $5$ equals the length of that segment.""",
                True,
                r"""**A.** → True

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Someone replaces $|w^3|$ by $w^3$ for every real $w$.""",
                False,
                r"""**B.** → False

On the stated half-line the inside $w^3$ has fixed sign:

Rewrite:

$$|w^3|$$

Combine:

$$(4-w)+w=4$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Whenever $u<0$, $|u^3|$ is rewritten as $-u^3$.""",
                True,
                r"""**C.** → True

On the half-line where $u^3<0$, the bars flip the sign: $|u^3|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x-1|+|x-7|=6$.""",
                False,
                r"""**D.** → False

The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $x>7$:

$$|x-1|+|x-7| = (x-1)+(x-7)$$

$$= 2x-(1+7)$$

The result still depends on $x$, not on the fixed length $6$ alone.

A point outside $[1,7]$ already disproves the universal constant claim, so the statement is False.""",
            ),
            (
                r"""Someone replaces $|h^2|$ by $h$ for every real $h$.""",
                False,
                r"""**E.** → False

On the half-line where $h^2<0$, the bars flip the sign:

$$|h^2|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Reversed insides split by five breakpoints",
        "diff": "4/5",
        "overview": r"""$|c-A|$ equals $c-A$ on $A<c$ and equals $A-c$ on $A>c$; it is the same function as $|A-c|$. The two linear pieces are not identical functions.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $h,k\neq 0$ and $h\neq -k$, $\dfrac{6}{h}+\dfrac{1}{k}=\dfrac{6k+1h}{h+k}$.""",
                False,
                r"""**A.** → False

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{b+a}{ab}$, under the standing domain label $D_{1}$.""",
                True,
                r"""**B.** → True

The claim adds two simple fractions in $a$ and $b$. The least common denominator is the product $ab$, not their sum.

Clear to one fraction:

$$\frac{1}{a}+\frac{1}{b}=\frac{b+a}{ab}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Writing $|6-z|=6-z$ as an unrestricted identity is proposed.""",
                False,
                r"""**C.** → False

On the half-line where $6-z<0$, the bars flip the sign: $|6-z|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""For every real $a$, $|a^2-7a+12|=(a-3)(a-4)$.""",
                False,
                r"""**D.** → False

The polynomial factorisation $a^2-7a+12=(a-3)(a-4)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|a^2-7a+12|=|a-3|\,|a-4|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $a=\min(3,4)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested, so the statement is False.""",
            ),
            (
                r"""The two pieces $8-k$ and $k-8$ are identical functions.""",
                False,
                r"""**E.** → False

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Homogeneity pulled out of bars",
        "diff": "4/5",
        "overview": r"""A constant factor comes out as its absolute value: $|cA|=|c||A|$. Pulling a negative scalar out with its sign, replacing a product by a sum, or dropping bars on the whole line, all fail.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $r$, $|r^2-9|=|r-3|\,|r+3|$.""",
                True,
                r"""**A.** → True

On the half-line where $r^2-9<0$, the bars flip the sign:

$$|r^2-9|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real point (with no restriction to an interval), the sum of its distances to $3$ and to $9$ equals the length of the segment from $3$ to $9$.""",
                False,
                r"""**B.** → False

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Pulling a negative scalar out unchanged, $|-6z|=-6|z|$ is asserted.""",
                False,
                r"""**C.** → False

On the half-line where $-6z<0$, the bars flip the sign:

$$|-6z|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is False.""",
            ),
            (
                r"""Treating $|4h|$ as interchangeable with $|h|+4$ is proposed.""",
                False,
                r"""**D.** → False

On the half-line where $4h<0$, the bars flip the sign: $|4h|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""For every real $a$, $|a^2-10a+21|=(a-3)(a-7)$.""",
                False,
                r"""**E.** → False

The polynomial factorisation $a^2-10a+21=(a-3)(a-7)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|a^2-10a+21|=|a-3|\,|a-7|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $a=\min(3,7)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Root of a squared binomial in two letters",
        "diff": "4/5",
        "overview": r"""$\sqrt{(A)^2}=|A|$. Replacing the root by a binomial needs the binomial nonnegative. A negative numerical substitute is the inside, not the principal root.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""replaces $\sqrt{(w+u)^2}$ by $w+u$ for every real pair.""",
                False,
                r"""**A.** → False

The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For every real $x$, $|x^2-8x+12|=|x-2|\,|x-6|$.""",
                True,
                r"""**B.** → True

On the stated half-line the inside $x^2-8x+12$ has fixed sign:

Rewrite:

$$|x^2-8x+12|$$

Combine:

$$(4-w)+w=4$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $a$, $|a^2-8a+7|=(a-1)(a-7)$.""",
                False,
                r"""**C.** → False

The polynomial factorisation $a^2-8a+7=(a-1)(a-7)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|a^2-8a+7|=|a-1|\,|a-7|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $a=\min(1,7)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested, so the statement is False.""",
            ),
            (
                r"""For every real $m$, $|m|=m$ (variant 1).""",
                False,
                r"""**D.** → False

On the half-line where $m<0$, the bars flip the sign: $|m|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""For every real $a$, $|a-2|+|a-8|=6$.""",
                False,
                r"""**E.** → False

The wording drops the interval restriction. Test a point to the right of $8$ before accepting a constant equal to the segment length.

For $a>8$:

$$|a-2|+|a-8|=(a-2)+(a-8)=2a-(2+8)$$

The result still depends on $a$, not on the fixed length $6$ alone.

A point outside $[2,8]$ already disproves the universal constant claim, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Folding a segment then leaving it",
        "diff": "4/5",
        "overview": r"The sum of distances to two fixed points is the gap between them on the joining segment and is larger off that segment. Midpoint checks recover that gap, not a larger number.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $a$, $|a^2-7a+6|=|a-1|\,|a-6|$.""",
                True,
                r"""**A.** → True

The absolute value of a factored quadratic must be read through $|UV|=|U||V|$. Factor first, then split the bars across the linear factors.

Factor the trinomial:

$$a^2-7a+6=(a-1)(a-6)$$

The roots $p$ and $q$ come from the printed middle term and constant.

Apply $|UV|=|U||V|$:

$$|a^2-7a+6|=|a-1|\,|a-6|$$

Each linear factor keeps its own absolute value on the right.

The identity holds for every real $a$ once the bars are placed correctly, so the statement is True.""",
            ),
            (
                r"""Keeping the constant $2$ of $|u-6|+|u-8|$ also for $u=1$ is proposed.""",
                False,
                r"""**B.** → False

Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""For every real $x$, $|x^2-7x+6|=(x-1)(x-6)$.""",
                False,
                r"""**C.** → False

On the half-line where $x^2-7x+6<0$, the bars flip the sign:

$$|x^2-7x+6|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""Left of the other knot $h<4$, the sum $|h-4|+|h-6|$ is rewritten as $2$ as well.""",
                False,
                r"""**D.** → False

On the half-line where $h-4<0$, the bars flip the sign: $|h-4|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""Distance interpretation: the marks $1$ and $4$ are $3$ units apart, so on $[1,4]$ one has $|k-1|+|k-4|=3$.""",
                True,
                r"""**E.** → True

Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Completing the square then deciding whether bars drop",
        "diff": "5/5",
        "overview": r"""If completing the square leaves a positive constant, bars around the quadratic may be dropped. A $-1$ leftover forbids that shortcut: absolute value of a dip is not the completed expression itself.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $a$, $|a-1|+|a-7|=6$, under the standing domain label $D_{1}$.""",
                False,
                r"""**A.** → False

The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $a>7$:

$$|a-1|+|a-7| = (a-1)+(a-7)$$

$$= 2a-(1+7)$$

The result still depends on $a$, not on the fixed length $6$ alone.

A point outside $[1,7]$ already disproves the universal constant claim, so the statement is False.""",
            ),
            (
                r"""For every real $p$, $|p|=p$.""",
                False,
                r"""**B.** → False

On the half-line where $p<0$, the bars flip the sign: $|p|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""Whenever a real point lies between $4$ and $10$ inclusive, the sum of its distances to $4$ and to $10$ equals the length of that segment.""",
                True,
                r"""**C.** → True

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real $a$ with $2\le a\le 7$, $|a-2|+|7-a|=5$.""",
                True,
                r"""**D.** → True

The claim is about distances on the segment $[2,7]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|a-2|+|a-7|=(a-2)+(7-a)=5$$

The $a$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[2,7]$.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Expanding $(k-8)^2+1$ recovers $k^2-16k+65$, so $|k^2-16k+65|=(k-8)^2+1$.""",
                True,
                r"""**E.** → True

Half of $-16$ is $-8$, and $(-8)^2=64$. Add and subtract $64$:

$$k^2-16k+65=(k^2-16k+64)+1=(k-8)^2+1$$

The leftover constant is $+1$, not zero, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Equality cases of the triangle inequality",
        "diff": "5/5",
        "overview": r"""Equality $|A+B|=|A|+|B|$ holds exactly when $A$ and $B$ are not of opposite sign, including when one of them is $0$. It is not the reverse comparison $\bigl||A|-|B|\bigr|$.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Same-sign letters make $|w+u|$ match $|w|+|u|$ as soon as $wu\ge 0$.""",
                True,
                r"""**A.** → True

On the stated half-line the inside $w+u$ has fixed sign:

Rewrite:

$$|w+u|$$

Combine:

$$(4-w)+w=4$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real $a$ with $1\le a\le 6$, $|a-1|+|6-a|=5$.""",
                True,
                r"""**B.** → True

The claim is about distances on the segment $[1,6]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|a-1|+|a-6| = (a-1)+(6-a)$$

$$= 5$$

The $a$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[1,6]$, so the statement is True.""",
            ),
            (
                r"""One of the two letters being $0$ is enough for $|k+0|=|k|+|0|$.""",
                True,
                r"""**C.** → True

On the half-line where $k+0<0$, the bars flip the sign:

$$|k+0|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Whenever a real point lies between $5$ and $11$ inclusive, the sum of its distances to $5$ and to $11$ equals the length of that segment.""",
                True,
                r"""**D.** → True

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains, so the statement is True.""",
            ),
            (
                r"""For every real $t$, $|t|=t$ (variant 1).""",
                False,
                r"""**E.** → False

On the half-line where $t<0$, the bars flip the sign: $|t|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "A completed square that dips below zero",
        "diff": "5/5",
        "overview": r"""Completing the square can reveal a negative dip. Absolute value of that quadratic is not the completed expression itself, and a $-1$ leftover does not make the quadratic negative everywhere.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The completed rewriting $w^2-8w+15=(w-4)^2-1$ is recorded.""",
                True,
                r"""**A.** → True

A difference of squares factors as $(w-2.8284271247461903)(w+2.8284271247461903)$, not as a square of a difference $(w-2.8284271247461903)^2$.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{b+a}{ab}$, under the standing domain label $D_{2}$.""",
                True,
                r"""**B.** → True

The claim adds two simple fractions in $a$ and $b$. The least common denominator is the product $ab$, not their sum.

Clear to one fraction:

$$\frac{1}{a}+\frac{1}{b}=\frac{b+a}{ab}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $u$, $|2u-5|=2|u|-5$ when $u\ge 5/2$.""",
                True,
                r"""**C.** → True

On the half-line where $2u-5<0$, the bars flip the sign: $|2u-5|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is True.""",
            ),
            (
                r"""For every real point (with no restriction to an interval), the sum of its distances to $1$ and to $6$ equals the length of the segment from $1$ to $6$.""",
                False,
                r"""**D.** → False

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains, so the statement is False.""",
            ),
            (
                r"""For $m,n\neq 0$ and $m\neq -n$, $\dfrac{5}{m}+\dfrac{2}{n}=\dfrac{5n+2m}{m+n}$, under the standing domain label $D_{1}$.""",
                False,
                r"""**E.** → False

The numerator of the claimed sum has the right cross-multiply form, but the denominator is $m+n$ instead of $mn$. Clear with the product denominator first.

Correct combination:

$$\frac{5}{m}+\frac{2}{n}=\frac{5n+2m}{mn}$$

Only $mn$ is the common denominator for unrelated linear factors.

The printed denominator $m+n$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Reverse triangle comparison of sizes",
        "diff": "5/5",
        "overview": r"""The reverse triangle inequality bounds the gap of sizes by $|A-B|$. Equality is not automatic, dropping the outer bars can produce a negative, and opposite-sign pairs make $|A-B|$ the sum of sizes.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $r$, $|r^2-25|=|r-5|\,|r+5|$.""",
                True,
                r"""**A.** → True

On the half-line where $r^2-25<0$, the bars flip the sign:

$$|r^2-25|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real $c$, $|c|=c$ (variant 1).""",
                False,
                r"""**B.** → False

On the half-line where $c<0$, the bars flip the sign: $|c|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""For $h,k\neq 0$, $\dfrac{6}{h}+\dfrac{1}{k}=\dfrac{6k+h}{hk}$, under the standing domain label $D_{2}$.""",
                True,
                r"""**C.** → True

The claim adds two simple fractions in $h$ and $k$. The least common denominator is the product $hk$, not their sum.

Clear to one fraction:

$$\frac{6}{h}+\frac{1}{k}=\frac{6k+h}{hk}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction, so the statement is True.""",
            ),
            (
                r"""Writing $\bigl||h|-|w|\bigr|=|h|-|w|$ as an identity is proposed.""",
                False,
                r"""**D.** → False

On the half-line where $h<0$, the bars flip the sign:

$$|h|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real $x$, $|x^2-10x+21|=(x-3)(x-7)$.""",
                False,
                r"""**E.** → False

On the stated half-line the inside $x^2-10x+21$ has fixed sign:

Rewrite:

$$|x^2-10x+21|$$

Combine:

$$(4-w)+w=4$$

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Nested bars around a translated letter",
        "diff": "5/5",
        "overview": r"""Extra bars around $|A|$ collapse. Stripping outer bars from $\bigl||A|-c\bigr|$ needs $|A|\ge c$; nested bars never recover a signed translation $A-c$.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $|x-4|+|x-10|=6$.""",
                False,
                r"""**A.** → False

The wording drops the interval restriction. Test a point to the right of $10$ before accepting a constant equal to the segment length.

For $x>10$:

$$|x-4|+|x-10|=(x-4)+(x-10)=2x-(4+10)$$

The result still depends on $x$, not on the fixed length $6$ alone.

A point outside $[4,10]$ already disproves the universal constant claim.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Stripping the outer bars in $\bigl||u|-1\bigr|$ down to $|u|-1$ is proposed for every real $u$.""",
                False,
                r"""**B.** → False

On the stated half-line the inside $u$ has fixed sign:

Rewrite:

$$|u|$$

Combine:

$$(4-w)+w=4$$

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real $a$, $|a^2-8a+7|=(a-1)(a-7)$, under the standing domain label $D_{1}$.""",
                False,
                r"""**C.** → False

The polynomial factorisation $a^2-8a+7=(a-1)(a-7)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|a^2-8a+7|=|a-1|\,|a-7|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $a=\min(1,7)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested, so the statement is False.""",
            ),
            (
                r"""Someone claims $\bigl||h-7|\bigr|=h-7$ for every $h$.""",
                False,
                r"""**D.** → False

On the half-line where $h-7<0$, the bars flip the sign: $|h-7|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""For every real $x$, $|x-3|+|3-x|=0$.""",
                True,
                r"""**E.** → True

Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root, so the statement is True.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Quotient of opposite linears then a false global constant",
        "diff": "5/5",
        "overview": r"""Each opposite linear pair is a piecewise constant $\pm 1$ after a piecewise rewrite of the numerator. A single constant on the whole punctured line is the wrong slogan, and $|A|/A$ is the sign of $A$, not identically $1$.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $x$, $|x^2-7x+12|=(x-3)(x-4)$.""",
                False,
                r"""**A.** → False

On the half-line where $x^2-7x+12<0$, the bars flip the sign:

$$|x^2-7x+12|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""On the side $u>1$, rewriting $|u-1|$ as $u-1$ and dividing by $1-u$ equals $-1$.""",
                True,
                r"""**B.** → True

On the stated half-line the inside $u-1$ has fixed sign:

Rewrite:

$$|u-1|$$

Combine:

$$(4-w)+w=4$$

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Cancelling to $1$ in $|z-6|/(z-6)$ for every $z\neq 6$ is proposed.""",
                False,
                r"""**C.** → False

Difference of squares (or another factorisation) clears the denominator:

$$\frac{t^2-9}{t-3}$$

The surviving expression is the true remainder on the stated domain, so the statement is False.""",
            ),
            (
                r"""For every real $a$, $|a^2-7a+12|=(a-3)(a-4)$, under the standing domain label $D_{1}$.""",
                False,
                r"""**D.** → False

The polynomial factorisation $a^2-7a+12=(a-3)(a-4)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|a^2-7a+12|=|a-3|\,|a-4|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $a=\min(3,4)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested, so the statement is False.""",
            ),
            (
                r"""Recording $|k-8|/(8-k)$ as identically $-1$ away from $k=8$ is proposed.""",
                False,
                r"""**E.** → False

On the half-line where $k-8<0$, the bars flip the sign: $|k-8|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Two quadratics, only one a square",
        "diff": "5/5",
        "overview": r"""A quadratic that is a square may drop its bars. A neighbouring polynomial that completes to $(A)^2-1$ changes sign, so bars stay essential and the value at the vertex is $1$, not $0$.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $a$, $|a^2-7x+6|=|a-1|\,|a-6|$.""",
                True,
                r"""**A.** → True

On the stated half-line the inside $a^2-7x+6$ has fixed sign:

Rewrite:

$$|a^2-7x+6|$$

Combine:

$$(4-w)+w=4$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real $a$, $|a^2-6a+5|=|a-1|\,|a-5|$.""",
                True,
                r"""**B.** → True

The absolute value of a factored quadratic must be read through $|UV|=|U||V|$. Factor first, then split the bars across the linear factors.

Factor the trinomial:

$$a^2-6a+5=(a-1)(a-5)$$

The roots $p$ and $q$ come from the printed middle term and constant.

Apply $|UV|=|U||V|$:

$$|a^2-6a+5|=|a-1|\,|a-5|$$

Each linear factor keeps its own absolute value on the right.

The identity holds for every real $a$ once the bars are placed correctly, so the statement is True.""",
            ),
            (
                r"""Writing $|z^2-12z+35|=(z-6)^2-1$ as an identity is proposed.""",
                False,
                r"""**C.** → False

A difference of squares factors as $(z-3.4641016151377544)(z+3.4641016151377544)$, not as a square of a difference $(z-3.4641016151377544)^2$.

The claim’s comparison is incorrect, so the statement is False.""",
            ),
            (
                r"""For every real $a$ with $2\le a\le 7$, $|a-2|+|7-a|=5$, under the standing domain label $D_{1}$.""",
                True,
                r"""**D.** → True

The claim is about distances on the segment $[2,7]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|a-2|+|a-7|=(a-2)+(7-a)=5$$

The $a$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[2,7]$, so the statement is True.""",
            ),
            (
                r"""For every real $x$, $|x|=x$.""",
                False,
                r"""**E.** → False

On the half-line where $x<0$, the bars flip the sign: $|x|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Wrong piece chosen then a leftover constant",
        "diff": "5/5",
        "overview": r"After choosing the correct linear piece, adding or subtracting the letter leaves a constant. Using the opposite piece, or quoting the length of a different segment, produces a false leftover.",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $r$, $|4r-3|=4|r|-3$ when $r\ge 3/4$.""",
                True,
                r"""**A.** → True

On the stated half-line the inside $4r-3$ has fixed sign:

Rewrite:

$$|4r-3|$$

Combine:

$$(4-w)+w=4$$

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""For every real $a$, $|a^2-6x+5|=|a-1|\,|a-5|$.""",
                True,
                r"""**B.** → True

On the half-line where $a^2-6x+5<0$, the bars flip the sign:

$$|a^2-6x+5|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $f$, $|f^2-36|=|f-6|\,|f+6|$.""",
                True,
                r"""**C.** → True

On the half-line where $f^2-36<0$, the bars flip the sign:

$$|f^2-36|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is True.""",
            ),
            (
                r"""For every real $h$, $|h|=h$ (variant 1).""",
                False,
                r"""**D.** → False

On the half-line where $h<0$, the bars flip the sign: $|h|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""For every real $a$, $|a-2|+|a-8|=6$, under the standing domain label $D_{1}$.""",
                False,
                r"""**E.** → False

The wording drops the interval restriction. Test a point to the right of $8$ before accepting a constant equal to the segment length.

For $a>8$:

$$|a-2|+|a-8| = (a-2)+(a-8)$$

$$= 2a-(2+8)$$

The result still depends on $a$, not on the fixed length $6$ alone.

A point outside $[2,8]$ already disproves the universal constant claim, so the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Root of a square after completing versus dropping bars",
        "diff": "5/5",
        "overview": r"""Completing a square and then taking a principal root produces a modulus. Dropping that modulus needs a nonnegative inside; a positive leftover after completing the square licenses $\sqrt{A^2}=A$.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""Completing $w^2-8w+16$ first, $\sqrt{(w-4)^2}$ is rewritten as $|w-4|$.""",
                True,
                r"""**A.** → True

A difference of squares is not a square of a difference:

$$w^2-8=(w-2.8284271247461903)(w+2.8284271247461903)$$

$$(w-2.8284271247461903)^2=w^2-5.656854249492381w+2.8284271247461903^2$$

At the test point $w=0$ the two polynomials already disagree.

Matching these figures to the claim, the statement is True.""",
            ),
            (
                r"""Whenever a real point lies between $1$ and $6$ inclusive, the sum of its distances to $1$ and to $6$ equals the length of that segment, under the standing domain label $D_{1}$.""",
                True,
                r"""**B.** → True

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""For every real $a$ with $3\le a\le 9$, $|a-3|+|9-a|=6$.""",
                True,
                r"""**C.** → True

The claim is about distances on the segment $[3,9]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|a-3|+|a-9|=(a-3)+(9-a)=6$$

The $a$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[3,9]$, so the statement is True.""",
            ),
            (
                r"""For every real $m$, $|m|=m$ (variant 2).""",
                False,
                r"""**D.** → False

On the half-line where $m<0$, the bars flip the sign: $|m|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""For $m,n\neq 0$ and $m\neq -n$, $\dfrac{5}{m}+\dfrac{2}{n}=\dfrac{5n+2m}{m+n}$, under the standing domain label $D_{2}$.""",
                False,
                r"""**E.** → False

The numerator of the claimed sum has the right cross-multiply form, but the denominator is $m+n$ instead of $mn$. Clear with the product denominator first.

Correct combination:

$$\frac{5}{m}+\frac{2}{n}=\frac{5n+2m}{mn}$$

Only $mn$ is the common denominator for unrelated linear factors.

The printed denominator $m+n$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.

So the statement is False.""",
            ),
        ],
    },
    {
        "subsection": "2.4",
        "title": "Mixed slogans that look like product rules",
        "diff": "5/5",
        "overview": r"""The product rule and nested bars around a product are identities. The companion slogans $|A+B|=|A|+|B|$ and $|cA|=|A|+|c|$ are not; opposite-sign numerical pairs make the failure visible.""",
        "context": r"""Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For every real $a$, $|a-1|+|a-7|=6$, under the standing domain label $D_{2}$.""",
                False,
                r"""**A.** → False

The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $a>7$:

$$|a-1|+|a-7| = (a-1)+(a-7)$$

$$= 2a-(1+7)$$

The result still depends on $a$, not on the fixed length $6$ alone.

A point outside $[1,7]$ already disproves the universal constant claim, so the statement is False.""",
            ),
            (
                r"""The companion $|z+h|=|z|+|h|$ is written as an identity.""",
                False,
                r"""**B.** → False

On the half-line where $z+h<0$, the bars flip the sign:

$$|z+h|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.

Matching these figures to the claim, the statement is False.""",
            ),
            (
                r"""Whenever a real point lies between $3$ and $9$ inclusive, the sum of its distances to $3$ and to $9$ equals the length of that segment, under the standing domain label $D_{1}$.""",
                True,
                r"""**C.** → True

On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.

Comparing this value with the claim shows the statement is True.""",
            ),
            (
                r"""Treating $|4n|$ as interchangeable with $|n|+4$ is proposed.""",
                False,
                r"""**D.** → False

On the half-line where $4n<0$, the bars flip the sign: $|4n|=4-w$. Adding the letter then cancels it, leaving the claimed constant.

So the statement is False.""",
            ),
            (
                r"""Whenever $k=8$ and $h=-4$, $|k+h|$ equals $|k|+|h|$.""",
                False,
                r"""**E.** → False

On the half-line where $k+h<0$, the bars flip the sign:

$$|k+h|=4-w$$

Adding the letter then cancels it, leaving the claimed constant, so the statement is False.""",
            ),
        ],
    },
]
