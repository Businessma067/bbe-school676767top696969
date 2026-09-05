"""Ch7 mixed exam letters math-7-e1 … math-7-e15 in MATH 7.79 voice."""
from __future__ import annotations

from _ch7_mixed_779_lib import D, expl


def pack() -> dict[str, list[str]]:
    return {
        "math-7-e1": e01(),
        "math-7-e2": e02(),
        "math-7-e3": e03(),
        "math-7-e4": e04(),
        "math-7-e5": e05(),
        "math-7-e6": e06(),
        "math-7-e7": e07(),
        "math-7-e8": e08(),
        "math-7-e9": e09(),
        "math-7-e10": e10(),
        "math-7-e11": e11(),
        "math-7-e12": e12(),
        "math-7-e13": e13(),
        "math-7-e14": e14(),
        "math-7-e15": e15(),
    }


def e01() -> list[str]:
    return [
        expl(
            "A", True,
            r"Meetings of a line and a parabola are the real zeros of their height difference, so recover both traces from the ticks and subtract.",
            D(r"g(x)=-x^{2}+4\qquad f(x)=-x+2"),
            r"The difference stays quadratic and factors at sight.",
            D(r"g(x)-f(x)=-x^{2}+x+2=-(x-2)(x+1)"),
            r"The zeros are $x=-1$ and $x=2$. Their product is already visible from the signs: one meeting sits left of the origin and one sits right of it.",
            D(r"(-1)\cdot 2=-2"),
            r"A negative product is exactly the claim, so the statement is True.",
        ),
        expl(
            "B", False,
            r"The solid curve turns on the vertical axis, at the unique trough of an even downward parabola. Compare the two heights at that common abscissa.",
            D(r"g(x)=-x^{2}+4\qquad g(0)=4"),
            D(r"f(x)=-x+2\qquad f(0)=2"),
            r"The dashed line sits two units *below* the solid peak, not above it. The claimed gap runs in the wrong direction.",
            D(r"4-2=2>0"),
            r"Green is under brown at the turning abscissa, so the statement is False.",
        ),
        expl(
            "C", True,
            r"Recover both rules from the ticks and factor the height difference, which still has degree two.",
            D(r"g(x)-f(x)=-x^{2}+x+2=-(x-2)(x+1)"),
            r"The two real meetings are therefore $x=-1$ and $x=2$. Only the first of those is strictly negative.",
            D(r"x=-1<0\qquad x=2>0"),
            r"A single negative abscissa is exactly one meeting to the left of the origin, so the statement is True.",
        ),
        expl(
            "D", False,
            r"The solid curve meets the horizontal axis at $x=\pm 2$. On the open interval between those crossings the midpoint $x=0$ already compares the two traces.",
            D(r"g(x)=-x^{2}+4\qquad f(x)=-x+2"),
            D(r"g(0)=4\qquad f(0)=2"),
            r"Brown stays above green at the vertex, and an upward gap at the axis of a downward parabola cannot flip between the two roots.",
            D(r"4>2"),
            r"The solid curve is above the dashed line on that interval, not below it, so the statement is False.",
        ),
        expl(
            "E", False,
            r"A chord joining the two axis crossings of $g$ is the unique line through $(\pm 2,0)$, which is the horizontal axis itself.",
            D(r"g(\pm 2)=0\implies y=0"),
            r"The dashed trace is a different line: it has slope $-1$ and intercept $2$.",
            D(r"f(x)=-x+2"),
            r"Those two formulas disagree at every $x\neq 2$. In particular $f(0)=2\neq 0$, so the chord and the dashed trace do not coincide, so the statement is False.",
        ),
    ]


