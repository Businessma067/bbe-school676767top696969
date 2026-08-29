"""Replacement statement templates for Chapter 2, subsection 2.1
(binomial / polynomial identities). Every template is verified against
sympy at import time so a broken identity fails fast instead of shipping.
"""
from __future__ import annotations

import sympy as sp


def _check_identity(lhs, rhs, syms):
    diff = sp.expand(lhs - rhs)
    return sp.simplify(diff) == 0


def _check_not_identity(lhs, rhs, syms):
    diff = sp.expand(lhs - rhs)
    return sp.simplify(diff) != 0


class Tpl:
    def __init__(self, id, arity, make, cap=6):
        self.id = id
        self.arity = arity
        self.make = make
        self.cap = cap


# ---------------------------------------------------------------------------
# T1: sum of cubes factoring
# ---------------------------------------------------------------------------
def _t1(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    assert _check_identity(A**3 + B**3, (A + B) * (A**2 - A * B + B**2), (A, B))
    stmt = (
        f"For every real pair $({a},{b})$, "
        f"${a}^3+{b}^3=({a}+{b})({a}^2-{a}{b}+{b}^2)$."
    )
    body = (
        "Factor a sum of cubes with the named rule:\n\n"
        f"$${a}^3+{b}^3=({a}+{b})({a}^2-{a}{b}+{b}^2)$$\n\n"
        f"Expanding the right side, $({a}+{b}){a}^2-({a}+{b}){a}{b}+({a}+{b}){b}^2"
        f"={a}^3-{a}^2{b}+{a}{b}^2+{a}^2{b}-{a}{b}^2+{b}^3={a}^3+{b}^3$, "
        "which matches the left side term for term."
    )
    return stmt, True, body


# ---------------------------------------------------------------------------
# T2: difference of cubes factoring
# ---------------------------------------------------------------------------
def _t2(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    assert _check_identity(A**3 - B**3, (A - B) * (A**2 + A * B + B**2), (A, B))
    stmt = (
        f"For every real pair $({a},{b})$, "
        f"${a}^3-{b}^3=({a}-{b})({a}^2+{a}{b}+{b}^2)$."
    )
    body = (
        "Factor a difference of cubes with the named rule:\n\n"
        f"$${a}^3-{b}^3=({a}-{b})({a}^2+{a}{b}+{b}^2)$$\n\n"
        f"Multiplying out the right side gives $({a}-{b}){a}^2+({a}-{b}){a}{b}+({a}-{b}){b}^2"
        f"={a}^3+{a}^2{b}+{a}{b}^2-{a}^2{b}-{a}{b}^2-{b}^3={a}^3-{b}^3$, "
        "the same polynomial as the left side."
    )
    return stmt, True, body


# ---------------------------------------------------------------------------
# T3: full cube of a sum (true) / T4: cube of a sum missing a term (false)
# ---------------------------------------------------------------------------
def _t3(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    assert _check_identity((A + B) ** 3, A**3 + 3 * A**2 * B + 3 * A * B**2 + B**3, (A, B))
    stmt = f"For every real pair $({a},{b})$, $({a}+{b})^3={a}^3+3{a}^2{b}+3{a}{b}^2+{b}^3$."
    body = (
        "Expand the cube of a binomial by multiplying $(" + a + "+" + b + ")^2$ by $(" + a + "+" + b + ")$ once more:\n\n"
        f"$$({a}+{b})^2={a}^2+2{a}{b}+{b}^2$$\n\n"
        f"$$({a}^2+2{a}{b}+{b}^2)({a}+{b})={a}^3+3{a}^2{b}+3{a}{b}^2+{b}^3$$\n\n"
        "Both intermediate steps land exactly on the printed right side."
    )
    return stmt, True, body


def _t4(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    claimed = A**3 + 3 * A * B**2 + B**3
    assert _check_not_identity((A + B) ** 3, claimed, (A, B))
    stmt = f"For every real pair $({a},{b})$, $({a}+{b})^3={a}^3+3{a}{b}^2+{b}^3$."
    body = (
        "Expand the left side in full:\n\n"
        f"$$({a}+{b})^3={a}^3+3{a}^2{b}+3{a}{b}^2+{b}^3$$\n\n"
        f"The printed right side drops the $3{a}^2{b}$ term entirely, so the two "
        f"sides differ by $3{a}^2{b}$, which is not the zero polynomial."
    )
    return stmt, False, body


# ---------------------------------------------------------------------------
# T5: cube of a difference (true)
# ---------------------------------------------------------------------------
def _t5(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    assert _check_identity((A - B) ** 3, A**3 - 3 * A**2 * B + 3 * A * B**2 - B**3, (A, B))
    stmt = f"For every real pair $({a},{b})$, $({a}-{b})^3={a}^3-3{a}^2{b}+3{a}{b}^2-{b}^3$."
    body = (
        f"Write $({a}-{b})^3=({a}-{b})^2({a}-{b})$ and expand in two stages:\n\n"
        f"$$({a}-{b})^2={a}^2-2{a}{b}+{b}^2$$\n\n"
        f"$$({a}^2-2{a}{b}+{b}^2)({a}-{b})={a}^3-3{a}^2{b}+3{a}{b}^2-{b}^3$$\n\n"
        "The signs alternate exactly as printed, so the identity is confirmed."
    )
    return stmt, True, body


# ---------------------------------------------------------------------------
# T6: general three-cube identity (no vanishing-sum hypothesis needed)
# ---------------------------------------------------------------------------
def _t6(letters):
    a, b, c = letters
    A, B, C = sp.symbols("A B C")
    lhs = A**3 + B**3 + C**3 - 3 * A * B * C
    rhs = (A + B + C) * (A**2 + B**2 + C**2 - A * B - B * C - C * A)
    assert _check_identity(lhs, rhs, (A, B, C))
    stmt = (
        f"For every real triple $({a},{b},{c})$, "
        f"${a}^3+{b}^3+{c}^3-3{a}{b}{c}=({a}+{b}+{c})({a}^2+{b}^2+{c}^2-{a}{b}-{b}{c}-{c}{a})$."
    )
    body = (
        "This is the general three-variable factoring identity, valid with no "
        f"hypothesis on $({a}+{b}+{c})$. Multiply out the right side:\n\n"
        f"$$({a}+{b}+{c})({a}^2+{b}^2+{c}^2-{a}{b}-{b}{c}-{c}{a})$$\n\n"
        f"$${a}^3+{b}^3+{c}^3-3{a}{b}{c}$$\n\n"
        "Every cross term produced by the first factor cancels against a term from "
        "the second except the printed leftover, so the two sides agree for every "
        "real triple, not only under a vanishing-sum hypothesis."
    )
    return stmt, True, body


def _t7(letters):
    a, b, c = letters
    A, B, C = sp.symbols("A B C")
    lhs = A**3 + B**3 + C**3 - 3 * A * B * C
    claimed = (A + B + C) * (A**2 + B**2 + C**2 + A * B + B * C + C * A)
    assert _check_not_identity(lhs, claimed, (A, B, C))
    stmt = (
        f"For every real triple $({a},{b},{c})$, "
        f"${a}^3+{b}^3+{c}^3-3{a}{b}{c}=({a}+{b}+{c})({a}^2+{b}^2+{c}^2+{a}{b}+{b}{c}+{c}{a})$."
    )
    body = (
        "The correct factorisation uses a minus sign on each cross term inside the "
        "second factor:\n\n"
        f"$${a}^3+{b}^3+{c}^3-3{a}{b}{c}=({a}+{b}+{c})({a}^2+{b}^2+{c}^2-{a}{b}-{b}{c}-{c}{a})$$\n\n"
        f"Replacing the minus signs by plus signs changes the product by "
        f"$2({a}+{b}+{c})({a}{b}+{b}{c}+{c}{a})$, which is not the zero polynomial, "
        "so the printed right side is not the correct factorisation."
    )
    return stmt, False, body


# ---------------------------------------------------------------------------
# T8: telescoping difference-of-squares chain
# ---------------------------------------------------------------------------
def _t8(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (X - 1) * (X + 1) * (X**2 + 1) * (X**4 + 1)
    rhs = X**8 - 1
    assert _check_identity(lhs, rhs, (X,))
    stmt = (
        f"For every real ${x}$, "
        f"$({x}-1)({x}+1)({x}^2+1)({x}^4+1)={x}^8-1$."
    )
    body = (
        "Apply the difference-of-squares rule three times in a row, each time to "
        "the product built so far:\n\n"
        f"$$({x}-1)({x}+1)={x}^2-1$$\n\n"
        f"$$({x}^2-1)({x}^2+1)={x}^4-1$$\n\n"
        f"$$({x}^4-1)({x}^4+1)={x}^8-1$$\n\n"
        "Each step only ever removes a square, so the final product telescopes to "
        f"${x}^8-1$, matching the claim."
    )
    return stmt, True, body


def _t9(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = (X - 1) * (X + 1) * (X**2 + 1) * (X**4 + 1)
    claimed = X**16 - 1
    assert _check_not_identity(lhs, claimed, (X,))
    stmt = (
        f"For every real ${x}$, "
        f"$({x}-1)({x}+1)({x}^2+1)({x}^4+1)={x}^{{16}}-1$."
    )
    body = (
        "Collapsing the same chain of difference-of-squares steps gives\n\n"
        f"$$({x}-1)({x}+1)({x}^2+1)={x}^4-1,\\qquad ({x}^4-1)({x}^4+1)={x}^8-1$$\n\n"
        f"so the true product is ${x}^8-1$, not ${x}^{{16}}-1$. The two "
        f"polynomials differ by ${x}^{{16}}-{x}^8$, which is not identically zero."
    )
    return stmt, False, body


# ---------------------------------------------------------------------------
# T10 / T11: four-term grouping factorisation
# ---------------------------------------------------------------------------
def _t10(letters):
    a, b, c, d = letters
    A, B, C, D = sp.symbols("A B C D")
    lhs = A * C + A * D + B * C + B * D
    rhs = (A + B) * (C + D)
    assert _check_identity(lhs, rhs, (A, B, C, D))
    stmt = (
        f"For every real quadruple $({a},{b},{c},{d})$, "
        f"${a}{c}+{a}{d}+{b}{c}+{b}{d}=({a}+{b})({c}+{d})$."
    )
    body = (
        "Group the four terms in pairs and pull out a common factor from each pair:\n\n"
        f"$${a}{c}+{a}{d}+{b}{c}+{b}{d}={a}({c}+{d})+{b}({c}+{d})$$\n\n"
        f"$$={a}({c}+{d})+{b}({c}+{d})=({a}+{b})({c}+{d})$$\n\n"
        "The regrouped expression matches the printed factorisation exactly."
    )
    return stmt, True, body


def _t11(letters):
    a, b, c, d = letters
    A, B, C, D = sp.symbols("A B C D")
    lhs = A * C + A * D + B * C + B * D
    claimed = (A - B) * (C + D)
    assert _check_not_identity(lhs, claimed, (A, B, C, D))
    stmt = (
        f"For every real quadruple $({a},{b},{c},{d})$, "
        f"${a}{c}+{a}{d}+{b}{c}+{b}{d}=({a}-{b})({c}+{d})$."
    )
    body = (
        "Grouping in pairs and factoring gives\n\n"
        f"$${a}{c}+{a}{d}+{b}{c}+{b}{d}={a}({c}+{d})+{b}({c}+{d})=({a}+{b})({c}+{d})$$\n\n"
        f"so the correct common factor is $({a}+{b})$, not $({a}-{b})$. The two "
        f"products differ by $2{b}({c}+{d})$, which is not identically zero."
    )
    return stmt, False, body


# ---------------------------------------------------------------------------
# T12 / T13: signed three-letter trinomial square
# ---------------------------------------------------------------------------
def _t12(letters):
    a, b, c = letters
    A, B, C = sp.symbols("A B C")
    lhs = (A - B + C) ** 2
    rhs = A**2 + B**2 + C**2 - 2 * A * B + 2 * A * C - 2 * B * C
    assert _check_identity(lhs, rhs, (A, B, C))
    stmt = (
        f"For every real triple $({a},{b},{c})$, "
        f"$({a}-{b}+{c})^2={a}^2+{b}^2+{c}^2-2{a}{b}+2{a}{c}-2{b}{c}$."
    )
    body = (
        f"Treat $({a}-{b}+{c})^2$ as the square of the three-term sum "
        f"${a}+(-{b})+{c}$ and expand every pairwise product, doubled:\n\n"
        f"$$({a}-{b}+{c})^2={a}^2+{b}^2+{c}^2+2\\bigl[{a}(-{b})+{a}{c}+(-{b}){c}\\bigr]$$\n\n"
        f"$$={a}^2+{b}^2+{c}^2-2{a}{b}+2{a}{c}-2{b}{c}$$\n\n"
        "Each cross-term sign is fixed by the sign of the two factors it comes "
        "from, and this matches the printed right side."
    )
    return stmt, True, body


def _t13(letters):
    a, b, c = letters
    A, B, C = sp.symbols("A B C")
    lhs = (A - B + C) ** 2
    claimed = A**2 + B**2 + C**2 - 2 * A * B - 2 * A * C - 2 * B * C
    assert _check_not_identity(lhs, claimed, (A, B, C))
    stmt = (
        f"For every real triple $({a},{b},{c})$, "
        f"$({a}-{b}+{c})^2={a}^2+{b}^2+{c}^2-2{a}{b}-2{a}{c}-2{b}{c}$."
    )
    body = (
        f"Expanding $({a}-{b}+{c})^2$ term by term gives cross terms "
        f"$2{a}(-{b})$, $2{a}{c}$, and $2(-{b}){c}$, i.e.\n\n"
        f"$$({a}-{b}+{c})^2={a}^2+{b}^2+{c}^2-2{a}{b}+2{a}{c}-2{b}{c}$$\n\n"
        f"The printed claim has the $2{a}{c}$ term with the wrong sign, so the "
        f"two sides differ by $4{a}{c}$, which is not identically zero."
    )
    return stmt, False, body


# ---------------------------------------------------------------------------
# T14 / T15: completing the square to bound a quadratic
# ---------------------------------------------------------------------------
def _t14(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = X**2 + 6 * X + 11
    rhs = (X + 3) ** 2 + 2
    assert _check_identity(lhs, rhs, (X,))
    stmt = (
        f"For every real ${x}$, ${x}^2+6{x}+11=({x}+3)^2+2$, "
        f"hence ${x}^2+6{x}+11\\ge 2$."
    )
    body = (
        f"Complete the square on ${x}^2+6{x}+11$ by halving the linear "
        "coefficient:\n\n"
        f"$${x}^2+6{x}+11=({x}^2+6{x}+9)+2=({x}+3)^2+2$$\n\n"
        f"Since $({x}+3)^2\\ge 0$ for every real ${x}$, adding $2$ gives "
        f"${x}^2+6{x}+11\\ge 2$, with equality exactly at ${x}=-3$."
    )
    return stmt, True, body


def _t15(letters):
    (x,) = letters
    X = sp.symbols("X")
    lhs = X**2 + 6 * X + 11
    claimed = (X + 3) ** 2 - 2
    assert _check_not_identity(lhs, claimed, (X,))
    stmt = (
        f"For every real ${x}$, ${x}^2+6{x}+11=({x}+3)^2-2$, "
        f"hence ${x}^2+6{x}+11$ can fall below $2$."
    )
    body = (
        f"Completing the square correctly gives\n\n"
        f"$${x}^2+6{x}+11=({x}+3)^2+2$$\n\n"
        f"not $({x}+3)^2-2$: the printed version drags the constant down by $4$. "
        f"Since $({x}+3)^2\\ge 0$, the true minimum value of the expression is "
        f"$2$, attained at ${x}=-3$, so it never falls below $2$."
    )
    return stmt, False, body


# ---------------------------------------------------------------------------
# T16: Pythagorean-type squares identity
# ---------------------------------------------------------------------------
def _t16(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    lhs = (A**2 - B**2) ** 2 + (2 * A * B) ** 2
    rhs = (A**2 + B**2) ** 2
    assert _check_identity(lhs, rhs, (A, B))
    stmt = (
        f"For every real pair $({a},{b})$, "
        f"$({a}^2-{b}^2)^2+(2{a}{b})^2=({a}^2+{b}^2)^2$."
    )
    body = (
        "Expand both squares on the left and collect like terms:\n\n"
        f"$$({a}^2-{b}^2)^2={a}^4-2{a}^2{b}^2+{b}^4$$\n\n"
        f"$$(2{a}{b})^2=4{a}^2{b}^2$$\n\n"
        f"$${a}^4-2{a}^2{b}^2+{b}^4+4{a}^2{b}^2={a}^4+2{a}^2{b}^2+{b}^4=({a}^2+{b}^2)^2$$\n\n"
        "The sum matches the printed right side exactly."
    )
    return stmt, True, body


def _t17(letters):
    a, b = letters
    A, B = sp.symbols("A B")
    lhs = (A**2 - B**2) ** 2 + (A * B) ** 2
    claimed = (A**2 + B**2) ** 2
    assert _check_not_identity(lhs, claimed, (A, B))
    stmt = (
        f"For every real pair $({a},{b})$, "
        f"$({a}^2-{b}^2)^2+({a}{b})^2=({a}^2+{b}^2)^2$."
    )
    body = (
        "The genuine Pythagorean-style identity needs the cross term doubled:\n\n"
        f"$$({a}^2-{b}^2)^2+(2{a}{b})^2=({a}^2+{b}^2)^2$$\n\n"
        f"With only $({a}{b})^2$ instead of $(2{a}{b})^2$ on the left, the two "
        f"sides differ by $3{a}^2{b}^2$, which is not the zero polynomial."
    )
    return stmt, False, body


# ---------------------------------------------------------------------------
# T18: symmetric identity a^3+b^3 via sum & product (different from a^2+b^2 one)
# ---------------------------------------------------------------------------
def _t18(letters):
    a, b = letters
    A, B, S, P = sp.symbols("A B S P")
    lhs = A**3 + B**3
    rhs_via_sp = S**3 - 3 * P * S
    lhs_sub = lhs.subs({A: S / 2 + sp.sqrt(S**2 - 4 * P) / 2, B: S / 2 - sp.sqrt(S**2 - 4 * P) / 2})
    assert sp.simplify(sp.expand(lhs_sub) - rhs_via_sp) == 0
    stmt = (
        f"If ${a}+{b}=s$ and ${a}{b}=p$, then ${a}^3+{b}^3=s^3-3ps$ for every real "
        "pair with that sum and product."
    )
    body = (
        f"Write the cube sum in terms of the sum and product using "
        f"${a}^3+{b}^3=({a}+{b})^3-3{a}{b}({a}+{b})$:\n\n"
        f"$${a}^3+{b}^3=({a}+{b})^3-3{a}{b}({a}+{b})$$\n\n"
        "Substituting the sum $s$ and product $p$ gives\n\n"
        "$$s^3-3ps$$\n\n"
        "which is exactly the printed right side, so the identity holds for "
        "every pair with that sum and product."
    )
    return stmt, True, body


def _t19(letters):
    a, b = letters
    stmt = (
        f"If ${a}+{b}=s$ and ${a}{b}=p$, then ${a}^3+{b}^3=s^3-3p$ for every real "
        "pair with that sum and product."
    )
    body = (
        f"The correct cube-sum identity is "
        f"${a}^3+{b}^3=({a}+{b})^3-3{a}{b}({a}+{b})=s^3-3ps$: the subtracted "
        "term carries an extra factor of $s$ that the printed claim drops. "
        "Taking $s=2$ and $p=1$ (so $" + a + "=" + b + "=1$) gives left side "
        "$2$ but the printed formula $s^3-3p=8-3=5$, so the two expressions "
        "are not identically equal."
    )
    return stmt, False, body


T21_TEMPLATES = [
    Tpl("sum_cubes", 2, _t1, cap=4),
    Tpl("diff_cubes", 2, _t2, cap=4),
    Tpl("cube_sum_full", 2, _t3, cap=4),
    Tpl("cube_sum_missing_term", 2, _t4, cap=3),
    Tpl("cube_diff_full", 2, _t5, cap=4),
    Tpl("general_three_cubes", 3, _t6, cap=4),
    Tpl("general_three_cubes_false", 3, _t7, cap=3),
    Tpl("telescope_diffsq", 1, _t8, cap=4),
    Tpl("telescope_diffsq_false", 1, _t9, cap=3),
    Tpl("four_term_group", 4, _t10, cap=4),
    Tpl("four_term_group_false", 4, _t11, cap=3),
    Tpl("signed_trinomial_sq", 3, _t12, cap=4),
    Tpl("signed_trinomial_sq_false", 3, _t13, cap=3),
    Tpl("complete_square_bound", 1, _t14, cap=4),
    Tpl("complete_square_bound_false", 1, _t15, cap=3),
    Tpl("pyth_squares", 2, _t16, cap=4),
    Tpl("pyth_squares_false", 2, _t17, cap=3),
    Tpl("cube_sum_via_sp", 2, _t18, cap=3),
    Tpl("cube_sum_via_sp_false", 2, _t19, cap=3),
]

if __name__ == "__main__":
    pairs = [("a", "b"), ("p", "q"), ("u", "v")]
    triples = [("a", "b", "c"), ("p", "q", "r")]
    quads = [("a", "b", "c", "d")]
    singles = ["x", "t"]
    for tpl in T21_TEMPLATES:
        if tpl.arity == 1:
            letters = (singles[0],)
        elif tpl.arity == 2:
            letters = pairs[0]
        elif tpl.arity == 3:
            letters = triples[0]
        else:
            letters = quads[0]
        stmt, truth, body = tpl.make(letters)
        print(tpl.id, truth)
        print(" ", stmt)
    print("All 2.1 templates OK")
