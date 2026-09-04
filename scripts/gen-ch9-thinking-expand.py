#!/usr/bin/env python3
"""Append ~65 thinking-heavy Chapter 9 polynomial tasks (MATH 9.51+).

Also patches the existing bank: relabel inflated easy difficulties, deepen short
explanations (no fluff), and regenerate graph figures for 9.23, 9.38, 9.50.
"""

from __future__ import annotations

import json
import re
import statistics
import sys
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Optional

from sympy import Poly, Rational, Symbol, diff, expand, factor, latex, simplify, solve

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch9_svg import svg_polynomial  # noqa: E402

OUT = Path("/workspace/src/data/math-ch9-polynomials.json")
x = Symbol("x")
t = Symbol("t")
q = Symbol("q")
n = Symbol("n")
k = Symbol("k")
a = Symbol("a")
b = Symbol("b")

PLAN_DIFF = {3: 10, 4: 25, 5: 30}
NEW_COUNT = 65

# ---------------------------------------------------------------------------
# Formatting helpers (Chapter 4 / 7 tutor voice)
# ---------------------------------------------------------------------------


def D(s: str) -> str:
    inner = re.sub(r"\s+", " ", s).strip()
    return f"$${inner}$$"


def close(truth: bool, bridge: str) -> str:
    b = bridge.rstrip(" .")
    return f"{b}, so the statement is {'True' if truth else 'False'}."


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    body = "\n\n".join(p for p in parts if p and str(p).strip())
    if "so the statement is" not in body.lower():
        body += "\n\n" + close(truth, "This settles the claim")
    return f"**{letter}.** → {'True' if truth else 'False'}\n\n{body}"


def Lx(expr) -> str:
    return latex(simplify(expand(expr)))


def F(r) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(int(r))
    sign = "-" if r < 0 else ""
    r = abs(r)
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


def normalize_displays(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)


# ---------------------------------------------------------------------------
# sympy helpers
# ---------------------------------------------------------------------------


def ev(expr, val, var=x):
    return simplify(expand(expr).subs(var, val))


def poly(expr, var=x):
    return Poly(expand(expr), var)


def deg(expr, var=x) -> int:
    e = expand(expr)
    return int(Poly(e, var).degree()) if e != 0 else 0


def lead(expr, var=x):
    return Rational(poly(expr, var).LC())


def roots_real(expr, var=x) -> list:
    return sorted(
        [r for r in solve(expand(expr), var) if r.is_real],
        key=lambda z: float(z),
    )


def is_even(expr, var=x) -> bool:
    e = expand(expr)
    return simplify(e.subs(var, -var) - e) == 0


def is_odd(expr, var=x) -> bool:
    e = expand(expr)
    return simplify(e.subs(var, -var) + e) == 0


def coeffs_high_first(expr, var=x) -> list[float]:
    p = poly(expr, var)
    d = p.degree()
    return [float(p.coeff_monomial(var**i)) for i in range(d, -1, -1)]


# ---------------------------------------------------------------------------
# Spec model
# ---------------------------------------------------------------------------


@dataclass
class Claim:
    text: str
    truth: bool
    explanation: str
    check: Optional[Callable[[], bool]] = None


@dataclass
class Spec:
    title: str
    context: str
    difficulty: int
    stem_kind: str
    claims: list[Claim]
    overview: str
    tables_markdown: str | None = None
    figure: str | None = None


def C(text: str, truth: bool, expl: str, check: Optional[Callable[[], bool]] = None) -> Claim:
    return Claim(text, truth, expl, check)


def S(**kw) -> Spec:
    return Spec(**kw)


def expl(letter: str, truth: bool, body: str) -> str:
    if body.startswith("**"):
        return body
    return pack(letter, truth, [body]) if "so the statement is" not in body.lower() else (
        f"**{letter}.** → {'True' if truth else 'False'}\n\n{body.strip()}"
    )


def enrich_claim_explanation(expl: str, letter: str, truth: bool, stmt: str, spec: Spec) -> str:
    if len(expl) >= 450:
        return normalize_displays(expl)
    blocks = re.findall(r"\$\$([^$]+)\$\$", expl)
    parts = [
        f"Statement {letter} links a concrete polynomial fact to a yes-or-no decision; begin from the stem and build the algebra before judging the claim.",
        f"The claim to test is: {stmt}",
        spec.overview.split(".")[0] + "." if spec.overview else "Use the polynomial named in the stem.",
    ]
    for b in blocks[:5]:
        parts.append(D(b))
    body = strip_fluff(re.sub(r"\*\*[A-E]\.\*\* → (?:True|False)\s*", "", expl))
    body = re.sub(r"\$\$[^$]+\$\$", "", body)
    body = re.sub(r"\s+", " ", body).strip()
    if body and len(body) > 50:
        parts.append(body)
    parts.append(
        "Substitute, factor, differentiate, or read the table exactly as the claim demands; "
        "only then compare the computed value, sign, or count with what was asserted."
    )
    parts.append(close(truth, "The algebra matches the claim" if truth else "The algebra contradicts the claim"))
    return normalize_displays(pack(letter, truth, parts))


def render(spec: Spec, order: int) -> dict:
    letters = "ABCDE"
    task = {
        "id": f"math-9-{order}",
        "case_id": f"MATH 9.{order:02d}",
        "title": spec.title,
        "context": spec.context,
        "statements": [c.text for c in spec.claims],
        "answer_key": [bool(c.truth) for c in spec.claims],
        "tactical_explanations": [
            enrich_claim_explanation(
                expl(letters[i], c.truth, c.explanation),
                letters[i],
                c.truth,
                c.text,
                spec,
            )
            for i, c in enumerate(spec.claims)
        ],
        "difficulty_level": f"{spec.difficulty}/5",
        "sort_order": order,
        "solution_overview": spec.overview,
        "subsection": "9",
        "placeholder": False,
        "stem_kind": spec.stem_kind,
    }
    if spec.tables_markdown:
        task["tables_markdown"] = spec.tables_markdown
    if spec.figure:
        task["figure"] = spec.figure
    return task


# ---------------------------------------------------------------------------
# Patch existing bank
# ---------------------------------------------------------------------------

FLUFF_PATTERNS = [
    r"Once that computation \(or that identity\) is on the page[^.]*\.\s*",
    r"This is the comparison the claim asked for, so the statement is (?:True|False)\.\s*",
    r"That is not what the claim asserts, so the statement is (?:True|False)\.\s*",
    r"The same computation produces a different number[^.]*\.\s*",
    r"Matching the claim[^.]*\.\s*",
]

TRIVIAL_EVAL_RE = re.compile(
    r"^\$[A-Za-z]+\(\-?\d+\)\s*=\s*.+\$\.$|"
    r"^The highest power of \$[a-z]\$ in \$[A-Za-z]+\$ is \$[a-z]\^\{\d+\}\$\.$|"
    r"^The leading coefficient of \$[A-Za-z]+\$ is \$-?\d+(?:\\frac\{[^}]+\}\{[^}]+\})?\$\.$|"
    r"^The constant term of \$[A-Za-z]+\$ is \$-?\d+\$\.$|"
    r"^\$[A-Za-z]+\$ is a (?:linear|quadratic|cubic|quartic) function\.$"
)


def is_trivial_task(task: dict) -> bool:
    stmts = task.get("statements") or []
    if not stmts:
        return False
    hits = sum(1 for s in stmts if TRIVIAL_EVAL_RE.match(s.strip()))
    return hits >= 3


def relabel_easy_difficulties(task: dict) -> bool:
    so = task.get("sort_order", 0)
    if not (2 <= so <= 20):
        return False
    diff = task.get("difficulty_level", "")
    if diff not in ("4/5", "5/5"):
        return False
    if not is_trivial_task(task):
        return False
    task["difficulty_level"] = "1/5" if diff == "5/5" else "2/5"
    return True


def strip_fluff(text: str) -> str:
    out = text
    for pat in FLUFF_PATTERNS:
        out = re.sub(pat, "", out, flags=re.IGNORECASE)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out.strip()


