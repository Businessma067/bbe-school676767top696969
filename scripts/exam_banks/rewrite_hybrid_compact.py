#!/usr/bin/env python3
"""Rewrite six mixed exam banks in a compact hybrid format."""

from __future__ import annotations

import json
import math
import re
from dataclasses import dataclass
from fractions import Fraction
from pathlib import Path
from typing import Callable


ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "src" / "data"
INDEPENDENT_CONTEXT = "Evaluate each statement. Mark it TRUE or FALSE."


@dataclass(frozen=True)
class Claim:
    text: str
    truth: bool
    work: str


@dataclass(frozen=True)
class SharedCase:
    context: str
    claims: list[Claim]
    overview: str


def tex(value: Fraction | int) -> str:
    value = Fraction(value)
    if value.denominator == 1:
        return str(value.numerator)
    sign = "-" if value < 0 else ""
    value = abs(value)
    return f"{sign}\\dfrac{{{value.numerator}}}{{{value.denominator}}}"


def pmf(n: int, k: int, p: Fraction) -> Fraction:
    return Fraction(math.comb(n, k)) * p**k * (1 - p) ** (n - k)


def explanation(letter: str, claim: Claim) -> str:
    label = "True" if claim.truth else "False"
    return (
        f"**{letter}.** → {label}\n\n{claim.work.strip()}\n\n"
        f"The claim is {label}."
    )


def shared_overview(topic: str, case: SharedCase) -> str:
    steps = [
        f"Use the single shared stem for topic {topic}; do not re-read any claim as a new scenario.",
        f"Organize the given data before testing claims. {case.overview}",
        "Keep every stated domain, endpoint, sampling rule, or physical restriction in force.",
    ]
    for letter, claim in zip("ABCDE", case.claims):
        steps.append(f"{letter}: {claim.work}")
        steps.append(
            f"{letter}: The computed result makes this claim "
            f"{'True' if claim.truth else 'False'}."
        )
    assert len(steps) == 13
    numbered = "\n".join(
        f"{number}. {step}" for number, step in enumerate(steps, 1)
    )
    return f"Shared context topic {topic}.\n\nShared solution:\n{numbered}"


def clean_text(value: str) -> str:
    value = value.replace("—", "-").replace("–", "-")
    return re.sub(r"\$\{([^$]*)\}\$", r"$\1$", value)


def clean_value(value):
    if isinstance(value, str):
        return clean_text(value)
    if isinstance(value, list):
        return [clean_value(item) for item in value]
    if isinstance(value, dict):
        return {key: clean_value(item) for key, item in value.items()}
    return value


def ch4_independent(i: int, j: int, topic: str) -> Claim:
    seed = i * 5 + j
    truth = seed % 2 == 0

    if topic == "4.1":
        a = 2 + seed % 4
        x = 3 + seed % 5
        b = 1 + seed % 6
        rhs = a * x + b
        stated = x if truth else x + 1
        return Claim(
            f"The equation ${a}x+{b}={rhs}$ has the unique solution $x={stated}$.",
            truth,
            f"Subtract and divide: ${a}x={rhs-b}$, so $x={x}$, not $x={stated}$ when the values differ.",
        )

    if topic == "4.2":
        r1 = 2 + seed % 4
        r2 = r1 + 3
        total = r1 + r2
        product = r1 * r2
        stated = total if truth else total + 1
        return Claim(
            f"The roots of $x^2-{total}x+{product}=0$ have sum ${stated}$.",
            truth,
            f"The polynomial factors as $(x-{r1})(x-{r2})$. Its roots sum to ${r1}+{r2}={total}$.",
        )

    if topic == "4.3":
        m = 2 + seed % 5
        root = m + 2
        stated = root if truth else root - 1
        return Claim(
            f"On $x\\ne1$, the equation $\\dfrac{{x+{m}}}{{x-1}}=2$ has solution $x={stated}$.",
            truth,
            f"Clearing the nonzero denominator gives $x+{m}=2x-2$, hence $x={root}$. It is admissible.",
        )

    power = 2 + seed % 5
    stated = power if truth else power + 1
    return Claim(
        f"The equation $2^x={2**power}$ has the unique real solution $x={stated}$.",
        truth,
        f"Since ${2**power}=2^{power}$ and $2^x$ is one-to-one, the solution is $x={power}$.",
    )


def ch6_word_claim(i: int, j: int) -> Claim:
    seed = i * 5 + j
    fee = 12 + seed % 5
    rate = 3 + seed % 4
    units = 20 + seed % 8
    budget = fee + rate * units
    truth = seed % 2 == 0
    stated = units if truth else units + 2
    return Claim(
        f"A service charges {fee} EUR plus {rate} EUR per unit, with a budget of {budget} EUR. The budget covers at most ${stated}$ units.",
        truth,
        f"The budget condition is ${fee}+{rate}u\\le {budget}$, so $u\\le({budget}-{fee})/{rate}={units}$.",
    )


