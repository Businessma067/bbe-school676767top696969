#!/usr/bin/env python3
"""
Rewrite binomial explanations in natural tutoring style.

- solution_overview: situation once per task
- each tactical_explanation: **A.** statement → True/False, then flowing prose
- no Step/Why/Conclusion headings
- for tails, expand every binomial term before adding
- derive the formula in words first, then plug numbers into KaTeX
"""
from __future__ import annotations

import json
import math
import re
from math import comb
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src" / "data" / "math-cases-ch13-binomial.json"
LETTERS = "ABCDEF"


def binom_pmf(n: int, p: float, k: int) -> float:
    return comb(n, k) * (p**k) * ((1 - p) ** (n - k))


def binom_sf_ge(n: int, p: float, k: int) -> float:
    return sum(binom_pmf(n, p, i) for i in range(k, n + 1))


def fmt(x: float, digits: int = 4) -> str:
    """Plain number for KaTeX interiors."""
    if x != x:
        return "\\mathrm{undefined}"
    if abs(x) == float("inf"):
        return "\\infty"
    if abs(x - round(x)) < 1e-12 and abs(x) < 1e12:
        return str(int(round(x)))
    ax = abs(x)
    if ax != 0 and ax < 1e-4:
        s = f"{x:.4e}"
        b, e = s.split("e")
        b = b.rstrip("0").rstrip(".")
        return f"{b} \\times 10^{{{int(e)}}}"
    s = f"{x:.{digits}f}".rstrip("0").rstrip(".")
    return s


def pct(x: float, digits: int = 2) -> str:
    return f"{fmt(100 * x, digits)}\\%"


def extract_two_person(ctx: str) -> dict | None:
    n = None
    for pat in [
        r"\b(\d+)\s*[- ]question",
        r"\b(\d+)\s*free throws",
        r"\b(\d+)\s*(?:items|calls|seeds|bags|arrows|customers|emails|days|units|samples|attacks|procedures|transactions|tickets|trials|scenarios|pastries|essays|lines|shots|throws|components)",
        r"out of\s+(\d+)",
        r"batches of\s+(\d+)",
        r"batch of\s+(\d+)",
        r"each (?:finish a batch of|make|answer|perform|complete|attempt|shoot)\s+(\d+)",
        r"(?:runs|reviews?|screens?|inspects?|across|score|produces|has)\s+(\d+)",
        r"of\s+(\d+)\s",
    ]:
        m = re.search(pat, ctx, re.I)
        if m:
            n = int(m.group(1))
            break
    ps = [float(x) for x in re.findall(r"p\s*=\s*(0?\.\d+)", ctx, flags=re.I)]
    if len(ps) < 2:
        ps2 = [float(x) for x in re.findall(r"probability(?:\s+of)?\s*(0?\.\d+)", ctx, flags=re.I)]
        if len(ps2) >= 2:
            ps = ps2
    if n is None or len(ps) < 2:
        return None
    k = None
    mk = re.search(r"at least\s+(\d+)", ctx, re.I)
    if mk:
        k = int(mk.group(1))
    return {"n": n, "pA": ps[0], "pB": ps[1], "k": k}


def extract_single(ctx: str) -> dict | None:
    ps = [float(x) for x in re.findall(r"(?:p|probability)\s*=\s*(0?\.\d+)", ctx, flags=re.I)]
    if not ps:
        ps = [float(x) for x in re.findall(r"with probability\s*(0?\.\d+)", ctx, flags=re.I)]
    n = None
    m = re.search(r"\b(\d{1,3}(?:,\d{3})+)\b", ctx)
    if m:
        n = int(m.group(1).replace(",", ""))
    if n is None:
        for cand in re.findall(r"\b(\d{2,5})\b", ctx):
            v = int(cand)
            if v >= 10:
                n = v
                break
    if n is None or not ps:
        return None
    return {"n": n, "p": ps[0]}


def clean_ctx(ctx: str) -> str:
    return re.sub(r"\s*Evaluate each statement\. Mark it TRUE or FALSE\.\s*$", "", ctx).strip()


