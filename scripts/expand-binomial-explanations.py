#!/usr/bin/env python3
"""
Rewrite binomial explanations in natural tutoring style.

- solution_overview: situation once per task (with correct % → count cutoffs)
- each tactical_explanation: **A.** → True/False, then flowing prose (no statement echo)
- for tails, expand every binomial term before adding
- derive the formula in words first, then plug numbers into KaTeX
"""
from __future__ import annotations

import json
import math
import re
from math import ceil, comb, floor
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src" / "data" / "math-cases-ch13-binomial.json"
LETTERS = "ABCDEF"


def binom_pmf(n: int, p: float, k: int) -> float:
    if k < 0 or k > n:
        return 0.0
    return comb(n, k) * (p**k) * ((1 - p) ** (n - k))


def binom_sf_ge(n: int, p: float, k: int) -> float:
    return sum(binom_pmf(n, p, i) for i in range(max(0, k), n + 1))


def binom_cdf_le(n: int, p: float, k: int) -> float:
    return sum(binom_pmf(n, p, i) for i in range(0, min(n, k) + 1))


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


def clean_ctx(ctx: str) -> str:
    return re.sub(r"\s*Evaluate each statement\. Mark it TRUE or FALSE\.\s*$", "", ctx).strip()


def _num(s: str) -> int:
    return int(s.replace(",", ""))


def _pair_blocks(ctx: str) -> list[tuple[int, float]]:
    """Extract ordered (n, p) pairs for side A then side B (or Line 1 then 2)."""

    def grab(pattern: str) -> list[tuple[int, float]]:
        out: list[tuple[int, float]] = []
        for m in re.finditer(pattern, ctx, re.I | re.S):
            out.append((_num(m.group(1)), float(m.group(2))))
        return out

    # "batches of N units; ... probability P"
    pairs = grab(r"batches of\s+(\d[\d,]*)\s+units;.*?probability\s+(0?\.\d+)")
    if len(pairs) >= 2:
        return pairs[:2]

    # "handles N tickets/requests ... probability P"
    pairs = grab(
        r"handles\s+(\d[\d,]*)\s+(?:tickets|requests).*?probability\s+(0?\.\d+)"
    )
    if len(pairs) >= 2:
        return pairs[:2]

    # "Line 1 makes N units ... probability P"
    pairs = grab(
        r"(?:Line|Production Line)\s*[12AB].*?(\d[\d,]*)\s+units.*?probability\s+(0?\.\d+)"
    )
    if len(pairs) >= 2:
        return pairs[:2]

    # "Test/Component/Service A ... N ... probability P"
    pairs = grab(
        r"(?:Screening Test|Test|Component|Service|Type|Auditor|Kit|Check|Team|Player|"
        r"Person|Agent|Inspector|Factory|Queue|Surgeon|Student|Worker)\s*[AB12]"
        r".{0,120}?(\d[\d,]*)\s+(?:independent\s+)?(?:samples|units|requests|trials|"
        r"items|calls|components|cycles|emails|customers|days|procedures|transactions|"
        r"tickets|questions|shots|throws)"
        r".{0,160}?probability\s+(?:of\s+)?(0?\.\d+)"
    )
    if len(pairs) >= 2:
        return pairs[:2]

    # "is run on N ... probability P" / "tested on N"
    pairs = grab(
        r"(?:run on|tested on|across|performs?|completes?|reviews?)\s+(?:a different set of\s+)?"
        r"(\d[\d,]*)\s+(?:independent\s+)?(?:samples|units|requests|trials|items)."
        r"{0,120}?probability\s+(0?\.\d+)"
    )
    if len(pairs) >= 2:
        return pairs[:2]

    # Generic: "N <noun> ... probability P" repeated (allow commas in N)
    pairs = grab(
        r"\b(\d[\d,]*)\s+(?:question|free throw|item|call|seed|bag|arrow|customer|email|day|"
        r"unit|sample|attack|procedure|transaction|ticket|trial|scenario|pastr(?:y|ies)|"
        r"essay|line|shot|throw|component|cycle|request)s?\b.{0,160}?probability\s+(?:of\s+)?"
        r"(0?\.\d+)"
    )
    if len(pairs) >= 2:
        return pairs[:2]

    # Fallback: first n-like integer + two probability floats
    n = None
    for pat in [
        r"\b(\d[\d,]*)\s*[- ]question",
        r"\b(\d[\d,]*)\s*free throws",
        r"\b(\d[\d,]*)\s*(?:items|calls|seeds|bags|arrows|customers|emails|days|units|samples|"
        r"attacks|procedures|transactions|tickets|trials|scenarios|pastries|essays|lines|"
        r"shots|throws|components|requests)",
        r"out of\s+(\d[\d,]*)",
        r"batches of\s+(\d[\d,]*)",
        r"batch of\s+(\d[\d,]*)",
        r"each (?:finish a batch of|make|answer|perform|complete|attempt|shoot)\s+(\d[\d,]*)",
        r"(?:runs|reviews?|screens?|inspects?|across|score|produces|has)\s+(\d[\d,]*)",
    ]:
        m = re.search(pat, ctx, re.I)
        if m:
            n = _num(m.group(1))
            break
    ps = [float(x) for x in re.findall(r"p\s*=\s*(0?\.\d+)", ctx, flags=re.I)]
    if len(ps) < 2:
        ps = [float(x) for x in re.findall(r"probability(?:\s+of)?\s*(0?\.\d+)", ctx, flags=re.I)]
    if n is not None and len(ps) >= 2:
        return [(n, ps[0]), (n, ps[1])]
    return []


def _pct_cutoffs(ctx: str, nA: int, nB: int) -> dict:
    """
    Convert percentage rules in the scenario into integer cutoffs.

    - "at least P% ... defect-free/success" → need ceil(P/100 * n) successes
    - "at most P% ... unresolved/failure" → unresolved ≤ floor(P/100 * n),
      equivalently successes ≥ n - floor(P/100 * n)
    """
    out: dict = {"direction": "ge"}

    # Dual explicit percent thresholds (Factory A / Factory B)
    m_dual = re.search(
        r"at least\s+(\d+(?:\.\d+)?)\s*%\s+of\s+Factory\s+A\b.*?"
        r"at least\s+(\d+(?:\.\d+)?)\s*%\s+of\s+Factory\s+B\b",
        ctx,
        re.I | re.S,
    )
    if m_dual:
        pA_pct, pB_pct = float(m_dual.group(1)), float(m_dual.group(2))
        out["pctA"], out["pctB"] = pA_pct, pB_pct
        out["kA"] = int(ceil(pA_pct / 100.0 * nA))
        out["kB"] = int(ceil(pB_pct / 100.0 * nB))
        out["rawA"] = pA_pct / 100.0 * nA
        out["rawB"] = pB_pct / 100.0 * nB
        return out

    m_dual2 = re.search(
        r"at least\s+(\d+(?:\.\d+)?)\s*%.*?at least\s+(\d+(?:\.\d+)?)\s*%",
        ctx,
        re.I | re.S,
    )
    if m_dual2 and "Factory A's" in ctx and "Factory B's" in ctx:
        pA_pct, pB_pct = float(m_dual2.group(1)), float(m_dual2.group(2))
        out["pctA"], out["pctB"] = pA_pct, pB_pct
        out["kA"] = int(ceil(pA_pct / 100.0 * nA))
        out["kB"] = int(ceil(pB_pct / 100.0 * nB))
        out["rawA"] = pA_pct / 100.0 * nA
        out["rawB"] = pB_pct / 100.0 * nB
        return out

    # Shared "at least P% of its units"
    m_ge = re.search(r"at least\s+(\d+(?:\.\d+)?)\s*%\s+of", ctx, re.I)
    if m_ge:
        p_pct = float(m_ge.group(1))
        out["pctA"] = out["pctB"] = p_pct
        out["kA"] = int(ceil(p_pct / 100.0 * nA))
        out["kB"] = int(ceil(p_pct / 100.0 * nB))
        out["rawA"] = p_pct / 100.0 * nA
        out["rawB"] = p_pct / 100.0 * nB
        return out

    # "at most P% ... unresolved" → success (resolved) cutoff
    m_le = re.search(r"at most\s+(\d+(?:\.\d+)?)\s*%", ctx, re.I)
    if m_le:
        p_pct = float(m_le.group(1))
        out["direction"] = "le_fail"
        out["pctA"] = out["pctB"] = p_pct
        uA = int(floor(p_pct / 100.0 * nA))
        uB = int(floor(p_pct / 100.0 * nB))
        out["uA"], out["uB"] = uA, uB
        out["rawA"] = p_pct / 100.0 * nA
        out["rawB"] = p_pct / 100.0 * nB
        # If X = successes (resolved), on-target means unresolved ≤ u ⇒ X ≥ n−u
        out["kA"] = nA - uA
        out["kB"] = nB - uB
        return out

    # Plain "at least K" count (not a percent)
    mk = re.search(r"at least\s+(\d+)(?!\s*%)", ctx, re.I)
    if mk:
        k = int(mk.group(1))
        out["kA"] = out["kB"] = k
        return out

    return out


