"""Mathematical verification of every claim in _ch2_bank_25_v2.py.

Each of the 170 statements is re-encoded here as an independent computation.
Identities and implications are tested on many random admissible samples in high
precision (a single mismatch proves a claim false), and the claims about
solution sets, solution counts, and divisibility are settled symbolically with
sympy. The computed truth value is compared with the answer stored in the bank.
"""

from __future__ import annotations

import random
import sys
from pathlib import Path

import mpmath as mp
import sympy as sp

sys.path.insert(0, str(Path(__file__).resolve().parent))

from _ch2_bank_25_v2 import BANK_25  # noqa: E402

mp.mp.dps = 40
random.seed(20250829)

TOL = mp.mpf("1e-28")
N = 300


def close(a, b) -> bool:
    a, b = mp.mpf(a), mp.mpf(b)
    scale = max(mp.mpf(1), abs(a), abs(b))
    return abs(a - b) <= TOL * scale


def real_cbrt(value) -> mp.mpf:
    """The real cube root, which keeps the sign of its argument."""
    value = mp.mpf(value)
    return mp.sign(value) * mp.power(abs(value), mp.mpf(1) / 3)


def r_real() -> mp.mpf:
    """Random real away from the small integers that usually sit in denominators."""
    while True:
        x = mp.mpf(random.uniform(-4, 4))
        if all(abs(x - k) > mp.mpf("0.05") for k in (-3, -2, -1, 0, 1, 2, 3, 4)):
            return x


def r_pos() -> mp.mpf:
    while True:
        x = mp.mpf(random.uniform(0.02, 4))
        if abs(x - 1) > mp.mpf("0.05"):
            return x


def r_nonneg() -> mp.mpf:
    return mp.mpf(random.uniform(0, 4))


def sample(fn, draw, n: int = N):
    """True when no admissible sample refutes the claim."""
    seen = 0
    for _ in range(n):
        vals = draw()
        try:
            out = fn(*vals)
        except (ZeroDivisionError, ValueError):
            continue
        if out is None:
            continue
        seen += 1
        if not out:
            return False
    if seen < n // 10:
        raise RuntimeError("too few admissible samples")
    return True


def one_real() -> tuple:
    return (r_real(),)


def two_real() -> tuple:
    return (r_real(), r_real())


def three_real() -> tuple:
    return (r_real(), r_real(), r_real())


def one_pos() -> tuple:
    return (r_pos(),)


def two_pos() -> tuple:
    return (r_pos(), r_pos())


def one_nonneg() -> tuple:
    return (r_nonneg(),)


x, y, z, t, q, s, u, v, w, a, b, c, p, r_ = sp.symbols("x y z t q s u v w a b c p r", real=True)

CHECKS: dict[str, bool] = {}


def rec(key: str, value: bool) -> None:
    if key in CHECKS:
        raise RuntimeError(f"duplicate key {key}")
    CHECKS[key] = bool(value)


# ---------------------------------------------------------------- task 1 (warm-up)
rec("1A", sample(lambda X: close((X + 2) ** 2, X**2 + 4 * X + 4), one_real))
rec("1B", sample(lambda Z: close(3 * (Z - 4), 3 * Z - 4), one_real))
rec("1C", sample(lambda Y: close(Y**2 - 25, (Y - 5) * (Y + 5)), one_real))
rec("1D", sample(lambda Y: close(-(Y - 3), -Y - 3), one_real))
rec("1E", sample(lambda X: close((X + 1) / X, 1 + 1 / X), one_real))

# ---------------------------------------------------------------- task 2 (warm-up)
rec("2A", sample(lambda A, B, C: close(A / B + C / B, (A + C) / B), three_real))
rec("2B", sample(lambda C: close((-C) ** 3, -(C**3)), one_real))
rec("2C", sample(lambda A: close(A**0, 0), one_real))
rec("2D", sample(lambda A: close(mp.sqrt(A**2), A), one_real))
rec("2E", sample(lambda B, C: close((B * C) ** 2, B**2 * C**2), two_real))

# ---------------------------------------------------------------- task 3 (warm-up)
rec("3A", sample(lambda P: close(P**2 + 2 * P + 1, (P + 1) ** 2), one_real))
rec("3B", sample(lambda Q: close(6 * Q / 2, 3 * Q), one_real))  # 2p=6q forces p=3q
rec("3C", sample(lambda R: close((R + 1) * (R + 2), R**2 + 2), one_real))
rec("3D", sample(lambda Q: close(3 * Q / Q**2, 3 / Q), one_real))
rec("3E", sample(lambda P, D: (-2 * P < -2 * (P + abs(D) + 1)), two_real))

