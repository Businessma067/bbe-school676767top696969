#!/usr/bin/env python3
"""Hand-deepen MATH 8.108–8.117 exam letters to MATH 13.18 tutoring depth.

Also replaces stub solution_overviews with a shared-model setup used once.
Preserves statements and answer_key.
"""

from __future__ import annotations

import json
from pathlib import Path

PATH = Path(__file__).resolve().parents[1] / "src/data/math-ch8-exam.json"

OVERVIEWS: dict[str, str] = {
    "MATH 8.108": r"""A kiln uses the cubic power model $M(s)=3s^{3}$ grams for mold scale $s>0$. The same calibration is evaluated at $s=1$, $s=2$, and $s=4$ with no rounding.

**Answer.** The shared model is $M(s)=3s^{3}$. Levels keep the coefficient $3$; scale ratios cancel it and leave only a power of the input ratio. Each letter only checks its extra evaluation or comparison.""",
    "MATH 8.109": r"""A laboratory response follows $Y(x)=Kx^{3/2}$ for $K>0$ and $x>0$. A scale test multiplies the input by $4$ while $K$ stays fixed.

**Answer.** Scale ratios cancel $K$ and leave $c^{a}$ with $c=4$ and $a=\dfrac{3}{2}$. Point elasticity for a power law equals the exponent $a$. Each letter only checks its multiplier, dependence, direction, identity, or elasticity claim.""",
    "MATH 8.110": r"""A pressure setting $x>0$ must satisfy $4x^{3/2}=108$. The controller accepts only the positive real root and isolates the power before raising both sides to the reciprocal exponent.

**Answer.** Isolating gives $x^{3/2}=27$, then $x=27^{2/3}=9$. On $x>0$ the map $x\mapsto x^{3/2}$ is strictly increasing, so the positive root is unique. Each letter only checks its isolation, root, domain, square-root, or uniqueness claim.""",
    "MATH 8.111": r"""A data pipeline applies $g(x)=8x^{3}$ and then $f(u)=\dfrac12 u^{1/3}$ on the reals, using the real cube root.

**Answer.** Both composition orders simplify to the identity, so $f$ and $g$ are inverses on $\mathbb{R}$. Each letter only expands one composition order, a numerical specialization, or a single-map evaluation.""",
    "MATH 8.112": r"""A market model uses $q(p)=Kp^{-3/2}$ for $K>0$ and price $p>0$. Point elasticity is $\varepsilon=(p/q)(dq/dp)$, and price may be scaled by $4$ with $K$ fixed.

**Answer.** For $q=Kp^{a}$ one has $\varepsilon=a=-\dfrac{3}{2}$, and a price scale $c$ multiplies demand by $c^{a}$. The coefficient $K$ cancels in both elasticity and scale ratios. Each letter only checks its elasticity, multiplier, direction, $K$-dependence, or positivity claim.""",
    "MATH 8.113": r"""A kiln uses the cubic power model $M(s)=4s^{3}$ grams for mold scale $s>0$. The same calibration is evaluated at $s=1$, $s=2$, and $s=4$ with no rounding.

**Answer.** The shared model is $M(s)=4s^{3}$. Levels keep the coefficient $4$; scale ratios cancel it and leave only a power of the input ratio. Each letter only checks its extra evaluation or comparison.""",
    "MATH 8.114": r"""A laboratory response follows $Y(x)=Kx^{2/3}$ for $K>0$ and $x>0$. A scale test multiplies the input by $8$ while $K$ stays fixed.

**Answer.** Scale ratios cancel $K$ and leave $c^{a}$ with $c=8$ and $a=\dfrac{2}{3}$. Point elasticity equals the exponent $a$. Each letter only checks its multiplier, dependence, direction, identity, or elasticity claim.""",
    "MATH 8.115": r"""A pressure setting $x>0$ must satisfy $5x^{3/2}=320$. The controller accepts only the positive real root and isolates the power before raising both sides to the reciprocal exponent.

**Answer.** Isolating gives $x^{3/2}=64$, then $x=64^{2/3}=16$. On $x>0$ the map $x\mapsto x^{3/2}$ is strictly increasing, so the positive root is unique. Each letter only checks its isolation, root, domain, square-root, or uniqueness claim.""",
    "MATH 8.116": r"""A data pipeline applies $g(x)=27x^{3}$ and then $f(u)=\dfrac13 u^{1/3}$ on the reals, using the real cube root.

**Answer.** Both composition orders simplify to the identity, so $f$ and $g$ are inverses on $\mathbb{R}$. Each letter only expands one composition order, a numerical specialization, or a single-map evaluation.""",
    "MATH 8.117": r"""A market model uses $q(p)=Kp^{-2}$ for $K>0$ and price $p>0$. Point elasticity is $\varepsilon=(p/q)(dq/dp)$, and price may be scaled by $3$ with $K$ fixed.

**Answer.** For $q=Kp^{a}$ one has $\varepsilon=a=-2$, and a price scale $c$ multiplies demand by $c^{a}$. The coefficient $K$ cancels in both elasticity and scale ratios. Each letter only checks its elasticity, multiplier, direction, $K$-dependence, or positivity claim.""",
}

