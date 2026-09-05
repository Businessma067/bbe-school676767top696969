#!/usr/bin/env python3
"""Second-pass deepen for remaining thin Ch1 core letters (1.1 leftovers + 1.41–1.43 + 1.63)."""

from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _ch1_patch_lib import apply_case, load, save  # noqa: E402

DEEP: dict[str, tuple[list[bool], str | None, list[str]]] = {}

# ---- 1.02 ----
DEEP["MATH 1.02"] = (
    [True, True, False, True, False],
    r"""The set-builder $A=\{x\in Z:x^{2}=9\}$ keeps the integer solutions of $x^{2}=9$. Solving gives $x=\pm 3$, both integers, so

$$A=\{-3,3\}.$$

$B$ is given as $\{3,-3\}$. Equality of sets is equality of membership, independent of order.""",
    [
        r"""The overview recovered the integer roots of $x^{2}=9$:

$$A=\{-3,3\}$$

$B$ is given as $\{3,-3\}$. Sets ignore order, so compare membership both ways:

$$-3\in B,\quad 3\in B$$

$$3\in A,\quad -3\in A$$

Hence $A=B$. So the statement is True.""",
        r"""The overview recovered

$$A=\{-3,3\}$$

Membership asks whether the object appears on that roster. Test the claimed element:

$$3\in\{-3,3\}$$

Yes, so $3\in A$. So the statement is True.""",
        r"""The overview recovered $A=\{-3,3\}$. The claim reprints $A$ as $\{3\}$ only. Check the discarded root against the set-builder:

$$(-3)^{2}=9$$

$$-3\in Z$$

so $-3$ must sit in $A$. Therefore

$$A=\{-3,3\}\ne\{3\}$$

So the statement is False.""",
        r"""Cardinality counts distinct members. The overview recovered

$$A=\{-3,3\}$$

Those two integers are distinct, so

$$\lvert A\rvert=2$$

That matches the claim. So the statement is True.""",
        r"""Filter the same equation by the universe $N=\{1,2,3,\ldots\}$ instead of $Z$. The algebraic candidates are still $\pm 3$, but

$$3\in N$$

$$-3\notin N$$

so the natural-number set-builder yields

$$C=\{3\}$$

The claim equates $C$ with $\{3,-3\}$. Those sets differ. So the statement is False.""",
    ],
)

# ---- 1.03 ----
DEEP["MATH 1.03"] = (
    [True, False, True, False, True],
    None,
    [
        r"""Each object in $A=\{a,b,c\}$ may be kept or left out when building a subset. That is $2$ independent binary choices:

$$\lvert\mathcal{P}(A)\rvert=2^{\lvert A\rvert}=2^{3}$$

$$2^{3}=8$$

The power set therefore has $8$ elements. So the statement is True.""",
        r"""The elements of $A$ are the letters $a$, $b$, and $c$. The object $\{a,b\}$ is a set of letters, not a letter:

$$\{a,b\}\notin\{a,b,c\}$$

It is a subset of $A$, so it belongs to the power set:

$$\{a,b\}\subseteq A\implies\{a,b\}\in\mathcal{P}(A)$$

but that is not the claim. So the statement is False.""",
        r"""Subsethood asks whether every member of the left-hand set sits in $A$. The empty set has no members at all:

$$\forall x\,(x\in\emptyset\Rightarrow x\in A)$$

is vacuously true. Hence

$$\emptyset\subseteq A$$

So the statement is True.""",
        r"""Proper inclusion needs ordinary inclusion plus a genuine difference:

$$X\subsetneq Y\iff(X\subseteq Y)\wedge(X\neq Y)$$

$A\subseteq A$ holds, but $A\neq A$ is impossible. Therefore $A$ is not a proper subset of $A$. So the statement is False.""",
        r"""Two-element subsets of a three-element set are counted by

$$\binom{3}{2}=\frac{3\cdot 2}{2}=3$$

Listing them confirms the count:

$$\{a,b\},\quad\{a,c\},\quad\{b,c\}$$

Exactly three such subsets. So the statement is True.""",
    ],
)

# ---- 1.04 ----
DEEP["MATH 1.04"] = (
    [True, False, True, False, True],
    None,
    [
        r"""Subsethood asks whether every member of the left-hand set sits in $D=\{a,b,c\}$. The empty set contributes no members to check:

$$\emptyset\subseteq D$$

holds for every set $D$. So the statement is True.""",
        r"""Membership asks whether the object is one of the listed elements. Write the roster:

$$D=\{a,b,c\}$$

Compare $\emptyset$ with each listed letter. None matches, so

$$\emptyset\notin D$$

So the statement is False.""",
        r"""Each of the three letters may be kept or left out independently:

$$\lvert\mathcal{P}(D)\rvert=2^{3}$$

$$2^{3}=8$$

So $D$ has exactly $8$ subsets. So the statement is True.""",
        r"""Check the two relations separately. Because $a\in D$,

$$\{a\}\subseteq D$$

holds. But the elements of $D$ are letters, not singletons:

$$\{a\}\notin\{a,b,c\}$$

The claim needs both relations at once. The second fails, so the statement is False.""",
        r"""Inclusion is reflexive. Take an arbitrary $x\in D$. Then $x$ is one of $a,b,c$, hence $x\in D$. Therefore

$$D\subseteq D$$

So the statement is True.""",
    ],
)

