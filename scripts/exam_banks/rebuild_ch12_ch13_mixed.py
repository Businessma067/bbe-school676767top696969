#!/usr/bin/env python3
"""Rebuild the chapter 12 and 13 exam banks with round-robin topic mixing."""

from __future__ import annotations

import json
import math
from collections import Counter
from dataclasses import dataclass
from fractions import Fraction
from pathlib import Path


OUT_DIR = Path("/workspace/src/data")
CH12_TOPICS = ["12.1", "12.2", "12.3", "12.4", "12.5"]
CH13_TOPICS = ["exact", "tail", "moments", "compare", "complement"]

CH12_MAP = {
    "12.1": "combinatorial probability",
    "12.2": "inclusion-exclusion",
    "12.3": "conditional probability or independence",
    "12.4": "expected value, variance, or standard deviation",
    "12.5": "Bayes inference",
}
CH13_MAP = {
    "exact": "an exact binomial mass",
    "tail": "a multi-term binomial tail",
    "moments": "binomial moments",
    "compare": "a comparison of two binomial models",
    "complement": "an at-least-one complement comparison",
}


@dataclass(frozen=True)
class Item:
    statement: str
    truth: bool
    work: str


def tex(value: Fraction | int) -> str:
    value = Fraction(value)
    if value.denominator == 1:
        return str(value.numerator)
    return f"\\dfrac{{{value.numerator}}}{{{value.denominator}}}"


def decimal(value: Fraction | float, places: int = 6) -> str:
    return f"{float(value):.{places}f}".rstrip("0").rstrip(".")


def wrong_fraction(value: Fraction) -> Fraction:
    """Return a nearby but unequal fraction for a false equality claim."""
    return Fraction(value.numerator + 1, value.denominator)


def truth_for(task_index: int, topic_index: int) -> bool:
    """Give every topic ten true and ten false items without monochrome tasks."""
    return (task_index + topic_index) % 2 == 0


def finish_explanation(letter: str, item: Item) -> str:
    label = "True" if item.truth else "False"
    return (
        f"**{letter}.** → {label}\n\n"
        f"{item.work.strip()}\n\n"
        f"The recomputed result {'agrees' if item.truth else 'does not agree'} "
        f"with the claim, so the statement is {label}."
    )


