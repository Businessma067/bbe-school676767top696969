"""Ch7 mixed exam letters math-7-e16 … math-7-e30 in MATH 7.79 voice."""
from __future__ import annotations

from _ch7_mixed_779_lib import D, expl


def pack() -> dict[str, list[str]]:
    return {
        "math-7-e16": e16(),
        "math-7-e17": e17(),
        "math-7-e18": e18(),
        "math-7-e19": e19(),
        "math-7-e20": e20(),
        "math-7-e21": e21(),
        "math-7-e22": e22(),
        "math-7-e23": e23(),
        "math-7-e24": e24(),
        "math-7-e25": e25(),
        "math-7-e26": e26(),
        "math-7-e27": e27(),
        "math-7-e28": e28(),
        "math-7-e29": e29(),
        "math-7-e30": e30(),
    }


def e16() -> list[str]:
    return [
        expl(
            "A", True,
            r"The slope is the rise over the run between the given intercepts $(0,4)$ and $(2,0)$.",
            D(r"m=\frac{0-4}{2-0}=-2"),
            r"The same intercepts write the intercept form, which rearranges to the slope-intercept rule.",
            D(r"\frac{x}{2}+\frac{y}{4}=1\iff y=-2x+4"),
            r"Slope $-2$ and the rebuilt rule $f(x)=-2x+4$ both match, so the statement is True.",
        ),
        expl(
            "B", True,
            r"The midpoint of $(0,4)$ and $(2,0)$ averages the two coordinates separately.",
            D(r"\left(\frac{0+2}{2},\frac{4+0}{2}\right)=(1,2)"),
            r"Substituting into the rebuilt line $f(x)=-2x+4$ returns that same height, so the midpoint lies on the line (as every midpoint of two points of a line must).",
            D(r"f(1)=-2+4=2"),
            r"The midpoint is $(1,2)$, and the rebuilt rule confirms $f(1)=2$, so the statement is True.",
        ),
        expl(
            "C", True,
            r"A linear rule changes by its slope at every step of size $1$. Rebuild $f(x)=-2x+4$ from the intercepts and form the first difference.",
            D(r"f(x+1)-f(x)=(-2(x+1)+4)-(-2x+4)=-2"),
            r"The constant drop $-2$ matches the negative slope, so the line falls at every unit step.",
            D(r"m=-2<0"),
            r"The difference $f(x+1)-f(x)$ equals $-2$ for every $x$, so the statement is True.",
        ),
        expl(
            "D", False,
            r"The midpoint of the intercepts is $(1,2)$, so the height on the line at $x=1$ is $2$, not $1$. Rebuild and substitute.",
            D(r"f(x)=-2x+4\qquad f(1)=2"),
            D(r"2\neq 1"),
            r"The announced $1$ is a near-miss for the midpoint height, as if one had averaged $0$ and $2$ instead of $4$ and $0$.",
            r"The height at $x=1$ is $2$, not $1$, so the statement is False.",
        ),
        expl(
            "E", True,
            r"Factor $4$ from the intercept form $f(x)=-2x+4$, then evaluate three units past the $x$-intercept $x=2$.",
            D(r"f(x)=4\bigl(1-\frac{x}{2}\bigr)"),
            D(r"f(3)=4\bigl(1-\frac{3}{2}\bigr)=-2"),
            r"Three units past the $x$-intercept the height is $-2$. The same value is $-2\cdot 3+4=-2$ from slope-intercept form.",
            r"Writing $f(x)=4(1-x/2)$ gives $f(3)=-2$, so the statement is True.",
        ),
    ]


def e17() -> list[str]:
    return [
        expl(
            "A", True,
            r"In this order the parabola is computed first and the line is applied afterwards, which merely rescales and shifts the values.",
            D(r"f(g(x))=2(x^{2}-4)-1=2x^{2}-9"),
            r"No $x$ term remains, so the axis is $x=0$ and the vertex height is the constant term $-9$.",
            D(r"f(g(0))=-9\qquad\text{vertex }(0,-9)"),
            r"The nesting is $2x^{2}-9$ with vertex $(0,-9)$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"Nesting the line inside the parabola substitutes a first-degree expression for $x$. Expand the square and collect the terms.",
            D(r"g(f(x))=(2x-1)^{2}-4=4x^{2}-4x-3"),
            r"The axis is $x=-b/(2a)=4/(8)=1/2$, and the vertex height is the value of the composite there.",
            D(r"g\bigl(f(\tfrac{1}{2})\bigr)=0-4=-4"),
            r"Axis $x=\frac{1}{2}$ and vertex height $-4$ both match, so the statement is True.",
        ),
        expl(
            "C", True,
            r"Nesting a degree-$1$ rule with a degree-$2$ rule multiplies those degrees instead of adding them, so both composites have highest power $x^{2}$.",
            D(r"1\cdot 2=2"),
            D(r"f(g(x))=2x^{2}-9\qquad g(f(x))=4x^{2}-4x-3"),
            r"Each leading coefficient is non-zero, so neither composite drops degree. Both nested rules have the same highest power $x^{2}$, so the statement is True.",
        ),
        expl(
            "D", False,
            r"The expansion $f(g(x))=2x^{2}-9$ has no $x$ term, and it is even about the vertical axis.",
            D(r"f(g(x))=2x^{2}-9"),
            D(r"f(g(-x))=2x^{2}-9=f(g(x))"),
            r"There is no linear term, and the graph is symmetric about $x=0$. A linear term would have been produced only by nesting in the other order.",
            r"There is no linear term, and the graph is symmetric about the vertical axis, so the statement is False.",
        ),
        expl(
            "E", False,
            r"Evaluate each nesting at the origin. The two orders of nesting are different maps, and they already disagree at $x=0$.",
            D(r"f(g(0))=f(-4)=-9"),
            D(r"g(f(0))=g(-1)=-3"),
            r"The two nested values at $x=0$ disagree. Composition does not commute for this pair.",
            D(r"-9\neq -3"),
            r"The two nestings do not agree at the origin, so the statement is False.",
        ),
    ]


