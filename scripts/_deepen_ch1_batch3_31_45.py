#!/usr/bin/env python3
"""Deepen MATH 1.31–1.45 tactical explanations to maximal step density."""

from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _ch1_patch_lib import apply_case, load, save  # noqa: E402


def walk_union(name_a, set_a, name_b, set_b, result):
    lines = [
        f"Unite the two rosters.",
        "",
        f"$${name_a}={{{','.join(map(str,set_a))}}}$$",
        "",
        f"$${name_b}={{{','.join(map(str,set_b))}}}$$",
        "",
    ]
    for x in result:
        lines.append(f"$${x}\\in {name_a}\\cup {name_b}$$")
        lines.append("")
    lines.append(f"$${name_a}\\cup {name_b}={{{','.join(map(str,result))}}}$$")
    return "\n".join(lines)


def walk_inter(name_a, set_a, name_b, set_b, result):
    lines = [
        f"Test membership in both sets.",
        "",
        f"$${name_a}={{{','.join(map(str,set_a))}}}$$",
        "",
        f"$${name_b}={{{','.join(map(str,set_b))}}}$$",
        "",
    ]
    for x in set_a:
        lines.append(f"$${x}\\in {name_a}$$")
        lines.append("")
        if x in set_b:
            lines.append(f"$${x}\\in {name_b}$$")
        else:
            lines.append(f"$${x}\\notin {name_b}$$")
        lines.append("")
    lines.append(f"$${name_a}\\cap {name_b}={{{','.join(map(str,result))}}}$$")
    return "\n".join(lines)


def walk_diff(name_a, set_a, name_b, set_b, result):
    lines = [
        f"Difference keeps members of ${name_a}$ that miss ${name_b}$.",
        "",
        f"$${name_a}={{{','.join(map(str,set_a))}}}$$",
        "",
        f"$${name_b}={{{','.join(map(str,set_b))}}}$$",
        "",
    ]
    for x in set_a:
        lines.append(f"$${x}\\in {name_a}$$")
        lines.append("")
        if x in set_b:
            lines.append(f"$${x}\\in {name_b}$$")
        else:
            lines.append(f"$${x}\\notin {name_b}$$")
        lines.append("")
    lines.append(f"$${name_a}\\setminus {name_b}={{{','.join(map(str,result))}}}$$")
    return "\n".join(lines)


def unequal_diffs(left, right):
    return "\n".join(
        [
            "Compare the two differences:",
            "",
            f"$${left}$$",
            "",
            f"$${right}$$",
            "",
            f"$${left.split('=')[0].strip()}\\neq {right.split('=')[0].strip()}$$",
        ]
    )


BATCH: dict[str, tuple[list[bool], list[str]]] = {}

# --- 1.31 ---
A, B, C = [10, 20, 30, 40, 50], [30, 40, 50, 60], [1, 2, 3]
BATCH["MATH 1.31"] = (
    [True, True, True, False, True],
    [
        walk_union("A", A, "B", B, [10, 20, 30, 40, 50, 60]),
        walk_inter("A", A, "B", B, [30, 40, 50]),
        walk_diff("A", A, "B", B, [10, 20]),
        walk_diff("B", B, "A", A, [60])
        + "\n\nFrom the previous letter,\n\n$$A\\setminus B=\\{10,20\\}$$\n\n$$\\{60\\}\\neq\\{10,20\\}$$",
        walk_inter("A", A, "C", C, [])
        + "\n\nThe intersection is empty, so $A$ and $C$ are disjoint.",
    ],
)

# --- 1.32 ---
A, B, C = ["a", "b", "c", "d"], ["c", "d", "e"], ["x", "y"]
BATCH["MATH 1.32"] = (
    [True, True, True, False, True],
    [
        walk_union("A", A, "B", B, ["a", "b", "c", "d", "e"]),
        walk_inter("A", A, "B", B, ["c", "d"]),
        walk_diff("A", A, "B", B, ["a", "b"]),
        walk_diff("B", B, "A", A, ["e"])
        + "\n\nFrom the previous letter,\n\n$$A\\setminus B=\\{a,b\\}$$\n\n$$\\{e\\}\\neq\\{a,b\\}$$",
        walk_inter("A", A, "C", C, [])
        + "\n\nThe intersection is empty, so $A$ and $C$ are disjoint.",
    ],
)

