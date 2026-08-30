#!/usr/bin/env python3
"""Generate math-ch12-exam.json and math-ch13-exam.json (textual T/F banks)."""

from __future__ import annotations

import json
import math
from fractions import Fraction
from pathlib import Path

OUT_DIR = Path("/workspace/src/data")


def frac_tex(f: Fraction) -> str:
    f = Fraction(f).limit_denominator()
    if f.denominator == 1:
        return str(f.numerator)
    sign = "-" if f < 0 else ""
    f = abs(f)
    return f"{sign}\\dfrac{{{f.numerator}}}{{{f.denominator}}}"


def approx(x: float, places: int = 4) -> str:
    return f"{x:.{places}f}".rstrip("0").rstrip(".")


def expl(letter: str, truth: bool, body: str) -> str:
    tag = "True" if truth else "False"
    body = body.strip()
    if not body.endswith("."):
        body += "."
    closer = f"so the statement is {tag}."
    if body.lower().endswith(f"so the statement is {tag}.".lower()):
        return f"**{letter}.** → {tag}\n\n{body}"
    # normalize common endings
    for alt in (
        f"Matching these figures to the claim, the statement is {tag}.",
        f"Comparing this value with the claim shows the statement is {tag}.",
        f"The solved result agrees with the claim, so the statement is {tag}.",
        f"The solved result does not agree with the claim, so the statement is {tag}.",
        f"The statement is {tag}.",
    ):
        if body.endswith(alt):
            return f"**{letter}.** → {tag}\n\n{body}"
    return f"**{letter}.** → {tag}\n\n{body}\n\n{closer[0].upper() + closer[1:]}"


def task(
    *,
    id_num: int,
    prefix: str,
    title_n: int,
    subsection: str,
    statements: list[str],
    answers: list[bool],
    explanations: list[str],
    overview: str,
    difficulty: str = "4/5",
) -> dict:
    assert len(statements) == 5 == len(answers) == len(explanations)
    letters = "ABCDE"
    tactical = []
    for i, (ans, body) in enumerate(zip(answers, explanations)):
        tactical.append(expl(letters[i], ans, body))
    case = f"MATH {prefix}.{id_num}" if prefix == "12" else f"MATH {prefix}.{id_num}"
    # case_id formatting: MATH 12.199 vs MATH 13.56
    if prefix == "12":
        case_id = f"MATH 12.{id_num}"
        tid = f"math-12-{id_num}"
    else:
        case_id = f"MATH 13.{id_num}"
        tid = f"math-13-{id_num}"
    return {
        "id": tid,
        "case_id": case_id,
        "title": f"Exam-style tasks — {title_n}",
        "subsection": subsection,
        "context": "Evaluate each statement. Mark it TRUE or FALSE.",
        "statements": statements,
        "answer_key": answers,
        "tactical_explanations": tactical,
        "difficulty_level": difficulty,
        "sort_order": id_num,
        "solution_overview": overview,
        "placeholder": False,
    }


# ---------------------------------------------------------------------------
# Chapter 12 — Elementary probability exam bank (ids 199–218)
# ---------------------------------------------------------------------------


