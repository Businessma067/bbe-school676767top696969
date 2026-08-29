"""Replacement statement templates for Chapter 2, subsection 2.3
(exponents and radicals). Verified with sympy where the check is a clean
symbolic identity; a few domain-restricted radical claims are checked with
a battery of positive numeric substitutions instead of full symbolic
simplification, which is more reliable for nth-root expressions in sympy.
"""
from __future__ import annotations

import sympy as sp


class Tpl:
    def __init__(self, id, arity, make, cap=6):
        self.id = id
        self.arity = arity
        self.make = make
        self.cap = cap


def _rand_subs(syms, rnd, positive_only):
    subs = {}
    for s in syms:
        if positive_only:
            subs[s] = sp.Rational(rnd.randint(2, 9), rnd.randint(1, 3))
        else:
            v = rnd.randint(-9, 9)
            while v == 0:
                v = rnd.randint(-9, 9)
            subs[s] = sp.Rational(v, 1)
    return subs


def _eval_real(expr, subs):
    """Substitute numerically, replacing any cbrt/Pow(.., 1/odd) with the
    real (sign-respecting) root so negative radicands behave like the real
    nth-root function used in the statements, not sympy's principal branch.
    """
    val = expr.subs(subs)
    val = val.replace(
        lambda e: e.is_Pow and e.exp.is_Rational and e.exp.q % 2 == 1 and e.exp != 1,
        lambda e: sp.real_root(e.base, e.exp.q) ** e.exp.p if e.base.is_number else e,
    )
    return sp.N(val, 30)


def _numeric_check(expr_lhs, expr_rhs, syms, positive_only=True, n=6):
    rnd = __import__("random").Random(12345)
    for _ in range(n):
        subs = _rand_subs(syms, rnd, positive_only)
        lv = _eval_real(expr_lhs, subs)
        rv = _eval_real(expr_rhs, subs)
        if abs(complex(lv) - complex(rv)) > 1e-15 * max(1, abs(complex(lv))):
            return False
    return True


def _numeric_not_equal_somewhere(expr_lhs, expr_rhs, syms, positive_only=True, n=6):
    rnd = __import__("random").Random(54321)
    for _ in range(n):
        subs = _rand_subs(syms, rnd, positive_only)
        lv = _eval_real(expr_lhs, subs)
        rv = _eval_real(expr_rhs, subs)
        if abs(complex(lv) - complex(rv)) > 1e-12:
            return True
    return False


# T1/T2: multi-law product of powers (positive/negative/zero exponents combined)
def _t1(letters):
    (x,) = letters
    X = sp.symbols("X", positive=True)
    lhs = X**5 * X**-2 * X**-1
    rhs = X**2
    assert sp.simplify(lhs - rhs) == 0
    stmt = (
        f"For ${x}\\neq 0$, it holds that "
        f"${x}^5\\cdot {x}^{{-2}}\\cdot {x}^{{-1}}={x}^2$."
    )
    body = (
        "Combine the exponents by adding them, since all three factors share "
        f"the same base ${x}$:\n\n"
        f"$${x}^5\\cdot {x}^{{-2}}\\cdot {x}^{{-1}}={x}^{{5+(-2)+(-1)}}$$\n\n"
        f"$$={x}^{{2}}$$\n\n"
        "The exponent sum matches the printed right side."
    )
    return stmt, True, body


def _t2(letters):
    (x,) = letters
    stmt = (
        f"For ${x}\\neq 0$, it holds that "
        f"${x}^5\\cdot {x}^{{-2}}\\cdot {x}^{{-1}}={x}^8$."
    )
    body = (
        f"Adding the exponents correctly gives $5+(-2)+(-1)=2$, so the product "
        f"is ${x}^2$, not ${x}^8$. Treating the negative exponents as if they "
        "added instead of subtracted is the error behind the printed claim."
    )
    return stmt, False, body


