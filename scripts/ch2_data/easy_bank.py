"""Difficulty 1/5 and 2/5 Chapter 2 tasks — exam-direct statements, prepended before 3/5+."""

from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."


def _items(pairs: list[tuple[str, bool]]):
    return pairs


# ---------------------------------------------------------------------------
# 2.1 — identities and squares
# ---------------------------------------------------------------------------

EASY_21 = [
    task(
        title="Warm-up: square of a sum",
        subsection="2.1",
        difficulty="1/5",
        context=CTX,
        items=_items([
            (r"The identity $(a+b)^2=a^2+2ab+b^2$ holds for every real pair $(a,b)$.", True),
            (r"Squaring $x+1$ yields $x^2+2x+1$ for every real $x$.", True),
            (r"When $p$ and $q$ are real, $(p-q)^2=p^2-2pq+q^2$.", True),
            (r"Doubling inside a square: $(2t)^2=4t^2$ for every real $t$.", True),
            (r"Omitting the middle term gives $(m+n)^2=m^2+n^2$, which is false for real $(m,n)$.", False),
        ]),
        overview="Five direct square expansions: three standard identities, one monomial square, and one missing middle term.",
    ),
    task(
        title="Warm-up: difference of two squares",
        subsection="2.1",
        difficulty="1/5",
        context=CTX,
        items=_items([
            (r"Factoring a difference: $x^2-y^2=(x-y)(x+y)$ for every real pair $(x,y)$.", True),
            (r"The unit shift $a^2-1=(a-1)(a+1)$ holds for every real $a$.", True),
            (r"Reordering factors, $u^2-v^2=(u+v)(u-v)$ for all real $(u,v)$.", True),
            (r"Squaring a difference is not factoring: $k^2-9=(k-3)^2$ is false for real $k$.", False),
            (r"The gap-four pattern $r^2-4=(r-2)(r+2)$ holds for every real $r$.", True),
        ]),
        overview="Five factorisations of a difference of squares, including one squared-difference trap.",
    ),
    task(
        title="Warm-up: elementary sum and product data",
        subsection="2.1",
        difficulty="2/5",
        context=CTX,
        items=_items([
            (r"If $a+b=s$ and $ab=p$, then $a^2+b^2=s^2-2p$ for every real pair with sum $s$ and product $p$.", True),
            (r"Whenever $m+n=t$ and $mn=q$, one has $m^2+n^2=t^2-2q$.", True),
            (r"From $u+v=r$ and $uv=w$, it follows that $u^2+v^2=r^2-2w$.", True),
            (r"Given $c+d=h$ and $cd=k$, the identity $c^2+d^2=h^2-2k$ holds.", True),
            (r"Replacing $2p$ by $p$ makes $a^2+b^2=s^2-p$ false when $a+b=s$ and $ab=p$.", False),
        ]),
        overview="Five square-sum recoveries from sum and product using $a^2+b^2=(a+b)^2-2ab$.",
    ),
    task(
        title="Warm-up: cube sum under a vanishing triple sum",
        subsection="2.1",
        difficulty="2/5",
        context=CTX,
        items=_items([
            (r"If $a+b+c=0$, then $a^3+b^3+c^3=3abc$ for every real triple $(a,b,c)$.", True),
            (r"Vanishing $x+y+z=0$ implies $x^3+y^3+z^3=3xyz$ for every real triple $(x,y,z)$.", True),
            (r"Whenever $p+q+r=0$, the cube sum satisfies $p^3+q^3+r^3=3pqr$.", True),
            (r"Under $a+b+c=0$, the claim $a^3+b^3+c^3=0$ is false for real triples $(a,b,c)$.", False),
            (r"With $m+n+t=0$, one has $m^3+n^3+t^3=3mnt$ for every real triple $(m,n,t)$.", True),
        ]),
        overview="Five uses of the vanishing-sum cube identity with letter-only hypotheses.",
    ),
]

# ---------------------------------------------------------------------------
# 2.2 — fractions
# ---------------------------------------------------------------------------

