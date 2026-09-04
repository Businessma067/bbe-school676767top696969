#!/usr/bin/env python3
"""Generate the verified Chapter 11.5 differentiation exam task bank."""

from __future__ import annotations

import json
import math
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "data" / "math-ch11-exam.json"


def make_task(
    number: int,
    title: str,
    context: str,
    statements: list[str],
    answer_key: list[bool],
    explanations: list[str],
    overview: str,
) -> dict:
    """Build one consistently formatted task and its natural-tutoring solutions."""
    assert len(statements) == len(answer_key) == len(explanations) == 5
    tactical_explanations = []
    for letter, answer, explanation in zip("ABCDE", answer_key, explanations):
        verdict = "True" if answer else "False"
        tactical_explanations.append(
            f"**{letter}.** → {verdict}\n\n"
            f"{explanation.strip()}\n\nSo the statement is {verdict}."
        )
    return {
        "id": f"math-11-{160 + number}",
        "case_id": f"MATH 11.{160 + number}",
        "title": title,
        "subsection": "11.5",
        "context": context.strip(),
        "statements": statements,
        "answer_key": answer_key,
        "tactical_explanations": tactical_explanations,
        "difficulty_level": "5/5",
        "sort_order": 160 + number,
        "solution_overview": overview.strip(),
        "placeholder": False,
    }


