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
    if h == 0:
        shift = "x^{2}"
    elif h > 0:
        shift = rf"\left(x-{F(h)}\right)^{{2}}"
    else:
        shift = rf"\left(x+{F(-h)}\right)^{{2}}"
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
    return D(rf"x=-\frac{{{F(a1)}}}{{2\cdot {par(a2)}}}={F(h)}")


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


"""Tools a purely symbolic stem can appeal to: keywords, formula, explanation."""
SYMBOLIC_TOOLS: tuple[tuple[str, tuple[str, ...], str, str], ...] = (
    (
        "axis",
        ("axis", "symmetr", "midpoint"),
        r"x=-\frac{b}{2a}",
        "The axis of symmetry sits at $x=-\\frac{b}{2a}$, so it follows the first two "
        "coefficients and ignores the constant term entirely.",
    ),
    (
        "vieta",
        ("sum of their", "for their sum", "sum of the roots", "product"),
        r"S=-\frac{b}{a}\qquad P=\frac{c}{a}",
        "Vieta's relations turn the coefficients into the sum and the product of the "
        "roots without solving any equation.",
    ),
    (
        "disc",
        ("discriminant", "\\delta", "tangent", "real root", "double root"),
        r"\Delta=b^{2}-4ac",
        "The discriminant counts the real roots: two while it is positive, one when it "
        "vanishes and none once it turns negative.",
    ),
    (
        "vertex",
        ("vertex", "range", "smallest", "largest", "minimum", "maximum", "(x-h)"),
        r"g(x)=a\left(x-h\right)^{2}+k",
        "Completed-square form puts the turning point at $(h,k)$, and the sign of $a$ "
        "decides whether $k$ is the smallest or the largest value taken.",
    ),
    (
        "rewrite",
        ("af^{2}", "a f(x)^{2}", "af^{2}+bf+c"),
        r"g=Af^{2}+Bf+C",
        "Squaring a line already creates an $x^{2}$ term, which is what lets a parabola "
        "be rebuilt out of $f^{2}$, $f$ and a constant.",
    ),
    (
        "nest",
        ("\\circ", "nested", "g(f(x))", "f(g(x))", "highest power", "composit"),
        "",
        "Nesting two polynomials multiplies their highest powers instead of adding "
        "them, so a line inside a parabola still leaves a parabola.",
    ),
    (
        "inverse",
        ("f^{-1}", "inverse", "undoing"),
        r"f^{-1}(x)=\frac{x-q}{m}",
        "Undoing a line gives another line, so wrapping it around a parabola cannot "
        "change the highest power that appears.",
    ),
    (
        "mirror",
        ("even", "odd function", "g(-x)", "mirror"),
        r"g(-x)=g(x)\iff b=0",
        "Replacing $x$ by $-x$ reflects a graph in the $y$-axis, and a parabola "
        "survives that swap exactly when its middle coefficient vanishes.",
    ),
    (
        "meet",
        ("intersect", "meet", "common point", "difference"),
        r"g(x)-f(x)=0",
        "Common points of a line and a parabola solve a single quadratic equation, so "
        "there can never be more than two of them.",
    ),
    (
        "growth",
        ("sufficiently large", "bounded", "stays above", "strictly below", "squeezed"),
        "",
        "Far out on either side the $x^{2}$ term outgrows every linear term, so the "
        "parabola decides who ends up on top.",
    ),
    (
        "transform",
        ("shift", "translat", "\\lambda", "scaling", "scalings"),
        r"g(x-r)\qquad g(x)+s\qquad \lambda g(x)",
        "A horizontal shift moves the axis, a vertical shift leaves it where it is, "
        "and a non-zero factor can only stretch the graph or flip it over.",
    ),
    (
        "mono",
        ("monoton", "increasing", "decreasing"),
        "",
        "A line with non-zero slope keeps one direction everywhere, while a parabola "
        "only becomes monotone once the axis cuts its domain in two.",
    ),
    (
        "fit",
        ("collinear", "pin down", "points of the plane", "on its graph"),
        "",
        "Two points with different abscissas settle exactly one line, and three "
        "non-collinear ones settle exactly one parabola.",
    ),
)

SYMBOLIC_OPENERS: dict[str, tuple[str, ...]] = {
    "axis": (
        "No coefficients are fixed, so the letters $a$, $b$ and $c$ have to be handled "
        "through the formulas that hold for every parabola.",
        "The parabola keeps its coefficients as letters, which leaves the general "
        "formulas for the axis and the discriminant as the only tools.",
        "Since $a$, $b$ and $c$ are never given numbers, each claim has to survive for "
        "every admissible choice of them.",
        "Arithmetic is unavailable here: the coefficients stay symbolic, so the axis "
        "formula has to be argued with rather than evaluated.",
        "Everything is stated for a general parabola, so the reasoning runs on the "
        "structure of $ax^{2}+bx+c$ instead of on numbers.",
    ),
    "vieta": (
        "Nothing is numeric here, so the roots stay unknown and only their sum and "
        "their product are within reach.",
        "The roots themselves are out of reach without numbers, but their sum and "
        "product are still readable from the coefficients.",
        "No coefficient is pinned down, so the roots can only be discussed through the "
        "two symmetric quantities Vieta supplies.",
    ),
    "disc": (
        "Nothing is numeric here, so the sign of the discriminant is the only lever "
        "available.",
        "With the coefficients left as letters, every claim about roots reduces to a "
        "question about the sign of $b^{2}-4ac$.",
        "No numbers are supplied, so counting roots means tracking the discriminant "
        "rather than solving anything.",
    ),
    "vertex": (
        "The stem hands over a parabola in completed-square form and nothing else, so "
        "every claim is decided by what $a$, $h$ and $k$ stand for.",
        "Only the completed-square shape is given, which makes $a$, $h$ and $k$ the "
        "three letters every claim has to be traced back to.",
        "The parabola arrives already centred on its vertex, so the reasoning stays "
        "with the roles of $a$, $h$ and $k$.",
    ),
    "rewrite": (
        "No coefficients are given, so the claims have to be settled by what a line "
        "and its square can build.",
        "Without numbers, the question is purely structural: which parabolas are "
        "reachable from a line and its square.",
    ),
    "nest": (
        "No numbers appear, so the claims are settled by what nesting does to the "
        "highest power of $x$.",
        "Everything stays symbolic, so composing the two rules has to be judged by the "
        "power of $x$ it produces.",
    ),
    "inverse": (
        "No numbers appear, so the claims are settled by what undoing a line does to "
        "the highest power of $x$.",
        "The coefficients stay symbolic, so the effect of inverting a line has to be "
        "argued in general.",
    ),
    "mirror": (
        "Nothing is numeric, so the mirror test that compares $g(-x)$ with $g(x)$ has "
        "to do the work.",
        "With letters in place of numbers, symmetry claims are settled by substituting "
        "$-x$ and comparing.",
    ),
    "meet": (
        "With no coefficients supplied, every claim is decided by the shape of the "
        "difference of the two functions.",
        "No numbers are on offer, so the meetings of the graphs have to be counted "
        "through the difference $g-f$ in general form.",
        "The stem stays symbolic, which makes the difference of the two rules the only "
        "object worth examining.",
    ),
    "growth": (
        "With no coefficients supplied, only the long-run behaviour of the two "
        "functions can settle the claims.",
        "Nothing is numeric, so the comparison has to be made far out on the axis where "
        "the squared term dominates.",
    ),
    "transform": (
        "No numbers are supplied; each claim asks what a shift or a stretch can and "
        "cannot change.",
        "The coefficients stay symbolic, so the claims are about which features a "
        "translation or a scaling preserves.",
    ),
    "mono": (
        "No numbers are supplied, so the claims turn on where each graph changes "
        "direction.",
        "Everything is general, which makes the location of the turning point the "
        "deciding factor for monotonicity.",
    ),
    "fit": (
        "No coordinates are given, so the claims are about how many points a line or a "
        "parabola needs.",
        "The points stay unnamed, so the question is one of counting conditions against "
        "unknown coefficients.",
    ),
}


"""Extra notes keyed to the auxiliary objects a symbolic stem introduces."""
SYMBOLIC_NOTES: tuple[tuple[str, str], ...] = (
    (
        r"axis of symmetry (?:of the graph of \$g\$ )?\\?ell|\\ell\b",
        "The axis carries its own name here, and every letter compares it with some "
        "other line.",
    ),
    (
        r"vertex \$V\$",
        "The line is pinned to the vertex $V$, so one common point is there before any "
        "computation starts.",
    ),
    (
        r"f_t\(x\)",
        "The lines arrive as a whole family, so the parameter has to be carried along "
        "as an unknown instead of a number.",
    ),
    (
        r"g_1\(x\)",
        "Three transformed copies of one parabola are put next to the original, so ask "
        "each time which feature the transformation touches.",
    ),
    (
        r"\\tilde f",
        "Both graphs are reflected at once, so the question is always which feature "
        "survives a reflection.",
    ),
    (
        r"q\(y\)=",
        "The parabola arrives as a second function wrapped around a line, so the "
        "substitution has to be unwound before the roots can be read.",
    ),
    (
        r"g\\circ g",
        "Here a parabola is nested inside a parabola, not merely a line inside one.",
    ),
    (
        r"set \$d=|Write \$d=",
        "The difference of the two functions is given its own name, so watch which of "
        "its coefficients still depend on the line.",
    ),
    (
        r"\$u\$ and \$v\$",
        "A pair of different inputs with equal values is handed over, which is a "
        "statement about symmetry rather than about roots.",
    ),
    (
        r"\\Delta=b\^\{2\}-4ac",
        "The discriminant is introduced by the stem itself, so each letter is a claim "
        "about what its sign controls.",
    ),
    (
        r"range of \$g\$",
        "The claims are about the set of values that come out, which for a parabola is "
        "always a half-line starting at the turning point.",
    ),
    (
        r"unique|uniquely",
        "Uniqueness is claimed more than once here, and existence on its own never "
        "establishes it.",
    ),
    (
        r"pairwise distinct points",
        "The points stay anonymous, so only counting arguments can decide the claims.",
    ),
)


def build_symbolic_overview(task: dict) -> str:
    """A worked overview for a stem that fixes no coefficients at all."""
    blob = (task.get("context", "") + " " + " ".join(task["statements"])).lower()
    hits = [
        (key, formula, sentence)
        for key, words, formula, sentence in SYMBOLIC_TOOLS
        if any(w in blob for w in words)
    ]
    if not hits:
        hits = [
            (
                "axis",
                r"x=-\frac{b}{2a}\qquad \Delta=b^{2}-4ac",
                "Every claim here follows from the two formulas that describe any "
                "parabola: the axis of symmetry and the discriminant.",
            )
        ]

    opener = pick(
        task,
        SYMBOLIC_OPENERS.get(
            hits[0][0],
            (
                "No coefficients are fixed in this stem, so each letter is settled by a "
                "general rule rather than by arithmetic.",
            ),
        ),
    )
    formulas = [f for _, f, _ in hits if f][:2] or [
        r"f(x)=mx+q\qquad g(x)=ax^{2}+bx+c,\quad a\neq 0"
    ]
    raw = task.get("context", "") + " " + " ".join(task["statements"])

    sentences = []
    for key, _, sentence in hits[:3]:
        # A parabola nested in a parabola needs a stronger statement than the
        # line-inside-parabola one the generic entry supplies.
        if key == "nest" and (r"g\circ g" in raw or "x^{4}" in raw):
            sentence = (
                "Nesting multiplies the highest powers instead of adding them, so "
                "feeding a parabola into a parabola reaches $x^{4}$, and inserting a "
                "line between them changes nothing about that."
            )
        sentences.append(sentence)

    blocks = [opener]
    if formulas:
        blocks.append(D(r"\qquad ".join(formulas)))
    blocks.append(" ".join(sentences))

    for pattern, note in SYMBOLIC_NOTES:
        if re.search(pattern, raw):
            blocks.append(note)
            break
    return "\n\n".join(blocks)


FG_OPENERS: tuple[str, ...] = (
    "The stem fixes the two models",
    "Both rules are handed over with numbers already in place:",
    "The stem names a line and a parabola,",
    "Everything starts from the two concrete rules",
    "The pair under discussion is",
)


def case_seed(task: dict) -> int:
    """A stable small integer per task, used to vary boilerplate phrasing."""
    digits = re.sub(r"\D", "", task.get("case_id", "")) or "0"
    return int(digits)


def pick(task: dict, options: tuple[str, ...], offset: int = 0) -> str:
    """One of several equivalent phrasings, chosen so tasks do not read alike."""
    return options[(case_seed(task) + offset) % len(options)]


PARABOLA_OPENERS: tuple[str, ...] = (
    "The stem fixes a single parabola.",
    "Only one parabola is in play here.",
    "A single quadratic rule carries every claim.",
    "There is one graph to study, and it is a parabola.",
    "Everything below refers to the same parabola.",
)

APPLIED_OPENERS: tuple[str, ...] = (
    "One formula carries the whole story.",
    "The situation is captured by a single rule.",
    "Behind the wording there is just one function.",
    "The story reduces to one formula and the quantities it links.",
)

SINGLE_TWO_ROOT_LINES: tuple[str, ...] = (
    "A positive discriminant puts two crossings on the $x$-axis, placed symmetrically "
    "around the axis of the parabola.",
    "The discriminant comes out positive, so the graph cuts the $x$-axis twice, once on "
    "either side of the axis of symmetry.",
    "Two real roots follow from the positive discriminant, and the axis of symmetry sits "
    "exactly halfway between them.",
    "Because the discriminant is positive the parabola meets the $x$-axis in two points, "
    "and factoring recovers them.",
)

SINGLE_VERTEX_LINES: tuple[str, ...] = (
    "Completing the square locates the turning point, and Vieta's relations give the "
    "sum $S$ and the product $P$ of the roots without solving anything.",
    "Two standard readings cover most of what follows: the vertex from the completed "
    "square, and the sum and product of the roots from the coefficients.",
    "The axis formula fixes the turning point, while the sum $S$ and the product $P$ of "
    "the roots come out of the coefficients with no equation to solve.",
    "Before testing anything, it pays to write down the vertex together with the sum and "
    "the product of the roots, all three being coefficient arithmetic.",
    "The completed square hands over the turning point, and Vieta's relations hand over "
    "the sum and the product of the roots.",
)

FG_VERTEX_LINES: tuple[str, ...] = (
    "Completing the square moves the turning point of the parabola into view: the axis "
    "comes from the first two coefficients and the height is the value of $g$ there.",
    "The turning point is worth having in hand: the axis of symmetry is read off the "
    "first two coefficients, and evaluating $g$ there supplies the height.",
    "Rewriting $g$ as $a(x-h)^{2}+k$ exposes the vertex, with $h$ taken from the axis "
    "formula and $k$ obtained by substituting that abscissa back in.",
    "Since the parabola is concrete, the vertex can be computed once and reused: the "
    "axis first, then the height above it.",
)

FG_VIETA_LINES: tuple[str, ...] = (
    "Vieta's relations read the sum $S$ and the product $P$ of the roots of $g$ straight "
    "off the coefficients, and the discriminant of $g$ says how many real roots there "
    "are to sum in the first place.",
    "The roots of $g$ never have to be computed: their sum and product follow from the "
    "coefficients, while the discriminant records whether they are real at all.",
    "Coefficients alone settle the sum $S$ and the product $P$ of the roots of $g$, and "
    "the sign of its discriminant tells how many of those roots are real.",
    "For the roots of $g$ the useful data are the sum, the product and the discriminant, "
    "all three of which come from the coefficients directly.",
)

FG_READOFF_LINES: tuple[str, ...] = (
    "Several claims only need the coefficients as they stand: the slope of the line is "
    "the factor in front of $x$, each constant term is the value of that rule at $0$, "
    "and the sign of the leading coefficient makes the arms open {dir}.",
    "A first group of claims is pure reading: the factor in front of $x$ is the slope, "
    "the constant terms give the intercepts on the vertical axis, and the leading "
    "coefficient of $g$ sends the arms {dir}.",
    "No work beyond reading is needed for the slope, for the two values at $0$ and for "
    "the opening direction, which is {dir} here because of the sign in front of "
    "$x^{{2}}$.",
    "The slope, the vertical intercepts and the opening direction all sit in plain view "
    "in the coefficients; the arms go {dir}.",
)

FG_MEET_LINES: tuple[str, ...] = (
    "The graphs share a point exactly where the difference of the two rules vanishes, so "
    "the discriminant of that single quadratic counts the meetings: here there are {n}.",
    "Common points are the roots of $f-g$, and that difference is again a quadratic, so "
    "its discriminant settles the count: {n} here.",
    "Comparing the two graphs means solving $f(x)=g(x)$, a quadratic equation whose "
    "discriminant reports {n} real solutions.",
    "Wherever the two graphs touch, the difference $f-g$ is zero; that difference is "
    "quadratic and its discriminant leaves {n} crossings.",
)


def disc_of(p) -> Rational:
    return Rational(discriminant(Poly(expand(p), x)))


