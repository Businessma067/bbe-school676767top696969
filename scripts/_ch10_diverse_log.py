#!/usr/bin/env python3
"""Chapter 10.2 — HARD logarithmic exam bank (from-scratch rewrite).

Exports:
    LOG_COUNT = 49
    build_log_tasks() -> list[dict]  # exactly 49 task dicts

Every claim requires multi-step work (COB chains, nested peels, domain
inequalities, table→base recovery, graph-tick arithmetic). Explanations
follow Ch7/Ch9 teacher voice. Does not write the JSON bank file.
"""
from __future__ import annotations

import math
import re
import sys
from collections import Counter
from pathlib import Path
from typing import Any, Callable

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch10_svg import log_curve, svg_curves, svg_log  # noqa: E402

LOG_COUNT = 49
LETTERS = "ABCDE"
TAIL = "Evaluate each statement. Mark it TRUE or FALSE."

_FORBIDDEN = [
    "the graph is decreasing",
    "is the graph a straight line",
    "is it decreasing",
    "the asymptote is visible",
    "meets the axis at",
    "log(ab)=log a+log b",
    r"\log(ab)=\log a+\log b",
    "ln e=1",
    r"\ln e=1",
]


def D(s: str) -> str:
    return f"$${s}$$"


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    verd = "True" if truth else "False"
    body = "\n\n".join(p.strip() for p in parts if p and str(p).strip()).strip()
    if body.endswith("$$"):
        return f"**{letter}.** → {verd}\n\n{body}\n\nSo the statement is {verd}."
    body = body.rstrip(".")
    return f"**{letter}.** → {verd}\n\n{body}.\n\nSo the statement is {verd}."


def _ensure_tail(context: str) -> str:
    ctx = context.strip()
    if "TRUE or FALSE" not in ctx:
        if not ctx.endswith("."):
            ctx += "."
        ctx += " " + TAIL
    return ctx


def make_task(
    *,
    title: str,
    context: str,
    statements: list[str],
    answer_key: list[bool],
    bodies: list[list[str]],
    solution_overview: str,
    stem_kind: str,
    figure: str | None = None,
    tables_markdown: str | None = None,
) -> dict[str, Any]:
    assert len(statements) == 5 and len(answer_key) == 5 and len(bodies) == 5
    teas = [pack(LETTERS[i], answer_key[i], bodies[i]) for i in range(5)]
    task: dict[str, Any] = {
        "title": title,
        "context": _ensure_tail(context),
        "statements": statements,
        "answer_key": answer_key,
        "tactical_explanations": teas,
        "solution_overview": solution_overview.strip(),
        "stem_kind": stem_kind,
    }
    if figure is not None:
        task["figure"] = figure
    if tables_markdown is not None:
        task["tables_markdown"] = tables_markdown
    return task


def _fig_log2_mark4() -> str:
    return svg_log(base=2, xmin=0.2, xmax=10, title="f(x)=log_2(x)", mark_x=4)


def _fig_log3() -> str:
    return log_curve(3.0, 0.2, 12, "f(x)=log_3(x)")


def _fig_log5() -> str:
    return svg_log(base=5, xmin=0.3, xmax=30, title="f(x)=log_5(x)", mark_x=25)


def _fig_two_bases() -> str:
    return svg_curves(
        [
            (lambda x: math.log(x, 2), "#8B5A2B", "log_2"),
            (lambda x: math.log(x, 4), "#2F5D50", "log_4", "6 4"),
        ],
        xmin=0.25,
        xmax=16,
        title="log_2 versus log_4",
        xlabel="x",
        ylabel="f(x)",
        hlines=[0.0],
        vlines=[1.0],
        marks=[(4, 2, ""), (16, 4, ""), (16, 2, "")],
    )


def _fig_shift() -> str:
    return svg_curves(
        [
            (
                lambda x: math.log(x - 2, 2) if x > 2 else float("nan"),
                "#8B5A2B",
                "log_2(x-2)",
            )
        ],
        xmin=1.5,
        xmax=12,
        title="Shifted logarithm log_2(x-2)",
        xlabel="x",
        ylabel="f(x)",
        hlines=[0.0],
        vlines=[2.0],
        marks=[(6, 2, ""), (4, 1, "")],
    )


def _fig_ln() -> str:
    return svg_log(base=math.e, xmin=0.2, xmax=10, title="f(x)=ln(x)", mark_x=math.e)


def _fig_inv_pair() -> str:
    return svg_curves(
        [
            (lambda t: 2**t, "#2F5D50", "2^t"),
            (lambda x: math.log(x, 2) if x > 0 else float("nan"), "#8B5A2B", "log_2"),
        ],
        xmin=-1.5,
        xmax=4.5,
        ymin=-2.0,
        ymax=4.5,
        title="Inverse pair base 2",
        xlabel="input",
        ylabel="output",
        hlines=[0.0],
        vlines=[0.0],
        marks=[(2, 1, ""), (4, 2, "")],
    )


def _fig_ray_cross() -> str:
    return svg_curves(
        [
            (lambda x: math.log(x, 2), "#8B5A2B", "log_2"),
            (lambda x: x / 4, "#2F5D50", "y=x/4", "6 4"),
        ],
        xmin=0.25,
        xmax=18,
        title="log_2 against the ray y=x/4",
        xlabel="x",
        ylabel="y",
        hlines=[0.0],
        marks=[(16, 4, "")],
    )



def t01_graph_log2_ticks() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Base-two logarithm — tick arithmetic on the figure',
        context='The figure shows $f(x)=\\log_{2}x$. Marks and axis ticks are exact. Use $f(2^{t})=t$ and change of base to judge the claims.',
        statements=[
            '$f(4)+f(8)=f(32)$.',
            'The equality $f(6)=f(2)+f(3)$ fails even though $6=2\\cdot 3$.',
            'The unique solution of $f(x)=3$ on $(0,\\infty)$ is $x=8$.',
            '$f(1/8)=-3$.',
            '$f(10)/f(2)=2$.'
        ],
        answer_key=key,
        bodies=[
            [
                'Evaluate at powers of two: $f(4)=2$, $f(8)=3$, $f(32)=5$.',
                '$$f(4)+f(8)=2+3=5=f(32)$$',
            ],
            [
                'The product rule applies to every positive pair.',
                '$$f(2\\cdot 3)=f(2)+f(3)\\implies f(6)=f(2)+f(3)$$',
                'So the equality holds; the claim that it fails is false.',
            ],
            [
                'Solve $f(x)=3$.',
                '$$\\log_{2}x=3\\implies x=2^{3}=8$$',
                'Bijectivity of $f$ onto $\\mathbb{R}$ gives uniqueness.',
            ],
            [
                'Write $1/8=2^{-3}$.',
                '$$f(1/8)=\\log_{2}(2^{-3})=-3$$',
            ],
            [
                'Here $f(2)=1$, so the left side is $f(10)=\\log_{2}10$.',
                '$$\\log_{2}10=1+\\log_{2}5$$',
                'Since $2^{2}=4\\neq 5$, one has $\\log_{2}5\\neq 2$, hence $\\log_{2}10\\neq 2$.',
            ]
        ],
        solution_overview='Powers of two give $f(4)=2$, $f(8)=3$, $f(32)=5$, and $f(1/8)=-3$. The product rule confirms $f(6)=f(2)+f(3)$. Solving $f(x)=3$ yields $x=8$. Finally $\\log_{2}10\\neq 2$ because $2^{2}=4\\neq 10$.',
        stem_kind='graph',
        figure=_fig_log2_mark4(),
    )


def t02_table_recover_base() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Recover the logarithmic base from a three-point table',
        context='A function $y=\\log_{b}x$ with unknown base $b>0$, $b\\neq 1$, produces the table. Recover $b$, then judge each claim.',
        statements=[
            'The unique admissible base is $b=2$.',
            '$\\log_{b}32=5$.',
            '$\\log_{b}(1/16)=-3$.',
            '$\\dfrac{\\ln 9}{\\ln b}=2\\log_{b}3$.',
            '$b^{3}=6$.'
        ],
        answer_key=key,
        bodies=[
            [
                'From $\\log_{b}4=2$ one gets $b^{2}=4$. With $b>0$ and $b\\neq 1$,',
                '$$b=2$$',
                'Checks: $2^{4}=16$ and $2^{-1}=1/2$.',
            ],
            [
                '$$\\log_{2}32=\\log_{2}(2^{5})=5$$',
            ],
            [
                '$$\\log_{2}(1/16)=\\log_{2}(2^{-4})=-4\\neq -3$$',
            ],
            [
                '$$\\frac{\\ln 9}{\\ln b}=\\log_{b}9=\\log_{b}(3^{2})=2\\log_{b}3$$',
            ],
            [
                'With $b=2$, one has $b^{3}=8\\neq 6$.',
            ]
        ],
        solution_overview='The pair $(4,2)$ forces $b=2$; the other columns confirm. Then $\\log_{2}32=5$, $\\log_{2}(1/16)=-4$, and $\\ln 9/\\ln b=2\\log_{b}3$. Finally $2^{3}=8\\neq 6$.',
        stem_kind='table',
        tables_markdown='| $x$ | $4$ | $16$ | $\\tfrac{1}{2}$ |\n| --- | --- | --- | --- |\n| $y=\\log_{b}x$ | $2$ | $4$ | $-1$ |',
    )


def t03_symbolic_quadratic_log() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Product consolidation turns a log equation into a quadratic',
        context='Consider $\\log_{2}(x-1)+\\log_{2}(x+1)=3$ on the natural domain $x>1$. Solve algebraically, then judge the claims.',
        statements=[
            'On $x>1$ the equation is equivalent to $x^{2}-1=8$.',
            'Both $x=3$ and $x=-3$ are admissible solutions.',
            'The unique solution in the natural domain is $x=3$.',
            'At that solution, $\\log_{2}(x-1)=1$ and $\\log_{2}(x+1)=2$.',
            '$x=\\sqrt{7}$ also solves the equation on $x>1$.'
        ],
        answer_key=key,
        bodies=[
            [
                'On $x>1$ both arguments are positive, so consolidate.',
                '$$\\log_{2}(x^{2}-1)=3\\implies x^{2}-1=8$$',
            ],
            [
                'From $x^{2}=9$ one gets $x=\\pm 3$, but the domain requires $x>1$.',
                '$$x=-3\\notin(1,\\infty)$$',
            ],
            [
                '$$x=3$$',
                'is the sole root of $x^{2}=9$ inside $(1,\\infty)$.',
            ],
            [
                '$$\\log_{2}2=1,\\qquad\\log_{2}4=2$$',
                'and $1+2=3$.',
            ],
            [
                'If $x=\\sqrt{7}$, then $x^{2}-1=6\\neq 8$.',
                '$$\\log_{2}6\\neq 3$$',
            ]
        ],
        solution_overview='Consolidate to $\\log_{2}(x^{2}-1)=3$, hence $x^{2}-1=8$. Domain rejects $x=-3$, leaving $x=3$. At that root the summands are $1$ and $2$. The trial $\\sqrt{7}$ fails.',
        stem_kind='symbolic',
    )