def overview_text(ctx: str, params: dict | None) -> str:
    core = clean_ctx(ctx)
    if params and "pA" in params:
        bits = [
            core,
            "",
            f"We model each side as a binomial count with $n = {params['n']}$ independent trials: "
            f"side A has success probability $p_A = {fmt(params['pA'], 4)}$, "
            f"side B has $p_B = {fmt(params['pB'], 4)}$.",
        ]
        if params.get("k") is not None:
            bits.append(
                f"The scenario’s success cutoff is at least $k = {params['k']}$ successes out of $n = {params['n']}$."
            )
        return "\n\n".join(bits)
    if params and "p" in params:
        return (
            f"{core}\n\n"
            f"Let $X \\sim \\mathrm{{Bin}}(n,p)$ with $n = {params['n']}$ and $p = {fmt(params['p'], 6)}$."
        )
    return core


def header(letter: str, stmt: str, is_true: bool) -> str:
    verdict = "True" if is_true else "False"
    # Keep statement outside math; escape stray $ that aren't intentional (none expected in stmts)
    stmt_clean = stmt.replace("$", "")
    return f"**{letter}.** {stmt_clean} → {verdict}"


def expand_tail_terms(n: int, p: float, k: int, who: str) -> tuple[str, float]:
    """Return prose+math expanding every term of P(X>=k), and the total."""
    q = 1 - p
    parts = [f"{who} ($p = {fmt(p, 4)}$):", ""]
    vals = []
    for x in range(k, n + 1):
        v = binom_pmf(n, p, x)
        vals.append(v)
        parts.append(
            f"$$\\binom{{{n}}}{{{x}}}({fmt(p, 4)})^{{{x}}}({fmt(q, 4)})^{{{n - x}}} \\approx {fmt(v, 4)}$$"
        )
        parts.append("")
    total = sum(vals)
    add = " + ".join(fmt(v, 4) for v in vals)
    parts.append(
        f"Adding the mutually exclusive pieces:\n\n"
        f"$$P(X \\ge {k}) \\approx {add} = {fmt(total, 4)} \\approx {pct(total)}$$"
    )
    return "\n".join(parts).strip(), total


def classify(stmt: str) -> str:
    s = stmt.lower()
    if "equals the sum" in s or "sum, from" in s or "sum from" in s:
        return "sum"
    if "times as likely" in s or "as likely as" in s:
        return "ratio"
    if "standard deviation" in s:
        return "sd"
    if "variance" in s:
        return "variance"
    if "mean" in s or "expected" in s:
        return "mean"
    if any(
        w in s
        for w in (
            "perfect",
            "all ",
            "flawless",
            "in a row",
            "completely failing",
            "x = 0",
            "x=0",
        )
    ):
        return "perfect"
    return "generic"


def pick_side(stmt: str, params: dict) -> tuple[str, float]:
    """Return ('A' or 'B', p) for the person the statement focuses on."""
    s = stmt
    # Prefer explicit B markers when both appear; check B-focused claims first
    b_hit = re.search(
        r"\b(?:Player|Person|Agent|Staff|Inspector|Archer|Batch|Kit|Typist|Meteorologist|"
        r"Screener|Worker|Grader|Controller|Baker|Tester|Radiologist|Tech|Rep|Student|"
        r"Surgeon|Line|Team|Check|Factory|Restaurant|Seed Batch)\s*B\b|"
        r"\ball-star\b|\bveteran\b|\belite\b|\btrained\b|\bsenior\b|\bexperienced\b|"
        r"\bestablished\b|\bfresh\b|\bnewer\b",
        s,
        re.I,
    )
    a_hit = re.search(
        r"\b(?:Player|Person|Agent|Staff|Inspector|Archer|Batch|Kit|Typist|Meteorologist|"
        r"Screener|Worker|Grader|Controller|Baker|Tester|Radiologist|Tech|Rep|Student|"
        r"Surgeon|Line|Team|Check|Factory|Restaurant|Seed Batch)\s*A\b|"
        r"\brookie\b|\btrainee\b|\bnewly\b|\buntrained\b|\bbeginner\b|\bold stock\b|\bolder\b",
        s,
        re.I,
    )
    if b_hit and not re.search(r"as likely as.*\bA\b|\bA\b.*as likely", s, re.I):
        # "B is more than … as likely as A" still focuses on comparing both; for perfect claims B-only
        if "as likely" in s.lower():
            return "B", params["pB"]
        return "B", params["pB"]
    if a_hit and "as likely" not in s.lower():
        return "A", params["pA"]
    if "less than" in s.lower() and a_hit:
        return "A", params["pA"]
    if b_hit:
        return "B", params["pB"]
    if a_hit:
        return "A", params["pA"]
    # default
    return ("A", params["pA"]) if "less than" in s.lower() else ("B", params["pB"])


