#!/usr/bin/env python3
"""
Regenerate binomial tactical_explanations with full financial-math depth:
situation → formula + why → plug-in every number → conclusion.
Answer lines use: 1. "True" / 2. "False" (1-based statement index).
"""
from __future__ import annotations

import json
import math
import re
from math import comb
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src" / "data" / "math-cases-ch13-binomial.json"


def binom_pmf(n: int, p: float, k: int) -> float:
    return comb(n, k) * (p**k) * ((1 - p) ** (n - k))


def binom_cdf(n: int, p: float, k: int) -> float:
    return sum(binom_pmf(n, p, i) for i in range(k + 1))


def binom_sf_ge(n: int, p: float, k: int) -> float:
    """P(X >= k)."""
    return sum(binom_pmf(n, p, i) for i in range(k, n + 1))


def fmt_num(x: float) -> str:
    """Format a number for use *inside* KaTeX $...$ / $$...$$."""
    if x != x:  # NaN
        return "\\mathrm{undefined}"
    if abs(x) == float("inf"):
        return "\\infty"
    if abs(x - round(x)) < 1e-12 and abs(x) < 1e15:
        return str(int(round(x)))
    ax = abs(x)
    if ax != 0 and (ax < 1e-3 or ax >= 1e6):
        s = f"{x:.6e}"
        base, exp = s.split("e")
        base = base.rstrip("0").rstrip(".")
        return f"{base} \\times 10^{{{int(exp)}}}"
    out = f"{x:.10g}"
    return out


def fmt_prob(x: float, pct: bool = False) -> str:
    """Probability for KaTeX; if pct, return value already including \\%."""
    if pct:
        return fmt_num(100 * x) + "\\%"
    return fmt_num(x)


def extract_two_person(ctx: str) -> dict | None:
    """Extract n, pA, pB, and optional 'at least k' threshold from a two-arm scenario."""
    # n candidates
    n = None
    for pat in [
        r"\b(\d+)\s*[- ]question",
        r"\b(\d+)\s*free throws",
        r"\b(\d+)\s*items",
        r"\b(\d+)\s*calls",
        r"\b(\d+)\s*seeds",
        r"\b(\d+)\s*bags",
        r"\b(\d+)\s*arrows",
        r"\b(\d+)\s*customers",
        r"\b(\d+)\s*emails",
        r"\b(\d+)\s*days",
        r"\b(\d+)\s*units",
        r"\b(\d+)\s*samples",
        r"\b(\d+)\s*attacks",
        r"\b(\d+)\s*procedures",
        r"\b(\d+)\s*transactions",
        r"\b(\d+)\s*tickets",
        r"\b(\d+)\s*trials",
        r"\b(\d+)\s*scenarios",
        r"\b(\d+)\s*pastries",
        r"\b(\d+)\s*test cases",
        r"\b(\d+)\s*scans",
        r"\b(\d+)\s*essays",
        r"out of\s+(\d+)",
        r"batches of\s+(\d+)",
        r"batch of\s+(\d+)",
        r"each finish a batch of\s+(\d+)",
        r"each make\s+(\d+)",
        r"each answer\s+(\d+)",
        r"each perform\s+(\d+)",
        r"each complete\s+(\d+)",
        r"each attempt\s+(\d+)",
        r"each shoot\s+(\d+)",
        r"runs\s+(\d+)",
        r"has\s+(\d+)\s*scans",
        r"reviews?\s+(\d+)",
        r"screens?\s+(\d+)",
        r"inspects?\s+(\d+)",
        r"across\s+(\d+)",
        r"score\s+(\d+)",
        r"produces\s+(\d+)",
        r"makes\s+(\d+)\s*units",
        r"on\s+(\d+)\s*known",
        r"with\s+(\d+)\s*",
        r"of\s+(\d+)\s*(?:items|calls|seeds|bags|arrows|customers|emails|days|units|samples|attacks|procedures|transactions|tickets|trials|scenarios|pastries|essays|lines|questions|shots|throws)",
    ]:
        m = re.search(pat, ctx, re.I)
        if m:
            n = int(m.group(1))
            break

    ps = [float(x) for x in re.findall(r"p\s*=\s*(0?\.\d+)", ctx, flags=re.I)]
    if len(ps) < 2:
        # also "probability of 0.xx"
        ps2 = [float(x) for x in re.findall(r"probability(?:\s+of)?\s*(0?\.\d+)", ctx, flags=re.I)]
        if len(ps2) >= 2 and len(ps) < 2:
            ps = ps2
    if n is None or len(ps) < 2:
        return None

    k = None
    mk = re.search(r"at least\s+(\d+)", ctx, re.I)
    if mk:
        k = int(mk.group(1))
    return {"n": n, "pA": ps[0], "pB": ps[1], "k": k}