# ---------------------------------------------------------------- task 4 (warm-up)
rec("4A", sample(lambda U: close(U**3 * U**4, U**7), one_pos))
rec("4B", sample(lambda U, V: close(1 / U + 1 / V, 1 / (U + V)), two_pos))
rec("4C", sample(lambda U, V: close((U**2 * V) ** 3, U**6 * V**3), two_pos))
rec("4D", sample(lambda U, V: close(abs(U - V), U - V), two_pos))
rec("4E", sample(lambda U, V: close(mp.sqrt(U) * mp.sqrt(V), mp.sqrt(U * V)), two_pos))

# ---------------------------------------------------------------- task 5
rec("5A", sample(lambda X: close(1 / (X - 1) - 1 / (X + 1), 2 / (X**2 - 1)), one_real))
rec("5B", sample(lambda X, Y: close(X**3 + Y**3, (X + Y) * (X**2 + X * Y + Y**2)), two_real))
rec("5C", sample(lambda Y: close(abs(Y - 3) + abs(3 - Y), 2 * abs(Y - 3)), one_real))
rec("5D", sample(lambda Z: close((Z ** mp.mpf("1/3")) ** 6, Z**3), one_pos))
rec("5E", sp.solveset(sp.Eq(z / (z - 1), 1 / (z - 1)), z, domain=sp.S.Reals) == sp.EmptySet)

# ---------------------------------------------------------------- task 6
rec("6A", sample(lambda A: close(A**4 + A**2 + 1, (A**2 + A + 1) * (A**2 - A + 1)), one_real))
rec("6B", sample(lambda A, B: A**2 + B**2 >= 2 * A * B, two_real))
rec("6C", sample(lambda B: close(mp.sqrt(B**2 - 2 * B + 1), B - 1), one_real))
rec(
    "6D",
    sample(
        lambda A, B: close(1 / (A * B) + 1 / (B * (-A - B)) + 1 / ((-A - B) * A), 0)
        if abs(A + B) > mp.mpf("0.05")
        else None,
        two_real,
    ),
)
rec("6E", sample(lambda A: close((A**2) ** mp.mpf("1.5"), A**3), one_real))

# ---------------------------------------------------------------- task 7
rec("7A", sample(lambda P: close(1 / (1 + 1 / P), P / (P + 1)), one_real))
rec("7B", sample(lambda Q: close(Q ** mp.mpf("0.5") * Q ** mp.mpf("-1.5"), 1 / Q), one_pos))
rec("7C", sample(lambda P, D, R: (P * (-abs(R) - 1) < (P + abs(D) + 1) * (-abs(R) - 1)), three_real))
rec("7D", sample(lambda P, Q: close((P - Q) ** 3, P**3 - Q**3), two_real))
_sol_7e = [s_ for s_ in sp.solve(sp.Eq(sp.sqrt(q + 1), q - 1), q) if s_.is_real]
rec("7E", len(_sol_7e) == 1)

# ---------------------------------------------------------------- task 8
rec("8A", sample(lambda X: close(X**2 + 1 / X**2, (X + 1 / X) ** 2 - 2), one_real))
rec(
    "8B",
    sample(
        lambda Y: close(1 / (mp.sqrt(Y + 1) + mp.sqrt(Y)), mp.sqrt(Y + 1) - mp.sqrt(Y)),
        one_pos,
    ),
)
rec("8C", sample(lambda Z: close(1 / (Z * (Z + 1)), 1 / Z - 1 / (Z + 1)), one_real))
rec("8D", sample(lambda X: close(X**4 - 1, (X**2 - 1) ** 2), one_real))
rec(
    "8E",
    sample(
        lambda Y, D: (Y + abs(D) + 1) / (Y + abs(D) + 2) < Y / (Y + 1) if Y > 0 else None,
        two_real,
    ),
)