EASY_22 = [
    task(
        title="Warm-up: adding two fractions",
        subsection="2.2",
        difficulty="1/5",
        context=CTX,
        items=_items([
            (r"Adding reciprocals: for $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{a+b}{ab}$.", True),
            (r"Cross-multiplying gives $\dfrac{2}{x}+\dfrac{3}{y}=\dfrac{2y+3x}{xy}$ for $x,y\neq 0$.", True),
            (r"For $p,q\neq 0$, the sum $\dfrac{p}{q}+\dfrac{q}{p}$ equals $\dfrac{p^2+q^2}{pq}$.", True),
            (r"Using $m+n$ as a common denominator is wrong: for $m,n\neq 0$, $\dfrac{1}{m}+\dfrac{1}{n}=\dfrac{1}{m+n}$ is false.", False),
            (r"Clearing to $uv$, one has $\dfrac{4}{u}+\dfrac{1}{v}=\dfrac{4v+u}{uv}$ for $u,v\neq 0$.", True),
        ]),
        overview="Five LCD additions with a wrong common denominator on one line.",
    ),
    task(
        title="Warm-up: cancelling a common factor",
        subsection="2.2",
        difficulty="1/5",
        context=CTX,
        items=_items([
            (r"After cancelling, for $x\neq 3$, $\dfrac{x^2-9}{x-3}=x+3$.", True),
            (r"For $t\neq -2$, simplifying $\dfrac{t^2-4}{t+2}$ leaves $t-2$.", True),
            (r"Removing the factor $a-5$ gives $\dfrac{a^2-25}{a-5}=a+5$ for $a\neq 5$.", True),
            (r"For $k\neq 1$, the quotient $\dfrac{k^2-1}{k-1}$ simplifies to $k+1$.", True),
            (r"A sign slip makes $\dfrac{x^2-4}{x-2}=x-2$ false for $x\neq 2$.", False),
        ]),
        overview="Five difference-of-squares cancellations, including one sign error.",
    ),
    task(
        title="Warm-up: product of simple fractions",
        subsection="2.2",
        difficulty="2/5",
        context=CTX,
        items=_items([
            (r"Multiplying monomial fractions: for $a,b\neq 0$, $\dfrac{3a}{2b}\cdot\dfrac{4b}{3a}=2$.", True),
            (r"For $x,y\neq 0$, $\dfrac{2x}{y}\cdot\dfrac{y}{4x}=\dfrac{1}{2}$.", True),
            (r"Reciprocal factors collapse: for $p,q\neq 0$, $\dfrac{5p}{q}\cdot\dfrac{q}{5p}=1$.", True),
            (r"For $m,n\neq 0$, the product $\dfrac{m}{n}\cdot\dfrac{n}{m}$ equals $0$ (false).", False),
            (r"For $u,v\neq 0$, $\dfrac{6u}{v}\cdot\dfrac{v}{3u}=2$.", True),
        ]),
        overview="Five monomial fraction products with one false zero claim.",
    ),
    task(
        title="Warm-up: partial fraction split on $x^2-1$",
        subsection="2.2",
        difficulty="2/5",
        context=CTX,
        items=_items([
            (r"Decomposing over $x^2-1$: for $x\neq\pm 1$, $\dfrac{1}{x^2-1}=\dfrac{1}{2(x-1)}-\dfrac{1}{2(x+1)}$.", True),
            (r"Doubling the numerator, for $x\neq\pm 1$, $\dfrac{2}{x^2-1}=\dfrac{1}{x-1}-\dfrac{1}{x+1}$.", True),
            (r"For $x\neq\pm 1$, $\dfrac{3}{x^2-1}=\dfrac{3}{2(x-1)}-\dfrac{3}{2(x+1)}$.", True),
            (r"Omitting the factor $\tfrac12$ makes $\dfrac{1}{x^2-1}=\dfrac{1}{x-1}-\dfrac{1}{x+1}$ false for $x\neq\pm 1$.", False),
            (r"For $x\neq\pm 1$, $\dfrac{4}{x^2-1}=\dfrac{2}{x-1}-\dfrac{2}{x+1}$.", True),
        ]),
        overview="Five partial-fraction decompositions with a missing one-half factor on one line.",
    ),
]

# ---------------------------------------------------------------------------
# 2.3 — exponents and radicals
# ---------------------------------------------------------------------------

