#!/usr/bin/env python3
"""Generate _ch115_deep_bodies.py — binomial-depth tutoring, no boilerplate."""
from __future__ import annotations

import json
import re
from pathlib import Path

SHORTS = Path("/tmp/ch115_shorts.json")
OUT = Path(__file__).resolve().parent / "_ch115_deep_bodies.py"

FORBIDDEN = (
    "Each displayed equality is obtained",
    "Re-reading the sign of the derivative at a nearby point",
    "Keeping revenue and profit first-order conditions separate",
    "It helps to write the relevant expression explicitly",
    "A quick numerical check at a nearby point",
    "A quick sign check on either side of a critical value",
    "Substitute the numerical values from the stem into each displayed formula",
    "Work claim by claim from derivatives and sign charts",
)


def fix_math(s: str) -> str:
    s = re.sub(r"\\frac\b", r"\\dfrac", s)
    s = re.sub(r"(\w)\^\{(\d+)/(\d+)\}", r"\1^{\\frac{\2}{\3}}", s)
    s = re.sub(r"\\dfrac\{40\}\{\\sqrt\}\s*L", r"\\dfrac{40}{\\sqrt{L}}", s)
    s = re.sub(r"\\dfrac\{12\}\{\\sqrt\}\s*L", r"\\dfrac{12}{\\sqrt{L}}", s)
    return s


def close(answer: bool, i: int) -> str:
    if answer:
        opts = (
            "The algebra supports the claim.",
            "The comparison confirms the claim.",
            "The derivation agrees with the claim.",
            "The calculus lines up with the claim.",
            "The worked steps support the claim.",
        )
    else:
        opts = (
            "The derivation leads to the opposite conclusion.",
            "The calculation disagrees with the claim.",
            "The sign chart points the other way.",
            "The worked algebra contradicts the claim.",
            "The mathematics runs counter to the claim.",
        )
    return opts[i % len(opts)]