def build_tasks() -> list[dict]:
    """Return all hard, multi-concept Chapter 11.5 tasks."""
    tasks: list[dict] = []

    tasks.append(make_task(
        1,
        "Carpentry workshop: revenue, cost, and build time",
        r"""A small carpentry workshop builds and sells wooden chairs. Let $Q$ be the number of chairs (treated as continuous). Revenue in euros is $R(Q)=-3Q^{2}+90Q$. Production cost in euros is $C(Q)=0.5Q^{3}-9Q^{2}+60Q+200$. After an assembly-bench reconfiguration the build-time function (hours) is
$$T(Q)=\begin{cases}0.5Q^{2}+4Q & \text{if }Q<12\\ 12Q-24 & \text{if }Q\ge 12.\end{cases}$$
The owner is comparing operating decisions, average-cost movements, and a nearby rival rather than looking at any one formula in isolation. Which of the following statements is/are correct?""",
        [
            r"Profit (revenue minus cost) reaches its highest value when $Q=15$ chairs are made and sold.",
            r"Starting from an output of $Q_{0}$ chairs, building one extra chair changes the average cost per chair by roughly $Q_{0}-9-\dfrac{200}{Q_{0}^{2}}$.",
            r"The build-time function $T(Q)$ rises more steeply at $Q=11$ than at $Q=15$.",
            r"A rival workshop's revenue $R_{e}(Q)$ satisfies $R_{e}(6)=R(6)$, and its marginal revenue exceeds this workshop's, $R_{e}^{\prime}(Q)>R^{\prime}(Q)$, throughout $6\le Q\le 10$. It then follows that $R_{e}(9)<R(9)$.",
            r"Revenue is largest at an output exceeding $12$ chairs.",
        ],
        [False, True, True, False, True],
        [
            r"""Profit is $P=R-C=-0.5Q^{3}+6Q^{2}+30Q-200$, hence
$$P^{\prime}(Q)=-1.5Q^{2}+12Q+30=-1.5(Q-10)(Q+2).$$
The positive critical point is $Q=10$, and the derivative is already negative at $Q=15$.""",
            r"""Average cost is $AC(Q)=\\dfrac{C(Q)}{Q}=0.5Q^{2}-9Q+60+\\dfrac{200}{Q}$. Therefore
$$AC^{\prime}(Q)=Q-9-\dfrac{200}{Q^{2}}.$$
The one-unit change is approximated by $AC^{\prime}(Q_{0})$.""",
            r"""On the left branch, $T^{\prime}(Q)=Q+4$, giving $T^{\prime}(11)=15$. On the right branch $T^{\prime}(Q)=12$, so $T^{\prime}(15)=12$ and $15>12$.""",
            r"""Integrate the strict marginal-revenue inequality from $6$ to $9$:
$$R_e(9)-R_e(6)>R(9)-R(6).$$
The equal starting revenues therefore give $R_e(9)>R(9)$, with the inequality in the opposite direction.""",
            r"""Marginal revenue is $R^{\prime}(Q)=-6Q+90$. It vanishes at $Q=15$, and
$$R^{\prime\prime}(Q)=-6<0,$$
so this is the revenue maximum and $15>12$.""",
        ],
        r"""Quadratic revenue, cubic cost, and a piecewise build-time schedule must be separated carefully. Profit has its positive stationary point at $Q=10$, while revenue peaks at $Q=15$. Average cost is found by dividing cost by output before differentiating. The rival comparison follows by integrating marginal revenue, not by reversing the inequality."""
    ))

    tasks.append(make_task(
        2,
        "Harbour café: drinks, cost, and staffing hours",
        r"""A harbour café sells specialty drinks, with daily output $Q$ treated as continuous. Its revenue is $R(Q)=40Q-\dfrac12Q^{2}$ euros and its cost is $C(Q)=\dfrac13Q^{3}-\dfrac92Q^{2}+20Q+80$. During peak service, staffing hours are recorded as
$$H(Q)=\begin{cases}\dfrac12Q^{2}+2Q & \text{if }Q<20\\14Q-120 & \text{if }Q\ge20.\end{cases}$$
Management wants to distinguish a profit condition from a revenue condition and to interpret a competitor's marginal figures correctly. Evaluate each statement. Mark it TRUE or FALSE.""",
        [
            r"Profit $R-C$ has a critical point at $Q=10$.",
            r"At $Q=8$, marginal revenue exceeds marginal cost.",
            r"Staffing hours rise more steeply at $Q=18$ than at $Q=24$.",
            r"Average cost $\\dfrac{C(Q)}{Q}$ is decreasing at $Q=5$.",
            r"If a rival café matches this café's revenue at $Q=6$ but has strictly smaller marginal revenue on $6\le Q\le12$, then the rival's revenue at $Q=10$ must be larger than this café's revenue at $Q=10$.",
        ],
        [True, True, True, True, False],
        [
            r"""After subtraction, $P=-\dfrac13Q^{3}+4Q^{2}+20Q-80$, so
$$P^{\prime}(Q)=-Q^{2}+8Q+20=-(Q-10)(Q+2).$$
Thus $Q=10$ is stationary.""",
            r"""The two marginal quantities are
$$R^{\prime}(Q)=40-Q,\qquad C^{\prime}(Q)=Q^{2}-9Q+20.$$
At $8$ they are $32$ and $12$, respectively.""",
            r"""The left staffing slope is $H^{\prime}(Q)=Q+2$, hence $H^{\prime}(18)=20$. The later branch has slope $H^{\prime}(24)=14$, so the first slope is larger.""",
            r"""Dividing first gives $AC=\dfrac13Q^{2}-\dfrac92Q+20+\\dfrac{80}{Q}$, so
$$AC^{\prime}(Q)=\dfrac23Q-\dfrac92-\dfrac{80}{Q^{2}}.$$
At $Q=5$ this is $\dfrac{10}{3}-\dfrac92-\dfrac{80}{25}<0$.""",
            r"""A smaller marginal revenue over the interval means a smaller accumulated revenue gain:
$$R_e(10)-R_e(6)<R(10)-R(6).$$
Equal revenue at $6$ consequently implies lower rival revenue at $10$.""",
        ],
        r"""The café's profit derivative factors at $Q=10$, whereas the marginal comparison at $Q=8$ requires evaluating both $R^{\prime}$ and $C^{\prime}$. Its staffing rule has different local slopes on either side of $20$. Average cost and an integrated marginal-revenue comparison supply the remaining decisions."""
    ))

    tasks.append(make_task(
        3,
        "Print shop: price, demand, and elasticity",
        r"""A print shop faces daily poster demand $D(p)=120-4p$ when price is $p$ euros, where $0<p<30$. Revenue is $R(p)=pD(p)$ and production cost for $Q$ posters is $C(Q)=2Q+0.05Q^{2}$. The owner is considering both the price-side graph and the output-side cost schedule, so a maximum in one representation need not be a profit maximum. Which of the following statements is/are correct?""",
        [
            r"Revenue is maximised at the price $p=15$.",
            r"At that revenue-maximising price, the price elasticity of demand equals $-1$.",
            r"At the revenue-maximising price, marginal revenue equals marginal cost, so profit is maximised there as well.",
            r"If price rises a little from $p=10$, revenue rises.",
            r"Average cost $\\dfrac{C(Q)}{Q}$ is increasing for every $Q>0$.",
        ],
        [True, True, False, True, True],
        [
            r"""$R(p)=120p-4p^{2}$, so $R^{\prime}(p)=120-8p$. Its zero is $p=15$, and $R^{\prime\prime}(p)=-8<0$.""",
            r"""Point elasticity is
$$\varepsilon(p)=\frac{D^{\prime}(p)p}{D(p)}=\frac{-4p}{120-4p}.$$
At $p=15$, this is $\\dfrac{-60}{60}=-1$.""",
            r"""At $p=15$, quantity is $60$ and revenue is at its maximum, so $MR=0$. But
$$MC=C^{\prime}(60)=2+0.1(60)=8,$$
which rules out a profit optimum there.""",
            r"""The price-side revenue derivative at $10$ is
$$R^{\prime}(10)=120-80=40>0.$$
A sufficiently small increase therefore raises revenue.""",
            r"""Average cost simplifies to $AC(Q)=2+0.05Q$. Thus
$$AC^{\prime}(Q)=0.05>0$$
throughout the positive-output domain.""",
        ],
        r"""Linear demand makes price elasticity especially transparent. Revenue is maximised at unit elasticity, but the positive marginal cost at that price separates revenue maximisation from profit maximisation. The remaining comparisons use the sign of a derivative."""
    ))

    tasks.append(make_task(
        4,
        "Market garden: labour, output, and wage",
        r"""A market garden sells vegetables for a fixed $2$ euros per kilogram. Output from $L$ labour-hours is $Q(L)=30L-L^{2}$ for $0\le L\le20$, labour costs $12$ euros per hour, and fixed cost is $40$ euros. The grower must compare the value of an extra worker-hour with its wage rather than merely pursue the largest physical harvest. Evaluate each statement. Mark it TRUE or FALSE.""",
        [
            r"Profit is maximised at $L=12$ hours.",
            r"At that profit-maximising labour input, the value of marginal product equals the wage.",
            r"Marginal product of labour is still positive at $L=12$.",
            r"Hiring a little more labour than $L=12$ would raise profit.",
            r"Output $Q(L)$ itself is maximised at the same labour input that maximises profit.",
        ],
        [True, True, True, False, False],
        [
            r"""Profit is $\pi(L)=2Q(L)-12L-40=48L-2L^{2}-40$. Therefore
$$\pi^{\prime}(L)=48-4L=0$$
at $L=12$, with $\pi^{\prime\prime}=-4<0$.""",
            r"""Marginal product is $Q^{\prime}(L)=30-2L$. At $12$ it is $6$, so
$$VMP=2\cdot6=12,$$
exactly the wage.""",
            r"""The marginal product calculation gives
$$Q^{\prime}(12)=30-24=6>0.$$
Profit can peak while physical output is still increasing because labour is costly.""",
            r"""Immediately to the right of $12$, $\pi^{\prime}(L)=48-4L<0$. Extra labour then lowers, rather than raises, profit.""",
            r"""Physical output has $Q^{\prime}(L)=0$ at $L=15$. That output maximum is later than the profit maximum at $L=12$.""",
        ],
        r"""The price converts marginal product into value of marginal product. Profit peaks where $VMP$ equals the wage, at a point where output is still rising. Keeping those two objectives separate explains the contrasting labour levels."""
    ))

    tasks.append(make_task(
        5,
        "Courier fleet: routes, cost, and a threshold",
        r"""A courier firm operates $x>0$ city routes each day, treated as a continuous planning quantity. Its total operating cost is
$$C(x)=\begin{cases}x^{2}+20x+100&\text{if }x<25\\45x+100&\text{if }x\ge25,\end{cases}$$
while route revenue is $R(x)=60x-\dfrac12x^{2}$. The dispatch manager is testing whether a cost level, its marginal slope, and its average are being confused at the subcontracting threshold. Which of the following statements is/are correct?""",
        [
            r"Marginal cost jumps upward when route volume crosses $x=25$.",
            r"For $x<25$, average cost is minimised at $x=10$.",
            r"On $x<25$, profit has a critical point at $x=\dfrac{40}{3}$.",
            r"At $x=30$, marginal revenue is negative.",
            r"Because total cost is continuous at $x=25$, its left- and right-hand derivatives must be equal.",
        ],
        [False, True, True, False, False],
        [
            r"""The left marginal cost is $2x+20$, giving $C^{\prime}_{-}(25)=70$. The right marginal cost is $45$, so the jump is from $70$ down to $45$.""",
            r"""For the first branch,
$$AC(x)=x+20+\frac{100}{x},\qquad AC^{\prime}(x)=1-\frac{100}{x^{2}}.$$
The positive zero is $x=10$, and the derivative changes from negative to positive there.""",
            r"""On the first branch, $P=40x-\dfrac32x^{2}-100$. Thus
$$P^{\prime}(x)=40-3x,$$
whose zero is $x=\\dfrac{40}{3}$.""",
            r"""Marginal revenue is $R^{\prime}(x)=60-x$. At $x=30$ this equals $30$, which is positive.""",
            r"""Both cost formulas give $1225$ at $x=25$, establishing continuity. Their one-sided slopes are nevertheless
$$C^{\prime}_{-}(25)=70\ne45=C^{\prime}_{+}(25),$$
so continuity alone does not give differentiability.""",
        ],
        r"""This threshold preserves the cost level but changes the marginal cost. Average cost must be formed before differentiating, while profit uses the revenue-minus-cost derivative. The task also distinguishes a continuous piecewise function from a differentiable one."""
    ))

    tasks.append(make_task(
        6,
        "Gift-tube producer: volume, tax, and rival revenue",
        r"""A gift-tube producer makes cylindrical packages with radius $r$ and height $h=2r$, so package volume is $V(r)=2\pi r^{3}$. Separately, market demand implies price $p(Q)=72-Q$ for $Q$ packages, and a new per-package tax is $6$ euros. The commercial team has mixed a local packaging approximation with output and rival-revenue claims in its report. Evaluate each statement. Mark it TRUE or FALSE.""",
        [
            r"Increasing radius from $2$ to approximately $2.02$ changes volume by about $0.48\pi$ cubic units.",
            r"The elasticity of package volume with respect to radius is $2$.",
            r"Before tax, revenue is maximised at $Q=36$ packages.",
            r"After the $6$ euro tax, net revenue is maximised at $Q=30$ packages.",
            r"If a rival has the same revenue at $Q=10$ and strictly greater marginal revenue for every output from $10$ to $20$, its revenue at $Q=18$ is greater.",
        ],
        [True, False, True, False, True],
        [
            r"""Differentiate $V(r)=2\pi r^{3}$:
$$V^{\prime}(r)=6\pi r^{2},\qquad V^{\prime}(2)=24\pi.$$
With $\Delta r=0.02$, the differential estimate is $24\pi(0.02)=0.48\pi$.""",
            r"""Elasticity is
$$\frac{r}{V(r)}V^{\prime}(r)=\frac{r}{2\pi r^{3}}(6\pi r^{2})=3.$$
The cubic radius relationship supplies elasticity $3$, not $2$.""",
            r"""Revenue is $R(Q)=Q(72-Q)=72Q-Q^{2}$. Since
$$R^{\prime}(Q)=72-2Q=0$$
at $Q=36$ and $R^{\prime\prime}=-2<0$, that output maximises revenue.""",
            r"""Tax-adjusted revenue is $(72-Q-6)Q=66Q-Q^{2}$. Its derivative $66-2Q$ vanishes at
$$Q=33,$$
not at $30$.""",
            r"""Integrating the strict derivative inequality from $10$ to $18$ yields
$$R_e(18)-R_e(10)>R(18)-R(10).$$
The equal initial revenues leave the rival strictly higher at $18$.""",
        ],
        r"""The packaging relation is a cubic, so its local change and elasticity both come from its derivative. The sales side has a quadratic revenue curve, and the tax shifts its linear marginal revenue. A marginal-revenue dominance statement must be integrated over the relevant interval."""
    ))

    tasks.append(make_task(
        7,
        "Bakery chain: demand, tax, and average cost",
        r"""A bakery chain sells meal boxes under inverse demand $p(Q)=50-\dfrac12Q$. Daily production cost is $C(Q)=\dfrac14Q^{2}+12Q+180$, and a proposed city levy would add $4$ euros per box. The analyst is comparing revenue elasticity, pre-tax and post-tax profit, and cost per box for positive continuous $Q$. Which of the following statements is/are correct?""",
        [
            r"Before the levy, profit is maximised at $Q=\dfrac{76}{3}$.",
            r"With the levy, profit is maximised at $Q=22$.",
            r"Average cost is decreasing at $Q=20$.",
            r"At the revenue-maximising price, the price elasticity of demand is $-1$.",
            r"A rival with the same revenue at $Q=10$ and lower marginal revenue throughout $10<Q<18$ finishes with higher revenue at $Q=18$.",
        ],
        [True, False, True, True, False],
        [
            r"""Pre-tax profit is $P=38Q-\dfrac34Q^{2}-180$, so
$$P^{\prime}(Q)=38-\frac32Q.$$
The zero is $Q=\\dfrac{76}{3}$, with negative second derivative $-\\dfrac{3}{2}$.""",
            r"""The levy changes profit to $P_t=34Q-\dfrac34Q^{2}-180$. Therefore
$$P_t^{\prime}(Q)=34-\frac32Q=0$$
at $Q=\\dfrac{68}{3}$, not $22$.""",
            r"""$AC(Q)=\dfrac14Q+12+1\\dfrac{80}{Q}$, giving
$$AC^{\prime}(Q)=\frac14-\frac{180}{Q^{2}}.$$
At $20$, this is $\\dfrac{1}{4}-\\dfrac{180}{400}=-\\dfrac{1}{5}<0$.""",
            r"""Demand in price form is $Q(p)=100-2p$, and revenue is $100p-2p^{2}$. At its maximum $p=25$,
$$\varepsilon=\frac{-2(25)}{100-2(25)}=-1.$$
""",
            r"""Lower marginal revenue makes the rival's accumulated gain smaller:
$$R_e(18)-R_e(10)<R(18)-R(10).$$
Equal revenue at $10$ therefore implies lower rival revenue at $18$.""",
        ],
        r"""The levy shifts the profit derivative but does not change the demand curve. Revenue maximisation occurs at unit elasticity for this linear demand. Average cost needs a quotient before differentiation, and rival levels follow from accumulated marginal revenue."""
    ))

    tasks.append(make_task(
        8,
        "Data studio: labour, output, and marginal value",
        r"""A data-visualisation studio sells completed analysis packages for $3$ euros per unit of measured output. With $L>0$ analyst-hours, output is $Q(L)=80\sqrt{L}$; wages are $20$ euros per hour and fixed overhead is $200$ euros. The studio is deciding whether its staffing objective is output, revenue, or profit. Evaluate each statement. Mark it TRUE or FALSE.""",
        [
            r"Profit is maximised at $L=36$ analyst-hours.",
            r"Doubling analyst-hours while holding all else fixed doubles output.",
            r"The output elasticity with respect to analyst-hours is $\dfrac12$.",
            r"At the profit-maximising labour input, the value of marginal product equals the wage.",
            r"Marginal product is zero at the profit-maximising labour input.",
        ],
        [True, False, True, True, False],
        [
            r"""Profit is $\pi(L)=240\sqrt L-20L-200$, so
$$\pi^{\prime}(L)=\frac{120}{\sqrt L}-20.$$
It is zero at $\sqrt L=6$, hence $L=36$, and the derivative changes from positive to negative.""",
            r"""The output ratio is
$$\frac{Q(2L)}{Q(L)}=\frac{80\sqrt{2L}}{80\sqrt L}=\sqrt2.$$
This is less than $2$, reflecting diminishing marginal product.""",
            r"""Using $Q(L)=80L^{\\frac{1}{2}}$,
$$\varepsilon_L=\frac{LQ^{\prime}(L)}{Q(L)}=\frac12.$$
The exponent is the constant output elasticity.""",
            r"""$Q^{\prime}(L)=40/\sqrt L$. At $L=36$,
$$VMP=3\left(\frac{40}{6}\right)=20,$$
which exactly equals the hourly wage.""",
            r"""At $L=36$ the marginal product is
$$Q^{\prime}(36)=\frac{40}{6}=\frac{20}{3}>0.$$
Profit stops increasing because the value of this product equals the wage, not because output stops rising.""",
        ],
        r"""Square-root production produces diminishing but positive marginal product. Profit is maximised where the resulting value of marginal product equals the wage. The output elasticity describes the proportional response, so it also predicts that doubling labour does not double output."""
    ))

    tasks.append(make_task(
        9,
        "Furniture factory: a smooth production threshold",
        r"""A furniture factory has revenue $R(q)=80q-q^{2}$ and cost $C(q)=\dfrac13q^{3}-5q^{2}+32q+240$ for continuous output $q>0$. Its packing-hours schedule is
$$H(q)=\begin{cases}q^{2}+10q&\text{if }q<15\\40q-225&\text{if }q\ge15.\end{cases}$$
The director is checking profit, marginal conditions, and whether the packing transition actually creates a corner. Which of the following statements is/are correct?""",
        [
            r"Profit is maximised at $q=12$.",
            r"At $q=12$, marginal revenue equals marginal cost.",
            r"Packing hours are continuous at $q=15$.",
            r"Packing hours have a downward derivative jump at $q=15$.",
            r"Average cost is decreasing at $q=10$.",
        ],
        [True, True, True, False, True],
        [
            r"""$P=R-C$ has derivative
$$P^{\prime}(q)=-q^{2}+8q+48=-(q-12)(q+4).$$
At $q=12$, $P^{\prime\prime}(q)=-2q+8=-16<0$.""",
            r"""$R^{\prime}(q)=80-2q$ and $C^{\prime}(q)=q^{2}-10q+32$. At $12$ both calculations give
$$R^{\prime}(12)=56=C^{\prime}(12).$$""",
            r"""The two level calculations are
$$15^{2}+10(15)=375,\qquad40(15)-225=375.$$
The piecewise schedule meets without a gap.""",
            r"""The left derivative is $2q+10$, so it approaches $40$ at $15$. The right derivative is also $40$, hence
$$H^{\prime}_{-}(15)=H^{\prime}_{+}(15)=40.$$
There is no derivative jump.""",
            r"""$AC(q)=\dfrac13q^{2}-5q+32+\\dfrac{240}{q}$, so
$$AC^{\prime}(q)=\frac23q-5-\frac{240}{q^{2}}.$$
At $10$, this equals $\\dfrac{20}{3}-5-\\dfrac{12}{5}<0$.""",
        ],
        r"""The factory's cubic cost creates a quadratic profit derivative whose positive maximum condition occurs at $12$. The packing formula is deliberately continuous and differentiable at its threshold. Average cost requires the fixed cost to be divided by output before taking a derivative."""
    ))

    tasks.append(make_task(
        10,
        "Ride platform: fare, commission, and profit",
        r"""A ride platform faces inverse demand $p(Q)=120-2Q$ and incurs operating cost $C(Q)=\dfrac12Q^{2}+20Q+600$. A city commission of $10$ euros per completed ride may be introduced. The platform compares its revenue peak, its operating-profit peak, fare elasticity, and the effect of the commission using continuous daily rides $Q>0$. Evaluate each statement. Mark it TRUE or FALSE.""",
        [
            r"Before the commission, profit is maximised at $Q=20$ rides.",
            r"Revenue is maximised at the same $Q=20$ rides.",
            r"At the profit-maximising output, marginal revenue equals marginal cost.",
            r"At the fare corresponding to $Q=20$, demand elasticity is $-2$.",
            r"With the commission, profit is maximised at $Q=18$ rides.",
        ],
        [True, False, True, True, True],
        [
            r"""Profit is $P=100Q-\dfrac52Q^{2}-600$, hence
$$P^{\prime}(Q)=100-5Q.$$
Its zero is $20$ and $P^{\prime\prime}=-5<0$.""",
            r"""Revenue is $R=120Q-2Q^{2}$, whose derivative is $120-4Q$. It vanishes at
$$Q=30,$$
not at $20$.""",
            r"""At $Q=20$,
$$MR=R^{\prime}(20)=120-80=40,\qquad MC=C^{\prime}(20)=20+20=40.$$
The two marginal quantities agree.""",
            r"""Demand is $Q(p)=60-\\dfrac{p}{2}$. At $Q=20$, price is $80$, so
$$\varepsilon=\frac{-1}{2}\frac{80}{20}=-2.$$
""",
            r"""The commission makes profit $P_c=90Q-\dfrac52Q^{2}-600$. Thus
$$P_c^{\prime}(Q)=90-5Q=0$$
at $Q=18$.""",
        ],
        r"""The platform's revenue peak and profit peak differ because marginal cost is positive. Converting the inverse demand into $Q(p)$ permits the elasticity calculation. The fixed per-ride commission lowers the linear profit term and shifts the profit maximum inward."""
    ))

    tasks.append(make_task(
        11,
        "Greenhouse: two inputs and labour value",
        r"""A greenhouse produces $Q(L,K)=12L^{\\frac{1}{2}}K^{\\frac{1}{4}}$ baskets of herbs, sold for $10$ euros each. Capital is fixed at $K=16$, labour costs $30$ euros per hour, and fixed greenhouse overhead is $400$. The owner is testing claims about the production exponent, marginal product, and the profit-maximising labour quantity. Which of the following statements is/are correct?""",
        [
            r"With capital fixed at $16$, profit is maximised at $L=16$ labour-hours.",
            r"Doubling labour while capital is fixed doubles output.",
            r"The output elasticity with respect to labour is $\dfrac12$.",
            r"At $L=16$, the value of marginal product is equal to the wage.",
            r"At the profit-maximising labour input, marginal product is zero.",
        ],
        [True, False, True, True, False],
        [
            r"""With $K=16$, output is $Q(L)=24\sqrt L$, so
$$\pi(L)=240\sqrt L-30L-400,\qquad \pi^{\prime}(L)=\frac{120}{\sqrt L}-30.$$
The derivative is zero at $\sqrt L=4$, or $L=16$.""",
            r"""Holding capital fixed,
$$\frac{Q(2L,16)}{Q(L,16)}=2^{\\frac{1}{2}}=\sqrt2.$$
The labour exponent prevents a doubling of output.""",
            r"""Differentiating with respect to labour gives $Q_L=6L^{-\\frac{1}{2}}K^{\\frac{1}{4}}$. Thus
$$\frac{LQ_L}{Q}=\frac12,$$
the exponent on $L$.""",
            r"""At $K=16$, $Q_L=12/\sqrt L$. At $L=16$,
$$VMP=10\left(\frac{12}{4}\right)=30,$$
which is the wage.""",
            r"""The marginal product at that input is
$$Q_L(16,16)=\frac{12}{4}=3>0.$$
It is the marginal value relative to the wage that determines profit maximisation.""",
        ],
        r"""Fixing capital reduces the two-input technology to a square-root labour schedule, but the labour elasticity remains visible in the original production exponent. The wage comparison uses value of marginal product, not the condition that physical marginal product be zero."""
    ))

    tasks.append(make_task(
        12,
        "Solar maintenance: output and a smooth service rule",
        r"""A solar contractor obtains daily energy output $E(m)=100m-2m^{2}$ from $m$ maintenance visits, sells energy for $0.5$ euros per unit, pays $8$ euros per visit, and has fixed cost $50$. Its booking system reports service hours as
$$S(m)=\begin{cases}m^{2}&\text{if }m<10\\20m-100&\text{if }m\ge10.\end{cases}$$
The operations team is deciding whether the service threshold causes a mathematical kink and whether energy and profit have the same optimum. Evaluate each statement. Mark it TRUE or FALSE.""",
        [
            r"Profit is maximised at $m=21$ visits.",
            r"At $m=21$, the value of marginal product equals the visit wage.",
            r"Energy output itself is maximised at $m=21$.",
            r"The booking-hours rule is continuous but not differentiable at $m=10$.",
            r"Service hours rise more steeply at $m=8$ than at $m=12$.",
        ],
        [True, True, False, False, False],
        [
            r"""Profit is $\pi(m)=0.5(100m-2m^{2})-8m-50=42m-m^{2}-50$. Hence
$$\pi^{\prime}(m)=42-2m=0$$
at $m=21$, with $\pi^{\prime\prime}=-2<0$.""",
            r"""$E^{\prime}(m)=100-4m$, so at $21$ the value of marginal product is
$$0.5E^{\prime}(21)=0.5(16)=8.$$
This equals the visit wage.""",
            r"""Physical energy is maximised when $E^{\prime}(m)=100-4m=0$, giving
$$m=25.$$
The wage makes the profit-maximising visit count lower.""",
            r"""The two levels at $10$ are both $100$. Their slopes are
$$S^{\prime}_{-}(10)=2(10)=20,\qquad S^{\prime}_{+}(10)=20,$$
so the rule is differentiable as well as continuous.""",
            r"""On the first branch $S^{\prime}(8)=16$; on the second branch $S^{\prime}(12)=20$. Since $16<20$, the claimed ordering is reversed.""",
        ],
        r"""The solar model makes profit a concave quadratic, while physical energy alone has a different maximum. The booking rule matches both its level and its slope at ten visits, so neither continuity nor differentiability fails at the threshold."""
    ))

    tasks.append(make_task(
        13,
        "Retail launch: price elasticity and a tax",
        r"""A retailer's market demand is $Q(p)=200-5p$, while production cost is $C(Q)=5Q+0.1Q^{2}+300$. The retailer may face a $3$ euros per-unit tax. The board is comparing a revenue-maximising price, a profit-maximising output, an average-cost movement, and a rival's marginal-revenue report. Which of the following statements is/are correct?""",
        [
            r"Revenue is maximised at $p=20$.",
            r"Before tax, profit is maximised at $Q=100$.",
            r"At the revenue-maximising price, demand elasticity equals $-1$.",
            r"Average cost is decreasing at $Q=50$.",
            r"If a rival has equal revenue at $Q=40$ and strictly higher marginal revenue until $Q=60$, it has higher revenue at $Q=50$.",
        ],
        [True, False, True, True, True],
        [
            r"""$R(p)=p(200-5p)=200p-5p^{2}$. Therefore
$$R^{\prime}(p)=200-10p=0$$
at $p=20$, with negative second derivative.""",
            r"""In output form, $p(Q)=40-0.2Q$, so
$$P(Q)=35Q-0.3Q^{2}-300,\qquad P^{\prime}(Q)=35-0.6Q.$$
The stationary output is $Q=\\dfrac{175}{3}$, not $100$.""",
            r"""At $p=20$, quantity is $100$. The elasticity is
$$\varepsilon=\frac{-5(20)}{200-5(20)}=-1.$$
""",
            r"""$AC=5+0.1Q+\\dfrac{300}{Q}$, so
$$AC^{\prime}(Q)=0.1-\frac{300}{Q^{2}}.$$
At $50$ it is $0.1-\\dfrac{300}{2500}=-0.02<0$.""",
            r"""Over the interval from $40$ to $50$,
$$R_e(50)-R_e(40)>R(50)-R(40).$$
Equal revenue at $40$ then gives strictly higher rival revenue at $50$.""",
        ],
        r"""The linear demand curve gives unit elasticity at its revenue maximum. Re-expressing demand as inverse demand is useful for profit in output units. Average cost combines a rising variable component with a falling fixed-cost-per-unit component, and marginal dominance determines the rival comparison."""
    ))

    tasks.append(make_task(
        14,
        "Shipping line: capacity, cost, and a smooth loading rule",
        r"""A shipping line carries $x>0$ container loads per voyage. Revenue is $R(x)=150x-3x^{2}$ and cost is $C(x)=0.5x^{3}-9x^{2}+24x+500$. Loading-hours are
$$L(x)=\begin{cases}x^{2}+5x&\text{if }x<20\\45x-400&\text{if }x\ge20.\end{cases}$$
Executives are comparing an output that maximises profit with an output that maximises revenue, plus a subcontractor's marginal-revenue statement. Evaluate each statement. Mark it TRUE or FALSE.""",
        [
            r"Profit is maximised at $x=14$ loads.",
            r"Revenue is maximised at an output above $20$ loads.",
            r"Average cost is rising at $x=10$.",
            r"The loading-hours rule has a derivative jump at $x=20$.",
            r"If a subcontractor starts with the same revenue at $x=10$ but has lower marginal revenue through $x=18$, it has lower revenue at $x=18$.",
        ],
        [True, True, False, False, True],
        [
            r"""Profit has derivative
$$P^{\prime}(x)=126+12x-1.5x^{2}=-1.5(x-14)(x+6).$$
At $14$, $P^{\prime\prime}=12-3(14)<0$.""",
            r"""$R^{\prime}(x)=150-6x$ vanishes at
$$x=25,$$
and $R^{\prime\prime}=-6<0$. This is above $20$.""",
            r"""$AC=0.5x^{2}-9x+24+\\dfrac{500}{x}$, hence
$$AC^{\prime}(x)=x-9-\frac{500}{x^{2}}.$$
At $10$ the value is $10-9-5=-4<0$, so average cost is falling.""",
            r"""Both loading levels at $20$ are $500$. Their slopes are also equal:
$$L^{\prime}_{-}(20)=2(20)+5=45=L^{\prime}_{+}(20).$$
No derivative jump occurs.""",
            r"""Lower marginal revenue accumulates to a lower increase:
$$R_s(18)-R_s(10)<R(18)-R(10).$$
The equal starting revenues imply the subcontractor is lower at $18$.""",
        ],
        r"""Cubic cost makes profit and revenue peak at different load counts. The average-cost derivative includes the declining fixed-cost share. The loading rule is designed to match both value and slope at twenty, while the subcontractor conclusion follows from integrating the marginal-revenue ordering."""
    ))

    tasks.append(make_task(
        15,
        "Festival stalls: demand, levy, and setup time",
        r"""A festival operator faces demand $Q(p)=90-3p$, or inverse demand $p(Q)=30-\dfrac13Q$. Total stall cost is $C(Q)=\dfrac16Q^{2}+6Q+120$, and the council charges a $4$ euros per-stall levy. Setup time is
$$S(Q)=\begin{cases}\dfrac12Q^{2}+Q&\text{if }Q<20\\21Q-200&\text{if }Q\ge20.\end{cases}$$
The operator is assessing profit, elasticity, average cost, and the operational transition. Which of the following statements is/are correct?""",
        [
            r"Before the levy, marginal revenue equals marginal cost at $Q=24$.",
            r"With the $4$ euro levy, profit is maximised at $Q=20$.",
            r"At the price $p=10$, demand elasticity is $-1$.",
            r"The setup-time rule is both continuous and differentiable at $Q=20$.",
            r"Average cost is falling at $Q=30$.",
        ],
        [True, True, False, True, False],
        [
            r"""$MR=30-\dfrac23Q$ and $MC=\dfrac13Q+6$. At $Q=24$,
$$MR=30-16=14=8+6=MC.$$
""",
            r"""Tax-adjusted profit is
$$P_t(Q)=20Q-\frac12Q^{2}-120.$$
Thus $P_t^{\prime}(Q)=20-Q$, which is zero at $Q=20$ with negative second derivative.""",
            r"""At $p=10$, demand is $Q=90-30=60$. Thus
$$\varepsilon=\frac{-3(10)}{60}=-\frac12,$$
not $-1$.""",
            r"""At $20$, the first formula approaches $\frac12(400)+20=220$, while the second gives $420-200=220$. The one-sided slopes are
$$20+1=21=21,$$
so both continuity and differentiability hold.""",
            r"""$AC=\\dfrac{Q}{6}+6+\\dfrac{120}{Q}$, hence
$$AC^{\prime}(Q)=\frac16-\frac{120}{Q^{2}}.$$
At $30$ this is $\\dfrac{1}{6}-\\dfrac{120}{900}=\\dfrac{1}{30}>0$, so average cost is rising.""",
        ],
        r"""Inverse demand supplies marginal revenue, while the levy shifts the profit derivative. Elasticity is evaluated in the price-demand representation. The setup branches agree in both their values and slopes at twenty, and average cost is assessed from its own derivative."""
    ))

    return tasks


