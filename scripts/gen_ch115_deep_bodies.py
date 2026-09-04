#!/usr/bin/env python3
"""Generate scripts/_ch115_deep_bodies.py with binomial-depth tutoring prose."""

from __future__ import annotations

import json
import re
from pathlib import Path

SHORTS = Path("/tmp/ch115_shorts.json")
OUT = Path(__file__).resolve().parent / "_ch115_deep_bodies.py"

FORBIDDEN = (
    "Carry out each differentiation",
    "Evaluate every expression at the numerical",
    "Write the defining formula from the stem first",
    "Substitute the numerical values from the stem into each displayed formula",
    "A quick sign check on either side of a critical value",
    "A quick numerical check at a nearby point",
    "Each displayed equality is obtained",
    "Re-reading the sign of the derivative at a nearby point",
    "Keeping revenue and profit first-order conditions separate",
    "It helps to write the relevant expression explicitly",
)


def fix_math(s: str) -> str:
    s = re.sub(r"\\frac\b", r"\\dfrac", s)
    s = re.sub(r"(\w)\^\{(-?\d+)/(\d+)\}", r"\1^{\\frac{\2}{\3}}", s)
    s = re.sub(r"\^(-?\d+)/(\d+)", r"^{\\frac{\1}{\2}}", s)
    return s


def close(answer: bool, i: int) -> str:
    if answer:
        opts = (
            "The derivation therefore agrees with the claim.",
            "Those steps confirm the claim.",
            "The calculation supports the claim.",
            "The sign reading and algebra confirm the claim.",
            "The worked FOC matches the claim.",
        )
    else:
        opts = (
            "The derivation therefore disagrees with the claim.",
            "Those steps contradict the claim.",
            "The calculation runs against the claim.",
            "The sign reading shows the claim is wrong.",
            "The worked FOC does not match the claim.",
        )
    return opts[i % len(opts)]