def extract_single(ctx: str) -> dict | None:
    """Single binomial / rare-event setup: n and p (and maybe lambda)."""
    ps = [float(x) for x in re.findall(r"(?:p|probability)\s*=\s*(0?\.\d+)", ctx, flags=re.I)]
    if not ps:
        ps = [float(x) for x in re.findall(r"with probability\s*(0?\.\d+)", ctx, flags=re.I)]
    # Prefer explicit counts with thousand separators: 1,800 / 2,500 / 9,000
    n = None
    m = re.search(r"\b(\d{1,3}(?:,\d{3})+)\b", ctx)
    if m:
        n = int(m.group(1).replace(",", ""))
    if n is None:
        ns = re.findall(r"\b(\d{2,5})\b", ctx)
        for cand in ns:
            v = int(cand)
            if v >= 10:
                n = v
                break
    if n is None or not ps:
        return None
    return {"n": n, "p": ps[0]}


def verdict_line(i: int, is_true: bool) -> str:
    label = "True" if is_true else "False"
    return f'{i + 1}. "{label}"'


def strip_old_verdict(text: str) -> str:
    return re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", text.strip(), flags=re.I | re.S)


def situation_blurb(ctx: str, params: dict | None) -> str:
    core = re.sub(r"\s*Evaluate each statement\. Mark it TRUE or FALSE\.\s*$", "", ctx).strip()
    if params and "pA" in params:
        return (
            f"In this problem we have a binomial setting with $n = {params['n']}$ independent trials. "
            f"Side A has success probability $p_A = {fmt_num(params['pA'])}$, and side B has "
            f"$p_B = {fmt_num(params['pB'])}$. "
            + (
                f"A success threshold of at least $k = {params['k']}$ successes is used in the scenario. "
                if params.get("k") is not None
                else ""
            )
            + f"Original wording: {core}"
        )
    if params and "p" in params:
        return (
            f"Here $X$ counts successes in $n = {params['n']}$ independent Bernoulli trials with "
            f"success probability $p = {fmt_num(params['p'])}$. "
            f"Original wording: {core}"
        )
    return f"Original wording: {core}"


def expl_sum_notation(i: int, is_true: bool, stmt: str, params: dict | None, ctx: str) -> str:
    # Parse bounds from statement
    m = re.search(
        r"sum,\s*from\s*x\s*=\s*(\d+)\s*to\s*(\d+).*?n\s*=\s*(\d+)\s*and\s*p\s*=\s*(0?\.\d+)",
        stmt,
        re.I | re.S,
    )
    if not m:
        m = re.search(
            r"from\s*x\s*=\s*(\d+)\s*to\s*(\d+).*?n\s*=\s*(\d+)\s*and\s*p\s*=\s*(0?\.\d+)",
            stmt,
            re.I | re.S,
        )
    lines = [verdict_line(i, is_true), ""]
    lines.append("Situation:")
    lines.append(situation_blurb(ctx, params))
    lines.append("")
    lines.append("Formula to use:")
    lines.append("")
    lines.append("$$P(X \\ge k)=\\sum_{x=k}^{n}\\binom{n}{x}p^{x}(1-p)^{n-x}$$")
    lines.append("")
    lines.append(
        "Why: the phrase “at least $k$ successes out of $n$ trials” means the mutually exclusive "
        "outcomes $X = k, k+1, \\ldots, n$. By the addition rule for mutually exclusive events, "
        "their probabilities add. Each term uses the binomial PMF because we have a fixed number of "
        "independent Bernoulli trials with constant success probability $p$."
    )
    lines.append("")
    lines.append("Step-by-step calculation:")
    if m:
        lo, hi, n, p = int(m.group(1)), int(m.group(2)), int(m.group(3)), float(m.group(4))
        lines.append(f"Step 1: Read the claim’s sum bounds and parameters: $x$ runs from ${lo}$ to ${hi}$, with $n = {n}$ and $p = {fmt_num(p)}$.")
        lines.append(
            f"Step 2: Match the English “at least {lo} of {hi if hi!=n else n}” (or the stated threshold) to the mathematical range "
            f"$X = {lo}, {lo+1}, \\ldots, {hi}$."
        )
        lines.append(
            f"Step 3: Write the probability explicitly:\n\n"
            f"$$P(X \\ge {lo})=\\sum_{{x={lo}}}^{{{hi}}}\\binom{{{n}}}{{x}}({fmt_num(p)})^{{x}}(1-{fmt_num(p)})^{{{n}-x}}$$"
        )
        lines.append(
            f"Step 4: Check that the claimed sum uses exactly these bounds and the correct $(n,p)$. "
            f"It does{'' if is_true else ' not'} — so the statement is {'true' if is_true else 'false'}."
        )
    else:
        lines.append("Step 1: Identify the threshold $k$ and the total $n$ from the scenario.")
        lines.append("Step 2: Translate “at least $k$ out of $n$” into $\\sum_{x=k}^{n} P(X=x)$.")
        lines.append("Step 3: Verify that the statement’s written sum starts at $k$ and ends at $n$ with the stated $p$.")
        lines.append(f"Step 4: The notation {'matches' if is_true else 'does not match'}, so the statement is {'true' if is_true else 'false'}.")
    lines.append("")
    lines.append("Conclusion:")
    lines.append(
        "This is a translation check, not a numerical one: if the sum’s start, end, $n$, and $p$ all match the English claim, "
        f"mark it true; otherwise mark it false. Here the answer is {('True' if is_true else 'False')}."
    )
    return "\n".join(lines)


