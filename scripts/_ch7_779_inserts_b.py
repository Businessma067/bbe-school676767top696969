"""Spliced teaching beats for Ch7 core letters 26–50 (except 47, which is fully replaced)."""

INSERT_B: dict[tuple[str, str], tuple[str, ...]] = {
    ("math-7-26", "A"): (
        r"Half of the middle coefficient $6$ is $3$, and $3^{2}=9$ is the number added and subtracted.",
        r"$$x^{2}-6x+9=(x-3)^{2}$$",
        r"Restoring the original constant produces the claimed $+1$.",
    ),
    ("math-7-26", "B"): (
        r"The axis formula names the same minimiser $x=3$, and $g(3)=1$ is the vertex height.",
        r"$$g(3)=1$$",
        r"Because $a>0$, this height is a global minimum.",
    ),
    ("math-7-26", "C"): (
        r"A positive discriminant is two distinct real meetings. Completing the square is not needed for the count.",
        r"$$\Delta=41>0$$",
        r"The graphs meet twice, not never.",
    ),
    ("math-7-26", "D"): (
        r"The axis formula on the original coefficients is the same line.",
        r"$$x=-\frac{-6}{2}=3$$",
        r"The completed-square shift and $-b/(2a)$ agree.",
    ),
    ("math-7-26", "E"): (
        r"The vertical gap at the axis is $9-1=8$, so the vertex of $g$ does not lie on the line.",
        r"$$g(3)=1\neq 9=f(3)$$",
        r"Equality of the two heights fails at $x=3$.",
    ),
    ("math-7-27", "A"): (
        r"No other line has slope $2$ and intercept $1$: those two numbers pin $f$ down uniquely.",
        r"$$f(0)=1\qquad f(1)-f(0)=2$$",
        r"The rebuilt formula is $2x+1$.",
    ),
    ("math-7-27", "B"): (
        r"Both claimed roots kill a factor, and the leading coefficient is the announced $1$.",
        r"$$g(2)=0\qquad g(3)=0$$",
        r"The rebuilt formula is $x^{2}-5x+6$.",
    ),
    ("math-7-27", "C"): (
        r"The number $-5$ is the middle coefficient of $g$, not the sum of the roots. Dropping the minus in $-b/a$ produces this trap.",
        r"$$2+3=5$$",
        r"The sum of the roots is $5$, not $-5$.",
    ),
    ("math-7-27", "D"): (
        r"Matching the remaining two powers then determines $B$ and $C$ uniquely. The $x^{2}$ match already forced $A=1/4$.",
        r"$$A=\frac{1}{4},\qquad 4A=1$$",
        r"A real triple therefore exists.",
    ),
    ("math-7-27", "E"): (
        r"A positive discriminant gives exactly two meetings, never a third.",
        r"$$\Delta=29>0$$",
        r"The graphs meet twice, not more than twice.",
    ),
    ("math-7-28", "A"): (
        r"The vertex is at height $-4$, while the line is at height $0$ there. Completing the square makes the same gap visible.",
        r"$$g(x)=(x-1)^{2}-4\qquad f(1)=0$$",
        r"The vertex does not lie on the line.",
    ),
    ("math-7-28", "B"): (
        r"The axis formula $x=-b/(2a)=1$ is the first coordinate, and $g(1)=-4$ is the second.",
        r"$$g(1)=-4$$",
        r"The vertex is $(1,-4)$.",
    ),
    ("math-7-28", "C"): (
        r"Substituting either claimed root back into $g$ confirms a zero.",
        r"$$g(-1)=0\qquad g(3)=0$$",
        r"The two factors $(x+1)$ and $(x-3)$ are the complete list.",
    ),
    ("math-7-28", "D"): (
        r"Equating the axis with the Vieta sum would require $S=S/2$, hence $S=0$. Here $S=2$.",
        r"$$x=1\neq 2=S$$",
        r"The axis is the midpoint of the roots, not their sum.",
    ),
    ("math-7-28", "E"): (
        r"The leading coefficient of $f(g(x))$ is still $1\neq 0$, so the square term survives the shift.",
        r"$$f(g(x))=x^{2}-2x-4$$",
        r"A line applied after a parabola stays quadratic.",
    ),
    ("math-7-29", "A"): (
        r"The same gap is $(f-g)(2)$ after expanding the difference $-x^{2}+8x-2$ and substituting the axis.",
        r"$$(f-g)(2)=10$$",
        r"Evaluating the original pair gives the same $7-(-3)=10$.",
    ),
    ("math-7-29", "B"): (
        r"The midpoint of the two (possibly complex) roots is the same abscissa, because Vieta’s sum is $4$.",
        r"$$\frac{S}{2}=2$$",
        r"The axis is the line $x=2$.",
    ),
    ("math-7-29", "C"): (
        r"Meetings elsewhere are the roots of $g-f=x^{2}-8x+2$, whose discriminant $64-8=56$ is positive, so there are two crossings.",
        r"$$\Delta=56>0$$",
        r"Two crossings and a gap of $10$ at $x=2$ are the opposite of tangency at the axis.",
    ),
    ("math-7-29", "D"): (
        r"The two (complex or real) roots add to $4$ by Vieta, and the axis $x=2$ is half of this sum.",
        r"$$S=4$$",
        r"The sum of the roots is $4$.",
    ),
    ("math-7-29", "E"): (
        r"Values on either side of $x=2$ sit above the vertex height $g(2)=-3$.",
        r"$$g(0)=1\qquad g(4)=1$$",
        r"The arms rise, which is the geometry of $a>0$.",
    ),
    ("math-7-30", "A"): (
        r"Completing the square makes the same fact visible: the square is at least $0$ and the leftover constant is positive.",
        r"$$g(x)=\left(x+\frac{1}{2}\right)^{2}+\frac{3}{4}\ge\frac{3}{4}>0$$",
        r"$g$ never meets the $x$-axis.",
    ),
    ("math-7-30", "B"): (
        r"Equivalently, $x^{2}+1$ is at least $1$ for every real $x$, so it cannot vanish.",
        r"$$\Delta(g-f)=-4<0$$",
        r"The graphs of $f$ and $g$ do not meet.",
    ),
    ("math-7-30", "C"): (
        r"Completing the square recovers the same pair: $g(x)=(x+1/2)^{2}+3/4$.",
        r"$$g\left(-\frac{1}{2}\right)=\frac{3}{4}$$",
        r"The vertex is $\left(-\frac{1}{2},\frac{3}{4}\right)$.",
    ),
    ("math-7-30", "D"): (
        r"The two complex roots of $x^{2}+x+1=0$ are the non-real cube roots of unity, whose product is $1$.",
        r"$$P=1$$",
        r"Vieta’s product holds in $\mathbb{C}$ whether or not the roots are real.",
    ),
    ("math-7-30", "E"): (
        r"A constant would have given the same height at $0$ and at $1$. The identity line does not.",
        r"$$f(1)=1\neq 0=f(0)$$",
        r"The slope is $1$, not $0$.",
    ),
    ("math-7-31", "A"): (
        r"Matching the remaining two powers then determines $B$ and $C$. The construction never divides by zero, because $m\neq 0$.",
        r"$$A=\frac{a}{m^{2}}\neq 0$$",
        r"A real triple $(A,B,C)$ always exists.",
    ),
    ("math-7-31", "B"): (
        r"Neither $B$ nor $C$ contributes an $x^{2}$ term, so no other choice of $A$ can match the leading coefficient $a$ of $g$.",
        r"$$a=Am^{2}$$",
        r"The coefficient $A$ is uniquely determined by $g$ and $f$.",
    ),
    ("math-7-31", "C"): (
        r"Take the simplest pair: $f(x)=1$ and $g(x)=x^{2}$. No triple $(A,B,C)$ satisfies $x^{2}=A+B+C$.",
        r"$$Aq^{2}+Bq+C=\text{a constant}$$",
        r"The rewrite fails as soon as $f$ is constant.",
    ),
    ("math-7-31", "D"): (
        r"Take $f(x)=x$ and $g(x)=x^{2}$. Then $g=f^{2}$ with $A=1$, yet $g(f(x))=x^{2}$ has no $x^{4}$ term.",
        r"$$g(f(x))=x^{2}$$",
        r"The nested function stays quadratic.",
    ),
    ("math-7-31", "E"): (
        r"Take $f(x)=x$ and $g(x)=x^{2}+1$. Then $A=1$, $B=0$, $C=1$, so $f$ vanishes at $0$ while $g$ never vanishes.",
        r"$$g(0)=1\neq 0$$",
        r"The roots of $g$ and $f$ need not agree.",
    ),
    ("math-7-32", "A"): (
        r"If $a>0$ this vertex is the unique lowest point; if $a<0$ it is the unique highest point. In either case $(h,k)$ is the unique turning point.",
        r"$$g(h)=k$$",
        r"No other input can match that extreme height.",
    ),
    ("math-7-32", "B"): (
        r"Take $g(x)=-x^{2}+1$. Then $a=-1<0$ and $k=1$ is the global maximum, while the values run down to $-\infty$.",
        r"$$g(0)=1\qquad g(1)=0$$",
        r"The number $k$ is a maximum, not a minimum.",
    ),
    ("math-7-32", "C"): (
        r"Shifting the graph vertically does not move a vertical axis. The height $k$ is absent from the axis description $x=h$.",
        r"$$g(h+t)=at^{2}+k=g(h-t)$$",
        r"Symmetry about $x=h$ holds for every $k$.",
    ),
    ("math-7-32", "D"): (
        r"Take $g(x)=(x-1)^{2}$. Replacing $h=1$ by $-1$ produces $(x+1)^{2}$, whose vertex sits at $-1$ rather than at $1$.",
        r"$$g(1)=0\qquad (1+1)^{2}=4$$",
        r"The two formulas disagree at $x=1$, so the graph moves unless $h=0$.",
    ),
    ("math-7-32", "E"): (
        r"If two triples $(a,h,k)$ produced the same function, the vertices would have to agree and the leading coefficients would have to agree.",
        r"$$h=-\frac{b}{2a}\qquad k=g(h)$$",
        r"The representation exists and is unique.",
    ),
    ("math-7-33", "A"): (
        r"Take $x^{2}$ and $y=x$: they meet at $0$ and $1$, twice. Never three times. The leading coefficient $a\neq 0$ never cancels.",
        r"$$g-f\text{ is quadratic}$$",
        r"Three distinct intersections cannot occur.",
    ),
    ("math-7-33", "B"): (
        r"Take the simplest pair: $g(x)=x^{2}+1$ and $f(x)=0$. Then $g-f=x^{2}+1\ge 1>0$, so the graphs never meet.",
        r"$$x^{2}+1=0\text{ has no real }x$$",
        r"Non-intersection is possible.",
    ),
    ("math-7-33", "C"): (
        r"A quadratic that vanishes together with its derivative at $x_{0}$ is a scalar multiple of $(x-x_{0})^{2}$.",
        r"$$(g-f)(x)=a(x-x_{0})^{2}$$",
        r"That is the definition of a double root.",
    ),
    ("math-7-33", "D"): (
        r"Take $g(x)=x^{2}+1$ and $f(x)=0$: no meeting. Take $g(x)=x^{2}$ and $f(x)=0$: a double meeting at the origin, hence only one point.",
        r"$$x^{2}+1=0\qquad x^{2}=0\qquad x^{2}-1=0$$",
        r"A constant line need not intersect twice.",
    ),
    ("math-7-33", "E"): (
        r"The leading coefficient $a$ never cancels. A third intersection cannot be created by moving the graph up or down.",
        r"$$(g+s)-f=ax^{2}+\cdots$$",
        r"Vertical translation never produces a third meeting.",
    ),
    ("math-7-34", "A"): (
        r"Every height $y\ge k$ is attained: solve $a(x-h)^{2}+k=y$ to get a real $x$, because $a>0$.",
        r"$$(x-h)^{2}=\frac{y-k}{a}\ge 0$$",
        r"The range is exactly the half-line $[k,+\infty)$.",
    ),
    ("math-7-34", "B"): (
        r"Take $g(x)=-x^{2}$: here $k=0$ and the range is $(-\infty,0]$, not $[0,+\infty)$.",
        r"$$-x^{2}\le 0$$",
        r"The claimed half-line $[k,+\infty)$ is the range for $a>0$, not for $a<0$.",
    ),
    ("math-7-34", "C"): (
        r"The missing heights are those strictly below $k$ (if $a>0$) or strictly above $k$ (if $a<0$).",
        r"$$\text{range }=[k,+\infty)\text{ or }(-\infty,k]$$",
        r"Neither of those two half-lines is all of $\mathbb{R}$.",
    ),
    ("math-7-34", "D"): (
        r"The division is legitimate precisely because $m\neq 0$. Thus every real height is attained exactly once.",
        r"$$x=\frac{y-q}{m}$$",
        r"A non-constant linear function has range $\mathbb{R}$.",
    ),
    ("math-7-34", "E"): (
        r"A concrete picture is $g(x)=x^{2}$, whose graph never goes below the $x$-axis.",
        r"$$g(x)=a(x-h)^{2}\ge 0$$",
        r"No negative value is attained.",
    ),
    ("math-7-35", "A"): (
        r"The leading coefficient $-a$ is non-zero, so $d$ cannot drop degree.",
        r"$$d(x)=-ax^{2}+(m-b)x+(q-c)$$",
        r"The difference $d=f-g$ is always a quadratic function.",
    ),
    ("math-7-35", "B"): (
        r"No further computation is required: this is the definition of $d$ at the origin.",
        r"$$d(0)=f(0)-g(0)$$",
        r"The $y$-intercept of $d$ splits as a difference of intercepts.",
    ),
    ("math-7-35", "C"): (
        r"That common value is a point of both graphs, and it sits on the $y$-axis because the first coordinate is $0$.",
        r"$$(0,f(0))\text{ lies on both graphs}$$",
        r"The graphs intersect on the $y$-axis precisely when $d$ vanishes at the origin.",
    ),
    ("math-7-35", "D"): (
        r"Take $f(x)=0$ and $g(x)=x^{2}-1$: then $d=1-x^{2}$ has two roots $\pm 1$, and the graphs meet exactly twice.",
        r"$$d(x)=0\iff f(x)=g(x)$$",
        r"Two distinct real roots of $d$ give two meetings, not more.",
    ),
    ("math-7-35", "E"): (
        r"The leading coefficient $-a$ is non-zero, so the graph of $d$ is a genuine parabola (opening opposite to $g$).",
        r"$$d(x)=-ax^{2}+\cdots$$",
        r"A quadratic function is a parabola by definition.",
    ),
    ("math-7-36", "A"): (
        r"Each of those two slopes makes $g-f_{t}$ a perfect square times a constant, which is the algebraic form of a touch.",
        r"$$t=-2\pm 2\sqrt{2}$$",
        r"Real tangent slopes exist.",
    ),
    ("math-7-36", "B"): (
        r"The horizontal line $y=0$ (that is, $t=0$) already misses $g$, whose vertex height is $1>0$.",
        r"$$\Delta(0)=-4<0$$",
        r"A missing slope exists.",
    ),
    ("math-7-36", "C"): (
        r"The leading coefficient of $g-f_{t}$ is $1\neq 0$, so the difference never drops degree, and two roots remain two meetings.",
        r"$$\Delta(t)>0\iff\text{two distinct real meetings}$$",
        r"A positive discriminant is exactly two intersections.",
    ),
    ("math-7-36", "D"): (
        r"A vertex on the $x$-axis would require $g(1)=0$. Here the height is $1$.",
        r"$$g(1)=1\neq 0$$",
        r"The vertex is $(1,1)$, one unit above the $x$-axis.",
    ),
    ("math-7-36", "E"): (
        r"A square equation $u^{2}=8$ has two real roots $u=\pm 2\sqrt{2}$, hence two real slopes.",
        r"$$t=-2+2\sqrt{2}\qquad t=-2-2\sqrt{2}$$",
        r"Tangency occurs for two real parameters, not for at most one.",
    ),
    ("math-7-37", "A"): (
        r"Nesting multiplies highest powers ($1\cdot 2=2$) instead of adding them. There is no $x^{3}$ term to collect.",
        r"$$f(g(x))=6x^{2}-12x-19$$",
        r"The composite stays quadratic.",
    ),
    ("math-7-37", "B"): (
        r"The leading term is $2\cdot 9x^{2}=18x^{2}$, with non-zero coefficient.",
        r"$$18\neq 0$$",
        r"The nested function is a parabola.",
    ),
    ("math-7-37", "C"): (
        r"The inner line at the origin is $-1$, and the parabola vanishes there because $x=-1$ is a root of $g(x)=2(x-3)(x+1)$.",
        r"$$g(-1)=0$$",
        r"The nested value is $0$.",
    ),
    ("math-7-37", "D"): (
        r"Compute $f(g(0))$ and compare it with the value $0$ obtained for $g(f(0))$.",
        r"$$g(0)=-6\qquad f(-6)=-19$$",
        r"Composition does not commute for this pair.",
    ),
    ("math-7-37", "E"): (
        r"The remaining coefficients $B$ and $C$ are then uniquely determined, but the claim only names $A$.",
        r"$$2=A\cdot 9\qquad A=\frac{2}{9}$$",
        r"Matching forces $A=\frac{2}{9}$.",
    ),
    ("math-7-38", "A"): (
        r"Expanding the right-hand side recovers $x^{2}-3x+\frac{9}{4}-\frac{49}{4}=x^{2}-3x-10$.",
        r"$$h=\frac{3}{2}$$",
        r"The shift copies the sign of $b=-3$ correctly.",
    ),
    ("math-7-38", "B"): (
        r"That expansion has middle coefficient $+3$, whereas $g$ has middle coefficient $-3$. At $x=1$ the two polynomials disagree.",
        r"$$g(1)=-12\qquad \left(1+\frac{3}{2}\right)^{2}-\frac{49}{4}=-6$$",
        r"The plus sign in the shift is wrong.",
    ),
    ("math-7-38", "C"): (
        r"The slope of $f$ is $-3$. Those two numbers disagree.",
        r"$$-1\neq -3$$",
        r"The average rate is $-1$, not the slope of $f$.",
    ),
    ("math-7-38", "D"): (
        r"The inner parabola at the origin is $-10$, and the line at $-10$ is $36$.",
        r"$$f(-10)=36$$",
        r"The two substitutions produce $36$.",
    ),
    ("math-7-38", "E"): (
        r"The $x^{2}$ term $-1$ never cancels, so $f-(g+s)$ remains quadratic for every real $s$. A constant function has no $x^{2}$ term.",
        r"$$f-(g+s)=-x^{2}+\cdots$$",
        r"No vertical shift can make $f-g$ constant.",
    ),
    ("math-7-39", "A"): (
        r"The line $f$ has no $x^{2}$ term to cancel the $-x^{2}$ coming from $-g$.",
        r"$$d(x)=-x^{2}+3x+5$$",
        r"The coefficient of $x^{2}$ is $-1$.",
    ),
    ("math-7-39", "B"): (
        r"The leading coefficient $-1$ is non-zero, so $d$ is quadratic (a parabola opening downwards).",
        r"$$d(x)=-x^{2}+3x+5$$",
        r"Highest surviving power $x^{2}$ is the definition of a quadratic.",
    ),
    ("math-7-39", "C"): (
        r"No extra meeting can hide somewhere $d$ fails to vanish, and no vanishing of $d$ can fail to be a meeting.",
        r"$$d(x)=0\iff f(x)=g(x)$$",
        r"The zeros of $d$ are exactly the meeting abscissas.",
    ),
    ("math-7-39", "D"): (
        r"The two graphs sit five units apart on the $y$-axis, so $d$ does not vanish at the origin.",
        r"$$d(0)=5\neq 0$$",
        r"The value $d(0)$ is $5$, not $0$.",
    ),
    ("math-7-39", "E"): (
        r"Two distinct real meetings occur, and a third would require a cubic difference, which subtracting a line from a parabola cannot produce.",
        r"$$\Delta=29>0$$",
        r"The graphs meet twice, not three times.",
    ),
    ("math-7-40", "A"): (
        r"For instance $a=1$ gives $\Delta=21>0$, two distinct real meetings, with leading coefficient still positive.",
        r"$$a=1\qquad\Delta=21$$",
        r"A positive leading coefficient that is not too large therefore produces two meetings.",
    ),
    ("math-7-40", "B"): (
        r"Take $a=7>25/4$: then $\Delta=25-28=-3<0$, so the graphs miss each other.",
        r"$$\Delta=25-4a<0\iff a>\frac{25}{4}$$",
        r"A sufficiently large leading coefficient makes the graphs miss.",
    ),
    ("math-7-40", "C"): (
        r"This equals $2$ only when $a=1$. For $a=2$ the axis is $x=1$, not $x=2$.",
        r"$$\frac{2}{2}=1\neq 2$$",
        r"The axis is not $x=2$ for every $a$.",
    ),
    ("math-7-40", "D"): (
        r"Nothing else in the formula can flip the arms: the middle coefficient $-4$ and the constant $1$ have no say.",
        r"$$a<0\iff\text{arms downwards}$$",
        r"The opening is the sign of $a$.",
    ),
    ("math-7-40", "E"): (
        r"For that value, $g_{a}-f$ is a perfect square times a constant, so the graphs touch at exactly one point.",
        r"$$a=\frac{25}{4}\neq 0$$",
        r"A tangent value of $a$ exists.",
    ),
    ("math-7-41", "A"): (
        r"Take $g(x)=x^{2}-2x$: then $S=2$ and the axis is $x=1$, two different lines.",
        r"$$x=1\neq x=2$$",
        r"The axis is $x=S/2$, not $x=S$.",
    ),
    ("math-7-41", "B"): (
        r"This identity holds whether or not the roots are real: $S$ is defined in $\mathbb{C}$ by the same ratio of coefficients.",
        r"$$\frac{S}{2}=-\frac{b}{2a}$$",
        r"The axis is the line $x=S/2$ in all cases.",
    ),
    ("math-7-41", "C"): (
        r"A concrete picture is $g(x)=x^{2}-1$, whose axis is the $y$-axis and whose roots $\pm 1$ add to $0$.",
        r"$$S=0\iff x=0$$",
        r"If $S=0$, the axis of $g$ is the $y$-axis.",
    ),
    ("math-7-41", "D"): (
        r"Take $g(x)=x^{2}-3x-4=(x-4)(x+1)$. Then $a=1>0$ and $S=3>0$, yet the roots are $4$ and $-1$.",
        r"$$4>0\qquad -1<0$$",
        r"A positive sum does not make both roots positive.",
    ),
    ("math-7-41", "E"): (
        r"Changing $c$ moves the graph vertically, which cannot move a vertical axis. Completing the square absorbs $c$ into the height $k$, not into $h$.",
        r"$$x=-\frac{b}{2a}$$",
        r"The constant term is absent from the axis formula.",
    ),
    ("math-7-42", "A"): (
        r"Take $f(x)=x$ and $g(x)=x^{2}$: then $g(f(x))=x^{2}$, with no $x^{3}$ term.",
        r"$$\text{coefficient of }x^{2}=am^{2}\neq 0$$",
        r"The nested function is quadratic, not cubic.",
    ),
    ("math-7-42", "B"): (
        r"The leading coefficient $am$ is non-zero because $a\neq 0$ and $m\neq 0$, so the square term survives.",
        r"$$f(g(x))=am x^{2}+\cdots$$",
        r"The nested function $f(g(x))$ is always a parabola.",
    ),
    ("math-7-42", "C"): (
        r"One composite is $a(mx+q)^{2}+\cdots$ and the other is $m(ax^{2}+\cdots)+q$; each leading coefficient is non-zero.",
        r"$$\text{highest power }=2\text{ in both orders}$$",
        r"The two nested functions have the same highest power of $x$.",
    ),
    ("math-7-42", "D"): (
        r"Take $f(x)=x+1$ and $g(x)=x^{2}$. At $x=1$ one composite equals $4$ and the other equals $2$.",
        r"$$g(f(x))=(x+1)^{2}\qquad f(g(x))=x^{2}+1$$",
        r"The two nested functions are not identical.",
    ),
    ("math-7-42", "E"): (
        r"A non-constant line has $f(x)^{4}$ of highest power $4$, and the leading coefficient $a m^{4}$ is non-zero.",
        r"$$g\bigl(f(x)^{2}\bigr)=a f(x)^{4}+\cdots$$",
        r"The nested function has highest power $x^{4}$.",
    ),
    ("math-7-43", "A"): (
        r"Whenever $x_{2}>x_{1}$, the difference has the sign of $m$ and cannot vanish. That is the definition of strict monotonicity on $\mathbb{R}$.",
        r"$$f(x_{2})-f(x_{1})=m(x_{2}-x_{1})$$",
        r"A non-constant line never turns.",
    ),
    ("math-7-43", "B"): (
        r"Take $g(x)=x^{2}$. Then $g(-1)=1=g(1)$ with $-1<1$, so $g$ is not strictly monotone on $\mathbb{R}$.",
        r"$$g'\left(-\frac{b}{2a}\right)=0$$",
        r"A parabola always turns at its axis.",
    ),
    ("math-7-43", "C"): (
        r"If $a>0$ the restriction is strictly increasing; if $a<0$ it is strictly decreasing. In either case it is strictly monotone.",
        r"$$x>-\frac{b}{2a}\implies g'\text{ has the sign of }a$$",
        r"The restriction of $g$ to the right of the axis does not turn.",
    ),
    ("math-7-43", "D"): (
        r"The leading coefficient $a>0$ forces $g(x)-f(x)\to +\infty$ as $x\to +\infty$, hence $f(x)<g(x)$ for all sufficiently large $x$.",
        r"$$g(x)-f(x)=ax^{2}+\cdots$$",
        r"The parabola overtakes the line.",
    ),
    ("math-7-43", "E"): (
        r"The graph is a horizontal line, which is monotone in the weak sense but not strictly monotone.",
        r"$$f(1)-f(0)=0$$",
        r"A constant function is not strictly monotone.",
    ),
    ("math-7-44", "A"): (
        r"Take $g(x)=x^{2}$ and $t=0$: then $g-f_{0}=x^{2}-1$, whose discriminant is $4>0$, so $y=1$ cuts $y=x^{2}$ twice and is not tangent.",
        r"$$\Delta(0)=4\neq 0$$",
        r"Not every slope is tangent.",
    ),
    ("math-7-44", "B"): (
        r"If $a>0$ and $c<1$, the right-hand side is negative, so no real $t$ exists. Take $g(x)=x^{2}$: then $c=0<1$ and $4a(c-1)=-4<0$.",
        r"$$(t-b)^{2}=-4\text{ has no real }t$$",
        r"A tangent slope need not exist.",
    ),
    ("math-7-44", "C"): (
        r"Equivalently, $g-f_{t}$ has a double root at $x_{0}$, which forces $(g-f_{t})'(x_{0})=0$, hence $g'(x_{0})=t$.",
        r"$$g'(x_{0})=2ax_{0}+b=t$$",
        r"Shared tangent lines have equal slopes.",
    ),
    ("math-7-44", "D"): (
        r"A quadratic cannot have both a double root and two distinct roots at once.",
        r"$$\Delta(t)>0\iff\text{two distinct meetings, not tangent}$$",
        r"Two distinct real roots of $g-f_{t}$ mean two crossings and no tangency.",
    ),
    ("math-7-44", "E"): (
        r"For $g(x)=x^{2}$ the choice $q=1$ gives a negative right-hand side and no real $t$, while $q=-1$ gives $t^{2}=4$, hence $t=\pm 2$.",
        r"$$(t-b)^{2}=4a(c-q)$$",
        r"The intercept can change whether a tangent slope exists.",
    ),
    ("math-7-45", "A"): (
        r"The axis of $g_{1}$ is $x=h+r$, where $h=-b/(2a)$ was the axis of $g$.",
        r"$$x=h+r$$",
        r"A horizontal shift slides the axis with the graph.",
    ),
    ("math-7-45", "B"): (
        r"Take $g(x)=x^{2}$ and $s=1$: both $x^{2}$ and $x^{2}+1$ have axis $x=0$.",
        r"$$x=-\frac{b}{2a}$$",
        r"The first two coefficients $a$ and $b$ are unchanged, so the axis does not move.",
    ),
    ("math-7-45", "C"): (
        r"A change of sign of the leading coefficient flips the arms. Scaling $x^{2}$ by $-1$ produces $-x^{2}$, which opens downwards.",
        r"$$g_{3}(x)=\lambda a x^{2}+\cdots$$",
        r"If $\lambda<0$, then $g_{3}$ opens opposite to $g$.",
    ),
    ("math-7-45", "D"): (
        r"Take $g(x)=x^{2}$ and $r=1$. Then $g_{1}(x)=(x-1)^{2}$ has axis $x=1\neq 0$ and the same leading coefficient $1$.",
        r"$$g_{1}(x)=a(x-h-r)^{2}+k$$",
        r"Such a shift exists.",
    ),
    ("math-7-45", "E"): (
        r"Scaling cannot add or remove zeros. The two functions vanish at exactly the same abscissas.",
        r"$$\lambda g(x)=0\iff g(x)=0$$",
        r"$g_{3}$ always has the same roots as $g$.",
    ),
    ("math-7-46", "A"): (
        r"Substituting the three numbers back reproduces $g$ identically: $A\cdot 16=1$ recovers the leading coefficient.",
        r"$$A=\frac{1}{16}$$",
        r"Matching forces the claimed triple.",
    ),
    ("math-7-46", "B"): (
        r"The discriminant $25+16=41>0$ gives exactly two meetings. A quadratic cannot hide a third root.",
        r"$$f-g=-x^{2}+5x+4$$",
        r"The graphs meet twice, not three times.",
    ),
    ("math-7-46", "C"): (
        r"Evaluate both nested orders at the origin and compare.",
        r"$$g(f(0))=0\qquad f(g(0))=-6$$",
        r"Composition does not commute for this pair.",
    ),
    ("math-7-46", "D"): (
        r"The gap is $4-(-9/4)=25/4$, not $17/4$. The number $17/4$ would be $f(1/2)-1$, dropping the vertex depth.",
        r"$$\frac{25}{4}\neq\frac{17}{4}$$",
        r"The gap at the axis is $\frac{25}{4}$, not $\frac{17}{4}$.",
    ),
    ("math-7-46", "E"): (
        r"Expanding recovers $x^{2}-x+\frac{1}{4}-\frac{9}{4}=x^{2}-x-2$.",
        r"$$h=\frac{1}{2}$$",
        r"The shift is the axis, and the constant is the vertex height.",
    ),
    ("math-7-48", "A"): (
        r"Both claimed roots kill a factor, and the leading coefficient is the announced $2$.",
        r"$$g(2)=0\qquad g(4)=0$$",
        r"The rebuilt formula is $2x^{2}-12x+16$.",
    ),
    ("math-7-48", "B"): (
        r"The remaining coefficients $B$ and $C$ are then uniquely determined, but the claim only names $A$.",
        r"$$2=A\cdot 25$$",
        r"Matching forces $A=\frac{2}{25}$.",
    ),
    ("math-7-48", "C"): (
        r"Evaluate both nested orders at the origin and compare.",
        r"$$g(f(0))=48\qquad f(g(0))=78$$",
        r"Composition does not commute for this pair.",
    ),
    ("math-7-48", "D"): (
        r"The leading $2$ stretches the graph vertically and does not move the zeros. Vieta’s sum $6$ and product $8$ recover the same two roots.",
        r"$$|4-2|=2$$",
        r"The distance between the roots is $2$.",
    ),
    ("math-7-48", "E"): (
        r"Expanding recovers $2(x^{2}-6x+9)-2=2x^{2}-12x+16$.",
        r"$$h=3\qquad k=-2$$",
        r"The vertex sits at the midpoint of the roots, at height $-2$.",
    ),
    ("math-7-49", "A"): (
        r"The slope of $f$ is $4$. Those two numbers are negatives of each other, not equal.",
        r"$$-4\neq 4$$",
        r"The average rate is $-4$, not the slope of $f$.",
    ),
    ("math-7-49", "C"): (
        r"Expanding recovers $x^{2}-6x+9-4=x^{2}-6x+5$.",
        r"$$h=3\qquad k=-4$$",
        r"The vertex is $(3,-4)$, which is the completed-square pair.",
    ),
    ("math-7-49", "D"): (
        r"The claimed $-6$ is $b$, not $-b/a$. The roots $1$ and $5$ add to $6$.",
        r"$$1+5=6$$",
        r"The sum of the roots is $6$, not $-6$.",
    ),
    ("math-7-49", "E"): (
        r"The inner parabola at the origin is the constant term $5$, and the line at $5$ is $12$.",
        r"$$f(5)=12$$",
        r"The two substitutions produce $12$.",
    ),
    ("math-7-50", "A"): (
        r"A positive discriminant gives two distinct real meetings. The two roots of $x^{2}-3x-2=0$ are genuine intersections of $g_{0}$ with $f$.",
        r"$$\Delta=17>0$$",
        r"With no vertical shift the graphs meet at two points.",
    ),
    ("math-7-50", "B"): (
        r"Take $s=5$: then $\Delta=17-20=-3<0$, so the graphs miss each other.",
        r"$$\Delta=17-4s<0\iff s>\frac{17}{4}$$",
        r"A large enough upward shift makes the graphs miss.",
    ),
    ("math-7-50", "C"): (
        r"For that shift, $g_{s}-f$ is a perfect square times a constant, so the graphs touch at exactly one point. The value $17/4$ is a legitimate real shift.",
        r"$$s=\frac{17}{4}$$",
        r"A tangent shift exists.",
    ),
    ("math-7-50", "D"): (
        r"The leading coefficient $1$ never cancels. A third intersection would require a cubic difference, which a vertical shift cannot create.",
        r"$$g_{s}-f=x^{2}-3x+(s-2)$$",
        r"Vertical shifts cannot create a third meeting.",
    ),
    ("math-7-50", "E"): (
        r"This axis is the same for every $s$. Completing the square makes the same fact visible: $s$ is absorbed into the height $k$, not into $h$.",
        r"$$x=\frac{1}{2}$$",
        r"The axis of $g_{s}$ does not depend on $s$.",
    ),
}