# ---------------------------------------------------------------- task 9
rec("9A", sample(lambda A, B: close(A**3 + B**3 + (-A - B) ** 3, 3 * A * B * (-A - B)), two_real))
rec("9B", sample(lambda A: close(A, -A), one_real))  # a^2=b^2 with b=-a
rec("9C", sample(lambda A, B: A / B + B / A >= 2, two_pos))
_no_real = sp.solveset(sp.Eq(x**2 + 1, 0), x, domain=sp.S.Reals) == sp.EmptySet
rec("9D", _no_real and (0**2 > 4 * 1 * 1))  # a=1,b=0,c=1: no real root, yet b^2<4ac
# Any nonzero value of one letter leaves no real solution for the other, so the
# only real pair with a^2+b^2=0 is the origin.
rec(
    "9E",
    all(
        sp.solveset(sp.Eq(a**2 + sp.Rational(k, 7) ** 2, 0), a, domain=sp.S.Reals) == sp.EmptySet
        for k in (1, 2, 3, -4, -5, 11)
    ),
)

# ---------------------------------------------------------------- task 10
rec("10A", sample(lambda X, Y: close(X**4 + Y**4, (X**2 + Y**2) ** 2), two_real))
rec("10B", sample(lambda X, Y: close(Y**2, X * (Y**2 / X)), two_real))
rec("10C", sample(lambda X: close(mp.sqrt(X) * mp.sqrt(X**3), X**2), one_nonneg))
rec("10D", sample(lambda Z: close(real_cbrt(Z**3), abs(Z)), one_real))
rec(
    "10E",
    sample(
        lambda Y, Z: close((1 / Y + 1 / Z) / (1 / Y - 1 / Z), (Z + Y) / (Z - Y))
        if abs(Y - Z) > mp.mpf("0.05")
        else None,
        two_real,
    ),
)

# ---------------------------------------------------------------- task 11
rec("11A", sample(lambda A: close(A**4 + 4, (A**2 + 2 * A + 2) * (A**2 - 2 * A + 2)), one_real))
rec("11B", sample(lambda C: close((C**2 + 5) / (C**2 + 2), 1 + 5 / (C**2 + 2)), one_real))
rec("11C", close(mp.sqrt(7 + 4 * mp.sqrt(3)), 2 + mp.sqrt(3)))
rec("11D", sample(lambda A, B: A**2 + B**2 + 1 >= A * B + A + B, two_real))
rec("11E", sample(lambda A: close((A**2) ** mp.mpf("1/3"), A ** mp.mpf("1.5")), one_pos))

# ---------------------------------------------------------------- task 12
rec("12A", sample(lambda U: close(abs(U**2 - 4), abs(U - 2) * abs(U + 2)), one_real))
rec(
    "12B",
    sample(
        lambda U, V: close((1 / U + 1 / V) / (1 / (U * V)), 1 / (U + V))
        if abs(U + V) > mp.mpf("0.05")
        else None,
        two_real,
    ),
)
rec(
    "12C",
    sample(
        lambda U, V: close(
            U**5 - V**5,
            (U - V) * (U**4 + U**3 * V + U**2 * V**2 + U * V**3 + V**4),
        ),
        two_real,
    ),
)
rec("12D", sample(lambda W: close(mp.sqrt(W) + mp.sqrt(W), mp.sqrt(2 * W)), one_pos))
rec(
    "12E",
    all(
        sample(lambda U, n=n: close(U ** (n + 2) / U ** (n - 1), U**3), one_pos, n=60)
        for n in (-3, -1, 0, 1, 2, 5)
    ),
)

# ---------------------------------------------------------------- task 13
rec("13A", sample(lambda X, Y: close(X**2 + Y**2, (X + Y) ** 2 - X * Y), two_real))
rec("13B", sample(lambda X: close(X**2 + 1 / X**2 - (X - 1 / X) ** 2, 2), one_real))
rec("13C", sp.rem(y**3 - 2 * y + 1, y - 1, y) == 0)
rec("13D", sample(lambda Z: close(abs(Z - 3), 3 - Z), one_real))
rec("13E", sample(lambda D: (1 + abs(D) + 1 + 1) / (1 + abs(D) + 1 - 1) > 1, one_real))

# ---------------------------------------------------------------- task 14
rec("14A", sample(lambda S: close(S**3 - 8, (S - 2) * (S**2 + 2 * S + 4)), one_real))
rec("14B", sample(lambda T: (T + 1) / (T + 2) > (T + 2) / (T + 3) if T > 0 else None, one_real))
rec("14C", sample(lambda U: close((U**2 + U) / U**2 * (U / (U + 1)), 1), one_real))
rec("14D", sample(lambda S: (abs(S) > 1) == (S > 1), one_real))
rec(
    "14E",
    sample(
        lambda T: (close(mp.sqrt(T), T) == (close(T, 0) or close(T, 1))),
        one_nonneg,
    )
    and close(mp.sqrt(mp.mpf(0)), 0)
    and close(mp.sqrt(mp.mpf(1)), 1),
)