# ---- 1.05 ----
DEEP["MATH 1.05"] = (
    [True, True, False, True, True],
    None,
    [
        r"""Difference keeps members of $E$ that miss $F$. With $E=\{1,3,5,7\}$ and $F=\{3,4,5,6\}$, test each member of $E$:

$$1\notin F$$

$$3\in F$$

$$5\in F$$

$$7\notin F$$

Keep $1$ and $7$:

$$E\setminus F=\{1,7\}$$

That matches the claim. So the statement is True.""",
        r"""Difference keeps members of $F$ that miss $E$. Test each member of $F=\{3,4,5,6\}$:

$$3\in E$$

$$4\notin E$$

$$5\in E$$

$$6\notin E$$

Keep $4$ and $6$:

$$F\setminus E=\{4,6\}$$

That matches the claim. So the statement is True.""",
        r"""The two differences are

$$E\setminus F=\{1,7\}$$

$$F\setminus E=\{4,6\}$$

Equality of sets would require the same members. But

$$1\in E\setminus F,\qquad 1\notin F\setminus E$$

so the rosters differ. So the statement is False.""",
        r"""Form each leftover pile, then take the union:

$$E\setminus F=\{1,7\}$$

$$F\setminus E=\{4,6\}$$

$$(E\setminus F)\cup(F\setminus E)=\{1,4,6,7\}$$

That matches the claimed roster. So the statement is True.""",
        r"""The leftover piles are $\{1,7\}$ and $\{4,6\}$. Their intersection is

$$\{1,7\}\cap\{4,6\}=\emptyset$$

so

$$(E\setminus F)\cap(F\setminus E)=\emptyset$$

That matches the claim. So the statement is True.""",
    ],
)

# ---- 1.06 ----
DEEP["MATH 1.06"] = (
    [True, True, False, False, False],
    None,
    [
        r"""Intersection keeps numbers tagged in both $A$ and $B$. Walk $A=\{2,4,6,8,10\}$ against $B=\{3,6,9,12\}$:

$$2\notin B,\quad 4\notin B,\quad 6\in B,\quad 8\notin B,\quad 10\notin B$$

$$A\cap B=\{6\}$$

That matches the claim. So the statement is True.""",
        r"""Union size uses inclusion-exclusion:

$$\lvert A\cup B\rvert=\lvert A\rvert+\lvert B\rvert-\lvert A\cap B\rvert$$

Substitute $\lvert A\rvert=5$, $\lvert B\rvert=4$, and $\lvert A\cap B\rvert=1$:

$$5+4-1=8$$

So $A\cup B$ has $8$ elements. So the statement is True.""",
        r"""Difference $C\setminus A$ keeps members of $C=\{1,2,3,4,5\}$ that miss $A$:

$$1\notin A,\quad 2\in A,\quad 3\notin A,\quad 4\in A,\quad 5\notin A$$

$$C\setminus A=\{1,3,5\}$$

The claim drops $5$. So the statement is False.""",
        r"""Difference $B\setminus C$ removes from $B=\{3,6,9,12\}$ whatever also sits in $C$:

$$3\in C,\quad 6\notin C,\quad 9\notin C,\quad 12\notin C$$

$$B\setminus C=\{6,9,12\}$$

The claim keeps $3$, which was removed. So the statement is False.""",
        r"""Intersection $A\cap C$ keeps shared members of $A=\{2,4,6,8,10\}$ and $C=\{1,2,3,4,5\}$:

$$2\in C,\quad 4\in C,\quad 6\notin C,\quad 8\notin C,\quad 10\notin C$$

$$A\cap C=\{2,4\}$$

The claim inserts $6$, which is not in $C$. So the statement is False.""",
    ],
)

# ---- 1.07 ----
DEEP["MATH 1.07"] = (
    [True, True, True, False, False],
    None,
    [
        r"""Two-set inclusion-exclusion recovers the union from the given totals:

$$\lvert M\cup E\rvert=\lvert M\rvert+\lvert E\rvert-\lvert M\cap E\rvert$$

$$=30+25-12$$

$$=43$$

That matches the claim. So the statement is True.""",
        r"""Students in neither course are the cohort total minus the union:

$$\lvert U\setminus(M\cup E)\rvert=50-\lvert M\cup E\rvert$$

With $\lvert M\cup E\rvert=43$,

$$50-43=7$$

So exactly $7$ take neither course. So the statement is True.""",
        r"""Only-Mathematics peels the overlap out of the Mathematics total:

$$\lvert M\setminus E\rvert=\lvert M\rvert-\lvert M\cap E\rvert$$

$$=30-12$$

$$=18$$

That matches the claim. So the statement is True.""",
        r"""Subsethood $E\subseteq M$ would require every Economics student also sit in $M$, i.e. an empty Economics-only region:

$$\lvert E\setminus M\rvert=\lvert E\rvert-\lvert M\cap E\rvert=25-12=13$$

Thirteen students take Economics but not Mathematics, so $E\not\subseteq M$. So the statement is False.""",
        r"""Disjointness requires an empty intersection. The stem gives a positive overlap:

$$\lvert M\cap E\rvert=12$$

$$12\neq 0$$

so the courses are not disjoint. So the statement is False.""",
    ],
)

