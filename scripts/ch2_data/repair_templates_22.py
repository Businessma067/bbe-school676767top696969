"""Replacement statement templates for Chapter 2, subsection 2.2
(rational expressions / algebraic fractions). Verified with sympy.
"""
from __future__ import annotations

import sympy as sp


class Tpl:
    def __init__(self, id, arity, make, cap=6):
        self.id = id
        self.arity = arity
        self.make = make
        self.cap = cap


def _rational_identity(lhs, rhs):
    return sp.simplify(sp.cancel(lhs - rhs)) == 0


def _rational_not_identity(lhs, rhs):
    return sp.simplify(sp.cancel(lhs - rhs)) != 0


# T1/T2: partial-fraction telescoping split
def _t1(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = 1 / (X * (X + 1))
    rhs = 1 / X - 1 / (X + 1)
    assert _rational_identity(lhs, rhs)
    stmt = (
        f"For ${x}\\neq 0,-1$, it holds that "
        f"$\\dfrac{{1}}{{{x}({x}+1)}}=\\dfrac{{1}}{{{x}}}-\\dfrac{{1}}{{{x}+1}}$."
    )
    body = (
        "Split the product in the denominator into a difference of unit "
        "fractions and recombine over the common denominator:\n\n"
        f"$$\\dfrac{{1}}{{{x}}}-\\dfrac{{1}}{{{x}+1}}=\\dfrac{{({x}+1)-{x}}}{{{x}({x}+1)}}$$\n\n"
        f"$$=\\dfrac{{1}}{{{x}({x}+1)}}$$\n\n"
        "The numerator collapses to $1$, matching the left side exactly."
    )
    return stmt, True, body


def _t2(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = 1 / (X * (X + 1))
    claimed = 1 / X + 1 / (X + 1)
    assert _rational_not_identity(lhs, claimed)
    stmt = (
        f"For ${x}\\neq 0,-1$, it holds that "
        f"$\\dfrac{{1}}{{{x}({x}+1)}}=\\dfrac{{1}}{{{x}}}+\\dfrac{{1}}{{{x}+1}}$."
    )
    body = (
        f"Adding the two unit fractions gives "
        f"$\\dfrac{{1}}{{{x}}}+\\dfrac{{1}}{{{x}+1}}=\\dfrac{{2{x}+1}}{{{x}({x}+1)}}$, "
        f"not $\\dfrac{{1}}{{{x}({x}+1)}}$. The correct decomposition uses a "
        f"minus sign, $\\dfrac{{1}}{{{x}}}-\\dfrac{{1}}{{{x}+1}}$, so the printed "
        "sum is not the right partial-fraction split."
    )
    return stmt, False, body


# T3/T4: compound fraction of reciprocal differences
def _t3(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    lhs = (1 / A - 1 / B) / (1 / A + 1 / B)
    rhs = (B - A) / (B + A)
    assert _rational_identity(lhs, rhs)
    stmt = (
        f"For ${a},{b}\\neq 0$ with ${a}\\neq -{b}$, it holds that "
        f"$\\dfrac{{\\frac1{a}-\\frac1{b}}}{{\\frac1{a}+\\frac1{b}}}=\\dfrac{{{b}-{a}}}{{{b}+{a}}}$."
    )
    body = (
        f"Multiply the top and bottom of the compound fraction by ${a}{b}$ to clear "
        "the inner reciprocals:\n\n"
        f"$$\\dfrac{{\\frac1{a}-\\frac1{b}}}{{\\frac1{a}+\\frac1{b}}}"
        f"=\\dfrac{{{a}{b}\\left(\\frac1{a}-\\frac1{b}\\right)}}{{{a}{b}\\left(\\frac1{a}+\\frac1{b}\\right)}}"
        f"=\\dfrac{{{b}-{a}}}{{{b}+{a}}}$$\n\n"
        "Clearing denominators this way reproduces the printed right side."
    )
    return stmt, True, body


def _t4(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    lhs = (1 / A - 1 / B) / (1 / A + 1 / B)
    claimed = (A - B) / (A + B)
    assert _rational_not_identity(lhs, claimed)
    stmt = (
        f"For ${a},{b}\\neq 0$ with ${a}\\neq -{b}$, it holds that "
        f"$\\dfrac{{\\frac1{a}-\\frac1{b}}}{{\\frac1{a}+\\frac1{b}}}=\\dfrac{{{a}-{b}}}{{{a}+{b}}}$."
    )
    body = (
        f"Clearing the inner reciprocals by multiplying by ${a}{b}$ gives "
        f"$\\dfrac{{{b}-{a}}}{{{b}+{a}}}$, not $\\dfrac{{{a}-{b}}}{{{a}+{b}}}$: the "
        f"numerator picks up a sign flip that the printed claim misses. "
        f"Since $\\dfrac{{{b}-{a}}}{{{b}+{a}}}=-\\dfrac{{{a}-{b}}}{{{a}+{b}}}$, the two "
        "sides are opposite, not equal, in general."
    )
    return stmt, False, body


# T5/T6: product of two rational expressions with cross-cancellation
def _t5(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = ((X**2 - 4) / (X + 3)) * ((X**2 - 9) / (X - 2))
    rhs = (X + 2) * (X - 3)
    assert _rational_identity(lhs, rhs)
    stmt = (
        f"For ${x}\\neq -3,2$, it holds that "
        f"$\\dfrac{{{x}^2-4}}{{{x}+3}}\\cdot\\dfrac{{{x}^2-9}}{{{x}-2}}=({x}+2)({x}-3)$."
    )
    body = (
        "Factor both numerators as differences of squares before multiplying:\n\n"
        f"$$\\dfrac{{({x}-2)({x}+2)}}{{{x}+3}}\\cdot\\dfrac{{({x}-3)({x}+3)}}{{{x}-2}}$$\n\n"
        f"The factor $({x}-2)$ cancels with the second denominator and $({x}+3)$ "
        f"cancels with the first denominator, leaving $({x}+2)({x}-3)$, which "
        "matches the printed product."
    )
    return stmt, True, body


def _t6(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = ((X**2 - 4) / (X + 3)) * ((X**2 - 9) / (X - 2))
    claimed = (X + 2) * (X + 3)
    assert _rational_not_identity(lhs, claimed)
    stmt = (
        f"For ${x}\\neq -3,2$, it holds that "
        f"$\\dfrac{{{x}^2-4}}{{{x}+3}}\\cdot\\dfrac{{{x}^2-9}}{{{x}-2}}=({x}+2)({x}+3)$."
    )
    body = (
        f"Factoring both numerators gives "
        f"$\\dfrac{{({x}-2)({x}+2)}}{{{x}+3}}\\cdot\\dfrac{{({x}-3)({x}+3)}}{{{x}-2}}$, "
        f"where $({x}-2)$ and $({x}+3)$ cancel, leaving $({x}+2)({x}-3)$. The "
        f"printed answer keeps the factor $({x}+3)$ instead of cancelling it, "
        "so it does not match the reduced product."
    )
    return stmt, False, body


# T7/T8: single stacked division (dividing by a fraction)
def _t7(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (X**2 - 1) / ((X + 1) / 3)
    rhs = 3 * (X - 1)
    assert _rational_identity(lhs, rhs)
    stmt = (
        f"For ${x}\\neq -1$, it holds that "
        f"$\\dfrac{{{x}^2-1}}{{\\dfrac{{{x}+1}}{{3}}}}=3({x}-1)$."
    )
    body = (
        "Dividing by a fraction means multiplying by its reciprocal:\n\n"
        f"$$\\dfrac{{{x}^2-1}}{{\\dfrac{{{x}+1}}{{3}}}}=({x}^2-1)\\cdot\\dfrac{{3}}{{{x}+1}}"
        f"=\\dfrac{{3({x}-1)({x}+1)}}{{{x}+1}}$$\n\n"
        f"The factor $({x}+1)$ cancels, leaving $3({x}-1)$, exactly as claimed."
    )
    return stmt, True, body


def _t8(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (X**2 - 1) / ((X + 1) / 3)
    claimed = 3 * (X + 1)
    assert _rational_not_identity(lhs, claimed)
    stmt = (
        f"For ${x}\\neq -1$, it holds that "
        f"$\\dfrac{{{x}^2-1}}{{\\dfrac{{{x}+1}}{{3}}}}=3({x}+1)$."
    )
    body = (
        f"Multiplying by the reciprocal $\\dfrac{{3}}{{{x}+1}}$ gives "
        f"$\\dfrac{{3({x}-1)({x}+1)}}{{{x}+1}}=3({x}-1)$ after cancelling "
        f"$({x}+1)$, not $3({x}+1)$. The printed claim keeps the wrong factor."
    )
    return stmt, False, body


# T9/T10: opposite-denominator sum
def _t9(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    lhs = A / (A - B) + B / (B - A)
    rhs = sp.Integer(1)
    assert _rational_identity(lhs, rhs)
    stmt = (
        f"For ${a}\\neq {b}$, it holds that "
        f"$\\dfrac{{{a}}}{{{a}-{b}}}+\\dfrac{{{b}}}{{{b}-{a}}}=1$."
    )
    body = (
        f"Rewrite the second denominator as ${b}-{a}=-({a}-{b})$ so both terms "
        "share a common denominator:\n\n"
        f"$$\\dfrac{{{a}}}{{{a}-{b}}}+\\dfrac{{{b}}}{{{b}-{a}}}"
        f"=\\dfrac{{{a}}}{{{a}-{b}}}-\\dfrac{{{b}}}{{{a}-{b}}}"
        f"=\\dfrac{{{a}-{b}}}{{{a}-{b}}}$$\n\n"
        "The numerator equals the denominator, so the ratio is $1$."
    )
    return stmt, True, body


def _t10(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    lhs = A / (A - B) + B / (B - A)
    claimed = sp.Integer(0)
    assert _rational_not_identity(lhs, claimed)
    stmt = (
        f"For ${a}\\neq {b}$, it holds that "
        f"$\\dfrac{{{a}}}{{{a}-{b}}}+\\dfrac{{{b}}}{{{b}-{a}}}=0$."
    )
    body = (
        f"Rewriting ${b}-{a}=-({a}-{b})$ turns the sum into "
        f"$\\dfrac{{{a}}}{{{a}-{b}}}-\\dfrac{{{b}}}{{{a}-{b}}}=\\dfrac{{{a}-{b}}}{{{a}-{b}}}=1$, "
        "not $0$. Treating the second fraction as if it kept the same sign "
        "instead of flipping is the error that produces the wrong claim."
    )
    return stmt, False, body


# T11/T12: non-monic quadratic factor cancellation
def _t11(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (2 * X**2 - X - 1) / (X - 1)
    rhs = 2 * X + 1
    assert _rational_identity(lhs, rhs)
    stmt = (
        f"For ${x}\\neq 1$, it holds that "
        f"$\\dfrac{{2{x}^2-{x}-1}}{{{x}-1}}=2{x}+1$."
    )
    body = (
        f"Factor the numerator with a leading coefficient of $2$:\n\n"
        f"$$2{x}^2-{x}-1=(2{x}+1)({x}-1)$$\n\n"
        f"Dividing by $({x}-1)$ cancels that factor and leaves $2{x}+1$, "
        "matching the printed right side."
    )
    return stmt, True, body


def _t12(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (2 * X**2 - X - 1) / (X - 1)
    claimed = 2 * X - 1
    assert _rational_not_identity(lhs, claimed)
    stmt = (
        f"For ${x}\\neq 1$, it holds that "
        f"$\\dfrac{{2{x}^2-{x}-1}}{{{x}-1}}=2{x}-1$."
    )
    body = (
        f"Factoring the numerator gives $2{x}^2-{x}-1=(2{x}+1)({x}-1)$, so "
        f"dividing by $({x}-1)$ leaves $2{x}+1$, not $2{x}-1$. The printed "
        "answer has the wrong sign on the constant term."
    )
    return stmt, False, body


# T13/T14: cubic grouped factoring over a quadratic denominator
def _t13(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (X**3 + X**2 - 4 * X - 4) / (X**2 - 4)
    rhs = X + 1
    assert _rational_identity(lhs, rhs)
    stmt = (
        f"For ${x}\\neq \\pm 2$, it holds that "
        f"$\\dfrac{{{x}^3+{x}^2-4{x}-4}}{{{x}^2-4}}={x}+1$."
    )
    body = (
        "Factor the numerator by grouping, then by a difference of squares:\n\n"
        f"$${x}^3+{x}^2-4{x}-4={x}^2({x}+1)-4({x}+1)=({x}+1)({x}^2-4)$$\n\n"
        f"Dividing by ${x}^2-4$ cancels that factor and leaves ${x}+1$, "
        "exactly the printed claim."
    )
    return stmt, True, body


def _t14(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (X**3 + X**2 - 4 * X - 4) / (X**2 - 4)
    claimed = X - 1
    assert _rational_not_identity(lhs, claimed)
    stmt = (
        f"For ${x}\\neq \\pm 2$, it holds that "
        f"$\\dfrac{{{x}^3+{x}^2-4{x}-4}}{{{x}^2-4}}={x}-1$."
    )
    body = (
        f"Grouping the numerator gives "
        f"${x}^2({x}+1)-4({x}+1)=({x}+1)({x}^2-4)$, so the reduced ratio is "
        f"${x}+1$, not ${x}-1$. The printed claim has the wrong sign on the "
        "constant term."
    )
    return stmt, False, body


# T15/T16: doubly-nested compound fraction with a difference of squares
def _t15(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (1 + 1 / X) / (1 - 1 / X**2)
    rhs = X / (X - 1)
    assert _rational_identity(lhs, rhs)
    stmt = (
        f"For ${x}\\neq 0,\\pm 1$, it holds that "
        f"$\\dfrac{{1+\\frac1{x}}}{{1-\\frac1{{{x}^2}}}}=\\dfrac{{{x}}}{{{x}-1}}$."
    )
    body = (
        f"Combine each level over a common denominator first:\n\n"
        f"$$1+\\dfrac1{x}=\\dfrac{{{x}+1}}{{{x}}},\\qquad "
        f"1-\\dfrac1{{{x}^2}}=\\dfrac{{{x}^2-1}}{{{x}^2}}=\\dfrac{{({x}-1)({x}+1)}}{{{x}^2}}$$\n\n"
        f"Dividing the first by the second multiplies by "
        f"$\\dfrac{{{x}^2}}{{({x}-1)({x}+1)}}$, cancelling $({x}+1)$ and one "
        f"factor of ${x}$ to leave $\\dfrac{{{x}}}{{{x}-1}}$."
    )
    return stmt, True, body


def _t16(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (1 + 1 / X) / (1 - 1 / X**2)
    claimed = X / (X + 1)
    assert _rational_not_identity(lhs, claimed)
    stmt = (
        f"For ${x}\\neq 0,\\pm 1$, it holds that "
        f"$\\dfrac{{1+\\frac1{x}}}{{1-\\frac1{{{x}^2}}}}=\\dfrac{{{x}}}{{{x}+1}}$."
    )
    body = (
        f"Combining each level gives "
        f"$\\dfrac{{({x}+1)/{x}}}{{({x}-1)({x}+1)/{x}^2}}=\\dfrac{{{x}}}{{{x}-1}}$ "
        f"after cancelling $({x}+1)$, not $\\dfrac{{{x}}}{{{x}+1}}$. The printed "
        "answer cancelled the wrong factor from the denominator."
    )
    return stmt, False, body


T22_TEMPLATES = [
    Tpl("partial_fraction_split", 1, _t1, cap=4),
    Tpl("partial_fraction_split_false", 1, _t2, cap=3),
    Tpl("compound_reciprocal_diff", 2, _t3, cap=4),
    Tpl("compound_reciprocal_diff_false", 2, _t4, cap=3),
    Tpl("product_cross_cancel", 1, _t5, cap=4),
    Tpl("product_cross_cancel_false", 1, _t6, cap=3),
    Tpl("stacked_single_division", 1, _t7, cap=4),
    Tpl("stacked_single_division_false", 1, _t8, cap=3),
    Tpl("opposite_denominator_sum", 2, _t9, cap=4),
    Tpl("opposite_denominator_sum_false", 2, _t10, cap=3),
    Tpl("nonmonic_quadratic_cancel", 1, _t11, cap=4),
    Tpl("nonmonic_quadratic_cancel_false", 1, _t12, cap=3),
    Tpl("grouped_cubic_cancel", 1, _t13, cap=4),
    Tpl("grouped_cubic_cancel_false", 1, _t14, cap=3),
    Tpl("nested_compound_fraction", 1, _t15, cap=4),
    Tpl("nested_compound_fraction_false", 1, _t16, cap=3),
]

if __name__ == "__main__":
    singles = ["x", "t", "u"]
    pairs = [("a", "b"), ("p", "q")]
    for tpl in T22_TEMPLATES:
        letters = (singles[0],) if tpl.arity == 1 else pairs[0]
        stmt, truth, body = tpl.make(letters)
        print(tpl.id, truth, "|", stmt)
    print("All 2.2 templates OK")