# T3/T4: negative exponent of a quotient
def _t3(letters):
    a, b = letters
    A, B = sp.symbols("A B", positive=True)
    lhs = (A / B) ** -3
    rhs = B**3 / A**3
    assert sp.simplify(lhs - rhs) == 0
    stmt = (
        f"For ${a},{b}>0$, it holds that "
        f"$\\left(\\dfrac{{{a}}}{{{b}}}\\right)^{{-3}}=\\dfrac{{{b}^3}}{{{a}^3}}$."
    )
    body = (
        "A negative outer exponent flips the fraction before the power is "
        "applied:\n\n"
        f"$$\\left(\\dfrac{{{a}}}{{{b}}}\\right)^{{-3}}=\\left(\\dfrac{{{b}}}{{{a}}}\\right)^{{3}}"
        f"=\\dfrac{{{b}^3}}{{{a}^3}}$$\n\n"
        "Flipping first and then cubing reproduces the printed right side."
    )
    return stmt, True, body


def _t4(letters):
    a, b = letters
    stmt = (
        f"For ${a},{b}>0$, it holds that "
        f"$\\left(\\dfrac{{{a}}}{{{b}}}\\right)^{{-3}}=-\\dfrac{{{a}^3}}{{{b}^3}}$."
    )
    body = (
        f"A negative exponent flips the fraction and keeps the result positive "
        f"for positive ${a},{b}$: "
        f"$\\left(\\dfrac{{{a}}}{{{b}}}\\right)^{{-3}}=\\dfrac{{{b}^3}}{{{a}^3}}$. "
        "Reading the exponent as introducing an overall minus sign, as the "
        "printed claim does, is not what a negative exponent means."
    )
    return stmt, False, body


# T5/T6: cube root of a product of even/odd powers
def _t5(letters):
    x, y = letters
    X, Y = sp.symbols("X Y", real=True)
    lhs = sp.cbrt(X**6 * Y**9)
    rhs = X**2 * Y**3
    assert _numeric_check(lhs, rhs, (X, Y), positive_only=False)
    stmt = (
        f"For every real pair $({x},{y})$, "
        f"$\\sqrt[3]{{{x}^6{y}^9}}={x}^2{y}^3$."
    )
    body = (
        f"Write the radicand as a perfect cube: ${x}^6{y}^9=({x}^2{y}^3)^3$. "
        "The cube root undoes a cube exactly, with no sign ambiguity, because "
        "the real cube-root function is defined for every real number:\n\n"
        f"$$\\sqrt[3]{{({x}^2{y}^3)^3}}={x}^2{y}^3$$\n\n"
        "This holds for every real pair, including negative values of "
        f"${x}$ or ${y}$."
    )
    return stmt, True, body


def _t6(letters):
    x, y = letters
    X, Y = sp.symbols("X Y", real=True)
    lhs = sp.cbrt(X**6 * Y**9)
    claimed = X**3 * Y**3
    assert _numeric_not_equal_somewhere(lhs, claimed, (X, Y), positive_only=False)
    stmt = (
        f"For every real pair $({x},{y})$, "
        f"$\\sqrt[3]{{{x}^6{y}^9}}={x}^3{y}^3$."
    )
    body = (
        f"Since ${x}^6{y}^9=({x}^2{y}^3)^3$, the cube root recovers "
        f"${x}^2{y}^3$, not ${x}^3{y}^3$: dividing every exponent inside the "
        f"radicand by $3$ gives exponents $2$ and $3$, not $3$ and $3$. Taking "
        f"${x}=2,{y}=1$, the left side is $\\sqrt[3]{{64}}=4$ while the printed "
        "right side gives $8$, so they disagree."
    )
    return stmt, False, body


