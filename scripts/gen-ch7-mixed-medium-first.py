#!/usr/bin/env python3
"""Chapter 7.5 mixed exam — medium-first, Chapter 11 diversity.

Graph / table / hybrid / applied stems name the medium and withhold formulas.
Statements are bare claims: covering the figure or table must make those
letters unsolvable. Textual styles stay fully algebraic.

Small integers; hard 5/5 multi-step work.

Retired as a JSON writer: long shared overviews are no longer used.
Rebuild Chapter 7.5 with scripts/gen-ch7-mixed-hard.py.

Run: python3 scripts/gen-ch7-mixed-hard.py
"""
from __future__ import annotations

import json
import re
import statistics
import sys
from collections import Counter
from pathlib import Path

from sympy import Poly, Rational, Symbol, discriminant, expand, simplify

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch9_svg import svg_polynomial  # noqa: E402

x = Symbol("x")
OUT = Path("/workspace/src/data/math-ch7-mixed-exam.json")

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
LEAK_RE = re.compile(
    r"turns at\s*\$x\s*=|vertex is\s*\$\(|From the plot,|From the figure, the vertex",
    re.I,
)


# ---------------------------------------------------------------------------
# Formatting
# ---------------------------------------------------------------------------

def D(s: str) -> str:
    inner = re.sub(r"\s+", " ", s.strip())
    return f"$${inner}$$"


_STEP_SPLIT = re.compile(r"\\qquad|\\Rightarrow")


def explode_display(inner: str) -> list[str]:
    """Chapter 4: one algebraic step per display. Split \\qquad / \\Rightarrow
    and peel a=b=c chains. Leave inequalities intact."""
    inner = re.sub(r"\s+", " ", inner.strip())
    chunks = [c.strip() for c in _STEP_SPLIT.split(inner) if c.strip()]
    out: list[str] = []
    for ch in chunks:
        if any(op in ch for op in ("<", ">", r"\neq", r"\le", r"\ge", r"\to")):
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
    return normalize_displays(f"{header}\n\n{body}")


# ---------------------------------------------------------------------------
# Algebra helpers (sympy)
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


