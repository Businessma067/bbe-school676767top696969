#!/usr/bin/env python3
"""Deepen MATH 1.01–1.15 tactical explanations to maximal step density."""

from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _ch1_patch_lib import apply_case, load, save  # noqa: E402

# case_id -> (answer_key, [5 bodies without header/closer — pack() adds them])
BATCH: dict[str, tuple[list[bool], list[str]]] = {
    "MATH 1.01": (
        [True, False, True, False, False],
        [
            r"""Intersection keeps only elements that sit in both $A$ and $B$.

$$A=\{1,2,3,4,5\}$$

$$B=\{3,4,5,6,7\}$$

Test each member of $A$:

$$1\in A$$

$$1\notin B$$

$$2\in A$$

$$2\notin B$$

$$3\in A$$

$$3\in B$$

$$4\in A$$

$$4\in B$$

$$5\in A$$

$$5\in B$$

Collect the keepers:

$$A\cap B=\{3,4,5\}$$

The claimed roster is

$$\{3,4,5\}$$

The computed roster matches the claim.""",
            r"""Union keeps every element that sits in $A$ or in $C$ (or both).

$$A=\{1,2,3,4,5\}$$

$$C=\{5,6,7,8,9\}$$

Members coming from $A$:

$$1\in A\cup C$$

$$2\in A\cup C$$

$$3\in A\cup C$$

$$4\in A\cup C$$

$$5\in A\cup C$$

Members that $C$ adds beyond $A$:

$$6\in C$$

$$6\notin A$$

$$7\in C$$

$$7\notin A$$

$$8\in C$$

$$8\notin A$$

$$9\in C$$

$$9\notin A$$

So the full union is

$$A\cup C=\{1,2,3,4,5,6,7,8,9\}$$

The claim lists

$$\{1,2,3,4,5,6,7,8\}$$

It drops $9$, but $9\in C$, so the claim is incomplete.""",
            r"""An element of $(A\cap B)\cap C$ must sit in all three lists. First form the pairwise intersection:

$$A=\{1,2,3,4,5\}$$

$$B=\{3,4,5,6,7\}$$

$$A\cap B=\{3,4,5\}$$

Now test those three against $C=\{5,6,7,8,9\}$:

$$3\notin C$$

$$4\notin C$$

$$5\in C$$

Therefore

$$(A\cap B)\cap C=\{5\}$$

The claim is that same singleton.""",
            r"""Difference $A\setminus C$ keeps members of $A$ that miss $C$.

$$A=\{1,2,3,4,5\}$$

$$C=\{5,6,7,8,9\}$$

$$1\in A$$

$$1\notin C$$

$$2\in A$$

$$2\notin C$$

$$3\in A$$

$$3\notin C$$

$$4\in A$$

$$4\notin C$$

$$5\in A$$

$$5\in C$$

So only $5$ is removed:

$$A\setminus C=\{1,2,3,4\}$$

The claim lists

$$\{1,2,3\}$$

It drops $4$, but $4\in A$ and $4\notin C$.""",
            r"""Disjointness requires an empty intersection. List the two sets:

$$B=\{3,4,5,6,7\}$$

$$C=\{5,6,7,8,9\}$$

Test shared membership:

$$5\in B$$

$$5\in C$$

$$6\in B$$

$$6\in C$$

$$7\in B$$

$$7\in C$$

$$B\cap C=\{5,6,7\}$$

The intersection is nonempty, so $B$ and $C$ are not disjoint.""",
        ],
    ),
    "MATH 1.02": (
        [True, True, False, True, False],
        [
            r"""Recover $A$ from the set-builder. Solve the defining equation in the integers:

$$x^{2}=9$$

$$x^{2}-9=0$$

$$(x-3)(x+3)=0$$

$$x-3=0\quad\text{or}\quad x+3=0$$

$$x=3\quad\text{or}\quad x=-3$$

Both roots are integers, so

$$A=\{-3,3\}$$

$B$ is given as $\{3,-3\}$. Compare membership both ways:

$$-3\in B$$

$$3\in B$$

$$3\in A$$

$$-3\in A$$

Sets ignore order, so $A=B$.""",
            r"""From the set-builder,

$$x^{2}=9$$

gives the integer roots $\pm 3$, so

$$A=\{-3,3\}$$

Test the claimed element:

$$3^{2}=9$$

$$3\in Z$$

$$3\in A$$

Alternatively, read the roster directly:

$$3\in\{-3,3\}$$""",
            r"""From the set-builder the integer roots are $\pm 3$:

$$(-3)^{2}=9$$

$$-3\in Z$$

$$3^{2}=9$$

$$3\in Z$$

$$A=\{-3,3\}$$

The claim reprints $A$ as $\{3\}$ only. Then

$$A=\{-3,3\}$$

$$\{3\}=\{3\}$$

$$A\neq\{3\}$$

because $-3$ sits in $A$ but not in $\{3\}$.""",
            r"""Cardinality counts distinct members. The set-builder yields

$$A=\{-3,3\}$$

Those two integers are distinct:

$$-3\neq 3$$

$$|A|=2$$""",
            r"""Filter the same equation by $N=\{1,2,3,\ldots\}$ instead of $Z$. Candidates from

$$x^{2}=9$$

are still $\pm 3$, but

$$3\in N$$

$$-3\notin N$$

so the natural-number set-builder yields

$$C=\{3\}$$

The claim equates $C$ with $\{3,-3\}$. Compare:

$$C=\{3\}$$

$$\{3,-3\}=\{-3,3\}$$

$$C\neq\{3,-3\}$$""",
        ],
    ),
    "MATH 1.03": (
        [True, False, True, False, True],
        [
            r"""Here $A=\{a,b,c\}$ has three ground elements. Each may be included or omitted independently when building a subset:

$$|A|=3$$

$$|\mathcal{P}(A)|=2^{|A|}$$

$$|\mathcal{P}(A)|=2^{3}$$

$$2^{3}=8$$

The power set therefore has $8$ elements.""",
            r"""The elements of $A$ are the letters $a$, $b$, and $c$:

$$A=\{a,b,c\}$$

The object $\{a,b\}$ is a set of letters, not a letter:

$$\{a,b\}\neq a$$

$$\{a,b\}\neq b$$

$$\{a,b\}\neq c$$

$$\{a,b\}\notin A$$

It is a subset of $A$, so

$$\{a,b\}\subseteq A$$

$$\{a,b\}\in\mathcal{P}(A)$$

but that is not the claim.""",
            r"""Subsethood asks whether every member of the left-hand set sits in $A$. The empty set has no members at all, so the implication

$$\forall x\,(x\in\emptyset\Rightarrow x\in A)$$

is vacuously true. Hence

$$\emptyset\subseteq A$$""",
            r"""Proper inclusion needs ordinary inclusion plus a genuine difference:

$$X\subsetneq Y\iff(X\subseteq Y)\wedge(X\neq Y)$$

Check each half for $X=Y=A$:

$$A\subseteq A$$

$$A=A$$

$$A\neq A$$

is false. Therefore $A$ is not a proper subset of $A$.""",
            r"""Two-element subsets of a three-element set are counted by

$$\binom{3}{2}=\frac{3!}{2!\,1!}$$

$$3!=3\cdot 2\cdot 1$$

$$3!=6$$

$$2!=2\cdot 1$$

$$2!=2$$

$$1!=1$$

$$\binom{3}{2}=\frac{6}{2\cdot 1}$$

$$\binom{3}{2}=\frac{6}{2}$$

$$\binom{3}{2}=3$$

Listing them confirms the count:

$$\{a,b\}$$

$$\{a,c\}$$

$$\{b,c\}$$

Exactly three such subsets.""",
        ],
    ),
    "MATH 1.04": (
        [True, False, True, False, True],
        [
            r"""Subsethood of $\emptyset$ is vacuous: there is no witness that could sit outside $D$.

$$\forall x\,(x\in\emptyset\Rightarrow x\in D)$$

holds for every set $D$. With

$$D=\{a,b,c\}$$

we conclude

$$\emptyset\subseteq D$$""",
            r"""Membership asks whether the object itself appears on the roster of $D$:

$$D=\{a,b,c\}$$

The three members are the letters $a$, $b$, and $c$:

$$\emptyset\neq a$$

$$\emptyset\neq b$$

$$\emptyset\neq c$$

$$\emptyset\notin D$$""",
            r"""The number of subsets is the size of the power set:

$$|D|=3$$

$$|\mathcal{P}(D)|=2^{|D|}$$

$$|\mathcal{P}(D)|=2^{3}$$

$$2^{3}=8$$

So $D$ has exactly $8$ subsets.""",
            r"""Check the two claims separately. First inclusion:

$$\{a\}\subseteq D$$

because $a\in D=\{a,b,c\}$. That half is true. Next membership:

$$\{a\}\neq a$$

$$\{a\}\neq b$$

$$\{a\}\neq c$$

$$\{a\}\notin D$$

The conjunction “both are true” fails because the membership half is false.""",
            r"""Every set is a subset of itself. With $D=\{a,b,c\}$, the condition

$$\forall x\,(x\in D\Rightarrow x\in D)$$

holds for each of $a$, $b$, and $c$. Hence

$$D\subseteq D$$""",
        ],
    ),
    "MATH 1.05": (
        [True, True, False, True, True],
        [
            r"""Difference $E\setminus F$ keeps members of $E$ that miss $F$.

$$E=\{1,3,5,7\}$$

$$F=\{3,4,5,6\}$$

$$1\in E$$

$$1\notin F$$

$$3\in E$$

$$3\in F$$

$$5\in E$$

$$5\in F$$

$$7\in E$$

$$7\notin F$$

$$E\setminus F=\{1,7\}$$""",
            r"""Difference $F\setminus E$ keeps members of $F$ that miss $E$.

$$F=\{3,4,5,6\}$$

$$E=\{1,3,5,7\}$$

$$3\in F$$

$$3\in E$$

$$4\in F$$

$$4\notin E$$

$$5\in F$$

$$5\in E$$

$$6\in F$$

$$6\notin E$$

$$F\setminus E=\{4,6\}$$""",
            r"""From the previous two computations:

$$E\setminus F=\{1,7\}$$

$$F\setminus E=\{4,6\}$$

Compare the rosters:

$$1\in E\setminus F$$

$$1\notin F\setminus E$$

Already

$$E\setminus F\neq F\setminus E$$""",
            r"""Form the two differences, then unite them:

$$E\setminus F=\{1,7\}$$

$$F\setminus E=\{4,6\}$$

$$1\in(E\setminus F)\cup(F\setminus E)$$

$$7\in(E\setminus F)\cup(F\setminus E)$$

$$4\in(E\setminus F)\cup(F\setminus E)$$

$$6\in(E\setminus F)\cup(F\setminus E)$$

$$(E\setminus F)\cup(F\setminus E)=\{1,4,6,7\}$$""",
            r"""Intersect the two differences:

$$E\setminus F=\{1,7\}$$

$$F\setminus E=\{4,6\}$$

$$1\notin\{4,6\}$$

$$7\notin\{4,6\}$$

$$4\notin\{1,7\}$$

$$6\notin\{1,7\}$$

$$(E\setminus F)\cap(F\setminus E)=\emptyset$$""",
        ],
    ),
    "MATH 1.06": (
        [True, True, False, False, False],
        [
            r"""Intersection keeps elements in both $A$ and $B$.

$$A=\{2,4,6,8,10\}$$

$$B=\{3,6,9,12\}$$

$$2\in A$$

$$2\notin B$$

$$4\in A$$

$$4\notin B$$

$$6\in A$$

$$6\in B$$

$$8\in A$$

$$8\notin B$$

$$10\in A$$

$$10\notin B$$

$$A\cap B=\{6\}$$""",
            r"""Use the inclusion-exclusion count. First the three sizes:

$$|A|=5$$

$$|B|=4$$

$$|A\cap B|=1$$

because $A\cap B=\{6\}$. Then

$$|A\cup B|=|A|+|B|-|A\cap B|$$

$$|A|+|B|=5+4$$

$$5+4=9$$

$$|A\cup B|=9-1$$

$$|A\cup B|=8$$""",
            r"""Difference $C\setminus A$ keeps members of $C$ that miss $A$.

$$C=\{1,2,3,4,5\}$$

$$A=\{2,4,6,8,10\}$$

$$1\in C$$

$$1\notin A$$

$$2\in C$$

$$2\in A$$

$$3\in C$$

$$3\notin A$$

$$4\in C$$

$$4\in A$$

$$5\in C$$

$$5\notin A$$

$$C\setminus A=\{1,3,5\}$$

The claim lists $\{1,3\}$, which drops $5$.""",
            r"""Difference $B\setminus C$ keeps members of $B$ that miss $C$.

$$B=\{3,6,9,12\}$$

$$C=\{1,2,3,4,5\}$$

$$3\in B$$

$$3\in C$$

$$6\in B$$

$$6\notin C$$

$$9\in B$$

$$9\notin C$$

$$12\in B$$

$$12\notin C$$

$$B\setminus C=\{6,9,12\}$$

The claim lists $\{3,6,9,12\}$, which still includes $3$.""",
            r"""Intersection of $A$ and $C$:

$$A=\{2,4,6,8,10\}$$

$$C=\{1,2,3,4,5\}$$

$$2\in A$$

$$2\in C$$

$$4\in A$$

$$4\in C$$

$$6\in A$$

$$6\notin C$$

$$8\in A$$

$$8\notin C$$

$$10\in A$$

$$10\notin C$$

$$A\cap C=\{2,4\}$$

The claim lists $\{2,4,6\}$, which incorrectly keeps $6$.""",
        ],
    ),
    "MATH 1.07": (
        [True, True, True, False, False],
        [
            r"""Apply inclusion-exclusion with the given counts:

$$|M|=30$$

$$|E|=25$$

$$|M\cap E|=12$$

$$|M\cup E|=|M|+|E|-|M\cap E|$$

$$|M|+|E|=30+25$$

$$30+25=55$$

$$|M\cup E|=55-12$$

$$|M\cup E|=43$$""",
            r"""The cohort has $50$ students, and the previous letter gives

$$|M\cup E|=43$$

Students in neither course sit in the complement of the union:

$$|U\setminus(M\cup E)|=|U|-|M\cup E|$$

$$|U|=50$$

$$50-43=7$$""",
            r"""Only-Mathematics is Mathematics minus the overlap:

$$|M\setminus E|=|M|-|M\cap E|$$

$$|M|=30$$

$$|M\cap E|=12$$

$$30-12=18$$

$$|M\setminus E|=18$$""",
            r"""Inclusion $E\subseteq M$ would require every Economics student to also take Mathematics, so in particular

$$|E|\le|M|$$

and more strongly

$$E\cap M=E$$

$$|E\cap M|=|E|$$

But the data give

$$|E\cap M|=12$$

$$|E|=25$$

$$12\neq 25$$

so $E\not\subseteq M$.""",
            r"""Disjointness requires empty intersection:

$$|M\cap E|=0$$

The given overlap is

$$|M\cap E|=12$$

$$12\neq 0$$

so $M$ and $E$ are not disjoint.""",
        ],
    ),
    "MATH 1.08": (
        [True, True, True, False, False],
        [
            r"""Pairwise disjointness means every pairwise intersection is empty.

$$A=\{1,2,3\}$$

$$B=\{4,5,6\}$$

$$C=\{7,8,9\}$$

$$A\cap B=\emptyset$$

$$A\cap C=\emptyset$$

$$B\cap C=\emptyset$$

All three pairwise intersections are empty.""",
            r"""A partition needs pairwise disjoint nonempty blocks whose union is $U$. From the previous letter the three sets are pairwise disjoint. Their union is

$$A\cup B=\{1,2,3,4,5,6\}$$

$$A\cup B\cup C=\{1,2,3,4,5,6,7,8,9\}$$

$$U=\{1,2,\ldots,9\}$$

$$A\cup B\cup C=U$$

Each block is nonempty, so $\{A,B,C\}$ partitions $U$.""",
            r"""The triple intersection sits inside every pairwise intersection:

$$A\cap B\cap C\subseteq A\cap B$$

But

$$A\cap B=\emptyset$$

so

$$A\cap B\cap C=\emptyset$$""",
            r"""Difference $A\setminus B$ keeps members of $A$ that miss $B$:

$$A=\{1,2,3\}$$

$$B=\{4,5,6\}$$

$$1\in A$$

$$1\notin B$$

$$2\in A$$

$$2\notin B$$

$$3\in A$$

$$3\notin B$$

$$A\setminus B=\{1,2,3\}$$

$$A\setminus B\neq\emptyset$$""",
            r"""An empty intersection does not force either factor to be empty. Here

$$A\cap B=\emptyset$$

but

$$A=\{1,2,3\}$$

$$A\neq\emptyset$$

$$B=\{4,5,6\}$$

$$B\neq\emptyset$$

so the claimed implication fails.""",
        ],
    ),
    "MATH 1.09": (
        [True, True, True, True, False],
        [
            r"""The universe is $U=\{1,2,\ldots,12\}$ and

$$X=\{1,2,3,4,5,6\}$$

Complement keeps the members of $U$ that miss $X$:

$$7\notin X$$

$$8\notin X$$

$$9\notin X$$

$$10\notin X$$

$$11\notin X$$

$$12\notin X$$

$$X^{c}=\{7,8,9,10,11,12\}$$""",
            r"""First form the union:

$$X=\{1,2,3,4,5,6\}$$

$$Y=\{4,5,6,7,8,9\}$$

$$X\cup Y=\{1,2,3,4,5,6,7,8,9\}$$

Complement relative to $U=\{1,2,\ldots,12\}$:

$$10\notin X\cup Y$$

$$11\notin X\cup Y$$

$$12\notin X\cup Y$$

$$(X\cup Y)^{c}=\{10,11,12\}$$""",
            r"""Form each complement, then intersect:

$$X^{c}=\{7,8,9,10,11,12\}$$

$$Y=\{4,5,6,7,8,9\}$$

$$Y^{c}=\{1,2,3,10,11,12\}$$

Shared members:

$$10\in X^{c}$$

$$10\in Y^{c}$$

$$11\in X^{c}$$

$$11\in Y^{c}$$

$$12\in X^{c}$$

$$12\in Y^{c}$$

$$X^{c}\cap Y^{c}=\{10,11,12\}$$""",
            r"""De Morgan’s law for complements says

$$(X\cap Y)^{c}=X^{c}\cup Y^{c}$$

Verify by computing both sides. First the intersection:

$$X\cap Y=\{4,5,6\}$$

$$(X\cap Y)^{c}=\{1,2,3,7,8,9,10,11,12\}$$

From earlier,

$$X^{c}=\{7,8,9,10,11,12\}$$

$$Y^{c}=\{1,2,3,10,11,12\}$$

$$X^{c}\cup Y^{c}=\{1,2,3,7,8,9,10,11,12\}$$

The two sides match.""",
            r"""From earlier,

$$X^{c}=\{7,8,9,10,11,12\}$$

$$Y^{c}=\{1,2,3,10,11,12\}$$

Unite them:

$$1\in Y^{c}$$

$$2\in Y^{c}$$

$$3\in Y^{c}$$

$$7\in X^{c}$$

$$8\in X^{c}$$

$$9\in X^{c}$$

$$10\in X^{c}$$

$$11\in X^{c}$$

$$12\in X^{c}$$

$$X^{c}\cup Y^{c}=\{1,2,3,7,8,9,10,11,12\}$$

The claim lists $\{1,2,3,10,11,12\}$, which drops $7,8,9$.""",
        ],
    ),
    "MATH 1.10": (
        [False, True, False, True, False],
        [
            r"""First form the union:

$$A=\{1,2,3,4,5\}$$

$$B=\{4,5,6,7,8\}$$

$$A\cup B=\{1,2,3,4,5,6,7,8\}$$

Complement relative to $U=\{1,2,\ldots,10\}$:

$$9\notin A\cup B$$

$$10\notin A\cup B$$

$$(A\cup B)^{c}=\{9,10\}$$

The claim lists $\{8,9,10\}$. But

$$8\in B$$

$$8\in A\cup B$$

$$8\notin(A\cup B)^{c}$$""",
            r"""De Morgan’s law for complements states

$$(A\cap B)^{c}=A^{c}\cup B^{c}$$

Compute both sides. Intersection:

$$A\cap B=\{4,5\}$$

$$(A\cap B)^{c}=\{1,2,3,6,7,8,9,10\}$$

Complements:

$$A^{c}=\{6,7,8,9,10\}$$

$$B^{c}=\{1,2,3,9,10\}$$

$$A^{c}\cup B^{c}=\{1,2,3,6,7,8,9,10\}$$

The two sides agree.""",
            r"""Form the complements, then intersect:

$$A^{c}=\{6,7,8,9,10\}$$

$$B^{c}=\{1,2,3,9,10\}$$

$$6\in A^{c}$$

$$6\notin B^{c}$$

$$7\in A^{c}$$

$$7\notin B^{c}$$

$$8\in A^{c}$$

$$8\notin B^{c}$$

$$9\in A^{c}$$

$$9\in B^{c}$$

$$10\in A^{c}$$

$$10\in B^{c}$$

$$A^{c}\cap B^{c}=\{9,10\}$$

The claim lists $\{6,7,8,9,10\}$, which is $A^{c}$ rather than the intersection.""",
            r"""Intersection first:

$$A\cap B=\{4,5\}$$

Complement in $U=\{1,2,\ldots,10\}$ removes $4$ and $5$:

$$1\notin A\cap B$$

$$2\notin A\cap B$$

$$3\notin A\cap B$$

$$6\notin A\cap B$$

$$7\notin A\cap B$$

$$8\notin A\cap B$$

$$9\notin A\cap B$$

$$10\notin A\cap B$$

$$(A\cap B)^{c}=\{1,2,3,6,7,8,9,10\}$$""",
            r"""Unite the complements:

$$A^{c}=\{6,7,8,9,10\}$$

$$B^{c}=\{1,2,3,9,10\}$$

$$1\in B^{c}$$

$$2\in B^{c}$$

$$3\in B^{c}$$

$$6\in A^{c}$$

$$7\in A^{c}$$

$$8\in A^{c}$$

$$9\in A^{c}$$

$$10\in A^{c}$$

$$A^{c}\cup B^{c}=\{1,2,3,6,7,8,9,10\}$$

The claim lists $\{1,2,3,9,10\}$, which drops $6,7,8$.""",
        ],
    ),
    "MATH 1.11": (
        [True, False, False, False, True],
        [
            r"""Check the three partition axioms for

$$P=\{\{1,2\},\{3,4\},\{5,6\}\}$$

on $A=\{1,2,3,4,5,6\}$. Nonempty blocks:

$$\{1,2\}\neq\emptyset$$

$$\{3,4\}\neq\emptyset$$

$$\{5,6\}\neq\emptyset$$

Pairwise disjoint:

$$\{1,2\}\cap\{3,4\}=\emptyset$$

$$\{1,2\}\cap\{5,6\}=\emptyset$$

$$\{3,4\}\cap\{5,6\}=\emptyset$$

Union covers $A$:

$$\{1,2\}\cup\{3,4\}=\{1,2,3,4\}$$

$$\{1,2,3,4\}\cup\{5,6\}=\{1,2,3,4,5,6\}$$

$$\{1,2\}\cup\{3,4\}\cup\{5,6\}=A$$

All three axioms hold.""",
            r"""The claim says every partition must have exactly $n$ blocks when $|A|=n$. But the partition

$$P=\{\{1,2\},\{3,4\},\{5,6\}\}$$

of a $6$-element set has only $3$ blocks. Another valid partition is the single-block collection

$$\{A\}$$

which has $1$ block, not $6$. So the number of blocks need not equal $|A|$.""",
            r"""For

$$Q=\{\{1,2,3\},\{3,4,5,6\}\}$$

check pairwise disjointness:

$$\{1,2,3\}\cap\{3,4,5,6\}=\{3\}$$

$$\{3\}\neq\emptyset$$

The blocks share $3$, so $Q$ is not a partition.""",
            r"""For

$$R=\{\{1,2\},\{3,4\},\{5\}\}$$

the union is

$$\{1,2\}\cup\{3,4\}=\{1,2,3,4\}$$

$$\{1,2,3,4\}\cup\{5\}=\{1,2,3,4,5\}$$

But

$$A=\{1,2,3,4,5,6\}$$

$$6\notin\{1,2,3,4,5\}$$

so the union misses $6$ and $R$ is not a partition.""",
            r"""For $n\ge 2$, at least two partitions exist. One is the single block

$$\{A\}$$

Another splits off one element:

$$\{\{a\},A\setminus\{a\}\}$$

for any fixed $a\in A$. These are distinct because one has $1$ block and the other has $2$. Hence more than one partition exists.""",
        ],
    ),
    "MATH 1.12": (
        [True, True, False, True, False],
        [
            r"""The number of subsets equals the power-set size:

$$|A|=5$$

$$|\mathcal{P}(A)|=2^{|A|}$$

$$|\mathcal{P}(A)|=2^{5}$$

$$2^{5}=32$$""",
            r"""Proper subsets are all subsets except $A$ itself:

$$|\mathcal{P}(A)|=2^{5}$$

$$2^{5}=32$$

$$|\mathcal{P}(A)|-1=32-1$$

$$32-1=31$$""",
            r"""Subsets of size $4$ are counted by

$$\binom{5}{4}=\frac{5!}{4!\,1!}$$

$$5!=5\cdot 4\cdot 3\cdot 2\cdot 1$$

$$5!=120$$

$$4!=24$$

$$1!=1$$

$$\binom{5}{4}=\frac{120}{24\cdot 1}$$

$$\binom{5}{4}=\frac{120}{24}$$

$$\binom{5}{4}=5$$

The claim says $10$, but the count is $5$.""",
            r"""Nonempty subsets exclude only $\emptyset$:

$$|\mathcal{P}(A)|=32$$

$$|\mathcal{P}(A)|-1=32-1$$

$$32-1=31$$""",
            r"""Even-sized subsets have size $0$, $2$, or $4$:

$$\binom{5}{0}=1$$

$$\binom{5}{2}=\frac{5\cdot 4}{2\cdot 1}$$

$$\frac{5\cdot 4}{2\cdot 1}=\frac{20}{2}$$

$$\frac{20}{2}=10$$

$$\binom{5}{4}=5$$

Sum:

$$1+10=11$$

$$11+5=16$$

The even-sized count is $16$, not $15$.""",
        ],
    ),
    "MATH 1.13": (
        [True, False, True, False, False],
        [
            r"""Write the interval conditions:

$$A=(0,10]\iff 0<x\le 10$$

$$B=[5,15)\iff 5\le x<15$$

Membership in both requires both inequalities:

$$0<x\le 10$$

$$5\le x<15$$

The stricter lower bound is $5$, and the stricter upper bound is $10$:

$$5\le x\le 10$$

$$A\cap B=[5,10]$$""",
            r"""Union membership requires at least one of

$$0<x\le 10$$

$$5\le x<15$$

The leftmost points come from $A$, so $x>0$. The rightmost points come from $B$, so $x<15$. At the right endpoint of $A$:

$$10\in A$$

$$10<15$$

so $10$ is included. But $15$ itself fails $x<15$, and points with $x=15$ are excluded. Also $A$ never includes $0$. Hence

$$A\cup B=(0,15)$$

The claim writes $(0,15]$, which incorrectly includes $15$.""",
            r"""Test $x=10$ against both intervals:

$$0<10\le 10$$

so $10\in A$. And

$$5\le 10<15$$

so $10\in B$. Therefore

$$10\in A\cap B$$""",
            r"""Difference $A\setminus B$ needs $x\in A$ and $x\notin B$. Test $x=5$:

$$5\le 5<15$$

so $5\in B$. Therefore

$$5\notin A\setminus B$$

even though $5\in A$ because $0<5\le 10$.""",
            r"""The implication $x\in A\Rightarrow x\in B$ fails if some point of $A$ misses $B$. Take

$$x=1$$

$$0<1\le 10$$

so $1\in A$. But

$$5\le 1<15$$

is false, so $1\notin B$. The implication does not hold for all $x$.""",
        ],
    ),
    "MATH 1.14": (
        [False, True, False, False, False],
        [
            r"""Three-set inclusion-exclusion:

$$|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|B\cap C|-|A\cap C|+|A\cap B\cap C|$$

Plug in the survey counts one term at a time:

$$|A|=80$$

$$|B|=70$$

$$|C|=60$$

$$|A|+|B|=80+70$$

$$80+70=150$$

$$150+|C|=150+60$$

$$150+60=210$$

$$|A\cap B|=30$$

$$210-30=180$$

$$|B\cap C|=25$$

$$180-25=155$$

$$|A\cap C|=20$$

$$155-20=135$$

$$|A\cap B\cap C|=10$$

$$135+10=145$$

$$|A\cup B\cup C|=145$$

The claim says $155$, which is not the computed value.""",
            r"""From the previous letter,

$$|A\cup B\cup C|=145$$

Tourists outside all three museums:

$$150-|A\cup B\cup C|=150-145$$

$$150-145=5$$""",
            r"""Exactly $A$ and $B$ but not $C$ is the pairwise overlap minus the triple:

$$|A\cap B\setminus C|=|A\cap B|-|A\cap B\cap C|$$

$$|A\cap B|=30$$

$$|A\cap B\cap C|=10$$

$$30-10=20$$

The claim says $30$, which forgets to remove the triple overlap.""",
            r"""Only Museum A excludes visitors who also saw $B$ or $C$. The correct count is

$$|A\setminus(B\cup C)|=|A|-|A\cap B|-|A\cap C|+|A\cap B\cap C|$$

because the triple was subtracted twice in the two pairwise terms:

$$|A|=80$$

$$|A\cap B|=30$$

$$80-30=50$$

$$|A\cap C|=20$$

$$50-20=30$$

$$|A\cap B\cap C|=10$$

$$30+10=40$$

The claim’s arithmetic $80-30-20=30$ omits the $+$ triple correction, so it is wrong.""",
            r"""At least two museums means the three “exactly-two” regions plus the triple. Exactly-two counts:

$$|A\cap B\setminus C|=30-10$$

$$30-10=20$$

$$|B\cap C\setminus A|=25-10$$

$$25-10=15$$

$$|A\cap C\setminus B|=20-10$$

$$20-10=10$$

$$|A\cap B\cap C|=10$$

Sum:

$$20+15=35$$

$$35+10=45$$

$$45+10=55$$

The claim says $65$, which is too large.""",
        ],
    ),
    "MATH 1.15": (
        [True, False, False, True, False],
        [
            r"""Every even natural is a natural number:

$$E=\{2,4,6,\ldots\}$$

$$N=\{1,2,3,\ldots\}$$

$$E\subseteq N$$

Properness needs a witness in $N\setminus E$. Take

$$1\in N$$

$$1\notin E$$

so

$$E\neq N$$

$$E\subsetneq N$$""",
            r"""For infinite sets, a proper subset can still be equinumerous with the whole set. The map

$$f:N\to E,\qquad f(n)=2n$$

is a bijection:

$$f(1)=2$$

$$f(2)=4$$

$$f(3)=6$$

and every even arises uniquely. Hence

$$|E|=|N|$$

even though $E\subsetneq N$. The finite-set slogan “proper subset $\Rightarrow$ strictly smaller” fails here.""",
            r"""The rule $f(n)=2n$ sends naturals to even naturals:

$$f(1)=2$$

$$f(2)=4$$

$$f(3)=6$$

$$f(N)=E=\{2,4,6,\ldots\}$$

The odd naturals are $\{1,3,5,\ldots\}$, which is not $E$. So $f$ is a bijection $N\to E$, not a bijection onto the odds.""",
            r"""We already have

$$E\subsetneq N$$

and a bijection $n\mapsto 2n$ showing

$$|E|=|N|$$

That pair of facts is exactly a counterexample to the finite-set intuition that a proper subset must be strictly smaller.""",
            r"""The even numbers form an infinite subset of $N$:

$$E=\{2,4,6,\ldots\}$$

$$E\subseteq N$$

$$E\neq N$$

because $1\notin E$. So an infinite subset need not equal $N$.""",
        ],
    ),
}


def main() -> None:
    text = load()
    for case_id, (keys, bodies) in BATCH.items():
        text = apply_case(text, case_id, keys, bodies)
        print("patched", case_id)
    save(text)
    print("wrote", len(BATCH), "cases")


if __name__ == "__main__":
    main()