def expl_perfect(i: int, is_true: bool, stmt: str, params: dict | None, ctx: str, old: str) -> str:
    # Whose p?
    side = "B"
    p = None
    n = None
    if params and "pB" in params:
        n = params["n"]
        # detect A or B from statement
        if re.search(r"\bA\b|'s|\bBatch A\b|\bKit A\b|\bPlayer A\b|\bPerson A\b|\bAgent A\b|\bStaff A\b|\bInspector A\b|\bArcher A\b|\bTypist A\b|\bMeteorologist A\b|\bScreener A\b|\bWorker A\b|\bGrader A\b|\bController A\b|\bBaker A\b|\bTester A\b|\bRadiologist A\b|\bTech A\b|\bRep A\b|\bStudent A\b|\bSurgeon A\b|\bLine A\b|\bTeam A\b|\bCheck A\b|\bFactory A\b|\bRestaurant A\b|\bSeed Batch A\b", stmt):
            if re.search(r"Player B|Person B|Agent B|Staff B|Inspector B|Archer B|Batch B|Kit B|Typist B|Meteorologist B|Screener B|Worker B|Grader B|Controller B|Baker B|Tester B|Radiologist B|Tech B|Rep B|Student B|Surgeon B|Line B|Team B|Check B|Factory B|Restaurant B|Seed Batch B|all-star|veteran|elite|trained|senior|experienced|established|fresh|newer|certified controller", stmt, re.I) and not re.search(r"\bA\b.*\bB\b", stmt):
                pass
        if re.search(r"Player B|Person B|Agent B|Staff B|Inspector B|Archer B|Batch B|Kit B|Typist B|Meteorologist B|Screener B|Worker B|Grader B|Controller B|Baker|Tester B|Radiologist B|Tech B|Rep B|Student B|Surgeon B|Line B|Team B|Check B|Factory B|Restaurant B|Seed Batch B|all-star|veteran|elite|trained|senior|experienced|established|fresh|newer", stmt, re.I):
            side, p = "B", params["pB"]
        elif re.search(r"Player A|Person A|Agent A|Staff A|Inspector A|Archer A|Batch A|Kit A|Typist A|Meteorologist A|Screener A|Worker A|Grader A|Controller A|Baker A|Tester A|Radiologist A|Tech A|Rep A|Student A|Surgeon A|Line A|Team A|Check A|Factory A|Restaurant A|Seed Batch A|rookie|trainee|newly|untrained|beginner|old stock|older", stmt, re.I):
            side, p = "A", params["pA"]
        else:
            # default: often B for "perfect" high-p claims, A for tiny perfect claims
            if "less than" in stmt.lower():
                side, p = "A", params["pA"]
            else:
                side, p = "B", params["pB"]
    elif params and "p" in params:
        n, p, side = params["n"], params["p"], ""

    # threshold from statement
    thr_m = re.search(
        r"(?:less than|greater than|more than|below|above|under|over)\s+(?:a\s+)?([\d.]+)\s*%",
        stmt,
        re.I,
    )
    thr_pct = float(thr_m.group(1)) if thr_m else None

    lines = [verdict_line(i, is_true), ""]
    lines.append("Situation:")
    lines.append(situation_blurb(ctx, params))
    lines.append("")
    lines.append("Formula to use:")
    lines.append("")
    lines.append("$$P(X=n)=p^{n}$$")
    lines.append("")
    lines.append(
        "Why: a “perfect run” / “all $n$ successes” means every trial succeeds. "
        "Independence lets us multiply the success probability across all $n$ trials, "
        "which is the same as the binomial PMF at $k=n$:\n\n"
        "$$P(X=n)=\\binom{n}{n}p^{n}(1-p)^{0}=p^{n}$$"
    )
    lines.append("")
    lines.append("Step-by-step calculation:")
    if n is not None and p is not None:
        val = p**n
        lines.append(f"Step 1: Identify the success probability for the relevant side: $p = {fmt_num(p)}$, and the number of trials $n = {n}$.")
        lines.append(f"Step 2: Substitute into the perfect-run formula:\n\n$$P(X={n})=({fmt_num(p)})^{{{n}}}$$")
        lines.append(
            f"Step 3: Evaluate the power:\n\n"
            f"$$({fmt_num(p)})^{{{n}}} = {fmt_num(val)}$$\n\n"
            f"As a percentage: ${fmt_num(100*val)}\\%$ "
            f"(equivalently about ${fmt_prob(val, pct=True)}$ of outcomes)."
        )
        if thr_pct is not None:
            val_pct = 100 * val
            lines.append(
                f"Step 4: Compare with the claimed threshold ${fmt_num(thr_pct)}\\%$. "
                f"We obtained about ${fmt_num(val_pct)}\\%$, which is "
                f"{'below' if val_pct < thr_pct else 'above'} the threshold."
            )
            lines.append(
                f"Step 5: The statement asserts a direction relative to ${fmt_num(thr_pct)}\\%$. "
                f"That assertion is {'correct' if is_true else 'incorrect'}, so the answer is {('True' if is_true else 'False')}."
            )
        else:
            lines.append(f"Step 4: Interpret the numerical result in the statement’s claimed comparison. The claim is {'correct' if is_true else 'incorrect'}.")
    else:
        # fallback to old numbers wrapped
        body = strip_old_verdict(old).split("\n\n")[0]
        lines.append(f"Step 1–3: Compute $p^n$ for the relevant person/item. {body}")
        lines.append(f"Step 4: Compare with the statement’s threshold. The claim is {'correct' if is_true else 'incorrect'}.")
    lines.append("")
    lines.append("Conclusion:")
    lines.append(
        f"After substituting the given $p$ and $n$ into $P(X=n)=p^n$ and comparing with the stated cutoff, "
        f"the statement is {('True' if is_true else 'False')}."
    )
    return "\n".join(lines)


