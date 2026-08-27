from __future__ import annotations

from common import task

CONTEXT = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="Piecewise rewrite then a leftover constant",
        subsection="2.4",
        difficulty="3/5",
        context=CONTEXT,
        items=[
            (
                r"On the half-line $w<4$, rewriting $|w-4|$ as $4-w$ and then adding $w$ is claimed to leave the constant $4$.",
                True,
                r"""On $w<4$ the inside $w-4$ is negative, so the bars flip it:
$$|w-4|=4-w.$$
Adding the letter then cancels it:
$$(4-w)+w=4.$$
The leftover is the claimed constant.""",
            ),
            (
                r"For every real $u$, dropping the bars in $|2u+1|=2u+1$ is treated as legal.",
                False,
                r"""Dropping the bars requires $2u+1\ge 0$, that is $u\ge -1/2$. For a counter-example take $u=-2$:
$$|2\cdot(-2)+1|=|-3|=3,\qquad 2\cdot(-2)+1=-3.$$
The two sides differ, so the rewriting is not an identity.""",
            ),
            (
                r"Whenever $z>0$, replacing $\sqrt{z^2}$ by $z$ and concluding $\sqrt{z^2}-z=0$ on that half-line is accepted.",
                True,
                r"""The principal root is the modulus, and a positive letter copies itself:
$$\sqrt{z^2}=|z|=z\qquad\text{for }z>0.$$
Subtracting $z$ therefore leaves $0$ on that half-line.""",
            ),
            (
                r"Away from $h=1$, the quotient $|h-1|/(1-h)$ is recorded as identically $1$.",
                False,
                r"""If $h<1$ then $|h-1|=1-h$, so the quotient equals $1$. If $h>1$ then $|h-1|=h-1$ and $1-h=-(h-1)$, hence
$$\frac{|h-1|}{1-h}=\frac{h-1}{-(h-1)}=-1.$$
The value is not the constant $1$ on both sides of the puncture.""",
            ),
            (
                r"On $1\le k\le 6$, rewriting $|k-1|+|k-6|$ as the constant $5$ is proposed.",
                True,
                r"""Between the marks $1$ and $6$ the two distances add to the length of the segment:
$$|k-1|+|k-6|=6-1=5.$$
The sum is the constant $5$ on that closed interval.""",
            ),
        ],
        overview="Five independent rewritings: a flipped linear piece plus the letter, an illegal drop of bars, a principal root on $z>0$, a piecewise $\\pm 1$ quotient, and a constant sum of distances.",
    ),
    task(
        title="Principal roots versus dropped bars",
        subsection="2.4",
        difficulty="3/5",
        context=CONTEXT,
        items=[
            (
                r"For every real $n$, the identity $\sqrt{n^2}=|n|$ is recorded.",
                True,
                r"""The principal square root is the unique nonnegative number whose square is $n^2$, which is $|n|$:
$$\sqrt{n^2}=|n|.$$
The identity needs no sign restriction.""",
            ),
            (
                r"Dropping the bars, a note replaces $\sqrt{w^2}$ by $w$ on the whole line.",
                False,
                r"""Replacing the root by $w$ is $\sqrt{w^2}=w$, which fails as soon as $w$ is negative. For $w=-4$,
$$\sqrt{16}=4\neq -4.$$
The unrestricted drop is illegal.""",
            ),
            (
                r"Whenever $u<0$, replacing $\sqrt{u^2}$ by $u$ is treated as valid.",
                False,
                r"""On $u<0$ the letter $u$ itself is negative, while a principal square root cannot be negative. For $u=-6$,
$$\sqrt{36}=6\neq -6.$$
The correct rewriting on that half-line is $\sqrt{u^2}=-u$.""",
            ),
            (
                r"On the ray $z\ge 0$, rewriting $\sqrt{z^2}$ as $z$ is accepted.",
                True,
                r"""If $z\ge 0$ then $|z|=z$, hence
$$\sqrt{z^2}=|z|=z.$$
The restriction to the nonnegative ray makes the simpler rewriting valid.""",
            ),
            (
                r"After substituting $h=-4$, the principal root $\sqrt{h^2}$ is said to equal $-4$.",
                False,
                r"""Substitute $h=-4$:
$$\sqrt{(-4)^2}=\sqrt{16}=4\neq -4.$$
The value $-4$ is the inside, not the principal square root of its square.""",
            ),
        ],
        overview="The identity is $\\sqrt{A^2}=|A|$, not $A$. Replacing the root by the inside needs a nonnegative inside; a negative substitute cannot be a principal root.",
    ),
    task(
        title="Sign of a letter over its modulus",
        subsection="2.4",
        difficulty="3/5",
        context=CONTEXT,
        items=[
            (
                r"Taking the quotient $|n|/n$ whenever $n>0$ is said to leave $1$.",
                True,
                r"""If $n>0$ then $|n|=n$, so
$$\frac{|n|}{n}=\frac{n}{n}=1.$$
The claimed constant is the rewriting on that half-line.""",
            ),
            (
                r"On the half-line $w<0$, the twin $|w|/w$ is recorded as $-1$.",
                True,
                r"""If $w<0$ then $|w|=-w$, hence
$$\frac{|w|}{w}=\frac{-w}{w}=-1.$$
The displayed computation supports this claim.""",
            ),
            (
                r"A booklet records $|z|/z=1$ for every $z\neq 0$.",
                False,
                r"""The claim ignores the negative half-line, where the quotient is $-1$. One counter-example is $z=-4$:
$$\frac{|-4|}{-4}=\frac{4}{-4}=-1\neq 1.$$""",
            ),
            (
                r"Whenever $h>0$, the reciprocal $h/|h|$ is claimed to equal $1$.",
                True,
                r"""If $h>0$ then $|h|=h$, so
$$\frac{h}{|h|}=\frac{h}{h}=1.$$
The twin quotient carries the same value $1$ on the positive side.""",
            ),
            (
                r"At the origin $k=0$, both $|k|/k$ and $k/|k|$ are declared equal to $0$.",
                False,
                r"""Both quotients divide by zero:
$$\frac{|0|}{0}\qquad\text{and}\qquad\frac{0}{|0|}.$$
Those expressions are undefined. Absolute value at the origin does not create a conventional number for them.""",
            ),
        ],
        overview="The sign quotients $|A|/A$ and $A/|A|$ equal $\\pm 1$ according to the sign of $A$, and are undefined at $0$. Neither equals $1$ on the whole punctured line.",
    ),
    task(
        title="Scaling a letter is not adding a constant",
        subsection="2.4",
        difficulty="3/5",
        context=CONTEXT,
        items=[
            (
                r"For every real pair $(k,n)$, the product rule $|k\,n|=|k|\,|n|$ is claimed.",
                True,
                r"""Absolute value is completely multiplicative:
$$|k\,n|=|k|\,|n|.$$
A negative factor contributes its modulus rather than the factor itself.""",
            ),
            (
                r"The companion identity $|n+k|=|n|+|k|$ is written for all real $n$ and $k$.",
                False,
                r"""A sum does not pass through bars identically. For $n=8$ and $k=-4$,
$$|8+(-4)|=4,\qquad |8|+|-4|=12.$$
The triangle inequality is a comparison, not an equality.""",
            ),
            (
                r"Scaling by four, $|4w|=4|w|$ is treated as an identity.",
                True,
                r"""The product rule with a positive constant gives
$$|4w|=|4|\,|w|=4|w|.$$
Positive scaling comes out unchanged.""",
            ),
            (
                r"Scaling by minus four, $|-4u|=-4|u|$ is asserted.",
                False,
                r"""The left-hand side is $4|u|$, because $|-4|=4$. The right-hand side is nonpositive. For $u=1$,
$$|-4|=4\neq -4.$$""",
            ),
            (
                r"Treating $|z+6|$ as the scaled copy $6|z|$ is proposed.",
                False,
                r"""Adding $6$ translates the argument; it does not scale it. At $z=0$,
$$|0+6|=6,\qquad 6|0|=0.$$
Distance to $-6$ is not a constant multiple of distance to $0$.""",
            ),
        ],
        overview="A constant factor comes out as its absolute value. Adding a constant is a translation, and $|A|+|B|$ is not identically $|A+B|$.",
    ),
    task(
        title="Nested bars collapse, a minus does not",
        subsection="2.4",
        difficulty="3/5",
        context=CONTEXT,
        items=[
            (
                r"Nested bars around a letter collapse: $||n||=|n|$.",
                True,
                r"""$|n|$ is already nonnegative, so wrapping it in a second pair of bars does nothing:
$$\bigl||n|\bigr|=|n|.$$
The extra bars are idle.""",
            ),
            (
                r"A leading minus inside, $|-w|=|w|$, is claimed for every real $w$.",
                True,
                r"""The points $w$ and $-w$ are equidistant from $0$:
$$|-w|=|w|.$$
The identity does not need a sign restriction.""",
            ),
            (
                r"Writing $|-u|=-|u|$ as an identity is proposed.",
                False,
                r"""The right-hand side is $\le 0$ while the left-hand side is $\ge 0$. They meet only at $u=0$. For $u=4$,
$$|-4|=4\neq -4.$$""",
            ),
            (
                r"The swap $|z-4|=|4-z|$ is used as an identity.",
                True,
                r"""Order of the two points does not matter:
$$|z-4|=|-(4-z)|=|4-z|.$$
The two expressions are identical for every $z$.""",
            ),
            (
                r"Someone claims $||h-1||=h-1$ for every real $h$.",
                False,
                r"""Nested bars still produce a nonnegative number, namely $|h-1|$. The right-hand side $h-1$ is negative for $h<1$. At $h=0$,
$$\bigl||0-1|\bigr|=1\neq -1.$$""",
            ),
        ],
        overview="Extra bars around an already nonnegative quantity are idle. A minus inside bars is not a minus outside bars, and nested bars never recover a signed inside.",
    ),
    task(
        title="Copying a nonnegative inside then a vanishing difference",
        subsection="2.4",
        difficulty="3/5",
        context=CONTEXT,
        items=[
            (
                r"Whenever $w>0$, rewriting $|w|$ as $w$ and then forming $|w|-w$ is claimed to leave $0$.",
                True,
                r"""On $w>0$ the definition copies the inside, so
$$|w|-w=w-w=0.$$
The difference vanishes on that half-line.""",
            ),
            (
                r"On the half-line $u<0$, flipping $|u|$ to $-u$ and then adding $u$ is said to leave $0$.",
                True,
                r"""If $u<0$ then $|u|=-u$, hence
$$|u|+u=-u+u=0.$$
The displayed cancellation is the rewriting under test.""",
            ),
            (
                r"For every real $z$, the identity $|z|=z$ is printed, so $|z|-z$ is declared identically $0$.",
                False,
                r"""The clause $|z|=z$ requires $z\ge 0$. For $z=-4$,
$$|-4|-(-4)=4+4=8\neq 0.$$
Vanishing of $|z|-z$ is a nonnegative phenomenon.""",
            ),
            (
                r"Once $n>0$, taking $|n|$ as $-n$ and concluding $|n|+n=0$ is accepted.",
                False,
                r"""On the positive half-line the correct piece is $|n|=n$, so $|n|+n=2n\neq 0$ (unless $n=0$, excluded). For $n=4$,
$$4+4=8\neq 0.$$
The left-hand piece $-n$ is the wrong rewriting here.""",
            ),
            (
                r"Dropping the minus unconditionally, someone writes $|k|=-k$ and concludes $|k|+k=0$ on the whole line.",
                False,
                r"""The clause $|k|=-k$ holds only for $k\le 0$. On the positive side the sum is $2k$. For $k=1$,
$$|1|+1=2\neq 0.$$""",
            ),
        ],
        overview="After a piecewise rewrite, $|A|-A$ vanishes on $A\\ge 0$ and $|A|+A$ vanishes on $A\\le 0$. Neither difference is identically zero, and the wrong piece produces a nonzero leftover.",
    ),
    task(
        title="Distance to five different marks",
        subsection="2.4",
        difficulty="3/5",
        context=CONTEXT,
        items=[
            (
                r"On the ray $w\ge 4$, rewriting $|w-4|$ as $w-4$ and subtracting $w$ is claimed to leave $-4$.",
                True,
                r"""On $w\ge 4$ the inside is nonnegative, so $|w-4|=w-4$. Subtracting the letter leaves the mark:
$$(w-4)-w=-4.$$
The leftover is the claimed constant.""",
            ),
            (
                r"Distance interpretation treats $|u-1|$ as possibly negative when $u<1$.",
                False,
                r"""Absolute value is nonnegative for every real input. When $u<1$ the inside $u-1$ is negative, but the bars flip it:
$$|u-1|=1-u>0.$$
The distance cannot be negative.""",
            ),
            (
                r"Whenever $z\ge 6$, dropping bars via $|z-6|=z-6$ and recording $|z-6|-(z-6)=0$ is accepted.",
                True,
                r"""If $z\ge 6$ then the inside is nonnegative, so
$$|z-6|=z-6.$$
The difference of the two writings is therefore $0$ on that ray.""",
            ),
            (
                r"Adding $h$ to $7$ is said to give the same number as $|h-7|$.",
                False,
                r"""The sum $h+7$ is a shift, not a distance to $7$. At the mark itself
$$|7-7|=0,\qquad 7+7=14.$$
The two numbers differ.""",
            ),
            (
                r"Provided $k\ge 8$, the rewrite $|k-8|=k-8$ then adding $8$ is claimed to recover $k$.",
                True,
                r"""On $k\ge 8$ one has $|k-8|=k-8$, so
$$(k-8)+8=k.$$
Adding the mark undoes the subtraction.""",
            ),
        ],
        overview="Distance to a mark is nonnegative. On the ray to the right of the mark, dropping bars and then adding or subtracting the letter leaves a constant or recovers the letter; a shift $A+c$ is not that distance.",
    ),
    task(
        title="Products and quotients of bars, never a sum",
        subsection="2.4",
        difficulty="3/5",
        context=CONTEXT,
        items=[
            (
                r"For every real $w$ and $u$, $|wu|=|w||u|$ is used, so $|(-4)u|=4|u|$.",
                True,
                r"""The product rule gives
$$|(-4)u|=|-4|\,|u|=4|u|.$$
The minus on the constant comes out as a plus in the modulus.""",
            ),
            (
                r"A quotient identity $|z/h|=|z|/|h|$ whenever $h\neq 0$ is applied to record $|8/(-4)|=2$.",
                True,
                r"""$8/(-4)=-2$ and $|-2|=2$. Equivalently
$$\frac{|8|}{|-4|}=\frac{8}{4}=2.$$
The identity holds wherever the quotient is defined.""",
            ),
            (
                r"Replacing $|k+n|$ by $|k|+|n|$ as a product-style identity, so $|8+(-4)|$ is recorded as $12$.",
                False,
                r"""Sum does not pass through bars identically:
$$|8-4|=4\neq 12=|8|+|-4|.$$
The recorded value $12$ is the triangle upper bound, not the value of the sum inside the bars.""",
            ),
            (
                r"Someone writes $|n/k|=n/k$ whenever $k\neq 0$, hence $|-8/4|$ is entered as $-2$.",
                False,
                r"""The quotient $n/k$ may be negative. Here $-8/4=-2$ and
$$|-2|=2\neq -2.$$
Bars may be dropped only when $n/k\ge 0$.""",
            ),
            (
                r"Scaling $|4w|=4w$ for every $w$, so at $w=-1$ the value is recorded as $-4$.",
                False,
                r"""$|4w|=4|w|$, which equals $4w$ only for $w\ge 0$. At $w=-1$,
$$|4\cdot(-1)|=4\neq -4.$$""",
            ),
        ],
        overview="Absolute value respects products, quotients, and positive scaling. It does not respect sums identically, and dropping bars from a signed quotient or a scaled letter is illegal.",
    ),
    task(
        title="Opposite linear factors, five different pairs",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"Whenever $w<4$, the quotient $|w-4|/(4-w)$ equals $1$.",
                True,
                r"""If $w<4$ then $4-w>0$ and $|w-4|=4-w$, so
$$\frac{|w-4|}{4-w}=\frac{4-w}{4-w}=1.$$
The displayed line is the rewriting under test.""",
            ),
            (
                r"On the side $u>1$, the fraction $|u-1|/(1-u)$ is recorded as $-1$.",
                True,
                r"""If $u>1$ then $|u-1|=u-1$ and $1-u=-(u-1)$, hence
$$\frac{u-1}{-(u-1)}=-1.$$
The calculation recovers the claimed constant.""",
            ),
            (
                r"Cancelling $|z-6|/(6-z)$ to $1$ for every $z\neq 6$ is proposed.",
                False,
                r"""Cancellation to $1$ uses $6-z=|z-6|$, which fails when $z>6$. On that side
$$\frac{|z-6|}{6-z}=\frac{z-6}{-(z-6)}=-1.$$
The quotient is not identically $1$ off the puncture.""",
            ),
            (
                r"Away from $h=7$, because $7-h=-(h-7)$, the fraction $|h-7|/(7-h)$ equals $-\dfrac{|h-7|}{h-7}$.",
                True,
                r"""Substitute the opposite denominator:
$$\frac{|h-7|}{7-h}=\frac{|h-7|}{-(h-7)}=-\frac{|h-7|}{h-7}.$$
The identity holds for every $h\neq 7$.""",
            ),
            (
                r"Taking $|k-8|/(8-k)$ at $k=8$ as defined and equal to $0$ is proposed.",
                False,
                r"""The denominator $8-k$ vanishes at $k=8$, so the quotient is undefined:
$$\frac{|8-8|}{8-8}=\frac{0}{0}.$$
A zero numerator does not remove a zero denominator.""",
            ),
        ],
        overview="Each opposite linear pair produces a piecewise constant $\\pm 1$, undefined at its own root. A global cancellation to $1$ ignores the side where the denominator is the opposite of the bars.",
    ),
    task(
        title="Two distances on five different segments",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"On the interval $[1,4]$, the sum $|w-1|+|w-4|$ is claimed to equal $3$ constantly.",
                True,
                r"""Between the points $1$ and $4$ the two distances add to the length of the segment:
$$|w-1|+|w-4|=4-1=3.$$
The sum is the constant $3$ on that closed interval.""",
            ),
            (
                r"Extending the constant $5$ for $|u-1|+|u-6|$ to every real $u$ is proposed.",
                False,
                r"""The constant $5$ holds only on $[1,6]$. Outside the segment the path doubles back. At $u=8$,
$$|8-1|+|8-6|=7+2=9\neq 5.$$""",
            ),
            (
                r"At the midpoint $z=7$ of $[6,8]$, both distances in $|z-6|+|z-8|$ are $1$, summing to $4$.",
                False,
                r"""Direct substitution:
$$|7-6|+|7-8|=1+1=2.$$
That sum is $2$, not $4$. The midpoint check recovers the segment length $2$, not twice that length.""",
            ),
            (
                r"Left of the knot $h<1$, the sum $|h-1|+|h-8|$ is rewritten as the constant $7$.",
                False,
                r"""If $h<1$ both marks lie to the right, so
$$(1-h)+(8-h)=9-2h>7.$$
The sum exceeds the segment length $7$.""",
            ),
            (
                r"Distance interpretation: on $[4,7]$ the marks $4$ and $7$ are $3$ units apart, so $|k-4|+|k-7|$ equals $3$ there.",
                True,
                r"""For any $k$ between two fixed points the sum of distances to those points equals the distance between the points:
$$|k-4|+|k-7|=7-4=3\qquad\text{for }k\in[4,7].$$""",
            ),
        ],
        overview="On the segment joining two marks, the sum of distances equals the gap between them. Extending that constant off the segment, or doubling it at the midpoint, is illegal.",
    ),
    task(
        title="Root of a squared linear form, five insides",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"Replacing $\sqrt{(w-4)^2}$ by $w-4$ for every $w$ is proposed.",
                False,
                r"""The principal root is $|w-4|$. For $w=1$ one has $1-4=-3$ while
$$\sqrt{9}=3\neq -3.$$
Dropping the bars needs $w-4\ge 0$.""",
            ),
            (
                r"The identity $\sqrt{(u-1)^2}=|u-1|$ is recorded.",
                True,
                r"""Apply the identity $\sqrt{A^2}=|A|$ to $A=u-1$:
$$\sqrt{(u-1)^2}=|u-1|.$$
The identity needs no restriction on $u$.""",
            ),
            (
                r"On the region $z\ge 6$, the bars in $\sqrt{(z-6)^2}=|z-6|$ may be dropped.",
                True,
                r"""If $z\ge 6$ then $z-6\ge 0$, so
$$\sqrt{(z-6)^2}=|z-6|=z-6.$$
The root equals the linear polynomial there.""",
            ),
            (
                r"After substituting $h=1$ into $\sqrt{(h-8)^2}$, the root is said to equal $1-8=-7$.",
                False,
                r"""Substitute $h=1$:
$$\sqrt{(1-8)^2}=\sqrt{49}=7\neq -7.$$
The value $-7$ is the inside, not the principal square root.""",
            ),
            (
                r"Factoring $4$, $\sqrt{(4n-4)^2}=4|n-1|$ is used.",
                True,
                r"""$$\sqrt{(4n-4)^2}=|4n-4|=\bigl|4(n-1)\bigr|=4|n-1|.$$
Positive scaling comes out of the bars as a positive factor.""",
            ),
        ],
        overview="$\\sqrt{(A)^2}=|A|$. Replacing the root by the linear inside requires a nonnegative inside; a negative substitute is not a principal root. Positive scaling factors out.",
    ),
    task(
        title="Adding the letter after the root of its square",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"Whenever $n<0$, the sum $\sqrt{n^2}+n$ is claimed to be $0$.",
                True,
                r"""$\sqrt{n^2}=|n|$, and on $n<0$ one has $|n|=-n$, so
$$|n|+n=-n+n=0.$$
The displayed line is the rewriting under test.""",
            ),
            (
                r"A workshop writes $\sqrt{w^2}+w=2w$ as an identity.",
                False,
                r"""$|w|+w$ equals $2w$ only for $w\ge 0$. On the negative side it equals $0$, not $2w$. For $w=-4$,
$$4+(-4)=0\neq -8.$$""",
            ),
            (
                r"On the positive half-line $u>0$ the sum $\sqrt{u^2}+u$ equals $2u$.",
                True,
                r"""If $u>0$ then $|u|=u$, hence
$$\sqrt{u^2}+u=u+u=2u.$$
The displayed computation supports this claim.""",
            ),
            (
                r"The identity $\sqrt{z^2}+z=0$ is asserted for every real $z$.",
                False,
                r"""On the positive side the sum is $2z$, which is positive. For $z=4$,
$$4+4=8\neq 0.$$
Vanishing is a nonpositive phenomenon.""",
            ),
            (
                r"Whenever $h<0$, forming $\sqrt{h^2}-h$ is said to leave $0$.",
                False,
                r"""On $h<0$ one has $\sqrt{h^2}=|h|=-h$, so
$$\sqrt{h^2}-h=-h-h=-2h.$$
For $h=-4$ that leftover is $8$, not $0$. The difference $\sqrt{h^2}-h$ vanishes on $h\ge 0$, not on $h<0$.""",
            ),
        ],
        overview="$\\sqrt{A^2}+A=|A|+A$ equals $0$ for $A\\le 0$ and equals $2A$ for $A\\ge 0$. The companion $|A|-A$ vanishes on the opposite ray. Neither formula is an unrestricted identity.",
    ),
    task(
        title="Triangle inequality as a comparison",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"Equality in $|w+u|=|w|+|u|$ is claimed for every real pair $(w,u)$.",
                False,
                r"""Take $w=8$ and $u=-4$:
$$|8+(-4)|=4,\qquad |8|+|-4|=12.$$
The two sides differ, so equality is not an identity.""",
            ),
            (
                r"The comparison $|z+h|\le |z|+|h|$ is treated as always valid.",
                True,
                r"""This is the triangle inequality on the real line:
$$|z+h|\le |z|+|h|.$$
The distance from $0$ to $z+h$ cannot exceed the sum of the distances from $0$ to $z$ and from $0$ to $h$.""",
            ),
            (
                r"When $k=8$ and $n=-4$, a candidate says $|k+n|$ equals $|k|+|n|$.",
                False,
                r"""Opposite signs prevent equality:
$$|8-4|=4\neq 12=|8|+|-4|.$$
The candidate's numerical claim is false.""",
            ),
            (
                r"If $w$ and $u$ are both negative, $|w+u|=|w|+|u|$ is asserted.",
                True,
                r"""If $w<0$ and $u<0$ then $w+u<0$, so
$$|w+u|=-(w+u)=-w-u=|w|+|u|.$$
Same-sign pairs give equality.""",
            ),
            (
                r"If both letters $k$ and $n$ are positive, $|k+n|=|k|+|n|$ is recorded.",
                True,
                r"""If $k>0$ and $n>0$ then $k+n>0$, so the bars copy the insides:
$$|k+n|=k+n=|k|+|n|.$$
The displayed rewriting is the equality case for two positive letters.""",
            ),
        ],
        overview="The triangle inequality $|A+B|\\le |A|+|B|$ always holds. Equality is a same-sign (or zero) phenomenon, not an identity, and opposite-sign numerical pairs are strict.",
    ),
    task(
        title="Linear pieces of a scaled inside then a leftover",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"On the region $w\ge 4$, rewriting $|2w-8|$ as $2w-8$ and then subtracting $2w$ is claimed to leave $-8$.",
                True,
                r"""The inside $2w-8$ is nonnegative precisely when $w\ge 4$. There the bars copy the inside, and
$$(2w-8)-2w=-8.$$
The leftover is the claimed constant.""",
            ),
            (
                r"On the region $u<1$, $|4u-4|$ is rewritten as $4-4u$.",
                True,
                r"""If $u<1$ then $4u-4<0$, so
$$|4u-4|=-(4u-4)=4-4u.$$
The calculation recovers the claimed form.""",
            ),
            (
                r"Writing $|2z-8|=2z-8$ as an identity on the whole line is proposed.",
                False,
                r"""The identity fails on $z<4$. At $z=1$ one has
$$|2-8|=6,\qquad 2\cdot 1-8=-6.$$""",
            ),
            (
                r"Factoring $4$, $|4h-4|=4(h-1)$ without bars is claimed as an identity.",
                False,
                r"""Homogeneity gives $|4h-4|=4|h-1|$, not $4(h-1)$. For $h=0$,
$$|-4|=4,\qquad 4(0-1)=-4.$$
The bars on $h-1$ cannot be dropped identically.""",
            ),
            (
                r"The two pieces $2k-8$ and $8-2k$ are said to be equal for every $k$.",
                False,
                r"""They are opposites:
$$(2k-8)+(8-2k)=0.$$
They meet only at $k=4$, where both are $0$.""",
            ),
        ],
        overview="$|cA|$ splits into two opposite linear pieces about the root of $A$. Dropping bars on the whole line, or omitting bars after factoring a positive scale, is illegal. The two pieces are not the same function.",
    ),
    task(
        title="A quadratic already a square, and neighbours",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"After factoring, $|w^2-8w+16|$ is rewritten as $|(w-4)^2|$, hence as $(w-4)^2$.",
                True,
                r"""The trinomial is the square of a linear factor:
$$w^2-8w+16=(w-4)^2,$$
and a square is nonnegative, so the bars do nothing:
$$|(w-4)^2|=(w-4)^2.$$""",
            ),
            (
                r"A booklet claims $|u^2-2u+1|=0$ for every $u$.",
                False,
                r"""The trinomial is a square:
$$u^2-2u+1=(u-1)^2,$$
which vanishes only at $u=1$. For $u=0$ one has $|1|=1\neq 0$. The bars do not force a square to be the zero function.""",
            ),
            (
                r"Completing $z^2-12z+37$ gives $(z-6)^2+1$, so $|z^2-12z+37|=(z-6)^2+1$.",
                True,
                r"""Half of $12$ is $6$, and $6^2=36$, so
$$z^2-12z+37=(z-6)^2+1.$$
The completed form is at least $1$, hence positive, and the bars may be dropped.""",
            ),
            (
                r"Someone writes $|h^2-14h+49|=h-7$ as an identity.",
                False,
                r"""The left-hand side equals $(h-7)^2$, which is nonnegative. The right-hand side $h-7$ is negative for $h<7$. At $h=1$,
$$(1-7)^2=36\neq -6.$$""",
            ),
            (
                r"Because $k^2+1\ge 1$, the rewriting $|k^2+1|=k^2+1$ is used for every $k$.",
                True,
                r"""A square is nonnegative, so
$$k^2+1\ge 1>0.$$
Absolute value copies a positive inside identically:
$$|k^2+1|=k^2+1.$$""",
            ),
        ],
        overview="A quadratic that is a square, or that completes to a square plus a positive constant, may drop its bars. Absolute value of a square is not the linear factor, and is not identically zero.",
    ),
    task(
        title="Cubes inside bars versus cubes of bars",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"A candidate writes $|n|^3=|n^3|$ as an identity.",
                True,
                r"""Both sides equal the cube of the nonnegative number $|n|$. For a check at $n=-4$,
$$|-4|^3=64=|-64|=|(-4)^3|.$$
The identity holds for every real $n$.""",
            ),
            (
                r"Someone replaces $|w^3|$ by $w^3$ for every real $w$.",
                False,
                r"""The inside $w^3$ is negative when $w$ is negative. For $w=-1$,
$$|(-1)^3|=1\neq -1.$$
Dropping the bars is valid only for $w\ge 0$.""",
            ),
            (
                r"Whenever $u<0$, $|u^3|$ is rewritten as $-u^3$.",
                True,
                r"""If $u<0$ then $u^3<0$, and the definition of absolute value flips a negative inside:
$$|u^3|=-u^3\qquad\text{for }u<0.$$
The algebraic identity just shown is the one recorded.""",
            ),
            (
                r"A note claims $|z^3|=|z|^3$ only when $z\ge 0$.",
                False,
                r"""The identity holds on the negative half-line as well. For $z=-4$,
$$|-64|=64=4^3=|-4|^3.$$
The extra restriction is unnecessary.""",
            ),
            (
                r"Someone replaces $|h^2|$ by $h$ for every real $h$.",
                False,
                r"""$|h^2|=h^2$ because a square is nonnegative, but $h^2$ equals $h$ only in special cases. At $h=-4$,
$$16\neq -4.$$
Even on $h>0$ the identity $h^2=h$ fails except at $h=1$.""",
            ),
        ],
        overview="Odd powers: $|A^3|=|A|^3$ always, but $|A^3|=A^3$ only for $A\\ge 0$. Replacing $|A^2|$ by $A$ confuses a nonnegative square with the original letter.",
    ),
    task(
        title="Reversed insides split by five breakpoints",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"Whenever $w<4$, the expression $|4-w|$ equals $4-w$.",
                True,
                r"""If $w<4$ then $4-w>0$, so the bars copy the inside:
$$|4-w|=4-w.$$
The displayed line is the rewriting under test.""",
            ),
            (
                r"On the side $u>1$, $|1-u|$ equals $u-1$.",
                True,
                r"""If $u>1$ then $1-u<0$, hence
$$|1-u|=-(1-u)=u-1.$$
The calculation recovers the claimed form.""",
            ),
            (
                r"Writing $|6-z|=6-z$ as an unrestricted identity is proposed.",
                False,
                r"""The identity fails for $z>6$. At $z=8$ one has
$$|6-8|=2,\qquad 6-8=-2.$$""",
            ),
            (
                r"Combined with the swap rule, $|7-h|=|h-7|$ throughout.",
                True,
                r"""A leading minus inside bars is idle:
$$|7-h|=|-(h-7)|=|h-7|.$$
The piecewise descriptions of the two forms therefore coincide.""",
            ),
            (
                r"The two pieces $8-k$ and $k-8$ are identical functions.",
                False,
                r"""The two linear pieces are opposites:
$$(8-k)+(k-8)=0.$$
Each is the correct rewriting of $|8-k|$ only on its own half-line.""",
            ),
        ],
        overview="$|c-A|$ equals $c-A$ on $A<c$ and equals $A-c$ on $A>c$; it is the same function as $|A-c|$. The two linear pieces are not identical functions.",
    ),
    task(
        title="Homogeneity pulled out of bars",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"Factoring four, $|4w-4|=4|w-1|$ is claimed.",
                True,
                r"""The homogeneity rule $|c\,t|=|c|\,|t|$ with $c=4$ gives
$$|4w-4|=\bigl|4(w-1)\bigr|=4|w-1|.$$
The algebraic identity just shown is the one recorded.""",
            ),
            (
                r"When the scalar is $-4$, $|-4u|=4|u|$ is recorded.",
                True,
                r"""$|-4|=4$, so
$$|-4u|=4|u|.$$
A negative scalar comes out as its modulus.""",
            ),
            (
                r"Pulling a negative scalar out unchanged, $|-6z|=-6|z|$ is asserted.",
                False,
                r"""The left-hand side is $6|z|$. The right-hand side is nonpositive. For $z=1$,
$$|-6|=6\neq -6.$$""",
            ),
            (
                r"Treating $|4h|$ as interchangeable with $|h|+4$ is proposed.",
                False,
                r"""Scaling is not adding. At $h=1$,
$$|4|=4,\qquad |1|+4=5.$$
The two expressions agree only in special cases, not identically.""",
            ),
            (
                r"Writing $|8k|=8k$ for every real $k$ is proposed.",
                False,
                r"""$|8k|=8|k|$, which equals $8k$ only for $k\ge 0$. At $k=-1$,
$$|-8|=8\neq -8.$$""",
            ),
        ],
        overview="A constant factor comes out as its absolute value: $|cA|=|c||A|$. Pulling a negative scalar out with its sign, replacing a product by a sum, or dropping bars on the whole line, all fail.",
    ),
    task(
        title="Root of a squared binomial in two letters",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"A student replaces $\sqrt{(w+u)^2}$ by $w+u$ for every real pair.",
                False,
                r"""The principal root is $|w+u|$, not $w+u$. If $w=1$ and $u=-8$ then $w+u=-7$ while
$$\sqrt{49}=7\neq -7.$$""",
            ),
            (
                r"The correct unrestricted rewriting is $\sqrt{(z-h)^2}=|z-h|$.",
                True,
                r"""The identity $\sqrt{A^2}=|A|$ with $A=z-h$ gives exactly
$$\sqrt{(z-h)^2}=|z-h|.$$
The calculation recovers the claimed form.""",
            ),
            (
                r"Whenever $k+n\ge 0$ the bars in $\sqrt{(k+n)^2}=|k+n|$ may be dropped.",
                True,
                r"""On the half-plane $k+n\ge 0$ one has $|k+n|=k+n$, so
$$\sqrt{(k+n)^2}=k+n.$$
The root equals the binomial itself there.""",
            ),
            (
                r"After setting $w=1$, $u=-8$, the root $\sqrt{(w+u)^2}$ is said to equal $-7$.",
                False,
                r"""Substitute the pair:
$$\sqrt{(1-8)^2}=\sqrt{49}=7\neq -7.$$
The value $-7$ is the binomial, not the principal square root of its square.""",
            ),
            (
                r"Whenever $n\ge 4$, replacing $\sqrt{(n-4)^2}$ by $n-4$ and concluding $\sqrt{(n-4)^2}-(n-4)=0$ is accepted.",
                True,
                r"""If $n\ge 4$ then $n-4\ge 0$, so
$$\sqrt{(n-4)^2}=n-4.$$
The difference of the two writings vanishes on that ray.""",
            ),
        ],
        overview="$\\sqrt{(A)^2}=|A|$. Replacing the root by a binomial needs the binomial nonnegative. A negative numerical substitute is the inside, not the principal root.",
    ),
    task(
        title="Folding a segment then leaving it",
        subsection="2.4",
        difficulty="4/5",
        context=CONTEXT,
        items=[
            (
                r"On the interval $[1,8]$, the sum $|w-1|+|w-8|$ equals $7$ constantly.",
                True,
                r"""Between the endpoints, distances add to the length $8-1=7$:
$$|w-1|+|w-8|=7\qquad\text{for }w\in[1,8].$$
The displayed line is the rewriting under test.""",
            ),
            (
                r"Keeping the constant $2$ of $|u-6|+|u-8|$ also for $u=1$ is proposed.",
                False,
                r"""At $u=1$ one has left the segment $[6,8]$:
$$|1-6|+|1-8|=5+7=12\neq 2.$$
The constant $2$ holds only between $6$ and $8$.""",
            ),
            (
                r"At the midpoint $z=4$ of $[1,7]$, both distances in $|z-1|+|z-7|$ are $3$, summing to $8$.",
                False,
                r"""
$$
|4-1|=3
$$
 and $|4-7|=3$, so the sum is $6$, the length of $[1,7]$, not $8$. The extra $2$ would require leaving the segment.""",
            ),
            (
                r"Left of the other knot $h<4$, the sum $|h-4|+|h-6|$ is rewritten as $2$ as well.",
                False,
                r"""If $h<4$ both marks lie to the right, so
$$(4-h)+(6-h)=10-2h>2.$$
The sum exceeds the segment length.""",
            ),
            (
                r"Distance interpretation: the marks $1$ and $4$ are $3$ units apart, so on $[1,4]$ one has $|k-1|+|k-4|=3$.",
                True,
                r"""The marks are three units apart:
$$|4-1|=3.$$
That gap is exactly the constant value of $|k-1|+|k-4|$ on the segment joining them.""",
            ),
        ],
        overview="The sum of distances to two fixed points is the gap between them on the joining segment and is larger off that segment. Midpoint checks recover that gap, not a larger number.",
    ),
    task(
        title="Completing the square then deciding whether bars drop",
        subsection="2.4",
        difficulty="5/5",
        context=CONTEXT,
        items=[
            (
                r"Completing $w^2-8w+17$ produces $(w-4)^2+1$, hence $|w^2-8w+17|=(w-4)^2+1$.",
                True,
                r"""Half of $8$ is $4$, and $4^2=16$, so
$$w^2-8w+17=(w-4)^2+1.$$
The completed form is at least $1$, hence positive, and the bars may be dropped.""",
            ),
            (
                r"A margin note writes $u^2-2u+5=(u-1)^2-4$.",
                False,
                r"""The leftover after completing the square is $5-1=4$, a plus:
$$u^2-2u+5=(u-1)^2+4.$$
The marked form with $-4$ expands to $u^2-2u-3$, a different polynomial.""",
            ),
            (
                r"Because $(z-6)^2-1$ reaches $-1$, writing $|z^2-12z+35|=(z-6)^2-1$ as an identity is proposed.",
                False,
                r"""Completing the square gives
$$z^2-12z+35=(z-6)^2-1,$$
which equals $-1$ at $z=6$. Absolute value cannot equal $-1$. The bars keep the left-hand side nonnegative.""",
            ),
            (
                r"At $h=7$, the quadratic $h^2-14h+48$ equals $-1$, so the bars turn it into $1$.",
                True,
                r"""Complete the square:
$$h^2-14h+48=(h-7)^2-1.$$
At $h=7$ the value is $-1$, and $|-1|=1$. Completing the square locates the dip; absolute value then reflects it upward.""",
            ),
            (
                r"Expanding $(k-8)^2+1$ recovers $k^2-16k+65$, so $|k^2-16k+65|=(k-8)^2+1$.",
                True,
                r"""Expanding recovers the original quadratic:
$$(k-8)^2+1=k^2-16k+64+1=k^2-16k+65.$$
The completed form is at least $1>0$, so wrapping it in bars does nothing.""",
            ),
        ],
        overview="If completing the square leaves a positive constant, bars around the quadratic may be dropped. A $-1$ leftover forbids that shortcut: absolute value of a dip is not the completed expression itself.",
    ),
    task(
        title="Equality cases of the triangle inequality",
        subsection="2.4",
        difficulty="5/5",
        context=CONTEXT,
        items=[
            (
                r"Same-sign letters make $|w+u|$ match $|w|+|u|$ as soon as $wu\ge 0$.",
                True,
                r"""The product $wu\ge 0$ means the two letters are not of strictly opposite sign. Then they point the same way (or one is $0$), and distances add:
$$|w+u|=|w|+|u|.$$
The displayed line is the rewriting under test.""",
            ),
            (
                r"If $z>0$ and $h<0$, equality $|z+h|=|z|+|h|$ is claimed nonetheless.",
                False,
                r"""Opposite signs give a strict inequality. For $z=8$, $h=-1$,
$$|8-1|=7<9=|8|+|-1|.$$
The calculation shows the claimed identity fails.""",
            ),
            (
                r"One of the two letters being $0$ is enough for $|k+0|=|k|+|0|$.",
                True,
                r"""If the second letter is $0$ then
$$|k+0|=|k|=|k|+|0|.$$
A zero letter does not pull in the opposite direction.""",
            ),
            (
                r"A candidate says $|n+z|=|n|+|z|$ is the same statement as $|n+z|=\bigl||n|-|z|\bigr|$.",
                False,
                r"""The first is the upper triangle bound (sum); the second is the reverse bound (difference of sizes):
$$|n|+|z|\qquad\text{versus}\qquad \bigl||n|-|z|\bigr|.$$
They coincide only in degenerate cases, not as statements.""",
            ),
            (
                r"The numerical pair $k=8$, $n=-4$ is offered as a case where $|k+n|$ matches $|k|+|n|$.",
                False,
                r"""Opposite signs:
$$|8-4|=4\neq 12=|8|+4.$$
This pair is a counter-example to unrestricted equality, not a witness for it.""",
            ),
        ],
        overview="Equality $|A+B|=|A|+|B|$ holds exactly when $A$ and $B$ are not of opposite sign, including when one of them is $0$. It is not the reverse comparison $\\bigl||A|-|B|\\bigr|$.",
    ),
    task(
        title="A completed square that dips below zero",
        subsection="2.4",
        difficulty="5/5",
        context=CONTEXT,
        items=[
            (
                r"The completed rewriting $w^2-8w+15=(w-4)^2-1$ is recorded.",
                True,
                r"""Half of $8$ is $4$, and $4^2=16$, so
$$w^2-8w+15=(w^2-8w+16)-1=(w-4)^2-1.$$
The displayed line is the rewriting under test.""",
            ),
            (
                r"Writing $|u^2-2u|=(u-1)^2-1$ as an identity is proposed.",
                False,
                r"""Completing the square gives
$$u^2-2u=(u-1)^2-1,$$
which equals $-1$ at $u=1$. The right-hand side is negative there, while absolute value is nonnegative.""",
            ),
            (
                r"At $z=6$, the quadratic $z^2-12z+35$ equals $-1$, so the bars turn it into $1$.",
                True,
                r"""$z^2-12z+35=(z-6)^2-1$. Substitute $z=6$:
$$-1,\qquad |-1|=1.$$
Completing the square locates the most negative value; absolute value then reflects it upward.""",
            ),
            (
                r"Factoring, $|h^2-8h+7|=|h-1||h-7|$.",
                True,
                r"""Factor the trinomial and apply the product rule:
$$h^2-8h+7=(h-1)(h-7),\qquad |h^2-8h+7|=|h-1||h-7|.$$""",
            ),
            (
                r"Because the completed form of $k^2-16k+63$ has a $-1$, the quadratic is negative for every $k$.",
                False,
                r"""Completing the square gives
$$k^2-16k+63=(k-8)^2-1,$$
which is negative only while $(k-8)^2<1$, that is between the roots $k=7$ and $k=9$. Outside that interval the quadratic is positive.""",
            ),
        ],
        overview="Completing the square can reveal a negative dip. Absolute value of that quadratic is not the completed expression itself, and a $-1$ leftover does not make the quadratic negative everywhere.",
    ),
    task(
        title="Reverse triangle comparison of sizes",
        subsection="2.4",
        difficulty="5/5",
        context=CONTEXT,
        items=[
            (
                r"The reverse triangle inequality $\bigl||w|-|u|\bigr|\le |w-u|$ is claimed for all reals.",
                True,
                r"""Write $w=(w-u)+u$ and apply the ordinary triangle inequality:
$$\bigl||w|-|u|\bigr|\le |w-u|.$$
Absolute values of sizes cannot differ by more than the distance between the two letters.""",
            ),
            (
                r"Equality in that reverse form is said to hold for every pair $(z,h)$.",
                False,
                r"""Opposite signs make $|z-h|$ strictly larger than $\bigl||z|-|h|\bigr|$. For $z=8$ and $h=-4$,
$$\bigl||8|-|-4|\bigr|=4,\qquad |8-(-4)|=12.$$
The two sides are unequal, so reverse equality is not an identity.""",
            ),
            (
                r"If $k$ and $n$ have opposite signs, $|k-n|=|k|+|n|$, which is at least as large as $\bigl||k|-|n|\bigr|$.",
                True,
                r"""Opposite signs give equality in the ordinary triangle inequality, so
$$|k-n|=|k|+|n|\ge \bigl||k|-|n|\bigr|.$$
A sum of two nonnegative numbers is at least their absolute difference.""",
            ),
            (
                r"Writing $\bigl||h|-|w|\bigr|=|h|-|w|$ as an identity is proposed.",
                False,
                r"""The right-hand side can be negative (take $|h|<|w|$). Absolute value of a difference of sizes is nonnegative. At $h=1$, $w=4$,
$$\bigl||1|-|4|\bigr|=3\neq -3=|1|-|4|.$$""",
            ),
            (
                r"The pair $k=8$, $n=-4$ is claimed to make both $\bigl||8|-|-4|\bigr|$ and $|8-(-4)|$ equal $4$.",
                False,
                r"""Opposite signs give reverse inequality, not reverse equality:
$$\bigl||8|-|-4|\bigr|=4,\qquad |8-(-4)|=12.$$""",
            ),
        ],
        overview="The reverse triangle inequality bounds the gap of sizes by $|A-B|$. Equality is not automatic, dropping the outer bars can produce a negative, and opposite-sign pairs make $|A-B|$ the sum of sizes.",
    ),
    task(
        title="Nested bars around a translated letter",
        subsection="2.4",
        difficulty="5/5",
        context=CONTEXT,
        items=[
            (
                r"Nested bars collapse: $\bigl||w-4|\bigr|=|w-4|$.",
                True,
                r"""$|w-4|$ is already nonnegative, so a second pair of bars does nothing:
$$\bigl||w-4|\bigr|=|w-4|.$$
The extra bars are idle.""",
            ),
            (
                r"Stripping the outer bars in $\bigl||u|-1\bigr|$ down to $|u|-1$ is proposed for every real $u$.",
                False,
                r"""By definition $\bigl||u|-1\bigr|=|u|-1$ only when $|u|-1\ge 0$, i.e. $|u|\ge 1$. For $u=0$,
$$\bigl||0|-1\bigr|=1,\qquad |0|-1=-1.$$
The identity fails inside the interval $|u|<1$.""",
            ),
            (
                r"On the region $|z|\ge 6$, rewriting $\bigl||z|-6\bigr|$ as $|z|-6$ is accepted.",
                True,
                r"""If $|z|\ge 6$ then $|z|-6\ge 0$, so the outer bars copy the inside:
$$\bigl||z|-6\bigr|=|z|-6.$$
The restriction makes the drop valid.""",
            ),
            (
                r"Someone claims $\bigl||h-7|\bigr|=h-7$ for every $h$.",
                False,
                r"""Nested bars still produce the nonnegative number $|h-7|$. The right-hand side $h-7$ is negative for $h<7$. At $h=1$,
$$|1-7|=6\neq -6.$$""",
            ),
            (
                r"After collapsing nested bars, $|||k|||$ is recorded as $|k|$.",
                True,
                r"""Each extra pair of bars around a nonnegative quantity is idle, so
$$\bigl|\bigl||k|\bigr|\bigr|=|k|.$$
Any finite nest of bars around $k$ equals $|k|$.""",
            ),
        ],
        overview="Extra bars around $|A|$ collapse. Stripping outer bars from $\\bigl||A|-c\\bigr|$ needs $|A|\\ge c$; nested bars never recover a signed translation $A-c$.",
    ),
    task(
        title="Quotient of opposite linears then a false global constant",
        subsection="2.4",
        difficulty="5/5",
        context=CONTEXT,
        items=[
            (
                r"Whenever $w<4$, rewriting $|w-4|$ as $4-w$ and then dividing by $4-w$ is claimed to leave $1$.",
                True,
                r"""On $w<4$ the bars flip the inside, and the denominator is that same positive quantity:
$$\frac{|w-4|}{4-w}=\frac{4-w}{4-w}=1.$$
The leftover is the claimed constant.""",
            ),
            (
                r"On the side $u>1$, rewriting $|u-1|$ as $u-1$ and dividing by $1-u$ is said to leave $-1$.",
                True,
                r"""If $u>1$ then $|u-1|=u-1$ and $1-u=-(u-1)$, so
$$\frac{|u-1|}{1-u}=\frac{u-1}{-(u-1)}=-1.$$""",
            ),
            (
                r"Cancelling to $1$ in $|z-6|/(z-6)$ for every $z\neq 6$ is proposed.",
                False,
                r"""The quotient is the sign of $z-6$:
$$\frac{|z-6|}{z-6}=\begin{cases}1&z>6\\-1&z<6\end{cases}.$$
A global cancellation to $1$ ignores the left-hand side.""",
            ),
            (
                r"Recording $|h-7|/(7-h)$ as identically $1$ away from $h=7$ is proposed.",
                False,
                r"""The quotient equals $1$ for $h<7$ and equals $-1$ for $h>7$:
$$\frac{|h-7|}{7-h}=\begin{cases}1&h<7\\-1&h>7\end{cases}.$$
It is not the constant $1$ on the whole punctured line.""",
            ),
            (
                r"Recording $|k-8|/(8-k)$ as identically $-1$ away from $k=8$ is proposed.",
                False,
                r"""On $k<8$ one has $|k-8|=8-k$, so
$$\frac{|k-8|}{8-k}=1,$$
which is not $-1$. The constant $-1$ appears only on $k>8$.""",
            ),
        ],
        overview="Each opposite linear pair is a piecewise constant $\\pm 1$ after a piecewise rewrite of the numerator. A single constant on the whole punctured line is the wrong slogan, and $|A|/A$ is the sign of $A$, not identically $1$.",
    ),
    task(
        title="Two quadratics, only one a square",
        subsection="2.4",
        difficulty="5/5",
        context=CONTEXT,
        items=[
            (
                r"The first is a square: $w^2-8w+16=(w-4)^2$, so $|w^2-8w+16|=(w-4)^2$.",
                True,
                r"""The constant $16$ is $4^2$, matching half of $8$:
$$w^2-8w+16=(w-4)^2.$$
The quadratic is a square, hence nonnegative, and the bars drop.""",
            ),
            (
                r"The neighbouring trinomial $u^2-2u$ completes to $(u-1)^2-1$.",
                True,
                r"""Half of $2$ is $1$, and $1^2=1$, so
$$u^2-2u=(u^2-2u+1)-1=(u-1)^2-1.$$
The calculation recovers the claimed form.""",
            ),
            (
                r"Writing $|z^2-12z+35|=(z-6)^2-1$ as an identity is proposed.",
                False,
                r"""At $z=6$ the completed form is $-1$:
$$(6-6)^2-1=-1.$$
Absolute value cannot equal $-1$. The quadratic dips below zero.""",
            ),
            (
                r"At $h=7$ the quadratic $h^2-14h+48$ equals $-1$, hence its absolute value is $1$.",
                True,
                r"""Substitute: $49-98+48=-1$, and $|-1|=1$. Completing the square predicted that dip:
$$h^2-14h+48=(h-7)^2-1.$$""",
            ),
            (
                r"Because both look similar, $|k^2-16k+63|$ is said to equal $(k-8)^2$ as well.",
                False,
                r"""At the vertex $k=8$,
$$|64-128+63|=|-1|=1,\qquad (8-8)^2=0.$$
Similarity of coefficients does not transfer the always-a-square property.""",
            ),
        ],
        overview="A quadratic that is a square may drop its bars. A neighbouring polynomial that completes to $(A)^2-1$ changes sign, so bars stay essential and the value at the vertex is $1$, not $0$.",
    ),
    task(
        title="Wrong piece chosen then a leftover constant",
        subsection="2.4",
        difficulty="5/5",
        context=CONTEXT,
        items=[
            (
                r"On the half-line $n<4$, rewriting $|n-4|$ as $4-n$ and then adding $n$ is claimed to leave the constant $4$.",
                True,
                r"""On $n<4$ the inside is negative, so $|n-4|=4-n$. Adding the letter cancels it:
$$(4-n)+n=4.$$""",
            ),
            (
                r"For $u>6$, using the left-hand piece $|u-6|=6-u$ and adding $u$ is said to leave $6$.",
                False,
                r"""On $u>6$ the correct piece is $|u-6|=u-6$, not $6-u$. Using the left-hand piece anyway produces
$$(6-u)+u=6.$$
That is not a rewriting of $|u-6|+u$, which actually equals $(u-6)+u=2u-6$. At $u=8$ the true value is $10$, not $6$.""",
            ),
            (
                r"Whenever $z\ge 1$, copying $|z-1|=z-1$ and subtracting $z$ is claimed to leave $-1$.",
                True,
                r"""On $z\ge 1$ the bars copy the inside, so
$$(z-1)-z=-1.$$
The leftover is the claimed constant.""",
            ),
            (
                r"After rewriting $|h-8|$ as $h-8$ on $h<8$ and adding $8$, the letter $h$ is said to remain.",
                False,
                r"""On $h<8$ the correct piece is $|h-8|=8-h$, not $h-8$. The illegal rewriting $(h-8)+8=h$ is not the value of $|h-8|+8$:
$$|h-8|+8=(8-h)+8=16-h.$$
At $h=1$ the true value is $15$, not $1$.""",
            ),
            (
                r"On $4\le k\le 8$, folding $|k-4|+|k-8|$ as the constant $5$ is proposed.",
                False,
                r"""Between $4$ and $8$ the distances add to the length $4$, not $5$:
$$|k-4|+|k-8|=8-4=4.$$
The recorded constant $5$ would be the gap between $1$ and $6$, a different pair of marks.""",
            ),
        ],
        overview="After choosing the correct linear piece, adding or subtracting the letter leaves a constant. Using the opposite piece, or quoting the length of a different segment, produces a false leftover.",
    ),
    task(
        title="Root of a square after completing versus dropping bars",
        subsection="2.4",
        difficulty="5/5",
        context=CONTEXT,
        items=[
            (
                r"Completing $w^2-8w+16$ first, $\sqrt{(w-4)^2}$ is rewritten as $|w-4|$.",
                True,
                r"""The trinomial is already $(w-4)^2$. The identity $\sqrt{A^2}=|A|$ with $A=w-4$ gives
$$\sqrt{(w-4)^2}=|w-4|.$$""",
            ),
            (
                r"Dropping the bars, $\sqrt{(u-1)^2}$ is replaced by $u-1$ for every real $u$.",
                False,
                r"""The principal root is $|u-1|$. For $u=-4$,
$$\sqrt{(-5)^2}=\sqrt{25}=5\neq -5.$$
The unrestricted replacement by the inside fails.""",
            ),
            (
                r"Whenever $z>6$, replacing $\sqrt{(z-6)^2}$ by $z-6$ and concluding $\sqrt{(z-6)^2}-(z-6)=0$ is accepted.",
                True,
                r"""If $z>6$ then $z-6>0$, so the root equals the inside:
$$\sqrt{(z-6)^2}-(z-6)=0.$$
The difference vanishes on that half-line.""",
            ),
            (
                r"After substituting $h=1$ into $\sqrt{(h-8)^2}$, the value $-7$ is recorded.",
                False,
                r"""Substitute $h=1$:
$$\sqrt{(1-8)^2}=\sqrt{49}=7\neq -7.$$
The principal root of a square is nonnegative.""",
            ),
            (
                r"Because $(k-4)^2+1\ge 1$, one has $\sqrt{\bigl((k-4)^2+1\bigr)^2}=(k-4)^2+1$.",
                True,
                r"""Set $A=(k-4)^2+1$. Then $A\ge 1>0$, so
$$\sqrt{A^2}=|A|=A.$$
The bars (equivalently the principal root) may be dropped after completing the square.""",
            ),
        ],
        overview="Completing a square and then taking a principal root produces a modulus. Dropping that modulus needs a nonnegative inside; a positive leftover after completing the square licenses $\\sqrt{A^2}=A$.",
    ),
    task(
        title="Mixed slogans that look like product rules",
        subsection="2.4",
        difficulty="5/5",
        context=CONTEXT,
        items=[
            (
                r"For every real $w$ and $u$, $|wu|=|w||u|$ is claimed.",
                True,
                r"""This is the product rule. Negative factors contribute moduli rather than signed copies:
$$|wu|=|w||u|.$$
The identity needs no restriction.""",
            ),
            (
                r"The companion $|z+h|=|z|+|h|$ is written as an identity.",
                False,
                r"""A shift is a sum, not a product. For $z=8$, $h=-4$,
$$|4|=4,\qquad 8+4=12.$$
The two sides differ.""",
            ),
            (
                r"Nested bars around a product, $\bigl||k n|\bigr|=|k||n|$, is recorded.",
                True,
                r"""First $|kn|=|k||n|$, which is nonnegative, so a second pair of bars does nothing:
$$\bigl||kn|\bigr|=|k||n|.$$""",
            ),
            (
                r"Treating $|4n|$ as interchangeable with $|n|+4$ is proposed.",
                False,
                r"""Homogeneity is $|4n|=4|n|$, a product, not a sum. At $n=1$,
$$4\neq 5.$$
The slogan confuses $|c\,r|$ with $|r|+|c|$.""",
            ),
            (
                r"Whenever $k=8$ and $h=-4$, $|k+h|$ is recorded as $|k|+|h|$.",
                False,
                r"""Substitute:
$$|8-4|=4,\qquad |8|+|-4|=12.$$
Opposite signs give a strict triangle inequality, not equality.""",
            ),
        ],
        overview="The product rule and nested bars around a product are identities. The companion slogans $|A+B|=|A|+|B|$ and $|cA|=|A|+|c|$ are not; opposite-sign numerical pairs make the failure visible.",
    ),
]
