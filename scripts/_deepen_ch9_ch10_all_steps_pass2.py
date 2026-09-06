#!/usr/bin/env python3
"""Second-pass deepen: unpack ALL multi-step arithmetic in Ch7–8 explanations.

Gold density: MATH 6.113 E.
One task at a time (case_id ascending); audit after each letter.
Does not change statements or answer_key.
"""
from __future__ import annotations

import argparse
import json
import re
from fractions import Fraction
from pathlib import Path

ROOT = Path("/workspace")
FILES = [
    ("json", ROOT / "src/data/math-ch7-linear-quadratic.json"),
    ("json", ROOT / "src/data/math-ch7-mixed-exam.json"),
    ("ts", ROOT / "src/data/math-ch8-power-functions.ts"),
    ("json", ROOT / "src/data/math-ch8-exam.json"),
]
DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)
LETTERS = "ABCDE"


def tidy(s: str) -> str:
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def norm(inner: str) -> str:
    return re.sub(r"\s+", " ", inner).strip()


def D(inner: str) -> str:
    return f"$${norm(inner)}$$"


def split_eq(s: str) -> list[str]:
    protected: list[str] = []

    def prot(m: re.Match) -> str:
        protected.append(m.group(0))
        return f"«P{len(protected)-1}»"

    tmp = re.sub(
        r"\\(?:neq|leq|geq|leqslant|geqslant|approx|equiv|iff|Rightarrow|"
        r"Leftarrow|Leftrightarrow|Longleftrightarrow|Longrightarrow|implies)",
        prot,
        s,
    )
    parts = tmp.split("=")

    def unprot(chunk: str) -> str:
        return re.sub(r"«P(\d+)»", lambda m: protected[int(m.group(1))], chunk)

    return [unprot(p).strip() for p in parts]


def tokenize(text: str) -> list[tuple[str, str]]:
    parts: list[tuple[str, str]] = []
    pos = 0
    for m in DISPLAY_RE.finditer(text):
        if m.start() > pos:
            parts.append(("prose", text[pos : m.start()]))
        parts.append(("disp", norm(m.group(1))))
        pos = m.end()
    if pos < len(text):
        parts.append(("prose", text[pos:]))
    return parts


def reassemble(parts: list[tuple[str, str]]) -> str:
    buf: list[str] = []
    for kind, val in parts:
        if kind == "prose":
            buf.append(val)
        else:
            if buf and not buf[-1].endswith("\n") and buf[-1]:
                buf.append("\n\n")
            buf.append(D(val))
    return "".join(buf)


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
    text = re.sub(
        r"(?i)so the statement is (?:True|False)\.\s*$",
        f"So the statement is {verd}.",
        text,
    )
    if not re.search(r"So the statement is (?:True|False)\.\s*$", text):
        text = text.rstrip() + f"\n\nSo the statement is {verd}."
    return tidy(text)


# ── unpack a=b=c and implication packs ──────────────────────────────────────


def expand_equals_chain(body: str) -> str | None:
    s = norm(body)
    if r"\begin{" in s or r"\qquad" in s or r"\quad" in s:
        return None
    if re.search(
        r"\\(?:neq|leq|geq|leqslant|geqslant|approx|equiv|iff|Rightarrow|"
        r"Leftarrow|Leftrightarrow|Longleftrightarrow|Longrightarrow|implies)",
        s,
    ):
        return None
    parts = split_eq(s)
    if len(parts) < 3:
        return None
    blocks = [D(f"{parts[0]}={parts[1]}")]
    lhs = parts[0].strip()
    simple = bool(
        re.match(r"^[A-Za-z\\][A-Za-z0-9_\\{}()]*$", lhs)
        or re.match(r"^[A-Za-z]\\?\w*\([^)]*\)$", lhs)
        or re.match(r"^\\Delta$", lhs)
        or re.match(r"^[A-Za-z]_\{?[A-Za-z0-9]+\}?$", lhs)
        or re.match(r"^[A-Za-z]\([^)]+\)$", lhs)
        or re.match(r"^\\(?:frac|bigl|tfrac).*", lhs)
    )
    for p in parts[2:]:
        blocks.append(D(f"{lhs}={p}") if simple else D(f"={p}"))
    return "\n\n".join(blocks)


def expand_Rightarrow_pack(body: str) -> str | None:
    s = norm(body)
    if r"\Rightarrow" not in s and r"\implies" not in s:
        return None
    parts = [p.strip() for p in re.split(r"\\(?:Rightarrow|implies)", s) if p.strip()]
    if len(parts) < 2:
        return None
    # keep each piece as its own display
    return "\n\n".join(D(p) for p in parts)


def expand_one_display(body: str) -> str:
    for fn in (expand_equals_chain, expand_Rightarrow_pack):
        out = fn(body)
        if out is not None:
            return out
    return D(body)


def expand_all_displays(text: str) -> str:
    prev, cur = None, text
    for _ in range(8):
        if cur == prev:
            break
        prev, cur = cur, DISPLAY_RE.sub(lambda m: expand_one_display(m.group(1)), cur)
    return cur


# ── fix misattributed orphan arithmetic ─────────────────────────────────────


