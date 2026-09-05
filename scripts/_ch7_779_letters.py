"""Letter replacements and inserts for Ch7 core 7.79-voice deepen."""
from __future__ import annotations

# Imported expl from the apply script via circular-free copy
def expl(letter: str, truth: bool, *parts: str) -> str:
    verdict = "True" if truth else "False"
    body = "\n\n".join(p.strip() for p in parts if str(p).strip())
    text = f"**{letter}.** → {verdict}\n\n{body}"
    if not text.rstrip().endswith(f", so the statement is {verdict}."):
        raise ValueError(f"{letter} missing close")
    if text.count("so the statement is") != 1:
        raise ValueError(f"{letter} close count")
    return text


REPLACE: dict[tuple[str, str], str] = {
    ("math-7-8", "E"): expl(
        "E", True,
        r"The identity line $f(x)=x$ has slope $1$: each extra unit of $x$ raises the height by exactly $1$.",
        r"$$f(x)=1\cdot x+0$$",
        r"A unit step recovers the same coefficient, because there is no constant term to cancel or confuse with the slope.",
        r"$$f(1)-f(0)=1$$",
        r"Geometrically the graph is the diagonal through the origin, whose rise-over-run is $1$.",
        r"The slope is $1$, so the statement is True.",
    ),
    ("math-7-21", "B"): expl(
        "B", True,
        r"A difference of squares factors at sight. The two linear factors are exactly the ones the claim names.",
        r"$$g(x)=x^{2}-1=(x-1)(x+1)$$",
        r"Expanding the product recovers $g$ identically, so the factorisation is not a different function.",
        r"$$(x-1)(x+1)=x^{2}-1$$",
        r"Substituting either root back confirms a zero, and a product of two linear factors has no further real root.",
        r"$$g(1)=0$$",
        r"$$g(-1)=0$$",
        r"$g$ factors as $(x-1)(x+1)$, so the statement is True.",
    ),
    ("math-7-25", "D"): expl(
        "D", True,
        r"Vieta’s sum for $g(x)=x^{2}-x-2$ is minus the middle coefficient over the leading one, with no solving required.",
        r"$$S=-\frac{b}{a}=-\frac{-1}{1}=1$$",
        r"Factoring names the two roots individually and checks the same sum.",
        r"$$g(x)=(x+1)(x-2)$$",
        r"$$(-1)+2=1$$",
        r"The claimed sum is this number $1$, not the middle coefficient $-1$ of the expanded formula.",
        r"The sum of the roots is $1$, so the statement is True.",
    ),
    ("math-7-1", "A"): expl(
        "A", True,
        r"A parabola turns exactly once, at the axis of symmetry. The axis is read from the first two coefficients, and the lowest point (the leading coefficient is positive) is the value of $g$ there.",
        r"$$x=-\frac{b}{2a}=-\frac{-1}{2\cdot 1}=\frac{1}{2}$$",
        r"Substitute that abscissa into the given rule, term by term.",
        r"$$g\left(\frac{1}{2}\right)=\left(\frac{1}{2}\right)^{2}-\frac{1}{2}-2=-\frac{9}{4}$$",
        r"The arms open upwards, so this vertex is the unique lowest point on the graph: every other input makes the square $(x-1/2)^{2}$ strictly positive and lifts the height.",
        r"The lowest point is $\left(\frac{1}{2},-\frac{9}{4}\right)$, so the statement is True.",
    ),
    ("math-7-1", "B"): expl(
        "B", True,
        r"Write $f(x)=4x+2$ and try to match $g$ against a combination of $f^{2}$, $f$ and a constant. Squaring a non-constant line already produces an $x^{2}$ term, so the leading coefficient of $g$ can always be absorbed.",
        r"$$g(x)=A(4x+2)^{2}+B(4x+2)+C$$",
        r"Equating coefficients of $x^{2}$, then $x$, then the constant term, yields a unique triple.",
        r"$$A=\frac{1}{16},\qquad B=-\frac{1}{2},\qquad C=-\frac{5}{4}$$",
        r"Substituting these three numbers back reproduces $g$ identically: the $x^{2}$ term is $A\cdot 16=1$, and the remaining two powers then match as well.",
        r"A real triple therefore exists, so the statement is True.",
    ),
    ("math-7-1", "C"): expl(
        "C", False,
        r"Vieta reads the sum of the roots straight off the coefficients: minus the middle coefficient over the leading one, with no quadratic formula required.",
        r"$$S=-\frac{b}{a}=-\frac{-1}{1}=1$$",
        r"The same sum is visible after factoring, which also names the two roots individually.",
        r"$$g(x)=(x+1)(x-2)$$",
        r"$$(-1)+2=1$$",
        r"The claimed $-1$ is the product of dropping the minus sign in $-b/a$, or of reading the middle coefficient as if it were already the sum.",
        r"The sum of the roots is $1$, not $-1$, so the statement is False.",
    ),
    ("math-7-1", "D"): expl(
        "D", False,
        r"The graph of $f-g$ meets the $y$-axis at the single point where $x=0$, so the claimed height $y=0$ is a statement about the constant term of the difference.",
        r"$$(f-g)(x)=(4x+2)-(x^{2}-x-2)=-x^{2}+5x+4$$",
        r"$$(f-g)(0)=4$$",
        r"The intercept is $y=4$, not $y=0$. Equivalently, $f(0)=2$ while $g(0)=-2$, so the two original graphs already sit four units apart on the vertical axis.",
        r"$$f(0)-g(0)=2-(-2)=4$$",
        r"The difference misses the origin on that axis, so the statement is False.",
    ),
    ("math-7-1", "E"): expl(
        "E", False,
        r"A meeting of the two graphs is a root of $g-f$. Subtracting a line from a parabola leaves a parabola, and a quadratic equation has at most two real roots.",
        r"$$g(x)-f(x)=x^{2}-5x-4$$",
        r"The discriminant decides how many of those roots are real.",
        r"$$\Delta=(-5)^{2}-4(1)(-4)=41>0$$",
        r"A positive discriminant gives exactly two distinct real meetings. A third meeting would require the difference to become cubic, which subtracting a line cannot do.",
        r"Two is the maximum a line and a parabola can manage, so the statement is False.",
    ),
    ("math-7-22", "A"): expl(
        "A", True,
        r"The discriminant $\Delta=b^{2}-4ac$ is the quantity under the square root in the quadratic formula. A negative number has no real square root, so that formula cannot produce a real $x$.",
        r"$$x=\frac{-b\pm\sqrt{\Delta}}{2a}$$",
        r"If $\Delta<0$, the equation $g(x)=0$ therefore has no real solution. Completing the square says the same thing: $g$ stays strictly above or strictly below the $x$-axis.",
        r"A concrete witness is $x^{2}+1$, whose discriminant is $-4$ and whose graph never meets the $x$-axis.",
        r"$$x^{2}+1=0\qquad\Delta=-4$$",
        r"A negative discriminant means no real roots, so the statement is True.",
    ),
    ("math-7-22", "B"): expl(
        "B", False,
        r"The vertex is the turning point of the graph, located by the axis formula. That formula never consults $\Delta$.",
        r"$$x=-\frac{b}{2a}$$",
        r"The vertex exists for every parabola, including those that miss the $x$-axis. Take $g(x)=x^{2}+1$: the discriminant is $-4<0$, yet the graph still turns at $(0,1)$.",
        r"$$g(x)=x^{2}+1$$",
        r"The height there is $g(0)=1$, a perfectly ordinary vertex. A negative discriminant kills the real roots, not the turning point.",
        r"A negative discriminant does not remove the vertex, so the statement is False.",
    ),
    ("math-7-22", "C"): expl(
        "C", True,
        r"If $\Delta=0$, the quadratic formula collapses to a single real root $x=-b/(2a)$, with multiplicity two.",
        r"$$g(x)=a\left(x+\frac{b}{2a}\right)^{2}$$",
        r"The graph therefore meets the $x$-axis at exactly that one point: the vertex sits on the axis. A double root is the algebraic form of tangency with the $x$-axis.",
        r"A concrete picture is $g(x)=x^{2}$, which touches at the origin and nowhere else.",
        r"$$x^{2}=0\qquad\Delta=0$$",
        r"A vanishing discriminant means exactly one real meeting with the $x$-axis, so the statement is True.",
    ),
    ("math-7-22", "D"): expl(
        "D", True,
        r"Opposite signs of $a$ and $c$ make the product $ac$ negative, so the term $-4ac$ is positive.",
        r"$$\Delta=b^{2}-4ac=b^{2}+4|ac|$$",
        r"A square $b^{2}$ is at least $0$, and $4|ac|$ is strictly positive, so $\Delta$ is strictly positive. The two real roots then exist whether or not $b$ vanishes.",
        r"A concrete pair: $x^{2}-1$ has $a=1$, $c=-1$, and $\Delta=4>0$ with two real roots $\pm 1$.",
        r"$$\Delta=0-4(1)(-1)=4$$",
        r"Opposite signs of $a$ and $c$ force $\Delta>0$, so the statement is True.",
    ),
    ("math-7-22", "E"): expl(
        "E", True,
        r"When $\Delta>0$ there are two distinct real roots, and the axis is their midpoint. A midpoint of two distinct numbers lies strictly between them.",
        r"$$x=\frac{r_{1}+r_{2}}{2}=-\frac{b}{2a}$$",
        r"Vieta’s sum $r_{1}+r_{2}=-b/a$ makes the same midpoint visible as $S/2$. Neither root can equal the axis, because that would collapse the two roots into one and force $\Delta=0$.",
        r"Take $x^{2}-1$: the roots are $\pm 1$ and the axis is $x=0$, which sits strictly between them.",
        r"$$-1<0<1$$",
        r"The axis sits strictly between the two real roots, so the statement is True.",
    ),
    ("math-7-47", "A"): expl(
        "A", True,
        r"Every line $f_{k}(x)=kx+1$ is built to pass through $(0,1)$, and the given parabola does too: its constant term is $1$.",
        r"$$g(0)=1\qquad f_{k}(0)=1$$",
        r"The two graphs therefore share that $y$-intercept for every slope $k$. Algebraically, the difference always has a factor $x$.",
        r"$$g(x)-f_{k}(x)=x^{2}-(4+k)x=x\bigl(x-(4+k)\bigr)$$",
        r"The factor $x$ is the root at the origin, independent of $k$. The shared point is $(0,1)$.",
        r"The graphs intersect at $(0,1)$ for every $k$, so the statement is True.",
    ),
    ("math-7-47", "B"): expl(
        "B", True,
        r"A unique meeting means the remaining root of $g-f_{k}$ collides with $x=0$. After factoring out $x$, that remaining root is $x=4+k$.",
        r"$$g(x)-f_{k}(x)=x\bigl(x-(4+k)\bigr)$$",
        r"Collision with the origin is the linear equation $4+k=0$.",
        r"$$k=-4$$",
        r"For every other slope the second root is distinct from $0$, so there are two meetings. Thus exactly one slope produces a unique intersection point (a tangency).",
        r"A unique tangent slope exists, so the statement is True.",
    ),
    ("math-7-47", "C"): expl(
        "C", True,
        r"The unique slope that collapses the two meetings is $k=-4$, obtained by forcing the second root $4+k$ to be $0$. At that slope the only meeting is the shared $y$-intercept $(0,1)$.",
        r"$$g(x)-f_{-4}(x)=x^{2}=x\cdot x$$",
        r"The slope of the parabola at that same point is the derivative $g'(0)$.",
        r"$$g'(x)=2x-4$$",
        r"$$g'(0)=-4$$",
        r"The line through $(0,1)$ of slope $g'(0)$ is precisely $y=-4x+1$, which is $f_{-4}$. Matching derivatives at a shared point is the geometric form of tangency.",
        r"The unique touch happens at $(0,1)$ and matches $g'(0)$, so the statement is True.",
    ),
    ("math-7-47", "D"): expl(
        "D", True,
        r"Besides the shared root $x=0$, the second meeting of $g$ with $f_{k}$ sits at $x=4+k$. That abscissa is positive as soon as $k$ is larger than $-4$.",
        r"$$x=4+k>0\iff k>-4$$",
        r"Take the horizontal line of the family, $k=0$. The second meeting is then at $x=4$.",
        r"$$g(4)=16-16+1=1\qquad f_{0}(4)=1$$",
        r"The point $(4,1)$ has positive first coordinate, and it lies on both graphs.",
        r"A second meeting with positive $x$-coordinate exists, so the statement is True.",
    ),
    ("math-7-49", "B"): expl(
        "B", True,
        r"The mean-value theorem supplies a point of $(0,2)$ where $g'$ equals the average rate of $g$ on that interval. Compute that average first, as a difference quotient.",
        r"$$\frac{g(2)-g(0)}{2-0}=\frac{(4-12+5)-5}{2}=-4$$",
        r"For a parabola the point can be found by solving a linear equation.",
        r"$$g'(x)=2x-6$$",
        r"$$2c-6=-4\qquad c=1$$",
        r"The number $1$ lies in $(0,2)$. Directly: $g'(1)=-4$, which is the average rate on $[0,2]$.",
        r"Such a $c$ exists, so the statement is True.",
    ),
    ("math-7-47", "E"): expl(
        "E", False,
        r"Every line of the family already meets the parabola at $(0,1)$, independently of $k$. There is therefore no real $k$ for which the graphs fail to meet.",
        r"$$g(0)=f_{k}(0)=1$$",
        r"The discriminant of $g-f_{k}$ is a square, hence never negative.",
        r"$$\Delta(k)=(4+k)^{2}\ge 0$$",
        r"It equals zero only at the tangent slope $k=-4$, which is still a meeting (a touch at the origin). For every other $k$ there are two meetings.",
        r"The graphs always meet, so the statement is False.",
    ),
}


INSERT: dict[tuple[str, str], tuple[str, ...]] = {}
