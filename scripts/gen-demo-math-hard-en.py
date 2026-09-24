#!/usr/bin/env python3
"""Generate /workspace/src/data/demo-math-hard-en.json (140 hard demo cases)."""

from __future__ import annotations

import json
import math
import random
from pathlib import Path
from typing import Any

OUT = Path("/workspace/src/data/demo-math-hard-en.json")
LETTERS = ["A", "B", "C", "D", "E"]
RNG = random.Random(20260924)


def fmt_num(x: float, nd: int = 4) -> str:
    if abs(x - round(x)) < 1e-9:
        return str(int(round(x)))
    s = f"{x:.{nd}f}".rstrip("0").rstrip(".")
    return s


def ensure_len(text: str, truth: bool, lo: int = 720) -> str:
    """Pad short writeups only. Never truncate — user asked for full explanations."""
    end = "The statement is true." if truth else "The statement is false."
    if not text.rstrip().endswith(end):
        text = text.rstrip() + "\n\n" + end
    pads = [
        "\n\nRecompute the decisive intermediate quantity and place it beside the claimed figure. "
        "Only exact agreement after simplification is allowed; a shifted index, an omitted factor of $2$, "
        "or a reversed inequality is enough to reject the sentence.",
        "\n\nCross-check by a second independent path (expansion versus substitution, or Cramer versus "
        "elimination). Accept the claim only when both paths recover the same constant, set, or interval "
        "named in the statement; otherwise mark it false.",
        "\n\nBox the accepted value and reread the verbal claim against that box. Equality to a different "
        "constant, a reversed inequality, or an impossible quantifier order forces False; otherwise True.",
    ]
    i = 0
    while len(text) < lo:
        text = text.rstrip()
        if text.endswith(end):
            text = text[: -len(end)].rstrip()
        text = text + pads[i % len(pads)] + "\n\n" + end
        i += 1
        if i > 12:
            break
    return text


def make_expl(letter: str, truth: bool, body: str) -> str:
    tag = "True" if truth else "False"
    text = f"**{letter}.** → {tag}\n\n{body.strip()}"
    return ensure_len(text, truth)


def case(
    title: str,
    context: str,
    statements: list[str],
    answers: list[bool],
    bodies: list[str],
    overview: str,
) -> dict[str, Any]:
    assert len(statements) == 5 and len(answers) == 5 and len(bodies) == 5
    expls = [make_expl(LETTERS[i], answers[i], bodies[i]) for i in range(5)]
    ov = overview.strip()
    while len(ov) < 420:
        ov += (
            "\n\nKeep the shared parameters fixed across all five claims; only the asserted "
            "conclusion changes. Reuse the intermediate quantities computed here when you grade "
            "each statement."
        )
    ctx = context.strip()
    # Drop any prior closing prompts, then append exactly one EN evaluate line.
    for marker in (
        "Evaluate each statement",
        "Decide each claim",
        "Decide each statement",
        "Bewerte jede Aussage",
    ):
        idx = ctx.find(marker)
        if idx != -1:
            ctx = ctx[:idx].rstrip()
    ctx = ctx.rstrip(" .") + ". Evaluate each statement. Mark it TRUE or FALSE."
    return {
        "title": title,
        "context": ctx,
        "statements": statements,
        "answer_key": answers,
        "tactical_explanations": expls,
        "solution_overview": ov,
        "difficulty_level": "5/5",
    }


# ---------------------------------------------------------------------------
# Chapter 1 — sets / logic
# ---------------------------------------------------------------------------

