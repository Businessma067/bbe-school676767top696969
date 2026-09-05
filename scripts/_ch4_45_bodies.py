"""Generate MATH 13.18-depth explanations for Chapter 4.5 exam tasks."""

from __future__ import annotations

import re
from typing import Callable

from _ch4_1318_lib import D as disp, join, pack


def _linear(letter: str, truth: bool, a: int, b: int, c: int, claimed: int) -> str:
    lhs = f"{a}x+{b}" if b >= 0 else f"{a}x{b}"
    rhs = str(c)
    step1 = c - b
    actual = step1 // a
    return pack(
        letter,
        truth,
        "A linear equation with nonzero slope has exactly one real root. Undo addition first, then divide by the coefficient of $x$:",
        disp(f"{lhs}={rhs}"),
        "Subtract the constant term from both sides:",
        disp(f"{a}x={step1}"),
        f"Divide by ${a}$:",
        disp(f"x={actual}"),
        (
            f"The recovered root is $x={actual}$, which matches the claimed $x={claimed}$."
            if actual == claimed
            else f"The recovered root is $x={actual}$, not the claimed $x={claimed}$."
        ),
    )


def _quad_sum(letter: str, truth: bool, claimed_sum: int = 10) -> str:
    # Fixed polynomial x^2 - 9x + 18 = 0, roots 3 and 6, sum 9
    actual = 9
    return pack(
        letter,
        truth,
        "For a monic quadratic $x^{2}-sx+p=0$, Vieta’s sum formula reads the coefficient of $x$ with a sign change:",
        disp(r"x^{2}-9x+18=0"),
        "Factor as a product of linear terms:",
        disp(r"(x-3)(x-6)=0"),
        "The roots are therefore $x=3$ and $x=6$. Their sum is",
        disp(r"3+6=9"),
        "The same sum is the Vieta coefficient:",
        disp(r"s=9"),
        (
            f"The claim asks for sum ${claimed_sum}$, but the roots sum to ${actual}$."
            if actual != claimed_sum
            else f"The roots sum to ${actual}$, matching the claim."
        ),
    )


def _rational(letter: str, truth: bool, num_const: int, claimed: int) -> str:
    # (x + num_const)/(x - 1) = 2 on x != 1
    # x + num_const = 2(x - 1) => x + num_const = 2x - 2 => num_const + 2 = x
    actual = num_const + 2
    return pack(
        letter,
        truth,
        "On the stated domain $x\\ne 1$, clear the nonzero denominator by cross-multiplying:",
        disp(rf"\dfrac{{x+{num_const}}}{{x-1}}=2"),
        "Multiply both sides by $x-1$:",
        disp(f"x+{num_const}=2(x-1)"),
        "Expand the right-hand side:",
        disp(f"x+{num_const}=2x-2"),
        "Gather the unknown on one side:",
        disp(f"{num_const}+2=2x-x"),
        disp(f"x={actual}"),
        "Check the hole: $x=1$ is excluded, and the recovered value is admissible.",
        (
            f"The solution is $x={actual}$, matching the claim."
            if actual == claimed
            else f"The solution is $x={actual}$, not the claimed $x={claimed}$."
        ),
    )


def _exp2(letter: str, truth: bool, power_val: int, claimed: int) -> str:
    # 2^x = power_val where power_val is 4,8,16,32,64
    actual = {4: 2, 8: 3, 16: 4, 32: 5, 64: 6}[power_val]
    return pack(
        letter,
        truth,
        "Rewrite the right-hand side as a pure power of the same base. Because $y\\mapsto 2^{y}$ is one-to-one on $\\mathbb{R}$, the exponents must match:",
        disp(f"2^{{x}}={power_val}"),
        disp(f"{power_val}=2^{{{actual}}}"),
        "So the exponential equation becomes",
        disp(f"2^{{x}}=2^{{{actual}}}"),
        "and therefore",
        disp(f"x={actual}"),
        (
            f"The unique real solution is $x={actual}$, matching the claim."
            if actual == claimed
            else f"The unique real solution is $x={actual}$, not the claimed $x={claimed}$."
        ),
    )


def _parse_linear(stmt: str) -> tuple[int, int, int, int]:
    m = re.search(
        r"equation \$(\d+)x\+(-?\d+)=(\d+)\$ has the unique solution \$x=(\d+)\$",
        stmt,
    )
    if not m:
        raise ValueError(f"linear parse fail: {stmt}")
    return tuple(map(int, m.groups()))  # type: ignore


def _parse_rational(stmt: str) -> tuple[int, int]:
    m = re.search(
        r"dfrac\{x\+(\d+)\}\{x-1\}=2\$ has solution \$x=(\d+)\$",
        stmt,
    )
    if not m:
        raise ValueError(f"rational parse fail: {stmt}")
    return int(m.group(1)), int(m.group(2))