def ch12_combinatorial(i: int, truth: bool) -> Item:
    mode = i % 4

    if mode == 0:
        red = 7 + (i % 3)
        blue = 8 + ((2 * i) % 4)
        green = 5 + ((3 * i) % 3)
        draw = 5
        favorable = 0
        terms: list[str] = []
        for g in range(1, draw - 1):
            b = draw - 2 - g
            if g <= green and b <= blue:
                count = math.comb(red, 2) * math.comb(green, g) * math.comb(blue, b)
                favorable += count
                terms.append(
                    f"\\binom{{{red}}}{{2}}\\binom{{{green}}}{{{g}}}"
                    f"\\binom{{{blue}}}{{{b}}}"
                )
        total = math.comb(red + blue + green, draw)
        actual = Fraction(favorable, total)
        claim = actual if truth else wrong_fraction(actual)
        statement = (
            f"A festival urn contains ${red}$ red, ${blue}$ blue, and ${green}$ green "
            f"tokens. Five tokens are selected simultaneously and uniformly without "
            f"replacement. The probability of selecting exactly two red tokens and at "
            f"least one green token equals ${tex(claim)}$."
        )
        work = f"""The denominator counts every unordered five-token selection:

$$N=\\binom{{{red + blue + green}}}{{5}}={total}$$

After fixing two red tokens, sum over the possible positive numbers of green tokens:

$$F={'+'.join(terms)}={favorable}$$

Therefore,

$$P=\\dfrac{{F}}{{N}}=\\dfrac{{{favorable}}}{{{total}}}={tex(actual)}\\approx {decimal(actual)}$$

The claim uses ${tex(claim)}$, so the exact fractions must be compared rather than treating the color counts as independent draws."""
        return Item(statement, truth, work)

    if mode == 1:
        women = 7 + ((2 * i) % 3)
        men = 8 + (i % 3)
        size = 5
        chosen_women = 2 + (i % 2)
        chosen_men = size - chosen_women
        total = math.comb(women + men, size)
        all_gender = math.comb(men, chosen_men)
        neither_named = math.comb(men - 2, chosen_men)
        favorable = math.comb(women, chosen_women) * (all_gender - neither_named)
        actual = Fraction(favorable, total)
        claim = actual if truth else wrong_fraction(actual)
        statement = (
            f"A research council has ${women}$ women and ${men}$ men, including two "
            f"designated senior men. A five-person committee is chosen uniformly. The "
            f"probability that it contains exactly ${chosen_women}$ women and at least "
            f"one of the two designated seniors is ${tex(claim)}$."
        )
        work = f"""There are

$$N=\\binom{{{women + men}}}{{5}}={total}$$

possible committees. Choose the ${chosen_women}$ women, then subtract the selections of ${chosen_men}$ men that omit both designated seniors:

$$F=\\binom{{{women}}}{{{chosen_women}}}
\\left[\\binom{{{men}}}{{{chosen_men}}}-\\binom{{{men - 2}}}{{{chosen_men}}}\\right]$$

$$F=\\binom{{{women}}}{{{chosen_women}}}({all_gender}-{neither_named})={favorable}$$

Thus,

$$P=\\dfrac{{{favorable}}}{{{total}}}={tex(actual)}\\approx {decimal(actual)}$$

The subtraction enforces the named-member condition after the gender condition has been counted."""
        return Item(statement, truth, work)

    if mode == 2:
        hand = 5 + (i % 2)
        no_heart_ace = (
            math.comb(3, 2)
            * math.comb(12, 2)
            * math.comb(36, hand - 4)
        )
        with_heart_ace = (
            math.comb(3, 1)
            * math.comb(12, 1)
            * math.comb(36, hand - 3)
        )
        favorable = no_heart_ace + with_heart_ace
        total = math.comb(52, hand)
        actual = Fraction(favorable, total)
        claim = actual if truth else wrong_fraction(actual)
        statement = (
            f"A uniformly random ${hand}$-card hand is dealt from a standard deck. "
            f"Because the ace of hearts belongs to both named groups, the probability "
            f"that the hand contains exactly two aces and exactly two hearts is "
            f"${tex(claim)}$."
        )
        work = f"""Split according to whether the ace of hearts is absent or present. If it is absent, choose two non-heart aces, two non-ace hearts, and the remaining ordinary cards:

$$F_0=\\binom{{3}}{{2}}\\binom{{12}}{{2}}\\binom{{36}}{{{hand - 4}}}={no_heart_ace}$$

If it is present, choose one further ace, one further heart, and ${hand - 3}$ ordinary cards:

$$F_1=\\binom{{3}}{{1}}\\binom{{12}}{{1}}\\binom{{36}}{{{hand - 3}}}={with_heart_ace}$$

The cases are disjoint, so

$$P=\\dfrac{{F_0+F_1}}{{\\binom{{52}}{{{hand}}}}}
=\\dfrac{{{favorable}}}{{{total}}}={tex(actual)}\\approx {decimal(actual)}$$

This split prevents the ace of hearts from being double-counted."""
        return Item(statement, truth, work)

    people = 7 + (i % 4)
    total = math.factorial(people)
    adjacent = 2 * math.factorial(people - 1)
    bad_ends = 4 * math.factorial(people - 2)
    favorable = adjacent - bad_ends
    actual = Fraction(favorable, total)
    claim = actual if truth else wrong_fraction(actual)
    statement = (
        f"At an awards dinner, ${people}$ distinct guests are seated uniformly in a "
        f"row. Ada and Ben must be adjacent, while Cara must not occupy either end "
        f"seat. The probability that both restrictions hold is ${tex(claim)}$."
    )
    work = f"""Treat Ada and Ben as one block. Allowing Cara anywhere gives

$$N_{{AB}}=2({people - 1})!={adjacent}$$

If Cara is at an end, choose her end, order the Ada-Ben block, and arrange the remaining entities:

$$N_{{\\text{{end}}}}=2\\cdot2({people - 2})!={bad_ends}$$

Hence the favorable and total arrangement counts are

$$F={adjacent}-{bad_ends}={favorable},\\qquad N={people}!={total}$$

Therefore,

$$P=\\dfrac{{{favorable}}}{{{total}}}={tex(actual)}\\approx {decimal(actual)}$$"""
    return Item(statement, truth, work)


def ch12_inclusion(i: int, truth: bool) -> Item:
    only_a = 24 + 2 * (i % 5)
    only_b = 30 + 2 * (i % 4)
    only_c = 20 + 3 * (i % 3)
    only_ab = 8 + (i % 4)
    only_ac = 6 + (i % 3)
    only_bc = 7 + (i % 5)
    triple = 4 + (i % 3)
    none = 15 + 2 * (i % 4)
    total = (
        only_a
        + only_b
        + only_c
        + only_ab
        + only_ac
        + only_bc
        + triple
        + none
    )
    a = only_a + only_ab + only_ac + triple
    b = only_b + only_ab + only_bc + triple
    c = only_c + only_ac + only_bc + triple
    ab = only_ab + triple
    ac = only_ac + triple
    bc = only_bc + triple
    sum_single = a + b + c
    sum_pair = ab + ac + bc
    union = sum_single - sum_pair + triple
    exactly_one = sum_single - 2 * sum_pair + 3 * triple
    exactly_two = sum_pair - 3 * triple
    at_least_two = exactly_two + triple

    mode = i % 4
    names = [
        ("exactly one program", exactly_one),
        ("none of the three programs", total - union),
        ("exactly two programs", exactly_two),
        ("at least two programs", at_least_two),
    ]
    label, actual_count = names[mode]
    claim_count = actual_count if truth else actual_count + 1
    statement = (
        f"Among ${total}$ trainees, ${a}$ use platform A, ${b}$ use platform B, and "
        f"${c}$ use platform C. The pairwise intersection counts, each including "
        f"triple users, are ${ab}$ for A and B, ${ac}$ for A and C, and ${bc}$ for "
        f"B and C; ${triple}$ use all three. The report says that ${claim_count}$ "
        f"trainees use {label}."
    )
    work = f"""First collect the single and pair totals:

$$S_1={a}+{b}+{c}={sum_single},\\qquad
S_2={ab}+{ac}+{bc}={sum_pair}$$

Inclusion-exclusion gives the number using at least one program:

$$N(A\\cup B\\cup C)=S_1-S_2+{triple}
={sum_single}-{sum_pair}+{triple}={union}$$

The related disjoint-region counts are

$$N(\\text{{exactly one}})=S_1-2S_2+3({triple})={exactly_one}$$

$$N(\\text{{exactly two}})=S_2-3({triple})={exactly_two}$$

$$N(\\text{{none}})={total}-{union}={total - union},\\qquad
N(\\text{{at least two}})={exactly_two}+{triple}={at_least_two}$$

The requested category therefore contains ${actual_count}$ trainees, compared with the claimed ${claim_count}$."""
    return Item(statement, truth, work)


