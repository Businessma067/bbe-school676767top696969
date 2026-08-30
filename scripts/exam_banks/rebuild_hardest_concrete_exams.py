#!/usr/bin/env python3
"""Rebuild the hardest concrete exam banks for Chapters 5, 8, 12, and 13."""

from __future__ import annotations

import json
import math
from collections import Counter
from dataclasses import dataclass
from fractions import Fraction
from pathlib import Path
from typing import Callable


ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = ROOT / "src" / "data"

CH5_TOPICS = ["tickets", "mixture", "ages_digits", "rates_work", "systems"]
CH8_TOPICS = ["evaluate", "scaling", "solve", "compose_inverse", "growth_elastic"]
CH12_TOPICS = ["12.1", "12.2", "12.3", "12.4", "12.5"]
CH13_TOPICS = ["exact", "tail", "moments", "compare", "complement"]

CASE_NOTES = [
    "The result determines whether the quarter-end control file is reopened.",
    "A second analyst must reproduce the figure before the archived report is released.",
    "The disputed claim appears in a board paper scheduled for independent review.",
    "The calculation governs a reserve that cannot be changed after the reporting cutoff.",
    "An external auditor supplied the raw observations but not the intermediate work.",
    "The final comparison decides whether a contractual performance clause is triggered.",
    "Management rounded nothing in the source ledger, so the check must remain exact.",
    "A regulator requested the calculation after two summary dashboards appeared inconsistent.",
    "The decision affects the next operating plan, making a plausible shortcut unacceptable.",
    "The source records were independently timestamped and must be reconciled without averaging.",
    "The claim will set a published benchmark used by a separate quality-control team.",
    "A one-unit discrepancy would change the exception status in the compliance register.",
    "The result feeds a fixed-price quotation that expires when the review window closes.",
    "The analyst inherited only the original observations and the disputed conclusion.",
    "The check is part of a loss investigation with exact arithmetic required throughout.",
    "The committee will accept the claim only if every hidden parameter is recovered first.",
    "A competing forecast used a linear shortcut, which the review team must independently test.",
    "The calculation controls a capacity decision for the next fully booked operating cycle.",
    "The submitted value is close to the correct one, so estimation alone cannot settle it.",
    "The signed review requires both the model choice and final numerical comparison to be shown.",
]


@dataclass(frozen=True)
class Item:
    statement: str
    truth: bool
    work: str
    summary: str


def tex(value: Fraction | int) -> str:
    value = Fraction(value)
    if value.denominator == 1:
        return str(value.numerator)
    sign = "-" if value < 0 else ""
    value = abs(value)
    return f"{sign}\\dfrac{{{value.numerator}}}{{{value.denominator}}}"


def dec(value: Fraction | float, places: int = 6) -> str:
    return f"{float(value):.{places}f}".rstrip("0").rstrip(".")


def percent(value: Fraction | float, places: int = 3) -> str:
    return dec(100 * float(value), places)


def wrong(value: Fraction | int, step: Fraction | int = 1) -> Fraction:
    return Fraction(value) + Fraction(step)


def truth_for(task_index: int, topic_index: int) -> bool:
    return (task_index + topic_index) % 2 == 0


def exact_root(value: Fraction | int, degree: int) -> Fraction:
    value = Fraction(value)

    def root_int(n: int) -> int:
        candidate = round(n ** (1 / degree))
        for r in range(max(0, candidate - 2), candidate + 3):
            if r**degree == n:
                return r
        raise ValueError(f"{n} is not a perfect {degree}th power")

    return Fraction(root_int(value.numerator), root_int(value.denominator))


def exact_power(base: Fraction | int, exponent: Fraction) -> Fraction:
    base = Fraction(base)
    exponent = Fraction(exponent)
    if exponent < 0:
        return 1 / exact_power(base, -exponent)
    rooted = exact_root(base, exponent.denominator)
    return rooted**exponent.numerator


def power_tex(exponent: Fraction) -> str:
    exponent = Fraction(exponent)
    if exponent.denominator == 1:
        return str(exponent.numerator)
    return tex(exponent)


def pmf(n: int, k: int, p: Fraction) -> Fraction:
    return Fraction(math.comb(n, k)) * p**k * (1 - p) ** (n - k)


def finish(letter: str, item: Item) -> str:
    label = "True" if item.truth else "False"
    return (
        f"**{letter}.** → {label}\n\n"
        f"{item.work.strip()}\n\n"
        f"The recomputed result {'agrees' if item.truth else 'does not agree'} "
        f"with the claim, so the statement is {label}."
    )


def solve2(
    a: Fraction | int,
    b: Fraction | int,
    c: Fraction | int,
    d: Fraction | int,
    x: Fraction | int,
    y: Fraction | int,
) -> tuple[Fraction, Fraction, Fraction]:
    a, b, c, d, x, y = map(Fraction, (a, b, c, d, x, y))
    first = a * x + b * y
    second = c * x + d * y
    determinant = a * d - b * c
    assert determinant
    recovered_x = (first * d - b * second) / determinant
    recovered_y = (a * second - first * c) / determinant
    assert recovered_x == x and recovered_y == y
    return first, second, determinant


def linear_work(
    *,
    a: Fraction | int,
    b: Fraction | int,
    c: Fraction | int,
    d: Fraction | int,
    first: Fraction,
    second: Fraction,
    determinant: Fraction,
    x: Fraction,
    y: Fraction,
    x_name: str,
    y_name: str,
    derivation: str,
) -> str:
    return f"""Let $x$ be {x_name} and $y$ be {y_name}. The two independent records give

$$({tex(a)})x+({tex(b)})y={tex(first)}$$

$$({tex(c)})x+({tex(d)})y={tex(second)}$$

The determinant is nonzero:

$$\\Delta=({tex(a)})({tex(d)})-({tex(b)})({tex(c)})={tex(determinant)}$$

Cramer's rule recovers both hidden quantities:

$$x=\\dfrac{{({tex(first)})({tex(d)})-({tex(b)})({tex(second)})}}{{{tex(determinant)}}}={tex(x)}$$

$$y=\\dfrac{{({tex(a)})({tex(second)})-({tex(first)})({tex(c)})}}{{{tex(determinant)}}}={tex(y)}$$

{derivation}"""


# Chapter 5

CH5_NAMES = [
    "Northgate Arena",
    "Swift Cargo",
    "Whitmore Foundation",
    "Bluehaven Ferry",
    "Orion Conference Centre",
    "Cedar Rail",
    "Meridian Theatre",
    "Falcon Parcel",
    "Harborlight Museum",
    "Summit Coaches",
    "Redwood Expo",
    "Atlas Freight",
    "Riverside Aquarium",
    "Polar Air Shuttle",
    "Westbridge Stadium",
    "Nova Logistics",
    "Kingsley Cinema",
    "Coastal Tram",
    "Granite Music Hall",
    "Silverline Transit",
]


def ch5_tickets(i: int, truth: bool) -> Item:
    name = CH5_NAMES[i]
    premium = Fraction(23 + i % 6)
    standard = Fraction(14 + (2 * i) % 5)
    a, b = 37 + 2 * (i % 4), 24 + 3 * (i % 5)
    c, d = 21 + 3 * (i % 5), 46 + 2 * (i % 4)
    first, second, determinant = solve2(a, b, c, d, premium, standard)
    h, k = 31 + i % 7, 28 + (2 * i) % 9
    actual = h * premium + k * standard
    claim = actual if truth else wrong(actual, premium - standard)
    statement = (
        f"{name} sold premium and standard bookings at fixed but unlisted prices. "
        f"One audited block contained ${a}$ premium and ${b}$ standard bookings for "
        f"{tex(first)} euros; another contained ${c}$ and ${d}$ for {tex(second)} euros. "
        f"After recovering both prices, the finance team claims that ${h}$ premium and "
        f"${k}$ standard bookings would produce exactly {tex(claim)} euros."
    )
    work = linear_work(
        a=a,
        b=b,
        c=c,
        d=d,
        first=first,
        second=second,
        determinant=determinant,
        x=premium,
        y=standard,
        x_name="the premium price in euros",
        y_name="the standard price in euros",
        derivation=f"""Price recovery must come before the new-block check:

$$({h})({tex(premium)})+({k})({tex(standard)})={tex(actual)}$$

The finance team's proposed total is ${tex(claim)}$ euros.""",
    )
    return Item(statement, truth, work, f"a two-record fare recovery at {name}")