def shared_ch2(topic: str, variant: int) -> SharedCase:
    if topic == "2.1":
        pairs = [(3, 7), (4, 5), (2, 9)]
        a, b = pairs[variant % len(pairs)]
        s, p = a + b, a * b
        square_sum = a * a + b * b
        cube_sum = a**3 + b**3
        context = (
            f"An algebra archive stores two real numbers $a$ and $b$ only through the records "
            f"$a+b={s}$ and $ab={p}$. The original order was not recorded, so every conclusion "
            f"must follow from symmetric identities or from the quadratic having roots $a$ and $b$. "
            f"No decimal approximation is used in the audit."
        )
        claims = [
            Claim(f"$a^2+b^2={square_sum}$.", True, f"$(a+b)^2-2ab={s}^2-2({p})={square_sum}$."),
            Claim(f"$(a-b)^2={(a-b)**2}$.", True, f"$(a-b)^2=(a+b)^2-4ab={s}^2-4({p})={(a-b)**2}$."),
            Claim(f"$a^3+b^3={cube_sum+1}$.", False, f"$(a+b)^3-3ab(a+b)={s}^3-3({p})({s})={cube_sum}$."),
            Claim(f"$\\{{a,b\\}}=\\{{{a},{b}\\}}$.", True, f"$t^2-{s}t+{p}=(t-{a})(t-{b})$."),
            Claim(f"$\\dfrac1a+\\dfrac1b=\\dfrac{{{p}}}{{{s}}}$.", False, f"$1/a+1/b=(a+b)/(ab)={s}/{p}$."),
        ]
        return SharedCase(context, claims, "Shared identity data determine five symmetric consequences.")

    if topic == "2.2":
        c = 2 + variant % 4
        context = (
            f"A symbolic calculator studies $R(x)=\\dfrac{{x^2-{c*c}}}{{x-{c}}}$ and "
            f"$S(x)=\\dfrac1{{x-{c}}}+\\dfrac1{{x+{c}}}$. The first expression is defined "
            f"for $x\\ne {c}$, while the second also excludes $x=-{c}$. Simplifications must "
            f"retain these original domain restrictions even after factors cancel."
        )
        claims = [
            Claim(f"$R(x)=x+{c}$ on its domain.", True, f"Factor $x^2-{c*c}=(x-{c})(x+{c})$ and cancel only for $x\\ne{c}$."),
            Claim(f"$R({c})={2*c}$.", False, f"The original denominator is zero at $x={c}$, so $R({c})$ is undefined."),
            Claim(f"$S(x)=\\dfrac{{2x}}{{x^2-{c*c}}}$.", True, f"Adding over $(x-{c})(x+{c})$ gives numerator $(x+{c})+(x-{c})=2x$."),
            Claim("$S(0)=0$.", True, f"Zero is admissible and $1/(-{c})+1/{c}=0$."),
            Claim("$S(x)=0$ has exactly one real solution.", True, f"The simplified numerator is $2x$, so $x=0$ is the only zero and is admissible."),
        ]
        return SharedCase(context, claims, "Shared rational expressions are simplified without restoring excluded inputs.")

    if topic == "2.3":
        values = [(16, 4, 2, 8), (81, 9, 3, 27)]
        x, square, fourth, three_fourths = values[variant % 2]
        context = (
            f"A materials model fixes a positive scale variable at $x={x}$. The report uses "
            f"the principal real roots and the exponent laws $x^r x^s=x^{{r+s}}$ and "
            f"$(x^r)^s=x^{{rs}}$. Negative exponents are interpreted as reciprocals, and "
            f"all claims refer to this same positive value of $x$."
        )
        claims = [
            Claim(f"$x^{{1/2}}={square}$.", True, f"The principal square root of ${x}$ is ${square}$."),
            Claim(f"$x^{{1/4}}={fourth}$.", True, f"The positive fourth root of ${x}$ is ${fourth}$."),
            Claim(f"$x^{{-1/2}}=\\dfrac1{{{square}}}$.", True, f"$x^{{-1/2}}=1/x^{{1/2}}=1/{square}$."),
            Claim(f"$x^{{3/4}}={three_fourths}$.", True, f"$(x^{{1/4}})^3={fourth}^3={three_fourths}$."),
            Claim("$x^0=0$.", False, "$x$ is nonzero, so the zero-exponent rule gives $x^0=1$."),
        ]
        return SharedCase(context, claims, "Shared positive-base data support root, reciprocal, and exponent claims.")

    center = 4 + variant
    radius = 3
    left, right = center - radius, center + radius
    context = (
        f"A calibration reading $x$ is accepted when its distance from the target {center} is at most "
        f"{radius} units, written $|x-{center}|\\le {radius}$. A warning band uses the strict version "
        f"$|x-{center}|<{radius}$. The endpoint readings are physically possible and all readings are real."
    )
    claims = [
        Claim(f"The accepted interval is $[{left},{right}]$.", True, f"$-{radius}\\le x-{center}\\le{radius}$ gives ${left}\\le x\\le{right}$."),
        Claim(f"$x={left}$ is accepted.", True, f"$|{left}-{center}|={radius}$, and equality is allowed."),
        Claim(f"$x={right}$ lies in the warning band.", False, f"The strict warning condition fails because $|{right}-{center}|={radius}$."),
        Claim(f"There are ${2*radius+1}$ accepted integer readings.", True, f"The integers from ${left}$ through ${right}$ total ${right-left+1}$."),
        Claim(f"$|x-{center}|>{radius}$ means ${left}<x<{right}$.", False, f"The exterior solution is $x<{left}$ or $x>{right}$."),
    ]
    return SharedCase(context, claims, "One shared distance condition is translated into closed, open, and exterior sets.")