EASY_23 = [
    task(
        title="Warm-up: product and quotient of powers",
        subsection="2.3",
        difficulty="1/5",
        context=CTX,
        items=_items([
            (r"Multiplying powers: for $a\neq 0$, $a^3\cdot a^4=a^7$.", True),
            (r"Dividing indices, for $x\neq 0$, $x^5/x^2=x^3$.", True),
            (r"For $b\neq 0$, the product $b^2\cdot b^3$ equals $b^5$.", True),
            (r"An exponent slip gives $t^4/t^2=t^3$ for $t\neq 0$ (false).", False),
            (r"For $p\neq 0$, cancelling three factors in $p^6/p^3$ leaves $p^2$.", True),
        ]),
        overview="Five index laws on a single letter base.",
    ),
    task(
        title="Warm-up: power of a power",
        subsection="2.3",
        difficulty="1/5",
        context=CTX,
        items=_items([
            (r"For $x>0$, raising a square to the third power gives $(x^2)^3=x^6$.", True),
            (r"Adding exponents incorrectly, $(a^3)^2=a^5$ is false for $a>0$.", False),
            (r"For $b>0$, halving the exponent in $(b^4)^{1/2}=b^2$.", True),
            (r"For $y>0$, squaring a square root returns $y$: $(y^{1/2})^2=y$.", True),
            (r"For $z>0$, the identity $(z^3)^{1/3}=z$ holds.", True),
        ]),
        overview="Five power-of-a-power checks, including one added-exponent error.",
    ),
    task(
        title="Warm-up: negative and zero exponents",
        subsection="2.3",
        difficulty="2/5",
        context=CTX,
        items=_items([
            (r"For $a\neq 0$, a negative index means $a^{-3}=1/a^3$.", True),
            (r"Reciprocating once, for $x\neq 0$, $x^{-1}=1/x$.", True),
            (r"Any nonzero base satisfies $b^0=1$.", True),
            (r"A sign error makes $t^{-2}=-1/t^2$ for $t\neq 0$ (false).", False),
            (r"For $p\neq 0$, $p^{-4}=1/p^4$.", True),
        ]),
        overview="Five reciprocal and zero-exponent identities with one sign trap.",
    ),
    task(
        title="Warm-up: fractional exponents and roots",
        subsection="2.3",
        difficulty="2/5",
        context=CTX,
        items=_items([
            (r"For $x>0$, the half-power $x^{1/2}$ equals $\sqrt{x}$.", True),
            (r"For $a>0$, the cube root is $a^{1/3}=\sqrt[3]{a}$.", True),
            (r"For $b>0$, $b^{2/3}=(\sqrt[3]{b})^2$.", True),
            (r"Confusing a half-power with a square, $y^{1/2}=y^2$ is false for $y>0$.", False),
            (r"For $z>0$, $z^{3/2}=z\sqrt{z}$.", True),
        ]),
        overview="Five links between fractional exponents and radicals.",
    ),
]

# ---------------------------------------------------------------------------
# 2.4 — absolute value
# ---------------------------------------------------------------------------

EASY_24 = [
    task(
        title="Warm-up: definition of absolute value",
        subsection="2.4",
        difficulty="1/5",
        context=CTX,
        items=_items([
            (r"Nonnegativity: for every real $x$, $|x|\ge 0$.", True),
            (r"Negating the input, for every real $t$, $|-t|=|t|$.", True),
            (r"For every real $a$, $|a|=|-a|$.", True),
            (r"Equating $|x|=-x$ for every real $x$ is false.", False),
            (r"For every real $k$, $|k|=0$ if and only if $k=0$.", True),
        ]),
        overview="Five basic absolute-value facts.",
    ),
    task(
        title="Warm-up: absolute value of a product",
        subsection="2.4",
        difficulty="1/5",
        context=CTX,
        items=[
            (r"Products split under bars: for every real pair $(a,b)$, $|ab|=|a|\,|b|$.", True),
            (r"Pulling out a factor of two, $|2x|=2|x|$ for every real $x$.", True),
            (r"Independently, $|pq|=|p|\,|q|$ for every real pair $(p,q)$.", True),
            (
                r"For every real $t$, $|-3t|=3t$ is false.",
                False,
                r"""The negative of a product splits into signs on each factor:

$$|-3t|=|-3|\,|t|=3|t|$$

This equals $3t$ only when $t\ge 0$. At $t=-1$ the left side is $3$ while the right side is $-3$, so the universal claim fails.""",
            ),
            (r"Squares are transparent: for every real $m$, $|m^2|=m^2$.", True),
        ],
        overview="Five product rules for absolute value.",
    ),
    task(
        title="Warm-up: piecewise distance on an interval",
        subsection="2.4",
        difficulty="2/5",
        context=CTX,
        items=_items([
            (r"On the interval $1\le x\le 5$, $|x-1|+|5-x|=4$.", True),
            (r"When $0\le t\le 7$, the sum $|t|+|7-t|$ equals $7$.", True),
            (r"Throughout $2\le k\le 8$, $|k-2|+|8-k|=6$.", True),
            (r"On $1\le x\le 5$, the claim $|x-1|+|5-x|=5$ is false.", False),
            (r"For $3\le p\le 9$, $|p-3|+|9-p|=6$.", True),
        ]),
        overview="Five segment-length identities written with an explicit variable on the interval.",
    ),
    task(
        title="Warm-up: quadratic under absolute value bars",
        subsection="2.4",
        difficulty="2/5",
        context=CTX,
        items=_items([
            (r"Factoring under bars: for every real $x$, $|x^2-4|=|(x-2)(x+2)|$.", True),
            (r"For every real $t$, $|t^2-9|=|t-3|\,|t+3|$.", True),
            (r"A perfect square inside bars: $|x^2-2x+1|=(x-1)^2$ for every real $x$.", True),
            (r"Dropping the bars on factors makes $|x^2-4|=(x-2)(x+2)$ false for real $x$.", False),
            (r"For every real $w$, $|w^2-16|=|w-4|\,|w+4|$.", True),
        ]),
        overview="Five factorisations under absolute value, including one missing bars on the right.",
    ),
]

