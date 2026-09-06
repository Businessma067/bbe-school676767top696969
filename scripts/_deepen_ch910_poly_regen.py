#!/usr/bin/env python3
"""Sympy-backed poly evaluation regenerator for Ch9 deepen."""
from __future__ import annotations

import re

import sympy as sp

from _deepen_ch910_helpers import D, tidy


def latex_poly_to_sympy(rhs: str, var: str) -> sp.Expr:
    s = rhs.strip()
    s = (
        s.replace(r"\left", "")
        .replace(r"\right", "")
        .replace(r"\,", "")
        .replace(r"\cdot", "*")
        .replace(r"\times", "*")
    )
    s = re.sub(r"\\frac\{([^{}]+)\}\{([^{}]+)\}", r"(\1)/(\2)", s)
    s = re.sub(r"\^\{([^{}]+)\}", r"**(\1)", s)
    s = s.replace("^", "**")
    s = re.sub(rf"(\d)\s*({re.escape(var)})\b", rf"\1*\2", s)
    s = re.sub(r"\)\s*\(", ")*(", s)
    s = s.replace("{", "").replace("}", "")
    s = re.sub(r"\\[a-zA-Z]+", "", s)
    return sp.expand(sp.sympify(s, locals={var: sp.symbols(var)}))


def extract_named_polys(context: str, overview: str) -> dict[str, sp.Expr]:
    blob = (context or "") + "\n" + (overview or "")
    out: dict[str, sp.Expr] = {}
    patterns = [
        r"\$\$\s*([A-Za-z])\s*\(\s*([a-z])\s*\)\s*=\s*([^$]+?)\s*\$\$",
        r"\$([A-Za-z])\(([a-z])\)\s*=\s*([^$]+)\$",
        r"Let\s*\$([A-Za-z])\(([a-z])\)\s*=\s*([^$]+)\$",
    ]
    for pat in patterns:
        for mm in re.finditer(pat, blob, re.S):
            name, var, rhs = mm.group(1), mm.group(2), mm.group(3).strip()
            if name in out:
                continue
            try:
                out[name] = latex_poly_to_sympy(rhs, var)
            except Exception:
                continue
    for mm in re.finditer(
        r"Write\s*\$([A-Za-z])\s*=\s*([A-Za-z])\s*([+\-]|\\cdot|\\times|\*)\s*([A-Za-z])\$",
        blob,
    ):
        name, a, op, b = mm.group(1), mm.group(2), mm.group(3), mm.group(4)
        if name in out or a not in out or b not in out:
            continue
        if op == "+":
            out[name] = sp.expand(out[a] + out[b])
        elif op == "-":
            out[name] = sp.expand(out[a] - out[b])
        else:
            out[name] = sp.expand(out[a] * out[b])
    return out


def regen_poly_eval_letter(stmt: str, polys: dict, letter: str, truth: bool) -> str | None:
    m = re.match(
        r"^\$([A-Za-z])\((-?\d+(?:\.\d+)?)\)\s*=\s*(-?\d+(?:\.\d+)?)\$?\.\s*$",
        stmt.strip(),
    )
    if not m or m.group(1) not in polys:
        return None
    name, aval_s, claimed_s = m.group(1), m.group(2), m.group(3)
    aval = float(aval_s)
    claimed = float(claimed_s)
    expr = polys[name]
    frees = [str(u) for u in expr.free_symbols]
    var = frees[0] if frees else "x"
    v = sp.symbols(var)
    val_sp: sp.Expr = sp.Integer(int(aval)) if float(aval) == int(aval) else sp.Float(aval)
    base_tex = aval_s if aval >= 0 else f"({aval_s})"
    expanded = sp.expand(expr)
    poly = sp.Poly(expanded, v)
    steps = [
        f"**{letter}.** → {'True' if truth else 'False'}",
        "",
        f"Substitute ${var}={aval_s}$ into the named polynomial and simplify each power before combining.",
        "",
        D(f"{name}({var})={sp.latex(expanded)}"),
    ]
    contribs: list[sp.Expr] = []
    for d in range(poly.degree(), -1, -1):
        coef = poly.nth(d)
        if coef == 0:
            continue
        if d == 0:
            contribs.append(coef)
            continue
        power = val_sp**d
        steps += ["", D(f"{base_tex}^{{{d}}}={sp.latex(power)}")]
        if coef == 1:
            contribs.append(power)
        elif coef == -1:
            steps += ["", D(f"-({sp.latex(power)})={sp.latex(-power)}")]
            contribs.append(-power)
        else:
            prod = sp.simplify(coef * power)
            right = sp.latex(power) if float(power) >= 0 else f"({sp.latex(power)})"
            steps += ["", D(rf"{sp.latex(coef)}\cdot {right}={sp.latex(prod)}")]
            contribs.append(prod)
    signed = []
    for i, c in enumerate(contribs):
        cf = float(c)
        if i == 0:
            signed.append(sp.latex(c))
        elif cf < 0:
            signed.append("-" + sp.latex(-c))
        else:
            signed.append("+" + sp.latex(c))
    steps += ["", D(f"{name}({aval_s})={''.join(signed)}")]
    run = contribs[0]
    for c in contribs[1:]:
        prev = run
        run = sp.simplify(prev + c)
        steps.append("")
        if float(c) < 0:
            steps.append(D(f"{sp.latex(prev)}-{sp.latex(-c)}={sp.latex(run)}"))
        else:
            steps.append(D(f"{sp.latex(prev)}+{sp.latex(c)}={sp.latex(run)}"))
    steps += ["", D(f"{name}({aval_s})={sp.latex(run)}"), ""]
    if abs(float(run) - claimed) < 1e-9:
        steps.append(f"The computed height is ${sp.latex(run)}$, matching the claim.")
    else:
        steps.append(
            f"The computed height is ${sp.latex(run)}$, which does not match the claimed ${claimed_s}$."
        )
    steps += ["", f"So the statement is {'True' if truth else 'False'}."]
    return tidy("\n".join(steps))