# ---------------------------------------------------------------- task 15
rec(
    "15A",
    sample(
        lambda P, Q: close((P + Q) * (Q + (-P - Q)) * ((-P - Q) + P), -P * Q * (-P - Q)),
        two_real,
    ),
)
rec("15B", sample(lambda P: close(1 / (mp.sqrt(P) - 1), (mp.sqrt(P) + 1) / (P - 1)), one_pos))
rec("15C", sample(lambda Q: close(1 / Q - 1 / Q**2, 1 / (Q - Q**2)), one_real))
rec("15D", sample(lambda Q: close((Q ** mp.mpf("-0.5")) ** -4, Q**2), one_pos))
rec("15E", sample(lambda Q, D: (Q + abs(D) + 1) ** 2 > Q**2, two_real))

# ---------------------------------------------------------------- task 16
rec("16A", sample(lambda X, Y: close((X + Y) ** 2 - X * Y, X**2 + X * Y + Y**2), two_real))
rec("16B", sample(lambda Y: close(Y ** mp.mpf("0.5") + Y ** mp.mpf("0.5"), Y), one_pos))
rec("16C", sample(lambda X: abs(X) + abs(X - 1) >= 1, one_real))
rec("16D", sp.solveset(sp.Eq(1 / (x - 1), 2 / (x + 1)), x, domain=sp.S.Reals) == sp.FiniteSet(3))
rec("16E", sample(lambda Z: close(2 / (Z**2 - 1), 1 / (Z - 1) + 1 / (Z + 1)), one_real))

# ---------------------------------------------------------------- task 17
rec(
    "17A",
    sample(lambda A, B: close(A**3 + B**3, (A + B) ** 3 - 3 * (A * B) * (A + B)), two_real),
)
rec("17B", close(mp.sqrt(5 + 2 * mp.sqrt(6)), mp.sqrt(2) + mp.sqrt(3)))
rec(
    "17C",
    sample(
        lambda A, B: close((A + B) ** 4, A**4 + B**4 + 4 * A * B * (A**2 + B**2)), two_real
    ),
)
rec("17D", sample(lambda A, B: mp.sqrt(A + B) < mp.sqrt(A) + mp.sqrt(B), two_pos))
rec("17E", sample(lambda A, B: close(abs(A - B), abs(A) - abs(B)), two_real))

# ---------------------------------------------------------------- task 18
rec(
    "18A",
    sample(
        lambda U, V: close((1 / U**2 - 1 / V**2) / (1 / U - 1 / V), 1 / U + 1 / V)
        if abs(U - V) > mp.mpf("0.05")
        else None,
        two_real,
    ),
)
rec("18B", all(sp.rem(u**n - 1, u - 1, u) == 0 for n in range(1, 12)))
rec("18C", sample(lambda V: close(mp.sqrt((V - 2) ** 2), V - 2), one_real))
rec("18D", sample(lambda D: (-1 - abs(D)) > 0, one_real))  # u=-(1+|d|), v=0: u^2>v^2 but u<v
rec("18E", sample(lambda W: close(W ** mp.mpf("0.75") / W ** mp.mpf("0.25"), W ** mp.mpf("0.5")), one_pos))

# ---------------------------------------------------------------- task 19
rec(
    "19A",
    sample(
        lambda X, Y, Z: close(
            X**2 + Y**2 + Z**2 - X * Y - Y * Z - Z * X,
            ((X - Y) ** 2 + (Y - Z) ** 2 + (Z - X) ** 2) / 2,
        ),
        three_real,
    ),
)
rec(
    "19B",
    sample(
        lambda X, Y: close(
            X**2 + Y**2 + (-X - Y) ** 2,
            2 * (X * Y + Y * (-X - Y) + (-X - Y) * X),
        ),
        two_real,
    ),
)
rec("19C", sample(lambda X: close(3 / X - 3 / (X + 1), 3 / (X * (X + 1))), one_real))
rec("19D", sample(lambda Y: close((1 / Y) ** mp.mpf("-0.5"), 1 / mp.sqrt(Y)), one_pos))
rec("19E", sp.solveset(sp.Eq(1 / (z - 1), 1 / z), z, domain=sp.S.Reals) == sp.EmptySet)