def e18() -> list[str]:
    return [
        expl(
            "A", True,
            r"The bracket zeros are opposite numbers $\pm 3$, so the axis is their midpoint $x=0$. The vertex height is $g(0)$.",
            D(r"g(0)=(3)(-3)=-9\qquad\text{vertex }(0,-9)"),
            r"Expanding displays only even powers, which is evenness: $g(-x)=g(x)$ for every $x$.",
            D(r"g(x)=x^{2}-9=g(-x)"),
            r"Axis $x=0$, vertex $(0,-9)$, and $g$ is even, so the statement is True.",
        ),
        expl(
            "B", False,
            r"An odd function would satisfy $g(-x)=-g(x)$ and in particular $g(0)=0$. Here $g(0)=-9\neq 0$ already kills oddness. A concrete test point confirms the sides differ.",
            D(r"g(x)=x^{2}-9"),
            D(r"g(-2)=-5\qquad -g(2)=5"),
            r"$g$ is even, not odd. A product of opposite linear factors is a difference of squares, which is even.",
            D(r"-5\neq 5"),
            r"$g$ is even, not odd, so the statement is False.",
        ),
        expl(
            "C", False,
            r"The brackets name the roots directly as $x=-3$ and $x=3$. One of those is negative, so they are not both positive.",
            D(r"g(x)=(x+3)(x-3)"),
            D(r"x=-3\qquad x=3"),
            r"The axis is their midpoint $x=0$, which is the origin itself, not a line to the right of the origin.",
            r"The roots are not both positive, and the axis is not to the right of the origin, so the statement is False.",
        ),
        expl(
            "D", False,
            r"The vertex height is $g(0)=-9$, not $+9$. The sign trap is the constant term of $x^{2}-9$: flipping that sign would turn a trough into a peak of the wrong function.",
            D(r"g(0)=(3)(-3)=-9"),
            D(r"(0,-9)\neq(0,9)"),
            r"An upward parabola with a negative constant term turns below the axis, not above it.",
            r"The vertex is $(0,-9)$, not $(0,9)$, so the statement is False.",
        ),
        expl(
            "E", False,
            r"An upward parabola with vertex height $-9$ takes negative values between its roots. It is also not a square of a single linear factor: $(x-3)^{2}$ would vanish only at $x=3$.",
            D(r"g(x)=x^{2}-9\qquad g(0)=-9<0"),
            r"Between $x=-3$ and $x=3$ the graph sits below the axis, so $g$ is not everywhere non-negative.",
            D(r"g(x)\ge 0\text{ fails on }(-3,3)"),
            r"$g$ is not everywhere non-negative, so the statement is False.",
        ),
    ]