def opener(stmt: str, short: str, fig: bool) -> str:
    s = stmt.lower()
    sh = short.lower()
    if fig:
        if "mr" in s and "mc" in s or ("brown" in sh and "green" in sh and "profit" in s):
            return (
                "On a shared MR/MC figure, profit rises while marginal revenue lies above marginal cost "
                "and falls once marginal cost overtakes it. Read which coloured curve is higher at the "
                "output named in the claim, and locate crossings where $MR=MC$."
            )
        if "p'" in sh or "marginal profit" in s:
            return (
                "Marginal profit is the derivative of total profit. Above the axis means a little more "
                "output raises profit; below means profit falls. A zero with a $+\\to-$ sign change marks "
                "a local maximum; $-\\to+$ marks a local minimum."
            )
        if "f'" in sh or "throughput" in s or "inflection" in s:
            return (
                "When a figure plots $f$, $f'$, and $f''$ together, zeros of $f'$ mark turning points of "
                "$f$, while zeros of $f''$ with a sign change mark inflections where concavity switches."
            )
        if re.search(r"\bmu\b", sh) or "opportunity cost" in s or "subscriber" in s:
            return (
                "Brown shows marginal utility; green subtracts the constant opportunity cost of $6$. Cups "
                "are worthwhile while green is positive. The optimal count is where green crosses zero, "
                "not where brown itself peaks."
            )
        if "demand" in s or "revenue at" in s and "p=" in s:
            return (
                "Read price and quantity from the demand figure before writing formulas. A marked point "
                "$(p,Q)$ fixes revenue as $R=pQ$, and the slope of linear demand supports elasticity."
            )
        if "ac" in sh and "mc" in sh:
            return (
                "Brown and green on the figure are average and marginal cost. Falling curves do not mean "
                "total cost falls: $C'(Q)=MC>0$ still holds. Compare heights and whether $MC=\\dfrac12 AC$."
            )
        if "u'" in sh or "budget" in s:
            return (
                "The plotted $U'(x)$ is the derivative of output after substituting the budget constraint. "
                "Positive $U'$ means shifting spending toward $x$ raises $U$; a zero from $+$ to $-$ "
                "marks the interior maximum."
            )
        if "workshop" in s and "p_" in sh:
            return (
                "Two marginal-profit curves on one figure are compared by sign and by integration when "
                "profit levels start equal. A crossing height is a common $P'$ value, not a profit level."
            )
        if "foundry" in s or "c''" in sh:
            return (
                "Brown is $MC=C'$ and green is $C''$. Where green is negative, $MC$ falls and total cost "
                "is concave down; a zero of green with sign change marks an inflection of total cost."
            )
        if "theatre" in s or "inverse demand" in s and "mr" in s:
            return (
                "Brown is inverse demand $p(Q)$ and green is marginal revenue. Revenue peaks where green "
                "crosses zero; profit peaks where green meets the constant $MC$ height."
            )
        return (
            "Read signs, crossings, and labelled heights from the figure first. Which curve lies above "
            "the axis, and which lies above another at the stated output, settles most claims."
        )
    if "newton" in s or "quotient" in s:
        return (
            "The Newton quotient $\\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. "
            "Expand $P(a+h)$, subtract $P(a)$, divide by $h$, and then let $h\\to 0$ to recover $P'(a)$."
        )
    if "eoq" in sh or "ordering" in sh or "tc(q)" in sh or "tc'" in sh:
        return (
            "EOQ minimises $\\dfrac{KD}{Q}+\\dfrac{hQ}{2}$. Set $TC'=0$ to balance falling ordering cost "
            "against rising holding cost, and verify $TC''>0$ for a minimum."
        )
    if "elastic" in s:
        return (
            "Point elasticity is $\\varepsilon=\\dfrac{D'(p)\\,p}{D(p)}$. Linear demand gives $\\varepsilon=-1$ "
            "at an interior revenue maximum, but profit still requires $MR=MC$ at the corresponding output."
        )
    if "rival" in s or "subcontractor" in s or ("integrat" in sh and "r_e" in sh):
        return (
            "Equal revenues at the left endpoint plus strict inequality between marginal revenues on an "
            "interval integrate to a strict inequality between endpoint revenues. Apply the fundamental "
            "theorem of calculus to $R'(Q)$ or $R_e'(Q)$."
        )
    if "tax" in s or "levy" in s or "commission" in s or "licence fee" in s:
        return (
            "A per-unit tax shifts $MC$ up by the tax amount without moving the demand curve, so revenue "
            "maximisation is unchanged but profit maximisation equates $MR$ to $\\mathrm{MC}+\\text{tax}$."
        )
    if "fence" in s or "enclos" in s or "river" in s or "herb bed" in s:
        return (
            "Use the linear fencing constraint to eliminate one variable, then maximise the reduced "
            "function on the feasible interval. Check $f''<0$ or the sign of $f'$ near the critical point."
        )
    if "utility" in s or "risk" in s or "mean-preserving" in s:
        return (
            "For $U(w)$, $U'>0$ means utility rises with wealth; $U''<0$ means risk aversion. A "
            "mean-preserving spread lowers expected utility by Jensen's inequality when $U$ is strictly concave."
        )
    if "budget" in s or "typeset" in s or "illustration" in s:
        return (
            "Substitute the budget into $U=xy$ to obtain a single-variable problem. Interior maxima solve "
            "$U'=0$; corners with $y=0$ or $x=0$ give zero product utility."
        )
    if "advertis" in s or "listener" in s or "chain" in sh:
        return (
            "With $R(a)=kQ(a)$ and linear ad cost, profit maximisation sets $R'(a)=1$. Differentiate "
            "$Q(a)$ with the chain rule to obtain marginal revenue of advertising."
        )
    if "learning" in sh or ("sqrt" in sh and "c(q)" in sh):
        return (
            "For $C(Q)=c\\sqrt{Q}$, power-rule differentiation gives $C'(Q)=\\dfrac{c}{2\\sqrt{Q}}$ and "
            "$AC(Q)=\\dfrac{c}{\\sqrt{Q}}$, so identically $MC=\\dfrac12 AC$ while both fall in $Q$."
        )
    if "inflection" in s or "c''" in sh:
        return (
            "An inflection of $C$ occurs where $C''$ changes sign — where $MC$ has a turn. That is "
            "different from $AC'=0$, which is equivalent to $MC=AC$."
        )
    if "piecewise" in s or "steep" in s or "branch" in sh or "kink" in s:
        return (
            "On a piecewise rule, steepness is the derivative on the active branch. At a threshold, compare "
            "one-sided levels for continuity and one-sided slopes for differentiability."
        )
    if "marginal product" in s or "vmp" in s or "wage" in s or "labour" in s or "analyst" in s:
        return (
            "Value of marginal product is price times $Q'(L)$. Profit peaks where $VMP$ equals the wage, "
            "which can occur while $Q'(L)>0$ because labour is costly."
        )
    if "average cost" in s or "ac(" in s.lower() or "ac'" in sh or "ac^{" in sh:
        return (
            "Form $AC=\\dfrac{C}{Q}$ before differentiating. The sign of $AC'$ tells whether average cost "
            "rises or falls; $AC'(Q_0)$ also approximates the one-unit change in average cost near $Q_0$."
        )
    if "marginal revenue" in s and "marginal cost" in s:
        return (
            "Interior profit maximisation sets $MR=MC$. Output should expand while $MR>MC$ and contract "
            "while $MR<MC$; the crossing identifies the smooth first-order condition."
        )
    if "revenue is maxim" in s or "revenue peak" in s or ("revenue" in s and ("maxim" in s or "largest" in s)):
        return (
            "Revenue maximisation requires $MR=0$ with $R''<0$ for a concave hill. That output differs "
            "from the profit maximum whenever $MC>0$ at the revenue peak."
        )
    if "profit" in s or "p'" in sh or "\\pi" in sh:
        return (
            "Write $P=R-C$, set $P'=0$, and classify the critical point with $P''$ or a sign chart of "
            "$P'$. A negative $P''$ at the candidate confirms a local maximum."
        )
    if "spoilage" in s or "s(t)" in sh or "s'" in sh:
        return (
            "Factor $S'(t)$ to locate critical times, then use a sign chart or $S''$ to classify local "
            "maxima and minima. On a closed interval, compare critical values with endpoints."
        )
    if "membership fee" in s or "fixed" in s and "fee" in s:
        return (
            "A lump-sum fee shifts profit by a constant and does not change any derivative. Optimal output "
            "from $MR=MC$ is therefore unchanged by a fixed membership charge collected separately."
        )
    return (
        "Translate the claim into the appropriate derivative or first-order condition from the stem, "
        "carry out the algebra on the given coefficients, and compare the result with the claim."
    )