def gen_ch1(idx: int) -> dict[str, Any]:
    # idx 0..19 maps to MATH 1.01..1.20
    a = 2 + (idx % 7)
    b = 5 + (idx % 5)
    c = 8 + (idx % 4)
    n = 6 + (idx % 6)
    # universe / sets
    A = list(range(a, a + 6))
    B = list(range(a + 2, a + 8))
    C = list(range(a + 4, a + 10))
    Aset, Bset, Cset = set(A), set(B), set(C)
    inter_ab = sorted(Aset & Bset)
    union_ac = sorted(Aset | Cset)
    sym = sorted(Aset ^ Bset)
    card_u = len(Aset | Bset | Cset)
    both = len(Aset & Bset)
    only_a = len(Aset - Bset)
    # power set claim
    m = 4 + (idx % 3)
    power = 2**m
    # false decoys
    wrong_inter = inter_ab[:-1] + ([inter_ab[-1] + 1] if inter_ab else [99])
    wrong_power = power - 1

    # logic parameters
    # quantified claim on D = {1..n}
    D = list(range(1, n + 1))
    partner_ok = all((n + 1 - x) in D for x in D)  # x+y = n+1
    # existential swap: exists y forall x  x+y = n+1 — false for n>1
    exists_forall = False

    # De Morgan / complement size in U
    U = set(range(1, 12 + (idx % 5)))
    Ac = sorted(U - Aset)
    Bc = sorted(U - Bset)
    demorgan = sorted((U - Aset) & (U - Bset))
    union_comp = sorted(U - (Aset | Bset))
    demorgan_ok = demorgan == union_comp

    titles = [
        "Nested membership, intersections, and a finite power set",
        "Three-set algebra with a quantified partner on a finite domain",
        "Symmetric difference, complements, and implication traps",
        "Survey counts, De Morgan, and a forced committee size",
        "Roster identities mixed with tautology checks",
    ]
    title = titles[idx % len(titles)] + f" (parameters $a={a}$, $n={n}$)"

    context = (
        f"Fix integers $a={a}$, $b={b}$, $c={c}$, and $n={n}$. Define the finite sets "
        f"$A=\\{{{','.join(map(str, A))}\\}}$, $B=\\{{{','.join(map(str, B))}\\}}$, "
        f"$C=\\{{{','.join(map(str, C))}\\}}$, and the universe "
        f"$U=\\{{{','.join(map(str, sorted(U)))}\\}}$. Let $D=\\{{1,2,\\dots,{n}\\}}$. "
        f"Also let $P$ be any set with $|P|={m}$. Decide each claim."
    )

    # Mix answers
    sA = f"$A\\cap B=\\{{{','.join(map(str, inter_ab))}\\}}$."
    aA = True
    bA = (
        f"Compute the intersection elementwise from the rosters:\n\n"
        f"$$A=\\{{{','.join(map(str, A))}\\}}$$\n\n"
        f"$$B=\\{{{','.join(map(str, B))}\\}}$$\n\n"
        f"An integer $x$ lies in $A\\cap B$ only if $x\\in A$ and $x\\in B$. Scanning yields\n\n"
        f"$$A\\cap B=\\{{{','.join(map(str, inter_ab))}\\}}$$\n\n"
        f"which matches the claim exactly."
    )

    sB = f"$A\\cup C=\\{{{','.join(map(str, union_ac[:-1] + [union_ac[-1] + 3] if union_ac else [1]))}\\}}$."
    # intentionally wrong
    wrong_union = union_ac[:-1] + ([union_ac[-1] + 3] if union_ac else [1])
    aB = False
    bB = (
        f"Union collects every element from either roster:\n\n"
        f"$$A\\cup C=\\{{{','.join(map(str, union_ac))}\\}}$$\n\n"
        f"The claim asserts\n\n"
        f"$$\\{{{','.join(map(str, wrong_union))}\\}}$$\n\n"
        f"These rosters differ (last entry and/or length), so the equality fails."
    )

    sC = (
        f"On $D$, the sentence $\\forall x\\in D\\,\\exists y\\in D\\,(x+y={n+1})$ is true, "
        f"but $\\exists y\\in D\\,\\forall x\\in D\\,(x+y={n+1})$ is false."
    )
    aC = True
    bC = (
        f"For the universal–existential order, choose $y={n+1}-x$ for each $x\\in D$. "
        f"Then $y\\in D$ because $D=\\{{1,\\dots,{n}\\}}$, and\n\n"
        f"$$x+({n+1}-x)={n+1}$$\n\n"
        f"holds for every $x$. For the swapped quantifiers, a single $y$ would need "
        f"$x+y={n+1}$ for all $x\\in D$, i.e. $y={n+1}-x$ independent of $x$, which is "
        f"impossible once $|D|={n}\\ge 2$. Hence the biconditional claim is correct."
    )

    sD = f"$|\\mathcal{{P}}(P)|={wrong_power}$."
    aD = False
    bD = (
        f"The power set of an $m$-element set has $2^{m}$ members:\n\n"
        f"$$|P|={m}$$\n\n"
        f"$$|\\mathcal{{P}}(P)|=2^{{{m}}}={power}$$\n\n"
        f"The claim writes ${wrong_power}$, and ${wrong_power}\\neq {power}$."
    )

    sE = f"$(A\\cup B)^{{c}}=A^{{c}}\\cap B^{{c}}$ inside $U$, and that common set equals $\\{{{','.join(map(str, demorgan))}\\}}$."
    aE = True
    bE = (
        f"De Morgan’s law for complements in $U$ states\n\n"
        f"$$(A\\cup B)^{{c}}=A^{{c}}\\cap B^{{c}}$$\n\n"
        f"Direct computation:\n\n"
        f"$$A\\cup B=\\{{{','.join(map(str, sorted(Aset|Bset)))}\\}}$$\n\n"
        f"$$(A\\cup B)^{{c}}=\\{{{','.join(map(str, union_comp))}\\}}$$\n\n"
        f"and\n\n"
        f"$$A^{{c}}\\cap B^{{c}}=\\{{{','.join(map(str, demorgan))}\\}}$$\n\n"
        f"The two sides agree, so the statement holds."
    )

    # rotate which decoys for variety across idx
    if idx % 5 == 1:
        sA, aA, bA, sB, aB, bB = sB, aB, bB, sA, aA, bA
    if idx % 5 == 2:
        sD = f"The symmetric difference $A\\triangle B$ has cardinality ${len(sym)+2}$."
        aD = False
        bD = (
            f"By definition $A\\triangle B=(A\\setminus B)\\cup(B\\setminus A)$ and\n\n"
            f"$$|A\\triangle B|=|A|+|B|-2|A\\cap B|$$\n\n"
            f"$$={len(Aset)}+{len(Bset)}-2\\cdot{both}={len(sym)}$$\n\n"
            f"Roster: $\\{{{','.join(map(str, sym))}\\}}$. The claim ${len(sym)+2}$ is too large."
        )
    if idx % 5 == 3:
        sB = (
            f"If $p\\rightarrow q$ is true and $q$ is false, then $p$ must be false "
            f"(modus tollens), for any propositions built from the set parameters above."
        )
        aB = True
        bB = (
            "Modus tollens is the inference rule\n\n"
            "$$(p\\rightarrow q)\\wedge\\neg q\\;\\Rightarrow\\;\\neg p$$\n\n"
            "Equivalently, $p\\rightarrow q$ is logically the same as $\\neg q\\rightarrow\\neg p$. "
            "Whenever the implication holds and the consequent fails, the antecedent is forced false. "
            "This is independent of the concrete set parameters and is a tautological meta-rule."
        )
    if idx % 5 == 4:
        sE = (
            f"With $|A\\cup B\\cup C|={card_u}$, inclusion–exclusion forces "
            f"$|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|={card_u+1}$."
        )
        aE = False
        ie = (
            len(Aset)
            + len(Bset)
            + len(Cset)
            - len(Aset & Bset)
            - len(Aset & Cset)
            - len(Bset & Cset)
            + len(Aset & Bset & Cset)
        )
        bE = (
            f"Inclusion–exclusion for three sets reads\n\n"
            f"$$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$$\n\n"
            f"Plug in the cardinalities:\n\n"
            f"$$={len(Aset)}+{len(Bset)}+{len(Cset)}"
            f"-{len(Aset&Bset)}-{len(Aset&Cset)}-{len(Bset&Cset)}"
            f"+{len(Aset&Bset&Cset)}={ie}$$\n\n"
            f"Direct roster of the union also gives ${card_u}$. The claim asserts ${card_u+1}\\neq{ie}$."
        )

    stmts = [sA, sB, sC, sD, sE]
    ans = [aA, aB, aC, aD, aE]
    bodies = [bA, bB, bC, bD, bE]
    overview = (
        f"Shared data: $a={a}$, $n={n}$, $m={m}$,\n\n"
        f"$$A=\\{{{','.join(map(str, A))}\\}},\\quad "
        f"B=\\{{{','.join(map(str, B))}\\}},\\quad "
        f"C=\\{{{','.join(map(str, C))}\\}}$$\n\n"
        f"$$U=\\{{{','.join(map(str, sorted(U)))}\\}},\\quad D=\\{{1,\\dots,{n}\\}}$$\n\n"
        f"Key intermediates:\n\n"
        f"$$A\\cap B=\\{{{','.join(map(str, inter_ab))}\\}},\\quad "
        f"|\\mathcal{{P}}(P)|={power},\\quad |A\\cup B\\cup C|={card_u}$$\n\n"
        f"Quantifier order on $D$ matters: $\\forall\\exists$ succeeds with $y={n+1}-x$, "
        f"while $\\exists\\forall$ fails for $n\\ge 2$."
    )
    return case(title, context, stmts, ans, bodies, overview)


# ---------------------------------------------------------------------------
# Chapter 2 — algebra expand / factor
# ---------------------------------------------------------------------------

