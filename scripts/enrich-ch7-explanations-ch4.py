#!/usr/bin/env python3
"""Rewrite Chapter 7 explanations in Chapter 4 tutor style.

Rules:
- Calm English first, then one step per $$ display (like MATH 4.xx).
- No deg / basis / abstract algebra jargon — talk about lines, parabolas, powers of x.
- Length tracks the work this letter needs.
- Header: **A.** → True/False
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


def L(expr) -> str:
    return latex(simplify(expr))


def F(r) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(int(r))
    sign = "-" if r < 0 else ""
    r = abs(r)
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


def hdr(letter: str, truth: bool) -> str:
    return f"**{letter}.** → {'True' if truth else 'False'}"


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    body = "\n\n".join(p for p in parts if p and str(p).strip())
    verdict = "True" if truth else "False"
    if "so the statement is" not in body.lower():
        body += f"\n\nMatching the claim, so the statement is {verdict}."
    return f"{hdr(letter, truth)}\n\n{body}"


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
    shift = rf"\left(x-{F(h)}\right)^{2}" if h >= 0 else rf"\left(x+{F(-h)}\right)^{2}"
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
        monic = "monic" in ctx.lower()
        if roots:
            a = lead.group(1) if lead else ("1" if monic else "1")
            try:
                g = expand(parse_poly(f"({a})*(x-({roots.group(1)}))*(x-({roots.group(2)}))"))
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
        # Strip deg jargon from leftover overviews
        ov = re.sub(r"\\deg\([^)]+\)", "highest power", ov)
        ov = ov.replace("basis", "building blocks").replace("Degree-", "Line of slope type ")
        if task.get("stem_kind") == "symbolic":
            return (
                "The stem gives structural rules for lines and parabolas — no concrete coefficients. "
                "Each letter checks one claim with those rules.\n\n" + ov
            )
        return ov

    h, k, a_g = vertex_of(g)
    a_f = Rational(Poly(f, x).nth(1)) if Poly(f, x).degree() >= 1 else Rational(0)
    b_g = Rational(Poly(g, x).nth(1))
    c_g = Rational(Poly(g, x).nth(0))
    sum_r = Rational(-b_g / a_g)
    prod_r = Rational(c_g / a_g)
    diff = expand(f - g)
    Delta = Rational(discriminant(Poly(expand(g - f), x)))
    n_int = 2 if Delta > 0 else (1 if Delta == 0 else 0)
    try:
        A, B, C = rewrite_ABC(f, g)
        rw = (
            f"Because $f$ is a non-constant line, one can rebuild $g$ as "
            f"$A f(x)^{{2}}+B f(x)+C$. Matching coefficients recovers\n\n"
            f"$$\nA={F(A)},\\quad B={F(B)},\\quad C={F(C)}.\n$$"
        )
    except Exception:
        rw = "Because $f$ is a non-constant line, a rewrite $g=A f^{2}+B f+C$ exists and is unique."

    return "\n".join(
        [
            "The stem determines the two models",
            "",
            "$$",
            rf"f(x)={L(f)}\qquad g(x)={L(g)}",
            "$$",
            "",
            "Shared facts used across letters:",
            "",
            "$$",
            rf"\mathrm{{vertex}}=\left({F(h)},{F(k)}\right)"
            rf"\qquad S={F(sum_r)}"
            rf"\qquad P={F(prod_r)}",
            "$$",
            "",
            "$$",
            rf"f-g={L(diff)}\qquad \Delta={F(Delta)}\qquad \mathrm{{meetings}}={n_int}",
            "$$",
            "",
            rw,
        ]
    )


def expl_with_fg(letter, stmt, truth, f, g) -> str | None:
    sl = stmt.lower()
    a_f = as_rat(Poly(f, x).nth(1)) if Poly(f, x).degree() >= 1 else Rational(0)
    a_g = as_rat(Poly(g, x).nth(2))
    b_g = as_rat(Poly(g, x).nth(1))
    c_g = as_rat(Poly(g, x).nth(0))
    if None in (a_f, a_g, b_g, c_g):
        return None
    h, k, _ = vertex_of(g)
    sum_r = Rational(-b_g / a_g)
    prod_r = Rational(c_g / a_g)
    diff = expand(f - g)
    Delta = as_rat(discriminant(Poly(expand(g - f), x)))
    if Delta is None:
        return None
    n_int = 2 if Delta > 0 else (1 if Delta == 0 else 0)

    # Slope of f
    if re.search(r"\bslope\b", sl) and "average" not in sl:
        return pack(letter, truth, [
            "Read the coefficient of $x$ in the linear model:",
            "$$",
            rf"f(x)={L(f)}",
            "$$",
            f"That coefficient is the slope ${F(a_f)}$.",
        ])

    if "opens" in sl:
        direction = "upwards" if a_g > 0 else "downwards"
        return pack(letter, truth, [
            "A parabola opens according to the sign of its leading coefficient:",
            "$$",
            rf"g(x)={L(g)}",
            "$$",
            f"Here the leading coefficient is ${F(a_g)}$, so the parabola opens {direction}.",
        ])

    # y-intercept of f-g before bare axis
    if ("f-g" in sl or "f(x)-g" in sl or "f - g" in sl or "f(x) - g" in sl) and (
        "y-axis" in sl or "y = 0" in sl or "y=0" in stmt.replace(" ", "")
        or "intersects with the $y$" in sl or "intersects the $y$" in sl
    ):
        y0 = Rational(expand(diff.subs(x, 0)))
        return pack(letter, truth, [
            "The graph of $f-g$ meets the $y$-axis where $x=0$:",
            "$$",
            rf"(f-g)(0)={F(y0)}",
            "$$",
            f"Compare with the claimed height $0$." if y0 != 0 else "So it meets the $y$-axis at height $0$.",
        ])

    if "gap" in sl or (("f-g" in sl or "f - g" in sl) and "axis" in sl and "y-axis" not in sl):
        fh = Rational(expand(f.subs(x, h)))
        gap = Rational(fh - k)
        parts = [
            "First find the axis of the parabola $g$:",
            "$$",
            rf"x=-\frac{{{F(b_g)}}}{{2\cdot {F(a_g)}}}={F(h)}",
            "$$",
            "Evaluate both models there:",
            "$$",
            rf"f\left({F(h)}\right)={F(fh)}\qquad g\left({F(h)}\right)={F(k)}",
            "$$",
            "$$",
            rf"f-g={F(fh)}-\left({F(k)}\right)={F(gap)}",
            "$$",
        ]
        claimed = re.search(r"equals?\s*\$([^$]+)\$", stmt)
        if claimed:
            parts.append(rf"Compare with the claimed value ${claimed.group(1).strip()}$.")
        return pack(letter, truth, parts)

    if "axis of symmetry" in sl or (
        "axis" in sl and "y-axis" not in sl and "gap" not in sl and "f-g" not in sl
        and "shifted" not in sl and "differs" not in sl
    ):
        return pack(letter, truth, [
            "The axis of a parabola $ax^{2}+bx+c$ is the vertical line",
            "$$",
            r"x=-\frac{b}{2a}",
            "$$",
            "Substitute the coefficients of $g$:",
            "$$",
            rf"x=-\frac{{{F(b_g)}}}{{2\cdot {F(a_g)}}}={F(h)}",
            "$$",
        ])

    if any(w in sl for w in ("vertex", "lowest", "highest", "minimum", "maximum")):
        parts = [
            "The vertex sits on the axis of the parabola:",
            "$$",
            r"x=-\frac{b}{2a}",
            "$$",
            "$$",
            rf"x=-\frac{{{F(b_g)}}}{{2\cdot {F(a_g)}}}={F(h)}",
            "$$",
            "The height there is",
            "$$",
            rf"g\left({F(h)}\right)={F(k)}",
            "$$",
        ]
        if a_g > 0:
            parts.append(
                rf"Because the leading coefficient is positive, "
                rf"$\left({F(h)},{F(k)}\right)$ is the lowest point on the graph."
            )
        else:
            parts.append(
                rf"Because the leading coefficient is negative, "
                rf"$\left({F(h)},{F(k)}\right)$ is the highest point on the graph."
            )
        if "lie" in sl or "on the line" in sl or "on $y=f" in sl or "x-axis" in sl:
            fh = Rational(expand(f.subs(x, h)))
            parts += [
                "Check the height against the claimed line:",
                "$$",
                rf"f\left({F(h)}\right)={F(fh)}",
                "$$",
                f"Compare with the vertex height ${F(k)}$.",
            ]
        return pack(letter, truth, parts)

    if "sum" in sl and "root" in sl:
        return pack(letter, truth, [
            "For a parabola $ax^{2}+bx+c$, the sum of the roots is",
            "$$",
            r"S=-\frac{b}{a}",
            "$$",
            "$$",
            rf"S=-\frac{{{F(b_g)}}}{{{F(a_g)}}}={F(sum_r)}",
            "$$",
        ])

    if "product" in sl and "root" in sl:
        return pack(letter, truth, [
            "For a parabola $ax^{2}+bx+c$, the product of the roots is",
            "$$",
            r"P=\frac{c}{a}",
            "$$",
            "$$",
            rf"P=\frac{{{F(c_g)}}}{{{F(a_g)}}}={F(prod_r)}",
            "$$",
        ])

    if (
        ("exist" in sl and ("a,b,c" in stmt.replace(" ", "").lower() or "a, b, c" in sl
                           or "real numbers $a,b,c$" in sl or "real numbers $A,B,C$" in stmt
                           or "a,b,c" in stmt.replace(" ", "").lower()))
        or "matching" in sl
        or "forces $a=" in sl
        or "forces $A=" in stmt
        or "a f(x)^{2}" in sl
        or "Af^{2}" in stmt.replace(" ", "")
        or "A f(x)^{2}" in stmt
    ):
        try:
            A, B, C = rewrite_ABC(f, g)
        except Exception:
            return None
        if "exist" in sl and "forces" not in sl and "matching" not in sl:
            return pack(letter, truth, [
                "Because $f$ is a non-constant line, squaring it produces an $x^{2}$ term. "
                "Matching the $x^{2}$ term, then the $x$ term, then the constant, recovers unique "
                "numbers $A$, $B$, and $C$ with",
                "$$",
                rf"g(x)=A f(x)^{2}+B f(x)+C",
                "$$",
                "Here the match gives",
                "$$",
                rf"A={F(A)},\quad B={F(B)},\quad C={F(C)}",
                "$$",
                "so such a rewriting exists.",
            ])
        return pack(letter, truth, [
            "Write $g(x)=A f(x)^{2}+B f(x)+C$ and match coefficients. "
            f"The $x^{2}$ coefficient coming from $f^{2}$ is $({F(a_f)})^{2}$, so",
            "$$",
            rf"A\cdot({F(a_f)})^{2}={F(a_g)}\implies A={F(A)}",
            "$$",
            "Continuing for the linear and constant terms gives",
            "$$",
            rf"B={F(B)},\quad C={F(C)}",
            "$$",
        ])

    if (
        "intersect" in sl or "meet" in sl or "more than twice" in sl or "three" in sl
        or "crossing" in sl
    ) and "tangent" not in sl and "y-axis" not in sl:
        parts = [
            "The graphs meet where $f(x)=g(x)$, that is where",
            "$$",
            rf"g(x)-f(x)={L(expand(g - f))}=0",
            "$$",
            "This is at most a quadratic equation in $x$, so there are at most two real solutions. "
            "Its discriminant is",
            "$$",
            rf"\Delta={F(Delta)}",
            "$$",
        ]
        if Delta > 0:
            parts.append(f"hence exactly ${n_int}$ distinct real meetings.")
        elif Delta == 0:
            parts.append("hence exactly one real meeting (a repeated root).")
        else:
            parts.append("hence no real meeting.")
        if "three" in sl or "more than twice" in sl:
            parts.append(
                "A line and a parabola cannot meet three times: a quadratic equation forbids it."
            )
        return pack(letter, truth, parts)

    if "completing the square" in sl or ("completing" in sl and "square" in sl):
        return pack(letter, truth, [
            "Complete the square. The axis abscissa is",
            "$$",
            rf"x=-\frac{{{F(b_g)}}}{{2\cdot {F(a_g)}}}={F(h)}",
            "$$",
            "The vertex height is",
            "$$",
            rf"g\left({F(h)}\right)={F(k)}",
            "$$",
            "so",
            "$$",
            rf"g(x)={vertex_form_string(a_g, h, k)}",
            "$$",
        ])

    if "g(f" in stmt.replace(" ", "") or "f(g" in stmt.replace(" ", "") or "nested" in sl:
        f0 = Rational(expand(f.subs(x, 0)))
        g0 = Rational(expand(g.subs(x, 0)))
        gf0 = Rational(expand(g.subs(x, f0)))
        fg0 = Rational(expand(f.subs(x, g0)))
        if "g(f(0))=f(g(0))" in stmt.replace(" ", "") or "=" in stmt and "g(f(0))" in stmt.replace(" ", ""):
            return pack(letter, truth, [
                "Evaluate the two nestings separately.",
                "$$",
                rf"f(0)={F(f0)}\qquad g\big(f(0)\big)={F(gf0)}",
                "$$",
                "$$",
                rf"g(0)={F(g0)}\qquad f\big(g(0)\big)={F(fg0)}",
                "$$",
                rf"Compare ${F(gf0)}$ with ${F(fg0)}$.",
            ])
        if "g(f(x))" in stmt and ("parabola" in sl or "x^{2}" in stmt or "highest" in sl):
            gf = expand(g.subs(x, f))
            return pack(letter, truth, [
                "Substitute the line into the parabola and expand:",
                "$$",
                rf"g(f(x))={L(gf)}",
                "$$",
                "The highest power of $x$ that appears is $x^{2}$, so the nested function is still a parabola.",
            ])
        if "f(g(x))" in stmt and ("parabola" in sl or "x^{2}" in stmt or "x^{3}" in stmt or "highest" in sl):
            fg = expand(f.subs(x, g))
            return pack(letter, truth, [
                "Substitute the parabola into the line and expand:",
                "$$",
                rf"f(g(x))={L(fg)}",
                "$$",
                "The highest power of $x$ that appears is $x^{2}$.",
            ])

    if "average rate" in sl:
        g0 = Rational(expand(g.subs(x, 0)))
        g2 = Rational(expand(g.subs(x, 2)))
        avg = Rational((g2 - g0) / 2)
        parts = [
            "The average rate of change of $g$ on $[0,2]$ is",
            "$$",
            r"\frac{g(2)-g(0)}{2}",
            "$$",
            "$$",
            rf"g(0)={F(g0)},\qquad g(2)={F(g2)}",
            "$$",
            "$$",
            rf"\frac{{{F(g2)}-{F(g0)}}}{{2}}={F(avg)}",
            "$$",
        ]
        if "slope" in sl:
            parts += [f"The slope of $f$ is ${F(a_f)}$.", rf"Compare ${F(avg)}$ with ${F(a_f)}$."]
        return pack(letter, truth, parts)

    if "leading coefficient" in sl:
        lead = Rational(Poly(diff, x).LC())
        return pack(letter, truth, [
            "Expand the difference:",
            "$$",
            L(diff),
            "$$",
            f"The leading coefficient is ${F(lead)}$.",
        ])

    if "distance" in sl and "root" in sl:
        disc = Rational(discriminant(Poly(g, x)))
        if disc > 0:
            roots = solve(g, x)
            span = Rational(abs(roots[0] - roots[1]))
            return pack(letter, truth, [
                "With two real roots the distance is",
                "$$",
                rf"\Delta={F(disc)}\qquad \mathrm{{distance}}={F(span)}",
                "$$",
            ])

    # Point evaluation $f(0)=-5$
    m = re.search(r"\$([fg])\(([^)]+)\)\s*=\s*([^$]+)\$", stmt)
    if m:
        which, arg, _ = m.group(1), m.group(2), m.group(3)
        try:
            x0 = parse_poly(arg)
            model = f if which == "f" else g
            val = Rational(expand(model.subs(x, x0)))
            return pack(letter, truth, [
                f"Substitute $x={L(x0)}$ into ${which}$:",
                "$$",
                rf"{which}\left({L(x0)}\right)={F(val)}",
                "$$",
            ])
        except Exception:
            pass

    if "(f-g)(0)" in stmt.replace(" ", "") or "(f - g)(0)" in stmt:
        y0 = Rational(expand(diff.subs(x, 0)))
        return pack(letter, truth, [
            "Evaluate the difference at the origin:",
            "$$",
            rf"(f-g)(0)={F(y0)}",
            "$$",
        ])

    if re.search(r"\$d\(([^)]+)\)\s*=\s*([^$]+)\$", stmt):
        md = re.search(r"\$d\(([^)]+)\)\s*=\s*([^$]+)\$", stmt)
        try:
            x0 = parse_poly(md.group(1))
            val = Rational(expand(diff.subs(x, x0)))
            return pack(letter, truth, [
                "Since $d=f-g$, evaluate the difference:",
                "$$",
                rf"d\left({L(x0)}\right)=(f-g)\left({L(x0)}\right)={F(val)}",
                "$$",
            ])
        except Exception:
            pass

    m_id = re.search(r"\$([fg])\(x\)\s*=\s*([^$]+)\$", stmt)
    if m_id and len(stmt.strip()) < 90:
        which, rhs = m_id.group(1), m_id.group(2)
        try:
            claimed = parse_poly(rhs)
            actual = f if which == "f" else g
            return pack(letter, truth, [
                f"Expand the recovered model ${which}$:",
                "$$",
                rf"{which}(x)={L(actual)}",
                "$$",
                rf"Compare with the claimed formula ${which}(x)={L(claimed)}$.",
            ])
        except Exception:
            pass

    if "root" in sl and ("g" in sl or "quadratic" in sl) and "distance" not in sl and "share" not in sl and "sum" not in sl and "product" not in sl:
        disc = Rational(discriminant(Poly(g, x)))
        roots = solve(Poly(g, x), x)
        if disc >= 0 and all(as_rat(r) is not None for r in roots):
            rr = sorted((Rational(r) for r in roots), key=float)
            rr_s = ", ".join(F(r) for r in rr)
            return pack(letter, truth, [
                "Solve $g(x)=0$. The discriminant is",
                "$$",
                rf"\Delta={F(disc)}",
                "$$",
                "so the roots are",
                "$$",
                rf"x\in\{{{rr_s}\}}",
                "$$",
            ])

    if "increasing" in sl or "decreasing" in sl:
        mono = "increasing" if a_f > 0 else ("decreasing" if a_f < 0 else "constant")
        return pack(letter, truth, [
            "A non-constant line rises or falls according to the sign of its slope:",
            "$$",
            rf"f(x)={L(f)}\qquad \mathrm{{slope}}={F(a_f)}",
            "$$",
            f"Hence $f$ is {mono}.",
        ])

    if "horizontal" in sl:
        return pack(letter, truth, [
            "A horizontal line needs slope $0$. Here",
            "$$",
            rf"f(x)={L(f)}",
            "$$",
            f"has slope ${F(a_f)}$.",
        ])

    if re.search(r"\bconstant\b", sl) and ("f" in sl or "$f" in stmt):
        return pack(letter, truth, [
            "A constant function has slope $0$. The recovered linear model is",
            "$$",
            rf"f(x)={L(f)}",
            "$$",
            f"with slope ${F(a_f)}$.",
        ])

    if "even" in sl:
        if re.search(r"\$g\$\s+is even|g is even", sl):
            which = "g"
        elif re.search(r"\$f\$\s+is even|f is even", sl):
            which = "f"
        else:
            which = "g" if "g" in sl and "f" not in sl else ("f" if "f" in sl else None)
        if which:
            model = g if which == "g" else f
            m1 = Rational(expand(model.subs(x, 1)))
            mm = Rational(expand(model.subs(x, -1)))
            return pack(letter, truth, [
                rf"Evenness requires ${which}(-x)={which}(x)$ for all $x$. Compare values at $\pm 1$:",
                "$$",
                rf"{which}(1)={F(m1)}\qquad {which}(-1)={F(mm)}",
                "$$",
            ])

    if "factor" in sl:
        return pack(letter, truth, [
            "Factor the recovered quadratic:",
            "$$",
            rf"g(x)={L(g)}",
            "$$",
            "and compare with the claimed factorization.",
        ])

    if "share" in sl and "root" in sl:
        fr = solve(f, x)
        gr = solve(g, x)
        common = [r for r in fr if any(simplify(r - s) == 0 for s in gr)]
        msg = (
            rf"They share the root $x={F(Rational(common[0]))}$."
            if common and as_rat(common[0]) is not None
            else "Comparing zeros shows whether a common root exists."
        )
        return pack(letter, truth, [
            "A shared root is a common zero of both models.",
            "$$",
            rf"f(x)={L(f)}\qquad g(x)={L(g)}",
            "$$",
            msg,
        ])

    if ("touch" in sl or "tangent" in sl) and ("graph" in sl or "meet" in sl or "intersect" in sl or "at" in sl):
        return pack(letter, truth, [
            "Tangency of the line and the parabola means the equation $g(x)=f(x)$ has a repeated root, "
            "so its discriminant vanishes.",
            "$$",
            rf"\Delta={F(Delta)}",
            "$$",
            f"so there are exactly ${n_int}$ distinct real meeting point(s).",
        ])

    if "g'" in stmt or "f'" in stmt:
        gp = expand(g.diff(x))
        fp = expand(f.diff(x))
        mder = re.search(r"\$([fg])'\(([^)]+)\)\s*=\s*([^$]+)\$", stmt)
        if mder:
            which, arg = mder.group(1), mder.group(2)
            try:
                x0 = parse_poly(arg)
                der = gp if which == "g" else fp
                val = Rational(expand(der.subs(x, x0)))
                return pack(letter, truth, [
                    f"Differentiate ${which}$ and evaluate:",
                    "$$",
                    rf"{which}'(x)={L(der)}\qquad {which}'\left({L(x0)}\right)={F(val)}",
                    "$$",
                ])
            except Exception:
                pass
        if "for all" in sl:
            return pack(letter, truth, [
                "Compare derivatives as functions:",
                "$$",
                rf"f'(x)={L(fp)}\qquad g'(x)={L(gp)}",
                "$$",
            ])

    if "g(x)" in stmt and (r"\ge" in stmt or "≥" in stmt) and "for all" in sl:
        return pack(letter, truth, [
            f"Since the leading coefficient is ${F(a_g)}$"
            + (", the values of $g$ never go below the vertex height" if a_g > 0
               else ", the values of $g$ never go above the vertex height")
            + ":",
            "$$",
            rf"k=g\left({F(h)}\right)={F(k)}",
            "$$",
            "Compare that range statement with the claim.",
        ])

    return None


def expl_symbolic(letter, stmt, truth, old: str) -> str:
    """Ch4-style structural explanations — no deg jargon."""
    sl = stmt.lower()
    compact = stmt.replace(" ", "").lower()
    old_body = re.sub(r"^\*\*[A-E]\.\*\*.*?\n+", "", old, flags=re.S).strip()
    # scrub deg from old body if we fall back
    old_body = re.sub(r"\\deg\([^)]+\)", "highest power", old_body)

    # Axis / Vieta
    if ("s/2" in compact or "x=s/2" in compact) and (
        "axis" in sl or r"\ell" in stmt or "ell" in sl or "in all cases" in sl
    ):
        return pack(letter, truth, [
            "The sum of the roots and the axis are linked by",
            "$$",
            r"S=-\frac{b}{a}\qquad x_{\mathrm{axis}}=-\frac{b}{2a}",
            "$$",
            "Dividing the sum by two recovers the axis in every case:",
            "$$",
            r"x_{\mathrm{axis}}=\frac{S}{2}",
            "$$",
        ])
    if (
        ("x=s" in compact or "line $x=s$" in sl)
        and "s/2" not in compact
        and ("axis" in sl or r"\ell" in stmt or "ell" in sl or "vertical line" in sl)
    ):
        return pack(letter, truth, [
            "The sum of the roots is",
            "$$",
            r"S=-\frac{b}{a}",
            "$$",
            "while the axis of the parabola is",
            "$$",
            r"x=-\frac{b}{2a}=\frac{S}{2}",
            "$$",
            "The axis is the midpoint of the roots, not the line $x=S$. "
            "Those two vertical lines coincide only when $S=0$.",
        ])
    if "s=0" in compact and "axis" in sl:
        return pack(letter, truth, [
            "If $S=0$, then $-b/a=0$, so $b=0$. The axis formula collapses to",
            "$$",
            r"x=-\frac{b}{2a}=0",
            "$$",
            "which is the $y$-axis.",
        ])
    if "both real roots" in sl and "positive" in sl:
        return pack(letter, truth, [
            "A positive sum of roots does not force both roots to be positive. "
            "For example, the roots $-1$ and $3$ sum to $2>0$ while one of them is negative.",
        ])
    if "constant term" in sl and "axis" in sl:
        return pack(letter, truth, [
            "The axis $x=-b/(2a)$ depends only on $a$ and $b$. "
            "Changing $c$ shifts the graph vertically and leaves the axis fixed.",
        ])

    # Nesting / highest power (replaces deg talk)
    if "x^{3}" in stmt or "x^3" in stmt or ("adds" in sl and ("1" in stmt and "2" in stmt)):
        return pack(letter, truth, [
            "Substitute a line into a parabola and expand. If $f(x)=mx+k$ and $g(x)=ax^{2}+bx+c$, then",
            "$$",
            r"g(f(x))=a(mx+k)^{2}+b(mx+k)+c",
            "$$",
            "The highest power that appears is $x^{2}$, not $x^{3}$. Adding $1$ and $2$ is the wrong rule; "
            "the powers multiply.",
        ])
    if "same highest power" in sl or (
        "g(f(x))" in stmt and "f(g(x))" in stmt and "same" in sl
    ):
        return pack(letter, truth, [
            "Both nestings expand to a parabola. Expanding $g(f(x))$ and $f(g(x))$ each produces "
            "highest power $x^{2}$, so the highest powers agree, even though the formulas need not.",
        ])
    if "identical as functions" in sl or "always identical" in sl:
        return pack(letter, truth, [
            "Equal highest power does not mean equal formulas. For $f(x)=x+1$ and $g(x)=x^{2}$,",
            "$$",
            r"g(f(x))=(x+1)^{2}\neq f(g(x))=x^{2}+1",
            "$$",
            "so nesting does not commute.",
        ])
    if "f(g(x))" in stmt and ("parabola" in sl or "x^{2}" in stmt):
        return pack(letter, truth, [
            "A line applied to a parabola stays a parabola: if $f(x)=mx+k$, then",
            "$$",
            r"f(g(x))=m g(x)+k",
            "$$",
            "still has highest power $x^{2}$.",
        ])
    if "g(f(x))" in stmt and ("parabola" in sl or ("x^{2}" in stmt and "x^{4}" not in stmt and "x^4" not in stmt)):
        return pack(letter, truth, [
            "A parabola applied to a line stays a parabola: expanding $g(mx+k)$ produces highest power $x^{2}$.",
        ])
    if ("x^{4}" in stmt or "x^4" in stmt) and "g(f(x))" in stmt and "f(x)^{2}" not in stmt.replace(" ", "") and "f^{2})" not in stmt.replace(" ", ""):
        return pack(letter, truth, [
            "Nesting a parabola around a line expands to highest power $x^{2}$, not $x^{4}$. "
            "An $x^{4}$ term would need nesting around a parabola.",
        ])
    if ("x^{4}" in stmt or "x^4" in stmt) and ("f^{2}" in stmt or "f(x)^{2}" in stmt or "f^2" in stmt):
        return pack(letter, truth, [
            "Now $f(x)^{2}$ itself is a parabola (highest power $x^{2}$). Nesting $g$ around it gives",
            "$$",
            r"g\big(f(x)^{2}\big)",
            "$$",
            "with highest power $x^{4}$.",
        ])

    # Rewrite Af^2+Bf+C
    if "exist" in sl and ("a,b,c" in compact or "a,b,c" in sl.replace(" ", "") or "real numbers $a,b,c$" in sl
                         or "real numbers $A,B,C$" in stmt):
        return pack(letter, truth, [
            "Because $f$ is a non-constant line, $f(x)^{2}$ contributes an $x^{2}$ term. "
            "Matching the $x^{2}$ term, then the $x$ term, then the constant, always recovers unique "
            "numbers $A$, $B$, $C$ with",
            "$$",
            r"g(x)=A f(x)^{2}+B f(x)+C",
            "$$",
        ])
    if "uniquely determined" in sl or ("uniquely" in sl and "coefficient" in sl):
        return pack(letter, truth, [
            "Matching the $x^{2}$ coefficients forces",
            "$$",
            r"A=\frac{a_g}{a_f^{2}}",
            "$$",
            "a single number determined by $g$ and $f$.",
        ])
    if "constant" in sl and ("replaced" in sl or "constant function" in sl or "constant polynomial" in sl):
        return pack(letter, truth, [
            "A non-zero constant has no $x$ term. Squaring it stays constant, so "
            "$A f(x)^{2}+B f(x)+C$ cannot produce a genuine parabola.",
        ])
    if "same roots" in sl or "exactly the same roots" in sl:
        return pack(letter, truth, [
            "The equation $A f(x)^{2}+B f(x)+C=0$ is quadratic in the value $f(x)$. "
            "Its solutions need not be the roots of $f$ itself.",
        ])

    # Vertex form
    if "unique vertex" in sl or ("(h,k)" in stmt and "vertex" in sl):
        return pack(letter, truth, [
            "In the form $g(x)=a(x-h)^{2}+k$ the critical point is uniquely $x=h$, "
            "and $g(h)=k$, so $(h,k)$ is the unique vertex.",
        ])
    if "a<0" in compact and "minimum" in sl:
        return pack(letter, truth, [
            "If $a<0$ the parabola opens downwards, so the vertex value $k$ is a global "
            "maximum, not a minimum.",
        ])
    if "independent of $k$" in sl or "independent of k" in sl:
        return pack(letter, truth, [
            "The axis is $x=h$. Changing $k$ translates the graph vertically and does not "
            "move the axis.",
        ])
    if "replacing $h$ by $-h$" in sl or "replacing h by $-h$" in sl:
        return pack(letter, truth, [
            "Replacing $h$ by $-h$ reflects the axis across the $y$-axis. "
            "The graph is unchanged only when $h=0$.",
        ])
    if "every real quadratic admits" in sl or "unique $(a,h,k)$" in stmt:
        return pack(letter, truth, [
            "Completing the square writes any real parabola in vertex form. "
            "The leading coefficient $a$ and the vertex $(h,k)$ are uniquely determined "
            "by $g$, so the triple $(a,h,k)$ is unique.",
        ])

    # Discriminant
    if "delta<0" in compact or r"\delta<0" in compact or (r"\Delta<0" in stmt):
        if "no real roots" in sl:
            return pack(letter, truth, [
                "By definition, $\\Delta<0$ means the equation $g(x)=0$ has no real solutions.",
            ])
        if "no vertex" in sl:
            return pack(letter, truth, [
                "The vertex abscissa $x=-b/(2a)$ is defined whenever $a\\neq 0$. "
                "It does not depend on the sign of $\\Delta$.",
            ])
    if "delta=0" in compact or (r"\Delta=0" in stmt):
        return pack(letter, truth, [
            "If $\\Delta=0$ there is a repeated real root. The graph touches the $x$-axis "
            "at exactly that one point.",
        ])
    if "opposite signs" in sl:
        return pack(letter, truth, [
            "If $a$ and $c$ have opposite signs then $ac<0$, so $-4ac>0$. Hence",
            "$$",
            r"\Delta=b^{2}-4ac\ge -4ac>0",
            "$$",
        ])
    if "strictly between" in sl or "between the two real roots" in sl:
        return pack(letter, truth, [
            "When $\\Delta>0$ there are two distinct real roots. Their midpoint is "
            "$-b/(2a)$, which is exactly the axis, so the axis lies strictly between them.",
        ])

    # Line meets parabola
    if "three distinct" in sl:
        return pack(letter, truth, [
            "The equation $f(x)=g(x)$ rearranges to a polynomial equation of highest power "
            "at most $2$, which has at most two real roots.",
        ])
    if "do not intersect at all" in sl or "possible that the graphs do not" in sl:
        return pack(letter, truth, [
            "For example, $g(x)=x^{2}+1$ and $f(x)=0$ never meet: $x^{2}+1=0$ has no real solution.",
        ])
    if "double root" in sl and "tangent" in sl:
        return pack(letter, truth, [
            "Tangency means a shared point and a shared first derivative. "
            "Equivalently, $x_0$ is a root of both $g-f$ and $(g-f)'$, i.e. a double root "
            "of $g-f$.",
        ])
    if "always intersect twice" in sl or ("constant" in sl and "always intersect" in sl):
        return pack(letter, truth, [
            "A horizontal line may miss the parabola, touch it once, or cut it twice. "
            "Two intersections are not forced.",
        ])
    if "third intersection" in sl or ("vertically" in sl and "third" in sl):
        return pack(letter, truth, [
            "A vertical translation changes only the constant term of $g$. "
            "The difference $g-f$ remains a quadratic, so a third intersection cannot appear.",
        ])

    # Range
    if "range" in sl and "a>0" in compact and "[k" in stmt.replace(" ", ""):
        return pack(letter, truth, [
            "From $g(x)=a(x-h)^{2}+k$ with $a>0$, the square is nonnegative, "
            "so $g(x)\\ge k$ with equality at $x=h$. The range is $[k,+\\infty)$.",
        ])
    if "range" in sl and "a<0" in compact and "[k" in stmt.replace(" ", ""):
        return pack(letter, truth, [
            "If $a<0$ the parabola opens downwards, so the range is $(-\\infty,k]$, not $[k,+\\infty)$.",
        ])
    if "never all of" in sl:
        return pack(letter, truth, [
            "A parabola is unbounded on only one side, so its range can never be all of $\\mathbb{R}$.",
        ])
    if "non-constant linear" in sl and "range" in sl:
        return pack(letter, truth, [
            "A non-constant line is continuous and strictly monotone on $\\mathbb{R}$, so its range is all of $\\mathbb{R}$.",
        ])
    if "k=0" in compact and "negative" in sl:
        return pack(letter, truth, [
            "If $k=0$ and $a>0$, then $g(x)=a(x-h)^{2}\\ge 0$, so $g$ never takes negative values.",
        ])

    # Difference d
    if "difference" in sl and "quadratic" in sl:
        return pack(letter, truth, [
            "A parabola minus a line still has an $x^{2}$ term, so $d=f-g$ is itself a quadratic function.",
        ])
    if "y-intercept of $d$" in sl or "y-intercept of d" in sl:
        return pack(letter, truth, [
            "The $y$-intercept of $d$ is the value at $x=0$:",
            "$$",
            r"d(0)=f(0)-g(0)",
            "$$",
        ])
    if "d(0)=0" in compact or ("d(0)=0" in stmt.replace(" ", "") and "intersect" in sl):
        return pack(letter, truth, [
            "If $d(0)=0$, then $f(0)=g(0)$, so the graphs share the point $(0,f(0))$ on the $y$-axis.",
        ])
    if "more than twice" in sl and "d" in sl:
        return pack(letter, truth, [
            "Two distinct real roots of $d=f-g$ mean exactly two intersections of the graphs, "
            "not more than two.",
        ])
    if "graph of $d$" in sl or "graph of d" in sl:
        return pack(letter, truth, [
            "Because $d$ is a quadratic function, its graph is a parabola.",
        ])

    # Evenness
    if "even function if and only if" in sl or ("even" in sl and "b=0" in compact):
        return pack(letter, truth, [
            "Compute $g(-x)-g(x)=-2bx$. This vanishes for all $x$ if and only if $b=0$, "
            "which is exactly evenness.",
        ])
    if "even" in sl and "vertex" in sl and "y-axis" in sl:
        return pack(letter, truth, [
            "If $g$ is even then $b=0$, so the axis is $x=0$ and the vertex lies on the $y$-axis.",
        ])
    if "even" in sl and "odd" in sl:
        return pack(letter, truth, [
            "The only function that is both even and odd is the zero function. "
            "A genuine parabola with $a\\neq 0$ cannot be odd.",
        ])
    if "axis" in sl and "x=0" in stmt.replace(" ", "") and "even" in sl:
        return pack(letter, truth, [
            "Axis $x=0$ means $b=0$, which is exactly the condition for $g$ to be even.",
        ])
    if "multiplying" in sl and "evenness" in sl:
        return pack(letter, truth, [
            "If $b=0$, then $-g$ still has linear coefficient $0$, so evenness is preserved.",
        ])

    # Monotonicity
    if "strictly monotone" in sl and ("f" in sl or "$f$" in stmt) and "g" not in sl.split("f")[0][-5:]:
        if "m=0" in compact:
            return pack(letter, truth, [
                "If $m=0$ were allowed, $f$ would be constant, and a constant function is not strictly monotone.",
            ])
        return pack(letter, truth, [
            "A non-constant line ($m\\neq 0$) is strictly increasing or strictly decreasing on all of $\\mathbb{R}$.",
        ])
    if "g" in sl and "strictly monotone on all" in sl:
        return pack(letter, truth, [
            "The derivative $g'(x)=2ax+b$ changes sign at the axis, so $g$ is not monotone on the whole real line.",
        ])
    if "half-line" in sl or "restriction of $g$" in sl:
        return pack(letter, truth, [
            "On each open half-line from the axis, $g'$ keeps a constant sign, so the restriction of $g$ is strictly monotone there.",
        ])
    if "sufficiently large" in sl:
        return pack(letter, truth, [
            "If $a>0$, the parabola grows faster than any line as $x\\to+\\infty$, so $f(x)<g(x)$ for all large $x$.",
        ])

    # Tangency family symbolic
    if "for every real $t$" in sl and "tangent" in sl:
        return pack(letter, truth, [
            "Tangency of $y=tx+1$ to $y=g$ means one algebraic condition on $t$, not an identity holding for every $t$.",
        ])
    if "exists at least one real $t$" in sl and "tangent" in sl:
        return pack(letter, truth, [
            "View $\\Delta(t)=(b-t)^{2}-4a(c-1)$ as a quadratic in $t$. "
            "When $a(c-1)<0$, one has $\\Delta(t)>0$ for every real $t$, so $\\Delta(t)$ never hits zero "
            "and no tangent exists in the family.",
        ])
    if "g'(x_0)=t" in stmt.replace(" ", "") or ("g'" in stmt and "tangent" in sl):
        return pack(letter, truth, [
            "Tangency requires equal derivatives at the contact point. "
            "The slope of $y=tx+1$ is $t$, so $g'(x_0)=t$.",
        ])
    if "two distinct real roots" in sl and "not tangent" in sl:
        return pack(letter, truth, [
            "Two distinct simple roots of $g-f_t$ mean two transversal intersection points, "
            "so the graphs are not tangent.",
        ])
    if "replacing the intercept" in sl or ("intercept" in sl and "q" in sl and "tangent" in sl):
        return pack(letter, truth, [
            "The tangency condition involves the constant term through $c-q$. "
            "Changing the intercept $q$ can create or destroy real slopes $t$.",
        ])

    # Shifts
    if "g_1" in stmt and "shifted by $r$" in sl:
        return pack(letter, truth, [
            "Replacing $x$ by $x-r$ translates the graph by $r$ to the right, so the axis "
            "moves from $x=h$ to $x=h+r$.",
        ])
    if "g_2" in stmt and "differs" in sl:
        return pack(letter, truth, [
            "Adding a constant $s$ translates the graph vertically. The axis $x=h$ is unchanged.",
        ])
    if "lambda<0" in compact or (r"\lambda<0" in stmt and "opposite" in sl):
        return pack(letter, truth, [
            "Scaling by $\\lambda<0$ replaces the leading coefficient $a$ by $\\lambda a$, "
            "which has the opposite sign, so the parabola flips its opening direction.",
        ])
    if r"r\neq 0" in stmt.replace(" ", "") or "r\\neq0" in compact:
        return pack(letter, truth, [
            "Any horizontal shift $r\\neq 0$ moves the axis while leaving the leading "
            "coefficient $a$ unchanged.",
        ])
    if "g_3" in stmt and "same roots" in sl:
        return pack(letter, truth, [
            "For $\\lambda\\neq 0$,",
            "$$",
            r"\lambda g(x)=0\iff g(x)=0",
            "$$",
            "so the roots are unchanged.",
        ])

    # Root product vs vertex
    if "always $k=c$" in sl or "always k=c" in sl:
        return pack(letter, truth, [
            "The vertex height is $k=c-b^{2}/(4a)$, so $k=c$ if and only if $b=0$, not always.",
        ])
    if "always $p=c/a$" in sl or "always p=c/a" in compact:
        return pack(letter, truth, [
            "Vieta's product formula is exactly $P=c/a$.",
        ])
    if "b=0" in compact and "k=c" in compact:
        return pack(letter, truth, [
            "If $b=0$, the vertex is at $x=0$, so $k=g(0)=c$.",
        ])
    if "p=0" in compact and "origin" in sl:
        return pack(letter, truth, [
            "If $P=0$, then $c=0$, so $g(0)=0$ and the graph passes through the origin.",
        ])
    if "sign of $k$" in sl or "sign of k" in sl:
        return pack(letter, truth, [
            "Vertex height and opening direction are independent: $k$ and $a$ need not have the same sign.",
        ])

    # Tangency exist / family without plugging numbers
    if "exist" in sl and "tangent" in sl and "t" in sl:
        return pack(letter, truth, [
            "Tangency means the discriminant of $g-f_t$ vanishes. That is one equation in $t$; "
            "depending on the coefficients it may have real solutions.",
        ])
    if "at most one" in sl and "tang" in sl:
        return pack(letter, truth, [
            "Tangency is the equation $\\Delta(t)=0$, a quadratic condition in $t$. "
            "A quadratic equation can have two real roots, so tangency is not limited to a single parameter value.",
        ])
    if "miss" in sl and ("parabola" in sl or "graphs" in sl):
        return pack(letter, truth, [
            "Choose the slope so that $\\Delta(t)<0$. Then $g-f_t$ has no real root, so the line misses the parabola.",
        ])
    if ("x-axis" in sl or "x$-axis" in sl or "$x$-axis" in sl) and "vertex" in sl:
        return pack(letter, truth, [
            "The vertex height is $k=g(-b/(2a))$. Lying on the $x$-axis would require $k=0$, which is a special case, not automatic.",
        ])
    if "large enough" in sl and ("miss" in sl or "leading" in sl):
        return pack(letter, truth, [
            "The discriminant of $g_a-f$ depends on the leading coefficient. "
            "Making that coefficient large enough drives the discriminant negative, so the graphs miss.",
        ])
    if "not too large" in sl or ("positive" in sl and "meet twice" in sl and "leading" in sl):
        return pack(letter, truth, [
            "When the leading coefficient is positive but small enough that the discriminant stays positive, "
            "the line and the parabola meet twice.",
        ])
    if "unique slope" in sl or ("unique" in sl and "touch" in sl):
        return pack(letter, truth, [
            "Tangency at the shared $y$-intercept forces both equal values and equal derivatives there, "
            "which pins down a single slope.",
        ])
    if "shared $y$-intercept" in sl or "shared y-intercept" in sl or ("touch" in sl and "(0,1)" in stmt):
        return pack(letter, truth, [
            "At $x=0$ both graphs pass through the same height. Matching derivatives there makes the line "
            "tangent to the parabola at that point.",
        ])
    if "besides the shared" in sl or ("second" in sl and "positive" in sl and "x" in sl):
        return pack(letter, truth, [
            "After factoring out the shared root at $x=0$, the remaining linear factor can give a second "
            "meeting with positive abscissa.",
        ])
    if "no vertical shift" in sl or ("with no vertical" in sl):
        return pack(letter, truth, [
            "With shift $0$, the discriminant of $g-f$ is positive, so the graphs meet at two points.",
        ])
    if "upward shift" in sl and "miss" in sl:
        return pack(letter, truth, [
            "Raising the parabola enough makes $\\Delta$ negative, so the line and the shifted parabola miss.",
        ])
    if "fail to meet" in sl or "never fail" in sl or ("exists" in sl and "fail" in sl):
        return pack(letter, truth, [
            "If every line in the family shares a fixed point with the parabola, the graphs always meet "
            "at least there, so they never fail to meet.",
        ])
    if "axis" in sl and "depends on" in sl and ("shift" in sl or "s" in sl):
        return pack(letter, truth, [
            "A vertical shift changes only the constant term. The axis $x=-b/(2a)$ does not depend on that constant.",
        ])
    if "vertical shifts can create a third" in sl or ("third intersection" in sl):
        return pack(letter, truth, [
            "A vertical shift keeps $g-f$ quadratic, so at most two meetings remain.",
        ])
    if "exists" in sl and ("tangent" in sl or "tangency" in sl or "exactly one meeting" in sl):
        return pack(letter, truth, [
            "Tangency means the discriminant vanishes. That equation in the shift (or slope) parameter "
            "has a real solution for this family.",
        ])

    if old_body and "deg" not in old_body.lower():
        return pack(letter, truth, [old_body])
    return pack(letter, truth, [
        "Apply the structural rule from the overview to the claim, using only lines, parabolas, "
        "and ordinary algebra with the given formulas.",
    ])


def expl_parametric(letter, stmt, truth, task) -> str | None:
    sl = stmt.lower()
    ctx = task["context"]

    m_g = re.search(r"g\(x\)\s*=\s*([^$]+)", ctx)
    m_ft = re.search(r"f_([a-z])\(x\)\s*=\s*([^$]+)", ctx)
    m_f = re.search(r"(?<![a-z_])f\(x\)\s*=\s*([^$]+)", ctx)
    m_ga = re.search(r"g_([a-z])\(x\)\s*=\s*\1\s*x", ctx)  # leading coeff is the parameter
    if not m_ga:
        m_ga = re.search(r"g_(a)\(x\)\s*=\s*([^$]+)", ctx)
    m_gs = re.search(r"g_(s)\(x\)\s*=\s*([^$]+)", ctx)
    if not m_gs:
        m_gs = re.search(r"g_([a-z])\(x\)\s*=\s*([^$]*[+]\s*\1)", ctx)

    if m_ga and m_f:
        param = m_ga.group(1)
        try:
            f = parse_poly(m_f.group(1))
        except Exception:
            f = None
        if f is not None:
            if "opens downwards" in sl or "opens down" in sl:
                return pack(letter, truth, [
                    f"The leading coefficient of $g_{param}$ is the parameter ${param}$ itself.",
                    f"If ${param}<0$, the parabola opens downwards.",
                ])
            if "axis" in sl:
                return pack(letter, truth, [
                    f"For $g_{param}(x)={param}x^{{2}}-4x+1$ the axis is",
                    "$$",
                    rf"x=\frac{{4}}{{2{param}}}=\frac{{2}}{{{param}}}",
                    "$$",
                    f"which depends on ${param}$, so it is not the fixed line $x=2$ for every ${param}$.",
                ])
            if "large enough" in sl or "miss" in sl:
                return pack(letter, truth, [
                    "The discriminant of $g_a-f$ is $25-4a$. Making $a$ large enough drives this "
                    "negative, so the graphs miss each other.",
                ])
            if "not too large" in sl or ("positive" in sl and "meet twice" in sl):
                return pack(letter, truth, [
                    "When $a>0$ is small enough that $25-4a>0$, the discriminant is positive and "
                    "the graphs meet twice.",
                ])
            if "tangent" in sl or ("exists" in sl and "a" in sl):
                return pack(letter, truth, [
                    "Tangency means $\\Delta(g_a-f)=0$. Expanding gives",
                    "$$",
                    r"\Delta=25-4a",
                    "$$",
                    r"which vanishes at $a=\frac{25}{4}\neq 0$, so a tangent member exists in the family.",
                ])

    if m_g and m_ft:
        p = m_ft.group(1)
        try:
            g = parse_poly(m_g.group(1))
        except Exception:
            g = None
        if g is not None:
            if "every" in sl and "(0,1)" in stmt.replace(" ", ""):
                g0 = Rational(expand(g.subs(x, 0)))
                return pack(letter, truth, [
                    rf"At $x=0$ one has $g(0)={F(g0)}$ and $f_{p}(0)$ equals the constant term of $f_{p}$.",
                    "Both equal $1$ for every parameter value, so the graphs always share $(0,1)$.",
                ])
            if "fail to meet" in sl:
                return pack(letter, truth, [
                    rf"Because every $f_{p}$ passes through $(0,1)$ and $g(0)=1$, the graphs "
                    "always share at least that point, so they never fail to meet.",
                ])
            if "miss" in sl and "slope" in sl:
                return pack(letter, truth, [
                    "The discriminant of $g-f_t$ is a quadratic in the slope. For some slopes it is "
                    "negative, so those lines miss the parabola.",
                ])
            if "delta(t)>0" in stmt.replace(" ", "").lower() or r"\Delta(t)>0" in stmt.replace(" ", ""):
                return pack(letter, truth, [
                    r"By definition, $\Delta(t)>0$ means $g-f_t$ has two distinct real roots, "
                    "so the graphs meet at two distinct points.",
                ])
            if "at most one" in sl and "tang" in sl:
                return pack(letter, truth, [
                    r"Tangency is the equation $\Delta(t)=0$, a quadratic condition in $t$. "
                    "A quadratic equation can have two real roots, so tangency is not limited to a single slope.",
                ])
            if "exist" in sl and "tang" in sl:
                return pack(letter, truth, [
                    "Tangency means $\\Delta(t)=0$. From the overview that equation has real solutions "
                    "for this family.",
                ])
            if "vertex" in sl and ("x-axis" in sl or "x$-axis" in sl or "$x$-axis" in sl):
                h, k, _ = vertex_of(g)
                return pack(letter, truth, [
                    "The vertex of $g$ is",
                    "$$",
                    rf"\left({F(h)},{F(k)}\right)",
                    "$$",
                    "Lying on the $x$-axis would require height $0$. Compare with the recovered height.",
                ])
            if "unique slope" in sl or ("unique" in sl and ("touch" in sl or "exactly one" in sl)):
                return pack(letter, truth, [
                    "Equal values and equal derivatives at the shared $y$-intercept pin down a single slope "
                    "for which the line touches the parabola at exactly one point.",
                ])
            if "shared" in sl and ("y-intercept" in sl or "(0,1)" in stmt):
                return pack(letter, truth, [
                    "At the shared $y$-intercept the heights already match. Matching derivatives there "
                    "makes the contact tangent.",
                ])
            if "besides" in sl or ("second" in sl and "positive" in sl):
                return pack(letter, truth, [
                    "Factoring out the shared root at $x=0$ leaves a linear factor that can give a second "
                    "meeting with positive abscissa.",
                ])

    if m_gs and m_f:
        # g_s shift family
        if "no vertical shift" in sl or ("with no vertical" in sl) or ("shift is zero" in sl):
            return pack(letter, truth, [
                "With shift $0$, the discriminant of $g-f$ is positive, so the graphs meet twice.",
            ])
        if "upward shift" in sl or ("large enough" in sl and "miss" in sl):
            return pack(letter, truth, [
                "Raising the parabola enough makes the discriminant negative, so the graphs miss.",
            ])
        if "tangent" in sl or "exactly one meeting" in sl or ("exists" in sl and "shift" in sl):
            return pack(letter, truth, [
                "Tangency means the discriminant vanishes as a function of the shift. "
                "That equation has a real root for this family.",
            ])
        if "third" in sl:
            return pack(letter, truth, [
                "A vertical shift keeps $g-f$ quadratic, so at most two meetings remain.",
            ])
        if "axis" in sl and "depends" in sl:
            return pack(letter, truth, [
                "A vertical shift changes only the constant term. The axis does not depend on that constant.",
            ])

    return None


def explain_one(task, idx, f, g) -> str:
    letter = "ABCDE"[idx]
    stmt = task["statements"][idx]
    truth = bool(task["answer_key"][idx])
    old = task["tactical_explanations"][idx]

    if f is not None and g is not None:
        out = expl_with_fg(letter, stmt, truth, f, g)
        if out is not None:
            return out

    if task.get("stem_kind") in {"parametric", "hybrid"} or "f_" in task["context"] or "g_" in task["context"]:
        out = expl_parametric(letter, stmt, truth, task)
        if out is not None:
            return out

    if task.get("stem_kind") == "symbolic":
        return expl_symbolic(letter, stmt, truth, old)

    old_body = re.sub(r"^\*\*[A-E]\.\*\*.*?\n+", "", old, flags=re.S).strip()
    old_body = re.sub(r"\\deg\([^)]+\)", "highest power", old_body)
    if "$$" in old_body and "deg" not in old_body.lower():
        return pack(letter, truth, [old_body])
    if len(old_body) < 80:
        return pack(letter, truth, [
            "Use the models recovered in the overview.",
            old_body if old_body else "Compare the claim with those recovered facts.",
        ])
    return pack(letter, truth, [old_body])


def patch_statements(task: dict) -> dict:
    """Mirror generator statement cleanups in the live JSON."""
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
    # Truth flips for rewritten claims
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
    # scrub deg from context
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
    task["solution_overview"] = build_overview(task, f, g)
    task["tactical_explanations"] = [explain_one(task, i, f, g) for i in range(5)]
    return task


def main() -> None:
    data = json.loads(PATH.read_text())
    tasks = [enrich_task(t) for t in data["tasks"]]
    assert len(tasks) == 50

    lens = [len(e) for t in tasks for e in t["tactical_explanations"]]
    print(
        f"expl chars: min={min(lens)} median={sorted(lens)[len(lens)//2]} "
        f"max={max(lens)} avg={sum(lens)//len(lens)}"
    )

    deg_left = []
    for t in tasks:
        blob = " ".join(t["statements"]) + " " + " ".join(t["tactical_explanations"])
        if re.search(r"\\deg|\bdeg\(", blob):
            deg_left.append(t["case_id"])
    print("tasks still mentioning deg:", deg_left)

    plug = []
    for t in tasks:
        for i, s in enumerate(t["statements"]):
            if re.search(r"If \$[a-z]=-?\d|For \$[a-z]=-?\d", s):
                plug.append((t["case_id"], "ABCDE"[i], s))
    print("plug-in statements left:", len(plug))
    for p in plug:
        print(" ", p)

    for t in tasks:
        for i, e in enumerate(t["tactical_explanations"]):
            assert e.startswith("**" + "ABCDE"[i] + ".**"), (t["case_id"], i, e[:40])
            assert "so the statement is" in e, (t["case_id"], i)
            assert "\r" not in e, (t["case_id"], i)

    data["tasks"] = tasks
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {len(tasks)} -> {PATH}")

    t0 = tasks[0]
    for i in (0, 1, 3):
        print(f"\n===== 7.01 {chr(65+i)} ({len(t0['tactical_explanations'][i])} chars) =====")
        print(t0["tactical_explanations"][i])


if __name__ == "__main__":
    main()