def ch5_mixture(i: int, truth: bool) -> Item:
    mode = i % 4
    name = CH5_NAMES[(i + 2) % 20]

    if mode == 0:
        bond_rate = Fraction(48 + i)
        equity_rate = Fraction(75 + i)
        a, b, c, d = 27, 18, 18, 27
        first, second, determinant = solve2(a, b, c, d, bond_rate, equity_rate)
        h, k = 24, 21
        actual = h * bond_rate + k * equity_rate
        claim = actual if truth else wrong(actual, 9)
        statement = (
            f"The {name} fund measures annual return in euros. A "
            f"27-thousand-euro bond allocation with 18 thousand in equities returned "
            f"{tex(first)} euros, while the reversed 18/27 allocation returned "
            f"{tex(second)} euros. After recovering both hidden rates per thousand euros, "
            f"trustees claim a 24/21 allocation would return {tex(claim)} euros."
        )
        derivation = f"""The reconstructed return for the third allocation is

$$24({tex(bond_rate)})+21({tex(equity_rate)})={tex(actual)}$$

The trustees quote ${tex(claim)}$ euros."""
        work = linear_work(
            a=a,
            b=b,
            c=c,
            d=d,
            first=first,
            second=second,
            determinant=determinant,
            x=bond_rate,
            y=equity_rate,
            x_name="the annual euros returned per thousand invested in bonds",
            y_name="the annual euros returned per thousand invested in equities",
            derivation=derivation,
        )
        return Item(statement, truth, work, f"{name} blended-return reconstruction")

    if mode == 1:
        strong = Fraction(32 + 2 * (i % 5))
        weak = Fraction(8 + i % 4)
        x, y = 28 + i % 6, 43 + (2 * i) % 7
        total = x + y
        active = strong * x + weak * y
        after_add = 7 + i % 4
        actual = Fraction(active + weak * after_add, total + after_add)
        claim = actual if truth else wrong(actual, Fraction(1, total + after_add))
        statement = (
            f"{name} blended two process liquids, one ${tex(strong)}\\%$ active and the "
            f"other ${tex(weak)}\\%$ active. The batch used ${total}$ litres and contained "
            f"{tex(active)} percentage-litres of active ingredient. After the amounts are "
            f"recovered, ${after_add}$ litres of the weaker stock are added. The lab claims "
            f"the resulting concentration is ${tex(claim)}\\%$."
        )
        determinant = weak - strong
        derivation = f"""The original active amount remains explicit when the extra weak stock is added:

$$A_{{\\rm new}}={tex(active)}+({after_add})({tex(weak)})={tex(active + weak * after_add)}$$

$$V_{{\\rm new}}={total}+{after_add}={total + after_add}$$

$$c_{{\\rm new}}=\\dfrac{{{tex(active + weak * after_add)}}}{{{total + after_add}}}
={tex(actual)}\\%$$

The laboratory lists ${tex(claim)}\\%$."""
        work = linear_work(
            a=1,
            b=1,
            c=strong,
            d=weak,
            first=Fraction(total),
            second=Fraction(active),
            determinant=determinant,
            x=Fraction(x),
            y=Fraction(y),
            x_name="litres of stronger stock",
            y_name="litres of weaker stock",
            derivation=derivation,
        )
        return Item(statement, truth, work, f"a two-stage concentration audit at {name}")

    if mode == 2:
        peak = Fraction(31 + i % 5)
        off_peak = Fraction(14 + (2 * i) % 5)
        a, b = 84 + i, 137 + 2 * i
        c, d = 126 + 2 * i, 91 + i
        first, second, determinant = solve2(a, b, c, d, peak, off_peak)
        h, k = 115 + i, 104 + 2 * i
        actual = h * peak + k * off_peak
        claim = actual if truth else wrong(actual, peak)
        statement = (
            f"{name} has separate peak and off-peak electricity prices in cents per kWh. "
            f"Monday used ${a}$ peak and ${b}$ off-peak kWh for {tex(first)} cents; Tuesday "
            f"used ${c}$ and ${d}$ for {tex(second)} cents. After recovering both tariffs, "
            f"the energy manager says a ${h}$/${k}$ kWh Wednesday would cost "
            f"{tex(claim)} cents."
        )
        work = linear_work(
            a=a,
            b=b,
            c=c,
            d=d,
            first=first,
            second=second,
            determinant=determinant,
            x=peak,
            y=off_peak,
            x_name="the peak tariff in cents per kWh",
            y_name="the off-peak tariff in cents per kWh",
            derivation=f"""Apply the recovered tariffs to the third day:

$$({h})({tex(peak)})+({k})({tex(off_peak)})={tex(actual)}\\text{{ cents}}$$

The manager's figure is ${tex(claim)}$ cents.""",
        )
        return Item(statement, truth, work, f"{name} multi-day energy tariff recovery")

    premium_cost = Fraction(19 + i % 4)
    base_cost = Fraction(11 + (2 * i) % 5)
    a, b, c, d = 18 + i, 27 + 2 * i, 31 + i, 16 + i
    first, second, determinant = solve2(a, b, c, d, premium_cost, base_cost)
    h, k = 22 + i % 5, 35 + i % 6
    actual = Fraction(h * premium_cost + k * base_cost, h + k)
    claim = actual if truth else wrong(actual, Fraction(1, h + k))
    statement = (
        f"{name} buys premium and base coffee at unknown euro prices per kilogram. "
        f"Two invoices show ${a}$ premium plus ${b}$ base kilograms costing {tex(first)} "
        f"euros, and ${c}$ plus ${d}$ costing {tex(second)} euros. The buyer claims that, "
        f"after price recovery, a ${h}$/${k}$ kilogram blend has average cost "
        f"{tex(claim)} euros per kilogram."
    )
    work = linear_work(
        a=a,
        b=b,
        c=c,
        d=d,
        first=first,
        second=second,
        determinant=determinant,
        x=premium_cost,
        y=base_cost,
        x_name="the premium price per kilogram",
        y_name="the base price per kilogram",
        derivation=f"""The proposed blend's weighted mean cost is

$$\\bar c=\\dfrac{{({h})({tex(premium_cost)})+({k})({tex(base_cost)})}}{{{h+k}}}
={tex(actual)}$$

The quoted mean is ${tex(claim)}$ euros per kilogram.""",
    )
    return Item(statement, truth, work, f"{name} invoice-to-blend cost recovery")


def ch5_ages_digits(i: int, truth: bool) -> Item:
    name = CH5_NAMES[(i + 6) % 20]
    mode = i % 4

    if mode in (0, 2):
        tens = 4 + (i % 5)
        ones = 2 + ((3 * i) % 6)
        if tens == ones:
            ones = (ones + 3) % 10
        number = 10 * tens + ones
        reverse = 10 * ones + tens
        digit_sum = tens + ones
        diff = number - reverse
        actual = number * reverse if mode == 0 else number + 3 * digit_sum
        claim = actual if truth else wrong(actual, 9)
        target = "product of the number and its reversal" if mode == 0 else "number plus three times its digit sum"
        statement = (
            f"{name} uses a two-digit locker code. The code plus its reversal is "
            f"${number + reverse}$, and the code minus its reversal is ${diff}$. "
            f"Treating the tens and units digits as separate unknowns, the security "
            f"officer claims that the {target} equals ${claim}$."
        )
        first, second, determinant = solve2(11, 11, 9, -9, tens, ones)
        derived = (
            f"$$N=10({tens})+{ones}={number},\\qquad N_{{\\rm rev}}={reverse}$$\n\n"
            f"$$N N_{{\\rm rev}}=({number})({reverse})={actual}$$"
            if mode == 0
            else f"$$N=10({tens})+{ones}={number},\\qquad s={tens}+{ones}={digit_sum}$$\n\n"
            f"$$N+3s={number}+3({digit_sum})={actual}$$"
        )
        work = linear_work(
            a=11,
            b=11,
            c=9,
            d=-9,
            first=first,
            second=second,
            determinant=determinant,
            x=Fraction(tens),
            y=Fraction(ones),
            x_name="the tens digit",
            y_name="the units digit",
            derivation=derived + f"\n\nThe officer reports ${claim}$.",
        )
        return Item(statement, truth, work, f"{name} reversal-code reconstruction")

    younger = 19 + i % 7
    older = 2 * (younger - 7) + 7 if mode == 1 else 3 * (younger + 4) - 4
    if mode == 1:
        # Seven years ago, older was twice younger.
        a, b, first = 1, 1, older + younger
        c, d, second = 1, -2, -7
        future = 11
        actual = Fraction(older + future, younger + future)
        relation = (
            f"seven years ago the older person was twice the younger person's age. "
            f"Their present ages total ${first}$"
        )
        target_text = f"in ${future}$ years their age ratio, older to younger, will be ${tex(actual)}$"
    else:
        # Four years from now, older is three times younger.
        a, b, first = 1, 1, older + younger
        c, d, second = 1, -3, 8
        past = 6
        actual = Fraction(older - past, younger - past)
        relation = (
            f"four years from now the older person will be three times the younger "
            f"person's age then. Their present ages total ${first}$"
        )
        target_text = f"six years ago their age ratio, older to younger, was ${tex(actual)}$"
    determinant = a * d - b * c
    claim = actual if truth else wrong(actual, Fraction(1, actual.denominator))
    statement = (
        f"At {name}, a mentor and trainee report that {relation}. After translating the "
        f"time shifts and solving both present ages, the registrar claims that "
        f"{target_text.replace(tex(actual), tex(claim))}."
    )
    work = linear_work(
        a=a,
        b=b,
        c=c,
        d=d,
        first=Fraction(first),
        second=Fraction(second),
        determinant=Fraction(determinant),
        x=Fraction(older),
        y=Fraction(younger),
        x_name="the mentor's present age",
        y_name="the trainee's present age",
        derivation=(
            f"""The requested shifted-age ratio is

$$r={tex(actual)}$$

The registrar instead states ${tex(claim)}$."""
        ),
    )
    return Item(statement, truth, work, f"{name} shifted-age system")