def build_overview(task, f, g) -> str:
    if task.get("stem_kind") in SINGLE_KINDS:
        single = build_single_overview(task)
        if single:
            return single

    if task.get("stem_kind") == "symbolic":
        return build_symbolic_overview(task)

    if f is None or g is None:
        ov = (task.get("solution_overview") or "").strip()
        ov = re.sub(r"\\deg\([^)]+\)", "highest power", ov)
        # Collapse accidental repeated paragraphs.
        paras = [p.strip() for p in re.split(r"\n\s*\n", ov) if p.strip()]
        dedup: list[str] = []
        for p in paras:
            if p not in dedup:
                dedup.append(p)
        return "\n\n".join(dedup).strip()

    h, k, a_g = vertex_of(g)
    a2, a1, a0 = poly_coeffs(g)
    sum_r = Rational(-a1 / a2)
    prod_r = Rational(a0 / a2)
    diff = expand(f - g)
    Delta = Rational(discriminant(Poly(expand(g - f), x)))
    n_int = 2 if Delta > 0 else (1 if Delta == 0 else 0)
    meetings = {2: "two", 1: "one", 0: "no"}[n_int]

    blob = (task.get("context", "") + " " + " ".join(task["statements"])).lower()
    compact = blob.replace(" ", "")
    wants = lambda *words: any(w in blob for w in words)

    blocks = [pick(task, FG_OPENERS), D(rf"f(x)={L(f)}\qquad g(x)={L(g)}")]

    if wants("slope", "opens", "upward", "downward", "intercept", "steep"):
        m_f = Rational(Poly(f, x).nth(1))
        blocks += [
            pick(task, FG_READOFF_LINES, 3).format(
                dir="upwards" if a2 > 0 else "downwards"
            ),
            D(rf"m={F(m_f)}\qquad f(0)={F(Rational(Poly(f, x).nth(0)))}\qquad g(0)={F(a0)}\qquad a={F(a2)}"),
        ]

    if wants(
        "vertex", "completing", "turning", "lowest", "highest", "smallest", "largest",
        "minimum", "maximum", "range", "axis", "(x-", "(x+",
    ):
        blocks += [
            pick(task, FG_VERTEX_LINES),
            D(rf"g(x)={vertex_form_string(a2, h, k)}\qquad \text{{vertex}}=\left({F(h)},{F(k)}\right)"),
        ]

    if wants("root", "zero", "vieta", "solution of") or "sumof" in compact:
        blocks += [
            pick(task, FG_VIETA_LINES, 1),
            D(rf"S={F(sum_r)}\qquad P={F(prod_r)}\qquad \Delta_{{g}}={F(disc_of(g))}"),
        ]

    if wants(
        "intersect", "meet", "common", "cross", "difference", "gap", "tangent",
        "above", "below", "f-g", "f(x)-g(x)", "g(x)-f(x)",
    ):
        blocks += [
            pick(task, FG_MEET_LINES, 2).format(n=meetings),
            D(rf"f(x)-g(x)={L(diff)}\qquad \Delta={F(Delta)}"),
        ]

    if wants("f^{2}", "f(x)^{2}", "af^{2}", "rebuilt", "rewrit") or "f(x)^2" in compact:
        try:
            A, B, C = rewrite_ABC(f, g)
            blocks += [
                "Because $f$ is a line with non-zero slope, the square $f(x)^{2}$ "
                "already carries an $x^{2}$ term, so $g$ can be rebuilt from "
                "$f(x)^{2}$, $f(x)$ and a constant. Matching coefficients gives",
                D(rf"A={F(A)},\quad B={F(B)},\quad C={F(C)}"),
            ]
        except Exception:
            blocks.append(
                "Because $f$ is a line with non-zero slope, a rewriting "
                "$g=A f^{2}+B f+C$ exists and is uniquely determined."
            )

    if len(blocks) == 2:
        blocks += [
            "Both rules are concrete, so every claim can be checked by evaluating or by "
            "comparing the two expressions directly; the vertex of $g$ and the "
            "difference $f-g$ are the two quantities worth having ready.",
            D(rf"\text{{vertex}}=\left({F(h)},{F(k)}\right)\qquad f(x)-g(x)={L(diff)}"),
        ]

    return "\n\n".join(blocks)


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
    if (
        "minimum" in sl
        or "maximum" in sl
        or "smallest value" in sl
        or "largest value" in sl
        or "takes its largest" in sl
        or "takes its smallest" in sl
    ):
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
    # ---- 7.69 Who wins far to the right ---------------------------------- #
    ("MATH 7.69", "A"): [
        "Far out to the right the contest between a line and a parabola is settled by "
        "the square term alone, so write $f(x)=mx+q$ and compare the two functions "
        "through their difference.",
        D(r"g(x)-f(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right)"),
        "Subtracting a line never touches the coefficient of $x^{2}$, so the difference "
        "is again a parabola with leading coefficient $a>0$: it opens upwards and takes "
        "negative values at most on the bounded interval between its two roots.",
        D(r"g(x)-f(x)=a\left(x-h\right)^{2}+k\quad\text{with }a>0"),
        "Once $x$ lies to the right of that interval the difference is strictly "
        "positive and grows without bound, since the square term outruns the linear and "
        "constant ones.",
        close(True, "The parabola therefore overtakes the line and stays above it for "
                    "all sufficiently large $x$"),
    ],
    ("MATH 7.69", "B"): [
        "Winning the race far to the right says nothing about the region near the "
        "origin, where the linear term can still be in front, so a single well-chosen "
        "pair settles the claim.",
        D(r"g(x)=x^{2}\qquad f(x)=x"),
        "Here $a=1>0$ and the line is non-constant, so both hypotheses hold. Test the "
        "two functions halfway between the points where they agree.",
        D(r"g\left(\frac{1}{2}\right)=\frac{1}{4}\qquad "
          r"f\left(\frac{1}{2}\right)=\frac{1}{2}"),
        "At that abscissa the line is the higher of the two, and indeed the difference "
        "$g(x)-f(x)=x^{2}-x=x(x-1)$ is negative on the whole interval between $0$ and "
        "$1$.",
        close(False, "An upward-opening parabola can dip below a line on a bounded "
                     "stretch, so the inequality cannot hold for every real $x$"),
    ],
    ("MATH 7.69", "C"): [
        "The same comparison works upside down: subtracting the line leaves the "
        "coefficient of $x^{2}$ untouched, and now that coefficient is negative.",
        D(r"g(x)-f(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right),\quad a<0"),
        "A downward-opening parabola is positive at most between its two roots, so "
        "beyond the larger of them the difference stays strictly negative and falls "
        "without bound.",
        D(r"x\text{ large}\implies g(x)-f(x)<0\implies g(x)<f(x)"),
        close(True, "Far enough to the right the line is above the parabola, exactly as "
                    "the claim says"),
    ],
    ("MATH 7.69", "D"): [
        "A line staying above the whole graph would mean the difference $g-f$ never "
        "becomes positive, so look at what that difference actually does.",
        D(r"g(x)-f(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right),\quad a>0"),
        "Being an upward-opening parabola, this difference grows beyond every bound as "
        "$x$ increases; for instance with $g(x)=x^{2}$ and any line $f(x)=mx+q$ the "
        "difference is positive as soon as $x>m+|q|+1$.",
        D(r"x^{2}-mx-q>0\text{ for all large }x"),
        close(False, "Every line is eventually overtaken, so no line can stay above an "
                     "upward-opening parabola everywhere"),
    ],
    ("MATH 7.69", "E"): [
        "Bounded below means the values never sink past some fixed level, and for a "
        "parabola that level is supplied by the vertex.",
        D(r"d(x)=g(x)-f(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right),\quad a>0"),
        "Completing the square isolates a non-negative square multiplied by the "
        "positive number $a$, so the whole expression can never drop below the constant "
        "left over.",
        D(r"d(x)=a\left(x-h\right)^{2}+k\ge k\quad\text{for every real }x"),
        "The number $k$ is the height of the vertex of $d$, and it depends only on the "
        "coefficients, not on where $x$ happens to be.",
        close(True, "The difference has a genuine smallest value and is therefore "
                    "bounded below on all of $\\mathbb{R}$"),
    ],
    # ---- 7.70 When the difference stays curved --------------------------- #
    ("MATH 7.70", "A"): [
        "Only the parabola can contribute a square term, so expand the difference and "
        "watch which coefficient the line is able to reach.",
        D(r"d(x)=\left(ax^{2}+bx+c\right)-\left(mx+q\right)"),
        D(r"d(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right)"),
        "The line only ever touches the $x$ term and the constant term; the coefficient "
        "in front of $x^{2}$ is copied straight from $g$, and it is non-zero because "
        "$g$ is a parabola.",
        close(True, "That coefficient equals $a\\neq 0$ whatever $f$ is"),
    ],
    ("MATH 7.70", "B"): [
        "Making $d$ a line would require the square term to disappear, so ask which "
        "choice of $f$ could cancel it.",
        D(r"d(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right)"),
        "A line has no $x^{2}$ term at all, so subtracting it leaves $a$ in place; the "
        "only way to reach a zero coefficient would be $a=0$, which is excluded by "
        "hypothesis.",
        D(r"a\neq 0\implies d\text{ still has a square term}"),
        close(False, "No choice of $f$ can flatten the difference into a line"),
    ],
    ("MATH 7.70", "C"): [
        "The coefficient of $x$ in the difference is the gap between the middle "
        "coefficient of $g$ and the slope of $f$, so it can be steered by choosing the "
        "slope.",
        D(r"d(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right)"),
        "Setting $m=b$ makes that gap vanish, and such a line certainly exists: take "
        "$f(x)=bx$, for example.",
        D(r"m=b\implies d(x)=ax^{2}+\left(c-q\right)"),
        close(True, "One suitable line removes the $x$ term completely"),
    ],
    ("MATH 7.70", "D"): [
        "A vanishing $x$ term in $d$ means $m=b$, and that condition concerns the "
        "difference, not the original parabola.",
        D(r"b-m=0\implies d(x)=ax^{2}+\left(c-q\right)"),
        "The axis of $d$ is then the vertical line through the origin, but the axis of "
        "$g$ is still computed from the coefficients of $g$ alone.",
        D(r"g(x)=x^{2}+2x,\quad f(x)=2x\implies d(x)=x^{2}"),
        "Here the $x$ term of $d$ has indeed vanished, yet the axis of $g$ is the line "
        "$x=-1$ and not the vertical coordinate axis.",
        close(False, "The condition on $d$ says nothing about where the axis of $g$ "
                     "sits"),
    ],
    ("MATH 7.70", "E"): [
        "The opening direction of a parabola is read off from the sign of its "
        "coefficient of $x^{2}$, so compare that single number for $g$ and for $d$.",
        D(r"d(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right)"),
        "Subtracting a line changes the $x$ term and the constant term only, so both "
        "graphs carry the very same leading coefficient $a$.",
        D(r"a>0\implies\text{both open upwards}\qquad "
          r"a<0\implies\text{both open downwards}"),
        close(True, "The two parabolas always turn the same way, whichever line is "
                    "subtracted"),
    ],
    # ---- 7.79 Undoing a line around a parabola --------------------------- #
    ("MATH 7.79", "A"): [
        "Write $f(x)=mx+q$ with $m\\neq 0$ and undo it by solving $y=mx+q$ for $x$.",
        D(r"y=mx+q\iff x=\frac{y-q}{m}"),
        "The division is legitimate precisely because the line is non-constant, and the "
        "result is again a first-degree formula.",
        D(r"f^{-1}(y)=\frac{1}{m}y-\frac{q}{m}"),
        "Its slope is $1/m$, which is a non-zero number, so the inverse is not a "
        "constant function.",
        close(True, "Undoing a non-constant line gives another non-constant line"),
    ],
    ("MATH 7.79", "B"): [
        "Nesting the inverse line inside the parabola substitutes a first-degree "
        "expression for $x$, so expand the square and collect the terms.",
        D(r"g\left(f^{-1}(x)\right)=a\left(\frac{x-q}{m}\right)^{2}"
          r"+b\left(\frac{x-q}{m}\right)+c"),
        "The square of a first-degree expression reaches $x^{2}$ and stops there, and "
        "the coefficient it produces is the leading one of the composite.",
        D(r"\text{coefficient of }x^{2}=\frac{a}{m^{2}}\neq 0"),
        "It is non-zero because $a\\neq 0$ and $m\\neq 0$, so nothing cancels the "
        "square term.",
        close(True, "The composite is again a parabola"),
    ],
    ("MATH 7.79", "C"): [
        "In this order the parabola is computed first and the inverse line is applied "
        "afterwards, which merely rescales and shifts the values.",
        D(r"f^{-1}\left(g(x)\right)=\frac{g(x)-q}{m}"),
        D(r"f^{-1}\left(g(x)\right)=\frac{a}{m}x^{2}+\frac{b}{m}x+\frac{c-q}{m}"),
        "The leading coefficient $a/m$ is again non-zero, so the square term survives "
        "the rescaling.",
        close(True, "The composite is a parabola in this order as well"),
    ],
    ("MATH 7.79", "D"): [
        "Here the inverse line acts on the argument, so a root of the composite is an "
        "abscissa whose image under $f^{-1}$ is a root of $g$; the roots get moved "
        "rather than kept.",
        D(r"g\left(f^{-1}(x)\right)=0\iff f^{-1}(x)\text{ is a root of }g"),
        "Take the simplest concrete pair and follow the bookkeeping.",
        D(r"g(x)=x^{2}\qquad f(x)=x+1\implies f^{-1}(x)=x-1"),
        D(r"g\left(f^{-1}(x)\right)=\left(x-1\right)^{2}"),
        "The composite vanishes at $x=1$ while $g$ vanishes at $x=0$, so the two root "
        "sets are different.",
        close(False, "Substituting inside the parabola shifts its roots"),
    ],
    ("MATH 7.79", "E"): [
        "In this order the line acts after the parabola, and an operation performed on "
        "the values can only stretch or slide the graph vertically.",
        D(r"f^{-1}\left(g(x)\right)=\frac{a}{m}x^{2}+\frac{b}{m}x+\frac{c-q}{m}"),
        "Both the leading and the middle coefficient are divided by the same non-zero "
        "number $m$, so the quotient that produces the axis is unchanged.",
        D(r"-\frac{b/m}{2\left(a/m\right)}=-\frac{b}{2a}"),
        close(True, "The composite has exactly the same axis of symmetry as $g$"),
    ],
    # ---- 7.80 Mirroring a line and a parabola ---------------------------- #
    ("MATH 7.80", "A"): [
        "Mirroring replaces $x$ by $-x$ in both formulas at once, so the equation for "
        "the common abscissas is transported by the same substitution.",
        D(r"\tilde f(x)=\tilde g(x)\iff f(-x)=g(-x)"),
        "Hence $x$ is a meeting abscissa of the mirrored pair exactly when $-x$ is a "
        "meeting abscissa of the original pair, and the assignment $x\\mapsto -x$ pairs "
        "the two sets of solutions off one against one.",
        D(r"x\text{ solves the new equation}\iff -x\text{ solves the old one}"),
        close(True, "Reflection can neither create nor destroy a meeting, so the counts "
                    "agree"),
    ],
    ("MATH 7.80", "B"): [
        "Tangency is the algebraic statement that the difference has a repeated root, "
        "so mirror the difference and inspect its shape.",
        D(r"\tilde g(x)-\tilde f(x)=\left(g-f\right)(-x)"),
        "If the original graphs are tangent at abscissa $h$, the difference is a "
        "perfect square times its leading coefficient.",
        D(r"g(x)-f(x)=a\left(x-h\right)^{2}\implies "
          r"\left(g-f\right)(-x)=a\left(x+h\right)^{2}"),
        "The mirrored difference is again a square with the same leading coefficient, "
        "now with its repeated root at $-h$.",
        close(True, "The reflected graphs touch at the mirrored abscissa"),
    ],
    ("MATH 7.80", "C"): [
        "The number of meetings is governed by the difference, and mirroring keeps that "
        "difference quadratic with the very same leading coefficient.",
        D(r"\left(g-f\right)(-x)=ax^{2}-\left(b-m\right)x+\left(c-q\right)"),
        "A quadratic equation has at most two real solutions, so three meetings are out "
        "of reach; and the correspondence $x\\mapsto -x$ shows the count was preserved "
        "exactly anyway.",
        D(r"a\neq 0\implies\text{at most two solutions}"),
        close(False, "Two meetings stay two meetings under a reflection"),
    ],
    ("MATH 7.80", "D"): [
        "The opening direction depends only on the coefficient of $x^{2}$, so mirror "
        "the formula and read that coefficient off.",
        D(r"\tilde g(x)=a\left(-x\right)^{2}+b\left(-x\right)+c"),
        D(r"\tilde g(x)=ax^{2}-bx+c"),
        "Squaring kills the minus sign, so the leading coefficient is still $a$ and its "
        "sign has not moved.",
        close(True, "The mirrored parabola opens the same way as the original"),
    ],
    ("MATH 7.80", "E"): [
        "Reflecting across the vertical coordinate axis carries the axis of symmetry "
        "along with the graph, so compute where it lands.",
        D(r"\tilde g(x)=ax^{2}-bx+c\implies\text{axis }x=\frac{b}{2a}"),
        "The original axis is $x=-b/(2a)$, so the two lines are opposites of each other "
        "and coincide only when $b=0$.",
        D(r"g(x)=\left(x-1\right)^{2}\implies\tilde g(x)=\left(x+1\right)^{2}"),
        "In this example the axis jumps from $x=1$ to $x=-1$, two different vertical "
        "lines.",
        close(False, "The axis is mirrored too, so it generally moves"),
    ],
    # ---- 7.81 How many points pin down a curve --------------------------- #
    ("MATH 7.81", "A"): [
        "Two points with different abscissas determine a slope, and the slope together "
        "with one of the points determines the whole line.",
        D(r"m=\frac{y_{Q}-y_{P}}{x_{Q}-x_{P}}"),
        "The denominator is non-zero because $P$ and $Q$ do not lie on a common "
        "vertical line, so this quotient is a genuine number; the intercept then has no "
        "freedom left.",
        D(r"q=y_{P}-m\,x_{P}"),
        "Any line through both points must have this slope and this intercept, so no "
        "second one is possible.",
        close(True, "Exactly one linear function passes through the two points"),
    ],
    ("MATH 7.81", "B"): [
        "Three points with distinct abscissas are always matched by exactly one formula "
        "of the shape $Ax^{2}+Bx+C$, but nothing guarantees that $A$ comes out "
        "non-zero.",
        D(r"Ax_{P}^{2}+Bx_{P}+C=y_{P},\quad\text{and likewise for }Q\text{ and }R"),
        "If the three points happen to be collinear, that unique solution is the line "
        "through them, with a vanishing square coefficient.",
        D(r"(0,0),\;(1,1),\;(2,2)\implies A=0,\;B=1,\;C=0"),
        "A quadratic function needs a non-zero coefficient of $x^{2}$, so in this "
        "configuration there is no quadratic function at all through the three points.",
        close(False, "Collinear triples admit only a line, so the existence claim fails "
                     "in general"),
    ],
    ("MATH 7.81", "C"): [
        "The three interpolation conditions form a system in the unknown coefficients, "
        "and distinct abscissas make it solvable in exactly one way.",
        D(r"Ax_{P}^{2}+Bx_{P}+C=y_{P},\;Ax_{Q}^{2}+Bx_{Q}+C=y_{Q},"
          r"\;Ax_{R}^{2}+Bx_{R}+C=y_{R}"),
        "Subtracting the equations in pairs eliminates $C$ and then $B$, leaving one "
        "value for $A$, after which $B$ and $C$ follow in turn; every step divides only "
        "by differences of the abscissas, which are non-zero.",
        D(r"A=0\iff P,\,Q,\,R\text{ are collinear}"),
        "Since the points are assumed not to be collinear, the value obtained for $A$ "
        "is non-zero and the interpolating formula really is a quadratic one.",
        close(True, "There is one such quadratic function and no more"),
    ],
    ("MATH 7.81", "D"): [
        "Passing through two points leaves one degree of freedom, and it can be "
        "displayed explicitly: start from the line through $P$ and $Q$ and add a term "
        "that vanishes at both abscissas.",
        D(r"g_{\lambda}(x)=\lambda\left(x-x_{P}\right)\left(x-x_{Q}\right)+mx+q"),
        "At $x=x_{P}$ and $x=x_{Q}$ the first summand is zero, so every member of this "
        "family contains both points, while the coefficient of $x^{2}$ is $\\lambda$.",
        D(r"\lambda\neq 0\implies g_{\lambda}\text{ is a quadratic function}"),
        "Different non-zero values of $\\lambda$ give different functions, and there "
        "are infinitely many of them.",
        close(True, "Infinitely many parabolas pass through the same two points"),
    ],
    ("MATH 7.81", "E"): [
        "Agreement at a point means the difference of the two functions vanishes there, "
        "so study that difference.",
        D(r"g(x)-f(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right),\quad a\neq 0"),
        "This is a quadratic expression, so it can vanish at two abscissas at most; "
        "three distinct abscissas are one too many.",
        D(r"x_{P},\,x_{Q},\,x_{R}\text{ distinct}\implies\text{three roots needed}"),
        "The abscissas are pairwise different because no two of the points share a "
        "vertical line, so the required third root cannot exist.",
        close(False, "A parabola and a line can agree at two points but never at "
                     "three"),
    ],
    # ---- 7.82 Where the difference reaches its extreme ------------------- #
    ("MATH 7.82", "A"): [
        "Subtracting the line leaves the square term alone but shifts the middle "
        "coefficient by the slope, and the axis is built from exactly those two "
        "numbers.",
        D(r"d(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right)"),
        D(r"\text{axis of }d:\;x=-\frac{b-m}{2a}\qquad "
          r"\text{axis of }g:\;x=-\frac{b}{2a}"),
        "Subtracting one from the other leaves a single term, whose vanishing is "
        "controlled by the slope alone.",
        D(r"-\frac{b-m}{2a}-\left(-\frac{b}{2a}\right)=\frac{m}{2a}"),
        close(True, "As long as $m\\neq 0$ this gap is non-zero, so the two axes are "
                    "different vertical lines"),
    ],
    ("MATH 7.82", "B"): [
        "The axis of the difference was just computed, and the slope of the line sits "
        "right inside the formula.",
        D(r"\text{axis of }d:\;x=-\frac{b}{2a}+\frac{m}{2a}"),
        "Changing $m$ therefore slides that vertical line, and a concrete pair makes "
        "the movement visible.",
        D(r"g(x)=x^{2},\;m=0\implies\text{axis }x=0\qquad "
          r"m=2\implies\text{axis }x=1"),
        "Tilting the subtracted line moves the lowest point of the difference "
        "sideways.",
        close(False, "The axis of $d$ does depend on the slope"),
    ],
    ("MATH 7.82", "C"): [
        "A line contributes an $x$ term and a constant and nothing else, so the square "
        "term of the difference is inherited untouched.",
        D(r"d(x)=\left(ax^{2}+bx+c\right)-\left(mx+q\right)"),
        D(r"d(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right)"),
        "Whatever slope and intercept the line has, the number in front of $x^{2}$ is "
        "still the leading coefficient of $g$, and it is non-zero.",
        close(True, "That coefficient equals $a$ exactly"),
    ],
    ("MATH 7.82", "D"): [
        "Whether a parabola has a smallest value is decided by the direction in which "
        "it opens, and the difference opens the same way as $g$.",
        D(r"d(x)=a\left(x-h\right)^{2}+k"),
        "With $a>0$ the square is multiplied by a positive number, so the values never "
        "sink below the vertex height $k$, which is actually attained at $x=h$.",
        D(r"a>0\implies d(x)\ge k\qquad a<0\implies d(x)\le k"),
        "With $a<0$ the picture is turned over: $k$ becomes the largest value and the "
        "arms fall without bound, so no smallest value exists.",
        close(True, "A minimum exists precisely in the case $a>0$"),
    ],
    ("MATH 7.82", "E"): [
        "Tangency of the two graphs means the equation $g(x)=f(x)$ has a repeated "
        "solution, that is, the difference has a double root.",
        D(r"d(x)=g(x)-f(x)=a\left(x-h\right)^{2}"),
        "No constant is left over, so the vertex of $d$ sits at height zero.",
        D(r"d(h)=0\implies\text{vertex}=\left(h,0\right)"),
        "A point of height zero lies on the horizontal coordinate axis, and $h$ is the "
        "abscissa where the line touches the parabola.",
        close(True, "The vertex of the difference lands exactly on that axis"),
    ],
    # ---- 7.83 Signs of the roots from sum and product -------------------- #
    ("MATH 7.83", "A"): [
        "Vieta's relations turn the coefficients into the sum and the product of the "
        "roots, and the product alone already records their signs.",
        D(r"S=x_{1}+x_{2}=-\frac{b}{a}\qquad P=x_{1}x_{2}=\frac{c}{a}"),
        "A product of two real numbers is negative only when the factors have opposite "
        "signs, since equal signs give a positive product and a zero factor gives zero.",
        D(r"P<0\implies x_{1}x_{2}<0\implies\text{one root}<0<\text{the other}"),
        "Geometrically the parabola then crosses the horizontal axis once on each side "
        "of the origin.",
        close(True, "A negative product forces roots of opposite signs"),
    ],
    ("MATH 7.83", "B"): [
        "The product fixes whether the signs agree, and the sum then decides which sign "
        "it is.",
        D(r"P>0\implies x_{1}\text{ and }x_{2}\text{ have the same sign}"),
        "Two positive numbers would add up to something positive, so a negative sum "
        "rules that case out and only the negative one survives.",
        D(r"S<0\implies x_{1}+x_{2}<0\implies\text{both roots}<0"),
        "For instance $g(x)=x^{2}+3x+2$ has $P=2>0$ and $S=-3<0$, with roots $-1$ and "
        "$-2$.",
        close(True, "The two conditions together force both roots to be negative"),
    ],
    ("MATH 7.83", "C"): [
        "The value at the origin is the constant term, and Vieta's second relation "
        "expresses that term through the product of the roots.",
        D(r"P=\frac{c}{a}\implies c=aP"),
        "With $a>0$ and $P<0$ the product $aP$ is negative, so the constant term is "
        "negative.",
        D(r"g(0)=c=aP<0"),
        "This matches the picture: an upward-opening parabola with one root on each "
        "side of the origin must dip below the horizontal axis in between, and the "
        "origin lies in that stretch.",
        close(True, "The function takes a negative value at the origin"),
    ],
    ("MATH 7.83", "D"): [
        "A positive product only says the two roots share a sign; it does not say which "
        "sign, so one counterexample is enough.",
        D(r"g(x)=x^{2}+3x+2=\left(x+1\right)\left(x+2\right)"),
        D(r"x_{1}=-1\qquad x_{2}=-2\qquad P=2>0"),
        "The roots are distinct and real, the product is positive, yet both roots are "
        "negative.",
        close(False, "Positivity of the product leaves the negative case wide open"),
    ],
    ("MATH 7.83", "E"): [
        "A vanishing sum makes the two roots opposites, and the axis of symmetry is "
        "always the half-sum of the roots.",
        D(r"S=x_{1}+x_{2}=0\implies x_{2}=-x_{1}"),
        D(r"\text{axis}:\;x=-\frac{b}{2a}=\frac{S}{2}=0"),
        "The line $x=0$ is the vertical coordinate axis, and the two roots sit "
        "symmetrically on either side of it at equal distance.",
        D(r"S=0\implies b=0\implies g(x)=ax^{2}+c"),
        close(True, "Both halves of the claim hold together"),
    ],
    # ---- 7.89 Lines through the vertex ----------------------------------- #
    ("MATH 7.89", "A"): [
        "Put the parabola in vertex form around $V=(h,k)$; a line of slope zero through "
        "$V$ is simply the horizontal line at that height.",
        D(r"g(x)=a\left(x-h\right)^{2}+k\qquad f(x)=k"),
        "The difference is then a pure square, so the meeting condition has a repeated "
        "solution and no other.",
        D(r"g(x)-f(x)=a\left(x-h\right)^{2}=0\iff x=h"),
        "Away from $x=h$ the square is strictly positive and $a\\neq 0$, so the "
        "difference never returns to zero.",
        close(True, "The vertex is the one and only common point in that case"),
    ],
    ("MATH 7.89", "B"): [
        "A line through the vertex can be written using the same shifted variable, and "
        "then the difference factors by hand.",
        D(r"f(x)=m\left(x-h\right)+k"),
        D(r"g(x)-f(x)=a\left(x-h\right)^{2}-m\left(x-h\right)"
          r"=\left(x-h\right)\left(a\left(x-h\right)-m\right)"),
        "The first factor gives back the vertex; the second one vanishes at an abscissa "
        "obtained by dividing the slope by the leading coefficient.",
        D(r"a\left(x-h\right)=m\iff x=h+\frac{m}{a}"),
        "Because $m\\neq 0$ and $a\\neq 0$ the shift $m/a$ is non-zero, so this second "
        "abscissa really is different from $h$.",
        close(True, "A second common point appears as soon as the line is tilted"),
    ],
    ("MATH 7.89", "C"): [
        "Tangency would mean the factored difference has a repeated root at the vertex, "
        "so look at the factorisation once more.",
        D(r"g(x)-f(x)=\left(x-h\right)\left(a\left(x-h\right)-m\right)"),
        "For $m\\neq 0$ the factor $x-h$ occurs only once, so the difference changes "
        "sign at $x=h$ and the graphs cross there instead of touching.",
        D(r"g(x)=x^{2},\;f(x)=x\implies g(x)-f(x)=x\left(x-1\right)"),
        "In this example the line through the vertex $(0,0)$ cuts the parabola again at "
        "$x=1$, and near the origin the difference is negative on one side and positive "
        "on the other.",
        close(False, "Only the horizontal choice $m=0$ produces a genuine tangency"),
    ],
    ("MATH 7.89", "D"): [
        "The line is required to pass through the vertex, so one common point is handed "
        "over by the hypothesis itself.",
        D(r"f(h)=k=g(h)"),
        "Both graphs therefore contain the point $V=(h,k)$, whatever the slope $m$ and "
        "the leading coefficient $a$ happen to be.",
        D(r"g(x)-f(x)=\left(x-h\right)\left(a\left(x-h\right)-m\right)"),
        "Algebraically the factor $x-h$ is always present in the difference, so the "
        "meeting can never be lost.",
        close(True, "At least the vertex is always shared"),
    ],
    ("MATH 7.89", "E"): [
        "The second meeting was located exactly, so its position relative to the axis "
        "$x=h$ is a matter of one sign.",
        D(r"x_{2}=h+\frac{m}{a}"),
        "The point lies to the right of the axis precisely when the added shift is "
        "positive, and a quotient of two non-zero numbers is positive exactly when they "
        "share a sign.",
        D(r"x_{2}>h\iff\frac{m}{a}>0\iff m\text{ and }a\text{ have the same sign}"),
        "Opposite signs push the second meeting to the left instead, at the mirrored "
        "distance from the axis.",
        close(True, "The criterion is exactly the agreement of the two signs"),
    ],
    # ---- 7.90 Composing a parabola with itself --------------------------- #
    ("MATH 7.90", "A"): [
        "Nesting substitutes the whole parabola in place of $x$, so the square term "
        "gets squared and that is where the top power comes from.",
        D(r"g\left(g(x)\right)=a\left(ax^{2}+bx+c\right)^{2}"
          r"+b\left(ax^{2}+bx+c\right)+c"),
        "Squaring an expression whose highest power is $x^{2}$ reaches $x^{4}$, with a "
        "coefficient that is a product of non-zero numbers.",
        D(r"a\left(ax^{2}\right)^{2}=a^{3}x^{4}"),
        "The remaining summands only climb to $x^{2}$, so nothing can cancel the "
        "$a^{3}x^{4}$ term.",
        close(True, "The highest power really is $x^{4}$"),
    ],
    ("MATH 7.90", "B"): [
        "Work from the inside out: applying the line to the parabola only rescales it, "
        "and then the outer parabola squares the result.",
        D(r"f\left(g(x)\right)=m\left(ax^{2}+bx+c\right)+q"),
        "The leading coefficient here is $ma$, non-zero because the line is "
        "non-constant, so the middle stage is still a parabola.",
        D(r"g\left(f\left(g(x)\right)\right)=a\left(ma\,x^{2}+\dots\right)^{2}+\dots"),
        D(r"\text{coefficient of }x^{4}=a\left(ma\right)^{2}=a^{3}m^{2}\neq 0"),
        close(True, "The triple nesting also tops out at $x^{4}$"),
    ],
    ("MATH 7.90", "C"): [
        "The value $x^{4}$ is right, but the reason offered is not: powers of nested "
        "functions multiply, and here $2$ times $2$ happens to agree with $2$ plus $2$.",
        D(r"2\cdot 2=4\qquad 2+2=4"),
        "A single case where the two rules disagree exposes which one is at work: nest "
        "the parabola inside the line and count.",
        D(r"g\left(f(x)\right)=a\left(mx+q\right)^{2}+b\left(mx+q\right)+c"),
        D(r"\text{highest power}=x^{2}:\quad 2\cdot 1=2\text{, not }2+1=3"),
        "Adding the powers is the rule for multiplying two formulas together, not for "
        "nesting one inside the other.",
        close(False, "The stated justification is the wrong rule, even though the "
                     "number it produces here is right"),
    ],
    ("MATH 7.90", "D"): [
        "Nesting a line inside itself substitutes a first-degree expression into a "
        "first-degree formula, so expand and collect.",
        D(r"f\left(f(x)\right)=m\left(mx+q\right)+q"),
        D(r"f\left(f(x)\right)=m^{2}x+q\left(m+1\right)"),
        "The new slope is $m^{2}$, and a square of a non-zero number is non-zero, so "
        "the result is a line that is not constant.",
        D(r"m\neq 0\implies m^{2}>0"),
        close(True, "The double nesting stays a non-constant line"),
    ],
    ("MATH 7.90", "E"): [
        "For the nesting to collapse to a parabola, the $x^{4}$ term would have to "
        "disappear, so look at the coefficient it carries.",
        D(r"g\left(g(x)\right)=a\left(ax^{2}+bx+c\right)^{2}+b\left(ax^{2}+bx+c\right)+c"),
        D(r"\text{coefficient of }x^{4}=a^{3}"),
        "This vanishes only when $a=0$, which is forbidden because $g$ is a parabola; "
        "no choice of $b$ or $c$ has any influence on it.",
        D(r"a\neq 0\implies a^{3}\neq 0"),
        close(False, "The $x^{4}$ term is always there, so the nesting is never a "
                     "parabola"),
    ],
    # ---- 7.91 Can a line trap a parabola --------------------------------- #
    ("MATH 7.91", "A"): [
        "An upward-opening parabola has a lowest point, and any level below that height "
        "gives a line the graph never reaches.",
        D(r"g(x)=a\left(x-h\right)^{2}+k\ge k\quad\text{for all }x,\qquad a>0"),
        "Take the horizontal line one unit under the vertex; it is a perfectly "
        "legitimate linear function.",
        D(r"f(x)=k-1\implies g(x)-f(x)\ge 1>0"),
        "The gap between the two graphs is at least one unit everywhere, so the line "
        "stays strictly below the parabola.",
        close(True, "Such a line exists, for instance that horizontal one"),
    ],
    ("MATH 7.91", "B"): [
        "A line above the whole graph would need $g(x)<f(x)$ for every $x$, so examine "
        "the difference far from the origin.",
        D(r"g(x)-f(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right),\quad a>0"),
        "The difference is itself an upward-opening parabola, so it has a lowest point "
        "and then climbs beyond every bound on both sides.",
        D(r"g(x)-f(x)>0\text{ for all }|x|\text{ large enough}"),
        "The arms of the parabola therefore rise past any line eventually, no matter "
        "how steep the line is chosen.",
        close(False, "No line can stay above the whole graph when $a>0$"),
    ],
    ("MATH 7.91", "C"): [
        "Subtracting a line changes only the $x$ term and the constant term, so the "
        "difference keeps the leading coefficient of $g$.",
        D(r"g(x)-f(x)=ax^{2}+\left(b-m\right)x+\left(c-q\right),\quad a>0"),
        "Completing the square exhibits a non-negative square multiplied by a positive "
        "number, plus a constant that is actually attained at the vertex.",
        D(r"g(x)-f(x)=a\left(x-h_{d}\right)^{2}+k_{d}\ge k_{d}"),
        "The value $k_{d}$ depends on the line chosen, but for each line it is a "
        "genuine number reached at one abscissa.",
        close(True, "The difference attains a smallest value for every linear $f$"),
    ],
    ("MATH 7.91", "D"): [
        "A negative leading coefficient turns the arms downwards, so the vertex is now "
        "the highest point of the graph.",
        D(r"g(x)=a\left(x-h\right)^{2}+k\le k\quad\text{for all }x,\qquad a<0"),
        "The square is non-negative and $a<0$, so the product is at most zero and the "
        "values never climb past the vertex height $k$.",
        D(r"f(x)=k+1\implies f(x)-g(x)\ge 1>0"),
        "The horizontal line one unit above the vertex therefore misses the graph "
        "entirely and stays above it.",
        close(True, "Such a horizontal line exists"),
    ],
    ("MATH 7.91", "E"): [
        "A strip between two parallel lines has bounded width, so being squeezed inside "
        "it would keep the difference to one of those lines bounded.",
        D(r"f_{1}(x)=mx+q_{1}\qquad f_{2}(x)=mx+q_{2}"),
        "Subtracting the lower line from $g$ leaves a parabola with the same leading "
        "coefficient $a\\neq 0$, and such a difference is unbounded.",
        D(r"g(x)-f_{1}(x)=ax^{2}+\left(b-m\right)x+\left(c-q_{1}\right)"),
        "For $a>0$ its values exceed $q_{2}-q_{1}$ once $|x|$ is large, and for $a<0$ "
        "they fall below the strip instead, so the graph escapes on one side or the "
        "other.",
        close(False, "A parabola always breaks out of a strip of finite width"),
    ],
    # ---- 7.92 Reading roots through a linear substitution ---------------- #
    ("MATH 7.92", "A"): [
        "Substituting the line into the outer formula replaces $y$ by a first-degree "
        "expression, so expand and collect the powers of $x$.",
        D(r"g(x)=A\left(mx+k\right)^{2}+B\left(mx+k\right)+C"),
        D(r"g(x)=Am^{2}x^{2}+\left(2Amk+Bm\right)x+\left(Ak^{2}+Bk+C\right)"),
        "The coefficient of $x^{2}$ is the product $Am^{2}$, and both factors are "
        "non-zero: $A$ by hypothesis and $m$ because the line is non-constant.",
        close(True, "The substitution produces a genuine quadratic function"),
    ],
    ("MATH 7.92", "B"): [
        "The composite is evaluated in two stages, so a zero of the whole thing is a "
        "zero produced at the second stage.",
        D(r"g\left(x_{0}\right)=q\left(f\left(x_{0}\right)\right)"),
        "If this number is zero then the value $y_{0}=f(x_{0})$ satisfies $q(y_{0})=0$, "
        "so it is one of the roots of $q$.",
        D(r"g\left(x_{0}\right)=0\iff q\left(y_{0}\right)=0,\quad y_{0}=f\left(x_{0}\right)"),
        "The reasoning uses nothing but the definition of nesting, so it applies to "
        "every real root of $g$.",
        close(True, "Each root of the composite is an abscissa where the line hits a "
                    "root of $q$"),
    ],
    ("MATH 7.92", "C"): [
        "The composite can only reach values that $q$ itself takes, so a $q$ that never "
        "vanishes hands its property straight over.",
        D(r"q(y)\neq 0\text{ for every real }y"),
        "For any real $x$ the number $f(x)$ is real, so $q$ evaluated there is non-zero "
        "as well.",
        D(r"g(x)=q\left(f(x)\right)\neq 0\quad\text{for all real }x"),
        "In terms of discriminants, $q$ having none means its graph misses the "
        "horizontal axis, and substituting a line cannot pull it back down.",
        close(True, "The composite has no real roots either"),
    ],
    ("MATH 7.92", "D"): [
        "The roots of the composite are the abscissas whose image under $f$ is a root "
        "of $q$, so they are the roots of $q$ pulled back through the line.",
        D(r"g(x)=0\iff f(x)\text{ is a root of }q\iff x=f^{-1}\left(\text{root}\right)"),
        "One concrete pair shows the shift at once.",
        D(r"f(x)=x+1\qquad q(y)=y^{2}\implies g(x)=\left(x+1\right)^{2}"),
        "The only root of $q$ is $0$, while the only root of $g$ is $-1$, so the two "
        "sets do not coincide.",
        close(False, "The line moves the roots unless it happens to be the identity"),
    ],
    ("MATH 7.92", "E"): [
        "The expansion already displays the leading coefficient of the composite, and "
        "the slope of the line is squared into it.",
        D(r"g(x)=Am^{2}x^{2}+\left(2Amk+Bm\right)x+\left(Ak^{2}+Bk+C\right)"),
        "So the coefficient of $x^{2}$ is $Am^{2}$, which equals $A$ only in the "
        "special case $m^{2}=1$.",
        D(r"m=2\implies\text{coefficient of }x^{2}=4A\neq A\text{ unless }A=0"),
        "Since $A\\neq 0$ is assumed, a slope such as $m=2$ genuinely changes the "
        "number in front of $x^{2}$.",
        close(False, "The leading coefficient is $Am^{2}$, not $A$"),
    ],
    # ---- 7.93 Equal values and the axis ---------------------------------- #
    ("MATH 7.93", "A"): [
        "Two equal values give an equation between the coefficients, so subtract the "
        "two evaluations and factor.",
        D(r"g(u)-g(v)=a\left(u^{2}-v^{2}\right)+b\left(u-v\right)"),
        D(r"g(u)-g(v)=\left(u-v\right)\left(a\left(u+v\right)+b\right)"),
        "The first factor is non-zero because $u$ and $v$ are distinct, so the second "
        "one must vanish, which pins down the sum.",
        D(r"a\left(u+v\right)+b=0\implies\frac{u+v}{2}=-\frac{b}{2a}"),
        "The right-hand side is exactly the abscissa of the axis of symmetry.",
        close(True, "The axis passes through the midpoint of the two abscissas"),
    ],
    ("MATH 7.93", "B"): [
        "Equal values need not be zero values, so nothing forces the common value onto "
        "the horizontal axis.",
        D(r"g(x)=x^{2}\qquad u=1\qquad v=-1"),
        D(r"g(1)=1=g(-1)"),
        "The hypothesis is satisfied with a common value of $1$, yet the only root of "
        "this parabola is $0$, which is neither $u$ nor $v$.",
        D(r"g(x)=0\iff x=0"),
        close(False, "Symmetric pairs of abscissas exist at every height, not only at "
                     "height zero"),
    ],
    ("MATH 7.93", "C"): [
        "Vertex form makes the symmetry visible: only the distance from the axis "
        "enters, through a square.",
        D(r"g(x)=a\left(x-h\right)^{2}+k,\qquad\ell:\;x=h"),
        "Evaluating at the two abscissas $h+t$ and $h-t$ squares the same number up to "
        "sign, so the two results agree.",
        D(r"g\left(h+t\right)=at^{2}+k\qquad g\left(h-t\right)=at^{2}+k"),
        "This holds for every positive $t$, and the two abscissas are genuinely "
        "different because $t\\neq 0$.",
        close(True, "Points mirrored in the axis always carry the same value"),
    ],
    ("MATH 7.93", "D"): [
        "The relation derived from $g(u)=g(v)$ involved no data beyond the "
        "coefficients, so read it again.",
        D(r"\left(u-v\right)\left(a\left(u+v\right)+b\right)=0,\quad u\neq v"),
        D(r"u+v=-\frac{b}{a}"),
        "Whatever pair of distinct abscissas with equal values one starts from, its sum "
        "is this one number, which is twice the abscissa of the axis.",
        close(True, "The sum is fixed by $a$ and $b$ alone"),
    ],
    ("MATH 7.93", "E"): [
        "The axis of symmetry always exists, and it supplies such a pair for free.",
        D(r"h=-\frac{b}{2a}\qquad u=h+1\qquad v=h-1"),
        "These two numbers are distinct, and vertex form shows they carry the same "
        "value.",
        D(r"g\left(h+1\right)=a+k=g\left(h-1\right)"),
        "The construction only needs $a\\neq 0$, which is part of being a quadratic "
        "function, so it works for every $g$ of this kind.",
        close(True, "Such a pair can always be produced"),
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
    # ---- 7.71 Touching at the vertex ------------------------------------- #
    ("MATH 7.71", "A"): [
        "Common points are the solutions of $g(x)=f(x)$, so bring everything to one "
        "side and see what kind of expression appears.",
        D(r"x^{2}+2x+3-2=x^{2}+2x+1=0"),
        "The left-hand side is a perfect square, which can vanish only where the "
        "bracket itself does.",
        D(r"\left(x+1\right)^{2}=0\iff x=-1"),
        "A double root counts as a single point of the plane, namely $(-1,2)$, and "
        "there is nowhere else the two graphs can agree.",
        close(True, "Exactly one point is shared"),
    ],
    ("MATH 7.71", "B"): [
        "The vertex sits on the axis of symmetry, whose abscissa comes from the first "
        "two coefficients, and its height is the value of $g$ there.",
        D(r"x=-\frac{2}{2\cdot 1}=-1"),
        D(r"g(-1)=1-2+3=2"),
        "So the vertex is the point $(-1,2)$, which is exactly the abscissa and height "
        "found for the single common point.",
        D(r"f(-1)=2=g(-1)"),
        close(True, "The contact happens precisely at the vertex"),
    ],
    ("MATH 7.71", "C"): [
        "The line is horizontal, so its slope is zero; compare that with the slope of "
        "the parabola at the contact abscissa.",
        D(r"g'(x)=2x+2"),
        D(r"g'(-1)=-2+2=0"),
        "Both slopes are zero at $x=-1$, which is no accident: the tangent at a vertex "
        "is always horizontal, and the difference $\\left(x+1\\right)^{2}$ having a "
        "double root is the algebraic form of that agreement.",
        close(True, "The two graphs share the same slope where they touch"),
    ],
    ("MATH 7.71", "D"): [
        "Crossing would mean the difference changes sign at the contact point, so track "
        "the sign of that difference.",
        D(r"g(x)-f(x)=\left(x+1\right)^{2}"),
        "A square is never negative, and here it is strictly positive on both sides of "
        "$x=-1$.",
        D(r"g(-2)-f(-2)=1>0\qquad g(0)-f(0)=1>0"),
        "The parabola stays above the line on either side and merely comes down to "
        "touch it once, so the line never passes from one side of the curve to the "
        "other.",
        close(False, "The graphs touch without crossing"),
    ],
    ("MATH 7.71", "E"): [
        "Real roots of $g$ exist according to the sign of its discriminant, so compute "
        "that number.",
        D(r"\Delta=2^{2}-4\cdot 1\cdot 3=4-12=-8"),
        "A negative discriminant leaves no real square root in the quadratic formula, "
        "so the equation $g(x)=0$ has no real solution at all.",
        D(r"g(x)=\left(x+1\right)^{2}+2\ge 2>0"),
        "Vertex form says the same thing more directly: the lowest value of $g$ is $2$, "
        "so the graph stays entirely above the horizontal axis.",
        close(False, "There are no real roots, let alone two distinct ones"),
    ],
    # ---- 7.84 Sliding a line until it touches ---------------------------- #
    ("MATH 7.84", "A"): [
        "The family slides a line of fixed slope up and down, and touching means the "
        "equation $g(x)=f_c(x)$ has a repeated solution, so form the difference and "
        "watch its discriminant.",
        D(r"x^{2}-2x-5-\left(x+c\right)=x^{2}-3x-\left(5+c\right)=0"),
        D(r"\Delta(c)=9+4\left(5+c\right)=29+4c"),
        "This is a first-degree expression in the parameter, so it vanishes for one "
        "single value.",
        D(r"29+4c=0\implies c=-\frac{29}{4}"),
        close(True, "Exactly one member of the family touches the parabola"),
    ],
    ("MATH 7.84", "B"): [
        "Passing through the origin fixes the parameter, since the intercept of "
        "$f_c$ is $c$ itself.",
        D(r"f_c(0)=c=0\implies f_{0}(x)=x"),
        "Now count the solutions of the difference at that parameter value.",
        D(r"\Delta(0)=29>0"),
        D(r"x=\frac{3\pm\sqrt{29}}{2}"),
        "A positive discriminant makes the square root a genuine positive number, so "
        "the two abscissas are real and different.",
        close(True, "The line through the origin cuts the parabola twice"),
    ],
    ("MATH 7.84", "C"): [
        "Whether a member meets the parabola is decided by the sign of the same "
        "discriminant, now read as a function of the shift.",
        D(r"\Delta(c)=29+4c"),
        D(r"c<-\frac{29}{4}\implies \Delta(c)<0"),
        "Taking $c=-10$, for instance, gives a negative value.",
        D(r"\Delta(-10)=29-40=-11<0"),
        "With no real solution left the line has slid too far down and shares no point "
        "with the curve.",
        close(False, "Sufficiently low members of the family miss the parabola "
                     "entirely"),
    ],
    ("MATH 7.84", "D"): [
        "The parameter enters $f_c$ only as an added constant, so it never touches the "
        "coefficient of $x$.",
        D(r"f_c(x)=x+c"),
        D(r"f_c\left(x_{2}\right)-f_c\left(x_{1}\right)=x_{2}-x_{1}"),
        "The rate of change is $1$ for every $c$, so all the members are parallel and "
        "the whole family is just one line sliding vertically.",
        close(True, "Every line of the family has slope one"),
    ],
    ("MATH 7.84", "E"): [
        "The common abscissas are the real roots of the difference, so look at what "
        "kind of equation that difference gives.",
        D(r"g(x)-f_c(x)=x^{2}-3x-\left(5+c\right)"),
        "The parameter only shifts the constant term; the coefficient of $x^{2}$ stays "
        "$1$ for every $c$, so the equation remains quadratic.",
        D(r"\text{leading coefficient}=1\neq 0\implies\text{at most two real roots}"),
        "Depending on the sign of the discriminant the count is two, one or none, but "
        "it can never be three.",
        close(True, "Two meetings is the maximum, whatever the shift"),
    ],
    # ---- 7.85 Choosing the leading coefficient --------------------------- #
    ("MATH 7.85", "A"): [
        "Here the parameter is the leading coefficient itself, so form the difference "
        "and treat its discriminant as a function of $a$.",
        D(r"ax^{2}+2x-3-\left(x+1\right)=ax^{2}+x-4=0"),
        D(r"\Delta(a)=1+16a"),
        "Tangency asks for a repeated root, that is a vanishing discriminant, which "
        "again is a first-degree condition on the parameter.",
        D(r"1+16a=0\implies a=-\frac{1}{16}"),
        "This value is real and non-zero, so it is an admissible member of the family.",
        close(True, "One parabola of the family touches the line"),
    ],
    ("MATH 7.85", "B"): [
        "Two distinct meetings require a strictly positive discriminant, so check "
        "whether that holds for every admissible parameter.",
        D(r"\Delta(a)=1+16a"),
        D(r"a<-\frac{1}{16}\implies \Delta(a)<0"),
        "Taking $a=-1$ gives a negative number, so that member has no real meeting "
        "abscissa at all.",
        D(r"\Delta(-1)=1-16=-15<0"),
        close(False, "Sufficiently negative leading coefficients destroy both "
                     "intersections"),
    ],
    ("MATH 7.85", "C"): [
        "Missing each other is the case of a negative discriminant, and the discriminant "
        "moves along a straight line as the parameter varies.",
        D(r"\Delta(a)=1+16a<0\iff a<-\frac{1}{16}"),
        "Any parameter below that threshold works; with $a=-1$ the difference has no "
        "real root.",
        D(r"-x^{2}+x-4=0\implies \Delta=1-16=-15<0"),
        "The corresponding parabola opens downwards and stays entirely below the line.",
        close(True, "Such a choice of the leading coefficient exists"),
    ],
    ("MATH 7.85", "D"): [
        "The axis of a parabola is computed from its first two coefficients, and here "
        "only the leading one carries the parameter.",
        D(r"x=-\frac{2}{2a}=-\frac{1}{a}"),
        "The result depends on $a$, so different members have different axes.",
        D(r"a=1\implies x=-1\qquad a=2\implies x=-\frac{1}{2}"),
        close(False, "The axis slides as the leading coefficient changes"),
    ],
    ("MATH 7.85", "E"): [
        "The crossing with the vertical coordinate axis is the value at $x=0$, and the "
        "parameter multiplies $x^{2}$, which vanishes there.",
        D(r"g_a(0)=a\cdot 0+2\cdot 0-3=-3"),
        "So every member of the family reaches the same height at $x=0$, however large "
        "or small the leading coefficient is.",
        D(r"a=1\implies g_{1}(0)=-3\qquad a=-5\implies g_{-5}(0)=-3"),
        "The whole family therefore pivots through the single point $(0,-3)$.",
        close(True, "All of them cross the $y$-axis at that same point"),
    ],
    # ---- 7.94 A pencil of lines and two tangents ------------------------- #
    ("MATH 7.94", "A"): [
        "The parameter multiplies the bracket $x-1$, so it loses all its influence "
        "wherever that bracket vanishes.",
        D(r"f_t(1)=t\cdot 0+2=2"),
        "Every member of the family therefore reaches the height $2$ at the abscissa "
        "$1$, whatever the slope.",
        D(r"t=0\implies f_{0}(x)=2\qquad t=3\implies f_{3}(x)=3x-1"),
        "Both of these pass through $(1,2)$, and the same computation works for any "
        "slope: the family is a pencil of lines hinged at that point.",
        close(True, "One fixed point is common to all the lines"),
    ],
    ("MATH 7.94", "B"): [
        "Touching at a single point means the equation $g(x)=f_t(x)$ has a repeated "
        "solution, so collect the terms and set the discriminant to zero.",
        D(r"x^{2}-4x+6-t\left(x-1\right)-2=x^{2}-\left(4+t\right)x+\left(4+t\right)=0"),
        D(r"\Delta(t)=\left(4+t\right)^{2}-4\left(4+t\right)=t\left(4+t\right)"),
        "The condition is now a quadratic equation in the slope, and it factors "
        "immediately.",
        D(r"t\left(4+t\right)=0\implies t=0\text{ or }t=-4"),
        "The first gives the horizontal line $y=2$ touching at the vertex $(2,2)$, the "
        "second the line $y=-4x+6$ touching at $(0,6)$.",
        close(True, "There are exactly two such slopes"),
    ],
    ("MATH 7.94", "C"): [
        "A member misses the parabola exactly when the discriminant is negative, so "
        "study the sign of the product just obtained.",
        D(r"\Delta(t)=t\left(4+t\right)"),
        "A product of two factors is negative when they have opposite signs, which "
        "happens strictly between the two roots.",
        D(r"-4<t<0\implies \Delta(t)<0"),
        D(r"t=-2\implies \Delta(-2)=\left(-2\right)\cdot 2=-4<0"),
        "The line $y=-2x+4$ therefore shares no point with the curve.",
        close(True, "Slopes in that window make the line miss the parabola"),
    ],
    ("MATH 7.94", "D"): [
        "Two distinct meetings need a strictly positive discriminant, and the "
        "discriminant has already been factored.",
        D(r"\Delta(t)=t\left(4+t\right)"),
        "It vanishes at $t=0$ and $t=-4$, where the line only touches the curve, and it "
        "is negative in between, where nothing is shared.",
        D(r"t=-2\implies \Delta=-4<0\qquad t=0\implies \Delta=0"),
        close(False, "Some slopes give one meeting and some give none, so two distinct "
                     "meetings do not always occur"),
    ],
    ("MATH 7.94", "E"): [
        "The fixed point of the pencil was found to be $(1,2)$, so test whether the "
        "parabola reaches that height there.",
        D(r"g(1)=1-4+6=3"),
        "The parabola is at height $3$ while the fixed point sits at height $2$, so the "
        "point lies strictly below the curve.",
        D(r"\text{vertex of }g=\left(2,2\right)\quad\text{and}\quad g(1)=3\neq 2"),
        "That position is exactly what makes the two tangent lines and the window of "
        "missing lines possible.",
        close(False, "The hinge point of the family is not on the parabola"),
    ],
    # ---- 7.95 Sliding the parabola sideways ------------------------------ #
    ("MATH 7.95", "A"): [
        "The family moves a fixed parabola left and right, and tangency means the "
        "equation $g_r(x)=f(x)$ has a repeated solution.",
        D(r"\left(x-r\right)^{2}-4-\left(2x-1\right)"
          r"=x^{2}-\left(2r+2\right)x+\left(r^{2}-3\right)=0"),
        D(r"\Delta(r)=\left(2r+2\right)^{2}-4\left(r^{2}-3\right)=8r+16"),
        "The squares in $r$ cancel, so the condition is a first-degree equation with "
        "one solution.",
        D(r"8r+16=0\implies r=-2"),
        "At that shift the difference becomes $\\left(x+1\\right)^{2}$, a perfect "
        "square touching zero once.",
        close(True, "Exactly one shift makes the line tangent"),
    ],
    ("MATH 7.95", "B"): [
        "Missing each other means a negative discriminant, and the discriminant just "
        "computed increases steadily with the shift.",
        D(r"\Delta(r)=8r+16"),
        D(r"r<-2\implies \Delta(r)<0"),
        "Taking $r=-3$, for instance, leaves no real solution.",
        D(r"\Delta(-3)=-24+16=-8<0"),
        "Pushed far enough to the left, the parabola has slid out from under the rising "
        "line and the two curves share nothing.",
        close(True, "Sufficiently negative shifts separate the graphs"),
    ],
    ("MATH 7.95", "C"): [
        "The formula is already in vertex form, so the turning point can be read "
        "straight off it.",
        D(r"g_r(x)=\left(x-r\right)^{2}-4\implies\text{vertex}=\left(r,-4\right)"),
        "The shift appears in the bracket only, which moves the vertex sideways; the "
        "constant $-4$ outside the square is the height, and $r$ never enters it.",
        D(r"r=0\implies\text{vertex}\left(0,-4\right)\qquad "
          r"r=5\implies\text{vertex}\left(5,-4\right)"),
        close(False, "The vertex height stays $-4$ for every shift"),
    ],
    ("MATH 7.95", "D"): [
        "The axis of symmetry is the vertical line through the vertex, and vertex form "
        "puts the vertex at abscissa $r$.",
        D(r"g_r(x)=\left(x-r\right)^{2}-4\implies\ell:\;x=r"),
        "The mirrored values confirm it, since only the distance from $r$ enters the "
        "square.",
        D(r"g_r\left(r+t\right)=t^{2}-4=g_r\left(r-t\right)"),
        "Changing $r$ therefore drags the axis along with the whole graph.",
        close(True, "The axis moves exactly as much as the shift"),
    ],
    ("MATH 7.95", "E"): [
        "The crossing with the vertical coordinate axis is the value at $x=0$, so "
        "substitute and see whether the shift survives.",
        D(r"g_r(0)=\left(0-r\right)^{2}-4=r^{2}-4"),
        "The result depends on $r$, and two members already disagree.",
        D(r"r=0\implies g_{0}(0)=-4\qquad r=3\implies g_{3}(0)=5"),
        "Sliding a parabola sideways changes the height at which it passes the $y$-axis.",
        close(False, "The family crosses the $y$-axis at different points"),
    ],
    # ---- 7.96 Rebuild from a vertex and a point -------------------------- #
    ("MATH 7.96", "A"): [
        "A slope and one point determine a line, and the point-slope shape is the "
        "quickest route to its formula.",
        D(r"f(x)=-3\left(x-1\right)+2"),
        D(r"f(x)=-3x+3+2=-3x+5"),
        "The check is immediate: the slope is $-3$ and the value at $x=1$ is $2$, as "
        "required.",
        D(r"f(1)=-3+5=2"),
        close(True, "The recovered formula is exactly the one claimed"),
    ],
    ("MATH 7.96", "B"): [
        "A leading coefficient together with a vertex determines a parabola, and vertex "
        "form assembles it directly.",
        D(r"g(x)=2\left(x-2\right)^{2}-8"),
        D(r"g(x)=2x^{2}-8x+8-8=2x^{2}-8x"),
        "The constant terms cancel, which is worth checking against the vertex: the "
        "axis is at $x=-\\left(-8\\right)/\\left(2\\cdot 2\\right)=2$ and the value "
        "there is $8-16=-8$.",
        close(True, "The expanded formula matches the claim"),
    ],
    ("MATH 7.96", "C"): [
        "With no constant term the recovered formula factors at sight, so the roots "
        "need no quadratic formula.",
        D(r"g(x)=2x^{2}-8x=2x\left(x-4\right)"),
        "A product vanishes exactly when one of its factors does, and the factor $2$ "
        "never does.",
        D(r"2x\left(x-4\right)=0\iff x=0\text{ or }x=4"),
        "The midpoint of the two roots is $2$, which is the axis of symmetry found from "
        "the vertex, so the two computations agree.",
        close(True, "The roots are $0$ and $4$"),
    ],
    ("MATH 7.96", "D"): [
        "A common point on the vertical coordinate axis would mean the two functions "
        "agree at $x=0$, so evaluate both there.",
        D(r"f(0)=5\qquad g(0)=0"),
        "The heights differ, so $x=0$ is not a meeting abscissa; solving the meeting "
        "equation confirms where the graphs actually cross.",
        D(r"2x^{2}-8x=-3x+5\implies 2x^{2}-5x-5=0"),
        D(r"\Delta=25+40=65\implies x=\frac{5\pm\sqrt{65}}{4}"),
        "Neither of these abscissas is $0$, since the constant term $-5$ of that "
        "equation is non-zero.",
        close(False, "The graphs do meet twice, but never on the $y$-axis"),
    ],
    ("MATH 7.96", "E"): [
        "Only the term $Af(x)^{2}$ can supply an $x^{2}$, so square the recovered line "
        "and compare that coefficient with the one in $g$.",
        D(r"f(x)^{2}=\left(-3x+5\right)^{2}=9x^{2}-30x+25"),
        D(r"9A=2\implies A=\frac{2}{9}"),
        "The division is legitimate because the slope $-3$ is non-zero, and no other "
        "value of $A$ can reproduce the coefficient $2$; matching the $x$ term and the "
        "constant term afterwards gives $B=\\frac{4}{9}$ and $C=-\\frac{70}{9}$.",
        close(True, "The leading coefficient of the rewriting is forced to be "
                    "$\\frac{2}{9}$"),
    ],
    # ---- 7.64 Gap on the y-axis ------------------------------------------ #
    # ---- 7.68 Building a parabola out of a line -------------------------- #
    # ---- 7.75 Rewriting through a shifted line --------------------------- #
    # ---- 7.76 A line the parabola never reaches -------------------------- #
    # ---- 7.87 Root distance, midpoint and a sign ------------------------- #
    # ---- 7.97 Axis gap, Vieta and nested order --------------------------- #
    ("MATH 7.97", "E"): [
        "The abscissas where the graphs meet solve $g(x)=f(x)$, so bring the line over "
        "and read the discriminant.",
        D(r"x^{2}-5x+2-\left(3x-7\right)=x^{2}-8x+9=0"),
        D(r"\Delta=\left(-8\right)^{2}-4\left(1\right)\left(9\right)=64-36=28"),
        "A strictly positive discriminant makes the square root a genuine positive "
        "number, so the quadratic formula returns two different real abscissas.",
        D(r"x=\frac{8\pm\sqrt{28}}{2}=4\pm\sqrt{7}"),
        "Both values are real and they differ by $2\\sqrt{7}$, so the line cuts the "
        "parabola in two separate points.",
        close(True, "The graphs meet at exactly two distinct points"),
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
# Single-model stems: one parabola, one line, a story, a table, conditions
# --------------------------------------------------------------------------- #

SINGLE_KINDS = {"parabola", "line", "applied", "table", "rebuild"}


def ptex(expr) -> str:
    """A polynomial of degree at most two, written in descending order."""
    a2, a1, a0 = poly_coeffs(expr)
    out = ""
    for coef, base in ((a2, "x^{2}"), (a1, "x"), (a0, "")):
        if coef == 0:
            continue
        mag = abs(coef)
        body = base if (base and mag == 1) else f"{F(mag)}{base}"
        out += ("-" if coef < 0 else ("+" if out else "")) + body
    return out or "0"


def signed(v) -> str:
    """A number ready to be appended to an expression: ``+3`` or ``-3``."""
    v = Rational(v)
    return f"-{F(-v)}" if v < 0 else f"+{F(v)}"


def factor_tex(r) -> str:
    r = Rational(r)
    if r == 0:
        return "x"
    return rf"\left(x-{F(r)}\right)" if r > 0 else rf"\left(x+{F(-r)}\right)"


def claim_num(s: str):
    """The rational number a claim displays, or None when it is not one."""
    try:
        return Rational(parse_poly(s))
    except Exception:
        return None


def perfect_sqrt(n):
    n = Rational(n)
    if n < 0:
        return None
    r = Rational(int(round(float(n) ** 0.5)))
    return r if r * r == n else None


def pairs_from_table(md: str):
    pts = []
    for line in (md or "").splitlines():
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) != 2:
            continue
        vals = []
        for c in cells:
            v = claim_num(c.strip("$"))
            if v is None:
                vals = None
                break
            vals.append(v)
        if vals:
            pts.append((vals[0], vals[1]))
    return pts


def diffs(seq):
    return [seq[i + 1] - seq[i] for i in range(len(seq) - 1)]


def table_fit(points):
    """Degree and rule of the polynomial behind an equally spaced table."""
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    dx = xs[1] - xs[0]
    d1 = diffs(ys)
    if len(set(d1)) == 1:
        m = Rational(d1[0], dx)
        return 1, expand(m * (x - xs[0]) + ys[0])
    d2 = diffs(d1)
    if len(set(d2)) == 1:
        a = Rational(d2[0]) / (2 * dx * dx)
        b = Rational(d1[0]) / dx - a * (2 * xs[0] + dx)
        c = ys[0] - a * xs[0] ** 2 - b * xs[0]
        return 2, expand(a * x**2 + b * x + c)
    return 0, None


def rebuild_from_conditions(ctx: str):
    """Turn the stated conditions of a rebuild stem into a name and a rule."""
    m = re.search(
        r"parabola \$([A-Za-z])\$ has zeros \$([^$]+)\$ and \$([^$]+)\$ and "
        r"leading coefficient \$([^$]+)\$",
        ctx,
    )
    if m:
        name = m.group(1)
        r1, r2, a = (claim_num(m.group(i)) for i in (2, 3, 4))
        rule = expand(a * (x - r1) * (x - r2))
        build = [
            "Two zeros and a leading coefficient describe a parabola completely: the "
            "zeros fix the factors and the coefficient fixes the vertical stretch.",
            D(rf"{name}(x)={F(a)}{factor_tex(r1)}{factor_tex(r2)}"),
            "Multiplying the two brackets out puts the rule in standard form.",
            D(f"{name}(x)={ptex(rule)}"),
        ]
        return name, rule, build

    m = re.search(
        r"line \$([A-Za-z])\$ has slope \$([^$]+)\$ and passes through the point "
        r"\$\(([^,]+),([^)]+)\)\$",
        ctx,
    )
    if m:
        name = m.group(1)
        slope, px, py = (claim_num(m.group(i)) for i in (2, 3, 4))
        rule = expand(slope * (x - px) + py)
        build = [
            "A slope and one point are enough for a line: start at the given point and "
            "walk along the slope.",
            D(rf"{name}(x)={F(slope)}{factor_tex(px)}{signed(py)}"),
            "Expanding the bracket puts the rule in the familiar shape.",
            D(f"{name}(x)={ptex(rule)}"),
        ]
        return name, rule, build

    m = re.search(
        r"parabola \$([A-Za-z])\$ has its vertex at \$\(([^,]+),([^)]+)\)\$ and "
        r"passes through the point \$\(([^,]+),([^)]+)\)\$",
        ctx,
    )
    if m:
        name = m.group(1)
        h, k, px, py = (claim_num(m.group(i)) for i in (2, 3, 4, 5))
        a = Rational(py - k, (px - h) ** 2)
        rule = expand(a * (x - h) ** 2 + k)
        build = [
            "A vertex already fixes the shape up to one stretch factor, so write the "
            "parabola in completed-square form and let the extra point decide the "
            "factor.",
            D(rf"{name}(x)=a{factor_tex(h)}^{{2}}{signed(k)}"),
            f"Substituting the point $({F(px)},{F(py)})$ leaves one equation for $a$.",
            D(
                rf"{F(py)}=a\left({F(px)}-{par(h)}\right)^{{2}}{signed(k)}"
                rf"\Rightarrow a={F(a)}"
            ),
            "Expanding the square puts the rule in standard form.",
            D(f"{name}(x)={ptex(rule)}"),
        ]
        return name, rule, build

    return None, None, None


def single_model(task: dict):
    kind = task.get("stem_kind")
    if kind not in SINGLE_KINDS:
        return None
    ctx = task.get("context", "")

    if kind == "table":
        pts = pairs_from_table(task.get("tables_markdown", ""))
        if len(pts) < 4:
            return None
        deg, fit = table_fit(pts)
        return {"kind": kind, "points": pts, "deg": deg, "fit": fit, "name": "y"}

    m = re.search(r"\$([A-Za-z])\(x\)\s*=\s*([^$]+)\$", ctx)
    if m:
        try:
            expr = expand(parse_poly(m.group(2)))
        except Exception:
            return None
        if not numeric_ok(expr):
            return None
        raw = m.group(2).strip()
        # A stem may hand the rule over factored or completed; keep that shape so the
        # explanations can start from what the reader actually sees.
        given = None if raw.replace(" ", "") == ptex(expr).replace(" ", "") else raw
        return {"kind": kind, "name": m.group(1), "expr": expr, "given": given, "build": None}

    name, rule, build = rebuild_from_conditions(ctx)
    if rule is None:
        return None
    return {"kind": kind, "name": name, "expr": rule, "build": build}


def q_bits(mod):
    """Coefficients, vertex and discriminant of the model's quadratic."""
    q = mod["expr"]
    a2, a1, a0 = poly_coeffs(q)
    h, k, _ = vertex_of(q)
    return q, a2, a1, a0, h, k, Rational(discriminant(Poly(q, x)))


def roots_line(q, name="x"):
    """A display naming the two rational roots, plus the roots themselves."""
    rs = rational_roots(q)
    if not rs or len(rs) != 2:
        return None, rs
    return D(rf"x_{{1}}={F(rs[0])}\qquad x_{{2}}={F(rs[1])}"), rs


# --- claims about a single parabola --------------------------------------- #

def h_axis(m, mod):
    name, claim = m.group(1), claim_num(m.group(2))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    truth = claim == h
    parts = [
        "A parabola is its own mirror image in one vertical line, and the abscissa "
        "of that line is settled by the first two coefficients alone.",
        D(r"x=-\frac{b}{2a}"),
        D(f"{name}(x)={ptex(q)}"),
        axis_display(a2, a1, h),
        close(
            truth,
            f"The mirror line is $x={F(h)}$, exactly the line named in the claim"
            if truth
            else f"The mirror line is $x={F(h)}$ while the claim names $x={F(claim)}$",
        ),
    ]
    return truth, parts


def h_axis_yaxis(m, mod):
    name = m.group(1)
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    truth = h == 0
    parts = [
        "Symmetry about the $y$-axis means the axis of symmetry is the line $x=0$, "
        "and that happens exactly when the middle coefficient disappears.",
        D(f"{name}(x)={ptex(q)}"),
        axis_display(a2, a1, h),
        "Testing a pair of opposite inputs shows the same behaviour from the other "
        "side.",
        D(
            rf"{name}(-x)={ptex(expand(q.subs(x, -x)))}"
        ),
        close(
            truth,
            "The rule is unchanged when $x$ is replaced by $-x$, the algebraic form of "
            "symmetry about the $y$-axis"
            if truth
            else f"The mirror line is $x={F(h)}$, not the $y$-axis",
        ),
    ]
    return truth, parts


def h_vertex(m, mod):
    name = m.group(1)
    ch, ck = claim_num(m.group(2)), claim_num(m.group(3))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    truth = (ch == h) and (ck == k)
    sub, _ = subst_display(name, q, h)
    parts = [
        "The turning point lies on the axis of symmetry, so its abscissa comes from "
        "the coefficients and its height is the value of the function there.",
        D(f"{name}(x)={ptex(q)}"),
        axis_display(a2, a1, h),
        "Evaluating on the axis gives the height.",
        sub,
        close(
            truth,
            rf"The turning point is $\left({F(h)},{F(k)}\right)$, the point the claim names"
            if truth
            else rf"The turning point is $\left({F(h)},{F(k)}\right)$ while the claim "
            rf"reports $\left({F(ch)},{F(ck)}\right)$",
        ),
    ]
    return truth, parts


def h_opens(m, mod):
    name, word = m.group(1), m.group(2)
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    truth = (a2 > 0) == (word == "upwards")
    actual = "upwards" if a2 > 0 else "downwards"
    parts = [
        "Far away from the turning point the square term dwarfs the rest, so the sign "
        "of the leading coefficient decides on its own which way the arms point.",
        D(f"{name}(x)={ptex(q)}"),
        D(rf"a={F(a2)}"),
        f"A {'positive' if a2 > 0 else 'negative'} leading coefficient sends both arms "
        f"{actual}, and the turning point is the "
        f"{'lowest' if a2 > 0 else 'highest'} point of the graph.",
        close(
            truth,
            f"The graph opens {actual}, which is what the claim says"
            if truth
            else f"The graph opens {actual}, not {word}",
        ),
    ]
    return truth, parts


def h_sum_roots(m, mod):
    name, claim = m.group(1), claim_num(m.group(2))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    S = Rational(-a1, 1) / a2
    truth = claim == S
    parts = [
        "Vieta's relations read the sum of the two roots straight off the "
        "coefficients, with no equation to solve: it is minus the middle coefficient "
        "divided by the leading one.",
        D(r"S=-\frac{b}{a}"),
        D(f"{name}(x)={ptex(q)}"),
        D(rf"S=-\frac{{{F(a1)}}}{{{F(a2)}}}={F(S)}"),
    ]
    disp, rs = roots_line(q)
    if disp:
        parts.append(f"The roots themselves are ${F(rs[0])}$ and ${F(rs[1])}$, and they "
                     f"do add up to ${F(S)}$.")
    parts.append(
        close(
            truth,
            f"The sum is ${F(S)}$, the number the claim reports"
            if truth
            else f"The sum is ${F(S)}$ while the claim reports ${F(claim)}$",
        )
    )
    return truth, parts


def h_prod_roots(m, mod):
    name, claim = m.group(1), claim_num(m.group(2))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    P = Rational(a0, 1) / a2
    truth = claim == P
    parts = [
        "The second of Vieta's relations gives the product of the roots as the "
        "constant term divided by the leading coefficient.",
        D(r"P=\frac{c}{a}"),
        D(f"{name}(x)={ptex(q)}"),
        D(rf"P=\frac{{{F(a0)}}}{{{F(a2)}}}={F(P)}"),
    ]
    disp, rs = roots_line(q)
    if disp:
        parts.append(
            f"Multiplying the roots ${F(rs[0])}$ and ${F(rs[1])}$ confirms the value."
        )
    parts.append(
        close(
            truth,
            f"The product is ${F(P)}$, exactly what the claim reports"
            if truth
            else f"The product is ${F(P)}$ while the claim reports ${F(claim)}$",
        )
    )
    return truth, parts


def h_roots(m, mod):
    name = m.group(1)
    c1, c2 = claim_num(m.group(2)), claim_num(m.group(3))
    q, a2, a1, a0, h, k, d = q_bits(mod)
    rs = rational_roots(q) or []
    truth = len(rs) == 2 and sorted([c1, c2]) == rs
    parts = [
        "The roots are the inputs where the graph touches the $x$-axis, so set the "
        "rule equal to zero; the discriminant says first how many such inputs exist.",
        D(f"{name}(x)={ptex(q)}"),
        disc_display(q),
    ]
    if len(rs) == 2:
        parts.append("A positive discriminant gives two separate roots, delivered by "
                     "the quadratic formula.")
        parts.append(D(rf"x_{{1}}={F(rs[0])}\qquad x_{{2}}={F(rs[1])}"))
        parts.append(
            close(
                truth,
                f"The zeros are ${F(rs[0])}$ and ${F(rs[1])}$, the pair named in the claim"
                if truth
                else f"The zeros are ${F(rs[0])}$ and ${F(rs[1])}$ while the claim names "
                f"${F(c1)}$ and ${F(c2)}$",
            )
        )
    else:
        parts.append(
            close(False, "A negative discriminant leaves no real root at all, so no "
                         "such pair of zeros exists")
        )
    return truth, parts


def h_root_distance(m, mod):
    name, claim = m.group(1), claim_num(m.group(2))
    q, a2, a1, a0, h, k, d = q_bits(mod)
    root = perfect_sqrt(d)
    dist = None if root is None else root / abs(a2)
    truth = dist is not None and dist == claim
    parts = [
        "The two roots sit symmetrically on either side of the axis, so their gap is "
        "the square root of the discriminant divided by the size of the leading "
        "coefficient.",
        D(r"\left|x_{1}-x_{2}\right|=\frac{\sqrt{\Delta}}{\left|a\right|}"),
        disc_display(q),
    ]
    if dist is not None:
        parts.append(
            D(
                rf"\left|x_{{1}}-x_{{2}}\right|=\frac{{{F(root)}}}{{{F(abs(a2))}}}"
                rf"={F(dist)}"
            )
        )
        rs = rational_roots(q) or []
        if len(rs) == 2:
            parts.append(
                f"The roots ${F(rs[0])}$ and ${F(rs[1])}$ are indeed ${F(dist)}$ apart."
            )
        parts.append(
            close(
                truth,
                f"The gap is ${F(dist)}$, the distance the claim reports"
                if truth
                else f"The gap is ${F(dist)}$ while the claim reports ${F(claim)}$",
            )
        )
    else:
        parts.append(close(False, "The discriminant is not a square of a rational "
                                  "number, so the claimed distance cannot be right"))
    return truth, parts


def h_root_count(m, mod):
    name, phrase = m.group(1), m.group(2)
    q, a2, a1, a0, h, k, d = q_bits(mod)
    actual = "two distinct real solutions" if d > 0 else (
        "exactly one real solution" if d == 0 else "no real solution"
    )
    truth = actual == phrase
    parts = [
        "The number of real solutions of a quadratic equation is decided by the "
        "discriminant, the expression under the square root of the solution formula.",
        D(r"\Delta=b^{2}-4ac"),
        D(f"{name}(x)={ptex(q)}"),
        disc_display(q),
        f"A discriminant that is {'positive' if d > 0 else ('zero' if d == 0 else 'negative')} "
        f"means the equation has {actual}.",
        close(
            truth,
            f"There are {actual}, which is what the claim says"
            if truth
            else f"There are {actual}, not {phrase}",
        ),
    ]
    return truth, parts


def h_complete_square(m, mod):
    name, claimed = m.group(1), m.group(2)
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    try:
        claimed_poly = expand(parse_poly(claimed))
    except Exception:
        claimed_poly = None
    truth = claimed_poly is not None and expand(claimed_poly - q) == 0
    sub, _ = subst_display(name, q, h)
    parts = [
        "Completing the square rewrites a parabola as $a(x-h)^{2}+k$, where $h$ is the "
        "abscissa of the axis and $k$ the height of the turning point, so both numbers "
        "have to be produced first.",
        D(f"{name}(x)={mod['given']}") if mod.get("given") else D(f"{name}(x)={ptex(q)}"),
        axis_display(a2, a1, h),
        "The height of the turning point is the value on that axis.",
        sub,
        "Putting the stretch, the shift and the height together gives",
        D(f"{name}(x)={vertex_form_string(a2, h, k)}"),
        close(
            truth,
            "This is the very expression the claim displays"
            if truth
            else f"The claim displays ${claimed}$, a different expression",
        ),
    ]
    return truth, parts


def _expansion_parts(name, mod, claimed, verb):
    q = mod["expr"]
    try:
        claimed_poly = expand(parse_poly(claimed))
    except Exception:
        claimed_poly = None
    truth = claimed_poly is not None and expand(claimed_poly - q) == 0
    parts = [
        f"{verb} means multiplying every bracket out and collecting equal powers of "
        "$x$; nothing else about the function changes.",
    ]
    if mod.get("given"):
        parts.append(D(f"{name}(x)={mod['given']}"))
    parts.append(D(f"{name}(x)={ptex(q)}"))
    if claimed_poly is None or truth:
        parts.append(
            "Every coefficient of the expansion can now be compared with the one the "
            "claim displays."
        )
        parts.append(
            close(True, "The two rules agree in all three coefficients")
            if truth
            else close(False, "The displayed rule cannot be read as a polynomial at all")
        )
    else:
        mm = first_mismatch(claimed_poly, q)
        if mm is not None:
            t, pv, qv = mm
            parts.append(
                f"The claim writes ${claimed}$, which takes the value ${F(pv)}$ at "
                f"$x={F(t)}$ where the true rule gives ${F(qv)}$."
            )
        parts.append(close(False, "The two expressions therefore differ"))
    return truth, parts


def h_expand(m, mod):
    return _expansion_parts(m.group(1), mod, m.group(2), "Expanding")


def h_rule(m, mod):
    name, claimed = m.group(1), m.group(2)
    q = mod["expr"]
    try:
        claimed_poly = expand(parse_poly(claimed))
    except Exception:
        claimed_poly = None
    truth = claimed_poly is not None and expand(claimed_poly - q) == 0
    parts = list(mod.get("build") or [])
    if not parts:
        parts = [
            "The stated conditions single out one rule, so rebuild it before reading "
            "the claim.",
            D(f"{name}(x)={ptex(q)}"),
        ]
    if truth:
        parts.append(close(True, "The rebuilt rule is the one printed in the claim"))
    else:
        parts.append(
            close(False, f"The claim prints ${claimed}$, which is not that rule")
        )
    return truth, parts


def h_extreme(m, mod):
    word, name, claim = m.group(1), m.group(2), claim_num(m.group(3))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    wants_min = word == "smallest"
    has_it = (a2 > 0) == wants_min
    truth = has_it and claim == k
    sub, _ = subst_display(name, q, h)
    parts = [
        "A parabola reaches its extreme value at the turning point and nowhere else, "
        "so locate the axis first and then read the height there.",
        D(f"{name}(x)={ptex(q)}"),
        axis_display(a2, a1, h),
        sub,
    ]
    if a2 > 0:
        parts.append(
            f"The leading coefficient ${F(a2)}$ is positive, so the arms rise on both "
            f"sides and ${F(k)}$ is the smallest value the function ever takes; there "
            "is no largest one."
        )
    else:
        parts.append(
            f"The leading coefficient ${F(a2)}$ is negative, so the arms fall on both "
            f"sides and ${F(k)}$ is the largest value the function ever takes; there "
            "is no smallest one."
        )
    if truth:
        parts.append(close(True, f"That extreme value is ${F(k)}$, exactly as claimed"))
    elif has_it:
        parts.append(
            close(False, f"The {word} value is ${F(k)}$ while the claim reports ${F(claim)}$")
        )
    else:
        parts.append(
            close(False, f"A parabola opening this way has no {word} value at all")
        )
    return truth, parts


def h_yint(m, mod):
    name, claim = m.group(1), claim_num(m.group(2))
    expr = mod["expr"]
    sub, val = subst_display(name, expr, 0)
    truth = val == claim
    parts = [
        "The graph meets the $y$-axis where the input is zero, so the intercept is "
        "simply the constant term of the rule.",
        D(f"{name}(x)={ptex(expr)}"),
        sub,
        close(
            truth,
            f"The graph cuts the $y$-axis at $y={F(val)}$, the height the claim names"
            if truth
            else f"The graph cuts the $y$-axis at $y={F(val)}$ while the claim names "
            f"$y={F(claim)}$",
        ),
    ]
    return truth, parts


def h_value(m, mod):
    name, arg, claim = m.group(1), claim_num(m.group(2)), claim_num(m.group(3))
    if name != mod["name"] or arg is None or claim is None:
        return None
    expr = mod["expr"]
    sub, val = subst_display(name, expr, arg)
    truth = val == claim
    parts = [
        "Evaluating a function means putting the number in place of every $x$ and "
        "working the arithmetic out once.",
        D(f"{name}(x)={ptex(expr)}"),
        sub,
        rf"The graph therefore passes through the point $\left({F(arg)},{F(val)}\right)$.",
        close(
            truth,
            f"The value is ${F(val)}$, precisely the number in the claim"
            if truth
            else f"The value is ${F(val)}$ while the claim states ${F(claim)}$",
        ),
    ]
    return truth, parts


def h_monotone_q(m, mod):
    name, word, rel, bound = m.group(1), m.group(2), m.group(3), claim_num(m.group(4))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    if a2 > 0:
        truth = (bound <= h) if word == "decreasing" else (bound >= h)
    else:
        truth = False
    side = "left" if rel == "<" else "right"
    parts = [
        "A parabola changes direction exactly once, at its axis, so a claim about a "
        "whole half-line is decided by where that axis sits.",
        D(f"{name}(x)={ptex(q)}"),
        axis_display(a2, a1, h),
    ]
    if a2 > 0:
        parts.append(
            f"With a positive leading coefficient the graph falls on everything to the "
            f"left of $x={F(h)}$ and rises on everything to its right."
        )
    else:
        parts.append(
            f"With a negative leading coefficient the graph rises to the left of "
            f"$x={F(h)}$ and falls to its right, so it can never be {word} on a "
            f"half-line stretching to infinity on the {side}."
        )
    parts.append(
        close(
            truth,
            f"The half-line $x{rel}{F(bound)}$ lies entirely on the {word} side of the axis"
            if truth
            else f"The half-line $x{rel}{F(bound)}$ reaches across the axis $x={F(h)}$, "
            f"where the direction changes",
        )
    )
    return truth, parts


def h_range(m, mod):
    name, rel, bound = m.group(1), m.group(2), claim_num(m.group(3))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    at_least = rel == "ge"
    truth = (a2 > 0 and bound <= k) if at_least else (a2 < 0 and bound >= k)
    sub, _ = subst_display(name, q, h)
    sym = r"\ge" if at_least else r"\le"
    parts = [
        "An inequality that has to hold for every real $x$ is a statement about the "
        "extreme value of the parabola, so the turning point decides it.",
        axis_display(a2, a1, h),
        sub,
        f"The leading coefficient ${F(a2)}$ is "
        f"{'positive, so the values never drop below' if a2 > 0 else 'negative, so the values never rise above'} "
        f"${F(k)}$.",
        D(rf"{name}(x){r'\ge' if a2 > 0 else r'\le'} {F(k)}"),
        close(
            truth,
            f"The bound ${F(bound)}$ is reached once and never passed anywhere else"
            if truth
            else f"The value ${F(k)}$ is taken at the turning point, which breaks the "
            f"claimed bound ${F(bound)}$",
        ),
    ]
    return truth, parts


def h_horizontal(m, mod):
    c, name = claim_num(m.group(1)), m.group(2)
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    shifted = expand(q - c)
    d = Rational(discriminant(Poly(shifted, x)))
    truth = d > 0
    parts = [
        "A horizontal line meets the parabola where the rule takes that constant "
        "value, so move the constant to the other side and count the solutions of the "
        "quadratic that is left.",
        D(f"{name}(x){signed(-c)}={ptex(shifted)}"),
        disc_display(shifted),
        f"The turning point sits at height ${F(k)}$ and the arms open "
        f"{'upwards' if a2 > 0 else 'downwards'}, so the levels the graph reaches twice "
        f"are exactly those {'above' if a2 > 0 else 'below'} ${F(k)}$.",
        close(
            truth,
            f"The level $y={F(c)}$ is one of them, so there are two crossings"
            if truth
            else (
                f"The level $y={F(c)}$ is the height of the turning point itself, where the "
                "line touches the graph once instead of cutting it twice"
                if d == 0
                else f"The level $y={F(c)}$ is never reached at all"
            ),
        ),
    ]
    return truth, parts


def h_equal_values(m, mod):
    name, p1, p2 = m.group(1), claim_num(m.group(2)), claim_num(m.group(4))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    s1, v1 = subst_display(name, q, p1)
    s2, v2 = subst_display(name, q, p2)
    truth = v1 == v2
    mid = Rational(p1 + p2, 2)
    parts = [
        "Two inputs give the same output exactly when they lie at the same distance "
        "from the axis of symmetry, but the safest check is to work both values out.",
        axis_display(a2, a1, h),
        s1,
        s2,
        f"The midpoint of ${F(p1)}$ and ${F(p2)}$ is ${F(mid)}$, "
        f"{'which is the axis itself' if mid == h else f'while the axis sits at ${F(h)}$'}.",
        close(
            truth,
            f"Both inputs return ${F(v1)}$, an equal pair of values"
            if truth
            else f"The two values are ${F(v1)}$ and ${F(v2)}$, so they differ",
        ),
    ]
    return truth, parts


def h_lead_coefficient(m, mod):
    name, claim = m.group(1), claim_num(m.group(2))
    expr = mod["expr"]
    a2, a1, a0 = poly_coeffs(expr)
    truth = claim == a2
    parts = [
        "The leading coefficient is the number multiplying $x^{2}$ once every bracket "
        "has been multiplied out, and any minus sign in front belongs to it.",
        D(f"{name}(x)={ptex(expr)}"),
        D(rf"a={F(a2)}"),
        f"Its sign tells the opening direction and its size tells how narrow the "
        f"parabola is.",
        close(
            truth,
            f"The leading coefficient is ${F(a2)}$, the number the claim gives"
            if truth
            else f"The leading coefficient is ${F(a2)}$, not ${F(claim)}$",
        ),
    ]
    return truth, parts


# --- claims about a single line ------------------------------------------- #

def h_slope(m, mod):
    name, claim = m.group(1), claim_num(m.group(2))
    line = mod["expr"]
    slope = Rational(Poly(line, x).nth(1))
    const = Rational(Poly(line, x).nth(0))
    truth = claim == slope
    parts = [
        "A line written as $mx+q$ shows both of its numbers openly: $m$ is the slope "
        "and $q$ is the height above the origin.",
        D(f"{name}(x)={ptex(line)}"),
        D(rf"m={F(slope)}\qquad q={F(const)}"),
        f"Stepping one unit to the right changes the height by ${F(slope)}$, the same "
        "everywhere along the line.",
        close(
            truth,
            f"The slope is ${F(slope)}$, the number the claim reports"
            if truth
            else f"The slope is ${F(slope)}$ while the claim reports ${F(claim)}$; the "
            f"other number, ${F(const)}$, is the intercept",
        ),
    ]
    return truth, parts


def h_line_zero(m, mod):
    name, claim = m.group(1), claim_num(m.group(2))
    line = mod["expr"]
    slope = Rational(Poly(line, x).nth(1))
    const = Rational(Poly(line, x).nth(0))
    if slope == 0:
        return False, [
            "A horizontal line either lies on the $x$-axis or misses it completely.",
            D(f"{name}(x)={ptex(line)}"),
            close(False, "This line has no single crossing point"),
        ]
    zero = Rational(-const, slope)
    truth = claim == zero
    parts = [
        "The graph crosses the $x$-axis where the height is zero, so set the rule "
        "equal to zero and solve the linear equation.",
        D(f"{ptex(line)}=0"),
        D(rf"{F(slope)}x={F(-const)}"),
        (
            D(rf"x=\frac{{{F(-const)}}}{{{F(slope)}}}={F(zero)}")
            if slope.q == 1 and const.q == 1
            else D(rf"x={par(-const)}\cdot {par(1 / slope)}={F(zero)}")
        ),
        close(
            truth,
            f"The crossing is at $x={F(zero)}$, exactly where the claim puts it"
            if truth
            else f"The crossing is at $x={F(zero)}$, not at $x={F(claim)}$",
        ),
    ]
    return truth, parts


def h_line_monotone(m, mod):
    name, word = m.group(1), m.group(2)
    line = mod["expr"]
    slope = Rational(Poly(line, x).nth(1))
    actual = "increasing" if slope > 0 else ("decreasing" if slope < 0 else "constant")
    truth = actual == word
    parts = [
        "A line has the same steepness everywhere, so its direction is decided once "
        "and for all by the sign of the slope.",
        D(f"{name}(x)={ptex(line)}"),
        D(rf"m={F(slope)}"),
        f"Because the slope is {'positive' if slope > 0 else ('negative' if slope < 0 else 'zero')}, "
        "every step to the right "
        + (
            "raises the height."
            if slope > 0
            else ("lowers the height." if slope < 0 else "leaves the height unchanged.")
        ),
        close(
            truth,
            f"The function is {actual}, as claimed"
            if truth
            else f"The function is {actual}, not {word}",
        ),
    ]
    return truth, parts


def h_line_step(m, mod):
    step, name, claim = claim_num(m.group(1)), m.group(2), claim_num(m.group(3))
    line = mod["expr"]
    slope = Rational(Poly(line, x).nth(1))
    actual = slope * step
    truth = claim == actual
    parts = [
        "On a line the change of height depends only on the length of the step, never "
        "on where the step starts: it is the slope times that length.",
        D(f"{name}(x)={ptex(line)}"),
        D(
            rf"{name}\left(x+{F(step)}\right)-{name}(x)={F(slope)}\cdot {par(step)}"
            rf"={F(actual)}"
        ),
        close(
            truth,
            f"A step of ${F(step)}$ changes the height by ${F(actual)}$, as claimed"
            if truth
            else f"A step of ${F(step)}$ changes the height by ${F(actual)}$, not by "
            f"${F(claim)}$",
        ),
    ]
    return truth, parts


def h_line_point(m, mod):
    px, py, name = claim_num(m.group(1)), claim_num(m.group(2)), m.group(3)
    line = mod["expr"]
    sub, val = subst_display(name, line, px)
    truth = val == py
    parts = [
        "A point lies on a graph exactly when the rule turns its abscissa into its "
        "ordinate, so substitute and compare.",
        D(f"{name}(x)={ptex(line)}"),
        sub,
        close(
            truth,
            rf"The line passes through $\left({F(px)},{F(val)}\right)$, the point of the claim"
            if truth
            else rf"At $x={F(px)}$ the line is at height ${F(val)}$, not ${F(py)}$",
        ),
    ]
    return truth, parts


# --- claims dressed as a story -------------------------------------------- #

def h_ap_value(m, mod):
    x0, subject, claim = claim_num(m.group(1)), m.group(2), claim_num(m.group(3))
    name, expr = mod["name"], mod["expr"]
    sub, val = subst_display(name, expr, x0)
    truth = val == claim
    parts = [
        f"The model turns any input into the {subject}, so a claim about one "
        "particular input is settled by a single substitution.",
        D(f"{name}(x)={ptex(expr)}"),
        sub,
        close(
            truth,
            f"The model returns ${F(val)}$ there, the figure named in the claim"
            if truth
            else f"The model returns ${F(val)}$ there while the claim names ${F(claim)}$",
        ),
    ]
    return truth, parts


def h_ap_solve(m, mod):
    subject, claim, x0 = m.group(1), claim_num(m.group(2)), claim_num(m.group(3))
    name, expr = mod["name"], mod["expr"]
    sub, val = subst_display(name, expr, x0)
    truth = val == claim
    parts = [
        f"The claim pins the {subject} to one figure, so read the model as an equation "
        "and see which input produces that figure.",
        D(f"{ptex(expr)}={F(claim)}"),
    ]
    if Poly(expr, x).degree() == 1:
        slope = Rational(Poly(expr, x).nth(1))
        const = Rational(Poly(expr, x).nth(0))
        root = Rational(claim - const, slope)
        parts.append(D(rf"{F(slope)}x={F(claim - const)}"))
        parts.append(D(rf"x={F(root)}"))
    parts.append("Substituting the claimed input back into the model checks the pair.")
    parts.append(sub)
    parts.append(
        close(
            truth,
            f"The {subject} at that input really is ${F(claim)}$"
            if truth
            else f"The {subject} at that input is ${F(val)}$, not ${F(claim)}$",
        )
    )
    return truth, parts


def h_ap_step(m, mod):
    noun, subject, claim = m.group(1), m.group(2), claim_num(m.group(3))
    name, expr = mod["name"], mod["expr"]
    slope = Rational(Poly(expr, x).nth(1))
    if Poly(expr, x).degree() > 1:
        return None
    truth = claim == slope
    const = Rational(Poly(expr, x).nth(0))
    parts = [
        f"The model is linear, so one extra {noun} always changes the {subject} by the "
        "same amount, and that amount is the slope.",
        D(f"{name}(x)={ptex(expr)}"),
        D(
            rf"{name}(x+1)-{name}(x)=\left({F(slope)}\left(x+1\right){signed(const)}"
            rf"\right)-\left({ptex(expr)}\right)={F(slope)}"
        ),
        close(
            truth,
            f"Each extra {noun} moves the {subject} by ${F(slope)}$, as claimed"
            if truth
            else f"Each extra {noun} moves the {subject} by ${F(slope)}$, not by ${F(claim)}$",
        ),
    ]
    return truth, parts


def h_ap_doubling(m, mod):
    subject = m.group(1)
    name, expr = mod["name"], mod["expr"]
    const = Rational(Poly(expr, x).nth(0))
    slope = Rational(Poly(expr, x).nth(1))
    truth = const == 0 and Poly(expr, x).degree() <= 1
    s1, v1 = subst_display(name, expr, 1)
    s2, v2 = subst_display(name, expr, 2)
    parts = [
        "Doubling the input doubles the output only for a model whose graph runs "
        "through the origin; a constant term is charged once and is not doubled with "
        "the rest.",
        D(f"{name}(x)={ptex(expr)}"),
        s1,
        s2,
        f"Twice the value at $x=1$ would be ${F(2 * v1)}$, whereas the model gives "
        f"${F(v2)}$ at $x=2$.",
        close(
            truth,
            f"The two agree at every input, so the {subject} really is proportional to $x$"
            if truth
            else f"The constant term ${F(const)}$ survives the doubling and breaks the "
            f"proportion between $x$ and the {subject}",
        ),
    ]
    return truth, parts


def h_ap_extreme_at(m, mod):
    subject, word, x0 = m.group(1), m.group(2), claim_num(m.group(3))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    name = mod["name"]
    wants_max = word == "largest"
    has_it = (a2 < 0) == wants_max
    truth = has_it and x0 == h
    parts = [
        f"The {subject} follows a parabola, and a parabola turns exactly once: the "
        "best input is the abscissa of the turning point.",
        D(f"{name}(x)={ptex(q)}"),
        axis_display(a2, a1, h),
        f"The leading coefficient ${F(a2)}$ is "
        f"{'negative, so the model rises to that input and falls afterwards' if a2 < 0 else 'positive, so the model falls to that input and rises afterwards'}.",
        close(
            truth,
            f"The {subject} is therefore {word} at $x={F(h)}$, the input in the claim"
            if truth
            else (
                f"The turning point is at $x={F(h)}$, not at $x={F(x0)}$"
                if has_it
                else f"With this opening direction the {subject} has no {word} value at all"
            ),
        ),
    ]
    return truth, parts


def h_ap_extreme_value(m, mod):
    word, subject, claim = m.group(1), m.group(2), claim_num(m.group(3))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    name = mod["name"]
    wants_max = word == "largest"
    has_it = (a2 < 0) == wants_max
    truth = has_it and claim == k
    sub, _ = subst_display(name, q, h)
    parts = [
        f"The extreme {subject} is the height of the turning point, so find the input "
        "that produces it and evaluate the model there.",
        axis_display(a2, a1, h),
        sub,
        f"Because the leading coefficient ${F(a2)}$ is "
        f"{'negative' if a2 < 0 else 'positive'}, this height is the "
        f"{'largest' if a2 < 0 else 'smallest'} value the model ever reaches.",
        close(
            truth,
            f"The extreme {subject} is ${F(k)}$, the figure the claim gives"
            if truth
            else (
                f"The extreme {subject} is ${F(k)}$, not ${F(claim)}$"
                if has_it
                else f"The model has no {word} value at all"
            ),
        ),
    ]
    return truth, parts


def h_ap_zeros(m, mod):
    subject, c1, c2 = m.group(1), claim_num(m.group(2)), claim_num(m.group(3))
    q, a2, a1, a0, h, k, d = q_bits(mod)
    name = mod["name"]
    rs = rational_roots(q) or []
    truth = len(rs) == 2 and sorted([c1, c2]) == rs
    parts = [
        f"The {subject} vanishes where the model takes the value zero, so solve that "
        "quadratic equation.",
        D(f"{name}(x)=0"),
        D(f"{ptex(q)}=0"),
    ]
    if len(rs) == 2:
        parts.append(D(rf"x_{{1}}={F(rs[0])}\qquad x_{{2}}={F(rs[1])}"))
        parts.append(
            close(
                truth,
                f"The {subject} is zero exactly at those two inputs, as claimed"
                if truth
                else f"The zeros are ${F(rs[0])}$ and ${F(rs[1])}$ while the claim names "
                f"${F(c1)}$ and ${F(c2)}$",
            )
        )
    else:
        parts.append(disc_display(q))
        parts.append(close(False, "A negative discriminant leaves no real zero at all"))
    return truth, parts


def h_ap_average_rate(m, mod):
    p, qq = claim_num(m.group(1)), claim_num(m.group(2))
    subject, claim = m.group(3), claim_num(m.group(4))
    name, expr = mod["name"], mod["expr"]
    s1, v1 = subst_display(name, expr, p)
    s2, v2 = subst_display(name, expr, qq)
    rate = Rational(v2 - v1, qq - p)
    truth = claim == rate
    parts = [
        f"An average rate compares the change of the {subject} with the change of the "
        "input, so both endpoint values are needed first.",
        s1,
        s2,
        D(
            rf"\frac{{{name}\left({F(qq)}\right)-{name}\left({F(p)}\right)}}"
            rf"{{{F(qq)}-{par(p)}}}=\frac{{{F(v2 - v1)}}}{{{F(qq - p)}}}={F(rate)}"
        ),
        close(
            truth,
            f"The average rate over that stretch is ${F(rate)}$, the figure claimed"
            if truth
            else f"The average rate over that stretch is ${F(rate)}$, not ${F(claim)}$",
        ),
    ]
    return truth, parts


def h_ap_positive_between(m, mod):
    subject, c1, c2 = m.group(1), claim_num(m.group(2)), claim_num(m.group(3))
    q, a2, a1, a0, h, k, _ = q_bits(mod)
    name = mod["name"]
    rs = rational_roots(q) or []
    truth = len(rs) == 2 and sorted([c1, c2]) == rs and a2 < 0
    parts = [
        f"A parabola keeps one sign between its two zeros and the opposite sign "
        "outside them, so the zeros and the opening direction settle where the "
        f"{subject} is positive.",
        D(f"{name}(x)={ptex(q)}"),
    ]
    if len(rs) == 2:
        parts.append(D(rf"x_{{1}}={F(rs[0])}\qquad x_{{2}}={F(rs[1])}"))
        mid = Rational(rs[0] + rs[1], 2)
        sub, val = subst_display(name, q, mid)
        parts.append(
            f"Testing the midpoint of the two zeros shows the sign in between."
        )
        parts.append(sub)
        parts.append(
            close(
                truth,
                f"Between ${F(rs[0])}$ and ${F(rs[1])}$ the {subject} stays above zero, "
                "as claimed"
                if truth
                else f"The interval named in the claim is not the one between the zeros "
                f"${F(rs[0])}$ and ${F(rs[1])}$",
            )
        )
    else:
        parts.append(disc_display(q))
        parts.append(close(False, "Without real zeros no such interval exists"))
    return truth, parts


def h_ap_constant_change(m, mod):
    subject, noun = m.group(1), m.group(2)
    name, expr = mod["name"], mod["expr"]
    deg = Poly(expr, x).degree()
    truth = deg <= 1
    parts = [
        f"Equal steps of the input produce equal changes of the {subject} only when "
        "the model is a line; a square term makes the steps grow.",
        D(f"{name}(x)={ptex(expr)}"),
    ]
    if truth:
        slope = Rational(Poly(expr, x).nth(1))
        parts.append(D(rf"{name}(x+1)-{name}(x)={F(slope)}"))
        parts.append(
            f"The difference does not contain $x$ any more, so every extra {noun} "
            f"counts the same."
        )
        parts.append(close(True, "The change per step is the constant slope"))
    else:
        a2 = Rational(Poly(expr, x).nth(2))
        a1 = Rational(Poly(expr, x).nth(1))
        parts.append(
            D(
                rf"{name}(x+1)-{name}(x)={F(2 * a2)}x+{F(a2 + a1)}"
                if (a2 + a1) >= 0
                else rf"{name}(x+1)-{name}(x)={F(2 * a2)}x-{F(-(a2 + a1))}"
            )
        )
        parts.append(
            f"The difference still depends on $x$, so the change per extra {noun} keeps "
            "moving."
        )
        parts.append(close(False, "The steps are not all of the same size"))
    return truth, parts


def h_ap_never_zero(m, mod):
    subject = m.group(1)
    q, a2, a1, a0, h, k, d = q_bits(mod)
    name = mod["name"]
    truth = d < 0
    sub, _ = subst_display(name, q, h)
    parts = [
        f"The {subject} hits zero exactly when the quadratic has a real root, so the "
        "discriminant answers the question.",
        D(f"{name}(x)={ptex(q)}"),
        disc_display(q),
        "The extreme value of the model confirms the same picture.",
        sub,
        close(
            truth,
            f"A negative discriminant keeps the whole graph on one side of the $x$-axis, "
            f"out of reach of a zero {subject}"
            if truth
            else f"The discriminant is not negative, so the {subject} does reach zero",
        ),
    ]
    return truth, parts


# --- claims about a table of measurements --------------------------------- #

def _table_setup(mod):
    pts = mod["points"]
    xs = [p[0] for p in pts]
    ys = [p[1] for p in pts]
    d1 = diffs(ys)
    d2 = diffs(d1)
    return pts, xs, ys, d1, d2, xs[1] - xs[0]


def _list_tex(seq) -> str:
    return ",\\ ".join(F(v) for v in seq)


def h_tb_first_diff(m, mod):
    pts, xs, ys, d1, d2, dx = _table_setup(mod)
    truth = len(set(d1)) == 1
    parts = [
        "With equally spaced inputs the differences of neighbouring outputs do all "
        "the work: constant first differences are the fingerprint of a line.",
        D(rf"y:\ {_list_tex(ys)}"),
        D(rf"\text{{first differences}}:\ {_list_tex(d1)}"),
        close(
            truth,
            f"Every step adds the same ${F(d1[0])}$, keeping the first differences constant"
            if truth
            else "The steps come in different sizes, which is exactly what non-constant "
            "first differences mean",
        ),
    ]
    return truth, parts


def h_tb_second_diff(m, mod):
    claim = claim_num(m.group(1))
    pts, xs, ys, d1, d2, dx = _table_setup(mod)
    truth = len(set(d2)) == 1 and Rational(d2[0]) == claim
    parts = [
        "Differencing twice is the standard test for a parabola: the second "
        "differences of a quadratic rule are constant, and they are zero for a line.",
        D(rf"\text{{first differences}}:\ {_list_tex(d1)}"),
        D(rf"\text{{second differences}}:\ {_list_tex(d2)}"),
    ]
    if len(set(d2)) == 1:
        parts.append(
            close(
                truth,
                f"They are all equal to ${F(d2[0])}$, the value the claim names"
                if truth
                else f"They are all equal to ${F(d2[0])}$ while the claim names ${F(claim)}$",
            )
        )
    else:
        parts.append(close(False, "They are not even constant, so no single value can "
                                  "describe them"))
    return truth, parts


def h_tb_model(m, mod):
    word = m.group(1)
    pts, xs, ys, d1, d2, dx = _table_setup(mod)
    deg = mod["deg"]
    truth = (deg == 1) if word == "linear" else (deg == 2)
    parts = [
        "A table is consistent with a line when its first differences are constant, "
        "and with a parabola when the second differences are constant while the first "
        "ones are not.",
        D(rf"\text{{first differences}}:\ {_list_tex(d1)}"),
        D(rf"\text{{second differences}}:\ {_list_tex(d2)}"),
        D(f"y={ptex(mod['fit'])}") if mod["fit"] is not None else
        D(r"\text{no polynomial rule of degree at most two fits}"),
        close(
            truth,
            f"The pattern is exactly the one a {word} rule produces"
            if truth
            else f"The pattern is the one a {'quadratic' if deg == 2 else 'linear'} rule "
            f"produces, not a {word} one",
        ),
    ]
    return truth, parts


def h_tb_rule(m, mod):
    claimed = m.group(1)
    pts, xs, ys, d1, d2, dx = _table_setup(mod)
    fit = mod["fit"]
    try:
        claimed_poly = expand(parse_poly(claimed))
    except Exception:
        claimed_poly = None
    truth = fit is not None and claimed_poly is not None and expand(claimed_poly - fit) == 0
    parts = [
        "Testing a proposed rule against a table is a matter of substitution: the rule "
        "has to reproduce every row, and for a rule of degree at most two three rows "
        "already pin it down.",
        D(f"y={ptex(fit)}") if fit is not None else D(r"y=\text{no such rule}"),
    ]
    if claimed_poly is not None and fit is not None:
        checks = []
        for xv, yv in pts[:3]:
            checks.append(rf"{F(xv)}\mapsto {F(Rational(expand(claimed_poly.subs(x, xv))))}")
        parts.append("Running the claimed rule over the first rows gives")
        parts.append(D(r",\quad ".join(checks)))
    if truth:
        parts.append(close(True, "Every row comes out right, which identifies the claimed "
                                 "rule as the one behind the table"))
    else:
        bad = None
        if claimed_poly is not None:
            for xv, yv in pts:
                if Rational(expand(claimed_poly.subs(x, xv))) != yv:
                    bad = (xv, yv, Rational(expand(claimed_poly.subs(x, xv))))
                    break
        if bad:
            parts.append(
                f"At $x={F(bad[0])}$ the table reads ${F(bad[1])}$ while the claimed "
                f"rule gives ${F(bad[2])}$."
            )
        parts.append(close(False, "The proposed rule does not reproduce the table"))
    return truth, parts


def h_tb_slope(m, mod):
    claim = claim_num(m.group(1))
    pts, xs, ys, d1, d2, dx = _table_setup(mod)
    deg, fit = mod["deg"], mod["fit"]
    truth = deg == 1 and Rational(Poly(fit, x).nth(1)) == claim
    parts = [
        "The slope of a line through a table is the change of the output divided by "
        "the change of the input, which is the same for every pair of rows only when "
        "the first differences are constant.",
        D(rf"\text{{first differences}}:\ {_list_tex(d1)}"),
        D(rf"m=\frac{{{F(d1[0])}}}{{{F(dx)}}}={F(Rational(d1[0], dx))}"),
    ]
    if deg == 1:
        parts.append(
            close(
                truth,
                f"The line through the table has slope ${F(Rational(d1[0], dx))}$, as claimed"
                if truth
                else f"The slope is ${F(Rational(d1[0], dx))}$ while the claim reports "
                f"${F(claim)}$",
            )
        )
    else:
        parts.append(close(False, "The first differences are not constant, so no single "
                                  "line runs through the table at all"))
    return truth, parts


def h_tb_lead(m, mod):
    claim = claim_num(m.group(1))
    pts, xs, ys, d1, d2, dx = _table_setup(mod)
    deg, fit = mod["deg"], mod["fit"]
    truth = deg == 2 and Rational(Poly(fit, x).nth(2)) == claim
    parts = [
        "For equally spaced inputs the constant second difference of a quadratic rule "
        "equals twice the leading coefficient times the square of the spacing, so the "
        "coefficient can be read off the table directly.",
        D(r"\text{second difference}=2a\left(\Delta x\right)^{2}"),
        D(rf"\text{{second differences}}:\ {_list_tex(d2)}"),
    ]
    if deg == 2:
        a = Rational(Poly(fit, x).nth(2))
        parts.append(D(rf"a=\frac{{{F(d2[0])}}}{{2\cdot {F(dx)}^{{2}}}}={F(a)}"))
        parts.append(
            close(
                truth,
                f"The leading coefficient is ${F(a)}$, the number the claim gives"
                if truth
                else f"The leading coefficient is ${F(a)}$, not ${F(claim)}$",
            )
        )
    else:
        parts.append(close(False, "The second differences do not describe a genuine "
                                  "quadratic rule here"))
    return truth, parts


def h_tb_average_rate(m, mod):
    p, qq, claim = claim_num(m.group(1)), claim_num(m.group(2)), claim_num(m.group(3))
    pts, xs, ys, d1, d2, dx = _table_setup(mod)
    table = dict(pts)
    if p not in table or qq not in table:
        return None
    rate = Rational(table[qq] - table[p], qq - p)
    truth = claim == rate
    parts = [
        "An average rate of change over a stretch is read from the two end rows only: "
        "the change of the output divided by the change of the input.",
        D(rf"y\left({F(p)}\right)={F(table[p])}\qquad y\left({F(qq)}\right)={F(table[qq])}"),
        D(
            rf"\frac{{{F(table[qq])}-{par(table[p])}}}{{{F(qq)}-{par(p)}}}"
            rf"=\frac{{{F(table[qq] - table[p])}}}{{{F(qq - p)}}}={F(rate)}"
        ),
        close(
            truth,
            f"The average rate over that stretch is ${F(rate)}$, the figure claimed"
            if truth
            else f"The average rate over that stretch is ${F(rate)}$, not ${F(claim)}$",
        ),
    ]
    return truth, parts


def h_tb_continue(m, mod):
    x0, claim = claim_num(m.group(1)), claim_num(m.group(2))
    pts, xs, ys, d1, d2, dx = _table_setup(mod)
    fit = mod["fit"]
    if fit is None:
        return None
    val = Rational(expand(fit.subs(x, x0)))
    truth = claim == val
    sub, _ = subst_display("y", fit, x0)
    parts = [
        "Continuing a table means continuing its rule, so identify the rule from the "
        "differences first and only then step one row further.",
        D(f"y={ptex(fit)}"),
        sub,
        close(
            truth,
            f"The next row would read ${F(val)}$, exactly the value claimed"
            if truth
            else f"The next row would read ${F(val)}$ while the claim announces ${F(claim)}$",
        ),
    ]
    return truth, parts


def h_tb_extreme_row(m, mod):
    word, x0 = m.group(1), claim_num(m.group(2))
    pts, xs, ys, d1, d2, dx = _table_setup(mod)
    target = max(ys) if word == "largest" else min(ys)
    table = dict(pts)
    truth = x0 in table and table[x0] == target and ys.count(target) == 1
    parts = [
        "A claim about the rows of the table is settled inside the table itself: "
        "compare the listed outputs and see where the extreme one sits.",
        D(rf"y:\ {_list_tex(ys)}"),
        D(rf"\text{{{word} listed value}}={F(target)}"),
    ]
    where = [F(xv) for xv, yv in pts if yv == target]
    parts.append(
        f"That value appears at $x={where[0]}$"
        + ("." if len(where) == 1 else f" and also at $x={where[-1]}$.")
    )
    parts.append(
        close(
            truth,
            f"The {word} entry of the table does sit at $x={F(x0)}$"
            if truth
            else f"The {word} entry sits at $x={where[0]}$, not at $x={F(x0)}$",
        )
    )
    return truth, parts


# --- dispatch -------------------------------------------------------------- #

SINGLE_HANDLERS: list[tuple[re.Pattern[str], object]] = [
    (re.compile(r"^The axis of symmetry of \$([A-Za-z])\$ is the line \$x=(.+?)\$\.$"), h_axis),
    (re.compile(r"^The graph of \$([A-Za-z])\$ is symmetric about the \$y\$-axis\.$"), h_axis_yaxis),
    (
        re.compile(
            r"^The vertex of the graph of \$([A-Za-z])\$ is the point "
            r"\$\\left\((.+?),(.+?)\\right\)\$\.$"
        ),
        h_vertex,
    ),
    (re.compile(r"^The graph of \$([A-Za-z])\$ opens (upwards|downwards)\.$"), h_opens),
    (re.compile(r"^The two roots of \$([A-Za-z])\$ add up to \$(.+?)\$\.$"), h_sum_roots),
    (re.compile(r"^The two roots of \$([A-Za-z])\$ multiply to \$(.+?)\$\.$"), h_prod_roots),
    (re.compile(r"^The roots of \$([A-Za-z])\$ are \$(.+?)\$ and \$(.+?)\$\.$"), h_roots),
    (
        re.compile(r"^The distance between the two roots of \$([A-Za-z])\$ is \$(.+?)\$\.$"),
        h_root_distance,
    ),
    (
        re.compile(
            r"^The equation \$([A-Za-z])\(x\)=0\$ has "
            r"(two distinct real solutions|exactly one real solution|no real solution)\.$"
        ),
        h_root_count,
    ),
    (
        re.compile(r"^Completing the square gives \$([A-Za-z])\(x\)=(.+?)\$\.$"),
        h_complete_square,
    ),
    (re.compile(r"^Expanding gives \$([A-Za-z])\(x\)=(.+?)\$\.$"), h_expand),
    (re.compile(r"^The rule is \$([A-Za-z])\(x\)=(.+?)\$\.$"), h_rule),
    (
        re.compile(r"^The (smallest|largest) value taken by \$([A-Za-z])\$ is \$(.+?)\$\.$"),
        h_extreme,
    ),
    (
        re.compile(r"^The graph of \$([A-Za-z])\$ meets the \$y\$-axis at \$y=(.+?)\$\.$"),
        h_yint,
    ),
    (re.compile(r"^\$([A-Za-z])\((.+?)\)=(.+?)\$\.$"), h_value),
    (
        re.compile(r"^\$([A-Za-z])\$ is (decreasing|increasing) for every \$x([<>])(.+?)\$\.$"),
        h_monotone_q,
    ),
    (
        re.compile(r"^\$([A-Za-z])\(x\)\\(ge|le) (.+?)\$ holds for every real \$x\$\.$"),
        h_range,
    ),
    (
        re.compile(
            r"^The horizontal line \$y=(.+?)\$ meets the graph of \$([A-Za-z])\$ at "
            r"two different points\.$"
        ),
        h_horizontal,
    ),
    (
        re.compile(
            r"^The values \$([A-Za-z])\((.+?)\)\$ and \$([A-Za-z])\((.+?)\)\$ are equal\.$"
        ),
        h_equal_values,
    ),
    (
        re.compile(r"^The leading coefficient of \$([A-Za-z])\$ is \$(.+?)\$\.$"),
        h_lead_coefficient,
    ),
    (re.compile(r"^The slope of the graph of \$([A-Za-z])\$ is \$(.+?)\$\.$"), h_slope),
    (
        re.compile(r"^The graph of \$([A-Za-z])\$ crosses the \$x\$-axis at \$x=(.+?)\$\.$"),
        h_line_zero,
    ),
    (re.compile(r"^\$([A-Za-z])\$ is (increasing|decreasing)\.$"), h_line_monotone),
    (
        re.compile(r"^Increasing \$x\$ by \$(.+?)\$ always changes \$([A-Za-z])\$ by \$(.+?)\$\.$"),
        h_line_step,
    ),
    (
        re.compile(
            r"^The point \$\\left\((.+?),(.+?)\\right\)\$ lies on the graph of \$([A-Za-z])\$\.$"
        ),
        h_line_point,
    ),
    (re.compile(r"^At \$x=(.+?)\$ the (.+?) equals \$(.+?)\$(?: [a-z]+)?\.$"), h_ap_value),
    (
        re.compile(r"^The (.+?) equals \$(.+?)\$(?: [a-z]+)? at \$x=(.+?)\$\.$"),
        h_ap_solve,
    ),
    (
        re.compile(r"^Each extra (.+?) changes the (.+?) by \$(.+?)\$(?: [a-z]+)?\.$"),
        h_ap_step,
    ),
    (re.compile(r"^Doubling \$x\$ always doubles the (.+?)\.$"), h_ap_doubling),
    (re.compile(r"^The (.+?) is (largest|smallest) at \$x=(.+?)\$\.$"), h_ap_extreme_at),
    (
        re.compile(r"^The (largest|smallest) possible (.+?) equals \$(.+?)\$(?: [a-z]+)?\.$"),
        h_ap_extreme_value,
    ),
    (
        re.compile(r"^The (.+?) is zero exactly at \$x=(.+?)\$ and \$x=(.+?)\$\.$"),
        h_ap_zeros,
    ),
    (
        re.compile(
            r"^Between \$x=(.+?)\$ and \$x=(.+?)\$ the (.+?) changes at an average rate "
            r"of \$(.+?)\$(?: [a-z]+)? per unit of \$x\$\.$"
        ),
        h_ap_average_rate,
    ),
    (
        re.compile(
            r"^The (.+?) is positive for every \$x\$ strictly between \$(.+?)\$ and \$(.+?)\$\.$"
        ),
        h_ap_positive_between,
    ),
    (
        re.compile(r"^The (.+?) changes by the same amount for every extra (.+?)\.$"),
        h_ap_constant_change,
    ),
    (re.compile(r"^The (.+?) is never zero\.$"), h_ap_never_zero),
    (
        re.compile(r"^The first differences of the \$y\$-values are constant\.$"),
        h_tb_first_diff,
    ),
    (
        re.compile(
            r"^The second differences of the \$y\$-values are constant and equal to \$(.+?)\$\.$"
        ),
        h_tb_second_diff,
    ),
    (re.compile(r"^The table is consistent with a (linear|quadratic) model\.$"), h_tb_model),
    (re.compile(r"^The table is produced by the rule \$y=(.+?)\$\.$"), h_tb_rule),
    (re.compile(r"^A linear rule through the table has slope \$(.+?)\$\.$"), h_tb_slope),
    (
        re.compile(r"^A quadratic rule through the table has leading coefficient \$(.+?)\$\.$"),
        h_tb_lead,
    ),
    (
        re.compile(
            r"^The average rate of change between \$x=(.+?)\$ and \$x=(.+?)\$ is \$(.+?)\$\.$"
        ),
        h_tb_average_rate,
    ),
    (
        re.compile(r"^Continuing the pattern, the value at \$x=(.+?)\$ is \$(.+?)\$\.$"),
        h_tb_continue,
    ),
    (
        re.compile(r"^The \$y\$-values in the table are (largest|smallest) at \$x=(.+?)\$\.$"),
        h_tb_extreme_row,
    ),
]


def expl_single(letter, stmt, truth, task) -> str | None:
    if task.get("stem_kind") not in SINGLE_KINDS:
        return None
    mod = single_model(task)
    if mod is None:
        return None
    s = stmt.strip()
    for pattern, handler in SINGLE_HANDLERS:
        m = pattern.match(s)
        if not m:
            continue
        out = handler(m, mod)
        if out is None:
            continue
        computed, parts = out
        if bool(computed) != bool(truth):
            raise AssertionError(
                f"{task['case_id']} {letter}: answer key says {truth} but the "
                f"explanation computes {computed} for: {stmt}"
            )
        return pack(letter, truth, parts)
    return None


def build_single_overview(task: dict) -> str | None:
    mod = single_model(task)
    if mod is None:
        return None
    kind = mod["kind"]

    if kind == "table":
        pts, xs, ys, d1, d2, dx = _table_setup(mod)
        rows = ",\\ ".join(rf"\left({F(a)},{F(b)}\right)" for a, b in pts)
        blocks = [
            "The table is the whole stem, so read it as a list of pairs.",
            D(rows),
            "The inputs are equally spaced, which makes the differences of "
            "neighbouring outputs the fastest diagnostic tool available.",
            D(
                rf"\text{{first}}:\ {_list_tex(d1)}\qquad "
                rf"\text{{second}}:\ {_list_tex(d2)}"
            ),
        ]
        if mod["deg"] == 1:
            blocks.append(
                "Constant first differences mean a line, and the slope is one "
                "difference divided by the spacing of the inputs."
            )
        elif mod["deg"] == 2:
            blocks.append(
                "The first differences move while the second ones stand still, the "
                "signature of a parabola; the constant second difference is twice the "
                "leading coefficient times the squared spacing."
            )
        if mod["fit"] is not None:
            blocks.append(D(f"y={ptex(mod['fit'])}"))
        return "\n\n".join(blocks)

    name, expr = mod["name"], mod["expr"]
    deg = Poly(expr, x).degree()

    if deg <= 1:
        slope = Rational(Poly(expr, x).nth(1))
        const = Rational(Poly(expr, x).nth(0))
        blocks = []
        if mod.get("build"):
            blocks.extend(mod["build"])
        else:
            blocks.append("The stem fixes a single line.")
            if mod.get("given"):
                blocks.append(D(f"{name}(x)={mod['given']}"))
                blocks.append(
                    "Splitting the fraction term by term brings the rule into the "
                    "shape $mx+q$."
                    if "\\frac" in mod["given"]
                    else "Ordering the two terms brings the rule into the shape $mx+q$."
                )
            blocks.append(D(f"{name}(x)={ptex(expr)}"))
        blocks.append(
            "Two numbers describe it completely: the slope, which is the change of "
            "height per unit step, and the height above the origin."
        )
        blocks.append(D(rf"m={F(slope)}\qquad {name}(0)={F(const)}"))
        if slope != 0:
            zero = Rational(-const, slope)
            blocks.append(
                "Setting the height to zero locates the single crossing of the "
                "$x$-axis, and the sign of the slope fixes the direction once and for "
                "all."
            )
            blocks.append(D(rf"{ptex(expr)}=0\Rightarrow x={F(zero)}"))
        return "\n\n".join(blocks)

    a2, a1, a0 = poly_coeffs(expr)
    h, k, _ = vertex_of(expr)
    d = Rational(discriminant(Poly(expr, x)))
    S = Rational(-a1, 1) / a2
    P = Rational(a0, 1) / a2
    rs = rational_roots(expr) or []

    blocks = []
    if mod.get("build"):
        blocks.extend(mod["build"])
    else:
        blocks.append(
            pick(task, APPLIED_OPENERS, 1)
            if kind == "applied"
            else pick(task, PARABOLA_OPENERS, 1)
        )
        if mod.get("given"):
            blocks.append(D(f"{name}(x)={mod['given']}"))
            blocks.append(
                "Multiplying out puts the same rule in standard form, where every "
                "coefficient can be read off directly."
            )
        blocks.append(D(f"{name}(x)={ptex(expr)}"))

    blocks.append(pick(task, SINGLE_VERTEX_LINES))
    blocks.append(
        rf"$$\text{{vertex}}=\left({F(h)},{F(k)}\right)\qquad S={F(S)}\qquad P={F(P)}$$"
    )
    if d > 0 and len(rs) == 2:
        blocks.append(pick(task, SINGLE_TWO_ROOT_LINES, 2))
        blocks.append(D(rf"\Delta={F(d)}\qquad x_{{1}}={F(rs[0])}\qquad x_{{2}}={F(rs[1])}"))
    elif d > 0:
        blocks.append("A positive discriminant puts two crossings on the $x$-axis.")
        blocks.append(D(rf"\Delta={F(d)}"))
    elif d == 0:
        blocks.append("A vanishing discriminant makes the graph touch the $x$-axis once.")
        blocks.append(D(rf"\Delta={F(d)}"))
    else:
        blocks.append(
            "A negative discriminant keeps the graph entirely on one side of the "
            "$x$-axis."
        )
        blocks.append(D(rf"\Delta={F(d)}"))
    blocks.append(
        f"The arms open {'upwards' if a2 > 0 else 'downwards'}, so the turning point "
        f"is the {'lowest' if a2 > 0 else 'highest'} point of the graph and the "
        f"{'smallest' if a2 > 0 else 'largest'} value is ${F(k)}$."
    )
    return "\n\n".join(blocks)


# --------------------------------------------------------------------------- #
# Driver
# --------------------------------------------------------------------------- #

def explain_one(task, idx, f, g) -> str:
    letter = "ABCDE"[idx]
    stmt = task["statements"][idx]
    truth = bool(task["answer_key"][idx])

    for builder in (expl_single, expl_symbolic, expl_parametric):
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
    assert len(tasks) >= 50

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