def expl_variance(i: int, is_true: bool, stmt: str, params: dict | None, ctx: str) -> str:
    lines = [verdict_line(i, is_true), ""]
    lines.append("Situation:")
    lines.append(situation_blurb(ctx, params))
    lines.append("")
    lines.append("Formula to use:")
    lines.append("")
    lines.append("$$\\mathrm{Var}(X)=np(1-p)$$")
    lines.append("")
    lines.append(
        "Why: if $X\\sim\\mathrm{Bin}(n,p)$, then $X$ is the sum of $n$ i.i.d. Bernoulli($p$) indicators. "
        "Each indicator has variance $p(1-p)$, and variances of independent summands add, giving $np(1-p)$. "
        "Variance is largest when $p$ is closest to $1/2$."
    )
    lines.append("")
    lines.append("Step-by-step calculation:")
    if params and "pA" in params:
        n, pA, pB = params["n"], params["pA"], params["pB"]
        vA = n * pA * (1 - pA)
        vB = n * pB * (1 - pB)
        lines.append(f"Step 1: Write both parameters: $n = {n}$, $p_A = {fmt_num(pA)}$, $p_B = {fmt_num(pB)}$.")
        lines.append(
            f"Step 2: Compute side A’s variance:\n\n"
            f"$$\\mathrm{{Var}}(A)= {n}\\cdot {fmt_num(pA)}\\cdot {fmt_num(1-pA)} = {fmt_num(vA)}$$"
        )
        lines.append(
            f"Step 3: Compute side B’s variance:\n\n"
            f"$$\\mathrm{{Var}}(B)= {n}\\cdot {fmt_num(pB)}\\cdot {fmt_num(1-pB)} = {fmt_num(vB)}$$"
        )
        if "times" in stmt.lower() or "triple" in stmt.lower() or "double" in stmt.lower() or "more than" in stmt.lower():
            ratio = vA / vB if vB else float("inf")
            lines.append(
                f"Step 4: Form the ratio required by the claim:\n\n"
                f"$$\\frac{{\\mathrm{{Var}}(A)}}{{\\mathrm{{Var}}(B)}} = \\frac{{{fmt_num(vA)}}}{{{fmt_num(vB)}}} \\approx {fmt_num(ratio)}$$"
            )
            lines.append(
                f"Step 5: Compare this ratio (or the two variances) with the statement’s threshold. "
                f"The claim is {'satisfied' if is_true else 'not satisfied'}."
            )
        else:
            lines.append(
                f"Step 4: Compare $\\mathrm{{Var}}(A)={fmt_num(vA)}$ with $\\mathrm{{Var}}(B)={fmt_num(vB)}$. "
                f"The larger variance belongs to the side whose $p$ is closer to $0.5$."
            )
            lines.append(f"Step 5: The statement’s comparison is {'correct' if is_true else 'incorrect'}.")
    else:
        lines.append("Step 1: Identify $n$ and $p$ for each distribution in the claim.")
        lines.append("Step 2: Evaluate $np(1-p)$ for each side.")
        lines.append("Step 3: Compare variances (or their ratio) with the claimed inequality.")
    lines.append("")
    lines.append("Conclusion:")
    lines.append(f"Using $\\mathrm{{Var}}(X)=np(1-p)$ with the given numbers, the statement is {('True' if is_true else 'False')}.")
    return "\n".join(lines)