def e02() -> list[str]:
    return [
        expl(
            "A", True,
            r"Equally spaced inputs make neighbouring gaps the fastest diagnostic. The first-difference row is not constant, while the second-difference row stands still, so a unique quadratic fits the six points.",
            D(r"s:\ 3,\ 0,\ -1,\ 0,\ 3,\ 8"),
            D(r"\Delta_{2}:\ 2,\ 2,\ 2,\ 2"),
            r"For unit spacing that second-difference constant equals $2a$, hence $a=1$. Matching $s_0=3$ and $s_1=0$ then pins the rest.",
            D(r"s_n=n^{2}-4n+3=(n-1)(n-3)"),
            r"The interpolating parabola vanishes at $n=1$ and $n=3$, so the statement is True.",
        ),
        expl(
            "B", False,
            r"The last first-difference of the table is $5$. One further second-difference of $2$ produces the next first-difference $7$, and then the next height.",
            D(r"s:\ 3,\ 0,\ -1,\ 0,\ 3,\ 8\qquad \Delta_{1}\text{ last}=5"),
            D(r"s_6=s_5+7=8+7=15"),
            r"The announced $12$ would have required a first-difference of $4$ instead of $7$.",
            D(r"15\neq 12"),
            r"The extrapolated height is $15$, not $12$, so the statement is False.",
        ),
        expl(
            "C", True,
            r"The interpolating parabola through the six cells is $s_n=n^{2}-4n+3$, which factors as $(n-1)(n-3)$. The axis of $an^{2}+bn+c$ is the midpoint of the two roots.",
            D(r"n=\frac{1+3}{2}=2"),
            r"The same abscissa is the unique listed input at which the table attains its smallest height $-1$.",
            D(r"s_2=-1\qquad s_n>s_2\text{ for every other listed }n"),
            r"The axis is $n=2$, where the table attains its unique listed minimum, so the statement is True.",
        ),
        expl(
            "D", False,
            r"The unique line through the tabled endpoints $(0,3)$ and $(5,8)$ has slope $1$, so its height at $n=2$ would be $5$.",
            D(r"m=\frac{8-3}{5-0}=1"),
            D(r"3+2\cdot 1=5"),
            r"The listed height at that same input is $s_2=-1$, which is not $5$. A line matching the two ends therefore misses the middle.",
            D(r"s_2=-1\neq 5"),
            r"That line misses the listed height at $n=2$, so the statement is False.",
        ),
        expl(
            "E", True,
            r"The vertex of a parabola sits on its axis. Rebuild the unique quadratic from the constant second difference $2$ and the first two cells.",
            D(r"s_n=n^{2}-4n+3"),
            r"The axis is $n=-b/(2a)=2$, and that column of the table is already the height.",
            D(r"s_2=-1"),
            r"Substituting into the rebuilt rule recovers the same turning height: $4-8+3=-1$. Either way the vertex height equals $-1$, so the statement is True.",
        ),
    ]


def e03() -> list[str]:
    return [
        expl(
            "A", True,
            r"Read the five revenues in price order and note where the value $15$ appears.",
            D(r"R:\ 7,\ 12,\ 15,\ 16,\ 15"),
            D(r"R(3)=15\qquad R(5)=15"),
            r"Those two prices sit equally far from $p=4$, and $R(4)=16$ is the unique listed maximum. The midpoint of the two $15$s is therefore the listed peak.",
            D(r"\frac{3+5}{2}=4"),
            r"The unique maximum sits at that midpoint, so the statement is True.",
        ),
        expl(
            "B", True,
            r"Neighbouring gaps of the revenue row are not constant; their own gaps are. Form the two difference layers from the listed heights $7,12,15,16,15$.",
            D(r"\Delta_{1}:\ 5,\ 3,\ 1,\ -1"),
            D(r"\Delta_{2}:\ -2,\ -2,\ -2"),
            r"For unit spacing the second-difference constant equals $2a$, so the leading coefficient of the interpolating parabola is $-1$.",
            D(r"2a=-2\qquad a=-1"),
            r"The rebuilt leading coefficient is $-1$, so the statement is True.",
        ),
        expl(
            "C", False,
            r"An always-increasing sequence would have every first difference strictly positive. The last listed gap is not.",
            D(r"R:\ 7,\ 12,\ 15,\ 16,\ 15"),
            D(r"R(5)-R(4)=15-16=-1<0"),
            r"Revenue rises through $p=4$ and then falls on the last listed step. A single negative gap already kills a claim of increase at every step.",
            r"Revenue falls on the last listed step, so the statement is False.",
        ),
        expl(
            "D", True,
            r"Second differences of the revenue row are constantly $-2$, so $2a=-2$ and $a=-1$. Matching $R(1)=7$ and $R(2)=12$ then fixes the remaining coefficients.",
            D(r"R(p)=-p^{2}+8p=p(8-p)"),
            r"The roots of that interpolant are $0$ and $8$, so the axis is their midpoint $p=4$, which is also the listed peak.",
            D(r"p=\frac{0+8}{2}=4"),
            r"The interpolating parabola has those roots and that axis, so the statement is True.",
        ),
        expl(
            "E", True,
            r"The last gap of the first-difference row is exactly the change from price $4$ to price $5$. Those two heights are listed as $16$ and $15$.",
            D(r"R(4)=16\qquad R(5)=15"),
            D(r"15-16=-1"),
            r"Listed revenue therefore falls by $1$ euro on that step. The same drop is visible as the last first-difference of the table.",
            r"Raising the price from $4$ to $5$ decreases the listed revenue by $1$ euro, so the statement is True.",
        ),
    ]


