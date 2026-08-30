#!/usr/bin/env python3
"""Generate math-ch12-exam.json and math-ch13-exam.json."""
from __future__ import annotations

import json
import math
from fractions import Fraction
from pathlib import Path

OUT = Path("/workspace/src/data")


def A(x: float, n: int = 5) -> str:
    return f"{x:.{n}f}".rstrip("0").rstrip(".")


def mk_expl(letter: str, truth: bool, body: str) -> str:
    tag = "True" if truth else "False"
    body = body.strip()
    if not (
        body.endswith(f"so the statement is {tag}.")
        or body.endswith(f"the statement is {tag}.")
    ):
        body = body.rstrip(".") + f".\n\nSo the statement is {tag}."
    return f"**{letter}.** → {tag}\n\n{body}"


def make_task(
    *,
    chapter: str,
    num: int,
    title_n: int,
    subsection: str,
    statements: list[str],
    answers: list[bool],
    bodies: list[str],
    overview: str,
) -> dict:
    assert len(statements) == len(answers) == len(bodies) == 5
    tactical = [mk_expl("ABCDE"[i], answers[i], bodies[i]) for i in range(5)]
    return {
        "id": f"math-{chapter}-{num}",
        "case_id": f"MATH {chapter}.{num}",
        "title": f"Exam-style tasks — {title_n}",
        "subsection": subsection,
        "context": "Evaluate each statement. Mark it TRUE or FALSE.",
        "statements": statements,
        "answer_key": answers,
        "tactical_explanations": tactical,
        "difficulty_level": "4/5",
        "sort_order": num,
        "solution_overview": overview,
        "placeholder": False,
    }


def scrub(o):
    if isinstance(o, str):
        return o.replace("\u2014", "-").replace("\u2013", "-")
    if isinstance(o, list):
        return [scrub(x) for x in o]
    if isinstance(o, dict):
        return {k: scrub(v) for k, v in o.items()}
    return o


def validate(tasks, chapter, start, end, sub):
    assert len(tasks) == end - start + 1, (len(tasks), start, end)
    for i, t in enumerate(tasks):
        n = start + i
        assert t["sort_order"] == n
        assert t["id"] == f"math-{chapter}-{n}"
        assert t["subsection"] == sub
        assert len(t["statements"]) == 5
        for j, e in enumerate(t["tactical_explanations"]):
            tag = "True" if t["answer_key"][j] else "False"
            assert e.startswith(f"**{'ABCDE'[j]}.** → {tag}")
            assert e.rstrip().endswith(f"the statement is {tag}.")
            assert "\u2014" not in e and "\u2013" not in e


# ============================== CH12 ==============================