# T7/T8: rationalizing a sum of square roots
def _t7(letters):
    x, y = letters
    X, Y = sp.symbols("X Y", positive=True)
    lhs = 1 / (sp.sqrt(X) + sp.sqrt(Y))
    rhs = (sp.sqrt(X) - sp.sqrt(Y)) / (X - Y)
    assert _numeric_check(lhs, rhs, (X, Y))
    stmt = (
        f"For ${x},{y}>0$ with ${x}\\neq {y}$, it holds that "
        f"$\\dfrac{{1}}{{\\sqrt{{{x}}}+\\sqrt{{{y}}}}}=\\dfrac{{\\sqrt{{{x}}}-\\sqrt{{{y}}}}}{{{x}-{y}}}$."
    )
    body = (
        f"Multiply top and bottom by the conjugate $\\sqrt{{{x}}}-\\sqrt{{{y}}}$ "
        "so the denominator becomes a difference of squares:\n\n"
        f"$$\\dfrac{{1}}{{\\sqrt{{{x}}}+\\sqrt{{{y}}}}}\\cdot"
        f"\\dfrac{{\\sqrt{{{x}}}-\\sqrt{{{y}}}}}{{\\sqrt{{{x}}}-\\sqrt{{{y}}}}}"
        f"=\\dfrac{{\\sqrt{{{x}}}-\\sqrt{{{y}}}}}{{{x}-{y}}}$$\n\n"
        "The denominator is rational, matching the printed right side."
    )
    return stmt, True, body


def _t8(letters):
    x, y = letters
    X, Y = sp.symbols("X Y", positive=True)
    lhs = 1 / (sp.sqrt(X) + sp.sqrt(Y))
    claimed = (sp.sqrt(X) + sp.sqrt(Y)) / (X - Y)
    assert _numeric_not_equal_somewhere(lhs, claimed, (X, Y))
    stmt = (
        f"For ${x},{y}>0$ with ${x}\\neq {y}$, it holds that "
        f"$\\dfrac{{1}}{{\\sqrt{{{x}}}+\\sqrt{{{y}}}}}=\\dfrac{{\\sqrt{{{x}}}+\\sqrt{{{y}}}}}{{{x}-{y}}}$."
    )
    body = (
        f"Multiplying by the conjugate $\\sqrt{{{x}}}-\\sqrt{{{y}}}$, not "
        f"$\\sqrt{{{x}}}+\\sqrt{{{y}}}$, is what clears the radical from the "
        f"denominator: $\\dfrac{{1}}{{\\sqrt{{{x}}}+\\sqrt{{{y}}}}}"
        f"=\\dfrac{{\\sqrt{{{x}}}-\\sqrt{{{y}}}}}{{{x}-{y}}}$. Using the same "
        "sign as the original denominator, as the printed claim does, leaves "
        "a radical in the denominator instead of clearing it."
    )
    return stmt, False, body


# T9/T10: common-factor exponent grouping
def _t9(letters):
    (x,) = letters
    X = sp.symbols("X", positive=True)
    lhs = X**5 + X**3
    rhs = X**3 * (X**2 + 1)
    assert sp.simplify(lhs - rhs) == 0
    stmt = (
        f"For ${x}\\neq 0$, it holds that "
        f"${x}^5+{x}^3={x}^3({x}^2+1)$."
    )
    body = (
        f"Both terms share the common factor ${x}^3$, the lower of the two "
        "exponents:\n\n"
        f"$${x}^5+{x}^3={x}^3\\cdot {x}^2+{x}^3\\cdot 1$$\n\n"
        f"$$={x}^3({x}^2+1)$$\n\n"
        "Factoring out the common power reproduces the printed right side."
    )
    return stmt, True, body


def _t10(letters):
    (x,) = letters
    stmt = (
        f"For ${x}\\neq 0$, it holds that "
        f"${x}^5+{x}^3={x}^{{8}}$."
    )
    body = (
        f"Exponents add only when the bases are multiplied, not when they are "
        f"added: ${x}^5\\cdot {x}^3={x}^8$, but ${x}^5+{x}^3$ is a sum, which "
        f"factors as ${x}^3({x}^2+1)$ and is not a single power of ${x}$ in "
        "general. Treating a sum like a product is the error here."
    )
    return stmt, False, body


