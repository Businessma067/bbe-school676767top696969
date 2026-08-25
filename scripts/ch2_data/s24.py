from __future__ import annotations

from common import task

TASKS = [
    task(
        title='Sign chart for a single letter',
        subsection="2.4",
        difficulty='3/5',
        context='A revision card explains how $|t|$ is rewritten from the sign of the letter $t$. Judge each line on its own.',
        items=[
            (
                'Whenever $t$ is positive, a card rewrites $|t|$ as $t$.',
                True,
                r"""By definition the absolute value copies a nonnegative number:
$$|t|=t\qquad\text{if }t>0.$$
The claimed rewriting matches that clause of the definition.""",
            ),
            (
                'On the half-line $t<0$ the same card rewrites $|t|$ as $-t$.',
                True,
                r"""If $t$ is negative then $-t$ is positive, and the definition sets
$$|t|=-t\qquad\text{if }t<0.$$
The two sides agree on that half-line.""",
            ),
            (
                'The unrestricted rewriting $|t|=t$ is printed as an identity for every real $t$.',
                False,
                r"""The clause $|t|=t$ requires $t\ge 0$. For a counter-example take $t=-4$:
$$|-4|=4\neq -4.$$
The printed identity fails as soon as $t$ is negative.""",
            ),
            (
                'A printed note asserts $|-t|=|t|$ for every real $t$.',
                True,
                r"""The numbers $t$ and $-t$ lie at the same distance from $0$, so
$$|-t|=|t|.$$
The identity does not need a sign restriction.""",
            ),
            (
                'Dropping the minus, someone writes $|t|=-t$ with no condition on $t$.',
                False,
                r"""The clause $|t|=-t$ holds only for $t\le 0$. For $t=3$ one has $|3|=3$ while $-3$ is negative, so the two sides differ.""",
            ),
        ],
        overview='Absolute value copies a nonnegative letter and flips a negative one. The rules $|t|=t$ and $|t|=-t$ are sign-restricted; $|-t|=|t|$ is not.',
    ),
    task(
        title='Swapping the two insides',
        subsection="2.4",
        difficulty='3/5',
        context='Letters $a$ and $b$ appear inside a pair of absolute-value bars. Each claim is a separate rewriting.',
        items=[
            (
                'Distance interpretation treats $|a-b|$ as the same length as $|b-a|$.',
                True,
                r"""The distance from $a$ to $b$ on the line does not depend on order:
$$|a-b|=|b-a|.$$
Swapping the insides does not change the value.""",
            ),
            (
                'A marker claims $|a-b|=a-b$ for every real pair $(a,b)$.',
                False,
                r"""Dropping the bars is legitimate only when $a-b\ge 0$, that is $a\ge b$. If $a=1$ and $b=4$ then $|1-4|=3$ while $1-4=-3$.""",
            ),
            (
                'After swapping the insides, $|3-7|$ is said to equal $|7-3|$.',
                True,
                r"""Both sides equal $4$:
$$|3-7|=4=|7-3|.$$
This is the numerical case of $|a-b|=|b-a|$.""",
            ),
            (
                'Without the bars, $a-b$ is treated as interchangeable with $b-a$.',
                False,
                r"""Algebraically $b-a=-(a-b)$. The two differences are opposites, not identical, unless $a=b$. Absolute values erase that sign; the bare differences do not.""",
            ),
            (
                'Restricted to the region $a\\ge b$, the rewriting $|a-b|=a-b$ is used.',
                True,
                r"""On $a\ge b$ the inside $a-b$ is nonnegative, so the bars are redundant:
$$|a-b|=a-b.$$
The restriction makes the rewriting valid.""",
            ),
        ],
        overview='Distance is symmetric, so $|a-b|=|b-a|$. Dropping the bars requires a sign condition on $a-b$.',
    ),
    task(
        title='A pair of opposite insides',
        subsection="2.4",
        difficulty='3/5',
        context='A worksheet prints $|w-4|$ and $|4-w|$ on the same line and asks how they combine.',
        items=[
            (
                'Adding the two absolute values is claimed to give $0$ for every real $w$.',
                False,
                r"""The insides are opposites, not cancelling zeros. For $w=0$,
$$|0-4|+|4-0|=4+4=8\neq 0.$$
The sum vanishes only at the single point $w=4$.""",
            ),
            (
                'The sum $|w-4|+|4-w|$ is rewritten as $2|w-4|$.',
                True,
                r"""Because $4-w=-(w-4)$, one has $|4-w|=|w-4|$. Adding a number to itself doubles it:
$$|w-4|+|4-w|=2|w-4|.$$
The calculation recovers the claimed form.""",
            ),
            (
                'At the single point $w=4$ both insides vanish, so the sum is $0$ there.',
                True,
                r"""Substitute $w=4$:
$$|4-4|+|4-4|=0.$$
That is the only root of the sum, not an identity on the whole line.""",
            ),
            (
                'Because $4-w=-(w-4)$, a tutor says the two absolute values cancel to $0$.',
                False,
                r"""Absolute value ignores a leading minus: $|-(w-4)|=|w-4|$. The two terms are equal, so they add rather than cancel.""",
            ),
            (
                'The identity $|4-w|=|w-4|$ is used throughout the sheet.',
                True,
                r"""This is the swap rule $|c|=|-c|$ applied to $c=w-4$. The two expressions are identical for every $w$.""",
            ),
        ],
        overview='Opposite insides have equal absolute values, so they add to twice one of them rather than cancelling.',
    ),
    task(
        title='Triangle inequality, not an identity',
        subsection="2.4",
        difficulty='4/5',
        context='Letters $p$ and $q$ are unrestricted reals. A tutor compares $|p+q|$ with $|p|+|q|$.',
        items=[
            (
                'Equality in the triangle inequality is claimed for every pair $(p,q)$.',
                False,
                r"""Take $p=5$ and $q=-2$:
$$|5+(-2)|=3,\qquad |5|+|-2|=7.$$
The two sides differ, so equality is not an identity.""",
            ),
            (
                'The comparison $|p+q|\\le |p|+|q|$ is treated as always valid.',
                True,
                r"""This is the triangle inequality on the real line. The distance from $0$ to $p+q$ cannot exceed the sum of the distances from $0$ to $p$ and from $0$ to $q$.""",
            ),
            (
                'When $p=5$ and $q=-2$, a candidate says $|p+q|$ equals $|p|+|q|$.',
                False,
                r"""Opposite signs prevent equality:
$$|5-2|=3\neq 7=|5|+|-2|.$$
The candidate's numerical claim is false.""",
            ),
            (
                'If $p$ and $q$ are both negative, $|p+q|=|p|+|q|$ is asserted.',
                True,
                r"""If $p<0$ and $q<0$ then $p+q<0$, so
$$|p+q|=-(p+q)=-p-q=|p|+|q|.$$
Same-sign pairs give equality.""",
            ),
            (
                'A remark states that $|p+q|$ can exceed $|p|+|q|$ for some pair.',
                False,
                r"""The triangle inequality forbids a strict excess. The sum $|p|+|q|$ is an upper bound, never a number that $|p+q|$ can overshoot.""",
            ),
        ],
        overview='The triangle inequality $|p+q|\\le |p|+|q|$ always holds; equality is a same-sign (or zero) phenomenon, not an identity.',
    ),
    task(
        title='Cubes inside and outside the bars',
        subsection="2.4",
        difficulty='4/5',
        context='Odd powers and absolute values are mixed on a formula sheet in the letter $u$.',
        items=[
            (
                'A candidate writes $|u|^3=|u^3|$ as an identity.',
                True,
                r"""Both sides equal the cube of the nonnegative number $|u|$. Raising to an odd power keeps the need for bars on a signed inside, but the two written expressions match for every real $u$.""",
            ),
            (
                'The even analogue $|u|^2=|u^2|$ is likewise claimed.',
                True,
                r"""A square is already nonnegative, so $|u^2|=u^2$. Also $|u|^2=u^2$. The two sides agree:
$$|u|^2=u^2=|u^2|.$$
The calculation recovers the claimed form.""",
            ),
            (
                'Someone replaces $|u^3|$ by $u^3$ for every real $u$.',
                False,
                r"""The inside $u^3$ is negative when $u$ is negative. For $u=-1$,
$$|(-1)^3|=1\neq -1.$$
Dropping the bars is valid only for $u\ge 0$.""",
            ),
            (
                'Whenever $u<0$, $|u^3|$ is rewritten as $-u^3$.',
                True,
                r"""If $u<0$ then $u^3<0$, and the definition of absolute value flips a negative inside:
$$|u^3|=-u^3\qquad\text{for }u<0.$$
The algebraic identity just shown is the one recorded.""",
            ),
            (
                'A note claims $|u^3|=|u|^3$ only when $u\\ge 0$.',
                False,
                r"""The identity holds on the negative half-line as well. For $u=-2$,
$$|(-8)|=8=2^3=|-2|^3.$$
The extra restriction is unnecessary.""",
            ),
        ],
        overview='Odd powers: $|u^3|=|u|^3$ always, but $|u^3|=u^3$ only for $u\\ge 0$. Even powers absorb the bars because squares are nonnegative.',
    ),
    task(
        title='A quadratic that is already a square',
        subsection="2.4",
        difficulty='3/5',
        context='The trinomial $x^2-6x+9$ appears inside absolute-value bars on a factoring sheet.',
        items=[
            (
                'After factoring, $|x^2-6x+9|$ is rewritten as $|(x-3)^2|$.',
                True,
                r"""The trinomial is the square of a linear factor:
$$x^2-6x+9=(x-3)^2,$$
so wrapping either form in bars gives the same expression.""",
            ),
            (
                'Because a square is never negative, $|x^2-6x+9|=(x-3)^2$ is claimed for every $x$.',
                True,
                r"""$(x-3)^2\ge 0$ for every real $x$, so the bars do nothing:
$$|(x-3)^2|=(x-3)^2.$$
The rewriting is an identity.""",
            ),
            (
                'A booklet claims $|x^2-6x+9|=0$ for every $x$.',
                False,
                r"""The square $(x-3)^2$ vanishes only at $x=3$. For $x=0$ one has $|9|=9\neq 0$. The bars do not force a quadratic to be the zero function.""",
            ),
            (
                'Completing the square is said to be unnecessary because the trinomial is already $(x-3)^2$.',
                True,
                r"""The middle coefficient is $-2\cdot 3$ and the constant is $3^2$, so the expression is already a completed square. No extra constant term remains.""",
            ),
            (
                'Someone writes $|x^2-6x+9|=x-3$ as an identity.',
                False,
                r"""The left-hand side equals $(x-3)^2$, which is nonnegative. The right-hand side $x-3$ is negative for $x<3$. At $x=1$ one has $4\neq -2$.""",
            ),
        ],
        overview='A quadratic that is a square is nonnegative, so absolute value may be dropped after writing it as $(x-3)^2$.',
    ),
    task(
        title='A quadratic that changes sign',
        subsection="2.4",
        difficulty='4/5',
        context='The expression $y^2-4$ is placed inside absolute-value bars. Sign of the inside now matters.',
        items=[
            (
                'The rewriting $|y^2-4|=y^2-4$ is presented as an identity.',
                False,
                r"""The inside is negative when $|y|<2$. For $y=0$,
$$|-4|=4\neq -4.$$
Dropping the bars is legitimate only where $y^2-4\ge 0$.""",
            ),
            (
                'On the set $|y|\\ge 2$ the inside is nonnegative, so $|y^2-4|=y^2-4$ there.',
                True,
                r"""$y^2-4\ge 0$ precisely when $|y|\ge 2$. On that set the definition copies the inside, and the claimed rewriting holds.""",
            ),
            (
                'Whenever $|y|<2$, $|y^2-4|$ equals $4-y^2$.',
                True,
                r"""On $|y|<2$ the inside $y^2-4$ is negative, so
$$|y^2-4|=-(y^2-4)=4-y^2.$$
The displayed computation supports this claim.""",
            ),
            (
                'A marker treats $|y^2-4|$ as always equal to $(y-2)^2$.',
                False,
                r"""$(y-2)^2=y^2-4y+4$, which is a different polynomial. At $y=3$ one has $|9-4|=5$ while $(3-2)^2=1$.""",
            ),
            (
                'Factoring first, $|y^2-4|=|y-2||y+2|$ is claimed.',
                True,
                r"""Difference of squares and the product rule $|mn|=|m||n|$ give
$$|y^2-4|=|(y-2)(y+2)|=|y-2||y+2|.$$
The displayed equality is the content of the claim.""",
            ),
        ],
        overview='Unlike a square, $y^2-4$ changes sign. Bars drop only for $|y|\\ge 2$; otherwise the inside flips to $4-y^2$.',
    ),
    task(
        title='Two distances on a closed interval',
        subsection="2.4",
        difficulty='4/5',
        context='On the interval $-2\\le x\\le 5$ a tutor rewrites the sum $|x-5|+|x+2|$.',
        items=[
            (
                'On the interval $[-2,5]$ the sum is claimed to equal $7$ constantly.',
                True,
                r"""Between the points $-2$ and $5$ the two distances add to the length of the segment:
$$|x-5|+|x-(-2)|=5-(-2)=7.$$
The sum is the constant $7$ on that closed interval.""",
            ),
            (
                'Distance interpretation: the marks $-2$ and $5$ are $7$ units apart, so between them the distances add to $7$.',
                True,
                r"""For any $x$ between two fixed points the sum of distances to those points equals the distance between the points. Here that distance is $7$.""",
            ),
            (
                'Extending the same constant $7$ to every real $x$ is proposed.',
                False,
                r"""Outside the interval the path doubles back. At $x=8$,
$$|8-5|+|8+2|=3+10=13\neq 7.$$
The constant holds only between the two marks.""",
            ),
            (
                'At the left endpoint $x=-2$ the sum equals $|-2-5|+|-2+2|=7$.',
                True,
                r"""Direct substitution:
$$|-7|+|0|=7.$$
Endpoints of the interval still give the segment length.""",
            ),
            (
                'Outside the interval the sum is said to be strictly smaller than $7$.',
                False,
                r"""Leaving the segment increases the total. For $x<-2$ one has $5-x+(-2-x)=3-2x>7$, and for $x>5$ one has $2x-3>7$. The sum is larger, not smaller.""",
            ),
        ],
        overview='On the segment joining two points, the sum of distances to those points equals the segment length; outside it is larger.',
    ),
    task(
        title='Dropping bars from a square root',
        subsection="2.4",
        difficulty='4/5',
        context='Several candidates rewrite $\\sqrt{a^2}$. Each claim is independent.',
        items=[
            (
                'A student replaces $\\sqrt{a^2}$ by $a$ for every real $a$.',
                False,
                r"""The principal square root is nonnegative. If $a=-3$ then $\sqrt{9}=3\neq -3$. The unrestricted replacement by $a$ fails on the negative half-line.""",
            ),
            (
                'The principal square root $\\sqrt{a^2}$ is rewritten as $|a|$.',
                True,
                r"""By definition $\sqrt{a^2}$ is the unique nonnegative number whose square is $a^2$, which is $|a|$:
$$\sqrt{a^2}=|a|.$$
The calculation recovers the claimed form.""",
            ),
            (
                'Whenever $a<0$ the replacement $\\sqrt{a^2}=a$ produces a negative number, which cannot be a principal square root.',
                True,
                r"""Principal square roots are $\ge 0$. For negative $a$ the number $a$ itself is negative, so it cannot equal $\sqrt{a^2}$. The objection is correct.""",
            ),
            (
                'After substituting $a=-5$, $\\sqrt{25}$ is said to equal $-5$.',
                False,
                r"""$\sqrt{25}=5$, not $-5$. The negative root of $25$ exists as a solution of $z^2=25$, but it is not what the principal-square-root symbol denotes.""",
            ),
            (
                'On the ray $a\\ge 0$ the identity $\\sqrt{a^2}=a$ holds.',
                True,
                r"""If $a\ge 0$ then $|a|=a$, hence $\sqrt{a^2}=a$. The restriction to the nonnegative ray makes the simpler rewriting valid.""",
            ),
        ],
        overview='The identity is $\\sqrt{a^2}=|a|$, not $a$. Replacing the root by $a$ is legitimate only for $a\\ge 0$.',
    ),
    task(
        title='Adding a letter to the root of its square',
        subsection="2.4",
        difficulty='4/5',
        context='The combination $\\sqrt{x^2}+x$ is examined on different parts of the line.',
        items=[
            (
                'Whenever $x<0$ the sum $\\sqrt{x^2}+x$ is claimed to be $0$.',
                True,
                r"""$\sqrt{x^2}=|x|$, and on $x<0$ one has $|x|=-x$, so
$$|x|+x=-x+x=0.$$
The displayed line is the rewriting under test.""",
            ),
            (
                'A workshop writes $\\sqrt{x^2}+x=2x$ as an identity.',
                False,
                r"""$|x|+x$ equals $2x$ only for $x\ge 0$. On the negative side it equals $0$, not $2x$. For $x=-4$ one has $4-4=0\neq -8$.""",
            ),
            (
                'On the positive half-line the same sum equals $2x$.',
                True,
                r"""If $x>0$ then $|x|=x$, hence
$$\sqrt{x^2}+x=x+x=2x.$$
The displayed computation supports this claim.""",
            ),
            (
                'At $x=0$ the sum is $0$ as well.',
                True,
                r"""$\sqrt{0}+0=0$. The vanishing that holds for every negative $x$ also holds at the origin.""",
            ),
            (
                'The identity $\\sqrt{x^2}+x=0$ is asserted for every real $x$.',
                False,
                r"""On the positive side the sum is $2x$, which is positive. For $x=3$ one has $3+3=6\neq 0$. Vanishing is a nonpositive phenomenon.""",
            ),
        ],
        overview='$\\sqrt{x^2}+x=|x|+x$ equals $0$ for $x\\le 0$ and equals $2x$ for $x\\ge 0$; neither formula is an unrestricted identity.',
    ),
    task(
        title='A quotient with opposite linear factors',
        subsection="2.4",
        difficulty='5/5',
        context='The fraction $|x-3|/(3-x)$ is simplified away from the point $x=3$.',
        items=[
            (
                'Whenever $x<3$ the fraction equals $1$.',
                True,
                r"""If $x<3$ then $3-x>0$ and $|x-3|=3-x$, so
$$\frac{|x-3|}{3-x}=\frac{3-x}{3-x}=1.$$
The displayed line is the rewriting under test.""",
            ),
            (
                'On the side $x>3$ the same fraction equals $-1$.',
                True,
                r"""If $x>3$ then $|x-3|=x-3$ and $3-x=-(x-3)$, hence
$$\frac{x-3}{-(x-3)}=-1.$$
The calculation recovers the claimed form.""",
            ),
            (
                'Cancelling to $1$ for every $x\\neq 3$ is proposed.',
                False,
                r"""Cancellation to $1$ uses $3-x=|x-3|$, which fails when $x>3$. On that side the fraction is $-1$, not $1$.""",
            ),
            (
                'At $x=3$ the expression is defined and equals $0$.',
                False,
                r"""The denominator $3-x$ vanishes at $x=3$, so the quotient is undefined. Absolute value in the numerator being $0$ does not remove a zero denominator.""",
            ),
            (
                'Because $3-x=-(x-3)$, the fraction equals $-\\dfrac{|x-3|}{x-3}$ for $x\\neq 3$.',
                True,
                r"""Substitute the opposite denominator:
$$\frac{|x-3|}{3-x}=\frac{|x-3|}{-(x-3)}=-\frac{|x-3|}{x-3}.$$
The right-hand side is $-1$ times the sign of $x-3$.""",
            ),
        ],
        overview='Opposite linear factors in bars and in a denominator produce a piecewise constant $\\pm 1$, undefined at the root.',
    ),
    task(
        title='Square root of a squared binomial',
        subsection="2.4",
        difficulty='4/5',
        context='The expression $\\sqrt{(c+d)^2}$ is rewritten in a workshop on two letters.',
        items=[
            (
                'A student replaces $\\sqrt{(c+d)^2}$ by $c+d$ for every real pair.',
                False,
                r"""The principal root is $|c+d|$, not $c+d$. If $c=1$ and $d=-4$ then $c+d=-3$ while $\sqrt{9}=3$.""",
            ),
            (
                'The correct unrestricted rewriting is $\\sqrt{(c+d)^2}=|c+d|$.',
                True,
                r"""The identity $\sqrt{A^2}=|A|$ with $A=c+d$ gives exactly
$$\sqrt{(c+d)^2}=|c+d|.$$
The calculation recovers the claimed form.""",
            ),
            (
                'Whenever $c+d\\ge 0$ the bars may be dropped.',
                True,
                r"""On the half-plane $c+d\ge 0$ one has $|c+d|=c+d$, so the root equals the binomial itself.""",
            ),
            (
                'After setting $c=1$, $d=-4$, the root is said to equal $-3$.',
                False,
                r"""$(1-4)^2=9$ and $\sqrt{9}=3$. The value $-3$ is the binomial, not the principal square root of its square.""",
            ),
            (
                'The identity $\\sqrt{(c+d)^2}=(c+d)^2$ is proposed.',
                False,
                r"""The left-hand side is a root (size $|c+d|$) while the right-hand side is a square (size $(c+d)^2$). They match only in special cases such as $|c+d|\in\{0,1\}$.""",
            ),
        ],
        overview='$\\sqrt{(c+d)^2}=|c+d|$. Replacing the root by the binomial $c+d$ needs $c+d\\ge 0$.',
    ),
    task(
        title='Completing the square as an identity',
        subsection="2.4",
        difficulty='3/5',
        context='After completing the square, $x^2-6x+10$ is compared with $(x-3)^2+1$.',
        items=[
            (
                'After completing the square, $x^2-6x+10=(x-3)^2+1$ is claimed for every $x$.',
                True,
                r"""Take half the middle coefficient: $6/2=3$. Then
$$x^2-6x+10=(x^2-6x+9)+1=(x-3)^2+1.$$
This is an algebraic identity, not a restriction to $x\ge 3$.""",
            ),
            (
                'A margin note writes $x^2-6x+10=(x-3)^2-1$.',
                False,
                r"""The leftover constant is $10-9=1$, a plus not a minus. Expanding the marked form gives $x^2-6x+8$, which is a different quadratic.""",
            ),
            (
                'Because $(x-3)^2+1$ is at least $1$, the original quadratic never vanishes.',
                True,
                r"""A square is $\ge 0$, so $(x-3)^2+1\ge 1>0$. The rewritten form makes the strictly positive character visible.""",
            ),
            (
                'Completing the square is treated as valid only for $x\\ge 3$.',
                False,
                r"""Completing the square is a polynomial identity. Both sides are defined and equal for negative $x$ as well; the vertex $x=3$ is not a domain restriction.""",
            ),
            (
                'Expanding $(x-3)^2+1$ recovers $x^2-6x+9+1=x^2-6x+10$.',
                True,
                r"""$(x-3)^2=x^2-6x+9$. Adding $1$ restores the original constant $10$. The two polynomials are identical.""",
            ),
        ],
        overview='Completing the square rewrites $x^2-6x+10$ as $(x-3)^2+1$ identically; the extra $+1$ keeps the quadratic above zero.',
    ),
    task(
        title='Two linear pieces for a scaled inside',
        subsection="2.4",
        difficulty='4/5',
        context='The expression $|2x-5|$ is rewritten by cases on the real line.',
        items=[
            (
                'On the region $x\\ge 5/2$ the expression equals $2x-5$.',
                True,
                r"""The inside $2x-5$ is nonnegative precisely when $x\ge 5/2$. There the bars copy the inside:
$$|2x-5|=2x-5.$$
The displayed line is the rewriting under test.""",
            ),
            (
                'On the region $x<5/2$ it equals $5-2x$.',
                True,
                r"""If $x<5/2$ then $2x-5<0$, so
$$|2x-5|=-(2x-5)=5-2x.$$
The calculation recovers the claimed form.""",
            ),
            (
                'Writing $|2x-5|=2x-5$ as an identity on the whole line is proposed.',
                False,
                r"""The identity fails on $x<5/2$. At $x=0$ one has $|-5|=5$ while $2\cdot 0-5=-5$.""",
            ),
            (
                'Factoring $2$, $|2x-5|=2\\bigl|x-5/2\\bigr|$ is claimed.',
                True,
                r"""The homogeneity rule $|k\,t|=|k|\,|t|$ with $k=2$ gives
$$|2x-5|=\bigl|2\bigl(x-5/2\bigr)\bigr|=2\bigl|x-5/2\bigr|.$$
The algebraic identity just shown is the one recorded.""",
            ),
            (
                'The two pieces $2x-5$ and $5-2x$ are said to be equal for every $x$.',
                False,
                r"""They are opposites: $(2x-5)+(5-2x)=0$. They meet only at $x=5/2$, where both are $0$.""",
            ),
        ],
        overview='$|2x-5|$ equals the linear expression $2x-5$ to the right of $5/2$ and equals $5-2x$ to the left; equivalently it is $2|x-5/2|$.',
    ),
    task(
        title='Distance to a fixed mark',
        subsection="2.4",
        difficulty='3/5',
        context='The distance interpretation of $|s-6|$ is used on a number line.',
        items=[
            (
                'Distance interpretation: $|s-6|$ is the distance from $s$ to $6$.',
                True,
                r"""By definition $|s-6|$ is the nonnegative gap between the two points $s$ and $6$ on the real line.""",
            ),
            (
                'The same distance is written $|6-s|$.',
                True,
                r"""Order of the two points does not matter:
$$|s-6|=|6-s|.$$
The calculation recovers the claimed form.""",
            ),
            (
                'A sketch claims the distance $|s-6|$ can be negative when $s<6$.',
                False,
                r"""Absolute value is nonnegative for every real input. When $s<6$ the inside $s-6$ is negative, but the bars flip it to the positive number $6-s$.""",
            ),
            (
                'Whenever $s\\ge 6$ the distance equals $s-6$.',
                True,
                r"""On $s\ge 6$ the inside is nonnegative, so $|s-6|=s-6$. Geometrically one steps from $6$ to the right.""",
            ),
            (
                'Adding $s$ to $6$ is said to give the same number as $|s-6|$.',
                False,
                r"""$s+6$ is a shift, not a distance to $6$. At $s=6$ the distance is $0$ while $s+6=12$.""",
            ),
        ],
        overview='$|s-6|$ is distance to the mark $6$, always nonnegative, and equal to $s-6$ only on $s\\ge 6$.',
    ),
    task(
        title='Products, quotients, and a false sum rule',
        subsection="2.4",
        difficulty='3/5',
        context='Identities for products and quotients of absolute values are listed next to a tempting sum rule.',
        items=[
            (
                'The product identity $|mn|=|m||n|$ is claimed for all reals $m,n$.',
                True,
                r"""Absolute value is completely multiplicative: the distance from $0$ to a product is the product of the distances. The identity needs no sign restriction.""",
            ),
            (
                'A quotient identity $|m/n|=|m|/|n|$ is written as soon as $n\\neq 0$.',
                True,
                r"""Write $m/n=m\cdot(1/n)$ and use the product rule together with $|1/n|=1/|n|$. The identity holds wherever the quotient is defined.""",
            ),
            (
                'Replacing $|m+n|$ by $|m|+|n|$ as a companion product-style identity is proposed.',
                False,
                r"""Sum does not pass through bars identically. For $m=3$, $n=-1$ one has $|2|=2$ while $3+1=4$. The triangle inequality is a comparison, not an equality.""",
            ),
            (
                'Scaling a translated letter, $|2s-8|=2|s-4|$ is used.',
                True,
                r"""Factor $2$:
$$|2s-8|=\bigl|2(s-4)\bigr|=2|s-4|.$$
Homogeneity in the first slot is an identity.""",
            ),
            (
                'Someone writes $|m/n|=m/n$ whenever $n\\neq 0$.',
                False,
                r"""The quotient $m/n$ may be negative. For $m=2$, $n=-4$ one has $|-1/2|=1/2$ while $2/(-4)=-1/2$. Bars may be dropped only when $m/n\ge 0$.""",
            ),
        ],
        overview='Absolute value respects products, quotients, and positive scaling; it does not respect sums identically.',
    ),
    task(
        title='Bars after completing a square',
        subsection="2.4",
        difficulty='5/5',
        context='First $x^2-6x+10$ is completed; then absolute value is applied. A nearby quadratic is compared.',
        items=[
            (
                'Wrapping the completed form, $|x^2-6x+10|=|(x-3)^2+1|$.',
                True,
                r"""The identity $x^2-6x+10=(x-3)^2+1$ may be wrapped in bars on both sides. Equal insides give equal absolute values.""",
            ),
            (
                'Because $(x-3)^2+1\\ge 1$, the bars may be dropped: $|x^2-6x+10|=(x-3)^2+1$.',
                True,
                r"""The completed form is at least $1$, hence positive. Absolute value copies a positive quantity, so the bars are redundant.""",
            ),
            (
                'Dropping the bars from $|x^2-6x+8|$ by the same argument is proposed.',
                False,
                r"""Completing the square gives $x^2-6x+8=(x-3)^2-1$, which equals $-1$ at $x=3$. The inside is not always positive, so the bars cannot be dropped identically.""",
            ),
            (
                'The rewritten form $(x-3)^2+1$ makes visible that $x^2-6x+10$ is at least $1$.',
                True,
                r"""A square is $\ge 0$, so adding $1$ yields a lower bound of $1$. That bound is part of the identity, not a separate estimate.""",
            ),
            (
                'The identity $|x^2-6x+10|=x^2-6x-10$ is proposed after a sign error.',
                False,
                r"""The right-hand side is a different polynomial (constant $-10$ rather than $+10$) and is negative at $x=0$. Absolute value of the original quadratic equals the quadratic itself, not this sign-changed version.""",
            ),
        ],
        overview='If completing the square leaves a positive constant, bars around the quadratic may be dropped. A $-1$ leftover forbids that shortcut.',
    ),
    task(
        title='Equality cases of the triangle inequality',
        subsection="2.4",
        difficulty='5/5',
        context='Equality in $|\\alpha+\\beta|=|\\alpha|+|\\beta|$ is discussed with conditions on the letters $\\alpha$ and $\\beta$.',
        items=[
            (
                'Same-sign letters make $|\\alpha+\\beta|$ match $|\\alpha|+|\\beta|$ as soon as $\\alpha\\beta\\ge 0$.',
                True,
                r"""The product $\alpha\beta\ge 0$ means the two letters are not of strictly opposite sign. Then they point the same way (or one is $0$), and distances add:
$$|\alpha+\beta|=|\alpha|+|\beta|.$$
The displayed line is the rewriting under test.""",
            ),
            (
                'If $\\alpha>0$ and $\\beta<0$, equality is claimed nonetheless.',
                False,
                r"""Opposite signs give a strict inequality. For $\alpha=4$, $\beta=-1$,
$$|4-1|=3<5=|4|+|-1|.$$
The calculation shows the claimed identity fails.""",
            ),
            (
                'One of the two letters being $0$ is enough for equality.',
                True,
                r"""If $\beta=0$ then $|\alpha+0|=|\alpha|=|\alpha|+|0|$. A zero letter does not pull in the opposite direction.""",
            ),
            (
                'A candidate says $|\\alpha+\\beta|=|\\alpha|+|\\beta|$ is the same statement as $|\\alpha+\\beta|=\\bigl||\\alpha|-|\\beta|\\bigr|$.',
                False,
                r"""The first is the upper triangle bound (sum); the second is the reverse bound (difference of sizes). They coincide only in degenerate cases, not as statements.""",
            ),
            (
                'The numerical pair $\\alpha=4$, $\\beta=0$ is offered as a case where $|\\alpha+\\beta|$ matches $|\\alpha|+|\\beta|$.',
                True,
                r"""$|4+0|=4$ and $|4|+|0|=4$. This is the zero-letter case of equality.""",
            ),
        ],
        overview='Equality $|\\alpha+\\beta|=|\\alpha|+|\\beta|$ holds exactly when $\\alpha$ and $\\beta$ are not of opposite sign, including when one of them is $0$.',
    ),
    task(
        title='Folding the segment between two points',
        subsection="2.4",
        difficulty='4/5',
        context='On the interval $1\\le z\\le 7$ the sum $|z-1|+|z-7|$ is rewritten.',
        items=[
            (
                'On the interval $[1,7]$ the sum equals $6$ constantly.',
                True,
                r"""Between the endpoints, distances add to the length $7-1=6$:
$$|z-1|+|z-7|=6\qquad\text{for }z\in[1,7].$$
The displayed line is the rewriting under test.""",
            ),
            (
                'Distance interpretation: the marks $1$ and $7$ are $6$ units apart.',
                True,
                r"""$|7-1|=6$. That gap is exactly the constant value of the sum on the segment joining them.""",
            ),
            (
                'Keeping the constant $6$ also for $z=10$ is proposed.',
                False,
                r"""At $z=10$ one has left the segment:
$$|10-1|+|10-7|=9+3=12\neq 6.$$
The displayed computation rejects this wording.""",
            ),
            (
                'At the midpoint $z=4$ both distances are $3$, summing to $6$.',
                True,
                r"""$|4-1|=3$ and $|4-7|=3$. The midpoint check is consistent with the constant-sum rule.""",
            ),
            (
                'Left of the other knot $z<1$, the same sum is rewritten as $6$ as well.',
                False,
                r"""If $z<1$ both marks lie to the right, so
$$(1-z)+(7-z)=8-2z>6.$$
The sum exceeds the segment length.""",
            ),
        ],
        overview='The sum of distances to two fixed points is the gap between them on the joining segment and is larger off that segment.',
    ),
    task(
        title='Squares that never go negative',
        subsection="2.4",
        difficulty='4/5',
        context='Absolute value is applied to quadratics that stay positive, and to one that does not.',
        items=[
            (
                'Because $v^2+1\\ge 1$, the rewriting $|v^2+1|=v^2+1$ is used for every $v$.',
                True,
                r"""A square is nonnegative, so $v^2+1\ge 1>0$. Absolute value copies a positive inside identically.""",
            ),
            (
                'Completing $v^2+v+1$ produces $(v+1/2)^2+3/4$, hence $|v^2+v+1|=v^2+v+1$.',
                True,
                r"""The leftover $3/4$ is positive, so the quadratic never reaches zero or below. Bars around it are redundant.""",
            ),
            (
                'Writing $|v^2-1|=v^2-1$ as an identity is proposed.',
                False,
                r"""$v^2-1$ is negative for $|v|<1$. At $v=0$ one has $|-1|=1\neq -1$. Completing the square is not needed to see the sign change.""",
            ),
            (
                'The identity $|v|^2=v^2$ is recorded.',
                True,
                r"""$|v|^2$ is the square of a nonnegative number, but it equals $v^2$ because $(-v)^2=v^2$ as well.""",
            ),
            (
                'Someone rewrites $|v^2+1|$ as $|v|+1$.',
                False,
                r"""At $v=3$ the left-hand side is $10$ while $|3|+1=4$. Absolute value does not pass through a sum of a square and a constant in that way.""",
            ),
        ],
        overview='A quadratic bounded below by a positive constant may drop its bars; $v^2-1$ may not. Completing the square makes the bound visible.',
    ),
    task(
        title='A letter divided by its absolute value',
        subsection="2.4",
        difficulty='4/5',
        context='The quotient $x/|x|$ is rewritten for $x\\neq 0$, together with its twin $|x|/x$.',
        items=[
            (
                'Whenever $x>0$ the quotient $x/|x|$ equals $1$.',
                True,
                r"""If $x>0$ then $|x|=x$, so $x/|x|=x/x=1$.""",
            ),
            (
                'Whenever $x<0$ the same quotient equals $-1$.',
                True,
                r"""If $x<0$ then $|x|=-x$, hence
$$\frac{x}{|x|}=\frac{x}{-x}=-1.$$
The calculation recovers the claimed form.""",
            ),
            (
                'Writing $x/|x|=1$ for every $x\\neq 0$ is proposed.',
                False,
                r"""The claim ignores the negative half-line, where the quotient is $-1$. One counter-example is $x=-2$: $(-2)/2=-1$.""",
            ),
            (
                'The twin quotient $|x|/x$ equals $1$ on $x>0$ and equals $-1$ on $x<0$.',
                True,
                r"""$|x|/x$ is the reciprocal of $x/|x|$ (both defined for $x\neq 0$), so it carries the same piecewise values $1$ and $-1$.""",
            ),
            (
                'At $x=0$ both quotients are defined and equal $0$.',
                False,
                r"""Division by $|0|=0$ or by $0$ is undefined. Absolute value at the origin does not create a conventional number for these quotients.""",
            ),
        ],
        overview='The sign quotients $x/|x|$ and $|x|/x$ equal $\\pm 1$ according to the sign of $x$, and are undefined at $0$.',
    ),
    task(
        title='A completed square that dips below zero',
        subsection="2.4",
        difficulty='5/5',
        context='The quadratic $t^2-4t+3$ is completed and then placed in bars.',
        items=[
            (
                'The completed rewriting $t^2-4t+3=(t-2)^2-1$ is recorded.',
                True,
                r"""Half of $4$ is $2$, and $2^2=4$, so
$$t^2-4t+3=(t^2-4t+4)-1=(t-2)^2-1.$$
The displayed line is the rewriting under test.""",
            ),
            (
                'Writing $|t^2-4t+3|=(t-2)^2-1$ as an identity is proposed.',
                False,
                r"""The right-hand side equals $-1$ at $t=2$, which cannot be an absolute value. The bars keep the left-hand side nonnegative.""",
            ),
            (
                'At $t=2$ the quadratic equals $-1$, so the bars turn it into $1$.',
                True,
                r"""$(2-2)^2-1=-1$ and $|-1|=1$. Completing the square locates the most negative value; absolute value then reflects it upward.""",
            ),
            (
                'Factoring, $|t^2-4t+3|=|t-1||t-3|$.',
                True,
                r"""$t^2-4t+3=(t-1)(t-3)$, and $|mn|=|m||n|$ yields the product of bars.""",
            ),
            (
                'Because the completed form has a $-1$, the quadratic is negative for every $t$.',
                False,
                r"""$(t-2)^2-1$ is negative only while $(t-2)^2<1$, that is between the roots $t=1$ and $t=3$. Outside that interval the quadratic is positive.""",
            ),
        ],
        overview='Completing the square can reveal a negative dip. Absolute value of that quadratic is not the completed expression itself.',
    ),
    task(
        title='Nested bars and a leading minus',
        subsection="2.4",
        difficulty='3/5',
        context='Nested absolute values $||q||$ and expressions with a minus sign are compared.',
        items=[
            (
                'Nested bars collapse: $||q||=|q|$.',
                True,
                r"""$|q|$ is already nonnegative, so wrapping it in a second pair of bars does nothing:
$$\bigl||q|\bigr|=|q|.$$
The displayed line is the rewriting under test.""",
            ),
            (
                'A leading minus inside, $|-q|=|q|$, is claimed.',
                True,
                r"""The points $q$ and $-q$ are equidistant from $0$. This is the same identity as in the single-letter sign chart.""",
            ),
            (
                'Writing $|-q|=-|q|$ as an identity is proposed.',
                False,
                r"""The right-hand side is $\le 0$ while the left-hand side is $\ge 0$. They meet only at $q=0$. For $q=3$ one has $3\neq -3$.""",
            ),
            (
                'The identity $|q-5|=|5-q|$ is reused.',
                True,
                r"""Swap rule: $|q-5|=|-(5-q)|=|5-q|$.""",
            ),
            (
                'Someone claims $||q-5||=q-5$ for every $q$.',
                False,
                r"""Nested bars still produce a nonnegative number, namely $|q-5|$. The right-hand side $q-5$ is negative for $q<5$.""",
            ),
        ],
        overview='Extra bars around an already nonnegative quantity are idle. A minus inside bars is not a minus outside bars.',
    ),
    task(
        title='Root of a squared linear polynomial',
        subsection="2.4",
        difficulty='4/5',
        context='A workshop rewrites $\\sqrt{(2h-7)^2}$ and a scaled form of the same inside.',
        items=[
            (
                'Replacing $\\sqrt{(2h-7)^2}$ by $2h-7$ for every $h$ is proposed.',
                False,
                r"""The principal root is $|2h-7|$. For $h=1$ one has $2-7=-5$ while $\sqrt{25}=5$.""",
            ),
            (
                'The identity $\\sqrt{(2h-7)^2}=|2h-7|$ is recorded.',
                True,
                r"""Apply $\sqrt{A^2}=|A|$ to $A=2h-7$. The identity needs no restriction on $h$.""",
            ),
            (
                'On the region $h\\ge 7/2$ the bars may be dropped.',
                True,
                r"""If $h\ge 7/2$ then $2h-7\ge 0$, so $|2h-7|=2h-7$. The root equals the linear polynomial there.""",
            ),
            (
                'After substituting $h=1$, the root is said to equal $2\\cdot 1-7=-5$.',
                False,
                r"""$\sqrt{(2-7)^2}=\sqrt{25}=5$. The value $-5$ is the inside, not the principal square root.""",
            ),
            (
                'Factoring $2$, $|2h-7|=2\\bigl|h-7/2\\bigr|$ is used.',
                True,
                r"""$$|2h-7|=\bigl|2\bigl(h-7/2\bigr)\bigr|=2\bigl|h-7/2\bigr|.$$
Positive scaling comes out of the bars as a positive factor.""",
            ),
        ],
        overview='$\\sqrt{(2h-7)^2}=|2h-7|=2|h-7/2|$. Replacing the root by $2h-7$ requires $h\\ge 7/2$.',
    ),
    task(
        title='Piecewise rewriting of a reversed inside',
        subsection="2.4",
        difficulty='4/5',
        context='The expression $|3-x|$ is split by the sign of $3-x$.',
        items=[
            (
                'Whenever $x<3$ the expression $|3-x|$ equals $3-x$.',
                True,
                r"""If $x<3$ then $3-x>0$, so the bars copy the inside:
$$|3-x|=3-x.$$
The displayed line is the rewriting under test.""",
            ),
            (
                'On the side $x>3$ it equals $x-3$.',
                True,
                r"""If $x>3$ then $3-x<0$, hence
$$|3-x|=-(3-x)=x-3.$$
The calculation recovers the claimed form.""",
            ),
            (
                'Writing $|3-x|=3-x$ as an unrestricted identity is proposed.',
                False,
                r"""The identity fails for $x>3$. At $x=5$ one has $|3-5|=2$ while $3-5=-2$.""",
            ),
            (
                'Combined with the swap rule, $|3-x|=|x-3|$ throughout.',
                True,
                r"""$|3-x|=|-(x-3)|=|x-3|$. The piecewise descriptions of the two forms therefore coincide.""",
            ),
            (
                'The two pieces $3-x$ and $x-3$ are identical functions.',
                False,
                r"""They are opposites. Each is the correct rewriting of $|3-x|$ only on its own half-line.""",
            ),
        ],
        overview='$|3-x|$ equals $3-x$ on $x<3$ and equals $x-3$ on $x>3$; it is the same function as $|x-3|$.',
    ),
    task(
        title='The reverse triangle comparison',
        subsection="2.4",
        difficulty='5/5',
        context='The reverse form $\\bigl||k|-|m|\\bigr|$ is compared with $|k-m|$.',
        items=[
            (
                'The reverse triangle inequality $\\bigl||k|-|m|\\bigr|\\le |k-m|$ is claimed for all reals.',
                True,
                r"""The ordinary triangle inequality applied to $k=(k-m)+m$ rearranges to this reverse bound. Absolute values of sizes cannot differ by more than the distance between the two letters.""",
            ),
            (
                'Equality in that reverse form is said to hold for every pair.',
                False,
                r"""Opposite signs make $|k-m|$ strictly larger than $\bigl||k|-|m|\bigr|$. For $k=8$ and $m=-3$,
$$\bigl||8|-|-3|\bigr|=5,\qquad |8-(-3)|=11.$$
The two sides are unequal, so reverse equality is not an identity.""",
            ),
            (
                'If $k$ and $m$ have opposite signs, $|k-m|=|k|+|m|$, which is at least as large as $\\bigl||k|-|m|\\bigr|$.',
                True,
                r"""Opposite signs give equality in the ordinary triangle inequality, so $|k-m|$ becomes the sum of sizes. A sum of two nonnegative numbers is at least their absolute difference.""",
            ),
            (
                'Writing $\\bigl||k|-|m|\\bigr|=|k|-|m|$ as an identity is proposed.',
                False,
                r"""The right-hand side can be negative (take $|k|<|m|$). Absolute value of a difference of sizes is nonnegative. At $k=1$, $m=4$ one has $3\neq -3$.""",
            ),
            (
                'The same-sign pair $k=8$, $m=3$ is claimed to make both $\\bigl||8|-|3|\\bigr|$ and $|8-3|$ equal $5$.',
                True,
                r"""Same-sign numbers of this pair give equality in the reverse comparison as well: both sides equal $5$.""",
            ),
        ],
        overview='The reverse triangle inequality bounds the gap of sizes by $|k-m|$. Equality is not automatic, and dropping the outer bars can produce a negative.',
    ),
    task(
        title='Scaling a letter versus shifting it',
        subsection="2.4",
        difficulty='4/5',
        context='Homogeneity $|c\\, r|$ is contrasted with the shift $|r+c|$.',
        items=[
            (
                'For every real $c$ and $r$, $|c\\, r|=|c|\\,|r|$ is claimed.',
                True,
                r"""This is the product rule with one factor constant. Negative $c$ contributes $|c|$ rather than $c$ itself.""",
            ),
            (
                'The companion $|r+c|=|r|+|c|$ is written as an identity.',
                False,
                r"""A shift is a sum, not a product. For $r=5$, $c=-3$ one has $|2|=2$ while $5+3=8$.""",
            ),
            (
                'When $c=4$, $|4r|=4|r|$ holds.',
                True,
                r"""$|4|=4$, so $|4r|=4|r|$. Positive scaling comes out unchanged.""",
            ),
            (
                'When $c=-4$, $|-4r|=-4|r|$ is asserted.',
                False,
                r"""The left-hand side is $4|r|$, because $|-4|=4$. The right-hand side is nonpositive. For $r=1$ one has $4\neq -4$.""",
            ),
            (
                'Distance interpretation: $|r+c|$ is the distance from $r$ to $-c$, not a scaled copy of $|r|$.',
                True,
                r"""$|r-(-c)|=|r+c|$. Scaling would involve a product $c\, r$; adding $c$ moves the centre of the distance.""",
            ),
        ],
        overview='A constant factor comes out as its absolute value. Adding a constant is a translation of the argument, not a homogeneity identity.',
    ),
    task(
        title='A completed square sitting above four',
        subsection="2.4",
        difficulty='4/5',
        context='After completing the square, $u^2+2u+5$ is rewritten and then placed in bars.',
        items=[
            (
                'Rewriting by a completed square gives $u^2+2u+5=(u+1)^2+4$.',
                True,
                r"""Half of $2$ is $1$, and $1^2=1$, so
$$u^2+2u+5=(u^2+2u+1)+4=(u+1)^2+4.$$
The displayed line is the rewriting under test.""",
            ),
            (
                'A margin note writes $u^2+2u+5=(u+1)^2-4$.',
                False,
                r"""The leftover is $5-1=4$, a plus. The marked form expands to $u^2+2u-3$, a different polynomial.""",
            ),
            (
                'Because the completed form is at least $4$, $|u^2+2u+5|=(u+1)^2+4$.',
                True,
                r"""$(u+1)^2+4\ge 4>0$, so the quadratic is positive and the bars may be dropped after rewriting.""",
            ),
            (
                'Expanding $(u+1)^2+4$ recovers $u^2+2u+1+4=u^2+2u+5$.',
                True,
                r"""The expansion is the inverse of completing the square and confirms the identity on the whole line.""",
            ),
            (
                'The identity is said to hold only for $u\\ge -1$.',
                False,
                r"""The vertex $u=-1$ is where the square vanishes, not a domain cut. Both polynomials are equal for $u<-1$ as well.""",
            ),
        ],
        overview='Completing the square writes $u^2+2u+5$ as $(u+1)^2+4$. The leftover $+4$ lets absolute value be dropped.',
    ),
    task(
        title='Negative letters and a principal square root',
        subsection="2.4",
        difficulty='5/5',
        context='Several claims restrict attention to negative values of the letter $n$.',
        items=[
            (
                'Whenever $n<0$, $\\sqrt{n^2}$ equals $-n$.',
                True,
                r"""$\sqrt{n^2}=|n|$ and, on $n<0$, $|n|=-n$. Hence $\sqrt{n^2}=-n$ on that half-line.""",
            ),
            (
                'Replacing $\\sqrt{n^2}$ by $n$ even on $n<0$ is proposed.',
                False,
                r"""That replacement yields a negative number, while a principal square root cannot be negative. For $n=-6$ one has $\sqrt{36}=6\neq -6$.""",
            ),
            (
                'On that same half-line, $|n|+n=0$.',
                True,
                r"""If $n<0$ then $|n|=-n$, so $|n|+n=0$. Equivalently $\sqrt{n^2}+n=0$ whenever $n<0$.""",
            ),
            (
                'The identity $\\sqrt{n^2}=n$ is claimed once $n$ is known to be negative.',
                False,
                r"""Knowing $n$ is negative makes the correct rewriting $\sqrt{n^2}=-n$, the opposite of $n$. The extra information does not justify dropping bars onto $n$ itself.""",
            ),
            (
                'Distance interpretation: $\\sqrt{n^2}$ is the distance from $n$ to $0$.',
                True,
                r"""$\sqrt{n^2}=|n|$, and $|n|$ is the distance from $n$ to the origin. The interpretation does not need $n$ to be positive.""",
            ),
        ],
        overview='For negative $n$ one has $\\sqrt{n^2}=|n|=-n$, not $n$, and therefore $\\sqrt{n^2}+n=0$.',
    ),
    task(
        title='Two quadratics, only one a square',
        subsection="2.4",
        difficulty='5/5',
        context='Side by side: $p^2-8p+16$ and $p^2-8p+15$. Completing the square distinguishes them.',
        items=[
            (
                'The first is a square: $p^2-8p+16=(p-4)^2$, so $|p^2-8p+16|=(p-4)^2$.',
                True,
                r"""The constant $16$ is $4^2$, matching half of $8$. The quadratic is a square, hence nonnegative, and the bars drop.""",
            ),
            (
                'The second trinomial completes to $(p-4)^2-1$.',
                True,
                r"""The same completed square appears, but the constant is one less:
$$p^2-8p+15=(p^2-8p+16)-1=(p-4)^2-1.$$
The calculation recovers the claimed form.""",
            ),
            (
                'Writing $|p^2-8p+15|=(p-4)^2-1$ as an identity is proposed.',
                False,
                r"""At $p=4$ the right-hand side is $-1$. Absolute value cannot equal $-1$. The second quadratic dips below zero.""",
            ),
            (
                'At $p=4$ the second quadratic equals $-1$, hence its absolute value is $1$.',
                True,
                r"""Substitute: $16-32+15=-1$, and $|-1|=1$. Completing the square predicted that dip.""",
            ),
            (
                'Because both quadratics look similar, $|p^2-8p+15|$ is said to equal $(p-4)^2$ as well.',
                False,
                r"""At $p=4$ one has $|-1|=1$ while $(4-4)^2=0$. Similarity of coefficients does not transfer the always-a-square property.""",
            ),
        ],
        overview='A quadratic that is a square may drop its bars. The neighbouring polynomial $(p-4)^2-1$ changes sign, so bars stay essential.',
    ),
]