# ---- 1.08 ----
DEEP["MATH 1.08"] = (
    [True, True, True, False, False],
    None,
    [
        r"""Pairwise disjointness means every pair of blocks shares nothing. Check the three pairs on $A=\{1,2,3\}$, $B=\{4,5,6\}$, $C=\{7,8,9\}$:

$$A\cap B=\emptyset$$

$$A\cap C=\emptyset$$

$$B\cap C=\emptyset$$

All three intersections are empty. So the statement is True.""",
        r"""A partition needs pairwise disjoint nonempty blocks whose union is $U$. Pairwise disjointness holds. The union is

$$A\cup B\cup C=\{1,2,\ldots,9\}=U$$

and each block is nonempty. So $\{A,B,C\}$ partitions $U$. So the statement is True.""",
        r"""The triple intersection sits inside every pairwise intersection. From $A\cap B=\emptyset$,

$$A\cap B\cap C\subseteq A\cap B$$

$$A\cap B\cap C=\emptyset$$

So the statement is True.""",
        r"""Difference $A\setminus B$ keeps members of $A$ that miss $B$. Because $A\cap B=\emptyset$, nothing is removed:

$$A\setminus B=A=\{1,2,3\}$$

$$\{1,2,3\}\neq\emptyset$$

The claim asserts the empty set. So the statement is False.""",
        r"""Disjointness of two nonempty sets is allowed. Here both blocks are nonempty:

$$A=\{1,2,3\}\neq\emptyset$$

$$B=\{4,5,6\}\neq\emptyset$$

yet $A\cap B=\emptyset$. Empty intersection does not force either factor to be empty. So the statement is False.""",
    ],
)

# ---- 1.09 ----
DEEP["MATH 1.09"] = (
    [True, True, True, True, False],
    None,
    [
        r"""The complement of $X$ in $U=\{1,2,\ldots,12\}$ is everyone $X$ leaves out. With

$$X=\{1,2,3,4,5,6\}$$

the leftover roster is

$$X^{c}=\{7,8,9,10,11,12\}$$

That matches the claim. So the statement is True.""",
        r"""First form the union of the skill sets:

$$X\cup Y=\{1,2,3,4,5,6,7,8,9\}$$

Its complement in $U$ is the three employees outside both skills:

$$(X\cup Y)^{c}=\{10,11,12\}$$

That matches the claim. So the statement is True.""",
        r"""Compute each complement, then intersect:

$$X^{c}=\{7,8,9,10,11,12\}$$

$$Y^{c}=\{1,2,3,10,11,12\}$$

$$X^{c}\cap Y^{c}=\{10,11,12\}$$

De Morgan also identifies this with $(X\cup Y)^{c}$. So the statement is True.""",
        r"""De Morgan's second law equates the complement of an intersection with the union of complements. One side:

$$X\cap Y=\{4,5,6\}$$

$$(X\cap Y)^{c}=\{1,2,3,7,8,9,10,11,12\}$$

The other side $X^{c}\cup Y^{c}$ yields the same roster. So the identity holds. So the statement is True.""",
        r"""Form the union of complements:

$$X^{c}=\{7,8,9,10,11,12\}$$

$$Y^{c}=\{1,2,3,10,11,12\}$$

$$X^{c}\cup Y^{c}=\{1,2,3,7,8,9,10,11,12\}$$

The claim drops $7,8,9$. So the statement is False.""",
    ],
)

# ---- 1.10 ----
DEEP["MATH 1.10"] = (
    [False, True, False, True, False],
    None,
    [
        r"""Form the union first:

$$A\cup B=\{1,2,3,4,5,6,7,8\}$$

Its complement in $U=\{1,2,\ldots,10\}$ is

$$(A\cup B)^{c}=\{9,10\}$$

The claim inserts $8$, but $8\in A\cup B$, so $8$ cannot sit in the complement. So the statement is False.""",
        r"""De Morgan's law for intersection says

$$(A\cap B)^{c}=A^{c}\cup B^{c}$$

for any sets $A,B$ in a fixed universe. The identity holds independently of the particular rosters. So the statement is True.""",
        r"""Compute each complement, then intersect:

$$A^{c}=\{6,7,8,9,10\}$$

$$B^{c}=\{1,2,3,9,10\}$$

$$A^{c}\cap B^{c}=\{9,10\}$$

The claim keeps $6,7,8$, which sit in $A^{c}$ but not in $B^{c}$. So the statement is False.""",
        r"""First form the intersection:

$$A\cap B=\{4,5\}$$

Its complement in $U$ is everyone else:

$$(A\cap B)^{c}=\{1,2,3,6,7,8,9,10\}$$

That matches the claim. So the statement is True.""",
        r"""Form the union of complements from

$$A^{c}=\{6,7,8,9,10\},\qquad B^{c}=\{1,2,3,9,10\}$$

$$A^{c}\cup B^{c}=\{1,2,3,6,7,8,9,10\}$$

The claim drops $6,7,8$. So the statement is False.""",
    ],
)