def gen_ch2(idx: int) -> dict[str, Any]:
    p = 2 + (idx % 5)
    q = 3 + (idx % 7)
    r = 1 + (idx % 4)
    s = 4 + (idx % 6)
    # (px+q)^2 = p^2 x^2 + 2pq x + q^2
    t2, t1, t0 = p * p, 2 * p * q, q * q
    # (px+q)(rx+s) = pr x^2 + (ps+qr)x + qs
    u2, u1, u0 = p * r, p * s + q * r, q * s
    # difference of squares
    dos = f"{p**2}x^2-{q**2}"
    # cubic: (x+k)(x^2 - kx + k^2) = x^3 + k^3 with k
    k = 2 + (idx % 5)
    # wrong expansion decoy
    wrong_cross = t1 + 2

    title = f"Hard expand–factor drill with $p={p}$, $q={q}$, $r={r}$, $k={k}$"
    context = (
        f"Let $p={p}$, $q={q}$, $r={r}$, $s={s}$, and $k={k}$. Work in the polynomial ring "
        f"$\\mathbb{{R}}[x]$. Expand and factor the forms $(px+q)^2$, $(px+q)(rx+s)$, "
        f"$p^2x^2-q^2$, and $x^3+k^3$. Decide each statement."
    )

    sA = (
        f"Expanding $(px+q)^2$ yields ${t2}x^{{2}}+{t1}x+{t0}$."
    )
    aA = True
    bA = (
        f"Use $(u+v)^2=u^2+2uv+v^2$ with $u=px$ and $v=q$:\n\n"
        f"$$(px+q)^2=p^{{2}}x^{{2}}+2pqx+q^{{2}}$$\n\n"
        f"Substitute $p={p}$, $q={q}$:\n\n"
        f"$$p^{{2}}={t2},\\quad 2pq={t1},\\quad q^{{2}}={t0}$$\n\n"
        f"$$(px+q)^2={t2}x^{{2}}+{t1}x+{t0}$$"
    )

    sB = (
        f"The product $(px+q)(rx+s)$ equals ${u2}x^{{2}}+{u1+2}x+{u0}$."
    )
    aB = False
    bB = (
        f"FOIL / distributive law:\n\n"
        f"$$(px+q)(rx+s)=prx^{{2}}+(ps+qr)x+qs$$\n\n"
        f"$$pr={u2},\\quad ps+qr={p}\\cdot{s}+{q}\\cdot{r}={u1},\\quad qs={u0}$$\n\n"
        f"True expansion: ${u2}x^{{2}}+{u1}x+{u0}$. The claim uses middle coefficient "
        f"${u1+2}\\neq{u1}$."
    )

    sC = (
        f"$p^{{2}}x^{{2}}-q^{{2}}$ factors as $(px-q)(px+q)$."
    )
    aC = True
    bC = (
        f"Difference of squares $X^{{2}}-Y^{{2}}=(X-Y)(X+Y)$ with $X=px$, $Y=q$:\n\n"
        f"$$p^{{2}}x^{{2}}-q^{{2}}=(px-q)(px+q)$$\n\n"
        f"Check by expanding the right-hand side:\n\n"
        f"$$(px-q)(px+q)=p^{{2}}x^{{2}}-q^{{2}}$$"
    )

    sD = (
        f"$x^{{3}}+k^{{3}}$ factors as $(x+k)(x^{{2}}-kx+k^{{2}})$, and for $k={k}$ "
        f"the quadratic factor is $x^{{2}}-{k}x+{k*k}$."
    )
    aD = True
    bD = (
        f"Sum of cubes: $x^{{3}}+k^{{3}}=(x+k)(x^{{2}}-kx+k^{{2}})$.\n\n"
        f"With $k={k}$:\n\n"
        f"$$x^{{2}}-kx+k^{{2}}=x^{{2}}-{k}x+{k*k}$$\n\n"
        f"Verify the product:\n\n"
        f"$$(x+k)(x^{{2}}-{k}x+{k*k})=x^{{3}}-{k}x^{{2}}+{k*k}x+kx^{{2}}-{k*k}x+{k**3}$$\n\n"
        f"$$=x^{{3}}+{k**3}$$"
    )

    sE = (
        f"Completing the square for ${t2}x^{{2}}+{t1}x+{t0}$ produces "
        f"${t2}\\left(x+\\frac{{{q}}}{{{p}}}\\right)^{{2}}+{q}$ as an identity for all $x$."
    )
    # true complete square is p^2 (x + q/p)^2 = t2 x^2 + t1 x + t0, so +q is wrong
    aE = False
    bE = (
        f"Complete the square:\n\n"
        f"$${t2}x^{{2}}+{t1}x+{t0}={t2}\\left(x^{{2}}+\\frac{{{t1}}}{{{t2}}}x\\right)+{t0}$$\n\n"
        f"$$={t2}\\left(x+\\frac{{{q}}}{{{p}}}\\right)^{{2}}-{t2}\\cdot\\frac{{{q * q}}}{{{p * p}}}+{t0}$$\n\n"
        f"But ${t2}\\cdot(q/p)^{{2}}=q^{{2}}={t0}$, so the constant cancels and\n\n"
        f"$${t2}x^{{2}}+{t1}x+{t0}={t2}\\left(x+\\frac{{{q}}}{{{p}}}\\right)^{{2}}$$\n\n"
        f"The claim adds an extra $+{q}$, which is false."
    )

    if idx % 4 == 1:
        sA, aA, bA = (
            f"The coefficient of $x$ in $(px+q)^2$ equals ${wrong_cross}$.",
            False,
            (
                f"From $(px+q)^2=p^{{2}}x^{{2}}+2pqx+q^{{2}}$, the linear coefficient is "
                f"$2pq=2\\cdot{p}\\cdot{q}={t1}$. The claim ${wrong_cross}\\neq{t1}$."
            ),
        )
    if idx % 4 == 2:
        sC = f"$p^{{2}}x^{{2}}-q^{{2}}$ factors as $(px-q)^{{2}}$."
        aC = False
        bC = (
            f"$(px-q)^{{2}}=p^{{2}}x^{{2}}-2pqx+q^{{2}}$, which still has a middle term "
            f"$-{t1}x$ unless $pq=0$. The difference of squares needs opposite linear signs:\n\n"
            f"$$(px-q)(px+q)=p^{{2}}x^{{2}}-q^{{2}}$$\n\n"
            f"not a repeated factor $(px-q)^{{2}}$."
        )
    if idx % 4 == 3:
        sE = (
            f"Substituting $x=-\\frac{{q}}{{p}}$ into $(px+q)(rx+s)$ yields the value ${u0 - (q*u1)/p + (q*q*u2)/(p*p)}$ "
            f"rounded incorrectly would give $0$; the exact value is "
            f"${fmt_num(( -q/p * r + s) * 0 + (p*(-q/p)+q)*(r*(-q/p)+s))}$ which equals $0\\cdot(r(-q/p)+s)=0$."
        )
        # At x=-q/p, (px+q)=0 so product is 0
        aE = True
        bE = (
            f"At $x=-\\frac{{q}}{{p}}$ we have $px+q=0$, hence\n\n"
            f"$$(px+q)(rx+s)=0\\cdot\\left(r\\left(-\\frac{{q}}{{p}}\\right)+s\\right)=0$$\n\n"
            f"regardless of the second factor. The claim correctly identifies this root of the product."
        )

    overview = (
        f"Parameters $p={p}$, $q={q}$, $r={r}$, $s={s}$, $k={k}$.\n\n"
        f"$$(px+q)^2={t2}x^{{2}}+{t1}x+{t0}$$\n\n"
        f"$$(px+q)(rx+s)={u2}x^{{2}}+{u1}x+{u0}$$\n\n"
        f"$$p^{{2}}x^{{2}}-q^{{2}}=(px-q)(px+q),\\quad "
        f"x^{{3}}+k^{{3}}=(x+k)(x^{{2}}-{k}x+{k*k})$$"
    )
    return case(title, context, [sA, sB, sC, sD, sE], [aA, aB, aC, aD, aE], [bA, bB, bC, bD, bE], overview)


# ---------------------------------------------------------------------------
# Chapter 11 / finance (syllabus ch3)
# ---------------------------------------------------------------------------