def ch12_tasks() -> list[dict]:
    T = []

    def add(num, title_n, stmts, ans, bodies, overview):
        T.append(
            make_task(
                chapter="12",
                num=num,
                title_n=title_n,
                subsection="12.6",
                statements=stmts,
                answers=ans,
                bodies=bodies,
                overview=overview,
            )
        )

    # 199
    p_ace = 6 * 48 / 22100
    add(
        199,
        1,
        [
            "Three cards are drawn at random without replacement from a standard 52-card deck. The probability of obtaining exactly two aces is greater than $\\dfrac{1}{50}$.",
            "Events $A$ and $B$ satisfy $P(A)=0.40$, $P(B)=0.35$, and $P(A \\cup B)=0.60$. Then $P(A \\cap B)=0.15$.",
            "Events $A$ and $B$ satisfy $P(A)=0.50$, $P(B)=0.40$, and $P(A \\cap B)=0.25$. Then $A$ and $B$ are independent.",
            "A discrete random variable $X$ takes values $0$, $1$, and $2$ with probabilities $\\dfrac{1}{4}$, $\\dfrac{1}{2}$, and $\\dfrac{1}{4}$ respectively. Then $\\mathrm{Var}(X)=\\dfrac{1}{2}$.",
            "Factory line A makes $60\\%$ of items with defect rate $2\\%$; line B makes $40\\%$ with defect rate $5\\%$. Given that a randomly chosen item is defective, the probability it came from line A is greater than $40\\%$.",
        ],
        [False, True, False, True, False],
        [
            "A standard deck has $4$ aces and $48$ non-aces. Drawing $3$ cards without replacement,\n\n"
            "$$P(\\text{exactly 2 aces}) = \\dfrac{\\binom{4}{2}\\binom{48}{1}}{\\binom{52}{3}}$$\n\n"
            "$$\\binom{4}{2}=6,\\quad \\binom{48}{1}=48,\\quad \\binom{52}{3}=22100$$\n\n"
            "$$P = \\dfrac{288}{22100} = \\dfrac{72}{5525} \\approx " + A(p_ace) + "$$\n\n"
            "while $\\dfrac{1}{50}=0.02$. Since $" + A(p_ace) + " < 0.02$, the probability is not greater than $\\dfrac{1}{50}$.\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
            "Inclusion-exclusion gives\n\n"
            "$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n\n"
            "$$0.60 = 0.40 + 0.35 - P(A \\cap B)$$\n\n"
            "$$P(A \\cap B) = 0.15$$\n\n"
            "Matching these figures to the claim, the statement is True.",
            "Independence requires $P(A \\cap B) = P(A)P(B)$.\n\n"
            "$$P(A)P(B) = 0.50 \\cdot 0.40 = 0.20 \\ne 0.25$$\n\n"
            "Equivalently, $P(A \\mid B) = \\dfrac{0.25}{0.40} = 0.625 \\ne 0.50$.\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
            "$$E(X) = 0 \\cdot \\dfrac{1}{4} + 1 \\cdot \\dfrac{1}{2} + 2 \\cdot \\dfrac{1}{4} = 1$$\n\n"
            "$$E(X^{2}) = 0 + 1 \\cdot \\dfrac{1}{2} + 4 \\cdot \\dfrac{1}{4} = \\dfrac{3}{2}$$\n\n"
            "$$\\mathrm{Var}(X) = \\dfrac{3}{2} - 1^{2} = \\dfrac{1}{2}$$\n\n"
            "(The SD would be $\\sqrt{1/2}$, which is different from the variance.)\n\n"
            "Matching these figures to the claim, the statement is True.",
            "$$P(D) = 0.60 \\cdot 0.02 + 0.40 \\cdot 0.05 = 0.032$$\n\n"
            "$$P(A \\mid D) = \\dfrac{0.012}{0.032} = \\dfrac{3}{8} = 0.375$$\n\n"
            "That is $37.5\\%$, which is not greater than $40\\%$.\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
        ],
        "Mixed exam claims: a three-card ace draw without replacement, inclusion-exclusion, an independence test, variance of a three-point law, and two-cause Bayes for a defective item.",
    )

    # 200
    add(
        200,
        2,
        [
            "An urn holds $5$ red and $7$ blue balls. Two balls are drawn without replacement. The probability both are red equals $\\dfrac{25}{144}$.",
            "Events $A$, $B$, and $C$ satisfy $P(A)=0.30$, $P(B)=0.40$, $P(C)=0.20$, every pairwise intersection has probability $0.10$, and $P(A \\cap B \\cap C)=0.05$. Then $P(A \\cup B \\cup C)=0.65$.",
            "Given $P(A \\mid B)=0.60$, $P(B)=0.50$, and $P(A)=0.40$, it follows that $P(B \\mid A)=0.75$.",
            "A fair four-sided die yields $X \\in \\{1,2,3,4\\}$ each with probability $\\dfrac{1}{4}$. Then the standard deviation of $X$ equals $\\sqrt{\\dfrac{5}{4}}$.",
            "A disease has prior probability $1\\%$. A test detects it with sensitivity $99\\%$ and has a $2\\%$ false-positive rate among healthy people. Given a positive test, the probability the person has the disease is greater than $90\\%$.",
        ],
        [False, True, True, True, False],
        [
            "Without replacement,\n\n"
            "$$P(\\text{both red}) = \\dfrac{\\binom{5}{2}}{\\binom{12}{2}} = \\dfrac{10}{66} = \\dfrac{5}{33}$$\n\n"
            "The claimed $\\dfrac{25}{144}=(5/12)^{2}$ is the with-replacement value.\n\n"
            "$$\\dfrac{5}{33} \\approx " + A(5 / 33) + " \\ne \\dfrac{25}{144} \\approx " + A(25 / 144) + "$$\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
            "$$P(A \\cup B \\cup C) = 0.30+0.40+0.20 - 0.10-0.10-0.10 + 0.05 = 0.65$$\n\n"
            "Matching these figures to the claim, the statement is True.",
            "$$P(A \\cap B) = 0.60 \\cdot 0.50 = 0.30$$\n\n"
            "$$P(B \\mid A) = \\dfrac{0.30}{0.40} = 0.75$$\n\n"
            "Matching these figures to the claim, the statement is True.",
            "$$E(X)=\\dfrac{10}{4}=\\dfrac{5}{2},\\quad E(X^{2})=\\dfrac{30}{4}=\\dfrac{15}{2}$$\n\n"
            "$$\\mathrm{Var}(X)=\\dfrac{15}{2}-\\dfrac{25}{4}=\\dfrac{5}{4}$$\n\n"
            "$$\\mathrm{SD}(X)=\\sqrt{\\dfrac{5}{4}}$$\n\n"
            "Matching these figures to the claim, the statement is True.",
            "$$P(+) = 0.99\\cdot 0.01 + 0.02\\cdot 0.99 = 0.0297$$\n\n"
            "$$P(D \\mid +) = \\dfrac{0.0099}{0.0297} = \\dfrac{1}{3} \\approx 0.333$$\n\n"
            "About $33.3\\%$, far below $90\\%$.\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
        ],
        "Mixed exam claims: an urn draw without replacement versus a with-replacement trap, three-event inclusion-exclusion, reversing a conditional, SD of a fair d4, and Bayes on a rare-disease test.",
    )

    # 201
    add(
        201,
        3,
        [
            "A committee of $4$ is chosen at random from $6$ men and $5$ women. The probability the committee contains exactly $2$ women is $\\dfrac{5}{11}$.",
            "If $P(A)=0.30$, $P(B)=0.50$, and $P(A \\cap B)=0.10$, then $P(A \\cup B)=0.80$.",
            "One card is drawn from a standard 52-card deck and it is a king; it is not replaced. The probability that the next card drawn is also a king equals $\\dfrac{1}{13}$.",
            "A game pays $+10$ euros with probability $0.30$ and $-4$ euros with probability $0.70$. The expected payoff of one play is $0.20$ euros.",
            "Three machines produce $50\\%$, $30\\%$, and $20\\%$ of output with defect rates $1\\%$, $3\\%$, and $4\\%$ respectively. Given a defective item, the probability it came from the third machine equals $\\dfrac{4}{11}$.",
        ],
        [True, False, False, True, True],
        [
            "$$\\binom{11}{4}=330,\\quad \\binom{5}{2}\\binom{6}{2}=150$$\n\n"
            "$$P=\\dfrac{150}{330}=\\dfrac{5}{11}$$\n\n"
            "Matching these figures to the claim, the statement is True.",
            "$$P(A \\cup B)=0.30+0.50-0.10=0.70 \\ne 0.80$$\n\n"
            "The claim ignores the intersection (as if the events were disjoint).\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
            "After one king is removed, $3$ kings remain among $51$ cards:\n\n"
            "$$P=\\dfrac{3}{51}=\\dfrac{1}{17} \\ne \\dfrac{1}{13}$$\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
            "$$E=10\\cdot 0.30+(-4)\\cdot 0.70=0.2$$\n\n"
            "Matching these figures to the claim, the statement is True.",
            "$$P(D)=0.005+0.009+0.008=0.022$$\n\n"
            "$$P(M_{3}\\mid D)=\\dfrac{0.008}{0.022}=\\dfrac{4}{11}$$\n\n"
            "Matching these figures to the claim, the statement is True.",
        ],
        "Mixed exam claims: a mixed-gender committee, a disjoint-union trap, sequential kings without replacement, an expected payoff, and three-cause Bayes.",
    )

    # 202
    add(
        202,
        4,
        [
            "Five distinct people are seated uniformly at random in a row of five chairs. The probability that two particular people sit next to each other equals $\\dfrac{2}{5}$.",
            "If $P(A)=0.70$, $P(B)=0.50$, and $P(A \\cup B)=0.90$, then $P(A \\cap B) \\le 0.20$.",
            "Two fair coins are flipped independently. The probability both land heads equals $\\dfrac{1}{2}$.",
            "A random variable $X$ takes values $-1$, $0$, and $1$ with probabilities $0.20$, $0.50$, and $0.30$ respectively. Then $\\mathrm{Var}(X)=0.49$.",
            "Emails are spam with probability $20\\%$. A filter flags $95\\%$ of spam and $5\\%$ of ham. Given that a message is flagged, the probability it is spam exceeds $80\\%$.",
        ],
        [True, False, False, True, True],
        [
            "Glue the two people into a block ($2$ internal orders) and permute $4$ entities:\n\n"
            "$$P=\\dfrac{2\\cdot 4!}{5!}=\\dfrac{48}{120}=\\dfrac{2}{5}$$\n\n"
            "Matching these figures to the claim, the statement is True.",
            "$$P(A \\cap B)=0.70+0.50-0.90=0.30$$\n\n"
            "which is not $\\le 0.20$.\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
            "$$P(\\text{HH})=\\dfrac{1}{2}\\cdot\\dfrac{1}{2}=\\dfrac{1}{4} \\ne \\dfrac{1}{2}$$\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
            "$$E(X)=0.10,\\quad E(X^{2})=0.50,\\quad \\mathrm{Var}(X)=0.49$$\n\n"
            "Matching these figures to the claim, the statement is True.",
            "$$P(+)=0.19+0.04=0.23$$\n\n"
            "$$P(\\text{spam}\\mid +)=\\dfrac{0.19}{0.23}=\\dfrac{19}{23}\\approx 0.826>0.80$$\n\n"
            "Matching these figures to the claim, the statement is True.",
        ],
        "Mixed exam claims: adjacent seating, recovering an intersection, two-coin independence, variance of a signed law, and spam-filter Bayes.",
    )

    # 203
    flush_p = 4 * math.comb(13, 5) / math.comb(52, 5)
    add(
        203,
        5,
        [
            "Five cards are dealt from a standard 52-card deck. The probability that all five are of the same suit is less than $0.002$.",
            "In a survey, $40\\%$ of respondents like tea, $50\\%$ like coffee, and $70\\%$ like at least one of the two. Then exactly $20\\%$ like both tea and coffee.",
            "Suppose $P(A)=0.30$ and $P(A \\mid B)=0.20$. Then the occurrence of $B$ makes $A$ more likely than it was unconditionally.",
            "If a discrete random variable $X$ has $\\mathrm{Var}(X)=9$, then its standard deviation equals $9$.",
            "Suppliers provide $50\\%$, $30\\%$, and $20\\%$ of parts with good-item rates $98\\%$, $95\\%$, and $90\\%$. Given a good part, the probability it came from the second supplier is approximately $30\\%$ (within one percentage point).",
        ],
        [True, True, False, False, True],
        [
            "$$P=\\dfrac{4\\binom{13}{5}}{\\binom{52}{5}}=\\dfrac{5148}{2598960}\\approx " + A(flush_p, 6) + " < 0.002$$\n\n"
            "Matching these figures to the claim, the statement is True.",
            "$$0.70=0.40+0.50-P(T\\cap C)\\Rightarrow P(T\\cap C)=0.20$$\n\n"
            "Matching these figures to the claim, the statement is True.",
            "$$P(A\\mid B)=0.20<0.30=P(A)$$\n\n"
            "so $B$ makes $A$ less likely, not more.\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
            "$$\\mathrm{SD}(X)=\\sqrt{9}=3 \\ne 9$$\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
            "$$P(G)=0.955$$\n\n"
            "$$P(S_{2}\\mid G)=\\dfrac{0.285}{0.955}\\approx " + A(0.285 / 0.955, 4) + "$$\n\n"
            "about $" + A(100 * 0.285 / 0.955, 2) + "\\%$, within one point of $30\\%$.\n\n"
            "Matching these figures to the claim, the statement is True.",
        ],
        "Mixed exam claims: a five-card same-suit probability, tea/coffee inclusion-exclusion, a decreasing conditional, Var versus SD, and three-supplier Bayes.",
    )

    # Remaining 204-218 as compact verified batches
    batch = [
        # 204
        (
            204,
            6,
            [
                "From a deck of $52$ cards, $2$ cards are drawn without replacement. The probability both are hearts equals $\\dfrac{13 \\times 12}{52 \\times 51}$.",
                "If $P(A)=0.45$, $P(B)=0.55$, and $A$ and $B$ are mutually exclusive, then $P(A \\cup B)=1$.",
                "A fair die is rolled once. Let $A$ be \"even\" and $B$ be \"at least $4$\". Then $P(A \\mid B) = \\dfrac{2}{3}$.",
                "Let $X$ be the number of heads in two independent fair coin tosses. Then $E(X)=1$ and $\\mathrm{Var}(X)=\\dfrac{1}{2}$.",
                "Box 1 has $2$ gold and $1$ silver coins; Box 2 has $1$ gold and $2$ silver. A box is chosen at random, then a coin at random is gold. The probability the box was Box 1 equals $\\dfrac{2}{3}$.",
            ],
            [True, True, True, True, True],
            [
                "$$P=\\dfrac{13}{52}\\cdot\\dfrac{12}{51}=\\dfrac{13\\times 12}{52\\times 51}$$\n\nMatching these figures to the claim, the statement is True.",
                "Mutually exclusive: $P(A\\cup B)=0.45+0.55=1$.\n\nMatching these figures to the claim, the statement is True.",
                "$B=\\{4,5,6\\}$; even members $\\{4,6\\}$.\n\n$$P(A\\mid B)=\\dfrac{2}{3}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$E(X)=1,\\quad E(X^{2})=\\dfrac{3}{2},\\quad \\mathrm{Var}(X)=\\dfrac{1}{2}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(G)=\\tfrac{1}{2}\\cdot\\tfrac{2}{3}+\\tfrac{1}{2}\\cdot\\tfrac{1}{3}=\\tfrac{1}{2}$$\n\n$$P(B_{1}\\mid G)=\\dfrac{2}{3}$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: two hearts without replacement, mutually exclusive events, a die conditional, two-coin mean/variance, and Bayes on coin boxes.",
        ),
        (
            205,
            7,
            [
                "A club has $8$ juniors and $6$ seniors. A team of $3$ is chosen at random. The probability the team has no seniors equals $\\dfrac{\\binom{8}{3}}{\\binom{14}{3}}$.",
                "If $P(A \\cup B)=0.80$ and $P(A \\cap B)=0.20$, then $P(A)+P(B)=0.60$.",
                "Events with $P(A)=0.40$ and $P(B)=0.50$ must satisfy $P(A \\cap B) \\ge 0.10$.",
                "For a random variable with $E(X)=4$ and $E(X^{2})=20$, the standard deviation equals $2$.",
                "Prior probabilities of causes $C_{1},C_{2},C_{3}$ are $0.5$, $0.3$, $0.2$ with $P(E \\mid C_{i})$ equal to $0.1$, $0.4$, $0.5$. Given $E$, the most probable cause is $C_{1}$.",
            ],
            [True, False, False, True, False],
            [
                "No seniors means all $3$ from $8$ juniors:\n\n$$P=\\dfrac{\\binom{8}{3}}{\\binom{14}{3}}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A)+P(B)=P(A\\cup B)+P(A\\cap B)=1.00 \\ne 0.60$$\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$$P(A\\cap B)\\ge \\max(0,P(A)+P(B)-1)=0$$\n\nso the intersection need not be at least $0.10$.\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$$\\mathrm{Var}(X)=20-16=4,\\quad \\mathrm{SD}(X)=2$$\n\nMatching these figures to the claim, the statement is True.",
                "Unnormalized posteriors: $0.05$, $0.12$, $0.10$. The MAP is $C_{2}$, not $C_{1}$.\n\nThe solved result does not agree with the claim, so the statement is False.",
            ],
            "Mixed exam claims: an all-junior team, rearranging inclusion-exclusion, a Fréchet lower-bound trap, recovering SD, and three-cause MAP Bayes.",
        ),
        (
            206,
            8,
            [
                "An urn has $10$ white and $10$ black balls. Three are drawn without replacement. The probability all three are white equals $\\dfrac{\\binom{10}{3}}{\\binom{20}{3}}$.",
                "If $P(A)=0.25$, $P(B)=0.40$, and $P(A \\cap B)=0.10$, then $P(A \\cup B)=0.55$.",
                "Two events with $P(A \\mid B)=P(A)$ are independent (assuming $P(B)>0$).",
                "A lottery ticket costs $2$ euros and pays $50$ euros with probability $0.01$ (otherwise nothing). The expected net gain is $-1.50$ euros.",
                "Sensors fail with priors $0.1$, $0.2$, $0.7$ and alarm rates $0.9$, $0.6$, $0.1$. Given an alarm under this one-fault model, $P(\\text{sensor 3 failed})=0.25<0.4$.",
            ],
            [True, True, True, True, True],
            [
                "$$P=\\dfrac{\\binom{10}{3}}{\\binom{20}{3}}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A\\cup B)=0.25+0.40-0.10=0.55$$\n\nMatching these figures to the claim, the statement is True.",
                "$P(A\\mid B)=P(A)$ rearranges to $P(A\\cap B)=P(A)P(B)$.\n\nMatching these figures to the claim, the statement is True.",
                "$$E(\\text{net})=-2+50\\cdot 0.01=-1.5$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(\\text{alarm})=0.28$$\n\n$$P(S_{3}\\mid\\text{alarm})=\\dfrac{0.07}{0.28}=0.25<0.4$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: three white balls, two-event union, conditional independence characterization, lottery expectation, and three-sensor Bayes.",
        ),
        (
            207,
            9,
            [
                "From $52$ cards, the number of $5$-card hands that contain exactly $2$ aces is $\\binom{4}{2}\\binom{48}{3}$.",
                "For any events $A$ and $B$, $P(A \\cup B) \\le P(A)+P(B)$.",
                "If $P(B \\mid A)=0.80$, $P(A)=0.25$, and $P(B)=0.50$, then $P(A \\mid B)=0.40$.",
                "If $\\mathrm{Var}(X)=16$, then $\\mathrm{Var}(2X)=32$.",
                "A test for a condition with prevalence $5\\%$ has sensitivity $100\\%$ and specificity $90\\%$. Given a positive result, $P(\\text{condition} \\mid +)$ equals $\\dfrac{1}{2.8}$.",
            ],
            [True, True, True, False, False],
            [
                "Choose $2$ of $4$ aces and $3$ of $48$ non-aces.\n\nMatching these figures to the claim, the statement is True.",
                "Subadditivity always holds, with equality iff $P(A\\cap B)=0$.\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A\\cap B)=0.20$$\n\n$$P(A\\mid B)=\\dfrac{0.20}{0.50}=0.40$$\n\nMatching these figures to the claim, the statement is True.",
                "$$\\mathrm{Var}(2X)=4\\cdot 16=64 \\ne 32$$\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$$P(+)=0.05+0.10\\cdot 0.95=0.145$$\n\n$$P(C\\mid +)=\\dfrac{0.05}{0.145}=\\dfrac{10}{29}\\ne\\dfrac{1}{2.8}$$\n\nThe solved result does not agree with the claim, so the statement is False.",
            ],
            "Mixed exam claims: counting two-ace hands, union subadditivity, reversing a conditional, quadratic variance scaling, and a screening posterior trap.",
        ),
        (
            208,
            10,
            [
                "Four books are arranged at random on a shelf. The probability they appear in a specific predetermined order equals $\\dfrac{1}{24}$.",
                "If $P(A)=0.60$ and $P(A \\cap B)=0.20$, then $P(B \\mid A)=\\dfrac{1}{3}$.",
                "Rolling two fair dice, the probability the sum is $7$ equals the probability the sum is $6$.",
                "For $X$ with distribution $P(X=0)=0.2$, $P(X=5)=0.8$, one has $E(X)=4$ and $\\mathrm{SD}(X)=2$.",
                "Machines A and B make $70\\%$ and $30\\%$ of bolts; defect rates $2\\%$ and $8\\%$. Given a defective bolt, $P(\\text{from A}) < P(\\text{from B})$.",
            ],
            [True, True, False, True, True],
            [
                "$$P=\\dfrac{1}{4!}=\\dfrac{1}{24}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(B\\mid A)=\\dfrac{0.20}{0.60}=\\dfrac{1}{3}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(\\text{sum }=7)=\\dfrac{6}{36}\\ne\\dfrac{5}{36}=P(\\text{sum }=6)$$\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$$E=4,\\quad E(X^{2})=20,\\quad \\mathrm{Var}=4,\\quad \\mathrm{SD}=2$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A\\mid D)=\\dfrac{0.014}{0.038}=\\dfrac{7}{19}<\\dfrac{12}{19}=P(B\\mid D)$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: bookshelf order, a definitional conditional, unequal dice sums, a two-point SD, and Bayes comparing machine posteriors.",
        ),
        (
            209,
            11,
            [
                "A password uses $3$ distinct digits chosen from $0$–$9$ and arranged in order. The number of such passwords is $P(10,3)=10 \\times 9 \\times 8$.",
                "If $P(A \\cap B)=0$ and $P(A)=0.3$, $P(B)=0.4$, then $P(A \\cup B)=0.7$.",
                "For independent events with $P(A)=0.2$ and $P(B)=0.5$, one has $P(A \\cup B)=0.6$.",
                "If $E(X)=5$ and $\\mathrm{Var}(X)=9$, then $E(X^{2})=34$.",
                "Prior $P(D)=0.02$. Test: $P(+ \\mid D)=0.95$, $P(+ \\mid D^{c})=0.05$. Then $P(D \\mid +)=\\dfrac{0.019}{0.068}$.",
            ],
            [True, True, True, True, True],
            [
                "$$P(10,3)=10\\times 9\\times 8=720$$\n\nMatching these figures to the claim, the statement is True.",
                "Disjoint: $P(A\\cup B)=0.7$.\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A\\cup B)=0.2+0.5-0.1=0.6$$\n\nMatching these figures to the claim, the statement is True.",
                "$$E(X^{2})=9+25=34$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(+)=0.019+0.049=0.068$$\n\n$$P(D\\mid +)=\\dfrac{0.019}{0.068}$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: ordered digit passwords, disjoint unions, independent unions, recovering E(X^2), and an explicit Bayes ratio.",
        ),
        (
            210,
            12,
            [
                "From $12$ jurors of whom $5$ are women, a subcommittee of $4$ is chosen. The probability of exactly $3$ women is $\\dfrac{\\binom{5}{3}\\binom{7}{1}}{\\binom{12}{4}}$.",
                "If $P(A)=0.9$ and $P(B)=0.9$, then it is possible that $P(A \\cap B)=0.85$.",
                "A card is drawn from a $52$-card deck. Let $A$ be \"ace\" and $B$ be \"heart\". Then $A$ and $B$ are independent.",
                "A random variable with outcomes $10$ and $20$ each with probability $\\tfrac{1}{2}$ has variance $25$.",
                "Two factories share production $40\\%$-$60\\%$ with defect rates $3\\%$ and $1\\%$. Given a good item, the probability it is from the second factory exceeds $0.60$.",
            ],
            [True, True, True, True, True],
            [
                "Hypergeometric probability of exactly $3$ women in $4$ draws.\n\nMatching these figures to the claim, the statement is True.",
                "Feasible range is $[0.8,0.9]$; $0.85$ lies inside.\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A)P(B)=\\dfrac{1}{13}\\cdot\\dfrac{1}{4}=\\dfrac{1}{52}=P(A\\cap B)$$\n\nMatching these figures to the claim, the statement is True.",
                "$$E=15,\\quad E(X^{2})=250,\\quad \\mathrm{Var}=25$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(F_{2}\\mid G)=\\dfrac{0.594}{0.982}\\approx " + A(0.594 / 0.982, 4) + " > 0.60$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: a hypergeometric subcommittee, a Fréchet-feasible intersection, ace/heart independence, two-point variance, and Bayes for a good item.",
        ),
        (
            211,
            13,
            [
                "Choosing a president and a treasurer from $10$ people (roles distinct, one person cannot hold both) can be done in $10 \\times 9$ ways.",
                "If $P(A \\cup B)=0.75$, $P(A)=0.50$, $P(B)=0.45$, then $P(A \\cap B)=0.20$.",
                "Given $P(A)=0.30$, $P(B)=0.40$, $P(A \\cap B)=0.12$, the events $A$ and $B$ are independent.",
                "For $X$ with $P(X=k)=\\dfrac{1}{5}$ for $k=1,\\dots,5$, one has $E(X)=3$ and $\\mathrm{Var}(X)=2$.",
                "Spam prior $10\\%$; $P(\\text{flag}\\mid\\text{spam})=0.90$, $P(\\text{flag}\\mid\\text{ham})=0.20$. Then $P(\\text{spam}\\mid\\text{flag})=\\dfrac{1}{3}$.",
            ],
            [True, True, True, True, True],
            [
                "$$10\\times 9=90$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A\\cap B)=0.50+0.45-0.75=0.20$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A)P(B)=0.12=P(A\\cap B)$$\n\nMatching these figures to the claim, the statement is True.",
                "$$E=3,\\quad E(X^{2})=11,\\quad \\mathrm{Var}=2$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(F)=0.27$$\n\n$$P(S\\mid F)=\\dfrac{0.09}{0.27}=\\dfrac{1}{3}$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: ordered officers, recovering an intersection, product-rule independence, discrete uniform moments, and spam Bayes.",
        ),
        (
            212,
            14,
            [
                "An urn contains $4$ red and $6$ green balls. Drawing $2$ with replacement, $P(\\text{both red})=\\left(\\dfrac{4}{10}\\right)^{2}=\\dfrac{4}{25}$.",
                "If $P(A)=0.35$ and $P(B)=0.25$ are mutually exclusive, then $P(A \\cup B)=0.60$.",
                "A fair coin is flipped until the first head. The probability the first head occurs on toss $3$ equals $\\left(\\dfrac{1}{2}\\right)^{3}=\\dfrac{1}{8}$.",
                "If $\\mathrm{SD}(X)=5$, then $\\mathrm{Var}(X)=25$.",
                "Causes $H_{1},H_{2}$ have priors $0.6,0.4$ and $P(D\\mid H_{i})=0.3,0.8$. Then $P(H_{2}\\mid D)=\\dfrac{16}{25}$.",
            ],
            [True, True, True, True, True],
            [
                "With replacement: $(4/10)^{2}=4/25$.\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A\\cup B)=0.35+0.25=0.60$$\n\nMatching these figures to the claim, the statement is True.",
                "Two tails then a head: $(1/2)^{3}=1/8$.\n\nMatching these figures to the claim, the statement is True.",
                "$$\\mathrm{Var}(X)=5^{2}=25$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(D)=0.50$$\n\n$$P(H_{2}\\mid D)=\\dfrac{0.32}{0.50}=\\dfrac{16}{25}$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: with-replacement draws, mutually exclusive union, geometric first-head, SD to Var, and two-cause Bayes.",
        ),
        (
            213,
            15,
            [
                "Without replacement from $5$ red and $5$ blue, $P(\\text{first red, second blue})=\\dfrac{5}{10}\\cdot\\dfrac{5}{9}=\\dfrac{1}{4}$.",
                "If $P(A \\cup B \\cup C)=0.90$ and the three events are pairwise disjoint with equal probabilities, then each has probability $0.30$.",
                "If $P(A\\mid B)=0.5$ and $P(B\\mid A)=0.5$ with $P(A)=0.4$, then $P(B)=0.4$.",
                "A game: gain $3$ with probability $\\dfrac{1}{3}$, lose $1$ with probability $\\dfrac{2}{3}$. Then $E(X)=\\dfrac{1}{3}$ and $\\mathrm{Var}(X)=\\dfrac{32}{9}$.",
                "Three labs share samples $0.2,0.3,0.5$ with false-negative rates $0.05,0.02,0.01$. The overall false-negative probability equals $0.021$.",
            ],
            [False, True, True, True, True],
            [
                "$$P=\\dfrac{5}{10}\\cdot\\dfrac{5}{9}=\\dfrac{5}{18}\\ne\\dfrac{1}{4}$$\n\nThe solved result does not agree with the claim, so the statement is False.",
                "Equal disjoint shares of $0.90$ give $0.30$ each.\n\nMatching these figures to the claim, the statement is True.",
                "$$0.5\\,P(B)=0.5\\cdot 0.4\\Rightarrow P(B)=0.4$$\n\nMatching these figures to the claim, the statement is True.",
                "$$E=\\dfrac{1}{3},\\quad E(X^{2})=\\dfrac{11}{3},\\quad \\mathrm{Var}=\\dfrac{32}{9}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(FN)=0.010+0.006+0.005=0.021$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: a sequential product arithmetic trap, equal disjoint events, matching reverse conditionals, game mean/variance, and a mixture false-negative rate.",
        ),
        (
            214,
            16,
            [
                "The number of ways to choose a $3$-person committee from $9$ people is $\\binom{9}{3}=84$.",
                "If $P(A)=0.4$, $P(B)=0.5$, $P(A\\cap B)=0.3$, then $P(A\\cup B)=0.6$.",
                "Tossing a fair die, $P(\\text{prime}\\mid\\text{odd})=\\dfrac{2}{3}$ because the odd faces are $\\{1,3,5\\}$ and the primes among them are $\\{3,5\\}$.",
                "If $E(X)=0$ and $E(X^{2})=9$, then $\\mathrm{SD}(X)=3$.",
                "Prior probabilities $0.1,0.3,0.6$ with likelihoods $0.8,0.5,0.1$ for evidence $E$. Then the MAP cause given $E$ is the second cause.",
            ],
            [True, True, True, True, True],
            [
                "$$\\binom{9}{3}=84$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A\\cup B)=0.4+0.5-0.3=0.6$$\n\nMatching these figures to the claim, the statement is True.",
                "Odd faces $1,3,5$; primes among them $3,5$ (since $1$ is not prime).\n\nMatching these figures to the claim, the statement is True.",
                "$$\\mathrm{Var}=9,\\quad \\mathrm{SD}=3$$\n\nMatching these figures to the claim, the statement is True.",
                "Unnormalized posteriors $0.08$, $0.15$, $0.06$; the second is largest.\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: a committee count, inclusion-exclusion, a die conditional, SD from a centered second moment, and MAP among three causes.",
        ),
        (
            215,
            17,
            [
                "Drawing $2$ cards without replacement from $52$, $P(\\text{both aces})=\\dfrac{\\binom{4}{2}}{\\binom{52}{2}}=\\dfrac{1}{221}$.",
                "For any $A$, $P(A)+P(A^{c})=1$.",
                "If $A \\subset B$, then $P(A)\\le P(B)$ and $P(A\\mid B)=\\dfrac{P(A)}{P(B)}$ whenever $P(B)>0$.",
                "A discrete $X$ with $E(X)=2$ and $\\mathrm{Var}(X)=3$ must satisfy $E(X^{2})=7$.",
                "A blood test: prevalence $0.5\\%$, sensitivity $99\\%$, false positive rate $1\\%$. Given positive, $P(\\text{disease})\\approx 0.332$ (to three decimals).",
            ],
            [True, True, True, True, True],
            [
                "$$P=\\dfrac{6}{1326}=\\dfrac{1}{221}$$\n\nMatching these figures to the claim, the statement is True.",
                "Complement rule on a partition.\n\nMatching these figures to the claim, the statement is True.",
                "Monotonicity plus $A\\cap B=A$ when $A\\subset B$.\n\nMatching these figures to the claim, the statement is True.",
                "$$E(X^{2})=3+4=7$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(D\\mid +)=\\dfrac{0.00495}{0.0149}\\approx 0.332$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: both aces, the complement rule, conditionals under inclusion, recovering E(X^2), and a rare-disease posterior.",
        ),
        (
            216,
            18,
            [
                "In a race of $6$ distinct runners, the number of possible podium (1st–2nd–3rd) outcomes is $P(6,3)=120$.",
                "If $P(A\\cup B)=0.85$ and $P(A\\cap B)=0.15$ with $P(A)=0.50$, then $P(B)=0.50$.",
                "A fair coin tossed twice: $P(\\text{second is H}\\mid\\text{first is H})=\\dfrac{1}{2}$ by independence.",
                "If $\\mathrm{Var}(X)=4$ and $\\mathrm{Var}(Y)=9$ for independent $X,Y$, then $\\mathrm{Var}(X+Y)=13$.",
                "Two urns: Urn A has $3$ white / $2$ black; Urn B has $1$ white / $4$ black. Pick an urn at random, then a white ball. $P(\\text{Urn A}\\mid\\text{white})=\\dfrac{3}{4}$.",
            ],
            [True, True, True, True, True],
            [
                "$$P(6,3)=6\\times 5\\times 4=120$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(B)=0.85+0.15-0.50=0.50$$\n\nMatching these figures to the claim, the statement is True.",
                "Independent tosses leave $P(\\text{second H})=\\tfrac{1}{2}$.\n\nMatching these figures to the claim, the statement is True.",
                "Independence: $\\mathrm{Var}(X+Y)=4+9=13$.\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A\\mid W)=\\dfrac{3}{4}$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: podium permutations, recovering P(B), independent coins, variance additivity, and Bayes on two urns.",
        ),
        (
            217,
            19,
            [
                "A standard deck: probability a single random card is a face card (J, Q, K) equals $\\dfrac{12}{52}=\\dfrac{3}{13}$.",
                "If $P(A)=0.55$ and $P(B)=0.65$, then $P(A\\cap B)$ cannot exceed $0.55$.",
                "Events $A,B$ with $P(A\\cap B)=P(A)P(B)$ are independent, even if $P(A)=0$.",
                "Let $X$ be Bernoulli with parameter $p=0.3$. Then $E(X)=0.3$ and $\\mathrm{Var}(X)=0.21$.",
                "Factory mix $25\\%$, $75\\%$ with defect rates $4\\%$, $2\\%$. Given a defective item, the probability it came from the smaller ($25\\%$) factory equals $25\\%$.",
            ],
            [True, True, True, True, False],
            [
                "$$P=\\dfrac{12}{52}=\\dfrac{3}{13}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(A\\cap B)\\le\\min(0.55,0.65)=0.55$$\n\nMatching these figures to the claim, the statement is True.",
                "The product definition is exactly independence.\n\nMatching these figures to the claim, the statement is True.",
                "$$E=p=0.3,\\quad \\mathrm{Var}=p(1-p)=0.21$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(\\text{small}\\mid D)=\\dfrac{0.010}{0.025}=0.40 \\ne 0.25$$\n\nThe solved result does not agree with the claim, so the statement is False.",
            ],
            "Mixed exam claims: face cards, an upper Fréchet bound, product-rule independence, Bernoulli moments, and a Bayes prior-versus-posterior trap.",
        ),
        (
            218,
            20,
            [
                "From $7$ men and $5$ women, the probability a random $2$-person pair is mixed gender equals $\\dfrac{7\\cdot 5}{\\binom{12}{2}}=\\dfrac{35}{66}$.",
                "If $P(A\\cup B)=P(A)+P(B)$, then $A$ and $B$ are mutually exclusive (up to a null event).",
                "A fair coin tossed twice: $P(\\text{second is H}\\mid\\text{first is H})=\\dfrac{1}{2}$ by independence.",
                "If $\\mathrm{Var}(X)=4$ and $\\mathrm{Var}(Y)=9$ for independent $X,Y$, then $\\mathrm{Var}(X+Y)=13$.",
                "Prior $P(C_{1})=P(C_{2})=P(C_{3})=\\tfrac{1}{3}$ with $P(E\\mid C_{i})=0.9,0.5,0.2$. Then $P(C_{1}\\mid E)=\\dfrac{9}{16}$.",
            ],
            [True, True, True, True, True],
            [
                "$$P=\\dfrac{35}{66}$$\n\nMatching these figures to the claim, the statement is True.",
                "Inclusion-exclusion forces $P(A\\cap B)=0$.\n\nMatching these figures to the claim, the statement is True.",
                "Independence of tosses.\n\nMatching these figures to the claim, the statement is True.",
                "$$\\mathrm{Var}(X+Y)=13$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(C_{1}\\mid E)=\\dfrac{0.9}{1.6}=\\dfrac{9}{16}$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed exam claims: mixed-gender pairs, mutual exclusivity, independent coins, variance additivity, and equal-prior three-cause Bayes.",
        ),
    ]

    # Fix duplicate statements in 218 C/D vs 216 - diversify 218
    batch[-1] = (
        218,
        20,
        [
            "From $7$ men and $5$ women, the probability a random $2$-person pair is mixed gender equals $\\dfrac{7\\cdot 5}{\\binom{12}{2}}=\\dfrac{35}{66}$.",
            "If $P(A\\cup B)=P(A)+P(B)$, then $A$ and $B$ are mutually exclusive (up to a null event).",
            "Drawing without replacement from $10$ cards labeled $1$–$10$, $P(\\text{second even}\\mid\\text{first is }7)=\\dfrac{5}{9}$.",
            "If $E(X)=3$ and $\\mathrm{Var}(X)=4$, then $E\\bigl((X-3)^{2}\\bigr)=4$.",
            "Prior $P(C_{1})=P(C_{2})=P(C_{3})=\\tfrac{1}{3}$ with $P(E\\mid C_{i})=0.9,0.5,0.2$. Then $P(C_{1}\\mid E)=\\dfrac{9}{16}$.",
        ],
        [True, True, True, True, True],
        [
            "$$P=\\dfrac{35}{66}$$\n\nMatching these figures to the claim, the statement is True.",
            "Inclusion-exclusion forces $P(A\\cap B)=0$.\n\nMatching these figures to the claim, the statement is True.",
            "After removing $7$, five even labels remain among nine cards.\n\n$$P=\\dfrac{5}{9}$$\n\nMatching these figures to the claim, the statement is True.",
            "By definition $\\mathrm{Var}(X)=E((X-E(X))^{2})$.\n\nMatching these figures to the claim, the statement is True.",
            "$$P(C_{1}\\mid E)=\\dfrac{0.9}{1.6}=\\dfrac{9}{16}$$\n\nMatching these figures to the claim, the statement is True.",
        ],
        "Mixed exam claims: mixed-gender pairs, mutual exclusivity, a without-replacement conditional, variance as mean squared deviation, and equal-prior three-cause Bayes.",
    )

    for row in batch:
        add(*row)

    assert len(T) == 20
    return T


# ============================== CH13 ==============================


def ch13_tasks() -> list[dict]:
    T = []

    def add(num, title_n, stmts, ans, bodies, overview):
        T.append(
            make_task(
                chapter="13",
                num=num,
                title_n=title_n,
                subsection="13.5",
                statements=stmts,
                answers=ans,
                bodies=bodies,
                overview=overview,
            )
        )

    p_ge1_10 = 1 - 0.8**10
    add(
        56,
        1,
        [
            "If $X \\sim \\mathrm{Bin}\\bigl(n=5,\\, p=\\tfrac{1}{2}\\bigr)$, then $P(X=3)=\\dfrac{5}{16}$.",
            "If $Y \\sim \\mathrm{Bin}(n=10,\\, p=0.2)$, then $P(Y \\ge 1) > 0.9$.",
            "If $Z \\sim \\mathrm{Bin}(n=8,\\, p=0.25)$, then $E(Z) > \\mathrm{SD}(Z)$.",
            "For $X \\sim \\mathrm{Bin}(20,0.5)$ and $W \\sim \\mathrm{Bin}(20,0.4)$, one has $\\mathrm{Var}(X) > \\mathrm{Var}(W)$.",
            "If each of $4$ independent switches works with probability $\\tfrac{1}{2}$, then the probability that at least one works equals $\\dfrac{15}{16}$.",
        ],
        [True, False, True, True, True],
        [
            "$$P(X=3)=\\binom{5}{3}\\left(\\dfrac{1}{2}\\right)^{5}=\\dfrac{10}{32}=\\dfrac{5}{16}$$\n\nMatching these figures to the claim, the statement is True.",
            "$$P(Y\\ge 1)=1-(0.8)^{10}\\approx " + A(p_ge1_10) + " < 0.9$$\n\nThe solved result does not agree with the claim, so the statement is False.",
            "$$E(Z)=2,\\quad \\mathrm{Var}(Z)=1.5,\\quad \\mathrm{SD}(Z)=\\sqrt{1.5}<2$$\n\nMatching these figures to the claim, the statement is True.",
            "$$\\mathrm{Var}(X)=5 > 4.8=\\mathrm{Var}(W)$$\n\nMatching these figures to the claim, the statement is True.",
            "$$P=1-\\left(\\dfrac{1}{2}\\right)^{4}=\\dfrac{15}{16}$$\n\nMatching these figures to the claim, the statement is True.",
        ],
        "Mixed binomial claims: an exact PMF, a P(Y≥1) threshold, mean versus SD, comparing variances, and an at-least-one complement.",
    )

    p5 = 1 - 0.8**5
    p10 = 1 - 0.8**10
    add(
        57,
        2,
        [
            "If $X \\sim \\mathrm{Bin}\\bigl(6,\\, \\tfrac{1}{3}\\bigr)$, then $P(X=2)=\\dfrac{80}{243}$.",
            "If $X \\sim \\mathrm{Bin}(5,0.4)$, then $P(X \\ge 4)$ equals $0.4^{5}$.",
            "For $X \\sim \\mathrm{Bin}(12,0.5)$, the mean equals the variance.",
            "If $X \\sim \\mathrm{Bin}(10,0.3)$ and $Y \\sim \\mathrm{Bin}(10,0.7)$, then $E(X)=E(10-Y)$ and $\\mathrm{Var}(X)=\\mathrm{Var}(Y)$.",
            "With success probability $p=0.2$, the probability of at least one success for $n=10$ is exactly twice that probability for $n=5$.",
        ],
        [False if False else True, False, False, True, False],
        [
            # verify 80/243
            "$$P(X=2)=15\\cdot\\dfrac{1}{9}\\cdot\\dfrac{16}{81}=\\dfrac{240}{729}=\\dfrac{80}{243}$$\n\nMatching these figures to the claim, the statement is True.",
            "$P(X\\ge 4)=P(X=4)+P(X=5)$ includes an extra positive $P(X=4)$ beyond $(0.4)^{5}=P(X=5)$.\n\nThe solved result does not agree with the claim, so the statement is False.",
            "$$E=6,\\quad \\mathrm{Var}=3 \\ne 6$$\n\nThe solved result does not agree with the claim, so the statement is False.",
            "$10-Y\\sim\\mathrm{Bin}(10,0.3)$ matches $X$; also $\\mathrm{Var}=np(1-p)$ is symmetric in $p\\leftrightarrow 1-p$.\n\nMatching these figures to the claim, the statement is True.",
            "$$1-(0.8)^{5}\\approx "
            + A(p5)
            + ",\\quad 1-(0.8)^{10}\\approx "
            + A(p10)
            + " \\ne 2\\cdot "
            + A(p5)
            + "$$\n\n"
            "The complement $1-(1-p)^{n}$ is not linear in $n$.\n\n"
            "The solved result does not agree with the claim, so the statement is False.",
        ],
        "Mixed binomial claims: an exact PMF with p=1/3, a tail versus a single PMF term, mean versus variance, complementary p, and nonlinearity of at-least-one in n.",
    )
    # Fix accidental weird answer line - first answer must be True
    T[-1]["answer_key"][0] = True
    T[-1]["tactical_explanations"][0] = mk_expl("A", True, T[-1]["tactical_explanations"][0].split("\n\n", 1)[1] if T[-1]["tactical_explanations"][0].startswith("**") else T[-1]["tactical_explanations"][0])
    # The above may have double-wrapped - rebuild statement 57 cleanly by replacing last task bodies properly
    # Actually mk_expl already applied in add(); the answer_key[0] True is fine and body already says True.

    rows = [
        (
            58,
            3,
            [
                "If $X \\sim \\mathrm{Bin}(4,0.5)$, then $P(X=0)=\\dfrac{1}{16}$ and $P(X=4)=\\dfrac{1}{16}$.",
                "If $X \\sim \\mathrm{Bin}(8,0.25)$, then $P(X \\le 1)$ is strictly less than $P(X=0)+8\\cdot(0.25)\\cdot(0.75)^{7}$.",
                "For $X \\sim \\mathrm{Bin}\\bigl(9,\\tfrac{1}{3}\\bigr)$, $E(X)=3$ and $\\mathrm{Var}(X)=2$.",
                "Among $X \\sim \\mathrm{Bin}(100,0.1)$ and $Y \\sim \\mathrm{Bin}(100,0.5)$, $\\mathrm{Var}(Y)$ is larger than $\\mathrm{Var}(X)$.",
                "The probability of at least one success in $n$ independent trials with success probability $p$ is $1-(1-p)^{n}$, not $np$.",
            ],
            [True, False, True, True, True],
            [
                "At $p=\\tfrac{1}{2}$, $P(X=0)=P(X=4)=(1/2)^{4}=1/16$.\n\nMatching these figures to the claim, the statement is True.",
                "$P(X=1)$ equals exactly $8\\cdot(0.25)\\cdot(0.75)^{7}$, so $P(X\\le 1)$ equals that sum, not strictly less.\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$$E=3,\\quad \\mathrm{Var}=2$$\n\nMatching these figures to the claim, the statement is True.",
                "$$\\mathrm{Var}(Y)=25>9=\\mathrm{Var}(X)$$\n\nMatching these figures to the claim, the statement is True.",
                "Independence gives $P(\\text{none})=(1-p)^{n}$, hence the complement formula; $np$ is the mean.\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: symmetric endpoints, a false strict inequality on a lower tail, moments at p=1/3, variance near p=1/2, and at-least-one versus np.",
        ),
        (
            59,
            4,
            [
                "If $X \\sim \\mathrm{Bin}(7,0.5)$, then $P(X=3)=P(X=4)=\\dfrac{35}{128}$.",
                "If $X \\sim \\mathrm{Bin}(6,0.5)$, then $P(X \\ge 4)=P(X \\le 2)$ by symmetry.",
                "Doubling $p$ from $0.2$ to $0.4$ with $n=10$ doubles the variance.",
                "If $X \\sim \\mathrm{Bin}(5,0.2)$ and $Y \\sim \\mathrm{Bin}(5,0.8)$, then $P(X=1)=P(Y=4)$.",
                "For $n=3$ and $p=0.1$, $1-(1-p)^{n} = 1-(0.9)^{3} = 0.271$.",
            ],
            [True, True, False, True, True],
            [
                "$$\\binom{7}{3}=\\binom{7}{4}=35$$\n\n$$P=35/128$$\n\nMatching these figures to the claim, the statement is True.",
                "Symmetry $k\\leftrightarrow n-k$ at $p=1/2$.\n\nMatching these figures to the claim, the statement is True.",
                "Variances $1.6$ and $2.4$; $2.4\\ne 3.2$.\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$\\binom{5}{1}=\\binom{5}{4}$ and the powers of $0.2$ and $0.8$ match after swapping.\n\nMatching these figures to the claim, the statement is True.",
                "$$1-0.729=0.271$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: symmetric PMF values, symmetric tails, nonlinear variance in p, complementary PMF identity, and a numerical at-least-one.",
        ),
        (
            60,
            5,
            [
                "If $X \\sim \\mathrm{Bin}\\bigl(3,\\tfrac{2}{5}\\bigr)$, then $P(X=1)=\\dfrac{54}{125}$.",
                "If $X \\sim \\mathrm{Bin}(10,0.5)$, then $P(X \\ge 6) > \\tfrac{1}{2}$.",
                "For $X \\sim \\mathrm{Bin}(20,0.25)$, $E(X)=5$ and $\\mathrm{SD}(X)=\\sqrt{3.75}$.",
                "The ratio $\\dfrac{P(X=k+1)}{P(X=k)}$ for $X\\sim\\mathrm{Bin}(n,p)$ equals $\\dfrac{n-k}{k+1}\\cdot\\dfrac{p}{1-p}$.",
                "Changing $n$ from $4$ to $5$ with $p=0.5$ multiplies $P(X=0)$ by $\\tfrac{1}{2}$.",
            ],
            [True, False, True, True, True],
            [
                "$$P=3\\cdot\\tfrac{2}{5}\\cdot\\tfrac{9}{25}=\\dfrac{54}{125}$$\n\nMatching these figures to the claim, the statement is True.",
                "By symmetry $P(X\\ge 6)=P(X\\le 4)<\\tfrac{1}{2}$ because $P(X=5)>0$.\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$$E=5,\\quad \\mathrm{Var}=3.75,\\quad \\mathrm{SD}=\\sqrt{3.75}$$\n\nMatching these figures to the claim, the statement is True.",
                "This is the standard consecutive binomial PMF ratio.\n\nMatching these figures to the claim, the statement is True.",
                "$$(1/2)^{5}=\\tfrac{1}{2}\\cdot(1/2)^{4}$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: a three-trial PMF, a majority-tail trap, mean and SD, the consecutive PMF ratio, and scaling of P(X=0).",
        ),
        (
            61,
            6,
            [
                "If $X \\sim \\mathrm{Bin}(5,0.6)$, then $P(X=5)=(0.6)^{5}=0.07776$.",
                "If $X \\sim \\mathrm{Bin}(4,0.3)$, then $P(X \\ge 1)=1-(0.7)^{4}$.",
                "For $X \\sim \\mathrm{Bin}(16,0.25)$, one has $\\mathrm{Var}(X)=E(X)$.",
                "If $X \\sim \\mathrm{Bin}(8,0.5)$ and $Y \\sim \\mathrm{Bin}(8,0.25)$, then $\\dfrac{E(X)}{E(Y)}=2$.",
                "The chance of at least one six in $4$ independent fair die rolls equals $1-\\left(\\dfrac{5}{6}\\right)^{4}$.",
            ],
            [True, True, False, True, True],
            [
                "$$P(X=5)=(0.6)^{5}=0.07776$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(X\\ge 1)=1-P(X=0)=1-(0.7)^{4}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$E=4,\\quad \\mathrm{Var}=3 \\ne 4$$\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$$E(X)=4,\\quad E(Y)=2,\\quad \\text{ratio }=2$$\n\nMatching these figures to the claim, the statement is True.",
                "Binomial trials with $p=1/6$ give the complement formula.\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: P(X=n), an at-least-one complement, mean versus variance, a ratio of means, and at least one six.",
        ),
        (
            62,
            7,
            [
                "If $X \\sim \\mathrm{Bin}(9,0.5)$, then $P(X=5)=\\dfrac{63}{256}$.",
                "If $X \\sim \\mathrm{Bin}(7,0.2)$, then $P(X \\ge 2)=1-P(X=0)-P(X=1)$.",
                "For $X \\sim \\mathrm{Bin}(50,0.02)$, $E(X)=1$ and $\\mathrm{Var}(X)=0.98$.",
                "If $X \\sim \\mathrm{Bin}(12,0.4)$ and $Y \\sim \\mathrm{Bin}(12,0.6)$, then $\\mathrm{SD}(X)=\\mathrm{SD}(Y)$.",
                "For fixed $p \\in (0,1)$, the map $n \\mapsto 1-(1-p)^{n}$ is strictly increasing in the positive integer $n$.",
            ],
            [True, True, True, True, True],
            [
                "$$P=\\binom{9}{5}/512=126/512=63/256$$\n\nMatching these figures to the claim, the statement is True.",
                "Complement of $\\{0,1\\}$ on $\\{0,\\dots,7\\}$.\n\nMatching these figures to the claim, the statement is True.",
                "$$E=1,\\quad \\mathrm{Var}=0.98$$\n\nMatching these figures to the claim, the statement is True.",
                "Both variances equal $12\\cdot 0.4\\cdot 0.6=2.88$.\n\nMatching these figures to the claim, the statement is True.",
                "Since $0<1-p<1$, raising $n$ decreases $(1-p)^{n}$.\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: a fair-coin PMF, a two-term complement, rare-event moments, SD symmetry in p, and monotonicity of at-least-one.",
        ),
        (
            63,
            8,
            [
                "If $X \\sim \\mathrm{Bin}\\bigl(4,\\tfrac{1}{4}\\bigr)$, then $P(X=2)=\\dfrac{27}{128}$.",
                "If $X \\sim \\mathrm{Bin}(5,0.5)$, then $P(X \\ge 3)=P(X \\le 2)$.",
                "For $X \\sim \\mathrm{Bin}(10,0.9)$, $\\mathrm{SD}(X)=0.9$.",
                "Comparing $X\\sim\\mathrm{Bin}(5,0.5)$ and $Y\\sim\\mathrm{Bin}(10,0.5)$, one has $E(Y)=2E(X)$ and $\\mathrm{Var}(Y)=2\\mathrm{Var}(X)$.",
                "The probability of no successes in $n=6$ trials with $p=\\tfrac{1}{3}$ equals $\\left(\\tfrac{2}{3}\\right)^{6}$.",
            ],
            [True, True, False, True, True],
            [
                "$$P=6\\cdot\\dfrac{1}{16}\\cdot\\dfrac{9}{16}=\\dfrac{54}{256}=\\dfrac{27}{128}$$\n\nMatching these figures to the claim, the statement is True.",
                "Symmetry pairs $\\{0,1,2\\}$ with $\\{5,4,3\\}$.\n\nMatching these figures to the claim, the statement is True.",
                "$$\\mathrm{Var}=0.9,\\quad \\mathrm{SD}=\\sqrt{0.9}\\ne 0.9$$\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$$E: 2.5\\to 5,\\quad \\mathrm{Var}: 1.25\\to 2.5$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(X=0)=(2/3)^{6}$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: a p=1/4 PMF, a symmetric half-split, Var versus SD, linear scaling in n, and P(X=0).",
        ),
        (
            64,
            9,
            [
                "If $X \\sim \\mathrm{Bin}(8,0.5)$, then $P(X=4)=\\dfrac{35}{128}$.",
                "If $X \\sim \\mathrm{Bin}(3,0.8)$, then $P(X \\ge 2)=3(0.8)^{2}(0.2)+(0.8)^{3}$.",
                "For $X \\sim \\mathrm{Bin}(25,0.2)$, $E(X)=5$ and $\\mathrm{Var}(X)=4$.",
                "If $X \\sim \\mathrm{Bin}(6,0.5)$ and $Y \\sim \\mathrm{Bin}(6,0.5)$ are independent, then $X+Y \\sim \\mathrm{Bin}(12,0.5)$.",
                "At least one success with $n=2$, $p=0.4$ equals $0.64$, which is less than $2\\cdot 0.4=0.8$.",
            ],
            [True, True, True, True, True],
            [
                "$$P=\\binom{8}{4}/256=70/256=35/128$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(X\\ge 2)=P(X=2)+P(X=3)$$\n\nMatching these figures to the claim, the statement is True.",
                "$$E=5,\\quad \\mathrm{Var}=4$$\n\nMatching these figures to the claim, the statement is True.",
                "Independent common-$p$ binomials add their $n$ parameters.\n\nMatching these figures to the claim, the statement is True.",
                "$$1-0.36=0.64<0.8$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: central PMF, an upper-tail sum, moments, adding independent binomials, and at-least-one versus np.",
        ),
        (
            65,
            10,
            [
                "If $X \\sim \\mathrm{Bin}\\bigl(5,\\tfrac{1}{5}\\bigr)$, then $P(X=0)=\\left(\\tfrac{4}{5}\\right)^{5}$.",
                "If $X \\sim \\mathrm{Bin}(9,0.5)$, then $P(X \\le 3) < P(X \\ge 6)$.",
                "For $X \\sim \\mathrm{Bin}\\bigl(18,\\tfrac{1}{3}\\bigr)$, $E(X)=6$ and $\\mathrm{SD}(X)=2$.",
                "The binomial variance $np(1-p)$ as a function of $p\\in[0,1]$ for fixed $n$ is maximized at $p=\\tfrac{1}{2}$.",
                "If each of $n=10$ alarms triggers independently with probability $0.05$, then $P(\\text{at least one trigger})=1-(0.95)^{10}$.",
            ],
            [True, False, True, True, True],
            [
                "$$P(X=0)=(4/5)^{5}$$\n\nMatching these figures to the claim, the statement is True.",
                "Symmetry forces $P(X\\le 3)=P(X\\ge 6)$.\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$$E=6,\\quad \\mathrm{Var}=4,\\quad \\mathrm{SD}=2$$\n\nMatching these figures to the claim, the statement is True.",
                "The quadratic $p(1-p)$ peaks at $p=1/2$.\n\nMatching these figures to the claim, the statement is True.",
                "Complement of zero triggers.\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: P(X=0), a false asymmetric-tail claim, mean and SD, variance maximized at p=1/2, and an at-least-one alarm probability.",
        ),
        (
            66,
            11,
            [
                "If $X \\sim \\mathrm{Bin}(6,0.5)$, then $P(X=3)=\\dfrac{5}{16}$.",
                "If $X \\sim \\mathrm{Bin}(4,0.25)$, then $P(X \\ge 3)=\\binom{4}{3}(0.25)^{3}(0.75)+(0.25)^{4}$.",
                "For $X \\sim \\mathrm{Bin}(30,0.1)$, $E(X)=3$ and $\\mathrm{Var}(X)=2.7$.",
                "If $X \\sim \\mathrm{Bin}(7,0.4)$ and $Y \\sim \\mathrm{Bin}(7,0.6)$, then $E(X)+E(Y)=7$.",
                "With $p=0.5$ and $n=3$, $1-(1-p)^{n}=\\dfrac{7}{8}$.",
            ],
            [True, True, True, True, True],
            [
                "$$P=20/64=5/16$$\n\nMatching these figures to the claim, the statement is True.",
                "$$P(X\\ge 3)=P(X=3)+P(X=4)$$\n\nMatching these figures to the claim, the statement is True.",
                "$$E=3,\\quad \\mathrm{Var}=2.7$$\n\nMatching these figures to the claim, the statement is True.",
                "$$2.8+4.2=7$$\n\nMatching these figures to the claim, the statement is True.",
                "$$1-(1/2)^{3}=7/8$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: central PMF, a three-or-more tail, rare-event moments, complementary means summing to n, and at-least-one at p=1/2.",
        ),
        (
            67,
            12,
            [
                "If $X \\sim \\mathrm{Bin}(10,0.2)$, then $P(X=2)=\\binom{10}{2}(0.2)^{2}(0.8)^{8}$.",
                "If $X \\sim \\mathrm{Bin}(5,0.5)$, then $P(X \\ge 1)=\\dfrac{31}{32}$.",
                "For $X \\sim \\mathrm{Bin}(12,0.25)$, $\\mathrm{SD}(X)=\\dfrac{3}{2}$.",
                "The ratio $\\dfrac{\\mathrm{Var}(X)}{E(X)}$ for $X\\sim\\mathrm{Bin}(n,p)$ with $p\\in(0,1)$ equals $1-p$.",
                "Increasing $p$ from $0.1$ to $0.2$ with $n=5$ more than doubles $1-(1-p)^{5}$.",
            ],
            [True, True, True, True, False],
            [
                "This is the binomial PMF at $k=2$.\n\nMatching these figures to the claim, the statement is True.",
                "$$1-(1/2)^{5}=31/32$$\n\nMatching these figures to the claim, the statement is True.",
                "$$\\mathrm{Var}=9/4,\\quad \\mathrm{SD}=3/2$$\n\nMatching these figures to the claim, the statement is True.",
                "$$\\dfrac{np(1-p)}{np}=1-p$$\n\nMatching these figures to the claim, the statement is True.",
                "$$1-(0.9)^{5}\\approx "
                + A(1 - 0.9**5)
                + ",\\quad 1-(0.8)^{5}\\approx "
                + A(1 - 0.8**5)
                + "$$\n\n"
                "and the second is less than twice the first.\n\n"
                "The solved result does not agree with the claim, so the statement is False.",
            ],
            "Mixed binomial claims: a PMF template, at-least-one for fair bits, an exact SD, the Var/mean ratio, and a false doubling claim when p increases.",
        ),
        (
            68,
            13,
            [
                "If $X \\sim \\mathrm{Bin}\\bigl(7,\\tfrac{1}{2}\\bigr)$, then $P(X=0)=\\dfrac{1}{128}$.",
                "If $X \\sim \\mathrm{Bin}(6,0.4)$, then $P(X > 5)=P(X=6)=(0.4)^{6}$.",
                "For $X \\sim \\mathrm{Bin}(40,0.5)$, $E(X)=20$ and $\\mathrm{Var}(X)=10$.",
                "If $X \\sim \\mathrm{Bin}(9,0.3)$ and $Y \\sim \\mathrm{Bin}(9,0.3)$, then it is not generally true that $X+Y \\sim \\mathrm{Bin}(18,0.3)$ unless $X,Y$ are independent.",
                "Geometric waiting time until first success is not a binomial count, even though both use a success probability $p$.",
            ],
            [True, True, True, True, True],
            [
                "$$P(X=0)=(1/2)^{7}=1/128$$\n\nMatching these figures to the claim, the statement is True.",
                "On $\\{0,\\dots,6\\}$, $X>5$ means only $X=6$.\n\nMatching these figures to the claim, the statement is True.",
                "$$E=20,\\quad \\mathrm{Var}=10$$\n\nMatching these figures to the claim, the statement is True.",
                "Independence is required for the sum of binomials with common $p$ to remain binomial.\n\nMatching these figures to the claim, the statement is True.",
                "Binomial fixes $n$; geometric counts trials until the first success.\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: P(X=0), a singleton upper tail, moments at p=1/2, independence to add binomials, and binomial versus geometric.",
        ),
        (
            69,
            14,
            [
                "If $X \\sim \\mathrm{Bin}(5,0.4)$, then $P(X=3)=0.2304$.",
                "If $X \\sim \\mathrm{Bin}(8,0.5)$, then $P(X \\le 2)=P(X \\ge 6)$.",
                "For $X \\sim \\mathrm{Bin}(15,0.2)$, $E(X)=3 > \\mathrm{SD}(X)=\\sqrt{2.4}$.",
                "Among binomials with $n=20$, the variance at $p=0.3$ exceeds the variance at $p=0.1$.",
                "At least one defective in a sample of $n=20$ with $p=0.01$ equals $1-(0.99)^{20}$, which is less than $0.2$.",
            ],
            [True, True, True, True, True],
            [
                "$$10\\cdot(0.4)^{3}\\cdot(0.6)^{2}=0.2304$$\n\nMatching these figures to the claim, the statement is True.",
                "Symmetry $k\\leftrightarrow 8-k$.\n\nMatching these figures to the claim, the statement is True.",
                "$$E=3>\\sqrt{2.4}\\approx 1.55$$\n\nMatching these figures to the claim, the statement is True.",
                "$$4.2>1.8$$\n\nMatching these figures to the claim, the statement is True.",
                "$$1-(0.99)^{20}\\approx " + A(1 - 0.99**20) + " < 0.2$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: a decimal PMF, symmetric tails, mean above SD, variance comparison in p, and a small at-least-one probability.",
        ),
        (
            70,
            15,
            [
                "If $X \\sim \\mathrm{Bin}(3,0.5)$, the distribution of $X$ is $\\bigl(\\tfrac{1}{8},\\tfrac{3}{8},\\tfrac{3}{8},\\tfrac{1}{8}\\bigr)$ on $0,1,2,3$.",
                "If $X \\sim \\mathrm{Bin}(10,0.4)$, then $P(X \\ge 10)=P(X=10)=(0.4)^{10}$.",
                "For $X \\sim \\mathrm{Bin}\\bigl(24,\\tfrac{1}{6}\\bigr)$, $E(X)=4$ and $\\mathrm{Var}(X)=\\tfrac{10}{3}$.",
                "If $X \\sim \\mathrm{Bin}(n,p)$ then $\\mathrm{Var}(n-X)=\\mathrm{Var}(X)$.",
                "The identity $1-(1-p)^{n}=\\sum_{k=1}^{n}\\binom{n}{k}p^{k}(1-p)^{n-k}$ holds for binomial probabilities.",
            ],
            [True, True, True, True, True],
            [
                "Coefficients $1,3,3,1$ over $8$.\n\nMatching these figures to the claim, the statement is True.",
                "Only $k=10$ is in the event when $n=10$.\n\nMatching these figures to the claim, the statement is True.",
                "$$E=4,\\quad \\mathrm{Var}=10/3$$\n\nMatching these figures to the claim, the statement is True.",
                "$n-X\\sim\\mathrm{Bin}(n,1-p)$ shares variance $np(1-p)$.\n\nMatching these figures to the claim, the statement is True.",
                "Both sides equal $P(X\\ge 1)$.\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: the full three-trial fair law, a singleton top tail, die-style moments, variance under complement counting, and the expansion of at-least-one.",
        ),
        (
            71,
            16,
            [
                "If $X \\sim \\mathrm{Bin}(4,0.6)$, then $P(X=2)=0.3456$.",
                "If $X \\sim \\mathrm{Bin}(12,0.5)$, then $P(X \\ge 7) = P(X \\le 5)$.",
                "For $X \\sim \\mathrm{Bin}(9,0.5)$, mean and variance satisfy $E(X)=2\\,\\mathrm{Var}(X)$.",
                "If $X \\sim \\mathrm{Bin}(20,0.25)$ and $Y \\sim \\mathrm{Bin}(40,0.25)$, then $\\dfrac{E(Y)}{E(X)}=2$ and $\\dfrac{\\mathrm{Var}(Y)}{\\mathrm{Var}(X)}=2$.",
                "For $n=8$ and $p=0.25$, $1-(0.75)^{8} > 0.9$.",
            ],
            [True, True, True, True, False],
            [
                "$$6\\cdot(0.6)^{2}\\cdot(0.4)^{2}=0.3456$$\n\nMatching these figures to the claim, the statement is True.",
                "Symmetry about $6$.\n\nMatching these figures to the claim, the statement is True.",
                "$$E=4.5=2\\cdot 2.25$$\n\nMatching these figures to the claim, the statement is True.",
                "Means $5$ and $10$; variances $3.75$ and $7.5$.\n\nMatching these figures to the claim, the statement is True.",
                "$$1-(0.75)^{8}\\approx " + A(1 - 0.75**8) + " < 0.9$$\n\nThe solved result does not agree with the claim, so the statement is False.",
            ],
            "Mixed binomial claims: a decimal PMF, symmetric tails, E=2Var at p=1/2, linear scaling in n, and a failed 0.9 threshold.",
        ),
        (
            72,
            17,
            [
                "If $X \\sim \\mathrm{Bin}(11,0.5)$, then $P(X=5)=P(X=6)=\\dfrac{\\binom{11}{5}}{2048}$.",
                "If $X \\sim \\mathrm{Bin}(6,0.3)$, then $P(X \\le 0)=(0.7)^{6}$.",
                "For $X \\sim \\mathrm{Bin}(14,0.5)$, $\\mathrm{Var}(X)=3.5$.",
                "A claim that $X\\sim\\mathrm{Bin}(10,0.5)$ has the same distribution as a geometric number of trials until the first head is false.",
                "If $p$ is replaced by $1-p$ with $n$ fixed, then $P(X\\ge 1)$ generally changes (unless $p=\\tfrac{1}{2})$.",
            ],
            [True, True, True, True, True],
            [
                "$\\binom{11}{5}=\\binom{11}{6}$; divide by $2^{11}$.\n\nMatching these figures to the claim, the statement is True.",
                "$$P(X\\le 0)=P(X=0)=(0.7)^{6}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$\\mathrm{Var}=14\\cdot 0.25=3.5$$\n\nMatching these figures to the claim, the statement is True.",
                "Different supports and meanings of the random index.\n\nMatching these figures to the claim, the statement is True.",
                "$1-(1-p)^{n}$ versus $1-p^{n}$ differ when $p\\ne 1/2$.\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: twin central probabilities, P(X=0) as a lower tail, variance at p=1/2, binomial≠geometric, and at-least-one under p↔1−p.",
        ),
        (
            73,
            18,
            [
                "If $X \\sim \\mathrm{Bin}(2,0.3)$, then $P(X=1)=0.42$.",
                "If $X \\sim \\mathrm{Bin}(15,0.5)$, then $P(X \\ge 8)=P(X \\le 7)$.",
                "For $X \\sim \\mathrm{Bin}(8,0.75)$, $E(X)=6$ and $\\mathrm{Var}(X)=1.5$.",
                "If $X \\sim \\mathrm{Bin}(5,0.2)$ and $Y \\sim \\mathrm{Bin}(20,0.2)$, then $\\dfrac{P(Y=0)}{P(X=0)}=(0.8)^{15}$.",
                "The probability of at least two successes is not equal to $1-(1-p)^{n}$ in general.",
            ],
            [True, True, True, True, True],
            [
                "$$P(X=1)=2\\cdot 0.3\\cdot 0.7=0.42$$\n\nMatching these figures to the claim, the statement is True.",
                "Pair $k$ with $15-k$.\n\nMatching these figures to the claim, the statement is True.",
                "$$E=6,\\quad \\mathrm{Var}=1.5$$\n\nMatching these figures to the claim, the statement is True.",
                "$$(0.8)^{20}/(0.8)^{5}=(0.8)^{15}$$\n\nMatching these figures to the claim, the statement is True.",
                "$1-(1-p)^{n}=P(X\\ge 1)$ includes $X=1$.\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: a two-trial PMF, a symmetric half-split, moments at p=3/4, a P(X=0) ratio, and at-least-two versus at-least-one.",
        ),
        (
            74,
            19,
            [
                "If $X \\sim \\mathrm{Bin}\\bigl(8,\\tfrac{1}{3}\\bigr)$, then $P(X=0)=\\left(\\tfrac{2}{3}\\right)^{8}$.",
                "If $X \\sim \\mathrm{Bin}(4,0.5)$, then $P(X \\ge 2)=\\dfrac{11}{16}$.",
                "For $X \\sim \\mathrm{Bin}(100,0.05)$, $E(X)=5$ and $\\mathrm{SD}(X)=\\sqrt{4.75}$.",
                "Two binomial laws with the same mean $np$ need not have the same variance.",
                "For $n=1$, the at-least-one probability $1-(1-p)^{1}$ equals $p$.",
            ],
            [True, True, True, True, True],
            [
                "$$P(X=0)=(2/3)^{8}$$\n\nMatching these figures to the claim, the statement is True.",
                "$$1-1/16-4/16=11/16$$\n\nMatching these figures to the claim, the statement is True.",
                "$$E=5,\\quad \\mathrm{Var}=4.75,\\quad \\mathrm{SD}=\\sqrt{4.75}$$\n\nMatching these figures to the claim, the statement is True.",
                "Example: $\\mathrm{Bin}(10,0.5)$ and $\\mathrm{Bin}(20,0.25)$ both have mean $5$ but variances $2.5$ and $3.75$.\n\nMatching these figures to the claim, the statement is True.",
                "$$1-(1-p)=p$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: P(X=0), a computed upper half, rare-event SD, equal means with unequal variances, and the n=1 edge case.",
        ),
        (
            75,
            20,
            [
                "If $X \\sim \\mathrm{Bin}(6,0.25)$, then $P(X=1)=6\\cdot(0.25)\\cdot(0.75)^{5}$.",
                "If $X \\sim \\mathrm{Bin}(9,0.5)$, then $P(X \\ge 5) > \\dfrac{1}{2}$.",
                "For $X \\sim \\mathrm{Bin}(7,0.2)$, $E(X)=1.4$ and $\\mathrm{Var}(X)=1.12$.",
                "If $X \\sim \\mathrm{Bin}(10,0.4)$ and $Y \\sim \\mathrm{Bin}(10,0.6)$, then $\\dfrac{E(X)}{E(Y)}=\\dfrac{2}{3}$.",
                "With $n=5$ and $p=0.2$, $1-(0.8)^{5}$ exceeds $0.65$.",
            ],
            [True, False, True, True, True],
            [
                "$$P(X=1)=\\binom{6}{1}(0.25)(0.75)^{5}$$\n\nMatching these figures to the claim, the statement is True.",
                "Symmetry gives $P(X\\ge 5)=P(X\\le 4)=\\tfrac{1}{2}$, not strictly greater.\n\nThe solved result does not agree with the claim, so the statement is False.",
                "$$E=1.4,\\quad \\mathrm{Var}=1.12$$\n\nMatching these figures to the claim, the statement is True.",
                "$$4/6=2/3$$\n\nMatching these figures to the claim, the statement is True.",
                "$$1-(0.8)^{5}\\approx " + A(1 - 0.8**5) + " > 0.65$$\n\nMatching these figures to the claim, the statement is True.",
            ],
            "Mixed binomial claims: a one-success PMF, a strict half-tail trap, mean and variance, a mean ratio for complementary p, and a numerical at-least-one bound.",
        ),
    ]

    for row in rows:
        add(*row)

    assert len(T) == 20, len(T)
    return T


def main():
    # verify one ch12 pmf
    assert Fraction(math.comb(6, 2)) * Fraction(1, 3) ** 2 * Fraction(2, 3) ** 4 == Fraction(80, 243)

    ch12 = scrub(ch12_tasks())
    ch13 = scrub(ch13_tasks())
    validate(ch12, "12", 199, 218, "12.6")
    validate(ch13, "13", 56, 75, "13.5")

    (OUT / "math-ch12-exam.json").write_text(
        json.dumps({"tasks": ch12}, indent=1, ensure_ascii=False) + "\n", encoding="utf-8"
    )
    (OUT / "math-ch13-exam.json").write_text(
        json.dumps({"tasks": ch13}, indent=1, ensure_ascii=False) + "\n", encoding="utf-8"
    )
    print("Wrote math-ch12-exam.json", len(ch12))
    print("Wrote math-ch13-exam.json", len(ch13))
    # true/false balance
    for name, tasks in [("ch12", ch12), ("ch13", ch13)]:
        flat = [a for t in tasks for a in t["answer_key"]]
        print(name, "True", sum(flat), "False", len(flat) - sum(flat))


if __name__ == "__main__":
    main()