def fix_orphan_arith_lhs(text: str) -> str:
    """Turn `$$(-1)+2$$\n\n$$g(x)=1$$` into sum/product with correct result LHS."""
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "disp":
            out.append((kind, val))
            i += 1
            continue
        is_orphan = (
            "=" not in val
            and not re.search(r"[<>]|\\le|\\ge|\\neq|\\text|\\qquad|\\quad|\\iff", val)
            and bool(re.search(r"[+\-]|\\cdot|\\times", val))
            and not re.match(r"^\\(?:Delta|text)", val)
            and not re.match(r"^[A-Za-z]\\?\w*\(", val)  # not a bare call
        )
        if not is_orphan:
            out.append((kind, val))
            i += 1
            continue
        j = i + 1
        while j < len(parts) and parts[j][0] == "prose" and not parts[j][1].strip():
            j += 1
        if j >= len(parts) or parts[j][0] != "disp":
            out.append((kind, val))
            i += 1
            continue
        nxt = parts[j][1]
        m = re.match(r"^(.+?)=(.+)$", nxt)
        if not m:
            out.append((kind, val))
            i += 1
            continue
        lhs, rhs = m.group(1).strip(), m.group(2).strip()
        # strip trailing \text{...}
        rhs_clean = re.sub(r"\\text\{[^}]*\}.*$", "", rhs).strip().rstrip(",").strip()
        prose_before = ""
        for k in range(i - 1, -1, -1):
            if parts[k][0] == "prose" and parts[k][1].strip():
                prose_before = parts[k][1]
                break
        low = prose_before.lower()
        if "product" in low or "\\cdot" in val or "\\times" in val:
            label = "P"
        elif "midpoint" in low or ("axis" in low and "\\frac{" in val):
            label = "x"
        elif "sum" in low or "add" in low:
            label = "S"
        elif "difference" in low or "above" in low or "height" in low or "sits" in low:
            label = "h"
        elif "slope" in low:
            label = "m"
        elif "\\cdot" in val:
            label = "P"
        elif "\\frac{" in val:
            label = "x"
        else:
            label = "S"

        bad_lhs = bool(
            re.match(r"^[fghpqrstuvwCFRHPV]\(x\)", lhs)
            or lhs in ("g(x)-f(x)", "f(x)-g(x)")
            or r"\text{" in rhs
        )
        # Always rewrite orphan + following numeric result into labeled steps
        if bad_lhs or re.match(r"^-?\d", rhs_clean) or rhs_clean.startswith("\\frac") or rhs_clean.startswith("\\tfrac"):
            out.append(("disp", f"{label}={val}"))
            out.append(("disp", f"{label}={rhs_clean}"))
            i = j + 1
            continue
        out.append((kind, val))
        i += 1
    return reassemble(out)


# ── unpack polynomial evaluation jumps ──────────────────────────────────────


def _pow_eval(expr: str) -> str | None:
    """Replace simple integer powers with evaluated form once."""
    def powi(m: re.Match) -> str:
        base, exp = int(m.group(1)), int(m.group(2))
        return str(base**exp)

    s2 = re.sub(r"(?<![A-Za-z{])(\d+)\^\{(\d+)\}", powi, expr)
    s2 = re.sub(r"(?<![A-Za-z{])(\d+)\^(\d+)", powi, s2)
    return s2 if s2 != expr else None


def _cdot_eval_once(expr: str) -> str | None:
    """Evaluate one integer a\\cdot b factor."""
    m = re.search(r"(?<![A-Za-z{])(\d+)\\cdot(-?\d+)", expr)
    if not m:
        m = re.search(r"(?<![A-Za-z{])(\d+)[·.](-?\d+)", expr)
    if not m:
        return None
    a, b = int(m.group(1)), int(m.group(2))
    return expr[: m.start()] + str(a * b) + expr[m.end() :]


def unpack_eval_display(lhs: str, rhs: str) -> list[str] | None:
    """Produce intermediate RHS steps for a poly/power evaluation."""
    steps = [rhs]
    cur = rhs
    # powers first
    for _ in range(6):
        nxt = _pow_eval(cur)
        if not nxt or nxt == cur:
            break
        if nxt not in steps:
            steps.append(nxt)
        cur = nxt
    # then products
    for _ in range(8):
        nxt = _cdot_eval_once(cur)
        if not nxt or nxt == cur:
            break
        if nxt not in steps:
            steps.append(nxt)
        cur = nxt
    if len(steps) <= 1:
        return None
    return [f"{lhs}={s}" for s in steps]


def expand_numeric_eval_chain(text: str) -> str:
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "disp":
            out.append((kind, val))
            i += 1
            continue
        m = re.match(r"^(.+?)=(.+)$", val)
        if not m or not re.search(r"\^|\\cdot", m.group(2)):
            out.append((kind, val))
            i += 1
            continue
        lhs, rhs = m.group(1).strip(), m.group(2).strip()
        chain = unpack_eval_display(lhs, rhs)
        if not chain:
            out.append((kind, val))
            i += 1
            continue
        # collect already-present subsequent displays with same lhs
        existing = {val}
        j = i + 1
        while j < len(parts):
            if parts[j][0] == "prose" and not parts[j][1].strip():
                j += 1
                continue
            if parts[j][0] != "disp":
                break
            mm = re.match(r"^(.+?)=(.+)$", parts[j][1])
            if mm and mm.group(1).strip() == lhs:
                existing.add(parts[j][1])
                j += 1
                continue
            if parts[j][1].lstrip().startswith("="):
                existing.add(f"{lhs}{parts[j][1].lstrip()}")
                j += 1
                continue
            break
        # merge: emit full chain, skip duplicates already present
        emitted = set()
        for step in chain:
            if step not in emitted:
                out.append(("disp", step))
                emitted.add(step)
        # if final existing step not in chain, append it
        for e in list(existing):
            if e not in emitted and e.startswith(lhs + "="):
                # only append if it looks like a further simplification
                out.append(("disp", e))
                emitted.add(e)
        # skip consumed displays (keep non-blank prose at j)
        i = j if j > i else i + 1
        # if we only consumed i, advance
        if i == 0:
            i = 1
    return reassemble(out)


