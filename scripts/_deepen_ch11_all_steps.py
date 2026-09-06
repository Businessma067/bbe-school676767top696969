#!/usr/bin/env python3
"""Deepen Chapter 11 tactical_explanations (differentiation + exam).

Letter-local expansion only. Product/chain/quotient before simplifying.
Critical-point solves fully stepped. No overview dumping into one letter.

Usage:
  python3 scripts/_deepen_ch11_all_steps.py core START END
  python3 scripts/_deepen_ch11_all_steps.py exam START END
  python3 scripts/_deepen_ch11_all_steps.py audit core|exam
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import sympy as sp

ROOT = Path("/workspace")
TS_PATH = ROOT / "src/data/math-ch11-differentiation.ts"
EXAM_PATH = ROOT / "src/data/math-ch11-exam.json"
LETTERS = "ABCDE"

HEADER_RE = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\b", re.I)
CLOSER_RE = re.compile(
    r"(?:\n|^)\s*So the statement is\s+(True|False)\.?\s*$", re.I | re.M
)
DISPLAY_RE = re.compile(r"\$\$(.*?)\$\$", re.S)
IMPLIES_RE = re.compile(r"\\implies|\\Rightarrow|⇒")
TS_STRING_RE = re.compile(r"`((?:\\`|[^`])*)`", re.S)

FILLER_RES = [
    re.compile(r"\n*\s*The stem's formula is enough; no outside identity is required for the check\.?\s*", re.I),
    re.compile(r"\n*\s*Substituting only after the general expression is finished avoids mixing height with slope\.?\s*", re.I),
    re.compile(r"\n*\s*Coefficient and sign agreement with the claim is what decides the letter\.?\s*", re.I),
    re.compile(r"\n*\s*The same checklist — differentiate, simplify, evaluate — settles the assertion\.?\s*", re.I),
    re.compile(r"\n*\s*Writing every intermediate line keeps the comparison with the claim mechanical\.?\s*", re.I),
    re.compile(r"\n*\s*Holding both formulas in view makes the failure obvious\.?\s*", re.I),
    re.compile(r"\n*\s*The derived expression and the asserted one disagree at a checkable place\.?\s*", re.I),
    re.compile(r"\n*\s*That mismatch alone is enough to reject the letter\.?\s*", re.I),
    re.compile(r"\n*\s*The named evaluation already serves as a counter-example\.?\s*", re.I),
    re.compile(r"\bQED\.?\s*", re.I),
    re.compile(r"\n*\s*(?:Arithmetic already displayed|Accept\.|Reject\.)[^\n]*\.?\s*", re.I),
]


def tidy(s: str) -> str:
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def D(inner: str) -> str:
    return f"$$\n{inner.strip()}\n$$"


def tex(expr) -> str:
    s = sp.latex(expr)
    s = s.replace(r"\left", "").replace(r"\right", "")
    s = s.replace(r"\log", r"\ln")
    return s


def parse_tex_expr(tex_src: str, var: str):
    vsym = sp.symbols(var)
    local = {
        var: vsym,
        "e": sp.E,
        "E": sp.E,
        "ln": sp.log,
        "log": sp.log,
        "sin": sp.sin,
        "cos": sp.cos,
        "sqrt": sp.sqrt,
        "exp": sp.exp,
    }
    s = (
        tex_src.replace("\\cdot", "*")
        .replace("\\times", "*")
        .replace("\\,", "")
        .replace("\\;", "")
        .replace("\\left", "")
        .replace("\\right", "")
        .replace("\\mathrm{e}", "e")
        .replace("\\mathrm{E}", "e")
    )
    s = re.sub(r"\\dfrac\{([^}]+)\}\{([^}]+)\}", r"(\1)/(\2)", s)
    s = re.sub(r"\\frac\{([^}]+)\}\{([^}]+)\}", r"(\1)/(\2)", s)
    s = s.replace("\\ln", "ln").replace("\\log", "log").replace("\\sqrt", "sqrt")
    s = s.replace("\\exp", "exp")
    s = s.replace("{", "").replace("}", "")
    s = s.replace("^", "**")
    s = re.sub(r"\\", "", s)
    return sp.sympify(s, locals=local), vsym


def top_level_split_on_equals(s: str) -> list[str]:
    parts: list[str] = []
    buf: list[str] = []
    depth = 0
    i = 0
    while i < len(s):
        c = s[i]
        if c == "{":
            depth += 1
            buf.append(c)
            i += 1
            continue
        if c == "}":
            depth = max(0, depth - 1)
            buf.append(c)
            i += 1
            continue
        if depth == 0 and c == "=":
            prev = "".join(buf[-12:])
            if any(prev.endswith(suf) for suf in ("\\neq", "\\equiv", "\\approx", "\\leq", "\\geq", "\\le", "\\ge", "\\ne", "=")):
                buf.append(c)
                i += 1
                continue
            if i + 1 < len(s) and s[i + 1] == "=":
                buf.append(c)
                i += 1
                continue
            parts.append("".join(buf).strip())
            buf = []
            i += 1
            continue
        buf.append(c)
        i += 1
    parts.append("".join(buf).strip())
    return [p for p in parts if p]


def expand_display_inner(inner: str) -> list[str]:
    s = re.sub(r"\s+", " ", inner.strip())
    if not s:
        return []
    if any(tok in s for tok in (r"\begin{", r"\matrix", r"\cases", "&")):
        return [s]
    if r"\qquad" in s and s.count("=") >= 1:
        chunks = re.split(r"\\qquad\\text\{i\.e\.\}\\qquad|\\qquad", s)
        out: list[str] = []
        for ch in chunks:
            ch = ch.strip().strip(",").strip()
            if not ch or "i.e." in ch and len(ch) < 20:
                continue
            out.extend(expand_display_inner(ch))
        return out or [s]
    if IMPLIES_RE.search(s):
        pieces = [p.strip(" \n,;") for p in IMPLIES_RE.split(s) if p and p.strip(" \n,;")]
        out = []
        for p in pieces:
            out.extend(expand_display_inner(p) if "=" in p else [p])
        return out
    parts = top_level_split_on_equals(s)
    if len(parts) <= 1:
        return [s]
    out = [f"{parts[0]} = {parts[1]}"]
    for p in parts[2:]:
        out.append(f"= {p}")
    deduped = []
    for st in out:
        key = re.sub(r"\s+", "", st)
        if deduped and re.sub(r"\s+", "", deduped[-1]) == key:
            continue
        deduped.append(st)
    return deduped


def expand_displays(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        steps = expand_display_inner(m.group(1))
        return "\n\n".join(D(st) for st in steps) if steps else m.group(0)

    text = DISPLAY_RE.sub(repl, text)
    parts = []
    pos = 0
    last = None
    for m in DISPLAY_RE.finditer(text):
        parts.append(text[pos : m.start()])
        key = re.sub(r"\s+", "", m.group(1))
        if key == last:
            pos = m.end()
            continue
        parts.append(m.group(0))
        last = key
        pos = m.end()
    parts.append(text[pos:])
    return "".join(parts)


def expand_linear_critical(text: str) -> str:
    def expand_eq_zero(inner: str) -> list[str] | None:
        s = re.sub(r"\s+", "", inner)
        m = re.fullmatch(r"([+-]?\d*)([A-Za-z](?:_[A-Za-z0-9]+|'+)?)([+-]\d+)=0", s)
        if not m:
            return None
        coef, var, const = m.group(1), m.group(2), m.group(3)
        if coef in ("", "+"):
            coef_n, coef_tex = 1, ""
        elif coef == "-":
            coef_n, coef_tex = -1, "-"
        else:
            coef_n, coef_tex = int(coef), str(int(coef))
        const_n = int(const)
        rhs = -const_n
        steps = [f"{coef_tex}{var}{const} = 0"]
        if coef_n == 1:
            steps.append(f"{var} = {rhs}")
        elif coef_n == -1:
            steps.append(f"-{var} = {rhs}")
            steps.append(f"{var} = {-rhs}")
        else:
            steps.append(f"{coef_tex}{var} = {rhs}")
            if rhs % coef_n == 0:
                steps.append(f"{var} = {rhs // coef_n}")
            else:
                from math import gcd
                g = gcd(abs(rhs), abs(coef_n))
                num, den = rhs // g, coef_n // g
                if den < 0:
                    num, den = -num, -den
                steps.append(f"{var} = \\dfrac{{{num}}}{{{den}}}")
        return steps

    def repl(m: re.Match[str]) -> str:
        steps = expand_eq_zero(m.group(1))
        if not steps:
            return m.group(0)
        return "\n\n".join(D(st) for st in steps)

    return re.sub(
        r"\$\$\s*([+-]?\d*[A-Za-z][A-Za-z0-9_']*[+-]\d+\s*=\s*0)\s*\$\$",
        repl,
        text,
    )


def expand_sum_eval(text: str) -> str:
    def unpack(inner: str) -> list[str] | None:
        s = inner.replace("\n", " ").strip()
        m = re.match(r"^(.+?)\s*=\s*([+\-]?\d+(?:[+\-]\d+){1,})\s*$", s)
        if not m:
            return None
        lhs, rhs = m.group(1).strip(), m.group(2).strip()
        if "\\" in lhs and ("frac" in lhs or "dfrac" in lhs):
            return None
        tokens = re.findall(r"[+\-]?\d+", rhs)
        if len(tokens) < 2:
            return None
        nums = [int(t) for t in tokens]
        steps = [f"{lhs} = {rhs}"]
        running = nums[0]
        for n in nums[1:]:
            prev = running
            running = running + n
            op = "+" if n >= 0 else "-"
            steps.append(f"{prev} {op} {abs(n)} = {running}")
        steps.append(f"{lhs} = {running}")
        return steps

    def repl(m: re.Match[str]) -> str:
        steps = unpack(m.group(1))
        return "\n\n".join(D(st) for st in steps) if steps else m.group(0)

    return DISPLAY_RE.sub(repl, text)


def expand_gives_jumps(text: str) -> str:
    return re.sub(
        r"\b(giving|gives|yields)\s+\$([^$]+)\$",
        lambda m: f"{m.group(1)}\n\n$$\n{m.group(2).strip()}\n$$",
        text,
        flags=re.I,
    )


def expand_frac_cancel(text: str) -> str:
    """Unpack dfrac{Ah+Bh+Ch}{h}=... into cancel steps."""

    def unpack(inner: str) -> list[str] | None:
        s = re.sub(r"\s+", "", inner)
        m = re.match(r"^\\dfrac\{([^}]+)\}\{([A-Za-z])\}=(.+)$", s)
        if not m:
            return None
        num, h, rhs = m.group(1), m.group(2), m.group(3)
        if h not in num:
            return None
        # term split
        terms = re.findall(r"[+\-]?[^+\\-]+", num)
        if len(terms) < 2:
            return None
        divided = []
        for t in terms:
            sign = "+"
            body = t
            if t[0] in "+-":
                sign, body = t[0], t[1:]
            if body.endswith(f"{h}^{{2}}") or body.endswith(f"{h}^2"):
                coef = body[: -len(f"{h}^{{2}}")] if "^{" in body else body[: -len(f"{h}^2")]
                if not coef:
                    coef = "1"
                divided.append(f"{sign}{coef}{h}")
            elif body.endswith(h):
                coef = body[: -len(h)]
                if not coef:
                    coef = "1"
                divided.append(f"{sign}{coef}")
            else:
                return None
        div_tex = "".join(divided)
        if div_tex.startswith("+"):
            div_tex = div_tex[1:]
        return [
            f"\\dfrac{{{num}}}{{{h}}}",
            f"= {div_tex}",
            f"= {rhs}",
        ]

    def repl(m: re.Match[str]) -> str:
        steps = unpack(m.group(1))
        return "\n\n".join(D(st) for st in steps) if steps else m.group(0)

    return DISPLAY_RE.sub(repl, text)


def strip_fillers(text: str) -> str:
    for fr in FILLER_RES:
        text = fr.sub("\n\n", text)
    return text


def inject_product_before_first_deriv(text: str) -> str:
    if not re.search(r"product rule", text, re.I):
        return text
    if re.search(r"u'\([a-z]\)\s*=", text):
        return text
    m = re.search(
        r"\$([A-Za-z\\]+)\(([A-Za-z])\)\s*=\s*([^$]+?)\\cdot\s*([^$]+?)\$",
        text,
    )
    if not m:
        return text
    fname, var, left, right = (
        m.group(1).replace("\\", ""),
        m.group(2),
        m.group(3).strip().rstrip(".,;"),
        m.group(4).strip().rstrip(".,;"),
    )
    dm = None
    for dm_cand in DISPLAY_RE.finditer(text):
        if "'" in dm_cand.group(1):
            dm = dm_cand
            break
    if dm is None:
        dm = DISPLAY_RE.search(text)
    if dm is None:
        return text

    u_tex, v_tex = left, right
    u_d_tex = v_d_tex = None
    try:
        u_expr, vsym = parse_tex_expr(left, var)
        v_expr, _ = parse_tex_expr(right, var)
        u_d_tex = tex(sp.diff(u_expr, vsym))
        v_d_tex = tex(sp.diff(v_expr, vsym))
        u_tex = tex(u_expr)
        v_tex = tex(v_expr)
    except Exception:
        pass

    parts = [
        "Write the product as two factors and differentiate each factor before combining.",
        "",
        D(f"{fname}({var}) = {left} \\cdot {right}"),
        "",
        D(f"u({var}) = {u_tex}"),
        "",
        D(f"v({var}) = {v_tex}"),
        "",
    ]
    if u_d_tex and v_d_tex:
        parts += [
            D(f"u'({var}) = {u_d_tex}"),
            "",
            D(f"v'({var}) = {v_d_tex}"),
            "",
            D(f"{fname}'({var}) = ({u_d_tex})\\cdot({v_tex}) + ({u_tex})\\cdot({v_d_tex})"),
            "",
            "Only after that product-rule expansion do we simplify to the claimed form.",
            "",
        ]
    else:
        parts += [
            D(f"{fname}'({var}) = u'({var})\\,v({var}) + u({var})\\,v'({var})"),
            "",
            "Only after that product-rule expansion do we simplify to the claimed form.",
            "",
        ]
    return text[: dm.start()] + "\n".join(parts) + "\n" + text[dm.start() :]


def inject_quotient_before_first_deriv(text: str) -> str:
    if not re.search(r"quotient rule", text, re.I):
        return text
    if re.search(r"u'\([a-z]\)\s*=", text):
        return text
    m = re.search(
        r"\$([A-Za-z\\]+)\(([A-Za-z])\)\s*=\s*\\dfrac\{([^}]+)\}\{([^}]+)\}\$",
        text,
    )
    if not m:
        m = re.search(
            r"([A-Za-z])\(([A-Za-z])\)\s*=\s*\\dfrac\{([^}]+)\}\{([^}]+)\}",
            text,
        )
    if not m:
        return text
    fname, var, num, den = m.group(1).replace("\\", ""), m.group(2), m.group(3), m.group(4)
    dm = DISPLAY_RE.search(text)
    if not dm:
        return text

    u_d_tex = v_d_tex = None
    try:
        u_expr, vsym = parse_tex_expr(num, var)
        v_expr, _ = parse_tex_expr(den, var)
        u_d_tex = tex(sp.diff(u_expr, vsym))
        v_d_tex = tex(sp.diff(v_expr, vsym))
    except Exception:
        pass

    parts = [
        "Name the numerator and denominator, differentiate each, then apply the quotient rule before simplifying.",
        "",
        D(f"{fname}({var}) = \\dfrac{{{num}}}{{{den}}}"),
        "",
        D(f"u({var}) = {num}"),
        "",
        D(f"v({var}) = {den}"),
        "",
    ]
    if u_d_tex and v_d_tex:
        parts += [
            D(f"u'({var}) = {u_d_tex}"),
            "",
            D(f"v'({var}) = {v_d_tex}"),
            "",
            D(f"{fname}'({var}) = \\dfrac{{({u_d_tex})({den}) - ({num})({v_d_tex})}}{{({den})^{{2}}}}"),
            "",
        ]
    else:
        parts += [
            D(f"{fname}'({var}) = \\dfrac{{u'({var})\\,v({var}) - u({var})\\,v'({var})}}{{[v({var})]^{{2}}}}"),
            "",
        ]
    return text[: dm.start()] + "\n".join(parts) + "\n" + text[dm.start() :]


def inject_chain_before_first_deriv(text: str) -> str:
    if not re.search(r"chain rule", text, re.I):
        return text
    if re.search(r"inner derivative|outer power|inner slope|\\text\{outer", text, re.I):
        return text
    m = re.search(
        r"\$([A-Za-z\\]+)\(([A-Za-z])\)\s*=\s*\(([^)]+)\)\^\{?(\d+)\}?\$",
        text,
    )
    if not m:
        return text
    fname, var, inner, power = m.group(1).replace("\\", ""), m.group(2), m.group(3), m.group(4)
    dm = DISPLAY_RE.search(text)
    if not dm:
        return text
    inner_d_tex = None
    try:
        inner_expr, vsym = parse_tex_expr(inner, var)
        inner_d_tex = tex(sp.diff(inner_expr, vsym))
    except Exception:
        pass
    parts = [
        "Name the outer power and the inner expression, then multiply by the inner derivative before simplifying.",
        "",
        D(f"{fname}({var}) = ({inner})^{{{power}}}"),
        "",
        D(f"\\text{{outer: }}w^{{{power}}}\\quad\\text{{with }}w = {inner}"),
        "",
    ]
    if inner_d_tex:
        parts += [
            D(f"\\dfrac{{d}}{{d{var}}}({inner}) = {inner_d_tex}"),
            "",
            D(f"{fname}'({var}) = {power}({inner})^{{{int(power)-1}}} \\cdot ({inner_d_tex})"),
            "",
        ]
    return text[: dm.start()] + "\n".join(parts) + "\n" + text[dm.start() :]


def unpack_inline_math_to_displays(text: str) -> str:
    if len(DISPLAY_RE.findall(text)) > 0:
        return text
    inlines = re.findall(r"(?<!\$)\$([^$]{3,120})\$(?!\$)", text)
    eq_inlines = [s for s in inlines if "=" in s]
    if not eq_inlines:
        return text
    body = CLOSER_RE.sub("", text).rstrip()
    verd_m = HEADER_RE.match(body)
    verd = verd_m.group(2) if verd_m else "True"
    blocks = []
    seen = set()
    for s in eq_inlines[:6]:
        key = re.sub(r"\s+", "", s)
        if key in seen:
            continue
        seen.add(key)
        for st in expand_display_inner(s):
            blocks.append(D(st))
    if not blocks:
        return text
    return tidy(body + "\n\n" + "\n\n".join(blocks) + f"\n\nSo the statement is {verd}.") + "\n"


def normalize_header_closer(text: str, letter: str, is_true: bool) -> str:
    verd = "True" if is_true else "False"
    body = text.strip()
    if HEADER_RE.match(body):
        body = HEADER_RE.sub(f"**{letter}.** → {verd}", body, count=1)
    else:
        body = f"**{letter}.** → {verd}\n\n{body.lstrip()}"
    body = strip_fillers(body)
    body = CLOSER_RE.sub("", body).rstrip()
    body = re.sub(
        rf"(?:Since\s+[^\n]+?[,.]\s*)?(?:the|So the) statement is {verd}\.?\s*$",
        "",
        body,
        flags=re.I,
    ).rstrip()
    body = re.sub(r"\n{3,}", "\n\n", body)
    body = body.rstrip() + f"\n\nSo the statement is {verd}."
    body = re.sub(rf"(So the statement is {verd}\.\s*)+$", f"So the statement is {verd}.", body)
    return tidy(body) + "\n"


def deepen_one(expl: str, letter: str, is_true: bool, *, statement: str = "") -> str:
    body = expl.strip()
    body = inject_product_before_first_deriv(body)
    body = inject_quotient_before_first_deriv(body)
    body = inject_chain_before_first_deriv(body)
    body = unpack_inline_math_to_displays(body)
    body = expand_gives_jumps(body)
    body = expand_displays(body)
    body = expand_sum_eval(body)
    body = expand_linear_critical(body)
    body = expand_frac_cancel(body)
    body = expand_displays(body)
    body = normalize_header_closer(body, letter, is_true)
    return body


def audit_expl(expl: str, letter: str, is_true: bool, cid: str) -> list[str]:
    errs = []
    verd = "True" if is_true else "False"
    if not expl.strip().startswith(f"**{letter}.** → {verd}"):
        errs.append(f"{cid} {letter}: bad header")
    if expl.count("$$") % 2:
        errs.append(f"{cid} {letter}: unbalanced $$")
    if f"So the statement is {verd}." not in expl:
        errs.append(f"{cid} {letter}: missing closer")
    if re.search(r"\bQED\b", expl, re.I):
        errs.append(f"{cid} {letter}: QED")
    for dm in DISPLAY_RE.finditer(expl):
        if dm.group(1).count("=") >= 3 and r"\begin{" not in dm.group(1):
            errs.append(f"{cid} {letter}: compressed multi-eq")
            break
    return errs


def process_ts_range(start: int, end: int) -> None:
    text = TS_PATH.read_text(encoding="utf-8")
    pattern = re.compile(
        r"answer_key:\s*\[([^\]]+)\]\s*,\s*tactical_explanations:\s*\[(.*?)\]\s*,",
        re.S,
    )
    matches = list(pattern.finditer(text))
    case_ids = re.findall(r'case_id:\s*"([^"]+)"', text)
    print(f"found {len(matches)} blocks, {len(case_ids)} case_ids")
    total = changed = 0
    errs_all = []
    ids = []
    new_text = text
    for i in range(min(end, len(matches)) - 1, start - 1, -1):
        m = matches[i]
        cid = case_ids[i] if i < len(case_ids) else f"idx{i}"
        ids.append(cid)
        keys = [
            tok.strip().lower() == "true"
            for tok in m.group(1).split(",")
            if tok.strip().lower() in ("true", "false")
        ]
        block = m.group(2)
        strings = list(TS_STRING_RE.finditer(block))
        cid_pos = text.find(f'case_id: "{cid}"')
        stmts: list[str] = []
        if cid_pos >= 0:
            sm = re.search(
                r"statements:\s*\[(.*?)\]\s*,\s*answer_key",
                text[cid_pos : cid_pos + 8000],
                re.S,
            )
            if sm:
                stmts = [
                    s.replace('\\"', '"').replace("\\\\", "\\")
                    for s in re.findall(r'"((?:\\.|[^"\\])*)"', sm.group(1))
                ]
        new_block = block
        for j, sm in list(enumerate(strings))[::-1]:
            latex = sm.group(1).replace("\\\\", "\\")
            letter = LETTERS[j] if j < 5 else "A"
            is_true = keys[j] if j < len(keys) else True
            hm = HEADER_RE.match(latex.strip())
            if hm:
                letter = hm.group(1).upper()
            stmt = stmts[j] if j < len(stmts) else ""
            new_latex = deepen_one(latex, letter, is_true, statement=stmt)
            total += 1
            if new_latex.rstrip("\n") != latex.rstrip("\n"):
                changed += 1
            errs_all.extend(audit_expl(new_latex, letter, is_true, cid))
            new_src = new_latex.rstrip("\n").replace("\\", "\\\\").replace("`", "\\`")
            new_block = new_block[: sm.start()] + "`" + new_src + "`" + new_block[sm.end() :]
        replacement = f"answer_key: [{m.group(1)}],\n    tactical_explanations: [{new_block}],"
        new_text = new_text[: m.start()] + replacement + new_text[m.end() :]
    TS_PATH.write_text(new_text, encoding="utf-8")
    ids_fwd = list(reversed(ids))
    print(f"core[{start}:{end}]: total={total} changed={changed} {ids_fwd[0]}..{ids_fwd[-1]} errs={len(errs_all)}")
    for e in errs_all[:25]:
        print(" ", e)


def process_exam_range(start: int, end: int) -> None:
    data = json.loads(EXAM_PATH.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    total = changed = 0
    errs_all = []
    ids = []
    for i in range(start, min(end, len(tasks))):
        task = tasks[i]
        cid = task["case_id"]
        ids.append(cid)
        keys = task["answer_key"]
        stmts = task.get("statements") or []
        new_expls = []
        for j, expl in enumerate(task["tactical_explanations"]):
            letter = LETTERS[j]
            is_true = bool(keys[j])
            stmt = stmts[j] if j < len(stmts) else ""
            new = deepen_one(expl, letter, is_true, statement=stmt)
            total += 1
            if new.rstrip("\n") != expl.rstrip("\n"):
                changed += 1
            errs_all.extend(audit_expl(new, letter, is_true, cid))
            new_expls.append(new if new.endswith("\n") else new + "\n")
        task["tactical_explanations"] = new_expls
    EXAM_PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"exam[{start}:{end}]: total={total} changed={changed} {ids[0]}..{ids[-1]} errs={len(errs_all)}")
    for e in errs_all[:25]:
        print(" ", e)


def audit(which: str) -> None:
    if which == "exam":
        tasks = json.loads(EXAM_PATH.read_text())["tasks"]
        expls_iter = [(t["case_id"], t["answer_key"], t["tactical_explanations"]) for t in tasks]
    else:
        text = TS_PATH.read_text()
        pattern = re.compile(
            r"answer_key:\s*\[([^\]]+)\]\s*,\s*tactical_explanations:\s*\[(.*?)\]\s*,",
            re.S,
        )
        case_ids = re.findall(r'case_id:\s*"([^"]+)"', text)
        expls_iter = []
        for i, m in enumerate(pattern.finditer(text)):
            keys = [
                tok.strip().lower() == "true"
                for tok in m.group(1).split(",")
                if tok.strip().lower() in ("true", "false")
            ]
            expls = [sm.group(1).replace("\\\\", "\\") for sm in TS_STRING_RE.finditer(m.group(2))]
            expls_iter.append((case_ids[i], keys, expls))
    errs = []
    thin = []
    dens = []
    for cid, keys, expls in expls_iter:
        for j, expl in enumerate(expls):
            letter = LETTERS[j]
            is_true = bool(keys[j]) if j < len(keys) else True
            errs.extend(audit_expl(expl, letter, is_true, cid))
            n = len(DISPLAY_RE.findall(expl))
            dens.append(n)
            if n < 3:
                thin.append((cid, letter, n, len(expl)))
    avg = sum(dens) / len(dens) if dens else 0
    print(f"blocks={len(expls_iter)} errs={len(errs)} thin(<3)={len(thin)} avg_disp={avg:.1f}")
    for e in errs[:30]:
        print(" ", e)


def main() -> None:
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        return
    if args[0] == "audit":
        audit(args[1] if len(args) > 1 else "core")
        return
    if args[0] == "core":
        process_ts_range(int(args[1]), int(args[2]))
        return
    if args[0] == "exam":
        process_exam_range(int(args[1]), int(args[2]))
        return
    print("unknown", args)


if __name__ == "__main__":
    main()