def t04_parametric_cob_letters() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Change-of-base chain with letter bases a, b, c',
        context='Let $a,b,c>1$. Write $\\log$ for a fixed auxiliary base larger than $1$. All claims are identities in the letters $a,b,c$.',
        statements=[
            '$\\log_{a}b\\cdot\\log_{b}c=\\log_{a}c$.',
            '$\\log_{a}b=1/\\log_{b}a$.',
            '$\\log_{a}b+\\log_{b}a=1$ whenever $a\\neq b$.',
            '$\\dfrac{\\log b}{\\log a}=\\log_{a}b$.',
            '$\\log_{a}(bc)=\\log_{a}b\\cdot\\log_{a}c$ for every $a,b,c>1$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$\\log_{a}b\\cdot\\log_{b}c=\\frac{\\log b}{\\log a}\\cdot\\frac{\\log c}{\\log b}=\\frac{\\log c}{\\log a}=\\log_{a}c$$',
            ],
            [
                '$$\\log_{a}b=\\frac{\\log b}{\\log a}=\\bigl(\\frac{\\log a}{\\log b}\\bigr)^{-1}=\\frac{1}{\\log_{b}a}$$',
            ],
            [
                'Set $u=\\log_{a}b>0$. Then $\\log_{b}a=1/u$, so the sum equals $u+1/u$.',
                '$$u+\\frac{1}{u}\\ge 2$$',
                'with equality only at $u=1$ (i.e. $a=b$). For $a\\neq b$ the sum exceeds $2$, never equals $1$.',
            ],
            [
                '$$\\log_{a}b=\\frac{\\log b}{\\log a}$$',
            ],
            [
                'The product rule produces a sum:',
                '$$\\log_{a}(bc)=\\log_{a}b+\\log_{a}c$$',
                'which is not the product of the two logs in general.',
            ]
        ],
        solution_overview='Change of base yields the chain $\\log_{a}b\\cdot\\log_{b}c=\\log_{a}c$ and the reciprocal identity. The sum $u+1/u\\ge 2$ never equals $1$ when $a\\neq b$. Products inside a log become sums of logs, not products of logs.',
        stem_kind='parametric',
    )


def t05_nested_triple_peel() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Triple nested base-two logarithm — peel and domain',
        context='Define $h(x)=\\log_{2}\\bigl(\\log_{2}(\\log_{2}x)\\bigr)$. Every intermediate argument must be strictly positive. Evaluate at concrete powers of two.',
        statements=[
            'The natural domain of $h$ is $(2,\\infty)$.',
            '$h(65536)=3$.',
            '$h(65536)=2$.',
            '$h(2^{16})=2$.',
            '$x=2$ belongs to the natural domain of $h$.'
        ],
        answer_key=key,
        bodies=[
            [
                'Innermost $x>0$; middle $\\log_{2}x>0$ i.e. $x>1$; outer needs $\\log_{2}(\\log_{2}x)>0$.',
                '$$\\log_{2}x>1\\implies x>2$$',
                'Hence the natural domain is $(2,\\infty)$.',
            ],
            [
                'Peel $65536=2^{16}$.',
                '$$\\log_{2}65536=16,\\quad\\log_{2}16=4,\\quad\\log_{2}4=2$$',
                'So $h(65536)=2$, not $3$.',
            ],
            [
                '$$h(65536)=2$$',
                'as computed by the three-step peel.',
            ],
            [
                'Since $2^{16}=65536$, the same peel applies.',
                '$$h(2^{16})=2$$',
            ],
            [
                'At $x=2$ the outer argument is $\\log_{2}(\\log_{2}2)=\\log_{2}1=0$, which is not strictly positive.',
                '$$\\log_{2}(\\log_{2}2)=0\\not>0$$',
            ]
        ],
        solution_overview='Domain forces $x>2$. Peeling $65536=2^{16}$ gives $16\\mapsto 4\\mapsto 2$, so $h(65536)=h(2^{16})=2$. The endpoint $x=2$ makes the outer argument vanish, so it is excluded.',
        stem_kind='nested',
        figure=_fig_log2_mark4(),
    )


def t06_hybrid_log3_table() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Hybrid — figure of log_3 with a matching power table',
        context='The figure shows $f(x)=\\log_{3}x$. The table records three exact evaluations. Combine figure ticks with change of base.',
        statements=[
            '$f(81)=4$.',
            '$\\log_{9}81=2$.',
            '$\\log_{3}2\\cdot\\log_{2}9=1$.',
            '$\\log_{3}2\\cdot\\log_{2}9=2$.',
            '$f(1/9)=1$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$81=3^{4}\\implies f(81)=4$$',
            ],
            [
                'Since $81=9^{2}$.',
                '$$\\log_{9}81=2$$',
            ],
            [
                'The chain rule gives $\\log_{3}2\\cdot\\log_{2}9=\\log_{3}9=2$, not $1$.',
                '$$\\log_{3}9=2$$',
            ],
            [
                '$$\\log_{3}2\\cdot\\log_{2}9=\\log_{3}9=2$$',
            ],
            [
                '$$f(1/9)=\\log_{3}(3^{-2})=-2\\neq 1$$',
            ]
        ],
        solution_overview='Powers of three give $f(81)=4$ and $f(1/9)=-2$. Also $\\log_{9}81=2$. The COB chain $\\log_{3}2\\cdot\\log_{2}9=\\log_{3}9=2$.',
        stem_kind='hybrid',
        figure=_fig_log3(),
        tables_markdown='| $x$ | $3$ | $9$ | $27$ |\n| --- | --- | --- | --- |\n| $\\log_{3}x$ | $1$ | $2$ | $3$ |',
    )


def t07_text_dense_domain_compare() -> dict[str, Any]:
    key = [True, False, True, False, True]
    return make_task(
        title='Dense comparison of two logarithmically related domains',
        context='Let $A$ be the natural domain of $\\ln(x^{2}-1)$ and $B$ the natural domain of $\\ln(x-1)+\\ln(x+1)$. Compare $A$ and $B$ carefully, then judge each claim.',
        statements=[
            '$A=(-\\infty,-1)\\cup(1,\\infty)$.',
            '$A=B$.',
            '$B=(1,\\infty)$.',
            'Every $x\\in A$ satisfies $\\ln(x^{2}-1)=\\ln(x-1)+\\ln(x+1)$.',
            'On $B$ the identity $\\ln(x^{2}-1)=\\ln(x-1)+\\ln(x+1)$ holds pointwise.'
        ],
        answer_key=key,
        bodies=[
            [
                'Need $x^{2}-1>0$, i.e. $|x|>1$.',
                '$$A=(-\\infty,-1)\\cup(1,\\infty)$$',
            ],
            [
                'For $B$ both $x-1>0$ and $x+1>0$ are required, hence $x>1$.',
                '$$B=(1,\\infty)\\subsetneq A$$',
                'So $A\\neq B$.',
            ],
            [
                '$$B=(1,\\infty)$$',
            ],
            [
                'Take $x=-2\\in A$. Then $\\ln(x^{2}-1)=\\ln 3$ is defined, but $\\ln(x-1)=\\ln(-3)$ is not. The sum identity cannot even be stated on all of $A$.',
            ],
            [
                'On $B$ both factors are positive, so the product rule applies.',
                '$$\\ln(x-1)+\\ln(x+1)=\\ln((x-1)(x+1))=\\ln(x^{2}-1)$$',
            ]
        ],
        solution_overview='$A$ is $|x|>1$ while $B$ is only $x>1$, so $A\\neq B$. The sum-to-product identity for $\\ln$ holds on $B$, but fails to even make sense on the left component of $A$.',
        stem_kind='text_dense',
    )


def t08_piecewise_abs_log() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Piecewise logarithm glued through an absolute value',
        context='Define $g(x)=\\log_{2}|x|$ for $x\\neq 0$, equivalently $g(x)=\\log_{2}x$ for $x>0$ and $g(x)=\\log_{2}(-x)$ for $x<0$.',
        statements=[
            '$g$ is even: $g(-x)=g(x)$ for every $x\\neq 0$.',
            '$g(8)=3$ and $g(-8)=3$.',
            '$g$ is one-to-one on $\\mathbb{R}\\setminus\\{0\\}$.',
            'The equation $g(x)=2$ has exactly two real roots.',
            '$g$ extends continuously through $x=0$ by setting $g(0)=0$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$g(-x)=\\log_{2}|-x|=\\log_{2}|x|=g(x)$$',
            ],
            [
                '$$g(8)=\\log_{2}8=3,\\qquad g(-8)=\\log_{2}8=3$$',
            ],
            [
                'Evenness destroys injectivity: $g(8)=g(-8)$ with $8\\neq -8$.',
            ],
            [
                'Solve $\\log_{2}|x|=2$, i.e. $|x|=4$.',
                '$$x\\in\\{-4,4\\}$$',
            ],
            [
                'As $x\\to 0$, $|x|\\to 0^{+}$, so $\\log_{2}|x|\\to-\\infty$. No finite value at $0$ yields continuity.',
            ]
        ],
        solution_overview='Because $g(x)=\\log_{2}|x|$, the map is even, takes the value $3$ at $\\pm 8$, fails to be injective, and solves $g(x)=2$ at exactly $\\pm 4$. It diverges as $x\\to 0$.',
        stem_kind='piecewise',
    )


def t09_applied_decibel_letters() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Applied — intensity ratios through a common logarithm',
        context='An intensity level is modelled by $L=10\\log_{10}(I/I_{0})$ with reference $I_{0}>0$ and intensity $I>0$. Letters stay symbolic unless a numeric ratio is named.',
        statements=[
            'Raising $I$ by a factor of $100$ increases $L$ by exactly $20$.',
            'Raising $I$ by a factor of $2$ increases $L$ by exactly $2$.',
            'If $L=0$, then necessarily $I=I_{0}$.',
            'The difference $L(I_{2})-L(I_{1})$ equals $10\\log_{10}(I_{2}/I_{1})$, independent of $I_{0}$.',
            'Doubling $I_{0}$ while holding $I$ fixed leaves $L$ unchanged.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$\\Delta L=10\\log_{10}100=10\\cdot 2=20$$',
            ],
            [
                '$$\\Delta L=10\\log_{10}2$$',
                'and $\\log_{10}2\\neq 0.2$, so the increment is not $2$.',
            ],
            [
                '$$10\\log_{10}(I/I_{0})=0\\implies I/I_{0}=1\\implies I=I_{0}$$',
            ],
            [
                '$$L(I_{2})-L(I_{1})=10\\log_{10}(I_{2}/I_{1})$$',
            ],
            [
                'Replacing $I_{0}$ by $2I_{0}$ subtracts $10\\log_{10}2\\neq 0$ from $L$.',
            ]
        ],
        solution_overview='Level shifts depend only on intensity ratios: a factor $100$ adds $20$, while a factor $2$ adds $10\\log_{10}2\\neq 2$. Vanishing level forces $I=I_{0}$. Changing $I_{0}$ moves $L$.',
        stem_kind='applied_letter',
    )