def ch5_rates_work(i: int, truth: bool) -> Item:
    name = CH5_NAMES[(i + 10) % 20]
    mode = i % 3
    rate_a, rate_b = 34 + 2 * (i % 6), 21 + (3 * i) % 8

    if mode == 0:
        a, b, c, d = 7, 5, 4, 9
        first, second, determinant = solve2(a, b, c, d, rate_a, rate_b)
        target = 1_000 + 125 * i
        actual = Fraction(target, rate_a + rate_b)
        claim = actual if truth else wrong(actual, Fraction(1, rate_a + rate_b))
        statement = (
            f"{name} operates two packing lines at constant unknown hourly rates. "
            f"Seven hours on line A plus five on B produced ${tex(first)}$ cases, while "
            f"four hours on A plus nine on B produced ${tex(second)}$. After recovering "
            f"both rates, operations claims that running both lines together would need "
            f"${tex(claim)}$ hours to pack ${target}$ cases."
        )
        derivation = f"""With both lines active, rates add:

$$r_A+r_B={rate_a}+{rate_b}={rate_a+rate_b}$$

$$t=\\dfrac{{{target}}}{{{rate_a+rate_b}}}={tex(actual)}\\text{{ hours}}$$

The schedule claims ${tex(claim)}$ hours."""
    elif mode == 1:
        # Ground speeds in opposite directions on two logged legs.
        rate_a = 510 + 10 * (i % 6)
        rate_b = 28 + 2 * (i % 5)
        a, b, c, d = 1, 1, 1, -1
        first, second, determinant = solve2(a, b, c, d, rate_a, rate_b)
        distance = 510 + 15 * i
        actual = Fraction(distance, rate_a + rate_b) + Fraction(distance, rate_a - rate_b)
        claim = actual if truth else wrong(actual, Fraction(1, 60))
        statement = (
            f"{name} logged an aircraft's ground speed as ${tex(first)}$ km/h with a "
            f"tailwind and ${tex(second)}$ km/h against the same wind. Treating still-air "
            f"speed and wind speed as the two unknowns, dispatch claims a ${distance}$ km "
            f"out-and-back flight needs ${tex(claim)}$ hours, excluding turnaround."
        )
        derivation = f"""The two leg times use different recovered ground speeds:

$$t_{{\\rm out}}=\\dfrac{{{distance}}}{{{rate_a+rate_b}}},\\qquad
t_{{\\rm back}}=\\dfrac{{{distance}}}{{{rate_a-rate_b}}}$$

$$t_{{\\rm total}}={tex(actual)}\\text{{ hours}}$$

Dispatch lists ${tex(claim)}$ hours."""
    else:
        a, b, c, d = 6, 11, 13, 4
        first, second, determinant = solve2(a, b, c, d, rate_a, rate_b)
        hours_a, hours_b = 8 + i % 4, 7 + i % 5
        actual = hours_a * rate_a + hours_b * rate_b
        claim = Fraction(actual if truth else actual + rate_b)
        statement = (
            f"{name} measured two maintenance crews over mixed assignments. Crew A for "
            f"6 hours and crew B for 11 completed ${tex(first)}$ panels; 13 hours of A "
            f"and 4 of B completed ${tex(second)}$. After recovering both rates, the "
            f"planner claims an ${hours_a}$-hour A shift plus a ${hours_b}$-hour B shift "
            f"would complete ${tex(claim)}$ panels."
        )
        derivation = f"""Apply each recovered rate only to its own scheduled hours:

$$Q=({hours_a})({rate_a})+({hours_b})({rate_b})={actual}$$

The planner's forecast is ${tex(claim)}$ panels."""

    work = linear_work(
        a=a,
        b=b,
        c=c,
        d=d,
        first=first,
        second=second,
        determinant=determinant,
        x=Fraction(rate_a),
        y=Fraction(rate_b),
        x_name="rate A",
        y_name="rate B",
        derivation=derivation,
    )
    return Item(statement, truth, work, f"{name} mixed-shift rate recovery")


def ch5_systems(i: int, truth: bool) -> Item:
    name = CH5_NAMES[(i + 14) % 20]
    x, y = 17 + i % 8, 23 + (2 * i) % 9
    a, b = 7 + i % 4, 4 + (2 * i) % 5
    c, d = 3 + i % 5, 11 + i % 4
    first, second, determinant = solve2(a, b, c, d, x, y)
    profit_x, profit_y = 83 + i, 57 + 2 * i
    fixed = 400 + 25 * i
    actual = profit_x * x + profit_y * y - fixed
    claim = Fraction(actual if truth else actual + (profit_x - profit_y))
    statement = (
        f"{name} scheduled two contract types. Labour usage was ${a}x+{b}y={tex(first)}$ "
        f"hours and machine usage was ${c}x+{d}y={tex(second)}$ hours. After recovering "
        f"the only feasible contract counts, finance applies contribution margins of "
        f"{profit_x} and {profit_y} euros and fixed setup cost {fixed} euros, claiming "
        f"net contribution of {tex(claim)} euros."
    )
    work = linear_work(
        a=a,
        b=b,
        c=c,
        d=d,
        first=first,
        second=second,
        determinant=determinant,
        x=Fraction(x),
        y=Fraction(y),
        x_name="the number of type-A contracts",
        y_name="the number of type-B contracts",
        derivation=f"""Only after the production counts are known can net contribution be checked:

$$\\Pi=({profit_x})({x})+({profit_y})({y})-{fixed}={actual}$$

Finance reports ${tex(claim)}$ euros.""",
    )
    return Item(statement, truth, work, f"{name} two-resource production audit")


# Chapter 8

CH8_NAMES = [
    "Aster Materials",
    "Beacon Marine",
    "Cobalt Imaging",
    "Delta Biomed",
    "Evergreen Turbines",
    "Fjord Hydraulics",
    "Galileo Optics",
    "Helix Networks",
    "Ion Mobility",
    "Juniper Robotics",
    "Kepler Energy",
    "Lumen Diagnostics",
    "Meridian Agriculture",
    "Nimbus Aerospace",
    "Orchid Analytics",
    "Pioneer Ceramics",
    "Quartz Computing",
    "Redwood Pharmacology",
    "Solstice Transit",
    "Triton Acoustics",
]

POWER_CONFIGS = [
    (Fraction(3, 2), 4, 9),
    (Fraction(2, 3), 8, 27),
    (Fraction(-2), 2, 4),
    (Fraction(5, 2), 4, 9),
    (Fraction(-1, 2), 4, 9),
]


def ch8_evaluate(i: int, truth: bool) -> Item:
    name = CH8_NAMES[i]
    exponent, x0, x1 = POWER_CONFIGS[i % 5]
    coefficient = Fraction(3 + i % 8)
    y0 = coefficient * exact_power(x0, exponent)
    actual = coefficient * exact_power(x1, exponent)
    claim = actual if truth else wrong(actual, Fraction(1, actual.denominator))
    statement = (
        f"{name} models output by $Y(x)=Kx^{{{power_tex(exponent)}}}$ for $x>0$, but "
        f"the coefficient is omitted from the manual. A calibration at $x={x0}$ gives "
        f"$Y={tex(y0)}$. After first recovering $K$ and only then evaluating the second "
        f"setting, the engineer claims $Y({x1})={tex(claim)}$."
    )
    work = f"""Use the calibration to recover the hidden coefficient:

$$K=\\dfrac{{Y({x0})}}{{({x0})^{{{power_tex(exponent)}}}}}
=\\dfrac{{{tex(y0)}}}{{{tex(exact_power(x0, exponent))}}}
={tex(coefficient)}$$

Now evaluate the requested setting:

$$Y({x1})=({tex(coefficient)})({x1})^{{{power_tex(exponent)}}}$$

$$({x1})^{{{power_tex(exponent)}}}={tex(exact_power(x1, exponent))}$$

$$Y({x1})={tex(actual)}$$

The engineer's recovered-coefficient calculation reports ${tex(claim)}$."""
    return Item(statement, truth, work, f"{name} coefficient recovery and evaluation")


SCALE_CONFIGS = [
    (4, Fraction(8), Fraction(3, 2), 9),
    (8, Fraction(4), Fraction(2, 3), 27),
    (3, Fraction(1, 9), Fraction(-2), 2),
    (16, Fraction(32), Fraction(5, 4), 81),
    (9, Fraction(1, 3), Fraction(-1, 2), 16),
]


def ch8_scaling(i: int, truth: bool) -> Item:
    name = CH8_NAMES[(i + 4) % 20]
    observed_scale, observed_output, exponent, target_scale = SCALE_CONFIGS[i % 5]
    actual = exact_power(target_scale, exponent)
    trap = Fraction(target_scale) * exponent
    if trap == actual:
        trap = wrong(actual)
    claim = actual if truth else trap
    statement = (
        f"{name} knows only that its positive-input law is $Y=Kx^a$. Historical data "
        f"show that multiplying input by ${observed_scale}$ multiplies output by "
        f"${tex(observed_output)}$. After inferring the exponent rather than treating "
        f"that observation as a linear rate, analysts claim that a ${target_scale}$-fold "
        f"input change multiplies output by ${tex(claim)}$."
    )
    work = f"""Ratios remove the unknown coefficient and original input:

$$\\dfrac{{Y({observed_scale}x)}}{{Y(x)}}={observed_scale}^a={tex(observed_output)}$$

The exact powers identify

$$a={power_tex(exponent)}$$

Apply that recovered exponent to the new scale factor:

$$\\dfrac{{Y({target_scale}x)}}{{Y(x)}}
=({target_scale})^{{{power_tex(exponent)}}}
={tex(actual)}$$

Multiplying the scale factor by the exponent would give ${tex(trap)}$, which is not the power-law rule. The analysts quote ${tex(claim)}$."""
    return Item(statement, truth, work, f"{name} exponent recovery and scaling trap")


def ch8_solve(i: int, truth: bool) -> Item:
    name = CH8_NAMES[(i + 8) % 20]
    exponent, x0, target_x = POWER_CONFIGS[(i + 2) % 5]
    coefficient = Fraction(5 + i % 7)
    calibration = coefficient * exact_power(x0, exponent)
    target_y = coefficient * exact_power(target_x, exponent)
    claim = Fraction(target_x if truth else target_x + 1)
    statement = (
        f"{name} uses $Y=Kx^{{{power_tex(exponent)}}}$ on $x>0$. The calibration "
        f"$Y({x0})={tex(calibration)}$ is the only source for $K$. A controller then "
        f"targets $Y={tex(target_y)}$ and, after coefficient recovery and reciprocal-power "
        f"inversion, lists the unique admissible input as $x={tex(claim)}$."
    )
    work = f"""Calibrate before solving the new equation:

$$K=\\dfrac{{{tex(calibration)}}}{{({x0})^{{{power_tex(exponent)}}}}}
={tex(coefficient)}$$

The target condition is

$$({tex(coefficient)})x^{{{power_tex(exponent)}}}={tex(target_y)}$$

$$x^{{{power_tex(exponent)}}}
=\\dfrac{{{tex(target_y)}}}{{{tex(coefficient)}}}
={tex(exact_power(target_x, exponent))}$$

Raise both sides to the reciprocal exponent and retain $x>0$:

$$x=\\left({tex(exact_power(target_x, exponent))}\\right)^{{{power_tex(1/exponent)}}}
={target_x}$$

The controller lists ${tex(claim)}$."""
    return Item(statement, truth, work, f"{name} calibrated power-equation inversion")