# ── deepen completing-the-square compressed forms ───────────────────────────


def deepen_complete_square_letter(text: str, stmt: str, context: str) -> str | None:
    """If this is a completing-the-square claim, expand to half-b / square / rewrite."""
    if "complet" not in text.lower() and "complet" not in stmt.lower():
        return None
    # already dense enough?
    if (text.count("$$") // 2 >= 8 and "\\frac{b}{2}" in text) or (
        text.count("$$") // 2 >= 7 and "x=-" in text
    ):
        # still unpack evals inside
        return None

    # Extract claimed completed form from statement
    m = re.search(
        r"gives?\s+\$([^$]+)\$",
        stmt,
    )
    claimed = m.group(1).strip() if m else None

    # Extract original polynomial from context — prefer g(x)=, q(x)=, p(x)=
    poly = None
    name = "g"
    for nm in ("g", "q", "p", "h", "R", "F", "P", "C", "H"):
        mm = re.search(rf"\${nm}\(x\)\s*=\s*([^$]+?)\$", context)
        if mm:
            poly, name = mm.group(1).strip(), nm
            break
        mm = re.search(rf"{nm}\(x\)\s*=\s*([^$,.]+)", context)
        if mm:
            poly, name = mm.group(1).strip(), nm
            break

    letter_m = re.match(r"^\*\*([A-E])\.\*\* → (True|False)", text.strip())
    if not letter_m:
        return None
    letter, verd = letter_m.group(1), letter_m.group(2)
    truth = verd == "True"

    # Parse monic or leading ax^2+bx+c roughly from poly latex
    if not poly:
        return None

    coeffs = _parse_quad_coeffs(poly)
    if not coeffs:
        return None
    a, b, c = coeffs

    # Build stepped completing-the-square (true path) or counterexample (false)
    lines: list[str] = [
        f"**{letter}.** → {verd}",
        "",
        "Completing the square isolates the axis shift from half the middle coefficient, "
        "then restores the constant so the rewritten formula matches the original polynomial.",
        "",
        D(f"{name}(x)={poly}"),
    ]
    if a != 1 and a != -1:
        lines += [
            "",
            "Factor the leading coefficient out of the quadratic and linear terms.",
            "",
            D(f"{name}(x)={_tex_int(a)}\\left(x^{2}+{_tex_frac(b, a)}x\\right)+{_tex_int(c)}"),
        ]
        half = Fraction(b, 2 * a) if a else Fraction(0)
    else:
        half = Fraction(b, 2)

    lines += [
        "",
        "Halve the middle coefficient of the monic quadratic factor.",
        "",
        D(f"\\frac{{b}}{{2a}}={_tex_frac(b, 2 * a)}"),
        "",
        D(f"\\left(\\frac{{b}}{{2a}}\\right)^{2}={_tex_frac(b * b, 4 * a * a)}"),
    ]

    h = -Fraction(b, 2 * a)
    k = Fraction(4 * a * c - b * b, 4 * a)

    lines += [
        "",
        "The axis shift is the opposite of that half-coefficient.",
        "",
        D(r"h=-\frac{b}{2a}"),
        "",
        D(f"h={_tex_frac(h.numerator, h.denominator)}"),
        "",
        "Evaluate the original rule at the axis to read the completed-square height.",
        "",
    ]
    # Stepped substitution at h
    h_tex = _tex_frac(h.numerator, h.denominator)
    # Build ax^2+bx+c at x=h with arithmetic steps
    if a == 1 and h.denominator == 1:
        hv = h.numerator
        lines += [
            D(f"{name}({hv})=({hv})^{{2}}+({b})\\cdot({hv})+({c})"),
            "",
            D(f"{name}({hv})={hv * hv}+({b * hv})+({c})"),
            "",
            D(f"{name}({hv})={hv * hv + b * hv + c}"),
        ]
    else:
        lines += [
            D(f"{name}\\left({h_tex}\\right)={_tex_frac(k.numerator, k.denominator)}"),
        ]
    lines += [
        "",
        "Assemble the stretch, the shift, and the height.",
        "",
    ]

    # Build (x-h)^2 or (x+|h|)^2 when h is negative
    if h >= 0:
        shift_tex = f"\\left(x-{_tex_frac(h.numerator, h.denominator)}\\right)^{2}"
        if h.denominator == 1 and h.numerator != 0:
            shift_tex = f"(x-{h.numerator})^{2}"
        elif h == 0:
            shift_tex = "x^{2}"
    else:
        hp = -h
        shift_tex = f"\\left(x+{_tex_frac(hp.numerator, hp.denominator)}\\right)^{2}"
        if hp.denominator == 1:
            shift_tex = f"(x+{hp.numerator})^{2}"

    k_tex = _tex_frac(k.numerator, k.denominator)
    if k >= 0:
        k_part = f"+{k_tex}" if k != 0 else ""
    else:
        k_part = f"-{_tex_frac((-k).numerator, (-k).denominator)}"

    if a == 1:
        assembled = f"{shift_tex}{k_part}"
    elif a == -1:
        assembled = f"-{shift_tex}{k_part}"
    else:
        assembled = f"{_tex_int(a)}{shift_tex}{k_part}"

    lines.append(D(f"{name}(x)={assembled}"))

    if claimed and truth:
        lines += [
            "",
            "That matches the claimed completed-square form.",
            "",
            D(claimed),
        ]
    elif claimed and not truth:
        lines += [
            "",
            "Compare with the claimed form.",
            "",
            D(claimed),
            "",
            "The two formulas disagree (the shift or the constant is wrong).",
        ]
    lines += ["", f"So the statement is {verd}."]
    return "\n".join(lines)


