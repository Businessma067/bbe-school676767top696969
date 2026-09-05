#!/usr/bin/env python3
"""Rewrite Ch2 subsection 2.5 explanations to MATH 13.18 depth."""

from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch2-cases.json")
LETTERS = "ABCDE"


def hdr(letter: str, truth: bool) -> str:
    return f"**{letter}.** → {'True' if truth else 'False'}"


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    body = "\n\n".join(p for p in parts if p and str(p).strip())
    if not re.search(r"so the statement is\s+(True|False)", body, re.I):
        body += f"\n\nSo the statement is {'True' if truth else 'False'}."
    return f"{hdr(letter, truth)}\n\n{body}"


def close(truth: bool, lead: str = "so") -> str:
    word = "True" if truth else "False"
    if lead == "So":
        return f"So the statement is {word}."
    return f"Matching the claim, so the statement is {word}."


# ---------------------------------------------------------------------------
# Families 2.147 / 2.151 / 2.155 — shared a+b, ab
# ---------------------------------------------------------------------------


def rewrite_sum_product(task: dict) -> None:
    ctx = task["context"]
    m = re.search(
        r"a\+b\s*=\s*(\d+).*?ab\s*=\s*(\d+)", ctx.replace("\n", " "), re.S
    )
    if not m:
        raise SystemExit(f"sum-product parse fail {task['case_id']}")
    s, p = int(m.group(1)), int(m.group(2))
    a2b2 = s * s - 2 * p
    amb2 = s * s - 4 * p
    a3b3 = s * s * s - 3 * p * s
    # roots from quadratic
    disc = amb2
    # factor t^2 - s t + p
    # find roots
    roots = []
    for t in range(-50, 51):
        if t * t - s * t + p == 0:
            roots.append(t)
    assert len(roots) == 2, (task["case_id"], roots)
    r1, r2 = roots
    recip_true = f"{s}/{p}"
    # claim E wrong fraction is p/s
    claim_e = task["statements"][4]
    keys = task["answer_key"]

    task["solution_overview"] = (
        f"Only the elementary symmetric data $a+b={s}$ and $ab={p}$ are recorded. "
        "Every claim must follow from those two numbers (or from the monic quadratic "
        f"$t^{{2}}-{s}t+{p}=0$ whose roots are $a$ and $b$).\n\n"
        "The standing identities are\n\n"
        f"$$a^{{2}}+b^{{2}}=(a+b)^{{2}}-2ab$$\n\n"
        f"$$(a-b)^{{2}}=(a+b)^{{2}}-4ab$$\n\n"
        f"$$a^{{3}}+b^{{3}}=(a+b)^{{3}}-3ab(a+b)$$\n\n"
        f"$$\\dfrac{{1}}{{a}}+\\dfrac{{1}}{{b}}=\\dfrac{{a+b}}{{ab}}$$\n\n"
        f"Substituting the archive values recovers $a^{{2}}+b^{{2}}={a2b2}$, "
        f"$(a-b)^{{2}}={amb2}$, $a^{{3}}+b^{{3}}={a3b3}$, and "
        f"$\\dfrac{{1}}{{a}}+\\dfrac{{1}}{{b}}=\\dfrac{{{s}}}{{{p}}}$. "
        f"Factoring $t^{{2}}-{s}t+{p}=(t-{r1})(t-{r2})$ shows "
        f"$\\{{a,b\\}}=\\{{{r1},{r2}\\}}$."
    )

    openers = [
        "Sum of squares follows from the square of the sum after the mixed product is peeled off.",
        "The squared gap $(a-b)^{2}$ is another elementary identity in $a+b$ and $ab$.",
        "Cubes expand through the same sum and product; the middle term is $3ab(a+b)$.",
        "The unordered pair $\\{a,b\\}$ is exactly the root set of the monic quadratic with those coefficients.",
        "The sum of reciprocals is the ratio of the sum to the product, not the reverse.",
    ]

    wrong_m = re.search(r"=\s*(\d+)", task["statements"][2])
    w = int(wrong_m.group(1)) if wrong_m else a3b3 + 1

    bodies = [
        [
            openers[0],
            "Start from the square of the recorded sum:",
            f"$$(a+b)^{2}=a^{2}+2ab+b^{2}$$",
            "Rearrange to isolate the sum of squares:",
            f"$$a^{2}+b^{2}=(a+b)^{2}-2ab$$",
            "Substitute $a+b=" + str(s) + "$ and $ab=" + str(p) + "$:",
            f"$$a^{2}+b^{2}={s}^{2}-2\\cdot{p}$$",
            f"$$a^{2}+b^{2}={s*s}-{2*p}$$",
            f"$$a^{2}+b^{2}={a2b2}$$",
            f"The claim asserts the same value ${a2b2}$, so the statement is True.",
        ],
        [
            openers[1],
            "Expand $(a-b)^{2}$ and rewrite in elementary symmetric form:",
            f"$$(a-b)^{2}=a^{2}-2ab+b^{2}$$",
            f"$$(a-b)^{2}=(a+b)^{2}-4ab$$",
            "Substitute the archive values:",
            f"$$(a-b)^{2}={s}^{2}-4\\cdot{p}$$",
            f"$$(a-b)^{2}={s*s}-{4*p}$$",
            f"$$(a-b)^{2}={amb2}$$",
            f"The claim is $(a-b)^{2}={amb2}$, so the statement is True.",
        ],
        [
            openers[2],
            "The cube-sum identity reads",
            f"$$a^{3}+b^{3}=(a+b)^{3}-3ab(a+b)$$",
            "Substitute $a+b=" + str(s) + "$ and $ab=" + str(p) + "$:",
            f"$$a^{3}+b^{3}={s}^{3}-3\\cdot{p}\\cdot{s}$$",
            f"$$a^{3}+b^{3}={s**3}-{3*p*s}$$",
            f"$$a^{3}+b^{3}={a3b3}$$",
            f"The claim asserts ${w}$, but the identity produces ${a3b3}$.",
            f"Since ${a3b3}\\ne{w}$, the statement is False.",
        ],
        [
            openers[3],
            "Form the monic quadratic with sum $a+b$ and product $ab$:",
            f"$$t^{2}-(a+b)t+ab=0$$",
            f"$$t^{2}-{s}t+{p}=0$$",
            "Factor the left-hand side:",
            f"$$t^{2}-{s}t+{p}=(t-{r1})(t-{r2})$$",
            f"The roots are therefore $t={r1}$ and $t={r2}$, so",
            f"$$\\{{a,b\\}}=\\{{{r1},{r2}\\}}$$",
            "That matches the claimed unordered pair, so the statement is True.",
        ],
        [
            openers[4],
            "Combine the reciprocals over the common denominator $ab$:",
            f"$$\\dfrac{{1}}{{a}}+\\dfrac{{1}}{{b}}=\\dfrac{{b+a}}{{ab}}=\\dfrac{{a+b}}{{ab}}$$",
            "Substitute the archive values:",
            f"$$\\dfrac{{1}}{{a}}+\\dfrac{{1}}{{b}}=\\dfrac{{{s}}}{{{p}}}$$",
            f"The claim prints $\\dfrac{{{p}}}{{{s}}}$ instead of $\\dfrac{{{s}}}{{{p}}}$.",
            f"Because $\\dfrac{{{s}}}{{{p}}}\\ne\\dfrac{{{p}}}{{{s}}}$, the statement is False.",
        ],
    ]

    task["tactical_explanations"] = [
        pack(LETTERS[i], bool(keys[i]), bodies[i]) for i in range(5)
    ]