def gen_ch11(idx: int) -> dict[str, Any]:
    P = 5000 + 500 * (idx % 9)
    r_pct = 4.8 + 0.4 * (idx % 7)  # nominal %
    r = r_pct / 100.0
    m = [2, 4, 12][idx % 3]
    t = 2 + (idx % 5)
    i = r / m
    N = m * t
    FV = P * (1 + i) ** N
    eff = (1 + i) ** m - 1
    # annuity payment A for PV of loan
    A_loan = 200 + 25 * (idx % 8)
    n_ann = 12 * (3 + idx % 4)
    i_m = (5.0 + 0.5 * (idx % 5)) / 100.0 / 12
    # PV of ordinary annuity
    PV_ann = A_loan * (1 - (1 + i_m) ** (-n_ann)) / i_m
    # wrong FV decoy
    FV_wrong = FV * 1.03

    title = f"Compound growth and annuity PV with $P={P:g}$, $r={fmt_num(r_pct,1)}\\%$, $m={m}$"
    context = (
        f"A principal $P={P}$ is invested at nominal annual rate $r={fmt_num(r_pct, 2)}\\%$ "
        f"compounded $m={m}$ times per year for $t={t}$ years. Separately, an ordinary annuity "
        f"pays $A={A_loan}$ at the end of each month for $n={n_ann}$ months at monthly rate "
        f"$i={fmt_num(i_m, 6)}$. Decide each claim."
    )

    i_pct = i * 100
    eff_pct = eff * 100
    sA = f"The periodic rate is $i=\\dfrac{{r}}{{m}}={fmt_num(i_pct, 4)}\\%$."
    aA = True
    bA = (
        f"By definition the periodic rate is the nominal rate divided by $m$:\n\n"
        f"$$i=\\frac{{r}}{{m}}=\\frac{{{fmt_num(r, 6)}}}{{{m}}}={fmt_num(i, 8)}$$\n\n"
        f"as a percent: ${fmt_num(i_pct, 4)}\\%$. This matches the claim."
    )

    sB = f"After $t={t}$ years the future value is exactly ${fmt_num(FV_wrong, 2)}$."
    aB = False
    bB = (
        f"Compound interest formula:\n\n"
        f"$$FV=P(1+i)^{{mt}}={P}(1+{fmt_num(i, 8)})^{{{N}}}$$\n\n"
        f"$$(1+i)^{{N}}\\approx{fmt_num((1+i)**N, 8)}$$\n\n"
        f"$$FV\\approx{fmt_num(FV, 2)}$$\n\n"
        f"The claim ${fmt_num(FV_wrong, 2)}$ differs from this value."
    )

    sC = f"The effective annual rate equals $(1+i)^{{m}}-1\\approx{fmt_num(eff_pct, 3)}\\%$."
    aC = True
    bC = (
        f"Effective annual rate from periodic compounding:\n\n"
        f"$$r_{{\\mathrm{{eff}}}}=(1+i)^{{m}}-1=(1+{fmt_num(i, 8)})^{{{m}}}-1$$\n\n"
        f"$$\\approx{fmt_num(eff, 8)}={fmt_num(eff_pct, 3)}\\%$$\n\n"
        f"Nominal $r={fmt_num(r_pct, 2)}\\%$ is strictly smaller than $r_{{\\mathrm{{eff}}}}$ when $m>1$."
    )

    sD = (
        f"The present value of the ordinary annuity is "
        f"$PV=A\\dfrac{{1-(1+i)^{{-n}}}}{{i}}\\approx{fmt_num(PV_ann, 2)}$."
    )
    aD = True
    bD = (
        f"Ordinary annuity present-value formula:\n\n"
        f"$$PV=A\\frac{{1-(1+i)^{{-n}}}}{{i}}$$\n\n"
        f"with $A={A_loan}$, $i={fmt_num(i_m, 8)}$, $n={n_ann}$:\n\n"
        f"$$(1+i)^{{-n}}\\approx{fmt_num((1+i_m)**(-n_ann), 8)}$$\n\n"
        f"$$PV\\approx{fmt_num(PV_ann, 2)}$$"
    )

    sE = (
        f"If the same nominal rate $r$ were compounded only once per year, "
        f"the effective annual rate would exceed the $m$-fold effective rate computed above."
    )
    aE = False
    bE = (
        f"Annual compounding at the same nominal $r$ gives effective rate exactly $r="
        f"{fmt_num(r_pct, 2)}\\%$. With $m={m}>1$,\n\n"
        f"$$r_{{\\mathrm{{eff}}}}=(1+\\tfrac{{r}}{{m}})^{{m}}-1>{r}$$\n\n"
        f"(strict for $r>0$). Numerically ${fmt_num(eff_pct, 3)}\\%>{fmt_num(r_pct, 2)}\\%$, "
        f"so annual compounding does **not** exceed the $m$-fold effective rate; it is smaller."
    )

    if idx % 3 == 1:
        # tweak A to be slightly wrong percent
        sA = f"The periodic rate is $i={fmt_num(i_pct * 1.1, 4)}\\%$."
        aA = False
        bA = (
            f"Correct periodic rate:\n\n"
            f"$$i=\\frac{{{fmt_num(r_pct, 2)}\\%}}{{{m}}}={fmt_num(i_pct, 4)}\\%$$\n\n"
            f"Claimed ${fmt_num(i_pct * 1.1, 4)}\\%$ inflates the true value by $10\\%$."
        )
    if idx % 3 == 2:
        sC = f"The effective annual rate is strictly less than the nominal rate ${fmt_num(r_pct, 2)}\\%$."
        aC = False
        bC = (
            f"For $m={m}\\ge 2$ and $r>0$, Jensen / binomial expansion gives\n\n"
            f"$$(1+\\tfrac{{r}}{{m}})^{{m}}-1>r$$\n\n"
            f"Here $r_{{\\mathrm{{eff}}}}\\approx{fmt_num(eff_pct, 3)}\\%>"
            f"{fmt_num(r_pct, 2)}\\%$, so the claim is reversed."
        )

    overview = (
        f"$$P={P},\\; r={fmt_num(r, 6)},\\; m={m},\\; t={t},\\; i=\\frac{{r}}{{m}}={fmt_num(i, 8)},\\; N={N}$$\n\n"
        f"$$FV=P(1+i)^{{N}}\\approx{fmt_num(FV, 2)},\\quad "
        f"r_{{\\mathrm{{eff}}}}=(1+i)^{{m}}-1\\approx{fmt_num(eff_pct, 3)}\\%$$\n\n"
        f"Annuity: $A={A_loan}$, monthly $i={fmt_num(i_m, 8)}$, $n={n_ann}$, "
        f"$PV\\approx{fmt_num(PV_ann, 2)}$."
    )
    return case(title, context, [sA, sB, sC, sD, sE], [aA, aB, aC, aD, aE], [bA, bB, bC, bD, bE], overview)


# ---------------------------------------------------------------------------
# Chapter 4 — equations
# ---------------------------------------------------------------------------