def rewrite_ABC(f, g):
    fu, gu = Poly(expand(f), x), Poly(expand(g), x)
    m = Rational(fu.all_coeffs()[0])
    k = Rational(fu.all_coeffs()[1])
    a, b, c = (Rational(coeff) for coeff in gu.all_coeffs())
    A = a / m**2
    B = (b - 2 * A * m * k) / m
    C = c - A * k**2 - B * k
    assert expand(A * f**2 + B * f + C - g) == 0
    return A, B, C


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
    # 1. GRAPH  (2 true)  g=-x^2+4, f=-x+2
    # Vertex (0,4); roots ±2; meetings x=-1 and x=2.
    # ======================================================================
    g1 = expand(-(x + 2) * (x - 2))
    f1 = expand(-(x - 2))
    assert g1 == expand(-(x**2) + 4) and f1 == expand(-x + 2)
    assert nmeet(f1, g1) == 2
    assert vertex_of(g1) == (0, 4)
    assert ev(g1, 0) > ev(f1, 0)
    assert lead(g1) < 0
    add(
        kind="graph",
        title="Clearance plot — read the axes",
        context=(
            "The figure shows a **solid brown parabola** $g$ and a **dashed green line** $f$. "
            "No formulas are printed. Reason from the ticks, crossings, and relative heights only"
        ),
        statements=[
            "The solid curve meets the horizontal axis at exactly two points.",
            "The turning point of the solid curve lies below the dashed line.",
            "The two graphs meet at exactly one real point.",
            "On the open interval between the solid curve's two axis crossings, the solid curve stays below the dashed line.",
            "The solid curve opens downwards.",
        ],
        key=[True, False, False, False, True],
        expls=[
            pack("A", True, [
                "A parabola meets the horizontal axis wherever its height is zero, which on the figure is every brown crossing of that axis.",
                "Two distinct crossings are marked, one on each side of the origin.",
                D(r"g(x)=-x^{2}+4=0"),
                D(r"x=\pm 2"),
                close(True, "Two crossings are visible and the hidden rule confirms the count"),
            ]),
            pack("B", False, [
                "The turning point is the unique marked peak on the solid curve, sitting on the vertical axis.",
                "At that common abscissa the brown mark sits strictly above the green line.",
                D(r"g(0)=4\qquad f(0)=2"),
                D(r"4>2"),
                close(False, "The turning point lies above the dashed line, not below it"),
            ]),
            pack("C", False, [
                "The two traces meet where they share a height, so count the brown–green crossings.",
                "The figure shows one crossing left of the origin and one on the positive side.",
                D(r"g(x)-f(x)=-x^{2}+x+2=-(x-2)(x+1)"),
                D(r"x=-1,\; x=2"),
                close(False, "Two meetings are visible, not one"),
            ]),
            pack("D", False, [
                "Between the two brown axis crossings the solid curve arches above the axis while the dashed line cuts through lower heights.",
                "Comparing the traces on that interval, brown stays above green.",
                D(r"g(0)=4"),
                D(r"f(0)=2"),
                D(r"4>2"),
                close(False, "The solid curve is above the dashed line there, not below it"),
            ]),
            pack("E", True, [
                "Whether a parabola opens downwards is read from the arms falling away from a peak.",
                "The solid curve has exactly that shape: a peak on the vertical axis and arms sloping down to the two crossings.",
                D(r"a=-1"),
                D(r"a<0"),
                close(True, "The opening is downwards"),
            ]),
        ],
        overview=(
            "Hidden models:\n\n"
            + D(r"g(x)=-x^{2}+4\qquad f(x)=-x+2")
            + "\n\nVertex $(0,4)$; roots $\\pm 2$; meetings at $x=-1$ and $x=2$. "
            "Read crossings, the peak, and relative heights from the figure; the algebra only checks the reading."
        ),
        figure_uri=figure(
            g1, f=f1, xmin=-3.5, xmax=3.5, ymin=-4, ymax=6,
            title="Solid brown = parabola g; dashed green = line f",
            flabel="f",
        ),
    )

    # ======================================================================
    # 2. TABLE  (3 true)  s = n^2-4n+3 on 0..5
    # 3, -1, -3, -3, -1, 3;  Δ1 = -4,-2,0,2,4;  Δ2 = 2,2,2,2
    # ======================================================================
    xs2 = [0, 1, 2, 3, 4, 5]
    ys2 = [k * k - 4 * k + 3 for k in xs2]
    assert ys2 == [3, 0, -1, 0, 3, 8]
    assert first_diffs(ys2) == [-3, -1, 1, 3, 5]
    assert second_diffs(ys2) == [2, 2, 2, 2]
    add(
        kind="table",
        title="Discrete samples — diagnose the degree",
        context=(
            "A sequence $s_n$ is recorded in the table for $n=0,1,2,3,4,5$. "
            "No closed form is supplied. Decide each claim from the table alone"
        ),
        statements=[
            "The first differences of $s_n$ are constant.",
            "The second differences of $s_n$ are constant and equal to $2$.",
            "A single linear rule fits every listed point.",
            "Rebuilding a quadratic $an^{2}+bn+c$ from the second-difference constant recovers the leading coefficient $a=1$.",
            "The listed heights satisfy $s_0=s_4$.",
        ],
        key=[False, True, False, True, True],
        expls=[
            pack("A", False, [
                "First differences are the neighbouring gaps in the $s$-row, which the table does not print: they have to be formed by hand.",
                D(r"s_{1}-s_{0}=0-3=-3"),
                D(r"s_{2}-s_{1}=-1-0=-1"),
                D(r"(-3,-1,1,3,5)"),
                close(False, "These gaps change from step to step, so they are not constant"),
            ]),
            pack("B", True, [
                "Second differences are the gaps of that first-difference row.",
                D(r"(-1)-(-3)=2"),
                D(r"1-(-1)=2\qquad 3-1=2\qquad 5-3=2"),
                D(r"(2,2,2,2)"),
                close(True, "Every second difference equals $2$"),
            ]),
            pack("C", False, [
                "A linear model forces constant first differences. Here the first differences move while the second ones stand still — the signature of a quadratic, not a line.",
                D(r"2a=2\Rightarrow a=1\neq 0"),
                close(False, "No single line can fit every listed point"),
            ]),
            pack("D", True, [
                "For unit spacing, a quadratic sequence has constant second difference $2a$.",
                D(r"2a=2"),
                D(r"a=1"),
                close(True, "The rebuilt leading coefficient is $1$"),
            ]),
            pack("E", True, [
                "Read the two table entries directly, without rebuilding anything.",
                D(r"s_{0}=3\qquad s_{4}=3"),
                close(True, "The two heights agree"),
            ]),
        ],
        overview=(
            "Hidden model:\n\n"
            + D(r"s_n=n^{2}-4n+3")
            + "\n\nSecond differences constantly $2$, so $a=1$; the table is symmetric about $n=2$."
        ),
        table=md_table(xs2, ys2, "s_n", xname="n"),
    )

    # ======================================================================
    # 3. APPLIED  (4 true)  R = p(8-p) at p=1..5 → 7,12,15,16,15
    # ======================================================================
    xs3 = [1, 2, 3, 4, 5]
    ys3 = [p * (8 - p) for p in xs3]
    assert ys3 == [7, 12, 15, 16, 15]
    add(
        kind="applied",
        title="Ticket desk — revenue table",
        context=(
            "A club sells tickets at price $p$ euros. The table records total revenue $R$ "
            "(in euros) observed at five prices. No formula is printed on the desk sheet"
        ),
        statements=[
            "Among the listed prices, revenue is largest at $p=4$.",
            "Revenue at $p=3$ equals revenue at $p=5$.",
            "Revenue increases at every step from $p=1$ to $p=5$.",
            "The revenue at $p=2$ is $12$ euros.",
            "Raising the price from $4$ to $5$ decreases the listed revenue.",
        ],
        key=[True, True, False, True, True],
        expls=[
            pack("A", True, [
                "List the five recorded revenues in price order and pick out the largest.",
                D(r"(7,12,15,16,15)"),
                D(r"16"),
                close(True, "The unique maximum is $16$, sitting at $p=4$"),
            ]),
            pack("B", True, [
                "The two named prices are different columns of the same row.",
                D(r"R(3)=15"),
                D(r"R(5)=15"),
                close(True, "The two revenues match"),
            ]),
            pack("C", False, [
                "An always-increasing sequence would have every step strictly positive.",
                D(r"R(4)=16"),
                D(r"R(5)=15"),
                D(r"15-16=-1"),
                close(False, "The sequence falls on the last step, so it is not increasing throughout"),
            ]),
            pack("D", True, [
                "The column headed $p=2$ holds the recorded revenue at that price.",
                D(r"R(2)=12"),
                D(r"12"),
                close(True, "The listed revenue is $12$ euros"),
            ]),
            pack("E", True, [
                "A price increase from $4$ to $5$ changes revenue by the difference of those two entries.",
                D(r"R(4)=16"),
                D(r"R(5)=15"),
                D(r"R(5)-R(4)=15-16=-1"),
                close(True, "Revenue falls when the price is raised from $4$ to $5$"),
            ]),
        ],
        overview=(
            "Hidden model $R(p)=p(8-p)$. Students need only the table: the unique listed "
            "peak is $16$ at $p=4$, and the row is symmetric about that price."
        ),
        table=md_table(xs3, ys3, "R", xname="p"),
    )

    # ======================================================================
    # 4. SYMBOLIC  (5 true)  f=2x+1, g=x^2-3x+1
    # ======================================================================
    f4 = expand(2 * x + 1)
    g4 = expand(x**2 - 3 * x + 1)
    assert nmeet(f4, g4) == 2
    assert axis_of(g4) == Rational(3, 2)
    assert vertex_of(g4)[1] == Rational(-5, 4)
    assert vprod(g4) == 1
    A4, B4, C4 = rewrite_ABC(f4, g4)
    add(
        kind="symbolic",
        title="Line and parabola — intersection algebra",
        context="Let $f(x)=2x+1$ and $g(x)=x^{2}-3x+1$. Work in symbols; no figure is supplied",
        statements=[
            "The graphs meet at exactly two real points.",
            rf"The axis of $g$ is $x={F(Rational(3, 2))}$.",
            rf"The vertex height of $g$ equals ${F(Rational(-5, 4))}$.",
            "The product of the roots of $g$ equals $1$.",
            rf"There exist real numbers $A,B,C$ such that $g(x)=A\,f(x)^{2}+B\,f(x)+C$; one such triple is $A={F(A4)}$, $B={F(B4)}$, $C={F(C4)}$.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "Meetings of a line and a parabola are the real zeros of their difference.",
                D(r"g(x)-f(x)=x^{2}-3x+1-(2x+1)=x^{2}-5x"),
                D(r"x(x-5)=0"),
                D(r"x=0,\; x=5"),
                close(True, "Two distinct real roots give two meetings"),
            ]),
            pack("B", True, [
                "The axis of $ax^{2}+bx+c$ is the vertical line through $-b/(2a)$.",
                D(r"a=1\qquad b=-3"),
                D(r"x=-\frac{-3}{2\cdot 1}=\frac{3}{2}"),
                close(True, "The axis is $x=\\frac{3}{2}$"),
            ]),
            pack("C", True, [
                "The vertex height is the value of $g$ on its axis.",
                D(r"g\left(\frac{3}{2}\right)=\left(\frac{3}{2}\right)^{2}-3\cdot\frac{3}{2}+1"),
                D(r"\frac{9}{4}-\frac{9}{2}+1=-\frac{5}{4}"),
                close(True, "The vertex height is $-\\frac{5}{4}$"),
            ]),
            pack("D", True, [
                "Vieta reads the product of the roots from the constant term over the leading coefficient, without solving.",
                D(r"P=\frac{c}{a}=\frac{1}{1}=1"),
                close(True, "The product is $1$"),
            ]),
            pack("E", True, [
                "A line with nonzero slope already produces an $x^{2}$ term once it is squared, so $f^{2}$, $f$ and $1$ span every parabola.",
                D(r"f(x)^{2}=(2x+1)^{2}=4x^{2}+4x+1"),
                D(rf"A=\frac{{1}}{{4}}\qquad B=-2\qquad C=\frac{{11}}{{4}}"),
                D(rf"\frac{{1}}{{4}}(2x+1)^{2}-2(2x+1)+\frac{{11}}{{4}}=x^{2}-3x+1"),
                close(True, "The named triple reproduces $g$ exactly"),
            ]),
        ],
        overview=(
            D(r"f(x)=2x+1\qquad g(x)=x^{2}-3x+1")
            + "\n\nMeetings at $x=0$ and $x=5$; axis $x=\\frac{3}{2}$; vertex height $-\\frac{5}{4}$; "
            + rf"rewrite $A={F(A4)}$, $B={F(B4)}$, $C={F(C4)}$."
        ),
    )

    # ======================================================================
    # 5. PARAMETRIC  (1 true)  f_t = t x,  g = x^2+1,  Δ = t^2-4
    # ======================================================================
    add(
        kind="parametric",
        title="Sliding slope family",
        context=(
            r"For each real $t$ let $f_t(x)=tx$ and $g(x)=x^{2}+1$. "
            "Study how the line family meets the fixed parabola"
        ),
        statements=[
            "For $t=0$ the graphs share no real point.",
            "The graphs never miss each other: every real $t$ produces at least one meeting.",
            "Tangency occurs for exactly one real value of $t$.",
            "When $t=3$ the graphs miss each other.",
            "The axis of $g$ depends on $t$.",
        ],
        key=[True, False, False, False, False],
        expls=[
            pack("A", True, [
                "For $t=0$ the line is the horizontal axis, so meetings solve $x^{2}+1=0$.",
                D(r"g(x)-f_0(x)=x^{2}+1"),
                D(r"x^{2}+1=0"),
                close(True, "No real solution exists, so the graphs share no real point"),
            ]),
            pack("B", False, [
                "The discriminant of the difference is a quadratic in the slope parameter.",
                D(r"g-f_t=x^{2}-tx+1"),
                D(r"\Delta=t^{2}-4"),
                D(r"|t|<2\Rightarrow\Delta<0"),
                close(False, "The graphs miss whenever $|t|<2$"),
            ]),
            pack("C", False, [
                "Tangency is the boundary $\\Delta=0$.",
                D(r"t^{2}-4=0"),
                D(r"t=\pm 2"),
                close(False, "Exactly two tangent slopes exist, not one"),
            ]),
            pack("D", False, [
                "Substitute the named slope into the same discriminant.",
                D(r"t=3\qquad\Delta=9-4=5>0"),
                close(False, "A positive discriminant gives two meetings, not a miss"),
            ]),
            pack("E", False, [
                "The axis of $g$ is computed from $g$ alone.",
                D(r"g(x)=x^{2}+1\qquad x=-\frac{0}{2}=0"),
                close(False, "The axis stays $x=0$ for every $t$"),
            ]),
        ],
        overview=D(r"g(x)-f_t(x)=x^{2}-tx+1\qquad\Delta=t^{2}-4")
        + "\n\nMiss when $|t|<2$, tangency at $t=\\pm 2$, two meetings when $|t|>2$.",
    )
    t_sym = Symbol("t")
    dlt = (t_sym**2 - 4)
    assert dlt.subs(t_sym, 0) < 0 and dlt.subs(t_sym, 3) > 0
    assert simplify(dlt.subs(t_sym, 2)) == 0 and simplify(dlt.subs(t_sym, -2)) == 0

    # ======================================================================
    # 6. REBUILD  (3 true)  vertex (2,-3), through (0,5) → 2(x-2)^2-3
    # ======================================================================
    g6 = expand(2 * (x - 2)**2 - 3)
    assert ev(g6, 0) == 5 and ev(g6, 2) == -3 and ev(g6, 4) == 5
    assert vertex_of(g6) == (2, -3)
    add(
        kind="rebuild",
        title="Rebuild from vertex and a point",
        context=(
            "A parabola has vertex $(2,-3)$ and passes through $(0,5)$. "
            "It opens upwards. Rebuild its rule and test the claims"
        ),
        statements=[
            r"The rule is $g(x)=2(x-2)^{2}-3$.",
            "The $y$-intercept equals $5$.",
            "The axis of symmetry is $x=2$.",
            "The vertex lies above the horizontal axis.",
            r"At $x=4$ one has $g(4)=-3$.",
        ],
        key=[True, True, True, False, False],
        expls=[
            pack("A", True, [
                "Vertex form with the given turning point is $g(x)=a(x-2)^{2}-3$. Passing through $(0,5)$ fixes $a$.",
                D(r"g(0)=a(0-2)^{2}-3=5"),
                D(r"4a-3=5"),
                D(r"a=2"),
                D(r"g(x)=2(x-2)^{2}-3"),
                close(True, "The rebuilt rule matches the claim"),
            ]),
            pack("B", True, [
                "Passing through $(0,5)$ is exactly the claim that the graph meets the vertical axis at height $5$.",
                D(r"g(0)=2(0-2)^{2}-3"),
                D(r"g(0)=5"),
                close(True, "The $y$-intercept is $5$"),
            ]),
            pack("C", True, [
                "The axis is the vertical line through the vertex.",
                D(r"x=2"),
                D(r"g(2)=-3"),
                close(True, "The axis is $x=2$"),
            ]),
            pack("D", False, [
                "The vertex height is the number named in the stem.",
                D(r"g(2)=-3"),
                D(r"-3<0"),
                close(False, "The vertex lies strictly below the horizontal axis"),
            ]),
            pack("E", False, [
                "The point $x=4$ is as far to the right of the axis as $x=0$ is to the left, so the heights agree.",
                D(r"g(4)=2(4-2)^{2}-3=8-3=5"),
                D(r"5\neq -3"),
                close(False, "The height at $x=4$ is $5$, not $-3$"),
            ]),
        ],
        overview=D(r"g(x)=2(x-2)^{2}-3") + "\n\nVertex $(2,-3)$; $g(0)=g(4)=5$.",
    )

    # ======================================================================
    # 7. NESTED  (2 true)  f=x+1, g=x^2
    # ======================================================================
    f7 = x + 1
    g7 = x**2
    gf7 = expand(g7.subs(x, f7))
    fg7 = expand(f7.subs(x, g7))
    assert gf7 == expand((x + 1)**2)
    assert fg7 == expand(x**2 + 1)
    assert ev(gf7, 1) == 4 and ev(fg7, 1) == 2
    add(
        kind="nested",
        title="Nesting a line inside a parabola",
        context=r"Let $f(x)=x+1$ and $g(x)=x^{2}$. Study the nested rules $g(f(x))$ and $f(g(x))$",
        statements=[
            r"The nested rule $g(f(x))$ expands to $x^{2}+2x+1$.",
            r"The nested rule $f(g(x))$ expands to $x^{2}+1$.",
            "The two nested rules are identical as functions.",
            r"At $x=1$ one has $g(f(1))=f(g(1))$.",
            r"The highest power in $f(g(x))$ is $x^{3}$.",
        ],
        key=[True, True, False, False, False],
        expls=[
            pack("A", True, [
                "Substitute the line into the parabola and expand.",
                D(r"g(f(x))=(x+1)^{2}"),
                D(r"(x+1)^{2}=x^{2}+2x+1"),
                close(True, "The expansion matches"),
            ]),
            pack("B", True, [
                "The other order feeds the parabola into the line.",
                D(r"f(g(x))=f(x^{2})"),
                D(r"f(g(x))=x^{2}+1"),
                close(True, "The expansion matches"),
            ]),
            pack("C", False, [
                "The two expansions already differ by the middle term $2x$.",
                D(r"g(f(x))=x^{2}+2x+1"),
                D(r"f(g(x))=x^{2}+1"),
                close(False, "The nested rules are not identical"),
            ]),
            pack("D", False, [
                "Evaluate each nested rule at the named input.",
                D(r"f(1)=2\qquad g(f(1))=4"),
                D(r"g(1)=1\qquad f(g(1))=2"),
                D(r"4\neq 2"),
                close(False, "The two nested values differ at $x=1$"),
            ]),
            pack("E", False, [
                "After expansion $f(g(x))=x^{2}+1$ is still quadratic.",
                D(r"f(g(x))=x^{2}+1"),
                D(r"x^{2}"),
                close(False, "The highest power is $x^{2}$, not $x^{3}$"),
            ]),
        ],
        overview=(
            "Composition of a line and a parabola stays quadratic; order matters.\n\n"
            + D(r"g(f(x))=x^{2}+2x+1\qquad f(g(x))=x^{2}+1")
        ),
    )

    # ======================================================================
    # 8. FACTORED  (4 true)  g=2(x-1)(x-4)
    # ======================================================================
    g8 = expand(2 * (x - 1) * (x - 4))
    assert g8 == expand(2 * x**2 - 10 * x + 8)
    assert axis_of(g8) == Rational(5, 2)
    assert vertex_of(g8)[1] == Rational(-9, 2)
    add(
        kind="factored",
        title="Factored parabola — Vieta reads",
        context=r"Let $g(x)=2(x-1)(x-4)$. Decide each claim without expanding first if you can",
        statements=[
            "The roots are $1$ and $4$.",
            rf"The axis is $x={F(Rational(5, 2))}$.",
            "Expanded, the middle coefficient equals $-10$.",
            "The constant term equals $8$.",
            rf"The vertex height equals $-4$.",
        ],
        key=[True, True, True, True, False],
        expls=[
            pack("A", True, [
                "A product $2(x-1)(x-4)$ vanishes precisely where a factor vanishes.",
                D(r"x-1=0\qquad x-4=0"),
                D(r"x=1,\; x=4"),
                close(True, "The roots are $1$ and $4$"),
            ]),
            pack("B", True, [
                "The axis bisects the two roots.",
                D(r"x=\frac{1+4}{2}=\frac{5}{2}"),
                close(True, "The axis is $x=\\frac{5}{2}$"),
            ]),
            pack("C", True, [
                "Expand the product, then distribute the leading $2$.",
                D(r"(x-1)(x-4)=x^{2}-5x+4"),
                D(r"2(x^{2}-5x+4)=2x^{2}-10x+8"),
                close(True, "The middle coefficient is $-10$"),
            ]),
            pack("D", True, [
                "The constant term is the value at the origin, or the last term after the expansion above.",
                D(r"g(0)=2(-1)(-4)=8"),
                close(True, "The constant term is $8$"),
            ]),
            pack("E", False, [
                "Evaluate the factored form on the axis.",
                D(r"g\left(\frac{5}{2}\right)=2\left(\frac{5}{2}-1\right)\left(\frac{5}{2}-4\right)"),
                D(r"2\cdot\frac{3}{2}\cdot\left(-\frac{3}{2}\right)=-\frac{9}{2}"),
                D(r"-\frac{9}{2}\neq -4"),
                close(False, "The vertex height is $-\\frac{9}{2}$, not $-4$"),
            ]),
        ],
        overview=D(r"g(x)=2x^{2}-10x+8") + "\n\nRoots $1$ and $4$; axis $x=\\frac{5}{2}$; vertex height $-\\frac{9}{2}$.",
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
        title="Figure for g, table for a line",
        context=(
            "The figure shows an unknown parabola $g$ (solid brown; no formula). "
            "Separately, the table lists an unknown line $\\ell$ at four inputs. "
            "Use the figure for claims about $g$ and the table for claims about $\\ell$"
        ),
        statements=[
            "The solid curve crosses the horizontal axis twice.",
            "The solid curve's turning point lies below the horizontal axis.",
            "The tabled rule has constant first difference $2$.",
            "The tabled rule is consistent with slope $2$.",
            "At $x=0$ the tabled height equals $1$.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "Count the brown meetings with the horizontal axis on the figure.",
                "Two crossings appear, symmetric about the origin.",
                D(r"g(x)=x^{2}-4=0\qquad x=\pm 2"),
                close(True, "Two axis crossings are visible"),
            ]),
            pack("B", True, [
                "The marked trough sits below the axis on the vertical scale.",
                D(r"g(0)=-4"),
                D(r"-4<0"),
                close(True, "The turning point lies below the horizontal axis"),
            ]),
            pack("C", True, [
                "Form neighbouring gaps of the $y$-row; the table does not print them.",
                D(r"3-1=2\qquad 5-3=2\qquad 7-5=2"),
                D(r"(2,2,2)"),
                close(True, "The constant gap is $2$"),
            ]),
            pack("D", True, [
                "For unit spacing, a constant first difference is exactly the slope of the line.",
                D(r"m=2"),
                D(r"2"),
                close(True, "The table is consistent with slope $2$"),
            ]),
            pack("E", True, [
                "Read the table entry under $x=0$.",
                D(r"\ell(0)=1"),
                D(r"1"),
                close(True, "The tabled height is $1$"),
            ]),
        ],
        overview=D(r"g(x)=x^{2}-4\qquad \ell(x)=2x+1")
        + "\n\nTrough $(0,-4)$; roots $\\pm 2$; the table is an arithmetic sequence of step $2$.",
        figure_uri=figure(
            g9, xmin=-4, xmax=4, ymin=-6, ymax=10,
            title="Solid brown = unknown parabola g (no formula printed)",
        ),
        table=md_table(xs9, ys9, r"\ell"),
    )

    # ======================================================================
    # 10. TEXT_DENSE  (1 true)  vertex (1,5), roots -1 and 3, f through (0,2) slope -1
    # ======================================================================
    k10 = Rational(-5, 4)
    g10 = expand(k10 * (x + 1) * (x - 3))
    f10 = expand(-x + 2)
    assert ev(g10, 1) == 5
    assert nmeet(f10, g10) == 2
    assert ev(f10, 1) == 1
    unscaled = expand(-(x + 1) * (x - 3))
    assert ev(unscaled, 1) == 4
    add(
        kind="text_dense",
        title="Dense clearance brief",
        context=(
            "A dock crane's clearance is modelled by a parabola $g$ that opens downwards, "
            "turns at $(1,5)$, and meets the deck $y=0$ at $x=-1$ and $x=3$. "
            "A linear sensor path $f$ passes through $(0,2)$ with slope $-1$"
        ),
        statements=[
            r"The rule for $g$ is $g(x)=-(x+1)(x-3)$.",
            r"The unscaled product $-(x+1)(x-3)$ already has vertex height $5$.",
            r"The sensor path is $f(x)=-x+3$.",
            "The sensor path and the clearance curve meet at exactly one real point.",
            "At $x=1$ the sensor lies below the clearance peak.",
        ],
        key=[False, False, False, False, True],
        expls=[
            pack("A", False, [
                "Opening downwards with those roots means $g(x)=k(x+1)(x-3)$ for some $k<0$. The unscaled choice $k=-1$ must still hit height $5$ at $x=1$.",
                D(r"-(1+1)(1-3)=-(2)(-2)=4"),
                D(r"4\neq 5"),
                close(False, "The unscaled factorisation misses the named vertex height"),
            ]),
            pack("B", False, [
                "The same evaluation as in A is the vertex height of the unscaled product.",
                D(r"-(x+1)(x-3)\big|_{x=1}=4"),
                D(r"4\neq 5"),
                close(False, "The unscaled vertex height is $4$, not $5$"),
            ]),
            pack("C", False, [
                "Slope $-1$ through $(0,2)$ is point-slope with intercept $2$.",
                D(r"f(x)=-x+2"),
                D(r"-x+2\neq -x+3"),
                close(False, "The intercept is $2$, not $3$"),
            ]),
            pack("D", False, [
                "Scale so that $g(1)=5$: $k(2)(-2)=5$ forces $k=-\\frac{5}{4}$. Then form $g-f$.",
                D(r"g(x)=-\frac{5}{4}(x+1)(x-3)=-\frac{5}{4}x^{2}+\frac{5}{2}x+\frac{15}{4}"),
                D(r"g(x)-f(x)=-\frac{5}{4}x^{2}+\frac{7}{2}x+\frac{7}{4}"),
                D(r"\Delta=\left(\frac{7}{2}\right)^{2}-4\left(-\frac{5}{4}\right)\left(\frac{7}{4}\right)=\frac{21}{1}>0"),
                close(False, "A positive discriminant gives two meetings, not one"),
            ]),
            pack("E", True, [
                "At the peak abscissa compare the sensor height with the named vertex height $5$.",
                D(r"f(1)=-1+2=1"),
                D(r"1<5"),
                close(True, "The sensor lies below the clearance peak"),
            ]),
        ],
        overview=(
            "Vertex $(1,5)$ with roots $-1$ and $3$ forces the stretch $-\\frac{5}{4}$.\n\n"
            + D(r"g(x)=-\frac{5}{4}(x+1)(x-3)\qquad f(x)=-x+2")
            + "\n\nThe difference has positive discriminant, so two meetings."
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
            "The solid curve has a lowest point (not a highest point).",
            "The solid curve crosses the horizontal axis twice.",
            "The dashed line lies entirely above the solid curve.",
            "The solid curve and the dashed line meet at exactly two points.",
            "The solid curve opens upwards.",
        ],
        key=[True, True, False, False, True],
        expls=[
            pack("A", True, [
                "Arms that rise on both sides of a marked trough mean the solid curve opens upwards, so the marked turn is a minimum.",
                "The figure shows exactly that trough between the two axis crossings.",
                D(r"a=1"),
                D(r"a>0"),
                close(True, "The turning point is a lowest point"),
            ]),
            pack("B", True, [
                "Count where brown meets the horizontal axis.",
                "Two distinct crossings are marked, both on the positive side of the origin.",
                D(r"(x-1)(x-3)=0\qquad x=1,\; x=3"),
                close(True, "Two crossings appear"),
            ]),
            pack("C", False, [
                "Outside the roots an upward-opening parabola climbs without bound, so it eventually rises above any fixed horizontal line.",
                "On the figure the arms already sit above the dashed line near the window edges.",
                D(r"g(0)=3>-1\qquad g(4)=3>-1"),
                close(False, "The dashed line is not entirely above the solid curve"),
            ]),
            pack("D", False, [
                "The dashed level cuts the trough at its lowest point and nowhere else: a tangency, not a pair of crossings.",
                D(r"g(x)+1=x^{2}-4x+4=(x-2)^{2}"),
                D(r"(x-2)^{2}=0\qquad x=2"),
                close(False, "There is exactly one shared point, not two"),
            ]),
            pack("E", True, [
                "A trough between rising arms is the signature of an upward-opening parabola.",
                "That is the shape of the solid curve on the figure.",
                D(r"a=1"),
                D(r"a>0"),
                close(True, "The solid curve opens upwards"),
            ]),
        ],
        overview=D(r"g(x)=x^{2}-4x+3\qquad y=-1")
        + "\n\nVertex $(2,-1)$; the level is tangent at the trough; roots $1$ and $3$.",
        figure_uri=figure(
            g11, f=f11, xmin=-1, xmax=5, ymin=-4, ymax=8,
            title="Solid brown = g; dashed green = horizontal line",
            flabel="level",
        ),
    )

    # ======================================================================
    # 12. TABLE  (4 true)  y=3x-1 on 0..4 → -1,2,5,8,11
    # ======================================================================
    xs12 = [0, 1, 2, 3, 4]
    ys12 = [3 * n - 1 for n in xs12]
    assert ys12 == [-1, 2, 5, 8, 11]
    assert first_diffs(ys12) == [3, 3, 3, 3]
    assert second_diffs(ys12) == [0, 0, 0]
    add(
        kind="table",
        title="Evenly spaced line samples",
        context=(
            "The table lists values of an unknown rule $y(x)$ at five equally spaced inputs. "
            "No formula is printed"
        ),
        statements=[
            "The first differences of the $y$-row are constant.",
            "The constant first difference equals $2$.",
            "The rule is consistent with a line of slope $3$.",
            r"Extending the pattern one step gives $y(5)=14$.",
            "The second differences of the $y$-row all vanish.",
        ],
        key=[True, False, True, True, True],
        expls=[
            pack("A", True, [
                "Form neighbouring gaps of the $y$-row.",
                D(r"2-(-1)=3\qquad 5-2=3\qquad 8-5=3\qquad 11-8=3"),
                D(r"(3,3,3,3)"),
                close(True, "Every gap equals $3$, so the first differences are constant"),
            ]),
            pack("B", False, [
                "The constant gap just computed is $3$, not $2$.",
                D(r"\Delta^{(1)}=3"),
                D(r"3\neq 2"),
                close(False, "The constant first difference is $3$"),
            ]),
            pack("C", True, [
                "For unit spacing, a constant first difference is exactly the slope of the line.",
                D(r"m=3"),
                D(r"3"),
                close(True, "Slope $3$ matches the claim"),
            ]),
            pack("D", True, [
                "One more step of size $3$ continues the arithmetic sequence.",
                D(r"y(5)=y(4)+3=11+3=14"),
                close(True, "The extrapolated value is $14$"),
            ]),
            pack("E", True, [
                "Second differences of a line with constant first differences are all zero.",
                D(r"3-3=0\qquad 3-3=0\qquad 3-3=0"),
                D(r"(0,0,0)"),
                close(True, "The second differences all vanish"),
            ]),
        ],
        overview=D(r"y=3x-1") + "\n\nConstant first difference $3$; the next term is $14$.",
        table=md_table(xs12, ys12, "y"),
    )

    # ======================================================================
    # 13. APPLIED  (1 true)  ball toss h=-t^2+6t  (figure)
    # ======================================================================
    h13 = expand(-x * (x - 6))
    assert vertex_of(h13) == (3, 9)
    assert ev(h13, 0) == 0 and ev(h13, 6) == 0
    assert ev(h13, 1) == ev(h13, 5) == 5
    add(
        kind="applied",
        title="Ball toss — height against time",
        context=(
            "A ball is tossed straight up. The figure shows height $h$ (metres) against time $t$ "
            "(seconds) as a **solid brown** curve; the horizontal axis is ground level. "
            "No formula is printed"
        ),
        statements=[
            "The ball is at ground level at exactly two times visible on the figure.",
            "The greatest height occurs at $t=2$.",
            "At $t=1$ the height is greater than at $t=5$.",
            "After the peak, height keeps rising.",
            "The greatest height on the figure is $8$ metres.",
        ],
        key=[True, False, False, False, False],
        expls=[
            pack("A", True, [
                "Ground meetings are brown crossings of the horizontal axis.",
                "Two crossings appear, near the origin and far to the right.",
                D(r"h(t)=-t^{2}+6t=t(6-t)=0"),
                D(r"t=0,\; t=6"),
                close(True, "Exactly two ground times are visible"),
            ]),
            pack("B", False, [
                "The peak is the marked turning point. Its abscissa on the time axis is $t=3$, midway between the two ground crossings.",
                D(r"t=-\frac{6}{2(-1)}=3"),
                D(r"3\neq 2"),
                close(False, "The greatest height occurs at $t=3$, not at $t=2$"),
            ]),
            pack("C", False, [
                "The curve is symmetric about $t=3$, so heights equally far from the peak agree.",
                D(r"h(1)=5\qquad h(5)=5"),
                close(False, "The heights are equal, not strictly greater"),
            ]),
            pack("D", False, [
                "Past the peak the solid curve slopes down toward the second ground crossing.",
                D(r"h(3)=9"),
                D(r"h(4)=8"),
                D(r"8<9"),
                close(False, "Height falls after the peak"),
            ]),
            pack("E", False, [
                "Read the peak height on the vertical scale.",
                D(r"h(3)=-9+18=9"),
                D(r"9\neq 8"),
                close(False, "The greatest height is $9$ metres, not $8$"),
            ]),
        ],
        overview=D(r"h(t)=-t^{2}+6t") + "\n\nPeak $(3,9)$; ground times $t=0$ and $t=6$.",
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
    g14 = expand(x**2 + 6 * x + 5)
    assert expand((x + 3)**2 - 4) == g14
    assert vertex_of(g14) == (-3, -4)
    assert disc_of(g14) == 16
    add(
        kind="symbolic",
        title="Completing the square with small coeffs",
        context=r"Let $g(x)=x^{2}+6x+5$. Decide each claim",
        statements=[
            r"In vertex form, $g(x)=(x+3)^{2}-4$.",
            r"The vertex is $(-3,-4)$.",
            "Both roots are positive.",
            "The discriminant equals $15$.",
            "Shifting the graph up by $5$ units produces a perfect square with a double root.",
        ],
        key=[True, True, False, False, False],
        expls=[
            pack("A", True, [
                "Complete the square by taking half the middle coefficient.",
                D(r"x^{2}+6x+5=(x^{2}+6x+9)-9+5"),
                D(r"(x+3)^{2}-4"),
                close(True, "The vertex form matches"),
            ]),
            pack("B", True, [
                "From the vertex form the turn is at $x=-3$ with height $-4$.",
                D(r"x=-3\qquad g(-3)=-4"),
                close(True, "The vertex is $(-3,-4)$"),
            ]),
            pack("C", False, [
                "Factor the completed square, or read the constant and middle coefficients via Vieta.",
                D(r"g(x)=(x+1)(x+5)"),
                D(r"x=-1,\; x=-5"),
                close(False, "Both roots are negative, not positive"),
            ]),
            pack("D", False, [
                "The discriminant is $b^{2}-4ac$.",
                D(r"\Delta=6^{2}-4\cdot 1\cdot 5=36-20=16"),
                D(r"16\neq 15"),
                close(False, "The discriminant is $16$, not $15$"),
            ]),
            pack("E", False, [
                "A vertical shift of $4$, not $5$, cancels the constant in vertex form.",
                D(r"g(x)+4=(x+3)^{2}"),
                D(r"g(x)+5=(x+3)^{2}+1"),
                close(False, "Shifting up by $5$ leaves a leftover $+1$, not a perfect square"),
            ]),
        ],
        overview=D(r"g(x)=(x+3)^{2}-4") + "\n\nRoots $-1$ and $-5$; $\\Delta=16$.",
    )

    # ======================================================================
    # 15. PARAMETRIC  (5 true)  g_s = x^2-4x+s
    # ======================================================================
    add(
        kind="parametric",
        title="Vertical shift of a parabola",
        context=(
            r"Let $g_s(x)=x^{2}-4x+s$ for a real shift $s$, and let $f(x)=0$ be the horizontal axis. "
            "Track how $s$ changes the meetings with the axis"
        ),
        statements=[
            r"For $s=3$ the graph of $g_s$ meets the axis twice.",
            r"For $s=4$ the graph of $g_s$ touches the axis exactly once.",
            r"For $s=5$ the graph of $g_s$ misses the axis.",
            r"The axis of symmetry of $g_s$ is $x=2$ for every $s$.",
            r"The vertex height of $g_s$ equals $s-4$.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "Meetings with the axis are the roots of $g_s$. Their count follows the discriminant.",
                D(r"\Delta=16-4s"),
                D(r"s=3\Rightarrow\Delta=4>0"),
                close(True, "A positive discriminant gives two real roots"),
            ]),
            pack("B", True, [
                "Tangency with the axis is the boundary $\\Delta=0$.",
                D(r"s=4\Rightarrow\Delta=0"),
                D(r"g_4(x)=(x-2)^{2}"),
                close(True, "A repeated root means a single touch"),
            ]),
            pack("C", True, [
                "A negative discriminant means no real root.",
                D(r"s=5\Rightarrow\Delta=-4<0"),
                close(True, "The graph misses the axis"),
            ]),
            pack("D", True, [
                "The axis $-b/(2a)$ uses only the $x^{2}$ and $x$ coefficients, which do not involve $s$.",
                D(r"x=-\frac{-4}{2\cdot 1}=2"),
                close(True, "The axis stays $x=2$ for every $s$"),
            ]),
            pack("E", True, [
                "Evaluate on that fixed axis.",
                D(r"g_s(2)=4-8+s=s-4"),
                close(True, "The vertex height is $s-4$"),
            ]),
        ],
        overview=D(r"g_s(x)=x^{2}-4x+s\qquad\Delta=16-4s")
        + "\n\nAxis $x=2$ for every $s$; vertex height $s-4$.",
    )
    assert axis_of(x**2 - 4 * x + 3) == 2
    assert disc_of(x**2 - 4 * x + 3) == 4
    assert disc_of(x**2 - 4 * x + 4) == 0
    assert disc_of(x**2 - 4 * x + 5) == -4
    assert simplify((x**2 - 4 * x + Symbol("s")).subs(x, 2) - (Symbol("s") - 4)) == 0

    # ======================================================================
    # 16. REBUILD  (4 true)  line through (0,4) and (2,0)
    # ======================================================================
    f16 = expand(-2 * x + 4)
    assert ev(f16, 0) == 4 and ev(f16, 2) == 0 and ev(f16, 1) == 2
    add(
        kind="rebuild",
        title="Rebuild a line from two points",
        context="A line passes through $(0,4)$ and $(2,0)$. Rebuild it and test the claims",
        statements=[
            "The slope equals $-2$.",
            r"The rule is $f(x)=-2x+4$.",
            "The line meets the horizontal axis at $x=2$.",
            r"At $x=1$ the height equals $1$.",
            "The line falls from left to right.",
        ],
        key=[True, True, True, False, True],
        expls=[
            pack("A", True, [
                "Slope is rise over run between the two given points.",
                D(r"m=\frac{0-4}{2-0}=\frac{-4}{2}=-2"),
                close(True, "The slope is $-2$"),
            ]),
            pack("B", True, [
                "Point-slope with intercept $4$ and slope $-2$ is already slope-intercept form.",
                D(r"f(x)=-2x+4"),
                D(r"f(0)=4"),
                close(True, "The rebuilt rule matches"),
            ]),
            pack("C", True, [
                "The given point $(2,0)$ is exactly a meeting with the horizontal axis.",
                D(r"f(2)=-4+4"),
                D(r"f(2)=0"),
                close(True, "The horizontal-axis meeting is at $x=2$"),
            ]),
            pack("D", False, [
                "Evaluate the rebuilt rule at the midpoint of the two given abscissas.",
                D(r"f(1)=-2+4=2"),
                D(r"2\neq 1"),
                close(False, "The height is $2$, not $1$"),
            ]),
            pack("E", True, [
                "A negative slope means the line falls from left to right.",
                D(r"m=-2"),
                D(r"m<0"),
                close(True, "The line falls from left to right"),
            ]),
        ],
        overview=D(r"f(x)=-2x+4") + "\n\nSlope $-2$; intercepts $(0,4)$ and $(2,0)$.",
    )

    # ======================================================================
    # 17. NESTED  (3 true)  f=2x-1, g=x^2-4
    # ======================================================================
    f17 = 2 * x - 1
    g17 = x**2 - 4
    fg17 = expand(f17.subs(x, g17))
    gf17 = expand(g17.subs(x, f17))
    assert fg17 == expand(2 * x**2 - 9)
    assert gf17 == expand(4 * x**2 - 4 * x - 3)
    assert ev(fg17, 0) == -9 and ev(gf17, 0) == -3
    add(
        kind="nested",
        title="Line outside a shifted parabola",
        context=r"Let $f(x)=2x-1$ and $g(x)=x^{2}-4$. Compare $f(g(x))$ with $g(f(x))$",
        statements=[
            r"The nested rule $f(g(x))$ equals $2x^{2}-9$.",
            r"The nested rule $g(f(x))$ equals $4x^{2}-4x-3$.",
            r"Both nested rules have the same highest power of $x$.",
            r"The nested rule $f(g(x))$ has a linear term in $x$.",
            r"At $x=0$ one has $f(g(0))=g(f(0))$.",
        ],
        key=[True, True, True, False, False],
        expls=[
            pack("A", True, [
                "Feed the parabola into the line.",
                D(r"f(g(x))=2(x^{2}-4)-1"),
                D(r"2x^{2}-8-1=2x^{2}-9"),
                close(True, "The expansion matches"),
            ]),
            pack("B", True, [
                "The other order squares the line first.",
                D(r"g(f(x))=(2x-1)^{2}-4"),
                D(r"4x^{2}-4x+1-4=4x^{2}-4x-3"),
                close(True, "The expansion matches"),
            ]),
            pack("C", True, [
                "Both expansions are quadratic: the highest power in each is $x^{2}$.",
                D(r"2x^{2}-9\qquad 4x^{2}-4x-3"),
                close(True, "The highest powers agree"),
            ]),
            pack("D", False, [
                "A linear term would be a multiple of $x^{1}$.",
                D(r"f(g(x))=2x^{2}-9"),
                D(r"2x^{2}-9"),
                close(False, "The rule $2x^{2}-9$ has no $x$ term"),
            ]),
            pack("E", False, [
                "Evaluate each nested rule at the origin.",
                D(r"f(g(0))=f(-4)=-9"),
                D(r"g(f(0))=g(-1)=-3"),
                D(r"-9\neq -3"),
                close(False, "The two values differ"),
            ]),
        ],
        overview="Order of nesting changes coefficients even when the highest power matches.\n\n"
        + D(r"f(g(x))=2x^{2}-9\qquad g(f(x))=4x^{2}-4x-3"),
    )

    # ======================================================================
    # 18. FACTORED  (1 true)  g=(x+3)(x-3)=x^2-9
    # ======================================================================
    g18 = expand((x + 3) * (x - 3))
    assert g18 == expand(x**2 - 9)
    assert vertex_of(g18) == (0, -9)
    add(
        kind="factored",
        title="Opposite roots",
        context=r"Let $g(x)=(x+3)(x-3)$. Decide each claim",
        statements=[
            "The axis of symmetry is the vertical coordinate axis.",
            r"The function $g$ is odd: $g(-x)=-g(x)$ for every $x$.",
            "Both roots are positive.",
            r"The vertex is $(0,9)$.",
            r"For every $x$ one has $g(x)\ge 0$.",
        ],
        key=[True, False, False, False, False],
        expls=[
            pack("A", True, [
                "Roots $\\pm 3$ are symmetric about the origin, so the axis is the vertical coordinate axis.",
                D(r"x=\frac{-3+3}{2}=0"),
                close(True, "The axis is $x=0$"),
            ]),
            pack("B", False, [
                "Oddness requires $g(-x)=-g(x)$. Expand first.",
                D(r"g(x)=x^{2}-9"),
                D(r"g(-x)=x^{2}-9=g(x)"),
                D(r"g(x)\neq -g(x)"),
                close(False, "$g$ is even, not odd"),
            ]),
            pack("C", False, [
                "Read the roots from the factors.",
                D(r"x=-3,\; x=3"),
                close(False, "One root is negative, so not both are positive"),
            ]),
            pack("D", False, [
                "The turn on the axis $x=0$ has height $g(0)$.",
                D(r"g(0)=-9"),
                D(r"(0,-9)\neq(0,9)"),
                close(False, "The vertex is $(0,-9)$, not $(0,9)$"),
            ]),
            pack("E", False, [
                "An upward-opening parabola is bounded below by its vertex height, which here is negative.",
                D(r"g(0)=-9"),
                D(r"-9<0"),
                close(False, "$g$ takes negative values, so it is not always at least $0$"),
            ]),
        ],
        overview=D(r"g(x)=x^{2}-9") + "\n\nEven; vertex $(0,-9)$; roots $\\pm 3$.",
    )

    # ======================================================================
    # 19. HYBRID  (2 true)  figure peak parabola + table of a line
    # ======================================================================
    g19 = expand(-(x - 1) * (x - 5))
    f19 = 1 + 0 * x
    assert vertex_of(g19) == (3, 4)
    assert nmeet(f19, g19) == 2
    assert lead(g19) < 0
    xs19 = [0, 1, 2, 3]
    ys19 = [4, 1, -2, -5]  # -3x+4
    assert first_diffs(ys19) == [-3, -3, -3]
    add(
        kind="hybrid",
        title="Peak over a level, plus a line table",
        context=(
            "The figure shows a solid brown parabola and a dashed green horizontal line; "
            "no formulas are printed on the sketch. Separately, the table lists an unknown "
            "line at four inputs. Use the figure for the curve claims and the table for the line claims"
        ),
        statements=[
            "The solid curve has a highest point (not a trough).",
            "The solid curve crosses the horizontal axis twice.",
            "The dashed line lies above the peak of the solid curve.",
            "The tabled rule has constant first difference $3$.",
            "The tabled rule is consistent with slope $3$.",
        ],
        key=[True, True, False, False, False],
        expls=[
            pack("A", True, [
                "A marked peak with arms falling on both sides means a maximum.",
                D(r"a=-1"),
                D(r"a<0"),
                close(True, "The solid curve has a highest point"),
            ]),
            pack("B", True, [
                "Two axis crossings of brown are visible, both on the positive side of the origin.",
                D(r"(x-1)(x-5)=0"),
                D(r"x=1"),
                D(r"x=5"),
                close(True, "Two crossings appear"),
            ]),
            pack("C", False, [
                "The peak sits above the dashed level on the figure. Read both heights at the trough's abscissa.",
                D(r"g(3)=4"),
                D(r"4>1"),
                close(False, "The dashed line is not above the peak"),
            ]),
            pack("D", False, [
                "Form neighbouring gaps of the tabled row; the table does not print them.",
                D(r"1-4=-3"),
                D(r"-2-1=-3"),
                D(r"-5-(-2)=-3"),
                D(r"(-3,-3,-3)"),
                D(r"-3\neq 3"),
                close(False, "The constant first difference is $-3$, not $3$"),
            ]),
            pack("E", False, [
                "For unit spacing the slope equals that constant first difference.",
                D(r"m=-3"),
                D(r"-3\neq 3"),
                close(False, "The table is consistent with slope $-3$, not $3$"),
            ]),
        ],
        overview=D(r"g(x)=-(x-1)(x-5)\qquad y=1\qquad \ell(x)=-3x+4")
        + "\n\nPeak $(3,4)$; the level cuts the hill twice; the table has step $-3$.",
        figure_uri=figure(
            g19, f=f19, xmin=0, xmax=6, ymin=-6, ymax=6,
            title="Solid brown = g; dashed green = level line",
            flabel="level",
        ),
        table=md_table(xs19, ys19, r"\ell"),
    )

    # ======================================================================
    # 20. TEXT_DENSE  (5 true)  R=p(16-p), C=2p+20
    # ======================================================================
    p = x
    R20 = expand(p * (16 - p))
    C20 = expand(2 * p + 20)
    Pi20 = expand(R20 - C20)
    assert axis_of(R20) == 8
    assert axis_of(Pi20) == 7
    assert ev(R20, 0) == 0 and ev(C20, 0) == 20
    assert ev(R20, 10) == 60 and ev(C20, 10) == 40
    add(
        kind="text_dense",
        title="Market brief in prose",
        context=(
            r"Weekend ticket price $p$ euros yields revenue $R(p)=p(16-p)$. "
            r"Staff cost for the same price experiment is logged as the line $C(p)=2p+20$"
        ),
        statements=[
            "Revenue is a downward-opening parabola in $p$.",
            r"Revenue is largest at $p=8$.",
            r"Profit $R-C$ is largest at $p=7$.",
            r"At $p=0$ revenue is less than cost.",
            r"At $p=10$ revenue exceeds cost.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "Expand the revenue rule and read the leading coefficient.",
                D(r"R(p)=16p-p^{2}"),
                D(r"a=-1"),
                D(r"a<0"),
                close(True, "Revenue opens downwards"),
            ]),
            pack("B", True, [
                "The axis of a downward-opening parabola is the unique maximiser.",
                D(r"p=-\frac{16}{2(-1)}=8"),
                close(True, "Revenue is largest at $p=8$"),
            ]),
            pack("C", True, [
                "Profit is a different parabola; its own axis is the profit maximiser.",
                D(r"\Pi(p)=R(p)-C(p)=-p^{2}+14p-20"),
                D(r"p=-\frac{14}{2(-1)}=7"),
                close(True, "Profit is largest at $p=7$"),
            ]),
            pack("D", True, [
                "Evaluate both rules at the origin.",
                D(r"R(0)=0\qquad C(0)=20"),
                D(r"0<20"),
                close(True, "Revenue is less than cost at $p=0$"),
            ]),
            pack("E", True, [
                "Evaluate both rules at the named price.",
                D(r"R(10)=10\cdot 6=60"),
                D(r"C(10)=20+20=40"),
                D(r"60>40"),
                close(True, "Revenue exceeds cost at $p=10$"),
            ]),
        ],
        overview=D(r"R(p)=p(16-p)\qquad C(p)=2p+20\qquad\Pi(p)=-p^{2}+14p-20")
        + "\n\nRevenue peaks at $p=8$; profit peaks at $p=7$.",
    )

    # ======================================================================
    # 21. GRAPH  (4 true)  g=x^2-4, dashed y=-2
    # ======================================================================
    g21 = expand(x**2 - 4)
    f21 = -2 + 0 * x
    assert vertex_of(g21) == (0, -4)
    assert nmeet(f21, g21) == 2
    assert ev(g21, -2) == 0 and ev(g21, 2) == 0
    assert ev(g21, 0) < ev(f21, 0)
    add(
        kind="graph",
        title="Parabola against a submerged level",
        context=(
            "The figure shows a **solid brown parabola** and a **dashed green horizontal line**. "
            "No closed forms are printed. Work from ticks and marked turns only"
        ),
        statements=[
            "The solid curve crosses the horizontal axis once on each side of the origin.",
            "The dashed line sits at height $0$.",
            "The solid curve and the dashed line share exactly two points.",
            "The turning point of the solid curve lies below the dashed line.",
            "The solid curve opens upwards.",
        ],
        key=[True, False, True, True, True],
        expls=[
            pack("A", True, [
                "Brown meets the horizontal axis once left of zero and once right of zero.",
                D(r"x^{2}-4=0\qquad x=\pm 2"),
                close(True, "One crossing on each side of the origin is visible"),
            ]),
            pack("B", False, [
                "The dashed line is the green horizontal trace. Reading its height on the vertical scale places it at $-2$, not at $0$.",
                "Height $0$ would be the axis itself; the dashed line is strictly below it.",
                D(r"y=-2"),
                D(r"-2\neq 0"),
                close(False, "The dashed line is not at height $0$"),
            ]),
            pack("C", True, [
                "Brown dips to its trough and climbs again; the dashed level cuts both sides of the trough.",
                D(r"x^{2}-4=-2\qquad x^{2}=2"),
                D(r"x=\pm\sqrt{2}"),
                close(True, "Exactly two shared points are visible"),
            ]),
            pack("D", True, [
                "The trough of the solid curve sits below the dashed line: the lowest brown mark is lower than the green level.",
                D(r"g(0)=-4"),
                D(r"-4<-2"),
                close(True, "The turning point lies below the dashed line"),
            ]),
            pack("E", True, [
                "A trough between rising arms is the signature of an upward-opening parabola.",
                D(r"a=1"),
                D(r"a>0"),
                close(True, "The solid curve opens upwards"),
            ]),
        ],
        overview=D(r"g(x)=x^{2}-4\qquad y=-2")
        + "\n\nVertex $(0,-4)$; roots $\\pm 2$; the level $y=-2$ cuts the trough twice.",
        figure_uri=figure(
            g21, f=f21, xmin=-4, xmax=4, ymin=-6, ymax=12,
            title="Solid brown = g; dashed green = horizontal line",
            flabel="level",
        ),
    )

    # ======================================================================
    # 22. TABLE  (1 true)  h=x^2-2x on 0..5 → 0,-1,0,3,8,15
    # ======================================================================
    xs22 = [0, 1, 2, 3, 4, 5]
    ys22 = [n * n - 2 * n for n in xs22]
    assert ys22 == [0, -1, 0, 3, 8, 15]
    assert second_diffs(ys22) == [2, 2, 2, 2]
    h6 = 6 * 6 - 2 * 6
    assert h6 == 24
    add(
        kind="table",
        title="Quadratic growth in a table",
        context=(
            r"An unknown function $h$ is sampled at $x=0,1,2,3,4,5$ in the table. "
            "No algebraic expression is given"
        ),
        statements=[
            "The first differences are constant.",
            "The second differences are constant and equal to $4$.",
            "A linear model can fit every listed point.",
            r"Extending the second-difference pattern gives $h(6)=20$.",
            "The second differences of the listed heights are constant.",
        ],
        key=[False, False, False, False, True],
        expls=[
            pack("A", False, [
                "Form neighbouring gaps of the $h$-row.",
                D(r"(-1)-0=-1\qquad 0-(-1)=1\qquad 3-0=3"),
                D(r"(-1,1,3,5,7)"),
                close(False, "These gaps increase, so they are not constant"),
            ]),
            pack("B", False, [
                "Second differences are the gaps of that first-difference row.",
                D(r"1-(-1)=2\qquad 3-1=2\qquad 5-3=2\qquad 7-5=2"),
                D(r"(2,2,2,2)"),
                D(r"2\neq 4"),
                close(False, "The constant second difference is $2$, not $4$"),
            ]),
            pack("C", False, [
                "A line would need constant first differences. Here the first differences move, so no single line fits all six points.",
                D(r"2a=2\Rightarrow a=1\neq 0"),
                close(False, "A linear model fails"),
            ]),
            pack("D", False, [
                "One more constant second difference $2$ lifts the last first difference from $7$ to $9$.",
                D(r"h(6)=h(5)+9=15+9=24"),
                D(r"24\neq 20"),
                close(False, "The extrapolated value is $24$, not $20$"),
            ]),
            pack("E", True, [
                "The second-difference row computed above is $(2,2,2,2)$.",
                D(r"(2,2,2,2)"),
                D(r"2a=2"),
                close(True, "The second differences are constant"),
            ]),
        ],
        overview=D(r"h(x)=x^{2}-2x") + "\n\nSecond differences constantly $2$; $h(6)=24$.",
        table=md_table(xs22, ys22, "h"),
    )

    # ======================================================================
    # 23. APPLIED  (5 true)  C=q^2-4q+9 on 0..5 → 9,6,5,6,9,14
    # ======================================================================
    xs23 = [0, 1, 2, 3, 4, 5]
    ys23 = [q * q - 4 * q + 9 for q in xs23]
    assert ys23 == [9, 6, 5, 6, 9, 14]
    assert second_diffs(ys23) == [2, 2, 2, 2]
    assert ys23[5] - ys23[4] == 5
    add(
        kind="applied",
        title="Workshop cost log",
        context=(
            "A workshop logs total cost $C$ (euros) against daily batch size $q$ in the table. "
            "No cost formula is written in the logbook"
        ),
        statements=[
            "Among the listed batches, cost is smallest at $q=2$.",
            r"Cost at $q=0$ equals cost at $q=4$.",
            r"Cost rises from $q=2$ to $q=3$.",
            "The second differences of the cost row are constant.",
            "Raising the batch from $4$ to $5$ increases cost by $5$ euros.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "Compare the six cost entries.",
                D(r"(9,6,5,6,9,14)"),
                D(r"\min=5"),
                close(True, "The unique listed minimum sits at $q=2$"),
            ]),
            pack("B", True, [
                "Read the two columns $q=0$ and $q=4$.",
                D(r"C(0)=9\qquad C(4)=9"),
                close(True, "The two costs match"),
            ]),
            pack("C", True, [
                "Compare the neighbouring entries at $q=2$ and $q=3$.",
                D(r"C(2)=5"),
                D(r"C(3)=6"),
                D(r"6-5=1"),
                close(True, "Cost rises from $q=2$ to $q=3$"),
            ]),
            pack("D", True, [
                "Form first differences, then their gaps. The table does not print either row.",
                D(r"(-3,-1,1,3,5)"),
                D(r"(2,2,2,2)"),
                close(True, "Second differences are constant"),
            ]),
            pack("E", True, [
                "Subtract the neighbouring listed costs.",
                D(r"C(5)-C(4)=14-9=5"),
                close(True, "The increase is $5$ euros"),
            ]),
        ],
        overview=D(r"C(q)=q^{2}-4q+9")
        + "\n\nListed minimum $5$ at $q=2$; second differences constantly $2$.",
        table=md_table(xs23, ys23, "C", xname="q"),
    )

    # ======================================================================
    # 24. SYMBOLIC  (3 true)  f=4x-1, g=x^2+x-1
    # ======================================================================
    f24 = expand(4 * x - 1)
    g24 = expand(x**2 + x - 1)
    assert disc_of(g24 - f24) == 9
    assert nmeet(f24, g24) == 2
    assert axis_of(g24) == Rational(-1, 2)
    assert ev(g24, 0) == ev(f24, 0) == -1
    assert lead(g24 - f24) == 1
    add(
        kind="symbolic",
        title="Signed gap and tangency test",
        context=r"Let $f(x)=4x-1$ and $g(x)=x^{2}+x-1$. Decide each claim",
        statements=[
            r"The discriminant of $g-f$ is positive.",
            "The graphs are tangent for this pair.",
            rf"The axis of $g$ is $x={F(Rational(-1, 2))}$.",
            r"At $x=0$ one has $g(0)=f(0)$.",
            r"The leading coefficient of $g-f$ equals $2$.",
        ],
        key=[True, False, True, True, False],
        expls=[
            pack("A", True, [
                "Form the difference and compute $b^{2}-4ac$.",
                D(r"g-f=x^{2}+x-1-(4x-1)=x^{2}-3x"),
                D(r"\Delta=(-3)^{2}-4\cdot 1\cdot 0=9>0"),
                close(True, "The discriminant is positive"),
            ]),
            pack("B", False, [
                "Tangency needs a repeated root, hence $\\Delta=0$.",
                D(r"\Delta=9>0"),
                D(r"x(x-3)=0\qquad x=0,\; x=3"),
                close(False, "The graphs cross twice rather than touch"),
            ]),
            pack("C", True, [
                "The axis uses only the coefficients of $g$.",
                D(r"x=-\frac{1}{2\cdot 1}=-\frac{1}{2}"),
                close(True, "The axis is $x=-\\frac{1}{2}$"),
            ]),
            pack("D", True, [
                "Evaluate both rules at the origin.",
                D(r"g(0)=-1\qquad f(0)=-1"),
                close(True, "The values agree at the origin"),
            ]),
            pack("E", False, [
                "The leading coefficient of $g-f=x^{2}-3x$ is the factor in front of $x^{2}$.",
                D(r"a=1"),
                D(r"1\neq 2"),
                close(False, "The leading coefficient is $1$, not $2$"),
            ]),
        ],
        overview=D(r"g(x)-f(x)=x^{2}-3x\qquad\Delta=9")
        + "\n\nTwo meetings, at $x=0$ and $x=3$; axis of $g$ is $x=-\\frac{1}{2}$.",
    )

    # ======================================================================
    # 25. PARAMETRIC  (2 true)  g_a = a x^2-4x+3, f=3
    # ======================================================================
    add(
        kind="parametric",
        title="Leading coefficient family",
        context=(
            r"Let $g_a(x)=a x^{2}-4x+3$ with $a\neq 0$, and let $f(x)=3$. "
            "Watch how the leading coefficient changes meetings with the level $y=3$"
        ),
        statements=[
            r"For every $a\neq 0$ the graphs meet at $x=0$.",
            r"When $a=1$ there is a second meeting at $x=4$.",
            r"When $a=2$ the second meeting is at $x=3$.",
            r"The axis of $g_a$ is independent of $a$.",
            r"If $a=-1$, then $g_a$ opens upwards.",
        ],
        key=[True, True, False, False, False],
        expls=[
            pack("A", True, [
                "The shared intercept is always a meeting, because the constant term of $g_a$ equals the level.",
                D(r"g_a(0)=3=f(0)"),
                close(True, "The graphs meet at $x=0$ for every $a\\neq 0$"),
            ]),
            pack("B", True, [
                "The remaining meetings solve $g_a(x)=3$.",
                D(r"a=1:\quad x^{2}-4x=0"),
                D(r"x(x-4)=0"),
                close(True, "The second root is $x=4$"),
            ]),
            pack("C", False, [
                "Repeat the same difference with $a=2$.",
                D(r"2x^{2}-4x=0"),
                D(r"2x(x-2)=0"),
                D(r"x=2\neq 3"),
                close(False, "The second meeting is at $x=2$, not $x=3$"),
            ]),
            pack("D", False, [
                "The axis $-b/(2a)$ still involves the leading coefficient.",
                D(r"x=\frac{4}{2a}=\frac{2}{a}"),
                close(False, "The axis slides with $a$"),
            ]),
            pack("E", False, [
                "The opening is the sign of the leading coefficient.",
                D(r"a=-1"),
                D(r"a<0"),
                close(False, "The parabola opens downwards, not upwards"),
            ]),
        ],
        overview=D(r"g_a(x)-3=ax^{2}-4x")
        + "\n\nAlways a meeting at $x=0$; the other meeting is at $x=4/a$; axis $x=2/a$.",
    )
    assert expand((x**2 - 4 * x + 3) - 3) == expand(x * (x - 4))
    assert expand((2 * x**2 - 4 * x + 3) - 3) == expand(2 * x * (x - 2))

    # ======================================================================
    # 26. REBUILD  (1 true)  monic roots -1 and 3
    # ======================================================================
    g26 = expand((x + 1) * (x - 3))
    assert g26 == expand(x**2 - 2 * x - 3)
    assert axis_of(g26) == 1
    assert vertex_of(g26)[1] == -4
    add(
        kind="rebuild",
        title="Rebuild from roots and leading coefficient",
        context="A monic parabola has roots $x=-1$ and $x=3$. Rebuild $g$ and test the claims",
        statements=[
            r"The rule is $g(x)=(x+1)(x-3)$.",
            r"Expanded, $g(x)=x^{2}-2x+3$.",
            r"The axis is $x=0$.",
            r"The vertex height equals $-3$.",
            r"The constant term equals $3$.",
        ],
        key=[True, False, False, False, False],
        expls=[
            pack("A", True, [
                "Monic with those roots means the product of the two linear factors, with leading coefficient $1$.",
                D(r"g(x)=(x+1)(x-3)"),
                D(r"g(x)=x^{2}-2x-3"),
                close(True, "The rebuilt rule matches"),
            ]),
            pack("B", False, [
                "Expand the product from A.",
                D(r"(x+1)(x-3)=x^{2}-2x-3"),
                D(r"x^{2}-2x-3\neq x^{2}-2x+3"),
                close(False, "The constant term is $-3$, not $+3$"),
            ]),
            pack("C", False, [
                "The axis is the midpoint of the roots.",
                D(r"x=\frac{-1+3}{2}=1"),
                D(r"1\neq 0"),
                close(False, "The axis is $x=1$, not $x=0$"),
            ]),
            pack("D", False, [
                "Evaluate on the true axis $x=1$.",
                D(r"g(1)=1-2-3=-4"),
                D(r"-4\neq -3"),
                close(False, "The vertex height is $-4$, not $-3$"),
            ]),
            pack("E", False, [
                "The constant term is $g(0)$.",
                D(r"g(0)=(1)(-3)=-3"),
                D(r"-3\neq 3"),
                close(False, "The constant term is $-3$, not $3$"),
            ]),
        ],
        overview=D(r"g(x)=x^{2}-2x-3") + "\n\nAxis $x=1$; vertex height $-4$.",
    )

    # ======================================================================
    # 27. NESTED  (5 true)  f=x-2, g=x^2-1,  g(f^{-1})
    # ======================================================================
    nested27 = expand((x + 2)**2 - 1)
    assert nested27 == expand(x**2 + 4 * x + 3)
    assert ev(nested27, -1) == 0 and ev(nested27, -3) == 0
    assert lead(nested27) > 0
    add(
        kind="nested",
        title="Inverse line nested in a parabola",
        context=(
            r"Let $f(x)=x-2$ (so $f^{-1}(x)=x+2$) and $g(x)=x^{2}-1$. "
            r"Study $g(f^{-1}(x))$"
        ),
        statements=[
            r"The nested rule $g(f^{-1}(x))$ equals $(x+2)^{2}-1$.",
            r"Expanded, that nested rule is $x^{2}+4x+3$.",
            r"The nested rule vanishes at $x=-1$.",
            r"The nested rule vanishes at $x=-3$.",
            "The nested rule is a parabola that opens upwards.",
        ],
        key=[True, True, True, True, True],
        expls=[
            pack("A", True, [
                "Substitute the inverse line into $g$.",
                D(r"f^{-1}(x)=x+2"),
                D(r"g(f^{-1}(x))=(x+2)^{2}-1"),
                close(True, "The nested rule matches"),
            ]),
            pack("B", True, [
                "Expand the square and combine constants.",
                D(r"(x+2)^{2}-1=x^{2}+4x+4-1"),
                D(r"x^{2}+4x+3"),
                close(True, "The expansion matches"),
            ]),
            pack("C", True, [
                "Substitute the named root candidate into the expansion.",
                D(r"(-1)^{2}+4(-1)+3=1-4+3=0"),
                close(True, "The nested rule vanishes at $x=-1$"),
            ]),
            pack("D", True, [
                "The other factor of $x^{2}+4x+3=(x+1)(x+3)$ vanishes at $x=-3$.",
                D(r"(-3)^{2}+4(-3)+3=9-12+3=0"),
                close(True, "The nested rule vanishes at $x=-3$"),
            ]),
            pack("E", True, [
                "After expansion the leading coefficient is $1$.",
                D(r"a=1"),
                D(r"a>0"),
                close(True, "The nested parabola opens upwards"),
            ]),
        ],
        overview="Substituting an inverse line shifts the roots of the parabola.\n\n"
        + D(r"g(f^{-1}(x))=x^{2}+4x+3=(x+1)(x+3)"),
    )

    # ======================================================================
    # 28. FACTORED  (2 true)  g=(x-2)^2
    # ======================================================================
    g28 = expand((x - 2)**2)
    assert g28 == expand(x**2 - 4 * x + 4)
    assert disc_of(g28) == 0
    assert vertex_of(g28) == (2, 0)
    add(
        kind="factored",
        title="Repeated root",
        context=r"Let $g(x)=(x-2)^{2}$. Decide each claim",
        statements=[
            "The graph meets the horizontal axis at exactly one point.",
            "The vertex lies on the horizontal axis.",
            r"The axis of symmetry is $x=3$.",
            r"Expanding gives $g(x)=x^{2}-4x+5$.",
            r"The discriminant of $g$ equals $1$.",
        ],
        key=[True, True, False, False, False],
        expls=[
            pack("A", True, [
                "A square $(x-2)^{2}$ has a double root at $x=2$, hence a single meeting with the axis.",
                D(r"(x-2)^{2}=0\qquad x=2"),
                close(True, "There is exactly one axis meeting"),
            ]),
            pack("B", True, [
                "At the double root the height is $0$, so the vertex sits on the axis.",
                D(r"g(2)=(2-2)^{2}"),
                D(r"g(2)=0"),
                close(True, "The vertex lies on the horizontal axis"),
            ]),
            pack("C", False, [
                "The axis is the vertical line through the repeated root.",
                D(r"x=2"),
                D(r"2\neq 3"),
                close(False, "The axis is $x=2$, not $x=3$"),
            ]),
            pack("D", False, [
                "Expand the square.",
                D(r"(x-2)^{2}=x^{2}-4x+4"),
                D(r"4\neq 5"),
                close(False, "The constant term is $4$, not $5$"),
            ]),
            pack("E", False, [
                "The discriminant of a repeated-root quadratic is zero.",
                D(r"\Delta=(-4)^{2}-4\cdot 1\cdot 4=16-16=0"),
                D(r"0\neq 1"),
                close(False, "The discriminant is $0$, not $1$"),
            ]),
        ],
        overview="A double root is tangency with the axis.\n\n" + D(r"g(x)=x^{2}-4x+4\qquad\Delta=0"),
    )

    # ======================================================================
    # 29. HYBRID  (3 true)  table q=(x-2)^2+1  (symmetric)
    # ======================================================================
    xs29 = [0, 1, 2, 3, 4]
    ys29 = [(n - 2) ** 2 + 1 for n in xs29]
    assert ys29 == [5, 2, 1, 2, 5]
    assert second_diffs(ys29) == [2, 2, 2]
    q5 = (5 - 2) ** 2 + 1
    assert q5 == 10
    add(
        kind="hybrid",
        title="Symmetric table plus a fit test",
        context=(
            "The table samples an unknown rule $q$. No formula is printed. "
            "Two claims also offer candidate formulas to test against the table"
        ),
        statements=[
            r"The table is symmetric about $x=2$.",
            "The second differences are constant.",
            r"The candidate $q(x)=(x-2)^{2}+1$ matches every listed point.",
            r"The candidate $q(x)=|x-2|+1$ matches every listed point.",
            r"Extending the second-difference pattern gives $q(5)=8$.",
        ],
        key=[True, True, True, False, False],
        expls=[
            pack("A", True, [
                "Read pairs equally far from $x=2$.",
                D(r"q(0)=q(4)=5\qquad q(1)=q(3)=2\qquad q(2)=1"),
                close(True, "The table is symmetric about $x=2$"),
            ]),
            pack("B", True, [
                "Form first differences, then their gaps.",
                D(r"(-3,-1,1,3)"),
                D(r"(2,2,2)"),
                close(True, "Second differences are constant"),
            ]),
            pack("C", True, [
                "Check each listed $x$ against the candidate.",
                D(r"(0-2)^{2}+1=5\qquad (1-2)^{2}+1=2"),
                D(r"(2-2)^{2}+1=1\qquad (3-2)^{2}+1=2\qquad (4-2)^{2}+1=5"),
                close(True, "Every listed point matches"),
            ]),
            pack("D", False, [
                "The absolute-value candidate already fails at the left endpoint.",
                D(r"|0-2|+1=3"),
                D(r"3\neq 5"),
                close(False, "The candidate fails at $x=0$"),
            ]),
            pack("E", False, [
                "One more constant second difference $2$ lifts the last first difference from $3$ to $5$.",
                D(r"q(5)=q(4)+5=5+5=10"),
                D(r"10\neq 8"),
                close(False, "The extrapolated value is $10$, not $8$"),
            ]),
        ],
        overview=D(r"q(x)=(x-2)^{2}+1")
        + "\n\nSymmetric about $x=2$; second differences constantly $2$; $q(5)=10$.",
        table=md_table(xs29, ys29, "q"),
    )

    # ======================================================================
    # 30. TEXT_DENSE  (4 true)  arch g=4-(x-2)^2, trolley f=2-x/2
    # ======================================================================
    g30 = expand(4 - (x - 2)**2)
    f30 = expand(2 - x / 2)
    assert ev(g30, 0) == 0 and ev(g30, 4) == 0
    assert ev(g30, 2) == 4 and ev(f30, 2) == 1
    add(
        kind="text_dense",
        title="Bridge arch described in words",
        context=(
            r"A bridge arch is the part of $g(x)=4-(x-2)^{2}$ above the road $y=0$. "
            r"A maintenance trolley follows the chord $f(x)=2-\frac12 x$ on the same interval"
        ),
        statements=[
            r"The arch meets the road at $x=0$ and $x=4$.",
            "The crown of the arch is at height $4$.",
            rf"The trolley path has slope $-\dfrac{{1}}{{2}}$.",
            r"At the crown abscissa the trolley is at height $1$.",
            r"The trolley path lies above the arch at $x=2$.",
        ],
        key=[True, True, True, True, False],
        expls=[
            pack("A", True, [
                "The arch meets the road where $g$ vanishes.",
                D(r"4-(x-2)^{2}=0"),
                D(r"(x-2)^{2}=4\qquad x=0,\; x=4"),
                close(True, "The arch meets the road at $x=0$ and $x=4$"),
            ]),
            pack("B", True, [
                "The crown is the vertex, at $x=2$.",
                D(r"g(2)=4-(0)^{2}=4"),
                close(True, "The crown height is $4$"),
            ]),
            pack("C", True, [
                "The slope of a line is the coefficient of $x$.",
                D(r"f(x)=2-\frac{1}{2}x"),
                D(r"m=-\frac{1}{2}"),
                close(True, "The trolley path has slope $-\\frac{1}{2}$"),
            ]),
            pack("D", True, [
                "Evaluate the trolley rule at the crown abscissa $x=2$.",
                D(r"f(2)=2-\frac{1}{2}\cdot 2=2-1=1"),
                close(True, "The trolley is at height $1$"),
            ]),
            pack("E", False, [
                "Compare the two heights at $x=2$.",
                D(r"f(2)=1\qquad g(2)=4"),
                D(r"1<4"),
                close(False, "The trolley lies below the arch at $x=2$, not above it"),
            ]),
        ],
        overview=D(r"g(x)=4-(x-2)^{2}\qquad f(x)=2-\frac{1}{2}x")
        + "\n\nCrown $(2,4)$; trolley height $1$ at the same abscissa.",
    )

    assert len(tasks) == 30, len(tasks)
    assert [t["stem_kind"] for t in tasks] == STEMS * 3
    # Retired: do not call enrich-ch7-mixed-overviews.py (long shared overviews).
    return tasks