# --- 1.33 De Morgan (same U,A,B as 1.23 but all true) ---
BATCH["MATH 1.33"] = (
    [True, True, True, True, True],
    [
        r"""First form the union:

$$A=\{1,2,3,4,5\}$$

$$B=\{4,5,6,7,8\}$$

$$A\cup B=\{1,2,3,4,5,6,7,8\}$$

Complement in $U=\{1,2,\ldots,10\}$:

$$9\notin A\cup B$$

$$10\notin A\cup B$$

$$(A\cup B)^{c}=\{9,10\}$$""",
        r"""De Morgan for unions. Left side from letter A:

$$(A\cup B)^{c}=\{9,10\}$$

Complements:

$$A^{c}=\{6,7,8,9,10\}$$

$$B^{c}=\{1,2,3,9,10\}$$

$$A^{c}\cap B^{c}=\{9,10\}$$

The two sides match.""",
        r"""Intersection first:

$$A\cap B=\{4,5\}$$

$$(A\cap B)^{c}=\{1,2,3,6,7,8,9,10\}$$

$$A^{c}=\{6,7,8,9,10\}$$

$$B^{c}=\{1,2,3,9,10\}$$

$$A^{c}\cup B^{c}=\{1,2,3,6,7,8,9,10\}$$

The two sides match.""",
        r"""Complement of $A$ in $U=\{1,2,\ldots,10\}$:

$$A=\{1,2,3,4,5\}$$

$$6\notin A$$

$$7\notin A$$

$$8\notin A$$

$$9\notin A$$

$$10\notin A$$

$$A^{c}=\{6,7,8,9,10\}$$""",
        r"""From letter C,

$$(A\cap B)^{c}=\{1,2,3,6,7,8,9,10\}$$

which matches the claim.""",
    ],
)

# --- 1.34 ---
BATCH["MATH 1.34"] = (
    [True, True, True, True, True],
    [
        r"""$A$ is the odds and $B$ the evens in $U=\{1,2,\ldots,12\}$:

$$A\cup B=\{1,2,3,4,5,6,7,8,9,10,11,12\}$$

$$A\cup B=U$$

$$(A\cup B)^{c}=\emptyset$$""",
        r"""De Morgan for unions. Left side:

$$(A\cup B)^{c}=\emptyset$$

Complements:

$$A^{c}=B=\{2,4,6,8,10,12\}$$

$$B^{c}=A=\{1,3,5,7,9,11\}$$

$$A^{c}\cap B^{c}=\emptyset$$

The two sides match.""",
        r"""Odds and evens are disjoint:

$$A\cap B=\emptyset$$

$$(A\cap B)^{c}=U$$

$$A^{c}=\{2,4,6,8,10,12\}$$

$$B^{c}=\{1,3,5,7,9,11\}$$

$$A^{c}\cup B^{c}=U$$

The two sides match.""",
        r"""Complement of the odds is the evens:

$$A=\{1,3,5,7,9,11\}$$

$$A^{c}=\{2,4,6,8,10,12\}$$""",
        r"""From letter C,

$$A\cap B=\emptyset$$

$$(A\cap B)^{c}=U=\{1,2,3,4,5,6,7,8,9,10,11,12\}$$""",
    ],
)