def t10_rebuild_from_functional() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Rebuild a logarithm from a functional equation and one seed',
        context='Suppose $f:(0,\\infty)\\to\\mathbb{R}$ is continuous, satisfies $f(xy)=f(x)+f(y)$ for all $x,y>0$, and $f(2)=3$. Rebuild $f$, then judge the claims.',
        statements=[
            '$f(x)=3\\log_{2}x$ for every $x>0$.',
            '$f(8)=3$.',
            '$f(8)=9$.',
            '$f(1/2)=-3$.',
            '$f(4)=4$.'
        ],
        answer_key=key,
        bodies=[
            [
                "Cauchy's equation with continuity yields $f(x)=c\\log_{2}x$; the seed $f(2)=3$ forces $c=3$.",
                '$$f(x)=3\\log_{2}x$$',
            ],
            [
                '$$f(8)=3\\log_{2}(2^{3})=9\\neq 3$$',
            ],
            [
                '$$f(8)=9$$',
            ],
            [
                '$$f(1/2)=3\\log_{2}(2^{-1})=-3$$',
            ],
            [
                '$$f(4)=3\\log_{2}(2^{2})=6\\neq 4$$',
            ]
        ],
        solution_overview='Continuity plus the multiplicative Cauchy equation give $f(x)=c\\log_{2}x$; the seed $f(2)=3$ forces $c=3$. Then $f(8)=9$, $f(1/2)=-3$, and $f(4)=6$.',
        stem_kind='rebuild',
    )


def t11_domain_tangled_half_base() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Domain tangle — inequality for a base in (0,1)',
        context='Solve the inequality $\\log_{1/2}x>-2$ on the natural domain $x>0$, remembering that bases in $(0,1)$ reverse inequalities when the exponential is applied.',
        statements=[
            'The solution set is $0<x<4$.',
            'The solution set is $x>4$.',
            '$x=2$ satisfies the inequality.',
            '$x=8$ fails the inequality.',
            '$x=4$ satisfies the strict inequality.'
        ],
        answer_key=key,
        bodies=[
            [
                'The map $x\\mapsto\\log_{1/2}x$ is strictly decreasing, with inverse $t\\mapsto(1/2)^{t}$.',
                '$$\\log_{1/2}x>-2\\iff x<(1/2)^{-2}=4$$',
                'Intersect with $x>0$ to obtain $(0,4)$.',
            ],
            [
                'That ray would fit a base larger than $1$. Here the base is $1/2$, so $x>4$ is wrong.',
            ],
            [
                '$$\\log_{1/2}2=-1>-2$$',
            ],
            [
                '$$\\log_{1/2}8=-3\\not>-2$$',
            ],
            [
                'At $x=4$ one has $\\log_{1/2}4=-2$, which fails the strict inequality.',
            ]
        ],
        solution_overview='Because the base lies in $(0,1)$, $\\log_{1/2}x>-2$ flips to $x<4$, hence $(0,4)$. Checks: $x=2$ works, $x=8$ fails, and the endpoint $x=4$ is excluded by strictness.',
        stem_kind='domain_tangled',
    )


def t12_graph_two_bases() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Graph — log_2 versus log_4 and the exact scaling',
        context='The figure shows $f(x)=\\log_{2}x$ and $g(x)=\\log_{4}x$ on $(0,\\infty)$. Use the exact identity relating the two bases.',
        statements=[
            '$f(x)=2g(x)$ for every $x>0$.',
            '$f(16)=4$ and $g(16)=2$.',
            '$f(x)=g(x)$ for every $x>1$.',
            'The unique positive solution of $f(x)=g(x)$ is $x=1$.',
            '$g(8)=2$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$\\log_{4}x=\\frac{\\log_{2}x}{\\log_{2}4}=\\frac{f(x)}{2}$$',
                'hence $f=2g$ identically on $(0,\\infty)$.',
            ],
            [
                '$$f(16)=\\log_{2}(2^{4})=4,\\qquad g(16)=\\log_{4}(4^{2})=2$$',
            ],
            [
                'From $f=2g$, equality $f=g$ forces $g=0$.',
                '$$g(x)=0\\iff x=1$$',
                'So the identity fails on $(1,\\infty)$.',
            ],
            [
                '$$2g(x)=g(x)\\implies g(x)=0\\implies x=1$$',
            ],
            [
                '$$g(8)=\\frac{\\log_{2}8}{2}=\\frac{3}{2}\\neq 2$$',
            ]
        ],
        solution_overview='Change of base yields $f=2g$ everywhere. Concrete checks: $f(16)=4$, $g(16)=2$, and $g(8)=3/2$. Equality $f=g$ holds only at $x=1$.',
        stem_kind='graph',
        figure=_fig_two_bases(),
    )


def t13_table_force_via_logs() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Table — recover continuous force by logarithm, then compare',
        context='A path $y(t)=y_{0}e^{kt}$ with $y_{0}>0$ produces the table. Recover $k$ by logarithms, then judge the threshold claims.',
        statements=[
            'The continuous force equals $k=\\ln 2$.',
            '$k=\\ln 4$.',
            'The doubling time equals $1$.',
            '$y(4)=y(0)\\cdot 16$.',
            '$k>1$.'
        ],
        answer_key=key,
        bodies=[
            [
                'From $t=0$ to $t=2$: $y(2)/y(0)=32/8=4=e^{2k}$.',
                '$$2k=\\ln 4\\implies k=\\ln 2$$',
                'Check at $t=5$: $8\\cdot e^{5\\ln 2}=8\\cdot 32=256$.',
            ],
            [
                'The same recovery gives $k=\\ln 2$, not $\\ln 4$ (that would be $2k$).',
            ],
            [
                '$$T_{\\times 2}=\\frac{\\ln 2}{k}=\\frac{\\ln 2}{\\ln 2}=1$$',
            ],
            [
                '$$y(4)=8\\cdot e^{4\\ln 2}=8\\cdot 16=128=y(0)\\cdot 16$$',
            ],
            [
                'Since $\\ln 2\\approx 0.693<1$, one has $k<1$.',
            ]
        ],
        solution_overview='From $e^{2k}=4$ recover $k=\\ln 2$. Doubling time is $1$. Then $y(4)=8\\cdot 16=128=y(0)\\cdot 16$, while $k=\\ln 2<1$.',
        stem_kind='table',
        tables_markdown='| $t$ | $0$ | $2$ | $5$ |\n| --- | --- | --- | --- |\n| $y(t)$ | $8$ | $32$ | $256$ |',
    )


def t14_symbolic_mixed_bases_eq() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Mixed-base equation — reduce log_4 to log_2',
        context='Solve $\\log_{2}x+\\log_{4}x=6$ for $x>0$. Reduce everything to base $2$.',
        statements=[
            'The equation is equivalent to $\\dfrac{3}{2}\\log_{2}x=6$.',
            'The unique positive solution is $x=16$.',
            '$x=64$ also solves the equation.',
            'At the solution, $\\log_{2}x=4$ and $\\log_{4}x=2$.',
            '$\\log_{4}x=\\log_{2}x$ at the solution.'
        ],
        answer_key=key,
        bodies=[
            [
                'Since $\\log_{4}x=\\log_{2}x/2$,',
                '$$\\log_{2}x+\\frac{1}{2}\\log_{2}x=\\frac{3}{2}\\log_{2}x=6$$',
            ],
            [
                '$$\\log_{2}x=4\\implies x=2^{4}=16$$',
            ],
            [
                'If $x=64$, then $\\log_{2}64=6$ and $\\log_{4}64=3$, so the sum is $9\\neq 6$.',
            ],
            [
                '$$\\log_{2}16=4,\\qquad\\log_{4}16=2$$',
            ],
            [
                'At $x=16$ one has $4\\neq 2$, so the two logs are not equal.',
            ]
        ],
        solution_overview='Reduce $\\log_{4}x=\\tfrac12\\log_{2}x$ to obtain $\\tfrac32\\log_{2}x=6$, hence $\\log_{2}x=4$ and $x=16$. Checks: summands $4$ and $2$; $x=64$ overshoots.',
        stem_kind='symbolic',
    )


def t15_parametric_letter_compare() -> dict[str, Any]:
    key = [True, False, False, True, False]
    return make_task(
        title="Parametric — compare log_a of letter powers against thresholds",
        context=(
            r"Fix a base $a>1$ and letters $u,v>1$. Define $S=\log_{a}(u^{2}v)$ and "
            r"$T=\log_{a}(u/v)$. Judge each claim as an identity in $a,u,v$."
        ),
        statements=[
            r"$S=2\log_{a}u+\log_{a}v$ for every such triple.",
            r"$S-T=3\log_{a}v$ for every such triple.",
            r"$S-T=3\log_{a}u$ for every such triple.",
            r"If $u=v$, then $S=3\log_{a}u$ and $T=0$.",
            r"If $u=v$, then $S=T$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"Expand by the product and power rules.",
                r"$$S=\log_{a}(u^{2}v)=2\log_{a}u+\log_{a}v$$",
            ],
            [
                r"Expand the difference.",
                r"$$S-T=(2\log_{a}u+\log_{a}v)-(\log_{a}u-\log_{a}v)=\log_{a}u+2\log_{a}v$$",
                r"This equals $3\log_{a}v$ for every triple only if $\log_{a}u=\log_{a}v$, which fails in general.",
            ],
            [
                r"The same expansion $S-T=\log_{a}u+2\log_{a}v$ equals $3\log_{a}u$ for every triple only if $u=v$.",
            ],
            [
                r"When $u=v>1$,",
                r"$$S=2\log_{a}u+\log_{a}u=3\log_{a}u,\qquad T=\log_{a}1=0$$",
            ],
            [
                r"When $u=v$, one has $S=3\log_{a}u>0=T$, so $S\neq T$.",
            ],
        ],
        solution_overview=(
            r"$S=2\log_{a}u+\log_{a}v$ and $S-T=\log_{a}u+2\log_{a}v$. Neither $3\log_{a}v$ nor "
            r"$3\log_{a}u$ matches that difference for every triple. When $u=v$, one gets $S=3\log_{a}u$ and $T=0$."
        ),
        stem_kind="parametric",
    )


