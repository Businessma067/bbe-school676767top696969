#!/usr/bin/env python3
"""Append diverse Ch 11.5 exam tasks (non-piecewise focus + some figures)."""

from __future__ import annotations

import json
import math
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from ch11_svg import STROKES, svg_plane  # noqa: E402

OUT = ROOT / "src" / "data" / "math-ch11-exam.json"
C0, C1, C2 = STROKES


def make_task(
    number: int,
    title: str,
    context: str,
    statements: list[str],
    answer_key: list[bool],
    explanations: list[str],
    overview: str,
    figure: str | None = None,
) -> dict:
    assert len(statements) == len(answer_key) == len(explanations) == 5
    tactical = []
    for letter, answer, explanation in zip("ABCDE", answer_key, explanations):
        verd = "True" if answer else "False"
        tactical.append(
            f"**{letter}.** → {verd}\n\n"
            f"{explanation.strip()}\n\nSo the statement is {verd}."
        )
    task = {
        "id": f"math-11-{160 + number}",
        "case_id": f"MATH 11.{160 + number}",
        "title": title,
        "subsection": "11.5",
        "context": context.strip(),
        "statements": statements,
        "answer_key": answer_key,
        "tactical_explanations": tactical,
        "difficulty_level": "5/5",
        "sort_order": 160 + number,
        "solution_overview": overview.strip(),
        "placeholder": False,
    }
    if figure:
        task["figure"] = figure
    return task


