#!/usr/bin/env python3
"""Rewrite the Chapter 7 tactical explanations in the Chapter 4 tutor voice.

The Chapter 4 rhythm, reproduced here for every letter:

    **A.** → True

    <narrative opener naming the idea and translating the claim into words>

    $$one step per display, always on a single line$$

    <connecting prose>

    $$next step$$

    <closing clause>, so the statement is True.

Only lines and parabolas are discussed: no degree notation, no basis talk, no
abstract algebra vocabulary.  All numbers are produced by sympy so the prose and
the displays can never drift apart.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

from sympy import Poly, Rational, Symbol, discriminant, expand, latex, simplify, solve
from sympy.parsing.sympy_parser import (
    implicit_multiplication_application,
    parse_expr,
    standard_transformations,
)

x = Symbol("x")
PATH = Path("/workspace/src/data/math-ch7-linear-quadratic.json")
TRANSFORMS = standard_transformations + (implicit_multiplication_application,)

FALLBACKS: list[tuple[str, str, str]] = []


# --------------------------------------------------------------------------- #
# LaTeX and formatting helpers
# --------------------------------------------------------------------------- #

def L(expr) -> str:
    return latex(simplify(expr))


def F(r) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(int(r))
    sign = "-" if r < 0 else ""
    r = abs(r)
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


def par(r) -> str:
    """Wrap a number in parentheses when it needs them inside a product."""
    r = Rational(r)
    s = F(r)
    return s if (r >= 0 and r.q == 1) else f"\\left({s}\\right)"


def D(inner: str) -> str:
    """A Chapter 4 display: one formula, one line."""
    return f"$${inner}$$"


def hdr(letter: str, truth: bool) -> str:
    return f"**{letter}.** → {'True' if truth else 'False'}"


def close(truth: bool, clause: str) -> str:
    """Weave the verdict into the final sentence, Chapter 4 style."""
    clause = clause.strip().rstrip(".,;")
    return f"{clause}, so the statement is {'True' if truth else 'False'}."


def normalize_displays(text: str) -> str:
    """Force Ch4 single-line displays: $$formula$$ (no blank lines inside)."""

    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    """Assemble header, prose and displays into one Chapter 4 explanation."""
    # Coalesce legacy ["$$", formula, "$$"] triples into one display line.
    coalesced: list[str] = []
    i = 0
    while i < len(parts):
        a = parts[i]
        if (
            i + 2 < len(parts)
            and str(a).strip() == "$$"
            and str(parts[i + 2]).strip() == "$$"
        ):
            coalesced.append(f"$${str(parts[i + 1]).strip()}$$")
            i += 3
            continue
        coalesced.append(a)
        i += 1

    body = "\n\n".join(str(p).strip() for p in coalesced if p and str(p).strip())
    if "so the statement is" not in body.lower():
        bridge = (
            "This is exactly what the claim states"
            if truth
            else "This is not what the claim states"
        )
        body += "\n\n" + close(truth, bridge)
    return normalize_displays(f"{hdr(letter, truth)}\n\n{body}")


# --------------------------------------------------------------------------- #
# Parsing the stems
# --------------------------------------------------------------------------- #

def clean_poly(s: str) -> str:
    s = s.strip().rstrip(".,;")
    s = s.replace("\\,", "").replace("\\!", "").replace("\\ ", "")
    s = s.replace("\\left", "").replace("\\right", "")
    s = re.sub(r"\\frac\{([^{}]+)\}\{([^{}]+)\}", r"((\1)/(\2))", s)
    s = s.replace("^{2}", "**2").replace("^2", "**2")
    s = s.replace("{", "").replace("}", "").replace("\\", "")
    s = s.replace(" ", "")
    s = re.sub(r"(\d)(x)", r"\1*\2", s)
    s = re.sub(r"\)(\d|x)", r")*\1", s)
    return s


def parse_poly(s: str):
    return expand(parse_expr(clean_poly(s), local_dict={"x": x}, transformations=TRANSFORMS))


def extract_fg(text: str):
    fs = re.findall(r"f\(x\)\s*=\s*([^$]+)", text)
    gs = re.findall(r"g\(x\)\s*=\s*([^$]+)", text)
    f = g = None
    for cand in fs:
        try:
            fc = parse_poly(cand)
            if Poly(fc, x).degree() <= 1:
                f = fc
                break
        except Exception:
            pass
    for cand in gs:
        try:
            gc = parse_poly(cand)
            if Poly(gc, x).degree() == 2:
                g = gc
                break
        except Exception:
            pass
    return f, g


def as_rat(expr):
    try:
        return Rational(expr)
    except Exception:
        return None


def numeric_ok(expr) -> bool:
    if expr is None:
        return False
    try:
        for c in Poly(expr, x).all_coeffs():
            if as_rat(c) is None and getattr(c, "free_symbols", None):
                return False
        return True
    except Exception:
        return False


def poly_coeffs(expr):
    p = Poly(expr, x)
    return Rational(p.nth(2)), Rational(p.nth(1)), Rational(p.nth(0))


def vertex_of(g):
    a = Rational(Poly(g, x).nth(2))
    b = Rational(Poly(g, x).nth(1))
    h = Rational(-b / (2 * a))
    k = Rational(expand(g.subs(x, h)))
    return h, k, a


def rewrite_ABC(f, g):
    from sympy import Symbol as Sym
    from sympy import solve as sy_solve

    A, B, C = Sym("A"), Sym("B"), Sym("C")
    eqs = Poly(expand(g - (A * f**2 + B * f + C)), x).coeffs()
    sol = sy_solve(eqs, [A, B, C], dict=True)[0]
    return Rational(sol[A]), Rational(sol[B]), Rational(sol[C])


def vertex_form_string(a_g, h, k) -> str:
    shift = (
        rf"\left(x-{F(h)}\right)^{{2}}" if h >= 0 else rf"\left(x+{F(-h)}\right)^{{2}}"
    )
    if a_g == 1:
        lead = ""
    elif a_g == -1:
        lead = "-"
    else:
        lead = F(a_g)
    if k == 0:
        return f"{lead}{shift}"
    if k > 0:
        return f"{lead}{shift}+{F(k)}"
    return f"{lead}{shift}-{F(-k)}"


def factored_latex(a, roots) -> str:
    lead = "" if a == 1 else ("-" if a == -1 else F(a))
    rs = list(roots) if len(roots) == 2 else list(roots) * 2
    body = ""
    for r in rs:
        if r == 0:
            body += "x"
        elif r > 0:
            body += rf"\left(x-{F(r)}\right)"
        else:
            body += rf"\left(x+{F(-r)}\right)"
    return lead + body


def rational_roots(expr):
    """Sorted rational roots of a quadratic, or None when they are not rational."""
    try:
        d = Rational(discriminant(Poly(expr, x)))
    except Exception:
        return None
    if d < 0:
        return None
    try:
        found = solve(Poly(expr, x), x)
    except Exception:
        return None
    out = []
    for r in found:
        rr = as_rat(r)
        if rr is None:
            return None
        out.append(rr)
    return sorted(set(out))


def arg_tex(x0) -> str:
    x0 = Rational(x0)
    return F(x0) if (x0 >= 0 and x0.q == 1) else f"\\left({F(x0)}\\right)"


def _signed_join(terms: list[tuple[Rational, str]]) -> str:
    out = ""
    for coef, base in terms:
        coef = Rational(coef)
        if coef == 0:
            continue
        mag = abs(coef)
        if base == "":
            body = F(mag)
        elif mag == 1:
            body = base
        else:
            body = rf"{F(mag)}\cdot {base}"
        out += ("-" if coef < 0 else ("" if out == "" else "+")) + body
    return out or "0"


def subst_display(name: str, expr, x0) -> tuple[str, Rational]:
    """A Chapter 4 substitution line: $$g(4)=4^{2}-4-2=10$$."""
    x0 = Rational(x0)
    a2, a1, a0 = poly_coeffs(expr)
    xs = arg_tex(x0)
    rhs = _signed_join([(a2, f"{xs}^{{2}}"), (a1, xs), (a0, "")])
    val = Rational(expand(expr.subs(x, x0)))
    lhs = f"{name}\\left({F(x0)}\\right)" if (x0 < 0 or x0.q != 1) else f"{name}({F(x0)})"
    if rhs == F(val):
        return D(f"{lhs}={F(val)}"), val
    return D(f"{lhs}={rhs}={F(val)}"), val


def axis_display(a2, a1, h) -> str:
    return D(rf"x=-\frac{{{F(a1)}}}{{2\cdot {F(a2)}}}={F(h)}")


def disc_display(expr, sym: str = r"\Delta") -> str:
    a2, a1, a0 = poly_coeffs(expr)
    d = Rational(discriminant(Poly(expr, x)))
    return D(
        rf"{sym}={par(a1)}^{{2}}-4\left({F(a2)}\right)\left({F(a0)}\right)={F(d)}"
    )


def claimed_tail(stmt: str) -> str:
    """The last piece of inline mathematics in the statement — usually the claim."""
    spans = re.findall(r"\$([^$]+)\$", stmt)
    if not spans:
        return ""
    return spans[-1].strip().rstrip(".,;")


def claimed_number(stmt: str) -> str:
    tail = claimed_tail(stmt)
    return re.sub(r"^[a-zA-Z]\s*=\s*", "", tail)


def abc_identity(A, B, C, fL: str) -> str:
    fp = rf"\left({fL}\right)"
    return _signed_join([(A, f"{fp}^{{2}}"), (B, fp), (C, "")])


def first_mismatch(p, q):
    """A small integer where two polynomials disagree, with both values."""
    for t in (0, 1, -1, 2, -2, 3, -3, 4):
        pv = as_rat(expand(p.subs(x, t)))
        qv = as_rat(expand(q.subs(x, t)))
        if pv is not None and qv is not None and pv != qv:
            return Rational(t), pv, qv
    return None


# --------------------------------------------------------------------------- #
# Recovering the two models from the stem
# --------------------------------------------------------------------------- #

def recover_models(task: dict):
    f, g = extract_fg(task["context"])
    f2, g2 = extract_fg(task.get("solution_overview", ""))
    f = f or f2
    g = g or g2
    ctx = task["context"]

    if f is None:
        m = re.search(
            r"slope\s+\$([^$]+)\$\s+and\s+(?:\$y\$-)?intercept\s+\$([^$]+)\$",
            ctx,
            re.I,
        )
        if m:
            try:
                f = parse_poly(f"{m.group(1)}*x+({m.group(2)})")
            except Exception:
                pass

    if g is None:
        roots = re.search(r"roots?\s+\$([^$]+)\$\s+and\s+\$([^$]+)\$", ctx, re.I)
        lead = re.search(r"leading coefficient\s+\$([^$]+)\$", ctx, re.I)
        if roots:
            a = lead.group(1) if lead else "1"
            try:
                g = expand(
                    parse_poly(f"({a})*(x-({roots.group(1)}))*(x-({roots.group(2)}))")
                )
            except Exception:
                pass

    if g is None:
        m = re.search(r"g_[a-z]\(x\)\s*=\s*([^$]+)", ctx)
        if m:
            raw = re.sub(r"[+\-]\s*[a-z]\s*$", "", m.group(1).strip())
            try:
                cand = parse_poly(raw)
                if numeric_ok(cand):
                    g = cand
            except Exception:
                pass

    if not numeric_ok(f):
        f = None
    if not numeric_ok(g):
        g = None
    return f, g


def build_overview(task, f, g) -> str:
    if task.get("stem_kind") == "symbolic" or f is None or g is None:
        ov = (task.get("solution_overview") or "").strip()
        ov = re.sub(r"\\deg\([^)]+\)", "highest power", ov)
        ov = ov.replace("basis", "building blocks").replace("Degree-", "Line of slope type ")
        if task.get("stem_kind") == "symbolic":
            return (
                "The stem states structural rules about lines and parabolas without "
                "fixing any coefficients, so every letter is settled by a general "
                "formula rather than by arithmetic.\n\n" + ov
            )
        return ov

    h, k, a_g = vertex_of(g)
    a2, a1, a0 = poly_coeffs(g)
    sum_r = Rational(-a1 / a2)
    prod_r = Rational(a0 / a2)
    diff = expand(f - g)
    Delta = Rational(discriminant(Poly(expand(g - f), x)))
    n_int = 2 if Delta > 0 else (1 if Delta == 0 else 0)
    meetings = {2: "two", 1: "one", 0: "no"}[n_int]

    try:
        A, B, C = rewrite_ABC(f, g)
        rw = (
            "Because $f$ is a line with non-zero slope, the square $f(x)^{2}$ already "
            "carries an $x^{2}$ term, so $g$ can be rebuilt from $f(x)^{2}$, $f(x)$ and "
            "a constant. Matching coefficients gives\n\n"
            + D(rf"A={F(A)},\quad B={F(B)},\quad C={F(C)}")
        )
    except Exception:
        rw = (
            "Because $f$ is a line with non-zero slope, a rewriting "
            "$g=A f^{2}+B f+C$ exists and is uniquely determined."
        )

    return "\n\n".join(
        [
            "The stem fixes the two models",
            D(rf"f(x)={L(f)}\qquad g(x)={L(g)}"),
            "Completing the square locates the turning point of the parabola, and "
            "Vieta's relations give the sum $S$ and the product $P$ of its roots.",
            D(
                rf"\text{{vertex}}=\left({F(h)},{F(k)}\right)"
                rf"\qquad S={F(sum_r)}\qquad P={F(prod_r)}"
            ),
            "The graphs meet where the difference vanishes, and the discriminant of "
            f"that quadratic counts the meetings: here there are {meetings}.",
            D(rf"f(x)-g(x)={L(diff)}\qquad \Delta={F(Delta)}"),
            rw,
        ]
    )


# --------------------------------------------------------------------------- #
# Explanations when both models are concrete
# --------------------------------------------------------------------------- #

def expl_with_fg(letter, stmt, truth, f, g) -> str | None:
    sl = stmt.lower()
    compact = stmt.replace(" ", "")
    cl = claimed_tail(stmt)
    cn = claimed_number(stmt)

    a2, a1, a0 = poly_coeffs(g)
    m_f = Rational(Poly(f, x).nth(1))
    q_f = Rational(Poly(f, x).nth(0))
    h, k, _ = vertex_of(g)
    S = Rational(-a1 / a2)
    P = Rational(a0 / a2)
    diff = expand(f - g)
    gmf = expand(g - f)
    Delta = Rational(discriminant(Poly(gmf, x)))
    disc_g = Rational(discriminant(Poly(g, x)))
    n_int = 2 if Delta > 0 else (1 if Delta == 0 else 0)
    fL, gL = L(f), L(g)
    up = a2 > 0

    # --- completing the square ------------------------------------------- #
    if "completing" in sl and "square" in sl:
        parts = [
            "Completing the square rewrites a parabola as $a(x-h)^{2}+k$, where $h$ is "
            "the abscissa of the axis of symmetry and $k$ is the height of the vertex, "
            "so both numbers have to be produced first.",
            D(f"g(x)={gL}"),
            "The axis comes from the first two coefficients.",
            axis_display(a2, a1, h),
            "The vertex height is the value of $g$ on that axis.",
            subst_display("g", g, h)[0],
            "Putting the leading coefficient, the shift and the height together gives",
            D(rf"g(x)={vertex_form_string(a2, h, k)}"),
        ]
        if truth:
            parts.append(
                close(True, "This is the very expression the claim displays")
            )
        else:
            try:
                rhs = re.sub(r"^.*?g\(x\)\s*=\s*", "", cl)
                claimed_poly = parse_poly(rhs)
                mm = first_mismatch(claimed_poly, g)
                if mm is not None:
                    t, pv, qv = mm
                    parts.append(
                        f"The claim writes ${cl}$ instead, which expands to "
                        f"${L(claimed_poly)}$ and takes the value ${F(pv)}$ at "
                        f"$x={F(t)}$ where $g$ takes ${F(qv)}$"
                    )
                    parts[-1] = close(False, parts[-1])
                else:
                    parts.append(
                        close(False, f"The claim writes ${cl}$, a different expression")
                    )
            except Exception:
                parts.append(
                    close(False, f"The claim writes ${cl}$, a different expression")
                )
        return pack(letter, truth, parts)

    # --- rewriting g through f -------------------------------------------- #
    wants_rewrite = (
        ("exist" in sl and re.search(r"a,\s*b,\s*c|A,\s*B,\s*C", stmt))
        or "forces $a=" in sl
        or "forces $A=" in stmt
        or ("matching" in sl and "f^{2}" in compact)
    )
    if wants_rewrite:
        try:
            A, B, C = rewrite_ABC(f, g)
        except Exception:
            return None
        lower = bool(re.search(r"a,\s*b,\s*c", stmt))
        nA, nB, nC = ("a", "b", "c") if lower else ("A", "B", "C")
        if "exist" in sl:
            parts = [
                "A line with non-zero slope already produces an $x^{2}$ term once it is "
                f"squared, so the three expressions $f(x)^{{2}}$, $f(x)$ and $1$ can be "
                "combined to reach any parabola at all.",
                D(f"f(x)={fL}\\qquad g(x)={gL}"),
                f"Equating the $x^{{2}}$ coefficients gives ${nA}$, then equating the "
                f"$x$ coefficients gives ${nB}$, and finally equating the constant "
                f"terms gives ${nC}$.",
                D(rf"{nA}={F(A)},\quad {nB}={F(B)},\quad {nC}={F(C)}"),
                "Substituting the three numbers back reproduces $g$ exactly.",
                D(rf"{abc_identity(A, B, C, fL)}={gL}"),
                close(
                    truth,
                    "Such a triple of real numbers therefore does exist"
                    if truth
                    else "No such triple exists",
                ),
            ]
            return pack(letter, truth, parts)

        parts = [
            "Write $g(x)=A f(x)^{2}+B f(x)+C$ and compare the two sides term by term. "
            "Only the first summand can create an $x^{2}$ term, and squaring the line "
            f"contributes ${par(m_f)}^{{2}}x^{{2}}$.",
            D(rf"A\cdot {par(m_f)}^{{2}}={F(a2)}"),
            D(rf"A={F(A)}"),
            "Equating the $x$ coefficients and then the constant terms gives the two "
            "remaining numbers.",
            D(rf"B={F(B)},\quad C={F(C)}"),
        ]
        if truth:
            parts.append(close(True, "These are the forced values the claim reports"))
        else:
            parts.append(
                close(False, f"The claim reports ${cl}$ instead of these forced values")
            )
        return pack(letter, truth, parts)

    # --- nested evaluations, both orders ---------------------------------- #
    m = re.search(r"\$([fg])\(([fg])\((-?\d+)\)\)=([fg])\(([fg])\((-?\d+)\)\)\$", compact)
    if m:
        out1, in1, p1, out2, in2, p2 = m.groups()
        M = {"f": f, "g": g}
        v_in1 = Rational(expand(M[in1].subs(x, Rational(p1))))
        v_1 = Rational(expand(M[out1].subs(x, v_in1)))
        v_in2 = Rational(expand(M[in2].subs(x, Rational(p2))))
        v_2 = Rational(expand(M[out2].subs(x, v_in2)))
        parts = [
            "Nesting is not symmetric: feeding the line into the parabola need not "
            "agree with feeding the parabola into the line, so each order has to be "
            "computed on its own, working from the inside outwards.",
            D(
                f"{in1}({p1})={F(v_in1)}\\qquad "
                f"{out1}\\left({F(v_in1)}\\right)={F(v_1)}"
            ),
            D(
                f"{in2}({p2})={F(v_in2)}\\qquad "
                f"{out2}\\left({F(v_in2)}\\right)={F(v_2)}"
            ),
        ]
        if truth:
            parts.append(
                close(True, f"Both orders land on the same number ${F(v_1)}$")
            )
        else:
            parts.append(
                close(
                    False,
                    f"The two orders give ${F(v_1)}$ and ${F(v_2)}$, which are "
                    "different numbers",
                )
            )
        return pack(letter, truth, parts)

    # --- nested evaluation, single value ---------------------------------- #
    m = re.search(r"\$([fg])\(([fg])\((-?\d+)\)\)=(-?[^$]+)\$", compact)
    if m:
        outer, inner, p0, _ = m.groups()
        M = {"f": f, "g": g}
        d_in, v_in = subst_display(inner, M[inner], Rational(p0))
        d_out, v_out = subst_display(outer, M[outer], v_in)
        parts = [
            "A nested value is computed from the inside outwards: evaluate the inner "
            "function at the given number first, then feed the result into the outer "
            "function.",
            d_in,
            f"That output now becomes the input of ${outer}$.",
            d_out,
        ]
        if truth:
            parts.append(
                close(True, f"The nested value is ${F(v_out)}$, the number claimed")
            )
        else:
            parts.append(
                close(
                    False,
                    f"The nested value is ${F(v_out)}$ while the claim reports ${cn}$",
                )
            )
        return pack(letter, truth, parts)

    # --- nested functions: which powers survive --------------------------- #
    if "nested function" in sl or ("$x^{3}$" in stmt and "nested" in sl):
        if "g(f(x))" in compact:
            gf = expand(g.subs(x, f))
            parts = [
                "Nesting substitutes the line in place of $x$ inside the parabola, so "
                "expand the square of a first-degree expression and collect the terms.",
                D(rf"g\left(f(x)\right)={a2 if False else L(g.subs(x, f))}"),
                "Squaring a first-degree expression can only reach $x^{2}$; the powers "
                "of nested functions multiply rather than add.",
                D(rf"g\left(f(x)\right)={L(gf)}"),
            ]
            lc = Rational(Poly(gf, x).nth(2))
            if truth:
                parts.append(
                    close(
                        True,
                        f"The highest power present is $x^{{2}}$ with coefficient "
                        f"${F(lc)}\\neq 0$, so the nested function is again a parabola",
                    )
                )
            else:
                parts.append(
                    close(
                        False,
                        "The highest power present is $x^{2}$, so no $x^{3}$ term "
                        "ever appears",
                    )
                )
            return pack(letter, truth, parts)
        if "f(g(x))" in compact:
            fg = expand(f.subs(x, g))
            parts = [
                "Applying the line to the parabola multiplies the parabola by the slope "
                "and then adds the intercept, so no new power of $x$ can be created.",
                D(rf"f\left(g(x)\right)={par(m_f)}\left({gL}\right)+{par(q_f)}"),
                "Expanding the bracket keeps the highest power exactly where it was.",
                D(rf"f\left(g(x)\right)={L(fg)}"),
            ]
            lc = Rational(Poly(fg, x).nth(2))
            if truth:
                parts.append(
                    close(
                        True,
                        f"The highest power is $x^{{2}}$ with coefficient ${F(lc)}"
                        r"\neq 0$, so the nested function is again a parabola",
                    )
                )
            else:
                parts.append(
                    close(
                        False,
                        "The highest power is $x^{2}$: nesting multiplies the powers "
                        "$1$ and $2$ instead of adding them, so no $x^{3}$ term appears",
                    )
                )
            return pack(letter, truth, parts)

    # --- vertical translation cannot flatten the difference ---------------- #
    if "translation" in sl and "constant function" in sl:
        lc = Rational(Poly(diff, x).nth(2))
        parts = [
            "Translating a graph vertically adds a fixed number to its formula, which "
            "changes the constant term and nothing else, so the $x^{2}$ term of the "
            "difference survives untouched.",
            D(rf"f(x)-g(x)={L(diff)}"),
            "Shifting $g$ by any real $t$ replaces $g$ by $g+t$ in that difference.",
            D(rf"f(x)-\left(g(x)+t\right)={L(diff)}-t"),
            f"The coefficient of $x^{{2}}$ stays ${F(lc)}$ for every shift $t$, so the "
            "difference remains a genuine parabola and never flattens out",
        ]
        parts[-1] = close(truth, parts[-1])
        return pack(letter, truth, parts)

    # --- the "it looks cubic" trap ---------------------------------------- #
    if "cubic" in sl:
        lc = Rational(Poly(diff, x).nth(2))
        parts = [
            "Appearances are settled by expanding: the difference of a line and a "
            "parabola is written out in full and its highest power read off.",
            D(rf"f(x)-g(x)=\left({fL}\right)-\left({gL}\right)"),
            D(rf"f(x)-g(x)={L(diff)}"),
            f"The highest power is $x^{{2}}$ with coefficient ${F(lc)}$, so the meeting "
            "abscissas solve a quadratic equation, and a quadratic has at most two real "
            "solutions",
        ]
        parts[-1] = close(truth, parts[-1])
        return pack(letter, truth, parts)

    # --- meetings are exactly the zeros of d ------------------------------ #
    if "wherever" in sl and "d" in sl:
        parts = [
            "The difference is defined pointwise, so asking where it vanishes is the "
            "same as asking where the two heights agree.",
            D(r"d(x)=f(x)-g(x)"),
            D(r"d(x)=0\iff f(x)=g(x)"),
            "An abscissa satisfying the right-hand equation gives a point lying on both "
            "graphs, and conversely every common point makes the difference vanish.",
            "The zeros of $d$ are therefore precisely the meeting abscissas",
        ]
        parts[-1] = close(truth, parts[-1])
        return pack(letter, truth, parts)

    # --- d is a quadratic / its graph is a parabola ------------------------ #
    if re.search(r"\bd\b", sl) and ("quadratic" in sl or "parabola" in sl):
        lc = Rational(Poly(diff, x).nth(2))
        parts = [
            "A line has no $x^{2}$ term, so subtracting it from a parabola cannot cancel "
            "the $x^{2}$ term of the parabola.",
            D(rf"d(x)=\left({fL}\right)-\left({gL}\right)"),
            D(rf"d(x)={L(diff)}"),
            f"The leading coefficient is ${F(lc)}\\neq 0$, so $d$ is itself a quadratic "
            "function and its graph is a parabola",
        ]
        parts[-1] = close(truth, parts[-1])
        return pack(letter, truth, parts)

    # --- leading coefficient ---------------------------------------------- #
    if "leading coefficient" in sl:
        target = diff if re.search(r"of \$?d", sl) else g
        name = "d" if target is diff else "g"
        parts = [
            "The leading coefficient is the number multiplying the highest power of $x$ "
            "once the formula has been expanded, so expand first and read afterwards.",
        ]
        if name == "d":
            parts.append(D(rf"d(x)=\left({fL}\right)-\left({gL}\right)"))
        parts.append(D(rf"{name}(x)={L(target)}"))
        lc = Rational(Poly(target, x).nth(2))
        parts.append(
            close(
                truth,
                f"The coefficient in front of $x^{{2}}$ is ${F(lc)}$"
                + ("" if truth else f", not the claimed ${cn}$"),
            )
        )
        return pack(letter, truth, parts)

    # --- average rate of change ------------------------------------------- #
    if "average rate" in sl:
        g0 = Rational(expand(g.subs(x, 0)))
        g2v = Rational(expand(g.subs(x, 2)))
        avg = Rational((g2v - g0) / 2)
        parts = [
            "The average rate of change over an interval is the slope of the chord "
            "joining the two endpoint values, so evaluate $g$ at both ends and divide "
            "by the width of the interval.",
            D(r"\frac{g(2)-g(0)}{2-0}"),
            D(f"g(0)={F(g0)}\\qquad g(2)={F(g2v)}"),
            D(rf"\frac{{{par(g2v)}-{par(g0)}}}{{2}}={F(avg)}"),
        ]
        if "slope" in sl:
            parts += [
                "The line is compared through its own slope, the coefficient of $x$.",
                D(f"f(x)={fL}"),
                close(
                    truth,
                    f"The chord slope ${F(avg)}$ and the slope ${F(m_f)}$ of the line "
                    "agree"
                    if truth
                    else f"The chord slope is ${F(avg)}$ while the line has slope "
                    f"${F(m_f)}$, two different numbers",
                ),
            ]
        else:
            parts.append(
                close(
                    truth,
                    f"The average rate of change is ${F(avg)}$, the number claimed"
                    if truth
                    else f"The average rate of change is ${F(avg)}$, not the claimed "
                    f"${cn}$",
                )
            )
        return pack(letter, truth, parts)

    # --- mean value theorem ----------------------------------------------- #
    if re.search(r"exists?\s*\$c", stmt) or ("there exists" in sl and "g'(c)" in compact):
        g0 = Rational(expand(g.subs(x, 0)))
        g2v = Rational(expand(g.subs(x, 2)))
        avg = Rational((g2v - g0) / 2)
        gp = expand(g.diff(x))
        c = Rational((avg - a1) / (2 * a2))
        parts = [
            "A parabola is smooth everywhere, so on the closed interval $[0,2]$ the mean "
            "value theorem applies: some interior abscissa has instantaneous slope equal "
            "to the average slope across the interval.",
            D(rf"\frac{{g(2)-g(0)}}{{2}}=\frac{{{par(g2v)}-{par(g0)}}}{{2}}={F(avg)}"),
            "The derivative of a parabola is a line, so the equation $g'(c)$ equal to "
            "that number is linear and can be solved outright.",
            D(rf"g'(x)={L(gp)}"),
            D(rf"{F(2 * a2)}c+{par(a1)}={F(avg)}\implies c={F(c)}"),
            close(
                truth,
                f"The solution $c={F(c)}$ does lie inside the open interval $(0,2)$"
                if truth
                else f"The solution $c={F(c)}$ lies outside the open interval $(0,2)$",
            ),
        ]
        return pack(letter, truth, parts)

    # --- vertical gap on the axis ----------------------------------------- #
    if "gap" in sl:
        fh = Rational(expand(f.subs(x, h)))
        gap = Rational(fh - k)
        parts = [
            "The vertical gap between the two graphs at a given abscissa is the "
            "difference of the two heights there, so locate the axis of the parabola "
            "first and then evaluate both models on it.",
            axis_display(a2, a1, h),
            "Both functions are evaluated at that abscissa.",
            subst_display("f", f, h)[0],
            subst_display("g", g, h)[0],
            "Subtracting the parabola height from the line height gives the gap.",
            D(rf"f\left({F(h)}\right)-g\left({F(h)}\right)={par(fh)}-{par(k)}={F(gap)}"),
            close(
                truth,
                f"The gap is ${F(gap)}$, exactly the value claimed"
                if truth
                else f"The gap is ${F(gap)}$ while the claim reports ${cn}$",
            ),
        ]
        return pack(letter, truth, parts)

    # --- tangency and touching -------------------------------------------- #
    if "tangent" in sl or ("touch" in sl and "graph" in sl):
        parts = [
            "The graphs touch without crossing when the equation $g(x)=f(x)$ has a "
            "repeated solution, and a quadratic has a repeated root exactly when its "
            "discriminant vanishes.",
            D(rf"g(x)-f(x)={L(gmf)}=0"),
            disc_display(gmf),
        ]
        if "axis" in sl:
            fh = Rational(expand(f.subs(x, h)))
            gap = Rational(fh - k)
            parts += [
                "The axis of the parabola also has to be checked, because contact there "
                "would need the two heights to coincide on it.",
                axis_display(a2, a1, h),
                D(
                    rf"f\left({F(h)}\right)-g\left({F(h)}\right)={par(fh)}-{par(k)}"
                    rf"={F(gap)}"
                ),
                close(
                    truth,
                    f"The discriminant is ${F(Delta)}$ and the two graphs are "
                    f"${F(gap)}$ apart on the axis, so nothing is touched there",
                ),
            ]
            return pack(letter, truth, parts)
        if Delta == 0:
            r0 = rational_roots(gmf)
            pt = ""
            if r0:
                hv = Rational(expand(f.subs(x, r0[0])))
                pt = (
                    f" The single solution is $x={F(r0[0])}$, where both graphs have "
                    f"height ${F(hv)}$."
                )
            parts.append(
                "A vanishing discriminant collapses the two solutions into one, so the "
                "two curves have exactly one common point and share their slope there."
                + pt
            )
            parts.append(
                close(
                    truth,
                    "That single point of contact is precisely what the claim describes"
                    if truth
                    else "A single point of contact is not what the claim describes",
                )
            )
        else:
            r0 = rational_roots(gmf)
            word = "two distinct" if Delta > 0 else "no"
            extra = ""
            if Delta > 0 and r0 and len(r0) == 2:
                extra = f" The graphs cross at $x={F(r0[0])}$ and $x={F(r0[1])}$."
            parts.append(
                f"The discriminant is ${F(Delta)}$, so the equation has {word} real "
                "solutions and the curves cross transversally rather than touch."
                + extra
            )
            parts.append(
                close(
                    truth,
                    "That rules out tangency"
                    if not truth
                    else "That is exactly the situation the claim describes",
                )
            )
        return pack(letter, truth, parts)

    # --- the difference at the y-axis ------------------------------------- #
    if (
        re.search(r"\(f\s*-\s*g\)\(0\)", stmt)
        or re.search(r"\$d\(0\)", stmt)
        or (("f(x)-g(x)" in compact or "f-g" in compact) and "y-axis" in sl)
    ):
        y0 = Rational(expand(diff.subs(x, 0)))
        name = "d" if re.search(r"\$d\(0\)", stmt) else "f-g"
        parts = [
            "A graph crosses the $y$-axis at the value its function takes when $x=0$, "
            "so expand the difference and substitute zero.",
            D(rf"\left(f-g\right)(x)={L(diff)}"),
            D(rf"\left(f-g\right)(0)={F(y0)}"),
            "Equivalently, the two intercepts can be subtracted directly.",
            D(
                f"f(0)={F(Rational(expand(f.subs(x, 0))))}\\qquad "
                f"g(0)={F(Rational(expand(g.subs(x, 0))))}"
            ),
            close(
                truth,
                f"The difference meets the $y$-axis at height ${F(y0)}$, as claimed"
                if truth
                else f"The difference meets the $y$-axis at height ${F(y0)}$ rather "
                "than at $0$",
            ),
        ]
        return pack(letter, truth, parts)

    # --- meeting on the y-axis -------------------------------------------- #
    if ("meet" in sl or "intersect" in sl) and "y-axis" in sl:
        f0 = Rational(expand(f.subs(x, 0)))
        g0 = Rational(expand(g.subs(x, 0)))
        parts = [
            "Meeting on the $y$-axis would mean the two functions take the same value "
            "at $x=0$, so compare the two intercepts.",
            subst_display("f", f, 0)[0],
            subst_display("g", g, 0)[0],
            close(
                truth,
                f"Both intercepts equal ${F(f0)}$, so the point "
                f"$\\left(0,{F(f0)}\\right)$ lies on both graphs"
                if truth
                else f"The line starts at height ${F(f0)}$ and the parabola at "
                f"${F(g0)}$, so the $y$-axis carries no common point",
            ),
        ]
        return pack(letter, truth, parts)

    # --- counting the meetings -------------------------------------------- #
    count_words = (
        "more than twice",
        "three points",
        "three times",
        "exactly two points",
        "intersect twice",
        "never meet",
        "do not meet",
        "at least twice",
    )
    if any(w in sl for w in count_words):
        parts = [
            "Common points of a line and a parabola are the solutions of "
            "$g(x)=f(x)$, so move everything to one side; the result is again a "
            "quadratic, and a quadratic equation has at most two real solutions.",
            D(rf"g(x)-f(x)=\left({gL}\right)-\left({fL}\right)"),
            D(rf"g(x)-f(x)={L(gmf)}=0"),
            "The discriminant decides how many of those solutions are real.",
            disc_display(gmf),
        ]
        rr = rational_roots(gmf)
        if Delta > 0:
            where = (
                f" at $x={F(rr[0])}$ and $x={F(rr[1])}$"
                if rr and len(rr) == 2
                else ""
            )
            parts.append(
                f"A positive discriminant gives two distinct real solutions, so the "
                f"graphs cross exactly twice{where}."
            )
        elif Delta == 0:
            parts.append(
                "A vanishing discriminant leaves one repeated solution, so the graphs "
                "have exactly one common point and touch there."
            )
        else:
            parts.append(
                "A negative discriminant leaves no real solution, so the two graphs "
                "have no common point at all."
            )
        counted = {2: "two", 1: "one", 0: "no"}[n_int]
        parts.append(
            close(
                truth,
                f"The exact count is {counted}, which is what the claim asserts"
                if truth
                else f"The exact count is {counted}, and no quadratic equation can do "
                "better than two",
            )
        )
        return pack(letter, truth, parts)

    # --- meeting at prescribed abscissas ---------------------------------- #
    if ("meet" in sl or "intersect" in sl) and re.search(r"\$x\s*=", stmt):
        wanted = [
            as_rat(parse_poly(v))
            for v in re.findall(r"\$x\s*=\s*(-?[0-9./\\{}frac]+)\$", stmt)
        ]
        wanted = [w for w in wanted if w is not None]
        rr = rational_roots(gmf) or []
        parts = [
            "The graphs meet at those abscissas where the two heights agree, so collect "
            "the equation $g(x)=f(x)$ on one side and solve it.",
            D(rf"g(x)-f(x)={L(gmf)}=0"),
        ]
        if rr:
            fac = factored_latex(Rational(Poly(gmf, x).nth(2)), rr)
            parts.append(D(rf"{fac}=0"))
            if len(rr) == 2:
                parts.append(D(rf"x_{{1}}={F(rr[0])}\qquad x_{{2}}={F(rr[1])}"))
            else:
                parts.append(D(rf"x={F(rr[0])}"))
            heights = ", ".join(
                rf"f\left({F(r)}\right)={F(Rational(expand(f.subs(x, r))))}" for r in rr
            )
            parts.append("The common heights follow from the line.")
            parts.append(D(heights.replace(", ", r"\qquad ")))
        else:
            parts.append(disc_display(gmf))
        listing = " and ".join(f"$x={F(r)}$" for r in rr) if rr else "nowhere"
        if truth:
            parts.append(
                close(True, f"The meetings happen at {listing}, which includes the "
                            f"abscissa named in the claim")
            )
        else:
            parts.append(
                close(False, f"The meetings happen at {listing} only, so the abscissa "
                             f"${cl}$ is not among them")
            )
        return pack(letter, truth, parts)

    # --- vertex sitting on the line --------------------------------------- #
    if "vertex" in sl and ("lies on" in sl or "on $y=f" in stmt):
        fh = Rational(expand(f.subs(x, h)))
        parts = [
            "The vertex of the parabola has to be found first, and then its height "
            "compared with the height of the line above the same abscissa.",
            axis_display(a2, a1, h),
            subst_display("g", g, h)[0],
            f"So the vertex is the point $\\left({F(h)},{F(k)}\\right)$. The line is "
            "evaluated at the same abscissa.",
            subst_display("f", f, h)[0],
            close(
                truth,
                f"Both heights equal ${F(k)}$, so the vertex does sit on the line"
                if truth
                else f"The vertex sits at height ${F(k)}$ while the line passes through "
                f"${F(fh)}$ there, so the point is not on the line",
            ),
        ]
        return pack(letter, truth, parts)

    # --- y-intercept versus vertex height --------------------------------- #
    if "vertex height" in sl:
        c0 = Rational(expand(g.subs(x, 0)))
        parts = [
            "The value at $x=0$ is the $y$-intercept, while the vertex height is the "
            "value taken on the axis of symmetry; the two agree only when the axis is "
            "the $y$-axis itself.",
            subst_display("g", g, 0)[0],
            axis_display(a2, a1, h),
            subst_display("g", g, h)[0],
            close(
                truth,
                f"The axis is $x={F(h)}$ and both numbers equal ${F(k)}$"
                if truth
                else f"The axis is $x={F(h)}$, and the intercept ${F(c0)}$ differs from "
                f"the vertex height ${F(k)}$",
            ),
        ]
        return pack(letter, truth, parts)

    # --- vertex / extreme point ------------------------------------------- #
    if "vertex" in sl or "lowest" in sl or "highest" in sl:
        parts = [
            "The vertex of a parabola lies on its axis of symmetry, whose abscissa is "
            "read from the first two coefficients, and its height is the value of the "
            "function there.",
            D(r"x=-\frac{b}{2a}"),
            D(f"g(x)={gL}"),
            axis_display(a2, a1, h),
            "Evaluating $g$ on the axis gives the height.",
            subst_display("g", g, h)[0],
            f"Because the leading coefficient ${F(a2)}$ is "
            + ("positive, the arms rise on both sides and this point is the lowest on "
               "the graph." if up else
               "negative, the arms fall on both sides and this point is the highest on "
               "the graph."),
            close(
                truth,
                f"The vertex is $\\left({F(h)},{F(k)}\\right)$, precisely the point "
                "named in the claim"
                if truth
                else f"The vertex is $\\left({F(h)},{F(k)}\\right)$ while the claim "
                f"names ${cl}$",
            ),
        ]
        return pack(letter, truth, parts)

    # --- extreme value ----------------------------------------------------- #
    if "minimum" in sl or "maximum" in sl:
        word = "smallest" if up else "largest"
        parts = [
            f"An {'upward' if up else 'downward'}-opening parabola takes its {word} "
            "value at the vertex, so the extreme value is simply the vertex height.",
            D(f"g(x)={gL}"),
            axis_display(a2, a1, h),
            "The height on the axis is the extreme value.",
            subst_display("g", g, h)[0],
            D(rf"g(x)={vertex_form_string(a2, h, k)}"),
            close(
                truth,
                f"The {word} value of $g$ is ${F(k)}$, the number claimed"
                if truth
                else f"The {word} value of $g$ is ${F(k)}$, not the claimed ${cn}$",
            ),
        ]
        return pack(letter, truth, parts)

    # --- axis versus Vieta sum -------------------------------------------- #
    if "axis" in sl and "sum" in sl:
        parts = [
            "Vieta's relation gives the sum of the two roots, while the axis of "
            "symmetry passes through their midpoint, so the two numbers differ by a "
            "factor of two.",
            D(rf"S=-\frac{{{F(a1)}}}{{{F(a2)}}}={F(S)}"),
            D(rf"x=-\frac{{{F(a1)}}}{{2\cdot {F(a2)}}}={F(h)}"),
            "The axis is half of the sum, so the two coincide only when the sum is "
            "zero.",
            close(
                truth,
                f"Here the sum is ${F(S)}$ and the axis is $x={F(h)}$, the same number"
                if truth
                else f"Here the sum is ${F(S)}$ while the axis is $x={F(h)}$, two "
                "different numbers",
            ),
        ]
        return pack(letter, truth, parts)

    # --- axis of symmetry -------------------------------------------------- #
    if "axis" in sl:
        parts = [
            "A parabola is symmetric about the vertical line through its vertex, and "
            "that line is determined by the leading and the middle coefficient alone.",
            D(r"x=-\frac{b}{2a}"),
            D(f"g(x)={gL}"),
            "Substituting the coefficients of $g$ gives the abscissa of the axis.",
            axis_display(a2, a1, h),
            close(
                truth,
                f"The axis is the line $x={F(h)}$, exactly the line named in the claim"
                if truth
                else f"The axis is the line $x={F(h)}$, whereas the claim names ${cl}$",
            ),
        ]
        return pack(letter, truth, parts)

    # --- Vieta: sum of roots ---------------------------------------------- #
    if "sum" in sl and "root" in sl:
        parts = [
            "Vieta's relations connect the coefficients of a parabola with its roots "
            "directly, without solving anything: the sum of the two roots is minus the "
            "middle coefficient divided by the leading one.",
            D(r"S=-\frac{b}{a}"),
            D(f"g(x)={gL}"),
            D(rf"S=-\frac{{{F(a1)}}}{{{F(a2)}}}={F(S)}"),
        ]
        rr = rational_roots(g)
        if rr and len(rr) == 2:
            parts.append(
                "The two roots are "
                + " and ".join(f"${F(r)}$" for r in rr)
                + f", and they indeed add up to ${F(S)}$."
            )
        parts.append(
            close(
                truth,
                f"The sum of the roots is ${F(S)}$, the number claimed"
                if truth
                else f"The sum of the roots is ${F(S)}$ while the claim reports ${cn}$",
            )
        )
        return pack(letter, truth, parts)

    # --- Vieta: product of roots ------------------------------------------ #
    if "product" in sl and "root" in sl:
        parts = [
            "Vieta's second relation gives the product of the roots as the constant "
            "term divided by the leading coefficient, and it holds whether the roots "
            "are real or a pair of complex conjugates.",
            D(r"P=\frac{c}{a}"),
            D(f"g(x)={gL}"),
            D(rf"P=\frac{{{F(a0)}}}{{{F(a2)}}}={F(P)}"),
            close(
                truth,
                f"The product of the roots is ${F(P)}$, the number claimed"
                if truth
                else f"The product of the roots is ${F(P)}$ while the claim reports "
                f"${cn}$",
            ),
        ]
        return pack(letter, truth, parts)

    # --- no real roots ----------------------------------------------------- #
    if "no real root" in sl:
        parts = [
            "Whether a parabola reaches the $x$-axis is decided by the discriminant of "
            "$g(x)=0$: the quadratic formula needs the square root of that number.",
            D(f"g(x)={gL}=0"),
            disc_display(g),
            "A negative discriminant has no real square root, so the formula produces "
            "no real solution and the graph stays entirely on one side of the axis.",
            D(rf"g(x)={vertex_form_string(a2, h, k)}"),
            close(
                truth,
                f"The smallest value of $g$ is ${F(k)}$, which is "
                + ("above" if k > 0 else "below")
                + " the axis, so there is no real root"
                if truth
                else f"The discriminant is ${F(disc_g)}$, so real roots do exist",
            ),
        ]
        return pack(letter, truth, parts)

    # --- distance between the roots --------------------------------------- #
    if "distance" in sl and "root" in sl:
        rr = rational_roots(g)
        if rr and len(rr) == 2:
            span = Rational(abs(rr[1] - rr[0]))
            parts = [
                "The two roots sit symmetrically on either side of the axis, so once "
                "they are known their separation is a single subtraction.",
                D(f"g(x)={gL}=0"),
                disc_display(g),
                D(rf"{factored_latex(a2, rr)}=0"),
                D(rf"x_{{1}}={F(rr[0])}\qquad x_{{2}}={F(rr[1])}"),
                D(rf"\left|x_{{2}}-x_{{1}}\right|={F(rr[1])}-{par(rr[0])}={F(span)}"),
                close(
                    truth,
                    f"The roots are ${F(span)}$ apart, exactly as claimed"
                    if truth
                    else f"The roots are ${F(span)}$ apart while the claim reports "
                    f"${cn}$",
                ),
            ]
            return pack(letter, truth, parts)

    # --- factorisation ----------------------------------------------------- #
    if "factor" in sl:
        rr = rational_roots(g)
        if rr:
            parts = [
                "A parabola with real roots splits into the leading coefficient times "
                "the two linear factors built from those roots, so find the roots and "
                "then reassemble.",
                D(f"g(x)={gL}=0"),
                disc_display(g),
                D(
                    rf"x_{{1}}={F(rr[0])}\qquad x_{{2}}={F(rr[-1])}"
                ),
                "Each root $r$ contributes a factor $x-r$.",
                D(rf"g(x)={factored_latex(a2, rr)}"),
                "Expanding the product returns the original formula, which confirms the "
                "factorisation.",
                close(
                    truth,
                    "This is the factorisation the claim displays"
                    if truth
                    else f"The claim displays ${cl}$ instead",
                ),
            ]
            return pack(letter, truth, parts)

    # --- roots of g -------------------------------------------------------- #
    if "root" in sl and "share" not in sl:
        rr = rational_roots(g)
        if rr:
            parts = [
                "The roots are the abscissas at which the graph meets the $x$-axis, so "
                "solve $g(x)=0$.",
                D(f"g(x)={gL}=0"),
                disc_display(g),
                "A non-negative discriminant lets the quadratic formula run.",
                D(r"x=\frac{-b\pm\sqrt{\Delta}}{2a}"),
                D(
                    rf"x_{{1}}={F(rr[0])}\qquad x_{{2}}={F(rr[-1])}"
                    if len(rr) == 2
                    else rf"x={F(rr[0])}"
                ),
                close(
                    truth,
                    "These are the two numbers the claim names"
                    if truth
                    else f"The claim names ${cl}$ instead",
                ),
            ]
            return pack(letter, truth, parts)

    # --- shared root ------------------------------------------------------- #
    if "share" in sl and "root" in sl:
        m = re.search(r"\$x\s*=\s*(-?\d+)\$", stmt)
        v = Rational(m.group(1)) if m else Rational(0)
        fv = Rational(expand(f.subs(x, v)))
        gv = Rational(expand(g.subs(x, v)))
        parts = [
            "A shared root is a number at which both functions vanish, so the proposed "
            "value is tested in each formula separately.",
            subst_display("f", f, v)[0],
            subst_display("g", g, v)[0],
        ]
        if truth:
            parts.append(
                close(True, f"Both functions vanish at $x={F(v)}$, so the root really "
                            "is common")
            )
        elif fv == 0:
            parts.append(
                close(
                    False,
                    f"The line does vanish at $x={F(v)}$, but the parabola takes the "
                    f"value ${F(gv)}$ there, so the root is not shared",
                )
            )
        else:
            parts.append(
                close(
                    False,
                    f"The two values ${F(fv)}$ and ${F(gv)}$ are not both zero, so the "
                    "root is not shared",
                )
            )
        return pack(letter, truth, parts)

    # --- lower or upper bound for g --------------------------------------- #
    if re.search(r"\\ge|\\le|≥|≤", stmt) and "for all" in sl:
        parts = [
            f"An {'upward' if up else 'downward'}-opening parabola never "
            f"{'dips below' if up else 'rises above'} its vertex, so the vertex height "
            "bounds all of its values.",
            axis_display(a2, a1, h),
            subst_display("g", g, h)[0],
            "Writing $g$ in completed-square form makes the bound visible.",
            D(rf"g(x)={vertex_form_string(a2, h, k)}"),
            f"The square is never negative and it is multiplied by ${F(a2)}$, so",
            D(rf"g(x)" + (r"\ge " if up else r"\le ") + F(k)),
            close(
                truth,
                f"Equality happens at $x={F(h)}$ and the bound ${F(k)}$ is the one the "
                "claim states"
                if truth
                else f"The correct bound is ${F(k)}$, which is not what the claim "
                "states",
            ),
        ]
        return pack(letter, truth, parts)

    # --- derivatives ------------------------------------------------------- #
    if "'" in stmt and re.search(r"[fg]'", stmt):
        gp = expand(g.diff(x))
        fp = expand(f.diff(x))
        m = re.search(r"\$([fg])'\((-?\d+)\)\s*=\s*(-?[^$]+)\$", stmt)
        if m:
            which, arg = m.group(1), Rational(m.group(2))
            der = gp if which == "g" else fp
            val = Rational(expand(der.subs(x, arg)))
            parts = [
                "Differentiating a parabola gives a line, and that line vanishes "
                "exactly on the axis of symmetry, where the tangent runs horizontally.",
                D(rf"{which}'(x)={L(der)}"),
                D(rf"{which}'\left({F(arg)}\right)={F(val)}"),
                f"The axis of $g$ is $x={F(h)}$, so a vanishing derivative there is "
                "precisely the turning point.",
                close(
                    truth,
                    f"The derivative at $x={F(arg)}$ is ${F(val)}$, the value claimed"
                    if truth
                    else f"The derivative at $x={F(arg)}$ is ${F(val)}$, not the "
                    f"claimed ${cn}$",
                ),
            ]
            return pack(letter, truth, parts)
        parts = [
            "Comparing two functions for all $x$ means comparing their formulas, not "
            "just one value, so differentiate each model and look at the results.",
            D(rf"f'(x)={L(fp)}"),
            D(rf"g'(x)={L(gp)}"),
            "The derivative of the line is a constant while the derivative of the "
            "parabola still contains $x$, so they can agree at one abscissa at most.",
            D(rf"{L(gp)}={F(m_f)}\implies x={F(Rational((m_f - a1) / (2 * a2)))}"),
            close(
                truth,
                "The two derivatives agree everywhere"
                if truth
                else "Agreement at a single abscissa is not agreement for all $x$",
            ),
        ]
        return pack(letter, truth, parts)

    # --- evenness ---------------------------------------------------------- #
    if "even" in sl:
        which = "g" if re.search(r"\$g\$\s*is even|g\s+is even", sl) else "f"
        model = g if which == "g" else f
        mirrored = expand(model.subs(x, -x))
        v1 = Rational(expand(model.subs(x, 1)))
        vm1 = Rational(expand(model.subs(x, -1)))
        parts = [
            "A function is even when replacing $x$ by $-x$ reproduces the same formula, "
            "so mirror the model and compare the two expressions.",
            D(rf"{which}(x)={L(model)}"),
            D(rf"{which}(-x)={L(mirrored)}"),
        ]
        if truth:
            parts += [
                "Every power of $x$ that appears is even, so the sign flip changes "
                "nothing at all.",
                D(rf"{which}(1)={F(v1)}\qquad {which}(-1)={F(vm1)}"),
                close(
                    True,
                    "The two formulas agree for every $x$, and the mirrored values "
                    f"${F(v1)}$ match",
                ),
            ]
        else:
            parts += [
                "The term in $x$ changes sign, so the two formulas are different; "
                "testing $x=1$ makes the discrepancy concrete.",
                D(rf"{which}(1)={F(v1)}\qquad {which}(-1)={F(vm1)}"),
                close(
                    False,
                    f"The values ${F(v1)}$ and ${F(vm1)}$ differ, which rules out "
                    "evenness",
                ),
            ]
        return pack(letter, truth, parts)

    # --- slope of the line ------------------------------------------------- #
    if "slope" in sl:
        parts = [
            "The slope of a line $y=mx+q$ is the coefficient standing in front of $x$; "
            "the constant term only lifts the line without tilting it.",
            D(f"f(x)={fL}"),
            D(rf"m={F(m_f)}"),
        ]
        if m_f == 0:
            parts.append(
                "There is no $x$ term at all, so the coefficient is $0$ and the graph "
                "is a horizontal line."
            )
        else:
            parts.append(
                "The line therefore "
                + ("rises" if m_f > 0 else "falls")
                + " from left to right, one unit of $x$ changing the height by "
                + f"${F(m_f)}$."
            )
        parts.append(
            close(
                truth,
                f"The slope is ${F(m_f)}$, exactly the number claimed"
                if truth
                else f"The slope is ${F(m_f)}$ while the claim reports ${cn}$",
            )
        )
        return pack(letter, truth, parts)

    # --- opening direction -------------------------------------------------- #
    if "opens" in sl:
        about_f = bool(re.search(r"\$f\$?\s*(?:\(x\))?\s*opens|^f opens", sl))
        if about_f:
            parts = [
                "Opening upwards or downwards is a property of parabolas and is decided "
                "by the sign of the coefficient of $x^{2}$. The line $f$ has no "
                "$x^{2}$ term at all.",
                D(f"f(x)={fL}"),
                D(rf"m={F(m_f)}"),
                "Its graph is a straight line, which neither curves upwards nor "
                "downwards; only $g$ has an opening direction here",
            ]
            parts[-1] = close(truth, parts[-1])
            return pack(letter, truth, parts)
        direction = "upwards" if up else "downwards"
        parts = [
            "A parabola $y=ax^{2}+bx+c$ opens upwards when the leading coefficient $a$ "
            "is positive and downwards when it is negative; nothing else matters.",
            D(f"g(x)={gL}"),
            D(rf"a={F(a2)}" + (r"\;>\;0" if up else r"\;<\;0")),
            f"A {'positive' if up else 'negative'} leading coefficient turns the arms of "
            f"the parabola {direction}, which also makes the vertex the "
            f"{'lowest' if up else 'highest'} point of the graph.",
            close(
                truth,
                f"The parabola opens {direction}, exactly as claimed"
                if truth
                else f"The parabola opens {direction}, which is the opposite of the "
                "claim",
            ),
        ]
        return pack(letter, truth, parts)

    # --- monotonicity of the line ------------------------------------------ #
    if any(w in sl for w in ("increasing", "decreasing", "horizontal", "constant")):
        parts = [
            "A line rises where its slope is positive, falls where its slope is "
            "negative and stays level only when the slope is zero, so the coefficient "
            "of $x$ settles the question by itself.",
            D(f"f(x)={fL}"),
            D(rf"m={F(m_f)}"),
        ]
        if m_f == 0:
            parts.append(
                f"With slope $0$ the value stays ${F(q_f)}$ whatever $x$ does, so the "
                f"graph is the horizontal line $y={F(q_f)}$."
            )
            behaviour = "constant"
        else:
            parts.append(
                "Two arbitrary abscissas show the direction directly."
            )
            parts.append(
                D(
                    rf"f\left(x_{{2}}\right)-f\left(x_{{1}}\right)="
                    rf"{par(m_f)}\left(x_{{2}}-x_{{1}}\right)"
                )
            )
            behaviour = "strictly increasing" if m_f > 0 else "strictly decreasing"
            parts.append(
                f"The difference keeps the sign of ${F(m_f)}$, so $f$ is {behaviour} "
                "on the whole real line."
            )
        parts.append(
            close(
                truth,
                f"The line is {behaviour}, exactly as claimed"
                if truth
                else f"The line is {behaviour}, which is not what the claim says",
            )
        )
        return pack(letter, truth, parts)

    # --- two evaluations compared ------------------------------------------ #
    m = re.search(r"\$([fg])\((-?\d+)\)=([fg])\((-?\d+)\)\$", compact)
    if m:
        n1, p1, n2, p2 = m.groups()
        M = {"f": f, "g": g}
        d1, v1 = subst_display(n1, M[n1], Rational(p1))
        d2, v2 = subst_display(n2, M[n2], Rational(p2))
        parts = [
            "An equality between two function values is checked by computing each side "
            "separately and then comparing the two numbers.",
            d1,
            d2,
            close(
                truth,
                f"Both sides equal ${F(v1)}$"
                if truth
                else f"The two sides are ${F(v1)}$ and ${F(v2)}$, which are different "
                "numbers",
            ),
        ]
        return pack(letter, truth, parts)

    # --- rebuilt formula --------------------------------------------------- #
    m = re.search(r"\$([fg])\(x\)\s*=\s*([^$]+)\$", stmt)
    if m and len(stmt.strip()) < 100:
        which = m.group(1)
        if which == "f":
            parts = [
                "A line is completely described by its slope and its $y$-intercept "
                "through the form $y=mx+q$, so the two numbers from the stem are simply "
                "substituted.",
                D(rf"m={F(m_f)}\qquad q={F(q_f)}"),
                D(rf"f(x)={fL}"),
                "A check at $x=0$ confirms the intercept.",
                subst_display("f", f, 0)[0],
            ]
        else:
            rr = rational_roots(g) or []
            parts = [
                "A parabola with known roots and known leading coefficient is rebuilt "
                "as the leading coefficient times the two linear factors, one for each "
                "root.",
            ]
            if len(rr) == 2:
                parts.append(D(rf"g(x)={factored_latex(a2, rr)}"))
            parts.append("Expanding the product puts $g$ into standard form.")
            parts.append(D(rf"g(x)={gL}"))
        parts.append(
            close(
                truth,
                "This is the formula the claim displays"
                if truth
                else f"The claim displays ${cl}$ instead",
            )
        )
        return pack(letter, truth, parts)

    # --- plain point evaluation -------------------------------------------- #
    m = re.search(r"\$([fg])\((-?\d+)\)\s*=\s*(-?[^$]+)\$", stmt)
    if m:
        which, arg = m.group(1), Rational(m.group(2))
        model = f if which == "f" else g
        disp, val = subst_display(which, model, arg)
        parts = [
            "Evaluating a function at a number means replacing every $x$ in its formula "
            "by that number and simplifying.",
            D(rf"{which}(x)={L(model)}"),
            disp,
        ]
        if arg == 0:
            parts.append(
                f"The value at $x=0$ is also the height at which the graph crosses the "
                f"$y$-axis, namely ${F(val)}$."
            )
        elif val == 0:
            parts.append(
                f"The value is zero, so $x={F(arg)}$ is a root and the graph crosses "
                "the $x$-axis there."
            )
        parts.append(
            close(
                truth,
                f"The computed value is ${F(val)}$, exactly the number claimed"
                if truth
                else f"The computed value is ${F(val)}$ while the claim reports "
                f"${cn}$",
            )
        )
        return pack(letter, truth, parts)

    return None


# --------------------------------------------------------------------------- #
# Explanations for the purely structural stems
# --------------------------------------------------------------------------- #

SYMBOLIC: dict[tuple[str, str], list[str]] = {
    # ---- 7.22 Discriminant logic ---------------------------------------- #
    ("MATH 7.22", "A"): [
        "The roots of a quadratic are produced by the quadratic formula, in which the "
        "discriminant sits under a square root.",
        D(r"x=\frac{-b\pm\sqrt{\Delta}}{2a}"),
        "A negative number has no real square root, so when $\\Delta<0$ the formula "
        "returns no real value at all and the two roots form a pair of conjugate "
        "complex numbers.",
        D(r"\Delta<0\implies \sqrt{\Delta}\notin\mathbb{R}"),
        close(True, "The graph then stays strictly on one side of the $x$-axis and no "
                    "real root exists"),
    ],
    ("MATH 7.22", "B"): [
        "The vertex is computed from the coefficients alone; solving $g(x)=0$ never "
        "enters the calculation.",
        D(r"x=-\frac{b}{2a}\qquad k=g\left(-\frac{b}{2a}\right)"),
        "Both expressions make sense for every $a\\neq 0$, whatever the sign of the "
        "discriminant. A negative discriminant only says the parabola misses the "
        "$x$-axis; the turning point still exists and simply sits above the axis when "
        "$a>0$ or below it when $a<0$.",
        D(r"g(x)=a\left(x+\frac{b}{2a}\right)^{2}-\frac{\Delta}{4a}"),
        close(False, "Every parabola has a vertex regardless of the sign of $\\Delta$"),
    ],
    ("MATH 7.22", "C"): [
        "When the discriminant vanishes the square root in the quadratic formula "
        "disappears and the two roots collapse into a single one.",
        D(r"x=\frac{-b\pm\sqrt{0}}{2a}=-\frac{b}{2a}"),
        "That abscissa is also the axis of symmetry, so the vertex itself lies on the "
        "$x$-axis and the completed square has no constant left over.",
        D(r"g(x)=a\left(x+\frac{b}{2a}\right)^{2}"),
        "The graph therefore reaches the axis at that one abscissa and turns back "
        "without crossing.",
        close(True, "There is exactly one contact point, as claimed"),
    ],
    ("MATH 7.22", "D"): [
        "Opposite signs mean the product $ac$ is strictly negative, and the "
        "discriminant subtracts four times that product.",
        D(r"ac<0\implies -4ac>0"),
        "The square $b^{2}$ is never negative, so adding it to a strictly positive "
        "number keeps the result strictly positive whatever $b$ happens to be.",
        D(r"\Delta=b^{2}-4ac\ge -4ac>0"),
        close(True, "A strictly positive discriminant forces two distinct real roots"),
    ],
    ("MATH 7.22", "E"): [
        "With a positive discriminant both roots are real and the quadratic formula "
        "places them symmetrically around a common centre.",
        D(r"x_{1}=\frac{-b-\sqrt{\Delta}}{2a}\qquad x_{2}=\frac{-b+\sqrt{\Delta}}{2a}"),
        "Averaging the two expressions cancels the square roots.",
        D(r"\frac{x_{1}+x_{2}}{2}=-\frac{b}{2a}"),
        "The midpoint of the roots is exactly the axis of symmetry, and since "
        "$\\sqrt{\\Delta}>0$ the two roots are genuinely different, so the axis falls "
        "strictly inside the interval they span.",
        close(True, "That is precisely the position the claim describes"),
    ],
    # ---- 7.23 Even quadratics -------------------------------------------- #
    ("MATH 7.23", "A"): [
        "Evenness means the formula is unchanged when $x$ is replaced by $-x$, so "
        "mirror the parabola and subtract.",
        D(r"g(-x)=ax^{2}-bx+c"),
        D(r"g(-x)-g(x)=-2bx"),
        "This difference vanishes for every real $x$ precisely when $b=0$; conversely, "
        "if $b=0$ the formula only involves $x^{2}$ and a constant, both untouched by a "
        "sign flip.",
        close(True, "The condition is therefore exactly $b=0$, in both directions"),
    ],
    ("MATH 7.23", "B"): [
        "An even quadratic has no linear term, and the axis of symmetry is read off "
        "from that very coefficient.",
        D(r"b=0\implies x=-\frac{b}{2a}=0"),
        "The turning point therefore sits at abscissa $0$, and its height is the value "
        "of $g$ there.",
        D(r"g(0)=c"),
        close(True, "The vertex is the point $(0,c)$, which lies on the $y$-axis"),
    ],
    ("MATH 7.23", "C"): [
        "An odd function must satisfy $g(-x)=-g(x)$ for every $x$, and reading that "
        "condition at $x=0$ already forces the value there to vanish.",
        D(r"g(0)=-g(0)\implies g(0)=0"),
        "Take the even parabola $g(x)=x^{2}+1$, which certainly satisfies "
        "$g(-x)=g(x)$, and test the odd condition on it.",
        D(r"g(-1)=2\qquad -g(1)=-2"),
        "The two numbers differ, and indeed $g(0)=1\\neq 0$, so this even quadratic is "
        "not odd.",
        close(False, "Being even does not make a quadratic odd"),
    ],
    ("MATH 7.23", "D"): [
        "The axis of a parabola is the vertical line $x=-b/(2a)$, so prescribing that "
        "line pins down the linear coefficient.",
        D(r"-\frac{b}{2a}=0\implies b=0"),
        "With $b=0$ the formula reduces to a square term plus a constant, and replacing "
        "$x$ by $-x$ leaves both untouched.",
        D(r"g(-x)=a(-x)^{2}+c=ax^{2}+c=g(x)"),
        close(True, "The mirrored formula is the original one, so $g$ is even"),
    ],
    ("MATH 7.23", "E"): [
        "Multiplying a quadratic by $-1$ multiplies every one of its coefficients by "
        "$-1$, so a coefficient that was zero stays zero.",
        D(r"-g(x)=-ax^{2}-bx-c"),
        "If $g$ is even then $b=0$, hence the linear coefficient of $-g$ is $-0=0$ as "
        "well and the mirrored formula still matches.",
        D(r"(-g)(-x)=-g(-x)=-g(x)"),
        close(False, "Evenness always survives the sign change, so it cannot be "
                     "destroyed this way"),
    ],
    # ---- 7.31 Writing a parabola using a line ---------------------------- #
    ("MATH 7.31", "A"): [
        "Write the line as $f(x)=mx+q$ with $m\\neq 0$. Squaring it already produces an "
        "$x^{2}$ term, so the three expressions $f(x)^{2}$, $f(x)$ and $1$ between them "
        "reach every power a parabola needs.",
        D(
            r"A f(x)^{2}+B f(x)+C=Am^{2}x^{2}+\left(2Amq+Bm\right)x"
            r"+\left(Aq^{2}+Bq+C\right)"
        ),
        "Comparing this with $g(x)=ax^{2}+bx+c$ gives three equations that are solved "
        "one after the other: the first fixes $A$ because $m\\neq 0$, the second then "
        "fixes $B$, and the third fixes $C$.",
        D(r"A=\frac{a}{m^{2}},\quad B=\frac{b-2Amq}{m},\quad C=c-Aq^{2}-Bq"),
        close(True, "A suitable triple can therefore always be produced"),
    ],
    ("MATH 7.31", "B"): [
        "Only the term $A f(x)^{2}$ is able to contribute an $x^{2}$, and squaring the "
        "line contributes $m^{2}x^{2}$ where $m$ is its slope.",
        D(r"Am^{2}=a"),
        "The line is non-constant, so $m\\neq 0$ and hence $m^{2}>0$; dividing is "
        "legitimate and leaves a single possible value.",
        D(r"A=\frac{a}{m^{2}}"),
        close(True, "No freedom is left in the choice of $A$: it is forced by $g$ and "
                    "$f$ alone"),
    ],
    ("MATH 7.31", "C"): [
        "Replace the line by a constant function $f(x)=\\lambda$ with $\\lambda\\neq 0$ "
        "and see what the right-hand side is still able to produce.",
        D(r"A\lambda^{2}+B\lambda+C"),
        "Every summand is now a fixed number, so the whole expression is a constant "
        "function whatever $A$, $B$ and $C$ are: it has no $x^{2}$ term and no $x$ term.",
        D(r"a\neq 0\implies ax^{2}+bx+c\neq \text{constant}"),
        close(False, "A genuine parabola can never be reached once the line degenerates "
                     "to a constant"),
    ],
    ("MATH 7.31", "D"): [
        "Nesting means substituting $f(x)$ in place of $x$ inside $g$, so start from the "
        "given rewriting and replace the argument everywhere.",
        D(r"g\left(f(x)\right)=A f\left(f(x)\right)^{2}+B f\left(f(x)\right)+C"),
        "A line composed with a line is again a line, so the inner expression is still "
        "of first degree.",
        D(r"f\left(f(x)\right)=m\left(mx+q\right)+q=m^{2}x+mq+q"),
        "Squaring that first-degree expression reaches $x^{2}$ and stops there, so the "
        "highest power in the whole expression is $x^{2}$.",
        close(False, "No $x^{4}$ term can appear"),
    ],
    ("MATH 7.31", "E"): [
        "The equation $A f(x)^{2}+B f(x)+C=0$ is a quadratic condition on the value "
        "$f(x)$, not on $x$ itself, so its solutions have no reason to be the zeros of "
        "the line.",
        D(r"g(x)=0\iff A f(x)^{2}+B f(x)+C=0"),
        "Take $f(x)=x$ and $g(x)=x^{2}-1$, which corresponds to $A=1$, $B=0$ and $C=-1$ "
        "with $A\\neq 0$.",
        D(r"f(0)=0\qquad g(0)=-1"),
        "The line vanishes at $0$ while the parabola does not, and conversely $g$ "
        "vanishes at $\\pm 1$ where $f$ does not.",
        close(False, "The two root sets are different"),
    ],
    # ---- 7.32 Vertex form uniqueness ------------------------------------- #
    ("MATH 7.32", "A"): [
        "In the form $g(x)=a(x-h)^{2}+k$ the only place $x$ appears is inside a square, "
        "and a square is never negative.",
        D(r"\left(x-h\right)^{2}\ge 0"),
        "If $a>0$ the smallest value is reached exactly when the square is zero, that is "
        "at $x=h$; if $a<0$ the same abscissa gives the largest value instead.",
        D(r"g(h)=a\cdot 0+k=k"),
        "Away from $x=h$ the square is strictly positive, so the extreme value is "
        "attained at that single abscissa.",
        close(True, "The turning point is the one point $(h,k)$"),
    ],
    ("MATH 7.32", "B"): [
        "With $a<0$ the non-negative square is multiplied by a negative number, which "
        "reverses the direction of the inequality.",
        D(r"\left(x-h\right)^{2}\ge 0\implies a\left(x-h\right)^{2}\le 0"),
        D(r"g(x)=a\left(x-h\right)^{2}+k\le k"),
        "So $k$ is the largest value the function ever takes, and there is no smallest "
        "value at all: the graph falls without bound on both sides of the vertex.",
        close(False, "The number $k$ is a maximum here, not a minimum"),
    ],
    ("MATH 7.32", "C"): [
        "Symmetry about the vertical line $x=h$ means the two values at equal distances "
        "from $h$ agree, so test the vertex form directly.",
        D(r"g(h+t)=at^{2}+k\qquad g(h-t)=at^{2}+k"),
        "The two expressions coincide for every $t$, and the constant $k$ enters both in "
        "exactly the same way; changing it slides the whole graph up or down without "
        "moving it sideways.",
        D(r"g(x)+\text{constant}\text{ still has axis }x=h"),
        close(True, "The axis is $x=h$ whatever the value of $k$"),
    ],
    ("MATH 7.32", "D"): [
        "Replacing $h$ by $-h$ moves the axis from $x=h$ to $x=-h$, which reflects the "
        "whole graph across the $y$-axis.",
        D(r"a\left(x+h\right)^{2}+k"),
        "Unless $h=0$ the two parabolas have different axes and therefore different "
        "vertices $(h,k)$ and $(-h,k)$. Taking $a=1$, $h=1$ and $k=0$ makes the gap "
        "visible at a single abscissa.",
        D(r"\left(1-1\right)^{2}=0\qquad \left(1+1\right)^{2}=4"),
        "The two formulas already disagree at $x=1$, which shows the graph really does "
        "change.",
        close(False, "The swap is harmless only in the special case $h=0$"),
    ],
    ("MATH 7.32", "E"): [
        "Completing the square turns any quadratic with $a\\neq 0$ into vertex form, "
        "which settles existence.",
        D(r"ax^{2}+bx+c=a\left(x+\frac{b}{2a}\right)^{2}+c-\frac{b^{2}}{4a}"),
        D(r"h=-\frac{b}{2a}\qquad k=c-\frac{b^{2}}{4a}"),
        "For uniqueness, expand $a(x-h)^{2}+k$ instead: the $x^{2}$ coefficient recovers "
        "$a$, the $x$ coefficient $-2ah$ then recovers $h$, and the constant finally "
        "recovers $k$. Each step leaves no choice.",
        close(True, "Existence and uniqueness of the triple $(a,h,k)$ both hold"),
    ],
    # ---- 7.33 Line meets parabola ---------------------------------------- #
    ("MATH 7.33", "A"): [
        "Common points of the two graphs are the solutions of $f(x)=g(x)$, so move "
        "everything to one side and look at what kind of equation remains.",
        D(r"g(x)-f(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right)"),
        "The line contributes only an $x$ term and a constant, so it cannot cancel the "
        "$x^{2}$ term of the parabola; with $a\\neq 0$ the difference is again a genuine "
        "quadratic.",
        D(r"a\neq 0\implies \text{at most two real solutions}"),
        close(False, "Three distinct intersection points are impossible"),
    ],
    ("MATH 7.33", "B"): [
        "Whether the graphs meet is governed by the discriminant of the difference, and "
        "a negative discriminant leaves no real solution and hence no common point.",
        D(r"g(x)=x^{2}+1\qquad f(x)=0"),
        D(r"x^{2}+1=0"),
        "This equation has no real solution because $x^{2}\\ge 0$ forces "
        "$x^{2}+1\\ge 1$, so the parabola stays strictly above the line everywhere.",
        close(True, "Such a non-intersecting pair does exist"),
    ],
    ("MATH 7.33", "C"): [
        "Tangency at an abscissa $x_{0}$ means the graphs share that point and share "
        "their slope there, so both the difference and its derivative vanish at $x_{0}$.",
        D(r"\left(g-f\right)\left(x_{0}\right)=0\qquad "
          r"\left(g-f\right)'\left(x_{0}\right)=0"),
        "A quadratic whose value and derivative both vanish at $x_{0}$ has no choice but "
        "to be a multiple of a perfect square.",
        D(r"g(x)-f(x)=a\left(x-x_{0}\right)^{2}"),
        close(True, "The factor $x-x_{0}$ appears twice, which is exactly a double root"),
    ],
    ("MATH 7.33", "D"): [
        "A constant function is a horizontal line $y=q$, so the meeting abscissas solve "
        "$g(x)=q$, and how many solutions that has depends on where the height $q$ sits "
        "relative to the vertex.",
        D(r"g(x)=x^{2}\qquad f(x)=-1"),
        D(r"x^{2}=-1"),
        "No real number squares to $-1$, so this horizontal line misses the parabola "
        "entirely; a horizontal line through the vertex would meet it exactly once "
        "instead.",
        close(False, "Two intersections are not guaranteed"),
    ],
    ("MATH 7.33", "E"): [
        "Translating $g$ vertically by a constant $t$ adds that constant to the formula "
        "and changes nothing else.",
        D(r"g(x)+t-f(x)=ax^{2}+\left(b-m\right)x+\left(c-q+t\right)"),
        "The coefficient of $x^{2}$ is still $a\\neq 0$, so the difference stays a "
        "quadratic for every shift, and a quadratic equation never has three real "
        "solutions.",
        close(False, "At most two intersections survive any vertical translation"),
    ],
    # ---- 7.34 Range of a quadratic --------------------------------------- #
    ("MATH 7.34", "A"): [
        "In vertex form the only $x$-dependence is a square, and with $a>0$ that square "
        "is multiplied by a positive number.",
        D(r"a\left(x-h\right)^{2}\ge 0"),
        D(r"g(x)\ge k"),
        "Equality happens at $x=h$, and as $x$ moves away from $h$ the square grows "
        "without bound, so every height from $k$ upwards is attained somewhere.",
        D(r"\text{range}=\left[k,+\infty\right)"),
        close(True, "This is the interval the claim gives"),
    ],
    ("MATH 7.34", "B"): [
        "With $a<0$ the non-negative square is multiplied by a negative number, which "
        "flips the inequality.",
        D(r"a\left(x-h\right)^{2}\le 0"),
        D(r"g(x)\le k"),
        "So $k$ is now the largest value rather than the smallest, and the values run "
        "downwards without bound.",
        D(r"\text{range}=\left(-\infty,k\right]"),
        close(False, "The claim states $[k,+\\infty)$, which is the range of the "
                     "opposite case"),
    ],
    ("MATH 7.34", "C"): [
        "The vertex height $k$ bounds the values of $g$ on one side, and which side is "
        "decided by the sign of $a$ alone.",
        D(r"a>0\implies g(x)\ge k\qquad a<0\implies g(x)\le k"),
        "In either case a whole half-line of real numbers is missed: nothing below $k$ "
        "when $a>0$, nothing above $k$ when $a<0$.",
        close(True, "A parabola always leaves out infinitely many real values"),
    ],
    ("MATH 7.34", "D"): [
        "For $f(x)=mx+q$ with $m\\neq 0$, pick an arbitrary target height $y$ and solve "
        "for the abscissa that reaches it.",
        D(r"mx+q=y"),
        D(r"x=\frac{y-q}{m}"),
        "The division is legitimate because $m\\neq 0$, so every real $y$ is attained, "
        "and by exactly one abscissa.",
        close(True, "Nothing is left out, so the range is all of $\\mathbb{R}$"),
    ],
    ("MATH 7.34", "E"): [
        "A vertex on the $x$-axis means its height is zero, so the vertex form loses its "
        "constant term.",
        D(r"k=0\implies g(x)=a\left(x-h\right)^{2}"),
        "With $a>0$ this is a positive number times a square, and a square is never "
        "negative.",
        D(r"g(x)=a\left(x-h\right)^{2}\ge 0"),
        "The graph touches the axis at $x=h$ and stays above it everywhere else.",
        close(True, "No negative value is ever taken"),
    ],
    # ---- 7.35 The difference d = f - g ----------------------------------- #
    ("MATH 7.35", "A"): [
        "Subtracting a line from a parabola cannot cancel the $x^{2}$ term, because a "
        "line has no $x^{2}$ term to cancel it with.",
        D(r"d(x)=\left(mx+q\right)-\left(ax^{2}+bx+c\right)"),
        D(r"d(x)=-ax^{2}+\left(m-b\right)x+\left(q-c\right)"),
        "The leading coefficient is $-a$, which is non-zero exactly because $g$ is "
        "quadratic.",
        close(True, "So $d$ is again a quadratic function, whatever the line looks like"),
    ],
    ("MATH 7.35", "B"): [
        "The $y$-intercept of any function is the value it takes at $x=0$, so evaluate "
        "the difference there.",
        D(r"d(0)=f(0)-g(0)"),
        "Subtraction of functions is carried out pointwise, so the intercept of $d$ is "
        "literally the difference of the two separate intercepts.",
        D(r"d(0)=q-c"),
        close(True, "That is exactly the expression the claim gives"),
    ],
    ("MATH 7.35", "C"): [
        "A zero of $d$ is an abscissa at which the two functions take the same value, "
        "because $d$ is their difference.",
        D(r"d(0)=0\implies f(0)=g(0)"),
        "Both graphs therefore pass through the point $\\left(0,f(0)\\right)$, and that "
        "point lies on the $y$-axis since its abscissa is $0$.",
        close(True, "The graphs do intersect on the $y$-axis"),
    ],
    ("MATH 7.35", "D"): [
        "Intersections of the two graphs correspond one for one with the real roots of "
        "the difference.",
        D(r"d(x)=0\iff f(x)=g(x)"),
        "Two distinct real roots therefore give exactly two intersection points, and "
        "since $d$ is a quadratic it cannot have a third root to offer.",
        close(False, "Two is the exact count, not a count exceeding two"),
    ],
    ("MATH 7.35", "E"): [
        "A graph is a parabola precisely when the $x^{2}$ coefficient of its formula is "
        "non-zero, so that coefficient is the only thing to check.",
        D(r"d(x)=-ax^{2}+\left(m-b\right)x+\left(q-c\right)"),
        "Because $g$ is quadratic, $a\\neq 0$ and hence $-a\\neq 0$; the curve opens "
        "upwards when $a<0$ and downwards when $a>0$.",
        close(True, "Either way the graph of $d$ is a parabola"),
    ],
    # ---- 7.41 Axis, Vieta and the half-sum trap -------------------------- #
    ("MATH 7.41", "A"): [
        "Vieta's relation gives the sum of the roots while the axis of symmetry has its "
        "own formula, so write both down and compare.",
        D(r"S=-\frac{b}{a}\qquad \ell:\;x=-\frac{b}{2a}"),
        "The axis is half of the sum, so the two vertical lines can only coincide when "
        "$S=S/2$, that is when $S=0$.",
        D(r"g(x)=x^{2}-2x\implies S=2,\quad \ell:\;x=1"),
        "Here the lines $x=2$ and $x=1$ are different, which shows the identification "
        "fails in general.",
        close(False, "The two lines are not always the same"),
    ],
    ("MATH 7.41", "B"): [
        "Both quantities are built from the same two coefficients, so each can be "
        "written out explicitly.",
        D(r"S=-\frac{b}{a}\qquad \ell:\;x=-\frac{b}{2a}"),
        "Halving the sum reproduces the axis exactly.",
        D(r"\frac{S}{2}=\frac{1}{2}\left(-\frac{b}{a}\right)=-\frac{b}{2a}"),
        close(True, "This is an identity in $a$ and $b$ needing nothing beyond "
                    "$a\\neq 0$"),
    ],
    ("MATH 7.41", "C"): [
        "A vanishing sum of roots constrains the middle coefficient through Vieta's "
        "relation.",
        D(r"S=-\frac{b}{a}=0\implies b=0"),
        "Feeding $b=0$ into the axis formula collapses it to the vertical line through "
        "the origin.",
        D(r"x=-\frac{0}{2a}=0"),
        close(True, "The line $x=0$ is the $y$-axis, exactly as the claim says"),
    ],
    ("MATH 7.41", "D"): [
        "A positive sum only says the two roots add up to something positive; it says "
        "nothing about their individual signs.",
        D(r"g(x)=x^{2}-2x-3"),
        D(r"S=2>0\qquad a=1>0"),
        D(r"x_{1}=-1\qquad x_{2}=3"),
        "Both hypotheses hold here, yet one of the roots is negative.",
        close(False, "Positivity of both roots is not forced"),
    ],
    ("MATH 7.41", "E"): [
        "The axis formula involves the leading and the middle coefficient only.",
        D(r"\ell:\;x=-\frac{b}{2a}"),
        "The constant term never appears in it, so replacing $c$ by any other number "
        "leaves the line untouched; geometrically the change slides the parabola "
        "vertically.",
        D(r"g(x)+t\text{ has axis }x=-\frac{b}{2a}"),
        close(True, "The axis never moves under such a change"),
    ],
    # ---- 7.42 Nested functions without numbers --------------------------- #
    ("MATH 7.42", "A"): [
        "Nesting substitutes the line in place of $x$ inside the parabola, so expand the "
        "square of a first-degree expression and collect the terms.",
        D(r"g\left(f(x)\right)=a\left(mx+k\right)^{2}+b\left(mx+k\right)+c"),
        D(
            r"g\left(f(x)\right)=am^{2}x^{2}+\left(2amk+bm\right)x"
            r"+\left(ak^{2}+bk+c\right)"
        ),
        "The highest power reached is $x^{2}$: powers of nested functions multiply "
        "rather than add, so $1$ and $2$ give $2$ and not $3$.",
        close(False, "No $x^{3}$ term can appear"),
    ],
    ("MATH 7.42", "B"): [
        "Applying a line to a parabola multiplies the parabola by the slope and adds the "
        "intercept, so no new power of $x$ is created.",
        D(r"f\left(g(x)\right)=m\left(ax^{2}+bx+c\right)+k"),
        D(r"f\left(g(x)\right)=max^{2}+mbx+\left(mc+k\right)"),
        "The line is non-constant, so $m\\neq 0$, and $a\\neq 0$ because $g$ is "
        "quadratic; the product $ma$ in front of $x^{2}$ is therefore non-zero.",
        close(True, "The nested function is again a parabola"),
    ],
    ("MATH 7.42", "C"): [
        "Expand both nestings and read off the highest power in each.",
        D(
            r"g\left(f(x)\right)=am^{2}x^{2}+\left(2amk+bm\right)x"
            r"+\left(ak^{2}+bk+c\right)"
        ),
        D(r"f\left(g(x)\right)=max^{2}+mbx+\left(mc+k\right)"),
        "Both leading coefficients, $am^{2}$ and $ma$, are non-zero because $a\\neq 0$ "
        "and $m\\neq 0$, so each nesting reaches $x^{2}$ and stops there.",
        close(True, "The two highest powers agree"),
    ],
    ("MATH 7.42", "D"): [
        "Equal highest power says nothing about equal formulas, so compare the two "
        "expansions on a concrete pair.",
        D(r"f(x)=x+1\qquad g(x)=x^{2}"),
        D(r"g\left(f(x)\right)=\left(x+1\right)^{2}=x^{2}+2x+1"),
        D(r"f\left(g(x)\right)=x^{2}+1"),
        "The middle terms differ, and evaluating both at $x=1$ gives $4$ against $2$.",
        close(False, "Nesting does not commute in general"),
    ],
    ("MATH 7.42", "E"): [
        "Squaring the line first produces a parabola, and nesting $g$ around that "
        "parabola doubles the highest power once more.",
        D(r"f(x)^{2}=\left(mx+k\right)^{2}=m^{2}x^{2}+2mkx+k^{2}"),
        D(r"g\left(f(x)^{2}\right)=a\left(f(x)^{2}\right)^{2}+b f(x)^{2}+c"),
        "The first summand contains $\\left(m^{2}x^{2}\\right)^{2}=m^{4}x^{4}$ with "
        "coefficient $am^{4}\\neq 0$, and the remaining terms only reach $x^{2}$, so "
        "nothing can cancel it.",
        close(True, "The highest power is $x^{4}$, exactly as claimed"),
    ],
    # ---- 7.43 Monotonicity ------------------------------------------------ #
    ("MATH 7.43", "A"): [
        "For a line the difference of two values is controlled entirely by the slope, so "
        "compare two arbitrary abscissas.",
        D(r"f\left(x_{2}\right)-f\left(x_{1}\right)=m\left(x_{2}-x_{1}\right)"),
        "If $m>0$ this difference has the same sign as $x_{2}-x_{1}$ and $f$ is strictly "
        "increasing; if $m<0$ the sign is reversed and $f$ is strictly decreasing.",
        D(r"m\neq 0\implies f\left(x_{1}\right)\neq f\left(x_{2}\right)"),
        close(True, "Because $m\\neq 0$ is assumed, one of the two cases always holds on "
                    "the whole real line"),
    ],
    ("MATH 7.43", "B"): [
        "The derivative of a parabola is a line, and that line changes sign at the axis "
        "of symmetry.",
        D(r"g'(x)=2ax+b"),
        D(r"g'(x)=0\iff x=-\frac{b}{2a}"),
        "On one side of that abscissa the derivative is positive and on the other it is "
        "negative, so $g$ rises on one half-line and falls on the other. Symmetry shows "
        "the same thing directly: with $h=-b/(2a)$ the values $g(h+t)$ and $g(h-t)$ are "
        "equal.",
        close(False, "A strictly monotone function never repeats a value"),
    ],
    ("MATH 7.43", "C"): [
        "To the right of the axis the derivative keeps a single sign, which is exactly "
        "the criterion for strict monotonicity.",
        D(r"g'(x)=2ax+b=2a\left(x-h\right),\qquad h=-\frac{b}{2a}"),
        "For $x>h$ the factor $x-h$ is strictly positive, so $g'(x)$ carries the "
        "constant sign of $a$: positive throughout when $a>0$, negative throughout when "
        "$a<0$.",
        close(True, "The restriction is strictly increasing in the first case and "
                    "strictly decreasing in the second"),
    ],
    ("MATH 7.43", "D"): [
        "Compare the two functions through their difference and see which term "
        "eventually dominates.",
        D(r"g(x)-f(x)=ax^{2}+\left(b-m\right)x+\left(c-k\right)"),
        "With $a>0$ the $x^{2}$ term grows faster than the linear and constant terms "
        "together, so the difference is positive once $x$ passes the larger root of "
        "that quadratic.",
        D(r"g(x)-f(x)>0\implies f(x)<g(x)"),
        close(True, "The parabola overtakes the line for all sufficiently large $x$"),
    ],
    ("MATH 7.43", "E"): [
        "Strict monotonicity demands that different abscissas always give different "
        "values, with a definite direction of change.",
        D(r"f(x)=q\implies f\left(x_{2}\right)-f\left(x_{1}\right)=0"),
        "A constant function returns the same value everywhere, so it is neither "
        "strictly increasing nor strictly decreasing; it is monotone only in the weak, "
        "non-strict sense.",
        D(r"f(0)=f(1)=q"),
        close(False, "Equal values at different abscissas rule out strictness"),
    ],
    # ---- 7.44 Parameter tangency criterion ------------------------------- #
    ("MATH 7.44", "A"): [
        "Tangency of $y=tx+1$ to the parabola means the equation $g(x)=tx+1$ has a "
        "repeated solution, which is one condition on $t$ rather than something "
        "automatic.",
        D(r"ax^{2}+\left(b-t\right)x+\left(c-1\right)=0"),
        D(r"\Delta(t)=\left(b-t\right)^{2}-4a\left(c-1\right)"),
        "Read as a function of $t$ this is a quadratic, so it vanishes for at most two "
        "values of $t$; for every other slope the line either cuts the parabola twice or "
        "misses it altogether.",
        close(False, "Tangency cannot hold for every real $t$"),
    ],
    ("MATH 7.44", "B"): [
        "Set the discriminant of $g-f_t$ to zero and read the result as an equation in "
        "the slope.",
        D(r"\Delta(t)=\left(b-t\right)^{2}-4a\left(c-1\right)=0"),
        D(r"\left(t-b\right)^{2}=4a\left(c-1\right)"),
        "A square can only equal the right-hand side when that side is non-negative, so "
        "a real slope requires $a\\left(c-1\\right)\\ge 0$. Choosing $a=1$ and $c=0$ "
        "violates it.",
        D(r"\left(t-b\right)^{2}=-4"),
        close(False, "For such coefficients no line of the family is tangent, so the "
                     "existence cannot be claimed in general"),
    ],
    ("MATH 7.44", "C"): [
        "Tangency at $x_{0}$ means the two graphs share both their height and their "
        "slope there, and the slope of the line $y=tx+1$ is $t$ everywhere.",
        D(r"g\left(x_{0}\right)=t x_{0}+1"),
        D(r"\left(g-f_t\right)'\left(x_{0}\right)=0\implies g'\left(x_{0}\right)=t"),
        "Equivalently, $x_{0}$ is a double root of $g-f_t$, and at a double root of a "
        "quadratic the derivative vanishes as well.",
        close(True, "The condition $g'(x_{0})=t$ is therefore forced"),
    ],
    ("MATH 7.44", "D"): [
        "The real roots of $g-f_t$ are precisely the abscissas at which the line meets "
        "the parabola.",
        D(r"g(x)-f_t(x)=a\left(x-x_{1}\right)\left(x-x_{2}\right)"),
        "Two distinct real roots give two distinct common points, and each root is "
        "simple, so the difference changes sign there and the line crosses the curve "
        "instead of touching it.",
        D(r"x_{1}\neq x_{2}\implies \text{two crossings}"),
        close(True, "Crossing twice is incompatible with tangency"),
    ],
    ("MATH 7.44", "E"): [
        "The intercept enters the tangency condition through the constant term of the "
        "difference, so replacing $1$ by $q$ changes the discriminant itself.",
        D(r"\Delta(t)=\left(b-t\right)^{2}-4a\left(c-q\right)"),
        "A real solution in $t$ exists exactly when $a\\left(c-q\\right)\\ge 0$, and "
        "that inequality can switch as $q$ moves past $c$.",
        D(r"a>0:\quad q\le c\implies \text{tangent slopes exist}"),
        close(True, "Since the condition genuinely depends on $q$, changing the "
                    "intercept can create or destroy tangent slopes"),
    ],
    # ---- 7.45 Shifts and scalings ---------------------------------------- #
    ("MATH 7.45", "A"): [
        "Replacing the argument $x$ by $x-r$ makes the graph take at $x+r$ the value it "
        "used to take at $x$, which slides every feature $r$ units to the right.",
        D(r"g_{1}(x)=g\left(x-r\right)"),
        D(r"g_{1}\left(h+r\right)=g(h)"),
        "With $h=-b/(2a)$ the axis of $g$, the vertex of $g_{1}$ therefore sits at "
        "$x=h+r$.",
        D(r"x=h+r=-\frac{b}{2a}+r"),
        close(True, "The axis moves by exactly $r$ to the right"),
    ],
    ("MATH 7.45", "B"): [
        "Adding a constant changes the height of every point by the same amount and "
        "leaves each abscissa exactly where it was.",
        D(r"g_{2}(x)=ax^{2}+bx+\left(c+s\right)"),
        "The leading and middle coefficients are untouched, and the axis depends on "
        "those two alone.",
        D(r"x=-\frac{b}{2a}"),
        close(False, "The axis of $g_{2}$ is the very same line as the axis of $g$"),
    ],
    ("MATH 7.45", "C"): [
        "Multiplying a quadratic by $\\lambda$ multiplies its leading coefficient by "
        "$\\lambda$, and the opening direction is decided by the sign of that "
        "coefficient.",
        D(r"g_{3}(x)=\lambda a x^{2}+\lambda b x+\lambda c"),
        "With $\\lambda<0$ the product $\\lambda a$ has the sign opposite to $a$, so an "
        "upward parabola becomes downward and the other way round.",
        D(r"a>0\implies \lambda a<0"),
        close(True, "The opening direction is reversed, exactly as claimed"),
    ],
    ("MATH 7.45", "D"): [
        "A horizontal shift changes only the argument, so expand $g(x-r)$ and look at "
        "the two features separately.",
        D(
            r"g_{1}(x)=ax^{2}-\left(2ar-b\right)x+\left(ar^{2}-br+c\right)"
        ),
        "The coefficient of $x^{2}$ is still $a$, while the axis has moved from $x=h$ to "
        "$x=h+r$.",
        D(r"r=1\implies \text{axis }h+1\neq h,\quad \text{leading coefficient }a"),
        close(True, "Any non-zero $r$, for instance $r=1$, gives a different axis with "
                    "the same leading coefficient"),
    ],
    ("MATH 7.45", "E"): [
        "Multiplying by a non-zero number can neither create nor destroy zeros, because "
        "a product vanishes only when one of its factors does.",
        D(r"g_{3}(x)=\lambda g(x)"),
        D(r"\lambda g(x)=0\iff g(x)=0"),
        "The equivalence uses $\\lambda\\neq 0$ to divide both sides, so the two "
        "functions vanish at exactly the same abscissas.",
        close(True, "The root sets coincide, as claimed"),
    ],
}


PARAMETRIC: dict[tuple[str, str], list[str]] = {
    # ---- 7.36 Family of lines seeking tangency --------------------------- #
    ("MATH 7.36", "A"): [
        "Tangency means the equation $g(x)=f_t(x)$ has a repeated solution, so form the "
        "difference and force its discriminant to vanish.",
        D(r"x^{2}-\left(2+t\right)x+2=0"),
        D(r"\Delta(t)=\left(2+t\right)^{2}-8"),
        "Setting this to zero is a plain square-root extraction in the slope.",
        D(r"\left(2+t\right)^{2}=8\implies t=-2\pm 2\sqrt{2}"),
        close(True, "Both slopes are genuine real numbers, which exhibits two tangent "
                    "members of the family"),
    ],
    ("MATH 7.36", "B"): [
        "The line misses the parabola exactly when the difference has a negative "
        "discriminant, so study the sign of $\\Delta(t)$.",
        D(r"\Delta(t)=\left(2+t\right)^{2}-8"),
        D(r"t=0\implies \Delta(0)=4-8=-4<0"),
        "With slope $0$ the equation $x^{2}-2x+2=0$ has no real solution, so the "
        "horizontal line $y=0$ never touches the curve.",
        close(True, "Such a slope exists, as claimed"),
    ],
    ("MATH 7.36", "C"): [
        "The abscissas of the common points are the real roots of the difference, a "
        "quadratic with leading coefficient $1$.",
        D(r"x^{2}-\left(2+t\right)x+2=0"),
        D(r"x=\frac{\left(2+t\right)\pm\sqrt{\Delta(t)}}{2}"),
        "A strictly positive discriminant makes the square root a strictly positive real "
        "number, so the two values above are real and different from each other.",
        close(True, "Two distinct intersection points follow"),
    ],
    ("MATH 7.36", "D"): [
        "The vertex sits on the axis of symmetry, whose abscissa comes from the "
        "coefficients, and its height is the value of $g$ there.",
        D(r"x=-\frac{-2}{2\cdot 1}=1"),
        D(r"g(1)=1-2+2=1"),
        "So the vertex is the point $(1,1)$, sitting one unit above the $x$-axis; lying "
        "on the $x$-axis would require height $0$.",
        close(False, "The vertex height is $1$ rather than $0$"),
    ],
    ("MATH 7.36", "E"): [
        "Tangency is the condition $\\Delta(t)=0$, and this is itself a quadratic "
        "equation in the slope $t$.",
        D(r"\Delta(t)=\left(2+t\right)^{2}-8=0"),
        D(r"t=-2+2\sqrt{2}\qquad t=-2-2\sqrt{2}"),
        "Two different real slopes solve it, one tangent line touching the parabola on "
        "each side of its vertex.",
        close(False, "Tangency occurs for two values of $t$, not for at most one"),
    ],
    # ---- 7.40 Parameter constraint on opening ---------------------------- #
    ("MATH 7.40", "A"): [
        "The common abscissas solve $g_a(x)=f(x)$, so collect the terms on one side and "
        "look at the discriminant.",
        D(r"ax^{2}-5x+1=0"),
        D(r"\Delta(a)=25-4a"),
        D(r"a=1\implies \Delta=21>0"),
        "A positive discriminant gives two distinct real solutions, so for small "
        "positive values of the leading coefficient the graphs really do cross twice.",
        close(True, "That is exactly the situation the claim allows"),
    ],
    ("MATH 7.40", "B"): [
        "Whether the graphs miss each other is decided by the sign of the same "
        "discriminant, now read as a function of the parameter.",
        D(r"\Delta(a)=25-4a"),
        D(r"a>\frac{25}{4}\implies \Delta(a)<0"),
        D(r"a=10\implies \Delta=25-40=-15<0"),
        "With no real solution left the line and the parabola share no point at all.",
        close(True, "A large enough leading coefficient does separate them"),
    ],
    ("MATH 7.40", "C"): [
        "The axis of a parabola is read from its first two coefficients, and here the "
        "leading one is the parameter itself.",
        D(r"x=-\frac{-4}{2a}=\frac{2}{a}"),
        "The answer therefore depends on $a$, and it equals $2$ only for the single "
        "value $a=1$.",
        D(r"a=1\implies x=2\qquad a=4\implies x=\frac{1}{2}"),
        close(False, "The axis moves as the parameter changes, so it is not the fixed "
                     "line $x=2$"),
    ],
    ("MATH 7.40", "D"): [
        "The opening direction of a parabola is decided by the sign of the coefficient "
        "of $x^{2}$, which in this family is the parameter itself.",
        D(r"g_a(x)=ax^{2}-4x+1"),
        D(r"a<0\implies \text{leading coefficient}<0"),
        "A negative leading coefficient turns the arms of the parabola downwards, and "
        "the vertex then becomes the highest point of the graph.",
        close(True, "That is precisely what the claim states"),
    ],
    ("MATH 7.40", "E"): [
        "Tangency means the equation $g_a(x)=f(x)$ has a repeated root, that is a "
        "vanishing discriminant.",
        D(r"ax^{2}-5x+1=0"),
        D(r"\Delta(a)=25-4a=0"),
        D(r"a=\frac{25}{4}"),
        "This value is real and non-zero, so it is a legitimate member of the family, "
        "and the corresponding parabola touches the line at a single point.",
        close(True, "Such a parameter value exists"),
    ],
    # ---- 7.47 Parameter window for two meetings -------------------------- #
    ("MATH 7.47", "A"): [
        "Substituting $x=0$ into both formulas shows at once whether the point $(0,1)$ "
        "belongs to every member of the family.",
        D(r"g(0)=0-0+1=1"),
        D(r"f_k(0)=k\cdot 0+1=1"),
        "The parameter multiplies $x$, so it disappears at $x=0$ and every line of the "
        "family passes through the same height there.",
        close(True, "Both graphs contain $(0,1)$ for every value of $k$"),
    ],
    ("MATH 7.47", "B"): [
        "Bring the equation $g(x)=f_k(x)$ to one side; the constant terms cancel, which "
        "factors the difference immediately.",
        D(r"x^{2}-\left(4+k\right)x=0"),
        D(r"x\left(x-\left(4+k\right)\right)=0"),
        "The two solutions are $x=0$ and $x=4+k$, and they coincide precisely when the "
        "second one collapses onto the first.",
        D(r"4+k=0\implies k=-4"),
        close(True, "Exactly one slope merges the two meetings into a single touch"),
    ],
    ("MATH 7.47", "C"): [
        "With $k=-4$ the difference becomes a perfect square, so the single contact "
        "abscissa can be located exactly.",
        D(r"x^{2}-\left(4-4\right)x=x^{2}=0\implies x=0"),
        "The contact happens at $x=0$, where both graphs have height $1$, that is at the "
        "shared $y$-intercept $(0,1)$.",
        D(r"g'(x)=2x-4\implies g'(0)=-4=k"),
        close(True, "The slope of the parabola at that point is exactly the slope of the "
                    "touching line"),
    ],
    ("MATH 7.47", "D"): [
        "The factored difference already displays both meeting abscissas, so the second "
        "one can be read off directly.",
        D(r"x\left(x-\left(4+k\right)\right)=0"),
        D(r"x=0\qquad x=4+k"),
        "The second abscissa is positive whenever $4+k>0$; taking $k=0$, for instance, "
        "puts it at $x=4$.",
        D(r"k=0\implies x=4,\quad g(4)=1"),
        close(True, "A second meeting with positive abscissa therefore does occur"),
    ],
    ("MATH 7.47", "E"): [
        "Every line of the family passes through $(0,1)$, and so does the parabola, so a "
        "common point is guaranteed before any parameter is chosen.",
        D(r"g(0)=1\qquad f_k(0)=1"),
        "Algebraically the difference always keeps $x$ as a factor, so $x=0$ is a root "
        "for every value of the parameter.",
        D(r"x^{2}-\left(4+k\right)x=x\left(x-\left(4+k\right)\right)"),
        close(False, "No choice of $k$ can remove that intersection"),
    ],
    # ---- 7.50 Vertical shift versus meetings ----------------------------- #
    ("MATH 7.50", "A"): [
        "With no shift the meeting abscissas solve $g_0(x)=f(x)$, so collect everything "
        "on one side and count the real solutions.",
        D(r"x^{2}-x-2-2x=x^{2}-3x-2=0"),
        D(r"\Delta=\left(-3\right)^{2}-4\left(1\right)\left(-2\right)=17>0"),
        "A positive discriminant gives two distinct real solutions, so the line cuts the "
        "parabola in two separate points.",
        close(True, "The count is exactly two, as claimed"),
    ],
    ("MATH 7.50", "B"): [
        "Shifting the parabola upwards by $s$ adds $s$ to its constant term, so follow "
        "the discriminant as a function of the shift.",
        D(r"x^{2}-3x-2+s=0"),
        D(r"\Delta(s)=9-4\left(s-2\right)=17-4s"),
        D(r"s>\frac{17}{4}\implies \Delta(s)<0"),
        "Taking $s=5$ gives $\\Delta=-3<0$, which leaves no real solution and hence no "
        "common point at all.",
        close(True, "A large enough upward shift does separate the graphs"),
    ],
    ("MATH 7.50", "C"): [
        "Tangency means the difference has a repeated root, which happens exactly when "
        "its discriminant vanishes.",
        D(r"\Delta(s)=17-4s=0"),
        D(r"s=\frac{17}{4}"),
        "At that shift the equation becomes a perfect square and the single contact "
        "abscissa is the axis of the parabola.",
        D(r"x^{2}-3x+\frac{9}{4}=\left(x-\frac{3}{2}\right)^{2}=0"),
        close(True, "A real shift with this property exists"),
    ],
    ("MATH 7.50", "D"): [
        "A vertical shift changes only the constant term of the difference and leaves "
        "its highest power alone.",
        D(r"g_s(x)-f(x)=x^{2}-3x-2+s"),
        "The coefficient of $x^{2}$ stays $1$ for every $s$, so the equation remains "
        "quadratic and cannot acquire a third real solution.",
        close(False, "At most two intersections are possible however the parabola is "
                     "shifted"),
    ],
    ("MATH 7.50", "E"): [
        "The axis of a parabola is computed from the leading and the middle coefficient "
        "only.",
        D(r"g_s(x)=x^{2}-x+\left(s-2\right)"),
        D(r"x=-\frac{-1}{2\cdot 1}=\frac{1}{2}"),
        "The shift enters the constant term alone, and that term never appears in the "
        "axis formula; the graph slides vertically while the axis stays put.",
        close(False, "The axis is the line $x=\\frac{1}{2}$ for every $s$"),
    ],
}


def expl_symbolic(letter, stmt, truth, task) -> str | None:
    parts = SYMBOLIC.get((task["case_id"], letter))
    if parts is None:
        return None
    return pack(letter, truth, list(parts))


def expl_parametric(letter, stmt, truth, task) -> str | None:
    parts = PARAMETRIC.get((task["case_id"], letter))
    if parts is None:
        return None
    return pack(letter, truth, list(parts))


# --------------------------------------------------------------------------- #
# Driver
# --------------------------------------------------------------------------- #

def explain_one(task, idx, f, g) -> str:
    letter = "ABCDE"[idx]
    stmt = task["statements"][idx]
    truth = bool(task["answer_key"][idx])

    for builder in (expl_symbolic, expl_parametric):
        out = builder(letter, stmt, truth, task)
        if out is not None:
            return out

    if f is not None and g is not None:
        out = expl_with_fg(letter, stmt, truth, f, g)
        if out is not None:
            return out

    FALLBACKS.append((task["case_id"], letter, stmt))
    return pack(
        letter,
        truth,
        [
            "Only the general behaviour of lines and parabolas is needed here: a line "
            "contributes an $x$ term and a constant, while a parabola contributes a "
            "non-zero $x^{2}$ term as well.",
            D(r"f(x)=mx+q\qquad g(x)=ax^{2}+bx+c,\quad a\neq 0"),
            "Reading the claim against those two shapes settles it directly",
        ],
    )


def patch_statements(task: dict) -> dict:
    """Mirror generator statement cleanups in the live JSON (idempotent)."""
    mapping = {
        r"Always $\deg(g\circ f)=3$, because one adds the degrees.":
            r"The nested function $g(f(x))$ always has an $x^{3}$ term, because one adds $1$ and $2$.",
        r"Always $\deg(f\circ g)=2$.":
            r"The nested function $f(g(x))$ is always a parabola (highest power $x^{2}$).",
        r"Always $\deg(g\circ f)=\deg(f\circ g)$.":
            r"The nested functions $g(f(x))$ and $f(g(x))$ always have the same highest power of $x$.",
        r"If one replaces $f$ by $f^{2}$ (still using the same $g$), then $\deg(g\circ f^{2})=4$.":
            r"If one replaces $f$ by $f^{2}$ (still using the same $g$), then $g(f(x)^{2})$ has highest power $x^{4}$.",
        r"Always $\deg d=2$.":
            r"The difference $d=f-g$ is always a quadratic function.",
        r"Because $\deg f=1$ and $\deg g=2$, the map $f\circ g$ must have degree $3$.":
            r"Because $f$ is a line and $g$ is a parabola, the nested function $f(g(x))$ must have an $x^{3}$ term.",
        r"Because $\deg f=1$ and $\deg g=2$, the composition $f\circ g$ must have degree $3$.":
            r"Because $f$ is a line and $g$ is a parabola, $f(g(x))$ must have an $x^{3}$ term.",
        r"$\deg(g\circ f)=2$.":
            r"The nested function $g(f(x))$ is always a parabola.",
        r"$\deg(f\circ g)=2$.":
            r"The nested function $f(g(x))$ is always a parabola.",
        r"$\deg(g\circ f^{-1})=2$.":
            r"The nested function $g(f^{-1}(x))$ is always a parabola.",
        r"$\deg d=2$.":
            r"The difference $d=f-g$ is a quadratic function.",
        r"If $g=Af^{2}+Bf+C$, then necessarily $\deg(g\circ f)=4$.":
            r"If $g=Af^{2}+Bf+C$, then $g(f(x))$ always has an $x^{4}$ term.",
        r"There always exist $A,B,C\in\mathbb{R}$ with $g=Af^{2}+Bf+C$.":
            r"There always exist real numbers $A,B,C$ with $g(x)=A f(x)^{2}+B f(x)+C$.",
        r"There exist $A,B,C$ with $g=Af^{2}+Bf+C$.":
            r"There exist real numbers $A,B,C$ with $g(x)=A f(x)^{2}+B f(x)+C$.",
        r"For $t=0$, the graphs intersect twice.":
            r"There is a slope for which the line misses the parabola entirely.",
        r"The vertex of $g$ lies on the line $y=f_0(x)$.":
            r"The vertex of $g$ lies on the $x$-axis.",
        r"If $a=1$, the graphs of $f$ and $g_a$ meet twice.":
            r"When the leading coefficient of $g_a$ is positive and not too large, the graphs can meet twice.",
        r"If $a=10$, the graphs of $f$ and $g_a$ still meet twice.":
            r"Making the leading coefficient of $g_a$ large enough can make the graphs miss each other.",
        r"If $k=-4$, the graphs intersect at exactly one point.":
            r"There is a unique slope that makes the line touch the parabola at exactly one point.",
        r"If $k=-4$, the line is tangent to the parabola at $(0,1)$.":
            r"That unique touch happens at the shared $y$-intercept $(0,1)$ and matches the slope of the parabola there.",
        r"For $k=0$, the second intersection is at $x=4$.":
            r"Besides the shared $y$-intercept, the graphs can meet again at a point with positive $x$-coordinate.",
        r"For $s=0$, the graphs meet twice.":
            r"With no vertical shift, the graphs meet at two points.",
        r"For $s=5$, the graphs meet twice.":
            r"A large enough upward shift can make the graphs miss each other.",
        r"If $m=0$, the graphs intersect at exactly one point.":
            r"When the line is horizontal through the shared intercept setup, the graphs touch at exactly one point.",
        r"If $m=3$, there is a second intersection at $x=5$.":
            r"A steeper line through the same intercept can cut the parabola at a second point with positive $x$.",
    }
    truth_flip_to_true = {
        "There is a slope for which the line misses the parabola entirely.",
        "Making the leading coefficient of $g_a$ large enough can make the graphs miss each other.",
        "A large enough upward shift can make the graphs miss each other.",
    }

    stmts = list(task["statements"])
    key = list(task["answer_key"])
    for i, s in enumerate(stmts):
        if s in mapping:
            stmts[i] = mapping[s]
        if stmts[i] in truth_flip_to_true:
            key[i] = True
    task = dict(task)
    task["statements"] = stmts
    task["answer_key"] = key
    if task.get("title") == "Linear Basis for Every Quadratic":
        task["title"] = "Writing a Parabola Using a Line"
    if task.get("title") == "Composition Degrees Without Numbers":
        task["title"] = "Nested Functions Without Numbers"
    if "context" in task:
        task["context"] = task["context"].replace(
            "Let $f$ be linear of degree $1$ and $g$ quadratic of degree $2$.",
            "Let $f$ be a non-constant linear function and $g$ a quadratic function.",
        ).replace(
            "Let $f$ be any non-constant linear polynomial and $g$ any quadratic polynomial over $\\mathbb{R}$.",
            "Let $f$ be any non-constant linear function and $g$ any quadratic function.",
        )
    return task


def enrich_task(task: dict) -> dict:
    task = patch_statements(task)
    f, g = recover_models(task)
    task = dict(task)
    task["solution_overview"] = normalize_displays(build_overview(task, f, g))
    task["tactical_explanations"] = [
        normalize_displays(explain_one(task, i, f, g)) for i in range(5)
    ]
    return task


def main() -> None:
    data = json.loads(PATH.read_text())
    tasks = [enrich_task(t) for t in data["tasks"]]
    assert len(tasks) == 50

    expls = [e for t in tasks for e in t["tactical_explanations"]]
    lens = sorted(len(e) for e in expls)
    median = lens[len(lens) // 2]
    print(
        f"explanations: n={len(expls)} min={lens[0]} median={median} "
        f"max={lens[-1]} avg={sum(lens) // len(lens)}"
    )
    print("containing 'Matching the claim':", sum("Matching the claim" in e for e in expls))
    print("shorter than 250 chars:", sum(1 for n in lens if n < 250))

    if FALLBACKS:
        print(f"\n!! {len(FALLBACKS)} statements fell through to the generic writeup:")
        for case_id, letter, stmt in FALLBACKS:
            print(f"  {case_id} {letter} | {stmt}")

    deg_left = [
        t["case_id"]
        for t in tasks
        if re.search(
            r"\\deg|\bdeg\(",
            " ".join(t["statements"]) + " " + " ".join(t["tactical_explanations"]),
        )
    ]
    print("tasks still mentioning deg:", deg_left)

    for t in tasks:
        for i, e in enumerate(t["tactical_explanations"]):
            letter = "ABCDE"[i]
            assert e.startswith(f"**{letter}.** →"), (t["case_id"], i, e[:40])
            assert "so the statement is" in e, (t["case_id"], i)
            assert "Matching the claim" not in e, (t["case_id"], i)
            assert e.count("$$") % 2 == 0, (t["case_id"], i)
            assert "\r" not in e, (t["case_id"], i)
            for m in re.finditer(r"\$\$([^$]*)\$\$", e):
                assert "\n" not in m.group(1), (t["case_id"], i)

    data["tasks"] = tasks
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"\nWrote {len(tasks)} tasks -> {PATH}")

    t0 = tasks[0]
    for i in (0, 2, 4):
        print(f"\n===== {t0['case_id']} {'ABCDE'[i]} "
              f"({len(t0['tactical_explanations'][i])} chars) =====")
        print(t0["tactical_explanations"][i])


if __name__ == "__main__":
    main()