# ---------------------------------------------------------------------------
# Families 2.148 / 2.152 / 2.156 — R(x), S(x)
# ---------------------------------------------------------------------------


def rewrite_rational_rs(task: dict) -> None:
    ctx = task["context"]
    m = re.search(
        r"R\(x\)=\\dfrac\{x\^2-(\d+)\}\{x-(\d+)\}.*?S\(x\)=\\dfrac1\{x-(\d+)\}\\dfrac1\{x\+(\d+)\}",
        ctx.replace("\n", " "),
    )
    # try alternate patterns
    m2 = re.search(r"x\^2-(\d+).*?x-(\d+)", ctx)
    m3 = re.search(r"x\\ne\s*(\d+).*?x=-(\d+)", ctx.replace(" ", ""))
    # Parse from statements / context more carefully
    mm = re.search(r"R\(x\)=\\dfrac\{x\^2-(\d+)\}\{x-(\d+)\}", ctx)
    ms = re.search(
        r"S\(x\)=\\dfrac1\{x-(\d+)\}\\+\\dfrac1\{x\+(\d+)\}", ctx
    )
    if not mm or not ms:
        # unescape differently
        mm = re.search(r"R\(x\)=\\dfrac\{x\^2-(\d+)\}\{x-(\d+)\}", ctx)
        ms = re.search(r"S\(x\)=\\dfrac1\{x-(\d+)\}\\+\\dfrac1\{x\+(\d+)\}", ctx)
    if not mm:
        mm = re.search(r"x\^2-(\d+).*?x-(\d+)", ctx)
    if not ms:
        ms = re.search(r"1\{x-(\d+)\}.*?1\{x\+(\d+)\}", ctx)
    if not mm or not ms:
        raise SystemExit(f"R/S parse fail {task['case_id']}: {ctx[:120]}")
    n2 = int(mm.group(1))
    a = int(mm.group(2))
    assert a * a == n2, (a, n2)
    b = int(ms.group(1))
    c = int(ms.group(2))
    assert a == b and a == c, (a, b, c)
    keys = task["answer_key"]

    task["solution_overview"] = (
        f"Work on the stated domains: $R$ excludes $x={a}$, and $S$ excludes "
        f"$x=\\pm{a}$. Factor and cancel before evaluating, and combine the two "
        "reciprocals in $S$ over a common denominator.\n\n"
        f"$$R(x)=\\dfrac{{x^{{2}}-{n2}}}{{x-{a}}}=\\dfrac{{(x-{a})(x+{a})}}{{x-{a}}}=x+{a}"
        f"\\quad(x\\ne{a})$$\n\n"
        f"$$S(x)=\\dfrac{{1}}{{x-{a}}}+\\dfrac{{1}}{{x+{a}}}=\\dfrac{{2x}}{{x^{{2}}-{n2}}}"
        f"\\quad(x\\ne\\pm{a})$$\n\n"
        f"In particular $S(0)=0$, and $S(x)=0$ forces $x=0$ on the domain."
    )

    bodies = [
        [
            f"On the domain $x\\ne{a}$, factor the difference of squares in the numerator and cancel the shared linear factor.",
            "Factor first:",
            f"$$x^{{2}}-{n2}=(x-{a})(x+{a})$$",
            "Divide by the remaining linear factor:",
            f"$$R(x)=\\dfrac{{(x-{a})(x+{a})}}{{x-{a}}}$$",
            f"$$R(x)=x+{a}\\qquad(x\\ne{a})$$",
            f"The simplified form is exactly $x+{a}$ on the domain, so the statement is True.",
        ],
        [
            f"The expression $R(x)$ is undefined at the excluded point $x={a}$, so the value $R({a})$ is not defined by the formula.",
            "Substitute the forbidden input into the original fraction:",
            f"$$R({a})=\\dfrac{{{a}^{{2}}-{n2}}}{{{a}-{a}}}=\\dfrac{{0}}{{0}}$$",
            "The denominator vanishes, so $R$ has no finite value at that point.",
            f"The claim asserts $R({a})={2*a}$, which would require evaluating past a hole in the domain.",
            "Therefore the statement is False.",
        ],
        [
            "Combine the two reciprocal terms over the product of the linear factors.",
            "Common denominator $(x-a)(x+a)$:",
            f"$$S(x)=\\dfrac{{1}}{{x-{a}}}+\\dfrac{{1}}{{x+{a}}}$$",
            f"$$S(x)=\\dfrac{{(x+{a})+(x-{a})}}{{(x-{a})(x+{a})}}$$",
            f"$$S(x)=\\dfrac{{2x}}{{x^{{2}}-{n2}}}$$",
            "That is the claimed closed form on the domain, so the statement is True.",
        ],
        [
            "Evaluate the simplified form of $S$ at the origin.",
            "From the overview recovery,",
            f"$$S(x)=\\dfrac{{2x}}{{x^{{2}}-{n2}}}$$",
            "At $x=0$:",
            f"$$S(0)=\\dfrac{{0}}{{-{n2}}}=0$$",
            "The value is zero, matching the claim, so the statement is True.",
        ],
        [
            "Solve $S(x)=0$ on the domain $x\\ne\\pm" + str(a) + "$.",
            "Using the recovered form:",
            f"$$\\dfrac{{2x}}{{x^{{2}}-{n2}}}=0$$",
            "A fraction is zero only when its numerator is zero and the denominator is not:",
            f"$$2x=0\\Longrightarrow x=0$$",
            f"And $0\\ne\\pm{a}$, so $x=0$ is admissible.",
            "No other numerator root exists, so there is exactly one real solution. So the statement is True.",
        ],
    ]
    task["tactical_explanations"] = [
        pack(LETTERS[i], bool(keys[i]), bodies[i]) for i in range(5)
    ]