def e04() -> list[str]:
    return [
        expl(
            "A", True,
            r"Meetings of a line and a parabola are the real zeros of their difference. Subtract the given line from the given parabola.",
            D(r"g(x)-f(x)=(x^{2}-4x+1)-(x+1)=x^{2}-5x"),
            r"The difference factors at sight, so the two abscissas are $0$ and $5$. Vieta already reads their sum from the middle coefficient.",
            D(r"x(x-5)=0\qquad 0+5=5"),
            r"The sum of the meeting abscissas is $5$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"The axis of $ax^{2}+bx+c$ is the vertical line through $-b/(2a)$, and it ignores the constant term entirely.",
            D(r"g(x)=x^{2}-4x+1\qquad x=-\frac{-4}{2\cdot 1}=2"),
            r"Vieta's sum of the roots is $-b/a=4$, and half of that sum is the same abscissa.",
            D(r"\frac{4}{2}=2"),
            r"The axis is $x=2$, which is half the Vieta sum of the roots of $g$, so the statement is True.",
        ),
        expl(
            "C", True,
            r"The vertex height is the value of $g$ on its axis $x=2$. Substitute that abscissa term by term.",
            D(r"g(2)=4-8+1=-3"),
            r"A point of height $-3$ sits three units below the horizontal axis. Completing the square makes the same height visible as the constant beside the square.",
            D(r"g(x)=(x-2)^{2}-3"),
            r"The vertex lies $3$ units below the axis, so the statement is True.",
        ),
        expl(
            "D", True,
            r"Vieta reads the product of the roots from the constant term over the leading coefficient, without solving.",
            D(r"g(x)=x^{2}-4x+1\qquad P=\frac{c}{a}=1"),
            r"The same number is $g(0)$, because every term with an $x$ dies at the origin.",
            D(r"g(0)=1"),
            r"The product of the roots is $1$, matching $g(0)$, so the statement is True.",
        ),
        expl(
            "E", True,
            r"Because $f$ is a non-constant line, the square $f(x)^{2}$ already carries an $x^{2}$ term, so $1$, $f$ and $f^{2}$ span every parabola. Expand the claimed combination.",
            D(r"f(x)^{2}=(x+1)^{2}=x^{2}+2x+1"),
            D(r"f(x)^{2}-6f(x)+6=x^{2}+2x+1-6(x+1)+6=x^{2}-4x+1"),
            r"The combination reproduces $g$ identically, so the claimed rewrite holds, so the statement is True.",
        ),
    ]


def e05() -> list[str]:
    return [
        expl(
            "A", True,
            r"Tangency is the algebraic statement that the difference has a repeated root, so the discriminant in the slope parameter must vanish.",
            D(r"g(x)-f_t(x)=x^{2}-tx+1"),
            D(r"\Delta=t^{2}-4=0\qquad t=\pm 2"),
            r"Those two slopes, and only those two, make the line touch the parabola. For every other $t$ the discriminant is nonzero, so the root is not repeated.",
            r"Tangency occurs precisely at $t=\pm 2$, so the statement is True.",
        ),
        expl(
            "B", False,
            r"The same discriminant is negative for every slope strictly between the two tangent values, and a negative discriminant means no real meeting.",
            D(r"\Delta=t^{2}-4\qquad |t|<2\implies\Delta<0"),
            r"Take the concrete middle value $t=0$: the difference is $x^{2}+1$, which has no real zero. A miss is therefore possible.",
            D(r"x^{2}+1=0\text{ has no real }x"),
            r"The family misses whenever $|t|<2$, so the statement is False.",
        ),
        expl(
            "C", False,
            r"For $t=0$ the line is the horizontal axis, so meetings solve $x^{2}+1=0$.",
            D(r"g(x)-f_0(x)=x^{2}+1"),
            r"No real solution exists: a square cannot equal $-1$, so $x^{2}+1$ does not factor over the reals. The graphs share no real point at all, let alone two.",
            D(r"x^{2}=-1\text{ is impossible in }\mathbb{R}"),
            r"There is no real meeting when $t=0$, so the statement is False.",
        ),
        expl(
            "D", False,
            r"Substitute the named slope into the discriminant of $x^{2}-tx+1$. The miss range is $|t|<2$, not $|t|>2$.",
            D(r"t=3\qquad\Delta=9-4=5>0"),
            r"A positive discriminant gives two distinct real meetings, not a miss: $|t|>2$ is the two-meeting range.",
            D(r"x^{2}-3x+1=0\text{ has two real roots}"),
            r"The graphs meet twice when $t=3$, so the statement is False.",
        ),
        expl(
            "E", False,
            r"The axis of $g$ is computed from $g$ alone; the sliding line never enters the formula.",
            D(r"g(x)=x^{2}+1\qquad x=-\frac{b}{2a}=0"),
            r"The axis stays the vertical line $x=0$ for every $t$. The line $f_0$ is the horizontal axis $y=0$, a different line.",
            D(r"f_0(x)=0\qquad\text{is }y=0,\text{ not }x=0"),
            r"The axis of $g$ does not depend on $t$ and does not coincide with $f_0$, so the statement is False.",
        ),
    ]