def e19() -> list[str]:
    return [
        expl(
            "A", True,
            r"The solid curve peaks on the vertical axis at height $4$, with falling arms — a highest point, not a trough. Rebuild from the ticks: $g(x)=4-x^{2}$. The dashed level sits at height $2$.",
            D(r"g(x)=4-x^{2}\qquad g(0)=4"),
            D(r"4>2"),
            r"The peak is a maximum, and it sits strictly above the dashed line, so the statement is True.",
        ),
        expl(
            "B", True,
            r"Axis meetings of the solid curve solve $g(x)=0$. Rebuild $g(x)=4-x^{2}$ from the ticks.",
            D(r"4-x^{2}=0\qquad x=\pm 2"),
            r"Meetings with the dashed level $y=2$ are a different equation, whose solutions sit strictly between those axis crossings.",
            D(r"4-x^{2}=2\qquad x=\pm\sqrt{2}"),
            r"Axis crossings $\pm 2$ are distinct from the two meetings with $y=2$, so the statement is True.",
        ),
        expl(
            "C", False,
            r"The peak height $4$ already sits above the dashed height $2$. Rebuild both traces from the ticks.",
            D(r"g(x)=4-x^{2}\qquad g(0)=4"),
            D(r"y=2\qquad 4>2"),
            r"The dashed line lies below the peak, not above it. A level above the peak would have missed the parabola entirely.",
            r"The dashed line lies below the peak, not above it, so the statement is False.",
        ),
        expl(
            "D", False,
            r"The tabled heights $5,4,3,2$ drop by $1$ at each step, not by $3$. Neighbouring gaps of a falling line of slope $3$ would have been $+3$.",
            D(r"4-5=-1\qquad 3-4=-1\qquad 2-3=-1"),
            D(r"\Delta_{1}=(-1,-1,-1)\neq(3,3,3)"),
            r"The constant first difference is $-1$, not $3$, so the statement is False.",
        ),
        expl(
            "E", False,
            r"A constant first difference is the slope of the interpolating line. The tabled heights fall by $1$ at each unit step.",
            D(r"m=-1\neq 3"),
            D(r"\ell(x)=-x+5"),
            r"Each extra unit of $x$ *lowers* the tabled height by $1$, rather than raising it by $3$. Checking $\ell(0)=5$ and $\ell(1)=4$ recovers the listed pair.",
            r"The tabled slope is $-1$, not $3$, so the statement is False.",
        ),
    ]


def e20() -> list[str]:
    return [
        expl(
            "A", True,
            r"Expand the revenue rule and read the leading coefficient and the axis. A negative leading coefficient turns the arms downwards, so the vertex is a highest point.",
            D(r"R(p)=p(8-p)=-p^{2}+8p"),
            D(r"a=-1<0\qquad p=-\frac{8}{2\cdot(-1)}=4\qquad R(4)=16"),
            r"A downward parabola with maximum $16$ at $p=4$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"Profit is revenue minus the cost line. Subtract and read the axis of the resulting parabola.",
            D(r"\Pi(p)=p(8-p)-(2p+4)=-p^{2}+6p-4"),
            D(r"p=-\frac{6}{2\cdot(-1)}=3"),
            r"The profit axis is $p=3$, one unit left of the revenue axis $p=4$. The two maxima therefore sit at different prices.",
            r"The profit maximum is not at the revenue maximum, so the statement is True.",
        ),
        expl(
            "C", True,
            r"Evaluate profit at the two candidate peaks: the profit axis $p=3$ and the revenue axis $p=4$.",
            D(r"\Pi(p)=-p^{2}+6p-4"),
            D(r"\Pi(3)=5\qquad \Pi(4)=4"),
            r"Profit at $p=3$ exceeds profit at the revenue peak $p=4$, confirming a one-unit shift of the peak.",
            D(r"5>4"),
            r"The profit values match, and the peak has shifted, so the statement is True.",
        ),
        expl(
            "D", True,
            r"Compare revenue and cost at the two named prices. Revenue is $R(p)=p(8-p)$ and cost is $C(p)=2p+4$.",
            D(r"R(0)=0<4=C(0)"),
            D(r"R(5)=15>14=C(5)"),
            r"Revenue starts below cost at the free-ticket price and later exceeds it at $p=5$. Profit therefore changes sign between those two prices.",
            r"At $p=0$ revenue is less than cost, while at $p=5$ revenue exceeds cost, so the statement is True.",
        ),
        expl(
            "E", True,
            r"Break-even solves $\Pi(p)=0$, which is a quadratic equation. A positive discriminant gives two distinct real roots.",
            D(r"-p^{2}+6p-4=0"),
            D(r"\Delta=36-16=20>0"),
            r"Two real break-even prices therefore exist. (They sit on opposite sides of the profit axis $p=3$, as they must.)",
            r"The discriminant is $20>0$, so there are two real break-even prices, so the statement is True.",
        ),
    ]


def e21() -> list[str]:
    return [
        expl(
            "A", True,
            r"The two brown axis meetings sit at $x=\pm 1$, and the marked trough is on the vertical axis at height $-1$. Those ticks force an even upward parabola.",
            D(r"g(x)=x^{2}-1"),
            D(r"g(0)=-1\qquad g(\pm 1)=0"),
            r"One crossing on each side of the origin, and a trough of height $-1$, so the statement is True.",
        ),
        expl(
            "B", False,
            r"The dashed level runs through height $1$, strictly above the origin. It is a horizontal line $y=1$, not the horizontal axis $y=0$.",
            D(r"y=1\qquad 1\neq 0"),
            r"A dashed line coinciding with the axis would have cut the solid curve at the same two points $x=\pm 1$. Here the dashed meetings sit higher, at $x=\pm\sqrt{2}$.",
            D(r"x^{2}-1=1\implies x=\pm\sqrt{2}"),
            r"The dashed line is $y=1$, not the horizontal axis, so the statement is False.",
        ),
        expl(
            "C", True,
            r"Meetings with the dashed level $y=1$ solve a different equation from $g(x)=0$. Rebuild $g(x)=x^{2}-1$ from the ticks.",
            D(r"x^{2}-1=1\qquad x=\pm\sqrt{2}"),
            D(r"\pm\sqrt{2}\neq\pm 1"),
            r"Two meetings with the dashed line, distinct from the axis crossings $x=\pm 1$, so the statement is True.",
        ),
        expl(
            "D", True,
            r"At the trough abscissa $x=0$ compare the two heights. The solid curve sits at $-1$ and the dashed level sits at $1$.",
            D(r"g(x)=x^{2}-1\qquad g(0)=-1"),
            D(r"1-(-1)=2"),
            r"The trough lies below the dashed line with vertical gap $2$. A gap of zero would have been tangency at the vertex.",
            r"The turning point lies below the dashed line, and the vertical gap there equals $2$, so the statement is True.",
        ),
        expl(
            "E", True,
            r"Falling-then-rising arms mean a positive leading coefficient. A trough below the axis for an upward parabola produces two real roots.",
            D(r"g(x)=x^{2}-1\qquad a=1>0"),
            D(r"\Delta=0-4(-1)=4>0"),
            r"The curve opens upwards and crosses the axis twice, at $x=\pm 1$. A trough above the axis would have produced no real crossing.",
            r"The solid curve opens upwards, and there are two real axis crossings, so the statement is True.",
        ),
    ]