def shared_ch4(topic: str, variant: int) -> SharedCase:
    if topic == "4.1":
        fee = 30 + 5 * variant
        rate = 4 + variant % 3
        units = 20 + 2 * variant
        total = fee + rate * units
        context = (
            f"A repair service charges a fixed call-out fee of {fee} EUR and {rate} EUR for each "
            f"replacement unit. One invoice totals {total} EUR, and the number of units is the only "
            f"unknown. The same linear tariff applies to every invoice, with no tax or discount added."
        )
        claims = [
            Claim(f"The invoice equation is ${fee}+{rate}x={total}$.", True, "Fixed cost plus per-unit cost gives the stated equation."),
            Claim(f"The invoice contains ${units}$ units.", True, f"$x=({total}-{fee})/{rate}={units}$."),
            Claim(f"Doubling the units doubles the full invoice.", False, "The fixed call-out fee is not doubled by doubling only the units."),
            Claim(f"One extra unit adds ${rate}$ EUR.", True, "The coefficient of $x$ is the marginal charge."),
            Claim(f"The tariff has zero fixed cost.", False, f"The intercept is ${fee}$ EUR."),
        ]
        return SharedCase(context, claims, "A shared affine tariff is solved and interpreted.")

    if topic == "4.2":
        r1 = 4 + variant
        r2 = r1 + 6
        mid = (r1 + r2) // 2
        maximum = 9
        context = (
            f"A venue models operating surplus by $P(q)=-(q-{r1})(q-{r2})$ thousand EUR, where "
            f"$q$ is a nonnegative attendance index. Break-even means $P(q)=0$, while a positive "
            f"surplus means $P(q)>0$. Management also wants the axis of symmetry and the maximum surplus."
        )
        claims = [
            Claim(f"The break-even indices are ${r1}$ and ${r2}$.", True, "A product is zero when either displayed factor is zero."),
            Claim(f"Positive surplus occurs for ${r1}<q<{r2}$.", True, "The downward-opening quadratic is positive between its roots."),
            Claim(f"The axis of symmetry is $q={mid}$.", True, f"The midpoint of the roots is $({r1}+{r2})/2={mid}$."),
            Claim(f"The maximum surplus is ${maximum+1}$ thousand EUR.", False, f"$P({mid})=-({mid-r1})({mid-r2})={maximum}$."),
            Claim("Both algebraic roots are negative.", False, f"The roots ${r1}$ and ${r2}$ are positive."),
        ]
        return SharedCase(context, claims, "One shared quadratic supplies roots, sign, symmetry, and maximum.")

    if topic == "4.3":
        fast, extra, target, negative = [
            (6, 6, 4, -4),
            (12, 12, 8, -8),
            (18, 18, 12, -12),
        ][variant % 3]
        slow = fast + extra
        context = (
            f"Two pumps fill one reservoir together in {target} hours. The faster pump would need $x$ "
            f"hours alone, and the slower pump would need $x+{extra}$ hours under the labeling used in "
            f"the maintenance sheet. Their combined-rate equation is $\\dfrac1x+\\dfrac1{{x+{extra}}}"
            f"=\\dfrac1{target}$, with only positive times physically admissible."
        )
        claims = [
            Claim(f"$x={fast}$ is the physical solution.", True, f"Clearing denominators gives roots ${fast}$ and ${negative}$."),
            Claim(f"$x={negative}$ is an algebraic root.", True, f"The cleared quadratic factors as $(x-{fast})(x+{-negative})=0$."),
            Claim("Both algebraic roots are physical times.", False, "A negative duration is not physically admissible."),
            Claim(f"The individual times are ${fast}$ and ${slow}$ hours.", True, f"The admissible value is $x={fast}$, so $x+{extra}={slow}$."),
            Claim("The original equation allows $x=0$.", False, "At $x=0$ the first denominator vanishes."),
        ]
        return SharedCase(context, claims, "A shared work-rate equation is solved with domain and physical checks.")

    start = 200 + 50 * variant
    context = (
        f"A subscriber base follows $N(t)={start}\\cdot2^{{t/3}}$, where $t$ is measured in years and "
        f"$t=0$ is the launch date. The model is used only for real $t\\ge0$. Analysts compare the "
        f"launch level, the three-year growth factor, and the time needed to reach fixed multiples of the launch level."
    )
    claims = [
        Claim(f"$N(0)={start}$.", True, "$2^0=1$, so the launch value equals the coefficient."),
        Claim("The subscriber base doubles every three years.", True, "Replacing $t$ by $t+3$ multiplies the model by $2^1=2$."),
        Claim(f"$N(6)={3*start}$.", False, f"$N(6)={start}\\cdot2^2={4*start}$."),
        Claim("Four times the launch level is reached at $t=6$.", True, "$2^{t/3}=4=2^2$ gives $t=6$."),
        Claim("The model decreases on its stated domain.", False, "The base $2$ and positive exponent coefficient make the model increasing."),
    ]
    return SharedCase(context, claims, "A shared exponential model is evaluated and inverted.")


def shared_ch6(topic: str, variant: int) -> SharedCase:
    if topic == "6.1":
        a = 3 + variant
        b = -1 - variant
        denominator = f"x+{-b}"
        context = (
            f"A control ratio is $R(x)=\\dfrac{{x-{a}}}{{{denominator}}}$. The input $x={b}$ is excluded "
            f"because it makes the denominator zero, while $x={a}$ is a zero of the ratio. Engineers "
            f"use a sign chart across these two critical points to classify positive and nonpositive readings."
        )
        claims = [
            Claim(f"$R(x)>0$ for $x<{b}$ or $x>{a}$.", True, "Numerator and denominator have the same sign on the two outer intervals."),
            Claim(f"$x={b}$ belongs to the solution of $R(x)\\le0$.", False, "The pole is excluded from every solution set."),
            Claim(f"$R({a})=0$.", True, "The numerator is zero and the denominator is nonzero."),
            Claim(f"$R(x)\\le0$ on $({b},{a}]$.", True, "The ratio is negative between pole and zero, then equals zero at the zero."),
            Claim(f"$R(x)>1$ exactly when $x<{b}$.", True, f"$R-1=({b}-{a})/({denominator})$, which is positive exactly below the pole."),
        ]
        return SharedCase(context, claims, "One rational sign chart controls all five claims.")

    if topic == "6.2":
        left = 3 + variant
        right = left + 6
        middle = left + 3
        context = (
            f"A quality score is $Q(x)=-(x-{left})(x-{right})$. The process accepts settings with "
            f"$Q(x)\\ge0$ and gives its highest score on the axis of symmetry. The roots, endpoint "
            f"inclusion, and maximum must all be read from this same downward-opening quadratic."
        )
        claims = [
            Claim(f"The accepted settings are $[{left},{right}]$.", True, "A downward-opening factored quadratic is nonnegative between its roots."),
            Claim(f"$Q({middle})=9$.", True, f"$Q({middle})=-({middle-left})({middle-right})=9$."),
            Claim(f"The maximum occurs at $x={middle}$.", True, "The axis is the midpoint of the two roots."),
            Claim(f"$Q(x)>0$ includes $x={left}$.", False, "At the root the score is zero, so strict positivity excludes it."),
            Claim(f"$Q(x)<0$ for $x<{left}$ or $x>{right}$.", True, "The quadratic is negative outside its roots."),
        ]
        return SharedCase(context, claims, "A shared quadratic sign model supplies interval and vertex facts.")

    if topic == "6.3":
        center = 20 + variant
        radius = 4
        context = (
            f"A storage room is compliant when its temperature $T$ differs from the target {center} by "
            f"at most {radius} degrees: $|T-{center}|\\le{radius}$. A stricter comfort rule replaces "
            f"$\\le$ by $<$. Temperatures are real numbers, and equality is allowed only by the compliance rule."
        )
        claims = [
            Claim(f"Compliance means ${center-radius}\\le T\\le{center+radius}$.", True, "Unfolding the absolute value gives the closed interval."),
            Claim(f"$T={center+radius}$ is compliant.", True, "Its distance from the target equals the allowed radius."),
            Claim(f"$T={center-radius}$ satisfies the comfort rule.", False, "The comfort rule is strict and excludes both endpoints."),
            Claim(f"Noncompliance means $T<{center-radius}$ or $T>{center+radius}$.", True, "This is the complement of the closed compliance interval."),
            Claim(f"$|T-{center}|\\ge{radius}$ gives an open exterior set.", False, "A non-strict exterior condition includes both boundary points."),
        ]
        return SharedCase(context, claims, "A shared absolute-value band is read with careful endpoint logic.")

    product = 40 + 2 * variant
    stock_a = 2 * 50
    stock_b = 3 * 60
    hours = Fraction(3, 2) * 48
    context = (
        f"A workshop has orders for at least {product} kits. Each kit uses 2 kg of material A, 3 kg "
        f"of material B, and 1.5 labor hours. Available resources are {stock_a} kg of A, {stock_b} kg "
        f"of B, and {tex(hours)} labor hours. The production count must be a nonnegative integer and "
        f"must satisfy every resource limit at the same time."
    )
    claims = [
        Claim("Material A permits at most $50$ kits.", True, "$2n\\le100$ gives $n\\le50$."),
        Claim("Material B permits at most $60$ kits.", True, "$3n\\le180$ gives $n\\le60$."),
        Claim("Labor permits at most $48$ kits.", True, "$1.5n\\le72$ gives $n\\le48$."),
        Claim("The overall production cap is $50$ kits.", False, "The tightest of the three upper bounds is $48$."),
        Claim(f"The order minimum of ${product}$ kits is feasible.", product <= 48, f"The feasible integer range reaches $48$, and ${product}\\le48$."),
    ]
    return SharedCase(context, claims, "A shared production story requires intersecting three resource inequalities.")


