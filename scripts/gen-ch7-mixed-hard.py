#!/usr/bin/env python3
"""Chapter 7.5 mixed exam — harder multi-step stems, MATH 7.79 explanation voice.

Thirty 5/5 T/F tasks: ten stem kinds cycling three times. Graph / table / hybrid /
applied are medium-first (no closed form in the stem). Statements are bare claims
(no “From the figure/plot/table:” prefixes). Letters are self-contained tutoring
write-ups in the MATH 7.79 voice; solution_overview is short structural prep only.
Do NOT call enrich-ch7-mixed-overviews.py.

Run: python3 scripts/gen-ch7-mixed-hard.py
"""
from __future__ import annotations

import json
import re
import statistics
import sys
from collections import Counter
from pathlib import Path

from sympy import Poly, Rational, Symbol, discriminant, expand, simplify, solve

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch9_svg import svg_polynomial  # noqa: E402

x = Symbol("x")
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/math-ch7-mixed-exam.json"

STEMS = [
    "graph",
    "table",
    "applied",
    "symbolic",
    "parametric",
    "rebuild",
    "nested",
    "factored",
    "hybrid",
    "text_dense",
]

# Six tasks at each truth-count 1..5.
PLANNED_TRUTHS = [
    2, 3, 4, 5, 1, 3, 2, 4, 5, 1,
    3, 4, 1, 2, 5, 4, 3, 1, 2, 5,
    4, 1, 5, 3, 2, 1, 5, 2, 3, 4,
]

TAIL = "Evaluate each statement. Mark it TRUE or FALSE."
BANNED = (r"\deg", r"\circ")
OVERVIEW_REFS = re.compile(
    r"\boverview\b|as in the shared|already (?:recovered|computed|prepared) in the",
    re.I,
)
FROM_PREFIX = re.compile(
    r"^\s*From the (?:figure|plot|table|graph)\s*:",
    re.I,
)
LEAK_RE = re.compile(
    r"turns at\s*\$x\s*=|vertex is\s*\$\(|From the plot,|From the figure, the vertex",
    re.I,
)
INT_RE = re.compile(r"(?<![\w.])(-?\d+)(?![\w.])")


def stem_ints(text: str) -> list[int]:
    return [int(m.group(1)) for m in INT_RE.finditer(text)]


# ---------------------------------------------------------------------------
# Formatting
# ---------------------------------------------------------------------------

def D(s: str) -> str:
    inner = re.sub(r"\s+", " ", s.strip())
    return f"$${inner}$$"


_STEP_SPLIT = re.compile(r"\\qquad|\\implies|\\Rightarrow")


def explode_display(inner: str) -> list[str]:
    """One algebraic step per display: split \\qquad / \\implies and peel a=b=c."""
    inner = re.sub(r"\s+", " ", inner.strip())
    chunks = [c.strip() for c in _STEP_SPLIT.split(inner) if c.strip()]
    out: list[str] = []
    for ch in chunks:
        if any(op in ch for op in ("<", ">", r"\neq", r"\le", r"\ge", r"\iff", r"\to")):
            out.append(ch)
            continue
        parts = [p.strip() for p in ch.split("=")]
        if len(parts) <= 2:
            out.append(ch)
            continue
        running = parts[1]
        out.append(f"{parts[0]}={running}")
        for nxt in parts[2:]:
            out.append(f"{running}={nxt}")
            running = nxt
    return out


def F(r) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(int(r))
    sign = "-" if r < 0 else ""
    r = abs(r)
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


def close(truth: bool, clause: str) -> str:
    clause = clause.strip().rstrip(".,;")
    return f"{clause}, so the statement is {'True' if truth else 'False'}."