def e22() -> list[str]:
    return [
        expl(
            "A", False,
            r"A single line would require constant first differences. Form neighbouring gaps of the listed heights $1,-1,-1,1,5,11$.",
            D(r"\Delta_{1}:\ -2,\ 0,\ 2,\ 4,\ 6"),
            r"Those first differences change at every step, so no single line fits. The second gaps stand still at $2$, which is the hallmark of a genuine quadratic.",
            D(r"\Delta_{2}:\ 2,\ 2,\ 2,\ 2"),
            r"The first differences are not constant, so the statement is False.",
        ),
        expl(
            "B", False,
            r"The second gaps of that first-difference row are constantly $2$, not $4$. For unit spacing the second-difference constant equals $2a$.",
            D(r"h:\ 1,\ -1,\ -1,\ 1,\ 5,\ 11"),
            D(r"\Delta_{2}:\ 2,\ 2,\ 2,\ 2\qquad 2a=2\qquad a=1\neq 2"),
            r"The announced $4$ would have forced $a=2$. The second-difference constant is $2$, so $a=1$, not $2$, so the statement is False.",
        ),
        expl(
            "C", False,
            r"A linear model would require constant first differences, equivalently a vanishing leading coefficient. Here the first gaps move while the second ones stand still.",
            D(r"\Delta_{1}:\ -2,\ 0,\ 2,\ 4,\ 6"),
            D(r"2a=2\qquad a=1\neq 0"),
            r"No single line can fit every listed point. A line matching two of the cells already misses the others.",
            r"A linear model cannot fit every listed point, so the statement is False.",
        ),
        expl(
            "D", False,
            r"The last first difference is $6$. One further second-difference of $2$ produces the next first gap $8$, then the next height.",
            D(r"h(5)=11\qquad h(6)=11+8=19"),
            D(r"19\neq 20"),
            r"The announced $20$ would have required the next first gap to be $9$ instead of $8$. The next term is $19$, not $20$, so the statement is False.",
        ),
        expl(
            "E", True,
            r"Unit spacing converts the second-difference constant into the leading coefficient by dividing by $2$.",
            D(r"\Delta_{2}:\ 2,\ 2,\ 2,\ 2\qquad 2a=2\qquad a=1"),
            r"Then $h(0)=c=1$ and $h(1)=1+b+1=-1$ force $b=-3$.",
            D(r"h(x)=x^{2}-3x+1"),
            r"Second differences $2$ rebuild the quadratic that matches the first two cells, so the statement is True.",
        ),
    ]