def shared_ch8(topic: str, variant: int) -> SharedCase:
    if topic == "evaluate":
        k = 3 + variant
        context = (
            f"A kiln uses the power model $M(s)={k}s^3$ grams for positive mold scale $s$. The same "
            f"calibration is used at $s=1$, $s=2$, and $s=4$, with no rounding. Technicians must "
            f"evaluate the model directly and compare outputs from these three settings."
        )
        claims = [
            Claim(f"$M(1)={k}$.", True, f"${k}(1)^3={k}$."),
            Claim(f"$M(2)={8*k}$.", True, f"${k}(2)^3={8*k}$."),
            Claim(f"$M(4)={64*k}$.", True, f"${k}(4)^3={64*k}$."),
            Claim("$M(4)=2M(2)$.", False, "$M(4)/M(2)=(4/2)^3=8$."),
            Claim("$M(s)$ is positive for every allowed $s$.", True, "Both the coefficient and $s^3$ are positive."),
        ]
        return SharedCase(context, claims, "One shared cubic model is evaluated at several inputs.")

    if topic == "scaling":
        exponent = Fraction(3, 2) if variant % 2 == 0 else Fraction(2, 3)
        factor = 4 if exponent == Fraction(3, 2) else 8
        multiplier = Fraction(8) if exponent == Fraction(3, 2) else Fraction(4)
        context = (
            f"A laboratory response follows $Y(x)=Kx^{{{tex(exponent)}}}$ for $K>0$ and $x>0$. "
            f"During a scale test, the input is multiplied by {factor} while $K$ remains fixed. "
            f"Only output ratios are needed, so the unknown coefficient and original input should cancel."
        )
        claims = [
            Claim(f"The output multiplier is ${tex(multiplier)}$.", True, f"${factor}^{{{tex(exponent)}}}={tex(multiplier)}$."),
            Claim("The multiplier depends on $K$.", False, "$K$ cancels from the ratio $Y(cx)/Y(x)$."),
            Claim("The output increases.", True, "The input multiplier exceeds one and the exponent is positive."),
            Claim(f"$Y({factor}x)={tex(multiplier)}Y(x)$.", True, "This is the power-law scaling identity."),
            Claim(f"The elasticity is ${tex(1/exponent)}$.", False, f"A power law has elasticity equal to its exponent, ${tex(exponent)}$."),
        ]
        return SharedCase(context, claims, "A shared power law is analyzed through one scale ratio.")

    if topic == "solve":
        coefficient, root, isolated, root_sqrt = [
            (4, 9, 27, 3),
            (5, 16, 64, 4),
        ][variant % 2]
        target = coefficient * isolated
        context = (
            f"A pressure setting $x>0$ must satisfy ${coefficient}x^{{3/2}}={target}$. The controller accepts only the "
            "positive real setting, and its verification routine first isolates the power before "
            "raising both sides to the reciprocal exponent. All displayed values are exact."
        )
        claims = [
            Claim(f"$x^{{3/2}}={isolated}$.", True, f"Divide both sides by ${coefficient}$."),
            Claim(f"$x={root}$.", True, f"$x={isolated}^{{2/3}}={root}$."),
            Claim(f"$x=-{root}$ is also allowed.", False, "The model states $x>0$, and the real $3/2$ power uses the positive square root."),
            Claim(f"$x^{{1/2}}={root_sqrt}$.", True, f"The positive square root of the solution ${root}$ is ${root_sqrt}$."),
            Claim("The equation has two positive solutions.", False, "$x^{3/2}$ is strictly increasing for $x>0$, so the solution is unique."),
        ]
        return SharedCase(context, claims, "One shared power equation is isolated, inverted, and checked.")

    if topic == "compose_inverse":
        scale = 2 + variant % 2
        coefficient = scale**3
        context = (
            f"A data pipeline applies $g(x)={coefficient}x^3$ and then $f(u)=\\dfrac1{scale}u^{{1/3}}$. Inputs are real, "
            "and the real cube root is used, so neither stage needs a sign restriction. Engineers "
            "compare $f(g(x))$, $g(f(x))$, and the values produced by a few fixed inputs."
        )
        claims = [
            Claim("$f(g(x))=x$ for every real $x$.", True, f"$f(g(x))=\\frac1{scale}({coefficient}x^3)^{{1/3}}=x$."),
            Claim("$g(f(x))=x$ for every real $x$.", True, f"$g(f(x))={coefficient}(\\frac1{scale}x^{{1/3}})^3=x$."),
            Claim("$f(g(4))=4$.", True, "The composition is the identity on real inputs."),
            Claim(f"$g(1)={scale}$.", False, f"$g(1)={coefficient}(1)^3={coefficient}$."),
            Claim("$f$ and $g$ are inverse functions.", True, "Both composition orders return the original input."),
        ]
        return SharedCase(context, claims, "A shared pair of maps is checked in both composition orders.")

    exponent, factor, multiplier = [
        (Fraction(-3, 2), 4, Fraction(1, 8)),
        (Fraction(-2), 3, Fraction(1, 9)),
    ][variant % 2]
    context = (
        f"A market model uses $q(p)=Kp^{{{tex(exponent)}}}$ for $K>0$ and price $p>0$. Analysts define point "
        "elasticity as $\\varepsilon=(p/q)(dq/dp)$ and also compare demand before and after price "
        f"is multiplied by {factor}. The coefficient $K$ is unchanged throughout the comparison."
    )
    claims = [
        Claim(f"$\\varepsilon={tex(exponent)}$.", True, f"For $q=Kp^a$, point elasticity equals $a={tex(exponent)}$."),
        Claim(f"Multiplying price by ${factor}$ multiplies demand by ${tex(multiplier)}$.", True, f"${factor}^{{{tex(exponent)}}}={tex(multiplier)}$."),
        Claim("Demand rises when price rises.", False, "The negative exponent makes demand decrease with price."),
        Claim("The elasticity depends on $K$.", False, "$K$ cancels in $(p/q)(dq/dp)$."),
        Claim("$q(p)>0$ on the stated domain.", True, "$K>0$, $p>0$, and every real power shown is positive."),
    ]
    return SharedCase(context, claims, "A shared inverse power law supplies elasticity and growth-factor claims.")


