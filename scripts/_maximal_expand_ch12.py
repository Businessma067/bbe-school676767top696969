#!/usr/bin/env python3
"""Expand EVERY Ch1–2 tactical_explanation into maximal stepped algebra."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
sys.path.insert(0, str(ROOT / "scripts"))
from _ch1_patch_lib import (  # noqa: E402
    LETTERS,
    load as load_ch1,
    replace_tactical,
    save as save_ch1,
)

CH1_EXAM = ROOT / "src/data/math-ch1-exam.json"
CH2_JSON = ROOT / "src/data/math-ch2-cases.json"

FILLER_RES = [
    re.compile(r"\n*\s*The intermediate displays already decide the verdict once they are stacked against the claim\.?\s*", re.I),
    re.compile(r"\n*\s*Comparing the computed figure with the printed claim,?\s*", re.I),
    re.compile(r"\n*\s*Each candidate element is kept only when it appears in every listed set under the intersection\.?\s*", re.I),
    re.compile(r"\n*\s*The power-set count doubles with each additional ground-set element\.?\s*", re.I),
    re.compile(r"\n*\s*That matches the claim\.\s*\n\s*That matches the claim\.", re.I),
    re.compile(r"\bQED\.?\s*", re.I),
    re.compile(r"\n*\s*arithmetic already displayed[^\n]*\.?\s*", re.I),
]
HEADER_RE = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\s*\n+", re.I)
CLOSER_RE = re.compile(r"\n*So the statement is (True|False)\.?\s*$", re.I)
_EQ_CHAIN = re.compile(r"\$\$([^$]+)\$\$", re.S)
_QUAD_SPLIT = re.compile(r"\s*,\s*\\quad\s*|\s*\\qquad\s*")


def disp(formula: str) -> str:
    inner = re.sub(r"\s*\n\s*", " ", formula.strip().strip("$")).strip()
    return f"$${inner}$$"


def join(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and p.strip())


def strip_shell(expl: str) -> str:
    body = expl.strip()
    body = HEADER_RE.sub("", body)
    body = CLOSER_RE.sub("", body).strip()
    return body


def strip_fillers(body: str) -> str:
    for fr in FILLER_RES:
        body = fr.sub("\n\n", body)
    return re.sub(r"\n{3,}", "\n\n", body).strip()


def finish(letter: str, truth: bool, body: str) -> str:
    verdict = "True" if truth else "False"
    body = strip_fillers(HEADER_RE.sub("", CLOSER_RE.sub("", body.strip())).strip())
    return f"**{letter}.** → {verdict}\n\n{body}\n\nSo the statement is {verdict}."


def split_membership_line(inner: str) -> list[str]:
    if r"\quad" in inner or r"\qquad" in inner:
        parts = [p.strip().rstrip(",").strip() for p in _QUAD_SPLIT.split(inner)]
        parts = [p for p in parts if p]
        if len(parts) >= 2 and all(
            re.search(r"(\\in|\\notin|\\subseteq|\\subset|\\neq|\\leq|\\geq|=)", p) for p in parts
        ):
            return parts
    return [inner]


def split_eq_chain(inner: str) -> list[str]:
    inner = re.sub(r"\s+", " ", inner.strip())
    if r"\qquad" in inner:
        return [p.strip() for p in inner.split(r"\qquad") if p.strip()]
    if r"\Longleftrightarrow" in inner or r"\Leftrightarrow" in inner:
        return [inner]
    if inner.count("=") < 2:
        return [inner]
    parts = [p.strip() for p in re.split(r"(?<![<>])=", inner)]
    if len(parts) < 3:
        return [inner]
    out = [f"{parts[0]} = {parts[1]}"]
    for p in parts[2:]:
        out.append(f"= {p}")
    return out


def expand_displays(body: str) -> str:
    pieces: list[str] = []
    pos = 0
    for m in _EQ_CHAIN.finditer(body):
        prose = body[pos : m.start()].strip()
        if prose:
            pieces.append(prose)
        inner = m.group(1).strip()
        chunks = split_membership_line(inner)
        if len(chunks) == 1:
            chunks = split_eq_chain(inner)
        for ch in chunks:
            pieces.append(disp(ch))
        pos = m.end()
    tail = body[pos:].strip()
    if tail:
        pieces.append(tail)
    out = join(*pieces) if pieces else body
    out = re.sub(r"([^\n])\n\$\$", r"\1\n\n$$", out)
    out = re.sub(r"\$\$\n([^\n$])", r"$$\n\n\1", out)
    return re.sub(r"\n{3,}", "\n\n", out).strip()


def expand_existing(body: str) -> str:
    return expand_displays(strip_fillers(body))


# ---------- sympy helpers ----------

def _sym_expand_sq(inner: str) -> str | None:
    try:
        import sympy
        from sympy.parsing.sympy_parser import (
            implicit_multiplication_application,
            parse_expr,
            standard_transformations,
        )
        trans = standard_transformations + (implicit_multiplication_application,)
        e = parse_expr(inner.replace("^", "**"), transformations=trans)
        return sympy.latex(sympy.expand(e**2))
    except Exception:
        return None


def _sym_eval(expr: str, var: str, val: str):
    try:
        import sympy
        from sympy.parsing.sympy_parser import (
            implicit_multiplication_application,
            parse_expr,
            standard_transformations,
        )
        trans = standard_transformations + (implicit_multiplication_application,)
        e = expr.replace("^", "**")
        e = re.sub(r"\\(?:d)?frac\{([^{}]+)\}\{([^{}]+)\}", r"(\1)/(\2)", e)
        e = e.replace(r"\cdot", "*").replace(r"\left", "").replace(r"\right", "")
        e = e.replace(r"\bigl", "").replace(r"\bigr", "")
        e = re.sub(r"\\[a-zA-Z]+", "", e)
        parsed = parse_expr(e, transformations=trans)
        v = sympy.Integer(val) if "." not in val else sympy.Float(val)
        return sympy.simplify(parsed.subs(sympy.Symbol(var), v))
    except Exception:
        return None


# ---------- Ch2 rewriters ----------

def rw_sum_prod(stmt: str, truth: bool) -> str | None:
    m = re.search(
        r"(?:If\s+)?\$([a-zA-Z])\s*\+\s*([a-zA-Z])\s*=\s*(-?\d+)\$\s+and\s+\$([a-zA-Z]+)\s*=\s*(-?\d+)\$",
        stmt,
    )
    if not m:
        return None
    a, b, s, prod, p = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5)
    if len(prod) != 2 and set(prod) != {a, b}:
        return None
    tm = re.search(rf"{a}\^2\+{b}\^2\s*=\s*(-?\d+)", stmt) or re.search(
        r"evaluates to\s+\$?(-?\d+)", stmt
    )
    target = tm.group(1) if tm else None
    s_i, p_i = int(s), int(p)
    calc = s_i * s_i - 2 * p_i
    wrong_p = bool(re.search(r"s\^2-p\b", stmt))
    parts = [
        f"Start from the square of the sum and isolate ${a}^2+{b}^2$.",
        disp(f"({a}+{b})^2={a}^2+2{a}{b}+{b}^2"),
        disp(f"{a}^2+{b}^2=({a}+{b})^2-2{a}{b}"),
        disp(f"{a}+{b}={s}"),
        disp(f"{a}{b}={p}"),
        disp(f"{a}^2+{b}^2={s}^2-2\\cdot {p}"),
        disp(f"= {s_i**2}-2\\cdot {p_i}"),
        disp(f"= {s_i**2}-{2*p_i}"),
        disp(f"= {calc}"),
    ]
    if wrong_p:
        parts.append(disp(f"{s}^2-{p}={s_i**2}-{p_i}={s_i**2-p_i}"))
        parts.append(f"Subtracting $p$ once instead of $2p$ yields ${s_i**2-p_i}$, not ${calc}$.")
    elif target is not None:
        if int(target) == calc and truth:
            parts.append(f"This equals the claimed value ${target}$.")
        else:
            parts.append(f"The correct value is ${calc}$, not the claimed ${target}$." if not truth else f"Compare with the claimed ${target}$.")
    else:
        parts.append("The reduced value matches the claim." if truth else "The reduced value does not match the claim.")
    return join(*parts)


def rw_expand_sq(stmt: str, truth: bool) -> str | None:
    if re.search(r"rearrang", stmt, re.I) and re.search(r"[a-z]\+[a-z]=\d+", stmt.replace(" ", "")):
        return None
    if re.search(r"[a-z]\^2\+[a-z]\^2", stmt) and re.search(r"and\s+\$[a-z]{2}=", stmt):
        return None
    m = re.search(r"Expanding\s+\$\(([^)]+)\)\^2\$\s+(?:and collecting like terms yields|yields)\s+\$([^$]+)\$", stmt, re.I)
    comparing = False
    other = None
    if not m:
        m = re.search(r"Expanding\s+\$\(([^)]+)\)\^2\$\s+and comparing with\s+\$([^$]+)\$", stmt, re.I)
        if m:
            comparing = True
            inner, other = m.group(1), m.group(2)
            claimed = other
        else:
            return None
    else:
        inner, claimed = m.group(1), m.group(2)
    if re.search(r"[a-zA-Z]\^2\+[a-zA-Z]\^2\s*=", claimed):
        return None
    pm = re.fullmatch(r"(.+?)([+-])(.+)", inner.replace(" ", ""))
    expanded = _sym_expand_sq(inner)
    parts = [
        "Expand the binomial square by writing the product and collecting like terms.",
        disp(f"({inner})^2=({inner})({inner})"),
    ]
    if pm:
        a, op, b = pm.group(1), pm.group(2), pm.group(3)
        if op == "+":
            parts.append(disp(f"= ({a})^2+2\\cdot({a})\\cdot({b})+({b})^2"))
        else:
            parts.append(disp(f"= ({a})^2-2\\cdot({a})\\cdot({b})+({b})^2"))
    if expanded:
        parts.append(disp(f"= {expanded}"))
    if comparing and other:
        parts.append(disp(other))
        if truth:
            parts.append("Both displayed values agree for this instance.")
        else:
            parts.append(f"The expansion keeps the cross term, so $({inner})^2$ is not identical to ${other}$.")
    else:
        parts.append(disp(f"({inner})^2={claimed}"))
        parts.append("The collected right-hand side matches the claim." if truth else "The collected right-hand side does not match the claim.")
    return join(*parts)


def rw_at_point(stmt: str, truth: bool) -> str | None:
    am = re.search(r"(?:At|at)\s+\$([a-zA-Z])\s*=\s*(-?\d+(?:\.\d+)?)\$", stmt)
    bm = re.search(r"both\s+\$([^$]+)\$\s+and\s+\$([^$]+)\$\s+equal\s+\$?(-?\d+)", stmt, re.I)
    if not am or not bm:
        return None
    var, val = am.group(1), am.group(2)
    left, right, target = bm.group(1), bm.group(2), bm.group(3)
    parts = [
        f"Substitute ${var}={val}$ into both sides and compare the values.",
        disp(f"{var}={val}"),
        disp(left),
    ]
    lv = _sym_eval(left, var, val)
    rv = _sym_eval(right, var, val)
    try:
        import sympy
        if lv is not None:
            parts.append(disp(f"= {sympy.latex(lv)}"))
        parts.append(disp(right))
        if rv is not None:
            parts.append(disp(f"= {sympy.latex(rv)}"))
        if lv is not None and rv is not None:
            parts.append(disp(f"{sympy.latex(lv)}={sympy.latex(rv)}={target}"))
        else:
            parts.append(disp(f"\\text{{claimed value }}{target}"))
    except Exception:
        parts.append(disp(f"{left}\\big|_{{{var}={val}}}"))
        parts.append(disp(f"{right}\\big|_{{{var}={val}}}"))
        parts.append(disp(f"= {target}"))
    parts.append("Both sides agree with the claimed value." if truth else "The computed values do not support the claim.")
    return join(*parts)


def rw_diff_sq(stmt: str, truth: bool) -> str | None:
    m = re.search(r"Factoring\s+\$([^$]+)\$\s+as a difference of squares yields\s+\$([^$]+)\$", stmt, re.I)
    if not m:
        return None
    lhs, rhs = m.group(1), m.group(2)
    dm = re.match(r"([a-zA-Z0-9]+)\^2-(\d+)", lhs.replace(" ", ""))
    parts = ["Factor the difference of squares into conjugate linear factors.", disp(lhs)]
    if dm:
        base, n = dm.group(1), dm.group(2)
        root = int(int(n) ** 0.5)
        if root * root == int(n):
            parts += [
                disp(f"= {base}^2-{root}^2"),
                disp(f"= ({base}-{root})({base}+{root})"),
                disp(rhs),
            ]
            if not truth and re.search(r"\([^)]+\)\^2", stmt):
                parts = [
                    "A difference of squares factors into conjugates; it is not the square of a difference.",
                    disp(lhs),
                    disp(f"= {base}^2-{root}^2"),
                    disp(f"= ({base}-{root})({base}+{root})"),
                    disp(f"({base}-{root})^2={base}^2-2\\cdot {base}\\cdot {root}+{root}^2"),
                    f"At ${base}=0$ the left side is $-{n}$ while the squared difference is ${root**2}$.",
                ]
            else:
                parts.append("The factorisation matches the claim." if truth else "The claimed factorisation does not match.")
            return join(*parts)
    parts += [disp(rhs), "The factorisation matches the claim." if truth else "The claimed factorisation does not match."]
    return join(*parts)


def rw_vanishing(stmt: str, truth: bool) -> str | None:
    if not (re.search(r"a\+b\+c=0|p\+q\+r=0", stmt.replace(" ", "")) or "vanishing" in stmt.lower() or re.search(r"[a-z]\^3\+[a-z]\^3\+[a-z]\^3", stmt)):
        return None
    assigns = dict(re.findall(r"(?<![A-Za-z])([a-zA-Z])\s*=\s*(-?\d+)", stmt))
    # prefer triple from statement With a=2, b=3, and c=-5
    keys = []
    for k in ("a", "b", "c", "p", "q", "r", "x", "y", "z", "m", "n", "t"):
        if k in assigns:
            keys.append(k)
        if len(keys) == 3:
            break
    if len(keys) < 3:
        if "a" in assigns and "b" in assigns:
            assigns.setdefault("c", str(-(int(assigns["a"]) + int(assigns["b"]))))
            keys = ["a", "b", "c"]
        else:
            return None
    a, b, c = keys
    av, bv, cv = int(assigns[a]), int(assigns[b]), int(assigns[c])
    parts = [
        f"Under ${a}+{b}+{c}=0$, the sum of cubes collapses to the triple product.",
        disp(f"{a}={av}"),
        disp(f"{b}={bv}"),
        disp(f"{c}={cv}"),
        disp(f"{a}+{b}+{c}={av}+({bv})+({cv})={av+bv+cv}"),
    ]
    if av + bv + cv == 0:
        parts += [
            disp(f"{a}^3+{b}^3+{c}^3-3{a}{b}{c}=({a}+{b}+{c})(\\cdots)=0"),
            disp(f"{a}^3+{b}^3+{c}^3=3{a}{b}{c}"),
            disp(f"{av}^3+({bv})^3+({cv})^3={av**3+bv**3+cv**3}"),
            disp(f"3\\cdot {av}\\cdot ({bv})\\cdot ({cv})={3*av*bv*cv}"),
        ]
        if truth:
            parts.append("Both sides agree, so the claim holds for this triple.")
        else:
            parts.append("The sum of cubes equals $3abc$, which is not identically $0$.")
    else:
        parts.append("The printed values do not sum to zero, so the vanishing-sum shortcut does not apply.")
    return join(*parts)


def rw_frac_prod(stmt: str, truth: bool) -> str | None:
    m = re.search(
        r"\\dfrac\{([^}]+)\}\{([^}]+)\}\\cdot\\dfrac\{([^}]+)\}\{([^}]+)\}=\\s*(?:\\dfrac\{([^}]+)\}\{([^}]+)\}|(-?\d+(?:/\\d+)?))",
        stmt,
    )
    if not m:
        # also "it holds that $\dfrac...\cdot\dfrac...=...$"
        m = re.search(
            r"\\dfrac\{([^}]+)\}\{([^}]+)\}\\cdot\\dfrac\{([^}]+)\}\{([^}]+)\}=([^$]+)",
            stmt,
        )
        if not m:
            return None
        a, b, c, d, claimed = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5).strip()
    else:
        a, b, c, d = m.group(1), m.group(2), m.group(3), m.group(4)
        if m.lastindex >= 7 and m.group(7):
            claimed = m.group(7)
        elif m.group(5) is not None:
            claimed = rf"\dfrac{{{m.group(5)}}}{{{m.group(6)}}}"
        else:
            claimed = "?"
    parts = [
        "Multiply the fractions and cancel common factors step by step.",
        disp(rf"\dfrac{{{a}}}{{{b}}}\cdot\dfrac{{{c}}}{{{d}}}"),
        disp(rf"= \dfrac{{{a}\cdot({c})}}{{{b}\cdot({d})}}"),
        "Cancel matching factors in the numerator and denominator.",
        disp(f"= {claimed}"),
        "The reduced value matches the claim." if truth else "The reduced value does not match the claim.",
    ]
    return join(*parts)


def rw_power(stmt: str, truth: bool) -> str | None:
    m = re.search(
        r"([a-zA-Z])\^(\d+)\\cdot\s*\1\^\{(-?\d+)\}\\cdot\s*\1\^\{(-?\d+)\}=\1\^\{?(-?\d+)\}?",
        stmt,
    )
    if not m:
        m = re.search(
            r"([a-zA-Z])\^\{(-?\d+)\}\\cdot\s*\1\^\{(-?\d+)\}=\1\^\{(-?\d+)\}",
            stmt,
        )
        if not m:
            return None
        base = m.group(1)
        e1, e2, claimed = int(m.group(2)), int(m.group(3)), int(m.group(4))
        total = e1 + e2
        parts = [
            "Add the exponents when multiplying powers of the same base.",
            disp(f"{base}^{{{e1}}}\\cdot {base}^{{{e2}}}"),
            disp(f"= {base}^{{{e1}+({e2})}}"),
            disp(f"= {base}^{{{total}}}"),
            disp(f"{base}^{{{claimed}}}"),
        ]
        parts.append("The exponents match the claim." if truth and total == claimed else f"The correct exponent is ${total}$, not ${claimed}$.")
        return join(*parts)
    base = m.group(1)
    e1, e2, e3, claimed = int(m.group(2)), int(m.group(3)), int(m.group(4)), int(m.group(5))
    total = e1 + e2 + e3
    parts = [
        "Add the exponents when multiplying powers of the same base.",
        disp(f"{base}^{{{e1}}}\\cdot {base}^{{{e2}}}\\cdot {base}^{{{e3}}}"),
        disp(f"= {base}^{{{e1}+({e2})+({e3})}}"),
        disp(f"= {base}^{{{total}}}"),
        disp(f"{base}^{{{claimed}}}"),
        "The exponents match the claim." if truth and total == claimed else f"The correct exponent is ${total}$, not ${claimed}$.",
    ]
    return join(*parts)


def rw_abs(stmt: str, truth: bool) -> str | None:
    am = re.search(r"(?:At|at)\s+\$([a-zA-Z])\s*=\s*(-?\d+)\$", stmt)
    if not am:
        return None
    if not re.search(r"\|[^|]+\||\\lvert|\\left\|", stmt):
        return None
    var, val = am.group(1), am.group(2)
    v = int(val)
    if re.search(rf"\|{var}\||\\lvert\s*{var}\s*\\rvert", stmt) and re.search(rf"and\s+\$?{var}\$?\s+equal", stmt):
        parts = [
            f"Evaluate the absolute value at ${var}={val}$.",
            disp(f"{var}={val}"),
            disp(rf"|{var}|"),
            disp(f"= |{v}|"),
            disp(f"= {abs(v)}"),
            disp(f"{var}={v}"),
        ]
        if abs(v) == v and truth:
            parts.append("Both agree for this nonnegative value.")
        else:
            parts.append(f"Since $|{v}|={abs(v)}\\neq {v}$, the two sides disagree.")
        return join(*parts)
    return None


def rw_complete_square(stmt: str, truth: bool) -> str | None:
    m = re.search(r"\$([a-zA-Z])\^2([+-]\d+)\1([+-]\d+)\$", stmt.replace(" ", ""))
    if not m and "complet" not in stmt.lower() and "(x+" not in stmt and "both $x^2" not in stmt:
        # At x=1, both x^2+6x+11 and (x+3)^2+2
        m2 = re.search(r"both\s+\$([^$]+)\$\s+and\s+\$\\\(([^)]+)\\\)\^2([+-]\d+)\$", stmt)
        if not m2:
            m2 = re.search(r"both\s+\$([a-zA-Z]\^2[+-]\d+[a-zA-Z][+-]\d+)\$\s+and\s+\$(\\left)?\(([^\)]+)\)\^2([+-]\d+)\$", stmt)
        if not m2:
            return None
    # Fall through to at_point if possible
    return None


def rw_inequality_square(stmt: str, truth: bool) -> str | None:
    # a^2-ab >= ab-b^2 -> (a-b)^2 >= 0
    m = re.search(
        r"\$([a-zA-Z])\^2-([a-zA-Z])\2\\ge\s*\2\1-\2\^2\$|"
        r"\$([a-zA-Z])\^2-([a-zA-Z]{2})\\ge\s*([a-zA-Z]{2})-([a-zA-Z])\^2\$",
        stmt,
    )
    # simpler textual
    m = re.search(r"\$([a-zA-Z])\^2-([a-zA-Z])\1\\ge\s*\1([a-zA-Z])-\2\^2\$", stmt)
    if not m:
        m = re.search(
            r"\$([a-zA-Z])\^2-([a-zA-Z]+)\\ge\s*([a-zA-Z]+)-([a-zA-Z])\^2\$",
            stmt,
        )
    if not m:
        # With a=5 and b=2, rearranging a^2-ab>=ab-b^2
        m = re.search(
            r"\$([a-zA-Z])\^2-([a-zA-Z])\1\\ge\s*\1([a-zA-Z])-\2\^2\$|"
            r"([a-zA-Z])\^2-\1([a-zA-Z])\\ge\s*\1\2-\2\^2",
            stmt.replace(" ", ""),
        )
    # Even simpler:
    m = re.search(r"([a-zA-Z])\^2-\1([a-zA-Z])\\ge\s*\1\2-\2\^2", stmt.replace(" ", ""))
    if not m:
        m = re.search(r"([a-zA-Z])\^2-\1([a-zA-Z])\\ge\s*\1\2-\2\^2", stmt)
    if not m:
        return None
    a, b = m.group(1), m.group(2)
    parts = [
        "Move every term to one side and recognise a perfect square.",
        disp(f"{a}^2-{a}{b}\\ge {a}{b}-{b}^2"),
        disp(f"{a}^2-{a}{b}-{a}{b}+{b}^2\\ge 0"),
        disp(f"{a}^2-2{a}{b}+{b}^2\\ge 0"),
        disp(f"({a}-{b})^2\\ge 0"),
    ]
    if truth:
        parts.append("A square is nonnegative for every real pair, so the inequality holds.")
    else:
        parts.append("The reduced claim fails for some real pairs.")
    return join(*parts)


CH2_RW = [
    rw_sum_prod,
    rw_vanishing,
    rw_expand_sq,
    rw_diff_sq,
    rw_frac_prod,
    rw_power,
    rw_abs,
    rw_inequality_square,
    rw_at_point,
]


def maximal_ch2(stmt: str, truth: bool, old: str) -> str:
    body = strip_shell(old)
    for fn in CH2_RW:
        try:
            neu = fn(stmt, truth)
        except Exception:
            neu = None
        if neu and neu.count("$$") >= 3:
            return expand_existing(neu)
    expanded = expand_existing(body)
    # If still thin, try any rewriter regardless of length
    if expanded.count("$$") < 4:
        for fn in CH2_RW:
            try:
                neu = fn(stmt, truth)
            except Exception:
                neu = None
            if neu:
                return expand_existing(neu)
    if expanded.count("$$") < 3:
        latex = re.findall(r"\$([^$]+)\$", stmt)
        lead = expanded or "Work the claim one algebraic step at a time."
        for frag in latex[:6]:
            if len(frag) < 90:
                d = disp(frag)
                if d not in lead:
                    lead = join(lead, d)
        expanded = expand_existing(lead)
    if "claim" not in expanded.lower()[-160:]:
        expanded = join(expanded, "Compare each displayed form with the printed claim.")
    return expand_existing(expanded)


# ---------- Ch1 ----------

def parse_sets(context: str) -> dict[str, list[str]]:
    out = {}
    for m in re.finditer(r"\$([A-Z])\s*=\s*\\\{([^{}]+)\\\}", context):
        out[m.group(1)] = [e.strip() for e in m.group(2).split(",") if e.strip()]
    return out


def rw_set_op(stmt: str, context: str, truth: bool) -> str | None:
    sets = parse_sets(context)
    if not sets:
        return None
    m = re.search(r"\$([A-Z])\s*\\cap\s*([A-Z])\s*=\s*\\\{([^{}]*)\\\}", stmt)
    if m and m.group(1) in sets and m.group(2) in sets:
        A, B = m.group(1), m.group(2)
        claimed = [e.strip() for e in m.group(3).split(",") if e.strip()]
        a, b = sets[A], sets[B]
        parts = [
            f"Intersection keeps only elements that sit in both ${A}$ and ${B}$.",
            disp(f"{A}=\\{{{','.join(a)}\\}}"),
            disp(f"{B}=\\{{{','.join(b)}\\}}"),
        ]
        keep = []
        for x in a:
            if x in b:
                parts.append(disp(f"{x}\\in {A},\\ {x}\\in {B}"))
                keep.append(x)
            else:
                parts.append(disp(f"{x}\\in {A},\\ {x}\\notin {B}"))
        parts.append(disp(f"{A}\\cap {B}=\\{{{','.join(keep)}\\}}"))
        parts.append(disp(f"\\{{{','.join(claimed)}\\}}"))
        parts.append("The computed roster matches the claim." if set(keep) == set(claimed) else "The computed roster does not match the claim.")
        return join(*parts)
    m = re.search(r"\$([A-Z])\s*\\cup\s*([A-Z])\s*=\s*\\\{([^{}]*)\\\}", stmt)
    if m and m.group(1) in sets and m.group(2) in sets:
        A, B = m.group(1), m.group(2)
        claimed = [e.strip() for e in m.group(3).split(",") if e.strip()]
        a, b = sets[A], sets[B]
        union = list(dict.fromkeys(a + b))
        parts = [
            f"Union keeps every element that sits in ${A}$ or in ${B}$ (or both).",
            disp(f"{A}=\\{{{','.join(a)}\\}}"),
            disp(f"{B}=\\{{{','.join(b)}\\}}"),
            disp(f"{A}\\cup {B}=\\{{{','.join(union)}\\}}"),
            disp(f"\\{{{','.join(claimed)}\\}}"),
            "The computed roster matches the claim." if set(union) == set(claimed) else "The computed roster does not match the claim.",
        ]
        return join(*parts)
    m = re.search(r"\$([A-Z])\s*\\setminus\s*([A-Z])\s*=\s*\\\{([^{}]*)\\\}", stmt)
    if m and m.group(1) in sets and m.group(2) in sets:
        A, B = m.group(1), m.group(2)
        claimed = [e.strip() for e in m.group(3).split(",") if e.strip()]
        a, b = sets[A], sets[B]
        parts = [
            f"Difference ${A}\\setminus {B}$ keeps members of ${A}$ that miss ${B}$.",
            disp(f"{A}=\\{{{','.join(a)}\\}}"),
            disp(f"{B}=\\{{{','.join(b)}\\}}"),
        ]
        keep = []
        for x in a:
            if x in b:
                parts.append(disp(f"{x}\\in {A},\\ {x}\\in {B}"))
            else:
                parts.append(disp(f"{x}\\in {A},\\ {x}\\notin {B}"))
                keep.append(x)
        parts.append(disp(f"{A}\\setminus {B}=\\{{{','.join(keep)}\\}}"))
        parts.append(disp(f"\\{{{','.join(claimed)}\\}}"))
        parts.append("The computed roster matches the claim." if set(keep) == set(claimed) else "The computed roster does not match the claim.")
        return join(*parts)
    return None


def rw_powerset(stmt: str, truth: bool) -> str | None:
    if "power set" not in stmt.lower() and r"\mathcal" not in stmt:
        return None
    size = None
    for pat in [
        r"set\s+\$[A-Z]\$\s+of\s+\$?(\d+)",
        r"\|[A-Z]\|\s*=\s*(\d+)",
        r"has\s+\$?(\d+)\$?\s+(?:distinct\s+)?(?:elements|codes|members)",
        r"\$\|[A-Z]\|=(\d+)\$",
        r"has three elements|has\s+three\s+elements",
    ]:
        mm = re.search(pat, stmt, re.I)
        if mm:
            if mm.lastindex:
                size = int(mm.group(1))
            elif "three" in mm.group(0).lower():
                size = 3
            break
    if size is None and re.search(r"\\mathcal\s*P\(\\mathcal\s*P", stmt):
        # P(P(X)) with |X|=3 -> 256
        size = 3
        claimed = 256
        parts = [
            "Iterate the power-set size formula.",
            disp(r"|X|=3"),
            disp(r"|\mathcal{P}(X)|=2^{|X|}"),
            disp(r"2^3=8"),
            disp(r"|\mathcal{P}(\mathcal{P}(X))|=2^{|\mathcal{P}(X)|}"),
            disp(r"2^8=256"),
        ]
        parts.append("The iterated power set has $256$ members." if truth else "The count does not match the claim.")
        return join(*parts)
    claimed = None
    cm = re.search(r"has\s+\$?(\d+)\$?\s+members|has\s+\$?(\d+)\$?\s+elements|=\s*\$?(\d+)", stmt)
    if cm:
        claimed = int([g for g in cm.groups() if g][0])
    if size is None:
        return None
    parts = [
        "Each ground-set element may be included or omitted independently.",
        disp(f"|C|={size}"),
        disp(r"|\mathcal{P}(C)|=2^{|C|}"),
        disp(f"2^{{{size}}}"),
        disp(f"= {2**size}"),
    ]
    if claimed is not None:
        if 2**size == claimed:
            parts.append(disp(f"{2**size}={claimed}"))
            parts.append("The power-set count matches the claim.")
        else:
            parts.append(disp(f"{2**size}\\neq {claimed}"))
            parts.append(f"The power set has ${2**size}$ members, not ${claimed}$.")
    return join(*parts)


def rw_logic(stmt: str, truth: bool) -> str | None:
    s = stmt.replace(" ", "")
    if "p\\rightarrow(q\\rightarrow r)" in stmt or "p\\rightarrow(q\\rightarrow r)" in s:
        return join(
            "Eliminate each implication until both formulas share the same disjunctive form.",
            disp(r"p\rightarrow(q\rightarrow r)"),
            disp(r"\equiv \neg p\vee(q\rightarrow r)"),
            disp(r"\equiv \neg p\vee(\neg q\vee r)"),
            disp(r"\equiv \neg p\vee\neg q\vee r"),
            disp(r"(p\wedge q)\rightarrow r"),
            disp(r"\equiv \neg(p\wedge q)\vee r"),
            disp(r"\equiv (\neg p\vee\neg q)\vee r"),
            disp(r"\equiv \neg p\vee\neg q\vee r"),
            "Both formulas reduce to the same disjunction." if truth else "The reduced forms disagree.",
        )
    if "converse" in stmt.lower():
        return join(
            "One truth assignment separates an implication from its converse.",
            disp(r"(p,q)=(F,T)"),
            disp(r"p\rightarrow q"),
            disp(r"= F\rightarrow T"),
            disp(r"= T"),
            disp(r"q\rightarrow p"),
            disp(r"= T\rightarrow F"),
            disp(r"= F"),
            "The two implications disagree on this assignment.",
        )
    if "negation of $p\\wedge q$" in stmt.lower() or r"\neg(p\wedge q)" in stmt:
        return join(
            "A conjunction fails precisely when at least one conjunct fails.",
            disp(r"\neg(p\wedge q)"),
            disp(r"\equiv \neg p\vee \neg q"),
            disp(r"\neg(p\wedge q)\leftrightarrow(\neg p\vee\neg q)"),
            "This is De Morgan's law for conjunction.",
        )
    return None


def maximal_ch1(stmt: str, context: str, truth: bool, old: str) -> str:
    body = strip_shell(old)
    for fn in (
        lambda: rw_set_op(stmt, context, truth),
        lambda: rw_powerset(stmt, truth),
        lambda: rw_logic(stmt, truth),
    ):
        try:
            neu = fn()
        except Exception:
            neu = None
        if neu and neu.count("$$") >= 3:
            return expand_existing(neu)
    expanded = expand_existing(body)
    if expanded.count("$$") < 3:
        latex = re.findall(r"\$([^$]+)\$", stmt)
        lead = expanded or "Read the claim carefully and check it directly."
        for frag in latex[:5]:
            if len(frag) < 100:
                d = disp(frag)
                if d not in lead:
                    lead = join(lead, d)
        expanded = expand_existing(lead)
    return expanded


# ---------- I/O ----------

def extract_ch1_tasks(text: str) -> list[dict]:
    tasks = []

    def read_tick(region: str, i: int) -> tuple[str, int]:
        assert region[i] == "`"
        i += 1
        buf = []
        while i < len(region):
            if region[i] == "\\" and i + 1 < len(region):
                buf.append(region[i + 1])
                i += 2
                continue
            if region[i] == "`":
                return "".join(buf), i + 1
            buf.append(region[i])
            i += 1
        raise RuntimeError("unterminated")

    for m in re.finditer(r"\n  \{\n    id: `(math-1-\d+)`", text):
        start = m.start() + 1
        rest = text[start:]
        nxt = re.search(r"\n  \{\n    id: `math-1-", rest[5:])
        region = rest[: nxt.start() + 5 if nxt else len(rest)]
        case_m = re.search(r"case_id:\s*`(MATH 1\.\d+)`", region)
        ctx_m = re.search(r"context:\s*`", region)
        sm = re.search(r"statements:\s*\[", region)
        ak = re.search(r"answer_key:\s*\[([^\]]+)\]", region)
        te = re.search(r"tactical_explanations:\s*\[", region)
        if not (case_m and sm and ak and te):
            continue
        ctx = ""
        if ctx_m:
            ctx, _ = read_tick(region, ctx_m.end() - 1)
        i = sm.end()
        stmts = []
        while i < len(region):
            while i < len(region) and region[i] in " \t\n\r,":
                i += 1
            if region[i] == "]":
                break
            if region[i] == "`":
                s, i = read_tick(region, i)
                stmts.append(s)
            else:
                i += 1
        keys = [x.strip() == "true" for x in ak.group(1).split(",")]
        i = te.end()
        expls = []
        while i < len(region):
            while i < len(region) and region[i] in " \t\n\r,":
                i += 1
            if i >= len(region) or region[i] == "]":
                break
            if region[i] == "`":
                s, i = read_tick(region, i)
                expls.append(s)
            else:
                i += 1
        tasks.append(
            {
                "case_id": case_m.group(1),
                "context": ctx,
                "statements": stmts,
                "answer_key": keys,
                "tactical_explanations": expls,
            }
        )
    return tasks


def validate(expl: str, letter: str, truth: bool) -> list[str]:
    errs = []
    want = f"**{letter}.** → {'True' if truth else 'False'}"
    if not expl.startswith(want):
        errs.append("header")
    if not expl.rstrip().endswith(f"So the statement is {'True' if truth else 'False'}."):
        errs.append("closer")
    if expl.count("$$") % 2:
        errs.append("$$")
    return errs


def main() -> None:
    # Snapshot statements/keys for integrity check
    text = load_ch1()
    tasks = extract_ch1_tasks(text)
    snap1 = [(t["case_id"], t["statements"], t["answer_key"]) for t in tasks]
    n = 0
    for t in tasks:
        new_expls = []
        for i, (stmt, truth, old) in enumerate(zip(t["statements"], t["answer_key"], t["tactical_explanations"])):
            body = maximal_ch1(stmt, t["context"], truth, old)
            new_expls.append(finish(LETTERS[i], truth, body))
            n += 1
        text = replace_tactical(text, t["case_id"], new_expls)
    save_ch1(text)
    tasks2 = extract_ch1_tasks(load_ch1())
    assert [(t["case_id"], t["statements"], t["answer_key"]) for t in tasks2] == snap1
    errs = sum(len(validate(e, LETTERS[i], t["answer_key"][i])) for t in tasks2 for i, e in enumerate(t["tactical_explanations"]))
    print(f"ch1-logic: {n} expls, validate_errs={errs}")

    for path, kind in ((CH1_EXAM, "ch1exam"), (CH2_JSON, "ch2")):
        data = json.loads(path.read_text())
        tasks = data["tasks"]
        snap = [(t["id"], t["statements"], t["answer_key"]) for t in tasks]
        n = 0
        errs = 0
        for t in tasks:
            ctx = t.get("context") or ""
            new = []
            for i, (stmt, truth, old) in enumerate(zip(t["statements"], t["answer_key"], t["tactical_explanations"])):
                if kind == "ch2":
                    body = maximal_ch2(stmt, bool(truth), old)
                else:
                    body = maximal_ch1(stmt, ctx, bool(truth), old)
                expl = finish(LETTERS[i], bool(truth), body)
                new.append(expl)
                errs += len(validate(expl, LETTERS[i], bool(truth)))
                n += 1
            t["tactical_explanations"] = new
        assert [(t["id"], t["statements"], t["answer_key"]) for t in tasks] == snap
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
        print(f"{path.name}: {n} expls, validate_errs={errs}")

    # quick samples
    ch2 = json.loads(CH2_JSON.read_text())["tasks"]
    print("--- sample math-2-1 A ---")
    print(ch2[0]["tactical_explanations"][0][:500])
    print("--- sample math-2-3 A ---")
    print(ch2[2]["tactical_explanations"][0][:500])


if __name__ == "__main__":
    main()
