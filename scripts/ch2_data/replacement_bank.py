"""Replacement claims for obvious or numeric-plug soft statements."""

from __future__ import annotations

import re

# (statement, truth) pools by subsection — letter-only, exam-direct, must-finish traps.
_REPLACEMENTS: dict[str, list[tuple[str, bool]]] = {
    "2.1": [
        (
            r"For every real pair $(a,b)$, $(a+b)^3-(a-b)^3=2b(3a^2+b^2)$.",
            True,
        ),
        (
            r"For every real pair $(p,q)$, $(p+q)^2-(p-q)^2=4pq$.",
            True,
        ),
        (
            r"For every real $t$, $(2t-1)^2-(4t^2-4t+1)=0$.",
            True,
        ),
        (
            r"For every real pair $(u,v)$, $(u+v)^3-(u^3+v^3)=3uv(u+v)$.",
            True,
        ),
        (
            r"For every real pair $(m,n)$, $(m+n)^2-(m^2+n^2)=2mn$.",
            True,
        ),
        (
            r"For every real pair $(x,y)$, $(x+y)^2-(x^2+xy+xy+y^2)=0$.",
            False,
        ),
        (
            r"For every real pair $(r,s)$, $(r+s)^3-(r^3+s^3+3rs)=3rs(r+s)$.",
            False,
        ),
        (
            r"For every real $k$, $(3k-2)^2-(9k^2-12k+3)=1$.",
            False,
        ),
        (
            r"For every real pair $(a,b)$, $a^3+b^3=(a+b)(a^2-ab+b^2)$.",
            True,
        ),
        (
            r"For every real pair $(c,d)$, $(c+d)^2=c^2+2cd+d^2$.",
            True,
        ),
    ],
    "2.2": [
        (
            r"For $x\neq\pm 1$, $\dfrac{x+3}{x^2-1}-\dfrac{1}{x+1}=\dfrac{2}{x-1}$.",
            True,
        ),
        (
            r"For $a,b\neq 0$, $\dfrac{2a}{b}+\dfrac{3b}{a}=\dfrac{2a^2+3b^2}{ab}$.",
            True,
        ),
        (
            r"For $p,q\neq 0$ and $p\neq -q$, $\dfrac{4}{p}+\dfrac{4}{q}=\dfrac{4(p+q)}{pq}$.",
            True,
        ),
        (
            r"For $m,n\neq 0$, $\dfrac{m}{n}+\dfrac{n}{m}=\dfrac{m^2+n^2}{mn}$.",
            True,
        ),
        (
            r"For $x\neq 2$, $\dfrac{x^2-4}{x-2}=x+2$.",
            True,
        ),
        (
            r"For $u,v\neq 0$, $\dfrac{3u}{2v}\cdot\dfrac{4v^2}{9u}=2v$.",
            False,
        ),
        (
            r"For $h,k\neq 0$, $\dfrac{h^2}{k}+\dfrac{k^2}{h}=\dfrac{h^3+k^3}{hk}$.",
            True,
        ),
        (
            r"For $x\neq\pm 2$, $\dfrac{1}{x-2}-\dfrac{1}{x+2}=\dfrac{4}{x^2-4}$.",
            True,
        ),
    ],
    "2.3": [
        (
            r"For $a\neq 0$, $(a^{-2}a^5)/a= a^2$.",
            True,
        ),
        (
            r"For $b>0$, $(b^{1/2})^4=b^2$.",
            True,
        ),
        (
            r"For $x\neq 0$, $(x^3/x^{-2})^{1/5}=x$.",
            True,
        ),
        (
            r"For $p>0$, $\sqrt{p}\cdot\sqrt{p^3}=p^2$.",
            True,
        ),
        (
            r"For $t\neq 0$, $(t^{-1})^3(t^2)^2=t$.",
            True,
        ),
        (
            r"For $u>0$, $(u^4)^{1/2}/u=u$.",
            False,
        ),
        (
            r"For $v\neq 0$, $(v^2/v^{-3})^{1/2}=v^{5/2}$.",
            False,
        ),
        (
            r"For $w>0$, $(w^{2/3})(w^{1/3})=w$.",
            True,
        ),
    ],
    "2.4": [
        (
            r"For every real $x$, $|x-3|+|3-x|=0$.",
            True,
        ),
        (
            r"For every real $t$, $|t^2-9|=|(t-3)(t+3)|$.",
            True,
        ),
        (
            r"For every real $x$, $|2x-6|=2|x-3|$.",
            True,
        ),
        (
            r"For every real $k$, $|k|+|{-k}|=2|k|$.",
            True,
        ),
        (
            r"For every real $x$, $|x-1|+|1-x|=2$.",
            False,
        ),
        (
            r"For every real $x$, $|x^2-4x+4|=(x-2)^2$.",
            True,
        ),
        (
            r"For every real $p$, $|p^2-1|=|p-1|\,|p+1|$.",
            True,
        ),
        (
            r"For every real $x$, $|x+2|=x+2$.",
            False,
        ),
    ],
    "2.5": [
        (
            r"For every real pair $(a,b)$, $(a+b)^2+(a-b)^2=2(a^2+b^2)$.",
            True,
        ),
        (
            r"For every real pair $(x,y)$, $(x+y)^3+(x-y)^3=2x(x^2+3y^2)$.",
            True,
        ),
        (
            r"For every real pair $(p,q)$, $(p+q)(p-q)=p^2-q^2$.",
            True,
        ),
        (
            r"For every real triple $(a,b,c)$ with $a+b+c=0$, $a^3+b^3+c^3=3abc$.",
            True,
        ),
        (
            r"For every real pair $(m,n)$, $(m+n)^2-(m-n)^2=4mn$.",
            True,
        ),
        (
            r"For every real pair $(u,v)$, $(u+v)^2=u^2+v^2$.",
            False,
        ),
        (
            r"For every real pair $(r,s)$, $(r+s)^3=r^3+s^3$.",
            False,
        ),
        (
            r"For every real pair $(h,k)$, $(h+k)^4=h^4+k^4+4hk(h+k)$.",
            False,
        ),
    ],
}