def ch12_conditional(i: int, truth: bool) -> Item:
    premium_only = 31 + 2 * (i % 5)
    late_only = 24 + 3 * (i % 4)
    both = 13 + (i % 6)
    neither = 28 + 2 * (i % 3)
    total = premium_only + late_only + both + neither
    premium = premium_only + both
    late = late_only + both
    union = total - neither
    exactly_one = premium_only + late_only
    mode = i % 4

    if mode == 0:
        actual = Fraction(both, premium)
        claim = actual if truth else wrong_fraction(actual)
        statement = (
            f"A courier audit classifies ${total}$ deliveries: ${premium}$ used the "
            f"premium service, ${late}$ arrived late, and ${both}$ were both premium "
            f"and late. If one premium delivery is selected uniformly, the conditional "
            f"probability that it arrived late is ${tex(claim)}$."
        )
        work = f"""Conditioning on premium service reduces the sample space from ${total}$ deliveries to ${premium}$:

$$P(\\text{{late}}\\mid\\text{{premium}})
=\\dfrac{{N(\\text{{late}}\\cap\\text{{premium}})}}{{N(\\text{{premium}})}}$$

Substitution gives

$$P(\\text{{late}}\\mid\\text{{premium}})
=\\dfrac{{{both}}}{{{premium}}}={tex(actual)}\\approx {decimal(actual)}$$

The denominator is the conditioning group, not the full audit."""
        return Item(statement, truth, work)

    if mode == 1:
        independent = both * total == premium * late
        claimed_independent = independent if truth else not independent
        assert (claimed_independent == independent) is truth
        relation = "independent" if claimed_independent else "not independent"
        statement = (
            f"A streaming survey of ${total}$ households finds ${premium}$ premium "
            f"subscribers, ${late}$ households using downloads, and ${both}$ with both "
            f"features. For a uniformly selected household, the events 'premium' and "
            f"'uses downloads' are {relation}."
        )
        work = f"""Independence requires equality between the observed intersection and the product of the marginals:

$$P(P\\cap D)=\\dfrac{{{both}}}{{{total}}}={decimal(Fraction(both, total))}$$

$$P(P)P(D)=\\dfrac{{{premium}}}{{{total}}}
\\cdot\\dfrac{{{late}}}{{{total}}}
={decimal(Fraction(premium * late, total * total))}$$

Equivalently, compare integer cross-products:

$$({both})({total})={both * total},\\qquad
({premium})({late})={premium * late}$$

The values are {'equal' if independent else 'unequal'}, so the events are {'independent' if independent else 'not independent'}; the statement claims they are {relation}."""
        return Item(statement, truth, work)

    if mode == 2:
        actual = Fraction(exactly_one, union)
        claim = actual if truth else wrong_fraction(actual)
        statement = (
            f"An insurance file contains ${total}$ policies. Of these, ${premium}$ have "
            f"collision cover, ${late}$ have theft cover, and ${both}$ have both. Given "
            f"that a uniformly selected policy has at least one of the two covers, the "
            f"probability that it has exactly one cover is ${tex(claim)}$."
        )
        work = f"""The inclusive union and the exactly-one count are

$$N(C\\cup T)={premium}+{late}-{both}={union}$$

$$N(\\text{{exactly one}})
=({premium}-{both})+({late}-{both})={exactly_one}$$

After conditioning on at least one cover,

$$P(\\text{{exactly one}}\\mid C\\cup T)
=\\dfrac{{{exactly_one}}}{{{union}}}={tex(actual)}
\\approx {decimal(actual)}$$

Both the conditioning denominator and the overlap subtraction are needed."""
        return Item(statement, truth, work)

    actual = Fraction(late - 1, total - 1)
    claim = actual if truth else wrong_fraction(actual)
    statement = (
        f"A warehouse has ${total}$ orders, of which ${late}$ require a signature; "
        f"${both}$ of those are also international. An international signature order "
        f"is selected first and removed. If a second order is then selected uniformly "
        f"from the remainder, the probability that it requires a signature is "
        f"${tex(claim)}$."
    )
    work = f"""The first selected order is known to be one of the signature orders. Removing it changes both the favorable count and total count:

$$N_{{\\text{{signature, remaining}}}}={late}-1={late - 1}$$

$$N_{{\\text{{all, remaining}}}}={total}-1={total - 1}$$

Therefore,

$$P(\\text{{second requires signature}}
\\mid\\text{{first was an international signature order}})
=\\dfrac{{{late - 1}}}{{{total - 1}}}
={tex(actual)}\\approx {decimal(actual)}$$

Keeping the original denominator would incorrectly treat sampling without replacement as independent."""
    return Item(statement, truth, work)


