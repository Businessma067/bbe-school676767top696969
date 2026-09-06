#!/usr/bin/env python3
"""Chapter 10.2 — Logarithmic functions: diverse letter-heavy T/F builders.

Exports:
    LOG_COUNT = 49
    build_log_tasks() -> list[dict]  # exactly 49 task dicts

Quality bar matches Ch7/Ch9: letters, multi-conditions, varied stem kinds.
Does not write the JSON bank file.
"""
from __future__ import annotations

import base64
import json
import math
import sys
import zlib
from collections import Counter
from pathlib import Path
from typing import Any

from sympy import Symbol, expand_log, log, simplify, solve

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch10_svg import log_curve, svg_curves, svg_log  # noqa: E402

LOG_COUNT = 49
MARK = "Evaluate each statement. Mark it TRUE or FALSE."
LETTERS = "ABCDE"

a = Symbol("a", positive=True)
b = Symbol("b", positive=True)
k = Symbol("k", real=True)

_SPECS_BLOB = """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"""
SPECS: list[dict[str, Any]] = json.loads(
    zlib.decompress(base64.b64decode(_SPECS_BLOB)).decode("utf-8")
)


def _pack(letter: str, truth: bool, body: str) -> str:
    verd = "True" if truth else "False"
    body = body.strip().replace("\\n", "\n")
    if "so the statement is" not in body.lower():
        body = body.rstrip(".") + f".\n\nSo the statement is {verd}."
    return f"**{letter}.** → {verd}\n\n{body}"


def _task(
    *,
    title: str,
    context: str,
    statements: list[str],
    answer_key: list[bool],
    bodies: list[str],
    overview: str,
    stem_kind: str,
    figure: str | None = None,
    tables_markdown: str | None = None,
) -> dict[str, Any]:
    assert len(statements) == len(answer_key) == len(bodies) == 5
    assert all(isinstance(bit, bool) for bit in answer_key)
    ctx = context.strip()
    if MARK not in ctx:
        if not ctx.endswith("."):
            ctx += "."
        ctx += " " + MARK
    out: dict[str, Any] = {
        "title": title,
        "context": ctx,
        "statements": statements,
        "answer_key": list(answer_key),
        "tactical_explanations": [
            _pack(LETTERS[i], answer_key[i], bodies[i]) for i in range(5)
        ],
        "solution_overview": overview.strip(),
        "stem_kind": stem_kind,
    }
    if figure is not None:
        out["figure"] = figure
    if tables_markdown is not None:
        out["tables_markdown"] = tables_markdown
    return out


def _ln(val: float) -> float:
    return math.log(val)


def _logb(val: float, base: float) -> float:
    return math.log(val, base)


assert simplify(expand_log(log(a * b) - log(a) - log(b))) == 0
assert simplify(expand_log(log(a / b) - log(a) + log(b))) == 0
assert simplify(expand_log(log(a**k) - k * log(a), force=True)) == 0
assert set(solve(Symbol("u") ** 2 - 5 * Symbol("u") + 6, Symbol("u"))) == {2, 3}


def _fig_log(base: float, xmax: float, title: str, mark: float | None = None) -> str:
    return svg_log(base=base, xmin=0.15, xmax=xmax, title=title, mark_x=mark)


def _fig_inverse(base: float) -> str:
    return svg_curves(
        [
            (lambda tt, bb=base: bb**tt, "#2F5D50", f"{base:g}^t"),
            (
                lambda xx, bb=base: math.log(xx, bb) if xx > 0 else float("nan"),
                "#8B5A2B",
                f"log_{base:g}",
            ),
        ],
        xmin=-1.2,
        xmax=max(4.0, base + 1),
        ymin=-2.5,
        ymax=max(4.0, base + 1),
        title=f"Inverse pair base {base:g}",
        xlabel="input",
        ylabel="output",
        hlines=[0.0],
        vlines=[0.0],
    )


def _fig_two(b1: float, b2: float) -> str:
    return svg_curves(
        [
            (lambda xx, bb=b1: math.log(xx, bb), "#8B5A2B", f"log_{b1:g}"),
            (lambda xx, bb=b2: math.log(xx, bb), "#2F5D50", f"log_{b2:g}", "6 4"),
        ],
        xmin=0.2,
        xmax=10,
        title="Two logarithmic bases",
        xlabel="x",
        ylabel="f(x)",
        hlines=[0.0],
        vlines=[1.0],
    )


def _fig_shift(h: float) -> str:
    return svg_curves(
        [
            (
                lambda xx, hh=h: math.log(xx - hh, 2) if xx > hh else float("nan"),
                "#8B5A2B",
                f"log_2(x-{h:g})",
            )
        ],
        xmin=h - 0.2,
        xmax=h + 8,
        title=f"Shifted log asymptote x={h:g}",
        xlabel="x",
        ylabel="f(x)",
        hlines=[0.0],
        vlines=[h],
    )