def _apply_shared_solutions(tasks: list[dict]) -> None:
    """Retired: long shared overviews. Use gen-ch7-mixed-hard.py instead."""
    raise RuntimeError(
        "Long shared overviews are retired. Rebuild with scripts/gen-ch7-mixed-hard.py"
    )
    """Replace short stub overviews/explanations with Ch7-core shared solutions."""
    import importlib.util

    path = Path(__file__).resolve().parent / "enrich-ch7-mixed-overviews.py"
    spec = importlib.util.spec_from_file_location("enrich_ch7_mixed_overviews", path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(mod)
    mod.apply_overviews(tasks)


# ---------------------------------------------------------------------------
# Validation
# ---------------------------------------------------------------------------

def validate(tasks: list[dict]) -> None:
    kinds = Counter(t["stem_kind"] for t in tasks)
    print("stem_kind:", dict(kinds))
    assert all(kinds[k] == 3 for k in STEMS), kinds

    truths = [sum(1 for v in t["answer_key"] if v) for t in tasks]
    hist = Counter(truths)
    print("truth histogram:", dict(sorted(hist.items())))
    assert truths == PLANNED_TRUTHS, truths
    assert set(hist) == {1, 2, 3, 4, 5}

    ov_lens = sorted(len(t["solution_overview"]) for t in tasks)
    ov_med = statistics.median(ov_lens)
    print(f"overview len min/med/max {ov_lens[0]}/{ov_med}/{ov_lens[-1]}")
    assert ov_med >= 500, ov_med

    expls = [e for t in tasks for e in t["tactical_explanations"]]
    lens = sorted(len(e) for e in expls)
    med = statistics.median(lens)
    print(f"expl len min/med/max {lens[0]}/{med}/{lens[-1]}")

    figs = sum(1 for t in tasks if t.get("figure"))
    tabs = sum(1 for t in tasks if t.get("tables_markdown"))
    print(f"figures {figs} tables {tabs}")

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

    for t in tasks:
        blob = json.dumps(t)
        for tok in BANNED:
            assert tok not in blob, (t["id"], tok)
        if t.get("tables_markdown"):
            assert "Delta" not in t["tables_markdown"]
            assert r"\Delta" not in t["tables_markdown"]
        if t["stem_kind"] in {"table", "graph"}:
            # No closed form handed to the student in the stem.
            assert not re.search(r"[fg]\(x\)\s*=\s*[-0-9x]", t["context"])
        for i, e in enumerate(t["tactical_explanations"]):
            letter = "ABCDE"[i]
            verd = "True" if t["answer_key"][i] else "False"
            assert e.startswith(f"**{letter}.** → {verd}"), (t["id"], i, e[:60])
            assert e.rstrip().endswith(f"so the statement is {verd}."), (t["id"], letter)
            assert "so the statement is" in e
            assert e.count("$$") >= 2 and e.count("$$") % 2 == 0, (t["id"], letter, e.count("$$"))
            n_disp = e.count("$$") // 2
            assert 1 <= n_disp <= 6, (t["id"], letter, n_disp)
            # One-line displays: no raw newlines or empty bodies inside $$.
            for m in re.finditer(r"\$\$([\s\S]*?)\$\$", e):
                inner = m.group(1)
                assert inner.strip(), (t["id"], letter, "empty $$")
                assert "\n" not in inner, (t["id"], letter)
                assert not re.search(r"\\text\{[A-Za-z]{4,}", inner), (t["id"], letter, inner)
            for m in re.finditer(r"\$\$([\s\S]*?)\$\$", t["solution_overview"]):
                assert m.group(1).strip(), (t["id"], "empty overview $$")

    # Cover-the-figure: graph/applied/hybrid statements must not restate a vertex pair.
    for t in tasks:
        if t["stem_kind"] not in {"graph", "hybrid", "applied"}:
            continue
        joined = " ".join(t["statements"])
        assert "turns at" not in joined.lower()
        assert not re.search(r"vertex is\s*\$\(", joined)

    print("validation OK")


def main() -> None:
    raise SystemExit(
        "Retired: this generator wrote long shared overviews. "
        "Use scripts/gen-ch7-mixed-hard.py to rebuild src/data/math-ch7-mixed-exam.json"
    )
    tasks = build_all()
    validate(tasks)
    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {len(tasks)} -> {OUT}")


if __name__ == "__main__":
    main()
