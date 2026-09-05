#!/usr/bin/env python3
"""Deepen Ch1 core subsection 1.1 (MATH 1.01–1.22) tactical explanations."""

from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _ch1_patch_lib import apply_case, load, save  # noqa: E402

# case_id -> (answer_key, overview|None, [5 bodies])
# Bodies are raw markdown (single \ for KaTeX). Overview None = leave unchanged.

DEEP: dict[str, tuple[list[bool], str | None, list[str]]] = {
    "MATH 1.01": (
        [True, False, True, False, False],
        None,
        [
            r"""Intersection keeps only the elements that sit in both sets. Walk the roster of $A$ and keep a number only when it also sits in $B$:

$$1\in A,\ 1\notin B$$

$$2\in A,\ 2\notin B$$

$$3\in A,\ 3\in B$$

$$4\in A,\ 4\in B$$

$$5\in A,\ 5\in B$$

Collecting the keepers:

$$A\cap B=\{3,4,5\}$$

That matches the claimed roster, so the statement is True.""",
            r"""Union keeps every element that sits in $A$ or in $C$ (or both). Start from $A$ and attach whatever $C$ adds:

$$A=\{1,2,3,4,5\}$$

$$C=\{5,6,7,8,9\}$$

$$A\cup C=\{1,2,3,4,5,6,7,8,9\}$$

The claim stops at $8$ and drops $9$. Since $9\in C$, the claimed roster is incomplete, so the statement is False.""",
            r"""An element of $(A\cap B)\cap C$ must sit in all three lists. First form the pairwise intersection:

$$A\cap B=\{3,4,5\}$$

Now test those three against $C$:

$$3\notin C,\quad 4\notin C,\quad 5\in C$$

$$(A\cap B)\cap C=\{5\}$$

The claim is that same singleton, so the statement is True.""",
            r"""Difference $A\setminus C$ keeps members of $A$ that miss $C$. Check each member of $A$:

$$1\notin C,\quad 2\notin C,\quad 3\notin C,\quad 4\notin C,\quad 5\in C$$

So only $5$ is removed:

$$A\setminus C=\{1,2,3,4\}$$

The claim drops $4$, but $4\in A$ and $4\notin C$, so the statement is False.""",
            r"""Disjointness requires an empty intersection. Compute the shared roster:

$$B=\{3,4,5,6,7\}$$

$$C=\{5,6,7,8,9\}$$

$$B\cap C=\{5,6,7\}$$

The intersection is nonempty, so $B$ and $C$ are not disjoint. So the statement is False.""",
        ],
    ),
    "MATH 1.02": (
        [True, True, False, True, False],
        r"""The set-builder $A=\{x\in Z:x^{2}=9\}$ keeps the integer solutions of $x^{2}=9$. Solving gives $x=\pm 3$, both integers, so

$$A=\{-3,3\}.$$

$B$ is given as $\{3,-3\}$. A set-builder is a membership test against a named universe. Equality of sets is equality of membership, independent of order or how the set was written.""",
        [
            r"""The overview recovered

$$A=\{-3,3\}$$

and $B$ is given as $\{3,-3\}$. Sets ignore order and repetition, so the two rosters name the same collection:

$$A=B$$

So the statement is True.""",
            r"""The overview recovered $A=\{-3,3\}$. Membership asks whether the object sits on that roster:

$$3\in\{-3,3\}$$

Yes, so $3\in A$. So the statement is True.""",
            r"""The overview recovered $A=\{-3,3\}$. The claim reprints $A$ as the singleton $\{3\}$. Check the discarded root:

$$(-3)^{2}=9,\qquad -3\in Z$$

so $-3$ belongs in $A$. Then

$$A=\{-3,3\}\ne\{3\}$$

So the statement is False.""",
            r"""The overview recovered two distinct members:

$$A=\{-3,3\}$$

Cardinality counts distinct members:

$$\lvert A\rvert=2$$

That matches the claim, so the statement is True.""",
            r"""The same equation $x^{2}=9$ is now filtered by the universe $N=\{1,2,3,\ldots\}$. The candidates are still $\pm 3$, but

$$3\in N,\qquad -3\notin N$$

so

$$C=\{3\}$$

The claim equates $C$ with $\{3,-3\}$. Those sets differ by $-3$, so the statement is False.""",
        ],
    ),
    "MATH 1.03": (
        [True, False, True, False, True],
        None,
        [
            r"""Each of the three objects in $A=\{a,b,c\}$ may be kept or left out when building a subset. That gives $2$ choices per object:

$$\lvert\mathcal{P}(A)\rvert=2^{3}$$

$$2^{3}=8$$

The claim is $8$, so the statement is True.""",
            r"""The elements of $A$ are the three letters $a$, $b$, and $c$. The object $\{a,b\}$ is a two-element set of letters, not a letter:

$$\{a,b\}\notin A$$

It is a subset of $A$, so it sits in the power set

$$\{a,b\}\in\mathcal{P}(A)$$

but that is not this claim. So the statement is False.""",
            r"""Subsethood asks whether every member of the left-hand set sits in $A$. The empty set has no members at all, so there is no witness that could sit outside $A$:

$$\emptyset\subseteq A$$

always holds. So the statement is True.""",
            r"""Proper inclusion needs ordinary inclusion plus a genuine difference of sets:

$$X\subsetneq Y\iff(X\subseteq Y)\wedge(X\neq Y)$$

$A\subseteq A$ always holds, but $A\neq A$ is impossible. Hence $A$ is not a proper subset of $A$. So the statement is False.""",
            r"""A two-element subset of a three-element set is counted by the binomial coefficient:

$$\binom{3}{2}=3$$

The three subsets are

$$\{a,b\},\quad\{a,c\},\quad\{b,c\}$$

The claim is $3$, so the statement is True.""",
        ],
    ),
    "MATH 1.04": (
        [True, False, True, False, True],
        None,
        [
            r"""Subsethood asks whether every member of the left-hand set sits in $D$. The empty set has no members, so no witness can sit outside $D$:

$$\emptyset\subseteq D$$

So the statement is True.""",
            r"""Membership asks whether the object is one of the listed elements. The roster is

$$D=\{a,b,c\}$$

The empty set is not the letter $a$, nor $b$, nor $c$:

$$\emptyset\notin D$$

So the statement is False.""",
            r"""Each of the three letters may be kept or left out independently when building a subset:

$$\lvert\mathcal{P}(D)\rvert=2^{3}=8$$

So $D$ has exactly $8$ subsets. So the statement is True.""",
            r"""Check the two relations separately. Because $a\in D$,

$$\{a\}\subseteq D$$

holds. But the elements of $D$ are letters, not singletons:

$$\{a\}\notin D$$

The claim needs both relations. The second fails, so the statement is False.""",
            r"""Every member of $D$ sits in $D$ by the definition of the same set:

$$D\subseteq D$$

Inclusion is reflexive. So the statement is True.""",
        ],
    ),
    "MATH 1.05": (
        [True, True, False, True, True],
        None,
        [
            r"""Difference keeps members of $E$ that miss $F$. Check each member of $E=\{1,3,5,7\}$:

$$1\notin F,\quad 3\in F,\quad 5\in F,\quad 7\notin F$$

So

$$E\setminus F=\{1,7\}$$

That matches the claim, so the statement is True.""",
            r"""Difference keeps members of $F$ that miss $E$. Check each member of $F=\{3,4,5,6\}$:

$$3\in E,\quad 4\notin E,\quad 5\in E,\quad 6\notin E$$

So

$$F\setminus E=\{4,6\}$$

That matches the claim, so the statement is True.""",
            r"""The overview (and the two differences above) give

$$E\setminus F=\{1,7\}$$

$$F\setminus E=\{4,6\}$$

Those rosters are unequal:

$$\{1,7\}\neq\{4,6\}$$

so the two differences are not the same set. So the statement is False.""",
            r"""Symmetric-difference style union of the two leftover piles:

$$E\setminus F=\{1,7\}$$

$$F\setminus E=\{4,6\}$$

$$(E\setminus F)\cup(F\setminus E)=\{1,4,6,7\}$$

That matches the claimed roster, so the statement is True.""",
            r"""The leftover piles share no members:

$$\{1,7\}\cap\{4,6\}=\emptyset$$

so

$$(E\setminus F)\cap(F\setminus E)=\emptyset$$

That matches the claim, so the statement is True.""",
        ],
    ),
    "MATH 1.06": (
        [True, True, False, False, False],
        None,
        [
            r"""Intersection keeps numbers tagged in both $A$ and $B$. Walk $A=\{2,4,6,8,10\}$ against $B=\{3,6,9,12\}$:

$$2\notin B,\ 4\notin B,\ 6\in B,\ 8\notin B,\ 10\notin B$$

$$A\cap B=\{6\}$$

That matches the claim, so the statement is True.""",
            r"""Union size is the count of distinct tags in either list:

$$\lvert A\cup B\rvert=\lvert A\rvert+\lvert B\rvert-\lvert A\cap B\rvert$$

$$=5+4-1=8$$

So $A\cup B$ has $8$ elements. So the statement is True.""",
            r"""Difference $C\setminus A$ keeps members of $C$ that miss $A$. From $C=\{1,2,3,4,5\}$:

$$1\notin A,\ 2\in A,\ 3\notin A,\ 4\in A,\ 5\notin A$$

$$C\setminus A=\{1,3,5\}$$

The claim drops $5$, so the statement is False.""",
            r"""Difference $B\setminus C$ removes from $B$ whatever also sits in $C$. From $B=\{3,6,9,12\}$:

$$3\in C,\ 6\notin C,\ 9\notin C,\ 12\notin C$$

$$B\setminus C=\{6,9,12\}$$

The claim keeps $3$, but $3$ was removed. So the statement is False.""",
            r"""Intersection $A\cap C$ keeps shared members. From $A=\{2,4,6,8,10\}$ and $C=\{1,2,3,4,5\}$:

$$2\in C,\ 4\in C,\ 6\notin C,\ 8\notin C,\ 10\notin C$$

$$A\cap C=\{2,4\}$$

The claim inserts $6$, which is not in $C$. So the statement is False.""",
        ],
    ),
    "MATH 1.07": (
        [True, True, True, False, False],
        None,
        [
            r"""Two-set inclusion-exclusion recovers the union:

$$\lvert M\cup E\rvert=\lvert M\rvert+\lvert E\rvert-\lvert M\cap E\rvert$$

$$=30+25-12=43$$

That matches the claim, so the statement is True.""",
            r"""Students in neither course are the cohort total minus the union:

$$\lvert U\setminus(M\cup E)\rvert=50-\lvert M\cup E\rvert$$

$$=50-43=7$$

So exactly $7$ take neither course. So the statement is True.""",
            r"""Only-Mathematics is the Mathematics total after removing the overlap:

$$\lvert M\setminus E\rvert=\lvert M\rvert-\lvert M\cap E\rvert$$

$$=30-12=18$$

That matches the claim, so the statement is True.""",
            r"""Subsethood $E\subseteq M$ would require every Economics student also sit in $M$, i.e. $\lvert E\setminus M\rvert=0$. But

$$\lvert E\setminus M\rvert=\lvert E\rvert-\lvert M\cap E\rvert=25-12=13$$

Thirteen Economics-only students sit outside $M$, so $E\not\subseteq M$. So the statement is False.""",
            r"""Disjointness requires $\lvert M\cap E\rvert=0$. The stem gives

$$\lvert M\cap E\rvert=12\neq 0$$

so the courses are not disjoint. So the statement is False.""",
        ],
    ),
    "MATH 1.08": (
        [True, True, True, False, False],
        None,
        [
            r"""Pairwise disjointness means every pair of blocks shares nothing. Check the three pairs:

$$A\cap B=\{1,2,3\}\cap\{4,5,6\}=\emptyset$$

$$A\cap C=\{1,2,3\}\cap\{7,8,9\}=\emptyset$$

$$B\cap C=\{4,5,6\}\cap\{7,8,9\}=\emptyset$$

All three intersections are empty, so the blocks are pairwise disjoint. So the statement is True.""",
            r"""A partition needs pairwise disjoint nonempty blocks whose union is $U$. Pairwise disjointness was checked in A. The union is

$$A\cup B\cup C=\{1,2,3,4,5,6,7,8,9\}=U$$

and each block is nonempty. So $\{A,B,C\}$ partitions $U$. So the statement is True.""",
            r"""The triple intersection sits inside every pairwise intersection. Since $A\cap B=\emptyset$,

$$A\cap B\cap C\subseteq A\cap B=\emptyset$$

so

$$A\cap B\cap C=\emptyset$$

So the statement is True.""",
            r"""Difference $A\setminus B$ keeps members of $A$ that miss $B$. Since $A$ and $B$ are disjoint, nothing is removed:

$$A\setminus B=A=\{1,2,3\}\neq\emptyset$$

The claim asserts the empty set. So the statement is False.""",
            r"""Disjointness of two nonempty sets is allowed. Here

$$A=\{1,2,3\}\neq\emptyset,\qquad B=\{4,5,6\}\neq\emptyset$$

yet $A\cap B=\emptyset$. Empty intersection does not force either factor to be empty. So the statement is False.""",
        ],
    ),
    "MATH 1.09": (
        [True, True, True, True, False],
        None,
        [
            r"""The complement of $X$ in $U=\{1,2,\ldots,12\}$ is everyone $X$ leaves out:

$$X=\{1,2,3,4,5,6\}$$

$$X^{c}=\{7,8,9,10,11,12\}$$

That matches the claim, so the statement is True.""",
            r"""First form the union of skill sets:

$$X\cup Y=\{1,2,3,4,5,6,7,8,9\}$$

Its complement in $U$ is

$$(X\cup Y)^{c}=\{10,11,12\}$$

That matches the claim, so the statement is True.""",
            r"""De Morgan says the complement of a union is the intersection of complements. Compute each complement:

$$X^{c}=\{7,8,9,10,11,12\}$$

$$Y^{c}=\{1,2,3,10,11,12\}$$

$$X^{c}\cap Y^{c}=\{10,11,12\}$$

Same roster as $(X\cup Y)^{c}$. So the statement is True.""",
            r"""De Morgan's second law equates the complement of an intersection with the union of complements. One side:

$$X\cap Y=\{4,5,6\}$$

$$(X\cap Y)^{c}=\{1,2,3,7,8,9,10,11,12\}$$

The other side:

$$X^{c}\cup Y^{c}=\{1,2,3,7,8,9,10,11,12\}$$

The two sides agree, so the identity holds. So the statement is True.""",
            r"""Form the union of complements:

$$X^{c}=\{7,8,9,10,11,12\}$$

$$Y^{c}=\{1,2,3,10,11,12\}$$

$$X^{c}\cup Y^{c}=\{1,2,3,7,8,9,10,11,12\}$$

The claim drops $7,8,9$ and is therefore incomplete. So the statement is False.""",
        ],
    ),
    "MATH 1.10": (
        [False, True, False, True, False],
        None,
        [
            r"""Form the union first:

$$A\cup B=\{1,2,3,4,5,6,7,8\}$$

Its complement in $U=\{1,2,\ldots,10\}$ is

$$(A\cup B)^{c}=\{9,10\}$$

The claim inserts $8$, but $8\in A\cup B$. So the statement is False.""",
            r"""De Morgan's law says the complement of an intersection is the union of complements:

$$(A\cap B)^{c}=A^{c}\cup B^{c}$$

This is an identity for any sets $A,B$ in a fixed universe. So the statement is True.""",
            r"""Compute each complement, then intersect:

$$A^{c}=\{6,7,8,9,10\}$$

$$B^{c}=\{1,2,3,9,10\}$$

$$A^{c}\cap B^{c}=\{9,10\}$$

The claim keeps $6,7,8$, which sit in $A^{c}$ but not in $B^{c}$. So the statement is False.""",
            r"""First form the intersection:

$$A\cap B=\{4,5\}$$

Its complement in $U$ is everyone else:

$$(A\cap B)^{c}=\{1,2,3,6,7,8,9,10\}$$

That matches the claim, so the statement is True.""",
            r"""Form the union of complements:

$$A^{c}\cup B^{c}=\{1,2,3,6,7,8,9,10\}$$

The claim drops $6,7,8$. So the statement is False.""",
        ],
    ),
    "MATH 1.11": (
        [True, False, False, False, True],
        None,
        [
            r"""Check the three partition axioms for $P=\{\{1,2\},\{3,4\},\{5,6\}\}$ on $A=\{1,2,3,4,5,6\}$:

$$\{1,2\}\cap\{3,4\}=\emptyset,\quad\{1,2\}\cap\{5,6\}=\emptyset,\quad\{3,4\}\cap\{5,6\}=\emptyset$$

$$\{1,2\}\cup\{3,4\}\cup\{5,6\}=A$$

Each block is nonempty. All three axioms hold, so $P$ partitions $A$. So the statement is True.""",
            r"""Block count is free. The one-block collection $\{A\}$ partitions $A$, and so does any other valid splitting. For $|A|=6$, both of the following are partitions:

$$\{\{1,2\},\{3,4\},\{5,6\}\}$$

$$\{A\}$$

The first has $3$ blocks and the second has $1$ block. The claim that every partition must have exactly $n$ blocks is false. So the statement is False.""",
            r"""The blocks of $Q$ overlap at $3$:

$$\{1,2,3\}\cap\{3,4,5,6\}=\{3\}\neq\emptyset$$

Pairwise disjointness fails, so $Q$ is not a partition. So the statement is False.""",
            r"""The union of the blocks of $R$ is

$$\{1,2\}\cup\{3,4\}\cup\{5\}=\{1,2,3,4,5\}$$

which misses $6\in A$. Covering fails, so $R$ is not a partition. So the statement is False.""",
            r"""For $n\ge 2$, at least two partitions exist: the trivial one-block partition $\{A\}$, and any split into a singleton and its complement (among others). So more than one partition always exists. So the statement is True.""",
        ],
    ),
    "MATH 1.12": (
        [True, True, False, True, False],
        None,
        [
            r"""Each of the five elements may be included or omitted independently:

$$\lvert\mathcal{P}(A)\rvert=2^{5}=32$$

So $A$ has $32$ subsets. So the statement is True.""",
            r"""Proper subsets are all subsets except $A$ itself:

$$2^{5}-1=32-1=31$$

So there are $31$ proper subsets. So the statement is True.""",
            r"""Four-element subsets are counted by the binomial coefficient:

$$\binom{5}{4}=5$$

not $10$. (Note $\binom{5}{2}=10$ counts two-element subsets instead.) So the statement is False.""",
            r"""Nonempty subsets drop only the empty set:

$$2^{5}-1=31$$

So there are $31$ nonempty subsets. So the statement is True.""",
            r"""Even-cardinality subsets for $|A|=5$:

$$\binom{5}{0}+\binom{5}{2}+\binom{5}{4}=1+10+5=16$$

Exactly half of $2^{5}=32$ subsets have even size. The claim asserts $15$. So the statement is False.""",
        ],
    ),
    "MATH 1.13": (
        [True, False, True, False, False],
        None,
        [
            r"""Translate brackets into inequalities, then take the tighter bounds:

$$A=(0,10]\iff 0<x\le 10$$

$$B=[5,15)\iff 5\le x<15$$

Intersection requires both:

$$5\le x\le 10$$

which is the closed interval $[5,10]$. So the statement is True.""",
            r"""Union runs from the leftmost open end to the rightmost open end:

$$0<x<15$$

so

$$A\cup B=(0,15)$$

The claim closes the right end as $(0,15]$. But $15\notin B$ and $15\notin A$, so $15$ is excluded. So the statement is False.""",
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

$$1\in A,\qquad 1\notin B$$

so the implication is not true for all $x$. So the statement is False.""",
        ],
    ),
    "MATH 1.14": (
        [False, True, False, False, False],
        None,
        [
            r"""Three-set inclusion-exclusion:

$$\lvert A\cup B\cup C\rvert=80+70+60-30-25-20+10$$

$$=145$$

The claim asserts $155$. Since $145\neq 155$, the statement is False.""",
            r"""Tourists who visited none of the three:

$$150-\lvert A\cup B\cup C\rvert=150-145=5$$

So exactly $5$ visited none. So the statement is True.""",
            r"""Exactly A-and-B (not C) is the pairwise total minus the triple:

$$\lvert A\cap B\setminus C\rvert=\lvert A\cap B\rvert-\lvert A\cap B\cap C\rvert$$

$$=30-10=20$$

The claim reuses the pairwise total $30$ and forgets to remove the triple. So the statement is False.""",
            r"""Only-A removes both pairwise overlaps and restores the triple once:

$$\lvert A\setminus(B\cup C)\rvert=80-30-20+10=40$$

The claim computes $80-30-20=30$ and forgets to add back the triple. So the statement is False.""",
            r"""At least two museums means the three pair-only regions plus the triple:

$$\lvert A\cap B\setminus C\rvert=20$$

$$\lvert B\cap C\setminus A\rvert=25-10=15$$

$$\lvert A\cap C\setminus B\rvert=20-10=10$$

$$20+15+10+10=55$$

The claim asserts $65$. So the statement is False.""",
        ],
    ),
    "MATH 1.15": (
        [True, False, False, True, False],
        None,
        [
            r"""Every even natural is a natural, so $E\subseteq N$. Equality fails because $1\in N$ and $1\notin E$:

$$E\subsetneq N$$

So $E$ is a proper subset of $N$. So the statement is True.""",
            r"""For infinite sets, a proper subset can have the same cardinality as the whole. The map $n\mapsto 2n$ is a bijection $N\to E$, so

$$\lvert E\rvert=\lvert N\rvert$$

even though $E\subsetneq N$. "Proper subset $\Rightarrow$ strictly fewer" is a finite-set intuition. So the statement is False.""",
            r"""The map $f(n)=2n$ sends naturals to even naturals:

$$f(N)=\{2,4,6,\ldots\}=E$$

not to the odds $\{1,3,5,\ldots\}$. So $f$ is not a bijection onto the odds. So the statement is False.""",
            r"""We have both $E\subsetneq N$ and a bijection $n\mapsto 2n$ between them. That pair of facts is exactly the standard counterexample showing finite-set size intuition fails for infinite sets. So the statement is True.""",
            r"""Many infinite subsets of $N$ are proper. The evens $E=\{2,4,6,\ldots\}$ are infinite and miss $1$. So not every infinite subset equals $N$. So the statement is False.""",
        ],
    ),
    "MATH 1.16": (
        [True, False, True, True, True],
        None,
        [
            r"""Membership asks whether the number sits on the roster

$$A=\{2,4,6,8,10,12\}$$

Yes, $6$ is listed, so $6\in A$. So the statement is True.""",
            r"""The elements of $A$ are numbers, not singletons. The object $\{6\}$ is a one-element set:

$$\{6\}\notin A$$

even though $6\in A$. (The singleton is a subset, hence sits in the power set.) So the statement is False.""",
            r"""Subsethood asks whether every member of $\{6,8\}$ sits in $A$:

$$6\in A,\qquad 8\in A$$

so

$$\{6,8\}\subseteq A$$

So the statement is True.""",
            r"""The empty set has no member that could sit outside $A$:

$$\emptyset\subseteq A$$

always. So the statement is True.""",
            r"""Total subsets: $2^{6}=64$. Proper subsets drop $A$ itself:

$$64-1=63$$

So $A$ has exactly $63$ proper subsets. So the statement is True.""",
        ],
    ),
    "MATH 1.17": (
        [True, True, False, True, True],
        r"""The set-builder $A=\{x\in\mathbb{Z}:x^{2}-5x+6=0\}$ keeps the integer solutions of the quadratic. Factoring gives

$$(x-2)(x-3)=0$$

so $x=2$ or $x=3$, both integers:

$$A=\{2,3\}.$$

$B$ is given as $\{2,3\}$. A set-builder keeps those members of the named universe that satisfy the stated condition.""",
        [
            r"""The overview recovered $A=\{2,3\}$ and $B$ is given as $\{2,3\}$. The rosters match:

$$A=B$$

So the statement is True.""",
            r"""The overview recovered $A=\{2,3\}$. The integer $3$ sits on that roster:

$$3\in A$$

So the statement is True.""",
            r"""The overview recovered $A=\{2,3\}$. The claim drops the root $3$:

$$3^{2}-5\cdot 3+6=0,\qquad 3\in\mathbb{Z}$$

so $3\in A$. Then

$$A=\{2,3\}\ne\{2\}$$

So the statement is False.""",
            r"""Two distinct integer roots were recovered:

$$A=\{2,3\}$$

$$\lvert A\rvert=2$$

That matches the claim, so the statement is True.""",
            r"""Restrict to natural numbers with the extra filter $x>2$. The candidates from the quadratic are $2$ and $3$; only $3$ satisfies $x>2$:

$$C=\{3\}$$

That matches the claim, so the statement is True.""",
        ],
    ),
    "MATH 1.18": (
        [True, True, True, True, False],
        None,
        [
            r"""Four letters mean each is in or out independently:

$$\lvert\mathcal{P}(D)\rvert=2^{4}=16$$

So the power set has $16$ elements. So the statement is True.""",
            r"""A set belongs to the power set precisely when it is a subset of $D$. Check

$$\{w,x\}\subseteq\{w,x,y,z\}$$

Yes, so

$$\{w,x\}\in\mathcal{P}(D)$$

So the statement is True.""",
            r"""Three-element subsets of a four-element set:

$$\binom{4}{3}=4$$

The four subsets are the ways to leave out exactly one letter. So the statement is True.""",
            r"""Every set is a subset of itself:

$$D\subseteq D$$

hence

$$D\in\mathcal{P}(D)$$

So the statement is True.""",
            r"""Two-element subsets:

$$\binom{4}{2}=6$$

not $5$. So the statement is False.""",
        ],
    ),
    "MATH 1.19": (
        [True, True, False, True, False],
        None,
        [
            r"""Every member of $E=\{1,2,3\}$ sits in $F=\{1,2,3,4\}$:

$$1\in F,\ 2\in F,\ 3\in F$$

so $E\subseteq F$. So the statement is True.""",
            r"""Ordinary inclusion $E\subseteq F$ holds, and the sets differ because $4\in F$ while $4\notin E$:

$$E\subsetneq F$$

So $E$ is a proper subset of $F$. So the statement is True.""",
            r"""Subsethood $F\subseteq E$ would require $4\in E$. But

$$4\notin\{1,2,3\}$$

so $F\not\subseteq E$. So the statement is False.""",
            r"""Inclusion is reflexive: every member of $E$ sits in $E$:

$$E\subseteq E$$

So the statement is True.""",
            r"""Proper inclusion also needs $E\neq E$, which is impossible:

$$E\subsetneq E$$

fails. So the statement is False.""",
        ],
    ),
    "MATH 1.20": (
        [True, True, True, False, False],
        None,
        [
            r"""Check pairwise intersections of the blocks of $\mathcal{S}$:

$$\{1,2\}\cap\{3,4\}=\emptyset$$

$$\{1,2\}\cap\{5,6\}=\emptyset$$

$$\{3,4\}\cap\{5,6\}=\emptyset$$

All three are empty, so the blocks are pairwise disjoint. So the statement is True.""",
            r"""The union of the three blocks is

$$\{1,2\}\cup\{3,4\}\cup\{5,6\}=\{1,2,3,4,5,6\}=G$$

So the union equals $G$. So the statement is True.""",
            r"""A partition needs nonempty pairwise-disjoint blocks whose union is $G$. The blocks are nonempty, pairwise disjoint (A), and cover $G$ (B). Therefore $\mathcal{S}$ partitions $G$. So the statement is True.""",
            r"""In $\mathcal{S}'$ the first two blocks overlap:

$$\{1,2\}\cap\{2,3,4\}=\{2\}\neq\emptyset$$

Pairwise disjointness fails, so $\mathcal{S}'$ is not a partition. So the statement is False.""",
            r"""Replacing $\{5,6\}$ with $\{5,6,7\}$ introduces $7\notin G$. A partition's blocks must be subsets of $G$, and the union would no longer equal $G$ alone as the ambient set. So the modified collection is not a partition of $G$. So the statement is False.""",
        ],
    ),
    "MATH 1.21": (
        [True, False, False, True, False],
        None,
        [
            r"""Every positive even integer is a natural number:

$$H=\{2,4,6,\ldots\}\subseteq\{1,2,3,\ldots\}=\mathbb{N}$$

So $H\subseteq\mathbb{N}$. So the statement is True.""",
            r"""$H$ contains infinitely many distinct elements $2,4,6,\ldots$ with no last term. An infinite listing is not a finite set. So the statement is False.""",
            r"""Equality fails because odd naturals sit in $\mathbb{N}$ but not in $H$:

$$1\in\mathbb{N},\qquad 1\notin H$$

so $H\neq\mathbb{N}$. So the statement is False.""",
            r"""Define $f:\mathbb{N}\to H$ by $f(n)=2n$. Every natural maps to a unique even, and every even $2k$ is $f(k)$:

$$f(n)=f(m)\implies 2n=2m\implies n=m$$

$$h=2k\in H\implies f(k)=h$$

so $f$ is a bijection. So the statement is True.""",
            r"""Proper inclusion $H\subsetneq\mathbb{N}$ holds, but the bijection $n\mapsto 2n$ shows

$$\lvert H\rvert=\lvert\mathbb{N}\rvert$$

"Proper subset $\Rightarrow$ strictly fewer" fails for infinite sets. So the statement is False.""",
        ],
    ),
    "MATH 1.22": (
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

Membership holds because that set appears as an element of the roster. So the statement is True.""",
            r"""Subsethood asks whether every member of $\{a\}$ sits in $K$. The only member is $a$, and $a\in K$, so

$$\{a\}\subseteq K$$

So the statement is True.""",
            r"""The singleton $\{\{a\}\}$ has one member, namely the set $\{a\}$. That member sits in $K$:

$$\{a\}\in K\implies\{\{a\}\}\subseteq K$$

So the statement is True.""",
            r"""The two listed objects $a$ and $\{a\}$ are distinct (an element versus a set containing it):

$$\lvert K\rvert=2$$

So the statement is True.""",
        ],
    ),
}


def main() -> None:
    text = load()
    for case_id, (keys, overview, bodies) in DEEP.items():
        text = apply_case(text, case_id, keys, bodies, overview)
        print(f"patched {case_id}")
    save(text)
    print(f"done: {len(DEEP)} cases")


if __name__ == "__main__":
    main()