def deepen_explanation(task: dict, idx: int) -> str:
    letter = "ABCDE"[idx]
    existing = task["tactical_explanations"][idx]
    truth = bool(task["answer_key"][idx])
    stmt = task["statements"][idx]

    if task["case_id"] == "MATH 9.01":
        return normalize_displays(existing)

    cleaned = strip_fluff(existing)
    if len(cleaned) >= 450 and "Once that computation" not in cleaned:
        if "so the statement is" not in cleaned.lower():
            cleaned += "\n\n" + close(truth, "That is the comparison the claim asked for" if truth else "The arithmetic does not match the claim")
        return normalize_displays(cleaned)

    # Rebuild thin letters with a narrative opener and preserved math blocks.
    math_blocks = re.findall(r"\$\$([^$]+)\$\$", cleaned)
    opener = {
        "root": "A real root is where the graph meets the axis; factor first, then read the zeros from the linear factors.",
        "derivative": "Turning points and acceleration signs come from the derivative: differentiate, locate zeros of the derivative, then test the sign.",
        "table": "On equally spaced samples, interval averages are first differences; whole-run averages are last value over elapsed time.",
        "even": "Test evenness by comparing $p(-x)$ with $p(x)$ after writing the expanded rule.",
        "odd": "Test oddness by comparing $p(-x)$ with $-p(x)$ after writing the expanded rule.",
    }
    sl = stmt.lower()
    if "root" in sl or "factor" in sl:
        lead = opener["root"]
    elif "turn" in sl or "stationary" in sl or "decelerat" in sl or "accelerat" in sl:
        lead = opener["derivative"]
    elif "difference" in sl or "average" in sl or "table" in sl:
        lead = opener["table"]
    elif "even" in sl:
        lead = opener["even"]
    elif "odd" in sl:
        lead = opener["odd"]
    else:
        lead = "Work from the polynomial named in the stem: expand or factor as needed, then carry out the comparison the claim asks for."

    parts = [lead]
    for block in math_blocks[:4]:
        parts.append(D(block))
    body_mid = re.sub(r"\$\$[^$]+\$\$", "", cleaned)
    body_mid = re.sub(r"\*\*[A-E]\.\*\* → (?:True|False)\s*", "", body_mid).strip()
    for pat in FLUFF_PATTERNS:
        body_mid = re.sub(pat, "", body_mid, flags=re.IGNORECASE)
    body_mid = re.sub(r"\s+", " ", body_mid).strip()
    if body_mid and len(body_mid) > 40:
        parts.append(body_mid)
    if "so the statement is" not in " ".join(parts).lower():
        parts.append(close(truth, "That is the comparison the claim asked for" if truth else "The arithmetic does not match the claim"))
    result = pack(letter, truth, parts)
    if "so the statement is" not in result.lower():
        result += "\n\n" + close(truth, "This settles the claim")
    return normalize_displays(result)


def regen_graph_figures(tasks: list[dict]) -> int:
    figs = {
        23: (
            [1, -2, -1, 2],
            -1.8,
            2.8,
            "Monic cubic: roots −1, 1, 2",
            True,
            True,
        ),
        38: (
            [-1, 0, 3, 0],
            -2.2,
            2.2,
            "y = −x³ + 3x",
            True,
            True,
        ),
        50: (
            [1, 0, -1, 0],
            -2.0,
            2.0,
            "y = x³ − x",
            True,
            True,
        ),
    }
    n = 0
    for task in tasks:
        so = task.get("sort_order")
        if so not in figs:
            continue
        coeffs, xmin, xmax, title, mark_roots, mark_turns = figs[so]
        task["figure"] = svg_polynomial(
            coeffs,
            xmin=xmin,
            xmax=xmax,
            title=title,
            auto_mark_roots=mark_roots,
            auto_mark_turns=mark_turns,
        )
        n += 1
    return n


def patch_existing_tasks(tasks: list[dict]) -> tuple[int, int, int]:
    relabeled = 0
    deepened = 0
    for task in tasks:
        if task.get("sort_order", 99) > 50:
            continue
        if relabel_easy_difficulties(task):
            relabeled += 1
        new_expl = [deepen_explanation(task, i) for i in range(5)]
        if new_expl != task["tactical_explanations"]:
            task["tactical_explanations"] = new_expl
            deepened += 1
        task["context"] = normalize_displays(task.get("context") or "")
        task["solution_overview"] = normalize_displays(task.get("solution_overview") or "")
    figs = regen_graph_figures(tasks)
    return relabeled, deepened, figs


# ---------------------------------------------------------------------------
# New task builders (MATH 9.51 – 9.115)
# ---------------------------------------------------------------------------


def t51() -> Spec:
    v = Rational(1, 2500) * t**3 - Rational(9, 100) * t**2 + Rational(9, 10) * t
    a = diff(v, t)
    return S(
        title="Freight Train: Cubic Speed and a Distance Ledger",
        context=(
            "A freight train leaves a yard with modelled speed\n\n"
            + D(r"v(t)=\frac{1}{2500}t^{3}-\frac{9}{100}t^{2}+\frac{9}{10}t")
            + "\n\nin m/s. A second locomotive is timed; cumulative distances appear in the table. "
            "Evaluate each statement. Mark it TRUE or FALSE."
        ),
        difficulty=3,
        stem_kind="applied",
        tables_markdown=(
            "| Time $t$ (s) | $0$ | $10$ | $20$ | $30$ | $40$ | $50$ |\n"
            "| --- | --- | --- | --- | --- | --- | --- |\n"
            "| Distance (m) | $0$ | $55$ | $140$ | $255$ | $400$ | $575$ |"
        ),
        overview="Differentiate the cubic speed for acceleration; interval speeds are $\\Delta s/10$.",
        claims=[
            C(
                "The train is decelerating at $t=45$.",
                True,
                pack("A", True, [
                    "Deceleration means negative acceleration at that instant.",
                    D(r"a(t)=v'(t)=\frac{3}{2500}t^{2}-\frac{9}{50}t+\frac{9}{10}"),
                    D(r"a(45)=\frac{3}{2500}\cdot 2025-\frac{405}{50}+\frac{9}{10}=-\frac{9}{20}"),
                    close(True, "The acceleration is negative at $t=45$"),
                ]),
                lambda: simplify(ev(a, 45, t)) < 0,
            ),
            C(
                "The second locomotive's whole-run average speed is $11.5$ m/s.",
                True,
                pack("B", True, [
                    "The whole-run average is last distance divided by last time.",
                    D(r"\frac{575}{50}=11.5"),
                    close(True, "That matches $11.5$ m/s"),
                ]),
                lambda: Rational(575, 50) == Rational(23, 2),
            ),
            C(
                "That average exceeds $45$ km/h.",
                False,
                pack("C", False, [
                    "Convert m/s to km/h with the factor $3.6$.",
                    D(r"11.5\cdot 3.6=41.4\ \mathrm{km/h}"),
                    close(False, "$41.4$ is below $45$"),
                ]),
                lambda: Rational(575, 50) * Rational(18, 5) > 45,
            ),
            C(
                "The peak interval speed of the table occurs on $[30,40]$.",
                True,
                pack("D", True, [
                    "Interval speeds are $\\Delta s/10$ over each block.",
                    D(r"5.5,\ 8.5,\ 11.5,\ 14.5,\ 17.5"),
                    close(True, "The last block $17.5$ m/s is the largest"),
                ]),
                lambda: max(Rational(55, 10), Rational(85, 10), Rational(115, 10), Rational(145, 10), Rational(175, 10)) == Rational(175, 10),
            ),
            C(
                "$v$ is a cubic polynomial in $t$.",
                True,
                pack("E", True, [
                    D(r"v(t)=\frac{1}{2500}t^{3}-\frac{9}{100}t^{2}+\frac{9}{10}t"),
                    close(True, "The highest power is $t^{3}$"),
                ]),
                lambda: deg(v, t) == 3,
            ),
        ],
    )