# T11/T12: radical of a sum of squares is not the sum of the roots
def _t11(letters):
    x, y = letters
    X, Y = sp.symbols("X Y", real=True)
    lhs = sp.sqrt(X**2 + Y**2)
    claimed = sp.Abs(X) + sp.Abs(Y)
    assert _numeric_not_equal_somewhere(lhs, claimed, (X, Y), positive_only=False)
    stmt = (
        f"For every real pair $({x},{y})$, "
        f"$\\sqrt{{{x}^2+{y}^2}}=\\sqrt{{{x}^2}}+\\sqrt{{{y}^2}}$."
    )
    body = (
        f"The right side simplifies to $|{x}|+|{y}|$, while the left side is "
        f"$\\sqrt{{{x}^2+{y}^2}}$. Taking ${x}=3,{y}=4$: the left side is "
        f"$\\sqrt{{9+16}}=\\sqrt{{25}}=5$, while the right side is $3+4=7$. "
        "These disagree, so the square root of a sum of squares is not, in "
        "general, the sum of the individual square roots."
    )
    return stmt, False, body


def _t12(letters):
    x, y = letters
    X, Y = sp.symbols("X Y", positive=True)
    lhs = sp.sqrt(X**2 * Y**2)
    rhs = X * Y
    assert sp.simplify(lhs - rhs) == 0
    stmt = (
        f"For ${x},{y}>0$, it holds that "
        f"$\\sqrt{{{x}^2{y}^2}}={x}{y}$."
    )
    body = (
        f"The radicand is already a perfect square, $({x}{y})^2$, so its "
        "principal square root is the nonnegative factor:\n\n"
        f"$$\\sqrt{{{x}^2{y}^2}}=\\sqrt{{({x}{y})^2}}={x}{y}$$\n\n"
        f"Because both ${x}$ and ${y}$ are positive, ${x}{y}$ is already "
        "nonnegative, so no absolute value bars are needed."
    )
    return stmt, True, body


# T13/T14: change-of-base power law without solving for the exponent
def _t13(letters):
    (t,) = letters
    stmt = (
        f"Given $5^{{{t}}}=3$, it follows that $125^{{{t}}}=27$ without solving "
        f"for ${t}$."
    )
    body = (
        f"Since $125=5^3$, raise both sides of the hypothesis to the third "
        "power using the power-of-a-power rule:\n\n"
        f"$$125^{{{t}}}=(5^3)^{{{t}}}=(5^{{{t}}})^3$$\n\n"
        f"$$=3^3=27$$\n\n"
        f"The value of ${t}$ itself is never needed; only the given power "
        f"$5^{{{t}}}=3$ is used."
    )
    return stmt, True, body


def _t14(letters):
    (t,) = letters
    stmt = (
        f"Given $5^{{{t}}}=3$, it follows that $25^{{{t}}}=6$ without solving "
        f"for ${t}$."
    )
    body = (
        f"Since $25=5^2$, $25^{{{t}}}=(5^{{{t}}})^2=3^2=9$, not $6$. Doubling "
        f"the given value of $3$ instead of squaring it is the error behind "
        "the printed claim."
    )
    return stmt, False, body


# T15/T16: zero exponent combined with an inverse product
def _t15(letters):
    (x,) = letters
    X = sp.symbols("X", positive=True)
    lhs = X**0 + X**-1 * X
    rhs = sp.Integer(2)
    assert sp.simplify(lhs - rhs) == 0
    stmt = (
        f"For ${x}\\neq 0$, it holds that "
        f"${x}^0+{x}^{{-1}}\\cdot {x}=2$."
    )
    body = (
        f"Apply the zero-exponent rule to the first term and the "
        "inverse-product rule to the second:\n\n"
        f"$${x}^0=1,\\qquad {x}^{{-1}}\\cdot {x}={x}^{{-1+1}}={x}^0=1$$\n\n"
        f"$$1+1=2$$\n\n"
        f"Both terms reduce to $1$ for every ${x}\\neq 0$, so their sum is "
        "always $2$, matching the claim."
    )
    return stmt, True, body