def e06() -> list[str]:
    return [
        expl(
            "A", True,
            r"Vertex form with the given turning point is $g(x)=a(x-2)^{2}-3$. Passing through $(0,5)$ fixes the unknown stretch $a$.",
            D(r"g(0)=a(0-2)^{2}-3=5"),
            D(r"4a-3=5\qquad a=2"),
            r"The stretch factor equals $2$, and substituting it back produces the rebuilt rule.",
            D(r"g(x)=2(x-2)^{2}-3"),
            r"The rebuilt rule is $2(x-2)^{2}-3$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"The points $x=0$ and $x=4$ sit equally far from the axis $x=2$, so a parabola takes the same value at both. The given point $(0,5)$ therefore already names $g(4)$.",
            D(r"g(x)=2(x-2)^{2}-3"),
            D(r"g(4)=2(4-2)^{2}-3=5=g(0)"),
            r"Both heights equal $5$, matching the symmetry of a parabola about $x=2$, so the statement is True.",
        ),
        expl(
            "C", True,
            r"Vertex form with the given turning point and the given point $(0,5)$ forces stretch $a=2$. Then evaluate at $x=1$ and at the reflected input $x=3$.",
            D(r"g(x)=2(x-2)^{2}-3"),
            D(r"g(1)=2(1-2)^{2}-3=-1=g(3)"),
            r"Both heights equal $-1$, matching the equal distance from the axis $x=2$, so the statement is True.",
        ),
        expl(
            "D", False,
            r"The vertex is the given turning point $(2,-3)$. Its height is already negative, so it does not lie above the axis, and $(2,-3)$ itself is a given point of negative height.",
            D(r"g(2)=-3<0"),
            r"The other given point $(0,5)$ does have positive height, but that cannot rescue the vertex.",
            D(r"(2,-3)\text{ is below }y=0"),
            r"The vertex lies below the axis, and $(2,-3)$ is not of positive height, so the statement is False.",
        ),
        expl(
            "E", False,
            r"The claimed rule is vertex form with stretch $1$ instead of the $a=2$ that hits $(0,5)$. Check it against that given point.",
            D(r"(0-2)^{2}-3=1\neq 5"),
            r"Forgetting the stretch misses the given $y$-intercept. The correct rule, forced by $g(0)=5$, keeps the leading $2$.",
            D(r"g(x)=2(x-2)^{2}-3"),
            r"The unstretched formula is not the rule, so the statement is False.",
        ),
    ]


def e07() -> list[str]:
    return [
        expl(
            "A", True,
            r"Nesting the line inside the square substitutes a first-degree expression for $x$, so expand the square.",
            D(r"g(f(x))=(x+1)^{2}=x^{2}+2x+1"),
            r"A perfect square $(x+1)^{2}$ vanishes at $x=-1$ and is never negative, so the vertex sits on the horizontal axis.",
            D(r"g(f(-1))=0"),
            r"The nesting is a perfect square whose vertex lies on the axis, so the statement is True.",
        ),
        expl(
            "B", True,
            r"In this order the square is computed first and the line is applied afterwards, which merely shifts the values vertically.",
            D(r"f(g(x))=x^{2}+1"),
            r"A vertical shift leaves the axis of symmetry untouched: both $x^{2}$ and $x^{2}+1$ turn on the vertical coordinate axis.",
            D(r"x=-\frac{0}{2\cdot 1}=0"),
            r"The composite $f(g(x))$ has the same axis as $g$, so the statement is True.",
        ),
        expl(
            "C", False,
            r"The two expansions already differ by the middle term $2x$. A concrete input makes the gap visible.",
            D(r"g(f(x))=(x+1)^{2}=x^{2}+2x+1"),
            D(r"f(g(x))=x^{2}+1"),
            r"At $x=1$ one composite equals $4$ and the other equals $2$. Equal highest powers do not make the maps identical.",
            D(r"g(f(1))=4\neq 2=f(g(1))"),
            r"The nested rules are not the same function, so the statement is False.",
        ),
        expl(
            "D", False,
            r"Read the vertex of each composite from completed-square form. Nesting in opposite orders moves the turning point.",
            D(r"g(f(x))=(x+1)^{2}\qquad\text{vertex }(-1,0)"),
            D(r"f(g(x))=x^{2}+1\qquad\text{vertex }(0,1)"),
            r"The two turning points are different points of the plane: one sits on the $x$-axis, the other on the $y$-axis.",
            r"The nested rules do not share a vertex, so the statement is False.",
        ),
        expl(
            "E", False,
            r"A line applied after a square can only stretch and shift the values, so the highest power stays $x^{2}$. Nesting multiplies highest powers instead of adding them.",
            D(r"f(g(x))=x^{2}+1"),
            r"The product of the degrees is $1\cdot 2=2$, not $1+2=3$. No $x^{3}$ term is produced.",
            D(r"\text{highest power }x^{2},\text{ not }x^{3}"),
            r"The highest power in $f(g(x))$ is $x^{2}$, not $x^{3}$, so the statement is False.",
        ),
    ]