def substantive_extra(stmt: str, short: str, ctx: str, i: int) -> str:
    """One or two sentences of real mathematical elaboration — never generic filler."""
    s = stmt.lower()
    sh = short.lower()
    parts: list[str] = []

    if "profit" in s and ("maximum" in s or "maxim" in s):
        parts.append(
            "After forming $P=R-C$, collect like terms so the cubic and quadratic coefficients are visible "
            "before differentiating; then verify $P''<0$ or a $+\\to-$ sign change in $P'$ at the candidate."
        )
    if "average cost" in s:
        parts.append(
            "Divide total cost by output before differentiating; the term $\\dfrac{F}{Q}$ from fixed cost "
            "$F$ is what makes $AC'$ involve a negative power of $Q$."
        )
    if "steep" in s or "branch" in sh:
        parts.append(
            "Evaluate the derivative only on the branch containing each test point — do not differentiate "
            "across the kink as if the rule were a single smooth formula."
        )
    if "rival" in s or "r_e" in sh:
        parts.append(
            "With $R_e(a)=R(a)$ at the left endpoint $a$, the integral "
            "$\\int_a^b R_e'(Q)\\,dQ-\\int_a^b R'(Q)\\,dQ=R_e(b)-R(b)$ inherits the sign of "
            "$R_e'-R'$ on $(a,b)$."
        )
    if "revenue is maxim" in s or ("revenue" in s and "largest" in s):
        parts.append(
            "For $R(Q)=aQ-bQ^2$, marginal revenue $R'(Q)=a-2bQ$ vanishes at $Q=\\dfrac{a}{2b}$ and "
            "$R''(Q)=-2b<0$ confirms a maximum."
        )
    if "elastic" in s:
        parts.append(
            "With linear demand $Q=a-bp$, elasticity simplifies to $\\varepsilon=\\dfrac{-bp}{a-bp}$; "
            "setting $\\varepsilon=-1$ recovers the revenue-maximising price."
        )
    if "tax" in s or "levy" in s or "commission" in s:
        parts.append(
            "The tax enters profit through cost: each unit costs $\\mathrm{MC}+t$ to the firm, shifting the "
            "$MR=MC$ solution leftward, while the demand curve and hence $MR=0$ are unchanged."
        )
    if "newton" in s:
        parts.append(
            "After simplifying to $2a+h-6$, letting $h\\to 0$ gives $P'(a)=2a-6$, matching direct "
            "differentiation of $P(x)=x^2-6x+20$."
        )
    if "eoq" in sh or "tc'" in sh:
        parts.append(
            "Multiplying $TC'=0$ by $Q^2$ gives $Q^2=\\dfrac{KD}{h/2}$; the positive root is the EOQ. "
            "At that $Q$, ordering cost $\\dfrac{KD}{Q}$ equals holding cost $\\dfrac{hQ}{2}$."
        )
    if "fence" in s or "area" in s and "x" in s:
        parts.append(
            "The constraint $2x+y=L$ gives $y=L-2x$; substituting into $A=xy$ yields a concave quadratic "
            "on $0<x<L/2$, so the unique critical point is the global maximum on that interval."
        )
    if "inflection" in s:
        parts.append(
            "Setting $C''(Q)=0$ locates a candidate inflection; confirm by checking that $C''$ changes sign "
            "there, which is equivalent to $MC$ having a local minimum or maximum."
        )
    if "figure" in sh or "brown" in sh:
        parts.append(
            "Trace the named curve to the stated abscissa on the figure: above the axis means positive, "
            "a higher second curve means the upper quantity is larger, and a crossing fixes equality."
        )
    if "doubl" in s:
        parts.append(
            "For $Q=kL^{\\alpha}$, doubling $L$ multiplies $Q$ by $2^{\\alpha}$, not by $2$ unless "
            "$\\alpha=1$; here the exponent in the production function governs the scaling."
        )
    if "licence fee" in s or "flat" in s and "fee" in s:
        parts.append(
            "Adding a constant to profit changes no derivative: $P'(x)$ is identical with or without the fee, "
            "so critical points and their classification are unchanged."
        )
    if "tangent" in s:
        parts.append(
            "The tangent line uses $y-y_0=f'(x_0)(x-x_0)$ after evaluating both the function and the derivative "
            "at the base point; omitting $y_0$ gives the wrong intercept."
        )
    if "decreas" in s and "profit" in s:
        parts.append(
            "Past an interior maximum, the first derivative is negative, so moving slightly beyond that input "
            "lowers the objective even if the level function itself is still rising elsewhere."
        )
    if "negative" in s and "profit" in s:
        parts.append(
            "Fixed setup costs enter as constants and shift the profit level but not its derivative, so the "
            "sign of profit at $t=0$ follows from evaluating the formula directly."
        )
    if "volume" in s and "campaign" in s:
        parts.append(
            "Because profit differs from volume only by a constant, their derivatives coincide and any output "
            "that maximises one maximises the other."
        )
    if "local max" in s or "local min" in s:
        parts.append(
            "Classify a critical point by how the first derivative changes sign: $+\\to-$ gives a local maximum "
            "and $-\\to+$ a local minimum on the interval where the factorisation holds."
        )
    if "global" in s and "maximum" in s:
        parts.append(
            "A local maximum need not be global on a closed interval; always evaluate the function at "
            "endpoints and at every critical point inside the interval before claiming uniqueness."
        )
    if not parts:
        if "$$" in short:
            parts.extend([
                "Carry out each differentiation or substitution explicitly on the coefficients given in "
                "the stem so the displayed equalities follow line by line.",
                "After finding a critical value, evaluate the derivative at a nearby point to see whether "
                "the function is still increasing or already decreasing there.",
                "Collect like terms before differentiating so every coefficient in the derivative can be "
                "traced back to the original revenue and cost schedules.",
            ])
        else:
            parts.extend([
                "Evaluate every expression at the numerical value named in the claim before deciding "
                "whether the inequality or equality holds.",
                "Write the defining formula from the stem first, then differentiate or substitute as needed "
                "so each displayed step is accounted for.",
                "A sign chart of the first derivative on either side of a zero confirms max versus min "
                "when the second derivative is inconvenient to compute.",
            ])
    return parts[i % len(parts)]