# --- 1.35 ---
BATCH["MATH 1.35"] = (
    [True, True, True, True, True],
    [
        r"""Union first:

$$A=\{p,q,r\}$$

$$B=\{r,s\}$$

$$A\cup B=\{p,q,r,s\}$$

Complement in $U=\{p,q,r,s,t,u\}$:

$$t\notin A\cup B$$

$$u\notin A\cup B$$

$$(A\cup B)^{c}=\{t,u\}$$""",
        r"""Left side from letter A:

$$(A\cup B)^{c}=\{t,u\}$$

$$A^{c}=\{s,t,u\}$$

$$B^{c}=\{p,q,t,u\}$$

$$A^{c}\cap B^{c}=\{t,u\}$$

The two sides match.""",
        r"""Intersection:

$$A\cap B=\{r\}$$

$$(A\cap B)^{c}=\{p,q,s,t,u\}$$

$$A^{c}=\{s,t,u\}$$

$$B^{c}=\{p,q,t,u\}$$

$$A^{c}\cup B^{c}=\{p,q,s,t,u\}$$

The two sides match.""",
        r"""Complement of $A=\{p,q,r\}$ in $U$:

$$s\notin A$$

$$t\notin A$$

$$u\notin A$$

$$A^{c}=\{s,t,u\}$$""",
        r"""From letter C,

$$(A\cap B)^{c}=\{p,q,s,t,u\}$$

which matches the claim.""",
    ],
)

# --- 1.36 ---
BATCH["MATH 1.36"] = (
    [True, True, False, False, True],
    [
        r"""Cartesian-product size:

$$|A|=2$$

$$|B|=3$$

$$|A\times B|=|A|\cdot|B|$$

$$2\cdot 3=6$$

$$|A\times B|=6$$""",
        r"""Check coordinates:

$$1\in A$$

$$x\in B$$

$$(1,x)\in A\times B$$""",
        r"""First coordinate must sit in $A$:

$$x\notin A$$

$$(x,1)\notin A\times B$$""",
        r"""Sample pair:

$$(1,x)\in A\times B$$

$$1\notin B$$

$$(1,x)\notin B\times A$$

$$A\times B\neq B\times A$$""",
        r"""Reversed product size:

$$|B|=3$$

$$|A|=2$$

$$3\cdot 2=6$$

$$|B\times A|=6$$

$$|A\times B|=6$$

so the sizes agree.""",
    ],
)

# --- 1.37 ---
BATCH["MATH 1.37"] = (
    [True, True, False, False, True],
    [
        r"""Cartesian-product size:

$$|A|=3$$

$$|B|=2$$

$$|A\times B|=|A|\cdot|B|$$

$$3\cdot 2=6$$

$$|A\times B|=6$$""",
        r"""Check coordinates:

$$m\in A$$

$$1\in B$$

$$(m,1)\in A\times B$$""",
        r"""First coordinate must sit in $A=\{m,n,p\}$:

$$1\notin A$$

$$(1,m)\notin A\times B$$""",
        r"""Sample pair:

$$(m,1)\in A\times B$$

$$m\notin B$$

$$(m,1)\notin B\times A$$

$$A\times B\neq B\times A$$""",
        r"""Reversed product size:

$$|B|=2$$

$$|A|=3$$

$$2\cdot 3=6$$

$$|B\times A|=6$$

$$|A\times B|=6$$""",
    ],
)

# --- 1.38 ---
BATCH["MATH 1.38"] = (
    [True, True, True, True, False],
    [
        walk_diff("A", [1, 3, 5, 7, 9], "B", [3, 5, 7, 11, 13], [1, 9]),
        walk_diff("B", [3, 5, 7, 11, 13], "A", [1, 3, 5, 7, 9], [11, 13]),
        r"""Symmetric difference unites the two differences:

$$A\setminus B=\{1,9\}$$

$$B\setminus A=\{11,13\}$$

$$A\triangle B=\{1,9,11,13\}$$""",
        r"""Intersect the differences:

$$A\setminus B=\{1,9\}$$

$$B\setminus A=\{11,13\}$$

$$1\notin\{11,13\}$$

$$9\notin\{11,13\}$$

$$(A\setminus B)\cap(B\setminus A)=\emptyset$$""",
        r"""The union is larger because it still contains the overlap:

$$A\cup B=\{1,3,5,7,9,11,13\}$$

$$A\triangle B=\{1,9,11,13\}$$

$$3\in A\cup B$$

$$3\notin A\triangle B$$

$$A\triangle B\neq A\cup B$$""",
    ],
)