def build_diverse() -> list[dict]:
    tasks: list[dict] = []

    # ── 16. Advertising chain rule (no piecewise) ───────────────────────
    # Q=20*sqrt(a), R=5Q=100 sqrt(a), C=a+40, π=100 a^{1/2}-a-40
    # π'=50 a^{-1/2}-1=0 ⇒ a=2500
    tasks.append(
        make_task(
            16,
            "Podcast studio: advertising spend and listeners",
            r"""A podcast studio buys $a$ euros of advertising ($a>0$). Weekly listenership is $Q(a)=20\sqrt{a}$. Each listener generates $5$ euros of sponsorship revenue, so revenue is $R(a)=5Q(a)$. Advertising is the only variable cost, and there is a fixed cost of $40$, giving total cost $C(a)=a+40$. Which of the following statements is/are correct?""",
            [
                r"Profit is maximised at an advertising budget of $a=2500$ euros.",
                r"At that budget, the marginal revenue from one extra euro of advertising equals $1$.",
                r"Doubling the budget from $a=100$ to $a=400$ doubles listenership.",
                r"At $a=100$, an extra euro of advertising still raises profit.",
                r"Because $Q^{\prime}(a)$ is decreasing, profit cannot have an interior maximum.",
            ],
            [True, True, False, True, False],
            [
                r"""Profit is $\pi(a)=100\sqrt{a}-a-40$. Differentiating,
$$\pi^{\prime}(a)=\dfrac{50}{\sqrt{a}}-1.$$
Setting $\pi^{\prime}=0$ gives $\sqrt{a}=50$, so $a=2500$. Also $\pi^{\prime\prime}<0$ there""",
                r"""Marginal revenue of advertising is $R^{\prime}(a)=5Q^{\prime}(a)=\dfrac{50}{\sqrt{a}}$. At $a=2500$ this equals $1$, matching the marginal cost of one more euro spent""",
                r"""$Q(100)=200$ and $Q(400)=400$, so listenership doubles when advertising is multiplied by four, not by two. Under a square-root response, doubling $a$ multiplies $Q$ by $\sqrt{2}$ only""",
                r"""At $a=100$, $\pi^{\prime}(100)=\dfrac{50}{10}-1=4>0$, so a little more advertising still raises profit""",
                r"""A decreasing marginal product does not forbid an interior profit max; it is exactly what makes $\pi^{\prime}$ cross from $+$ to $-$ once""",
            ],
            r"""Chain-rule revenue $R=100\sqrt{a}$ against linear advertising cost peaks at $a=2500$, where $R^{\prime}=1$. Square-root response is concave, so doubling spend does not double listeners. Positive $\pi^{\prime}$ at small $a$ means advertising is still worthwhile there.""",
        )
    )

    # ── 17. Fence / enclosure ───────────────────────────────────────────
    # three sides: 2x+y=120, A=x(120-2x)=120x-2x^2, A'=120-4x=0 ⇒ x=30, y=60, A=1800
    tasks.append(
        make_task(
            17,
            "Riverside market: three-sided stall enclosure",
            r"""A riverside market builds a rectangular stall enclosure using the river as one long side, so only three sides of fencing are needed. Total fencing length is $120$ metres: two widths $x$ and one length $y$, so $2x+y=120$. Area is $A=xy$. Which of the following statements is/are correct?""",
            [
                r"After eliminating $y$, area is $A(x)=120x-2x^{2}$ for $0<x<60$.",
                r"Area is maximised at $x=30$ metres.",
                r"At that maximum the length parallel to the river is $y=60$ metres.",
                r"The second-derivative test fails at the critical point, so the maximum is inconclusive.",
                r"Using a little less than $30$ metres for each width would raise the enclosed area.",
            ],
            [True, True, True, False, False],
            [
                r"""From $y=120-2x$ one has $A=x(120-2x)=120x-2x^{2}$ on $(0,60)$""",
                r"""$A^{\prime}(x)=120-4x=0$ at $x=30$. Also $A^{\prime\prime}=-4<0$, so this is a maximum""",
                r"""$y=120-2\cdot30=60$""",
                r"""$A^{\prime\prime}(30)=-4<0$, so the second-derivative test confirms a strict local maximum""",
                r"""Just left of $x=30$, $A^{\prime}>0$, so decreasing the width a little lowers area rather than raising it""",
            ],
            r"""Reduce to one variable with the fencing constraint, maximise $A=120x-2x^{2}$ at $x=30$, $y=60$. The second derivative is negative, and the sign of $A^{\prime}$ shows area still rises as one approaches $30$ from the left.""",
        )
    )

    # ── 18. EOQ-style inventory ─────────────────────────────────────────
    # TC(Q)=K D/Q + h \\dfrac{Q}{2}, D=10000, K=40, h=2 → TC'= -KD/Q^2 + h/2=0 ⇒ Q^2=KD/(h/2)=400000 ⇒ Q=200√10≈632.5
    # Use nicer: D=800, K=50, h=4 → Q^2=2KD/h=20000 ⇒ Q=100√2
    # Or D=500, K=80, h=4 → Q^2=2*80*500/4=20000 → same
    # Use D=450, K=50, h=4 → Q^2=2*50*450/4=11250 not square
    # D=200, K=80, h=4 → Q^2=8000
    # Classic: Q*=sqrt(2KD/h). Want Q=100: 10000=2KD/h. K=50, D=400, h=4 → 2*50*400/4=10000. Yes.
    tasks.append(
        make_task(
            18,
            "Pharmacy warehouse: order quantity and holding cost",
            r"""A pharmacy warehouse faces steady annual demand of $D=400$ cartons. Each order costs $K=50$ euros, and holding cost is $h=4$ euros per carton per year. With order size $Q>0$, annual ordering-plus-holding cost is modelled by
$$TC(Q)=\dfrac{KD}{Q}+\dfrac{hQ}{2}=\dfrac{20000}{Q}+2Q.$$
Which of the following statements is/are correct?""",
            [
                r"The cost-minimising order quantity is $Q=100$.",
                r"At that quantity, marginal ordering cost equals marginal holding cost in absolute value.",
                r"Average inventory in the model is $\\dfrac{Q}{2}$, so holding cost at $Q=100$ equals $200$ euros per year.",
                r"Ordering $Q=50$ instead of $Q=100$ would cut total ordering-plus-holding cost.",
                r"$TC^{\prime\prime}(Q)>0$ for every $Q>0$, so the critical point is a minimum.",
            ],
            [True, True, True, False, True],
            [
                r"""$TC^{\prime}(Q)=-\dfrac{20000}{Q^{2}}+2=0$ gives $Q^{2}=10000$, so $Q=100$""",
                r"""The two terms in $TC^{\prime}$ balance when $\dfrac{20000}{Q^{2}}=2$; that is the EOQ first-order condition equating the magnitudes of the two marginal cost pieces""",
                r"""Holding cost is $\dfrac{hQ}{2}=2Q$; at $Q=100$ this is $200$""",
                r"""$TC(100)=200+200=400$ while $TC(50)=400+100=500>400$, so halving the order raises total cost""",
                r"""$TC^{\prime\prime}(Q)=\dfrac{40000}{Q^{3}}>0$ for $Q>0$, confirming a minimum""",
            ],
            r"""EOQ calculus: set $TC^{\prime}=-\\dfrac{KD}{Q^{2}}+\\dfrac{h}{2}=0$ to get $Q=100$. Holding cost is $h\\dfrac{Q}{2}$. The second derivative is positive, and nearby order sizes cost more.""",
        )
    )

    # ── 19. Inverse demand product rule ─────────────────────────────────
    # p=36-3Q, R=36Q-3Q^2, R'=36-6Q=0 ⇒ Q=6, p=18
    # El=-3p/(36-3p); at p=18: -54/(36-54)= wait D from p: Q=\\dfrac{36-p}{3}, D'= -1/3
    # El = D' p / D = (-\\dfrac{1}{3})*18 / 6 = -6/6=-1
    tasks.append(
        make_task(
            19,
            "Artisan soap: inverse demand and revenue",
            r"""An artisan soap maker faces inverse demand $p=36-3Q$ euros per batch when $Q$ batches are sold ($0<Q<12$). Revenue is the product $R(Q)=p(Q)\cdot Q$. Unit production cost is constant at $6$ euros. Which of the following statements is/are correct?""",
            [
                r"Revenue is maximised at $Q=6$ batches.",
                r"At that output, price elasticity of demand equals $-1$.",
                r"Profit is maximised at the same output that maximises revenue.",
                r"Marginal revenue at $Q=4$ equals $12$.",
                r"Because price falls as $Q$ rises, revenue must be decreasing for every $Q>0$.",
            ],
            [True, True, False, True, False],
            [
                r"""$R(Q)=36Q-3Q^{2}$, so $R^{\prime}=36-6Q=0$ at $Q=6$, and $R^{\prime\prime}=-6<0$""",
                r"""Demand is $Q=\\dfrac{36-p}{3}$, so $D^{\prime}(p)=-\\dfrac{1}{3}$. At $Q=6$ one has $p=18$, and
$$El_{Q}(p)=\dfrac{D^{\prime}(p)\cdot p}{Q}=\dfrac{(-\\dfrac{1}{3})\cdot18}{6}=-1$$""",
                r"""Profit $P=R-6Q=30Q-3Q^{2}$ has $P^{\prime}=30-6Q=0$ at $Q=5$, not at the revenue max $Q=6$""",
                r"""$R^{\prime}(4)=36-24=12$""",
                r"""Falling price does not force falling revenue while $MR>0$; here $R^{\prime}>0$ on $(0,6)$""",
            ],
            r"""Product-rule revenue from inverse demand peaks at $Q=6$ with unit elasticity. Constant MC shifts the profit max to $Q=5$. Positive MR on $(0,6)$ means revenue still rises there despite a falling price.""",
        )
    )

    # ── 20. Utility / risk — second derivative ──────────────────────────
    # U(w)=20w-0.05 w^2 on (0,200), U'=20-0.1w, U''=-0.1
    tasks.append(
        make_task(
            20,
            "Founder's wealth utility: risk attitude",
            r"""A founder evaluates wealth $w$ (in thousands of euros) with utility $U(w)=20w-0.05w^{2}$ on $0<w<200$. Which of the following statements is/are correct?""",
            [
                r"Marginal utility is positive throughout $0<w<200$.",
                r"The founder is risk-averse on this interval because $U^{\prime\prime}(w)<0$.",
                r"Utility itself is maximised at $w=200$.",
                r"At $w=50$, marginal utility equals $15$.",
                r"A mean-preserving spread of wealth around $w=80$ would raise expected utility.",
            ],
            [True, True, False, True, False],
            [
                r"""$U^{\prime}(w)=20-0.1w>0$ on $(0,200)$ because $0.1w<20$ there""",
                r"""$U^{\prime\prime}(w)=-0.1<0$, so $U$ is strictly concave — the usual calculus signature of risk aversion""",
                r"""$U^{\prime}=0$ at $w=200$, which is the right endpoint of the open interval; on $(0,200)$ utility is still strictly increasing, so there is no interior maximum below $200$""",
                r"""$U^{\prime}(50)=20-5=15$""",
                r"""For a strictly concave $U$, Jensen's inequality goes the other way: a mean-preserving spread lowers expected utility""",
            ],
            r"""Positive but decreasing marginal utility ($U^{\prime}>0$, $U^{\prime\prime}<0$) means risk aversion. Utility keeps rising on $(0,200)$. A mean-preserving spread reduces expected utility under concavity.""",
        )
    )

    # ── 21. Two goods with budget — reduce to one variable ──────────────
    # U=xy, p_x=2, p_y=4, M=40 → 2x+4y=40 → x+2y=20 → U=x(20-x)/2 wait y=(20-x)/2, U=x(20-x)/2=10x-x^2/2
    # U'=10-x=0 ⇒ x=10, y=5
    tasks.append(
        make_task(
            21,
            "Design duo: two inputs under a budget",
            r"""A design duo spends a budget of $M=40$ euros on hours of illustration $x$ and hours of typesetting $y$, with prices $p_{x}=2$ and $p_{y}=4$, so $2x+4y=40$. Creative output is $U(x,y)=xy$. Reduce the problem to one free variable and treat it as an ordinary single-variable optimisation. Which of the following statements is/are correct?""",
            [
                r"Eliminating $y$ gives $U(x)=10x-\dfrac12 x^{2}$ for $0<x<20$.",
                r"Output is maximised at $x=10$ illustration hours.",
                r"At that point the duo buys $y=5$ typesetting hours.",
                r"The MRS condition $\\dfrac{y}{x}=\\dfrac{p_{x}}{p_{y}}$ holds at the optimum.",
                r"Spending the entire budget on illustration alone ($y=0$) maximises $U$.",
            ],
            [True, True, True, False, False],
            [
                r"""From $2x+4y=40$ one has $y=(20-x)/2=10-x/2$, so $U=x(10-x/2)=10x-\frac12 x^{2}$""",
                r"""$U^{\prime}(x)=10-x=0$ at $x=10$, and $U^{\prime\prime}=-1<0$""",
                r"""$y=10-10/2=5$""",
                r"""$MRS=MU_{x}/MU_{y}=\\dfrac{y}{x}$. At the optimum $\\dfrac{y}{x}=1/2$, while $\\dfrac{p_{x}}{p_{y}}=2/4=1/2$. Wait — they ARE equal. So the claim is TRUE.

Claim says MRS condition \\dfrac{y}{x} = \\dfrac{p_x}{p_y} holds — True.
Change claim to \\dfrac{y}{x} = p_y/p_x (wrong) to make false.""",
                r"""If $y=0$ then $U=0$, which is minimal among interior points, not maximal""",
            ],
            r"""todo""",
        )
    )
    # Fix task 21 - pop and redo
    tasks.pop()
    tasks.append(
        make_task(
            21,
            "Design duo: two inputs under a budget",
            r"""A design duo spends a budget of $M=40$ euros on hours of illustration $x$ and hours of typesetting $y$, with prices $p_{x}=2$ and $p_{y}=4$, so $2x+4y=40$. Creative output is $U(x,y)=xy$. Reduce the problem to one free variable and treat it as an ordinary single-variable optimisation. Which of the following statements is/are correct?""",
            [
                r"Eliminating $y$ gives $U(x)=10x-\dfrac12 x^{2}$ for $0<x<20$.",
                r"Output is maximised at $x=10$ illustration hours.",
                r"At that point the duo buys $y=5$ typesetting hours.",
                r"At the optimum one has $\dfrac{y}{x}=\dfrac{p_{y}}{p_{x}}$.",
                r"Spending the entire budget on illustration alone ($y=0$) maximises $U$.",
            ],
            [True, True, True, False, False],
            [
                r"""From $2x+4y=40$ one has $y=10-\frac12 x$, so $U=x(10-\frac12 x)=10x-\frac12 x^{2}$""",
                r"""$U^{\prime}(x)=10-x=0$ at $x=10$, and $U^{\prime\prime}=-1<0$""",
                r"""$y=10-5=5$""",
                r"""The correct price ratio in the MRS condition is $\\dfrac{p_{x}}{p_{y}}$. Here $\\dfrac{y}{x}=\frac12=\\dfrac{p_{x}}{p_{y}}$, not $\\dfrac{p_{y}}{p_{x}}=2$""",
                r"""With $y=0$ one has $U=0$, far below the interior maximum $U=50$""",
            ],
            r"""Budget reduction yields $U=10x-\frac12 x^{2}$, maximised at $x=10$, $y=5$. The MRS matches $\\dfrac{p_x}{p_y}$, not the reciprocal. Corner solutions with $y=0$ kill the product utility.""",
        )
    )

    # ── 22. Graph: marginal profit P' ───────────────────────────────────
    # P'(Q) = -(Q-2)(Q-8) = -Q^2+10Q-16, positive on (2,8)
    def fp_profit(x: float) -> float:
        return -(x - 2.0) * (x - 8.0)

    fig22 = svg_plane(
        [{"fn": fp_profit, "label": "P′", "stroke": C0}],
        xmin=0,
        xmax=10,
        ymin=-10,
        ymax=12,
        title="Marginal profit P′",
        xlabel="Q",
        xticks=[0, 2, 4, 6, 8, 10],
        yticks=[-8, -4, 0, 4, 8],
        mark_points=[(2, 0, C0), (8, 0, C0)],
    )
    tasks.append(
        make_task(
            22,
            "Bike workshop: read expand/contract from a P′ graph",
            r"""A bike workshop's weekly profit $P(Q)$ is not printed as a formula. Instead the figure shows marginal profit $P^{\prime}(Q)$. Zeros are marked at $Q=2$ and $Q=8$. Use only the figure (and the usual sign reading of $P^{\prime}$). Which of the following statements is/are correct?""",
            [
                r"On $(2,8)$ the workshop should expand a little: marginal profit is positive there.",
                r"Profit has a local maximum at $Q=8$.",
                r"Profit has a local minimum at $Q=2$.",
                r"At $Q=5$, reading the scale, $P^{\prime}$ is greater than $6$.",
                r"Because $P^{\prime}$ peaks somewhere near $Q=5$, that output maximises profit itself.",
            ],
            [True, True, True, True, False],
            [
                r"""Between the marked zeros the curve sits above the axis, so $P^{\prime}>0$ on $(2,8)$: a little more output raises profit""",
                r"""At $Q=8$, $P^{\prime}$ changes from $+$ to $-$, which is a local maximum of $P$""",
                r"""At $Q=2$, $P^{\prime}$ changes from $-$ to $+$, which is a local minimum of $P$""",
                r"""The midpoint peak of this downward-opening parabola has height $-(5-2)(5-8)=9>6$""",
                r"""A peak of $P^{\prime}$ is where profit climbs fastest, not where profit is largest. Profit peaks where $P^{\prime}$ crosses down through zero""",
            ],
            r"""Read signs and crossings of $P^{\prime}$ only. Expand on $(2,8)$, local min at $2$, local max at $8$. The peak of $P^{\prime}$ is steepest climb, not the profit maximum.""",
            figure=fig22,
        )
    )

    # ── 23. Graph: MR and MC together ───────────────────────────────────
    # MR=30-2Q, MC=2+0.5Q, cross: 30-2Q=2+0.5Q ⇒ 28=2.5Q ⇒ Q=11.2
    # Use nicer: MR=24-2Q, MC=4+Q, cross: 24-2Q=4+Q ⇒ 20=3Q ⇒ Q=20/3
    # Or MR=20-Q, MC=2+Q, cross Q=9
    def mr(x: float) -> float:
        return 20.0 - x

    def mc(x: float) -> float:
        return 2.0 + x

    fig23 = svg_plane(
        [
            {"fn": mr, "label": "MR", "stroke": C0},
            {"fn": mc, "label": "MC", "stroke": C1},
        ],
        xmin=0,
        xmax=18,
        ymin=-2,
        ymax=22,
        title="MR and MC on one plane",
        xlabel="Q",
        xticks=[0, 3, 6, 9, 12, 15, 18],
        yticks=[0, 5, 10, 15, 20],
        mark_points=[(9, 11, "#444444")],
    )
    tasks.append(
        make_task(
            23,
            "Candle maker: MR and MC on shared axes",
            r"""A candle maker's marginal revenue (brown) and marginal cost (green) are plotted on the same axes in the figure. The curves meet near $Q=9$. No algebraic formulas are supplied in the stem — reason from the picture and standard MR/MC logic. Which of the following statements is/are correct?""",
            [
                r"At outputs a little below $Q=9$, marginal revenue lies above marginal cost, so expanding raises profit.",
                r"The profit-maximising interior candidate is where the two curves cross.",
                r"At $Q=15$, marginal cost exceeds marginal revenue.",
                r"Because MR slopes down and MC slopes up, their crossing is a profit maximum rather than a minimum.",
                r"The height of the crossing is the maximised profit level $P(9)$.",
            ],
            [True, True, True, True, False],
            [
                r"""Left of the marked crossing, brown sits above green, so $MR>MC$ and a little more output raises profit""",
                r"""The standard first-order condition is $MR=MC$, which is the intersection on the shared plane""",
                r"""At $Q=15$, green is clearly above brown on the figure""",
                r"""With falling MR and rising MC, $MR-MC$ changes from $+$ to $-$ at the cross, so profit has a local maximum there""",
                r"""The crossing height is the common value of $MR$ and $MC$, not the level of total profit $P$""",
            ],
            r"""Shared-plane MR/MC: expand while brown is above green, stop at the cross. The cross is a max because MR falls and MC rises. Its height is a marginal value, not total profit.""",
            figure=fig23,
        )
    )

    # ── 24. Graph: f and f' consistency ─────────────────────────────────
    # f(x)= -(x-1)(x-5)^2 / something — use f from integrating fp_down style
    # fp = -(x-1)(x-5), f = -x^3/3+3x^2-5x (from earlier gen)
    def f_level(x: float) -> float:
        return -(x**3) / 3.0 + 3.0 * x * x - 5.0 * x

    def f_deriv(x: float) -> float:
        return -(x - 1.0) * (x - 5.0)

    fig24 = svg_plane(
        [
            {"fn": f_level, "label": "f", "stroke": C0},
            {"fn": f_deriv, "label": "f′", "stroke": C1},
        ],
        xmin=0,
        xmax=6,
        ymin=-12,
        ymax=10,
        title="f and f′ on the same axes",
        xlabel="x",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-12, -8, -4, 0, 4, 8],
        mark_points=[(1, 0, C1), (5, 0, C1)],
    )
    tasks.append(
        make_task(
            24,
            "Clinic throughput: match a level curve to its slope",
            r"""A clinic tracks a throughput index $f$ (brown) and its derivative $f^{\prime}$ (green) on one shared figure. Which of the following statements is/are correct?""",
            [
                r"Turning points of brown line up with zeros of green.",
                r"Where green is positive, brown is rising.",
                r"The highest point of green is a local maximum of brown.",
                r"At $x=3$, green is near its peak height, matching the steepest climb of brown.",
                r"Brown has a local minimum near $x=1$ and a local maximum near $x=5$.",
            ],
            [True, True, False, True, False],
            [
                r"""Critical points of $f$ are exactly the zeros of $f^{\prime}$; the figure shows those alignments""",
                r"""Positive $f^{\prime}$ means $f$ is increasing — brown climbs wherever green is above the axis""",
                r"""The peak of green is where brown's slope is largest, not where brown itself peaks. Brown's peak is where green crosses zero from $+$ to $-$ near $x=5$""",
                r"""Midway between the zeros, green reaches about height $4$, and brown is climbing steeply there""",
                r"""Sign chart of green: $-$ on $(0,1)$, $+$ on $(1,5)$, $-$ after $5$. So $x=1$ is a local min and $x=5$ a local max — wait that would make the claim TRUE.

Claim: local min near 1 and local max near 5 — TRUE.
Want one false among these — C is already false. E is true. Good answers: T,T,F,T,F — need E false.

Change E to: brown has a local maximum near x=1.""",
            ],
            r"""todo""",
            figure=fig24,
        )
    )
    tasks.pop()
    tasks.append(
        make_task(
            24,
            "Clinic throughput: match a level curve to its slope",
            r"""A clinic tracks a throughput index $f$ (brown) and its derivative $f^{\prime}$ (green) on one shared figure. Which of the following statements is/are correct?""",
            [
                r"Turning points of brown line up with zeros of green.",
                r"Where green is positive, brown is rising.",
                r"The highest point of green is a local maximum of brown.",
                r"At $x=3$, green is near its peak height, matching the steepest climb of brown.",
                r"Brown has a local maximum near $x=1$.",
            ],
            [True, True, False, True, False],
            [
                r"""Critical points of $f$ are zeros of $f^{\prime}$; the marked green crossings sit under brown's turning points""",
                r"""Positive $f^{\prime}$ means $f$ is increasing: brown climbs wherever green is above the axis""",
                r"""The peak of green is where brown's slope is steepest, not where brown peaks. Brown peaks where green crosses from $+$ to $-$ near $x=5$""",
                r"""Between the zeros, green's height is about $4$ at $x=3$, matching brown's steep middle climb""",
                r"""At $x=1$, green changes $-$ to $+$, so brown has a local minimum there, not a maximum""",
            ],
            r"""Consistency between $f$ and $f^{\prime}$ on one plane: zeros of green mark turns of brown; the peak of green is steepest slope, not a peak of brown.""",
            figure=fig24,
        )
    )

    # ── 25. Inflection / cost acceleration ──────────────────────────────
    # C(Q)=Q^3-6Q^2+40Q+10, C'=3Q^2-12Q+40, C''=6Q-12=0 at Q=2
    # C''<0 on (0,2) cost decelerating? Wait C''=6(Q-2), so C''<0 for Q<2 (concave down MC falling), C''>0 for Q>2
    tasks.append(
        make_task(
            25,
            "Ceramic kiln: cost inflection and marginal cost",
            r"""A ceramic kiln has weekly cost $C(Q)=Q^{3}-6Q^{2}+40Q+10$ for output $Q\ge0$. Which of the following statements is/are correct?""",
            [
                r"Marginal cost is $C^{\prime}(Q)=3Q^{2}-12Q+40$.",
                r"$C$ has an inflection point at $Q=2$.",
                r"On $(0,2)$, marginal cost is decreasing.",
                r"Average cost equals marginal cost at every inflection point of $C$.",
                r"At $Q=0$, fixed cost is $10$.",
            ],
            [True, True, True, False, True],
            [
                r"""Differentiate term by term: $C^{\prime}=3Q^{2}-12Q+40$""",
                r"""$C^{\prime\prime}(Q)=6Q-12=0$ at $Q=2$, and $C^{\prime\prime}$ changes sign there, so $Q=2$ is an inflection of $C$""",
                r"""$C^{\prime\prime}(Q)<0$ on $(0,2)$, so $C^{\prime}$ is decreasing there""",
                r"""Inflection of $C$ is about $C^{\prime\prime}=0$; it need not solve $AC=MC$. Those meet where $AC^{\prime}=0$, a different condition""",
                r"""$C(0)=10$ is the fixed cost""",
            ],
            r"""Read $C^{\prime}$, $C^{\prime\prime}$, and fixed cost separately. The inflection $C^{\prime\prime}=0$ at $Q=2$ marks where MC stops falling; it is not the $AC=MC$ point.""",
        )
    )

    # ── 26. Newton quotient story ───────────────────────────────────────
    # P(x)=x^2-6x+20, P'(a)=2a-6, Newton (P(a+h)-P(a))/h = 2a+h-6
    tasks.append(
        make_task(
            26,
            "Pop-up shop: Newton quotient for weekend profit",
            r"""A pop-up shop models weekend profit (hundreds of euros) by $P(x)=x^{2}-6x+20$, where $x$ is the number of staffed hours. Which of the following statements is/are correct?""",
            [
                r"The Newton quotient $\dfrac{P(a+h)-P(a)}{h}$ simplifies to $2a+h-6$.",
                r"$P^{\prime}(4)=2$.",
                r"The tangent line at $x=4$ is $y=2x$.",
                r"Profit is decreasing for all $x>3$.",
                r"$x=3$ is a local minimum of $P$.",
            ],
            [True, True, False, False, True],
            [
                r"""Expand $P(a+h)=(a+h)^{2}-6(a+h)+20$ and subtract $P(a)$; dividing by $h$ leaves $2a+h-6$""",
                r"""$P^{\prime}(x)=2x-6$, so $P^{\prime}(4)=2$""",
                r"""$P(4)=16-24+20=12$, so the tangent is $y-12=2(x-4)$, i.e. $y=2x+4$, not $y=2x$""",
                r"""$P^{\prime}<0$ on $(-\infty,3)$ and $P^{\prime}>0$ on $(3,\infty)$, so profit is increasing for $x>3$""",
                r"""$P^{\prime}$ changes $-$ to $+$ at $x=3$, and $P^{\prime\prime}(3)=2>0$, so $x=3$ is a local minimum""",
            ],
            r"""Simplify the Newton quotient to recover $P^{\prime}=2x-6$. Evaluate the tangent carefully with the point-slope form. The critical point $x=3$ is a minimum; profit rises afterward.""",
        )
    )

    # ── 27. Learning / experience curve (power) ─────────────────────────
    # C(Q)=80 Q^{0.5}, AC=80 Q^{-0.5}, AC'=-40 Q^{-1.5}<0
    # MC=40 Q^{-0.5}=AC/2
    tasks.append(
        make_task(
            27,
            "App studio: square-root learning cost",
            r"""An app studio's cumulative production cost for $Q>0$ releases is $C(Q)=80\sqrt{Q}$. Which of the following statements is/are correct?""",
            [
                r"Marginal cost is $C^{\prime}(Q)=40/\sqrt{Q}$.",
                r"Average cost is decreasing for every $Q>0$.",
                r"Marginal cost equals half of average cost at every $Q>0$.",
                r"Doubling cumulative output doubles total cost.",
                r"At $Q=16$, marginal cost equals $10$.",
            ],
            [True, True, True, False, True],
            [
                r"""Power rule: $C^{\prime}(Q)=80\cdot\frac12 Q^{-\\frac{1}{2}}=40/\sqrt{Q}$""",
                r"""$AC(Q)=80/\sqrt{Q}$ has derivative $-40 Q^{-\\frac{3}{2}}<0$ for $Q>0$""",
                r"""$AC=80/\sqrt{Q}$ and $MC=40/\sqrt{Q}$, so $MC=\frac12 AC$ identically""",
                r"""$C(2Q)=80\sqrt{2Q}=\sqrt{2}\,C(Q)$, so cost rises by factor $\sqrt{2}$, not $2$""",
                r"""$C^{\prime}(16)=\\dfrac{40}{4}=10$""",
            ],
            r"""Square-root total cost yields falling average cost and $MC=\frac12 AC$. Scaling $Q$ by $2$ scales $C$ by $\sqrt{2}$ only.""",
        )
    )

    # ── 28. Composite seasonality without piecewise ─────────────────────
    # R(t)=30t-t^2 for t in [0,20] "weeks of campaign", or use R(t)=t e^{-t/4} style
    # Keep polynomial: seasonal demand D(t)=16t-t^2, price 3, cost 2 per unit + 10
    # π=3D-2D-10=D-10=16t-t^2-10, π'=16-2t=0 ⇒ t=8
    tasks.append(
        make_task(
            28,
            "Summer festival: campaign weeks and ticket profit",
            r"""A summer festival sells tickets over a campaign of $t$ weeks ($0\le t\le16$). Ticket volume is $D(t)=16t-t^{2}$. Net profit (after a fixed setup of $10$) is $\pi(t)=D(t)-10=16t-t^{2}-10$ when each ticket contributes $1$ euro of margin. Which of the following statements is/are correct?""",
            [
                r"Profit is maximised at $t=8$ weeks.",
                r"Ticket volume $D(t)$ is maximised at the same $t$ that maximises profit.",
                r"At $t=4$, profit is still increasing.",
                r"The campaign's profit is negative at $t=0$.",
                r"Extending the campaign from $t=8$ to $t=12$ raises total ticket volume but lowers profit.",
            ],
            [True, True, True, True, False],
            [
                r"""$\pi^{\prime}(t)=16-2t=0$ at $t=8$, and $\pi^{\prime\prime}=-2<0$""",
                r"""$D$ and $\pi$ differ by the constant $10$, so they share the same maximiser $t=8$""",
                r"""$\pi^{\prime}(4)=16-8=8>0$""",
                r"""$\pi(0)=-10<0$""",
                r"""$D(12)=16\cdot12-144=48$ and $D(8)=64$, so volume falls from $8$ to $12$, not rises. Profit also falls because one is past the max""",
            ],
            r"""Margin-per-ticket profit tracks volume up to a constant, so both peak at $t=8$. Past the peak both volume and profit decline.""",
        )
    )
    # Fix E - claim says volume rises but it falls, so claim is false. Good.

    # ── 29. Graph: concave utility / U' ─────────────────────────────────
    def u_prime(x: float) -> float:
        return 12.0 - 0.4 * x  # zero at 30

    fig29 = svg_plane(
        [{"fn": u_prime, "label": "MU", "stroke": C0}],
        xmin=0,
        xmax=40,
        ymin=-4,
        ymax=14,
        title="Marginal utility MU",
        xlabel="c",
        xticks=[0, 10, 20, 30, 40],
        yticks=[-4, 0, 4, 8, 12],
        mark_points=[(30, 0, C0)],
    )
    tasks.append(
        make_task(
            29,
            "Coffee subscription: read marginal utility from a graph",
            r"""A coffee subscription service models a subscriber's marginal utility of cups $c$ per month by the figure (labelled MU). No formula is printed. Which of the following statements is/are correct?""",
            [
                r"Marginal utility is positive on $(0,30)$ and negative afterward.",
                r"Utility of cups is increasing on $(0,30)$.",
                r"Utility has a local maximum at $c=30$.",
                r"At $c=10$, MU is greater than $6$.",
                r"Because MU is linear and falling, the subscriber prefers a 50–50 gamble over its average for sure.",
            ],
            [True, True, True, True, False],
            [
                r"""The MU graph crosses from above the axis to below at $c=30$""",
                r"""Positive MU means utility rises with $c$ on that interval""",
                r"""MU changes $+$ to $-$ at $c=30$, so utility has a local maximum there""",
                r"""The intercept is $12$ and the line falls gently; at $c=10$ the height is near $8>6$""",
                r"""Falling MU means concave utility (risk aversion): the subscriber prefers the average for sure over a mean-preserving gamble, not the other way around""",
            ],
            r"""Read MU signs for monotonicity of utility and the $+$ to $-$ crossing for a utility peak. Declining MU is risk aversion, not risk loving.""",
            figure=fig29,
        )
    )

    # ── 30. Shadow / one constraint classic — already have 17,21. Do matching derivatives story
    # Log barrier? Keep: temperature spoilage S(t)=t^3-6t^2+9t on [0,4]
    # S'=3t^2-12t+9=3(t^2-4t+3)=3(t-1)(t-3)
    # local max t=1, local min t=3
    tasks.append(
        make_task(
            30,
            "Cold-chain: spoilage index over delivery hours",
            r"""A cold-chain delivery records a spoilage index $S(t)=t^{3}-6t^{2}+9t$ over $0\le t\le4$ hours after loading. Which of the following statements is/are correct?""",
            [
                r"$S^{\prime}(t)=3(t-1)(t-3)$.",
                r"Spoilage has a local maximum at $t=1$.",
                r"Spoilage has a local minimum at $t=3$.",
                r"Among the critical points in $(0,4)$, the global maximum of $S$ on $[0,4]$ is at $t=1$.",
                r"$S^{\prime\prime}(1)<0$ and $S^{\prime\prime}(3)>0$, matching the local max / local min reading.",
            ],
            [True, True, True, False, True],
            [
                r"""$S^{\prime}=3t^{2}-12t+9=3(t^{2}-4t+3)=3(t-1)(t-3)$""",
                r"""At $t=1$, $S^{\prime}$ changes $+$ to $-$ (for $t<1$ both factors negative so $S^{\prime}>0$; between $1$ and $3$, $S^{\prime}<0$)""",
                r"""At $t=3$, $S^{\prime}$ changes $-$ to $+$""",
                r"""Compare values: $S(0)=0$, $S(1)=1-6+9=4$, $S(3)=27-54+27=0$, $S(4)=64-96+36=4$. So $t=1$ and $t=4$ tie at height $4$; the global max on the closed interval is not uniquely at $t=1$""",
                r"""$S^{\prime\prime}=6t-12$, so $S^{\prime\prime}(1)=-6<0$ and $S^{\prime\prime}(3)=6>0$""",
            ],
            r"""Factor $S^{\prime}$ to locate $t=1$ (local max) and $t=3$ (local min). Endpoint comparison shows $S(4)=S(1)=4$, so the closed-interval global max is not unique to $t=1$.""",
        )
    )

    assert len(tasks) == 15, len(tasks)
    return tasks