def expl_sum(letter, stmt, is_true, params, _old):
    lines = [header(letter, stmt, is_true), ""]
    m = re.search(
        r"from\s*x\s*=\s*(\d+)\s*to\s*(\d+).*?n\s*=\s*(\d+)\s*and\s*p\s*=\s*(0?\.\d+)",
        stmt,
        re.I | re.S,
    )
    if m:
        lo, hi, n, p = int(m.group(1)), int(m.group(2)), int(m.group(3)), float(m.group(4))
    elif params and params.get("k") is not None:
        lo, n = params["k"], params["n"]
        hi = n
        # pick p from statement if present
        pm = re.search(r"p\s*=\s*(0?\.\d+)", stmt, re.I)
        p = float(pm.group(1)) if pm else params["pA"]
    else:
        return expl_generic(letter, stmt, is_true, params, _old)

    lines.append(
        f'“At least {lo} out of {n}” is not a single outcome — it covers the distinct counts '
        f"$X = {lo}, {lo + 1}, \\ldots, {hi}$. Those counts cannot happen at the same time, so by the "
        f"addition rule for mutually exclusive events we add their individual binomial probabilities:"
    )
    lines.append("")
    xs = ", ".join(str(x) for x in range(lo, min(lo + 3, hi + 1)))
    more = f", …, {hi}" if hi > lo + 2 else (f", {hi}" if hi > lo else "")
    lines.append(
        f"$$P(X \\ge {lo}) = P(X={lo}) + P(X={lo + 1 if lo < hi else lo})"
        + (f" + \\cdots + P(X={hi})" if hi > lo + 1 else "")
        + f" = \\sum_{{x={lo}}}^{{{hi}}} \\binom{{{n}}}{{x}} p^{{x}} (1-p)^{{{n}-x}}$$"
    )
    lines.append("")
    lines.append(
        f"A single term such as $P(X = {lo})$ would only capture “exactly {lo}” and would undercount "
        f"the true chance of clearing the cutoff. The statement writes this sum with $n = {n}$ and "
        f"$p = {fmt(p, 4)}$, running from $x = {lo}$ to $x = {hi}$ — which "
        f"{'matches' if is_true else 'does not match'} the English claim, so the statement is "
        f"{'True' if is_true else 'False'}."
    )
    return "\n\n".join(lines)


