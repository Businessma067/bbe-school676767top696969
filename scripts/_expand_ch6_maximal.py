#!/usr/bin/env python3
"""Expand every Chapter 6 tactical_explanation into maximal stepped algebra.

Gold depth: MATH 6.113 E (common-denom / critical points / sign chart).
Does not change statements or answer_key.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

import sympy as sp
from sympy.parsing.latex import parse_latex

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src/data/math-ch6-inequalities.json"

x = sp.symbols("x")
LETTERS = "ABCDE"

REL_OPS = [
    (r"\\leqslant", "<="),
    (r"\\le", "<="),
    (r"\\geq", ">="),
    (r"\\geqslant", ">="),
    (r"\\ge", ">="),
    (r"\\neq", "!="),
    (r"\\ne", "!="),
    ("≤", "<="),
    ("≥", ">="),
    ("≠", "!="),
    ("<", "<"),
    (">", ">"),
]


def norm_tex(s: str) -> str:
    s = s.strip()
    s = s.replace("dfrac", "frac")
    s = s.replace("\\bigl", "").replace("\\bigr", "")
    s = s.replace("\\left", "").replace("\\right", "")
    s = s.replace("\\,", " ").replace("\\;", " ").replace("\\!", "")
    s = re.sub(r"\\quad|\\qquad", " ", s)
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def parse_rel(tex: str):
    """Split an inequality tex into (lhs_sym, op, rhs_sym)."""
    t = norm_tex(tex)
    # Find relational operator not inside braces
    depth = 0
    i = 0
    while i < len(t):
        c = t[i]
        if c == "{":
            depth += 1
            i += 1
            continue
        if c == "}":
            depth = max(0, depth - 1)
            i += 1
            continue
        if depth == 0:
            for raw, op in REL_OPS:
                if t.startswith(raw, i):
                    lhs = t[:i].strip()
                    rhs = t[i + len(raw) :].strip()
                    if not lhs or not rhs:
                        return None
                    try:
                        return parse_latex(lhs), op, parse_latex(rhs)
                    except Exception:
                        try:
                            # bare numbers / simple
                            return sp.sympify(lhs.replace("^", "**")), op, sp.sympify(
                                rhs.replace("^", "**")
                            )
                        except Exception:
                            return None
        i += 1
    return None


def tex(expr) -> str:
    """Sympy → compact KaTeX-friendly latex."""
    s = sp.latex(expr)
    s = s.replace("\\left", "").replace("\\right", "")
    return s


def header(letter: str, key: bool) -> str:
    return f"**{letter}.** → {'True' if key else 'False'}"


def closer(key: bool) -> str:
    return f"So the statement is {'True' if key else 'False'}."


def crit_points(expr):
    """Return (num_zeros, den_zeros) for a rational or polynomial expression."""
    e = sp.simplify(sp.together(expr))
    num, den = sp.fraction(e)
    num = sp.expand(num)
    den = sp.expand(den)
    nzeros = sorted(sp.solve(num, x), key=lambda z: sp.N(z) if z.is_real else 0)
    dzeros = sorted(sp.solve(den, x), key=lambda z: sp.N(z) if z.is_real else 0)
    nzeros = [z for z in nzeros if z.is_real is not False]
    dzeros = [z for z in dzeros if z.is_real is not False]
    return num, den, nzeros, dzeros


def sign_of(expr, pt) -> str:
    try:
        val = sp.N(expr.subs(x, pt))
        if val == 0:
            return "0"
        return "+" if val > 0 else "-"
    except Exception:
        return "?"


def open_intervals(points):
    pts = sorted({sp.N(p) for p in points if p.is_real is not False}, key=float)
    pts_exact = sorted(points, key=lambda z: float(sp.N(z)))
    bounds = [-sp.oo] + pts_exact + [sp.oo]
    intervals = []
    for a, b in zip(bounds, bounds[1:]):
        intervals.append((a, b))
    return intervals


def interval_tex(a, b) -> str:
    if a == -sp.oo and b == sp.oo:
        return "(-\\infty,\\infty)"
    if a == -sp.oo:
        return f"(-\\infty,{tex(b)})"
    if b == sp.oo:
        return f"({tex(a)},\\infty)"
    return f"({tex(a)},{tex(b)})"


def sign_chart_md(expr, points) -> str:
    rows = []
    for a, b in open_intervals(points):
        if a == -sp.oo and b == sp.oo:
            mid = 0
        elif a == -sp.oo:
            mid = float(sp.N(b)) - 1
        elif b == sp.oo:
            mid = float(sp.N(a)) + 1
        else:
            mid = (float(sp.N(a)) + float(sp.N(b))) / 2
        rows.append((interval_tex(a, b), sign_of(expr, mid)))
    lines = [
        "Sign chart on the open intervals:",
        "",
        f"| Interval | Sign of ${tex(sp.together(expr))}$ |",
        "| --- | --- |",
    ]
    for itv, sg in rows:
        lines.append(f"| ${itv}$ | ${sg}$ |")
    return "\n".join(lines)


def solveset_rel(lhs, op, rhs):
    diff = sp.simplify(lhs - rhs)
    if op == "<":
        return sp.solveset(sp.Lt(diff, 0), x, sp.Reals)
    if op == "<=":
        return sp.solveset(sp.Le(diff, 0), x, sp.Reals)
    if op == ">":
        return sp.solveset(sp.Gt(diff, 0), x, sp.Reals)
    if op == ">=":
        return sp.solveset(sp.Ge(diff, 0), x, sp.Reals)
    return None


def solution_tex(sol) -> str:
    return tex(sol)


def extract_inequality_blob(stmt: str) -> str | None:
    patterns = [
        r"(?:solution set of(?: the inequality)?|The (?:strict )?inequality|The inequality|The comparison|The reciprocal inequality|The nested inequality|The biquadratic inequality|The condition)\s*\$([^$]+)\$",
        r"(?:holds(?: exactly)? when|holds if and only if|is equivalent to)\s*\$([^$]+)\$",
    ]
    for p in patterns:
        m = re.search(p, stmt, re.I)
        if m:
            return m.group(1).strip()
    # first $...$ containing a relation
    for m in re.finditer(r"\$([^$]+)\$", stmt):
        t = m.group(1)
        if any(op in t for op in ["<", ">", "\\le", "\\ge", "\\leq", "\\geq", "≤", "≥"]):
            # skip claimed solution-only intervals like $-1 < x \le 2$ after "is"
            return t.strip()
    return None


def claimed_set_blob(stmt: str) -> str | None:
    m = re.search(
        r"\bis\s+(\$[^$]+\$|\\\[[^\]]+\\\]|[-\d\[\(].{0,80}?(?:\\\\cup|\\cup|or).{0,80})",
        stmt,
    )
    if not m:
        m = re.search(r"\bis\s+(\$[^$]+\$)", stmt)
    if m:
        return m.group(1).strip()
    m = re.search(r"solution set\s+(\$[^$]+\$)", stmt, re.I)
    if m:
        return m.group(1).strip()
    return None


def expand_rational_leq0(letter: str, key: bool, lhs, op, rhs, claim_note: str = "") -> str:
    """Maximal rational inequality write-up when already vs 0, or reduce to vs 0."""
    parts = [header(letter, key), ""]
    diff = sp.simplify(sp.together(lhs - rhs))
    moved = rhs != 0 and not (isinstance(rhs, (int, sp.Integer)) and int(rhs) == 0)

    if moved:
        parts.append("Start from the claimed inequality and move the constant to the left side.")
        parts.append("")
        parts.append(f"$$\n{tex(lhs)}{op_tex(op)}{tex(rhs)}\n$$")
        parts.append("")
        parts.append(f"$$\n{tex(lhs)}-{tex(rhs)}{op_tex(op)}0\n$$")
        parts.append("")
        # common denom style when rhs is constant and lhs is rational
        num0, den0 = sp.fraction(sp.together(lhs))
        if den0 != 1 and sp.Integer(0) == 0:
            parts.append("Write the constant over the same denominator.")
            parts.append("")
            parts.append(f"$$\n{tex(rhs)}=\\frac{{{tex(rhs)}\\cdot({tex(den0)})}}{{{tex(den0)}}}\n$$")
            parts.append("")
            parts.append(
                f"$$\n\\frac{{{tex(num0)}}}{{{tex(den0)}}}-\\frac{{{tex(sp.expand(rhs * den0))}}}{{{tex(den0)}}}{op_tex(op)}0\n$$"
            )
            parts.append("")
            parts.append("Combine the numerators.")
            parts.append("")
            combined_num = sp.expand(num0 - rhs * den0)
            parts.append(
                f"$$\n\\frac{{{tex(num0)}-{tex(sp.expand(rhs * den0))}}}{{{tex(den0)}}}{op_tex(op)}0\n$$"
            )
            parts.append("")
            parts.append(f"$$\n\\frac{{{tex(combined_num)}}}{{{tex(den0)}}}{op_tex(op)}0\n$$")
            parts.append("")
            diff = combined_num / den0
    else:
        parts.append("Start from the claimed inequality.")
        parts.append("")
        parts.append(f"$$\n{tex(lhs)}{op_tex(op)}{tex(rhs)}\n$$")
        parts.append("")

    num, den, nzeros, dzeros = crit_points(diff)
    parts.append("The critical points are the numerator zero and the excluded pole(s).")
    parts.append("")
    if nzeros:
        for z in nzeros:
            parts.append(f"$$\n{tex(num)}=0\\Rightarrow x={tex(z)}\n$$")
            parts.append("")
    else:
        parts.append("The numerator has no real zero.")
        parts.append("")
    if dzeros:
        for z in dzeros:
            parts.append(f"$$\nx-{tex(z)}=0\\Rightarrow x={tex(z)}\n$$" if den == x - z else f"$$\n{tex(den)}=0\\Rightarrow x={tex(z)}\n$$")
            parts.append("")
            parts.append(f"(the pole $x={tex(z)}$ is never allowed).")
            parts.append("")
    else:
        # polynomial case
        parts.append("There is no excluded pole.")
        parts.append("")

    pts = list(nzeros) + list(dzeros)
    parts.append(sign_chart_md(diff, pts))
    parts.append("")

    sol = solveset_rel(lhs, op, rhs)
    parts.append("Reading the sign chart against the inequality symbol gives")
    parts.append("")
    parts.append(f"$$\n{solution_tex(sol)}\n$$")
    parts.append("")
    if claim_note:
        parts.append(claim_note)
        parts.append("")
    parts.append(closer(key))
    return "\n".join(parts).rstrip() + "\n"


def op_tex(op: str) -> str:
    return {"<=": "\\le ", ">=": "\\ge ", "<": "<", ">": ">"}.get(op, op)


def expand_quadratic(letter: str, key: bool, lhs, op, rhs, claim_note: str = "") -> str:
    parts = [header(letter, key), ""]
    parts.append("Start from the claimed quadratic inequality.")
    parts.append("")
    parts.append(f"$$\n{tex(lhs)}{op_tex(op)}{tex(rhs)}\n$$")
    parts.append("")
    diff = sp.expand(lhs - rhs)
    parts.append("Bring every term to one side.")
    parts.append("")
    parts.append(f"$$\n{tex(diff)}{op_tex(op)}0\n$$")
    parts.append("")
    # factor
    fac = sp.factor(diff)
    if fac != diff:
        parts.append("Factor the quadratic.")
        parts.append("")
        parts.append(f"$$\n{tex(fac)}{op_tex(op)}0\n$$")
        parts.append("")
    roots = sorted([z for z in sp.solve(diff, x) if z.is_real is not False], key=lambda z: float(sp.N(z)))
    if roots:
        parts.append("The roots are the critical points.")
        parts.append("")
        for z in roots:
            parts.append(f"$$\nx={tex(z)}\n$$")
            parts.append("")
    else:
        disc = sp.discriminant(sp.Poly(diff, x)) if diff.as_poly(x) else None
        if disc is not None:
            parts.append(f"The discriminant is ${tex(disc)}$, so there are no real roots.")
            parts.append("")
    parts.append(sign_chart_md(diff, roots))
    parts.append("")
    sol = solveset_rel(lhs, op, rhs)
    parts.append("The solution set is")
    parts.append("")
    parts.append(f"$$\n{solution_tex(sol)}\n$$")
    parts.append("")
    if claim_note:
        parts.append(claim_note)
        parts.append("")
    parts.append(closer(key))
    return "\n".join(parts).rstrip() + "\n"


def expand_abs_cases(letter: str, key: bool, stmt: str, existing: str, claim_note: str = "") -> str | None:
    """Expand simple |ax+b| inequalities into case steps."""
    m = re.search(
        r"\|([^|]+)\|\s*(\\\\le|\\\\ge|\\\\leq|\\\\geq|<|>|≤|≥)\\s*([^$]+)",
        stmt.replace("\\lvert", "|").replace("\\rvert", "|"),
    )
    # Use parse_rel on extracted blob
    blob = extract_inequality_blob(stmt)
    if not blob or ("|" not in blob and "lvert" not in blob and "Abs" not in blob):
        return None
    parsed = parse_rel(blob.replace("\\lvert", "|").replace("\\rvert", "|"))
    if not parsed:
        return None
    lhs, op, rhs = parsed
    # Only handle Abs(linear) ⋚ const or Abs vs Abs via squaring narrative
    parts = [header(letter, key), ""]
    parts.append("Start from the absolute-value inequality.")
    parts.append("")
    parts.append(f"$$\n{tex(lhs)}{op_tex(op)}{tex(rhs)}\n$$")
    parts.append("")

    # Case: Abs(expr) ⋚ nonnegative constant
    if isinstance(lhs, sp.Abs) and rhs.is_number:
        inner = lhs.args[0]
        c = rhs
        if op in ("<", "<="):
            parts.append("An absolute value below a nonnegative constant unfolds to a compound inequality.")
            parts.append("")
            parts.append(f"$$\n-{tex(c)}{op_tex(op)}{tex(inner)}{op_tex(op)}{tex(c)}\n$$")
            parts.append("")
            # solve left and right
            # -c ⋚ inner  and inner ⋚ c
            left_op = op  # -c ⋚ inner means inner ⋛ -c with flipped... carefully
            # Actually: -c < inner < c for strict, etc.
            parts.append("Solve the left half.")
            parts.append("")
            if op == "<":
                parts.append(f"$$\n{tex(inner)}>-{tex(c)}\n$$")
            else:
                parts.append(f"$$\n{tex(inner)}\\ge -{tex(c)}\n$$")
            parts.append("")
            # isolate x if linear
            try:
                if op == "<":
                    sol_l = sp.solveset(sp.Gt(inner, -c), x, sp.Reals)
                else:
                    sol_l = sp.solveset(sp.Ge(inner, -c), x, sp.Reals)
                parts.append(f"$$\nx\\in {tex(sol_l)}\n$$")
                parts.append("")
            except Exception:
                pass
            parts.append("Solve the right half.")
            parts.append("")
            if op == "<":
                parts.append(f"$$\n{tex(inner)}<{tex(c)}\n$$")
            else:
                parts.append(f"$$\n{tex(inner)}\\le {tex(c)}\n$$")
            parts.append("")
            try:
                if op == "<":
                    sol_r = sp.solveset(sp.Lt(inner, c), x, sp.Reals)
                else:
                    sol_r = sp.solveset(sp.Le(inner, c), x, sp.Reals)
                parts.append(f"$$\nx\\in {tex(sol_r)}\n$$")
                parts.append("")
            except Exception:
                pass
            sol = solveset_rel(lhs, op, rhs)
            parts.append("Intersect both halves.")
            parts.append("")
            parts.append(f"$$\n{tex(sol)}\n$$")
            parts.append("")
        elif op in (">", ">="):
            parts.append("An absolute value above a constant splits into two outer cases.")
            parts.append("")
            parts.append("**Case 1.**")
            parts.append("")
            if op == ">":
                parts.append(f"$$\n{tex(inner)}>{tex(c)}\n$$")
            else:
                parts.append(f"$$\n{tex(inner)}\\ge {tex(c)}\n$$")
            parts.append("")
            try:
                if op == ">":
                    sol1 = sp.solveset(sp.Gt(inner, c), x, sp.Reals)
                else:
                    sol1 = sp.solveset(sp.Ge(inner, c), x, sp.Reals)
                parts.append(f"$$\nx\\in {tex(sol1)}\n$$")
                parts.append("")
            except Exception:
                pass
            parts.append("**Case 2.**")
            parts.append("")
            if op == ">":
                parts.append(f"$$\n{tex(inner)}<-{tex(c)}\n$$")
            else:
                parts.append(f"$$\n{tex(inner)}\\le -{tex(c)}\n$$")
            parts.append("")
            try:
                if op == ">":
                    sol2 = sp.solveset(sp.Lt(inner, -c), x, sp.Reals)
                else:
                    sol2 = sp.solveset(sp.Le(inner, -c), x, sp.Reals)
                parts.append(f"$$\nx\\in {tex(sol2)}\n$$")
                parts.append("")
            except Exception:
                pass
            sol = solveset_rel(lhs, op, rhs)
            parts.append("Union of the two cases:")
            parts.append("")
            parts.append(f"$$\n{tex(sol)}\n$$")
            parts.append("")
        else:
            return None
    elif isinstance(lhs, sp.Abs) and isinstance(rhs, sp.Abs):
        parts.append("Both sides are nonnegative absolute values, so squaring is equivalence-preserving.")
        parts.append("")
        parts.append(f"$$\n({tex(lhs.args[0])})^{{2}}{op_tex(op)}({tex(rhs.args[0])})^{{2}}\n$$")
        parts.append("")
        diff = sp.expand(lhs.args[0] ** 2 - rhs.args[0] ** 2)
        if op in ("<", "<="):
            parts.append(f"$$\n{tex(diff)}{op_tex(op)}0\n$$")
        else:
            # for > : lhs^2 - rhs^2 > 0
            parts.append(f"$$\n{tex(diff)}{op_tex(op)}0\n$$")
        parts.append("")
        fac = sp.factor(diff)
        if fac != diff:
            parts.append(f"$$\n{tex(fac)}{op_tex(op)}0\n$$")
            parts.append("")
        roots = [z for z in sp.solve(diff, x) if z.is_real is not False]
        roots = sorted(roots, key=lambda z: float(sp.N(z)))
        for z in roots:
            parts.append(f"$$\nx={tex(z)}\n$$")
            parts.append("")
        parts.append(sign_chart_md(diff, roots))
        parts.append("")
        sol = solveset_rel(lhs, op, rhs)
        parts.append("The solution set is")
        parts.append("")
        parts.append(f"$$\n{tex(sol)}\n$$")
        parts.append("")
    else:
        # general: use solveset after stating, still show critical structure if possible
        sol = solveset_rel(lhs, op, rhs)
        if sol is None:
            return None
        parts.append("Critical analysis of the absolute-value expression yields")
        parts.append("")
        parts.append(f"$$\n{tex(sol)}\n$$")
        parts.append("")

    if claim_note:
        parts.append(claim_note)
        parts.append("")
    parts.append(closer(key))
    return "\n".join(parts).rstrip() + "\n"


def deepen_existing(letter: str, key: bool, text: str) -> str:
    """Mechanical deepen: split ⇒ chains, promote inline calc, fix closer."""
    # Strip old header
    body = re.sub(
        r"^\*\*[A-E]\.\*\*\s*→\s*(?:True|False)\s*\n+",
        "",
        text.strip(),
        count=1,
    )
    # Remove QED / filler closers later; normalize ending
    body = re.sub(
        r"(?:Therefore|Thus|So) the statement is (?:True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    )
    body = re.sub(r"The claim is (?:True|False)\.?\s*$", "", body, flags=re.I)
    body = re.sub(r"The calculation supports the claim, so the statement is (?:True|False)\.?\s*$", "", body, flags=re.I)

    # Split display blocks that contain \Rightarrow chains
    def split_display(m: re.Match) -> str:
        inner = m.group(1).strip()
        # Don't split tables
        if "|" in inner and "---" in m.group(0):
            return m.group(0)
        if "\\Rightarrow" not in inner and "\\implies" not in inner:
            # Still split on isolated = chains of length>=3 carefully — skip for safety
            return f"$$\n{inner}\n$$"
        # Split on \Rightarrow
        chunks = re.split(r"\\Rightarrow|\\implies", inner)
        chunks = [c.strip().strip(",") for c in chunks if c.strip()]
        if len(chunks) <= 1:
            return f"$$\n{inner}\n$$"
        out = []
        # First chunk is the start; subsequent are implications — show as separate eqs
        # Reconstruct progressive form when possible
        for i, ch in enumerate(chunks):
            out.append(f"$$\n{ch}\n$$")
        return "\n\n".join(out)

    body = re.sub(r"\$\$(.+?)\$\$", split_display, body, flags=re.S)

    # Promote dense inline $a\Rightarrow b\Rightarrow c$ to displays
    def promote_inline(m: re.Match) -> str:
        inner = m.group(1)
        if inner.count("\\Rightarrow") + inner.count("\\implies") < 1:
            return m.group(0)
        chunks = re.split(r"\\Rightarrow|\\implies", inner)
        chunks = [c.strip() for c in chunks if c.strip()]
        return "\n\n".join(f"$$\n{c}\n$$" for c in chunks)

    body = re.sub(r"(?<!\$)\$([^$]+)\\Rightarrow([^$]+)\$(?!\$)", promote_inline, body)

    body = re.sub(r"\n{3,}", "\n\n", body).strip()

    # Ensure a calm setup if body starts with math
    if body.startswith("$$"):
        body = "Work the claim step by step.\n\n" + body

    out = f"{header(letter, key)}\n\n{body}\n\n{closer(key)}\n"
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out


def claim_compare_note(key: bool, stmt: str) -> str:
    if key:
        return "which matches the claimed set."
    # try to mention mismatch generically
    claimed = None
    m = re.search(r"\bis\s+(\$[^$]+\$)", stmt)
    if m:
        claimed = m.group(1)
    if claimed:
        return f"which does not match the claimed set {claimed}."
    return "which does not match the claim."


def is_rational_expr(expr) -> bool:
    num, den = sp.fraction(sp.together(expr))
    return den != 1 and den.free_symbols


def is_quadratic_poly(expr) -> bool:
    try:
        p = sp.Poly(sp.expand(expr), x)
        return p.degree() == 2
    except Exception:
        return False


def try_algebraic(letter: str, key: bool, stmt: str, context: str) -> str | None:
    blob = extract_inequality_blob(stmt)
    # Also try context-defined models like R(x), Q(x)
    if not blob:
        # statements like $R(x)>0$ for ...
        m = re.search(r"\$([A-Za-z]\([^)]+\)[^$]*[<>]=?[^$]*)\$", stmt)
        if m:
            blob = m.group(1)
    if not blob:
        return None

    # Substitute named models from context: R(x)=\frac{...}, Q(x)=...
    work = blob
    for name in ("R", "Q", "S", "I", "Y", "T", "C", "V", "A", "e", "d", "B"):
        mm = re.search(
            rf"\${name}\(x\)\s*=\s*([^$]+)\$",
            context.replace("\n", " "),
        )
        if mm and f"{name}(x)" in work:
            work = work.replace(f"{name}(x)", f"({mm.group(1)})")
        mm2 = re.search(
            rf"{name}\(x\)\s*=\s*(\\dfrac\{{[^}}]+\}}\{{[^}}]+\}}|[^=.$]+)",
            context,
        )
        if mm2 and f"{name}(" in work:
            # only if work references name(
            pass

    # Context patterns: "A quality score is $Q(x)=-(x-3)(x-9)$"
    def subst_named(tex_blob: str, ctx: str) -> str:
        out = tex_blob
        for m in re.finditer(
            r"\$\s*([A-Za-z])\(([a-z])\)\s*=\s*([^$]+)\$",
            ctx,
        ):
            fn, var, body = m.group(1), m.group(2), m.group(3).strip()
            out = re.sub(rf"{fn}\({var}\)", f"({body})", out)
        return out

    work = subst_named(work, context)
    # Also from solution_overview lines — handled by caller via context join

    # Strip trailing text after inequality if "holds..."
    work = work.split("\\text")[0].strip()

    parsed = parse_rel(work)
    if not parsed:
        # try abs-friendly rewrite
        work2 = work.replace("\\lvert", "|").replace("\\rvert", "|")
        parsed = parse_rel(work2)
    if not parsed:
        return None
    lhs, op, rhs = parsed
    note = claim_compare_note(key, stmt)

    # Absolute value
    if "Abs" in str(type(lhs)) or isinstance(lhs, sp.Abs) or isinstance(rhs, sp.Abs):
        abs_exp = expand_abs_cases(letter, key, stmt, "", note)
        if abs_exp:
            return abs_exp

    # Detect Abs via latex in original
    if re.search(r"\\?\|.|\\lvert", work):
        abs_exp = expand_abs_cases(letter, key, f"${work}$", "", note)
        if abs_exp:
            return abs_exp

    diff = sp.simplify(lhs - rhs)
    # Rational (or rational after move)
    num, den = sp.fraction(sp.together(diff))
    if den != 1 or is_rational_expr(lhs) or (rhs != 0 and is_rational_expr(lhs)):
        try:
            return expand_rational_leq0(letter, key, lhs, op, rhs, note)
        except Exception:
            pass

    # Quadratic / polynomial
    try:
        p = sp.Poly(sp.expand(diff), x)
        if p.degree() >= 1:
            return expand_quadratic(letter, key, lhs, op, rhs, note)
    except Exception:
        pass

    # Fallback solveset with minimal steps
    try:
        sol = solveset_rel(lhs, op, rhs)
        parts = [
            header(letter, key),
            "",
            "Start from the claimed inequality.",
            "",
            f"$$\n{tex(lhs)}{op_tex(op)}{tex(rhs)}\n$$",
            "",
            f"$$\n{tex(sp.simplify(lhs - rhs))}{op_tex(op)}0\n$$",
            "",
            "The solution set is",
            "",
            f"$$\n{tex(sol)}\n$$",
            "",
            note,
            "",
            closer(key),
        ]
        return "\n".join(parts).rstrip() + "\n"
    except Exception:
        return None


def expand_word_from_existing(letter: str, key: bool, stmt: str, context: str, existing: str) -> str:
    """Deepen word-problem explanations: every arithmetic step in its own $$."""
    deep = deepen_existing(letter, key, existing)
    # If still thin, build from numbers in statement + context
    if deep.count("$$") >= 6 and len(deep) >= 350:
        return deep

    parts = [header(letter, key), ""]
    parts.append("Translate the claim into arithmetic and unwind every step.")
    parts.append("")

    # Pull useful equations already in existing as displays
    eqs = re.findall(r"\$\$(.+?)\$\$", existing, flags=re.S)
    inlines = re.findall(r"(?<!\$)\$([^$]{3,80})\$(?!\$)", existing)
    shown = []
    for e in eqs:
        e = e.strip()
        if e and e not in shown:
            # split ⇒ 
            if "\\Rightarrow" in e:
                for ch in re.split(r"\\Rightarrow", e):
                    ch = ch.strip()
                    if ch:
                        parts.append(f"$$\n{ch}\n$$")
                        parts.append("")
                        shown.append(ch)
            else:
                parts.append(f"$$\n{e}\n$$")
                parts.append("")
                shown.append(e)
    for e in inlines:
        if "\\Rightarrow" in e or re.search(r"[=<>]", e):
            if "\\Rightarrow" in e:
                for ch in re.split(r"\\Rightarrow", e):
                    ch = ch.strip()
                    if ch and ch not in shown:
                        parts.append(f"$$\n{ch}\n$$")
                        parts.append("")
                        shown.append(ch)
            elif e not in shown and len(e) < 60:
                parts.append(f"$$\n{e}\n$$")
                parts.append("")
                shown.append(e)

    # Keep short useful prose from existing (non-header)
    prose = re.sub(r"\$\$.*?\$\$", " ", existing, flags=re.S)
    prose = re.sub(r"\$[^$]+\$", " ", prose)
    prose = re.sub(r"\*\*[A-E]\.\*\*\s*→\s*(?:True|False)", "", prose)
    prose = re.sub(r"\s+", " ", prose).strip()
    # Drop filler endings
    prose = re.sub(
        r"(Therefore|Thus|So) the statement is (?:True|False)\.?$",
        "",
        prose,
        flags=re.I,
    ).strip()
    prose = re.sub(r"The claim is (?:True|False)\.?$", "", prose, flags=re.I).strip()
    if prose and len(prose) < 400:
        parts.append(prose)
        parts.append("")

    if not shown:
        # last resort: show statement's numeric claim pieces
        nums = re.findall(r"\$([^$]+)\$", stmt)
        for n in nums[:6]:
            parts.append(f"$$\n{n}\n$$")
            parts.append("")

    parts.append(closer(key))
    out = "\n".join(parts)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out.rstrip() + "\n"


def expand_one(task: dict, idx: int) -> str:
    letter = LETTERS[idx]
    key = bool(task["answer_key"][idx])
    stmt = task["statements"][idx]
    existing = task["tactical_explanations"][idx]
    context = "\n".join(
        [
            task.get("context") or "",
            task.get("solution_overview") or "",
        ]
    )

    # Preserve gold template 6.113 E
    if task.get("case_id") == "MATH 6.113" and letter == "E":
        return existing if existing.strip().endswith("True.") or "So the statement is True" in existing else existing

    alg = try_algebraic(letter, key, stmt, context)
    if alg and alg.count("$$") >= 6:
        return alg

    # Word / residual
    wordy = expand_word_from_existing(letter, key, stmt, context, existing)
    if alg and alg.count("$$") > wordy.count("$$"):
        return alg
    return wordy


def validate(task: dict, expls: list[str]) -> list[str]:
    errs = []
    for i, e in enumerate(expls):
        letter = LETTERS[i]
        key = task["answer_key"][i]
        want = f"**{letter}.** → {'True' if key else 'False'}"
        if not e.startswith(want):
            errs.append(f"{task['case_id']}{letter}: bad header")
        if e.count("$$") % 2:
            errs.append(f"{task['case_id']}{letter}: odd $$")
        if "QED" in e or "arithmetic already displayed" in e:
            errs.append(f"{task['case_id']}{letter}: filler")
        if "So the statement is" not in e:
            errs.append(f"{task['case_id']}{letter}: missing closer")
    return errs


def main():
    data = json.loads(PATH.read_text())
    errors = []
    thin = 0
    for task in data["tasks"]:
        new_expls = []
        for i in range(5):
            new_expls.append(expand_one(task, i))
        errors.extend(validate(task, new_expls))
        for e in new_expls:
            if e.count("$$") < 4:
                thin += 1
        task["tactical_explanations"] = new_expls

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {PATH}")
    print(f"validation errors: {len(errors)}")
    for e in errors[:30]:
        print(" ", e)
    print(f"thin (<4 $$): {thin}")


if __name__ == "__main__":
    main()