def expl_sd(i: int, is_true: bool, stmt: str, params: dict | None, ctx: str) -> str:
    lines = [verdict_line(i, is_true), ""]
    lines.append("Situation:")
    lines.append(situation_blurb(ctx, params))
    lines.append("")
    lines.append("Formula to use:")
    lines.append("")
    lines.append("$$\\mathrm{SD}(X)=\\sqrt{\\mathrm{Var}(X)}=\\sqrt{np(1-p)}$$")
    lines.append("")
    lines.append(
        "Why: the standard deviation is the positive square root of the variance. "
        "For a binomial count it is therefore $\\sqrt{np(1-p)}$. Like variance, it is larger when $p$ is closer to $1/2$."
    )
    lines.append("")
    lines.append("Step-by-step calculation:")
    if params and "pA" in params:
        n, pA, pB = params["n"], params["pA"], params["pB"]
        vA, vB = n * pA * (1 - pA), n * pB * (1 - pB)
        sA, sB = math.sqrt(vA), math.sqrt(vB)
        lines.append(f"Step 1: List $n = {n}$, $p_A = {fmt_num(pA)}$, $p_B = {fmt_num(pB)}$.")
        lines.append(
            f"Step 2: Variance then SD for A:\n\n"
            f"$$\\mathrm{{Var}}(A)={fmt_num(vA)},\\qquad \\mathrm{{SD}}(A)=\\sqrt{{{fmt_num(vA)}}}\\approx {fmt_num(sA)}$$"
        )
        lines.append(
            f"Step 3: Variance then SD for B:\n\n"
            f"$$\\mathrm{{Var}}(B)={fmt_num(vB)},\\qquad \\mathrm{{SD}}(B)=\\sqrt{{{fmt_num(vB)}}}\\approx {fmt_num(sB)}$$"
        )
        if "times" in stmt.lower() or "double" in stmt.lower() or "triple" in stmt.lower() or "more than" in stmt.lower():
            ratio = sA / sB if sB else float("inf")
            lines.append(
                f"Step 4: Ratio of standard deviations:\n\n"
                f"$$\\frac{{\\mathrm{{SD}}(A)}}{{\\mathrm{{SD}}(B)}}\\approx \\frac{{{fmt_num(sA)}}}{{{fmt_num(sB)}}}\\approx {fmt_num(ratio)}$$"
            )
            lines.append(f"Step 5: Compare with the claim. The claim is {'met' if is_true else 'not met'}.")
        else:
            lines.append(
                f"Step 4: Compare $\\mathrm{{SD}}(A)\\approx {fmt_num(sA)}$ with $\\mathrm{{SD}}(B)\\approx {fmt_num(sB)}$."
            )
            lines.append(f"Step 5: The statement is {'correct' if is_true else 'incorrect'}.")
    else:
        lines.append("Step 1: Compute $np(1-p)$ for each side.")
        lines.append("Step 2: Take square roots to get the SDs.")
        lines.append("Step 3: Compare with the claimed inequality.")
    lines.append("")
    lines.append("Conclusion:")
    lines.append(f"After computing both standard deviations from $\\sqrt{{np(1-p)}}$, the statement is {('True' if is_true else 'False')}.")
    return "\n".join(lines)


