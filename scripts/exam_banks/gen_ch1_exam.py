#!/usr/bin/env python3
"""Generate math-ch1-exam.json — 20 hard independent True/False exam tasks."""

from __future__ import annotations

import json
from pathlib import Path

OUT = Path("/workspace/src/data/math-ch1-exam.json")


def T(letter: str, truth: bool, body: str) -> str:
    tag = "True" if truth else "False"
    body = body.strip()
    # Normalise closers to the MATH 13.18 rhythm.
    for old in (
        f"and the statement is {tag}.",
        f"The statement is {tag}.",
        f", and the statement is {tag}.",
        f"so the formula is a contradiction and the statement is {tag}.",
        f"so exactly $4$ such subsets exist, and the statement is {tag}.",
        f"so the data fit inside the sample, and the statement is {tag}.",
    ):
        if body.endswith(old):
            body = body[: -len(old)].rstrip(", ").rstrip()
            break
    if not body.endswith(f"so the statement is {tag}."):
        body = body.rstrip(".") + f", so the statement is {tag}."
    return f"**{letter}.** → {tag}\n\n{body}"


# Each task: title_n, difficulty, overview, list of (statement, truth, explanation_body)
# Topics rotate: set ops, power/subsets, complements, inclusion-exclusion,
# propositional equivalence, truth tables, quantifiers, deduction.

TASKS: list[dict] = []


def add(diff: str, overview: str, items: list[tuple[str, bool, str]]) -> None:
    assert len(items) == 5
    TASKS.append({"diff": diff, "overview": overview, "items": items})


# ---- Task 1 (109) ----
add(
    "4/5",
    "Five independent checks: a three-set difference count, even-cardinality subsets containing a fixed element, a De Morgan complement size, a three-set inclusion-exclusion census, and an exportation equivalence.",
    [
        (
            "Let $A = \\{1,2,3,4,5,6\\}$, $B = \\{2,4,6,8,10\\}$, and $C = \\{1,2,3,8,9\\}$. Writing $A \\triangle B$ for the symmetric difference $(A \\setminus B) \\cup (B \\setminus A)$, the claim $|(A \\triangle B) \\cup C| = 9$ is correct.",
            False,
            """Symmetric difference keeps elements in exactly one of $A$ or $B$.

$$A \\setminus B = \\{1,3,5\\}$$

$$B \\setminus A = \\{8,10\\}$$

$$A \\triangle B = \\{1,3,5,8,10\\}$$

Union with $C$ adds $2$ and $9$:

$$(A \\triangle B) \\cup C = \\{1,2,3,5,8,9,10\\}$$

That roster has $7$ elements, not $9$, so the statement is False.""",
        ),
        (
            "Let $X = \\{1,2,3,4\\}$. The number of subsets of $X$ that contain the element $1$ and have even cardinality is exactly $4$.",
            True,
            """Fix $1 \\in S$ and choose the rest from $\\{2,3,4\\}$. Then $|S| = 1 + k$ is even precisely when $k$ is odd.

The odd-sized subsets of a $3$-element set number

$$\\binom{3}{1} + \\binom{3}{3} = 3 + 1 = 4$$

so exactly $4$ such subsets exist, and the statement is True.""",
        ),
        (
            "Let $U = \\{1,2,\\ldots,12\\}$, let $A$ be the set of even elements of $U$, and let $B$ be the set of multiples of $3$ in $U$. Then $|A^{c} \\cap B^{c}| = 5$.",
            False,
            """By De Morgan, $A^{c} \\cap B^{c} = (A \\cup B)^{c}$.

$$A \\cup B = \\{2,3,4,6,8,9,10,12\\}$$

so

$$(A \\cup B)^{c} = \\{1,5,7,11\\}$$

has $4$ elements, not $5$, so the statement is False.""",
        ),
        (
            "In a survey of $100$ students, $55$ study mathematics, $40$ study physics, $35$ study chemistry, $20$ study both mathematics and physics, $15$ study both mathematics and chemistry, $10$ study both physics and chemistry, and $5$ study all three subjects. Exactly $90$ students study at least one of the three subjects.",
            True,
            """Inclusion-exclusion for three sets gives

$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$

$$= 55 + 40 + 35 - 20 - 15 - 10 + 5 = 90$$

so the statement is True.""",
        ),
        (
            "For propositions $p$, $q$, and $r$, the formula $(p \\wedge q) \\rightarrow r$ is logically equivalent to $p \\rightarrow (q \\rightarrow r)$.",
            True,
            """Exportation rewrites a conjunction in the hypothesis as a nested implication.

A truth-table check (or the chain $p \\wedge q \\Rightarrow r$ iff $p \\Rightarrow (q \\Rightarrow r)$) confirms the two formulas agree on every assignment, so the statement is True.""",
        ),
    ],
)

# ---- Task 2 (110) ----
add(
    "3/5",
    "Five separate mini-problems: a nested set-operation roster, a power-set cardinality trap, a complement of an intersection, a two-set Venn count with a double-count trap, and a claimed contradiction.",
    [
        (
            "Let $A = \\{a,b,c,d\\}$, $B = \\{b,d,e\\}$, and $C = \\{a,e,f\\}$. Then $(A \\cap B) \\cup (B \\cap C) = \\{b,d,e\\}$.",
            True,
            """First form the two intersections:

$$A \\cap B = \\{b,d\\}$$

$$B \\cap C = \\{e\\}$$

Their union is $\\{b,d,e\\}$, matching the claim, so the statement is True.""",
        ),
        (
            "If $S$ has exactly $5$ elements, then the power set $\\mathcal{P}(S)$ has exactly $31$ elements.",
            False,
            """A set with $n$ elements has $2^{n}$ subsets:

$$|\\mathcal{P}(S)| = 2^{5} = 32$$

The claim $31$ drops the empty set (or one nonempty subset), so the statement is False.""",
        ),
        (
            "Let $U = \\{1,2,3,4,5,6,7,8\\}$, $A = \\{1,2,3,4\\}$, and $B = \\{3,4,5,6\\}$. Then $(A \\cap B)^{c} = \\{1,2,5,6,7,8\\}$.",
            True,
            """First

$$A \\cap B = \\{3,4\\}$$

Complement relative to $U$:

$$(A \\cap B)^{c} = U \\setminus \\{3,4\\} = \\{1,2,5,6,7,8\\}$$

so the statement is True.""",
        ),
        (
            "A club has $60$ members. Exactly $28$ play tennis, exactly $35$ play chess, and exactly $12$ play both. Then exactly $15$ members play neither tennis nor chess.",
            False,
            """Union size by inclusion-exclusion:

$$|T \\cup C| = 28 + 35 - 12 = 51$$

Members outside both:

$$60 - 51 = 9$$

not $15$, so the statement is False.""",
        ),
        (
            "The propositional formula $(p \\vee \\neg p) \\wedge (q \\wedge \\neg q)$ is a contradiction.",
            True,
            """$p \\vee \\neg p$ is always true, while $q \\wedge \\neg q$ is always false. A conjunction with a false conjunct is always false, so the formula is a contradiction and the statement is True.""",
        ),
    ],
)