def ch12_moments(i: int, truth: bool) -> Item:
    probability_sets = [
        (Fraction(1, 2), Fraction(1, 3), Fraction(1, 6)),
        (Fraction(2, 5), Fraction(2, 5), Fraction(1, 5)),
        (Fraction(1, 4), Fraction(1, 2), Fraction(1, 4)),
        (Fraction(3, 8), Fraction(3, 8), Fraction(1, 4)),
    ]
    probs = probability_sets[i % len(probability_sets)]
    gross = (0, 7 + (i % 4), 16 + 2 * (i % 5))
    cost = 4 + (i % 3)
    net = tuple(x - cost for x in gross)
    mean = sum((p * x for p, x in zip(probs, net)), Fraction())
    second = sum((p * x * x for p, x in zip(probs, net)), Fraction())
    variance = second - mean * mean
    sd = math.sqrt(float(variance))
    prob_text = ", ".join(tex(p) for p in probs)
    base_work = f"""The net outcomes after the ${cost}$ euro ticket cost are ${net[0]}$, ${net[1]}$, and ${net[2]}$. Their probabilities are ${prob_text}$.

$$E(X)=({net[0]}){tex(probs[0])}+({net[1]}){tex(probs[1])}
+({net[2]}){tex(probs[2])}={tex(mean)}$$

$$E(X^2)=({net[0]})^2{tex(probs[0])}+({net[1]})^2{tex(probs[1])}
+({net[2]})^2{tex(probs[2])}={tex(second)}$$

$$\\operatorname{{Var}}(X)=E(X^2)-[E(X)]^2
={tex(second)}-\\left({tex(mean)}\\right)^2={tex(variance)}$$

$$\\operatorname{{SD}}(X)=\\sqrt{{{tex(variance)}}}\\approx {decimal(sd, 4)}$$"""
    mode = i % 4

    if mode == 0:
        claim = mean if truth else mean + 1
        statement = (
            f"A charity ticket costs ${cost}$ euros. Its gross prizes are ${gross[0]}$, "
            f"${gross[1]}$, and ${gross[2]}$ euros with respective probabilities "
            f"${prob_text}$. The expected net return to the buyer is ${tex(claim)}$ euros."
        )
        work = base_work + f"\n\nThe claimed mean is ${tex(claim)}$ euros."
        return Item(statement, truth, work)

    if mode == 1:
        claim = variance if truth else wrong_fraction(variance)
        statement = (
            f"A raffle ticket costs ${cost}$ euros and pays gross amounts ${gross[0]}$, "
            f"${gross[1]}$, and ${gross[2]}$ euros with probabilities ${prob_text}$. "
            f"The variance of the buyer's net return is ${tex(claim)}$ square euros."
        )
        work = base_work + f"\n\nThe claimed variance is ${tex(claim)}$, and subtracting a fixed ticket cost does not itself change variance."
        return Item(statement, truth, work)

    if mode == 2:
        threshold = Fraction(math.ceil(sd * 10) + (1 if truth else -1), 10)
        assert (sd < float(threshold)) is truth
        relation = "less than"
        statement = (
            f"A game costs ${cost}$ euros and has gross payouts ${gross[0]}$, "
            f"${gross[1]}$, and ${gross[2]}$ euros with probabilities ${prob_text}$. "
            f"The standard deviation of its net return is {relation} ${tex(threshold)}$ euros."
        )
        work = base_work + f"\n\nComparing ${decimal(sd, 4)}$ with the cutoff ${tex(threshold)}={decimal(threshold)}$ settles the strict inequality."
        return Item(statement, truth, work)

    two_mean = 2 * mean
    two_variance = 2 * variance
    claim_variance = two_variance if truth else wrong_fraction(two_variance)
    statement = (
        f"A school game costs ${cost}$ euros per play and has gross payouts "
        f"${gross[0]}$, ${gross[1]}$, and ${gross[2]}$ euros with probabilities "
        f"${prob_text}$. For two independent plays, the total net return has mean "
        f"${tex(two_mean)}$ euros and variance ${tex(claim_variance)}$ square euros."
    )
    work = base_work + f"""\n\nFor independent copies $X_1$ and $X_2$, means and variances add:

$$E(X_1+X_2)=2E(X)=2\\left({tex(mean)}\\right)={tex(two_mean)}$$

$$\\operatorname{{Var}}(X_1+X_2)
=2\\operatorname{{Var}}(X)=2\\left({tex(variance)}\\right)={tex(two_variance)}$$

The statement's variance is ${tex(claim_variance)}$."""
    return Item(statement, truth, work)


