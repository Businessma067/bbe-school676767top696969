#!/usr/bin/env python3
"""Post-process Chapter 10: map exotic letters → a/b/c/d and inject numbers.

Also appends extra numeric-heavy T/F tasks (still multi-step, not plug-and-chug).

Usage:
  python3 scripts/ch10_numeric_abcd_pass.py
"""
from __future__ import annotations

import json
import re
from copy import deepcopy
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
BANK = ROOT / "src/data/math-ch10-exp-log.json"

PROTECT = {"t", "e", "x"}
TARGET = ["a", "b", "c", "d"]
PRIORITY = ["k", "r", "g", "p", "q", "u", "v", "y", "f", "h", "m", "n", "s", "w", "z"]
GREEK_TO_LETTER = {
    r"\\alpha": "a",
    r"\\beta": "b",
    r"\\gamma": "c",
    r"\\lambda": "c",
    r"\\mu": "d",
    r"\\rho": "d",
}

NUM_RE = re.compile(
    r"(?<![A-Za-z\\])(?:\d+\.\d+|\d{2,}|(?<![A-Za-z_])[3-9](?![A-Za-z0-9_]))"
)
MATH_RE = re.compile(r"\$\$([\s\S]*?)\$\$|\$([^$]+)\$")


def math_segments(text: str) -> list[tuple[int, int]]:
    return [(m.start(), m.end()) for m in MATH_RE.finditer(text)]


_MULTI_LETTER = {
    "ln",
    "log",
    "exp",
    "lim",
    "sin",
    "cos",
    "tan",
    "max",
    "min",
    "inf",
    "sup",
    "det",
    "gcd",
    "lcm",
    "mod",
    "arg",
    "deg",
}


def letters_in_math(text: str) -> set[str]:
    """Collect single-letter math identifiers, including short juxtaposition (e.g. kt).

    Longer alphabetic runs (cases, aligned, …) left after stripping TeX commands are ignored.
    Only lowercase letters count (so dQ/dP do not introduce P/Q).
    """
    found: set[str] = set()
    for m in MATH_RE.finditer(text):
        body = m.group(1) if m.group(1) is not None else m.group(2)
        body = re.sub(r"\\[A-Za-z]+", " ", body)
        i = 0
        while i < len(body):
            ch = body[i]
            if ch.isalpha() and ch.islower():
                j = i + 1
                while j < len(body) and body[j].isalpha():
                    j += 1
                word = body[i:j]
                if word in _MULTI_LETTER:
                    i = j
                    continue
                lower = "".join(c for c in word if c.islower())
                if len(lower) == 1:
                    found.add(lower)
                elif len(lower) == 2:
                    found.update(lower)
                i = j
                continue
            i += 1
    return found


def task_blob(task: dict[str, Any]) -> str:
    return "\n".join(
        [
            task.get("title", ""),
            task.get("context", ""),
            *task.get("statements", []),
            task.get("solution_overview", ""),
            *task.get("tactical_explanations", []),
            task.get("tables_markdown") or "",
        ]
    )


def build_mapping(task: dict[str, Any]) -> dict[str, str]:
    letters = letters_in_math(task_blob(task))
    exotic = sorted(
        letters - PROTECT - set(TARGET),
        key=lambda L: (PRIORITY.index(L) if L in PRIORITY else 99, L),
    )
    used = {L for L in TARGET if L in letters}
    free = [L for L in TARGET if L not in used]
    mapping: dict[str, str] = {}
    for i, src in enumerate(exotic):
        mapping[src] = free.pop(0) if free else TARGET[i % 4]
    return mapping




def repair_latex(text: str) -> str:
    """Fix common bank corruptions before letter remapping."""
    # JSON/python mishandling of \\neq → literal newline + "eq"
    text = text.replace("\neq", r"\neq")
    # Backslash lost entirely: "4 eq 2" / "-1 eq 1" / "10 eq\log"
    text = re.sub(r"(=)\s*eq(?![A-Za-z])", r"\1\\neq", text)
    text = re.sub(r"(?<=\d)\s+eq(?![A-Za-z])", r"\\neq", text)
    text = re.sub(r"(?<=\))\s*eq(?![A-Za-z])", r"\\neq", text)
    # Occasional over-escaped commands
    for cmd in ("neq", "ln", "log", "frac", "to", "infty", "cdot", "times"):
        text = text.replace(f"\\\\{cmd}", f"\\{cmd}")
    return text