# ---- 1.11 ----
DEEP["MATH 1.11"] = (
    [True, False, False, False, True],
    None,
    [
        r"""Check the three partition axioms for $P=\{\{1,2\},\{3,4\},\{5,6\}\}$ on $A=\{1,2,3,4,5,6\}$:

$$\{1,2\}\cap\{3,4\}=\emptyset$$

$$\{1,2\}\cap\{5,6\}=\emptyset$$

$$\{3,4\}\cap\{5,6\}=\emptyset$$

$$\{1,2\}\cup\{3,4\}\cup\{5,6\}=A$$

Each block is nonempty. All three axioms hold. So the statement is True.""",
        r"""Block count is free. Both of the following partition a six-element set:

$$\{\{1,2\},\{3,4\},\{5,6\}\}$$

$$\{A\}$$

The first has $3$ blocks and the second has $1$ block. The claim that every partition must have exactly $n$ blocks is false. So the statement is False.""",
        r"""The blocks of $Q=\{\{1,2,3\},\{3,4,5,6\}\}$ overlap at $3$:

$$\{1,2,3\}\cap\{3,4,5,6\}=\{3\}$$

$$\{3\}\neq\emptyset$$

Pairwise disjointness fails, so $Q$ is not a partition. So the statement is False.""",
        r"""The union of the blocks of $R=\{\{1,2\},\{3,4\},\{5\}\}$ is

$$\{1,2\}\cup\{3,4\}\cup\{5\}=\{1,2,3,4,5\}$$

which misses $6\in A$. Covering fails, so $R$ is not a partition. So the statement is False.""",
        r"""For $n\ge 2$, at least two partitions exist. The trivial one-block partition is $\{A\}$. Splitting off a singleton gives another:

$$\{\{a\},A\setminus\{a\}\}$$

for any $a\in A$. So more than one partition always exists. So the statement is True.""",
    ],
)

# ---- 1.12 ----
DEEP["MATH 1.12"] = (
    [True, True, False, True, False],
    None,
    [
        r"""Each of the five elements may be included or omitted independently when building a subset:

$$\lvert\mathcal{P}(A)\rvert=2^{\lvert A\rvert}=2^{5}$$

$$2^{5}=32$$

So $A$ has $32$ subsets. So the statement is True.""",
        r"""Proper subsets are all subsets except $A$ itself:

$$2^{5}-1=32-1$$

$$=31$$

So there are $31$ proper subsets. So the statement is True.""",
        r"""Four-element subsets are counted by the binomial coefficient:

$$\binom{5}{4}=\binom{5}{1}=5$$

The claim asserts $10$. Note that $\binom{5}{2}=10$ counts two-element subsets instead. So the statement is False.""",
        r"""Nonempty subsets drop only the empty set from the power set:

$$2^{5}-1=32-1$$

$$=31$$

So there are $31$ nonempty subsets. So the statement is True.""",
        r"""Even-cardinality subsets for $|A|=5$:

$$\binom{5}{0}+\binom{5}{2}+\binom{5}{4}$$

$$=1+10+5=16$$

Exactly half of $2^{5}=32$ subsets have even size. The claim asserts $15$. So the statement is False.""",
    ],
)

# ---- 1.13 ----
DEEP["MATH 1.13"] = (
    [True, False, True, False, False],
    None,
    [
        r"""Translate brackets into inequalities, then take the tighter bounds:

$$A=(0,10]\iff 0<x\le 10$$

$$B=[5,15)\iff 5\le x<15$$

Intersection requires both conditions at once:

$$5\le x\le 10$$

which is the closed interval $[5,10]$. So the statement is True.""",
        r"""Union runs from the leftmost open end to the rightmost open end:

$$0<x<15$$

so

$$A\cup B=(0,15)$$

The claim closes the right end as $(0,15]$. But $15\notin A$ and $15\notin B$, so $15$ is excluded. So the statement is False.""",
        r"""Check $10$ against both intervals. For $A=(0,10]$:

$$0<10\le 10$$

holds, so $10\in A$. For $B=[5,15)$:

$$5\le 10<15$$

holds, so $10\in B$. Therefore $10\in A\cap B$. So the statement is True.""",
        r"""Difference $A\setminus B$ needs $x\in A$ and $x\notin B$. For $x=5$, the left endpoint of $B$ gives

$$5\le 5<15$$

so $5\in B$. Even though $5\in A$, membership in $B$ excludes it from the difference:

$$5\notin A\setminus B$$

So the statement is False.""",
        r"""The implication $x\in A\Rightarrow x\in B$ fails at any point of $A$ outside $B$. Take $x=1$:

$$1\in A$$

$$1\notin B$$

so the implication is not true for all $x$. So the statement is False.""",
    ],
)