def t16_nested_invert_equation() -> dict[str, Any]:
    key = [True, True, False, False, False]
    return make_task(
        title='Invert a nested log equation log_2(log_3 x)=1',
        context='Solve $\\log_{2}(\\log_{3}x)=1$ on the natural domain where every intermediate argument is positive.',
        statements=[
            'The equation forces $\\log_{3}x=2$.',
            'The unique solution is $x=9$.',
            '$x=3$ also solves the equation.',
            'The natural domain of the left-hand side is $x>3$.',
            '$x=81$ solves the equation.'
        ],
        answer_key=key,
        bodies=[
            [
                'Apply $2^{(\\cdot)}$ to both sides.',
                '$$\\log_{3}x=2^{1}=2$$',
            ],
            [
                '$$x=3^{2}=9$$',
            ],
            [
                'At $x=3$, $\\log_{3}3=1$ and $\\log_{2}1=0\\neq 1$.',
            ],
            [
                'The outer log needs $\\log_{3}x>0$, i.e. $x>1$, not $x>3$.',
                '$$x>1$$',
            ],
            [
                'At $x=81$, $\\log_{3}81=4$ and $\\log_{2}4=2\\neq 1$.',
            ]
        ],
        solution_overview='Exponentiate to get $\\log_{3}x=2$, hence $x=9$. Domain is $x>1$ (not $x>3$). The trials $x=3$ and $x=81$ fail the outer evaluation.',
        stem_kind='nested',
    )


def t17_hybrid_shifted_log() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Hybrid — shifted log_2(x-2) with marked points',
        context='The figure shows $f(x)=\\log_{2}(x-2)$ for $x>2$. Marks indicate exact evaluations. Combine the shift with base-two arithmetic.',
        statements=[
            '$f(6)=2$.',
            '$f(4)=1$.',
            'The equation $f(x)=3$ has solution $x=8$.',
            'The equation $f(x)=3$ has solution $x=10$.',
            '$f(3)=1$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$f(6)=\\log_{2}(4)=2$$',
            ],
            [
                '$$f(4)=\\log_{2}(2)=1$$',
            ],
            [
                'Solve $\\log_{2}(x-2)=3\\Rightarrow x-2=8\\Rightarrow x=10$, not $8$.',
            ],
            [
                '$$x-2=2^{3}=8\\implies x=10$$',
            ],
            [
                '$$f(3)=\\log_{2}(1)=0\\neq 1$$',
            ]
        ],
        solution_overview='Shift then evaluate: $f(6)=2$, $f(4)=1$, $f(3)=0$. Solving $f(x)=3$ yields $x=10$.',
        stem_kind='hybrid',
        figure=_fig_shift(),
    )


def t18_text_dense_iff_exp() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title="Dense — when log equations are equivalent after a domain cut",
        context=(
            r"Fix $a>1$. Compare the equation $\log_{a}(x-1)+\log_{a}(x+1)=\log_{a}(8)$ "
            r"with the polynomial relation $(x-1)(x+1)=8$, paying attention to domains."
        ),
        statements=[
            r"On the domain $x>1$, the log equation is equivalent to $x^{2}-1=8$.",
            r"Every real root of $x^{2}-1=8$ solves the log equation.",
            r"The unique solution of the log equation on $x>1$ is $x=3$.",
            r"At $x=3$ one has $\log_{a}2+\log_{a}4=\log_{a}8$.",
            r"$x=-3$ solves the log equation on $x>1$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"On $x>1$ both factors are positive, so the product rule applies.",
                r"$$\log_{a}\bigl((x-1)(x+1)\bigr)=\log_{a}8\implies x^{2}-1=8$$",
            ],
            [
                r"The polynomial $x^{2}=9$ has roots $\pm 3$, but $x=-3$ lies outside $x>1$, "
                r"and at $x=-3$ the summands $\log_{a}(x-1)$ are undefined in $\mathbb{R}$.",
            ],
            [
                r"$$x=3$$",
                r"is the sole root of $x^{2}=9$ inside $(1,\infty)$.",
            ],
            [
                r"Independently of $a>1$,",
                r"$$\log_{a}2+\log_{a}4=\log_{a}8$$",
                r"because $2\cdot 4=8$.",
            ],
            [
                r"$x=-3$ fails the domain $x>1$.",
            ],
        ],
        solution_overview=(
            r"On $x>1$ consolidate to $x^{2}-1=8$. Domain rejects $x=-3$, leaving $x=3$. "
            r"At that root the sum identity $\log_{a}2+\log_{a}4=\log_{a}8$ holds for every $a>1$."
        ),
        stem_kind="text_dense",
    )


def t19_piecewise_log_match() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Piecewise — match a log branch to an exponential branch at a knot',
        context='Define $p(x)=\\log_{2}x$ for $x\\ge 1$ and $p(x)=2^{x}-2$ for $0\\le x<1$. Continuity at the knot is part of the analysis.',
        statements=[
            '$p$ is continuous at $x=1$.',
            '$p(1)=0$.',
            '$p(0)=0$.',
            '$p(1/2)=\\sqrt{2}-2$.',
            '$p(4)=3$.'
        ],
        answer_key=key,
        bodies=[
            [
                'Left limit: $\\lim_{x\\to 1^{-}}(2^{x}-2)=0$. Right/value: $\\log_{2}1=0$. They agree.',
            ],
            [
                '$$p(1)=\\log_{2}1=0$$',
            ],
            [
                '$$p(0)=2^{0}-2=-1\\neq 0$$',
            ],
            [
                '$$p(1/2)=2^{1/2}-2=\\sqrt{2}-2$$',
            ],
            [
                '$$p(4)=\\log_{2}4=2\\neq 3$$',
            ]
        ],
        solution_overview='The two branches meet at $0$ when $x=1$, so $p$ is continuous there with $p(1)=0$. Then $p(0)=-1$, $p(1/2)=\\sqrt{2}-2$, and $p(4)=2$.',
        stem_kind='piecewise',
    )


def t20_applied_half_life_log() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Applied — half-life recovered by a logarithm',
        context='A mass follows $m(t)=m_{0}e^{-\\lambda t}$ with $m_{0}>0$ and $\\lambda>0$. The half-life $T$ is defined by $m(T)=m_{0}/2$.',
        statements=[
            '$T=\\dfrac{\\ln 2}{\\lambda}$.',
            '$T=\\dfrac{\\log_{10}2}{\\lambda}$.',
            '$m(2T)=m_{0}/4$.',
            '$\\ln(m(t)/m_{0})=-\\lambda t$ for every $t\\ge 0$.',
            '$T$ depends on the initial mass $m_{0}$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$e^{-\\lambda T}=1/2\\implies T=\\frac{\\ln 2}{\\lambda}$$',
            ],
            [
                'With common logs one needs $T=\\log_{10}2/(\\lambda\\log_{10}e)$, not $\\log_{10}2/\\lambda$.',
            ],
            [
                '$$m(2T)=m_{0}(e^{-\\lambda T})^{2}=m_{0}/4$$',
            ],
            [
                '$$\\ln(m(t)/m_{0})=\\ln(e^{-\\lambda t})=-\\lambda t$$',
            ],
            [
                'The formula $T=\\ln 2/\\lambda$ is independent of $m_{0}$.',
            ]
        ],
        solution_overview='Halving forces $T=\\ln 2/\\lambda$, independent of $m_{0}$. Two half-lives quarter the mass. The log-linearisation $\\ln(m/m_{0})=-\\lambda t$ holds for all $t\\ge 0$.',
        stem_kind='applied_letter',
    )


def t21_rebuild_log_two_points() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Rebuild log_b from two exact table points',
        context='Assume $f(x)=\\log_{b}x$ for an unknown $b>1$. It is known that $f(9)=2$ and $f(27)=3$. Rebuild $b$ and $f$.',
        statements=[
            '$b=3$.',
            '$f(81)=4$.',
            '$f(1)=1$.',
            '$f(1/3)=-1$.',
            '$b=9$.'
        ],
        answer_key=key,
        bodies=[
            [
                'From $f(9)=2$, $b^{2}=9$, so $b=3$ (since $b>1$). Check: $3^{3}=27$ matches $f(27)=3$.',
            ],
            [
                '$$f(81)=\\log_{3}(3^{4})=4$$',
            ],
            [
                '$$f(1)=\\log_{3}1=0\\neq 1$$',
            ],
            [
                '$$f(1/3)=\\log_{3}(3^{-1})=-1$$',
            ],
            [
                'If $b=9$, then $f(9)=1\\neq 2$.',
            ]
        ],
        solution_overview='The seed $f(9)=2$ with $b>1$ forces $b=3$; $f(27)=3$ confirms. Then $f(81)=4$, $f(1)=0$, and $f(1/3)=-1$.',
        stem_kind='rebuild',
    )


def t22_domain_tangled_compound() -> dict[str, Any]:
    key = [True, True, True, False, False]
    return make_task(
        title='Domain tangle — compound inequality with log_2(x-1)>2',
        context='Solve $\\log_{2}(x-1)>2$ together with the natural domain $x-1>0$.',
        statements=[
            'The natural domain alone is $x>1$.',
            'The inequality is equivalent to $x-1>4$ on that domain.',
            'The solution set is $x>5$.',
            '$x=5$ belongs to the solution set.',
            '$x=3$ satisfies the inequality.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$x-1>0\\implies x>1$$',
            ],
            [
                'Because base $2>1$, the log is increasing.',
                '$$\\log_{2}(x-1)>2\\iff x-1>2^{2}=4$$',
            ],
            [
                '$$x>5$$',
            ],
            [
                'At $x=5$, $\\log_{2}4=2$, which fails the strict inequality.',
            ],
            [
                '$$\\log_{2}(3-1)=\\log_{2}2=1\\not>2$$',
            ]
        ],
        solution_overview='Domain $x>1$ plus the increasing map $\\log_{2}$ turns the inequality into $x-1>4$, i.e. $x>5$. Endpoints and the trial $x=3$ fail.',
        stem_kind='domain_tangled',
    )