def verify_diverse(tasks: list[dict]) -> None:
    close = lambda a, b: math.isclose(a, b, rel_tol=1e-9, abs_tol=1e-9)
    # 16 advertising
    assert close(50 / math.sqrt(2500) - 1, 0)
    # 17 fence
    assert close(120 - 4 * 30, 0)
    # 18 EOQ
    assert close(-20000 / 100**2 + 2, 0)
    # 19 soap
    assert close(36 - 6 * 6, 0)
    # 20 utility
    assert close(20 - 0.1 * 50, 15)
    # 21 design
    assert close(10 - 10, 0)
    # 22 P'
    assert close(-(5 - 2) * (5 - 8), 9)
    # 23 MR=MC
    assert close(20 - 9, 2 + 9)
    # 25 kiln
    assert close(6 * 2 - 12, 0)
    # 26 newton
    assert close(2 * 4 - 6, 2)
    # 27 learning
    assert close(40 / 4, 10)
    # 28 festival
    assert close(16 - 2 * 8, 0)
    # 29 MU
    assert close(12 - 0.4 * 10, 8)
    # 30 spoilage
    assert close((1 - 6 + 9), 4) and close((64 - 96 + 36), 4)
    assert all(len(t["statements"]) == 5 for t in tasks)
    print("diverse math checks OK")


def main() -> None:
    diverse = build_diverse()
    verify_diverse(diverse)
    doc = json.loads(OUT.read_text())
    # Drop any previous 176+ appends, keep 161-175
    core = [t for t in doc["tasks"] if int(t["case_id"].split(".")[1]) <= 175]
    assert len(core) == 15, len(core)
    doc["tasks"] = core + diverse
    assert len(doc["tasks"]) == 30
    OUT.write_text(json.dumps(doc, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {OUT} with {len(doc['tasks'])} tasks")
    for t in diverse:
        flags = []
        if t.get("figure"):
            flags.append("GRAPH")
        if "begin{cases}" in t["context"]:
            flags.append("piecewise")
        print(t["case_id"], t["title"][:48], t["answer_key"], " ".join(flags))


if __name__ == "__main__":
    main()
