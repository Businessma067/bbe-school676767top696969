from __future__ import annotations

from common import task

TASKS = [
    task(
        title="Three letters, one squared sum",
        subsection="2.1",
        difficulty="3/5",
        context="An examiner’s booklet lists five expansion claims in the letters $a$, $b$, and $c$. Judge each claim on its own.",
        items=[
            (
                "A marker treats $(a+b+c)^2=a^2+b^2+c^2+ab+bc+ca$ as an identity.",
                False,
                r"""The square of a three-term sum expands by distributing every letter against every letter:
$$(a+b+c)^2=a^2+b^2+c^2+2ab+2bc+2ca.$$
The marked version drops each coefficient $2$, so the two sides differ by $ab+bc+ca$.""",
            ),
            (
                "Subtracting $(a-b)^2$ from $(a+b)^2$ is claimed to leave $4ab$ for every real pair $(a,b)$.",
                True,
                r"""Expand both squares:
$$(a+b)^2=a^2+2ab+b^2,\qquad (a-b)^2=a^2-2ab+b^2.$$
Their difference is $4ab$. The claim matches the identity.""",
            ),
            (
                "A student writes $(2a-3b)^2=4a^2-12ab+9b^2$ and calls it an identity.",
                True,
                r"""$(2a-3b)^2=(2a)^2-2\cdot 2a\cdot 3b+(3b)^2=4a^2-12ab+9b^2$. The middle term carries the minus sign from the binomial, and the coefficients match.""",
            ),
            (
                "Someone asserts that $(a+b)^2$ may be replaced by $a^2+b^2$ in every calculation.",
                False,
                r"""$(a+b)^2=a^2+2ab+b^2$. Replacing the square by $a^2+b^2$ discards the cross term $2ab$, which is zero only in special cases, not identically.""",
            ),
            (
                "Factoring $a^2-b^2$ as $(a-b)(a+b)$ is presented as valid for all real $a$ and $b$.",
                True,
                r"""Distributing the right-hand side recovers $a^2-b^2$ with no leftover terms. This is the difference-of-squares identity.""",
            ),
        ],
        overview="Five independent expansion and factoring claims. The square of a sum always produces twice the cross terms; difference of squares factorises without restriction on $a$ and $b$.",
    ),
    task(
        title="Cubes of a sum and of a difference",
        subsection="2.1",
        difficulty="4/5",
        context="A workshop sheet compares cubes built from the same two letters $p$ and $q$. Each line is a separate identity to accept or reject.",
        items=[
            (
                "The expansion of $(p+q)^3$ is written as $p^3+q^3+3pq(p+q)$.",
                True,
                r"""$(p+q)^3=p^3+3p^2q+3pq^2+q^3=p^3+q^3+3pq(p+q)$. The grouped form is the standard cube-of-a-sum identity.""",
            ),
            (
                "A candidate claims $(p-q)^3=p^3-q^3-3pq(p-q)$.",
                True,
                r"""$(p-q)^3=p^3-3p^2q+3pq^2-q^3=p^3-q^3-3pq(p-q)$. The signs follow the binomial with a minus in the second term.""",
            ),
            (
                "The difference $p^3-q^3$ is factored as $(p-q)(p^2-pq+q^2)$.",
                False,
                r"""The correct factorisation is
$$p^3-q^3=(p-q)(p^2+pq+q^2).$$
The middle term of the quadratic factor is $+pq$, not $-pq$.""",
            ),
            (
                "Adding the cubes is said to give $p^3+q^3=(p+q)(p^2-pq+q^2)$.",
                True,
                r"""Distributing $(p+q)(p^2-pq+q^2)$ produces $p^3-p^2q+pq^2+p^2q-pq^2+q^3=p^3+q^3$. The identity holds.""",
            ),
            (
                "A note states $(p+q)^3-(p-q)^3=2q(3p^2+q^2)$.",
                True,
                r"""From the two cube expansions, the odd-powered terms in $q$ survive:
$$(p+q)^3-(p-q)^3=2(3p^2q+q^3)=2q(3p^2+q^2).$$""",
            ),
        ],
        overview="Cube identities for a sum and a difference. Sum and difference of cubes factor with opposite signs on the middle term of the quadratic factor.",
    ),
    task(
        title="The three-cube combination with $3abc$",
        subsection="2.1",
        difficulty="5/5",
        context="Let $a$, $b$, and $c$ be real numbers. A problem set hunts the factorisation of $a^3+b^3+c^3-3abc$ and a special case of it.",
        items=[
            (
                "It is claimed that $a^3+b^3+c^3-3abc$ factors as $(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$.",
                True,
                r"""This is the standard three-letter cube identity. Expanding the product on the right recovers $a^3+b^3+c^3-3abc$ after the quadratic cross terms cancel appropriately.""",
            ),
            (
                "Whenever $a+b+c=0$, a student concludes $a^3+b^3+c^3=3abc$ without expanding anything further.",
                True,
                r"""Substitute $a+b+c=0$ into the identity of the previous line: the first factor vanishes, so $a^3+b^3+c^3-3abc=0$, hence $a^3+b^3+c^3=3abc$.""",
            ),
            (
                "If $a=1$, $b=2$, and $c=-3$, then $a+b+c=0$, so $a^3+b^3+c^3$ must equal $3abc=-18$.",
                True,
                r"""$1+2+(-3)=0$. Then $1+8-27=-18$ and $3\cdot 1\cdot 2\cdot(-3)=-18$. Both sides match, as the special case requires.""",
            ),
            (
                "A candidate writes $a^2+b^2+c^2-ab-bc-ca=\\dfrac{1}{2}\\bigl((a-b)^2+(b-c)^2+(c-a)^2\\bigr)$ as an identity.",
                True,
                r"""Expand the right-hand side:
$$\frac{1}{2}\bigl(2a^2+2b^2+2c^2-2ab-2bc-2ca\bigr)=a^2+b^2+c^2-ab-bc-ca.$$
The two expressions are identical.""",
            ),
            (
                "Someone asserts that $a^3+b^3+c^3-3abc=0$ for every triple $(a,b,c)$.",
                False,
                r"""The identity is a factorisation, not a vanishing theorem. For instance $a=1$, $b=0$, $c=0$ gives $1\neq 0$. The combination is zero precisely when $a+b+c=0$ or when two of the letters are equal and the third matches them in the usual degenerate ways, not identically.""",
            ),
        ],
        overview="The factorisation of $a^3+b^3+c^3-3abc$ and the consequence $a+b+c=0\\implies a^3+b^3+c^3=3abc$. The quadratic factor is half the sum of squared differences.",
    ),
    task(
        title="Cross terms in a three-letter square",
        subsection="2.1",
        difficulty="3/5",
        context="A revision card in the letters $x$, $y$, and $z$ collects five remarks about squaring a three-term sum. Judge each remark on its own.",
        items=[
            (
                "Expanding the square $(x+y+z)^2$ is recorded as $x^2+y^2+z^2+xy+yz+zx$, with each mixed product left undoubled.",
                False,
                r"""Distribute every letter against every letter:
$$(x+y+z)^2=x^2+y^2+z^2+2xy+2yz+2zx.$$
The recorded version drops each coefficient $2$. The two sides differ by $xy+yz+zx$, so they are not identical.""",
            ),
            (
                "The mixed product $2xy$ in $(x+y+z)^2$ arises because $x$ meets $y$ and $y$ meets $x$.",
                True,
                r"""In the product $(x+y+z)(x+y+z)$, the pair $\{x,y\}$ occurs twice: once as $x\cdot y$ and once as $y\cdot x$. Those two contributions add to $2xy$. The same counting produces $2yz$ and $2zx$.""",
            ),
            (
                "Collecting like terms after distributing $(x+y+z)(x+y+z)$ produces the coefficient $2$ in front of $yz$.",
                True,
                r"""The term $y\cdot z$ and the term $z\cdot y$ both appear. Adding them gives $2yz$. No other pair of letters produces $yz$, so the collected coefficient is exactly $2$.""",
            ),
            (
                "Given only $s=x+y+z$ and $p=xy+yz+zx$, the identity $x^2+y^2+z^2=s^2-2p$ holds for all real $x$, $y$, and $z$.",
                True,
                r"""Expand $s^2$:
$$s^2=(x+y+z)^2=x^2+y^2+z^2+2p.$$
Rearrangement yields $x^2+y^2+z^2=s^2-2p$. The identity needs no further data beyond $s$ and $p$.""",
            ),
            (
                "Rewriting $(x+y+z)^2-(x^2+y^2+z^2)$ leaves $2(xy+yz+zx)$ identically.",
                True,
                r"""From the expansion $(x+y+z)^2=x^2+y^2+z^2+2xy+2yz+2zx$, subtract the three squares. What remains is $2(xy+yz+zx)$.""",
            ),
        ],
        overview="The square $(x+y+z)^2$ expands to three squares plus twice every pairwise product. Omitting those factors $2$ is the standard error; equivalently $x^2+y^2+z^2=(x+y+z)^2-2(xy+yz+zx)$.",
    ),
    task(
        title="Mixed signs inside $(a-b-c)^2$",
        subsection="2.1",
        difficulty="4/5",
        context="Three letters appear with mixed signs inside a square on a tutor’s board. Each of the five comments is a separate identity claim.",
        items=[
            (
                "A marker accepts $(a-b-c)^2=a^2+b^2+c^2-2ab-2ac+2bc$ as an identity.",
                True,
                r"""Write the square as $\bigl(a-(b+c)\bigr)^2=a^2-2a(b+c)+(b+c)^2$. Expand the last square:
$$a^2-2ab-2ac+b^2+2bc+c^2.$$
The mixed term in $b$ and $c$ is $+2bc$, and the cross terms with $a$ carry minus signs.""",
            ),
            (
                "Dropping every mixed product, a student writes $(a-b-c)^2=a^2-b^2-c^2$ for all real $a$, $b$, and $c$.",
                False,
                r"""Squaring does not pass through a difference letter by letter. Already $(a-b)^2=a^2-2ab+b^2$ is not $a^2-b^2$. With the extra $-c$, the fully expanded form still contains $-2ab$, $-2ac$, and $+2bc$. The claimed identity discards all of them.""",
            ),
            (
                "Treating the square as $((a-b)-c)^2$ produces $(a-b)^2-2c(a-b)+c^2$ before any remaining expansion.",
                True,
                r"""Set $u=a-b$. Then $(u-c)^2=u^2-2cu+c^2$, which is $(a-b)^2-2c(a-b)+c^2$. This is the binomial square in $u$ and $c$, and it is an identity.""",
            ),
            (
                "The coefficient of $bc$ in the fully expanded form of $(a-b-c)^2$ equals $+2$.",
                True,
                r"""From $(b+c)^2=b^2+2bc+c^2$ inside $\bigl(a-(b+c)\bigr)^2$, the product $bc$ arrives with coefficient $+2$. The terms $-2a(b+c)$ do not produce $bc$. So the collected coefficient is $+2$.""",
            ),
            (
                "Grouping $a-b$ first is said to justify $(a-b-c)^2=(a-b)^2-c^2$ for every real triple.",
                False,
                r"""The identity $(u-c)^2=u^2-2uc+c^2$ still contains the middle term $-2uc$. Replacing $u$ by $a-b$ gives
$$(a-b)^2-2c(a-b)+c^2,$$
which is not $(a-b)^2-c^2$. The proposed shortcut is a difference of squares with the wrong second factor, not a square of a difference.""",
            ),
        ],
        overview="The square $(a-b-c)^2$ is $\\bigl(a-(b+c)\\bigr)^2=a^2-2a(b+c)+(b+c)^2$, hence $a^2+b^2+c^2-2ab-2ac+2bc$. Mixed products cannot be dropped, and $(a-b)^2-c^2$ is a different polynomial.",
    ),
    task(
        title="Doubling the middle of $(2x+3y)^2$",
        subsection="2.1",
        difficulty="3/5",
        context="A worksheet squares the binomial $2x+3y$. Five comments about the expansion and the middle term are offered for a true-or-false verdict.",
        items=[
            (
                "The middle term of $(2x+3y)^2$ equals $12xy$, coming from $2\\cdot(2x)\\cdot(3y)$.",
                True,
                r"""The binomial-square rule $(u+v)^2=u^2+2uv+v^2$ with $u=2x$ and $v=3y$ gives the cross term
$$2\cdot 2x\cdot 3y=12xy.$$
Together with $(2x)^2=4x^2$ and $(3y)^2=9y^2$, the expansion is $4x^2+12xy+9y^2$.""",
            ),
            (
                "Squaring the first summand alone contributes $4x^2$ to $(2x+3y)^2$.",
                True,
                r"""$(2x)^2=4x^2$. No other pair of factors in $(2x+3y)(2x+3y)$ produces $x^2$, so the collected $x^2$ coefficient is $4$.""",
            ),
            (
                "Comparing $(2x+3y)^2$ with $(2x-3y)^2$, only the sign of the cross term changes.",
                True,
                r"""$(2x-3y)^2=4x^2-2\cdot 2x\cdot 3y+9y^2=4x^2-12xy+9y^2$. The outer squares stay $4x^2$ and $9y^2$; the middle term flips from $+12xy$ to $-12xy$.""",
            ),
            (
                "An examiner lists $(2x+3y)^2=4x^2+6xy+9y^2$ as a standard identity.",
                False,
                r"""The product $2x\cdot 3y=6xy$ is only half of the cross term. The binomial-square rule still multiplies by $2$, so the middle term is $12xy$, not $6xy$. The listed expansion is therefore wrong.""",
            ),
            (
                "Rewriting $4x^2+12xy+9y^2$ as $(2x+3y)^2$ is valid for every real pair $(x,y)$.",
                True,
                r"""The two polynomials were shown to be equal by expanding $(2x+3y)^2$. The reverse rewriting is the same identity, read from right to left.""",
            ),
        ],
        overview="For $(2x+3y)^2$ the cross term is $2\\cdot 2x\\cdot 3y=12xy$, not $6xy$. Changing $3y$ to $-3y$ flips only that middle sign.",
    ),
    task(
        title="Which trinomials are actual squares",
        subsection="2.1",
        difficulty="3/5",
        context="A checklist asks which quadratic polynomials are perfect squares of linear binomials. Each identification is a separate claim.",
        items=[
            (
                "Dropping the doubled middle term, a student still identifies $x^2+9$ with $(x+3)^2$.",
                False,
                r"""$(x+3)^2=x^2+6x+9$. The constant $9$ matches $(3)^2$, but the middle term $6x$ is required. Equating $x^2+9$ with $(x+3)^2$ is the error $(u+v)^2=u^2+v^2$.""",
            ),
            (
                "Calling $x^2+6x+8$ a perfect-square trinomial is accepted on the checklist.",
                False,
                r"""A monic perfect square has the shape $(x+k)^2=x^2+2kx+k^2$. Here $2k=6$ forces $k=3$, so the constant must be $9$, not $8$. In fact $x^2+6x+8=(x+3)^2-1$, which is not a square of a linear binomial.""",
            ),
            (
                "Matching $x^2+6x+9$ with $(x+3)^2$ is an identity on the real line.",
                True,
                r"""$(x+3)^2=x^2+2\cdot x\cdot 3+9=x^2+6x+9$. Every coefficient matches, so the two expressions agree for every real $x$.""",
            ),
            (
                "The trinomial $9y^2-12y+4$ equals $(3y-2)^2$ for every real $y$.",
                True,
                r"""$(3y-2)^2=(3y)^2-2\cdot 3y\cdot 2+2^2=9y^2-12y+4$. The middle sign is minus because the binomial itself carries a minus.""",
            ),
            (
                "Checking $x^2+2x+1$ against $(x+1)^2$ confirms they agree identically.",
                True,
                r"""$(x+1)^2=x^2+2x+1$. This is the model perfect-square trinomial with doubled middle term $2x$ and constant $1^2$.""",
            ),
        ],
        overview="A quadratic $x^2+2kx+k^2$ is $(x+k)^2$. The constant must be the square of half the middle coefficient; $x^2+6x+8$ fails that test, while $x^2+6x+9$ and $9y^2-12y+4$ pass.",
    ),
    task(
        title="Completing the square as a rewrite",
        subsection="2.1",
        difficulty="4/5",
        context="Completing the square is used here only as a rewriting of a quadratic polynomial, never as a device for solving an equation. Five rewrite claims follow.",
        items=[
            (
                "Completing the square rewrites $x^2-6x+10$ as $(x-3)^2+1$ for every real $x$.",
                True,
                r"""Half of the coefficient $-6$ is $-3$, and $(-3)^2=9$. Add and subtract $9$:
$$x^2-6x+10=(x^2-6x+9)+10-9=(x-3)^2+1.$$
The two sides are identical as polynomials.""",
            ),
            (
                "A candidate claims $x^2-6x+10=(x-3)^2$, treating the leftover constant as zero.",
                False,
                r"""$(x-3)^2=x^2-6x+9$. The original quadratic is one larger:
$$x^2-6x+10=(x-3)^2+1.$$
Omitting the $+1$ is a coefficient error, not a valid rewrite.""",
            ),
            (
                "Because $(x-3)^2+1\\ge 1$ for every real $x$, the quadratic $x^2-6x+10$ is always positive.",
                True,
                r"""A square is at least $0$, so $(x-3)^2+1$ is at least $1$. The rewritten form never hits $0$ and never becomes negative. Since the rewrite is an identity, $x^2-6x+10$ has the same property.""",
            ),
            (
                "Substituting $x=3$ into $x^2-6x+10$ is said to produce $0$, on the grounds that a completed square must vanish at its vertex.",
                False,
                r"""At $x=3$ one has $9-18+10=1$, matching $(0)^2+1=1$. Completing the square moved the vertex to $x=3$, but the value there is the leftover $+1$, not $0$. Vanishing would require the original constant to have been $9$ rather than $10$.""",
            ),
            (
                "Shifting the same idea, $x^2-6x+9$ really is $(x-3)^2$, one less than $x^2-6x+10$.",
                True,
                r"""$x^2-6x+9=(x-3)^2$ is the genuine perfect square. Subtracting $1$ from $x^2-6x+10$ produces that square, which is consistent with the rewrite $x^2-6x+10=(x-3)^2+1$.""",
            ),
        ],
        overview="Completing the square rewrites $x^2-6x+10=(x-3)^2+1$. The leftover $+1$ makes the quadratic always at least $1$; it is not itself a perfect square, unlike $x^2-6x+9$.",
    ),
    task(
        title="Splitting $x^4-16$ over the reals",
        subsection="2.1",
        difficulty="4/5",
        context="A factorisation sheet asks for the complete factorisation of $x^4-16$ over the real numbers. Five proposed splittings are to be accepted or rejected.",
        items=[
            (
                "Factoring over the reals, $x^4-16=(x-2)(x+2)(x^2+4)$ holds identically.",
                True,
                r"""Difference of squares twice:
$$x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4).$$
The quadratic $x^2+4=(x)^2+2^2$ has no real root, so over $\mathbb{R}$ the factorisation stops there. Expanding the right-hand side recovers $x^4-16$.""",
            ),
            (
                "A script shows $x^4-16=(x^2-4)^2$, confusing a difference of squares with a square of a difference.",
                False,
                r"""$(x^2-4)^2=x^4-8x^2+16$, which still contains an $x^2$ term. By contrast $x^4-16$ has no $x^2$ term. The two polynomials disagree already at $x=0$: $-16$ versus $+16$.""",
            ),
            (
                "Over the reals, $x^2+4$ is said to split into $(x-2)(x+2)$ as well.",
                False,
                r"""$(x-2)(x+2)=x^2-4$, not $x^2+4$. The polynomial $x^2+4$ equals $(x)^2+(2)^2$ and stays positive for all real $x$, so it contributes no further real linear factors.""",
            ),
            (
                "By difference of squares, $x^4-16=(x^2-4)(x^2+4)$ before the first factor splits again.",
                True,
                r"""View $x^4-16$ as $(x^2)^2-4^2$. The difference-of-squares identity gives $(x^2-4)(x^2+4)$. Only afterwards does $x^2-4=(x-2)(x+2)$.""",
            ),
            (
                "Inserting $x=0$ into both $x^4-16$ and $(x-2)(x+2)(x^2+4)$ yields $-16$ on each side.",
                True,
                r"""The left-hand side is $0-16=-16$. The right-hand side is $(-2)(2)(4)=-16$. The numerical check is consistent with the identity, though of course one check does not replace the expansion.""",
            ),
        ],
        overview="Over the reals, $x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)$. The factor $x^2+4$ is irreducible over $\\mathbb{R}$, and $(x^2-4)^2$ is a different polynomial.",
    ),
    task(
        title="Sophie Germain’s factorisation of $x^4+4$",
        subsection="2.1",
        difficulty="5/5",
        context="An old identity of Sophie Germain is quoted in five different ways on a challenge sheet. Only some of the quotations are algebraically correct.",
        items=[
            (
                "Sophie Germain’s identity writes $x^4+4=(x^2+2x+2)(x^2-2x+2)$ for every real $x$.",
                True,
                r"""Add and subtract $4x^2$:
$$x^4+4=x^4+4x^2+4-4x^2=(x^2+2)^2-(2x)^2.$$
Difference of squares then gives
$$(x^2+2-2x)(x^2+2+2x)=(x^2-2x+2)(x^2+2x+2).$$""",
            ),
            (
                "Adding and subtracting $4x^2$ turns $x^4+4$ into $(x^2+2)^2-(2x)^2$, a difference of squares.",
                True,
                r"""$(x^2+2)^2=x^4+4x^2+4$, so
$$(x^2+2)^2-4x^2=x^4+4.$$
The subtracted term $4x^2$ is $(2x)^2$, hence the difference of squares $(x^2+2)^2-(2x)^2$.""",
            ),
            (
                "One textbook prints $x^4+4=(x^2+2)^2$, stopping after the incomplete square.",
                False,
                r"""$(x^2+2)^2=x^4+4x^2+4$, which exceeds $x^4+4$ by $4x^2$. The extra $4x^2$ is precisely the term one must subtract before factoring as a difference of squares.""",
            ),
            (
                "A student writes $x^4+4=(x^2+2x+4)(x^2-2x+4)$, using $4$ as the constant in each quadratic.",
                False,
                r"""Distribute:
$$(x^2+2x+4)(x^2-2x+4)=(x^2+4)^2-(2x)^2=x^4+8x^2+16-4x^2=x^4+4x^2+16.$$
The product is $x^4+4x^2+16$, not $x^4+4$. The correct constants are $2$, not $4$.""",
            ),
            (
                "Expanding in two ways, distributing $(x^2+2x+2)(x^2-2x+2)$ recovers $x^4+4$ after the $\\pm 2x^3$ terms cancel.",
                True,
                r"""The product is $\bigl((x^2+2)+2x\bigr)\bigl((x^2+2)-2x\bigr)=(x^2+2)^2-4x^2=x^4+4x^2+4-4x^2=x^4+4$. The cubic terms $2x\cdot x^2$ and $-2x\cdot x^2$ cancel, as claimed.""",
            ),
        ],
        overview="Sophie Germain’s identity is $x^4+4=(x^2+2x+2)(x^2-2x+2)$, obtained by writing $x^4+4=(x^2+2)^2-(2x)^2$. Stopping at $(x^2+2)^2$ or using constants $4$ produces $x^4+4x^2+4$ or $x^4+4x^2+16$.",
    ),
    task(
        title="Reciprocal quadratics whose product is $x^4+x^2+1$",
        subsection="2.1",
        difficulty="4/5",
        context="Two quadratics that look like mirrors of one another are multiplied on an exam script, and five conclusions are drawn from the product.",
        items=[
            (
                "Distributing the product $(x^2+x+1)(x^2-x+1)$ yields $x^4+x^2+1$ identically.",
                True,
                r"""Expand:
$$(x^2+1+x)(x^2+1-x)=(x^2+1)^2-x^2=x^4+2x^2+1-x^2=x^4+x^2+1.$$
Alternatively, distribute term by term and watch $\pm x^3$ and $\pm x$ cancel.""",
            ),
            (
                "The odd-powered terms $\\pm x^3$ and $\\pm x$ cancel when the two quadratics are multiplied.",
                True,
                r"""From $(x^2+x+1)(x^2-x+1)$ the contributions to $x^3$ are $x^2\cdot(-x)+x\cdot x^2=-x^3+x^3=0$. The contributions to $x$ are $x\cdot 1+1\cdot(-x)=0$. Only even powers survive.""",
            ),
            (
                "Rewriting $x^4+x^2+1$ as $(x^2+1)^2-x^2$ exhibits a difference of squares in $x^2+1$ and $x$.",
                True,
                r"""$(x^2+1)^2-x^2=x^4+2x^2+1-x^2=x^4+x^2+1$. Then
$$(x^2+1)^2-x^2=(x^2+1-x)(x^2+1+x),$$
which is the original product.""",
            ),
            (
                "A marker accepts $x^4+x^2+1=(x^2+1)^2$ without the subtracted $x^2$.",
                False,
                r"""$(x^2+1)^2=x^4+2x^2+1$. That is larger than $x^4+x^2+1$ by $x^2$. The missing subtraction is exactly the step that turns the square into a difference of squares.""",
            ),
            (
                "Someone equates $x^4+x^2+1$ with $(x^2+x+1)^2$, copying the first factor instead of multiplying by its mirror.",
                False,
                r"""$(x^2+x+1)^2=x^4+2x^3+3x^2+2x+1$, which contains odd powers. The original product cancelled those odd powers. The two polynomials are not the same.""",
            ),
        ],
        overview="The identity $(x^2+x+1)(x^2-x+1)=x^4+x^2+1$ follows from $(x^2+1)^2-x^2$. Odd-powered terms cancel; neither $(x^2+1)^2$ nor $(x^2+x+1)^2$ equals $x^4+x^2+1$.",
    ),
    task(
        title="Factoring $x^5-1$ into a linear and a quartic",
        subsection="2.1",
        difficulty="4/5",
        context="Several proposed factorisations of $x^5-1$ appear on an exam script. Decide which of them are polynomial identities over the reals.",
        items=[
            (
                "A candidate claims $x^5-1=(x-1)^5$, treating a difference of fifth powers as a fifth power of a difference.",
                False,
                r"""$(x-1)^5$ expands by the binomial theorem to $x^5-5x^4+\cdots-1$, with many middle terms. Directly, at $x=0$ one has $-1$ on the left and $(-1)^5=-1$ on the right, but at $x=2$ one has $32-1=31$ versus $1^5=1$. The two polynomials are not identical.""",
            ),
            (
                "Factoring $x^5-1$ as $(x-1)(x^4+x^3+x^2+x+1)$ is valid for every real $x$.",
                True,
                r"""Multiply:
$$(x-1)(x^4+x^3+x^2+x+1)=x^5+x^4+x^3+x^2+x-x^4-x^3-x^2-x-1=x^5-1.$$
The intermediate terms cancel in pairs. This is the standard factorisation of a difference of fifth powers.""",
            ),
            (
                "Because $x^2-1$ divides even-powered differences, $x+1$ is listed as a factor of $x^5-1$ over the reals.",
                False,
                r"""Substitute $x=-1$: $(-1)^5-1=-1-1=-2\neq 0$. So $x+1$ is not a factor. Even-powered identities such as $x^2-1=(x-1)(x+1)$ do not transfer to the odd power $x^5-1$.""",
            ),
            (
                "Multiplying $x-1$ by $x^4+x^3+x^2+x+1$ recovers $x^5-1$ after pairwise cancellation.",
                True,
                r"""Each inner power $x^k$ for $k=1,2,3,4$ appears once with a plus from $x\cdot x^{k-1}$ and once with a minus from $-1\cdot x^k$, so those terms cancel. The surviving terms are $x\cdot x^4=x^5$ and $-1\cdot 1=-1$.""",
            ),
            (
                "Over the reals, $x^5-1$ is said to split into five distinct linear factors.",
                False,
                r"""A further real linear factor would require a real $r$ with $r^4+r^3+r^2+r+1=0$. For $r\ge 0$ every term is nonnegative and the constant $1$ is positive. For $r<0$, set $r=-t$ with $t>0$:
$$t^4-t^3+t^2-t+1=(t^2-t+1)^2+t(t-1)^2.$$
The square $t^2-t+1=\bigl(t-\dfrac{1}{2}\bigr)^2+\dfrac{3}{4}$ never vanishes, so the whole expression stays positive. Thus $x-1$ is the only real linear factor.""",
            ),
        ],
        overview="The identity $x^5-1=(x-1)(x^4+x^3+x^2+x+1)$ comes from multiplying and cancelling. It is not $(x-1)^5$, $x+1$ is not a factor, and the quartic has no real root.",
    ),
    task(
        title="Reading $a^2b^3$ in the fifth binomial power",
        subsection="2.1",
        difficulty="4/5",
        context="Pascal’s triangle is used to read coefficients in $(a+b)^5$. Five coefficient claims are listed; some quote the wrong row or the wrong entry.",
        items=[
            (
                "The coefficient of $a^2b^3$ in $(a+b)^5$ equals $\\binom{5}{2}=10$, or equivalently $\\binom{5}{3}$.",
                True,
                r"""The binomial theorem writes
$$(a+b)^5=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5.$$
The term $a^2b^3$ carries the coefficient $10$, which is $\binom{5}{3}$. The same number is $\binom{5}{2}$, because $\binom{n}{k}=\binom{n}{n-k}$.""",
            ),
            (
                "A workshop claims that the same coefficient is $15$, mixing Pascal’s fifth row with the sixth.",
                False,
                r"""Pascal’s row for exponent $5$ is $1,5,10,10,5,1$. The entry $15$ belongs to the next row (exponent $6$), where $\binom{6}{2}=15$. The coefficient of $a^2b^3$ in $(a+b)^5$ is $10$, not $15$.""",
            ),
            (
                "Binomial expansion assigns $5$ to $a^2b^3$ in $(a+b)^5$, copying the coefficient of $a^4b$.",
                False,
                r"""The term $a^4b$ has $k=1$ and coefficient $\binom{5}{1}=5$. The term $a^2b^3$ sits two places further along the same row, where the entry is $10$. Copying $5$ across is a misreading of Pascal’s row.""",
            ),
            (
                "Pascal’s fifth-power row $1,5,10,10,5,1$ places $10$ on both $a^3b^2$ and $a^2b^3$.",
                True,
                r"""Those two monomials correspond to $k=2$ and $k=3$. The row is palindromic, so both central entries equal $10$. Explicitly $\binom{5}{2}=\binom{5}{3}=10$.""",
            ),
            (
                "Expanding $(a+b)(a+b)^4$ and collecting $a^2b^3$ again produces the coefficient $10$.",
                True,
                r"""First $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$. Multiply by $a+b$. The monomial $a^2b^3$ arises as $a\cdot(ab^3)$ and as $b\cdot(a^2b^2)$:
$$1\cdot 4+1\cdot 6=10.$$
The two routes confirm the binomial coefficient $10$.""",
            ),
        ],
        overview="In $(a+b)^5$ the coefficient of $a^2b^3$ is $\\binom{5}{3}=10$, the same as $\\binom{5}{2}$. The trap values $15$ and $5$ belong to neighbouring rows or neighbouring entries.",
    ),
    task(
        title="Four terms that want to be grouped",
        subsection="2.1",
        difficulty="3/5",
        context="Four-term expressions are to be grouped by a common binomial factor. Each line is an independent factoring claim.",
        items=[
            (
                "After grouping four terms, a student writes $ac+ad+bc+bd=(a+c)(b+d)$.",
                False,
                r"""Distribute $(a+c)(b+d)=ab+ad+cb+cd$. That is a different four-term polynomial (it contains $ab$ and $cd$, not $ac$ and $bd$ as a matched pair). The correct grouping of the given expression pairs $c$ with $d$:
$$a(c+d)+b(c+d)=(a+b)(c+d).$$""",
            ),
            (
                "Pairing $a(c+d)+b(c+d)$ factors $ac+ad+bc+bd$ as $(a+b)(c+d)$ identically.",
                True,
                r"""Factor $a$ from the first two terms and $b$ from the last two:
$$ac+ad+bc+bd=a(c+d)+b(c+d)=(a+b)(c+d).$$
Distributing the right-hand side recovers the four original terms.""",
            ),
            (
                "Cancelling a common factor is not required: distributing $(a+b)(c+d)$ already recovers all four terms.",
                True,
                r"""$(a+b)(c+d)=ac+ad+bc+bd$. The identity is a straight expansion. No division or cancellation of a binomial is involved; grouping is only the reverse of that expansion.""",
            ),
            (
                "The same grouping with $p$, $q$, $x$, and $y$ gives $px+py+qx+qy=(p+q)(x+y)$.",
                True,
                r"""$px+py+qx+qy=p(x+y)+q(x+y)=(p+q)(x+y)$. Only the names of the letters have changed; the pattern is the same as $(a+b)(c+d)$.""",
            ),
            (
                "Someone treats $ac+ad+bc+bd$ as $(a+d)(b+c)$, which expands to $ab+ac+db+dc$.",
                False,
                r"""$(a+d)(b+c)=ab+ac+db+dc$. Comparing with $ac+ad+bc+bd$, the two polynomials share $ac$ but otherwise differ (one has $ab$ and $dc$, the other has $ad$ and $bc$). Wrong pairing of letters produces a different product.""",
            ),
        ],
        overview="Grouping $ac+ad+bc+bd=a(c+d)+b(c+d)=(a+b)(c+d)$ is the reverse of the distributive law. Pairings such as $(a+c)(b+d)$ or $(a+d)(b+c)$ expand to different four-term polynomials.",
    ),
    task(
        title="A cyclic product of three binomials",
        subsection="2.1",
        difficulty="5/5",
        context="A cyclic product $(a+b)(b+c)(c+a)$ is compared with the elementary symmetric polynomials $a+b+c$, $ab+bc+ca$, and $abc$. Five identifications follow.",
        items=[
            (
                "A marker accepts $(a+b)(b+c)(c+a)=(a+b+c)(ab+bc+ca)$ with no correction term.",
                False,
                r"""The correct identity is
$$(a+b)(b+c)(c+a)=(a+b+c)(ab+bc+ca)-abc.$$
Omitting $-abc$ overshoots by $abc$. As a check, set $a=b=c=1$: the left-hand side is $2\cdot 2\cdot 2=8$, while $(3)(3)=9$, and $9-1=8$.""",
            ),
            (
                "Inserting the extra $-abc$, the identity $(a+b)(b+c)(c+a)=(a+b+c)(ab+bc+ca)-abc$ holds for all reals.",
                True,
                r"""Let $s=a+b+c$ and $p=ab+bc+ca$. Note that $a+b=s-c$, and cyclically. Then
$$(s-c)(s-a)(s-b)=s(ab+bc+ca)-abc$$
after expanding, which is $s\cdot p-abc$. Direct expansion of both sides also matches term by term.""",
            ),
            (
                "Sign-flipping the correction, a student writes $(a+b)(b+c)(c+a)=(a+b+c)(ab+bc+ca)+abc$.",
                False,
                r"""The correction term is $-abc$, not $+abc$. With $a=b=c=1$ the left-hand side is $8$, while $9+1=10$. The plus sign therefore fails the same numerical check that the minus sign passes.""",
            ),
            (
                "Given only $a+b+c=0$, the product $(a+b)(b+c)(c+a)$ equals $0$.",
                False,
                r"""If $a+b+c=0$, the identity collapses to $(a+b)(b+c)(c+a)=-abc$. That is zero only when at least one letter is $0$, not identically. Example: $a=1$, $b=1$, $c=-2$ gives $a+b+c=0$ and $(2)(-1)(-1)=2$, while $-abc=-1\cdot 1\cdot(-2)=2$, not $0$.""",
            ),
            (
                "Expanding stepwise, first $(a+b)(a+c)=a^2+a(b+c)+bc$ and then multiplying by $b+c$, recovers the symmetric form after cancellation.",
                True,
                r"""$(a+b)(a+c)=a^2+a(b+c)+bc$. Multiply by $b+c$:
$$a^2(b+c)+a(b+c)^2+bc(b+c).$$
Expanding and collecting yields $a^2b+a^2c+ab^2+2abc+ac^2+b^2c+bc^2$, which is exactly $(a+b+c)(ab+bc+ca)-abc$.""",
            ),
        ],
        overview="The cyclic product identity is $(a+b)(b+c)(c+a)=(a+b+c)(ab+bc+ca)-abc$. Dropping or flipping the $-abc$ term fails; when $a+b+c=0$ the product equals $-abc$, not $0$.",
    ),
    task(
        title="Walking around three squared differences",
        subsection="2.1",
        difficulty="4/5",
        context="Squared differences of three letters are added around a triangle of terms. Five remarks about the cyclic sum $(a-b)^2+(b-c)^2+(c-a)^2$ are to be judged.",
        items=[
            (
                "The cyclic sum $(a-b)^2+(b-c)^2+(c-a)^2$ expands to $2(a^2+b^2+c^2-ab-bc-ca)$.",
                True,
                r"""Expand each square:
$$(a^2-2ab+b^2)+(b^2-2bc+c^2)+(c^2-2ca+a^2)=2a^2+2b^2+2c^2-2ab-2bc-2ca.$$
Factor out $2$ to obtain $2(a^2+b^2+c^2-ab-bc-ca)$.""",
            ),
            (
                "Each letter appears in two squared differences, so the coefficient of $a^2$ in the cyclic sum is $2$.",
                True,
                r"""The letter $a$ occurs in $(a-b)^2$ and in $(c-a)^2$, and not in $(b-c)^2$. Each of those two squares contributes $a^2$, so the collected coefficient is $2$. The same counting applies to $b^2$ and $c^2$.""",
            ),
            (
                "Ignoring the doubled cross terms, a note records the cyclic sum as $a^2+b^2+c^2$ alone.",
                False,
                r"""The expansion also contains $-2ab-2bc-2ca$ and a second copy of each square. Reducing the sum to $a^2+b^2+c^2$ would require discarding half of the squares and all of the mixed products. Those discarded terms are not identically zero.""",
            ),
            (
                "Substituting $a=b=c$ makes every squared difference vanish, so the cyclic sum is $0$.",
                True,
                r"""If $a=b=c$, then $a-b=b-c=c-a=0$, so each square is $0$ and the sum is $0$. Equivalently $2(a^2+a^2+a^2-a^2-a^2-a^2)=0$.""",
            ),
            (
                "Someone treats $(a-b)^2+(b-c)^2+(c-a)^2$ as equal to $(a+b+c)^2$ identically.",
                False,
                r"""$(a+b+c)^2=a^2+b^2+c^2+2ab+2bc+2ca$, whose mixed terms have plus signs. The cyclic sum of squared differences has mixed terms $-2ab-2bc-2ca$ and doubled squares. At $a=1$, $b=c=0$ the cyclic sum is $1^2+0+1^2=2$, while $(1)^2=1$. They do not match.""",
            ),
        ],
        overview="The cyclic identity $(a-b)^2+(b-c)^2+(c-a)^2=2(a^2+b^2+c^2-ab-bc-ca)$ follows by expanding. It is not $a^2+b^2+c^2$ and not $(a+b+c)^2$.",
    ),
    task(
        title="Powers of $2$ in $(x+2)^4$",
        subsection="2.1",
        difficulty="4/5",
        context="The binomial $(x+2)^4$ is expanded on a coefficient hunt. Five claims about individual coefficients or about dropping middle terms are listed.",
        items=[
            (
                "The coefficient of $x^2$ in $(x+2)^4$ is said to equal $6$, quoting $\\binom{4}{2}$ without the factor $2^2$.",
                False,
                r"""The general term is $\binom{4}{k}x^{4-k}2^{k}$. For $x^2$ one has $k=2$, so
$$\binom{4}{2}\cdot 2^{2}=6\cdot 4=24,$$
not $6$. Forgetting to raise the $2$ to the matching power is the error.""",
            ),
            (
                "A candidate claims the coefficient of $x^3$ in $(x+2)^4$ is $4$, forgetting to multiply by $2$.",
                False,
                r"""Here $k=1$, so the coefficient is $\binom{4}{1}\cdot 2=4\cdot 2=8$. The $4$ is only the binomial coefficient; the extra factor $2^1$ is still required.""",
            ),
            (
                "One textbook prints $(x+2)^4=x^4+16$, discarding every mixed term.",
                False,
                r"""That would be the error $(u+v)^4=u^4+v^4$. The full expansion is
$$x^4+8x^3+24x^2+32x+16,$$
with three nonzero mixed terms in between $x^4$ and $16$.""",
            ),
            (
                "Pascal’s fourth-power row, scaled by powers of $2$, puts $24$ in front of $x^2$.",
                True,
                r"""The unscaled row is $1,4,6,4,1$. Multiply termwise by $1,2,4,8,16$:
$$1,\quad 8,\quad 24,\quad 32,\quad 16.$$
The middle entry $6\cdot 4=24$ is the coefficient of $x^2$.""",
            ),
            (
                "Collecting like terms in $(x+2)^2(x+2)^2=(x^2+4x+4)^2$ produces $x^4+8x^3+24x^2+32x+16$.",
                True,
                r"""Square the trinomial: $(x^2+4x+4)^2=x^4+2\cdot x^2\cdot 4x+2\cdot x^2\cdot 4+(4x)^2+2\cdot 4x\cdot 4+16$, which is
$$x^4+8x^3+8x^2+16x^2+32x+16=x^4+8x^3+24x^2+32x+16.$$""",
            ),
        ],
        overview="The expansion $(x+2)^4=x^4+8x^3+24x^2+32x+16$ comes from $\\binom{4}{k}2^{k}$. Quoting only $\\binom{4}{k}$ forgets the powers of $2$; dropping mixed terms is $(u+v)^4=u^4+v^4$.",
    ),
    task(
        title="Even powers ignore the order of subtraction",
        subsection="2.1",
        difficulty="3/5",
        context="Even and odd powers of $a-b$ are compared with the same powers of $b-a$. Five remarks mix the even-odd distinction with binomial expansion.",
        items=[
            (
                "The even power $(a-b)^4$ equals $(b-a)^4$ for every real pair $(a,b)$, because $b-a=-(a-b)$ and $4$ is even.",
                True,
                r"""Set $u=a-b$. Then $b-a=-u$, and $(-u)^4=u^4$ because $4$ is even. Hence $(b-a)^4=(a-b)^4$ identically.""",
            ),
            (
                "Odd powers reverse sign: a note records $(a-b)^3=(b-a)^3$ nevertheless.",
                False,
                r"""$(-u)^3=-u^3$, so $(b-a)^3=-(a-b)^3$. The two cubes agree only when they are both zero. The claimed identity would require an odd power to behave as an even power.""",
            ),
            (
                "Someone treats $(a-b)^4$ as $a^4-b^4$, a difference of fourth powers.",
                False,
                r"""$a^4-b^4=(a^2-b^2)(a^2+b^2)=(a-b)(a+b)(a^2+b^2)$, a degree-$4$ polynomial with different factors. Expanding $(a-b)^4$ instead gives
$$a^4-4a^3b+6a^2b^2-4ab^3+b^4,$$
which equals $a^4-b^4$ only in degenerate cases, not identically.""",
            ),
            (
                "Rewriting $(a-b)^4$ as $a^4+b^4$ is accepted, as if the binomial theorem had no middle terms.",
                False,
                r"""The binomial theorem supplies the three middle terms $-4a^3b+6a^2b^2-4ab^3$. Setting them all to zero is the same $(u+v)^n=u^n+v^n$ error, here with a minus inside the binomial.""",
            ),
            (
                "Changing the order of subtraction inside an even power does not alter the value: $(b-a)^4=(a-b)^4$.",
                True,
                r"""This is the same identity as the first claim, read in the opposite direction. Even powers erase the overall minus sign coming from swapping $a$ and $b$.""",
            ),
        ],
        overview="Because $b-a=-(a-b)$, even powers satisfy $(a-b)^4=(b-a)^4$, while odd powers pick up a minus. Neither $(a-b)^4=a^4-b^4$ nor $(a-b)^4=a^4+b^4$ is an identity.",
    ),
    task(
        title="Squaring $x$ plus its reciprocal",
        subsection="2.1",
        difficulty="4/5",
        context="Expressions built from $x+\\dfrac{1}{x}$ are rewritten by squaring. Restrictions $x\\neq 0$ appear only where the original expression demands them.",
        items=[
            (
                "Omitting the cross term, a script writes $\\bigl(x+\\dfrac{1}{x}\\bigr)^2=x^2+\\dfrac{1}{x^2}$ whenever $x\\neq 0$.",
                False,
                r"""The binomial-square rule still applies:
$$\Bigl(x+\frac{1}{x}\Bigr)^2=x^2+2\cdot x\cdot\frac{1}{x}+\frac{1}{x^2}=x^2+2+\frac{1}{x^2}.$$
The dropped $2$ is the cross term $2\cdot x\cdot\frac{1}{x}$. At $x=1$ the left-hand side is $4$, while $1+1=2$.""",
            ),
            (
                "Provided $x\\neq 0$, squaring gives $\\bigl(x+\\dfrac{1}{x}\\bigr)^2=x^2+2+\\dfrac{1}{x^2}$.",
                True,
                r"""This is the expansion above. The restriction $x\neq 0$ is required only so that $\frac{1}{x}$ is defined; once that is granted, the identity holds for every remaining real $x$.""",
            ),
            (
                "The squared form $x^2+2+\\dfrac{1}{x^2}$ is presented as a polynomial identity on the whole real line, including $x=0$.",
                False,
                r"""At $x=0$ neither $x+\frac{1}{x}$ nor $\frac{1}{x^2}$ is defined. The identity is a statement about real numbers $x\neq 0$, not a polynomial identity on all of $\mathbb{R}$. (Clearing the denominator produces the polynomial identity $(x^2+1)^2=x^4+2x^2+1$, which is different.)""",
            ),
            (
                "Given only the value of $x+\\dfrac{1}{x}$, the identity $\\bigl(x+\\dfrac{1}{x}\\bigr)^2-2=x^2+\\dfrac{1}{x^2}$ recovers the companion expression.",
                True,
                r"""From $\bigl(x+\frac{1}{x}\bigr)^2=x^2+2+\frac{1}{x^2}$, subtract $2$:
$$x^2+\frac{1}{x^2}=\Bigl(x+\frac{1}{x}\Bigr)^2-2.$$
So $x^2+\frac{1}{x^2}$ is determined by $x+\frac{1}{x}$ alone.""",
            ),
            (
                "Multiplying through by $x^2$ converts the identity into $(x^2+1)^2=x^2\\bigl(x^2+2+\\dfrac{1}{x^2}\\bigr)$, valid for $x\\neq 0$.",
                True,
                r"""Left-hand side: $x^2\bigl(x+\frac{1}{x}\bigr)^2=\bigl(x^2+1\bigr)^2$. Right-hand side: $x^2\cdot\bigl(x^2+2+\frac{1}{x^2}\bigr)=x^4+2x^2+1=(x^2+1)^2$. Both sides match. This is the original identity cleared of the denominator.""",
            ),
        ],
        overview="For $x\\neq 0$, $\\bigl(x+1/x\\bigr)^2=x^2+2+1/x^2$. Dropping the $2$ is the usual error; the identity is not a polynomial statement at $x=0$, but multiplying through by $x^2$ recovers $(x^2+1)^2$.",
    ),
    task(
        title="A square of a difference of squares",
        subsection="2.1",
        difficulty="3/5",
        context="A difference of squares is itself squared on a revision sheet. Five algebraic remarks mix that identity with $(a-b)^4$ and $a^4-b^4$.",
        items=[
            (
                "Factoring the inner difference first, $(a^2-b^2)^2=((a-b)(a+b))^2=(a-b)^2(a+b)^2$.",
                True,
                r"""Difference of squares gives $a^2-b^2=(a-b)(a+b)$. Squaring both sides (or using $(uv)^2=u^2v^2$) produces
$$(a^2-b^2)^2=(a-b)^2(a+b)^2.$$
The identity holds for all real $a$ and $b$.""",
            ),
            (
                "A candidate claims $(a^2-b^2)^2=(a-b)^4$, replacing $(a+b)^2$ by another $(a-b)^2$.",
                False,
                r"""$(a-b)^4=(a-b)^2(a-b)^2$, whereas the correct factorisation is $(a-b)^2(a+b)^2$. These agree only when $a+b=\pm(a-b)$, i.e. only on special lines, not identically. At $a=2$, $b=1$ one has $(4-1)^2=9$ versus $1^4=1$.""",
            ),
            (
                "Expanding both $(a^2-b^2)^2$ and $a^4-2a^2b^2+b^4$ shows they coincide.",
                True,
                r"""$(a^2-b^2)^2=a^4-2a^2b^2+b^4$ by the binomial square in $a^2$ and $b^2$. Equivalently
$$(a-b)^2(a+b)^2=(a^2-2ab+b^2)(a^2+2ab+b^2)=(a^2+b^2)^2-(2ab)^2=a^4+2a^2b^2+b^4-4a^2b^2=a^4-2a^2b^2+b^4.$$""",
            ),
            (
                "Someone treats $(a^2-b^2)^2$ as $a^4-b^4$.",
                False,
                r"""$a^4-b^4=(a^2-b^2)(a^2+b^2)$, a product of two quadratic factors, not the square of $a^2-b^2$. At $a=2$, $b=1$ one has $9$ versus $16-1=15$. Squaring and taking a difference of fourth powers are different operations.""",
            ),
            (
                "Matching $(a^2-b^2)^2$ with $(a^2+b^2)^2$ is accepted, as if the inner minus were a plus.",
                False,
                r"""$(a^2+b^2)^2=a^4+2a^2b^2+b^4$, while $(a^2-b^2)^2=a^4-2a^2b^2+b^4$. The two differ by $4a^2b^2$. Flipping the inner sign is not an identity.""",
            ),
        ],
        overview="Squaring a difference of squares gives $(a^2-b^2)^2=(a-b)^2(a+b)^2=a^4-2a^2b^2+b^4$. It is not $(a-b)^4$, not $a^4-b^4$, and not $(a^2+b^2)^2$.",
    ),
    task(
        title="Four letters, six doubled products",
        subsection="2.1",
        difficulty="4/5",
        context="Four letters $a$, $b$, $c$, and $d$ sit inside a single square. The issue is which mixed products appear and whether they carry the coefficient $2$.",
        items=[
            (
                "Four squares alone are said to exhaust $(a+b+c+d)^2$.",
                False,
                r"""Expanding produces four squares and a doubled product for every unordered pair of distinct letters:
$$(a+b+c+d)^2=a^2+b^2+c^2+d^2+2(ab+ac+ad+bc+bd+cd).$$
Omitting the six mixed terms is the four-letter version of $(u+v)^2=u^2+v^2$.""",
            ),
            (
                "Only adjacent letters are crossed: a note records the expansion as $a^2+b^2+c^2+d^2+2ab+2bc+2cd$.",
                False,
                r"""Every pair contributes, not only neighbours in a written order. The missing mixed terms are $2ac$, $2ad$, and $2bd$. The recorded expansion is therefore incomplete.""",
            ),
            (
                "Twice every unordered pair appears: $(a+b+c+d)^2$ equals the sum of the four squares plus $2(ab+ac+ad+bc+bd+cd)$.",
                True,
                r"""There are $\binom{4}{2}=6$ unordered pairs among four letters, and each pair $\{u,v\}$ contributes $uv+vu=2uv$. Adding the four squares gives the stated expansion.""",
            ),
            (
                "The number of mixed products with coefficient $2$ is $\\binom{4}{2}=6$.",
                True,
                r"""Choosing two distinct letters out of four can be done in $\binom{4}{2}=6$ ways. Each such choice produces one mixed product, and the product of the two letters occurs twice in $(a+b+c+d)(a+b+c+d)$, hence the coefficient $2$.""",
            ),
            (
                "A student writes $(a+b+c+d)^2=((a+b)+(c+d))^2=(a+b)^2+(c+d)^2$, dropping $2(a+b)(c+d)$.",
                False,
                r"""The two-term square $((a+b)+(c+d))^2=(a+b)^2+2(a+b)(c+d)+(c+d)^2$ still contains the middle term $2(a+b)(c+d)$. Dropping it is again $(u+v)^2=u^2+v^2$ with $u=a+b$ and $v=c+d$.""",
            ),
        ],
        overview="The square of a four-term sum has four squares and six doubled mixed products, one for each pair of letters. Adjacent-only pairings and $(u+v)^2=u^2+v^2$ both fail.",
    ),
    task(
        title="A biquadratic that is already a square",
        subsection="2.1",
        difficulty="3/5",
        context="A biquadratic in $x$ looks like a square in the letter $x^2$. Five identifications are offered, including the classic trap $x^4+4x^2+16=(x^2+4)^2$.",
        items=[
            (
                "Rewriting as a square in $x^2$, one has $x^4-8x^2+16=(x^2-4)^2$ for every real $x$.",
                True,
                r"""Treat $x^2$ as a single letter $u$. Then $u^2-8u+16=(u-4)^2$, because $2\cdot 4=8$ and $4^2=16$. Substituting $u=x^2$ gives $(x^2-4)^2=x^4-8x^2+16$.""",
            ),
            (
                "Factoring further, $(x^2-4)^2=(x-2)^2(x+2)^2$ over the reals.",
                True,
                r"""Difference of squares: $x^2-4=(x-2)(x+2)$. Squaring both sides produces $(x^2-4)^2=(x-2)^2(x+2)^2$. Expanding either form recovers $x^4-8x^2+16$.""",
            ),
            (
                "A marker accepts $x^4-8x^2+16=(x^2+4)^2$, flipping the inner sign.",
                False,
                r"""$(x^2+4)^2=x^4+8x^2+16$, whose middle term is $+8x^2$, not $-8x^2$. The two polynomials differ by $16x^2$.""",
            ),
            (
                "Someone treats $x^4+4x^2+16$ as $(x^2+4)^2$.",
                False,
                r"""$(x^2+4)^2=x^4+8x^2+16$. The middle coefficient on the square is $2\cdot x^2\cdot 4=8$, not $4$. The polynomial $x^4+4x^2+16$ is not a square of $x^2+4$; it is $(x^2+2)^2+12$, for instance, but not a square of a quadratic $x^2+k$.""",
            ),
            (
                "The biquadratic $x^4-8x^2+16$ is identified with $(x^2-8)^2=x^4-16x^2+64$.",
                False,
                r"""$(x^2-8)^2=x^4-16x^2+64$. That would require the middle coefficient $-16$ and constant $64$, not $-8$ and $16$. Half of $-8$ is $-4$, so the inner constant must be $4$, giving $(x^2-4)^2$.""",
            ),
        ],
        overview="The identity $x^4-8x^2+16=(x^2-4)^2=(x-2)^2(x+2)^2$ is a perfect square in $x^2$. Neither $(x^2+4)^2=x^4+8x^2+16$ nor $x^4+4x^2+16=(x^2+4)^2$ holds.",
    ),
    task(
        title="The leftover of a cubed binomial",
        subsection="2.1",
        difficulty="4/5",
        context="The leftover of $(x+y)^3$ after removing $x^3$ and $y^3$ is discussed in five ways. The factor $3xy(x+y)$ is the target identity.",
        items=[
            (
                "A note records $(x+y)^3-x^3-y^3=xy(x+y)$, missing the factor $3$.",
                False,
                r"""Expand $(x+y)^3=x^3+3x^2y+3xy^2+y^3$. Subtract $x^3+y^3$ to leave $3x^2y+3xy^2=3xy(x+y)$. The recorded version is too small by a factor $3$.""",
            ),
            (
                "Someone treats the leftover as $3xy$, independent of the extra factor $(x+y)$.",
                False,
                r"""$3x^2y+3xy^2=3xy(x+y)$, not $3xy$. At $x=y=1$ the leftover is $(2)^3-1-1=6$, while $3\cdot 1\cdot 1=3$. The missing factor $x+y$ equals $2$ in that check.""",
            ),
            (
                "Expanding $(x+y)^3=x^3+3x^2y+3xy^2+y^3$ and subtracting $x^3+y^3$ leaves $3xy(x+y)$.",
                True,
                r"""The two outer cubes cancel against $-x^3-y^3$. The remaining $3x^2y+3xy^2$ factors as $3xy(x+y)$. This is the standard leftover identity.""",
            ),
            (
                "The leftover is claimed to be $6xy(x+y)$, doubling the correct coefficient.",
                False,
                r"""The binomial coefficients in $(x+y)^3$ are $1,3,3,1$, not $1,6,6,1$ (those belong to the fourth power). Doubling $3$ to $6$ overshoots: at $x=y=1$ the leftover is $6$, while $6\cdot 1\cdot 1\cdot 2=12$.""",
            ),
            (
                "Factoring $3x^2y+3xy^2$ as $3xy(x+y)$ is valid for all real $x$ and $y$.",
                True,
                r"""$3xy(x+y)=3x^2y+3xy^2$. This is the distributive law, and it holds with no restriction on $x$ or $y$.""",
            ),
        ],
        overview="The identity $(x+y)^3-x^3-y^3=3xy(x+y)$ follows from the cube expansion. Missing the $3$, missing $(x+y)$, or doubling $3$ to $6$ all fail.",
    ),
    task(
        title="Half a sum of squared gaps",
        subsection="2.1",
        difficulty="5/5",
        context="The quadratic form $a^2+b^2+c^2-ab-bc-ca$ is rewritten using squared differences. Five claims mix the factor $\\dfrac{1}{2}$ with sign errors.",
        items=[
            (
                "Half the cyclic sum $(a-b)^2+(b-c)^2+(c-a)^2$ equals $a^2+b^2+c^2-ab-bc-ca$ for all real $a$, $b$, and $c$.",
                True,
                r"""The cyclic sum expands to $2a^2+2b^2+2c^2-2ab-2bc-2ca$. Halving yields
$$\frac12\bigl((a-b)^2+(b-c)^2+(c-a)^2\bigr)=a^2+b^2+c^2-ab-bc-ca.$$
This is an identity of quadratic forms.""",
            ),
            (
                "A candidate claims $a^2+b^2+c^2-ab-bc-ca=(a-b)^2+(b-c)^2+(c-a)^2$, omitting the factor $\\dfrac{1}{2}$.",
                False,
                r"""The right-hand side is twice as large, as the previous expansion shows. At $a=1$, $b=c=0$ the left-hand side is $1$ and the cyclic sum is $1^2+0+(-1)^2=2$. Omitting $\frac12$ doubles the form.""",
            ),
            (
                "Expanding $\\dfrac{1}{2}\\bigl((a-b)^2+(b-c)^2+(c-a)^2\\bigr)$ produces $a^2+b^2+c^2-ab-bc-ca$ after halving $2a^2+2b^2+2c^2-2ab-2bc-2ca$.",
                True,
                r"""Each square contributes two letters: $(a-b)^2=a^2-2ab+b^2$, and cyclically. Summing gives $2(a^2+b^2+c^2-ab-bc-ca)$. Division by $2$ is then exact, with no leftover remainder.""",
            ),
            (
                "The quadratic form $a^2+b^2+c^2-ab-bc-ca$ is nonnegative for all real $a$, $b$, and $c$, being half a sum of squares.",
                True,
                r"""Each $(a-b)^2$ is at least $0$, so the cyclic sum is at least $0$, and half of it is at least $0$. Equality holds precisely when $a=b=c$. The rewrite therefore exhibits nonnegativity without solving any equation.""",
            ),
            (
                "Substituting $c=0$ reduces the identity to $a^2+b^2-ab=\\dfrac{1}{2}\\bigl((a-b)^2+b^2+a^2\\bigr)$, which still holds.",
                True,
                r"""With $c=0$ the left-hand side is $a^2+b^2-ab$. The right-hand side is
$$\frac12\bigl((a-b)^2+b^2+a^2\bigr)=\frac12(a^2-2ab+b^2+b^2+a^2)=a^2+b^2-ab.$$
The specialisation of the identity remains an identity in $a$ and $b$.""",
            ),
        ],
        overview="The identity $a^2+b^2+c^2-ab-bc-ca=\\frac12\\bigl((a-b)^2+(b-c)^2+(c-a)^2\\bigr)$ exhibits the quadratic form as half a sum of squares. Omitting the $\\frac12$ doubles the expression.",
    ),
    task(
        title="Sum of cubes as a two-factor product",
        subsection="2.1",
        difficulty="3/5",
        context="Sum-of-cubes factorisations are recalled with both letters and mixed signs. Each of the five lines tests the middle sign of the quadratic factor.",
        items=[
            (
                "A marker accepts $(a+b)(a^2+ab+b^2)=a^3+b^3$ with the wrong middle sign in the quadratic.",
                False,
                r"""Distribute $(a+b)(a^2+ab+b^2)=a^3+a^2b+ab^2+a^2b+ab^2+b^3=a^3+2a^2b+2ab^2+b^3$, which is $a^3+b^3+2ab(a+b)$, not $a^3+b^3$. The middle sign in the quadratic must be minus.""",
            ),
            (
                "Distributing $(a+b)(a^2-ab+b^2)$ recovers $a^3+b^3$ after the $\\pm a^2b$ and $\\pm ab^2$ terms cancel.",
                True,
                r"""$a(a^2-ab+b^2)+b(a^2-ab+b^2)=a^3-a^2b+ab^2+a^2b-ab^2+b^3=a^3+b^3$. The four mixed terms cancel in pairs.""",
            ),
            (
                "The companion factorisation $a^3-b^3=(a-b)(a^2+ab+b^2)$ uses the opposite middle sign.",
                True,
                r"""Difference of cubes takes the plus in the quadratic, because
$$(a-b)(a^2+ab+b^2)=a^3+a^2b+ab^2-a^2b-ab^2-b^3=a^3-b^3.$$
Sum of cubes takes the minus; the two identities are companions.""",
            ),
            (
                "Someone treats $a^3+b^3$ as $(a+b)^3$, inflating the expansion by $3ab(a+b)$.",
                False,
                r"""$(a+b)^3=a^3+3a^2b+3ab^2+b^3=a^3+b^3+3ab(a+b)$. The extra $3ab(a+b)$ is the leftover identity of the previous task, and it is not identically zero.""",
            ),
            (
                "A student writes $a^3+b^3=(a+b)(a-b)^2$.",
                False,
                r"""$(a+b)(a-b)^2=(a+b)(a^2-2ab+b^2)=a^3-2a^2b+ab^2+a^2b-2ab^2+b^3=a^3-a^2b-ab^2+b^3$. That is $a^3+b^3-ab(a+b)$, not $a^3+b^3$.""",
            ),
        ],
        overview="Sum of cubes is $(a+b)(a^2-ab+b^2)$; difference of cubes is $(a-b)(a^2+ab+b^2)$. The middle sign of the quadratic is the usual trap, and $(a+b)^3$ is larger than $a^3+b^3$ by $3ab(a+b)$.",
    ),
    task(
        title="Numerical cubes with $8$ and $27$",
        subsection="2.1",
        difficulty="4/5",
        context="The numerical cubes $x^3+8$ and $8x^3-27$ are factored on a drill sheet. Signs of the middle terms in the quadratic factors are the points of disagreement.",
        items=[
            (
                "Sum of cubes gives $x^3+8=(x+2)(x^2-2x+4)$ identically.",
                True,
                r"""Write $8=2^3$. Then $x^3+2^3=(x+2)(x^2-x\cdot 2+2^2)=(x+2)(x^2-2x+4)$. Distribute to check:
$$x\cdot x^2+x\cdot(-2x)+x\cdot 4+2x^2+2\cdot(-2x)+8=x^3-2x^2+4x+2x^2-4x+8=x^3+8.$$""",
            ),
            (
                "A student writes $x^3+8=(x+2)(x^2+2x+4)$, copying the plus signs from $(x+2)^2$.",
                False,
                r"""$(x+2)(x^2+2x+4)=x^3+2x^2+4x+2x^2+4x+8=x^3+4x^2+8x+8$, which still has leftover $x^2$ and $x$ terms. The middle sign in the quadratic factor of $x^3+8$ must be minus, giving $x^2-2x+4$ rather than the plus signs copied from $(x+2)^2$.""",
            ),
            (
                "Difference of cubes gives $8x^3-27=(2x-3)(4x^2+6x+9)$ for every real $x$.",
                True,
                r"""Set $A=2x$ and $B=3$. Then $A^3-B^3=(A-B)(A^2+AB+B^2)$, so
$$(2x)^3-3^3=(2x-3)\bigl((2x)^2+(2x)\cdot 3+9\bigr)=(2x-3)(4x^2+6x+9).$$""",
            ),
            (
                "The quadratic factor of $8x^3-27$ is listed as $4x^2-6x+9$, flipping the middle sign.",
                False,
                r"""Difference of cubes uses $A^2+AB+B^2$, whose middle term $AB=(2x)\cdot 3=6x$ is positive. The minus sign belongs to the linear factor $A-B=2x-3$, not to the middle of the quadratic. Distributing the wrong quadratic gives
$$(2x-3)(4x^2-6x+9)=8x^3-12x^2+18x-12x^2+18x-27=8x^3-24x^2+36x-27,$$
which is not $8x^3-27$.""",
            ),
            (
                "Checking the pattern $A^3-B^3=(A-B)(A^2+AB+B^2)$ with $A=2x$ and $B=3$ reproduces $4x^2+6x+9$.",
                True,
                r"""$A^2=4x^2$, $AB=6x$, and $B^2=9$. Adding them is exactly the quadratic factor $4x^2+6x+9$ already used above.""",
            ),
        ],
        overview="The identities $x^3+8=(x+2)(x^2-2x+4)$ and $8x^3-27=(2x-3)(4x^2+6x+9)$ are sum and difference of cubes. Copying plus signs from $(x+2)^2$ or flipping $6x$ to $-6x$ breaks them.",
    ),
    task(
        title="Complete real factorisation of $x^4-1$",
        subsection="2.1",
        difficulty="3/5",
        context="The difference $x^4-1$ is factored over the reals in several proposed complete factorisations. Irreducibility of $x^2+1$ is part of the test.",
        items=[
            (
                "Complete factorisation over the reals writes $x^4-1=(x-1)(x+1)(x^2+1)$.",
                True,
                r"""Two difference-of-squares steps:
$$x^4-1=(x^2-1)(x^2+1)=(x-1)(x+1)(x^2+1).$$
The quadratic $x^2+1$ has discriminant $-4<0$, so it contributes no further real linear factor. Expanding the right-hand side recovers $x^4-1$.""",
            ),
            (
                "Two difference-of-squares steps give $x^4-1=(x^2-1)(x^2+1)=(x-1)(x+1)(x^2+1)$.",
                True,
                r"""First view $x^4-1$ as $(x^2)^2-1^2$. Then split $x^2-1$ as $(x-1)(x+1)$. This is the same identity as the previous line, written with the intermediate factor $x^2-1$ visible.""",
            ),
            (
                "A candidate claims $x^2+1$ splits further into real linear factors.",
                False,
                r"""A real linear factor of $x^2+1$ would be $x-r$ with $r^2+1=0$, hence $r^2=-1$, which is impossible for real $r$. Equivalently $x^2+1=(x)^2+1^2\ge 1>0$ for all real $x$.""",
            ),
            (
                "Substituting $x=0$ into both sides of $x^4-1=(x-1)(x+1)(x^2+1)$ yields $-1$.",
                True,
                r"""The left-hand side is $-1$. The right-hand side is $(-1)(1)(1)=-1$. The check is consistent with the identity.""",
            ),
            (
                "Someone treats $x^4-1$ as $(x-1)^4$.",
                False,
                r"""$(x-1)^4=x^4-4x^3+6x^2-4x+1$, which contains odd powers. At $x=0$ one has $-1$ versus $1$. A fourth power of a difference is not a difference of fourth powers.""",
            ),
        ],
        overview="Over the reals, $x^4-1=(x-1)(x+1)(x^2+1)$ after two difference-of-squares steps. The factor $x^2+1$ is irreducible over $\\mathbb{R}$, and $(x-1)^4$ is a different polynomial.",
    ),
    task(
        title="Hunting selected terms in $(x+y+z)^3$",
        subsection="2.1",
        difficulty="5/5",
        context="The cube $(x+y+z)^3$ is expanded just far enough to hunt selected coefficients. Five claims pick out $x^2y$, $xyz$, or a shortened formula.",
        items=[
            (
                "A script lists the coefficient of $xyz$ in $(x+y+z)^3$ as $3$.",
                False,
                r"""The fully expanded cube is
$$x^3+y^3+z^3+3x^2y+3x^2z+3y^2x+3y^2z+3z^2x+3z^2y+6xyz.$$
The monomial $xyz$ arises in $3!=6$ orders, so its coefficient is $6$, not $3$. The $3$ is the coefficient of terms such as $x^2y$.""",
            ),
            (
                "Hunting $x^2y$ in $(x+y+z)^3$ produces the coefficient $3$.",
                True,
                r"""The term $x^2y$ comes from choosing $x$ twice and $y$ once in the product of three factors $(x+y+z)$. There are three positions for the single $y$, hence the coefficient $3$. The same count gives coefficient $3$ for every $x^2z$, $y^2x$, and so on.""",
            ),
            (
                "The identity $(x+y+z)^3=x^3+y^3+z^3+3(x+y+z)(xy+yz+zx)-3xyz$ holds for all reals.",
                True,
                r"""This is the compact form of the three-letter cube. Expanding $3(x+y+z)(xy+yz+zx)$ produces every $x^2y$-type term together with $9xyz$; subtracting $3xyz$ then leaves the required $6xyz$, matching the full expansion.""",
            ),
            (
                "Without expanding fully, the term $6xyz$ can be read as $3!$ times $xyz$ from three distinct letters.",
                True,
                r"""In the product of three factors, the monomial $xyz$ occurs once for each permutation of $\{x,y,z\}$. There are $3!=6$ permutations, and each contributes coefficient $1$, totalling $6xyz$.""",
            ),
            (
                "A marker accepts $(x+y+z)^3=x^3+y^3+z^3+3xyz$, omitting every $x^2y$-type term.",
                False,
                r"""That formula would drop $3x^2y$ and its five cyclic analogues, as well as replacing $6xyz$ by $3xyz$. At $x=1$, $y=1$, $z=0$ the left-hand side is $8$, while $1+1+0+0=2$. The omitted $x^2y$ terms are essential.""",
            ),
        ],
        overview="In $(x+y+z)^3$ the coefficient of $x^2y$ is $3$ and the coefficient of $xyz$ is $6$. The compact form $x^3+y^3+z^3+3(x+y+z)(xy+yz+zx)-3xyz$ encodes those counts; $x^3+y^3+z^3+3xyz$ does not.",
    ),
    task(
        title="Grouping $y+z$ inside a difference of squares",
        subsection="2.1",
        difficulty="4/5",
        context="A product $(x-y-z)(x+y+z)$ is compared with a difference of squares whose second factor is the grouped sum $y+z$. Five expansion claims follow.",
        items=[
            (
                "A difference of squares with grouped second factor gives $(x-y-z)(x+y+z)=x^2-(y+z)^2$.",
                True,
                r"""Write $x-y-z=x-(y+z)$ and $x+y+z=x+(y+z)$. The product is then the difference of squares
$$x^2-(y+z)^2.$$
This holds for all real $x$, $y$, and $z$.""",
            ),
            (
                "Expanding the right-hand side, a student writes $x^2-(y+z)^2=x^2-y^2-z^2$, dropping $2yz$.",
                False,
                r"""$(y+z)^2=y^2+2yz+z^2$, so
$$x^2-(y+z)^2=x^2-y^2-2yz-z^2.$$
Dropping $2yz$ is once more the error $(u+v)^2=u^2+v^2$ inside the second square.""",
            ),
            (
                "Someone treats $(x-y-z)(x+y+z)$ as $x^2-y^2-z^2+2yz$, flipping the sign of the mixed term.",
                False,
                r"""The mixed term comes from $-(y+z)^2$, which contributes $-2yz$, not $+2yz$. The plus sign would belong to $x^2-(y-z)^2=x^2-y^2+2yz-z^2$, a different product.""",
            ),
            (
                "Distributing $(x-(y+z))(x+(y+z))$ is the difference-of-squares pattern $x^2-(y+z)^2$.",
                True,
                r"""This is the same grouping as the first claim, written with explicit parentheses. The pattern $(u-v)(u+v)=u^2-v^2$ is applied with $u=x$ and $v=y+z$.""",
            ),
            (
                "Fully expanded, $(x-y-z)(x+y+z)=x^2-y^2-2yz-z^2$ for all real $x$, $y$, and $z$.",
                True,
                r"""Either distribute letter by letter:
$$x(x+y+z)-y(x+y+z)-z(x+y+z)=x^2+xy+xz-xy-y^2-yz-xz-yz-z^2=x^2-y^2-2yz-z^2,$$
or expand $x^2-(y+z)^2$. Both routes agree.""",
            ),
        ],
        overview="The identity $(x-y-z)(x+y+z)=x^2-(y+z)^2=x^2-y^2-2yz-z^2$ is a grouped difference of squares. Dropping $2yz$ or flipping its sign breaks the expansion.",
    ),
    task(
        title="Recognising $(2x+3)^2$ and $(x+2)^3$",
        subsection="2.1",
        difficulty="4/5",
        context="Two binomial powers that look similar when expanded, $(2x+3)^2$ and $(x+2)^3$, are to be recognised from their polynomials. A false mixed factorisation is included as a trap.",
        items=[
            (
                "Matching the trinomial $4x^2+12x+9$ with $(2x+3)^2$ is an identity on the real line.",
                True,
                r"""$(2x+3)^2=4x^2+2\cdot 2x\cdot 3+9=4x^2+12x+9$. Every coefficient matches, so the two expressions agree for every real $x$.""",
            ),
            (
                "The cube $x^3+6x^2+12x+8$ equals $(x+2)^3$ for every real $x$.",
                True,
                r"""$(x+2)^3=x^3+3\cdot x^2\cdot 2+3\cdot x\cdot 4+8=x^3+6x^2+12x+8$. The coefficients $1,6,12,8$ are exactly the binomial row $1,3,3,1$ scaled by powers of $2$.""",
            ),
            (
                "A candidate claims $x^3+6x^2+12x+8=(x+2)^2(x+4)$, mixing a square with a shifted linear factor.",
                False,
                r"""$(x+2)^2(x+4)=(x^2+4x+4)(x+4)=x^3+4x^2+4x^2+16x+4x+16=x^3+8x^2+20x+16$.
That is not $x^3+6x^2+12x+8$. The extra linear factor would have to be another $x+2$, not $x+4$.""",
            ),
            (
                "Doubling the product of $2x$ and $3$ accounts for the coefficient $12$ in $4x^2+12x+9$.",
                True,
                r"""In $(2x+3)^2$ the cross term is $2\cdot(2x)\cdot 3=12x$. The coefficient of $x$ is therefore $12$, matching the given trinomial.""",
            ),
            (
                "Someone treats $4x^2+12x+9$ as $(4x+3)^2=16x^2+24x+9$.",
                False,
                r"""$(4x+3)^2=16x^2+24x+9$. The leading term would be $16x^2$, not $4x^2$. Matching a square $(px+q)^2$ to $4x^2+12x+9$ forces $p^2=4$ and $2pq=12$, so $p=2$ and $q=3$, hence $(2x+3)^2$ rather than $(4x+3)^2$."""
            ),
        ],
        overview="The identities $4x^2+12x+9=(2x+3)^2$ and $x^3+6x^2+12x+8=(x+2)^3$ are perfect powers of linear binomials. The mix $(x+2)^2(x+4)$ expands to $x^3+8x^2+20x+16$, and $(4x+3)^2$ has the wrong leading term.",
    ),
]