def _fig_ray() -> str:
    return svg_curves(
        [
            (lambda xx: math.log(xx, 2), "#8B5A2B", "log_2"),
            (lambda xx: xx / 4, "#2F5D50", "y=x/4", "6 4"),
        ],
        xmin=0.2,
        xmax=8,
        title="log_2 vs ray y=x/4",
        xlabel="x",
        ylabel="y",
        hlines=[0.0],
        marks=[(4, 1, "(4,1)")],
    )


def _fig_elast() -> str:
    return svg_curves(
        [(lambda P: 100 * P ** (-1.5), "#8B5A2B", "Q=A P^{-β}")],
        xmin=0.5,
        xmax=8,
        title="Constant-elasticity demand",
        xlabel="P",
        ylabel="Q",
    )


def _resolve_figure(tag: str | None) -> str | None:
    if not tag:
        return None
    builders = {
        "log2": lambda: _fig_log(2, 8, "f(x)=log_2(x)", 4),
        "log2nest": lambda: _fig_log(2, 20, "nested log_2 context", 16),
        "log3": lambda: log_curve(3.0, 0.2, 12, "log base 3"),
        "log5": lambda: _fig_log(5, 30, "f(x)=log_5(x)", 5),
        "ln": lambda: _fig_log(math.e, 10, "f(x)=ln(x)", math.e),
        "inv2": lambda: _fig_inverse(2),
        "inv3": lambda: _fig_inverse(3),
        "two24": lambda: _fig_two(2, 4),
        "two210": lambda: _fig_two(2, 10),
        "shift1": lambda: _fig_shift(1),
        "shift2": lambda: _fig_shift(2),
        "log2ray": lambda: _fig_ray(),
        "elast": lambda: _fig_elast(),
    }
    return builders[tag]()


def _verify_numeric_keys() -> None:
    assert abs(_logb(4, 2) - 2) < 1e-12
    assert abs(_logb(0.5, 2) + 1) < 1e-12
    assert abs(_ln(8) / _ln(2) - 3) < 1e-9
    assert abs(_logb(_logb(16, 2), 2) - 2) < 1e-12
    assert abs(_logb(_logb(_logb(65536, 2), 2), 2) - 2) < 1e-12
    assert abs(_logb(math.e, math.e) - 1) < 1e-12
    A, beta, P = 7.0, 1.5, 3.0
    Q = A * P ** (-beta)
    P2 = P * 1.001
    Q2 = A * P2 ** (-beta)
    E_approx = (math.log(Q2) - math.log(Q)) / (math.log(P2) - math.log(P))
    assert abs(E_approx + beta) < 1e-3


_verify_numeric_keys()


def build_log_tasks() -> list[dict]:
    """Return exactly 49 task dicts for subsection 10.2."""
    assert len(SPECS) == LOG_COUNT
    tasks: list[dict] = []
    for spec in SPECS:
        bodies = [str(b).replace("\\n", "\n") for b in spec["bodies"]]
        tasks.append(
            _task(
                title=spec["title"],
                context=spec["context"],
                statements=list(spec["statements"]),
                answer_key=list(spec["answer_key"]),
                bodies=bodies,
                overview=spec["overview"],
                stem_kind=spec["stem_kind"],
                figure=_resolve_figure(spec.get("figure_tag")),
                tables_markdown=spec.get("tables_markdown"),
            )
        )
    assert len(tasks) == LOG_COUNT
    return tasks


def _self_check() -> None:
    tasks = build_log_tasks()
    assert len(tasks) == 49
    hist = Counter(sum(t["answer_key"]) for t in tasks)
    assert set(hist) <= {1, 2, 3, 4, 5}
    assert min(hist.values()) >= 8
    kinds = Counter(t["stem_kind"] for t in tasks)
    assert len(kinds) == 10
    figs = sum(1 for t in tasks if t.get("figure"))
    tabs = sum(1 for t in tasks if t.get("tables_markdown"))
    either = sum(1 for t in tasks if t.get("figure") or t.get("tables_markdown"))
    assert figs >= 15
    assert tabs >= 12
    assert either >= int(0.4 * 49)
    for t in tasks:
        assert MARK in t["context"]
        assert len(set(t["statements"])) == 5
        for i, e in enumerate(t["tactical_explanations"]):
            letter = LETTERS[i]
            verd = "True" if t["answer_key"][i] else "False"
            assert e.startswith(f"**{letter}.** → {verd}")
            assert f"So the statement is {verd}." in e
        blob = (
            t["context"]
            + "|"
            + "|".join(t["statements"])
            + "|"
            + t["solution_overview"]
            + "|"
            + "|".join(t["tactical_explanations"])
        )
        assert "\\\\neq" not in blob
        assert "\\\\to" not in blob
        assert "\\\\infty" not in blob
    print(
        "OK",
        len(tasks),
        "true_hist",
        dict(sorted(hist.items())),
        "figs",
        figs,
        "tabs",
        tabs,
        "kinds",
        dict(kinds),
    )


if __name__ == "__main__":
    _self_check()