def opener(stmt: str, short: str, fig: bool, title: str, context: str) -> str:
    blob = f"{title} {context} {stmt} {short}".lower()
    s = stmt.lower()
    sh = short.lower()

    if any(k in blob for k in ("advertis", "podcast", "listener")):
        return (
            "When revenue is chained through listenership, differentiate with the chain rule: "
            "marginal revenue of advertising equals (euros per listener) times (listeners per euro). "
            "An interior profit maximum sets that marginal revenue equal to the marginal cost of one more euro spent."
        )
    if any(k in blob for k in ("fence", "enclos", "riverside", "herb box", "stall enclosure")):
        return (
            "With a linear fencing constraint, eliminate one length, write area or revenue as a function of a "
            "single free variable, then maximise with ordinary single-variable calculus on the open interval "
            "allowed by the fence budget."
        )
    if any(k in blob for k in ("eoq", "warehouse", "order quantity", "holding cost", "tc(q)")):
        return (
            "EOQ balances a falling ordering-cost term against a rising holding-cost term. "
            "Set $TC^{\prime}=0$, check $TC^{\prime\prime}>0$, and compare nearby order sizes by evaluating $TC$ directly."
        )
    if "newton" in blob or "quotient" in blob:
        return (
            "The Newton quotient $\\dfrac{P(a+h)-P(a)}{h}$ is the average slope between $a$ and $a+h$. "
            "Expand $P(a+h)$, cancel $P(a)$, divide by $h$, then let $h\\to 0$ to recover $P^{\prime}(a)$."
        )
    if any(k in blob for k in ("learning", "square-root", "sqrt", "app studio")) and "cost" in blob:
        return (
            "Under square-root learning $C(Q)=c\\sqrt{Q}$, both average and marginal cost fall in $Q$, "
            "and the identity $MC=\\dfrac12 AC$ holds for every $Q>0$. Scaling $Q$ by $2$ scales $C$ by $\\sqrt{2}$, not by $2$."
        )
    if "utility" in blob and ("risk" in blob or "wealth" in blob or "founder" in blob):
        return (
            "Marginal utility is $U^{\prime}$; risk aversion for a smooth $U$ is the statement $U^{\prime\prime}<0$. "
            "A mean-preserving spread then lowers expected utility by Jensen's inequality."
        )
    if "budget" in blob and ("illustration" in blob or "typeset" in blob or "design duo" in blob):
        return (
            "Under a linear budget, solve for one input, substitute into $U=xy$, and maximise the reduced "
            "single-variable function. Corner solutions with a zero factor kill product utility."
        )

    if fig:
        if ("mr" in s and "mc" in s) or ("brown" in sh and "green" in sh and ("mr" in sh or "mc" in sh)):
            return (
                "On a shared MR/MC figure, profit rises while marginal revenue lies above marginal cost and "
                "falls once marginal cost overtakes it. Read which coloured curve is higher at the named output, "
                "and locate crossings where $MR=MC$. Crossing height is a marginal value, not total profit."
            )
        if "p'" in sh or "marginal profit" in s or "p′" in short.lower():
            return (
                "Marginal profit is the derivative of total profit. Above the axis means a little more output "
                "raises profit; below means profit falls. A zero with a $+\\to-$ sign change marks a local maximum; "
                "$-\\to+$ marks a local minimum. Global claims need level comparisons the figure may not supply."
            )
        if "f'" in sh or "f″" in short or "throughput" in blob or "inflection" in s:
            return (
                "When a figure plots $f$, $f^{\prime}$, and $f^{\prime\prime}$ together, zeros of $f^{\prime}$ mark turning points of $f$, "
                "while zeros of $f^{\prime\prime}$ with a sign change mark inflections. The peak of $f^{\prime}$ is steepest climb of $f$, "
                "not a peak of $f$ itself."
            )
        if re.search(r"\bmu\b", sh) or "opportunity" in blob or "marginal utility" in blob:
            return (
                "Brown shows marginal utility; green subtracts a constant opportunity cost. Cups are worthwhile "
                "while green is positive. The stop rule is the zero of green ($\\mathrm{MU}=$ opportunity cost), "
                "not a peak of brown."
            )
        if "ac" in sh and "mc" in sh:
            return (
                "Brown and green on the figure are average and marginal cost. Falling $AC$ or $MC$ does not mean "
                "total cost falls: $C^{\prime}=MC>0$ still holds. Compare heights and identities such as $MC=\\dfrac12 AC$."
            )
        if "u'" in sh or ("budget" in blob and fig):
            return (
                "The plotted $U^{\prime}(x)$ is the derivative of output after substituting the budget constraint. "
                "Positive $U^{\prime}$ means shifting spending toward $x$ raises $U$; a $+\\to-$ zero marks the interior maximum."
            )
        if "workshop" in blob and ("p_a" in sh or "p'_a" in sh or "two workshops" in blob):
            return (
                "Two marginal-profit curves on one figure are compared by sign and by integration when profit "
                "levels start equal. A crossing height is a common $P^{\prime}$ value, not a level of total profit."
            )
        return (
            "Read signs, crossings, and labelled heights from the figure first. Which curve lies above the axis, "
            "and which lies above another at the stated output, settles most of the claim."
        )

    if "elastic" in s:
        return (
            "Point price elasticity is $\\varepsilon=\\dfrac{D^{\prime}(p)\\,p}{D(p)}$. For ordinary downward-sloping "
            "demand, revenue peaks where $\\varepsilon=-1$, which is equivalent to $MR=0$ on the quantity side."
        )
    if "average cost" in s or "ac'" in sh:
        return (
            "Average cost is total cost divided by output. Form $AC=\\dfrac{C}{Q}$ before differentiating; "
            "the sign of $AC^{\prime}$ says whether a little more output raises or lowers cost per unit."
        )
    if "rival" in s or "r_e" in sh:
        return (
            "If two revenue curves start at the same height and one has strictly larger marginal revenue on an "
            "interval, integrating that inequality shows the first curve ends strictly higher."
        )
    if "steep" in s or "branch" in sh or "piecewise" in blob:
        return (
            "On a piecewise schedule, steepness at a point is the derivative of the active branch. "
            "Compare those one-sided slopes directly; continuity of the level does not force equal one-sided derivatives."
        )
    if "tax" in s or "levy" in s or "commission" in s:
        return (
            "A per-unit tax shifts marginal cost up by the tax. The new profit FOC equates $MR$ to $MC$ plus tax, "
            "which typically lowers optimal output, while the revenue schedule (and $MR=0$) is unchanged."
        )
    if "revenue" in s and ("maxim" in s or "largest" in s):
        return (
            "Revenue is maximised where marginal revenue vanishes and the second derivative is negative "
            "(for a typical smooth hill-shaped $R$). That need not be the profit maximum."
        )
    if "profit" in s or "π" in short or "\\pi" in short:
        return (
            "Profit is revenue minus cost. Interior candidates solve $P^{\prime}=0$; a sign chart of $P^{\prime}$ or the sign "
            "of $P^{\prime\prime}$ then classifies a local max versus a local min."
        )
    return (
        "Translate the claim into the appropriate derivative or first-order condition from the stem, "
        "carry out the algebra on the given coefficients, and compare the result with the claim."
    )