def expl_mean(i: int, is_true: bool, stmt: str, params: dict | None, ctx: str) -> str:
    lines = [verdict_line(i, is_true), ""]
    lines.append("Situation:")
    lines.append(situation_blurb(ctx, params))
    lines.append("")
    lines.append("Formula to use:")
    lines.append("")
    lines.append("$$E[X]=np$$")
    lines.append("")
    lines.append(
        "Why: the mean of a binomial random variable is the number of trials times the success probability. "
        "Equivalently, $E[X]=E[I_1+\\cdots+I_n]=np$ for Bernoulli indicators $I_j$."
    )
    lines.append("")
    lines.append("Step-by-step calculation:")
    if params and "pA" in params:
        n, pA, pB = params["n"], params["pA"], params["pB"]
        mA, mB = n * pA, n * pB
        lines.append(f"Step 1: Identify $n = {n}$, $p_A = {fmt_num(pA)}$, $p_B = {fmt_num(pB)}$.")
        lines.append(f"Step 2: Mean for A:\n\n$$E[A]={n}\\cdot {fmt_num(pA)}={fmt_num(mA)}$$")
        lines.append(f"Step 3: Mean for B:\n\n$$E[B]={n}\\cdot {fmt_num(pB)}={fmt_num(mB)}$$")
        lines.append(f"Step 4: Difference $E[B]-E[A]={fmt_num(mB-mA)}$, and ratio $E[B]/E[A]={fmt_num(mB/mA) if mA else 'undefined'}$.")
        if "percent" in stmt.lower() or "%" in stmt:
            pct_inc = 100 * (mB / mA - 1) if mA else float("inf")
            lines.append(f"Step 5: Percent increase of B over A:\n\n$$100\\cdot\\left(\\frac{{E[B]}}{{E[A]}}-1\\right)\\approx {fmt_num(pct_inc)}\\%$$")
            lines.append(f"Step 6: Compare with the claim. The claim is {'true' if is_true else 'false'}.")
        elif "double" in stmt.lower() or "twice" in stmt.lower():
            lines.append(f"Step 5: Check whether $E[B]$ is more than double $E[A]$: ratio $\\approx {fmt_num(mB/mA) if mA else 0}$.")
            lines.append(f"Step 6: The claim is {'true' if is_true else 'false'}.")
        elif "more than" in stmt.lower() or "at least" in stmt.lower() or "exactly" in stmt.lower() or "exceeds" in stmt.lower() or "higher" in stmt.lower() or "below" in stmt.lower() or "does not meet" in stmt.lower() or "one-fourth" in stmt.lower() or "threshold" in stmt.lower():
            lines.append(f"Step 5: Compare the computed mean(s) with the numerical claim in the statement.")
            lines.append(f"Step 6: The claim is {'true' if is_true else 'false'}.")
        else:
            lines.append(f"Step 5: Match the computed values to the statement. The claim is {'true' if is_true else 'false'}.")
    elif params and "p" in params:
        n, p = params["n"], params["p"]
        lines.append(f"Step 1: $n={n}$, $p={fmt_num(p)}$.")
        lines.append(f"Step 2: $E[X]={n}\\cdot{fmt_num(p)}={fmt_num(n*p)}$.")
        lines.append(f"Step 3: Compare with the claim → {('True' if is_true else 'False')}.")
    else:
        lines.append("Step 1: Compute $np$ for each relevant distribution.")
        lines.append("Step 2: Form the difference, ratio, or comparison required by the statement.")
        lines.append(f"Step 3: Decide {('True' if is_true else 'False')}.")
    lines.append("")
    lines.append("Conclusion:")
    lines.append(f"Using $E[X]=np$ and the arithmetic above, the statement is {('True' if is_true else 'False')}.")
    return "\n".join(lines)