def build_ch12() -> list[dict]:
    tasks: list[dict] = []

    # --- Task 1 (199) ---
    # A combo: cards without replacement
    # P(2 aces in 3 cards from 52) = C(4,2)*C(48,1)/C(52,3)
    c_ace2 = math.comb(4, 2) * math.comb(48, 1)
    c_tot3 = math.comb(52, 3)
    p_ace = Fraction(c_ace2, c_tot3)  # 288/22100 = 72/5525
    claim_a = Fraction(1, 20)
    ans_a = p_ace > claim_a  # 72/5525 ≈ 0.01303 < 0.05, wait claim?

    # Redesign A carefully:
    # "Drawing 3 cards from a standard 52-card deck without replacement, the probability of getting exactly 2 aces is greater than 1/50."
    # 72/5525 ≈ 0.01303, 1/50=0.02 → False
    ans_a = False

    # B inclusion-exclusion: P(A∪B)=0.6, P(A)=0.4, P(B)=0.35 → P(A∩B)=0.15
    # Claim: P(A∩B)=0.15 → True
    ans_b = True

    # C conditional independence trap:
    # P(A)=0.5, P(B)=0.4, P(A∩B)=0.25. Claim: A,B independent.
    # Need 0.5*0.4=0.2 ≠ 0.25 → False
    ans_c = False

    # D discrete RV: X takes 0,1,2 with probs 1/4,1/2,1/4. E(X)=1, Var=1/2, SD=√(1/2)=√2/2
    # Claim: Var(X)=1/2 → True
    ans_d = True

    # E Bayes two causes:
    # Factory: 60% line A (defect 2%), 40% line B (defect 5%). Given defect, P(from A)=?
    # P(D)=0.6*0.02+0.4*0.05=0.012+0.02=0.032
    # P(A|D)=0.012/0.032=3/8=0.375
    # Claim: greater than 40% → False
    ans_e = False

    tasks.append(
        task(
            id_num=199,
            prefix="12",
            title_n=1,
            subsection="12.6",
            statements=[
                "Three cards are drawn at random without replacement from a standard 52-card deck. The probability of obtaining exactly two aces is greater than $\\dfrac{1}{50}$.",
                "Events $A$ and $B$ satisfy $P(A)=0.40$, $P(B)=0.35$, and $P(A \\cup B)=0.60$. Then $P(A \\cap B)=0.15$.",
                "Events $A$ and $B$ satisfy $P(A)=0.50$, $P(B)=0.40$, and $P(A \\cap B)=0.25$. Then $A$ and $B$ are independent.",
                "A discrete random variable $X$ takes values $0$, $1$, and $2$ with probabilities $\\dfrac{1}{4}$, $\\dfrac{1}{2}$, and $\\dfrac{1}{4}$ respectively. Then $\\mathrm{Var}(X)=\\dfrac{1}{2}$.",
                "Factory line A makes $60\\%$ of items with defect rate $2\\%$; line B makes $40\\%$ with defect rate $5\\%$. Given that a randomly chosen item is defective, the probability it came from line A is greater than $40\\%$.",
            ],
            answers=[ans_a, ans_b, ans_c, ans_d, ans_e],
            explanations=[
                f"""A standard deck has $4$ aces and $48$ non-aces. Drawing $3$ cards without replacement,

$$P(\\text{{exactly 2 aces}}) = \\dfrac{{\\binom{{4}}{{2}}\\binom{{48}}{{1}}}}{{\\binom{{52}}{{3}}}}$$

Compute the pieces:

$$\\binom{{4}}{{2}}=6,\\quad \\binom{{48}}{{1}}=48,\\quad \\binom{{52}}{{3}}=22100$$

$$P = \\dfrac{{6 \\cdot 48}}{{22100}} = \\dfrac{{288}}{{22100}} = \\dfrac{{72}}{{5525}}$$

Numerically,

$$\\dfrac{{72}}{{5525}} \\approx {approx(float(p_ace), 5)}$$

while $\\dfrac{{1}}{{50}}=0.02$. Since ${approx(float(p_ace), 5)} < 0.02$, the probability is not greater than $\\dfrac{{1}}{{50}}$.

The solved result does not agree with the claim, so the statement is False.""",
                """Inclusion-exclusion gives

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

Substitute the given values:

$$0.60 = 0.40 + 0.35 - P(A \\cap B)$$

$$0.60 = 0.75 - P(A \\cap B)$$

$$P(A \\cap B) = 0.75 - 0.60 = 0.15$$

The intersection probability is exactly $0.15$.

Matching these figures to the claim, the statement is True.""",
                """Independence requires $P(A \\cap B) = P(A)P(B)$.

Compute the product:

$$P(A)P(B) = 0.50 \\cdot 0.40 = 0.20$$

But the given intersection is $0.25$, and $0.25 \\ne 0.20$.

Equivalently, $P(A \\mid B) = \\dfrac{0.25}{0.40} = 0.625 \\ne P(A)=0.50$.

The events fail the independence test, so the statement is False.""",
                """First find the mean:

$$E(X) = 0 \\cdot \\dfrac{1}{4} + 1 \\cdot \\dfrac{1}{2} + 2 \\cdot \\dfrac{1}{4} = 0 + \\dfrac{1}{2} + \\dfrac{1}{2} = 1$$

Next compute $E(X^{2})$:

$$E(X^{2}) = 0^{2} \\cdot \\dfrac{1}{4} + 1^{2} \\cdot \\dfrac{1}{2} + 2^{2} \\cdot \\dfrac{1}{4} = 0 + \\dfrac{1}{2} + 1 = \\dfrac{3}{2}$$

Variance:

$$\\mathrm{Var}(X) = E(X^{2}) - \\bigl(E(X)\\bigr)^{2} = \\dfrac{3}{2} - 1^{2} = \\dfrac{1}{2}$$

(Note that the standard deviation would be $\\sqrt{\\dfrac{1}{2}}$, which is different from the variance.)

Matching these figures to the claim, the statement is True.""",
                """Let $A$ be "from line A" and $D$ be "defective". By the law of total probability,

$$P(D) = 0.60 \\cdot 0.02 + 0.40 \\cdot 0.05 = 0.012 + 0.020 = 0.032$$

Bayes' theorem:

$$P(A \\mid D) = \\dfrac{P(D \\mid A)P(A)}{P(D)} = \\dfrac{0.012}{0.032} = \\dfrac{3}{8} = 0.375$$

As a percentage, $37.5\\%$, which is not greater than $40\\%$. Base-rate neglect would push toward line A (larger share), but line B's higher defect rate pulls the posterior down.

The solved result does not agree with the claim, so the statement is False.""",
            ],
            overview="Mixed exam claims: a three-card ace draw without replacement, inclusion-exclusion for an intersection, an independence test, variance of a three-point discrete law, and two-cause Bayes for a defective item.",
        )
    )

    # --- Task 2 (200) ---
    # A: urn without replacement - 5 red, 7 blue; draw 2. P(both red)=C(5,2)/C(12,2)=10/66=5/33
    # Claim: equals 25/144 (with-replacement trap) → False
    # B: P(A∪B∪C) with pairwise and triple
    # P(A)=0.3,P(B)=0.4,P(C)=0.2, pairwise all 0.1, triple 0.05
    # P(union)=0.3+0.4+0.2 -0.1-0.1-0.1 +0.05=0.9-0.3+0.05=0.65
    # Claim: 0.65 → True
    # C: P(A|B)=0.6, P(B)=0.5, P(A)=0.4. Claim: P(B|A)=0.75
    # P(A∩B)=0.6*0.5=0.3; P(B|A)=0.3/0.4=0.75 → True
    # D: X: 1,2,3,4 each 1/4. E=2.5, Var=(1+4+9+16)/4 - 6.25 = 7.5-6.25=1.25, SD=√1.25=√5/2
    # Claim: SD(X)=√(5/4)=√1.25 → True  (√(5/4)=√1.25 yes)
    # E: three diseases prior equal 1/3; sensitivities... simpler two-test Bayes
    # Medical: disease prior 1%, test sensitivity 99%, false positive 2%. P(D|+) =?
    # P(+)=0.01*0.99+0.99*0.02=0.0099+0.0198=0.0297
    # P(D|+)=0.0099/0.0297=1/3≈0.333
    # Claim: greater than 90% (common trap) → False

    p_both_red = Fraction(math.comb(5, 2), math.comb(12, 2))
    tasks.append(
        task(
            id_num=200,
            prefix="12",
            title_n=2,
            subsection="12.6",
            statements=[
                "An urn holds $5$ red and $7$ blue balls. Two balls are drawn without replacement. The probability both are red equals $\\dfrac{25}{144}$.",
                "Events $A$, $B$, and $C$ satisfy $P(A)=0.30$, $P(B)=0.40$, $P(C)=0.20$, every pairwise intersection has probability $0.10$, and $P(A \\cap B \\cap C)=0.05$. Then $P(A \\cup B \\cup C)=0.65$.",
                "Given $P(A \\mid B)=0.60$, $P(B)=0.50$, and $P(A)=0.40$, it follows that $P(B \\mid A)=0.75$.",
                "A fair four-sided die yields $X \\in \\{1,2,3,4\\}$ each with probability $\\dfrac{1}{4}$. Then the standard deviation of $X$ equals $\\sqrt{\\dfrac{5}{4}}$.",
                "A disease has prior probability $1\\%$. A test detects it with sensitivity $99\\%$ and has a $2\\%$ false-positive rate among healthy people. Given a positive test, the probability the person has the disease is greater than $90\\%$.",
            ],
            answers=[False, True, True, True, False],
            explanations=[
                f"""Without replacement, order does not matter for the unordered pair:

$$P(\\text{{both red}}) = \\dfrac{{\\binom{{5}}{{2}}}}{{\\binom{{12}}{{2}}}} = \\dfrac{{10}}{{66}} = \\dfrac{{5}}{{33}}$$

The claimed value $\\dfrac{{25}}{{144}}$ is instead $(5/12)^{2}$, which would apply only if the draws were with replacement (or independent with fixed proportion).

Compare:

$$\\dfrac{{5}}{{33}} \\approx {approx(float(p_both_red), 5)}, \\qquad \\dfrac{{25}}{{144}} \\approx {approx(25/144, 5)}$$

They are not equal.

The solved result does not agree with the claim, so the statement is False.""",
                """Three-event inclusion-exclusion:

$$P(A \\cup B \\cup C) = P(A)+P(B)+P(C) - P(A \\cap B)-P(A \\cap C)-P(B \\cap C) + P(A \\cap B \\cap C)$$

Substitute:

$$= 0.30+0.40+0.20 - 0.10-0.10-0.10 + 0.05$$

$$= 0.90 - 0.30 + 0.05 = 0.65$$

Matching these figures to the claim, the statement is True.""",
                """First recover the intersection from the conditional:

$$P(A \\cap B) = P(A \\mid B)P(B) = 0.60 \\cdot 0.50 = 0.30$$

Bayes / definition of the reverse conditional:

$$P(B \\mid A) = \\dfrac{P(A \\cap B)}{P(A)} = \\dfrac{0.30}{0.40} = 0.75$$

Matching these figures to the claim, the statement is True.""",
                """$$E(X) = \\dfrac{1+2+3+4}{4} = \\dfrac{10}{4} = \\dfrac{5}{2}$$

$$E(X^{2}) = \\dfrac{1^{2}+2^{2}+3^{2}+4^{2}}{4} = \\dfrac{1+4+9+16}{4} = \\dfrac{30}{4} = \\dfrac{15}{2}$$

$$\\mathrm{Var}(X) = \\dfrac{15}{2} - \\left(\\dfrac{5}{2}\\right)^{2} = \\dfrac{15}{2} - \\dfrac{25}{4} = \\dfrac{30-25}{4} = \\dfrac{5}{4}$$

$$\\mathrm{SD}(X) = \\sqrt{\\mathrm{Var}(X)} = \\sqrt{\\dfrac{5}{4}}$$

(Do not confuse variance $\\dfrac{5}{4}$ with the SD.)

Matching these figures to the claim, the statement is True.""",
                """Let $D$ be disease and $+$ a positive test.

$$P(+) = P(+ \\mid D)P(D) + P(+ \\mid D^{c})P(D^{c})$$

$$P(+) = 0.99 \\cdot 0.01 + 0.02 \\cdot 0.99 = 0.0099 + 0.0198 = 0.0297$$

$$P(D \\mid +) = \\dfrac{0.99 \\cdot 0.01}{0.0297} = \\dfrac{0.0099}{0.0297} = \\dfrac{1}{3} \\approx 0.333$$

About $33.3\\%$, far below $90\\%$. High sensitivity alone does not overcome a rare prior when false positives exist.

The solved result does not agree with the claim, so the statement is False.""",
            ],
            overview="Mixed exam claims: an urn draw without replacement versus a with-replacement trap, three-event inclusion-exclusion, reversing a conditional probability, SD of a fair d4, and Bayes on a rare-disease screening test.",
        )
    )

    # --- Task 3 (201) ---
    # A: committee 4 from 6 men + 5 women; P(exactly 2 women)=C(5,2)*C(6,2)/C(11,4)
    # C(5,2)=10, C(6,2)=15, C(11,4)=330 → 150/330=5/11
    # Claim: 5/11 → True
    # B: P(A∪B)=P(A)+P(B) when mutually exclusive. Given P(A)=0.3,P(B)=0.5,P(A∩B)=0.1
    # Claim: P(A∪B)=0.8 → False (actually 0.7)
    # C: two cards, P(second king | first king) from 52 = 3/51
    # Claim: 4/52 (ignores without replacement) → False if claim says equals 1/13
    # Statement: "After drawing one king from a 52-card deck (not replaced), the probability the next card is also a king equals 1/13." → False (3/51≠4/52)
    # D: payoff game: win 10 with p=0.3, lose 4 with p=0.7. E=10*0.3-4*0.7=3-2.8=0.2
    # Claim: E=0.2 → True
    # E: three machines 50%,30%,20%; defect rates 1%,3%,4%. P(from machine 3 | defect)
    # P(D)=0.5*0.01+0.3*0.03+0.2*0.04=0.005+0.009+0.008=0.022
    # P(M3|D)=0.008/0.022=4/11≈0.3636
    # Claim: equals 4/11 → True

    p_comm = Fraction(math.comb(5, 2) * math.comb(6, 2), math.comb(11, 4))
    tasks.append(
        task(
            id_num=201,
            prefix="12",
            title_n=3,
            subsection="12.6",
            statements=[
                "A committee of $4$ is chosen at random from $6$ men and $5$ women. The probability the committee contains exactly $2$ women is $\\dfrac{5}{11}$.",
                "If $P(A)=0.30$, $P(B)=0.50$, and $P(A \\cap B)=0.10$, then $P(A \\cup B)=0.80$.",
                "One card is drawn from a standard 52-card deck and it is a king; it is not replaced. The probability that the next card drawn is also a king equals $\\dfrac{1}{13}$.",
                "A game pays $+10$ euros with probability $0.30$ and $-4$ euros with probability $0.70$. The expected payoff of one play is $0.20$ euros.",
                "Three machines produce $50\\%$, $30\\%$, and $20\\%$ of output with defect rates $1\\%$, $3\\%$, and $4\\%$ respectively. Given a defective item, the probability it came from the third machine equals $\\dfrac{4}{11}$.",
            ],
            answers=[True, False, False, True, True],
            explanations=[
                f"""Total committees:

$$\\binom{{11}}{{4}} = 330$$

Committees with exactly $2$ women (and thus $2$ men):

$$\\binom{{5}}{{2}}\\binom{{6}}{{2}} = 10 \\cdot 15 = 150$$

$$P = \\dfrac{{150}}{{330}} = \\dfrac{{5}}{{11}}$$

(Exactly equals the claim.)

Matching these figures to the claim, the statement is True.""",
                """Inclusion-exclusion:

$$P(A \\cup B) = P(A)+P(B)-P(A \\cap B) = 0.30+0.50-0.10 = 0.70$$

The claim $0.80$ is the sum $P(A)+P(B)$ with the intersection ignored (as if the events were disjoint). Since $P(A \\cap B)=0.10 \\ne 0$, they are not disjoint.

The solved result does not agree with the claim, so the statement is False.""",
                """After one king is removed, $3$ kings remain among $51$ cards:

$$P(\\text{{2nd king}} \\mid \\text{{1st king}}) = \\dfrac{3}{51} = \\dfrac{1}{17}$$

The claimed $\\dfrac{1}{13} = \\dfrac{4}{52}$ is the unconditional probability a single draw is a king, which ignores the dependence created by sampling without replacement.

$$\\dfrac{1}{17} \\ne \\dfrac{1}{13}$$

The solved result does not agree with the claim, so the statement is False.""",
                """$$E = 10 \\cdot 0.30 + (-4) \\cdot 0.70 = 3 - 2.8 = 0.2$$

The expected payoff is $0.20$ euros.

Matching these figures to the claim, the statement is True.""",
                """$$P(D) = 0.50 \\cdot 0.01 + 0.30 \\cdot 0.03 + 0.20 \\cdot 0.04$$

$$P(D) = 0.005 + 0.009 + 0.008 = 0.022$$

$$P(M_{3} \\mid D) = \\dfrac{0.20 \\cdot 0.04}{0.022} = \\dfrac{0.008}{0.022} = \\dfrac{4}{11}$$

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: a mixed-gender committee probability, a disjoint-union trap, sequential kings without replacement, an expected payoff, and three-cause Bayes for a defective item.",
        )
    )

    # --- Task 4 (202) ---
    # A: ordered vs unordered - password / dealing
    # 5 people seated randomly in 5 seats. P(two specific are adjacent)=2*4!/5!=2/5
    # Claim: 2/5 → True
    # B: P(A)+P(B)=1.2 with P(A∪B)=0.9 → P(∩)=0.3. Claim intersection at most 0.2 → False
    # C: independence: coin twice fair. P(HH)=1/4. Claim P(both heads)=1/2 → False
    # D: X=-1,0,1 with p 0.2,0.5,0.3. E=0.1, E(X^2)=0.2+0+0.3=0.5, Var=0.5-0.01=0.49
    # Claim: Var=0.49 → True
    # E: spam filter: 20% spam; P(+|spam)=0.95, P(+|ham)=0.05. P(spam|+)
    # P(+)=0.2*0.95+0.8*0.05=0.19+0.04=0.23; P(S|+)=0.19/0.23=19/23≈0.826
    # Claim: exceeds 80% → True

    tasks.append(
        task(
            id_num=202,
            prefix="12",
            title_n=4,
            subsection="12.6",
            statements=[
                "Five distinct people are seated uniformly at random in a row of five chairs. The probability that two particular people sit next to each other equals $\\dfrac{2}{5}$.",
                "If $P(A)=0.70$, $P(B)=0.50$, and $P(A \\cup B)=0.90$, then $P(A \\cap B) \\le 0.20$.",
                "Two fair coins are flipped independently. The probability both land heads equals $\\dfrac{1}{2}$.",
                "A random variable $X$ takes values $-1$, $0$, and $1$ with probabilities $0.20$, $0.50$, and $0.30$ respectively. Then $\\mathrm{Var}(X)=0.49$.",
                "Emails are spam with probability $20\\%$. A filter flags $95\\%$ of spam and $5\\%$ of ham. Given that a message is flagged, the probability it is spam exceeds $80\\%$.",
            ],
            answers=[True, False, False, True, True],
            explanations=[
                """Treat the two particular people as a single glued block: the block can be ordered in $2$ ways, and the block plus the other $3$ people give $4$ entities to permute:

$$2 \\cdot 4! = 2 \\cdot 24 = 48$$

Total seatings: $5! = 120$.

$$P = \\dfrac{48}{120} = \\dfrac{2}{5}$$

Matching these figures to the claim, the statement is True.""",
                """$$P(A \\cap B) = P(A)+P(B)-P(A \\cup B) = 0.70+0.50-0.90 = 0.30$$

So $P(A \\cap B)=0.30$, which is not $\\le 0.20$.

The solved result does not agree with the claim, so the statement is False.""",
                """Independence of fair coins:

$$P(\\text{HH}) = \\dfrac{1}{2} \\cdot \\dfrac{1}{2} = \\dfrac{1}{4}$$

The claim $\\dfrac{1}{2}$ confuses "both heads" with "the first is heads" (or with the probability of heads on a single toss).

$$\\dfrac{1}{4} \\ne \\dfrac{1}{2}$$

The solved result does not agree with the claim, so the statement is False.""",
                """$$E(X) = (-1)(0.20) + (0)(0.50) + (1)(0.30) = -0.20 + 0.30 = 0.10$$

$$E(X^{2}) = (-1)^{2}(0.20) + 0 + 1^{2}(0.30) = 0.20 + 0.30 = 0.50$$

$$\\mathrm{Var}(X) = 0.50 - (0.10)^{2} = 0.50 - 0.01 = 0.49$$

Matching these figures to the claim, the statement is True.""",
                """$$P(+) = 0.20 \\cdot 0.95 + 0.80 \\cdot 0.05 = 0.19 + 0.04 = 0.23$$

$$P(\\text{spam} \\mid +) = \\dfrac{0.19}{0.23} = \\dfrac{19}{23} \\approx 0.8261$$

About $82.6\\% > 80\\%$.

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: adjacent seating permutations, recovering an intersection from inclusion-exclusion, an independence product for two coins, variance of a three-point signed law, and Bayes for a spam filter.",
        )
    )

    # --- Task 5 (203) ---
    # A: poker-ish - 5 cards, P(flush all same suit) approx C(4)*C(13,5)/C(52,5)
    # = 4*1287 / 2598960 = 5148/2598960 ≈ 0.00198
    # Claim: less than 0.002 → True
    # B: survey: 40% like tea, 50% like coffee, 70% like at least one → like both = 20%
    # Claim: 20% like both → True
    # C: P(A|B)>P(A) implies positive dependence. Given numbers P(A)=0.3, P(A|B)=0.2 → claim "B makes A more likely" False
    # D: SD vs Var: for X with Var=9, claim SD=9 → False (SD=3)
    # E: parts from suppliers 0.5,0.3,0.2; P(good)=0.98,0.95,0.90. P(supplier2|good)
    # P(G)=0.5*0.98+0.3*0.95+0.2*0.90=0.49+0.285+0.18=0.955
    # P(S2|G)=0.285/0.955≈0.2984
    # Claim: about 30% (within 1 percentage point of 30%) → True if we say "approximately 30%"

    flush_p = 4 * math.comb(13, 5) / math.comb(52, 5)
    tasks.append(
        task(
            id_num=203,
            prefix="12",
            title_n=5,
            subsection="12.6",
            statements=[
                f"Five cards are dealt from a standard 52-card deck. The probability that all five are of the same suit (a flush in suit, including straight flushes) is less than $0.002$.",
                "In a survey, $40\\%$ of respondents like tea, $50\\%$ like coffee, and $70\\%$ like at least one of the two. Then exactly $20\\%$ like both tea and coffee.",
                "Suppose $P(A)=0.30$ and $P(A \\mid B)=0.20$. Then the occurrence of $B$ makes $A$ more likely than it was unconditionally.",
                "If a discrete random variable $X$ has $\\mathrm{Var}(X)=9$, then its standard deviation equals $9$.",
                "Suppliers provide $50\\%$, $30\\%$, and $20\\%$ of parts with good-item rates $98\\%$, $95\\%$, and $90\\%$. Given a good part, the probability it came from the second supplier is approximately $30\\%$ (within one percentage point).",
            ],
            answers=[True, True, False, False, True],
            explanations=[
                f"""All five cards from one suit: there are $4$ suits and $\\binom{{13}}{{5}}$ five-card sets per suit.

$$P = \\dfrac{{4 \\binom{{13}}{{5}}}}{{\\binom{{52}}{{5}}}} = \\dfrac{{4 \\cdot 1287}}{{2598960}} = \\dfrac{{5148}}{{2598960}} \\approx {approx(flush_p, 6)}$$

Since ${approx(flush_p, 6)} < 0.002$, the claim holds.

Matching these figures to the claim, the statement is True.""",
                """$$P(T \\cup C) = P(T)+P(C)-P(T \\cap C)$$

$$0.70 = 0.40 + 0.50 - P(T \\cap C)$$

$$P(T \\cap C) = 0.90 - 0.70 = 0.20$$

So $20\\%$ like both.

Matching these figures to the claim, the statement is True.""",
                """Compare the conditional to the prior:

$$P(A \\mid B) = 0.20 < 0.30 = P(A)$$

So $B$ makes $A$ less likely, not more. (Equivalently, $A$ and $B$ are negatively associated here.)

The solved result does not agree with the claim, so the statement is False.""",
                """By definition,

$$\\mathrm{SD}(X) = \\sqrt{\\mathrm{Var}(X)} = \\sqrt{9} = 3$$

The claim confuses variance with standard deviation.

The solved result does not agree with the claim, so the statement is False.""",
                f"""$$P(G) = 0.50 \\cdot 0.98 + 0.30 \\cdot 0.95 + 0.20 \\cdot 0.90$$

$$P(G) = 0.49 + 0.285 + 0.18 = 0.955$$

$$P(S_{{2}} \\mid G) = \\dfrac{{0.30 \\cdot 0.95}}{{0.955}} = \\dfrac{{0.285}}{{0.955}} \\approx {approx(0.285/0.955, 4)}$$

About ${approx(100*0.285/0.955, 2)}\\%$, which is within one percentage point of $30\\%$.

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: a five-card same-suit probability, tea/coffee inclusion-exclusion, a conditional that decreases probability, Var versus SD, and three-supplier Bayes for a good part.",
        )
    )

    # Continue with tasks 206-218... I'll add remaining tasks in a compact but complete way.

    tasks.extend(_ch12_remaining())
    assert len(tasks) == 20
    assert [t["sort_order"] for t in tasks] == list(range(199, 219))
    return tasks


def _ch12_remaining() -> list[dict]:
    """Tasks 204–218 (ids math-12-204 … 218)."""
    out: list[dict] = []

    # 204
    out.append(
        task(
            id_num=204,
            prefix="12",
            title_n=6,
            subsection="12.6",
            statements=[
                "From a deck of $52$ cards, $2$ cards are drawn without replacement. The probability both are hearts equals $\\dfrac{13 \\times 12}{52 \\times 51}$.",
                "If $P(A)=0.45$, $P(B)=0.55$, and $A$ and $B$ are mutually exclusive, then $P(A \\cup B)=1$.",
                "A fair die is rolled once. Let $A$ be \"even\" and $B$ be \"at least $4$\". Then $P(A \\mid B) = \\dfrac{2}{3}$.",
                "Let $X$ be the number of heads in two independent fair coin tosses. Then $E(X)=1$ and $\\mathrm{Var}(X)=\\dfrac{1}{2}$.",
                "Box 1 has $2$ gold and $1$ silver coins; Box 2 has $1$ gold and $2$ silver. A box is chosen at random, then a coin at random is gold. The probability the box was Box 1 equals $\\dfrac{2}{3}$.",
            ],
            answers=[True, True, True, True, True],
            explanations=[
                """Sequential without replacement (order of draws):

$$P = \\dfrac{13}{52} \\cdot \\dfrac{12}{51} = \\dfrac{13 \\times 12}{52 \\times 51}$$

(The unordered form $\\dfrac{\\binom{13}{2}}{\\binom{52}{2}}$ simplifies to the same value.)

Matching these figures to the claim, the statement is True.""",
                """Mutually exclusive means $P(A \\cap B)=0$, so

$$P(A \\cup B) = P(A)+P(B) = 0.45+0.55 = 1$$

Matching these figures to the claim, the statement is True.""",
                """$B = \\{4,5,6\\}$ has $3$ outcomes. Among them the even faces are $\\{4,6\\}$, so $2$ outcomes.

$$P(A \\mid B) = \\dfrac{2}{3}$$

(Alternatively: $P(A \\cap B)=P(\\{4,6\\})=\\dfrac{2}{6}$, $P(B)=\\dfrac{3}{6}$, ratio $\\dfrac{2}{3}$.)

Matching these figures to the claim, the statement is True.""",
                """$X \\sim$ number of heads in $2$ fair tosses takes values $0,1,2$ with probabilities $\\dfrac{1}{4},\\dfrac{1}{2},\\dfrac{1}{4}$.

$$E(X) = 0 \\cdot \\dfrac{1}{4} + 1 \\cdot \\dfrac{1}{2} + 2 \\cdot \\dfrac{1}{4} = 1$$

$$E(X^{2}) = 0 + 1 \\cdot \\dfrac{1}{2} + 4 \\cdot \\dfrac{1}{4} = \\dfrac{1}{2} + 1 = \\dfrac{3}{2}$$

$$\\mathrm{Var}(X) = \\dfrac{3}{2} - 1^{2} = \\dfrac{1}{2}$$

(Or use Bernoulli sum: two independent Bernoullis with $p=\\dfrac{1}{2}$ give mean $1$ and variance $2 \\cdot \\dfrac{1}{4}=\\dfrac{1}{2}$.)

Matching these figures to the claim, the statement is True.""",
                """Prior $P(B_{1})=P(B_{2})=\\dfrac{1}{2}$. Likelihoods:

$$P(G \\mid B_{1}) = \\dfrac{2}{3}, \\qquad P(G \\mid B_{2}) = \\dfrac{1}{3}$$

$$P(G) = \\dfrac{1}{2} \\cdot \\dfrac{2}{3} + \\dfrac{1}{2} \\cdot \\dfrac{1}{3} = \\dfrac{1}{3} + \\dfrac{1}{6} = \\dfrac{1}{2}$$

$$P(B_{1} \\mid G) = \\dfrac{\\tfrac{1}{2} \\cdot \\tfrac{2}{3}}{\\tfrac{1}{2}} = \\dfrac{2}{3}$$

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: two hearts without replacement, mutually exclusive events filling the sample space, a die conditional, mean and variance of two-coin heads, and Bayes on two coin boxes.",
        )
    )

    # 205 — mix of false traps
    out.append(
        task(
            id_num=205,
            prefix="12",
            title_n=7,
            subsection="12.6",
            statements=[
                "A club has $8$ juniors and $6$ seniors. A team of $3$ is chosen at random. The probability the team has no seniors equals $\\dfrac{\\binom{8}{3}}{\\binom{14}{3}}$.",
                "If $P(A \\cup B)=0.80$ and $P(A \\cap B)=0.20$, then $P(A)+P(B)=0.60$.",
                "Events with $P(A)=0.40$ and $P(B)=0.50$ must satisfy $P(A \\cap B) \\ge 0.10$.",
                "For a random variable with $E(X)=4$ and $E(X^{2})=20$, the standard deviation equals $2$.",
                "Prior probabilities of causes $C_{1},C_{2},C_{3}$ are $0.5$, $0.3$, $0.2$ with $P(E \\mid C_{i})$ equal to $0.1$, $0.4$, $0.5$. Given $E$, the most probable cause is $C_{1}$.",
            ],
            answers=[True, False, True, True, False],
            explanations=[
                """No seniors means all $3$ from the $8$ juniors:

$$P = \\dfrac{\\binom{8}{3}}{\\binom{14}{3}}$$

Matching these figures to the claim, the statement is True.""",
                """Rearrange inclusion-exclusion:

$$P(A)+P(B) = P(A \\cup B) + P(A \\cap B) = 0.80 + 0.20 = 1.00$$

The claim $0.60$ subtracts instead of adds the intersection.

The solved result does not agree with the claim, so the statement is False.""",
                """Fréchet lower bound:

$$P(A \\cap B) \\ge P(A)+P(B)-1 = 0.40+0.50-1 = -0.10$$

and also $\\ge 0$, so the binding lower bound is $0$. Wait - actually $0.4+0.5-1=-0.1$, so lower bound is $0$, not $0.10$.

Recheck: $P(A)+P(B)-1 = -0.1$, so $P(A \\cap B) \\ge 0$, not $\\ge 0.10$. The statement claims $\\ge 0.10$, which is FALSE.

Hmm I need ans False for this. Let me fix - change statement or answer.

Actually Fréchet: max(0, P(A)+P(B)-1) = max(0,-0.1)=0. So claim ≥0.10 is False.

I'll set answer to False and rewrite explanation.""",
                """$$\\mathrm{Var}(X) = E(X^{2}) - \\bigl(E(X)\\bigr)^{2} = 20 - 16 = 4$$

$$\\mathrm{SD}(X) = \\sqrt{4} = 2$$

Matching these figures to the claim, the statement is True.""",
                """$$P(E) = 0.5 \\cdot 0.1 + 0.3 \\cdot 0.4 + 0.2 \\cdot 0.5 = 0.05 + 0.12 + 0.10 = 0.27$$

Posteriors:

$$P(C_{1} \\mid E) = \\dfrac{0.05}{0.27} \\approx 0.185$$

$$P(C_{2} \\mid E) = \\dfrac{0.12}{0.27} \\approx 0.444$$

$$P(C_{3} \\mid E) = \\dfrac{0.10}{0.27} \\approx 0.370$$

The mode is $C_{2}$, not $C_{1}$ (base-rate neglect would favor $C_{1}$).

The solved result does not agree with the claim, so the statement is False.""",
            ],
            overview="placeholder",
        )
    )
    # Fix task 205 statement C and explanation
    out[-1]["statements"][2] = (
        "Events with $P(A)=0.40$ and $P(B)=0.50$ must satisfy $P(A \\cap B) \\ge 0.10$."
    )
    out[-1]["answer_key"][2] = False
    out[-1]["tactical_explanations"][2] = expl(
        "C",
        False,
        """Any two events obey

$$P(A \\cap B) \\ge \\max\\bigl(0,\\, P(A)+P(B)-1\\bigr)$$

Here

$$P(A)+P(B)-1 = 0.40+0.50-1 = -0.10$$

so the lower bound is $0$, not $0.10$. For example, $A$ and $B$ can be disjoint with $P(A \\cap B)=0$, which is compatible with $P(A)+P(B)=0.90 \\le 1$.

The claim that the intersection must be at least $0.10$ is therefore wrong.

The solved result does not agree with the claim, so the statement is False.""",
    )
    out[-1]["solution_overview"] = (
        "Mixed exam claims: an all-junior team probability, rearranging inclusion-exclusion, a Fréchet lower-bound trap, recovering SD from E(X) and E(X^2), and three-cause Bayes where the largest prior is not the MAP."
    )

    # 206
    p_flush_like = math.comb(10, 3) / math.comb(20, 3)
    out.append(
        task(
            id_num=206,
            prefix="12",
            title_n=8,
            subsection="12.6",
            statements=[
                "An urn has $10$ white and $10$ black balls. Three are drawn without replacement. The probability all three are white equals $\\dfrac{\\binom{10}{3}}{\\binom{20}{3}}$.",
                "If $P(A)=0.25$, $P(B)=0.40$, and $P(A \\cap B)=0.10$, then $P(A \\cup B)=0.55$.",
                "Two events with $P(A \\mid B)=P(A)$ are independent (assuming $P(B)>0$).",
                "A lottery ticket costs $2$ euros and pays $50$ euros with probability $0.01$ (otherwise nothing). The expected net gain is $-1.50$ euros.",
                "A night watch uses three sensors with prior fault probabilities $0.1$, $0.2$, $0.7$ and alarm rates $0.9$, $0.6$, $0.1$ if that sensor is the one that fails. Given an alarm caused by exactly one failing sensor under these rates, the posterior that sensor $3$ failed is less than $0.4$.",
            ],
            answers=[True, True, True, True, True],
            explanations=[
                f"""$$P = \\dfrac{{\\binom{{10}}{{3}}}}{{\\binom{{20}}{{3}}}} = \\dfrac{{120}}{{1140}} = \\dfrac{{2}}{{19}} \\approx {approx(p_flush_like, 4)}$$

The displayed combinatorial ratio is exactly the required probability.

Matching these figures to the claim, the statement is True.""",
                """$$P(A \\cup B) = 0.25 + 0.40 - 0.10 = 0.55$$

Matching these figures to the claim, the statement is True.""",
                """The equality $P(A \\mid B)=P(A)$ rearranges to $P(A \\cap B)=P(A)P(B)$, which is the definition of independence when $P(B)>0$.

Matching these figures to the claim, the statement is True.""",
                """Net gain $G$: with probability $0.01$ receive $50-2=48$ net? Careful: cost is always paid.

If the ticket costs $2$ and pays $50$ with probability $0.01$ (gross prize), then

$$E(\\text{{net}}) = -2 + 50 \\cdot 0.01 = -2 + 0.5 = -1.5$$

Expected net gain is $-1.50$ euros.

Matching these figures to the claim, the statement is True.""",
                """This is Bayes with three causes (exactly one sensor fails, priors as given):

$$P(\\text{{alarm}}) = 0.1 \\cdot 0.9 + 0.2 \\cdot 0.6 + 0.7 \\cdot 0.1 = 0.09 + 0.12 + 0.07 = 0.28$$

$$P(S_{{3}} \\mid \\text{{alarm}}) = \\dfrac{{0.7 \\cdot 0.1}}{{0.28}} = \\dfrac{{0.07}}{{0.28}} = 0.25 < 0.4$$

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: three white balls from a balanced urn, two-event union, the conditional characterization of independence, expected lottery net gain, and three-sensor Bayes.",
        )
    )

    # 207
    out.append(
        task(
            id_num=207,
            prefix="12",
            title_n=9,
            subsection="12.6",
            statements=[
                "From $52$ cards, the number of $5$-card hands that contain exactly $2$ aces is $\\binom{4}{2}\\binom{48}{3}$.",
                "For any events $A$ and $B$, $P(A \\cup B) \\le P(A)+P(B)$.",
                "If $P(B \\mid A)=0.80$, $P(A)=0.25$, and $P(B)=0.50$, then $P(A \\mid B)=0.40$.",
                "If $\\mathrm{Var}(X)=16$, then $\\mathrm{Var}(2X)=32$.",
                "A test for a condition with prevalence $5\\%$ has sensitivity $100\\%$ and specificity $90\\%$. Given a positive result, $P(\\text{condition} \\mid +)$ equals $\\dfrac{1}{2.8}$.",
            ],
            answers=[True, True, True, False, False],
            explanations=[
                """Choose $2$ of $4$ aces and $3$ of $48$ non-aces:

$$\\binom{4}{2}\\binom{48}{3}$$

Matching these figures to the claim, the statement is True.""",
                """This is Bonferroni / subadditivity of probability, with equality iff $P(A \\cap B)=0$. It always holds.

Matching these figures to the claim, the statement is True.""",
                """$$P(A \\cap B) = P(B \\mid A)P(A) = 0.80 \\cdot 0.25 = 0.20$$

$$P(A \\mid B) = \\dfrac{0.20}{0.50} = 0.40$$

Matching these figures to the claim, the statement is True.""",
                """Variance scales with the square of a constant factor:

$$\\mathrm{Var}(2X) = 2^{2}\\,\\mathrm{Var}(X) = 4 \\cdot 16 = 64$$

not $32$. (Confusing the linear factor $2$ with the quadratic rule is the trap.)

The solved result does not agree with the claim, so the statement is False.""",
                """Prevalence $P(C)=0.05$, sensitivity $P(+ \\mid C)=1$, specificity $0.90$ means $P(+ \\mid C^{c})=0.10$.

$$P(+) = 1 \\cdot 0.05 + 0.10 \\cdot 0.95 = 0.05 + 0.095 = 0.145$$

$$P(C \\mid +) = \\dfrac{0.05}{0.145} = \\dfrac{50}{145} = \\dfrac{10}{29} \\approx 0.3448$$

The claimed $\\dfrac{1}{2.8} = \\dfrac{10}{28} \\approx 0.357$ uses $0.05+0.10\\cdot 1.0$ as if the healthy population were $100\\%$ rather than $95\\%$.

$$\\dfrac{10}{29} \\ne \\dfrac{1}{2.8}$$

The solved result does not agree with the claim, so the statement is False.""",
            ],
            overview="Mixed exam claims: counting two-ace poker hands, union subadditivity, Bayes reversing a conditional, the quadratic scaling of variance, and a screening-test posterior with a specificity trap.",
        )
    )

    # 208
    out.append(
        task(
            id_num=208,
            prefix="12",
            title_n=10,
            subsection="12.6",
            statements=[
                "Four books are arranged at random on a shelf. The probability they appear in a specific predetermined order equals $\\dfrac{1}{24}$.",
                "If $P(A)=0.60$ and $P(A \\cap B)=0.20$, then $P(B \\mid A)=\\dfrac{1}{3}$.",
                "Rolling two fair dice, the probability the sum is $7$ equals the probability the sum is $6$.",
                "For $X$ with distribution $P(X=0)=0.2$, $P(X=5)=0.8$, one has $E(X)=4$ and $\\mathrm{SD}(X)=2$.",
                "Machines A and B make $70\\%$ and $30\\%$ of bolts; defect rates $2\\%$ and $8\\%$. Given a defective bolt, $P(\\text{from A})$ is less than $P(\\text{from B})$.",
            ],
            answers=[True, True, False, True, False],
            explanations=[
                """Total permutations of $4$ books: $4! = 24$. Exactly one matches a fixed order.

$$P = \\dfrac{1}{24}$$

Matching these figures to the claim, the statement is True.""",
                """$$P(B \\mid A) = \\dfrac{P(A \\cap B)}{P(A)} = \\dfrac{0.20}{0.60} = \\dfrac{1}{3}$$

Matching these figures to the claim, the statement is True.""",
                """Sums on two dice: $P(\\text{sum }=7)=\\dfrac{6}{36}=\\dfrac{1}{6}$, while $P(\\text{sum }=6)=\\dfrac{5}{36}$.

$$\\dfrac{6}{36} \\ne \\dfrac{5}{36}$$

The solved result does not agree with the claim, so the statement is False.""",
                """$$E(X) = 0 \\cdot 0.2 + 5 \\cdot 0.8 = 4$$

$$E(X^{2}) = 0 + 25 \\cdot 0.8 = 20$$

$$\\mathrm{Var}(X) = 20 - 16 = 4, \\qquad \\mathrm{SD}(X) = 2$$

Matching these figures to the claim, the statement is True.""",
                """$$P(D) = 0.70 \\cdot 0.02 + 0.30 \\cdot 0.08 = 0.014 + 0.024 = 0.038$$

$$P(A \\mid D) = \\dfrac{0.014}{0.038} = \\dfrac{14}{38} = \\dfrac{7}{19} \\approx 0.368$$

$$P(B \\mid D) = \\dfrac{0.024}{0.038} = \\dfrac{12}{19} \\approx 0.632$$

So $P(A \\mid D) < P(B \\mid D)$ is actually true... wait, the statement says P(from A) is less than P(from B), which IS true. I need ans True.

Fix answer to True.""",
            ],
            overview="x",
        )
    )
    out[-1]["answer_key"][4] = True
    out[-1]["tactical_explanations"][4] = expl(
        "E",
        True,
        """$$P(D) = 0.70 \\cdot 0.02 + 0.30 \\cdot 0.08 = 0.014 + 0.024 = 0.038$$

$$P(A \\mid D) = \\dfrac{0.014}{0.038} = \\dfrac{7}{19} \\approx 0.368$$

$$P(B \\mid D) = \\dfrac{0.024}{0.038} = \\dfrac{12}{19} \\approx 0.632$$

Even though A makes more bolts, B's higher defect rate dominates the posterior, so $P(A \\mid D) < P(B \\mid D)$.

Matching these figures to the claim, the statement is True.""",
    )
    out[-1]["solution_overview"] = (
        "Mixed exam claims: a random bookshelf order, a definitional conditional, unequal dice-sum probabilities, mean and SD of a two-point law, and Bayes comparing two machine posteriors."
    )

    # Generate remaining 209-218 more systematically via a data table
    more = [
        # 209
        dict(
            n=209,
            title_n=11,
            stmts=[
                "A password uses $3$ distinct digits chosen from $0$–$9$ and arranged in order. The number of such passwords is $P(10,3)=10 \\times 9 \\times 8$.",
                "If $P(A \\cap B)=0$ and $P(A)=0.3$, $P(B)=0.4$, then $P(A \\cup B)=0.7$.",
                "For independent events with $P(A)=0.2$ and $P(B)=0.5$, one has $P(A \\cup B)=0.6$.",
                "If $E(X)=5$ and $\\mathrm{Var}(X)=9$, then $E(X^{2})=34$.",
                "Prior $P(D)=0.02$. Test: $P(+ \\mid D)=0.95$, $P(+ \\mid D^{c})=0.05$. Then $P(D \\mid +)=\\dfrac{0.019}{0.068}$.",
            ],
            ans=[True, True, True, True, True],
            expls=[
                """Order matters and digits are distinct:

$$P(10,3) = 10 \\times 9 \\times 8 = 720$$

Matching these figures to the claim, the statement is True.""",
                """Disjoint events: $P(A \\cup B)=P(A)+P(B)=0.7$.

Matching these figures to the claim, the statement is True.""",
                """Independence: $P(A \\cap B)=0.2 \\cdot 0.5=0.1$, so

$$P(A \\cup B)=0.2+0.5-0.1=0.6$$

Matching these figures to the claim, the statement is True.""",
                """$$E(X^{2}) = \\mathrm{Var}(X) + \\bigl(E(X)\\bigr)^{2} = 9 + 25 = 34$$

Matching these figures to the claim, the statement is True.""",
                """$$P(+) = 0.95 \\cdot 0.02 + 0.05 \\cdot 0.98 = 0.019 + 0.049 = 0.068$$

$$P(D \\mid +) = \\dfrac{0.019}{0.068}$$

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: ordered digit passwords, disjoint unions, independent unions, recovering E(X^2), and a Bayes posterior written as an explicit ratio.",
        ),
        # 210
        dict(
            n=210,
            title_n=12,
            stmts=[
                "From $12$ jurors of whom $5$ are women, a subcommittee of $4$ is chosen. The probability of exactly $3$ women is $\\dfrac{\\binom{5}{3}\\binom{7}{1}}{\\binom{12}{4}}$.",
                "If $P(A)=0.9$ and $P(B)=0.9$, then it is possible that $P(A \\cap B)=0.7$.",
                "A card is drawn from a $52$-card deck. Let $A$ be \"ace\" and $B$ be \"heart\". Then $A$ and $B$ are independent.",
                "A random variable with outcomes $10$ and $20$ each with probability $\\tfrac{1}{2}$ has variance $25$.",
                "Two factories share production $40\\%$-$60\\%$ with defect rates $3\\%$ and $1\\%$. Given a good item, the probability it is from the second factory exceeds $0.60$.",
            ],
            ans=[True, True, True, True, True],
            expls=[
                """$$P = \\dfrac{\\binom{5}{3}\\binom{7}{1}}{\\binom{12}{4}}$$

is the hypergeometric probability of exactly $3$ women in $4$ draws.

Matching these figures to the claim, the statement is True.""",
                """Lower bound $\\max(0,0.9+0.9-1)=0.8$? Wait 0.8, so 0.7 is NOT possible!

Fix: change claim to 0.85 possible → True, or change answer.

Use: possible that P(A∩B)=0.85 → True
Or statement "possible that =0.7" → False

I'll change statement to 0.85 and keep True.""",
                """$P(A)=\\dfrac{4}{52}=\\dfrac{1}{13}$, $P(B)=\\dfrac{13}{52}=\\dfrac{1}{4}$, $P(A \\cap B)=P(\\text{ace of hearts})=\\dfrac{1}{52}$.

$$P(A)P(B)=\\dfrac{1}{13}\\cdot\\dfrac{1}{4}=\\dfrac{1}{52}=P(A \\cap B)$$

So ace and heart are independent in a fair deck.

Matching these figures to the claim, the statement is True.""",
                """$$E=15$, $E(X^{2})=\\dfrac{100+400}{2}=250$, $\\mathrm{Var}=250-225=25$.

Matching these figures to the claim, the statement is True.""",
                """$$P(G)=0.4\\cdot 0.97 + 0.6\\cdot 0.99 = 0.388 + 0.594 = 0.982$$

$$P(F_{2}\\mid G)=\\dfrac{0.594}{0.982}\\approx 0.605 > 0.60$$

Matching these figures to the claim, the statement is True.""",
            ],
            overview="x",
        ),
    ]

    # Fix 210 carefully before appending
    more[1]["stmts"][1] = (
        "If $P(A)=0.9$ and $P(B)=0.9$, then it is possible that $P(A \\cap B)=0.85$."
    )
    more[1]["expls"][1] = (
        """Feasible intersections lie in

$$\\bigl[\\max(0,P(A)+P(B)-1),\\, \\min(P(A),P(B))\\bigr] = [0.8,\\, 0.9]$$

Since $0.85$ lies in $[0.8,0.9]$, such events can exist.

Matching these figures to the claim, the statement is True."""
    )
    more[1]["overview"] = (
        "Mixed exam claims: a hypergeometric subcommittee, a Fréchet-feasible intersection, independence of ace and heart, variance of a two-point payoff, and Bayes for a good item from two factories."
    )

    for m in more:
        out.append(
            task(
                id_num=m["n"],
                prefix="12",
                title_n=m["title_n"],
                subsection="12.6",
                statements=m["stmts"],
                answers=m["ans"],
                explanations=m["expls"],
                overview=m["overview"],
            )
        )

    # Tasks 211-218
    remaining_specs = _ch12_specs_211_218()
    out.extend(remaining_specs)
    return out


def _ch12_specs_211_218() -> list[dict]:
    specs = []

    specs.append(
        task(
            id_num=211,
            prefix="12",
            title_n=13,
            subsection="12.6",
            statements=[
                "Choosing a president and a treasurer from $10$ people (roles distinct, one person cannot hold both) can be done in $10 \\times 9$ ways.",
                "If $P(A \\cup B)=0.75$, $P(A)=0.50$, $P(B)=0.45$, then $P(A \\cap B)=0.20$.",
                "Given $P(A)=0.30$, $P(B)=0.40$, $P(A \\cap B)=0.12$, the events $A$ and $B$ are independent.",
                "For $X$ with $P(X=k)=\\dfrac{1}{5}$ for $k=1,\\dots,5$, one has $E(X)=3$ and $\\mathrm{Var}(X)=2$.",
                "Spam prior $10\\%$; $P(\\text{flag}\\mid\\text{spam})=0.90$, $P(\\text{flag}\\mid\\text{ham})=0.20$. Then $P(\\text{spam}\\mid\\text{flag})=\\dfrac{1}{3}$.",
            ],
            answers=[True, True, True, True, True],
            explanations=[
                """Ordered roles without repetition: $10$ choices for president, then $9$ for treasurer.

$$10 \\times 9 = 90$$

Matching these figures to the claim, the statement is True.""",
                """$$P(A \\cap B)=P(A)+P(B)-P(A \\cup B)=0.50+0.45-0.75=0.20$$

Matching these figures to the claim, the statement is True.""",
                """$$P(A)P(B)=0.30\\cdot 0.40=0.12=P(A \\cap B)$$

so independence holds.

Matching these figures to the claim, the statement is True.""",
                """Uniform on $\\{1,2,3,4,5\\}$:

$$E(X)=\\dfrac{1+2+3+4+5}{5}=3$$

$$E(X^{2})=\\dfrac{1+4+9+16+25}{5}=\\dfrac{55}{5}=11$$

$$\\mathrm{Var}(X)=11-9=2$$

Matching these figures to the claim, the statement is True.""",
                """$$P(F)=0.10\\cdot 0.90 + 0.90\\cdot 0.20 = 0.09+0.18=0.27$$

$$P(S\\mid F)=\\dfrac{0.09}{0.27}=\\dfrac{1}{3}$$

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: ordered officer selection, recovering an intersection, verifying independence by the product rule, mean and variance of a discrete uniform, and a spam-filter Bayes ratio.",
        )
    )

    specs.append(
        task(
            id_num=212,
            prefix="12",
            title_n=14,
            subsection="12.6",
            statements=[
                "An urn contains $4$ red and $6$ green balls. Drawing $2$ with replacement, $P(\\text{both red})=\\left(\\dfrac{4}{10}\\right)^{2}=\\dfrac{4}{25}$.",
                "If $P(A)=0.35$ and $P(B)=0.25$ are mutually exclusive, then $P(A \\cup B)=0.60$.",
                "A fair coin is flipped until the first head. The probability the first head occurs on toss $3$ equals $\\left(\\dfrac{1}{2}\\right)^{3}=\\dfrac{1}{8}$.",
                "If $\\mathrm{SD}(X)=5$, then $\\mathrm{Var}(X)=25$.",
                "Causes $H_{1},H_{2}$ have priors $0.6,0.4$ and $P(D\\mid H_{i})=0.3,0.8$. Then $P(H_{2}\\mid D)=\\dfrac{16}{31}$.",
            ],
            answers=[True, True, True, True, True],
            explanations=[
                """With replacement the draws are independent:

$$P=\\dfrac{4}{10}\\cdot\\dfrac{4}{10}=\\dfrac{16}{100}=\\dfrac{4}{25}$$

Matching these figures to the claim, the statement is True.""",
                """Mutually exclusive: $P(A \\cup B)=0.35+0.25=0.60$.

Matching these figures to the claim, the statement is True.""",
                """Geometric (first success on trial $3$): two tails then a head.

$$P=(1/2)^{2}\\cdot(1/2)=1/8$$

(The displayed $\\left(\\dfrac{1}{2}\\right)^{3}$ equals that product.)

Matching these figures to the claim, the statement is True.""",
                """$$\\mathrm{Var}(X)=\\bigl(\\mathrm{SD}(X)\\bigr)^{2}=25$$

Matching these figures to the claim, the statement is True.""",
                """$$P(D)=0.6\\cdot 0.3 + 0.4\\cdot 0.8 = 0.18+0.32=0.50$$

$$P(H_{2}\\mid D)=\\dfrac{0.4\\cdot 0.8}{0.50}=\\dfrac{0.32}{0.50}=\\dfrac{16}{25}$$

Wait 16/25 not 16/31. Fix claim.

0.32/0.5=0.64=16/25. Change statement to 16/25.""",
            ],
            overview="x",
        )
    )
    # fix 212 E
    specs[-1]["statements"][4] = (
        "Causes $H_{1},H_{2}$ have priors $0.6,0.4$ and $P(D\\mid H_{i})=0.3,0.8$. Then $P(H_{2}\\mid D)=\\dfrac{16}{25}$."
    )
    specs[-1]["tactical_explanations"][4] = expl(
        "E",
        True,
        """$$P(D)=0.6\\cdot 0.3 + 0.4\\cdot 0.8 = 0.18+0.32=0.50$$

$$P(H_{2}\\mid D)=\\dfrac{0.32}{0.50}=\\dfrac{16}{25}$$

Matching these figures to the claim, the statement is True.""",
    )
    specs[-1]["solution_overview"] = (
        "Mixed exam claims: with-replacement urn draws, mutually exclusive union, a geometric first-head probability, converting SD to Var, and two-cause Bayes."
    )

    # Note: statement C is geometric not binomial — intentional trap topic vs binomial chapter, but still elementary probability. OK.

    specs.append(
        task(
            id_num=213,
            prefix="12",
            title_n=15,
            subsection="12.6",
            statements=[
                "Without replacement from $5$ red and $5$ blue, $P(\\text{first red, second blue})=\\dfrac{5}{10}\\cdot\\dfrac{5}{9}=\\dfrac{1}{4}$.",
                "If $P(A \\cup B \\cup C)=0.90$ and the three events are pairwise disjoint (hence mutually exclusive), with equal probabilities, then each has probability $0.30$.",
                "If $P(A\\mid B)=0.5$ and $P(B\\mid A)=0.5$ with $P(A)=0.4$, then $P(B)=0.4$.",
                "A game: gain $3$ with probability $\\tfrac{1}{3}$, lose $1$ with probability $\\tfrac{2}{3}$. Then $E=\\dfrac{1}{3}$ and $\\mathrm{Var}=\\dfrac{8}{9}$.",
                "Three labs share samples $0.2,0.3,0.5$ with false-negative rates $0.05,0.02,0.01$ for a pathogen present. If the pathogen is present and a lab is chosen by those weights, the probability a false negative occurs equals $0.021$.",
            ],
            answers=[True, True, True, True, True],
            explanations=[
                """$$P=\\dfrac{5}{10}\\cdot\\dfrac{5}{9}=\\dfrac{25}{90}=\\dfrac{5}{18}$$

Wait that's 5/18 not 1/4. Fix!

5/10 * 5/9 = 25/90 = 5/18. Statement claims 1/4 which is WRONG.

Either change claim to 5/18 True, or keep 1/4 as False trap.

I'll make it False with claim 1/4.""",
                """Pairwise disjoint implies $P(A \\cup B \\cup C)=P(A)+P(B)+P(C)=0.90$. Equal shares give $0.30$ each.

Matching these figures to the claim, the statement is True.""",
                """$$P(A \\cap B)=P(A\\mid B)P(B)=P(B\\mid A)P(A)$$

So $0.5\\,P(B)=0.5\\cdot 0.4$, hence $P(B)=0.4$.

Matching these figures to the claim, the statement is True.""",
                """$$E=3\\cdot\\tfrac{1}{3}+(-1)\\cdot\\tfrac{2}{3}=1-\\tfrac{2}{3}=\\tfrac{1}{3}$$

$$E(X^{2})=9\\cdot\\tfrac{1}{3}+1\\cdot\\tfrac{2}{3}=3+\\tfrac{2}{3}=\\tfrac{11}{3}$$

$$\\mathrm{Var}=\\tfrac{11}{3}-\\tfrac{1}{9}=\\tfrac{33-1}{9}=\\tfrac{32}{9}$$

Not 8/9! Fix.

Var = 11/3 - 1/9 = 33/9 - 1/9 = 32/9.

Change claim to Var=32/9.""",
                """Law of total probability for false negative FN:

$$P(FN)=0.2\\cdot 0.05 + 0.3\\cdot 0.02 + 0.5\\cdot 0.01 = 0.010 + 0.006 + 0.005 = 0.021$$

Matching these figures to the claim, the statement is True.""",
            ],
            overview="x",
        )
    )
    specs[-1]["statements"][0] = (
        "Without replacement from $5$ red and $5$ blue, $P(\\text{first red, second blue})=\\dfrac{5}{10}\\cdot\\dfrac{5}{9}=\\dfrac{1}{4}$."
    )
    specs[-1]["answer_key"][0] = False
    specs[-1]["tactical_explanations"][0] = expl(
        "A",
        False,
        """$$P=\\dfrac{5}{10}\\cdot\\dfrac{5}{9}=\\dfrac{25}{90}=\\dfrac{5}{18}$$

The product of the sequential probabilities is correct as $\\dfrac{5}{10}\\cdot\\dfrac{5}{9}$, but that equals $\\dfrac{5}{18}$, not $\\dfrac{1}{4}$.

$$\\dfrac{5}{18}\\approx 0.2778 \\ne 0.25$$

The solved result does not agree with the claim, so the statement is False.""",
    )
    specs[-1]["statements"][3] = (
        "A game: gain $3$ with probability $\\dfrac{1}{3}$, lose $1$ with probability $\\dfrac{2}{3}$. Then $E(X)=\\dfrac{1}{3}$ and $\\mathrm{Var}(X)=\\dfrac{32}{9}$."
    )
    specs[-1]["tactical_explanations"][3] = expl(
        "D",
        True,
        """$$E(X)=3\\cdot\\dfrac{1}{3}+(-1)\\cdot\\dfrac{2}{3}=1-\\dfrac{2}{3}=\\dfrac{1}{3}$$

$$E(X^{2})=9\\cdot\\dfrac{1}{3}+1\\cdot\\dfrac{2}{3}=3+\\dfrac{2}{3}=\\dfrac{11}{3}$$

$$\\mathrm{Var}(X)=\\dfrac{11}{3}-\\left(\\dfrac{1}{3}\\right)^{2}=\\dfrac{11}{3}-\\dfrac{1}{9}=\\dfrac{33-1}{9}=\\dfrac{32}{9}$$

Matching these figures to the claim, the statement is True.""",
    )
    specs[-1]["solution_overview"] = (
        "Mixed exam claims: a sequential without-replacement product (with an arithmetic trap), equal disjoint events, matching reverse conditionals, mean and variance of a two-outcome game, and a mixture false-negative rate."
    )

    specs.append(
        task(
            id_num=214,
            prefix="12",
            title_n=16,
            subsection="12.6",
            statements=[
                "The number of ways to choose a $3$-person committee from $9$ people is $\\binom{9}{3}=84$.",
                "If $P(A)=0.4$, $P(B)=0.5$, $P(A\\cap B)=0.3$, then $P(A\\cup B)=0.6$.",
                "Tossing a fair die, $P(\\text{prime}\\mid\\text{odd})=\\dfrac{2}{3}$ because the odd faces are $\\{1,3,5\\}$ and the primes among them are $\\{3,5\\}$.",
                "If $E(X)=0$ and $E(X^{2})=9$, then $\\mathrm{SD}(X)=3$.",
                "Prior probabilities $0.1,0.3,0.6$ with likelihoods $0.8,0.5,0.1$ for evidence $E$. Then the MAP cause given $E$ is the second cause.",
            ],
            answers=[True, True, True, True, True],
            explanations=[
                """$$\\binom{9}{3}=\\dfrac{9\\cdot 8\\cdot 7}{6}=84$$

Matching these figures to the claim, the statement is True.""",
                """$$P(A\\cup B)=0.4+0.5-0.3=0.6$$

Matching these figures to the claim, the statement is True.""",
                """Odd faces: $1,3,5$. Primes in that set: $3,5$ (note $1$ is not prime).

$$P=\\dfrac{2}{3}$$

Matching these figures to the claim, the statement is True.""",
                """$$\\mathrm{Var}(X)=E(X^{2})-(E(X))^{2}=9-0=9$$

$$\\mathrm{SD}(X)=3$$

Matching these figures to the claim, the statement is True.""",
                """Unnormalized posteriors: $0.1\\cdot 0.8=0.08$, $0.3\\cdot 0.5=0.15$, $0.6\\cdot 0.1=0.06$.

The largest is $0.15$, so the second cause is MAP.

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: a committee binomial coefficient, inclusion-exclusion, a die conditional with the non-prime 1, SD from a centered second moment, and MAP among three Bayes causes.",
        )
    )

    specs.append(
        task(
            id_num=215,
            prefix="12",
            title_n=17,
            subsection="12.6",
            statements=[
                "Drawing $2$ cards without replacement from $52$, $P(\\text{both aces})=\\dfrac{\\binom{4}{2}}{\\binom{52}{2}}=\\dfrac{6}{1326}=\\dfrac{1}{221}$.",
                "For any $A$, $P(A)+P(A^{c})=1$.",
                "If $A \\subset B$, then $P(A)\\le P(B)$ and $P(A\\mid B)=\\dfrac{P(A)}{P(B)}$ whenever $P(B)>0$.",
                "A discrete $X$ with $E(X)=2$ and $\\mathrm{Var}(X)=3$ must satisfy $E(X^{2})=7$.",
                "A blood test: prevalence $0.5\\%$, sensitivity $99\\%$, false positive rate $1\\%$. Given positive, $P(\\text{disease})\\approx 0.332$ (to three decimals).",
            ],
            answers=[True, True, True, True, True],
            explanations=[
                """$$P=\\dfrac{\\binom{4}{2}}{\\binom{52}{2}}=\\dfrac{6}{1326}=\\dfrac{1}{221}$$

Matching these figures to the claim, the statement is True.""",
                """Complement rule: $A$ and $A^{c}$ partition the sample space.

Matching these figures to the claim, the statement is True.""",
                """Monotonicity of probability gives $P(A)\\le P(B)$. Since $A \\subset B$ implies $A \\cap B=A$,

$$P(A\\mid B)=\\dfrac{P(A)}{P(B)}$$

Matching these figures to the claim, the statement is True.""",
                """$$E(X^{2})=\\mathrm{Var}(X)+(E(X))^{2}=3+4=7$$

Matching these figures to the claim, the statement is True.""",
                """$$P(+)=0.99\\cdot 0.005 + 0.01\\cdot 0.995 = 0.00495 + 0.00995 = 0.0149$$

$$P(D\\mid +)=\\dfrac{0.00495}{0.0149}=\\dfrac{495}{1490}=\\dfrac{99}{298}\\approx 0.3322$$

Rounded to three decimals: $0.332$.

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: both aces without replacement, the complement rule, conditionals under inclusion, recovering E(X^2), and a rare-disease Bayes posterior.",
        )
    )

    specs.append(
        task(
            id_num=216,
            prefix="12",
            title_n=18,
            subsection="12.6",
            statements=[
                "In a race of $6$ distinct runners, the number of possible podium (1st–2nd–3rd) outcomes is $P(6,3)=120$.",
                "If $P(A\\cup B)=0.85$ and $P(A\\cap B)=0.15$ with $P(A)=0.50$, then $P(B)=0.50$.",
                "Independent fair coin tosses: $P(\\text{H on first}\\mid\\text{exactly one H in two tosses})=\\dfrac{1}{2}$.",
                "For any random variable, $\\mathrm{Var}(X)\\ge 0$, with equality iff $X$ is almost surely constant.",
                "Two urns: Urn A has $3$ white / $2$ black; Urn B has $1$ white / $4$ black. Pick an urn at random, then a white ball. $P(\\text{Urn A}\\mid\\text{white})=\\dfrac{3}{4}$.",
            ],
            answers=[True, True, True, True, True],
            explanations=[
                """$$P(6,3)=6\\times 5\\times 4=120$$

Matching these figures to the claim, the statement is True.""",
                """$$P(A)+P(B)=P(A\\cup B)+P(A\\cap B)=0.85+0.15=1.00$$

$$P(B)=1.00-0.50=0.50$$

Matching these figures to the claim, the statement is True.""",
                """Exactly one head among two tosses: outcomes $\\{HT,TH\\}$, equally likely. Half of them have H first.

$$P=\\dfrac{1}{2}$$

Matching these figures to the claim, the statement is True.""",
                """Variance is an average of squared deviations from the mean, hence nonnegative, and vanishes only for a constant almost surely.

Matching these figures to the claim, the statement is True.""",
                """$$P(W)=\\tfrac{1}{2}\\cdot\\tfrac{3}{5}+\\tfrac{1}{2}\\cdot\\tfrac{1}{5}=\\tfrac{3}{10}+\\tfrac{1}{10}=\\tfrac{2}{5}$$

$$P(A\\mid W)=\\dfrac{\\tfrac{1}{2}\\cdot\\tfrac{3}{5}}{\\tfrac{2}{5}}=\\dfrac{3/10}{2/5}=\\dfrac{3}{4}$$

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: podium permutations, recovering P(B) from inclusion-exclusion, a conditional on exactly one head, nonnegativity of variance, and Bayes on two urns.",
        )
    )

    specs.append(
        task(
            id_num=217,
            prefix="12",
            title_n=19,
            subsection="12.6",
            statements=[
                "A standard deck: probability a single random card is a face card (J, Q, K) equals $\\dfrac{12}{52}=\\dfrac{3}{13}$.",
                "If $P(A)=0.55$ and $P(B)=0.65$, then $P(A\\cap B)$ cannot exceed $0.55$.",
                "Events $A,B$ with $P(A\\cap B)=P(A)P(B)$ are independent, even if $P(A)=0$.",
                "Let $X$ be Bernoulli with parameter $p=0.3$. Then $E(X)=0.3$ and $\\mathrm{Var}(X)=0.21$.",
                "Factory mix $25\\%$, $75\\%$ with defect $4\\%$, $2\\%$. Given defective, $P(\\text{from smaller factory})=\\dfrac{1}{2.5}=0.4$.",
            ],
            answers=[True, True, True, True, False],
            explanations=[
                """There are $3$ face ranks $\\times 4$ suits $=12$ face cards.

$$P=\\dfrac{12}{52}=\\dfrac{3}{13}$$

Matching these figures to the claim, the statement is True.""",
                """Upper Fréchet bound: $P(A\\cap B)\\le \\min(P(A),P(B))=0.55$.

Matching these figures to the claim, the statement is True.""",
                """The product definition $P(A\\cap B)=P(A)P(B)$ is exactly independence; it remains valid when $P(A)=0$ (both sides are $0$).

Matching these figures to the claim, the statement is True.""",
                """Bernoulli: $E(X)=p=0.3$, $\\mathrm{Var}(X)=p(1-p)=0.3\\cdot 0.7=0.21$.

Matching these figures to the claim, the statement is True.""",
                """$$P(D)=0.25\\cdot 0.04 + 0.75\\cdot 0.02 = 0.010 + 0.015 = 0.025$$

$$P(\\text{small}\\mid D)=\\dfrac{0.010}{0.025}=0.4$$

But $\\dfrac{1}{2.5}=0.4$ happens to equal $0.4$. So True?

Wait claim says =1/2.5=0.4 which is correct. Change to a false claim.

Claim: equals 0.25 (confusing with prior) → False.""",
            ],
            overview="x",
        )
    )
    specs[-1]["statements"][4] = (
        "Factory mix $25\\%$, $75\\%$ with defect rates $4\\%$, $2\\%$. Given a defective item, the probability it came from the smaller ($25\\%$) factory equals $25\\%$."
    )
    specs[-1]["tactical_explanations"][4] = expl(
        "E",
        False,
        """$$P(D)=0.25\\cdot 0.04 + 0.75\\cdot 0.02 = 0.010 + 0.015 = 0.025$$

$$P(\\text{small}\\mid D)=\\dfrac{0.010}{0.025}=0.40 = 40\\%$$

The claim repeats the prior $25\\%$ instead of the posterior $40\\%$.

The solved result does not agree with the claim, so the statement is False.""",
    )
    specs[-1]["solution_overview"] = (
        "Mixed exam claims: face-card probability, an upper Fréchet bound, the product definition of independence, Bernoulli mean and variance, and a Bayes posterior versus prior trap."
    )

    specs.append(
        task(
            id_num=218,
            prefix="12",
            title_n=20,
            subsection="12.6",
            statements=[
                "From $7$ men and $5$ women, the probability a random $2$-person pair is mixed gender equals $\\dfrac{7\\cdot 5}{\\binom{12}{2}}=\\dfrac{35}{66}$.",
                "If $P(A\\cup B)=P(A)+P(B)$, then $A$ and $B$ are mutually exclusive (up to a null event).",
                "A fair coin tossed twice: $P(\\text{second is H}\\mid\\text{first is H})=\\dfrac{1}{2}$ by independence.",
                "If $\\mathrm{Var}(X)=4$ and $\\mathrm{Var}(Y)=9$ for independent $X,Y$, then $\\mathrm{Var}(X+Y)=13$.",
                "Prior $P(C_{1})=P(C_{2})=P(C_{3})=\\tfrac{1}{3}$ with $P(E\\mid C_{i})=0.9,0.5,0.2$. Then $P(C_{1}\\mid E)=\\dfrac{0.9}{1.6}=\\dfrac{9}{16}$.",
            ],
            answers=[True, True, True, True, True],
            explanations=[
                """Mixed pairs: $7\\times 5=35$ unordered? Careful: $\\binom{12}{2}$ counts unordered pairs; number of mixed unordered pairs is $7\\cdot 5=35$ (each mixed pair counted once as {m,w}).

$$P=\\dfrac{35}{66}$$

Matching these figures to the claim, the statement is True.""",
                """Inclusion-exclusion forces $P(A\\cap B)=0$ when $P(A\\cup B)=P(A)+P(B)$.

Matching these figures to the claim, the statement is True.""",
                """Independent tosses: the past toss does not change $P(\\text{second H})=\\dfrac{1}{2}$.

Matching these figures to the claim, the statement is True.""",
                """Independence implies $\\mathrm{Var}(X+Y)=\\mathrm{Var}(X)+\\mathrm{Var}(Y)=4+9=13$.

Matching these figures to the claim, the statement is True.""",
                """$$P(E)=\\tfrac{1}{3}(0.9+0.5+0.2)=\\tfrac{1.6}{3}$$

$$P(C_{1}\\mid E)=\\dfrac{\\tfrac{1}{3}\\cdot 0.9}{\\tfrac{1.6}{3}}=\\dfrac{0.9}{1.6}=\\dfrac{9}{16}$$

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed exam claims: mixed-gender pairs, characterizing mutual exclusivity, independent coin tosses, variance additivity, and equal-prior three-cause Bayes.",
        )
    )

    return specs


# ---------------------------------------------------------------------------
# Chapter 13 — Binomial exam bank (ids 56–75)
# ---------------------------------------------------------------------------


def binom_pmf(n: int, k: int, p: Fraction | float) -> Fraction:
    p = Fraction(p).limit_denominator()
    return Fraction(math.comb(n, k)) * (p**k) * ((1 - p) ** (n - k))


def build_ch13() -> list[dict]:
    tasks: list[dict] = []

    # Task 56
    # n=5,p=1/2, P(X=3)=C(5,3)/32=10/32=5/16. Claim 5/16 → True
    # n=10,p=0.2, P(X≥1)=1-(0.8)^10. Claim >0.9 → 1-0.8^10=1-0.10737=0.8926 <0.9 → False
    # n=8,p=0.25: mean=2, var=1.5, sd=√1.5. Claim mean>sd → True (2>√1.5≈1.22)
    # X~Bin(20,0.5), Y~Bin(20,0.4): claim Var(X)>Var(Y): 5 > 20*0.4*0.6=4.8 → True
    # at least one in n=4,p=0.5: 1-(1/2)^4=15/16. Claim 15/16 → True

    p_ge1 = 1 - (0.8**10)
    tasks.append(
        task(
            id_num=56,
            prefix="13",
            title_n=1,
            subsection="13.5",
            statements=[
                "If $X \\sim \\mathrm{Bin}\\bigl(n=5,\\, p=\\tfrac{1}{2}\\bigr)$, then $P(X=3)=\\dfrac{5}{16}$.",
                "If $Y \\sim \\mathrm{Bin}(n=10,\\, p=0.2)$, then $P(Y \\ge 1) > 0.9$.",
                "If $Z \\sim \\mathrm{Bin}(n=8,\\, p=0.25)$, then $E(Z) > \\mathrm{SD}(Z)$.",
                "For $X \\sim \\mathrm{Bin}(20,0.5)$ and $W \\sim \\mathrm{Bin}(20,0.4)$, one has $\\mathrm{Var}(X) > \\mathrm{Var}(W)$.",
                "If each of $4$ independent switches works with probability $\\tfrac{1}{2}$, then the probability that at least one works equals $\\dfrac{15}{16}$.",
            ],
            answers=[True, False, True, True, True],
            explanations=[
                """$$P(X=3)=\\binom{5}{3}\\left(\\dfrac{1}{2}\\right)^{5}=10 \\cdot \\dfrac{1}{32}=\\dfrac{10}{32}=\\dfrac{5}{16}$$

Matching these figures to the claim, the statement is True.""",
                f"""$$P(Y \\ge 1)=1-P(Y=0)=1-(0.8)^{{10}}$$

$$(0.8)^{{10}} = {approx(0.8**10, 6)}$$

$$P(Y \\ge 1) = 1 - {approx(0.8**10, 6)} = {approx(p_ge1, 6)} < 0.9$$

The solved result does not agree with the claim, so the statement is False.""",
                """$$E(Z)=np=8\\cdot 0.25=2$$

$$\\mathrm{Var}(Z)=np(1-p)=8\\cdot 0.25\\cdot 0.75=1.5$$

$$\\mathrm{SD}(Z)=\\sqrt{1.5}\\approx 1.2247 < 2$$

So $E(Z) > \\mathrm{SD}(Z)$.

Matching these figures to the claim, the statement is True.""",
                """$$\\mathrm{Var}(X)=20\\cdot 0.5\\cdot 0.5=5$$

$$\\mathrm{Var}(W)=20\\cdot 0.4\\cdot 0.6=4.8$$

Since $5 > 4.8$, the claim holds.

Matching these figures to the claim, the statement is True.""",
                """Complement of none working:

$$P(\\text{at least one})=1-\\left(\\dfrac{1}{2}\\right)^{4}=1-\\dfrac{1}{16}=\\dfrac{15}{16}$$

Matching these figures to the claim, the statement is True.""",
            ],
            overview="Mixed binomial claims: an exact PMF at k=3, a P(Y≥1) threshold, mean versus SD, comparing two variances, and an at-least-one complement.",
        )
    )

    tasks.extend(_ch13_rest())
    assert len(tasks) == 20
    assert [t["sort_order"] for t in tasks] == list(range(56, 76))
    return tasks


def _ch13_rest() -> list[dict]:
    out = []

    # 57
    out.append(
        task(
            id_num=57,
            prefix="13",
            title_n=2,
            subsection="13.5",
            statements=[
                "If $X \\sim \\mathrm{Bin}(6,\\tfrac{1}{3})$, then $P(X=2)=\\binom{6}{2}\\left(\\tfrac{1}{3}\\right)^{2}\\left(\\tfrac{2}{3}\\right)^{4}=\\dfrac{80}{243}$.? Wait check: C(6,2)=15, (1/9)*(16/81)=240/729=80/243. Yes 15*240/729 wait.",
                "If $X \\sim \\mathrm{Bin}(5,0.4)$, then $P(X \\ge 4)=P(X=4)+P(X=5)$ equals $0.4^{5}$ alone.",
                "For $X \\sim \\mathrm{Bin}(12,0.5)$, the mean equals the variance.",
                "If $X \\sim \\mathrm{Bin}(10,0.3)$ and $Y \\sim \\mathrm{Bin}(10,0.7)$, then $E(X)=E(10-Y)$ and $\\mathrm{Var}(X)=\\mathrm{Var}(Y)$.",
                "Raising $n$ from $5$ to $10$ with fixed $p=0.2$ doubles $P(X \\ge 1)$.",
            ],
            answers=[True, False, False, True, False],
            explanations=["", "", "", "", ""],
            overview="x",
        )
    )
    # Fix statement A properly and all explanations
    out[-1]["statements"] = [
        "If $X \\sim \\mathrm{Bin}\\bigl(6,\\, \\tfrac{1}{3}\\bigr)$, then $P(X=2)=\\dfrac{80}{243}$.",
        "If $X \\sim \\mathrm{Bin}(5,0.4)$, then $P(X \\ge 4)$ equals $0.4^{5}$.",
        "For $X \\sim \\mathrm{Bin}(12,0.5)$, the mean equals the variance.",
        "If $X \\sim \\mathrm{Bin}(10,0.3)$ and $Y \\sim \\mathrm{Bin}(10,0.7)$, then $E(X)=E(10-Y)$ and $\\mathrm{Var}(X)=\\mathrm{Var}(Y)$.",
        "With success probability $p=0.2$, the probability of at least one success for $n=10$ is exactly twice that probability for $n=5$.",
    ]
    pmf2 = binom_pmf(6, 2, Fraction(1, 3))
    assert pmf2 == Fraction(80, 243), pmf2
    p1_n5 = 1 - (0.8**5)
    p1_n10 = 1 - (0.8**10)
    out[-1]["tactical_explanations"] = [
        expl(
            "A",
            True,
            f"""$$P(X=2)=\\binom{{6}}{{2}}\\left(\\dfrac{{1}}{{3}}\\right)^{{2}}\\left(\\dfrac{{2}}{{3}}\\right)^{{4}}$$

$$=15 \\cdot \\dfrac{{1}}{{9}} \\cdot \\dfrac{{16}}{{81}} = 15 \\cdot \\dfrac{{16}}{{729}} = \\dfrac{{240}}{{729}} = \\dfrac{{80}}{{243}}$$

Matching these figures to the claim, the statement is True.""",
        ),
        expl(
            "B",
            False,
            """$$P(X \\ge 4)=P(X=4)+P(X=5)$$

$$P(X=5)=\\binom{5}{5}(0.4)^{5}(0.6)^{0}=(0.4)^{5}$$

but $P(X=4)=\\binom{5}{4}(0.4)^{4}(0.6)$ is an extra positive term. So $P(X \\ge 4) > (0.4)^{5}$.

The solved result does not agree with the claim, so the statement is False.""",
        ),
        expl(
            "C",
            False,
            """$$E(X)=np=12\\cdot 0.5=6$$

$$\\mathrm{Var}(X)=np(1-p)=12\\cdot 0.5\\cdot 0.5=3$$

Mean $6$ is not equal to variance $3$. (Equality $np=np(1-p)$ would force $p=0$, impossible here.)

The solved result does not agree with the claim, so the statement is False.""",
        ),
        expl(
            "D",
            True,
            """$10-Y \\sim \\mathrm{Bin}(10,0.3)$ because successes for $Y$ are failures for the complementary count, so $10-Y$ has the same law as $X$.

Thus $E(X)=E(10-Y)=3$. Also $\\mathrm{Var}(Y)=10\\cdot 0.7\\cdot 0.3=2.1=\\mathrm{Var}(X)$.

Matching these figures to the claim, the statement is True.""",
        ),
        expl(
            "E",
            False,
            f"""$$P_{{5}}(\\text{{at least one}})=1-(0.8)^{{5}} \\approx {approx(p1_n5, 5)}$$

$$P_{{10}}(\\text{{at least one}})=1-(0.8)^{{10}} \\approx {approx(p1_n10, 5)}$$

Twice the $n=5$ value would be about ${approx(2*p1_n5, 5)}$, which is not equal to ${approx(p1_n10, 5)}$. The complement $1-(1-p)^{{n}}$ is not linear in $n$.

The solved result does not agree with the claim, so the statement is False.""",
        ),
    ]
    out[-1]["solution_overview"] = (
        "Mixed binomial claims: an exact PMF with p=1/3, a tail versus a single PMF term, mean versus variance at p=1/2, complementary success probability p↔1−p, and nonlinearity of the at-least-one probability in n."
    )

    # Continue 58-75 with compact verified specs
    specs = [
        # 58
        {
            "n": 58,
            "tn": 3,
            "stmts": [
                "If $X \\sim \\mathrm{Bin}(4,0.5)$, then $P(X=0)=\\dfrac{1}{16}$ and $P(X=4)=\\dfrac{1}{16}$.",
                "If $X \\sim \\mathrm{Bin}(8,0.25)$, then $P(X \\le 1)=P(X=0)+P(X=1)$ is strictly less than $P(X=0)+8\\cdot(0.25)\\cdot(0.75)^{7}$.",
                "For $X \\sim \\mathrm{Bin}(9,\\tfrac{1}{3})$, $E(X)=3$ and $\\mathrm{Var}(X)=2$.",
                "Among $X \\sim \\mathrm{Bin}(100,0.1)$ and $Y \\sim \\mathrm{Bin}(100,0.5)$, $\\mathrm{Var}(Y)$ is larger than $\\mathrm{Var}(X)$.",
                "The probability of at least one success in $n$ independent trials with success probability $p$ is $1-(1-p)^{n}$, not $np$.",
            ],
            "ans": [True, False, True, True, True],
            "expl": [
                """By symmetry at $p=\\tfrac{1}{2}$,

$$P(X=0)=P(X=4)=\\left(\\dfrac{1}{2}\\right)^{4}=\\dfrac{1}{16}$$

Matching these figures to the claim, the statement is True.""",
                """The binomial formula already gives

$$P(X=1)=\\binom{8}{1}(0.25)^{1}(0.75)^{7}=8\\cdot(0.25)\\cdot(0.75)^{7}$$

so $P(X\\le 1)=P(X=0)+P(X=1)$ equals $P(X=0)+8\\cdot(0.25)\\cdot(0.75)^{7}$, and is not strictly less.

The solved result does not agree with the claim, so the statement is False.""",
                """$$E=9\\cdot\\tfrac{1}{3}=3$$

$$\\mathrm{Var}=9\\cdot\\tfrac{1}{3}\\cdot\\tfrac{2}{3}=2$$

Matching these figures to the claim, the statement is True.""",
                """$$\\mathrm{Var}(X)=100\\cdot 0.1\\cdot 0.9=9$$

$$\\mathrm{Var}(Y)=100\\cdot 0.5\\cdot 0.5=25 > 9$$

Matching these figures to the claim, the statement is True.""",
                """Independence yields $P(\\text{no success})=(1-p)^{n}$, so

$$P(\\text{at least one})=1-(1-p)^{n}$$

The product $np$ is the mean, not that probability (except in rough rare-event heuristics).

Matching these figures to the claim, the statement is True.""",
            ],
            "ov": "Mixed binomial claims: symmetric endpoints at p=1/2, a false strict inequality on a lower tail, mean and variance at p=1/3, variance maximized near p=1/2, and at-least-one versus np.",
        },
        # 59
        {
            "n": 59,
            "tn": 4,
            "stmts": [
                "If $X \\sim \\mathrm{Bin}(7,0.5)$, then $P(X=3)=P(X=4)=\\dfrac{35}{128}$.",
                "If $X \\sim \\mathrm{Bin}(6,0.5)$, then $P(X \\ge 4)=P(X \\le 2)$ by symmetry.",
                "Doubling $p$ from $0.2$ to $0.4$ with $n=10$ doubles the variance.",
                "If $X \\sim \\mathrm{Bin}(5,0.2)$ and $Y \\sim \\mathrm{Bin}(5,0.8)$, then $P(X=1)=P(Y=4)$.",
                "For $n=3$ and $p=0.1$, $1-(1-p)^{n} = 1-(0.9)^{3} = 0.271$.",
            ],
            "ans": [True, True, False, True, True],
            "expl": [
                """$$\\binom{7}{3}=\\binom{7}{4}=35$$

$$P(X=3)=35\\cdot\\left(\\tfrac{1}{2}\\right)^{7}=\\dfrac{35}{128}=P(X=4)$$

Matching these figures to the claim, the statement is True.""",
                """With $p=\\tfrac{1}{2}$, $P(X=k)=P(X=n-k)$, so

$$P(X\\ge 4)=P(X\\le 2)$$

Matching these figures to the claim, the statement is True.""",
                """$$\\mathrm{Var}_{0.2}=10\\cdot 0.2\\cdot 0.8=1.6$$

$$\\mathrm{Var}_{0.4}=10\\cdot 0.4\\cdot 0.6=2.4$$

and $2.4 \\ne 2\\cdot 1.6=3.2$. Variance $np(1-p)$ is not linear in $p$.

The solved result does not agree with the claim, so the statement is False.""",
                """$$P(X=1)=\\binom{5}{1}(0.2)^{1}(0.8)^{4}$$

$$P(Y=4)=\\binom{5}{4}(0.8)^{4}(0.2)^{1}$$

and $\\binom{5}{1}=\\binom{5}{4}$, so the two probabilities match.

Matching these figures to the claim, the statement is True.""",
                """$$1-(0.9)^{3}=1-0.729=0.271$$

Matching these figures to the claim, the statement is True.""",
            ],
            "ov": "Mixed binomial claims: symmetric PMF values, a symmetric tail equality, nonlinear variance in p, complementary p↔1−p PMF identity, and a numerical at-least-one evaluation.",
        },
        # 60
        {
            "n": 60,
            "tn": 5,
            "stmts": [
                "If $X \\sim \\mathrm{Bin}(3,\\tfrac{2}{5})$, then $P(X=1)=3\\cdot\\tfrac{2}{5}\\cdot\\left(\\tfrac{3}{5}\\right)^{2}=\\dfrac{54}{125}$.",
                "If $X \\sim \\mathrm{Bin}(10,0.5)$, then $P(X \\ge 6) > \\tfrac{1}{2}$.",
                "For $X \\sim \\mathrm{Bin}(20,0.25)$, $E(X)=5$ and $\\mathrm{SD}(X)=\\sqrt{3.75}$.",
                "The ratio $\\dfrac{P(X=k+1)}{P(X=k)}$ for $X\\sim\\mathrm{Bin}(n,p)$ equals $\\dfrac{n-k}{k+1}\\cdot\\dfrac{p}{1-p}$.",
                "Changing $n$ from $4$ to $5$ with $p=0.5$ multiplies $P(X=0)$ by $\\tfrac{1}{2}$.",
            ],
            "ans": [True, False, True, True, True],
            "expl": [
                """$$P(X=1)=\\binom{3}{1}\\left(\\tfrac{2}{5}\\right)\\left(\\tfrac{3}{5}\\right)^{2}=3\\cdot\\tfrac{2}{5}\\cdot\\tfrac{9}{25}=\\dfrac{54}{125}$$

Matching these figures to the claim, the statement is True.""",
                """By symmetry at $p=\\tfrac{1}{2}$, $P(X\\ge 6)=P(X\\le 4)$, and

$$P(X\\ge 6)+P(X=5)+P(X\\le 4)=1$$

with $P(X\\ge 6)=P(X\\le 4)$ and $P(X=5)=\\binom{10}{5}/1024>0$, so each strict half-tail is $<\\tfrac{1}{2}$.

The solved result does not agree with the claim, so the statement is False.""",
                """$$E=20\\cdot 0.25=5$$

$$\\mathrm{Var}=20\\cdot 0.25\\cdot 0.75=3.75$$

$$\\mathrm{SD}=\\sqrt{3.75}$$

Matching these figures to the claim, the statement is True.""",
                """From the PMF ratio of consecutive binomial coefficients and powers of $p$:

$$\\dfrac{P(X=k+1)}{P(X=k)}=\\dfrac{n-k}{k+1}\\cdot\\dfrac{p}{1-p}$$

Matching these figures to the claim, the statement is True.""",
                """$$P_{n=4}(X=0)=(0.5)^{4}=\\tfrac{1}{16}$$

$$P_{n=5}(X=0)=(0.5)^{5}=\\tfrac{1}{32}=\\tfrac{1}{2}\\cdot\\tfrac{1}{16}$$

Matching these figures to the claim, the statement is True.""",
            ],
            "ov": "Mixed binomial claims: a three-trial PMF, a strict majority-tail trap at p=1/2, mean and SD, the consecutive PMF ratio, and how P(X=0) scales with n at p=1/2.",
        },
    ]

    for s in specs:
        out.append(
            task(
                id_num=s["n"],
                prefix="13",
                title_n=s["tn"],
                subsection="13.5",
                statements=s["stmts"],
                answers=s["ans"],
                explanations=s["expl"],
                overview=s["ov"],
            )
        )

    out.extend(_ch13_61_75())
    return out


def _ch13_61_75() -> list[dict]:
    rows = []

    def T(n, tn, stmts, ans, expl, ov):
        return task(
            id_num=n,
            prefix="13",
            title_n=tn,
            subsection="13.5",
            statements=stmts,
            answers=ans,
            explanations=expl,
            overview=ov,
        )

    rows.append(
        T(
            61,
            6,
            [
                "If $X \\sim \\mathrm{Bin}(5,0.6)$, then $P(X=5)=(0.6)^{5}=0.07776$.",
                "If $X \\sim \\mathrm{Bin}(4,0.3)$, then $P(X \\ge 1)=1-(0.7)^{4}$.",
                "For $X \\sim \\mathrm{Bin}(16,0.25)$, $\\mathrm{Var}(X)=E(X)$.",
                "If $X \\sim \\mathrm{Bin}(8,0.5)$ and $Y \\sim \\mathrm{Bin}(8,0.25)$, then $\\dfrac{E(X)}{E(Y)}=2$.",
                "The chance of at least one six in $4$ independent fair die rolls equals $1-\\left(\\dfrac{5}{6}\\right)^{4}$.",
            ],
            [True, True, True, True, True],
            [
                """$$P(X=5)=\\binom{5}{5}(0.6)^{5}(0.4)^{0}=(0.6)^{5}=0.07776$$

Matching these figures to the claim, the statement is True.""",
                """$$P(X\\ge 1)=1-P(X=0)=1-(0.7)^{4}$$

Matching these figures to the claim, the statement is True.""",
                """$$E=16\\cdot 0.25=4$$

$$\\mathrm{Var}=16\\cdot 0.25\\cdot 0.75=3$$

Wait Var≠E. Fix to False or change n,p.

For E=Var: np=np(1-p) ⇒ p=0. Impossible unless... 

Use n=16,p=0.5: E=8, Var=4. Still no.

Actually np = np(1-p) ⇒ p=0. Never for p in (0,1).

Change statement: Var(X)=3 and E(X)=4 → compare claim "Var=E" False.""",
                """$$E(X)=8\\cdot 0.5=4$$

$$E(Y)=8\\cdot 0.25=2$$

$$\\dfrac{4}{2}=2$$

Matching these figures to the claim, the statement is True.""",
                """Each roll is a success (six) with $p=\\tfrac{1}{6}$. Then

$$P(\\text{at least one six})=1-\\left(\\dfrac{5}{6}\\right)^{4}$$

Matching these figures to the claim, the statement is True.""",
            ],
            "x",
        )
    )
    rows[-1]["statements"][2] = (
        "For $X \\sim \\mathrm{Bin}(16,0.25)$, one has $\\mathrm{Var}(X)=E(X)$."
    )
    rows[-1]["answer_key"][2] = False
    rows[-1]["tactical_explanations"][2] = expl(
        "C",
        False,
        """$$E(X)=16\\cdot 0.25=4$$

$$\\mathrm{Var}(X)=16\\cdot 0.25\\cdot 0.75=3$$

Since $3 \\ne 4$, mean and variance are not equal.

The solved result does not agree with the claim, so the statement is False.""",
    )
    rows[-1]["solution_overview"] = (
        "Mixed binomial claims: P(X=n), an at-least-one complement, mean versus variance, a ratio of means, and at least one six on four dice."
    )

    more = [
        (
            62,
            7,
            [
                "If $X \\sim \\mathrm{Bin}(9,0.5)$, then $P(X=5)=\\dfrac{\\binom{9}{5}}{512}=\\dfrac{126}{512}=\\dfrac{63}{256}$.",
                "If $X \\sim \\mathrm{Bin}(7,0.2)$, then $P(X \\ge 2)=1-P(X=0)-P(X=1)$.",
                "For $X \\sim \\mathrm{Bin}(50,0.02)$, $E(X)=1$ and $\\mathrm{Var}(X)=0.98$.",
                "If $X \\sim \\mathrm{Bin}(12,0.4)$ and $Y \\sim \\mathrm{Bin}(12,0.6)$, then $\\mathrm{SD}(X)=\\mathrm{SD}(Y)$.",
                "For fixed $p \\in (0,1)$, the map $n \\mapsto 1-(1-p)^{n}$ is strictly increasing in the positive integer $n$.",
            ],
            [True, True, True, True, True],
            [
                """$$P(X=5)=\\binom{9}{5}\\left(\\tfrac{1}{2}\\right)^{9}=\\dfrac{126}{512}=\\dfrac{63}{256}$$

Matching these figures to the claim, the statement is True.""",
                """The events $\\{0\\}$ and $\\{1\\}$ partition the complement of $\\{X\\ge 2\\}$ on $\\{0,\\dots,7\\}$.

Matching these figures to the claim, the statement is True.""",
                """$$E=50\\cdot 0.02=1$$

$$\\mathrm{Var}=50\\cdot 0.02\\cdot 0.98=0.98$$

Matching these figures to the claim, the statement is True.""",
                """$$\\mathrm{Var}(X)=12\\cdot 0.4\\cdot 0.6=2.88=\\mathrm{Var}(Y)$$

so the standard deviations match.

Matching these figures to the claim, the statement is True.""",
                """Since $0<1-p<1$, raising $n$ strictly decreases $(1-p)^{n}$ and therefore strictly increases $1-(1-p)^{n}$.

Matching these figures to the claim, the statement is True.""",
            ],
            "Mixed binomial claims: a fair-coin PMF simplification, a two-term lower-tail complement, rare-event mean/variance, SD symmetry in p↔1−p, and monotonicity of at-least-one in n.",
        ),
        (
            63,
            8,
            [
                "If $X \\sim \\mathrm{Bin}(4,\\tfrac{1}{4})$, then $P(X=2)=\\binom{4}{2}\\left(\\tfrac{1}{4}\\right)^{2}\\left(\\tfrac{3}{4}\\right)^{2}=\\dfrac{54}{256}=\\dfrac{27}{128}$.",
                "If $X \\sim \\mathrm{Bin}(5,0.5)$, then $P(X > 2)=P(X < 2)+\\tfrac{1}{2}P(X=2)$ is false because of asymmetry. Wait.",
                "For $X \\sim \\mathrm{Bin}(10,0.9)$, $\\mathrm{SD}(X)=\\sqrt{0.9}$.",
                "Comparing $X\\sim\\mathrm{Bin}(5,0.5)$ and $Y\\sim\\mathrm{Bin}(10,0.5)$, one has $E(Y)=2E(X)$ and $\\mathrm{Var}(Y)=2\\mathrm{Var}(X)$.",
                "The probability of no successes in $n=6$ trials with $p=\\tfrac{1}{3}$ equals $\\left(\\tfrac{2}{3}\\right)^{6}$.",
            ],
            [True, True, False, True, True],
            [
                """$$P=6\\cdot\\dfrac{1}{16}\\cdot\\dfrac{9}{16}=\\dfrac{54}{256}=\\dfrac{27}{128}$$

Matching these figures to the claim, the statement is True.""",
                # Fix B - use a clean true statement
                """placeholder""",
                """$$\\mathrm{Var}=10\\cdot 0.9\\cdot 0.1=0.9$$

$$\\mathrm{SD}=\\sqrt{0.9}$$

Actually that IS true! Change to claim SD=0.9 → False.""",
                """$$E(X)=2.5$, $E(Y)=5=2E(X)$

$$\\mathrm{Var}(X)=2.5$, $\\mathrm{Var}(Y)=5=2\\mathrm{Var}(X)$

Matching these figures to the claim, the statement is True.""",
                """$$P(X=0)=(1-p)^{n}=\\left(\\tfrac{2}{3}\\right)^{6}$$

Matching these figures to the claim, the statement is True.""",
            ],
            "x",
        ),
    ]

    # Fix 63 carefully as standalone
    rows.append(
        T(
            62,
            7,
            more[0][2],
            more[0][3],
            more[0][4],
            more[0][5],
        )
    )

    rows.append(
        T(
            63,
            8,
            [
                "If $X \\sim \\mathrm{Bin}\\bigl(4,\\, \\tfrac{1}{4}\\bigr)$, then $P(X=2)=\\dfrac{27}{128}$.",
                "If $X \\sim \\mathrm{Bin}(5,0.5)$, then $P(X \\ge 3)=P(X \\le 2)$.",
                "For $X \\sim \\mathrm{Bin}(10,0.9)$, $\\mathrm{SD}(X)=0.9$.",
                "Comparing $X\\sim\\mathrm{Bin}(5,0.5)$ and $Y\\sim\\mathrm{Bin}(10,0.5)$, one has $E(Y)=2E(X)$ and $\\mathrm{Var}(Y)=2\\mathrm{Var}(X)$.",
                "The probability of no successes in $n=6$ trials with $p=\\tfrac{1}{3}$ equals $\\left(\\tfrac{2}{3}\\right)^{6}$.",
            ],
            [True, True, False, True, True],
            [
                """$$P(X=2)=\\binom{4}{2}\\left(\\dfrac{1}{4}\\right)^{2}\\left(\\dfrac{3}{4}\\right)^{2}=6\\cdot\\dfrac{1}{16}\\cdot\\dfrac{9}{16}=\\dfrac{54}{256}=\\dfrac{27}{128}$$

Matching these figures to the claim, the statement is True.""",
                """At $p=\\tfrac{1}{2}$ and odd $n=5$, symmetry maps $k$ to $5-k$. The split $\\{0,1,2\\}$ versus $\\{3,4,5\\}$ are paired ($0\\leftrightarrow 5$, $1\\leftrightarrow 4$, $2\\leftrightarrow 3$), so the two halves have equal total probability $\\tfrac{1}{2}$.

Matching these figures to the claim, the statement is True.""",
                """$$\\mathrm{Var}(X)=10\\cdot 0.9\\cdot 0.1=0.9$$

$$\\mathrm{SD}(X)=\\sqrt{0.9}\\approx 0.9487 \\ne 0.9$$

The claim confuses SD with variance.

The solved result does not agree with the claim, so the statement is False.""",
                """$$E(X)=2.5$, $E(Y)=5=2E(X)$

$$\\mathrm{Var}(X)=\\tfrac{5}{4}?$ Wait $5\\cdot0.5\\cdot0.5=1.25$, $Y$: $10\\cdot0.25=2.5=2\\cdot 1.25$.

Matching these figures to the claim, the statement is True.""",
                """$$P(X=0)=\\left(\\dfrac{2}{3}\\right)^{6}$$

Matching these figures to the claim, the statement is True.""",
            ],
            "Mixed binomial claims: a p=1/4 PMF, a symmetric half-split on odd n, Var versus SD, linear scaling of mean and variance in n at fixed p, and P(X=0).",
        )
    )
    # Fix explanation D formatting (broken $)
    rows[-1]["tactical_explanations"][3] = expl(
        "D",
        True,
        """$$E(X)=5\\cdot 0.5=2.5, \\qquad E(Y)=10\\cdot 0.5=5=2E(X)$$

$$\\mathrm{Var}(X)=5\\cdot 0.5\\cdot 0.5=1.25, \\qquad \\mathrm{Var}(Y)=10\\cdot 0.5\\cdot 0.5=2.5=2\\,\\mathrm{Var}(X)$$

Matching these figures to the claim, the statement is True.""",
    )

    # 64-75
    for item in [
        dict(
            n=64,
            tn=9,
            stmts=[
                "If $X \\sim \\mathrm{Bin}(8,0.5)$, then $P(X=4)=\\dfrac{\\binom{8}{4}}{256}=\\dfrac{70}{256}=\\dfrac{35}{128}$.",
                "If $X \\sim \\mathrm{Bin}(3,0.8)$, then $P(X \\ge 2)=3(0.8)^{2}(0.2)+(0.8)^{3}$.",
                "For $X \\sim \\mathrm{Bin}(25,0.2)$, $E(X)=5$ and $\\mathrm{Var}(X)=4$.",
                "If $X \\sim \\mathrm{Bin}(6,0.5)$ and $Y \\sim \\mathrm{Bin}(6,0.5)$ are independent, then $X+Y \\sim \\mathrm{Bin}(12,0.5)$.",
                "At least one success with $n=2$, $p=0.4$ equals $0.64$, which is less than $2\\cdot 0.4=0.8$.",
            ],
            ans=[True, True, True, True, True],
            expl=[
                """$$P(X=4)=\\binom{8}{4}\\left(\\tfrac{1}{2}\\right)^{8}=\\dfrac{70}{256}=\\dfrac{35}{128}$$

Matching these figures to the claim, the statement is True.""",
                """$$P(X\\ge 2)=P(X=2)+P(X=3)$$

$$=\\binom{3}{2}(0.8)^{2}(0.2)+\\binom{3}{3}(0.8)^{3}=3(0.8)^{2}(0.2)+(0.8)^{3}$$

Matching these figures to the claim, the statement is True.""",
                """$$E=25\\cdot 0.2=5$$

$$\\mathrm{Var}=25\\cdot 0.2\\cdot 0.8=4$$

Matching these figures to the claim, the statement is True.""",
                """The sum of independent binomials with a common $p$ is binomial with added $n$ parameters.

Matching these figures to the claim, the statement is True.""",
                """$$1-(0.6)^{2}=1-0.36=0.64 < 0.8$$

The linear approximation $np$ overshoots the true at-least-one probability here.

Matching these figures to the claim, the statement is True.""",
            ],
            ov="Mixed binomial claims: central PMF at p=1/2, an upper tail as a two-term sum, mean and variance, adding independent binomials, and at-least-one versus np.",
        ),
        dict(
            n=65,
            tn=10,
            stmts=[
                "If $X \\sim \\mathrm{Bin}(5,\\tfrac{1}{5})$, then $P(X=0)=\\left(\\tfrac{4}{5}\\right)^{5}$.",
                "If $X \\sim \\mathrm{Bin}(9,0.5)$, then $P(X \\le 3) < P(X \\ge 6)$ because left and right tails are unequal at odd n? Actually by symmetry P(X≤3)=P(X≥6).",
                "For $X \\sim \\mathrm{Bin}(18,\\tfrac{1}{3})$, $E(X)=6$ and $\\mathrm{SD}(X)=2$.",
                "The binomial variance $np(1-p)$ as a function of $p\\in[0,1]$ for fixed $n$ is maximized at $p=\\tfrac{1}{2}$.",
                "If each of $n=10$ alarms triggers independently with probability $0.05$, then $P(\\text{at least one trigger})=1-(0.95)^{10}$.",
            ],
            ans=[True, False, True, True, True],
            expl=[
                """$$P(X=0)=(1-p)^{n}=\\left(\\dfrac{4}{5}\\right)^{5}$$

Matching these figures to the claim, the statement is True.""",
                """Symmetry at $p=\\tfrac{1}{2}$ gives $P(X\\le 3)=P(X\\ge 6)$, so the strict inequality is false.

The solved result does not agree with the claim, so the statement is False.""",
                """$$E=18\\cdot\\tfrac{1}{3}=6$$

$$\\mathrm{Var}=18\\cdot\\tfrac{1}{3}\\cdot\\tfrac{2}{3}=4$$

$$\\mathrm{SD}=2$$

Matching these figures to the claim, the statement is True.""",
                """The quadratic $p(1-p)=p-p^{2}$ on $[0,1]$ peaks at $p=\\tfrac{1}{2}$.

Matching these figures to the claim, the statement is True.""",
                """Complement of zero triggers:

$$1-(0.95)^{10}$$

Matching these figures to the claim, the statement is True.""",
            ],
            ov="Mixed binomial claims: P(X=0), a false asymmetric-tail claim, mean and SD, variance maximized at p=1/2, and an at-least-one alarm probability.",
        ),
    ]:
        # fix stmt B for 65
        if item["n"] == 65:
            item["stmts"][1] = (
                "If $X \\sim \\mathrm{Bin}(9,0.5)$, then $P(X \\le 3) < P(X \\ge 6)$."
            )
        rows.append(
            T(item["n"], item["tn"], item["stmts"], item["ans"], item["expl"], item["ov"])
        )

    # 66-75 final ten
    final = [
        (66, 11,
         ["If $X \\sim \\mathrm{Bin}(6,0.5)$, then $P(X=3)=\\dfrac{20}{64}=\\dfrac{5}{16}$.",
          "If $X \\sim \\mathrm{Bin}(4,0.25)$, then $P(X \\ge 3)=\\binom{4}{3}(0.25)^{3}(0.75)+(0.25)^{4}$.",
          "For $X \\sim \\mathrm{Bin}(30,0.1)$, $E(X)=3$ and $\\mathrm{Var}(X)=2.7$.",
          "If $X \\sim \\mathrm{Bin}(7,0.4)$ and $Y \\sim \\mathrm{Bin}(7,0.6)$, then $E(X)+E(Y)=7$.",
          "With $p=0.5$ and $n=3$, $1-(1-p)^{n}=\\dfrac{7}{8}$."],
         [True, True, True, True, True],
         ["""$$\\binom{6}{3}/2^{6}=20/64=5/16$$

Matching these figures to the claim, the statement is True.""",
          """$$P(X\\ge 3)=P(X=3)+P(X=4)$$ expands exactly to the displayed sum.

Matching these figures to the claim, the statement is True.""",
          """$$E=30\\cdot 0.1=3$$

$$\\mathrm{Var}=30\\cdot 0.1\\cdot 0.9=2.7$$

Matching these figures to the claim, the statement is True.""",
          """$$E(X)=2.8$, $E(Y)=4.2$, sum $7=n$.

Matching these figures to the claim, the statement is True.""",
          """$$1-(0.5)^{3}=1-\\tfrac{1}{8}=\\tfrac{7}{8}$$

Matching these figures to the claim, the statement is True."""],
         "Mixed binomial claims: central PMF, a three-or-more tail, rare-event moments, complementary means summing to n, and at-least-one at p=1/2."),
        (67, 12,
         ["If $X \\sim \\mathrm{Bin}(10,0.2)$, then $P(X=2)=\\binom{10}{2}(0.2)^{2}(0.8)^{8}$.",
          "If $X \\sim \\mathrm{Bin}(5,0.5)$, then $P(X \\ge 1)=\\dfrac{31}{32}$.",
          "For $X \\sim \\mathrm{Bin}(12,0.25)$, $\\mathrm{SD}(X)=\\sqrt{\\dfrac{9}{4}}=\\dfrac{3}{2}$.? Var=12*0.25*0.75=2.25=9/4, SD=1.5 yes.",
          "The ratio $\\dfrac{\\mathrm{Var}(X)}{E(X)}$ for $X\\sim\\mathrm{Bin}(n,p)$ equals $1-p$.",
          "Increasing $p$ from $0.1$ to $0.2$ with $n=5$ more than doubles $1-(1-p)^{5}$."],
         [True, True, True, True, False],
         ["""This is the binomial PMF definition at $k=2$.

Matching these figures to the claim, the statement is True.""",
          """$$P(X\\ge 1)=1-(1/2)^{5}=1-1/32=31/32$$

Matching these figures to the claim, the statement is True.""",
          """$$\\mathrm{Var}=12\\cdot 0.25\\cdot 0.75=2.25=\\dfrac{9}{4}$$

$$\\mathrm{SD}=\\dfrac{3}{2}$$

Matching these figures to the claim, the statement is True.""",
          """$$\\dfrac{np(1-p)}{np}=1-p$$

Matching these figures to the claim, the statement is True.""",
          f"""$$a=1-(0.9)^{5}\\approx {approx(1-0.9**5,5)}$$

$$b=1-(0.8)^{5}\\approx {approx(1-0.8**5,5)}$$

$$2a\\approx {approx(2*(1-0.9**5),5)}$$

Since $b < 2a$, doubling does not occur.

The solved result does not agree with the claim, so the statement is False."""],
         "Mixed binomial claims: a PMF template, at-least-one for fair bits, an exact SD, the Var/mean ratio 1−p, and a false doubling claim when p increases."),
        (68, 13,
         ["If $X \\sim \\mathrm{Bin}(7,\\tfrac{1}{2})$, then $P(X=0)=\\dfrac{1}{128}$.",
          "If $X \\sim \\mathrm{Bin}(6,0.4)$, then $P(X > 5)=P(X=6)=(0.4)^{6}$.",
          "For $X \\sim \\mathrm{Bin}(40,0.5)$, $E(X)=20$ and $\\mathrm{Var}(X)=10$.",
          "If $X \\sim \\mathrm{Bin}(9,0.3)$ and $Y \\sim \\mathrm{Bin}(9,0.3)$, then it is not generally true that $X+Y \\sim \\mathrm{Bin}(18,0.3)$ unless $X,Y$ are independent.",
          "Geometric waiting time until first success is not a binomial count, even though both use a success probability $p$."],
         [True, True, True, True, True],
         ["""$$P(X=0)=(1/2)^{7}=1/128$$

Matching these figures to the claim, the statement is True.""",
          """On $\\{0,\\dots,6\\}$, $X>5$ means $X=6$ only.

Matching these figures to the claim, the statement is True.""",
          """$$E=20$, $\\mathrm{Var}=40\\cdot 0.25=10$$

Matching these figures to the claim, the statement is True.""",
          """Without independence, the sum need not be binomial even with identical $n,p$ margins.

Matching these figures to the claim, the statement is True.""",
          """Binomial counts successes in a fixed $n$; geometric counts trials until the first success. Different sample spaces and PMFs.

Matching these figures to the claim, the statement is True."""],
         "Mixed binomial claims: P(X=0), a singleton upper tail, mean and variance at p=1/2, independence needed to add binomials, and binomial versus geometric."),
        (69, 14,
         ["If $X \\sim \\mathrm{Bin}(5,0.4)$, then $P(X=3)=\\binom{5}{3}(0.4)^{3}(0.6)^{2}=10\\cdot 0.064\\cdot 0.36=0.2304$.",
          "If $X \\sim \\mathrm{Bin}(8,0.5)$, then $P(X \\le 2)=P(X \\ge 6)$.",
          "For $X \\sim \\mathrm{Bin}(15,0.2)$, $E(X)=3 > \\mathrm{SD}(X)=\\sqrt{2.4}$.",
          "Among binomials with $n=20$, the variance at $p=0.3$ exceeds the variance at $p=0.1$.",
          "At least one defective in a sample of $n=20$ with $p=0.01$ equals $1-(0.99)^{20}$, which is less than $0.2$."],
         [True, True, True, True, True],
         ["""$$10\\cdot(0.4)^{3}\\cdot(0.6)^{2}=10\\cdot 0.064\\cdot 0.36=0.2304$$

Matching these figures to the claim, the statement is True.""",
          """Symmetry $k\\leftrightarrow 8-k$ identifies those two tails.

Matching these figures to the claim, the statement is True.""",
          """$$E=3$$

$$\\mathrm{Var}=15\\cdot 0.2\\cdot 0.8=2.4$$

$$\\mathrm{SD}=\\sqrt{2.4}\\approx 1.55 < 3$$

Matching these figures to the claim, the statement is True.""",
          """$$20\\cdot 0.3\\cdot 0.7=4.2 > 20\\cdot 0.1\\cdot 0.9=1.8$$

Matching these figures to the claim, the statement is True.""",
          f"""$$1-(0.99)^{{20}} \\approx {approx(1-0.99**20, 5)} < 0.2$$

Matching these figures to the claim, the statement is True."""],
         "Mixed binomial claims: a decimal PMF, symmetric tails, mean above SD, variance comparison in p, and a small at-least-one probability."),
        (70, 15,
         ["If $X \\sim \\mathrm{Bin}(3,0.5)$, the distribution of $X$ is $\\bigl(\\tfrac{1}{8},\\tfrac{3}{8},\\tfrac{3}{8},\\tfrac{1}{8}\\bigr)$ on $0,1,2,3$.",
          "If $X \\sim \\mathrm{Bin}(10,0.4)$, then $P(X \\ge 10)=P(X=10)=(0.4)^{10}$.",
          "For $X \\sim \\mathrm{Bin}(24,\\tfrac{1}{6})$, $E(X)=4$ and $\\mathrm{Var}(X)=\\tfrac{10}{3}$.",
          "If $X \\sim \\mathrm{Bin}(n,p)$ then $\\mathrm{Var}(n-X)=\\mathrm{Var}(X)$.",
          "The identity $1-(1-p)^{n}=\\sum_{{k=1}}^{{n}}\\binom{{n}}{{k}}p^{{k}}(1-p)^{{n-k}}$ holds for binomial probabilities."],
         [True, True, True, True, True],
         ["""Binomial coefficients $1,3,3,1$ over $2^{3}=8$ give those masses.

Matching these figures to the claim, the statement is True.""",
          """Only $k=10$ lies in $\\{10\\}$ when $n=10$.

Matching these figures to the claim, the statement is True.""",
          """$$E=24\\cdot\\tfrac{1}{6}=4$$

$$\\mathrm{Var}=24\\cdot\\tfrac{1}{6}\\cdot\\tfrac{5}{6}=\\tfrac{20}{6}=\\tfrac{10}{3}$$

Matching these figures to the claim, the statement is True.""",
          """$n-X$ is $\\mathrm{Bin}(n,1-p)$ with the same variance $np(1-p)$.

Matching these figures to the claim, the statement is True.""",
          """Both sides equal $P(X\\ge 1)$ for $X\\sim\\mathrm{Bin}(n,p)$.

Matching these figures to the claim, the statement is True."""],
         "Mixed binomial claims: the full three-trial fair distribution, a singleton top tail, die-style moments, invariance of variance under complement counting, and the binomial expansion of at-least-one."),
    ]

    # Fix 67 statement C (remove comment)
    # already OK in tuple - wait stmt has "? Var=..." - need clean
    # I'll rebuild 67 stmts when appending

    for n, tn, stmts, ans, expl, ov in final:
        if n == 67:
            stmts = [
                "If $X \\sim \\mathrm{Bin}(10,0.2)$, then $P(X=2)=\\binom{10}{2}(0.2)^{2}(0.8)^{8}$.",
                "If $X \\sim \\mathrm{Bin}(5,0.5)$, then $P(X \\ge 1)=\\dfrac{31}{32}$.",
                "For $X \\sim \\mathrm{Bin}(12,0.25)$, $\\mathrm{SD}(X)=\\dfrac{3}{2}$.",
                "The ratio $\\dfrac{\\mathrm{Var}(X)}{E(X)}$ for $X\\sim\\mathrm{Bin}(n,p)$ with $p\\in(0,1)$ equals $1-p$.",
                "Increasing $p$ from $0.1$ to $0.2$ with $n=5$ more than doubles $1-(1-p)^{5}$.",
            ]
            # fix expl D for 66 - broken dollars
        if n == 66:
            expl = [
                """$$P(X=3)=\\dfrac{\\binom{6}{3}}{2^{6}}=\\dfrac{20}{64}=\\dfrac{5}{16}$$

Matching these figures to the claim, the statement is True.""",
                """$$P(X\\ge 3)=P(X=3)+P(X=4)=\\binom{4}{3}(0.25)^{3}(0.75)+(0.25)^{4}$$

Matching these figures to the claim, the statement is True.""",
                """$$E(X)=30\\cdot 0.1=3$$

$$\\mathrm{Var}(X)=30\\cdot 0.1\\cdot 0.9=2.7$$

Matching these figures to the claim, the statement is True.""",
                """$$E(X)=7\\cdot 0.4=2.8$$

$$E(Y)=7\\cdot 0.6=4.2$$

$$E(X)+E(Y)=7$$

Matching these figures to the claim, the statement is True.""",
                """$$1-(0.5)^{3}=1-\\dfrac{1}{8}=\\dfrac{7}{8}$$

Matching these figures to the claim, the statement is True.""",
            ]
        rows.append(T(n, tn, stmts, ans, expl, ov))

    # 71-75
    for n, tn, stmts, ans, expls, ov in [
        (71, 16,
         ["If $X \\sim \\mathrm{Bin}(4,0.6)$, then $P(X=2)=\\binom{4}{2}(0.6)^{2}(0.4)^{2}=6\\cdot 0.36\\cdot 0.16=0.3456$.",
          "If $X \\sim \\mathrm{Bin}(12,0.5)$, then $P(X \\ge 7) = P(X \\le 5)$.",
          "For $X \\sim \\mathrm{Bin}(9,0.5)$, mean and variance satisfy $E(X)=2\\,\\mathrm{Var}(X)$.",
          "If $X \\sim \\mathrm{Bin}(20,0.25)$ and $Y \\sim \\mathrm{Bin}(40,0.25)$, then $\\dfrac{E(Y)}{E(X)}=2$ and $\\dfrac{\\mathrm{Var}(Y)}{\\mathrm{Var}(X)}=2$.",
          "For $n=8$ and $p=0.25$, $1-(0.75)^{8} > 0.9$."],
         [True, True, True, True, False],
         ["""Direct PMF evaluation yields $0.3456$.

Matching these figures to the claim, the statement is True.""",
         """Symmetry about $6$ pairs $k$ with $12-k$, so $P(X\\ge 7)=P(X\\le 5)$.

Matching these figures to the claim, the statement is True.""",
         """$$E=4.5$$

$$\\mathrm{Var}=9\\cdot 0.25=2.25$$

$$E=2\\cdot\\mathrm{Var}$$

Matching these figures to the claim, the statement is True.""",
         """Means $5$ and $10$; variances $20\\cdot 0.25\\cdot 0.75=3.75$ and $7.5$; both ratios equal $2$.

Matching these figures to the claim, the statement is True.""",
         f"""$$1-(0.75)^{{8}} \\approx {approx(1-0.75**8, 5)} < 0.9$$

The solved result does not agree with the claim, so the statement is False."""],
         "Mixed binomial claims: a decimal PMF, symmetric tails about the mean, E=2Var at p=1/2, linear scaling in n, and a failed 0.9 at-least-one threshold."),
        (72, 17,
         ["If $X \\sim \\mathrm{Bin}(11,0.5)$, then $P(X=5)=P(X=6)=\\dfrac{\\binom{11}{5}}{2048}$.",
          "If $X \\sim \\mathrm{Bin}(6,0.3)$, then $P(X \\le 0)=(0.7)^{6}$.",
          "For $X \\sim \\mathrm{Bin}(14,0.5)$, $\\mathrm{Var}(X)=3.5$.",
          "A claim that $X\\sim\\mathrm{Bin}(10,0.5)$ has the same distribution as a geometric number of trials until the first head is false.",
          "If $p$ is replaced by $1-p$ with $n$ fixed, then $P(X\\ge 1)$ generally changes (unless $p=\\tfrac{1}{2}$)."],
         [True, True, True, True, True],
         ["""$$\\binom{11}{5}=\\binom{11}{6}$$ and each probability is that coefficient over $2^{11}$.

Matching these figures to the claim, the statement is True.""",
         """$P(X\\le 0)=P(X=0)=(0.7)^{6}$.

Matching these figures to the claim, the statement is True.""",
         """$$\\mathrm{Var}=14\\cdot 0.25=3.5$$

Matching these figures to the claim, the statement is True.""",
         """Binomial is supported on $\\{0,\\dots,10\\}$ with a fixed horizon; geometric is supported on $\\{1,2,\\dots\\}$.

Matching these figures to the claim, the statement is True.""",
         """$$1-(1-p)^{n}$$ versus $1-p^{n}$ differ when $p\\ne 1-p$.

Matching these figures to the claim, the statement is True."""],
         "Mixed binomial claims: twin central probabilities, P(X=0) written as a lower tail, variance at p=1/2, binomial≠geometric, and at-least-one under p↔1−p."),
        (73, 18,
         ["If $X \\sim \\mathrm{Bin}(2,0.3)$, then $P(X=1)=2\\cdot 0.3\\cdot 0.7=0.42$.",
          "If $X \\sim \\mathrm{Bin}(15,0.5)$, then $P(X \\ge 8)=P(X \\le 7)$.",
          "For $X \\sim \\mathrm{Bin}(8,0.75)$, $E(X)=6$ and $\\mathrm{Var}(X)=1.5$.",
          "If $X \\sim \\mathrm{Bin}(5,0.2)$ and $Y \\sim \\mathrm{Bin}(20,0.2)$, then $\\dfrac{P(Y=0)}{P(X=0)}=(0.8)^{15}$.",
          "The probability of at least two successes is not equal to $1-(1-p)^{n}$ in general."],
         [True, True, True, True, True],
         ["""$$P(X=1)=\\binom{2}{1}(0.3)(0.7)=0.42$$

Matching these figures to the claim, the statement is True.""",
         """Symmetry for even $n=15$? n=15 odd. Mean 7.5. P(X≥8)=P(X≤7) by pairing 8↔7, 9↔6, ..., 15↔0. Yes True.

Matching these figures to the claim, the statement is True.""",
         """$$E=8\\cdot 0.75=6$$

$$\\mathrm{Var}=8\\cdot 0.75\\cdot 0.25=1.5$$

Matching these figures to the claim, the statement is True.""",
         """$$P(Y=0)=(0.8)^{20}$$

$$P(X=0)=(0.8)^{5}$$

$$\\dfrac{P(Y=0)}{P(X=0)}=(0.8)^{15}$$

Matching these figures to the claim, the statement is True.""",
         """$1-(1-p)^{n}$ is $P(X\\ge 1)$, which also includes exactly one success, so it is larger than $P(X\\ge 2)$ whenever $P(X=1)>0$.

Matching these figures to the claim, the statement is True."""],
         "Mixed binomial claims: a two-trial PMF, a symmetric half-split on odd n, moments at p=3/4, a ratio of P(X=0) terms, and at-least-two versus at-least-one."),
        (74, 19,
         ["If $X \\sim \\mathrm{Bin}(8,\\tfrac{1}{3})$, then $P(X=0)=\\left(\\tfrac{2}{3}\\right)^{8}$.",
          "If $X \\sim \\mathrm{Bin}(4,0.5)$, then $P(X \\ge 2)=\\dfrac{11}{16}$? Check: P(0)+P(1)=1/16+4/16=5/16, so P≥2=11/16 True.",
          "For $X \\sim \\mathrm{Bin}(100,0.05)$, $E(X)=5$ and $\\mathrm{SD}(X)=\\sqrt{4.75}$.",
          "Two binomials with the same mean $np$ need not have the same variance.",
          "For $n=1$, the at-least-one probability $1-(1-p)^{1}$ equals $p$."],
         [True, True, True, True, True],
         ["""$$P(X=0)=(2/3)^{8}$$

Matching these figures to the claim, the statement is True.""",
         """$$P(X\\ge 2)=1-P(0)-P(1)=1-\\tfrac{1}{16}-\\tfrac{4}{16}=\\tfrac{11}{16}$$

Matching these figures to the claim, the statement is True.""",
         """$$E=5$$

$$\\mathrm{Var}=100\\cdot 0.05\\cdot 0.95=4.75$$

$$\\mathrm{SD}=\\sqrt{4.75}$$

Matching these figures to the claim, the statement is True.""",
         """Example: $\\mathrm{Bin}(10,0.5)$ and $\\mathrm{Bin}(20,0.25)$ both have mean $5$, but variances $2.5$ and $3.75$ differ.

Matching these figures to the claim, the statement is True.""",
         """$$1-(1-p)=p$$

Matching these figures to the claim, the statement is True."""],
         "Mixed binomial claims: P(X=0), a computed upper half, rare-event SD, equal means with unequal variances, and the n=1 edge case of at-least-one."),
        (75, 20,
         ["If $X \\sim \\mathrm{Bin}(6,0.25)$, then $P(X=1)=6\\cdot(0.25)\\cdot(0.75)^{5}$.",
          "If $X \\sim \\mathrm{Bin}(9,0.5)$, then $P(X \\ge 5) > \\tfrac{1}{2}$ because $P(X=4)=P(X=5)$ and the upper side includes the center-right.",
          "For $X \\sim \\mathrm{Bin}(7,0.2)$, $E(X)=1.4$ and $\\mathrm{Var}(X)=1.12$.",
          "If $X \\sim \\mathrm{Bin}(10,0.4)$ and $Y \\sim \\mathrm{Bin}(10,0.6)$, then $\\dfrac{E(X)}{E(Y)}=\\dfrac{2}{3}$.",
          "With $n=5$ and $p=0.2$, $1-(0.8)^{5} \\approx 0.672$, which exceeds $0.65$."],
         [True, True, True, True, True],
         ["""$$P(X=1)=\\binom{6}{1}(0.25)^{1}(0.75)^{5}$$

Matching these figures to the claim, the statement is True.""",
         """At $p=\\tfrac{1}{2}$, $P(X=4)=P(X=5)$. Then

$$P(X\\ge 5)=P(X\\ge 4)-P(X=4)=\\tfrac{1}{2}+\\tfrac{1}{2}P(X=4)-P(X=4)?$$

Cleaner: $P(X\\ge 5)=P(X\\le 4)$ is false... 

Pairing: P(X≥5)=P(X≤4). And P(X≥5)+P(X≤4)=1+P(X=4.5)? n=9, 

P(X≥5)+P(X≤4)=1, and by symmetry P(X≥5)=P(X≤4), so each equals 1/2.

So P(X≥5)=1/2, NOT > 1/2. Answer should be False!

Fix statement/answer.""",
         """$$E=7\\cdot 0.2=1.4$$

$$\\mathrm{Var}=7\\cdot 0.2\\cdot 0.8=1.12$$

Matching these figures to the claim, the statement is True.""",
         """$$E(X)=4$$

$$E(Y)=6$$

$$\\dfrac{4}{6}=\\dfrac{2}{3}$$

Matching these figures to the claim, the statement is True.""",
         f"""$$1-(0.8)^{{5}} \\approx {approx(1-0.8**5, 5)} > 0.65$$

Matching these figures to the claim, the statement is True."""],
         "x"),
    ]:
        if n == 75:
            stmts = [
                "If $X \\sim \\mathrm{Bin}(6,0.25)$, then $P(X=1)=6\\cdot(0.25)\\cdot(0.75)^{5}$.",
                "If $X \\sim \\mathrm{Bin}(9,0.5)$, then $P(X \\ge 5) > \\dfrac{1}{2}$.",
                "For $X \\sim \\mathrm{Bin}(7,0.2)$, $E(X)=1.4$ and $\\mathrm{Var}(X)=1.12$.",
                "If $X \\sim \\mathrm{Bin}(10,0.4)$ and $Y \\sim \\mathrm{Bin}(10,0.6)$, then $\\dfrac{E(X)}{E(Y)}=\\dfrac{2}{3}$.",
                "With $n=5$ and $p=0.2$, $1-(0.8)^{5}$ exceeds $0.65$.",
            ]
            ans = [True, False, True, True, True]
            expls = [
                """$$P(X=1)=\\binom{6}{1}(0.25)(0.75)^{5}=6\\cdot(0.25)\\cdot(0.75)^{5}$$

Matching these figures to the claim, the statement is True.""",
                """Symmetry at $p=\\tfrac{1}{2}$ yields $P(X\\ge 5)=P(X\\le 4)$. These two events partition the sample space and are equal, so each equals $\\dfrac{1}{2}$, not strictly greater.

The solved result does not agree with the claim, so the statement is False.""",
                """$$E(X)=7\\cdot 0.2=1.4$$

$$\\mathrm{Var}(X)=7\\cdot 0.2\\cdot 0.8=1.12$$

Matching these figures to the claim, the statement is True.""",
                """$$E(X)=4$$

$$E(Y)=6$$

$$\\dfrac{E(X)}{E(Y)}=\\dfrac{2}{3}$$

Matching these figures to the claim, the statement is True.""",
                f"""$$1-(0.8)^{{5}} = 1-{approx(0.8**5, 5)} = {approx(1-0.8**5, 5)} > 0.65$$

Matching these figures to the claim, the statement is True.""",
            ]
            ov = "Mixed binomial claims: a one-success PMF factor, a strict half-tail trap on odd n, mean and variance, a mean ratio for complementary p, and a numerical at-least-one bound."
        if n == 74:
            stmts = [
                "If $X \\sim \\mathrm{Bin}\\bigl(8,\\, \\tfrac{1}{3}\\bigr)$, then $P(X=0)=\\left(\\tfrac{2}{3}\\right)^{8}$.",
                "If $X \\sim \\mathrm{Bin}(4,0.5)$, then $P(X \\ge 2)=\\dfrac{11}{16}$.",
                "For $X \\sim \\mathrm{Bin}(100,0.05)$, $E(X)=5$ and $\\mathrm{SD}(X)=\\sqrt{4.75}$.",
                "Two binomial laws with the same mean $np$ need not have the same variance.",
                "For $n=1$, the at-least-one probability $1-(1-p)^{1}$ equals $p$.",
            ]
        if n == 73:
            expls = [
                """$$P(X=1)=\\binom{2}{1}(0.3)(0.7)=0.42$$

Matching these figures to the claim, the statement is True.""",
                """Pair $k$ with $15-k$. Then $\\{8,\\dots,15\\}$ pairs with $\\{0,\\dots,7\\}$, so $P(X\\ge 8)=P(X\\le 7)$.

Matching these figures to the claim, the statement is True.""",
                """$$E(X)=8\\cdot 0.75=6$$

$$\\mathrm{Var}(X)=8\\cdot 0.75\\cdot 0.25=1.5$$

Matching these figures to the claim, the statement is True.""",
                """$$P(Y=0)=(0.8)^{20}$$

$$P(X=0)=(0.8)^{5}$$

$$\\dfrac{P(Y=0)}{P(X=0)}=(0.8)^{15}$$

Matching these figures to the claim, the statement is True.""",
                """$1-(1-p)^{n}=P(X\\ge 1)$ includes the event $X=1$, hence differs from $P(X\\ge 2)$ whenever $0<p<1$ and $n\\ge 1$.

Matching these figures to the claim, the statement is True.""",
            ]
        rows.append(T(n, tn, stmts, ans, expls, ov))

    return rows


def scrub_em_dashes(obj):
    if isinstance(obj, str):
        return obj.replace("\u2014", "-").replace("\u2013", "-")
    if isinstance(obj, list):
        return [scrub_em_dashes(x) for x in obj]
    if isinstance(obj, dict):
        return {k: scrub_em_dashes(v) for k, v in obj.items()}
    return obj


def validate(tasks: list[dict], prefix: str, start: int, end: int, subsection: str):
    assert len(tasks) == end - start + 1
    for i, t in enumerate(tasks):
        expect = start + i
        assert t["sort_order"] == expect
        assert t["id"] == f"math-{prefix}-{expect}"
        assert t["subsection"] == subsection
        assert len(t["statements"]) == 5
        assert len(t["answer_key"]) == 5
        assert len(t["tactical_explanations"]) == 5
        for j, e in enumerate(t["tactical_explanations"]):
            letter = "ABCDE"[j]
            tag = "True" if t["answer_key"][j] else "False"
            assert e.startswith(f"**{letter}.** → {tag}"), e[:80]
            assert e.rstrip().endswith(f"so the statement is {tag}.") or e.rstrip().endswith(
                f"the statement is {tag}."
            ), e[-120:]
            assert "\u2014" not in e and "\u2013" not in e
        assert t["difficulty_level"] == "4/5"
        assert t["placeholder"] is False


def main():
    # Preserve this historical entry point while using the validated mixed-bank
    # implementation. This prevents the old fixed A-through-E topic order from
    # being regenerated accidentally.
    try:
        from .rebuild_ch12_ch13_mixed import main as rebuild_main
    except ImportError:
        from rebuild_ch12_ch13_mixed import main as rebuild_main

    rebuild_main()


if __name__ == "__main__":
    main()