def replace_letter_in_math(seg: str, src: str, dst: str) -> str:
    """Replace identifier src→dst inside one math segment.

    Treats length-2 alphabetic clusters as juxtaposition (kt, bg, ax), so each
    letter remaps independently. Skips TeX commands and multi-letter names.
    """
    out: list[str] = []
    i = 0
    while i < len(seg):
        if seg[i] == "\\" and i + 1 < len(seg) and seg[i + 1].isalpha():
            j = i + 1
            while j < len(seg) and seg[j].isalpha():
                j += 1
            out.append(seg[i:j])
            i = j
            continue
        ch = seg[i]
        if ch.isalpha():
            j = i + 1
            while j < len(seg) and seg[j].isalpha():
                j += 1
            word = seg[i:j]
            if word in _MULTI_LETTER or len(word) >= 3:
                out.append(word)
            elif len(word) == 1:
                out.append(dst if word == src else word)
            else:
                # Juxtaposition of two letters — remap each.
                out.append("".join(dst if c == src else c for c in word))
            i = j
            continue
        out.append(ch)
        i += 1
    return "".join(out)


def apply_letter_map(text: str, mapping: dict[str, str]) -> str:
    # Greek commands → latin targets first
    for cmd, letter in GREEK_TO_LETTER.items():
        text = re.sub(cmd + r"(?![A-Za-z])", letter, text)

    if not mapping:
        return text

    # Two-phase via placeholders to avoid a→b→c chains
    placeholders: dict[str, str] = {}
    for i, (src, dst) in enumerate(mapping.items()):
        ph = f"§§{i}§§"
        placeholders[ph] = dst

        pieces: list[str] = []
        last = 0
        for m in MATH_RE.finditer(text):
            pieces.append(text[last : m.start()])
            pieces.append(replace_letter_in_math(m.group(0), src, ph))
            last = m.end()
        pieces.append(text[last:])
        text = "".join(pieces)

        # Limited prose rewrites next to parameter words
        def prose_sub(m: re.Match[str]) -> str:
            idx = m.start()
            for start, end in math_segments(text):
                if start <= idx < end:
                    return m.group(0)
            window = text[max(0, idx - 28) : idx + 28].lower()
            cues = (
                "force",
                "rate",
                "parameter",
                "growth",
                "decay",
                "factor",
                "elastic",
                "constant",
                "coefficient",
                "letter",
                "path",
                "model",
            )
            return ph if any(c in window for c in cues) else m.group(0)

        text = re.sub(rf"(?<![A-Za-z\\]){re.escape(src)}(?![A-Za-z0-9])", prose_sub, text)

    for ph, dst in placeholders.items():
        text = text.replace(ph, dst)
    return text


def has_concrete_numbers(text: str) -> bool:
    return bool(NUM_RE.search(text or ""))


def calibration_for(task: dict[str, Any], mapping: dict[str, str]) -> list[str]:
    seed = int(task.get("sort_order") or 1)
    catalog = [
        ("0.05", "0.04", "0.02", "0.03"),
        ("0.06", "0.05", "0.025", "0.04"),
        ("0.08", "0.07", "0.03", "0.015"),
        ("0.04", "0.03", "0.01", "0.02"),
        ("0.12", "0.10", "0.05", "0.08"),
        ("0.07", "0.05", "0.02", "0.09"),
    ]
    vals = catalog[seed % len(catalog)]
    level = [1000, 2500, 800, 5000, 1200, 400][seed % 6]
    horizon = [5, 8, 10, 12, 6, 15][seed % 6]
    letters_now = letters_in_math(task_blob(task))
    bits: list[str] = []
    for i, L in enumerate(TARGET):
        if L in letters_now or L in mapping.values():
            bits.append(f"${L}={vals[i]}$")
    blob = (task.get("context") or "").lower()
    if any(w in blob for w in ("stock", "capital", "fund", "population", "gdp", "initial", "level")):
        bits.append(f"initial level ${level}$")
    if any(w in blob for w in ("year", "horizon", "until", "period")):
        bits.append(f"horizon $T={horizon}$")
    if not bits:
        bits = [f"$a={vals[0]}$", f"$b={vals[1]}$"]
    # Cap length
    return bits[:4]