def _t16(letters):
    (x,) = letters
    stmt = (
        f"For ${x}\\neq 0$, it holds that "
        f"${x}^0+{x}^{{-1}}\\cdot {x}={x}$."
    )
    body = (
        f"Both ${x}^0$ and ${x}^{{-1}}\\cdot {x}$ equal $1$ for every "
        f"${x}\\neq 0$, so the sum is the constant $2$, not ${x}$: the "
        "printed claim mistakes a constant sum for a variable expression."
    )
    return stmt, False, body


# T17/T18: fourth root of an eighth power
def _t17(letters):
    (x,) = letters
    X = sp.symbols("X", real=True)
    lhs = (X**8) ** sp.Rational(1, 4)
    rhs = X**2
    assert _numeric_check(lhs, rhs, (X,), positive_only=False)
    stmt = (
        f"For every real ${x}$, "
        f"$\\sqrt[4]{{{x}^8}}={x}^2$."
    )
    body = (
        f"Write the radicand as a perfect fourth power: "
        f"${x}^8=({x}^2)^4$. The principal fourth root of a fourth power is "
        "the absolute value of the base, and here the base is already "
        "nonnegative:\n\n"
        f"$$\\sqrt[4]{{({x}^2)^4}}=\\left|{x}^2\\right|={x}^2$$\n\n"
        f"since ${x}^2\\ge 0$ for every real ${x}$."
    )
    return stmt, True, body


def _t18(letters):
    (x,) = letters
    X = sp.symbols("X", real=True)
    lhs = (X**4) ** sp.Rational(1, 4)
    claimed = X
    assert _numeric_not_equal_somewhere(lhs, claimed, (X,), positive_only=False)
    stmt = (
        f"For every real ${x}$, "
        f"$\\sqrt[4]{{{x}^4}}={x}$."
    )
    body = (
        f"The principal fourth root is always nonnegative, so "
        f"$\\sqrt[4]{{{x}^4}}=|{x}|$, not ${x}$. Taking ${x}=-2$: the left "
        f"side is $\\sqrt[4]{{16}}=2$, while the printed right side gives "
        "$-2$, so they disagree for negative values."
    )
    return stmt, False, body


# T19/T20: product of two square roots combines under one radical
def _t19(letters):
    x, y = letters
    X, Y = sp.symbols("X Y", positive=True)
    lhs = sp.sqrt(X) * sp.sqrt(Y)
    rhs = sp.sqrt(X * Y)
    assert sp.simplify(lhs - rhs) == 0
    stmt = (
        f"For ${x},{y}\\ge 0$, it holds that "
        f"$\\sqrt{{{x}}}\\cdot\\sqrt{{{y}}}=\\sqrt{{{x}{y}}}$."
    )
    body = (
        "The product rule for square roots lets two nonnegative radicands "
        "combine under one root:\n\n"
        f"$$\\sqrt{{{x}}}\\cdot\\sqrt{{{y}}}=\\sqrt{{{x}{y}}}$$\n\n"
        f"Squaring both sides confirms it: $\\left(\\sqrt{{{x}}}\\sqrt{{{y}}}\\right)^2={x}{y}"
        f"=\\left(\\sqrt{{{x}{y}}}\\right)^2$, and both original expressions are "
        "nonnegative, so the square roots themselves agree."
    )
    return stmt, True, body


def _t20(letters):
    x, y = letters
    stmt = (
        f"For ${x},{y}\\ge 0$, it holds that "
        f"$\\sqrt{{{x}}}\\cdot\\sqrt{{{y}}}=\\sqrt{{{x}+{y}}}$."
    )
    body = (
        f"The product of two square roots combines under multiplication, "
        f"$\\sqrt{{{x}}}\\cdot\\sqrt{{{y}}}=\\sqrt{{{x}{y}}}$, not under addition. "
        f"Taking ${x}={y}=4$: the left side is $2\\cdot 2=4$, while the printed "
        f"right side is $\\sqrt{{8}}\\approx 2.83$, so they disagree."
    )
    return stmt, False, body


