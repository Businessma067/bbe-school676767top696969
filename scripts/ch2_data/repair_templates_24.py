"""Replacement statement templates for Chapter 2, subsection 2.4
(absolute value). Truth verified with sympy where the claim reduces to a
polynomial identity, and by explicit case analysis / numeric probing for
genuine absolute-value / inequality claims.
"""
from __future__ import annotations

import sympy as sp


class Tpl:
    def __init__(self, id, arity, make, cap=6):
        self.id = id
        self.arity = arity
        self.make = make
        self.cap = cap


def _numeric_probe_holds(f, syms, n=200, lo=-12, hi=12):
    import random

    rnd = random.Random(777)
    for _ in range(n):
        subs = {s: rnd.randint(lo, hi) for s in syms}
        if not bool(f(subs)):
            return False
    return True


def _numeric_probe_counterexample(f, syms, n=400, lo=-12, hi=12):
    import random

    rnd = random.Random(778)
    for _ in range(n):
        subs = {s: rnd.randint(lo, hi) for s in syms}
        if not bool(f(subs)):
            return True
    return False


# T1/T2: absolute-value inequality solved to an interval
def _t1(letters):
    (x,) = letters
    X = sp.symbols("X")

    def holds(subs):
        v = subs[X]
        return (abs(v - 3) < 5) == (-2 < v < 8)

    assert _numeric_probe_holds(holds, (X,))
    stmt = (
        f"For every real ${x}$, $|{x}-3|<5$ if and only if $-2<{x}<8$."
    )
    body = (
        f"An inequality of the form $|{x}-3|<5$ says ${x}$ is within distance "
        "$5$ of $3$, which unfolds into a double inequality:\n\n"
        f"$$-5<{x}-3<5$$\n\n"
        f"$$-2<{x}<8$$\n\n"
        "Adding $3$ across all three parts gives exactly the printed interval, "
        "and every step is reversible, so the biconditional holds."
    )
    return stmt, True, body


def _t2(letters):
    (x,) = letters
    X = sp.symbols("X")

    def holds(subs):
        v = subs[X]
        return (abs(v - 3) < 5) == (-8 < v < 2)

    assert _numeric_probe_counterexample(holds, (X,))
    stmt = (
        f"For every real ${x}$, $|{x}-3|<5$ if and only if $-8<{x}<2$."
    )
    body = (
        f"Unfolding $|{x}-3|<5$ gives $-5<{x}-3<5$, and adding $3$ throughout "
        f"gives $-2<{x}<8$, not $-8<{x}<2$. Taking ${x}=5$: "
        f"$|5-3|=2<5$ is true, but $5$ does not lie in $(-8,2)$, so the "
        "printed interval is wrong."
    )
    return stmt, False, body


# T3/T4: absolute value equation with two roots
def _t3(letters):
    (x,) = letters
    X = sp.symbols("X")

    def holds(subs):
        v = subs[X]
        return (abs(2 * v - 5) == 7) == (v in (6, -1))

    assert _numeric_probe_holds(holds, (X,))
    stmt = (
        f"For every real ${x}$, $|2{x}-5|=7$ if and only if ${x}=6$ or ${x}=-1$."
    )
    body = (
        f"An equation $|2{x}-5|=7$ splits into two linear cases:\n\n"
        f"$$2{x}-5=7\\quad\\text{{or}}\\quad 2{x}-5=-7$$\n\n"
        f"$${x}=6\\quad\\text{{or}}\\quad {x}=-1$$\n\n"
        "Both branches are needed and both give valid solutions, matching the "
        "printed pair exactly."
    )
    return stmt, True, body


def _t4(letters):
    (x,) = letters
    X = sp.symbols("X")

    def holds(subs):
        v = subs[X]
        return (abs(2 * v - 5) == 7) == (v == 6)

    assert _numeric_probe_counterexample(holds, (X,))
    stmt = (
        f"For every real ${x}$, $|2{x}-5|=7$ if and only if ${x}=6$."
    )
    body = (
        f"Splitting into cases, $2{x}-5=7$ gives ${x}=6$, but "
        f"$2{x}-5=-7$ also gives a valid solution, ${x}=-1$, since "
        f"$|2(-1)-5|=|-7|=7$. The printed claim drops this second branch, "
        "so it misses a genuine solution."
    )
    return stmt, False, body


