#!/usr/bin/env python3
"""Deepen ALL multi-step tactical explanations in Ch5 + Ch6.

Briefs: _DEEPEN_ALL_STEPS_BRIEF.md, _SEQUENTIAL_EXPL_EXPAND_BRIEF.md
Gold: MATH 6.113 E (preserved). No statement/key changes.
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

import sympy as sp
from sympy.parsing.latex import parse_latex

ROOT = Path("/workspace")
CH5_TS = ROOT / "src/data/math-ch5-linear-equations.ts"
CH5_EXAM = ROOT / "src/data/math-ch5-exam.json"
CH6 = ROOT / "src/data/math-ch6-inequalities.json"
DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)
LETTERS = "ABCDE"
x = sp.symbols("x")


def tidy(s: str) -> str:
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def norm(inner: str) -> str:
    return re.sub(r"\s+", " ", inner).strip()


def header(L: str, k: bool) -> str:
    return f"**{L}.** → {'True' if k else 'False'}"


def closer(k: bool) -> str:
    return f"So the statement is {'True' if k else 'False'}."


def tex(e) -> str:
    return sp.latex(e).replace("\\left", "").replace("\\right", "")


def opt(op: str) -> str:
    return {"<": "<", "<=": "\\le ", ">": ">", ">=": "\\ge "}[op]


def nice_num(v) -> str:
    v = sp.N(v)
    if abs(float(v) - round(float(v))) < 1e-9:
        return str(int(round(float(v))))
    return sp.latex(v)


def fmt_factor(v: str) -> str:
    s = str(v).strip()
    return f"({s})" if s.startswith("-") else s


def fmt_diff(a, b) -> str:
    na, nb = nice_num(a), nice_num(b)
    return f"{na} - ({nb})" if str(nb).startswith("-") else f"{na} - {nb}"



def ensure_header_closer(text: str, letter: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    text = text.strip()
    text = re.sub(
        r"^\*\*[A-E]\.\*\* → (?:True|False)",
        f"**{letter}.** → {verd}",
        text,
        count=1,
    )
    if not text.startswith(f"**{letter}.**"):
        text = f"**{letter}.** → {verd}\n\n" + text
    text = re.sub(r"\n*QED\.?\s*$", "", text, flags=re.I)
    text = re.sub(r"(?i)\n*so the statement is (?:True|False)\.\s*$", "", text)
    text = text.rstrip() + f"\n\nSo the statement is {verd}."
    return tidy(text)


def tokenize(text: str):
    parts = []
    pos = 0
    for m in DISPLAY_RE.finditer(text):
        if m.start() > pos:
            parts.append(("prose", text[pos : m.start()]))
        parts.append(("disp", m.group(1)))
        pos = m.end()
    if pos < len(text):
        parts.append(("prose", text[pos:]))
    return parts


def reassemble(parts):
    buf = []
    for kind, val in parts:
        if kind == "prose":
            buf.append(val)
        else:
            if buf and not str(buf[-1]).endswith("\n") and buf[-1]:
                buf.append("\n\n")
            inner = val.strip()
            if "\n" in val or len(inner) > 48:
                buf.append(f"$$\n{inner}\n$$")
            else:
                buf.append(f"$${inner}$$")
    return "".join(buf)


def _factor_pair(rhs: str):
    """Parse a(b)±c(d) allowing (-n) factors."""
    m2 = re.match(
        r"^(\(?-?[\d.]+\)?)\(([^)]+)\)([+\-])(\(?-?[\d.]+\)?)\(([^)]+)\)$",
        rhs,
    )
    if m2:
        return m2.groups()
    m2 = re.match(
        r"^(-?[\d.]+)\\cdot(-?[\d.]+)([+\-])(-?[\d.]+)\\cdot(-?[\d.]+)$",
        rhs,
    )
    return m2.groups() if m2 else None


def unpack_delta(body: str):
    s = norm(body)
    m = re.match(r"^(?:\\Delta|D)\s*=\s*(.+)$", s)
    if not m:
        return None
    rhs = m.group(1).replace(" ", "")
    parsed = _factor_pair(rhs)
    if not parsed:
        return None
    a, b, op, c, d = parsed
    a = a.strip("()")
    c = c.strip("()")
    try:
        p1 = sp.N(sp.sympify(a) * sp.sympify(b))
        p2 = sp.N(sp.sympify(c) * sp.sympify(d))
        total = p1 + p2 if op == "+" else p1 - p2
    except Exception:
        return None
    out = [
        f"{fmt_factor(a)}\\cdot {fmt_factor(b)} = {nice_num(p1)}",
        f"{fmt_factor(c)}\\cdot {fmt_factor(d)} = {nice_num(p2)}",
    ]
    if op == "+":
        out.append(f"\\Delta = {nice_num(p1)} + {nice_num(p2)}")
    else:
        out.append(f"\\Delta = {fmt_diff(p1, p2)}")
    out.append(f"\\Delta = {nice_num(total)}")
    return out


def unpack_cramer_frac(body: str):
    s = re.sub(r"\s+", "", body.strip())
    m = re.match(r"^([xy])=\\frac\{(.+)\}\{(.+)\}$", s)
    if not m:
        return None
    var, num, den = m.group(1), m.group(2), m.group(3)
    parsed = _factor_pair(num)
    if not parsed:
        return None
    a, b, op, c, d = parsed
    a = a.strip("()")
    c = c.strip("()")
    try:
        p1 = sp.N(sp.sympify(a) * sp.sympify(b))
        p2 = sp.N(sp.sympify(c) * sp.sympify(d))
        combined = p1 + p2 if op == "+" else p1 - p2
        den_v = sp.N(sp.sympify(den))
        result = sp.N(combined / den_v)
    except Exception:
        return None
    out = [
        f"{fmt_factor(a)}\\cdot {fmt_factor(b)} = {nice_num(p1)}",
        f"{fmt_factor(c)}\\cdot {fmt_factor(d)} = {nice_num(p2)}",
    ]
    if op == "+":
        out.append(f"{nice_num(p1)} + {nice_num(p2)} = {nice_num(combined)}")
    else:
        out.append(f"{fmt_diff(p1, p2)} = {nice_num(combined)}")
    out.append(f"{var} = \\frac{{{nice_num(combined)}}}{{{nice_num(den_v)}}}")
    out.append(f"{var} = {nice_num(result)}")
    return out


def unpack_juxt_sum(body: str):
    s = norm(body)
    if "=" in s:
        return None
    if not re.search(r"\d+\([^)]+\)\s*[+\-]\s*\d+\(", s):
        return None
    terms = []
    depth = 0
    buf = []
    sign = "+"
    for ch in s:
        if ch == "(":
            depth += 1
            buf.append(ch)
        elif ch == ")":
            depth = max(0, depth - 1)
            buf.append(ch)
        elif ch in "+-" and depth == 0 and buf:
            terms.append((sign, "".join(buf).strip()))
            sign = ch
            buf = []
        else:
            buf.append(ch)
    if buf:
        terms.append((sign, "".join(buf).strip()))
    if len(terms) < 2:
        return None
    out = []
    values = []
    for sgn, term in terms:
        mm = re.match(r"^(\d+(?:\.\d+)?)\(([^)]+)\)$", term.replace(" ", ""))
        if not mm:
            return None
        a, b = mm.group(1), mm.group(2)
        try:
            val = sp.N(sp.sympify(a) * sp.sympify(b))
        except Exception:
            return None
        out.append(f"{a}\\cdot {b} = {nice_num(val)}")
        values.append(f"-{nice_num(val)}" if sgn == "-" else nice_num(val))
    running = sp.N(sp.sympify(values[0]))
    for nxt in values[1:]:
        nv = sp.N(sp.sympify(nxt))
        new = running + nv
        if str(nxt).startswith("-"):
            out.append(f"{nice_num(running)} - {nice_num(-nv)} = {nice_num(new)}")
        else:
            out.append(f"{nice_num(running)} + {nice_num(nv)} = {nice_num(new)}")
        running = new
    return out


def unpack_prod_sum_chain(body: str):
    s = norm(body)
    if r"\Rightarrow" in s or not re.search(r"(\\cdot|\\times)", s) or s.count("=") < 1:
        return None
    parts = []
    depth = 0
    buf = []
    for ch in s:
        if ch == "{":
            depth += 1
            buf.append(ch)
        elif ch == "}":
            depth = max(0, depth - 1)
            buf.append(ch)
        elif ch == "=" and depth == 0:
            parts.append("".join(buf).strip())
            buf = []
        else:
            buf.append(ch)
    parts.append("".join(buf).strip())
    if len(parts) < 2:
        return None
    left = parts[0]
    if left.count("+") < 1 or (r"\cdot" not in left and r"\times" not in left):
        return None
    terms = []
    depth = 0
    buf = []
    for ch in left:
        if ch == "{":
            depth += 1
            buf.append(ch)
        elif ch == "}":
            depth = max(0, depth - 1)
            buf.append(ch)
        elif ch == "+" and depth == 0:
            terms.append("".join(buf).strip())
            buf = []
        else:
            buf.append(ch)
    terms.append("".join(buf).strip())
    terms = [t for t in terms if t]
    if len(terms) < 2:
        return None
    out = []
    values = []
    for term in terms:
        if r"\cdot" in term or r"\times" in term:
            t = term.replace(r"\cdot", "*").replace(r"\times", "*")
            t = re.sub(r"\\text\{[^}]*\}", "", t)
            try:
                val = sp.N(sp.sympify(t))
            except Exception:
                return None
            out.append(f"{term} = {nice_num(val)}")
            values.append(nice_num(val))
        else:
            values.append(term)
    if len(values) < 2:
        return None
    running = sp.N(sp.sympify(str(values[0]).replace(r"\text{ EUR}", "")))
    for nxt in values[1:]:
        try:
            nv = sp.N(sp.sympify(str(nxt).replace(r"\text{ EUR}", "")))
        except Exception:
            return None
        new = running + nv
        out.append(f"{nice_num(running)} + {nice_num(nv)} = {nice_num(new)}")
        running = new
    return out


def split_eq_chain(body: str):
    s = norm(body)
    if r"\Rightarrow" in s or r"\begin{" in s or r"\quad" in s:
        return None
    if re.search(r"\\(?:leq|geq|leqslant|geqslant|approx|neq|ge|le)\b|[<>]", s):
        return None
    parts = []
    depth = 0
    buf = []
    for ch in s:
        if ch == "{":
            depth += 1
            buf.append(ch)
        elif ch == "}":
            depth = max(0, depth - 1)
            buf.append(ch)
        elif ch == "=" and depth == 0:
            parts.append("".join(buf).strip())
            buf = []
        else:
            buf.append(ch)
    parts.append("".join(buf).strip())
    if len(parts) < 3:
        return None
    return [f"{parts[i]} = {parts[i+1]}" for i in range(len(parts) - 1)]


def deepen_body(body: str):
    for fn in (unpack_delta, unpack_cramer_frac, unpack_prod_sum_chain, unpack_juxt_sum, split_eq_chain):
        r = fn(body)
        if r:
            return r
    return None


def deepen_arithmetic(expl: str) -> str:
    parts = tokenize(expl)
    out = []
    i = 0
    changed = False
    while i < len(parts):
        kind, val = parts[i]
        if kind == "prose":
            out.append((kind, val))
            i += 1
            continue
        repl = deepen_body(val)
        if repl is None:
            out.append((kind, val))
            i += 1
            continue
        changed = True
        for b in repl:
            out.append(("disp", b))
        i += 1
        while i < len(parts):
            if parts[i][0] == "prose" and not parts[i][1].strip():
                if i + 1 < len(parts) and parts[i + 1][0] == "disp" and parts[i + 1][1].strip().startswith("="):
                    i += 1
                    continue
                break
            if parts[i][0] != "disp":
                break
            if parts[i][1].strip().startswith("="):
                i += 1
                continue
            break
    if not changed:
        return expl
    return tidy(reassemble(out))


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
        try:
            val = sp.N(expr.subs(x, mid))
            sg = "0" if val == 0 else ("+" if val > 0 else "-")
        except Exception:
            sg = "?"
        if a == -sp.oo:
            itv = f"(-\\infty,{tex(b)})"
        elif b == sp.oo:
            itv = f"({tex(a)},\\infty)"
        else:
            itv = f"({tex(a)},{tex(b)})"
        lines.append(f"| ${itv}$ | ${sg}$ |")
    return "\n".join(lines)


def parse_rel(blob: str):
    blob = blob.strip().replace("dfrac", "frac")
    for raw, op in [
        ("\\leqslant", "<="), ("\\le", "<="), ("\\geqslant", ">="), ("\\ge", ">="),
        ("≤", "<="), ("≥", ">="), ("<", "<"), (">", ">"),
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


def extract_blob(stmt: str):
    for p in [
        r"(?:solution set of(?: the inequality)?|The (?:strict )?inequality|The inequality|The comparison|The condition)\s*\$([^$]+)\$",
        r"(?:holds(?: exactly)? when|holds if and only if|is equivalent to)\s*\$([^$]+)\$",
        r"(?:Clearing the fraction in|Multiplying both sides of)\s*\$([^$]+)\$",
    ]:
        m = re.search(p, stmt, re.I)
        if m:
            return m.group(1).strip()
    for m in re.finditer(r"\$([^$]+)\$", stmt):
        t = m.group(1)
        if any(op in t for op in ["<", ">", "\\le", "\\ge", "≤", "≥"]):
            return t.strip()
    return None


def claim_note(k: bool, stmt: str) -> str:
    if k:
        return "which matches the claimed set."
    m = re.search(r"\bis\s+(\$[^$]+\$)", stmt)
    if m:
        return f"which does not match the claimed set {m.group(1)}."
    return "which does not match the claim."


def expand_rational(L, k, stmt, lhs, op, rhs) -> str:
    parts = [header(L, k), ""]
    moved = not (rhs == 0 or rhs == sp.Integer(0))
    if moved:
        parts += [
            "Start from the claimed inequality and move the constant to the left side.",
            "", f"$$\n{tex(lhs)}{opt(op)}{tex(rhs)}\n$$", "",
            f"$$\n{tex(lhs)}-{tex(rhs)}{opt(op)}0\n$$", "",
        ]
        num0, den0 = sp.fraction(sp.together(lhs))
        if den0 != 1:
            parts += [
                "Write the constant over the same denominator.", "",
                f"$$\n{tex(rhs)}=\\frac{{{tex(rhs)}({tex(den0)})}}{{{tex(den0)}}}\n$$", "",
                f"$$\n\\frac{{{tex(num0)}}}{{{tex(den0)}}}-\\frac{{{tex(sp.expand(rhs*den0))}}}{{{tex(den0)}}}{opt(op)}0\n$$", "",
                "Combine the numerators.", "",
                f"$$\n\\frac{{{tex(num0)}-{tex(sp.expand(rhs*den0))}}}{{{tex(den0)}}}{opt(op)}0\n$$", "",
            ]
            expanded = sp.expand(num0 - rhs * den0)
            parts += [f"$$\n\\frac{{{tex(expanded)}}}{{{tex(den0)}}}{opt(op)}0\n$$", ""]
            together = expanded / den0
        else:
            together = sp.simplify(lhs - rhs)
            parts += [f"$$\n{tex(together)}{opt(op)}0\n$$", ""]
    else:
        parts += ["Start from the claimed inequality.", "", f"$$\n{tex(lhs)}{opt(op)}{tex(rhs)}\n$$", ""]
        together = sp.together(lhs)

    together = sp.together(sp.simplify(together))
    num, den = sp.fraction(together)
    num, den = sp.expand(num), sp.expand(den)
    fac = sp.factor(num)
    if fac != num and num.as_poly(x) and num.as_poly(x).degree() >= 2:
        parts += ["Factor the numerator.", "", f"$$\n\\frac{{{tex(fac)}}}{{{tex(den)}}}{opt(op)}0\n$$", ""]
        num = fac
    parts += ["The critical points are the numerator zero(s) and the excluded pole(s).", ""]
    nzeros, dzeros = [], []
    for z in sp.solve(num, x):
        try:
            if z.is_real is False:
                continue
            float(sp.N(z)); nzeros.append(z)
        except Exception:
            pass
    nzeros = sorted(nzeros, key=lambda z: float(sp.N(z)))
    if den != 1:
        for z in sp.solve(den, x):
            try:
                if z.is_real is False:
                    continue
                float(sp.N(z)); dzeros.append(z)
            except Exception:
                pass
        dzeros = sorted(dzeros, key=lambda z: float(sp.N(z)))
    if isinstance(num, sp.Mul):
        for fac in sp.Mul.make_args(num):
            if fac.free_symbols:
                for z in sp.solve(fac, x):
                    try:
                        if z.is_real is False:
                            continue
                        float(sp.N(z))
                        parts += [f"$$\n{tex(fac)}=0\\Rightarrow x={tex(z)}\n$$", ""]
                    except Exception:
                        pass
    else:
        for z in nzeros:
            parts += [f"$$\n{tex(num)}=0\\Rightarrow x={tex(z)}\n$$", ""]
    for z in dzeros:
        parts += [f"$$\n{tex(den)}=0\\Rightarrow x={tex(z)}\n$$", ""]
        parts += [f"(the pole $x={tex(z)}$ is never allowed).", ""]
    pts = nzeros + dzeros
    parts += [sign_chart(together if den != 1 else num, pts), ""]
    dd = sp.simplify(lhs - rhs)
    sol = {
        "<": sp.solveset(sp.Lt(dd, 0), x, sp.Reals),
        "<=": sp.solveset(sp.Le(dd, 0), x, sp.Reals),
        ">": sp.solveset(sp.Gt(dd, 0), x, sp.Reals),
        ">=": sp.solveset(sp.Ge(dd, 0), x, sp.Reals),
    }[op]
    parts += [
        "Reading the sign chart against the inequality symbol gives", "",
        f"$$\n{tex(sol)}\n$$", "", claim_note(k, stmt), "", closer(k),
    ]
    return "\n".join(parts).rstrip() + "\n"


def has_broken(expl: str) -> bool:
    for m in DISPLAY_RE.finditer(expl):
        body = m.group(1).strip()
        if body in (r"\ge", r"\le", r"\leq", r"\geq", "<", ">", "="):
            return True
        if re.search(r"(?:\\le|\\ge|<|>|=)\s*$", body) and len(body) < 40:
            return True
    return False


def needs_regen(expl: str, stmt: str) -> bool:
    if has_broken(expl):
        return True
    blob = extract_blob(stmt)
    if not blob or "frac" not in blob:
        return False
    if blob.count("|") >= 2 or "sqrt" in blob:
        return False
    parsed = parse_rel(blob)
    if not parsed:
        return False
    lhs, op, rhs = parsed
    nonzero = not (rhs == 0 or rhs == sp.Integer(0))
    if nonzero and "same denominator" not in expl and "move the constant" not in expl.lower():
        if "Sign chart" in expl or "solution set" in stmt.lower():
            return True
    if "solution set" in stmt.lower() and "Sign chart" not in expl and "frac" in blob:
        return True
    return False


def try_ch6_regen(L, k, stmt, existing):
    if not needs_regen(existing, stmt):
        return None
    blob = extract_blob(stmt)
    if not blob or blob.count("|") >= 2 or "sqrt" in blob:
        return None
    parsed = parse_rel(blob)
    if not parsed:
        return None
    lhs, op, rhs = parsed
    if isinstance(lhs, sp.Abs):
        return None
    num, den = sp.fraction(sp.together(lhs))
    d2 = sp.fraction(sp.together(sp.simplify(lhs - rhs)))[1]
    if den != 1 or d2 != 1 or "frac" in blob:
        try:
            return expand_rational(L, k, stmt, lhs, op, rhs)
        except Exception as ex:
            print(f"  regen fail {L}: {ex}")
            return None
    return None


def deepen_quad_crit(expl: str) -> str:
    if "Factor the numerator" in expl:
        return expl
    seen = set()

    def repl(m: re.Match) -> str:
        body = norm(m.group(1))
        if r"\Rightarrow" not in body or ("x^{2}" not in body and "x^2" not in body):
            return m.group(0)
        mm = re.match(r"^(.+)=0\\Rightarrow\s*x=(.+)$", body)
        if not mm:
            return m.group(0)
        poly_tex, root = mm.group(1).strip(), mm.group(2).strip()
        try:
            poly = parse_latex(poly_tex.replace("dfrac", "frac"))
            fac = sp.factor(poly)
            if fac == poly:
                return m.group(0)
            key = tex(poly)
            if key in seen:
                for f in sp.Mul.make_args(fac) if isinstance(fac, sp.Mul) else [fac]:
                    for z in sp.solve(f, x):
                        try:
                            if tex(z) == root or sp.simplify(z - parse_latex(root)) == 0:
                                return f"$$\n{tex(f)}=0\\Rightarrow x={root}\n$$"
                        except Exception:
                            pass
                return f"$$\nx={root}\n$$"
            seen.add(key)
            return f"$$\n{tex(poly)}=0\n$$\n\n$$\n{tex(fac)}=0\n$$\n\n$$\nx={root}\n$$"
        except Exception:
            return m.group(0)

    return tidy(DISPLAY_RE.sub(repl, expl))


def audit(cid, L, k, expl):
    errs = []
    if not expl.startswith(header(L, k)):
        errs.append(f"{cid}{L}: bad header")
    if expl.count("$$") % 2:
        errs.append(f"{cid}{L}: odd $$")
    verd = "True" if k else "False"
    if f"So the statement is {verd}." not in expl:
        errs.append(f"{cid}{L}: bad closer")
    if "QED" in expl:
        errs.append(f"{cid}{L}: QED")
    return errs


def unescape_ts(s: str) -> str:
    out = []
    i = 0
    while i < len(s):
        if s[i] == "\\" and i + 1 < len(s):
            out.append(s[i + 1]); i += 2
        else:
            out.append(s[i]); i += 1
    return "".join(out)


def escape_ts(s: str) -> str:
    return s.replace("\\", "\\\\")


def load_ts(path: Path):
    text = path.read_text()
    parts = re.split(r"(?=case_id:\s*`)", text)
    prefix = parts[0]
    tasks = []
    for part in parts[1:]:
        m = re.match(r"case_id:\s*`([^`]+)`", part)
        if not m:
            continue
        cid = m.group(1)
        ak = re.search(r"answer_key:\s*\[([^\]]+)\]", part)
        if not ak:
            continue
        key = [x.strip().lower() == "true" for x in ak.group(1).split(",")]
        te = re.search(r"tactical_explanations:\s*\[", part)
        if not te:
            continue
        i = te.end()
        expls, spans = [], []
        while i < len(part) and len(expls) < 5:
            while i < len(part) and part[i] in " \n\t,":
                i += 1
            if i >= len(part) or part[i] != "`":
                break
            start = i; i += 1; buf = []
            while i < len(part):
                if part[i] == "`":
                    i += 1; break
                if part[i] == "\\":
                    buf.append(part[i:i+2]); i += 2; continue
                buf.append(part[i]); i += 1
            expls.append(unescape_ts("".join(buf))); spans.append((start, i))
        stmts = []
        sm = re.search(r"statements:\s*\[", part)
        if sm:
            j = sm.end()
            while j < len(part) and len(stmts) < 5:
                while j < len(part) and part[j] in " \n\t,":
                    j += 1
                if j >= len(part) or part[j] != "`":
                    break
                j += 1; buf = []
                while j < len(part):
                    if part[j] == "`":
                        j += 1; break
                    if part[j] == "\\":
                        buf.append(part[j:j+2]); j += 2; continue
                    buf.append(part[j]); j += 1
                stmts.append(unescape_ts("".join(buf)))
        tasks.append({"case_id": cid, "answer_key": key, "tactical_explanations": expls,
                      "statements": stmts, "part": part, "spans": spans})
    return prefix, tasks


def apply_ts(part, spans, expls):
    new = part
    for (a, b), e in zip(reversed(spans), reversed(expls)):
        new = new[:a] + "`" + escape_ts(e) + "`" + new[b:]
    return new


def case_num(cid: str) -> int:
    m = re.search(r"(\d+)$", cid)
    return int(m.group(1)) if m else -1


def process_task(task, source: str):
    cid = task["case_id"]
    keys = task["answer_key"]
    stmts = task.get("statements") or [""] * 5
    expls = list(task["tactical_explanations"])
    errs = []; changed = False
    for i in range(min(5, len(expls))):
        L, k = LETTERS[i], bool(keys[i])
        stmt = stmts[i] if i < len(stmts) else ""
        old = expls[i]
        if cid == "MATH 6.113" and L == "E":
            errs.extend(audit(cid, L, k, old)); continue
        new = old
        if source == "ch6":
            regen = try_ch6_regen(L, k, stmt, new)
            if regen is not None:
                new = regen
            else:
                new = deepen_arithmetic(new)
                new = deepen_quad_crit(new)
        else:
            new = deepen_arithmetic(new)
        new = ensure_header_closer(new, L, k)
        if new != old:
            changed = True
        expls[i] = new
        errs.extend(audit(cid, L, k, new))
    return expls, errs, changed


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--file", choices=["ch5c", "ch5e", "ch6", "all"], default="all")
    ap.add_argument("--from", dest="start", type=int, default=0)
    ap.add_argument("--to", dest="end", type=int, default=999)
    args = ap.parse_args()
    targets = [s for s in ("ch5c", "ch5e", "ch6") if args.file in (s, "all")]
    summary, hard = [], []
    for src in targets:
        if src == "ch5c":
            prefix, tasks = load_ts(CH5_TS)
            for t in tasks:
                n = case_num(t["case_id"])
                if n < args.start or n > args.end:
                    continue
                expls, errs, ch = process_task(t, "ch5c")
                hard.extend([e for e in errs if any(k in e for k in ("bad", "odd", "QED"))])
                if ch:
                    t["tactical_explanations"] = expls
                    t["part"] = apply_ts(t["part"], t["spans"], expls)
                    summary.append(t["case_id"])
            CH5_TS.write_text(prefix + "".join(t["part"] for t in tasks))
        elif src == "ch5e":
            data = json.loads(CH5_EXAM.read_text())
            for t in data["tasks"]:
                n = case_num(t["case_id"])
                if n < args.start or n > args.end:
                    continue
                expls, errs, ch = process_task(t, "ch5e")
                hard.extend([e for e in errs if any(k in e for k in ("bad", "odd", "QED"))])
                if ch:
                    t["tactical_explanations"] = expls
                    summary.append(t["case_id"])
            CH5_EXAM.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
        else:
            data = json.loads(CH6.read_text())
            for t in data["tasks"]:
                n = case_num(t["case_id"])
                if n < args.start or n > args.end:
                    continue
                expls, errs, ch = process_task(t, "ch6")
                hard.extend([e for e in errs if any(k in e for k in ("bad", "odd", "QED"))])
                if ch:
                    t["tactical_explanations"] = expls
                    summary.append(t["case_id"])
            CH6.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Changed {len(summary)}: {summary}")
    print(f"Hard errors: {len(hard)}")
    for e in hard[:30]:
        print(" ", e)
    if hard:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