# T21/T22: power of a power with an integer outer exponent
def _t21(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (X**3) ** 4
    rhs = X**12
    assert sp.simplify(lhs - rhs) == 0
    stmt = f"For every real ${x}$, $({x}^3)^4={x}^{{12}}$."
    body = (
        "A power raised to another power multiplies the exponents:\n\n"
        f"$$({x}^3)^4={x}^{{3\\cdot 4}}$$\n\n"
        f"$$={x}^{{12}}$$\n\n"
        f"since the outer exponent $4$ is a positive integer, this multiplication "
        f"rule holds for every real ${x}$, with no sign restriction needed."
    )
    return stmt, True, body


def _t22(letters):
    (x,) = letters
    stmt = f"For every real ${x}$, $({x}^3)^4={x}^{{7}}$."
    body = (
        f"Raising a power to a power multiplies the exponents, "
        f"$({x}^3)^4={x}^{{3\\cdot 4}}={x}^{{12}}$, not ${x}^7$. Adding the "
        "exponents instead of multiplying them is the error behind the "
        "printed claim."
    )
    return stmt, False, body


# T23/T24: quotient rule with a negative exponent in the numerator
def _t23(letters):
    (x,) = letters
    X = sp.symbols("X", positive=True)
    lhs = X**-2 / X**3
    rhs = X**-5
    assert sp.simplify(lhs - rhs) == 0
    stmt = (
        f"For ${x}\\neq 0$, it holds that "
        f"$\\dfrac{{{x}^{{-2}}}}{{{x}^3}}={x}^{{-5}}$."
    )
    body = (
        "Dividing powers of the same base subtracts the exponents:\n\n"
        f"$$\\dfrac{{{x}^{{-2}}}}{{{x}^3}}={x}^{{-2-3}}$$\n\n"
        f"$$={x}^{{-5}}$$\n\n"
        "The exponent subtraction matches the printed right side."
    )
    return stmt, True, body


def _t24(letters):
    (x,) = letters
    stmt = (
        f"For ${x}\\neq 0$, it holds that "
        f"$\\dfrac{{{x}^{{-2}}}}{{{x}^3}}={x}^{{1}}$."
    )
    body = (
        f"Dividing powers of the same base subtracts the exponents: "
        f"$\\dfrac{{{x}^{{-2}}}}{{{x}^3}}={x}^{{-2-3}}={x}^{{-5}}$, not "
        f"${x}^{{1}}$. Adding $-2+3=1$ instead of subtracting $-2-3=-5$ is "
        "the error behind the printed claim."
    )
    return stmt, False, body


# T25/T26: rational-exponent equation (add exponents vs multiply)
def _t25(letters):
    (x,) = letters
    X = sp.symbols("X", positive=True)
    lhs = X ** sp.Rational(2, 3) * X ** sp.Rational(1, 3)
    rhs = X
    assert sp.simplify(lhs - rhs) == 0
    stmt = (
        f"For ${x}>0$, it holds that "
        f"${x}^{{2/3}}\\cdot {x}^{{1/3}}={x}$."
    )
    body = (
        "Multiplying powers of the same base adds the exponents:\n\n"
        f"$${x}^{{2/3}}\\cdot {x}^{{1/3}}={x}^{{2/3+1/3}}$$\n\n"
        f"$$={x}^{{1}}={x}$$\n\n"
        "The fractional exponents add to exactly $1$, matching the claim."
    )
    return stmt, True, body


def _t26(letters):
    (x,) = letters
    stmt = (
        f"For ${x}>0$, it holds that "
        f"${x}^{{2/3}}\\cdot {x}^{{1/3}}={x}^{{2/9}}$."
    )
    body = (
        f"Multiplying same-base powers adds exponents, "
        f"${x}^{{2/3}}\\cdot {x}^{{1/3}}={x}^{{2/3+1/3}}={x}^{{1}}={x}$, not "
        f"${x}^{{2/9}}$. Multiplying the exponents ($\\frac23\\cdot\\frac13=\\frac29$) "
        "instead of adding them is the error behind the printed claim."
    )
    return stmt, False, body


# T27/T28: doubly-nested square root as a quarter power
def _t27(letters):
    (x,) = letters
    X = sp.symbols("X", nonnegative=True)
    lhs = sp.sqrt(sp.sqrt(X))
    rhs = X ** sp.Rational(1, 4)
    assert sp.simplify(lhs - rhs) == 0
    stmt = f"For ${x}\\ge 0$, it holds that $\\sqrt{{\\sqrt{{{x}}}}}={x}^{{1/4}}$."
    body = (
        f"Each square root is a power of $\\frac12$, so nesting two of them "
        "multiplies the exponents:\n\n"
        f"$$\\sqrt{{\\sqrt{{{x}}}}}=\\left({x}^{{1/2}}\\right)^{{1/2}}$$\n\n"
        f"$$={x}^{{1/2\\cdot 1/2}}={x}^{{1/4}}$$\n\n"
        "matching the printed right side exactly."
    )
    return stmt, True, body


def _t28(letters):
    (x,) = letters
    stmt = f"For ${x}\\ge 0$, it holds that $\\sqrt{{\\sqrt{{{x}}}}}=\\dfrac{{{x}^{{1/2}}}}{{2}}$."
    body = (
        f"Nesting two square roots multiplies the exponents "
        f"$\\frac12\\cdot\\frac12=\\frac14$, giving "
        f"$\\sqrt{{\\sqrt{{{x}}}}}={x}^{{1/4}}$, not "
        f"$\\dfrac{{{x}^{{1/2}}}}{{2}}$. Dividing by $2$ instead of taking a "
        "further square root is the error behind the printed claim."
    )
    return stmt, False, body


T23_TEMPLATES = [
    Tpl("multi_law_product", 1, _t1, cap=4),
    Tpl("multi_law_product_false", 1, _t2, cap=3),
    Tpl("neg_exp_quotient", 2, _t3, cap=4),
    Tpl("neg_exp_quotient_false", 2, _t4, cap=3),
    Tpl("cube_root_mixed_powers", 2, _t5, cap=4),
    Tpl("cube_root_mixed_powers_false", 2, _t6, cap=3),
    Tpl("rationalize_sum_roots", 2, _t7, cap=4),
    Tpl("rationalize_sum_roots_false", 2, _t8, cap=3),
    Tpl("common_factor_exponent", 1, _t9, cap=4),
    Tpl("common_factor_exponent_false", 1, _t10, cap=3),
    Tpl("root_sum_squares_false", 2, _t11, cap=4),
    Tpl("root_product_squares", 2, _t12, cap=4),
    Tpl("change_of_base_power", 1, _t13, cap=3),
    Tpl("change_of_base_power_false", 1, _t14, cap=3),
    Tpl("zero_exp_inverse_product", 1, _t15, cap=4),
    Tpl("zero_exp_inverse_product_false", 1, _t16, cap=3),
    Tpl("fourth_root_eighth_power", 1, _t17, cap=4),
    Tpl("fourth_root_fourth_power_false", 1, _t18, cap=3),
    Tpl("product_of_roots", 2, _t19, cap=4),
    Tpl("product_of_roots_false", 2, _t20, cap=3),
    Tpl("power_of_power_int", 1, _t21, cap=4),
    Tpl("power_of_power_int_false", 1, _t22, cap=3),
    Tpl("quotient_rule_neg_exp", 1, _t23, cap=4),
    Tpl("quotient_rule_neg_exp_false", 1, _t24, cap=3),
    Tpl("rational_exp_add", 1, _t25, cap=4),
    Tpl("rational_exp_add_false", 1, _t26, cap=3),
    Tpl("nested_sqrt_quarter_power", 1, _t27, cap=4),
    Tpl("nested_sqrt_quarter_power_false", 1, _t28, cap=3),
]

if __name__ == "__main__":
    singles = ["x", "t", "u", "w"]
    pairs = [("a", "b"), ("x", "y"), ("p", "q")]
    for tpl in T23_TEMPLATES:
        letters = (singles[0],) if tpl.arity == 1 else pairs[0]
        stmt, truth, body = tpl.make(letters)
        print(tpl.id, truth, "|", stmt)
    print("All 2.3 templates OK")