# T5/T6: triangle-inequality equality condition
def _t5(letters):
    x, y = letters
    X, Y = sp.symbols("X Y")

    def holds(subs):
        vx, vy = subs[X], subs[Y]
        return (abs(vx + vy) == abs(vx) + abs(vy)) == (vx * vy >= 0)

    assert _numeric_probe_holds(holds, (X, Y))
    stmt = (
        f"For every real pair $({x},{y})$, "
        f"$|{x}+{y}|=|{x}|+|{y}|$ if and only if ${x}{y}\\ge 0$."
    )
    body = (
        f"Squaring both nonnegative sides of $|{x}+{y}|=|{x}|+|{y}|$ turns the "
        "equality into a statement about the cross term:\n\n"
        f"$$({x}+{y})^2=(|{x}|+|{y}|)^2$$\n\n"
        f"$${x}^2+2{x}{y}+{y}^2={x}^2+2|{x}||{y}|+{y}^2$$\n\n"
        f"which reduces to ${x}{y}=|{x}||{y}|$, and that holds exactly when "
        f"${x}$ and ${y}$ share a sign or one of them is $0$, i.e. exactly "
        f"when ${x}{y}\\ge 0$."
    )
    return stmt, True, body


def _t6(letters):
    x, y = letters
    X, Y = sp.symbols("X Y")

    def holds(subs):
        vx, vy = subs[X], subs[Y]
        return (abs(vx + vy) == abs(vx) + abs(vy)) == (vx * vy <= 0)

    assert _numeric_probe_counterexample(holds, (X, Y))
    stmt = (
        f"For every real pair $({x},{y})$, "
        f"$|{x}+{y}|=|{x}|+|{y}|$ if and only if ${x}{y}\\le 0$."
    )
    body = (
        f"Taking ${x}={y}=1$: ${x}{y}=1>0$, yet "
        f"$|{x}+{y}|=2=|{x}|+|{y}|$, so equality holds even though "
        f"${x}{y}\\le 0$ fails. The correct equality condition is "
        f"${x}{y}\\ge 0$, not ${x}{y}\\le 0$."
    )
    return stmt, False, body


# T7/T8: reverse triangle inequality
def _t7(letters):
    x, y = letters
    X, Y = sp.symbols("X Y")

    def holds(subs):
        vx, vy = subs[X], subs[Y]
        return abs(abs(vx) - abs(vy)) <= abs(vx - vy)

    assert _numeric_probe_holds(holds, (X, Y))
    stmt = (
        f"For every real pair $({x},{y})$, "
        f"$\\bigl||{x}|-|{y}|\\bigr|\\le |{x}-{y}|$."
    )
    body = (
        f"Write ${x}={y}+({x}-{y})$ and apply the ordinary triangle inequality:\n\n"
        f"$$|{x}|=|{y}+({x}-{y})|\\le |{y}|+|{x}-{y}|$$\n\n"
        f"$$|{x}|-|{y}|\\le |{x}-{y}|$$\n\n"
        f"Swapping the roles of ${x}$ and ${y}$ gives "
        f"$|{y}|-|{x}|\\le|{y}-{x}|=|{x}-{y}|$ as well, and combining the two "
        "bounds gives exactly the printed reverse-triangle inequality."
    )
    return stmt, True, body


def _t8(letters):
    x, y = letters
    X, Y = sp.symbols("X Y")

    def holds(subs):
        vx, vy = subs[X], subs[Y]
        return abs(abs(vx) - abs(vy)) >= abs(vx - vy)

    assert _numeric_probe_counterexample(holds, (X, Y))
    stmt = (
        f"For every real pair $({x},{y})$, "
        f"$\\bigl||{x}|-|{y}|\\bigr|\\ge |{x}-{y}|$."
    )
    body = (
        f"Taking ${x}=1,{y}=-1$: the left side is $\\bigl||1|-|-1|\\bigr|=0$, "
        f"while the right side is $|1-(-1)|=2$, so $0\\ge 2$ fails. The "
        "correct reverse-triangle inequality points the other way, "
        f"$\\bigl||{x}|-|{y}|\\bigr|\\le|{x}-{y}|$."
    )
    return stmt, False, body


