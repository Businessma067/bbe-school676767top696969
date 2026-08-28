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
                r"""Bring every term to one side before factoring:

Rearrange:

$$a^2-ab-(ab-b^2)=a^2-2ab+b^2$$

Square:

$$(a-b)^2\ge 0$$

A square is nonnegative for every real pair, so the inequality is an identity.""",
            ),
            (
                r"After collecting only the $xy$ term in $(2x-y+3)^2$, a marker records its coefficient as $+4$. The remaining terms are not needed to judge the claim.",
                False,
                
            ),
            (
                r"""The sum of the fourth power of $u$ and four times the fourth power of $v$ factors as the product of $u^2-2uv+2v^2$ and $u^2+2uv+2v^2$ for every real pair $(u,v)$.""",
                True,
                r"""Insert $\pm 4u^2v^2$ to build a difference of squares:

Rewrite:

$$u^4+4v^4=(u^2+2v^2)^2-(2uv)^2$$

Factor:

$$=(u^2-2uv+2v^2)(u^2+2uv+2v^2)$$

Both factors match the wording.""",
            ),
            (
                r"Given $a+b+c=0$ with $a=4$ and $b=-1$, a note sets $c=3$ and concludes $a^3+b^3+c^3=3abc$ without expanding.",
                False,
                
            ),
            (
                r"Subtracting $(r-s)^2$ from $(r+s)^2$ is claimed to leave $4rs$ on every real pair $(r,s)$.",
                True,
                
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
                
            ),
            (
                r"With the elementary data $u+v=5$ and $uv=6$, expanding $(u+v)^2-2uv$ is said to leave $u^2+v^2=13$.",
                True,
                
            ),
            (
                r"Factoring $w^2-16$ as $(w-4)^2$ is presented as valid on the whole real line.",
                False,
                
            ),
            (
                r"""The inequality $r^2-rs\ge rs-s^2$ holds for every real pair $(r,s)$.""",
                True,
                r"""Bring every term to one side before factoring:

Rearrange:

$$r^2-rs-(rs-s^2)=r^2-2rs+s^2$$

Square:

$$(r-s)^2\ge 0$$

A square is nonnegative for every real pair, so the inequality is an identity.""",
            ),
            (
                r"An examiner lists $(2h+5)^2=4h^2+10h+25$ as a standard expansion.",
                False,
                
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
                
            ),
            (
                r"""If $c^{-3}d^2=2$, then $\dfrac{c^8d^3}{c^2d^7}+3cd\cdot\dfrac{c^{-6}d^5}{c^7d^{-2}}=48$ for $c,d\neq 0$.""",
                False,
                r"""Set $R=c^{-3}d^2$. Simplify each summand in terms of $R$ before using $R=2$:

First summand:

$$\frac{c^8d^3}{c^2d^7}=c^6d^{-4}=R^{-2}$$

Second summand:

$$3cd\cdot\frac{c^{-6}d^5}{c^7d^{-2}}=3R^{4}$$

Combine:

$$R^{-2}+3R^{4}$$

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

Dropping the summand $R^{-2}=\tfrac{1}{4}$ leaves $48$, which is not the value of the original expression.""",
            ),
            (
                r"A student expands $(f+g)^2$, subtracts $f^2+g^2$, and claims the remainder is identically zero.",
                False,
                
            ),
            (
                r"""The product of the sum of the squares of $a$ and $b$ with the sum of the squares of $c$ and $d$ equals the sum of the square of $a\cdot c-b\cdot d$ and the square of $a\cdot d+b\cdot c$, for every real quadruple.""",
                True,
                r"""Translate the wording, then apply Brahmagupta's identity:

Identity:

$$(a^2+b^2)(c^2+d^2)=(a\cdot c-b\cdot d)^2+(a\cdot d+b\cdot c)^2$$

The two readings coincide as polynomials in the four letters.""",
            ),
            (
                r"Matching $n^2+6n+8$ with $(n+3)^2$ is accepted as an identity.",
                False,
                
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
                
            ),
            (
                r"Treating $x^2+9$ as $(x+3)^2$ is recorded as an identity, the middle term being declared unnecessary.",
                False,
                
            ),
            (
                r"With $p+q=6$ and $pq=8$, a booklet reports $p^2+q^2=28$.",
                False,
                
            ),
            (
                r"Splitting $z^2-25$ as $(z-5)(z+5)$ holds for every real $z$.",
                True,
                
            ),
            (
                r"""If $p^{-3}q^2=2$, then $\dfrac{p^8q^3}{p^2q^7}+3pq\cdot\dfrac{p^{-6}q^5}{p^7q^{-2}}=48.25$ for $p,q\neq 0$.""",
                True,
                r"""Set $R=p^{-3}q^2$. Simplify each summand in terms of $R$ before using $R=2$:

First summand:

$$\frac{p^8q^3}{p^2q^7}=p^6q^{-4}=R^{-2}$$

Second summand:

$$3pq\cdot\frac{p^{-6}q^5}{p^7q^{-2}}=3R^{4}$$

Combine:

$$R^{-2}+3R^{4}$$

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

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
                
            ),
            (
                r"Whenever $c+d=11$ and $cd=24$, the value of $(c-d)^2$ is reported as $25$.",
                True,
                
            ),
            (
                r"""The sum of the fourth power of $p$ and four times the fourth power of $q$ equals the square of $p^2+2q^2$ for every real pair $(p,q)$.""",
                False,
                r"""Expand the printed square:

Expand:

$$(p^2+2q^2)^2=p^4+4p^2q^2+4q^4$$

An extra middle term $4p^2q^2$ appears. The Sophie Germain rewrite must subtract $(2pq)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"A note concludes that $(u-v)^3=u^3-v^3$ for every real pair, the middle terms being cancelled by habit.",
                False,
                
            ),
            (
                r"""The inequality $c^2+cd\ge cd+d^2$ holds for every real pair $(c,d)$.""",
                False,
                r"""Rearrange:

Difference:

$$c^2+cd-(cd+d^2)=c^2-d^2=(c-d)(c+d)$$

The difference $(c-d)(c+d)$ changes sign, so the inequality is not universal. A concrete counter-example is $c=0$, $d=1$.""",
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
                r"""Translate the wording, then apply Brahmagupta's identity:

Identity:

$$(u^2+v^2)(w^2+z^2)=(u\cdot w-v\cdot z)^2+(u\cdot z+v\cdot w)^2$$

The two readings coincide as polynomials in the four letters.""",
            ),
            (
                r"Factoring $16-t^2$ as $(4-t)(4+t)$ is accepted for every real $t$.",
                True,
                
            ),
            (
                r"Given $r+s=0$, a student sets $r=5$, $s=5$ and concludes $r^2+s^2=0$.",
                False,
                
            ),
            (
                r"Completing the square, $x^2+6x+5$ is rewritten as $(x+3)^2$ with no leftover constant.",
                False,
                
            ),
            (
                r"Collecting the $xy$ term in $(x+2y)^2$, the recorded coefficient $+4$ is accepted.",
                True,
                
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
                r"""Expand the printed square:

Expand:

$$(m^2+2n^2)^2=m^4+4m^2n^2+4n^4$$

An extra middle term $4m^2n^2$ appears. The Sophie Germain rewrite must subtract $(2mn)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"With $a-b=3$ and $ab=10$, expanding $(a-b)^2+4ab$ is said to leave $(a+b)^2=49$.",
                True,
                
            ),
            (
                r"On the real line, $4x^2+12x+9$ is identified with $(2x+3)^2$.",
                True,
                
            ),
            (
                r"""The product of the sum of the squares of $f$ and $g$ with the sum of the squares of $t$ and $x$ equals the sum of the square of $f\cdot t-g\cdot x$ and the square of $f\cdot x+g\cdot t$, for every real quadruple.""",
                True,
                r"""Translate the wording, then apply Brahmagupta's identity:

Identity:

$$(f^2+g^2)(t^2+x^2)=(f\cdot t-g\cdot x)^2+(f\cdot x+g\cdot t)^2$$

The two readings coincide as polynomials in the four letters.""",
            ),
            (
                r"Matching $n^2+10n+16$ with $(n+5)^2$ is accepted on a checklist.",
                False,
                
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
                
            ),
            (
                r"""The inequality $x^2+xy\ge xy+y^2$ holds for every real pair $(x,y)$.""",
                False,
                r"""Rearrange:

Difference:

$$x^2+xy-(xy+y^2)=x^2-y^2=(x-y)(x+y)$$

The difference $(x-y)(x+y)$ changes sign, so the inequality is not universal. A concrete counter-example is $x=0$, $y=1$.""",
            ),
            (
                r"A student expands $(a+b)^3$, subtracts $a^3+b^3$, and claims the difference is identically zero.",
                False,
                
            ),
            (
                r"Difference of squares writes $9m^2-16n^2=(3m-4n)(3m+4n)$ for every real pair.",
                True,
                
            ),
            (
                r"Inserting $x=2$ into $(x+4)^2-x^2-16$ is said to produce $0$.",
                False,
                
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
                
            ),
            (
                r"""The product of the sum of the squares of $p$ and $q$ with the sum of the squares of $r$ and $s$ equals the sum of the square of $p\cdot r-q\cdot s$ and the square of $p\cdot s+q\cdot r$, for every real quadruple.""",
                True,
                r"""Translate the wording, then apply Brahmagupta's identity:

Identity:

$$(p^2+q^2)(r^2+s^2)=(p\cdot r-q\cdot s)^2+(p\cdot s+q\cdot r)^2$$

The two readings coincide as polynomials in the four letters.""",
            ),
            (
                r"After collecting only the $xy$ term in $(3x-y)^2$, a marker records its coefficient as $-3$.",
                False,
                
            ),
            (
                r"A script shows $x^4-16=(x^2-4)^2$, confusing a difference of squares with a square of a difference.",
                False,
                
            ),
            (
                r"""The inequality $m^2-mn\ge mn-n^2$ holds for every real pair $(m,n)$.""",
                True,
                r"""Bring every term to one side before factoring:

Rearrange:

$$m^2-mn-(mn-n^2)=m^2-2mn+n^2$$

Square:

$$(m-n)^2\ge 0$$

A square is nonnegative for every real pair, so the inequality is an identity.""",
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
                
            ),
            (
                r"From the data $c+d=3$ and $cd=2$, the fourth-power sum $c^4+d^4$ is reported as $17$.",
                True,
                
            ),
            (
                r"""If $m^{-3}n^2=2$, then $\dfrac{m^8n^3}{m^2n^7}+3mn\cdot\dfrac{m^{-6}n^5}{m^7n^{-2}}=48$ for $m,n\neq 0$.""",
                False,
                r"""Set $R=m^{-3}n^2$. Simplify each summand in terms of $R$ before using $R=2$:

First summand:

$$\frac{m^8n^3}{m^2n^7}=m^6n^{-4}=R^{-2}$$

Second summand:

$$3mn\cdot\frac{m^{-6}n^5}{m^7n^{-2}}=3R^{4}$$

Combine:

$$R^{-2}+3R^{4}$$

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

Dropping the summand $R^{-2}=\tfrac{1}{4}$ leaves $48$, which is not the value of the original expression.""",
            ),
            (
                r"Expanding $(x^2+x+1)(x^2-x+1)$ is claimed to recover $x^4+x^2+1$ after the odd powers cancel.",
                True,
                
            ),
            (
                r"The coefficient of $bc$ in $(a-b-c)^2$ is recorded as $-2$.",
                False,
                
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
                r"""Insert $\pm 4f^2g^2$ to build a difference of squares:

Rewrite:

$$f^4+4g^4=(f^2+2g^2)^2-(2fg)^2$$

Factor:

$$=(f^2-2fg+2g^2)(f^2+2fg+2g^2)$$

Both factors match the wording.""",
            ),
            (
                r"Whenever $\lambda+\mu=7$ and $\lambda\mu=10$, completing the evaluation of $(\lambda-\mu)^2$ yields $9$.",
                True,
                
            ),
            (
                r"""The inequality $c^2-cd\ge cd-d^2$ holds for every real pair $(c,d)$.""",
                True,
                r"""Bring every term to one side before factoring:

Rearrange:

$$c^2-cd-(cd-d^2)=c^2-2cd+d^2$$

Square:

$$(c-d)^2\ge 0$$

A square is nonnegative for every real pair, so the inequality is an identity.""",
            ),
            (
                r"The coefficient of $xyz$ in $(x+y+z)^3$ is recorded as $3$.",
                False,
                
            ),
            (
                r"One textbook prints $x^4+4=(x^2+2)^2$, stopping after the incomplete square.",
                False,
                
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
                
            ),
            (
                r"Given $y+\dfrac{1}{y}=3$ with $y\neq 0$, a booklet reports $y^3+\dfrac{1}{y^3}=27$.",
                False,
                
            ),
            (
                r"After grouping $b+c$, a clerk treats $x^2-(b+c)^2$ as identical to $x^2-b^2-c^2$.",
                False,
                
            ),
            (
                r"""The sum of the fourth power of $c$ and four times the fourth power of $d$ factors as the product of $c^2-2cd+2d^2$ and $c^2+2cd+2d^2$ for every real pair $(c,d)$.""",
                True,
                r"""Insert $\pm 4c^2d^2$ to build a difference of squares:

Rewrite:

$$c^4+4d^4=(c^2+2d^2)^2-(2cd)^2$$

Factor:

$$=(c^2-2cd+2d^2)(c^2+2cd+2d^2)$$

Both factors match the wording.""",
            ),
            (
                r"Distributing $(2x-3y)^2$ is said to produce $4x^2-6xy+9y^2$.",
                False,
                
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
                
            ),
            (
                r"""The product of the sum of the squares of $m$ and $n$ with the sum of the squares of $h$ and $k$ equals the sum of the square of $m\cdot h-n\cdot k$ and the square of $m\cdot k+n\cdot h$, for every real quadruple.""",
                True,
                r"""Translate the wording, then apply Brahmagupta's identity:

Identity:

$$(m^2+n^2)(h^2+k^2)=(m\cdot h-n\cdot k)^2+(m\cdot k+n\cdot h)^2$$

The two readings coincide as polynomials in the four letters.""",
            ),
            (
                r"Hunting $x^2 y^2$ in $(x+y)^4$, a marker records the coefficient $6$.",
                True,
                
            ),
            (
                r"""If $a^{-3}b^2=2$, then $\dfrac{a^8b^3}{a^2b^7}+3ab\cdot\dfrac{a^{-6}b^5}{a^7b^{-2}}=48.25$ for $a,b\neq 0$.""",
                True,
                r"""Set $R=a^{-3}b^2$. Simplify each summand in terms of $R$ before using $R=2$:

First summand:

$$\frac{a^8b^3}{a^2b^7}=a^6b^{-4}=R^{-2}$$

Second summand:

$$3ab\cdot\frac{a^{-6}b^5}{a^7b^{-2}}=3R^{4}$$

Combine:

$$R^{-2}+3R^{4}$$

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The printed value matches the fully reduced substitution.""",
            ),
            (
                r"Hunting $xy$ in $(x-2y+4)^2$, a marker records the coefficient as $-2$.",
                False,
                
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
                
            ),
            (
                r"Whenever $m+n=8$ and $mn=15$, expanding $(m+n)^2-4mn$ leaves $(m-n)^2=4$.",
                True,
                
            ),
            (
                r"Factoring $x^3-1$ as $(x-1)(x^2-x+1)$ is accepted.",
                False,
                
            ),
            (
                r"The coefficient of $x^2 y$ in $(x+y)^3$ is recorded as $1$.",
                False,
                
            ),
            (
                r"""The sum of the fourth power of $p$ and four times the fourth power of $q$ factors as the product of $p^2-2pq+2q^2$ and $p^2+2pq+2q^2$ for every real pair $(p,q)$.""",
                True,
                r"""Insert $\pm 4p^2q^2$ to build a difference of squares:

Rewrite:

$$p^4+4q^4=(p^2+2q^2)^2-(2pq)^2$$

Factor:

$$=(p^2-2pq+2q^2)(p^2+2pq+2q^2)$$

Both factors match the wording.""",
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
                
            ),
            (
                r"Given $a+b=6$ and $ab=5$, the value of $a^3+b^3$ is reported as $126$.",
                True,
                
            ),
            (
                r"""The inequality $p^2+pq\ge pq+q^2$ holds for every real pair $(p,q)$.""",
                False,
                r"""Rearrange:

Difference:

$$p^2+pq-(pq+q^2)=p^2-q^2=(p-q)(p+q)$$

The difference $(p-q)(p+q)$ changes sign, so the inequality is not universal. A concrete counter-example is $p=0$, $q=1$.""",
            ),
            (
                r"Given $s=x+y+z=4$ and $p=xy+yz+zx=1$, a clerk reports $x^2+y^2+z^2=15$.",
                False,
                
            ),
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $b$ equals the square of $a^2+2b^2$ for every real pair $(a,b)$.""",
                False,
                r"""Expand the printed square:

Expand:

$$(a^2+2b^2)^2=a^4+4a^2b^2+4b^4$$

An extra middle term $4a^2b^2$ appears. The Sophie Germain rewrite must subtract $(2ab)^2$ after adding it — the wording stops one step too early.""",
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
                r"""Set $R=u^{-3}v^2$. Simplify each summand in terms of $R$ before using $R=2$:

First summand:

$$\frac{u^8v^3}{u^2v^7}=u^6v^{-4}=R^{-2}$$

Second summand:

$$3uv\cdot\frac{u^{-6}v^5}{u^7v^{-2}}=3R^{4}$$

Combine:

$$R^{-2}+3R^{4}$$

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The printed value matches the fully reduced substitution.""",
            ),
            (
                r"Whenever $f+g=10$ and $fg=21$, a note reports $f^2+g^2=79$.",
                False,
                
            ),
            (
                r"On every real $x$, completing the square gives $x^2-6x+10=(x-3)^2+1$.",
                True,
                
            ),
            (
                r"Someone equates $(x^2-y^2)^2$ with $x^4-y^4$.",
                False,
                
            ),
            (
                r"After expanding $(4p-q)^2$ and subtracting $16p^2+q^2$, a clerk reports remainder $0$.",
                False,
                
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
                r"""Rearrange:

Difference:

$$u^2+uv-(uv+v^2)=u^2-v^2=(u-v)(u+v)$$

The difference $(u-v)(u+v)$ changes sign, so the inequality is not universal. A concrete counter-example is $u=0$, $v=1$.""",
            ),
            (
                r"From $r+s=5$ and $rs=3$, a clerk reports $r^2+s^2=22$.",
                False,
                
            ),
            (
                r"Expanding $(2x-y+1)^2$ and reading only the $x$ coefficient, a marker records $+4$.",
                True,
                
            ),
            (
                r"""If $c^{-3}d^2=2$, then $\dfrac{c^8d^3}{c^2d^7}+3cd\cdot\dfrac{c^{-6}d^5}{c^7d^{-2}}=48.25$ for $c,d\neq 0$.""",
                True,
                r"""Set $R=c^{-3}d^2$. Simplify each summand in terms of $R$ before using $R=2$:

First summand:

$$\frac{c^8d^3}{c^2d^7}=c^6d^{-4}=R^{-2}$$

Second summand:

$$3cd\cdot\frac{c^{-6}d^5}{c^7d^{-2}}=3R^{4}$$

Combine:

$$R^{-2}+3R^{4}$$

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The printed value matches the fully reduced substitution.""",
            ),
            (
                r"Hunting the monomial $x^3 y$ in $(x+y)^5$, a marker records the coefficient $5$.",
                False,
                
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
                
            ),
            (
                r"""The sum of the fourth power of $r$ and four times the fourth power of $s$ equals the square of $r^2+2s^2$ for every real pair $(r,s)$.""",
                False,
                r"""Expand the printed square:

Expand:

$$(r^2+2s^2)^2=r^4+4r^2s^2+4s^4$$

An extra middle term $4r^2s^2$ appears. The Sophie Germain rewrite must subtract $(2rs)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"The identity $(m+n)^2-(m-n)^2=4mn$ is used to report that $mn=6$ forces the left-hand side to equal $24$, independently of how the mass is split.",
                True,
                
            ),
            (
                r"The coefficient of $uv$ in $(3u+v-1)^2$ is recorded as $+3$.",
                False,
                
            ),
            (
                r"Rewriting $x^2-10x+21$ as $(x-5)^2$ with no leftover is accepted.",
                False,
                
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
                
            ),
            (
                r"""If $p^{-3}q^2=2$, then $\dfrac{p^8q^3}{p^2q^7}+3pq\cdot\dfrac{p^{-6}q^5}{p^7q^{-2}}=48$ for $p,q\neq 0$.""",
                False,
                r"""Set $R=p^{-3}q^2$. Simplify each summand in terms of $R$ before using $R=2$:

First summand:

$$\frac{p^8q^3}{p^2q^7}=p^6q^{-4}=R^{-2}$$

Second summand:

$$3pq\cdot\frac{p^{-6}q^5}{p^7q^{-2}}=3R^{4}$$

Combine:

$$R^{-2}+3R^{4}$$

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

Dropping the summand $R^{-2}=\tfrac{1}{4}$ leaves $48$, which is not the value of the original expression.""",
            ),
            (
                r"Sophie Germain’s completing step writes $t^4+4=(t^2+2)^2-(2t)^2$ before factoring.",
                True,
                
            ),
            (
                r"Given $y+\dfrac{1}{y}=4$ with $y\neq 0$, a booklet reports $y^2+\dfrac{1}{y^2}=16$.",
                False,
                
            ),
            (
                r"""The sum of the fourth power of $a$ and four times the fourth power of $b$ factors as the product of $a^2-2ab+2b^2$ and $a^2+2ab+2b^2$ for every real pair $(a,b)$.""",
                True,
                r"""Insert $\pm 4a^2b^2$ to build a difference of squares:

Rewrite:

$$a^4+4b^4=(a^2+2b^2)^2-(2ab)^2$$

Factor:

$$=(a^2-2ab+2b^2)(a^2+2ab+2b^2)$$

Both factors match the wording.""",
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
                
            ),
            (
                r"Given $k+\ell=7$ and $k\ell=12$, a report sets $k^2+\ell^2=37$.",
                False,
                
            ),
            (
                r"""The sum of the fourth power of $h$ and four times the fourth power of $k$ factors as the product of $h^2-2hk+2k^2$ and $h^2+2hk+2k^2$ for every real pair $(h,k)$.""",
                True,
                r"""Insert $\pm 4h^2k^2$ to build a difference of squares:

Rewrite:

$$h^4+4k^4=(h^2+2k^2)^2-(2hk)^2$$

Factor:

$$=(h^2-2hk+2k^2)(h^2+2hk+2k^2)$$

Both factors match the wording.""",
            ),
            (
                r"Factoring $y^4-1$ as $(y-1)^4$ is accepted over the reals.",
                False,
                
            ),
            (
                r"Given $a+b=0$ and $ab=-9$, a booklet reports $a^2+b^2=0$.",
                False,
                
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
                r"""Bring every term to one side before factoring:

Rearrange:

$$p^2-pq-(pq-q^2)=p^2-2pq+q^2$$

Square:

$$(p-q)^2\ge 0$$

A square is nonnegative for every real pair, so the inequality is an identity.""",
            ),
            (
                r"Expanding $(x^2+2xy+2y^2)(x^2-2xy+2y^2)$ is claimed to recover $x^4+4y^4$ after the $4x^2 y^2$ terms cancel.",
                True,
                
            ),
            (
                r"""The sum of the fourth power of $r$ and four times the fourth power of $s$ factors as the product of $r^2-2rs+2s^2$ and $r^2+2rs+2s^2$ for every real pair $(r,s)$.""",
                True,
                r"""Insert $\pm 4r^2s^2$ to build a difference of squares:

Rewrite:

$$r^4+4s^4=(r^2+2s^2)^2-(2rs)^2$$

Factor:

$$=(r^2-2rs+2s^2)(r^2+2rs+2s^2)$$

Both factors match the wording.""",
            ),
            (
                r"Evaluating $(1^2+2^2)(3^2+4^2)$ by quoting only $(1\cdot 3-2\cdot 4)^2=25$, a clerk declares the product equal to $25$.",
                False,
                
            ),
            (
                r"Completing $2x^2-8x+10$ is recorded as $2(x-2)^2$ with no leftover.",
                False,
                
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
                
            ),
            (
                r"With $u+v=2$ and $uv=-3$, the sum $u^3+v^3$ is reported as $26$.",
                True,
                
            ),
            (
                r"Evaluating $(1^2+2^2)(3^2+4^2)$ by Brahmagupta as $(3-8)^2+(4+6)^2$ is reported to give $125$.",
                True,
                
            ),
            (
                r"""The inequality $h^2-hk\ge hk-k^2$ holds for every real pair $(h,k)$.""",
                True,
                r"""Bring every term to one side before factoring:

Rearrange:

$$h^2-hk-(hk-k^2)=h^2-2hk+k^2$$

Square:

$$(h-k)^2\ge 0$$

A square is nonnegative for every real pair, so the inequality is an identity.""",
            ),
            (
                r"Hunting $x^2 y^2$ in $(x+y)^4$, a marker records the coefficient $4$.",
                False,
                
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
                
            ),
            (
                r"""If $m^{-3}n^2=2$, then $\dfrac{m^8n^3}{m^2n^7}+3mn\cdot\dfrac{m^{-6}n^5}{m^7n^{-2}}=48.25$ for $m,n\neq 0$.""",
                True,
                r"""Set $R=m^{-3}n^2$. Simplify each summand in terms of $R$ before using $R=2$:

First summand:

$$\frac{m^8n^3}{m^2n^7}=m^6n^{-4}=R^{-2}$$

Second summand:

$$3mn\cdot\frac{m^{-6}n^5}{m^7n^{-2}}=3R^{4}$$

Combine:

$$R^{-2}+3R^{4}$$

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

The printed value matches the fully reduced substitution.""",
            ),
            (
                r"Whenever $x+\dfrac{1}{x}=4$ with $x\neq 0$, the cube sum $x^3+\dfrac{1}{x^3}$ is reported as $52$.",
                True,
                
            ),
            (
                r"""The sum of the fourth power of $c$ and four times the fourth power of $d$ equals the square of $c^2+2d^2$ for every real pair $(c,d)$.""",
                False,
                r"""Expand the printed square:

Expand:

$$(c^2+2d^2)^2=c^4+4c^2d^2+4d^4$$

An extra middle term $4c^2d^2$ appears. The Sophie Germain rewrite must subtract $(2cd)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"Hunting $x^2 y^2$ in $(x+2y)^4$, a marker records the coefficient $4$.",
                False,
                
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
                
            ),
            (
                r"Hunting $x^3 y$ in $(x+2y)^4$, a marker records the coefficient $4$.",
                False,
                
            ),
            (
                r"Given $s=p+q+r=6$ and $\sigma=pq+qr+rp=11$, the sum of squares $p^2+q^2+r^2$ is reported as $14$.",
                True,
                
            ),
            (
                r"A candidate claims $x^5-1=(x-1)^5$, treating a difference of fifth powers as a fifth power of a difference.",
                False,
                
            ),
            (
                r"""If $a^{-3}b^2=2$, then $\dfrac{a^8b^3}{a^2b^7}+3ab\cdot\dfrac{a^{-6}b^5}{a^7b^{-2}}=48$ for $a,b\neq 0$.""",
                False,
                r"""Set $R=a^{-3}b^2$. Simplify each summand in terms of $R$ before using $R=2$:

First summand:

$$\frac{a^8b^3}{a^2b^7}=a^6b^{-4}=R^{-2}$$

Second summand:

$$3ab\cdot\frac{a^{-6}b^5}{a^7b^{-2}}=3R^{4}$$

Combine:

$$R^{-2}+3R^{4}$$

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

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
                
            ),
            (
                r"Substituting $a=4$, $b=-2$, $c=-1$ into both sides of $a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$ produces $31$ on each side.",
                True,
                
            ),
            (
                r"""The sum of the fourth power of $u$ and four times the fourth power of $v$ equals the square of $u^2+2v^2$ for every real pair $(u,v)$.""",
                False,
                r"""Expand the printed square:

Expand:

$$(u^2+2v^2)^2=u^4+4u^2v^2+4v^4$$

An extra middle term $4u^2v^2$ appears. The Sophie Germain rewrite must subtract $(2uv)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"Hunting $x^2 y^3$ in $(x+y)^5$, a marker records the coefficient $5$.",
                False,
                
            ),
            (
                r"""The inequality $r^2+rs\ge rs+s^2$ holds for every real pair $(r,s)$.""",
                False,
                r"""Rearrange:

Difference:

$$r^2+rs-(rs+s^2)=r^2-s^2=(r-s)(r+s)$$

The difference $(r-s)(r+s)$ changes sign, so the inequality is not universal. A concrete counter-example is $r=0$, $s=1$.""",
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
                r"""Insert $\pm 4m^2n^2$ to build a difference of squares:

Rewrite:

$$m^4+4n^4=(m^2+2n^2)^2-(2mn)^2$$

Factor:

$$=(m^2-2mn+2n^2)(m^2+2mn+2n^2)$$

Both factors match the wording.""",
            ),
            (
                r"Given $p+q+r=0$ with $p=4$, $q=-1$, a note sets $r=3$ and concludes $p^3+q^3+r^3=3pqr$.",
                False,
                
            ),
            (
                r"On every real triple, $x^2-(y+z)^2$ equals $(x-y-z)(x+y+z)$.",
                True,
                
            ),
            (
                r"Someone writes $(x+y)(y+z)(z+x)=(x+y+z)(xy+yz+zx)$, dropping the $-xyz$ correction.",
                False,
                
            ),
            (
                r"A marker accepts $(5w-1)^2=(5w+1)^2$ after declaring the middle sign irrelevant.",
                False,
                
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
                r"""Expand the printed square:

Expand:

$$(f^2+2g^2)^2=f^4+4f^2g^2+4g^4$$

An extra middle term $4f^2g^2$ appears. The Sophie Germain rewrite must subtract $(2fg)^2$ after adding it — the wording stops one step too early.""",
            ),
            (
                r"Factoring $x^4-y^4$ as $(x-y)(x+y)(x^2+y^2)$ is accepted over the reals.",
                True,
                
            ),
            (
                r"Whenever $x+\dfrac{1}{x}=5$ with $x\neq 0$, the square sum $x^2+\dfrac{1}{x^2}$ is reported as $23$.",
                True,
                
            ),
            (
                r"""If $u^{-3}v^2=2$, then $\dfrac{u^8v^3}{u^2v^7}+3uv\cdot\dfrac{u^{-6}v^5}{u^7v^{-2}}=48$ for $u,v\neq 0$.""",
                False,
                r"""Set $R=u^{-3}v^2$. Simplify each summand in terms of $R$ before using $R=2$:

First summand:

$$\frac{u^8v^3}{u^2v^7}=u^6v^{-4}=R^{-2}$$

Second summand:

$$3uv\cdot\frac{u^{-6}v^5}{u^7v^{-2}}=3R^{4}$$

Combine:

$$R^{-2}+3R^{4}$$

Substitute $R=2$:

$$2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25$$

Dropping the summand $R^{-2}=\tfrac{1}{4}$ leaves $48$, which is not the value of the original expression.""",
            ),
            (
                r"The companion difference $(h+k)^3-(h-k)^3$ is rewritten as $2h(h^2+3k^2)$ as well.",
                False,
                
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
                
            ),
            (
                r"""The inequality $u^2-uv\ge uv-v^2$ holds for every real pair $(u,v)$.""",
                True,
                r"""Bring every term to one side before factoring:

Rearrange:

$$u^2-uv-(uv-v^2)=u^2-2uv+v^2$$

Square:

$$(u-v)^2\ge 0$$

A square is nonnegative for every real pair, so the inequality is an identity.""",
            ),
            (
                r"The three-cube factorisation is used at $(a,b,c)=(1,1,-2)$ to report $a^3+b^3+c^3-3abc=0$ because $a+b+c=0$.",
                True,
                
            ),
            (
                r"Expanding $(x+y+z)^2$ as $x^2+y^2+z^2+xy+yz+zx$ is accepted, and the coefficient of $xy$ is therefore recorded as $1$.",
                False,
                
            ),
            (
                r"Given $p+q+r=3$ and $pq+qr+rp=2$, a clerk reports $p^2+q^2+r^2=7$.",
                False,
                
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
                
            ),
            (
                r"""The inequality $x^2-xy\ge xy-y^2$ holds for every real pair $(x,y)$.""",
                True,
                r"""Bring every term to one side before factoring:

Rearrange:

$$x^2-xy-(xy-y^2)=x^2-2xy+y^2$$

Square:

$$(x-y)^2\ge 0$$

A square is nonnegative for every real pair, so the inequality is an identity.""",
            ),
            (
                r"Grouping $x^3+3x^2-x-3$ as $x^2(x+3)-(x+3)$ factors as $(x^2-1)(x+3)=(x-1)(x+1)(x+3)$.",
                True,
                
            ),
            (
                r"The coefficient of $x^2 y$ in $(2x+y)^3$ is recorded as $2$.",
                False,
                
            ),
            (
                r"""The inequality $a^2+ab\ge ab+b^2$ holds for every real pair $(a,b)$.""",
                False,
                r"""Rearrange:

Difference:

$$a^2+ab-(ab+b^2)=a^2-b^2=(a-b)(a+b)$$

The difference $(a-b)(a+b)$ changes sign, so the inequality is not universal. A concrete counter-example is $a=0$, $b=1$.""",
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
                
            ),
            (
                r"A booklet prints $x^4+4=(x^2+2x+2)^2$ for every real $x$.",
                False,
                
            ),
            (
                r"""The inequality $m^2+mn\ge mn+n^2$ holds for every real pair $(m,n)$.""",
                False,
                r"""Rearrange:

Difference:

$$m^2+mn-(mn+n^2)=m^2-n^2=(m-n)(m+n)$$

The difference $(m-n)(m+n)$ changes sign, so the inequality is not universal. A concrete counter-example is $m=0$, $n=1$.""",
            ),
            (
                r"Rewriting the difference $(\rho+\sigma)^3-(\rho-\sigma)^3$ as $2\rho(\rho^2+3\sigma^2)$ is accepted on every real pair.",
                False,
                
            ),
            (
                r"Given $a+b+c=0$ with $a=1$, $b=1$, a slip sets $c=2$ and concludes $a^3+b^3+c^3=3abc$.",
                False,
                
            ),
        ],
        overview="Five closing checks: a half-sum of squared gaps, a squared Sophie Germain factor, a cube-sum identity, a cube-difference trap, and a vanishing-sum slip.",
    ),
]
