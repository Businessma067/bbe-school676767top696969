#!/usr/bin/env python3
"""Independently re-derive the answer keys of the rewritten Chapter 7 stems.

The generator computes each truth value from the coefficients of the model.  This
checker deliberately takes a different route -- sympy's ``solveset``,
``minimum``/``maximum``, ``is_increasing``/``is_decreasing``, ``limit`` and
``interpolate`` -- so a mistake in either implementation shows up as a
disagreement rather than as a plausible-looking explanation.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

from sympy import (
    Eq,
    FiniteSet,
    Interval,
    Poly,
    Rational,
    S,
    Symbol,
    diff,
    expand,
    interpolate,
    is_decreasing,
    is_increasing,
    limit,
    maximum,
    minimum,
    oo,
    simplify,
    solveset,
)
from sympy.parsing.sympy_parser import (
    implicit_multiplication_application,
    parse_expr,
    standard_transformations,
)

x = Symbol("x", real=True)
PATH = Path("/workspace/src/data/math-ch7-linear-quadratic.json")
TRANSFORMS = standard_transformations + (implicit_multiplication_application,)
KINDS = {"parabola", "line", "applied", "table", "rebuild"}


def to_expr(s: str):
    s = s.strip().rstrip(".,;")
    s = s.replace("\\left", "").replace("\\right", "")
    s = re.sub(r"\\frac\{([^{}]+)\}\{([^{}]+)\}", r"((\1)/(\2))", s)
    s = s.replace("^{2}", "**2").replace("^2", "**2")
    s = s.replace("{", "").replace("}", "").replace("\\", "").replace(" ", "")
    s = re.sub(r"(\d)(x)", r"\1*\2", s)
    s = re.sub(r"\)(\d|x)", r")*\1", s)
    return expand(parse_expr(s, local_dict={"x": x}, transformations=TRANSFORMS))


def num(s: str):
    return Rational(to_expr(s))


def real_roots(expr):
    """The real roots as exact sympy numbers (they need not be rational)."""
    sol = solveset(Eq(expr, 0), x, domain=S.Reals)
    if not sol.is_FiniteSet:
        return None
    return sorted(sol, key=float)


def model_of(task: dict):
    ctx = task["context"]
    if task["stem_kind"] == "table":
        pts = []
        for line in (task.get("tables_markdown") or "").splitlines():
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if len(cells) != 2:
                continue
            try:
                pts.append((num(cells[0].strip("$")), num(cells[1].strip("$"))))
            except Exception:
                continue
        rule = expand(interpolate(pts, x))
        return {"name": "y", "expr": rule, "points": pts}

    m = re.search(r"\$([A-Za-z])\(x\)\s*=\s*([^$]+)\$", ctx)
    if m:
        return {"name": m.group(1), "expr": to_expr(m.group(2)), "points": None}

    m = re.search(
        r"parabola \$([A-Za-z])\$ has zeros \$([^$]+)\$ and \$([^$]+)\$ and "
        r"leading coefficient \$([^$]+)\$",
        ctx,
    )
    if m:
        a = num(m.group(4))
        return {
            "name": m.group(1),
            "expr": expand(a * (x - num(m.group(2))) * (x - num(m.group(3)))),
            "points": None,
        }

    m = re.search(
        r"line \$([A-Za-z])\$ has slope \$([^$]+)\$ and passes through the point "
        r"\$\(([^,]+),([^)]+)\)\$",
        ctx,
    )
    if m:
        s, px, py = num(m.group(2)), num(m.group(3)), num(m.group(4))
        return {"name": m.group(1), "expr": expand(s * (x - px) + py), "points": None}

    m = re.search(
        r"parabola \$([A-Za-z])\$ has its vertex at \$\(([^,]+),([^)]+)\)\$ and "
        r"passes through the point \$\(([^,]+),([^)]+)\)\$",
        ctx,
    )
    if m:
        h, k, px, py = (num(m.group(i)) for i in (2, 3, 4, 5))
        a = Rational(py - k, (px - h) ** 2)
        return {"name": m.group(1), "expr": expand(a * (x - h) ** 2 + k), "points": None}

    return None


def check(stmt: str, mod: dict):
    """Return the truth of a statement, or None when no rule recognises it."""
    e = mod["expr"]
    s = stmt.strip()

    m = re.match(r"^The axis of symmetry of \$([A-Za-z])\$ is the line \$x=(.+?)\$\.$", s)
    if m:
        v = num(m.group(2))
        return simplify(e.subs(x, 2 * v - x) - e) == 0

    if re.match(r"^The graph of \$([A-Za-z])\$ is symmetric about the \$y\$-axis\.$", s):
        return simplify(e.subs(x, -x) - e) == 0

    m = re.match(
        r"^The vertex of the graph of \$([A-Za-z])\$ is the point "
        r"\$\\left\((.+?),(.+?)\\right\)\$\.$",
        s,
    )
    if m:
        h, k = num(m.group(2)), num(m.group(3))
        extreme = minimum(e, x) if e.coeff(x, 2) > 0 else maximum(e, x)
        return simplify(e.subs(x, h) - k) == 0 and simplify(extreme - k) == 0

    m = re.match(r"^The graph of \$([A-Za-z])\$ opens (upwards|downwards)\.$", s)
    if m:
        goes_up = limit(e, x, oo) == oo
        return goes_up == (m.group(2) == "upwards")

    m = re.match(r"^The two roots of \$([A-Za-z])\$ add up to \$(.+?)\$\.$", s)
    if m:
        rs = real_roots(e)
        return rs is not None and len(rs) == 2 and simplify(sum(rs) - num(m.group(2))) == 0

    m = re.match(r"^The two roots of \$([A-Za-z])\$ multiply to \$(.+?)\$\.$", s)
    if m:
        rs = real_roots(e)
        return rs is not None and simplify(rs[0] * rs[-1] - num(m.group(2))) == 0

    m = re.match(r"^The roots of \$([A-Za-z])\$ are \$(.+?)\$ and \$(.+?)\$\.$", s)
    if m:
        rs = real_roots(e)
        return rs is not None and FiniteSet(*rs) == FiniteSet(num(m.group(2)), num(m.group(3)))

    m = re.match(r"^The distance between the two roots of \$([A-Za-z])\$ is \$(.+?)\$\.$", s)
    if m:
        rs = real_roots(e)
        return (
            rs is not None
            and len(rs) == 2
            and simplify(abs(rs[1] - rs[0]) - num(m.group(2))) == 0
        )

    m = re.match(
        r"^The equation \$([A-Za-z])\(x\)=0\$ has "
        r"(two distinct real solutions|exactly one real solution|no real solution)\.$",
        s,
    )
    if m:
        rs = real_roots(e) or []
        words = {2: "two distinct real solutions", 1: "exactly one real solution",
                 0: "no real solution"}
        return words[len(rs)] == m.group(2)

    m = re.match(r"^Completing the square gives \$([A-Za-z])\(x\)=(.+?)\$\.$", s)
    if m:
        return simplify(to_expr(m.group(2)) - e) == 0

    m = re.match(r"^Expanding gives \$([A-Za-z])\(x\)=(.+?)\$\.$", s)
    if m:
        return simplify(to_expr(m.group(2)) - e) == 0

    m = re.match(r"^The rule is \$([A-Za-z])\(x\)=(.+?)\$\.$", s)
    if m:
        return simplify(to_expr(m.group(2)) - e) == 0

    m = re.match(r"^The (smallest|largest) value taken by \$([A-Za-z])\$ is \$(.+?)\$\.$", s)
    if m:
        want = minimum(e, x) if m.group(1) == "smallest" else maximum(e, x)
        return want.is_finite and simplify(want - num(m.group(3))) == 0

    m = re.match(r"^The graph of \$([A-Za-z])\$ meets the \$y\$-axis at \$y=(.+?)\$\.$", s)
    if m:
        return e.subs(x, 0) == num(m.group(2))

    m = re.match(r"^\$([A-Za-z])\((.+?)\)=(.+?)\$\.$", s)
    if m and m.group(1) == mod["name"]:
        return e.subs(x, num(m.group(2))) == num(m.group(3))

    m = re.match(
        r"^\$([A-Za-z])\$ is (decreasing|increasing) for every \$x([<>])(.+?)\$\.$", s
    )
    if m:
        v = num(m.group(4))
        iv = Interval.open(-oo, v) if m.group(3) == "<" else Interval.open(v, oo)
        test = is_decreasing if m.group(2) == "decreasing" else is_increasing
        return bool(test(e, iv))

    m = re.match(r"^\$([A-Za-z])\(x\)\\(ge|le) (.+?)\$ holds for every real \$x\$\.$", s)
    if m:
        v = num(m.group(3))
        if m.group(2) == "ge":
            lo = minimum(e, x)
            return lo.is_finite and lo >= v
        hi = maximum(e, x)
        return hi.is_finite and hi <= v

    m = re.match(
        r"^The horizontal line \$y=(.+?)\$ meets the graph of \$([A-Za-z])\$ at "
        r"two different points\.$",
        s,
    )
    if m:
        rs = real_roots(expand(e - num(m.group(1)))) or []
        return len(rs) == 2

    m = re.match(
        r"^The values \$([A-Za-z])\((.+?)\)\$ and \$([A-Za-z])\((.+?)\)\$ are equal\.$", s
    )
    if m:
        return e.subs(x, num(m.group(2))) == e.subs(x, num(m.group(4)))

    m = re.match(r"^The leading coefficient of \$([A-Za-z])\$ is \$(.+?)\$\.$", s)
    if m:
        return e.coeff(x, 2) == num(m.group(2))

    m = re.match(r"^The slope of the graph of \$([A-Za-z])\$ is \$(.+?)\$\.$", s)
    if m:
        return diff(e, x) == num(m.group(2))

    m = re.match(r"^The graph of \$([A-Za-z])\$ crosses the \$x\$-axis at \$x=(.+?)\$\.$", s)
    if m:
        rs = real_roots(e)
        return rs is not None and len(rs) == 1 and simplify(rs[0] - num(m.group(2))) == 0

    m = re.match(r"^\$([A-Za-z])\$ is (increasing|decreasing)\.$", s)
    if m:
        test = is_increasing if m.group(2) == "increasing" else is_decreasing
        return bool(test(e, Interval(-oo, oo)))

    m = re.match(
        r"^Increasing \$x\$ by \$(.+?)\$ always changes \$([A-Za-z])\$ by \$(.+?)\$\.$", s
    )
    if m:
        d = num(m.group(1))
        return simplify(e.subs(x, x + d) - e - num(m.group(3))) == 0

    m = re.match(
        r"^The point \$\\left\((.+?),(.+?)\\right\)\$ lies on the graph of \$([A-Za-z])\$\.$",
        s,
    )
    if m:
        return e.subs(x, num(m.group(1))) == num(m.group(2))

    # --- story wordings ---------------------------------------------------- #

    m = re.match(r"^At \$x=(.+?)\$ the (.+?) equals \$(.+?)\$(?: [a-z]+)?\.$", s)
    if m:
        return e.subs(x, num(m.group(1))) == num(m.group(3))

    m = re.match(r"^The (.+?) equals \$(.+?)\$(?: [a-z]+)? at \$x=(.+?)\$\.$", s)
    if m:
        return e.subs(x, num(m.group(3))) == num(m.group(2))

    m = re.match(r"^Each extra (.+?) changes the (.+?) by \$(.+?)\$(?: [a-z]+)?\.$", s)
    if m:
        return simplify(e.subs(x, x + 1) - e - num(m.group(3))) == 0

    if re.match(r"^Doubling \$x\$ always doubles the (.+?)\.$", s):
        return simplify(e.subs(x, 2 * x) - 2 * e) == 0

    m = re.match(r"^The (.+?) is (largest|smallest) at \$x=(.+?)\$\.$", s)
    if m:
        v = num(m.group(3))
        want = maximum(e, x) if m.group(2) == "largest" else minimum(e, x)
        return want.is_finite and simplify(e.subs(x, v) - want) == 0

    m = re.match(r"^The (largest|smallest) possible (.+?) equals \$(.+?)\$(?: [a-z]+)?\.$", s)
    if m:
        want = maximum(e, x) if m.group(1) == "largest" else minimum(e, x)
        return want.is_finite and simplify(want - num(m.group(3))) == 0

    m = re.match(r"^The (.+?) is zero exactly at \$x=(.+?)\$ and \$x=(.+?)\$\.$", s)
    if m:
        rs = real_roots(e)
        return rs is not None and FiniteSet(*rs) == FiniteSet(num(m.group(2)), num(m.group(3)))

    m = re.match(
        r"^Between \$x=(.+?)\$ and \$x=(.+?)\$ the (.+?) changes at an average rate "
        r"of \$(.+?)\$(?: [a-z]+)? per unit of \$x\$\.$",
        s,
    )
    if m:
        p, q = num(m.group(1)), num(m.group(2))
        rate = (e.subs(x, q) - e.subs(x, p)) / (q - p)
        return simplify(rate - num(m.group(4))) == 0

    m = re.match(
        r"^The (.+?) is positive for every \$x\$ strictly between \$(.+?)\$ and \$(.+?)\$\.$",
        s,
    )
    if m:
        lo, hi = num(m.group(2)), num(m.group(3))
        if lo > hi:
            lo, hi = hi, lo
        inside = all(e.subs(x, lo + (hi - lo) * Rational(i, 8)) > 0 for i in range(1, 8))
        edges = e.subs(x, lo) == 0 and e.subs(x, hi) == 0
        return bool(inside and edges)

    m = re.match(r"^The (.+?) changes by the same amount for every extra (.+?)\.$", s)
    if m:
        return simplify(diff(e, x, 2)) == 0

    if re.match(r"^The (.+?) is never zero\.$", s):
        return not (real_roots(e) or [])

    # --- table wordings ---------------------------------------------------- #

    pts = mod.get("points")
    if pts:
        ys = [p[1] for p in pts]
        xs = [p[0] for p in pts]
        d1 = [ys[i + 1] - ys[i] for i in range(len(ys) - 1)]
        d2 = [d1[i + 1] - d1[i] for i in range(len(d1) - 1)]
        deg = Poly(e, x).degree()

        if re.match(r"^The first differences of the \$y\$-values are constant\.$", s):
            return len(set(d1)) == 1

        m = re.match(
            r"^The second differences of the \$y\$-values are constant and equal to "
            r"\$(.+?)\$\.$",
            s,
        )
        if m:
            return len(set(d2)) == 1 and d2[0] == num(m.group(1))

        m = re.match(r"^The table is consistent with a (linear|quadratic) model\.$", s)
        if m:
            return deg == (1 if m.group(1) == "linear" else 2)

        m = re.match(r"^The table is produced by the rule \$y=(.+?)\$\.$", s)
        if m:
            claimed = to_expr(m.group(1))
            return all(claimed.subs(x, a) == b for a, b in pts)

        m = re.match(r"^A linear rule through the table has slope \$(.+?)\$\.$", s)
        if m:
            return deg == 1 and diff(e, x) == num(m.group(1))

        m = re.match(
            r"^A quadratic rule through the table has leading coefficient \$(.+?)\$\.$", s
        )
        if m:
            return deg == 2 and e.coeff(x, 2) == num(m.group(1))

        m = re.match(
            r"^The average rate of change between \$x=(.+?)\$ and \$x=(.+?)\$ is \$(.+?)\$\.$",
            s,
        )
        if m:
            p, q = num(m.group(1)), num(m.group(2))
            table = dict(pts)
            return Rational(table[q] - table[p], q - p) == num(m.group(3))

        m = re.match(r"^Continuing the pattern, the value at \$x=(.+?)\$ is \$(.+?)\$\.$", s)
        if m:
            return e.subs(x, num(m.group(1))) == num(m.group(2))

        m = re.match(
            r"^The \$y\$-values in the table are (largest|smallest) at \$x=(.+?)\$\.$", s
        )
        if m:
            target = max(ys) if m.group(1) == "largest" else min(ys)
            spot = num(m.group(2))
            return dict(pts).get(spot) == target and ys.count(target) == 1

    return None


def main() -> None:
    tasks = json.loads(PATH.read_text())["tasks"]
    checked = unmatched = 0
    problems = []

    for t in tasks:
        if t.get("stem_kind") not in KINDS:
            continue
        mod = model_of(t)
        if mod is None:
            problems.append(f"{t['case_id']}: could not recover the model from the stem")
            continue
        for i, stmt in enumerate(t["statements"]):
            letter = "ABCDE"[i]
            got = check(stmt, mod)
            if got is None:
                unmatched += 1
                problems.append(f"{t['case_id']} {letter}: no independent rule for: {stmt}")
                continue
            checked += 1
            if bool(got) != bool(t["answer_key"][i]):
                problems.append(
                    f"{t['case_id']} {letter}: key says {t['answer_key'][i]} but sympy "
                    f"says {bool(got)} for: {stmt}"
                )

    print(f"statements re-derived independently: {checked}")
    print(f"statements without an independent rule: {unmatched}")
    if problems:
        print("\nproblems:")
        for p in problems:
            print("  " + p)
        raise SystemExit(1)
    print("every rewritten answer key agrees with sympy")


if __name__ == "__main__":
    main()