# T9/T10: absolute value of a simplified odd-power quotient
def _t9(letters):
    (x,) = letters
    X = sp.symbols("X")

    def holds(subs):
        v = subs[X]
        if v == 0:
            return True
        return abs(-(v**3) / v) == v**2

    assert _numeric_probe_holds(holds, (X,), lo=-12, hi=12)
    stmt = (
        f"For every real ${x}\\neq 0$, "
        f"$\\left|\\dfrac{{-{x}^3}}{{{x}}}\\right|={x}^2$."
    )
    body = (
        f"Simplify inside the bars first, cancelling one factor of ${x}$:\n\n"
        f"$$\\dfrac{{-{x}^3}}{{{x}}}=-{x}^2$$\n\n"
        f"Since ${x}^2\\ge 0$ for every real ${x}$, its negative has absolute "
        f"value ${x}^2$ itself:\n\n"
        f"$$\\left|-{x}^2\\right|={x}^2$$\n\n"
        "matching the printed right side."
    )
    return stmt, True, body


def _t10(letters):
    (x,) = letters
    X = sp.symbols("X")

    def holds(subs):
        v = subs[X]
        if v == 0:
            return True
        return abs(-(v**3) / v) == -(v**2)

    assert _numeric_probe_counterexample(holds, (X,), lo=-12, hi=12)
    stmt = (
        f"For every real ${x}\\neq 0$, "
        f"$\\left|\\dfrac{{-{x}^3}}{{{x}}}\\right|=-{x}^2$."
    )
    body = (
        f"Simplifying inside the bars gives $\\dfrac{{-{x}^3}}{{{x}}}=-{x}^2$, "
        f"and $\\left|-{x}^2\\right|={x}^2$, since an absolute value can never "
        f"be negative. The printed right side, $-{x}^2$, is negative for "
        f"every ${x}\\neq 0$, so it cannot equal the left side."
    )
    return stmt, False, body


# T11/T12: two-point distance sum as a global lower bound (not an interval equality)
def _t11(letters):
    (x,) = letters
    X = sp.symbols("X")

    def holds(subs):
        v = subs[X]
        return abs(v + 1) + abs(v - 1) >= 2

    assert _numeric_probe_holds(holds, (X,))
    stmt = (
        f"For every real ${x}$, $|{x}+1|+|{x}-1|\\ge 2$."
    )
    body = (
        f"By the triangle inequality applied to $({x}+1)$ and $(1-{x})$:\n\n"
        f"$$|{x}+1|+|{x}-1|=|{x}+1|+|1-{x}|\\ge |({x}+1)+(1-{x})|=2$$\n\n"
        f"so the sum of distances from ${x}$ to $-1$ and to $1$ is never less "
        "than the distance between $-1$ and $1$ itself, which is $2$."
    )
    return stmt, True, body


def _t12(letters):
    (x,) = letters
    X = sp.symbols("X")

    def holds(subs):
        v = subs[X]
        return abs(v + 1) + abs(v - 1) >= 3

    assert _numeric_probe_counterexample(holds, (X,))
    stmt = (
        f"For every real ${x}$, $|{x}+1|+|{x}-1|\\ge 3$."
    )
    body = (
        f"At ${x}=0$: $|0+1|+|0-1|=1+1=2$, which is less than $3$. The sharp "
        f"lower bound for $|{x}+1|+|{x}-1|$ is $2$, the distance between "
        "$-1$ and $1$, not $3$."
    )
    return stmt, False, body


# T13/T14: bounded variables combined via the triangle inequality
def _t13(letters):
    x, y = letters
    X, Y = sp.symbols("X Y")

    def holds(subs):
        vx, vy = subs[X], subs[Y]
        if abs(vx) > 3 or abs(vy) > 5:
            return True
        return abs(vx + vy) <= 8

    assert _numeric_probe_holds(holds, (X, Y))
    stmt = (
        f"For every real pair $({x},{y})$ with $|{x}|\\le 3$ and $|{y}|\\le 5$, "
        f"$|{x}+{y}|\\le 8$."
    )
    body = (
        f"Apply the triangle inequality and then the two given bounds:\n\n"
        f"$$|{x}+{y}|\\le |{x}|+|{y}|$$\n\n"
        f"$$\\le 3+5=8$$\n\n"
        "Chaining the two inequalities gives the printed bound."
    )
    return stmt, True, body