def verify_mathematics() -> None:
    """Check a key derivative, stationary point, or numerical comparison per task."""
    close = lambda actual, expected: math.isclose(actual, expected, rel_tol=1e-12, abs_tol=1e-12)
    assert close(-1.5 * 10**2 + 12 * 10 + 30, 0)                         # 161
    assert close(-10**2 + 8 * 10 + 20, 0)                                # 162
    assert close(120 - 8 * 15, 0)                                        # 163
    assert close(48 - 4 * 12, 0) and close(2 * (30 - 2 * 12), 12)        # 164
    assert close(40 - 3 * (40 / 3), 0) and close(2 * 25 + 20, 70)        # 165
    assert close(72 - 2 * 36, 0) and close(6 * math.pi * 2**2, 24 * math.pi)  # 166
    assert close(38 - 1.5 * (76 / 3), 0) and close(34 - 1.5 * (68 / 3), 0)    # 167
    assert close(120 / math.sqrt(36) - 20, 0) and close(3 * 40 / 6, 20)      # 168
    assert close(-12**2 + 8 * 12 + 48, 0) and close(80 - 2 * 12, 56)         # 169
    assert close(100 - 5 * 20, 0) and close(90 - 5 * 18, 0)                   # 170
    assert close(120 / math.sqrt(16) - 30, 0) and close(10 * 12 / 4, 30)     # 171
    assert close(42 - 2 * 21, 0) and close(0.5 * (100 - 4 * 21), 8)          # 172
    assert close(200 - 10 * 20, 0) and close(35 - 0.6 * (175 / 3), 0)        # 173
    assert close(126 + 12 * 14 - 1.5 * 14**2, 0) and close(150 - 6 * 25, 0)  # 174
    assert close(30 - (2 / 3) * 24, 14) and close(24 / 3 + 6, 14)            # 175


def main() -> None:
    verify_mathematics()
    document = {
        "chapter": 11,
        "subsection": "11.5",
        "title": "Exam-style tasks",
        "explanation_style": "Natural tutoring: shared solution_overview once; each claim as **A.** → True/False with derived formulas (no statement echo).",
        "tasks": build_tasks(),
    }
    assert len(document["tasks"]) == 15
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(document, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {OUT}")
    for task in document["tasks"]:
        print(task["case_id"], "|", task["title"], "|", task["answer_key"])


if __name__ == "__main__":
    main()