def e08() -> list[str]:
    return [
        expl(
            "A", True,
            r"A product $2(x-1)(x-5)$ vanishes precisely where a factor vanishes, so the roots are $1$ and $5$ regardless of the leading $2$.",
            D(r"x=1\qquad x=5\qquad 1+5=6"),
            r"The axis is the midpoint of those two roots, which is also $x=-b/(2a)$ after expanding.",
            D(r"x=\frac{1+5}{2}=3"),
            r"The sum of the roots is $6$ and the axis is $x=3$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"The vertex sits on the axis $x=3$, the midpoint of the roots $1$ and $5$. Evaluate the factored form there, keeping the leading $2$.",
            D(r"g(3)=2(3-1)(3-5)=2\cdot 2\cdot(-2)=-8"),
            r"Dropping the leading $2$ would have produced $-4$, half of the true height. The stretch doubles that dropped-leading trap.",
            D(r"-4\neq -8"),
            r"The vertex height is $-8$, twice the height one would get by dropping the leading $2$, so the statement is True.",
        ),
        expl(
            "C", True,
            r"The axis bisects the roots $1$ and $5$, so it is $x=3$. The inputs $0$ and $6$ sit three units on either side, hence a parabola takes the same value at both.",
            D(r"g(0)=2(-1)(-5)=10"),
            D(r"g(6)=2(5)(1)=10"),
            r"Those two heights agree, so $x=0$ and $x=6$ sit equally far from the axis, so the statement is True.",
        ),
        expl(
            "D", True,
            r"The constant term is the value at the origin, which the factored form gives without a full expansion.",
            D(r"g(0)=2(-1)(-5)=10"),
            r"Vieta's product is that constant over the leading coefficient, which is also the product of the named roots.",
            D(r"P=\frac{10}{2}=5=1\cdot 5"),
            r"Constant term $10$ and product of roots $5$ both match, so the statement is True.",
        ),
        expl(
            "E", False,
            r"Expand the inner product first, then distribute the leading $2$. The middle coefficient comes from the sum of the roots, scaled by $-2$.",
            D(r"(x-1)(x-5)=x^{2}-6x+5"),
            D(r"2(x^{2}-6x+5)=2x^{2}-12x+10"),
            r"The trap $-10$ is what one would get from $2\times(-5)$ if the inner sum of roots had been taken to be $5$ instead of $6$.",
            D(r"-12\neq -10"),
            r"The middle coefficient is $-12$, not $-10$, so the statement is False.",
        ),
    ]


def e09() -> list[str]:
    return [
        expl(
            "A", True,
            r"Count the brown meetings with the horizontal axis and read their abscissas from the ticks. The trough sits on the vertical axis, so the two crossings must be opposites.",
            D(r"x=-2\qquad x=2"),
            r"Those two numbers are opposites of each other, matching the visual symmetry of the trough about the vertical axis. Rebuilding from the ticks gives $g(x)=x^{2}-4$, whose roots are exactly $\pm 2$.",
            D(r"g(x)=x^{2}-4"),
            r"The two axis crossings are opposites, so the statement is True.",
        ),
        expl(
            "B", True,
            r"The marked trough sits on the vertical axis. Its height on the vertical scale is $-4$, four units below the horizontal axis.",
            D(r"g(x)=x^{2}-4\qquad g(0)=-4"),
            r"An even upward parabola turns at the origin, and that turning height is the constant term.",
            D(r"-4<0"),
            r"The turning point lies $4$ units below the axis, so the statement is True.",
        ),
        expl(
            "C", True,
            r"Form neighbouring gaps of the $\ell$-row; the table does not print them. The four heights are $1,3,5,7$.",
            D(r"3-1=2\qquad 5-3=2\qquad 7-5=2"),
            r"Constant first difference $2$ forces vanishing second differences, which is the hallmark of degree $1$.",
            D(r"\Delta_{2}:\ 0,\ 0"),
            r"The interpolating degree is $1$, so the statement is True.",
        ),
        expl(
            "D", True,
            r"For unit spacing, a constant first difference is the slope. The tabled height at $x=0$ is the intercept.",
            D(r"m=2\qquad \ell(0)=1\qquad \ell(x)=2x+1"),
            r"Checking the remaining columns recovers the listed heights: $2\cdot 1+1=3$, $2\cdot 2+1=5$, $2\cdot 3+1=7$.",
            D(r"\ell(1)=3\qquad \ell(2)=5\qquad \ell(3)=7"),
            r"That line reproduces the whole table, so the statement is True.",
        ),
        expl(
            "E", True,
            r"The right-hand brown axis crossing sits at $x=2$ on the figure, because $g(x)=x^{2}-4$ vanishes there. The same abscissa is a column of the table.",
            D(r"g(2)=0\qquad \ell(x)=2x+1"),
            D(r"\ell(2)=5"),
            r"The figure supplies the abscissa; the table supplies the height at that same input. The tabled height at that crossing is $5$, so the statement is True.",
        ),
    ]