def e23() -> list[str]:
    return [
        expl(
            "A", True,
            r"The listed costs $5,2,1,2,5,10$ have unique minimum $1$ at $q=2$. Second differences constantly $2$ rebuild a monic parabola whose axis is that same input.",
            D(r"\Delta_{2}:\ 2,\ 2,\ 2,\ 2\qquad 2a=2\qquad a=1"),
            D(r"C(q)=(q-2)^{2}+1\qquad q=2"),
            r"The listed minimum and the rebuilt vertex sit at the same batch $q=2$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"Inputs $0$ and $4$ are equally far from the axis $q=2$, so an upward parabola takes the same value there. Rebuild from the constant second difference $2$ and the first two cells.",
            D(r"C(q)=q^{2}-4q+5=(q-2)^{2}+1"),
            D(r"C(0)=5=C(4)"),
            r"Equality of those two cells is forced by symmetry about $q=2$, not a coincidence of two table entries.",
            r"Cost at $q=0$ equals cost at $q=4$ by that symmetry, so the statement is True.",
        ),
        expl(
            "C", True,
            r"Stepping from the vertex to the next listed batch raises an upward parabola. The listed costs already display the rise.",
            D(r"C(2)=1\qquad C(3)=2"),
            D(r"2>1"),
            r"Cost rises from $q=2$ to $q=3$, away from the trough. A fall on that step would have required a downward-opening graph.",
            r"Cost rises from $q=2$ to $q=3$, matching a step away from the vertex, so the statement is True.",
        ),
        expl(
            "D", True,
            r"Unit spacing converts the second-difference constant into $a$. Matching the first two cells then pins $b$ and $c$.",
            D(r"2a=2\qquad a=1"),
            D(r"C(0)=5\qquad C(1)=2\implies C(q)=q^{2}-4q+5"),
            r"Second differences and the first two cells rebuild $q^{2}-4q+5$, which is also $(q-2)^{2}+1$.",
            r"The rebuilt rule is $C(q)=q^{2}-4q+5$, so the statement is True.",
        ),
        expl(
            "E", True,
            r"The first-difference row of $5,2,1,2,5,10$ is $-3,-1,1,3,5$. The last of those gaps is the step from $q=4$ to $q=5$.",
            D(r"C(5)-C(4)=10-5=5"),
            r"That step increases cost by $5$ euros, which is the next first difference after $3$. Extending the second-difference $2$ one more time would have produced the same $5$.",
            D(r"3+2=5"),
            r"Raising the batch from $4$ to $5$ increases cost by $5$ euros, so the statement is True.",
        ),
    ]


def e24() -> list[str]:
    return [
        expl(
            "A", True,
            r"Meetings of the two graphs are the real zeros of $g-f$. Subtract the line from the parabola and factor.",
            D(r"g(x)-f(x)=(x^{2}+x-1)-(4x-1)=x^{2}-3x"),
            D(r"x(x-3)=0\qquad\Delta=9>0"),
            r"Two meetings, at $x=0$ and $x=3$, matching discriminant $9$. The factorisation $x(x-3)$ is exactly the claimed one.",
            r"The discriminant is $9>0$, and the meetings factor as $x(x-3)=0$, so the statement is True.",
        ),
        expl(
            "B", False,
            r"Tangency would require a repeated root, equivalently discriminant zero. Here $\Delta=9>0$, so two crossings, and $x(x-3)$ is not a square.",
            D(r"g(x)-f(x)=x^{2}-3x=x(x-3)"),
            D(r"\Delta=9\neq 0"),
            r"A perfect square would have been of the form $a(x-r)^{2}$. Two distinct linear factors are two distinct meetings, not a touch.",
            r"The graphs cut twice; they are not tangent, so the statement is False.",
        ),
        expl(
            "C", True,
            r"The axis of $g$ uses only the coefficients of $g$, not those of the neighbouring line. Then the vertex height is $g$ on that axis.",
            D(r"g(x)=x^{2}+x-1\qquad x=-\frac{1}{2}"),
            D(r"g\bigl(-\frac{1}{2}\bigr)=\frac{1}{4}-\frac{1}{2}-1=-\frac{5}{4}"),
            r"Axis $-\frac{1}{2}$ and vertex height $-\frac{5}{4}$ both match, so the statement is True.",
        ),
        expl(
            "D", True,
            r"Evaluate both rules at the origin. Agreement there is a meeting at $x=0$, which is also the factor $x$ of $g-f$.",
            D(r"g(0)=-1\qquad f(0)=-1"),
            D(r"g(x)-f(x)=x(x-3)"),
            r"The graphs meet at $x=0$, matching $g(0)=f(0)$. The origin-abscissa is one of the two meetings, so the statement is True.",
        ),
        expl(
            "E", False,
            r"Subtracting a line cannot change the $x^{2}$ coefficient of $g$, because a line has no $x^{2}$ term to cancel or double it. The difference $x^{2}-3x$ is monic.",
            D(r"g(x)-f(x)=x^{2}-3x"),
            D(r"a=1\neq 2"),
            r"The leading coefficient is $1$, the same as that of $g$. Doubling would have required subtracting a parabola, not a line.",
            r"The leading coefficient of $g-f$ is $1$, not $2$, so the statement is False.",
        ),
    ]