def shared_ch12(topic: str, variant: int) -> SharedCase:
    if topic == "12.1":
        red, blue, green = [(5, 4, 3), (6, 5, 3)][variant % 2]
        total_tokens = red + blue + green
        total = math.comb(total_tokens, 2)
        two_red = Fraction(math.comb(red, 2), total)
        red_blue = Fraction(red * blue, total)
        no_green = Fraction(math.comb(red + blue, 2), total)
        at_least_green = 1 - no_green
        context = (
            f"A jar contains {red} red, {blue} blue, and {green} green tokens. Two tokens are selected together, "
            "uniformly and without replacement, so unordered pairs form the sample space. There are "
            f"$\\binom{{{total_tokens}}}2={total}$ equally likely pairs, and color events may overlap only through the two selected tokens."
        )
        claims = [
            Claim(f"The probability of two red tokens is ${tex(two_red)}$.", True, f"$\\binom{{{red}}}2/{total}={tex(two_red)}$."),
            Claim(f"The probability of one red and one blue is ${tex(red_blue)}$.", True, f"${red}\\cdot{blue}/{total}={tex(red_blue)}$."),
            Claim(f"The probability of no green token is ${tex(no_green)}$.", True, f"$\\binom{{{red+blue}}}2/{total}={tex(no_green)}$."),
            Claim(f"The probability of at least one green token is ${tex(no_green)}$.", False, f"Use the complement: $1-{tex(no_green)}={tex(at_least_green)}$."),
            Claim("The two draws are independent.", False, "Sampling without replacement changes the color proportions after the first draw."),
        ]
        return SharedCase(context, claims, "One shared urn experiment is counted with a common sample space.")

    if topic == "12.2":
        only_a = 24 + 2 * variant
        only_b = 20 + variant
        only_c = 18 + variant
        only_ab, only_ac, only_bc = 8 + variant, 7, 6 + variant
        triple = 5
        none = 32 + 3 * variant
        exactly_one = only_a + only_b + only_c
        exactly_two = only_ab + only_ac + only_bc
        at_least_two = exactly_two + triple
        union = exactly_one + at_least_two
        total = union + none
        count_a = only_a + only_ab + only_ac + triple
        context = (
            f"A survey of {total} students records language clubs A, B, and C. The disjoint regions contain "
            f"{only_a} only in A, {only_b} only in B, {only_c} only in C, {only_ab} in A and B only, "
            f"{only_ac} in A and C only, {only_bc} in B and C only, {triple} in all three, and {none} in none. "
            "Every student belongs to exactly one listed region."
        )
        claims = [
            Claim(f"${union}$ students join at least one club.", True, f"${total}-{none}={union}$."),
            Claim(f"${exactly_one}$ students join exactly one club.", True, f"${only_a}+{only_b}+{only_c}={exactly_one}$."),
            Claim(f"${exactly_two}$ students join exactly two clubs.", True, f"${only_ab}+{only_ac}+{only_bc}={exactly_two}$."),
            Claim(f"${at_least_two}$ students join at least two clubs.", True, f"${exactly_two}+{triple}={at_least_two}$."),
            Claim(f"${count_a+1}$ students belong to A.", False, f"${only_a}+{only_ab}+{only_ac}+{triple}={count_a}$."),
        ]
        return SharedCase(context, claims, "A shared three-set survey is read from disjoint regions.")

    if topic == "12.3":
        total, premium, late, both = [
            (100, 40, 35, 15),
            (120, 54, 42, 18),
        ][variant % 2]
        late_given_premium = Fraction(both, premium)
        premium_given_late = Fraction(both, late)
        intersection = Fraction(both, total)
        union = Fraction(premium + late - both, total)
        independent = both * total == premium * late
        assert not independent
        context = (
            f"A courier audit contains {total} deliveries. Of these, {premium} used premium service, {late} arrived "
            f"late, and {both} were both premium and late. One delivery is selected uniformly. Let $P$ "
            "mean premium and $L$ mean late; all conditional probabilities use this same audit table."
        )
        claims = [
            Claim(f"$P(L\\mid P)={tex(late_given_premium)}$.", True, f"$P(L\\mid P)={both}/{premium}={tex(late_given_premium)}$."),
            Claim(f"$P(P\\mid L)={tex(premium_given_late)}$.", True, f"$P(P\\mid L)={both}/{late}={tex(premium_given_late)}$."),
            Claim(f"$P(P\\cap L)={tex(intersection)}$.", True, f"${both}/{total}={tex(intersection)}$."),
            Claim(f"$P(P\\cup L)={tex(union)}$.", True, f"$({premium}+{late}-{both})/{total}={tex(union)}$."),
            Claim("$P$ and $L$ are independent.", False, f"${both}({total})\\ne{premium}({late})$, so the product test fails."),
        ]
        return SharedCase(context, claims, "One shared two-way table supports conditional and independence checks.")

    if topic == "12.4":
        outcomes = (-2 + variant, 3 + variant, 8 + variant)
        probabilities = (Fraction(1, 2), Fraction(1, 4), Fraction(1, 4))
        mean = sum(
            (value * probability for value, probability in zip(outcomes, probabilities)),
            Fraction(),
        )
        second = sum(
            (
                value * value * probability
                for value, probability in zip(outcomes, probabilities)
            ),
            Fraction(),
        )
        variance = second - mean * mean
        context = (
            f"A game has net return $X={outcomes[0]}$, ${outcomes[1]}$, or ${outcomes[2]}$ euros with probabilities $1/2$, $1/4$, "
            "and $1/4$, respectively. The probabilities sum to one, and repeated plays are independent. "
            "The review computes $E(X)$, $E(X^2)$, variance, and the effect of adding a fixed bonus."
        )
        claims = [
            Claim(f"$E(X)={tex(mean)}$.", True, f"$({outcomes[0]})(1/2)+{outcomes[1]}(1/4)+{outcomes[2]}(1/4)={tex(mean)}$."),
            Claim(f"$E(X^2)={tex(second)}$.", True, f"$({outcomes[0]})^2(1/2)+({outcomes[1]})^2(1/4)+({outcomes[2]})^2(1/4)={tex(second)}$."),
            Claim(f"$\\operatorname{{Var}}(X)={tex(variance)}$.", True, f"${tex(second)}-({tex(mean)})^2={tex(variance)}$."),
            Claim("$\\operatorname{SD}(X)>5$.", False, f"$\\sqrt{{{tex(variance)}}}<5$."),
            Claim("Adding 5 EUR to every outcome leaves the variance unchanged.", True, "Adding a constant shifts the mean but not deviations from the mean."),
        ]
        return SharedCase(context, claims, "A shared discrete distribution supplies all moment claims.")

    share_a, defect_a, share_b, defect_b = [
        (Fraction(3, 5), Fraction(1, 50), Fraction(2, 5), Fraction(1, 20)),
        (Fraction(7, 10), Fraction(1, 50), Fraction(3, 10), Fraction(2, 25)),
    ][variant % 2]
    defect = share_a * defect_a + share_b * defect_b
    a_given_defect = share_a * defect_a / defect
    b_given_defect = share_b * defect_b / defect
    good = 1 - defect
    a_given_good = share_a * (1 - defect_a) / good
    context = (
        f"Factory A supplies {tex(100*share_a)}% of parts and has a {tex(100*defect_a)}% defect rate. "
        f"Factory B supplies the other {tex(100*share_b)}% and has a {tex(100*defect_b)}% defect rate. A part is selected from the combined output, and the factory label "
        "is hidden before inspection. The analysis uses weighted routes for defective and nondefective outcomes."
    )
    claims = [
        Claim(f"$P(\\text{{defect}})={tex(defect)}$.", True, f"${tex(share_a)}({tex(defect_a)})+{tex(share_b)}({tex(defect_b)})={tex(defect)}$."),
        Claim(f"$P(A\\mid\\text{{defect}})={tex(a_given_defect)}$.", True, f"${tex(share_a*defect_a)}/{tex(defect)}={tex(a_given_defect)}$."),
        Claim(f"$P(B\\mid\\text{{defect}})={tex(b_given_defect)}$.", True, f"${tex(share_b*defect_b)}/{tex(defect)}={tex(b_given_defect)}$."),
        Claim("A defective part is more likely from A.", a_given_defect > b_given_defect, f"${tex(a_given_defect)}<{tex(b_given_defect)}$."),
        Claim(f"$P(A\\mid\\text{{good}})={tex(a_given_good)}$.", True, f"${tex(share_a*(1-defect_a))}/{tex(good)}={tex(a_given_good)}$."),
    ]
    return SharedCase(context, claims, "One shared source-and-defect model is normalized with Bayes' theorem.")