def t23_graph_log5_ticks() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Base-five logarithm — tick arithmetic past the marked base',
        context='The figure shows $f(x)=\\log_{5}x$ with a mark at $x=25$. Use $f(5^{t})=t$ to judge the claims.',
        statements=[
            '$f(25)=2$.',
            '$f(125)=3$.',
            '$f(5)+f(25)=f(100)$.',
            '$f(1/5)=-1$.',
            'The unique solution of $f(x)=0$ is $x=5$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$f(25)=\\log_{5}(5^{2})=2$$',
            ],
            [
                '$$f(125)=\\log_{5}(5^{3})=3$$',
            ],
            [
                'Left side: $1+2=3$. Right side: $\\log_{5}100$. Since $5^{3}=125\\neq 100$, one has $f(100)\\neq 3$.',
            ],
            [
                '$$f(1/5)=\\log_{5}(5^{-1})=-1$$',
            ],
            [
                '$$f(x)=0\\iff x=5^{0}=1$$',
                'so the root is $x=1$, not $x=5$.',
            ]
        ],
        solution_overview='Powers of five give $f(25)=2$, $f(125)=3$, and $f(1/5)=-1$. The product check $f(5)+f(25)=f(125)\\neq f(100)$. The root of $f$ is $x=1$.',
        stem_kind='graph',
        figure=_fig_log5(),
    )


def t24_table_cob_after_recover() -> dict[str, Any]:
    key = [True, True, True, True, False]
    return make_task(
        title='Table — recover base, then run a change-of-base chain',
        context='The table comes from $y=\\log_{b}x$. Recover $b>1$, then evaluate the chain claims.',
        statements=[
            '$b=4$.',
            '$\\log_{b}64=3$.',
            '$\\log_{2}b\\cdot\\log_{b}8=\\log_{2}8$.',
            '$\\log_{2}b\\cdot\\log_{b}8=3$.',
            '$b=2$.'
        ],
        answer_key=key,
        bodies=[
            [
                'From $\\log_{b}16=2$, $b^{2}=16$, so $b=4$ (since $b>1$). Check: $4^{1}=4$.',
            ],
            [
                '$$\\log_{4}64=\\log_{4}(4^{3})=3$$',
            ],
            [
                '$$\\log_{2}b\\cdot\\log_{b}8=\\log_{2}8$$',
            ],
            [
                '$$\\log_{2}8=3$$',
            ],
            [
                'The recovered base is $4$, not $2$.',
            ]
        ],
        solution_overview='From $(16,2)$ recover $b=4$. Then $\\log_{4}64=3$, and the COB chain $\\log_{2}4\\cdot\\log_{4}8=\\log_{2}8=3$.',
        stem_kind='table',
        tables_markdown='| $x$ | $4$ | $16$ | $64$ |\n| --- | --- | --- | --- |\n| $y=\\log_{b}x$ | $1$ | $2$ | $3$ |',
    )


def t25_symbolic_quotient_eq() -> dict[str, Any]:
    key = [True, True, False, False, False]
    return make_task(
        title='Quotient rule turns a two-log equation into a linear relation',
        context='Solve $\\log_{2}(x+3)-\\log_{2}x=2$ on the natural domain $x>0$.',
        statements=[
            'On $x>0$ the equation is equivalent to $\\dfrac{x+3}{x}=4$.',
            'The unique solution is $x=1$.',
            '$x=3$ also solves the equation.',
            'At the solution, $\\log_{2}(x+3)=1$.',
            'The value $x=-1$ is an admissible solution.'
        ],
        answer_key=key,
        bodies=[
            [
                'Consolidate by the quotient rule.',
                '$$\\log_{2}\\frac{x+3}{x}=2\\implies\\frac{x+3}{x}=4$$',
            ],
            [
                '$$x+3=4x\\implies 3=3x\\implies x=1$$',
            ],
            [
                'If $x=3$, then $(x+3)/x=2\\neq 4$.',
            ],
            [
                '$$\\log_{2}(1+3)=\\log_{2}4=2\\neq 1$$',
            ],
            [
                'The domain requires $x>0$, so $x=-1$ is excluded.',
            ]
        ],
        solution_overview='Consolidate to $(x+3)/x=4$, hence $x=1$. Trials $x=3$ and $x=-1$ fail. At the root, $\\log_{2}(x+3)=2$.',
        stem_kind='symbolic',
    )


def t26_parametric_competing_rates() -> dict[str, Any]:
    key = [True, True, True, False, True]
    return make_task(
        title='Parametric — competing logarithmic scales for the same letter argument',
        context='Fix $x>1$ and compare the two readings $A=\\log_{2}x$ and $B=\\log_{4}x$. Letters stay symbolic.',
        statements=[
            '$A=2B$ for every $x>1$.',
            '$A>B$ for every $x>1$.',
            '$A-B=\\frac12\\log_{2}x$.',
            '$A=B$ for every $x>1$.',
            'If $A=4$, then $x=16$ and $B=2$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$B=\\frac{A}{2}\\implies A=2B$$',
            ],
            [
                'For $x>1$ one has $A=\\log_{2}x>0$, so $A=2B>B$.',
            ],
            [
                '$$A-B=\\log_{2}x-\\frac12\\log_{2}x=\\frac12\\log_{2}x$$',
            ],
            [
                'Equality would force $A=0$, i.e. $x=1$, excluded by $x>1$.',
            ],
            [
                '$$A=4\\implies x=2^{4}=16,\\qquad B=\\log_{4}16=2$$',
            ]
        ],
        solution_overview='Always $A=2B$, so $A>B$ on $x>1$ with difference $\\tfrac12\\log_{2}x$. The case $A=4$ recovers $x=16$ and $B=2$.',
        stem_kind='parametric',
    )


def t27_nested_double_domain() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Double nested log_2(log_2 x) — domain and evaluation',
        context='Define $q(x)=\\log_{2}(\\log_{2}x)$. Every intermediate argument must be positive.',
        statements=[
            'The natural domain of $q$ is $(1,\\infty)$.',
            '$q(16)=3$.',
            '$q(4)=1$.',
            '$q(2)=0$.',
            '$x=1$ belongs to the natural domain.'
        ],
        answer_key=key,
        bodies=[
            [
                'Need $\\log_{2}x>0$, i.e. $x>1$.',
                '$$x>1$$',
            ],
            [
                '$$q(16)=\\log_{2}4=2\\neq 3$$',
            ],
            [
                '$$q(4)=\\log_{2}2=1$$',
            ],
            [
                '$$q(2)=\\log_{2}1=0$$',
            ],
            [
                'At $x=1$, $\\log_{2}1=0$, so the outer log is undefined.',
            ]
        ],
        solution_overview='Domain is $x>1$. Evaluations: $q(16)=2$, $q(4)=1$, $q(2)=0$. The endpoint $x=1$ is excluded.',
        stem_kind='nested',
    )


def t28_hybrid_inverse_pair() -> dict[str, Any]:
    key = [True, True, False, False, False]
    return make_task(
        title='Hybrid — inverse pair 2^t and log_2 on one figure',
        context='The figure shows the inverse pair $y=2^{t}$ and $y=\\log_{2}x$. Use inverse cancellation, not eyeballing.',
        statements=[
            '$\\log_{2}(2^{5})=5$.',
            '$2^{\\log_{2}7}=7$.',
            '$\\log_{2}(2^{t})+2^{\\log_{2}t}=t$ for every $t>0$.',
            'The unique fixed point of $\\log_{2}$ in $(0,\\infty)$ is $x=2$.',
            '$\\log_{2}(2^{t})=t$ fails at $t=-3$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$\\log_{2}(2^{5})=5$$',
            ],
            [
                '$$2^{\\log_{2}7}=7$$',
            ],
            [
                'The left side equals $t+t=2t$, not $t$.',
                '$$t+t=2t\\neq t$$',
            ],
            [
                'A fixed point would solve $\\log_{2}x=x$, i.e. $x=2^{x}$. No $x>0$ satisfies that (e.g. at $x=2$, $1\\neq 2$).',
            ],
            [
                '$$\\log_{2}(2^{-3})=-3$$',
                'so the cancellation identity holds at $t=-3$.',
            ]
        ],
        solution_overview='Cancellation identities give $\\log_{2}(2^{5})=5$ and $2^{\\log_{2}7}=7$. The sum of the two cancellations is $2t$, not $t$. There is no fixed point of $\\log_{2}$, and $\\log_{2}(2^{t})=t$ holds for negative $t$ as well.',
        stem_kind='hybrid',
        figure=_fig_inv_pair(),
    )


def t29_text_dense_for_every() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Dense quantifiers — for every base and for some argument',
        context="Quantify carefully over bases $a>1$ and arguments $x>0$. A slip between 'for every' and 'for some' is fatal.",
        statements=[
            'For every $a>1$ one has $\\log_{a}1=0$.',
            'For every $a>1$ and every $x>0$, $\\log_{a}x>0$.',
            'There exists $a>1$ such that $\\log_{a}(1/2)<0$.',
            'For every $a>1$, the map $x\\mapsto\\log_{a}x$ is strictly increasing on $(0,\\infty)$.',
            'For every $a>1$, $\\log_{a}a^{2}=1$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$a^{0}=1\\implies\\log_{a}1=0$$',
            ],
            [
                'Counter-example: $a=2$, $x=1/2$ gives $\\log_{2}(1/2)=-1<0$.',
            ],
            [
                'Take $a=2$: $\\log_{2}(1/2)=-1<0$.',
            ],
            [
                'The derivative $1/(x\\ln a)>0$ for $a>1$, $x>0$.',
            ],
            [
                '$$\\log_{a}a^{2}=2\\neq 1$$',
            ]
        ],
        solution_overview='Every base satisfies $\\log_{a}1=0$ and strict increase. Positivity of $\\log_{a}x$ fails for $x<1$. Existence of a base with $\\log_{a}(1/2)<0$ is immediate. Finally $\\log_{a}a^{2}=2$, not $1$.',
        stem_kind='text_dense',
    )


def t30_piecewise_sign_split() -> dict[str, Any]:
    key = [True, False, True, False, True]
    return make_task(
        title='Piecewise — log of a squared expression versus twice the log',
        context='Compare $F(x)=\\ln(x^{2})$ on $\\mathbb{R}\\setminus\\{0\\}$ with $G(x)=2\\ln x$ on $(0,\\infty)$ and with $H(x)=2\\ln|x|$ on $\\mathbb{R}\\setminus\\{0\\}$.',
        statements=[
            '$F(x)=H(x)$ for every $x\\neq 0$.',
            '$F(x)=G(x)$ for every $x\\neq 0$.',
            '$F(-e)=2$.',
            '$G$ is defined at $x=-e$.',
            '$H(-e)=2$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$\\ln(x^{2})=\\ln(|x|^{2})=2\\ln|x|=H(x)$$',
            ],
            [
                '$G$ is only defined for $x>0$, while $F$ is defined for $x<0$ as well. Even on $(0,\\infty)$ one has $F=G$, but not on all of $\\mathbb{R}\\setminus\\{0\\}$.',
            ],
            [
                '$$F(-e)=\\ln(e^{2})=2$$',
            ],
            [
                '$G(-e)=2\\ln(-e)$ is undefined in $\\mathbb{R}$.',
            ],
            [
                '$$H(-e)=2\\ln|-e|=2\\ln e=2$$',
            ]
        ],
        solution_overview='Squaring forces $F=H=2\\ln|x|$ on $\\mathbb{R}\\setminus\\{0\\}$. The unsigned $G=2\\ln x$ cannot match $F$ on the negatives. At $x=-e$ one has $F=H=2$ while $G$ is undefined.',
        stem_kind='piecewise',
    )