def _parse_exp(stmt: str) -> tuple[int, int]:
    m = re.search(r"equation \$2\^x=(\d+)\$ has the unique real solution \$x=(\d+)\$", stmt)
    if not m:
        raise ValueError(f"exp parse fail: {stmt}")
    return int(m.group(1)), int(m.group(2))


def explain_independent(letter: str, truth: bool, stmt: str) -> str:
    if "roots of" in stmt and "have sum" in stmt:
        m = re.search(r"have sum \$(\d+)\$", stmt)
        return _quad_sum(letter, truth, int(m.group(1)) if m else 10)
    if "dfrac" in stmt or "frac" in stmt:
        k, claimed = _parse_rational(stmt)
        return _rational(letter, truth, k, claimed)
    if "2^x" in stmt:
        pv, claimed = _parse_exp(stmt)
        return _exp2(letter, truth, pv, claimed)
    if "unique solution" in stmt:
        a, b, c, claimed = _parse_linear(stmt)
        return _linear(letter, truth, a, b, c, claimed)
    raise ValueError(f"unhandled independent statement: {stmt}")


def overview_independent(topics: str) -> str:
    return join(
        f"Independent round-robin mini-problems ({topics}). Each letter is a separate equation; there is no shared unknown across A–E.",
        "For a linear claim, undo addition then divide. For a quadratic sum claim, factor or apply Vieta. "
        "For a rational claim, exclude the hole, cross-multiply, and check admissibility. "
        "For an exponential claim $2^{x}=2^{k}$, equate exponents.",
    )


# --- Shared tariff (4.1) -------------------------------------------------


def tariff_pack(fixed: int, unit: int, total: int) -> dict:
    x = (total - fixed) // unit
    overview = join(
        f"A repair tariff charges a fixed call-out of ${fixed}$ EUR plus ${unit}$ EUR per replacement unit. One invoice totals ${total}$ EUR.",
        "**Part 1: Translate.**",
        "Let $x$ be the number of units on that invoice. Fixed cost plus per-unit cost gives",
        disp(f"{fixed}+{unit}x={total}") + " (1)",
        "**Part 2: Solve.**",
        "Subtract the fixed fee:",
        disp(f"{unit}x={total - fixed}"),
        "Divide by the unit price:",
        disp(f"x={x}"),
        f"**Answer.** Fixed fee ${fixed}$ EUR | unit price ${unit}$ EUR | $x={x}$ units on the recorded invoice.",
    )

    def letter_A(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "The overview already wrote the invoice as fixed fee plus unit charge:",
            disp(f"{fixed}+{unit}x={total}"),
            "That is exactly the displayed equation in the claim.",
        )

    def letter_B(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            f"The overview already recovered $x={x}$ from (1). The claim asserts that the invoice contains ${x}$ units.",
            disp(rf"x=\dfrac{{{total}-{fixed}}}{{{unit}}}={x}"),
            f"So the recorded invoice has ${x}$ units.",
        )

    def letter_C(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "Doubling only the unit count doubles the variable part, not the fixed call-out. With the recovered tariff,",
            disp(f"C(x)={fixed}+{unit}x"),
            "the doubled-unit bill is",
            disp(f"C(2x)={fixed}+{unit}(2x)={fixed}+{2 * unit}x"),
            "while twice the original bill is",
            disp(f"2C(x)=2{fixed}+{2 * unit}x={2 * fixed}+{2 * unit}x"),
            f"These differ by the leftover fixed fee ${fixed}$ EUR, so doubling units does not double the full invoice.",
        )

    def letter_D(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "The marginal charge is the coefficient of $x$ in the recovered tariff:",
            disp(f"C(x+1)-C(x)={unit}"),
            f"One extra unit therefore adds exactly ${unit}$ EUR.",
        )

    def letter_E(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "Read the constant term in the recovered tariff $C(x)="
            + str(fixed)
            + "+"
            + str(unit)
            + "x$. Setting the unit count to zero isolates the call-out fee:",
            disp(f"C(0)={fixed}"),
            f"That fixed cost is ${fixed}$ EUR, so the tariff does not have zero fixed cost.",
        )

    return {
        "overview": overview,
        "letters": [letter_A, letter_B, letter_C, letter_D, letter_E],
    }


# --- Shared surplus quadratic (4.2) --------------------------------------