# ---- 1.14 ----
DEEP["MATH 1.14"] = (
    [False, True, False, False, False],
    None,
    [
        r"""Three-set inclusion-exclusion:

$$\lvert A\cup B\cup C\rvert=80+70+60-30-25-20+10$$

$$=210-75+10$$

$$=145$$

The claim asserts $155$. Since $145\neq 155$, the statement is False.""",
        r"""Tourists who visited none of the three are the survey total minus the union:

$$150-\lvert A\cup B\cup C\rvert$$

With $\lvert A\cup B\cup C\rvert=145$,

$$150-145=5$$

So exactly $5$ visited none. So the statement is True.""",
        r"""Exactly A-and-B (not C) is the pairwise total minus the triple:

$$\lvert A\cap B\setminus C\rvert=\lvert A\cap B\rvert-\lvert A\cap B\cap C\rvert$$

$$=30-10=20$$

The claim reuses the pairwise total $30$ and forgets to remove the triple. So the statement is False.""",
        r"""Only-A removes both pairwise overlaps and restores the triple once:

$$\lvert A\setminus(B\cup C)\rvert=\lvert A\rvert-\lvert A\cap B\rvert-\lvert A\cap C\rvert+\lvert A\cap B\cap C\rvert$$

$$=80-30-20+10=40$$

The claim computes $80-30-20=30$ and forgets to add back the triple. So the statement is False.""",
        r"""At least two museums means the three pair-only regions plus the triple:

$$\lvert A\cap B\setminus C\rvert=30-10=20$$

$$\lvert B\cap C\setminus A\rvert=25-10=15$$

$$\lvert A\cap C\setminus B\rvert=20-10=10$$

$$20+15+10+10=55$$

The claim asserts $65$. So the statement is False.""",
    ],
)

# ---- 1.15 ----
DEEP["MATH 1.15"] = (
    [True, False, False, True, False],
    None,
    [
        r"""Every even natural is a natural, so $E\subseteq N$. Equality fails because an odd sits in $N$ only:

$$1\in N$$

$$1\notin E$$

Hence

$$E\subsetneq N$$

So $E$ is a proper subset of $N$. So the statement is True.""",
        r"""For infinite sets, a proper subset can have the same cardinality as the whole. The map $n\mapsto 2n$ is a bijection $N\to E$, so

$$\lvert E\rvert=\lvert N\rvert$$

even though $E\subsetneq N$. "Proper subset implies strictly fewer" is a finite-set intuition. So the statement is False.""",
        r"""The map $f(n)=2n$ sends naturals to even naturals:

$$f(N)=\{2,4,6,\ldots\}=E$$

The odd naturals are $\{1,3,5,\ldots\}$, which is a different set. So $f$ is not a bijection onto the odds. So the statement is False.""",
        r"""We have both $E\subsetneq N$ and a bijection $n\mapsto 2n$ between them. That pair of facts is the standard counterexample showing that finite-set size intuition fails for infinite sets. So the statement is True.""",
        r"""Many infinite subsets of $N$ are proper. The evens

$$E=\{2,4,6,\ldots\}$$

are infinite and miss $1\in N$. So not every infinite subset equals $N$. So the statement is False.""",
    ],
)

# ---- 1.16 ----
DEEP["MATH 1.16"] = (
    [True, False, True, True, True],
    None,
    [
        r"""Membership asks whether the number sits on the roster. Write

$$A=\{2,4,6,8,10,12\}$$

and locate $6$ among the listed elements. It appears, so

$$6\in A$$

So the statement is True.""",
        r"""The elements of $A$ are numbers, not singletons. The object $\{6\}$ is a one-element set:

$$\{6\}\notin A$$

even though $6\in A$. The singleton is a subset of $A$, hence an element of $\mathcal{P}(A)$, but that is not this claim. So the statement is False.""",
        r"""Subsethood asks whether every member of $\{6,8\}$ sits in $A$:

$$6\in A$$

$$8\in A$$

Hence

$$\{6,8\}\subseteq A$$

So the statement is True.""",
        r"""The empty set has no member that could sit outside $A$. The subset test is vacuously true:

$$\emptyset\subseteq A$$

So the statement is True.""",
        r"""Total subsets of a six-element set:

$$2^{6}=64$$

Proper subsets drop $A$ itself:

$$64-1=63$$

So $A$ has exactly $63$ proper subsets. So the statement is True.""",
    ],
)

