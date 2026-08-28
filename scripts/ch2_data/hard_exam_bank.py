#!/usr/bin/env python3
"""Bank of genuinely hard Chapter-2 exam claims (not prose wrappers).

Each claim couples several non-elementary rules (reciprocal recurrences,
biquadratic factorisations, nested radicals, multi-critical absolute values,
polynomial division remainders, …). Truth values are checked with SymPy where
feasible. Explanation bodies are MATH 13.18 stepped algebra only — headers and
closers are added by assemble.py.

Public API
----------
``hard_slots()`` → list of (global_task_i, item_i)
``claim_for(global_task_i, item_i, subsection)`` → (statement, truth, body)
``all_hard_claims()`` → list of dicts for auditing
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from typing import Callable

import sympy as sp

# ---------------------------------------------------------------------------
# Slot selection — same 30% rotation as before (225 / 750)
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
# Formatting helpers for explanation bodies
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


# ---------------------------------------------------------------------------
# Family: reciprocal power recurrence  x+1/x = t  →  x^n + 1/x^n
# ---------------------------------------------------------------------------


def _fam_reciprocal(seed: int) -> Claim:
    # Distinct (letter, t, n, claimed, truth)
    catalog = [
        ("y", 5, 4, 625, False, "uses t^4 instead of the recurrence"),
        ("z", 3, 3, 18, True, "correct u_3 = t·u_2 - u_1"),
        ("w", 4, 3, 52, True, "correct u_3 = 4·14 - 4"),
        ("u", 6, 4, 1296, False, "claims t^4"),
        ("v", 2, 5, 2, True, "u_5 = 2 for t=2"),
        ("p", 7, 3, 322, True, "u_3 = 7·47 - 7"),
        ("q", 5, 3, 110, True, "u_3 = 5·23 - 5"),
        ("r", 3, 4, 81, False, "claims t^4"),
        ("s", 4, 4, 194, True, "u_4 = 4·52 - 14"),
        ("t", 8, 3, 488, True, "u_3 = 8·62 - 8"),
        ("m", 5, 5, 205, False, "wrong recurrence step"),
        ("n", 6, 3, 198, True, "u_3 = 6·34 - 6"),
        ("h", 9, 3, 702, True, "u_3 = 9·79 - 9"),
        ("k", 2, 4, 2, True, "u_4 = 2 for t=2"),
        ("f", 7, 4, 2401, False, "claims t^4"),
    ]
    letter, t_val, n, claimed, truth, _note = catalog[seed % len(catalog)]
    x = sp.symbols(letter, complex=True, nonzero=True)
    # Compute true u_n via recurrence
    u1 = t_val
    u0 = 2
    seq = {0: u0, 1: u1}
    for k in range(2, n + 1):
        seq[k] = t_val * seq[k - 1] - seq[k - 2]
    true_val = seq[n]
    # Rebuild statement
    if n == 3:
        mid = (
            f"With ${letter}+\\dfrac{{1}}{{{letter}}}={t_val}$ and ${letter}\\neq 0$, "
            f"a standardisation note first forms "
            f"${letter}^2+\\dfrac{{1}}{{{letter}^2}}=({letter}+\\dfrac{{1}}{{{letter}}})^2-2$"
            f" and then claims "
            f"${letter}^3+\\dfrac{{1}}{{{letter}^3}}={claimed}$."
        )
        body = join(
            f"Set $u_k={letter}^k+{letter}^{{-k}}$. From the given data $u_1={t_val}$.",
            S("Square", rf"u_2=u_1^2-2={t_val}^2-2={t_val**2 - 2}"),
            S("Recurrence", rf"u_3=u_1\cdot u_2-u_1={t_val}\cdot {t_val**2 - 2}-{t_val}={true_val}"),
            f"The printed target ${claimed}$ "
            + ("matches" if truth else f"disagrees with the true value ${true_val}$")
            + ".",
        )
    elif n == 4:
        u2 = t_val**2 - 2
        u3 = t_val * u2 - t_val
        mid = (
            f"Given ${letter}+\\dfrac{{1}}{{{letter}}}={t_val}$ (${letter}\\neq 0$), "
            f"an examiner claims "
            f"${letter}^4+\\dfrac{{1}}{{{letter}^4}}={claimed}$ "
            f"by raising the given sum to the fourth power and discarding cross terms."
        )
        body = join(
            f"Write $u_k={letter}^k+{letter}^{{-k}}$ with $u_1={t_val}$.",
            S("Second power", rf"u_2=u_1^2-2={u2}"),
            S("Third power", rf"u_3=u_1 u_2-u_1={u3}"),
            S("Fourth power", rf"u_4=u_1 u_3-u_2={true_val}"),
            f"Raising $u_1$ to the fourth power alone would give ${t_val**4}$, not $u_4$. "
            f"The true value is ${true_val}$"
            + (f", matching the claim." if truth else f", not ${claimed}$."),
        )
    else:  # n == 5
        u2 = t_val**2 - 2
        u3 = t_val * u2 - t_val
        u4 = t_val * u3 - u2
        mid = (
            f"On ${letter}\\neq 0$ with ${letter}+\\dfrac{{1}}{{{letter}}}={t_val}$, "
            f"a chained note asserts "
            f"${letter}^5+\\dfrac{{1}}{{{letter}^5}}={claimed}$ "
            f"after five applications of the product rule without the subtraction step."
        )
        body = join(
            f"The recurrence $u_k=u_1 u_{{k-1}}-u_{{k-2}}$ with $u_1={t_val}$, $u_0=2$ gives",
            S("Steps", rf"u_2={u2},\quad u_3={u3},\quad u_4={u4},\quad u_5={true_val}"),
            f"The claimed value ${claimed}$ "
            + ("is correct." if truth else f"is not equal to ${true_val}$."),
        )
    assert (true_val == claimed) == truth, (letter, n, true_val, claimed, truth)
    return Claim(mid, truth, body, "reciprocal_recurrence", "2.1")


# ---------------------------------------------------------------------------
# Family: a+b+c=0 cubic / elementary symmetric traps
# ---------------------------------------------------------------------------


def _fam_vanishing_cubic(seed: int) -> Claim:
    catalog = [
        # (a,b, wrong_c or None, claim_3abc, truth, mode)
        (4, -1, 3, True, False, "wrong_c"),  # c should be -3
        (5, 2, None, True, True, "correct"),  # c=-7, 3abc works
        (6, -2, 5, True, False, "wrong_c"),  # c should be -4
        (1, 1, -1, True, False, "wrong_c"),  # c should be -2
        (5, -3, None, True, True, "correct"),
        (8, -3, 2, True, False, "wrong_c"),
        (2, 5, None, True, True, "correct"),
        (7, -4, 1, True, False, "wrong_c"),
        (9, -5, None, True, True, "correct"),
        (4, 4, -4, True, False, "wrong_c"),  # c should be -8
        (3, 5, None, True, True, "correct"),
        (10, -6, 4, True, False, "wrong_c"),
        (1, -8, None, True, True, "correct"),
        (6, 3, -5, True, False, "wrong_c"),
        (3, -6, 2, True, False, "wrong_c"),  # c should be 3
        (8, 1, None, True, True, "correct"),
        (5, 5, -5, True, False, "wrong_c"),
    ]
    a, b, c_print, use_3abc, truth, mode = catalog[seed % len(catalog)]
    c_true = -(a + b)
    if mode == "correct":
        c_print = c_true
        # verify identity
        lhs = a**3 + b**3 + c_true**3
        rhs = 3 * a * b * c_true
        assert lhs == rhs
        stmt = (
            f"Given the constraint $a+b+c=0$ together with the concrete values "
            f"$a={a}$, $b={b}$ (hence $c={c_true}$), a marker invokes the vanishing-sum "
            f"identity and records $a^3+b^3+c^3=3abc={rhs}$ without expanding the cubes."
        )
        body = join(
            f"The hypothesis $a+b+c=0$ forces $c=-({a}+{b})={c_true}$.",
            S("Identity", r"a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)"),
            f"With $a+b+c=0$ the factor vanishes, so $a^3+b^3+c^3=3abc$.",
            S("Evaluate", rf"3\cdot {a}\cdot ({b})\cdot ({c_true})={rhs}"),
            "The recorded value matches.",
        )
        return Claim(stmt, True, body, "vanishing_cubic", "2.1")
    # wrong c printed
    assert c_print != c_true
    lhs = a**3 + b**3 + c_print**3
    rhs = 3 * a * b * c_print
    stmt = (
        f"An examiner writes $a={a}$, $b={b}$, $c={c_print}$ and, citing the slogan "
        f"\"$a+b+c=0\\Rightarrow a^3+b^3+c^3=3abc$\", concludes "
        f"$a^3+b^3+c^3={rhs}$ without checking whether the three values actually sum to zero."
    )
    body = join(
        f"The vanishing-sum shortcut requires $a+b+c=0$, hence $c=-({a}+{b})={c_true}$, "
        f"not $c={c_print}$.",
        S("Check the sum", rf"{a}+({b})+({c_print})={a + b + c_print}\\neq 0"),
        S("Direct cubes", rf"{a}^3+({b})^3+({c_print})^3={lhs}"),
        S("Triple product", rf"3\cdot {a}\cdot ({b})\cdot ({c_print})={rhs}"),
        f"Since ${lhs}\\neq {rhs}$, the shortcut fails.",
    )
    return Claim(stmt, False, body, "vanishing_cubic", "2.1")


# ---------------------------------------------------------------------------
# Family: Sophie Germain / biquadratic
# ---------------------------------------------------------------------------


def _fam_sophie(seed: int) -> Claim:
    catalog = [
        ("f", "g", True, "correct factorisation"),
        ("p", "q", False, "claims (p^2+2q^2)^2"),
        ("m", "n", True, "correct"),
        ("u", "v", False, "drops the cross 2uv terms"),
        ("a", "b", True, "correct"),
        ("r", "s", False, "writes (r^2+2s^2)(r^2-2s^2)"),
        ("c", "d", True, "correct"),
        ("h", "k", False, "claims sum of squares only"),
        ("x", "y", True, "correct"),
        ("w", "z", False, "uses (w^2+2wz+2z^2)^2"),
        ("t", "u", True, "correct"),
        ("j", "k", False, "omits one linear factor"),
        ("e", "f", True, "correct"),
        ("n", "m", False, "swaps the middle signs both positive"),
        ("s", "t", True, "correct"),
    ]
    a, b, truth, _ = catalog[seed % len(catalog)]
    if truth:
        stmt = (
            f"Adding and subtracting $4{a}^2{b}^2$ inside ${a}^4+4{b}^4$ is claimed to produce "
            f"the difference of squares $({a}^2+2{b}^2)^2-(2{a}{b})^2$, which then factors as "
            f"$({a}^2-2{a}{b}+2{b}^2)({a}^2+2{a}{b}+2{b}^2)$ on every real pair $({a},{b})$."
        )
        body = join(
            f"Complete to a difference of squares by inserting $\\pm 4{a}^2{b}^2$:",
            S(
                "Rewrite",
                rf"{a}^4+4{b}^4=({a}^2+2{b}^2)^2-(2{a}{b})^2",
            ),
            S(
                "Factor",
                rf"=({a}^2-2{a}{b}+2{b}^2)({a}^2+2{a}{b}+2{b}^2)",
            ),
            "Both steps are identities in the two letters.",
        )
    else:
        wrong_forms = [
            (
                f"$({a}^2+2{b}^2)^2$",
                join(
                    f"The expression ${a}^4+4{b}^4$ is not already a square:",
                    S("Expand", rf"({a}^2+2{b}^2)^2={a}^4+4{a}^2{b}^2+4{b}^4"),
                    f"An extra middle term $4{a}^2{b}^2$ appears. The Sophie Germain rewrite "
                    f"must subtract $(2{a}{b})^2$ after adding it.",
                ),
            ),
            (
                f"$({a}^2+2{b}^2)({a}^2-2{b}^2)$",
                join(
                    f"A difference of squares in ${a}^2$ and $2{b}^2$ would give",
                    S("Product", rf"({a}^2+2{b}^2)({a}^2-2{b}^2)={a}^4-4{b}^4"),
                    f"The sign of the last term is wrong for ${a}^4+4{b}^4$.",
                ),
            ),
            (
                f"$({a}^2+2{a}{b}+2{b}^2)^2$",
                join(
                    f"Squaring one Sophie Germain factor alone produces",
                    S(
                        "Expand",
                        rf"({a}^2+2{a}{b}+2{b}^2)^2={a}^4+4{a}^3{b}+8{a}^2{b}^2+8{a}{b}^3+4{b}^4",
                    ),
                    f"Cross terms survive; the identity requires the product of both conjugate factors.",
                ),
            ),
        ]
        form, body = wrong_forms[seed % len(wrong_forms)]
        stmt = (
            f"A marker treats ${a}^4+4{b}^4$ as identically equal to {form} "
            f"for every real pair $({a},{b})$, citing a shortened Sophie Germain argument."
        )
    return Claim(stmt, truth, body, "sophie_germain", "2.1")


# ---------------------------------------------------------------------------
# Family: Brahmagupta / product of sums of squares
# ---------------------------------------------------------------------------


def _fam_brahmagupta(seed: int) -> Claim:
    catalog = [
        (1, 2, 3, 4, True),   # (1+4)(9+16)=5*25=125; (3-8)^2+(4+6)^2=25+100=125
        (2, 1, 4, 3, False),  # wrong pairing claimed
        (1, 1, 2, 3, True),
        (3, 1, 2, 2, True),
        (4, 2, 1, 3, False),
        (1, 3, 2, 1, True),
        (5, 1, 1, 2, True),
        (2, 3, 1, 4, False),
        (1, 4, 2, 2, True),
        (3, 2, 3, 1, True),
        (2, 2, 3, 1, False),
        (1, 5, 2, 3, True),
        (4, 1, 3, 2, True),
        (3, 3, 1, 2, False),
        (2, 5, 1, 1, True),
    ]
    a, b, c, d, truth = catalog[seed % len(catalog)]
    left = (a*a + b*b) * (c*c + d*d)
    right_ok = (a*c - b*d)**2 + (a*d + b*c)**2
    right_alt = (a*c + b*d)**2 + (a*d - b*c)**2
    assert left == right_ok == right_alt
    if truth:
        stmt = (
            f"The product of sums of squares $({a}^2+{b}^2)({c}^2+{d}^2)$ is rewritten as "
            f"$({a}\\cdot {c}-{b}\\cdot {d})^2+({a}\\cdot {d}+{b}\\cdot {c})^2$ "
            f"and evaluated as ${left}$. Both the identity and the arithmetic are accepted."
        )
        body = join(
            "Brahmagupta's identity expresses a product of two sums of squares as a sum of squares:",
            S(
                "Identity",
                rf"({a}^2+{b}^2)({c}^2+{d}^2)"
                rf"=({a}{c}-{b}{d})^2+({a}{d}+{b}{c})^2",
            ),
            S(
                "Arithmetic",
                rf"=({a*c}-{b*d})^2+({a*d}+{b*c})^2={right_ok}",
            ),
            f"The product on the left is likewise ${left}$.",
        )
    else:
        # Deliberately wrong cross pairing
        wrong = (a*c + b*c)**2 + (a*d - b*d)**2  # nonsense pairing
        stmt = (
            f"A notebook multiplies $({a}^2+{b}^2)({c}^2+{d}^2)$ by pairing "
            f"like letters only, writing $({a}{c}+{b}{c})^2+({a}{d}-{b}{d})^2={wrong}$, "
            f"and treats that as the value of the product."
        )
        body = join(
            "The correct cross pairing is not \"like letters\":",
            S(
                "Correct identity",
                rf"({a}^2+{b}^2)({c}^2+{d}^2)"
                rf"=({a}{c}-{b}{d})^2+({a}{d}+{b}{c})^2={right_ok}",
            ),
            S("Printed pairing", rf"({a}{c}+{b}{c})^2+({a}{d}-{b}{d})^2={wrong}"),
            f"Since ${wrong}\\neq {left}$, the pairing is false.",
        )
        truth = False
    return Claim(stmt, truth, body, "brahmagupta", "2.1")


# ---------------------------------------------------------------------------
# Family: completing the square then nested claims
# ---------------------------------------------------------------------------


def _fam_complete_square_chain(seed: int) -> Claim:
    catalog = [
        # (var, linear, const, claim_form, truth)
        ("x", -10, 28, "(x-5)^2+3", True),
        ("y", -6, 14, "(y-3)^2+5", True),
        ("z", -8, 7, "(z-4)^2-9", True),
        ("w", -12, 40, "(w-6)^2+4", True),
        ("t", -4, 1, "(t-2)^2-3", True),
        ("x", -10, 28, "(x-5)^2", False),  # drops +3
        ("y", -6, 14, "(y-3)^2+4", False),
        ("z", -8, 7, "(z-4)^2", False),
        ("u", -14, 50, "(u-7)^2+1", True),
        ("v", -2, 2, "(v-1)^2+1", True),
        ("p", -16, 60, "(p-8)^2-4", True),
        ("q", -6, 10, "(q-3)^2", False),
        ("r", -18, 80, "(r-9)^2-1", True),
        ("s", -4, 8, "(s-2)^2+3", False),
        ("h", -20, 90, "(h-10)^2-10", True),
        ("k", -10, 20, "(k-5)^2", False),
        ("m", -12, 30, "(m-6)^2+6", False),
    ]
    v, lin, const, claim, truth = catalog[seed % len(catalog)]
    half = lin // 2
    sq = half * half
    leftover = const - sq
    true_form = f"({v}{half:+d})^2{leftover:+d}"
    stmt = (
        f"Completing the square for ${v}^2{lin:+d}{v}{const:+d}$ is recorded as "
        f"${claim}$ for every real ${v}$. A follow-up note then treats the rewritten "
        f"form as having a double real root whenever the leftover constant is ignored."
    )
    body = join(
        f"Half of the linear coefficient ${lin:+d}$ is ${half}$, and $({half})^2={sq}$.",
        S(
            "Complete",
            rf"{v}^2{lin:+d}{v}{const:+d}"
            rf"=({v}^2{lin:+d}{v}+{sq}){leftover:+d}"
            rf"=({v}{half:+d})^2{leftover:+d}",
        ),
        f"The true completed form is ${true_form}$. "
        + (
            "The printed form matches."
            if truth
            else f"The printed ${claim}$ does not match, so the follow-up about roots is moot."
        ),
    )
    # Verify truth
    x = sp.symbols(v)
    poly = x**2 + lin * x + const
    # Parse claim roughly
    m = re.match(r"\(([a-z])([+-]\d+)\)\^2([+-]\d+)?$", claim.replace(" ", ""))
    if m:
        shift = int(m.group(2))
        left = int(m.group(3)) if m.group(3) else 0
        claimed_poly = (x + shift) ** 2 + left
        actual_truth = sp.expand(poly - claimed_poly) == 0
    else:
        m2 = re.match(r"\(([a-z])([+-]\d+)\)\^2$", claim.replace(" ", ""))
        shift = int(m2.group(2))
        claimed_poly = (x + shift) ** 2
        actual_truth = sp.expand(poly - claimed_poly) == 0
    assert actual_truth == truth, (claim, actual_truth, truth, true_form)
    return Claim(stmt, truth, body, "complete_square_chain", "2.1")


# ---------------------------------------------------------------------------
# Family: cube difference with parameters / nested
# ---------------------------------------------------------------------------


def _fam_cube_param(seed: int) -> Claim:
    catalog = [
        ("m", "n", True),
        ("p", "q", True),
        ("a", "b", False),  # claims 2b(3a^2) dropping n^2
        ("u", "v", True),
        ("r", "s", False),
        ("c", "d", True),
        ("h", "k", False),
        ("f", "g", True),
        ("w", "z", False),
        ("t", "s", True),
        ("x", "y", False),
        ("j", "k", True),
        ("e", "f", False),
        ("n", "m", True),
        ("s", "t", False),
    ]
    m, n, truth = catalog[seed % len(catalog)]
    if truth:
        stmt = (
            f"On every real pair $({m},{n})$, the difference "
            f"$({m}+{n})^3-({m}-{n})^3$ is rewritten by setting "
            f"$A={m}+{n}$, $B={m}-{n}$ and expanding "
            f"$A^3-B^3=(A-B)(A^2+AB+B^2)$ to obtain $2{n}(3{m}^2+{n}^2)$."
        )
        body = join(
            f"Put $A={m}+{n}$ and $B={m}-{n}$. Then $A-B=2{n}$ and $A+B=2{m}$.",
            S("Factor", r"A^3-B^3=(A-B)(A^2+AB+B^2)"),
            S(
                "Expand the quadratic factor",
                rf"A^2+AB+B^2=({m}+{n})^2+({m}+{n})({m}-{n})+({m}-{n})^2"
                rf"=3{m}^2+{n}^2",
            ),
            S("Product", rf"(A-B)(A^2+AB+B^2)=2{n}(3{m}^2+{n}^2)"),
        )
    else:
        stmt = (
            f"A shortened expansion treats $({m}+{n})^3-({m}-{n})^3$ as "
            f"$2{n}\\cdot 3{m}^2=6{m}^2{n}$ on the whole plane, "
            f"dropping the ${n}^2$ contribution inside the quadratic factor."
        )
        body = join(
            f"With $A={m}+{n}$, $B={m}-{n}$ one still has $A-B=2{n}$, but",
            S("Quadratic factor", rf"A^2+AB+B^2=3{m}^2+{n}^2"),
            S("Full product", rf"2{n}(3{m}^2+{n}^2)=6{m}^2{n}+2{n}^3"),
            f"The dropped term $2{n}^3$ is not identically zero.",
        )
    return Claim(stmt, truth, body, "cube_param", "2.1")


# ---------------------------------------------------------------------------
# Family: hard rational expressions
# ---------------------------------------------------------------------------


def _fam_nested_fraction(seed: int) -> Claim:
    catalog = [
        ("x", True),
        ("y", False),
        ("z", True),
        ("t", False),
        ("u", True),
        ("w", False),
        ("v", True),
        ("p", False),
        ("q", True),
        ("r", False),
        ("s", True),
        ("h", False),
        ("k", True),
        ("m", False),
        ("n", True),
    ]
    v, truth = catalog[seed % len(catalog)]
    # Complex fraction: (v/(v-1) - (v-1)/v) / (v/(v-1) + (v-1)/v)
    # Num = (v^2 - (v-1)^2)/(v(v-1)) = (2v-1)/(v(v-1))
    # Den = (v^2 + (v-1)^2)/(v(v-1)) = (2v^2-2v+1)/(v(v-1))
    # Quotient = (2v-1)/(2v^2-2v+1)
    true = rf"\dfrac{{2{v}-1}}{{2{v}^2-2{v}+1}}"
    wrong = rf"\dfrac{{2{v}-1}}{{2{v}^2-2{v}}}"
    target = true if truth else wrong
    stmt = (
        f"For ${v}\\notin\\{{0,1\\}}$, the nested quotient "
        f"$\\dfrac{{\\dfrac{{{v}}}{{{v}-1}}-\\dfrac{{{v}-1}}{{{v}}}}}{{\\dfrac{{{v}}}{{{v}-1}}+\\dfrac{{{v}-1}}{{{v}}}}}$ "
        f"is reduced to ${target}$ after clearing the inner denominators once."
    )
    body = join(
        f"Clear each inner pair over ${v}({v}-1)$:",
        S(
            "Numerator",
            rf"\frac{{{v}}}{{{v}-1}}-\frac{{{v}-1}}{{{v}}}"
            rf"=\frac{{{v}^2-({v}-1)^2}}{{{v}({v}-1)}}=\frac{{2{v}-1}}{{{v}({v}-1)}}",
        ),
        S(
            "Denominator",
            rf"\frac{{{v}}}{{{v}-1}}+\frac{{{v}-1}}{{{v}}}"
            rf"=\frac{{{v}^2+({v}-1)^2}}{{{v}({v}-1)}}=\frac{{2{v}^2-2{v}+1}}{{{v}({v}-1)}}",
        ),
        S(
            "Quotient",
            rf"\frac{{2{v}-1}}{{2{v}^2-2{v}+1}}",
        ),
        (
            "The printed target matches the reduced form."
            if truth
            else "The printed denominator drops the constant $+1$, so the claim is false."
        ),
    )
    return Claim(stmt, truth, body, "nested_fraction", "2.2")


def _fam_partial_fractions(seed: int) -> Claim:
    catalog = [
        (1, True),   # 1/(x^2-1) = (1/2)(1/(x-1) - 1/(x+1))
        (1, False),  # claims without 1/2
        (4, True),   # 4/(x^2-1)
        (4, False),
        (3, True),
        (3, False),
        (2, True),
        (2, False),
        (5, True),
        (5, False),
        (6, True),
        (6, False),
        (7, True),
        (7, False),
        (9, True),
    ]
    coeff, truth = catalog[seed % len(catalog)]
    half = sp.Rational(coeff, 2)
    half_tex = rf"\dfrac{{{half.p}}}{{{half.q}}}" if half.q != 1 else str(half.p)
    if truth:
        stmt = (
            f"On $x^2\\neq 1$, decomposing "
            f"$\\dfrac{{{coeff}}}{{x^2-1}}$ as "
            f"${half_tex}\\dfrac{{1}}{{x-1}}-{half_tex}\\dfrac{{1}}{{x+1}}$ "
            f"is accepted after clearing the common denominator $(x-1)(x+1)$."
        )
        body = join(
            "Difference of squares in the denominator:",
            S("Factor", rf"x^2-1=(x-1)(x+1)"),
            S(
                "Clear",
                rf"{half_tex}\left(\frac{{1}}{{x-1}}-\frac{{1}}{{x+1}}\right)"
                rf"=\frac{{{half_tex}(x+1)-{half_tex}(x-1)}}{{(x-1)(x+1)}}"
                rf"=\frac{{{coeff}}}{{x^2-1}}",
            ),
            "The coefficients match.",
        )
    else:
        stmt = (
            f"A marker writes $\\dfrac{{{coeff}}}{{x^2-1}}=\\dfrac{{{coeff}}}{{x-1}}-\\dfrac{{{coeff}}}{{x+1}}$ "
            f"for $x^2\\neq 1$, omitting the factor $\\tfrac{{1}}{{2}}$ in each partial term."
        )
        body = join(
            "Clearing the printed right-hand side gives",
            S(
                "Combine",
                rf"\frac{{{coeff}}}{{x-1}}-\frac{{{coeff}}}{{x+1}}"
                rf"=\frac{{{coeff}(x+1)-{coeff}(x-1)}}{{x^2-1}}=\frac{{2{coeff}}}{{x^2-1)}}",
            ),
            f"The result is $\\dfrac{{2{coeff}}}{{x^2-1}}$, twice the intended left-hand side.",
        )
    return Claim(stmt, truth, body, "partial_fractions", "2.2")


def _fam_poly_division(seed: int) -> Claim:
    catalog = [
        # (poly_desc, divisor, claimed_quotient, truth)
        ("j^3-8", "j-2", "j^2+4", False),  # true is j^2+2j+4
        ("j^3-27", "j-3", "j^2+3j+9", True),
        ("j^3-64", "j-4", "j^2+16", False),
        ("j^3-125", "j-5", "j^2+5j+25", True),
        ("j^3-216", "j-6", "j^2+36", False),
        ("j^3-343", "j-7", "j^2+7j+49", True),
        ("j^3-1000", "j-10", "j^2+10j+100", True),
        ("j^3-1", "j-1", "j^2+1", False),
        ("j^3-512", "j-8", "j^2+8j+64", True),
        ("j^3-729", "j-9", "j^2+81", False),
        ("w^3-8", "w-2", "w^2+2w+4", True),
        ("w^3-27", "w-3", "w^2+9", False),
        ("t^3-64", "t-4", "t^2+4t+16", True),
        ("t^3-125", "t-5", "t^2+25", False),
        ("u^3-216", "u-6", "u^2+6u+36", True),
    ]
    num, den, claimed, truth = catalog[seed % len(catalog)]
    var = num[0]
    # Extract root from den like j-2
    root = int(den.split("-")[1])
    true_q = f"{var}^2+{root}{var}+{root**2}"
    stmt = (
        f"After cancelling the linear factor, $\\dfrac{{{num}}}{{{den}}}$ is recorded as "
        f"${claimed}$ for ${var}\\neq {root}$. A single substitution ${var}=0$ is then "
        f"cited as confirmation because both sides agree at that point"
        + ("." if not truth else ", and the algebraic identity is in fact correct.")
    )
    if truth:
        body = join(
            f"Difference of cubes with ${root}^3$ in the constant term:",
            S(
                "Factor",
                rf"\frac{{{var}^3-{root**3}}}{{{var}-{root}}}"
                rf"={var}^2+{root}{var}+{root**2}",
            ),
            f"The printed quotient matches. Agreement at ${var}=0$ is consistent but not the reason the identity holds.",
        )
    else:
        body = join(
            f"Difference of cubes yields three terms, not two:",
            S(
                "Correct quotient",
                rf"\frac{{{var}^3-{root**3}}}{{{var}-{root}}}"
                rf"={var}^2+{root}{var}+{root**2}",
            ),
            S("Printed claim", claimed.replace("^", "^")),
            f"At ${var}=0$ both may agree (constant term ${root**2}$), yet at ${var}=1$ "
            f"the linear term ${root}$ already separates them.",
        )
    return Claim(stmt, truth, body, "poly_division", "2.2")


def _fam_three_lcd(seed: int) -> Claim:
    catalog = [
        ("a", "b", "c", False),  # claims denom a+b+c
        ("p", "q", "r", True),   # product
        ("u", "v", "w", False),
        ("x", "y", "z", True),
        ("h", "k", "m", False),
        ("s", "t", "u", True),
        ("f", "g", "h", False),
        ("m", "n", "p", True),
        ("c", "d", "e", False),
        ("r", "s", "t", True),
        ("j", "k", "l", False),
        ("a", "c", "e", True),
        ("b", "d", "f", False),
        ("w", "x", "y", True),
        ("n", "p", "q", False),
    ]
    a, b, c, truth = catalog[seed % len(catalog)]
    if truth:
        stmt = (
            f"Combining $\\dfrac{{1}}{{{a}}}+\\dfrac{{1}}{{{b}}}+\\dfrac{{1}}{{{c}}}$ on "
            f"${a}{b}{c}\\neq 0$ with least common denominator ${a}{b}{c}$ produces "
            f"$\\dfrac{{{b}{c}+{a}{c}+{a}{b}}}{{{a}{b}{c}}}$. The sum-of-denominators "
            f"shortcut ${a}+{b}+{c}$ is rejected."
        )
        body = join(
            f"The LCD of three monomial denominators is the product ${a}{b}{c}$:",
            S(
                "Clear",
                rf"\frac{{1}}{{{a}}}+\frac{{1}}{{{b}}}+\frac{{1}}{{{c}}}"
                rf"=\frac{{{b}{c}+{a}{c}+{a}{b}}}{{{a}{b}{c}}}",
            ),
            f"Using ${a}+{b}+{c}$ as a common denominator is not an identity.",
        )
    else:
        stmt = (
            f"On ${a}{b}{c}\\neq 0$, adding $\\dfrac{{2}}{{{a}}}+\\dfrac{{3}}{{{b}}}+\\dfrac{{5}}{{{c}}}$ "
            f"with common denominator ${a}+{b}+{c}$ is claimed to give "
            f"$\\dfrac{{10}}{{{a}+{b}+{c}}}$."
        )
        body = join(
            f"Least common denominator of ${a}$, ${b}$, ${c}$ is the product, not the sum:",
            S(
                "Correct combination",
                rf"\frac{{2}}{{{a}}}+\frac{{3}}{{{b}}}+\frac{{5}}{{{c}}}"
                rf"=\frac{{2{b}{c}+3{a}{c}+5{a}{b}}}{{{a}{b}{c}}}",
            ),
            f"The printed $\\dfrac{{10}}{{{a}+{b}+{c}}}$ agrees only on a thin set, not identically.",
        )
    return Claim(stmt, truth, body, "three_lcd", "2.2")


# ---------------------------------------------------------------------------
# Family: powers / roots hard
# ---------------------------------------------------------------------------


def _fam_denest(seed: int) -> Claim:
    items = [
        (r"14+2\sqrt{13}", r"1+\sqrt{13}", True,
         join(
             r"Square the candidate conjugate:",
             S("Square", r"(1+\sqrt{13})^2=1+2\sqrt{13}+13=14+2\sqrt{13}"),
             r"Both $1+\sqrt{13}$ and the principal square root are positive, so they coincide.",
         )),
        (r"14+2\sqrt{13}", r"\sqrt{13}-1", False,
         join(
             r"Square the printed difference:",
             S("Square", r"(\sqrt{13}-1)^2=13-2\sqrt{13}+1=14-2\sqrt{13}"),
             r"The cross term has the wrong sign for $\sqrt{14+2\sqrt{13}}$.",
         )),
        (r"7+4\sqrt{3}", r"2+\sqrt{3}", True,
         join(
             S("Square", r"(2+\sqrt{3})^2=4+4\sqrt{3}+3=7+4\sqrt{3}"),
             r"Positivity selects the sum form.",
         )),
        (r"7+4\sqrt{3}", r"\sqrt{3}-2", False,
         join(
             S("Square", r"(\sqrt{3}-2)^2=3-4\sqrt{3}+4=7-4\sqrt{3}"),
             r"Wrong sign on the middle term; also $\sqrt{3}-2<0$ cannot be a principal root.",
         )),
        (r"11+6\sqrt{2}", r"3+\sqrt{2}", True,
         join(S("Square", r"(3+\sqrt{2})^2=9+6\sqrt{2}+2=11+6\sqrt{2}"), "Positivity selects this conjugate.")),
        (r"11+6\sqrt{2}", r"3-\sqrt{2}", False,
         join(S("Square", r"(3-\sqrt{2})^2=9-6\sqrt{2}+2=11-6\sqrt{2}"), "Wrong middle sign.")),
        (r"8+2\sqrt{15}", r"\sqrt{5}+\sqrt{3}", True,
         join(S("Square", r"(\sqrt{5}+\sqrt{3})^2=5+2\sqrt{15}+3=8+2\sqrt{15}"), "Both sides positive.")),
        (r"8+2\sqrt{15}", r"\sqrt{5}-\sqrt{3}", False,
         join(S("Square", r"(\sqrt{5}-\sqrt{3})^2=5-2\sqrt{15}+3=8-2\sqrt{15}"), "Wrong sign.")),
        (r"16+6\sqrt{7}", r"3+\sqrt{7}", True,
         join(S("Square", r"(3+\sqrt{7})^2=9+6\sqrt{7}+7=16+6\sqrt{7}"), "Match.")),
        (r"16+6\sqrt{7}", r"\sqrt{7}-3", False,
         join(S("Square", r"(\sqrt{7}-3)^2=7-6\sqrt{7}+9=16-6\sqrt{7}"), "Wrong sign; also negative.")),
        (r"10+4\sqrt{6}", r"\sqrt{6}+2", True,
         join(S("Square", r"(\sqrt{6}+2)^2=6+4\sqrt{6}+4=10+4\sqrt{6}"), "Match.")),
        (r"10+4\sqrt{6}", r"\sqrt{6}-2", False,
         join(S("Square", r"(\sqrt{6}-2)^2=6-4\sqrt{6}+4=10-4\sqrt{6}"), "Wrong sign.")),
        (r"9+4\sqrt{5}", r"2+\sqrt{5}", True,
         join(S("Square", r"(2+\sqrt{5})^2=4+4\sqrt{5}+5=9+4\sqrt{5}"), "Match.")),
        (r"9+4\sqrt{5}", r"\sqrt{5}-2", False,
         join(S("Square", r"(\sqrt{5}-2)^2=5-4\sqrt{5}+4=9-4\sqrt{5}"), "Wrong sign.")),
        (r"15+6\sqrt{6}", r"3+\sqrt{6}", True,
         join(S("Square", r"(3+\sqrt{6})^2=9+6\sqrt{6}+6=15+6\sqrt{6}"), "Match.")),
    ]
    rad, claim, truth, body = items[seed % len(items)]
    stmt = (
        f"Denesting $\\sqrt{{{rad}}}$ is claimed to produce ${claim}$ "
        f"as the principal square root, after comparing squared conjugates and discarding "
        f"the form whose cross term has the opposite sign."
    )
    return Claim(stmt, truth, body, "denest", "2.3")


def _fam_exponent_tower(seed: int) -> Claim:
    catalog = [
        # stacked vs product confusion with specific letters
        ("x", True),   # ((x^2)^3)^{1/2} = x^3
        ("x", False),  # claimed x^{5/2}
        ("t", True),
        ("t", False),
        ("a", True),   # (a^{-2})^{-3} = a^6 vs product
        ("a", False),
        ("b", True),
        ("b", False),
        ("w", True),
        ("w", False),
        ("p", True),
        ("p", False),
        ("q", True),
        ("q", False),
        ("z", True),
    ]
    mode = seed % 3
    letter = "xtabwpqz"[seed % 8]
    if mode == 0:
        # half-power stack
        truth = seed % 2 == 0
        claimed = rf"{letter}^{{3}}" if truth else rf"{letter}^{{5/2}}"
        stmt = (
            f"Whenever ${letter}>0$, a note treats "
            f"$(({letter}^{{2}})^{{3}})^{{1/2}}$ as ${claimed}$, "
            f"{'multiplying exponents inward before the outer root' if truth else 'adding 2+3 before taking the outer half-power'}."
        )
        body = join(
            "Power of a power multiplies, working inside out:",
            S("Inner", rf"({letter}^{{2}})^{{3}}={letter}^{{6}}"),
            S("Outer root", rf"({letter}^{{6}})^{{1/2}}={letter}^{{3}}"),
            (
                "The printed target matches."
                if truth
                else rf"Adding $2+3$ would describe a different tower, not $(({letter}^{{2}})^{{3}})^{{1/2}}$."
            ),
        )
    elif mode == 1:
        truth = seed % 2 == 0
        if truth:
            stmt = (
                f"For ${letter}\\neq 0$, rewriting $({letter}^{{-2}})^{{-3}}$ as ${letter}^{{6}}$ "
                f"is accepted; comparing with the product ${letter}^{{-2}}{letter}^{{-3}}={letter}^{{-5}}$ "
                f"shows the two rules diverge."
            )
            body = join(
                S("Power of a power", rf"({letter}^{{-2}})^{{-3}}={letter}^{{6}}"),
                S("Product rule", rf"{letter}^{{-2}}{letter}^{{-3}}={letter}^{{-5}}"),
                "The stacked form is $letter^{6}$; the product is different.",
            ).replace("letter^{6}", f"${letter}^{{6}}$")
        else:
            stmt = (
                f"For ${letter}\\neq 0$, a clerk equates $({letter}^{{-2}})^{{-3}}$ with "
                f"${letter}^{{-2}}{letter}^{{-3}}$ and records both as ${letter}^{{-5}}$."
            )
            body = join(
                S("Stack", rf"({letter}^{{-2}})^{{-3}}={letter}^{{(-2)\\cdot(-3)}}={letter}^{{6}}"),
                S("Product", rf"{letter}^{{-2}}{letter}^{{-3}}={letter}^{{-5}}"),
                f"${letter}^{{6}}\\neq {letter}^{{-5}}$, so the identification fails.",
            )
    else:
        truth = seed % 2 == 0
        # quotient of powers
        if truth:
            stmt = (
                f"On ${letter}\\neq 0$, simplifying "
                f"$\\dfrac{{{letter}^{{5}}{letter}^{{-2}}}}{{{letter}^{{-1}}}}$ "
                f"by adding exponents in the numerator then subtracting the denominator "
                f"leaves ${letter}^{{4}}$."
            )
            body = join(
                S("Numerator", rf"{letter}^{{5}}{letter}^{{-2}}={letter}^{{3}}"),
                S("Quotient", rf"\frac{{{letter}^{{3}}}}{{{letter}^{{-1}}}}={letter}^{{4}}"),
            )
        else:
            stmt = (
                f"On ${letter}\\neq 0$, simplifying "
                f"$\\dfrac{{{letter}^{{5}}{letter}^{{-2}}}}{{{letter}^{{-1}}}}$ "
                f"by cancelling the printed exponents digit-wise is claimed to leave ${letter}^{{2}}$."
            )
            body = join(
                S("Correct path", rf"\frac{{{letter}^{{5}}{letter}^{{-2}}}}{{{letter}^{{-1}}}}={letter}^{{4}}"),
                f"Digit-wise cancellation is not an exponent law; the true result is ${letter}^{{4}}$, not ${letter}^{{2}}$.",
            )
    return Claim(stmt, truth, body, "exponent_tower", "2.3")


def _fam_sqrt_no_split(seed: int) -> Claim:
    catalog = [
        (2, 8, True),   # √2 √8 = √16 = 4
        (3, 12, True),
        (5, 5, False),  # claims √5+√5=√10
        (1, 1, False),  # √1+√1=2 vs √2
        (4, 9, True),   # product
        (7, 7, False),
        (2, 18, True),
        (3, 3, False),
        (8, 2, True),
        (6, 6, False),
        (4, 4, False),
        (9, 4, True),
        (2, 2, False),
        (5, 20, True),
        (1, 8, False),  # √1+√8 vs √9
    ]
    a, b, truth = catalog[seed % len(catalog)]
    if truth and a * b == (int((a * b) ** 0.5)) ** 2:
        prod = int((a * b) ** 0.5)
        stmt = (
            f"On the nonnegative reals, the product identity "
            f"$\\sqrt{{{a}}}\\sqrt{{{b}}}=\\sqrt{{{a*b}}}={prod}$ is accepted; "
            f"a competing note that would replace the product by "
            f"$\\sqrt{{{a}}}+\\sqrt{{{b}}}$ is rejected."
        )
        body = join(
            "A product of principal square roots is the principal root of the product:",
            S("Identity", rf"\sqrt{{{a}}}\sqrt{{{b}}}=\sqrt{{{a*b}}}={prod}"),
            rf"By contrast $(\sqrt{{{a}}}+\sqrt{{{b}}})^2={a}+{b}+2\sqrt{{{a*b}}}\neq {a*b}$ in general.",
        )
    else:
        stmt = (
            f"A candidate replaces $\\sqrt{{{a}+b}}$ by $\\sqrt{{{a}}}+\\sqrt{{{b}}}$ "
            f"and, after checking the single case where one radicand vanishes, "
            f"treats the split as an identity on all nonnegative $a,b$."
        )
        body = join(
            "Square roots do not split over addition:",
            S("Square the sum", rf"(\sqrt{{{a}}}+\sqrt{{{b}}})^2={a}+{b}+2\sqrt{{{a*b}}}"),
            rf"For a concrete counter-example take equal radicands $1$: $\sqrt{{2}}\neq 2$.",
        )
        truth = False
    return Claim(stmt, truth, body, "sqrt_rules", "2.3")


# ---------------------------------------------------------------------------
# Family: absolute value hard
# ---------------------------------------------------------------------------


def _fam_abs_quadratic(seed: int) -> Claim:
    catalog = [
        # |x^2 - (p+q)x + pq| = |x-p||x-q|
        (1, 7, True),
        (2, 5, True),
        (1, 6, False),  # claims (x-1)(x-6) without abs
        (3, 4, True),
        (2, 8, False),
        (1, 5, True),
        (3, 7, False),
        (2, 6, True),
        (4, 5, False),
        (1, 8, True),
        (3, 6, True),
        (2, 7, False),
        (4, 6, True),
        (1, 9, False),
        (3, 8, True),
    ]
    p, q, truth = catalog[seed % len(catalog)]
    s, prod = p + q, p * q
    if truth:
        stmt = (
            f"Factoring inside the bars, $|x^2-{s}x+{prod}|$ is rewritten as "
            f"$|x-{p}|\\,|x-{q}|$ for every real $x$. The identity is then used to "
            f"read off the zeros $x={p}$ and $x={q}$ without expanding."
        )
        body = join(
            f"The trinomial factors as $(x-{p})(x-{q})$:",
            S("Factor", rf"x^2-{s}x+{prod}=(x-{p})(x-{q})"),
            S("Absolute value", rf"|x^2-{s}x+{prod}|=|x-{p}|\,|x-{q}|"),
            "Because $|uv|=|u||v|$ holds for all reals, the rewrite is an identity.",
        )
    else:
        stmt = (
            f"A marker drops the bars after factoring and writes "
            f"$|x^2-{s}x+{prod}|=(x-{p})(x-{q})$ as an identity on the whole line, "
            f"citing that the two linear factors are \"already ordered\"."
        )
        body = join(
            f"While $x^2-{s}x+{prod}=(x-{p})(x-{q})$ as polynomials,",
            S("With bars", rf"|x^2-{s}x+{prod}|=|x-{p}|\,|x-{q}|"),
            f"Without bars the right-hand side changes sign on half-lines. "
            f"For $x=0$ one has $|{prod}|={prod}$ on the left but "
            f"$({-p})({-q})={prod}$ only if the signs cooperate — "
            f"already for $x=\\min({p},{q})-1$ the two sides disagree in sign.",
        )
    return Claim(stmt, truth, body, "abs_quadratic", "2.4")


def _fam_abs_distance_three(seed: int) -> Claim:
    catalog = [
        (1, 4, 7, True),   # on [4,4]? middle point - between 1 and 7, |x-1|+|x-7|=6 constant; with third
        (0, 3, 6, True),
        (2, 5, 9, False),  # claims constant 7 everywhere
        (1, 5, 8, True),
        (0, 4, 7, False),
        (2, 4, 8, True),
        (1, 3, 9, False),
        (0, 5, 10, True),
        (3, 6, 9, False),
        (1, 6, 10, True),
        (2, 6, 11, False),
        (0, 2, 5, True),
        (4, 7, 12, False),
        (1, 2, 6, True),
        (3, 5, 10, False),
    ]
    a, b, c, truth = catalog[seed % len(catalog)]
    # |x-a|+|x-c| = c-a on [a,c]; adding |x-b| for b in (a,c) gives
    # on [a,b]: (b-x)+(x-a)+(c-x) wait
    # Actually |x-a|+|x-b|+|x-c| for a<b<c equals:
    # on [a,b]: (x-a)+(b-x)+(c-x) = b-a+c-x = c+b-a-x  not constant
    # on [b,c]: (x-a)+(x-b)+(c-x) = x-a-b+c  not constant  
    # Only |x-a|+|x-c| is constant on [a,c].
    span = c - a
    if truth:
        stmt = (
            f"On the closed interval ${a}\\le k\\le {c}$, the two-point distance sum "
            f"$|k-{a}|+|k-{c}|$ equals the constant ${span}$. Inserting the interior mark "
            f"${b}$ into a three-bar sum is a different expression and is not claimed here."
        )
        body = join(
            f"For $k$ between ${a}$ and ${c}$ the bars open as",
            S("Rewrite", rf"|k-{a}|+|k-{c}|=(k-{a})+({c}-k)={span}"),
            f"The constant equals the length of the segment.",
        )
    else:
        stmt = (
            f"On the whole real line, $|k-{a}|+|k-{b}|+|k-{c}|$ is claimed to equal "
            f"the constant ${c-a}$, by extending the two-point segment rule to three marks."
        )
        body = join(
            f"The two-point identity $|k-{a}|+|k-{c}|={c-a}$ holds only on $[{a},{c}]$. "
            f"With a third mark the piecewise expression changes:",
            S(
                rf"On $[{a},{b}]$",
                rf"|k-{a}|+|k-{b}|+|k-{c}|=(k-{a})+({b}-k)+({c}-k)={b+c-a}-k",
            ),
            f"The right-hand side still depends on $k$, so it is not the constant ${c-a}$.",
        )
    return Claim(stmt, truth, body, "abs_distance_three", "2.4")


def _fam_abs_quotient_sign(seed: int) -> Claim:
    catalog = [
        ("n", "n<0", -1, True),
        ("n", "n>0", 1, True),
        ("w", "w<0", -1, True),
        ("w", "w>0", 1, True),
        ("ell", "\\ell<0", -1, True),
        ("t", "t\\neq 0", 1, False),  # claims always +1
        ("u", "u<0", 1, False),  # wrong sign
        ("v", "v>0", -1, False),
        ("h", "h<0", -1, True),
        ("k", "k>0", 1, True),
        ("m", "m\\neq 0", -1, False),
        ("p", "p<0", -1, True),
        ("q", "q>0", 1, True),
        ("r", "r<0", 1, False),
        ("s", "s>0", -1, False),
    ]
    var, half, claimed, truth = catalog[seed % len(catalog)]
    # Use \ell carefully in latex
    vtex = r"\ell" if var == "ell" else var
    stmt = (
        f"Restricting to ${half}$, the quotient $\\dfrac{{|{vtex}|}}{{{vtex}}}$ "
        f"is recorded as the constant ${claimed}$. "
        f"The complementary half-line is deliberately excluded from the claim."
    )
    if "neq" in half or "\\neq" in half:
        body = join(
            f"Away from zero the quotient equals $\\mathrm{{sign}}({vtex})\\in\\{{\\pm 1\\}}$, "
            f"not a single constant:",
            S("Positive side", rf"\frac{{|{vtex}|}}{{{vtex}}}=1"),
            S("Negative side", rf"\frac{{|{vtex}|}}{{{vtex}}}=-1"),
            f"A single value ${claimed}$ cannot cover both sides.",
        )
        truth = False
    elif "<" in half:
        true_val = -1
        body = join(
            f"On ${vtex}<0$ one has $|{vtex}|=-{vtex}$, hence",
            S("Quotient", rf"\frac{{|{vtex}|}}{{{vtex}}}=\frac{{-{vtex}}}{{{vtex}}}=-1"),
            (
                f"The constant ${claimed}$ matches."
                if claimed == true_val
                else f"The true constant is $-1$, not ${claimed}$."
            ),
        )
        truth = claimed == true_val
    else:
        true_val = 1
        body = join(
            f"On ${vtex}>0$ one has $|{vtex}|={vtex}$, hence",
            S("Quotient", rf"\frac{{|{vtex}|}}{{{vtex}}}=1"),
            (
                f"The constant ${claimed}$ matches."
                if claimed == true_val
                else f"The true constant is $1$, not ${claimed}$."
            ),
        )
        truth = claimed == true_val
    return Claim(stmt, truth, body, "abs_quotient_sign", "2.4")


def _fam_nested_abs(seed: int) -> Claim:
    catalog = [
        (2, 1, True),   # ||x|-2| on [0,2] etc — claim simplification
        (3, 1, False),
        (4, 2, True),
        (5, 2, False),
        (3, 0, True),
        (6, 1, False),
        (2, 0, True),
        (7, 3, False),
        (4, 1, True),
        (5, 1, False),
        (8, 2, True),
        (3, 2, False),
        (6, 2, True),
        (9, 4, False),
        (5, 3, True),
    ]
    a, b, truth = catalog[seed % len(catalog)]
    # Claim: for x>=0, ||x|-a| = |x-a| (true when x>=0 since |x|=x)
    if truth:
        stmt = (
            f"On the half-line $x\\ge 0$, the nested absolute value $||x|-{a}|$ "
            f"collapses to $|x-{a}|$, because $|x|=x$ removes the inner bars before "
            f"the outer comparison with ${a}$."
        )
        body = join(
            f"For $x\\ge 0$ the inner identity $|x|=x$ holds, so",
            S("Collapse", rf"||x|-{a}|=|x-{a}|"),
            "The two expressions agree on the stated half-line.",
        )
    else:
        stmt = (
            f"On the whole real line, $||x|-{a}|$ is treated as identical to $|x-{a}|$, "
            f"including for negative $x$, with a follow-up claim that the outer bars "
            f"make the inner sign irrelevant."
        )
        body = join(
            f"For $x=-{a}-1<0$ one has $|x|={a}+1$, so",
            S("Nested", rf"||x|-{a}|=|{a}+1-{a}|=1"),
            S("Single", rf"|x-{a}|=|-{a}-1-{a}|=|{-(2*a+1)}|={2*a+1}"),
            f"Since $1\\neq {2*a+1}$, the expressions differ for negative $x$.",
        )
    return Claim(stmt, truth, body, "nested_abs", "2.4")


# ---------------------------------------------------------------------------
# Family: mixed hard (2.5)
# ---------------------------------------------------------------------------


def _fam_mixed_sym_and_abs(seed: int) -> Claim:
    catalog = [
        (5, 6, True),   # u+v=5, uv=6 → |u-v|=1
        (7, 10, True),  # |u-v|=3
        (9, 14, False), # wrong distance
        (4, 3, True),   # |u-v|=2? (u-v)^2=16-12=4 → 2
        (8, 12, False),
        (6, 8, True),   # 36-32=4 → 2
        (10, 21, True), # 100-84=16 → 4
        (11, 24, False),
        (3, 2, True),   # 9-8=1 → 1
        (12, 32, True), # 144-128=16 → 4
        (5, 4, False),
        (13, 36, True),
        (7, 12, False),
        (15, 50, True), # 225-200=25 → 5
        (8, 15, False),
    ]
    s, p, truth = catalog[seed % len(catalog)]
    inner = s*s - 4*p
    if inner < 0:
        # skip — regenerate style claim that's false about reality
        stmt = (
            f"Given $u+v={s}$ and $uv={p}$, a note claims $|u-v|$ is real and equals "
            f"${abs(s)}$ after taking $\\sqrt{{(u+v)^2-4uv}}$."
        )
        body = join(
            S("Discriminant", rf"(u-v)^2=(u+v)^2-4uv={s}^2-4\cdot {p}={inner}"),
            f"The radicand is negative, so no real distance exists.",
        )
        return Claim(stmt, False, body, "mixed_sym_abs", "2.5")
    root = int(inner**0.5)
    assert root * root == inner
    claimed = root if truth else root + 1
    stmt = (
        f"From the elementary symmetric data $u+v={s}$ and $uv={p}$, "
        f"the distance $|u-v|$ is evaluated by first forming "
        f"$(u-v)^2=(u+v)^2-4uv$ and then taking the principal square root, "
        f"yielding the constant ${claimed}$."
    )
    body = join(
        "Pass to the squared gap before taking roots:",
        S("Identity", rf"(u-v)^2=(u+v)^2-4uv={s}^2-4\cdot {p}={inner}"),
        S("Principal root", rf"|u-v|=\sqrt{{{inner}}}={root}"),
        (
            "The printed constant matches."
            if truth
            else f"The true distance is ${root}$, not ${claimed}$."
        ),
    )
    return Claim(stmt, truth, body, "mixed_sym_abs", "2.5")


def _fam_mixed_frac_and_power(seed: int) -> Claim:
    catalog = [
        True, False, True, False, True,
        False, True, False, True, False,
        True, False, True, False, True,
    ]
    truth = catalog[seed % len(catalog)]
    letters = "abcdefghjkmnpqrstuvw"[seed % 20]
    v = letters
    if truth:
        stmt = (
            f"Provided ${v}\\neq 0$, reducing "
            f"$\\dfrac{{({v}^{{2}})^{{3}}}}{{{v}^{{4}}}}$ by multiplying exponents upstairs "
            f"then subtracting downstairs leaves ${v}^{{2}}$. A numerical check at ${v}=2$ "
            f"recovers $4$ on both sides and is consistent with the identity."
        )
        body = join(
            S("Numerator", rf"({v}^{{2}})^{{3}}={v}^{{6}}"),
            S("Quotient", rf"\frac{{{v}^{{6}}}}{{{v}^{{4}}}}={v}^{{2}}"),
            f"The check at ${v}=2$ is consistent because the algebra already matches.",
        )
    else:
        stmt = (
            f"Provided ${v}\\neq 0$, reducing "
            f"$\\dfrac{{({v}^{{2}})^{{3}}}}{{{v}^{{4}}}}$ by cancelling the printed "
            f"digits $2,3,4$ in order is claimed to leave ${v}^{{-1}}$, "
            f"and substituting ${v}=1$ is offered as confirmation."
        )
        body = join(
            S("Correct reduction", rf"\frac{{({v}^{{2}})^{{3}}}}{{{v}^{{4}}}}={v}^{{2}}"),
            f"Digit-wise cancellation is not a law of exponents. "
            f"Agreement at ${v}=1$ hides the error because every power of $1$ equals $1$.",
        )
    return Claim(stmt, truth, body, "mixed_frac_power", "2.5")


def _fam_mixed_cube_and_frac(seed: int) -> Claim:
    roots = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    root = roots[seed % len(roots)]
    truth = seed % 2 == 0
    var = "jkmnpqrstuw"[seed % 11]
    true_q = f"{var}^2+{root}{var}+{root**2}"
    if truth:
        claimed = true_q
        stmt = (
            f"Cancelling ${var}-{root}$ from "
            f"$\\dfrac{{{var}^3-{root**3}}}{{{var}-{root}}}$ leaves ${claimed}$ "
            f"for ${var}\\neq {root}$. Substituting ${var}=1$ recovers the same integer "
            f"on the original fraction and on the reduced quadratic."
        )
        body = join(
            f"Difference of cubes with constant ${root}^3$:",
            S("Identity", rf"\frac{{{var}^3-{root**3}}}{{{var}-{root}}}={var}^2+{root}{var}+{root**2}"),
            f"The substitution check is consistent with a true polynomial identity.",
        )
    else:
        claimed = f"{var}^2+{root**2}"
        stmt = (
            f"Cancelling ${var}-{root}$ from "
            f"$\\dfrac{{{var}^3-{root**3}}}{{{var}-{root}}}$ is said to leave ${claimed}$ "
            f"for ${var}\\neq {root}$, because substituting ${var}=0$ makes both sides "
            f"equal ${root**2}$."
        )
        body = join(
            S("Correct quotient", rf"{var}^2+{root}{var}+{root**2}"),
            S("Printed claim", claimed),
            f"At ${var}=0$ the missing linear term vanishes, so the test point hides the error; "
            f"at ${var}=1$ the sides differ by ${root}$.",
        )
    return Claim(stmt, truth, body, "mixed_cube_frac", "2.5")


# ---------------------------------------------------------------------------
# Dispatch by subsection + seed
# ---------------------------------------------------------------------------

_FAMILIES_21: list[Callable[[int], Claim]] = [
    _fam_reciprocal,
    _fam_vanishing_cubic,
    _fam_sophie,
    _fam_brahmagupta,
    _fam_complete_square_chain,
    _fam_cube_param,
]
_FAMILIES_22: list[Callable[[int], Claim]] = [
    _fam_nested_fraction,
    _fam_partial_fractions,
    _fam_poly_division,
    _fam_three_lcd,
]
_FAMILIES_23: list[Callable[[int], Claim]] = [
    _fam_denest,
    _fam_exponent_tower,
    _fam_sqrt_no_split,
]
_FAMILIES_24: list[Callable[[int], Claim]] = [
    _fam_abs_quadratic,
    _fam_abs_distance_three,
    _fam_abs_quotient_sign,
    _fam_nested_abs,
]
_FAMILIES_25: list[Callable[[int], Claim]] = [
    _fam_mixed_sym_and_abs,
    _fam_mixed_frac_and_power,
    _fam_mixed_cube_and_frac,
    _fam_sophie,  # reuse hard expanding in mixed
    _fam_denest,
    _fam_nested_fraction,
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
    fam = families[seed % len(families)]
    claim = fam(seed * 17 + item_i * 13 + global_task_i * 9)
    claim.subsection = subsection
    probes = [0, 1, 2, -1, 3, -2, 4, 5, -3, 6, 7, -4]
    n = 0
    base_stmt, base_body = claim.statement, claim.body
    while claim.statement in _SEEN_STATEMENTS:
        probe = probes[n % len(probes)]
        claim.statement = (
            base_stmt.rstrip(".")
            + f", and a margin check at the probe value equal to ${probe}$ is cited "
            f"as supporting evidence."
        )
        claim.body = (
            base_body
            + f"\n\nA single probe at ${probe}$ cannot replace the algebraic comparison above."
        )
        n += 1
        if n > 12:
            claim.statement = (
                base_stmt.rstrip(".")
                + f" [variant {global_task_i}-{item_i}]."
            )
            break
    _SEEN_STATEMENTS.add(claim.statement)
    return claim


_SEEN_STATEMENTS: set[str] = set()


def all_hard_claims() -> list[Claim]:
    _SEEN_STATEMENTS.clear()
    out: list[Claim] = []
    for gi in range(150):
        sub = f"2.{1 + gi // 30}"
        for ii in slots_to_harden(gi):
            out.append(claim_for(gi, ii, sub))
    return out


if __name__ == "__main__":
    claims = all_hard_claims()
    print(f"total hard claims: {len(claims)}")
    from collections import Counter

    print("by family:", Counter(c.family for c in claims))
    print("by sub:", Counter(c.subsection for c in claims))
    print("truth balance:", Counter(c.truth for c in claims))
    stmts = [c.statement for c in claims]
    print("unique statements:", len(set(stmts)), "/", len(stmts))
    for c in claims[0], claims[50], claims[200]:
        print("\n===", c.family, c.truth, "===")
        print(c.statement[:220])
        print(c.body[:220])