def ch12_bayes(i: int, truth: bool) -> Item:
    prior_sets = [
        (Fraction(1, 2), Fraction(3, 10), Fraction(1, 5)),
        (Fraction(2, 5), Fraction(7, 20), Fraction(1, 4)),
        (Fraction(3, 5), Fraction(1, 4), Fraction(3, 20)),
        (Fraction(9, 20), Fraction(2, 5), Fraction(3, 20)),
    ]
    rate_sets = [
        (Fraction(1, 50), Fraction(1, 20), Fraction(2, 25)),
        (Fraction(3, 100), Fraction(1, 25), Fraction(1, 10)),
        (Fraction(1, 40), Fraction(3, 50), Fraction(3, 25)),
        (Fraction(1, 100), Fraction(7, 100), Fraction(9, 100)),
        (Fraction(1, 20), Fraction(2, 25), Fraction(3, 20)),
    ]
    priors = prior_sets[i % len(prior_sets)]
    event_rates = rate_sets[i % len(rate_sets)]
    source = i % 3
    use_success = i % 4 == 3
    rates = tuple(1 - r for r in event_rates) if use_success else event_rates
    event_name = "passes final inspection" if use_success else "fails final inspection"
    total_event = sum((p * r for p, r in zip(priors, rates)), Fraction())
    joint = priors[source] * rates[source]
    posterior = joint / total_event
    claim = posterior if truth else wrong_fraction(posterior)
    source_letter = "ABC"[source]
    statement = (
        f"A distributor receives components from plants A, B, and C in proportions "
        f"${tex(priors[0])}$, ${tex(priors[1])}$, and ${tex(priors[2])}$. Their "
        f"respective probabilities that a component {event_name} are "
        f"${tex(rates[0])}$, ${tex(rates[1])}$, and ${tex(rates[2])}$. Given that a "
        f"random component {event_name}, the probability it came from plant "
        f"{source_letter} is ${tex(claim)}$."
    )
    contributions = [priors[k] * rates[k] for k in range(3)]
    work = f"""Multiply each plant's prior share by its conditional {event_name} rate:

$$w_A={tex(priors[0])}\\cdot {tex(rates[0])}={tex(contributions[0])}$$

$$w_B={tex(priors[1])}\\cdot {tex(rates[1])}={tex(contributions[1])},\\qquad
w_C={tex(priors[2])}\\cdot {tex(rates[2])}={tex(contributions[2])}$$

The law of total probability supplies the evidence:

$$P(E)=w_A+w_B+w_C
={tex(contributions[0])}+{tex(contributions[1])}+{tex(contributions[2])}
={tex(total_event)}$$

Bayes' theorem then gives

$$P({source_letter}\\mid E)
=\\dfrac{{w_{source_letter}}}{{P(E)}}
=\\dfrac{{{tex(joint)}}}{{{tex(total_event)}}}
={tex(posterior)}\\approx {decimal(posterior)}$$

The posterior must use all three weighted routes to the observed inspection result; the statement claims ${tex(claim)}$."""
    return Item(statement, truth, work)


def binomial_pmf(n: int, k: int, p: Fraction) -> Fraction:
    return Fraction(math.comb(n, k)) * p**k * (1 - p) ** (n - k)


def ch13_exact(i: int, truth: bool) -> Item:
    probabilities = [
        Fraction(1, 5),
        Fraction(3, 10),
        Fraction(2, 5),
        Fraction(3, 5),
        Fraction(7, 10),
    ]
    p = probabilities[i % len(probabilities)]
    n = 9 + (i % 5)
    k = 2 + ((2 * i + 1) % (n - 3))
    actual = binomial_pmf(n, k, p)
    claim = actual if truth else wrong_fraction(actual)
    statement = (
        f"A laboratory runs ${n}$ independent assays, each producing a positive result "
        f"with probability ${tex(p)}$. If $X$ is the number of positives, the exact "
        f"probability of observing exactly ${k}$ positives is ${tex(claim)}$."
    )
    work = f"""The count is binomial because the ${n}$ trials are independent and have the same success probability:

$$X\\sim\\operatorname{{Bin}}\\left({n},{tex(p)}\\right)$$

For one exact count, use the binomial PMF:

$$P(X={k})=\\binom{{{n}}}{{{k}}}
\\left({tex(p)}\\right)^{{{k}}}
\\left({tex(1-p)}\\right)^{{{n-k}}}$$

$$P(X={k})={math.comb(n, k)}
\\left({tex(p**k)}\\right)
\\left({tex((1-p)**(n-k))}\\right)
={tex(actual)}\\approx {decimal(actual, 8)}$$

The coefficient counts which ${k}$ assays are positive; the statement claims ${tex(claim)}$."""
    return Item(statement, truth, work)