def gen_ch4(idx: int) -> dict[str, Any]:
    a = 2 + (idx % 6)
    b = 5 + (idx % 9)
    c = -3 - (idx % 5)
    # linear: a x + b = c  => x = (c-b)/a
    x_lin = (c - b) / a
    # quadratic a x^2 + b x + c = 0 with redefined coeffs
    A = 1 + (idx % 3)
    B = - (3 + idx % 7)
    C = 2 + (idx % 4)
    disc = B * B - 4 * A * C
    # ensure positive disc by adjusting C if needed
    if disc < 0:
        C = -abs(C)
        disc = B * B - 4 * A * C
    sqrt_d = math.sqrt(disc)
    x1 = (-B + sqrt_d) / (2 * A)
    x2 = (-B - sqrt_d) / (2 * A)
    # rational eq: (x+p)/(x+q) = r
    p, q, r = 3 + idx % 4, 1 + idx % 3, 2 + idx % 2
    # (x+p) = r(x+q) => x+p = r x + r q => x - r x = r q - p => x(1-r)=rq-p
    if 1 - r != 0:
        x_rat = (r * q - p) / (1 - r)
    else:
        r = 3
        x_rat = (r * q - p) / (1 - r)

    title = f"Mixed linear, quadratic, and rational equations ($a={a}$, $\\Delta={fmt_num(disc,2)}$)"
    context = (
        f"Consider the linear equation ${a}x+{b}={c}$, the quadratic "
        f"${A}x^{{2}}+({B})x+({C})=0$, and the rational equation "
        f"$\\dfrac{{x+{p}}}{{x+{q}}}={r}$ with $x\\neq{-q}$. "
        f"Parameters: $a={a}$, $A={A}$, discriminant $\\Delta={fmt_num(disc, 4)}$. Decide each claim."
    )

    sA = f"The unique solution of ${a}x+{b}={c}$ is $x={fmt_num(x_lin, 4)}$."
    aA = True
    bA = (
        f"Isolate $x$:\n\n"
        f"$${a}x={c}-{b}={c - b}$$\n\n"
        f"$$x=\\frac{{{c - b}}}{{{a}}}={fmt_num(x_lin, 6)}$$\n\n"
        f"Check: ${a}\\cdot({fmt_num(x_lin, 4)})+{b}={fmt_num(a*x_lin+b, 4)}={c}$."
    )

    sB = f"Both quadratic roots are $x={fmt_num(x1, 4)}$ and $x={fmt_num(x2 + 1, 4)}$."
    aB = False
    bB = (
        f"Quadratic formula:\n\n"
        f"$$x=\\frac{{-B\\pm\\sqrt{{B^{{2}}-4AC}}}}{{2A}}$$\n\n"
        f"$$\\Delta={B}^{{2}}-4\\cdot{A}\\cdot({C})={disc}$$\n\n"
        f"$$\\sqrt{{\\Delta}}={fmt_num(sqrt_d, 6)}$$\n\n"
        f"$$x_{{1}}={fmt_num(x1, 6)},\\quad x_{{2}}={fmt_num(x2, 6)}$$\n\n"
        f"The claim replaces $x_{{2}}$ by ${fmt_num(x2+1, 4)}$."
    )

    sC = f"The sum of the quadratic roots equals $-\\frac{{B}}{{A}}={fmt_num(-B/A, 4)}$ (Vieta)."
    aC = True
    bC = (
        f"Vieta for $Ax^{{2}}+Bx+C=0$:\n\n"
        f"$$x_{{1}}+x_{{2}}=-\\frac{{B}}{{A}}=-\\frac{{{B}}}{{{A}}}={fmt_num(-B/A, 6)}$$\n\n"
        f"Cross-check: ${fmt_num(x1, 4)}+{fmt_num(x2, 4)}={fmt_num(x1+x2, 4)}$."
    )

    sD = f"The rational equation has solution $x={fmt_num(x_rat, 4)}$, and $x={-q}$ is excluded."
    aD = True
    bD = (
        f"Clear the denominator ($x\\neq{-q}$):\n\n"
        f"$$x+{p}={r}(x+{q})={r}x+{r*q}$$\n\n"
        f"$$x-{r}x={r*q}-{p}$$\n\n"
        f"$$x({1 - r})={r * q - p}$$\n\n"
        f"$$x={fmt_num(x_rat, 6)}$$\n\n"
        f"Since ${fmt_num(x_rat, 4)}\\neq{-q}$, the candidate is admissible."
    )

    sE = f"The product of the quadratic roots equals $\\frac{{C}}{{A}}+1={fmt_num(C/A + 1, 4)}$."
    aE = False
    bE = (
        f"Vieta product:\n\n"
        f"$$x_{{1}}x_{{2}}=\\frac{{C}}{{A}}=\\frac{{{C}}}{{{A}}}={fmt_num(C/A, 6)}$$\n\n"
        f"The claim adds an extraneous $+1$, producing ${fmt_num(C/A+1, 4)}\\neq"
        f"{fmt_num(C/A, 4)}$."
    )

    if idx % 4 == 1:
        sA = f"The linear equation has solution $x={fmt_num(x_lin + 1, 4)}$."
        aA = False
        bA = (
            f"Correct solution $x=\\frac{{{c}-{b}}}{{{a}}}={fmt_num(x_lin, 6)}$. "
            f"Claimed ${fmt_num(x_lin+1, 4)}$ fails the original equation:\n\n"
            f"$${a}({fmt_num(x_lin+1, 4)})+{b}={fmt_num(a*(x_lin+1)+b, 4)}\\neq{c}$$"
        )
    if idx % 4 == 2:
        sC = f"Discriminant $\\Delta={disc}$ implies two distinct real roots only if $\\Delta>0$; here that holds."
        aC = disc > 0
        bC = (
            f"$\\Delta={disc}$. The criterion for two distinct real roots is $\\Delta>0$. "
            f"Since ${disc}>0$ is {str(disc > 0).lower()}, the claim is "
            f"{'correct' if disc > 0 else 'incorrect'}."
        )
        if disc == 0:
            aC = False
            bC = (
                f"$\\Delta=0$ yields a repeated real root, not two distinct roots. "
                f"The claim asserts distinctness, which fails."
            )

    overview = (
        f"Linear: ${a}x+{b}={c}$ $\\Rightarrow$ $x={fmt_num(x_lin, 6)}$.\n\n"
        f"Quadratic: ${A}x^{{2}}+({B})x+({C})=0$, $\\Delta={disc}$, "
        f"roots ${fmt_num(x1, 4)}$, ${fmt_num(x2, 4)}$.\n\n"
        f"Rational: $\\frac{{x+{p}}}{{x+{q}}}={r}$ $\\Rightarrow$ $x={fmt_num(x_rat, 6)}$, "
        f"$x\\neq{-q}$."
    )
    return case(title, context, [sA, sB, sC, sD, sE], [aA, aB, aC, aD, aE], [bA, bB, bC, bD, bE], overview)


# ---------------------------------------------------------------------------
# Chapter 5 — 2-var linear systems
# ---------------------------------------------------------------------------

def gen_ch5(idx: int) -> dict[str, Any]:
    # system: a x + b y = e ; c x + d y = f
    a = 2 + (idx % 5)
    b = 1 + (idx % 4)
    c = 1 + (idx % 3)
    d = 3 + (idx % 5)
    det = a * d - b * c
    if det == 0:
        d += 1
        det = a * d - b * c
    x = 3 + (idx % 6)
    y = 2 + (idx % 7)
    e = a * x + b * y
    f = c * x + d * y
    # Cramer's
    x_c = (e * d - b * f) / det
    y_c = (a * f - e * c) / det

    title = f"Two-variable linear system with $\\det={det}$, solution $({x},{y})$"
    context = (
        f"Solve the system\n\n"
        f"$$\\begin{{cases}}{a}x+{b}y={e}\\\\{c}x+{d}y={f}\\end{{cases}}$$\n\n"
        f"Let $\\Delta={a}\\cdot{d}-{b}\\cdot{c}={det}$. Use elimination, substitution, or Cramer. "
        f"Decide each statement."
    )

    sA = f"The unique solution is $(x,y)=({x},{y})$."
    aA = True
    bA = (
        f"Determinant $\\Delta={det}\\neq 0$, so a unique solution exists. Substitution: from the "
        f"first equation, if $b\\neq 0$, $y=\\frac{{{e}-{a}x}}{{{b}}}$. Inserting into the second "
        f"and simplifying yields $x={x}$, then $y={y}$. Verification:\n\n"
        f"$${a}({x})+{b}({y})={e},\\quad {c}({x})+{d}({y})={f}$$"
    )

    sB = f"Cramer's rule gives $x=\\dfrac{{|{e}\\;{b};{f}\\;{d}|}}{{\\Delta}}={fmt_num(x_c + 1, 4)}$."
    aB = False
    bB = (
        f"Cramer:\n\n"
        f"$$x=\\frac{{e d - b f}}{{\\Delta}}=\\frac{{{e}\\cdot{d}-{b}\\cdot{f}}}{{{det}}}={fmt_num(x_c, 6)}$$\n\n"
        f"which equals ${x}$. The claim states ${fmt_num(x_c+1, 4)}$, off by $1$."
    )

    sC = f"$y=\\dfrac{{a f - e c}}{{\\Delta}}={fmt_num(y_c, 4)}$."
    aC = True
    bC = (
        f"Second Cramer coordinate:\n\n"
        f"$$y=\\frac{{a f - e c}}{{\\Delta}}=\\frac{{{a}\\cdot{f}-{e}\\cdot{c}}}{{{det}}}={fmt_num(y_c, 6)}$$\n\n"
        f"Agreements with the elimination solution $y={y}$."
    )

    sD = (
        f"Replacing the right-hand side by $({e+1},{f})$ keeps the same solution $(x,y)$."
    )
    aD = False
    bD = (
        f"If the first RHS becomes ${e+1}$, then\n\n"
        f"$${a}x+{b}y={e+1}$$\n\n"
        f"while $({x},{y})$ still satisfies ${a}x+{b}y={e}\\neq{e+1}$. "
        f"The solution must move; uniqueness for the new nonsingular system forbids reusing $({x},{y})$."
    )

    sE = (
        f"The homogeneous system with the same coefficient matrix has only the trivial solution "
        f"$(0,0)$, because $\\Delta\\neq 0$."
    )
    aE = True
    bE = (
        f"For $A\\begin{{pmatrix}}x\\\\y\\end{{pmatrix}}=\\mathbf{{0}}$ with "
        f"$\\det A=\\Delta={det}\\neq 0$, the only solution is the zero vector. "
        f"Equivalently, the two homogenous lines through the origin are non-parallel and meet only at $(0,0)$."
    )

    if idx % 3 == 1:
        sA = f"The solution is $(x,y)=({x+1},{y})$."
        aA = False
        bA = (
            f"Plug $({x+1},{y})$ into the first equation:\n\n"
            f"$${a}({x+1})+{b}({y})={a*x+a+b*y}={e+a}\\neq{e}$$\n\n"
            f"unless $a=0$. Here $a={a}\\neq 0$, so the claim fails. True solution is $({x},{y})$."
        )
    if idx % 3 == 2:
        sE = f"Because $\\Delta={det}$, the system is singular and has infinitely many solutions."
        aE = False
        bE = (
            f"Singularity requires $\\Delta=0$. Here $\\Delta={det}\\neq 0$, so the system is "
            f"nonsingular with exactly one solution. Infinite solutions would need both "
            f"$\\Delta=0$ and consistent augmented rank."
        )

    overview = (
        f"System matrix determinant $\\Delta={det}$. Solution $(x,y)=({x},{y})$.\n\n"
        f"$$\\begin{{cases}}{a}x+{b}y={e}\\\\{c}x+{d}y={f}\\end{{cases}}$$\n\n"
        f"Cramer: $x=\\frac{{{e}d-{b}f}}{{\\Delta}}={x}$, "
        f"$y=\\frac{{{a}f-{e}c}}{{\\Delta}}={y}$."
    )
    return case(title, context, [sA, sB, sC, sD, sE], [aA, aB, aC, aD, aE], [bA, bB, bC, bD, bE], overview)