def shared_ch13(topic: str, variant: int) -> SharedCase:
    if topic == "exact":
        n = 5 + variant % 2
        p = Fraction(1, 2)
        context = (
            f"A sensor performs {n} independent checks, each succeeding with probability $1/2$. Let "
            f"$X$ be the number of successes, so $X\\sim\\operatorname{{Bin}}({n},1/2)$. The report "
            f"uses exact binomial masses and keeps the coefficient $\\binom{{{n}}}k$ in every calculation."
        )
        p0, p1, p2 = (pmf(n, k, p) for k in range(3))
        claims = [
            Claim(f"$P(X=0)={tex(p0)}$.", True, f"$(1/2)^{n}={tex(p0)}$."),
            Claim(f"$P(X=1)={tex(p1)}$.", True, f"$\\binom{{{n}}}1(1/2)^{n}={tex(p1)}$."),
            Claim(f"$P(X=2)={tex(p2)}$.", True, f"$\\binom{{{n}}}2(1/2)^{n}={tex(p2)}$."),
            Claim("$P(X=0)=P(X=1)$.", False, f"${tex(p0)}\\ne{tex(p1)}$."),
            Claim(f"$P(X={n})=P(X=0)$.", True, "With $p=1/2$, the binomial distribution is symmetric."),
        ]
        return SharedCase(context, claims, "A shared binomial model is used for several exact masses.")

    if topic == "tail":
        n = 6 + variant
        p = Fraction(1, 2)
        at_most_one = pmf(n, 0, p) + pmf(n, 1, p)
        at_least_n_minus_one = pmf(n, n - 1, p) + pmf(n, n, p)
        at_most_two = at_most_one + pmf(n, 2, p)
        context = (
            f"A help desk handles {n} independent tickets, each resolved immediately with probability $1/2$. "
            "Let $X$ count immediate resolutions. The analyst evaluates lower and upper tails by adding "
            "all included binomial masses; endpoint phrases such as 'at most' and 'at least' are inclusive."
        )
        claims = [
            Claim(f"$P(X\\le1)={tex(at_most_one)}$.", True, f"$(\\binom{{{n}}}0+\\binom{{{n}}}1)/2^{n}={tex(at_most_one)}$."),
            Claim(f"$P(X\\ge{n-1})={tex(at_least_n_minus_one)}$.", True, "Symmetry gives the same total as $P(X\\le1)$."),
            Claim(f"$P(X\\le2)={tex(at_most_two)}$.", True, f"Add the masses for $0$, $1$, and $2$ successes to get ${tex(at_most_two)}$."),
            Claim("$P(X<2)=P(X\\le2)$.", False, "The non-strict event also contains the positive mass $P(X=2)$."),
            Claim("$P(X\\ge0)=1$.", True, "A binomial count cannot be negative."),
        ]
        return SharedCase(context, claims, "One shared binomial count supplies inclusive lower and upper tails.")

    if topic == "moments":
        n = 20 + 10 * variant
        p = Fraction(3, 10)
        mean = n * p
        variance = n * p * (1 - p)
        second = variance + mean * mean
        context = (
            f"A production line tests {n} independent items, each passing with probability $0.3$. Let $X$ "
            "be the pass count, so the binomial formulas for mean and variance apply. The report also "
            "uses $E(X^2)=\\operatorname{Var}(X)+[E(X)]^2$ and compares standard deviations."
        )
        claims = [
            Claim(f"$E(X)={tex(mean)}$.", True, f"$np={n}(0.3)={tex(mean)}$."),
            Claim(f"$\\operatorname{{Var}}(X)={tex(variance)}$.", True, f"$np(1-p)={n}(0.3)(0.7)={tex(variance)}$."),
            Claim(f"$\\operatorname{{SD}}(X)={tex(variance)}$.", False, f"Standard deviation is $\\sqrt{{{tex(variance)}}}$, not the variance."),
            Claim(f"$E(X^2)={tex(second)}$.", True, f"${tex(variance)}+({tex(mean)})^2={tex(second)}$."),
            Claim("$\\operatorname{Var}(X)/E(X)=0.7$.", True, "$np(1-p)/(np)=1-p=0.7$."),
        ]
        return SharedCase(context, claims, "A shared binomial model supplies mean, variance, SD, and second moment.")

    if topic == "compare":
        n, p_a, p_b, k = [
            (8, Fraction(1, 4), Fraction(1, 2), 4),
            (10, Fraction(2, 5), Fraction(7, 10), 5),
        ][variant % 2]
        context = (
            f"Line A tests {n} independent items with pass probability ${tex(p_a)}$, while line B tests {n} "
            f"independent items with pass probability ${tex(p_b)}$. Let $X_A$ and $X_B$ be their pass counts. "
            "The comparison concerns exact counts and moments, so each line keeps its own binomial parameter."
        )
        a0, b0 = pmf(n, 0, p_a), pmf(n, 0, p_b)
        ak, bk = pmf(n, k, p_a), pmf(n, k, p_b)
        mean_a, mean_b = n * p_a, n * p_b
        variance_a = n * p_a * (1 - p_a)
        variance_b = n * p_b * (1 - p_b)
        claims = [
            Claim("$E(X_A)<E(X_B)$.", True, f"${tex(mean_a)}<{tex(mean_b)}$."),
            Claim("$P(X_A=0)>P(X_B=0)$.", a0 > b0, f"${tex(a0)}>{tex(b0)}$."),
            Claim(f"$P(X_A={k})>P(X_B={k})$.", ak > bk, f"${tex(ak)}{'>' if ak > bk else '<'}{tex(bk)}$."),
            Claim("$\\operatorname{Var}(X_A)<\\operatorname{Var}(X_B)$.", variance_a < variance_b, f"${tex(variance_a)}{'<' if variance_a < variance_b else '>'}{tex(variance_b)}$."),
            Claim("The two pass counts have the same distribution.", False, "Their success probabilities and means differ."),
        ]
        return SharedCase(context, claims, "Two shared binomial models are compared without mixing their parameters.")

    attempts_a = 4 + variant
    attempts_b = 6 + 2 * variant
    context = (
        f"Backup A makes {attempts_a} independent activation attempts with success probability $1/4$ each. "
        f"Backup B makes {attempts_b} independent attempts with the same success probability. The systems are "
        "tested separately, and every at-least-one probability is computed as one minus the zero-success probability."
    )
    zero_a = Fraction(3, 4) ** attempts_a
    zero_b = Fraction(3, 4) ** attempts_b
    a = 1 - zero_a
    b = 1 - zero_b
    claims = [
        Claim(f"$P(A\\text{{ activates}})={tex(a)}$.", True, f"$1-(3/4)^{attempts_a}={tex(a)}$."),
        Claim(f"$P(B\\text{{ activates}})={tex(b)}$.", True, f"$1-(3/4)^{attempts_b}={tex(b)}$."),
        Claim("Activation is more likely for B.", True, f"${tex(b)}>{tex(a)}$."),
        Claim(f"$P(A\\text{{ never activates}})={tex(zero_a)}$.", True, f"$(3/4)^{attempts_a}={tex(zero_a)}$."),
        Claim("Adding attempts lowers the at-least-one probability.", False, "With fixed positive success probability, more attempts lower the zero-success probability."),
    ]
    return SharedCase(context, claims, "Two shared binomial systems are compared through zero-success complements.")