def expl_perfect(letter, stmt, is_true, params, _old):
    lines = [header(letter, stmt, is_true), ""]
    if not params or "pA" not in params and "p" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)

    if "pA" in params:
        side, p = pick_side(stmt, params)
        n = params["n"]
        who = f"side {side}"
    else:
        n, p = params["n"], params["p"]
        who = "this distribution"

    zero = bool(re.search(r"x\s*=\s*0|completely failing|no success|none of|failing to detect any", stmt, re.I))
    if zero:
        q = 1 - p
        lines.append(
            "Getting zero successes means every trial fails. With independent trials that probability is "
            "the failure probability multiplied across all $n$ trials:"
        )
        lines.append("")
        lines.append(f"$$P(X = 0) = (1-p)^{{n}}$$")
        lines.append("")
        val = q**n
        lines.append(f"For {who}, $p = {fmt(p, 4)}$, so $1-p = {fmt(q, 4)}$ and $n = {n}$:")
        lines.append("")
        lines.append(f"$$P(X = 0) = ({fmt(q, 4)})^{{{n}}} \\approx {fmt(val, 6)} \\approx {pct(val, 6)}$$")
    else:
        lines.append(
            "A perfect run means every one of the $n$ trials succeeds. Independence lets us multiply "
            "the success probability across all trials, which is the binomial PMF at $k = n$:"
        )
        lines.append("")
        lines.append(f"$$P(X = n) = p^{{n}}$$")
        lines.append("")
        val = p**n
        lines.append(f"For {who}, $p = {fmt(p, 4)}$ and $n = {n}$:")
        lines.append("")
        lines.append(f"$$P(X = {n}) = ({fmt(p, 4)})^{{{n}}} \\approx {fmt(val, 6)} \\approx {pct(val)}$$")

    thr_m = re.search(
        r"(?:less than|greater than|more than|below|above|under|over)\s+(?:a\s+)?([\d.]+)\s*%",
        stmt,
        re.I,
    )
    if thr_m:
        thr = float(thr_m.group(1))
        val_pct = 100 * (q**n if zero else p**n)
        direction = "below" if val_pct < thr else "above"
        lines.append("")
        lines.append(
            f"The claim compares this with ${fmt(thr, 4)}\\%$. We got about ${fmt(val_pct, 4)}\\%$, "
            f"which is {direction} the cutoff, so the statement is {'True' if is_true else 'False'}."
        )
    else:
        lines.append("")
        lines.append(
            f"Comparing this value with the claim shows the statement is {'True' if is_true else 'False'}."
        )
    return "\n\n".join(lines)