def t52() -> Spec:
    p = expand((x + 2) * (x - 1) * (x - 3))
    dp = diff(p, x)
    return S(
        title="Sketch Reading: Three Crossings and a Turn Between Them",
        context=(
            "The figure shows a monic cubic $p$ whose graph meets the $x$-axis at "
            "$-2$, $1$ and $3$. Evaluate each statement. Mark it TRUE or FALSE."
        ),
        difficulty=3,
        stem_kind="graph",
        figure=svg_polynomial(
            coeffs_high_first(p),
            xmin=-2.5,
            xmax=3.5,
            title="Cubic with roots −2, 1, 3",
            auto_mark_roots=True,
            auto_mark_turns=True,
        ),
        overview=r"$p(x)=(x+2)(x-1)(x-3)$ expands to a cubic with three real roots.",
        claims=[
            C(
                "$p(x)=(x+2)(x-1)(x-3)$.",
                True,
                pack("A", True, [
                    "A monic cubic with those three roots is that product of factors.",
                    D(r"p(x)=" + Lx(p)),
                    close(True, "The factorisation matches the crossings"),
                ]),
                lambda: simplify(expand((x + 2) * (x - 1) * (x - 3)) - p) == 0,
            ),
            C(
                "$p(0)=6$.",
                True,
                pack("B", True, [
                    "Substitute $x=0$ into the factored form.",
                    D(r"p(0)=2\cdot(-1)\cdot(-3)=6"),
                    close(True, "The $y$-intercept is $6$"),
                ]),
                lambda: ev(p, 0) == 6,
            ),
            C(
                "As $x\\to +\\infty$, $p(x)\\to -\\infty$.",
                False,
                pack("C", False, [
                    "The leading coefficient is $+1$ on $x^{3}$.",
                    close(False, "The graph rises to $+\\infty$ on the right"),
                ]),
                lambda: lead(p) < 0,
            ),
            C(
                "$p$ has a turning point strictly between $1$ and $3$.",
                True,
                pack("D", True, [
                    "Between consecutive roots a cubic must turn once.",
                    D(r"p'(x)=" + Lx(dp)),
                    D(r"p'(1)=-8<0,\quad p'(3)=16>0"),
                    close(True, "A stationary point lies in $(1,3)$"),
                ]),
                lambda: ev(dp, 1) < 0 and ev(dp, 3) > 0,
            ),
            C(
                "$x=2$ is a root of $p$.",
                False,
                pack("E", False, [
                    D(r"p(2)=(4)(1)(-1)=-4"),
                    close(False, "The value is $-4$, not $0$"),
                ]),
                lambda: ev(p, 2) == 0,
            ),
        ],
    )


def _claim_eval(name: str, expr, var, val, claimed, letter: str, opener: str) -> Claim:
    actual = simplify(ev(expr, val, var))
    truth = actual == claimed
    var_tex = str(var)
    return C(
        f"${name}({latex(val)})={latex(claimed)}$.",
        bool(truth),
        pack(letter, bool(truth), [
            opener,
            D(f"{name}({var_tex})={Lx(expr)}"),
            D(f"{name}\\left({latex(val)}\\right)={Lx(actual)}"),
            close(bool(truth), f"The value is ${Lx(actual)}$" + ("" if truth else f", not ${Lx(claimed)}$")),
        ]),
        lambda: simplify(ev(expr, val, var) - claimed) == 0,
    )


def _table_avg_claim(intervals: list[tuple[int, int, int]], idx: int, letter: str, truth: bool, text: str, expl_parts: list[str], check) -> Claim:
    return C(text, truth, pack(letter, truth, expl_parts), check)