# ---------------------------------------------------------------------------
# Families 2.149 / 2.153 — fixed positive x powers
# ---------------------------------------------------------------------------


def rewrite_powers(task: dict) -> None:
    ctx = task["context"]
    m = re.search(r"x\s*=\s*(\d+)", ctx)
    if not m:
        raise SystemExit(f"powers parse fail {task['case_id']}")
    x = int(m.group(1))
    # sqrt and fourth root
    import math

    s2 = int(round(math.sqrt(x)))
    assert s2 * s2 == x
    s4 = int(round(x ** 0.25))
    assert s4 ** 4 == x
    keys = task["answer_key"]

    task["solution_overview"] = (
        f"The scale is fixed at the positive value $x={x}$. Principal real roots "
        "and the exponent laws $x^{r}x^{s}=x^{r+s}$ and $(x^{r})^{s}=x^{rs}$ are in force; "
        "negative exponents mean reciprocals.\n\n"
        f"$$x^{{1/2}}={s2},\\qquad x^{{1/4}}={s4},\\qquad "
        f"x^{{-1/2}}=\\dfrac{{1}}{{{s2}}},\\qquad x^{{3/4}}={s4**3}$$\n\n"
        f"Also $x^{{0}}=1$ for this nonzero $x$."
    )

    bodies = [
        [
            "A square root is the principal half-power of a positive base.",
            "Write the exponent form and evaluate:",
            f"$$x^{{1/2}}=\\sqrt{{{x}}}$$",
            f"$$\\sqrt{{{x}}}={s2}$$",
            f"Because ${s2}^{{2}}={x}$ and ${s2}>0$, the principal root is ${s2}$.",
            "That matches the claim, so the statement is True.",
        ],
        [
            "A fourth root is the principal power $1/4$.",
            "Chain two square roots, or raise to $1/4$ directly:",
            f"$$x^{{1/4}}=(x^{{1/2}})^{{1/2}}$$",
            f"$$=( {s2} )^{{1/2}}={s4}$$",
            f"Check: ${s4}^{{4}}={s4**4}={x}$.",
            "The principal fourth root is therefore the claimed value, so the statement is True.",
        ],
        [
            "A negative exponent reciprocates the corresponding positive power.",
            "Apply the definition:",
            f"$$x^{{-1/2}}=\\dfrac{{1}}{{x^{{1/2}}}}$$",
            f"$$=\\dfrac{{1}}{{{s2}}}$$",
            f"The claim is $\\dfrac{{1}}{{{s2}}}$, so the statement is True.",
        ],
        [
            "Multiply the exponents when a power is raised to another power.",
            "Write $3/4$ as a product of the recovered fourth root:",
            f"$$x^{{3/4}}=(x^{{1/4}})^{{3}}$$",
            f"$$=({s4})^{{3}}$$",
            f"$$={s4**3}$$",
            f"Alternatively $x^{{3/4}}=x^{{1/2}}\\cdot x^{{1/4}}={s2}\\cdot{s4}={s2*s4}$.",
            "Either route recovers the claimed value, so the statement is True.",
        ],
        [
            "Any nonzero number to the power zero equals one.",
            "Apply the zero-exponent rule with the fixed positive scale:",
            f"$$x^{{0}}=1\\qquad(x={x}\\ne0)$$",
            "The claim asserts that $x^{0}=0$, which contradicts the rule.",
            "Therefore the statement is False.",
        ],
    ]
    task["tactical_explanations"] = [
        pack(LETTERS[i], bool(keys[i]), bodies[i]) for i in range(5)
    ]


# ---------------------------------------------------------------------------
# Families 2.150 / 2.154 — |x-c| intervals
# ---------------------------------------------------------------------------