def surplus_pack(r1: int, r2: int, claimed_max: int) -> dict:
    mid = (r1 + r2) // 2
    # P(q) = -(q-r1)(q-r2) = -q^2 + (r1+r2)q - r1*r2
    # max at mid: P(mid) = -(mid-r1)(mid-r2) = -(-d)(d) = d^2 where d = mid-r1
    d = mid - r1
    pmax = d * d
    overview = join(
        f"Operating surplus is modeled by $P(q)=-(q-{r1})(q-{r2})$ thousand EUR for a nonnegative attendance index $q$.",
        "**Part 1: Translate.**",
        "Break-even means $P(q)=0$, and a positive surplus means $P(q)>0$. Expanding gives the downward parabola",
        disp(rf"P(q)=-q^{{2}}+{r1 + r2}q-{r1 * r2}"),
        "**Part 2: Recover.**",
        "A product is zero when a factor is zero, so the roots are $q="
        + str(r1)
        + "$ and $q="
        + str(r2)
        + "$. The axis of symmetry is their midpoint",
        disp(rf"q=\dfrac{{{r1}+{r2}}}{{2}}={mid}"),
        "The maximum surplus is the vertex value",
        disp(rf"P({mid})=-({mid}-{r1})({mid}-{r2})={pmax}"),
        f"**Answer.** Roots ${r1},{r2}$ | axis $q={mid}$ | max surplus ${pmax}$ thousand EUR.",
    )

    def letter_A(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            f"The overview already factored $P(q)=-(q-{r1})(q-{r2})$. Setting the product to zero gives the break-even indices",
            disp(f"q-{r1}=0"),
            disp(f"q={r1}"),
            "and",
            disp(f"q-{r2}=0"),
            disp(f"q={r2}"),
            f"So the break-even indices are ${r1}$ and ${r2}$.",
        )

    def letter_B(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "A downward-opening parabola is positive strictly between its roots. With roots from the overview,",
            disp(rf"P(q)>0 \iff {r1}<q<{r2}"),
            "which is exactly the claimed open interval.",
        )

    def letter_C(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "The axis of symmetry of a quadratic is the midpoint of the roots:",
            disp(rf"q=\dfrac{{{r1}+{r2}}}{{2}}={mid}"),
            f"So the axis is $q={mid}$.",
        )

    def letter_D(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            f"The overview already evaluated the vertex: $P({mid})={pmax}$. The claim asserts a maximum of ${claimed_max}$ thousand EUR.",
            disp(rf"P({mid})={pmax}"),
            (
                f"Since ${pmax}\\ne{claimed_max}$, the figures disagree."
                if pmax != claimed_max
                else f"The maximum is ${pmax}$, matching the claim."
            ),
        )

    def letter_E(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            f"The algebraic roots recovered in the overview are ${r1}$ and ${r2}$. Both are positive, so they are not both negative.",
        )

    return {"overview": overview, "letters": [letter_A, letter_B, letter_C, letter_D, letter_E]}


# --- Shared work-rate (4.3) ----------------------------------------------


def workrate_pack(together: int, gap: int, phys: int, neg: int) -> dict:
    # 1/x + 1/(x+gap) = 1/together
    slower = phys + gap
    overview = join(
        f"Two pumps fill one reservoir together in ${together}$ hours. The faster alone needs $x$ hours and the slower needs $x+{gap}$ hours:",
        disp(rf"\dfrac{{1}}{{x}}+\dfrac{{1}}{{x+{gap}}}=\dfrac{{1}}{{{together}}}"),
        "Only positive times are physically admissible, and $x=0$ or $x=-"
        + str(gap)
        + "$ would zero a denominator.",
        f"**Part 1: Clear denominators.** Multiply through by ${together}x(x+{gap})$ and expand:",
        disp(f"{together}(x+{gap})+{together}x=x(x+{gap})"),
        disp(f"{2 * together}x+{together * gap}=x^{{2}}+{gap}x"),
        "Rearrange into standard form:",
        disp(f"x^{{2}}+({gap}-{2 * together})x-{together * gap}=0"),
        "**Part 2: Solve.** Factoring yields the algebraic roots",
        disp(f"x={phys}"),
        "and",
        disp(f"x={neg}"),
        f"Only $x={phys}$ is positive, so the physical pair is ${phys}$ and ${slower}$ hours.",
        f"**Answer.** Algebraic roots ${phys}$ and ${neg}$ | physical times ${phys}$ and ${slower}$ hours.",
    )

    def letter_A(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            f"The overview already recovered the positive root $x={phys}$. Among the two algebraic roots, only this one is a physically admissible duration.",
            disp(f"x={phys}>0"),
            f"So $x={phys}$ is the physical solution.",
        )

    def letter_B(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            f"Clearing denominators produced the quadratic whose roots are $x={phys}$ and $x={neg}$. In particular,",
            disp(f"x={neg}"),
            "is an algebraic root of that cleared equation, even though it is not a physical time.",
        )

    def letter_C(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            f"The algebraic roots are $x={phys}$ and $x={neg}$. A negative duration cannot be a physical pump time, so not both roots are physically admissible.",
        )

    def letter_D(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            f"With the physical root $x={phys}$ from the overview, the slower pump’s time is",
            disp(f"x+{gap}={phys}+{gap}={slower}"),
            f"So the individual times are ${phys}$ and ${slower}$ hours.",
        )

    def letter_E(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "Substituting $x=0$ into the original combined-rate equation makes the first denominator vanish:",
            disp(rf"\dfrac{{1}}{{0}}+\dfrac{{1}}{{0+{gap}}}"),
            "which is undefined. The original equation therefore excludes $x=0$.",
        )

    return {"overview": overview, "letters": [letter_A, letter_B, letter_C, letter_D, letter_E]}


