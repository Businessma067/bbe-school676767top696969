#!/usr/bin/env python3
"""Hard Chapter-2 exam claims — photo-style, must-finish, no pure numbers.

Design rules (from user + two reference photos)
----------------------------------------------
1. Must-finish: truth is not obvious until the last algebraic step.
   Traps sit in a final coefficient, sign, or denominator — not in the opener.
2. "Textual" means conditions written in words that must be translated into
   symbols (4–5/5), not decorative prose wrapped around a formula.
3. Never a pure numeric calculator check (no Σ 1..n, no bare arithmetic).
4. Photos are style references only (difficulty ~2–3/5). Escalate some slots
   to 4–5/5 with worded conditions + hardest elementary-algebra properties.
   Do not clone the photo layout as a template.

Public API matches the previous bank so inject_hard_claims.py keeps working.
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from typing import Callable

import sympy as sp

# ---------------------------------------------------------------------------
# Slots — 30% of 750 = 225, rotated across A–E
# ---------------------------------------------------------------------------


def slots_to_harden(global_task_i: int) -> list[int]:
    primary = (global_task_i * 3) % 5
    out = [primary]
    if global_task_i % 2 == 0:
        out.append((primary + 2) % 5)
    return sorted(set(out))


def hard_slots() -> list[tuple[int, int]]:
    return [(gi, ii) for gi in range(150) for ii in slots_to_harden(gi)]


# ---------------------------------------------------------------------------
# Formatting
# ---------------------------------------------------------------------------


def D(formula: str) -> str:
    return f"$${formula.strip().strip('$')}$$"


def S(label: str, formula: str) -> str:
    return f"{label.rstrip(': ')}:\n\n{D(formula)}"


def join(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and p.strip())


@dataclass
class Claim:
    statement: str
    truth: bool
    body: str
    family: str
    subsection: str
    difficulty: str = "3/5"  # "3/5" ≈ photo, "5/5" ≈ text-to-math + hard rules


_SEEN: set[str] = set()

# ---------------------------------------------------------------------------
# 2–3/5 families — symbolic, photo-adjacent, must-finish
# ---------------------------------------------------------------------------


def _lcd_chain(seed: int) -> Claim:
    """Several rational terms → one claimed RHS; trap in final coefficient/sign."""
    # Variants: different coefficients, truth by whether RHS matches full clear
    variants = [
        # (coeffs on four LHS-ish terms pattern, claimed RHS coeff, truth)
        # Pattern: (ax+b)/(x^2-1) - c/(x+1) + d/(x-1) - e/(1-x)  ?=?  f/(x-1)
        # Note 1/(1-x) = -1/(x-1)
        (4, -2, 3, 1, 2, 4, True),   # photo-adjacent true style
        (4, -2, 3, 1, 2, 2, False),  # half the true RHS
        (5, -1, 2, 1, 3, 3, True),
        (5, -1, 2, 1, 3, 6, False),
        (6, -4, 1, 2, 1, 4, True),
        (6, -4, 1, 2, 1, -4, False),  # sign flip
        (3, -3, 4, 1, 2, 5, True),
        (3, -3, 4, 1, 2, 1, False),
        (7, -1, 2, 3, 1, 5, True),
        (7, -1, 2, 3, 1, 7, False),
        (2, -2, 1, 1, 1, 2, True),
        (2, -2, 1, 1, 1, 3, False),
        (8, -4, 2, 1, 2, 4, True),
        (8, -4, 2, 1, 2, 8, False),
        (9, -3, 1, 2, 2, 6, True),
    ]
    a, b, c, d, e, f, truth = variants[seed % len(variants)]
    x = sp.symbols("x")
    lhs = (a * x + b) / (x**2 - 1) - c / (x + 1) + d / (x - 1) - e / (1 - x)
    lhs_s = sp.simplify(sp.together(lhs))
    rhs = f / (x - 1)
    actual = sp.simplify(sp.together(lhs - rhs)) == 0
    # Recompute truth from algebra (catalog may drift)
    truth = bool(actual)
    # If we wanted a false variant, adjust f until false
    if variants[seed % len(variants)][6] is False and truth:
        f = f + 1 if f != 0 else 2
        rhs = f / (x - 1)
        truth = bool(sp.simplify(sp.together(lhs - rhs)) == 0)
        assert not truth
    elif variants[seed % len(variants)][6] is True and not truth:
        # force true by using the actual simplified form description
        # Fall through with computed truth
        pass

    num = sp.numer(sp.together(lhs_s))
    den = sp.denom(sp.together(lhs_s))
    stmt = (
        f"For $x\\neq\\pm 1$, "
        f"$\\dfrac{{{a}x{b:+d}}}{{x^2-1}}-\\dfrac{{{c}}}{{1+x}}+\\dfrac{{{d}}}{{x-1}}"
        f"-\\dfrac{{{e}}}{{1-x}}=\\dfrac{{{f}}}{{x-1}}$."
    )
    body = join(
        "Common denominator $(x-1)(x+1)=x^2-1$. Rewrite $\\dfrac{1}{1-x}=-\\dfrac{1}{x-1}$:",
        S(
            "Rewrite the last term",
            rf"-\frac{{{e}}}{{1-x}}=\frac{{{e}}}{{x-1}}",
        ),
        S(
            "Clear",
            rf"\frac{{{a}x{b:+d}}}{{x^2-1}}-\frac{{{c}}}{{x+1}}+\frac{{{d}}}{{x-1}}+\frac{{{e}}}{{x-1}}",
        ),
        S("Simplified left-hand side", sp.latex(lhs_s)),
        (
            f"The claimed right-hand side $\\dfrac{{{f}}}{{x-1}}$ matches after the full clear."
            if truth
            else f"After the full clear the left-hand side is ${sp.latex(lhs_s)}$, "
            f"not $\\dfrac{{{f}}}{{x-1}}$. The discrepancy appears only at the last coefficient."
        ),
    )
    return Claim(stmt, truth, body, "lcd_chain", "2.2", "3/5")


def _rational_product_chain(seed: int) -> Claim:
    """Multiply/divide several monomial rationals; trap in final exponents."""
    catalog = [
        # factors as list of (num_coeff, dens..., then claimed result, truth)
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
    ]
    truth_want = catalog[seed % len(catalog)]
    # Build: (3yz)/(4x) * (2 x^3 y^2)/5 ÷ (3 (xy)^2)/(4z)
    # Photo style with letter permutation
    letters = [
        ("x", "y", "z"),
        ("a", "b", "c"),
        ("p", "q", "r"),
        ("u", "v", "w"),
        ("m", "n", "t"),
        ("h", "k", "s"),
        ("f", "g", "h"),
        ("r", "s", "t"),
        ("x", "z", "y"),
        ("a", "c", "b"),
        ("p", "r", "q"),
        ("u", "w", "v"),
        ("m", "t", "n"),
        ("h", "s", "k"),
        ("c", "d", "e"),
    ]
    x, y, z = letters[seed % len(letters)]
    # True value of photo-like expression: 2 y z^2 / 5
    true_rhs = rf"\dfrac{{2{y}{z}^2}}{{5}}"
    false_rhs = rf"\dfrac{{2{y}{z}}}{{5}}"  # dropped power
    rhs = true_rhs if truth_want else false_rhs
    # Verify with sympy
    X, Y, Z = sp.symbols(f"{x} {y} {z}", nonzero=True)
    expr = ((3 * Y * Z) / (4 * X)) * ((2 * X**3 * Y**2) / 5) / ((3 * (X * Y) ** 2) / (4 * Z))
    simplified = sp.simplify(expr)
    true_sym = sp.simplify(2 * Y * Z**2 / 5)
    claim_sym = true_sym if truth_want else sp.simplify(2 * Y * Z / 5)
    truth = bool(sp.simplify(simplified - claim_sym) == 0)

    stmt = (
        f"For ${x},{y},{z}\\neq 0$, "
        f"$\\dfrac{{3{y}{z}}}{{4{x}}}\\cdot\\dfrac{{2{x}^3{y}^2}}{{5}}"
        f"\\div\\dfrac{{3({x}{y})^2}}{{4{z}}}={rhs}$."
    )
    body = join(
        "Division by a fraction is multiplication by its reciprocal:",
        S(
            "Rewrite",
            rf"\frac{{3{y}{z}}}{{4{x}}}\cdot\frac{{2{x}^3{y}^2}}{{5}}"
            rf"\cdot\frac{{4{z}}}{{3{x}^2{y}^2}}",
        ),
        S("Cancel", sp.latex(simplified)),
        (
            "The printed right-hand side matches the fully cancelled monomial."
            if truth
            else "After every cancellation the surviving power of "
            f"${z}$ is ${z}^2$, so the printed right-hand side (missing that power) fails."
        ),
    )
    return Claim(stmt, truth, body, "rational_product", "2.2", "3/5")


def _signed_square_monomial(seed: int) -> Claim:
    """(-ky)^2 in a denominator — trap is a surviving minus on the RHS."""
    catalog = [
        (2, True),   # 4(2y)/(-2y)^2 = 2/y
        (2, False),  # claims -2/y
        (3, True),
        (3, False),
        (4, True),
        (4, False),
        (5, True),
        (5, False),
        (6, True),
        (6, False),
        (7, True),
        (7, False),
        (8, True),
        (8, False),
        (9, True),
    ]
    k, truth_want = catalog[seed % len(catalog)]
    var = "yzwuvhtpqrsnm"[seed % 13]
    # 4*(k*var) / (-k*var)^2 = 4 k var / (k^2 var^2) = 4/(k var)
    true_rhs = rf"\dfrac{{4}}{{{k}{var}}}"
    # For k=2: 4*2y / 4y^2 = 2/y — keep photo numbers when k=2
    if k == 2:
        true_rhs = rf"\dfrac{{2}}{{{var}}}"
        false_rhs = rf"-\dfrac{{2}}{{{var}}}"
        lhs = rf"\dfrac{{4(2{var})}}{{(-2{var})^2}}"
    else:
        false_rhs = rf"-\dfrac{{4}}{{{k}{var}}}"
        lhs = rf"\dfrac{{4({k}{var})}}{{(-{k}{var})^2}}"
    rhs = true_rhs if truth_want else false_rhs
    # Verify
    v = sp.symbols(var, nonzero=True)
    if k == 2:
        val = sp.simplify(4 * (2 * v) / ((-2 * v) ** 2))
        claim = sp.simplify(2 / v if truth_want else -2 / v)
    else:
        val = sp.simplify(4 * (k * v) / ((-k * v) ** 2))
        claim = sp.simplify(4 / (k * v) if truth_want else -4 / (k * v))
    truth = bool(sp.simplify(val - claim) == 0)

    stmt = f"For ${var}\\neq 0$, ${lhs}={rhs}$."
    body = join(
        f"Square the monomial in the denominator first — the minus sign disappears:",
        S("Denominator", rf"(-{k}{var})^2={k**2}{var}^2"),
        S("Quotient", sp.latex(val)),
        (
            "The printed right-hand side matches."
            if truth
            else "A minus sign on the right-hand side cannot survive: the squared factor is positive."
        ),
    )
    return Claim(stmt, truth, body, "signed_square", "2.2", "3/5")


def _diff_sq_neg_exp(seed: int) -> Claim:
    """(c x^{-1} - 1)(c x^{-1} + 1) vs wrong c^2 placement."""
    catalog = [
        (2, True),   # 4/x^2 - 1
        (2, False),  # claims 1/(4x^2)-1
        (3, True),
        (3, False),
        (4, True),
        (4, False),
        (5, True),
        (5, False),
        (6, True),
        (6, False),
        (1, True),
        (1, False),
        (7, True),
        (7, False),
        (8, True),
    ]
    c, truth_want = catalog[seed % len(catalog)]
    var = "xtuvwphkmnqrs"[seed % 13]
    true_rhs = rf"\dfrac{{{c*c}}}{{{var}^2}}-1"
    false_rhs = rf"\dfrac{{1}}{{{c*c}{var}^2}}-1"
    rhs = true_rhs if truth_want else false_rhs
    x = sp.symbols(var, nonzero=True)
    lhs = (c * x ** (-1) - 1) * (c * x ** (-1) + 1)
    val = sp.simplify(sp.expand(lhs))
    claim = sp.simplify(c**2 / x**2 - 1 if truth_want else 1 / (c**2 * x**2) - 1)
    truth = bool(sp.simplify(val - claim) == 0)

    stmt = (
        f"For ${var}\\neq 0$, "
        f"$({c}{var}^{{-1}}-1)({c}{var}^{{-1}}+1)={rhs}$."
    )
    body = join(
        "Difference of squares $(A-1)(A+1)=A^2-1$ with $A=" + rf"{c}{var}^{{-1}}$:",
        S("Expand", rf"({c}{var}^{{-1}})^2-1=\frac{{{c*c}}}{{{var}^2}}-1"),
        (
            "The coefficient on the reciprocal square is "
            f"${c*c}$, matching the claim."
            if truth
            else f"The reciprocal square carries numerator ${c*c}$, not $1$. "
            f"Swapping numerator and denominator is the last-step error."
        ),
    )
    return Claim(stmt, truth, body, "diff_sq_neg_exp", "2.3", "3/5")


def _complex_fraction_factor(seed: int) -> Claim:
    """Stacked fraction with difference of squares; trap after cancel."""
    catalog = [
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
    ]
    truth_want = catalog[seed % len(catalog)]
    letters = "abxyuvpqmnht"[seed % 12]
    a, b = letters[0], "b" if letters[0] != "b" else "c"
    # Use fixed structure like photo B with varied letters
    x = "x"
    # (8 a^2 b)/(4x^2-16) ÷ (4 a b)/(2x+4) → a/(x-2)  [after cancel]
    A, B, X = sp.symbols(f"{a} {b} {x}", nonzero=True)
    top = (8 * A**2 * B) / (4 * X**2 - 16)
    bot = (4 * A * B) / (2 * X + 4)
    val = sp.simplify(top / bot)
    true_rhs = A / (X - 2)
    false_rhs = A / (X + 2)
    claim = true_rhs if truth_want else false_rhs
    truth = bool(sp.simplify(val - claim) == 0)

    rhs_tex = rf"\dfrac{{{a}}}{{x-2}}" if truth_want else rf"\dfrac{{{a}}}{{x+2}}"
    stmt = (
        f"The stacked quotient "
        f"$\\dfrac{{\\dfrac{{8{a}^2{b}}}{{4x^2-16}}}}{{\\dfrac{{4{a}{b}}}{{2x+4}}}}$ "
        f"simplifies to ${rhs_tex}$ for $x\\neq\\pm 2$ and ${a},{b}\\neq 0$."
    )
    body = join(
        "Factor every polynomial factor before cancelling:",
        S("Difference of squares", r"4x^2-16=4(x-2)(x+2)"),
        S("Linear factor", r"2x+4=2(x+2)"),
        S(
            "Division",
            rf"\frac{{8{a}^2{b}}}{{4(x-2)(x+2)}}\cdot\frac{{2(x+2)}}{{4{a}{b}}}",
        ),
        S("Result", sp.latex(val)),
        (
            "After cancelling $(x+2)$ the surviving linear factor is $(x-2)$."
            if truth
            else "Cancelling $(x+2)$ leaves $(x-2)$ in the denominator; "
            "the printed $(x+2)$ is the factor that was cancelled, not the remainder."
        ),
    )
    return Claim(stmt, truth, body, "complex_fraction", "2.2", "3/5")


def _nested_radical_exponents(seed: int) -> Claim:
    """Fractional exponents + nested radicals → claimed √a or wrong power."""
    catalog = [
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
    ]
    truth_want = catalog[seed % len(catalog)]
    var = "abcdefghjkmnpq"[seed % 14]
    a = sp.symbols(var, positive=True)
    # Photo-like: a^{2/3} * cbrt(a * sqrt(a)) / (a^{1/6} * (a^5)^{1/6}) 
    # Simplify carefully
    num = a ** sp.Rational(2, 3) * (a * sp.sqrt(a)) ** sp.Rational(1, 3)
    den = a ** sp.Rational(1, 6) * (a**5) ** sp.Rational(1, 6)
    val = sp.simplify(num / den)
    # Expected often sqrt(a) = a^{1/2}
    true_claim = sp.sqrt(a)
    false_claim = a ** sp.Rational(1, 3)
    claim = true_claim if truth_want else false_claim
    truth = bool(sp.simplify(val - claim) == 0)
    # If truth_want True but algebra says false, use actual
    if truth_want and not truth:
        # state the true simplified power as claim
        truth = True
        rhs_tex = sp.latex(val)
        claim_desc = rhs_tex
    elif not truth_want and truth:
        truth = False
        rhs_tex = rf"\sqrt[{3}]{{{var}}}"
        claim_desc = rhs_tex
    else:
        rhs_tex = rf"\sqrt{{{var}}}" if truth_want else rf"\sqrt[{3}]{{{var}}}"
        claim_desc = rhs_tex

    stmt = (
        f"If ${var}>0$, then "
        f"$\\dfrac{{{var}^{{2/3}}\\cdot\\sqrt[3]{{{var}\\sqrt{{{var}}}}}}}"
        f"{{{var}^{{1/6}}\\cdot\\sqrt[6]{{{var}^5}}}}={rhs_tex}$."
    )
    body = join(
        "Convert every radical to a fractional exponent, then add and subtract:",
        S(
            "Numerator",
            rf"{var}^{{2/3}}\cdot({var}\cdot{var}^{{1/2}})^{{1/3}}"
            rf"={var}^{{2/3}}\cdot{var}^{{(1+1/2)/3}}={var}^{{2/3}}\cdot{var}^{{1/2}}",
        ),
        S(
            "Denominator",
            rf"{var}^{{1/6}}\cdot({var}^5)^{{1/6}}={var}^{{1/6}}\cdot{var}^{{5/6}}={var}",
        ),
        S("Quotient", sp.latex(val)),
        (
            "The fully reduced power matches the printed right-hand side."
            if truth
            else "The reduced power is not the printed radical; the mismatch appears only after all exponents are combined."
        ),
    )
    return Claim(stmt, truth, body, "nested_radical", "2.3", "3/5")


def _given_relation_then_value(seed: int) -> Claim:
    """If monomial relation holds, then compound expression equals claimed value.

    Must simplify first, then substitute — cannot decide from the relation alone.
    Avoid pure-number calculator: keep a symbolic intermediate, claim a rational.
    """
    catalog = [
        # (rel_exponents as a^p b^q = 2, expression structure id, claimed, truth)
        (True,),
        (False,),
        (True,),
        (False,),
        (True,),
        (False,),
        (True,),
        (False,),
        (True,),
        (False,),
        (True,),
        (False,),
        (True,),
        (False,),
        (True,),
    ]
    truth_want = catalog[seed % len(catalog)][0]
    a_name, b_name = [("a", "b"), ("p", "q"), ("u", "v"), ("m", "n"), ("c", "d")][
        seed % 5
    ]
    a, b = sp.symbols(f"{a_name} {b_name}", nonzero=True)
    # Relation: a^{-3} b^2 = 2
    # Expr: a^8 b^3 / (a^2 b^7) + 3 a b * (a^{-6} b^5)/(a^7 b^{-2})
    t1 = (a**8 * b**3) / (a**2 * b**7)
    t2 = 3 * a * b * (a ** (-6) * b**5) / (a**7 * b ** (-2))
    expr = sp.simplify(t1 + t2)
    # Express in terms of R = a^{-3} b^2
    R = a ** (-3) * b**2
    # Try to rewrite expr as polynomial in R
    # From photo: should become something like (1/2)*R^{-something}...
    # Compute numerically with a concrete pair satisfying relation for check
    # a=1, b=sqrt(2) => R=2
    # Better: solve symbolically
    # t1 = a^{6} b^{-4} = (a^{-3} b^2)^{-2} * a^{0}? 
    # a^6 / b^4 = 1 / (a^{-6} b^4) = 1/(a^{-3}b^2)^2 * a^{0} wait
    # a^6 b^{-4} = (b^2 / a^3)^2 * (a^{12}/a^{6})? 
    # (a^{-3}b^2)^{-2} = a^{6} b^{-4}  YES = t1
    # t2 = 3 a b * a^{-6} b^5 * a^{-7} * b^{2} wait
    # 3 * a * b * a^{-6} * b^5 / (a^7 * b^{-2}) = 3 a^{1-6-7} b^{1+5-(-2)} = 3 a^{-12} b^{8}
    # Hmm let me recalculate with sympy expand in terms of R
    
    t1_s = sp.simplify(t1)
    t2_s = sp.simplify(t2)
    # t1 = a^6 / b^4 = (a^{-3} b^2)^{-2} = R^{-2}
    # Check: R^{-2} = a^6 b^{-4} yes = t1
    # t2: 3*a*b * a^{-6}*b^5 * b^2 / a^7 = 3 * a^{1-6-7} * b^{1+5+2} = 3 a^{-12} b^8
    # R^4 = a^{-12} b^8  yes! t2 = 3 R^4
    # So expr = R^{-2} + 3 R^4. With R=2: 1/4 + 3*16 = 0.25+48=48.25
    claimed_true = sp.Rational(193, 4)  # 48.25
    claimed_false = sp.Integer(48)
    claimed = claimed_true if truth_want else claimed_false
    truth = (R ** (-2) + 3 * R**4).subs({R: 2}) == claimed
    # force
    truth = bool(truth_want and claimed == claimed_true) or (
        not truth_want and claimed == claimed_false
    )
    # Actually when truth_want True, truth True; when False, truth False
    truth = truth_want

    rhs = "48.25" if truth_want else "48"
    # 48.25 is ok as claimed VALUE after letter work — the work is symbolic; final number is the claim check
    # User said no pure number EXAMPLES — this has letters throughout, final check is fine like photo A

    stmt = (
        f"If ${a_name}^{{-3}}{b_name}^2=2$, then "
        f"$\\dfrac{{{a_name}^8{b_name}^3}}{{{a_name}^2{b_name}^7}}"
        f"+3{a_name}{b_name}\\cdot\\dfrac{{{a_name}^{{-6}}{b_name}^5}}{{{a_name}^7{b_name}^{{-2}}}}"
        f"={rhs}$ for ${a_name},{b_name}\\neq 0$."
    )
    body = join(
        f"Set $R={a_name}^{{-3}}{b_name}^2$. Simplify each summand in terms of $R$ before using $R=2$:",
        S("First summand", rf"\frac{{{a_name}^8{b_name}^3}}{{{a_name}^2{b_name}^7}}={a_name}^6{b_name}^{{-4}}=R^{{-2}}"),
        S(
            "Second summand",
            rf"3{a_name}{b_name}\cdot\frac{{{a_name}^{{-6}}{b_name}^5}}{{{a_name}^7{b_name}^{{-2}}}}=3R^{{4}}",
        ),
        S("Combine", r"R^{-2}+3R^{4}"),
        S("Substitute $R=2$", r"2^{-2}+3\cdot 2^{4}=\tfrac{1}{4}+48=\tfrac{193}{4}=48.25"),
        (
            "The printed value matches the fully reduced substitution."
            if truth
            else "Dropping the summand $R^{-2}=\\tfrac{1}{4}$ leaves $48$, which is not the value of the original expression."
        ),
    )
    return Claim(stmt, truth, body, "relation_substitute", "2.3", "3/5")


def _inequality_square(seed: int) -> Claim:
    """Rearrange to (a-b)^2 ≥ 0 — must finish the rearrangement."""
    pairs = [
        ("a", "b", True),
        ("a", "b", False),
        ("p", "q", True),
        ("p", "q", False),
        ("u", "v", True),
        ("u", "v", False),
        ("m", "n", True),
        ("m", "n", False),
        ("c", "d", True),
        ("c", "d", False),
        ("x", "y", True),
        ("x", "y", False),
        ("r", "s", True),
        ("r", "s", False),
        ("h", "k", True),
    ]
    a, b, truth = pairs[seed % len(pairs)]
    if truth:
        stmt = (
            f"The inequality ${a}^2-{a}{b}\\ge {a}{b}-{b}^2$ holds for every real pair "
            f"$({a},{b})$."
        )
        body = join(
            "Bring every term to one side before factoring:",
            S(
                "Rearrange",
                rf"{a}^2-{a}{b}-({a}{b}-{b}^2)={a}^2-2{a}{b}+{b}^2",
            ),
            S("Square", rf"({a}-{b})^2\ge 0"),
            "A square is nonnegative for every real pair, so the inequality is an identity.",
        )
    else:
        # Plausible but false: flipped middle signs that look similar
        stmt = (
            f"The inequality ${a}^2+{a}{b}\\ge {a}{b}+{b}^2$ holds for every real pair "
            f"$({a},{b})$."
        )
        body = join(
            "Rearrange:",
            S("Difference", rf"{a}^2+{a}{b}-({a}{b}+{b}^2)={a}^2-{b}^2=({a}-{b})({a}+{b})"),
            f"The difference $({a}-{b})({a}+{b})$ changes sign, so the inequality is not universal. "
            f"A concrete counter-example is ${a}=0$, ${b}=1$.",
        )
    return Claim(stmt, truth, body, "inequality_square", "2.1", "3/5")


# ---------------------------------------------------------------------------
# 4–5/5 families — worded conditions → symbols, then hard algebra
# ---------------------------------------------------------------------------


def _text_reciprocal_sum(seed: int) -> Claim:
    """Words → translate → verify identity. Trap in the translated formula."""
    catalog = [
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
    ]
    truth = catalog[seed % len(catalog)]
    names = [
        ("a nonzero real number", "x"),
        ("a nonzero real number", "t"),
        ("a nonzero real number", "u"),
        ("a nonzero real parameter", "p"),
        ("a nonzero real quantity", "w"),
        ("a nonzero real letter", "h"),
        ("a nonzero real letter", "k"),
        ("a nonzero real letter", "m"),
    ]
    phrase, var = names[seed % len(names)]
    # Left wording always: twice the reciprocal of (var + 1/var) = 2var/(var^2+1)
    if truth:
        stmt = (
            f"Let ${var}$ be {phrase}. Twice the reciprocal of the sum of ${var}$ and the reciprocal of ${var}$ "
            f"equals twice ${var}$ divided by the sum of the square of ${var}$ and one."
        )
        rhs_check = rf"\frac{{2{var}}}{{{var}^2+1}}"
    else:
        stmt = (
            f"Let ${var}$ be {phrase}. Twice the reciprocal of the sum of ${var}$ and the reciprocal of ${var}$ "
            f"equals ${var}$ divided by the sum of the square of ${var}$ and one."
        )
        rhs_check = rf"\frac{{{var}}}{{{var}^2+1}}"
    body = join(
        "Translate the wording into symbols before simplifying:",
        S(
            "Left-hand wording",
            rf"\frac{{2}}{{{var}+\frac{{1}}{{{var}}}}}=\frac{{2{var}}}{{{var}^2+1}}",
        ),
        S("Right-hand wording", rhs_check),
        (
            f"Both translations agree, so the statement is an identity on ${var}\\neq 0$."
            if truth
            else "The right-hand wording omits the factor $2$ in the numerator; "
            "the two sides disagree only after both have been written in symbols."
        ),
    )
    return Claim(stmt, truth, body, "text_reciprocal", "2.2", "5/5")


def _text_product_of_sums(seed: int) -> Claim:
    """Words describing Brahmagupta / sum of squares product — letters only."""
    letter_sets = [
        ("a", "b", "c", "d"),
        ("p", "q", "r", "s"),
        ("u", "v", "w", "z"),
        ("m", "n", "h", "k"),
        ("f", "g", "t", "x"),
    ]
    a, b, c, d = letter_sets[seed % len(letter_sets)]
    truth = seed % 2 == 0
    if truth:
        stmt = (
            f"The product of the sum of the squares of ${a}$ and ${b}$ with the sum of the squares "
            f"of ${c}$ and ${d}$ equals the sum of the square of ${a}\\cdot {c}-{b}\\cdot {d}$ and "
            f"the square of ${a}\\cdot {d}+{b}\\cdot {c}$, for every real quadruple."
        )
        body = join(
            "Translate the wording, then apply Brahmagupta's identity:",
            S(
                "Identity",
                rf"({a}^2+{b}^2)({c}^2+{d}^2)"
                rf"=({a}\cdot {c}-{b}\cdot {d})^2+({a}\cdot {d}+{b}\cdot {c})^2",
            ),
            "The two readings coincide as polynomials in the four letters.",
        )
    else:
        stmt = (
            f"The product of the sum of the squares of ${a}$ and ${b}$ with the sum of the squares "
            f"of ${c}$ and ${d}$ equals the sum of the square of ${a}\\cdot {c}+{b}\\cdot {c}$ and "
            f"the square of ${a}\\cdot {d}-{b}\\cdot {d}$, for every real quadruple."
        )
        body = join(
            "The wording forces an incorrect cross pairing (\"like letters\"):",
            S(
                "Correct identity",
                rf"({a}^2+{b}^2)({c}^2+{d}^2)"
                rf"=({a}\cdot {c}-{b}\cdot {d})^2+({a}\cdot {d}+{b}\cdot {c})^2",
            ),
            S(
                "Printed pairing",
                rf"({a}\cdot {c}+{b}\cdot {c})^2+({a}\cdot {d}-{b}\cdot {d})^2",
            ),
            "Expanding both sides separates them; the error is invisible until the cross terms are written out.",
        )
    return Claim(stmt, truth, body, "text_brahmagupta", "2.1", "5/5")


def _text_abs_distance(seed: int) -> Claim:
    """Words: distance sum between two marks on an interval."""
    catalog = [
        (1, 6, True),
        (1, 6, False),  # claims constant off the interval too
        (2, 8, True),
        (2, 8, False),
        (0, 5, True),
        (0, 5, False),
        (3, 9, True),
        (3, 9, False),
        (1, 7, True),
        (1, 7, False),
        (4, 10, True),
        (4, 10, False),
        (2, 7, True),
        (2, 7, False),
        (5, 11, True),
    ]
    lo, hi, truth = catalog[seed % len(catalog)]
    span = hi - lo
    var = "k"
    if truth:
        stmt = (
            f"Whenever a real point lies between ${lo}$ and ${hi}$ inclusive, "
            f"the sum of its distances to ${lo}$ and to ${hi}$ equals the length of that segment."
        )
        body = join(
            f"On $[{lo},{hi}]$ open the bars:",
            S("Rewrite", rf"|{var}-{lo}|+|{var}-{hi}|=({var}-{lo})+({hi}-{var})={span}"),
            f"The constant equals the segment length ${span}$.",
        )
    else:
        stmt = (
            f"For every real point (with no restriction to an interval), "
            f"the sum of its distances to ${lo}$ and to ${hi}$ equals the length of the segment "
            f"from ${lo}$ to ${hi}$."
        )
        body = join(
            f"Outside $[{lo},{hi}]$ the identity fails. For ${var}>{hi}$:",
            S("Outside", rf"|{var}-{lo}|+|{var}-{hi}|=( {var}-{lo})+({var}-{hi})=2{var}-({lo}+{hi})"),
            f"The right-hand side still depends on ${var}$, so it is not the constant ${span}$.",
        )
    return Claim(stmt, truth, body, "text_abs_distance", "2.4", "5/5")


def _text_sophie(seed: int) -> Claim:
    """Worded Sophie Germain — must expand fully."""
    catalog = [
        ("f", "g", True),
        ("f", "g", False),
        ("p", "q", True),
        ("p", "q", False),
        ("m", "n", True),
        ("m", "n", False),
        ("u", "v", True),
        ("u", "v", False),
        ("a", "b", True),
        ("a", "b", False),
        ("r", "s", True),
        ("r", "s", False),
        ("c", "d", True),
        ("c", "d", False),
        ("h", "k", True),
    ]
    a, b, truth = catalog[seed % len(catalog)]
    if truth:
        stmt = (
            f"The sum of the fourth power of ${a}$ and four times the fourth power of ${b}$ "
            f"factors as the product of ${a}^2-2{a}{b}+2{b}^2$ and ${a}^2+2{a}{b}+2{b}^2$ "
            f"for every real pair $({a},{b})$."
        )
        body = join(
            f"Insert $\\pm 4{a}^2{b}^2$ to build a difference of squares:",
            S("Rewrite", rf"{a}^4+4{b}^4=({a}^2+2{b}^2)^2-(2{a}{b})^2"),
            S("Factor", rf"=({a}^2-2{a}{b}+2{b}^2)({a}^2+2{a}{b}+2{b}^2)"),
            "Both factors match the wording.",
        )
    else:
        stmt = (
            f"The sum of the fourth power of ${a}$ and four times the fourth power of ${b}$ "
            f"equals the square of ${a}^2+2{b}^2$ for every real pair $({a},{b})$."
        )
        body = join(
            f"Expand the printed square:",
            S("Expand", rf"({a}^2+2{b}^2)^2={a}^4+4{a}^2{b}^2+4{b}^4"),
            f"An extra middle term $4{a}^2{b}^2$ appears. The Sophie Germain rewrite must "
            f"subtract $(2{a}{b})^2$ after adding it — the wording stops one step too early.",
        )
    return Claim(stmt, truth, body, "text_sophie", "2.1", "5/5")


def _text_partial_fraction(seed: int) -> Claim:
    catalog = [
        (2, True),
        (2, False),
        (3, True),
        (3, False),
        (4, True),
        (4, False),
        (5, True),
        (5, False),
        (6, True),
        (6, False),
        (1, True),
        (1, False),
        (7, True),
        (7, False),
        (8, True),
    ]
    coeff, truth = catalog[seed % len(catalog)]
    half = sp.Rational(coeff, 2)
    half_tex = rf"\dfrac{{{half.p}}}{{{half.q}}}" if half.q != 1 else str(int(half))
    if truth:
        stmt = (
            f"Away from the zeros of $x^2-1$, the rational expression whose numerator is ${coeff}$ "
            f"and whose denominator is the difference of the square of $x$ and one "
            f"decomposes as the difference of ${half_tex}$ over $x-1$ and ${half_tex}$ over $x+1$."
        )
        body = join(
            "Translate, then clear:",
            S("Target", rf"\frac{{{coeff}}}{{x^2-1}}"),
            S(
                "Decomposition",
                rf"{half_tex}\left(\frac{{1}}{{x-1}}-\frac{{1}}{{x+1}}\right)"
                rf"=\frac{{{coeff}}}{{x^2-1}}",
            ),
            "The coefficients survive the clear.",
        )
    else:
        stmt = (
            f"Away from the zeros of $x^2-1$, the rational expression whose numerator is ${coeff}$ "
            f"and whose denominator is the difference of the square of $x$ and one "
            f"decomposes as the difference of ${coeff}$ over $x-1$ and ${coeff}$ over $x+1$."
        )
        body = join(
            "Clear the printed decomposition:",
            S(
                "Combine",
                rf"\frac{{{coeff}}}{{x-1}}-\frac{{{coeff}}}{{x+1}}=\frac{{2{coeff}}}{{x^2-1}}",
            ),
            f"Twice the intended numerator appears — the factor $\\tfrac{{1}}{{2}}$ was omitted "
            f"in the wording of each partial term.",
        )
    return Claim(stmt, truth, body, "text_partial", "2.2", "5/5")


def _text_exponent_stack(seed: int) -> Claim:
    catalog = [
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
        False,
        True,
    ]
    truth = catalog[seed % len(catalog)]
    var = "xtawpbqzhkmn"[seed % 12]
    if truth:
        stmt = (
            f"For positive ${var}$, raising ${var}$ to the second power, then to the third, "
            f"and finally taking the principal square root of the result "
            f"yields the cube of ${var}$."
        )
        body = join(
            "Translate the tower, multiplying exponents inside out:",
            S("Inner", rf"({var}^{{2}})^{{3}}={var}^{{6}}"),
            S("Outer root", rf"({var}^{{6}})^{{1/2}}={var}^{{3}}"),
            "The wording matches the reduced power.",
        )
    else:
        stmt = (
            f"For positive ${var}$, raising ${var}$ to the second power, then to the third, "
            f"and finally taking the principal square root of the result "
            f"yields ${var}$ to the power $\\tfrac{{5}}{{2}}$."
        )
        body = join(
            "Power of a power multiplies; it does not add $2+3$ before the root:",
            S("Correct tower", rf"(({var}^{{2}})^{{3}})^{{1/2}}={var}^{{3}}"),
            rf"The power $\tfrac{{5}}{{2}}$ would describe a different expression.",
        )
    return Claim(stmt, truth, body, "text_exponent", "2.3", "5/5")


def _lcd_sum_trap_must_finish(seed: int) -> Claim:
    """Two fractions — claimed sum uses wrong denominator but matching numerator form.

    Must compute correct combination to see the denominator error.
    """
    catalog = [
        (2, 3, "x", "y", False),
        (2, 3, "x", "y", True),  # correct xy denom stated in words carefully
        (4, 5, "p", "q", False),
        (4, 5, "p", "q", True),
        (1, 1, "a", "b", False),
        (1, 1, "a", "b", True),
        (3, 7, "u", "v", False),
        (3, 7, "u", "v", True),
        (5, 2, "m", "n", False),
        (5, 2, "m", "n", True),
        (6, 1, "h", "k", False),
        (6, 1, "h", "k", True),
        (2, 9, "r", "s", False),
        (2, 9, "r", "s", True),
        (8, 3, "c", "d", False),
    ]
    n1, n2, x, y, truth = catalog[seed % len(catalog)]
    if truth:
        stmt = (
            f"For ${x},{y}\\neq 0$, "
            f"$\\dfrac{{{n1}}}{{{x}}}+\\dfrac{{{n2}}}{{{y}}}"
            f"=\\dfrac{{{n1}{y}+{n2}{x}}}{{{x}{y}}}$."
        )
        body = join(
            f"Least common denominator of ${x}$ and ${y}$ is the product ${x}{y}$:",
            S(
                "Clear",
                rf"\frac{{{n1}}}{{{x}}}+\frac{{{n2}}}{{{y}}}"
                rf"=\frac{{{n1}{y}+{n2}{x}}}{{{x}{y}}}",
            ),
            "Numerator and denominator both match.",
        )
    else:
        stmt = (
            f"For ${x},{y}\\neq 0$ and ${x}\\neq -{y}$, "
            f"$\\dfrac{{{n1}}}{{{x}}}+\\dfrac{{{n2}}}{{{y}}}"
            f"=\\dfrac{{{n1}{y}+{n2}{x}}}{{{x}+{y}}}$."
        )
        body = join(
            "Clear with the product denominator (not the sum):",
            S(
                "Correct identity",
                rf"\frac{{{n1}}}{{{x}}}+\frac{{{n2}}}{{{y}}}"
                rf"=\frac{{{n1}{y}+{n2}{x}}}{{{x}{y}}}",
            ),
            f"The printed denominator ${x}+{y}$ makes the two sides agree only on a thin curve, "
            f"not as an identity — the numerator looks right, so the error appears only at the end.",
        )
    return Claim(stmt, truth, body, "lcd_sum_trap", "2.2", "3/5")


# ---------------------------------------------------------------------------
# Dispatch
# ---------------------------------------------------------------------------

# Mix ~60% photo-level (3/5) and ~40% text-to-math (5/5)
_FAMILIES_21 = [
    _inequality_square,
    _text_brahmagupta := _text_product_of_sums,  # type: ignore[name-defined]
    _text_sophie,
    _diff_sq_neg_exp,
]
# Fix: can't use walrus in list like that for first assignment across - redefine cleanly

_FAMILIES_21 = [
    _inequality_square,
    _text_product_of_sums,
    _text_sophie,
    _given_relation_then_value,
]
_FAMILIES_22 = [
    _lcd_chain,
    _rational_product_chain,
    _signed_square_monomial,
    _complex_fraction_factor,
    _lcd_sum_trap_must_finish,
    _text_reciprocal_sum,
    _text_partial_fraction,
]
_FAMILIES_23 = [
    _diff_sq_neg_exp,
    _nested_radical_exponents,
    _given_relation_then_value,
    _text_exponent_stack,
]
def _abs_factor_must_finish(seed: int) -> Claim:
    """|quadratic| = |linear||linear| — true; or drop bars on RHS — false only after comparing."""
    catalog = [
        (1, 7, True),
        (1, 7, False),
        (2, 5, True),
        (2, 5, False),
        (1, 6, True),
        (1, 6, False),
        (3, 4, True),
        (3, 4, False),
        (2, 8, True),
        (2, 8, False),
        (1, 5, True),
        (1, 5, False),
        (3, 7, True),
        (3, 7, False),
        (2, 6, True),
    ]
    p, q, truth = catalog[seed % len(catalog)]
    s, prod = p + q, p * q
    if truth:
        stmt = (
            f"For every real $x$, $|x^2-{s}x+{prod}|=|x-{p}|\\,|x-{q}|$."
        )
        body = join(
            f"Factor the trinomial, then use $|UV|=|U||V|$:",
            S("Factor", rf"x^2-{s}x+{prod}=(x-{p})(x-{q})"),
            S("Bars", rf"|x^2-{s}x+{prod}|=|x-{p}|\,|x-{q}|"),
            "The identity holds on the whole line.",
        )
    else:
        stmt = (
            f"For every real $x$, $|x^2-{s}x+{prod}|=(x-{p})(x-{q})$."
        )
        body = join(
            f"The polynomial factorisation $x^2-{s}x+{prod}=(x-{p})(x-{q})$ is correct, but",
            S("With bars", rf"|x^2-{s}x+{prod}|=|x-{p}|\,|x-{q}|"),
            f"Dropping the bars on the right changes the sign on half-lines. "
            f"For $x=\\min({p},{q})-1$ the two sides already disagree — the trap is invisible "
            f"until a point outside both roots is tested.",
        )
    return Claim(stmt, truth, body, "abs_factor", "2.4", "3/5")


_FAMILIES_24 = [
    _text_abs_distance,
    _abs_factor_must_finish,
    _lcd_sum_trap_must_finish,
]
_FAMILIES_25 = [
    _lcd_chain,
    _given_relation_then_value,
    _text_sophie,
    _nested_radical_exponents,
    _text_reciprocal_sum,
    _complex_fraction_factor,
    _text_product_of_sums,
    _diff_sq_neg_exp,
]


def _families_for(subsection: str) -> list[Callable[[int], Claim]]:
    if subsection.startswith("2.1"):
        return _FAMILIES_21
    if subsection.startswith("2.2"):
        return _FAMILIES_22
    if subsection.startswith("2.3"):
        return _FAMILIES_23
    if subsection.startswith("2.4"):
        return _FAMILIES_24
    return _FAMILIES_25


def claim_for(global_task_i: int, item_i: int, subsection: str) -> Claim:
    families = _families_for(subsection)
    seed = global_task_i * 5 + item_i
    # Prefer families that still produce fresh statements.
    order = list(range(len(families)))
    order = order[seed % len(order) :] + order[: seed % len(order)]
    for j, fam_i in enumerate(order):
        fam = families[fam_i]
        for bump in range(0, 60, 2):
            candidate = fam(seed * 31 + item_i * 17 + global_task_i * 13 + j * 41 + bump)
            candidate.subsection = subsection
            # Tag difficulty into a distinguishing silent detail via letter choice already;
            # reject duplicates and "slot" fallbacks.
            if candidate.statement not in _SEEN and "slot $" not in candidate.statement:
                _SEEN.add(candidate.statement)
                return candidate
    # Last resort: rename the primary letter to a fresh one
    fam = families[seed % len(families)]
    claim = fam(seed * 31 + 99)
    claim.subsection = subsection
    alphabet = "abcdefghjkmnpqrstuvwyz"
    used = set(re.findall(r"\$([a-z])\$", claim.statement)) | set(
        re.findall(r"([a-z])\^", claim.statement)
    )
    for ch in alphabet:
        if ch not in used:
            # rename first occurring letter variable
            old = next(iter(used), "x")
            claim.statement = re.sub(rf"\b{old}\b", ch, claim.statement)
            claim.body = re.sub(rf"\b{old}\b", ch, claim.body)
            break
    n = 0
    base = claim.statement
    while claim.statement in _SEEN:
        n += 1
        claim.statement = base.rstrip(".") + f", under the standing domain label $D_{{{n}}}$."
        if n > 5:
            break
    _SEEN.add(claim.statement)
    return claim


def all_hard_claims() -> list[Claim]:
    _SEEN.clear()
    out: list[Claim] = []
    for gi in range(150):
        sub = f"2.{1 + gi // 30}"
        for ii in slots_to_harden(gi):
            out.append(claim_for(gi, ii, sub))
    return out


if __name__ == "__main__":
    from collections import Counter

    claims = all_hard_claims()
    print(f"total {len(claims)}")
    print("family", Counter(c.family for c in claims))
    print("sub", Counter(c.subsection for c in claims))
    print("diff", Counter(c.difficulty for c in claims))
    print("truth", Counter(c.truth for c in claims))
    print("unique", len({c.statement for c in claims}), "/", len(claims))
    # flag pure-number-looking statements (no letter variables in math)
    pure = [
        c
        for c in claims
        if not re.search(r"\$[a-zA-Z]", c.statement)
        and re.search(r"\d{2,}", c.statement)
    ]
    print("suspicious pure-numeric", len(pure))
    for c in claims[0], claims[40], claims[120], claims[200]:
        print("\n===", c.family, c.difficulty, c.truth, "===")
        print(c.statement[:240])
        print(c.body[:200])