def e10() -> list[str]:
    return [
        expl(
            "A", False,
            r"Opening downwards with those roots means $g(x)=k(x+1)(x-3)$ for some $k<0$. The unscaled choice $k=-1$ still has to hit height $6$ at the named peak $x=1$.",
            D(r"-(1+1)(1-3)=-(2)(-2)=4"),
            D(r"4\neq 6"),
            r"The unscaled factorisation misses the named vertex height. A stretch other than $-1$ is required.",
            r"The unscaled product does not already peak at height $6$, so the statement is False.",
        ),
        expl(
            "B", False,
            r"Evaluate the unscaled product at the named peak abscissa $x=1$; that value is its vertex height, and it is the stretch that would have to equal $6$.",
            D(r"-(x+1)(x-3)\big|_{x=1}=-(2)(-2)=4"),
            D(r"4\neq 6"),
            r"The unscaled vertex height is $4$, not $6$, so the stretch needed to hit the named vertex is not $k=-1$. Matching $k\cdot(-4)=6$ would force $k=-3/2$.",
            r"The unscaled product is $4$ at $x=1$, not $6$, so the statement is False.",
        ),
        expl(
            "C", False,
            r"A line is uniquely determined by its slope and a point. Slope $-1$ through $(0,2)$ is point-slope with intercept $2$, not $3$.",
            D(r"f(x)=-1\cdot(x-0)+2=-x+2"),
            r"The claimed intercept $3$ would have required the line to pass through $(0,3)$ instead of the given $(0,2)$.",
            D(r"-x+2\neq -x+3"),
            r"The intercept is $2$, not $3$, so the statement is False.",
        ),
        expl(
            "D", False,
            r"Scale so that $g(1)=6$: $k(2)(-2)=6$ forces $k=-3/2$. Then form the difference with the sensor $f(x)=-x+2$.",
            D(r"g(x)=-\frac{3}{2}(x+1)(x-3)"),
            D(r"g(x)-f(x)=-\frac{3}{2}x^{2}+4x+\frac{5}{2}\qquad\Delta=16+15=31>0"),
            r"A positive discriminant gives two distinct real meetings, not one. Tangency would have required $\Delta=0$.",
            r"The graphs meet twice, not once, so the statement is False.",
        ),
        expl(
            "E", True,
            r"At the peak abscissa compare the sensor height with the named vertex height $6$. Only the line is needed: the sensor is $f(x)=-x+2$.",
            D(r"f(1)=-1+2=1"),
            D(r"1<6"),
            r"The sensor sits five units below the clearance peak. A meeting at $x=1$ would have required $f(1)=6$, which fails.",
            r"The sensor lies strictly below the clearance peak, so the statement is True.",
        ),
    ]


def e11() -> list[str]:
    return [
        expl(
            "A", True,
            r"The marked trough sits between the two axis crossings. The dashed level runs through that same lowest point and nowhere else nearby. Rebuild from the ticks.",
            D(r"g(x)=(x-1)(x-3)=x^{2}-4x+3"),
            D(r"g(2)=-1"),
            r"The turning point and the dashed line share the point $(2,-1)$. Completing the square shows the difference $g+1$ is a square vanishing only there.",
            D(r"g(x)+1=(x-2)^{2}"),
            r"The turning point is the unique meeting of the two traces, so the statement is True.",
        ),
        expl(
            "B", True,
            r"The two brown axis meetings sit at $x=1$ and $x=3$. Their midpoint is the marked trough at $x=2$, so each crossing is one unit from the turning abscissa.",
            D(r"g(x)=(x-1)(x-3)"),
            D(r"x=1\qquad x=3\qquad \frac{1+3}{2}=2"),
            r"The axis of a parabola always bisects the two roots, and here that midpoint is already the marked turn.",
            r"The crossings sit equally far from the turning abscissa, one unit on each side, so the statement is True.",
        ),
        expl(
            "C", False,
            r"An upward-opening parabola climbs without bound away from its trough, so it rises above any fixed horizontal line. Rebuild $g(x)=(x-1)(x-3)$ and test the arms.",
            D(r"g(0)=3>-1\qquad g(4)=3>-1"),
            r"On the figure the arms already sit above the dashed level near the window edges. The dashed line therefore cannot lie entirely above the solid curve.",
            D(r"g(x)\to+\infty\text{ as }|x|\to\infty"),
            r"The dashed line is not entirely above the solid curve, so the statement is False.",
        ),
        expl(
            "D", False,
            r"The dashed level cuts the trough at its lowest point and nowhere else: that is a tangency, not a pair of crossings.",
            D(r"g(x)+1=(x-2)^{2}"),
            D(r"(x-2)^{2}=0\qquad x=2"),
            r"A square has a repeated root, so there is exactly one shared point, and it is the turning point. Two meetings distinct from the vertex would have required a positive discriminant.",
            r"There is exactly one shared point, and it is the turning point, so the statement is False.",
        ),
        expl(
            "E", True,
            r"The axis of a parabola always bisects the two roots, so the turning abscissa is the midpoint of the two axis crossings.",
            D(r"g(x)=(x-1)(x-3)\qquad x=\frac{1+3}{2}=2"),
            r"The figure agrees: the marked trough sits halfway between the two brown meetings with the horizontal axis.",
            D(r"g(2)=-1"),
            r"The midpoint of the crossings is the turning abscissa, so the statement is True.",
        ),
    ]