# --- Shared exponential (4.4) --------------------------------------------


def exp_growth_pack(n0: int) -> dict:
    # N(t) = n0 * 2^{t/3}
    overview = join(
        f"The subscriber base follows $N(t)={n0}\\cdot 2^{{t/3}}$ for real $t\\ge 0$, with $t=0$ as the launch date.",
        "**Part 1: Launch level.**",
        disp(rf"N(0)={n0}\cdot 2^{{0}}={n0}\cdot 1={n0}"),
        "**Part 2: Three-year growth factor.** Replacing $t$ by $t+3$ multiplies the model by",
        disp(r"2^{(t+3)/3}/2^{t/3}=2^{1}=2"),
        "so the base doubles every three years.",
        "**Part 3: Named levels.**",
        disp(rf"N(6)={n0}\cdot 2^{{6/3}}={n0}\cdot 2^{{2}}={4 * n0}"),
        "Four times the launch level means $N(t)=4N(0)$, so",
        disp(rf"2^{{t/3}}=4=2^{{2}}"),
        disp(r"t/3=2"),
        disp(r"t=6"),
        f"**Answer.** $N(0)={n0}$ | doubles every $3$ years | $N(6)={4 * n0}$ | fourfold time $t=6$.",
    )

    def letter_A(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "Any positive number to the power $0$ equals $1$, so the launch level is the leading coefficient:",
            disp(rf"N(0)={n0}\cdot 2^{{0}}={n0}"),
            f"So $N(0)={n0}$.",
        )

    def letter_B(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "The overview already computed the three-year growth factor:",
            disp(r"N(t+3)/N(t)=2"),
            "so the subscriber base doubles every three years.",
        )

    def letter_C(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "Substitute $t=6$ into the recovered model:",
            disp(rf"N(6)={n0}\cdot 2^{{6/3}}"),
            disp(rf"={n0}\cdot 2^{{2}}"),
            disp(f"={4 * n0}"),
            f"The claim asserts $N(6)=600$, but the model gives ${4 * n0}$.",
        )

    def letter_D(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "Four times the launch level means $N(t)=4N(0)$:",
            disp(rf"{n0}\cdot 2^{{t/3}}=4\cdot {n0}"),
            disp(r"2^{t/3}=4=2^{2}"),
            "Equating exponents:",
            disp(r"t/3=2"),
            disp(r"t=6"),
            "So four times the launch level is reached at $t=6$.",
        )

    def letter_E(letter: str, truth: bool) -> str:
        return pack(
            letter,
            truth,
            "The base $2>1$ and the coefficient of $t$ in the exponent is positive, so $N$ is strictly increasing on $t\\ge 0$. The model does not decrease on its stated domain.",
        )

    return {"overview": overview, "letters": [letter_A, letter_B, letter_C, letter_D, letter_E]}


SHARED: dict[str, dict] = {
    "math-4-204": tariff_pack(30, 4, 110),
    "math-4-205": surplus_pack(4, 10, 10),
    "math-4-206": workrate_pack(4, 6, 6, -4),
    "math-4-207": exp_growth_pack(200),
    "math-4-208": tariff_pack(35, 5, 145),
    "math-4-209": surplus_pack(5, 11, 10),
    "math-4-210": workrate_pack(8, 12, 12, -8),
    "math-4-211": exp_growth_pack(250),
    "math-4-212": tariff_pack(40, 6, 184),
    "math-4-213": surplus_pack(6, 12, 10),
}


def topics_from_overview(ov: str) -> str:
    m = re.search(r"topics:\s*([^.]+)", ov)
    return m.group(1).strip() if m else "4.1–4.4"


def rewrite_task(task: dict) -> tuple[str, list[str]]:
    tid = task["id"]
    keys = task["answer_key"]
    stmts = task["statements"]
    if tid in SHARED:
        pack_data = SHARED[tid]
        expls = [
            pack_data["letters"][i](letter, bool(keys[i]))
            for i, letter in enumerate("ABCDE")
        ]
        return pack_data["overview"], expls

    # independent round-robin
    topics = topics_from_overview(task.get("solution_overview") or "")
    overview = overview_independent(topics)
    expls = [
        explain_independent(letter, bool(keys[i]), stmts[i])
        for i, letter in enumerate("ABCDE")
    ]
    return overview, expls
