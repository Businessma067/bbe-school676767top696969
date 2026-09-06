#!/usr/bin/env python3
"""Deepen MATH 1.16–1.30 tactical explanations to maximal step density."""

from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _ch1_patch_lib import apply_case, load, save  # noqa: E402

BATCH: dict[str, tuple[list[bool], list[str]]] = {
    "MATH 1.16": (
        [True, False, True, True, True],
        [
            r"""Membership asks whether the object sits on the roster.

$$A=\{2,4,6,8,10,12\}$$

$$6\in\{2,4,6,8,10,12\}$$

$$6\in A$$""",
            r"""The singleton $\{6\}$ is a set, not the number $6$:

$$\{6\}\neq 2$$

$$\{6\}\neq 4$$

$$\{6\}\neq 6$$

$$\{6\}\neq 8$$

$$\{6\}\neq 10$$

$$\{6\}\neq 12$$

$$\{6\}\notin A$$""",
            r"""Subsethood asks whether every member of $\{6,8\}$ sits in $A$:

$$6\in A$$

$$8\in A$$

$$\{6,8\}\subseteq A$$""",
            r"""The empty set has no members that could sit outside $A$:

$$\forall x\,(x\in\emptyset\Rightarrow x\in A)$$

$$\emptyset\subseteq A$$""",
            r"""Proper subsets are all subsets except $A$ itself:

$$|A|=6$$

$$|\mathcal{P}(A)|=2^{|A|}$$

$$|\mathcal{P}(A)|=2^{6}$$

$$2^{6}=64$$

$$|\mathcal{P}(A)|-1=64-1$$

$$64-1=63$$""",
        ],
    ),
    "MATH 1.17": (
        [True, True, False, True, True],
        [
            r"""Solve the quadratic over the integers:

$$x^{2}-5x+6=0$$

$$(x-2)(x-3)=0$$

$$x-2=0$$

$$x=2$$

or

$$x-3=0$$

$$x=3$$

Both roots are integers, so

$$A=\{2,3\}$$

$B$ is given as $\{2,3\}$. Compare membership:

$$2\in B$$

$$3\in B$$

$$2\in A$$

$$3\in A$$

$$A=B$$""",
            r"""From the factorization,

$$(x-2)(x-3)=0$$

one root is $x=3$. Check directly:

$$3^{2}=9$$

$$5\cdot 3=15$$

$$9-15=-6$$

$$-6+6=0$$

$$3\in\mathbb{Z}$$

$$3\in A$$""",
            r"""Both roots belong in $A$:

$$2^{2}-5\cdot 2+6=4-10+6$$

$$4-10=-6$$

$$-6+6=0$$

$$3^{2}-5\cdot 3+6=9-15+6$$

$$9-15=-6$$

$$-6+6=0$$

$$A=\{2,3\}$$

The claim reprints $A$ as $\{2\}$ only:

$$A\neq\{2\}$$""",
            r"""The two distinct integer roots give

$$A=\{2,3\}$$

$$2\neq 3$$

$$|A|=2$$""",
            r"""Restrict to natural numbers with $x>2$:

$$x^{2}-5x+6=0$$

still yields candidates $2$ and $3$. The extra filter $x>2$ drops $2$:

$$2>2$$

is false, while

$$3>2$$

holds and $3\in\mathbb{N}$. Hence

$$C=\{3\}$$""",
        ],
    ),
    "MATH 1.18": (
        [True, True, True, True, False],
        [
            r"""Power-set size for a four-element ground set:

$$|D|=4$$

$$|\mathcal{P}(D)|=2^{|D|}$$

$$|\mathcal{P}(D)|=2^{4}$$

$$2^{4}=16$$""",
            r"""$\{w,x\}$ is a subset of $D=\{w,x,y,z\}$:

$$w\in D$$

$$x\in D$$

$$\{w,x\}\subseteq D$$

Every subset is an element of the power set:

$$\{w,x\}\in\mathcal{P}(D)$$""",
            r"""Three-element subsets are counted by

$$\binom{4}{3}=\frac{4!}{3!\,1!}$$

$$4!=4\cdot 3\cdot 2\cdot 1$$

$$4!=24$$

$$3!=6$$

$$1!=1$$

$$\binom{4}{3}=\frac{24}{6\cdot 1}$$

$$\binom{4}{3}=\frac{24}{6}$$

$$\binom{4}{3}=4$$""",
            r"""Every set is a subset of itself:

$$D\subseteq D$$

Therefore

$$D\in\mathcal{P}(D)$$""",
            r"""Two-element subsets are counted by

$$\binom{4}{2}=\frac{4\cdot 3}{2\cdot 1}$$

$$4\cdot 3=12$$

$$2\cdot 1=2$$

$$\frac{12}{2}=6$$

$$\binom{4}{2}=6$$

The claim says $5$, which is not the count.""",
        ],
    ),
    "MATH 1.19": (
        [True, True, False, True, False],
        [
            r"""Check each member of $E$ against $F$:

$$E=\{1,2,3\}$$

$$F=\{1,2,3,4\}$$

$$1\in F$$

$$2\in F$$

$$3\in F$$

$$E\subseteq F$$""",
            r"""Ordinary inclusion holds from the previous letter:

$$E\subseteq F$$

A witness for properness is

$$4\in F$$

$$4\notin E$$

$$E\neq F$$

$$E\subsetneq F$$""",
            r"""Inclusion $F\subseteq E$ would require every member of $F$ to sit in $E$. But

$$4\in F$$

$$4\notin E$$

$$F\not\subseteq E$$""",
            r"""Every set is a subset of itself:

$$\forall x\,(x\in E\Rightarrow x\in E)$$

$$E\subseteq E$$""",
            r"""Proper inclusion also needs inequality:

$$E\subseteq E$$

$$E=E$$

$$E\neq E$$

is false. Therefore

$$E\not\subsetneq E$$""",
        ],
    ),
    "MATH 1.20": (
        [True, True, True, False, False],
        [
            r"""The blocks are $\{1,2\}$, $\{3,4\}$, and $\{5,6\}$. Pairwise intersections:

$$\{1,2\}\cap\{3,4\}=\emptyset$$

$$\{1,2\}\cap\{5,6\}=\emptyset$$

$$\{3,4\}\cap\{5,6\}=\emptyset$$

All three are empty, so the blocks are pairwise disjoint.""",
            r"""Unite the blocks step by step:

$$\{1,2\}\cup\{3,4\}=\{1,2,3,4\}$$

$$\{1,2,3,4\}\cup\{5,6\}=\{1,2,3,4,5,6\}$$

$$G=\{1,2,3,4,5,6\}$$

$$\{1,2\}\cup\{3,4\}\cup\{5,6\}=G$$""",
            r"""A partition needs nonempty pairwise-disjoint blocks whose union is the ground set. From the previous two letters:

- each block is nonempty,
- the blocks are pairwise disjoint,
- the union equals $G$.

Hence $\mathcal{S}$ is a partition of $G$.""",
            r"""For $\mathcal{S}'=\{\{1,2\},\{2,3,4\},\{5,6\}\}$ check the first two blocks:

$$\{1,2\}\cap\{2,3,4\}=\{2\}$$

$$\{2\}\neq\emptyset$$

The blocks are not pairwise disjoint, so $\mathcal{S}'$ is not a partition.""",
            r"""Replacing $\{5,6\}$ by $\{5,6,7\}$ produces a block containing $7$. But

$$G=\{1,2,3,4,5,6\}$$

$$7\notin G$$

A partition of $G$ cannot contain an element outside $G$. The modified collection is not a partition of $G$.""",
        ],
    ),
    "MATH 1.21": (
        [True, False, False, True, False],
        [
            r"""Every positive even integer is a natural number:

$$H=\{2,4,6,8,\ldots\}$$

$$H\subseteq\mathbb{N}$$""",
            r"""$H$ has no largest element and continues indefinitely:

$$2\in H$$

$$4\in H$$

$$6\in H$$

and so on. An infinite listing cannot be a finite set, so $H$ is infinite.""",
            r"""Equality of sets needs matching membership. Take

$$1\in\mathbb{N}$$

$$1\notin H$$

$$H\neq\mathbb{N}$$""",
            r"""Define $f:\mathbb{N}\to H$ by $f(n)=2n$. Check the first few values:

$$f(1)=2$$

$$f(2)=4$$

$$f(3)=6$$

Every even arises uniquely as $2n$ for $n\in\mathbb{N}$, so $f$ is a bijection.""",
            r"""Although $H\subsetneq\mathbb{N}$, the bijection $n\mapsto 2n$ shows

$$|H|=|\mathbb{N}|$$

A proper subset of an infinite set need not be strictly smaller.""",
        ],
    ),
    "MATH 1.22": (
        [True, True, True, True, True],
        [
            r"""Read the roster of $K$:

$$K=\{a,\{a\}\}$$

The first listed object is $a$ itself:

$$a\in K$$""",
            r"""The second listed object is the singleton $\{a\}$:

$$\{a\}\in K$$""",
            r"""Subsethood of $\{a\}$ needs $a\in K$, which holds from letter A. Hence

$$\{a\}\subseteq K$$""",
            r"""The set $\{\{a\}\}$ has the single member $\{a\}$. From letter B,

$$\{a\}\in K$$

so

$$\{\{a\}\}\subseteq K$$""",
            r"""The two listed objects are distinct:

$$a\neq\{a\}$$

(one is an object, the other is a set containing that object). Therefore

$$|K|=2$$""",
        ],
    ),
    "MATH 1.23": (
        [True, True, True, False, False],
        [
            r"""First form the union:

$$A=\{1,2,3,4,5\}$$

$$B=\{4,5,6,7,8\}$$

$$A\cup B=\{1,2,3,4,5,6,7,8\}$$

Complement in $U=\{1,2,\ldots,10\}$:

$$9\notin A\cup B$$

$$10\notin A\cup B$$

$$(A\cup B)^{c}=\{9,10\}$$""",
            r"""De Morgan: complement of a union is the intersection of complements. Compute both sides.

$$(A\cup B)^{c}=\{9,10\}$$

$$A^{c}=\{6,7,8,9,10\}$$

$$B^{c}=\{1,2,3,9,10\}$$

$$A^{c}\cap B^{c}=\{9,10\}$$

The two sides match.""",
            r"""De Morgan for intersections:

$$A\cap B=\{4,5\}$$

$$(A\cap B)^{c}=\{1,2,3,6,7,8,9,10\}$$

$$A^{c}=\{6,7,8,9,10\}$$

$$B^{c}=\{1,2,3,9,10\}$$

$$A^{c}\cup B^{c}=\{1,2,3,6,7,8,9,10\}$$

The two sides match.""",
            r"""Intersection keeps shared members:

$$4\in A$$

$$4\in B$$

$$5\in A$$

$$5\in B$$

$$6\in B$$

$$6\notin A$$

$$A\cap B=\{4,5\}$$

The claim lists $\{4,5,6\}$, which incorrectly keeps $6$.""",
            r"""From letter C,

$$(A\cap B)^{c}=\{1,2,3,6,7,8,9,10\}$$

The claim lists $\{1,2,3,4,5,9,10\}$. Compare:

$$4\in A\cap B$$

$$4\notin(A\cap B)^{c}$$

yet $4$ appears in the claim, so the claim is wrong.""",
        ],
    ),
    "MATH 1.24": (
        [True, True, False, False, True],
        [
            r"""Cartesian-product size multiplies the factor sizes:

$$|A|=2$$

$$|B|=3$$

$$|A\times B|=|A|\cdot|B|$$

$$|A|\cdot|B|=2\cdot 3$$

$$2\cdot 3=6$$

$$|A\times B|=6$$""",
            r"""An ordered pair $(a,b)$ sits in $A\times B$ when $a\in A$ and $b\in B$:

$$2\in A$$

$$x\in B$$

$$(2,x)\in A\times B$$""",
            r"""For $(x,2)$ the first coordinate would need to sit in $A$:

$$x\notin A$$

because $A=\{1,2\}$. Already

$$(x,2)\notin A\times B$$""",
            r"""Compare a sample pair from each product:

$$(1,x)\in A\times B$$

The first coordinate of $(1,x)$ is $1\notin B=\{x,y,z\}$, so

$$(1,x)\notin B\times A$$

Hence

$$A\times B\neq B\times A$$""",
            r"""Cardinality of the reversed product:

$$|B|=3$$

$$|A|=2$$

$$|B\times A|=|B|\cdot|A|$$

$$3\cdot 2=6$$

$$|B\times A|=6$$

From letter A,

$$|A\times B|=6$$

so the two products have equal size.""",
        ],
    ),
    "MATH 1.25": (
        [False, True, False, True, True],
        [
            r"""Write the defining inequalities:

$$A=\{x\in\mathbb{R}:1<x<5\}$$

$$B=\{x\in\mathbb{R}:x\ge 3\}$$

Take a point of $A$ below $3$:

$$x=2$$

$$1<2<5$$

so $2\in A$. But

$$2\ge 3$$

is false, so $2\notin B$. Therefore

$$A\not\subseteq B$$""",
            r"""Membership in both requires

$$1<x<5$$

$$x\ge 3$$

The stricter lower bound is $3$, and the upper bound stays strict at $5$:

$$3\le x<5$$

$$A\cap B=[3,5)$$""",
            r"""Inclusion $B\subseteq A$ fails for large $x$. Take

$$x=6$$

$$6\ge 3$$

so $6\in B$. But

$$1<6<5$$

is false, so $6\notin A$. Hence

$$B\not\subseteq A$$""",
            r"""Union membership needs at least one of

$$1<x<5$$

$$x\ge 3$$

If $x\le 1$, both fail. If $1<x<3$, the first holds. If $x\ge 3$, the second holds. Hence every $x>1$ is covered:

$$A\cup B=(1,\infty)$$""",
            r"""From letter A, the witness

$$x=2$$

satisfies

$$1<2<5$$

$$2\in A$$

$$2\notin B$$

so such a real exists.""",
        ],
    ),
    "MATH 1.26": (
        [True, False, False, True, True],
        [
            r"""Compute each difference, then unite:

$$A=\{1,2,3,4\}$$

$$B=\{3,4,5,6\}$$

$$1\in A$$

$$1\notin B$$

$$2\in A$$

$$2\notin B$$

$$3\in A$$

$$3\in B$$

$$4\in A$$

$$4\in B$$

$$A\setminus B=\{1,2\}$$

$$5\in B$$

$$5\notin A$$

$$6\in B$$

$$6\notin A$$

$$B\setminus A=\{5,6\}$$

$$A\triangle B=\{1,2,5,6\}$$""",
            r"""Symmetric difference is defined with a union of differences, not an intersection:

$$A\triangle B=(A\setminus B)\cup(B\setminus A)$$

Intersecting the differences would give

$$(A\setminus B)\cap(B\setminus A)=\emptyset$$

always, which is not the symmetric difference. The claimed rewrite is false.""",
            r"""The intersection and the symmetric difference are disjoint by construction. Here

$$A\cap B=\{3,4\}$$

$$A\triangle B=\{1,2,5,6\}$$

$$3\notin A\triangle B$$

so

$$A\cap B\not\subseteq A\triangle B$$""",
            r"""If $A\cap B=\emptyset$, then

$$A\setminus B=A$$

$$B\setminus A=B$$

$$A\triangle B=A\cup B$$""",
            r"""Count with the formula. First the ingredients:

$$|A|=4$$

$$|B|=4$$

$$|A\cap B|=2$$

$$2\cdot|A\cap B|=2\cdot 2$$

$$2\cdot 2=4$$

$$|A|+|B|=4+4$$

$$4+4=8$$

$$|A\triangle B|=8-4$$

$$8-4=4$$

Alternatively from the roster $\{1,2,5,6\}$:

$$|A\triangle B|=4$$

The identity holds.""",
        ],
    ),
    "MATH 1.27": (
        [True, False, True, False, True],
        [
            r"""Coverage assignments are ordered pairs from a $5$-element set times an $8$-element set:

$$|\mathrm{Reps}|=5$$

$$|\mathrm{Accounts}|=8$$

$$|\mathrm{Reps}\times\mathrm{Accounts}|=|\mathrm{Reps}|\cdot|\mathrm{Accounts}|$$

$$5\cdot 8=40$$""",
            r"""Ordered pairs care about order. The two pairs

$$(\mathrm{Maria},\mathrm{Account\ 3})$$

$$(\mathrm{Account\ 3},\mathrm{Maria})$$

have swapped coordinates, so they are different ordered pairs (and only the first has the correct types for $\mathrm{Reps}\times\mathrm{Accounts}$).""",
            r"""If there are $0$ accounts, the product size is

$$|\mathrm{Reps}|\cdot 0=0$$

for any finite number of reps. No ordered pairs exist.""",
            r"""Membership $(a,b)\in X\times Y$ means $a\in X$ and $b\in Y$. For

$$(\mathrm{Maria},\mathrm{Account\ 3})\in\mathrm{Reps}\times\mathrm{Accounts}$$

we need

$$\mathrm{Maria}\in\mathrm{Reps}$$

$$\mathrm{Account\ 3}\in\mathrm{Accounts}$$

The claim swaps the two memberships, so it is false.""",
            r"""With $6$ reps and $8$ accounts:

$$6\cdot 8=48$$

$$|\mathrm{Reps}\times\mathrm{Accounts}|=48$$""",
        ],
    ),
    "MATH 1.28": (
        [True, False, False, False, True],
        [
            r"""Rewrite $A$ from the quadratic inequality:

$$T^{2}<16$$

$$|T|<4$$

$$-4<T<4$$

$$A=(-4,4)$$

And

$$B=[-1,\infty)$$

Intersection requires both:

$$-4<T<4$$

$$T\ge -1$$

The stricter lower bound is $-1$, and the upper bound stays strict:

$$-1\le T<4$$

$$A\cap B=[-1,4)$$""",
            r"""Test $T=4$ against $A$:

$$4^{2}=16$$

$$16<16$$

is false, so $4\notin A$. Already

$$4\notin A\cap B$$""",
            r"""The complement of the open interval $A=(-4,4)$ includes the endpoints:

$$A^{c}=(-\infty,-4]\cup[4,\infty)$$

The claim writes $T<-4$ or $T>4$, which is

$$(-\infty,-4)\cup(4,\infty)$$

That drops $T=-4$ and $T=4$, so the claim is false.""",
            r"""Union of $A=(-4,4)$ and $B=[-1,\infty)$:

$$A\cup B=(-4,\infty)$$

A witness outside the union is

$$T=-5$$

$$-5\notin A$$

$$-5\notin B$$

$$A\cup B\neq\mathbb{R}$$""",
            r"""Frost-safe but not irrigating means $T\in A\setminus B$:

$$A\setminus B=(-4,-1)$$

Pick

$$T=-2$$

$$-4<-2<4$$

so $-2\in A$. And

$$-2\ge -1$$

is false, so $-2\notin B$. Such a temperature exists.""",
        ],
    ),
    "MATH 1.29": (
        [False, True, False, True, False],
        [
            r"""Inclusion-exclusion for two sets:

$$|A\cup B|=|A|+|B|-|A\cap B|$$

$$|A|=120$$

$$|B|=90$$

$$|A|+|B|=120+90$$

$$120+90=210$$

$$|A\cap B|=50$$

$$210-50=160$$

$$|A\cup B|=160$$

The claim says $170$, which is not the computed value.""",
            r"""Customers liking neither product:

$$|U|-|A\cup B|=200-160$$

$$200-160=40$$""",
            r"""Only Product A is $A$ minus the overlap:

$$|A\setminus B|=|A|-|A\cap B|$$

$$120-50=70$$

$$|A\setminus B|=70$$

The claim says $90$, which is wrong.""",
            r"""Every element of an intersection sits in each factor:

$$A\cap B\subseteq A$$

by the definition of intersection.""",
            r"""The excess

$$|A|+|B|-|U|=120+90-200$$

$$210-200=10$$

is only a lower bound on $|A\cap B|$: inclusion-exclusion forces

$$|A\cap B|\ge 10$$

but larger overlaps (such as the given $50$) are also possible. The arithmetic does not prove that the overlap is exactly $10$.""",
        ],
    ),
    "MATH 1.30": (
        [True, True, True, False, True],
        [
            r"""Unite $A$ and $B$:

$$A=\{1,2,3,4\}$$

$$B=\{3,4,5,6\}$$

$$1\in A\cup B$$

$$2\in A\cup B$$

$$3\in A\cup B$$

$$4\in A\cup B$$

$$5\in A\cup B$$

$$6\in A\cup B$$

$$A\cup B=\{1,2,3,4,5,6\}$$""",
            r"""Shared members:

$$3\in A$$

$$3\in B$$

$$4\in A$$

$$4\in B$$

$$1\in A$$

$$1\notin B$$

$$2\in A$$

$$2\notin B$$

$$A\cap B=\{3,4\}$$""",
            r"""Difference keeps members of $A$ that miss $B$:

$$1\in A$$

$$1\notin B$$

$$2\in A$$

$$2\notin B$$

$$3\in A$$

$$3\in B$$

$$4\in A$$

$$4\in B$$

$$A\setminus B=\{1,2\}$$""",
            r"""Compute the opposite difference:

$$5\in B$$

$$5\notin A$$

$$6\in B$$

$$6\notin A$$

$$B\setminus A=\{5,6\}$$

From letter C,

$$A\setminus B=\{1,2\}$$

$$\{5,6\}\neq\{1,2\}$$

so the two differences are unequal.""",
            r"""Disjointness needs empty intersection:

$$A=\{1,2,3,4\}$$

$$C=\{7,8,9\}$$

$$1\notin C$$

$$2\notin C$$

$$3\notin C$$

$$4\notin C$$

$$A\cap C=\emptyset$$""",
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