def rewrite_abs_interval(task: dict) -> None:
    ctx = task["context"]
    m = re.search(r"\|x-(\d+)\|\\le\s*(\d+)", ctx)
    if not m:
        raise SystemExit(f"abs parse fail {task['case_id']}: {ctx[:100]}")
    c = int(m.group(1))
    r = int(m.group(2))
    lo, hi = c - r, c + r
    n_int = hi - lo + 1
    keys = task["answer_key"]

    task["solution_overview"] = (
        f"Distance from the target ${c}$ is measured by $|x-{c}|$. "
        f"The acceptance rule $|x-{c}|\\le{r}$ is the closed interval "
        f"$[{lo},{hi}]$, while the warning band $|x-{c}|<{r}$ is the open interval "
        f"$({lo},{hi})$.\n\n"
        f"Endpoints $x={lo}$ and $x={hi}$ are accepted but not in the warning band. "
        f"There are ${n_int}$ integers in $[{lo},{hi}]$. "
        f"The complementary inequality $|x-{c}|>{r}$ is "
        f"$x<{lo}$ or $x>{hi}$, not the open middle interval."
    )

    bodies = [
        [
            "Rewrite the absolute-value inequality as a two-sided bound.",
            "The definition $|x-c|\\le r$ expands to",
            f"$$-{r}\\le x-{c}\\le{r}$$",
            "Add the target to every part:",
            f"$${lo}\\le x\\le{hi}$$",
            f"In interval notation that is $[{lo},{hi}]$, matching the claim. So the statement is True.",
        ],
        [
            f"An endpoint of the closed acceptance interval is included.",
            "Check the acceptance inequality at $x=" + str(lo) + "$:",
            f"$$| {lo}-{c} |=|{ -r }|={r}$$",
            f"$$|{lo}-{c}|\\le{r}$$",
            "The inequality holds, so $x=" + str(lo) + "$ is accepted. So the statement is True.",
        ],
        [
            "The warning band is the strict inequality, so endpoints are excluded.",
            f"At the right endpoint $x={hi}$:",
            f"$$|{hi}-{c}|={r}$$",
            f"The warning test asks for $|x-{c}|<{r}$, but ${r}\\nless{r}$.",
            f"Hence $x={hi}$ is not in the warning band, so the statement is False.",
        ],
        [
            "Count the integers lying in the closed acceptance interval.",
            f"The integers from ${lo}$ through ${hi}$ are",
            f"$${lo},{lo+1},\\ldots,{hi}$$",
            "The count of an inclusive integer range is",
            f"$${hi}-{lo}+1={n_int}$$",
            f"There are ${n_int}$ accepted integer readings, so the statement is True.",
        ],
        [
            "The complementary region is outside the closed interval, not inside the open middle.",
            f"By definition,",
            f"$$|x-{c}|>{r}\\Longleftrightarrow x<{lo}\\ \\text{{or}}\\ x>{hi}$$",
            f"The claim instead writes ${lo}<x<{hi}$, which is the warning band "
            f"$|x-{c}|<{r}$.",
            "Those two regions are disjoint, so the statement is False.",
        ],
    ]
    # Fix English-in-math in last body
    bodies[4] = [
        "The complementary region is outside the closed interval, not inside the open middle.",
        "By definition,",
        f"$$|x-{c}|>{r}\\Longleftrightarrow x<{lo}\\quad\\text{{or}}\\quad x>{hi}$$",
        f"The claim instead writes ${lo}<x<{hi}$, which is the warning band "
        f"$|x-{c}|<{r}$.",
        "Those two regions are disjoint, so the statement is False.",
    ]
    # Actually \text{or} might be ok as short tag - memory says short symbol tags fine.
    # But "or" is English - use \lor instead
    bodies[4][2] = f"$$|x-{c}|>{r}\\Longleftrightarrow\\bigl(x<{lo}\\bigr)\\lor\\bigl(x>{hi}\\bigr)$$"

    task["tactical_explanations"] = [
        pack(LETTERS[i], bool(keys[i]), bodies[i]) for i in range(5)
    ]


# ---------------------------------------------------------------------------
# Deepen 2.137–2.146 from statements (handcrafted map)
# ---------------------------------------------------------------------------


def deepen_generic_exam(task: dict) -> None:
    """Expand thin letters; rebuild overview; keep math correct."""
    cid = task["case_id"]
    writers = EXAM_GENERIC.get(cid)
    if not writers:
        # fallback: expand existing by splitting = chains
        task["tactical_explanations"] = [
            expand_existing(e, bool(task["answer_key"][i]), LETTERS[i])
            for i, e in enumerate(task["tactical_explanations"])
        ]
        if len(task.get("solution_overview") or "") < 280:
            task["solution_overview"] = thicken_overview(task)
        return
    keys = task["answer_key"]
    ov, bodies = writers(task)
    task["solution_overview"] = ov
    task["tactical_explanations"] = [
        pack(LETTERS[i], bool(keys[i]), bodies[i]) for i in range(5)
    ]


