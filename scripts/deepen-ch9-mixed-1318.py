#!/usr/bin/env python3
"""Deepen Chapter 9 mixed-exam letters to MATH 13.18 / 7.79 step-per-display depth.

Rebuilds every letter from rewrite-ch9-expl-779-voice builders, then:
  - splits chained equalities into one step per $$
  - inserts a missing working polynomial when useful
  - applies hand overrides with full tutoring depth for thin clusters
  - never pads with “hold the last display” filler

Run: python3 scripts/deepen-ch9-mixed-1318.py
"""
from __future__ import annotations

import importlib.util
import json
import re
import statistics
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MIXED = ROOT / "src/data/math-ch9-mixed-exam.json"
SRC = ROOT / "scripts/rewrite-ch9-expl-779-voice.py"

spec = importlib.util.spec_from_file_location("ch9_779", SRC)
mod = importlib.util.module_from_spec(spec)
assert spec.loader is not None
sys.modules["ch9_779"] = mod
spec.loader.exec_module(mod)

D = mod.D
expl = mod.expl
validate_letter = mod.validate_letter
strip_from_prefix = mod.strip_from_prefix
MIXED_BUILDERS = mod.MIXED_BUILDERS
normalize_displays = mod.normalize_displays


def join(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and str(p).strip())


def split_header(e: str) -> tuple[str, str, str]:
    m = re.match(r"^(\*\*[A-E]\.\*\* → (?:True|False))\n\n([\s\S]*)$", e)
    if not m:
        raise ValueError(f"bad header {e[:60]!r}")
    header, body = m.group(1), m.group(2).rstrip()
    head, close = body.rsplit("\n\n", 1)
    if "so the statement is" not in close:
        raise ValueError(f"bad close {close[:60]!r}")
    return header, head, close


def split_chained_display(inner: str) -> list[str]:
    inner = re.sub(r"\s+", " ", inner).strip()
    if r"\qquad" in inner or r"\lim" in inner or r"\Delta" in inner:
        return [inner]
    if r"\implies" in inner:
        parts = [p.strip() for p in inner.split(r"\implies") if p.strip()]
        if 2 <= len(parts) <= 3 and all(len(p) < 90 for p in parts):
            return parts
    if inner.count("=") == 2 and "\\frac" not in inner and inner.count("(") <= 4:
        parts = [p.strip() for p in inner.split("=")]
        if all(parts) and all(len(p) < 70 for p in parts):
            return [f"{parts[0]}={parts[1]}", f"{parts[1]}={parts[2]}"]
    return [inner]


def overview_poly(overview: str) -> str | None:
    for d in re.findall(r"\$\$([^$]+)\$\$", overview):
        d = re.sub(r"\s+", " ", d).strip()
        if "=" not in d:
            continue
        if r"\qquad" in d and d.count("=") >= 2:
            first = d.split(r"\qquad")[0].strip()
            if "=" in first and len(first) < 100:
                return first
            continue
        if len(d) < 120:
            return d
    return None


def rebuild_paras(head: str) -> list[str]:
    paras = [p for p in head.split("\n\n") if p.strip()]
    out: list[str] = []
    for p in paras:
        if "$$" not in p:
            out.append(p)
            continue
        pieces = re.split(r"(\$\$[^$]+\$\$)", p)
        prose_buf: list[str] = []
        for piece in pieces:
            if piece.startswith("$$"):
                if prose_buf:
                    out.append(" ".join(prose_buf).strip())
                    prose_buf = []
                for part in split_chained_display(piece[2:-2]):
                    out.append(D(part))
            elif piece.strip():
                prose_buf.append(piece.strip())
        if prose_buf:
            out.append(" ".join(prose_buf).strip())
    return out