COMPOSE_CONFIGS = [
    (4, 2, 3, Fraction(3, 2), 2),
    (8, 3, Fraction(1, 2), Fraction(2, 3), 3),
    (16, 2, 5, Fraction(-1, 2), 4),
    (1, 4, 2, Fraction(3, 4), 3),
    (32, 5, Fraction(1, 2), Fraction(1, 5), 2),
]


def ch8_compose(i: int, truth: bool) -> Item:
    name = CH8_NAMES[(i + 12) % 20]
    a, m, b, r, x = COMPOSE_CONFIGS[i % 5]
    g_value = Fraction(a) * Fraction(x) ** m
    actual = Fraction(b) * exact_power(g_value, r)
    claim = actual if truth else wrong(actual, Fraction(1, actual.denominator))
    statement = (
        f"{name} first applies $g(x)={tex(a)}x^{m}$ and then "
        f"$f(u)={tex(b)}u^{{{power_tex(r)}}}$ on the positive domain. An audit must "
        f"respect the order, the restricted domain, and the rational exponent. For "
        f"input $x={x}$, the audit claims $(f\\circ g)({x})={tex(claim)}$."
    )
    work = f"""Composition starts with the inner map:

$$g({x})=({tex(a)})({x})^{m}={tex(g_value)}$$

Feed that output, not the original input, into $f$:

$$(f\\circ g)({x})=({tex(b)})({tex(g_value)})^{{{power_tex(r)}}}$$

Resolve the rational or negative exponent on the positive domain:

$$({tex(g_value)})^{{{power_tex(r)}}}
={tex(exact_power(g_value, r))}$$

$$(f\\circ g)({x})={tex(actual)}$$

The order-sensitive audit value in the statement is ${tex(claim)}$."""
    return Item(statement, truth, work, f"{name} ordered composition with a domain check")


GROWTH_CONFIGS = [
    (Fraction(1, 2), Fraction(1, 3), 4, 8),
    (Fraction(2, 3), Fraction(1, 2), 8, 9),
    (Fraction(-2), Fraction(1, 2), 2, 4),
    (Fraction(3, 2), Fraction(-1), 4, 2),
    (Fraction(-1, 2), Fraction(2, 3), 9, 8),
]


def ch8_growth(i: int, truth: bool) -> Item:
    name = CH8_NAMES[(i + 16) % 20]
    alpha, beta, scale_x, scale_z = GROWTH_CONFIGS[i % 5]
    contribution_x = exact_power(scale_x, alpha)
    contribution_z = exact_power(scale_z, beta)
    multiplier = contribution_x * contribution_z
    total_elasticity = alpha + beta
    claim_multiplier = multiplier if truth else multiplier + Fraction(1, multiplier.denominator)
    claim_elasticity = total_elasticity
    statement = (
        f"{name} models performance by $Q=A x^{{{power_tex(alpha)}}}"
        f"z^{{{power_tex(beta)}}}$ with positive inputs. In a redesign, $x$ is multiplied "
        f"by ${scale_x}$ and $z$ by ${scale_z}$. The economics memo claims both that output "
        f"is multiplied by ${tex(claim_multiplier)}$ and that the elasticity under a "
        f"common proportional scaling of both inputs is ${tex(claim_elasticity)}$."
    )
    work = f"""Each changed input contributes its own power multiplier:

$$\\dfrac{{Q_{{\\rm new}}}}{{Q_{{\\rm old}}}}
=({scale_x})^{{{power_tex(alpha)}}}({scale_z})^{{{power_tex(beta)}}}$$

$$=({tex(contribution_x)})({tex(contribution_z)})
={tex(multiplier)}$$

For a common scale $t$, combine exponents:

$$Q(tx,tz)=t^{{{power_tex(alpha)}}}t^{{{power_tex(beta)}}}Q(x,z)
=t^{{{power_tex(total_elasticity)}}}Q(x,z)$$

Thus the common-scale elasticity is

$$\\varepsilon={tex(alpha)}+{tex(beta)}={tex(total_elasticity)}$$

Both parts of the conjunction must hold. The memo reports multiplier ${tex(claim_multiplier)}$ and elasticity ${tex(claim_elasticity)}$."""
    return Item(statement, truth, work, f"{name} joint scaling and elasticity")


# Chapter 12

CH12_NAMES = [
    "Alpine Shuttle",
    "Brightwell Benefits",
    "Central Mercy Hospital",
    "Durham Warranty",
    "Eastport Medical Centre",
    "Fairview Research Council",
    "Greenfield Employee Trust",
    "Harbor Regional Hospital",
    "Ironclad Appliances",
    "Juniper Diagnostics",
    "Kingsley Awards",
    "Lakeside Benefits Office",
    "Metro Teaching Hospital",
    "Northstar Warranty",
    "Oakridge Pathology",
    "Pinecrest Conference",
    "Queensbridge Benefits",
    "Riverside Hospital",
    "Stonegate Electronics",
    "Trinity Health Network",
]

CH12_VENUES = [
    "Alpine Shuttle",
    "Fairview Research Council",
    "Kingsley Awards",
    "Pinecrest Conference",
    "Beacon Civic Dinner",
    "Cedar Policy Forum",
    "Dover Science Council",
    "Eastgate Awards",
    "Foxbridge Retreat",
    "Granite Leadership Summit",
    "Harbor Research Board",
    "Ironwood Gala",
    "Juniper Academic Council",
    "Keystone Conference",
    "Lakeside Shuttle",
    "Meridian Awards",
    "Northstar Policy Forum",
    "Oakridge Retreat",
    "Queensbridge Council",
    "Riverside Symposium",
]

CH12_EMPLOYERS = [
    "Brightwell Engineering",
    "Greenfield Foods",
    "Queensbridge University",
    "Lakeside Utilities",
    "Cedarline Manufacturing",
    "Dover Transit",
    "Eastport Finance",
    "Fairview Telecom",
    "Granite Retail",
    "Harbor Logistics",
    "Ironwood Energy",
    "Juniper Hotels",
    "Keystone Software",
    "Meridian Foods",
    "Northstar Aviation",
    "Oakridge Media",
    "Pinecrest Motors",
    "Redwood Analytics",
    "Stonegate Textiles",
    "Trinity Construction",
]

CH12_HOSPITALS = [
    "Central Mercy Hospital",
    "Harbor Regional Hospital",
    "Metro Teaching Hospital",
    "Riverside Hospital",
    "Trinity Health Network",
    "Eastport Medical Centre",
    "Fairview General Hospital",
    "Greenfield University Hospital",
    "Hillside Medical Centre",
    "Ironwood Hospital",
    "Juniper Health System",
    "Kingsley Memorial Hospital",
    "Lakeside Medical Centre",
    "Meridian Regional Hospital",
    "Northstar Teaching Hospital",
    "Oakridge Health Network",
    "Pinecrest Hospital",
    "Queensbridge Medical Centre",
    "Redwood General Hospital",
    "Stonegate University Hospital",
]

CH12_WARRANTIES = [
    "Durham Appliances",
    "Ironclad Appliances",
    "Northstar Motors",
    "Stonegate Electronics",
    "Atlas Home Systems",
    "Brightwell Motors",
    "Cedarline Devices",
    "Dover Equipment",
    "Eastport Electronics",
    "Fairview Appliances",
    "Granite Auto",
    "Harbor Home Systems",
    "Juniper Devices",
    "Keystone Equipment",
    "Lakeside Electronics",
    "Meridian Appliances",
    "Oakridge Motors",
    "Pinecrest Devices",
    "Redwood Equipment",
    "Trinity Electronics",
]