def ch13_tail(i: int, truth: bool) -> Item:
    probabilities = [
        Fraction(1, 4),
        Fraction(1, 3),
        Fraction(2, 5),
        Fraction(1, 2),
        Fraction(3, 5),
    ]
    p = probabilities[(i + 1) % len(probabilities)]
    n = 7 + (i % 5)
    if i % 2 == 0:
        cutoff = 2 + (i % 3)
        values = list(range(0, cutoff + 1))
        event_tex = f"X\\le {cutoff}"
        event_words = f"at most ${cutoff}$"
    else:
        cutoff = 3 + (i % 3)
        values = list(range(cutoff, n + 1))
        event_tex = f"X\\ge {cutoff}"
        event_words = f"at least ${cutoff}$"
    masses = [binomial_pmf(n, k, p) for k in values]
    actual = sum(masses, Fraction())
    claim = actual if truth else wrong_fraction(actual)
    statement = (
        f"A quality team checks ${n}$ independent devices, each failing with "
        f"probability ${tex(p)}$. If $X$ counts failures, the probability of finding "
        f"{event_words} failures is ${tex(claim)}$."
    )
    lines = "\n\n".join(
        f"$$P(X={k})=\\binom{{{n}}}{{{k}}}"
        f"\\left({tex(p)}\\right)^{{{k}}}"
        f"\\left({tex(1-p)}\\right)^{{{n-k}}}"
        f"={tex(mass)}$$"
        for k, mass in zip(values, masses)
    )
    sum_tex = "+".join(tex(mass) for mass in masses)
    work = f"""The phrase {event_words} names several mutually exclusive counts, so one PMF term is not enough:

$$P({event_tex})=\\sum_{{x={values[0]}}}^{{{values[-1]}}}
\\binom{{{n}}}{{x}}\\left({tex(p)}\\right)^x
\\left({tex(1-p)}\\right)^{{{n}-x}}$$

Compute every included mass:

{lines}

Add the disjoint terms:

$$P({event_tex})={sum_tex}
={tex(actual)}\\approx {decimal(actual, 8)}$$

The full tail is compared with the claimed ${tex(claim)}$."""
    return Item(statement, truth, work)


def ch13_moments(i: int, truth: bool) -> Item:
    probabilities = [
        Fraction(1, 10),
        Fraction(1, 5),
        Fraction(3, 10),
        Fraction(2, 5),
        Fraction(3, 5),
        Fraction(7, 10),
    ]
    p = probabilities[i % len(probabilities)]
    n = 12 + (i % 9)
    mean = n * p
    variance = n * p * (1 - p)
    sd = math.sqrt(float(variance))
    mode = i % 4
    base_work = f"""For a binomial count, the mean and variance come from summing ${n}$ independent Bernoulli trials:

$$E(X)=np={n}\\left({tex(p)}\\right)={tex(mean)}$$

$$\\operatorname{{Var}}(X)=np(1-p)
={n}\\left({tex(p)}\\right)\\left({tex(1-p)}\\right)
={tex(variance)}$$

$$\\operatorname{{SD}}(X)=\\sqrt{{np(1-p)}}
=\\sqrt{{{tex(variance)}}}\\approx {decimal(sd, 5)}$$"""

    if mode == 0:
        claim_variance = variance if truth else wrong_fraction(variance)
        statement = (
            f"A support desk independently resolves each of ${n}$ tickets on first "
            f"contact with probability ${tex(p)}$. Its daily resolution count has mean "
            f"${tex(mean)}$ and variance ${tex(claim_variance)}$."
        )
        work = base_work + f"\n\nThe statement's two values are ${tex(mean)}$ and ${tex(claim_variance)}$."
        return Item(statement, truth, work)

    if mode == 1:
        threshold = Fraction(math.ceil(sd * 10) + (1 if truth else -1), 10)
        assert (sd < float(threshold)) is truth
        statement = (
            f"A bottling line independently rejects each of ${n}$ bottles with "
            f"probability ${tex(p)}$. The standard deviation of the rejection count is "
            f"less than ${tex(threshold)}$ bottles."
        )
        work = base_work + f"\n\nThe computed SD ${decimal(sd, 5)}$ is compared with ${tex(threshold)}={decimal(threshold)}$."
        return Item(statement, truth, work)

    if mode == 2:
        correct_ratio = 1 - p
        claim_ratio = correct_ratio if truth else p
        if not truth and claim_ratio == correct_ratio:
            claim_ratio = wrong_fraction(correct_ratio)
        assert (claim_ratio == correct_ratio) is truth
        statement = (
            f"A seed company tests ${n}$ independent seeds, each germinating with "
            f"probability ${tex(p)}$. For the germination count, the ratio of variance "
            f"to mean is ${tex(claim_ratio)}$."
        )
        work = base_work + f"""\n\nNow divide the two moments:

$$\\dfrac{{\\operatorname{{Var}}(X)}}{{E(X)}}
=\\dfrac{{np(1-p)}}{{np}}=1-p={tex(correct_ratio)}$$

The ratio in the statement is ${tex(claim_ratio)}$."""
        return Item(statement, truth, work)

    doubled_variance = 2 * variance
    doubled_sd = math.sqrt(float(doubled_variance))
    claimed_factor = "\\sqrt{2}" if truth else "2"
    statement = (
        f"A scanner flags each item independently with probability ${tex(p)}$. One "
        f"shift scans ${n}$ items and another scans ${2*n}$ items. The second shift's "
        f"flag-count standard deviation is exactly ${claimed_factor}$ times the first's."
    )
    work = base_work + f"""\n\nWith the same $p$ and twice as many trials,

$$\\operatorname{{Var}}(Y)=({2*n})p(1-p)
=2\\operatorname{{Var}}(X)={tex(doubled_variance)}$$

Taking positive square roots gives

$$\\dfrac{{\\operatorname{{SD}}(Y)}}{{\\operatorname{{SD}}(X)}}
=\\sqrt{{\\dfrac{{2\\operatorname{{Var}}(X)}}{{\\operatorname{{Var}}(X)}}}}
=\\sqrt{{2}}$$

Numerically, the two SDs are ${decimal(sd, 5)}$ and ${decimal(doubled_sd, 5)}$; the statement claims a factor of ${claimed_factor}$."""
    return Item(statement, truth, work)