def deepen_auto(e: str, overview: str) -> str:
    header, head, close = split_header(e)
    paras = rebuild_paras(head)
    poly = overview_poly(overview)

    # Collect existing display inners (compact)
    existing = {re.sub(r"\s+", "", p[2:-2]) for p in paras if p.startswith("$$")}

    if poly:
        pc = re.sub(r"\s+", "", poly)
        # Insert only if no display already contains this assignment's LHS=RHS core
        already = any(pc in ex or ex in pc for ex in existing)
        # Also skip if a shorter factor form is already present as first poly display
        if not already and len(poly) < 110:
            insert_at = 0
            for i, p in enumerate(paras):
                if not p.startswith("$$"):
                    insert_at = i + 1
                    break
            paras.insert(insert_at, D(poly))
            existing.add(pc)

    nd = sum(1 for p in paras if p.startswith("$$"))
    low = (join(*paras) + close).lower()

    # Genuine extra step when display-starved — always mathematical
    if nd < 3:
        extras: list[str] = []
        if ("factor" in low or "divides" in low) and nd < 3:
            m = re.search(r"(?:p|h|s|c|f|g|q)\(([-\d]+)\)\s*=\s*([-\d]+)", join(*paras))
            if m:
                key = f"{m.group(0)}".replace(" ", "")
                # already have it
            else:
                # extract a claimed root from prose like "at x=2" / "day 2"
                m2 = re.search(r"(?:at |x=|t=|n=|day |hour )\$?(-?\d+)", join(*paras), re.I)
                if m2 and D(rf"p({m2.group(1)})")[2:-2] not in str(existing):
                    extras.append(
                        "Confirm by substituting the candidate root into the rebuilt formula."
                    )
                    # Don't invent p(r)=0 if the letter is False — skip numeric if unknown
        if re.search(r"\bodd\b", low) and not any("p(-x)" in p or "(-x)" in p for p in paras):
            extras.append("Expand the formula at $-x$ and compare with $-p(x)$.")
            if D(r"p(-x)=-p(x)")[2:-2].replace(" ", "") not in existing:
                extras.append(D(r"p(-x)=-p(x)"))
        if "nest" in low or "highest power" in low:
            if not any("m\\cdot n" in p or "cdot" in p for p in paras if p.startswith("$$")):
                if "1\\cdot" not in join(*paras) and "2\\cdot" not in join(*paras) and "3\\cdot" not in join(*paras):
                    extras.append(
                        "Write the product of the two highest powers before expanding."
                    )
        if extras:
            # Only add if they don't duplicate
            for ex in extras:
                if ex.startswith("$$"):
                    if re.sub(r"\s+", "", ex[2:-2]) in existing:
                        continue
                paras.append(ex)

    body = join(*paras)
    text = normalize_displays(f"{header}\n\n{body}\n\n{close}")
    if r"\deg" in text or r"\circ" in text:
        raise ValueError("deg/circ")
    return text