def e25() -> list[str]:
    return [
        expl(
            "A", True,
            r"The constant term of $g_a$ is $3$, matching the level $y=3$, so $x=0$ is always a meeting. Factor the difference.",
            D(r"g_a(x)-3=ax^{2}-4x=x(ax-4)"),
            D(r"x=0"),
            r"The factor $x$ is present for every $a\neq 0$. Directly, $g_a(0)=3=f(0)$ independently of $a$.",
            r"For every $a\neq 0$ the graphs meet at $x=0$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"The second factor of $g_a-3$ vanishes at $x=4/a$. For $a=1$ that is $x=4$.",
            D(r"x(ax-4)=0\qquad x=\frac{4}{a}"),
            D(r"a=1\qquad x=4"),
            r"Checking heights: $g_1(4)=16-16+3=3=f(4)$. When $a=1$ the second meeting is at $x=4$, matching $x=4/a$, so the statement is True.",
        ),
        expl(
            "C", False,
            r"The same formula with $a=2$ gives $x=2$, not $x=3$. The announced $3$ is a midpoint trap between $0$ and $6$, not the second meeting.",
            D(r"x=\frac{4}{a}=\frac{4}{2}=2"),
            D(r"2\neq 3"),
            r"Checking: $g_2(2)=8-8+3=3=f(2)$, while $g_2(3)=18-12+3=9\neq 3$. The second meeting is at $x=2$, so the statement is False.",
        ),
        expl(
            "D", False,
            r"The axis of $g_a$ is $-b/(2a)=2/a$, which slides as $a$ changes. The middle coefficient $-4$ is fixed, but it is divided by $2a$.",
            D(r"x=\frac{2}{a}"),
            r"For $a=1$ the axis is $x=2$; for $a=2$ it is $x=1$. Those are different vertical lines.",
            D(r"\frac{2}{1}=2\neq 1=\frac{2}{2}"),
            r"The axis depends on $a$, so the statement is False.",
        ),
        expl(
            "E", False,
            r"The opening of a parabola is the sign of its leading coefficient, which here is $a$ itself. For $a=-1$ the arms open downwards.",
            D(r"g_{-1}(x)=-x^{2}-4x+3\qquad a=-1<0"),
            r"Changing the leading sign *does* flip the arms: that is the whole content of the opening test. A negative $a$ turns the graph into a highest-point parabola.",
            D(r"a<0\implies\text{opens downwards}"),
            r"$g_{-1}$ opens downwards, not upwards, so the statement is False.",
        ),
    ]


def e26() -> list[str]:
    return [
        expl(
            "A", True,
            r"A monic parabola with those roots is the product of the two linear factors. Expand, then read the axis as the midpoint of the roots.",
            D(r"g(x)=(x+1)(x-3)=x^{2}-2x-3"),
            D(r"x=\frac{-1+3}{2}=1\qquad g(1)=1-2-3=-4"),
            r"Expanded rule, axis $x=1$, and vertex height $-4$ all match, so the statement is True.",
        ),
        expl(
            "B", False,
            r"The constant term is the product of the roots with the signs coming from $(x+1)(x-3)$, hence $-3$, not $+3$. Expanding makes the minus visible.",
            D(r"(x+1)(x-3)=x^{2}-2x-3"),
            D(r"P=\frac{c}{a}=-3\neq +3"),
            r"The expansion is $x^{2}-2x-3$; the product of the roots is $-3$, not $+3$. The trap $+3$ forgets the opposite signs of $-1$ and $3$.",
            r"The expansion is $x^{2}-2x-3$, so the statement is False.",
        ),
        expl(
            "C", False,
            r"Opposite signs do not place the axis at the origin unless the roots are opposites of equal size. Here $-1$ and $3$ are not opposites.",
            D(r"x=\frac{-1+3}{2}=1"),
            D(r"1\neq 0"),
            r"The axis is $x=1$, not $x=0$. Equal-and-opposite roots would have been $\pm 3$ or $\pm 1$, neither of which is this pair.",
            r"The axis is $x=1$, not $x=0$, so the statement is False.",
        ),
        expl(
            "D", False,
            r"The value $-3$ is the constant term $g(0)$, not the vertex height. The vertex sits on the axis $x=1$.",
            D(r"g(0)=-3\qquad g(1)=1-2-3=-4"),
            D(r"-4\neq -3"),
            r"The vertex height is $-4$, a near-miss for the $y$-intercept $-3$. Confusing $g(0)$ with $g$ on the axis is the usual trap.",
            r"The vertex height is $-4$, not $-3$, so the statement is False.",
        ),
        expl(
            "E", False,
            r"The constant term is $g(0)$, obtained by substituting the origin into the factored form. The two factors contribute $1$ and $-3$.",
            D(r"g(0)=(0+1)(0-3)=-3"),
            D(r"c=-3\neq 3"),
            r"The constant term is $-3$, not $3$. Matching the product of the roots without the signs of the factors forgets that one root is negative.",
            r"The constant term is $-3$, not $3$, so the statement is False.",
        ),
    ]