def t31_applied_pH_letters() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Applied — pH as a common logarithm of concentration',
        context='Define $\\mathrm{pH}=-\\log_{10}[H^{+}]$ with concentration $[H^{+}]>0$ measured in the usual molar units.',
        statements=[
            'If $[H^{+}]$ drops by a factor of $10$, then pH rises by exactly $1$.',
            'If $[H^{+}]=10^{-3}$, then $\\mathrm{pH}=3$.',
            'If $[H^{+}]=10^{-3}$, then $\\mathrm{pH}=-3$.',
            'Doubling $[H^{+}]$ decreases pH by $\\log_{10}2$.',
            'pH is a linear function of $[H^{+}]$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$\\Delta\\mathrm{pH}=-\\log_{10}(c/10)-(-\\log_{10}c)=\\log_{10}10=1$$',
            ],
            [
                '$$\\mathrm{pH}=-\\log_{10}(10^{-3})=3$$',
            ],
            [
                'The same evaluation gives $+3$, not $-3$.',
            ],
            [
                '$$\\Delta\\mathrm{pH}=-\\log_{10}(2c)+\\log_{10}c=-\\log_{10}2$$',
            ],
            [
                'pH depends on $\\log_{10}[H^{+}]$, which is nonlinear in the concentration.',
            ]
        ],
        solution_overview='A tenfold drop in concentration raises pH by $1$. At $10^{-3}$ one has pH $=3$. Doubling concentration lowers pH by $\\log_{10}2$. The dependence on concentration is logarithmic, not linear.',
        stem_kind='applied_letter',
    )


def t32_rebuild_from_inverse() -> dict[str, Any]:
    key = [True, True, True, True, False]
    return make_task(
        title='Rebuild a logarithm as the inverse of a given exponential',
        context='Let $E(t)=5^{t}$ for $t\\in\\mathbb{R}$. Let $L$ be the inverse function of $E$, defined on $(0,\\infty)$.',
        statements=[
            '$L(x)=\\log_{5}x$.',
            '$L(25)=2$.',
            '$L(E(7))=7$.',
            '$E(L(9))=9$.',
            '$L(1/5)=1$.'
        ],
        answer_key=key,
        bodies=[
            [
                'By definition the inverse of $t\\mapsto 5^{t}$ is $x\\mapsto\\log_{5}x$.',
            ],
            [
                '$$L(25)=\\log_{5}(5^{2})=2$$',
            ],
            [
                '$$L(E(7))=7$$',
            ],
            [
                '$$E(L(9))=9$$',
            ],
            [
                '$$L(1/5)=\\log_{5}(5^{-1})=-1\\neq 1$$',
            ]
        ],
        solution_overview='The inverse of $5^{t}$ is $\\log_{5}$. Cancellation gives $L(E(7))=7$ and $E(L(9))=9$. Concrete values: $L(25)=2$ and $L(1/5)=-1$.',
        stem_kind='rebuild',
    )


def t33_domain_tangled_product() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Domain tangle — product of logs requiring two inequalities',
        context='Consider $r(x)=\\log_{2}x\\cdot\\log_{2}(x-4)$. Determine where $r$ is defined, then judge the claims.',
        statements=[
            'The natural domain is $x>4$.',
            '$x=8$ lies in the natural domain.',
            '$x=2$ lies in the natural domain.',
            '$r(8)=6$.',
            '$r(16)=48$.'
        ],
        answer_key=key,
        bodies=[
            [
                'Need $x>0$ and $x-4>0$, hence $x>4$.',
            ],
            [
                'Since $8>4$, both arguments are positive.',
            ],
            [
                'At $x=2$, $\\log_{2}(x-4)$ is undefined.',
            ],
            [
                '$$r(8)=\\log_{2}8\\cdot\\log_{2}4=3\\cdot 2=6$$',
            ],
            [
                '$$r(16)=\\log_{2}16\\cdot\\log_{2}12=4\\log_{2}12$$',
                'Since $\\log_{2}12\\neq 12$, one has $r(16)\\neq 48$.',
            ]
        ],
        solution_overview='Domain forces $x>4$. Then $r(8)=6$, while $r(16)=4\\log_{2}12\\neq 48$. The trial $x=2$ is excluded.',
        stem_kind='domain_tangled',
    )


def t34_graph_ray_crossings() -> dict[str, Any]:
    key = [True, True, False, False, False]
    return make_task(
        title='Graph — crossings of log_2 with the ray y=x/4',
        context='The figure shows $y=\\log_{2}x$ and $y=x/4$. A crossing means $\\log_{2}x=x/4$. Verify candidates by direct substitution.',
        statements=[
            '$x=16$ is a crossing point.',
            'At $x=16$ both curves equal $4$.',
            '$x=4$ is a crossing point.',
            '$x=8$ is a crossing point.',
            '$x=2$ is a crossing point.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$\\log_{2}16=4,\\qquad 16/4=4$$',
            ],
            [
                '$$\\log_{2}16=16/4=4$$',
            ],
            [
                '$$\\log_{2}4=2\\neq 1=4/4$$',
            ],
            [
                '$$\\log_{2}8=3\\neq 2=8/4$$',
            ],
            [
                '$$\\log_{2}2=1\\neq 1/2=2/4$$',
            ]
        ],
        solution_overview='Direct substitution: $x=16$ works with common value $4$. The candidates $x=2,4,8$ all fail $\\log_{2}x=x/4$.',
        stem_kind='graph',
        figure=_fig_ray_cross(),
    )


def t35_table_semi_log_slope() -> dict[str, Any]:
    key = [True, True, True, False, True]
    return make_task(
        title='Table — recover ln-slope of an exponential path',
        context='An exponential path $y=y_{0}e^{kt}$ is sampled in the table. Work with differences of natural logs.',
        statements=[
            '$\\dfrac{\\ln y(3)-\\ln y(1)}{2}=k$.',
            '$k=\\ln 2$.',
            '$y(5)/y(1)=16$.',
            '$k=\\dfrac12$.',
            '$\\ln y(1)=\\ln 5$.'
        ],
        answer_key=key,
        bodies=[
            [
                'Along $y=y_{0}e^{kt}$ one has $\\ln y(t)=\\ln y_{0}+kt$, so the difference quotient recovers $k$.',
            ],
            [
                '$$\\frac{\\ln 20-\\ln 5}{2}=\\frac{\\ln 4}{2}=\\ln 2$$',
            ],
            [
                '$$y(5)/y(1)=80/5=16=e^{4\\ln 2}$$',
            ],
            [
                'The recovered force is $\\ln 2\\approx 0.693$, not $1/2$.',
            ],
            [
                '$$\\ln y(1)=\\ln 5$$',
            ]
        ],
        solution_overview='Log-differences recover $k=\\ln 2$. Then $y(5)/y(1)=16$, while $k\\neq 1/2$. Also $\\ln y(1)=\\ln 5$.',
        stem_kind='table',
        tables_markdown='| $t$ | $1$ | $3$ | $5$ |\n| --- | --- | --- | --- |\n| $y(t)$ | $5$ | $20$ | $80$ |',
    )


def t36_symbolic_cob_chain_eq() -> dict[str, Any]:
    key = [True, True, True, False, False]
    return make_task(
        title='Symbolic — evaluate a three-factor change-of-base chain',
        context='Simplify the product $P=\\log_{2}3\\cdot\\log_{3}5\\cdot\\log_{5}4$ by telescoping, then judge the claims.',
        statements=[
            '$P=\\log_{2}4$.',
            '$P=2$.',
            '$P=\\log_{2}3\\cdot\\log_{3}4$.',
            '$P=3$.',
            '$P=\\log_{5}2$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$P=\\frac{\\ln 3}{\\ln 2}\\cdot\\frac{\\ln 5}{\\ln 3}\\cdot\\frac{\\ln 4}{\\ln 5}=\\frac{\\ln 4}{\\ln 2}=\\log_{2}4$$',
            ],
            [
                '$$\\log_{2}4=2$$',
            ],
            [
                '$$\\log_{3}5\\cdot\\log_{5}4=\\log_{3}4$$',
                'hence $P=\\log_{2}3\\cdot\\log_{3}4$.',
            ],
            [
                'The telescoping value is $2$, not $3$.',
            ],
            [
                '$P=2\\neq\\log_{5}2$.',
            ]
        ],
        solution_overview='The three-factor chain telescopes to $\\log_{2}4=2$. Intermediate collapse also gives $\\log_{2}3\\cdot\\log_{3}4$. The rivals $3$ and $\\log_{5}2$ fail.',
        stem_kind='symbolic',
    )


def t37_parametric_power_unknown() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title="Parametric — solve a^{2t}=c^3 for the unknown exponent",
        context=(
            r"Fix $a>1$ and $c>0$. Solve $a^{2t}=c^{3}$ for the real unknown $t$, "
            r"expressing the answer through logarithms."
        ),
        statements=[
            r"$t=\dfrac{3\log_{a}c}{2}$ is the unique real solution.",
            r"$t=\dfrac{3\ln c}{2\ln a}$.",
            r"If $c=a$, then $t=3$.",
            r"If $c=a$, then $t=\dfrac{3}{2}$.",
            r"If $c=1$, then $t=1$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"Take $\log_{a}$ of both sides.",
                r"$$2t=3\log_{a}c\implies t=\frac{3\log_{a}c}{2}$$",
            ],
            [
                r"Change of base replaces $\log_{a}c$ by $\ln c/\ln a$.",
                r"$$t=\frac{3\ln c}{2\ln a}$$",
            ],
            [
                r"If $c=a$, then $\log_{a}c=1$, so $t=3/2$, not $3$.",
            ],
            [
                r"$$t=\frac{3\cdot 1}{2}=\frac{3}{2}$$",
            ],
            [
                r"If $c=1$, then $\log_{a}1=0$, so $t=0$, not $1$.",
            ],
        ],
        solution_overview=(
            r"Logging both sides yields $2t=3\log_{a}c$, hence $t=3\log_{a}c/2=3\ln c/(2\ln a)$. "
            r"When $c=a$ one gets $t=3/2$; when $c=1$ one gets $t=0$."
        ),
        stem_kind="parametric",
    )