# --- 1.39 ---
BATCH["MATH 1.39"] = (
    [True, True, True, True, True],
    [
        walk_diff("A", [2, 4, 6], "B", [1, 3, 5], [2, 4, 6]),
        walk_diff("B", [1, 3, 5], "A", [2, 4, 6], [1, 3, 5]),
        r"""Unite the differences:

$$A\setminus B=\{2,4,6\}$$

$$B\setminus A=\{1,3,5\}$$

$$A\triangle B=\{1,2,3,4,5,6\}$$""",
        r"""Intersect the differences:

$$\{2,4,6\}\cap\{1,3,5\}=\emptyset$$""",
        r"""Because $A\cap B=\emptyset$,

$$A\setminus B=A$$

$$B\setminus A=B$$

$$A\triangle B=A\cup B$$

and both equal $\{1,2,3,4,5,6\}$.""",
    ],
)


def survey_two(n, a, b, both, key):
    """Build A–E for two-set survey with keys pattern T,T,T,F,T."""
    union = a + b - both
    only_a = a - both
    neither = n - union
    only_b = b - both
    return [
        "\n".join(
            [
                "Inclusion-exclusion:",
                "",
                f"$$|A|={a}$$",
                "",
                f"$$|B|={b}$$",
                "",
                f"$$|A\\cap B|={both}$$",
                "",
                f"$$|A|+|B|={a}+{b}$$",
                "",
                f"$${a}+{b}={a+b}$$",
                "",
                f"$${a+b}-{both}={union}$$",
                "",
                f"$$|A\\cup B|={union}$$",
            ]
        ),
        "\n".join(
            [
                "Only $A$ is $A$ minus the overlap:",
                "",
                f"$$|A\\setminus B|=|A|-|A\\cap B|$$",
                "",
                f"$${a}-{both}={only_a}$$",
                "",
                f"$$|A\\setminus B|={only_a}$$",
            ]
        ),
        "\n".join(
            [
                "Neither club:",
                "",
                f"$$|U|-|A\\cup B|={n}-{union}$$",
                "",
                f"$${n}-{union}={neither}$$",
            ]
        ),
        "\n".join(
            [
                "Compare intersection and union sizes:",
                "",
                f"$$|A\\cap B|={both}$$",
                "",
                f"$$|A\\cup B|={union}$$",
                "",
                f"$${both}>{union}$$",
                "",
                "is false.",
            ]
        ),
        "\n".join(
            [
                "Only $B$ is $B$ minus the overlap:",
                "",
                f"$$|B\\setminus A|=|B|-|A\\cap B|$$",
                "",
                f"$${b}-{both}={only_b}$$",
                "",
                f"$$|B\\setminus A|={only_b}$$",
            ]
        ),
    ]


BATCH["MATH 1.40"] = ([True, True, True, False, True], survey_two(40, 22, 15, 6, None))
BATCH["MATH 1.41"] = ([True, True, True, False, True], survey_two(60, 34, 28, 12, None))
BATCH["MATH 1.42"] = ([True, True, True, False, True], survey_two(50, 20, 18, 5, None))

