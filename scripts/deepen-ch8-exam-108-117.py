#!/usr/bin/env python3
"""Hand-deepen MATH 8.108–8.117 exam letters to MATH 13.18 tutoring depth."""

from __future__ import annotations

import json
from pathlib import Path

PATH = Path(__file__).resolve().parents[1] / "src/data/math-ch8-exam.json"

# Bodies only (no header/closer). case_id -> 5 bodies.
DEEP: dict[str, list[str]] = {
    "MATH 8.108": [
        r"""The kiln model is the cubic power law

$$M(s)=3s^{3}$$

Substitute the claimed scale $s=1$:

$$M(1)=3\cdot1^{3}$$

$$M(1)=3$$

The computed output matches the claim.""",
        r"""Keep the same calibrated model and evaluate at $s=2$:

$$M(2)=3\cdot2^{3}$$

$$M(2)=3\cdot8$$

$$M(2)=24$$

The output is exactly the claimed value.""",
        r"""Evaluate the cubic at the third recorded scale:

$$M(4)=3\cdot4^{3}$$

$$M(4)=3\cdot64$$

$$M(4)=192$$

The model output agrees with the claim.""",
        r"""Form the output ratio from the power law so the coefficient cancels:

$$\frac{M(4)}{M(2)}=\frac{3\cdot4^{3}}{3\cdot2^{3}}=\left(\frac{4}{2}\right)^{3}$$

$$\left(\frac{4}{2}\right)^{3}=2^{3}=8$$

The claim asserts the ratio equals $2$, but the true ratio is $8$.""",
        r"""On the stated domain $s>0$ both factors of the model stay positive:

$$3>0,\qquad s^{3}>0$$

$$M(s)=3s^{3}>0$$

The model output is positive for every allowed scale.""",
    ],
    "MATH 8.109": [
        r"""A scale factor $c=4$ multiplies a power-law output by $c$ to the exponent:

$$\frac{Y(4x)}{Y(x)}=\frac{K(4x)^{3/2}}{Kx^{3/2}}=4^{3/2}$$

$$4^{3/2}=(4^{1/2})^{3}=2^{3}=8$$

The output multiplier is $8$.""",
        r"""In the same ratio the unknown positive coefficient cancels:

$$\frac{Y(4x)}{Y(x)}=4^{3/2}$$

The right-hand side depends only on the scale factor and the exponent, not on $K$. The claim that the multiplier depends on $K$ is false.""",
        r"""Because the scale factor exceeds one and the exponent is positive, the multiplier exceeds one:

$$4>1,\qquad \frac{3}{2}>0$$

$$4^{3/2}=8>1$$

So the output increases under this scale test.""",
        r"""Rewrite the scaling identity with the computed multiplier:

$$Y(4x)=4^{3/2}Y(x)=8Y(x)$$

That is exactly the claimed relation.""",
        r"""For $Y=Kx^{a}$ the point elasticity equals the exponent $a$:

$$a=\frac{3}{2}$$

The claim lists $\dfrac{2}{3}$, which is the reciprocal, not the elasticity.""",
    ],
    "MATH 8.110": [
        r"""Start from the controller equation and isolate the power:

$$4x^{3/2}=108$$

$$\frac{4x^{3/2}}{4}=\frac{108}{4}$$

$$x^{3/2}=27$$

The isolated power matches the claim.""",
        r"""Raise both sides to the reciprocal exponent $\dfrac{2}{3}$:

$$x=\bigl(x^{3/2}\bigr)^{2/3}=27^{2/3}$$

$$27^{2/3}=(27^{1/3})^{2}=3^{2}=9$$

The unique positive solution is $x=9$.""",
        r"""The stem restricts the setting to the positive reals, and the real map $x\mapsto x^{3/2}$ uses the positive square root:

$$x>0$$

A negative candidate such as $x=-9$ is outside the allowed domain, so it is not an accepted solution.""",
        r"""From the recovered solution take the positive square root:

$$x=9$$

$$x^{1/2}=\sqrt{9}=3$$

That square-root identity matches the claim.""",
        r"""On $x>0$ the map $x\mapsto x^{3/2}$ is strictly increasing, so the equation $x^{3/2}=27$ has only one positive root. There are not two positive solutions.""",
    ],
    "MATH 8.111": [
        r"""Compose $f$ after $g$ and simplify with the real cube root:

$$f(g(x))=\frac12\bigl(8x^{3}\bigr)^{1/3}$$

$$=\frac12\cdot8^{1/3}\cdot x=\frac12\cdot2\cdot x$$

$$=x$$

The outer-then-inner composition returns every real input.""",
        r"""Compose in the opposite order:

$$g(f(x))=8\left(\frac12 x^{1/3}\right)^{3}$$

$$=8\cdot\frac18\cdot x=x$$

So $g\circ f$ is also the identity on the reals.""",
        r"""Specialize the already-established identity at $x=4$:

$$f(g(4))=4$$

A single numerical check agrees with the identity claim.""",
        r"""Evaluate the inner map alone at the claimed input:

$$g(1)=8\cdot1^{3}=8$$

The claim asserts $g(1)=2$, but the true value is $8$.""",
        r"""Because both composition orders recover the original input,

$$f(g(x))=x=g(f(x))$$

the two maps are inverse functions on the reals.""",
    ],
    "MATH 8.112": [
        r"""For a power demand $q=Kp^{a}$ the point elasticity equals the exponent:

$$\varepsilon=\frac{p}{q}\frac{dq}{dp}=a$$

Here $a=-\dfrac{3}{2}$, so

$$\varepsilon=-\dfrac{3}{2}$$

matching the claim.""",
        r"""Scale the price by $4$ and cancel $K$:

$$\frac{q(4p)}{q(p)}=\frac{K(4p)^{-3/2}}{Kp^{-3/2}}=4^{-3/2}$$

$$4^{-3/2}=\frac{1}{4^{3/2}}=\frac{1}{8}$$

Demand is multiplied by $\dfrac{1}{8}$.""",
        r"""The exponent is negative, so a price increase shrinks demand:

$$a=-\frac{3}{2}<0$$

$$4^{a}=4^{-3/2}=\frac18<1$$

Demand does not rise when price rises.""",
        r"""In the elasticity formula the coefficient cancels:

$$\varepsilon=\frac{p}{Kp^{a}}\cdot K a p^{a-1}=a$$

The result depends only on the exponent, not on $K$.""",
        r"""On the stated domain every factor is positive:

$$K>0,\qquad p>0,\qquad p^{-3/2}>0$$

$$q(p)=Kp^{-3/2}>0$$

Demand stays positive throughout the domain.""",
    ],
    "MATH 8.113": [
        r"""The calibrated cubic is

$$M(s)=4s^{3}$$

At unit scale:

$$M(1)=4\cdot1^{3}=4$$

The evaluation matches the claim.""",
        r"""Substitute $s=2$ into the same model:

$$M(2)=4\cdot2^{3}=4\cdot8=32$$

The output equals the claimed reading.""",
        r"""Evaluate at $s=4$:

$$M(4)=4\cdot4^{3}=4\cdot64=256$$

The cubic returns the claimed value.""",
        r"""Compare the two larger readings through a ratio:

$$\frac{M(4)}{M(2)}=\left(\frac{4}{2}\right)^{3}=8$$

The claim says the ratio is $2$, but the power-law ratio is $8$.""",
        r"""For every allowed $s>0$,

$$4>0,\qquad s^{3}>0$$

so $M(s)=4s^{3}>0$. The model stays positive on its domain.""",
    ],
    "MATH 8.114": [
        r"""The scale multiplier for exponent $\dfrac{2}{3}$ and factor $8$ is

$$8^{2/3}=(8^{1/3})^{2}=2^{2}=4$$

So the output is multiplied by $4$.""",
        r"""Write the scale ratio explicitly:

$$\frac{Y(8x)}{Y(x)}=8^{2/3}$$

The unknown coefficient $K$ cancels, so the multiplier does not depend on $K$.""",
        r"""Because $8>1$ and the exponent $\dfrac{2}{3}$ is positive,

$$8^{2/3}=4>1$$

the scaled output is larger than the original output.""",
        r"""The scaling identity with this multiplier is

$$Y(8x)=8^{2/3}Y(x)=4Y(x)$$

which is exactly the claimed equation.""",
        r"""Point elasticity for $Y=Kx^{a}$ equals the exponent

$$a=\frac{2}{3}$$

The claim lists $\dfrac{3}{2}$, the reciprocal, so it is false.""",
    ],
    "MATH 8.115": [
        r"""Isolate the power in the given equation:

$$5x^{3/2}=320$$

$$x^{3/2}=\frac{320}{5}=64$$

The isolated power matches the claim.""",
        r"""Raise both sides to the reciprocal power $\dfrac{2}{3}$:

$$x=64^{2/3}=(64^{1/3})^{2}=4^{2}=16$$

The positive solution is $x=16$.""",
        r"""The model requires $x>0$ and uses the positive square root inside $x^{3/2}$. A negative candidate such as $x=-16$ is excluded by the domain.""",
        r"""From $x=16$ take the positive square root:

$$x^{1/2}=\sqrt{16}=4$$

That matches the claim.""",
        r"""The map $x\mapsto x^{3/2}$ is strictly increasing on $x>0$, so $x^{3/2}=64$ has a single positive root. It does not have two positive solutions.""",
    ],
    "MATH 8.116": [
        r"""Compose $f$ after $g$:

$$f(g(x))=\frac13\bigl(27x^{3}\bigr)^{1/3}$$

$$=\frac13\cdot27^{1/3}\cdot x=\frac13\cdot3\cdot x=x$$

The composition returns every real input.""",
        r"""Compose in the reverse order:

$$g(f(x))=27\left(\frac13 x^{1/3}\right)^{3}$$

$$=27\cdot\frac{1}{27}\cdot x=x$$

So $g\circ f$ is also the identity.""",
        r"""Using the identity already obtained,

$$f(g(4))=4$$

the numerical specialization holds.""",
        r"""Evaluate $g$ alone at $1$:

$$g(1)=27\cdot1^{3}=27$$

The claim asserts $g(1)=3$, which does not match.""",
        r"""Both orders recover the input,

$$f(g(x))=x=g(f(x))$$

so $f$ and $g$ are inverses on the reals.""",
    ],
    "MATH 8.117": [
        r"""For $q=Kp^{a}$ the point elasticity equals the exponent:

$$\varepsilon=a=-2$$

The claimed elasticity is therefore correct.""",
        r"""Scale price by $3$ and cancel $K$:

$$\frac{q(3p)}{q(p)}=3^{-2}=\frac{1}{9}$$

Demand is multiplied by $\dfrac{1}{9}$.""",
        r"""A negative exponent makes demand fall when price rises:

$$a=-2<0$$

$$3^{a}=\frac19<1$$

The claim that demand rises with price is false.""",
        r"""Elasticity simplifies to the pure exponent after $K$ cancels:

$$\varepsilon=\frac{p}{Kp^{a}}\cdot Kap^{a-1}=a$$

It does not depend on $K$.""",
        r"""On $K>0$ and $p>0$ every factor stays positive:

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
    for t in tasks:
        cid = t["case_id"]
        if cid not in DEEP:
            continue
        bodies = DEEP[cid]
        assert len(bodies) == 5, cid
        t["tactical_explanations"] = [
            wrap(L, ans, body)
            for L, ans, body in zip("ABCDE", t["answer_key"], bodies)
        ]
        for e in t["tactical_explanations"]:
            lens.append(len(e))
            if e.count("$$") % 2:
                raise SystemExit(f"odd $$ in {cid}")
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(
        f"Updated {len(DEEP)} tasks; letter avg={sum(lens)/len(lens):.0f} "
        f"min={min(lens)} max={max(lens)}"
    )


if __name__ == "__main__":
    main()