def expl_ratio(letter, stmt, is_true, params, old):
    lines = [header(letter, stmt, is_true), ""]
    if not params or "pA" not in params or params.get("k") is None:
        return expl_generic(letter, stmt, is_true, params, old)

    n, pA, pB, k = params["n"], params["pA"], params["pB"], params["k"]
    a_over_b = bool(
        re.search(r"\bA\b.*(?:more than|at least).*as likely as.*\bB\b", stmt, re.I)
    )

    lines.append(
        f"Clearing the cutoff means at least {k} successes out of {n}. That event is the union of the "
        f"mutually exclusive outcomes $X = {k}, {k + 1}, \\ldots, {n}$, so we add the individual "
        f"binomial probabilities:"
    )
    lines.append("")
    lines.append(
        f"$$P(X \\ge {k}) = \\sum_{{x={k}}}^{{{n}}} \\binom{{{n}}}{{x}} p^{{x}} (1-p)^{{{n}-x}}$$"
    )
    lines.append("")
    lines.append(
        f"A single term $P(X = {k})$ would only count “exactly {k}” and would miss the higher counts, "
        f"so it understates the chance of meeting the cutoff. We need the full upper tail for each side, "
        f"then the ratio of those two probabilities — not the ratio of the two $p$ values."
    )
    lines.append("")

    block_a, tot_a = expand_tail_terms(n, pA, k, "Side A")
    block_b, tot_b = expand_tail_terms(n, pB, k, "Side B")
    lines.append(block_a)
    lines.append("")
    lines.append(block_b)
    lines.append("")

    if a_over_b:
        ratio = tot_a / tot_b if tot_b > 0 else float("inf")
        lines.append("The ratio in the claim’s order (A relative to B):")
        lines.append("")
        lines.append(
            f"$$\\frac{{P_A(X \\ge {k})}}{{P_B(X \\ge {k})}} "
            f"\\approx \\frac{{{pct(tot_a)}}}{{{pct(tot_b)}}} \\approx {fmt(ratio, 2)}$$"
        )
    else:
        ratio = tot_b / tot_a if tot_a > 0 else float("inf")
        lines.append("The ratio in the claim’s order (B relative to A):")
        lines.append("")
        lines.append(
            f"$$\\frac{{P_B(X \\ge {k})}}{{P_A(X \\ge {k})}} "
            f"\\approx \\frac{{{pct(tot_b)}}}{{{pct(tot_a)}}} \\approx {fmt(ratio, 2)}$$"
        )

    thr_m = re.search(r"(?:more than|at least)\s+([\d,]+)\s+times", stmt, re.I)
    if thr_m:
        thr = float(thr_m.group(1).replace(",", ""))
        lines.append("")
        lines.append(
            f"Since ${fmt(ratio, 2)}{' > ' if ratio > thr else ' \\le '}{fmt(thr, 2)}$, "
            f"the statement is {'True' if is_true else 'False'}."
        )
    else:
        lines.append("")
        lines.append(f"Matching this ratio to the claim, the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def expl_variance(letter, stmt, is_true, params, _old):
    lines = [header(letter, stmt, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    n, pA, pB = params["n"], params["pA"], params["pB"]
    lines.append(
        "For a binomial count $X \\sim \\mathrm{Bin}(n,p)$, write $X$ as the sum of $n$ independent "
        "Bernoulli($p$) indicators. Each indicator has variance $p(1-p)$, and variances of independent "
        "summands add, so"
    )
    lines.append("")
    lines.append("$$\\mathrm{Var}(X) = np(1-p)$$")
    lines.append("")
    lines.append(
        "This is largest when $p$ is closest to $1/2$, not when $p$ itself is largest."
    )
    lines.append("")
    vA, vB = n * pA * (1 - pA), n * pB * (1 - pB)
    lines.append(f"Side A with $p_A = {fmt(pA, 4)}$:")
    lines.append("")
    lines.append(
        f"$$\\mathrm{{Var}}(A) = {n} \\cdot {fmt(pA, 4)} \\cdot {fmt(1 - pA, 4)} = {fmt(vA, 4)}$$"
    )
    lines.append("")
    lines.append(f"Side B with $p_B = {fmt(pB, 4)}$:")
    lines.append("")
    lines.append(
        f"$$\\mathrm{{Var}}(B) = {n} \\cdot {fmt(pB, 4)} \\cdot {fmt(1 - pB, 4)} = {fmt(vB, 4)}$$"
    )
    lines.append("")
    if "times" in stmt.lower() or "triple" in stmt.lower() or "double" in stmt.lower():
        ratio = vA / vB if vB else float("inf")
        lines.append(f"The variance ratio is")
        lines.append("")
        lines.append(
            f"$$\\frac{{\\mathrm{{Var}}(A)}}{{\\mathrm{{Var}}(B)}} "
            f"= \\frac{{{fmt(vA, 4)}}}{{{fmt(vB, 4)}}} \\approx {fmt(ratio, 2)}$$"
        )
        lines.append("")
        lines.append(
            f"Comparing that with the claim, the statement is {'True' if is_true else 'False'}."
        )
    else:
        lines.append(
            f"So $\\mathrm{{Var}}(A) = {fmt(vA, 4)}$ and $\\mathrm{{Var}}(B) = {fmt(vB, 4)}$. "
            f"The claim’s comparison is {'correct' if is_true else 'incorrect'}, "
            f"so the statement is {'True' if is_true else 'False'}."
        )
    return "\n\n".join(lines)


def expl_sd(letter, stmt, is_true, params, _old):
    lines = [header(letter, stmt, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    n, pA, pB = params["n"], params["pA"], params["pB"]
    lines.append(
        "The standard deviation is the positive square root of the variance. For $X \\sim \\mathrm{Bin}(n,p)$,"
    )
    lines.append("")
    lines.append("$$\\mathrm{SD}(X) = \\sqrt{np(1-p)}$$")
    lines.append("")
    vA, vB = n * pA * (1 - pA), n * pB * (1 - pB)
    sA, sB = math.sqrt(vA), math.sqrt(vB)
    lines.append(f"Side A ($p_A = {fmt(pA, 4)}$):")
    lines.append("")
    lines.append(
        f"$$\\mathrm{{Var}}(A) = {fmt(vA, 4)}, \\qquad "
        f"\\mathrm{{SD}}(A) = \\sqrt{{{fmt(vA, 4)}}} \\approx {fmt(sA, 3)}$$"
    )
    lines.append("")
    lines.append(f"Side B ($p_B = {fmt(pB, 4)}$):")
    lines.append("")
    lines.append(
        f"$$\\mathrm{{Var}}(B) = {fmt(vB, 4)}, \\qquad "
        f"\\mathrm{{SD}}(B) = \\sqrt{{{fmt(vB, 4)}}} \\approx {fmt(sB, 3)}$$"
    )
    lines.append("")
    if "times" in stmt.lower() or "double" in stmt.lower() or "triple" in stmt.lower() or "more than" in stmt.lower():
        ratio = sA / sB if sB else float("inf")
        lines.append(
            f"$$\\frac{{\\mathrm{{SD}}(A)}}{{\\mathrm{{SD}}(B)}} "
            f"\\approx \\frac{{{fmt(sA, 3)}}}{{{fmt(sB, 3)}}} \\approx {fmt(ratio, 3)}$$"
        )
        lines.append("")
        lines.append(f"Against the claim, the statement is {'True' if is_true else 'False'}.")
    else:
        lines.append(
            f"Comparing ${fmt(sA, 3)}$ with ${fmt(sB, 3)}$, the statement is {'True' if is_true else 'False'}."
        )
    return "\n\n".join(lines)


def expl_mean(letter, stmt, is_true, params, _old):
    lines = [header(letter, stmt, is_true), ""]
    if params and "pA" in params:
        n, pA, pB = params["n"], params["pA"], params["pB"]
        lines.append(
            "The mean of a binomial count is the number of trials times the success probability, "
            "because $X$ is the sum of $n$ Bernoulli($p$) indicators each with mean $p$:"
        )
        lines.append("")
        lines.append("$$E[X] = np$$")
        lines.append("")
        mA, mB = n * pA, n * pB
        lines.append(f"$$E[A] = {n} \\cdot {fmt(pA, 4)} = {fmt(mA, 4)}$$")
        lines.append("")
        lines.append(f"$$E[B] = {n} \\cdot {fmt(pB, 4)} = {fmt(mB, 4)}$$")
        lines.append("")
        if "%" in stmt or "percent" in stmt.lower():
            inc = 100 * (mB / mA - 1) if mA else float("inf")
            lines.append(
                f"The percent increase of B over A is "
                f"$100\\big(E[B]/E[A] - 1\\big) = 100\\big({fmt(mB / mA, 4)} - 1\\big) "
                f"\\approx {fmt(inc, 2)}\\%$."
            )
        elif "double" in stmt.lower():
            lines.append(f"The ratio $E[B]/E[A] = {fmt(mB / mA, 4)}$ (double would be $2$).")
        elif "exactly" in stmt.lower() or "more than" in stmt.lower() or "at least" in stmt.lower() or "exceeds" in stmt.lower():
            lines.append(
                f"The difference $E[B] - E[A] = {fmt(mB - mA, 4)}$, "
                f"and equivalently $n(p_B - p_A) = {n}\\cdot({fmt(pB, 4)} - {fmt(pA, 4)}) = {fmt(n * (pB - pA), 4)}$."
            )
        lines.append("")
        lines.append(f"Matching these figures to the claim, the statement is {'True' if is_true else 'False'}.")
        return "\n\n".join(lines)
    if params and "p" in params:
        n, p = params["n"], params["p"]
        lines.append("For $X \\sim \\mathrm{Bin}(n,p)$, the mean is $E[X] = np$.")
        lines.append("")
        lines.append(f"$$E[X] = {n} \\cdot {fmt(p, 6)} = {fmt(n * p, 4)}$$")
        lines.append("")
        lines.append(f"Compared with the claim, the statement is {'True' if is_true else 'False'}.")
        return "\n\n".join(lines)
    return expl_generic(letter, stmt, is_true, params, _old)


def strip_old(text: str) -> str:
    t = re.sub(r'^\d+\.\s*"(True|False)"\s*', "", text.strip(), flags=re.I)
    t = re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", t, flags=re.I)
    # drop structured headings from prior generator
    t = re.sub(
        r"^(Situation|Formula to use|Formula / rule to use|Why|Step-by-step calculation|What the statement claims|Conclusion|Tip):\s*",
        "",
        t,
        flags=re.I | re.M,
    )
    t = re.sub(r"^Step \d+:\s*", "", t, flags=re.M)
    return t.strip()


def expl_generic(letter, stmt, is_true, params, old):
    """Natural wrap using PDF numerical content when structure is nonstandard."""
    lines = [header(letter, stmt, is_true), ""]
    body = strip_old(old)
    # Keep first substantial paragraph of prior explanation as the numerical core
    para = re.split(r"\n\n+", body)[0].strip()
    # Remove leftover labels
    para = re.sub(r"\s+", " ", para)

    low = (stmt + " " + para).lower()
    if "poisson" in low:
        lines.append(
            "When $n$ is large and $p$ is small with $\\lambda = np$ moderate, the binomial probabilities "
            "are close to a Poisson($\\lambda$) law. That is a different validity story from the normal "
            "approximation (which wants both $np$ and $n(1-p)$ at least about 5)."
        )
        lines.append("")
        lines.append("$$P(X = k) \\approx e^{-\\lambda}\\frac{\\lambda^{k}}{k!}, \\qquad \\lambda = np$$")
        lines.append("")
    elif "normal" in low and "approxim" in low:
        lines.append(
            "For large $n$ with both $np$ and $n(1-p)$ at least about 5, a binomial count is approximately normal "
            "with the same mean and variance. Discrete-to-continuous comparisons usually need a continuity correction."
        )
        lines.append("")
        lines.append("$$X \\approx \\mathcal{N}\\big(np,\\, np(1-p)\\big)$$")
        lines.append("")
    elif "mode" in low:
        lines.append(
            "The mode is the integer $k$ that maximizes $P(X = k)$. For $\\mathrm{Bin}(n,p)$ it is "
            "$\\lfloor (n+1)p \\rfloor$ (or two adjacent integers when $(n+1)p$ is an integer)."
        )
        lines.append("")
    elif re.search(r"p\(x\s*=\s*0\)|x\s*=\s*0", low):
        lines.append("Zero successes means every trial fails, so $P(X = 0) = (1-p)^{n}$.")
        lines.append("")

    lines.append(para)
    lines.append("")
    lines.append(f"Putting that against the claim, the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def build_one(i, stmt, is_true, params, old):
    letter = LETTERS[i]
    kind = classify(stmt)
    if kind == "sum":
        return expl_sum(letter, stmt, is_true, params, old)
    if kind == "perfect":
        return expl_perfect(letter, stmt, is_true, params, old)
    if kind == "ratio":
        return expl_ratio(letter, stmt, is_true, params, old)
    if kind == "variance":
        return expl_variance(letter, stmt, is_true, params, old)
    if kind == "sd":
        return expl_sd(letter, stmt, is_true, params, old)
    if kind == "mean":
        return expl_mean(letter, stmt, is_true, params, old)
    return expl_generic(letter, stmt, is_true, params, old)


def main() -> None:
    data = json.loads(PATH.read_text())
    for task in data["tasks"]:
        ctx = task["context"]
        params = extract_two_person(ctx) or extract_single(ctx)
        task["solution_overview"] = overview_text(ctx, params)
        task["tactical_explanations"] = [
            build_one(i, stmt, bool(is_true), params, old)
            for i, (stmt, is_true, old) in enumerate(
                zip(task["statements"], task["answer_key"], task["tactical_explanations"])
            )
        ]
    data["explanation_style"] = (
        "Natural tutoring: shared solution_overview once; each claim as "
        '**A.** statement → True/False with derived formulas and term-by-term sums.'
    )
    def tidy(s: str) -> str:
        return re.sub(r"\n{3,}", "\n\n", s).strip()

    for task in data["tasks"]:
        task["solution_overview"] = tidy(task["solution_overview"])
        task["tactical_explanations"] = [tidy(e) for e in task["tactical_explanations"]]

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    # preview restaurant Q8 (sort_order 8)
    t = next(x for x in data["tasks"] if x["sort_order"] == 8)
    print("=== OVERVIEW ===")
    print(t["solution_overview"])
    print("\n=== C (ratio) ===")
    print(t["tactical_explanations"][2])
    print("\n=== A (perfect) ===")
    print(t["tactical_explanations"][0][:700])


if __name__ == "__main__":
    main()
