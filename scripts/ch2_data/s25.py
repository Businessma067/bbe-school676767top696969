from __future__ import annotations

from common import task

TASKS = [
    task(
        title="Print-shop galleys of mixed identities",
        subsection="2.5",
        difficulty="5/5",
        context="A Linz print shop is typesetting an identity booklet for a BBE mock. Five unrelated galley proofs sit on five separate pages: an expansion, a factorisation, a cancelled rational, a nested radical, and an absolute-value line. Judge each page on its own; no quantity is shared across pages.",
        items=[
            (
                "A compositor expands $(x+2y-z)^2$ as $x^2+4y^2+z^2+4xy-2xz+4yz$ and treats the line as an identity.",
                False,
                r"""Distribute every pair:
$$(x+2y-z)^2=x^2+(2y)^2+(-z)^2+2\cdot x\cdot 2y+2\cdot x\cdot(-z)+2\cdot 2y\cdot(-z).$$
That is
$$x^2+4y^2+z^2+4xy-2xz-4yz.$$
The printed middle-to-last cross term carries $+4yz$ instead of $-4yz$, so the two sides differ by $8yz$.""",
            ),
            (
                "Factoring $x^4+4y^4$ as $(x^2+2xy+2y^2)(x^2-2xy+2y^2)$ is offered as an identity in $x$ and $y$.",
                True,
                r"""Complete the square by inserting and subtracting $4x^2y^2$:
$$x^4+4y^4=x^4+4x^2y^2+4y^4-4x^2y^2=(x^2+2y^2)^2-(2xy)^2.$$
Difference of squares then gives
$$(x^2+2y^2-2xy)(x^2+2y^2+2xy)=(x^2-2xy+2y^2)(x^2+2xy+2y^2).$$
The two factors match the printed order up to commuting the product.""",
            ),
            (
                r"On the cancelled page, $\dfrac{x^3-y^3}{x^2-y^2}$ is rewritten as $\dfrac{x^2+xy+y^2}{x+y}$ whenever $x\neq\pm y$.",
                True,
                r"""Factor numerator and denominator:
$$x^3-y^3=(x-y)(x^2+xy+y^2),\qquad x^2-y^2=(x-y)(x+y).$$
For $x\neq y$ the common factor $x-y$ cancels, leaving
$$\frac{x^2+xy+y^2}{x+y}.$$
The extra restriction $x\neq -y$ is exactly the remaining denominator, so the rewritten form is valid on the stated domain.""",
            ),
            (
                r"Denesting $\sqrt{12+2\sqrt{35}}$ is claimed to produce $\sqrt{7}-\sqrt{5}$.",
                False,
                r"""If $\sqrt{12+2\sqrt{35}}=\sqrt{7}+\sqrt{5}$, squaring the right-hand side gives
$$(\sqrt{7}+\sqrt{5})^2=7+5+2\sqrt{35}=12+2\sqrt{35}.$$
Both square roots are positive, so the principal square root equals $\sqrt{7}+\sqrt{5}$, not the difference. The difference squares to $12-2\sqrt{35}$ instead.""",
            ),
            (
                "Absolute values of opposite linear forms are declared equal: $|2x-3|=|3-2x|$ for every real $x$.",
                True,
                r"""For any real $t$ one has $|-t|=|t|$. Set $t=2x-3$. Then
$$|3-2x|=|-(2x-3)|=|2x-3|.$$
The two sides are identical, with no restriction on $x$.""",
            ),
        ],
        overview="Five independent print-shop identities: a three-term square, Sophie Germain’s factorisation of $x^4+4y^4$, a cancelled difference of cubes over a difference of squares, a nested radical, and $|t|=|-t|$.",
    ),
    task(
        title="Two tutors arguing at the board",
        subsection="2.5",
        difficulty="5/5",
        context="Two tutors mark a mixed mock independently and argue over five unrelated claims written on one board: a cube factorisation, a simplified power product, a cube expansion, an absolute-value slogan, and a pair of unit fractions. Each claim has its own letters and hypotheses.",
        items=[
            (
                "Factoring $a^3-b^3$ as $(a-b)(a^2+ab+b^2)$ is accepted as an identity for all real $a$ and $b$.",
                True,
                r"""Distribute the proposed factors:
$$(a-b)(a^2+ab+b^2)=a^3+a^2b+ab^2-a^2b-ab^2-b^3=a^3-b^3.$$
The cross terms cancel, so the factorisation holds with no extra condition.""",
            ),
            (
                r"Rewriting the product $8^{2/3}\cdot 4^{-1/2}$ as the integer $2$ is treated as valid.",
                True,
                r"""Write both bases as powers of $2$:
$$8^{2/3}=(2^3)^{2/3}=2^2=4,\qquad 4^{-1/2}=(2^2)^{-1/2}=2^{-1}=\frac{1}{2}.$$
The product is $4\cdot\dfrac{1}{2}=2$.""",
            ),
            (
                "One tutor expands $(p+q)^3$ as $p^3+q^3+3pq$ and calls the formula an identity.",
                False,
                r"""The cube-of-a-sum identity is
$$(p+q)^3=p^3+3p^2q+3pq^2+q^3=p^3+q^3+3pq(p+q).$$
The written version drops the factor $(p+q)$ on the cross term. The two sides differ by $3pq(p+q-1)$, which is not identically zero.""",
            ),
            (
                "Treating $|x+y|$ as interchangeable with $|x|+|y|$ for every real pair is proposed as an identity.",
                False,
                r"""The triangle inequality says $|x+y|\le |x|+|y|$, with equality only when $x$ and $y$ have the same sign (or one vanishes). For $x=1$ and $y=-1$,
$$|x+y|=0,\qquad |x|+|y|=2.$$
The two expressions are not identically equal.""",
            ),
            (
                r"Clearing the difference $\dfrac{1}{x-2}-\dfrac{1}{x+2}$ produces $\dfrac{4}{x^2-4}$ whenever $x\neq\pm 2$.",
                True,
                r"""A common denominator is $(x-2)(x+2)=x^2-4$:
$$\frac{1}{x-2}-\frac{1}{x+2}=\frac{(x+2)-(x-2)}{x^2-4}=\frac{4}{x^2-4}.$$
The identity holds on the stated domain.""",
            ),
        ],
        overview="Five independent tutor-board claims: difference of cubes, a rewritten power product, the missing factor in $(p+q)^3$, the triangle inequality versus equality, and a difference of unit fractions.",
    ),
    task(
        title="Five pages of an identity booklet",
        subsection="2.5",
        difficulty="5/5",
        context="An examiner’s identity booklet prints five standalone pages for a mixed review: swapped rational terms, a square-root-of-a-square rule, a cubed binomial, a sum-of-cubes factorisation, and a real cube root of a quotient. Nothing computed on one page is reused on another.",
        items=[
            (
                r"Adding the swapped fractions $\dfrac{x}{x-y}+\dfrac{y}{y-x}$ is said to collapse to $1$ for every $x\neq y$.",
                True,
                r"""Rewrite the second denominator:
$$\frac{y}{y-x}=\frac{y}{-(x-y)}=-\frac{y}{x-y}.$$
Hence
$$\frac{x}{x-y}+\frac{y}{y-x}=\frac{x-y}{x-y}=1$$
whenever $x\neq y$.""",
            ),
            (
                r"The square-root identity $\sqrt{t^2}=|t|$ is asserted for every real $t$.",
                True,
                r"""The principal square root is nonnegative. Since $t^2=|t|^2$ and $|t|\ge 0$,
$$\sqrt{t^2}=\sqrt{|t|^2}=|t|.$$
Replacing the right-hand side by $t$ would fail for $t<0$.""",
            ),
            (
                "Cubing the binomial $2a-3b$ is written as $8a^3-36a^2b+54ab^2-27b^3$.",
                True,
                r"""Use $(u-v)^3=u^3-3u^2v+3uv^2-v^3$ with $u=2a$ and $v=3b$:
$$(2a)^3-3(2a)^2(3b)+3(2a)(3b)^2-(3b)^3=8a^3-36a^2b+54ab^2-27b^3.$$
Every coefficient matches.""",
            ),
            (
                "Sum of cubes is factored as $p^3+q^3=(p+q)(p^2+pq+q^2)$ on the next page.",
                False,
                r"""The correct factorisation is
$$p^3+q^3=(p+q)(p^2-pq+q^2).$$
Distributing the printed quadratic factor produces an extra $2p^2q+2pq^2$ instead of cancelling the mixed terms. The middle sign on the quadratic factor must be minus.""",
            ),
            (
                r"The real cube root $\sqrt[3]{\dfrac{a^3}{b^6}}$ is simplified to $\dfrac{a}{b^2}$ for all real $a$ and all $b\neq 0$.",
                True,
                r"""The real cube root splits over a quotient:
$$\sqrt[3]{\frac{a^3}{b^6}}=\frac{\sqrt[3]{a^3}}{\sqrt[3]{b^6}}.$$
In the reals, $\sqrt[3]{a^3}=a$. Also $b^6=(b^2)^3$ with $b^2\ge 0$, so $\sqrt[3]{b^6}=b^2$. The quotient is $a/b^2$.""",
            ),
        ],
        overview="Five independent booklet pages: a pair of swapped fractions summing to $1$, $\\sqrt{t^2}=|t|$, a cubed binomial, the middle sign in $p^3+q^3$, and a real cube root of a quotient.",
    ),
    task(
        title="Symmetric polynomials in three letters",
        subsection="2.5",
        difficulty="5/5",
        context="A review sheet on symmetric polynomials never solves a quadratic. It records $s_1=a+b+c$ and $s_2=ab+bc+ca$ in three letters, and separately a pair with $p+q=7$ and $pq=11$. Five claims, five skills; the pair $(p,q)$ is used only where it is named.",
        items=[
            (
                "Squaring $a+b+c$ produces the identity $a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)$.",
                True,
                r"""Expand the square:
$$(a+b+c)^2=a^2+b^2+c^2+2ab+2bc+2ca.$$
Rearrangement immediately gives
$$a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca).$$""",
            ),
            (
                "The three-cube combination $a^3+b^3+c^3-3abc$ is factored as $(a+b+c)(a^2+b^2+c^2+ab+bc+ca)$.",
                False,
                r"""The standard identity is
$$a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca).$$
The printed quadratic factor has the opposite signs on $ab$, $bc$, and $ca$. Expanding the printed product does not recover $-3abc$ after the cubic terms.""",
            ),
            (
                r"Given $p+q=7$ and $pq=11$, the sum of reciprocals is evaluated as $\dfrac{1}{p}+\dfrac{1}{q}=\dfrac{7}{11}$.",
                True,
                r"""Over a common denominator,
$$\frac{1}{p}+\frac{1}{q}=\frac{q+p}{pq}=\frac{p+q}{pq}=\frac{7}{11}.$$
The reciprocal of $pq$ would be $11/7$, which is a different expression. No quadratic needs to be solved.""",
            ),
            (
                "Because $p+q=7$, the power $4^{p+q}$ is rewritten as $2^{7}$.",
                False,
                r"""First use the given sum in the exponent:
$$4^{p+q}=4^7.$$
Then rewrite the base, not the exponent, as a power of $2$:
$$4^7=(2^2)^7=2^{14}.$$
The printed $2^7$ is only $128$, whereas $4^7=16384=2^{14}$.""",
            ),
            (
                "The distance $|p-q|$ is read off as $5$ from $(p-q)^2=5$.",
                False,
                r"""From the elementary identity
$$(p-q)^2=(p+q)^2-4pq=49-44=5,$$
one obtains $|p-q|=\sqrt{5}$, not $5$. Taking the absolute value after squaring requires a square root.""",
            ),
        ],
        overview="Independent symmetric-polynomial claims: $a^2+b^2+c^2$ from $s_1$ and $s_2$, the sign pattern in $a^3+b^3+c^3-3abc$, $1/p+1/q=(p+q)/pq$, rewriting $4^7$ as $2^{14}$, and $|p-q|=\\sqrt{(p-q)^2}$.",
    ),
    task(
        title="Nested-radicals contest round",
        subsection="2.5",
        difficulty="5/5",
        context="A nested-radicals contest posts five unrelated prompts on a corridor board: one denesting, one binomial square, one difference-of-squares factorisation, one rationalised two-term quotient, and one square root of a square. Contestants must not recycle a number from one prompt into another.",
        items=[
            (
                r"Denesting $\sqrt{10+2\sqrt{21}}$ is claimed to give the sum $\sqrt{7}+\sqrt{3}$.",
                True,
                r"""Square the proposed denesting:
$$(\sqrt{7}+\sqrt{3})^2=7+3+2\sqrt{21}=10+2\sqrt{21}.$$
Both $\sqrt{7}$ and $\sqrt{3}$ are positive, so the principal square root is exactly $\sqrt{7}+\sqrt{3}$.""",
            ),
            (
                r"Squaring $\sqrt{a}+\sqrt{b}$ is written as $a+b$ for all $a,b\ge 0$.",
                False,
                r"""The expansion is
$$(\sqrt{a}+\sqrt{b})^2=a+2\sqrt{ab}+b.$$
Dropping the cross term $2\sqrt{ab}$ is legitimate only when $ab=0$, not identically.""",
            ),
            (
                r"Splitting $x^2-5$ as $(x-\sqrt{5})(x+\sqrt{5})$ is presented as an identity over the reals.",
                True,
                r"""Difference of squares with $u=x$ and $v=\sqrt{5}$ gives
$$x^2-5=x^2-(\sqrt{5})^2=(x-\sqrt{5})(x+\sqrt{5}).$$
Distributing the right-hand side recovers $x^2-5$.""",
            ),
            (
                r"Rationalising $\dfrac{\sqrt{8}-\sqrt{2}}{\sqrt{8}+\sqrt{2}}$ collapses the quotient to $\dfrac{1}{3}$.",
                True,
                r"""Write $\sqrt{8}=2\sqrt{2}$:
$$\frac{2\sqrt{2}-\sqrt{2}}{2\sqrt{2}+\sqrt{2}}=\frac{\sqrt{2}}{3\sqrt{2}}=\frac{1}{3}.$$
Alternatively multiply numerator and denominator by $\sqrt{8}-\sqrt{2}$ and simplify; both routes give $1/3$.""",
            ),
            (
                r"Extracting $\sqrt{(2-5)^2}$ is claimed to equal $2-5$, hence $-3$.",
                False,
                r"""For every real $t$, $\sqrt{t^2}=|t|$. Here $t=2-5=-3$, so
$$\sqrt{(2-5)^2}=|-3|=3.$$
The principal square root cannot be negative.""",
            ),
        ],
        overview="Five contest prompts: a denesting $\\sqrt{10+2\\sqrt{21}}$, the missing $2\\sqrt{ab}$ in a binomial square, $x^2-5$ as a difference of squares, a two-term radical quotient, and $\\sqrt{t^2}=|t|$.",
    ),
    task(
        title="Saturday mixed-review packet",
        subsection="2.5",
        difficulty="4/5",
        context="A Saturday mixed-review packet lists five short, independent lines for last-week skills: an absolute-value square, a cancelled quadratic over a linear factor, a product recovering a difference of cubes, a mistaken difference of squares, and a square root of a monomial. Each line has its own letters.",
        items=[
            (
                "Replacing $|x|^2$ by $x^2$ is licensed as an identity on the whole real line.",
                True,
                r"""By definition $|x|$ is $x$ or $-x$. In either case
$$|x|^2=x^2,$$
since $(-x)^2=x^2$. Equivalently $|x|^2=x\cdot x$ after dropping the sign.""",
            ),
            (
                r"Cancelling $\dfrac{x^2-5x+6}{x-2}$ down to $x-3$ is claimed for every $x\neq 2$.",
                True,
                r"""Factor the numerator:
$$x^2-5x+6=(x-2)(x-3).$$
For $x\neq 2$,
$$\frac{(x-2)(x-3)}{x-2}=x-3.$$""",
            ),
            (
                "Multiplying $(x-1)(x^2+x+1)$ is said to recover $x^3-1$ identically.",
                True,
                r"""This is the difference-of-cubes expansion in reverse:
$$(x-1)(x^2+x+1)=x^3+x^2+x-x^2-x-1=x^3-1.$$""",
            ),
            (
                "Writing $x^2-9$ as $(x-3)^2$ is treated as a factorisation identity.",
                False,
                r"""Expanding the square gives
$$(x-3)^2=x^2-6x+9,$$
not $x^2-9$. The difference of squares is
$$x^2-9=(x-3)(x+3).$$""",
            ),
            (
                r"Simplifying $\sqrt{a^2b^4}$ to $ab^2$ is asserted for all real $a$ and $b$.",
                False,
                r"""For real $a$ and $b$,
$$\sqrt{a^2b^4}=\sqrt{a^2}\cdot\sqrt{b^4}=|a|\cdot b^2,$$
since $b^4=(b^2)^2$ and $b^2\ge 0$. The factor $a$ in place of $|a|$ fails whenever $a<0$ and $b\neq 0$.""",
            ),
        ],
        overview="Five independent review lines: $|x|^2=x^2$, cancelling $(x-2)(x-3)/(x-2)$, the reverse of $x^3-1$, $x^2-9$ versus $(x-3)^2$, and $\\sqrt{a^2b^4}=|a|b^2$.",
    ),
    task(
        title="Choir-rehearsal algebra board",
        subsection="2.5",
        difficulty="5/5",
        context="During a choir rehearsal the accompanist fills a side board with five mixed algebra reminders that are not linked: a paired-sum product, a sum-of-cubes factorisation, a sum of reciprocal-looking terms, a product of powers, and a nested absolute value. Each reminder uses different letters.",
        items=[
            (
                "Multiplying $(a+b+c)(a+b-c)$ is claimed to equal $(a+b)^2-c^2$.",
                True,
                r"""Set $u=a+b$. Difference of squares gives
$$(u+c)(u-c)=u^2-c^2=(a+b)^2-c^2.$$
Expanding the original product produces the same $a^2+2ab+b^2-c^2$.""",
            ),
            (
                "Factoring $a^3+8$ as $(a+2)(a^2+4a+4)$ is written up as an identity.",
                False,
                r"""Sum of cubes uses
$$a^3+2^3=(a+2)(a^2-2a+4).$$
The printed quadratic $a^2+4a+4=(a+2)^2$ would make the product $(a+2)^3=a^3+6a^2+12a+8$, not $a^3+8$.""",
            ),
            (
                r"Adding $\dfrac{a}{b}+\dfrac{b}{a}$ is reduced to $\dfrac{a+b}{ab}$ as if it were an identity.",
                False,
                r"""The genuine common-denominator form is
$$\frac{a}{b}+\frac{b}{a}=\frac{a^2+b^2}{ab}.$$
The printed numerator $a+b$ belongs to $\dfrac{1}{a}+\dfrac{1}{b}$, a different sum.""",
            ),
            (
                r"Combining $a^{-3}\cdot a^{5/2}$ into $a^{-1/2}$ is accepted for $a>0$.",
                True,
                r"""Add the exponents:
$$-3+\frac{5}{2}=\frac{-6+5}{2}=-\frac{1}{2}.$$
Hence $a^{-3}a^{5/2}=a^{-1/2}$ on $a>0$.""",
            ),
            (
                r"Stripping the outer bars in $\bigl||x|-3\bigr|$ down to $|x|-3$ is proposed for every real $x$.",
                False,
                r"""By definition $\bigl||x|-3\bigr|=|x|-3$ only when $|x|-3\ge 0$, i.e. $|x|\ge 3$. For $x=0$,
$$\bigl||0|-3\bigr|=3,\qquad |0|-3=-3.$$
The identity fails inside the interval $|x|<3$.""",
            ),
        ],
        overview="Five independent choir-board lines: a difference of squares in $a+b$ and $c$, the quadratic factor of $a^3+8$, $\\frac{a}{b}+\\frac{b}{a}$ versus $\\frac{1}{a}+\\frac{1}{b}$, adding exponents, and a nested absolute value.",
    ),
    task(
        title="Chess-club bulletin identities",
        subsection="2.5",
        difficulty="5/5",
        context="The chess club pins five mixed algebra notes beside a pairing chart: a difference of fourth powers, a binomial fourth power, a sum of two reciprocals, a rational exponent, and a dropped absolute value. The notes do not share a calculation.",
        items=[
            (
                "Factoring $x^4-y^4$ completely over the reals as $(x-y)(x+y)(x^2+y^2)$ is posted as an identity.",
                True,
                r"""First difference of squares:
$$x^4-y^4=(x^2-y^2)(x^2+y^2)=(x-y)(x+y)(x^2+y^2).$$
The remaining quadratic $x^2+y^2$ has no further real linear factors.""",
            ),
            (
                "Expanding $(1+x)^4$ is recorded as $1+4x+6x^2+4x^3+x^4$.",
                True,
                r"""Either iterate $(1+x)^2=1+2x+x^2$ and square again, or read binomial coefficients $\binom{4}{k}$:
$$(1+x)^4=1+4x+6x^2+4x^3+x^4.$$
The displayed polynomial matches.""",
            ),
            (
                r"Clearing $\dfrac{1}{x}+\dfrac{1}{y}$ to $\dfrac{x+y}{xy}$ is claimed whenever $xy\neq 0$.",
                True,
                r"""A common denominator $xy$ gives
$$\frac{1}{x}+\frac{1}{y}=\frac{y+x}{xy}=\frac{x+y}{xy}.$$""",
            ),
            (
                "Reducing $16^{3/4}$ to the integer $8$ is treated as correct.",
                True,
                r"""Write $16=2^4$:
$$16^{3/4}=(2^4)^{3/4}=2^3=8.$$
Equivalently $\bigl(16^{1/4}\bigr)^3=2^3=8$.""",
            ),
            (
                "Dropping the bars in $|2x|$ to write $2x$ for every real $x$ is offered as an identity.",
                False,
                r"""$|2x|=2|x|$. This equals $2x$ precisely when $x\ge 0$. For $x=-1$,
$$|2x|=2,\qquad 2x=-2.$$
The identity does not hold on the whole line.""",
            ),
        ],
        overview="Five independent chess-club notes: $x^4-y^4$, the binomial expansion of $(1+x)^4$, a sum of reciprocals, $16^{3/4}=8$, and $|2x|=2|x|$.",
    ),
    task(
        title="Greenhouse bench notebook",
        subsection="2.5",
        difficulty="5/5",
        context="A greenhouse bench notebook records five mixed algebra checks used to label seed trays: a cancelled rational, a squared binomial, a difference of cubes, a negative rational exponent, and a sum of opposite absolute values. Tray labels do not share letters.",
        items=[
            (
                r"Cancelling $\dfrac{x^2-4}{x^2-x-2}$ down to $\dfrac{x+2}{x+1}$ is claimed for $x\neq 2$ and $x\neq -1$.",
                True,
                r"""Factor both polynomials:
$$x^2-4=(x-2)(x+2),\qquad x^2-x-2=(x-2)(x+1).$$
For $x\neq 2$,
$$\frac{(x-2)(x+2)}{(x-2)(x+1)}=\frac{x+2}{x+1},$$
and $x\neq -1$ keeps the remaining denominator alive.""",
            ),
            (
                "Squaring $3m-n$ is written as $9m^2-n^2$ and called an identity.",
                False,
                r"""The square is
$$(3m-n)^2=9m^2-6mn+n^2.$$
The printed form $9m^2-n^2$ is a difference of squares $(3m-n)(3m+n)$, not a square, and it also drops the cross term $-6mn$.""",
            ),
            (
                "Factoring $27x^3-8$ as $(3x-2)(9x^2+6x+4)$ is posted as an identity.",
                True,
                r"""Difference of cubes $u^3-v^3=(u-v)(u^2+uv+v^2)$ with $u=3x$ and $v=2$:
$$(3x)^3-2^3=(3x-2)\bigl((3x)^2+(3x)\cdot 2+2^2\bigr)=(3x-2)(9x^2+6x+4).$$""",
            ),
            (
                r"Rewriting $\bigl(\dfrac{8}{27}\bigr)^{-2/3}$ as $\dfrac{9}{4}$ is accepted.",
                True,
                r"""A negative exponent flips the fraction:
$$\biggl(\frac{8}{27}\biggr)^{-2/3}=\biggl(\frac{27}{8}\biggr)^{2/3}=\biggl(\frac{3^3}{2^3}\biggr)^{2/3}=\frac{3^2}{2^2}=\frac{9}{4}.$$""",
            ),
            (
                "Adding $|x-1|+|1-x|$ is said to vanish identically.",
                False,
                r"""Opposite linear forms have the same absolute value:
$$|1-x|=|x-1|.$$
The printed sum is therefore
$$|x-1|+|x-1|=2|x-1|.$$
This vanishes only at $x=1$. At $x=0$ the sum equals $2$, not $0$.""",
            ),
        ],
        overview="Five independent greenhouse checks: cancelling a quadratic rational, $(3m-n)^2$ versus $9m^2-n^2$, a difference of cubes, a negative rational exponent, and $|x-1|+|1-x|=2|x-1|$.",
    ),
    task(
        title="Library cataloguer's markup",
        subsection="2.5",
        difficulty="5/5",
        context="A library cataloguer marks five unrelated algebra queries in the margins of a donated textbook: a quotient of square roots, an absolute value of a product, a comparison of two squares, a difference-of-cubes factorisation, and a sum of opposite unit fractions. Each query is self-contained.",
        items=[
            (
                r"Reducing $\dfrac{\sqrt{18}}{\sqrt{8}}$ to $\dfrac{3}{2}$ is marked as correct.",
                True,
                r"""Either combine under one radical,
$$\frac{\sqrt{18}}{\sqrt{8}}=\sqrt{\frac{18}{8}}=\sqrt{\frac{9}{4}}=\frac{3}{2},$$
or write $\sqrt{18}=3\sqrt{2}$ and $\sqrt{8}=2\sqrt{2}$, which cancels to the same $3/2$.""",
            ),
            (
                r"The product rule $|ab^2|=|a|\,b^2$ is asserted for all real $a$ and $b$.",
                True,
                r"""Absolute value splits over products:
$$|ab^2|=|a|\,|b^2|.$$
For real $b$ one has $b^2\ge 0$, so $|b^2|=b^2$. Hence
$$|ab^2|=|a|b^2.$$""",
            ),
            (
                "Subtracting $x^2+y^2+z^2$ from $(x+y+z)^2$ is claimed to leave $2(xy+yz+zx)$.",
                True,
                r"""Expand the square:
$$(x+y+z)^2=x^2+y^2+z^2+2xy+2yz+2zx.$$
The difference is exactly $2(xy+yz+zx)$.""",
            ),
            (
                "Factoring $x^3-1$ as $(x-1)(x^2-x+1)$ is left in the margin as an identity.",
                False,
                r"""Difference of cubes requires
$$x^3-1=(x-1)(x^2+x+1).$$
The printed middle term $-x$ belongs to $x^3+1=(x+1)(x^2-x+1)$, a different identity.""",
            ),
            (
                r"Adding $\dfrac{1}{a-b}+\dfrac{1}{b-a}$ is said to equal $1$ whenever $a\neq b$.",
                False,
                r"""The two denominators are opposites:
$$\frac{1}{b-a}=\frac{1}{-(a-b)}=-\frac{1}{a-b}.$$
The sum is identically $0$ on $a\neq b$, not $1$.""",
            ),
        ],
        overview="Five independent catalogue queries: a quotient of square roots, $|ab^2|=|a|b^2$, the cross terms in $(x+y+z)^2$, the middle sign in $x^3-1$, and opposite unit fractions summing to zero.",
    ),
    task(
        title="Orchestra tuning-sheet algebra",
        subsection="2.5",
        difficulty="4/5",
        context="An orchestra’s tuning sheet has five mixed algebra doodles in the unused staves: a scaled absolute value, a perfect-square factorisation, a difference of two fractions, a squared binomial, and a product of mismatched rational exponents. The doodles are not a single calculation.",
        items=[
            (
                "Scaling $|-3x|$ down to $3|x|$ is written as an identity.",
                True,
                r"""Absolute value splits over a product:
$$|-3x|=|-3|\,|x|=3|x|.$$
The factor $-3$ contributes its absolute value $3$, not a minus sign in front of $3|x|$.""",
            ),
            (
                "Factoring $x^2-6x+9$ as $(x-3)^2$ is accepted as an identity.",
                True,
                r"""This is the square of a difference:
$$(x-3)^2=x^2-6x+9.$$
The discriminant is zero, so the repeated linear factor is $x-3$.""",
            ),
            (
                r"Clearing $\dfrac{2}{x}-\dfrac{3}{y}$ produces $\dfrac{2y-3x}{xy}$ whenever $xy\neq 0$.",
                True,
                r"""A common denominator $xy$ gives
$$\frac{2}{x}-\frac{3}{y}=\frac{2y-3x}{xy}.$$""",
            ),
            (
                "Expanding $(x+3)^2$ as $x^2+9$ is treated as an identity.",
                False,
                r"""The square expands with a cross term:
$$(x+3)^2=x^2+6x+9.$$
Replacing the square by $x^2+9$ discards $6x$, which vanishes only at $x=0$.""",
            ),
            (
                r"Multiplying $a^{m/n}\cdot a^{n/m}$ is said to return $a$ for all positive $a$ and all nonzero $m,n$.",
                False,
                r"""Exponents add:
$$a^{m/n}a^{n/m}=a^{m/n+n/m}=a^{(m^2+n^2)/(mn)}.$$
The combined exponent equals $1$ only in special cases (e.g. $m=n=\pm 1$), not identically. For $m=2$ and $n=1$ one obtains $a^{5/2}$, not $a$.""",
            ),
        ],
        overview="Five independent tuning-sheet doodles: $|-3x|=3|x|$, a perfect square, a difference of two fractions, the missing $6x$ in $(x+3)^2$, and adding mismatched rational exponents.",
    ),
    task(
        title="Museum archive labels",
        subsection="2.5",
        difficulty="5/5",
        context="Five archive labels in a mathematics exhibition case display unrelated identities: a cubed difference, a factored difference of fourth powers, a cancelled perfect square over a linear term, a real cube root, and a claim that a quadratic absolute value can vanish. Visitors are told to judge each label separately.",
        items=[
            (
                "Expanding $(a-b)^3$ is printed as $a^3-3a^2b+3ab^2-b^3$.",
                True,
                r"""The binomial formula with a minus in the second term is
$$(a-b)^3=a^3-3a^2b+3ab^2-b^3.$$
Equivalently $(a-b)^3=a^3-b^3-3ab(a-b)$.""",
            ),
            (
                "Factoring $a^4-16$ as $(a-2)(a+2)(a^2+4)$ is offered as a complete real factorisation.",
                True,
                r"""$$a^4-16=(a^2-4)(a^2+4)=(a-2)(a+2)(a^2+4).$$
The quadratic $a^2+4$ has negative discriminant, so it stays irreducible over the reals.""",
            ),
            (
                r"Cancelling $\dfrac{a^2-2ab+b^2}{a-b}$ down to $a-b$ is claimed for $a\neq b$.",
                True,
                r"""The numerator is $(a-b)^2$, so
$$\frac{(a-b)^2}{a-b}=a-b$$
whenever $a\neq b$.""",
            ),
            (
                r"Taking the real cube root $\sqrt[3]{-8}$ is said to equal $-2$.",
                True,
                r"""The real cube-root function is odd, and $2^3=8$, so
$$\sqrt[3]{-8}=-\sqrt[3]{8}=-2.$$
The principal complex cube root is a different convention and is not used here.""",
            ),
            (
                "Someone claims that $|x^2+1|$ can equal $0$ for a real $x$.",
                False,
                r"""For every real $x$ one has $x^2+1\ge 1>0$, hence
$$|x^2+1|=x^2+1\ge 1.$$
The absolute value never hits zero.""",
            ),
        ],
        overview="Five independent archive labels: $(a-b)^3$, $a^4-16$, cancelling $(a-b)^2/(a-b)$, the real cube root of $-8$, and the range of $|x^2+1|$.",
    ),
    task(
        title="Baking-lab identity cards",
        subsection="2.5",
        difficulty="5/5",
        context="A baking lab keeps identity cards on a fridge magnet: a cancelled difference of cubes, a four-factor product, a squared quadratic, a rational power of $32$, and a product of absolute values. Each card is a separate claim with its own letters.",
        items=[
            (
                r"Cancelling $\dfrac{x^3-8}{x-2}$ down to $x^2-4x+4$ is claimed for $x\neq 2$.",
                False,
                r"""Difference of cubes gives
$$\frac{x^3-8}{x-2}=x^2+2x+4\qquad(x\neq 2).$$
The printed quadratic $x^2-4x+4=(x-2)^2$ would be the square of the cancelled factor, not the quotient. Direct division also produces $+2x$, not $-4x$.""",
            ),
            (
                "Multiplying $(x+1)(x-1)(x^2+1)$ is said to recover $x^4-1$.",
                True,
                r"""First $(x+1)(x-1)=x^2-1$, then
$$(x^2-1)(x^2+1)=x^4-1.$$
This is a difference of squares applied twice.""",
            ),
            (
                "Factoring $x^4+4x^2+4$ as $(x^2+2)^2$ is posted as an identity.",
                True,
                r"""Set $u=x^2$. Then
$$u^2+4u+4=(u+2)^2=(x^2+2)^2.$$
Expanding the square recovers $x^4+4x^2+4$.""",
            ),
            (
                "Reducing $32^{2/5}$ to $4$ is treated as correct.",
                True,
                r"""$32=2^5$, so
$$32^{2/5}=(2^5)^{2/5}=2^2=4.$$""",
            ),
            (
                r"Replacing $|x-2|\,|x+2|$ by $x^2-4$ is offered as an identity.",
                False,
                r"""The product rule gives
$$|x-2|\,|x+2|=|(x-2)(x+2)|=|x^2-4|.$$
When $|x|<2$ one has $x^2-4<0$, so $|x^2-4|=4-x^2\neq x^2-4$ (unless both are zero). The bars cannot be dropped.""",
            ),
        ],
        overview="Five independent fridge cards: the quadratic factor of $x^3-8$, a double difference of squares, $(x^2+2)^2$, $32^{2/5}=4$, and $|x^2-4|$ versus $x^2-4$.",
    ),
    task(
        title="Surveyor's field identities",
        subsection="2.5",
        difficulty="5/5",
        context="A surveyor’s field book has five mixed algebra jottings on facing pages: a three-term square, a perfect-square trinomial, a cancelled rational shortcut, a square root of a square, and an absolute-value split. Distances in one jotting are not reused in another.",
        items=[
            (
                "Expanding $(a+b-c)^2$ is written as $a^2+b^2+c^2+2ab+2ac-2bc$.",
                False,
                r"""The cross terms are
$$2ab+2a(-c)+2b(-c)=2ab-2ac-2bc,$$
so
$$(a+b-c)^2=a^2+b^2+c^2+2ab-2ac-2bc.$$
The printed $+2ac$ has the wrong sign.""",
            ),
            (
                "Factoring $4x^2-12x+9$ as $(2x-3)^2$ is recorded as an identity.",
                True,
                r"""Expand the binomial:
$$(2x-3)^2=4x^2-2\cdot 2x\cdot 3+9=4x^2-12x+9.$$
The coefficients match, so the factorisation is an identity.""",
            ),
            (
                r"Cancelling $\dfrac{2x}{x^2-1}$ down to $\dfrac{2}{x-1}$ by striking an $x$ is treated as valid for $x\neq\pm 1$.",
                False,
                r"""The numerator is $2x$, not $2(x^2-1)$ or $2(x+1)$. Factoring the denominator gives
$$\frac{2x}{(x-1)(x+1)},$$
which is not $2/(x-1)$. Striking a single letter $x$ is not a cancellation of a common factor.""",
            ),
            (
                r"Simplifying $\sqrt{9x^2}$ to $3|x|$ is claimed for every real $x$.",
                True,
                r"""$$\sqrt{9x^2}=\sqrt{9}\,\sqrt{x^2}=3|x|.$$
Writing $3x$ would fail for $x<0$.""",
            ),
            (
                r"Splitting $|x+3|$ as $|x|+3$ is proposed as an identity on $\mathbb{R}$.",
                False,
                r"""$|x+3|=|x|+3$ holds for $x\ge 0$ but fails for $x=-4$:
$$|-1|=1,\qquad |-4|+3=7.$$
In general $|x+3|\le |x|+3$, with equality only on a half-line.""",
            ),
        ],
        overview="Five independent field-book jottings: the signs in $(a+b-c)^2$, a perfect square $(2x-3)^2$, illegal cancellation in a rational, $\\sqrt{9x^2}=3|x|$, and $|x+3|$ versus $|x|+3$.",
    ),
    task(
        title="Radio-club QSL algebra",
        subsection="2.5",
        difficulty="5/5",
        context="A radio club prints five mixed identities on the backs of QSL cards: a sum of cubes, a negative-exponent slogan, a sum-of-cubes expansion, a rewritten mixed rational, and a squared absolute difference. Each card is a different skill and a different pair of letters.",
        items=[
            (
                "Factoring $x^3+y^3$ as $(x+y)(x^2-xy+y^2)$ is printed as an identity.",
                True,
                r"""Distribute:
$$(x+y)(x^2-xy+y^2)=x^3-x^2y+xy^2+x^2y-xy^2+y^3=x^3+y^3.$$
The mixed terms cancel.""",
            ),
            (
                r"Rewriting $(xy)^{-1}$ as $x^{-1}+y^{-1}$ is offered as an identity for $xy\neq 0$.",
                False,
                r"""The power rule on a product is
$$(xy)^{-1}=x^{-1}y^{-1}=\frac{1}{xy}.$$
The sum of reciprocals is
$$x^{-1}+y^{-1}=\frac{x+y}{xy},$$
which equals $1/(xy)$ only if $x+y=1$, not identically.""",
            ),
            (
                "Expanding $(x+2y)(x^2-2xy+4y^2)$ is said to recover $x^3+8y^3$.",
                True,
                r"""This is the reverse of $u^3+v^3=(u+v)(u^2-uv+v^2)$ with $u=x$ and $v=2y$:
$$(x+2y)(x^2-2xy+4y^2)=x^3+(2y)^3=x^3+8y^3.$$""",
            ),
            (
                r"Rewriting $\dfrac{x}{y}+\dfrac{y}{x}-2$ as $\dfrac{(x-y)^2}{xy}$ is claimed for $xy\neq 0$.",
                True,
                r"""A common denominator $xy$ gives
$$\frac{x^2+y^2-2xy}{xy}=\frac{(x-y)^2}{xy}.$$""",
            ),
            (
                "Identifying $|x-y|^2$ with $|x^2-y^2|$ is treated as an identity.",
                False,
                r"""$|x-y|^2=(x-y)^2=x^2-2xy+y^2$, whereas
$$|x^2-y^2|=|x-y|\,|x+y|.$$
For $x=2$ and $y=1$, the left side is $1$ and the right side is $3$.""",
            ),
        ],
        overview="Five independent QSL identities: $x^3+y^3$, $(xy)^{-1}$ versus $x^{-1}+y^{-1}$, the reverse of $x^3+8y^3$, a completed square in a rational, and $|x-y|^2$ versus $|x^2-y^2|$.",
    ),
    task(
        title="Climbing-gym route card",
        subsection="2.5",
        difficulty="5/5",
        context="A climbing gym prints five mixed algebra problems on the back of a route card: a sum of opposite absolute values, a three-term square, a difference of cubes, a difference of two rationals, and a rational power of a square. Holds on the route are not data for the algebra.",
        items=[
            (
                "Adding $|3-x|+|x-3|$ is claimed to equal $2|x-3|$ for every real $x$.",
                True,
                r"""Opposite order does not change the absolute value:
$$|3-x|=|x-3|.$$
Adding the two terms therefore gives
$$|x-3|+|x-3|=2|x-3|.$$""",
            ),
            (
                "Expanding $(2x+3y+z)^2$ is written as $4x^2+9y^2+z^2+12xy+4xz+6yz$.",
                True,
                r"""The square of a three-term sum produces twice every pairwise product:
$$2\cdot 2x\cdot 3y=12xy,\quad 2\cdot 2x\cdot z=4xz,\quad 2\cdot 3y\cdot z=6yz,$$
together with $4x^2+9y^2+z^2$. The displayed polynomial matches.""",
            ),
            (
                "Factoring $8x^3-27y^3$ as $(2x-3y)(4x^2-6xy+9y^2)$ is posted as an identity.",
                False,
                r"""Difference of cubes $u^3-v^3=(u-v)(u^2+uv+v^2)$ with $u=2x$ and $v=3y$ gives
$$(2x-3y)(4x^2+6xy+9y^2).$$
The printed middle term $-6xy$ belongs to a sum of cubes, not a difference. Expanding the printed product yields $8x^3-24x^2y+36xy^2-27y^3$, which differs from $8x^3-27y^3$ by $-24x^2y+36xy^2$.""",
            ),
            (
                r"Subtracting $\dfrac{1}{x^2-1}$ from $\dfrac{1}{x^2-4}$ is said to leave $\dfrac{3}{(x^2-4)(x^2-1)}$ whenever $x\neq\pm 1$ and $x\neq\pm 2$.",
                True,
                r"""A common denominator $(x^2-4)(x^2-1)$ produces
$$\frac{(x^2-1)-(x^2-4)}{(x^2-4)(x^2-1)}=\frac{3}{(x^2-4)(x^2-1)}.$$""",
            ),
            (
                "Simplifying $(x^2)^{3/2}$ to $x^3$ is asserted for every real $x$.",
                False,
                r"""For real $x$,
$$(x^2)^{3/2}=\bigl(|x|^2\bigr)^{3/2}=|x|^3.$$
At $x=-2$ one has $(4)^{3/2}=8$, whereas $x^3=-8$. The identity holds only for $x\ge 0$.""",
            ),
        ],
        overview="Five independent route-card claims: $|3-x|+|x-3|$, a three-term square, the middle sign in $8x^3-27y^3$, a difference of two rationals, and $(x^2)^{3/2}=|x|^3$.",
    ),
    task(
        title="Translation-booth scratchpad",
        subsection="2.5",
        difficulty="4/5",
        context="Two interpreters share a scratchpad during a break and jot five mixed algebra claims that are not a single problem: a sum of two fractions, a rational power, a grouping factorisation, a three-term square, and a sign in an absolute value. Each jotting uses different letters.",
        items=[
            (
                r"Clearing $\dfrac{x}{2}+\dfrac{y}{3}$ to $\dfrac{3x+2y}{6}$ is claimed as an identity.",
                True,
                r"""A common denominator $6$ gives
$$\frac{3x}{6}+\frac{2y}{6}=\frac{3x+2y}{6}.$$""",
            ),
            (
                "Reducing $9^{3/2}$ to $27$ is treated as correct.",
                True,
                r"""Write $9$ as a power of $3$:
$$9^{3/2}=(3^2)^{3/2}=3^3=27.$$
Equivalently $\bigl(\sqrt{9}\bigr)^3=3^3=27$.""",
            ),
            (
                "Grouping $xy-2x+3y-6$ as $(x+3)(y-2)$ is offered as an identity.",
                True,
                r"""Factor by grouping:
$$xy-2x+3y-6=x(y-2)+3(y-2)=(x+3)(y-2).$$
Distributing the right-hand side recovers the four-term original.""",
            ),
            (
                "Expanding $(x+y+1)^2$ as $x^2+y^2+1$ is written up as an identity.",
                False,
                r"""The square is
$$(x+y+1)^2=x^2+y^2+1+2xy+2x+2y.$$
Dropping every cross term is legitimate only at special points, not identically.""",
            ),
            (
                "Replacing $|-x|$ by $-x$ for every real $x$ is proposed as an identity.",
                False,
                r"""$|-x|=|x|$, which equals $-x$ only when $x\le 0$. For $x=2$,
$$|-2|=2\neq -2.$$""",
            ),
        ],
        overview="Five independent scratchpad claims: a sum of two fractions, $9^{3/2}=27$, grouping four terms, the missing cross terms in $(x+y+1)^2$, and $|-x|=|x|$.",
    ),
    task(
        title="Astronomy-club chalkboard",
        subsection="2.5",
        difficulty="5/5",
        context="After a planetarium talk the astronomy club leaves five mixed identities on the chalkboard: a difference of two squares, a four-term factorisation, a cancelled difference of cubes, a square-root quotient with no sign restriction, and a difference of absolute values. The five lines are independent.",
        items=[
            (
                "The difference of binomial squares $(a+b)^2-(a-b)^2$ is recorded as the monomial $4ab$ with no restriction on the letters.",
                True,
                r"""$$(a+b)^2=a^2+2ab+b^2,\qquad (a-b)^2=a^2-2ab+b^2.$$
The difference is $4ab$.""",
            ),
            (
                "Factoring $a^2+2ab+b^2-c^2$ as $(a+b-c)^2$ is posted as an identity.",
                False,
                r"""The first three terms are $(a+b)^2$, so the whole expression is a difference of squares:
$$(a+b)^2-c^2=(a+b-c)(a+b+c).$$
The printed single square $(a+b-c)^2$ expands to $a^2+b^2+c^2+2ab-2ac-2bc$, which carries extra $-2ac-2bc$ and a different $c^2$ coefficient.""",
            ),
            (
                r"Cancelling $\dfrac{a^3-b^3}{a-b}$ down to $a^2+ab+b^2$ is claimed for $a\neq b$.",
                True,
                r"""$$a^3-b^3=(a-b)(a^2+ab+b^2),$$
so the quotient is $a^2+ab+b^2$ whenever $a\neq b$.""",
            ),
            (
                r"Writing $\sqrt{\dfrac{a}{b}}=\dfrac{\sqrt{a}}{\sqrt{b}}$ for every real $a$ and every $b\neq 0$ is treated as an identity.",
                False,
                r"""The identity
$$\sqrt{\frac{a}{b}}=\frac{\sqrt{a}}{\sqrt{b}}$$
requires $a\ge 0$ and $b>0$, so that every square root is defined in the reals. For $a=1$ and $b=-4$ the left-hand side is not real. The printed slogan ignores the sign of $b$.""",
            ),
            (
                "Identifying $|a|-|b|$ with $|a-b|$ is offered as an identity.",
                False,
                r"""The reverse triangle inequality is
$$\bigl||a|-|b|\bigr|\le |a-b|.$$
The printed claim drops the outer bars and asserts equality. For $a=1$ and $b=3$,
$$|a|-|b|=-2,\qquad |a-b|=2.$$""",
            ),
        ],
        overview="Five independent chalkboard claims: $(a+b)^2-(a-b)^2=4ab$, a difference of squares versus a single square, $(a^3-b^3)/(a-b)$, the domain of $\\sqrt{a/b}$, and $|a|-|b|$ versus $|a-b|$.",
    ),
    task(
        title="Textile-mill pattern book",
        subsection="2.5",
        difficulty="5/5",
        context="A textile mill’s pattern book annotates five mixed algebraic identities used as mnemonic borders: a complete factorisation of $x^6-y^6$, a reverse difference of cubes, a quotient of sums of negative exponents, a composition of rational exponents for $a>0$, and a mistaken split of an absolute value. Borders are not a shared computation.",
        items=[
            (
                "Factoring $x^6-y^6$ as $(x-y)(x+y)(x^2+xy+y^2)(x^2-xy+y^2)$ is recorded as an identity.",
                True,
                r"""First $x^6-y^6=(x^3-y^3)(x^3+y^3)$. Then
$$x^3-y^3=(x-y)(x^2+xy+y^2),\qquad x^3+y^3=(x+y)(x^2-xy+y^2).$$
The product of the four factors recovers $x^6-y^6$.""",
            ),
            (
                "Expanding $(x^2+xy+y^2)(x-y)$ is said to recover $x^3-y^3$.",
                True,
                r"""This is the difference-of-cubes identity read backwards:
$$(x-y)(x^2+xy+y^2)=x^3-y^3.$$""",
            ),
            (
                r"Simplifying $\dfrac{x^{-1}+y^{-1}}{x^{-1}-y^{-1}}$ to $\dfrac{x+y}{y-x}$ is claimed for $xy\neq 0$ and $x\neq y$.",
                True,
                r"""Write the negative exponents as fractions:
$$\frac{\frac{1}{x}+\frac{1}{y}}{\frac{1}{x}-\frac{1}{y}}=\frac{(y+x)/(xy)}{(y-x)/(xy)}=\frac{x+y}{y-x}.$$
(The equivalent form $-\dfrac{x+y}{x-y}$ is the same number.)""",
            ),
            (
                "Composing $(a^{2/3})^{3/2}$ back to $a$ is accepted for every $a>0$.",
                True,
                r"""Multiply the exponents:
$$\bigl(a^{2/3}\bigr)^{3/2}=a^{(2/3)\cdot(3/2)}=a^1=a.$$
Positivity of $a$ keeps every real power well-defined in the usual elementary sense.""",
            ),
            (
                "Splitting $|2-x|$ as $2-|x|$ is proposed as an identity.",
                False,
                r"""For $x=0$ both sides equal $2$, but for $x=3$,
$$|2-3|=1,\qquad 2-|3|=-1.$$
In general $|2-x|$ cannot be rewritten as $2-|x|$ identically.""",
            ),
        ],
        overview="Five independent pattern-book identities: $x^6-y^6$ in four factors, the reverse of $x^3-y^3$, a quotient of sums of negative exponents, $(a^{2/3})^{3/2}=a$ for $a>0$, and $|2-x|$ versus $2-|x|$.",
    ),
    task(
        title="Debate-team brief of forms",
        subsection="2.5",
        difficulty="5/5",
        context="A debate-team brief on elementary identities never solves for the pair $(u,v)$. It only records $u+v=5$ and $uv=3$, then lists five mixed claims: a squared-sum evaluation, a monic quadratic factorisation, a sum of reciprocals, a negative-exponent comparison, and an absolute difference. Each claim is judged on its own wording.",
        items=[
            (
                "Evaluating $u^2+v^2$ from $u+v=5$ as $25$ is treated as immediate.",
                False,
                r"""The identity is
$$u^2+v^2=(u+v)^2-2uv=25-2\cdot 3=19.$$
Omitting $-2uv$ leaves $25$, which is $(u+v)^2$ rather than $u^2+v^2$.""",
            ),
            (
                "Factoring the monic quadratic with roots $u$ and $v$ as $X^2-5X+3$ is accepted without finding $u$ or $v$.",
                True,
                r"""Vieta’s formulae say that a monic quadratic with roots $u,v$ is
$$(X-u)(X-v)=X^2-(u+v)X+uv=X^2-5X+3.$$
No quadratic formula is required.""",
            ),
            (
                r"Adding the reciprocals is claimed to give $\dfrac{1}{u}+\dfrac{1}{v}=\dfrac{5}{3}$.",
                True,
                r"""$$\frac{1}{u}+\frac{1}{v}=\frac{u+v}{uv}=\frac{5}{3}.$$
The trap $\dfrac{uv}{u+v}=\dfrac{3}{5}$ is the reciprocal of this sum, not the sum itself.""",
            ),
            (
                r"Identifying $(uv)^{-1}$ with $u^{-1}+v^{-1}$ is said to give $\dfrac{5}{3}$.",
                False,
                r"""$(uv)^{-1}=1/3$, whereas
$$u^{-1}+v^{-1}=\frac{5}{3}.$$
The two expressions are unequal; the claim conflates a product-power with a sum of powers.""",
            ),
            (
                r"Reading $|u-v|$ as $\sqrt{13}$ from $(u-v)^2=13$ is treated as correct.",
                True,
                r"""$$(u-v)^2=(u+v)^2-4uv=25-12=13,$$
so $|u-v|=\sqrt{13}$. The square root is the absolute value of the difference, not $13$ itself.""",
            ),
        ],
        overview="Five independent claims about a pair with $u+v=5$ and $uv=3$: $u^2+v^2=19$, the Vieta quadratic, $1/u+1/v=5/3$, $(uv)^{-1}$ versus a sum of reciprocals, and $|u-v|=\\sqrt{13}$.",
    ),
    task(
        title="Calligraphy-workshop proofs",
        subsection="2.5",
        difficulty="5/5",
        context="A calligraphy workshop copies five mixed identities onto practice sheets: a cube root of a monomial, a three-term product that recovers $1+x^3$, a sum of squares written as a square, a cancelled rational, and a reversed triangle inequality. Each sheet is a separate exercise.",
        items=[
            (
                r"Simplifying $\sqrt[3]{27a^6}$ to $3a^2$ is claimed for every real $a$.",
                True,
                r"""The real cube root splits:
$$\sqrt[3]{27a^6}=\sqrt[3]{27}\,\sqrt[3]{a^6}=3a^2,$$
because $a^6=(a^2)^3$ and $a^2\ge 0$. No absolute value is needed on $a^2$.""",
            ),
            (
                "Multiplying $(1-x+x^2)(1+x)$ is said to recover $1+x^3$.",
                True,
                r"""Distribute:
$$(1-x+x^2)(1+x)=1+x-x-x^2+x^2+x^3=1+x^3.$$
The identity is a three-term product equal to $1+x^3$.""",
            ),
            (
                "Factoring $x^2+4$ as $(x+2)^2$ is written as an identity.",
                False,
                r"""$(x+2)^2=x^2+4x+4$. The extra middle term $4x$ means
$$x^2+4=(x+2)^2-4x,$$
not a square. Over the reals $x^2+4$ does not factor into real linear terms.""",
            ),
            (
                r"Cancelling $\dfrac{x^2-1}{x^3-1}$ down to $\dfrac{x+1}{x^2+x+1}$ is claimed for $x\neq 1$.",
                True,
                r"""$$x^2-1=(x-1)(x+1),\qquad x^3-1=(x-1)(x^2+x+1).$$
For $x\neq 1$ the factor $x-1$ cancels, leaving $(x+1)/(x^2+x+1)$. The remaining denominator also requires $x^2+x+1\neq 0$, which holds for all real $x$.""",
            ),
            (
                r"Reversing the triangle inequality to $|x+y+z|\ge |x|+|y|+|z|$ is proposed as an identity.",
                False,
                r"""The triangle inequality runs the other way:
$$|x+y+z|\le |x|+|y|+|z|.$$
For $x=1$, $y=z=-1$ the left side is $1$ and the right side is $3$, so the reversed inequality fails. Equality in the genuine triangle inequality needs a common sign, not a reversed comparison.""",
            ),
        ],
        overview="Five independent practice sheets: a real cube root of $27a^6$, the finite product $(1-x+x^2)(1+x)$, $x^2+4$ versus $(x+2)^2$, cancelling $(x^2-1)/(x^3-1)$, and the direction of the triangle inequality.",
    ),
    task(
        title="Railway-timetable algebra",
        subsection="2.5",
        difficulty="4/5",
        context="In the margin of a railway timetable five mixed algebra notes appear, unrelated to the trains: a sum of two unit multiples, an absolute-value symmetry, a scaled difference of squares, a mistaken binomial square, and a square root of a sum. Each note has its own letters.",
        items=[
            (
                r"Clearing $\dfrac{3}{x}+\dfrac{2}{y}$ to $\dfrac{3y+2x}{xy}$ is claimed whenever $xy\neq 0$.",
                True,
                r"""A common denominator $xy$ gives
$$\frac{3y+2x}{xy}.$$""",
            ),
            (
                "The symmetry $|x-7|=|7-x|$ is asserted for every real $x$.",
                True,
                r"""Opposite order does not change the absolute value:
$$|7-x|=|-(x-7)|=|x-7|.$$""",
            ),
            (
                "Factoring $2x^2-8$ as $2(x-2)(x+2)$ is posted as an identity.",
                True,
                r"""$$2x^2-8=2(x^2-4)=2(x-2)(x+2).$$""",
            ),
            (
                "Expanding $(x-5)(x+5)$ as $x^2-10x+25$ is treated as an identity.",
                False,
                r"""Difference of squares gives
$$(x-5)(x+5)=x^2-25.$$
The printed $x^2-10x+25$ is $(x-5)^2$, a different expansion.""",
            ),
            (
                r"Writing $\sqrt{x^2+y^2}$ as $x+y$ for $x,y\ge 0$ is offered as an identity.",
                False,
                r"""Squaring $x+y$ produces $x^2+2xy+y^2$, not $x^2+y^2$. For $x=y=1$,
$$\sqrt{2}\neq 2.$$
The extra cross term $2xy$ is missing from the radicand.""",
            ),
        ],
        overview="Five independent timetable notes: a sum of two fractions, $|x-7|=|7-x|$, a scaled difference of squares, $(x-5)(x+5)$ versus $(x-5)^2$, and $\\sqrt{x^2+y^2}$ versus $x+y$.",
    ),
    task(
        title="Archery-club scoring identities",
        subsection="2.5",
        difficulty="5/5",
        context="An archery club prints five mixed identities on the back of a scoring sheet: a squared binomial, a difference of cubes, a pair of complementary rationals, a rational exponent, and a sum of two absolute values. Arrow scores are not inputs to the algebra.",
        items=[
            (
                "Expanding $(3a-2b)^2$ is written as $9a^2-12ab+4b^2$.",
                True,
                r"""Expand with the binomial square:
$$(3a-2b)^2=(3a)^2-2\cdot 3a\cdot 2b+(2b)^2=9a^2-12ab+4b^2.$$""",
            ),
            (
                "Factoring $a^3-27b^3$ as $(a-3b)(a^2+3ab+9b^2)$ is accepted as an identity.",
                True,
                r"""Difference of cubes with $u=a$ and $v=3b$:
$$a^3-(3b)^3=(a-3b)(a^2+a\cdot 3b+(3b)^2)=(a-3b)(a^2+3ab+9b^2).$$""",
            ),
            (
                r"Adding $\dfrac{a}{a+b}+\dfrac{b}{a+b}$ is said to equal $1$ whenever $a+b\neq 0$.",
                True,
                r"""The two numerators add to the common denominator:
$$\frac{a+b}{a+b}=1.$$""",
            ),
            (
                "Reducing $81^{3/4}$ to $27$ is treated as correct.",
                True,
                r"""$81=3^4$, so
$$81^{3/4}=(3^4)^{3/4}=3^3=27.$$""",
            ),
            (
                "Adding $|a+b|+|a-b|$ is claimed to equal $2|a|$ for every real pair $(a,b)$.",
                False,
                r"""The identity fails as soon as $|b|>|a|$. For $a=1$ and $b=3$,
$$|4|+|-2|=6,\qquad 2|1|=2.$$
(The genuine identity is $|a+b|+|a-b|=2\max(|a|,|b|)$.)""",
            ),
        ],
        overview="Five independent scoring-sheet identities: $(3a-2b)^2$, $a^3-27b^3$, complementary rationals summing to $1$, $81^{3/4}=27$, and $|a+b|+|a-b|$ versus $2|a|$.",
    ),
    task(
        title="Conservatory theory algebra",
        subsection="2.5",
        difficulty="5/5",
        context="A conservatory theory class uses five mixed algebra drills between ear-training examples: a squared quadratic, a difference of two cubes of binomials, a telescoping rational, a square root of a sixth power, and a sign error in an absolute value. The drills do not share a common unknown.",
        items=[
            (
                "Factoring $x^4+8x^2+16$ as $(x^2+4)^2$ is posted as an identity.",
                True,
                r"""Set $u=x^2$. Completing the square in $u$ gives
$$u^2+8u+16=(u+4)^2=(x^2+4)^2.$$
Expanding the right-hand side recovers $x^4+8x^2+16$.""",
            ),
            (
                "Expanding $(x+y)^3-(x-y)^3$ is said to leave $2y^3$.",
                False,
                r"""The odd-powered terms in $y$ survive:
$$(x+y)^3-(x-y)^3=2\bigl(3x^2y+y^3\bigr)=2y(3x^2+y^2).$$
The claim $2y^3$ drops the $6x^2y$ term.""",
            ),
            (
                r"Simplifying $\dfrac{1}{x-1}-\dfrac{2}{x^2-1}$ to $\dfrac{1}{x+1}$ is claimed for $x\neq\pm 1$.",
                True,
                r"""Write $x^2-1=(x-1)(x+1)$:
$$\frac{1}{x-1}-\frac{2}{(x-1)(x+1)}=\frac{x+1-2}{(x-1)(x+1)}=\frac{x-1}{(x-1)(x+1)}=\frac{1}{x+1}.$$""",
            ),
            (
                r"Simplifying $\sqrt{4x^6}$ to $2|x|^3$ is asserted for every real $x$.",
                True,
                r"""$$\sqrt{4x^6}=2\sqrt{x^6}=2|x|^3,$$
because $\sqrt{x^6}=\sqrt{(x^3)^2}=|x^3|=|x|^3$.""",
            ),
            (
                "Identifying $-|x|$ with $|-x|$ is offered as an identity.",
                False,
                r"""$|-x|=|x|$, which is nonnegative. The quantity $-|x|$ is nonpositive. They agree only at $x=0$. For $x=1$,
$$-|1|=-1,\qquad |-1|=1.$$""",
            ),
        ],
        overview="Five independent theory drills: $(x^2+4)^2$, the expansion of $(x+y)^3-(x-y)^3$, a telescoping rational, $\\sqrt{4x^6}=2|x|^3$, and $-|x|$ versus $|-x|$.",
    ),
    task(
        title="Cartography-workshop identities",
        subsection="2.5",
        difficulty="5/5",
        context="A cartography workshop prints five mixed identities in the legend of a practice map: a three-term square, a quadratic factorisation, a cancelled trinomial, a negative cube root, and a dropped absolute value on a linear form. Map scales are not used in the algebra.",
        items=[
            (
                "Expanding $(a+2b+3c)^2$ is written as $a^2+4b^2+9c^2+4ab+6ac+12bc$.",
                True,
                r"""Twice the pairwise products are
$$2\cdot a\cdot 2b=4ab,\quad 2\cdot a\cdot 3c=6ac,\quad 2\cdot 2b\cdot 3c=12bc,$$
together with $a^2+4b^2+9c^2$. The displayed expansion matches.""",
            ),
            (
                "Factoring $x^2-x-6$ as $(x-2)(x+3)$ is posted as an identity.",
                False,
                r"""$(x-2)(x+3)=x^2+x-6$. The correct factorisation of $x^2-x-6$ is
$$(x-3)(x+2).$$
The constant terms $-2$ and $+3$ have been swapped relative to the needed $-3$ and $+2$.""",
            ),
            (
                r"Cancelling $\dfrac{x^2+5x+6}{x+2}$ down to $x+2$ is claimed for $x\neq -2$.",
                False,
                r"""$$x^2+5x+6=(x+2)(x+3),$$
so the quotient is $x+3$, not $x+2$. The printed right-hand side repeats the cancelled factor instead of the remaining one.""",
            ),
            (
                r"Reducing $64^{-1/3}$ to $\dfrac{1}{4}$ is treated as correct.",
                True,
                r"""$64=4^3=2^6$, so
$$64^{-1/3}=\frac{1}{64^{1/3}}=\frac{1}{4}.$$""",
            ),
            (
                "Omitting the bars around $2x+4$ and writing $2x+4$ for every real $x$ is offered as an identity.",
                False,
                r"""Pull out the positive factor $2$:
$$|2x+4|=2|x+2|.$$
This equals $2x+4$ only on $x\ge -2$. At $x=-3$,
$$|2(-3)+4|=|-2|=2,\qquad 2(-3)+4=-2.$$""",
            ),
        ],
        overview="Five independent map-legend claims: $(a+2b+3c)^2$, the factors of $x^2-x-6$, cancelling $(x+2)(x+3)/(x+2)$, $64^{-1/3}=1/4$, and $|2x+4|$ versus $2x+4$.",
    ),
    task(
        title="Beekeeper's log of forms",
        subsection="2.5",
        difficulty="5/5",
        context="A beekeeper’s log never solves a quadratic for the hive pair $(p,q)$. It only stores $p+q=4$ and $pq=1$, then five mixed remarks: a sum of cubes, a Vieta factorisation check, a sum of reciprocal squares, an AM–GM-looking square root, and an absolute difference read without a root. Remarks are independent.",
        items=[
            (
                "Evaluating $p^3+q^3$ from the stored sum and product as $52$ is treated as correct.",
                True,
                r"""The elementary identity is
$$p^3+q^3=(p+q)^3-3pq(p+q)=64-3\cdot 1\cdot 4=64-12=52.$$
Equivalently $p^3+q^3=(p+q)(p^2-pq+q^2)$ with $p^2+q^2=(p+q)^2-2pq=14$, so $p^2-pq+q^2=14-1=13$ and $4\cdot 13=52$.""",
            ),
            (
                "Factoring $X^2-4X+1$ as $(X-p)(X-q)$ is accepted from Vieta’s formulae alone.",
                True,
                r"""$$(X-p)(X-q)=X^2-(p+q)X+pq=X^2-4X+1.$$
The discriminant $16-4=12$ is not needed to write the factorisation in letters $p$ and $q$.""",
            ),
            (
                r"Adding the reciprocal squares is claimed to give $\dfrac{1}{p^2}+\dfrac{1}{q^2}=14$.",
                True,
                r"""$$\frac{1}{p^2}+\frac{1}{q^2}=\frac{p^2+q^2}{p^2q^2}=\frac{(p+q)^2-2pq}{(pq)^2}=\frac{16-2}{1}=14.$$""",
            ),
            (
                r"Identifying $\sqrt{pq}$ with $\dfrac{p+q}{2}$ is said to give the common value $2$.",
                False,
                r"""The geometric mean of the product is
$$\sqrt{pq}=\sqrt{1}=1,$$
while the arithmetic mean is
$$\frac{p+q}{2}=2.$$
Those two numbers coincide only if $p=q$, which would force $pq=4$, contradicting $pq=1$.""",
            ),
            (
                "Reading $|p-q|$ as $12$ from $(p-q)^2=12$ is treated as correct.",
                False,
                r"""$$(p-q)^2=(p+q)^2-4pq=16-4=12,$$
so $|p-q|=\sqrt{12}=2\sqrt{3}$, not $12$.""",
            ),
        ],
        overview="Five independent log remarks for $p+q=4$ and $pq=1$: $p^3+q^3=52$, the Vieta quadratic $X^2-4X+1$, $1/p^2+1/q^2=14$, $\\sqrt{pq}$ versus the arithmetic mean, and $|p-q|=2\\sqrt{3}$.",
    ),
    task(
        title="Fencing-club drill sheet",
        subsection="2.5",
        difficulty="5/5",
        context="A fencing club’s drill sheet prints five mixed algebra lines in the unused column: a completed square in an absolute value, a cancelled sum of cubes, a three-term square, a difference of fourth powers, and a product-power slogan. Footwork counts are not algebraic data.",
        items=[
            (
                r"Completing $|x|^2+2|x|+1$ as $\bigl(|x|+1\bigr)^2$ is claimed as an identity.",
                True,
                r"""Set $t=|x|\ge 0$. Then
$$t^2+2t+1=(t+1)^2=\bigl(|x|+1\bigr)^2.$$""",
            ),
            (
                r"Cancelling $\dfrac{x^3+y^3}{x+y}$ down to $x^2-xy+y^2$ is claimed for $x\neq -y$.",
                True,
                r"""$$x^3+y^3=(x+y)(x^2-xy+y^2),$$
so the quotient is $x^2-xy+y^2$ whenever $x\neq -y$.""",
            ),
            (
                "Expanding $(x+y-2z)^2$ is written as $x^2+y^2+4z^2+2xy-4xz-4yz$.",
                True,
                r"""The pairwise products are
$$2xy+2x(-2z)+2y(-2z)=2xy-4xz-4yz,$$
together with $x^2+y^2+4z^2$. The displayed polynomial matches.""",
            ),
            (
                "Factoring $x^4-1$ as $(x-1)(x^3-1)$ is posted as an identity.",
                False,
                r"""$(x-1)(x^3-1)=x^4-x-x^3+1$, not $x^4-1$. The correct first split is a difference of squares:
$$x^4-1=(x^2-1)(x^2+1)=(x-1)(x+1)(x^2+1).$$""",
            ),
            (
                "Rewriting $(ab)^{m+n}$ as $a^mb^n$ is treated as an identity for $a,b>0$.",
                False,
                r"""The power of a product is
$$(ab)^{m+n}=a^{m+n}b^{m+n}.$$
The printed $a^mb^n$ matches $(ab)^{m+n}$ only in special cases, not identically. For $m=n=1$ one would need $ab=(ab)^2$ for all positive $a,b$, which fails.""",
            ),
        ],
        overview="Five independent drill-sheet lines: $\\bigl(|x|+1\\bigr)^2$, $(x^3+y^3)/(x+y)$, $(x+y-2z)^2$, $x^4-1$ versus $(x-1)(x^3-1)$, and $(ab)^{m+n}$ versus $a^mb^n$.",
    ),
    task(
        title="Stonemason's proportion book",
        subsection="2.5",
        difficulty="5/5",
        context="A stonemason’s proportion book lists five mixed identities beside ratio sketches: a reverse difference of cubes, a scaled difference of squares, a difference of reciprocal-looking terms, a real cube root of a monomial quotient, and an absolute value of a quotient. Sketches are not a shared numerical example.",
        items=[
            (
                "Expanding $(a-b)(a^2+ab+b^2)$ is said to recover $a^3-b^3$.",
                True,
                r"""This is the difference-of-cubes identity read from right to left:
$$(a-b)(a^2+ab+b^2)=a^3-b^3.$$""",
            ),
            (
                "Factoring $12x^2-3$ as $3(2x-1)(2x+1)$ is accepted as an identity.",
                True,
                r"""$$12x^2-3=3(4x^2-1)=3(2x-1)(2x+1).$$""",
            ),
            (
                r"Clearing $\dfrac{a}{b}-\dfrac{b}{a}$ to $\dfrac{a-b}{ab}$ is claimed for $ab\neq 0$.",
                False,
                r"""A common denominator $ab$ produces
$$\frac{a^2-b^2}{ab}=\frac{(a-b)(a+b)}{ab}.$$
The printed numerator $a-b$ belongs to $\dfrac{1}{b}-\dfrac{1}{a}$, a different difference.""",
            ),
            (
                r"Simplifying $\sqrt[3]{a^9b^{-3}}$ to $\dfrac{a^3}{b}$ is claimed for all real $a$ and all $b\neq 0$.",
                True,
                r"""The real cube root splits:
$$\sqrt[3]{a^9b^{-3}}=\sqrt[3]{a^9}\,\sqrt[3]{b^{-3}}=a^3\cdot\frac{1}{b}=\frac{a^3}{b},$$
since $a^9=(a^3)^3$ and $b^{-3}=1/b^3$ with $\sqrt[3]{1/b^3}=1/b$.""",
            ),
            (
                r"Writing $\bigl|\dfrac{a}{b}\bigr|$ as $\dfrac{|a|}{b}$ is offered as an identity for $b\neq 0$.",
                False,
                r"""The correct rule is
$$\biggl|\frac{a}{b}\biggr|=\frac{|a|}{|b|}.$$
Dropping the bars on $b$ fails whenever $b<0$: for $a=1$ and $b=-2$,
$$\biggl|\frac{1}{-2}\biggr|=\frac{1}{2},\qquad \frac{|1|}{-2}=-\frac{1}{2}.$$""",
            ),
        ],
        overview="Five independent proportion-book identities: the reverse of $a^3-b^3$, a scaled difference of squares, $\\frac{a}{b}-\\frac{b}{a}$ versus $\\frac{a-b}{ab}$, a real cube root of $a^9b^{-3}$, and $|a/b|=|a|/|b|$.",
    ),
    task(
        title="Lighthouse keeper's log",
        subsection="2.5",
        difficulty="5/5",
        context="A lighthouse keeper’s log contains five mixed algebra remarks written on different nights: a cancelled linear-over-quadratic, a three-term square, a cubed binomial, a negative rational exponent, and a squared absolute value. Nightly weather figures are not substituted into the algebra.",
        items=[
            (
                r"Cancelling $\dfrac{x-4}{x^2-16}$ down to $\dfrac{1}{x+4}$ is claimed for $x\neq\pm 4$.",
                True,
                r"""$$x^2-16=(x-4)(x+4),$$
so for $x\neq 4$
$$\frac{x-4}{(x-4)(x+4)}=\frac{1}{x+4},$$
and $x\neq -4$ keeps the remaining denominator nonzero.""",
            ),
            (
                "Expanding $(2x-y-3)^2$ is written as $4x^2+y^2+9-4xy-12x+6y$.",
                True,
                r"""The pairwise products are
$$2\cdot 2x\cdot(-y)=-4xy,\quad 2\cdot 2x\cdot(-3)=-12x,\quad 2\cdot(-y)\cdot(-3)=6y,$$
together with $4x^2+y^2+9$. The displayed polynomial matches.""",
            ),
            (
                "Factoring $x^3+3x^2+3x+1$ as $(x+1)^3$ is posted as an identity.",
                True,
                r"""The binomial formula gives
$$(x+1)^3=x^3+3x^2+3x+1.$$
The coefficients $1,3,3,1$ are the third row of Pascal’s triangle.""",
            ),
            (
                r"Reducing $8^{-2/3}$ to $\dfrac{1}{4}$ is treated as correct.",
                True,
                r"""$$8^{-2/3}=\frac{1}{8^{2/3}}=\frac{1}{(2^3)^{2/3}}=\frac{1}{2^2}=\frac{1}{4}.$$""",
            ),
            (
                "Expanding $|x+1|^2$ as $x^2+1$ is offered as an identity.",
                False,
                r"""Because $|t|^2=t^2$ for $t=x+1$,
$$|x+1|^2=(x+1)^2=x^2+2x+1.$$
The printed $x^2+1$ drops the cross term $2x$.""",
            ),
        ],
        overview="Five independent log remarks: cancelling $(x-4)/(x^2-16)$, $(2x-y-3)^2$, $(x+1)^3$, $8^{-2/3}=1/4$, and $|x+1|^2=(x+1)^2$.",
    ),
    task(
        title="Exam-coach five-skill drill",
        subsection="2.5",
        difficulty="5/5",
        context="An exam coach’s five-skill drill prints one expanding claim, one factoring claim, one rational claim, one power claim, and one absolute-value claim as five separate sentences. The coach explicitly warns that the five sentences do not share a figure, a pair of letters, or a common calculation.",
        items=[
            (
                "Factoring $a^3+b^3+c^3-3abc$ as $(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$ is printed as an identity.",
                True,
                r"""This is the standard three-letter cube identity. Expanding the product,
$$(a+b+c)(a^2+b^2+c^2-ab-bc-ca)=a^3+b^3+c^3-3abc.$$
The cubic terms survive and the mixed quadratic products arrange so that the remainder is $-3abc$.""",
            ),
            (
                "Expanding $(a+b+c)^3$ as $a^3+b^3+c^3+3abc$ is treated as an identity.",
                False,
                r"""The full expansion is
$$(a+b+c)^3=a^3+b^3+c^3+3(a+b+c)(ab+bc+ca)-3abc.$$
The printed $a^3+b^3+c^3+3abc$ retains only a fragment. For $a=b=c=1$ the left side is $27$ and the printed right side is $6$.""",
            ),
            (
                r"Clearing $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}$ to $\dfrac{bc+ca+ab}{abc}$ is claimed whenever $abc\neq 0$.",
                True,
                r"""A common denominator $abc$ produces
$$\frac{bc}{abc}+\frac{ca}{abc}+\frac{ab}{abc}=\frac{bc+ca+ab}{abc}.$$""",
            ),
            (
                r"Simplifying $\sqrt[3]{8x^6y^{-3}}$ to $\dfrac{2x^2}{y}$ is claimed for all real $x$ and all $y\neq 0$.",
                True,
                r"""The real cube root splits:
$$\sqrt[3]{8}\,\sqrt[3]{x^6}\,\sqrt[3]{y^{-3}}=2\cdot x^2\cdot\frac{1}{y}=\frac{2x^2}{y},$$
because $x^6=(x^2)^3$ and $\sqrt[3]{y^{-3}}=1/y$.""",
            ),
            (
                "Splitting $|a-b-c|$ as $|a|-|b|-|c|$ is proposed as an identity.",
                False,
                r"""Absolute value is not linear. For $a=0$, $b=1$, $c=1$,
$$|-2|=2,\qquad |0|-|1|-|1|=-2.$$
The genuine comparison is $|a-b-c|\le |a|+|b|+|c|$.""",
            ),
        ],
        overview="Five independent coach-drill sentences: the factorisation of $a^3+b^3+c^3-3abc$, the missing terms in $(a+b+c)^3$, a sum of three reciprocals, a real cube root of $8x^6y^{-3}$, and the failure of $|a-b-c|=|a|-|b|-|c|$.",
    ),
]