def ch12_combinatorial(i: int, truth: bool) -> Item:
    name = CH12_VENUES[i]
    mode = i % 4

    if mode == 0:
        couples = 4 + (i // 8)
        people = 2 * couples
        total = math.factorial(people)
        union = sum(
            (-1) ** (j + 1)
            * math.comb(couples, j)
            * 2**j
            * math.factorial(people - j)
            for j in range(1, couples + 1)
        )
        actual = Fraction(union, total)
        claim = actual if truth else wrong(actual, Fraction(1, total))
        terms = " ".join(
            f"{'+' if j % 2 else '-'}\\binom{{{couples}}}{{{j}}}2^{{{j}}}({people-j})!"
            for j in range(1, couples + 1)
        ).lstrip("+")
        statement = (
            f"{name} seats ${couples}$ named couples, all ${people}$ people distinct, "
            f"uniformly in one row. No adjacency is imposed. Using full "
            f"inclusion-exclusion across the couple-adjacency events, the coordinator "
            f"claims the probability that at least one couple sits together is "
            f"${tex(claim)}$."
        )
        work = f"""There are

$$N={people}!={total}$$

unrestricted rows. If a specified set of $j$ couples sits together, collapse each selected couple to a block and order each block internally:

$$N_j=2^j({people}-j)!$$

Choose which $j$ couples are adjacent and apply inclusion-exclusion:

$$N(\\text{{at least one adjacent couple}})
={terms}={union}$$

Therefore,

$$P=\\dfrac{{{union}}}{{{total}}}={tex(actual)}
\\approx {dec(actual, 8)}$$

The quoted probability is ${tex(claim)}$."""
        return Item(statement, truth, work, f"{name} couple seating by inclusion-exclusion")

    if mode == 1:
        people = 8 + i % 3
        total = math.factorial(people)
        adjacent = 2 * math.factorial(people - 1)
        bad_ends = 4 * math.factorial(people - 2)
        favorable = adjacent - bad_ends
        actual = Fraction(favorable, total)
        claim = actual if truth else wrong(actual, Fraction(1, total))
        statement = (
            f"At the {name} dinner, ${people}$ distinct guests sit uniformly in a row. "
            f"Ada and Ben must be adjacent for the favorable event, while Cara must not "
            f"occupy either end. After subtracting the overlap between the block condition "
            f"and forbidden ends, the stated probability is ${tex(claim)}$."
        )
        work = f"""Treat Ada and Ben as an internally ordered block:

$$N_{{AB}}=2({people-1})!={adjacent}$$

For arrangements also placing Cara at an end, choose the end, order the block, and arrange the remaining entities:

$$N_{{AB,\\ Cara\\ at\\ end}}=2\\cdot2({people-2})!={bad_ends}$$

Subtract the forbidden arrangements:

$$F={adjacent}-{bad_ends}={favorable}$$

$$P=\\dfrac{{F}}{{{people}!}}
=\\dfrac{{{favorable}}}{{{total}}}
={tex(actual)}\\approx {dec(actual, 8)}$$

The dinner report gives ${tex(claim)}$."""
        return Item(statement, truth, work, f"{name} block seating with forbidden ends")

    if mode == 2:
        women = 7 + i % 3
        men = 9 + (2 * i) % 3
        size = 6
        chosen_women = 3
        chosen_men = size - chosen_women
        total = math.comb(women + men, size)
        favorable = math.comb(women, chosen_women) * (
            math.comb(men, chosen_men) - math.comb(men - 2, chosen_men)
        )
        actual = Fraction(favorable, total)
        claim = actual if truth else wrong(actual, Fraction(1, total))
        statement = (
            f"The {name} council has ${women}$ women and ${men}$ men, including two "
            f"named senior men. A six-person committee is chosen uniformly. The minutes "
            f"claim that the probability of selecting exactly three women and at least "
            f"one of the two named seniors is ${tex(claim)}$."
        )
        work = f"""The unrestricted committee denominator is

$$N=\\binom{{{women+men}}}{{6}}={total}$$

Choose three women. For the three men, subtract selections omitting both named seniors:

$$F=\\binom{{{women}}}{{3}}
\\left[\\binom{{{men}}}{{3}}-\\binom{{{men-2}}}{{3}}\\right]$$

$$F={favorable}$$

Thus,

$$P=\\dfrac{{{favorable}}}{{{total}}}
={tex(actual)}\\approx {dec(actual, 8)}$$

This subtraction handles the named-member restriction after the gender restriction. The minutes list ${tex(claim)}$."""
        return Item(statement, truth, work, f"{name} restricted committee count")

    people = 9 + i % 3
    total = math.factorial(people - 1)
    cd_adjacent = 2 * math.factorial(people - 2)
    both_pairs = 4 * math.factorial(people - 3)
    favorable = cd_adjacent - both_pairs
    actual = Fraction(favorable, total)
    claim = actual if truth else wrong(actual, Fraction(1, total))
    statement = (
        f"{name} seats ${people}$ distinct delegates uniformly around a round table, "
        f"with rotations identified. The favorable event requires Cara and Dan to sit "
        f"together but Ada and Ben not to sit together. The organiser claims its "
        f"probability is ${tex(claim)}$."
    )
    work = f"""With rotations identified, the full circular sample space has

$$N=({people}-1)!={total}$$

Collapse Cara and Dan to one block and order that block:

$$N_{{CD}}=2({people}-2)!={cd_adjacent}$$

The unwanted overlap has both named pairs collapsed:

$$N_{{CD\\cap AB}}=2\\cdot2({people}-3)!={both_pairs}$$

Therefore,

$$F={cd_adjacent}-{both_pairs}={favorable}$$

$$P=\\dfrac{{{favorable}}}{{{total}}}
={tex(actual)}\\approx {dec(actual, 8)}$$

The reported probability is ${tex(claim)}$."""
    return Item(statement, truth, work, f"{name} circular block subtraction")


def ch12_inclusion(i: int, truth: bool) -> Item:
    name = CH12_EMPLOYERS[i]
    only_a = 46 + 2 * (i % 5)
    only_b = 39 + 3 * (i % 4)
    only_c = 31 + 2 * (i % 6)
    only_ab = 13 + i % 4
    only_ac = 9 + i % 5
    only_bc = 11 + (2 * i) % 5
    triple = 6 + i % 4
    none = 24 + 2 * (i % 5)
    total = only_a + only_b + only_c + only_ab + only_ac + only_bc + triple + none
    a = only_a + only_ab + only_ac + triple
    b = only_b + only_ab + only_bc + triple
    c = only_c + only_ac + only_bc + triple
    ab, ac, bc = only_ab + triple, only_ac + triple, only_bc + triple
    s1, s2 = a + b + c, ab + ac + bc
    union = s1 - s2 + triple
    categories = [
        ("exactly one benefit", s1 - 2 * s2 + 3 * triple),
        ("exactly two benefits", s2 - 3 * triple),
        ("at least two benefits", s2 - 2 * triple),
        ("none of the benefits", total - union),
    ]
    label, actual = categories[i % 4]
    claim = actual if truth else actual + triple
    statement = (
        f"{name} audits ${total}$ employees for health (H), dental (D), and vision (V). "
        f"The marginal counts are ${a}$, ${b}$, and ${c}$; pairwise counts including "
        f"triple enrollment are ${ab}$, ${ac}$, and ${bc}$; and ${triple}$ employees "
        f"have all three. HR claims ${claim}$ employees have {label}."
    )
    work = f"""Collect the marginal and pairwise sums:

$$S_1={a}+{b}+{c}={s1}$$

$$S_2={ab}+{ac}+{bc}={s2}$$

Three-set inclusion-exclusion gives

$$N(H\\cup D\\cup V)=S_1-S_2+{triple}
={s1}-{s2}+{triple}={union}$$

The disjoint categories are

$$N(\\text{{exactly one}})=S_1-2S_2+3({triple})
={s1 - 2*s2 + 3*triple}$$

$$N(\\text{{exactly two}})=S_2-3({triple})
={s2 - 3*triple}$$

$$N(\\text{{at least two}})=S_2-2({triple})
={s2 - 2*triple}$$

$$N(\\text{{none}})={total}-{union}={total-union}$$

The requested category, {label}, contains ${actual}$ employees, while HR reports ${claim}$."""
    return Item(statement, truth, work, f"{name} three-benefit region recovery")


HOSPITAL_RATES = [
    (Fraction(4, 25), Fraction(2, 25), Fraction(3, 100)),
    (Fraction(3, 20), Fraction(9, 100), Fraction(1, 25)),
    (Fraction(7, 50), Fraction(3, 40), Fraction(1, 20)),
    (Fraction(9, 50), Fraction(1, 10), Fraction(3, 100)),
]


def ch12_conditional(i: int, truth: bool) -> Item:
    name = CH12_HOSPITALS[i]
    discharges = (4000 + 200 * i, 12000 + 300 * i, 8000 + 200 * i)
    rates = HOSPITAL_RATES[i % 4]
    events = tuple(Fraction(n) * r for n, r in zip(discharges, rates))
    assert all(x.denominator == 1 for x in events)
    events = tuple(int(x) for x in events)
    total_events = sum(events)
    mode = i % 4

    if mode == 0:
        actual = Fraction(events[1], total_events)
        description = "a readmitted patient came from the General Ward"
        formula = f"\\dfrac{{{events[1]}}}{{{total_events}}}"
    elif mode == 1:
        actual = Fraction(events[0] + events[2], discharges[0] + discharges[2])
        description = "a patient was readmitted given discharge from either ICU or Outpatient"
        formula = f"\\dfrac{{{events[0]}+{events[2]}}}{{{discharges[0]}+{discharges[2]}}}"
    elif mode == 2:
        actual = Fraction(events[1] + events[2], discharges[1] + discharges[2])
        description = "a non-ICU discharge was readmitted"
        formula = f"\\dfrac{{{events[1]}+{events[2]}}}{{{discharges[1]}+{discharges[2]}}}"
    else:
        actual = Fraction(events[0] - 1, total_events - 1)
        description = "the next readmission record is from ICU after one known ICU readmission is removed"
        formula = f"\\dfrac{{{events[0]}-1}}{{{total_events}-1}}"

    claim = actual if truth else wrong(actual, Fraction(1, actual.denominator))
    statement = (
        f"{name} discharged ${discharges[0]}$ ICU, ${discharges[1]}$ General Ward, and "
        f"${discharges[2]}$ Outpatient patients; ${events[0]}$, ${events[1]}$, and "
        f"${events[2]}$ respectively were readmitted. Using the correct conditional "
        f"sample space, the audit claims the probability that {description} is "
        f"${tex(claim)}$."
    )
    work = f"""First total the readmissions across the mutually exclusive units:

$$N(R)={events[0]}+{events[1]}+{events[2]}={total_events}$$

The corresponding full discharge total is

$$N={discharges[0]}+{discharges[1]}+{discharges[2]}={sum(discharges)}$$

For the event named in the statement, conditioning changes the denominator:

$$P={formula}$$

$$P={tex(actual)}\\approx {dec(actual, 8)}$$

The numerator and denominator must be altered together in the removal case and pooled over the same units in a grouped condition. The audit gives ${tex(claim)}$."""
    return Item(statement, truth, work, f"{name} hospital conditional-probability audit")


WARRANTY_PROBS = [
    (Fraction(17, 20), Fraction(3, 25), Fraction(3, 100)),
    (Fraction(4, 5), Fraction(3, 20), Fraction(1, 20)),
    (Fraction(7, 8), Fraction(1, 10), Fraction(1, 40)),
    (Fraction(9, 10), Fraction(2, 25), Fraction(1, 50)),
]


def ch12_moments(i: int, truth: bool) -> Item:
    name = CH12_WARRANTIES[i]
    probs = WARRANTY_PROBS[i % 4]
    payouts = (0, 180 + 10 * i, 3600 + 100 * i)
    mean = sum((p * x for p, x in zip(probs, payouts)), Fraction())
    second = sum((p * x * x for p, x in zip(probs, payouts)), Fraction())
    variance = second - mean * mean
    policies = 2 + i % 4
    premium = 240 + 5 * i
    total_mean = policies * mean
    total_variance = policies * variance
    profit_mean = policies * (premium - mean)
    mode = i % 4

    if mode == 0:
        actual_text = f"mean ${tex(total_mean)}$ and variance ${tex(total_variance)}$"
        claim_variance = total_variance if truth else wrong(total_variance)
        claim_text = f"mean ${tex(total_mean)}$ and variance ${tex(claim_variance)}$"
    elif mode == 1:
        actual_text = f"mean profit ${tex(profit_mean)}$ and variance ${tex(total_variance)}$"
        claim_mean = profit_mean if truth else wrong(profit_mean, policies)
        claim_variance = total_variance
        claim_text = f"mean profit ${tex(claim_mean)}$ and variance ${tex(claim_variance)}$"
    elif mode == 2:
        sd_factor = math.sqrt(policies)
        actual_text = f"standard-deviation factor $\\sqrt{{{policies}}}\\approx {dec(sd_factor, 5)}$"
        claimed_factor = f"\\sqrt{{{policies}}}" if truth else str(policies)
        claim_text = f"standard-deviation factor ${claimed_factor}$"
    else:
        admin = 175 + 5 * i
        adjusted_mean = total_mean + admin
        actual_text = f"mean ${tex(adjusted_mean)}$ and variance ${tex(total_variance)}$"
        claim_var = total_variance if truth else wrong(total_variance, admin)
        claim_text = f"mean ${tex(adjusted_mean)}$ and variance ${tex(claim_var)}$"

    statement = (
        f"{name} warranty pays 0, {payouts[1]}, or {payouts[2]} euros with probabilities "
        f"${tex(probs[0])}$, ${tex(probs[1])}$, and ${tex(probs[2])}$. It holds "
        f"${policies}$ independent policies and charges {premium} euros per policy. "
        f"After computing $E(X)$ and $E(X^2)$ before scaling the portfolio, the actuary "
        f"reports {claim_text} for the relevant total."
    )
    work = f"""For one policy,

$$E(X)=0({tex(probs[0])})+{payouts[1]}({tex(probs[1])})
+{payouts[2]}({tex(probs[2])})={tex(mean)}$$

$$E(X^2)=0^2({tex(probs[0])})+{payouts[1]}^2({tex(probs[1])})
+{payouts[2]}^2({tex(probs[2])})={tex(second)}$$

$$\\operatorname{{Var}}(X)=E(X^2)-[E(X)]^2
={tex(second)}-({tex(mean)})^2={tex(variance)}$$

For ${policies}$ independent policies,

$$E(S)={policies}E(X)={tex(total_mean)}$$

$$\\operatorname{{Var}}(S)={policies}\\operatorname{{Var}}(X)
={tex(total_variance)}$$

$$\\operatorname{{SD}}(S)=\\sqrt{{{policies}}}\\operatorname{{SD}}(X)$$

A fixed premium or administration charge changes the mean but not variance. The recomputed relevant result is {actual_text}; the actuary reports {claim_text}."""
    return Item(statement, truth, work, f"{name} multi-policy warranty moments")


BAYES_PRIORS = [
    (Fraction(1, 6), Fraction(1, 2), Fraction(1, 3)),
    (Fraction(1, 5), Fraction(9, 20), Fraction(7, 20)),
    (Fraction(1, 4), Fraction(1, 2), Fraction(1, 4)),
    (Fraction(3, 20), Fraction(11, 20), Fraction(3, 10)),
]
BAYES_RATES = [
    (Fraction(4, 25), Fraction(2, 25), Fraction(3, 100)),
    (Fraction(9, 50), Fraction(1, 10), Fraction(1, 25)),
    (Fraction(3, 20), Fraction(7, 100), Fraction(1, 50)),
    (Fraction(1, 5), Fraction(3, 25), Fraction(1, 20)),
]
BAYES_SECOND = [
    (Fraction(9, 10), Fraction(4, 5), Fraction(7, 10)),
    (Fraction(17, 20), Fraction(3, 4), Fraction(13, 20)),
    (Fraction(19, 20), Fraction(17, 20), Fraction(3, 5)),
    (Fraction(4, 5), Fraction(7, 10), Fraction(1, 2)),
]


def ch12_bayes(i: int, truth: bool) -> Item:
    name = CH12_HOSPITALS[(i + 5) % 20]
    priors = BAYES_PRIORS[i % 4]
    rates = BAYES_RATES[(i + 1) % 4]
    second_rates = BAYES_SECOND[i % 4]
    source = i % 3
    two_stage = i % 2 == 1
    likelihoods = tuple(
        rates[j] * second_rates[j] if two_stage else rates[j] for j in range(3)
    )
    weights = tuple(priors[j] * likelihoods[j] for j in range(3))
    evidence = sum(weights, Fraction())
    actual = weights[source] / evidence
    claim = actual if truth else wrong(actual, Fraction(1, actual.denominator))
    source_name = ("ICU", "General Ward", "Outpatient")[source]
    extra = (
        " A second independent review flag, conditional on unit, has respective "
        f"rates ${tex(second_rates[0])}$, ${tex(second_rates[1])}$, and "
        f"${tex(second_rates[2])}$; the record shows both events."
        if two_stage
        else ""
    )
    statement = (
        f"{name} draws discharge records from ICU, General Ward, and Outpatient with "
        f"prior shares ${tex(priors[0])}$, ${tex(priors[1])}$, and ${tex(priors[2])}$. "
        f"Adverse-event rates are ${tex(rates[0])}$, ${tex(rates[1])}$, and "
        f"${tex(rates[2])}$.{extra} Given the observed evidence, the review board claims "
        f"the posterior probability of {source_name} is ${tex(claim)}$."
    )
    stage_note = (
        "Because the two observations are conditionally independent within a unit, multiply their unit-specific likelihoods first."
        if two_stage
        else "There is one observed event, so each unit-specific likelihood is its adverse-event rate."
    )
    work = f"""{stage_note}

$$L_I={tex(likelihoods[0])},\\qquad
L_G={tex(likelihoods[1])},\\qquad
L_O={tex(likelihoods[2])}$$

Multiply priors by likelihoods:

$$w_I={tex(priors[0])}({tex(likelihoods[0])})={tex(weights[0])}$$

$$w_G={tex(priors[1])}({tex(likelihoods[1])})={tex(weights[1])}$$

$$w_O={tex(priors[2])}({tex(likelihoods[2])})={tex(weights[2])}$$

The law of total probability normalizes all routes:

$$P(E)=w_I+w_G+w_O={tex(evidence)}$$

Bayes' theorem gives

$$P({source_name}\\mid E)
=\\dfrac{{{tex(weights[source])}}}{{{tex(evidence)}}}
={tex(actual)}\\approx {dec(actual, 8)}$$

The board reports ${tex(claim)}$."""
    return Item(statement, truth, work, f"{name} three-route hospital Bayes update")


# Chapter 13

CH13_NAMES = [
    "Apex Oncology Lab",
    "Brightline Sales",
    "Crestview Bottling",
    "Dover Support Desk",
    "Evergreen Seed Co.",
    "Falcon Microchips",
    "Granite Blood Bank",
    "Harbor Claims Centre",
    "Ion Battery Works",
    "Juniper Call Team",
    "Keystone Diagnostics",
    "Lighthouse Components",
    "Meridian Vaccine Unit",
    "Northstar Fulfilment",
    "Orchid Quality Lab",
    "Pioneer Security",
    "Quartz Field Trials",
    "Redwood Service Hub",
    "Solstice Devices",
    "Triton Clinical Lab",
]

BINOMIAL_PS = [
    Fraction(3, 10),
    Fraction(2, 5),
    Fraction(1, 2),
    Fraction(3, 5),
    Fraction(7, 10),
]


def ch13_exact(i: int, truth: bool) -> Item:
    name = CH13_NAMES[i]
    n = 18 + i % 10
    p = BINOMIAL_PS[i % 5]
    k = 3 + i % 6
    target = min(n - 2, k + 3)
    ratio = pmf(n, k + 1, p) / pmf(n, k, p)
    actual = pmf(n, target, p)
    claim = actual if truth else Fraction(actual.numerator + 1, actual.denominator)
    statement = (
        f"{name} models the number $X$ of successes in ${n}$ independent trials as "
        f"binomial, but its success probability is hidden. Calibration gives the exact "
        f"adjacent-mass ratio $P(X={k+1})/P(X={k})={tex(ratio)}$. After recovering $p$ "
        f"from that ratio, the analyst claims $P(X={target})={tex(claim)}$."
    )
    work = f"""For adjacent binomial masses, the common factors cancel:

$$\\dfrac{{P(X={k+1})}}{{P(X={k})}}
=\\dfrac{{n-{k}}}{{{k+1}}}\\dfrac{{p}}{{1-p}}$$

Insert the calibrated ratio:

$$\\dfrac{{{n-k}}}{{{k+1}}}\\dfrac{{p}}{{1-p}}
={tex(ratio)}$$

Solving this rational equation gives

$$p={tex(p)},\\qquad 1-p={tex(1-p)}$$

Now evaluate the requested, different mass:

$$P(X={target})=\\binom{{{n}}}{{{target}}}
\\left({tex(p)}\\right)^{{{target}}}
\\left({tex(1-p)}\\right)^{{{n-target}}}$$

$$=({math.comb(n,target)})({tex(p**target)})
({tex((1-p)**(n-target))})$$

$$={tex(actual)}\\approx {dec(actual, 10)}$$

The analyst's exact fraction is ${tex(claim)}$."""
    return Item(statement, truth, work, f"{name} adjacent-mass recovery before an exact PMF")


def mass_listing(n: int, p: Fraction, values: list[int]) -> str:
    return "\n\n".join(
        f"$$P(X={k})=\\binom{{{n}}}{{{k}}}"
        f"\\left({tex(p)}\\right)^{{{k}}}"
        f"\\left({tex(1-p)}\\right)^{{{n-k}}}"
        f"\\approx {dec(pmf(n,k,p), 10)}$$"
        for k in values
    )


def ch13_tail(i: int, truth: bool) -> Item:
    name = CH13_NAMES[(i + 3) % 20]
    n = 20 + i % 8
    p = BINOMIAL_PS[(i + 1) % 5]
    if i % 2 == 0:
        cutoff = max(3, math.floor(n * float(p)) - 2)
        values = list(range(0, cutoff + 1))
        event_tex = f"X\\le {cutoff}"
        event_words = f"at most ${cutoff}$"
    else:
        cutoff = min(n - 3, math.ceil(n * float(p)) + 2)
        values = list(range(cutoff, n + 1))
        event_tex = f"X\\ge {cutoff}"
        event_words = f"at least ${cutoff}$"
    actual = sum((pmf(n, k, p) for k in values), Fraction())
    claim = actual if truth else Fraction(actual.numerator + 1, actual.denominator)
    statement = (
        f"{name} independently inspects ${n}$ cases, each producing the flagged outcome "
        f"with probability ${tex(p)}$. If $X$ counts flags, management claims the full "
        f"multi-term probability of observing {event_words} flags is ${tex(claim)}$, "
        f"not merely the endpoint mass."
    )
    work = f"""The fixed trial count, common probability, and independence give

$$X\\sim\\operatorname{{Bin}}\\left({n},{tex(p)}\\right)$$

The wording includes every integer in the indicated tail:

$$P({event_tex})=\\sum_{{x={values[0]}}}^{{{values[-1]}}}
\\binom{{{n}}}{{x}}\\left({tex(p)}\\right)^x
\\left({tex(1-p)}\\right)^{{{n}-x}}$$

The included disjoint masses are:

{mass_listing(n, p, values)}

Adding all ${len(values)}$ terms gives

$$P({event_tex})={tex(actual)}
\\approx {dec(actual, 10)}$$

The management fraction is ${tex(claim)}$."""
    return Item(statement, truth, work, f"{name} full binomial tail")


def ch13_moments(i: int, truth: bool) -> Item:
    name = CH13_NAMES[(i + 6) % 20]
    n = 18 + i % 9
    p = BINOMIAL_PS[(i + 2) % 5]
    mean = n * p
    variance = n * p * (1 - p)
    recovered_p = 1 - variance / mean
    recovered_n = mean / recovered_p
    assert recovered_p == p and recovered_n == n
    mode = i % 4

    if mode == 0:
        cost, fixed = 35 + i, 120 + 3 * i
        actual_mean = fixed + cost * mean
        actual_var = cost**2 * variance
        claim_mean = actual_mean
        claim_var = actual_var if truth else wrong(actual_var, cost)
        result_work = f"""For $C={fixed}+{cost}X$,

$$E(C)={fixed}+{cost}({tex(mean)})={tex(actual_mean)}$$

$$\\operatorname{{Var}}(C)={cost}^2({tex(variance)})
={tex(actual_var)}$$

The claim gives mean ${tex(claim_mean)}$ and variance ${tex(claim_var)}$."""
        claim_text = f"mean cost ${tex(claim_mean)}$ and variance ${tex(claim_var)}$"
    elif mode == 1:
        factor = "\\sqrt{2}" if truth else "2"
        result_work = f"""For an independent shift with $2n$ trials and unchanged $p$,

$$\\operatorname{{Var}}(Y)=2np(1-p)=2\\operatorname{{Var}}(X)$$

$$\\dfrac{{\\operatorname{{SD}}(Y)}}{{\\operatorname{{SD}}(X)}}=\\sqrt2$$

The statement uses factor ${factor}$."""
        claim_text = f"the doubled shift has standard deviation ${factor}$ times the original"
    elif mode == 2:
        cv2 = variance / (mean * mean)
        claim_cv2 = cv2 if truth else wrong(cv2, Fraction(1, cv2.denominator))
        result_work = f"""The squared coefficient of variation avoids an unnecessary radical:

$$\\operatorname{{CV}}^2
=\\dfrac{{\\operatorname{{Var}}(X)}}{{[E(X)]^2}}
=\\dfrac{{{tex(variance)}}}{{({tex(mean)})^2}}
={tex(cv2)}$$

The claimed value is ${tex(claim_cv2)}$."""
        claim_text = f"the squared coefficient of variation is ${tex(claim_cv2)}$"
    else:
        second_n = n + 7
        total_mean = (n + second_n) * p
        total_var = (n + second_n) * p * (1 - p)
        claim_var = total_var if truth else wrong(total_var, Fraction(1, total_var.denominator))
        result_work = f"""For an independent second shift of ${second_n}$ trials with the same $p$, counts add:

$$E(X+Y)=({n}+{second_n})({tex(p)})={tex(total_mean)}$$

$$\\operatorname{{Var}}(X+Y)=({n}+{second_n})
({tex(p)})({tex(1-p)})={tex(total_var)}$$

The claim gives mean ${tex(total_mean)}$ and variance ${tex(claim_var)}$."""
        claim_text = f"the combined count has mean ${tex(total_mean)}$ and variance ${tex(claim_var)}$"

    statement = (
        f"{name} reports only that a binomial count has mean ${tex(mean)}$ and variance "
        f"${tex(variance)}$. These two moments must first be used to recover both $p$ "
        f"and $n$. Based on that recovery, the operations memo claims {claim_text}."
    )
    work = f"""For a nondegenerate binomial count,

$$E(X)=np={tex(mean)}$$

$$\\operatorname{{Var}}(X)=np(1-p)={tex(variance)}$$

Divide variance by mean:

$$1-p=\\dfrac{{{tex(variance)}}}{{{tex(mean)}}}
={tex(1-p)}$$

$$p={tex(recovered_p)},\\qquad
n=\\dfrac{{{tex(mean)}}}{{{tex(recovered_p)}}}={tex(recovered_n)}$$

{result_work}"""
    return Item(statement, truth, work, f"{name} recovery of binomial parameters from moments")


COMPARE_CONFIGS = [
    (25, Fraction(3, 10), 25, Fraction(17, 25), 13),
    (24, Fraction(7, 20), 26, Fraction(13, 20), 14),
    (22, Fraction(2, 5), 24, Fraction(7, 10), 13),
    (27, Fraction(9, 20), 25, Fraction(18, 25), 15),
    (23, Fraction(3, 10), 27, Fraction(3, 5), 14),
]


def ch13_compare(i: int, truth: bool) -> Item:
    name = CH13_NAMES[(i + 9) % 20]
    n_a, p_a, n_b, p_b, cutoff = COMPARE_CONFIGS[i % 5]
    tail_a = sum((pmf(n_a, k, p_a) for k in range(cutoff, n_a + 1)), Fraction())
    tail_b = sum((pmf(n_b, k, p_b) for k in range(cutoff, n_b + 1)), Fraction())
    ratio = tail_b / tail_a
    assert ratio > 1
    if truth:
        threshold = Fraction(math.floor(float(ratio) * 10), 10)
        if threshold == ratio:
            threshold -= Fraction(1, 10)
    else:
        threshold = Fraction(math.ceil(float(ratio) * 10), 10)
        if threshold == ratio:
            threshold += Fraction(1, 10)
    statement = (
        f"{name} compares two independent teams. Team A has ${n_a}$ attempts with "
        f"success probability ${tex(p_a)}$; Team B has ${n_b}$ with probability "
        f"${tex(p_b)}$. A strong day means at least ${cutoff}$ successes. After summing "
        f"both complete upper tails, the director claims B is more than ${tex(threshold)}$ "
        f"times as likely as A to have a strong day."
    )
    work = f"""Model the teams separately:

$$X_A\\sim\\operatorname{{Bin}}({n_a},{tex(p_a)}),\\qquad
X_B\\sim\\operatorname{{Bin}}({n_b},{tex(p_b)})$$

The same verbal cutoff creates two complete tails:

$$P_A=\\sum_{{x={cutoff}}}^{{{n_a}}}
\\binom{{{n_a}}}{{x}}({tex(p_a)})^x({tex(1-p_a)})^{{{n_a}-x}}
={tex(tail_a)}\\approx {dec(tail_a, 10)}$$

Team A's included masses are:

{mass_listing(n_a, p_a, list(range(cutoff, n_a + 1)))}

$$P_B=\\sum_{{x={cutoff}}}^{{{n_b}}}
\\binom{{{n_b}}}{{x}}({tex(p_b)})^x({tex(1-p_b)})^{{{n_b}-x}}
={tex(tail_b)}\\approx {dec(tail_b, 10)}$$

Team B's included masses are:

{mass_listing(n_b, p_b, list(range(cutoff, n_b + 1)))}

Using only the cutoff mass or the ratio $p_B/p_A$ would answer a different question. The required tail ratio is

$$R=\\dfrac{{P_B}}{{P_A}}
=\\dfrac{{{tex(tail_b)}}}{{{tex(tail_a)}}}
={tex(ratio)}\\approx {dec(ratio, 8)}$$

The director's strict benchmark is ${tex(threshold)}$. The computed ratio is {'above' if ratio > threshold else 'below'} that benchmark."""
    return Item(statement, truth, work, f"{name} MATH 13.18 style full-tail ratio")


COMPLEMENT_CONFIGS = [
    (7, Fraction(1, 5), 9, Fraction(3, 10)),
    (8, Fraction(1, 4), 11, Fraction(1, 5)),
    (6, Fraction(1, 3), 10, Fraction(1, 4)),
    (9, Fraction(1, 10), 7, Fraction(2, 5)),
    (5, Fraction(2, 5), 12, Fraction(1, 6)),
]


def ch13_complement(i: int, truth: bool) -> Item:
    name = CH13_NAMES[(i + 12) % 20]
    n_a, p_a, n_b, p_b = COMPLEMENT_CONFIGS[i % 5]
    q_a, q_b = (1 - p_a) ** n_a, (1 - p_b) ** n_b
    active_a, active_b = 1 - q_a, 1 - q_b
    mode = i % 4

    if mode == 0:
        actual = active_a * q_b + q_a * active_b
        description = "exactly one of the two systems records at least one success"
        formula = "(1-q_A)q_B+q_A(1-q_B)"
    elif mode == 1:
        actual = 1 - q_a * q_b
        description = "at least one success occurs somewhere across the two systems"
        formula = "1-q_Aq_B"
    elif mode == 2:
        actual = active_a / (1 - q_a * q_b)
        description = "system A has a success given that at least one system has a success"
        formula = "\\dfrac{1-q_A}{1-q_Aq_B}"
    else:
        actual = active_a * active_b
        description = "both systems record at least one success"
        formula = "(1-q_A)(1-q_B)"

    claim = actual if truth else Fraction(actual.numerator + 1, actual.denominator)
    statement = (
        f"{name} runs system A for ${n_a}$ independent attempts at success probability "
        f"${tex(p_a)}$ and system B for ${n_b}$ attempts at ${tex(p_b)}$; the two "
        f"systems are independent. Using zero-success complements before combining the "
        f"systems, the reliability report claims the probability that {description} is "
        f"${tex(claim)}$."
    )
    work = f"""Compute the two zero-success probabilities first:

$$q_A=P(X_A=0)=({tex(1-p_a)})^{{{n_a}}}
={tex(q_a)}$$

$$q_B=P(X_B=0)=({tex(1-p_b)})^{{{n_b}}}
={tex(q_b)}$$

Hence

$$P(X_A\\ge1)=1-q_A={tex(active_a)}$$

$$P(X_B\\ge1)=1-q_B={tex(active_b)}$$

Independence between systems now permits the event calculation:

$$P={formula}$$

$$P={tex(actual)}\\approx {dec(actual, 10)}$$

The reliability report quotes ${tex(claim)}$."""
    return Item(statement, truth, work, f"{name} two-system complement calculation")


def make_bank(
    *,
    topics: list[str],
    builders: list[Callable[[int, bool], Item]],
    prefix: str,
    first_id: int,
    subsection: str,
) -> list[dict]:
    tasks: list[dict] = []
    for i in range(20):
        topic_indices = [(i + j) % len(topics) for j in range(5)]
        ordered_topics = [topics[k] for k in topic_indices]
        items: list[Item] = []
        for k in topic_indices:
            raw = builders[k](i, truth_for(i, k))
            items.append(
                Item(
                    statement=(
                        f"{raw.statement} "
                        f"Case note: {CASE_NOTES[(i + 3 * k) % len(CASE_NOTES)]}"
                    ),
                    truth=raw.truth,
                    work=raw.work,
                    summary=raw.summary,
                )
            )
        task_id = first_id + i
        topic_map = "; ".join(
            f"{letter}: {item.summary}" for letter, item in zip("ABCDE", items)
        )
        tasks.append(
            {
                "id": f"math-{prefix}-{task_id}",
                "case_id": f"MATH {prefix}.{task_id}",
                "title": f"Exam-style tasks - {i + 1}",
                "subsection": subsection,
                "context": "Evaluate each statement. Mark it TRUE or FALSE.",
                "statements": [item.statement for item in items],
                "answer_key": [item.truth for item in items],
                "tactical_explanations": [
                    finish(letter, item) for letter, item in zip("ABCDE", items)
                ],
                "difficulty_level": "5/5",
                "sort_order": task_id,
                "solution_overview": (
                    f"Topics: {', '.join(ordered_topics)}. Hard-task map: {topic_map}."
                ),
                "placeholder": False,
            }
        )
    return tasks


def validate_bank(
    tasks: list[dict],
    *,
    topics: list[str],
    prefix: str,
    first_id: int,
    subsection: str,
) -> tuple[Counter[str], Counter[bool], Counter[str]]:
    assert len(tasks) == 20
    topic_hist: Counter[str] = Counter()
    truth_hist: Counter[bool] = Counter()
    letter_hist: Counter[str] = Counter()
    all_statements: list[str] = []

    for i, task in enumerate(tasks):
        task_id = first_id + i
        assert task["id"] == f"math-{prefix}-{task_id}"
        assert task["case_id"] == f"MATH {prefix}.{task_id}"
        assert task["subsection"] == subsection
        assert task["sort_order"] == task_id
        assert task["difficulty_level"] in {"4/5", "5/5"}
        assert task["placeholder"] is False
        assert len(task["statements"]) == 5
        assert len(task["answer_key"]) == 5
        assert len(task["tactical_explanations"]) == 5
        expected_topics = [topics[(i + j) % 5] for j in range(5)]
        assert task["solution_overview"].startswith(
            f"Topics: {', '.join(expected_topics)}."
        )

        for j, (statement, answer, explanation) in enumerate(
            zip(
                task["statements"],
                task["answer_key"],
                task["tactical_explanations"],
            )
        ):
            topic_hist[expected_topics[j]] += 1
            truth_hist[answer] += 1
            letter = "ABCDE"[j]
            letter_hist[f"{letter}-{'T' if answer else 'F'}"] += 1
            label = "True" if answer else "False"
            assert len(statement) >= 180, statement
            assert explanation.startswith(f"**{letter}.** → {label}")
            assert explanation.endswith(f"so the statement is {label}.")
            assert explanation.count("$$") >= 6
            all_statements.append(statement)

    assert len(set(all_statements)) == 100
    assert topic_hist == Counter({topic: 20 for topic in topics})
    assert truth_hist == Counter({True: 50, False: 50})
    assert letter_hist == Counter(
        {
            f"{letter}-{truth_code}": 10
            for letter in "ABCDE"
            for truth_code in ("T", "F")
        }
    )
    return topic_hist, truth_hist, letter_hist


def write_bank(path: Path, tasks: list[dict]) -> None:
    payload = json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n"
    assert "\u2014" not in payload
    assert "\u2013" not in payload
    assert "${" not in payload
    path.write_text(payload, encoding="utf-8")


def print_histogram(
    label: str,
    topics: list[str],
    hist: tuple[Counter[str], Counter[bool], Counter[str]],
) -> None:
    topic_hist, truth_hist, letter_hist = hist
    print(
        f"{label} topics: "
        + ", ".join(f"{topic}={topic_hist[topic]}" for topic in topics)
    )
    print(
        f"{label} truth: True={truth_hist[True]}, False={truth_hist[False]}"
    )
    print(
        f"{label} letters: "
        + ", ".join(
            f"{letter}:T={letter_hist[f'{letter}-T']}/F={letter_hist[f'{letter}-F']}"
            for letter in "ABCDE"
        )
    )


def main() -> None:
    specifications = [
        (
            "Ch5",
            CH5_TOPICS,
            [ch5_tickets, ch5_mixture, ch5_ages_digits, ch5_rates_work, ch5_systems],
            "5",
            61,
            "5.5",
            "math-ch5-exam.json",
        ),
        (
            "Ch8",
            CH8_TOPICS,
            [ch8_evaluate, ch8_scaling, ch8_solve, ch8_compose, ch8_growth],
            "8",
            98,
            "8.5",
            "math-ch8-exam.json",
        ),
        (
            "Ch12",
            CH12_TOPICS,
            [
                ch12_combinatorial,
                ch12_inclusion,
                ch12_conditional,
                ch12_moments,
                ch12_bayes,
            ],
            "12",
            199,
            "12.6",
            "math-ch12-exam.json",
        ),
        (
            "Ch13",
            CH13_TOPICS,
            [ch13_exact, ch13_tail, ch13_moments, ch13_compare, ch13_complement],
            "13",
            56,
            "13.5",
            "math-ch13-exam.json",
        ),
    ]

    for label, topics, builders, prefix, first_id, subsection, filename in specifications:
        tasks = make_bank(
            topics=topics,
            builders=builders,
            prefix=prefix,
            first_id=first_id,
            subsection=subsection,
        )
        histogram = validate_bank(
            tasks,
            topics=topics,
            prefix=prefix,
            first_id=first_id,
            subsection=subsection,
        )
        write_bank(OUT_DIR / filename, tasks)
        print_histogram(label, topics, histogram)


if __name__ == "__main__":
    main()