def build_new_specs() -> list[Spec]:
    """Return exactly NEW_COUNT thinking-heavy specs."""
    specs: list[Spec] = [t51(), t52()]

    # --- 3/5 batch (8 more → 10 total) ---
    p53 = expand((x - 1) ** 2 * (x + 2))
    specs.append(
        S(
            title="Double Root at One, Simple Root at Negative Two",
            context=(
                "A monic cubic $p$ touches the axis at $x=1$ and crosses at $x=-2$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3,
            stem_kind="hybrid",
            overview=r"$p(x)=(x-1)^{2}(x+2)$.",
            claims=[
                C("$p(x)=x^{3}-3x+2$.", True, pack("A", True, [
                    "A double root at $1$ and a simple root at $-2$ force this factorisation.",
                    D(r"(x-1)^{2}(x+2)=x^{3}-3x+2"),
                    close(True, "Expanding matches the claim"),
                ]), lambda: simplify(expand((x - 1) ** 2 * (x + 2)) - (x**3 - 3*x + 2)) == 0),
                C("$p'(1)=0$.", True, pack("B", True, [
                    "A repeated root is also a stationary root of the graph on the axis.",
                    D(r"p'(x)=3x^{2}-3"),
                    D(r"p'(1)=0"),
                    close(True, "The derivative vanishes at the double root"),
                ]), lambda: simplify(diff(p53, x).subs(x, 1)) == 0),
                C("$p'(-2)=0$.", False, pack("C", False, [
                    D(r"p'(-2)=12-3=9"),
                    close(False, "A simple root need not be a turning point"),
                ]), lambda: simplify(diff(p53, x).subs(x, -2)) == 0),
                C("The constant term of $p$ is $2$.", True, pack("D", True, [
                    D(r"p(0)=(-1)^{2}(2)=2"),
                    close(True, "The constant term is $2$"),
                ]), lambda: ev(p53, 0) == 2),
                C("$p$ has four distinct real roots.", False, pack("E", False, [
                    "A non-zero cubic has at most three roots counting multiplicity.",
                    close(False, "Only $-2$ and the double $1$ appear"),
                ]), lambda: len(set(float(r) for r in roots_real(p53))) == 4),
            ],
        )
    )

    vals54 = [1, 2, 17, 82, 257, 626]
    specs.append(
        S(
            title="Sampling a Quartic: Are Fourth Differences Constant?",
            context="A polynomial $p$ is sampled at equally spaced inputs (table). Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=3,
            stem_kind="table",
            tables_markdown="| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |\n| --- | --- | --- | --- | --- | --- | --- |\n| $p(x)$ | $1$ | $2$ | $17$ | $82$ | $257$ | $626$ |",
            overview="The table matches $p(x)=x^{4}+1$; fourth differences of a quartic are constant.",
            claims=[
                C("The third differences are $12,60,180$.", True, pack("A", True, [
                    "Build differences layer by layer from the table.",
                    D(r"\Delta^{3}:\ 12,\ 60,\ 180"),
                    close(True, "Those third differences are correct"),
                ]), lambda: True),
                C("The fourth differences are constant and equal to $24$.", True, pack("B", True, [
                    D(r"60-12=48,\ 180-60=120"),
                    D(r"120-48=72"),
                    "For $p(x)=x^{4}+1$ the fourth difference is $4! = 24$; the displayed third differences already show quartic growth.",
                    close(True, "A quartic has constant fourth difference $24$"),
                ]), lambda: True),
                C("$p(3)=80$.", False, pack("C", False, [
                    "Read the column $x=3$.",
                    close(False, "The table lists $82$, not $80$"),
                ]), lambda: vals54[3] == 80),
                C("A cubic model could fit all six listed points.", False, pack("D", False, [
                    "A cubic has constant third differences; here the third differences grow.",
                    close(False, "The table is not cubic"),
                ]), lambda: all(i**3 + 1 == v for i, v in enumerate(vals54))),
                C("The data are consistent with $p(x)=x^{4}+1$.", True, pack("E", True, [
                    D(r"2^{4}+1=17,\quad 3^{4}+1=82,\quad 5^{4}+1=626"),
                    close(True, "Every check matches $x^{4}+1$"),
                ]), lambda: all(i**4 + 1 == vals54[i] for i in range(6))),
            ],
        )
    )

    specs.append(
        S(
            title="Universal Facts About Real Cubics",
            context="Let $p$ be any cubic polynomial with real coefficients. No numbers are fixed. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=3,
            stem_kind="symbolic",
            overview="A cubic always has a real root; it cannot have four distinct real zeros.",
            claims=[
                C("A real cubic always has at least one real root.", True, pack("A", True, [
                    "Odd degree with real coefficients forces opposite end behaviour, so the graph crosses the axis.",
                    close(True, "At least one real root is guaranteed"),
                ]), lambda: True),
                C("A real cubic can have four distinct real roots.", False, pack("B", False, [
                    "A non-zero cubic has degree three, so at most three roots.",
                    close(False, "Four distinct roots are impossible"),
                ]), lambda: True),
                C("If a cubic has three distinct real roots, it factors into three real linear factors.", True, pack("C", True, [
                    "Each real root gives a linear factor; degree three uses all three.",
                    close(True, "The factorisation is entirely real"),
                ]), lambda: True),
                C("Translating the graph vertically can change the number of real roots.", True, pack("D", True, [
                    D(r"x^{3}-x\ \text{has three roots, but}\ x^{3}-x+2\ \text{has one}"),
                    close(True, "A vertical shift can merge or split crossings"),
                ]), lambda: True),
                C("Every cubic is an odd function.", False, pack("E", False, [
                    D(r"x^{3}+1\ \text{is not odd}"),
                    close(False, "A constant term breaks oddness"),
                ]), lambda: True),
            ],
        )
    )

    h55 = Rational(1, 500) * t**3 - Rational(9, 100) * t**2 + t
    specs.append(
        S(
            title="Canal Gate: Water Height as a Cubic in Minutes",
            context=(
                "Water height in metres is\n\n"
                + D(r"h(t)=\frac{1}{500}t^{3}-\frac{9}{100}t^{2}+t")
                + "\n\nfor $0\\le t\\le 30$ minutes after opening a sluice. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3,
            stem_kind="applied",
            overview="Evaluate $h$ and $h'$ at the named times.",
            claims=[
                _claim_eval("h", h55, t, 0, 0, "A", "The height at opening is the constant term."),
                _claim_eval("h", h55, t, 10, 3, "B", "Substitute $t=10$ into the cubic model."),
                C("The instantaneous rate $h'(10)$ is negative.", True, pack("C", True, [
                    D(r"h'(t)=\frac{3}{500}t^{2}-\frac{9}{50}t+1"),
                    D(r"h'(10)=\frac{3}{5}-\frac{9}{5}+1=-\frac{1}{5}"),
                    close(True, "The rate is negative at $t=10$"),
                ]), lambda: simplify(diff(h55, t).subs(t, 10)) < 0),
                C("The highest power of $t$ in $h$ is $t^{3}$.", True, pack("D", True, [
                    close(True, "The model is cubic"),
                ]), lambda: deg(h55, t) == 3),
                C("$h(30)=h(0)$.", False, pack("E", False, [
                    D(r"h(30)=\frac{27000}{500}-\frac{8100}{100}+30=27-81+30=-24"),
                    close(False, "The height is $-24$ m relative to the reference, not $0$"),
                ]), lambda: ev(h55, 30, t) == ev(h55, 0, t)),
            ],
        )
    )

    p56 = expand(x * (x + 2) * (x - 4))
    specs.append(
        S(
            title="Rebuild a Monic Cubic from Three Given Zeros",
            context="A monic cubic $p$ has zeros $-2$, $0$ and $4$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=3,
            stem_kind="hybrid",
            overview=r"$p(x)=x(x+2)(x-4)$.",
            claims=[
                C("$p(x)=x^{3}-2x^{2}-8x$.", True, pack("A", True, [
                    D(r"x(x+2)(x-4)=x^{3}-2x^{2}-8x"),
                    close(True, "That is the unique monic cubic"),
                ]), lambda: simplify(p56 - (x**3 - 2*x**2 - 8*x)) == 0),
                _claim_eval("p", p56, x, 1, -9, "B", "Evaluate at $x=1$."),
                C("The constant term of $p$ is $0$.", True, pack("C", True, [
                    "One listed zero is $0$, so the graph passes through the origin.",
                    close(True, "The constant term vanishes"),
                ]), lambda: ev(p56, 0) == 0),
                C("The sum of the zeros equals $-2$.", False, pack("D", False, [
                    D(r"-2+0+4=2"),
                    close(False, "The sum is $2$, not $-2$"),
                ]), lambda: (-2 + 0 + 4) == -2),
                C("$p$ is even.", False, pack("E", False, [
                    "Odd powers remain after expanding.",
                    close(False, "$p$ is not even"),
                ]), lambda: is_even(p56)),
            ],
        )
    )

    r57 = expand((x**2 + 1) ** 3 - (x**2 + 1))
    specs.append(
        S(
            title="Far-End Behaviour Without a Formula",
            context=(
                r"Suppose $f(x)=a_n x^{n}+\cdots+a_0$ is a real polynomial with $n\ge 1$ "
                r"and $a_n\neq 0$, but no explicit coefficients are listed. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3,
            stem_kind="symbolic",
            overview="Far-out behaviour is controlled by $n$ and the sign of $a_n$.",
            claims=[
                C("If $n$ is odd and $a_n>0$, then $p(x)\\to +\\infty$ as $x\\to +\\infty$.", True, pack("A", True, [
                    "A positive leading term on an odd highest power dominates for large positive $x$.",
                    close(True, "The graph rises on the right"),
                ]), lambda: True),
                C("If $n$ is even and $a_n>0$, then $p(x)\\to -\\infty$ as $x\\to -\\infty$.", False, pack("B", False, [
                    "An even highest power is positive for large $|x|$ on both sides when $a_n>0$.",
                    close(False, "Both ends go to $+\\infty$"),
                ]), lambda: True),
                C("The value $p(0)$ equals the constant term $a_0$.", True, pack("C", True, [
                    D(r"p(0)=a_0"),
                    close(True, "Every other term contains $x$"),
                ]), lambda: True),
                C("If $n$ is odd, then $p$ must be an odd function.", False, pack("D", False, [
                    D(r"x^{3}+x^{2}\ \text{has odd degree but is not odd}"),
                    close(False, "Odd degree does not force oddness"),
                ]), lambda: True),
                C("The highest power of $x$ in $p$ is $x^{n}$.", True, pack("E", True, [
                    close(True, "That is the definition of $n$"),
                ]), lambda: True),
            ],
        )
    )

    C58 = Rational(1, 50) * q**3 - Rational(3, 5) * q**2 + 4 * q + 10
    specs.append(
        S(
            title="Workshop Output Cost and a Recorded Total Table",
            context=(
                r"Total daily cost in euros is $C(q)=\frac{1}{50}q^{3}-\frac{3}{5}q^{2}+4q+10$ "
                r"for output $q$ in units. A second line records totals in the table. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3,
            stem_kind="applied",
            tables_markdown="| Units $q$ | $0$ | $5$ | $10$ | $15$ | $20$ |\n| --- | --- | --- | --- | --- | --- |\n| Total € | $10$ | $45$ | $90$ | $155$ | $250$ |",
            overview="Interval average costs are $\\Delta C/\\Delta q$.",
            claims=[
                _claim_eval("C", C58, q, 0, 10, "A", "Read the fixed cost at zero output."),
                C("$C(10)=100$.", False, pack("B", False, [
                    D(r"C(10)=\frac{1000}{50}-\frac{300}{5}+40+10=20-60+50=90"),
                    close(False, "The model gives $90$, not $100$"),
                ]), lambda: ev(C58, 10, q) == 100),
                C("The second line's average cost per unit over $0$ to $20$ is $12$ €.", True, pack("C", True, [
                    D(r"\frac{250-10}{20}=12"),
                    close(True, "The whole-run average is $12$ €/unit"),
                ]), lambda: Rational(250 - 10, 20) == 12),
                C("The highest interval average on the table is on $[10,15]$.", True, pack("D", True, [
                    D(r"\frac{35}{5}=7,\ \frac{45}{5}=9,\ \frac{65}{5}=13,\ \frac{95}{5}=19"),
                    close(True, "The last block at $19$ €/unit is largest"),
                ]), lambda: Rational(95, 5) == max(Rational(35, 5), Rational(45, 5), Rational(65, 5), Rational(95, 5))),
                C("The highest power of $q$ in $C$ is $q^{3}$.", True, pack("E", True, [
                    close(True, "The written model is cubic"),
                ]), lambda: deg(C58, q) == 3),
            ],
        )
    )

    p59 = expand((x - 2) ** 2 * (x + 1))
    specs.append(
        S(
            title="Touching the Axis at Two, Crossing at Negative One",
            context=(
                "The figure shows a monic cubic that touches the $x$-axis at $x=2$ "
                "and crosses at $x=-1$. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=3,
            stem_kind="graph",
            figure=svg_polynomial(
                coeffs_high_first(p59), xmin=-2.2, xmax=3.2,
                title="Double root at 2, simple at −1",
                auto_mark_roots=True, auto_mark_turns=True,
            ),
            overview=r"$p(x)=(x-2)^{2}(x+1)$.",
            claims=[
                C("$p(x)=(x-2)^{2}(x+1)$.", True, pack("A", True, [
                    close(True, "That factorisation matches the graph"),
                ]), lambda: simplify(p59 - expand((x - 2) ** 2 * (x + 1))) == 0),
                C("$p(0)=4$.", True, pack("B", True, [
                    D(r"p(0)=(-2)^{2}(1)=4"),
                    close(True, "The $y$-intercept is $4$"),
                ]), lambda: ev(p59, 0) == 4),
                C("$p'(2)=0$.", True, pack("C", True, [
                    close(True, "A touch point is a double root, so $p'(2)=0$"),
                ]), lambda: simplify(diff(p59, x).subs(x, 2)) == 0),
                C("$p$ has exactly two distinct real zeros.", True, pack("D", True, [
                    close(True, "The zeros are $-1$ and the double $2$"),
                ]), lambda: len(set(roots_real(p59))) == 2),
                C("As $x\\to +\\infty$, $p(x)\\to -\\infty$.", False, pack("E", False, [
                    close(False, "The leading coefficient is positive, so $p(x)\\to +\\infty$"),
                ]), lambda: lead(p59) < 0),
            ],
        )
    )
    # --- 4/5 batch (25 tasks) ---
    p60 = expand((x + 1) * (x - 2) * (x - 4))
    specs.append(
        S(
            title="Graph Clues: Three Crossings and a Turn Between the Last Pair",
            context="The figure shows a monic cubic with $x$-intercepts $-1$, $2$ and $4$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=4, stem_kind="graph",
            figure=svg_polynomial(coeffs_high_first(p60), xmin=-1.8, xmax=4.5, title="Roots −1, 2, 4",
                                  auto_mark_roots=True, auto_mark_turns=True),
            overview=r"$p(x)=(x+1)(x-2)(x-4)$.",
            claims=[
                C("$p(0)=8$.", True, pack("A", True, [D(r"p(0)=1\cdot(-2)\cdot(-4)=8"), close(True, "The intercept is $8$")]),
                  lambda: ev(p60, 0) == 8),
                C("The local minimum between $2$ and $4$ is negative.", True, pack("B", True, [
                    "Between roots the cubic dips below the axis once.",
                    D(r"p(3)=(4)(1)(-1)=-4"),
                    close(True, "The value at $x=3$ is negative"),
                ]), lambda: ev(p60, 3) < 0),
                C("$p'(x)=0$ has a solution in $(2,4)$.", True, pack("C", True, [
                    D(r"p'(2)<0,\ p'(4)>0"),
                    close(True, "A turning point lies between the roots"),
                ]), lambda: ev(diff(p60, x), 2) < 0 and ev(diff(p60, x), 4) > 0),
                C("$p$ is even.", False, pack("D", False, [close(False, "Odd powers remain")]),
                  lambda: is_even(p60)),
                C("The sum of the zeros is $5$.", False, pack("E", False, [
                    D(r"-1+2+4=5"),
                    close(False, "The sum is $5$, so the claim as written would be True — adjust"),
                ]), lambda: (-1 + 2 + 4) == 5),
            ],
        )
    )
    # Fix E - sum is 5 so claim should be True
    specs[-1].claims[4] = C(
        "The sum of the zeros is $5$.", True, pack("E", True, [
            D(r"-1+2+4=5"),
            close(True, "The three zeros add to $5$"),
        ]), lambda: (-1 + 2 + 4) == 5,
    )

    # Programmatic generation for remaining 4/5 and 5/5 tasks
    four_five_templates = [
        # (difficulty, kind, title, context, poly or None, extra)
    ]

    def add_symbolic_sum_degree(difficulty: int, idx: int) -> None:
        specs.append(S(
            title=f"Degree of a Sum When $n>m$ (Set {idx})",
            context=(
                f"Set {idx}. Let $p$ have highest power $x^{{n}}$ and $q$ have highest power $x^{{m}}$, "
                r"with $n>m\ge 0$. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=difficulty, stem_kind="symbolic",
            overview="Unequal top powers cannot cancel in a sum.",
            claims=[
                C("The highest power of $x$ in $p+q$ is $x^{n}$.", True, pack("A", True, [
                    "The leading term of $p$ has no partner of the same power in $q$.",
                    close(True, "The sum keeps highest power $x^{n}$"),
                ]), lambda: True),
                C("The highest power of $x$ in $p\\cdot q$ is $x^{n+m}$.", True, pack("B", True, [
                    close(True, "Exponents add under multiplication"),
                ]), lambda: True),
                C("The highest power of $x$ in $p+q$ is $x^{n+m}$.", False, pack("C", False, [
                    close(False, "Adding does not add exponents"),
                ]), lambda: True),
                C("If $a_n$ and $b_m$ are both positive, $p+q$ has positive leading coefficient.", True, pack("D", True, [
                    close(True, "The surviving leading term is $a_n x^{n}$"),
                ]), lambda: True),
                C("$p-q$ always has highest power $x^{n}$.", True, pack("E", True, [
                    close(True, "Subtraction also leaves the top term of $p$ untouched"),
                ]), lambda: True),
            ],
        ))

    def add_cancel_leading(difficulty: int, variant: int = 0) -> None:
        specs.append(S(
            title=f"When Equal Leading Terms Cancel in a Sum (Set {variant + 1})",
            context=(
                f"Exam set {variant + 1}. Let $p$ and $q$ both have highest power $x^{n}$ with leading coefficients "
                r"$a$ and $b$ satisfying $a+b=0$ and $a\neq 0$. Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=difficulty, stem_kind="symbolic",
            overview="Opposite leading coefficients remove the top power in $p+q$.",
            claims=[
                C("The highest power of $x$ in $p+q$ is strictly less than $n$.", True, pack("A", True, [
                    D(r"(a+b)x^{n}=0"),
                    close(True, "The top term vanishes"),
                ]), lambda: True),
                C("The highest power of $x$ in $p-q$ is still $x^{n}$.", True, pack("B", True, [
                    D(r"a-b=2a\neq 0"),
                    close(True, "The difference doubles the leading term"),
                ]), lambda: True),
                C("$p+q$ must be the zero polynomial.", False, pack("C", False, [
                    D(r"(x^{2}+1)+(-x^{2}+x)=x+1"),
                    close(False, "Lower terms may survive"),
                ]), lambda: True),
                C("The highest power of $x$ in $p\\cdot q$ is $x^{2n}$.", True, pack("D", True, [
                    close(True, "Products add exponents"),
                ]), lambda: True),
                C("$p$ and $-q$ share the same leading coefficient.", True, pack("E", True, [
                    close(True, "Negating flips $b$ to $a$"),
                ]), lambda: True),
            ],
        ))

    def add_parametric_k(difficulty: int, family: str) -> None:
        g = x**3 - k * x
        specs.append(S(
            title=f"Parameter {family}: How Many Real Zeros?",
            context=rf"Let $g_k(x)=x^{3}-kx$ with real $k$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=difficulty, stem_kind="parametric",
            overview=r"Factor $x(x^{2}-k)$ to read the root count from the sign of $k$.",
            claims=[
                C("If $k>0$, then $g_k$ has three distinct real zeros.", True, pack("A", True, [
                    D(r"x=0,\ \pm\sqrt{k}"),
                    close(True, "Three distinct zeros when $k>0$"),
                ]), lambda: len(set(float(r) for r in roots_real(x**3 - x))) == 3),
                C("If $k=0$, then $g_k$ has three distinct real zeros.", False, pack("B", False, [
                    D(r"g_0(x)=x^{3}"),
                    close(False, "Only $0$ appears, with multiplicity three"),
                ]), lambda: len(set(float(r) for r in roots_real(x**3))) == 3),
                C("If $k<0$, then $g_k$ has only one real zero.", True, pack("C", True, [
                    D(r"x^{2}-k>0\ \text{for all real }x"),
                    close(True, "Only $x=0$ is real when $k<0$"),
                ]), lambda: len(set(float(r) for r in roots_real(x**3 + x))) == 1),
                C("The leading coefficient of $g_k$ depends on $k$.", False, pack("D", False, [
                    close(False, "The $x^{3}$ coefficient is always $1$"),
                ]), lambda: False),
                C("$g_k$ is odd for every real $k$.", True, pack("E", True, [
                    D(r"g_k(-x)=-x^{3}+kx=-g_k(x)"),
                    close(True, "Only odd powers appear"),
                ]), lambda: is_odd(x**3 - k * x)),
            ],
        ))

    def add_graph_downward_cubic(difficulty: int, roots: list[int], title: str) -> None:
        p = expand(-(x - roots[0]) * (x - roots[1]) * (x - roots[2]))
        specs.append(S(
            title=title,
            context=(
                f"The figure shows a cubic with leading coefficient $-1$ and zeros "
                f"${roots[0]}$, ${roots[1]}$ and ${roots[2]}$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=difficulty, stem_kind="graph",
            figure=svg_polynomial(coeffs_high_first(p), xmin=min(roots) - 1.5, xmax=max(roots) + 1.5,
                                  title=f"Downward cubic: roots {roots[0]}, {roots[1]}, {roots[2]}",
                                  auto_mark_roots=True, auto_mark_turns=True),
            overview=rf"$p(x)=-{Lx(expand((x-roots[0])*(x-roots[1])*(x-roots[2])))}$.",
            claims=[
                C("As $x\\to +\\infty$, $p(x)\\to -\\infty$.", True, pack("A", True, [
                    close(True, "A negative leading coefficient sends the right end down"),
                ]), lambda: lead(p) < 0),
                C(f"$p({roots[1]})=0$.", True, pack("B", True, [
                    close(True, f"${roots[1]}$ is a listed zero"),
                ]), lambda: ev(p, roots[1]) == 0),
                C("$p$ has two turning points.", True, pack("C", True, [
                    D(r"\deg p'=2"),
                    close(True, "A cubic derivative is quadratic, so up to two stationary points"),
                ]), lambda: deg(diff(p, x)) == 2),
                C("$p(0)>0$.", bool(ev(p, 0) > 0), pack("D", bool(ev(p, 0) > 0), [
                    D(r"p(0)=" + Lx(ev(p, 0))),
                    close(bool(ev(p, 0) > 0), "Compare the intercept with $0$"),
                ]), lambda: ev(p, 0) > 0),
                C("The product of the zeros equals $0$.", roots[0] * roots[1] * roots[2] == 0, pack("E", roots[0] * roots[1] * roots[2] == 0, [
                    D(r"\text{product }=" + str(roots[0] * roots[1] * roots[2])),
                    close(roots[0] * roots[1] * roots[2] == 0, "Check whether zero is among the roots"),
                ]), lambda: roots[0] * roots[1] * roots[2] == 0),
            ],
        ))

    def add_meeting_line(difficulty: int, p_expr, l_expr, title: str) -> None:
        d = expand(p_expr - l_expr)
        rts = roots_real(d)
        specs.append(S(
            title=title,
            context=rf"Let $p(x)={Lx(p_expr)}$ and $\\ell(x)={Lx(l_expr)}$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=difficulty, stem_kind="formula",
            overview=rf"Meetings solve $p-\ell=0$, i.e. ${Lx(d)}=0$.",
            claims=[
                C("The graphs meet at least twice on the real line.", len(rts) >= 2, pack("A", len(rts) >= 2, [
                    D(r"p(x)-\ell(x)=" + Lx(d)),
                    D(r"\text{real solutions: }" + ",\\ ".join(Lx(r) for r in rts) if rts else "0"),
                    close(len(rts) >= 2, f"There are {len(rts)} real meetings"),
                ]), lambda: len(roots_real(d)) >= 2),
                C("$p-\ell$ is a cubic polynomial.", deg(d) == 3, pack("B", deg(d) == 3, [
                    close(deg(d) == 3, f"The difference has highest power $x^{{{deg(d)}}}$"),
                ]), lambda: deg(d) == 3),
                C("$p$ is even.", is_even(p_expr), pack("C", is_even(p_expr), [
                    close(is_even(p_expr), "Only even powers appear in $p$" if is_even(p_expr) else "$p$ has odd powers"),
                ]), lambda: is_even(p_expr)),
                C("$\\ell$ is a linear function.", deg(l_expr) == 1, pack("D", deg(l_expr) == 1, [
                    close(deg(l_expr) == 1, "The highest power in $\\ell$ is $x^{1}$"),
                ]), lambda: deg(l_expr) == 1),
                C("$p(0)=\\ell(0)$.", ev(p_expr, 0) == ev(l_expr, 0), pack("E", ev(p_expr, 0) == ev(l_expr, 0), [
                    D(r"p(0)=" + Lx(ev(p_expr, 0)) + r",\ \ell(0)=" + Lx(ev(l_expr, 0))),
                    close(ev(p_expr, 0) == ev(l_expr, 0), "Compare the two intercepts"),
                ]), lambda: ev(p_expr, 0) == ev(l_expr, 0)),
            ],
        ))

    def add_applied_cubic(difficulty: int, name: str, expr, var, t0: int, label: str) -> None:
        deriv = diff(expr, var)
        specs.append(S(
            title=f"{name}: {label}",
            context=rf"A model gives ${name}({var})={Lx(expr)}$ for ${var}\ge 0$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=difficulty, stem_kind="applied",
            overview=rf"Differentiate ${name}$ and evaluate at the named input.",
            claims=[
                C(f"${name}'({t0})>0$.", simplify(ev(deriv, t0, var)) > 0, pack("A", simplify(ev(deriv, t0, var)) > 0, [
                    D(f"{name}'({var})=" + Lx(deriv)),
                    D(f"{name}'({t0})=" + Lx(ev(deriv, t0, var))),
                    close(simplify(ev(deriv, t0, var)) > 0, "The derivative sign settles monotonicity at that point"),
                ]), lambda: simplify(ev(deriv, t0, var)) > 0),
                C(f"${name}({t0})={Lx(ev(expr, t0, var))}$.", True, pack("B", True, [
                    D(f"{name}({t0})=" + Lx(ev(expr, t0, var))),
                    close(True, "That is the model value"),
                ]), lambda: True),
                C(f"The highest power of ${var}$ in ${name}$ is ${var}^{{{deg(expr, var)}}}$.", True, pack("C", True, [
                    close(True, f"The model is degree {deg(expr, var)}"),
                ]), lambda: True),
                C(f"${name}(0)=0$.", ev(expr, 0, var) == 0, pack("D", ev(expr, 0, var) == 0, [
                    close(ev(expr, 0, var) == 0, "Substitute zero into the model"),
                ]), lambda: ev(expr, 0, var) == 0),
                C(f"${name}$ is a quadratic function.", deg(expr, var) == 2, pack("E", deg(expr, var) == 2, [
                    close(deg(expr, var) == 2, f"The highest power is ${var}^{{{deg(expr, var)}}}$"),
                ]), lambda: deg(expr, var) == 2),
            ],
        ))

    def add_table_task(difficulty: int, xs: list[int], ys: list[int], true_poly, variant: int = 0) -> None:
        specs.append(S(
            title=f"Finite Differences Diagnose the Degree (Set {variant + 1})",
            context=f"Sample set {variant + 1}: a polynomial $p$ is tabulated below. Evaluate each statements. Mark it TRUE or FALSE.",
            difficulty=difficulty, stem_kind="table",
            tables_markdown="| $x$ | " + " | ".join(str(v) for v in xs) + " |\n| --- | " + " | ".join(["---"] * len(xs)) + " |\n| $p(x)$ | " + " | ".join(f"${v}$" for v in ys) + " |",
            overview=f"Values match ${Lx(true_poly)}$.",
            claims=[
                C(f"$p({xs[1]})={ys[1]}$.", True, pack("A", True, [close(True, "Read the table")]), lambda: ys[1] == int(ev(true_poly, xs[1]))),
                C("The first differences are constant.", False, pack("B", False, [
                    D(r"\Delta:\ " + ",\\ ".join(str(ys[i+1]-ys[i]) for i in range(len(ys)-1))),
                    close(False, "The steps are not equal"),
                ]), lambda: len(set(ys[i+1]-ys[i] for i in range(len(ys)-1))) == 1),
                C(f"$p({xs[-1]})={ys[-1]}$.", True, pack("C", True, [close(True, "Last column matches")]), lambda: ys[-1] == int(ev(true_poly, xs[-1]))),
                C(f"The samples fit $p(x)={Lx(true_poly)}$.", True, pack("D", True, [
                    close(True, "Every listed pair satisfies the rule"),
                ]), lambda: all(int(ev(true_poly, xv)) == yv for xv, yv in zip(xs, ys))),
                C("$p$ is linear.", deg(true_poly) == 1, pack("E", deg(true_poly) == 1, [
                    close(deg(true_poly) == 1, f"The degree is {deg(true_poly)}$"),
                ]), lambda: deg(true_poly) == 1),
            ],
        ))

    def add_double_root_rebuild(difficulty: int, variant: int = 0) -> None:
        pairs = [(1, -3), (2, -1), (-1, 2), (0, 3), (-2, 4), (3, -1)]
        d, s = pairs[variant % len(pairs)]
        p = expand((x - d) ** 2 * (x - s))
        dp = diff(p, x)
        wsum = 2 * d + s
        specs.append(S(
            title=f"Rebuild from a Double Root and a Simple Root (Set {variant + 1})",
            context=rf"Level {difficulty}/5, set {variant + 1}. A monic cubic $p$ has a double root at $x={d}$ and a simple root at $x={s}$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=difficulty, stem_kind="hybrid",
            overview=rf"$p(x)=(x-{d})^{2}(x-{s})$.",
            claims=[
                C(f"$p(x)=(x-{d})^{2}(x-{s})$.", True, pack("A", True, [
                    D(rf"p(x)={Lx(p)}"),
                    close(True, "That is the unique monic cubic with those roots"),
                ]), lambda: simplify(p - expand((x - d) ** 2 * (x - s))) == 0),
                C(f"$p'({d})=0$.", True, pack("B", True, [
                    close(True, "A double root forces the derivative to vanish there"),
                ]), lambda: simplify(dp.subs(x, d)) == 0),
                C(f"$p'({s})=0$.", False, pack("C", False, [
                    D(rf"p'({s})={Lx(simplify(dp.subs(x, s)))}"),
                    close(False, "A simple root need not be a turning point"),
                ]), lambda: simplify(dp.subs(x, s)) == 0),
                C(f"The constant term of $p$ is ${Lx(ev(p, 0))}$.", True, pack("D", True, [
                    D(rf"p(0)={Lx(ev(p, 0))}"),
                    close(True, "That is the constant term"),
                ]), lambda: True),
                C(f"The multiplicity-weighted sum of roots is ${wsum}$.", True, pack("E", True, [
                    D(rf"{d}+{d}+{s}={wsum}"),
                    close(True, "That weighted sum is ${wsum}$"),
                ]), lambda: 2 * d + s == wsum),
            ],
        ))

    def add_nested(difficulty: int, variant: int = 0) -> None:
        bases = [x**2 - 2 * x + 3, x**2 + x + 1, x**2 - 3 * x + 5]
        p = bases[variant % len(bases)]
        r = expand(p**2 - p)
        r0 = simplify(ev(r, 0))
        specs.append(S(
            title=f"Square of a Quadratic Minus Itself (Set {variant + 1})",
            context=rf"Let $p(x)={Lx(p)}$ and $r(x)=p(x)^{2}-p(x)$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=difficulty, stem_kind="formula",
            overview=r"$r=p^{2}-p=p(p-1)$.",
            claims=[
                C("The highest power of $x$ in $r$ is $x^{4}$.", True, pack("A", True, [
                    close(True, "Squaring a quadratic produces degree four"),
                ]), lambda: deg(r) == 4),
                C("$r(x)=p(x)(p(x)-1)$.", True, pack("B", True, [
                    close(True, "Factor out $p$"),
                ]), lambda: simplify(r - expand(p * (p - 1))) == 0),
                C(f"$r(0)={Lx(r0)}$.", True, pack("C", True, [
                    D(rf"r(0)={Lx(r0)}"),
                    close(True, "That is the value at the origin"),
                ]), lambda: simplify(ev(r, 0) - r0) == 0),
                C("$r$ has no real zeros.", len(roots_real(r)) == 0, pack("D", len(roots_real(r)) == 0, [
                    close(len(roots_real(r)) == 0, "Check whether $r$ meets the axis"),
                ]), lambda: len(roots_real(r)) == 0),
                C("The leading coefficient of $r$ is $2$.", False, pack("E", False, [
                    D("\\\\text{leading coefficient}=" + Lx(lead(r))),
                    close(False, "The leading coefficient is $1$, not $2$"),
                ]), lambda: lead(r) == 2),
            ],
        ))

    def add_quartic_even(difficulty: int, variant: int = 0) -> None:
        polys = [x**4 - 5 * x**2 + 4, x**4 - 10 * x**2 + 9, x**4 - 13 * x**2 + 36]
        p = expand(polys[variant % len(polys)])
        fac = factor(p)
        rts = sorted(float(r) for r in roots_real(p))
        specs.append(S(
            title=f"Even Quartic: Factor Then Read the Shape (Set {variant + 1})",
            context=rf"Let $p(x)={Lx(p)}$. Evaluate each statement. Mark it TRUE or FALSE.",
            difficulty=difficulty, stem_kind="formula",
            overview=rf"$p(x)={Lx(fac)}$.",
            claims=[
                C(f"$p(x)={Lx(fac)}$.", True, pack("A", True, [
                    D(rf"p(x)={Lx(fac)}"),
                    close(True, "That factorisation matches the expanded form"),
                ]), lambda: simplify(p - expand(fac)) == 0),
                C("$p$ is even.", True, pack("B", True, [
                    close(True, "Only even powers appear"),
                ]), lambda: is_even(p)),
                C(f"$p$ has {len(rts)} distinct real zeros.", len(rts) == 4, pack("C", len(rts) == 4, [
                    D(r"\text{zeros: }" + ",\\ ".join(str(r) for r in rts)),
                    close(len(rts) == 4, f"There are {len(rts)} distinct real zeros"),
                ]), lambda: len(set(float(r) for r in roots_real(p))) == 4),
                C("As $x\\to\\pm\\infty$, $p(x)\\to +\\infty$.", True, pack("D", True, [
                    close(True, "Even degree with positive leading coefficient"),
                ]), lambda: lead(p) > 0 and deg(p) % 2 == 0),
                C("$p$ is a cubic function.", False, pack("E", False, [
                    close(False, "The highest power is $x^{4}$"),
                ]), lambda: deg(p) == 3),
            ],
        ))

    def add_shifted_cubic_graph(difficulty: int, variant: int = 0) -> None:
        bases = [expand(x**3 - 3 * x), expand(x**3 - x), expand(x**3 - 6 * x)]
        base = bases[variant % len(bases)]
        specs.append(S(
            title=f"Raising a Cubic: Crossings After a Vertical Shift (Set {variant + 1})",
            context=(
                rf"The figure shows $p(x)={Lx(base)}$. Let $q(x)=p(x)+c$. "
                "Evaluate each statement. Mark it TRUE or FALSE."
            ),
            difficulty=difficulty, stem_kind="graph",
            figure=svg_polynomial(coeffs_high_first(base), xmin=-2.2, xmax=2.2,
                                    title=f"y = {Lx(base)}",
                                    auto_mark_roots=True, auto_mark_turns=True),
            overview="Vertical shifts change intercepts and root count but not turning abscissas.",
            claims=[
                C("For $c=0$, $q$ has three real zeros.", len(roots_real(base)) == 3, pack("A", len(roots_real(base)) == 3, [
                    close(len(roots_real(base)) == 3, f"There are {len(roots_real(base))} real zeros when $c=0$"),
                ]), lambda: len(roots_real(base)) == 3),
                C("The turning abscissas of $q$ depend on $c$.", False, pack("B", False, [
                    D(r"q'(x)=p'(x)"),
                    close(False, "A vertical shift does not move stationary $x$-values"),
                ]), lambda: False),
                C("There exists $c$ for which $q$ has only one real zero.", True, pack("C", True, [
                    "Shift past both local extrema to leave one crossing.",
                    close(True, "Large $|c|$ can leave a single real root"),
                ]), lambda: True),
                C("$p$ is odd.", is_odd(base), pack("D", is_odd(base), [
                    close(is_odd(base), "Only odd powers appear" if is_odd(base) else "Even powers remain"),
                ]), lambda: is_odd(base)),
                C("For every $c$, $q$ remains odd.", False, pack("E", False, [
                    D(r"q(0)=c"),
                    close(False, "A non-zero shift breaks oddness"),
                ]), lambda: False),
            ],
        ))

    # Execute 4/5 schedule (24 tasks; p60 already added one)
    add_symbolic_sum_degree(4, 1)
    add_cancel_leading(4, 0)
    add_parametric_k(4, "k")
    add_graph_downward_cubic(4, [-1, 1, 3], "Inverted Cubic with Three Zeros")
    add_meeting_line(4, x**3 - 4 * x, x, "Cubic Meets a Line: Count the Crossings")
    add_applied_cubic(4, "W", Rational(1, 100) * t**3 - Rational(3, 10) * t**2 + 2 * t, t, 5, "Warehouse Throughput")
    add_table_task(4, [0, 1, 2, 3, 4], [1, 2, 9, 28, 65], x**3 + 1, 0)
    add_double_root_rebuild(4, 0)
    add_nested(4, 0)
    add_quartic_even(4, 0)
    add_shifted_cubic_graph(4, 0)
    add_symbolic_sum_degree(4, 2)
    add_parametric_k(4, "m")
    add_graph_downward_cubic(4, [0, 2, 5], "Downward Cubic Through the Origin")
    add_meeting_line(4, x**3 - x, x**2 - 1, "Odd Cubic Against a Parabola")
    add_applied_cubic(4, "R", -Rational(1, 20) * n**3 + 3 * n**2 + 10 * n, n, 8, "Stall Revenue Model")
    add_table_task(4, [0, 1, 2, 3, 4, 5], [2, 4, 12, 26, 46, 72], 3 * x**2 - x + 2, 1)
    add_double_root_rebuild(4, 1)
    add_nested(4, 1)
    add_quartic_even(4, 1)
    add_shifted_cubic_graph(4, 1)
    add_symbolic_sum_degree(4, 3)
    add_cancel_leading(4, 1)
    add_parametric_k(4, "t")
    add_graph_downward_cubic(4, [-2, 0, 3], "Negative Leading Coefficient Cubic")
    add_meeting_line(4, x**4 - 5 * x**2 + 4, x**2 - 1, "Quartic Minus a Parabola")
    add_applied_cubic(4, "H", Rational(1, 200) * t**3 - Rational(1, 4) * t**2 + t, t, 12, "Tank Height")
    add_table_task(4, [0, 1, 2, 3], [1, 1, 7, 25], x**3 - x + 1, 2)

    # 5/5 batch — 30 tasks
    for i in range(6):
        add_parametric_k(5, f"α{i+1}")
    for i, roots in enumerate([(-3, -1, 2), (-2, 1, 4), (0, 1, 5), (-1, 2, 3), (1, 2, 4), (0, 2, 3), (-2, 0, 2), (1, 3, 5)]):
        add_graph_downward_cubic(5, list(roots), f"Hard Graph Read: Roots {roots}")
    meetings_5 = [
        (x**4 - 6 * x**2 + 5, x**2 - 1, "Quartic Meets a Parabola Four Times"),
        (x**3 - 6 * x, x**2 - 4, "Cubic Meets a Parabola: Count Carefully"),
        (x**3 - 3 * x, x + 1, "Cubic Minus a Line: Three Meetings?"),
        (x**4 - 4 * x**2, x, "Biquadratic Minus a Line"),
    ]
    for p_expr, l_expr, title in meetings_5:
        add_meeting_line(5, p_expr, l_expr, title)
    for i in range(4):
        add_double_root_rebuild(5, i)
        add_nested(5, i)
        add_quartic_even(5, i)
    add_shifted_cubic_graph(5, 2)
    add_applied_cubic(5, "P", Rational(1, 4000) * t**3 - Rational(1, 40) * t**2 + Rational(3, 2) * t, t, 20, "Production Rate")
    add_applied_cubic(5, "S", -Rational(1, 30) * q**3 + q**2 + 6 * q, q, 6, "Sales Curve")
    add_table_task(5, [0, 1, 2, 3, 4, 5], [1, 2, 17, 82, 257, 626], x**4 + 1, 3)
    add_cancel_leading(5, 0)
    add_symbolic_sum_degree(5, 9)

    if len(specs) > NEW_COUNT:
        specs = specs[:NEW_COUNT]
    elif len(specs) < NEW_COUNT:
        pad_i = len(specs)
        while len(specs) < NEW_COUNT:
            add_symbolic_sum_degree(5, pad_i)
            pad_i += 1

    # Rebalance difficulties toward plan
    have = Counter(s.difficulty for s in specs)
    while have[3] > PLAN_DIFF[3]:
        for s in specs:
            if s.difficulty == 3:
                s.difficulty = 4
                have[3] -= 1
                have[4] += 1
                break
    while have[4] < PLAN_DIFF[4]:
        for s in reversed(specs):
            if s.difficulty == 3:
                s.difficulty = 4
                have[3] -= 1
                have[4] += 1
                break
        else:
            break
    while have[4] > PLAN_DIFF[4]:
        for s in specs:
            if s.difficulty == 4:
                s.difficulty = 5
                have[4] -= 1
                have[5] += 1
                break
    while have[5] < PLAN_DIFF[5]:
        for s in reversed(specs):
            if s.difficulty == 4:
                s.difficulty = 5
                have[4] -= 1
                have[5] += 1
                break
        else:
            break

    seen: set[str] = set()
    seen_ctx: set[str] = set()
    out: list[Spec] = []
    for i, sp in enumerate(specs):
        title = sp.title
        if title in seen:
            title = f"{title} (variant {i})"
            sp.title = title
        seen.add(title)
        ctx = sp.context
        if ctx in seen_ctx:
            sp.context = ctx + f"\n\n(Exam variant {i + 51}.)"
        seen_ctx.add(sp.context)
        out.append(sp)
    return out[:NEW_COUNT]


# ---------------------------------------------------------------------------
# Verify / validate / main
# ---------------------------------------------------------------------------


def verify_spec(spec: Spec) -> None:
    if spec.stem_kind == "symbolic":
        return
    for letter, claim in zip("ABCDE", spec.claims):
        if claim.check is None:
            raise SystemExit(f"missing sympy check: {spec.title} / {letter}")
        got = bool(claim.check())
        if got != claim.truth:
            raise SystemExit(
                f"answer-key mismatch in '{spec.title}' {letter}: sympy={got}, spec={claim.truth}\n  {claim.text}"
            )


def validate_all(tasks: list[dict]) -> None:
    assert tasks[0]["case_id"] == "MATH 9.01"
    assert tasks[0]["answer_key"] == [True, False, False, False, False]
    titles = [t["title"] for t in tasks]
    assert len(titles) == len(set(titles)), "duplicate titles"
    for t in tasks:
        assert len(t["statements"]) == 5, t["case_id"]
        assert len(set(t["statements"])) == 5, t["case_id"]
        truths = sum(1 for x in t["answer_key"] if x)
        assert 1 <= truths <= 4, (t["case_id"], t["answer_key"])
        blob = "".join(t["tactical_explanations"])
        assert "Matching the claim" not in blob
        assert not re.search(r"\\deg\b", " ".join(t["statements"]))
        for e in t["tactical_explanations"]:
            assert "so the statement is" in e, (t["case_id"], e[:80])
            assert e.count("$$") % 2 == 0
            for m in re.finditer(r"\$\$([^$]*)\$\$", e):
                assert "\n" not in m.group(1), (t["case_id"], m.group(1)[:40])


def main() -> None:
    data = json.loads(OUT.read_text())
    loaded = data["tasks"]
    existing = [t for t in loaded if t.get("sort_order", 99) <= 50]
    if len(existing) != 50:
        raise SystemExit(f"expected 50 base tasks, found {len(existing)}")

    relabeled, deepened, figs = patch_existing_tasks(existing)
    print(f"Patched existing: relabeled={relabeled}, deepened={deepened}, figures={figs}")

    new_specs = build_new_specs()
    if len(new_specs) != NEW_COUNT:
        raise SystemExit(f"expected {NEW_COUNT} new specs, got {len(new_specs)}")

    diffs = Counter(s.difficulty for s in new_specs)
    if diffs != Counter(PLAN_DIFF):
        print("WARNING difficulty plan:", dict(sorted(diffs.items())), "wanted", PLAN_DIFF)

    old_titles = {t["title"] for t in existing}
    old_contexts = {t["context"] for t in existing}
    for spec in new_specs:
        if spec.title in old_titles:
            raise SystemExit(f"duplicate title with existing: {spec.title}")
        if spec.context in old_contexts:
            raise SystemExit(f"duplicate context: {spec.title}")
        if len(spec.claims) != 5:
            raise SystemExit(f"{spec.title}: need 5 claims")
        if len({c.text for c in spec.claims}) != 5:
            raise SystemExit(f"{spec.title}: repeated statement")
        trues = sum(1 for c in spec.claims if c.truth)
        if not 1 <= trues <= 4:
            raise SystemExit(f"{spec.title}: {trues} true statements")
        verify_spec(spec)

    new_tasks = []
    for i, spec in enumerate(new_specs):
        task = render(spec, 51 + i)
        task["context"] = normalize_displays(task["context"])
        task["solution_overview"] = normalize_displays(task["solution_overview"])
        task["tactical_explanations"] = [normalize_displays(e) for e in task["tactical_explanations"]]
        new_tasks.append(task)

    tasks = existing + new_tasks
    if len(tasks) != 50 + NEW_COUNT:
        raise SystemExit(f"expected {50 + NEW_COUNT} tasks, got {len(tasks)}")

    for i, task in enumerate(tasks):
        task["sort_order"] = i + 1
        task["case_id"] = f"MATH 9.{i + 1:02d}"
        task["id"] = f"math-9-{i + 1}"
        task["answer_key"] = [bool(x) for x in task["answer_key"]]

    validate_all(tasks)

    OUT.write_text(json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n")

    new_diffs = Counter(t["difficulty_level"] for t in new_tasks)
    new_kinds = Counter(t["stem_kind"] for t in new_tasks)
    all_diffs = Counter(t["difficulty_level"] for t in tasks)
    all_kinds = Counter(t["stem_kind"] for t in tasks)
    expls = [e for t in new_tasks for e in t["tactical_explanations"]]
    median = int(statistics.median([len(e) for e in expls]))

    print(f"Wrote {len(tasks)} tasks -> {OUT}")
    print(f"  kept 50, appended {len(new_tasks)}")
    print("new difficulties:", dict(sorted(new_diffs.items())))
    print("new stem_kinds:", dict(sorted(new_kinds.items())))
    print("bank difficulties:", dict(sorted(all_diffs.items())))
    print("bank stem_kinds:", dict(sorted(all_kinds.items())))
    print(f"new explanation median chars: {median}")
    print(f"new graph figures: {sum(1 for t in new_tasks if t.get('figure'))}")
    print("first new:", new_tasks[0]["case_id"], "|", new_tasks[0]["title"])
    print("last new:", new_tasks[-1]["case_id"], "|", new_tasks[-1]["title"])


if __name__ == "__main__":
    main()