def ch13_compare(i: int, truth: bool) -> Item:
    p_pairs = [
        (Fraction(1, 4), Fraction(2, 5)),
        (Fraction(3, 10), Fraction(3, 5)),
        (Fraction(2, 5), Fraction(7, 10)),
        (Fraction(3, 5), Fraction(4, 5)),
        (Fraction(1, 5), Fraction(1, 2)),
    ]
    p_a, p_b = p_pairs[i % len(p_pairs)]
    n_a = 8 + (i % 5)
    n_b = n_a + (1 if i % 3 == 0 else 0)
    k = 2 + ((i + 1) % (min(n_a, n_b) - 3))
    prob_a = binomial_pmf(n_a, k, p_a)
    prob_b = binomial_pmf(n_b, k, p_b)
    assert prob_a != prob_b
    actual_relation = "greater than" if prob_a > prob_b else "less than"
    opposite_relation = "less than" if actual_relation == "greater than" else "greater than"
    claimed_relation = actual_relation if truth else opposite_relation
    assert (claimed_relation == actual_relation) is truth
    ratio = prob_a / prob_b
    statement = (
        f"Production line A independently passes each of ${n_a}$ items with probability "
        f"${tex(p_a)}$, while line B independently passes each of ${n_b}$ items with "
        f"probability ${tex(p_b)}$. The probability that A records exactly ${k}$ passes "
        f"is {claimed_relation} the probability that B records exactly ${k}$ passes."
    )
    work = f"""Model the two pass counts separately:

$$X_A\\sim\\operatorname{{Bin}}\\left({n_a},{tex(p_a)}\\right),\\qquad
X_B\\sim\\operatorname{{Bin}}\\left({n_b},{tex(p_b)}\\right)$$

For line A,

$$P(X_A={k})=\\binom{{{n_a}}}{{{k}}}
\\left({tex(p_a)}\\right)^{{{k}}}
\\left({tex(1-p_a)}\\right)^{{{n_a-k}}}
={tex(prob_a)}\\approx {decimal(prob_a, 8)}$$

For line B,

$$P(X_B={k})=\\binom{{{n_b}}}{{{k}}}
\\left({tex(p_b)}\\right)^{{{k}}}
\\left({tex(1-p_b)}\\right)^{{{n_b-k}}}
={tex(prob_b)}\\approx {decimal(prob_b, 8)}$$

The probability ratio in the statement's order is

$$\\dfrac{{P(X_A={k})}}{{P(X_B={k})}}
={tex(ratio)}\\approx {decimal(ratio, 5)}$$

Thus A's exact-count probability is {actual_relation} B's, while the statement says {claimed_relation}."""
    return Item(statement, truth, work)


def ch13_complement(i: int, truth: bool) -> Item:
    probabilities = [
        Fraction(1, 10),
        Fraction(1, 5),
        Fraction(1, 4),
        Fraction(1, 3),
        Fraction(2, 5),
    ]
    p_a = probabilities[i % len(probabilities)]
    n_a = 4 + (i % 6)
    if i % 2 == 0:
        p_b = p_a
        n_b = n_a + 3
    else:
        p_b = probabilities[(i + 2) % len(probabilities)]
        n_b = n_a + 1
    at_least_a = 1 - (1 - p_a) ** n_a
    at_least_b = 1 - (1 - p_b) ** n_b
    if at_least_a == at_least_b:
        n_b += 1
        at_least_b = 1 - (1 - p_b) ** n_b
    actual_relation = "greater than" if at_least_a > at_least_b else "less than"
    opposite_relation = "less than" if actual_relation == "greater than" else "greater than"
    claimed_relation = actual_relation if truth else opposite_relation
    assert (claimed_relation == actual_relation) is truth
    statement = (
        f"Backup system A makes ${n_a}$ independent activation attempts with success "
        f"probability ${tex(p_a)}$ per attempt. System B makes ${n_b}$ independent "
        f"attempts with success probability ${tex(p_b)}$ per attempt. The probability "
        f"of at least one activation for A is {claimed_relation} that for B."
    )
    work = f"""For each system, 'at least one' is the complement of zero successes:

$$P_A(X\\ge1)=1-P_A(X=0)
=1-\\left({tex(1-p_a)}\\right)^{{{n_a}}}
={tex(at_least_a)}\\approx {decimal(at_least_a, 8)}$$

$$P_B(Y\\ge1)=1-P_B(Y=0)
=1-\\left({tex(1-p_b)}\\right)^{{{n_b}}}
={tex(at_least_b)}\\approx {decimal(at_least_b, 8)}$$

Their difference is

$$P_A(X\\ge1)-P_B(Y\\ge1)
={tex(at_least_a-at_least_b)}\\approx {decimal(at_least_a-at_least_b, 8)}$$

The sign shows that A's at-least-one probability is {actual_relation} B's; comparing only $n$ or only $p$ would miss their combined effect."""
    return Item(statement, truth, work)


def overview(topics: list[str], mapping: dict[str, str]) -> str:
    descriptions = [f"{letter} tests {mapping[topic]}" for letter, topic in zip("ABCDE", topics)]
    return f"Topics: {', '.join(topics)}. Map: " + "; ".join(descriptions) + "."


