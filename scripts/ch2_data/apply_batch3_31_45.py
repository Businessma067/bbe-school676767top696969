#!/usr/bin/env python3
"""Apply maximal deepen for MATH 2.31–2.45."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch2-cases.json")
OUT = Path("/workspace/scripts/ch2_data/batch3_31_45.json")


def D(*xs):
    return [f"$$\n{x}\n$$" for x in xs]


def finish(letter, truth, setup, body, note=None):
    v = "True" if truth else "False"
    parts = [f"**{letter}.** → {v}", "", setup, ""]
    for b in body:
        parts += [b, ""]
    if note:
        parts += [note, ""]
    parts.append(f"So the statement is {v}.")
    return re.sub(r"\n{3,}", "\n\n", "\n".join(parts)).strip() + "\n"


def audit(expl, letter, truth):
    errs = []
    want = "True" if truth else "False"
    if not expl.startswith(f"**{letter}.** → {want}"):
        errs.append("header")
    if expl.count("$$") % 2:
        errs.append("$$")
    if f"So the statement is {want}." not in expl:
        errs.append("closer")
    for block in re.findall(r"\$\$(.*?)\$\$", expl, re.S):
        tmp = re.sub(
            r"\\(?:neq|leq|geq|approx|equiv|iff|Rightarrow|Leftarrow|Leftrightarrow|implies|to)",
            " ",
            block,
        )
        tmp = re.sub(r"\\text\{[^{}]*\}", " ", tmp)
        if len(re.findall(r"(?<![<>!])=", tmp)) >= 2:
            errs.append("chain")
        if block.strip().startswith("="):
            errs.append("lead=")
    return errs


BATCH: dict[str, list[str]] = {}


def add(cid, items):
    expls = []
    for i, (truth, setup, body, note) in enumerate(items):
        L = "ABCDE"[i]
        e = finish(L, truth, setup, body, note)
        errs = audit(e, L, truth)
        if errs:
            raise SystemExit(f"{cid}{L}: {errs}\n{e[:400]}")
        expls.append(e)
    BATCH[cid] = expls


add(
    "MATH 2.31",
    [
        (
            False,
            "Compare the telescoping product with the inflated claim $t^{16}-1$.",
            D(
                "t=2",
                "t-1=1",
                "t+1=3",
                "t^2+1=5",
                "t^4+1=17",
                "1\\cdot 3=3",
                "3\\cdot 5=15",
                "15\\cdot 17=255",
                "t^{16}=65536",
                "65536-1=65535",
                "255\\neq 65535",
            ),
            "The product equals $t^8-1=255$, not $t^{16}-1$.",
        ),
        (
            True,
            "Start from the square of the sum and isolate $a^2+b^2$.",
            D(
                "(a+b)^2=a^2+2ab+b^2",
                "a^2+b^2=(a+b)^2-2ab",
                "a+b=7",
                "ab=10",
                "7^2=49",
                "2\\cdot 10=20",
                "49-20=29",
            ),
            "This equals the claimed value $29$.",
        ),
        (
            False,
            "Substitute the given values into both sides of the claimed inequality.",
            D("r=1", "s=3", "r^2=1", "rs=3", "1+3=4", "s^2=9", "3+9=12", "4\\ge 12"),
            "The numerical comparison fails, so the claim is false.",
        ),
        (
            True,
            "Substitute $u=1$ into both forms and compare with the claimed bound.",
            D("u=1", "u^2=1", "6u=6", "1+6+11=18", "u+3=4", "4^2=16", "16+2=18", "18\\ge 2"),
            "Both sides equal $18$, and $18\\ge 2$.",
        ),
        (
            False,
            "Expand both cubes and compare with the printed companion formula.",
            D(
                "(h+k)^3-(h-k)^3=6h^2k+2k^3",
                "6h^2k+2k^3=2k(3h^2+k^2)",
                "2h(h^2+3k^2)",
                "h=2",
                "k=1",
                "2\\cdot 1\\cdot(12+1)=26",
                "4\\cdot(4+3)=28",
                "26\\neq 28",
            ),
            "The correct factorisation is $2k(3h^2+k^2)$, not $2h(h^2+3k^2)$.",
        ),
    ],
)

add(
    "MATH 2.32",
    [
        (
            False,
            "Substitute $u=0$ into both forms and compare.",
            D("u=0", "u^2+6u+11=11", "u+3=3", "3^2=9", "9-2=7", "11\\neq 7"),
            "At $u=0$ the two forms disagree.",
        ),
        (
            True,
            "Expand the cube by the binomial cube identity, term by term.",
            D(
                "(x-2)^3=x^3-3x^2\\cdot 2+3x\\cdot 2^2-2^3",
                "3x^2\\cdot 2=6x^2",
                "2^2=4",
                "3x\\cdot 4=12x",
                "2^3=8",
                "(x-2)^3=x^3-6x^2+12x-8",
            ),
            "The expansion matches the claim.",
        ),
        (
            True,
            "Expand the cube by the binomial cube identity, term by term.",
            D(
                "(x+2)^3=x^3+3x^2\\cdot 2+3x\\cdot 2^2+2^3",
                "3x^2\\cdot 2=6x^2",
                "2^2=4",
                "3x\\cdot 4=12x",
                "2^3=8",
                "(x+2)^3=x^3+6x^2+12x+8",
            ),
            "The expansion matches the claim.",
        ),
        (
            True,
            "Rewrite $u^{4}+4v^{4}$ as a difference of squares, factor, then evaluate.",
            D(
                "u=1",
                "v=1",
                "u^{4}+4v^{4}=(u^{2}+2v^{2})^{2}-(2uv)^{2}",
                "1+2=3",
                "2uv=2",
                "3^{2}=9",
                "2^{2}=4",
                "9-4=5",
                "1-2+2=1",
                "1+2+2=5",
                "1\\cdot 5=5",
            ),
            "Both sides become $5=1\\cdot 5$.",
        ),
        (
            False,
            "Expand $(2+1)^{3}$ with the full cube identity and compare with the incomplete pattern.",
            D("2+1=3", "3^{2}=9", "9\\cdot 3=27", "8+12+6+1=27", "8+6+1=15", "15\\neq 27"),
            "The incomplete pattern drops $3x^{2}y$.",
        ),
    ],
)

add(
    "MATH 2.33",
    [
        (
            True,
            "Substitute $x=2$, $y=1$ into both sides and compare.",
            D("x=2", "y=1", "x^4=16", "2x^2y^2=8", "y^4=1", "16+8+1=25", "x^2+y^2=5", "5^2=25"),
            "Both sides equal $25$.",
        ),
        (
            True,
            "Substitute the given values into both sides and compare.",
            D(
                "a=1",
                "e=2",
                "c=2",
                "d=1",
                "a^2+e^2=5",
                "c^2+d^2=5",
                "5\\cdot 5=25",
                "ac-ed=0",
                "0^2=0",
                "ad+ec=5",
                "5^2=25",
                "0+25=25",
            ),
            "Both sides equal $25$.",
        ),
        (
            True,
            "Factor by grouping, then factor the remaining difference of squares.",
            D(
                "x^3+3x^2-x-3",
                "x^2(x+3)-(x+3)",
                "(x^2-1)(x+3)",
                "x^2-1=(x-1)(x+1)",
                "(x-1)(x+1)(x+3)",
            ),
            "The factorisation matches the claim.",
        ),
        (
            True,
            "Use $x^{3}+y^{3}=s^{3}-3ps$ with $s=x+y$ and $p=xy$.",
            D("s=5", "p=6", "5^2=25", "2\\cdot 6=12", "25-12=13", "13-6=7", "5\\cdot 7=35", "125-90=35"),
            "The identity evaluates to $35$.",
        ),
        (
            False,
            "Compare the correct identity with the printed $s^{3}-3p$.",
            D("125-90=35", "125-18=107", "35\\neq 107"),
            "The printed formula drops a factor of $s$.",
        ),
    ],
)

add(
    "MATH 2.34",
    [
        (
            True,
            "Apply the difference of cubes factorisation and evaluate.",
            D("27=3^3", "8=2^3", "3-2=1", "9+6+4=19", "1\\cdot 19=19"),
            "The factorisation evaluates to $19$.",
        ),
        (
            False,
            "Compare $x^4+4$ with $(x^2+2x+2)^2$ at $x=1$.",
            D("x=1", "x^4+4=5", "x^2+2x+2=5", "5^2=25", "5\\neq 25"),
            "At $x=1$ the squared form is $25$, not $5$.",
        ),
        (
            True,
            "Substitute the given values into both sides and compare.",
            D(
                "a=2",
                "b=3",
                "c=4",
                "d=5",
                "8+10+12+15",
                "8+10=18",
                "18+12=30",
                "30+15=45",
                "5\\cdot 9=45",
            ),
            "Both sides equal $45$.",
        ),
        (
            False,
            "Expand the square fully and compare with $5^2+2^2$.",
            D("5+2=7", "7^2=49", "25+4=29", "49\\neq 29"),
            "The truncated form drops the cross term.",
        ),
        (
            True,
            "Substitute the given values into both sides and compare.",
            D("a=1", "b=2", "c=2", "d=1", "5\\cdot 5=25", "0+25=25"),
            "Both sides equal $25$.",
        ),
    ],
)

add(
    "MATH 2.35",
    [
        (
            True,
            "Clear the sum of reciprocals over the common denominator $ab$.",
            D(
                "\\dfrac{1}{a}=\\dfrac{b}{ab}",
                "\\dfrac{1}{b}=\\dfrac{a}{ab}",
                "\\dfrac{b}{ab}+\\dfrac{a}{ab}=\\dfrac{a+b}{ab}",
            ),
            "The common-denominator sum matches the claim.",
        ),
        (
            True,
            "Clear each fraction over the common denominator $xy$.",
            D(
                "\\dfrac{2}{x}=\\dfrac{2y}{xy}",
                "\\dfrac{3}{y}=\\dfrac{3x}{xy}",
                "\\dfrac{2y}{xy}+\\dfrac{3x}{xy}=\\dfrac{2y+3x}{xy}",
            ),
            "The cleared sum matches the claim.",
        ),
        (
            True,
            "Clear each fraction over the common denominator $pq$.",
            D(
                "\\dfrac{p}{q}=\\dfrac{p^2}{pq}",
                "\\dfrac{q}{p}=\\dfrac{q^2}{pq}",
                "\\dfrac{p^2}{pq}+\\dfrac{q^2}{pq}=\\dfrac{p^2+q^2}{pq}",
            ),
            "The cleared sum matches the claim.",
        ),
        (
            False,
            "Compare the correct common-denominator sum with the printed $\\dfrac{1}{m+n}$.",
            D(
                "\\dfrac{1}{m}+\\dfrac{1}{n}=\\dfrac{m+n}{mn}",
                "m=1",
                "n=1",
                "2",
                "\\dfrac{1}{2}",
                "2\\neq \\dfrac{1}{2}",
            ),
            "The sum of reciprocals is $\\dfrac{m+n}{mn}$, not $\\dfrac{1}{m+n}$.",
        ),
        (
            True,
            "Clear each fraction over the common denominator $uv$.",
            D(
                "\\dfrac{4}{u}=\\dfrac{4v}{uv}",
                "\\dfrac{1}{v}=\\dfrac{u}{uv}",
                "\\dfrac{4v}{uv}+\\dfrac{u}{uv}=\\dfrac{4v+u}{uv}",
            ),
            "The cleared sum matches the claim.",
        ),
    ],
)

add(
    "MATH 2.36",
    [
        (
            True,
            "Factor the numerator as a difference of squares, then cancel.",
            D("\\dfrac{x^2-9}{x-3}", "9=3^2", "x^2-9=(x-3)(x+3)", "x\\neq 3", "x+3"),
            "On $x\\neq 3$ the cancelled form matches the claim.",
        ),
        (
            True,
            "Factor the numerator as a difference of squares, then cancel.",
            D("\\dfrac{t^2-4}{t+2}", "4=2^2", "t^2-4=(t-2)(t+2)", "t\\neq -2", "t-2"),
            "On $t\\neq -2$ the cancelled form matches the claim.",
        ),
        (
            True,
            "Factor the numerator as a difference of squares, then cancel.",
            D("\\dfrac{a^2-25}{a-5}", "25=5^2", "a^2-25=(a-5)(a+5)", "a\\neq 5", "a+5"),
            "On $a\\neq 5$ the cancelled form matches the claim.",
        ),
        (
            True,
            "Factor the numerator as a difference of squares, then cancel.",
            D("\\dfrac{k^2-1}{k-1}", "k^2-1=(k-1)(k+1)", "k\\neq 1", "k+1"),
            "On $k\\neq 1$ the cancelled form matches the claim.",
        ),
        (
            False,
            "Factor the numerator and compare with the printed $x-2$.",
            D("\\dfrac{x^2-4}{x-2}", "x^2-4=(x-2)(x+2)", "x\\neq 2", "x+2", "x+2\\neq x-2"),
            "After cancelling, the remaining factor is $x+2$, not $x-2$.",
        ),
    ],
)

add(
    "MATH 2.37",
    [
        (
            True,
            "Multiply the fractions and cancel matching factors.",
            D("\\dfrac{3a}{2b}\\cdot\\dfrac{4b}{3a}=\\dfrac{12ab}{6ab}", "\\dfrac{12ab}{6ab}=2"),
            "The product simplifies to $2$.",
        ),
        (
            True,
            "Multiply the fractions and cancel matching factors.",
            D("\\dfrac{2x}{y}\\cdot\\dfrac{y}{4x}=\\dfrac{2xy}{4xy}", "\\dfrac{2}{4}=\\dfrac{1}{2}"),
            "The product simplifies to $\\dfrac{1}{2}$.",
        ),
        (
            True,
            "Multiply the fractions and cancel matching factors.",
            D("\\dfrac{5p}{q}\\cdot\\dfrac{q}{5p}=\\dfrac{5pq}{5pq}", "\\dfrac{5pq}{5pq}=1"),
            "The product simplifies to $1$.",
        ),
        (
            False,
            "Multiply the fractions and compare with the printed $0$.",
            D("\\dfrac{m}{n}\\cdot\\dfrac{n}{m}=\\dfrac{mn}{nm}", "\\dfrac{mn}{nm}=1", "1\\neq 0"),
            "The product equals $1$, not $0$.",
        ),
        (
            True,
            "Clear the compound fraction by writing numerator and denominator over $xy$.",
            D(
                "\\dfrac{1}{x}-\\dfrac{1}{y}=\\dfrac{y-x}{xy}",
                "\\dfrac{1}{x}+\\dfrac{1}{y}=\\dfrac{y+x}{xy}",
                "\\dfrac{(y-x)/xy}{(y+x)/xy}=\\dfrac{y-x}{y+x}",
            ),
            "The simplified form matches the claim.",
        ),
    ],
)

add(
    "MATH 2.38",
    [
        (
            True,
            "Decompose over the difference of squares using undetermined coefficients.",
            D(
                "x^2-1=(x-1)(x+1)",
                "\\dfrac{1}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}",
                "A(x+1)+B(x-1)=1",
                "A+B=0",
                "A-B=1",
                "2A=1",
                "A=\\dfrac{1}{2}",
                "B=-\\dfrac{1}{2}",
                "\\dfrac{1}{x^2-1}=\\dfrac{1}{2(x-1)}-\\dfrac{1}{2(x+1)}",
            ),
            "The partial-fraction decomposition matches the claim.",
        ),
        (
            True,
            "Decompose over the difference of squares using undetermined coefficients.",
            D(
                "\\dfrac{2}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}",
                "A(x+1)+B(x-1)=2",
                "A+B=0",
                "A-B=2",
                "2A=2",
                "A=1",
                "B=-1",
                "\\dfrac{2}{x^2-1}=\\dfrac{1}{x-1}-\\dfrac{1}{x+1}",
            ),
            "The partial-fraction decomposition matches the claim.",
        ),
        (
            True,
            "Decompose over the difference of squares using undetermined coefficients.",
            D(
                "\\dfrac{3}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}",
                "A(x+1)+B(x-1)=3",
                "A+B=0",
                "A-B=3",
                "2A=3",
                "A=\\dfrac{3}{2}",
                "B=-\\dfrac{3}{2}",
                "\\dfrac{3}{x^2-1}=\\dfrac{3}{2(x-1)}-\\dfrac{3}{2(x+1)}",
            ),
            "The partial-fraction decomposition matches the claim.",
        ),
        (
            False,
            "Compare the correct half-coefficient decomposition with the printed form that omits $\\tfrac12$.",
            D(
                "\\dfrac{1}{x-1}-\\dfrac{1}{x+1}=\\dfrac{2}{x^2-1}",
                "x=2",
                "\\dfrac{1}{3}",
                "1-\\dfrac{1}{3}=\\dfrac{2}{3}",
                "\\dfrac{1}{3}\\neq \\dfrac{2}{3}",
            ),
            "Omitting the factor $\\tfrac12$ doubles the right-hand side.",
        ),
        (
            True,
            "Decompose over the difference of squares using undetermined coefficients.",
            D(
                "\\dfrac{4}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}",
                "A(x+1)+B(x-1)=4",
                "A+B=0",
                "A-B=4",
                "2A=4",
                "A=2",
                "B=-2",
                "\\dfrac{4}{x^2-1}=\\dfrac{2}{x-1}-\\dfrac{2}{x+1}",
            ),
            "The partial-fraction decomposition matches the claim.",
        ),
    ],
)

add(
    "MATH 2.39",
    [
        (
            True,
            "Rewrite the stacked quotient as a product and cancel common factors.",
            D(
                "\\dfrac{\\dfrac{8a^2b}{4x^2-16}}{\\dfrac{4ab}{2x+4}}=\\dfrac{8a^2b}{4x^2-16}\\cdot\\dfrac{2x+4}{4ab}",
                "4x^2-16=4(x^2-4)",
                "x^2-4=(x-2)(x+2)",
                "2x+4=2(x+2)",
                "\\dfrac{8a^2b\\cdot 2(x+2)}{4(x-2)(x+2)\\cdot 4ab}",
                "8\\cdot 2=16",
                "4\\cdot 4=16",
                "\\dfrac{16a^2b(x+2)}{16ab(x-2)(x+2)}",
                "\\dfrac{a}{x-2}",
            ),
            "On the stated domain the simplified form matches the claim.",
        ),
        (
            True,
            "Simplify the powers in the denominator, then cancel.",
            D(
                "(-9m)^2=81m^2",
                "4\\cdot 9m=36m",
                "\\dfrac{36m}{81m^2}=\\dfrac{36}{81m}",
                "\\dfrac{36}{81}=\\dfrac{4}{9}",
                "\\dfrac{4}{9m}",
            ),
            "The simplified form matches the claim.",
        ),
        (
            True,
            "Translate the verbal claim into algebra and clear the compound fraction.",
            D(
                "2\\cdot\\dfrac{1}{x+\\dfrac{1}{x}}",
                "x+\\dfrac{1}{x}=\\dfrac{x^2+1}{x}",
                "\\dfrac{1}{\\dfrac{x^2+1}{x}}=\\dfrac{x}{x^2+1}",
                "2\\cdot\\dfrac{x}{x^2+1}=\\dfrac{2x}{x^2+1}",
            ),
            "The algebra matches the verbal claim.",
        ),
        (
            True,
            "Clear each fraction over the common denominator $mn$.",
            D(
                "\\dfrac{m}{n}=\\dfrac{m^2}{mn}",
                "\\dfrac{n}{m}=\\dfrac{n^2}{mn}",
                "\\dfrac{m^2+n^2}{mn}",
            ),
            "The cleared sum matches the claim.",
        ),
        (
            False,
            "Translate the verbal claim and compare with the printed missing factor $2$.",
            D(
                "2\\cdot\\dfrac{1}{k+\\dfrac{1}{k}}=\\dfrac{2k}{k^2+1}",
                "\\dfrac{k}{k^2+1}",
                "k=1",
                "\\dfrac{2}{2}=1",
                "\\dfrac{1}{2}",
                "1\\neq \\dfrac{1}{2}",
            ),
            "The factor $2$ is required; the printed form omits it.",
        ),
    ],
)

add(
    "MATH 2.40",
    [
        (
            False,
            "Compare the correct common-denominator sum with $\\dfrac{1}{r+s}$.",
            D(
                "\\dfrac{1}{r}+\\dfrac{1}{s}=\\dfrac{r+s}{rs}",
                "r=1",
                "s=1",
                "2",
                "\\dfrac{1}{2}",
                "2\\neq \\dfrac{1}{2}",
            ),
            "The sum of reciprocals is not $\\dfrac{1}{r+s}$.",
        ),
        (
            True,
            "Add fractions with a common denominator.",
            D("\\dfrac{3}{x}+\\dfrac{5}{x}=\\dfrac{3+5}{x}", "3+5=8", "\\dfrac{8}{x}"),
            "The sum matches the claim.",
        ),
        (
            False,
            "Factor the numerator and cancel; compare with $x+1$.",
            D(
                "x^2+5x+6=(x+2)(x+3)",
                "\\dfrac{(x+2)(x+3)}{x+3}",
                "x\\neq -3",
                "x+2",
                "x+2\\neq x+1",
            ),
            "After cancelling, the remaining factor is $x+2$, not $x+1$.",
        ),
        (
            True,
            "Factor the numerator as a difference of squares, then cancel.",
            D("x^2-16=(x-4)(x+4)", "\\dfrac{(x-4)(x+4)}{x-4}", "x\\neq 4", "x+4"),
            "On $x\\neq 4$ the cancelled form matches the claim.",
        ),
        (
            True,
            "Clear both fractions over the common denominator $6h$.",
            D(
                "\\dfrac{1}{3h}=\\dfrac{2}{6h}",
                "\\dfrac{2}{6h}+\\dfrac{1}{6h}=\\dfrac{3}{6h}",
                "\\dfrac{3}{6}=\\dfrac{1}{2}",
                "\\dfrac{1}{2h}",
            ),
            "The sum matches the claim.",
        ),
    ],
)

add(
    "MATH 2.41",
    [
        (
            False,
            "Compare the correct common-denominator sum with the printed $\\dfrac{b+a}{a+b}$.",
            D(
                "\\dfrac{1}{a}+\\dfrac{1}{b}=\\dfrac{a+b}{ab}",
                "\\dfrac{b+a}{a+b}=1",
                "a=1",
                "b=1",
                "\\dfrac{2}{1}=2",
                "1",
                "2\\neq 1",
            ),
            "The sum of reciprocals is $\\dfrac{a+b}{ab}$, not $1$.",
        ),
        (
            False,
            "Combine over $x^2-1$ and compare with the printed $\\dfrac{7}{x-1}$.",
            D(
                "x^2-1=(x-1)(x+1)",
                "\\dfrac{7x-1}{x^2-1}-\\dfrac{2}{x+1}+\\dfrac{3}{x-1}-\\dfrac{1}{1-x}",
                "\\dfrac{1}{1-x}=-\\dfrac{1}{x-1}",
                "x=2",
                "\\dfrac{14-1}{4-1}-\\dfrac{2}{3}+\\dfrac{3}{1}-\\dfrac{1}{-1}",
                "\\dfrac{13}{3}-\\dfrac{2}{3}+3+1",
                "\\dfrac{11}{3}+4",
                "\\dfrac{11}{3}+\\dfrac{12}{3}=\\dfrac{23}{3}",
                "\\dfrac{7}{2-1}=7",
                "\\dfrac{23}{3}\\neq 7",
            ),
            "At $x=2$ the left-hand side is $\\dfrac{23}{3}$, not $7$.",
        ),
        (
            True,
            "Decompose $1/(x^2-1)$ using undetermined coefficients.",
            D(
                "x^2-1=(x-1)(x+1)",
                "\\dfrac{1}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}",
                "A+B=0",
                "A-B=1",
                "2A=1",
                "A=\\dfrac{1}{2}",
                "B=-\\dfrac{1}{2}",
                "\\dfrac{1}{2(x-1)}-\\dfrac{1}{2(x+1)}",
            ),
            "The verbal decomposition matches the algebra.",
        ),
        (
            True,
            "Clear each fraction over the common denominator $ab$.",
            D(
                "\\dfrac{a}{b}=\\dfrac{a^{2}}{ab}",
                "\\dfrac{b}{a}=\\dfrac{b^{2}}{ab}",
                "\\dfrac{a^{2}+b^{2}}{ab}",
            ),
            "The cleared sum matches the claim.",
        ),
        (
            True,
            "Write everything over $(x-1)(x+1)$, then cancel shared factors on $x\\neq\\pm 1$.",
            D(
                "(x-1)(x+1)=x^2-1",
                "\\dfrac{x+3}{x^2-1}-\\dfrac{1}{x+1}",
                "\\dfrac{1}{x+1}=\\dfrac{x-1}{(x-1)(x+1)}",
                "\\dfrac{x+3-(x-1)}{(x-1)(x+1)}",
                "x+3-(x-1)=2(x+1)",
                "\\dfrac{2(x+1)}{(x-1)(x+1)}",
                "x\\neq -1",
                "\\dfrac{2}{x-1}",
            ),
            "The reduced linear remainder matches the claim $\\dfrac{2}{x-1}$.",
        ),
    ],
)


add(
    "MATH 2.42",
    [
        (
            False,
            "Compare the correct common-denominator sum with $\\dfrac{1}{r+s}$.",
            D(
                "\\dfrac{1}{r}+\\dfrac{1}{s}=\\dfrac{r+s}{rs}",
                "r=1",
                "s=1",
                "2",
                "\\dfrac{1}{2}",
                "2\\neq \\dfrac{1}{2}",
            ),
            "The sum of reciprocals is not $\\dfrac{1}{r+s}$.",
        ),
        (
            True,
            "Clear the nested unit fraction.",
            D(
                "1+\\dfrac{1}{z}=\\dfrac{z+1}{z}",
                "\\dfrac{1}{\\dfrac{z+1}{z}}=\\dfrac{z}{z+1}",
            ),
            "The collapsed form matches the claim.",
        ),
        (
            False,
            "Clear the nested unit fraction and compare with the printed $\\dfrac{t}{t+1}$.",
            D(
                "1-\\dfrac{1}{t}=\\dfrac{t-1}{t}",
                "\\dfrac{1}{\\dfrac{t-1}{t}}=\\dfrac{t}{t-1}",
                "t=2",
                "\\dfrac{2}{2-1}=2",
                "\\dfrac{2}{2+1}=\\dfrac{2}{3}",
                "2\\neq \\dfrac{2}{3}",
            ),
            "The correct collapse is $\\dfrac{t}{t-1}$, not $\\dfrac{t}{t+1}$.",
        ),
        (
            True,
            "Decompose $8/(x^2-1)$ using undetermined coefficients.",
            D(
                "x^2-1=(x-1)(x+1)",
                "\\dfrac{8}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}",
                "A(x+1)+B(x-1)=8",
                "A+B=0",
                "A-B=8",
                "2A=8",
                "A=4",
                "B=-4",
                "\\dfrac{4}{x-1}-\\dfrac{4}{x+1}",
            ),
            "The verbal decomposition matches the algebra.",
        ),
        (
            False,
            "Clear each fraction over $ab$ and compare with the printed numerator $a+b$.",
            D(
                "\\dfrac{a}{b}+\\dfrac{b}{a}=\\dfrac{a^2+b^2}{ab}",
                "a=2",
                "b=1",
                "a^2=4",
                "b^2=1",
                "4+1=5",
                "ab=2",
                "\\dfrac{5}{2}",
                "a+b=3",
                "\\dfrac{3}{2}",
                "\\dfrac{5}{2}\\neq \\dfrac{3}{2}",
            ),
            "The correct numerator is $a^2+b^2$, not $a+b$.",
        ),
    ],
)

add(
    "MATH 2.43",
    [
        (
            True,
            "Clear both fractions over $x^2-4$.",
            D(
                "\\dfrac{1}{x-2}=\\dfrac{x+2}{(x-2)(x+2)}",
                "\\dfrac{1}{x+2}=\\dfrac{x-2}{(x-2)(x+2)}",
                "\\dfrac{x+2}{x^2-4}-\\dfrac{x-2}{x^2-4}=\\dfrac{(x+2)-(x-2)}{x^2-4}",
                "(x+2)-(x-2)=x+2-x+2",
                "x+2-x+2=4",
                "\\dfrac{4}{x^2-4}",
            ),
            "The difference matches the claim.",
        ),
        (
            True,
            "Clear both fractions over $x^2-4$.",
            D(
                "\\dfrac{1}{x-2}-\\dfrac{1}{x+2}=\\dfrac{(x+2)-(x-2)}{x^2-4}",
                "(x+2)-(x-2)=4",
                "\\dfrac{4}{x^{2}-4}",
            ),
            "The difference matches the claim.",
        ),
        (
            True,
            "Clear each fraction over the common denominator $pq$.",
            D(
                "\\dfrac{4}{p}=\\dfrac{4q}{pq}",
                "\\dfrac{5}{q}=\\dfrac{5p}{pq}",
                "\\dfrac{4q+5p}{pq}",
            ),
            "The cleared sum matches the claim.",
        ),
        (
            True,
            "Rewrite the stacked quotient as a product and cancel common factors.",
            D(
                "\\dfrac{\\dfrac{8p^2b}{4x^2-16}}{\\dfrac{4pb}{2x+4}}=\\dfrac{8p^2b}{4x^2-16}\\cdot\\dfrac{2x+4}{4pb}",
                "4x^2-16=4(x-2)(x+2)",
                "2x+4=2(x+2)",
                "\\dfrac{8p^2b\\cdot 2(x+2)}{4(x-2)(x+2)\\cdot 4pb}",
                "8\\cdot 2=16",
                "4\\cdot 4=16",
                "\\dfrac{16p^2b(x+2)}{16pb(x-2)(x+2)}",
                "\\dfrac{p}{x-2}",
            ),
            "On the stated domain the simplified form matches the claim.",
        ),
        (
            False,
            "Decompose $6/(x^2-1)$ and compare with the printed coefficients $6$ and $6$.",
            D(
                "\\dfrac{6}{(x-1)(x+1)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+1}",
                "A+B=0",
                "A-B=6",
                "2A=6",
                "A=3",
                "B=-3",
                "\\dfrac{3}{x-1}-\\dfrac{3}{x+1}",
                "\\dfrac{6}{x-1}-\\dfrac{6}{x+1}",
                "x=2",
                "3-1=2",
                "6-2=4",
                "2\\neq 4",
            ),
            "The correct coefficients are $3$ and $-3$, not $6$ and $-6$.",
        ),
    ],
)

add(
    "MATH 2.44",
    [
        (
            True,
            "Clear each fraction over the common denominator $ab$.",
            D(
                "\\dfrac{2a}{b}=\\dfrac{2a^2}{ab}",
                "\\dfrac{3b}{a}=\\dfrac{3b^2}{ab}",
                "\\dfrac{2a^2+3b^2}{ab}",
            ),
            "The cleared sum matches the claim.",
        ),
        (
            True,
            "Expand the square of a binomial of fractions.",
            D(
                "\\bigl(1-\\dfrac{1}{u}\\bigr)^2=1^2-2\\cdot 1\\cdot\\dfrac{1}{u}+\\bigl(\\dfrac{1}{u}\\bigr)^2",
                "1^2=1",
                "2\\cdot 1\\cdot\\dfrac{1}{u}=\\dfrac{2}{u}",
                "\\bigl(\\dfrac{1}{u}\\bigr)^2=\\dfrac{1}{u^2}",
                "1-\\dfrac{2}{u}+\\dfrac{1}{u^2}",
            ),
            "The expansion matches the claim.",
        ),
        (
            False,
            "Expand $\\bigl(v+\\dfrac{1}{v}\\bigr)^2$ and compare with the printed missing cross term.",
            D(
                "\\bigl(v+\\dfrac{1}{v}\\bigr)^2=v^2+2\\cdot v\\cdot\\dfrac{1}{v}+\\dfrac{1}{v^2}",
                "2\\cdot v\\cdot\\dfrac{1}{v}=2",
                "v^2+2+\\dfrac{1}{v^2}",
                "v^2+\\dfrac{1}{v^2}",
                "v=1",
                "1+2+1=4",
                "1+1=2",
                "4\\neq 2",
            ),
            "The cross term contributes an extra $2$.",
        ),
        (
            False,
            "Cancel on $\\dfrac{5y^2-45}{y-3}$ for $y\\neq 3$ and compare with the recorded remainder.",
            D(
                "5y^2-45=5(y^2-9)",
                "y^2-9=(y-3)(y+3)",
                "5(y^2-9)=5(y-3)(y+3)",
                "\\dfrac{5(y-3)(y+3)}{y-3}",
                "y\\neq 3",
                "5(y+3)",
                "5y+15",
                "5y-15",
                "5y+15\\neq 5y-15",
            ),
            "The true remainder is $5y+15$, not $5y-15$.",
        ),
        (
            True,
            "Simplify the powers in the denominator, then cancel.",
            D(
                "(-6q)^2=36q^2",
                "4\\cdot 6q=24q",
                "\\dfrac{24q}{36q^2}=\\dfrac{24}{36q}",
                "\\dfrac{24}{36}=\\dfrac{2}{3}",
                "\\dfrac{2}{3q}",
                "\\dfrac{4}{6q}=\\dfrac{2}{3q}",
            ),
            "The simplified form matches the claim.",
        ),
    ],
)

add(
    "MATH 2.45",
    [
        (
            True,
            "Clear the compound fraction in the denominator.",
            D(
                "x+\\dfrac{1}{x}=\\dfrac{x^2+1}{x}",
                "\\dfrac{2}{\\dfrac{x^2+1}{x}}=2\\cdot\\dfrac{x}{x^2+1}",
                "2\\cdot\\dfrac{x}{x^2+1}=\\dfrac{2x}{x^2+1}",
            ),
            "The cleared form matches the claim.",
        ),
        (
            False,
            "Compare the correct common-denominator sum with $\\dfrac{1}{p+q}$.",
            D(
                "\\dfrac{1}{p}+\\dfrac{1}{q}=\\dfrac{p+q}{pq}",
                "p=1",
                "q=1",
                "2",
                "\\dfrac{1}{2}",
                "2\\neq \\dfrac{1}{2}",
            ),
            "The sum of reciprocals is not $\\dfrac{1}{p+q}$.",
        ),
        (
            False,
            "Compare the correct half-coefficient decomposition with the printed form that omits $\\tfrac12$.",
            D(
                "\\dfrac{1}{x^2-1}=\\dfrac{1}{2(x-1)}-\\dfrac{1}{2(x+1)}",
                "\\dfrac{1}{x-1}-\\dfrac{1}{x+1}=\\dfrac{2}{x^2-1}",
                "x=2",
                "\\dfrac{1}{3}",
                "\\dfrac{2}{3}",
                "\\dfrac{1}{3}\\neq \\dfrac{2}{3}",
            ),
            "Omitting the factor $\\tfrac12$ doubles the right-hand side.",
        ),
        (
            True,
            "Clear both fractions over $x^2-1$.",
            D(
                "\\dfrac{2}{x-1}=\\dfrac{2(x+1)}{(x-1)(x+1)}",
                "\\dfrac{3}{x+1}=\\dfrac{3(x-1)}{(x-1)(x+1)}",
                "\\dfrac{2(x+1)+3(x-1)}{x^2-1}",
                "2(x+1)=2x+2",
                "3(x-1)=3x-3",
                "2x+2+3x-3=5x-1",
                "\\dfrac{5x-1}{x^{2}-1}",
            ),
            "The combined numerator matches the claim.",
        ),
        (
            False,
            "Divide the cubic by $x$ term by term and compare with the printed middle sign.",
            D(
                "\\dfrac{x^3-8}{x}=\\dfrac{x^3}{x}-\\dfrac{8}{x}",
                "\\dfrac{x^3}{x}=x^2",
                "x^2-\\dfrac{8}{x}",
                "x^2+2x+\\dfrac{8}{x}",
                "x=1",
                "1-8=-7",
                "1+2+8=11",
                "-7\\neq 11",
            ),
            "Polynomial division of $x^3-8$ by $x$ does not produce the printed $+2x$ middle term.",
        ),
    ],
)


def main() -> None:
    data = json.loads(PATH.read_text())
    by = {t["case_id"]: t for t in data["tasks"]}
    for cid, expls in BATCH.items():
        t = by[cid]
        for i, L in enumerate("ABCDE"):
            truth = bool(t["answer_key"][i])
            want = "True" if truth else "False"
            if not expls[i].startswith(f"**{L}.** → {want}"):
                raise SystemExit(f"key mismatch {cid}{L}")
        t["tactical_explanations"] = expls
        print("applied", cid)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    OUT.write_text(json.dumps(BATCH, ensure_ascii=False, indent=2))
    print("wrote", len(BATCH), "cases")


if __name__ == "__main__":
    main()