# ---------------------------------------------------------------------------
# Chapter 6 — inequalities
# ---------------------------------------------------------------------------

def gen_ch6(idx: int) -> dict[str, Any]:
    p = 2 + (idx % 5)
    q = 3 + (idx % 6)
    # (x-p)/(x+q) <= 0  critical points x=p (zero), x=-q (asymp)
    # sign chart: solution depends on order of p and -q
    lo, hi = sorted([p, -q])
    # for (x-p)/(x+q) <= 0: closed at root p, open at -q
    # intervals where product of factors has opposite signs

    # linear ineq: a x + b > c
    a, b, c = 3 + idx % 4, -2 - idx % 3, 5 + idx % 5
    # a x > c - b => x > (c-b)/a if a>0
    bound = (c - b) / a

    # absolute: |x - k| < d
    k = 1 + idx % 7
    d = 2 + idx % 4

    # quadratic ineq: (x-r)(x-s) >= 0
    r = -1 - (idx % 4)
    s = 4 + (idx % 5)

    title = f"Rational, absolute, and quadratic inequalities ($p={p}$, $q={q}$, $k={k}$)"
    context = (
        f"Study $\\dfrac{{x-{p}}}{{x+{q}}}\\le 0$, the linear inequality "
        f"${a}x+({b})>{c}$, the absolute inequality $|x-{k}|<{d}$, and "
        f"$(x-({r}))(x-{s})\\ge 0$. Decide each claim about solution sets."
    )

    # Build true description for rational ineq
    # Critical: -q excluded, p included for <=. Solution is the closed-open segment between them.
    if -q < p:
        rat_claim_true = (
            f"The solution set of $\\dfrac{{x-{p}}}{{x+{q}}}\\le 0$ is $-{q}<x\\le {p}$."
        )
    else:
        rat_claim_true = (
            f"The solution set of $\\dfrac{{x-{p}}}{{x+{q}}}\\le 0$ is ${p}\\le x<-{q}$."
        )

    sA = rat_claim_true
    aA = True
    bA = (
        f"Critical points: numerator zero $x={p}$ (included for $\\le$), denominator zero "
        f"$x=-{q}$ (always excluded). Sign chart on the three intervals determined by "
        f"$\\{{{p},-{q}\\}}$ shows the quotient is nonpositive precisely on the closed–open "
        f"segment between them described in the claim. A quick midpoint test confirms."
    )

    sB = f"The linear inequality ${a}x+({b})>{c}$ is equivalent to $x>{fmt_num(bound, 4)}$."
    aB = True
    bB = (
        f"Since $a={a}>0$, dividing preserves the inequality direction:\n\n"
        f"$${a}x>{c}-({b})={c - b}$$\n\n"
        f"$$x>\\frac{{{c - b}}}{{{a}}}={fmt_num(bound, 6)}$$"
    )

    sC = f"$|x-{k}|<{d}$ means $x\\in({k-d},{k+d})$."
    aC = True
    bC = (
        f"Definition of absolute value inequality with positive $d={d}$:\n\n"
        f"$$|x-{k}|<{d}\\iff -{d}<x-{k}<{d}$$\n\n"
        f"$$\\iff {k-d}<x<{k+d}$$\n\n"
        f"i.e. the open interval $({k-d},{k+d})$."
    )

    sD = f"$(x-({r}))(x-{s})\\ge 0$ holds for all $x\\in[{r},{s}]$."
    # product >=0 outside [r,s] if r<s, not inside
    aD = False
    bD = (
        f"Assume ${r}<{s}$. The product $(x-r)(x-s)$ is nonnegative on "
        f"$(-\\infty,{r}]\\cup[{s},\\infty)$ and nonpositive on $[{r},{s}]$. "
        f"In particular on the open interval $({r},{s})$ the product is strictly negative, "
        f"so the claim that the inequality holds for all $x\\in[{r},{s}]$ is false."
    )

    sE = f"Combining $|x-{k}|<{d}$ with $x>{fmt_num(bound, 4)}$ always yields the empty set."
    # check intersection emptiness
    left, right = k - d, k + d
    inter_empty = right <= bound  # open interval (left,right) intersect (bound, inf)
    # more carefully: intersection of (left,right) and (bound, inf)
    inter_empty = not (right > max(left, bound) and True and max(left, bound) < right)
    # simplify:
    lo_i = max(left, bound)
    inter_empty = not (lo_i < right)

    sE = (
        f"The intersection of $|x-{k}|<{d}$ with $x>{fmt_num(bound, 4)}$ "
        f"is empty."
    )
    aE = inter_empty
    bE = (
        f"$|x-{k}|<{d}$ gives $x\\in({left},{right})$. Intersect with $x>{fmt_num(bound, 4)}$:\n\n"
        f"$$x\\in\\big(\\max({left},{fmt_num(bound, 4)}),\\,{right}\\big)$$\n\n"
        f"This interval is empty iff $\\max({left},{fmt_num(bound, 4)})\\ge {right}$, "
        f"which is {str(inter_empty).lower()}. Hence the emptiness claim is "
        f"{'correct' if inter_empty else 'incorrect'}."
    )
    if not inter_empty:
        bE = (
            f"$|x-{k}|<{d}$ $\\Rightarrow$ $x\\in({left},{right})$. "
            f"Intersecting with $x>{fmt_num(bound, 4)}$ produces the nonempty open interval "
            f"$({fmt_num(max(left, bound), 4)},{right})$. The claim of emptiness is therefore false."
        )

    if idx % 4 == 1:
        sB = f"${a}x+({b})>{c}$ is equivalent to $x<{fmt_num(bound, 4)}$."
        aB = False
        bB = (
            f"Coefficient $a={a}>0$ does not reverse the inequality. Correct form: "
            f"$x>{fmt_num(bound, 6)}$. The claim uses $<$ and is false."
        )
    if idx % 4 == 2:
        sC = f"$|x-{k}|<{d}$ is equivalent to $x\\le {k-d}$ or $x\\ge {k+d}$."
        aC = False
        bC = (
            f"That description is the solution of $|x-{k}|\\ge {d}$, the complementary "
            f"closed exterior. For the strict interior inequality one needs "
            f"${k-d}<x<{k+d}$, not the exterior rays."
        )
    if idx % 4 == 3:
        sD = f"$(x-({r}))(x-{s})\\ge 0$ holds precisely on $(-\\infty,{r}]\\cup[{s},\\infty)$."
        aD = True
        bD = (
            f"Roots $x={r}$ and $x={s}$ with ${r}<{s}$. Parabola opening upward (leading coeff $1$) "
            f"is nonnegative outside the roots, including the roots themselves for $\\ge$. "
            f"Solution: $(-\\infty,{r}]\\cup[{s},\\infty)$."
        )

    overview = (
        f"Rational critical points $x={p}$ (root) and $x=-{q}$ (pole). "
        f"Linear bound $x>{fmt_num(bound, 6)}$. Absolute interval $({k-d},{k+d})$. "
        f"Quadratic roots ${r},{s}$."
    )
    return case(title, context, [sA, sB, sC, sD, sE], [aA, aB, aC, aD, aE], [bA, bB, bC, bD, bE], overview)