def inject_calibration(task: dict[str, Any], mapping: dict[str, str]) -> None:
    ctx = task.get("context") or ""
    if has_concrete_numbers(ctx) or has_concrete_numbers(task.get("tables_markdown") or ""):
        return
    bits = calibration_for(task, mapping)
    sentence = (
        " Concrete parameter values (statements still hinge on identities / comparisons, "
        "not on reading a single substituted number): "
        + ", ".join(bits)
        + "."
    )
    for marker in ("Evaluate each statement. Mark it TRUE or FALSE.", "TRUE or FALSE."):
        if marker in ctx:
            task["context"] = ctx.replace(marker, sentence.strip() + " " + marker, 1)
            return
    task["context"] = ctx.rstrip() + sentence


def polish_title(title: str) -> str:
    repls = [
        (" — letter rates", " — calibrated rates"),
        ("letter rates", "calibrated rates"),
        ("letter-heavy", "mixed"),
        ("Letter-heavy", "Mixed"),
        ("with letter force", "with calibrated force"),
        ("letter parameters", "calibrated parameters"),
        ("letter force", "calibrated force"),
        ("letter rates", "calibrated rates"),
        ("Letter rates", "Calibrated rates"),
        ("letter force", "calibrated force"),
    ]
    for a, b in repls:
        title = title.replace(a, b)
    return title


def transform_task(task: dict[str, Any]) -> dict[str, Any]:
    t = deepcopy(task)
    for key in ("title", "context", "solution_overview", "tables_markdown"):
        if t.get(key):
            t[key] = repair_latex(t[key])
    t["statements"] = [repair_latex(s) for s in t["statements"]]
    t["tactical_explanations"] = [repair_latex(e) for e in t["tactical_explanations"]]

    mapping = build_mapping(t)
    for key in ("title", "context", "solution_overview", "tables_markdown"):
        if t.get(key):
            t[key] = apply_letter_map(t[key], mapping)
    t["statements"] = [apply_letter_map(s, mapping) for s in t["statements"]]
    t["tactical_explanations"] = [
        apply_letter_map(e, mapping) for e in t["tactical_explanations"]
    ]
    t["title"] = polish_title(t["title"])
    inject_calibration(t, mapping)
    return t


def pack_expl(letter: str, truth: bool, body: str) -> str:
    verd = "True" if truth else "False"
    body = body.strip().rstrip(".")
    return f"**{letter}.** → {verd}\n\n{body}.\n\nSo the statement is {verd}."