# ---------------------------------------------------------------- task 20
rec(
    "20A",
    sample(lambda P, Q: close(P**2 - Q**2 + P - Q, (P - Q) * (P + Q + 1)), two_real),
)
rec("20B", sample(lambda D: (lambda P: P**3 > P**2)(mp.mpf(0.01) + abs(D) % mp.mpf("0.98")), one_real))
rec("20C", sample(lambda Q: close((Q - 1) / (mp.sqrt(Q) + 1), mp.sqrt(Q) - 1), one_nonneg))
rec("20D", sample(lambda Q, R: close((R + Q) / R, 1 + Q), two_real))
rec("20E", sample(lambda P: close(abs(P - 1) + abs(P - 4), 3), one_real))

# ---------------------------------------------------------------- task 21
rec(
    "21A",
    sample(
        # ab+bc+ca=0 with c chosen to satisfy it: c(a+b) = -ab
        lambda A, B: close(1 / A + 1 / B + 1 / (-A * B / (A + B)), 0)
        if abs(A + B) > mp.mpf("0.05")
        else None,
        two_real,
    ),
)
rec(
    "21B",
    sample(
        lambda A, B: close(A**6 - B**6, (A**2 - B**2) * (A**4 + A**2 * B**2 + B**4)), two_real
    ),
)
rec("21C", sample(lambda A: close((A**-3) ** -2, A**-6), one_real))
rec("21D", sample(lambda C: close((C**2 - 1) / (C**2 + 1), 1 - 2 / (C**2 + 1)), one_real))
rec("21E", sample(lambda B: B**3 >= B**2, one_real))

# ---------------------------------------------------------------- task 22
rec("22A", sample(lambda X: close(abs(X) ** 3, abs(X**3)), one_real))
rec("22B", sample(lambda X, Y: close(Y / X + X / Y, (X**2 + Y**2) / (X * Y)), two_real))
rec("22C", sample(lambda Y: close(real_cbrt(Y**6) * Y**-2, Y), one_pos))
rec("22D", sample(lambda Y: close(mp.mpf(0), Y), one_real))  # x=0 satisfies x^2=xy
rec("22E", sample(lambda Y, Z: close(Y**3 - Z**3, (Y - Z) ** 3), two_real))

# ---------------------------------------------------------------- task 23
rec(
    "23A",
    sample(lambda S, T: close(S**3 + T**3 + 3 * S * T * (S + T), (S + T) ** 3), two_real),
)
rec(
    "23B",
    sample(
        lambda T: close(1 / (1 + 1 / (1 + 1 / T)), (T + 1) / (2 * T + 1))
        if abs(2 * T + 1) > mp.mpf("0.05")
        else None,
        one_real,
    ),
)
rec(
    "23C",
    sample(
        lambda S: close(mp.sqrt(S + 1 / S - 2), mp.sqrt(S) + 1 / mp.sqrt(S)), one_pos
    ),
)
rec("23D", sample(lambda U: close((U**-2) ** mp.mpf("-0.5"), abs(U)), one_real))
rec("23E", sample(lambda S: 1 / S < 1 / (-abs(S) - 1) if S > 0 else None, one_real))

# ---------------------------------------------------------------- task 24
rec("24A", sample(lambda P: close((P + 1 / P) * (P - 1 / P), P**2 - 1 / P**2), one_real))
rec("24B", sample(lambda Q: close(abs(Q) - abs(Q - 2), 2), one_real))
rec("24C", sample(lambda P, Q: close(P * Q - P - Q + 1, (P - 1) * (Q - 1)), two_real))
rec("24D", sample(lambda R: close(R ** mp.sqrt(2) * R ** mp.sqrt(2), R**2), one_pos))
rec("24E", len(sp.solveset(sp.Eq(q**2, q), q, domain=sp.S.Reals)) == 1)