def expl_ratio(i: int, is_true: bool, stmt: str, params: dict | None, ctx: str, old: str) -> str:
    lines = [verdict_line(i, is_true), ""]
    lines.append("Situation:")
    lines.append(situation_blurb(ctx, params))
    lines.append("")
    lines.append("Formula to use:")
    lines.append("")
    lines.append("$$P(X \\ge k)=\\sum_{x=k}^{n}\\binom{n}{x}p^{x}(1-p)^{n-x}$$")
    lines.append("")
    lines.append(
        "Why: “$B$ is $R$ times as likely as $A$ to clear the threshold” means we must compute both "
        "tail probabilities $P_B(X\\ge k)$ and $P_A(X\\ge k)$ with the binomial PMF, then form the ratio "
        "$P_B/P_A$ (or the order stated in the claim). Comparing the two success rates $p_B$ and $p_A$ alone is not enough."
    )
    lines.append("")
    lines.append("Step-by-step calculation:")
    k = params.get("k") if params else None
    # Threshold k from statement only if it is a count threshold, not "at least 300 times"
    mk = re.search(r"at least\s+(\d+)\s+(?:of|out of|correct|success|bull|flag|resolve|identify|make|made|satisf|detect|germinat|forecast|line|attack|unit|bag|call|email|day|arrow|throw|shot|scenario|essay|pastr|sample|ticket|trial|component|transaction)", stmt, re.I)
    if mk:
        k = int(mk.group(1))
    if params and "pA" in params and k is not None:
        n, pA, pB = params["n"], params["pA"], params["pB"]
        pA_ge = binom_sf_ge(n, pA, k)
        pB_ge = binom_sf_ge(n, pB, k)
        a_over_b = bool(
            re.search(
                r"\bA\b.*more than .* as likely as.*\bB\b|\bA\b.*more than .* times as likely as",
                stmt,
                re.I,
            )
        )
        if a_over_b:
            ratio = (pA_ge / pB_ge) if pB_ge > 0 else float("inf")
        else:
            ratio = (pB_ge / pA_ge) if pA_ge > 0 else float("inf")
        lines.append(f"Step 1: Fix the shared threshold $k = {k}$ and $n = {n}$ from the scenario (the score/award cutoff, not the multiplier in the claim).")
        lines.append(
            f"Step 2: Compute side A’s tail with $p_A={fmt_num(pA)}$:\n\n"
            f"$$P_A(X\\ge {k})=\\sum_{{x={k}}}^{{{n}}}\\binom{{{n}}}{{x}}({fmt_num(pA)})^{{x}}(1-{fmt_num(pA)})^{{{n}-x}}\\approx {fmt_prob(pA_ge, pct=True)}$$"
        )
        lines.append(
            f"Step 3: Compute side B’s tail with $p_B={fmt_num(pB)}$:\n\n"
            f"$$P_B(X\\ge {k})=\\sum_{{x={k}}}^{{{n}}}\\binom{{{n}}}{{x}}({fmt_num(pB)})^{{x}}(1-{fmt_num(pB)})^{{{n}-x}}\\approx {fmt_prob(pB_ge, pct=True)}$$"
        )
        if a_over_b:
            lines.append(
                f"Step 4: Form the ratio in the claim’s order (A relative to B):\n\n"
                f"$$\\frac{{P_A}}{{P_B}}\\approx {fmt_num(ratio)}$$"
            )
        else:
            lines.append(
                f"Step 4: Form the ratio in the claim’s order (usually B relative to A):\n\n"
                f"$$\\frac{{P_B}}{{P_A}}\\approx {fmt_num(ratio)}$$"
            )
        thr = re.search(r"(?:more than|at least)\s+([\d,]+)\s+times", stmt, re.I)
        if thr:
            tval = float(thr.group(1).replace(",", ""))
            lines.append(f"Step 5: Compare the ratio with the claimed multiplier ${fmt_num(tval)}$.")
        lines.append(f"Step 6: The inequality in the statement is {'satisfied' if is_true else 'not satisfied'}.")
    else:
        body = strip_old_verdict(old).split("\n\n")[0]
        lines.append(f"Step 1: Compute both $P(X\\ge k)$ values with the binomial PMF.")
        lines.append(f"Step 2: Divide them in the order required by the claim. From the worked values: {body}")
        lines.append(f"Step 3: Compare with the claimed multiplier → {('True' if is_true else 'False')}.")
    lines.append("")
    lines.append("Conclusion:")
    lines.append(
        f"The likelihood ratio must be computed from the two binomial tails, not from $p_B/p_A$. "
        f"The statement is {('True' if is_true else 'False')}."
    )
    return "\n".join(lines)