def e27() -> list[str]:
    return [
        expl(
            "A", True,
            r"The given inverse is the shift $f^{-1}(x)=x+2$. Nesting it inside $g$ replaces the input of $g$ by that shift.",
            D(r"f^{-1}(x)=x+2"),
            D(r"g(f^{-1}(x))=(x+2)^{2}-1"),
            r"The nested rule is $g$ evaluated at the inverse shift $x+2$, which is exactly the claimed completed square.",
            r"The nested rule equals $(x+2)^{2}-1$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"Expand the completed square. The constant term of the expansion is the nested value at the origin, which is also $g$ at the inverse of $0$.",
            D(r"(x+2)^{2}-1=x^{2}+4x+3"),
            D(r"g(f^{-1}(0))=g(2)=4-1=3"),
            r"The expansion is $x^{2}+4x+3$, and the constant term matches $g(f^{-1}(0))$, so the statement is True.",
        ),
        expl(
            "C", True,
            r"Set the completed square equal to zero, or factor the expansion $x^{2}+4x+3=(x+1)(x+3)$.",
            D(r"(x+2)^{2}=1\qquad x=-1,\ -3"),
            D(r"(-1)+(-3)=-4"),
            r"The two zeros sum to $-4$, matching the middle coefficient of $x^{2}+4x+3$ (Vieta's sum is minus that coefficient).",
            r"The nested rule vanishes at $x=-1$ and $x=-3$, and Vieta's sum is $-4$, so the statement is True.",
        ),
        expl(
            "D", True,
            r"Evaluate the nested rule at the origin, and also walk through the two maps in order.",
            D(r"(0+2)^{2}-1=3"),
            D(r"f^{-1}(0)=2\qquad g(2)=4-1=3"),
            r"Both routes give the nested value $3$ at $x=0$. The constant term of $x^{2}+4x+3$ is the same number.",
            r"At $x=0$ the nested rule equals $3$, which is also $g(f^{-1}(0))$, so the statement is True.",
        ),
        expl(
            "E", True,
            r"The leading coefficient of $x^{2}+4x+3$ is $1>0$, so the arms open upwards. Completing the square places the vertex at the shift.",
            D(r"g(f^{-1}(x))=(x+2)^{2}-1"),
            D(r"\text{vertex }(-2,-1)"),
            r"The square vanishes at $x=-2$ and the remaining constant is $-1$, so the turning point is $(-2,-1)$.",
            r"The nested rule opens upwards, and its vertex is $(-2,-1)$, so the statement is True.",
        ),
    ]


def e28() -> list[str]:
    return [
        expl(
            "A", True,
            r"A square vanishes only when the inside vanishes, so there is a double root at $x=2$. The value there is $0$, which is also the vertex of an upward square.",
            D(r"(x-2)^{2}=0\qquad x=2\qquad g(2)=0"),
            r"Exactly one axis meeting, and it is the vertex $(2,0)$. An upward parabola with vertex on the axis cannot cross the axis anywhere else.",
            D(r"g(x)\ge 0\text{ with equality only at }x=2"),
            r"The graph meets the axis at exactly one point, the vertex $(2,0)$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"Expand, then read the discriminant and the axis from the coefficients. A vanishing discriminant is the algebraic form of a double root.",
            D(r"g(x)=x^{2}-4x+4"),
            D(r"\Delta=16-16=0\qquad x=-\frac{-4}{2}=2"),
            r"Discriminant $0$ and axis $x=2$ both match the double root. The axis of a repeated-root parabola is the repeated root itself.",
            r"The discriminant equals $0$, confirming a double root at $x=2$, and the axis is that same line, so the statement is True.",
        ),
        expl(
            "C", False,
            r"The axis of a parabola is $x=-b/(2a)$, which for a repeated root is the repeated root itself, not a neighbouring integer.",
            D(r"g(x)=(x-2)^{2}=x^{2}-4x+4\qquad x=2"),
            D(r"2\neq 3"),
            r"The announced $x=3$ sits one unit to the right of the vertex. Substituting $x=3$ gives $g(3)=1\neq 0$, so that line is not even an axis crossing.",
            r"The axis is $x=2$, not $x=3$, so the statement is False.",
        ),
        expl(
            "D", False,
            r"The constant term of $(x-2)^{2}$ is $4$, not $5$. Expanding $(x-2)^{2}=x^{2}-4x+4$ makes the $2^{2}=4$ visible.",
            D(r"(x-2)^{2}=x^{2}-4x+4"),
            D(r"x^{2}-4x+4\neq x^{2}-4x+5"),
            r"The trap $+5$ is $2^{2}+1$, as if an extra $1$ had been added to the square. The expansion is $x^{2}-4x+4$, not $x^{2}-4x+5$, so the statement is False.",
        ),
        expl(
            "E", False,
            r"A double root forces discriminant zero. Expand $g(x)=x^{2}-4x+4$ and compute $b^{2}-4ac$.",
            D(r"\Delta=16-4\cdot 1\cdot 4=0"),
            D(r"0\neq 1"),
            r"The discriminant is $0$, not $1$. A discriminant of $1$ would have split the double root into two nearby zeros a distance $1$ apart, which this square does not do.",
            r"The discriminant is $0$, not $1$, so the statement is False.",
        ),
    ]