# ---- 1.17 ----
DEEP["MATH 1.17"] = (
    [True, True, False, True, True],
    r"""The set-builder $A=\{x\in\mathbb{Z}:x^{2}-5x+6=0\}$ keeps the integer solutions of the quadratic. Factoring gives

$$(x-2)(x-3)=0$$

so $x=2$ or $x=3$, both integers:

$$A=\{2,3\}.$$

$B$ is given as $\{2,3\}$.""",
    [
        r"""The overview recovered

$$A=\{2,3\}$$

and $B$ is given as $\{2,3\}$. The rosters match member for member:

$$A=B$$

So the statement is True.""",
        r"""The overview recovered $A=\{2,3\}$. Membership asks whether $3$ sits on that roster:

$$3\in\{2,3\}$$

Yes, so $3\in A$. So the statement is True.""",
        r"""The overview recovered $A=\{2,3\}$. The claim drops the root $3$. Check it against the quadratic:

$$3^{2}-5\cdot 3+6=9-15+6=0$$

$$3\in\mathbb{Z}$$

so $3\in A$. Then

$$A=\{2,3\}\ne\{2\}$$

So the statement is False.""",
        r"""Two distinct integer roots were recovered:

$$A=\{2,3\}$$

Cardinality counts distinct members:

$$\lvert A\rvert=2$$

That matches the claim. So the statement is True.""",
        r"""Restrict to natural numbers with the extra filter $x>2$. The quadratic candidates are $2$ and $3$; only $3$ satisfies $x>2$:

$$2\not>2,\qquad 3>2$$

$$C=\{3\}$$

That matches the claim. So the statement is True.""",
    ],
)

# ---- 1.18 ----
DEEP["MATH 1.18"] = (
    [True, True, True, True, False],
    None,
    [
        r"""Four letters mean each is in or out independently when building a subset:

$$\lvert\mathcal{P}(D)\rvert=2^{4}$$

$$2^{4}=16$$

So the power set has $16$ elements. So the statement is True.""",
        r"""A set belongs to the power set precisely when it is a subset of $D=\{w,x,y,z\}$. Check

$$w\in D,\qquad x\in D$$

so

$$\{w,x\}\subseteq D$$

hence

$$\{w,x\}\in\mathcal{P}(D)$$

So the statement is True.""",
        r"""Three-element subsets of a four-element set:

$$\binom{4}{3}=\binom{4}{1}=4$$

Each such subset leaves out exactly one of the four letters. So the statement is True.""",
        r"""Every set is a subset of itself:

$$D\subseteq D$$

and the power set collects all subsets, so

$$D\in\mathcal{P}(D)$$

So the statement is True.""",
        r"""Two-element subsets of a four-element set:

$$\binom{4}{2}=\frac{4\cdot 3}{2}=6$$

The claim asserts $5$. Since $6\neq 5$, the statement is False.""",
    ],
)

# ---- 1.19 ----
DEEP["MATH 1.19"] = (
    [True, True, False, True, False],
    None,
    [
        r"""Every member of $E=\{1,2,3\}$ sits in $F=\{1,2,3,4\}$:

$$1\in F$$

$$2\in F$$

$$3\in F$$

so $E\subseteq F$. So the statement is True.""",
        r"""Ordinary inclusion $E\subseteq F$ holds, and the sets differ because

$$4\in F$$

$$4\notin E$$

Hence

$$E\subsetneq F$$

So $E$ is a proper subset of $F$. So the statement is True.""",
        r"""Subsethood $F\subseteq E$ would require every member of $F$ to sit in $E$. But

$$4\in F$$

$$4\notin\{1,2,3\}$$

so $F\not\subseteq E$. So the statement is False.""",
        r"""Inclusion is reflexive. Every member of $E$ sits in $E$ by definition of the same set:

$$E\subseteq E$$

So the statement is True.""",
        r"""Proper inclusion also needs $E\neq E$, which is impossible:

$$E\subsetneq E\iff(E\subseteq E)\wedge(E\neq E)$$

The second conjunct fails. So the statement is False.""",
    ],
)

# ---- 1.20 ----
DEEP["MATH 1.20"] = (
    [True, True, True, False, False],
    None,
    [
        r"""Check pairwise intersections of the blocks of $\mathcal{S}=\{\{1,2\},\{3,4\},\{5,6\}\}$:

$$\{1,2\}\cap\{3,4\}=\emptyset$$

$$\{1,2\}\cap\{5,6\}=\emptyset$$

$$\{3,4\}\cap\{5,6\}=\emptyset$$

All three are empty, so the blocks are pairwise disjoint. So the statement is True.""",
        r"""The union of the three blocks is

$$\{1,2\}\cup\{3,4\}\cup\{5,6\}$$

$$=\{1,2,3,4,5,6\}=G$$

So the union equals $G$. So the statement is True.""",
        r"""A partition needs nonempty pairwise-disjoint blocks whose union is $G$. The blocks are nonempty, pairwise disjoint (letter A), and cover $G$ (letter B). Therefore $\mathcal{S}$ partitions $G$. So the statement is True.""",
        r"""In $\mathcal{S}'=\{\{1,2\},\{2,3,4\},\{5,6\}\}$ the first two blocks overlap:

$$\{1,2\}\cap\{2,3,4\}=\{2\}$$

$$\{2\}\neq\emptyset$$

Pairwise disjointness fails, so $\mathcal{S}'$ is not a partition. So the statement is False.""",
        r"""Replacing $\{5,6\}$ with $\{5,6,7\}$ introduces $7\notin G$. Partition blocks must be subsets of $G$, and the union would contain an outsider. So the modified collection is not a partition of $G$. So the statement is False.""",
    ],
)