def expand_existing(expl: str, truth: bool, letter: str) -> str:
    """Split compact a=b=c displays and ensure closer."""
    body = re.sub(r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*", "", expl).strip()
    # promote single-line $...$ that is a full equation paragraph
    parts = []
    for para in re.split(r"\n\n+", body):
        para = para.strip()
        if not para:
            continue
        only = re.fullmatch(r"\$([^$]+)\$\.?", para)
        if only and "=" in only.group(1):
            inner = only.group(1).strip()
            # split chains
            if inner.count("=") >= 2 and len(inner) < 100:
                bits = [b.strip() for b in inner.split("=")]
                parts.append(f"$${bits[0]}={bits[1]}$$")
                for i in range(1, len(bits) - 1):
                    parts.append(f"$${bits[i]}={bits[i+1]}$$")
            else:
                parts.append(f"$${inner}$$")
            continue
        # split $$a=b=c$$
        def split_disp(m):
            inner = m.group(1).strip()
            if inner.count("=") >= 2 and r"\qquad" not in inner and len(inner) < 120:
                bits = [b.strip() for b in inner.split("=")]
                return "\n\n".join(
                    f"$${bits[i]}={bits[i+1]}$$" for i in range(len(bits) - 1)
                )
            return f"$${inner}$$"

        para2 = re.sub(r"\$\$([^$]+)\$\$", split_disp, para)
        parts.append(para2)
    body = "\n\n".join(parts)
    if not re.search(r"so the statement is\s+(True|False)", body, re.I):
        body += f"\n\nSo the statement is {'True' if truth else 'False'}."
    return f"{hdr(letter, truth)}\n\n{body}"


def thicken_overview(task: dict) -> str:
    lines = [
        "Each letter is an independent algebra check drawn from Chapters 2.1–2.4.",
        "Recover the relevant identity or domain rule before substituting numbers.",
        "",
    ]
    topics = ["A", "B", "C", "D", "E"]
    for i, s in enumerate(task["statements"]):
        short = re.sub(r"\s+", " ", s)[:90]
        lines.append(f"{topics[i]}: {short}")
    return "\n".join(lines)


# Handcrafted deepeners for 2.137–2.146
def _137(task: dict):
    ov = (
        "Five independent identity checks: a three-variable square identity, "
        "a continued reciprocal fraction, a radical conjugate cleanup, the absolute-value "
        "product rule, and a false monotonicity claim for squaring.\n\n"
        "No shared numerical recovery is needed; each letter brings its own expansion."
    )
    bodies = [
        [
            "The three pairwise squared gaps expand into twice every square minus twice every mixed product.",
            "Expand the sum of squares:",
            r"$$(x-y)^2+(y-z)^2+(z-x)^2$$",
            r"$$=2x^2+2y^2+2z^2-2xy-2yz-2zx$$",
            "Halve that identity:",
            r"$$\tfrac12\big[(x-y)^2+(y-z)^2+(z-x)^2\big]=x^2+y^2+z^2-xy-yz-zx$$",
            "The right-hand side is exactly the left-hand side of the claim, so the statement is True.",
        ],
        [
            "Simplify a continued fraction from the inside out, clearing one reciprocal at a time.",
            "Innermost sum:",
            r"$$1+\dfrac{1}{t}=\dfrac{t+1}{t}$$",
            "Feed that into the next level:",
            r"$$1+\dfrac{1}{\frac{t+1}{t}}=1+\dfrac{t}{t+1}=\dfrac{2t+1}{t+1}$$",
            "Take the outer reciprocal:",
            r"$$\dfrac{1}{\dfrac{2t+1}{t+1}}=\dfrac{t+1}{2t+1}$$",
            "That closed form matches the claim on the stated domain, so the statement is True.",
        ],
        [
            "Clear the roots in the denominator by multiplying by the conjugate of that denominator.",
            "Multiply numerator and denominator by $\\sqrt{u}-\\sqrt{v}$:",
            r"$$\dfrac{\sqrt{u}-\sqrt{v}}{\sqrt{u}+\sqrt{v}}=\dfrac{(\sqrt{u}-\sqrt{v})^2}{u-v}$$",
            "Expand the squared numerator:",
            r"$$(\sqrt{u}-\sqrt{v})^2=u-2\sqrt{uv}+v$$",
            "So",
            r"$$\dfrac{\sqrt{u}-\sqrt{v}}{\sqrt{u}+\sqrt{v}}=\dfrac{u+v-2\sqrt{uv}}{u-v}$$",
            "which is the claimed rationalized form. So the statement is True.",
        ],
        [
            "Absolute value of a product factors as the product of absolute values for every real pair.",
            "Square both nonnegative sides:",
            r"$$|xy|^2=x^2y^2$$",
            r"$$\bigl(|x|\,|y|\bigr)^2=x^2y^2$$",
            "Equal squares of nonnegative numbers force equal values, so",
            r"$$|xy|=|x|\,|y|$$",
            "The identity remains valid even when a factor is negative or zero. So the statement is True.",
        ],
        [
            "Squaring is not order-preserving on the whole real line.",
            "Factor the difference of squares:",
            r"$$p^2-q^2=(p-q)(p+q)$$",
            "If $p>q$, then $p-q>0$, but $p+q$ may still be negative.",
            "Counterexample: $p=-1$, $q=-3$ gives $p>q$ yet",
            r"$$p^2=1<9=q^2$$",
            "So $p>q$ does not force $p^{2}>q^{2}$. The statement is False.",
        ],
    ]
    return ov, bodies


def _138(task: dict):
    ov = (
        "Five equation / implication checks: a reciprocal equation with no solution, "
        "a radical equation with one root, an absolute-value versus square equation with three roots, "
        "a cubic divisibility test, and a false reciprocal inequality on $(0,1)$."
    )
    bodies = [
        [
            "Clear a reciprocal equation only after writing a common domain restriction.",
            "Assume $z\\ne0$ and $z\\ne1$, then",
            r"$$\dfrac{1}{z-1}=\dfrac{1}{z}$$",
            "Cross-multiply:",
            r"$$z=(z-1)$$",
            r"$$0=-1$$",
            "The cleared equation is impossible, so no real $z$ works. So the statement is True.",
        ],
        [
            "Square both sides of a radical equation only after recording the domain $\\sqrt{\\cdot}\\ge0$.",
            "Domain forces $z+3\\ge0$ and $z+1\\ge0$, so $z\\ge-1$. Square:",
            r"$$z+3=(z+1)^2=z^2+2z+1$$",
            r"$$0=z^2+z-2=(z+2)(z-1)$$",
            "Candidate roots $z=-2$ and $z=1$; only $z=1$ lies in $z\\ge-1$.",
            "Check: $\\sqrt{1+3}=2$ and $1+1=2$. Exactly one real solution. So the statement is True.",
        ],
        [
            "Split $|z|=z^{2}$ into the cases $z\\ge0$ and $z<0$.",
            "For $z\\ge0$, $|z|=z$, so $z=z^{2}$ gives $z(z-1)=0$, hence $z=0$ or $z=1$.",
            "For $z<0$, $|z|=-z$, so $-z=z^{2}$. Then $z^{2}+z=0$ and $z(z+1)=0$, so $z=0$ or $z=-1$; only $z=-1$ is negative.",
            "The three real solutions are $z=-1,0,1$. So the statement is True.",
        ],
        [
            "A linear factor $y-1$ divides a polynomial precisely when the value at $1$ vanishes.",
            "Evaluate:",
            r"$$1^3-2\cdot1+1=1-2+1=0$$",
            "By the factor theorem, $y-1$ divides $y^{3}-2y+1$. So the statement is True.",
        ],
        [
            "On $(0,1)$ the reciprocal is larger than $1$, not smaller.",
            "Take $p=1/2$:",
            r"$$\dfrac{1}{p}=2>1$$",
            "The claim asserts $\\dfrac{1}{p}<1$ throughout $(0,1)$, which fails. So the statement is False.",
        ],
    ]
    return ov, bodies


def _139(task: dict):
    ov = (
        "Five checks: denesting a nested square root, an absolute-value interval, "
        "the number of roots of $q^{2}=q$, a three-variable reciprocal identity under $u+v+w=0$, "
        "and the fixed points of $\\sqrt{t}=t$ on $t\\ge0$."
    )
    bodies = [
        [
            "Guess a denesting of the form $\\sqrt{c}+\\sqrt{d}$ and square to match coefficients.",
            "Try $2+\\sqrt{3}$:",
            r"$$(2+\sqrt{3})^2=4+4\sqrt{3}+3=7+4\sqrt{3}$$",
            "Taking principal square roots of both sides (both positive) yields",
            r"$$\sqrt{7+4\sqrt{3}}=2+\sqrt{3}$$",
            "So the statement is True.",
        ],
        [
            "Rewrite $|z-2|\\le1$ as a two-sided inequality.",
            r"$$-1\le z-2\le1$$",
            "Add $2$ throughout:",
            r"$$1\le z\le3$$",
            "That is the closed interval $[1,3]$. So the statement is True.",
        ],
        [
            "Bring every term to one side and factor.",
            r"$$q^2-q=0$$",
            r"$$q(q-1)=0$$",
            "The roots are $q=0$ and $q=1$, so there are two real solutions, not one.",
            "So the statement is False.",
        ],
        [
            "Under $u+v+w=0$, each numerator $u+v$ equals $-w$.",
            "Substitute:",
            r"$$\dfrac{u+v}{w}=\dfrac{-w}{w}=-1$$",
            "and likewise for the other two cyclic terms.",
            "Adding the three contributions:",
            r"$$-1+(-1)+(-1)=-3$$",
            "So the identity holds on the stated domain. So the statement is True.",
        ],
        [
            "On $t\\ge0$, square both sides of $\\sqrt{t}=t$ (both sides nonnegative).",
            r"$$t=t^2$$",
            r"$$t^2-t=0$$",
            r"$$t(t-1)=0$$",
            "The solutions in $t\\ge0$ are exactly $t=0$ and $t=1$. So the statement is True.",
        ],
    ]
    return ov, bodies


def _140(task: dict):
    ov = (
        "Five checks: a one-sided absolute-value identity that fails when $u<v$, "
        "the cube-sum identity in $s$ and $p$, the square-sum identity for $x+1/x$, "
        "a false rewriting of $z^{-1}+z^{-2}$, and simplifying $\\sqrt{(x-5)^{2}}$ on $x\\ge5$."
    )
    bodies = [
        [
            "Absolute value equals the raw difference only when that difference is nonnegative.",
            "If $u<v$, then $u-v<0$, so",
            r"$$|u-v|=v-u=-(u-v)\\ne u-v$$",
            "Counterexample: $u=1$, $v=2$ gives $|1-2|=1\\ne-1=u-v$.",
            "So the claimed identity fails on the stated positive quadrant. The statement is False.",
        ],
        [
            "Expand $(a+b)^{3}$ and rearrange to isolate $a^{3}+b^{3}$.",
            r"$$(a+b)^3=a^3+3a^2b+3ab^2+b^3=a^3+b^3+3ab(a+b)$$",
            "Therefore",
            r"$$a^3+b^3=(a+b)^3-3ab(a+b)=s^3-3ps$$",
            "which is the claimed formula. So the statement is True.",
        ],
        [
            "Square the given relation $x+1/x=k$.",
            r"$$\left(x+\dfrac{1}{x}\right)^2=k^2$$",
            r"$$x^2+2+\dfrac{1}{x^2}=k^2$$",
            "Subtract $2$:",
            r"$$x^2+\dfrac{1}{x^2}=k^2-2$$",
            "So the statement is True.",
        ],
        [
            "Combine the negative powers over the common denominator $z^{2}$.",
            r"$$z^{-1}+z^{-2}=\dfrac{1}{z}+\dfrac{1}{z^2}=\dfrac{z+1}{z^2}$$",
            "The claim instead prints $\\dfrac{1}{z+z^{2}}=\\dfrac{1}{z(1+z)}$.",
            "These agree only for special $z$, not for every $z\\ne0$.",
            "Counterexample $z=1$: left side $2$, right side $1/2$. So the statement is False.",
        ],
        [
            "On $x\\ge5$ the quantity $x-5$ is nonnegative, so the principal square root drops the absolute value.",
            r"$$\sqrt{(x-5)^2}=|x-5|$$",
            r"$$|x-5|=x-5\qquad(x\ge5)$$",
            "Hence $\\sqrt{(x-5)^{2}}=x-5$ on the stated domain. So the statement is True.",
        ],
    ]
    return ov, bodies


def _141(task: dict):
    ov = (
        "Five checks: expanding $a+b+c=0$ into a square-sum identity, solving a linear fractional equation, "
        "the identity $(p^{1/n})^{n}=p$ for $p>0$, the piecewise definition of $|x-3|$, "
        "and a false cubic-versus-square inequality."
    )
    bodies = [
        [
            "Square the relation $a+b+c=0$.",
            r"$$(a+b+c)^2=0$$",
            r"$$a^2+b^2+c^2+2(ab+bc+ca)=0$$",
            "Rearrange:",
            r"$$a^2+b^2+c^2=-2(ab+bc+ca)$$",
            "So the statement is True.",
        ],
        [
            "Clear the equation on the domain $x\\ne\\pm1$.",
            r"$$\dfrac{1}{x-1}=\dfrac{2}{x+1}$$",
            "Cross-multiply:",
            r"$$x+1=2(x-1)$$",
            r"$$x+1=2x-2$$",
            r"$$3=x$$",
            "The candidate $x=3$ lies off $\\pm1$, and substitution confirms it. The solution set is $\\{3\\}$. So the statement is True.",
        ],
        [
            "For $p>0$ the principal $n$-th root satisfies the inverse relation with the $n$-th power.",
            r"$$\bigl(p^{1/n}\bigr)^n=p^{n\cdot(1/n)}=p^1=p$$",
            "So the identity holds for every positive integer $n$. So the statement is True.",
        ],
        [
            "Absolute value equals the expression or its opposite according to the sign of the inside.",
            "For $x<3$, $x-3<0$, so $|x-3|=-(x-3)=3-x$.",
            "For $x\\ge3$, $x-3\\ge0$, so $|x-3|=x-3$.",
            "That is exactly the claimed piecewise form. So the statement is True.",
        ],
        [
            "Compare $b^{3}$ and $b^{2}$ by factoring.",
            r"$$b^3-b^2=b^2(b-1)$$",
            "At $b=1/2$ this difference is negative:",
            r"$$\bigl(\tfrac12\bigr)^3=\tfrac18<\tfrac14=\bigl(\tfrac12\bigr)^2$$",
            "So $b^{3}\\ge b^{2}$ fails for some real $b$. The statement is False.",
        ],
    ]
    return ov, bodies


def _142(task: dict):
    ov = (
        "Five checks: reciprocals under $ab+bc+ca=0$, a false radical expansion, "
        "an absolute-value inequality rewritten as an open interval, the cubic identity "
        "linked to $s+t=u$, and a rational inequality for $z>1$."
    )
    bodies = [
        [
            "Write each reciprocal with common denominator $abc$.",
            r"$$\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}=\dfrac{bc+ca+ab}{abc}$$",
            "The hypothesis $ab+bc+ca=0$ forces the numerator to vanish, so the sum of reciprocals is $0$.",
            "So the statement is True.",
        ],
        [
            "Compare squares of both proposed sides for $s>0$.",
            "Left side squared:",
            r"$$\left(\sqrt{s+\dfrac{1}{s}-2}\right)^2=s+\dfrac{1}{s}-2=\left(\sqrt{s}-\dfrac{1}{\sqrt{s}}\right)^2$$",
            "so the left side equals $\\bigl|\\sqrt{s}-1/\\sqrt{s}\\bigr|$.",
            "Right side $\\sqrt{s}+1/\\sqrt{s}$ is strictly larger whenever $s\\ne1$.",
            "At $s=4$: left $\\sqrt{4+1/4-2}=\\sqrt{9/4}=3/2$, right $2+1/2=5/2$. So the statement is False.",
        ],
        [
            "Rewrite $|v-1|<2$ as a two-sided bound.",
            r"$$-2<v-1<2$$",
            "Add $1$:",
            r"$$-1<v<3$$",
            "That is exactly the claimed open interval. So the statement is True.",
        ],
        [
            "Expand $(s+t)^{3}$ and identify $u=s+t$.",
            r"$$(s+t)^3=s^3+t^3+3st(s+t)$$",
            "Replace $s+t$ by $u$:",
            r"$$u^3=s^3+t^3+3stu$$",
            "Rearrangement gives $s^{3}+t^{3}+3stu=u^{3}$. So the statement is True.",
        ],
        [
            "Compare $\\dfrac{z+1}{z-1}$ with $1$ by subtracting.",
            r"$$\dfrac{z+1}{z-1}-1=\dfrac{(z+1)-(z-1)}{z-1}=\dfrac{2}{z-1}$$",
            "For $z>1$ the denominator is positive, so the difference is positive.",
            "Hence $\\dfrac{z+1}{z-1}>1$. So the statement is True.",
        ],
    ]
    return ov, bodies


def _143(task: dict):
    ov = (
        "Five checks: a reciprocal linear fractional identity, a strict bound for $|x|/(1+|x|)$, "
        "the cubic sum under $u+v+w=0$ (which need not vanish), a cancelled rational identity "
        "with a hole at $x=1$, and the strict triangle inequality for square roots."
    )
    bodies = [
        [
            "Rewrite every negative power as a reciprocal and clear the compound fraction.",
            r"$$\dfrac{a^{-1}-b^{-1}}{a^{-1}+b^{-1}}=\dfrac{\frac{1}{a}-\frac{1}{b}}{\frac{1}{a}+\frac{1}{b}}=\dfrac{\frac{b-a}{ab}}{\frac{b+a}{ab}}$$",
            "Cancel $ab$ (nonzero):",
            r"$$=\dfrac{b-a}{a+b}=\dfrac{-(a-b)}{a+b}$$",
            "which matches the claimed form. So the statement is True.",
        ],
        [
            "Compare the nonnegative quantity $|x|$ with the strictly larger denominator $1+|x|$.",
            r"$$\dfrac{|x|}{1+|x|}<1\Longleftrightarrow|x|<1+|x|$$",
            "which is equivalent to $0<1$, always true.",
            "So the bounded expression is strictly less than $1$ for every real $x$. So the statement is True.",
        ],
        [
            "Under $u+v+w=0$ one has $u^{3}+v^{3}+w^{3}=3uvw$, not necessarily $0$.",
            "Identity:",
            r"$$u^3+v^3+w^3-3uvw=(u+v+w)(u^2+v^2+w^2-uv-vw-wu)$$",
            "With $u+v+w=0$ this forces $u^{3}+v^{3}+w^{3}=3uvw$.",
            "Counterexample $u=1,v=1,w=-2$: sum zero but $1+1-8=-6\\ne0$. So the statement is False.",
        ],
        [
            "Polynomial division (or factoring) cancels only where the cancelled factor is nonzero.",
            r"$$x^2-1=(x-1)(x+1)$$",
            r"$$\dfrac{x^2-1}{x-1}=x+1\qquad(x\ne1)$$",
            "At $x=1$ the left side is undefined, so the identity does not hold for every real $x$.",
            "So the statement is False.",
        ],
        [
            "Square both positive sides of the proposed root inequality.",
            r"$$(\sqrt{a}+\sqrt{b})^2=a+b+2\sqrt{ab}>a+b$$",
            "for $a,b>0$, so $\\sqrt{a}+\\sqrt{b}>\\sqrt{a+b}$.",
            "Hence $\\sqrt{a+b}<\\sqrt{a}+\\sqrt{b}$. So the statement is True.",
        ],
    ]
    return ov, bodies


def _144(task: dict):
    ov = (
        "Five checks: equality in the triangle inequality for absolute values, "
        "the discriminant criterion for no real roots, the geometric-mean proportion $y^{2}=xz$, "
        "rationalizing $1/(\\sqrt{p}-1)$, and a bounded oscillation of $|x+1|-|x-1|$."
    )
    bodies = [
        [
            "Equality $|a+b|=|a|+|b|$ holds precisely when $a$ and $b$ do not point opposite ways.",
            "If $ab\\ge0$, then $a$ and $b$ are both $\\ge0$ or both $\\le0$, and the identity holds.",
            "If $ab<0$, the absolute values cancel partly and $|a+b|<|a|+|b|$.",
            "So the iff statement with $ab\\ge0$ is correct. So the statement is True.",
        ],
        [
            "A quadratic $ax^{2}+bx+c$ with $a\\ne0$ has no real root precisely when its discriminant is negative.",
            r"$$\Delta=b^2-4ac$$",
            "No real root $\\Longleftrightarrow\\Delta<0$, i.e. $b^{2}<4ac$.",
            "The claim writes $b^{2}>4ac$, which is the two-distinct-real-roots regime. So the statement is False.",
        ],
        [
            "Clear the proportion of nonzero quantities.",
            r"$$\dfrac{x}{y}=\dfrac{y}{z}$$",
            "Cross-multiply:",
            r"$$xz=y^2$$",
            "which rearranges to the claimed $y^{2}=xz$. So the statement is True.",
        ],
        [
            "Multiply numerator and denominator by the conjugate $\\sqrt{p}+1$.",
            r"$$\dfrac{1}{\sqrt{p}-1}\cdot\dfrac{\sqrt{p}+1}{\sqrt{p}+1}=\dfrac{\sqrt{p}+1}{p-1}$$",
            "valid for $p>0$, $p\\ne1$. So the statement is True.",
        ],
        [
            "The expression $|x+1|-|x-1|$ is piecewise linear with critical points at $x=\\pm1$.",
            "On $x\\ge1$ it equals $(x+1)-(x-1)=2$.",
            "On $x\\le-1$ it equals $-(x+1)-(-(x-1))=-2$.",
            "On $-1<x<1$ it equals $(x+1)-(1-x)=2x$, which lies in $(-2,2)$.",
            "Hence the expression stays in $[-2,2]$ for every real $x$. So the statement is True.",
        ],
    ]
    return ov, bodies


def _145(task: dict):
    ov = (
        "Five checks: a monomial power identity, reciprocals of pairwise products under $a+b+c=0$, "
        "a nested radical simplification for $x\\ge0$, an absolute-value inequality as an open interval, "
        "and divisibility of $u^{n}-1$ by $u-1$."
    )
    bodies = [
        [
            "Distribute the outer exponent across the product and multiply exponents on the same base.",
            r"$$\bigl(u^2v\bigr)^3=(u^2)^3\,v^3=u^6v^3$$",
            "So the identity holds for $u,v>0$. So the statement is True.",
        ],
        [
            "Write each term with denominator $abc$ after using $a+b+c=0$.",
            r"$$\dfrac{1}{ab}+\dfrac{1}{bc}+\dfrac{1}{ca}=\dfrac{c+a+b}{abc}=\dfrac{a+b+c}{abc}$$",
            "The numerator vanishes by hypothesis, so the sum is $0$. So the statement is True.",
        ],
        [
            "Recognize $\\sqrt{x+2\\sqrt{x}+1}$ as a perfect square for $x\\ge0$.",
            r"$$x+2\sqrt{x}+1=(\sqrt{x}+1)^2$$",
            r"$$\sqrt{x+2\sqrt{x}+1}=\sqrt{x}+1$$",
            "Add $\\sqrt{x}$:",
            r"$$\sqrt{x}+\sqrt{x+2\sqrt{x}+1}=2\sqrt{x}+1$$",
            "So the statement is True.",
        ],
        [
            "Rewrite $|2x-1|<3$ as a two-sided inequality.",
            r"$$-3<2x-1<3$$",
            "Add $1$:",
            r"$$-2<2x<4$$",
            "Divide by $2$:",
            r"$$-1<x<2$$",
            "So the statement is True.",
        ],
        [
            "Use the factor theorem / geometric sum factorization.",
            r"$$u^n-1=(u-1)(u^{n-1}+u^{n-2}+\cdots+1)$$",
            "for every positive integer $n$. Hence $u-1$ divides $u^{n}-1$. So the statement is True.",
        ],
    ]
    return ov, bodies


def _146(task: dict):
    ov = (
        "Five checks: summing $y/x+x/y$, the false identity $\\sqrt{(v-2)^{2}}=v-2$, "
        "a constant claim for $|q|-|q-2|$, cancellation in $a^{2}=ac$, and the reciprocal-sum "
        "formula with $a+b$ and $ab$."
    )
    bodies = [
        [
            "Combine the two fractions over the common denominator $xy$.",
            r"$$\dfrac{y}{x}+\dfrac{x}{y}=\dfrac{y^2+x^2}{xy}=\dfrac{x^2+y^2}{xy}$$",
            "So the identity holds for nonzero $x,y$. So the statement is True.",
        ],
        [
            "A principal square root returns a nonnegative absolute value.",
            r"$$\sqrt{(v-2)^2}=|v-2|$$",
            "which equals $v-2$ only when $v\\ge2$.",
            "At $v=0$: left side $2$, right side $-2$. So the statement is False.",
        ],
        [
            "The difference of absolute values $|q|-|q-2|$ is not constantly $2$.",
            "At $q=0$:",
            r"$$|0|-|0-2|=-2\\ne2$$",
            "At $q=3$:",
            r"$$|3|-|3-2|=2$$",
            "The constant claim fails. So the statement is False.",
        ],
        [
            "Cancel a nonzero common factor $a$ from $a^{2}=ac$.",
            r"$$a^2-ac=0$$",
            r"$$a(a-c)=0$$",
            "With $a\\ne0$, necessarily $a=c$. So the statement is True.",
        ],
        [
            "The sum of reciprocals is the sum over the product.",
            r"$$\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{a+b}{ab}=\dfrac{s}{p}$$",
            "The claim prints $\\dfrac{p}{s}$ instead.",
            "Those ratios agree only in special cases, not in general. So the statement is False.",
        ],
    ]
    return ov, bodies


EXAM_GENERIC = {
    "MATH 2.137": _137,
    "MATH 2.138": _138,
    "MATH 2.139": _139,
    "MATH 2.140": _140,
    "MATH 2.141": _141,
    "MATH 2.142": _142,
    "MATH 2.143": _143,
    "MATH 2.144": _144,
    "MATH 2.145": _145,
    "MATH 2.146": _146,
}


def main() -> None:
    data = json.loads(PATH.read_text())
    tasks = data["tasks"] if isinstance(data, dict) else data
    n = 0
    for t in tasks:
        if t.get("subsection") != "2.5":
            continue
        cid = t["case_id"]
        if cid in {"MATH 2.147", "MATH 2.151", "MATH 2.155"}:
            rewrite_sum_product(t)
        elif cid in {"MATH 2.148", "MATH 2.152", "MATH 2.156"}:
            rewrite_rational_rs(t)
        elif cid in {"MATH 2.149", "MATH 2.153"}:
            rewrite_powers(t)
        elif cid in {"MATH 2.150", "MATH 2.154"}:
            rewrite_abs_interval(t)
        else:
            deepen_generic_exam(t)
        n += 1
        print(cid, "ov", len(t["solution_overview"]), "letters", [len(e) for e in t["tactical_explanations"]])
    if isinstance(data, dict):
        PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    else:
        PATH.write_text(json.dumps(tasks, indent=2, ensure_ascii=False) + "\n")
    print("rewrote", n, "exam tasks")


if __name__ == "__main__":
    main()