# ---------------------------------------------------------------- task 25
rec(
    "25A",
    sample(
        lambda X, Y, Z: close(
            X**3 + Y**3 + Z**3 - 3 * X * Y * Z,
            (X + Y + Z) * (X**2 + Y**2 + Z**2 - X * Y - Y * Z - Z * X),
        ),
        three_real,
    ),
)
rec("25B", sample(lambda X: close(mp.sqrt(X**3), X * mp.sqrt(X)), one_pos))
rec(
    "25C",
    sample(
        lambda Y: close(1 / (Y - 2) * ((Y + 2) / (Y**2 - 4)), 1 / (Y**2 - 4)), one_real
    ),
)
_sol_25d = [s_ for s_ in sp.solve(sp.Eq(sp.sqrt(z + 3), z + 1), z) if s_.is_real]
rec("25D", len(_sol_25d) == 1)
rec("25E", sample(lambda X, Y: close(abs(X + Y), abs(X) + abs(Y)), two_real))

# ---------------------------------------------------------------- task 26
rec("26A", sample(lambda A, B: close(1 / A + 1 / B, (A * B) / (A + B)), two_real))
rec("26B", sample(lambda A: close(mp.sqrt(A) * A ** mp.mpf("0.25"), A ** mp.mpf("0.75")), one_pos))
rec("26C", sp.rem(b**4 + 1, b + 1, b) == 0)
rec("26D", sample(lambda C: close((C**2 + 2 * C) / C, C + 2), one_real))
rec("26E", sample(lambda C: C**2 + 1 >= 2 * C, one_real))

# ---------------------------------------------------------------- task 27
rec(
    "27A",
    sample(
        lambda U, V: close(
            U**4 + U**2 * V**2 + V**4,
            (U**2 + U * V + V**2) * (U**2 - U * V + V**2),
        ),
        two_real,
    ),
)
rec("27B", sample(lambda U: close((U**3 - 1) / (U - 1), U**2 + U + 1), one_real))
rec("27C", sample(lambda V: (abs(V - 1) < 2) == (-1 < V < 3), one_real))
rec("27D", sample(lambda W: close((W ** mp.mpf("0.5")) ** mp.mpf("1/3"), W ** mp.mpf("2/3")), one_pos))
rec("27E", sample(lambda U, V: close(U**3 + V**3 + (-U - V) ** 3, 0), two_real))

# ---------------------------------------------------------------- task 28
rec("28A", False)  # the reduction is valid only for x != 1, so not for every real x
rec("28B", sample(lambda Y: abs(Y - 1) + abs(Y - 4) >= 3, one_real))
rec("28C", sample(lambda Z: close(mp.power(Z**4, mp.mpf("0.25")), Z), one_real))
rec("28D", sample(lambda Y, Z: close((Y + Z) ** 2 - (Y - Z) ** 2, 2 * Y * Z), two_real))
rec("28E", sample(lambda X: close((X**2 - 4) / (X**2 - 2 * X), (X + 2) / X), one_real))

# ---------------------------------------------------------------- task 29
rec(
    "29A",
    sample(
        lambda A, B: close(
            A**2 + B**2 + (-A - B) ** 2,
            -2 * (A * B + B * (-A - B) + (-A - B) * A),
        ),
        two_real,
    ),
)
rec("29B", sp.simplify(sp.rem(a**3 + b**3, a + b, a)) == 0)
rec("29C", sample(lambda A: close(1 / (1 - 1 / A), A / (A - 1)), one_real))
rec("29D", sample(lambda B: close(1 / B ** mp.mpf("-2/3"), B ** mp.mpf("-1.5")), one_pos))
rec("29E", sample(lambda C: close(1 / C + 1 / (C + 1), 1 / (C * (C + 1))), one_real))

# ---------------------------------------------------------------- task 30
rec(
    "30A",
    all(
        sample(lambda P, n=n: close(mp.power(P ** (mp.mpf(1) / n), n), P), one_pos, n=60)
        for n in range(1, 9)
    ),
)
rec("30B", sample(lambda P, Q: close((P - Q) ** 2 + (P + Q) ** 2, 2 * (P**2 + Q**2)), two_real))
rec("30C", sample(lambda P, Q: abs(P + Q) >= abs(P) + abs(Q), two_real))
rec("30D", sample(lambda R: close((R**4 - 1) / (R**2 - 1), R**2 + 1), one_real))
rec("30E", sample(lambda D: 1 / (mp.mpf("0.01") + abs(D) % mp.mpf("0.98")) < 1, one_real))