# ---- 1.21 ----
DEEP["MATH 1.21"] = (
    [True, False, False, True, False],
    None,
    [
        r"""Every positive even integer is a natural number. Writing the two sets,

$$H=\{2,4,6,\ldots\}$$

$$\mathbb{N}=\{1,2,3,\ldots\}$$

shows $H\subseteq\mathbb{N}$. So the statement is True.""",
        r"""$H$ contains infinitely many distinct elements $2,4,6,\ldots$ with no last term. A finite set would have a finite listing and a largest element. So $H$ is not finite. So the statement is False.""",
        r"""Equality fails because odd naturals sit in $\mathbb{N}$ but not in $H$:

$$1\in\mathbb{N}$$

$$1\notin H$$

so $H\neq\mathbb{N}$. So the statement is False.""",
        r"""Define $f:\mathbb{N}\to H$ by $f(n)=2n$. Injectivity:

$$f(n)=f(m)\implies 2n=2m\implies n=m$$

Surjectivity: every $h=2k\in H$ equals $f(k)$. So $f$ is a bijection. So the statement is True.""",
        r"""Proper inclusion $H\subsetneq\mathbb{N}$ holds, but the bijection $n\mapsto 2n$ shows

$$\lvert H\rvert=\lvert\mathbb{N}\rvert$$

"Proper subset implies strictly fewer" fails for infinite sets. So the statement is False.""",
    ],
)

# ---- 1.22 ----
DEEP["MATH 1.22"] = (
    [True, True, True, True, True],
    None,
    [
        r"""The roster lists two objects:

$$K=\{a,\{a\}\}$$

The bare object $a$ is the first listed member, so

$$a\in K$$

So the statement is True.""",
        r"""The second listed member is the singleton set $\{a\}$:

$$\{a\}\in K$$

Membership holds because that set appears as an element of the roster, distinct from the bare object $a$. So the statement is True.""",
        r"""Subsethood asks whether every member of $\{a\}$ sits in $K$. The only member is $a$, and $a\in K$, so

$$\{a\}\subseteq K$$

So the statement is True.""",
        r"""The singleton $\{\{a\}\}$ has one member, namely the set $\{a\}$. That member sits in $K$:

$$\{a\}\in K$$

$$\implies\{\{a\}\}\subseteq K$$

So the statement is True.""",
        r"""The two listed objects $a$ and $\{a\}$ are distinct — an element versus a set containing it:

$$\lvert K\rvert=2$$

So the statement is True.""",
    ],
)

# ---- 1.41 ----
DEEP["MATH 1.41"] = (
    [True, True, True, False, True],
    None,
    [
        r"""Two-set inclusion-exclusion recovers the union from the given totals:

$$\lvert A\cup B\rvert=\lvert A\rvert+\lvert B\rvert-\lvert A\cap B\rvert$$

$$=34+28-12$$

$$=50$$

That matches the claim. So the statement is True.""",
        r"""Spanish-only peels the overlap out of the Spanish total:

$$\lvert A\setminus B\rvert=\lvert A\rvert-\lvert A\cap B\rvert$$

$$=34-12$$

$$=22$$

That matches the claim. So the statement is True.""",
        r"""Students in neither language are the cohort total minus the union:

$$60-\lvert A\cup B\rvert$$

With $\lvert A\cup B\rvert=50$,

$$60-50=10$$

So exactly $10$ take neither course. So the statement is True.""",
        r"""The intersection is a subset of the union, so its size cannot exceed the union size:

$$\lvert A\cap B\rvert=12$$

$$\lvert A\cup B\rvert=50$$

$$12<50$$

The claim needs $\lvert A\cap B\rvert>\lvert A\cup B\rvert$. The inequality runs the other way. So the statement is False.""",
        r"""French-only peels the overlap out of the French total:

$$\lvert B\setminus A\rvert=\lvert B\rvert-\lvert A\cap B\rvert$$

$$=28-12$$

$$=16$$

That matches the claim. So the statement is True.""",
    ],
)