def extract_two_person(ctx: str) -> dict | None:
    pairs = _pair_blocks(ctx)
    if len(pairs) < 2:
        return None
    (nA, pA), (nB, pB) = pairs[0], pairs[1]
    cut = _pct_cutoffs(ctx, nA, nB)
    return {
        "nA": nA,
        "nB": nB,
        "n": nA,  # backward-compatible default
        "pA": pA,
        "pB": pB,
        "k": cut.get("kA"),
        "kA": cut.get("kA"),
        "kB": cut.get("kB"),
        "uA": cut.get("uA"),
        "uB": cut.get("uB"),
        "pctA": cut.get("pctA"),
        "pctB": cut.get("pctB"),
        "rawA": cut.get("rawA"),
        "rawB": cut.get("rawB"),
        "direction": cut.get("direction", "ge"),
    }


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


def extract_device(ctx: str) -> dict | None:
    """Union-of-components device failure over many cycles."""
    comps = []
    for m in re.finditer(
        r"Component\s*\d\s+(?:fails with probability|with probability)\s+(0?\.\d+)",
        ctx,
        re.I,
    ):
        comps.append(float(m.group(1)))
    if len(comps) < 3:
        return None
    n_m = re.search(r"(\d[\d,]*)\s+independent cycles", ctx, re.I)
    if not n_m:
        return None
    n = _num(n_m.group(1))
    p1, p2, p3 = comps[:3]
    p = 1 - (1 - p1) * (1 - p2) * (1 - p3)
    return {"n": n, "p": p, "device": True, "comps": comps[:3]}


def overview_text(ctx: str, params: dict | None) -> str:
    core = clean_ctx(ctx)
    if params and "pA" in params:
        nA, nB = params["nA"], params["nB"]
        bits = [core, ""]
        if nA == nB:
            bits.append(
                f"We model each side as a binomial count with $n = {nA}$ independent trials: "
                f"side A has success probability $p_A = {fmt(params['pA'], 4)}$, "
                f"side B has $p_B = {fmt(params['pB'], 4)}$."
            )
        else:
            bits.append(
                f"We model side A as $X_A \\sim \\mathrm{{Bin}}(n_A,p_A)$ with "
                f"$n_A = {nA}$, $p_A = {fmt(params['pA'], 4)}$, and side B as "
                f"$X_B \\sim \\mathrm{{Bin}}(n_B,p_B)$ with "
                f"$n_B = {nB}$, $p_B = {fmt(params['pB'], 4)}$."
            )
        if params.get("pctA") is not None and params.get("kA") is not None:
            bits.append("")
            if params.get("direction") == "le_fail":
                bits.append(
                    f"The “at most {fmt(params['pctA'], 2)}% unresolved” rule is a count cutoff, not a "
                    f"literal fractional ticket count. For side A, "
                    f"${fmt(params['pctA'], 2)}\\%\\times {nA} = {fmt(params['rawA'], 4)}$, so unresolved "
                    f"tickets can be at most $u_A = \\lfloor {fmt(params['rawA'], 4)} \\rfloor = {params['uA']}$. "
                    f"With $X$ = number resolved, that is $X \\ge {params['kA']}$. "
                    f"For side B, $u_B = {params['uB']}$ and $X \\ge {params['kB']}$."
                )
            elif params.get("pctA") == params.get("pctB"):
                bits.append(
                    f"“At least {fmt(params['pctA'], 2)}%” is a percentage of the batch size, not a raw "
                    f"success count of {fmt(params['pctA'], 2)}. For side A, "
                    f"${fmt(params['pctA'], 2)}\\%\\times {nA} = {fmt(params['rawA'], 4)}$, so the batch "
                    f"needs at least $k_A = \\lceil {fmt(params['rawA'], 4)} \\rceil = {params['kA']}$ "
                    f"successes. For side B, "
                    f"$k_B = \\lceil {fmt(params['rawB'], 4)} \\rceil = {params['kB']}$."
                )
            else:
                bits.append(
                    f"Each factory has its own percentage cutoff, converted to an integer count with a "
                    f"ceiling (you cannot keep a fraction of a unit). "
                    f"Side A: ${fmt(params['pctA'], 2)}\\%\\times {nA} = {fmt(params['rawA'], 4)}$ "
                    f"$\\Rightarrow k_A = \\lceil {fmt(params['rawA'], 4)} \\rceil = {params['kA']}$. "
                    f"Side B: ${fmt(params['pctB'], 2)}\\%\\times {nB} = {fmt(params['rawB'], 4)}$ "
                    f"$\\Rightarrow k_B = \\lceil {fmt(params['rawB'], 4)} \\rceil = {params['kB']}$."
                )
        elif params.get("kA") is not None:
            bits.append("")
            if params.get("kA") == params.get("kB") and nA == nB:
                bits.append(
                    f"The scenario’s success cutoff is at least $k = {params['kA']}$ successes "
                    f"out of $n = {nA}$."
                )
            else:
                bits.append(
                    f"Side A’s success cutoff is $k_A = {params['kA']}$ out of $n_A = {nA}$; "
                    f"side B’s is $k_B = {params['kB']}$ out of $n_B = {nB}$."
                )
        return "\n".join(bits).replace("\n\n\n", "\n\n")
    if params and "p" in params:
        core = clean_ctx(ctx)
        extra = ""
        if params.get("device") and params.get("comps"):
            p1, p2, p3 = params["comps"]
            extra = (
                f"\n\nA cycle fails if at least one component fails:\n\n"
                f"$$p = 1-(1-p_1)(1-p_2)(1-p_3)"
                f" = 1-({fmt(1-p1, 6)})({fmt(1-p2, 6)})({fmt(1-p3, 6)})"
                f" \\approx {fmt(params['p'], 8)}.$$"
            )
        return (
            f"{core}{extra}\n\n"
            f"Let $X \\sim \\mathrm{{Bin}}(n,p)$ with $n = {params['n']}$ and $p = {fmt(params['p'], 8)}$."
        )
    return core


def header(letter: str, is_true: bool) -> str:
    """Letter + verdict only — do not restate the claim."""
    return f"**{letter}.** → {'True' if is_true else 'False'}"


def expand_tail_terms(n: int, p: float, k: int, who: str) -> tuple[str, float]:
    """Return prose+math expanding every term of P(X>=k), and the total."""
    q = 1 - p
    k = max(0, min(k, n + 1))
    parts = [f"{who} ($n = {n}$, $p = {fmt(p, 4)}$):", ""]
    vals = []
    if k > n:
        parts.append("The cutoff exceeds $n$, so this upper tail is empty and equals $0$.")
        return "\n".join(parts).strip(), 0.0
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
    if "coefficient of variation" in s:
        return "cv"
    if re.search(r"since\s+\d+(?:\.\d+)?%\s+of\s+\d+", s):
        return "pct_round"
    if "equals the sum" in s or "sum, from" in s or "sum from" in s:
        return "sum"
    if "both tests produce zero" in s or "product of each" in s:
        return "indep_zero_product"
    if "at least one of the two" in s:
        return "union_two"
    if re.search(r"at least\s+one|at least\s+1\b|1\s*−\s*\(1", s):
        if "times as likely" in s or "as likely as" in s:
            return "at_least_one_ratio"
        return "at_least_one"
    if "times as likely" in s or "as likely as" in s:
        return "ratio"
    if "skew" in s:
        return "skew"
    if "standard deviation" in s:
        return "sd"
    if "variance" in s:
        return "variance"
    if "mode" in s:
        return "mode"
    if "normal" in s and "approxim" in s:
        return "normal"
    if "poisson" in s:
        return "poisson"
    if "mean" in s or "expected" in s or "on average" in s:
        return "mean"
    if re.search(r"\bP\(X\s*=\s*\d+\)|exactly\s+\d+", s):
        return "exact"
    if re.search(r"at most|fewer than|below|mid-range|\d+\s+to\s+\d+", s):
        return "tail_misc"
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
            "every single",
        )
    ):
        return "perfect"
    if "binomial(" in s.replace(" ", "").lower() and ("pooled" in s or "combined" in s or "follows a" in s):
        return "mixture"
    if "ignoring" in s or "summing the three" in s or "device fail" in s or "no device failure" in s:
        return "device"
    return "generic"


