"""Extra teaching beats spliced before the close on thin mixed letters."""
from __future__ import annotations

from _ch7_mixed_779_lib import D


EXTRAS: dict[tuple[str, str], tuple[str, ...]] = {
    ("math-7-e1", "B"): (
        r"A gap of two units with the wrong sign is the usual mix-up of which trace sits on top at $x=0$.",
    ),
    ("math-7-e1", "C"): (
        r"A meeting to the right of the origin does not count toward the left-hand tally, and a quadratic difference has no third real zero.",
    ),
    ("math-7-e1", "E"): (
        r"The chord of the two roots of $g$ is the $x$-axis for this even downward parabola, while $f$ is a falling line through $(0,2)$.",
    ),
    ("math-7-e2", "B"): (
        r"Constant second differences of $2$ force every new first gap to grow by exactly $2$, so the arithmetic cannot jump down to a first gap of $4$.",
    ),
    ("math-7-e2", "D"): (
        r"A chord of the two endpoints is a line, while the table is a genuine parabola, so a mismatch at an interior node is expected.",
    ),
    ("math-7-e2", "E"): (
        r"For an upward parabola the vertex height is the unique listed minimum, already sitting in the $n=2$ column.",
    ),
    ("math-7-e3", "A"): (
        r"A downward interpolating parabola is symmetric about its axis, so equal revenues $15$ must sit equally far from the listed peak.",
    ),
    ("math-7-e3", "C"): (
        r"The first-difference row $5,3,1,-1$ already changes sign, which is the discrete form of a peak at $p=4$.",
    ),
    ("math-7-e3", "D"): (
        r"Vieta's midpoint of the roots $0$ and $8$ is the same axis formula $p=-b/(2a)$ applied to $-p^{2}+8p$.",
    ),
    ("math-7-e3", "E"): (
        r"On a downward parabola past the axis, each extra unit of price lowers revenue; here that drop is the listed $1$ euro.",
    ),
    ("math-7-e4", "A"): (
        r"A quadratic difference has at most two real zeros, and both of them appear here, adding to $5$.",
    ),
    ("math-7-e4", "B"): (
        r"The constant term $1$ never enters the axis formula, which is why $x=2$ can be read off $a$ and $b$ alone.",
        D(r"S=-b/a=4\qquad x=S/2=2"),
    ),
    ("math-7-e4", "C"): (
        r"A negative vertex height for an upward parabola means the graph dips below the axis between its two real roots.",
        D(r"g(2)=-3<0"),
    ),
    ("math-7-e4", "D"): (
        r"The identity $P=c/a=g(0)$ holds for every monic quadratic, because only the constant term survives at the origin.",
        D(r"g(0)=1=P"),
    ),
    ("math-7-e4", "E"): (
        r"Matching coefficients of $x^{2}$, then $x$, then the constant term, is always possible once $f$ is a non-constant line.",
        D(r"g(x)=f(x)^{2}-6f(x)+6"),
    ),
    ("math-7-e5", "A"): (
        r"A repeated root of $x^{2}-tx+1$ is equivalent to the line being the tangent to the parabola at that abscissa.",
    ),
    ("math-7-e5", "B"): (
        r"The two-meeting range is the complementary region $|t|>2$, where $\Delta>0$. Between the tangents the graphs miss.",
    ),
    ("math-7-e5", "C"): (
        r"Completing the square makes the miss visible as $x^{2}+1\ge 1>0$, so the horizontal axis never meets $g$.",
    ),
    ("math-7-e5", "D"): (
        r"The sign of $\Delta=t^{2}-4$ flips at the tangent slopes $\pm 2$, so $|t|>2$ is two meetings and $|t|<2$ is a miss.",
        D(r"t=3>2\implies\text{two real meetings}"),
    ),
    ("math-7-e5", "E"): (
        r"A vertical axis $x=0$ and a horizontal line $y=0$ meet at the origin, but they are not the same line.",
    ),
    ("math-7-e6", "A"): (
        r"Without that stretch the vertex form $(x-2)^{2}-3$ would miss $(0,5)$ by four units, so the leading $2$ is forced.",
        D(r"4\cdot 2-3=5"),
    ),
    ("math-7-e6", "B"): (
        r"Symmetry about $x=2$ is the identity $g(2+t)=g(2-t)$. Here $t=2$ pairs the given intercept with $x=4$.",
        D(r"g(2+2)=g(2-2)=5"),
    ),
    ("math-7-e6", "C"): (
        r"The same identity $g(2+t)=g(2-t)$ with $t=1$ pairs $x=1$ with $x=3$, so the two heights cannot differ.",
        D(r"g(2+1)=g(2-1)=-1"),
    ),
    ("math-7-e6", "D"): (
        r"Opening upwards with a negative vertex height is the usual picture of a trough below the axis, not a peak above it.",
    ),
    ("math-7-e6", "E"): (
        r"Vertex form always carries a stretch $a\neq 0$; setting $a=1$ by default is the trap that misses the given point.",
    ),
    ("math-7-e7", "A"): (
        r"A vertex on the axis is the geometric form of a double root at $x=-1$, visible as the square $(x+1)^{2}$.",
    ),
    ("math-7-e7", "B"): (
        r"An operation performed on the values can only stretch or slide the graph vertically, which cannot move a vertical axis.",
    ),
    ("math-7-e7", "C"): (
        r"Equal highest powers do not make two polynomials the same function: the linear term $2x$ is present in one expansion and absent in the other.",
    ),
    ("math-7-e7", "D"): (
        r"One vertex sits on the $x$-axis and the other on the $y$-axis, two different points of the plane.",
        D(r"(-1,0)\neq(0,1)"),
    ),
    ("math-7-e7", "E"): (
        r"Take the inner square $g(x)=x^{2}$ of degree $2$ and the outer line of degree $1$: the composite has degree $2$, with no $x^{3}$ term to invent.",
    ),
    ("math-7-e8", "A"): (
        r"A leading coefficient stretches the graph vertically and does not move the zeros, so the axis is still the midpoint of $1$ and $5$.",
    ),
    ("math-7-e8", "C"): (
        r"Symmetry about $x=3$ is $g(3+t)=g(3-t)$. The pair $t=3$ recovers $x=0$ and $x=6$ with a common height $10$.",
        D(r"g(3+3)=g(3-3)=10"),
    ),
    ("math-7-e8", "D"): (
        r"The product of the roots is independent of the leading $2$ once it is cancelled in $c/a$, which is why $P=5$ matches $1\cdot 5$.",
    ),
    ("math-7-e8", "E"): (
        r"The middle coefficient of $a(x-r)(x-s)$ is $-a(r+s)=-2\cdot 6=-12$, not $-2\cdot 5$.",
    ),
    ("math-7-e9", "B"): (
        r"An even upward parabola $x^{2}-4$ turns at the origin, so the trough height is the constant term, already $-4$ on the vertical scale.",
        D(r"x=-\frac{0}{2}=0\qquad g(0)=-4"),
    ),
    ("math-7-e9", "C"): (
        r"A quadratic on unit spacing would freeze only at the second layer, with a nonzero constant. Vanishing second differences drop the degree to $1$.",
        D(r"2a=0\qquad a=0"),
    ),
    ("math-7-e9", "D"): (
        r"Any other pair from the table gives the same slope: $(7-1)/(3-0)=2$, so the interpolating line is unique.",
    ),
    ("math-7-e9", "E"): (
        r"The two data sources are independent: the ticks name the abscissa $x=2$, and the table names the height $\ell(2)=5$ at that same input.",
    ),
    ("math-7-e10", "A"): (
        r"The stretch $k$ is fixed by the named vertex: $k(1+1)(1-3)=6$ forces $k=-3/2$, not the unscaled $-1$.",
        D(r"k=-\frac{3}{2}"),
    ),
    ("math-7-e10", "C"): (
        r"Point-slope through $(0,2)$ never lifts the intercept. The claimed $+3$ would be the intercept of a parallel line through $(0,3)$.",
    ),
    ("math-7-e10", "D"): (
        r"A quadratic difference with positive discriminant cannot be a perfect square, so tangency is out of reach for this pair.",
    ),
    ("math-7-e10", "E"): (
        r"The clearance peak is the given point $(1,6)$, while the sensor at that abscissa is the much lower point $(1,1)$.",
        D(r"(1,1)\text{ sits below }(1,6)"),
    ),
    ("math-7-e11", "B"): (
        r"One unit on each side is the distance $|3-2|=|1-2|=1$, which is also half the gap between the two roots.",
    ),
    ("math-7-e11", "E"): (
        r"That midpoint identity is the axis formula $x=-b/(2a)$ in disguise: for $g(x)=x^{2}-4x+3$ one has $4/2=2$.",
        D(r"x=-\frac{-4}{2}=2"),
    ),
    ("math-7-e12", "A"): (
        r"A line of slope $3$ through $(0,-1)$ is $y=3x-1$, which reproduces every listed height and confirms degree $1$.",
        D(r"y=3x-1"),
    ),
    ("math-7-e12", "B"): (
        r"The announced slope $2$ would join $(0,-1)$ to $(4,7)$, missing the last listed height $11$.",
    ),
    ("math-7-e12", "C"): (
        r"A constant first difference is an arithmetic sequence, which extends uniquely in both directions by that same gap $3$.",
    ),
    ("math-7-e12", "D"): (
        r"On unit spacing, $2a$ equals the second-difference constant. A row of zeros forces $a=0$, which is a line.",
    ),
    ("math-7-e13", "A"): (
        r"For a downward toss the vertex is a highest point, so the midpoint of the two ground times is the unique time of greatest height.",
    ),
    ("math-7-e13", "B"): (
        r"The announced $t=2$ would be the midpoint of a shorter flight landing at $t=4$, which is not the flight on the ticks.",
        D(r"h(2)=8\neq 9=h(3)"),
    ),
    ("math-7-e13", "C"): (
        r"Equal distance from the axis forces equal height: $t=1=3-2$ and $t=5=3+2$ are a symmetric pair.",
        D(r"h(3-2)=h(3+2)"),
    ),
    ("math-7-e13", "D"): (
        r"A downward-opening parabola falls on the whole half-line to the right of its axis, so after $t=3$ the height cannot keep rising.",
        D(r"a=-1<0"),
    ),
    ("math-7-e13", "E"): (
        r"The neighbouring tick $t=4$ is one second past the vertex, where a downward parabola has already dropped by $1$ metre.",
    ),
    ("math-7-e14", "A"): (
        r"Completing the square is unique: the shift must be half of $6$, so $(x+3)^{2}$ and not $(x-3)^{2}$.",
        D(r"h=-b/(2a)=-3"),
    ),
    ("math-7-e14", "C"): (
        r"Two negative roots sit to the left of the origin, so their midpoint — the axis — is negative as well.",
        D(r"-1<0\qquad -5<0\qquad -3<0"),
    ),
    ("math-7-e14", "D"): (
        r"The quadratic formula would place $\sqrt{16}=4$ under the radical, not $\sqrt{15}$.",
        D(r"\Delta=b^{2}-4ac=36-20=16"),
    ),
    ("math-7-e14", "E"): (
        r"Shifting up by the vertex depth $4$ lands the trough on the axis and produces the double root $(x+3)^{2}$. One extra unit overshoots.",
    ),
    ("math-7-e15", "A"): (
        r"The two roots $1$ and $3$ sit equally far from $x=2$, as they must: the axis of $(x-2)^{2}$ never moves under a vertical shift.",
        D(r"\frac{1+3}{2}=2"),
    ),
    ("math-7-e15", "B"): (
        r"A double root is tangency with the $x$-axis. The vertex and the unique axis meeting coincide at $(2,0)$.",
        D(r"g_4(2)=0"),
    ),
    ("math-7-e15", "C"): (
        r"An upward parabola whose vertex sits above the axis stays positive everywhere, so $g_5(x)\ge 1>0$.",
        D(r"g_5(x)\ge 1"),
    ),
    ("math-7-e15", "D"): (
        r"Adding a constant moves the graph vertically, which cannot change a vertical axis. Every $s$ shares the same line $x=2$.",
    ),
    ("math-7-e16", "A"): (
        r"Either reading — rise-over-run or intercept form — produces the same unique line through the two given intercepts.",
        D(r"f(x)=-2x+4"),
    ),
    ("math-7-e16", "B"): (
        r"Every line contains the midpoint of any two of its points, so $f(1)=2$ is a check of the rebuilt rule rather than a new fact.",
    ),
    ("math-7-e16", "C"): (
        r"The first difference of a line is its slope, independent of $x$. A negative constant drop is the discrete form of a falling graph.",
        D(r"f(x+1)-f(x)=m=-2"),
    ),
    ("math-7-e16", "D"): (
        r"The announced $1$ would be the average of the two $x$-coordinates rather than the two heights, which is a different (wrong) midpoint.",
        D(r"\frac{0+2}{2}=1\text{ is an abscissa, not a height}"),
    ),
    ("math-7-e16", "E"): (
        r"From the $x$-intercept $f(2)=0$, one further unit step of slope $-2$ lands at height $-2$.",
        D(r"f(2)=0\qquad f(3)=0-2=-2"),
    ),
    ("math-7-e17", "A"): (
        r"Because only even powers survive, the composite is even about the $y$-axis, which is the geometric meaning of a missing linear term.",
        D(r"f(g(-x))=2x^{2}-9=f(g(x))"),
    ),
    ("math-7-e17", "B"): (
        r"The axis formula on $4x^{2}-4x-3$ uses only the first two coefficients and ignores the constant $-3$.",
        D(r"x=-\frac{-4}{2\cdot 4}=\frac{1}{2}"),
    ),
    ("math-7-e17", "C"): (
        r"A cubic would have required nesting a degree-$2$ rule inside another degree-$2$ rule. A line and a parabola cannot produce $x^{3}$.",
    ),
    ("math-7-e17", "D"): (
        r"The other order $g(f(x))=4x^{2}-4x-3$ does have a linear term, which is why the two nestings are not interchangeable.",
    ),
    ("math-7-e17", "E"): (
        r"Composition does not commute: substituting the parabola into the line is a vertical stretch of $x^{2}-4$, while the other order shifts the input first.",
        D(r"f(g(0))\neq g(f(0))"),
    ),
    ("math-7-e18", "A"): (
        r"Evenness is the identity $g(-x)=g(x)$, which for a quadratic holds if and only if the middle coefficient vanishes, as it does here.",
        D(r"b=0"),
    ),
    ("math-7-e18", "B"): (
        r"The only function that is both even and odd is $0$. A difference of squares with a nonzero constant term cannot be odd.",
        D(r"g(0)=-9\neq 0"),
    ),
    ("math-7-e18", "C"): (
        r"Opposite roots $\pm 3$ place the axis at the origin, which is neither to the right nor to the left.",
        D(r"x=\frac{-3+3}{2}=0"),
    ),
    ("math-7-e18", "D"): (
        r"Flipping the sign of the constant term would produce $x^{2}+9$, a different parabola whose trough sits at $(0,9)$ above the axis.",
        D(r"x^{2}+9\neq x^{2}-9"),
    ),
    ("math-7-e18", "E"): (
        r"A square of a single linear factor would be $(x-3)^{2}$ or $(x+3)^{2}$, each with a double root, not two simple opposite roots.",
    ),
    ("math-7-e19", "A"): (
        r"A negative leading coefficient $a=-1$ turns the arms downwards, so the turning point is a highest point rather than a trough.",
        D(r"a=-1<0"),
    ),
    ("math-7-e19", "B"): (
        r"The two equations $g(x)=0$ and $g(x)=2$ cannot share a root unless the level is the axis itself, which it is not.",
    ),
    ("math-7-e19", "C"): (
        r"A horizontal line above the peak of a downward parabola would miss the solid curve entirely. Here the level cuts twice, so it sits below the peak.",
    ),
    ("math-7-e19", "D"): (
        r"A rising line of slope $3$ would have produced the heights $5,8,11,14$. The listed row falls, so the slope cannot be positive.",
        D(r"5,4,3,2\text{ is strictly decreasing}"),
    ),
    ("math-7-e19", "E"): (
        r"Checking any listed step recovers the drop: $\ell(1)-\ell(0)=4-5=-1$, which is the slope, not $+3$.",
        D(r"\ell(1)-\ell(0)=-1"),
    ),
    ("math-7-e20", "A"): (
        r"The axis formula $p=-b/(2a)$ applied to $-p^{2}+8p$ is $8/2=4$, and substituting that price recovers the listed peak revenue $16$.",
        D(r"R(4)=4\cdot 4=16"),
    ),
    ("math-7-e20", "B"): (
        r"Subtracting a line changes the middle coefficient of revenue from $8$ to $6$, which slides the axis one unit left, from $p=4$ to $p=3$.",
    ),
    ("math-7-e20", "C"): (
        r"A downward parabola takes a strictly larger value at its own axis than at any neighbouring input, so $\Pi(3)>\Pi(4)$ is the vertex test.",
    ),
    ("math-7-e20", "D"): (
        r"Profit $\Pi=R-C$ is therefore negative at $p=0$ and positive at $p=5$, which already forces a sign change and a real break-even in between.",
        D(r"\Pi(0)=-4<0\qquad \Pi(5)=1>0"),
    ),
    ("math-7-e20", "E"): (
        r"A quadratic opening downwards with a positive value at its vertex and a negative constant term must cut the axis twice.",
        D(r"\Pi(3)=5>0\qquad \Pi(0)=-4<0"),
    ),
    ("math-7-e21", "A"): (
        r"An even upward parabola is forced by a trough on the vertical axis together with opposite axis crossings. The ticks leave no other monic choice.",
        D(r"g(\pm 1)=0\qquad g(0)=-1"),
    ),
    ("math-7-e21", "C"): (
        r"The axis crossings solve $x^{2}=1$, while the dashed meetings solve $x^{2}=2$. Those two pairs of abscissas cannot coincide.",
        D(r"x^{2}-1=0\qquad x^{2}-1=1"),
    ),
    ("math-7-e21", "D"): (
        r"The dashed level never enters the formula for $g$, so the trough height stays $-1$ and the gap is the difference of the two constants.",
    ),
    ("math-7-e21", "E"): (
        r"Opposite signs of $a$ and $c$ already force $\Delta>0$, which is the coefficient test for two real axis crossings.",
        D(r"a=1>0\qquad c=-1<0"),
    ),
    ("math-7-e22", "A"): (
        r"Constant first differences would have been the hallmark of a line. A first-difference row that itself forms an arithmetic sequence is a parabola.",
    ),
    ("math-7-e22", "B"): (
        r"The announced second-difference $4$ would have meant $a=2$ and a much steeper table, ending near $h(5)=36$ rather than the listed $11$.",
        D(r"2a=4\implies a=2\neq 1"),
    ),
    ("math-7-e22", "C"): (
        r"The first gaps $-2,0,2,4,6$ themselves form an arithmetic sequence of common difference $2$, which is the opposite of a constant-gap line.",
    ),
    ("math-7-e22", "D"): (
        r"Constant second differences of $2$ force the next first gap to be $6+2=8$, not $9$. The announced $20$ is the trap $11+9$.",
        D(r"11+8=19"),
    ),
    ("math-7-e22", "E"): (
        r"Checking a later cell confirms the rebuilt rule: $h(5)=25-15+1=11$, matching the last listed height.",
        D(r"h(5)=11"),
    ),
    ("math-7-e23", "A"): (
        r"An upward monic parabola with vertex at $q=2$ is $(q-2)^{2}+k$. Matching $C(2)=1$ forces $k=1$, so the listed trough is the vertex.",
        D(r"C(2)=1"),
    ),
    ("math-7-e23", "B"): (
        r"The two cells $C(0)$ and $C(4)$ are a symmetric pair about $q=2$, exactly as $C(1)=C(3)=2$ is another such pair.",
    ),
    ("math-7-e23", "C"): (
        r"The first-difference row $-3,-1,1,3,5$ changes sign between $q=1$ and $q=2$, which is the discrete form of a trough at $q=2$.",
        D(r"C(3)-C(2)=1>0"),
    ),
    ("math-7-e23", "D"): (
        r"Expanding $(q-2)^{2}+1$ recovers the same three coefficients $1$, $-4$, $5$, so the two writings of $C$ agree.",
        D(r"(q-2)^{2}+1=q^{2}-4q+5"),
    ),
    ("math-7-e23", "E"): (
        r"On an upward parabola past the axis, first differences grow by $2a=2$ at each step, so $3$ is followed by $5$.",
    ),
    ("math-7-e24", "A"): (
        r"Vieta already reads the sum of the meetings as $3$ from the middle coefficient of $x^{2}-3x$, matching $0+3$.",
        D(r"0+3=3"),
    ),
    ("math-7-e24", "B"): (
        r"Two distinct linear factors are two distinct meetings. A repeated root would have collapsed them into a square $x^{2}$ or $(x-3)^{2}$, which this difference is not.",
    ),
    ("math-7-e24", "C"): (
        r"Completing the square on $g$ recovers the same vertex: $g(x)=(x+\frac{1}{2})^{2}-\frac{5}{4}$.",
        D(r"g(x)=\bigl(x+\tfrac{1}{2}\bigr)^{2}-\tfrac{5}{4}"),
    ),
    ("math-7-e24", "D"): (
        r"The factor $x$ of $g-f$ is the algebraic form of a meeting at the origin. Direct substitution $g(0)=f(0)=-1$ is the same test.",
        D(r"(g-f)(0)=0"),
    ),
    ("math-7-e24", "E"): (
        r"The leading term of $g-f$ comes from $g$ alone. A line can change only the coefficients of $x$ and of the constant term.",
        D(r"a_{g-f}=a_g=1"),
    ),
    ("math-7-e25", "A"): (
        r"A shared $y$-intercept is a meeting on the vertical axis. Because $f$ is the horizontal line $y=3$, that intercept is the point $(0,3)$.",
        D(r"(0,3)\text{ lies on both graphs}"),
    ),
    ("math-7-e25", "B"): (
        r"The second root of $x(ax-4)=0$ is $x=4/a$ for every $a\neq 0$. Substituting $a=1$ is a direct specialisation of that formula, and $g_1(4)=3$ equals the level $f(4)$.",
        D(r"g_1(4)=f(4)=3"),
    ),
    ("math-7-e25", "C"): (
        r"A midpoint between $0$ and $4$ would be $x=2$, which is in fact the correct second meeting when $a=2$. The announced $x=3$ is a different trap.",
        D(r"g_2(2)=3\qquad g_2(3)=9\neq 3"),
    ),
    ("math-7-e25", "D"): (
        r"The axis formula always divides by $2a$. Holding $b=-4$ fixed while changing $a$ therefore slides the axis, rather than freezing it.",
        D(r"a=1\Rightarrow x=2\qquad a=2\Rightarrow x=1"),
    ),
    ("math-7-e25", "E"): (
        r"The opening test looks at $\mathrm{sign}(a)$ and at nothing else. Replacing $a=1$ by $a=-1$ flips that sign and therefore flips the arms.",
    ),
    ("math-7-e26", "A"): (
        r"The axis formula on the expansion $x^{2}-2x-3$ recovers the same midpoint: $-b/(2a)=2/2=1$, and $g(1)=-4$ is the vertex height.",
        D(r"x=-\frac{-2}{2}=1"),
    ),
    ("math-7-e26", "B"): (
        r"Vieta's product is $c/a$, which equals $-3$ for this monic quadratic. The announced $+3$ forgets that the roots have opposite signs.",
    ),
    ("math-7-e26", "C"): (
        r"The axis sits at the origin only when the sum of the roots vanishes. Here $-1+3=2\neq 0$, so the axis is $x=1$.",
        D(r"S=2\neq 0"),
    ),
    ("math-7-e26", "D"): (
        r"The $y$-intercept $g(0)$ and the vertex height $g(1)$ are different substitutions. Confusing them is the usual constant-term trap.",
        D(r"g(0)\neq g(1)"),
    ),
    ("math-7-e26", "E"): (
        r"The product of the roots is $-3$, and for a monic quadratic that product *is* the constant term, including its minus sign.",
        D(r"(-1)\cdot 3=-3=c"),
    ),
    ("math-7-e27", "A"): (
        r"The inner map is a translation of the input by $+2$, which slides the graph of $g$ two units to the left and produces the completed square $(x+2)^{2}-1$.",
    ),
    ("math-7-e27", "B"): (
        r"The constant term of any polynomial is its value at $0$. For a nesting, that value is $g$ at $f^{-1}(0)$, which here is $g(2)=3$.",
        D(r"x^{2}+4x+3\big|_{x=0}=3"),
    ),
    ("math-7-e27", "C"): (
        r"Vieta's sum for $x^{2}+4x+3$ is $-4$, matching $(-1)+(-3)$. The two writings — completed square and expansion — name the same pair of zeros.",
        D(r"S=-b/a=-4"),
    ),
    ("math-7-e27", "D"): (
        r"Walking through the maps is a two-step evaluation: first undo the shift, then apply $g$. Both steps are substitutions, not a new formula.",
        D(r"g(f^{-1}(0))=g(2)=3"),
    ),
    ("math-7-e27", "E"): (
        r"A horizontal shift of $g(x)=x^{2}-1$ carries the vertex $(0,-1)$ to $(-2,-1)$ and leaves the opening $a=1>0$ untouched.",
        D(r"a=1>0"),
    ),
    ("math-7-e28", "C"): (
        r"The axis formula on the expansion $x^{2}-4x+4$ is $-b/(2a)=4/2=2$, the repeated root, not the neighbouring integer $3$.",
        D(r"g(3)=1\neq 0"),
    ),
    ("math-7-e28", "D"): (
        r"The constant term of $(x-h)^{2}$ is $h^{2}$. Here $h=2$, so that constant is $4$. Adding an extra $1$ produces a different polynomial.",
        D(r"g(0)=4\neq 5"),
    ),
    ("math-7-e28", "E"): (
        r"A discriminant of $1$ would split the double root into two zeros a distance $1$ apart. The square $(x-2)^{2}$ does not split.",
        D(r"(x-2)^{2}\text{ has a repeated root}"),
    ),
    ("math-7-e29", "A"): (
        r"A palindrome of heights about $x=2$ is the discrete form of evenness about that axis, which a vertex form $(x-2)^{2}+k$ automatically has.",
        D(r"q(2-t)=q(2+t)"),
    ),
    ("math-7-e29", "D"): (
        r"Constant second differences of $2$ force the next first gap to be $3+2=5$, not $3$. The announced $8$ is the trap of freezing the last first gap.",
        D(r"5+5=10"),
    ),
    ("math-7-e29", "E"): (
        r"A square plus a positive constant never vanishes, which is the completed-square form of a negative discriminant.",
        D(r"(x-2)^{2}+1\ge 1>0"),
    ),
    ("math-7-e30", "A"): (
        r"The axis of $4-(x-2)^{2}$ is the unmoved line $x=2$, which is also the midpoint of the two road meetings $0$ and $4$.",
        D(r"\frac{0+4}{2}=2"),
    ),
    ("math-7-e30", "C"): (
        r"A quadratic difference with positive discriminant cannot fail to have two real zeros, so two meetings are forced.",
    ),
    ("math-7-e30", "D"): (
        r"The crown is the unique highest point of a downward arch, so any chord through two road-level points sits strictly below that crown.",
        D(r"g(2)-f(2)=3>0"),
    ),
    ("math-7-e30", "E"): (
        r"Overshooting the crown would require the chord to sit above every point of the arch near $x=2$. The comparison $1<4$ already forbids that.",
    ),
}