def new_numeric_tasks() -> list[dict[str, Any]]:
    extras: list[dict[str, Any]] = []

    def add(
        *,
        subsection: str,
        title: str,
        context: str,
        statements: list[str],
        key: list[bool],
        bodies: list[str],
        overview: str,
        stem_kind: str,
        diff: str,
    ) -> None:
        if "TRUE or FALSE" not in context:
            context = context.rstrip(".") + ". Evaluate each statement. Mark it TRUE or FALSE."
        extras.append(
            {
                "subsection": subsection,
                "title": title,
                "context": context,
                "statements": statements,
                "answer_key": key,
                "tactical_explanations": [
                    pack_expl("ABCDE"[i], key[i], bodies[i]) for i in range(5)
                ],
                "solution_overview": overview,
                "difficulty_level": diff,
                "placeholder": False,
                "stem_kind": stem_kind,
            }
        )

    # 10.1
    add(
        subsection="10.1",
        title="Two concrete forces — continuous vs discrete mismatch",
        context=(
            r"A fund starts at $P_0=1000$. Path $P$ uses continuous force $a=0.05$, so "
            r"$P(t)=1000\,e^{0.05 t}$. Path $Q$ uses annual factor $1+b$ with $b=0.05$, so "
            r"$Q(t)=1000(1.05)^t$. Note that $e^{0.05}\neq 1.05$."
        ),
        statements=[
            r"The one-year multiplier of $P$ equals $1.05$.",
            r"$P(1)>Q(1)$.",
            r"If the discrete factor were changed to $e^{0.05}$, then $P$ and $Q$ would coincide for every $t\ge 0$.",
            r"The continuous doubling time is $T=\dfrac{\ln 2}{0.05}$, independent of the initial $1000$.",
            r"Replacing $e^{0.05 t}$ by $(1.05)^t$ leaves every level $P(t)$ unchanged.",
        ],
        key=[False, True, True, True, False],
        bodies=[
            r"Under continuous force $0.05$, one year multiplies by $e^{0.05}$, not by $1.05$",
            r"Since $e^{0.05}>1.05$, we get $P(1)=1000 e^{0.05}>1000\cdot 1.05=Q(1)$",
            r"Matching one-year factors forces $P\equiv Q$ for all $t$",
            r"Solve $e^{0.05 T}=2$ to get $T=(\ln 2)/0.05$; $P_0$ cancels",
            r"Because $e^{0.05}\neq 1.05$, the paths diverge for $t>0$",
        ],
        overview=r"Compare $e^{0.05}$ with $1.05$, then read off doubling and path identity.",
        stem_kind="symbolic",
        diff="2/5",
    )
    add(
        subsection="10.1",
        title="Table recovery with concrete levels — force identity traps",
        context=(
            r"A continuous exponential $P(t)=P_0 e^{a t}$ produces the exact sample "
            r"$P(0)=800$, $P(2)=800 e^{0.2}$, $P(4)=800 e^{0.4}$. No rounding."
        ),
        statements=[
            r"The force equals $a=0.1$.",
            r"$\dfrac{P(2)}{P(0)}=e^{0.2}$.",
            r"$\dfrac{P(4)}{P(2)}=2\cdot\dfrac{P(2)}{P(0)}$.",
            r"$P(6)=800 e^{0.6}$ under the same force.",
            r"The average relative growth from $t=0$ to $t=4$ equals the force $a$.",
        ],
        key=[True, True, False, True, False],
        bodies=[
            r"From $P(2)/P(0)=e^{2a}=e^{0.2}$ we get $2a=0.2$, hence $a=0.1$",
            r"Directly from the given sample",
            r"Ratios over equal steps are equal: $P(4)/P(2)=e^{0.2}=P(2)/P(0)$, not twice that",
            r"Extrapolating $P(t)=800 e^{0.1 t}$ yields $P(6)=800 e^{0.6}$",
            r"Average relative growth over $[0,4]$ is $(e^{0.4}-1)/4$, which is not equal to $a=0.1$",
        ],
        overview=r"Recover $a$ from equal-step ratios; reject confusing average growth with force.",
        stem_kind="table",
        diff="3/5",
    )
    add(
        subsection="10.1",
        title="Piecewise concrete forces — average force is not automatic midpoint",
        context=(
            r"A balance starts at $2000$. It grows at continuous force $a=0.06$ on $[0,5]$ "
            r"and then at force $b=0.02$ on $(5,10]$. Let $A(10)$ be the terminal level."
        ),
        statements=[
            r"$A(5)=2000 e^{0.3}$.",
            r"$A(10)=2000 e^{0.3}\cdot e^{0.1}=2000 e^{0.4}$.",
            r"The constant force $\bar a$ that yields the same $A(10)$ in one shot equals $0.04$.",
            r"The arithmetic mean $\dfrac{a+b}{2}$ equals that constant force $\bar a$ here because both intervals last $5$ years.",
            r"$A(10)=2000 e^{0.06\cdot 10}$.",
        ],
        key=[True, True, True, True, False],
        bodies=[
            r"On $[0,5]$: $A(5)=2000 e^{0.06\cdot 5}=2000 e^{0.3}$",
            r"Then five more years at $0.02$ multiply by $e^{0.1}$",
            r"Need $e^{10\bar a}=e^{0.4}$, so $\bar a=0.04$",
            r"$(0.06+0.02)/2=0.04=\bar a$ in this equal-duration case",
            r"Using $0.06$ for the whole decade ignores the switch to $0.02$",
        ],
        overview=r"Multiply piecewise factors; compare time-average force with a naive single rate.",
        stem_kind="piecewise",
        diff="4/5",
    )
    add(
        subsection="10.1",
        title="GDP per capita with concrete growth rates",
        context=(
            r"Aggregate output $Y(t)=Y_0 e^{0.03 t}$ and population $N(t)=N_0 e^{0.01 t}$ "
            r"with $Y_0=500$, $N_0=25$. Per-capita output is $d=Y/N$."
        ),
        statements=[
            r"$d(t)=20\, e^{0.02 t}$.",
            r"The per-capita force equals $0.03-0.01=0.02$.",
            r"$d(t)=20\, e^{0.03 t}/e^{0.01 t}$ simplifies to $20 e^{0.04 t}$.",
            r"Doubling $d$ takes time $(\ln 2)/0.02$.",
            r"If population force rose to $0.03$, per-capita output would be constant in $t$.",
        ],
        key=[True, True, False, True, True],
        bodies=[
            r"$d(0)=500/25=20$ and force $0.03-0.01=0.02$",
            r"Quotient rule for exponential forces",
            r"The correct simplification is $20 e^{(0.03-0.01)t}=20 e^{0.02 t}$, not $e^{0.04 t}$",
            r"Solve $e^{0.02 T}=2$",
            r"Forces cancel when both equal $0.03$",
        ],
        overview=r"Per-capita force is the difference of log-derivatives.",
        stem_kind="applied_letter",
        diff="3/5",
    )
    add(
        subsection="10.1",
        title="Discrete compounding ladder with concrete steps",
        context=(
            r"A deposit of $1200$ compounds once per year at rate $b=0.08$, so "
            r"$Q(t)=1200(1.08)^t$. A continuous rival uses force $a$ with $e^{a}=1.08$."
        ),
        statements=[
            r"$a=\ln 1.08$.",
            r"$Q(3)=1200(1.08)^3$.",
            r"The continuous rival $P(t)=1200 e^{a t}$ satisfies $P(t)=Q(t)$ for every $t\ge 0$.",
            r"$a=0.08$.",
            r"After one year both models multiply the deposit by $1.08$.",
        ],
        key=[True, True, True, False, True],
        bodies=[
            r"By construction $e^{a}=1.08$ forces $a=\ln 1.08$",
            r"Direct evaluation of the discrete formula",
            r"Matching one-year factors makes the paths identical",
            r"$\ln 1.08\neq 0.08$; the force is the log of the factor",
            r"Both one-year multipliers equal $1.08$",
        ],
        overview=r"Match discrete factor to continuous force via $a=\ln(1+b)$.",
        stem_kind="parametric",
        diff="2/5",
    )
    add(
        subsection="10.1",
        title="Cooling law with concrete ambient data",
        context=(
            r"Newton cooling: $T(t)=20+80 e^{-0.2 t}$ (ambient $20$, initial $100$). "
            r"Time is in minutes."
        ),
        statements=[
            r"$T(0)=100$.",
            r"As $t\to\infty$, $T(t)\to 20$.",
            r"The half-life of the gap $T(t)-20$ equals $5$ minutes.",
            r"The half-life of the gap $T(t)-20$ is $\dfrac{\ln 2}{0.2}$.",
            r"$T(5)=20+80 e^{-1}$.",
        ],
        key=[True, True, False, True, True],
        bodies=[
            r"$T(0)=20+80=100$",
            r"Exponential term vanishes",
            r"$(\ln 2)/0.2\approx 3.47$, not $5$",
            r"Solve $e^{-0.2\tau}=1/2$",
            r"Substitute $t=5$: exponent $-1$",
        ],
        overview=r"Read ambient limit and half-life of the temperature gap.",
        stem_kind="applied_letter",
        diff="3/5",
    )

    # 10.2
    add(
        subsection="10.2",
        title="Change-of-base with concrete logs",
        context=(
            r"Use $\ln 2\approx 0.693$, $\ln 3\approx 1.099$, $\ln 5\approx 1.609$ as given "
            r"reference values (treat them as exact for this exercise)."
        ),
        statements=[
            r"$\log_2 8=3$.",
            r"$\log_5 25=\dfrac{\ln 25}{\ln 5}=2$.",
            r"$\log_2 3=\dfrac{\ln 3}{\ln 2}$.",
            r"$\log_2 3=\dfrac{\ln 2}{\ln 3}$.",
            r"$\log_3 9+\log_3 3=3$.",
        ],
        key=[True, True, True, False, True],
        bodies=[
            r"$2^3=8$",
            r"$\ln 25=2\ln 5$, so the ratio equals $2$",
            r"Change-of-base formula",
            r"The fraction is inverted — that would be $\log_3 2$",
            r"$\log_3 9+\log_3 3=2+1=3$",
        ],
        overview=r"Apply change-of-base and elementary exact logs; catch the inverted ratio.",
        stem_kind="symbolic",
        diff="1/5",
    )
    add(
        subsection="10.2",
        title="Domain of a concrete log product",
        context=(
            r"Consider the real function $\ln\bigl((x-1)(4-x)\bigr)$ "
            r"(no extra named map beyond the expression itself)."
        ),
        statements=[
            r"The domain is $1<x<4$.",
            r"At $x=2$ the expression equals $\ln 2$.",
            r"At $x=0$ the expression is defined as a real number.",
            r"On the whole domain, $\ln\bigl((x-1)(4-x)\bigr)=\ln(x-1)+\ln(4-x)$.",
            r"The maximum of $(x-1)(4-x)$ on the domain occurs at $x=2.5$.",
        ],
        key=[True, True, False, True, True],
        bodies=[
            r"Need $(x-1)(4-x)>0$, hence $x\in(1,4)$",
            r"$(2-1)(4-2)=2$",
            r"At $x=0$ the product is negative",
            r"On the domain both factors are positive, so the log-sum law applies",
            r"The quadratic $-(x-2.5)^2+2.25$ peaks at $x=2.5$",
        ],
        overview=r"Product positive on $(1,4)$; log-sum splits there.",
        stem_kind="symbolic",
        diff="2/5",
    )
    add(
        subsection="10.2",
        title="Solving a concrete exponential via logs",
        context=(
            r"Solve and compare: equation (1) $e^{0.04 t}=3$; equation (2) $1.04^{t}=3$. "
            r"Use exact log expressions."
        ),
        statements=[
            r"Equation (1) has solution $t=\dfrac{\ln 3}{0.04}$.",
            r"Equation (2) has solution $t=\dfrac{\ln 3}{\ln 1.04}$.",
            r"The two solutions are equal because $0.04=\ln 1.04$.",
            r"Since $e^{0.04}>1.04$, the solution of (1) is smaller than the solution of (2).",
            r"Both solutions are positive.",
        ],
        key=[True, True, False, True, True],
        bodies=[
            r"Take $\ln$ of both sides",
            r"Take $\ln$: $t\ln 1.04=\ln 3$",
            r"$\ln 1.04\neq 0.04$",
            r"Larger continuous one-year factor reaches $3$ sooner",
            r"$\ln 3>0$ and the denominators are positive",
        ],
        overview=r"Compare continuous and discrete hitting times for level $3$.",
        stem_kind="parametric",
        diff="3/5",
    )
    add(
        subsection="10.2",
        title="Log-linear regression read-off with concrete slope",
        context=(
            r"A semi-log plot of $\ln P(t)$ against $t$ is a straight line with slope $0.07$ "
            r"and intercept $\ln 500$. Assume $P(t)=P_0 e^{a t}$."
        ),
        statements=[
            r"$a=0.07$.",
            r"$P_0=500$.",
            r"$P(10)=500 e^{0.7}$.",
            r"The slope of $P(t)$ itself (not $\ln P$) is constant and equal to $0.07$.",
            r"$\ln P(10)=\ln 500+0.7$.",
        ],
        key=[True, True, True, False, True],
        bodies=[
            r"Semi-log slope equals the force",
            r"Intercept is $\ln P_0$",
            r"Substitute into $P(t)=500 e^{0.07 t}$",
            r"$P'(t)=a P(t)$ is not constant",
            r"Line equation: $\ln P=\ln 500+0.07 t$",
        ],
        overview=r"Read force and $P_0$ from the semi-log line; reject constant slope for $P$.",
        stem_kind="hybrid",
        diff="3/5",
    )
    add(
        subsection="10.2",
        title="Elasticities from a concrete log demand",
        context=(
            r"Demand satisfies $\ln Q=4-1.5\ln P$ for $P>0$. Here $Q$ is quantity and $P$ price."
        ),
        statements=[
            r"The price elasticity of demand equals $-1.5$.",
            r"$Q=e^{4}/P^{1.5}$.",
            r"Doubling price multiplies quantity by $2^{-1.5}$.",
            r"Elasticity equals $\dfrac{dQ}{dP}$.",
            r"At every price the elasticity is the same constant $-1.5$.",
        ],
        key=[True, True, True, False, True],
        bodies=[
            r"Differentiate: $d\ln Q/d\ln P=-1.5$",
            r"Exponentiate the log-demand",
            r"$Q\propto P^{-1.5}$",
            r"Elasticity is $d\ln Q/d\ln P$, not the raw derivative",
            r"Log-linear demand has constant elasticity",
        ],
        overview=r"Constant elasticity from log-log demand with slope $-1.5$.",
        stem_kind="applied_letter",
        diff="4/5",
    )
    add(
        subsection="10.2",
        title="Nested logs with concrete bases",
        context=r"Consider $a=\log_2(\log_3 81)$ and $b=\log_3(\log_2 16)$.",
        statements=[
            r"$\log_3 81=4$.",
            r"$a=\log_2 4=2$.",
            r"$\log_2 16=4$.",
            r"$b=\log_3 4$.",
            r"$a=b$.",
        ],
        key=[True, True, True, True, False],
        bodies=[
            r"$3^4=81$",
            r"$\log_2 4=2$",
            r"$2^4=16$",
            r"$b=\log_3 4$",
            r"$2\neq\log_3 4$",
        ],
        overview=r"Evaluate nested logs from the inside; compare the results.",
        stem_kind="nested",
        diff="2/5",
    )

    # 10.3
    add(
        subsection="10.3",
        title="Exam mashup — concrete force, log hit-time, false average",
        context=(
            r"A scholarship fund starts at $A=4000$, grows continuously at force $a=0.045$ "
            r"for $6$ years, then at force $b=0.02$ for $4$ more years. A target level is "
            r"$M=4000 e^{0.4}$. A student claims the decade average force is always "
            r"$(0.045+0.02)/2$ regardless of the switch time."
        ),
        statements=[
            r"After $6$ years the fund equals $4000 e^{0.27}$.",
            r"The terminal level after $10$ years equals $4000 e^{0.27}\cdot e^{0.08}=4000 e^{0.35}$.",
            r"The target $M=4000 e^{0.4}$ is strictly above the terminal level.",
            r"The constant force over $10$ years that matches the terminal level is $0.035$.",
            r"The student's claim is correct for every possible switch time with forces $0.045$ and $0.02$.",
        ],
        key=[True, True, True, True, False],
        bodies=[
            r"$0.045\cdot 6=0.27$",
            r"$0.02\cdot 4=0.08$",
            r"$e^{0.4}>e^{0.35}$",
            r"$0.35/10=0.035$",
            r"The time-average equals $(0.045\cdot\tau+0.02\cdot(10-\tau))/10$, which equals the midpoint only for $\tau=5$",
        ],
        overview=r"Piecewise exponents, target comparison, and a false midpoint claim.",
        stem_kind="hybrid",
        diff="5/5",
    )
    add(
        subsection="10.3",
        title="Exam mashup — discrete table, continuous force, log inversion",
        context=(
            r"Exact observations of a continuous exponential stock: "
            r"$P(0)=2500$, $P(3)=2500 e^{0.24}$, $P(6)=2500 e^{0.48}$. "
            r"A discrete analyst fits $Q(t)=2500(1+b)^t$ by matching only year $3$."
        ),
        statements=[
            r"The continuous force is $a=0.08$.",
            r"Matching $Q(3)=P(3)$ forces $(1+b)^3=e^{0.24}$, so $1+b=e^{0.08}$.",
            r"With that $b$, $Q(6)=P(6)$ automatically.",
            r"$\ln(P(6)/P(0))=0.48$.",
            r"The same $b$ also satisfies $1+b=0.08$.",
        ],
        key=[True, True, True, True, False],
        bodies=[
            r"$e^{3a}=e^{0.24}\Rightarrow a=0.08$",
            r"Cube root of $e^{0.24}$ is $e^{0.08}$",
            r"Then $Q(6)=2500(e^{0.08})^6=2500 e^{0.48}=P(6)$",
            r"Directly from the sample",
            r"$1+b=e^{0.08}\neq 0.08$",
        ],
        overview=r"Recover force, match discrete factor via logs, reject $b=a$.",
        stem_kind="table",
        diff="5/5",
    )
    return extras