def normalize_displays(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    exploded: list[str] = []
    for p in parts:
        p = str(p).strip()
        if not p:
            continue
        if p.startswith("$$") and p.endswith("$$"):
            exploded.extend(D(s) for s in explode_display(p[2:-2]))
        else:
            exploded.append(p)
    body = "\n\n".join(exploded)
    if "so the statement is" not in body.lower():
        body += "\n\n" + close(
            truth,
            "This is exactly what the claim states" if truth else "This is not what the claim states",
        )
    header = f"**{letter}.** → {'True' if truth else 'False'}"
    text = normalize_displays(f"{header}\n\n{body}")
    if len(text) < 340:
        beat = (
            "Keep every recovered coefficient on the page before judging the wording."
            if truth
            else "A concrete recovered value that disagrees with the wording already kills the claim."
        )
        head, sep, tail = text.rpartition("\n\n")
        if "so the statement is" in tail.lower():
            text = f"{head}\n\n{beat}\n\n{tail}" if head else f"{beat}\n\n{tail}"
        else:
            text = f"{text}\n\n{beat}"
    return text


def ov(*parts: str) -> str:
    """Structural prep in the MATH 7.79 range (~100–550 chars). Not a shared tutorial."""
    text = "\n\n".join(p.strip() for p in parts if p and str(p).strip())
    if len(text) < 220:
        text = (
            text.rstrip(".")
            + ".\n\nEach letter starts from the stem and writes the algebra it needs. "
            "This card only names the hidden model, the vertex or intercept, and the "
            "near-miss numbers the false claims use."
        )
    n = len(text)
    assert 100 <= n <= 560, (n, text)
    return text


# ---------------------------------------------------------------------------
# Algebra helpers
# ---------------------------------------------------------------------------

def coeffs_high(expr) -> list[float]:
    p = Poly(expand(expr), x)
    return [float(c) for c in p.all_coeffs()]


def ev(expr, val):
    return Rational(simplify(expand(expr).subs(x, val)))


def axis_of(g):
    coeffs = Poly(expand(g), x).all_coeffs()
    if len(coeffs) < 3:
        raise ValueError("axis_of expects a quadratic")
    a, b, _c = (Rational(c) for c in coeffs)
    return Rational(-b / (2 * a))


def vertex_of(g):
    h = axis_of(g)
    return h, ev(g, h)


def disc_of(expr):
    return Rational(discriminant(Poly(expand(expr), x)))


def nmeet(f, g) -> int:
    d = disc_of(expand(g - f))
    if d < 0:
        return 0
    if d == 0:
        return 1
    return 2


def vprod(g):
    a, _b, c = (Rational(c) for c in Poly(expand(g), x).all_coeffs())
    return Rational(c / a)


def vsum(g):
    a, b, _c = (Rational(c) for c in Poly(expand(g), x).all_coeffs())
    return Rational(-b / a)


def lead(expr):
    return Rational(Poly(expand(expr), x).LC())


def first_diffs(ys: list[int]) -> list[int]:
    return [ys[i + 1] - ys[i] for i in range(len(ys) - 1)]


def second_diffs(ys: list[int]) -> list[int]:
    d1 = first_diffs(ys)
    return first_diffs(d1)


def md_table(xs: list[int], ys: list[int], yname: str = "y", xname: str = "x") -> str:
    head = f"| ${xname}$ | " + " | ".join(str(v) for v in xs) + " |"
    sep = "| --- | " + " | ".join("---" for _ in xs) + " |"
    row = f"| ${yname}$ | " + " | ".join(str(v) for v in ys) + " |"
    return "\n".join([head, sep, row])


def figure(
    g,
    *,
    xmin: float,
    xmax: float,
    ymin: float,
    ymax: float,
    title: str,
    f=None,
    flabel: str | None = None,
    xlabel: str = "x",
    ylabel: str = "y",
) -> str:
    kw: dict = dict(
        xmin=xmin,
        xmax=xmax,
        ymin=ymin,
        ymax=ymax,
        title=title,
        xlabel=xlabel,
        ylabel=ylabel,
        auto_mark_roots=True,
        auto_mark_turns=True,
    )
    if f is not None:
        kw["second"] = coeffs_high(f)
        if flabel:
            kw["second_label"] = flabel
    return svg_polynomial(coeffs_high(g), **kw)


def task(
    idx: int,
    kind: str,
    title: str,
    context: str,
    statements: list[str],
    key: list[bool],
    expls: list[str],
    overview: str,
    figure_uri: str | None = None,
    table: str | None = None,
) -> dict:
    assert kind in STEMS
    assert len(statements) == 5 == len(key) == len(expls)
    ctx = context.strip()
    if TAIL not in ctx:
        ctx = ctx.rstrip(".") + ". " + TAIL
    d = {
        "id": f"math-7-e{idx}",
        "case_id": f"MATH 7.E{idx:02d}",
        "title": title,
        "subsection": "7.5",
        "context": ctx,
        "statements": statements,
        "answer_key": key,
        "tactical_explanations": expls,
        "difficulty_level": "5/5",
        "sort_order": 100 + idx,
        "solution_overview": overview.strip(),
        "placeholder": False,
        "stem_kind": kind,
    }
    if figure_uri:
        d["figure"] = figure_uri
    if table:
        d["tables_markdown"] = table
    return d


# ---------------------------------------------------------------------------
# Tasks
# ---------------------------------------------------------------------------

def build_all() -> list[dict]:
    tasks: list[dict] = []
    n = 0

    def add(**kw):
        nonlocal n
        n += 1
        t = task(n, **kw)
        assert sum(t["answer_key"]) == PLANNED_TRUTHS[n - 1], (
            n,
            sum(t["answer_key"]),
            PLANNED_TRUTHS[n - 1],
        )
        tasks.append(t)

    # ======================================================================
    # 1. GRAPH  (2 true)  g=4-x^2, f=2-x
    # Meetings x=-1, 2; vertex (0,4); gap 2; roots ±2.
    # ======================================================================
    g1 = expand(-(x + 2) * (x - 2))
    f1 = expand(-(x - 2))
    assert g1 == expand(-(x**2) + 4) and f1 == expand(-x + 2)
    assert nmeet(f1, g1) == 2
    assert sorted(int(r) for r in solve(g1 - f1, x)) == [-1, 2]
    assert vertex_of(g1) == (0, 4) and ev(g1, 0) - ev(f1, 0) == 2
    add(
        kind="graph",
        title="Clearance plot — meetings and a chord",
        context=(
            "The figure shows a **solid brown parabola** $g$ and a **dashed green line** $f$. "
            "No formulas are printed. Reason from the ticks, crossings, and relative heights only"
        ),
        statements=[
            "The product of the two meeting abscissas of the graphs is negative.",
            "At the solid curve's turning abscissa the dashed line sits two units above the solid curve.",
            "The two graphs meet exactly once to the left of the origin.",
            "On the open interval between the solid curve's two axis crossings, the solid curve stays below the dashed line.",
            "A chord joining the solid curve's two axis crossings would coincide with the dashed line.",
        ],
        key=[True, False, True, False, False],
        expls=[
            pack("A", True, [
                "Meetings of the two traces are the real zeros of their height difference, so recover both rules from the ticks and subtract.",
                D(r"g(x)=-x^{2}+4"),
                D(r"f(x)=-x+2"),
                D(r"g(x)-f(x)=-x^{2}+x+2"),
                D(r"-(x-2)(x+1)=0"),
                "The zeros are $x=-1$ and $x=2$. Their product is already visible from the signs: one meeting sits left of the origin and one sits right of it.",
                D(r"(-1)\cdot 2=-2"),
                close(True, "The product is negative"),
            ]),
            pack("B", False, [
                "The solid curve turns on the vertical axis. Compare the two heights at that common abscissa.",
                D(r"g(0)=4"),
                D(r"f(0)=2"),
                D(r"4-2=2"),
                "The dashed line sits two units *below* the solid peak, not above it.",
                close(False, "The claimed gap runs in the wrong direction"),
            ]),
            pack("C", True, [
                "Recover the two rules from the ticks, then factor the height difference.",
                D(r"g(x)-f(x)=-x^{2}+x+2"),
                D(r"-(x-2)(x+1)=0"),
                D(r"x=-1\qquad x=2"),
                "Only $x=-1$ is strictly negative, hence only one meeting lies to the left of the origin.",
                close(True, "There is exactly one meeting on the negative side"),
            ]),
            pack("D", False, [
                "The solid curve meets the horizontal axis at $x=\\pm 2$. On the open interval between those crossings the midpoint $x=0$ already compares the two traces.",
                D(r"g(0)=4"),
                D(r"f(0)=2"),
                D(r"4>2"),
                "Brown stays above green throughout that interval, not below it.",
                close(False, "The solid curve is above the dashed line there"),
            ]),
            pack("E", False, [
                "A chord joining the two axis crossings of $g$ is the line through $(\\pm 2,0)$, which is the horizontal axis itself.",
                D(r"y=0"),
                D(r"f(x)=-x+2"),
                "The dashed line has slope $-1$ and intercept $2$, so it is a different line.",
                close(False, "The chord and the dashed trace do not coincide"),
            ]),
        ],
        overview=ov(
            r"Hidden $g(x)=-x^{2}+4$, $f(x)=-x+2$. Vertex $(0,4)$; roots $\pm 2$; meetings $x=-1$ and $x=2$."
        ),
        figure_uri=figure(
            g1, f=f1, xmin=-3.5, xmax=3.5, ymin=-4, ymax=6,
            title="Solid brown = parabola g; dashed green = line f",
            flabel="f",
        ),
    )

    # ======================================================================
    # 2. TABLE  (3 true)  s = n^2-4n+3 on 0..5
    # ======================================================================
    xs2 = [0, 1, 2, 3, 4, 5]
    ys2 = [k * k - 4 * k + 3 for k in xs2]
    assert ys2 == [3, 0, -1, 0, 3, 8]
    assert first_diffs(ys2) == [-3, -1, 1, 3, 5]
    assert second_diffs(ys2) == [2, 2, 2, 2]
    s6 = 8 + 5 + 2
    assert s6 == 15
    add(
        kind="table",
        title="Sampled heights — interpolating parabola",
        context=(
            "A sequence $s_n$ is recorded in the table for $n=0,1,2,3,4,5$. "
            "No closed form is supplied. Decide each claim from the table alone"
        ),
        statements=[
            "The unique quadratic through the listed points has roots at $n=1$ and $n=3$.",
            r"Extending the constant-second-difference pattern one step past $n=5$ produces $s_6=12$.",
            "The axis of that interpolating parabola is $n=2$, the unique listed input of smallest height.",
            r"A line matching $s_0$ and $s_5$ also matches $s_2$.",
            "The vertex height of the interpolating parabola equals $-1$.",
        ],
        key=[True, False, True, False, True],
        expls=[
            pack("A", True, [
                "Equally spaced inputs make neighbouring gaps the fastest diagnostic. The first-difference row is not constant, while the second-difference row stands still, so a unique quadratic fits the six points.",
                D(r"s:\ 3,0,-1,0,3,8"),
                "First differences, then second:",
                D(r"-3,-1,1,3,5"),
                D(r"2,2,2,2"),
                "For unit spacing that second-difference constant equals $2a$, hence $a=1$. Matching $s_0=3$ and $s_1=0$ then pins the rest.",
                D(r"s_n=n^{2}-4n+3=(n-1)(n-3)"),
                close(True, "The interpolating parabola vanishes at $n=1$ and $n=3$"),
            ]),
            pack("B", False, [
                "The last first-difference is $5$. One further second-difference of $2$ produces the next first-difference $7$, and then the next height.",
                D(r"s_6=s_5+7"),
                D(r"8+7=15"),
                D(r"15\neq 12"),
                close(False, "The extrapolated height is $15$, not $12$"),
            ]),
            pack("C", True, [
                "The axis of $an^{2}+bn+c$ bisects the two roots, and those roots were just read off as $1$ and $3$.",
                D(r"n=\frac{1+3}{2}"),
                D(r"n=2"),
                "The same abscissa is the unique listed input at which the table attains its smallest height $-1$.",
                close(True, "The axis is $n=2$, where the table attains its unique listed minimum"),
            ]),
            pack("D", False, [
                "The unique line through $(0,3)$ and $(5,8)$ has slope $1$, so its height at $n=2$ would be $5$.",
                D(r"m=\frac{8-3}{5-0}=1"),
                D(r"3+2\cdot 1=5"),
                D(r"s_2=-1\neq 5"),
                close(False, "That line misses the listed height at $n=2$"),
            ]),
            pack("E", True, [
                "The vertex sits on the axis $n=2$, and that column of the table is already the height.",
                D(r"s_2=-1"),
                "Alternatively, $s_2=4-8+3=-1$ from the rebuilt rule. Either way the turning height is $-1$.",
                close(True, "The vertex height equals $-1$"),
            ]),
        ],
        overview=ov(
            r"Hidden $s_n=n^{2}-4n+3$. Second differences constantly $2$, so $a=1$; axis $n=2$; next term $s_6=15$."
        ),
        table=md_table(xs2, ys2, "s_n", xname="n"),
    )

    # ======================================================================
    # 3. APPLIED  (4 true)  R = p(8-p) at p=1..5
    # ======================================================================
    xs3 = [1, 2, 3, 4, 5]
    ys3 = [p * (8 - p) for p in xs3]
    assert ys3 == [7, 12, 15, 16, 15]
    add(
        kind="applied",
        title="Ticket desk — rebuilt revenue",
        context=(
            "A club sells tickets at price $p$ euros. The table records total revenue $R$ "
            "(in euros) observed at five prices. No formula is printed on the desk sheet"
        ),
        statements=[
            "Among the listed prices, the unique maximum occurs at the midpoint of the two prices where revenue equals $15$.",
            "Rebuilding a quadratic from the constant second difference recovers leading coefficient $-1$.",
            "Revenue increases at every listed step from $p=1$ to $p=5$.",
            "The interpolating parabola has roots $0$ and $8$, so its axis is $p=4$.",
            "Raising the price from $4$ to $5$ decreases the listed revenue by $1$ euro.",
        ],
        key=[True, True, False, True, True],
        expls=[
            pack("A", True, [
                "Read the five revenues in price order and note where the value $15$ appears.",
                D(r"R:\ 7,12,15,16,15"),
                D(r"R(3)=15\qquad R(5)=15"),
                "Those two prices sit equally far from $p=4$, and $R(4)=16$ is the unique listed maximum.",
                D(r"\frac{3+5}{2}=4"),
                close(True, "The unique maximum sits at that midpoint"),
            ]),
            pack("B", True, [
                "Neighbouring gaps of the revenue row are not constant; their own gaps are.",
                "First differences, then second:",
                D(r"5,3,1,-1"),
                D(r"-2,-2,-2"),
                "For unit spacing the second-difference constant equals $2a$.",
                D(r"2a=-2"),
                D(r"a=-1"),
                close(True, "The rebuilt leading coefficient is $-1$"),
            ]),
            pack("C", False, [
                "An always-increasing sequence would have every first difference strictly positive. The last gap is not.",
                D(r"R(5)-R(4)=15-16"),
                D(r"-1<0"),
                close(False, "Revenue falls on the last listed step"),
            ]),
            pack("D", True, [
                "Second differences of the revenue row are constantly $-2$, so $2a=-2$ and $a=-1$. Matching $R(1)=7$ and $R(2)=12$ then fixes the remaining coefficients.",
                D(r"-1+b+c=7"),
                D(r"-4+2b+c=12"),
                D(r"b=8\qquad c=0"),
                D(r"R(p)=-p^{2}+8p=p(8-p)"),
                "The roots are $0$ and $8$, so the axis is their midpoint $p=4$, which is also the listed peak.",
                close(True, "The interpolating parabola has those roots and that axis"),
            ]),
            pack("E", True, [
                "The last gap of the first-difference row is exactly the change from price $4$ to price $5$.",
                D(r"16\to 15"),
                D(r"15-16=-1"),
                close(True, "Listed revenue falls by $1$ euro"),
            ]),
        ],
        overview=ov(
            r"Hidden $R(p)=p(8-p)$. Unique listed peak $16$ at $p=4$; second differences $-2$, so $a=-1$."
        ),
        table=md_table(xs3, ys3, "R", xname="p"),
    )

    # ======================================================================
    # 4. SYMBOLIC  (5 true)  f=x+1, g=x^2-4x+1
    # ======================================================================
    f4 = expand(x + 1)
    g4 = expand(x**2 - 4 * x + 1)
    assert nmeet(f4, g4) == 2
    assert sorted(int(r) for r in solve(g4 - f4, x)) == [0, 5]
    assert axis_of(g4) == 2 and vertex_of(g4)[1] == -3
    assert vprod(g4) == 1
    assert expand((x + 1) ** 2 - 6 * (x + 1) + 6) == g4
    add(
        kind="symbolic",
        title="Meetings, vertex, and a rewrite in $f$",
        context=r"Let $f(x)=x+1$ and $g(x)=x^{2}-4x+1$. Work in symbols; no figure is supplied",
        statements=[
            "The sum of the meeting abscissas of the two graphs equals $5$.",
            "The axis of $g$ is $x=2$, which is half the Vieta sum of the roots of $g$.",
            "The vertex of $g$ lies $3$ units below the horizontal axis.",
            "The product of the roots of $g$ equals $1$, matching $g(0)$.",
            r"$g(x)=f(x)^{2}-6\,f(x)+6$.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "Meetings of a line and a parabola are the real zeros of their difference.",
                D(r"g(x)-f(x)=x^{2}-4x+1-(x+1)"),
                D(r"g(x)-f(x)=x^{2}-5x"),
                D(r"x(x-5)=0"),
                "The two abscissas are $0$ and $5$, and Vieta already reads their sum from the middle coefficient of the difference.",
                D(r"0+5=5"),
                close(True, "The sum of the meeting abscissas is $5$"),
            ]),
            pack("B", True, [
                "The axis of $ax^{2}+bx+c$ is the vertical line through $-b/(2a)$, and it ignores the constant term entirely.",
                D(r"a=1\qquad b=-4"),
                D(r"x=-\frac{-4}{2\cdot 1}"),
                D(r"x=2"),
                "Vieta's sum of the roots is $-b/a=4$, and half of that sum is the same abscissa.",
                D(r"\frac{4}{2}=2"),
                close(True, "The axis is $x=2$, half the root-sum"),
            ]),
            pack("C", True, [
                "The vertex height is the value of $g$ on that axis.",
                D(r"g(2)=4-8+1"),
                D(r"g(2)=-3"),
                "A point of height $-3$ sits three units below the horizontal axis.",
                close(True, "The vertex lies $3$ units below the axis"),
            ]),
            pack("D", True, [
                "Vieta reads the product of the roots from the constant term over the leading coefficient, without solving.",
                D(r"P=\frac{c}{a}"),
                D(r"P=\frac{1}{1}=1"),
                D(r"g(0)=1"),
                close(True, "The product of the roots is $1$, matching $g(0)$"),
            ]),
            pack("E", True, [
                "Because $f$ is a non-constant line, the square $f(x)^{2}$ already carries an $x^{2}$ term, so $1$, $f$ and $f^{2}$ span every parabola. Expand the claimed combination.",
                D(r"f(x)^{2}=(x+1)^{2}=x^{2}+2x+1"),
                D(r"f(x)^{2}-6f(x)+6=x^{2}+2x+1-6x-6+6"),
                D(r"x^{2}-4x+1"),
                "The combination reproduces $g$ exactly.",
                close(True, "The claimed rewrite holds"),
            ]),
        ],
        overview=ov(
            r"$f(x)=x+1$, $g(x)=x^{2}-4x+1$. Meetings $x=0$ and $x=5$; axis $x=2$; vertex height $-3$; $g=f^{2}-6f+6$."
        ),
    )

    # ======================================================================
    # 5. PARAMETRIC  (1 true)  f_t = t x,  g = x^2+1,  Δ = t^2-4
    # ======================================================================
    add(
        kind="parametric",
        title="Sliding slope family — when tangency happens",
        context=(
            r"For each real $t$ let $f_t(x)=tx$ and $g(x)=x^{2}+1$. "
            "Study how the line family meets the fixed parabola"
        ),
        statements=[
            r"Tangency occurs precisely at the two slopes $t=2$ and $t=-2$.",
            "The graphs never miss each other: every real $t$ produces at least one meeting.",
            r"For $t=0$ the graphs meet at two real points, because $x^{2}+1$ factors over the reals.",
            r"When $t=3$ the graphs miss each other, because $|t|>2$ forces a negative discriminant.",
            "The axis of $g$ depends on $t$, and for $t=0$ that axis coincides with the line $f_0$.",
        ],
        key=[True, False, False, False, False],
        expls=[
            pack("A", True, [
                "Tangency is the algebraic statement that the difference has a repeated root, so the discriminant in the slope parameter must vanish.",
                D(r"g(x)-f_t(x)=x^{2}-tx+1"),
                D(r"\Delta=t^{2}-4"),
                D(r"t^{2}-4=0"),
                D(r"t=\pm 2"),
                "Those two slopes, and only those two, make the line touch the parabola.",
                close(True, "Tangency occurs precisely at $t=\\pm 2$"),
            ]),
            pack("B", False, [
                "The same discriminant is negative for every slope strictly between the two tangent values.",
                D(r"\Delta=t^{2}-4"),
                D(r"|t|<2\Rightarrow \Delta<0"),
                "Take the concrete middle value $t=0$: the difference is $x^{2}+1$, which has no real zero. A miss is possible, so the graphs do not meet for every $t$.",
                close(False, "The family misses whenever $|t|<2$"),
            ]),
            pack("C", False, [
                "For $t=0$ the line is the horizontal axis, so meetings solve $x^{2}+1=0$.",
                D(r"x^{2}+1=0"),
                "No real solution exists: a square cannot equal $-1$, so $x^{2}+1$ does not factor over the reals. The graphs share no real point at all, let alone two.",
                close(False, "There is no real meeting when $t=0$"),
            ]),
            pack("D", False, [
                "Substitute the named slope into the discriminant of $x^{2}-tx+1$.",
                D(r"t=3"),
                D(r"\Delta=9-4=5"),
                D(r"5>0"),
                "A positive discriminant gives two distinct real meetings, not a miss: $|t|>2$ is the two-meeting range, not the miss range.",
                close(False, "The graphs meet twice when $t=3$"),
            ]),
            pack("E", False, [
                "The axis of $g$ is computed from $g$ alone; the sliding line never enters the formula.",
                D(r"g(x)=x^{2}+1"),
                D(r"x=-\frac{0}{2}=0"),
                "The axis stays the vertical line $x=0$ for every $t$. The line $f_0$ is the horizontal axis $y=0$, a different line.",
                close(False, "The axis of $g$ does not depend on $t$ and does not coincide with $f_0$"),
            ]),
        ],
        overview=ov(
            r"$g(x)=x^{2}+1$, $f_t(x)=tx$, $\Delta=t^{2}-4$. Miss for $|t|<2$; tangent at $t=\pm 2$; axis of $g$ is $x=0$."
        ),
    )

    # ======================================================================
    # 6. REBUILD  (3 true)  vertex (2,-3), through (0,5)
    # ======================================================================
    g6 = expand(2 * (x - 2) ** 2 - 3)
    assert ev(g6, 0) == 5 and ev(g6, 2) == -3 and ev(g6, 4) == 5
    assert vertex_of(g6) == (2, -3) and ev(g6, 1) == ev(g6, 3) == -1
    add(
        kind="rebuild",
        title="Rebuild from vertex and a point",
        context=(
            "A parabola has vertex $(2,-3)$ and passes through $(0,5)$. "
            "It opens upwards. Rebuild its rule and test the claims"
        ),
        statements=[
            r"The stretch factor in vertex form equals $2$, so the rebuilt rule is $g(x)=2(x-2)^{2}-3$.",
            r"$g(4)=g(0)=5$, matching the symmetry of a parabola about $x=2$.",
            r"$g(1)=-1$ and $g(3)=-1$, so those two inputs sit equally far from the axis $x=2$.",
            "The vertex lies above the horizontal axis, and therefore both given points $(0,5)$ and $(2,-3)$ have positive height.",
            r"The rule is $g(x)=(x-2)^{2}-3$.",
        ],
        key=[True, True, True, False, False],
        expls=[
            pack("A", True, [
                "Vertex form with the given turning point is $g(x)=a(x-2)^{2}-3$. Passing through $(0,5)$ fixes the unknown stretch $a$.",
                D(r"g(0)=a(0-2)^{2}-3=5"),
                D(r"4a-3=5"),
                D(r"4a=8"),
                D(r"a=2"),
                close(True, "The stretch factor equals $2$, so the rebuilt rule is $2(x-2)^{2}-3$"),
            ]),
            pack("B", True, [
                "The points $x=0$ and $x=4$ sit equally far from the axis $x=2$, so a parabola takes the same value at both. With stretch $a=2$ from $g(0)=5$, that common height is $5$.",
                D(r"g(4)=2(4-2)^{2}-3"),
                D(r"2\cdot 4-3=5"),
                D(r"g(0)=5"),
                close(True, "Both heights equal $5$"),
            ]),
            pack("C", True, [
                "Vertex form $g(x)=a(x-2)^{2}-3$ with $g(0)=5$ forces $a=2$. Then evaluate at $x=1$ and at the reflected input $x=3$.",
                D(r"a=2"),
                D(r"g(1)=2(1)-3=-1"),
                D(r"g(3)=2(1)-3=-1"),
                close(True, "Both heights equal $-1$, matching the equal distance from $x=2$"),
            ]),
            pack("D", False, [
                "The vertex is the given turning point $(2,-3)$. Its height is already negative, so it does not lie above the axis, and $(2,-3)$ itself is a given point of negative height.",
                D(r"g(2)=-3"),
                D(r"-3<0"),
                close(False, "The vertex lies below the axis, and $(2,-3)$ is not of positive height"),
            ]),
            pack("E", False, [
                "The claimed rule is vertex form with stretch $1$ instead of the $a=2$ that hits $(0,5)$. Check it against that given point.",
                D(r"(0-2)^{2}-3=4-3=1"),
                D(r"1\neq 5"),
                "Forgetting the stretch misses the given $y$-intercept, so the unstretched formula is not the rule.",
                close(False, "The correct rule is $2(x-2)^{2}-3$, not the claimed one"),
            ]),
        ],
        overview=ov(
            r"$g(x)=2(x-2)^{2}-3$. Vertex $(2,-3)$; $g(0)=g(4)=5$; $g(1)=-1$. Dropping the stretch $2$ is a trap."
        ),
    )

    # ======================================================================
    # 7. NESTED  (2 true)  f=x+1, g=x^2   — NOT 7.79 inverse nesting
    # ======================================================================
    f7 = x + 1
    g7 = x ** 2
    gf7 = expand(g7.subs(x, f7))
    fg7 = expand(f7.subs(x, g7))
    assert gf7 == expand((x + 1) ** 2)
    assert fg7 == expand(x ** 2 + 1)
    assert axis_of(fg7) == axis_of(g7) == 0
    assert vertex_of(gf7) == (-1, 0) and vertex_of(fg7) == (0, 1)
    add(
        kind="nested",
        title="Line inside a square — axis of the other order",
        context=r"Let $f(x)=x+1$ and $g(x)=x^{2}$. Study the nested rules $g(f(x))$ and $f(g(x))$",
        statements=[
            r"The nested rule $g(f(x))$ expands to a perfect square, so its vertex lies on the horizontal axis.",
            r"The nested rule $f(g(x))$ has the same axis of symmetry as $g$.",
            "The two nested rules are identical as functions.",
            r"The nested rules $g(f(x))$ and $f(g(x))$ have the same vertex.",
            r"The highest power appearing in $f(g(x))$ is $x^{3}$.",
        ],
        key=[True, True, False, False, False],
        expls=[
            pack("A", True, [
                "Nesting the line inside the square substitutes a first-degree expression for $x$.",
                D(r"g(f(x))=(x+1)^{2}"),
                D(r"(x+1)^{2}=x^{2}+2x+1"),
                "A perfect square $(x+1)^{2}$ vanishes at $x=-1$, so the vertex sits on the horizontal axis.",
                D(r"g(f(-1))=0"),
                close(True, "The nesting is a perfect square whose vertex lies on the axis"),
            ]),
            pack("B", True, [
                "In this order the square is computed first and the line is applied afterwards, which merely shifts the values vertically.",
                D(r"f(g(x))=x^{2}+1"),
                "A vertical shift leaves the axis of symmetry untouched: both $x^{2}$ and $x^{2}+1$ turn on the vertical coordinate axis.",
                D(r"x=-\frac{0}{2}=0"),
                close(True, "The composite $f(g(x))$ has the same axis as $g$"),
            ]),
            pack("C", False, [
                "The two expansions already differ by the middle term $2x$. A concrete input makes the gap visible.",
                D(r"g(f(x))=x^{2}+2x+1"),
                D(r"f(g(x))=x^{2}+1"),
                D(r"g(f(1))=4\qquad f(g(1))=2"),
                close(False, "The nested rules are not the same function"),
            ]),
            pack("D", False, [
                "Read the vertex of each composite from completed-square form.",
                D(r"g(f(x))=(x+1)^{2}"),
                D(r"(-1,0)"),
                D(r"f(g(x))=x^{2}+1"),
                D(r"(0,1)"),
                "The two turning points are different points of the plane.",
                close(False, "The nested rules do not share a vertex"),
            ]),
            pack("E", False, [
                "A line applied after a square can only stretch and shift the values, so the highest power stays $x^{2}$.",
                D(r"f(g(x))=x^{2}+1"),
                "No $x^{3}$ term is produced, because nesting multiplies highest powers ($1$ and $2$) instead of adding them.",
                close(False, "The highest power in $f(g(x))$ is $x^{2}$, not $x^{3}$"),
            ]),
        ],
        overview=ov(
            r"Order of nesting changes the middle term: $g(f(x))=(x+1)^{2}$ while $f(g(x))=x^{2}+1$. Both stay quadratic."
        ),
    )

    # ======================================================================
    # 8. FACTORED  (4 true)  g=2(x-1)(x-5)
    # ======================================================================
    g8 = expand(2 * (x - 1) * (x - 5))
    assert g8 == expand(2 * x ** 2 - 12 * x + 10)
    assert axis_of(g8) == 3 and vertex_of(g8)[1] == -8
    assert vsum(g8) == 6 and vprod(g8) == 5
    add(
        kind="factored",
        title="Scaled product — Vieta with a leading $2$",
        context=r"Let $g(x)=2(x-1)(x-5)$. Decide each claim from the factored form",
        statements=[
            "The sum of the roots equals $6$, and therefore the axis of symmetry is $x=3$.",
            "The vertex height equals $-8$, which is twice the height one would get by dropping the leading $2$.",
            "The values $g(0)$ and $g(6)$ agree, so $x=0$ and $x=6$ sit equally far from the axis.",
            "The constant term equals $10$, and the product of the roots is $5$.",
            "Expanded, the middle coefficient equals $-10$.",
        ],
        key=[True, True, True, True, False],
        expls=[
            pack("A", True, [
                "A product $2(x-1)(x-5)$ vanishes precisely where a factor vanishes, so the roots are $1$ and $5$ regardless of the leading $2$.",
                D(r"x=1\qquad x=5"),
                D(r"1+5=6"),
                D(r"x=\frac{1+5}{2}=3"),
                close(True, "The sum of the roots is $6$ and the axis is $x=3$"),
            ]),
            pack("B", True, [
                "The vertex sits on the axis $x=3$. Evaluate the factored form there, keeping the leading $2$.",
                D(r"g(3)=2(3-1)(3-5)"),
                D(r"2\cdot 2\cdot(-2)=-8"),
                "Dropping the leading $2$ would have produced $-4$, half of the true height.",
                D(r"-4\neq -8"),
                close(True, "The vertex height is $-8$, twice the dropped-leading trap"),
            ]),
            pack("C", True, [
                "The axis bisects the roots $1$ and $5$, so it is $x=3$. The inputs $0$ and $6$ sit three units on either side, hence a parabola takes the same value at both.",
                D(r"g(0)=2(-1)(-5)=10"),
                D(r"g(6)=2(5)(1)=10"),
                close(True, "Those two heights agree"),
            ]),
            pack("D", True, [
                "The constant term is the value at the origin, which the factored form gives without a full expansion.",
                D(r"g(0)=2(-1)(-5)"),
                D(r"g(0)=10"),
                "Vieta's product is that constant over the leading coefficient.",
                D(r"P=\frac{10}{2}=5"),
                D(r"1\cdot 5=5"),
                close(True, "Constant term $10$ and product of roots $5$ both match"),
            ]),
            pack("E", False, [
                "Expand the inner product first, then distribute the leading $2$.",
                D(r"(x-1)(x-5)=x^{2}-6x+5"),
                D(r"2(x^{2}-6x+5)=2x^{2}-12x+10"),
                D(r"-12\neq -10"),
                "The trap $-10$ is what one would get from $2\\times(-5)$ if the inner sum of roots had been taken to be $5$ instead of $6$.",
                close(False, "The middle coefficient is $-12$, not $-10$"),
            ]),
        ],
        overview=ov(
            r"$g(x)=2(x-1)(x-5)=2x^{2}-12x+10$. Roots $1$ and $5$; axis $x=3$; vertex height $-8$; constant $10$."
        ),
    )

    # ======================================================================
    # 9. HYBRID  (5 true)  figure g=x^2-4; table y=2x+1
    # ======================================================================
    g9 = expand((x - 2) * (x + 2))
    assert vertex_of(g9) == (0, -4)
    xs9 = [0, 1, 2, 3]
    ys9 = [2 * n + 1 for n in xs9]
    assert ys9 == [1, 3, 5, 7] and first_diffs(ys9) == [2, 2, 2]
    add(
        kind="hybrid",
        title="Parabola figure, line table — a combined reading",
        context=(
            "The figure shows an unknown parabola $g$ (solid brown; no formula). "
            "Separately, the table lists an unknown line $\\ell$ at four inputs. "
            "Use the figure for claims about $g$ and the table for claims about $\\ell$"
        ),
        statements=[
            "The solid curve's two axis crossings are opposites of each other.",
            "The turning point of the solid curve lies $4$ units below the horizontal axis.",
            "The first differences of the tabled heights are constantly $2$, and the second differences therefore vanish, so the interpolating degree is $1$.",
            "A line of slope $2$ through $(0,1)$ matches every tabled point.",
            "At the solid curve's right-hand axis crossing, the tabled height equals $5$.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "Count the brown meetings with the horizontal axis and read their abscissas from the ticks.",
                D(r"x=-2\qquad x=2"),
                "Those two numbers are opposites, matching the visual symmetry of the trough about the vertical axis.",
                close(True, "The two axis crossings are opposites"),
            ]),
            pack("B", True, [
                "The marked trough sits on the vertical axis. Its height on the vertical scale is $-4$.",
                D(r"g(0)=-4"),
                D(r"-4<0"),
                "Four units below the horizontal axis is exactly where the turning point sits.",
                close(True, "The turning point lies $4$ units below the axis"),
            ]),
            pack("C", True, [
                "Form neighbouring gaps of the $\\ell$-row; the table does not print them.",
                D(r"3-1=2"),
                D(r"5-3=2"),
                D(r"7-5=2"),
                D(r"(2,2,2)"),
                D(r"2-2=0"),
                close(True, "Constant first difference $2$ and vanishing second differences force degree $1$"),
            ]),
            pack("D", True, [
                "For unit spacing, a constant first difference is the slope. The tabled height at $x=0$ is the intercept.",
                D(r"m=2\qquad \ell(0)=1"),
                D(r"\ell(x)=2x+1"),
                "Checking the remaining columns: $2\\cdot 1+1=3$, $2\\cdot 2+1=5$, $2\\cdot 3+1=7$. Every listed point matches.",
                close(True, "That line reproduces the whole table"),
            ]),
            pack("E", True, [
                "The right-hand brown axis crossing sits at $x=2$ on the figure. The same abscissa is a column of the table.",
                D(r"x=2"),
                D(r"\ell(2)=5"),
                "The figure supplies the abscissa; the table supplies the height at that same input.",
                close(True, "The tabled height at that crossing is $5$"),
            ]),
        ],
        overview=ov(
            r"Hidden $g(x)=x^{2}-4$, $\ell(x)=2x+1$. Trough $(0,-4)$; roots $\pm 2$; table arithmetic of step $2$."
        ),
        figure_uri=figure(
            g9, xmin=-4, xmax=4, ymin=-6, ymax=10,
            title="Solid brown = unknown parabola g (no formula printed)",
        ),
        table=md_table(xs9, ys9, r"\ell"),
    )

    # ======================================================================
    # 10. TEXT_DENSE  (1 true)  vertex (1,2), roots -1 and 3, f through (0,2) slope -1
    # ======================================================================
    g10 = expand(Rational(-1, 2) * (x + 1) * (x - 3))
    f10 = expand(-x + 2)
    assert ev(g10, 1) == 2
    assert nmeet(f10, g10) == 2
    assert ev(f10, 1) == 1
    unscaled = expand(-(x + 1) * (x - 3))
    assert ev(unscaled, 1) == 4
    add(
        kind="text_dense",
        title="Dock crane — stretch from a named vertex",
        context=(
            "A dock crane's clearance is modelled by a parabola $g$ that opens downwards, "
            "turns at $(1,2)$, and meets the deck $y=0$ at $x=-1$ and $x=3$. "
            "A linear sensor path $f$ passes through $(0,2)$ with slope $-1$"
        ),
        statements=[
            r"The rule for $g$ is $g(x)=-(x+1)(x-3)$, and this unscaled product already peaks at height $2$.",
            r"The unscaled product $-(x+1)(x-3)$ already equals $2$ at $x=1$, so the stretch needed to hit the named vertex is $k=-1$.",
            r"The sensor path is $f(x)=-x+3$, because a slope $-1$ through $(0,2)$ lifts the intercept to $3$.",
            "The sensor path and the clearance curve meet at exactly one real point.",
            "At $x=1$ the sensor lies strictly below the clearance peak.",
        ],
        key=[False, False, False, False, True],
        expls=[
            pack("A", False, [
                "Opening downwards with those roots means $g(x)=k(x+1)(x-3)$ for some $k<0$. The unscaled choice $k=-1$ still has to hit height $2$ at $x=1$.",
                D(r"-(1+1)(1-3)=-(2)(-2)"),
                D(r"4\neq 2"),
                close(False, "The unscaled factorisation misses the named vertex height"),
            ]),
            pack("B", False, [
                "Evaluate the unscaled product at the named peak abscissa $x=1$; that value is its vertex height.",
                D(r"-(x+1)(x-3)\big|_{x=1}=4"),
                D(r"4\neq 2"),
                close(False, "The unscaled vertex height is $4$, not $2$"),
            ]),
            pack("C", False, [
                "Slope $-1$ through $(0,2)$ is point-slope with intercept $2$, not $3$.",
                D(r"f(x)=-x+2"),
                D(r"-x+2\neq -x+3"),
                close(False, "The intercept is $2$, not $3$"),
            ]),
            pack("D", False, [
                "Scale so that $g(1)=2$: $k(2)(-2)=2$ forces $k=-\\frac{1}{2}$. Then form $g-f$.",
                D(r"k\cdot(-4)=2"),
                D(r"k=-\frac{1}{2}"),
                D(r"g(x)-f(x)=-\frac{1}{2}x^{2}+2x-\frac{1}{2}"),
                D(r"\Delta=4-1=3>0"),
                close(False, "A positive discriminant gives two meetings, not one"),
            ]),
            pack("E", True, [
                "At the peak abscissa compare the sensor height with the named vertex height $2$. Only the line is needed.",
                D(r"f(1)=-1+2"),
                D(r"f(1)=1"),
                D(r"1<2"),
                close(True, "The sensor lies strictly below the clearance peak"),
            ]),
        ],
        overview=ov(
            r"Vertex $(1,2)$ with roots $-1,3$ forces $k=-\frac{1}{2}$. $g(x)=-\frac{1}{2}(x+1)(x-3)$, $f(x)=-x+2$."
        ),
    )

    # ======================================================================
    # 11. GRAPH  (3 true)  g=(x-1)(x-3), dashed y=-1  (tangent at vertex)
    # ======================================================================
    g11 = expand((x - 1) * (x - 3))
    f11 = -1 + 0 * x
    assert vertex_of(g11) == (2, -1)
    assert nmeet(f11, g11) == 1
    assert disc_of(g11) > 0 and lead(g11) > 0
    add(
        kind="graph",
        title="Trough touching a level line",
        context=(
            "A **solid brown parabola** $g$ and a **dashed green horizontal line** appear on the axes. "
            "Formulas are withheld. Decide each claim from the figure alone"
        ),
        statements=[
            "The turning point of the solid curve lies on the dashed line, and that shared point is the unique meeting of the two traces.",
            "The two axis crossings sit equally far from the turning abscissa, one unit on each side.",
            "The dashed line lies entirely above the solid curve.",
            "The solid curve and the dashed line meet at exactly two points, both distinct from the turning point.",
            "The midpoint of the two axis crossings is the turning abscissa of the solid curve.",
        ],
        key=[True, True, False, False, True],
        expls=[
            pack("A", True, [
                "The marked trough sits between the two axis crossings. The dashed level runs through that same lowest point and nowhere else nearby.",
                D(r"g(x)=(x-1)(x-3)"),
                D(r"g(2)=-1"),
                "The turning point and the dashed line share the point $(2,-1)$, and the difference $g+1$ is a square vanishing only there.",
                close(True, "The turning point is the unique meeting of the two traces"),
            ]),
            pack("B", True, [
                "The two brown axis meetings sit at $x=1$ and $x=3$. Their midpoint is the marked trough at $x=2$, so each crossing is one unit from the turning abscissa.",
                D(r"x=1\qquad x=3"),
                D(r"\frac{1+3}{2}=2"),
                close(True, "The crossings sit equally far from the turning abscissa, one unit on each side"),
            ]),
            pack("C", False, [
                "An upward-opening parabola climbs without bound away from its trough, so it rises above any fixed horizontal line. On the figure the arms already sit above the dashed level near the window edges.",
                D(r"g(0)=3>-1"),
                D(r"g(4)=3>-1"),
                close(False, "The dashed line is not entirely above the solid curve"),
            ]),
            pack("D", False, [
                "The dashed level cuts the trough at its lowest point and nowhere else: that is a tangency, not a pair of crossings.",
                D(r"g(x)+1=(x-2)^{2}"),
                D(r"(x-2)^{2}=0"),
                D(r"x=2"),
                close(False, "There is exactly one shared point, and it is the turning point"),
            ]),
            pack("E", True, [
                "The axis of a parabola always bisects the two roots, so the turning abscissa is the midpoint of the two axis crossings.",
                D(r"x=\frac{1+3}{2}"),
                D(r"x=2"),
                "The figure agrees: the marked trough sits halfway between the two brown meetings with the horizontal axis.",
                close(True, "The midpoint of the crossings is the turning abscissa"),
            ]),
        ],
        overview=ov(
            r"Hidden $g(x)=(x-1)(x-3)$, $y=-1$. Vertex $(2,-1)$; the level is tangent at the trough; roots $1$ and $3$."
        ),
        figure_uri=figure(
            g11, f=f11, xmin=-1, xmax=5, ymin=-4, ymax=8,
            title="Solid brown = g; dashed green = horizontal line",
            flabel="level",
        ),
    )

    # ======================================================================
    # 12. TABLE  (4 true)  y=3x-1 on 0..4
    # ======================================================================
    xs12 = [0, 1, 2, 3, 4]
    ys12 = [3 * n - 1 for n in xs12]
    assert ys12 == [-1, 2, 5, 8, 11]
    assert first_diffs(ys12) == [3, 3, 3, 3]
    assert second_diffs(ys12) == [0, 0, 0]
    add(
        kind="table",
        title="Arithmetic samples — why a square cannot fit",
        context=(
            "The table lists values of an unknown rule $y(x)$ at five equally spaced inputs. "
            "No formula is printed"
        ),
        statements=[
            "The first differences of the $y$-row are constantly $3$, so the second differences vanish and the interpolating degree is at most $1$.",
            "The unique line through the first and last listed points has slope $2$.",
            r"Extending the constant-gap pattern one step past $x=4$ and one step before $x=0$ produces $y(5)=14$ and $y(-1)=-4$.",
            "The second differences of the $y$-row all vanish, so any interpolant of degree at most two is in fact a line.",
            "A quadratic with leading coefficient $1$ cannot fit every listed point.",
        ],
        key=[True, False, True, True, True],
        expls=[
            pack("A", True, [
                "Form neighbouring gaps of the $y$-row.",
                D(r"2-(-1)=3"),
                D(r"5-2=3"),
                D(r"8-5=3"),
                D(r"11-8=3"),
                D(r"(3,3,3,3)"),
                "Constant first differences force vanishing second differences, so any interpolant of degree at most two is in fact a line.",
                close(True, "The first differences are constantly $3$ and the interpolating degree is at most $1$"),
            ]),
            pack("B", False, [
                "The unique line through the first and last listed points uses those two heights and the run of $4$.",
                D(r"m=\frac{11-(-1)}{4-0}"),
                D(r"m=\frac{12}{4}=3"),
                D(r"3\neq 2"),
                close(False, "That line has slope $3$, not $2$"),
            ]),
            pack("C", True, [
                "The first-difference row is constantly $3$, so the sequence extends by the same gap in both directions.",
                D(r"y(5)=11+3=14"),
                D(r"y(-1)=-1-3=-4"),
                close(True, "The two extrapolations are $14$ and $-4$"),
            ]),
            pack("D", True, [
                "Second differences of a constant first-difference row are all zero, so any interpolant of degree at most two has vanishing leading coefficient.",
                D(r"3-3=0"),
                D(r"(0,0,0)"),
                D(r"2a=0"),
                close(True, "The interpolant of degree at most two is a line"),
            ]),
            pack("E", True, [
                "For unit spacing a quadratic $x^{2}+bx+c$ would have constant second difference $2$, not $0$. The table's second differences vanish, so the leading coefficient of any interpolating polynomial of degree at most two must be $0$.",
                D(r"2a=0"),
                D(r"a=0\neq 1"),
                close(True, "No quadratic with leading coefficient $1$ can fit the table"),
            ]),
        ],
        overview=ov(
            r"Hidden $y=3x-1$. Constant first difference $3$; intercept $-1$; next term $14$; second differences vanish."
        ),
        table=md_table(xs12, ys12, "y"),
    )

    # ======================================================================
    # 13. APPLIED  (1 true)  ball toss h=t(6-t)
    # ======================================================================
    h13 = expand(-x * (x - 6))
    assert vertex_of(h13) == (3, 9)
    assert ev(h13, 0) == 0 and ev(h13, 6) == 0
    assert ev(h13, 1) == ev(h13, 5) == 5
    add(
        kind="applied",
        title="Ball toss — peak as midpoint of the ground times",
        context=(
            "A ball is tossed straight up. The figure shows height $h$ (metres) against time $t$ "
            "(seconds) as a **solid brown** curve; the horizontal axis is ground level. "
            "No formula is printed"
        ),
        statements=[
            "The time of greatest height is the midpoint of the two visible ground times.",
            "The greatest height occurs at $t=2$, which would be the midpoint of the two visible ground times.",
            "At $t=1$ the height is greater than at $t=5$.",
            "After the peak, height keeps rising.",
            "The greatest height on the figure is $8$ metres, matching the height at $t=4$.",
        ],
        key=[True, False, False, False, False],
        expls=[
            pack("A", True, [
                "Ground meetings are the brown crossings of the horizontal axis, visible at $t=0$ and $t=6$. The peak is the marked turning point, and the axis of a parabola always bisects the two roots.",
                D(r"t=\frac{0+6}{2}"),
                D(r"t=3"),
                "That midpoint is exactly where the figure places the highest point.",
                close(True, "The time of greatest height is the midpoint of the two ground times"),
            ]),
            pack("B", False, [
                "The same midpoint computation puts the peak at $t=3$, and the figure's marked turn sits on that tick, not on $t=2$.",
                D(r"t=3"),
                D(r"3\neq 2"),
                close(False, "The greatest height occurs at $t=3$, not at $t=2$"),
            ]),
            pack("C", False, [
                "The curve is symmetric about $t=3$, so heights equally far from the peak agree. The ticks $t=1$ and $t=5$ are such a pair.",
                D(r"h(1)=5"),
                D(r"h(5)=5"),
                close(False, "The two heights are equal, not strictly ordered"),
            ]),
            pack("D", False, [
                "Past the peak the solid curve slopes down toward the second ground crossing. Compare the peak with the next integer tick.",
                D(r"h(3)=9"),
                D(r"h(4)=8"),
                D(r"8<9"),
                close(False, "Height falls after the peak"),
            ]),
            pack("E", False, [
                "The peak sits at the midpoint $t=3$. The height there is $9$, while the neighbouring tick $t=4$ reads $8$ — a near-miss for the peak, not the peak itself.",
                D(r"h(3)=9"),
                D(r"h(4)=8"),
                D(r"9\neq 8"),
                close(False, "The greatest height is $9$ metres, not the $8$ metres seen at $t=4$"),
            ]),
        ],
        overview=ov(
            r"Hidden $h(t)=t(6-t)$. Peak $(3,9)$; ground times $t=0$ and $t=6$, symmetric about the peak."
        ),
        figure_uri=figure(
            h13, xmin=-0.5, xmax=6.5, ymin=-2, ymax=12,
            title="Solid brown = height against time (ground = horizontal axis)",
            xlabel="t",
            ylabel="h",
        ),
    )

    # ======================================================================
    # 14. SYMBOLIC  (2 true)  g=x^2+6x+5
    # ======================================================================
    g14 = expand(x ** 2 + 6 * x + 5)
    assert expand((x + 3) ** 2 - 4) == g14
    assert vertex_of(g14) == (-3, -4)
    assert disc_of(g14) == 16
    add(
        kind="symbolic",
        title="Completing the square — signs and a shift trap",
        context=r"Let $g(x)=x^{2}+6x+5$. Decide each claim",
        statements=[
            r"Completing the square yields $g(x)=(x+3)^{2}-4$, so the vertex is $(-3,-4)$.",
            r"The roots are $-1$ and $-5$, whose product $5$ matches $c/a$ and whose sum $-6$ matches $-b/a$.",
            "Both roots are positive, and therefore the axis lies to the right of the origin.",
            "The discriminant equals $15$.",
            "Shifting the graph up by $5$ units produces a perfect square with a double root.",
        ],
        key=[True, True, False, False, False],
        expls=[
            pack("A", True, [
                "Complete the square by taking half the middle coefficient and restoring the constant.",
                D(r"x^{2}+6x+5=(x^{2}+6x+9)-9+5"),
                D(r"(x+3)^{2}-4"),
                "That form turns at $x=-3$ with height $-4$.",
                D(r"g(-3)=-4"),
                close(True, "Vertex form and vertex $(-3,-4)$ both match"),
            ]),
            pack("B", True, [
                "Factor, then check Vieta against the coefficients of $g$.",
                D(r"g(x)=(x+1)(x+5)"),
                D(r"x=-1\qquad x=-5"),
                D(r"(-1)+(-5)=-6"),
                D(r"(-1)\cdot(-5)=5"),
                "Those match $-b/a=-6$ and $c/a=5$.",
                close(True, "The roots, their sum, and their product all match Vieta"),
            ]),
            pack("C", False, [
                "The product $c/a=5>0$ and the sum $-b/a=-6<0$ force two negative roots, so they are not both positive, and the axis is their midpoint $x=-3$, left of the origin.",
                D(r"x=-1\qquad x=-5"),
                D(r"x=\frac{-1+(-5)}{2}=-3"),
                close(False, "Both roots are negative, and the axis lies to the left of the origin"),
            ]),
            pack("D", False, [
                "The discriminant is $b^{2}-4ac$ with the three coefficients of $g$. Half the middle coefficient is $3$, and $3^{2}-5=4$ is not needed here: compute the discriminant directly.",
                D(r"\Delta=b^{2}-4ac"),
                D(r"\Delta=16"),
                D(r"16\neq 15"),
                close(False, "The discriminant is $16$, not $15$"),
            ]),
            pack("E", False, [
                "A vertical shift by $k$ produces $(x+3)^{2}-4+k$. For a perfect square the constant must vanish, which forces $k=4$, not $k=5$.",
                D(r"(x+3)^{2}-4+5=(x+3)^{2}+1"),
                D(r"(x+3)^{2}+1\neq (x+3)^{2}"),
                "A concrete check: the shifted rule at $x=-3$ equals $1$, not $0$, so there is no root at all, let alone a double one.",
                close(False, "A shift of $5$ overshoots the vertex and leaves no real root"),
            ]),
        ],
        overview=ov(
            r"$g(x)=(x+3)^{2}-4$. Vertex $(-3,-4)$; roots $-1$ and $-5$; $\Delta=16$. A shift of $+4$, not $+5$, yields a double root."
        ),
    )

    # ======================================================================
    # 15. PARAMETRIC  (5 true)  g_s = (x-2)^2 + (s-4)
    # ======================================================================
    add(
        kind="parametric",
        title="Vertical shift family — root count by vertex height",
        context=(
            r"For each real $s$ let $g_s(x)=(x-2)^{2}+(s-4)$. "
            "Study how the vertical shift changes the graph"
        ),
        statements=[
            r"For $s=3$ the vertex sits one unit below the axis, so there are two distinct real roots whose midpoint is $x=2$.",
            r"For $s=4$ the vertex lies on the axis, so there is a double root at $x=2$ and no other.",
            r"For $s=5$ the vertex sits one unit above the axis, so $g_s$ has no real root.",
            r"The axis of symmetry of $g_s$ is $x=2$ for every $s$, because the $(x-2)^{2}$ term never moves horizontally.",
            r"The vertex height of $g_s$ equals $s-4$, so the graph sits below the axis precisely when $s<4$.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "The vertex height is $s-4$. For $s=3$ that height is $-1$, so the upward parabola sits one unit below the axis and must cut it twice.",
                D(r"g_3(x)=(x-2)^{2}-1"),
                D(r"(x-2)^{2}=1"),
                D(r"x=1\qquad x=3"),
                close(True, "Two distinct real roots exist when $s=3$"),
            ]),
            pack("B", True, [
                "For $s=4$ the vertex lands on the horizontal axis, which is a repeated root.",
                D(r"g_4(x)=(x-2)^{2}"),
                D(r"(x-2)^{2}=0"),
                D(r"x=2"),
                close(True, "The graph touches the axis exactly once"),
            ]),
            pack("C", True, [
                "For $s=5$ the vertex height is $+1$, so the whole upward parabola sits strictly above the axis.",
                D(r"g_5(x)=(x-2)^{2}+1"),
                D(r"(x-2)^{2}=-1"),
                "A square cannot be negative, so there is no real root.",
                close(True, "The graph misses the axis when $s=5$"),
            ]),
            pack("D", True, [
                "A vertical shift never moves the axis: the square is still centred at $x=2$, whatever constant is added.",
                D(r"g_s(x)=(x-2)^{2}+(s-4)"),
                D(r"x=2"),
                close(True, "The axis is $x=2$ for every $s$"),
            ]),
            pack("E", True, [
                "The vertex is the point where the square vanishes, so its height is exactly the added constant $s-4$. The upward parabola sits below the axis precisely when that height is negative.",
                D(r"g_s(2)=s-4"),
                D(r"s-4<0"),
                D(r"s<4"),
                close(True, "The vertex height is $s-4$, and the graph sits below the axis precisely when $s<4$"),
            ]),
        ],
        overview=ov(
            r"$g_s(x)=(x-2)^{2}+(s-4)$. Axis $x=2$ for every $s$; vertex height $s-4$ decides two roots, a touch, or a miss."
        ),
    )

    # ======================================================================
    # 16. REBUILD  (4 true)  line through (0,4) and (2,0)
    # ======================================================================
    f16 = expand(-2 * x + 4)
    assert ev(f16, 1) == 2 and ev(f16, 3) == -2
    add(
        kind="rebuild",
        title="Two intercepts — midpoint check and a height trap",
        context=r"A line passes through $(0,4)$ and $(2,0)$. Rebuild it and test the claims",
        statements=[
            r"The slope equals $\frac{0-4}{2-0}=-2$, and intercept form $\frac{x}{2}+\frac{y}{4}=1$ rearranges to $f(x)=-2x+4$.",
            r"The midpoint of the two given points is $(1,2)$, and the rebuilt rule confirms $f(1)=2$.",
            r"The difference $f(x+1)-f(x)$ equals $-2$ for every $x$, so the line falls.",
            r"At $x=1$, the midpoint of the intercepts, the height equals $1$.",
            r"Writing $f(x)=4\bigl(1-\frac{x}{2}\bigr)$ gives $f(3)=-2$, three units past the $x$-intercept.",
        ],
        key=[True, True, True, False, True],
        expls=[
            pack("A", True, [
                "The slope is the rise over the run between the given intercepts.",
                D(r"m=\frac{0-4}{2-0}=-2"),
                "The same intercepts write the intercept form, which rearranges to the slope-intercept rule.",
                D(r"\frac{x}{2}+\frac{y}{4}=1"),
                D(r"y=-2x+4"),
                close(True, "Slope $-2$ and the rebuilt rule both match"),
            ]),
            pack("B", True, [
                "The midpoint of $(0,4)$ and $(2,0)$ is $(1,2)$. Substituting into the rebuilt line returns that height.",
                D(r"f(1)=-2+4=2"),
                close(True, "The midpoint lies on the rebuilt line"),
            ]),
            pack("C", True, [
                "A linear rule changes by its slope at every step of size $1$.",
                D(r"f(x+1)-f(x)=-2"),
                D(r"m=-2<0"),
                close(True, "The constant drop $-2$ matches the negative slope"),
            ]),
            pack("D", False, [
                "The midpoint computation already gave height $2$ at $x=1$, not $1$.",
                D(r"f(1)=2"),
                D(r"2\neq 1"),
                close(False, "The height at $x=1$ is $2$, a near-miss for $1$"),
            ]),
            pack("E", True, [
                "Factor $4$ from the intercept form, then evaluate three units past $x=2$.",
                D(r"f(x)=4\bigl(1-\frac{x}{2}\bigr)"),
                D(r"f(3)=4\bigl(1-\frac{3}{2}\bigr)=-2"),
                close(True, "Three units past the $x$-intercept the height is $-2$"),
            ]),
        ],
        overview=ov(
            r"$f(x)=-2x+4$. Slope $-2$; midpoint $(1,2)$; $f(3)=-2$. The claim $f(1)=1$ is a near-miss."
        ),
    )

    # ======================================================================
    # 17. NESTED  (3 true)  f=2x-1, g=x^2-4
    # ======================================================================
    f17 = expand(2 * x - 1)
    g17 = expand(x ** 2 - 4)
    fg17 = expand(f17.subs(x, g17))
    gf17 = expand(g17.subs(x, f17))
    assert fg17 == expand(2 * x ** 2 - 9)
    assert gf17 == expand(4 * x ** 2 - 4 * x - 3)
    assert vertex_of(gf17) == (Rational(1, 2), -4)
    assert ev(fg17, 0) == -9 and ev(gf17, 0) == -3
    add(
        kind="nested",
        title="Two nestings — missing linear term, shifted axis",
        context=r"Let $f(x)=2x-1$ and $g(x)=x^{2}-4$. Compare $f(g(x))$ with $g(f(x))$",
        statements=[
            r"The nested rule $f(g(x))$ equals $2x^{2}-9$, which has no linear term, and its vertex is $(0,-9)$.",
            r"The nested rule $g(f(x))$ equals $4x^{2}-4x-3$, whose axis is $x=\frac{1}{2}$ and whose vertex height is $-4$.",
            r"Both nested rules have the same highest power of $x$, namely $x^{2}$.",
            r"The nested rule $f(g(x))$ has a linear term in $x$, so its graph is not symmetric about the vertical axis.",
            r"At $x=0$ one has $f(g(0))=g(f(0))$, so the two nestings agree at the origin.",
        ],
        key=[True, True, True, False, False],
        expls=[
            pack("A", True, [
                "Substitute $g$ into the line.",
                D(r"f(g(x))=2(x^{2}-4)-1"),
                D(r"f(g(x))=2x^{2}-9"),
                "No $x$ term remains, so the axis is $x=0$ and the vertex height is $-9$.",
                D(r"f(g(0))=-9"),
                close(True, "The nesting is $2x^{2}-9$ with vertex $(0,-9)$"),
            ]),
            pack("B", True, [
                "Substitute the line into the parabola.",
                D(r"g(f(x))=(2x-1)^{2}-4"),
                D(r"g(f(x))=4x^{2}-4x-3"),
                D(r"x=\frac{4}{8}=\frac{1}{2}"),
                D(r"g(f(\frac{1}{2}))=-4"),
                close(True, "Axis $x=\\frac{1}{2}$ and vertex height $-4$ both match"),
            ]),
            pack("C", True, [
                "Nesting a degree-$1$ rule with a degree-$2$ rule multiplies those degrees.",
                D(r"2\cdot 1=2"),
                D(r"f(g(x))=2x^{2}-9"),
                D(r"g(f(x))=4x^{2}-4x-3"),
                close(True, "Both nestings are quadratic; the highest power is $x^{2}$ in each"),
            ]),
            pack("D", False, [
                "The expansion $2x^{2}-9$ has no $x$ term, and it is even about the vertical axis.",
                D(r"f(g(x))=2x^{2}-9"),
                D(r"f(g(-x))=2x^{2}-9"),
                close(False, "There is no linear term, and the graph is symmetric about $x=0$"),
            ]),
            pack("E", False, [
                "Evaluate each nesting at the origin.",
                D(r"f(g(0))=f(-4)=-9"),
                D(r"g(f(0))=g(-1)=-3"),
                D(r"-9\neq -3"),
                close(False, "The two nested values at $x=0$ disagree"),
            ]),
        ],
        overview=ov(
            r"$f(g(x))=2x^{2}-9$, $g(f(x))=4x^{2}-4x-3$. Vertices $(0,-9)$ and $(\frac{1}{2},-4)$; values at $0$ differ."
        ),
    )

    # ======================================================================
    # 18. FACTORED  (1 true)  g=(x+3)(x-3)
    # ======================================================================
    g18 = expand((x + 3) * (x - 3))
    assert g18 == expand(x ** 2 - 9) and vertex_of(g18) == (0, -9)
    add(
        kind="factored",
        title="Opposite roots — evenness and the trough sign",
        context=r"Let $g(x)=(x+3)(x-3)$. Decide each claim",
        statements=[
            r"The axis is the midpoint $x=0$ of the bracket zeros, the vertex is $(0,-9)$, and therefore $g$ is even: $g(-x)=g(x)$.",
            r"The function $g$ is odd: $g(-x)=-g(x)$ for every $x$, as a product of opposite linear factors.",
            r"Both roots are positive, and therefore the axis lies to the right of the origin.",
            r"The vertex is $(0,9)$, a peak obtained by flipping the sign of the constant term of $x^{2}-9$.",
            r"For every $x$ one has $g(x)\ge 0$, as required of a square of a linear factor.",
        ],
        key=[True, False, False, False, False],
        expls=[
            pack("A", True, [
                "The bracket zeros are opposite numbers $\\pm 3$, so the axis is their midpoint $x=0$. The vertex height is $g(0)$.",
                D(r"g(0)=(3)(-3)=-9"),
                D(r"g(x)=x^{2}-9=g(-x)"),
                close(True, "Axis $x=0$, vertex $(0,-9)$, and $g$ is even"),
            ]),
            pack("B", False, [
                "An odd function would satisfy $g(-x)=-g(x)$. Here both sides of that test fail.",
                D(r"g(-2)=-5"),
                D(r"-g(2)=5"),
                D(r"-5\neq 5"),
                close(False, "$g$ is even, not odd"),
            ]),
            pack("C", False, [
                "The brackets name the roots directly.",
                D(r"x=-3\qquad x=3"),
                close(False, "One root is negative, so they are not both positive"),
            ]),
            pack("D", False, [
                "The vertex height is $g(0)=-9$, not $+9$. The sign trap is the constant term of $x^{2}-9$.",
                D(r"g(0)=-9"),
                close(False, "The vertex is $(0,-9)$, not $(0,9)$"),
            ]),
            pack("E", False, [
                "An upward parabola with vertex height $-9$ takes negative values between its roots. It is also not a square of a single linear factor.",
                D(r"g(0)=-9<0"),
                close(False, "$g$ is not everywhere non-negative"),
            ]),
        ],
        overview=ov(
            r"$g(x)=x^{2}-9$. Even; vertex $(0,-9)$; roots $\pm 3$. The claim $(0,9)$ flips the trough sign."
        ),
    )

    # ======================================================================
    # 19. HYBRID  (2 true)  figure g=4-x^2, dashed y=2; table 5,4,3,2
    # ======================================================================
    g19 = expand(4 - x ** 2)
    f19 = expand(0 * x + 2)
    xs19 = [0, 1, 2, 3]
    ys19 = [5, 4, 3, 2]
    assert nmeet(f19, g19) == 2 and ev(g19, 0) == 4
    add(
        kind="hybrid",
        title="Peak above a level, falling table",
        context=(
            "The figure shows a solid brown parabola and a dashed green horizontal line; "
            "no formulas are printed on the sketch. Separately, the table lists an unknown "
            "line at four inputs"
        ),
        statements=[
            "The solid curve has a highest point (not a trough), and that peak sits strictly above the dashed line.",
            r"The solid curve meets the horizontal axis at $x=\pm 2$; the dashed level meets the solid curve at two other abscissae, distinct from those axis crossings.",
            "The dashed line lies above the peak of the solid curve.",
            r"The tabled rule has constant first difference $3$, matching a rising line of slope $3$.",
            r"The tabled rule is consistent with slope $3$, so each extra unit of $x$ raises the tabled height by $3$.",
        ],
        key=[True, True, False, False, False],
        expls=[
            pack("A", True, [
                "The solid curve peaks on the vertical axis at height $4$, with falling arms — a highest point, not a trough. The dashed level sits at height $2$.",
                D(r"g(x)=4-x^{2}"),
                D(r"g(0)=4>2"),
                close(True, "The peak is a maximum, and it sits strictly above the dashed line"),
            ]),
            pack("B", True, [
                "Axis meetings of the solid curve solve $g(x)=0$.",
                D(r"4-x^{2}=0"),
                D(r"x=\pm 2"),
                "Meetings with the dashed level $y=2$ are a different equation.",
                D(r"4-x^{2}=2"),
                D(r"x=\pm\sqrt{2}"),
                close(True, "Axis crossings $\\pm 2$ are distinct from the two meetings with $y=2$"),
            ]),
            pack("C", False, [
                "The peak height $4$ already sits above the dashed height $2$.",
                D(r"4>2"),
                close(False, "The dashed line lies below the peak, not above it"),
            ]),
            pack("D", False, [
                "The tabled heights $5,4,3,2$ drop by $1$ at each step, not by $3$.",
                D(r"4-5=-1"),
                close(False, "The constant first difference is $-1$, not $3$"),
            ]),
            pack("E", False, [
                "A constant first difference of $-1$ is the slope.",
                D(r"m=-1\neq 3"),
                D(r"\ell(x)=-x+5"),
                close(False, "The tabled slope is $-1$, not $3$"),
            ]),
        ],
        overview=ov(
            r"Hidden $g(x)=4-x^{2}$, $y=2$. Peak $(0,4)$ above the dashed level; table $\ell(x)=-x+5$, slope $-1$."
        ),
        figure_uri=figure(
            g19, f=f19, xmin=-3, xmax=3, ymin=-2, ymax=6,
            title="Solid brown = parabola; dashed green = horizontal line",
            flabel="y=2",
        ),
        table=md_table(xs19, ys19, r"\ell"),
    )

    # ======================================================================
    # 20. TEXT_DENSE  (5 true)  R=p(8-p), C=2p+4
    # ======================================================================
    R20 = expand(x * (8 - x))
    C20 = expand(2 * x + 4)
    Pi20 = expand(R20 - C20)
    assert Pi20 == expand(-(x ** 2) + 6 * x - 4)
    assert axis_of(R20) == 4 and axis_of(Pi20) == 3
    assert ev(Pi20, 3) == 5 and ev(Pi20, 4) == 4
    assert disc_of(Pi20) == 20
    add(
        kind="text_dense",
        title="Revenue peak is not the profit peak",
        context=(
            r"Weekend ticket price $p$ euros yields revenue $R(p)=p(8-p)$. "
            r"Staff cost for the same price experiment is the line $C(p)=2p+4$. "
            r"Profit is $\Pi=R-C$"
        ),
        statements=[
            r"Revenue is a downward-opening parabola, and its largest value occurs at $p=4$ with $R(4)=16$.",
            r"Profit $\Pi(p)=-p^{2}+6p-4$ has axis $p=3$, so the profit maximum is not at the revenue maximum.",
            r"The profit values satisfy $\Pi(3)=5$ and $\Pi(4)=4$, confirming a one-unit shift of the peak.",
            r"At $p=0$ revenue is less than cost, while at $p=5$ revenue exceeds cost.",
            r"Break-even solves $\Pi(p)=0$ and has discriminant $20>0$, so there are two real break-even prices.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "Expand the revenue rule and read the leading coefficient and the axis.",
                D(r"R(p)=-p^{2}+8p"),
                D(r"a=-1<0"),
                D(r"p=4"),
                D(r"R(4)=16"),
                close(True, "A downward parabola with maximum $16$ at $p=4$"),
            ]),
            pack("B", True, [
                "Subtract the cost line from revenue.",
                D(r"\Pi(p)=p(8-p)-(2p+4)"),
                D(r"\Pi(p)=-p^{2}+6p-4"),
                D(r"p=-\frac{6}{-2}=3"),
                close(True, "The profit axis is $p=3$, one unit left of the revenue axis $p=4$"),
            ]),
            pack("C", True, [
                "Evaluate profit at the two candidate peaks.",
                D(r"\Pi(3)=5"),
                D(r"\Pi(4)=4"),
                D(r"5>4"),
                close(True, "Profit at $p=3$ exceeds profit at the revenue peak $p=4$"),
            ]),
            pack("D", True, [
                "Compare revenue and cost at the two named prices.",
                D(r"R(0)=0<4=C(0)"),
                D(r"R(5)=15>14=C(5)"),
                close(True, "Revenue starts below cost and later exceeds it"),
            ]),
            pack("E", True, [
                r"Break-even is a quadratic equation. The discriminant of $\Pi$ uses $a=-1$, $b=6$, $c=-4$.",
                D(r"-p^{2}+6p-4=0"),
                D(r"\Delta=20>0"),
                close(True, "A positive discriminant gives two real break-even prices"),
            ]),
        ],
        overview=ov(
            r"$R(p)=p(8-p)$, $\Pi(p)=-p^{2}+6p-4$. Revenue max at $p=4$; profit max at $p=3$; $\Delta=20$."
        ),
    )

    # ======================================================================
    # 21. GRAPH  (4 true)  g=x^2-1, dashed y=1
    # ======================================================================
    g21 = expand(x ** 2 - 1)
    f21 = expand(0 * x + 1)
    assert nmeet(f21, g21) == 2 and vertex_of(g21) == (0, -1)
    add(
        kind="graph",
        title="Trough below a secant level",
        context=(
            "The figure shows a **solid brown parabola** and a **dashed green horizontal line**. "
            "No closed forms are printed. Work from ticks and marked turns only"
        ),
        statements=[
            "The solid curve crosses the horizontal axis once on each side of the origin, and the turning point is a trough at height $-1$.",
            "The dashed line sits at height $0$, coinciding with the horizontal axis.",
            r"The solid curve and the dashed line share exactly two points, and those meetings are not the axis crossings $x=\pm 1$.",
            "The turning point lies below the dashed line, and the vertical gap there equals $2$.",
            "The solid curve opens upwards, and because the trough sits below the horizontal axis there are two real axis crossings.",
        ],
        key=[True, False, True, True, True],
        expls=[
            pack("A", True, [
                "The two brown axis meetings sit at $x=\\pm 1$, and the marked trough is on the vertical axis at height $-1$. Those ticks force",
                D(r"g(x)=x^{2}-1"),
                D(r"g(0)=-1"),
                close(True, "One crossing on each side of the origin, and a trough of height $-1$"),
            ]),
            pack("B", False, [
                "The dashed level runs through height $1$, strictly above the origin.",
                D(r"y=1"),
                D(r"1\neq 0"),
                close(False, "The dashed line is $y=1$, not the horizontal axis"),
            ]),
            pack("C", True, [
                "Meetings with the dashed level $y=1$ solve a different equation from $g(x)=0$.",
                D(r"x^{2}-1=1"),
                D(r"x=\pm\sqrt{2}"),
                D(r"\pm\sqrt{2}\neq \pm 1"),
                close(True, "Two meetings with the dashed line, distinct from the axis crossings"),
            ]),
            pack("D", True, [
                "At the trough abscissa compare the two heights.",
                D(r"g(0)=-1"),
                D(r"1-(-1)=2"),
                close(True, "The trough lies below the dashed line with vertical gap $2$"),
            ]),
            pack("E", True, [
                "Falling-then-rising arms mean a positive leading coefficient. A trough below the axis for an upward parabola produces two real roots.",
                D(r"a=1>0"),
                D(r"\Delta=4>0"),
                close(True, "The curve opens upwards and crosses the axis twice"),
            ]),
        ],
        overview=ov(
            r"Hidden $g(x)=x^{2}-1$, $y=1$. Trough $(0,-1)$; axis crossings $\pm 1$; meetings with $y=1$ at $\pm\sqrt{2}$."
        ),
        figure_uri=figure(
            g21, f=f21, xmin=-3, xmax=3, ymin=-3, ymax=6,
            title="Solid brown = parabola; dashed green = horizontal line",
            flabel="y=1",
        ),
    )

    # ======================================================================
    # 22. TABLE  (1 true)  h=x^2-3x+1
    # ======================================================================
    xs22 = list(range(6))
    h22 = expand(x ** 2 - 3 * x + 1)
    ys22 = [int(ev(h22, n)) for n in xs22]
    assert ys22 == [1, -1, -1, 1, 5, 11]
    assert second_diffs(ys22) == [2, 2, 2, 2]
    assert 11 + 8 == 19
    add(
        kind="table",
        title="Quadratic samples — false second-gap $4$",
        context=(
            r"An unknown function $h$ is sampled at $x=0,1,2,3,4,5$ in the table. "
            r"No algebraic expression is given"
        ),
        statements=[
            r"The first differences of the listed heights are constant, so a single line fits the table.",
            r"The second differences are constant and equal to $4$, so the leading coefficient would be $a=2$.",
            r"A single linear model can fit every listed point, because the first gaps never change.",
            r"Extending the second-difference pattern gives $h(6)=20$, as if the next first gap were $9$.",
            r"The second differences are constantly $2$, so $a=1$; matching $h(0)=1$ and $h(1)=-1$ rebuilds $h(x)=x^{2}-3x+1$.",
        ],
        key=[False, False, False, False, True],
        expls=[
            pack("A", False, [
                "The first gaps of $1,-1,-1,1,5,11$ are",
                D(r"-2,0,2,4,6"),
                close(False, "Those first differences change at every step, so no single line fits"),
            ]),
            pack("B", False, [
                "The second gaps of that first-difference row are constantly $2$, not $4$.",
                D(r"2,2,2,2"),
                D(r"2a=2"),
                D(r"a=1\neq 2"),
                close(False, "The second-difference constant is $2$, so $a=1$, not $2$"),
            ]),
            pack("C", False, [
                "A linear model would require constant first differences. Here the first gaps move while the second ones stand still.",
                D(r"a=1\neq 0"),
                close(False, "No single line can fit every listed point"),
            ]),
            pack("D", False, [
                "The last first difference is $6$. One further second-difference of $2$ produces the next first gap $8$, then",
                D(r"h(6)=11+8=19"),
                D(r"19\neq 20"),
                close(False, "The next term is $19$, not $20$"),
            ]),
            pack("E", True, [
                "Unit spacing converts the second-difference constant into the leading coefficient by dividing by $2$.",
                D(r"2a=2"),
                D(r"a=1"),
                "Then $h(0)=c=1$ and $h(1)=1+b+1=-1$ force $b=-3$.",
                D(r"h(x)=x^{2}-3x+1"),
                close(True, "Second differences $2$ rebuild the quadratic that matches the first two cells"),
            ]),
        ],
        overview=ov(
            r"Hidden $h(x)=x^{2}-3x+1$. Second differences $2$, so $a=1$; $h(6)=19$, not $20$."
        ),
        table=md_table(xs22, ys22, "h"),
    )

    # ======================================================================
    # 23. APPLIED  (5 true)  C=(q-2)^2+1
    # ======================================================================
    xs23 = list(range(6))
    C23 = expand((x - 2) ** 2 + 1)
    ys23 = [int(ev(C23, n)) for n in xs23]
    assert ys23 == [5, 2, 1, 2, 5, 10]
    add(
        kind="applied",
        title="Workshop cost trough in a table",
        context=(
            "A workshop logs total cost $C$ (euros) against daily batch size $q$ in the table. "
            "No cost formula is written in the logbook"
        ),
        statements=[
            r"Among the listed batches, cost is smallest at $q=2$, and rebuilding from second differences places the vertex at that same input.",
            r"Cost at $q=0$ equals cost at $q=4$ by symmetry about the rebuilt axis $q=2$, not as a coincidence of two cells.",
            r"Cost rises from $q=2$ to $q=3$, matching a step away from the vertex of an upward parabola.",
            r"The second differences of the cost row are constantly $2$, so $a=1$; matching $C(0)=5$ and $C(1)=2$ yields $C(q)=q^{2}-4q+5$.",
            r"Raising the batch from $4$ to $5$ increases cost by $5$ euros, which is the next first difference after $3$.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "The listed costs $5,2,1,2,5,10$ have unique minimum $1$ at $q=2$. Second differences constantly $2$ rebuild a monic parabola whose axis is that same input.",
                D(r"C(q)=(q-2)^{2}+1"),
                D(r"q=2"),
                close(True, "The listed minimum and the rebuilt vertex sit at the same batch $q=2$"),
            ]),
            pack("B", True, [
                "Inputs $0$ and $4$ are equally far from the axis $q=2$, so an upward parabola takes the same value there.",
                D(r"C(0)=C(4)"),
                D(r"5=5"),
                close(True, "Equality of those two cells is forced by symmetry about $q=2$"),
            ]),
            pack("C", True, [
                "Stepping from the vertex to the next listed batch raises an upward parabola.",
                D(r"C(2)=1"),
                D(r"C(3)=2"),
                D(r"2>1"),
                close(True, "Cost rises from $q=2$ to $q=3$, away from the trough"),
            ]),
            pack("D", True, [
                "Unit spacing converts the second-difference constant into $a$.",
                D(r"2a=2"),
                D(r"a=1"),
                D(r"C(q)=q^{2}-4q+5"),
                close(True, "Second differences and the first two cells rebuild $q^{2}-4q+5$"),
            ]),
            pack("E", True, [
                "The first-difference row is $-3,-1,1,3,5$. The last of those gaps is the step from $q=4$ to $q=5$.",
                D(r"C(5)-C(4)=10-5=5"),
                close(True, "That step increases cost by $5$ euros"),
            ]),
        ],
        overview=ov(
            r"Hidden $C(q)=(q-2)^{2}+1$. Trough at $q=2$; $C(0)=C(4)=5$; second differences $2$."
        ),
        table=md_table(xs23, ys23, "C", xname="q"),
    )

    # ======================================================================
    # 24. SYMBOLIC  (3 true)  f=4x-1, g=x^2+x-1
    # ======================================================================
    f24 = expand(4 * x - 1)
    g24 = expand(x ** 2 + x - 1)
    assert expand(g24 - f24) == expand(x ** 2 - 3 * x)
    assert disc_of(g24 - f24) == 9 and nmeet(f24, g24) == 2
    assert vertex_of(g24) == (Rational(-1, 2), Rational(-5, 4))
    add(
        kind="symbolic",
        title="Factor the difference, then the vertex of $g$",
        context=r"Let $f(x)=4x-1$ and $g(x)=x^{2}+x-1$. Decide each claim",
        statements=[
            r"The discriminant of $g-f$ is $9>0$, and the meetings factor as $x(x-3)=0$.",
            r"The graphs are tangent for this pair, so $g-f$ is a perfect square.",
            r"The axis of $g$ is $x=-\frac{1}{2}$ and the vertex height equals $-\frac{5}{4}$.",
            r"At $x=0$ one has $g(0)=f(0)$, so the origin-abscissa is one of the two meetings.",
            r"The leading coefficient of $g-f$ equals $2$, because subtracting a line doubles the $x^{2}$ coefficient of $g$.",
        ],
        key=[True, False, True, True, False],
        expls=[
            pack("A", True, [
                "Form the difference and factor.",
                D(r"g(x)-f(x)=x^{2}-3x"),
                D(r"x(x-3)=0"),
                D(r"\Delta=9>0"),
                close(True, "Two meetings, at $x=0$ and $x=3$, matching discriminant $9$"),
            ]),
            pack("B", False, [
                "Tangency would require discriminant zero. Here $\\Delta=9>0$, so two crossings, and $x(x-3)$ is not a square.",
                D(r"\Delta=9\neq 0"),
                close(False, "The graphs cut twice; they are not tangent"),
            ]),
            pack("C", True, [
                "The axis of $g$ uses only the coefficients of $g$.",
                D(r"x=-\frac{1}{2}"),
                D(r"g\bigl(-\frac{1}{2}\bigr)=\frac{1}{4}-\frac{1}{2}-1=-\frac{5}{4}"),
                close(True, "Axis $-\\frac{1}{2}$ and vertex height $-\\frac{5}{4}$ both match"),
            ]),
            pack("D", True, [
                "Evaluate both rules at the origin.",
                D(r"g(0)=-1"),
                D(r"f(0)=-1"),
                close(True, "The graphs meet at $x=0$, matching $g(0)=f(0)$"),
            ]),
            pack("E", False, [
                "Subtracting a line cannot change the $x^{2}$ coefficient of $g$. The difference $x^{2}-3x$ is monic.",
                D(r"g-f=x^{2}-3x"),
                D(r"a=1\neq 2"),
                close(False, "The leading coefficient is $1$, not $2$"),
            ]),
        ],
        overview=ov(
            r"$g-f=x(x-3)$, $\Delta=9$. Meetings $0$ and $3$; vertex of $g$ is $\bigl(-\frac{1}{2},-\frac{5}{4}\bigr)$."
        ),
    )

    # ======================================================================
    # 25. PARAMETRIC  (2 true)  g_a = a x^2-4x+3, f=3
    # ======================================================================
    add(
        kind="parametric",
        title="Shared intercept, sliding second meeting",
        context=(
            r"Let $g_a(x)=a x^{2}-4x+3$ with $a\neq 0$, and let $f(x)=3$. "
            r"Watch how the leading coefficient changes meetings with the level $y=3$"
        ),
        statements=[
            r"For every $a\neq 0$ the graphs meet at $x=0$, because $g_a(0)=3=f(0)$.",
            r"When $a=1$ the second meeting is at $x=4$, matching the formula $x=4/a$.",
            r"When $a=2$ the second meeting is at $x=3$, matching a midpoint between $0$ and $4$.",
            r"The axis of $g_a$ is independent of $a$, because the $x$ coefficient $-4$ never changes.",
            r"If $a=-1$, then $g_a$ opens upwards, since changing the leading sign cannot flip the arms.",
        ],
        key=[True, True, False, False, False],
        expls=[
            pack("A", True, [
                "The constant term of $g_a$ is $3$, matching the level $y=3$, so $x=0$ is always a meeting.",
                D(r"g_a(x)-3=ax^{2}-4x"),
                D(r"x(ax-4)=0"),
                D(r"x=0"),
                close(True, "The factor $x$ is present for every $a\\neq 0$"),
            ]),
            pack("B", True, [
                "The second factor vanishes at $x=4/a$. For $a=1$ that is $x=4$.",
                D(r"x=\frac{4}{a}"),
                D(r"a=1\Rightarrow x=4"),
                close(True, "When $a=1$ the second meeting is at $x=4$"),
            ]),
            pack("C", False, [
                "The same formula with $a=2$ gives $x=2$, not $x=3$.",
                D(r"x=\frac{4}{2}=2"),
                D(r"2\neq 3"),
                close(False, "The second meeting is at $x=2$, a near-miss for $x=3$"),
            ]),
            pack("D", False, [
                "The axis of $g_a$ is $-b/(2a)=2/a$, which slides as $a$ changes.",
                D(r"x=\frac{2}{a}"),
                close(False, "The axis depends on $a$"),
            ]),
            pack("E", False, [
                "The leading coefficient is $a$ itself. For $a=-1$ the arms open downwards.",
                D(r"a=-1<0"),
                close(False, "$g_{-1}$ opens downwards, not upwards"),
            ]),
        ],
        overview=ov(
            r"$g_a(x)-3=x(ax-4)$. Always a meeting at $x=0$; second meeting $x=4/a$; axis $x=2/a$."
        ),
    )

    # ======================================================================
    # 26. REBUILD  (1 true)  monic, roots -1 and 3
    # ======================================================================
    g26 = expand((x + 1) * (x - 3))
    assert g26 == expand(x ** 2 - 2 * x - 3)
    assert vertex_of(g26) == (1, -4)
    add(
        kind="rebuild",
        title="Monic parabola from two roots — sign traps",
        context=r"A monic parabola has roots $x=-1$ and $x=3$. Rebuild $g$ and test the claims",
        statements=[
            r"The rule is $g(x)=x^{2}-2x-3$, the axis is $x=1$, and the vertex height equals $-4$.",
            r"Expanded, $g(x)=x^{2}-2x+3$, so the product of the roots is $+3$.",
            r"The axis is $x=0$, because the roots $-1$ and $3$ have opposite signs.",
            r"The vertex height equals $-3$, matching the constant term $g(0)$.",
            r"The constant term equals $3$, matching the product of the roots without the sign of the factors.",
        ],
        key=[True, False, False, False, False],
        expls=[
            pack("A", True, [
                "A monic parabola with those roots is the product of the two linear factors.",
                D(r"g(x)=(x+1)(x-3)"),
                D(r"g(x)=x^{2}-2x-3"),
                D(r"x=\frac{-1+3}{2}=1"),
                D(r"g(1)=1-2-3=-4"),
                close(True, "Expanded rule, axis $x=1$, and vertex height $-4$ all match"),
            ]),
            pack("B", False, [
                "The constant term is the product of the roots with a minus from $(x+1)(x-3)$, hence $-3$, not $+3$.",
                D(r"(x+1)(x-3)=x^{2}-2x-3"),
                D(r"P=-3\neq +3"),
                close(False, "The expansion is $x^{2}-2x-3$; the product of the roots is $-3$"),
            ]),
            pack("C", False, [
                "Opposite signs do not place the axis at the origin unless the roots are opposites of equal size.",
                D(r"x=\frac{-1+3}{2}=1"),
                close(False, "The axis is $x=1$, not $x=0$"),
            ]),
            pack("D", False, [
                "The value $-3$ is the constant term $g(0)$, not the vertex height.",
                D(r"g(0)=-3"),
                D(r"g(1)=-4"),
                close(False, "The vertex height is $-4$, a near-miss for $-3$"),
            ]),
            pack("E", False, [
                "The constant term is $g(0)=(1)(-3)=-3$.",
                D(r"c=-3\neq 3"),
                close(False, "The constant term is $-3$, not $3$"),
            ]),
        ],
        overview=ov(
            r"$g(x)=(x+1)(x-3)=x^{2}-2x-3$. Axis $x=1$; vertex height $-4$. Sign traps on the constant $-3$."
        ),
    )

    # ======================================================================
    # 27. NESTED  (5 true)  f=x-2, g=x^2-1 — both orders, NO inverse
    # ======================================================================
    f27 = x - 2
    g27 = expand(x ** 2 - 1)
    gf27 = expand(g27.subs(x, f27))
    fg27 = expand(f27.subs(x, g27))
    assert gf27 == expand(x ** 2 - 4 * x + 3)
    assert fg27 == expand(x ** 2 - 3)
    assert axis_of(gf27) == 2 and axis_of(fg27) == 0
    assert ev(gf27, 1) == 0 and ev(gf27, 3) == 0
    add(
        kind="nested",
        title="Shift then square — two axes, one opening",
        context=r"Let $f(x)=x-2$ and $g(x)=x^{2}-1$. Study the nested rules $g(f(x))$ and $f(g(x))$",
        statements=[
            r"The nested rule $g(f(x))$ expands to $x^{2}-4x+3$, whose axis is $x=2$ and whose value at the origin is $3$.",
            r"The nested rule $f(g(x))$ expands to $x^{2}-3$, so it has the same axis as $g$ and vertex height $-3$.",
            r"Both nested rules open upwards, and both have highest power $x^{2}$.",
            r"The axis of $g(f(x))$ is the input at which $f$ vanishes, because $g$ itself turns at $0$.",
            r"The nested rule $g(f(x))$ vanishes at $x=1$ and at $x=3$.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "Substitute the line into the square and expand.",
                D(r"g(f(x))=(x-2)^{2}-1"),
                D(r"x^{2}-4x+4-1"),
                D(r"x^{2}-4x+3"),
                "The axis is $-b/(2a)=4/2=2$, and the constant term is the value at the origin.",
                D(r"g(f(0))=3"),
                close(True, "The expansion, the axis $x=2$, and the value $3$ at the origin all match"),
            ]),
            pack("B", True, [
                "The other order feeds the square into the line, which merely subtracts $2$ from the values.",
                D(r"f(g(x))=(x^{2}-1)-2"),
                D(r"x^{2}-3"),
                "A vertical shift leaves the axis of $g$ untouched, and the vertex height is the new constant term.",
                D(r"x=0"),
                D(r"f(g(0))=-3"),
                close(True, "The composite $f(g(x))$ has axis $x=0$ and vertex height $-3$"),
            ]),
            pack("C", True, [
                "Nesting multiplies highest powers instead of adding them, so a line and a square still stop at $x^{2}$. Both leading coefficients are positive.",
                D(r"g(f(x))=x^{2}-4x+3"),
                D(r"f(g(x))=x^{2}-3"),
                D(r"1>0"),
                close(True, "Both nested rules are upward-opening quadratics"),
            ]),
            pack("D", True, [
                "The square $g$ turns at $x=0$. Nesting $f$ inside $g$ sends the axis to the unique input with $f(x)=0$.",
                D(r"f(x)=0"),
                D(r"x-2=0"),
                D(r"x=2"),
                "That is exactly the axis of $g(f(x))$, since $g(f(x))=(x-2)^{2}-1$ turns where $x-2=0$.",
                close(True, "The axis of $g(f(x))$ is the input at which $f$ vanishes"),
            ]),
            pack("E", True, [
                "The expansion $x^{2}-4x+3$ factors by seeking two integers that add to $4$ and multiply to $3$.",
                D(r"x^{2}-4x+3=(x-1)(x-3)"),
                D(r"x=1"),
                D(r"x=3"),
                close(True, "The nested rule $g(f(x))$ vanishes at $x=1$ and $x=3$"),
            ]),
        ],
        overview=ov(
            r"$g(f(x))=x^{2}-4x+3$ has axis $x=2$; $f(g(x))=x^{2}-3$ keeps the axis of $g$. Both open upwards; $g(f)$ vanishes at $1$ and $3$."
        ),
    )

    # ======================================================================
    # 28. FACTORED  (2 true)  g=(x-2)^2
    # ======================================================================
    g28 = expand((x - 2) ** 2)
    assert g28 == expand(x ** 2 - 4 * x + 4) and disc_of(g28) == 0
    add(
        kind="factored",
        title="A double root sitting on the axis",
        context=r"Let $g(x)=(x-2)^{2}$. Decide each claim",
        statements=[
            r"The graph meets the horizontal axis at exactly one point, and that point is the vertex $(2,0)$.",
            r"The discriminant of the expanded quadratic equals $0$, confirming a double root at $x=2$, and the axis is that same line $x=2$.",
            r"The axis of symmetry is $x=3$, one unit to the right of the repeated root.",
            r"Expanding gives $g(x)=x^{2}-4x+5$, as if the constant term were $2^{2}+1$.",
            r"The discriminant of $g$ equals $1$, so the double root splits into two nearby zeros.",
        ],
        key=[True, True, False, False, False],
        expls=[
            pack("A", True, [
                "A square vanishes only when the inside vanishes, so there is a double root at $x=2$. The value there is $0$, which is also the vertex of an upward square.",
                D(r"(x-2)^{2}=0"),
                D(r"x=2"),
                D(r"g(2)=0"),
                close(True, "Exactly one axis meeting, and it is the vertex $(2,0)$"),
            ]),
            pack("B", True, [
                "Expand, then read the discriminant and the axis from the coefficients.",
                D(r"g(x)=x^{2}-4x+4"),
                D(r"\Delta=16-16=0"),
                D(r"x=-\frac{-4}{2}=2"),
                close(True, "Discriminant $0$ and axis $x=2$ both match the double root"),
            ]),
            pack("C", False, [
                "The axis is the repeated root, not a neighbouring integer.",
                D(r"x=2\neq 3"),
                close(False, "The axis is $x=2$, not $x=3$"),
            ]),
            pack("D", False, [
                "The constant term of $(x-2)^{2}$ is $4$, not $5$.",
                D(r"(x-2)^{2}=x^{2}-4x+4"),
                close(False, "The expansion is $x^{2}-4x+4$, not $x^{2}-4x+5$"),
            ]),
            pack("E", False, [
                "A double root forces discriminant zero.",
                D(r"\Delta=0\neq 1"),
                close(False, "The discriminant is $0$, not $1$"),
            ]),
        ],
        overview=ov(
            r"$g(x)=(x-2)^{2}=x^{2}-4x+4$. Double root at the vertex $(2,0)$; $\Delta=0$. Near-miss expansion $+5$."
        ),
    )

    # ======================================================================
    # 29. HYBRID  (3 true)  table q=(x-2)^2+1
    # ======================================================================
    xs29 = list(range(5))
    q29 = expand((x - 2) ** 2 + 1)
    ys29 = [int(ev(q29, n)) for n in xs29]
    assert ys29 == [5, 2, 1, 2, 5]
    assert ev(q29, 5) == 10 and disc_of(q29) == -4
    add(
        kind="hybrid",
        title="Table versus two candidate formulas",
        context=(
            "The figure shows an unknown parabola $q$ (solid brown; no formula). "
            "The table lists the same unknown rule at five consecutive inputs. "
            "Two claims also offer candidate formulas to test against the table"
        ),
        statements=[
            r"The table is symmetric about $x=2$, and the second differences are constantly $2$, so a monic parabola with vertex at $x=2$ fits.",
            r"The candidate $q(x)=(x-2)^{2}+1$ matches every listed point, including the vertex height $1$ at $x=2$.",
            r"The candidate $q(x)=|x-2|+1$ matches every listed point, because a V-shape with the same vertex fits a symmetric table.",
            r"Extending the second-difference pattern gives $q(5)=8$, as if the next first gap stayed $3$.",
            r"The rebuilt parabola has vertex $(2,1)$ above the horizontal axis, and its discriminant is negative, so there are no real roots.",
        ],
        key=[True, True, False, False, True],
        expls=[
            pack("A", True, [
                "The listed heights $5,2,1,2,5$ read the same forwards and backwards, so they are symmetric about the middle input $x=2$. The second gaps are constantly $2$.",
                D(r"2,2,2"),
                D(r"2a=2"),
                D(r"a=1"),
                close(True, "Symmetry about $x=2$ and second-difference $2$ force a monic parabola with that vertex"),
            ]),
            pack("B", True, [
                "Substitute each tabled input into the completed square.",
                D(r"(0-2)^{2}+1=5"),
                D(r"(2-2)^{2}+1=1"),
                D(r"(4-2)^{2}+1=5"),
                close(True, "The candidate $(x-2)^{2}+1$ matches every listed point"),
            ]),
            pack("C", False, [
                "The absolute-value candidate already fails at $x=0$.",
                D(r"|0-2|+1=3"),
                D(r"3\neq 5"),
                close(False, "The V-shape $|x-2|+1$ does not fit the table"),
            ]),
            pack("D", False, [
                "The last first difference is $3$. One further second-difference of $2$ produces the next first gap $5$, then",
                D(r"q(5)=5+5=10"),
                D(r"(5-2)^{2}+1=10"),
                close(False, "The next term is $10$, not $8$"),
            ]),
            pack("E", True, [
                "The rebuilt rule $(x-2)^{2}+1$ has vertex $(2,1)$. Expand to read the discriminant.",
                D(r"q(x)=x^{2}-4x+5"),
                D(r"\Delta=16-20=-4<0"),
                close(True, "A trough above the axis has negative discriminant, so no real roots"),
            ]),
        ],
        overview=ov(
            r"Hidden $q(x)=(x-2)^{2}+1$. Matches the table; $|x-2|+1$ fails; $q(5)=10$; $\Delta=-4$."
        ),
        figure_uri=figure(
            q29, xmin=-0.5, xmax=4.5, ymin=-1, ymax=8,
            title="Solid brown = unknown parabola q (no formula printed)",
        ),
        table=md_table(xs29, ys29, "q"),
    )

    # ======================================================================
    # 30. TEXT_DENSE  (4 true)  arch 4-(x-2)^2, trolley 3-x
    # ======================================================================
    g30 = expand(4 - (x - 2) ** 2)
    f30 = expand(3 - x)
    assert ev(g30, 0) == 0 and ev(g30, 4) == 0
    assert vertex_of(g30) == (2, 4) and ev(f30, 2) == 1
    add(
        kind="text_dense",
        title="Arch crown versus a falling trolley chord",
        context=(
            r"A bridge arch is the part of $g(x)=4-(x-2)^{2}$ above the road $y=0$. "
            r"A maintenance trolley follows the chord $f(x)=3-x$ on the same interval"
        ),
        statements=[
            r"The arch meets the road at $x=0$ and $x=4$, and the crown is the midpoint $(2,4)$.",
            r"The trolley path has slope $-1$, and at the crown abscissa the trolley sits at height $1$, three units below the crown.",
            r"At $x=2$ the trolley height $1$ lies strictly below the arch height $4$.",
            r"The difference $g-f$ is the downward parabola $-x^{2}+5x-3$, so it cannot be identically zero.",
            r"The trolley path lies above the arch at $x=2$, so the chord overshoots the crown.",
        ],
        key=[True, True, True, True, False],
        expls=[
            pack("A", True, [
                "The arch meets the road where the completed square equals $4$.",
                D(r"4-(x-2)^{2}=0"),
                D(r"(x-2)^{2}=4"),
                D(r"x=0"),
                D(r"x=4"),
                close(True, "Road meetings $0$ and $4$, and crown $(2,4)$, both match"),
            ]),
            pack("B", True, [
                "The coefficient of $x$ in the trolley rule is the slope. Evaluate at the crown abscissa.",
                D(r"f(x)=3-x"),
                D(r"m=-1"),
                D(r"f(2)=3-2"),
                D(r"f(2)=1"),
                D(r"4-1=3"),
                close(True, "Slope $-1$, and the trolley sits three units below the crown"),
            ]),
            pack("C", True, [
                "The crown abscissa is $x=2$. Evaluate both the arch and the trolley there, then compare.",
                D(r"g(2)=4"),
                D(r"f(2)=1"),
                D(r"1<4"),
                close(True, "The trolley lies strictly below the arch at $x=2$"),
            ]),
            pack("D", True, [
                "Expand $g$ and subtract the trolley. A nonzero quadratic difference cannot vanish at every $x$.",
                D(r"g(x)=4-(x-2)^{2}"),
                D(r"g(x)=-x^{2}+4x"),
                D(r"g(x)-f(x)=-x^{2}+4x-(3-x)"),
                D(r"g-f=-x^{2}+5x-3"),
                close(True, "The difference is a genuine downward parabola, not the zero function"),
            ]),
            pack("E", False, [
                "A chord of a downward arch is not automatically above the arch. At the crown the trolley sits below $g$.",
                D(r"f(2)=1"),
                D(r"g(2)=4"),
                D(r"1<4"),
                close(False, "The trolley lies below the arch at $x=2$, not above it"),
            ]),
        ],
        overview=ov(
            r"$g(x)=4-(x-2)^{2}$ peaks at $(2,4)$ with road meetings $0$ and $4$. Trolley $f(x)=3-x$ sits at height $1$ there."
        ),
    )

    assert len(tasks) == 30, len(tasks)
    assert [t["stem_kind"] for t in tasks] == STEMS * 3
    return tasks