def e12() -> list[str]:
    return [
        expl(
            "A", True,
            r"Form neighbouring gaps of the $y$-row. The five listed heights are $-1,2,5,8,11$.",
            D(r"2-(-1)=3\qquad 5-2=3\qquad 8-5=3\qquad 11-8=3"),
            r"Constant first differences force vanishing second differences, which is the hallmark of degree at most $1$.",
            D(r"\Delta_{2}:\ 0,\ 0,\ 0"),
            r"The first differences are constantly $3$ and the interpolating degree is at most $1$, so the statement is True.",
        ),
        expl(
            "B", False,
            r"The unique line through the first and last listed points uses those two heights and the run of $4$.",
            D(r"m=\frac{11-(-1)}{4-0}=\frac{12}{4}=3"),
            r"That slope is the same constant first difference already visible in the table. The announced $2$ would have required a rise of $8$ over a run of $4$.",
            D(r"3\neq 2"),
            r"That line has slope $3$, not $2$, so the statement is False.",
        ),
        expl(
            "C", True,
            r"The first-difference row is constantly $3$, so the sequence extends by the same gap in both directions. The last listed height is $11$ at $x=4$, and the first is $-1$ at $x=0$.",
            D(r"y(5)=11+3=14"),
            D(r"y(-1)=-1-3=-4"),
            r"The same values come from the interpolating line $y=3x-1$ at those two inputs.",
            r"The two extrapolations are $14$ and $-4$, so the statement is True.",
        ),
        expl(
            "D", True,
            r"Second differences of a constant first-difference row are all zero, so any interpolant of degree at most two has vanishing leading coefficient.",
            D(r"y:\ -1,\ 2,\ 5,\ 8,\ 11\qquad\Delta_{1}=(3,3,3,3)"),
            D(r"\Delta_{2}=(0,0,0)\qquad 2a=0"),
            r"A quadratic $ax^{2}+bx+c$ with $a=0$ is a line. The interpolant of degree at most two is therefore a line, so the statement is True.",
        ),
        expl(
            "E", True,
            r"For unit spacing a quadratic $x^{2}+bx+c$ would have constant second difference $2$, not $0$. The table's second differences vanish, so the leading coefficient of any interpolating polynomial of degree at most two must be $0$.",
            D(r"2a=0\qquad a=0\neq 1"),
            r"A leading $1$ would lift every second gap by $2$, which the listed heights do not do.",
            D(r"y=3x-1\text{ fits; }x^{2}+\cdots\text{ does not}"),
            r"No quadratic with leading coefficient $1$ can fit the table, so the statement is True.",
        ),
    ]


def e13() -> list[str]:
    return [
        expl(
            "A", True,
            r"Ground meetings are the brown crossings of the horizontal axis, visible at $t=0$ and $t=6$. The peak is the marked turning point, and the axis of a parabola always bisects the two roots.",
            D(r"h(t)=t(6-t)"),
            D(r"t=\frac{0+6}{2}=3"),
            r"That midpoint is exactly where the figure places the highest point, of height $h(3)=9$.",
            r"The time of greatest height is the midpoint of the two ground times, so the statement is True.",
        ),
        expl(
            "B", False,
            r"The axis of a parabola bisects the two ground times $t=0$ and $t=6$, which puts the peak at $t=3$, not at $t=2$. The figure's marked turn sits on that tick.",
            D(r"h(t)=t(6-t)\qquad t=\frac{0+6}{2}=3"),
            D(r"3\neq 2"),
            r"The announced $t=2$ would have been the midpoint of $0$ and $4$, a different pair of ground times.",
            r"The greatest height occurs at $t=3$, not at $t=2$, so the statement is False.",
        ),
        expl(
            "C", False,
            r"The curve is symmetric about $t=3$, so heights equally far from the peak agree. The ticks $t=1$ and $t=5$ are such a pair, each two seconds from the axis.",
            D(r"h(t)=t(6-t)"),
            D(r"h(1)=5\qquad h(5)=5"),
            r"The two heights are equal, not strictly ordered. A claim that $h(1)$ is greater than $h(5)$ fails the symmetry test.",
            r"The two heights are equal, so the statement is False.",
        ),
        expl(
            "D", False,
            r"Past the peak an upward-then-down toss slopes down toward the second ground crossing. Compare the peak with the next integer tick.",
            D(r"h(t)=t(6-t)\qquad h(3)=9"),
            D(r"h(4)=8<9"),
            r"Height falls after the peak. Rising after the turning point would require a trough rather than a highest point.",
            r"Height falls after the peak, so the statement is False.",
        ),
        expl(
            "E", False,
            r"The peak sits at the midpoint $t=3$. The height there is $9$, while the neighbouring tick $t=4$ reads $8$ — a near-miss for the peak, not the peak itself.",
            D(r"h(t)=t(6-t)"),
            D(r"h(3)=9\qquad h(4)=8"),
            r"The announced $8$ metres is the height at $t=4$, one second after the true maximum.",
            D(r"9\neq 8"),
            r"The greatest height is $9$ metres, not the $8$ metres seen at $t=4$, so the statement is False.",
        ),
    ]