def _tex_int(n: int | Fraction) -> str:
    if isinstance(n, Fraction):
        if n.denominator == 1:
            return str(n.numerator)
        return _tex_frac(n.numerator, n.denominator)
    return str(n)


def _tex_frac(num: int, den: int) -> str:
    if den < 0:
        num, den = -num, -den
    f = Fraction(num, den)
    if f.denominator == 1:
        return str(f.numerator)
    if f.numerator < 0:
        return f"-\\frac{{{abs(f.numerator)}}}{{{f.denominator}}}"
    return f"\\frac{{{f.numerator}}}{{{f.denominator}}}"


def _paren_h(h: Fraction) -> str:
    return _tex_frac(h.numerator, h.denominator)


def _parse_quad_coeffs(poly: str) -> tuple[int, int, int] | None:
    """Best-effort parse of ax^2+bx+c from simple latex."""
    s = poly.replace(" ", "")
    s = s.replace("{", "").replace("}", "")
    s = s.replace("\\left", "").replace("\\right", "")
    # normalize ^2
    s = s.replace("x^2", "x^{2}")
    a = b = c = None
    # ax^{2}
    m = re.search(r"([+-]?)(\d*)x\^\{2\}", s)
    if not m:
        return None
    sign = -1 if m.group(1) == "-" else 1
    coef = int(m.group(2)) if m.group(2) else 1
    a = sign * coef
    rest = s[: m.start()] + s[m.end() :]
    # bx
    m2 = re.search(r"([+-])(\d*)x(?!\^)", rest)
    if m2:
        sign = -1 if m2.group(1) == "-" else 1
        coef = int(m2.group(2)) if m2.group(2) else 1
        b = sign * coef
        rest = rest[: m2.start()] + rest[m2.end() :]
    else:
        b = 0
    # constant
    m3 = re.search(r"([+-]?\d+)", rest)
    if m3:
        c = int(m3.group(1))
    else:
        c = 0
    return a, b, c


# ── unpack power-function exponent steps ────────────────────────────────────


def deepen_power_eval(text: str) -> str:
    """Insert intermediate exponent-law / numeric steps for common power patterns."""

    def repl_frac_pow(m: re.Match) -> str:
        # 8^{2/3}=(8^{1/3})^2 style already one step — ensure evaluation follows
        return m.group(0)

    # Pattern: LHS = c * base^{exp} then LHS = c * evaluated — insert base^{exp}=val
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "disp":
            out.append((kind, val))
            i += 1
            continue
        m = re.match(r"^(.+?)=(.+)$", val)
        if not m:
            out.append((kind, val))
            i += 1
            continue
        lhs, rhs = m.group(1).strip(), m.group(2).strip()

        # Case: k( n )^{p} or k\cdot n^{p}
        mpow = re.search(
            r"^(?:(\d+(?:/\d+)?)|(\\d+))?\\?\\,?\\s*(?:\\cdot)?\\s*"
            r"(?:\\left)?\(?(\d+)\)?\^\{([^}]+)\}",
            rhs.replace(" ", ""),
        )
        # Simpler: find N^{E} in rhs
        powers = list(re.finditer(r"(?<![A-Za-z{])(\d+)\^\{([^}]+)\}", rhs))
        powers += list(re.finditer(r"(?<![A-Za-z{])(\d+)\^(\\frac\{[^}]+\}\{[^}]+\})", rhs))

        # Peek next same-lhs display
        j = i + 1
        while j < len(parts) and parts[j][0] == "prose" and not parts[j][1].strip():
            j += 1
        nxt = parts[j][1] if j < len(parts) and parts[j][0] == "disp" else None

        inserted = False
        if powers and nxt:
            nm = re.match(r"^(.+?)=(.+)$", nxt)
            if nm and nm.group(1).strip() == lhs:
                # If next RHS has evaluated the power away, insert power eval displays
                for pm in powers:
                    base = int(pm.group(1))
                    exp = pm.group(2)
                    # integer exponent
                    if re.fullmatch(r"\d+", exp):
                        valp = base ** int(exp)
                        step = f"{base}^{{{exp}}}={valp}"
                        if step not in val and step not in nxt:
                            out.append(("disp", val))
                            out.append(("disp", step))
                            inserted = True
                            break
                    # fraction p/q
                    fm = re.fullmatch(r"\\frac\{(\d+)\}\{(\d+)\}", exp)
                    if fm:
                        p, q = int(fm.group(1)), int(fm.group(2))
                        # a^{p/q} = (a^{1/q})^p
                        out.append(("disp", val))
                        out.append(
                            (
                                "disp",
                                f"{base}^{{\\frac{{{p}}}{{{q}}}}}"
                                f"=\\bigl({base}^{{\\frac{{1}}{{{q}}}}}\\bigr)^{{{p}}}",
                            )
                        )
                        # try integer root
                        root = round(base ** (1 / q))
                        if root ** q == base:
                            out.append(("disp", f"{base}^{{\\frac{{1}}{{{q}}}}}={root}"))
                            out.append(("disp", f"\\bigl({root}\\bigr)^{{{p}}}={root ** p}"))
                        inserted = True
                        break
        if inserted:
            # still emit next later in loop — don't skip nxt; just advanced past current
            i += 1
            continue
        out.append((kind, val))
        i += 1
    return reassemble(out)