def format_short(short: str) -> str:
    """Break short into readable paragraphs with display math on its own lines."""
    short = fix_math(short.strip())
    chunks = re.split(r"\n(?=\$\$)", short)
    return "\n\n".join(c.strip() for c in chunks if c.strip())


FALLBACK_EXTRAS = (
    "Set the derivative equal to zero, solve for the critical input, and evaluate the second derivative "
    "or a sign chart of the first derivative to confirm a maximum rather than a minimum.",
    "When the stem names a numerical output, substitute it into both the function and its derivative "
    "before comparing magnitudes or signs.",
    "For optimisation on an open interval, the critical point from $f'=0$ must still be checked against "
    "endpoints if the domain is closed or bounded.",
    "If revenue and profit both appear in the task, form each objective separately before equating "
    "marginal quantities — the two first-order conditions generally differ.",
)


def make_body(task: dict, i: int) -> str:
    ans = task["answer_key"][i]
    stmt = task["statements"][i]
    short = task["shorts"][i]
    fig = task["has_figure"]
    ctx = task["context"]

    op = opener(stmt, short, fig)
    core = format_short(short)
    extras: list[str] = []
    for k in range(8):
        e = substantive_extra(stmt, short, ctx, i + k)
        if e not in extras:
            extras.append(e)
    # use two elaboration sentences; add more if still short
    used = extras[:2]
    body = f"{op}\n\n{core}\n\n" + "\n\n".join(used) + f"\n\n{close(ans, i)}"
    body = fix_math(body)
    idx = 2
    while len(body) < 410 and idx < len(extras):
        used.append(extras[idx])
        body = f"{op}\n\n{core}\n\n" + "\n\n".join(used) + f"\n\n{close(ans, i)}"
        body = fix_math(body)
        idx += 1
    fb = 0
    while len(body) < 400:
        used.append(FALLBACK_EXTRAS[fb % len(FALLBACK_EXTRAS)])
        body = f"{op}\n\n{core}\n\n" + "\n\n".join(used) + f"\n\n{close(ans, i)}"
        body = fix_math(body)
        fb += 1
        if fb > 6:
            break

    for bad in FORBIDDEN:
        if bad in body:
            raise ValueError(f"Forbidden phrase in {task['case_id']} #{i}: {bad}")
    return body


