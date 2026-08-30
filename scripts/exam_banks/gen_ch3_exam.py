#!/usr/bin/env python3
"""Generate math-ch3-exam.json — 20 hard independent financial True/False exam tasks.

IDs use MATH 11.xxx (chapter map: financial = ch11 / theory ch3).
"""

from __future__ import annotations

import json
import math
from pathlib import Path

OUT = Path("/workspace/src/data/math-ch3-exam.json")


def T(letter: str, truth: bool, body: str) -> str:
    tag = "True" if truth else "False"
    body = body.strip()
    if not body.endswith(f"so the statement is {tag}."):
        # normalise mild variants
        for old in (
            f"and the statement is {tag}.",
            f"The statement is {tag}.",
            f", and the statement is {tag}.",
        ):
            if body.endswith(old):
                body = body[: -len(old)].rstrip(", ").rstrip()
                break
        if not body.endswith(f"so the statement is {tag}."):
            body = body.rstrip(".") + f", so the statement is {tag}."
    return f"**{letter}.** → {tag}\n\n{body}"


TASKS: list[dict] = []


def add(diff: str, overview: str, items: list[tuple[str, bool, str]]) -> None:
    assert len(items) == 5
    TASKS.append({"diff": diff, "overview": overview, "items": items})


# ---- helpers used while authoring (values baked into text) ----
# ear(0.12,12)=0.126825...
# fv(5000,0.06,12,2)=5635.80
# etc.


# Task 1 (124)
add(
    "4/5",
    "Five independent finance checks: a monthly EAR claim, continuous compounding growth, a present-value discount, a geometric deposit future value, and an ordinary-annuity present value.",
    [
        (
            "A retail card quotes a nominal annual rate of $18\\%$ compounded monthly. The corresponding effective annual rate is strictly less than $19.5\\%$.",
            False,
            """The effective annual rate is

$$R = \\left(1 + \\dfrac{0.18}{12}\\right)^{12} - 1 = (1.015)^{12} - 1$$

$$(1.015)^{12} \\approx 1.1956$$

so $R \\approx 19.56\\%$, which is not strictly less than $19.5\\%$, so the statement is False.""",
        ),
        (
            "An account starts with $\\$8{,}000$ and earns interest continuously at $4\\%$ per year. After $5$ years the balance exceeds $\\$9{,}750$.",
            True,
            """Continuous compounding gives

$$S(5) = 8000 \\, e^{0.04 \\cdot 5} = 8000 \\, e^{0.2}$$

$$e^{0.2} \\approx 1.2214$$

$$S(5) \\approx 9771.2$$

Wait — that is below $9750$? Recheck: $8000 \\times 1.221402758 \\approx 9771.22$, which exceeds $9750$, so the statement is True.""",
        ),
        (
            "The present value of a single payment of $\\$12{,}000$ due in $4$ years at a nominal $6\\%$ compounded quarterly is greater than $\\$9{,}500$.",
            False,
            """Quarterly rate $i = 0.06/4 = 0.015$, over $16$ quarters:

$$PV = \\dfrac{12000}{(1.015)^{16}}$$

$$(1.015)^{16} \\approx 1.2690$$

$$PV \\approx 9456$$

which is less than $\\$9{,}500$, so the statement is False.""",
        ),
        (
            "Deposits of $\\$1{,}000$ are made at the end of each year for $5$ years into an account earning $5\\%$ effective annual interest. The accumulated value immediately after the fifth deposit equals $\\$5{,}525.63$ (to the nearest cent).",
            True,
            """This is an ordinary annuity future value:

$$FV = 1000 \\cdot \\dfrac{(1.05)^{5} - 1}{0.05}$$

$$(1.05)^{5} = 1.2762815625$$

$$FV = 1000 \\cdot \\dfrac{0.2762815625}{0.05} = 5525.63125 \\approx 5525.63$$

so the statement is True.""",
        ),
        (
            "An ordinary annuity pays $\\$250$ at the end of each month for $2$ years. At a monthly rate of $0.75\\%$, its present value is less than $\\$5{,}500$.",
            False,
            """$$i = 0.0075$, $n = 24$,

$$PV = 250 \\cdot \\dfrac{1 - (1.0075)^{-24}}{0.0075}$$

$$(1.0075)^{24} \\approx 1.1964$$

$$PV \\approx 250 \\cdot \\dfrac{1 - 1/1.1964}{0.0075} \\approx 250 \\cdot 21.889 \\approx 5472$$

which is less than $5500$ — so True. Flip claim.""",
        ),
    ],
)

# Fix item E to be a genuine False with wrong claim
TASKS[-1]["items"][4] = (
    "An ordinary annuity pays $\\$250$ at the end of each month for $2$ years. At a monthly rate of $0.75\\%$, its present value exceeds $\\$5{,}600$.",
    False,
    """$$i = 0.0075$, $n = 24$,

$$PV = 250 \\cdot \\dfrac{1 - (1.0075)^{-24}}{0.0075}$$

$$(1.0075)^{24} \\approx 1.19641$$

$$PV \\approx 250 \\cdot 21.889 \\approx 5472$$

which does not exceed $\\$5{,}600$, so the statement is False.""",
)

# Fix item B explanation to remove Wait
TASKS[-1]["items"][1] = (
    "An account starts with $\\$8{,}000$ and earns interest continuously at $4\\%$ per year. After $5$ years the balance exceeds $\\$9{,}750$.",
    True,
    """Continuous compounding gives

$$S(5) = 8000 \\, e^{0.04 \\cdot 5} = 8000 \\, e^{0.2}$$

$$e^{0.2} \\approx 1.22140$$

$$S(5) \\approx 9771.22$$

which exceeds $\\$9{,}750$, so the statement is True.""",
)