# ---------------------------------------------------------------------------
# 2.5 — mixed review
# ---------------------------------------------------------------------------

EASY_25 = [
    task(
        title="Warm-up: polarisation identity",
        subsection="2.5",
        difficulty="1/5",
        context=CTX,
        items=_items([
            (r"The polarisation remainder $(a+b)^2-(a-b)^2=4ab$ holds for every real pair $(a,b)$.", True),
            (r"Likewise for $(x+y)^2-(x-y)^2=4xy$ with real $(x,y)$.", True),
            (r"Halving the cross term incorrectly gives $(p+q)^2-(p-q)^2=2(p^2+q^2)$ for real $(p,q)$ (false).", False),
            (r"For real $(m,n)$, subtracting the squares yields $(m+n)^2-(m-n)^2=4mn$.", True),
            (r"With real $(u,v)$, $(u+v)^2-(u-v)^2=4uv$.", True),
        ]),
        overview="Five polarisation remainders with one halved coefficient.",
    ),
    task(
        title="Warm-up: symmetric sums in three letters",
        subsection="2.5",
        difficulty="1/5",
        context=CTX,
        items=_items([
            (r"If $a+b+c=s$, then $a^2+b^2+c^2=s^2-2(ab+bc+ca)$ for every real triple.", True),
            (r"With $x+y+z=s$, one has $x^2+y^2+z^2=s^2-2(xy+yz+zx)$ for every real triple.", True),
            (r"Whenever $p+q+r=s$, the square sum is $p^2+q^2+r^2=s^2-2(pq+qr+rp)$.", True),
            (r"Replacing the symmetric sum by $abc$ makes $a^2+b^2+c^2=s^2-2abc$ false when $a+b+c=s$.", False),
            (r"For $m+n+t=s$, the identity $m^2+n^2+t^2=s^2-2(mn+nt+tm)$ holds for every real triple.", True),
        ]),
        overview="Five square-sum formulas in three letters with one swapped symmetric term.",
    ),
    task(
        title="Warm-up: mixed fraction and square",
        subsection="2.5",
        difficulty="2/5",
        context=CTX,
        items=_items([
            (r"For $x\neq 2$, cancelling gives $\dfrac{x^2-4}{x-2}=x+2$.", True),
            (r"Expanding a binomial: $(a+b)^2=a^2+2ab+b^2$ for every real pair $(a,b)$.", True),
            (r"For $t\neq 0$, index arithmetic gives $t^3/t=t^2$.", True),
            (r"For every real $k$, $|k-3|=3-k$ is false.", False),
            (r"For $p\neq 0$, combining powers yields $p^{-1}\cdot p^3=p^2$.", True),
        ]),
        overview="Five mixed one-step checks across fractions, squares, indices, and absolute value.",
    ),
    task(
        title="Warm-up: inequality from a square",
        subsection="2.5",
        difficulty="2/5",
        context=CTX,
        items=_items([
            (r"From $(a-b)^2\ge 0$, one gets $a^2+b^2\ge 2ab$ for every real pair $(a,b)$.", True),
            (r"Similarly, $x^2+y^2\ge xy$ for every real pair $(x,y)$.", True),
            (r"Nonnegativity of a square gives $(p-q)^2\ge 0$ for all real $(p,q)$.", True),
            (r"The reversed inequality $m^2+n^2\le 2mn$ fails for some real pair $(m,n)$.", False),
            (r"For every real $t$, the square $t^2$ is nonnegative.", True),
        ]),
        overview="Five inequalities equivalent to nonnegativity of a square.",
    ),
]

EASY_BY_SUB = {
    "2.1": EASY_21,
    "2.2": EASY_22,
    "2.3": EASY_23,
    "2.4": EASY_24,
    "2.5": EASY_25,
}


def easy_tasks_for(subsection: str) -> list[dict]:
    return list(EASY_BY_SUB[subsection])