# Bodies only (no header/closer). case_id -> 5 bodies.
DEEP: dict[str, list[str]] = {
    "MATH 8.108": [
        r"""The overview already recovered the cubic kiln model

$$M(s)=3s^{3}$$

Substitute the claimed scale $s=1$:

$$M(1)=3\cdot 1^{3}$$

$$1^{3}=1$$

$$M(1)=3\cdot 1$$

$$M(1)=3$$

The computed output equals the claimed value $3$.""",
        r"""Keep the same calibrated model from the overview and evaluate at $s=2$:

$$M(s)=3s^{3}$$

$$M(2)=3\cdot 2^{3}$$

$$2^{3}=8$$

$$M(2)=3\cdot 8$$

$$M(2)=24$$

Comparing with the claimed reading $24$ gives

$$24=24$$"""
        r"""Name the cubic rule once more and substitute the third recorded scale $s=4$:

$$M(s)=3s^{3}$$

$$M(4)=3\cdot 4^{3}$$

$$4^{3}=64$$

$$M(4)=3\cdot 64$$

$$M(4)=192$$

Comparing with the claimed reading $192$ gives

$$192=192$$"""
        r"""Form the output ratio so the positive coefficient cancels:

$$\frac{M(4)}{M(2)}=\frac{3\cdot 4^{3}}{3\cdot 2^{3}}$$

$$\frac{M(4)}{M(2)}=\left(\frac{4}{2}\right)^{3}$$

$$\frac{4}{2}=2$$

$$\left(\frac{4}{2}\right)^{3}=2^{3}$$

$$2^{3}=8$$

The claim asserts $M(4)=2M(2)$, which would mean the ratio equals $2$. The true ratio is $8$, so

$$8\neq 2$$""",
        r"""The shared model is a product of a positive coefficient and a positive power on $s>0$:

$$M(s)=3s^{3}$$

$$3>0$$

$$s>0\implies s^{3}>0$$

Therefore every allowed input yields

$$M(s)=3s^{3}>0$$

The model output is positive for every allowed scale.""",
    ],
    "MATH 8.109": [
        r"""For a power law $Y=Kx^{a}$, a pure input scale $c$ multiplies the output by $c^{a}$ because $K$ and the original $x$ cancel:

$$\frac{Y(cx)}{Y(x)}=\frac{K(cx)^{a}}{Kx^{a}}$$

$$\frac{Y(cx)}{Y(x)}=c^{a}$$

Here $c=4$ and $a=\dfrac{3}{2}$:

$$\frac{Y(4x)}{Y(x)}=4^{3/2}$$

$$4^{1/2}=2$$

$$4^{3/2}=(4^{1/2})^{3}=2^{3}$$

$$2^{3}=8$$

The output multiplier is $8$.""",
        r"""Write the same scale ratio with the unknown coefficient kept visible:

$$\frac{Y(4x)}{Y(x)}=\frac{K(4x)^{3/2}}{Kx^{3/2}}$$

$$=4^{3/2}$$

The $K$ factors cancel before any arithmetic, so the multiplier depends only on the scale factor and the exponent, not on $K$.""",
        r"""The scale factor exceeds one and the exponent is positive:

$$4>1$$

$$\frac{3}{2}>0$$

Therefore the multiplier exceeds one:

$$4^{3/2}=8$$

$$8>1$$

So the output increases under this scale test.""",
        r"""The overview already recovered the scale multiplier $4^{3/2}=8$. Start from the cancelled ratio and rewrite as an identity:

$$\frac{Y(4x)}{Y(x)}=4^{3/2}$$

$$4^{3/2}=8$$

$$\frac{Y(4x)}{Y(x)}=8$$

$$Y(4x)=8Y(x)$$

That is exactly the claimed relation.""",
        r"""For a power law $Y=Kx^{a}$, differentiate first:

$$\frac{dY}{dx}=Ka\,x^{a-1}$$

Point elasticity is then

$$\varepsilon=\frac{x}{Y}\frac{dY}{dx}=\frac{x}{Kx^{a}}\cdot Ka\,x^{a-1}$$

$$\varepsilon=a$$

Here $a=\dfrac{3}{2}$, so

$$\varepsilon=\frac{3}{2}$$

The claim lists $\dfrac{2}{3}$, which is the reciprocal of the exponent, not the elasticity.

$$\frac{3}{2}\neq\frac{2}{3}$$""",
    ],
    "MATH 8.110": [
        r"""Start from the controller equation and isolate the power:

$$4x^{3/2}=108$$

Divide both sides by the coefficient $4$:

$$\frac{4x^{3/2}}{4}=\frac{108}{4}$$

$$x^{3/2}=27$$

The isolated power matches the claim.""",
        r"""The overview already isolated $x^{3/2}=27$. Raise both sides to the reciprocal exponent $\dfrac{2}{3}$:

$$x=\bigl(x^{3/2}\bigr)^{2/3}$$

$$x=27^{2/3}$$

$$27^{1/3}=3$$

$$27^{2/3}=(27^{1/3})^{2}=3^{2}$$

$$3^{2}=9$$

The unique positive solution is $x=9$.""",
        r"""The stem restricts the setting to the positive reals:

$$x>0$$

The real map $x\mapsto x^{3/2}$ is built from the positive square root, so a negative candidate such as $x=-9$ is outside the allowed domain and is not an accepted solution.""",
        r"""The overview already recovered the positive root $x=9$. Take the positive square root:

$$x^{1/2}=\sqrt{9}$$

$$\sqrt{9}=3$$

$$x^{1/2}=3$$

That square-root identity matches the claim.""",
        r"""On $x>0$ the map $x\mapsto x^{3/2}$ is strictly increasing. After isolating,

$$x^{3/2}=27$$

a strictly increasing continuous map meets any positive target exactly once. There is one positive root $x=9$, not two positive solutions.""",
    ],
    "MATH 8.111": [
        r"""Compose $f$ after $g$ and simplify with the real cube root:

$$f(g(x))=\frac12\bigl(8x^{3}\bigr)^{1/3}$$

$$(8x^{3})^{1/3}=8^{1/3}\cdot x$$

$$8^{1/3}=2$$

$$f(g(x))=\frac12\cdot 2\cdot x$$

$$f(g(x))=x$$

The outer-then-inner composition returns every real input.""",
        r"""Compose in the opposite order:

$$g(f(x))=8\left(\frac12 x^{1/3}\right)^{3}$$

$$\left(\frac12 x^{1/3}\right)^{3}=\frac18\cdot x$$

$$g(f(x))=8\cdot\frac18\cdot x$$

$$g(f(x))=x$$

So $g\circ f$ is also the identity on the reals.""",
        r"""Compute the composition at the named input instead of quoting the identity alone:

$$g(4)=8\cdot 4^{3}$$

$$4^{3}=64$$

$$g(4)=8\cdot 64=512$$

$$f(g(4))=\frac12(512)^{1/3}$$

$$512^{1/3}=8$$

$$f(g(4))=\frac12\cdot 8=4$$

The numerical value matches the claim.""",
        r"""Evaluate the inner map alone at the claimed input:

$$g(1)=8\cdot 1^{3}$$

$$1^{3}=1$$

$$g(1)=8\cdot 1$$

$$g(1)=8$$

The claim asserts $g(1)=2$, but

$$8\neq 2$$""",
        r"""Both composition orders recover the original input:

$$f(g(x))=x$$

$$g(f(x))=x$$

Therefore

$$f(g(x))=x=g(f(x))$$

Two-sided identity is the definition of inverse functions on the reals, so the claim holds.""",
    ],
    "MATH 8.112": [
        r"""For a power demand $q=Kp^{a}$, differentiate first:

$$\frac{dq}{dp}=Ka\,p^{a-1}$$

Point elasticity is

$$\varepsilon=\frac{p}{q}\frac{dq}{dp}=\frac{p}{Kp^{a}}\cdot Ka\,p^{a-1}$$

$$\varepsilon=a$$

Here $a=-\dfrac{3}{2}$, so

$$\varepsilon=-\dfrac{3}{2}$$

matching the claim.""",
        r"""Scale the price by $4$ and cancel $K$:

$$\frac{q(4p)}{q(p)}=\frac{K(4p)^{-3/2}}{Kp^{-3/2}}$$

$$\frac{q(4p)}{q(p)}=4^{-3/2}$$

$$4^{3/2}=(4^{1/2})^{3}=2^{3}=8$$

$$4^{-3/2}=\frac{1}{4^{3/2}}=\frac{1}{8}$$

Demand is multiplied by $\dfrac{1}{8}$.""",
        r"""The exponent is negative, so a price increase shrinks demand:

$$a=-\frac{3}{2}<0$$

$$4^{a}=4^{-3/2}$$

$$4^{-3/2}=\frac18$$

$$\frac18<1$$

Demand does not rise when price rises.""",
        r"""In the elasticity formula the coefficient cancels before the final value appears:

$$\varepsilon=\frac{p}{Kp^{a}}\cdot Ka\,p^{a-1}$$

$$\varepsilon=a$$

The result depends only on the exponent $a=-\dfrac{3}{2}$, not on $K$.""",
        r"""On the stated domain every factor is positive:

$$K>0$$

$$p>0$$

$$p^{-3/2}>0$$

Therefore

$$q(p)=Kp^{-3/2}>0$$

Demand stays positive throughout the domain.""",
    ],
    "MATH 8.113": [
        r"""The overview already recovered the cubic kiln model

$$M(s)=4s^{3}$$

Substitute the claimed scale $s=1$:

$$M(1)=4\cdot 1^{3}$$

$$1^{3}=1$$

$$M(1)=4\cdot 1$$

$$M(1)=4$$

The evaluation matches the claim.""",
        r"""Keep the same calibrated model and evaluate at $s=2$:

$$M(2)=4\cdot 2^{3}$$

$$2^{3}=8$$

$$M(2)=4\cdot 8$$

$$M(2)=32$$

The output equals the claimed reading $32$.""",
        r"""Evaluate the cubic at $s=4$:

$$M(4)=4\cdot 4^{3}$$

$$4^{3}=64$$

$$M(4)=4\cdot 64$$

$$M(4)=256$$

The model output agrees with the claim $256$.""",
        r"""Form the output ratio so the coefficient cancels:

$$\frac{M(4)}{M(2)}=\frac{4\cdot 4^{3}}{4\cdot 2^{3}}$$

$$\frac{M(4)}{M(2)}=\left(\frac{4}{2}\right)^{3}$$

$$\left(\frac{4}{2}\right)^{3}=2^{3}$$

$$2^{3}=8$$

The claim asserts $M(4)=2M(2)$, which would mean the ratio equals $2$. The true ratio is $8$, so

$$8\neq 2$$""",
        r"""On the stated domain $s>0$ both factors stay positive:

$$4>0$$

$$s^{3}>0$$

Therefore

$$M(s)=4s^{3}>0$$

The model stays positive on its domain.""",
    ],
    "MATH 8.114": [
        r"""For a power law $Y=Kx^{a}$, a pure input scale $c$ multiplies the output by $c^{a}$:

$$\frac{Y(cx)}{Y(x)}=c^{a}$$

Here $c=8$ and $a=\dfrac{2}{3}$:

$$\frac{Y(8x)}{Y(x)}=8^{2/3}$$

$$8^{1/3}=2$$

$$8^{2/3}=(8^{1/3})^{2}=2^{2}$$

$$2^{2}=4$$

The output multiplier is $4$.""",
        r"""Write the scale ratio with the unknown coefficient kept visible:

$$\frac{Y(8x)}{Y(x)}=\frac{K(8x)^{2/3}}{Kx^{2/3}}$$

$$=8^{2/3}$$

The $K$ factors cancel, so the multiplier depends only on the scale factor and the exponent, not on $K$.""",
        r"""The scale factor exceeds one and the exponent is positive:

$$8>1$$

$$\frac{2}{3}>0$$

Therefore the multiplier exceeds one:

$$8^{2/3}=4$$

$$4>1$$

So the scaled output is larger than the original output.""",
        r"""The overview already recovered the scale multiplier $8^{2/3}=4$. Rewrite the scaling identity:

$$\frac{Y(8x)}{Y(x)}=4$$

$$Y(8x)=4Y(x)$$

That is exactly the claimed equation.""",
        r"""For $Y=Kx^{a}$, differentiate and form point elasticity:

$$\frac{dY}{dx}=Ka\,x^{a-1}$$

$$\varepsilon=\frac{x}{Y}\frac{dY}{dx}=a$$

Here $a=\dfrac{2}{3}$, so

$$\varepsilon=\frac{2}{3}$$

The claim lists $\dfrac{3}{2}$, the reciprocal of the exponent.

$$\frac{2}{3}\neq\frac{3}{2}$$""",
    ],
    "MATH 8.115": [
        r"""Start from the controller equation and isolate the power:

$$5x^{3/2}=320$$

Divide both sides by the coefficient $5$:

$$\frac{5x^{3/2}}{5}=\frac{320}{5}$$

$$x^{3/2}=64$$

The isolated power matches the claim.""",
        r"""The overview already isolated $x^{3/2}=64$. Raise both sides to the reciprocal exponent $\dfrac{2}{3}$:

$$x=\bigl(x^{3/2}\bigr)^{2/3}$$

$$x=64^{2/3}$$

$$64^{1/3}=4$$

$$64^{2/3}=(64^{1/3})^{2}=4^{2}$$

$$4^{2}=16$$

The unique positive solution is $x=16$.""",
        r"""The stem restricts the setting to the positive reals:

$$x>0$$

The real map $x\mapsto x^{3/2}$ uses the positive square root, so a negative candidate such as $x=-16$ is outside the allowed domain and is not an accepted solution.""",
        r"""The overview already recovered the positive root $x=16$. Take the positive square root:

$$x^{1/2}=\sqrt{16}$$

$$\sqrt{16}=4$$

$$x^{1/2}=4$$

That square-root identity matches the claim.""",
        r"""On $x>0$ the map $x\mapsto x^{3/2}$ is strictly increasing. After isolating,

$$x^{3/2}=64$$

a strictly increasing continuous map meets any positive target exactly once. There is one positive root $x=16$, not two positive solutions.""",
    ],
    "MATH 8.116": [
        r"""Compose $f$ after $g$ and simplify with the real cube root:

$$f(g(x))=\frac13\bigl(27x^{3}\bigr)^{1/3}$$

$$(27x^{3})^{1/3}=27^{1/3}\cdot x$$

$$27^{1/3}=3$$

$$f(g(x))=\frac13\cdot 3\cdot x$$

$$f(g(x))=x$$

The composition returns every real input.""",
        r"""Compose in the reverse order:

$$g(f(x))=27\left(\frac13 x^{1/3}\right)^{3}$$

$$\left(\frac13 x^{1/3}\right)^{3}=\frac{1}{27}\cdot x$$

$$g(f(x))=27\cdot\frac{1}{27}\cdot x$$

$$g(f(x))=x$$

So $g\circ f$ is also the identity on the reals.""",
        r"""The overview already recovered $f(g(x))=x$ for every real $x$. Specialize at $x=4$:

$$f(g(4))=4$$

A single numerical check agrees with the identity claim.""",
        r"""Evaluate the inner map alone at the claimed input:

$$g(1)=27\cdot 1^{3}$$

$$1^{3}=1$$

$$g(1)=27\cdot 1$$

$$g(1)=27$$

The claim asserts $g(1)=3$, but

$$27\neq 3$$""",
        r"""Both composition orders recover the original input:

$$f(g(x))=x$$

$$g(f(x))=x$$

Therefore

$$f(g(x))=x=g(f(x))$$

so $f$ and $g$ are inverse functions on the reals.""",
    ],
    "MATH 8.117": [
        r"""For a power demand $q=Kp^{a}$, differentiate first:

$$\frac{dq}{dp}=Ka\,p^{a-1}$$

Point elasticity is

$$\varepsilon=\frac{p}{q}\frac{dq}{dp}=\frac{p}{Kp^{a}}\cdot Ka\,p^{a-1}$$

$$\varepsilon=a$$

Here $a=-2$, so

$$\varepsilon=-2$$

matching the claim.""",
        r"""Scale the price by $3$ and cancel $K$:

$$\frac{q(3p)}{q(p)}=\frac{K(3p)^{-2}}{Kp^{-2}}$$

$$\frac{q(3p)}{q(p)}=3^{-2}$$

$$3^{2}=9$$

$$3^{-2}=\frac{1}{9}$$

Demand is multiplied by $\dfrac{1}{9}$.""",
        r"""The exponent is negative, so a price increase shrinks demand:

$$a=-2<0$$

$$3^{a}=3^{-2}$$

$$3^{-2}=\frac19$$

$$\frac19<1$$

Demand does not rise when price rises.""",
        r"""In the elasticity formula the coefficient cancels before the final value appears:

$$\varepsilon=\frac{p}{Kp^{a}}\cdot Ka\,p^{a-1}$$

$$\varepsilon=a$$

The result depends only on the exponent $a=-2$, not on $K$.""",
        r"""On the stated domain every factor is positive:

$$K>0$$

$$p>0$$

$$p^{-2}>0$$

Therefore

$$q(p)=Kp^{-2}>0$$

Demand remains positive on the stated domain.""",
    ],
}


def wrap(letter: str, answer: bool, body: str) -> str:
    verd = "True" if answer else "False"
    return (
        f"**{letter}.** → {verd}\n\n"
        f"{body.strip()}\n\n"
        f"So the statement is {verd}."
    )


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    lens: list[int] = []
    n = 0
    for t in tasks:
        cid = t["case_id"]
        if cid not in DEEP:
            continue
        bodies = DEEP[cid]
        assert len(bodies) == 5, cid
        t["tactical_explanations"] = [
            wrap(L, bool(ans), body)
            for L, ans, body in zip("ABCDE", t["answer_key"], bodies)
        ]
        if cid in OVERVIEWS:
            t["solution_overview"] = OVERVIEWS[cid]
        for e in t["tactical_explanations"]:
            lens.append(len(e))
            if e.count("$$") % 2:
                raise SystemExit(f"odd $$ in {cid}")
        n += 1
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    med = sorted(lens)[len(lens) // 2]
    print(
        f"Updated {n} tasks; letter avg={sum(lens)/len(lens):.0f} "
        f"median={med} min={min(lens)} max={max(lens)} under250={sum(1 for x in lens if x<250)}"
    )


if __name__ == "__main__":
    main()
