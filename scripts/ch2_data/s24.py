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
                
            ),
            (
                r"For every real $u$, dropping the bars in $|2u+1|=2u+1$ is treated as legal.",
                False,
                
            ),
            (
                r"Whenever $z>0$, replacing $\sqrt{z^2}$ by $z$ and concluding $\sqrt{z^2}-z=0$ on that half-line is accepted.",
                True,
                
            ),
            (
                r"Away from $h=1$, the quotient $|h-1|/(1-h)$ is recorded as identically $1$.",
                False,
                
            ),
            (
                r"On $1\le k\le 6$, rewriting $|k-1|+|k-6|$ as the constant $5$ is proposed.",
                True,
                
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
                
            ),
            (
                r"Dropping the bars, a note replaces $\sqrt{w^2}$ by $w$ on the whole line.",
                False,
                
            ),
            (
                r"Whenever $u<0$, replacing $\sqrt{u^2}$ by $u$ is treated as valid.",
                False,
                
            ),
            (
                r"On the ray $z\ge 0$, rewriting $\sqrt{z^2}$ as $z$ is accepted.",
                True,
                
            ),
            (
                r"After substituting $h=-4$, the principal root $\sqrt{h^2}$ is said to equal $-4$.",
                False,
                
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
                
            ),
            (
                r"On the half-line $w<0$, the twin $|w|/w$ is recorded as $-1$.",
                True,
                
            ),
            (
                r"A booklet records $|z|/z=1$ for every $z\neq 0$.",
                False,
                
            ),
            (
                r"Whenever $h>0$, the reciprocal $h/|h|$ is claimed to equal $1$.",
                True,
                
            ),
            (
                r"At the origin $k=0$, both $|k|/k$ and $k/|k|$ are declared equal to $0$.",
                False,
                
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
                
            ),
            (
                r"The companion identity $|n+k|=|n|+|k|$ is written for all real $n$ and $k$.",
                False,
                
            ),
            (
                r"Scaling by four, $|4w|=4|w|$ is treated as an identity.",
                True,
                
            ),
            (
                r"Scaling by minus four, $|-4u|=-4|u|$ is asserted.",
                False,
                
            ),
            (
                r"Treating $|z+6|$ as the scaled copy $6|z|$ is proposed.",
                False,
                
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
                
            ),
            (
                r"A leading minus inside, $|-w|=|w|$, is claimed for every real $w$.",
                True,
                
            ),
            (
                r"Writing $|-u|=-|u|$ as an identity is proposed.",
                False,
                
            ),
            (
                r"The swap $|z-4|=|4-z|$ is used as an identity.",
                True,
                
            ),
            (
                r"Someone claims $||h-1||=h-1$ for every real $h$.",
                False,
                
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
                
            ),
            (
                r"On the half-line $u<0$, flipping $|u|$ to $-u$ and then adding $u$ is said to leave $0$.",
                True,
                
            ),
            (
                r"For every real $z$, the identity $|z|=z$ is printed, so $|z|-z$ is declared identically $0$.",
                False,
                
            ),
            (
                r"Once $n>0$, taking $|n|$ as $-n$ and concluding $|n|+n=0$ is accepted.",
                False,
                
            ),
            (
                r"Dropping the minus unconditionally, someone writes $|k|=-k$ and concludes $|k|+k=0$ on the whole line.",
                False,
                
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
                
            ),
            (
                r"Distance interpretation treats $|u-1|$ as possibly negative when $u<1$.",
                False,
                
            ),
            (
                r"Whenever $z\ge 6$, dropping bars via $|z-6|=z-6$ and recording $|z-6|-(z-6)=0$ is accepted.",
                True,
                
            ),
            (
                r"Adding $h$ to $7$ is said to give the same number as $|h-7|$.",
                False,
                
            ),
            (
                r"Provided $k\ge 8$, the rewrite $|k-8|=k-8$ then adding $8$ is claimed to recover $k$.",
                True,
                
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
                
            ),
            (
                r"A quotient identity $|z/h|=|z|/|h|$ whenever $h\neq 0$ is applied to record $|8/(-4)|=2$.",
                True,
                
            ),
            (
                r"Replacing $|k+n|$ by $|k|+|n|$ as a product-style identity, so $|8+(-4)|$ is recorded as $12$.",
                False,
                
            ),
            (
                r"Someone writes $|n/k|=n/k$ whenever $k\neq 0$, hence $|-8/4|$ is entered as $-2$.",
                False,
                
            ),
            (
                r"Scaling $|4w|=4w$ for every $w$, so at $w=-1$ the value is recorded as $-4$.",
                False,
                
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
                
            ),
            (
                r"On the side $u>1$, the fraction $|u-1|/(1-u)$ is recorded as $-1$.",
                True,
                
            ),
            (
                r"Cancelling $|z-6|/(6-z)$ to $1$ for every $z\neq 6$ is proposed.",
                False,
                
            ),
            (
                r"Away from $h=7$, because $7-h=-(h-7)$, the fraction $|h-7|/(7-h)$ equals $-\dfrac{|h-7|}{h-7}$.",
                True,
                
            ),
            (
                r"Taking $|k-8|/(8-k)$ at $k=8$ as defined and equal to $0$ is proposed.",
                False,
                
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
                
            ),
            (
                r"Extending the constant $5$ for $|u-1|+|u-6|$ to every real $u$ is proposed.",
                False,
                
            ),
            (
                r"At the midpoint $z=7$ of $[6,8]$, both distances in $|z-6|+|z-8|$ are $1$, summing to $4$.",
                False,
                
            ),
            (
                r"Left of the knot $h<1$, the sum $|h-1|+|h-8|$ is rewritten as the constant $7$.",
                False,
                
            ),
            (
                r"Distance interpretation: on $[4,7]$ the marks $4$ and $7$ are $3$ units apart, so $|k-4|+|k-7|$ equals $3$ there.",
                True,
                
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
                
            ),
            (
                r"The identity $\sqrt{(u-1)^2}=|u-1|$ is recorded.",
                True,
                
            ),
            (
                r"On the region $z\ge 6$, the bars in $\sqrt{(z-6)^2}=|z-6|$ may be dropped.",
                True,
                
            ),
            (
                r"After substituting $h=1$ into $\sqrt{(h-8)^2}$, the root is said to equal $1-8=-7$.",
                False,
                
            ),
            (
                r"Factoring $4$, $\sqrt{(4n-4)^2}=4|n-1|$ is used.",
                True,
                
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
                
            ),
            (
                r"A workshop writes $\sqrt{w^2}+w=2w$ as an identity.",
                False,
                
            ),
            (
                r"On the positive half-line $u>0$ the sum $\sqrt{u^2}+u$ equals $2u$.",
                True,
                
            ),
            (
                r"The identity $\sqrt{z^2}+z=0$ is asserted for every real $z$.",
                False,
                
            ),
            (
                r"Whenever $h<0$, forming $\sqrt{h^2}-h$ is said to leave $0$.",
                False,
                
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
                
            ),
            (
                r"The comparison $|z+h|\le |z|+|h|$ is treated as always valid.",
                True,
                
            ),
            (
                r"When $k=8$ and $n=-4$, a candidate says $|k+n|$ equals $|k|+|n|$.",
                False,
                
            ),
            (
                r"If $w$ and $u$ are both negative, $|w+u|=|w|+|u|$ is asserted.",
                True,
                
            ),
            (
                r"If both letters $k$ and $n$ are positive, $|k+n|=|k|+|n|$ is recorded.",
                True,
                
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
                
            ),
            (
                r"On the region $u<1$, $|4u-4|$ is rewritten as $4-4u$.",
                True,
                
            ),
            (
                r"Writing $|2z-8|=2z-8$ as an identity on the whole line is proposed.",
                False,
                
            ),
            (
                r"Factoring $4$, $|4h-4|=4(h-1)$ without bars is claimed as an identity.",
                False,
                
            ),
            (
                r"The two pieces $2k-8$ and $8-2k$ are said to be equal for every $k$.",
                False,
                
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
                
            ),
            (
                r"A booklet claims $|u^2-2u+1|=0$ for every $u$.",
                False,
                
            ),
            (
                r"Completing $z^2-12z+37$ gives $(z-6)^2+1$, so $|z^2-12z+37|=(z-6)^2+1$.",
                True,
                
            ),
            (
                r"Someone writes $|h^2-14h+49|=h-7$ as an identity.",
                False,
                
            ),
            (
                r"Because $k^2+1\ge 1$, the rewriting $|k^2+1|=k^2+1$ is used for every $k$.",
                True,
                
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
                
            ),
            (
                r"Someone replaces $|w^3|$ by $w^3$ for every real $w$.",
                False,
                
            ),
            (
                r"Whenever $u<0$, $|u^3|$ is rewritten as $-u^3$.",
                True,
                
            ),
            (
                r"A note claims $|z^3|=|z|^3$ only when $z\ge 0$.",
                False,
                
            ),
            (
                r"Someone replaces $|h^2|$ by $h$ for every real $h$.",
                False,
                
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
                
            ),
            (
                r"On the side $u>1$, $|1-u|$ equals $u-1$.",
                True,
                
            ),
            (
                r"Writing $|6-z|=6-z$ as an unrestricted identity is proposed.",
                False,
                
            ),
            (
                r"Combined with the swap rule, $|7-h|=|h-7|$ throughout.",
                True,
                
            ),
            (
                r"The two pieces $8-k$ and $k-8$ are identical functions.",
                False,
                
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
                
            ),
            (
                r"When the scalar is $-4$, $|-4u|=4|u|$ is recorded.",
                True,
                
            ),
            (
                r"Pulling a negative scalar out unchanged, $|-6z|=-6|z|$ is asserted.",
                False,
                
            ),
            (
                r"Treating $|4h|$ as interchangeable with $|h|+4$ is proposed.",
                False,
                
            ),
            (
                r"Writing $|8k|=8k$ for every real $k$ is proposed.",
                False,
                
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
                
            ),
            (
                r"The correct unrestricted rewriting is $\sqrt{(z-h)^2}=|z-h|$.",
                True,
                
            ),
            (
                r"Whenever $k+n\ge 0$ the bars in $\sqrt{(k+n)^2}=|k+n|$ may be dropped.",
                True,
                
            ),
            (
                r"After setting $w=1$, $u=-8$, the root $\sqrt{(w+u)^2}$ is said to equal $-7$.",
                False,
                
            ),
            (
                r"Whenever $n\ge 4$, replacing $\sqrt{(n-4)^2}$ by $n-4$ and concluding $\sqrt{(n-4)^2}-(n-4)=0$ is accepted.",
                True,
                
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
                
            ),
            (
                r"Keeping the constant $2$ of $|u-6|+|u-8|$ also for $u=1$ is proposed.",
                False,
                
            ),
            (
                r"At the midpoint $z=4$ of $[1,7]$, both distances in $|z-1|+|z-7|$ are $3$, summing to $8$.",
                False,
                
            ),
            (
                r"Left of the other knot $h<4$, the sum $|h-4|+|h-6|$ is rewritten as $2$ as well.",
                False,
                
            ),
            (
                r"Distance interpretation: the marks $1$ and $4$ are $3$ units apart, so on $[1,4]$ one has $|k-1|+|k-4|=3$.",
                True,
                
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
                
            ),
            (
                r"A margin note writes $u^2-2u+5=(u-1)^2-4$.",
                False,
                
            ),
            (
                r"Because $(z-6)^2-1$ reaches $-1$, writing $|z^2-12z+35|=(z-6)^2-1$ as an identity is proposed.",
                False,
                
            ),
            (
                r"At $h=7$, the quadratic $h^2-14h+48$ equals $-1$, so the bars turn it into $1$.",
                True,
                
            ),
            (
                r"Expanding $(k-8)^2+1$ recovers $k^2-16k+65$, so $|k^2-16k+65|=(k-8)^2+1$.",
                True,
                
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
                
            ),
            (
                r"If $z>0$ and $h<0$, equality $|z+h|=|z|+|h|$ is claimed nonetheless.",
                False,
                
            ),
            (
                r"One of the two letters being $0$ is enough for $|k+0|=|k|+|0|$.",
                True,
                
            ),
            (
                r"A candidate says $|n+z|=|n|+|z|$ is the same statement as $|n+z|=\bigl||n|-|z|\bigr|$.",
                False,
                
            ),
            (
                r"The numerical pair $k=8$, $n=-4$ is offered as a case where $|k+n|$ matches $|k|+|n|$.",
                False,
                
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
                
            ),
            (
                r"Writing $|u^2-2u|=(u-1)^2-1$ as an identity is proposed.",
                False,
                
            ),
            (
                r"At $z=6$, the quadratic $z^2-12z+35$ equals $-1$, so the bars turn it into $1$.",
                True,
                
            ),
            (
                r"Factoring, $|h^2-8h+7|=|h-1||h-7|$.",
                True,
                
            ),
            (
                r"Because the completed form of $k^2-16k+63$ has a $-1$, the quadratic is negative for every $k$.",
                False,
                
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
                
            ),
            (
                r"Equality in that reverse form is said to hold for every pair $(z,h)$.",
                False,
                
            ),
            (
                r"If $k$ and $n$ have opposite signs, $|k-n|=|k|+|n|$, which is at least as large as $\bigl||k|-|n|\bigr|$.",
                True,
                
            ),
            (
                r"Writing $\bigl||h|-|w|\bigr|=|h|-|w|$ as an identity is proposed.",
                False,
                
            ),
            (
                r"The pair $k=8$, $n=-4$ is claimed to make both $\bigl||8|-|-4|\bigr|$ and $|8-(-4)|$ equal $4$.",
                False,
                
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
                
            ),
            (
                r"Stripping the outer bars in $\bigl||u|-1\bigr|$ down to $|u|-1$ is proposed for every real $u$.",
                False,
                
            ),
            (
                r"On the region $|z|\ge 6$, rewriting $\bigl||z|-6\bigr|$ as $|z|-6$ is accepted.",
                True,
                
            ),
            (
                r"Someone claims $\bigl||h-7|\bigr|=h-7$ for every $h$.",
                False,
                
            ),
            (
                r"After collapsing nested bars, $|||k|||$ is recorded as $|k|$.",
                True,
                
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
                
            ),
            (
                r"On the side $u>1$, rewriting $|u-1|$ as $u-1$ and dividing by $1-u$ is said to leave $-1$.",
                True,
                
            ),
            (
                r"Cancelling to $1$ in $|z-6|/(z-6)$ for every $z\neq 6$ is proposed.",
                False,
                
            ),
            (
                r"Recording $|h-7|/(7-h)$ as identically $1$ away from $h=7$ is proposed.",
                False,
                
            ),
            (
                r"Recording $|k-8|/(8-k)$ as identically $-1$ away from $k=8$ is proposed.",
                False,
                
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
                
            ),
            (
                r"The neighbouring trinomial $u^2-2u$ completes to $(u-1)^2-1$.",
                True,
                
            ),
            (
                r"Writing $|z^2-12z+35|=(z-6)^2-1$ as an identity is proposed.",
                False,
                
            ),
            (
                r"At $h=7$ the quadratic $h^2-14h+48$ equals $-1$, hence its absolute value is $1$.",
                True,
                
            ),
            (
                r"Because both look similar, $|k^2-16k+63|$ is said to equal $(k-8)^2$ as well.",
                False,
                
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
                
            ),
            (
                r"For $u>6$, using the left-hand piece $|u-6|=6-u$ and adding $u$ is said to leave $6$.",
                False,
                
            ),
            (
                r"Whenever $z\ge 1$, copying $|z-1|=z-1$ and subtracting $z$ is claimed to leave $-1$.",
                True,
                
            ),
            (
                r"After rewriting $|h-8|$ as $h-8$ on $h<8$ and adding $8$, the letter $h$ is said to remain.",
                False,
                
            ),
            (
                r"On $4\le k\le 8$, folding $|k-4|+|k-8|$ as the constant $5$ is proposed.",
                False,
                
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
                
            ),
            (
                r"Dropping the bars, $\sqrt{(u-1)^2}$ is replaced by $u-1$ for every real $u$.",
                False,
                
            ),
            (
                r"Whenever $z>6$, replacing $\sqrt{(z-6)^2}$ by $z-6$ and concluding $\sqrt{(z-6)^2}-(z-6)=0$ is accepted.",
                True,
                
            ),
            (
                r"After substituting $h=1$ into $\sqrt{(h-8)^2}$, the value $-7$ is recorded.",
                False,
                
            ),
            (
                r"Because $(k-4)^2+1\ge 1$, one has $\sqrt{\bigl((k-4)^2+1\bigr)^2}=(k-4)^2+1$.",
                True,
                
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
                
            ),
            (
                r"The companion $|z+h|=|z|+|h|$ is written as an identity.",
                False,
                
            ),
            (
                r"Nested bars around a product, $\bigl||k n|\bigr|=|k||n|$, is recorded.",
                True,
                
            ),
            (
                r"Treating $|4n|$ as interchangeable with $|n|+4$ is proposed.",
                False,
                
            ),
            (
                r"Whenever $k=8$ and $h=-4$, $|k+h|$ is recorded as $|k|+|h|$.",
                False,
                
            ),
        ],
        overview="The product rule and nested bars around a product are identities. The companion slogans $|A+B|=|A|+|B|$ and $|cA|=|A|+|c|$ are not; opposite-sign numerical pairs make the failure visible.",
    ),
]