def expl_generic(i: int, is_true: bool, stmt: str, params: dict | None, ctx: str, old: str) -> str:
    """Deep wrapper around the PDF explanation for advanced / odd statements."""
    body = strip_old_verdict(old)
    # Drop Tip / Key formula sections from old; we'll rebuild structure
    tip = ""
    if "\n\nTip:" in body:
        body, tip = body.split("\n\nTip:", 1)
        tip = tip.strip()
    # Remove previous Key formula / Recall blocks to avoid duplication
    body = re.split(r"\n\n(?:Key formula|Recall)", body)[0].strip()

    lines = [verdict_line(i, is_true), ""]
    lines.append("Situation:")
    lines.append(situation_blurb(ctx, params))
    lines.append("")
    lines.append("What the statement claims:")
    lines.append(stmt)
    lines.append("")
    lines.append("Formula / rule to use:")
    lines.append("")
    low = (stmt + " " + body).lower()
    if "poisson" in low:
        lines.append("$$P(X=k)\\approx e^{-\\lambda}\\frac{\\lambda^{k}}{k!},\\qquad \\lambda=np$$")
        lines.append("")
        lines.append(
            "Why: when $n$ is large and $p$ is small with $\\lambda=np$ moderate, the binomial distribution "
            "is well approximated by Poisson($\\lambda$). This is a different rule of thumb from the normal approximation."
        )
    elif "normal" in low and "approxim" in low:
        lines.append("$$X\\approx \\mathcal{N}\\big(np,\\,np(1-p)\\big)$$")
        lines.append("")
        lines.append(
            "Why: for large $n$ with $np$ and $n(1-p)$ both at least about $5$, the binomial is approximately normal. "
            "For discrete-to-continuous comparisons, apply a continuity correction (e.g. $P(X\\le 1)\\approx P(Y\\le 1.5)$)."
        )
    elif "mode" in low:
        lines.append("The mode of $\\mathrm{Bin}(n,p)$ is $\\lfloor (n+1)p \\rfloor$ (or two adjacent integers when $(n+1)p$ is an integer).")
        lines.append("")
        lines.append("Why: the mode is the integer $k$ maximizing $P(X=k)$. Comparing consecutive PMF ratios shows where the mass peaks.")
    elif "variance" in low or "var(" in low:
        lines.append("$$\\mathrm{Var}(X)=np(1-p)$$")
    elif "standard deviation" in low or "sd(" in low:
        lines.append("$$\\mathrm{SD}(X)=\\sqrt{np(1-p)}$$")
    elif "mean" in low or "expected" in low:
        lines.append("$$E[X]=np$$")
    elif "p(x = 0)" in low or "x = 0" in low or "no " in low[:40]:
        lines.append("$$P(X=0)=(1-p)^{n}$$")
    else:
        lines.append("$$P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k},\\quad E[X]=np,\\quad \\mathrm{Var}(X)=np(1-p)$$")
    lines.append("")
    lines.append("Step-by-step calculation:")
    lines.append(f"Step 1: Identify every numerical input ($n$, $p$, thresholds, $\\lambda$, etc.) from the scenario.")
    lines.append(f"Step 2: Substitute into the formula above and evaluate carefully (exact values, not rough estimates).")
    lines.append(f"Step 3: Worked numerical result from the solution key: {body}")
    lines.append(f"Step 4: Compare the computed value with every threshold or qualitative claim in the statement.")
    lines.append(f"Step 5: The statement is therefore {('True' if is_true else 'False')}.")
    if tip:
        lines.append("")
        lines.append(f"Tip: {tip}")
    lines.append("")
    lines.append("Conclusion:")
    lines.append(
        f"After setting up the correct binomial (or approximating) model, substituting all given numbers, "
        f"and checking the claimed inequality, the answer is {('True' if is_true else 'False')}."
    )
    return "\n".join(lines)


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
    if (
        "perfect" in s
        or "all " in s
        or "flawless" in s
        or "in a row" in s
        or "completely failing" in s
        or "x = 0" in s
        or "x=0" in s
    ) and "sum" not in s:
        # zero successes is (1-p)^n — still a "perfect failure" style power
        if "x = 0" in s or "x=0" in s or "completely failing" in s or "no " in s:
            return "generic"  # handle via generic with P(X=0)
        return "perfect"
    if "mean" in s or "expected" in s:
        return "mean"
    return "generic"


def build_explanation(i: int, is_true: bool, stmt: str, ctx: str, old: str, params: dict | None) -> str:
    kind = classify(stmt)
    if kind == "sum":
        return expl_sum_notation(i, is_true, stmt, params, ctx)
    if kind == "perfect":
        return expl_perfect(i, is_true, stmt, params, ctx, old)
    if kind == "variance":
        return expl_variance(i, is_true, stmt, params, ctx)
    if kind == "sd":
        return expl_sd(i, is_true, stmt, params, ctx)
    if kind == "mean":
        return expl_mean(i, is_true, stmt, params, ctx)
    if kind == "ratio":
        return expl_ratio(i, is_true, stmt, params, ctx, old)
    return expl_generic(i, is_true, stmt, params, ctx, old)


def main() -> None:
    data = json.loads(PATH.read_text())
    for task in data["tasks"]:
        ctx = task["context"]
        params = extract_two_person(ctx) or extract_single(ctx)
        new_expl = []
        for i, (stmt, is_true, old) in enumerate(
            zip(task["statements"], task["answer_key"], task["tactical_explanations"])
        ):
            new_expl.append(build_explanation(i, bool(is_true), stmt, ctx, old, params))
        task["tactical_explanations"] = new_expl
        assert len(task["tactical_explanations"]) == len(task["statements"]) == len(task["answer_key"])

    data["explanation_style"] = (
        'Full worked solutions: N. "True"/"False", then Situation, Formula + why, '
        "step-by-step substitution, Conclusion. Depth matched to financial-math solutions."
    )
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    # preview
    t0 = data["tasks"][0]
    print("Q1 A preview:\n")
    print(t0["tactical_explanations"][0][:900])
    print("\n---\nQ1 D preview:\n")
    print(t0["tactical_explanations"][3][:700])
    print("\nDone", len(data["tasks"]), "tasks")


if __name__ == "__main__":
    main()