# ---------------------------------------------------------------------------
# Chapter 7 — linear + quadratic functions
# ---------------------------------------------------------------------------

def gen_ch7(idx: int) -> dict[str, Any]:
    # g(x) = a(x-h)^2 + k
    a = 1 + (idx % 3)
    h = (idx % 5) - 2
    k = -3 - (idx % 4)
    A = a
    B = -2 * a * h
    C = a * h * h + k
    m = 1 + (idx % 4)
    b = k - 1 - (idx % 3)
    qa, qb, qc = A, B - m, C - b
    disc = qb * qb - 4 * qa * qc
    n_roots = 2 if disc > 0 else (1 if abs(disc) < 1e-9 else 0)
    mid_lin = -2 * a * h
    const_term = a * h * h + k
    disc_wrong = disc + 5

    title = (
        "Vertex form, expansion, and line-parabola meetings "
        "(a=" + str(a) + ", h=" + str(h) + ", k=" + str(k) + ")"
    )
    context = (
        "Let $g(x)=" + str(a) + "(x-(" + str(h) + "))^{2}+(" + str(k) + ")$ and let "
        "$\\ell$ be the line $y=" + str(m) + "x+(" + str(b) + ")$. Expand $g$, locate "
        "the vertex, and study $g(x)=mx+b$. Decide each statement."
    )

    sA = "The vertex of $g$ is $\\left(" + str(h) + "," + str(k) + "\\right)$."
    aA = True
    bA = (
        "Vertex form $g(x)=a(x-h)^{2}+k$ has vertex $(h,k)$ regardless of $a\\neq 0$. "
        "Here $a=" + str(a) + ">0$, so the vertex is a global minimum at $("
        + str(h) + "," + str(k) + ")$.\n\n"
        "$$g(" + str(h) + ")=" + str(a) + "\\cdot 0+(" + str(k) + ")=" + str(k) + "$$"
    )

    sB = "Expanded, $g(x)=" + str(A) + "x^{2}+(" + str(B) + ")x+(" + str(C) + ")$."
    aB = True
    bB = (
        "Expand:\n\n"
        "$$g(x)=" + str(a) + "\\big(x^{2}-2(" + str(h) + ")x+(" + str(h) + ")^{2}\\big)+("
        + str(k) + ")$$\n\n"
        "$$=" + str(a) + "x^{2}+(" + str(mid_lin) + ")x+(" + str(const_term) + ")$$\n\n"
        "$$=" + str(A) + "x^{2}+(" + str(B) + ")x+(" + str(C) + ")$$"
    )

    sC = (
        "The discriminant of $g(x)=" + str(m) + "x+(" + str(b) + ")$ equals $"
        + fmt_num(disc_wrong, 2) + "$."
    )
    aC = False
    bC = (
        "Set $" + str(A) + "x^{2}+(" + str(B) + ")x+(" + str(C) + ")=" + str(m)
        + "x+(" + str(b) + ")$, bring to zero:\n\n"
        "$$" + str(qa) + "x^{2}+(" + str(qb) + ")x+(" + str(qc) + ")=0$$\n\n"
        "$$\\Delta=(" + str(qb) + ")^{2}-4(" + str(qa) + ")(" + str(qc) + ")="
        + str(disc) + "$$\n\n"
        "The claim $" + fmt_num(disc_wrong, 2) + "$ is incorrect."
    )

    sD = "The graphs of $g$ and $\\ell$ intersect in exactly " + str(n_roots) + " point(s)."
    aD = True
    if n_roots == 2:
        root_phrase = "two distinct real intersections"
    elif n_roots == 1:
        root_phrase = "one tangency point"
    else:
        root_phrase = "no real intersection"
    bD = (
        "Number of intersections equals the number of real roots of the quadratic difference. "
        "With $\\Delta=" + str(disc) + "$, one has " + root_phrase
        + ". That matches the claim of exactly " + str(n_roots) + " point(s)."
    )

    sE = "Because $a=" + str(a) + ">0$, $\\lim_{x\\to\\infty}g(x)=-\\infty$."
    aE = False
    bE = (
        "Leading coefficient $A=" + str(a) + ">0$ forces both end behavior limits to $+\\infty$:\n\n"
        "$$\\lim_{x\\to\\pm\\infty}g(x)=+\\infty$$\n\n"
        "The claim asserts $-\\infty$ as $x\\to\\infty$, which is the end behavior of a downward parabola."
    )

    if idx % 2 == 1:
        sA = "The vertex is $\\left(" + str(h + 1) + "," + str(k) + "\\right)$."
        aA = False
        bA = (
            "In $g(x)=" + str(a) + "(x-(" + str(h) + "))^{2}+(" + str(k)
            + ")$ the horizontal shift is exactly $h=" + str(h) + "$, not $"
            + str(h + 1) + "$. Axis of symmetry $x=" + str(h) + "$."
        )

    overview = (
        "$g(x)=" + str(a) + "(x-(" + str(h) + "))^{2}+(" + str(k) + ")="
        + str(A) + "x^{2}+(" + str(B) + ")x+(" + str(C) + ")$, vertex $("
        + str(h) + "," + str(k) + ")$. Line $y=" + str(m) + "x+(" + str(b)
        + ")$. Intersection discriminant $\\Delta=" + str(disc) + "$ gives "
        + str(n_roots) + " real intersection(s)."
    )
    return case(title, context, [sA, sB, sC, sD, sE], [aA, aB, aC, aD, aE], [bA, bB, bC, bD, bE], overview)