def t38_nested_exp_of_log() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title="Nested — peel 2^{log_2(log_2(16))} and mismatched bases",
        context=(
            r"Evaluate nested compositions that mix exponentials and logarithms, "
            r"including mismatched bases."
        ),
        statements=[
            r"$2^{\log_{2}(\log_{2}16)}=4$.",
            r"$2^{\log_{2}(\log_{2}16)}=2$.",
            r"$10^{\log_{2}16}=2^{4\log_{2}10}$.",
            r"$\log_{2}(2^{\log_{2}3+\log_{2}5})=\log_{2}15$.",
            r"$e^{\ln 3+\ln 4}=7$.",
        ],
        answer_key=key,
        bodies=[
            [
                r"Innermost: $\log_{2}16=4$. Then $2^{\log_{2}4}=4$.",
                r"$$2^{\log_{2}(\log_{2}16)}=4$$",
            ],
            [
                r"The same peel yields $4$, not $2$.",
            ],
            [
                r"Write $10=2^{\log_{2}10}$, so",
                r"$$10^{\log_{2}16}=(2^{\log_{2}10})^{4}=2^{4\log_{2}10}$$",
            ],
            [
                r"$$\log_{2}(2^{\log_{2}3+\log_{2}5})=\log_{2}3+\log_{2}5=\log_{2}15$$",
            ],
            [
                r"$$e^{\ln 3+\ln 4}=e^{\ln 12}=12\neq 7$$",
            ],
        ],
        solution_overview=(
            r"Peeling $2^{\log_{2}(\log_{2}16)}$ gives $4$. Rewriting $10$ in base $2$ produces "
            r"$2^{4\log_{2}10}$. Matched cancellation yields $\log_{2}15$, while $e^{\ln 3+\ln 4}=12$."
        ),
        stem_kind="nested",
    )


def t39_hybrid_ln_graph() -> dict[str, Any]:
    key = [True, True, True, True, False]
    return make_task(
        title='Hybrid — natural log figure with e-mark arithmetic',
        context='The figure shows $f(x)=\\ln x$ with a mark at $x=e$. Use $\\ln(e^{t})=t$ and change of base.',
        statements=[
            '$f(e^{2})=2$.',
            '$f(1)=0$.',
            '$f(e^{3})/f(e)=3$.',
            '$\\dfrac{f(8)}{f(2)}=\\log_{2}8$.',
            '$f(1/e)=1$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$f(e^{2})=\\ln(e^{2})=2$$',
            ],
            [
                '$$f(1)=\\ln 1=0$$',
            ],
            [
                '$$f(e^{3})/f(e)=3/1=3$$',
            ],
            [
                '$$\\frac{\\ln 8}{\\ln 2}=\\log_{2}8$$',
            ],
            [
                '$$f(1/e)=\\ln(e^{-1})=-1\\neq 1$$',
            ]
        ],
        solution_overview='Natural-log evaluations: $f(e^{2})=2$, $f(1)=0$, $f(1/e)=-1$. Ratios recover $\\log_{2}8$ and the quotient $3$.',
        stem_kind='hybrid',
        figure=_fig_ln(),
    )


def t40_text_dense_precisely_when() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Dense — precisely when a logarithmic inequality holds',
        context='Fix $a>1$. Characterise precisely when $\\log_{a}x>\\log_{a}y$ for $x,y>0$, and related variants.',
        statements=[
            '$\\log_{a}x>\\log_{a}y$ if and only if $x>y$.',
            '$\\log_{a}x>\\log_{a}y$ if and only if $x<y$.',
            'If $0<x<1<y$, then $\\log_{a}x<0<\\log_{a}y$.',
            '$\\log_{a}x=0$ if and only if $x=1$.',
            '$\\log_{a}x=1$ if and only if $x=0$.'
        ],
        answer_key=key,
        bodies=[
            [
                'For $a>1$ the logarithm is strictly increasing.',
            ],
            [
                'That characterisation fits bases in $(0,1)$, not $a>1$.',
            ],
            [
                '$$\\log_{a}x<0<\\log_{a}y$$',
            ],
            [
                '$$a^{0}=1$$',
            ],
            [
                '$$\\log_{a}x=1\\iff x=a\\neq 0$$',
            ]
        ],
        solution_overview='For $a>1$, logs preserve order, vanish only at $1$, and equal $1$ only at $a$. Arguments below $1$ give negative logs.',
        stem_kind='text_dense',
    )


def t41_piecewise_abs_inside() -> dict[str, Any]:
    key = [True, True, True, True, False]
    return make_task(
        title='Piecewise — log_2 of |x-3| and the split domain',
        context='Define $s(x)=\\log_{2}|x-3|$ for $x\\neq 3$. Split into $x>3$ and $x<3$.',
        statements=[
            'For $x>3$, $s(x)=\\log_{2}(x-3)$.',
            'For $x<3$, $s(x)=\\log_{2}(3-x)$.',
            '$s(7)=2$.',
            '$s(-1)=2$.',
            '$s(3)=0$.'
        ],
        answer_key=key,
        bodies=[
            [
                'For $x>3$, $|x-3|=x-3$.',
            ],
            [
                'For $x<3$, $|x-3|=3-x$.',
            ],
            [
                '$$s(7)=\\log_{2}4=2$$',
            ],
            [
                '$$s(-1)=\\log_{2}4=2$$',
            ],
            [
                'At $x=3$ the argument vanishes, so $s$ is undefined.',
            ]
        ],
        solution_overview='Absolute value splits into $\\log_{2}(x-3)$ and $\\log_{2}(3-x)$. Both $x=7$ and $x=-1$ give $s=2$, while $x=3$ is excluded.',
        stem_kind='piecewise',
    )


def t42_applied_richter() -> dict[str, Any]:
    key = [True, False, True, True, False]
    return make_task(
        title='Applied — Richter-style magnitude as a logarithm of amplitude',
        context='A magnitude is modelled by $M=\\log_{10}(A/A_{0})$ with amplitude $A>0$ and reference $A_{0}>0$.',
        statements=[
            'If $A$ grows by a factor of $1000$, then $M$ increases by $3$.',
            'If $A$ grows by a factor of $2$, then $M$ increases by $2$.',
            '$M(A)-M(B)=\\log_{10}(A/B)$, independent of $A_{0}$.',
            'When $A=A_{0}$, one has $M=0$.',
            'If $A$ and $A_{0}$ are both multiplied by $10$, then $M$ increases by $1$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$\\Delta M=\\log_{10}1000=3$$',
            ],
            [
                '$$\\Delta M=\\log_{10}2\\neq 2$$',
            ],
            [
                '$$M(A)-M(B)=\\log_{10}(A/B)$$',
            ],
            [
                '$$\\log_{10}1=0$$',
            ],
            [
                'Scaling both $A$ and $A_{0}$ by $10$ leaves the ratio unchanged, so $\\Delta M=0$, not $1$.',
            ]
        ],
        solution_overview='A thousandfold amplitude jump adds $3$ to $M$; a twofold jump adds $\\log_{10}2$. Differences cancel $A_{0}$. Simultaneous scaling of $A$ and $A_{0}$ leaves $M$ fixed.',
        stem_kind='applied_letter',
    )


def t43_rebuild_seed_and_rule() -> dict[str, Any]:
    key = [True, True, True, True, False]
    return make_task(
        title='Rebuild — continuous log-like map from a seed and the power rule',
        context='Suppose $f:(0,\\infty)\\to\\mathbb{R}$ satisfies $f(x^{2})=2f(x)$ for every $x>0$, is continuous, and $f(8)=3$. Assume also $f$ is of the form $c\\log_{2}$ (the continuous solutions of the power relation).',
        statements=[
            '$c=1$, so $f(x)=\\log_{2}x$.',
            '$f(64)=6$.',
            '$f(2)=1$.',
            '$f(1/8)=-3$.',
            '$f(4)=4$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$f(8)=c\\log_{2}8=3c=3\\implies c=1$$',
            ],
            [
                '$$f(64)=\\log_{2}(2^{6})=6$$',
            ],
            [
                '$$f(2)=\\log_{2}2=1$$',
            ],
            [
                '$$f(1/8)=\\log_{2}(2^{-3})=-3$$',
            ],
            [
                '$$f(4)=\\log_{2}4=2\\neq 4$$',
            ]
        ],
        solution_overview='The seed $f(8)=3$ forces $c=1$, hence $f=\\log_{2}$. Then $f(64)=6$, $f(2)=1$, $f(1/8)=-3$, while $f(4)=2$.',
        stem_kind='rebuild',
    )


def t44_domain_tangled_nested_ineq() -> dict[str, Any]:
    key = [True, True, True, False, False]
    return make_task(
        title='Domain tangle — inequality for a nested logarithm',
        context='Solve $\\log_{2}(\\log_{3}x)>1$ on the natural domain of the nested logarithm.',
        statements=[
            'The natural domain requires $x>1$.',
            'The inequality is equivalent to $\\log_{3}x>2$ on that domain.',
            'The solution set is $x>9$.',
            '$x=9$ satisfies the strict inequality.',
            '$x=3$ satisfies the inequality.'
        ],
        answer_key=key,
        bodies=[
            [
                'Outer log needs $\\log_{3}x>0$, i.e. $x>1$.',
            ],
            [
                'Base $2>1$, so $\\log_{2}(\\cdot)>1$ iff the argument exceeds $2$.',
                '$$\\log_{3}x>2$$',
            ],
            [
                '$$x>3^{2}=9$$',
            ],
            [
                'At $x=9$, $\\log_{2}(\\log_{3}9)=\\log_{2}2=1$, not strictly greater.',
            ],
            [
                '$$\\log_{2}(\\log_{3}3)=\\log_{2}1=0\\not>1$$',
            ]
        ],
        solution_overview='Domain $x>1$ plus $\\log_{3}x>2$ yields $x>9$. The endpoint $x=9$ and the trial $x=3$ fail the strict inequality.',
        stem_kind='domain_tangled',
    )