# Task 2 (125)
add(
    "3/5",
    "Five separate stems: nominal versus EAR ordering, continuous equivalent rate, future value of a lump sum, perpetuity valuation, and a mortgage payment size check.",
    [
        (
            "If a nominal annual rate of $12\\%$ is compounded monthly, the effective annual rate exceeds $12.6\\%$.",
            True,
            """$$R = \\left(1 + \\dfrac{0.12}{12}\\right)^{12} - 1 = (1.01)^{12} - 1$$

$$(1.01)^{12} \\approx 1.126825$$

so $R \\approx 12.68\\% > 12.6\\%$, and the statement is True.""",
        ),
        (
            "A continuously compounded annual rate of $5\\%$ is equivalent to an effective annual rate of exactly $5\\%$.",
            False,
            """The effective annual rate under continuous compounding is

$$R = e^{0.05} - 1 \\approx 1.05127 - 1 = 0.05127 = 5.127\\%$$

not exactly $5\\%$, so the statement is False.""",
        ),
        (
            "Investing $\\$10{,}000$ at a nominal $8\\%$ compounded quarterly grows to more than $\\$12{,}150$ after $3$ years.",
            False,
            """$$S = 10000\\left(1 + \\dfrac{0.08}{4}\\right)^{12} = 10000(1.02)^{12}$$

$$(1.02)^{12} \\approx 1.26824$$

$$S \\approx 12682$$

which exceeds $12150$ — flip.""",
        ),
        (
            "A perpetuity pays $\\$800$ at the end of each year. At an effective annual rate of $4\\%$, its present value is $\\$20{,}000$.",
            True,
            """$$PV = \\dfrac{800}{0.04} = 20000$$

so the statement is True.""",
        ),
        (
            "A $30$-year mortgage of $\\$200{,}000$ at a monthly rate of $0.5\\%$ has a monthly payment strictly between $\\$1{,}190$ and $\\$1{,}210$.",
            True,
            """$$PMT = 200000 \\cdot \\dfrac{0.005(1.005)^{360}}{(1.005)^{360} - 1}$$

$$(1.005)^{360} \\approx 6.022575$$

$$PMT \\approx 1199.10$$

which lies in $(1190, 1210)$, so the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][2] = (
    "Investing $\\$10{,}000$ at a nominal $8\\%$ compounded quarterly grows to more than $\\$12{,}800$ after $3$ years.",
    False,
    """$$S = 10000\\left(1 + \\dfrac{0.08}{4}\\right)^{12} = 10000(1.02)^{12}$$

$$(1.02)^{12} \\approx 1.26824$$

$$S \\approx 12682.42$$

which does not exceed $\\$12{,}800$, so the statement is False.""",
)


# Task 3 (126)
add(
    "5/5",
    "Five harder checks: EAR comparison across compounding frequencies, continuous doubling time, NPV of a two-payment stream, annuity-due versus ordinary annuity, and outstanding mortgage balance.",
    [
        (
            "A nominal $9\\%$ compounded daily ($365$ days) has a higher effective annual rate than the same nominal $9\\%$ compounded monthly.",
            True,
            """More frequent compounding raises the EAR toward $e^{0.09}-1$. Explicitly

$$R_{12} = (1.0075)^{12} - 1 \\approx 0.09381$$

$$R_{365} = \\left(1 + \\dfrac{0.09}{365}\\right)^{365} - 1 \\approx 0.09416$$

so daily beats monthly, and the statement is True.""",
        ),
        (
            "Under continuous compounding at $6\\%$ per year, a principal doubles in fewer than $11$ years.",
            False,
            """Solve $e^{0.06 t} = 2$:

$$t = \\dfrac{\\ln 2}{0.06} \\approx \\dfrac{0.693147}{0.06} \\approx 11.552$$

years, which is not fewer than $11$, so the statement is False.""",
        ),
        (
            "A project costs $\\$5{,}000$ today and returns $\\$3{,}000$ in one year and $\\$3{,}000$ in two years. At an effective annual discount rate of $10\\%$, the NPV is positive.",
            True,
            """$$NPV = -5000 + \\dfrac{3000}{1.1} + \\dfrac{3000}{1.1^{2}}$$

$$= -5000 + 2727.27 + 2479.34 = 206.61 > 0$$

so the statement is True.""",
        ),
        (
            "An annuity-due of $10$ annual payments of $\\$1{,}000$ at $5\\%$ effective has present value exactly $5\\%$ larger than the corresponding ordinary annuity of $10$ payments.",
            True,
            """An annuity-due is the ordinary annuity shifted one period earlier, so

$$PV_{\\mathrm{due}} = PV_{\\mathrm{ordinary}} \\cdot (1 + i) = PV_{\\mathrm{ordinary}} \\cdot 1.05$$

which is exactly $5\\%$ larger, so the statement is True.""",
        ),
        (
            "On a $30$-year $\\$200{,}000$ mortgage at $0.5\\%$ per month with level payments, the outstanding balance immediately after $60$ payments is less than $\\$180{,}000$.",
            False,
            """With $PMT \\approx 1199.10$,

$$B_{60} = 200000(1.005)^{60} - 1199.10 \\cdot \\dfrac{(1.005)^{60} - 1}{0.005}$$

$$(1.005)^{60} \\approx 1.34885$$

$$B_{60} \\approx 186109$$

which is not less than $\\$180{,}000$, so the statement is False.""",
        ),
    ],
)


# Task 4 (127)
add(
    "4/5",
    "Five mini-stems: converting a monthly rate to nominal and EAR, continuous accumulation, discounting a deferred lump sum, geometric series of deposits with a trap, and IRR sign for a simple project.",
    [
        (
            "Interest is charged at $1.5\\%$ per month. The nominal annual rate quoted as $12$ times the monthly rate is $18\\%$, while the effective annual rate exceeds $19.5\\%$.",
            True,
            """Nominal: $12 \\times 1.5\\% = 18\\%$. Effective:

$$R = (1.015)^{12} - 1 \\approx 0.1956 = 19.56\\% > 19.5\\%$$

so the statement is True.""",
        ),
        (
            "A principal of $\\$5{,}000$ grows continuously at $7\\%$ for $3$ years to a balance strictly above $\\$6{,}150$.",
            True,
            """$$S = 5000 e^{0.21} \\approx 5000 \\times 1.233678 = 6168.39 > 6150$$

so the statement is True.""",
        ),
        (
            "The present value of $\\$20{,}000$ due in $6$ years at $5\\%$ effective annual interest is greater than $\\$15{,}000$.",
            False,
            """$$PV = \\dfrac{20000}{(1.05)^{6}}$$

$$(1.05)^{6} \\approx 1.3401$$

$$PV \\approx 14924$$

which is not greater than $\\$15{,}000$, so the statement is False.""",
        ),
        (
            "Saving $\\$400$ at the end of each quarter for $3$ years at a quarterly rate of $1\\%$ accumulates to more than $\\$5{,}100$ just after the last deposit.",
            False,
            """$n=12$ deposits,

$$FV = 400 \\cdot \\dfrac{(1.01)^{12} - 1}{0.01}$$

$$(1.01)^{12} \\approx 1.126825$$

$$FV \\approx 400 \\times 12.6825 = 5073$$

which does not exceed $\\$5{,}100$, so the statement is False.""",
        ),
        (
            "A project pays $-\\$1{,}000$ at $t=0$ and $+\\$1{,}210$ at $t=2$ years (no other cash flows). Its IRR, as an effective annual rate, equals $10\\%$.",
            True,
            """Solve $-1000 + 1210/(1+r)^{2} = 0$:

$$(1+r)^{2} = 1.21$$

$$1+r = 1.1$$

$$r = 0.10$$

so the statement is True.""",
        ),
    ],
)


# Task 5 (128)
add(
    "4/5",
    "Five independent problems: EAR from semiannual compounding, force of interest accumulation, PV of an annuity, perpetuity-due style trap, and comparing NPVs of two projects.",
    [
        (
            "A nominal annual rate of $10\\%$ compounded semiannually has effective annual rate exactly $10.25\\%$.",
            True,
            """$$R = \\left(1 + \\dfrac{0.10}{2}\\right)^{2} - 1 = (1.05)^{2} - 1 = 0.1025$$

so the statement is True.""",
        ),
        (
            "If the force of interest is constant at $\\delta = 0.04$, then $\\$1{,}000$ grows to $\\$1{,}040$ in one year.",
            False,
            """Under constant force, $S = 1000 e^{0.04} \\approx 1040.81$, not exactly $1040$ (which would be simple/discrete $4\\%$ without continuous compounding). The claim of exactly $\\$1{,}040$ is false, so the statement is False.""",
        ),
        (
            "The present value of an ordinary annuity of $\\$500$ per year for $8$ years at $6\\%$ effective is less than $\\$3{,}100$.",
            False,
            """$$PV = 500 \\cdot \\dfrac{1 - (1.06)^{-8}}{0.06}$$

$$(1.06)^{8} \\approx 1.59385$$

$$PV \\approx 500 \\times 6.2098 = 3104.90$$

which is not less than $3100$ — close. Use claim $3200$.""",
        ),
        (
            "A perpetuity-immediate of $\\$100$ per year at $5\\%$ effective is worth $\\$2{,}000$, while the corresponding perpetuity-due is worth $\\$2{,}100$.",
            True,
            """Immediate: $100/0.05 = 2000$. Due: one extra payment at time $0$, or multiply by $1.05$:

$$2000 \\times 1.05 = 2100$$

so the statement is True.""",
        ),
        (
            "Project A: $-\\$1000$ now, $+\\$800$ in one year, $+\\$500$ in two years. Project B: $-\\$1000$ now, $+\\$300$ in one year, $+\\$900$ in two years. At $8\\%$ effective, project A has the higher NPV.",
            True,
            """$$NPV_A = -1000 + 800/1.08 + 500/1.08^{2} \\approx -1000 + 740.74 + 428.67 = 169.41$$

$$NPV_B = -1000 + 300/1.08 + 900/1.08^{2} \\approx -1000 + 277.78 + 771.60 = 49.38$$

so $A$ is higher, and the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][2] = (
    "The present value of an ordinary annuity of $\\$500$ per year for $8$ years at $6\\%$ effective exceeds $\\$3{,}200$.",
    False,
    """$$PV = 500 \\cdot \\dfrac{1 - (1.06)^{-8}}{0.06}$$

$$(1.06)^{8} \\approx 1.59385$$

$$PV \\approx 3104.90$$

which does not exceed $\\$3{,}200$, so the statement is False.""",
)


# Task 6 (129)
add(
    "3/5",
    "Five checks: monthly EAR, continuous PV, compound growth equation for time, ordinary annuity FV, and a level-loan interest portion intuition.",
    [
        (
            "A savings account offers $0.4\\%$ per month. Over a year the effective annual yield is less than $5\\%$.",
            True,
            """$$R = (1.004)^{12} - 1 \\approx 0.04907 = 4.907\\% < 5\\%$$

so the statement is True.""",
        ),
        (
            "The present value of $\\$9{,}000$ due in $2$ years under continuous discounting at $5\\%$ is greater than $\\$8{,}100$.",
            True,
            """$$PV = 9000 e^{-0.10} \\approx 9000 \\times 0.904837 = 8143.54 > 8100$$

so the statement is True.""",
        ),
        (
            "At $6\\%$ effective annual interest, $\\$4{,}000$ grows to $\\$5{,}000$ in fewer than $3$ years.",
            False,
            """Solve $4000(1.06)^{t} = 5000$:

$$(1.06)^{t} = 1.25$$

$$t = \\dfrac{\\ln 1.25}{\\ln 1.06} \\approx \\dfrac{0.22314}{0.05827} \\approx 3.83$$

years, not fewer than $3$, so the statement is False.""",
        ),
        (
            "Twelve end-of-month deposits of $\\$200$ at $1\\%$ per month accumulate to more than $\\$2{,}500$ just after the twelfth deposit.",
            True,
            """$$FV = 200 \\cdot \\dfrac{(1.01)^{12} - 1}{0.01} \\approx 200 \\times 12.6825 = 2536.50 > 2500$$

so the statement is True.""",
        ),
        (
            "On a standard amortising mortgage with level payments, the interest portion of each payment is constant over the life of the loan.",
            False,
            """Early payments are interest-heavy; as the outstanding balance falls, the interest portion declines and the principal portion rises. The interest portion is not constant, so the statement is False.""",
        ),
    ],
)


# Task 7 (130)
add(
    "5/5",
    "Five demanding stems: matching nominal rates for equal EARs, continuous versus discrete FV race, deferred annuity PV, balloon mortgage balance, and IRR uniqueness for a conventional project.",
    [
        (
            "There exists a nominal annual rate $r$ compounded monthly such that the EAR equals $8\\%$, and that $r$ is strictly less than $8\\%$.",
            True,
            """Solve $(1 + r/12)^{12} = 1.08$:

$$1 + r/12 = 1.08^{1/12}$$

$$r = 12(1.08^{1/12} - 1) \\approx 12(0.006434) = 0.07721 = 7.721\\% < 8\\%$$

so the statement is True.""",
        ),
        (
            "For the same principal and the same annual rate $r = 0.06$, three years of continuous compounding produces a strictly larger future value than monthly compounding.",
            True,
            """Continuous uses $e^{0.18}$ while monthly uses $(1.005)^{36}$. Since $e^{r} > (1 + r/n)^{n}$ for finite $n$, continuous wins for any horizon, so the statement is True.""",
        ),
        (
            "An ordinary annuity of $5$ annual payments of $\\$2{,}000$ begins at the end of year $3$ (first payment at $t=3$). At $5\\%$ effective, its present value at $t=0$ exceeds $\\$8{,}000$.",
            False,
            """Value at $t=2$ of the five-payment annuity (as an ordinary annuity valued one period before the first payment) is

$$PV_{2} = 2000 \\cdot \\dfrac{1 - (1.05)^{-5}}{0.05} \\approx 8658.95$$

Discount two years:

$$PV_{0} = 8658.95 / (1.05)^{2} \\approx 7853.5$$

which does not exceed $\\$8{,}000$, so the statement is False.""",
        ),
        (
            "A loan of $\\$50{,}000$ at $1\\%$ per month is repaid by $24$ equal monthly payments. Immediately after the $12$th payment the outstanding balance is greater than $\\$26{,}000$.",
            True,
            """$$PMT = 50000 \\cdot \\dfrac{0.01(1.01)^{24}}{(1.01)^{24}-1} \\approx 2353.67$$

$$B_{12} = 50000(1.01)^{12} - 2353.67 \\cdot \\dfrac{(1.01)^{12}-1}{0.01} \\approx 26646$$

which exceeds $\\$26{,}000$, so the statement is True.""",
        ),
        (
            "A conventional investment with exactly one sign change in the cash-flow stream (negative initial outlay, then only nonnegative inflows) has at most one positive IRR.",
            True,
            """Descartes' rule / Norstrom's criterion for a single sign change guarantees at most one positive real root of the NPV polynomial, so the statement is True.""",
        ),
    ],
)


# Task 8 (131)
add(
    "4/5",
    "Five independent claims: EAR gap over nominal, continuous discount factor, geometric sum of growing deposits, annuity payment solve, and NPV ranking at two rates.",
    [
        (
            "For nominal $15\\%$ compounded monthly, the EAR exceeds the nominal rate by more than $1$ percentage point.",
            True,
            """$$R = (1.0125)^{12} - 1 \\approx 0.16075 = 16.075\\%$$

$$R - 0.15 \\approx 0.01075 > 0.01$$

so the statement is True.""",
        ),
        (
            "Under continuous compounding at $8\\%$, the one-year discount factor $e^{-0.08}$ is greater than $0.925$.",
            False,
            """$$e^{-0.08} \\approx 0.923116 < 0.925$$

so the statement is False.""",
        ),
        (
            "Deposits grow: $\\$100$ at end of year $1$, $\\$200$ at end of year $2$, $\\$300$ at end of year $3$, into an account at $4\\%$ effective. The accumulated value at the end of year $3$ exceeds $\\$620$.",
            True,
            """$$FV = 100(1.04)^{2} + 200(1.04) + 300 = 100\\times 1.0816 + 208 + 300 = 616.16$$

which does not exceed $620$ — flip.""",
        ),
        (
            "To accumulate $\\$10{,}000$ in $5$ years with end-of-year deposits at $5\\%$ effective, each deposit must be less than $\\$1{,}800$.",
            False,
            """$$10000 = A \\cdot \\dfrac{(1.05)^{5}-1}{0.05}$$

$$A = 10000 \\cdot \\dfrac{0.05}{(1.05)^{5}-1} \\approx 10000 / 5.52563 \\approx 1809.75$$

which is not less than $\\$1{,}800$, so the statement is False.""",
        ),
        (
            "For the cash flows $-1000$, $+600$, $+600$ at times $0,1,2$, the NPV at $10\\%$ is positive while the NPV at $20\\%$ is negative.",
            True,
            """$$NPV(0.10) = -1000 + 600/1.1 + 600/1.21 \\approx -1000 + 545.45 + 495.87 = 41.32 > 0$$

$$NPV(0.20) = -1000 + 600/1.2 + 600/1.44 = -1000 + 500 + 416.67 = -83.33 < 0$$

so the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][2] = (
    "Deposits grow: $\\$100$ at end of year $1$, $\\$200$ at end of year $2$, $\\$300$ at end of year $3$, into an account at $4\\%$ effective. The accumulated value at the end of year $3$ exceeds $\\$620$.",
    False,
    """$$FV = 100(1.04)^{2} + 200(1.04) + 300 = 108.16 + 208 + 300 = 616.16$$

which does not exceed $\\$620$, so the statement is False.""",
)


# Task 9 (132)
add(
    "4/5",
    "Five stems: quarterly EAR, continuous time to target, PV of a three-payment stream, ordinary versus due payment timing, and mortgage total interest overpayment claim.",
    [
        (
            "Nominal $6\\%$ compounded quarterly has EAR less than $6.15\\%$.",
            True,
            """$$R = (1.015)^{4} - 1 = 1.06136355 - 1 = 0.06136 = 6.136\\% < 6.15\\%$$

so the statement is True.""",
        ),
        (
            "At a continuous rate of $5\\%$, $\\$2{,}000$ reaches $\\$3{,}000$ in less than $8$ years.",
            True,
            """$$e^{0.05 t} = 1.5$$

$$t = \\ln(1.5)/0.05 \\approx 0.405465/0.05 = 8.109$$

which is not less than $8$ — flip.""",
        ),
        (
            "Cash flows $\\$1{,}000$, $\\$1{,}000$, $\\$1{,}000$ at the ends of years $1$, $2$, and $3$ have present value greater than $\\$2{,}700$ at $6\\%$ effective.",
            False,
            """$$PV = 1000\\left(\\dfrac{1}{1.06} + \\dfrac{1}{1.06^{2}} + \\dfrac{1}{1.06^{3}}\\right) \\approx 1000 \\times 2.67301 = 2673$$

which is not greater than $\\$2{,}700$, so the statement is False.""",
        ),
        (
            "An annuity-due of $12$ monthly payments of $\\$100$ at $1\\%$ per month has present value equal to $100 + 100 \\cdot \\dfrac{1-(1.01)^{-11}}{0.01}$.",
            True,
            """A due annuity is a payment now plus an ordinary annuity of $11$ remaining payments:

$$PV = 100 + 100 \\cdot \\dfrac{1-(1.01)^{-11}}{0.01}$$

so the statement is True.""",
        ),
        (
            "For the $\\$200{,}000$ / $360$-month / $0.5\\%$ mortgage with $PMT \\approx 1199.10$, total payments over the life of the loan exceed $\\$430{,}000$.",
            True,
            """$$360 \\times 1199.10 = 431676 > 430000$$

so the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][1] = (
    "At a continuous rate of $5\\%$, $\\$2{,}000$ reaches $\\$3{,}000$ in less than $8$ years.",
    False,
    """$$e^{0.05 t} = 1.5$$

$$t = \\dfrac{\\ln 1.5}{0.05} \\approx 8.109$$

years, which is not less than $8$, so the statement is False.""",
)


# Task 10 (133)
add(
    "5/5",
    "Five hard problems: finding an equivalent nominal rate, continuous vs EAR numerical gap, sinking-fund style deposits, outstanding balance after partial amortisation, and cross-over rate intuition for NPV.",
    [
        (
            "The nominal annual rate compounded continuously that yields an EAR of $10\\%$ is $\\ln(1.10) \\approx 9.53\\%$.",
            True,
            """Solve $e^{r} - 1 = 0.10$:

$$r = \\ln(1.10) \\approx 0.09531 = 9.531\\%$$

so the statement is True.""",
        ),
        (
            "The difference between continuous EAR at force $0.06$ and monthly EAR at nominal $6\\%$ is greater than $0.05$ percentage points.",
            False,
            """Continuous: $e^{0.06}-1 \\approx 0.061837$. Monthly: $(1.005)^{12}-1 \\approx 0.061678$. Gap $\\approx 0.000159$, i.e. about $0.016$ points, not more than $0.05$, so the statement is False.""",
        ),
        (
            "To repay a $\\$12{,}000$ debt due in $4$ years by equal end-of-year deposits into a sinking fund earning $5\\%$, each deposit must exceed $\\$2{,}700$.",
            True,
            """$$A \\cdot \\dfrac{(1.05)^{4}-1}{0.05} = 12000$$

$$A = 12000 \\cdot \\dfrac{0.05}{(1.05)^{4}-1} \\approx 12000 / 4.310125 = 2784.2 > 2700$$

so the statement is True.""",
        ),
        (
            "A $5$-year loan of $\\$10{,}000$ at $1\\%$ per month with level monthly payments has outstanding balance after $24$ months less than $\\$6{,}000$.",
            False,
            """$n=60$,

$$PMT = 10000 \\cdot \\dfrac{0.01(1.01)^{60}}{(1.01)^{60}-1} \\approx 222.44$$

$$B_{24} = 10000(1.01)^{24} - 222.44 \\cdot \\dfrac{(1.01)^{24}-1}{0.01} \\approx 6765$$

which is not less than $\\$6{,}000$, so the statement is False.""",
        ),
        (
            "If project A's NPV exceeds project B's NPV at a $0\\%$ discount rate, then A's NPV exceeds B's at every positive discount rate.",
            False,
            """NPV rankings can reverse as the discount rate changes (Fisher cross-overs) when cash-flow timing differs. A higher undiscounted total does not lock in dominance at every rate, so the statement is False.""",
        ),
    ],
)


# Task 11 (134)
add(
    "3/5",
    "Five mid-level stems: simple EAR arithmetic, continuous growth factor, single-sum FV, perpetuity at a changed rate, and a first-month mortgage interest figure.",
    [
        (
            "Nominal $4\\%$ compounded semiannually has EAR equal to $4.04\\%$.",
            True,
            """$$R = (1.02)^{2} - 1 = 0.0404$$

so the statement is True.""",
        ),
        (
            "Over $10$ years at continuous $3\\%$, a unit deposit grows by a factor strictly between $1.34$ and $1.36$.",
            True,
            """$$e^{0.3} \\approx 1.34986$$

which lies in $(1.34, 1.36)$, so the statement is True.""",
        ),
        (
            "At $7\\%$ effective, $\\$6{,}000$ grows to more than $\\$8{,}000$ in $4$ years.",
            False,
            """$$6000(1.07)^{4} = 6000 \\times 1.31079601 = 7864.78 < 8000$$

so the statement is False.""",
        ),
        (
            "If a perpetuity of $\\$500$ per year is worth $\\$10{,}000$, the implied effective annual rate is $5\\%$. Halving the rate to $2.5\\%$ would double the value to $\\$20{,}000$.",
            True,
            """$500/r = 10000$ gives $r=0.05$. At $2.5\\%$, $500/0.025=20000$, so the statement is True.""",
        ),
        (
            "On a $\\$200{,}000$ mortgage at $0.5\\%$ per month, the interest due in the first month is $\\$1{,}000$.",
            True,
            """Interest on the initial balance: $200000 \\times 0.005 = 1000$, so the statement is True.""",
        ),
    ],
)


# Task 12 (135)
add(
    "4/5",
    "Five independent calculations: daily compounding EAR, continuous equivalent of a discrete rate, PV of a deferred perpetuity, annuity payment for a target PV, and IRR of a one-period project.",
    [
        (
            "Nominal $12\\%$ compounded daily ($365$) has EAR greater than $12.7\\%$.",
            True,
            """$$R = \\left(1 + \\dfrac{0.12}{365}\\right)^{365} - 1 \\approx 0.127475 > 0.127$$

so the statement is True.""",
        ),
        (
            "The continuous rate equivalent to an effective annual $12\\%$ is greater than $11.4\\%$.",
            False,
            """$$r = \\ln(1.12) \\approx 0.11333 = 11.333\\% < 11.4\\%$$

so the statement is False.""",
        ),
        (
            "A perpetuity of $\\$100$ per year beginning at the end of year $5$ (first payment at $t=5$) is worth more than $\\$1{,}600$ today at $5\\%$ effective.",
            False,
            """Value at $t=4$ of a perpetuity-immediate starting at $t=5$ is $100/0.05=2000$. Discount $4$ years:

$$PV = 2000/(1.05)^{4} \\approx 1645.40$$

Wait — that exceeds $1600$. Flip claim to $1650$.""",
        ),
        (
            "The annual end-of-year payment that has present value $\\$50{,}000$ over $20$ years at $4\\%$ effective is less than $\\$3{,}700$.",
            True,
            """$$PMT = 50000 \\cdot \\dfrac{0.04}{1-(1.04)^{-20}} \\approx 50000 / 13.5903 \\approx 3679.1 < 3700$$

so the statement is True.""",
        ),
        (
            "A project with cash flows $-\\$2{,}000$ at $t=0$ and $+\\$2{,}300$ at $t=1$ has IRR equal to $15\\%$.",
            True,
            """$$-2000 + 2300/(1+r) = 0$$

$$1+r = 2300/2000 = 1.15$$

$$r = 0.15$$

so the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][2] = (
    "A perpetuity of $\\$100$ per year beginning at the end of year $5$ (first payment at $t=5$) is worth more than $\\$1{,}650$ today at $5\\%$ effective.",
    False,
    """Value at $t=4$ of that perpetuity-immediate is $100/0.05=2000$. Discount four years:

$$PV = \\dfrac{2000}{(1.05)^{4}} \\approx 1645.40$$

which does not exceed $\\$1{,}650$, so the statement is False.""",
)


# Task 13 (136)
add(
    "5/5",
    "Five tough finance stems: EAR ordering for same nominal, continuous half-life style target, NPV with mid-year style annual model, annuity-due FV, and remaining term from balance.",
    [
        (
            "Among nominal $10\\%$ compounded annually, quarterly, and continuously, the continuous option has the largest EAR.",
            True,
            """Annual EAR is $10\\%$. Quarterly: $(1.025)^{4}-1 \\approx 10.38\\%$. Continuous: $e^{0.10}-1 \\approx 10.52\\%$. Continuous is largest, so the statement is True.""",
        ),
        (
            "At continuous $8\\%$, the time for money to grow by $50\\%$ is less than $5$ years.",
            False,
            """$$e^{0.08 t} = 1.5$$

$$t = \\ln(1.5)/0.08 \\approx 5.068$$

years, not less than $5$, so the statement is False.""",
        ),
        (
            "Cash flows $-\\$4{,}000$, $+\\$1{,}500$, $+\\$1{,}500$, $+\\$1{,}500$ at $t=0,1,2,3$. At $6\\%$ effective the NPV is negative.",
            False,
            """$$NPV = -4000 + 1500\\cdot\\dfrac{1-(1.06)^{-3}}{0.06} \\approx -4000 + 1500\\times 2.67301 = -4000 + 4009.52 = 9.52 > 0$$

so the NPV is not negative, and the statement is False.""",
        ),
        (
            "The future value at the time of the last payment of an annuity-due of $8$ annual payments of $\\$500$ at $4\\%$ exceeds the ordinary-annuity FV of the same payments by exactly one interest factor of $4\\%$ on the ordinary FV.",
            True,
            """Standard identity: $FV_{\\mathrm{due}} = FV_{\\mathrm{ordinary}}\\cdot(1+i)$, i.e. the ordinary future value accumulated one extra period, so the statement is True.""",
        ),
        (
            "A loan balance of $\\$8{,}000$ bears $1\\%$ interest per month. Level payments of $\\$400$ per month will amortise the loan in fewer than $22$ months.",
            False,
            """Solve $8000 = 400 \\cdot \\dfrac{1-(1.01)^{-n}}{0.01}$:

$$20 = \\dfrac{1-(1.01)^{-n}}{0.01}$$

$$(1.01)^{-n} = 0.8$$

$$n = -\\ln(0.8)/\\ln(1.01) \\approx 22.4$$

so fewer than $22$ months is false, and the statement is False.""",
        ),
    ],
)


# Task 14 (137)
add(
    "4/5",
    "Five varied claims: converting EAR to nominal monthly, continuous PV of a stream approximation via single sum, geometric deposit FV, mortgage payment sensitivity, and a two-rate NPV comparison.",
    [
        (
            "If the EAR is $9\\%$, the equivalent nominal rate compounded monthly is greater than $8.6\\%$.",
            True,
            """$$r = 12\\bigl(1.09^{1/12} - 1\\bigr) \\approx 12(0.007207) = 0.08649 = 8.649\\% > 8.6\\%$$

so the statement is True.""",
        ),
        (
            "Discounting $\\$5{,}000$ continuously for $4$ years at $6\\%$ yields a present value above $\\$3{,}900$.",
            True,
            """$$PV = 5000 e^{-0.24} \\approx 5000 \\times 0.786627 = 3933.14 > 3900$$

so the statement is True.""",
        ),
        (
            "Eight quarterly deposits of $\\$750$ at $2\\%$ per quarter accumulate to less than $\\$6{,}400$ just after the eighth deposit.",
            False,
            """$$FV = 750 \\cdot \\dfrac{(1.02)^{8}-1}{0.02} \\approx 750 \\times 8.58297 = 6437.23$$

which is not less than $\\$6{,}400$, so the statement is False.""",
        ),
        (
            "Halving the monthly interest rate on a long mortgage roughly halves the monthly payment.",
            False,
            """Payment formulas are nonlinear in $i$. Halving $i$ reduces the payment, but by much less than half for long $n$, because principal repayment still dominates. The rough claim is false, so the statement is False.""",
        ),
        (
            "For cash flows $-1000$, $+700$, $+700$ at $t=0,1,2$, NPV at $5\\%$ exceeds NPV at $15\\%$.",
            True,
            """Higher discount rates reduce the value of future inflows for a conventional project, so $NPV(0.05) > NPV(0.15)$. Explicitly both are computable and ordered that way, so the statement is True.""",
        ),
    ],
)


# Task 15 (138)
add(
    "4/5",
    "Five exam-style finance tasks: EAR from weekly compounding, continuous force matching a discrete rate, PV annuity integer rounding trap, perpetuity comparison, and IRR bracket.",
    [
        (
            "Nominal $5\\%$ compounded weekly ($52$) has EAR less than $5.13\\%$.",
            True,
            """$$R = \\left(1 + \\dfrac{0.05}{52}\\right)^{52} - 1 \\approx 0.05125 = 5.125\\% < 5.13\\%$$

so the statement is True.""",
        ),
        (
            "The constant force of interest equivalent to a monthly rate of $1\\%$ is $\\delta = 12\\ln(1.01)$.",
            True,
            """One month multiplies by $1.01$, so over a year $(1.01)^{12} = e^{\\delta}$, hence $\\delta = 12\\ln(1.01)$, and the statement is True.""",
        ),
        (
            "An ordinary annuity of $\\$1{,}200$ per year for $15$ years at $3\\%$ effective has present value that, rounded to the nearest dollar, equals $\\$14{,}304$.",
            False,
            """$$PV = 1200 \\cdot \\dfrac{1-(1.03)^{-15}}{0.03} \\approx 1200 \\times 11.937935 = 14325.52$$

which rounds to $14326$, not $14304$, so the statement is False.""",
        ),
        (
            "A perpetuity of $\\$250$ per year at $2\\%$ is worth more than a perpetuity of $\\$400$ per year at $4\\%$.",
            False,
            """$$250/0.02 = 12500$$

$$400/0.04 = 10000$$

so $12500 > 10000$ — that would be True. Flip to claim the $400$ perpetuity is worth more.""",
        ),
        (
            "For cash flows $-500$, $+300$, $+300$ at $t=0,1,2$, the IRR lies strictly between $10\\%$ and $20\\%$.",
            True,
            """$$NPV(0.10) = -500 + 300/1.1 + 300/1.21 \\approx -500 + 272.73 + 247.93 = 20.66 > 0$$

$$NPV(0.20) = -500 + 300/1.2 + 300/1.44 = -500 + 250 + 208.33 = -41.67 < 0$$

so the root lies in $(0.10, 0.20)$, and the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][3] = (
    "A perpetuity of $\\$250$ per year at $2\\%$ is worth less than a perpetuity of $\\$400$ per year at $4\\%$.",
    False,
    """$$250/0.02 = 12500$$

$$400/0.04 = 10000$$

so the $250$ perpetuity is worth more, not less, and the statement is False.""",
)


# Task 16 (139)
add(
    "5/5",
    "Five advanced stems: matching EARs across bases, continuous accumulation with a withdrawal, geometric series closed form, amortisation schedule identity, and mutually exclusive IRR vs NPV conflict.",
    [
        (
            "A bank quotes nominal $6\\%$ convertible monthly. Another quotes nominal $6.1\\%$ convertible annually. The monthly account has the higher EAR.",
            False,
            """Monthly: $(1.005)^{12}-1 \\approx 6.1678\\%$. Annual $6.1\\%$ EAR is $6.1\\%$. Monthly is higher — would be True. Flip: claim annual is higher.""",
        ),
        (
            "A fund starts at $\\$10{,}000$, earns continuous $5\\%$ for $2$ years, then a $\\$3{,}000$ withdrawal is made, and the remainder earns continuous $5\\%$ for $3$ more years. The final balance exceeds $\\$9{,}500$.",
            True,
            """After $2$ years: $10000 e^{0.10} \\approx 11051.71$. After withdrawal: $8051.71$. After $3$ more years: $8051.71 e^{0.15} \\approx 9345.5$, which does not exceed $9500$. Flip.""",
        ),
        (
            "The sum $100 + 100\\cdot 1.03 + 100\\cdot 1.03^{2} + \\cdots + 100\\cdot 1.03^{9}$ equals $100 \\cdot \\dfrac{1.03^{10} - 1}{0.03}$.",
            True,
            """This is a $10$-term geometric series with first term $100$ and ratio $1.03$, whose sum is $100(1.03^{10}-1)/0.03$, so the statement is True.""",
        ),
        (
            "In any period of a standard amortising loan, interest due plus principal repaid equals the contractual payment (ignoring rounding).",
            True,
            """By construction of the schedule, the level payment splits into interest on the prior balance and the residual principal reduction, so the statement is True.""",
        ),
        (
            "When two mutually exclusive projects have a single Fisher cross-over rate, the project with the higher IRR is always the NPV-maximising choice at every discount rate.",
            False,
            """On one side of the cross-over the higher-IRR project wins on NPV; on the other side the lower-IRR project can have higher NPV. IRR ranking does not dominate for all rates, so the statement is False.""",
        ),
    ],
)

TASKS[-1]["items"][0] = (
    "A bank quotes nominal $6\\%$ convertible monthly. Another quotes nominal $6.1\\%$ convertible annually. The annually compounded account has the higher EAR.",
    False,
    """Monthly EAR: $(1.005)^{12}-1 \\approx 6.1678\\%$. The annual account's EAR is $6.1\\%$. Monthly is higher, so the statement is False.""",
)

TASKS[-1]["items"][1] = (
    "A fund starts at $\\$10{,}000$, earns continuous $5\\%$ for $2$ years, then a $\\$3{,}000$ withdrawal is made, and the remainder earns continuous $5\\%$ for $3$ more years. The final balance exceeds $\\$9{,}500$.",
    False,
    """After $2$ years: $10000 e^{0.10} \\approx 11051.71$. After withdrawal: $8051.71$. After $3$ more years:

$$8051.71 \\, e^{0.15} \\approx 9345.5$$

which does not exceed $\\$9{,}500$, so the statement is False.""",
)


# Task 17 (140)
add(
    "3/5",
    "Five straightforward but multi-step checks: EAR percent points, continuous one-year growth, FV of principal, annuity PV bound, and loan payment formula recognition.",
    [
        (
            "Nominal $20\\%$ compounded monthly produces an EAR above $22\\%$.",
            True,
            """$$R = (1 + 0.20/12)^{12} - 1 \\approx 0.21939 = 21.939\\%$$

which is not above $22\\%$ — flip.""",
        ),
        (
            "At continuous $9\\%$, money grows by more than $9.4\\%$ in one year.",
            True,
            """$$e^{0.09} - 1 \\approx 0.09417 = 9.417\\% > 9.4\\%$$

so the statement is True.""",
        ),
        (
            "At $3\\%$ effective, $\\$15{,}000$ grows to more than $\\$17{,}300$ in $5$ years.",
            False,
            """$$15000(1.03)^{5} = 15000 \\times 1.159274 = 17389.11$$

which exceeds $17300$ — flip claim to $17400$.""",
        ),
        (
            "The PV of $\\$100$ per month for $36$ months at $0.5\\%$ per month is greater than $\\$3{,}200$.",
            True,
            """$$PV = 100 \\cdot \\dfrac{1-(1.005)^{-36}}{0.005} \\approx 100 \\times 32.871 = 3287.1 > 3200$$

so the statement is True.""",
        ),
        (
            "For a loan amount $L$, monthly rate $i$, and $n$ months, the level payment is $L \\cdot \\dfrac{i}{1-(1+i)^{-n}}$.",
            False,
            """The correct formula is

$$PMT = L \\cdot \\dfrac{i(1+i)^{n}}{(1+i)^{n}-1} = L \\cdot \\dfrac{i}{1-(1+i)^{-n}}$$

Wait — those are equal! The claim is actually True. Change to a wrong formula.""",
        ),
    ],
)

TASKS[-1]["items"][0] = (
    "Nominal $20\\%$ compounded monthly produces an EAR above $22\\%$.",
    False,
    """$$R = \\left(1 + \\dfrac{0.20}{12}\\right)^{12} - 1 \\approx 0.21939 = 21.939\\%$$

which is not above $22\\%$, so the statement is False.""",
)

TASKS[-1]["items"][2] = (
    "At $3\\%$ effective, $\\$15{,}000$ grows to more than $\\$17{,}400$ in $5$ years.",
    False,
    """$$15000(1.03)^{5} = 15000 \\times 1.159274074 = 17389.11$$

which does not exceed $\\$17{,}400$, so the statement is False.""",
)

TASKS[-1]["items"][4] = (
    "For a loan amount $L$, monthly rate $i$, and $n$ months, the level payment is $L \\cdot \\dfrac{i(1+i)^{n}}{(1+i)^{n}+1}$.",
    False,
    """The correct amortisation formula is

$$PMT = L \\cdot \\dfrac{i(1+i)^{n}}{(1+i)^{n}-1}$$

with a minus sign in the denominator, not a plus, so the statement is False.""",
)


# Task 18 (141)
add(
    "4/5",
    "Five independent mini-problems: EAR comparison, continuous doubling, deposit geometric sum, annuity due PV numerical, and outstanding interest-only trap.",
    [
        (
            "Compounding $8\\%$ nominal weekly beats compounding the same nominal monthly, in the sense of a larger EAR.",
            True,
            """Higher compounding frequency increases EAR for a fixed nominal rate, so weekly beats monthly, and the statement is True.""",
        ),
        (
            "Under continuous $7\\%$, doubling takes more than $10$ years.",
            False,
            """$$t = \\ln 2 / 0.07 \\approx 9.902$$

years, which is not more than $10$, so the statement is False.""",
        ),
        (
            "The accumulated value of deposits $50$ at $t=1$, $50$ at $t=2$, $\\ldots$, $50$ at $t=10$ at rate $2\\%$ per period equals $50 \\cdot \\dfrac{(1.02)^{10}-1}{0.02}$ evaluated at $t=10$.",
            True,
            """Ordinary annuity future-value formula with $A=50$, $i=0.02$, $n=10$, so the statement is True.""",
        ),
        (
            "An annuity-due of $20$ annual payments of $\\$1{,}000$ at $6\\%$ has present value greater than $\\$12{,}500$.",
            True,
            """Ordinary PV: $1000\\cdot\\dfrac{1-(1.06)^{-20}}{0.06} \\approx 11469.92$. Due: $\\times 1.06 \\approx 12158$, which does not exceed $12500$. Flip.""",
        ),
        (
            "If a borrower pays only the interest each month on a $\\$40{,}000$ loan at $0.75\\%$ per month, the outstanding principal after $12$ months is still $\\$40{,}000$.",
            True,
            """Interest-only payments leave principal unchanged, so the balance remains $\\$40{,}000$, and the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][3] = (
    "An annuity-due of $20$ annual payments of $\\$1{,}000$ at $6\\%$ has present value greater than $\\$12{,}500$.",
    False,
    """Ordinary annuity PV:

$$1000 \\cdot \\dfrac{1-(1.06)^{-20}}{0.06} \\approx 11469.92$$

Annuity-due PV:

$$11469.92 \\times 1.06 \\approx 12158$$

which does not exceed $\\$12{,}500$, so the statement is False.""",
)


# Task 19 (142)
add(
    "5/5",
    "Five hard closing stems before the last set: implied nominal from EAR, continuous cash-and-carry growth, deferred annuity numerical, mortgage principal in early payment, and NPV additivity.",
    [
        (
            "If EAR $= 5\\%$ under monthly compounding, the implied nominal annual rate is less than $4.9\\%$.",
            False,
            """$$r = 12(1.05^{1/12}-1) \\approx 12(0.004074)=0.04889=4.889\\% < 4.9\\%$$

that would be True. Flip to claim greater than $4.9\\%$.

""",
        ),
        (
            "A machine costs $\\$25{,}000$ and scrap value after $8$ years is $\\$5{,}000$. Modelling only those two cash flows at continuous $4\\%$, the PV of benefits (scrap only) is less than $\\$4{,}000$.",
            True,
            """$$PV = 5000 e^{-0.32} \\approx 5000 \\times 0.72615 = 3630.7 < 4000$$

so the statement is True.""",
        ),
        (
            "Payments of $\\$800$ at $t=4,5,6,7$ (four payments) at $5\\%$ effective have time-$0$ present value greater than $\\$2{,}500$.",
            True,
            """Value at $t=3$: $800\\cdot\\dfrac{1-(1.05)^{-4}}{0.05} \\approx 2836.73$. Discount $3$ years: $2836.73/(1.05)^{3} \\approx 2450$, which does not exceed $2500$. Flip.""",
        ),
        (
            "On the $\\$200{,}000$ mortgage at $0.5\\%$ monthly with payment $\\approx 1199.10$, the principal repaid in the first month is less than $\\$200$.",
            True,
            """Interest $=1000$, so principal $=1199.10-1000=199.10 < 200$, and the statement is True.""",
        ),
        (
            "NPV is additive across portfolios: the NPV of the sum of two cash-flow streams equals the sum of their NPVs at the same discount rate.",
            True,
            """Discounting is a linear operator on cash flows, so NPV adds, and the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][0] = (
    "If EAR $= 5\\%$ under monthly compounding, the implied nominal annual rate is greater than $4.9\\%$.",
    False,
    """$$r = 12\\bigl(1.05^{1/12} - 1\\bigr) \\approx 12 \\times 0.004074 = 0.04889 = 4.889\\%$$

which is not greater than $4.9\\%$, so the statement is False.""",
)

TASKS[-1]["items"][2] = (
    "Payments of $\\$800$ at $t=4,5,6,7$ (four payments) at $5\\%$ effective have time-$0$ present value greater than $\\$2{,}500$.",
    False,
    """Value at $t=3$ as an ordinary $4$-payment annuity:

$$800 \\cdot \\dfrac{1-(1.05)^{-4}}{0.05} \\approx 2836.73$$

Discount three years:

$$PV_{0} = \\dfrac{2836.73}{(1.05)^{3}} \\approx 2450$$

which does not exceed $\\$2{,}500$, so the statement is False.""",
)


# Task 20 (143)
add(
    "4/5",
    "Five final independent checks: EAR from bimonthly compounding, continuous rate gap, sinking-fund deposit, full amortisation payment bound, and a simple IRR comparison between two one-inflow projects.",
    [
        (
            "Nominal $9\\%$ compounded every two months ($n=6$) has EAR greater than $9.3\\%$.",
            True,
            """$$R = \\left(1 + \\dfrac{0.09}{6}\\right)^{6} - 1 = (1.015)^{6} - 1 \\approx 0.09344 = 9.344\\% > 9.3\\%$$

so the statement is True.""",
        ),
        (
            "The continuous EAR at $r=0.03$ differs from the simple rate $3\\%$ by less than $0.05$ percentage points.",
            True,
            """$$e^{0.03}-1 \\approx 0.03045$$

gap $0.045$ points $< 0.05$, so the statement is True.""",
        ),
        (
            "Equal end-of-year deposits for $6$ years at $4\\%$ that accumulate to $\\$30{,}000$ must each be less than $\\$4{,}500$.",
            False,
            """$$A = 30000 \\cdot \\dfrac{0.04}{(1.04)^{6}-1} \\approx 30000 / 6.6330 = 4522.8$$

which is not less than $\\$4{,}500$, so the statement is False.""",
        ),
        (
            "A $10$-year loan of $\\$80{,}000$ at $0.6\\%$ per month has monthly payment less than $\\$900$.",
            False,
            """$n=120$,

$$PMT = 80000 \\cdot \\dfrac{0.006(1.006)^{120}}{(1.006)^{120}-1} \\approx 919.4$$

which is not less than $\\$900$, so the statement is False.""",
        ),
        (
            "Project X: $-100$ now and $+150$ in two years. Project Y: $-100$ now and $+140$ in one year. Project Y has the higher IRR.",
            True,
            """IRR of X: $(1+r)^{2}=1.5$ gives $r=\\sqrt{1.5}-1\\approx 22.47\\%$. IRR of Y: $r=0.40=40\\%$. Y is higher, so the statement is True.""",
        ),
    ],
)


def build() -> dict:
    assert len(TASKS) == 20
    letters = "ABCDE"
    tasks_out = []
    for i, spec in enumerate(TASKS):
        n = 124 + i
        answers = [t for _, t, _ in spec["items"]]
        expl = [T(letters[j], spec["items"][j][1], spec["items"][j][2]) for j in range(5)]
        for e, ans in zip(expl, answers):
            assert ("so the statement is True." in e) or ("so the statement is False." in e)
            assert ("→ True" in e.split("\n", 1)[0]) == ans
            assert "—" not in e
            assert "Watch" not in e and "Trap" not in e
        tasks_out.append(
            {
                "id": f"math-11-{n}",
                "case_id": f"MATH 11.{n}",
                "title": f"Exam-style tasks — {i + 1}",
                "subsection": "3.8",
                "context": "Evaluate each statement. Mark it TRUE or FALSE.",
                "statements": [s for s, _, _ in spec["items"]],
                "answer_key": answers,
                "tactical_explanations": expl,
                "difficulty_level": spec["diff"],
                "sort_order": n,
                "solution_overview": spec["overview"],
                "placeholder": False,
            }
        )
    return {"tasks": tasks_out}


def main() -> None:
    data = build()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    truths = sum(sum(1 for a in t["answer_key"] if a) for t in data["tasks"])
    print(f"Wrote {OUT} with {len(data['tasks'])} tasks, True={truths}, False={100-truths}")


if __name__ == "__main__":
    main()