SHARED_BUILDERS: dict[str, Callable[[str, int], SharedCase]] = {
    "2": shared_ch2,
    "4": shared_ch4,
    "6": shared_ch6,
    "8": shared_ch8,
    "12": shared_ch12,
    "13": shared_ch13,
}


SPECS = [
    ("2", "math-ch2-cases.json", "2.5", ["2.1", "2.2", "2.3", "2.4"]),
    ("4", "math-ch4-cases.json", "4.5", ["4.1", "4.2", "4.3", "4.4"]),
    ("6", "math-ch6-inequalities.json", "6.5", ["6.1", "6.2", "6.3", "6.4"]),
    ("8", "math-ch8-exam.json", "8.5", ["evaluate", "scaling", "solve", "compose_inverse", "growth_elastic"]),
    ("12", "math-ch12-exam.json", "12.6", ["12.1", "12.2", "12.3", "12.4", "12.5"]),
    ("13", "math-ch13-exam.json", "13.5", ["exact", "tail", "moments", "compare", "complement"]),
]


def make_independent(old: dict, prefix: str, topics: list[str], i: int) -> dict:
    task = dict(old)
    task["title"] = f"Exam-style tasks - {i+1}"
    task["context"] = INDEPENDENT_CONTEXT

    if prefix == "4":
        ordered = [topics[(i + j) % len(topics)] for j in range(5)]
        claims = [ch4_independent(i, j, topic) for j, topic in enumerate(ordered)]
        task["statements"] = [claim.text for claim in claims]
        task["answer_key"] = [claim.truth for claim in claims]
        task["tactical_explanations"] = [
            explanation(letter, claim) for letter, claim in zip("ABCDE", claims)
        ]
        task["solution_overview"] = (
            f"Independent round-robin topics: {', '.join(ordered)}. "
            "Each letter is a separate compact mini-problem."
        )

    if prefix == "6":
        ordered = [topics[(i + j) % len(topics)] for j in range(5)]
        for j, topic in enumerate(ordered):
            if topic != "6.4":
                continue
            claim = ch6_word_claim(i, j)
            task["statements"][j] = claim.text
            task["answer_key"][j] = claim.truth
            task["tactical_explanations"][j] = explanation("ABCDE"[j], claim)

    return clean_value(task)


