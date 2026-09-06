#!/usr/bin/env python3
"""Pass 2: fix weak rewrites; finish remaining rule-dump statements."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load(path: Path):
    data = json.loads(path.read_text())
    key = "tasks" if "tasks" in data else "cases"
    return data, key


def save(path: Path, data) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")


def adapt_expl(expl: str, note: str) -> str:
    if not note or note in expl:
        return expl
    inject = f"\n\nConcrete check for the rewritten claim. {note}\n"
    closer = re.search(r"\nSo the statement is (?:True|False)\.\s*$", expl)
    if closer:
        return expl[: closer.start()] + inject + expl[closer.start() :]
    return expl + inject


# ---------------------------------------------------------------------------
# Fix already-written weak statements
# ---------------------------------------------------------------------------

FIX_EXACT: dict[str, tuple[str, str]] = {
    "At $u=2$, both $u^2+6u+11$ and $(u+3)^2+2$, hence $u^2+6u+11\\ge 2$ agree.": (
        "At $u=1$, both $u^2+6u+11$ and $(u+3)^2+2$ equal $18$, and $18\\ge 2$.",
        "Substitute $u=1$: both sides equal $18$.",
    ),
    "At $u=2$, both $u^2+6u+11$ and $(u+3)^2-2$, hence $u^2+6u+11$ can fall below $2$ agree.": (
        "At $u=0$, both $u^2+6u+11$ and $(u+3)^2-2$ equal $11$, so the rewritten form can fall below $2$.",
        "At $u=0$ the sides are $11$ and $7$; the claimed rewrite fails.",
    ),
    "At $x=3$, both $2x^2-8x+10$ and $2(x-2)^2+2$ agree.": (
        "At $x=3$, both $2x^2-8x+10$ and $2(x-2)^2+2$ equal $4$.",
        "Substitute $x=3$: $18-24+10=4$ and $2(1)^2+2=4$.",
    ),
    "At $t=2$, both $(t-1)(t+1)(t^2+1)(t^4+1)$ and $t^8-1$ agree.": (
        "At $t=2$, both $(t-1)(t+1)(t^2+1)(t^4+1)$ and $t^8-1$ equal $255$.",
        "Compute $(1)(3)(5)(17)=255$ and $256-1=255$.",
    ),
    "At $t=2$, both $(t-1)(t+1)(t^2+1)(t^4+1)$ and $t^{16}-1$ agree.": (
        "At $t=2$, both $(t-1)(t+1)(t^2+1)(t^4+1)$ and $t^{16}-1$ equal $255$.",
        "Left side $255$, while $2^{16}-1=65535\\neq255$.",
    ),
    "At $x=2$, $y=1$, both $x^4+2x^2 y^2+y^4$ and $(x^2+y^2)^2$ agree.": (
        "At $x=2$, $y=1$, both $x^4+2x^2 y^2+y^4$ and $(x^2+y^2)^2$ equal $25$.",
        "Compute $16+8+1=25$ and $(4+1)^2=25$.",
    ),
    "At $x=2$, both $\\sqrt[4]{x^8}$ and $x^2$ agree.": (
        "At $x=2$, both $\\sqrt[4]{x^8}$ and $x^2$ equal $4$.",
        "Compute $\\sqrt[4]{256}=4$ and $2^2=4$.",
    ),
    "At $x=2$, both $\\sqrt[4]{x^4}$ and $x$ agree.": (
        "At $x=-2$, both $\\sqrt[4]{x^4}$ and $x$ equal $-2$.",
        "Left side $\\sqrt[4]{16}=2$ (principal), right side $-2$; they disagree.",
    ),
    "At $x=2$, both $(x^3)^4$ and $x^{12}$ agree.": (
        "At $x=2$, both $(x^3)^4$ and $x^{12}$ equal $4096$.",
        "Compute $(8)^4=4096$ and $2^{12}=4096$.",
    ),
    "At $x=2$, both $(x^3)^4$ and $x^{7}$ agree.": (
        "At $x=2$, both $(x^3)^4$ and $x^{7}$ equal $4096$.",
        "Left $4096$, right $128$; they disagree.",
    ),
    "At $t=2$, both $\\sqrt[4]{t^8}$ and $t^2$ agree.": (
        "At $t=2$, both $\\sqrt[4]{t^8}$ and $t^2$ equal $4$.",
        "Compute $\\sqrt[4]{256}=4$ and $4$.",
    ),
    "At $t=2$, both $\\sqrt[4]{t^4}$ and $t$ agree.": (
        "At $t=-2$, both $\\sqrt[4]{t^4}$ and $t$ equal $-2$.",
        "Left side $2$, right side $-2$; they disagree.",
    ),
    "At $t=2$, both $(t^3)^4$ and $t^{12}$ agree.": (
        "At $t=2$, both $(t^3)^4$ and $t^{12}$ equal $4096$.",
        "Both sides equal $4096$.",
    ),
    "At $t=2$, both $(t^3)^4$ and $t^{7}$ agree.": (
        "At $t=2$, both $(t^3)^4$ and $t^{7}$ equal $4096$.",
        "Left $4096$, right $128$.",
    ),
    "At $u=2$, both $\\sqrt[4]{u^8}$ and $u^2$ agree.": (
        "At $u=2$, both $\\sqrt[4]{u^8}$ and $u^2$ equal $4$.",
        "Both sides equal $4$.",
    ),
    "At $u=2$, both $\\sqrt[4]{u^4}$ and $u$ agree.": (
        "At $u=-2$, both $\\sqrt[4]{u^4}$ and $u$ equal $-2$.",
        "Left $2$, right $-2$.",
    ),
    "At $u=2$, both $(u^3)^4$ and $u^{12}$ agree.": (
        "At $u=2$, both $(u^3)^4$ and $u^{12}$ equal $4096$.",
        "Both sides equal $4096$.",
    ),
    "At $u=2$, both $(u^3)^4$ and $u^{7}$ agree.": (
        "At $u=2$, both $(u^3)^4$ and $u^{7}$ equal $4096$.",
        "Left $4096$, right $128$.",
    ),
    "At $x=2$, both $|x|^2$ and $x^2$ agree.": (
        "At $x=-3$, both $|x|^2$ and $x^2$ equal $9$.",
        "Compute $3^2=9$ and $(-3)^2=9$.",
    ),
    "At $x=2$, both $|x|^2$ and $-x^2$ agree.": (
        "At $x=2$, both $|x|^2$ and $-x^2$ equal $4$.",
        "Left $4$, right $-4$; they disagree.",
    ),
    "At $t=2$, both $|t|^2$ and $t^2$ agree.": (
        "At $t=-3$, both $|t|^2$ and $t^2$ equal $9$.",
        "Both sides equal $9$.",
    ),
    "At $t=2$, both $|t|^2$ and $-t^2$ agree.": (
        "At $t=2$, both $|t|^2$ and $-t^2$ equal $4$.",
        "Left $4$, right $-4$.",
    ),
    # broken iff rewrites — restore concrete iff checks
    "At $x=2$, both $|2x-5|$ and $7$ if and only if $x=6$ or $x=-1$ agree.": (
        "The equation $|2x-5|=7$ holds precisely when $x=6$ or $x=-1$.",
        "Solve $2x-5=7$ or $2x-5=-7$ to recover $x=6$ and $x=-1$.",
    ),
    "At $x=2$, both $|2x-5|$ and $7$ if and only if $x=6$ agree.": (
        "The equation $|2x-5|=7$ holds precisely when $x=6$ alone.",
        "Both $x=6$ and $x=-1$ solve $|2x-5|=7$, so restricting to $x=6$ alone fails.",
    ),
    "At $t=2$, both $|2t-5|$ and $7$ if and only if $t=6$ or $t=-1$ agree.": (
        "The equation $|2t-5|=7$ holds precisely when $t=6$ or $t=-1$.",
        "Solve $2t-5=\\pm7$ to recover $t=6$ and $t=-1$.",
    ),
    "At $t=2$, both $|2t-5|$ and $7$ if and only if $t=6$ agree.": (
        "The equation $|2t-5|=7$ holds precisely when $t=6$ alone.",
        "Both $t=6$ and $t=-1$ solve it.",
    ),
    "At $u=2$, both $|2u-5|$ and $7$ if and only if $u=6$ or $u=-1$ agree.": (
        "The equation $|2u-5|=7$ holds precisely when $u=6$ or $u=-1$.",
        "Solve $2u-5=\\pm7$.",
    ),
    "At $u=2$, both $|2u-5|$ and $7$ if and only if $u=6$ agree.": (
        "The equation $|2u-5|=7$ holds precisely when $u=6$ alone.",
        "Both $u=6$ and $u=-1$ solve it.",
    ),
}


# ---------------------------------------------------------------------------
# Remaining identity dumps → concrete
# ---------------------------------------------------------------------------

REMAINING: dict[str, tuple[str, str]] = {
    # Brahmagupta / cubes / roots
    "For every real quadruple $(u,v,w,a)$, it holds that $(u^2+v^2)(w^2+a^2)=(uw-vz)^2+(uz+vw)^2$, under the standing domain label $D_{1}$.": (
        "At $u=1$, $v=2$, $w=2$, $a=1$ (and with the product pairing using $v$ consistently), both $(u^2+v^2)(w^2+a^2)$ and $(uw-va)^2+(ua+vw)^2$ equal $25$.",
        "Compute $(1+4)(4+1)=25$ and $(2-2)^2+(1+4)^2=25$. The printed $z$ is a label typo for $v$.",
    ),
    "For every real pair $(a,b)$, $(a^2-b^2)^2+(2ab)^2=(a^2+b^2)^2$.": (
        "At $a=2$, $b=1$, both $(a^2-b^2)^2+(2ab)^2$ and $(a^2+b^2)^2$ equal $25$.",
        "Compute $(4-1)^2+4^2=25$ and $5^2=25$.",
    ),
    "For every real pair $(a,b)$, $a^3+b^3=(a+b)(a^2-ab+b^2)$.": (
        "At $a=2$, $b=1$, both $a^3+b^3$ and $(a+b)(a^2-ab+b^2)$ equal $9$.",
        "Compute $8+1=9$ and $3\\cdot(4-2+1)=9$.",
    ),
    "For every real quadruple $(a,e,c,d)$, it holds that $(a^2+e^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$, under the standing domain label $D_{1}$.": (
        "At $a=1$, $e=2$, $c=2$, $d=1$, both $(a^2+e^2)(c^2+d^2)$ and $(ac-ed)^2+(ad+ec)^2$ equal $25$.",
        "Compute $(1+4)(4+1)=25$ and $(2-2)^2+(1+4)^2=25$.",
    ),
    "For every real pair $(x,y)$, $\\sqrt[3]{x^6y^9}=x^2y^3$.": (
        "At $x=2$, $y=1$, both $\\sqrt[3]{x^6y^9}$ and $x^2y^3$ equal $4$.",
        "Compute $\\sqrt[3]{64}=4$ and $4\\cdot1=4$.",
    ),
    "For every real pair $(x,y)$, $\\sqrt[3]{x^6y^9}=x^3y^3$.": (
        "At $x=2$, $y=1$, both $\\sqrt[3]{x^6y^9}$ and $x^3y^3$ equal $4$.",
        "Left $4$, right $8$; they disagree.",
    ),
    "For every real pair $(a,b)$, $\\sqrt[3]{a^6b^9}=a^2b^3$.": (
        "At $a=2$, $b=1$, both $\\sqrt[3]{a^6b^9}$ and $a^2b^3$ equal $4$.",
        "Both sides equal $4$.",
    ),
    "For every real pair $(a,b)$, $\\sqrt[3]{a^6b^9}=a^3b^3$.": (
        "At $a=2$, $b=1$, both $\\sqrt[3]{a^6b^9}$ and $a^3b^3$ equal $4$.",
        "Left $4$, right $8$.",
    ),
    "For every real pair $(p,q)$, $\\sqrt[3]{p^6q^9}=p^2q^3$.": (
        "At $p=2$, $q=1$, both $\\sqrt[3]{p^6q^9}$ and $p^2q^3$ equal $4$.",
        "Both sides equal $4$.",
    ),
    "For every real pair $(p,q)$, $\\sqrt[3]{p^6q^9}=p^3q^3$.": (
        "At $p=2$, $q=1$, both $\\sqrt[3]{p^6q^9}$ and $p^3q^3$ equal $4$.",
        "Left $4$, right $8$.",
    ),
    "The quotient identity $(a^{m}b^{n})^{k}/(a^{n}b^{m})^{k}=(a/b)^{k(m-n)}$ holds for $a,b>0$.": (
        "With $a=4$, $b=2$, $m=3$, $n=1$, $k=2$, both sides of $(a^{m}b^{n})^{k}/(a^{n}b^{m})^{k}=(a/b)^{k(m-n)}$ equal $16$.",
        "Left: $(4^{3}\\cdot2^{1})^{2}/(4^{1}\\cdot2^{3})^{2}=128^{2}/32^{2}=16$; right: $(4/2)^{2(3-1)}=2^{4}=16$.",
    ),
    # Abs value core
    "Negating the input, for every real $t$, $|-t|=|t|$.": (
        "At $t=-5$, both $|-t|$ and $|t|$ equal $5$.",
        "Compute $|5|=5$ and $|-5|=5$.",
    ),
    "For every real $a$, it holds that $|a|=|-a|$.": (
        "At $a=-4$, both $|a|$ and $|-a|$ equal $4$.",
        "Both sides equal $4$.",
    ),
    "Equating $|x|=-x$ for every real $x$ is false.": (
        "At $x=3$, both $|x|$ and $-x$ equal $-3$.",
        "Left $3$, right $-3$; the blanket equation fails.",
    ),
    "For every real $k$, it holds that $|k|=0$ if and only if $k=0$.": (
        "At $k=0$, $|k|=0$, and at $k=2$, $|k|=2\\neq0$.",
        "Zero is the unique root of $|k|=0$.",
    ),
    "For every real pair $(a,b)$, it holds that $|ab|=|a|\\,|b|$.": (
        "At $a=-3$, $b=4$, both $|ab|$ and $|a|\\,|b|$ equal $12$.",
        "Compute $|-12|=12$ and $3\\cdot4=12$.",
    ),
    "Pulling out a factor of two, $|2x|=2|x|$ for every real $x$.": (
        "At $x=-3$, both $|2x|$ and $2|x|$ equal $6$.",
        "Compute $|-6|=6$ and $2\\cdot3=6$.",
    ),
    "Independently, $|pq|=|p|\\,|q|$ for every real pair $(p,q)$.": (
        "At $p=-2$, $q=5$, both $|pq|$ and $|p|\\,|q|$ equal $10$.",
        "Both sides equal $10$.",
    ),
    "For every real $t$, it holds that $|-3t|=3t$ is false.": (
        "At $t=-2$, both $|-3t|$ and $3t$ equal $-6$.",
        "Left $|6|=6$, right $-6$; the printed equation fails.",
    ),
    "Squares are transparent: for every real $m$, $|m^2|=m^2$.": (
        "At $m=-3$, both $|m^2|$ and $m^2$ equal $9$.",
        "Both sides equal $9$.",
    ),
    "Factoring under bars: for every real $x$, $|x^2-4|=|(x-2)(x+2)|$.": (
        "At $x=3$, both $|x^2-4|$ and $|(x-2)(x+2)|$ equal $5$.",
        "Both sides equal $5$.",
    ),
    "For every real $t$, it holds that $|t^2-9|=|t-3|\\,|t+3|$.": (
        "At $t=4$, both $|t^2-9|$ and $|t-3|\\,|t+3|$ equal $7$.",
        "Both sides equal $7$.",
    ),
    "A perfect square inside bars: $|x^2-2x+1|=(x-1)^2$ for every real $x$.": (
        "At $x=4$, both $|x^2-2x+1|$ and $(x-1)^2$ equal $9$.",
        "Both sides equal $9$.",
    ),
    "For every real $u$, dropping the bars in $|2u+1|=2u+1$ is treated as legal.": (
        "At $u=-2$, both $|2u+1|$ and $2u+1$ equal $-3$.",
        "Left $|-3|=3$, right $-3$; dropping bars fails.",
    ),
    "For every real $x$, $|x-3|<5$ if and only if $-2<x<8$.": (
        "At $x=0$, $|x-3|=3<5$, and $0$ lies in $(-2,8)$; at $x=9$, $|9-3|=6\\not<5$.",
        "The open interval $(-2,8)$ is exactly the solution set.",
    ),
    "For every real $n$, the identity $\\sqrt{n^2}=|n|$ is recorded.": (
        "At $n=-5$, both $\\sqrt{n^2}$ and $|n|$ equal $5$.",
        "Principal square root returns $5$.",
    ),
    "For every real $x$, it holds that $|x-0|+|x-5|=5$.": (
        "At $x=-1$, $|x|+|x-5|$ equals $5$.",
        "At $x=-1$: $1+6=7\\neq5$, so the universal claim fails.",
    ),
    "For every real $x$, $|x-3|<5$ if and only if $-8<x<2$.": (
        "At $x=7$, $|x-3|=4<5$, yet $7$ lies outside the printed interval $(-8,2)$.",
        "The correct window is $(-2,8)$, not $(-8,2)$.",
    ),
    "For every real $x$, it holds that $|x+2|=x+2$.": (
        "At $x=-5$, both $|x+2|$ and $x+2$ equal $-3$.",
        "Left $3$, right $-3$.",
    ),
    # Ch10 residual laws
    "The power law $\\log(a^{c})=c\\log a$ holds for $a>0$.": (
        "With $a=8$, $c=2$ and base $2$, both $\\log(a^{c})$ and $c\\log a$ equal $6$.",
        "Compute $\\log_2 64=6$ and $2\\cdot3=6$.",
    ),
    "Addition inside a logarithm is a universal law: $\\log(a+b)=\\log a+\\log b$.": (
        "With $a=4$, $b=4$ and base $2$, both $\\log(a+b)$ and $\\log a+\\log b$ equal $3$.",
        "Left $\\log_2 8=3$, right $2+2=4$.",
    ),
    "Quotient law $\\log(a/b)=\\log a-\\log b$ holds for $a,b>0$.": (
        "With $a=32$, $b=4$ and base $2$, both $\\log(a/b)$ and $\\log a-\\log b$ equal $3$.",
        "Compute $\\log_2 8=3$ and $5-2=3$.",
    ),
}


def rewrite_abs_generic(s: str, key: bool) -> tuple[str, str] | None:
    """Generic concrete rewrites for remaining absolute-value identities."""
    # |expr| = |factors| style
    m = re.match(
        r"For every real \$([a-z])\$, it holds that \$(\|[^$]+)\|=\|([^$]+)\$\.",
        s,
    )
    # simpler patterns
    patterns = [
        # For every real $x$, it holds that $|...|=...$.
        (
            r"^For every real \$([a-z])\$, it holds that \$(.+)\$\.$",
            "eq",
        ),
        (
            r"^For every real \$([a-z])\$, \$(.+)\$\.$",
            "eq",
        ),
        (
            r"^For every real pair \(([a-z]),([a-z])\), (?:it holds that )?\$(.+)\$\.$",
            "pair",
        ),
        (
            r"^For every real pair \(([a-z]),([a-z])\) with (.+), \$(.+)\$\.$",
            "pair_cond",
        ),
        (
            r"^For every real \$([a-z])\$ with (.+), it holds that \$(.+)\$\.$",
            "cond",
        ),
        (
            r"^Pulling out a factor of two, \$(\|2x-6\|)=2\|x-3\|\$ for every real \$x\.$",
            "special_2x6",
        ),
        (
            r"^For every real \$([a-z])\$, it holds that \$(\|2[a-z]-6\|)=2\|[a-z]-3\|\$\.$",
            "pull2",
        ),
    ]

    # Distance-to-segment false claims
    if "sum of its distances" in s and "no restriction" in s:
        # extract endpoints if present
        nums = re.findall(r"\$(\d+)\$", s)
        if len(nums) >= 2:
            a, b = nums[0], nums[1]
            mid = (int(a) + int(b)) // 2
            outside = int(a) - 1
            length = int(b) - int(a)
            new = (
                f"At $x={outside}$, the sum of distances to ${a}$ and to ${b}$ equals ${length}$."
            )
            note = (
                f"Outside $[{a},{b}]$ the sum exceeds ${length}$; "
                f"e.g. at $x={outside}$ the sum is ${abs(outside-int(a))+abs(outside-int(b))}$."
            )
            return new, note

    if s in REMAINING:
        return REMAINING[s]

    # |A|=|B| or |A|=expr
    m = re.match(
        r"^(?:For every real \$([a-z])\$, (?:it holds that )?|For every real \$([a-z])\$, )"
        r"\$(.+)\$$",
        s.rstrip("."),
    )
    # More reliable line-by-line handlers:

    # Pattern: For every real $x$, it holds that $|LHS|=RHS$.
    m = re.match(
        r"^For every real \$([a-z])\$, it holds that \$(.+)\$\.?$",
        s,
    )
    if m:
        x, formula = m.group(1), m.group(2)
        if "if and only if" in formula or "\\iff" in formula:
            # leave specialized; try concrete test points in formula text
            return None
        if "=" not in formula:
            return None
        # Avoid mangling complicated ones with text
        if "under the standing" in s:
            # strip domain label for rewrite
            s2 = re.sub(r", under the standing domain label \$D_\{\d\}\$\.?$", ".", s)
            m = re.match(
                r"^For every real \$([a-z])\$, it holds that \$(.+)\$\.?$",
                s2,
            )
            if not m:
                return None
            x, formula = m.group(1), m.group(2)

        left, right = formula.split("=", 1)
        left, right = left.strip(), right.strip()
        # Choose a revealing point
        val = -3 if (not key or "|=" in formula.replace(" ", "") or right.strip() in {x, f"{x}", f"-{x}"}) else 2
        # For true product/factor identities use positive-ish
        if key and "|" in left:
            val = 4 if "x^2" in left or "a^2" in left or "r^2" in left or "p^2" in left else -3
            if re.search(r"\|[a-z]\|=[a-z]\$", s) or re.search(r"\|[a-z]\|=[a-z]$", formula.replace(" ", "")):
                val = -3
        if not key:
            # False identity |a|=a etc.
            if re.search(r"\|[a-z]\|\s*=\s*[a-z]$", formula.replace(" ", "")):
                val = -3
                new = f"At ${x}={val}$, both ${left}$ and ${right}$ equal ${val}$."
                note = f"Left side is ${abs(val)}$, right side is ${val}$."
                return new, note
            if "+" in left and "|" in left and re.search(r"=\s*\d+$", formula.replace(" ", "")):
                # distance sum equals length — test outside
                val = -1
                new = f"At ${x}={val}$, ${left}$ equals ${right}$."
                note = f"Substitute ${x}={val}$; the sum exceeds the claimed constant."
                return new, note
            if "\\ge" in formula or "\\le" in formula:
                return None
            val = 2
            new = f"At ${x}={val}$, both ${left}$ and ${right}$ equal a common value."
            note = f"Substitute ${x}={val}$; the two sides disagree."
            return new, note

        new = f"At ${x}={val}$, both ${left}$ and ${right}$ agree under direct evaluation."
        # Prefer numeric when easy
        new = f"At ${x}={val}$, both ${left}$ and ${right}$ match after substitution."
        note = f"Substitute ${x}={val}$ into both sides of ${left}={right}$."
        return new, note

    # Pair form
    m = re.match(
        r"^For every real pair \(([a-z]),([a-z])\), (?:it holds that )?\$(.+)\$\.?$",
        s,
    )
    if m:
        a, b, formula = m.groups()
        if "=" not in formula and "\\le" not in formula and "\\ge" not in formula:
            return None
        if "\\le" in formula or "\\ge" in formula:
            # triangle / bound — pick concrete numbers from constraints if present
            return (
                f"At ${a}=2$, ${b}=-1$, the claimed bound ${formula}$ holds."
                if key
                else f"At ${a}=2$, ${b}=-1$, the claimed bound ${formula}$ holds."
            ), f"Substitute ${a}=2$, ${b}=-1$ into ${formula}$."
        left, right = formula.split("=", 1)
        new = f"At ${a}=-2$, ${b}=3$, both ${left.strip()}$ and ${right.strip()}$ match after substitution."
        note = f"Substitute ${a}=-2$, ${b}=3$."
        return new, note

    # Pair with constraints
    m = re.match(
        r"^For every real pair \(([a-z]),([a-z])\) with (.+), \$(.+)\$\.?$",
        s,
    )
    if m:
        a, b, cond, formula = m.groups()
        if key:
            new = f"With ${a}=2$, ${b}=3$ (so {cond}), the bound ${formula}$ holds."
            note = f"Check ${a}=2$, ${b}=3$ against ${formula}$."
        else:
            new = f"With ${a}=3$, ${b}=5$ (so {cond}), the bound ${formula}$ holds."
            note = f"At ${a}=3$, ${b}=5$ the bound fails."
        return new, note

    # Product identity sentence
    if "product identity" in s.lower() and "|xy|" in s.replace(" ", ""):
        return (
            "At $x=-2$, $y=3$, both $|xy|$ and $|x|\\,|y|$ equal $6$.",
            "Compute $|-6|=6$ and $2\\cdot3=6$.",
        )

    # Someone replaces...
    m = re.match(r"^Someone replaces \$(.+)\$ by \$(.+)\$ for every real \$([a-z])\$\.$", s)
    if m:
        wrong_from, wrong_to, x = m.groups()
        return (
            f"At ${x}=-2$, replacing ${wrong_from}$ by ${wrong_to}$ is valid.",
            f"At a negative input the replacement fails.",
        )

    if s.startswith("Someone replaces") or s.startswith("Stripping the outer") or s.startswith("Replaces"):
        return (
            "At $x=-2$, the proposed bar-dropping replacement is valid.",
            "A negative test input shows the replacement fails.",
        )

    # Pulling out factor variants already partly handled
    m = re.match(
        r"^Pulling out a factor of two, \$(\|.+\|)=(.+)\$ for every real \$([a-z])\$\.$",
        s,
    )
    if m:
        left, right, x = m.groups()
        return (
            f"At ${x}=4$, both ${left}$ and ${right}$ equal after substitution.",
            f"Substitute ${x}=4$.",
        )

    m = re.match(
        r"^For every real \$([a-z])\$, it holds that \$(\|2[a-z]-6\|)=2\|[a-z]-3\|\$\.$",
        s,
    )
    if m:
        x = m.group(1)
        return (
            f"At ${x}=5$, both $|2{x}-6|$ and $2|{x}-3|$ equal $4$.",
            f"Compute $|10-6|=4$ and $2\\cdot2=4$.",
        )

    # iff interval wrong/right already partially
    m = re.match(
        r"^For every real \$([a-z])\$, \|([a-z])-3\|<5 if and only if (.+)\.$",
        s,
    )
    if m:
        x, _, interval = m.groups()
        if key:
            return (
                f"At ${x}=0$, $|{x}-3|=3<5$ and $0$ lies in the interval ${interval}$; at ${x}=9$, $|9-3|=6\\not<5$.",
                "The solution set of $|x-3|<5$ is exactly $(-2,8)$.",
            )
        return (
            f"At ${x}=7$, $|{x}-3|=4<5$, yet $7$ fails the printed interval condition ${interval}$.",
            "The printed interval is not the solution set of $|x-3|<5$.",
        )

    # variant "|a|=a (variant 1)"
    m = re.match(
        r"^For every real \$([a-z])\$, it holds that \$(\|[a-z]\|)=([a-z])\$ \(variant 1\)\.$",
        s,
    )
    if m:
        x = m.group(1)
        return (
            f"At ${x}=-4$, both $|{x}|$ and ${x}$ equal $-4$.",
            "Left $4$, right $-4$.",
        )

    # For z>0 / rational power already in remaining
    if "rational-power identity" in s.lower():
        return (
            "With $x=16$, $m=3$, $n=4$, both $(x^{m/n})^{n}$ and $x^{m}$ equal $4096$.",
            "Compute $((16^{3/4}))^4=16^3=4096$.",
        )

    # Identity holds for every real x: (x^2-1)/(x-1)=x+1
    m = re.match(r"^The identity \$(.+)\$ holds for every real \$([a-z])\$\.$", s)
    if m:
        formula, x = m.groups()
        return (
            f"At ${x}=1$, both sides of ${formula}$ are defined and equal.",
            f"At ${x}=1$ the left side is undefined, so the identity cannot hold for every real ${x}$.",
        )

    # For every positive integer n
    if "positive integer $n$" in s and "divisible" in s:
        return (
            "At $n=3$ and $u=2$, both $u^n-1$ and $(u-1)(u^{n-1}+\\cdots+1)$ equal $7$.",
            "Compute $8-1=7$ and $1\\cdot(4+2+1)=7$.",
        )

    # bounded expression
    if "bounded expression" in s:
        return (
            "At $x=10$, $\\dfrac{|x|}{1+|x|}=\\dfrac{10}{11}<1$.",
            "The fraction is always strictly below $1$ for finite $x$.",
        )

    # cube inequality
    if "b^3\\ge b^2" in s.replace(" ", "") or "b^3\\ge b^2" in s:
        return (
            "At $b=1/2$, both $b^3$ and $b^2$ satisfy $b^3\\ge b^2$.",
            "Compute $(1/2)^3=1/8$ and $(1/2)^2=1/4$; $1/8\\not\\ge 1/4$.",
        )

    # z^{-1}+z^{-2}
    if "z^{-1}+z^{-2}" in s:
        return (
            "At $z=2$, both $z^{-1}+z^{-2}$ and $\\dfrac{1}{z+z^2}$ equal $\\dfrac{3}{4}$.",
            "Left $1/2+1/4=3/4$, right $1/(2+4)=1/6$; they disagree.",
        )

    # continued fraction identity
    if "1+\\dfrac{1}{1+\\frac1t}" in s or "1+\\frac1t" in s:
        return (
            "At $t=2$, both $\\dfrac{1}{1+\\dfrac{1}{1+\\frac1t}}$ and $\\dfrac{t+1}{2t+1}$ equal $\\dfrac{3}{5}$.",
            "Both sides equal $3/5$.",
        )

    # sqrt((v-2)^2)=v-2
    m = re.match(
        r"^For every real \$([a-z])\$, it holds that \$\\sqrt\{\(([a-z])-2\)\^2\}=([a-z])-2\$\.$",
        s,
    )
    if m:
        v = m.group(1)
        return (
            f"At ${v}=0$, both $\\sqrt{{({v}-2)^2}}$ and ${v}-2$ equal $-2$.",
            "Left $2$, right $-2$.",
        )

    # |q|-|q-2|=2
    m = re.match(
        r"^For every real \$([a-z])\$, it holds that \$(\|[a-z]\|)-(\|[a-z]-2\|)=2\$\.$",
        s,
    )
    if m:
        q = m.group(1)
        return (
            f"At ${q}=0$, $|{q}|-|{q}-2|$ equals $2$.",
            "At $q=0$: $0-2=-2\\neq2$.",
        )

    # When u>=5/2 form
    m = re.match(
        r"^For every real \$([a-z])\$, it holds that \$(.+)\$ when \$(.+)\$\.$",
        s,
    )
    if m:
        x, formula, cond = m.groups()
        return (
            f"At ${x}=4$ (so ${cond}$), both sides of ${formula}$ match.",
            f"Substitute ${x}=4$ under ${cond}$.",
        )

    # interval restricted distance sum
    m = re.match(
        r"^For every real \$([a-z])\$ with (.+), it holds that \$(.+)\$, under the standing domain label.+$",
        s,
    )
    if m:
        x, cond, formula = m.groups()
        return (
            f"At a test point inside ${cond}$, both sides of ${formula}$ match.",
            f"Pick a point in ${cond}$ and evaluate ${formula}$.",
        )

    return None


def polish_agree_phrasing(s: str) -> str:
    """Tighten 'match after substitution' phrasing — leave as-is if already numeric."""
    return s


def process() -> None:
    stats = {"fixed": 0, "rewritten": 0, "missed": []}

    paths = [
        ROOT / "src/data/math-ch2-cases.json",
        ROOT / "src/data/math-ch10-exp-log.json",
    ]

    for path in paths:
        data, key = load(path)
        for case in data[key]:
            stmts = case["statements"]
            expls = case.get("tactical_explanations") or []
            keys = case["answer_key"]
            for i, s in enumerate(stmts):
                # Fix weak prior rewrites
                if s in FIX_EXACT:
                    new_s, note = FIX_EXACT[s]
                    stmts[i] = new_s
                    if i < len(expls):
                        expls[i] = adapt_expl(expls[i], note)
                    stats["fixed"] += 1
                    continue

                if s in REMAINING:
                    new_s, note = REMAINING[s]
                    stmts[i] = new_s
                    if i < len(expls):
                        expls[i] = adapt_expl(expls[i], note)
                    stats["rewritten"] += 1
                    continue

                # Remaining dumps: still look like universal identity recitations
                is_dump = bool(
                    re.search(r"(?i)for every real|holds for every|holds for \$a|universal law|power law|quotient law|quotient identity|rational-power|Someone replaces|Stripping the outer|Replaces \$|Prints \$|product identity", s)
                )
                # skip already concrete
                if s.startswith("At ") or s.startswith("With "):
                    is_dump = False
                if "sum of its distances" in s and "no restriction" in s:
                    is_dump = True
                if is_dump:
                    gen = rewrite_abs_generic(s, bool(keys[i]))
                    if gen:
                        new_s, note = gen
                        stmts[i] = polish_agree_phrasing(new_s)
                        if i < len(expls):
                            expls[i] = adapt_expl(expls[i], note)
                        stats["rewritten"] += 1
                    else:
                        stats["missed"].append(f"{case['case_id']} {chr(65+i)}: {s[:120]}")

        save(path, data)

    print(json.dumps({k: (v if k != "missed" else len(v)) for k, v in stats.items()}, indent=2))
    for m in stats["missed"][:50]:
        print("MISS:", m)


if __name__ == "__main__":
    process()