# ---- Task 3 (111) ----
add(
    "5/5",
    "Five harder checks: a chained set difference, counting proper subsets of a four-element set, complement arithmetic in a ten-element universe, a three-circle only-one region, and a quantifier swap countermodel.",
    [
        (
            "Let $A = \\{1,2,3,4,5,6,7\\}$, $B = \\{2,3,5,7,11\\}$, and $C = \\{1,5,7,9\\}$. Then $|(A \\setminus B) \\setminus C| = 2$.",
            True,
            """Remove $B$ from $A$:

$$A \\setminus B = \\{1,4,6\\}$$

Remove $C$:

$$(A \\setminus B) \\setminus C = \\{4,6\\}$$

has $2$ elements, so the statement is True.""",
        ),
        (
            "Let $S = \\{w,x,y,z\\}$. The number of proper subsets of $S$ is $15$.",
            True,
            """All subsets number $2^{4} = 16$. Proper subsets exclude $S$ itself, leaving $15$, so the statement is True.""",
        ),
        (
            "Let $U = \\{0,1,2,\\ldots,9\\}$, $A = \\{0,2,4,6,8\\}$, and $B = \\{0,1,2,3,4\\}$. Then $|A^{c} \\cup B^{c}| = 6$.",
            False,
            """De Morgan: $A^{c} \\cup B^{c} = (A \\cap B)^{c}$.

$$A \\cap B = \\{0,2,4\\}$$

$$(A \\cap B)^{c} = U \\setminus \\{0,2,4\\}$$

has $10 - 3 = 7$ elements, not $6$, so the statement is False.""",
        ),
        (
            "Among $80$ employees, $45$ speak German, $38$ speak French, $30$ speak Spanish, $20$ speak German and French, $15$ speak German and Spanish, $12$ speak French and Spanish, and $8$ speak all three. Exactly $18$ employees speak only German (German but neither French nor Spanish).",
            True,
            """Only German is

$$|G| - |G \\cap F| - |G \\cap S| + |G \\cap F \\cap S|$$

because the triple intersection was subtracted twice among the pairwise terms:

$$45 - 20 - 15 + 8 = 18$$

so the statement is True.""",
        ),
        (
            "Over the domain $\\{1,2,3\\}$, the statement $\\forall x \\, \\exists y \\, (x + y = 4)$ is true, and therefore $\\exists y \\, \\forall x \\, (x + y = 4)$ is also true on the same domain.",
            False,
            """For each fixed $x \\in \\{1,2,3\\}$ one can choose $y = 4 - x \\in \\{1,2,3\\}$, so the $\\forall x \\, \\exists y$ claim holds.

The swapped order $\\exists y \\, \\forall x \\, (x + y = 4)$ would need one $y$ working for every $x$, which forces $1+y = 2+y = 3+y = 4$, impossible. Quantifier order matters, so the statement is False.""",
        ),
    ],
)

# ---- Task 4 (112) ----
add(
    "4/5",
    "Five independent logic/set claims: a union-minus-intersection identity check, subsets of a power set, a relative complement size, a survey overlap trap, and a biconditional rewrite.",
    [
        (
            "For finite sets $A$ and $B$, the identity $|A \\cup B| + |A \\cap B| = |A| + |B|$ always holds. In particular, if $|A| = 17$, $|B| = 11$, and $|A \\cap B| = 4$, then $|A \\cup B| = 24$.",
            True,
            """Rearrangement of inclusion-exclusion gives

$$|A \\cup B| = |A| + |B| - |A \\cap B| = 17 + 11 - 4 = 24$$

and equivalently $|A \\cup B| + |A \\cap B| = |A| + |B|$. Both parts agree, so the statement is True.""",
        ),
        (
            "Let $A = \\{1,2\\}$. Then $\\mathcal{P}(A)$ has exactly three subsets that are nonempty, and $\\{\\{1\\},\\{2\\}\\} \\subseteq \\mathcal{P}(A)$.",
            True,
            """$\\mathcal{P}(A) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1,2\\}\\}$ has three nonempty members. Also $\\{1\\},\\{2\\} \\in \\mathcal{P}(A)$, so $\\{\\{1\\},\\{2\\}\\} \\subseteq \\mathcal{P}(A)$. Both claims hold, so the statement is True.""",
        ),
        (
            "Let $U = \\{a,b,c,d,e,f\\}$, $X = \\{a,b,c,d\\}$, and $Y = \\{c,d,e\\}$. Then $|X^{c} \\setminus Y| = 2$.",
            False,
            """$X^{c} = \\{e,f\\}$. Removing elements of $Y$:

$$X^{c} \\setminus Y = \\{f\\}$$

has size $1$, not $2$, so the statement is False.""",
        ),
        (
            "In a town of $200$ adults, $120$ own a car, $95$ own a bicycle, and $40$ own both. Exactly $25$ adults own neither a car nor a bicycle.",
            True,
            """$$|C \\cup B| = 120 + 95 - 40 = 175$$

$$200 - 175 = 25$$

own neither, so the statement is True.""",
        ),
        (
            "The biconditional $p \\leftrightarrow q$ is logically equivalent to $(p \\rightarrow q) \\wedge (q \\rightarrow p)$, and also equivalent to $(p \\wedge q) \\vee (\\neg p \\wedge \\neg q)$.",
            True,
            """By definition $p \\leftrightarrow q$ means each implies the other. Expanding the truth table, $p \\leftrightarrow q$ holds exactly on the two rows where both are true or both are false, which is $(p \\wedge q) \\vee (\\neg p \\wedge \\neg q)$. Both equivalences hold, so the statement is True.""",
        ),
    ],
)

# ---- Task 5 (113) ----
add(
    "4/5",
    "Five varied stems: a double complement with union, counting $k$-subsets, an open-universe complement trap, inclusion-exclusion with a missing triple, and a tautology claim.",
    [
        (
            "Let $A = \\{1,3,5,7\\}$ and $B = \\{1,2,3,4\\}$ inside $U = \\{1,2,3,4,5,6,7,8\\}$. Then $(A \\cup B)^{c} = \\{6,8\\}$ and $|(A \\cup B)^{cc}| = 6$.",
            True,
            """$$A \\cup B = \\{1,2,3,4,5,7\\}$$

$$(A \\cup B)^{c} = \\{6,8\\}$$

Double complement restores $A \\cup B$, which has $6$ elements, so the statement is True.""",
        ),
        (
            "The number of $3$-element subsets of a $7$-element set is $35$, and therefore the number of subsets with at most $2$ elements is also $35$.",
            False,
            """$\\binom{7}{3} = 35$ is correct, but subsets of size at most $2$ number

$$\\binom{7}{0} + \\binom{7}{1} + \\binom{7}{2} = 1 + 7 + 21 = 29$$

not $35$, so the statement is False.""",
        ),
        (
            "Let $U = \\mathbb{N} = \\{1,2,3,\\ldots\\}$ and $A = \\{n \\in \\mathbb{N} : n \\text{ is even}\\}$. Then $A^{c}$ is exactly the set of odd natural numbers, and $A \\cup A^{c} = U$.",
            True,
            """Every natural number is either even or odd, never both. So $A^{c}$ is the odds and $A \\cup A^{c} = U$, and the statement is True.""",
        ),
        (
            "A festival reports $70$ guests like tea, $55$ like coffee, $40$ like both, and $10$ like neither. If $100$ guests were surveyed, these four figures are mutually consistent.",
            False,
            """From tea/coffee data,

$$|T \\cup C| = 70 + 55 - 40 = 85$$

Adding the $10$ who like neither gives $95$ guests, not $100$. The figures are inconsistent, so the statement is False.""",
        ),
        (
            "The formula $((p \\rightarrow q) \\wedge p) \\rightarrow q$ is a tautology (modus ponens in propositional form).",
            True,
            """Whenever the hypothesis $(p \\rightarrow q) \\wedge p$ is true, both $p$ and $p \\rightarrow q$ hold, forcing $q$. The implication to $q$ is therefore true on every row, so the statement is True.""",
        ),
    ],
)