def unpack_orphan_product_lines(text: str) -> str:
    """`$$2\\cdot27$$` alone → keep; if preceded by f(...)=2(9)^{3/2}, link LHS."""
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    last_lhs = None
    for kind, val in parts:
        if kind == "disp":
            m = re.match(r"^(.+?)=(.+)$", val)
            if m:
                last_lhs = m.group(1).strip()
                out.append((kind, val))
            elif (
                last_lhs
                and re.search(r"\\cdot|\\times|[+\-]", val)
                and "=" not in val
                and not re.search(r"[<>]|\\le|\\ge|\\text", val)
            ):
                out.append(("disp", f"{last_lhs}={val}"))
            else:
                out.append((kind, val))
        else:
            out.append((kind, val))
            if val.strip():
                # reset lhs only on substantial prose? keep last_lhs across short prose
                pass
    return reassemble(out)


def deepen_axis_formula_steps(text: str) -> str:
    """Ensure x=-b/(2a) arithmetic is fully stepped when compressed to one jump."""
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "disp":
            out.append((kind, val))
            i += 1
            continue
        # Pattern: x=-\frac{n}{2\cdot m} then x=result — insert middle
        m = re.match(
            r"^x=-\\frac\{(-?\d+)\}\{2\\cdot\s*(\d+)\}$",
            val.replace(" ", ""),
        )
        if not m:
            m = re.match(
                r"^x=-\\frac\{(-?\d+)\}\{2\\cdot(\d+)\}$",
                val,
            )
        if m:
            num, den_a = int(m.group(1)), int(m.group(2))
            mid = f"x=-\\frac{{{num}}}{{{2 * den_a}}}"
            out.append(("disp", val))
            # peek if next already mid or final
            j = i + 1
            while j < len(parts) and parts[j][0] == "prose" and not parts[j][1].strip():
                j += 1
            nxt = parts[j][1] if j < len(parts) and parts[j][0] == "disp" else ""
            if mid not in nxt and f"x=-\\frac{{{num}}}{{{2*den_a}}}" not in nxt.replace(" ", ""):
                # only insert if next is final simplified
                if nxt.startswith("x=") and "cdot" not in nxt and "\\cdot" not in nxt:
                    out.append(("disp", mid))
            i += 1
            continue
        out.append((kind, val))
        i += 1
    return reassemble(out)


def deepen_vieta_sum_product(text: str) -> str:
    """Fix classic `$$(-1)+2$$\n$$g(x)=1$$` → S steps."""
    text2 = fix_orphan_arith_lhs(text)
    # Also expand inline 2+3=5 style in prose already handled elsewhere
    # Ensure Vieta S=-b/a chain exists when prose mentions sum of roots
    return text2


def unpack_sum_of_integers(text: str) -> str:
    """`$$9-18+5$$` under a lhs → keep stepwise if jumped to final."""
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "disp":
            out.append((kind, val))
            i += 1
            continue
        m = re.match(r"^(.+?)=(.+)$", val)
        if not m:
            out.append((kind, val))
            i += 1
            continue
        lhs, rhs = m.group(1).strip(), m.group(2).strip()
        # RHS is a sum/diff of integers like 9-18+5
        if re.fullmatch(r"-?\d+(?:[+\-]\d+)+", rhs.replace(" ", "")):
            # peek next
            j = i + 1
            while j < len(parts) and parts[j][0] == "prose" and not parts[j][1].strip():
                j += 1
            nxt = parts[j][1] if j < len(parts) and parts[j][0] == "disp" else ""
            nm = re.match(r"^(.+?)=(.+)$", nxt) if nxt else None
            if nm and nm.group(1).strip() == lhs:
                # compute partial: left-assoc
                expr = rhs.replace(" ", "")
                nums = re.findall(r"[+\-]?\d+", expr)
                if expr[0].isdigit():
                    nums = re.findall(r"[+\-]?\d+", "+" + expr)
                    # fix first
                    nums[0] = nums[0].lstrip("+")
                if len(nums) >= 3:
                    total = int(nums[0])
                    partial = nums[0]
                    out.append(("disp", f"{lhs}={rhs}"))
                    for n in nums[1:]:
                        total = total + int(n)
                        partial = str(total)  # show running total after each? 
                        # Better: show 9-18=-9 then -9+5=-4
                    # left-assoc pairwise
                    run = int(nums[0])
                    cur_expr = nums[0]
                    steps_extra = []
                    for n in nums[1:]:
                        prev = run
                        run = run + int(n)
                        steps_extra.append(f"{lhs}={prev}{n if n.startswith(('+','-')) else '+'+n}")
                        steps_extra.append(f"{lhs}={run}")
                    # emit first + pairwise (skip duplicate final if matches nxt)
                    for s in steps_extra:
                        if s != nxt:
                            out.append(("disp", s))
                    i += 1
                    continue
        out.append((kind, val))
        i += 1
    return reassemble(out)


def dedupe_consecutive_displays(text: str) -> str:
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    last = None
    for kind, val in parts:
        if kind == "disp":
            if val == last:
                continue
            last = val
            out.append((kind, val))
        else:
            out.append((kind, val))
            if val.strip():
                last = None
    return reassemble(out)