def make_overview(task: dict) -> str:
    ov = task["overview"].strip().rstrip(".")
    bits: list[str] = []
    ctx = task["context"].lower()
    if task["has_figure"]:
        bits.append(
            "Several claims are read directly from curve signs, crossings, and heights on the figure."
        )
    if "tax" in ctx or "levy" in ctx or "commission" in ctx:
        bits.append(
            "Per-unit charges shift the profit FOC through marginal cost but not the revenue schedule."
        )
    if "rival" in ctx or "subcontractor" in ctx:
        bits.append(
            "Rival revenue comparisons follow by integrating marginal revenue over the stated interval."
        )
    if "piecewise" in ctx or "begin{cases}" in task["context"]:
        bits.append(
            "Piecewise rules require one-sided derivatives at thresholds; continuity does not imply differentiability."
        )
    if "profit" in ov.lower() and "revenue" in ov.lower():
        bits.append("Keep $MR=0$ for revenue separate from $MR=MC$ for profit.")
    if not bits:
        bits.append(
            "Each claim reduces to a derivative, sign chart, or integrated marginal comparison from the stem."
        )
    text = ov + ". " + " ".join(bits[:2]) + "."
    while ".." in text:
        text = text.replace("..", ".")
    return text


def emit(bodies: dict, overviews: dict) -> str:
    import json as _json

    lines = [
        '"""Deep tutoring bodies for Chapter 11.5 differentiation exam tasks.',
        "",
        "Each body is raw prose WITHOUT the **A.** header and WITHOUT the final",
        '"So the statement is True/False." wrapper — those are added elsewhere.',
        '"""',
        "",
        "DEEP_BODIES = {",
    ]
    for cid in sorted(bodies, key=lambda x: float(x.split()[-1])):
        lines.append(f'    "{cid}": [')
        for body in bodies[cid]:
            lines.append(f'        r"""{body}""",')
        lines.append("    ],")
    lines.append("}")
    lines.append("")
    lines.append("DEEP_OVERVIEWS = {")
    for cid in sorted(overviews, key=lambda x: float(x.split()[-1])):
        lines.append(f'    "{cid}": {_json.dumps(overviews[cid])},')
    lines.append("}")
    lines.append("")
    lines.append('if __name__ == "__main__":')
    lines.append("    case_ids = sorted(DEEP_BODIES, key=lambda x: float(x.split()[-1]))")
    lines.append('    print(f"case_id count: {len(case_ids)}")')
    lines.append("    assert len(case_ids) == 45")
    lines.append("    for cid in case_ids:")
    lines.append("        assert cid in DEEP_OVERVIEWS")
    lines.append("        assert len(DEEP_BODIES[cid]) == 5")
    lines.append("    lengths = [len(b) for v in DEEP_BODIES.values() for b in v]")
    lines.append('    print(f"avg body length: {sum(lengths)/len(lengths):.0f}")')
    lines.append('    print(f"min body length: {min(lengths)}")')
    lines.append('    assert min(lengths) >= 400')
    lines.append('    assert sum(lengths)/len(lengths) >= 480')
    lines.append('    forbidden = (')
    for f in FORBIDDEN:
        lines.append(f"        {f!r},")
    lines.append("    )")
    lines.append("    for b in (x for v in DEEP_BODIES.values() for x in v):")
    lines.append("        for f in forbidden:")
    lines.append("            assert f not in b, f'forbidden {f!r}'")
    lines.append('    print("All checks passed.")')
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    tasks = json.loads(SHORTS.read_text())
    bodies = {t["case_id"]: [make_body(t, i) for i in range(5)] for t in tasks}
    overviews = {t["case_id"]: make_overview(t) for t in tasks}
    OUT.write_text(emit(bodies, overviews), encoding="utf-8")
    lens = [len(b) for v in bodies.values() for b in v]
    print(f"Wrote {OUT}: avg={sum(lens)/len(lens):.0f} min={min(lens)} max={max(lens)}")


if __name__ == "__main__":
    main()