def make_bank(
    *,
    topics: list[str],
    builders: list,
    prefix: str,
    first_id: int,
    subsection: str,
    mapping: dict[str, str],
) -> list[dict]:
    tasks: list[dict] = []
    for i in range(20):
        ordered_topic_indices = [(i + j) % len(topics) for j in range(5)]
        ordered_topics = [topics[k] for k in ordered_topic_indices]
        items = [
            builders[k](i, truth_for(i, k))
            for k in ordered_topic_indices
        ]
        task_id = first_id + i
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
                    finish_explanation(letter, item)
                    for letter, item in zip("ABCDE", items)
                ],
                "difficulty_level": "5/5",
                "sort_order": task_id,
                "solution_overview": overview(ordered_topics, mapping),
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
    topic_histogram: Counter[str] = Counter()
    truth_histogram: Counter[bool] = Counter()
    letter_histogram: Counter[str] = Counter()

    for i, task in enumerate(tasks):
        task_id = first_id + i
        assert task["id"] == f"math-{prefix}-{task_id}"
        assert task["case_id"] == f"MATH {prefix}.{task_id}"
        assert task["subsection"] == subsection
        assert task["sort_order"] == task_id
        assert task["context"] == "Evaluate each statement. Mark it TRUE or FALSE."
        assert len(task["statements"]) == 5
        assert len(task["answer_key"]) == 5
        assert len(task["tactical_explanations"]) == 5
        assert len(set(task["statements"])) == 5
        expected_topics = [topics[(i + j) % len(topics)] for j in range(5)]
        assert task["solution_overview"].startswith(
            f"Topics: {', '.join(expected_topics)}."
        )
        assert "\n" not in task["solution_overview"]

        for j, (statement, answer, explanation) in enumerate(
            zip(
                task["statements"],
                task["answer_key"],
                task["tactical_explanations"],
            )
        ):
            topic = expected_topics[j]
            topic_histogram[topic] += 1
            truth_histogram[answer] += 1
            letter_histogram[f"{'T' if answer else 'F'}-{chr(65+j)}"] += 1
            label = "True" if answer else "False"
            assert len(statement) >= 140, statement
            assert explanation.startswith(f"**{chr(65+j)}.** → {label}")
            assert explanation.endswith(f"so the statement is {label}.")
            assert explanation.count("$$") >= 4

    assert topic_histogram == Counter({topic: 20 for topic in topics})
    assert truth_histogram == Counter({True: 50, False: 50})
    assert letter_histogram == Counter(
        {
            "T-A": 10,
            "F-A": 10,
            "T-B": 10,
            "F-B": 10,
            "T-C": 10,
            "F-C": 10,
            "T-D": 10,
            "F-D": 10,
            "T-E": 10,
            "F-E": 10,
        }
    )
    return topic_histogram, truth_histogram, letter_histogram


def write_bank(path: Path, tasks: list[dict]) -> None:
    payload = json.dumps({"tasks": tasks}, ensure_ascii=False, indent=2) + "\n"
    assert "\u2014" not in payload
    assert "\u2013" not in payload
    assert "${" not in payload
    path.write_text(payload, encoding="utf-8")


def print_histogram(
    label: str,
    topics: list[str],
    topic_histogram: Counter[str],
    truth_histogram: Counter[bool],
    letter_histogram: Counter[str],
) -> None:
    topic_text = ", ".join(f"{topic}={topic_histogram[topic]}" for topic in topics)
    letter_text = ", ".join(
        f"{letter}:T={letter_histogram[f'T-{letter}']}/F={letter_histogram[f'F-{letter}']}"
        for letter in "ABCDE"
    )
    print(f"{label} topic histogram: {topic_text}")
    print(f"{label} truth histogram: True={truth_histogram[True]}, False={truth_histogram[False]}")
    print(f"{label} letter histogram: {letter_text}")


def main() -> None:
    ch12 = make_bank(
        topics=CH12_TOPICS,
        builders=[
            ch12_combinatorial,
            ch12_inclusion,
            ch12_conditional,
            ch12_moments,
            ch12_bayes,
        ],
        prefix="12",
        first_id=199,
        subsection="12.6",
        mapping=CH12_MAP,
    )
    ch13 = make_bank(
        topics=CH13_TOPICS,
        builders=[
            ch13_exact,
            ch13_tail,
            ch13_moments,
            ch13_compare,
            ch13_complement,
        ],
        prefix="13",
        first_id=56,
        subsection="13.5",
        mapping=CH13_MAP,
    )

    ch12_hist = validate_bank(
        ch12,
        topics=CH12_TOPICS,
        prefix="12",
        first_id=199,
        subsection="12.6",
    )
    ch13_hist = validate_bank(
        ch13,
        topics=CH13_TOPICS,
        prefix="13",
        first_id=56,
        subsection="13.5",
    )

    write_bank(OUT_DIR / "math-ch12-exam.json", ch12)
    write_bank(OUT_DIR / "math-ch13-exam.json", ch13)
    print_histogram("Ch12", CH12_TOPICS, *ch12_hist)
    print_histogram("Ch13", CH13_TOPICS, *ch13_hist)


if __name__ == "__main__":
    main()
