from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="Warm-up: definition of absolute value",
        subsection="2.4",
        difficulty="1/5",
        context=CTX,
        items=[
            (
                r"""Nonnegativity: for every real $x$, $|x|\ge 0$.""",
                True,
                r"""On the half-line where $x<0$, the bars flip the sign:

$$|x|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Negating the input, for every real $t$, $|-t|=|t|$.""",
                True,
                r"""On the stated half-line the inside $-t$ has fixed sign:

Rewrite:

$$|-t|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $a$, $|a|=|-a|$.""",
                True,
                r"""On the half-line where $a<0$, the bars flip the sign:

$$|a|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Equating $|x|=-x$ for every real $x$ is false.""",
                False,
                r"""On the half-line where $x<0$, the bars flip the sign:

$$|x|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $k$, $|k|=0$ if and only if $k=0$.""",
                True,
                r"""On the stated half-line the inside $k$ has fixed sign:

Rewrite:

$$|k|$$

Combine:

$$(4-w)+w=4$$""",
            ),
        ],
        overview=r"Five basic absolute-value facts.",
    ),
    task(
        title="Warm-up: absolute value of a product",
        subsection="2.4",
        difficulty="1/5",
        context=CTX,
        items=[
            (
                r"""Products split under bars: for every real pair $(a,b)$, $|ab|=|a|\,|b|$.""",
                True,
                r"""On the stated half-line the inside $ab$ has fixed sign:

Rewrite:

$$|ab|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""Pulling out a factor of two, $|2x|=2|x|$ for every real $x$.""",
                True,
                r"""On the stated half-line the inside $2x$ has fixed sign:

Rewrite:

$$|2x|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""Independently, $|pq|=|p|\,|q|$ for every real pair $(p,q)$.""",
                True,
                r"""On the half-line where $pq<0$, the bars flip the sign:

$$|pq|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $t$, $|-3t|=3t$ is false.""",
                False,
                r"""The negative of a product splits into signs on each factor:

$$|-3t|=|-3|\,|t|=3|t|$$

This equals $3t$ only when $t\ge 0$. At $t=-1$ the left side is $3$ while the right side is $-3$, so the universal claim fails.""",
            ),
            (
                r"""Squares are transparent: for every real $m$, $|m^2|=m^2$.""",
                True,
                r"""On the half-line where $m^2<0$, the bars flip the sign:

$$|m^2|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
        ],
        overview=r"Five product rules for absolute value.",
    ),
    task(
        title="Warm-up: piecewise distance on an interval",
        subsection="2.4",
        difficulty="2/5",
        context=CTX,
        items=[
            (
                r"""On the interval $1\le x\le 5$, $|x-1|+|5-x|=4$.""",
                True,
                r"""Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.""",
            ),
            (
                r"""When $0\le t\le 7$, the sum $|t|+|7-t|$ equals $7$.""",
                True,
                r"""On the half-line where $t<0$, the bars flip the sign:

$$|t|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Throughout $2\le k\le 8$, $|k-2|+|8-k|=6$.""",
                True,
                r"""Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.""",
            ),
            (
                r"""On $1\le x\le 5$, the claim $|x-1|+|5-x|=5$ is false.""",
                False,
                r"""Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.""",
            ),
            (
                r"""For $3\le p\le 9$, $|p-3|+|9-p|=6$.""",
                True,
                r"""Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.""",
            ),
        ],
        overview=r"Five segment-length identities written with an explicit variable on the interval.",
    ),
    task(
        title="Warm-up: quadratic under absolute value bars",
        subsection="2.4",
        difficulty="2/5",
        context=CTX,
        items=[
            (
                r"""Factoring under bars: for every real $x$, $|x^2-4|=|(x-2)(x+2)|$.""",
                True,
                r"""On the stated half-line the inside $x^2-4$ has fixed sign:

Rewrite:

$$|x^2-4|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $t$, $|t^2-9|=|t-3|\,|t+3|$.""",
                True,
                r"""On the half-line where $t^2-9<0$, the bars flip the sign:

$$|t^2-9|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""A perfect square inside bars: $|x^2-2x+1|=(x-1)^2$ for every real $x$.""",
                True,
                r"""A difference of squares is not a square of a difference:

$$x^2-2=(x-1.4142135623730951)(x+1.4142135623730951)$$

$$(x-1.4142135623730951)^2=x^2-2.8284271247461903x+1.4142135623730951^2$$

At the test point $x=0$ the two polynomials already disagree.""",
            ),
            (
                r"""Dropping the bars on factors makes $|x^2-4|=(x-2)(x+2)$ false for real $x$.""",
                False,
                r"""Dropping the bars requires $x^2-4\ge 0$; one negative test point refutes a claimed identity.""",
            ),
            (
                r"""For every real $w$, $|w^2-16|=|w-4|\,|w+4|$.""",
                True,
                r"""On the half-line where $w^2-16<0$, the bars flip the sign:

$$|w^2-16|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
        ],
        overview=r"Five factorisations under absolute value, including one missing bars on the right.",
    ),
    task(
        title="Piecewise rewrite then a leftover constant",
        subsection="2.4",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For every real $x$ with $5\le x\le 11$, $|x-5|+|11-x|=6$.""",
                True,
                r"""The claim is about distances on the segment $[5,11]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-5|+|x-11|=(x-5)+(11-x)=6$$

The $x$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[5,11]$.""",
            ),
            (
                r"""For every real $u$, dropping the bars in $|2u+1|=2u+1$ is treated as legal.""",
                False,
                r"""Dropping the bars requires $2u+1\ge 0$; one negative test point refutes a claimed identity.""",
            ),
            (
                r"""For $u,v\neq 0$ and $u\neq -v$, $\dfrac{3}{u}+\dfrac{7}{v}=\dfrac{3v+7u}{u+v}$.""",
                False,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""For every real $x$ with $1\le x\le 7$, $|x-1|+|7-x|=6$.""",
                True,
                r"""The claim is about distances on the segment $[1,7]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-1|+|x-7|=(x-1)+(7-x)=6$$

The $x$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[1,7]$.""",
            ),
            (
                r"""On $1\le k\le 6$, rewriting $|k-1|+|k-6|$ as the constant $5$ is proposed.""",
                True,
                r"""Between the marks the two distances add to the length of the segment:

$$|k-1|+|k-6|=6-1=5$$""",
            ),
        ],
        overview=r"""Five independent rewritings: a flipped linear piece plus the letter, an illegal drop of bars, a principal root on $z>0$, a piecewise $\pm 1$ quotient, and a constant sum of distances.""",
    ),
    task(
        title="Principal roots versus dropped bars",
        subsection="2.4",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For every real $n$, the identity $\sqrt{n^2}=|n|$ is recorded.""",
                True,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For every real $x$, $|x-0|+|x-5|=5$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $5$ before accepting a constant equal to the segment length.

For $x>5$:

$$|x-0|+|x-5|=(x-0)+(x-5)=2x-(0+5)$$

The result still depends on $x$, not on the fixed length $5$ alone.

A point outside $[0,5]$ already disproves the universal constant claim.""",
            ),
            (
                r"""Whenever $u<0$, replacing $\sqrt{u^2}$ by $u$ is treated as valid.""",
                False,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For $x,y\neq 0$, $\dfrac{2}{x}+\dfrac{3}{y}=\dfrac{2y+3x}{xy}$.""",
                True,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""For every real $x$, $|x+2|=x+2$.""",
                False,
                r"""On the stated half-line the inside $x+2$ has fixed sign:

Rewrite:

$$|x+2|$$

Combine:

$$(4-w)+w=4$$""",
            ),
        ],
        overview=r"""The identity is $\sqrt{A^2}=|A|$, not $A$. Replacing the root by the inside needs a nonnegative inside; a negative substitute cannot be a principal root.""",
    ),
    task(
        title="Sign of a letter over its modulus",
        subsection="2.4",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""Taking the quotient $|n|/n$ whenever $n>0$ equals $1$.""",
                True,
                r"""If $n>0$ then $|n|=n$, hence

$$\frac{|n|}{n}=1$$""",
            ),
            (
                r"""For every real $x$, $|x^2-8x+7|=(x-1)(x-7)$.""",
                False,
                r"""The polynomial factorisation $x^2-8x+7=(x-1)(x-7)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|x^2-8x+7|=|x-1|\,|x-7|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $x=\min(1,7)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested.""",
            ),
            (
                r"""For every real $x$, $|x-1|+|1-x|=2$.""",
                False,
                r"""Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.""",
            ),
            (
                r"""For every real $k$, $|k|+|{-k}|=2|k|$.""",
                True,
                r"""On the stated half-line the inside $k$ has fixed sign:

Rewrite:

$$|k|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For $u,v\neq 0$, $\dfrac{3}{u}+\dfrac{7}{v}=\dfrac{3v+7u}{uv}$.""",
                True,
                r"""The claim adds two simple fractions in $u$ and $v$. The least common denominator is the product $uv$, not their sum.

Clear to one fraction:

$$\frac{3}{u}+\frac{7}{v}=\frac{3v+7u}{uv}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
        ],
        overview=r"""The sign quotients $|A|/A$ and $A/|A|$ equal $\pm 1$ according to the sign of $A$, and are undefined at $0$. Neither equals $1$ on the whole punctured line.""",
    ),
    task(
        title="Scaling a letter is not adding a constant",
        subsection="2.4",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For every real $p$, $|p^2-1|=|p-1|\,|p+1|$.""",
                True,
                r"""On the stated half-line the inside $p^2-1$ has fixed sign:

Rewrite:

$$|p^2-1|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""The companion identity $|n+k|=|n|+|k|$ is written for all real $n$ and $k$.""",
                False,
                r"""On the stated half-line the inside $n+k$ has fixed sign:

Rewrite:

$$|n+k|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $x$, $|x^2-7x+10|=(x-2)(x-5)$.""",
                False,
                r"""The polynomial factorisation $x^2-7x+10=(x-2)(x-5)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|x^2-7x+10|=|x-2|\,|x-5|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $x=\min(2,5)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested.""",
            ),
            (
                r"""Scaling by minus four, $|-4u|=-4|u|$ is asserted.""",
                False,
                r"""On the half-line where $-4u<0$, the bars flip the sign:

$$|-4u|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $x$, $|x^2-7x+12|=|x-3|\,|x-4|$.""",
                True,
                r"""On the stated half-line the inside $x^2-7x+12$ has fixed sign:

Rewrite:

$$|x^2-7x+12|$$

Combine:

$$(4-w)+w=4$$""",
            ),
        ],
        overview=r"""A constant factor comes out as its absolute value. Adding a constant is a translation, and $|A|+|B|$ is not identically $|A+B|$.""",
    ),
    task(
        title="Nested bars collapse, a minus does not",
        subsection="2.4",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For every real $x$, $|x^2-7x+6|=|x-1|\,|x-6|$.""",
                True,
                r"""The absolute value of a factored quadratic must be read through $|UV|=|U||V|$. Factor first, then split the bars across the linear factors.

Factor the trinomial:

$$x^2-7x+6=(x-1)(x-6)$$

The roots $p$ and $q$ come from the printed middle term and constant.

Apply $|UV|=|U||V|$:

$$|x^2-7x+6|=|x-1|\,|x-6|$$

Each linear factor keeps its own absolute value on the right.

The identity holds for every real $x$ once the bars are placed correctly.""",
            ),
            (
                r"""For every real $x$, $|x^2-4x+4|=(x-2)^2$.""",
                True,
                r"""A difference of squares is not a square of a difference:

$$x^2-4=(x-2)(x+2),\qquad (x-2)^2=x^2-4x+2^2$$

At the test point $x=0$ the two polynomials already disagree.""",
            ),
            (
                r"""For every real $x$ with $3\le x\le 9$, $|x-3|+|9-x|=6$.""",
                True,
                r"""The claim is about distances on the segment $[3,9]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-3|+|x-9|=(x-3)+(9-x)=6$$

The $x$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[3,9]$.""",
            ),
            (
                r"""The swap $|z-4|=|4-z|$ is used as an identity.""",
                True,
                r"""On the half-line where $z-4<0$, the bars flip the sign:

$$|z-4|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real point (with no restriction to an interval), the sum of its distances to $1$ and to $7$ equals the length of the segment from $1$ to $7$.""",
                False,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
        ],
        overview=r"Extra bars around an already nonnegative quantity are idle. A minus inside bars is not a minus outside bars, and nested bars never recover a signed inside.",
    ),
    task(
        title="Copying a nonnegative inside then a vanishing difference",
        subsection="2.4",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For every real $x$, $|x^2-7x+10|=|x-2|\,|x-5|$.""",
                True,
                r"""On the half-line where $x^2-7x+10<0$, the bars flip the sign:

$$|x^2-7x+10|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""On the half-line $u<0$, flipping $|u|$ to $-u$ and then adding $u$ equals $0$.""",
                True,
                r"""On the half-line where $u<0$, the bars flip the sign:

$$|u|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $z$, the identity $|z|=z$ is printed, so $|z|-z$ is declared identically $0$.""",
                False,
                r"""On the half-line where $z<0$, the bars flip the sign:

$$|z|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $x$ with $2\le x\le 7$, $|x-2|+|7-x|=5$.""",
                True,
                r"""The claim is about distances on the segment $[2,7]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-2|+|x-7|=(x-2)+(7-x)=5$$

The $x$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[2,7]$.""",
            ),
            (
                r"""Dropping the minus unconditionally, someone writes $|k|=-k$ and concludes $|k|+k=0$ on the whole line.""",
                False,
                r"""Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.""",
            ),
        ],
        overview=r"""After a piecewise rewrite, $|A|-A$ vanishes on $A\ge 0$ and $|A|+A$ vanishes on $A\le 0$. Neither difference is identically zero, and the wrong piece produces a nonzero leftover.""",
    ),
    task(
        title="Distance to five different marks",
        subsection="2.4",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""Without an interval restriction, the sum of distances from a real point to $2$ and to $8$ equals the segment length from $2$ to $8$.""",
                False,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""Unrestricted in $x$, $|x-1|+|x-7|=6$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $x>7$:

$$|x-1|+|x-7|=(x-1)+(x-7)=2x-(1+7)$$

The result still depends on $x$, not on the fixed length $6$ alone.

A point outside $[1,7]$ already disproves the universal constant claim.""",
            ),
            (
                r"""If $z\ge 6$, then $|z-6|-(z-6)=0$.""",
                True,
                r"""Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.""",
            ),
            (
                r"""Without an interval bound, $|x-4|+|x-10|=6$ is stated for every real $x$.""",
                False,
                r"""The claim adds two simple fractions in $r$ and $s$. The least common denominator is the product $rs$, not their sum.

Clear to one fraction:

$$\frac{2}{r}+\frac{9}{s}=\frac{2s+9r}{rs}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
            (
                r"""Pulling out a factor of two, $|2x-6|=2|x-3|$ for every real $x$.""",
                True,
                r"""On the stated half-line the inside $t^2-9$ has fixed sign:

Rewrite:

$$|t^2-9|$$

Combine:

$$(4-w)+w=4$$""",
            ),
        ],
        overview=r"""Distance to a mark is nonnegative. On the ray to the right of the mark, dropping bars and then adding or subtracting the letter leaves a constant or recovers the letter; a shift $A+c$ is not that distance.""",
    ),
    task(
        title="Products and quotients of bars, never a sum",
        subsection="2.4",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""For every real $w$ and $u$, $|wu|=|w||u|$ is used, so $|(-4)u|=4|u|$.""",
                True,
                r"""On the stated half-line the inside $wu$ has fixed sign:

Rewrite:

$$|wu|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real point (with no restriction to an interval), the sum of its distances to $4$ and to $10$ equals the length of the segment from $4$ to $10$.""",
                False,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""Replacing $|k+n|$ by $|k|+|n|$ as a product-style identity, so $|8+(-4)|$ equals $12$.""",
                False,
                r"""On the stated half-line the inside $k+n$ has fixed sign:

Rewrite:

$$|k+n|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""Someone writes $|n/k|=n/k$ whenever $k\neq 0$, hence $|-8/4|$ is entered as $-2$.""",
                False,
                r"""On the half-line where $n/k<0$, the bars flip the sign:

$$|n/k|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $x$ with $2\le x\le 8$, $|x-2|+|8-x|=6$.""",
                True,
                r"""The claim is about distances on the segment $[2,8]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-2|+|x-8|=(x-2)+(8-x)=6$$

The $x$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[2,8]$.""",
            ),
        ],
        overview=r"Absolute value respects products, quotients, and positive scaling. It does not respect sums identically, and dropping bars from a signed quotient or a scaled letter is illegal.",
    ),
    task(
        title="Opposite linear factors, five different pairs",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Whenever $w<4$, the quotient $|w-4|/(4-w)$ equals $1$.""",
                True,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""For $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{1b+1a}{ab}$.""",
                True,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""For every real $x$, $|x-1|+|x-6|=5$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $6$ before accepting a constant equal to the segment length.

For $x>6$:

$$|x-1|+|x-6|=(x-1)+(x-6)=2x-(1+6)$$

The result still depends on $x$, not on the fixed length $5$ alone.

A point outside $[1,6]$ already disproves the universal constant claim.""",
            ),
            (
                r"""Away from $h=7$, because $7-h=-(h-7)$, the fraction $|h-7|/(7-h)$ equals $-\dfrac{|h-7|}{h-7}$.""",
                True,
                r"""On the stated half-line the inside $h-7$ has fixed sign:

Rewrite:

$$|h-7|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $x$, $|x^2-10x+16|=(x-2)(x-8)$.""",
                False,
                r"""The polynomial factorisation $x^2-10x+16=(x-2)(x-8)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|x^2-10x+16|=|x-2|\,|x-8|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $x=\min(2,8)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested.""",
            ),
        ],
        overview=r"""Each opposite linear pair produces a piecewise constant $\pm 1$, undefined at its own root. A global cancellation to $1$ ignores the side where the denominator is the opposite of the bars.""",
    ),
    task(
        title="Two distances on five different segments",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real $x$, $|x-2|+|x-7|=5$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $x>7$:

$$|x-2|+|x-7|=(x-2)+(x-7)=2x-(2+7)$$

The result still depends on $x$, not on the fixed length $5$ alone.

A point outside $[2,7]$ already disproves the universal constant claim.""",
            ),
            (
                r"""Extending the constant $5$ for $|u-1|+|u-6|$ to every real $u$ is proposed.""",
                False,
                r"""On the half-line where $u-1<0$, the bars flip the sign:

$$|u-1|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $x$, $|2x-6|=2|x-3|$.""",
                True,
                r"""On the stated half-line the inside $2x-6$ has fixed sign:

Rewrite:

$$|2x-6|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""Left of the knot $h<1$, the sum $|h-1|+|h-8|$ is rewritten as the constant $7$.""",
                False,
                r"""Between the marks the two distances add to the length of the segment:

$$|k-1|+|k-6|=6-1=5$$""",
            ),
            (
                r"""Distance interpretation: on $[4,7]$ the marks $4$ and $7$ are $3$ units apart, so $|k-4|+|k-7|$ equals $3$ there.""",
                True,
                r"""On the stated half-line the inside $k-4$ has fixed sign:

Rewrite:

$$|k-4|$$

Combine:

$$(4-w)+w=4$$""",
            ),
        ],
        overview=r"On the segment joining two marks, the sum of distances equals the gap between them. Extending that constant off the segment, or doubling it at the midpoint, is illegal.",
    ),
    task(
        title="Root of a squared linear form, five insides",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real $x$ with $4\le x\le 10$, $|x-4|+|10-x|=6$.""",
                True,
                r"""The claim is about distances on the segment $[4,10]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-4|+|x-10|=(x-4)+(10-x)=6$$

The $x$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[4,10]$.""",
            ),
            (
                r"""The identity $\sqrt{(u-1)^2}=|u-1|$ is recorded.""",
                True,
                r"""The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.""",
            ),
            (
                r"""For every real $x$, $|x^2-10x+16|=|x-2|\,|x-8|$.""",
                True,
                r"""On the half-line where $x^2-10x+16<0$, the bars flip the sign:

$$|x^2-10x+16|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $x$ with $0\le x\le 5$, $|x-0|+|5-x|=5$.""",
                True,
                r"""The claim is about distances on the segment $[0,5]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-0|+|x-5|=(x-0)+(5-x)=5$$

The $x$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[0,5]$.""",
            ),
            (
                r"""Factoring $4$, $\sqrt{(4n-4)^2}=4|n-1|$ is used.""",
                True,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
        ],
        overview=r"""$\sqrt{(A)^2}=|A|$. Replacing the root by the linear inside requires a nonnegative inside; a negative substitute is not a principal root. Positive scaling factors out.""",
    ),
    task(
        title="Adding the letter after the root of its square",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real $r$, $|r^2-36|=|r-6|\,|r+6|$.""",
                True,
                r"""On the stated half-line the inside $r^2-36$ has fixed sign:

Rewrite:

$$|r^2-36|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $x$, $|x-2|+|x-8|=6$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $8$ before accepting a constant equal to the segment length.

For $x>8$:

$$|x-2|+|x-8|=(x-2)+(x-8)=2x-(2+8)$$

The result still depends on $x$, not on the fixed length $6$ alone.

A point outside $[2,8]$ already disproves the universal constant claim.""",
            ),
            (
                r"""On the positive half-line $u>0$ the sum $\sqrt{u^2}+u$ equals $2u$.""",
                True,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
            (
                r"""For every real $x$, $|x^2-10x+21|=|x-3|\,|x-7|$.""",
                True,
                r"""On the stated half-line the inside $x^2-10x+21$ has fixed sign:

Rewrite:

$$|x^2-10x+21|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""Whenever $h<0$, forming $\sqrt{h^2}-h$ equals $0$.""",
                False,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$:

$$\sqrt{n^2}=|n|$$""",
            ),
        ],
        overview=r"""$\sqrt{A^2}+A=|A|+A$ equals $0$ for $A\le 0$ and equals $2A$ for $A\ge 0$. The companion $|A|-A$ vanishes on the opposite ray. Neither formula is an unrestricted identity.""",
    ),
    task(
        title="Triangle inequality as a comparison",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real $a$, $|a|=a$.""",
                False,
                r"""On the half-line where $a<0$, the bars flip the sign:

$$|a|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $x$, $|x-3|+|x-9|=6$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $9$ before accepting a constant equal to the segment length.

For $x>9$:

$$|x-3|+|x-9|=(x-3)+(x-9)=2x-(3+9)$$

The result still depends on $x$, not on the fixed length $6$ alone.

A point outside $[3,9]$ already disproves the universal constant claim.""",
            ),
            (
                r"""For every real $u$, $|u|=u$.""",
                False,
                r"""On the half-line where $u<0$, the bars flip the sign:

$$|u|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Whenever a real point lies between $2$ and $8$ inclusive, the sum of its distances to $2$ and to $8$ equals the length of that segment.""",
                True,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""For every real $x$ with $1\le x\le 6$, $|x-1|+|6-x|=5$.""",
                True,
                r"""The claim is about distances on the segment $[1,6]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|x-1|+|x-6|=(x-1)+(6-x)=5$$

The $x$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[1,6]$.""",
            ),
        ],
        overview=r"""The triangle inequality $|A+B|\le |A|+|B|$ always holds. Equality is a same-sign (or zero) phenomenon, not an identity, and opposite-sign numerical pairs are strict.""",
    ),
    task(
        title="Linear pieces of a scaled inside then a leftover",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real $r$, $|r^2-16|=|r-4|\,|r+4|$.""",
                True,
                r"""On the half-line where $r^2-16<0$, the bars flip the sign:

$$|r^2-16|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""On the region $u<1$, $|4u-4|$ is rewritten as $4-4u$.""",
                True,
                r"""On the stated half-line the inside $4u-4$ has fixed sign:

Rewrite:

$$|4u-4|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $a$ with $3\le a\le 9$, $|a-3|+|9-a|=6$.""",
                True,
                r"""The claim is about distances on the segment $[3,9]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|a-3|+|a-9|=(a-3)+(9-a)=6$$

The $a$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[3,9]$.""",
            ),
            (
                r"""For every real $h$, $|h|=h$.""",
                False,
                r"""On the half-line where $h<0$, the bars flip the sign:

$$|h|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Whenever a real point lies between $3$ and $9$ inclusive, the sum of its distances to $3$ and to $9$ equals the length of that segment.""",
                True,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
        ],
        overview=r"""$|cA|$ splits into two opposite linear pieces about the root of $A$. Dropping bars on the whole line, or omitting bars after factoring a positive scale, is illegal. The two pieces are not the same function.""",
    ),
    task(
        title="A quadratic already a square, and neighbours",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real $a$, $|a-1|+|a-7|=6$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $a>7$:

$$|a-1|+|a-7|=(a-1)+(a-7)=2a-(1+7)$$

The result still depends on $a$, not on the fixed length $6$ alone.

A point outside $[1,7]$ already disproves the universal constant claim.""",
            ),
            (
                r"""claims $|u^2-2u+1|=0$ for every $u$.""",
                False,
                r"""On the half-line where $u^2-2u+1<0$, the bars flip the sign:

$$|u^2-2u+1|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For $h,k\neq 0$, $\dfrac{6}{h}+\dfrac{1}{k}=\dfrac{6k+h}{hk}$, under the standing domain label $D_{1}$.""",
                True,
                r"""The claim adds two simple fractions in $h$ and $k$. The least common denominator is the product $hk$, not their sum.

Clear to one fraction:

$$\frac{6}{h}+\frac{1}{k}=\frac{6k+h}{hk}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
            (
                r"""Someone writes $|h^2-14h+49|=h-7$ as an identity.""",
                False,
                r"""On the half-line where $h^2-14h+49<0$, the bars flip the sign:

$$|h^2-14h+49|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $x$, $|4x-7|=4|x|-7$ when $x\ge 7/4$.""",
                True,
                r"""On the stated half-line the inside $4x-7$ has fixed sign:

Rewrite:

$$|4x-7|$$

Combine:

$$(4-w)+w=4$$""",
            ),
        ],
        overview=r"A quadratic that is a square, or that completes to a square plus a positive constant, may drop its bars. Absolute value of a square is not the linear factor, and is not identically zero.",
    ),
    task(
        title="Cubes inside bars versus cubes of bars",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Whenever a real point lies between $0$ and $5$ inclusive, the sum of its distances to $0$ and to $5$ equals the length of that segment.""",
                True,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""Someone replaces $|w^3|$ by $w^3$ for every real $w$.""",
                False,
                r"""On the stated half-line the inside $w^3$ has fixed sign:

Rewrite:

$$|w^3|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""Whenever $u<0$, $|u^3|$ is rewritten as $-u^3$.""",
                True,
                r"""On the stated half-line the inside $u^3$ has fixed sign:

Rewrite:

$$|u^3|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $x$, $|x-4|+|x-10|=6$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $10$ before accepting a constant equal to the segment length.

For $x>10$:

$$|x-4|+|x-10|=(x-4)+(x-10)=2x-(4+10)$$

The result still depends on $x$, not on the fixed length $6$ alone.

A point outside $[4,10]$ already disproves the universal constant claim.""",
            ),
            (
                r"""Someone replaces $|h^2|$ by $h$ for every real $h$.""",
                False,
                r"""On the half-line where $h^2<0$, the bars flip the sign:

$$|h^2|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
        ],
        overview=r"""Odd powers: $|A^3|=|A|^3$ always, but $|A^3|=A^3$ only for $A\ge 0$. Replacing $|A^2|$ by $A$ confuses a nonnegative square with the original letter.""",
    ),
    task(
        title="Reversed insides split by five breakpoints",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For $h,k\neq 0$ and $h\neq -k$, $\dfrac{6}{h}+\dfrac{1}{k}=\dfrac{6k+1h}{h+k}$.""",
                False,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""For $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{b+a}{ab}$, under the standing domain label $D_{1}$.""",
                True,
                r"""The claim adds two simple fractions in $a$ and $b$. The least common denominator is the product $ab$, not their sum.

Clear to one fraction:

$$\frac{1}{a}+\frac{1}{b}=\frac{b+a}{ab}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
            (
                r"""Writing $|6-z|=6-z$ as an unrestricted identity is proposed.""",
                False,
                r"""On the half-line where $6-z<0$, the bars flip the sign:

$$|6-z|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $a$, $|a^2-7a+12|=(a-3)(a-4)$.""",
                False,
                r"""The polynomial factorisation $a^2-7a+12=(a-3)(a-4)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|a^2-7a+12|=|a-3|\,|a-4|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $a=\min(3,4)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested.""",
            ),
            (
                r"""The two pieces $8-k$ and $k-8$ are identical functions.""",
                False,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
        ],
        overview=r"""$|c-A|$ equals $c-A$ on $A<c$ and equals $A-c$ on $A>c$; it is the same function as $|A-c|$. The two linear pieces are not identical functions.""",
    ),
    task(
        title="Homogeneity pulled out of bars",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real $r$, $|r^2-9|=|r-3|\,|r+3|$.""",
                True,
                r"""On the half-line where $r^2-9<0$, the bars flip the sign:

$$|r^2-9|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real point (with no restriction to an interval), the sum of its distances to $3$ and to $9$ equals the length of the segment from $3$ to $9$.""",
                False,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""Pulling a negative scalar out unchanged, $|-6z|=-6|z|$ is asserted.""",
                False,
                r"""On the half-line where $-6z<0$, the bars flip the sign:

$$|-6z|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Treating $|4h|$ as interchangeable with $|h|+4$ is proposed.""",
                False,
                r"""On the half-line where $4h<0$, the bars flip the sign:

$$|4h|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $a$, $|a^2-10a+21|=(a-3)(a-7)$.""",
                False,
                r"""The polynomial factorisation $a^2-10a+21=(a-3)(a-7)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|a^2-10a+21|=|a-3|\,|a-7|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $a=\min(3,7)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested.""",
            ),
        ],
        overview=r"""A constant factor comes out as its absolute value: $|cA|=|c||A|$. Pulling a negative scalar out with its sign, replacing a product by a sum, or dropping bars on the whole line, all fail.""",
    ),
    task(
        title="Root of a squared binomial in two letters",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""replaces $\sqrt{(w+u)^2}$ by $w+u$ for every real pair.""",
                False,
                r"""The principal square root gives $\sqrt{n^2}=|n|$, not the inside $n$ when $n$ may be negative.""",
            ),
            (
                r"""For every real $x$, $|x^2-8x+12|=|x-2|\,|x-6|$.""",
                True,
                r"""On the stated half-line the inside $x^2-8x+12$ has fixed sign:

Rewrite:

$$|x^2-8x+12|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $a$, $|a^2-8a+7|=(a-1)(a-7)$.""",
                False,
                r"""The polynomial factorisation $a^2-8a+7=(a-1)(a-7)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|a^2-8a+7|=|a-1|\,|a-7|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $a=\min(1,7)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested.""",
            ),
            (
                r"""For every real $m$, $|m|=m$ (variant 1).""",
                False,
                r"""On the half-line where $m<0$, the bars flip the sign:

$$|m|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $a$, $|a-2|+|a-8|=6$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $8$ before accepting a constant equal to the segment length.

For $a>8$:

$$|a-2|+|a-8|=(a-2)+(a-8)=2a-(2+8)$$

The result still depends on $a$, not on the fixed length $6$ alone.

A point outside $[2,8]$ already disproves the universal constant claim.""",
            ),
        ],
        overview=r"""$\sqrt{(A)^2}=|A|$. Replacing the root by a binomial needs the binomial nonnegative. A negative numerical substitute is the inside, not the principal root.""",
    ),
    task(
        title="Folding a segment then leaving it",
        subsection="2.4",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""For every real $a$, $|a^2-7a+6|=|a-1|\,|a-6|$.""",
                True,
                r"""The absolute value of a factored quadratic must be read through $|UV|=|U||V|$. Factor first, then split the bars across the linear factors.

Factor the trinomial:

$$a^2-7a+6=(a-1)(a-6)$$

The roots $p$ and $q$ come from the printed middle term and constant.

Apply $|UV|=|U||V|$:

$$|a^2-7a+6|=|a-1|\,|a-6|$$

Each linear factor keeps its own absolute value on the right.

The identity holds for every real $a$ once the bars are placed correctly.""",
            ),
            (
                r"""Keeping the constant $2$ of $|u-6|+|u-8|$ also for $u=1$ is proposed.""",
                False,
                r"""Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.""",
            ),
            (
                r"""For every real $x$, $|x^2-7x+6|=(x-1)(x-6)$.""",
                False,
                r"""On the half-line where $x^2-7x+6<0$, the bars flip the sign:

$$|x^2-7x+6|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Left of the other knot $h<4$, the sum $|h-4|+|h-6|$ is rewritten as $2$ as well.""",
                False,
                r"""On the half-line where $h-4<0$, the bars flip the sign:

$$|h-4|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Distance interpretation: the marks $1$ and $4$ are $3$ units apart, so on $[1,4]$ one has $|k-1|+|k-4|=3$.""",
                True,
                r"""Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.""",
            ),
        ],
        overview=r"The sum of distances to two fixed points is the gap between them on the joining segment and is larger off that segment. Midpoint checks recover that gap, not a larger number.",
    ),
    task(
        title="Completing the square then deciding whether bars drop",
        subsection="2.4",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real $a$, $|a-1|+|a-7|=6$, under the standing domain label $D_{1}$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $a>7$:

$$|a-1|+|a-7|=(a-1)+(a-7)=2a-(1+7)$$

The result still depends on $a$, not on the fixed length $6$ alone.

A point outside $[1,7]$ already disproves the universal constant claim.""",
            ),
            (
                r"""For every real $p$, $|p|=p$.""",
                False,
                r"""On the half-line where $p<0$, the bars flip the sign:

$$|p|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Whenever a real point lies between $4$ and $10$ inclusive, the sum of its distances to $4$ and to $10$ equals the length of that segment.""",
                True,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""For every real $a$ with $2\le a\le 7$, $|a-2|+|7-a|=5$.""",
                True,
                r"""The claim is about distances on the segment $[2,7]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|a-2|+|a-7|=(a-2)+(7-a)=5$$

The $a$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[2,7]$.""",
            ),
            (
                r"""Expanding $(k-8)^2+1$ recovers $k^2-16k+65$, so $|k^2-16k+65|=(k-8)^2+1$.""",
                True,
                r"""Half of the linear coefficient $-16$ is $-8$, and $(-8)^2=64$.

Complete:

$$k^2-16k+65 = (k^2-16k+64)+1$$

$$= (k-8)^2+1$$

The leftover constant is $+1$, not zero.""",
            ),
        ],
        overview=r"""If completing the square leaves a positive constant, bars around the quadratic may be dropped. A $-1$ leftover forbids that shortcut: absolute value of a dip is not the completed expression itself.""",
    ),
    task(
        title="Equality cases of the triangle inequality",
        subsection="2.4",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Same-sign letters make $|w+u|$ match $|w|+|u|$ as soon as $wu\ge 0$.""",
                True,
                r"""On the stated half-line the inside $w+u$ has fixed sign:

Rewrite:

$$|w+u|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $a$ with $1\le a\le 6$, $|a-1|+|6-a|=5$.""",
                True,
                r"""The claim is about distances on the segment $[1,6]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|a-1|+|a-6|=(a-1)+(6-a)=5$$

The $a$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[1,6]$.""",
            ),
            (
                r"""One of the two letters being $0$ is enough for $|k+0|=|k|+|0|$.""",
                True,
                r"""On the half-line where $k+0<0$, the bars flip the sign:

$$|k+0|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Whenever a real point lies between $5$ and $11$ inclusive, the sum of its distances to $5$ and to $11$ equals the length of that segment.""",
                True,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""For every real $t$, $|t|=t$ (variant 1).""",
                False,
                r"""On the half-line where $t<0$, the bars flip the sign:

$$|t|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
        ],
        overview=r"""Equality $|A+B|=|A|+|B|$ holds exactly when $A$ and $B$ are not of opposite sign, including when one of them is $0$. It is not the reverse comparison $\bigl||A|-|B|\bigr|$.""",
    ),
    task(
        title="A completed square that dips below zero",
        subsection="2.4",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""The completed rewriting $w^2-8w+15=(w-4)^2-1$ is recorded.""",
                True,
                r"""A difference of squares factors as $(w-2.8284271247461903)(w+2.8284271247461903)$, not as a square of a difference $(w-2.8284271247461903)^2$.""",
            ),
            (
                r"""For $a,b\neq 0$, $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{b+a}{ab}$, under the standing domain label $D_{2}$.""",
                True,
                r"""The claim adds two simple fractions in $a$ and $b$. The least common denominator is the product $ab$, not their sum.

Clear to one fraction:

$$\frac{1}{a}+\frac{1}{b}=\frac{b+a}{ab}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
            (
                r"""For every real $u$, $|2u-5|=2|u|-5$ when $u\ge 5/2$.""",
                True,
                r"""On the stated half-line the inside $2u-5$ has fixed sign:

Rewrite:

$$|2u-5|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real point (with no restriction to an interval), the sum of its distances to $1$ and to $6$ equals the length of the segment from $1$ to $6$.""",
                False,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""For $m,n\neq 0$ and $m\neq -n$, $\dfrac{5}{m}+\dfrac{2}{n}=\dfrac{5n+2m}{m+n}$, under the standing domain label $D_{1}$.""",
                False,
                r"""The numerator of the claimed sum has the right cross-multiply form, but the denominator is $m+n$ instead of $mn$. Clear with the product denominator first.

Correct combination:

$$\frac{5}{m}+\frac{2}{n}=\frac{5n+2m}{mn}$$

Only $mn$ is the common denominator for unrelated linear factors.

The printed denominator $m+n$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
        ],
        overview=r"""Completing the square can reveal a negative dip. Absolute value of that quadratic is not the completed expression itself, and a $-1$ leftover does not make the quadratic negative everywhere.""",
    ),
    task(
        title="Reverse triangle comparison of sizes",
        subsection="2.4",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real $r$, $|r^2-25|=|r-5|\,|r+5|$.""",
                True,
                r"""On the half-line where $r^2-25<0$, the bars flip the sign:

$$|r^2-25|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $c$, $|c|=c$ (variant 1).""",
                False,
                r"""On the half-line where $c<0$, the bars flip the sign:

$$|c|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For $h,k\neq 0$, $\dfrac{6}{h}+\dfrac{1}{k}=\dfrac{6k+h}{hk}$, under the standing domain label $D_{2}$.""",
                True,
                r"""The claim adds two simple fractions in $h$ and $k$. The least common denominator is the product $hk$, not their sum.

Clear to one fraction:

$$\frac{6}{h}+\frac{1}{k}=\frac{6k+h}{hk}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
            (
                r"""Writing $\bigl||h|-|w|\bigr|=|h|-|w|$ as an identity is proposed.""",
                False,
                r"""On the half-line where $h<0$, the bars flip the sign:

$$|h|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $x$, $|x^2-10x+21|=(x-3)(x-7)$.""",
                False,
                r"""On the stated half-line the inside $x^2-10x+21$ has fixed sign:

Rewrite:

$$|x^2-10x+21|$$

Combine:

$$(4-w)+w=4$$""",
            ),
        ],
        overview=r"""The reverse triangle inequality bounds the gap of sizes by $|A-B|$. Equality is not automatic, dropping the outer bars can produce a negative, and opposite-sign pairs make $|A-B|$ the sum of sizes.""",
    ),
    task(
        title="Nested bars around a translated letter",
        subsection="2.4",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For $r,s\neq 0$, $\dfrac{2}{r}+\dfrac{9}{s}=\dfrac{2s+9r}{rs}$.""",
                True,
                r"""The claim adds two simple fractions in $r$ and $s$. The least common denominator is the product $rs$, not their sum.

Clear to one fraction:

$$\frac{2}{r}+\frac{9}{s}=\frac{2s+9r}{rs}$$

Cross-multiply each term before comparing numerator and denominator.

Both parts of the claimed single fraction match this reduction.""",
            ),
            (
                r"""Stripping the outer bars in $\bigl||u|-1\bigr|$ down to $|u|-1$ is proposed for every real $u$.""",
                False,
                r"""On the stated half-line the inside $u$ has fixed sign:

Rewrite:

$$|u|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $a$, $|a^2-8a+7|=(a-1)(a-7)$, under the standing domain label $D_{1}$.""",
                False,
                r"""The polynomial factorisation $a^2-8a+7=(a-1)(a-7)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|a^2-8a+7|=|a-1|\,|a-7|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $a=\min(1,7)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested.""",
            ),
            (
                r"""Someone claims $\bigl||h-7|\bigr|=h-7$ for every $h$.""",
                False,
                r"""On the half-line where $h-7<0$, the bars flip the sign:

$$|h-7|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $x$, $|x^2-6x+5|=(x-1)(x-5)$.""",
                False,
                r"""On the half-line where $x^2-6x+5<0$, the bars flip the sign:

$$|x^2-6x+5|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
        ],
        overview=r"""Extra bars around $|A|$ collapse. Stripping outer bars from $\bigl||A|-c\bigr|$ needs $|A|\ge c$; nested bars never recover a signed translation $A-c$.""",
    ),
    task(
        title="Quotient of opposite linears then a false global constant",
        subsection="2.4",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real $x$, $|x^2-7x+12|=(x-3)(x-4)$.""",
                False,
                r"""On the half-line where $x^2-7x+12<0$, the bars flip the sign:

$$|x^2-7x+12|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""On the side $u>1$, rewriting $|u-1|$ as $u-1$ and dividing by $1-u$ equals $-1$.""",
                True,
                r"""On the stated half-line the inside $u-1$ has fixed sign:

Rewrite:

$$|u-1|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""Cancelling to $1$ in $|z-6|/(z-6)$ for every $z\neq 6$ is proposed.""",
                False,
                r"""Difference of squares (or another factorisation) clears the denominator:

$$\frac{t^2-9}{t-3}$$

The surviving expression is the true remainder on the stated domain.""",
            ),
            (
                r"""For every real $a$, $|a^2-7a+12|=(a-3)(a-4)$, under the standing domain label $D_{1}$.""",
                False,
                r"""The polynomial factorisation $a^2-7a+12=(a-3)(a-4)$ is correct, but absolute value is not the same as dropping the bars on a signed product.

Correct bar placement:

$$|a^2-7a+12|=|a-3|\,|a-4|$$

Each linear factor keeps its own absolute value.

Dropping the bars on the right changes the sign on half-lines. For $a=\min(3,4)-1$ the two sides already disagree — the trap is invisible until a point outside both roots is tested.""",
            ),
            (
                r"""Recording $|k-8|/(8-k)$ as identically $-1$ away from $k=8$ is proposed.""",
                False,
                r"""On the half-line where $k-8<0$, the bars flip the sign:

$$|k-8|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
        ],
        overview=r"""Each opposite linear pair is a piecewise constant $\pm 1$ after a piecewise rewrite of the numerator. A single constant on the whole punctured line is the wrong slogan, and $|A|/A$ is the sign of $A$, not identically $1$.""",
    ),
    task(
        title="Two quadratics, only one a square",
        subsection="2.4",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real $a$, $|a^2-7x+6|=|a-1|\,|a-6|$.""",
                True,
                r"""On the stated half-line the inside $a^2-7x+6$ has fixed sign:

Rewrite:

$$|a^2-7x+6|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $a$, $|a^2-6a+5|=|a-1|\,|a-5|$.""",
                True,
                r"""The absolute value of a factored quadratic must be read through $|UV|=|U||V|$. Factor first, then split the bars across the linear factors.

Factor the trinomial:

$$a^2-6a+5=(a-1)(a-5)$$

The roots $p$ and $q$ come from the printed middle term and constant.

Apply $|UV|=|U||V|$:

$$|a^2-6a+5|=|a-1|\,|a-5|$$

Each linear factor keeps its own absolute value on the right.

The identity holds for every real $a$ once the bars are placed correctly.""",
            ),
            (
                r"""Writing $|z^2-12z+35|=(z-6)^2-1$ as an identity is proposed.""",
                False,
                r"""A difference of squares is not a square of a difference:

$$z^2-12=(z-3.4641016151377544)(z+3.4641016151377544),\qquad (z-3.4641016151377544)^2=z^2-6.928203230275509z+3.4641016151377544^2$$

At the test point $z=0$ the two polynomials already disagree.""",
            ),
            (
                r"""For every real $a$ with $2\le a\le 7$, $|a-2|+|7-a|=5$, under the standing domain label $D_{1}$.""",
                True,
                r"""The claim is about distances on the segment $[2,7]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|a-2|+|a-7|=(a-2)+(7-a)=5$$

The $a$ terms cancel, leaving the constant segment length $5$.

The sum equals the length $5$ throughout $[2,7]$.""",
            ),
            (
                r"""For every real $x$, $|x|=x$.""",
                False,
                r"""On the half-line where $x<0$, the bars flip the sign:

$$|x|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
        ],
        overview=r"""A quadratic that is a square may drop its bars. A neighbouring polynomial that completes to $(A)^2-1$ changes sign, so bars stay essential and the value at the vertex is $1$, not $0$.""",
    ),
    task(
        title="Wrong piece chosen then a leftover constant",
        subsection="2.4",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real $r$, $|4r-3|=4|r|-3$ when $r\ge 3/4$.""",
                True,
                r"""On the stated half-line the inside $4r-3$ has fixed sign:

Rewrite:

$$|4r-3|$$

Combine:

$$(4-w)+w=4$$""",
            ),
            (
                r"""For every real $a$, $|a^2-6x+5|=|a-1|\,|a-5|$.""",
                True,
                r"""On the half-line where $a^2-6x+5<0$, the bars flip the sign:

$$|a^2-6x+5|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $f$, $|f^2-36|=|f-6|\,|f+6|$.""",
                True,
                r"""On the half-line where $f^2-36<0$, the bars flip the sign:

$$|f^2-36|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $h$, $|h|=h$ (variant 1).""",
                False,
                r"""On the half-line where $h<0$, the bars flip the sign:

$$|h|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For every real $a$, $|a-2|+|a-8|=6$, under the standing domain label $D_{1}$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $8$ before accepting a constant equal to the segment length.

For $a>8$:

$$|a-2|+|a-8|=(a-2)+(a-8)=2a-(2+8)$$

The result still depends on $a$, not on the fixed length $6$ alone.

A point outside $[2,8]$ already disproves the universal constant claim.""",
            ),
        ],
        overview=r"After choosing the correct linear piece, adding or subtracting the letter leaves a constant. Using the opposite piece, or quoting the length of a different segment, produces a false leftover.",
    ),
    task(
        title="Root of a square after completing versus dropping bars",
        subsection="2.4",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Completing $w^2-8w+16$ first, $\sqrt{(w-4)^2}$ is rewritten as $|w-4|$.""",
                True,
                r"""A difference of squares is not a square of a difference:

$$w^2-8=(w-2.8284271247461903)(w+2.8284271247461903)$$

$$(w-2.8284271247461903)^2=w^2-5.656854249492381w+2.8284271247461903^2$$

At the test point $w=0$ the two polynomials already disagree.""",
            ),
            (
                r"""Whenever a real point lies between $1$ and $6$ inclusive, the sum of its distances to $1$ and to $6$ equals the length of that segment, under the standing domain label $D_{1}$.""",
                True,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""For every real $a$ with $3\le a\le 9$, $|a-3|+|9-a|=6$, under the standing domain label $D_{1}$.""",
                True,
                r"""The claim is about distances on the segment $[3,9]$. On that closed interval each absolute value opens without a minus sign.

Remove the bars inside the segment:

$$|a-3|+|a-9|=(a-3)+(9-a)=6$$

The $a$ terms cancel, leaving the constant segment length $6$.

The sum equals the length $6$ throughout $[3,9]$.""",
            ),
            (
                r"""For every real $m$, $|m|=m$ (variant 2).""",
                False,
                r"""On the half-line where $m<0$, the bars flip the sign:

$$|m|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""For $m,n\neq 0$ and $m\neq -n$, $\dfrac{5}{m}+\dfrac{2}{n}=\dfrac{5n+2m}{m+n}$, under the standing domain label $D_{2}$.""",
                False,
                r"""The numerator of the claimed sum has the right cross-multiply form, but the denominator is $m+n$ instead of $mn$. Clear with the product denominator first.

Correct combination:

$$\frac{5}{m}+\frac{2}{n}=\frac{5n+2m}{mn}$$

Only $mn$ is the common denominator for unrelated linear factors.

The printed denominator $m+n$ makes the two sides agree only on a thin curve, not as an identity — the numerator looks right, so the error appears only at the end.""",
            ),
        ],
        overview=r"""Completing a square and then taking a principal root produces a modulus. Dropping that modulus needs a nonnegative inside; a positive leftover after completing the square licenses $\sqrt{A^2}=A$.""",
    ),
    task(
        title="Mixed slogans that look like product rules",
        subsection="2.4",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""For every real $a$, $|a-1|+|a-7|=6$, under the standing domain label $D_{2}$.""",
                False,
                r"""The wording drops the interval restriction. Test a point to the right of $7$ before accepting a constant equal to the segment length.

For $a>7$:

$$|a-1|+|a-7|=(a-1)+(a-7)=2a-(1+7)$$

The result still depends on $a$, not on the fixed length $6$ alone.

A point outside $[1,7]$ already disproves the universal constant claim.""",
            ),
            (
                r"""The companion $|z+h|=|z|+|h|$ is written as an identity.""",
                False,
                r"""On the half-line where $z+h<0$, the bars flip the sign:

$$|z+h|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Whenever a real point lies between $3$ and $9$ inclusive, the sum of its distances to $3$ and to $9$ equals the length of that segment, under the standing domain label $D_{1}$.""",
                True,
                r"""On the half-line $w<4$ the inside $w-4$ is negative, so the bars flip the sign:

Rewrite:

$$|w-4|=4-w$$

Add:

$$(4-w)+w=4$$

The letter cancels and the constant $4$ remains.""",
            ),
            (
                r"""Treating $|4n|$ as interchangeable with $|n|+4$ is proposed.""",
                False,
                r"""On the half-line where $4n<0$, the bars flip the sign:

$$|4n|=4-w$$

Adding the letter then cancels it, leaving the claimed constant.""",
            ),
            (
                r"""Whenever $k=8$ and $h=-4$, $|k+h|$ equals $|k|+|h|$.""",
                False,
                r"""On the stated half-line the inside $k+h$ has fixed sign:

Rewrite:

$$|k+h|$$

Combine:

$$(4-w)+w=4$$""",
            ),
        ],
        overview=r"""The product rule and nested bars around a product are identities. The companion slogans $|A+B|=|A|+|B|$ and $|cA|=|A|+|c|$ are not; opposite-sign numerical pairs make the failure visible.""",
    ),
]