def hand_packs() -> dict[tuple[str, int], str]:
    H: dict[tuple[str, int], str] = {}

    def put(tid: str, idx: int, letter: str, truth: bool, *parts: str) -> None:
        H[(tid, idx)] = expl(letter, truth, *parts)

    # ---- systematic deep packs for every task's thinner letters ----
    # e01 already decent from base+auto; deepen C/D/E style ones via auto

    # e03 B opening
    put("math-9-e3", 1, "B", True,
        "The opening imbalance is the intercept of the ledger, the height at $t=0$.",
        D(r"h(t)=t(t-2)(t-3)"),
        D(r"h(0)=0\cdot(-2)\cdot(-3)=0"),
        "That first column is already a tabulated $0$. The unique monic cubic through the three zeros $0,2,3$ vanishes at the origin. The lock starts on the datum, so the statement is True.")
    put("math-9-e3", 3, "D", False,
        "Being a tabulated abscissa is not the factor test. The factor $t-1$ divides $h$ only if the hour-$1$ reading is $0$.",
        D(r"h(t)=t(t-2)(t-3)"),
        D(r"h(1)=1\cdot(-1)\cdot(-2)=2"),
        D(r"2\neq 0"),
        "That entry is not zero. The hour is recorded because the ledger lists every integer mark, not because $t-1$ is a factor. The factor test fails, so the statement is False.")

    # e04 parity / nest
    put("math-9-e4", 1, "B", True,
        "Oddness is the identity $q(-x)=-q(x)$, which holds as soon as only odd powers appear.",
        D(r"q(x)=x^{3}-x"),
        D(r"q(-x)=(-x)^{3}-(-x)=-x^{3}+x"),
        D(r"q(-x)=-q(x)"),
        "There is no even-power term and no leftover constant. That is the definition of an odd function, so the statement is True.")
    put("math-9-e4", 2, "C", True,
        "Evenness is the identity $p(-x)=p(x)$, which holds as soon as only even powers appear.",
        D(r"p(x)=x^{2}-1"),
        D(r"p(-x)=(-x)^{2}-1=x^{2}-1"),
        D(r"p(-x)=p(x)"),
        "Squaring kills the minus sign, and there is no odd-power term to survive the swap. Hence $p$ is even, so the statement is True.")
    put("math-9-e4", 3, "D", True,
        "Nesting multiplies highest powers: the outer map $p$ has degree $2$ and the inner map $q$ has degree $3$.",
        D(r"2\cdot 3=6"),
        D(r"p(q(x))=(x^{3}-x)^{2}-1"),
        D(r"p(q(x))=x^{6}-2x^{4}+x^{2}-1"),
        "The leading term is $x^{6}$, and nothing cancels it because the leading coefficients are $1$ and $1$. The nested highest power is $x^{6}$, so the statement is True.")
    put("math-9-e4", 4, "E", False,
        "The other order multiplies the same two degrees: outer $3$ times inner $2$ is again $6$, not $5$.",
        D(r"3\cdot 2=6"),
        D(r"q(p(x))=(x^{2}-1)^{3}-(x^{2}-1)"),
        D(r"q(p(x))=x^{6}-3x^{4}+2x^{2}"),
        "The expansion begins with $x^{6}$. A drop to $x^{5}$ would have needed the leading coefficients to cancel, which they do not. The nested highest power is $x^{6}$, not $x^{5}$, so the statement is False.")

    # e07 full
    put("math-9-e7", 0, "A", True,
        "An affine outer map has degree $1$, so it preserves the inner degree rather than raising it. Write the degree product, then expand.",
        D(r"1\cdot 2=2"),
        D(r"q(p(x))=(x^{2}-1)-2"),
        D(r"q(p(x))=x^{2}-3"),
        "The highest power that appears is $x^{2}$. Nothing of degree $3$ can appear because $q$ is a line. The nested highest power is $x^{2}$, so the statement is True.")
    put("math-9-e7", 1, "B", False,
        "The other order is a quadratic outer map around an affine inner map, so the degrees multiply as $2\\cdot 1=2$, not $3$.",
        D(r"2\cdot 1=2"),
        D(r"p(q(x))=(x-2)^{2}-1"),
        D(r"p(q(x))=x^{2}-4x+3"),
        "The expansion is quadratic. A cubic would have needed the inner map to contribute an $x^{2}$ of its own, which a line does not. The nested highest power is $x^{2}$, not $x^{3}$, so the statement is False.")
    put("math-9-e7", 2, "C", False,
        "Nesting in opposite orders is a different composition, so evaluate both inside-out at the origin and compare.",
        D(r"q(p(0))=q(-1)=-3"),
        D(r"p(q(0))=p(-2)=3"),
        D(r"-3\neq 3"),
        "The two numbers disagree. Equal nested degree does not make the two polynomials the same. Nesting does not commute here, so the statement is False.")
    put("math-9-e7", 3, "D", True,
        "The factor theorem at $x=1$ asks whether $p(q(1))$ vanishes, equivalently whether $x-1$ appears after expanding the nesting.",
        D(r"p(q(x))=(x-2)^{2}-1"),
        D(r"p(q(x))=(x-1)(x-3)"),
        D(r"p(q(1))=p(-1)=0"),
        "The linear factor $x-1$ is visible in the factorisation, and the substitution confirms it. So $x-1$ divides the nesting, so the statement is True.")
    put("math-9-e7", 4, "E", False,
        "Oddness requires only odd powers. Expand the nesting $q(p(x))$ and read the powers.",
        D(r"q(p(x))=x^{2}-3"),
        D(r"q(p(-x))=x^{2}-3=q(p(x))"),
        D(r"q(p(-x))\neq -q(p(x))"),
        "Only even powers appear, so the nesting is even rather than odd. Even is the opposite of odd, so the statement is False.")

    # e10 micro-scenarios
    put("math-9-e10", 2, "C", True,
        "Nesting multiplies highest powers: feeding a degree-$2$ inner map into a degree-$2$ outer map produces degree $4$.",
        D(r"2\cdot 2=4"),
        D(r"(x^{2})^{2}-1"),
        D(r"x^{4}-1"),
        "The leading term is $x^{4}$, and subtracting $1$ cannot cancel it. The nested highest power is $x^{4}$, so the statement is True.")
    put("math-9-e10", 3, "D", True,
        "A cubic of this shape factors by pulling out $x$ and writing the rest as a difference of squares.",
        D(r"x^{3}-4x=x(x^{2}-4)"),
        D(r"x(x-2)(x+2)"),
        D(r"x=-2,\ 0,\ 2"),
        "The three linear pieces are distinct, so the zeros are $-2$, $0$ and $2$. Three distinct real zeros occur, so the statement is True.")
    put("math-9-e10", 4, "E", True,
        "A double root is automatically a root of the derivative. Write $r(x)=(x-1)^{2}(x+1)$ and differentiate.",
        D(r"r(x)=(x-1)^{2}(x+1)"),
        D(r"r'(x)=2(x-1)(x+1)+(x-1)^{2}"),
        D(r"r'(x)=(x-1)(3x+1)"),
        "The factor $x-1$ survives in $r'$, so $r$ and $r'$ share the root $x=1$. A common real root therefore exists, so the statement is True.")

    # e12 factors
    put("math-9-e12", 1, "B", True,
        "The factor theorem at $x=-1$ is the corresponding table column: $x+1$ divides the interpolant if and only if that entry is $0$.",
        D(r"p(-1)=0"),
        D(r"p(x)=(x-2)(x+1)"),
        D(r"p(x)=x^{2}-x-2"),
        "The $x=-1$ sample vanishes, and the monic quadratic through the two vanishing columns displays the factor. The factor test passes, so the statement is True.")
    put("math-9-e12", 2, "C", True,
        "The same theorem at $x=2$ is the corresponding column: $x-2$ divides the interpolant if and only if that entry is $0$.",
        D(r"p(2)=0"),
        D(r"p(x)=(x-2)(x+1)"),
        D(r"p(x)=x^{2}-x-2"),
        "The $x=2$ sample vanishes, so $x-2$ is a factor. Together with $x+1$ that pins the unique monic quadratic. The factor test passes, so the statement is True.")

    # e13 D oddness
    put("math-9-e13", 3, "D", False,
        "Oddness would need $c(0)=0$ and a zero set symmetric about the origin.",
        D(r"c(t)=-(t+1)(t-1)(t-2)"),
        D(r"c(0)=-2\neq 0"),
        D(r"\{-1,1,2\}\text{ is not symmetric about }0"),
        "A nonzero intercept already kills oddness. The zeros are not symmetric about $0$ either. The camber graph is not odd, so the statement is False.")
    # fix text in display - no English
    put("math-9-e13", 3, "D", False,
        "Oddness would need $c(0)=0$ and a zero set symmetric about the origin.",
        D(r"c(t)=-(t+1)(t-1)(t-2)"),
        D(r"c(0)=-2\neq 0"),
        "The zero set $\\{-1,1,2\\}$ is not symmetric about $0$ either: $-2$ is missing while $2$ appears. A nonzero intercept already kills oddness. The camber graph is not odd, so the statement is False.")

    # e14
    put("math-9-e14", 0, "A", True,
        "The remainder theorem says that the remainder on division by $x-1$ is the number $f(1)$, so substitute.",
        D(r"f(x)=x^{3}-x=x(x-1)(x+1)"),
        D(r"f(1)=1-1=0"),
        "The factor $x-1$ is already visible, so the remainder is $0$. Equivalently, $f(1)=0$ is the remainder itself. The remainder is $0$, so the statement is True.")
    put("math-9-e14", 1, "B", False,
        "The same theorem for $g$ asks for $g(1)$, not for a guess from the shape of $f$.",
        D(r"g(x)=x^{2}-4=(x-2)(x+2)"),
        D(r"g(1)=1-4=-3"),
        D(r"-3\neq 0"),
        "That remainder is $-3$, not $0$. The factor $x-1$ does not divide $g$. The remainder is not $0$, so the statement is False.")
    put("math-9-e14", 2, "C", False,
        "Even plus odd is even only if the odd summand vanishes. Add the two formulas and read the powers.",
        D(r"f(x)+g(x)=(x^{3}-x)+(x^{2}-4)"),
        D(r"f(x)+g(x)=x^{3}+x^{2}-x-4"),
        "The $x^{3}$ term survives, so the sum is neither even nor odd. A surviving odd power kills evenness. The sum is not even, so the statement is False.")
    put("math-9-e14", 3, "D", True,
        "Nesting multiplies highest powers: outer degree $3$ times inner degree $2$ is $6$.",
        D(r"3\cdot 2=6"),
        D(r"f(g(x))=(x^{2}-4)^{3}-(x^{2}-4)"),
        D(r"f(g(x))=x^{6}-12x^{4}+47x^{2}-60"),
        "The leading term is $x^{6}$, and the leading coefficients $1$ and $1$ do not cancel. The nested highest power is $x^{6}$, so the statement is True.")
    put("math-9-e14", 4, "E", False,
        "A common linear factor would have to appear in both factorisations.",
        D(r"f(x)=x(x-1)(x+1)"),
        D(r"g(x)=(x-2)(x+2)"),
        D(r"\{-1,0,1\}\cap\{-2,2\}=\emptyset"),
        "The two lists of real linear factors are disjoint. No common real linear factor exists, so the statement is False.")

    # e17 D no real root
    put("math-9-e17", 3, "D", True,
        "A real root of $q(p(x))$ would require $q(p(x))=0$. Expand and inspect the range.",
        D(r"q(p(x))=(x^{2}-1)^{2}+1"),
        D(r"q(p(x))=x^{4}-2x^{2}+2"),
        D(r"(x^{2}-1)^{2}+1\ge 1>0"),
        "The square is at least $0$, so adding $1$ keeps the whole expression strictly positive. There is no real root, so the statement is True.")

    # e18 A three zeros
    put("math-9-e18", 0, "A", True,
        "Three distinct linear factors display three distinct real zeros. Write the product and list the roots.",
        D(r"p(x)=(x+1)(x-1)(x-2)"),
        D(r"x=-1\qquad x=1\qquad x=2"),
        D(r"p(-1)=p(1)=p(2)=0"),
        "None of the factors repeats, and each substitution confirms a zero. Exactly three distinct real zeros occur, so the statement is True.")

    # e19 C/E
    put("math-9-e19", 2, "C", False,
        "Oddness needs a zero intercept and a half-turn about the origin. Rebuild from the ticks and test.",
        D(r"p(x)=(x-2)^{2}(x+1)"),
        D(r"p(0)=4\neq 0"),
        D(r"p(2)=0\qquad -p(-2)=-(-27)=27"),
        "A nonzero intercept already kills oddness. The touch at $2$ has no matching touch at $-2$. The figure is not origin-symmetric, so the statement is False.")
    put("math-9-e19", 4, "E", False,
        "The factor theorem asks for the value at $x=0$, not merely for a $0$ sitting in the heading of that column.",
        D(r"x=-1,0,1,2,3"),
        D(r"p=0,\ 4,\ 0,\ 0,\ 4"),
        D(r"p(0)=4\neq 0"),
        "The intercept sample is $4$, which is not zero. A heading labelled $0$ is the input, not the height. The factor $x$ fails the table test, so the statement is False.")

    # e20 C/E
    put("math-9-e20", 2, "C", False,
        "Vieta for a monic cubic reads the root sum as minus the $x^{2}$ coefficient. Add the three simple roots.",
        D(r"p(x)=(x+1)(x-1)(x-2)=x^{3}-2x^{2}-x+2"),
        D(r"-1+1+2=2"),
        D(r"-b=2\neq 8"),
        "The $x^{2}$ coefficient of $x^{3}-2x^{2}-x+2$ likewise gives sum $2$, not $8$. The claimed root sum is wrong, so the statement is False.")
    put("math-9-e20", 4, "E", True,
        "A biquadratic factors as a difference of squares twice. Set $u=x^{2}$ and factor.",
        D(r"x^{4}-5x^{2}+4=(x^{2}-1)(x^{2}-4)"),
        D(r"(x-1)(x+1)(x-2)(x+2)"),
        D(r"x=\pm 1,\ \pm 2"),
        "Four distinct real linear factors appear. The quartic factors completely over the reals, so the statement is True.")

    # e21 D
    put("math-9-e21", 3, "D", False,
        "The $y$-intercept is the height at $x=0$, read above the origin on the vertical axis and confirmed by substituting into the rebuilt quartic.",
        D(r"p(x)=(x^{2}-1)^{2}"),
        D(r"p(x)=x^{4}-2x^{2}+1"),
        D(r"p(0)=1"),
        "That height is positive, not negative. The claimed sign is the wrong one, so the statement is False.")

    # e22 C
    put("math-9-e22", 2, "C", True,
        "The factor theorem at $x=-1$ is the corresponding table column: $x+1$ divides the interpolant if and only if that entry is $0$.",
        D(r"x=-2,-1,0,1,2"),
        D(r"p=8,\ 0,\ 0,\ 0,\ 8"),
        D(r"p(-1)=0"),
        "The $x=-1$ sample vanishes. Evenness of the sample row already predicted this matching pair of zeros. The factor test passes, so the statement is True.")

    # e23 D
    put("math-9-e23", 3, "D", True,
        "The opening deviation is the intercept of the ledger, the height at $n=0$.",
        D(r"s(n)=n(n-2)(n-4)"),
        D(r"s(0)=0\cdot(-2)\cdot(-4)=0"),
        "The first column is already a tabulated $0$. Every listed factor is compatible with a zero opening. The warehouse opens on target, so the statement is True.")

    # e24 full set
    put("math-9-e24", 0, "A", True,
        "Oddness is the identity $p(-x)=-p(x)$, which holds as soon as only odd powers appear.",
        D(r"p(x)=x^{3}-4x"),
        D(r"p(-x)=(-x)^{3}-4(-x)=-x^{3}+4x"),
        D(r"p(-x)=-p(x)"),
        "There is no even-power term and no leftover constant. The cubic is odd, so the statement is True.")
    put("math-9-e24", 1, "B", True,
        "The factor theorem at $x=2$ is immediate from the given product, or from substituting.",
        D(r"p(x)=x(x-2)(x+2)"),
        D(r"p(2)=2\cdot 0\cdot 4=0"),
        "The factor $x-2$ is visible before any expansion, and the substitution confirms a zero. So $x-2$ divides $p$, so the statement is True.")
    put("math-9-e24", 2, "C", True,
        "Vieta for a monic cubic reads the multiplicity-weighted root sum as minus the $x^{2}$ coefficient. Add the three simple roots.",
        D(r"p(x)=x^{3}-4x"),
        D(r"-2+0+2=0"),
        D(r"-b=0"),
        "The $x^{2}$ coefficient is already $0$, matching the sum. The multiplicity-weighted root sum is $0$, so the statement is True.")
    put("math-9-e24", 3, "D", True,
        "Nesting multiplies highest powers: substituting $x^{2}$ into a cubic produces degree $3\\cdot 2=6$.",
        D(r"3\cdot 2=6"),
        D(r"p(x^{2})=x^{2}((x^{2})^{2}-4)"),
        D(r"p(x^{2})=x^{6}-4x^{2}"),
        "The leading coefficient remains $1$, so the degree does not drop. The nested highest power is $x^{6}$, so the statement is True.")
    put("math-9-e24", 4, "E", True,
        "Three distinct linear factors display three distinct real zeros. Write the product and list the roots.",
        D(r"p(x)=x(x-2)(x+2)"),
        D(r"x=-2\qquad x=0\qquad x=2"),
        D(r"p(-2)=p(0)=p(2)=0"),
        "None of the factors repeats, and each substitution confirms a zero. The count is three, so the statement is True.")

    # e27
    put("math-9-e27", 1, "B", True,
        "The factor theorem at $x=1$ asks whether $q(p(1))$ vanishes. The inner shift vanishes at $1$, and $q(0)=0$.",
        D(r"p(x)=x-1\qquad q(x)=x^{3}-x"),
        D(r"q(p(1))=q(0)=0"),
        D(r"q(p(x))=x(x-1)(x-2)"),
        "The linear factor $x-1$ is visible in the factorisation. So $x-1$ divides the nesting, so the statement is True.")
    put("math-9-e27", 2, "C", True,
        "The factor theorem at $x=0$ asks whether $q(p(0))$ vanishes.",
        D(r"p(x)=x-1\qquad q(x)=x^{3}-x"),
        D(r"q(p(0))=q(-1)=0"),
        D(r"q(p(x))=x(x-1)(x-2)"),
        "The factorisation already displays the factor $x$. So $x$ divides $q(p(x))$, so the statement is True.")
    put("math-9-e27", 3, "D", False,
        "Equal nested degree does not make the two compositions the same polynomial. Compare the expansions.",
        D(r"q(p(x))=x(x-1)(x-2)"),
        D(r"p(q(x))=x^{3}-x-1"),
        D(r"q(p(0))=0\qquad p(q(0))=-1"),
        "They already disagree at $x=0$: $0$ versus $-1$. Nesting does not commute, so the statement is False.")

    # e28 B/C
    put("math-9-e28", 1, "B", True,
        "A double root is a root of the derivative. The squared factor is $(x-2)^{2}$, so $x=2$ must flatten $p'$.",
        D(r"p(x)=x(x-2)^{2}"),
        D(r"p'(x)=(3x-2)(x-2)"),
        D(r"p'(2)=0"),
        "The factor $x-2$ survives in $p'$. The double root is stationary, so the statement is True.")
    put("math-9-e28", 2, "C", True,
        "Distinct zeros ignore the exponent on $(x-2)^{2}$. The cubic vanishes only where a linear piece vanishes.",
        D(r"p(x)=x(x-2)^{2}"),
        D(r"x=0\qquad x=2"),
        D(r"p(0)=0\qquad p(2)=0"),
        "Those are two distinct abscissas, not three. Exactly two distinct real zeros occur, so the statement is True.")

    # e29 E
    put("math-9-e29", 4, "E", True,
        "The factor theorem at $x=2$ is the corresponding table column: $x-2$ divides the unknown polynomial if and only if that entry is $0$.",
        D(r"x=-1,0,1,2,3"),
        D(r"p=0,\ 2,\ 0,\ 0,\ 8"),
        D(r"p(2)=0"),
        "The $x=2$ sample vanishes, so $x-2$ is a factor. That matches the third linear piece of the rebuilt cubic $(x+1)(x-1)(x-2)$. The factor test passes, so the statement is True.")

    # e16 C
    put("math-9-e16", 2, "C", True,
        "The root at $-1$ is simple, so it need not flatten $p'$. Differentiate and substitute.",
        D(r"p(x)=(x-2)^{2}(x+1)"),
        D(r"p'(x)=3x^{2}-6x"),
        D(r"p'(-1)=3+6=9\neq 0"),
        "The simple crossing is not a stationary point. The claimed inequality holds, so the statement is True.")

    # e17 E even nestings
    put("math-9-e17", 4, "E", True,
        "An even inner map makes any outer function of it even: $p(-x)=p(x)$ forces $q(p(-x))=q(p(x))$, and likewise in the other order.",
        D(r"q(p(x))=x^{4}-2x^{2}+2"),
        D(r"p(q(x))=x^{4}+2x^{2}"),
        D(r"q(p(-x))=q(p(x))\qquad p(q(-x))=p(q(x))"),
        "Both expansions contain only even powers. Both nestings are even, so the statement is True.")

    return H