def validate(tasks: list[dict]) -> None:
    assert len(tasks) == 30
    kinds = Counter(t["stem_kind"] for t in tasks)
    print("stem_kind:", dict(kinds))
    assert all(kinds[k] == 3 for k in STEMS), kinds
    assert [t["stem_kind"] for t in tasks] == STEMS * 3

    truths = [sum(1 for v in t["answer_key"] if v) for t in tasks]
    hist = Counter(truths)
    print("truth histogram:", dict(sorted(hist.items())))
    assert truths == PLANNED_TRUTHS, truths
    assert all(hist.get(k, 0) == 6 for k in range(1, 6)), hist

    ov_lens = sorted(len(t["solution_overview"]) for t in tasks)
    ov_med = statistics.median(ov_lens)
    print(f"overview len min/med/max {ov_lens[0]}/{ov_med}/{ov_lens[-1]}")
    assert ov_lens[0] >= 100, ov_lens[0]
    assert ov_lens[-1] <= 560, ov_lens[-1]
    assert ov_med <= 560, ov_med

    expls = [e for t in tasks for e in t["tactical_explanations"]]
    lens = sorted(len(e) for e in expls)
    med = statistics.median(lens)
    print(f"expl len min/med/max {lens[0]}/{med}/{lens[-1]}")

    figs = sum(1 for t in tasks if t.get("figure"))
    tabs = sum(1 for t in tasks if t.get("tables_markdown"))
    print(f"figures {figs} tables {tabs}")
    assert figs >= 6, figs
    assert tabs >= 6, tabs

    leak = 0
    for t in tasks:
        if t["stem_kind"] not in {"graph", "hybrid"}:
            continue
        blob = t["context"] + " " + " ".join(t["statements"])
        if LEAK_RE.search(blob):
            leak += 1
            print("LEAK", t["id"], LEAK_RE.search(blob).group(0))
    print("graph coordinate leaks:", leak)
    assert leak == 0

    closed = re.compile(r"(?:[fghRC]|\\ell)\s*\(\s*[xntpq]\s*\)\s*=\s*[-+0-9x]")
    for i, t in enumerate(tasks):
        n = i + 1
        assert t["id"] == f"math-7-e{n}"
        assert t["case_id"] == f"MATH 7.E{n:02d}"
        assert t["subsection"] == "7.5"
        assert t["sort_order"] == 100 + n
        assert t["difficulty_level"] == "5/5"
        assert t["placeholder"] is False
        assert len(t["statements"]) == 5
        assert len(set(t["statements"])) == 5
        assert len(t["answer_key"]) == 5 == len(t["tactical_explanations"])

        blob = json.dumps(t)
        for tok in BANNED:
            assert tok not in blob, (t["id"], tok)
        if t["stem_kind"] == "nested":
            assert "f^{-1}" not in blob, t["id"]
        for slogan in (
            "nothing off-stage is needed",
            "forced rather than guessed",
            "the whole test of the wording",
            "as in the overview",
        ):
            assert slogan not in blob.lower(), (t["id"], slogan)

        for s in t["statements"]:
            assert not FROM_PREFIX.search(s), (t["id"], s[:80])
            assert "From the figure" not in s and "From the plot" not in s
            assert "From the table" not in s

        if t.get("tables_markdown"):
            assert "Delta" not in t["tables_markdown"]
            assert r"\Delta" not in t["tables_markdown"]

        if t["stem_kind"] in {"graph", "table", "applied", "hybrid"}:
            assert not closed.search(t["context"]), (t["id"], t["context"][:160])

        student = " ".join(
            [t["context"], t["solution_overview"], *t["statements"], *t["tactical_explanations"]]
            + ([t["tables_markdown"]] if t.get("tables_markdown") else [])
        )
        bad_ints = [v for v in stem_ints(student) if abs(v) > 20]
        assert not bad_ints, (t["id"], bad_ints)

        for j, e in enumerate(t["tactical_explanations"]):
            letter = "ABCDE"[j]
            verd = "True" if t["answer_key"][j] else "False"
            assert e.startswith(f"**{letter}.** → {verd}"), (t["id"], j, e[:80])
            assert e.rstrip().endswith(f"so the statement is {verd}."), (t["id"], letter, e[-80:])
            assert OVERVIEW_REFS.search(e) is None, (t["id"], letter)
            assert "as in the overview" not in e.lower()
            assert e.count("$$") >= 2 and e.count("$$") % 2 == 0, (t["id"], letter, e.count("$$"))
            n_disp = e.count("$$") // 2
            assert 1 <= n_disp <= 6, (t["id"], letter, n_disp)
            for m in re.finditer(r"\$\$([\s\S]*?)\$\$", e):
                inner = m.group(1)
                assert inner.strip(), (t["id"], letter, "empty $$")
                assert "\n" not in inner, (t["id"], letter)
                assert r"\qquad" not in inner, (t["id"], letter, inner)
                assert r"\implies" not in inner, (t["id"], letter, inner)
                assert r"\Rightarrow" not in inner, (t["id"], letter, inner)
                assert not re.search(r"\\text\{[A-Za-z]{4,}", inner), (t["id"], letter, inner)

        for m in re.finditer(r"\$\$([\s\S]*?)\$\$", t["solution_overview"]):
            assert m.group(1).strip(), (t["id"], "empty overview $$")

        if t["stem_kind"] in {"graph", "hybrid", "applied"}:
            joined = " ".join(t["statements"])
            assert "turns at" not in joined.lower()
            assert not re.search(r"vertex is\s*\$\(", joined)

    print("validation OK")


def main() -> None:
    tasks = build_all()
    for t in tasks:
        t["context"] = normalize_displays(t["context"])
        t["solution_overview"] = normalize_displays(t["solution_overview"])
        t["tactical_explanations"] = [normalize_displays(e) for e in t["tactical_explanations"]]
    validate(tasks)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")
    kinds = Counter(t["stem_kind"] for t in tasks)
    figs = sum(1 for t in tasks if t.get("figure"))
    tabs = sum(1 for t in tasks if t.get("tables_markdown"))
    expl_lens = [len(e) for t in tasks for e in t["tactical_explanations"]]
    ov_lens = [len(t["solution_overview"]) for t in tasks]
    print(f"Wrote {len(tasks)} -> {OUT}")
    print("stem_kind counts:", dict(sorted(kinds.items())))
    print(f"figures: {figs}, tables: {tabs}")
    print(f"explanation median: {statistics.median(expl_lens):.0f} chars")
    print(f"overview median: {statistics.median(ov_lens):.0f} chars")
    print("truth counts per task:", dict(sorted(Counter(sum(t["answer_key"]) for t in tasks).items())))
    print("validation: PASSED")


if __name__ == "__main__":
    main()