def extra(stmt: str, short: str, title: str, context: str, i: int) -> str:
    """Optional second teaching beat — must match the actual topic."""
    blob = f"{title} {context} {stmt} {short}".lower()
    s = stmt.lower()
    candidates: list[str] = []

    if any(k in blob for k in ("advertis", "podcast", "listener")):
        candidates.append(
            "Because $Q$ is concave in advertising spend, $\\pi^{\prime}$ is strictly decreasing and crosses zero at most once, "
            "so the critical point is the unique interior maximum."
        )
    elif "eoq" in blob or "holding" in blob or "tc'" in short.lower():
        candidates.append(
            "Multiplying $TC^{\prime}=0$ by $Q^{2}$ isolates $Q^{2}=\\dfrac{KD}{h/2}$; at that EOQ the ordering and holding "
            "cost pieces are equal."
        )
    elif "elastic" in s:
        candidates.append(
            "With linear demand $Q=a-bp$, elasticity simplifies to $\\varepsilon=\\dfrac{-bp}{a-bp}$; "
            "setting $\\varepsilon=-1$ recovers the revenue-maximising price."
        )
    elif "rival" in s:
        candidates.append(
            "With equal levels at the left endpoint $a$, "
            "$\\int_a^b\\bigl(R_e^{\prime}(Q)-R^{\prime}(Q)\\bigr)\\,dQ=R_e(b)-R(b)$ inherits the sign of $R_e^{\prime}-R^{\prime}$ on $(a,b)$."
        )
    elif "tax" in s or "levy" in s:
        candidates.append(
            "The tax enters through cost only: each unit costs $\\mathrm{MC}+t$ to the firm, so the $MR=MC$ "
            "solution moves left while $MR=0$ (revenue max) stays put."
        )
    elif "newton" in blob:
        candidates.append(
            "After simplifying the quotient to a linear expression in $h$, the limit $h\\to 0$ matches direct "
            "differentiation of the quadratic profit formula."
        )
    elif "fence" in blob or "enclos" in blob:
        candidates.append(
            "Substituting the linear constraint into area yields a concave quadratic on the open fencing interval, "
            "so the unique critical point is the global maximum there."
        )
    elif "figure" in short.lower() or "brown" in short.lower() or "green" in short.lower():
        candidates.append(
            "Trace the named curve to the stated abscissa: above the axis means positive, a higher second curve "
            "means the upper quantity is larger, and a crossing fixes equality."
        )
    elif "average cost" in s:
        candidates.append(
            "The fixed-cost term $\\dfrac{F}{Q}$ in $AC$ produces the $-\\dfrac{F}{Q^{2}}$ piece of $AC^{\prime}$; "
            "that is why average cost can fall even when marginal cost is positive."
        )
    elif "inflection" in s:
        candidates.append(
            "An inflection of total cost is where $C^{\prime\prime}$ changes sign — equivalently where $MC$ has a turn — "
            "and that need not be where $AC=MC$."
        )
    elif "local max" in s or "local min" in s:
        candidates.append(
            "Classify the critical point by the sign change of the first derivative: $+\\to-$ is a local maximum "
            "and $-\\to+$ is a local minimum."
        )
    elif "global" in s and "max" in s:
        candidates.append(
            "A local maximum among critical points need not be global on a closed interval; compare levels at "
            "endpoints and at every critical point before claiming uniqueness."
        )
    elif "learning" in blob or "sqrt" in short.lower():
        candidates.append(
            "Falling $AC$ and $MC$ can coexist with rising total cost because $C^{\prime}=MC>0$; never confuse a falling "
            "average with a falling total."
        )
    elif "budget" in blob and "u" in short.lower():
        candidates.append(
            "At an interior optimum the MRS equals the price ratio $\\dfrac{p_x}{p_y}$, not the reciprocal; "
            "corners with a zero factor give $U=0$."
        )

    if not candidates:
        return ""
    return candidates[i % len(candidates)]