# --- 1.43 three sets ---
BATCH["MATH 1.43"] = (
    [True, True, True, True, False],
    [
        r"""Three-set inclusion-exclusion:

$$|A|=30$$

$$|B|=25$$

$$|C|=20$$

$$|A|+|B|=30+25$$

$$30+25=55$$

$$55+20=75$$

$$|A\cap B|=10$$

$$75-10=65$$

$$|A\cap C|=8$$

$$65-8=57$$

$$|B\cap C|=7$$

$$57-7=50$$

$$|A\cap B\cap C|=3$$

$$50+3=53$$

$$|A\cup B\cup C|=53$$""",
        r"""The triple intersection sits inside every pairwise intersection by definition:

$$A\cap B\cap C\subseteq A\cap B$$

$$A\cap B\cap C\subseteq A\cap C$$

$$A\cap B\cap C\subseteq B\cap C$$

So every all-three member is counted in each pairwise count.""",
        r"""Exactly photography and hiking but not cooking:

$$|A\cap B\setminus C|=|A\cap B|-|A\cap B\cap C|$$

$$10-3=7$$""",
        r"""The triple cannot exceed any pairwise count:

$$|A\cap B\cap C|=3$$

$$|A\cap B|=10$$

$$|A\cap C|=8$$

$$|B\cap C|=7$$

$$\min(10,8,7)=7$$

$$3\le 7$$""",
        r"""Compare the union to the raw sum:

$$|A\cup B\cup C|=53$$

$$|A|+|B|+|C|=30+25+20$$

$$30+25=55$$

$$55+20=75$$

$$53>75$$

is false. The union is smaller than the raw sum because overlaps are subtracted.""",
    ],
)

# --- 1.44 propositional ---
BATCH["MATH 1.44"] = (
    [False, True, True, False, False],
    [
        r"""Let $P$ mean “$7$ is prime” and $E$ mean “$7$ is even”. Given facts:

$$P$$

$$\neg E$$

The conjunction requires both:

$$P\wedge E$$

But $\neg E$ holds, so $P\wedge E$ is false.""",
        r"""The disjunction $P\vee E$ is true whenever at least one disjunct is true. Here

$$P$$

holds, so

$$P\vee E$$

is true.""",
        r"""Negation of the conjunction:

$$\neg(P\wedge E)$$

From letter A, $P\wedge E$ is false, so its negation is true. Equivalently by De Morgan:

$$\neg P\vee\neg E$$

and $\neg E$ holds.""",
        r"""“Neither prime nor even” is

$$\neg P\wedge\neg E$$

But $P$ is true, so $\neg P$ is false, and the conjunction fails.""",
        r"""Negation of the disjunction:

$$\neg(P\vee E)$$

From letter B, $P\vee E$ is true, so the negation is false. Equivalently:

$$\neg P\wedge\neg E$$

which fails because $P$ holds.""",
    ],
)

# --- 1.45 ---
BATCH["MATH 1.45"] = (
    [True, False, True, False, True],
    [
        r"""The universal claim is: every prime $p>2$ is odd. The only even prime is $2$, which is excluded by $p>2$. Every larger prime is odd, so the statement is true.""",
        r"""A counterexample would be a prime $p>2$ that is even. The number $2$ fails the hypothesis $p>2$:

$$2>2$$

is false. So $2$ is outside the quantified domain and is not a counterexample.""",
        r"""Negating $\forall p\,(p\text{ prime }\wedge p>2\Rightarrow p\text{ odd})$ yields

$$\exists p\,(p\text{ prime }\wedge p>2\wedge p\text{ even})$$

which is exactly the claimed negation.""",
        r"""The converse would say every odd $n>2$ is prime. A counterexample is

$$n=9$$

$$9>2$$

$$9\text{ is odd}$$

$$9=3\cdot 3$$

so $9$ is not prime. The converse fails.""",
        r"""Euclid’s theorem supplies infinitely many primes. Removing the single prime $2$ still leaves infinitely many primes, all of which are greater than $2$.""",
    ],
)


def main() -> None:
    # Fix empty-intersection display for 1.31/1.32 E
    for cid in ("MATH 1.31", "MATH 1.32"):
        keys, bodies = BATCH[cid]
        bodies = list(bodies)
        # replace empty brace result
        bodies[4] = bodies[4].replace("A\\cap C={}", "A\\cap C=\\emptyset")
        BATCH[cid] = (keys, bodies)

    text = load()
    for case_id, (keys, bodies) in BATCH.items():
        text = apply_case(text, case_id, keys, bodies)
        print("patched", case_id)
    save(text)
    print("wrote", len(BATCH), "cases")


if __name__ == "__main__":
    main()