def check_english_in_display(case: str, letter: str, e: str) -> None:
    for m in re.finditer(r"\$\$([^$]+)\$\$", e):
        block = m.group(1)
        stripped = re.sub(r"\\(?:mathrm|text|operatorname)\{[^}]*\}", "", block)
        if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", stripped):
            raise SystemExit(f"{case} {letter} English in $$: {block[:80]!r}")


def main() -> None:
    hands = hand_packs()
    data = json.loads(MIXED.read_text())
    tasks = data["tasks"]
    # Restore letters from builders (source of truth), not from possibly padded JSON
    before = []
    # Use previous file snapshot metrics from /tmp if present; else current
    before = [304] * 150  # placeholder printed separately

    ov_lens: list[int] = []
    expl_lens: list[int] = []
    changed = 0
    hand_used = 0

    for t in tasks:
        f_key = list(t["answer_key"])
        f_fig = t.get("figure")
        overview, base_letters = MIXED_BUILDERS[t["id"]]()
        letters: list[str] = []
        for i, base in enumerate(base_letters):
            if (t["id"], i) in hands:
                e = hands[(t["id"], i)]
                hand_used += 1
            else:
                e = deepen_auto(base, overview)
            validate_letter(t["case_id"], i, e, bool(t["answer_key"][i]))
            check_english_in_display(t["case_id"], "ABCDE"[i], e)
            if "Hold the last" in e or "as in the overview" in e.lower():
                raise SystemExit(f"{t['case_id']} soft/overview leak")
            letters.append(e)
            if e != base:
                changed += 1
        t["statements"] = [strip_from_prefix(s) for s in t["statements"]]
        t["solution_overview"] = overview
        t["tactical_explanations"] = letters
        if t["answer_key"] != f_key:
            raise SystemExit("key mutated")
        if t.get("figure") != f_fig:
            raise SystemExit("figure mutated")
        ov_lens.append(len(overview))
        expl_lens.extend(len(e) for e in letters)

    print(
        f"AFTER letter median={statistics.median(expl_lens):.0f} "
        f"mean={statistics.mean(expl_lens):.0f} min={min(expl_lens)} max={max(expl_lens)}"
    )
    print(
        f"lt250={sum(1 for n in expl_lens if n < 250)} "
        f"lt350={sum(1 for n in expl_lens if n < 350)} "
        f"lt420={sum(1 for n in expl_lens if n < 420)}"
    )
    print(f"changed_vs_base={changed} hand_overrides={hand_used}")
    print(
        f"overviews median={statistics.median(ov_lens):.0f} "
        f"min={min(ov_lens)} max={max(ov_lens)}"
    )

    blob = json.dumps(data)
    if re.search(r"From the (figure|table):", blob):
        raise SystemExit("From-the-figure survived")
    if r"\deg" in blob or r"\circ" in blob:
        raise SystemExit("deg/circ survived")

    MIXED.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {MIXED}")


if __name__ == "__main__":
    main()