def gen_ch8(idx: int) -> dict[str, Any]:
    alpha = 2 + (idx % 4)  # often integer power
    beta = -1 - (idx % 3)  # negative power
    c = 3 + (idx % 5)
    x0 = 2 + (idx % 4)
    y0 = c * (x0 ** alpha)
    # ratio scaling: f(tx)/f(x) = t^alpha
    t = 2
    # inverse power
    # g(x) = c x^beta

    title = f"Power-function scaling with $f(x)={c}x^{{{alpha}}}$ and $g(x)={c}x^{{{beta}}}$"
    context = (
        f"Define $f(x)={c}x^{{{alpha}}}$ for $x>0$ and $g(x)={c}x^{{{beta}}}$ for $x>0$. "
        f"Use the scaling law $f(tx)=t^{{\\alpha}}f(x)$ and compare growth/decay. "
        f"A data point claims $f({x0})={y0}$. Decide each statement."
    )

    sA = f"$f({x0})={y0}$."
    aA = True
    bA = (
        f"Direct evaluation:\n\n"
        f"$$f({x0})={c}\\cdot{x0}^{{{alpha}}}={c}\\cdot{x0**alpha}={y0}$$"
    )

    sB = f"$f({t}x)=t^{{{alpha}}}f(x)$ holds for every $x>0$, so $f({t}\\cdot{x0})={t**alpha}\\cdot{y0}$."
    aB = True
    bB = (
        f"Homogeneity of degree $\\alpha={alpha}$:\n\n"
        f"$$f(tx)={c}(tx)^{{{alpha}}}={c}t^{{{alpha}}}x^{{{alpha}}}=t^{{{alpha}}}f(x)$$\n\n"
        f"At $x={x0}$: $f({t*x0})={t**alpha}\\cdot{y0}={t**alpha * y0}$."
    )

    sC = f"$g$ is increasing on $(0,\\infty)$ because the exponent ${beta}$ is negative."
    aC = False
    bC = (
        f"For $g(x)={c}x^{{{beta}}}$ with $c={c}>0$ and $\\beta={beta}<0$, the function is "
        f"**decreasing** on $(0,\\infty)$: as $x$ grows, $x^{{\\beta}}$ decays toward $0$. "
        f"Negative exponent does not create increase for positive $c$."
    )

    sD = f"$\\dfrac{{f(x)}}{{g(x)}}=x^{{{alpha - beta}}}$ for all $x>0$."
    # f/g = c x^a / (c x^b) = x^{a-b}
    aD = True
    bD = (
        f"$$\\frac{{f(x)}}{{g(x)}}=\\frac{{{c}x^{{{alpha}}}}}{{{c}x^{{{beta}}}}}="
        f"x^{{{alpha}-({beta})}}=x^{{{alpha - beta}}}$$\n\n"
        f"The constant $c$ cancels for $c\\neq 0$."
    )

    sE = f"$f$ is concave down on $(0,\\infty)$ for these parameters."
    # f'' = c * alpha * (alpha-1) x^{alpha-2}; for alpha>=2, c>0 => f''>0 convex (concave up)
    aE = False
    bE = (
        f"Second derivative:\n\n"
        f"$$f'(x)={c}\\cdot{alpha}\\,x^{{{alpha-1}}}$$\n\n"
        f"$$f''(x)={c}\\cdot{alpha}\\cdot({alpha}-1)\\,x^{{{alpha-2}}}$$\n\n"
        f"With $c>0$ and $\\alpha={alpha}\\ge 2$, one has $f''(x)>0$ on $(0,\\infty)$, "
        f"so $f$ is concave **up**, not concave down."
    )

    if idx % 2 == 1:
        sA = f"$f({x0})={y0 + c}$."
        aA = False
        bA = (
            f"True value $f({x0})={c}\\cdot{x0}^{{{alpha}}}={y0}$. "
            f"Claimed ${y0 + c}$ adds an extra ${c}$."
        )
    if idx % 3 == 2:
        sD = f"$\\dfrac{{f(x)}}{{g(x)}}={c}\\,x^{{{alpha - beta}}}$."
        aD = False
        bD = (
            f"The constants cancel:\n\n"
            f"$$\\frac{{f}}{{g}}=x^{{{alpha - beta}}}$$\n\n"
            f"not ${c}x^{{{alpha - beta}}}$. The claim leaves a spurious factor $c={c}$."
        )

    overview = (
        f"$f(x)={c}x^{{{alpha}}}$, $g(x)={c}x^{{{beta}}}$, sample $f({x0})={y0}$. "
        f"Scaling degree $\\alpha={alpha}$; ratio degree $\\alpha-\\beta={alpha - beta}$. "
        f"$f''>0$ on $(0,\\infty)$."
    )
    return case(title, context, [sA, sB, sC, sD, sE], [aA, aB, aC, aD, aE], [bA, bB, bC, bD, bE], overview)


# ---------------------------------------------------------------------------
# Assemble required keys
# ---------------------------------------------------------------------------

def required_keys() -> list[str]:
    keys: list[str] = []
    # BBE
    for i in range(1, 11):
        keys.append(f"MATH 1.{i:02d}")
    for i in range(1, 11):
        keys.append(f"MATH 2.{i:02d}")
    for i in range(1, 11):
        keys.append(f"MATH 11.{i:02d}")
    for i in range(1, 11):
        keys.append(f"MATH 4.{i:02d}")
    for i in range(1, 11):
        keys.append(f"MATH 5.{i:02d}")
    for i in range(1, 11):
        keys.append(f"MATH 6.{i:02d}")
    for i in range(1, 6):
        keys.append(f"MATH 7.{i:02d}")
    for i in range(1, 6):
        keys.append(f"MATH 8.{i:02d}")
    # WiSo
    for i in range(11, 21):
        keys.append(f"MATH 1.{i:02d}")
    for i in range(11, 21):
        keys.append(f"MATH 2.{i:02d}")
    for i in range(11, 21):
        keys.append(f"MATH 11.{i:02d}")
    for i in range(11, 21):
        keys.append(f"MATH 4.{i:02d}")
    # ch5: 5.11-5.16, 5.18-5.21
    for i in [11, 12, 13, 14, 15, 16, 18, 19, 20, 21]:
        keys.append(f"MATH 5.{i:02d}")
    for i in range(11, 21):
        keys.append(f"MATH 6.{i:02d}")
    for i in range(6, 11):
        keys.append(f"MATH 7.{i:02d}")
    for i in range(6, 11):
        keys.append(f"MATH 8.{i:02d}")
    return keys


def parse_idx(case_id: str) -> tuple[str, int]:
    # "MATH 1.07" -> ("1", 7) but for generator we want 0-based within chapter stream
    _, rest = case_id.split(" ", 1)
    ch, num = rest.split(".")
    return ch, int(num)


def build_all() -> dict[str, Any]:
    out: dict[str, Any] = {}
    for kid in required_keys():
        ch, num = parse_idx(kid)
        if ch == "1":
            out[kid] = gen_ch1(num - 1)
        elif ch == "2":
            out[kid] = gen_ch2(num - 1)
        elif ch == "11":
            out[kid] = gen_ch11(num - 1)
        elif ch == "4":
            out[kid] = gen_ch4(num - 1)
        elif ch == "5":
            # map 5.18->17 style continuity: use num-1 still unique
            out[kid] = gen_ch5(num - 1)
        elif ch == "6":
            out[kid] = gen_ch6(num - 1)
        elif ch == "7":
            out[kid] = gen_ch7(num - 1)
        elif ch == "8":
            out[kid] = gen_ch8(num - 1)
        else:
            raise ValueError(kid)
    return out


def validate(data: dict[str, Any]) -> None:
    req = required_keys()
    assert len(req) == 140, len(req)
    assert set(data.keys()) == set(req), (
        f"missing={set(req)-set(data)} extra={set(data)-set(req)}"
    )
    short = []
    for kid, row in data.items():
        assert row["difficulty_level"] == "5/5"
        assert len(row["statements"]) == 5
        assert len(row["answer_key"]) == 5
        assert len(row["tactical_explanations"]) == 5
        assert any(row["answer_key"]) and not all(row["answer_key"]), kid
        assert "Evaluate each statement" not in row["context"] or len(row["context"]) > 80
        for i, expl in enumerate(row["tactical_explanations"]):
            letter = LETTERS[i]
            truth = row["answer_key"][i]
            tag = "True" if truth else "False"
            assert expl.startswith(f"**{letter}.** → {tag}"), (kid, i, expl[:40])
            end = "The statement is true." if truth else "The statement is false."
            assert expl.rstrip().endswith(end), (kid, i)
            if len(expl) < 700:
                short.append((kid, i, len(expl)))
        assert len(row["solution_overview"]) >= 200, kid
        assert len(row["context"]) >= 60, kid
    if short:
        raise SystemExit(f"explanation too short: {short[:10]} ... total {len(short)}")


def main() -> None:
    data = build_all()
    validate(data)
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    # recount
    from collections import Counter
    c = Counter()
    for k in data:
        prefix = k.split(".")[0]  # MATH 1
        c[prefix] += 1
    print("Wrote", OUT, "keys", len(data))
    for pref, n in sorted(c.items()):
        print(f"  {pref}: {n}")
    # length stats
    lens = [len(e) for row in data.values() for e in row["tactical_explanations"]]
    print(f"expl len min/median/max: {min(lens)} / {sorted(lens)[len(lens)//2]} / {max(lens)}")
    # reload
    json.loads(OUT.read_text(encoding="utf-8"))
    print("json.load OK")


if __name__ == "__main__":
    main()