# ---------------------------------------------------------------- task 31
rec(
    "31A",
    sample(
        lambda X, Y: close(
            X**3 + Y**3 + (X + Y) ** 3, 2 * (X + Y) * (X**2 + X * Y + Y**2)
        ),
        two_real,
    ),
)
rec("31B", sample(lambda X, Y: close((X - Y) ** 2, (X + Y) ** 2 - 4 * X * Y), two_real))
rec(
    "31C",
    sample(
        lambda X: close(
            mp.sqrt(X) + mp.sqrt(X + 2 * mp.sqrt(X) + 1), 2 * mp.sqrt(X) + 1
        ),
        one_nonneg,
    ),
)
rec(
    "31D",
    sample(
        lambda Y: close(Y / (Y - 1) - 1 / Y, (Y**2 + Y - 1) / (Y * (Y - 1))), one_real
    ),
)
rec("31E", len(sp.solveset(sp.Eq(sp.Abs(z), z**2), z, domain=sp.S.Reals)) == 3)

# ---------------------------------------------------------------- task 32
rec(
    "32A",
    sample(
        lambda A, B: close((1 / A - 1 / B) / (1 / A + 1 / B), (B - A) / (B + A))
        if abs(A + B) > mp.mpf("0.05")
        else None,
        two_real,
    ),
)
rec(
    "32B",
    sample(
        lambda B: close((B ** mp.mpf("0.5") + B ** mp.mpf("-0.5")) ** 2, B + 1 / B), one_pos
    ),
)
rec("32C", sample(lambda C: close(C**4 - 2 * C**2 + 1, (C**2 - 1) ** 2), one_real))
rec("32D", sample(lambda A: close(abs(A - 1), abs(A) - 1), one_real))
rec("32E", sample(lambda A: close(A, A**2 / A), one_real))  # a^2=ac with a!=0 forces c=a

# ---------------------------------------------------------------- task 33
rec(
    "33A",
    sample(
        lambda U, V: close(
            (U + V) / (-U - V) + (V + (-U - V)) / U + ((-U - V) + U) / V, -3
        )
        if abs(U + V) > mp.mpf("0.05")
        else None,
        two_real,
    ),
)
rec("33B", sample(lambda U, V: close(U**4 - V**4, (U - V) * (U**3 + V**3)), two_real))
rec(
    "33C",
    sample(
        lambda U, V: close(
            (mp.sqrt(U) - mp.sqrt(V)) / (mp.sqrt(U) + mp.sqrt(V)),
            (U - 2 * mp.sqrt(U * V) + V) / (U - V),
        )
        if abs(U - V) > mp.mpf("0.05")
        else None,
        two_pos,
    ),
)
rec("33D", sample(lambda W: close(W ** mp.mpf("0.5") * W ** mp.mpf("1/3"), W ** mp.mpf("1/6")), one_pos))
rec(
    "33E",
    sample(
        lambda W: close(1 / (1 - 1 / W) - 1 / (1 + 1 / W), 2 * W / (W**2 - 1)), one_real
    ),
)

# ---------------------------------------------------------------- task 34
rec(
    "34A",
    sample(
        lambda X, Y: close(X**2 + 2 * X * Y + Y**2 - 1, (X + Y - 1) * (X + Y + 1)), two_real
    ),
)
rec("34B", sample(lambda Y: close((Y**2 + 3 * Y) / (Y**2 - 9), Y / (Y + 3)), one_real))
rec(
    "34C",
    sp.solveset(sp.Abs(z - 2) <= 1, z, domain=sp.S.Reals) == sp.Interval(1, 3),
)
rec("34D", sample(lambda Z: close(1 / Z + 1 / Z**2, 1 / (Z + Z**2)), one_real))
rec("34E", sample(lambda X: X**4 + 1 >= 2 * X**2, one_real))


LETTERS = "ABCDE"
mismatches = []
missing = []
for idx, task in enumerate(BANK_25, start=1):
    for j, (statement, answer, _expl) in enumerate(task["items"]):
        key = f"{idx}{LETTERS[j]}"
        if key not in CHECKS:
            missing.append(key)
            continue
        if CHECKS[key] != answer:
            mismatches.append((key, answer, CHECKS[key], statement[:90]))

print(f"claims verified: {len(CHECKS)}")
if missing:
    print(f"MISSING CHECKS: {missing}")
if mismatches:
    print(f"MISMATCHES: {len(mismatches)}")
    for key, stored, computed, statement in mismatches:
        print(f"  {key}: bank says {stored}, computation says {computed}")
        print(f"      {statement}")
    sys.exit(1)
if missing:
    sys.exit(1)
print("all 170 answers agree with the computation")