def generate_claim(
    subsection: str,
    *,
    want_truth: bool,
    seed: int,
    avoid: set[str],
) -> tuple[str, bool]:
    """Letter-only exam claim with permuted coefficients."""
    letters = [
        ("a", "b"),
        ("p", "q"),
        ("u", "v"),
        ("m", "n"),
        ("x", "y"),
        ("r", "s"),
        ("c", "d"),
        ("f", "g"),
        ("h", "k"),
        ("t", "w"),
    ]
    a, b = letters[seed % len(letters)]
    r = letters[(seed // 2) % len(letters)][0]
    while r in (a, b):
        r = chr(ord(r) + 1) if r < "z" else "c"
    coeff = seed % 7 + 2
    coeff2 = seed % 5 + 3
    inv = f"1/{coeff}"
    templates_true = {
        "2.1": [
            f"For every real pair $({a},{b})$, $({a}+{b})^2-({a}-{b})^2=4{a}{b}$.",
            f"For every real ${a}$, $({coeff}{a}-1)^2={coeff*coeff}{a}^2-{2*coeff}{a}+1$.",
            f"If ${a}+{b}=s$ and ${a}{b}=p$, then ${a}^2+{b}^2=s^2-2p$ for every real pair with sum $s$ and product $p$.",
        ],
        "2.2": [
            f"For ${a},{b}\\neq 0$, $\\dfrac{{{coeff}}}{{{a}}}+\\dfrac{{{coeff2}}}{{{b}}}=\\dfrac{{{coeff}{b}+{coeff2}{a}}}{{{a}{b}}}$.",
            f"For ${a}\\neq {coeff}$, $\\dfrac{{{a}^2-{coeff*coeff}}}{{{a}-{coeff}}}={a}+{coeff}$.",
        ],
        "2.3": [
            f"For ${a}\\neq 0$, ${a}^{{{coeff}}}/{a}^{{{coeff-2}}}={a}^2$.",
            f"For ${a}>0$, $({a}^{{{coeff}}})^{{{inv}}}={a}$.",
        ],
        "2.4": [
            f"For every real ${a}$, $|{coeff}{a}-{coeff2}|={coeff}|{a}|-{coeff2}$ when ${a}\\ge {coeff2}/{coeff}$.",
            f"For every real ${a}$, $|{a}^2-{coeff*coeff}|=|{a}-{coeff}|\\,|{a}+{coeff}|$.",
        ],
        "2.5": [
            f"For every real pair $({a},{b})$, $({a}+{b})^2+( {a}-{b})^2=2({a}^2+{b}^2)$.",
            f"For every real triple $({a},{b},{r})$ with ${a}+{b}+{r}=0$, ${a}^3+{b}^3+{r}^3=3{a}{b}{r}$.",
        ],
    }
    templates_false = {
        "2.1": [
            f"For every real pair $({a},{b})$, $({a}+{b})^2={a}^2+{b}^2$.",
            f"For every real ${a}$, $({a}+1)^2={a}^2+1$.",
        ],
        "2.2": [
            f"For ${a},{b}\\neq 0$, $\\dfrac{{1}}{{{a}}}+\\dfrac{{1}}{{{b}}}=\\dfrac{{1}}{{{a}+{b}}}$.",
        ],
        "2.3": [
            f"For ${a}>0$, $({a}^2)^3={a}^5$.",
        ],
        "2.4": [
            f"For every real ${a}$, $|{a}|={a}$.",
        ],
        "2.5": [
            f"For every real pair $({a},{b})$, $({a}+{b})^3={a}^3+{b}^3$.",
        ],
    }
    pool = templates_true if want_truth else templates_false
    opts = pool.get(subsection, pool["2.1"])
    for bump in range(len(opts) * 5):
        stmt = opts[(seed + bump) % len(opts)]
        if stmt not in avoid:
            return stmt, want_truth
    return opts[seed % len(opts)], want_truth


def replacement_for(
    subsection: str,
    *,
    want_truth: bool,
    seed: int,
    avoid: set[str],
) -> tuple[str, bool] | None:
    pool = _REPLACEMENTS.get(subsection, _REPLACEMENTS["2.1"])
    ordered = [p for p in pool if p[1] == want_truth] or pool
    for bump in range(len(ordered) * 3):
        stmt, truth = ordered[(seed + bump) % len(ordered)]
        if stmt not in avoid:
            return stmt, truth
    return generate_claim(subsection, want_truth=want_truth, seed=seed, avoid=avoid)


def normalize_stmt(s: str) -> str:
    return re.sub(r"\s+", " ", s.strip())