def strip_duplicate_prose_paragraphs(text: str) -> str:
    """Remove consecutive identical prose paragraphs (common after first expand)."""
    blocks = re.split(r"\n\n+", text)
    out = []
    prev = None
    for b in blocks:
        b2 = b.strip()
        if b2 == prev and not b2.startswith("$$") and not b2.startswith("**"):
            continue
        out.append(b)
        prev = b2
    return "\n\n".join(out)


def unpack_bare_midpoint(text: str) -> str:
    """`$$\\frac{1+5}{2}$$` or `$$x=\\frac{1+5}{2}$$` → evaluate numerator then divide."""
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "disp":
            out.append((kind, val))
            i += 1
            continue
        compact = val.replace(" ", "")
        m = re.fullmatch(r"(?:([A-Za-z])=)?\\frac\{(-?\d+)\+(-?\d+)\}\{(-?\d+)\}", compact)
        if not m:
            out.append((kind, val))
            i += 1
            continue
        lhs, a, b, c = m.group(1), int(m.group(2)), int(m.group(3)), int(m.group(4))
        s = a + b
        out.append(("disp", val))
        mid = f"\\frac{{{s}}}{{{c}}}"
        out.append(("disp", f"{lhs}={mid}" if lhs else mid))
        if c and s % c == 0:
            final = str(s // c)
            out.append(("disp", f"{lhs}={final}" if lhs else final))
        i += 1
    return reassemble(out)


def expand_poly_sub_missing_power(text: str) -> str:
    """Insert `g(1)=1^{2}-1-2` before `g(1)=1-1-2` when the square was dropped."""
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    for kind, val in parts:
        if kind != "disp":
            out.append((kind, val))
            continue
        compact = val.replace(" ", "")
        m2 = re.match(
            r"^([fghpqrstuvwCFRHPV])\((-?\d+)\)=(-?\d+)((?:[+\-](?:\d+|\\cdot\d+))+)$",
            compact,
        )
        if m2:
            fn, arg, first, rest = m2.group(1), m2.group(2), m2.group(3), m2.group(4)
            prev = out[-1][1] if out and out[-1][0] == "disp" else ""
            if "^{2}" in prev or "^{2}" in val:
                out.append((kind, val))
                continue
            if first == arg and (rest.count("+") + rest.count("-")) >= 1:
                out.append(("disp", f"{fn}({arg})={arg}^{{2}}{rest}"))
                out.append(("disp", val))
                continue
        out.append((kind, val))
    return reassemble(out)



def ts_to_math(s: str) -> str:
    """Decode TS template-literal escaping (\\\\ -> \\) for math processing."""
    return s.replace("\\\\", "\\")


def math_to_ts(s: str) -> str:
    """Encode math backslashes for a TS template literal body."""
    return s.replace("\\", "\\\\")


def lift_inline_power_math(text: str) -> str:
    """Promote multi-step inline $...$ (powers, equals) to display math."""
    inline = re.compile(r"(?<!\$)\$(?!\$)([^$\n]{3,120})\$(?!\$)")

    def should_lift(inner: str) -> bool:
        if "^" in inner or r"\frac" in inner or r"\cdot" in inner or r"\to" in inner:
            return True
        if "=" in inner and re.search(r"\d|[A-Za-z]\(", inner):
            return True
        return False

    def repl(m: re.Match) -> str:
        inner = m.group(1).strip()
        if not should_lift(inner):
            return m.group(0)
        parts = split_eq(inner)
        if len(parts) >= 3:
            lhs = parts[0].strip()
            blocks = [D(f"{parts[0]}={parts[1]}")]
            simple = bool(
                re.match(r"^[A-Za-z\\][A-Za-z0-9_\\{}()]*$", lhs)
                or re.match(r"^[A-Za-z]\([^)]*\)$", lhs)
            )
            for p in parts[2:]:
                blocks.append(D(f"{lhs}={p}") if simple else D(f"={p}"))
            return "\n\n" + "\n\n".join(blocks) + "\n\n"
        return "\n\n" + D(inner) + "\n\n"

    chunks, pos = [], 0
    for m in DISPLAY_RE.finditer(text):
        chunks.append(inline.sub(repl, text[pos : m.start()]))
        chunks.append(m.group(0))
        pos = m.end()
    chunks.append(inline.sub(repl, text[pos:]))
    return "".join(chunks)


def deepen_recovered_formula_prose(text: str) -> str:
    def repl(m: re.Match) -> str:
        return f"{m.group(1)}\n\n{D(m.group(2))}\n\n"

    return re.sub(
        r"((?:The overview recovered|overview recovered|recovered)\s+)\$([^$]{3,80})\$\.?",
        repl,
        text,
        flags=re.I,
    )


def expand_frac_power_evals(text: str) -> str:
    """Step a^{p/q} = (a^{1/q})^p = root^p = value."""
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    for kind, val in parts:
        if kind != "disp":
            out.append((kind, val))
            continue
        compact = norm(val)
        m = re.search(r"(?<![A-Za-z{])(\d+)\^\{\\frac\{(\d+)\}\{(\d+)\}\}", compact)
        if not m:
            out.append((kind, val))
            continue
        base, p, q = int(m.group(1)), int(m.group(2)), int(m.group(3))
        root = round(base ** (1 / q))
        if root ** q != base:
            out.append((kind, val))
            continue
        powered = root ** p
        law = f"{base}^{{\\frac{{{p}}}{{{q}}}}}=\\bigl({base}^{{\\frac{{1}}{{{q}}}}}\\bigr)^{{{p}}}"
        mm = re.match(r"^(.+?)=(.+)$", compact)
        out.append(("disp", compact))
        out.append(("disp", law))
        out.append(("disp", f"{base}^{{\\frac{{1}}{{{q}}}}}={root}"))
        out.append(("disp", f"{root}^{{{p}}}={powered}"))
        if mm:
            lhs = mm.group(1).strip()
            new_rhs = mm.group(2).replace(m.group(0), str(powered))
            if new_rhs != mm.group(2):
                out.append(("disp", f"{lhs}={new_rhs}"))
                mprod = re.match(r"^(\d+)\\cdot(\d+)$", new_rhs.replace(" ", ""))
                if mprod:
                    out.append(
                        ("disp", f"{lhs}={int(mprod.group(1)) * int(mprod.group(2))}")
                    )
    return reassemble(out)


def unpack_scale_ratio_display(text: str) -> str:
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    for kind, val in parts:
        if kind != "disp":
            out.append((kind, val))
            continue
        m2 = re.match(r"^(.+?)=(2|3|4|5|10)\^\{?(\d+)\}?$", norm(val))
        if m2 and re.search(r"\\frac", m2.group(1)):
            base, exp = int(m2.group(2)), int(m2.group(3))
            out.append(("disp", f"{m2.group(1)}={base}^{{{exp}}}"))
            out.append(("disp", f"{m2.group(1)}={base ** exp}"))
            continue
        out.append((kind, val))
    return reassemble(out)


def deepen_zero_display_qualitative(text: str, stmt: str) -> str:
    if text.count("$$") // 2 >= 2:
        return text
    formulas = re.findall(r"\$([^$]{3,80})\$", text + " " + stmt)
    candidates = []
    for f in formulas:
        if any(tok in f for tok in ("^", "=", r"\frac", r"\to", r"\cdot")) or re.search(
            r"[A-Za-z]\(", f
        ):
            candidates.append(f.strip())
    seen, uniq = set(), []
    for c in candidates:
        if c not in seen:
            seen.add(c)
            uniq.append(c)
    if not uniq:
        return text
    lines = text.split("\n")
    j = 0
    while j < len(lines) and not lines[j].startswith("**"):
        j += 1
    j += 1
    while j < len(lines) and not lines[j].strip():
        j += 1
    while j < len(lines) and lines[j].strip() and not lines[j].startswith("$$"):
        j += 1
    block = "\n\n".join(D(c) for c in uniq[:3])
    lines[j:j] = ["", block, ""]
    return "\n".join(lines)


def process_explanation(
    text: str,
    letter: str,
    truth: bool,
    stmt: str = "",
    context: str = "",
    *,
    from_ts: bool = False,
) -> str:
    if from_ts:
        text = ts_to_math(text)
        stmt = ts_to_math(stmt)
        context = ts_to_math(context)

    cs = deepen_complete_square_letter(text, stmt, context)
    if cs is not None and ("complet" in stmt.lower() or "complet" in text[:80].lower()):
        if text.count("$$") // 2 <= 6:
            text = cs

    text = deepen_recovered_formula_prose(text)
    text = lift_inline_power_math(text)
    text = deepen_zero_display_qualitative(text, stmt)
    text = expand_all_displays(text)
    text = deepen_vieta_sum_product(text)
    text = unpack_orphan_product_lines(text)
    text = expand_numeric_eval_chain(text)
    text = expand_poly_sub_missing_power(text)
    text = unpack_sum_of_integers(text)
    text = unpack_bare_midpoint(text)
    text = deepen_axis_formula_steps(text)
    text = deepen_power_eval(text)
    text = expand_frac_power_evals(text)
    text = unpack_scale_ratio_display(text)
    text = expand_all_displays(text)
    text = dedupe_consecutive_displays(text)
    text = strip_duplicate_prose_paragraphs(text)
    text = ensure_header_closer(text, letter, truth)
    text = tidy(text)
    if from_ts:
        text = math_to_ts(text)
    return text


def audit_explanation(text: str, letter: str, truth: bool, case_id: str) -> list[str]:
    problems = []
    verd = "True" if truth else "False"
    if not text.startswith(f"**{letter}.** → {verd}"):
        problems.append(f"{case_id} {letter}: bad header")
    if text.count("$$") % 2 != 0:
        problems.append(f"{case_id} {letter}: uneven $$")
    if not text.rstrip().endswith(f"So the statement is {verd}."):
        problems.append(f"{case_id} {letter}: bad closer")
    if re.search(r"QED", text, re.I):
        problems.append(f"{case_id} {letter}: QED")
    # a=b=c remaining
    for m in DISPLAY_RE.finditer(text):
        body = norm(m.group(1))
        if r"\begin{" in body:
            continue
        if re.search(
            r"\\(?:neq|leq|geq|leqslant|geqslant|approx|equiv|iff|Rightarrow)",
            body,
        ):
            continue
        if len(split_eq(body)) >= 3 and r"\qquad" not in body:
            problems.append(f"{case_id} {letter}: a=b=c `{body[:60]}`")
            break
    return problems


def process_json_range(path: Path, start: int, end: int | None):
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    end_i = len(tasks) if end is None else min(end, len(tasks))
    changed, problems = 0, []
    ranges = []
    for idx in range(start, end_i):
        t = tasks[idx]
        new_expls = []
        task_changed = False
        for i, e in enumerate(t["tactical_explanations"]):
            letter, truth = LETTERS[i], bool(t["answer_key"][i])
            new = process_explanation(
                e, letter, truth, t["statements"][i], t.get("context", "")
            )
            if new != e:
                changed += 1
                task_changed = True
            problems.extend(audit_explanation(new, letter, truth, t["case_id"]))
            new_expls.append(new)
        t["tactical_explanations"] = new_expls
        if task_changed:
            ranges.append(t["case_id"])
        # sequential audit gate: print per-task summary
        print(f"  audited {t['case_id']} A–E")
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return changed, problems, ranges


_TS_TASK_RE = re.compile(
    r"(case_id:\s*`([^`]+)`,[\s\S]*?answer_key:\s*\[(.*?)\],\s*tactical_explanations:\s*\[)([\s\S]*?)(\n\s*\],)",
    re.S,
)


def _extract_bt_strings(inner: str) -> list[tuple[int, int, str]]:
    """Return (start, end, body) of backtick strings in tactical_explanations array."""
    items = []
    i = 0
    while i < len(inner):
        while i < len(inner) and inner[i] in " \n\t,":
            i += 1
        if i >= len(inner):
            break
        if inner[i] != "`":
            break
        start = i
        i += 1
        buf = []
        while i < len(inner):
            if inner[i] == "\\" and i + 1 < len(inner):
                buf.append(inner[i : i + 2])
                i += 2
                continue
            if inner[i] == "`":
                break
            buf.append(inner[i])
            i += 1
        end = i + 1  # include closing backtick
        items.append((start, end, "".join(buf)))
        i = end
    return items


def process_ts_range(path: Path, start: int, end: int | None):
    text = path.read_text(encoding="utf-8")
    # Also need statements/context — parse task objects more carefully
    # Split by case_id markers for sequential processing
    case_starts = [m.start() for m in re.finditer(r"case_id:\s*`", text)]
    # Find CORE tasks only (before exam splice) — all case_ids in file
    matches = list(_TS_TASK_RE.finditer(text))
    end_i = len(matches) if end is None else min(end, len(matches))
    changed, problems, ranges = 0, [], []

    # Rebuild from matches
    pieces: list[str] = []
    last = 0
    for ti, m in enumerate(matches):
        pieces.append(text[last : m.start()])
        case_id = m.group(2)
        if start <= ti < end_i:
            truths = []
            for tok in m.group(3).split(","):
                tok = tok.strip()
                if tok in ("true", "True"):
                    truths.append(True)
                elif tok in ("false", "False"):
                    truths.append(False)
            # extract context/statements from the span before answer_key
            pre = text[m.start() : m.start(1)] if False else ""
            # get full task slice for context
            task_slice_start = case_starts[ti] if ti < len(case_starts) else m.start()
            task_slice = text[task_slice_start : m.end()]
            ctx_m = re.search(r"context:\s*`([\s\S]*?)`", task_slice)
            context = ctx_m.group(1) if ctx_m else ""
            stmts = []
            sm = re.search(r"statements:\s*\[([\s\S]*?)\],\s*\n\s*answer_key", task_slice)
            if sm:
                stmts = [b for _, _, b in _extract_bt_strings(sm.group(1))]

            inner = m.group(4)
            items = _extract_bt_strings(inner)
            new_inner_parts = []
            cursor = 0
            task_changed = False
            for i, (s, e, body) in enumerate(items):
                new_inner_parts.append(inner[cursor:s])
                letter = LETTERS[i] if i < 5 else "A"
                truth = truths[i] if i < len(truths) else True
                stmt = stmts[i] if i < len(stmts) else ""
                if re.match(r"\*\*[A-E]\.\*\*", body.lstrip()):
                    new = process_explanation(body, letter, truth, stmt, context, from_ts=True)
                    # from_ts already doubled LaTeX backslashes; only escape backticks
                    new_esc = new.replace("`", "\`")
                    # Compare in math-space to detect change
                    if ts_to_math(new) != ts_to_math(body):
                        changed += 1
                        task_changed = True
                    problems.extend(audit_explanation(ts_to_math(new), letter, truth, case_id))
                    new_inner_parts.append("`" + new_esc + "`")
                else:
                    new_inner_parts.append(inner[s:e])
                cursor = e
            new_inner_parts.append(inner[cursor:])
            new_inner = "".join(new_inner_parts)
            pieces.append(m.group(1) + new_inner + m.group(5))
            if task_changed:
                ranges.append(case_id)
            print(f"  audited {case_id} A–E")
        else:
            pieces.append(m.group(0))
        last = m.end()
    pieces.append(text[last:])
    path.write_text("".join(pieces), encoding="utf-8")
    return changed, problems, ranges


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--file", type=int, required=True, help="0=ch7-lq, 1=ch7-mixed, 2=ch8-ts, 3=ch8-exam")
    ap.add_argument("--start", type=int, default=0)
    ap.add_argument("--end", type=int, default=None)
    args = ap.parse_args()
    kind, path = FILES[args.file]
    if kind == "json":
        ch, probs, ranges = process_json_range(path, args.start, args.end)
    else:
        ch, probs, ranges = process_ts_range(path, args.start, args.end)
    print(f"{path.name} [{args.start}:{args.end}]: changed {ch} letters, audit_issues {len(probs)}")
    if ranges:
        print(f"  cases: {ranges[0]} … {ranges[-1]} ({len(ranges)} tasks)")
    for p in probs[:30]:
        print(" ", p)


if __name__ == "__main__":
    main()