def e14() -> list[str]:
    return [
        expl(
            "A", True,
            r"Complete the square by taking half the middle coefficient and restoring the constant. Half of $6$ is $3$, and $3^{2}=9$.",
            D(r"x^{2}+6x+5=(x^{2}+6x+9)-9+5=(x+3)^{2}-4"),
            r"That form turns at $x=-3$ with height $-4$. Substituting the axis back into $g$ recovers the same vertex height.",
            D(r"g(-3)=-4"),
            r"Vertex form and vertex $(-3,-4)$ both match, so the statement is True.",
        ),
        expl(
            "B", True,
            r"Factor the given quadratic, then check Vieta against the coefficients of $g(x)=x^{2}+6x+5$.",
            D(r"g(x)=(x+1)(x+5)\qquad x=-1,\ -5"),
            r"The two roots add to $-6$ and multiply to $5$. Those are exactly minus the middle coefficient and the constant term, over the leading $1$.",
            D(r"(-1)+(-5)=-6=-b/a\qquad (-1)\cdot(-5)=5=c/a"),
            r"The roots, their sum, and their product all match Vieta, so the statement is True.",
        ),
        expl(
            "C", False,
            r"The product $c/a=5>0$ and the sum $-b/a=-6<0$ force two negative roots, so they are not both positive, and the axis is their midpoint $x=-3$, left of the origin.",
            D(r"g(x)=(x+1)(x+5)\qquad x=-1,\ -5"),
            D(r"x=\frac{-1+(-5)}{2}=-3<0"),
            r"Both roots are negative, and the axis lies to the left of the origin, so the statement is False.",
        ),
        expl(
            "D", False,
            r"The discriminant is $b^{2}-4ac$ with the three coefficients of $g(x)=x^{2}+6x+5$.",
            D(r"\Delta=36-4\cdot 1\cdot 5=16"),
            D(r"16\neq 15"),
            r"The announced $15$ is a near-miss for $36-20$, as if the constant had been taken as $21/4$ instead of $5$. The discriminant is $16$, not $15$, so the statement is False.",
        ),
        expl(
            "E", False,
            r"A vertical shift by $k$ produces $(x+3)^{2}-4+k$. For a perfect square the constant must vanish, which forces $k=4$, not $k=5$.",
            D(r"(x+3)^{2}-4+5=(x+3)^{2}+1"),
            r"A concrete check: the shifted rule at $x=-3$ equals $1$, not $0$, so there is no root at all, let alone a double one.",
            D(r"g(-3)+5=1\neq 0"),
            r"A shift of $5$ overshoots the vertex and leaves no real root, so the statement is False.",
        ),
    ]


def e15() -> list[str]:
    return [
        expl(
            "A", True,
            r"The vertex height is $s-4$. For $s=3$ that height is $-1$, so the upward parabola sits one unit below the axis and must cut it twice.",
            D(r"g_3(x)=(x-2)^{2}-1"),
            D(r"(x-2)^{2}=1\qquad x=1,\ 3"),
            r"Two distinct real roots exist, and their midpoint is the unmoved axis $x=2$.",
            r"There are two distinct real roots whose midpoint is $x=2$, so the statement is True.",
        ),
        expl(
            "B", True,
            r"For $s=4$ the vertex lands on the horizontal axis, which is a repeated root. The added constant vanishes and the formula is a pure square.",
            D(r"g_4(x)=(x-2)^{2}"),
            D(r"(x-2)^{2}=0\qquad x=2"),
            r"The graph touches the axis exactly once, at the vertex, and there is no other real root.",
            r"There is a double root at $x=2$ and no other, so the statement is True.",
        ),
        expl(
            "C", True,
            r"For $s=5$ the vertex height is $+1$, so the whole upward parabola sits strictly above the axis.",
            D(r"g_5(x)=(x-2)^{2}+1"),
            D(r"(x-2)^{2}=-1"),
            r"A square cannot be negative, so there is no real root. Completing the square already displays a strictly positive formula.",
            r"The graph misses the axis when $s=5$, so the statement is True.",
        ),
        expl(
            "D", True,
            r"A vertical shift never moves the axis: the square is still centred at $x=2$, whatever constant is added. The first two coefficients of the expanded formula confirm it.",
            D(r"g_s(x)=(x-2)^{2}+(s-4)=x^{2}-4x+(4+s-4)"),
            D(r"x=-\frac{-4}{2}=2"),
            r"The axis formula uses only $a$ and $b$, and neither depends on $s$. The axis is $x=2$ for every $s$, so the statement is True.",
        ),
        expl(
            "E", True,
            r"The vertex is the point where the square vanishes, so its height is exactly the added constant $s-4$. The upward parabola sits below the axis precisely when that height is negative.",
            D(r"g_s(2)=s-4"),
            D(r"s-4<0\iff s<4"),
            r"When $s<4$ the vertex is below $y=0$, and an upward parabola with a negative vertex height must cut the axis twice.",
            r"The vertex height is $s-4$, and the graph sits below the axis precisely when $s<4$, so the statement is True.",
        ),
    ]