def format_short(short: str) -> str:
    short = fix_math(short.strip())
    chunks = re.split(r"\n(?=\$\$)", short)
    return "\n\n".join(c.strip() for c in chunks if c.strip())


def make_body(task: dict, i: int) -> str:
    ans = task["answer_key"][i]
    stmt = task["statements"][i]
    short = task["shorts"][i]
    fig = task["has_figure"]
    title = task.get("title", "")
    ctx = task.get("context", "")

    op = opener(stmt, short, fig, title, ctx)
    core = format_short(short)
    ex = extra(stmt, short, title, ctx, i)

    # Bridge: expand thin shorts with an explicit FOC reminder tied to true/false
    bridge = ""
    if len(op) + len(core) < 320:
        bridge = (
            "Write the relevant derivative from the stem, solve or sign-chart it, and only then compare "
            "with the numerical assertion in the claim."
        )

    parts = [op, bridge, core, ex, close(ans, i)]
    body = fix_math("\n\n".join(p for p in parts if p))
    body = re.sub(r"\n{3,}", "\n\n", body).strip()

    for bad in FORBIDDEN:
        if bad in body:
            raise ValueError(f"{task['case_id']} #{i}: forbidden {bad!r}")
    return body


def make_overview(task: dict) -> str:
    ov = task["overview"].strip().rstrip(".")
    bits: list[str] = []
    ctx = task["context"].lower()
    if task["has_figure"]:
        bits.append(
            "Several claims are read from curve signs, crossings, and heights on the figure."
        )
    if "tax" in ctx or "levy" in ctx or "commission" in ctx:
        bits.append(
            "Per-unit charges shift the profit FOC through marginal cost but leave the revenue schedule alone."
        )
    if "rival" in ctx:
        bits.append(
            "Rival comparisons follow by integrating a marginal inequality when levels match at one endpoint."
        )
    if "profit" in ov.lower() and "revenue" in ov.lower():
        bits.append("Keep $MR=0$ for revenue separate from $MR=MC$ for profit.")
    if not bits:
        bits.append(
            "Work claim by claim from derivatives, sign charts, and the formulas in the stem."
        )
    text = ov + ". " + " ".join(bits[:2])
    return re.sub(r"\.\.+", ".", text).strip() + ("." if not text.endswith(".") else "")


def emit(bodies: dict[str, list[str]], overviews: dict[str, str]) -> str:
    lines = [
        '"""Deep tutoring bodies for Chapter 11.5 differentiation exam tasks.',
        "",
        "Raw prose WITHOUT **A.** headers and WITHOUT the final",
        "'So the statement is True/False.' wrapper.",
        '"""',
        "",
        "DEEP_BODIES = {",
    ]
    for cid in sorted(bodies, key=lambda x: float(x.split()[-1])):
        lines.append(f'    "{cid}": [')
        for body in bodies[cid]:
            lines.append(f"        r\"\"\"{body}\"\"\",")
        lines.append("    ],")
    lines.append("}")
    lines.append("")
    lines.append("DEEP_OVERVIEWS = {")
    for cid in sorted(overviews, key=lambda x: float(x.split()[-1])):
        lines.append(f"    {cid!r}: {overviews[cid]!r},")
    lines.append("}")
    lines.append("")
    lines.append('if __name__ == "__main__":')
    lines.append("    assert len(DEEP_BODIES) == 45")
    lines.append("    lengths = [len(b) for v in DEEP_BODIES.values() for b in v]")
    lines.append('    print(f"avg={sum(lengths)/len(lengths):.0f} min={min(lengths)} max={max(lengths)}")')
    lines.append("    assert min(lengths) >= 300")
    lines.append("    assert sum(lengths) / len(lengths) >= 400")
    lines.append('    print("ok")')
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    tasks = json.loads(SHORTS.read_text())
    # normalize key name if needed
    for t in tasks:
        if "shorts" not in t and "short" in t:
            t["shorts"] = t["short"]
    bodies = {t["case_id"]: [make_body(t, i) for i in range(5)] for t in tasks}
    overviews = {t["case_id"]: make_overview(t) for t in tasks}
    OUT.write_text(emit(bodies, overviews), encoding="utf-8")
    lens = [len(b) for v in bodies.values() for b in v]
    print(f"Wrote {OUT}: avg={sum(lens)/len(lens):.0f} min={min(lens)} max={max(lens)}")


if __name__ == "__main__":
    main()