def e29() -> list[str]:
    return [
        expl(
            "A", True,
            r"The listed heights $5,2,1,2,5$ read the same forwards and backwards, so they are symmetric about the middle input $x=2$. The second gaps are constantly $2$.",
            D(r"q:\ 5,\ 2,\ 1,\ 2,\ 5\qquad\Delta_{2}:\ 2,\ 2,\ 2"),
            D(r"2a=2\qquad a=1"),
            r"Symmetry about $x=2$ and second-difference $2$ force a monic parabola with that vertex, so the statement is True.",
        ),
        expl(
            "B", True,
            r"Substitute each tabled input into the completed square $(x-2)^{2}+1$. The vertex height at $x=2$ is already $1$.",
            D(r"(0-2)^{2}+1=5\qquad (2-2)^{2}+1=1\qquad (4-2)^{2}+1=5"),
            r"The remaining columns $x=1$ and $x=3$ each give $(1)^{2}+1=2$, matching the table. The candidate matches every listed point.",
            D(r"q(x)=(x-2)^{2}+1"),
            r"The candidate matches every listed point, including the vertex height $1$ at $x=2$, so the statement is True.",
        ),
        expl(
            "C", False,
            r"The absolute-value candidate already fails at $x=0$. A V-shape with the same vertex is linear on each side, so its second differences vanish, unlike the table's constant $2$.",
            D(r"|0-2|+1=3\neq 5"),
            D(r"|x-2|+1\text{ is not quadratic}"),
            r"The V-shape $|x-2|+1$ does not fit the table. Matching a vertex is not enough: the arms of a parabola rise like a square, not like a line.",
            r"The candidate $|x-2|+1$ does not match every listed point, so the statement is False.",
        ),
        expl(
            "D", False,
            r"The last first difference is $3$. One further second-difference of $2$ produces the next first gap $5$, then the next height.",
            D(r"q(4)=5\qquad q(5)=5+5=10"),
            D(r"(5-2)^{2}+1=10\neq 8"),
            r"The announced $8$ would have required the next first gap to stay $3$. The next term is $10$, not $8$, so the statement is False.",
        ),
        expl(
            "E", True,
            r"The rebuilt rule $(x-2)^{2}+1$ has vertex $(2,1)$, already above the horizontal axis. Expand to read the discriminant.",
            D(r"q(x)=x^{2}-4x+5"),
            D(r"\Delta=16-20=-4<0"),
            r"A trough above the axis has negative discriminant, so no real roots. Completing the square makes the same fact visible: a square plus $1$ never vanishes.",
            r"The vertex is $(2,1)$ above the axis, and there are no real roots, so the statement is True.",
        ),
    ]


def e30() -> list[str]:
    return [
        expl(
            "A", True,
            r"The arch meets the road where the completed square equals $4$. Solving names the two abutments, whose midpoint is the crown.",
            D(r"4-(x-2)^{2}=0\qquad x-2=\pm 2"),
            D(r"x=0\qquad x=4\qquad\text{crown }(2,4)"),
            r"Road meetings $0$ and $4$, and crown $(2,4)$, both match. The axis of the downward parabola is that same midpoint $x=2$.",
            r"The arch meets the road at $x=0$ and $x=4$, and the crown is the midpoint $(2,4)$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"The coefficient of $x$ in the trolley rule is the slope. Evaluate at the crown abscissa $x=2$ and compare with the crown height $4$.",
            D(r"f(x)=2-\frac{1}{2}x\qquad m=-\frac{1}{2}"),
            D(r"f(2)=2-1=1\qquad 4-1=3"),
            r"Slope $-\frac{1}{2}$, and the trolley sits three units below the crown. The chord is falling, as a negative slope requires.",
            r"The trolley path has slope $-\frac{1}{2}$, and at the crown abscissa the trolley sits three units below the crown, so the statement is True.",
        ),
        expl(
            "C", True,
            r"Expand $g$ and subtract the trolley. Meetings are the real zeros of that quadratic difference.",
            D(r"g(x)=4-(x-2)^{2}=-x^{2}+4x"),
            D(r"g-f=-x^{2}+\frac{9}{2}x-2\qquad\Delta=\frac{81}{4}-8=\frac{49}{4}>0"),
            r"A positive discriminant means two distinct real meetings. The arch and the trolley therefore meet twice.",
            r"The difference $g-f$ has discriminant $\frac{49}{4}>0$, so the arch and the trolley meet twice, so the statement is True.",
        ),
        expl(
            "D", True,
            r"Compare the two heights at the crown abscissa $x=2$. The arch is at its highest point there; the trolley is the chord value.",
            D(r"g(2)=4\qquad f(2)=1"),
            D(r"1<4"),
            r"The trolley lies strictly below the arch at $x=2$. A meeting at the crown would have required $f(2)=4$, which the chord does not achieve.",
            r"At $x=2$ the trolley height $1$ lies strictly below the arch height $4$, so the statement is True.",
        ),
        expl(
            "E", False,
            r"Compare the two heights at the crown abscissa $x=2$. The chord value is $1$, while the arch peaks at $4$.",
            D(r"f(2)=1<4=g(2)"),
            r"The trolley lies below the arch at $x=2$, not above it. A chord joining points of the arch cannot overshoot the crown of a downward parabola.",
            D(r"f(x)=2-\frac{1}{2}x\qquad g(x)=4-(x-2)^{2}"),
            r"The trolley path lies below the arch at $x=2$, not above it, so the statement is False.",
        ),
    ]
