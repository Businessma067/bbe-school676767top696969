#!/usr/bin/env python3
"""Enrich Chapter 7 explanations to MATH 13.18 rhythm.

Length tracks work + complexity. No padding to equalize letters.
Header convention: **A.** → True/False
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
    if "so the statement is" not in body:
        body += f"\n\nMatching the claim, so the statement is {'True' if truth else 'False'}."
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


def build_overview(task, f, g) -> str:
    if task.get("stem_kind") == "symbolic" or f is None or g is None:
        ov = (task.get("solution_overview") or "").strip()
        if task.get("stem_kind") == "symbolic":
            return (
                "The stem states structural hypotheses only — no concrete coefficients. "
                "Each letter applies a general rule for linear and quadratic maps.\n\n" + ov
            )
        return ov

    h, k, _ = vertex_of(g)
    a_g, b_g, c_g = [Rational(Poly(g, x).nth(i)) for i in (2, 1, 0)]
    sum_r = Rational(-b_g / a_g)
    prod_r = Rational(c_g / a_g)
    diff = expand(f - g)
    Delta = Rational(discriminant(Poly(expand(g - f), x)))
    n_int = 2 if Delta > 0 else (1 if Delta == 0 else 0)
    try:
        A, B, C = rewrite_ABC(f, g)
        rw = (
            f"Because $\\deg f=1$, the set $\\{{1,f,f^{{2}}\\}}$ spans degree $\\le 2$. "
            f"Matching $g=Af^{{2}}+Bf+C$ recovers\n\n"
            f"$$\nA={F(A)},\\quad B={F(B)},\\quad C={F(C)}.\n$$"
        )
    except Exception:
        rw = "Because $\\deg f=1$, a rewrite $g=Af^{2}+Bf+C$ exists and is unique."

    return "\n".join(
        [
            "The stem determines the two models",
            "",
            "$$",
            f"f(x)={L(f)}\\qquad g(x)={L(g)}",
            "$$",
            "",
            "Shared facts used across letters:",
            "",
            "$$",
            f"\\mathrm{{vertex}}=\\left({F(h)},{F(k)}\\right)"
            f"\\qquad \\mathrm{{sum}}={F(sum_r)}"
            f"\\qquad \\mathrm{{product}}={F(prod_r)}",
            "$$",
            "",
            "$$",
            f"f-g={L(diff)}\\qquad \\Delta={F(Delta)}\\qquad \\#\\mathrm{{meetings}}={n_int}",
            "$$",
            "",
            rw,
        ]
    )


def vertex_form_string(a_g, h, k) -> str:
    shift = f"\\left(x-{F(h)}\\right)^{2}" if h >= 0 else f"\\left(x+{F(-h)}\\right)^{2}"
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


def as_rat(expr):
    """Return Rational if expr is a concrete number, else None."""
    try:
        return Rational(expr)
    except Exception:
        return None


def expl_with_fg(letter, stmt, truth, f, g) -> str | None:
    sl = stmt.lower()
    # Skip symbolic-parameter models (coefficients not numeric)
    try:
        coeffs = Poly(f, x).all_coeffs() + Poly(g, x).all_coeffs()
        for c in coeffs:
            if as_rat(c) is None and c.free_symbols:
                return None
    except Exception:
        return None

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
    try:
        Delta = as_rat(discriminant(Poly(expand(g - f), x)))
    except Exception:
        return None
    if Delta is None:
        return None
    n_int = 2 if Delta > 0 else (1 if Delta == 0 else 0)
    gf = expand(g.subs(x, f))
    fg = expand(f.subs(x, g))

    if re.search(r"\bslope\b", sl) and "average" not in sl:
        return pack(letter, truth, [
            "Read the coefficient of $x$ in the linear model:",
            "$$", f"f(x)={L(f)}", "$$",
            f"The slope is ${F(a_f)}$.",
        ])

    if "opens" in sl:
        return pack(letter, truth, [
            "The opening direction is the sign of the leading coefficient:",
            "$$", f"a={F(a_g)}", "$$",
            "Upwards if $a>0$, downwards if $a<0$.",
        ])

    # y-intercept of f-g MUST be checked before the generic "axis" branch
    # (otherwise "y-axis" is misread as axis of symmetry).
    if ("f-g" in sl or "f(x)-g" in sl or "f(x) - g" in sl or "f - g" in sl) and (
        "y-axis" in sl or "y = 0" in sl or "y=0" in stmt.replace(" ", "") or "at $y" in sl
        or "intersects with the $y$" in sl or "intersects the $y$" in sl
    ):
        y0 = Rational(expand(diff.subs(x, 0)))
        return pack(letter, truth, [
            "The $y$-intercept of $f-g$ is the value at the origin:",
            "$$", f"(f-g)(0)={F(y0)}", "$$",
            f"Compare with the claimed value $0$." if y0 != 0 else "So the difference graph meets the $y$-axis at $y=0$.",
        ])

    # Gap at the axis before bare "axis"
    if "gap" in sl or (("f-g" in sl or "f - g" in sl) and "axis" in sl and "y-axis" not in sl):
        fh = Rational(expand(f.subs(x, h)))
        gap = Rational(fh - k)
        parts = [
            "First locate the axis of $g$:",
            "$$", f"x=-\\frac{{{F(b_g)}}}{{2\\cdot {F(a_g)}}}={F(h)}", "$$",
            "Evaluate both models there:",
            "$$", f"f\\left({F(h)}\\right)={F(fh)}\\qquad g\\left({F(h)}\\right)={F(k)}", "$$",
            "$$", f"f-g={F(fh)}-\\left({F(k)}\\right)={F(gap)}", "$$",
        ]
        claimed = re.search(
            r"equals?\s*\$([^$]+)\$|=\s*\$([^$]+)\$|equals?\s*((?:\\frac\{[^{}]+\}\{[^{}]+\}|-?\d+(?:/\d+)?))",
            stmt,
        )
        if claimed:
            raw = next(g for g in claimed.groups() if g)
            parts.append(f"Compare with the claimed value ${raw.strip()}$.")
        return pack(letter, truth, parts)

    if "axis of symmetry" in sl or (
        "axis" in sl and "y-axis" not in sl and "gap" not in sl and "f-g" not in sl
    ):
        return pack(letter, truth, [
            "The axis of symmetry of a quadratic is",
            "$$", "x=-\\frac{b}{2a}", "$$",
            "Substitute the coefficients of $g$:",
            "$$", f"x=-\\frac{{{F(b_g)}}}{{2\\cdot {F(a_g)}}}={F(h)}", "$$",
        ])

    if any(w in sl for w in ("vertex", "lowest", "highest", "minimum", "maximum")):
        parts = [
            "The vertex abscissa is",
            "$$", "x=-\\frac{b}{2a}", "$$",
            "$$", f"x=-\\frac{{{F(b_g)}}}{{2\\cdot {F(a_g)}}}={F(h)}", "$$",
            "Evaluate $g$ there:",
            "$$", f"g\\left({F(h)}\\right)={F(k)}", "$$",
        ]
        if a_g > 0:
            parts.append(f"Since $a>0$, the vertex $\\left({F(h)},{F(k)}\\right)$ is the global minimum point.")
        else:
            parts.append(f"Since $a<0$, the vertex $\\left({F(h)},{F(k)}\\right)$ is the global maximum point.")
        if "lie" in sl or "on the line" in sl or "on $y=f" in sl:
            fh = Rational(expand(f.subs(x, h)))
            parts += [
                "Check whether that point lies on $y=f(x)$:",
                "$$", f"f\\left({F(h)}\\right)={F(fh)}", "$$",
                f"Compare with the vertex height ${F(k)}$.",
            ]
        return pack(letter, truth, parts)

    if "sum" in sl and "root" in sl:
        return pack(letter, truth, [
            "Vieta's sum of roots for $ax^{2}+bx+c$ is",
            "$$", "S=-\\frac{b}{a}", "$$",
            "$$", f"S=-\\frac{{{F(b_g)}}}{{{F(a_g)}}}={F(sum_r)}", "$$",
        ])

    if "product" in sl and "root" in sl:
        return pack(letter, truth, [
            "Vieta's product of roots is",
            "$$", "P=\\frac{c}{a}", "$$",
            "$$", f"P=\\frac{{{F(c_g)}}}{{{F(a_g)}}}={F(prod_r)}", "$$",
        ])

    if (
        ("exist" in sl and ("a," in sl or "values" in sl or "a$" in sl))
        or "matching" in sl
        or "forces $a=" in sl
        or "forces $A=" in stmt
        or "a f(x)^{2}" in sl
        or "Af^{2}" in stmt.replace(" ", "")
    ):
        try:
            A, B, C = rewrite_ABC(f, g)
        except Exception:
            return None
        if "exist" in sl and "forces" not in sl and "matching" not in sl:
            return pack(letter, truth, [
                "Since $\\deg f=1$, the set $\\{1,f,f^{2}\\}$ is a basis of the space of "
                "polynomials of degree at most $2$. Every quadratic $g$ can therefore be "
                "written uniquely as $Af^{2}+Bf+C$.",
                "Matching coefficients against the given models recovers",
                "$$", f"A={F(A)},\\quad B={F(B)},\\quad C={F(C)}", "$$",
                "so the rewrite exists.",
            ])
        return pack(letter, truth, [
            "Write $g=Af^{2}+Bf+C$ and match coefficients. The $x^{2}$-coefficient of $f^{2}$ "
            f"is $({F(a_f)})^{2}$, so",
            "$$", f"A\\cdot({F(a_f)})^{2}={F(a_g)}\\implies A={F(A)}", "$$",
            "Continuing the match for the linear and constant terms gives",
            "$$", f"B={F(B)},\\quad C={F(C)}", "$$",
            "The full triple is",
            "$$", f"(A,B,C)=\\left({F(A)},{F(B)},{F(C)}\\right)", "$$",
        ])

    if "intersect" in sl or "meet" in sl:
        parts = [
            "Intersection abscissae solve $f(x)=g(x)$, equivalently",
            "$$", f"{L(expand(g - f))}=0", "$$",
            "This equation has degree at most $2$. Its discriminant is",
            "$$", f"\\Delta={F(Delta)}", "$$",
        ]
        if Delta > 0:
            parts.append(f"hence exactly ${n_int}$ distinct real meetings.")
        elif Delta == 0:
            parts.append("hence exactly one real meeting (a tangency).")
        else:
            parts.append("hence no real meetings.")
        if "more than twice" in sl or "three" in sl:
            parts.append("A line and a parabola cannot meet three times: degree $\\le 2$ forbids it.")
        return pack(letter, truth, parts)

    if ("f-g" in sl or "f(x)-g" in sl or "f(x) - g" in sl) and (
        "y-axis" in sl or "y = 0" in sl or "y=0" in stmt.replace(" ", "") or "at $y" in sl
    ):
        y0 = Rational(expand(diff.subs(x, 0)))
        return pack(letter, truth, [
            "The $y$-intercept of $f-g$ is",
            "$$", f"(f-g)(0)={F(y0)}", "$$",
        ])

    if "completing the square" in sl or "completed-square" in sl or (
        "g(x)=" in stmt and "left(x" in stmt.replace("\\", "")
    ):
        vf = vertex_form_string(a_g, h, k)
        return pack(letter, truth, [
            "Complete the square. The vertex abscissa is $x=-b/(2a)$:",
            "$$", f"x=-\\frac{{{F(b_g)}}}{{2\\cdot {F(a_g)}}}={F(h)}", "$$",
            "The vertex height is",
            "$$", f"g\\left({F(h)}\\right)={F(k)}", "$$",
            "so the completed-square form is",
            "$$", f"g(x)={vf}", "$$",
        ])

    if "composition" in sl or "\\deg" in stmt or (
        "degree" in sl and ("g\\circ" in stmt or "f\\circ" in stmt or "g(f" in sl or "f(g" in sl)
    ):
        deg_gf = int(Poly(gf, x).degree())
        deg_fg = int(Poly(fg, x).degree())
        if "g\\circ f" in stmt or "g(f" in sl:
            return pack(letter, truth, [
                "Degrees of non-constant polynomials multiply under composition:",
                "$$", "\\deg(g\\circ f)=\\deg(g)\\cdot\\deg(f)=2\\cdot 1=2", "$$",
                "Expanding explicitly:",
                "$$", L(gf), "$$",
                f"which has degree ${deg_gf}$. Adding degrees ($1+2=3$) is the wrong rule.",
            ])
        if "f\\circ g" in stmt or "f(g" in sl:
            return pack(letter, truth, [
                "Degrees multiply under composition:",
                "$$", "\\deg(f\\circ g)=1\\cdot 2=2", "$$",
                "$$", L(fg), "$$",
                f"Degree ${deg_fg}$.",
            ])
        return pack(letter, truth, [
            "Degrees multiply under composition:",
            "$$", f"\\deg(g\\circ f)={deg_gf},\\qquad \\deg(f\\circ g)={deg_fg}", "$$",
        ])

    if "g(f(0))" in stmt.replace(" ", "") or "f(g(0))" in stmt.replace(" ", ""):
        f0 = Rational(expand(f.subs(x, 0)))
        g0 = Rational(expand(g.subs(x, 0)))
        gf0 = Rational(expand(g.subs(x, f0)))
        fg0 = Rational(expand(f.subs(x, g0)))
        if "g(f(0))" in stmt.replace(" ", "") and "f(g(0))" in stmt.replace(" ", ""):
            return pack(letter, truth, [
                "Evaluate the two nestings separately.",
                "$$", f"f(0)={F(f0)}\\qquad g\\big(f(0)\\big)={F(gf0)}", "$$",
                "$$", f"g(0)={F(g0)}\\qquad f\\big(g(0)\\big)={F(fg0)}", "$$",
                f"Compare ${F(gf0)}$ with ${F(fg0)}$.",
            ])
        if "g(f(0))" in stmt.replace(" ", ""):
            return pack(letter, truth, [
                "Work inside-out:",
                "$$", f"f(0)={F(f0)}", "$$",
                "$$", f"g\\big(f(0)\\big)=g\\big({F(f0)}\\big)={F(gf0)}", "$$",
            ])
        return pack(letter, truth, [
            "Work inside-out:",
            "$$", f"g(0)={F(g0)}", "$$",
            "$$", f"f\\big(g(0)\\big)=f\\big({F(g0)}\\big)={F(fg0)}", "$$",
        ])

    if "average rate" in sl:
        g0 = Rational(expand(g.subs(x, 0)))
        g2 = Rational(expand(g.subs(x, 2)))
        avg = Rational((g2 - g0) / 2)
        parts = [
            "The average rate of change of $g$ on $[0,2]$ is the difference quotient",
            "$$", "\\frac{g(2)-g(0)}{2}", "$$",
            "$$", f"g(0)={F(g0)},\\qquad g(2)={F(g2)}", "$$",
            "$$", f"\\frac{{{F(g2)}-{F(g0)}}}{{2}}={F(avg)}", "$$",
        ]
        if "slope" in sl:
            parts += [f"The slope of $f$ is ${F(a_f)}$.", f"Compare ${F(avg)}$ with ${F(a_f)}$."]
        return pack(letter, truth, parts)

    if "gap" in sl or ("axis" in sl and "f-g" in sl):
        fh = Rational(expand(f.subs(x, h)))
        gap = Rational(fh - k)
        return pack(letter, truth, [
            f"At the axis $x={F(h)}$ of $g$:",
            "$$", f"f\\left({F(h)}\\right)={F(fh)}\\qquad g\\left({F(h)}\\right)={F(k)}", "$$",
            "$$", f"f-g={F(gap)}", "$$",
        ])

    if "leading coefficient" in sl:
        lead = Rational(Poly(diff, x).LC())
        return pack(letter, truth, [
            "Expand the difference:",
            "$$", L(diff), "$$",
            f"The leading coefficient is ${F(lead)}$.",
        ])

    if "real root" in sl:
        disc = Rational(discriminant(Poly(g, x)))
        n_real = 2 if disc > 0 else (1 if disc == 0 else 0)
        return pack(letter, truth, [
            "The discriminant of $g$ is",
            "$$", f"\\Delta=b^{{2}}-4ac={F(disc)}", "$$",
            f"so $g$ has exactly ${n_real}$ distinct real root(s).",
        ])

    if "distance" in sl and "root" in sl:
        disc = Rational(discriminant(Poly(g, x)))
        if disc > 0:
            roots = solve(g, x)
            span = Rational(abs(roots[0] - roots[1]))
            return pack(letter, truth, [
                "With two real roots the distance equals $\\sqrt{\\Delta}/|a|$:",
                "$$", f"\\Delta={F(disc)}\\qquad \\mathrm{{distance}}={F(span)}", "$$",
            ])

    # Named difference d=f-g evaluations: $d(0)=0$
    if re.search(r"\$d\(([^)]+)\)\s*=\s*([^$]+)\$", stmt):
        md = re.search(r"\$d\(([^)]+)\)\s*=\s*([^$]+)\$", stmt)
        try:
            x0 = parse_poly(md.group(1))
            val = Rational(expand(diff.subs(x, x0)))
            return pack(letter, truth, [
                "Since $d=f-g$, evaluate the difference:",
                "$$", f"d\\left({L(x0)}\\right)=(f-g)\\left({L(x0)}\\right)={F(val)}", "$$",
            ])
        except Exception:
            pass

    # Point evaluation lives in one math span: "$f(0)=-5$".
    m = re.search(r"\$([fg])\(([^)]+)\)\s*=\s*([^$]+)\$", stmt)
    if m:
        which, arg, _claimed = m.group(1), m.group(2), m.group(3)
        try:
            x0 = parse_poly(arg)
            model = f if which == "f" else g
            val = Rational(expand(model.subs(x, x0)))
            return pack(letter, truth, [
                f"Substitute $x={L(x0)}$ into ${which}$:",
                "$$", f"{which}\\left({L(x0)}\\right)={F(val)}", "$$",
            ])
        except Exception:
            pass

    # $(f-g)(0)=0$ style claims
    if "(f-g)(0)" in stmt.replace(" ", "") or "(f - g)(0)" in stmt:
        y0 = Rational(expand(diff.subs(x, 0)))
        return pack(letter, truth, [
            "Evaluate the difference at the origin:",
            "$$", f"(f-g)(0)={F(y0)}", "$$",
        ])

    # Model identity: short "$g(x)=...$" claims
    m_id = re.search(r"\$([fg])\(x\)\s*=\s*([^$]+)\$", stmt)
    if m_id and len(stmt.strip()) < 90:
        which, rhs = m_id.group(1), m_id.group(2)
        try:
            claimed = parse_poly(rhs)
            actual = f if which == "f" else g
            return pack(letter, truth, [
                f"Expand the recovered model ${which}$:",
                "$$", f"{which}(x)={L(actual)}", "$$",
                f"Compare with the claimed formula ${which}(x)={L(claimed)}$.",
            ])
        except Exception:
            pass

    # Explicit roots of g
    if "root" in sl and ("g" in sl or "quadratic" in sl) and "distance" not in sl and "share" not in sl and "sum" not in sl and "product" not in sl:
        disc = Rational(discriminant(Poly(g, x)))
        roots = solve(Poly(g, x), x)
        if disc >= 0 and all(as_rat(r) is not None for r in roots):
            rr = sorted((Rational(r) for r in roots), key=float)
            rr_s = ", ".join(F(r) for r in rr)
            return pack(letter, truth, [
                "Solve $g(x)=0$. The discriminant is",
                "$$", f"\\Delta={F(disc)}", "$$",
                "so the roots are",
                "$$", f"x\\in\\{{{rr_s}\\}}", "$$",
            ])

    # Monotonicity / horizontal / constant for f
    if "increasing" in sl or "decreasing" in sl:
        mono = "increasing" if a_f > 0 else ("decreasing" if a_f < 0 else "constant")
        return pack(letter, truth, [
            "A non-constant linear map is monotone by the sign of its slope:",
            "$$", f"f(x)={L(f)}\\qquad \\mathrm{{slope}}={F(a_f)}", "$$",
            f"Hence $f$ is {mono}.",
        ])

    if "horizontal" in sl:
        return pack(letter, truth, [
            "A horizontal line needs slope $0$. Here",
            "$$", f"f(x)={L(f)}", "$$",
            f"has slope ${F(a_f)}$.",
        ])

    if re.search(r"\bconstant\b", sl) and ("f" in sl or "$f" in stmt):
        return pack(letter, truth, [
            "A constant function has slope $0$. The recovered linear model is",
            "$$", f"f(x)={L(f)}", "$$",
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
                f"Evenness requires ${which}(-x)={which}(x)$ for all $x$. Compare values at $\\pm 1$:",
                "$$", f"{which}(1)={F(m1)}\\qquad {which}(-1)={F(mm)}", "$$",
            ])

    if "factor" in sl:
        return pack(letter, truth, [
            "Factor the recovered quadratic:",
            "$$", f"g(x)={L(g)}", "$$",
            "and compare with the claimed factorization.",
        ])

    if "share" in sl and "root" in sl:
        fr = solve(f, x)
        gr = solve(g, x)
        common = [r for r in fr if any(simplify(r - s) == 0 for s in gr)]
        msg = (
            f"They share the root $x={F(Rational(common[0]))}$."
            if common and as_rat(common[0]) is not None
            else "Comparing zeros shows whether a common root exists."
        )
        return pack(letter, truth, [
            "A shared root is a common zero of both models.",
            "$$", f"f(x)={L(f)}\\qquad g(x)={L(g)}", "$$",
            msg,
        ])

    if ("touch" in sl or "tangent" in sl) and ("graph" in sl or "meet" in sl or "intersect" in sl or "at" in sl):
        return pack(letter, truth, [
            "Tangency of the line and the parabola means $\\Delta(g-f)=0$ (a double root).",
            "$$", f"\\Delta={F(Delta)}", "$$",
            f"so there are exactly ${n_int}$ distinct real meeting point(s).",
        ])

    if ("intersect" in sl or "meet" in sl) and ("more than twice" in sl or "three" in sl):
        return pack(letter, truth, [
            "Intersection abscissae solve $f(x)=g(x)$, a polynomial equation of degree at most $2$:",
            "$$", f"g(x)-f(x)={L(expand(g - f))}", "$$",
            "$$", f"\\Delta={F(Delta)}\\qquad \\#\\mathrm{{meetings}}={n_int}", "$$",
        ])

    if ("intersect" in sl or "meet" in sl or "touch" in sl) and n_int is not None:
        return pack(letter, truth, [
            "Solve $f(x)=g(x)$:",
            "$$", f"g-f={L(expand(g - f))}\\qquad \\Delta={F(Delta)}", "$$",
            f"Hence exactly ${n_int}$ distinct real intersection(s).",
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
                    "$$", f"{which}'(x)={L(der)}\\qquad {which}'\\left({L(x0)}\\right)={F(val)}", "$$",
                ])
            except Exception:
                pass
        if "for all" in sl:
            return pack(letter, truth, [
                "Compare derivatives as polynomials:",
                "$$", f"f'(x)={L(fp)}\\qquad g'(x)={L(gp)}", "$$",
            ])

    if "completing the square" in sl or ("completing" in sl and "square" in sl) or "completed-square" in sl:
        return pack(letter, truth, [
            "Complete the square. The vertex abscissa is $x=-b/(2a)$:",
            "$$", f"x=-\\frac{{{F(b_g)}}}{{2\\cdot {F(a_g)}}}={F(h)}", "$$",
            "The vertex height is",
            "$$", f"g\\left({F(h)}\\right)={F(k)}", "$$",
            "so the completed-square form is",
            "$$", f"g(x)={vertex_form_string(a_g, h, k)}", "$$",
        ])

    if ("matching" in sl or "forces" in sl) and ("a=" in sl or "A=" in stmt or "A=" in stmt.replace(" ", "")):
        try:
            A, B, C = rewrite_ABC(f, g)
            return pack(letter, truth, [
                "Write $g=Af^{2}+Bf+C$ and match coefficients. The $x^{2}$-coefficient of $f^{2}$ is "
                f"$({F(a_f)})^{{2}}$, so",
                "$$", f"A\\cdot({F(a_f)})^{{2}}={F(a_g)}\\implies A={F(A)}", "$$",
                "Continuing the match for the linear and constant terms gives",
                "$$", f"B={F(B)},\\quad C={F(C)}", "$$",
            ])
        except Exception:
            pass

    if "g(x)" in stmt and ("\\ge" in stmt or "≥" in stmt) and "for all" in sl:
        return pack(letter, truth, [
            f"Since $a={F(a_g)}$" + (", the range is $[k,+\\infty)$" if a_g > 0 else ", the range is $(-\\infty,k]$") + " with",
            "$$", f"k=g\\left({F(h)}\\right)={F(k)}", "$$",
            "Compare that range statement with the claim.",
        ])

    return None
    return None



def expl_symbolic(letter, stmt, truth, old: str) -> str:
    """Structural claims: length tracks conceptual work, not filler."""
    sl = stmt.lower()
    compact = stmt.replace(" ", "").lower()
    old_body = re.sub(r"^\*\*[A-E]\.\*\*.*?\n+", "", old, flags=re.S).strip()

    # ----- Axis / Vieta -----
    # Match S/2 BEFORE bare x=S (substring "x=s" appears inside "x=s/2").
    if ("s/2" in compact or "x=s/2" in compact) and (
        "axis" in sl or "\\ell" in stmt or "ell" in sl or "in all cases" in sl
    ):
        return pack(letter, truth, [
            "Combine the two standard formulas:",
            "$$", "S=-\\frac{b}{a}\\qquad x_{\\mathrm{axis}}=-\\frac{b}{2a}", "$$",
            "Dividing the sum by two recovers the axis in every case:",
            "$$", "x_{\\mathrm{axis}}=\\frac{S}{2}", "$$",
        ])
    if (
        ("x=s" in compact or "line $x=s$" in sl)
        and "s/2" not in compact
        and ("axis" in sl or "\\ell" in stmt or "ell" in sl or "vertical line" in sl)
    ):
        return pack(letter, truth, [
            "Vieta's sum of roots is",
            "$$", "S=-\\frac{b}{a}", "$$",
            "while the axis of symmetry is",
            "$$", "x=-\\frac{b}{2a}=\\frac{S}{2}", "$$",
            "The axis is the midpoint of the roots, not the line $x=S$. "
            "Those two vertical lines coincide only in the special case $S=0$.",
        ])
    if "s=0" in compact and "axis" in sl:
        return pack(letter, truth, [
            "If $S=0$, then $-b/a=0$, so $b=0$. The axis formula collapses to",
            "$$", "x=-\\frac{b}{2a}=0", "$$",
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

    # ----- Degrees / composition -----
    if "add" in sl and "degree" in sl or "deg(g\\circf)=3" in compact or "deg(g\\circ f)=3" in stmt.replace(" ", ""):
        return pack(letter, truth, [
            "For non-constant polynomials, degree multiplies under composition:",
            "$$", "\\deg(g\\circ f)=\\deg(g)\\cdot\\deg(f)", "$$",
            "With $\\deg f=1$ and $\\deg g=2$ this is",
            "$$", "2\\cdot 1=2", "$$",
            "not $1+2=3$. Adding degrees is the wrong rule.",
        ])
    if "deg(f\\circg)=2" in compact or ("deg(f\\circ g)=2" in stmt.replace(" ", "")) or (
        "f\\circ g" in stmt and "always" in sl and "2" in stmt
    ):
        return pack(letter, truth, [
            "Degrees multiply:",
            "$$", "\\deg(f\\circ g)=\\deg(f)\\cdot\\deg(g)=1\\cdot 2=2", "$$",
        ])
    if "deg(g\\circf)=deg(f\\circg)" in compact or (
        "deg(g\\circ f)=deg(f\\circ g)" in stmt.replace(" ", "")
    ):
        return pack(letter, truth, [
            "Both compositions have degree $2$:",
            "$$", "\\deg(g\\circ f)=2\\cdot 1=2\\qquad \\deg(f\\circ g)=1\\cdot 2=2", "$$",
            "so the degrees agree, even though the polynomials need not.",
        ])
    if "identical as functions" in sl or "always identical" in sl:
        return pack(letter, truth, [
            "Equal degree does not imply equal polynomials. For $f(x)=x+1$ and $g(x)=x^{2}$,",
            "$$", "g(f(x))=(x+1)^{2}\\neq f(g(x))=x^{2}+1", "$$",
            "so composition does not commute.",
        ])

    # ----- Linear basis (before any catch-all that keys on f^{2}) -----
    if "exist" in sl and ("a,b,c" in compact or "a,b,c" in sl.replace(" ", "")):
        return pack(letter, truth, [
            "If $\\deg f=1$, then $\\{1,f,f^{2}\\}$ is a basis of the three-dimensional "
            "space of polynomials of degree at most $2$. Every quadratic $g$ is therefore "
            "a unique linear combination",
            "$$", "g=Af^{2}+Bf+C", "$$",
        ])
    if "uniquely determined" in sl or ("uniquely" in sl and "coefficient" in sl):
        return pack(letter, truth, [
            "Matching leading coefficients forces",
            "$$", "A=\\frac{a_g}{a_f^{2}}", "$$",
            "a single number determined by $g$ and $f$.",
        ])
    if "constant polynomial" in sl or ("constant" in sl and "replaced" in sl):
        return pack(letter, truth, [
            "A non-zero constant has degree $0$. Then $f^{2}$ is still constant, so "
            "$Af^{2}+Bf+C$ stays in degree $0$ and cannot equal a genuine quadratic.",
        ])
    if "same roots" in sl or "exactly the same roots" in sl:
        return pack(letter, truth, [
            "The equation $Af(x)^{2}+Bf(x)+C=0$ is quadratic in the value $f(x)$. "
            "Its solutions need not be the roots of $f$ itself.",
        ])
    if "deg(g\\circf)=4" in compact or "deg(g\\circ f)=4" in stmt.replace(" ", "") or (
        "deg(g\\circ f)" in stmt and "=4" in stmt.replace(" ", "")
    ):
        return pack(letter, truth, [
            "Degrees multiply under composition:",
            "$$", "\\deg(g\\circ f)=\\deg(g)\\cdot\\deg(f)=2\\cdot 1=2", "$$",
            "not $4$. Degree $4$ would require composing with a degree-$2$ inner or outer map.",
        ])
    if ("f^{2}" in stmt or "f^2" in stmt) and (
        "g\\circ f^{2}" in stmt or "g\\circ f^2" in stmt or "deg(g\\circ" in stmt.replace(" ", "")
    ):
        return pack(letter, truth, [
            "Now $\\deg(f^{2})=2$, so",
            "$$", "\\deg(g\\circ f^{2})=\\deg(g)\\cdot 2=4", "$$",
        ])

    # ----- Vertex form -----
    if "unique vertex" in sl or ("(h,k)" in stmt and "unique vertex" in sl):
        return pack(letter, truth, [
            "In vertex form $g(x)=a(x-h)^{2}+k$ the critical point is uniquely $x=h$, "
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
            "The graph is unchanged only in the special case $h=0$.",
        ])
    if "every real quadratic admits" in sl or "unique $(a,h,k)$" in sl or "unique $(a,h,k)$" in stmt:
        return pack(letter, truth, [
            "Completing the square writes any real quadratic in vertex form. "
            "The leading coefficient $a$ and the vertex $(h,k)$ are uniquely determined "
            "by $g$, so the triple $(a,h,k)$ is unique.",
        ])

    # ----- Discriminant -----
    if "delta<0" in compact or "\\delta<0" in compact or ("\\delta<0" in stmt.replace(" ", "").lower()):
        if "no real roots" in sl:
            return pack(letter, truth, [
                "By definition, $\\Delta<0$ means the quadratic equation $g(x)=0$ has no real solutions.",
            ])
        if "no vertex" in sl:
            return pack(letter, truth, [
                "The vertex abscissa $x=-b/(2a)$ is defined for every $a\\neq 0$. "
                "It does not depend on the sign of $\\Delta$.",
            ])
    if "delta=0" in compact or ("\\delta=0" in stmt.replace(" ", "").lower()):
        return pack(letter, truth, [
            "If $\\Delta=0$ there is a repeated real root. The graph touches the $x$-axis "
            "at exactly that one point (a tangency).",
        ])
    if "opposite signs" in sl:
        return pack(letter, truth, [
            "If $a$ and $c$ have opposite signs then $ac<0$, so $-4ac>0$. Hence",
            "$$", "\\Delta=b^{2}-4ac\\ge -4ac>0", "$$",
        ])
    if "strictly between" in sl or ("between the two real roots" in sl):
        return pack(letter, truth, [
            "When $\\Delta>0$ there are two distinct real roots. Their midpoint is "
            "$-b/(2a)$, which is exactly the axis, so the axis lies strictly between them.",
        ])

    # ----- Line meets parabola -----
    if "three distinct" in sl or "three distinct real points" in sl:
        return pack(letter, truth, [
            "The equation $f(x)=g(x)$ rearranges to a polynomial equation of degree "
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
            "The degree of $g-f$ remains $2$, so a third intersection cannot appear.",
        ])

    # ----- Range -----
    if "range" in sl and "a>0" in compact and "[k" in stmt.replace(" ", ""):
        return pack(letter, truth, [
            "From vertex form $g(x)=a(x-h)^{2}+k$ with $a>0$, the square is nonnegative, "
            "so $g(x)\\ge k$ with equality at $x=h$. The range is $[k,+\\infty)$.",
        ])
    if "range" in sl and "a<0" in compact and "[k" in stmt.replace(" ", ""):
        return pack(letter, truth, [
            "If $a<0$ the parabola opens downwards, so the range is $(-\\infty,k]$, not $[k,+\\infty)$.",
        ])
    if "never all of" in sl or "never all of $\\mathbb{r}$" in sl or "never all of" in sl:
        return pack(letter, truth, [
            "A quadratic is unbounded on only one side of its vertex, so its range "
            "misses an infinite open ray and cannot be all of $\\mathbb{R}$.",
        ])
    if "non-constant linear" in sl and "range" in sl:
        return pack(letter, truth, [
            "A non-constant linear map is continuous and strictly monotone on $\\mathbb{R}$, "
            "hence surjective onto $\\mathbb{R}$.",
        ])
    if "never takes negative" in sl or ("k=0" in compact and "a>0" in compact):
        return pack(letter, truth, [
            "If $a>0$ and $k=0$, the range is $[0,+\\infty)$, so $g$ never takes negative values.",
        ])

    # ----- Difference d=f-g -----
    if "deg d=2" in compact or ("always" in sl and "deg" in sl and "d" in sl):
        return pack(letter, truth, [
            "A quadratic minus a linear polynomial still has degree $2$: the $x^{2}$ term "
            "cannot cancel.",
        ])
    if "y-intercept of $d$" in sl or "y-intercept of d" in sl:
        return pack(letter, truth, [
            "By definition,",
            "$$", "d(0)=(f-g)(0)=f(0)-g(0)", "$$",
        ])
    if "d(0)=0" in compact:
        return pack(letter, truth, [
            "If $d(0)=0$ then $f(0)=g(0)$, so the graphs share the point $(0,f(0))$ on the $y$-axis.",
        ])
    if "more than twice" in sl and "d" in sl:
        return pack(letter, truth, [
            "Two distinct real roots of $d=f-g$ mean exactly two intersections of the graphs, "
            "not more than two.",
        ])
    if "itself a parabola" in sl:
        return pack(letter, truth, [
            "Since $\\deg d=2$, the graph of $d$ is a parabola.",
        ])

    # ----- Evenness -----
    if "even function if and only if" in sl or ("even" in sl and "b=0" in compact):
        return pack(letter, truth, [
            "Compute the difference:",
            "$$", "g(-x)-g(x)=-2bx", "$$",
            "This vanishes for all $x$ if and only if $b=0$.",
        ])
    if "even" in sl and "vertex" in sl and "y-axis" in sl:
        return pack(letter, truth, [
            "If $g$ is even then $b=0$, so the axis is $x=0$ and the vertex lies on the $y$-axis.",
        ])
    if "also an odd function" in sl:
        return pack(letter, truth, [
            "The only function that is both even and odd is the zero function. "
            "A non-zero quadratic cannot be odd.",
        ])
    if "axis of $g$ is $x=0$" in sl or ("axis" in sl and "x=0" in compact and "even" in sl):
        return pack(letter, truth, [
            "Axis $x=0$ means $b=0$, which is exactly the condition for $g$ to be even.",
        ])
    if "destroy evenness" in sl:
        return pack(letter, truth, [
            "If $b=0$, then $-g$ still has linear coefficient $0$, so evenness is preserved.",
        ])

    # ----- Monotonicity -----
    if "f" in sl and "strictly monotone" in sl and "all of" in sl and "m=0" not in compact:
        return pack(letter, truth, [
            "If $m\\neq 0$ then $f'(x)=m$ never changes sign, so $f$ is strictly "
            "monotone on $\\mathbb{R}$.",
        ])
    if "g" in sl and "strictly monotone" in sl and "all of" in sl:
        return pack(letter, truth, [
            "The derivative $g'(x)=2ax+b$ changes sign at the axis $x=-b/(2a)$. "
            "So $g$ increases on one side and decreases on the other — not monotone "
            "on all of $\\mathbb{R}$.",
        ])
    if "half-line" in sl or "half-line to the right" in sl or "restriction of $g$" in sl:
        return pack(letter, truth, [
            "On either open half-line determined by the axis, $g'$ keeps a constant sign, "
            "so the restriction of $g$ is strictly monotone there.",
        ])
    if "sufficiently large" in sl:
        return pack(letter, truth, [
            "If $a>0$, then $g(x)/x^{2}\\to a>0$ as $x\\to+\\infty$, while $f(x)/x^{2}\\to 0$. "
            "Hence $g$ dominates $f$ for all sufficiently large $x$.",
        ])
    if "m=0" in compact and "monotone" in sl:
        return pack(letter, truth, [
            "If $m=0$ then $f$ is constant. Constants are not strictly monotone.",
        ])

    # ----- Tangency family -----
    if "for every real $t$" in sl or ("every real $t$" in sl and "tangent" in sl):
        return pack(letter, truth, [
            "Tangency of $y=tx+1$ to $y=g$ means the discriminant",
            "$$", "\\Delta(t)=(b-t)^{2}-4a(c-1)", "$$",
            "vanishes. That is one equation in $t$, not an identity holding for every $t$.",
        ])
    if ("exists at least one" in sl or "there exists at least one" in sl) and "tangent" in sl:
        return pack(letter, truth, [
            "View $\\Delta(t)=(b-t)^{2}-4a(c-1)$ as a quadratic in $t$:",
            "$$", "\\Delta(t)=t^{2}-2bt+b^{2}-4a(c-1)", "$$",
            "Its discriminant (in $t$) equals $16a(c-1)$. When $a(c-1)<0$ one has "
            "$\\Delta(t)>0$ for every real $t$, so $\\Delta(t)$ never hits zero and no "
            "tangent exists in the family.",
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
            "The tangency discriminant involves the constant term through $c-q$. "
            "Changing the intercept $q$ changes that expression, and can create or destroy "
            "real roots $t$.",
        ])

    # ----- Shifts / scalings -----
    if "g_1" in stmt and "shifted by $r$" in sl:
        return pack(letter, truth, [
            "Replacing $x$ by $x-r$ translates the graph by $r$ to the right, so the axis "
            "moves from $x=h$ to $x=h+r$.",
        ])
    if "g_2" in stmt and "differs" in sl:
        return pack(letter, truth, [
            "Adding a constant $s$ translates the graph vertically. The axis $x=h$ is unchanged.",
        ])
    if "lambda<0" in compact or ("\\lambda<0" in stmt and "opposite" in sl):
        return pack(letter, truth, [
            "Scaling by $\\lambda<0$ replaces the leading coefficient $a$ by $\\lambda a$, "
            "which has the opposite sign, so the parabola flips its opening direction.",
        ])
    if "r\\neq 0" in stmt.replace(" ", "") or ("r\\neq0" in compact):
        return pack(letter, truth, [
            "Any horizontal shift $r\\neq 0$ moves the axis while leaving the leading "
            "coefficient $a$ unchanged.",
        ])
    if "g_3" in stmt and "same roots" in sl:
        return pack(letter, truth, [
            "For $\\lambda\\neq 0$,",
            "$$", "\\lambda g(x)=0\\iff g(x)=0", "$$",
            "so the roots are unchanged.",
        ])

    # Fallback: keep old math content without padding
    if old_body:
        return pack(letter, truth, [old_body])
    return pack(letter, truth, ["Apply the structural rule from the overview to the claim."])


def recover_models(task: dict):
    """Recover concrete f,g from context, overview, or hybrid prose."""
    f, g = extract_fg(task["context"])
    f2, g2 = extract_fg(task.get("solution_overview", ""))
    f = f or f2
    g = g or g2
    ctx = task["context"]

    if f is None:
        m = re.search(
            r"(?:line\s+)?\$f\$\s+has\s+slope\s+\$([^$]+)\$\s+and\s+(?:\$y\$-)?intercept\s+\$([^$]+)\$",
            ctx,
            re.I,
        )
        if not m:
            m = re.search(r"slope\s+\$([^$]+)\$.{0,40}intercept\s+\$([^$]+)\$", ctx, re.I)
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
                g = parse_poly(raw)
            except Exception:
                pass

    return f, g




def expl_parametric(letter, stmt, truth, task) -> str | None:
    """Parameter-family claims: compute with the stem's parameter."""
    sl = stmt.lower()
    ctx = task["context"]

    m_g = re.search(r"g\(x\)\s*=\s*([^$]+)", ctx)
    m_ft = re.search(r"f_([a-z])\(x\)\s*=\s*([^$]+)", ctx)
    m_ga = re.search(r"g_([a-z])\(x\)\s*=\s*([^$]+)", ctx)
    m_f = re.search(r"(?<![a-z_])f\(x\)\s*=\s*([^$]+)", ctx)

    # Family g_a(x)=a x^2-4x+1, f(x)=x
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
            ma = re.search(rf"{param}\s*=\s*(-?\d+)", stmt.replace(" ", ""))
            if ma:
                a0 = Rational(ma.group(1))
                g = expand(parse_poly(m_ga.group(2).replace(param, f"({a0})")))
                Delta = Rational(discriminant(Poly(expand(g - f), x)))
                n_int = 2 if Delta > 0 else (1 if Delta == 0 else 0)
                return pack(letter, truth, [
                    f"Substitute ${param}={F(a0)}$:",
                    "$$",
                    rf"g(x)={L(g)}\qquad f(x)={L(f)}",
                    "$$",
                    "$$",
                    rf"\Delta={F(Delta)}\qquad \#\mathrm{{meetings}}={n_int}",
                    "$$",
                ])
            if "tangent" in sl or ("exists" in sl and "a" in sl):
                return pack(letter, truth, [
                    rf"Tangency means $\Delta(g_a-f)=0$. Expanding gives",
                    "$$",
                    r"\Delta=25-4a",
                    "$$",
                    r"which vanishes at $a=\frac{25}{4}\neq 0$, so a tangent member exists in the family.",
                ])

    # Family g(x)=..., f_p(x)=...
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
            if "fail to meet" in sl or "do not meet" in sl or "fail to meet" in sl:
                return pack(letter, truth, [
                    rf"Because every $f_{p}$ passes through $(0,1)$ and $g(0)=1$, the graphs "
                    "always share at least that point, so they never fail to meet.",
                ])
            mp = re.search(rf"{p}\s*=\s*(-?\d+)", stmt.replace(" ", ""))
            if mp:
                t0 = Rational(mp.group(1))
                raw = m_ft.group(2).replace(p, f"({t0})")
                try:
                    f = parse_poly(raw)
                except Exception:
                    f = None
                if f is not None:
                    Delta = Rational(discriminant(Poly(expand(g - f), x)))
                    n_int = 2 if Delta > 0 else (1 if Delta == 0 else 0)
                    parts = [
                        f"Substitute ${p}={F(t0)}$:",
                        "$$",
                        rf"f(x)={L(f)}\qquad g(x)={L(g)}",
                        "$$",
                        "$$",
                        rf"g-f={L(expand(g-f))}\qquad \Delta={F(Delta)}",
                        "$$",
                        f"Hence exactly ${n_int}$ distinct real intersection(s).",
                    ]
                    if "tangent" in sl:
                        parts.append(
                            rf"Tangency also needs equal derivatives at the contact point; "
                            rf"here $g'(0)={F(Rational(expand(g.diff(x).subs(x,0))))}$ and the line slope is ${F(t0)}$."
                        )
                    return pack(letter, truth, parts)
            if "delta(t)>0" in stmt.replace(" ", "").lower() or r"\Delta(t)>0" in stmt.replace(" ", ""):
                return pack(letter, truth, [
                    r"By definition, $\Delta(t)>0$ means the quadratic $g-f_t$ has two distinct real roots, "
                    "so the graphs meet at two distinct points.",
                ])
            if "at most one" in sl and "tang" in sl:
                return pack(letter, truth, [
                    r"Tangency is the equation $\Delta(t)=0$, a quadratic condition in $t$. "
                    "A quadratic equation can have two real roots, so tangency is not limited to a single parameter value.",
                ])
            if "exist" in sl and "tang" in sl:
                return pack(letter, truth, [
                    r"Tangency means $\Delta(t)=0$. From the overview,",
                    "$$",
                    r"\Delta(t)=(2+t)^{2}-8",
                    "$$",
                    "which is a genuine quadratic in $t$ and takes a negative value at $t=-2$, so real roots exist.",
                ])
            if "vertex" in sl and ("f_0" in stmt or "f_0" in stmt.replace(" ", "")):
                h, k, _ = vertex_of(g)
                return pack(letter, truth, [
                    "The vertex of $g$ is",
                    "$$",
                    rf"\left({F(h)},{F(k)}\right)",
                    "$$",
                    r"while $f_0(x)=0$ is the $x$-axis. Compare the vertex height with $0$.",
                ])
            if f"{p}=0" in stmt.replace(" ", ""):
                f0 = parse_poly(m_ft.group(2).replace(p, "(0)"))
                Delta = Rational(discriminant(Poly(expand(g - f0), x)))
                n_int = 2 if Delta > 0 else (1 if Delta == 0 else 0)
                return pack(letter, truth, [
                    rf"At ${p}=0$ the line is $f(x)={L(f0)}$. Then",
                    "$$",
                    rf"\Delta={F(Delta)}\qquad \#\mathrm{{meetings}}={n_int}",
                    "$$",
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
    if "$$" in old_body:
        return pack(letter, truth, [old_body])
    if len(old_body) < 60:
        return pack(letter, truth, [
            "Use the models recovered in the overview.",
            old_body if old_body else "Compare the claim with those recovered facts.",
        ])
    return pack(letter, truth, [old_body])


def _numeric_model(expr) -> bool:
    if expr is None:
        return False
    try:
        for c in Poly(expr, x).all_coeffs():
            if as_rat(c) is None and getattr(c, "free_symbols", None):
                return False
        return True
    except Exception:
        return False


def enrich_task(task: dict) -> dict:
    f, g = recover_models(task)
    if not _numeric_model(f):
        f = None
    if not _numeric_model(g):
        g = None
    task = dict(task)
    task["solution_overview"] = build_overview(task, f, g)
    task["tactical_explanations"] = [explain_one(task, i, f, g) for i in range(5)]
    return task


def main() -> None:
    data = json.loads(PATH.read_text())
    tasks = [enrich_task(t) for t in data["tasks"]]
    assert len(tasks) == 50

    lens = [len(e) for t in tasks for e in t["tactical_explanations"]]
    print(f"expl chars: min={min(lens)} median={sorted(lens)[len(lens)//2]} max={max(lens)} avg={sum(lens)//len(lens)}")
    assert min(lens) >= 50
    assert max(lens) > 2 * min(lens)

    for t in tasks:
        for i, e in enumerate(t["tactical_explanations"]):
            assert e.startswith("**" + "ABCDE"[i] + ".**"), (t["case_id"], i, e[:40])
            assert "so the statement is" in e, (t["case_id"], i)

    data["tasks"] = tasks
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {len(tasks)} -> {PATH}")

    t0 = tasks[0]
    for i in (0, 2, 4):
        print(f"\n===== 7.01 {chr(65+i)} ({len(t0['tactical_explanations'][i])} chars) =====")
        print(t0["tactical_explanations"][i])

    hard = next(t for t in tasks if t["difficulty_level"] == "5/5" and t["stem_kind"] != "symbolic")
    print(f"\n===== {hard['case_id']} A ({len(hard['tactical_explanations'][0])} chars) =====")
    print(hard["tactical_explanations"][0][:1600])

    sym = next(t for t in tasks if t["stem_kind"] == "symbolic" and t["difficulty_level"] == "5/5")
    print(f"\n===== {sym['case_id']} A ({len(sym['tactical_explanations'][0])} chars) =====")
    print(sym["tactical_explanations"][0])


if __name__ == "__main__":
    main()