# ---- 1.42 ----
DEEP["MATH 1.42"] = (
    [True, True, True, False, True],
    None,
    [
        r"""Two-set inclusion-exclusion recovers the union:

$$\lvert A\cup B\rvert=\lvert A\rvert+\lvert B\rvert-\lvert A\cap B\rvert$$

$$=20+18-5$$

$$=33$$

That matches the claim. So the statement is True.""",
        r"""Pool-only peels the overlap out of the pool total:

$$\lvert A\setminus B\rvert=\lvert A\rvert-\lvert A\cap B\rvert$$

$$=20-5$$

$$=15$$

That matches the claim. So the statement is True.""",
        r"""Members using neither facility are the gym total minus the union:

$$50-\lvert A\cup B\rvert$$

With $\lvert A\cup B\rvert=33$,

$$50-33=17$$

So exactly $17$ use neither. So the statement is True.""",
        r"""The intersection is a subset of the union:

$$\lvert A\cap B\rvert=5$$

$$\lvert A\cup B\rvert=33$$

$$5<33$$

The claim needs $\lvert A\cap B\rvert>\lvert A\cup B\rvert$. The inequality runs the other way. So the statement is False.""",
        r"""Sauna-only peels the overlap out of the sauna total:

$$\lvert B\setminus A\rvert=\lvert B\rvert-\lvert A\cap B\rvert$$

$$=18-5$$

$$=13$$

That matches the claim. So the statement is True.""",
    ],
)

# ---- 1.43 ----
DEEP["MATH 1.43"] = (
    [True, True, True, True, False],
    None,
    [
        r"""Three-set inclusion-exclusion recovers the union. The overview (or direct substitution) gives

$$\lvert A\cup B\cup C\rvert=30+25+20-10-8-7+3$$

$$=75-25+3$$

$$=53$$

That matches the claim. So the statement is True.""",
        r"""Anyone who does all three activities sits inside each pairwise overlap. With $\lvert A\cap B\cap C\rvert=3$,

$$A\cap B\cap C\subseteq A\cap B$$

$$A\cap B\cap C\subseteq A\cap C$$

$$A\cap B\cap C\subseteq B\cap C$$

So the triple is contained in every pairwise intersection. So the statement is True.""",
        r"""Exactly photography-and-hiking (not cooking) peels the triple out of the pairwise total:

$$\lvert A\cap B\setminus C\rvert=\lvert A\cap B\rvert-\lvert A\cap B\cap C\rvert$$

$$=10-3=7$$

That matches the claim. So the statement is True.""",
        r"""The triple group is a subset of each pair, so its size cannot exceed any pairwise size:

$$3\le 10$$

$$3\le 8$$

$$3\le 7$$

Hence $3\le\min(10,8,7)$. The claimed inequality holds. So the statement is True.""",
        r"""Compare the raw sum of the three totals with the union:

$$\lvert A\rvert+\lvert B\rvert+\lvert C\rvert=30+25+20=75$$

$$\lvert A\cup B\cup C\rvert=53$$

Already $53<75$. The claim needs $53>75$. The inequality runs the other way. So the statement is False.""",
    ],
)


# ---- 1.63 ----
DEEP["MATH 1.63"] = (
    [True, True, False, True, True],
    None,
    [
        r"""The first positive integer is $n=1$. The left side of the claimed formula is $1$. The right side is

$$\frac{1\cdot(1+1)}{2}=\frac{1\cdot 2}{2}$$

$$=1$$

The two sides agree, so the base case holds. So the statement is True.""",
        r"""Let

$$P(n):\quad 1+2+\cdots+n=\frac{n(n+1)}{2}$$

The inductive step assumes $P(k)$ for an arbitrary positive integer $k$ and must derive the next case:

$$P(k)\Rightarrow P(k+1)$$

Together with the base case, this implication propagates the formula through every positive integer. The statement describes exactly that step. So the statement is True.""",
        r"""Checking five values establishes only

$$P(1)\land P(2)\land P(3)\land P(4)\land P(5)$$

A complete induction also needs the bridge

$$\forall k\ge 1,\quad P(k)\Rightarrow P(k+1)$$

Without that implication, nothing has been proved about $P(6)$ or any later case. Five examples are not a complete inductive proof. So the statement is False.""",
        r"""Assume the formula at $n=k$:

$$1+2+\cdots+k=\frac{k(k+1)}{2}$$

Add the next term $k+1$:

$$1+2+\cdots+k+(k+1)=\frac{k(k+1)}{2}+(k+1)$$

$$=(k+1)\left(\frac{k}{2}+1\right)$$

$$=\frac{(k+1)(k+2)}{2}$$

which is exactly $P(k+1)$. So the inductive step holds. So the statement is True.""",
        r"""Substitute $n=10$ into the closed form:

$$\frac{10\cdot(10+1)}{2}=\frac{10\cdot 11}{2}$$

$$=55$$

So $1+2+\cdots+10=55$. So the statement is True.""",
    ],
)


def main() -> None:
    text = load()
    for case_id, (keys, overview, bodies) in DEEP.items():
        text = apply_case(text, case_id, keys, bodies, overview)
        print(f"patched {case_id}")
    save(text)
    print(f"done: {len(DEEP)} cases")


if __name__ == "__main__":
    main()