# ---- Task 6 (114) ----
add(
    "3/5",
    "Five independent checks: set-difference cardinality, power-set membership vs subset, complement of a union, a two-attribute census, and a false equivalence between $\\vee$ and $\\rightarrow$.",
    [
        (
            "Let $A = \\{0,1,2,3,4,5\\}$ and $B = \\{4,5,6,7\\}$. Then $|A \\setminus B| = 4$ and $|B \\setminus A| = 2$.",
            True,
            """$$A \\setminus B = \\{0,1,2,3\\}$$

has $4$ elements, and

$$B \\setminus A = \\{6,7\\}$$

has $2$ elements, so the statement is True.""",
        ),
        (
            "Let $S = \\{1,2,3\\}$. Then $\\{1,2\\} \\in \\mathcal{P}(S)$ and $\\{\\{1\\},\\{2\\}\\} \\in \\mathcal{P}(S)$.",
            False,
            """$\\{1,2\\} \\subseteq S$, so $\\{1,2\\} \\in \\mathcal{P}(S)$ is correct. But $\\{\\{1\\},\\{2\\}\\}$ is a set of subsets, not a subset of $S$; its elements $\\{1\\}$ and $\\{2\\}$ are not elements of $S$. Hence $\\{\\{1\\},\\{2\\}\\} \\notin \\mathcal{P}(S)$, and the statement is False.""",
        ),
        (
            "Let $U = \\{1,2,3,4,5\\}$, $A = \\{1,2\\}$, $B = \\{2,3\\}$. Then $(A \\cup B)^{c} = A^{c} \\cap B^{c} = \\{4,5\\}$.",
            True,
            """$A \\cup B = \\{1,2,3\\}$, so the complement is $\\{4,5\\}$. De Morgan gives the same set as $A^{c} \\cap B^{c}$, so the statement is True.""",
        ),
        (
            "Of $50$ applicants, $30$ know Python, $25$ know R, and $10$ know both. Exactly $5$ applicants know neither language.",
            True,
            """$$|P \\cup R| = 30 + 25 - 10 = 45$$

$$50 - 45 = 5$$

know neither, so the statement is True.""",
        ),
        (
            "The formulas $p \\vee q$ and $p \\rightarrow q$ are logically equivalent.",
            False,
            """On the assignment $p = \\mathrm{F}$, $q = \\mathrm{F}$, one has $p \\vee q = \\mathrm{F}$ while $p \\rightarrow q = \\mathrm{T}$. The formulas disagree, so the statement is False.""",
        ),
    ],
)

# ---- Task 7 (115) ----
add(
    "5/5",
    "Five demanding stems: a three-layer set expression, counting subsets closed under a parity rule, complement sizes with overlap, a full three-set only-two region, and a deduction with a hidden countermodel.",
    [
        (
            "Let $A = \\{1,2,3,4,5,6,7,8\\}$, $B = \\{2,4,6,8,10\\}$, and $C = \\{1,2,3,10\\}$. Then $|A \\cap (B \\cup C)| = 5$.",
            True,
            """$$B \\cup C = \\{1,2,3,4,6,8,10\\}$$

$$A \\cap (B \\cup C) = \\{1,2,3,4,6,8\\}$$

has $6$ elements. Wait — recheck: $1,2,3,4,6,8$ is six. The claim says $5$.

Actually recount: elements of $A$ that lie in $B$ or $C$: from $A$, members in $B$ are $2,4,6,8$; members in $C$ are $1,2,3$. Union $\\{1,2,3,4,6,8\\}$ has $6$, not $5$, so the statement is False.""",
        ),
        (
            "Let $S = \\{1,2,3,4,5\\}$. The number of subsets of $S$ whose elements sum to an even number is $16$.",
            True,
            """For a nonempty finite set of integers, exactly half of all subsets have even element-sum when at least one odd element is present. Here $2^{5} = 32$ subsets split evenly into $16$ even-sum and $16$ odd-sum subsets (including $\\emptyset$ on the even side), so the statement is True.""",
        ),
        (
            "Let $U$ have $40$ elements, $|A| = 18$, $|B| = 22$, and $|A \\cap B| = 7$. Then $|A^{c} \\cap B^{c}| = 7$.",
            True,
            """$$|A \\cup B| = 18 + 22 - 7 = 33$$

$$|A^{c} \\cap B^{c}| = |U| - |A \\cup B| = 40 - 33 = 7$$

so the statement is True.""",
        ),
        (
            "Using the employee data: $45$ German, $38$ French, $30$ Spanish, pairwise overlaps $20$, $15$, $12$, and triple overlap $8$, the number who speak exactly two of the three languages is $23$.",
            True,
            """Exactly-two counts:

$$(20-8) + (15-8) + (12-8) = 12 + 7 + 4 = 23$$

so the statement is True.""",
        ),
        (
            "From the premises (i) $p \\rightarrow q$ and (ii) $\\neg p$, one may validly conclude $\\neg q$.",
            False,
            """Denying the antecedent is invalid. Countermodel: $p = \\mathrm{F}$, $q = \\mathrm{T}$ makes both premises true while $\\neg q$ is false. The inference is not valid, so the statement is False.""",
        ),
    ],
)

# Fix task 7 item A - I wrote True in the tuple but explanation says False. Need to fix.
TASKS[-1]["items"][0] = (
    "Let $A = \\{1,2,3,4,5,6,7,8\\}$, $B = \\{2,4,6,8,10\\}$, and $C = \\{1,2,3,10\\}$. Then $|A \\cap (B \\cup C)| = 5$.",
    False,
    """First form the union:

$$B \\cup C = \\{1,2,3,4,6,8,10\\}$$

Intersect with $A$:

$$A \\cap (B \\cup C) = \\{1,2,3,4,6,8\\}$$

has $6$ elements, not $5$, so the statement is False.""",
)

# ---- Task 8 (116) ----
add(
    "4/5",
    "Five mini-exams: symmetric-difference size, number of subsets containing two fixed elements, complement identity, inclusion-exclusion off-by-one, and a truth-table contingency claim.",
    [
        (
            "Let $A = \\{1,2,3,4\\}$ and $B = \\{3,4,5,6,7\\}$. Then $|A \\triangle B| = |A| + |B| - 2|A \\cap B| = 5$.",
            True,
            """$$|A \\cap B| = 2$$

$$|A \\triangle B| = 4 + 5 - 2 \\cdot 2 = 5$$

Roster check: $\\{1,2,5,6,7\\}$ has size $5$, so the statement is True.""",
        ),
        (
            "Let $X = \\{a,b,c,d,e\\}$. The number of subsets of $X$ that contain both $a$ and $b$ is $8$.",
            True,
            """Fix $a,b \\in S$ and choose freely from the remaining $3$ elements:

$$2^{3} = 8$$

so the statement is True.""",
        ),
        (
            "For any subsets $A,B$ of a universe $U$, the equality $(A \\setminus B)^{c} = A^{c} \\cup B$ holds.",
            True,
            """$A \\setminus B = A \\cap B^{c}$. Complement and De Morgan give

$$(A \\cap B^{c})^{c} = A^{c} \\cup (B^{c})^{c} = A^{c} \\cup B$$

so the statement is True.""",
        ),
        (
            "If $|A| = 25$, $|B| = 30$, $|C| = 20$, $|A \\cap B| = 10$, $|A \\cap C| = 8$, $|B \\cap C| = 6$, and $|A \\cap B \\cap C| = 4$, then $|A \\cup B \\cup C| = 55$.",
            False,
            """$$|A \\cup B \\cup C| = 25 + 30 + 20 - 10 - 8 - 6 + 4 = 55$$

Wait, that equals $55$. Recheck arithmetic: $75 - 24 + 4 = 55$. The claim is correct — change to a false trap.

Actually $25+30+20=75$, $10+8+6=24$, $75-24+4=55$. So truth is True. Adjust claim.""",
        ),
        (
            "The formula $(p \\rightarrow q) \\vee (q \\rightarrow p)$ is a tautology.",
            True,
            """If $p$ is false then $p \\rightarrow q$ is true; if $p$ is true then either $q$ is true (so $p \\rightarrow q$ holds) or $q$ is false (so $q \\rightarrow p$ holds). In every case the disjunction is true, so the statement is True.""",
        ),
    ],
)