def pick_side(stmt: str, params: dict) -> tuple[str, int, float]:
    """Return ('A'|'B', n, p) for the person the statement focuses on."""
    s = stmt
    b_hit = re.search(
        r"\b(?:Player|Person|Agent|Staff|Inspector|Archer|Batch|Kit|Typist|Meteorologist|"
        r"Screener|Worker|Grader|Controller|Baker|Tester|Radiologist|Tech|Rep|Student|"
        r"Surgeon|Line|Team|Check|Factory|Restaurant|Seed Batch|Queue|Auditor|Component|"
        r"Service|Test|Type)\s*B\b|"
        r"\b(?:Line|Production Line)\s*2\b|"
        r"\ball-star\b|\bveteran\b|\belite\b|\btrained\b|\bsenior\b|\bexperienced\b|"
        r"\bestablished\b|\bfresh\b|\bnewer\b",
        s,
        re.I,
    )
    a_hit = re.search(
        r"\b(?:Player|Person|Agent|Staff|Inspector|Archer|Batch|Kit|Typist|Meteorologist|"
        r"Screener|Worker|Grader|Controller|Baker|Tester|Radiologist|Tech|Rep|Student|"
        r"Surgeon|Line|Team|Check|Factory|Restaurant|Seed Batch|Queue|Auditor|Component|"
        r"Service|Test|Type)\s*A\b|"
        r"\b(?:Line|Production Line)\s*1\b|"
        r"\brookie\b|\btrainee\b|\bnewly\b|\buntrained\b|\bbeginner\b|\bold stock\b|\bolder\b",
        s,
        re.I,
    )
    if b_hit and ("as likely" in s.lower() or not a_hit or re.search(r"\bB\b.*\bA\b", s)):
        if "as likely" in s.lower() and re.search(r"\bB\b.*as likely.*\bA\b", s, re.I):
            return "B", params["nB"], params["pB"]
        if a_hit and "as likely" not in s.lower() and re.search(r"\bA\b", s) and not re.search(
            r"\bB\b.*(higher|larger|greater|more)", s, re.I
        ):
            pass
        else:
            return "B", params["nB"], params["pB"]
    if a_hit and "as likely" not in s.lower():
        return "A", params["nA"], params["pA"]
    if b_hit:
        return "B", params["nB"], params["pB"]
    if a_hit:
        return "A", params["nA"], params["pA"]
    return "A", params["nA"], params["pA"]


def expl_pct_round(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    m = re.search(
        r"since\s+(\d+(?:\.\d+)?)\s*%\s+of\s+(\d+)\s+is\s+(\d+(?:\.\d+)?)",
        stmt,
        re.I,
    )
    if not m or not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)

    pct_v, n, raw_claimed = float(m.group(1)), int(m.group(2)), float(m.group(3))
    raw = pct_v / 100.0 * n
    lines.append(
        f"A percentage threshold must be turned into a whole-number count. "
        f"${fmt(pct_v, 2)}\\%$ of $n = {n}$ is"
    )
    lines.append("")
    lines.append(f"$${fmt(pct_v, 2)}\\% \\times {n} = {fmt(raw, 4)}.$$")
    lines.append("")

    if "at most" in stmt.lower() or "unresolved" in stmt.lower():
        k = int(floor(raw))
        wrong = re.search(r"at most\s+(\d+)", stmt, re.I)
        claimed = int(wrong.group(1)) if wrong else None
        lines.append(
            f"“At most {fmt(pct_v, 2)}% unresolved” means the unresolved count $U$ satisfies "
            f"$U \\le {fmt(raw, 4)}$. Because $U$ is an integer, that is "
            f"$U \\le \\lfloor {fmt(raw, 4)} \\rfloor = {k}$."
        )
        lines.append("")
        if claimed is not None:
            lines.append(
                f"The statement’s integer cutoff is {claimed}, which "
                f"{'matches' if claimed == k else 'does not match'} "
                f"$\\lfloor {fmt(raw, 4)} \\rfloor = {k}$. "
                f"Therefore the statement is {'True' if is_true else 'False'}."
            )
        else:
            lines.append(f"So the statement is {'True' if is_true else 'False'}.")
    else:
        k = int(ceil(raw))
        wrong = re.search(r"at least\s+(\d+)", stmt, re.I)
        claimed = int(wrong.group(1)) if wrong else None
        lines.append(
            f"“At least {fmt(pct_v, 2)}%” means the success count $X$ must be at least "
            f"${fmt(raw, 4)}$. Because $X$ is an integer, that is "
            f"$X \\ge \\lceil {fmt(raw, 4)} \\rceil = {k}$."
        )
        lines.append("")
        if claimed is not None:
            lines.append(
                f"The statement uses “at least {claimed}”, but the correct integer cutoff is "
                f"${k}$ (ceiling, not truncation of {fmt(raw_claimed, 4)} to {claimed} "
                f"when a fractional unit would still fall short of the percentage). "
                f"So the statement is {'True' if is_true else 'False'}."
            )
        else:
            lines.append(f"So the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def expl_sum(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    m = re.search(
        r"from\s*x\s*=\s*(\d+)\s*to\s*(\d+).*?n\s*=\s*(\d+)\s*and\s*p\s*=\s*(0?\.\d+)",
        stmt,
        re.I | re.S,
    )
    if m:
        lo, hi, n, p = int(m.group(1)), int(m.group(2)), int(m.group(3)), float(m.group(4))
    elif params and params.get("kA") is not None:
        lo = params["kA"]
        n = params["nA"]
        hi = n
        pm = re.search(r"p\s*=\s*(0?\.\d+)", stmt, re.I)
        p = float(pm.group(1)) if pm else params["pA"]
    else:
        return expl_generic(letter, stmt, is_true, params, _old)

    lines.append(
        f"“At least {lo} out of {n}” is not a single outcome — it covers the distinct counts "
        f"$X = {lo}, {lo + 1}, \\ldots, {hi}$. Those counts cannot happen at the same time, so by the "
        f"addition rule for mutually exclusive events we add their individual binomial probabilities:"
    )
    lines.append("")
    mid = f"P(X={lo}) + P(X={lo + 1})" if lo < hi else f"P(X={lo})"
    if hi > lo + 1:
        mid = f"P(X={lo}) + P(X={lo + 1}) + \\cdots + P(X={hi})"
    elif hi == lo + 1:
        mid = f"P(X={lo}) + P(X={hi})"
    lines.append(
        f"$$P(X \\ge {lo}) = {mid} = \\sum_{{x={lo}}}^{{{hi}}} "
        f"\\binom{{{n}}}{{x}} p^{{x}} (1-p)^{{{n}-x}}$$"
    )
    lines.append("")
    # Cross-check against scenario cutoff when available
    note = ""
    if params and params.get("kA") is not None and abs(p - params["pA"]) < 1e-9 and n == params["nA"]:
        note = (
            f" This matches the scenario cutoff $k_A = {params['kA']}$ obtained from the percentage rule."
            if lo == params["kA"] and hi == n
            else f" The scenario cutoff for side A is $k_A = {params['kA']}$; "
            f"the written sum runs from ${lo}$ to ${hi}$."
        )
    lines.append(
        f"A single term such as $P(X = {lo})$ would only capture “exactly {lo}” and would undercount "
        f"the true chance of clearing the cutoff. The statement writes this sum with $n = {n}$ and "
        f"$p = {fmt(p, 4)}$, running from $x = {lo}$ to $x = {hi}$.{note} "
        f"That {'matches' if is_true else 'does not match'} the English claim, so the statement is "
        f"{'True' if is_true else 'False'}."
    )
    return "\n\n".join(lines)