def make_shared(old: dict, prefix: str, topics: list[str], i: int) -> dict:
    shared_index = i - 10
    topic = topics[shared_index % len(topics)]
    variant = shared_index // len(topics)
    case = SHARED_BUILDERS[prefix](topic, variant)
    task = dict(old)
    task["title"] = f"Exam-style tasks - {i+1}"
    task["context"] = case.context
    task["statements"] = [claim.text for claim in case.claims]
    task["answer_key"] = [claim.truth for claim in case.claims]
    task["tactical_explanations"] = [
        explanation(letter, claim) for letter, claim in zip("ABCDE", case.claims)
    ]
    task["solution_overview"] = shared_overview(topic, case)
    return clean_value(task)


def validate(tasks: list[dict], subsection: str, topics: list[str]) -> dict[str, float]:
    assert len(tasks) == 20
    independent, shared = tasks[:10], tasks[10:]
    assert len(independent) == len(shared) == 10
    all_statements: list[str] = []

    for i, task in enumerate(tasks):
        assert task["subsection"] == subsection
        assert len(task["statements"]) == 5
        assert len(task["answer_key"]) == 5
        assert len(task["tactical_explanations"]) == 5
        assert "\u2014" not in json.dumps(task, ensure_ascii=False)
        assert "${" not in json.dumps(task, ensure_ascii=False)
        for letter, statement, answer, work in zip(
            "ABCDE",
            task["statements"],
            task["answer_key"],
            task["tactical_explanations"],
        ):
            assert "\n" not in statement
            assert work.startswith(f"**{letter}.** → {'True' if answer else 'False'}")
            all_statements.append(statement)

        if i < 10:
            assert task["context"] == INDEPENDENT_CONTEXT
            ordered = [topics[(i + j) % len(topics)] for j in range(5)]
            assert len(ordered) == 5
            sentence_counts = [
                len(re.findall(r"[.!?](?:\s|$)", statement))
                for statement in task["statements"]
            ]
            assert max(sentence_counts) <= 3
        else:
            expected_topic = topics[(i - 10) % len(topics)]
            assert task["solution_overview"].startswith(
                f"Shared context topic {expected_topic}."
            )
            assert len(task["context"]) >= 180
            assert max(map(len, task["statements"])) <= 135
            for statement in task["statements"]:
                assert statement not in task["context"]

    def words(values: list[str]) -> float:
        return sum(len(value.split()) for value in values) / len(values)

    def chars(values: list[str]) -> float:
        return sum(map(len, values)) / len(values)

    independent_statements = [
        statement for task in independent for statement in task["statements"]
    ]
    shared_statements = [
        statement for task in shared for statement in task["statements"]
    ]
    assert len({task["context"] for task in shared}) == 10
    assert len({tuple(task["statements"]) for task in shared}) == 10
    for task in shared:
        assert "\n\nShared solution:\n" in task["solution_overview"]
        assert len(re.findall(r"(?m)^\d+\. ", task["solution_overview"])) == 13
    return {
        "independent_words": words(independent_statements),
        "shared_words": words(shared_statements),
        "independent_chars": chars(independent_statements),
        "shared_chars": chars(shared_statements),
    }


def rewrite_file(
    prefix: str,
    filename: str,
    subsection: str,
    topics: list[str],
) -> dict[str, float]:
    path = DATA / filename
    payload = json.loads(path.read_text(encoding="utf-8"))
    targets = [task for task in payload["tasks"] if task["subsection"] == subsection]
    assert len(targets) == 20
    ids_before = [
        (task["id"], task["case_id"], task["sort_order"]) for task in targets
    ]

    replacements = [
        make_independent(task, prefix, topics, i)
        if i < 10
        else make_shared(task, prefix, topics, i)
        for i, task in enumerate(targets)
    ]
    ids_after = [
        (task["id"], task["case_id"], task["sort_order"]) for task in replacements
    ]
    assert ids_after == ids_before

    replacement_iter = iter(replacements)
    payload["tasks"] = [
        next(replacement_iter) if task["subsection"] == subsection else task
        for task in payload["tasks"]
    ]
    stats = validate(replacements, subsection, topics)
    indent = 1 if prefix in {"2", "4", "6"} else 2
    path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=indent) + "\n",
        encoding="utf-8",
    )
    return stats


def main() -> None:
    for prefix, filename, subsection, topics in SPECS:
        stats = rewrite_file(prefix, filename, subsection, topics)
        print(
            f"Ch{prefix}: independent=10 shared=10; "
            f"avg independent={stats['independent_words']:.1f} words/"
            f"{stats['independent_chars']:.1f} chars; "
            f"avg shared={stats['shared_words']:.1f} words/"
            f"{stats['shared_chars']:.1f} chars"
        )


if __name__ == "__main__":
    main()