def t45_graph_log2_product_check() -> dict[str, Any]:
    key = [True, True, True, False, True]
    return make_task(
        title='Graph log_2 — multi-step product and quotient checks',
        context='Again $f(x)=\\log_{2}x$ on the figure. Each claim needs a calculation with at least two evaluations.',
        statements=[
            '$f(24)-f(3)=f(8)$.',
            '$f(24)-f(3)=3$.',
            '$f(9)+f(4)=f(36)$.',
            '$f(9)+f(4)=f(13)$.',
            '$2f(8)=f(64)$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$f(24)-f(3)=\\log_{2}(24/3)=\\log_{2}8=f(8)$$',
            ],
            [
                '$$f(8)=3$$',
            ],
            [
                '$$f(9)+f(4)=\\log_{2}(36)=f(36)$$',
            ],
            [
                'The sum equals $f(36)$, not $f(13)$.',
            ],
            [
                '$$2f(8)=6=\\log_{2}64=f(64)$$',
            ]
        ],
        solution_overview='Quotient and product rules give $f(24)-f(3)=f(8)=3$ and $f(9)+f(4)=f(36)$. Also $2f(8)=f(64)$. The rival $f(13)$ fails.',
        stem_kind='graph',
        figure=_fig_log2_mark4(),
    )


def t46_table_judge_claims_base3() -> dict[str, Any]:
    key = [True, True, True, False, True]
    return make_task(
        title='Table — base-three logs with a false extrapolation',
        context='The table lists exact values of $\\log_{3}x$. Use them to judge extrapolations.',
        statements=[
            '$\\log_{3}81=4$.',
            '$\\log_{3}(1/27)=-3$.',
            '$\\log_{3}6=\\log_{3}2+\\log_{3}3=\\log_{3}2+1$.',
            '$\\log_{3}6=2$.',
            '$\\log_{3}9-\\log_{3}3=1$.'
        ],
        answer_key=key,
        bodies=[
            [
                '$$\\log_{3}81=\\log_{3}(3^{4})=4$$',
            ],
            [
                '$$\\log_{3}(3^{-3})=-3$$',
            ],
            [
                '$$\\log_{3}6=\\log_{3}(2\\cdot 3)=\\log_{3}2+1$$',
            ],
            [
                'If $\\log_{3}6=2$, then $6=9$, false.',
            ],
            [
                '$$\\log_{3}9-\\log_{3}3=\\log_{3}3=1$$',
            ]
        ],
        solution_overview='Powers of three give $\\log_{3}81=4$ and $\\log_{3}(1/27)=-3$. The product rule writes $\\log_{3}6=\\log_{3}2+1\\neq 2$. Also $\\log_{3}9-\\log_{3}3=1$.',
        stem_kind='table',
        tables_markdown='| $x$ | $3$ | $9$ | $27$ |\n| --- | --- | --- | --- |\n| $\\log_{3}x$ | $1$ | $2$ | $3$ |',
    )


def t47_symbolic_quadratic_ln() -> dict[str, Any]:
    key = [True, True, True, False, False]
    return make_task(
        title='Symbolic — ln equation that becomes a quadratic after exp',
        context='Solve $\\ln(x)+\\ln(x-3)=\\ln(4x)$ on the natural domain $x>3$.',
        statements=[
            'On $x>3$ the equation is equivalent to $x(x-3)=4x$.',
            'After cancelling the factor $x>0$, one obtains $x-3=4$.',
            'The unique solution in the domain is $x=7$.',
            '$x=0$ is an admissible solution.',
            '$x=4$ solves the equation on $x>3$.'
        ],
        answer_key=key,
        bodies=[
            [
                'Use the product rule.',
                '$$\\ln(x(x-3))=\\ln(4x)\\implies x(x-3)=4x$$',
            ],
            [
                '$$x-3=4$$',
            ],
            [
                '$$x=7$$',
                'and $7>3$.',
            ],
            [
                '$x=0$ makes every logarithm undefined.',
            ],
            [
                '$$4(4-3)=4\\neq 16=4\\cdot 4$$',
            ]
        ],
        solution_overview='Consolidate to $x(x-3)=4x$. On $x>3$ cancel to get $x=7$. The trials $x=0$ and $x=4$ fail.',
        stem_kind='symbolic',
    )


def t48_parametric_change_unknown_base() -> dict[str, Any]:
    key = [True, True, False, True, False]
    return make_task(
        title='Parametric — unknown base recovered from one letter equation',
        context='Suppose $b>1$ satisfies $\\log_{b}(b^{3}\\cdot 4)=5$. Recover $b$, then judge the claims.',
        statements=[
            '$b=2$.',
            '$\\log_{b}4=2$.',
            '$b=4$.',
            '$\\log_{b}32=5$.',
            '$\\log_{b}8=4$.'
        ],
        answer_key=key,
        bodies=[
            [
                'Expand: $3+\\log_{b}4=5$, so $\\log_{b}4=2$, hence $b^{2}=4$. With $b>1$,',
                '$$b=2$$',
            ],
            [
                '$$\\log_{2}4=2$$',
            ],
            [
                'If $b=4$, then $3+\\log_{4}4=4\\neq 5$.',
            ],
            [
                '$$\\log_{2}32=5$$',
            ],
            [
                '$$\\log_{2}8=3\\neq 4$$',
            ]
        ],
        solution_overview='From $3+\\log_{b}4=5$ recover $\\log_{b}4=2$, hence $b=2$. Then $\\log_{2}32=5$ while $\\log_{2}8=3$.',
        stem_kind='parametric',
    )


def t49_nested_peel_equation() -> dict[str, Any]:
    key = [True, True, True, False, False]
    return make_task(
        title='Nested peel — solve log_2(log_2(log_2 x))=1',
        context='Solve $\\log_{2}\\bigl(\\log_{2}(\\log_{2}x)\\bigr)=1$ on the natural domain of the triple nesting.',
        statements=[
            'The equation forces $\\log_{2}(\\log_{2}x)=2$.',
            'Next, $\\log_{2}x=4$.',
            'The unique solution is $x=16$.',
            '$x=65536$ solves the equation.',
            '$x=2^{16}$ solves the equation.'
        ],
        answer_key=key,
        bodies=[
            [
                'Apply $2^{(\\cdot)}$.',
                '$$\\log_{2}(\\log_{2}x)=2$$',
            ],
            [
                '$$\\log_{2}x=2^{2}=4$$',
            ],
            [
                '$$x=2^{4}=16$$',
            ],
            [
                'Peel $65536=2^{16}$: $16\\mapsto 4\\mapsto 2\\neq 1$.',
            ],
            [
                'Same peel as $65536$, giving outer value $2$, not $1$.',
            ]
        ],
        solution_overview='Peeling once gives $\\log_{2}(\\log_{2}x)=2$, twice gives $\\log_{2}x=4$, hence $x=16$. The giant $2^{16}$ peels to $2$, not $1$.',
        stem_kind='nested',
    )


BUILDERS: list[Callable[[], dict[str, Any]]] = [
    t01_graph_log2_ticks,
    t02_table_recover_base,
    t03_symbolic_quadratic_log,
    t04_parametric_cob_letters,
    t05_nested_triple_peel,
    t06_hybrid_log3_table,
    t07_text_dense_domain_compare,
    t08_piecewise_abs_log,
    t09_applied_decibel_letters,
    t10_rebuild_from_functional,
    t11_domain_tangled_half_base,
    t12_graph_two_bases,
    t13_table_force_via_logs,
    t14_symbolic_mixed_bases_eq,
    t15_parametric_letter_compare,
    t16_nested_invert_equation,
    t17_hybrid_shifted_log,
    t18_text_dense_iff_exp,
    t19_piecewise_log_match,
    t20_applied_half_life_log,
    t21_rebuild_log_two_points,
    t22_domain_tangled_compound,
    t23_graph_log5_ticks,
    t24_table_cob_after_recover,
    t25_symbolic_quotient_eq,
    t26_parametric_competing_rates,
    t27_nested_double_domain,
    t28_hybrid_inverse_pair,
    t29_text_dense_for_every,
    t30_piecewise_sign_split,
    t31_applied_pH_letters,
    t32_rebuild_from_inverse,
    t33_domain_tangled_product,
    t34_graph_ray_crossings,
    t35_table_semi_log_slope,
    t36_symbolic_cob_chain_eq,
    t37_parametric_power_unknown,
    t38_nested_exp_of_log,
    t39_hybrid_ln_graph,
    t40_text_dense_precisely_when,
    t41_piecewise_abs_inside,
    t42_applied_richter,
    t43_rebuild_seed_and_rule,
    t44_domain_tangled_nested_ineq,
    t45_graph_log2_product_check,
    t46_table_judge_claims_base3,
    t47_symbolic_quadratic_ln,
    t48_parametric_change_unknown_base,
    t49_nested_peel_equation,
]


def build_log_tasks() -> list[dict]:
    """Return exactly 49 hard logarithmic task dicts for subsection 10.2."""
    assert len(BUILDERS) == LOG_COUNT
    tasks = [b() for b in BUILDERS]
    assert len(tasks) == LOG_COUNT
    return tasks


def _self_check() -> None:
    tasks = build_log_tasks()
    assert len(tasks) == 49
    hist = Counter(sum(t["answer_key"]) for t in tasks)
    assert set(hist) <= {1, 2, 3, 4, 5}
    kinds = Counter(t["stem_kind"] for t in tasks)
    assert len(kinds) >= 10, kinds
    figs = sum(1 for t in tasks if t.get("figure"))
    tabs = sum(1 for t in tasks if t.get("tables_markdown"))
    for t in tasks:
        assert TAIL.split(".")[0] in t["context"] or "TRUE or FALSE" in t["context"]
        assert len(t["statements"]) == 5
        assert len(set(t["statements"])) == 5
        for i, e in enumerate(t["tactical_explanations"]):
            letter = LETTERS[i]
            verd = "True" if t["answer_key"][i] else "False"
            assert e.startswith(f"**{letter}.** → {verd}"), (t["title"], letter, e[:80])
            assert f"So the statement is {verd}." in e
        blob = (
            t["context"]
            + "|"
            + "|".join(t["statements"])
            + "|"
            + t["solution_overview"]
            + "|"
            + "|".join(t["tactical_explanations"])
        ).lower()
        for phrase in _FORBIDDEN:
            assert phrase.lower() not in blob, (t["title"], phrase)
        # Reject over-escaped KaTeX (two backslashes before the command name)
        raw = (
            t["context"]
            + "|"
            + "|".join(t["statements"])
            + "|"
            + t["solution_overview"]
            + "|"
            + "|".join(t["tactical_explanations"])
        )
        assert "\\\\neq" not in raw
        assert "\\\\to" not in raw
        assert "\\\\infty" not in raw
        # Ban one-step log2(8)=3 as the whole claim
        for s in t["statements"]:
            stripped = re.sub(r"\s+", "", s.lower())
            assert stripped not in {r"$\log_{2}8=3$.", r"$log_28=3$."}
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