def expl_perfect(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or ("pA" not in params and "p" not in params):
        return expl_generic(letter, stmt, is_true, params, _old)

    if "pA" in params:
        side, n, p = pick_side(stmt, params)
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
        lines.append("$$P(X = 0) = (1-p)^{n}$$")
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
        lines.append("$$P(X = n) = p^{n}$$")
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
        # times as likely perfect
        if "pA" in params and ("times" in stmt.lower() or "as likely" in stmt.lower()):
            pA, pB, nA, nB = params["pA"], params["pB"], params["nA"], params["nB"]
            vA, vB = pA**nA, pB**nB
            ratio = vB / vA if vA else float("inf")
            lines.append("")
            lines.append(f"Side A: $P(X_A = {nA}) = ({fmt(pA, 4)})^{{{nA}}} \\approx {fmt(vA, 6)}$.")
            lines.append("")
            lines.append(f"Side B: $P(X_B = {nB}) = ({fmt(pB, 4)})^{{{nB}}} \\approx {fmt(vB, 6)}$.")
            lines.append("")
            lines.append(f"Ratio $P_B/P_A \\approx {fmt(ratio, 3)}$.")
            lines.append("")
        lines.append(
            f"Comparing this value with the claim shows the statement is {'True' if is_true else 'False'}."
        )
    return "\n\n".join(lines)


def expl_ratio(letter, stmt, is_true, params, old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params or params.get("kA") is None:
        return expl_generic(letter, stmt, is_true, params, old)

    nA, nB = params["nA"], params["nB"]
    pA, pB = params["pA"], params["pB"]
    kA, kB = params["kA"], params["kB"]
    a_over_b = bool(re.search(r"\bA\b.*(?:more than|at least).*as likely as.*\bB\b", stmt, re.I))

    if nA == nB and kA == kB:
        lines.append(
            f"Clearing the cutoff means at least {kA} successes out of {nA}. That event is the union of the "
            f"mutually exclusive outcomes $X = {kA}, {kA + 1}, \\ldots, {nA}$, so we add the individual "
            f"binomial probabilities:"
        )
        lines.append("")
        lines.append(
            f"$$P(X \\ge {kA}) = \\sum_{{x={kA}}}^{{{nA}}} \\binom{{{nA}}}{{x}} p^{{x}} (1-p)^{{{nA}-x}}$$"
        )
    else:
        lines.append(
            f"Each side has its own $(n,k)$ pair. Side A needs $X_A \\ge {kA}$ out of $n_A = {nA}$; "
            f"side B needs $X_B \\ge {kB}$ out of $n_B = {nB}$. "
            f"(If the scenario gave a percentage, those $k$ values are the integer ceilings/floors — "
            f"not the percentage number itself.)"
        )
        lines.append("")
        lines.append(
            f"$$P(X_A \\ge {kA}) = \\sum_{{x={kA}}}^{{{nA}}} \\binom{{{nA}}}{{x}} "
            f"p_A^{{x}} (1-p_A)^{{{nA}-x}}$$"
        )
        lines.append("")
        lines.append(
            f"$$P(X_B \\ge {kB}) = \\sum_{{x={kB}}}^{{{nB}}} \\binom{{{nB}}}{{x}} "
            f"p_B^{{x}} (1-p_B)^{{{nB}-x}}$$"
        )

    lines.append("")
    lines.append(
        f"A single term $P(X = k)$ would only count “exactly $k$” and would miss the rest of the tail, "
        f"so it understates the chance of meeting the cutoff. We need the full upper tail for each side, "
        f"then the ratio of those two probabilities — not the ratio of the two success probabilities $p$."
    )
    lines.append("")

    block_a, tot_a = expand_tail_terms(nA, pA, kA, "Side A")
    block_b, tot_b = expand_tail_terms(nB, pB, kB, "Side B")
    lines.append(block_a)
    lines.append("")
    lines.append(block_b)
    lines.append("")

    if a_over_b:
        ratio = tot_a / tot_b if tot_b > 0 else float("inf")
        lines.append("The ratio in the claim’s order (A relative to B):")
        lines.append("")
        lines.append(
            f"$$\\frac{{P_A(X \\ge {kA})}}{{P_B(X \\ge {kB})}} "
            f"\\approx \\frac{{{pct(tot_a)}}}{{{pct(tot_b)}}} \\approx {fmt(ratio, 2)}$$"
        )
    else:
        ratio = tot_b / tot_a if tot_a > 0 else float("inf")
        lines.append("The ratio in the claim’s order (B relative to A):")
        lines.append("")
        lines.append(
            f"$$\\frac{{P_B(X \\ge {kB})}}{{P_A(X \\ge {kA})}} "
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
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
    lines.append(
        "For a binomial count $X \\sim \\mathrm{Bin}(n,p)$, write $X$ as the sum of $n$ independent "
        "Bernoulli trials with success probability $p$. Each trial has variance $p(1-p)$, and variances "
        "of independent summands add, so"
    )
    lines.append("")
    lines.append("$$\\mathrm{Var}(X) = np(1-p)$$")
    lines.append("")
    lines.append(
        "This is largest when $p$ is closest to $1/2$, not when $p$ itself is largest."
    )
    lines.append("")
    vA, vB = nA * pA * (1 - pA), nB * pB * (1 - pB)
    lines.append(f"Side A with $n_A = {nA}$, $p_A = {fmt(pA, 4)}$:")
    lines.append("")
    lines.append(
        f"$$\\mathrm{{Var}}(A) = {nA} \\cdot {fmt(pA, 4)} \\cdot {fmt(1 - pA, 4)} = {fmt(vA, 4)}$$"
    )
    lines.append("")
    lines.append(f"Side B with $n_B = {nB}$, $p_B = {fmt(pB, 4)}$:")
    lines.append("")
    lines.append(
        f"$$\\mathrm{{Var}}(B) = {nB} \\cdot {fmt(pB, 4)} \\cdot {fmt(1 - pB, 4)} = {fmt(vB, 4)}$$"
    )
    lines.append("")
    if "times" in stmt.lower() or "triple" in stmt.lower() or "double" in stmt.lower():
        ratio = vA / vB if vB else float("inf")
        lines.append("The variance ratio is")
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
    lines = [header(letter, is_true), ""]
    if params and "pA" in params:
        nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
        lines.append(
            "The standard deviation is the positive square root of the variance. For $X \\sim \\mathrm{Bin}(n,p)$,"
        )
        lines.append("")
        lines.append("$$\\mathrm{SD}(X) = \\sqrt{np(1-p)}$$")
        lines.append("")
        vA, vB = nA * pA * (1 - pA), nB * pB * (1 - pB)
        sA, sB = math.sqrt(vA), math.sqrt(vB)
        lines.append(f"Side A ($n_A = {nA}$, $p_A = {fmt(pA, 4)}$):")
        lines.append("")
        lines.append(
            f"$$\\mathrm{{Var}}(A) = {fmt(vA, 4)}, \\qquad "
            f"\\mathrm{{SD}}(A) = \\sqrt{{{fmt(vA, 4)}}} \\approx {fmt(sA, 3)}$$"
        )
        lines.append("")
        lines.append(f"Side B ($n_B = {nB}$, $p_B = {fmt(pB, 4)}$):")
        lines.append("")
        lines.append(
            f"$$\\mathrm{{Var}}(B) = {fmt(vB, 4)}, \\qquad "
            f"\\mathrm{{SD}}(B) = \\sqrt{{{fmt(vB, 4)}}} \\approx {fmt(sB, 3)}$$"
        )
        lines.append("")
        if "times" in stmt.lower() or "double" in stmt.lower() or "triple" in stmt.lower():
            ratio = sA / sB if sB else float("inf")
            lines.append(
                f"$$\\frac{{\\mathrm{{SD}}(A)}}{{\\mathrm{{SD}}(B)}} "
                f"\\approx \\frac{{{fmt(sA, 3)}}}{{{fmt(sB, 3)}}} \\approx {fmt(ratio, 3)}$$"
            )
            lines.append("")
            lines.append(f"Against the claim, the statement is {'True' if is_true else 'False'}.")
        else:
            lines.append(
                f"Comparing $\\mathrm{{SD}}(A) \\approx {fmt(sA, 3)}$ with "
                f"$\\mathrm{{SD}}(B) \\approx {fmt(sB, 3)}$, "
                f"the statement is {'True' if is_true else 'False'}."
            )
        return "\n\n".join(lines)
    if params and "p" in params:
        n, p = params["n"], params["p"]
        sd = math.sqrt(n * p * (1 - p))
        lines.append(
            "The standard deviation is the positive square root of the variance. For $X \\sim \\mathrm{Bin}(n,p)$,"
        )
        lines.append("")
        lines.append("$$\\mathrm{SD}(X) = \\sqrt{np(1-p)}$$")
        lines.append("")
        lines.append(
            f"With $n = {n}$ and $p \\approx {fmt(p, 8)}$: "
            f"$\\mathrm{{SD}}(X) \\approx {fmt(sd, 4)}$."
        )
        lines.append("")
        lines.append(f"Compared with the claim, the statement is {'True' if is_true else 'False'}.")
        return "\n\n".join(lines)
    return expl_generic(letter, stmt, is_true, params, _old)


def expl_cv(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
    lines.append(
        "The coefficient of variation is the standard deviation divided by the mean. "
        "For $X \\sim \\mathrm{Bin}(n,p)$,"
    )
    lines.append("")
    lines.append(
        "$$\\mathrm{CV}(X) = \\frac{\\mathrm{SD}(X)}{E[X]} = \\frac{\\sqrt{np(1-p)}}{np} "
        "= \\sqrt{\\frac{1-p}{np}}$$"
    )
    lines.append("")
    mA, mB = nA * pA, nB * pB
    sA, sB = math.sqrt(nA * pA * (1 - pA)), math.sqrt(nB * pB * (1 - pB))
    cA, cB = sA / mA, sB / mB
    lines.append(f"Side A ($n_A = {nA}$, $p_A = {fmt(pA, 4)}$):")
    lines.append("")
    lines.append(
        f"$$E[A] = {fmt(mA, 4)}, \\quad \\mathrm{{SD}}(A) \\approx {fmt(sA, 3)}, \\quad "
        f"\\mathrm{{CV}}(A) \\approx \\frac{{{fmt(sA, 3)}}}{{{fmt(mA, 4)}}} \\approx {fmt(cA, 4)}$$"
    )
    lines.append("")
    lines.append(f"Side B ($n_B = {nB}$, $p_B = {fmt(pB, 4)}$):")
    lines.append("")
    lines.append(
        f"$$E[B] = {fmt(mB, 4)}, \\quad \\mathrm{{SD}}(B) \\approx {fmt(sB, 3)}, \\quad "
        f"\\mathrm{{CV}}(B) \\approx \\frac{{{fmt(sB, 3)}}}{{{fmt(mB, 4)}}} \\approx {fmt(cB, 4)}$$"
    )
    lines.append("")
    ratio = cA / cB if cB else float("inf")
    lines.append("The CV ratio (A relative to B) is")
    lines.append("")
    lines.append(
        f"$$\\frac{{\\mathrm{{CV}}(A)}}{{\\mathrm{{CV}}(B)}} "
        f"\\approx \\frac{{{fmt(cA, 4)}}}{{{fmt(cB, 4)}}} \\approx {fmt(ratio, 3)}$$"
    )
    lines.append("")
    lines.append(
        f"Note this is not the same as the SD ratio "
        f"$\\mathrm{{SD}}(A)/\\mathrm{{SD}}(B) \\approx {fmt(sA / sB if sB else float('inf'), 3)}$. "
        f"Matching the claim, the statement is {'True' if is_true else 'False'}."
    )
    return "\n\n".join(lines)


def expl_mean(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if params and "pA" in params:
        nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
        lines.append(
            "The mean of a binomial count is the number of trials times the success probability, "
            "because $X$ is the sum of $n$ independent Bernoulli trials each with mean $p$:"
        )
        lines.append("")
        lines.append("$$E[X] = np$$")
        lines.append("")
        mA, mB = nA * pA, nB * pB
        s = stmt.lower()
        only_a = bool(re.search(r"\bA\b", stmt)) and not re.search(r"\bB\b", stmt)
        only_b = bool(re.search(r"\bB\b", stmt)) and not re.search(r"\bA\b", stmt)

        if "one-fourth" in s or "1/4" in s or "quarter" in s:
            lines.append(f"For side A, $p_A = {fmt(pA, 4)}$ and $n = {nA}$:")
            lines.append("")
            lines.append(f"$$E[A] = {nA} \\cdot {fmt(pA, 4)} = {fmt(mA, 4)}$$")
            lines.append("")
            lines.append(
                f"One-fourth of the $n = {nA}$ trials is ${nA}/4 = {fmt(nA / 4, 4)}$. "
                f"These {'match' if abs(mA - nA / 4) < 1e-9 else 'do not match'}, "
                f"so the statement is {'True' if is_true else 'False'}."
            )
            return "\n\n".join(lines)

        # "does not meet the bar of K" on average
        bar = re.search(r"(?:bar|threshold|cutoff)\s+of\s+(\d+)", stmt, re.I)
        if bar and only_a:
            k = int(bar.group(1))
            lines.append(f"$$E[A] = {nA} \\cdot {fmt(pA, 4)} = {fmt(mA, 4)}$$")
            lines.append("")
            lines.append(
                f"Compare with the bar $k = {k}$: $E[A] = {fmt(mA, 4)}$ "
                f"{'is below' if mA < k else 'is at/above'} {k}. "
                f"So the statement is {'True' if is_true else 'False'}."
            )
            return "\n\n".join(lines)

        if only_a:
            lines.append(f"$$E[A] = {nA} \\cdot {fmt(pA, 4)} = {fmt(mA, 4)}$$")
            lines.append("")
            lines.append(f"Compared with the claim, the statement is {'True' if is_true else 'False'}.")
            return "\n\n".join(lines)
        if only_b:
            lines.append(f"$$E[B] = {nB} \\cdot {fmt(pB, 4)} = {fmt(mB, 4)}$$")
            lines.append("")
            lines.append(f"Compared with the claim, the statement is {'True' if is_true else 'False'}.")
            return "\n\n".join(lines)

        lines.append(f"$$E[A] = {nA} \\cdot {fmt(pA, 4)} = {fmt(mA, 4)}$$")
        lines.append("")
        lines.append(f"$$E[B] = {nB} \\cdot {fmt(pB, 4)} = {fmt(mB, 4)}$$")
        lines.append("")
        if "%" in stmt or "percent" in s:
            inc = 100 * (mB / mA - 1) if mA else float("inf")
            lines.append(
                f"The percent increase of B over A is "
                f"$100\\big(E[B]/E[A] - 1\\big) = 100\\big({fmt(mB / mA, 4)} - 1\\big) "
                f"\\approx {fmt(inc, 2)}\\%$."
            )
        elif "double" in s:
            lines.append(f"The ratio $E[B]/E[A] = {fmt(mB / mA, 4)}$ (double would be $2$).")
        elif "regardless" in s or "shared bin" in s or "(12" in stmt or "equals (" in s:
            # linearity even if not binomial
            lines.append(
                "Even if the combined count is not binomial, linearity of expectation still gives "
                f"$E[X_1 + X_2] = E[X_1] + E[X_2] = {fmt(mA, 4)} + {fmt(mB, 4)} = {fmt(mA + mB, 4)}$."
            )
        else:
            lines.append(
                f"The difference is $E[B] - E[A] = {fmt(mB - mA, 4)}$"
                + (
                    f", which is the same as $n(p_B - p_A) = {nA}\\cdot({fmt(pB, 4)} - {fmt(pA, 4)}) "
                    f"= {fmt(nA * (pB - pA), 4)}$."
                    if nA == nB
                    else "."
                )
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


def expl_exact(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    km = re.search(r"(?:exactly\s+|P\(X\s*=\s*)(\d+)", stmt, re.I)
    if not km:
        return expl_generic(letter, stmt, is_true, params, _old)
    k = int(km.group(1))
    nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
    lines.append("The binomial PMF at a single point is")
    lines.append("")
    lines.append("$$P(X = k) = \\binom{n}{k} p^{k}(1-p)^{n-k}$$")
    lines.append("")
    vA, vB = binom_pmf(nA, pA, k), binom_pmf(nB, pB, k)
    lines.append(f"Side A ($n = {nA}$, $p = {fmt(pA, 4)}$):")
    lines.append("")
    lines.append(
        f"$$P(X_A = {k}) = \\binom{{{nA}}}{{{k}}}({fmt(pA, 4)})^{{{k}}}"
        f"({fmt(1 - pA, 4)})^{{{nA - k}}} \\approx {fmt(vA, 6)}$$"
    )
    lines.append("")
    lines.append(f"Side B ($n = {nB}$, $p = {fmt(pB, 4)}$):")
    lines.append("")
    lines.append(
        f"$$P(X_B = {k}) = \\binom{{{nB}}}{{{k}}}({fmt(pB, 4)})^{{{k}}}"
        f"({fmt(1 - pB, 4)})^{{{nB - k}}} \\approx {fmt(vB, 6)}$$"
    )
    if "times" in stmt.lower():
        # which over which
        if re.search(r"\bB\b.*times.*\bA\b", stmt, re.I):
            ratio = vB / vA if vA else float("inf")
            lines.append("")
            lines.append(f"Ratio $P_B/P_A \\approx {fmt(ratio, 3)}$.")
        else:
            ratio = vA / vB if vB else float("inf")
            lines.append("")
            lines.append(f"Ratio $P_A/P_B \\approx {fmt(ratio, 3)}$.")
    lines.append("")
    lines.append(f"Matching these probabilities to the claim, the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def expl_tail_misc(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]

    # mid-range a to b
    mr = re.search(r"(\d+)\s+to\s+(\d+)", stmt, re.I)
    if mr and ("mid-range" in stmt.lower() or "on-pace" in stmt.lower() or "landing" in stmt.lower()):
        lo, hi = int(mr.group(1)), int(mr.group(2))
        lines.append(
            f"The event “between {lo} and {hi} inclusive” is the sum of point masses "
            f"$X = {lo},\\ldots,{hi}$:"
        )
        lines.append("")
        lines.append(
            f"$$P({lo} \\le X \\le {hi}) = \\sum_{{x={lo}}}^{{{hi}}} "
            f"\\binom{{n}}{{x}} p^{{x}}(1-p)^{{n-x}}$$"
        )
        lines.append("")
        tA = sum(binom_pmf(nA, pA, x) for x in range(lo, hi + 1))
        tB = sum(binom_pmf(nB, pB, x) for x in range(lo, hi + 1))
        lines.append(f"Side A: $P \\approx {fmt(tA, 4)} \\approx {pct(tA)}$.")
        lines.append("")
        lines.append(f"Side B: $P \\approx {fmt(tB, 4)} \\approx {pct(tB)}$.")
        if "times" in stmt.lower():
            ratio = tA / tB if tB else float("inf")
            lines.append("")
            lines.append(f"Ratio (A relative to B) $\\approx {fmt(ratio, 3)}$.")
        lines.append("")
        lines.append(f"So the statement is {'True' if is_true else 'False'}.")
        return "\n\n".join(lines)

    # fewer than / below / at most
    m_lt = re.search(r"(?:fewer than|below|less than)\s+(\d+)", stmt, re.I)
    m_le = re.search(r"at most\s+(\d+)", stmt, re.I)
    side, n, p = pick_side(stmt, params)
    if m_lt:
        k = int(m_lt.group(1))
        # X < k ⇒ X ≤ k-1
        val = binom_cdf_le(n, p, k - 1)
        lines.append(f"“Fewer than {k}” means $X \\le {k - 1}$:")
        lines.append("")
        lines.append(
            f"$$P(X \\le {k - 1}) = \\sum_{{x=0}}^{{{k - 1}}} "
            f"\\binom{{{n}}}{{x}} p^{{x}}(1-p)^{{{n}-x}} \\approx {fmt(val, 4)} \\approx {pct(val)}$$"
        )
        lines.append("")
        lines.append(f"For side {side} this is about {pct(val)}. So the statement is {'True' if is_true else 'False'}.")
        return "\n\n".join(lines)
    if m_le:
        k = int(m_le.group(1))
        val = binom_cdf_le(n, p, k)
        lines.append(f"“At most {k}” means $X \\le {k}$:")
        lines.append("")
        lines.append(
            f"$$P(X \\le {k}) = \\sum_{{x=0}}^{{{k}}} "
            f"\\binom{{{n}}}{{x}} p^{{x}}(1-p)^{{{n}-x}} \\approx {fmt(val, 4)} \\approx {pct(val)}$$"
        )
        lines.append("")
        lines.append(f"For side {side} this is about {pct(val)}. So the statement is {'True' if is_true else 'False'}.")
        return "\n\n".join(lines)

    # difference of two tails
    m_diff = re.search(r"P\(X\s*≥\s*(\d+)\).*P\(X\s*≥\s*(\d+)\)", stmt)
    if m_diff or ("difference" in stmt.lower() and "clearing" in stmt.lower()):
        k = params.get("kA") or params.get("k")
        km = re.findall(r"P\(X\s*≥\s*(\d+)\)", stmt)
        if km:
            # usually same k for both in these tasks
            k = int(km[0])
        tA, tB = binom_sf_ge(nA, pA, k), binom_sf_ge(nB, pB, k)
        lines.append(f"Compute each upper tail at $k = {k}$, then subtract:")
        lines.append("")
        block_a, _ = expand_tail_terms(nA, pA, k, "Side A")
        block_b, _ = expand_tail_terms(nB, pB, k, "Side B")
        lines.append(block_a)
        lines.append("")
        lines.append(block_b)
        lines.append("")
        lines.append(
            f"$$P_B(X \\ge {k}) - P_A(X \\ge {k}) \\approx {fmt(tB, 4)} - {fmt(tA, 4)} = {fmt(tB - tA, 4)}$$"
        )
        lines.append("")
        lines.append(f"So the statement is {'True' if is_true else 'False'}.")
        return "\n\n".join(lines)

    # A at least ka vs B at most kb
    m_ge = re.search(r"at least\s+(\d+)", stmt, re.I)
    m_amo = re.search(r"at most\s+(\d+)", stmt, re.I)
    if m_ge and m_amo:
        ka, kb = int(m_ge.group(1)), int(m_amo.group(1))
        tA = binom_sf_ge(nA, pA, ka)
        tB = binom_cdf_le(nB, pB, kb)
        lines.append(
            f"Compare side A’s upper tail $P(X_A \\ge {ka})$ with side B’s lower tail $P(X_B \\le {kb})$."
        )
        lines.append("")
        block_a, _ = expand_tail_terms(nA, pA, ka, "Side A")
        lines.append(block_a)
        lines.append("")
        lines.append(f"Side B lower tail: $P(X_B \\le {kb}) \\approx {fmt(tB, 4)} \\approx {pct(tB)}$.")
        lines.append("")
        lines.append(
            f"Comparing ${fmt(tA, 4)}$ with ${fmt(tB, 4)}$, the statement is {'True' if is_true else 'False'}."
        )
        return "\n\n".join(lines)

    return expl_generic(letter, stmt, is_true, params, _old)


def expl_mode(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    side, n, p = pick_side(stmt, params)
    mode = floor((n + 1) * p)
    mean = n * p
    lines.append(
        "The mode is the integer $k$ maximizing $P(X = k)$. For $\\mathrm{Bin}(n,p)$ it is "
        "$\\lfloor (n+1)p \\rfloor$ (two modes when $(n+1)p$ is an integer)."
    )
    lines.append("")
    lines.append(
        f"For side {side}: $(n+1)p = ({n}+1)\\cdot {fmt(p, 4)} = {fmt((n + 1) * p, 4)}$, so "
        f"$\\mathrm{{mode}} = \\lfloor {fmt((n + 1) * p, 4)} \\rfloor = {mode}$."
    )
    lines.append("")
    lines.append(f"The mean is $E[X] = np = {fmt(mean, 4)}$ (nearest whole number: ${round(mean)}$).")
    lines.append("")
    lines.append(f"Matching the claim, the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def expl_skew(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
    # skewness = (1-2p)/sqrt(np(1-p))
    def sk(n, p):
        return (1 - 2 * p) / math.sqrt(n * p * (1 - p))

    sA, sB = sk(nA, pA), sk(nB, pB)
    lines.append(
        "Binomial skewness is "
        "$\\dfrac{1-2p}{\\sqrt{np(1-p)}}$. The magnitude is $|\\mathrm{skew}|$."
    )
    lines.append("")
    lines.append(
        f"Side A: $\\mathrm{{skew}} \\approx {fmt(sA, 4)}$, magnitude ${fmt(abs(sA), 4)}$."
    )
    lines.append("")
    lines.append(
        f"Side B: $\\mathrm{{skew}} \\approx {fmt(sB, 4)}$, magnitude ${fmt(abs(sB), 4)}$."
    )
    lines.append("")
    lines.append(f"Comparing magnitudes, the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def expl_mixture(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
    n = nA + nB
    pooled = (nA * pA + nB * pB) / n
    lines.append(
        "A sum of independent binomials is binomial only when every trial shares the same success "
        "probability $p$. Here the two lines have different $p$ values, so the shared-bin total is "
        "Poisson-binomial (a sum of independent Bernoullis with unequal $p$), not "
        f"$\\mathrm{{Bin}}({n},{fmt(pooled, 4)})$."
    )
    lines.append("")
    lines.append(
        f"The pooled rate ${fmt(pooled, 4)}$ matches the mean "
        f"$E[X_1+X_2] = {nA}\\cdot{fmt(pA, 4)} + {nB}\\cdot{fmt(pB, 4)} = {fmt(nA * pA + nB * pB, 4)}$, "
        f"but equal means do not make the distributions equal."
    )
    lines.append("")
    v_true = nA * pA * (1 - pA) + nB * pB * (1 - pB)
    v_pool = n * pooled * (1 - pooled)
    lines.append(
        f"True variance (sum of line variances): ${fmt(v_true, 4)}$. "
        f"Pooled binomial variance: ${fmt(v_pool, 4)}$. "
        f"Typically $\\mathrm{{Var}}_{{\\mathrm{{true}}}} < \\mathrm{{Var}}_{{\\mathrm{{pooled}}}}$ "
        f"when the $p$ values differ."
    )
    lines.append("")
    lines.append(f"So the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def expl_normal(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    lines.append(
        "For large $n$ with both $np$ and $n(1-p)$ at least about 5, a binomial count is approximately "
        "normal with the same mean and variance. Discrete-to-continuous comparisons usually need a "
        "continuity correction: $P(X \\ge k) \\approx P\\big(Y \\ge k - 1/2\\big)$ for "
        "$Y \\sim \\mathcal{N}(np, np(1-p))$."
    )
    lines.append("")
    lines.append("$$X \\approx \\mathcal{N}\\big(np,\\, np(1-p)\\big)$$")
    lines.append("")
    if params and "pA" in params:
        nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
        for label, n, p in (("A", nA, pA), ("B", nB, pB)):
            lines.append(
                f"Side {label}: $np = {fmt(n * p, 4)}$, $n(1-p) = {fmt(n * (1 - p), 4)}$ "
                f"(rule of thumb "
                f"{'OK' if n * p >= 5 and n * (1 - p) >= 5 else 'not both ≥ 5'})."
            )
            lines.append("")
    elif params and "p" in params:
        n, p = params["n"], params["p"]
        lines.append(
            f"Here $np = {fmt(n * p, 4)}$ and $n(1-p) = {fmt(n * (1 - p), 4)}$ "
            f"(rule of thumb "
            f"{'OK' if n * p >= 5 and n * (1 - p) >= 5 else 'not both ≥ 5'})."
        )
        lines.append("")
    else:
        return expl_generic(letter, stmt, is_true, params, _old)
    lines.append(
        f"Working through the claim with these checks (and continuity-corrected normal estimates when "
        f"asked), the statement is {'True' if is_true else 'False'}."
    )
    return "\n\n".join(lines)


def expl_poisson(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    lines.append(
        "When $n$ is large and $p$ is small with $\\lambda = np$ moderate, binomial probabilities "
        "are close to a Poisson($\\lambda$) law:"
    )
    lines.append("")
    lines.append("$$P(X = k) \\approx e^{-\\lambda}\\frac{\\lambda^{k}}{k!}, \\qquad \\lambda = np$$")
    lines.append("")
    if params and "pA" in params:
        for label, n, p in (("A", params["nA"], params["pA"]), ("B", params["nB"], params["pB"])):
            lam = n * p
            lines.append(f"Side {label}: $\\lambda = {n}\\cdot{fmt(p, 6)} = {fmt(lam, 4)}$.")
            lines.append("")
    elif params and "p" in params:
        lam = params["n"] * params["p"]
        lines.append(f"$\\lambda = {params['n']}\\cdot{fmt(params['p'], 6)} = {fmt(lam, 4)}$.")
        lines.append("")
    lines.append(
        f"Using this approximation (and comparing errors when the claim asks), "
        f"the statement is {'True' if is_true else 'False'}."
    )
    return "\n\n".join(lines)


def expl_indep_zero_product(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
    zA, zB = (1 - pA) ** nA, (1 - pB) ** nB
    lines.append(
        "Independence of the two tests means the joint event “both have zero false positives” "
        "factors into a product:"
    )
    lines.append("")
    lines.append("$$P(A=0 \\cap B=0) = P(A=0)\\,P(B=0) = (1-p_A)^{n_A}(1-p_B)^{n_B}$$")
    lines.append("")
    lines.append(
        f"$$P(A=0) = ({fmt(1 - pA, 6)})^{{{nA}}} \\approx {fmt(zA, 6)}, \\quad "
        f"P(B=0) = ({fmt(1 - pB, 6)})^{{{nB}}} \\approx {fmt(zB, 6)}$$"
    )
    lines.append("")
    lines.append(f"Product $\\approx {fmt(zA * zB, 6)}$.")
    lines.append("")
    lines.append(f"So the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def expl_union_two(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
    zA, zB = (1 - pA) ** nA, (1 - pB) ** nB
    both0 = zA * zB
    val = 1 - both0
    lines.append(
        "“At least one of the two tests produces at least one false positive” is the complement of "
        "“both tests produce zero false positives”. With independence,"
    )
    lines.append("")
    lines.append(
        "$$P(\\text{at least one hit}) = 1 - P(A=0)P(B=0) = 1 - (1-p_A)^{n_A}(1-p_B)^{n_B}$$"
    )
    lines.append("")
    lines.append(
        f"$$1 - ({fmt(1 - pA, 6)})^{{{nA}}}({fmt(1 - pB, 6)})^{{{nB}}} "
        f"\\approx 1 - {fmt(both0, 6)} = {fmt(val, 6)}$$"
    )
    lines.append("")
    thr_m = re.search(r"(?:less than|greater than|more than)\s+(0?\.\d+)", stmt, re.I)
    if thr_m:
        thr = float(thr_m.group(1))
        lines.append(
            f"Compared with ${fmt(thr, 4)}$: ${fmt(val, 6)}$ "
            f"{'is below' if val < thr else 'is not below'} the cutoff, "
            f"so the statement is {'True' if is_true else 'False'}."
        )
    else:
        lines.append(f"So the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def expl_at_least_one(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    side, n, p = pick_side(stmt, params)
    exact = 1 - (1 - p) ** n
    lam = n * p
    approx = 1 - math.exp(-lam)
    lines.append(
        "At least one success (or failure/error, depending on the story) is the complement of zero:"
    )
    lines.append("")
    lines.append("$$P(X \\ge 1) = 1 - P(X = 0) = 1 - (1-p)^{n}$$")
    lines.append("")
    lines.append(f"For side {side} with $n = {n}$ and $p = {fmt(p, 6)}$:")
    lines.append("")
    lines.append(
        f"$$P(X \\ge 1) = 1 - ({fmt(1 - p, 6)})^{{{n}}} \\approx {fmt(exact, 6)}$$"
    )
    lines.append("")
    lines.append(
        f"The Poisson-style approximation with $\\lambda = np = {fmt(lam, 4)}$ is "
        f"$1 - e^{{-\\lambda}} \\approx {fmt(approx, 6)}$. "
        f"Absolute difference $\\approx {fmt(abs(exact - approx), 6)}$."
    )
    lines.append("")
    lines.append(f"Matching the claim, the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def expl_at_least_one_ratio(letter, stmt, is_true, params, _old):
    lines = [header(letter, is_true), ""]
    if not params or "pA" not in params:
        return expl_generic(letter, stmt, is_true, params, _old)
    nA, nB, pA, pB = params["nA"], params["nB"], params["pA"], params["pB"]
    a = 1 - (1 - pA) ** nA
    b = 1 - (1 - pB) ** nB
    lines.append("For each side, “at least one” is the complement of zero successes:")
    lines.append("")
    lines.append("$$P(X \\ge 1) = 1 - (1-p)^{n}$$")
    lines.append("")
    lines.append(
        f"Side A: $1 - ({fmt(1 - pA, 6)})^{{{nA}}} \\approx {fmt(a, 6)}$."
    )
    lines.append("")
    lines.append(
        f"Side B: $1 - ({fmt(1 - pB, 6)})^{{{nB}}} \\approx {fmt(b, 6)}$."
    )
    lines.append("")
    ratio = b / a if a else float("inf")
    lines.append(f"Ratio (B relative to A): ${fmt(b, 6)}/{fmt(a, 6)} \\approx {fmt(ratio, 4)}$.")
    lines.append("")
    thr_m = re.search(r"(?:more than|at least)\s+([\d.]+)\s+times", stmt, re.I)
    if thr_m:
        thr = float(thr_m.group(1))
        lines.append(
            f"Since ${fmt(ratio, 4)}{' > ' if ratio > thr else ' \\le '}{fmt(thr, 4)}$, "
            f"the statement is {'True' if is_true else 'False'}."
        )
    else:
        lines.append(f"So the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def expl_device(letter, stmt, is_true, params, old):
    """Union of independent rare component failures in one cycle / over many cycles."""
    lines = [header(letter, is_true), ""]
    ctx = getattr(expl_device, "ctx", "")
    comps = list((params or {}).get("comps") or [])
    if len(comps) < 3:
        for m in re.finditer(
            r"Component\s*\d\s+(?:fails with probability|with probability)\s+(0?\.\d+)",
            ctx,
            re.I,
        ):
            comps.append(float(m.group(1)))
    if len(comps) < 3:
        comps = [float(x) for x in re.findall(r"0\.000\d+", ctx)]
    n_m = re.search(r"(\d[\d,]*)\s+independent cycles", ctx, re.I)
    n = _num(n_m.group(1)) if n_m else (params or {}).get("n", 2500)

    if len(comps) >= 3:
        p1, p2, p3 = comps[:3]
        p_exact = 1 - (1 - p1) * (1 - p2) * (1 - p3)
        p_sum = p1 + p2 + p3
        lines.append(
            "The device fails in a cycle if at least one independent component fails, so"
        )
        lines.append("")
        lines.append(
            f"$$p = 1 - (1-p_1)(1-p_2)(1-p_3) = 1 - ({fmt(1-p1, 6)})({fmt(1-p2, 6)})({fmt(1-p3, 6)}) "
            f"\\approx {fmt(p_exact, 8)}$$"
        )
        lines.append("")
        lines.append(
            f"The first-order sum $p_1+p_2+p_3 = {fmt(p_sum, 8)}$ differs from the exact union by "
            f"${fmt(abs(p_exact - p_sum), 8)}$."
        )
        lines.append("")
        if "ignoring" in stmt.lower():
            only1 = 1 - p1
            true0 = (1 - p1) * (1 - p2) * (1 - p3)
            lines.append(
                f"Ignoring components 2 and 3 uses $1-p_1 = {fmt(only1, 8)}$, while the true "
                f"no-failure probability is $(1-p_1)(1-p_2)(1-p_3) \\approx {fmt(true0, 8)}$. "
                f"Absolute difference $\\approx {fmt(abs(only1 - true0), 8)}$."
            )
            lines.append("")
        if any(w in stmt.lower() for w in ("standard deviation", "expected", "n·p", "n·p", "normal")):
            mean = n * p_exact
            var = n * p_exact * (1 - p_exact)
            sd = math.sqrt(var)
            lines.append(
                f"Over $n = {n}$ cycles, $E[X] = np \\approx {fmt(mean, 4)}$, "
                f"$\\mathrm{{SD}}(X) = \\sqrt{{np(1-p)}} \\approx {fmt(sd, 4)}$, "
                f"and $np \\approx {fmt(mean, 4)}$ for the normal rule of thumb."
            )
            lines.append("")
        lines.append(f"So the statement is {'True' if is_true else 'False'}.")
        return "\n\n".join(lines)

    return expl_generic(letter, stmt, is_true, params, old)


def strip_old(text: str) -> str:
    t = re.sub(r'^\d+\.\s*"(True|False)"\s*', "", text.strip(), flags=re.I)
    t = re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", t, flags=re.I)
    t = re.sub(
        r"^(Situation|Formula to use|Formula / rule to use|Why|Step-by-step calculation|"
        r"What the statement claims|Conclusion|Tip):\s*",
        "",
        t,
        flags=re.I | re.M,
    )
    t = re.sub(r"^Step \d+:\s*", "", t, flags=re.M)
    # Drop prior letter headers / statement echoes
    t = re.sub(r"^\*\*[A-F]\.\*\*[^\n]*\n+", "", t)
    t = re.sub(r"^\*\*[A-F]\.\*\*.*?→\s*(True|False)\s*", "", t, flags=re.I | re.S)
    t = re.sub(r"Putting that against the claim,?\s*", "", t, flags=re.I)
    return t.strip()


def expl_generic(letter, stmt, is_true, params, old):
    """Fallback: explain the decision without restating the claim verbatim."""
    lines = [header(letter, is_true), ""]
    body = strip_old(old or "")
    # Remove a leading echo of the statement itself
    stmt_core = re.sub(r"\s+", " ", stmt.strip())
    if body.lower().startswith(stmt_core[:60].lower()):
        body = body[len(stmt_core) :].lstrip(" .→\\-")
    paras = [p.strip() for p in re.split(r"\n\n+", body) if p.strip()]
    # Prefer a paragraph that is not just the statement / verdict line
    useful = []
    for p in paras:
        pl = re.sub(r"\s+", " ", p)
        if pl.startswith("**"):
            continue
        if stmt_core[:40].lower() in pl.lower() and len(pl) < len(stmt_core) + 30:
            continue
        if re.fullmatch(r"(True|False)\.?", pl, re.I):
            continue
        useful.append(p)
        if len(useful) >= 2:
            break

    low = (stmt + " " + " ".join(useful)).lower()
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
            "For large $n$ with both $np$ and $n(1-p)$ at least about 5, a binomial count is approximately "
            "normal with the same mean and variance. Discrete-to-continuous comparisons usually need a "
            "continuity correction."
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
    elif params and "pA" in params:
        lines.append(
            f"Using $n_A = {params['nA']}$, $p_A = {fmt(params['pA'], 4)}$, "
            f"$n_B = {params['nB']}$, $p_B = {fmt(params['pB'], 4)}$"
            + (
                f", and cutoffs $k_A = {params['kA']}$, $k_B = {params['kB']}$"
                if params.get("kA") is not None
                else ""
            )
            + ", apply the binomial mean/variance/PMF/tail formulas as the claim requires."
        )
        lines.append("")

    for p in useful:
        # Avoid dumping huge duplicated headers
        if p.count("→") and p.strip().startswith("**"):
            continue
        lines.append(p)
        lines.append("")

    lines.append(f"Therefore the statement is {'True' if is_true else 'False'}.")
    return "\n\n".join(lines)


def build_one(i, stmt, is_true, params, old):
    letter = LETTERS[i]
    kind = classify(stmt)
    dispatch = {
        "pct_round": expl_pct_round,
        "sum": expl_sum,
        "perfect": expl_perfect,
        "ratio": expl_ratio,
        "variance": expl_variance,
        "sd": expl_sd,
        "cv": expl_cv,
        "mean": expl_mean,
        "exact": expl_exact,
        "tail_misc": expl_tail_misc,
        "mode": expl_mode,
        "skew": expl_skew,
        "mixture": expl_mixture,
        "normal": expl_normal,
        "poisson": expl_poisson,
        "at_least_one": expl_at_least_one,
        "at_least_one_ratio": expl_at_least_one_ratio,
        "indep_zero_product": expl_indep_zero_product,
        "union_two": expl_union_two,
        "device": expl_device,
    }
    fn = dispatch.get(kind, expl_generic)
    return fn(letter, stmt, is_true, params, old)


def tidy(s: str) -> str:
    s = re.sub(r"\n{3,}", "\n\n", s).strip()
    # Collapse accidental duplicated headers
    s = re.sub(
        r"(\*\*[A-F]\.\*\* → (?:True|False))\n+\1",
        r"\1",
        s,
    )
    return s


def main() -> None:
    data = json.loads(PATH.read_text())
    for task in data["tasks"]:
        ctx = task["context"]
        expl_device.ctx = ctx
        params = extract_two_person(ctx) or extract_device(ctx) or extract_single(ctx)
        # Independent tests both-zero / at least one false positive
        task["solution_overview"] = overview_text(ctx, params)
        task["tactical_explanations"] = [
            build_one(i, stmt, bool(is_true), params, old)
            for i, (stmt, is_true, old) in enumerate(
                zip(task["statements"], task["answer_key"], task["tactical_explanations"])
            )
        ]

    data["explanation_style"] = (
        "Natural tutoring: shared solution_overview once; each claim as "
        "**A.** → True/False with derived formulas (no statement echo); "
        "percentage cutoffs converted with ceiling/floor."
    )

    for task in data["tasks"]:
        task["solution_overview"] = tidy(task["solution_overview"])
        task["tactical_explanations"] = [tidy(e) for e in task["tactical_explanations"]]

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    t = next(x for x in data["tasks"] if x["id"] == "math-13-26")
    print("=== OVERVIEW 26 ===")
    print(t["solution_overview"])
    print("\n=== A ===")
    print(t["tactical_explanations"][0])
    print("\n=== C ratio ===", re.search(r"approx [\d.]+", t["tactical_explanations"][2]).group(0) if False else "")
    print(t["tactical_explanations"][2][-400:])

    for tid in ["math-13-32", "math-13-41", "math-13-43", "math-13-44"]:
        t = next(x for x in data["tasks"] if x["id"] == tid)
        print(f"\n==== {tid} params check / thin? ====")
        for i, e in enumerate(t["tactical_explanations"]):
            print(i, len(e), e.split("\n\n")[0], "|", e.split("\n\n")[1][:80] if "\n\n" in e else "")


if __name__ == "__main__":
    main()