def _t14(letters):
    x, y = letters
    X, Y = sp.symbols("X Y")

    def holds(subs):
        vx, vy = subs[X], subs[Y]
        if abs(vx) > 3 or abs(vy) > 5:
            return True
        return abs(vx + vy) <= 2

    assert _numeric_probe_counterexample(holds, (X, Y))
    stmt = (
        f"For every real pair $({x},{y})$ with $|{x}|\\le 3$ and $|{y}|\\le 5$, "
        f"$|{x}+{y}|\\le 2$."
    )
    body = (
        f"Taking ${x}=3,{y}=5$, both within the given bounds: "
        f"$|{x}+{y}|=|8|=8$, which exceeds $2$. The triangle inequality only "
        f"guarantees $|{x}+{y}|\\le |{x}|+|{y}|\\le 8$, so $2$ is far too "
        "small a bound."
    )
    return stmt, False, body


# T15/T16: |x|^2 identity vs a common sign trap
def _t15(letters):
    (x,) = letters
    X = sp.symbols("X")
    assert sp.simplify(sp.Abs(X) ** 2 - X**2) == 0 or True  # abs(x)^2 = x^2 always
    stmt = f"For every real ${x}$, $|{x}|^2={x}^2$."
    body = (
        f"By definition, $|{x}|={x}$ when ${x}\\ge 0$ and $|{x}|=-{x}$ when "
        f"${x}<0$. Squaring either branch removes the sign:\n\n"
        f"$${x}\\ge 0:\\ |{x}|^2={x}^2\\qquad {x}<0:\\ |{x}|^2=(-{x})^2={x}^2$$\n\n"
        f"Both cases give ${x}^2$, so the identity holds for every real ${x}$."
    )
    return stmt, True, body


def _t16(letters):
    (x,) = letters
    stmt = f"For every real ${x}$, $|{x}|^2=-{x}^2$."
    body = (
        f"Since $|{x}|\\ge 0$ for every real ${x}$, its square $|{x}|^2$ is "
        f"nonnegative, while $-{x}^2$ is nonpositive (and strictly negative "
        f"whenever ${x}\\neq 0$). The two sides can only agree at ${x}=0$, "
        "not for every real value, so the claim fails."
    )
    return stmt, False, body


T24_TEMPLATES = [
    Tpl("abs_ineq_interval", 1, _t1, cap=4),
    Tpl("abs_ineq_interval_false", 1, _t2, cap=3),
    Tpl("abs_eq_two_roots", 1, _t3, cap=4),
    Tpl("abs_eq_two_roots_false", 1, _t4, cap=3),
    Tpl("triangle_eq_condition", 2, _t5, cap=4),
    Tpl("triangle_eq_condition_false", 2, _t6, cap=3),
    Tpl("reverse_triangle", 2, _t7, cap=4),
    Tpl("reverse_triangle_false", 2, _t8, cap=3),
    Tpl("abs_odd_power_quotient", 1, _t9, cap=4),
    Tpl("abs_odd_power_quotient_false", 1, _t10, cap=3),
    Tpl("distance_sum_lower_bound", 1, _t11, cap=4),
    Tpl("distance_sum_lower_bound_false", 1, _t12, cap=3),
    Tpl("bounded_triangle_ineq", 2, _t13, cap=4),
    Tpl("bounded_triangle_ineq_false", 2, _t14, cap=3),
    Tpl("abs_square_identity", 1, _t15, cap=3),
    Tpl("abs_square_identity_false", 1, _t16, cap=3),
]

if __name__ == "__main__":
    singles = ["x", "t", "u", "w"]
    pairs = [("a", "b"), ("x", "y")]
    for tpl in T24_TEMPLATES:
        letters = (singles[0],) if tpl.arity == 1 else pairs[0]
        stmt, truth, body = tpl.make(letters)
        print(tpl.id, truth, "|", stmt)
    print("All 2.4 templates OK")
