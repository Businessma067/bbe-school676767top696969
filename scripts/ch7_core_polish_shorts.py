#!/usr/bin/env python3
"""Polish the short Chapter 7 core tactical explanations into Chapter 4 tutor voice.

Reads the letter list from /tmp/ch7-short-expls.json and patches only those
slots in src/data/math-ch7-linear-quadratic.json. Statements are left alone.
Answer keys are flipped only when independent algebra contradicts the keyed
truth (logged to stdout).

Each write-up follows the Chapter 4 rhythm:

    **X.** → True|False
    narrative
    $$one formula per display$$
    connecting prose
    ..., so the statement is True|False.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

from sympy import Eq, Poly, Rational, expand, solve
from sympy.abc import x

ROOT = Path("/workspace")
DATA = ROOT / "src/data/math-ch7-linear-quadratic.json"
INPUT = Path("/tmp/ch7-short-expls.json")
LETTERS = "ABCDE"
MIN_LEN, MAX_LEN = 380, 650

BANNED = [
    "Matching the claim",
    "read the stem fully",
    "translate words into algebra",
    "Keep the intermediate",
    "Read the stem once more",
    r"\deg",
    r"\circ",
    r"\text{stem}",
    r"\text{algebra}",
    r"\text{compare}",
    r"\text{verdict}",
    r"\text{check}",
    r"\text{model}",
    r"\text{trap}",
    "This is exactly what the claim states",
    "This is not what the claim states",
    "This settles the letter",
]


def expl(letter: str, truth: bool, *parts: str) -> str:
    verdict = "True" if truth else "False"
    body = "\n\n".join(p.strip() for p in parts if str(p).strip())
    text = f"**{letter}.** → {verdict}\n\n{body}"
    if not text.rstrip().endswith(f", so the statement is {verdict}."):
        raise ValueError(f"{letter}: missing Chapter 4 close")
    if text.count("so the statement is") != 1:
        raise ValueError(f"{letter}: close phrase must appear once")
    return text


# ---------------------------------------------------------------------------
# Rewrites, keyed by (task id, letter). Algebra is local to each claim.
# ---------------------------------------------------------------------------

EXPLS: dict[tuple[str, str], str] = {
    ("math-7-3", "D"): expl(
        "D",
        True,
        "The claim is a single substitution into the given parabola: replace every $x$ by $3$ and simplify term by term.",
        r"$$g(x)=x^{2}-6x+5$$",
        r"$$g(3)=3^{2}-6\cdot 3+5$$",
        r"$$g(3)=9-18+5=-4$$",
        "Completing the square on the same rule recovers the same height as the vertex value.",
        r"$$g(x)=(x-3)^{2}-4$$",
        "The height at $x=3$ is $-4$, the number named in the claim, so the statement is True.",
    ),
    ("math-7-4", "A"): expl(
        "A",
        True,
        "The fare after four kilometres is the value of the linear model at that distance, so insert $x=4$ and add the two terms.",
        r"$$C(x)=3x+5$$",
        r"$$C(4)=3\cdot 4+5$$",
        r"$$C(4)=12+5=17$$",
        "Reading the equation backwards checks the same pair: if the fare is $17$, then $3x+5=17$ forces $x=4$.",
        r"$$3x=12\qquad x=4$$",
        "The call-out of $5$ euros together with $3$ euros per kilometre produces $17$ euros, so the statement is True.",
    ),
    ("math-7-9", "C"): expl(
        "C",
        True,
        "The ball is on the ground wherever the height model equals zero, so factor the quadratic and read the two roots.",
        r"$$H(x)=-5x^{2}+20x$$",
        r"$$-5x^{2}+20x=0$$",
        "Factor out the common $-5x$.",
        r"$$-5x(x-4)=0$$",
        r"$$x=0\qquad x=4$$",
        "Substituting either root back yields $H=0$, so both are genuine zeros. The first is the throw and the second is the landing, so the statement is True.",
    ),
    ("math-7-9", "D"): expl(
        "D",
        False,
        "A claim about the height at one particular second is settled by substituting that second into the model.",
        r"$$H(x)=-5x^{2}+20x$$",
        r"$$H(1)=-5\cdot 1^{2}+20\cdot 1$$",
        r"$$H(1)=-5+20=15$$",
        "The announced $20$ metres is instead the vertex height, taken at $x=2$.",
        r"$$H(2)=-5\cdot 4+40=20$$",
        "At $x=1$ the ball is $15$ metres up, five metres short of the announced $20$, so the statement is False.",
    ),
    ("math-7-11", "B"): expl(
        "B",
        True,
        "A line meets the vertical axis at the height it takes when the input is zero, which is the constant term of $s$.",
        r"$$s(x)=6-2x$$",
        "Order the terms as $mx+q$ to display that constant openly.",
        r"$$s(x)=-2x+6$$",
        r"$$s(0)=-2\cdot 0+6=6$$",
        "The slope term vanishes at $x=0$, so only the constant $6$ remains. The graph cuts the $y$-axis at $y=6$, as claimed, so the statement is True.",
    ),
    ("math-7-11", "D"): expl(
        "D",
        True,
        "The horizontal-axis crossing of a line is the unique solution of $s(x)=0$, found by inverse operations.",
        r"$$6-2x=0$$",
        "Subtract $6$ from both sides, then divide by $-2$.",
        r"$$-2x=-6$$",
        r"$$x=\frac{-6}{-2}=3$$",
        "Substituting the root back confirms a genuine zero.",
        r"$$s(3)=6-2\cdot 3=0$$",
        "The crossing is at $x=3$, exactly where the claim puts it, and no other root exists, so the statement is True.",
    ),
    ("math-7-13", "D"): expl(
        "D",
        True,
        "The line is already written as $x$ plus a constant, so the value at $2$ is a one-step sum.",
        r"$$f(x)=x+3$$",
        r"$$f(2)=2+3=5$$",
        "Adding $3$ to the input $2$ is exactly the rule of $f$, with no further coefficient to distribute.",
        r"$$f(2)-5=0$$",
        "The graph therefore passes through $\\left(2,5\\right)$, which is exactly the evaluation named in the claim, so the statement is True.",
    ),
    ("math-7-16", "D"): expl(
        "D",
        False,
        "A point lies on the graph of $t$ only when the rule turns its first coordinate into its second.",
        r"$$t(x)=\frac{5-x}{2}$$",
        r"$$t(3)=\frac{5-3}{2}=\frac{2}{2}=1$$",
        "Splitting the fraction gives the same height in slope-intercept form.",
        r"$$t(3)=-\frac{1}{2}\cdot 3+\frac{5}{2}=1$$",
        "At $x=3$ the line is at height $1$, not $2$, so $\\left(3,2\\right)$ is off the graph, so the statement is False.",
    ),
    ("math-7-17", "B"): expl(
        "B",
        True,
        "The leading coefficient is readable only after every bracket has been multiplied out.",
        r"$$g(x)=2(x-1)(x-3)$$",
        "First expand the two linear factors, then distribute the $2$.",
        r"$$(x-1)(x-3)=x^{2}-4x+3$$",
        r"$$g(x)=2x^{2}-8x+6$$",
        r"$$a=2$$",
        "The number in front of $x^{2}$ is $2$, which is also the stretch already written in front of the two factors, so the statement is True.",
    ),
    ("math-7-20", "E"): expl(
        "E",
        False,
        "The table climbs by $4$ at every unit step, so the next row is the last listed height plus that same $4$.",
        r"$$y=-3,\ 1,\ 5,\ 9,\ 13$$",
        r"$$13+4=17$$",
        "The linear rule that produced the table confirms the same next value.",
        r"$$y=4x-3$$",
        r"$$y(5)=4\cdot 5-3=17$$",
        "The next row would read $17$, while the claim announces $18$, one above the true continuation, so the statement is False.",
    ),
    ("math-7-26", "E"): expl(
        "E",
        False,
        "To decide whether the two graphs have the same height at $x=3$, compute each rule there separately.",
        r"$$g(x)=x^{2}-6x+10\qquad f(x)=3x$$",
        r"$$g(3)=3^{2}-6\cdot 3+10=9-18+10=1$$",
        r"$$f(3)=3\cdot 3=9$$",
        r"$$g(3)-f(3)=1-9=-8$$",
        "The two heights differ by $8$, so they are not equal at $x=3$. The vertex of $g$ sits at height $1$ while the line is already at $9$, so the statement is False.",
    ),
    ("math-7-52", "C"): expl(
        "C",
        True,
        "Putting $x=0$ into a polynomial kills every term that still contains $x$, leaving only the constant.",
        r"$$p(x)=2x^{2}-8$$",
        r"$$p(0)=2\cdot 0^{2}-8=-8$$",
        "The same number is the height at which the graph meets the vertical axis, because that axis is the line $x=0$.",
        r"$$p(0)=c=-8$$",
        "The graph therefore meets the $y$-axis at $y=-8$, the height named in the claim, so the statement is True.",
    ),
    ("math-7-53", "D"): expl(
        "D",
        False,
        "The $y$-intercept of a parabola is its constant term, already visible in the given formula.",
        r"$$q(x)=-3x^{2}+12x-4$$",
        r"$$q(0)=-3\cdot 0^{2}+12\cdot 0-4=-4$$",
        "The claim reports $y=4$, which is the opposite sign. Substituting that announced height would require the constant to be $+4$.",
        r"$$q(0)=-4\neq 4$$",
        "The graph cuts the $y$-axis at $y=-4$, not at $y=4$, so the statement is False.",
    ),
    ("math-7-55", "D"): expl(
        "D",
        True,
        "A factored quadratic meets the $y$-axis at the product of the two constant pieces of its factors.",
        r"$$q(x)=(x-1)(x+6)$$",
        r"$$q(0)=(-1)\cdot 6=-6$$",
        "Expanding produces the same constant term, now sitting at the end of the standard form.",
        r"$$q(x)=x^{2}+5x-6$$",
        "The graph meets the $y$-axis at $y=-6$, which is the constant term of the expansion, so the statement is True.",
    ),
    ("math-7-56", "B"): expl(
        "B",
        True,
        "After ten minutes the tank still holds whatever the linear drain model returns at that instant.",
        r"$$V(x)=200-8x$$",
        r"$$V(10)=200-8\cdot 10$$",
        r"$$V(10)=200-80=120$$",
        r"$$200-120=80\qquad 80/8=10$$",
        "Ten minutes of draining at $8$ litres per minute remove $80$ litres from the initial $200$, leaving $120$ litres in the tank at that instant, matching the claim, so the statement is True.",
    ),
    ("math-7-57", "A"): expl(
        "A",
        True,
        "A line crosses the $x$-axis where its height is zero, so isolate $x$ by undoing addition and then multiplication.",
        r"$$4x+10=0$$",
        "Subtract $10$ from both sides, then divide by $4$.",
        r"$$4x=-10$$",
        r"$$x=\frac{-10}{4}=-\frac{5}{2}$$",
        "Substituting the root back confirms a genuine zero.",
        r"$$u\left(-\frac{5}{2}\right)=4\cdot\left(-\frac{5}{2}\right)+10=0$$",
        "The crossing is at $x=-\\frac{5}{2}$, exactly where the claim puts it, so the statement is True.",
    ),
    ("math-7-57", "B"): expl(
        "B",
        True,
        "The constant term of $u$ is already the height at $x=0$, but substituting still makes the arithmetic visible.",
        r"$$u(x)=4x+10$$",
        r"$$u(0)=4\cdot 0+10=10$$",
        "That height is the intercept $q$ in the shape $mx+q$, independent of the slope $4$.",
        r"$$q=10$$",
        "The graph therefore meets the $y$-axis at $y=10$, the height named in the claim, with no contribution from the slope, so the statement is True.",
    ),
    ("math-7-57", "D"): expl(
        "D",
        True,
        "A line is increasing precisely when its slope is positive, so compare two neighbouring values.",
        r"$$u(x)=4x+10$$",
        r"$$u(0)=10\qquad u(1)=14$$",
        r"$$m=14-10=4$$",
        "Each unit step to the right raises the height by $4$, and $4>0$. The same conclusion is read off the coefficient of $x$ in $4x+10$. A positive slope means $u$ is increasing on the whole line, so the statement is True.",
    ),
    ("math-7-58", "D"): expl(
        "D",
        False,
        "The intercept on the vertical axis is the value of $h$ at $x=0$, which is the constant term of the formula.",
        r"$$h(x)=-x^{2}+6x-5$$",
        r"$$h(0)=-0^{2}+6\cdot 0-5=-5$$",
        "The claim reports $y=5$, which simply drops the minus sign in front of the constant.",
        r"$$h(0)=-5\neq 5$$",
        "The graph cuts the $y$-axis at $y=-5$, not at the opposite-sign height $y=5$, so the statement is False.",
    ),
    ("math-7-59", "B"): expl(
        "B",
        True,
        "Clearing the fraction first turns the intercept equation into an integer one.",
        r"$$\frac{1}{3}x-2=0$$",
        "Add $2$ to both sides, then multiply through by $3$.",
        r"$$\frac{1}{3}x=2$$",
        r"$$x=2\cdot 3=6$$",
        "Substituting the root back confirms a genuine zero.",
        r"$$v(6)=\frac{1}{3}\cdot 6-2=0$$",
        "The crossing is at $x=6$, exactly where the claim puts it, and the root is unique, so the statement is True.",
    ),
    ("math-7-59", "C"): expl(
        "C",
        True,
        "With $x=0$ the slope term vanishes, so the intercept is the remaining constant.",
        r"$$v(x)=\frac{1}{3}x-2$$",
        r"$$v(0)=\frac{1}{3}\cdot 0-2=-2$$",
        "The same number is the constant $q$ in the shape $mx+q$, independent of the gentle slope $\\frac{1}{3}$.",
        r"$$q=-2$$",
        "The graph therefore meets the $y$-axis at $y=-2$, the height named in the claim, with the slope term gone, so the statement is True.",
    ),
    ("math-7-60", "E"): expl(
        "E",
        True,
        "The second differences of the table are constantly $2$, which identifies the quadratic rule behind the rows.",
        r"$$y=1,\ 2,\ 5,\ 10,\ 17$$",
        r"$$y=x^{2}+1$$",
        "One further input is then a substitution, not a guess. The last first-difference $7$ grows by $2$, giving the same next height.",
        r"$$17+9=26$$",
        r"$$y(5)=5^{2}+1=26$$",
        "The next row would read $26$, exactly the value claimed, so the statement is True.",
    ),
    ("math-7-62", "C"): expl(
        "C",
        True,
        "Revenue vanishes at the two ticket prices that make the quadratic equal to zero, so factor out the common $x$.",
        r"$$R(x)=-2x^{2}+36x$$",
        r"$$-2x^{2}+36x=0$$",
        r"$$-2x(x-18)=0$$",
        r"$$x=0\qquad x=18$$",
        "Substituting either root back yields $R=0$. The free-ticket price and the price of $18$ euros are exactly the two zeros named in the claim, and there are no others, so the statement is True.",
    ),
    ("math-7-62", "E"): expl(
        "E",
        True,
        "Inserting the ticket price $10$ into the revenue model is a direct arithmetic check of the announced figure.",
        r"$$R(x)=-2x^{2}+36x$$",
        r"$$R(10)=-2\cdot 10^{2}+36\cdot 10$$",
        r"$$R(10)=-200+360=160$$",
        "The square term subtracts $200$ euros while the linear term contributes $360$. The net weekly revenue is $160$ euros, the figure named in the claim, so the statement is True.",
    ),
    ("math-7-67", "C"): expl(
        "C",
        True,
        "The stem hands over the zeros and the stretch, so rebuild the parabola and then evaluate at $x=0$.",
        r"$$p(x)=3(x+4)(x-2)$$",
        r"$$p(0)=3\cdot 4\cdot(-2)=-24$$",
        "Expanding produces the same constant term, now sitting at the end of the standard form.",
        r"$$p(x)=3x^{2}+6x-24$$",
        "The graph meets the $y$-axis at $y=-24$, which is the constant term of the rebuilt rule, so the statement is True.",
    ),
    ("math-7-68", "B"): expl(
        "B",
        True,
        "Recover the line from the given slope and the point $(4,1)$, then read the height at $x=0$.",
        r"$$u(x)=-\frac{1}{2}(x-4)+1$$",
        r"$$u(x)=-\frac{1}{2}x+2+1=-\frac{1}{2}x+3$$",
        r"$$u(0)=3$$",
        "Starting at height $3$ and walking four units with slope $-\\frac{1}{2}$ lands at $3-2=1$, which recovers the given point $(4,1)$. The $y$-intercept is therefore $3$, so the statement is True.",
    ),
    ("math-7-75", "C"): expl(
        "C",
        True,
        "A vertex at $(3,-8)$ gives the completed square up to a stretch; the extra point $(1,0)$ fixes that stretch.",
        r"$$q(x)=a\left(x-3\right)^{2}-8$$",
        r"$$0=a\left(-2\right)^{2}-8\Rightarrow a=2$$",
        "Evaluating the rebuilt rule at $x=0$ is the $y$-intercept.",
        r"$$q(0)=2\left(-3\right)^{2}-8=18-8=10$$",
        "The graph meets the $y$-axis at $y=10$, the height named in the claim, so the statement is True.",
    ),
    ("math-7-76", "C"): expl(
        "C",
        True,
        "Profit is zero at the roots of the quadratic, so multiply by $-1$ and factor the resulting monic polynomial.",
        r"$$-x^{2}+24x-80=0$$",
        r"$$x^{2}-24x+80=0$$",
        r"$$(x-4)(x-20)=0$$",
        r"$$x=4\qquad x=20$$",
        "Substituting either root back yields $P=0$, and Vieta's sum $4+20=24$ matches the middle coefficient. Those are the two break-even levels named in the claim, so the statement is True.",
    ),
    ("math-7-76", "E"): expl(
        "E",
        False,
        "The claim that two machines already break even is a substitution into the profit model.",
        r"$$P(x)=-x^{2}+24x-80$$",
        r"$$P(2)=-2^{2}+24\cdot 2-80$$",
        r"$$P(2)=-4+48-80=-36$$",
        r"$$P(2)\neq 0$$",
        "The true zeros sit at $x=4$ and $x=20$, so $x=2$ is still on the loss side of the first break-even. The profit is $-36$ hundred euros, not the claimed $0$, so the statement is False.",
    ),
    ("math-7-78", "E"): expl(
        "E",
        True,
        "The table of heights continues by the same quadratic rule that produced the listed rows.",
        r"$$y=0,\ 25,\ 40,\ 45,\ 40$$",
        r"$$y=-5x^{2}+30x$$",
        "One further second is then a substitution. The last first-difference $-5$ shrinks by $10$, giving the same next height.",
        r"$$40+(-15)=25$$",
        r"$$y(5)=-5\cdot 25+150=25$$",
        "The next row would read $25$, exactly the value claimed, so the statement is True.",
    ),
}


# ---------------------------------------------------------------------------
# Independent algebra: compute the actual truth of each claim.
# ---------------------------------------------------------------------------

def actual_truth(tid: str, letter: str) -> bool:
    """Return the mathematically correct truth value for the patched claim."""
    if tid == "math-7-3" and letter == "D":
        g = x**2 - 6 * x + 5
        return g.subs(x, 3) == -4
    if tid == "math-7-4" and letter == "A":
        C = 3 * x + 5
        return C.subs(x, 4) == 17
    if tid == "math-7-9" and letter == "C":
        H = -5 * x**2 + 20 * x
        return sorted(solve(Eq(H, 0), x)) == [0, 4]
    if tid == "math-7-9" and letter == "D":
        H = -5 * x**2 + 20 * x
        return H.subs(x, 1) == 20
    if tid == "math-7-11" and letter == "B":
        s = 6 - 2 * x
        return s.subs(x, 0) == 6
    if tid == "math-7-11" and letter == "D":
        s = 6 - 2 * x
        return solve(Eq(s, 0), x) == [3]
    if tid == "math-7-13" and letter == "D":
        f = x + 3
        return f.subs(x, 2) == 5
    if tid == "math-7-16" and letter == "D":
        t = (5 - x) / 2
        return t.subs(x, 3) == 2
    if tid == "math-7-17" and letter == "B":
        g = expand(2 * (x - 1) * (x - 3))
        return Poly(g, x).LC() == 2
    if tid == "math-7-20" and letter == "E":
        y = 4 * x - 3
        return y.subs(x, 5) == 18
    if tid == "math-7-26" and letter == "E":
        g = x**2 - 6 * x + 10
        f = 3 * x
        return g.subs(x, 3) == f.subs(x, 3)
    if tid == "math-7-52" and letter == "C":
        p = 2 * x**2 - 8
        return p.subs(x, 0) == -8
    if tid == "math-7-53" and letter == "D":
        q = -3 * x**2 + 12 * x - 4
        return q.subs(x, 0) == 4
    if tid == "math-7-55" and letter == "D":
        q = (x - 1) * (x + 6)
        return q.subs(x, 0) == -6
    if tid == "math-7-56" and letter == "B":
        V = 200 - 8 * x
        return V.subs(x, 10) == 120
    if tid == "math-7-57" and letter == "A":
        u = 4 * x + 10
        return solve(Eq(u, 0), x) == [Rational(-5, 2)]
    if tid == "math-7-57" and letter == "B":
        u = 4 * x + 10
        return u.subs(x, 0) == 10
    if tid == "math-7-57" and letter == "D":
        u = 4 * x + 10
        return Poly(u, x).nth(1) > 0
    if tid == "math-7-58" and letter == "D":
        h = -(x**2) + 6 * x - 5
        return h.subs(x, 0) == 5
    if tid == "math-7-59" and letter == "B":
        v = x / 3 - 2
        return solve(Eq(v, 0), x) == [6]
    if tid == "math-7-59" and letter == "C":
        v = x / 3 - 2
        return v.subs(x, 0) == -2
    if tid == "math-7-60" and letter == "E":
        y = x**2 + 1
        return y.subs(x, 5) == 26
    if tid == "math-7-62" and letter == "C":
        R = -2 * x**2 + 36 * x
        return sorted(solve(Eq(R, 0), x)) == [0, 18]
    if tid == "math-7-62" and letter == "E":
        R = -2 * x**2 + 36 * x
        return R.subs(x, 10) == 160
    if tid == "math-7-67" and letter == "C":
        p = expand(3 * (x + 4) * (x - 2))
        return p.subs(x, 0) == -24
    if tid == "math-7-68" and letter == "B":
        u = -(x / 2) + 3
        return u.subs(x, 0) == 3
    if tid == "math-7-75" and letter == "C":
        q = expand(2 * (x - 3) ** 2 - 8)
        return q.subs(x, 0) == 10
    if tid == "math-7-76" and letter == "C":
        P = -(x**2) + 24 * x - 80
        return sorted(solve(Eq(P, 0), x)) == [4, 20]
    if tid == "math-7-76" and letter == "E":
        P = -(x**2) + 24 * x - 80
        return P.subs(x, 2) == 0
    if tid == "math-7-78" and letter == "E":
        y = -5 * x**2 + 30 * x
        return y.subs(x, 5) == 25
    raise KeyError(f"no algebra checker for {tid} {letter}")


def validate_one(tid: str, letter: str, text: str, truth: bool) -> None:
    verdict = "True" if truth else "False"
    where = f"{tid} {letter}"
    if not text.startswith(f"**{letter}.** → {verdict}\n\n"):
        raise SystemExit(f"{where}: bad header {text[:40]!r}")
    if not text.rstrip().endswith(f", so the statement is {verdict}."):
        raise SystemExit(f"{where}: bad close {text[-80]!r}")
    if text.count("so the statement is") != 1:
        raise SystemExit(f"{where}: close phrase count")
    n = len(text)
    if not (MIN_LEN <= n <= MAX_LEN):
        raise SystemExit(f"{where}: length {n} not in [{MIN_LEN},{MAX_LEN}]")
    for bad in BANNED:
        if bad in text:
            raise SystemExit(f"{where}: banned pad {bad!r}")
    displays = re.findall(r"\$\$(.+?)\$\$", text, flags=re.S)
    if len(displays) < 2:
        raise SystemExit(f"{where}: need at least two displays")
    for disp in displays:
        if "\n" in disp or disp.strip() != disp:
            raise SystemExit(f"{where}: multiline/padded display {disp!r}")
        if not re.search(r"=|<|>|\\neq|\\geq|\\leq|\\mapsto|\\Rightarrow", disp):
            raise SystemExit(f"{where}: display lacks a relation {disp!r}")
    if len(displays) != len(set(displays)):
        raise SystemExit(f"{where}: duplicate display")
    if text.count("$$") != 2 * len(displays):
        raise SystemExit(f"{where}: unclosed display")
    if "\n\n\n" in text:
        raise SystemExit(f"{where}: triple blank line")


def opener(text: str) -> str:
    body = text.split("\n\n", 1)[1]
    return body.split("\n\n", 1)[0]


def main() -> None:
    items = json.loads(INPUT.read_text(encoding="utf-8"))
    data = json.loads(DATA.read_text(encoding="utf-8"))
    by_id = {t["id"]: t for t in data["tasks"]}

    expected = {(it["id"], it["letter"]) for it in items}
    if expected != set(EXPLS):
        missing = expected - set(EXPLS)
        extra = set(EXPLS) - expected
        raise SystemExit(f"EXPLS mismatch missing={missing} extra={extra}")

    flips: list[str] = []
    lens: list[int] = []
    openers: list[str] = []

    for it in items:
        tid, letter = it["id"], it["letter"]
        task = by_id[tid]
        idx = LETTERS.index(letter)
        keyed = bool(task["answer_key"][idx])
        given = bool(it["truth"])
        computed = bool(actual_truth(tid, letter))
        text = EXPLS[(tid, letter)]
        hm = re.match(r"\*\*[A-E]\.\*\* → (True|False)", text)
        header_truth = hm.group(1) == "True"

        if computed != keyed:
            task["answer_key"][idx] = computed
            flips.append(
                f"{task['case_id']} {letter}: keyed {keyed} -> {computed} "
                f"(algebra contradicts the key)"
            )
            truth = computed
        else:
            truth = keyed
            if given != keyed:
                flips.append(
                    f"{task['case_id']} {letter}: input truth {given} != key "
                    f"{keyed}, but algebra agrees with the key; key kept"
                )

        if header_truth != truth:
            raise SystemExit(
                f"{tid} {letter}: explanation header {header_truth} != truth {truth}"
            )

        validate_one(tid, letter, text, truth)
        task["tactical_explanations"][idx] = text
        lens.append(len(text))
        openers.append(opener(text))

    if len(set(openers)) != len(openers):
        from collections import Counter

        dups = [o for o, n in Counter(openers).items() if n > 1]
        raise SystemExit(f"repeated openers: {dups}")

    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    print(f"patched {len(items)} letter slots in {DATA}")
    print(
        f"lengths: min={min(lens)} median={sorted(lens)[len(lens)//2]} "
        f"max={max(lens)}"
    )
    if flips:
        print("answer-key flips:")
        for line in flips:
            print(" ", line)
    else:
        print("answer-key flips: none (algebra agrees with every keyed truth)")
    print("openers:")
    for it, op in zip(items, openers):
        print(f"  {it['case_id']} {it['letter']} ({len(EXPLS[(it['id'], it['letter'])])}): {op[:72]}")


if __name__ == "__main__":
    main()