def renumber(tasks: list[dict[str, Any]]) -> list[dict[str, Any]]:
    out: list[dict[str, Any]] = []
    counters = {"10.1": 0, "10.2": 0, "10.3": 0}
    sort = 1
    for t in tasks:
        sub = t["subsection"]
        counters[sub] += 1
        i = counters[sub]
        nt = deepcopy(t)
        code = sub.replace(".", "")
        nt["id"] = f"ch10-{code}-{i:03d}"
        nt["case_id"] = f"MATH {sub}.{i}"
        nt["sort_order"] = sort
        if sub == "10.3":
            nt["difficulty_level"] = "5/5"
        sort += 1
        out.append(nt)
    return out


def apply_pass(tasks: list[dict[str, Any]], *, add_extras: bool = True) -> list[dict[str, Any]]:
    transformed = [transform_task(t) for t in tasks]
    by_sub: dict[str, list[dict[str, Any]]] = {"10.1": [], "10.2": [], "10.3": []}
    for t in transformed:
        by_sub[t["subsection"]].append(t)
    if add_extras:
        for t in new_numeric_tasks():
            by_sub[t["subsection"]].append(t)
    merged = by_sub["10.1"] + by_sub["10.2"] + by_sub["10.3"]
    return renumber(merged)


def audit(tasks: list[dict[str, Any]]) -> None:
    for t in tasks:
        assert len(t["statements"]) == 5, t["case_id"]
        assert len(t["answer_key"]) == 5, t["case_id"]
        assert len(t["tactical_explanations"]) == 5, t["case_id"]
        for i, e in enumerate(t["tactical_explanations"]):
            let = "ABCDE"[i]
            verd = "True" if t["answer_key"][i] else "False"
            assert e.startswith(f"**{let}.** → {verd}"), (t["case_id"], e[:80])
            assert f"So the statement is {verd}." in e, (t["case_id"], let)
    print(
        "pass audit OK",
        len(tasks),
        {s: sum(1 for t in tasks if t["subsection"] == s) for s in ("10.1", "10.2", "10.3")},
    )


def main() -> None:
    payload = json.loads(BANK.read_text(encoding="utf-8"))
    tasks = apply_pass(payload["tasks"], add_extras=True)
    audit(tasks)
    for s in ("10.1", "10.2", "10.3"):
        ts = [t for t in tasks if t["subsection"] == s]
        n = sum(
            1
            for t in ts
            if has_concrete_numbers(t["context"])
            or has_concrete_numbers(t.get("tables_markdown") or "")
        )
        print(f"  {s}: ctx_numeric {n}/{len(ts)}")
    # exotic letter residual in math
    exotic = 0
    for t in tasks:
        letters = letters_in_math(task_blob(t)) - PROTECT - set(TARGET)
        if letters:
            exotic += 1
    print(f"  tasks still using exotic math letters: {exotic}/{len(tasks)}")
    payload["tasks"] = tasks
    BANK.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("wrote", BANK, "bytes", BANK.stat().st_size)


if __name__ == "__main__":
    main()
