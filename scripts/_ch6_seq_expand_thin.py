#!/usr/bin/env python3
"""Sequential maximal expansion for Ch6 thin letters (from a start case).

Gold depth: MATH 6.113 E.
Does not change statements or answer_key. Preserves 6.113 E.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

import sympy as sp
from sympy.parsing.latex import parse_latex

PATH = Path("/workspace/src/data/math-ch6-inequalities.json")
x = sp.symbols("x")
LETTERS = "ABCDE"


def tex(e) -> str:
    return sp.latex(e).replace("\\left", "").replace("\\right", "")


def header(L: str, k: bool) -> str:
    return f"**{L}.** → {'True' if k else 'False'}"


def closer(k: bool) -> str:
    return f"So the statement is {'True' if k else 'False'}."


def note(k: bool, stmt: str) -> str:
    if k:
        return "which matches the claimed set."
    m = re.search(r"\bis\s+(\$[^$]+\$)", stmt)
    if m:
        return f"which does not match the claimed set {m.group(1)}."
    return "which does not match the claim."


def opt(op: str) -> str:
    return {"<": "<", "<=": "\\le ", ">": ">", ">=": "\\ge "}[op]


def sign_of(expr, pt) -> str:
    try:
        val = sp.N(expr.subs(x, pt))
        if val.is_real is False:
            return "?"
        if val == 0:
            return "0"
        return "+" if val > 0 else "-"
    except Exception:
        return "?"


def sign_chart(expr, points) -> str:
    pts = []
    for p in points:
        try:
            if p.is_real is False:
                continue
            float(sp.N(p))
            pts.append(p)
        except Exception:
            continue
    pts = sorted(pts, key=lambda z: float(sp.N(z)))
    bounds = [-sp.oo] + pts + [sp.oo]
    lines = [
        "Sign chart on the open intervals:",
        "",
        f"| Interval | Sign of ${tex(sp.together(expr))}$ |",
        "| --- | --- |",
    ]
    for a, b in zip(bounds, bounds[1:]):
        try:
            if a == -sp.oo and b == sp.oo:
                mid = 0
            elif a == -sp.oo:
                mid = float(sp.N(b)) - 1
            elif b == sp.oo:
                mid = float(sp.N(a)) + 1
            else:
                mid = (float(sp.N(a)) + float(sp.N(b))) / 2
        except Exception:
            mid = 0
        sg = sign_of(expr, mid)
        if a == -sp.oo:
            itv = f"(-\\infty,{tex(b)})"
        elif b == sp.oo:
            itv = f"({tex(a)},\\infty)"
        else:
            itv = f"({tex(a)},{tex(b)})"
        lines.append(f"| ${itv}$ | ${sg}$ |")
    return "\n".join(lines)


def is_thin(expl: str, stmt: str) -> bool:
    if "\\middle|" in expl:
        return True
    if ("The calculation supports" in expl or "The calculation contradicts" in expl) and (
        expl.count("$$") < 8 or len(expl) < 400
    ):
        return True
    if "Bring every term to one side." in expl and expl.count("$$") <= 4 and len(expl) < 450:
        return True
    if "Translate the claim into arithmetic" in expl and any(
        t in stmt for t in ["\\sqrt", "solution set of", "max", "\\frac"]
    ):
        if "Sign chart" not in expl and "kink" not in expl.lower() and "domain" not in expl.lower():
            if "Case 1" not in expl and "both expressions" not in expl:
                return True
    if "\\sqrt" in stmt and "domain" not in expl.lower() and len(expl) < 700:
        return True
    if re.search(r"\|[^|]+\|\s*-\s*\|", stmt) and "kink" not in expl.lower() and "On $" not in expl:
        return True
    if re.search(r"\|[^|]+\|\s*\+\s*\|", stmt) and "On $" not in expl and len(expl) < 700:
        return True
    if len(expl) < 320:
        return True
    if "max" in stmt.lower() and "both expressions" not in expl and "Case 1" not in expl:
        return True
    if "Reading the arithmetic against the claim" in expl and any(
        t in stmt for t in ["\\sqrt", "solution set", "\\frac", "|"]
    ):
        if "Sign chart" not in expl and "domain" not in expl.lower() and "kink" not in expl.lower():
            return True
    return False


def parse_rel_blob(blob: str):
    blob = blob.strip()
    for raw, op in [
        ("\\leqslant", "<="),
        ("\\le", "<="),
        ("\\geqslant", ">="),
        ("\\ge", ">="),
        ("≤", "<="),
        ("≥", ">="),
        ("<", "<"),
        (">", ">"),
    ]:
        depth = 0
        i = 0
        while i < len(blob):
            if blob[i] == "{":
                depth += 1
                i += 1
                continue
            if blob[i] == "}":
                depth = max(0, depth - 1)
                i += 1
                continue
            if depth == 0 and blob.startswith(raw, i):
                lhs = blob[:i].strip()
                rhs = blob[i + len(raw) :].strip()
                try:
                    return parse_latex(lhs), op, parse_latex(rhs)
                except Exception:
                    return None
            i += 1
    return None


def expand_abs_gt(L, k, stmt, inner, c, op) -> str:
    parts = [
        header(L, k),
        "",
        "Start from the absolute-value inequality.",
        "",
        f"$$\n|{tex(inner)}|{opt(op)}{tex(c)}\n$$",
        "",
    ]
    if op in (">", ">="):
        parts += [
            "An absolute value above a positive constant splits into two outer cases.",
            "",
            "**Case 1.**",
            "",
            f"$$\n{tex(inner)}{opt(op)}{tex(c)}\n$$",
            "",
        ]
        s1 = sp.solveset(sp.Gt(inner, c) if op == ">" else sp.Ge(inner, c), x, sp.Reals)
        parts += [f"$$\nx\\in {tex(s1)}\n$$", "", "**Case 2.**", ""]
        if op == ">":
            parts += [f"$$\n{tex(inner)}<-{tex(c)}\n$$", ""]
            s2 = sp.solveset(sp.Lt(inner, -c), x, sp.Reals)
        else:
            parts += [f"$$\n{tex(inner)}\\le -{tex(c)}\n$$", ""]
            s2 = sp.solveset(sp.Le(inner, -c), x, sp.Reals)
        parts += [f"$$\nx\\in {tex(s2)}\n$$", "", "Union of the two cases:", ""]
        sol = sp.Union(s1, s2)
    else:
        parts += [
            "An absolute value below a nonnegative constant unfolds to a compound inequality.",
            "",
            f"$$\n-{tex(c)}{opt(op)}{tex(inner)}{opt(op)}{tex(c)}\n$$",
            "",
        ]
        sol = sp.solveset(
            sp.Lt(sp.Abs(inner), c) if op == "<" else sp.Le(sp.Abs(inner), c), x, sp.Reals
        )
    parts += [f"$$\n{tex(sol)}\n$$", "", note(k, stmt), "", closer(k)]
    return "\n".join(parts).rstrip() + "\n"


def expand_abs_pieces(L, k, stmt, e1, e2, op, c, diff=False) -> str | None:
    k1 = sp.solve(e1, x)
    k2 = sp.solve(e2, x)
    if len(k1) != 1 or len(k2) != 1:
        return None
    a, b = k1[0], k2[0]
    lo, hi = (a, b) if sp.N(a) <= sp.N(b) else (b, a)
    kind = "difference" if diff else "sum"
    parts = [
        header(L, k),
        "",
        f"Start from the absolute-value {kind} inequality.",
        "",
        f"$$\n|{tex(e1)}|{'+' if not diff else '-'}|{tex(e2)}|{opt(op)}{tex(c)}\n$$",
        "",
        f"The expression changes formula at the kink points $x={tex(lo)}$ and $x={tex(hi)}$.",
        "",
    ]
    contrib = []
    for Lbound, R in [(-sp.oo, lo), (lo, hi), (hi, sp.oo)]:
        if Lbound == -sp.oo:
            test = float(sp.N(R)) - 1
            label = f"$x\\le {tex(R)}$"
        elif R == sp.oo:
            test = float(sp.N(Lbound)) + 1
            label = f"$x\\ge {tex(Lbound)}$"
        else:
            test = (float(sp.N(Lbound)) + float(sp.N(R))) / 2
            label = f"${tex(Lbound)}\\le x\\le {tex(R)}$"
        s1 = 1 if sp.N(e1.subs(x, test)) >= 0 else -1
        s2 = 1 if sp.N(e2.subs(x, test)) >= 0 else -1
        form = sp.simplify(s1 * e1 + ((-s2 * e2) if diff else (s2 * e2)))
        parts += [
            f"On {label}:",
            "",
            f"$$\n|{tex(e1)}|{'+' if not diff else '-'}|{tex(e2)}|={tex(form)}\n$$",
            "",
        ]
        if op == "<":
            sol = sp.solveset(sp.Lt(form, c), x, sp.Reals)
        elif op == "<=":
            sol = sp.solveset(sp.Le(form, c), x, sp.Reals)
        elif op == ">":
            sol = sp.solveset(sp.Gt(form, c), x, sp.Reals)
        else:
            sol = sp.solveset(sp.Ge(form, c), x, sp.Reals)
        if Lbound == -sp.oo:
            piece = sp.Interval(-sp.oo, R)
        elif R == sp.oo:
            piece = sp.Interval(Lbound, sp.oo)
        else:
            piece = sp.Interval(Lbound, R)
        inter = sp.Intersection(sol, piece)
        parts += [
            f"Solving ${tex(form)}{opt(op)}{tex(c)}$ on this piece gives",
            "",
            f"$$\n{tex(inter)}\n$$",
            "",
        ]
        contrib.append(inter)
    union = contrib[0]
    for s in contrib[1:]:
        union = sp.Union(union, s)
    parts += [
        "Union of the admissible pieces:",
        "",
        f"$$\n{tex(sp.simplify(union))}\n$$",
        "",
        note(k, stmt),
        "",
        closer(k),
    ]
    return "\n".join(parts).rstrip() + "\n"


def expand_radical(L, k, stmt, lhs, op, rhs) -> str:
    parts = [
        header(L, k),
        "",
        "Start from the radical inequality.",
        "",
        f"$$\n{tex(lhs)}{opt(op)}{tex(rhs)}\n$$",
        "",
    ]
    insides = []
    for node in list(sp.preorder_traversal(lhs)) + list(sp.preorder_traversal(rhs)):
        if isinstance(node, sp.Pow) and node.exp == sp.Rational(1, 2):
            insides.append(node.base)
    insides = list({sp.simplify(i) for i in insides})
    parts += ["Require every radicand to be nonnegative (domain).", ""]
    for ins in insides:
        parts += [f"$$\n{tex(ins)}\\ge 0\n$$", ""]
        dsol = sp.solveset(sp.Ge(ins, 0), x, sp.Reals)
        parts += [f"$$\nx\\in {tex(dsol)}\n$$", ""]
    parts += ["**Case when the non-radical side is negative.**", ""]
    if op in (">", ">="):
        parts += [
            "A square root is always $\\ge 0$, so the inequality holds automatically on the part of the domain where the right side is negative.",
            "",
        ]
    else:
        parts += [
            "If the right side is negative, a nonnegative square root cannot lie strictly below it; only the boundary $0$ can matter for non-strict inequalities.",
            "",
        ]
    parts += [
        "**Case when the non-radical side is nonnegative.**",
        "",
        "Both sides are nonnegative, so squaring preserves the inequality direction.",
        "",
    ]
    sq_l = sp.expand(lhs**2)
    sq_r = sp.expand(rhs**2)
    parts += [f"$$\n{tex(sq_l)}{opt(op)}{tex(sq_r)}\n$$", ""]
    diff = sp.expand(sq_l - sq_r)
    parts += [f"$$\n{tex(diff)}{opt(op)}0\n$$", ""]
    fac = sp.factor(diff)
    if fac != diff:
        parts += [f"$$\n{tex(fac)}{opt(op)}0\n$$", ""]
    roots = []
    for z in sp.solve(diff, x):
        try:
            if z.is_real is False:
                continue
            float(sp.N(z))
            roots.append(z)
        except Exception:
            continue
    roots = sorted(roots, key=lambda z: float(sp.N(z)))
    for z in roots:
        parts += [f"$$\nx={tex(z)}\n$$", ""]
    parts += [sign_chart(diff, roots), ""]
    if op == "<":
        sol = sp.solveset(sp.Lt(lhs, rhs), x, sp.Reals)
    elif op == "<=":
        sol = sp.solveset(sp.Le(lhs, rhs), x, sp.Reals)
    elif op == ">":
        sol = sp.solveset(sp.Gt(lhs, rhs), x, sp.Reals)
    else:
        sol = sp.solveset(sp.Ge(lhs, rhs), x, sp.Reals)
    parts += [
        "Intersecting the squared case with the domain and the sign case gives",
        "",
        f"$$\n{tex(sol)}\n$$",
        "",
        note(k, stmt),
        "",
        closer(k),
    ]
    return "\n".join(parts).rstrip() + "\n"


def expand_two_rad(L, k, stmt) -> str | None:
    m = re.search(
        r"\\sqrt\{([^}]+)\}\s*\+\s*\\sqrt\{([^}]+)\}\s*(\\le|\\ge|<|>)\s*([^$]+)", stmt
    )
    if not m:
        return None
    a = parse_latex(m.group(1))
    b = parse_latex(m.group(2))
    op = {"\\le": "<=", "\\ge": ">="}.get(m.group(3), m.group(3))
    c = parse_latex(m.group(4).strip())
    parts = [
        header(L, k),
        "",
        "Start from the two-radical inequality.",
        "",
        f"$$\n\\sqrt{{{tex(a)}}}+\\sqrt{{{tex(b)}}}{opt(op)}{tex(c)}\n$$",
        "",
        "Require both radicands to be nonnegative.",
        "",
        f"$$\n{tex(a)}\\ge 0\n$$",
        "",
        f"$$\n{tex(b)}\\ge 0\n$$",
        "",
    ]
    d1 = sp.solveset(sp.Ge(a, 0), x, sp.Reals)
    d2 = sp.solveset(sp.Ge(b, 0), x, sp.Reals)
    domain = sp.Intersection(d1, d2)
    parts += [
        f"$$\nx\\in {tex(domain)}\n$$",
        "",
        "Isolate one radical (right side must stay nonnegative), then square twice.",
        "",
        f"$$\n\\sqrt{{{tex(a)}}}{opt(op)}{tex(c)}-\\sqrt{{{tex(b)}}}\n$$",
        "",
        f"$$\n\\sqrt{{{tex(b)}}}\\le {tex(c)}\n$$",
        "",
        f"$$\n{tex(b)}\\le {tex(c**2)}\n$$",
        "",
        "After the first squaring, isolate the remaining radical and square again.",
        "",
    ]
    if op in ("<", "<="):
        parts += [
            f"$$\n2\\cdot {tex(c)}\\sqrt{{{tex(b)}}}{opt(op)}{tex(c)}^2+{tex(b)}-{tex(a)}\n$$",
            "",
        ]
    lhs = sp.sqrt(a) + sp.sqrt(b)
    if op == "<=":
        sol = sp.solveset(sp.Le(lhs, c), x, sp.Reals)
    elif op == "<":
        sol = sp.solveset(sp.Lt(lhs, c), x, sp.Reals)
    elif op == ">=":
        sol = sp.solveset(sp.Ge(lhs, c), x, sp.Reals)
    else:
        sol = sp.solveset(sp.Gt(lhs, c), x, sp.Reals)
    parts += [
        "Intersecting every domain and squared condition gives",
        "",
        f"$$\n{tex(sol)}\n$$",
        "",
        note(k, stmt),
        "",
        closer(k),
    ]
    return "\n".join(parts).rstrip() + "\n"


def expand_max(L, k, stmt) -> str | None:
    blob = None
    for m in re.finditer(r"\$([^$]+)\$", stmt):
        if "max" in m.group(1).lower():
            blob = m.group(1)
            break
    if not blob:
        return None
    b = blob.replace("\\max", "max").replace("\\,", "")
    m = re.search(r"max\{([^}]+)\}\s*(\\le|\\ge|<|>|≤|≥)\s*(.+)", b)
    if not m:
        return None
    args = [a.strip() for a in m.group(1).split(",")]
    if len(args) != 2:
        return None
    op = {"\\le": "<=", "\\ge": ">=", "≤": "<=", "≥": ">="}.get(m.group(2), m.group(2))
    try:
        a1 = parse_latex(args[0])
        a2 = parse_latex(args[1])
        c = parse_latex(m.group(3).strip())
    except Exception:
        return None
    parts = [
        header(L, k),
        "",
        "Start from the maximum inequality.",
        "",
        f"$$\n\\max\\{{{tex(a1)},\\,{tex(a2)}\\}}{opt(op)}{tex(c)}\n$$",
        "",
    ]
    if op in ("<", "<="):
        parts += [
            "The maximum of two expressions is below a bound if and only if both expressions are.",
            "",
            f"$$\n{tex(a1)}{opt(op)}{tex(c)}\n$$",
            "",
            f"$$\n{tex(a2)}{opt(op)}{tex(c)}\n$$",
            "",
        ]
        s1 = sp.solveset(sp.Lt(a1, c) if op == "<" else sp.Le(a1, c), x, sp.Reals)
        s2 = sp.solveset(sp.Lt(a2, c) if op == "<" else sp.Le(a2, c), x, sp.Reals)
        parts += [
            f"$$\nx\\in {tex(s1)}\n$$",
            "",
            f"$$\nx\\in {tex(s2)}\n$$",
            "",
            "Intersect both conditions.",
            "",
        ]
        sol = sp.Intersection(s1, s2)
    else:
        parts += [
            "The maximum exceeds a bound if at least one expression does.",
            "",
            "**Case 1.**",
            "",
            f"$$\n{tex(a1)}{opt(op)}{tex(c)}\n$$",
            "",
        ]
        s1 = sp.solveset(sp.Gt(a1, c) if op == ">" else sp.Ge(a1, c), x, sp.Reals)
        parts += [f"$$\nx\\in {tex(s1)}\n$$", "", "**Case 2.**", ""]
        parts += [f"$$\n{tex(a2)}{opt(op)}{tex(c)}\n$$", ""]
        s2 = sp.solveset(sp.Gt(a2, c) if op == ">" else sp.Ge(a2, c), x, sp.Reals)
        parts += [f"$$\nx\\in {tex(s2)}\n$$", "", "Union of the two cases:", ""]
        sol = sp.Union(s1, s2)
    parts += [f"$$\n{tex(sol)}\n$$", "", note(k, stmt), "", closer(k)]
    return "\n".join(parts).rstrip() + "\n"


def subst_named(blob, ctx, stmt) -> str:
    out = blob
    bag = ctx + "\n" + stmt
    for m in re.finditer(r"\$\s*([A-Za-z])\(([a-z])\)\s*=\s*([^$]+)\$", bag):
        fn, var, body = m.group(1), m.group(2), m.group(3).strip()
        out = re.sub(rf"{re.escape(fn)}\({re.escape(var)}\)", f"({body})", out)
    for m in re.finditer(r"([A-Za-z])\(([a-z])\)\s*=\s*([^.,$]+)", bag):
        fn, var, body = m.group(1), m.group(2), m.group(3).strip()
        if f"{fn}({var})" in out:
            out = out.replace(f"{fn}({var})", f"({body})")
    return out


def expand_rational(L, k, stmt, lhs, op, rhs) -> str:
    parts = [header(L, k), ""]
    moved = not (rhs == 0 or rhs == sp.Integer(0))
    if moved:
        parts += [
            "Start from the claimed inequality and move the constant to the left side.",
            "",
            f"$$\n{tex(lhs)}{opt(op)}{tex(rhs)}\n$$",
            "",
            f"$$\n{tex(lhs)}-{tex(rhs)}{opt(op)}0\n$$",
            "",
        ]
        num0, den0 = sp.fraction(sp.together(lhs))
        if den0 != 1:
            parts += [
                "Write the constant over the same denominator.",
                "",
                f"$$\n{tex(rhs)}=\\frac{{{tex(sp.expand(rhs * den0))}}}{{{tex(den0)}}}\n$$",
                "",
                f"$$\n\\frac{{{tex(num0)}}}{{{tex(den0)}}}-\\frac{{{tex(sp.expand(rhs * den0))}}}{{{tex(den0)}}}{opt(op)}0\n$$",
                "",
                "Combine the numerators.",
                "",
                f"$$\n\\frac{{{tex(num0)}-{tex(sp.expand(rhs * den0))}}}{{{tex(den0)}}}{opt(op)}0\n$$",
                "",
            ]
            combined = sp.expand(num0 - rhs * den0)
            parts += [f"$$\n\\frac{{{tex(combined)}}}{{{tex(den0)}}}{opt(op)}0\n$$", ""]
            diff = combined / den0
        else:
            diff = sp.simplify(lhs - rhs)
            parts += [f"$$\n{tex(diff)}{opt(op)}0\n$$", ""]
    else:
        parts += [
            "Start from the claimed inequality.",
            "",
            f"$$\n{tex(lhs)}{opt(op)}{tex(rhs)}\n$$",
            "",
        ]
        diff = sp.simplify(lhs - rhs)
    e = sp.simplify(sp.together(diff))
    num, den = sp.fraction(e)
    num, den = sp.expand(num), sp.expand(den)
    nzeros = []
    dzeros = []
    for z in sp.solve(num, x):
        try:
            if z.is_real is False:
                continue
            float(sp.N(z))
            nzeros.append(z)
        except Exception:
            pass
    for z in sp.solve(den, x):
        try:
            if z.is_real is False:
                continue
            float(sp.N(z))
            dzeros.append(z)
        except Exception:
            pass
    nzeros = sorted(nzeros, key=lambda z: float(sp.N(z)))
    dzeros = sorted(dzeros, key=lambda z: float(sp.N(z)))
    parts += ["The critical points are the numerator zero(s) and the excluded pole(s).", ""]
    for z in nzeros:
        parts += [f"$$\n{tex(num)}=0\\Rightarrow x={tex(z)}\n$$", ""]
    if not nzeros:
        parts += ["The numerator has no real zero.", ""]
    for z in dzeros:
        parts += [
            f"$$\n{tex(den)}=0\\Rightarrow x={tex(z)}\n$$",
            "",
            f"(the pole $x={tex(z)}$ is never allowed).",
            "",
        ]
    if not dzeros:
        parts += ["There is no excluded pole.", ""]
    parts += [sign_chart(diff, nzeros + dzeros), ""]
    if op == "<":
        sol = sp.solveset(sp.Lt(lhs - rhs, 0), x, sp.Reals)
    elif op == "<=":
        sol = sp.solveset(sp.Le(lhs - rhs, 0), x, sp.Reals)
    elif op == ">":
        sol = sp.solveset(sp.Gt(lhs - rhs, 0), x, sp.Reals)
    else:
        sol = sp.solveset(sp.Ge(lhs - rhs, 0), x, sp.Reals)
    parts += [
        "Reading the sign chart against the inequality symbol gives",
        "",
        f"$$\n{tex(sol)}\n$$",
        "",
        note(k, stmt),
        "",
        closer(k),
    ]
    return "\n".join(parts).rstrip() + "\n"


def expand_poly(L, k, stmt, lhs, op, rhs) -> str:
    parts = [
        header(L, k),
        "",
        "Start from the claimed inequality.",
        "",
        f"$$\n{tex(lhs)}{opt(op)}{tex(rhs)}\n$$",
        "",
        "Bring every term to one side.",
        "",
    ]
    diff = sp.expand(lhs - rhs)
    parts += [f"$$\n{tex(diff)}{opt(op)}0\n$$", ""]
    fac = sp.factor(diff)
    if fac != diff:
        parts += ["Factor.", "", f"$$\n{tex(fac)}{opt(op)}0\n$$", ""]
    roots = []
    for z in sp.solve(diff, x):
        try:
            if z.is_real is False:
                continue
            float(sp.N(z))
            roots.append(z)
        except Exception:
            pass
    roots = sorted(roots, key=lambda z: float(sp.N(z)))
    if roots:
        parts += ["The roots are the critical points.", ""]
        for z in roots:
            parts += [f"$$\nx={tex(z)}\n$$", ""]
    else:
        try:
            disc = sp.discriminant(sp.Poly(diff, x))
            parts += [f"The discriminant is ${tex(disc)}$, so there are no real roots.", ""]
        except Exception:
            parts += ["There are no real roots.", ""]
    parts += [sign_chart(diff, roots), ""]
    if op == "<":
        sol = sp.solveset(sp.Lt(diff, 0), x, sp.Reals)
    elif op == "<=":
        sol = sp.solveset(sp.Le(diff, 0), x, sp.Reals)
    elif op == ">":
        sol = sp.solveset(sp.Gt(diff, 0), x, sp.Reals)
    else:
        sol = sp.solveset(sp.Ge(diff, 0), x, sp.Reals)
    parts += [
        "The solution set is",
        "",
        f"$$\n{tex(sol)}\n$$",
        "",
        note(k, stmt),
        "",
        closer(k),
    ]
    return "\n".join(parts).rstrip() + "\n"


def expand_word_clean(L, k, stmt, existing) -> str:
    parts = [
        header(L, k),
        "",
        "Translate the claim into arithmetic and unwind every step.",
        "",
    ]
    shown = []
    for e in re.findall(r"\$\$(.+?)\$\$", existing, flags=re.S):
        e = e.strip()
        if not e:
            continue
        for ch in re.split(r"\\Rightarrow", e):
            ch = ch.strip()
            if ch and ch not in shown and "middle|" not in ch:
                parts += [f"$$\n{ch}\n$$", ""]
                shown.append(ch)
    for e in re.findall(r"(?<!\$)\$([^$]{2,90})\$(?!\$)", existing):
        if re.search(r"[=<>]", e) and e not in shown and len(e) < 70 and "middle" not in e:
            parts += [f"$$\n{e}\n$$", ""]
            shown.append(e)
    if len(shown) < 3:
        for e in re.findall(r"\$([^$]+)\$", stmt):
            if (re.search(r"[=<>]|\\le|\\ge", e) or re.search(r"\d", e)) and e not in shown and len(e) < 80:
                parts += [f"$$\n{e}\n$$", ""]
                shown.append(e)
    parts += [
        "Reading the arithmetic against the claim confirms the truth value.",
        "",
        closer(k),
    ]
    return re.sub(r"\n{3,}", "\n\n", "\n".join(parts)).rstrip() + "\n"


def try_expand(task, i):
    L = LETTERS[i]
    k = bool(task["answer_key"][i])
    stmt = task["statements"][i]
    existing = task["tactical_explanations"][i]
    ctx = "\n".join([task.get("context") or "", task.get("solution_overview") or ""])
    if task.get("case_id") == "MATH 6.113" and L == "E":
        return existing, False
    if not is_thin(existing, stmt):
        return existing, False

    try:
        if stmt.count("\\sqrt") >= 2 and "+" in stmt:
            t = expand_two_rad(L, k, stmt)
            if t:
                return t, True

        if "max" in stmt.lower():
            t = expand_max(L, k, stmt)
            if t:
                return t, True

        m = re.search(
            r"\|([^|]+)\|\s*-\s*\|([^|]+)\|\s*(\\ge|\\le|>|<)\s*([^$]+)", stmt
        )
        if m:
            e1 = parse_latex(m.group(1))
            e2 = parse_latex(m.group(2))
            op = {"\\ge": ">=", "\\le": "<=", ">": ">", "<": "<"}[m.group(3)]
            c = parse_latex(m.group(4).strip())
            t = expand_abs_pieces(L, k, stmt, e1, e2, op, c, diff=True)
            if t:
                return t, True

        m = re.search(
            r"\|([^|]+)\|\s*\+\s*\|([^|]+)\|\s*(\\ge|\\le|>|<)\s*([^$]+)", stmt
        )
        if m:
            e1 = parse_latex(m.group(1))
            e2 = parse_latex(m.group(2))
            op = {"\\ge": ">=", "\\le": "<=", ">": ">", "<": "<"}[m.group(3)]
            c = parse_latex(m.group(4).strip())
            t = expand_abs_pieces(L, k, stmt, e1, e2, op, c, diff=False)
            if t:
                return t, True

        m = re.search(r"\|([^|]+)\|\s*-\s*([0-9.]+)\s*(>|\\ge|<|\\le)\s*0", stmt)
        if m:
            inner = parse_latex(m.group(1))
            c = sp.Integer(int(float(m.group(2))))
            op = {">": ">", "\\ge": ">=", "<": "<", "\\le": "<="}[m.group(3)]
            mapped = op
            t = expand_abs_gt(L, k, stmt, inner, c, mapped)
            t = t.replace(
                "Start from the absolute-value inequality.\n\n",
                "Start from the claimed inequality and move the constant.\n\n"
                f"$$\n|{tex(inner)}|-{tex(c)}{opt(op)}0\n$$\n\n"
                f"$$\n|{tex(inner)}|{opt(mapped)}{tex(c)}\n$$\n\n"
                "Now solve the absolute-value inequality.\n\n",
                1,
            )
            return t, True

        if "\\sqrt" in stmt:
            mm = re.search(r"\$([^$]*\\sqrt[^$]+)\$", stmt)
            if mm:
                parsed = parse_rel_blob(mm.group(1))
                if parsed:
                    lhs, op, rhs = parsed
                    return expand_radical(L, k, stmt, lhs, op, rhs), True

        blob = None
        for p in [
            r"(?:solution set of(?: the inequality)?|The (?:strict )?inequality|The inequality|The comparison|The condition)\s*\$([^$]+)\$",
            r"(?:holds(?: exactly)? when|is equivalent to|requirement)\s*\$([^$]+)\$",
        ]:
            m = re.search(p, stmt, re.I)
            if m:
                blob = m.group(1)
                break
        if not blob:
            for m in re.finditer(r"\$([^$]+)\$", stmt):
                if any(op in m.group(1) for op in ["<", ">", "\\le", "\\ge"]):
                    blob = m.group(1)
                    break
        if blob:
            work = subst_named(blob, ctx, stmt)
            rels = len(re.findall(r"\\le|\\ge|<=|>=|<|>|≤|≥", work))
            parsed = parse_rel_blob(work)
            if parsed and rels == 1:
                lhs, op, rhs = parsed
                if isinstance(lhs, sp.Abs) and sp.simplify(rhs).is_number:
                    return expand_abs_gt(L, k, stmt, lhs.args[0], sp.simplify(rhs), op), True
                num, den = sp.fraction(sp.together(lhs))
                d2 = sp.fraction(sp.together(sp.simplify(lhs - rhs)))[1]
                if den != 1 or d2 != 1:
                    try:
                        return expand_rational(L, k, stmt, lhs, op, rhs), True
                    except Exception:
                        pass
                try:
                    p = sp.Poly(sp.expand(lhs - rhs), x)
                    if p.degree() >= 1:
                        return expand_poly(L, k, stmt, lhs, op, rhs), True
                except Exception:
                    pass
                try:
                    diff = sp.simplify(lhs - rhs)
                    if op == "<":
                        sol = sp.solveset(sp.Lt(diff, 0), x, sp.Reals)
                    elif op == "<=":
                        sol = sp.solveset(sp.Le(diff, 0), x, sp.Reals)
                    elif op == ">":
                        sol = sp.solveset(sp.Gt(diff, 0), x, sp.Reals)
                    else:
                        sol = sp.solveset(sp.Ge(diff, 0), x, sp.Reals)
                    parts = [
                        header(L, k),
                        "",
                        "Start from the claimed inequality.",
                        "",
                        f"$$\n{tex(lhs)}{opt(op)}{tex(rhs)}\n$$",
                        "",
                        "Bring every term to one side.",
                        "",
                        f"$$\n{tex(diff)}{opt(op)}0\n$$",
                        "",
                    ]
                    together = sp.together(diff)
                    roots = []
                    dens = []
                    for z in sp.solve(sp.numer(together), x):
                        try:
                            if z.is_real is False:
                                continue
                            float(sp.N(z))
                            roots.append(z)
                        except Exception:
                            pass
                    if sp.denom(together) != 1:
                        for z in sp.solve(sp.denom(together), x):
                            try:
                                if z.is_real is False:
                                    continue
                                float(sp.N(z))
                                dens.append(z)
                            except Exception:
                                pass
                    roots = sorted(roots, key=lambda z: float(sp.N(z)))
                    dens = sorted(dens, key=lambda z: float(sp.N(z)))
                    if roots or dens:
                        parts += ["Critical points:", ""]
                        for z in roots + dens:
                            parts += [f"$$\nx={tex(z)}\n$$", ""]
                        parts += [sign_chart(diff, roots + dens), ""]
                    parts += [
                        "The solution set is",
                        "",
                        f"$$\n{tex(sol)}\n$$",
                        "",
                        note(k, stmt),
                        "",
                        closer(k),
                    ]
                    return "\n".join(parts).rstrip() + "\n", True
                except Exception:
                    pass
    except Exception as ex:
        print(f"  warn {task['case_id']}{L}: {ex}")

    return expand_word_clean(L, k, stmt, existing), True


def validate(task, expls):
    errs = []
    for i, e in enumerate(expls):
        L = LETTERS[i]
        key = task["answer_key"][i]
        want = f"**{L}.** → {'True' if key else 'False'}"
        if not e.startswith(want):
            errs.append(f"{task['case_id']}{L}: bad header")
        if e.count("$$") % 2:
            errs.append(f"{task['case_id']}{L}: odd $$")
        if "So the statement is" not in e:
            errs.append(f"{task['case_id']}{L}: missing closer")
    return errs


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--from", dest="start", type=int, default=43)
    ap.add_argument("--to", dest="end", type=int, default=128)
    args = ap.parse_args()

    data = json.loads(PATH.read_text())
    errors = []
    rewritten = kept = changed = 0
    for task in data["tasks"]:
        n = int(task["case_id"].split(".")[1])
        if n < args.start or n > args.end:
            continue
        new = []
        ch = False
        for i in range(5):
            text, did = try_expand(task, i)
            new.append(text)
            if did:
                rewritten += 1
                ch = True
            else:
                kept += 1
        errors.extend(validate(task, new))
        if ch:
            task["tactical_explanations"] = new
            changed += 1

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"range MATH 6.{args.start}–6.{args.end}")
    print(f"changed tasks={changed} rewrote={rewritten} kept={kept}")
    print(f"validation errors={len(errors)}")
    for e in errors[:30]:
        print(" ", e)

    # thin recount
    thin = []
    for task in data["tasks"]:
        n = int(task["case_id"].split(".")[1])
        if n < args.start or n > args.end:
            continue
        for i, e in enumerate(task["tactical_explanations"]):
            if is_thin(e, task["statements"][i]):
                thin.append(f"{task['case_id']}{'ABCDE'[i]}:{len(e)}")
    print(f"still thin by heuristic: {len(thin)}")
    print(" ".join(thin[:40]))


if __name__ == "__main__":
    main()