# Fix task 8 item D to be a genuine false claim
TASKS[-1]["items"][3] = (
    "If $|A| = 25$, $|B| = 30$, $|C| = 20$, $|A \\cap B| = 10$, $|A \\cap C| = 8$, $|B \\cap C| = 6$, and $|A \\cap B \\cap C| = 4$, then $|A \\cup B \\cup C| = 51$.",
    False,
    """Inclusion-exclusion yields

$$25 + 30 + 20 - 10 - 8 - 6 + 4 = 55$$

The claimed $51$ undercounts by $4$ (as if the triple term were dropped), so the statement is False.""",
)

# ---- Task 9 (117) ----
add(
    "3/5",
    "Five separate claims: nested intersections, power-set chain, complement cardinality, a simple Venn remainder, and negation of an implication.",
    [
        (
            "Let $A = \\{2,4,6,8,10\\}$, $B = \\{1,2,3,4,5\\}$, and $C = \\{4,5,6,7\\}$. Then $A \\cap B \\cap C = \\{4\\}$.",
            True,
            """Elements common to all three: only $4$ lies in $A$, $B$, and $C$ simultaneously, so the statement is True.""",
        ),
        (
            "If $|S| = 3$, then $|\\mathcal{P}(\\mathcal{P}(S))| = 256$.",
            False,
            """$|\\mathcal{P}(S)| = 2^{3} = 8$, so

$$|\\mathcal{P}(\\mathcal{P}(S))| = 2^{8} = 256$$

is actually correct. Need a false variant.

Use claim 128 instead.""",
        ),
        (
            "Let $U = \\{1,\\ldots,20\\}$ and $A = \\{1,2,\\ldots,12\\}$. Then $|A^{c}| = 8$.",
            True,
            """$A^{c} = \\{13,\\ldots,20\\}$ has $8$ elements, so the statement is True.""",
        ),
        (
            "In a class of $40$, $22$ passed the midterm, $18$ passed the final, and $10$ passed both. Exactly $10$ students failed both exams.",
            True,
            """$$|M \\cup F| = 22 + 18 - 10 = 30$$

$$40 - 30 = 10$$

failed both, so the statement is True.""",
        ),
        (
            "The negation of $p \\rightarrow q$ is logically equivalent to $p \\wedge \\neg q$.",
            True,
            """$p \\rightarrow q$ fails only when $p$ is true and $q$ is false. That is exactly $p \\wedge \\neg q$, so the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][1] = (
    "If $|S| = 3$, then $|\\mathcal{P}(\\mathcal{P}(S))| = 128$.",
    False,
    """$|\\mathcal{P}(S)| = 8$, hence

$$|\\mathcal{P}(\\mathcal{P}(S))| = 2^{8} = 256$$

not $128$, so the statement is False.""",
)

# ---- Task 10 (118) ----
add(
    "5/5",
    "Five hard independent problems: a distributive-law roster, subsets with forbidden elements, De Morgan size in a coded universe, a three-set neither count, and a $\\forall$/$\\exists$ negation.",
    [
        (
            "Let $A = \\{1,2,3\\}$, $B = \\{2,3,4\\}$, and $C = \\{3,4,5\\}$. Then $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C) = \\{2,3\\}$.",
            True,
            """$B \\cup C = \\{2,3,4,5\\}$, so $A \\cap (B \\cup C) = \\{2,3\\}$.

Also $A \\cap B = \\{2,3\\}$ and $A \\cap C = \\{3\\}$, whose union is $\\{2,3\\}$. Distributivity holds with that roster, so the statement is True.""",
        ),
        (
            "Let $X = \\{1,2,3,4,5,6\\}$. The number of subsets of $X$ that contain neither $1$ nor $2$ is $16$.",
            True,
            """Such subsets are exactly the subsets of $\\{3,4,5,6\\}$:

$$2^{4} = 16$$

so the statement is True.""",
        ),
        (
            "Let $U = \\{a,b,c,d,e,f,g\\}$, $A = \\{a,b,c\\}$, $B = \\{c,d,e\\}$. Then $|(A \\cup B)^{c}| = |(A^{c} \\cap B^{c})| = 3$.",
            False,
            """$A \\cup B = \\{a,b,c,d,e\\}$, so the complement is $\\{f,g\\}$ with size $2$, not $3$. The statement is False.""",
        ),
        (
            "Among $120$ customers, $70$ bought product $X$, $60$ bought product $Y$, $50$ bought product $Z$, $30$ bought $X$ and $Y$, $25$ bought $X$ and $Z$, $20$ bought $Y$ and $Z$, and $10$ bought all three. Exactly $15$ customers bought none of the three products.",
            True,
            """$$|X \\cup Y \\cup Z| = 70 + 60 + 50 - 30 - 25 - 20 + 10 = 115$$

$$120 - 115 = 5$$

bought none — wait, that is $5$, not $15$. Correct the verdict.""",
        ),
        (
            "Over integers, the negation of $\\forall n \\, (n^{2} \\ge 0)$ is $\\exists n \\, (n^{2} < 0)$.",
            True,
            """Negating $\\forall n \\, P(n)$ yields $\\exists n \\, \\neg P(n)$. Here $\\neg(n^{2} \\ge 0)$ is $n^{2} < 0$, so the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][3] = (
    "Among $120$ customers, $70$ bought product $X$, $60$ bought product $Y$, $50$ bought product $Z$, $30$ bought $X$ and $Y$, $25$ bought $X$ and $Z$, $20$ bought $Y$ and $Z$, and $10$ bought all three. Exactly $15$ customers bought none of the three products.",
    False,
    """$$|X \\cup Y \\cup Z| = 70 + 60 + 50 - 30 - 25 - 20 + 10 = 115$$

$$120 - 115 = 5$$

customers bought none, not $15$, so the statement is False.""",
)

# ---- Task 11 (119) ----
add(
    "4/5",
    "Five checks: set algebra simplification, counting injective listings as subsets, relative complements, a pairwise-only survey, and modus tollens validity.",
    [
        (
            "Let $A = \\{1,2,3,4,5\\}$ and $B = \\{3,4,5,6,7\\}$. Then $(A \\cup B) \\setminus (A \\cap B) = \\{1,2,6,7\\}$.",
            True,
            """$A \\cup B = \\{1,2,3,4,5,6,7\\}$ and $A \\cap B = \\{3,4,5\\}$, so the difference is $\\{1,2,6,7\\}$, and the statement is True.""",
        ),
        (
            "A $4$-element set has exactly $24$ ordered listings of all its elements without repetition, and exactly $15$ nonempty unordered subsets.",
            True,
            """Permutations: $4! = 24$. Nonempty subsets: $2^{4} - 1 = 15$. Both figures match, so the statement is True.""",
        ),
        (
            "Let $U = \\{1,2,3,4,5,6\\}$, $A = \\{1,2,3\\}$, $B = \\{2,3,4\\}$. Then $A^{c} \\setminus B^{c} = \\{4\\}$.",
            True,
            """$A^{c} = \\{4,5,6\\}$ and $B^{c} = \\{1,5,6\\}$, so

$$A^{c} \\setminus B^{c} = \\{4\\}$$

and the statement is True.""",
        ),
        (
            "In a sample of $90$ people, $50$ like apples, $40$ like bananas, and nobody likes both. Then everybody in the sample likes at least one of the two fruits.",
            False,
            """Disjoint likes give $|A \\cup B| = 50 + 40 = 90$, so in this arithmetic everyone likes at least one. That would be True — flip the numbers.

Use $48$ and $40$ instead.""",
        ),
        (
            "From premises $p \\rightarrow q$ and $\\neg q$, the conclusion $\\neg p$ follows validly (modus tollens).",
            True,
            """Modus tollens is the valid pattern: if $p$ implied $q$ and $q$ fails, then $p$ fails. Equivalently, use the contrapositive $\\neg q \\rightarrow \\neg p$. The statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][3] = (
    "In a sample of $90$ people, $48$ like apples, $40$ like bananas, and nobody likes both. Then everybody in the sample likes at least one of the two fruits.",
    False,
    """With empty intersection,

$$|A \\cup B| = 48 + 40 = 88$$

so $2$ people like neither fruit. The universal claim fails, so the statement is False.""",
)

# ---- Task 12 (120) ----
add(
    "4/5",
    "Five independent stems: a Cartesian-product style roster via pairs-as-sets caution replaced by plain ops, subset lattice count, complement of difference, inclusion-exclusion with integers, and a contingency vs tautology call.",
    [
        (
            "Let $A = \\{0,1,2\\}$ and $B = \\{1,2,3\\}$. Then $|(A \\times B)|$ is not asked; instead, $|A \\cup B| = 4$ and $|A \\cap B| = 2$.",
            True,
            """$A \\cup B = \\{0,1,2,3\\}$ has size $4$ and $A \\cap B = \\{1,2\\}$ has size $2$, so the statement is True.""",
        ),
        (
            "The number of subsets of an $n$-element set is $2^{n}$. For $n = 6$ this is $64$, which is strictly larger than the number of proper subsets.",
            True,
            """Proper subsets number $2^{n} - 1 = 63 < 64$, so the statement is True.""",
        ),
        (
            "Let $U = \\{1,2,3,4,5\\}$, $A = \\{1,2,3,4\\}$, $B = \\{3,4\\}$. Then $(A \\setminus B)^{c} = \\{3,4,5\\}$.",
            True,
            """$A \\setminus B = \\{1,2\\}$, so the complement in $U$ is $\\{3,4,5\\}$, and the statement is True.""",
        ),
        (
            "A school has $150$ students. Exactly $80$ take biology, $70$ take chemistry, $60$ take physics, $30$ take biology and chemistry, $25$ take biology and physics, $20$ take chemistry and physics, and $10$ take all three. Then $115$ students take at least one of the three sciences.",
            False,
            """$$80 + 70 + 60 - 30 - 25 - 20 + 10 = 145$$

not $115$, so the statement is False.""",
        ),
        (
            "The formula $(p \\wedge q) \\rightarrow (p \\vee q)$ is a tautology.",
            True,
            """Whenever $p \\wedge q$ is true, both $p$ and $q$ are true, so $p \\vee q$ is true. The implication never fails, so the statement is True.""",
        ),
    ],
)

# ---- Task 13 (121) ----
add(
    "5/5",
    "Five tough claims: a multi-step set identity numerical check, power set of a two-element set listed wrongly, coded complement, overlapping triple census, and an invalid existential generalization.",
    [
        (
            "Let $A = \\{1,2,3,4,5,6\\}$, $B = \\{4,5,6,7,8\\}$, $C = \\{1,6,7,9\\}$. Then $|(A \\cap B) \\setminus C| = 2$.",
            True,
            """$A \\cap B = \\{4,5,6\\}$. Removing $C$ drops $6$:

$$(A \\cap B) \\setminus C = \\{4,5\\}$$

has size $2$, so the statement is True.""",
        ),
        (
            "If $S = \\{\\emptyset, \\{1\\}\\}$, then $\\mathcal{P}(S) = \\{\\emptyset, \\{\\emptyset\\}, \\{\\{1\\}\\}, \\{\\emptyset,\\{1\\}\\}\\}$ and therefore $|\\mathcal{P}(S)| = 4$.",
            True,
            """$S$ itself has two elements, so $|\\mathcal{P}(S)| = 4$, and the displayed roster is exactly those four subsets, so the statement is True.""",
        ),
        (
            "Let $U = \\{1,2,\\ldots,15\\}$, $E$ the evens in $U$, and $M$ the multiples of $5$ in $U$. Then $|E^{c} \\cup M| = 10$.",
            False,
            """Odds in $U$: $1,3,5,7,9,11,13,15$ ($8$ elements). Multiples of $5$: $5,10,15$. Union:

$$\\{1,3,5,7,9,10,11,13,15\\}$$

has $9$ elements, not $10$, so the statement is False.""",
        ),
        (
            "With $|A|=40$, $|B|=35$, $|C|=30$, $|A\\cap B|=12$, $|A\\cap C|=10$, $|B\\cap C|=8$, $|A\\cap B\\cap C|=5$, the number of elements in exactly one of the three sets is $58$.",
            False,
            """Only-$A$: $40-12-10+5=23$. Only-$B$: $35-12-8+5=20$. Only-$C$: $30-10-8+5=17$. Sum $60$, not $58$, so the statement is False.""",
        ),
        (
            "From the true sentence $P(3)$ about the domain $\\{1,2,3,4\\}$, one may validly conclude $\\forall x \\, P(x)$.",
            False,
            """A single instance does not prove a universal claim. A countermodel is any property true at $3$ but false at $1$ (for example $x = 3$). The inference is invalid, so the statement is False.""",
        ),
    ],
)

# ---- Task 14 (122) ----
add(
    "3/5",
    "Five mid-hardness stems: union cardinality, subset vs element confusion, complement double negation, a neither-count, and $\\leftrightarrow$ versus $\\rightarrow$.",
    [
        (
            "Let $A = \\{a,b,c\\}$ and $B = \\{c,d\\}$. Then $|A \\cup B| = 4$.",
            True,
            """$A \\cup B = \\{a,b,c,d\\}$ has four elements, so the statement is True.""",
        ),
        (
            "Let $A = \\{1,2\\}$. Then $1 \\subseteq A$ is a true statement of set theory.",
            False,
            """The numeral $1$ is an element, not a set of the form needed for $\\subseteq$ in this context; the correct membership claim is $1 \\in A$. Writing $1 \\subseteq A$ is not the intended true claim here, so the statement is False.""",
        ),
        (
            "For every set $A$ in a universe $U$, $(A^{c})^{c} = A$.",
            True,
            """Complementing twice returns the original set by definition of complement relative to $U$, so the statement is True.""",
        ),
        (
            "Of $75$ readers, $40$ read newspaper $X$, $35$ read newspaper $Y$, and $20$ read both. Exactly $20$ readers read neither newspaper.",
            True,
            """$$|X \\cup Y| = 40 + 35 - 20 = 55$$

$$75 - 55 = 20$$

read neither, so the statement is True.""",
        ),
        (
            "Whenever $p \\rightarrow q$ is true, the biconditional $p \\leftrightarrow q$ must also be true.",
            False,
            """Counterexample: $p = \\mathrm{F}$, $q = \\mathrm{T}$ makes $p \\rightarrow q$ true while $p \\leftrightarrow q$ is false. The statement is False.""",
        ),
    ],
)

# ---- Task 15 (123) ----
add(
    "4/5",
    "Five exam-style checks: a difference-of-unions count, even-sized subsets, De Morgan numerical test, a full inclusion-exclusion, and a quantified arithmetic claim on a tiny domain.",
    [
        (
            "Let $A = \\{1,2,3,4\\}$, $B = \\{3,4,5\\}$, $C = \\{5,6,7\\}$. Then $|(A \\cup B) \\setminus C| = 4$.",
            True,
            """$A \\cup B = \\{1,2,3,4,5\\}$. Removing $C$ drops $5$:

$$(A \\cup B) \\setminus C = \\{1,2,3,4\\}$$

has size $4$, so the statement is True.""",
        ),
        (
            "A set with $6$ elements has exactly $32$ subsets of even cardinality.",
            True,
            """Half of $2^{6} = 64$ subsets have even size:

$$2^{5} = 32$$

so the statement is True.""",
        ),
        (
            "Let $U = \\{1,\\ldots,10\\}$, $A = \\{1,2,3,4,5\\}$, $B = \\{4,5,6,7\\}$. Then $|A^{c} \\cap B^{c}| = 3$.",
            True,
            """$A \\cup B = \\{1,2,3,4,5,6,7\\}$, so $(A \\cup B)^{c} = \\{8,9,10\\}$ has size $3$, matching $A^{c} \\cap B^{c}$, and the statement is True.""",
        ),
        (
            "With $|A|=50$, $|B|=40$, $|A\\cap B|=15$, one concludes $|A\\cup B|=75$.",
            False,
            """$$|A \\cup B| = 50 + 40 - 15 = 75$$

is actually correct — flip claim to $85$.

""",
        ),
        (
            "On the domain $\\{0,1,2\\}$, the sentence $\\exists x \\, \\forall y \\, (x \\le y)$ is true.",
            True,
            """Take $x = 0$. Then $0 \\le y$ holds for every $y \\in \\{0,1,2\\}$. The existential claim succeeds, so the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][3] = (
    "With $|A|=50$, $|B|=40$, $|A\\cap B|=15$, one concludes $|A\\cup B|=85$.",
    False,
    """Inclusion-exclusion gives

$$|A \\cup B| = 50 + 40 - 15 = 75$$

not $85$ (which would ignore the intersection subtraction), so the statement is False.""",
)

# ---- Task 16 (124) ----
add(
    "5/5",
    "Five advanced stems: chained intersections and unions, subsets avoiding a pair, complement of a symmetric difference, a three-set region sum, and a deduction tableau with a countermodel.",
    [
        (
            "Let $A = \\{1,2,3,4,5,6,7\\}$, $B = \\{1,3,5,7,9\\}$, $C = \\{1,2,3\\}$. Then $|(A \\cap B) \\cup C| = 5$.",
            True,
            """$A \\cap B = \\{1,3,5,7\\}$. Union with $C$ adds $2$:

$$\\{1,2,3,5,7\\}$$

has size $5$, so the statement is True.""",
        ),
        (
            "Let $X = \\{1,2,3,4,5\\}$. The number of nonempty subsets that contain at most one of the elements $1$ or $2$ is $24$.",
            False,
            """Subsets of $\\{3,4,5\\}$ freely ($8$ of them), plus those with $1$ but not $2$ ($8$), plus those with $2$ but not $1$ ($8$), total $24$ including empty. Nonempty: $24 - 1 = 23$, not $24$, so the statement is False.""",
        ),
        (
            "Let $U = \\{1,2,3,4,5,6\\}$, $A = \\{1,2,3\\}$, $B = \\{3,4,5\\}$. Then $|(A \\triangle B)^{c}| = 2$.",
            True,
            """$A \\triangle B = \\{1,2,4,5\\}$, so the complement is $\\{3,6\\}$ with size $2$, and the statement is True.""",
        ),
        (
            "Using $|A|=32$, $|B|=28$, $|C|=25$, pairwise intersections $14$, $12$, $10$, and triple intersection $6$, one finds $|A\\cup B\\cup C|=55$.",
            True,
            """$$32 + 28 + 25 - 14 - 12 - 10 + 6 = 55$$

so the statement is True.""",
        ),
        (
            "From premises (i) $p \\vee q$ and (ii) $\\neg p \\vee r$, the conclusion $q \\vee r$ follows validly in classical propositional logic.",
            True,
            """This is the resolution rule (or proof by cases on $p$). If $p$ holds then premise (ii) forces $r$; if $\\neg p$ holds then premise (i) forces $q$. Either way $q \\vee r$ holds, so the statement is True.""",
        ),
    ],
)

# ---- Task 17 (125) ----
add(
    "4/5",
    "Five varied problems: explicit roster algebra, power-set cardinality ladder, complement percentages, a Venn only-A region, and a false claim that a contingency is a contradiction.",
    [
        (
            "Let $A = \\{2,3,5,7\\}$, $B = \\{1,2,3,4\\}$, $C = \\{3,4,5,6\\}$. Then $A \\cap B \\cap C = \\emptyset$.",
            False,
            """The element $3$ lies in all three sets, so $A \\cap B \\cap C = \\{3\\} \\ne \\emptyset$, and the statement is False.""",
        ),
        (
            "If a set has $n$ elements, then it has $2^{n}-1$ nonempty subsets and $2^{n}-2$ proper nonempty subsets. For $n=4$ those figures are $15$ and $14$.",
            True,
            """$2^{4}-1=15$ nonempty subsets; excluding the full set as well leaves $14$ proper nonempty subsets, so the statement is True.""",
        ),
        (
            "Let $|U|=50$, $|A|=20$, $|B|=18$, $|A\\cap B|=6$. Then $|A^{c}|=30$ and $|A^{c} \\cap B|=12$.",
            True,
            """$|A^{c}|=50-20=30$. Elements of $B$ outside $A$: $|B|-|A\\cap B|=18-6=12$, so the statement is True.""",
        ),
        (
            "With $55$ math, $40$ physics, $20$ both, in a class of $80$, the number who take only mathematics is $35$.",
            True,
            """Only math: $55-20=35$, so the statement is True.""",
        ),
        (
            "The formula $(p \\vee q) \\wedge \\neg p$ is a contradiction.",
            False,
            """On $p=\\mathrm{F}$, $q=\\mathrm{T}$ the formula evaluates to true. It is satisfiable (a contingency), not a contradiction, so the statement is False.""",
        ),
    ],
)

# ---- Task 18 (126) ----
add(
    "3/5",
    "Five independent claims: a basic union trap, subset count of a singleton, De Morgan wording, a two-set neither trap, and implication vs converse.",
    [
        (
            "Let $A = \\{1,2,3\\}$ and $B = \\{3,4,5,6\\}$. Then $|A \\cup B| = 7$.",
            False,
            """$A \\cup B = \\{1,2,3,4,5,6\\}$ has $6$ elements (the shared $3$ is not double-counted), so the statement is False.""",
        ),
        (
            "If $S = \\{a\\}$, then $\\mathcal{P}(S) = \\{\\emptyset, \\{a\\}\\}$ and every element of $\\mathcal{P}(S)$ is a subset of $S$.",
            True,
            """Both displayed sets are subsets of $S$ by construction of the power set, so the statement is True.""",
        ),
        (
            "For sets $A,B \\subseteq U$, $(A \\cap B)^{c} = A^{c} \\cup B^{c}$ always holds.",
            True,
            """This is one of De Morgan's laws for sets, so the statement is True.""",
        ),
        (
            "In a group of $100$, $60$ have attribute $P$, $55$ have attribute $Q$, and $40$ have both. Exactly $25$ have neither attribute.",
            True,
            """$$|P\\cup Q|=60+55-40=75$$

$$100-75=25$$

have neither, so the statement is True.""",
        ),
        (
            "The implication $p \\rightarrow q$ is logically equivalent to its converse $q \\rightarrow p$.",
            False,
            """Counterexample: $p=\\mathrm{T}$, $q=\\mathrm{F}$ makes $p\\rightarrow q$ false and $q\\rightarrow p$ true. They are not equivalent, so the statement is False.""",
        ),
    ],
)

# ---- Task 19 (127) ----
add(
    "5/5",
    "Five hard mini-stems: a distribute-and-count expression, restricted power counting, complement of an intersection of three sets, a precise three-set neither, and a quantifier negation over a product domain.",
    [
        (
            "Let $A = \\{1,2,3,4,5\\}$, $B = \\{2,4,6\\}$, $C = \\{4,5,6,7\\}$. Then $|A \\cup (B \\cap C)| = 6$.",
            True,
            """$B \\cap C = \\{4,6\\}$. Union with $A$:

$$\\{1,2,3,4,5,6\\}$$

has size $6$, so the statement is True.""",
        ),
        (
            "Let $Y = \\{0,1,2,3,4,5,6,7\\}$. The number of $4$-element subsets of $Y$ is $70$.",
            True,
            """$$\\binom{8}{4} = 70$$

so the statement is True.""",
        ),
        (
            "Let $U = \\{1,\\ldots,12\\}$, $A=\\{1,2,3,4,5,6\\}$, $B=\\{4,5,6,7,8,9\\}$, $C=\\{6,7,8,9,10,11\\}$. Then $|(A\\cap B\\cap C)^{c}| = 11$.",
            True,
            """$A\\cap B\\cap C = \\{6\\}$, so the complement has $12-1=11$ elements, and the statement is True.""",
        ),
        (
            "With the customer data $70,60,50$ and overlaps $30,25,20$ and triple $10$ in a population of $120$, the number who bought at least two products is $45$.",
            False,
            """At least two = exactly two + exactly three:

$$(30-10)+(25-10)+(20-10)+10 = 20+15+10+10 = 55$$

not $45$, so the statement is False.""",
        ),
        (
            "Over the domain $D = \\{1,2\\}$, the negation of $\\exists x \\, \\forall y \\, (x \\cdot y = y)$ is $\\forall x \\, \\exists y \\, (x \\cdot y \\ne y)$.",
            True,
            """Negating $\\exists x \\, \\forall y \\, P(x,y)$ yields $\\forall x \\, \\exists y \\, \\neg P(x,y)$. With $P$ as $x\\cdot y = y$, the displayed negation is correct, so the statement is True.""",
        ),
    ],
)

# ---- Task 20 (128) ----
add(
    "4/5",
    "Five closing independent checks: a triple-difference size, a subset-superset chain, complement arithmetic, a survey consistency test, and a valid syllogistic pattern.",
    [
        (
            "Let $A = \\{1,2,3,4,5,6,7,8\\}$, $B = \\{1,2,3\\}$, $C = \\{3,4,5\\}$. Then $|(A \\setminus B) \\setminus C| = 3$.",
            True,
            """$A \\setminus B = \\{4,5,6,7,8\\}$. Removing $C$ drops $4$ and $5$:

$$\\{6,7,8\\}$$

has size $3$, so the statement is True.""",
        ),
        (
            "If $A \\subsetneq B \\subsetneq C$ are finite and $|A|=3$, $|C|=7$, then necessarily $|B|=5$.",
            False,
            """$B$ may be any cardinality strictly between $3$ and $7$, for example $|B|=4$ or $|B|=6$. The value $5$ is possible but not forced, so the statement is False.""",
        ),
        (
            "Let $|U|=100$, $|A|=45$, $|B|=40$, $|A\\cap B|=15$. Then $|A^{c} \\cup B^{c}| = 75$.",
            True,
            """$A^{c}\\cup B^{c}=(A\\cap B)^{c}$, so

$$|U|-|A\\cap B|=100-15=85$$

Wait — $85$, not $75$. Fix.""",
        ),
        (
            "A poll of $200$ voters finds $110$ favour policy $X$, $95$ favour policy $Y$, and $60$ favour both. These figures are consistent with the sample size.",
            True,
            """$$|X\\cup Y|=110+95-60=145 \\le 200$$

so the data fit inside the sample, and the statement is True.""",
        ),
        (
            "From premises (i) all $A$ are $B$ and (ii) all $B$ are $C$, one may validly conclude that all $A$ are $C$.",
            True,
            """Universal affirmative syllogism (Barbara): $A \\subseteq B$ and $B \\subseteq C$ imply $A \\subseteq C$. The deduction is valid, so the statement is True.""",
        ),
    ],
)

TASKS[-1]["items"][2] = (
    "Let $|U|=100$, $|A|=45$, $|B|=40$, $|A\\cap B|=15$. Then $|A^{c} \\cup B^{c}| = 75$.",
    False,
    """By De Morgan, $A^{c}\\cup B^{c}=(A\\cap B)^{c}$, so

$$|A^{c}\\cup B^{c}| = |U| - |A\\cap B| = 100 - 15 = 85$$

not $75$, so the statement is False.""",
)


# Rebalance True/False toward ~50/50 by flipping selected True claims.
# Each entry: (task_index_0based, item_index, new_statement, new_explanation_body)
FLIPS: list[tuple[int, int, str, str]] = [
    (
        0,
        3,
        "In a survey of $100$ students, $55$ study mathematics, $40$ study physics, $35$ study chemistry, $20$ study both mathematics and physics, $15$ study both mathematics and chemistry, $10$ study both physics and chemistry, and $5$ study all three subjects. Exactly $95$ students study at least one of the three subjects.",
        """Inclusion-exclusion for three sets gives

$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$

$$= 55 + 40 + 35 - 20 - 15 - 10 + 5 = 90$$

not $95$, so the statement is False.""",
    ),
    (
        1,
        0,
        "Let $A = \\{a,b,c,d\\}$, $B = \\{b,d,e\\}$, and $C = \\{a,e,f\\}$. Then $(A \\cap B) \\cup (B \\cap C) = \\{b,d\\}$.",
        """First form the two intersections:

$$A \\cap B = \\{b,d\\}$$

$$B \\cap C = \\{e\\}$$

Their union is $\\{b,d,e\\}$, not $\\{b,d\\}$, so the statement is False.""",
    ),
    (
        2,
        1,
        "Let $S = \\{w,x,y,z\\}$. The number of proper subsets of $S$ is $16$.",
        """All subsets number $2^{4} = 16$. Proper subsets exclude $S$ itself, leaving $15$, not $16$, so the statement is False.""",
    ),
    (
        3,
        3,
        "In a town of $200$ adults, $120$ own a car, $95$ own a bicycle, and $40$ own both. Exactly $30$ adults own neither a car nor a bicycle.",
        """$$|C \\cup B| = 120 + 95 - 40 = 175$$

$$200 - 175 = 25$$

own neither, not $30$, so the statement is False.""",
    ),
    (
        4,
        0,
        "Let $A = \\{1,3,5,7\\}$ and $B = \\{1,2,3,4\\}$ inside $U = \\{1,2,3,4,5,6,7,8\\}$. Then $(A \\cup B)^{c} = \\{6,8\\}$ and $|(A \\cup B)^{cc}| = 5$.",
        """$$A \\cup B = \\{1,2,3,4,5,7\\}$$

$$(A \\cup B)^{c} = \\{6,8\\}$$

Double complement restores $A \\cup B$, which has $6$ elements, not $5$, so the statement is False.""",
    ),
    (
        5,
        3,
        "Of $50$ applicants, $30$ know Python, $25$ know R, and $10$ know both. Exactly $10$ applicants know neither language.",
        """$$|P \\cup R| = 30 + 25 - 10 = 45$$

$$50 - 45 = 5$$

know neither, not $10$, so the statement is False.""",
    ),
    (
        6,
        2,
        "Let $U$ have $40$ elements, $|A| = 18$, $|B| = 22$, and $|A \\cap B| = 7$. Then $|A^{c} \\cap B^{c}| = 8$.",
        """$$|A \\cup B| = 18 + 22 - 7 = 33$$

$$|A^{c} \\cap B^{c}| = |U| - |A \\cup B| = 40 - 33 = 7$$

not $8$, so the statement is False.""",
    ),
    (
        7,
        1,
        "Let $X = \\{a,b,c,d,e\\}$. The number of subsets of $X$ that contain both $a$ and $b$ is $16$.",
        """Fix $a,b \\in S$ and choose freely from the remaining $3$ elements:

$$2^{3} = 8$$

not $16$, so the statement is False.""",
    ),
    (
        8,
        3,
        "In a class of $40$, $22$ passed the midterm, $18$ passed the final, and $10$ passed both. Exactly $12$ students failed both exams.",
        """$$|M \\cup F| = 22 + 18 - 10 = 30$$

$$40 - 30 = 10$$

failed both, not $12$, so the statement is False.""",
    ),
    (
        9,
        1,
        "Let $X = \\{1,2,3,4,5,6\\}$. The number of subsets of $X$ that contain neither $1$ nor $2$ is $15$.",
        """Such subsets are exactly the subsets of $\\{3,4,5,6\\}$:

$$2^{4} = 16$$

not $15$, so the statement is False.""",
    ),
    (
        10,
        1,
        "A $4$-element set has exactly $24$ ordered listings of all its elements without repetition, and exactly $16$ nonempty unordered subsets.",
        """Permutations: $4! = 24$ is correct. Nonempty subsets: $2^{4} - 1 = 15$, not $16$, so the statement is False.""",
    ),
    (
        11,
        1,
        "The number of subsets of an $n$-element set is $2^{n}$. For $n = 6$ this is $64$, which equals the number of proper subsets.",
        """Proper subsets number $2^{n} - 1 = 63$, which is strictly smaller than $64$, so the statement is False.""",
    ),
    (
        13,
        3,
        "Of $75$ readers, $40$ read newspaper $X$, $35$ read newspaper $Y$, and $20$ read both. Exactly $25$ readers read neither newspaper.",
        """$$|X \\cup Y| = 40 + 35 - 20 = 55$$

$$75 - 55 = 20$$

read neither, not $25$, so the statement is False.""",
    ),
    (
        14,
        1,
        "A set with $6$ elements has exactly $31$ subsets of even cardinality.",
        """Half of $2^{6} = 64$ subsets have even size:

$$2^{5} = 32$$

not $31$, so the statement is False.""",
    ),
    (
        15,
        3,
        "Using $|A|=32$, $|B|=28$, $|C|=25$, pairwise intersections $14$, $12$, $10$, and triple intersection $6$, one finds $|A\\cup B\\cup C|=61$.",
        """$$32 + 28 + 25 - 14 - 12 - 10 + 6 = 55$$

not $61$, so the statement is False.""",
    ),
    (
        16,
        3,
        "With $55$ math, $40$ physics, $20$ both, in a class of $80$, the number who take only mathematics is $40$.",
        """Only math: $55-20=35$, not $40$, so the statement is False.""",
    ),
    (
        17,
        3,
        "In a group of $100$, $60$ have attribute $P$, $55$ have attribute $Q$, and $40$ have both. Exactly $20$ have neither attribute.",
        """$$|P\\cup Q|=60+55-40=75$$

$$100-75=25$$

have neither, not $20$, so the statement is False.""",
    ),
    (
        18,
        1,
        "Let $Y = \\{0,1,2,3,4,5,6,7\\}$. The number of $4$-element subsets of $Y$ is $56$.",
        """$$\\binom{8}{4} = 70$$

not $56$, so the statement is False.""",
    ),
]


def apply_flips() -> None:
    for ti, ii, stmt, body in FLIPS:
        old_stmt, old_truth, _ = TASKS[ti]["items"][ii]
        assert old_truth is True, (ti, ii)
        TASKS[ti]["items"][ii] = (stmt, False, body)


def build() -> dict:
    apply_flips()
    assert len(TASKS) == 20
    letters = "ABCDE"
    tasks_out = []
    for i, spec in enumerate(TASKS):
        n = 109 + i
        answers = [t for _, t, _ in spec["items"]]
        expl = [T(letters[j], spec["items"][j][1], spec["items"][j][2]) for j in range(5)]
        # sanity: explanation ending
        for e, ans in zip(expl, answers):
            assert e.startswith("**")
            assert ("so the statement is True." in e) or ("so the statement is False." in e)
            if ans:
                assert "→ True" in e.split("\n", 1)[0]
            else:
                assert "→ False" in e.split("\n", 1)[0]
        tasks_out.append(
            {
                "id": f"math-1-{n}",
                "case_id": f"MATH 1.{n}",
                "title": f"Exam-style tasks — {i + 1}",
                "subsection": "1.5",
                "context": "Evaluate each statement. Mark it TRUE or FALSE.",
                "statements": [s for s, _, _ in spec["items"]],
                "answer_key": answers,
                "tactical_explanations": expl,
                "difficulty_level": spec["diff"],
                "sort_order": n,
                "solution_overview": spec["overview"],
                "placeholder": False,
            }
        )
    return {"tasks": tasks_out}


def main() -> None:
    data = build()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    truths = sum(sum(1 for a in t["answer_key"] if a) for t in data["tasks"])
    total = 100
    print(f"Wrote {OUT} with {len(data['tasks'])} tasks, True={truths}, False={total-truths}")


if __name__ == "__main__":
    main()
