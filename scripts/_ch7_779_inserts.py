"""Spliced teaching beats for Ch7 core letters (not fully replaced)."""

INSERT: dict[tuple[str, str], tuple[str, ...]] = {
    ("math-7-2", "A"): (
        r"Checking a unit step recovers the same coefficient, because the constant $-5$ cancels.",
        r"$$f(1)-f(0)=(3-5)-(-5)=3$$",
        r"That difference is the slope, independent of where the step is taken.",
    ),
    ("math-7-2", "B"): (
        r"A test on either side of the axis makes the downward opening visible: the graph is lower at $x=1$ than at the vertex.",
        r"$$x=-\frac{1}{2\cdot(-2)}=\frac{1}{4}\qquad g(1)=-2+1+4=3$$",
        r"The vertex height $g(1/4)$ is larger than $g(1)$, so the arms run downwards.",
    ),
    ("math-7-2", "C"): (
        r"Geometrically this is the $y$-intercept of the line: the graph meets the vertical axis at $(0,-5)$.",
        r"$$f(0)=-5$$",
        r"No other term of $3x-5$ survives at $x=0$.",
    ),
    ("math-7-2", "D"): (
        r"Geometrically this is the $y$-intercept of the parabola: the graph meets the vertical axis at $(0,4)$.",
        r"$$g(0)=4$$",
        r"The $x^{2}$ term and the $x$ term both die at the origin.",
    ),
    ("math-7-2", "E"): (
        r"A negative slope would mean the graph falls as $x$ grows. Here a unit step raises the height.",
        r"$$f(2)-f(1)=1$$",
        r"The change is positive, so the slope cannot be $-3$.",
    ),
    ("math-7-3", "A"): (
        r"The same abscissa is the midpoint of the two roots of $g$, which factor as $(x-1)(x-5)$.",
        r"$$\frac{1+5}{2}=3$$",
        r"Both readings name the vertical line $x=3$.",
    ),
    ("math-7-3", "B"): (
        r"A test on either side of the axis shows the arms rising: $g(0)=5$ and $g(6)=5$, both above the vertex.",
        r"$$g(3)=-4$$",
        r"The vertex is a lowest point, which is the geometry of an upward opening.",
    ),
    ("math-7-3", "C"): (
        r"A unit step on the line recovers the same coefficient.",
        r"$$f(1)-f(0)=(3)-(1)=2$$",
        r"The constant $1$ cancels, leaving the slope $2$.",
    ),
    ("math-7-3", "D"): (
        r"Completing the square makes the same height visible without expanding $3^{2}$ by hand.",
        r"$$g(x)=(x-3)^{2}-4$$",
        r"At $x=3$ the square vanishes and only $-4$ remains.",
    ),
    ("math-7-3", "E"): (
        r"The number $-3$ would be $b/(2a)$, which is the axis formula with the outer minus dropped.",
        r"$$\frac{b}{2a}=\frac{-6}{2}=-3$$",
        r"The correct formula keeps that minus, and produces $x=3$.",
    ),
    ("math-7-4", "A"): (
        r"The same pair can be read backwards: the unique input that produces a fare of $17$ is $x=4$.",
        r"$$3x+5=17\qquad x=4$$",
        r"No other distance yields that fare on this line.",
    ),
    ("math-7-4", "B"): (
        r"Checking two concrete kilometres shows the same jump.",
        r"$$C(2)-C(1)=(11)-(8)=3$$",
        r"The jump does not depend on which kilometre is the extra one.",
    ),
    ("math-7-4", "C"): (
        r"A square term would make later kilometres cost more than earlier ones. This model has no $x^{2}$ term.",
        r"$$C(10)-C(9)=3=C(2)-C(1)$$",
        r"Equal input steps produce equal fare jumps, which is the definition of a line.",
    ),
    ("math-7-4", "D"): (
        r"The arithmetic is the same substitution at a neighbouring input.",
        r"$$C(5)=15+5=20$$",
        r"Five kilometres at $3$ euros each, plus the $5$ euro call-out, is $20$ euros.",
    ),
    ("math-7-4", "E"): (
        r"A model through the origin would double when $x$ doubles. The leftover constant $5$ breaks that proportion at every scale.",
        r"$$C(2x)=6x+5\qquad 2C(x)=6x+10$$",
        r"The two right-hand sides differ by $5$ for every $x$.",
    ),
    ("math-7-5", "A"): (
        r"The same vanishing is the $y$-intercept of a line through the origin.",
        r"$$f(x)=5x\qquad f(0)=0$$",
        r"There is no constant term that could lift the graph off $(0,0)$.",
    ),
    ("math-7-5", "B"): (
        r"Substituting either claimed root back into $g$ confirms a zero.",
        r"$$g(2)=4-4=0\qquad g(-2)=4-4=0$$",
        r"No other real $x$ kills a difference of squares $x^{2}-4$.",
    ),
    ("math-7-5", "C"): (
        r"A unit step on this line through the origin raises the height by exactly $5$.",
        r"$$f(1)-f(0)=5$$",
        r"The constant term is absent, so nothing else contributes to the slope.",
    ),
    ("math-7-5", "D"): (
        r"The graph of $y=x^{2}-4$ is the graph of $y=x^{2}$ slid down by $4$, which still opens upwards.",
        r"$$g(0)=-4\qquad g(3)=5$$",
        r"Values to the right of the axis sit above the vertex, the geometry of $a>0$.",
    ),
    ("math-7-5", "E"): (
        r"That height $-4$ is where the parabola crosses the $y$-axis, four units below the origin.",
        r"$$g(0)=-4$$",
        r"The $x^{2}$ term dies at $x=0$, leaving only the constant.",
    ),
    ("math-7-6", "A"): (
        r"Expanding is unnecessary, but it recovers the same vertex from the axis formula.",
        r"$$g(x)=x^{2}-4x+7\qquad x=\frac{4}{2}=2$$",
        r"Then $g(2)=3$, which is the same pair $(2,3)$.",
    ),
    ("math-7-6", "B"): (
        r"Symmetry about $x=2$ is the identity $g(2+t)=g(2-t)$, which the completed square makes obvious.",
        r"$$g(2+t)=t^{2}+3=g(2-t)$$",
        r"The axis is that unique vertical line of symmetry.",
    ),
    ("math-7-6", "C"): (
        r"A root of $g$ would require the height $3$ to be zero, which it is not. The vertex sits three units above the $x$-axis.",
        r"$$g(2)=3\neq 0$$",
        r"The line and the parabola therefore cannot share the root $x=2$.",
    ),
    ("math-7-6", "D"): (
        r"Values on either side of the vertex sit above it, which is the geometry of an upward opening.",
        r"$$g(1)=4\qquad g(2)=3\qquad g(3)=4$$",
        r"The arms rise away from $(2,3)$.",
    ),
    ("math-7-6", "E"): (
        r"A unit step on $f$ raises the height by $1$, confirming the invisible coefficient.",
        r"$$f(3)-f(2)=1$$",
        r"The constant $-2$ cancels, leaving the slope $1$.",
    ),
    ("math-7-7", "A"): (
        r"Factoring as $x(3x-1)$ does not touch the leading $3$. Completing the square would keep the same $a=3>0$.",
        r"$$g(x)=3\left(x-\frac{1}{6}\right)^{2}-\frac{1}{12}$$",
        r"The square is scaled by a positive number, so the arms open upwards.",
    ),
    ("math-7-7", "B"): (
        r"The factor $x$ in $g(x)=x(3x-1)$ is the algebraic form of a root at the origin, which is also a $y$-intercept of $0$.",
        r"$$g(0)=0$$",
        r"There is no constant term that could lift the graph off $(0,0)$.",
    ),
    ("math-7-7", "C"): (
        r"A unit step on the line raises the height by only one half, not by $7$.",
        r"$$f(1)-f(0)=\frac{1}{2}$$",
        r"The number $7$ is the $y$-intercept $f(0)$, which does not tilt the graph.",
    ),
    ("math-7-7", "D"): (
        r"Geometrically this is the $y$-intercept: the graph meets the vertical axis at $(0,7)$.",
        r"$$f(0)=7$$",
        r"The slope term $\frac{1}{2}x$ dies at $x=0$.",
    ),
    ("math-7-7", "E"): (
        r"The same abscissa is the midpoint of the two roots $0$ and $1/3$.",
        r"$$\frac{0+\frac{1}{3}}{2}=\frac{1}{6}$$",
        r"Both readings name the vertical line $x=\frac{1}{6}$.",
    ),
    ("math-7-8", "A"): (
        r"The origin is visibly a root of $g$ as well, because $g(x)=x(x-2)$ has a factor $x$.",
        r"$$g(0)=0=f(0)$$",
        r"The two graphs therefore meet at $(0,0)$.",
    ),
    ("math-7-8", "B"): (
        r"The second root of the factored difference $x(x-3)$ is exactly this $x=3$.",
        r"$$g(3)-f(3)=0$$",
        r"The heights $3$ and $3$ agree, so the meeting is genuine.",
    ),
    ("math-7-8", "C"): (
        r"The two roots $0$ and $3$ of $g-f$ are the complete list. A quadratic cannot hide a third real root.",
        r"$$x(x-3)=0$$",
        r"Two meetings, not three, is the whole intersection.",
    ),
    ("math-7-8", "D"): (
        r"Values on either side of the axis $x=1$ sit above the vertex height $g(1)=-1$.",
        r"$$g(0)=0\qquad g(2)=0$$",
        r"The arms rise, which is the geometry of $a>0$.",
    ),
    ("math-7-8", "E"): (
        r"A unit step on the identity line raises the height by exactly $1$.",
        r"$$f(1)-f(0)=1$$",
        r"There is no constant term to confuse with the slope.",
    ),
    ("math-7-9", "A"): (
        r"Because the leading coefficient is negative, the vertex is a highest point rather than a lowest one. Completing the square makes the same instant visible.",
        r"$$H(x)=-5(x-2)^{2}+20$$",
        r"The square vanishes only at $x=2$, so that is the unique maximiser.",
    ),
    ("math-7-9", "B"): (
        r"Evaluating the completed-square form at the vertex recovers the same $20$ metres without expanding $H(2)$ from the original rule.",
        r"$$H(2)=-5\cdot 0+20=20$$",
        r"No larger height is possible, because $-5(x-2)^{2}$ is never positive.",
    ),
    ("math-7-9", "C"): (
        r"Substituting either instant back into $H$ confirms a zero, and there is no third factor.",
        r"$$H(0)=0\qquad H(4)=-5\cdot 16+80=0$$",
        r"The throw and the landing are exactly those two roots.",
    ),
    ("math-7-9", "D"): (
        r"The announced $20$ metres is the vertex height, taken at $x=2$, not at $x=1$.",
        r"$$H(1)=15\neq 20$$",
        r"At one second the ball is still climbing, five metres short of the peak.",
    ),
    ("math-7-9", "E"): (
        r"Outside $[0,4]$ the height is negative (a model artefact below ground). The open interval between the roots is the only place the model stays positive.",
        r"$$H(-1)<0\qquad H(5)<0$$",
        r"The sign is positive precisely between the two zeros.",
    ),
    ("math-7-10", "A"): (
        r"Substituting either claimed root back into the product confirms a zero.",
        r"$$g(-1)=0\cdot(-5)=0\qquad g(4)=5\cdot 0=0$$",
        r"A product of two linear factors has no further real root.",
    ),
    ("math-7-10", "B"): (
        r"Expanding is optional: Vieta on $x^{2}-3x-4$ is the same sum.",
        r"$$S=-\frac{-3}{1}=3$$",
        r"The two readings $-1+4$ and $-b/a$ agree.",
    ),
    ("math-7-10", "C"): (
        r"A unit step on this line lowers the height by $2$, confirming the minus sign.",
        r"$$f(1)-f(0)=-2$$",
        r"The constant $3$ cancels, leaving the slope $-2$.",
    ),
    ("math-7-10", "D"): (
        r"Each linear factor contributes leading coefficient $+1$, so the product opens the same way $y=x^{2}$ does.",
        r"$$a=1>0$$",
        r"The arms rise, which is the opposite of a downward opening.",
    ),
    ("math-7-10", "E"): (
        r"Geometrically this is the $y$-intercept: the graph meets the vertical axis at $(0,3)$.",
        r"$$f(0)=3$$",
        r"The slope term $-2x$ dies at $x=0$.",
    ),
    ("math-7-11", "A"): (
        r"A unit step on this line lowers the height by $2$, confirming the minus sign.",
        r"$$s(1)-s(0)=(4)-(6)=-2$$",
        r"The constant $6$ cancels, leaving the slope $-2$.",
    ),
    ("math-7-11", "B"): (
        r"Ordering as $-2x+6$ makes the same intercept visible as the constant term.",
        r"$$s(0)=6$$",
        r"The graph meets the vertical axis at $(0,6)$.",
    ),
    ("math-7-11", "C"): (
        r"An increasing line would have positive slope. Here each extra unit of $x$ lowers the height.",
        r"$$s(2)=2\qquad s(3)=0$$",
        r"The graph falls from left to right, so $s$ is decreasing.",
    ),
    ("math-7-11", "D"): (
        r"A non-constant line has exactly one $x$-intercept. Substituting $x=3$ back checks it.",
        r"$$s(3)=6-6=0$$",
        r"The unique root of $6-2x=0$ is this $x=3$.",
    ),
    ("math-7-11", "E"): (
        r"The announced $-1$ would be the height at $x=3.5$, not at $x=4$.",
        r"$$s(4)=-2\neq -1$$",
        r"Four units of slope $-2$ from the intercept $6$ produce $6-8=-2$.",
    ),
    ("math-7-12", "A"): (
        r"The two roots $2$ and $3$ of $(x-2)(x-3)$ add to the same $5$.",
        r"$$2+3=5$$",
        r"Vieta and the factorisation agree, and the claimed sum is that number.",
    ),
    ("math-7-12", "B"): (
        r"The minus sign in the claim would belong to a parabola whose constant term was negative, such as $x^{2}-5x-6$.",
        r"$$P=\frac{6}{1}=6$$",
        r"The product of $2$ and $3$ is $6$, not $-6$.",
    ),
    ("math-7-12", "C"): (
        r"The midpoint of the two roots $2$ and $3$ is the same abscissa.",
        r"$$\frac{2+3}{2}=\frac{5}{2}$$",
        r"Both the axis formula and the midpoint reading name $x=\frac{5}{2}$.",
    ),
    ("math-7-12", "D"): (
        r"A unit step on the line raises the height by $2$, confirming the coefficient.",
        r"$$f(1)-f(0)=(1)-(-1)=2$$",
        r"The constant $-1$ cancels, leaving the slope $2$.",
    ),
    ("math-7-12", "E"): (
        r"The factor $(x-2)$ in $g(x)=(x-2)(x-3)$ is the same root.",
        r"$$g(2)=0$$",
        r"The other root is $3$, but the claim only names $g(2)$.",
    ),
    ("math-7-13", "A"): (
        r"Completing the square recovers the same pair: factor out the leading $2$ and complete $x^{2}-4x$.",
        r"$$g(x)=2(x-2)^{2}-5$$",
        r"The square vanishes at $x=2$ and the height there is $-5$.",
    ),
    ("math-7-13", "B"): (
        r"Those two heights would agree only if the axis were the $y$-axis, which would require the middle coefficient of $g$ to vanish.",
        r"$$b=-8\neq 0$$",
        r"The intercept $3$ and the vertex height $-5$ are different numbers.",
    ),
    ("math-7-13", "C"): (
        r"The constant term $3$ never enters the axis formula. Completing the square uses the same shift $x=2$.",
        r"$$g(x)=2(x-2)^{2}-5$$",
        r"The axis is the vertical line through that shift.",
    ),
    ("math-7-13", "D"): (
        r"The same substitution is the height of the line at the axis of $g$.",
        r"$$f(2)=5$$",
        r"No further property of $g$ is required: the claim is only about $f$.",
    ),
    ("math-7-13", "E"): (
        r"Values on either side of $x=2$ sit above the vertex height $-5$.",
        r"$$g(0)=3\qquad g(4)=3$$",
        r"The arms rise, which is the geometry of $a=2>0$.",
    ),
    ("math-7-14", "A"): (
        r"The two roots of the factored difference are $x=3$ and $x=-1$, a complete list of two meetings.",
        r"$$(x-3)(x+1)=0$$",
        r"A quadratic cannot hide a third real intersection.",
    ),
    ("math-7-14", "B"): (
        r"The same root appears in the factored difference of the two formulas.",
        r"$$g(x)-f(x)=(x-3)(x+1)$$",
        r"At $x=-1$ both original graphs pass through the origin.",
    ),
    ("math-7-14", "C"): (
        r"The remaining factor of $g-f$ is $(x-3)$, so this meeting is the companion of $x=-1$.",
        r"$$g(3)=f(3)=4$$",
        r"The common height is $4$, at the point $(3,4)$.",
    ),
    ("math-7-14", "D"): (
        r"The roots of $g$ itself are $-1$ and $2$, which add to $1$. The claimed $-1$ is the middle coefficient, not the Vieta sum.",
        r"$$(-1)+2=1$$",
        r"Dropping the minus in $-b/a$ produces exactly this trap.",
    ),
    ("math-7-14", "E"): (
        r"A decreasing line would have negative slope. Here a unit step raises the height.",
        r"$$f(1)-f(0)=1$$",
        r"The graph rises from left to right.",
    ),
    ("math-7-15", "A"): (
        r"Half of the middle coefficient $4$ is $2$, and $2^{2}=4$ is the number added and subtracted to complete the square.",
        r"$$x^{2}+4x+4=(x+2)^{2}$$",
        r"Subtracting $4$ and restoring the original constant $1$ produces the claimed $-3$.",
    ),
    ("math-7-15", "B"): (
        r"The axis formula on the original coefficients names the same abscissa $x=-2$.",
        r"$$x=-\frac{4}{2}=-2\qquad g(-2)=-3$$",
        r"The vertex is that pair $(-2,-3)$.",
    ),
    ("math-7-15", "C"): (
        r"The number $1$ is the $y$-intercept $g(0)$, four units above the true minimum.",
        r"$$g(0)=1\qquad \min g=-3$$",
        r"An upward parabola’s minimum is the vertex height, not the intercept.",
    ),
    ("math-7-15", "D"): (
        r"A unit step on this line lowers the height by $1$, confirming the minus sign.",
        r"$$f(1)-f(0)=-1$$",
        r"There is no constant term to confuse with the slope.",
    ),
    ("math-7-15", "E"): (
        r"The completed-square form $(x+2)^{2}-3$ is scaled by $+1$, so the square opens upwards.",
        r"$$a=1>0$$",
        r"That is why the vertex is a minimum rather than a maximum.",
    ),
    ("math-7-16", "A"): (
        r"A unit step on the expanded line lowers the height by one half.",
        r"$$t(1)-t(0)=\frac{4}{2}-\frac{5}{2}=-\frac{1}{2}$$",
        r"The slope is that constant change, including the minus sign.",
    ),
    ("math-7-16", "B"): (
        r"The same number is the constant term of $-\frac{1}{2}x+\frac{5}{2}$.",
        r"$$t(0)=\frac{5}{2}$$",
        r"The graph meets the vertical axis at $\bigl(0,\frac{5}{2}\bigr)$.",
    ),
    ("math-7-16", "C"): (
        r"A non-constant line has exactly one $x$-intercept. The denominator $2$ never vanishes, so the only zero is the zero of the numerator.",
        r"$$t(5)=0$$",
        r"The unique root is $x=5$.",
    ),
    ("math-7-16", "D"): (
        r"The point that does lie on the graph at this abscissa is $(3,1)$, one unit below the claimed $(3,2)$.",
        r"$$t(3)=1\neq 2$$",
        r"A point is on the line only when the second coordinate equals $t$ of the first.",
    ),
    ("math-7-16", "E"): (
        r"The same change is four times the slope, as it must be on a line.",
        r"$$4\cdot\left(-\frac{1}{2}\right)=-2$$",
        r"The identity $t(x+4)=t(x)-2$ holds for every starting $x$.",
    ),
    ("math-7-17", "A"): (
        r"The leading $2$ stretches the graph vertically and does not move the zeros. Substituting either root back confirms a zero.",
        r"$$g(1)=0\qquad g(3)=0$$",
        r"A product of two linear factors has no further real root.",
    ),
    ("math-7-17", "B"): (
        r"Each linear factor contributes leading $1$, so the $2$ sitting in front is exactly the $x^{2}$ coefficient after expanding.",
        r"$$2(x-1)(x-3)=2x^{2}-8x+6$$",
        r"The leading coefficient is $2$, the number the claim names.",
    ),
    ("math-7-17", "C"): (
        r"The claimed $2$ is the midpoint of the roots (the axis), not their sum. Vieta on the expansion $2x^{2}-8x+6$ is $S=8/2=4$.",
        r"$$S=4\neq 2$$",
        r"Confusing the axis with the Vieta sum is the trap.",
    ),
    ("math-7-17", "D"): (
        r"The axis formula on the expansion $2x^{2}-8x+6$ recovers the same line.",
        r"$$x=-\frac{-8}{4}=2$$",
        r"The midpoint of $1$ and $3$ is that same $x=2$.",
    ),
    ("math-7-17", "E"): (
        r"A unit step on this line through the origin raises the height by $3$.",
        r"$$f(1)-f(0)=3$$",
        r"There is no constant term to confuse with the slope.",
    ),
    ("math-7-18", "A"): (
        r"Substituting either claimed root back into $g$ confirms a zero.",
        r"$$g(-3)=9-3-6=0\qquad g(2)=4+2-6=0$$",
        r"A product of two linear factors has no further real root.",
    ),
    ("math-7-18", "B"): (
        r"The midpoint of the two roots $-3$ and $2$ is the same abscissa.",
        r"$$\frac{-3+2}{2}=-\frac{1}{2}$$",
        r"Both the axis formula and the midpoint reading name $x=-\frac{1}{2}$.",
    ),
    ("math-7-18", "C"): (
        r"Solving $-x+2=0$ is the same computation: the unique $x$-intercept of this line is $x=2$.",
        r"$$f(2)=0$$",
        r"The claim is exactly that intercept.",
    ),
    ("math-7-18", "D"): (
        r"The roots $-3$ and $2$ add to $-1$. The claimed plus sign is the result of dropping the minus in $-b/a$.",
        r"$$S=-1\neq 1$$",
        r"Vieta’s sum is $-1$, not $1$.",
    ),
    ("math-7-18", "E"): (
        r"The factorisation $(x+3)(x-2)$ still carries leading coefficient $+1$.",
        r"$$a=1>0$$",
        r"The arms rise, which is an upward opening.",
    ),
    ("math-7-19", "A"): (
        r"Equivalently, the graph is symmetric across the $y$-axis: $g(3)=0=g(-3)$.",
        r"$$g(3)=g(-3)$$",
        r"Only even powers of $x$ appear, so evenness holds identically.",
    ),
    ("math-7-19", "B"): (
        r"Evenness is symmetry across the $y$-axis, so the turning point cannot sit anywhere else.",
        r"$$x=0$$",
        r"The axis formula with $b=0$ names that same vertical line.",
    ),
    ("math-7-19", "C"): (
        r"The two roots $3$ and $-3$ multiply to $-9$, which matches Vieta.",
        r"$$3\cdot(-3)=-9$$",
        r"The product is the constant term of this monic parabola.",
    ),
    ("math-7-19", "D"): (
        r"Evenness of a line would require its slope to vanish. Here the slope is $2\neq 0$.",
        r"$$f(-x)=-2x+1\neq f(x)$$",
        r"A single test point $x=1$ already separates $f(1)=3$ from $f(-1)=-1$.",
    ),
    ("math-7-19", "E"): (
        r"The factorisation $(x-3)(x+3)$ makes the same root visible, and $x=-3$ is the companion.",
        r"$$g(3)=0$$",
        r"The claim only names this one zero.",
    ),
    ("math-7-20", "A"): (
        r"The five $y$-values are $-3,1,5,9,13$. Four gaps of $4$ is a complete check of the table.",
        r"$$\Delta y=4,4,4,4$$",
        r"No gap breaks the pattern, so the first differences are constant.",
    ),
    ("math-7-20", "B"): (
        r"The same slope is the first difference divided by the input spacing, which here is $1$.",
        r"$$m=\frac{4}{1}=4$$",
        r"Every neighbouring pair in the table gives this ratio.",
    ),
    ("math-7-20", "C"): (
        r"Checking the last row as well: at $x=4$ the rule gives $16-3=13$, matching the table.",
        r"$$4\cdot 4-3=13$$",
        r"Five matching rows identify the unique line through the pairs.",
    ),
    ("math-7-20", "D"): (
        r"On a line every chord has the same slope as the line itself, so the average rate cannot depend on the endpoints chosen.",
        r"$$\frac{13-1}{3}=4$$",
        r"The average rate on $[1,4]$ is the constant first difference $4$.",
    ),
    ("math-7-20", "E"): (
        r"The announced $18$ would require a first difference of $5$ from $y(4)=13$, breaking the constant-difference pattern.",
        r"$$y(5)=4\cdot 5-3=17$$",
        r"The next value is $17$, not $18$.",
    ),
    ("math-7-21", "A"): (
        r"The triple $A=1$, $B=2$, $C=0$ is unique, because three coefficients of a parabola determine three unknowns.",
        r"$$(x-1)^{2}+2(x-1)=x^{2}-1$$",
        r"The identity holds for every $x$, so a real triple exists.",
    ),
    ("math-7-21", "B"): (
        r"Expanding the claimed factors recovers $g$ identically.",
        r"$$(x-1)(x+1)=x^{2}-1$$",
        r"The two roots $\pm 1$ are exactly the zeros of a difference of squares.",
    ),
    ("math-7-21", "C"): (
        r"The difference $g-f=x^{2}-x=x(x-1)$ has $x=1$ as a root, which is the same meeting.",
        r"$$g(1)=0=f(1)$$",
        r"The graphs meet at $(1,0)$.",
    ),
    ("math-7-21", "D"): (
        r"The two roots $1$ and $-1$ add to $0$, matching Vieta on a parabola with no $x$ term.",
        r"$$1+(-1)=0$$",
        r"The sum of the roots is $0$.",
    ),
    ("math-7-21", "E"): (
        r"Opening is decided by the sign of an $x^{2}$ coefficient, which $f$ does not have.",
        r"$$f(x)=x-1$$",
        r"The graph is a straight line of slope $1$, which neither curves upwards nor downwards.",
    ),
    ("math-7-23", "A"): (
        r"If $b\neq 0$, the two middle terms $bx$ and $-bx$ cannot agree for every $x$. A single test point already separates them.",
        r"$$g(1)-g(-1)=2b$$",
        r"Evenness holds for every $x$ if and only if $b=0$.",
    ),
    ("math-7-23", "B"): (
        r"Evenness is symmetry across the $y$-axis, so the turning point cannot sit at a nonzero abscissa.",
        r"$$(0,c)$$",
        r"The vertex of an even quadratic is that intercept on the $y$-axis.",
    ),
    ("math-7-23", "C"): (
        r"The only function that is both even and odd is the zero function, which is not a parabola ($a\neq 0$).",
        r"$$g(x)=x^{2}\qquad g(-1)=1\neq -1=-g(1)$$",
        r"An even quadratic is not odd.",
    ),
    ("math-7-23", "D"): (
        r"The axis formula $x=-b/(2a)=0$ forces $b=0$, after which only even powers remain.",
        r"$$g(x)=ax^{2}+c$$",
        r"Then $g(-x)=g(x)$ holds identically, which is evenness.",
    ),
    ("math-7-23", "E"): (
        r"A concrete check: $-x^{2}$ is still even, because $(-x)^{2}=x^{2}$.",
        r"$$(-g)(-x)=-g(x)=(-g)(x)$$",
        r"Multiplying by $-1$ cannot destroy evenness.",
    ),
    ("math-7-24", "A"): (
        r"Checking heights at the two roots confirms two genuine crossings rather than a touch.",
        r"$$g(2)=1=f(2)\qquad g(4)=5=f(4)$$",
        r"Two distinct meetings are not tangency.",
    ),
    ("math-7-24", "B"): (
        r"Direct substitution into both original formulas confirms each meeting.",
        r"$$f(2)=1=g(2)\qquad f(4)=5=g(4)$$",
        r"The graphs meet at $x=2$ and at $x=4$.",
    ),
    ("math-7-24", "C"): (
        r"Completing the square recovers the same pair: $g(x)=(x-2)^{2}+1$.",
        r"$$g(2)=1$$",
        r"The vertex is $(2,1)$, the point the claim names.",
    ),
    ("math-7-24", "D"): (
        r"The axis of $g$ is $x=2$, so the tangent there is horizontal, which is $g'=0$.",
        r"$$g'(x)=2(x-2)$$",
        r"At $x=2$ this derivative vanishes.",
    ),
    ("math-7-24", "E"): (
        r"They agree at one abscissa (namely $x=3$), but not at every $x$. At $x=0$ one has $f'=2$ and $g'=-4$.",
        r"$$2\neq 2x-4$$",
        r"The two derivative functions are not identical.",
    ),
    ("math-7-25", "A"): (
        r"The inner line at the origin is $1$, and the parabola at $1$ is $-2$. Expanding the composite and then substituting $x=0$ yields the same number.",
        r"$$g(f(x))=4x^{2}+2x-2\qquad g(f(0))=-2$$",
        r"The nested value is $-2$.",
    ),
    ("math-7-25", "B"): (
        r"The inner parabola at the origin is $-2$, and the line at $-2$ is $-3$.",
        r"$$f(g(0))=-3$$",
        r"This is a different number from $g(f(0))=-2$, which is the usual situation when the maps do not commute.",
    ),
    ("math-7-25", "C"): (
        r"Composition does not commute: substituting the line into the parabola is not the same as substituting the parabola into the line.",
        r"$$g(f(0))=-2\qquad f(g(0))=-3$$",
        r"The two nested values differ.",
    ),
    ("math-7-25", "D"): (
        r"Factoring names the two roots individually and checks the same sum.",
        r"$$g(x)=(x+1)(x-2)$$",
        r"$$(-1)+2=1$$",
    ),
    ("math-7-25", "E"): (
        r"The leading coefficient $4$ of the expanded composite is non-zero, so the square term survives.",
        r"$$g(f(x))=4x^{2}+2x-2$$",
        r"A line inside a parabola still produces a parabola.",
    ),
}
