/**
 * Chapter 1 — Logic (subsections 1.1-1.5).
 * Every task is sourced from LOGIC.pdf, except a small proportional set of new
 * fillers (same abstract set-theory / logic style) added where the source
 * material was thin (mostly 1.1 and 1.2). Explanations follow the Ch11 tutorial
 * style: solution_overview gives the shared setup once; tactical_explanations
 * carry the per-statement (A-E) reasoning, with no duplication between the two.
 */

import type { MathTask } from "@/data/math-chapters";
import ch1Exam from "@/data/math-ch1-exam.json";

export const MATH_CH1_SUBSECTIONS = [
  {
    id: "1.1",
    title: "Sets: Elements, Subsets & Power Sets",
  },
  {
    id: "1.2",
    title: "Set Operations, Complements & Counting",
  },
  {
    id: "1.3",
    title: "Propositional Logic & Implications",
  },
  {
    id: "1.4",
    title: "Quantifiers, Validity & Deduction",
  },
  {
    id: "1.5",
    title: "Exam-style tasks",
  },
] as const;

const MATH_CH1_CORE: MathTask[] = [
  {
    id: `math-1-1`,
    case_id: `MATH 1.01`,
    title: `Basic operations on explicit sets`,
    subsection: `1.1`,
    context: `Let $A = \\{1, 2, 3, 4, 5\\}$, $B = \\{3, 4, 5, 6, 7\\}$, and $C = \\{5, 6, 7, 8, 9\\}$.`,
    statements: [
      `$A \\cap B = \\{3, 4, 5\\}$.`,
      `$A \\cup C = \\{1, 2, 3, 4, 5, 6, 7, 8\\}$.`,
      `$(A \\cap B) \\cap C = \\{5\\}$.`,
      `$A \\setminus C = \\{1, 2, 3\\}$.`,
      `B and C are disjoint sets.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Intersection keeps only the elements that sit in both sets. Walk the roster of $A$ and keep a number only when it also sits in $B$:

$$1\\in A,\\ 1\\notin B$$

$$2\\in A,\\ 2\\notin B$$

$$3\\in A,\\ 3\\in B$$

$$4\\in A,\\ 4\\in B$$

$$5\\in A,\\ 5\\in B$$

Collecting the keepers:

$$A\\cap B=\\{3,4,5\\}$$

That matches the claimed roster, so the statement is True.`,
      `**B.** → False

Union keeps every element that sits in $A$ or in $C$ (or both). Start from $A$ and attach whatever $C$ adds:

$$A=\\{1,2,3,4,5\\}$$

$$C=\\{5,6,7,8,9\\}$$

$$A\\cup C=\\{1,2,3,4,5,6,7,8,9\\}$$

The claim stops at $8$ and drops $9$. Since $9\\in C$, the claimed roster is incomplete, so the statement is False.`,
      `**C.** → True

An element of $(A\\cap B)\\cap C$ must sit in all three lists. First form the pairwise intersection:

$$A\\cap B=\\{3,4,5\\}$$

Now test those three against $C$:

$$3\\notin C,\\quad 4\\notin C,\\quad 5\\in C$$

$$(A\\cap B)\\cap C=\\{5\\}$$

The claim is that same singleton, so the statement is True.`,
      `**D.** → False

Difference $A\\setminus C$ keeps members of $A$ that miss $C$. Check each member of $A$:

$$1\\notin C,\\quad 2\\notin C,\\quad 3\\notin C,\\quad 4\\notin C,\\quad 5\\in C$$

So only $5$ is removed:

$$A\\setminus C=\\{1,2,3,4\\}$$

The claim drops $4$, but $4\\in A$ and $4\\notin C$, so the statement is False.`,
      `**E.** → False

Disjointness requires an empty intersection. Compute the shared roster:

$$B=\\{3,4,5,6,7\\}$$

$$C=\\{5,6,7,8,9\\}$$

$$B\\cap C=\\{5,6,7\\}$$

The intersection is nonempty, so $B$ and $C$ are not disjoint.

Set beside the claim, the computed result is

$$B\\cap C=\\{5,6,7\\}$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `Let $A=\\{1,2,3,4,5\\}$, $B=\\{3,4,5,6,7\\}$, and $C=\\{5,6,7,8,9\\}$.

Intersection keeps elements that sit in both inputs. Union keeps elements that sit in at least one. Difference $X\\setminus Y$ keeps members of $X$ that miss $Y$. Two sets are disjoint when they share no elements.`,
  },
  {
    id: `math-1-2`,
    case_id: `MATH 1.02`,
    title: `Set-builder notation and equality of sets`,
    subsection: `1.1`,
    context: `Let $A = \\{x \\in Z : x^2 = 9\\}$ (Z = integers) and $B = \\{3, -3\\}$.`,
    statements: [
      `A = B.`,
      `$3 \\in A$.`,
      `$A = \\{3\\}$ (only the positive root).`,
      `$\\lvert A \\rvert = 2$.`,
      `The set $C = \\{x \\in N : x^2 = 9\\}$ (N = natural numbers) is equal to $\\{3, -3\\}$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The overview recovered the integer roots of $x^{2}=9$:

$$A=\\{-3,3\\}$$

$B$ is given as $\\{3,-3\\}$. Sets ignore order, so compare membership both ways:

$$-3\\in B,\\quad 3\\in B$$

$$3\\in A,\\quad -3\\in A$$

Hence $A=B$.

Set beside the claim, the computed result is

$$3\\in A,\\quad -3\\in A$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

The overview recovered

$$A=\\{-3,3\\}$$

Membership asks whether the object appears on that roster. Test the claimed element:

$$3\\in\\{-3,3\\}$$

Yes, so $3\\in A$.

Set beside the claim, the computed result is

$$3\\in\\{-3,3\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**C.** → False

The overview recovered $A=\\{-3,3\\}$. The claim reprints $A$ as $\\{3\\}$ only. Check the discarded root against the set-builder:

$$(-3)^{2}=9$$

$$-3\\in Z$$

so $-3$ must sit in $A$. Therefore

$$A=\\{-3,3\\}\\ne\\{3\\}$$.

Set beside the claim, the computed result is

$$A=\\{-3,3\\}\\ne\\{3\\}$$

which is not what the statement asserts.

So the statement is False.`,
      `**D.** → True

Cardinality counts distinct members. The overview recovered

$$A=\\{-3,3\\}$$

Those two integers are distinct, so

$$\\lvert A\\rvert=2$$

That matches the claim.

Set beside the claim, the computed result is

$$\\lvert A\\rvert=2$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**E.** → False

Filter the same equation by the universe $N=\\{1,2,3,\\ldots\\}$ instead of $Z$. The algebraic candidates are still $\\pm 3$, but

$$3\\in N$$

$$-3\\notin N$$

so the natural-number set-builder yields

$$C=\\{3\\}$$

The claim equates $C$ with $\\{3,-3\\}$. Those sets differ. So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `The set-builder $A=\\{x\\in Z:x^{2}=9\\}$ keeps the integer solutions of $x^{2}=9$. Solving gives $x=\\pm 3$, both integers, so

$$A=\\{-3,3\\}.$$

$B$ is given as $\\{3,-3\\}$. Equality of sets is equality of membership, independent of order.`,
  },
  {
    id: `math-1-3`,
    case_id: `MATH 1.03`,
    title: `Subsets, elements, and the power set`,
    subsection: `1.1`,
    context: `Let $A = \\{a, b, c\\}$.`,
    statements: [
      `The power set of A has 8 elements.`,
      `$\\{a, b\\}$ is an element of A.`,
      `$\\emptyset$ is a subset of A.`,
      `A is a proper subset of A.`,
      `There are exactly 3 subsets of A that contain exactly 2 elements.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Each object in $A=\\{a,b,c\\}$ may be kept or left out when building a subset. That is $2$ independent binary choices:

$$\\lvert\\mathcal{P}(A)\\rvert=2^{\\lvert A\\rvert}=2^{3}$$

$$2^{3}=8$$

The power set therefore has $8$ elements.

Set beside the claim, the computed result is

$$2^{3}=8$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → False

The elements of $A$ are the letters $a$, $b$, and $c$. The object $\\{a,b\\}$ is a set of letters, not a letter:

$$\\{a,b\\}\\notin\\{a,b,c\\}$$

It is a subset of $A$, so it belongs to the power set:

$$\\{a,b\\}\\subseteq A\\implies\\{a,b\\}\\in\\mathcal{P}(A)$$

but that is not the claim. So the statement is False.`,
      `**C.** → True

Subsethood asks whether every member of the left-hand set sits in $A$. The empty set has no members at all:

$$\\forall x\\,(x\\in\\emptyset\\Rightarrow x\\in A)$$

is vacuously true. Hence

$$\\emptyset\\subseteq A$$.

Set beside the claim, the computed result is

$$\\emptyset\\subseteq A$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → False

Proper inclusion needs ordinary inclusion plus a genuine difference:

$$X\\subsetneq Y\\iff(X\\subseteq Y)\\wedge(X\\neq Y)$$

$A\\subseteq A$ holds, but $A\\neq A$ is impossible. Therefore $A$ is not a proper subset of $A$.

Set beside the claim, the computed result is

$$X\\subsetneq Y\\iff(X\\subseteq Y)\\wedge(X\\neq Y)$$

which is not what the statement asserts.

So the statement is False.`,
      `**E.** → True

Two-element subsets of a three-element set are counted by

$$\\binom{3}{2}=\\frac{3\\cdot 2}{2}=3$$

Listing them confirms the count:

$$\\{a,b\\},\\quad\\{a,c\\},\\quad\\{b,c\\}$$

Exactly three such subsets.

Set beside the claim, the computed result is

$$\\{a,b\\},\\quad\\{a,c\\},\\quad\\{b,c\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `Here $A=\\{a,b,c\\}$ has three objects.

Membership $x\\in A$ means $x$ is one of those three objects. Inclusion $S\\subseteq A$ means every object inside $S$ is also one of those three. The power set $\\mathcal{P}(A)$ is the set of all subsets. Each of the $n$ objects can be kept or left out, so $\\lvert \\mathcal{P}(A) \\rvert = 2^{n}$. A proper subset must also be unequal to $A$, so $A$ itself is never a proper subset of $A$. Subsets of a fixed size $k$ are counted by $\\binom{n}{k}$.`,
  },
  {
    id: `math-1-4`,
    case_id: `MATH 1.04`,
    title: `Membership vs. Subset for a Three-Element Set`,
    subsection: `1.1`,
    context: `Let $D = \\{a, b, c\\}$.`,
    statements: [
      `$\\emptyset \\subseteq D$`,
      `$\\emptyset \\in D$`,
      `D has exactly 8 subsets`,
      `Both $\\{a\\} \\subseteq D$ and $\\{a\\} \\in D$ are true`,
      `$D \\subseteq D$`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Subsethood asks whether every member of the left-hand set sits in $D$. The empty set has no members at all, so there is no witness that could sit outside $D$:

$$\\emptyset\\subseteq D$$

That is exactly the claimed inclusion. So the statement is True.`,
      `**B.** → False

Membership asks whether the object is one of the listed elements. Write the roster:

$$D=\\{a,b,c\\}$$

Compare $\\emptyset$ with each listed letter. None matches, so

$$\\emptyset\\notin D$$.

Set beside the claim, the computed result is

$$\\emptyset\\notin D$$

which is not what the statement asserts.

So the statement is False.`,
      `**C.** → True

Each of the three letters in $D=\\{a,b,c\\}$ may be kept or left out independently when building a subset:

$$\\lvert\\mathcal{P}(D)\\rvert=2^{3}$$

$$2^{3}=8$$

So $D$ has exactly $8$ subsets, matching the claim.

Set beside the claim, the computed result is

$$2^{3}=8$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → False

Check the two relations separately. Because $a\\in D$,

$$\\{a\\}\\subseteq D$$

holds. But the elements of $D$ are letters, not singletons:

$$\\{a\\}\\notin\\{a,b,c\\}$$

The claim needs both relations at once. The second fails,.

Set beside the claim, the computed result is

$$\\{a\\}\\notin\\{a,b,c\\}$$

which is not what the statement asserts.

So the statement is False.`,
      `**E.** → True

Inclusion is reflexive. Take an arbitrary $x\\in D=\\{a,b,c\\}$. Then $x$ is one of those three letters, hence $x\\in D$. Since $x$ was arbitrary,

$$\\forall x\\,(x\\in D\\Rightarrow x\\in D)$$

which is exactly

$$D\\subseteq D$$.

Set beside the claim, the computed result is

$$D\\subseteq D$$

which is exactly what the statement asserts.

So the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `Let $D=\\{a,b,c\\}$.

Membership $x\\in D$ asks whether $x$ is one of the three written letters. Inclusion $S\\subseteq D$ asks whether every member of $S$ is one of those letters. The power set collects every subset: each of the $n$ letters is in or out independently, so there are $2^{n}$ subsets. The empty set is a subset of every set, but it is an element of $D$ only if it is written on the roster.`,
  },
  {
    id: `math-1-5`,
    case_id: `MATH 1.05`,
    title: `Set Difference Between Two Overlapping Lists`,
    subsection: `1.1`,
    context: `Let $E = \\{1, 3, 5, 7\\}$ and $F = \\{3, 4, 5, 6\\}$.`,
    statements: [
      `$E \\setminus F = \\{1, 7\\}$`,
      `$F \\setminus E = \\{4, 6\\}$`,
      `$E \\setminus F = F \\setminus E$`,
      `$(E \\setminus F) \\cup (F \\setminus E) = \\{1, 4, 6, 7\\}$`,
      `$(E \\setminus F) \\cap (F \\setminus E) = \\emptyset$`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Difference keeps members of $E$ that miss $F$. With $E=\\{1,3,5,7\\}$ and $F=\\{3,4,5,6\\}$, test each member of $E$:

$$1\\notin F$$

$$3\\in F$$

$$5\\in F$$

$$7\\notin F$$

Keep $1$ and $7$:

$$E\\setminus F=\\{1,7\\}$$

That matches the claim. So the statement is True.`,
      `**B.** → True

Difference keeps members of $F$ that miss $E$. Test each member of $F=\\{3,4,5,6\\}$:

$$3\\in E$$

$$4\\notin E$$

$$5\\in E$$

$$6\\notin E$$

Keep $4$ and $6$:

$$F\\setminus E=\\{4,6\\}$$

That matches the claim.

Set beside the claim, the computed result is

$$F\\setminus E=\\{4,6\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**C.** → False

The two differences are

$$E\\setminus F=\\{1,7\\}$$

$$F\\setminus E=\\{4,6\\}$$

Equality of sets would require the same members. But

$$1\\in E\\setminus F,\\qquad 1\\notin F\\setminus E$$

so the rosters differ.

Set beside the claim, the computed result is

$$1\\in E\\setminus F,\\qquad 1\\notin F\\setminus E$$

which is not what the statement asserts.

So the statement is False.`,
      `**D.** → True

Form each leftover pile, then take the union:

$$E\\setminus F=\\{1,7\\}$$

$$F\\setminus E=\\{4,6\\}$$

$$(E\\setminus F)\\cup(F\\setminus E)=\\{1,4,6,7\\}$$

That matches the claimed roster.

Set beside the claim, the computed result is

$$(E\\setminus F)\\cup(F\\setminus E)=\\{1,4,6,7\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**E.** → True

The leftover piles are $\\{1,7\\}$ and $\\{4,6\\}$. Their intersection is

$$\\{1,7\\}\\cap\\{4,6\\}=\\emptyset$$

so

$$(E\\setminus F)\\cap(F\\setminus E)=\\emptyset$$

That matches the claim.

Set beside the claim, the computed result is

$$(E\\setminus F)\\cap(F\\setminus E)=\\emptyset$$

which is exactly what the statement asserts.

So the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `Let $E=\\{1,3,5,7\\}$ and $F=\\{3,4,5,6\\}$.

Difference $X\\setminus Y$ keeps members of $X$ that miss $Y$. From $E$, the members $3$ and $5$ also sit in $F$, so

$$E \\setminus F = \\{1,7\\}.$$

From $F$, the members $3$ and $5$ also sit in $E$, so

$$F \\setminus E = \\{4,6\\}.$$

The union of those leftover piles is the symmetric difference. Their intersection is empty: a number cannot miss $F$ and sit in $F$ at once.`,
  },
  {
    id: `math-1-6`,
    case_id: `MATH 1.06`,
    title: `Intersections, Union Size, and a Difference Trap`,
    subsection: `1.1`,
    context: `Let $A = \\{2, 4, 6, 8, 10\\}$, $B = \\{3, 6, 9, 12\\}$, and $C = \\{1, 2, 3, 4, 5\\}$.`,
    statements: [
      `$A \\cap B = \\{6\\}$`,
      `$A \\cup B$ has 8 elements`,
      `$C \\setminus A = \\{1, 3\\}$`,
      `$B \\setminus C = \\{3, 6, 9, 12\\}$`,
      `$A \\cap C = \\{2, 4, 6\\}$`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Intersection keeps numbers tagged in both $A$ and $B$. Walk $A=\\{2,4,6,8,10\\}$ against $B=\\{3,6,9,12\\}$:

$$2\\notin B,\\quad 4\\notin B,\\quad 6\\in B,\\quad 8\\notin B,\\quad 10\\notin B$$

$$A\\cap B=\\{6\\}$$

That matches the claim. So the statement is True.`,
      `**B.** → True

Union size uses inclusion-exclusion:

$$\\lvert A\\cup B\\rvert=\\lvert A\\rvert+\\lvert B\\rvert-\\lvert A\\cap B\\rvert$$

Substitute $\\lvert A\\rvert=5$, $\\lvert B\\rvert=4$, and $\\lvert A\\cap B\\rvert=1$:

$$5+4-1=8$$

So $A\\cup B$ has $8$ elements. So the statement is True.`,
      `**C.** → False

Difference $C\\setminus A$ keeps members of $C=\\{1,2,3,4,5\\}$ that miss $A$:

$$1\\notin A,\\quad 2\\in A,\\quad 3\\notin A,\\quad 4\\in A,\\quad 5\\notin A$$

$$C\\setminus A=\\{1,3,5\\}$$

The claim drops $5$.

Set beside the claim, the computed result is

$$C\\setminus A=\\{1,3,5\\}$$

which is not what the statement asserts.

So the statement is False.`,
      `**D.** → False

Difference $B\\setminus C$ removes from $B=\\{3,6,9,12\\}$ whatever also sits in $C$:

$$3\\in C,\\quad 6\\notin C,\\quad 9\\notin C,\\quad 12\\notin C$$

$$B\\setminus C=\\{6,9,12\\}$$

The claim keeps $3$, which was removed.

Set beside the claim, the computed result is

$$B\\setminus C=\\{6,9,12\\}$$

which is not what the statement asserts.

So the statement is False.`,
      `**E.** → False

Intersection $A\\cap C$ keeps shared members of $A=\\{2,4,6,8,10\\}$ and $C=\\{1,2,3,4,5\\}$:

$$2\\in C,\\quad 4\\in C,\\quad 6\\notin C,\\quad 8\\notin C,\\quad 10\\notin C$$

$$A\\cap C=\\{2,4\\}$$

The claim inserts $6$, which is not in $C$. So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `The lists are $A=\\{2,4,6,8,10\\}$, $B=\\{3,6,9,12\\}$, and $C=\\{1,2,3,4,5\\}$.

Intersection keeps numbers tagged in both inputs. Union keeps every tagged number once. Difference $X\\setminus Y$ keeps members of $X$ that miss $Y$.`,
  },
  {
    id: `math-1-7`,
    case_id: `MATH 1.07`,
    title: `Two-Course Enrollment via Inclusion-Exclusion`,
    subsection: `1.1`,
    context: `In a cohort of 50 students, 30 take Mathematics (set M) and 25 take Economics (set E). The two courses share 12 common students, so $\\lvert M \\cap E \\rvert = 12$.`,
    statements: [
      `$\\lvert M \\cup E \\rvert = 43$`,
      `The number of students taking neither Mathematics nor Economics is 7`,
      `$M \\setminus E$ has 18 students (those taking only Mathematics)`,
      `$E \\subseteq M$`,
      `M and E are disjoint sets`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Two-set inclusion-exclusion recovers the union from the given totals:

$$\\lvert M\\cup E\\rvert=\\lvert M\\rvert+\\lvert E\\rvert-\\lvert M\\cap E\\rvert$$

$$=30+25-12$$

$$=43$$

That matches the claim.

Set beside the claim, the computed result is

$$=43$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

Students in neither course are the cohort total minus the union:

$$\\lvert U\\setminus(M\\cup E)\\rvert=50-\\lvert M\\cup E\\rvert$$

With $\\lvert M\\cup E\\rvert=43$,

$$50-43=7$$

So exactly $7$ take neither course.

Set beside the claim, the computed result is

$$50-43=7$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**C.** → True

Only-Mathematics peels the overlap out of the Mathematics total:

$$\\lvert M\\setminus E\\rvert=\\lvert M\\rvert-\\lvert M\\cap E\\rvert$$

$$=30-12$$

$$=18$$

That matches the claim.

Set beside the claim, the computed result is

$$=18$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → False

Subsethood $E\\subseteq M$ would require every Economics student also sit in $M$, i.e. an empty Economics-only region:

$$\\lvert E\\setminus M\\rvert=\\lvert E\\rvert-\\lvert M\\cap E\\rvert=25-12=13$$

Thirteen students take Economics but not Mathematics, so $E\\not\\subseteq M$. So the statement is False.`,
      `**E.** → False

Disjointness requires an empty intersection. The stem gives a positive overlap:

$$\\lvert M\\cap E\\rvert=12$$

$$12\\neq 0$$

so the courses are not disjoint.

Set beside the claim, the computed result is

$$12\\neq 0$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `A cohort of $50$ students has $\\lvert M \\rvert = 30$ taking Mathematics, $\\lvert E \\rvert = 25$ taking Economics, and $\\lvert M \\cap E \\rvert = 12$ taking both.

Inclusion-exclusion for two sets is

$$\\lvert M \\cup E \\rvert = \\lvert M \\rvert + \\lvert E \\rvert - \\lvert M \\cap E \\rvert.$$

Substitute the given sizes:

$$30 + 25 - 12 = 43$$

so $\\lvert M \\cup E \\rvert = 43$. Only-Mathematics is $\\lvert M \\rvert$ minus the overlap. Neither course is the cohort size minus the union. $E\\subseteq M$ would require the overlap to equal $\\lvert E \\rvert$. Disjointness would require the overlap to be empty.`,
  },
  {
    id: `math-1-8`,
    case_id: `MATH 1.08`,
    title: `Pairwise Disjoint Blocks and a Partition of U`,
    subsection: `1.1`,
    context: `Let $U = \\{1, 2,..., 9\\}$, and let $A = \\{1, 2, 3\\}$, $B = \\{4, 5, 6\\}$, $C = \\{7, 8, 9\\}$.`,
    statements: [
      `A, B, and C are pairwise disjoint`,
      `$\\{A, B, C\\}$ forms a partition of U, since $A \\cup B \\cup C = U$ and the sets are pairwise disjoint`,
      `$A \\cap B \\cap C = \\emptyset$`,
      `$A \\setminus B = \\emptyset$`,
      `Since $A \\cap B = \\emptyset$, it follows that $A = \\emptyset$ or $B = \\emptyset$`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Pairwise disjointness means every pair of blocks shares nothing. Check the three pairs on $A=\\{1,2,3\\}$, $B=\\{4,5,6\\}$, $C=\\{7,8,9\\}$:

$$A\\cap B=\\emptyset$$

$$A\\cap C=\\emptyset$$

$$B\\cap C=\\emptyset$$

All three intersections are empty. So the statement is True.`,
      `**B.** → True

A partition needs pairwise disjoint nonempty blocks whose union is $U$. Pairwise disjointness holds. The union is

$$A\\cup B\\cup C=\\{1,2,\\ldots,9\\}=U$$

and each block is nonempty. So $\\{A,B,C\\}$ partitions $U$.

Set beside the claim, the computed result is

$$A\\cup B\\cup C=\\{1,2,\\ldots,9\\}=U$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**C.** → True

The triple intersection sits inside every pairwise intersection. From $A\\cap B=\\emptyset$,

$$A\\cap B\\cap C\\subseteq A\\cap B$$

$$A\\cap B\\cap C=\\emptyset$$.

Set beside the claim, the computed result is

$$A\\cap B\\cap C=\\emptyset$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → False

Difference $A\\setminus B$ keeps members of $A$ that miss $B$. The blocks are

$$A=\\{1,2,3\\},\\qquad B=\\{4,5,6\\}$$

Every element of $A$ lies outside $B$, so none is removed:

$$A\\setminus B=\\{1,2,3\\}\\ne\\emptyset$$

The claim says the difference is empty. Comparing the two sides, so the statement is False.`,
      `**E.** → False

Disjointness of two nonempty sets is allowed. Here both blocks are nonempty:

$$A=\\{1,2,3\\}\\neq\\emptyset$$

$$B=\\{4,5,6\\}\\neq\\emptyset$$

yet $A\\cap B=\\emptyset$. Empty intersection does not force either factor to be empty.

Set beside the claim, the computed result is

$$B=\\{4,5,6\\}\\neq\\emptyset$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `The blocks sit in separate thirds of $U=\\{1,2,\\ldots,9\\}$:

$$A=\\{1,2,3\\},\\quad B=\\{4,5,6\\},\\quad C=\\{7,8,9\\}.$$

Pairwise disjointness means every pair of blocks shares nothing. A partition of $U$ needs nonempty blocks, pairwise disjointness, and union equal to $U$. Difference $A\\setminus B$ keeps members of $A$ that miss $B$. An empty intersection does not force either factor to be empty.`,
  },
  {
    id: `math-1-9`,
    case_id: `MATH 1.09`,
    title: `Complements of Overlapping Skill Sets`,
    subsection: `1.1`,
    context: `Among U = 12 employees (numbered 1-12), let $X = \\{1,2,3,4,5,6\\}$ be those who know Python, and $Y = \\{4,5,6,7,8,9\\}$ be those who know SQL. Complements are taken relative to U.`,
    statements: [
      `$X^{c} = \\{7, 8, 9, 10, 11, 12\\}$`,
      `$(X \\cup Y)^{c} = \\{10, 11, 12\\}$`,
      `$X^{c} \\cap Y^{c} = \\{10, 11, 12\\}$`,
      `$(X \\cap Y)^{c} = X^{c} \\cup Y^{c}$`,
      `$X^{c} \\cup Y^{c} = \\{1, 2, 3, 10, 11, 12\\}$`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The complement of $X$ in $U=\\{1,2,\\ldots,12\\}$ is everyone $X$ leaves out. With

$$X=\\{1,2,3,4,5,6\\}$$

the leftover roster is

$$X^{c}=\\{7,8,9,10,11,12\\}$$

That matches the claim.

Set beside the claim, the computed result is

$$X^{c}=\\{7,8,9,10,11,12\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

First form the union of the skill sets:

$$X\\cup Y=\\{1,2,3,4,5,6,7,8,9\\}$$

Its complement in $U$ is the three employees outside both skills:

$$(X\\cup Y)^{c}=\\{10,11,12\\}$$

That matches the claim.

Set beside the claim, the computed result is

$$(X\\cup Y)^{c}=\\{10,11,12\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**C.** → True

Compute each complement, then intersect:

$$X^{c}=\\{7,8,9,10,11,12\\}$$

$$Y^{c}=\\{1,2,3,10,11,12\\}$$

$$X^{c}\\cap Y^{c}=\\{10,11,12\\}$$

De Morgan also identifies this with $(X\\cup Y)^{c}$.

Set beside the claim, the computed result is

$$X^{c}\\cap Y^{c}=\\{10,11,12\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → True

De Morgan's second law equates the complement of an intersection with the union of complements. One side:

$$X\\cap Y=\\{4,5,6\\}$$

$$(X\\cap Y)^{c}=\\{1,2,3,7,8,9,10,11,12\\}$$

The other side $X^{c}\\cup Y^{c}$ yields the same roster. So the identity holds. So the statement is True.`,
      `**E.** → False

Form the union of complements:

$$X^{c}=\\{7,8,9,10,11,12\\}$$

$$Y^{c}=\\{1,2,3,10,11,12\\}$$

$$X^{c}\\cup Y^{c}=\\{1,2,3,7,8,9,10,11,12\\}$$

The claim drops $7,8,9$.

Set beside the claim, the computed result is

$$X^{c}\\cup Y^{c}=\\{1,2,3,7,8,9,10,11,12\\}$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `Among $U=\\{1,2,\\ldots,12\\}$, Python knowers are $X=\\{1,2,3,4,5,6\\}$ and SQL knowers are $Y=\\{4,5,6,7,8,9\\}$. Complements are taken in $U$.

The complement of a set is everyone in $U$ that the set leaves out:

$$X^{c}=\\{7,8,9,10,11,12\\}, \\qquad Y^{c}=\\{1,2,3,10,11,12\\}.$$

De Morgan's laws: $(X\\cup Y)^{c}=X^{c}\\cap Y^{c}$ and $(X\\cap Y)^{c}=X^{c}\\cup Y^{c}$. Escaping a union means missing both skills.`,
  },
  {
    id: `math-1-10`,
    case_id: `MATH 1.10`,
    title: `Union and Intersection Complements for Two Overlapping Sets`,
    subsection: `1.1`,
    context: `Let the universal set be $U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$. Let $A = \\{1, 2, 3, 4, 5\\}$ and $B = \\{4, 5, 6, 7, 8\\}$, with complements taken relative to U.`,
    statements: [
      `$(A \\cup B)^{c} = \\{8, 9, 10\\}$`,
      `$(A \\cap B)^{c} = A^{c} \\cup B^{c}$`,
      `$A^{c} \\cap B^{c} = \\{6, 7, 8, 9, 10\\}$`,
      `$(A \\cap B)^{c} = \\{1, 2, 3, 6, 7, 8, 9, 10\\}$`,
      `$A^{c} \\cup B^{c} = \\{1, 2, 3, 9, 10\\}$`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

Form the union first:

$$A\\cup B=\\{1,2,3,4,5,6,7,8\\}$$

Its complement in $U=\\{1,2,\\ldots,10\\}$ is

$$(A\\cup B)^{c}=\\{9,10\\}$$

The claim inserts $8$, but $8\\in A\\cup B$, so $8$ cannot sit in the complement.

Set beside the claim, the computed result is

$$(A\\cup B)^{c}=\\{9,10\\}$$

which is not what the statement asserts.

So the statement is False.`,
      `**B.** → True

De Morgan's law for intersection says

$$(A\\cap B)^{c}=A^{c}\\cup B^{c}$$

for any sets $A,B$ in a fixed universe. The identity holds independently of the particular rosters.

Set beside the claim, the computed result is

$$(A\\cap B)^{c}=A^{c}\\cup B^{c}$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**C.** → False

Compute each complement, then intersect:

$$A^{c}=\\{6,7,8,9,10\\}$$

$$B^{c}=\\{1,2,3,9,10\\}$$

$$A^{c}\\cap B^{c}=\\{9,10\\}$$

The claim keeps $6,7,8$, which sit in $A^{c}$ but not in $B^{c}$.

Set beside the claim, the computed result is

$$A^{c}\\cap B^{c}=\\{9,10\\}$$

which is not what the statement asserts.

So the statement is False.`,
      `**D.** → True

First form the intersection:

$$A\\cap B=\\{4,5\\}$$

Its complement in $U$ is everyone else:

$$(A\\cap B)^{c}=\\{1,2,3,6,7,8,9,10\\}$$

That matches the claim.

Set beside the claim, the computed result is

$$(A\\cap B)^{c}=\\{1,2,3,6,7,8,9,10\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**E.** → False

Form the union of complements from

$$A^{c}=\\{6,7,8,9,10\\},\\qquad B^{c}=\\{1,2,3,9,10\\}$$

$$A^{c}\\cup B^{c}=\\{1,2,3,6,7,8,9,10\\}$$

The claim drops $6,7,8$.

Set beside the claim, the computed result is

$$A^{c}\\cup B^{c}=\\{1,2,3,6,7,8,9,10\\}$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$. Complements are taken in $U$.

The complement of a set is everyone in $U$ that the set leaves out:

$$A^{c}=\\{6,7,8,9,10\\}, \\qquad B^{c}=\\{1,2,3,9,10\\}.$$

De Morgan's laws: $(A\\cup B)^{c}=A^{c}\\cap B^{c}$ and $(A\\cap B)^{c}=A^{c}\\cup B^{c}$.`,
  },
  {
    id: `math-1-11`,
    case_id: `MATH 1.11`,
    title: `Partitions of a set`,
    subsection: `1.1`,
    context: `Let $A = \\{1, 2, 3, 4, 5, 6\\}$. A partition of A is a collection of nonempty, pairwise disjoint subsets whose union is A.`,
    statements: [
      `$P = \\{\\{1,2\\}, \\{3,4\\}, \\{5,6\\}\\}$ is a partition of A.`,
      `Every partition of a set must have exactly the same number of blocks as the set has elements.`,
      `$Q = \\{\\{1,2,3\\}, \\{3,4,5,6\\}\\}$ is a partition of A.`,
      `$R = \\{\\{1,2\\}, \\{3,4\\}, \\{5\\}\\}$ is a partition of A.`,
      `A set with $n \\ge 2$ elements always has more than one possible partition.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

Check the three partition axioms for $P=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$ on $A=\\{1,2,3,4,5,6\\}$:

$$\\{1,2\\}\\cap\\{3,4\\}=\\emptyset$$

$$\\{1,2\\}\\cap\\{5,6\\}=\\emptyset$$

$$\\{3,4\\}\\cap\\{5,6\\}=\\emptyset$$

$$\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=A$$

Each block is nonempty. All three axioms hold. So the statement is True.`,
      `**B.** → False

Block count is free. Both of the following partition a six-element set:

$$\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$$

$$\\{A\\}$$

The first has $3$ blocks and the second has $1$ block. The claim that every partition must have exactly $n$ blocks is false. So the statement is False.`,
      `**C.** → False

The blocks of $Q=\\{\\{1,2,3\\},\\{3,4,5,6\\}\\}$ overlap at $3$:

$$\\{1,2,3\\}\\cap\\{3,4,5,6\\}=\\{3\\}$$

$$\\{3\\}\\neq\\emptyset$$

Pairwise disjointness fails, so $Q$ is not a partition.

Set beside the claim, the computed result is

$$\\{3\\}\\neq\\emptyset$$

which is not what the statement asserts.

So the statement is False.`,
      `**D.** → False

The union of the blocks of $R=\\{\\{1,2\\},\\{3,4\\},\\{5\\}\\}$ is

$$\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5\\}=\\{1,2,3,4,5\\}$$

which misses $6\\in A$. Covering fails, so $R$ is not a partition.

Set beside the claim, the computed result is

$$\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5\\}=\\{1,2,3,4,5\\}$$

which is not what the statement asserts.

So the statement is False.`,
      `**E.** → True

For $n\\ge 2$, at least two partitions exist. The trivial one-block partition is $\\{A\\}$. Splitting off a singleton gives another:

$$\\{\\{a\\},A\\setminus\\{a\\}\\}$$

for any $a\\in A$. So more than one partition always exists.

Set beside the claim, the computed result is

$$\\{\\{a\\},A\\setminus\\{a\\}\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `Let $A=\\{1,2,3,4,5,6\\}$. A collection partitions $A$ only when all three hold: every block nonempty, blocks pairwise disjoint, and union equal to $A$.

Block count is free: $\\{A\\}$ is a $1$-block partition, and $n$ singletons is an $n$-block partition. Those two constructions are different whenever $n\\ge 2$.`,
  },
  {
    id: `math-1-12`,
    case_id: `MATH 1.12`,
    title: `Counting subsets`,
    subsection: `1.1`,
    context: `Let A be a set with $\\lvert A \\rvert = 5$.`,
    statements: [
      `The number of subsets of A is 32.`,
      `The number of proper subsets of A is 31.`,
      `The number of subsets of A containing exactly 4 elements is 10.`,
      `The number of nonempty subsets of A is 31.`,
      `The number of subsets of A containing an even number of elements (0, 2, or 4) is 15.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Each of the five elements may be included or omitted independently when building a subset:

$$\\lvert\\mathcal{P}(A)\\rvert=2^{\\lvert A\\rvert}=2^{5}$$

$$2^{5}=32$$

So $A$ has $32$ subsets.

Set beside the claim, the computed result is

$$2^{5}=32$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

Proper subsets are all subsets except $A$ itself. First count the full power set of a five-element set:

$$\\lvert\\mathcal{P}(A)\\rvert=2^{5}=32$$

Drop $A$ from that count:

$$32-1=31$$

So there are $31$ proper subsets, matching the claim. So the statement is True.`,
      `**C.** → False

Four-element subsets are counted by the binomial coefficient:

$$\\binom{5}{4}=\\binom{5}{1}=5$$

The claim asserts $10$. Note that $\\binom{5}{2}=10$ counts two-element subsets instead.

Set beside the claim, the computed result is

$$\\binom{5}{4}=\\binom{5}{1}=5$$

which is not what the statement asserts.

So the statement is False.`,
      `**D.** → True

Nonempty subsets are the full power set with the empty set removed. For $|A|=5$,

$$\\lvert\\mathcal{P}(A)\\rvert=2^{5}$$

$$2^{5}=32$$

Drop only $\\emptyset$:

$$32-1=31$$

So there are $31$ nonempty subsets, matching the claim. So the statement is True.`,
      `**E.** → False

Even-cardinality subsets for $|A|=5$:

$$\\binom{5}{0}+\\binom{5}{2}+\\binom{5}{4}$$

$$=1+10+5=16$$

Exactly half of $2^{5}=32$ subsets have even size. The claim asserts $15$.

Set beside the claim, the computed result is

$$=1+10+5=16$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `Let $A$ be a set with $\\lvert A \\rvert = 5$. Each subset is an include/exclude choice for every element, so

$$2^{5} = 32$$

subsets in total.

Proper subsets drop $A$ itself. Nonempty subsets drop $\\emptyset$. Size counts use binomial coefficients $\\binom{5}{k}$. Even-sized subsets are those with $k=0,2,4$.`,
  },
  {
    id: `math-1-13`,
    case_id: `MATH 1.13`,
    title: `Interval Notation: Half-Open Intersections and a Universal Claim`,
    subsection: `1.1`,
    context: `Let A = (0, 10] and B = [5, 15) be intervals of real numbers, treated as sets.`,
    statements: [
      `$A \\cap B = [5, 10]$`,
      `$A \\cup B = (0, 15]$`,
      `$10 \\in A \\cap B$`,
      `$5 \\in A \\setminus B$`,
      `The statement "$x \\in A \\Rightarrow x \\in B$" is true for all x.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Translate brackets into inequalities, then take the tighter bounds:

$$A=(0,10]\\iff 0<x\\le 10$$

$$B=[5,15)\\iff 5\\le x<15$$

Intersection requires both conditions at once:

$$5\\le x\\le 10$$

which is the closed interval $[5,10]$.

Set beside the claim, the computed result is

$$5\\le x\\le 10$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → False

Union runs from the leftmost open end to the rightmost open end:

$$0<x<15$$

so

$$A\\cup B=(0,15)$$

The claim closes the right end as $(0,15]$. But $15\\notin A$ and $15\\notin B$, so $15$ is excluded.

Set beside the claim, the computed result is

$$A\\cup B=(0,15)$$

which is not what the statement asserts.

So the statement is False.`,
      `**C.** → True

Check $10$ against both intervals. For $A=(0,10]$:

$$0<10\\le 10$$

holds, so $10\\in A$. For $B=[5,15)$:

$$5\\le 10<15$$

holds, so $10\\in B$. Therefore $10\\in A\\cap B$.

Set beside the claim, the computed result is

$$5\\le 10<15$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → False

Difference $A\\setminus B$ needs $x\\in A$ and $x\\notin B$. For $x=5$, the left endpoint of $B$ gives

$$5\\le 5<15$$

so $5\\in B$. Even though $5\\in A$, membership in $B$ excludes it from the difference:

$$5\\notin A\\setminus B$$.

Set beside the claim, the computed result is

$$5\\notin A\\setminus B$$

which is not what the statement asserts.

So the statement is False.`,
      `**E.** → False

The implication $x\\in A\\Rightarrow x\\in B$ fails at any point of $A$ outside $B$. Take $x=1$:

$$1\\in A$$

$$1\\notin B$$

so the implication is not true for all $x$.

Set beside the claim, the computed result is

$$1\\notin B$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `Translate brackets into inequalities first.

$$A=(0,10] \\iff 0 < x \\le 10, \\qquad B=[5,15) \\iff 5 \\le x < 15.$$

Intersection takes the tighter bounds. Union runs from the leftmost open end to the rightmost open end. Difference $A\\setminus B$ keeps points of $A$ that miss $B$. The implication $x\\in A \\Rightarrow x\\in B$ for all $x$ is the inclusion $A\\subseteq B$.`,
  },
  {
    id: `math-1-14`,
    case_id: `MATH 1.14`,
    title: `Three-Way Museum Visits and Inclusion-Exclusion`,
    subsection: `1.1`,
    context: `A survey of 150 tourists finds: 80 visited Museum A, 70 visited Museum B, 60 visited Museum C, 30 visited both A and B, 25 visited both B and C, 20 visited both A and C, and 10 visited all three museums.`,
    statements: [
      `$\\lvert A \\cup B \\cup C \\rvert = 155$`,
      `The number of tourists who visited none of the three museums is 5`,
      `The number who visited exactly A and B (but not C) is 30`,
      `The number who visited only Museum A (and no other) equals 80 - 30 - 20 = 30`,
      `The number who visited at least two of the three museums is 65`,
    ],
    answer_key: [false, true, false, false, false],
    tactical_explanations: [
      `**A.** → False

Three-set inclusion-exclusion:

$$\\lvert A\\cup B\\cup C\\rvert=80+70+60-30-25-20+10$$

$$=210-75+10$$

$$=145$$

The claim asserts $155$. Since $145\\neq 155$, the statement is False.

Set beside the claim, the computed result is

$$=145$$

which is not what the statement asserts.

So the statement is False.`,
      `**B.** → True

Tourists who visited none of the three are the survey total minus the union:

$$150-\\lvert A\\cup B\\cup C\\rvert$$

With $\\lvert A\\cup B\\cup C\\rvert=145$,

$$150-145=5$$

So exactly $5$ visited none.

Set beside the claim, the computed result is

$$150-145=5$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**C.** → False

Exactly A-and-B (not C) is the pairwise total minus the triple:

$$\\lvert A\\cap B\\setminus C\\rvert=\\lvert A\\cap B\\rvert-\\lvert A\\cap B\\cap C\\rvert$$

$$=30-10=20$$

The claim reuses the pairwise total $30$ and forgets to remove the triple. So the statement is False.`,
      `**D.** → False

Only-A removes both pairwise overlaps and restores the triple once:

$$\\lvert A\\setminus(B\\cup C)\\rvert=\\lvert A\\rvert-\\lvert A\\cap B\\rvert-\\lvert A\\cap C\\rvert+\\lvert A\\cap B\\cap C\\rvert$$

$$=80-30-20+10=40$$

The claim computes $80-30-20=30$ and forgets to add back the triple. So the statement is False.`,
      `**E.** → False

At least two museums means the three pair-only regions plus the triple:

$$\\lvert A\\cap B\\setminus C\\rvert=30-10=20$$

$$\\lvert B\\cap C\\setminus A\\rvert=25-10=15$$

$$\\lvert A\\cap C\\setminus B\\rvert=20-10=10$$

$$20+15+10+10=55$$

The claim asserts $65$. So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `A survey of $150$ tourists records $\\lvert A \\rvert = 80$, $\\lvert B \\rvert = 70$, $\\lvert C \\rvert = 60$, pairwise totals $\\lvert A \\cap B \\rvert = 30$, $\\lvert B \\cap C \\rvert = 25$, $\\lvert A \\cap C \\rvert = 20$, and $\\lvert A \\cap B \\cap C \\rvert = 10$.

Three-set inclusion-exclusion is

$$\\lvert A \\cup B \\cup C \\rvert = \\lvert A \\rvert + \\lvert B \\rvert + \\lvert C \\rvert - \\lvert A \\cap B \\rvert - \\lvert B \\cap C \\rvert - \\lvert A \\cap C \\rvert + \\lvert A \\cap B \\cap C \\rvert.$$

$$80 + 70 + 60 - 30 - 25 - 20 + 10 = 145$$

Pair totals still include the triple, so an exact-pair region subtracts $10$. Only-$A$ subtracts both pair totals from $\\lvert A \\rvert$ and adds the triple back once.`,
  },
  {
    id: `math-1-15`,
    case_id: `MATH 1.15`,
    title: `Infinite sets and cardinality`,
    subsection: `1.1`,
    context: `Let $N = \\{1, 2, 3,...\\}$ be the natural numbers and $E = \\{2, 4, 6,...\\}$ be the even natural numbers.`,
    statements: [
      `E is a proper subset of N.`,
      `Since E is a proper subset of N, E must have strictly fewer elements than N.`,
      `The function f(n) = 2n defines a one-to-one correspondence (bijection) between N and the odd natural numbers.`,
      `The fact that $E \\subsetneq N$ yet has the same cardinality as N shows that the finite-set intuition “proper subset $\\Rightarrow$ fewer elements” does not carry over to infinite sets.`,
      `Every infinite subset of N is equal to N itself (contains all the natural numbers).`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

A proper subset is a subset that is not equal to the whole. Every positive even sits in $N$, so

$$E\\subseteq N$$

But $1\\in N$ and $1\\notin E$, so $E\\ne N$. Hence

$$E\\subsetneq N$$

That is the claimed proper inclusion. So the statement is True.`,
      `**B.** → False

For infinite sets, a proper subset can have the same cardinality as the whole. The map $n\\mapsto 2n$ is a bijection $N\\to E$, so

$$\\lvert E\\rvert=\\lvert N\\rvert$$

even though $E\\subsetneq N$. "Proper subset implies strictly fewer" is a finite-set intuition. So the statement is False.`,
      `**C.** → False

The map $f(n)=2n$ sends naturals to even naturals:

$$f(N)=\\{2,4,6,\\ldots\\}=E$$

The odd naturals are $\\{1,3,5,\\ldots\\}$, which is a different set. So $f$ is not a bijection onto the odds.

Set beside the claim, the computed result is

$$f(N)=\\{2,4,6,\\ldots\\}=E$$

which is not what the statement asserts.

So the statement is False.`,
      `**D.** → True

We have both $E\\subsetneq N$ and a bijection $n\\mapsto 2n$ between them. That pair of facts is the standard counterexample showing that finite-set size intuition fails for infinite sets.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`,
      `**E.** → False

Many infinite subsets of $N$ are proper. The evens

$$E=\\{2,4,6,\\ldots\\}$$

are infinite, yet

$$1\\in N,\\qquad 1\\notin E$$

so $E\\neq N$. Not every infinite subset equals $N$.

Set beside the claim, the computed result is

$$1\\in N,\\qquad 1\\notin E$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 15,
    solution_overview: `Let $N=\\{1,2,3,\\ldots\\}$ and $E=\\{2,4,6,\\ldots\\}$.

A proper subset is a subset that is not equal to the whole. Two infinite sets have the same cardinality when a bijection exists between them. The map $f(n)=2n$ sends each natural to a unique positive even and hits every positive even, so it is a bijection $N\\to E$ and $\\lvert E \\rvert = \\lvert N \\rvert$.`,
  },
  {
    id: `math-1-16`,
    case_id: `MATH 1.16`,
    title: `Elements vs. Subsets of an Even-Number Set`,
    subsection: `1.1`,
    context: `Let $A = \\{2, 4, 6, 8, 10, 12\\}$.`,
    statements: [
      `$6 \\in A$.`,
      `$\\{6\\} \\in A$.`,
      `$\\{6, 8\\} \\subseteq A$.`,
      `$\\emptyset \\subseteq A$.`,
      `A has exactly $63$ proper subsets.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Membership asks whether the object appears among the listed elements. The roster is

$$A=\\{2,4,6,8,10,12\\}$$

Scan that list for $6$. It occupies the third place, so

$$6\\in A$$

The claim asserts exactly that membership. So the statement is True.`,
      `**B.** → False

The elements of $A$ are numbers, not singletons. The object $\\{6\\}$ is a one-element set:

$$\\{6\\}\\notin A$$

even though $6\\in A$. The singleton is a subset of $A$, hence an element of $\\mathcal{P}(A)$, but that is not this claim. So the statement is False.`,
      `**C.** → True

A two-element set is a subset when each of its members sits in the larger set. Against

$$A=\\{2,4,6,8,10,12\\}$$

check both candidates:

$$6\\in A$$

$$8\\in A$$

Both succeed, therefore

$$\\{6,8\\}\\subseteq A$$

So the statement is True.`,
      `**D.** → True

Subsethood asks whether every member of the left-hand set sits in $A$. The empty set has no members at all, so there is no witness that could sit outside $A$:

$$\\emptyset\\subseteq A$$

That is the claimed inclusion. So the statement is True.`,
      `**E.** → True

Total subsets of a six-element set:

$$2^{6}=64$$

Proper subsets drop $A$ itself:

$$64-1=63$$

So $A$ has exactly $63$ proper subsets, matching the claim.

Set beside the claim, the computed result is

$$64-1=63$$

which is exactly what the statement asserts.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `Let $A=\\{2,4,6,8,10,12\\}$, six even numbers and nothing else.

Membership $x\\in A$ asks whether $x$ is one of those six numbers. Inclusion $S\\subseteq A$ asks whether every member of $S$ is one of those six. The empty set is a subset of every set. An $n$-element set has $2^{n}$ subsets, and proper subsets drop $A$ itself.`,
  },
  {
    id: `math-1-17`,
    case_id: `MATH 1.17`,
    title: `Set-Builder Notation from a Quadratic Condition`,
    subsection: `1.1`,
    context: `Let $A = \\{x \\in \\mathbb{Z} : x^2 - 5x + 6 = 0\\}$ and $B = \\{2, 3\\}$.`,
    statements: [
      `$A = B$.`,
      `$3 \\in A$.`,
      `$A = \\{2\\}$ (only the smaller root).`,
      `$\\lvert A\\rvert = 2$.`,
      `$C = \\{x \\in \\mathbb{N} : x^2 - 5x + 6 = 0 \\land x > 2\\}$ satisfies $C = \\{3\\}$.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The overview recovered the integer roots

$$A=\\{2,3\\}$$

and $B$ is given as $\\{2,3\\}$. Compare membership both ways: every element of $A$ sits in $B$, and every element of $B$ sits in $A$. Hence

$$A=B$$.

Set beside the claim, the computed result is

$$A=B$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

The overview recovered

$$A=\\{2,3\\}$$

Membership asks whether $3$ sits on that roster:

$$3\\in\\{2,3\\}$$

Yes, so $3\\in A$.

Set beside the claim, the computed result is

$$3\\in\\{2,3\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**C.** → False

The overview recovered $A=\\{2,3\\}$. The claim drops the root $3$. Check it against the quadratic:

$$3^{2}-5\\cdot 3+6=9-15+6=0$$

$$3\\in\\mathbb{Z}$$

so $3\\in A$. Then

$$A=\\{2,3\\}\\ne\\{2\\}$$.

Set beside the claim, the computed result is

$$A=\\{2,3\\}\\ne\\{2\\}$$

which is not what the statement asserts.

So the statement is False.`,
      `**D.** → True

Two distinct integer roots were recovered:

$$A=\\{2,3\\}$$

Cardinality counts distinct members:

$$\\lvert A\\rvert=2$$

That matches the claim.

Set beside the claim, the computed result is

$$\\lvert A\\rvert=2$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**E.** → True

Restrict to natural numbers with the extra filter $x>2$. The quadratic candidates are $2$ and $3$; only $3$ satisfies $x>2$:

$$2\\not>2,\\qquad 3>2$$

$$C=\\{3\\}$$

That matches the claim.

Set beside the claim, the computed result is

$$C=\\{3\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `The set-builder $A=\\{x\\in\\mathbb{Z}:x^{2}-5x+6=0\\}$ keeps the integer solutions of the quadratic. Factoring gives

$$(x-2)(x-3)=0$$

so $x=2$ or $x=3$, both integers:

$$A=\\{2,3\\}.$$

$B$ is given as $\\{2,3\\}$.`,
  },
  {
    id: `math-1-18`,
    case_id: `MATH 1.18`,
    title: `Counting the Power Set of a Four-Letter Set`,
    subsection: `1.1`,
    context: `Let $D = \\{w, x, y, z\\}$.`,
    statements: [
      `$\\mathcal{P}(D)$ has $16$ elements.`,
      `$\\{w, x\\} \\in \\mathcal{P}(D)$.`,
      `There are exactly $4$ subsets of D containing exactly $3$ elements.`,
      `$D \\in \\mathcal{P}(D)$.`,
      `There are exactly $5$ subsets of D containing exactly $2$ elements.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Four letters mean each is in or out independently when building a subset:

$$\\lvert\\mathcal{P}(D)\\rvert=2^{4}$$

$$2^{4}=16$$

So the power set has $16$ elements.

Set beside the claim, the computed result is

$$2^{4}=16$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

A set belongs to the power set precisely when it is a subset of $D=\\{w,x,y,z\\}$. Check both letters:

$$w\\in D$$

$$x\\in D$$

Hence

$$\\{w,x\\}\\subseteq D$$

and therefore

$$\\{w,x\\}\\in\\mathcal{P}(D)$$

So the statement is True.`,
      `**C.** → True

Three-element subsets of a four-element set are counted by

$$\\binom{4}{3}=\\binom{4}{1}=4$$

Each such subset leaves out exactly one of the four letters $w,x,y,z$.

Set beside the claim, the computed result is

$$\\binom{4}{3}=\\binom{4}{1}=4$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → True

Every set is a subset of itself:

$$D\\subseteq D$$

The power set collects all subsets of $D$, so the whole set is one of those subsets:

$$D\\in\\mathcal{P}(D)$$.

Set beside the claim, the computed result is

$$D\\in\\mathcal{P}(D)$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**E.** → False

Two-element subsets of a four-element set:

$$\\binom{4}{2}=\\frac{4\\cdot 3}{2}=6$$

The claim asserts $5$. Since $6\\neq 5$, the statement is False.

Set beside the claim, the computed result is

$$\\binom{4}{2}=\\frac{4\\cdot 3}{2}=6$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Four letters $D=\\{w,x,y,z\\}$ mean each letter is in or out independently, so $\\lvert \\mathcal{P}(D) \\rvert = 2^{4}$.

A set $S$ belongs to the power set precisely when $S\\subseteq D$. Size counts use binomial coefficients $\\binom{4}{k}$.`,
  },
  {
    id: `math-1-19`,
    case_id: `MATH 1.19`,
    title: `Subset, Proper Subset, and Self-Containment`,
    subsection: `1.1`,
    context: `Let $E = \\{1, 2, 3\\}$ and $F = \\{1, 2, 3, 4\\}$.`,
    statements: [
      `$E \\subseteq F$.`,
      `$E \\subsetneq F$ (E is a proper subset of F).`,
      `$F \\subseteq E$.`,
      `$E \\subseteq E$.`,
      `$E \\subsetneq E$.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Ordinary inclusion asks whether every member of the smaller set sits in the larger one. With

$$E=\\{1,2,3\\},\\qquad F=\\{1,2,3,4\\}$$

test each member of $E$:

$$1\\in F$$

$$2\\in F$$

$$3\\in F$$

All three succeed, so

$$E\\subseteq F$$

So the statement is True.`,
      `**B.** → True

Proper inclusion needs both $E\\subseteq F$ and $E\\ne F$. Every member of $E=\\{1,2,3\\}$ sits in $F=\\{1,2,3,4\\}$, and the extra element

$$4\\in F,\\qquad 4\\notin E$$

shows the sets differ. Hence

$$E\\subsetneq F$$

So the statement is True.`,
      `**C.** → False

Ordinary inclusion $F\\subseteq E$ would require every member of $F$ to sit in $E$. Write the two rosters:

$$F=\\{1,2,3,4\\}$$

$$E=\\{1,2,3\\}$$

The element $4$ sits in $F$ but not in $E$:

$$4\\in F$$

$$4\\notin E$$

so $F\\not\\subseteq E$. So the statement is False.`,
      `**D.** → True

Inclusion is reflexive. Every member of $E$ sits in $E$ by definition of the same set:

$$E\\subseteq E$$

Equivalently, $\\forall x\\,(x\\in E\\Rightarrow x\\in E)$.

Set beside the claim, the computed result is

$$E\\subseteq E$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**E.** → False

Proper inclusion also needs inequality of the two sets:

$$E\\subsetneq E\\iff(E\\subseteq E)\\wedge(E\\neq E)$$

The conjunct $E\\neq E$ is impossible.

Set beside the claim, the computed result is

$$E\\subsetneq E\\iff(E\\subseteq E)\\wedge(E\\neq E)$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Compare $E=\\{1,2,3\\}$ with $F=\\{1,2,3,4\\}$.

Ordinary inclusion $X\\subseteq Y$ asks whether every member of $X$ sits in $Y$. Proper inclusion also needs $X\\ne Y$. Inclusion is reflexive: $E\\subseteq E$. Proper self-inclusion would also need $E\\ne E$, which never happens.`,
  },
  {
    id: `math-1-20`,
    case_id: `MATH 1.20`,
    title: `Testing Whether a Collection Partitions a Set`,
    subsection: `1.1`,
    context: `Let $G = \\{1, 2, 3, 4, 5, 6\\}$, and consider the collection $\\mathcal{S} = \\{\\{1, 2\\}, \\{3, 4\\}, \\{5, 6\\}\\}$.`,
    statements: [
      `The blocks of $\\mathcal{S}$ are pairwise disjoint.`,
      `The union of the blocks of $\\mathcal{S}$ equals G.`,
      `$\\mathcal{S}$ is a partition of G.`,
      `$\\mathcal{S}' = \\{\\{1, 2\\}, \\{2, 3, 4\\}, \\{5, 6\\}\\}$ is also a partition of G.`,
      `Replacing $\\{5, 6\\}$ with $\\{5, 6, 7\\}$ would still give a partition of G.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Check pairwise intersections of the blocks of $\\mathcal{S}=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$:

$$\\{1,2\\}\\cap\\{3,4\\}=\\emptyset$$

$$\\{1,2\\}\\cap\\{5,6\\}=\\emptyset$$

$$\\{3,4\\}\\cap\\{5,6\\}=\\emptyset$$

All three are empty, so the blocks are pairwise disjoint. So the statement is True.`,
      `**B.** → True

The union of the blocks of $\\mathcal{S}$ is formed one pair at a time:

$$\\{1,2\\}\\cup\\{3,4\\}=\\{1,2,3,4\\}$$

$$\\{1,2,3,4\\}\\cup\\{5,6\\}=\\{1,2,3,4,5,6\\}$$

That roster equals $G$. Matching the claim, so the statement is True.`,
      `**C.** → True

A partition needs nonempty pairwise-disjoint blocks whose union is $G$. The blocks are nonempty, pairwise disjoint (letter A), and cover $G$ (letter B). Therefore $\\mathcal{S}$ partitions $G$.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`,
      `**D.** → False

In $\\mathcal{S}'=\\{\\{1,2\\},\\{2,3,4\\},\\{5,6\\}\\}$ the first two blocks overlap:

$$\\{1,2\\}\\cap\\{2,3,4\\}=\\{2\\}$$

$$\\{2\\}\\neq\\emptyset$$

Pairwise disjointness fails, so $\\mathcal{S}'$ is not a partition.

Set beside the claim, the computed result is

$$\\{2\\}\\neq\\emptyset$$

which is not what the statement asserts.

So the statement is False.`,
      `**E.** → False

Replacing $\\{5,6\\}$ with $\\{5,6,7\\}$ introduces $7\\notin G$. Partition blocks must be subsets of $G$, and the union would contain an outsider. So the modified collection is not a partition of $G$.

Record the verdict against the live claim after the calculation above is complete.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `Let $G=\\{1,2,3,4,5,6\\}$ and $\\mathcal{S}=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$.

A partition needs pairwise disjoint nonempty blocks whose union is $G$, and those blocks must be subsets of $G$. Overlap kills disjointness. An outsider such as $7$ is not a member of $G$, so a block containing $7$ cannot be a block of a partition of $G$.`,
  },
  {
    id: `math-1-21`,
    case_id: `MATH 1.21`,
    title: `Even Numbers Inside the Naturals: A Cardinality Trap`,
    subsection: `1.1`,
    context: `Let $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ and let $H = \\{2, 4, 6, 8, \\dots\\}$ be the set of positive even integers.`,
    statements: [
      `$H \\subseteq \\mathbb{N}$.`,
      `H is a finite set.`,
      `$H = \\mathbb{N}$.`,
      `The map $f(n) = 2n$ pairs every natural number with exactly one element of H and vice versa.`,
      `Since $H \\subsetneq \\mathbb{N}$, H must have strictly fewer elements than $\\mathbb{N}$.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Every positive even integer is a natural number. Writing the two sets,

$$H=\\{2,4,6,\\ldots\\}$$

$$\\mathbb{N}=\\{1,2,3,\\ldots\\}$$

shows every member of $H$ sits in $\\mathbb{N}$, so $H\\subseteq\\mathbb{N}$.

Set beside the claim, the computed result is

$$\\mathbb{N}=\\{1,2,3,\\ldots\\}$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → False

$H=\\{2,4,6,\\ldots\\}$ contains infinitely many distinct elements with no last term. A finite set would admit a finite listing. An infinite listing is not a finite set.

Record the verdict against the live claim after the calculation above is complete.

So the statement is False.`,
      `**C.** → False

Equality fails because odd naturals sit in $\\mathbb{N}$ but not in $H$:

$$1\\in\\mathbb{N}$$

$$1\\notin H$$

so $H\\neq\\mathbb{N}$.

Set beside the claim, the computed result is

$$1\\notin H$$

which is not what the statement asserts.

So the statement is False.`,
      `**D.** → True

Define $f:\\mathbb{N}\\to H$ by $f(n)=2n$. Injectivity:

$$f(n)=f(m)\\implies 2n=2m\\implies n=m$$

Surjectivity: every $h=2k\\in H$ equals $f(k)$. So $f$ is a bijection.

Set beside the claim, the computed result is

$$f(n)=f(m)\\implies 2n=2m\\implies n=m$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**E.** → False

Proper inclusion $H\\subsetneq\\mathbb{N}$ holds, but the bijection $n\\mapsto 2n$ shows

$$\\lvert H\\rvert=\\lvert\\mathbb{N}\\rvert$$

"Proper subset implies strictly fewer" fails for infinite sets.

Set beside the claim, the computed result is

$$\\lvert H\\rvert=\\lvert\\mathbb{N}\\rvert$$

which is not what the statement asserts.

So the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `**Part 1: The sets.**

Let $\\mathbb{N}=\\{1,2,3,\\ldots\\}$ and let $H=\\{2,4,6,\\ldots\\}$ be the positive even integers.

**Part 2: The operations.**

Subsethood $H\\subseteq\\mathbb{N}$ asks whether every even is already a natural. Equality $H=\\mathbb{N}$ needs both inclusions. For infinite sets, same cardinality means a bijection exists, not that one roster is missing no members. The pairing

$$f(n)=2n$$

sends each natural to an even. Odd $1$ sits in $\\mathbb{N}$ and misses $H$.`,
  },
  {
    id: `math-1-22`,
    case_id: `MATH 1.22`,
    title: `An Object and Its Singleton in the Same Set`,
    subsection: `1.1`,
    context: `Let a be an object and let $K = \\{a, \\{a\\}\\}$.`,
    statements: [
      `$a \\in K$.`,
      `$\\{a\\} \\in K$.`,
      `$\\{a\\} \\subseteq K$.`,
      `$\\{\\{a\\}\\} \\subseteq K$.`,
      `$\\lvert K\\rvert = 2$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

The roster lists two objects:

$$K=\\{a,\\{a\\}\\}$$

The bare object $a$ is the first listed member, so

$$a\\in K$$.

Set beside the claim, the computed result is

$$a\\in K$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

The second listed member of

$$K=\\{a,\\{a\\}\\}$$

is the singleton set $\\{a\\}$:

$$\\{a\\}\\in K$$

Membership holds because that set appears as an element of the roster.

Set beside the claim, the computed result is

$$\\{a\\}\\in K$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**C.** → True

Subsethood asks whether every member of $\\{a\\}$ sits in $K=\\{a,\\{a\\}\\}$. The only member is $a$, and $a\\in K$, so

$$\\{a\\}\\subseteq K$$.

Set beside the claim, the computed result is

$$\\{a\\}\\subseteq K$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → True

The singleton $\\{\\{a\\}\\}$ has one member, namely the set $\\{a\\}$. That member sits in $K$:

$$\\{a\\}\\in K$$

$$\\implies\\{\\{a\\}\\}\\subseteq K$$.

Set beside the claim, the computed result is

$$\\implies\\{\\{a\\}\\}\\subseteq K$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**E.** → True

The two listed objects $a$ and $\\{a\\}$ are distinct — an element versus a set containing it:

$$a\\neq\\{a\\}$$

$$\\lvert K\\rvert=2$$.

Set beside the claim, the computed result is

$$\\lvert K\\rvert=2$$

which is exactly what the statement asserts.

So the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 22,
    solution_overview: `**Part 1: The sets.**

The roster $K=\\{a,\\{a\\}\\}$ lists two objects: the bare object $a$, and the singleton set $\\{a\\}$. Those are different: one is an element, the other is a set containing that element.

**Part 2: The operations.**

Membership $x\\in K$ asks whether $x$ is one of those two listed objects. Subsethood $S\\subseteq K$ asks whether every member of $S$ is one of those two. Cardinality counts distinct listed objects.`,
  },
  {
    id: `math-1-23`,
    case_id: `MATH 1.23`,
    title: `De Morgan's laws with a universal set`,
    subsection: `1.2`,
    context: `Let $U = \\{1, 2,..., 10\\}$ be the universal set, $A = \\{1, 2, 3, 4, 5\\}$, and $B = \\{4, 5, 6, 7, 8\\}$.`,
    statements: [
      `$(A \\cup B)^{c} = \\{9, 10\\}$.`,
      `$(A \\cup B)^{c} = A^{c} \\cap B^{c}$.`,
      `$(A \\cap B)^{c} = A^{c} \\cup B^{c}$.`,
      `$A \\cap B = \\{4, 5, 6\\}$.`,
      `$(A \\cap B)^{c} = \\{1, 2, 3, 4, 5, 9, 10\\}$.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The complement of a union is the numbers in $U$ that miss both $A$ and $B$. Putting the two lists together covers $1$ through $8$, so

$$A\\cup B=\\{1,2,3,4,5,6,7,8\\}$$

and the leftover in $U$ is

$$(A\\cup B)^c=\\{9,10\\}.$$

The claim is that same list,

So the statement is True.`

      `**B.** → True

De Morgan's first law says the complement of a union is the intersection of the complements. The overview listed $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$, so

$$A^c\\cap B^c=\\{9,10\\}.$$

Numbers $6,7,8$ miss $A$ but sit in $B$, so they fail $B^c$. The intersection matches $(A\\cup B)^c$,

So the statement is True.`

      `**C.** → True

De Morgan's second law says the complement of an intersection is the union of the complements. The overview listed $A\\cap B=\\{4,5\\}$, so removing those two from $U$ leaves

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

Joining the complements gives the same list:

$$A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}.$$

The two sides agree,.

So the statement is True.`

      `**D.** → False

Intersection keeps only numbers that sit in both lists. The overview listed 

$$A\\cap B=\\{4,5\\}$$

. The claimed $\\{4,5,6\\}$ pads the overlap with $6$, and $6$ sits in $B$ but misses $A$. The lists do not match.

Set beside the claim, the computed result is

$$A\\cap B=\\{4,5\\}$$

which is not what the statement asserts.

So the statement is False.`

      `**E.** → False

The overview listed $A\\cap B=\\{4,5\\}$, so the complement in $U$ must drop $4$ and $5$ and keep everything else:

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

The claimed list $\\{1,2,3,4,5,9,10\\}$ keeps $4$ and $5$ while omitting $6,7,8$. That is the opposite of a complement,

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `**Part 1: The sets.**

Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$.

**Part 2: The operations.**

Complement $X^c$ is $U\\setminus X$. Union keeps members of at least one set; intersection keeps members of both. The shared pieces are

$$A\\cap B=\\{4,5\\},\\qquad A^c=\\{6,7,8,9,10\\},\\qquad B^c=\\{1,2,3,9,10\\}.$$

De Morgan's laws swap union with intersection under complements:

$$(A\\cup B)^c=A^c\\cap B^c,\\qquad (A\\cap B)^c=A^c\\cup B^c.$$`,
  },
  {
    id: `math-1-24`,
    case_id: `MATH 1.24`,
    title: `Cartesian products`,
    subsection: `1.2`,
    context: `Let $A = \\{1, 2\\}$ and $B = \\{x, y, z\\}$.`,
    statements: [
      `$\\lvert A \\times B \\rvert = 6$.`,
      `$(2, x) \\in A \\times B$.`,
      `$(x, 2) \\in A \\times B$.`,
      `$A \\times B = B \\times A$.`,
      `The number of elements in $B \\times A$ equals the number of elements in $A \\times B$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The overview already counted 

$$\\lvert A\\times B\\rvert=2\\cdot 3=6$$

 by the product rule. Product size is the number of cells in a $2$ by $3$ grid, not the five distinct symbols $1,2,x,y,z$. The claim is that same figure $6$.

Set beside the claim, the computed result is

$$\\lvert A\\times B\\rvert=2\\cdot 3=6$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

Membership in $A\\times B$ is a two-slot test. For $(2,x)$ the first slot $2$ sits in $A=\\{1,2\\}$ and the second slot $x$ sits in $B=\\{x,y,z\\}$. Both tests succeed, so $(2,x)\\in A\\times B$.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**C.** → False

The pair $(x,2)$ puts a letter in the first slot, and $x\\notin A$. Ordered pairs treat $(2,x)$ and $(x,2)$ as different objects; the second lives in $B\\times A$, not in $A\\times B$. The first slot already fails.

Record the verdict against the live claim after the calculation above is complete.

So the statement is False.`

      `**D.** → False

Set equality needs identical members, not identical counts. The pair $(2,x)$ sits in $A\\times B$, but $2\\notin B$, so that pair cannot sit in $B\\times A$. One missing witness already forces $A\\times B\\neq B\\times A$.

Record the verdict against the live claim after the calculation above is complete.

So the statement is False.`

      `**E.** → True

Size ignores order. The reverse product is

$$\\lvert B\\times A\\rvert=3\\cdot 2=6=\\lvert A\\times B\\rvert.$$

The counts agree even though the member lists do not.

Set beside the claim, the computed result is

$$\\lvert B\\times A\\rvert=3\\cdot 2=6=\\lvert A\\times B\\rvert.$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `**Part 1: The sets.**

Let $A=\\{1,2\\}$ and $B=\\{x,y,z\\}$. Every claim here is about ordered pairs formed from those two sets.

**Part 2: The operations.**

An ordered pair $(a,b)$ lands in $A\\times B$ only when the first slot is from $A$ and the second from $B$. Size is the product rule

$$\\lvert A\\times B\\rvert=\\lvert A\\rvert\\cdot\\lvert B\\rvert=2\\cdot 3=6.$$

Turning the factors around produces $B\\times A$: the same count, different members.`,
  },
  {
    id: `math-1-25`,
    case_id: `MATH 1.25`,
    title: `Sets defined by inequalities`,
    subsection: `1.2`,
    context: `Let $A = \\{x \\in R : 1 < x < 5\\}$ and $B = \\{x \\in R : x \\ge 3\\}$.`,
    statements: [
      `$A \\subseteq B$.`,
      `$A \\cap B = \\{x \\in R : 3 \\le x < 5\\}$, i.e. the interval $[3, 5)$.`,
      `$B \\subseteq A$.`,
      `$A \\cup B = \\{x \\in R : x > 1\\}$, i.e. the interval $(1, \\infty)$.`,
      `There exists a real number that belongs to A but not to B.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

Subsethood would need every point of $(1,5)$ to satisfy $x\\ge 3$. The leftover strip $(1,3)$ is the obstruction. Explicitly $x=2$ sits in $A$ because $1<2<5$, and it misses $B$ because $2<3$. One witness kills $A\\subseteq B$,.

Record the verdict against the live claim after the calculation above is complete.

So the statement is False.`

      `**B.** → True

Numbers satisfying both $1<x<5$ and $x\\ge 3$ form the tighter interval $[3,5)$. The lower end $3$ is closed because $3\\in A$ and $3\\in B$. The upper end $5$ stays open because $5\\notin A$. The claimed interval is that overlap,.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**C.** → False

$B$ is unbounded above, so it contains numbers far past $A$. Witness $x=10$: in $B$ because $10\\ge 3$, and not in $A$ because $10\\ge 5$. One large witness kills $B\\subseteq A$.

Record the verdict against the live claim after the calculation above is complete.

So the statement is False.`

      `**D.** → True

From just above $1$ onward there is always coverage: $A$ handles $(1,5)$ and $B$ handles $[3,\\infty)$. The point $1$ itself is excluded from both inputs, so

$$A\\cup B=(1,\\infty).$$

The claim is that same interval.

Set beside the claim, the computed result is

$$A\\cup B=(1,\\infty).$$

which is exactly what the statement asserts.

So the statement is True.`

      `**E.** → True

Existence needs one point of $A$ that misses $B$. Take $x=2$: it satisfies $1<2<5$ but $2<3$, so $2\\in A\\setminus B$. The leftover strip $(1,3)$ is nonempty.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `**Part 1: The sets.**

Rewrite in interval notation: $A=(1,5)$ and $B=[3,\\infty)$.

**Part 2: The operations.**

Intersection keeps numbers that satisfy both inequalities at once. Union keeps numbers that satisfy at least one. Difference $A\\setminus B$ is the leftover strip of $A$ that misses $B$. Subsethood $A\\subseteq B$ would need that leftover empty.`,
  },
  {
    id: `math-1-26`,
    case_id: `MATH 1.26`,
    title: `Symmetric difference`,
    subsection: `1.2`,
    context: `For two sets, define the symmetric difference $A\\triangle B = (A \\setminus B) \\cup (B \\setminus A)$, the elements belonging to exactly one of the two sets. Let $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5, 6\\}$.`,
    statements: [
      `$A\\triangle B = \\{1, 2, 5, 6\\}$.`,
      `The symmetric difference can also be written as $A\\triangle B = (A \\setminus B) \\cap (B \\setminus A)$.`,
      `$A \\cap B \\subseteq A\\triangle B$.`,
      `If A and B are disjoint, then $A\\triangle B = A \\cup B$.`,
      `$\\lvert A \\triangle B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert - 2\\lvert A \\cap B\\rvert$.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

The overview already joined the leftovers $A\\setminus B=\\{1,2\\}$ and $B\\setminus A=\\{5,6\\}$ into $A\\triangle B=\\{1,2,5,6\\}$. Symmetric difference is "exactly one," not "at least one": the overlap $\\{3,4\\}$ is absent on purpose. The claim is that same four-element list,

So the statement is True.`

      `**B.** → False

The definition joins the leftovers by $\\cup$, not $\\cap$. Those leftovers $\\{1,2\\}$ and $\\{5,6\\}$ are disjoint, so

$$(A\\setminus B)\\cap(B\\setminus A)=\\emptyset,$$

which is not the four-element set $\\{1,2,5,6\\}$. Outer buckets of a Venn diagram never overlap,

So the statement is False.`

      `**C.** → False

Symmetric difference excludes the overlap. The overview listed 

$$A\\cap B=\\{3,4\\}$$

 and 

$$A\\triangle B=\\{1,2,5,6\\}$$

, which share nothing. Already $3\\in A\\cap B$ and $3\\notin A\\triangle B$, so $A\\cap B\\nsubseteq A\\triangle B$.

So the statement is False.`

      `**D.** → True

If $A$ and $B$ share nothing, then $A\\setminus B=A$ and $B\\setminus A=B$, so $A\\triangle B=A\\cup B$. There is no middle bucket to discard. This is a general identity; the given lists are not disjoint, but the implication still holds,.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**E.** → True

The sum $\\lvert A\\rvert+\\lvert B\\rvert$ double-counts the overlap, and $A\\triangle B$ throws both copies away:

$$\\lvert A\\triangle B\\rvert=\\lvert A\\rvert+\\lvert B\\rvert-2\\lvert A\\cap B\\rvert=4+4-2\\cdot 2=4.$$

That matches the four-element set $\\{1,2,5,6\\}$,

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `**Part 1: The sets.**

Symmetric difference keeps what sits in exactly one of the two sets:

$$A\\triangle B=(A\\setminus B)\\cup(B\\setminus A).$$

Let $A=\\{1,2,3,4\\}$ and $B=\\{3,4,5,6\\}$.

**Part 2: The operations.**

The shared pieces are

$$A\\cap B=\\{3,4\\},\\qquad A\\setminus B=\\{1,2\\},\\qquad B\\setminus A=\\{5,6\\}.$$

Joining the leftovers gives $A\\triangle B=\\{1,2,5,6\\}$.`,
  },
  {
    id: `math-1-27`,
    case_id: `MATH 1.27`,
    title: `Sales rep to client account coverage`,
    subsection: `1.2`,
    context: `A consulting firm has 5 sales reps and 8 client accounts. A "coverage assignment" is an ordered pair (rep, account) meaning that rep is the point of contact for that account. The firm wants to know how many distinct coverage assignments are possible, and how the count changes if the team grows.`,
    statements: [
      `The total number of possible (rep, account) pairs is 40.`,
      `The pair (Maria, Account 3) is the same coverage assignment as (Account 3, Maria).`,
      `If the firm currently has zero client accounts, no coverage assignments can be formed no matter how many reps it hires.`,
      `In the pair (rep, account), the statement "(Maria, Account 3) belongs to Reps $\\times$ Accounts" means Maria $\\in$ Accounts and Account $3 \\in$ Reps.`,
      `If the firm hires one more rep (6 reps total) while keeping 8 accounts, the number of possible assignments becomes 48.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The overview already counted 

$$5\\cdot 8=40$$

 ordered pairs. Product size is cells, not 

$$5+8=13$$

 people-plus-accounts. The claim is that same figure $40$.

Set beside the claim, the computed result is

$$5+8=13$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → False

Coverage pairs are ordered: first slot is the rep, second is the account. The pair (Maria, Account $3$) and the pair (Account $3$, Maria) are different objects; the second treats Account $3$ as the rep. Order is the whole point of a Cartesian product,

So the statement is False.`

      `**C.** → True

Zero accounts means the second factor is empty, so

$$r\\cdot 0=0$$

for any number $r$ of reps. Without a second coordinate there is no ordered pair. Hiring more reps cannot create an account slot that does not exist.

Set beside the claim, the computed result is

$$r\\cdot 0=0$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → False

Membership in the product means the first slot is a rep and the second slot is an account. The claim swaps both tests, putting Maria among the accounts and Account $3$ among the reps. Those are the tests for the reversed product,.

Record the verdict against the live claim after the calculation above is complete.

So the statement is False.`

      `**E.** → True

Six reps and eight accounts. The extra arithmetic is the increment from one new rep:

$$6\\cdot 8=48.$$

Equivalently the new rep adds eight new pairs to the old forty, so $40+8=48$. The claim is $48$.

Set beside the claim, the computed result is

$$6\\cdot 8=48.$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `**Part 1: The sets.**

A coverage assignment is an ordered pair (rep, account) in the Cartesian product of the rep set with the account set. There are $5$ reps and $8$ accounts.

**Part 2: The operations.**

The product rule counts the cells:

$$5\\cdot 8=40.$$

First coordinate is the rep; second is the account. Membership means the first slot is a rep and the second slot is an account.`,
  },
  {
    id: `math-1-28`,
    case_id: `MATH 1.28`,
    title: `Frost protection and irrigation`,
    subsection: `1.2`,
    context: `A vineyard defines two conditions for its automated systems. Let $A = \\{T \\in R : T^2 < 16\\}$ be the set of temperatures (in °C) for which grapevines are considered frost-safe, and let $B = \\{T \\in R : T \\ge -1\\}$ be the set of temperatures at which the irrigation system is switched on. Note that A is the open interval $(-4, 4)$ and B is the closed-below interval $[-1, \\infty)$.`,
    statements: [
      `$A \\cap B = [-1, 4)$.`,
      `4 is an element of $A \\cap B$.`,
      `The complement of A in R is $\\{T \\in R : T < -4 \\lor T > 4\\}$.`,
      `$A \\cup B$ is equal to the entire set of real numbers R.`,
      `There exists a temperature that is frost-safe (in A) but does not trigger irrigation (not in B).`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

A temperature must satisfy $-4<T<4$ and $T\\ge -1$. The lower limit becomes $-1$ (included: $(-1)^2=1<16$ and irrigation allows $-1$). The upper limit stays $4$ (excluded: $4^2=16$ is not strictly less than $16$):

$$A\\cap B=[-1,4).$$

The claim is that same interval,

So the statement is True.`

      `**B.** → False

The temperature $4$ sits in $B$ because $4\\ge -1$, but it fails $T^2<16$:

$$4^2=16,$$

and $16$ is not strictly less than $16$, so $4\\notin A$ and therefore $4\\notin A\\cap B$. The overlap $[-1,4)$ is open at $4$ for the same reason,

So the statement is False.`

      `**C.** → False

$A=(-4,4)$ already excluded $\\pm 4$, so the complement must collect them:

$$A^c=(-\\infty,-4]\\cup[4,\\infty).$$

The claimed strict inequalities $T<-4$ or $T>4$ drop those two boundary temperatures. Check $T=4$: $4^2=16$ is not strictly less than $16$, so $4\\notin A$ and $4$ must sit in $A^c$. The claimed roster drops it,.

So the statement is False.`

      `**D.** → False

$A$ covers $(-4,4)$ and $B$ carries on upward from $-1$, so together they reach every temperature above $-4$:

$$A\\cup B=(-4,\\infty).$$

Take $T=-5$: not frost-safe ($25\\ge 16$) and not irrigating ($-5<-1$). The whole ray $(-\\infty,-4]$ lies outside both pieces, so the union is not all of $\\mathbb{R}$,.

So the statement is False.`

      `**E.** → True

Frost-safe yet dry is the leftover 

$$A\\setminus B=(-4,-1)$$

. At 

$$T=-2$$

 we have $4<16$ and $-2<-1$, so irrigation stays off. One witness is enough.

Set beside the claim, the computed result is

$$T=-2$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `**Part 1: The sets.**

The frost rule $T^2<16$ is the open interval $A=(-4,4)$, because $(\\pm 4)^2=16$ is not strictly less than $16$. Irrigation $T\\ge -1$ is the closed-below ray $B=[-1,\\infty)$.

**Part 2: The operations.**

Intersection keeps the tighter limit at each end. Union covers every temperature that satisfies at least one rule. Complement $A^c$ collects every real that $A$ missed, including the endpoints $\\pm 4$.`,
  },
  {
    id: `math-1-29`,
    case_id: `MATH 1.29`,
    title: `Customer survey overlap`,
    subsection: `1.2`,
    context: `A market research firm surveys 200 customers. Let A be the set of customers who like Product A, with $\\lvert A \\rvert = 120$. Let B be the set of customers who like Product B, with $\\lvert B \\rvert = 90$. It is found that $\\lvert A \\cap B \\rvert = 50$ customers like both products.`,
    statements: [
      `The number of customers who like at least one of the two products, $\\lvert A \\cup B \\rvert$, is 170.`,
      `The number of customers who like neither product is 40.`,
      `The number of customers who like only Product A (A but not B) is 90.`,
      `$A \\cap B \\subseteq A$.`,
      `Since $\\lvert A \\rvert$ + $\\lvert B \\rvert = 210$ exceeds the 200 customers surveyed, this proves that EXACTLY 10 customers like both products, with no other value being possible.`,
    ],
    answer_key: [false, true, false, true, false],
    tactical_explanations: [
      `**A.** → False

The overview already formed the union $160$ by subtracting the given overlap $50$ once. The claimed $170$ subtracts only $40$ from $120+90$, as if a neighbouring region were the overlap. The correct subtraction is the measured $50$, so $\\lvert A\\cup B\\rvert=160\\neq 170$,

So the statement is False.`

      `**B.** → True

Neither is the survey minus the union. The overview recovered $\\lvert A\\cup B\\rvert=160$, so

$$200-160=40.$$

The claim is $40$.

Set beside the claim, the computed result is

$$200-160=40.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → False

A-only peels the overlap out of $A$:

$$\\lvert A\\setminus B\\rvert=120-50=70.$$

The claimed $90$ would be right only if the products shared nobody, or if $\\lvert B\\rvert$ were copied onto the A-only cell. The lists do not match,.

Set beside the claim, the computed result is

$$\\lvert A\\setminus B\\rvert=120-50=70.$$

which is not what the statement asserts.

So the statement is False.`

      `**D.** → True

The $50$ who like both already sit inside the $120$ who like $A$. That is all $A\\cap B\\subseteq A$ asks, and it holds for any pair of sets. Intersection is always a subset of each factor.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**E.** → False

The overflow $120+90-200=10$ is only a floor on the overlap, not an exact value. Any overlap from $10$ up to $\\min(120,90)=90$ could fit the headlines, and the survey already reports $50$. "Exactly $10$" confuses a lower bound with a measurement,

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `**Part 1: The sets.**

Among $200$ customers, $\\lvert A\\rvert=120$ like Product A, $\\lvert B\\rvert=90$ like Product B, and $\\lvert A\\cap B\\rvert=50$ like both.

**Part 2: The operations.**

The $50$ dual-likers sit inside each headline, so inclusion-exclusion subtracts the overlap once:

$$\\lvert A\\cup B\\rvert=\\lvert A\\rvert+\\lvert B\\rvert-\\lvert A\\cap B\\rvert=120+90-50=160.$$

A-only is $\\lvert A\\rvert-\\lvert A\\cap B\\rvert$. Neither is the survey size minus the union.`,
  },
  {
    id: `math-1-30`,
    case_id: `MATH 1.30`,
    title: `Union, Intersection, and Difference of Three Sets`,
    subsection: `1.2`,
    context: `Let $A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5, 6\\}$, and $C = \\{7, 8, 9\\}$.`,
    statements: [
      `$A \\cup B = \\{1, 2, 3, 4, 5, 6\\}$.`,
      `$A \\cap B = \\{3, 4\\}$.`,
      `$A \\setminus B = \\{1, 2\\}$.`,
      `$B \\setminus A = A \\setminus B$.`,
      `A and C are disjoint sets.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Union keeps every member of each input, repeats written once. From $A$ keep $1,2,3,4$; from $B$ add the newcomers $5,6$:

$$A\\cup B=\\{1,2,3,4,5,6\\}.$$

The claimed roster matches.

Set beside the claim, the computed result is

$$A\\cup B=\\{1,2,3,4,5,6\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

Intersection keeps only the shared numbers. The overview's scan left $3$ and $4$ in both lists, while $1,2$ miss $B$ and $5,6$ miss $A$, so

$$A\\cap B=\\{3,4\\}.$$

The claimed overlap matches.

Set beside the claim, the computed result is

$$A\\cap B=\\{3,4\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → True

Difference $A\\setminus B$ deletes a member of $A$ only when it also sits in $B$. Deleting the shared pair $3,4$ leaves

$$A\\setminus B=\\{1,2\\}.$$

The numbers $1$ and $2$ miss $B$, so they stay. The claimed leftover matches,.

Set beside the claim, the computed result is

$$A\\setminus B=\\{1,2\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → False

The opposite leftover lives inside $B$:

$$B\\setminus A=\\{5,6\\},$$

while $A\\setminus B=\\{1,2\\}$. Already $1$ sits in the first leftover and misses the second. Difference is not commutative.

Set beside the claim, the computed result is

$$B\\setminus A=\\{5,6\\},$$

which is not what the statement asserts.

So the statement is False.`

      `**E.** → True

Disjointness means the intersection is empty. None of $7,8,9$ appears in $\\{1,2,3,4\\}$, so

$$A\\cap C=\\emptyset.$$

The two lists share nothing.

Set beside the claim, the computed result is

$$A\\cap C=\\emptyset.$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `**Part 1: The sets.**

Let $A=\\{1,2,3,4\\}$, $B=\\{3,4,5,6\\}$, and $C=\\{7,8,9\\}$.

**Part 2: The operations.**

Intersection keeps shared members; union keeps anything that sits in at least one list, written once; difference $X\\setminus Y$ keeps members of $X$ that miss $Y$. Two sets are disjoint when they share nothing. Scan $A$ against $B$: $3$ and $4$ sit in both, $1$ and $2$ miss $B$, and $5$ and $6$ miss $A$. Scan $A$ against $C$: no shared member.`,
  },
  {
    id: `math-1-31`,
    case_id: `MATH 1.31`,
    title: `Set Operations on Multiples of Ten`,
    subsection: `1.2`,
    context: `Let $A = \\{10, 20, 30, 40, 50\\}$, $B = \\{30, 40, 50, 60\\}$, and $C = \\{1, 2, 3\\}$.`,
    statements: [
      `$A \\cup B = \\{10, 20, 30, 40, 50, 60\\}$.`,
      `$A \\cap B = \\{30, 40, 50\\}$.`,
      `$A \\setminus B = \\{10, 20\\}$.`,
      `$B \\setminus A = A \\setminus B$.`,
      `A and C are disjoint sets.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

A union must contain every member of each input. Keep $A$'s five multiples and the newcomer $60$ from $B$; the overlap $30,40,50$ is not written twice:

$$A\\cup B=\\{10,20,30,40,50,60\\}.$$

The claimed roster matches.

Set beside the claim, the computed result is

$$A\\cup B=\\{10,20,30,40,50,60\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

Intersection keeps only the numbers that clear both lists. The overview's scan left $\\{30,40,50\\}$. The numbers $10$ and $20$ miss $B$, and $60$ misses $A$. The claimed overlap matches.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**C.** → True

Difference $A\\setminus B$ deletes a member of $A$ only when that member also sits in $B$. Shared $30,40,50$ leave; private $10,20$ stay:

$$A\\setminus B=\\{10,20\\}.$$

The claimed leftover matches.

Set beside the claim, the computed result is

$$A\\setminus B=\\{10,20\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → False

The opposite leftover is 

$$B\\setminus A=\\{60\\}$$

, while 

$$A\\setminus B=\\{10,20\\}$$

. The sizes already disagree ($1$ versus $2$), and $10$ sits in the first leftover but not the second. Difference is not commutative.

Set beside the claim, the computed result is

$$A\\setminus B=\\{10,20\\}$$

which is not what the statement asserts.

So the statement is False.`

      `**E.** → True

Disjointness means the intersection is empty. Every member of $A$ is at least $10$, while $C$ stops at $3$, so

$$A\\cap C=\\emptyset.$$

There is no shared multiple of ten among $1,2,3$.

Set beside the claim, the computed result is

$$A\\cap C=\\emptyset.$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `**Part 1: The sets.**

Let $A=\\{10,20,30,40,50\\}$, $B=\\{30,40,50,60\\}$, and $C=\\{1,2,3\\}$.

**Part 2: The operations.**

Intersection keeps numbers tagged in both $A$ and $B$. Union keeps every tagged number once. Difference $A\\setminus B$ keeps the $A$-only numbers; $B\\setminus A$ keeps the $B$-only numbers. Two sets are disjoint when they share nothing. Scan $A$ against $B$: shared $30,40,50$; $A$-only $10,20$; $B$-only $60$. Scan $A$ against $C$: no shared member.`,
  },
  {
    id: `math-1-32`,
    case_id: `MATH 1.32`,
    title: `Set Operations with Letters`,
    subsection: `1.2`,
    context: `Let $A = \\{a, b, c, d\\}$, $B = \\{c, d, e\\}$, and $C = \\{x, y\\}$.`,
    statements: [
      `$A \\cup B = \\{a, b, c, d, e\\}$.`,
      `$A \\cap B = \\{c, d\\}$.`,
      `$A \\setminus B = \\{a, b\\}$.`,
      `$B \\setminus A = A \\setminus B$.`,
      `A and C are disjoint sets.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Putting $A$ and $B$ together keeps $a,b,c,d$ from $A$ and the newcomer $e$ from $B$. The shared $c$ and $d$ are not written twice:

$$A\\cup B=\\{a,b,c,d,e\\}.$$

The claimed roster matches.

Set beside the claim, the computed result is

$$A\\cup B=\\{a,b,c,d,e\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

Intersection keeps only the letters that appear on both rosters. Letters $a$ and $b$ sit in $A$ and miss $B$; letter $e$ sits in $B$ and misses $A$. Only $c$ and $d$ clear both tests:

$$A\\cap B=\\{c,d\\}.$$

The claimed overlap matches,

So the statement is True.`

      `**C.** → True

Difference $A\\setminus B$ keeps $A$'s private letters. Letters $c$ and $d$ sit in $B$, so they leave:

$$A\\setminus B=\\{a,b\\}.$$

The claimed leftover matches.

Set beside the claim, the computed result is

$$A\\setminus B=\\{a,b\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → False

The opposite leftover is the singleton 

$$B\\setminus A=\\{e\\}$$

, while 

$$A\\setminus B=\\{a,b\\}$$

. Different sizes already forbid equality, and $a$ sits in one leftover but not the other. Difference is not commutative.

Set beside the claim, the computed result is

$$A\\setminus B=\\{a,b\\}$$

which is not what the statement asserts.

So the statement is False.`

      `**E.** → True

$C=\\{x,y\\}$ shares no letter with $A=\\{a,b,c,d\\}$, so

$$A\\cap C=\\emptyset.$$

Disjointness is that empty overlap.

Set beside the claim, the computed result is

$$A\\cap C=\\emptyset.$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `**Part 1: The sets.**

Three letter lists $A=\\{a,b,c,d\\}$, $B=\\{c,d,e\\}$, and $C=\\{x,y\\}$.

**Part 2: The operations.**

Shared letters give the intersection. The combined list is the union, each letter once. Leftovers after a difference are the private letters. An empty overlap is disjointness. Lining $A$ up against $B$: $c$ and $d$ appear in both, $a$ and $b$ only in $A$, and $e$ only in $B$. The third set $C=\\{x,y\\}$ shares no letter with $A$.`,
  },
  {
    id: `math-1-33`,
    case_id: `MATH 1.33`,
    title: `De Morgan's Laws with a Ten-Element Universe`,
    subsection: `1.2`,
    context: `Let $U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$ be the universal set, $A = \\{1, 2, 3, 4, 5\\}$, and $B = \\{4, 5, 6, 7, 8\\}$.`,
    statements: [
      `$(A \\cup B)^c = \\{9, 10\\}$.`,
      `$(A \\cup B)^c = A^c \\cap B^c$.`,
      `$(A \\cap B)^c = A^c \\cup B^c$.`,
      `$A^c = \\{6, 7, 8, 9, 10\\}$.`,
      `$(A \\cap B)^c = \\{1, 2, 3, 6, 7, 8, 9, 10\\}$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Putting $A$ and $B$ together covers $1$ through $8$, so

$$A\\cup B=\\{1,2,3,4,5,6,7,8\\}$$

and the leftover in $U$ is

$$(A\\cup B)^c=\\{9,10\\}.$$

Those two numbers sit in neither $A$ nor $B$. The claim is that same list.

Set beside the claim, the computed result is

$$(A\\cup B)^c=\\{9,10\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

De Morgan's first law says $(A\\cup B)^c=A^c\\cap B^c$. The overview listed $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$, so

$$A^c\\cap B^c=\\{9,10\\}.$$

Numbers $6,7,8$ miss $A$ but sit in $B$, so they fail the intersection of complements. The two sides agree,

So the statement is True.`

      `**C.** → True

The overview listed $A\\cap B=\\{4,5\\}$. Removing those two from $U$ leaves

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

Joining $A^c$ with $B^c$ produces the same list, so $(A\\cap B)^c=A^c\\cup B^c$.

Set beside the claim, the computed result is

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → True

$A^c$ is $U$ minus $A$: drop $1$ through $5$, keep $\\{6,7,8,9,10\\}$. The overview already recorded that list. Complement is a scan of the universe, not of $A$ rewritten backwards. The claim matches.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**E.** → True

The overview listed $A\\cap B=\\{4,5\\}$, so removing those two from $U$ leaves

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

That list keeps $A$-only, $B$-only, and neither. The claim is that same eight-number roster.

Set beside the claim, the computed result is

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `**Part 1: The sets.**

Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$. A complement $X^c$ is everything in $U$ that $X$ leaves out.

**Part 2: The operations.**

De Morgan's laws say taking complements swaps union and intersection:

$$(A\\cup B)^c=A^c\\cap B^c,\\qquad (A\\cap B)^c=A^c\\cup B^c.$$

Escaping a union means escaping both sets at once. Escaping an intersection takes only escaping one of them. The shared pieces are

$$A\\cap B=\\{4,5\\},\\qquad A^c=\\{6,7,8,9,10\\},\\qquad B^c=\\{1,2,3,9,10\\}.$$`,
  },
  {
    id: `math-1-34`,
    case_id: `MATH 1.34`,
    title: `Complements of Disjoint Odd and Even Sets`,
    subsection: `1.2`,
    context: `Let $U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12\\}$ be the universal set, $A = \\{1, 3, 5, 7, 9, 11\\}$, and $B = \\{2, 4, 6, 8, 10, 12\\}$.`,
    statements: [
      `$(A \\cup B)^c = \\emptyset$.`,
      `$(A \\cup B)^c = A^c \\cap B^c$.`,
      `$(A \\cap B)^c = A^c \\cup B^c$.`,
      `$A^c = \\{2, 4, 6, 8, 10, 12\\}$.`,
      `$(A \\cap B)^c = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12\\}$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Odds union evens reconstructs all of $U$, so $A\\cup B=U$ and

$$(A\\cup B)^c=U^c=\\emptyset.$$

There is no leftover integer between $1$ and $12$.

Set beside the claim, the computed result is

$$(A\\cup B)^c=U^c=\\emptyset.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

$A^c$ is the evens and $B^c$ is the odds, so their intersection is empty: nothing is even and odd at once. That matches $(A\\cup B)^c=\\emptyset$, which is De Morgan in this extreme case:

$$A^c\\cap B^c=B\\cap A=\\emptyset.$$

The two sides agree,

So the statement is True.`

      `**C.** → True

$$A\\cap B=\\emptyset$$

, so 

$$(A\\cap B)^c=U$$

. The other side $A^c\\cup B^c$ is evens joined with odds, again $U$. Complementing the empty set relative to $U$ restores $U$ in full.

Set beside the claim, the computed result is

$$(A\\cap B)^c=U$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → True

Deleting the odds from $U$ leaves the evens, so

$$A^c=\\{2,4,6,8,10,12\\}.$$

Complement of a partition block is the other block, which is $B$. The claim matches that list.

Set beside the claim, the computed result is

$$A^c=\\{2,4,6,8,10,12\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**E.** → True

Removing nothing from $U$ leaves $U$, so

$$(A\\cap B)^c=\\emptyset^c=U=\\{1,2,3,4,5,6,7,8,9,10,11,12\\}.$$

The claimed list is that full universe. Complementing $\\emptyset$ relative to a universe always gives the universe back,.

Set beside the claim, the computed result is

$$(A\\cap B)^c=\\emptyset^c=U=\\{1,2,3,4,5,6,7,8,9,10,11,12\\}.$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `**Part 1: The sets.**

This pair is a partition of $U=\\{1,2,\\ldots,12\\}$: $A=\\{1,3,5,7,9,11\\}$ holds every odd and $B=\\{2,4,6,8,10,12\\}$ holds every even. No overlap, no gaps.

**Part 2: The operations.**

No whole number is odd and even at once, so $A\\cap B=\\emptyset$. Every whole number is one or the other, so $A\\cup B=U$. Complement of a partition block is the other block. Complementing the empty set relative to $U$ restores $U$. De Morgan's laws come through these extreme cases untouched.`,
  },
  {
    id: `math-1-35`,
    case_id: `MATH 1.35`,
    title: `De Morgan's Laws with Letter Sets`,
    subsection: `1.2`,
    context: `Let $U = \\{p, q, r, s, t, u\\}$ be the universal set, $A = \\{p, q, r\\}$, and $B = \\{r, s\\}$.`,
    statements: [
      `$(A \\cup B)^c = \\{t, u\\}$.`,
      `$(A \\cup B)^c = A^c \\cap B^c$.`,
      `$(A \\cap B)^c = A^c \\cup B^c$.`,
      `$A^c = \\{s, t, u\\}$.`,
      `$(A \\cap B)^c = \\{p, q, s, t, u\\}$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

Putting $A$ and $B$ together covers $\\{p,q,r,s\\}$. Of the six letters in $U$ only $t$ and $u$ are left out, so

$$(A\\cup B)^c=\\{t,u\\}.$$

Letter $s$ sits in $B$, so it sits in the union and cannot sit in the complement. The claim matches,

So the statement is True.`

      `**B.** → True

The overview listed 

$$A^c=\\{s,t,u\\}$$

 and 

$$B^c=\\{p,q,t,u\\}$$

. Their intersection is $\\{t,u\\}$, matching $(A\\cup B)^c$. Letter $s$ fails the intersection because $s\\in B$. De Morgan's first law is that agreement.

Set beside the claim, the computed result is

$$B^c=\\{p,q,t,u\\}$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → True

The overview listed $A\\cap B=\\{r\\}$, so $(A\\cap B)^c$ is every letter of $U$ except $r$. Joining the two complements produces the same five letters $\\{p,q,s,t,u\\}$. Letter $p$ misses $B$ and letter $s$ misses $A$; each escapes the intersection by escaping one set. The two sides agree,

So the statement is True.`

      `**D.** → True

Drop $p,q,r$ from $U$ and $\\{s,t,u\\}$ remain. The overview already recorded $A^c=\\{s,t,u\\}$. Complement does not also drop $s$ just because $s\\in B$; that would be $A^c\\cap B^c$. The claim matches.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**E.** → True

Remove the single shared letter $r$ from $U$ and $\\{p,q,s,t,u\\}$ stay. Letters $p$ and $q$ stay because they miss $B$; $s$ stays because it misses $A$. The claimed five-letter list matches $(A\\cap B)^c$.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `**Part 1: The sets.**

Six letters make up the universe $U=\\{p,q,r,s,t,u\\}$, and $A=\\{p,q,r\\}$ overlaps $B=\\{r,s\\}$ in the single letter $r$.

**Part 2: The operations.**

A letter is outside a union when it is outside both sets, and outside an intersection when it is outside at least one of them. Those are De Morgan's laws in plain words. The shared pieces are

$$A\\cup B=\\{p,q,r,s\\},\\qquad A\\cap B=\\{r\\},\\qquad A^c=\\{s,t,u\\},\\qquad B^c=\\{p,q,t,u\\}.$$`,
  },
  {
    id: `math-1-36`,
    case_id: `MATH 1.36`,
    title: `Cartesian Products and Ordered Pairs`,
    subsection: `1.2`,
    context: `Let $A = \\{1, 2\\}$ and $B = \\{x, y, z\\}$.`,
    statements: [
      `$\\lvert A \\times B\\rvert = 6$.`,
      `$(1, x) \\in A \\times B$.`,
      `$(x, 1) \\in A \\times B$.`,
      `$A \\times B = B \\times A$.`,
      `$\\lvert A \\times B\\rvert = \\lvert B \\times A\\rvert$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The overview already counted 

$$\\lvert A\\times B\\rvert=2\\cdot 3=6$$

. Product size is the number of cells, not the number of distinct symbols used. Two rows and three columns are six ordered pairs.

Set beside the claim, the computed result is

$$\\lvert A\\times B\\rvert=2\\cdot 3=6$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

The pair $(1,x)$ has first slot from $A$ and second from $B$, so both membership tests succeed. Ordered pairs treat $(1,x)$ and $(x,1)$ as different objects; this letter is the number-first pair, so $(1,x)\\in A\\times B$.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**C.** → False

The pair $(x,1)$ has a letter in the first slot, and $x\\notin A$. The first slot already fails, so the pair is out of $A\\times B$ (it does sit in $B\\times A$). Ordered pairs treat $(1,x)$ and $(x,1)$ as different objects.

Record the verdict against the live claim after the calculation above is complete.

So the statement is False.`

      `**D.** → False

Every pair in $A\\times B$ reads (number, letter); every pair in $B\\times A$ reads (letter, number). In particular $(1,x)$ sits in the first product and cannot sit in the second, because $1\\notin B$. Set equality needs identical members, not identical counts,

So the statement is False.`

      `**E.** → True

Size ignores order: $2\\cdot 3=6$ and $3\\cdot 2=6$. Both products hold six pairs even though the pairs themselves differ:

$$\\lvert A\\times B\\rvert=\\lvert B\\times A\\rvert=6.$$

The counts agree.

Set beside the claim, the computed result is

$$\\lvert A\\times B\\rvert=\\lvert B\\times A\\rvert=6.$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `**Part 1: The sets.**

The task gives $A=\\{1,2\\}$ and $B=\\{x,y,z\\}$. Every claim here is about the ordered pairs formed from those two sets.

**Part 2: The operations.**

An ordered pair records which object plays which role. The Cartesian product $A\\times B$ is the set of all pairs whose first entry comes from $A$ and whose second comes from $B$. Size is the product rule

$$\\lvert A\\times B\\rvert=\\lvert A\\rvert\\cdot\\lvert B\\rvert=2\\cdot 3=6.$$

Turning the grid on its side produces $B\\times A$, same count, different members.`,
  },
  {
    id: `math-1-37`,
    case_id: `MATH 1.37`,
    title: `Cartesian Product Size vs. Pair Membership`,
    subsection: `1.2`,
    context: `Let $A = \\{m, n, p\\}$ and $B = \\{1, 2\\}$.`,
    statements: [
      `$\\lvert A \\times B\\rvert = 6$.`,
      `$(m, 1) \\in A \\times B$.`,
      `$(1, m) \\in A \\times B$.`,
      `$A \\times B = B \\times A$.`,
      `$\\lvert A \\times B\\rvert = \\lvert B \\times A\\rvert$.`,
    ],
    answer_key: [true, true, false, false, true],
    tactical_explanations: [
      `**A.** → True

The overview already counted 

$$3\\cdot 2=6$$

 letter-first pairs. Product size counts ordered pairs, not the five symbols $m,n,p,1,2$. Three letters with two numbers each give six cells.

Set beside the claim, the computed result is

$$3\\cdot 2=6$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

Membership in $A\\times B$ is a two-slot test. For $(m,1)$ both slots succeed: $m\\in A$ and $1\\in B$. That is the letter-first convention in this stem, so $(m,1)\\in A\\times B$.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**C.** → False

The pair $(1,m)$ puts a number first, and $1\\notin A$. The first slot already fails, so the pair is out of $A\\times B$ (it does sit in $B\\times A$). The product $A\\times B$ is six letter-first pairs; none begins with $1$.

Record the verdict against the live claim after the calculation above is complete.

So the statement is False.`

      `**D.** → False

$A\\times B$ is letter-first; $B\\times A$ is number-first. Witness: $(m,1)$ is on the first list and missing from the second, because $m\\notin B$. Set equality needs identical members, not identical counts. The two products share no pair,

So the statement is False.`

      `**E.** → True

The product rule is commutative as a count:

$$3\\cdot 2=6,\\qquad 2\\cdot 3=6.$$

The counts agree while the member lists share no pair.

Set beside the claim, the computed result is

$$3\\cdot 2=6,\\qquad 2\\cdot 3=6.$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 15,
    solution_overview: `**Part 1: The sets.**

Pair every letter of $A=\\{m,n,p\\}$ with every number of $B=\\{1,2\\}$, always keeping the letter first.

**Part 2: The operations.**

The product rule is $\\lvert A\\times B\\rvert=\\lvert A\\rvert\\cdot\\lvert B\\rvert$. A pair belongs to $A\\times B$ only when its first entry comes from $A$ and its second from $B$. Writing the product the other way round gives $B\\times A$: the same count, a different set.

$$\\lvert A\\times B\\rvert=3\\cdot 2=6.$$`,
  },
  {
    id: `math-1-38`,
    case_id: `MATH 1.38`,
    title: `Symmetric Difference of Two Odd-Number Sets`,
    subsection: `1.2`,
    context: `Let $A = \\{1, 3, 5, 7, 9\\}$ and $B = \\{3, 5, 7, 11, 13\\}$.`,
    statements: [
      `$A \\setminus B = \\{1, 9\\}$.`,
      `$B \\setminus A = \\{11, 13\\}$.`,
      `$A \\triangle B = \\{1, 9, 11, 13\\}$.`,
      `$(A \\setminus B) \\cap (B \\setminus A) = \\emptyset$.`,
      `$A \\triangle B = A \\cup B$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Shared $3,5,7$ leave $A$; $1$ and $9$ stay because they miss $B$. The overview already placed those two in the $A$-only bucket, so $A\\setminus B=\\{1,9\\}$. The claimed leftover matches.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**B.** → True

Difference $B\\setminus A$ lives inside $B$. The shared triple $3,5,7$ leaves $B$ because those numbers sit in $A$. The private $11$ and $13$ miss $A$, so they stay:

$$B\\setminus A=\\{11,13\\}.$$

The claimed leftover matches,.

Set beside the claim, the computed result is

$$B\\setminus A=\\{11,13\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → True

Symmetric difference joins the two outer piles. The overview listed $A\\setminus B=\\{1,9\\}$ and $B\\setminus A=\\{11,13\\}$, so

$$A\\triangle B=\\{1,9,11,13\\}.$$

Each of those four sits in exactly one of the original sets. Including $3$ would keep the overlap, which $A\\triangle B$ rejects. The claim matches,.

So the statement is True.`

      `**D.** → True

A number in $A\\setminus B$ is outside $B$; a number in $B\\setminus A$ is inside $B$. Those demands cannot hold together, so

$$(A\\setminus B)\\cap(B\\setminus A)=\\emptyset.$$

The two leftover piles are disjoint by construction,.

Set beside the claim, the computed result is

$$(A\\setminus B)\\cap(B\\setminus A)=\\emptyset.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**E.** → False

Union keeps the middle bucket $\\{3,5,7\\}$; symmetric difference throws it away:

$$A\\triangle B=\\{1,9,11,13\\},\\qquad A\\cup B=\\{1,3,5,7,9,11,13\\}.$$

The two operations differ by exactly the overlap. They would agree only if $A$ and $B$ were disjoint. They share $3,5,7$,

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `**Part 1: The sets.**

The symmetric difference $A\\triangle B$ keeps the numbers belonging to exactly one of the two sets. Let $A=\\{1,3,5,7,9\\}$ and $B=\\{3,5,7,11,13\\}$.

**Part 2: The operations.**

Sort every number into one of three buckets: only in $A$, in both, only in $B$. Symmetric difference is the two outer buckets joined. Union takes all three buckets. The outer buckets can never overlap. The shared pieces are

$$A\\setminus B=\\{1,9\\},\\qquad A\\cap B=\\{3,5,7\\},\\qquad B\\setminus A=\\{11,13\\}.$$`,
  },
  {
    id: `math-1-39`,
    case_id: `MATH 1.39`,
    title: `Symmetric Difference of Disjoint Sets`,
    subsection: `1.2`,
    context: `Let $A = \\{2, 4, 6\\}$ and $B = \\{1, 3, 5\\}$.`,
    statements: [
      `$A \\setminus B = \\{2, 4, 6\\}$.`,
      `$B \\setminus A = \\{1, 3, 5\\}$.`,
      `$A \\triangle B = \\{1, 2, 3, 4, 5, 6\\}$.`,
      `$(A \\setminus B) \\cap (B \\setminus A) = \\emptyset$.`,
      `$A \\triangle B = A \\cup B$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

$A$ is evens and $B$ is odds, so they share nothing. Subtracting $B$ from $A$ therefore deletes nobody:

$$A\\setminus B=A=\\{2,4,6\\}.$$

Empty overlap empties the middle cell, not the left cell. The claimed leftover matches.

Set beside the claim, the computed result is

$$A\\setminus B=A=\\{2,4,6\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

None of $B$'s odds is even, so nothing is deleted:

$$B\\setminus A=B=\\{1,3,5\\}.$$

The three odds all miss $A$, so they all stay. The claimed leftover matches.

Set beside the claim, the computed result is

$$B\\setminus A=B=\\{1,3,5\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → True

With an empty middle bucket, symmetric difference is the two whole sets glued together:

$$A\\triangle B=\\{2,4,6\\}\\cup\\{1,3,5\\}=\\{1,2,3,4,5,6\\}.$$

Each of the six numbers sits in exactly one of $A$ or $B$. The claim matches,.

Set beside the claim, the computed result is

$$A\\triangle B=\\{2,4,6\\}\\cup\\{1,3,5\\}=\\{1,2,3,4,5,6\\}.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → True

The leftovers are the two whole sets, evens and odds. No even equals an odd, so their intersection is empty:

$$(A\\setminus B)\\cap(B\\setminus A)=A\\cap B=\\emptyset.$$

Two nonempty leftovers need not overlap.

Set beside the claim, the computed result is

$$(A\\setminus B)\\cap(B\\setminus A)=A\\cap B=\\emptyset.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**E.** → True

Here the shared part is empty, so there is nothing extra for the union to add:

$$A\\triangle B=\\{1,2,3,4,5,6\\}=A\\cup B.$$

Disjointness is exactly the situation in which $A\\triangle B=A\\cup B$.

Set beside the claim, the computed result is

$$A\\triangle B=\\{1,2,3,4,5,6\\}=A\\cup B.$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `**Part 1: The sets.**

$A=\\{2,4,6\\}$ contains only even numbers and $B=\\{1,3,5\\}$ only odd ones, so no number can belong to both: the sets are disjoint, $A\\cap B=\\emptyset$.

**Part 2: The operations.**

Disjointness makes the subtractions do nothing: there is no shared member to delete, so $A\\setminus B=A$ and $B\\setminus A=B$. Symmetric difference joins the two leftovers. Union keeps every member of either set.`,
  },
  {
    id: `math-1-40`,
    case_id: `MATH 1.40`,
    title: `Chess and Checkers Club Overlap`,
    subsection: `1.2`,
    context: `Of $40$ students in a games club, $22$ play chess (A) and $15$ play checkers (B); $6$ students play both.`,
    statements: [
      `$\\lvert A \\cup B\\rvert = 31$.`,
      `Exactly $16$ people are in A only (not B).`,
      `Exactly $9$ people are in neither A nor B.`,
      `$\\lvert A \\cap B\\rvert > \\lvert A \\cup B\\rvert$.`,
      `Exactly $9$ people are in B only (not A).`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Adding $22+15$ counts the six two-game players twice. Subtracting once restores a single copy. The overview already recovered 

$$\\lvert A\\cup B\\rvert=31$$

. The claim is that same figure.

Set beside the claim, the computed result is

$$\\lvert A\\cup B\\rvert=31$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

Chess-only is the chess headline minus the overlap:

$$22-6=16.$$

Those $16$ sit in $A$ and not in $B$. Reporting $22$ would keep the six who also play checkers. The claim is $16$.

Set beside the claim, the computed result is

$$22-6=16.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → True

Neither is the club total minus the union. The overview recovered the union $31$, so

$$40-31=9.$$

The leftover outside both circles is $9$.

Set beside the claim, the computed result is

$$40-31=9.$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → False

Everyone playing both games is already someone playing at least one, so $A\\cap B\\subseteq A\\cup B$ always. Compare the two sizes: $\\lvert A\\cap B\\rvert=6$ and $\\lvert A\\cup B\\rvert=31$. Already $6<31$. Intersection cannot outnumber the union that contains it,

So the statement is False.`

      `**E.** → True

Checkers-only is the checkers headline minus the overlap:

$$15-6=9.$$

Those $9$ sit in $B$ and not in $A$, still inside the union. The neither-cell's $9$ sit outside the union. Same size, different membership tests. The claim is the checkers-only count $9$,

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `**Part 1: The sets.**

Of $40$ students, $\\lvert A\\rvert=22$ play chess, $\\lvert B\\rvert=15$ play checkers, and $\\lvert A\\cap B\\rvert=6$ play both.

**Part 2: The operations.**

Inclusion-exclusion counts the union by adding the headlines and subtracting the overlap once:

$$\\lvert A\\cup B\\rvert=22+15-6=31.$$

Chess-only is the chess headline minus the overlap; checkers-only is the checkers headline minus the overlap. Neither is the club total minus the union.`,
  },
  {
    id: `math-1-41`,
    case_id: `MATH 1.41`,
    title: `Two Language Courses in One Cohort`,
    subsection: `1.2`,
    context: `Of $60$ students, $34$ are enrolled in Spanish (A) and $28$ in French (B); $12$ students are enrolled in both.`,
    statements: [
      `$\\lvert A \\cup B\\rvert = 50$.`,
      `Exactly $22$ people are in A only (not B).`,
      `Exactly $10$ people are in neither A nor B.`,
      `$\\lvert A \\cap B\\rvert > \\lvert A \\cup B\\rvert$.`,
      `Exactly $16$ people are in B only (not A).`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Two-set inclusion-exclusion recovers the union from the given totals:

$$\\lvert A\\cup B\\rvert=\\lvert A\\rvert+\\lvert B\\rvert-\\lvert A\\cap B\\rvert$$

$$=34+28-12$$

$$=50$$

That matches the claim.

Set beside the claim, the computed result is

$$=50$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

Spanish-only peels the overlap out of the Spanish total. The overview recovered $|A\\cap B|=12$, so

$$\\lvert A\\setminus B\\rvert=\\lvert A\\rvert-\\lvert A\\cap B\\rvert$$

$$=34-12$$

$$=22$$

The claim is $22$. Matching that count, so the statement is True.`,
      `**C.** → True

Students in neither language are the cohort total minus the union:

$$60-\\lvert A\\cup B\\rvert$$

With $\\lvert A\\cup B\\rvert=50$,

$$60-50=10$$

So exactly $10$ take neither course.

Set beside the claim, the computed result is

$$60-50=10$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → False

The intersection is a subset of the union, so its size cannot exceed the union size:

$$\\lvert A\\cap B\\rvert=12$$

$$\\lvert A\\cup B\\rvert=50$$

$$12<50$$

The claim needs $\\lvert A\\cap B\\rvert>\\lvert A\\cup B\\rvert$. The inequality runs the other way. So the statement is False.`,
      `**E.** → True

French-only peels the overlap out of the French total. The overview recovered $|A\\cap B|=12$, so

$$\\lvert B\\setminus A\\rvert=\\lvert B\\rvert-\\lvert A\\cap B\\rvert$$

$$=28-12$$

$$=16$$

The claim is $16$. Matching that count, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Of $60$ students, $|A|=34$ take Spanish, $|B|=28$ take French, and $|A\\cap B|=12$ take both.

Inclusion-exclusion counts each student once:

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

$$|A\\cup B|=34+28-12=50$$

Spanish-only is $|A|-|A\\cap B|$. French-only is $|B|-|A\\cap B|$. Neither is the cohort minus the union. The intersection is a subset of the union.`,
  },
  {
    id: `math-1-42`,
    case_id: `MATH 1.42`,
    title: `Gym Members Using Two Facilities`,
    subsection: `1.2`,
    context: `Of $50$ gym members, $20$ use the pool (A) and $18$ use the sauna (B); $5$ members use both.`,
    statements: [
      `$\\lvert A \\cup B\\rvert = 33$.`,
      `Exactly $15$ people are in A only (not B).`,
      `Exactly $17$ people are in neither A nor B.`,
      `$\\lvert A \\cap B\\rvert > \\lvert A \\cup B\\rvert$.`,
      `Exactly $13$ people are in B only (not A).`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Two-set inclusion-exclusion recovers the union:

$$\\lvert A\\cup B\\rvert=\\lvert A\\rvert+\\lvert B\\rvert-\\lvert A\\cap B\\rvert$$

$$=20+18-5$$

$$=33$$

That matches the claim.

Set beside the claim, the computed result is

$$=33$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

Pool-only peels the overlap out of the pool total. The overview recovered $|A\\cap B|=5$, so

$$\\lvert A\\setminus B\\rvert=\\lvert A\\rvert-\\lvert A\\cap B\\rvert$$

$$=20-5$$

$$=15$$

The claim is $15$. Matching that count, so the statement is True.`,
      `**C.** → True

Members using neither facility are the gym total minus the union:

$$50-\\lvert A\\cup B\\rvert$$

With $\\lvert A\\cup B\\rvert=33$,

$$50-33=17$$

So exactly $17$ use neither.

Set beside the claim, the computed result is

$$50-33=17$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → False

The intersection is a subset of the union:

$$\\lvert A\\cap B\\rvert=5$$

$$\\lvert A\\cup B\\rvert=33$$

$$5<33$$

The claim needs $\\lvert A\\cap B\\rvert>\\lvert A\\cup B\\rvert$. The inequality runs the other way.

Set beside the claim, the computed result is

$$5<33$$

which is not what the statement asserts.

So the statement is False.`,
      `**E.** → True

Sauna-only peels the overlap out of the sauna total. The overview recovered $|A\\cap B|=5$, so

$$\\lvert B\\setminus A\\rvert=\\lvert B\\rvert-\\lvert A\\cap B\\rvert$$

$$=18-5$$

$$=13$$

The claim is $13$. Matching that count, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 20,
    solution_overview: `Of $50$ gym members, $|A|=20$ use the pool, $|B|=18$ use the sauna, and $|A\\cap B|=5$ use both.

Inclusion-exclusion counts each member once:

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

$$|A\\cup B|=20+18-5=33$$

Pool-only is $|A|-|A\\cap B|$. Sauna-only is $|B|-|A\\cap B|$. Neither is membership minus the union. The intersection is a subset of the union.`,
  },
  {
    id: `math-1-43`,
    case_id: `MATH 1.43`,
    title: `Three Overlapping Hobby Clubs`,
    subsection: `1.2`,
    context: `In a survey of hobby-club members: $30$ do photography (A), $25$ do hiking (B), and $20$ do cooking (C). $10$ do both photography and hiking, $8$ do both photography and cooking, $7$ do both hiking and cooking, and $3$ do all three.`,
    statements: [
      `$\\lvert A \\cup B \\cup C\\rvert = 53$.`,
      `Every member who does all three activities is counted in $\\lvert A \\cap B\\rvert$, $\\lvert A \\cap C\\rvert$, and $\\lvert B \\cap C\\rvert$.`,
      `The number who do photography and hiking but not cooking is $7$.`,
      `$\\lvert A \\cap B \\cap C\\rvert \\le \\min(\\lvert A \\cap B\\rvert, \\lvert A \\cap C\\rvert, \\lvert B \\cap C\\rvert)$.`,
      `$\\lvert A \\cup B \\cup C\\rvert > \\lvert A\\rvert + \\lvert B\\rvert + \\lvert C\\rvert$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Three-set inclusion-exclusion recovers the union. The overview (or direct substitution) gives

$$\\lvert A\\cup B\\cup C\\rvert=30+25+20-10-8-7+3$$

$$=75-25+3$$

$$=53$$

That matches the claim.

Set beside the claim, the computed result is

$$=53$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

Anyone who does all three activities sits inside each pairwise overlap. With $\\lvert A\\cap B\\cap C\\rvert=3$,

$$A\\cap B\\cap C\\subseteq A\\cap B$$

$$A\\cap B\\cap C\\subseteq A\\cap C$$

$$A\\cap B\\cap C\\subseteq B\\cap C$$

So the triple is contained in every pairwise intersection. So the statement is True.`,
      `**C.** → True

Exactly photography-and-hiking (not cooking) peels the triple out of the pairwise total:

$$\\lvert A\\cap B\\setminus C\\rvert=\\lvert A\\cap B\\rvert-\\lvert A\\cap B\\cap C\\rvert$$

$$=10-3=7$$

That matches the claim.

Set beside the claim, the computed result is

$$=10-3=7$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**D.** → True

The triple group is a subset of each pair, so its size cannot exceed any pairwise size:

$$3\\le 10$$

$$3\\le 8$$

$$3\\le 7$$

Hence $3\\le\\min(10,8,7)$. The claimed inequality holds.

Set beside the claim, the computed result is

$$3\\le 7$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**E.** → False

Compare the raw sum of the three totals with the union:

$$\\lvert A\\rvert+\\lvert B\\rvert+\\lvert C\\rvert=30+25+20=75$$

$$\\lvert A\\cup B\\cup C\\rvert=53$$

Already $53<75$. The claim needs $53>75$. The inequality runs the other way. So the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 21,
    solution_overview: `Three hobby groups overlap: $|A|=30$ photography, $|B|=25$ hiking, $|C|=20$ cooking, with pairwise totals $|A\\cap B|=10$, $|A\\cap C|=8$, $|B\\cap C|=7$, and triple overlap $|A\\cap B\\cap C|=3$.

Three-set inclusion-exclusion counts each person once:

$$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$$

$$30+25+20=75$$

$$10+8+7=25$$

$$75-25+3=53$$

An exact-pair region is the pairwise total minus the triple. The triple group sits inside every pair.`,
  },
  {
    id: `math-1-44`,
    case_id: `MATH 1.44`,
    title: `Prime and even properties of the number 7`,
    subsection: `1.3`,
    context: `The number 7 is prime and is not even.`,
    statements: [
      `7 is both prime and even.`,
      `7 is prime or even.`,
      `It is not true that 7 is both prime and even.`,
      `7 is neither prime nor even.`,
      `It is not true that 7 is prime or even.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

Conjunction is true only when both inputs are true. The overview recovered $P$ true and $Q$ false, so

$$P\\land Q=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

The claim says this conjunction is true, but its value is false.

Set beside the claim, the computed result is

$$P\\land Q=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

which is not what the statement asserts.

So the statement is False.`

      `**B.** → True

Inclusive or is true when at least one input is true. The overview recovered $P$ true and $Q$ false, so

$$P\\lor Q=\\mathrm{T}\\lor\\mathrm{F}=\\mathrm{T}$$

The claim says this disjunction is true, and its value is true.

Set beside the claim, the computed result is

$$P\\lor Q=\\mathrm{T}\\lor\\mathrm{F}=\\mathrm{T}$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → True

Negation reverses the truth value of the complete conjunction. First evaluate the conjunction:

$$P\\land Q=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

Then negate that result:

$$\\neg(P\\land Q)=\\neg\\mathrm{F}=\\mathrm{T}$$

The claim says the conjunction is not true, and the negated expression is true,.

So the statement is True.`

      `**D.** → False

"Neither prime nor even" means that both propositions are false. The overview recovered $P$ true and $Q$ false, so

$$\\neg P\\land\\neg Q=\\mathrm{F}\\land\\mathrm{T}=\\mathrm{F}$$

The claim says this expression is true, but its value is false,

So the statement is False.`

      `**E.** → False

Negation reverses the truth value of the complete disjunction. First evaluate the disjunction:

$$P\\lor Q=\\mathrm{T}\\lor\\mathrm{F}=\\mathrm{T}$$

Then negate that result:

$$\\neg(P\\lor Q)=\\neg\\mathrm{T}=\\mathrm{F}$$

The claim says the negated disjunction is true, but its value is false,

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `The number $7$ is prime and is not even. Write $P$ for "$7$ is prime" and $Q$ for "$7$ is even". Then $P$ is true and $Q$ is false.

Conjunction $P\\land Q$ is true only when both parts are true. Inclusive disjunction $P\\lor Q$ is true when at least one part is true. Negation $\\neg$ flips a truth value.

De Morgan identifies $\\neg(P\\land Q)$ with $\\neg P\\lor\\neg Q$, and $\\neg(P\\lor Q)$ with $\\neg P\\land\\neg Q$.`,
  },
  {
    id: `math-1-45`,
    case_id: `MATH 1.45`,
    title: `Primes greater than 2`,
    subsection: `1.3`,
    context: `Consider the statement: “For every prime number p greater than 2, p is an odd number.”`,
    statements: [
      `The statement is true.`,
      `The number 2 is a counterexample to the statement.`,
      `The correct negation of the statement is: “There exists a prime number p greater than 2 such that p is even.”`,
      `Since all primes greater than 2 are odd, it follows that all odd numbers greater than 2 are prime.`,
      `There are infinitely many primes greater than 2.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Take any prime $p>2$. If $p$ were even, then $p=2k$ for some integer $k>1$, so $p$ would have the non-trivial divisor $2$:

$$p=2k,\\quad k>1\\quad\\Longrightarrow\\quad 1<2<p$$

That contradicts primality. Hence every prime in the stated domain is odd:

$$\\forall p\\,((\\mathrm{Prime}(p)\\land p>2)\\Rightarrow\\mathrm{Odd}(p))$$

The universal claim is therefore True.

So the statement is True.`

      `**B.** → False

A counterexample must satisfy the domain conditions and fail the conclusion. Although $2$ is prime and not odd, it fails the strict domain test:

$$2>2=\\mathrm{F}$$

Thus the complete counterexample test gives

$$\\mathrm{Prime}(2)\\land(2>2)\\land\\neg\\mathrm{Odd}(2)
=\\mathrm{T}\\land\\mathrm{F}\\land\\mathrm{T}
=\\mathrm{F}$$

The number $2$ is outside the quantified range, so it is not a counterexample and.

So the statement is False.`

      `**C.** → True

Negating $\\forall p>2\\,(\\mathrm{Prime}(p)\\Rightarrow\\mathrm{Odd}(p))$ produces an existential with the conclusion flipped, still restricted to $p>2$:

$$\\exists p>2\\,(\\mathrm{Prime}(p)\\land\\mathrm{Even}(p))$$

The quoted sentence is that negation,

So the statement is True.`

      `**D.** → False

The converse says every odd number greater than $2$ is prime. Test $9$:

$$9>2,\\qquad 9=3\\cdot 3$$

The number $9$ is odd and composite. One counterexample kills the converse.

Set beside the claim, the computed result is

$$9>2,\\qquad 9=3\\cdot 3$$

which is not what the statement asserts.

So the statement is False.`

      `**E.** → True

Euclid's theorem says that the set $\\mathbb P$ of all primes is infinite. The primes greater than $2$ are exactly

$$\\{p\\in\\mathbb P:p>2\\}=\\mathbb P\\setminus\\{2\\}$$

If this remaining set were finite, adding the one omitted prime would make

$$\\mathbb P=(\\mathbb P\\setminus\\{2\\})\\cup\\{2\\}$$

finite, contradicting Euclid's theorem. Therefore infinitely many primes are greater than $2$,.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `The statement is: for every prime $p>2$, $p$ is odd.

A prime has exactly two positive divisors, $1$ and itself. An even integer larger than $2$ is also divisible by $2$, so it has at least three divisors and cannot be prime. The only even prime is $2$, and the domain $p>2$ excludes it.

A counterexample must sit in that domain and fail the conclusion. Negating a universal swaps $\\forall$ for $\\exists$ and negates the predicate, keeping $p>2$. The converse swaps the two halves.`,
  },
  {
    id: `math-1-46`,
    case_id: `MATH 1.46`,
    title: `University prerequisite chain`,
    subsection: `1.3`,
    context: `A university's rules state:

(1) A student may enrol in Advanced Macroeconomics only if they have passed Intermediate Macroeconomics.

(2) A student may enrol in Intermediate Macroeconomics only if they have passed Principles of Economics.

Maria is currently enrolled in Advanced Macroeconomics.`,
    statements: [
      `Maria has passed Intermediate Macroeconomics.`,
      `Maria has passed Principles of Economics.`,
      `Passing Principles of Economics is a necessary condition for enrolling in Advanced Macroeconomics.`,
      `Passing Principles of Economics is a sufficient condition for enrolling in Advanced Macroeconomics.`,
      `We may conclude that Maria passed Principles of Economics with a perfect grade.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Let $A$ mean that Maria is enrolled in Advanced and $I$ mean that she passed Intermediate. “Advanced only if Intermediate” gives

$$A\\Rightarrow I$$

Maria's enrolment makes $A=\\mathrm{T}$. Modus ponens evaluates the required consequence:

$$A=\\mathrm{T},\\quad A\\Rightarrow I\\quad\\Longrightarrow\\quad I=\\mathrm{T}$$

Maria has passed Intermediate,.

So the statement is True.`

      `**B.** → True

Let $P$ mean that Maria passed Principles. The two prerequisite rules form

$$A\\Rightarrow I,\\qquad I\\Rightarrow P$$

Since Maria has $A=\\mathrm{T}$, apply the implications in order:

$$A=\\mathrm{T}\\Longrightarrow I=\\mathrm{T}\\Longrightarrow P=\\mathrm{T}$$

The second rule therefore forces Maria to have passed Principles,.

So the statement is True.`

      `**C.** → True

Compose the prerequisite implications:

$$A\\Rightarrow I,\\quad I\\Rightarrow P
\\quad\\Longrightarrow\\quad
A\\Rightarrow P$$

The resulting arrow says that whenever Advanced enrolment is true, passing Principles must also be true:

$$A=\\mathrm{T}\\quad\\Longrightarrow\\quad P=\\mathrm{T}$$

That makes Principles a necessary condition for Advanced enrolment,.

So the statement is True.`

      `**D.** → False

Calling Principles sufficient for Advanced would reverse the established chain and require

$$P\\Rightarrow A$$

Consider a student who passed Principles but never passed Intermediate and is not enrolled in Advanced:

$$P=\\mathrm{T},\\qquad I=\\mathrm{F},\\qquad A=\\mathrm{F}$$

Both original rules hold vacuously because their antecedents are false, but the proposed reverse implication evaluates as

$$P\\Rightarrow A=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

Passing Principles alone is not sufficient for Advanced enrolment,.

So the statement is False.`

      `**E.** → False

The rules permit only the pass/fail chain

$$A(M)=\\mathrm{T}\\Longrightarrow I(M)=\\mathrm{T}\\Longrightarrow P(M)=\\mathrm{T}$$

Here $P(M)=\\mathrm{T}$ means only “Maria passed Principles.” It does not encode any numerical grade:

$$P(M)=\\mathrm{T}\\not\\Rightarrow \\mathrm{Grade}(M)=100\\%$$

Maria could have earned any passing mark. A perfect grade cannot be inferred,.

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `"You may enrol in $X$ only if you have passed $Y$" is $X\\Rightarrow Y$: $Y$ is necessary for $X$, not sufficient.

Write $A$ for enrolling in Advanced Macroeconomics, $I$ for passing Intermediate, and $P$ for passing Principles. The two rules form the chain

$$A\\Rightarrow I\\Rightarrow P$$

Maria is enrolled in Advanced, so both arrows fire: she has passed Intermediate, and therefore Principles. The reverse arrow $P\\Rightarrow A$ is not supplied. The rules speak only of passing and enrolling; they record no marks.`,
  },
  {
    id: `math-1-47`,
    case_id: `MATH 1.47`,
    title: `Primes and Even Numbers Below Fifteen`,
    subsection: `1.3`,
    context: `Let $P = \\{2, 3, 5, 7, 11, 13\\}$ (the primes less than 15) and $E = \\{2, 4, 6, 8, 10, 12, 14\\}$ (the even numbers less than 15).`,
    statements: [
      `$P \\cap E = \\{2\\}$`,
      `$P \\setminus E = \\{3, 5, 7, 11, 13\\}$`,
      `"$\\forall x \\in P$, x is odd" is a true statement`,
      `For every $x$, if $x \\in P$ and $x \\neq 2$, then $x$ is odd.`,
      `$P \\subseteq E$`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

Scan $P$ against $E$. The only shared member is the even prime $2$:

$$P\\cap E=\\{2\\}$$

The claim is that singleton.

Set beside the claim, the computed result is

$$P\\cap E=\\{2\\}$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

Difference $P\\setminus E$ deletes a member of $P$ only when it also sits in $E$. Throwing $2$ out of $P$ leaves

$$P\\setminus E=\\{3,5,7,11,13\\}$$

The claim is that roster.

Set beside the claim, the computed result is

$$P\\setminus E=\\{3,5,7,11,13\\}$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → False

A universal claim over $P$ must work for every listed prime. Test the member $x=2$:

$$2\\in P,\\qquad \\mathrm{Odd}(2)=\\mathrm{F}$$

Equivalently, its universal implication has the false row

$$2\\in P\\Rightarrow\\mathrm{Odd}(2)
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

This one counterexample disproves “every $x\\in P$ is odd,”.

So the statement is False.`

      `**D.** → True

The antecedent restricts attention to members of $P$ other than $2$:

$$\\{x\\in P:x\\ne2\\}=\\{3,5,7,11,13\\}$$

Every number in that set has the form $2k+1$, so each makes the conclusion “$x$ is odd” true. At $x=2$, the extra condition is false:

$$(2\\in P\\land2\\ne2)\\Rightarrow\\mathrm{Odd}(2)
=\\mathrm{F}\\Rightarrow\\mathrm{F}
=\\mathrm{T}$$

Thus no $x$ gives a true antecedent and false conclusion. The universal implication is True.

So the statement is True.`

      `**E.** → False

The subset claim means

$$P\\subseteq E\\quad\\Longleftrightarrow\\quad
\\forall x\\,(x\\in P\\Rightarrow x\\in E)$$

Choose $x=3$. The membership values are

$$3\\in P=\\mathrm{T},\\qquad 3\\in E=\\mathrm{F}$$

so the required implication evaluates as

$$3\\in P\\Rightarrow3\\in E
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

One member of $P$ outside $E$ disproves the subset claim,.

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `Let $P=\\{2,3,5,7,11,13\\}$ be the primes less than $15$ and $E=\\{2,4,6,8,10,12,14\\}$ the evens less than $15$.

Intersection keeps numbers in both lists. Difference $P\\setminus E$ keeps members of $P$ missing from $E$. A sentence $\\forall x\\in P$ makes a promise about all six members. A subset claim $P\\subseteq E$ fails as soon as one member of $P$ sits outside $E$.`,
  },
  {
    id: `math-1-48`,
    case_id: `MATH 1.48`,
    title: `Comparing the conditions x > 10 and x > 5`,
    subsection: `1.3`,
    context: `Let x be a real number. Compare the conditions $x>10$ and $x>5$.`,
    statements: [
      `The condition $x>10$ is sufficient for $x>5$.`,
      `The condition $x>10$ is necessary for $x>5$.`,
      `The condition $x>5$ is necessary for $x>10$.`,
      `The conditions $x>10$ and $x>5$ are equivalent.`,
      `$x=7$ is a counterexample to the claim that $x>5$ implies $x>10$.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Let $P$ be $x>10$ and $Q$ be $x>5$. If $P$ is true, then subtracting $5$ from $x>10$ gives

$$x>10\\quad\\Longrightarrow\\quad x-5>5>0\\quad\\Longrightarrow\\quad x>5$$

Thus

$$P\\Rightarrow Q$$

holds for every real $x$. Since a sufficient condition is the antecedent of a guaranteed implication, $x>10$ is sufficient for $x>5$,.

So the statement is True.`

      `**B.** → False

Necessity of $x>10$ for $x>5$ would require $Q\\Rightarrow P$. Test $x=7$ in the hypothesis:

$$7>5$$

Now test the required conclusion:

$$7\\not>10$$

This witness makes $Q$ true and $P$ false. The implication $Q\\Rightarrow P$ fails,

So the statement is False.`

      `**C.** → True

“$x>5$ is necessary for $x>10$” means that whenever $x>10$ holds, $x>5$ must hold:

$$x>10\\Rightarrow x>5$$

There is no real number with the forbidden truth pattern

$$x>10=\\mathrm{T},\\qquad x>5=\\mathrm{F}$$

because every number above $10$ is automatically above $5$. Therefore $x>5$ is a necessary condition for $x>10$,.

So the statement is True.`

      `**D.** → False

Equivalence requires both implications to hold:

$$P\\Leftrightarrow Q\\quad\\Longleftrightarrow\\quad(P\\Rightarrow Q)\\land(Q\\Rightarrow P)$$

The overview recovered $P\\Rightarrow Q$. For the reverse direction, use $x=7$:

$$7>5,\\qquad 7\\not>10$$

Thus $Q\\Rightarrow P$ fails. The two conditions are not equivalent,.

So the statement is False.`

      `**E.** → True

A counterexample to $Q\\Rightarrow P$ must satisfy $Q\\land\\neg P$. For $x=7$,

$$7>5$$

but

$$7\\not>10$$

The named value makes the hypothesis true and the conclusion false. It is a counterexample.

Set beside the claim, the computed result is

$$7\\not>10$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `Two conditions on a real number: $P$ says $x>10$ and $Q$ says $x>5$.

"$P$ is sufficient for $Q$" is the arrow $P\\Rightarrow Q$. "$Q$ is necessary for $P$" is the same arrow read from the other end. Equivalence $P\\Leftrightarrow Q$ needs both arrows. A counterexample to $Q\\Rightarrow P$ is a number that satisfies $Q$ and fails $P$.

If $x>10$, then $x>5$ automatically because $10>5$, so $P\\Rightarrow Q$ holds.`,
  },
  {
    id: `math-1-49`,
    case_id: `MATH 1.49`,
    title: `Loan approval`,
    subsection: `1.3`,
    context: `A bank approves a loan only if the applicant's credit score is at least 700 AND their debt-to-income ratio is below 40%. Applicant P has a credit score of 750 and a debt-to-income ratio of 35%. Applicant Q has a credit score of 720 and a debt-to-income ratio of 45%.`,
    statements: [
      `Applicant P satisfies both required conditions.`,
      `We may conclude that P's loan will be approved.`,
      `Applicant Q does not satisfy both required conditions.`,
      `Since Q fails one of the required conditions, Q's loan will not be approved.`,
      `If an applicant's debt-to-income ratio is below 40%, their loan will definitely be approved, regardless of credit score.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Conjunction requires both bank tests to hold. Applicant P satisfies the score test and the ratio test:

$$750\\ge 700$$

$$35\\%<40\\%$$

Therefore

$$R(P)=\\mathrm{T}\\land\\mathrm{T}=\\mathrm{T}$$

The claim says P satisfies both required conditions,

So the statement is True.`

      `**B.** → False

Let $L$ mean “the loan is approved” and $R$ mean “both required tests hold.” The bank gives only

$$L\\Rightarrow R$$

Applicant P has $R(P)=\\mathrm{T}$, but that truth value does not determine $L(P)$. Both rows

$$L(P)=\\mathrm{T},\\ R(P)=\\mathrm{T}
\\qquad\\text{and}\\qquad
L(P)=\\mathrm{F},\\ R(P)=\\mathrm{T}$$

satisfy $L\\Rightarrow R$. Concluding approval would use the unsupported converse

$$R\\Rightarrow L$$

so P's approval cannot be concluded and.

So the statement is False.`

      `**C.** → True

Conjunction fails when either required test fails. Applicant Q clears the score test:

$$720\\ge 700$$

The ratio test fails:

$$45\\%\\not<40\\%$$

Thus

$$R(Q)=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

The claim says Q does not satisfy both required conditions,

So the statement is True.`

      `**D.** → True

The contrapositive gives a valid inference from a failed necessary condition:

$$L\\Rightarrow R\\quad\\Longleftrightarrow\\quad\\neg R\\Rightarrow\\neg L$$

Applicant Q fails the ratio test, so the full requirement is false:

$$R(Q)=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

Applying the contrapositive gives

$$\\neg R(Q)\\Rightarrow\\neg L(Q)$$

Q's loan is therefore not approved,.

So the statement is True.`

      `**E.** → False

A ratio below $40\\%$ is only one part of the required conjunction. Consider an applicant with score $650$ and ratio $30\\%$:

$$650\\ge700=\\mathrm{F},\\qquad 30\\%<40\\%=\\mathrm{T}$$

The full requirement evaluates to

$$R=\\mathrm{F}\\land\\mathrm{T}=\\mathrm{F}$$

The contrapositive of $L\\Rightarrow R$ then gives $\\neg R\\Rightarrow\\neg L$, so this applicant cannot be approved. A low ratio does not guarantee approval,.

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 6,
    solution_overview: `Write $R$ for the bank's requirement (credit score at least $700$ and debt-to-income ratio below $40\\%$) and $L$ for "the loan is approved." The wording is "approved only if $R$," which is the arrow

$$L\\Rightarrow R$$

So $R$ is necessary for approval; the reverse arrow $R\\Rightarrow L$ is not in the rule. The contrapositive $\\neg R\\Rightarrow\\neg L$ is guaranteed: fail $R$ and the loan is refused. Because $R$ joins its two tests with "and", a single failure sinks the whole requirement.`,
  },
  {
    id: `math-1-50`,
    case_id: `MATH 1.50`,
    title: `The universe of discourse is the set of real numbers, ℝ`,
    subsection: `1.3`,
    context: `The universe of discourse is the set of real numbers, ℝ.`,
    statements: [
      `The negation of "$\\forall x\\, (x^2 \\ge 0)$" is "$\\exists x\\, (x^2 < 0)$."`,
      `The statement "$\\exists x\\, (x^2 = -1)$" is true.`,
      `The negation of "$\\exists x\\, (x > 100)$" is "$\\forall x\\, (x \\le 100)$."`,
      `"$\\forall x > 0\\, \\exists y\\, (y > x)$" is a true statement.`,
      `"$\\exists y\\, \\forall x > 0\\, (y > x)$" is a true statement.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Negating a universal produces an existential of the negated predicate. The inequality $\\ge$ flips to $<$:

$$\\neg\\forall x\\,(x^{2}\\ge 0)\\equiv\\exists x\\,(x^{2}<0)$$

The quoted sentence is that negation.

Set beside the claim, the computed result is

$$\\neg\\forall x\\,(x^{2}\\ge 0)\\equiv\\exists x\\,(x^{2}<0)$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → False

For every real number, squaring produces a nonnegative result:

$$\\forall x\\in\\mathbb R,\\qquad x^{2}\\ge0$$

But the proposed witness would have to satisfy

$$x^{2}=-1<0$$

which contradicts that fact. Hence the real solution set is empty:

$$\\{x\\in\\mathbb R:x^{2}=-1\\}=\\varnothing$$

The existential statement has no real witness, so it is False.

So the statement is False.`

      `**C.** → True

Negating an existential produces a universal of the negated predicate. The inequality $>$ flips to $\\le$, including the boundary $100$:

$$\\neg\\exists x\\,(x>100)\\equiv\\forall x\\,(x\\le 100)$$

The quoted sentence is that negation,.

Set beside the claim, the computed result is

$$\\neg\\exists x\\,(x>100)\\equiv\\forall x\\,(x\\le 100)$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → True

Because $x$ is announced first, $y$ may be built from it. The recipe $y=x+1$ works for every $x>0$:

$$x+1>x$$

Each $x$ gets its own $y$.

Set beside the claim, the computed result is

$$x+1>x$$

which is exactly what the statement asserts.

So the statement is True.`

      `**E.** → False

Now a single $y$ must be fixed first and then outrank every positive $x$. Whatever $y$ is offered,

$$x=\\max(y+1,1)$$

is a positive number bigger than it. No champion exists.

Set beside the claim, the computed result is

$$x=\\max(y+1,1)$$

which is not what the statement asserts.

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `The universe is $\\mathbb R$.

Negation of quantifiers follows the mirror rules

$$\\neg\\forall x\\,P(x)\\equiv\\exists x\\,\\neg P(x),\\qquad \\neg\\exists x\\,P(x)\\equiv\\forall x\\,\\neg P(x)$$

Squares of reals are never negative. Quantifier order matters: whichever variable is written first is chosen first, and later choices may depend on it. $\\forall x\\,\\exists y$ lets $y$ be built from $x$; $\\exists y\\,\\forall x$ freezes one $y$ that must work for every $x$.`,
  },
  {
    id: `math-1-51`,
    case_id: `MATH 1.51`,
    title: `A medical diagnostic criterion`,
    subsection: `1.3`,
    context: `A doctor's criterion: a patient is diagnosed with condition X only if they exhibit both symptom A and symptom B; however, exhibiting both symptoms does not guarantee the diagnosis, since other conditions must also be ruled out. Patient R has been diagnosed with condition X. Patient S exhibits symptom A but not symptom B.`,
    statements: [
      `Patient R might have been diagnosed with condition X despite exhibiting only symptom A (not symptom B).`,
      `Patient S can be diagnosed with condition X.`,
      `Exhibiting both symptoms A and B is a sufficient condition for diagnosis with condition X.`,
      `If a patient does not exhibit symptom A, they cannot be diagnosed with condition X, regardless of other symptoms.`,
      `It is impossible for a patient to exhibit both symptoms A and B without being diagnosed with condition X.`,
    ],
    answer_key: [false, false, false, true, false],
    tactical_explanations: [
      `**A.** → False

The criterion makes both symptoms necessary for a diagnosis:

$$D\\Rightarrow(A\\land B)$$

Patient R has $D$ true, so modus ponens gives

$$A(R)\\land B(R)=\\mathrm{T}$$

The claim allows R to have symptom A without symptom B, which contradicts the required conjunction,

So the statement is False.`

      `**B.** → False

The contrapositive blocks diagnosis when the required symptom conjunction fails. Patient S has A but not B, so

$$A(S)\\land B(S)=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

From the criterion,

$$\\neg(A\\land B)\\Rightarrow\\neg D$$

Patient S therefore cannot be diagnosed with condition X,

So the statement is False.`

      `**C.** → False

Let $S=A\\land B$ mean that both symptoms are present. Calling $S$ sufficient would require the reverse implication

$$S\\Rightarrow D$$

The doctor explicitly allows a patient whose two symptoms are present but whose diagnosis is withheld while other conditions are checked:

$$S=\\mathrm{T},\\qquad D=\\mathrm{F}$$

For that allowed case,

$$S\\Rightarrow D=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

Both symptoms are necessary but not sufficient for diagnosis,.

So the statement is False.`

      `**D.** → True

The contrapositive blocks diagnosis whenever the required conjunction is false. If symptom A is absent, then for either truth value of B,

$$A\\land B=\\mathrm{F}\\land B=\\mathrm{F}$$

Therefore

$$\\neg(A\\land B)\\Rightarrow\\neg D$$

No other symptom can repair the missing A requirement,

So the statement is True.`

      `**E.** → False

The criterion gives $D\\Rightarrow(A\\land B)$, but it explicitly denies the converse. A patient may have both symptoms while another condition prevents diagnosis:

$$A\\land B=\\mathrm{T},\\qquad D=\\mathrm{F}$$

This possibility satisfies the doctor's one-way rule because

$$D\\Rightarrow(A\\land B)
=\\mathrm{F}\\Rightarrow\\mathrm{T}
=\\mathrm{T}$$

yet it directly refutes the claim that such a patient is impossible. Therefore.

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 8,
    solution_overview: `Let $D$ mean diagnosed with condition X, and let $S$ mean the patient shows symptom A and symptom B.

"Diagnosed only if $S$" is the arrow $D\\Rightarrow S$: no diagnosis without both symptoms, which makes $S$ necessary. The doctor also says both symptoms do not guarantee the diagnosis, so the reverse arrow $S\\Rightarrow D$ is refused. The contrapositive $\\neg S\\Rightarrow\\neg D$ blocks the diagnosis the moment either symptom is missing.

Patient R holds the diagnosis. Patient S has A but not B.`,
  },
  {
    id: `math-1-52`,
    case_id: `MATH 1.52`,
    title: `Existential and Universal Claims Over Integers 1 to 20`,
    subsection: `1.3`,
    context: `The universe is the set of integers from 1 to 20, i.e. $\\{1, 2,..., 20\\}$.`,
    statements: [
      `"$\\exists x \\in \\{1,\\ldots,20\\}$ such that x is divisible by both 3 and 5" is true`,
      `"$\\forall x \\in \\{1,\\ldots,20\\}$, if x is divisible by 4, then x is divisible by 2" is true`,
      `"$\\forall x \\in \\{1,\\ldots,20\\}$, if x is divisible by 2, then x is divisible by 4" is true`,
      `The negation of "$\\forall x \\in \\{1,\\ldots,20\\}\\, (\\mathrm{Prime}(x) \\Rightarrow \\mathrm{Odd}(x))$" is "$\\exists x \\in \\{1,\\ldots,20\\}\\, (\\mathrm{Prime}(x) \\land \\mathrm{Even}(x))$"`,
      `The negated statement in (d) is itself true`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

An existential claim is proved by one witness in the stated universe. Choose $x=15$, which lies in $\\{1,\\ldots,20\\}$:

$$15=3\\cdot5$$

Thus $3\\mid15$ and $5\\mid15$. The required witness exists.

Set beside the claim, the computed result is

$$15=3\\cdot5$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

A universal implication is proved by starting with an arbitrary value that satisfies its hypothesis. If $4\\mid x$, then $x=4k$ for some integer $k$, so

$$x=4k=2(2k)$$

Hence $2\\mid x$. This argument covers every multiple of $4$ in the universe,

So the statement is True.`

      `**C.** → False

A universal implication is disproved by one value with a true hypothesis and false conclusion. Choose $x=2$, which lies in the universe:

$$2=2\\cdot1$$

but

$$\\nexists k\\in\\mathbb{Z}:2=4k$$

Thus $2\\mid2$ while $4\\nmid2$.

Set beside the claim, the computed result is

$$\\nexists k\\in\\mathbb{Z}:2=4k$$

which is not what the statement asserts.

So the statement is False.`

      `**D.** → True

An implication fails only where the "if" holds and the "then" fails, so the negation of $\\forall x\\,(\\mathrm{Prime}(x)\\Rightarrow\\mathrm{Odd}(x))$ is

$$\\exists x\\,(\\mathrm{Prime}(x)\\land\\mathrm{Even}(x))$$

still restricted to $\\{1,\\ldots,20\\}$. The quoted sentence is that negation,

So the statement is True.`

      `**E.** → True

The existential negation needs one number in the universe that is both prime and even. Choose $x=2$:

$$2\\in\\{1,\\ldots,20\\},\\qquad \\mathrm{Prime}(2)\\land\\mathrm{Even}(2)$$

The number $2$ has only the positive divisors $1$ and $2$, and it is divisible by $2$. This witness makes the negated statement true,.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `The universe is the finite set $\\{1,2,\\ldots,20\\}$.

An existential sentence needs one working example. A universal sentence is destroyed by one counterexample. An implication $P\\Rightarrow Q$ fails only where $P$ holds and $Q$ fails, so its negation is an existential $P\\land\\neg Q$.`,
  },
  {
    id: `math-1-53`,
    case_id: `MATH 1.53`,
    title: `A club membership rule`,
    subsection: `1.3`,
    context: `A club's rule: “A person is a member if and only if they are not on the banned list.” The banned list contains exactly the people with 3 or more rule violations. Person T has 2 violations. Person U has 4 violations.`,
    statements: [
      `Person T is a member of the club.`,
      `Person U is a member of the club.`,
      `The banned list and the membership list are complementary (every person is in exactly one of the two).`,
      `If a person has exactly 3 violations, they could either be a member or banned, depending on additional unstated factors.`,
      `There exists some number of violations for which it is genuinely ambiguous, from the given rule alone, whether a person is banned.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Write $B(v)$ for “the person is banned” and $M(v)$ for “the person is a member.” The rules say

$$B(v)\\Leftrightarrow(v\\ge3),\\qquad M(v)\\Leftrightarrow\\neg B(v)$$

For Person T, $v=2$, so

$$B(2)=(2\\ge3)=\\mathrm{F}$$

and therefore

$$M(2)=\\neg B(2)=\\neg\\mathrm{F}=\\mathrm{T}$$

Person T is a member,.

So the statement is True.`

      `**B.** → False

Person U has four violations. Evaluate the banned-list test first:

$$B(4)=(4\\ge3)=\\mathrm{T}$$

Membership is exactly the negation of banned status, so

$$M(4)=\\neg B(4)=\\neg\\mathrm{T}=\\mathrm{F}$$

U is not a member. The claim that U is a member is therefore False.

So the statement is False.`

      `**C.** → True

The biconditional gives, for every person $x$,

$$M(x)\\Leftrightarrow\\neg B(x)$$

If $B(x)=\\mathrm{T}$, then $M(x)=\\mathrm{F}$; if $B(x)=\\mathrm{F}$, then $M(x)=\\mathrm{T}$. Thus

$$M\\cap B=\\varnothing,\\qquad M\\cup B=U$$

where $U$ is the set of all people under the rule. Those two equations say the membership and banned lists are complementary,.

So the statement is True.`

      `**D.** → False

At the boundary value $v=3$, “three or more” is already satisfied:

$$B(3)=(3\\ge3)=\\mathrm{T}$$

The membership biconditional then gives

$$M(3)=\\neg B(3)=\\neg\\mathrm{T}=\\mathrm{F}$$

There is no second allowed outcome depending on unstated factors: exactly three violations forces banned status.

So the statement is False.`

      `**E.** → False

Every possible integer violation count lies on exactly one side of the cutoff:

$$v<3\\quad\\text{or}\\quad v\\ge3$$

The resulting classifications are

$$v<3\\Rightarrow B(v)=\\mathrm{F},\\ M(v)=\\mathrm{T}$$

$$v\\ge3\\Rightarrow B(v)=\\mathrm{T},\\ M(v)=\\mathrm{F}$$

No count leaves either truth value undetermined. Therefore no genuinely ambiguous violation count exists,.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `The club rule is a biconditional: a person is a member if and only if they are not on the banned list. The banned list is the people with $3$ or more rule violations. Writing $v$ for the violation count, banned means $v\\ge 3$, and membership is the exact opposite.

Because the two conditions are exact opposites, the two lists never overlap and never leave a gap. For each integer $v$, the test $v\\ge 3$ returns a definite yes or no.`,
  },
  {
    id: `math-1-54`,
    case_id: `MATH 1.54`,
    title: `One Counterexample Against "All Primes Are Odd"`,
    subsection: `1.3`,
    context: `Consider the universal claim: "All prime numbers are odd," and the irrationality of √2.`,
    statements: [
      `To disprove the universal statement "all prime numbers are odd," it suffices to give one counterexample.`,
      `The number 2 is a valid counterexample to "all prime numbers are odd."`,
      `A contradiction proof of an implication assumes that its condition holds while its conclusion fails, then derives a contradiction.`,
      `A proof by contradiction that √2 is irrational begins by assuming that √2 IS irrational.`,
      `If a statement is confirmed true for one specific example, this proves it is true for all cases.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The negation of a universal statement is an existential counterexample:

$$\\neg\\forall x\\,P(x)\\equiv\\exists x\\,\\neg P(x)$$

For “all primes are odd,” a counterexample must satisfy

$$\\mathrm{Prime}(x)\\land\\neg\\mathrm{Odd}(x)$$

Exhibiting one such $x$ makes the existential negation true and the original universal false. Therefore one counterexample is sufficient,.

So the statement is True.`

      `**B.** → True

The number $2$ is prime because its only positive divisors are $1$ and $2$. It is even, so it is not odd. The counterexample condition evaluates to

$$\\mathrm{Prime}(2)\\land\\neg\\mathrm{Odd}(2)
=\\mathrm{T}\\land\\mathrm{T}
=\\mathrm{T}$$

Equivalently, the universal implication fails at $2$:

$$\\mathrm{Prime}(2)\\Rightarrow\\mathrm{Odd}(2)
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

Thus $2$ is a valid counterexample,.

So the statement is True.`

      `**C.** → True

To prove an implication by contradiction, negate the implication:

$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$$

Thus the proof assumes both

$$P=\\mathrm{T},\\qquad Q=\\mathrm{F}$$

and derives a contradiction. That shows the only truth assignment that could make $P\\Rightarrow Q$ false is impossible, so the implication must hold. The described method is correct, making the statement True.

So the statement is True.`

      `**D.** → False

Let $R$ be the target “$\\sqrt2$ is irrational.” A contradiction proof starts from its negation:

$$\\neg R:\\quad \\sqrt2\\in\\mathbb Q$$

That means assuming integers $a,b$ with $b\\ne0$ and

$$\\sqrt2=\\frac ab$$

usually chosen in lowest terms, and then deriving an impossibility. Starting with $R$ would assume the very conclusion being proved. Therefore the proposed starting assumption is wrong and.

So the statement is False.`

      `**E.** → False

One favourable example proves only an existential statement:

$$P(a)=\\mathrm{T}\\quad\\Longrightarrow\\quad\\exists x\\,P(x)$$

It does not establish the universal

$$\\forall x\\,P(x)$$

For example, $3$ is prime and odd, but that successful check leaves $2$ untested, and $2$ is prime but not odd. A single confirming case cannot rule out a counterexample elsewhere,.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `A universal claim $\\forall x\\,P(x)$ is false as soon as one $x$ has $\\neg P(x)$. One counterexample is a complete disproof. The reverse does not work: a pile of confirming examples never proves a universal.

A contradiction proof of an implication assumes the unique failure case $P\\land\\neg Q$ and derives an impossibility. To prove a claim by contradiction, assume its negation, not the claim itself.`,
  },
  {
    id: `math-1-55`,
    case_id: `MATH 1.55`,
    title: `An event organizer's rule is : "If it rains, the picnic is cancelled."`,
    subsection: `1.3`,
    context: `An event organizer states: "If it rains, the picnic is cancelled."`,
    statements: [
      `The negation of this rule is: "It rains and the picnic is not cancelled."`,
      `The converse, "If the picnic is cancelled, then it rained," is guaranteed true whenever the organizer's rule holds.`,
      `The inverse, "If it does not rain, the picnic is not cancelled," is logically equivalent to the original rule.`,
      `Suppose it did not rain, yet the picnic was cancelled due to a venue conflict. This contradicts the inverse statement but does not contradict the organizer's rule.`,
      `The contrapositive, "If the picnic was not cancelled, then it did not rain," is logically equivalent to the original rule and must also hold.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Write $P$ for “it rains” and $Q$ for “the picnic is cancelled.” The organizer's rule is $P\\Rightarrow Q$. Negating it gives

$$\\neg(P\\Rightarrow Q)
\\equiv\\neg(\\neg P\\lor Q)
\\equiv P\\land\\neg Q$$

This formula is true exactly when it rains and the picnic is not cancelled:

$$P\\land\\neg Q=\\mathrm{T}\\land\\mathrm{T}=\\mathrm{T}$$

The quoted sentence is precisely the negation,.

So the statement is True.`

      `**B.** → False

The converse $Q\\Rightarrow P$ fails when cancellation occurs without rain. On the overview's dry venue-conflict day,

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

The original rule is still true on that day because its hypothesis is false:

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

The two implications have different truth values there. The converse is not guaranteed,.

So the statement is False.`

      `**C.** → False

The inverse $\\neg P\\Rightarrow\\neg Q$ fails on a dry day when the picnic is cancelled for another reason. For the venue-conflict day,

$$\\neg P\\Rightarrow\\neg Q=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

The original remains true:

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

One situation separates their truth values. The inverse is not equivalent to the original,.

So the statement is False.`

      `**D.** → True

An implication is false only when its hypothesis is true and its conclusion is false. On the venue-conflict day, $P$ is false and $Q$ is true, so

$$\\neg P\\Rightarrow\\neg Q=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

while

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

The day contradicts the inverse but not the organizer's rule,.

So the statement is True.`

      `**E.** → True

Form the contrapositive by swapping the two propositions and negating both:

$$P\\Rightarrow Q
\\quad\\Longleftrightarrow\\quad
\\neg Q\\Rightarrow\\neg P$$

Here this becomes

$$\\text{picnic not cancelled}\\Rightarrow\\text{no rain}$$

The equivalence can also be checked algebraically:

$$\\neg Q\\Rightarrow\\neg P
\\equiv Q\\lor\\neg P
\\equiv\\neg P\\lor Q
\\equiv P\\Rightarrow Q$$

The quoted contrapositive is guaranteed whenever the original rule holds,.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 12,
    solution_overview: `Write $P$ for "it rains" and $Q$ for "the picnic is cancelled". The organizer's rule is $P\\Rightarrow Q$.

An implication fails only when the hypothesis holds and the conclusion fails:

$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$$

The contrapositive $\\neg Q\\Rightarrow\\neg P$ is equivalent to the original. The converse $Q\\Rightarrow P$ and the inverse $\\neg P\\Rightarrow\\neg Q$ are not.

On a dry venue-conflict day, $P$ is false and $Q$ is true. The original holds because $P$ is false.`,
  },
  {
    id: `math-1-56`,
    case_id: `MATH 1.56`,
    title: `Inclusive Or in a Two-Product Purchase Survey`,
    subsection: `1.3`,
    context: `A market survey of 100 consumers found that 40 bought product X, 35 bought product Y, and 15 bought both X and Y.`,
    statements: [
      `In mathematical logic, the statement "a consumer bought X or Y" includes consumers who bought both.`,
      `The number of consumers who bought X or Y (in the inclusive sense) is 60.`,
      `If "or" were interpreted exclusively (XOR: exactly one of X, Y), the count of consumers satisfying "X or Y" would be 45.`,
      `A biconditional means that its two components always have the same truth value.`,
      `A biconditional is true whenever at least one of its two components is true.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Inclusive “or” is true when at least one proposition is true, including the row where both are true. For a consumer who bought both products,

$$X=\\mathrm{T},\\qquad Y=\\mathrm{T}$$

so

$$X\\lor Y=\\mathrm{T}\\lor\\mathrm{T}=\\mathrm{T}$$

All $15$ both-buyers therefore satisfy “bought X or Y.” Mathematical inclusive or includes them,.

So the statement is True.`

      `**B.** → True

Adding $40$ and $35$ counts the $15$ both-buyers twice, so subtract them once:

$$|X\\cup Y|=40+35-15=60$$

The claim is $60$.

Set beside the claim, the computed result is

$$|X\\cup Y|=40+35-15=60$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → True

Exclusive or keeps only the two outer regions. X-only is $40-15=25$ and Y-only is $35-15=20$, so

$$25+20=45$$

The claim is $45$.

Set beside the claim, the computed result is

$$25+20=45$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → True

A biconditional requires both implications:

$$P\\Leftrightarrow Q\\equiv(P\\Rightarrow Q)\\land(Q\\Rightarrow P)$$

Evaluate its four input rows:

$$\\mathrm{T}\\Leftrightarrow\\mathrm{T}=\\mathrm{T},\\qquad
\\mathrm{F}\\Leftrightarrow\\mathrm{F}=\\mathrm{T}$$

$$\\mathrm{T}\\Leftrightarrow\\mathrm{F}=\\mathrm{F},\\qquad
\\mathrm{F}\\Leftrightarrow\\mathrm{T}=\\mathrm{F}$$

It is true exactly when the two components have the same truth value,.

So the statement is True.`

      `**E.** → False

“At least one component is true” describes disjunction, not a biconditional. Take the mixed assignment

$$P=\\mathrm{T},\\qquad Q=\\mathrm{F}$$

At least one proposition is true, and indeed

$$P\\lor Q=\\mathrm{T}\\lor\\mathrm{F}=\\mathrm{T}$$

but the biconditional evaluates differently:

$$P\\Leftrightarrow Q=\\mathrm{T}\\Leftrightarrow\\mathrm{F}=\\mathrm{F}$$

This counterexample disproves the claim,.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 13,
    solution_overview: `A market survey of $100$ consumers found $|X|=40$, $|Y|=35$, and $|X\\cap Y|=15$.

Inclusive "or" means at least one, so both-buyers stay inside. Exclusive "or" keeps exactly one. A biconditional is true when both parts agree and false the moment their truth values differ.

X-only is $|X|-|X\\cap Y|$. Y-only is $|Y|-|X\\cap Y|$.`,
  },
  {
    id: `math-1-57`,
    case_id: `MATH 1.57`,
    title: `Passing a course: attendance and the final exam`,
    subsection: `1.3`,
    context: `A university rule: a student passes the course if and only if they attended at least 80% of classes AND scored at least 50 on the final exam. Student K attended 85% of classes and scored 48 on the final. Student L attended 75% of classes and scored 90 on the final.`,
    statements: [
      `Student K passes the course.`,
      `Student L passes the course.`,
      `A high score on the final exam can compensate for insufficient attendance, allowing a student to still pass.`,
      `If a student attends at least 80% of classes but scores below 50 on the final, they will not pass, no matter how close their score is to 50.`,
      `There could exist a student who passes despite having a lower combined average performance than another student who fails, since the rule checks each threshold separately rather than an overall average.`,
    ],
    answer_key: [false, false, false, true, true],
    tactical_explanations: [
      `**A.** → False

Passing requires both thresholds, so evaluate Student K's two tests separately:

$$85\\%\\ge80\\%$$

$$48<50$$

Therefore

$$A(K)\\land F(K)=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

K fails the conjunction despite clearing attendance,

So the statement is False.`

      `**B.** → False

Passing requires both thresholds, so evaluate Student L's two tests separately:

$$75\\%<80\\%$$

$$90\\ge50$$

Therefore

$$A(L)\\land F(L)=\\mathrm{F}\\land\\mathrm{T}=\\mathrm{F}$$

L fails the conjunction despite the high exam score,

So the statement is False.`

      `**C.** → False

Conjunction does not allow one true condition to compensate for a false one. Student L supplies a direct test:

$$A(L)\\land F(L)=\\mathrm{F}\\land\\mathrm{T}=\\mathrm{F}$$

The $90$ exam score makes $F$ true, but $75\\%$ attendance leaves $A$ false. The combined pass condition remains false,

So the statement is False.`

      `**D.** → True

The exam threshold is a conjunct, so any score below $50$ makes the complete pass condition false. If attendance clears but the score does not, then

$$A\\land F=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

For Student K,

$$48<50$$

The distance from the cutoff does not change the truth value,

So the statement is True.`

      `**E.** → True

Compare Student X with attendance $80\\%$ and exam score $50$ to Student Y with attendance $79\\%$ and exam score $100$. Their threshold evaluations are

$$\\mathrm{Pass}(X)=\\mathrm{T}\\land\\mathrm{T}=\\mathrm{T}$$

$$\\mathrm{Pass}(Y)=\\mathrm{F}\\land\\mathrm{T}=\\mathrm{F}$$

Yet a simple combined average of the two reported numbers ranks Y higher:

$$\\frac{80+50}{2}=65
\\quad<\\quad
\\frac{79+100}{2}=89.5$$

The rule checks each cutoff separately rather than that average, so the described reversal is possible and.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 14,
    solution_overview: `Passing is governed by an and: attendance of at least $80\\%$ and a final score of at least $50$. Writing $A$ and $F$ for those two conditions, pass holds exactly when $A\\land F$ holds.

The words "if and only if" mean the list is complete. Conjunction $\\land$ is unforgiving: one false part sinks the whole condition. The rule never adds the two numbers together.`,
  },
  {
    id: `math-1-58`,
    case_id: `MATH 1.58`,
    title: `Online store filter (De Morgan)`,
    subsection: `1.3`,
    context: `An online store's "clearance-free, in-stock only" filter displays an item exactly when NOT (the item is on sale OR the item is out of stock). Item M is on sale and is in stock. Item N is not on sale and is out of stock. Item K is not on sale and is in stock.`,
    statements: [
      `Item M is displayed by the filter.`,
      `Item N is displayed by the filter.`,
      `The filter condition "NOT (on sale OR out of stock)" is logically equivalent to "NOT on sale OR NOT out of stock."`,
      `The filter condition is logically equivalent to "NOT on sale AND NOT out of stock," meaning an item is displayed only if it is neither on sale nor out of stock.`,
      `Item K is displayed by the filter.`,
    ],
    answer_key: [false, false, false, true, true],
    tactical_explanations: [
      `**A.** → False

The filter displays an item only when both negated conditions are true. Item M is on sale and in stock, so $S$ is true and $O$ is false:

$$\\neg S\\land\\neg O=\\mathrm{F}\\land\\mathrm{T}=\\mathrm{F}$$

The filter condition is false for M,

So the statement is False.`

      `**B.** → False

The filter displays an item only when both negated conditions are true. Item N is not on sale and is out of stock, so $S$ is false and $O$ is true:

$$\\neg S\\land\\neg O=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

The filter condition is false for N,

So the statement is False.`

      `**C.** → False

Logical equivalence requires the two formulas to agree on every truth assignment. For item M, $S$ is true and $O$ is false. The proposed formula gives

$$\\neg S\\lor\\neg O=\\mathrm{F}\\lor\\mathrm{T}=\\mathrm{T}$$

The actual filter gives

$$\\neg(S\\lor O)=\\neg(\\mathrm{T}\\lor\\mathrm{F})=\\mathrm{F}$$

The formulas disagree on M. They are not equivalent,.

So the statement is False.`

      `**D.** → True

Move the outer negation through the parentheses using De Morgan's law:

$$\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$$

The connective changes from OR to AND. For example, on the only displayed-item assignment $S=\\mathrm{F}$ and $O=\\mathrm{F}$,

$$\\neg(S\\lor O)
=\\neg(\\mathrm{F}\\lor\\mathrm{F})
=\\mathrm{T}$$

and

$$\\neg S\\land\\neg O
=\\mathrm{T}\\land\\mathrm{T}
=\\mathrm{T}$$

Thus “not on sale and not out of stock” is the correct equivalent condition,.

So the statement is True.`

      `**E.** → True

The filter displays an item when both negated conditions are true. Item K is not on sale and is in stock, so $S$ and $O$ are both false:

$$\\neg S\\land\\neg O=\\mathrm{T}\\land\\mathrm{T}=\\mathrm{T}$$

The filter condition is true for K,

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 15,
    solution_overview: `Let $S$ mean the item is on sale and $O$ mean the item is out of stock. The filter displays an item when $\\neg(S\\lor O)$ is true.

De Morgan's law turns a negated OR into an AND of the two negations:

$$\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$$

The connective flips as the NOT moves in. Keeping the OR would be the wrong rewrite.`,
  },
  {
    id: `math-1-59`,
    case_id: `MATH 1.59`,
    title: `Inflation and central-bank interest rates`,
    subsection: `1.3`,
    context: `If a country's inflation rate exceeds 10%, the central bank raises interest rates.`,
    statements: [
      `The contrapositive is: "If the central bank does not raise interest rates, then inflation is at most 10%."`,
      `The converse, "If the central bank raises interest rates, then inflation exceeds 10%," is logically equivalent to the original statement.`,
      `Inflation above 10% is sufficient for the central bank to raise interest rates.`,
      `Inflation above 10% is necessary for the central bank to raise interest rates.`,
      `If the bank raised interest rates, we may validly conclude that inflation exceeded 10%.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Let $P$ mean “inflation exceeds $10\\%$” and $Q$ mean “the bank raises rates.” Form the contrapositive by swapping and negating:

$$P\\Rightarrow Q
\\quad\\Longleftrightarrow\\quad
\\neg Q\\Rightarrow\\neg P$$

The negation of the strict inequality is

$$\\neg(\\mathrm{inflation}>10\\%)\\equiv
\\mathrm{inflation}\\le10\\%$$

Therefore the contrapositive says “if rates are not raised, inflation is at most $10\\%$,” exactly as claimed.

So the statement is True.`

      `**B.** → False

The converse reverses the arrow:

$$Q\\Rightarrow P$$

Consider a currency-defence rate rise while inflation is $4\\%$. Then $Q=\\mathrm{T}$ and $P=\\mathrm{F}$. The original rule evaluates to

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

but the converse evaluates to

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

Because one assignment gives different truth values, the converse is not logically equivalent to the original.

So the statement is False.`

      `**C.** → True

"$P$ is sufficient for $Q$" means that every time $P$ is true, $Q$ must be true:

$$P\\Rightarrow Q$$

Here $P$ is the event $\\mathrm{inflation}>10\\%$ and $Q$ is the bank raising rates. The given rule is exactly

$$P\\Longrightarrow Q$$

Thus the truth pattern $P=\\mathrm{T},Q=\\mathrm{F}$ is ruled out by the premise. Inflation above $10\\%$ is sufficient for a rate rise.

So the statement is True.`

      `**D.** → False

Calling high inflation necessary for a rate rise would require

$$Q\\Rightarrow P$$

That is the converse of the given rule. A rate rise for currency defence at $4\\%$ inflation has

$$Q=\\mathrm{T},\\qquad P=\\mathrm{F}$$

so the proposed necessity evaluates as

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

The original $P\\Rightarrow Q$ remains true on this row because $P$ is false. High inflation is not established as necessary,.

So the statement is False.`

      `**E.** → False

The attempted inference has the form

$$P\\Rightarrow Q,\\qquad Q,\\qquad\\therefore P$$

which affirms the consequent. Use a possible currency-defence rise at $4\\%$ inflation:

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

Then both premises are true,

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T},
\\qquad Q=\\mathrm{T},$$

while the conclusion $P$ is false. The conclusion does not follow,.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 16,
    solution_overview: `Write $P$ for "inflation exceeds $10\\%$" and $Q$ for "the central bank raises interest rates." The given rule is $P\\Rightarrow Q$.

High inflation forces a rate rise. The contrapositive $\\neg Q\\Rightarrow\\neg P$ always carries the same truth value. The converse $Q\\Rightarrow P$ is a different claim. In $P\\Rightarrow Q$, $P$ is sufficient for $Q$ and $Q$ is necessary for $P$.`,
  },
  {
    id: `math-1-60`,
    case_id: `MATH 1.60`,
    title: `A chain of biconditionals`,
    subsection: `1.3`,
    context: `Three propositions have matching truth values: the first matches the second, and the second matches the third. The first proposition is true.`,
    statements: [
      `The second proposition is true.`,
      `The third proposition is true.`,
      `The first and third propositions must also have the same truth value.`,
      `If the third proposition were false, the first would also be false.`,
      `Knowing only that the first and third propositions match is enough to conclude that the second always matches them.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The first link says that $P$ and $Q$ have equal truth values:

$$P\\Leftrightarrow Q$$

Since $P=\\mathrm{T}$, the biconditional can be true only on its TT row:

$$P\\Leftrightarrow Q
=\\mathrm{T}\\Leftrightarrow Q
=\\mathrm{T}
\\quad\\Longrightarrow\\quad
Q=\\mathrm{T}$$

The second proposition is therefore true,.

So the statement is True.`

      `**B.** → True

Letter A gives $Q=\\mathrm{T}$. The second biconditional forces $R$ to match $Q$:

$$Q\\Leftrightarrow R
=\\mathrm{T}\\Leftrightarrow R
=\\mathrm{T}$$

The only matching value is

$$R=\\mathrm{T}$$

Thus the truth of the first proposition travels through both links to the third proposition,

So the statement is True.`

      `**C.** → True

Biconditional agreement is transitive: matching through the same middle truth value makes the endpoints match. Thus

$$(P\\Leftrightarrow Q)\\land(Q\\Leftrightarrow R)\\Rightarrow(P\\Leftrightarrow R)$$

The premises provide both links. The first and third propositions must have the same truth value,.

So the statement is True.`

      `**D.** → True

Biconditionals force equal truth values in either direction. If $R$ were false, the second link gives

$$Q\\Leftrightarrow R,\\quad R=\\mathrm{F}\\quad\\Longrightarrow\\quad Q=\\mathrm{F}$$

The first link then gives

$$P\\Leftrightarrow Q,\\quad Q=\\mathrm{F}\\quad\\Longrightarrow\\quad P=\\mathrm{F}$$

Thus a false third proposition would force the first false,.

So the statement is True.`

      `**E.** → False

A claim of sufficiency is disproved by one assignment that satisfies the known condition and fails the conclusion. Choose

$$P=\\mathrm{T},\\qquad Q=\\mathrm{F},\\qquad R=\\mathrm{T}$$

Then

$$P\\Leftrightarrow R=\\mathrm{T}$$

but $Q$ does not match either endpoint. Knowing only that $P$ and $R$ match leaves $Q$ free,.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 17,
    solution_overview: `A biconditional $A\\Leftrightarrow B$ is a two-way link: $A$ and $B$ must always carry the same truth value. Here two links are given, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$, so the three propositions are welded into one chain

$$P\\Leftrightarrow Q\\Leftrightarrow R$$

and the extra fact that $P$ is true travels along it. A true $P$ forces $Q$ true through the first link, and a true $Q$ forces $R$ true through the second. The unstated link $P\\Leftrightarrow R$ holds as well, but on its own it leaves $Q$ free.`,
  },
  {
    id: `math-1-61`,
    case_id: `MATH 1.61`,
    title: `Cancelling a concert`,
    subsection: `1.3`,
    context: `A rule states: the outdoor concert will be cancelled unless the rain stops before 6 PM. Let C: “the concert is cancelled”, S: “the rain stops before 6 PM.”`,
    statements: [
      `The rule translates to: $\\neg S \\Rightarrow C$.`,
      `The rule is logically equivalent to: $S \\Rightarrow \\neg C$.`,
      `The rule is logically equivalent to: $C \\lor S$.`,
      `If the rain stops before 6 PM, the concert is guaranteed to happen (not be cancelled).`,
      `If the concert is not cancelled, then the rain must have stopped before 6 PM.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

“Cancelled unless $S$” requires cancellation whenever the escape fails. That is the overview’s translation

$$\\neg S \\Rightarrow C$$

The claim is that same implication.

Set beside the claim, the computed result is

$$\\neg S \\Rightarrow C$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → False

The proposed implication $S\\Rightarrow\\neg C$ says that a timely stop guarantees no cancellation. Consider a 5 PM rain stop followed by a power failure. Then

$$S=\\mathrm{T},\\qquad C=\\mathrm{T}$$

The actual unless-rule remains true:

$$\\neg S\\Rightarrow C
=\\mathrm{F}\\Rightarrow\\mathrm{T}
=\\mathrm{T}$$

but the proposed implication is false:

$$S\\Rightarrow\\neg C
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

The formulas are not equivalent,.

So the statement is False.`

      `**C.** → True

Apply the overview identity to $\\neg S \\Rightarrow C$:

$$\\neg(\\neg S) \\lor C \\equiv S \\lor C$$

OR is symmetric, so $C \\lor S$ is the same formula. Inclusive or still allows $S$ and $C$ together.

Set beside the claim, the computed result is

$$\\neg(\\neg S) \\lor C \\equiv S \\lor C$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → False

When the rain stops before 6 PM, $S=\\mathrm{T}$ and the antecedent $\\neg S$ of the actual rule is false. If a power failure still cancels the concert, then $C=\\mathrm{T}$ and

$$\\neg S\\Rightarrow C
=\\mathrm{F}\\Rightarrow\\mathrm{T}
=\\mathrm{T}$$

The claimed guarantee would instead require

$$S\\Rightarrow\\neg C
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

The actual rule allows cancellation for another cause after the rain stops,.

So the statement is False.`

      `**E.** → True

The contrapositive of $\\neg S \\Rightarrow C$ swaps and negates both sides:

$$\\neg C \\Rightarrow S$$

A concert that went ahead has $\\neg C$, so the rain must have stopped before 6 PM. Contrapositive shares the original truth value,.

Set beside the claim, the computed result is

$$\\neg C \\Rightarrow S$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 18,
    solution_overview: `The outdoor concert is cancelled unless the rain stops before 6 PM. Write $C$ for cancellation and $S$ for a stop before 6 PM.

“$C$ unless $S$” is a one-way promise: if the escape fails, cancellation is required,

$$\\neg S \\Rightarrow C$$

An implication rewrites as a disjunction,

$$X \\Rightarrow Y \\equiv \\neg X \\lor Y$$

When $S$ is true the antecedent $\\neg S$ is false, so the implication is silent: a power failure can still cancel the concert after the rain stops.`,
  },
  {
    id: `math-1-62`,
    case_id: `MATH 1.62`,
    title: `A senior transit discount rule`,
    subsection: `1.3`,
    context: `A transit discount applies to riders who are at least 65 years old AND (have a qualifying disability OR have an annual income below \\$20,000). Rider P is 70, has no disability, and earns \\$18,000. Rider Q is 67, has a qualifying disability, and earns \\$50,000.`,
    statements: [
      `Rider P qualifies for the discount.`,
      `Rider Q, who is 67, has a qualifying disability, but earns \\$50,000, does NOT qualify for the discount because the income exceeds \\$20,000.`,
      `Having an income above \\$20,000 automatically disqualifies a senior rider from the discount, even if they have a qualifying disability.`,
      `There exists a scenario where a 70-year-old rider with no disability and an income of \\$25,000 would NOT qualify for the discount.`,
      `Age alone (being at least 65) is a sufficient condition for receiving the discount, regardless of disability or income status.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

Rider P is $70$ with no disability and income \\$18,000. Then $A$ is true, $D$ is false, and $L$ is true because \\$18,000 is below \\$20,000, so

$$A \\land (D \\lor L) = \\mathrm{T} \\land (\\mathrm{F} \\lor \\mathrm{T}) = \\mathrm{T}$$

P qualifies,

So the statement is True.`

      `**B.** → False

Rider Q is $67$, has a qualifying disability, and earns \\$50,000. Then $A$ is true, $D$ is true, and $L$ is false, so $D \\lor L$ holds on the disability half:

$$A \\land (D \\lor L) = \\mathrm{T} \\land (\\mathrm{T} \\lor \\mathrm{F}) = \\mathrm{T}$$

Q does qualify. High income is not a veto while $D$ is true,.

So the statement is False.`

      `**C.** → False

Income below the cutoff, $L$, is joined to disability, $D$, by inclusive OR. Rider Q provides a direct counterexample to automatic disqualification:

$$A=\\mathrm{T},\\qquad D=\\mathrm{T},\\qquad L=\\mathrm{F}$$

Evaluate the complete condition:

$$A\\land(D\\lor L)
=\\mathrm{T}\\land(\\mathrm{T}\\lor\\mathrm{F})
=\\mathrm{T}$$

Although Q's income is above $\\$20{,}000$, the disability satisfies the bracket and Q qualifies.

So the statement is False.`

      `**D.** → True

Take a $70$-year-old with no disability and income \\$25,000. Then $A$ is true, $D$ is false, and $L$ is false because \\$25,000 is above the cutoff, so

$$D \\lor L = \\mathrm{F} \\lor \\mathrm{F} = \\mathrm{F}$$

and the conjunction fails. That rider does not qualify,

So the statement is True.`

      `**E.** → False

If age alone were sufficient, $A\\Rightarrow\\mathrm{Discount}$ would hold. Test a $70$-year-old with no disability and income $\\$25{,}000$:

$$A=\\mathrm{T},\\qquad D=\\mathrm{F},\\qquad L=\\mathrm{F}$$

The rule evaluates to

$$A\\land(D\\lor L)
=\\mathrm{T}\\land(\\mathrm{F}\\lor\\mathrm{F})
=\\mathrm{F}$$

This senior rider does not qualify, so

$$A\\Rightarrow\\mathrm{Discount}
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

Age is necessary but not sufficient, making the statement False.

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 19,
    solution_overview: `A transit discount requires age at least $65$ and at least one hardship condition. Write $A$ for the age test, $D$ for a qualifying disability, and $L$ for income below \\$20,000. The discount holds exactly when

$$A \\land (D \\lor L)$$

The age test sits outside the bracket. Inside the bracket, $D$ and $L$ are joined by or, so either token alone fills it.`,
  },
  {
    id: `math-1-63`,
    case_id: `MATH 1.63`,
    title: `Proving the Triangular-Number Formula by Induction`,
    subsection: `1.3`,
    context: `Consider the claim: "For all positive integers n, 1 + 2 +... + n = n(n+1)/2."`,
    statements: [
      `The base case to verify is n = 1, giving 1 = 1(2)/2 = 1, which holds`,
      `The inductive step assumes the formula holds for n = k and proves it for n = k + 1`,
      `Checking the formula for n = 1, 2, 3, 4, 5 constitutes a complete proof by induction`,
      `If 1+2+...+k = k(k+1)/2, then 1+2+...+k+(k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2, which confirms the inductive step`,
      `For n = 10, the formula gives 1+2+...+10 = 55`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The first positive integer is $n=1$. The left side of the claimed formula is $1$. The right side is

$$\\frac{1\\cdot(1+1)}{2}=\\frac{1\\cdot 2}{2}$$

$$=1$$

The two sides agree, so the base case holds.

Set beside the claim, the computed result is

$$=1$$

which is exactly what the statement asserts.

So the statement is True.`,
      `**B.** → True

Let

$$P(n):\\quad 1+2+\\cdots+n=\\frac{n(n+1)}{2}$$

The inductive step assumes $P(k)$ for an arbitrary positive integer $k$ and must derive the next case:

$$P(k)\\Rightarrow P(k+1)$$

Together with the base case, this implication propagates the formula through every positive integer. The statement describes exactly that step. So the statement is True.`,
      `**C.** → False

Checking five values establishes only

$$P(1)\\land P(2)\\land P(3)\\land P(4)\\land P(5)$$

A complete induction also needs the bridge

$$\\forall k\\ge 1,\\quad P(k)\\Rightarrow P(k+1)$$

Without that implication, nothing has been proved about $P(6)$ or any later case. Five examples are not a complete inductive proof. So the statement is False.`,
      `**D.** → True

Assume the formula at $n=k$:

$$1+2+\\cdots+k=\\frac{k(k+1)}{2}$$

Add the next term $k+1$:

$$1+2+\\cdots+k+(k+1)=\\frac{k(k+1)}{2}+(k+1)$$

$$=(k+1)\\left(\\frac{k}{2}+1\\right)$$

$$=\\frac{(k+1)(k+2)}{2}$$

which is exactly $P(k+1)$. So the inductive step holds. So the statement is True.`,
      `**E.** → True

Substitute $n=10$ into the closed form:

$$\\frac{10\\cdot(10+1)}{2}=\\frac{10\\cdot 11}{2}$$

$$=55$$

So $1+2+\\cdots+10=55$, matching the claim.

Set beside the claim, the computed result is

$$=55$$

which is exactly what the statement asserts.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 20,
    solution_overview: `The claim is that for every positive integer $n$,

$$1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$$

A proof by induction has two moves. The base case checks one starting value, here $n=1$. The inductive step assumes the formula at $n=k$ and proves it at $n=k+1$. Checking finitely many values by hand is not a complete induction.`,
  },
  {
    id: `math-1-64`,
    case_id: `MATH 1.64`,
    title: `Logical Equivalents of an Inflation-Unemployment Claim`,
    subsection: `1.3`,
    context: `Consider the economic claim: "If inflation increases, then unemployment decreases." Decide whether each statement is logically equivalent to this claim.`,
    statements: [
      `"For unemployment to decrease, inflation must increase" is equivalent to the original claim.`,
      `"A sufficient condition for unemployment to decrease is that inflation increases" is equivalent to the original claim.`,
      `"Unemployment can only decrease if inflation increases" is equivalent to the original claim.`,
      `"If unemployment does not decrease, then inflation does not increase" is equivalent to the original claim.`,
      `"A necessary condition for inflation to increase is that unemployment decreases" is equivalent to the original claim.`,
    ],
    answer_key: [false, true, false, true, true],
    tactical_explanations: [
      `**A.** → False

“For unemployment to decrease, inflation must increase” makes $P$ necessary for $Q$, which is

$$Q \\Rightarrow P$$

That is the converse of $P \\Rightarrow Q$. To see that the two are not equivalent, use the assignment

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

Then

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

but

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

The original can be true while the proposed wording is false,.

So the statement is False.`

      `**B.** → True

“A sufficient condition for unemployment to decrease is that inflation increases” makes $P$ sufficient for $Q$:

$$P \\Rightarrow Q$$

That is the original claim.

Set beside the claim, the computed result is

$$P \\Rightarrow Q$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → False

“Unemployment can only decrease if inflation increases” is $Q$ only if $P$, which is

$$Q \\Rightarrow P$$

This is the converse, not the original implication. Let inflation fail to increase while unemployment nevertheless decreases:

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

The original is true on this row,

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T},$$

while the proposed “only if” claim is false:

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

Because the truth values can differ, the two claims are not equivalent.

So the statement is False.`

      `**D.** → True

“If unemployment does not decrease, then inflation does not increase” is

$$\\neg Q \\Rightarrow \\neg P$$

That is the contrapositive of $P \\Rightarrow Q$.

Set beside the claim, the computed result is

$$\\neg Q \\Rightarrow \\neg P$$

which is exactly what the statement asserts.

So the statement is True.`

      `**E.** → True

“A necessary condition for inflation to increase is that unemployment decreases” makes $Q$ necessary for $P$, which is

$$P \\Rightarrow Q$$

That is the original claim.

Set beside the claim, the computed result is

$$P \\Rightarrow Q$$

which is exactly what the statement asserts.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 21,
    solution_overview: `Write $P$ for “inflation increases” and $Q$ for “unemployment decreases.” The claim is

$$P \\Rightarrow Q$$

The original and its contrapositive $\\neg Q \\Rightarrow \\neg P$ are equivalent. The converse $Q \\Rightarrow P$ is a different implication. A sufficient condition for $Q$ is an antecedent of $Q$. A necessary condition for $P$ is a consequent of $P$. “Only if” and “must” name necessary conditions and reverse the arrow.`,
  },
  {
    id: `math-1-65`,
    case_id: `MATH 1.65`,
    title: `Airline delay chain`,
    subsection: `1.3`,
    context: `An airline's operations log records:

(1) If Flight 202 is delayed, then Flight 305 is cancelled.

(2) If Flight 305 is cancelled, then the ground crew works overtime.

(3) Flight 202 is delayed today.`,
    statements: [
      `Flight 305 is cancelled today.`,
      `The ground crew works overtime today.`,
      `Statement (2) is essential to concluding that the crew works overtime today - without it, that conclusion could not be reached from (1) and (3) alone.`,
      `If Flight 202 were NOT delayed today, statement (1) guarantees that Flight 305 would not be cancelled.`,
      `There exist scenarios satisfying (1), (2), and (3) in which the ground crew does not work overtime.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

Write $D$ for “Flight 202 is delayed” and $C$ for “Flight 305 is cancelled.” The log supplies

$$D=\\mathrm{T},\\qquad D\\Rightarrow C$$

Modus ponens applies because the antecedent is true:

$$D=\\mathrm{T},\\quad D\\Rightarrow C
\\quad\\Longrightarrow\\quad
C=\\mathrm{T}$$

Flight 305 is therefore cancelled today,.

So the statement is True.`

      `**B.** → True

Letter A gives $C=\\mathrm{T}$. Statement (2) supplies the next implication:

$$C\\Rightarrow O$$

Apply modus ponens a second time:

$$C=\\mathrm{T},\\quad C\\Rightarrow O
\\quad\\Longrightarrow\\quad
O=\\mathrm{T}$$

Thus the ground crew works overtime today,

So the statement is True.`

      `**C.** → True

An inference can reach a conclusion only through premises that connect to it. From statements (1) and (3), modus ponens gives

$$D,\\quad D\\Rightarrow C\\quad\\Longrightarrow\\quad C$$

Those premises contain no link from $C$ to $O$:

$$\\{D,D\\Rightarrow C\\}\\nvdash O$$

Statement (2), $C\\Rightarrow O$, is therefore essential to the overtime conclusion,.

So the statement is True.`

      `**D.** → False

An implication with a false antecedent does not force its conclusion to be false. Consider a day when Flight 202 is not delayed but Flight 305 is cancelled for another reason:

$$D\\Rightarrow C=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

Statement (1) still holds on that day, although $\\neg C$ is false. Thus $\\neg D$ does not guarantee $\\neg C$,.

So the statement is False.`

      `**E.** → False

Successive modus ponens carries the recorded delay through both rules. First,

$$D,\\quad D\\Rightarrow C\\quad\\Longrightarrow\\quad C$$

Then,

$$C,\\quad C\\Rightarrow O\\quad\\Longrightarrow\\quad O$$

Every scenario satisfying (1), (2), and (3) therefore has overtime. The claimed no-overtime scenario cannot exist,.

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 22,
    solution_overview: `An airline log records three facts. Write $D$ for “Flight 202 is delayed,” $C$ for “Flight 305 is cancelled,” and $O$ for “the ground crew works overtime”:

$$D \\Rightarrow C, \\qquad C \\Rightarrow O, \\qquad D$$

Modus ponens says that $X \\Rightarrow Y$ together with $X$ yields $Y$. From $D$ and $D \\Rightarrow C$ we get $C$. From $C$ and $C \\Rightarrow O$ we get $O$.`,
  },
  {
    id: `math-1-66`,
    case_id: `MATH 1.66`,
    title: `Negation, Converse, and Contrapositive of a Study-Hours Rule`,
    subsection: `1.3`,
    context: `A professor claims: "If a student studies at least 10 hours, they pass the exam."`,
    statements: [
      `The negation of this claim is: "A student studies at least 10 hours and does not pass."`,
      `The converse, "If a student passes, they studied at least 10 hours," must be true whenever the original claim is true.`,
      `Anna passes the exam without studying at all (she already knew the material). This is a counterexample to the converse, but not to the original claim.`,
      `The inverse, "If a student studies less than 10 hours, they do not pass," is the logical equivalent of the contrapositive.`,
      `If we know a student did NOT pass, we may validly conclude, via the contrapositive, that they studied less than 10 hours.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Let $P$ mean “the student studies at least $10$ hours” and $Q$ mean “the student passes.” Rewrite and negate the implication:

$$P\\Rightarrow Q\\equiv\\neg P\\lor Q$$

$$\\neg(P\\Rightarrow Q)
\\equiv\\neg(\\neg P\\lor Q)
\\equiv P\\land\\neg Q$$

The last formula says that a student studied at least $10$ hours and did not pass. That is exactly the claimed negation,.

So the statement is True.`

      `**B.** → False

The converse $Q\\Rightarrow P$ would require every passing student to have studied at least $10$ hours. A student who already knows the material can have

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

For that student,

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

while the original $P\\Rightarrow Q$ remains true because $P$ is false. The converse is not guaranteed,.

So the statement is False.`

      `**C.** → True

An implication is refuted only by a true antecedent and a false conclusion. Anna has $P$ false and $Q$ true, so the original evaluates to

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

The converse evaluates to

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

Anna refutes the converse but not the professor's rule,.

So the statement is True.`

      `**D.** → False

The inverse negates both parts without swapping them:

$$\\neg P\\Rightarrow\\neg Q$$

The contrapositive swaps the parts and negates them:

$$\\neg Q\\Rightarrow\\neg P$$

These arrows point in opposite directions. The inverse is equivalent to the converse, not to the contrapositive,

So the statement is False.`

      `**E.** → True

The contrapositive of the professor's rule is equivalent to the original:

$$P\\Rightarrow Q\\quad\\Longleftrightarrow\\quad\\neg Q\\Rightarrow\\neg P$$

If a student did not pass, then $\\neg Q$ holds. Modus ponens on the contrapositive gives

$$\\neg Q,\\quad\\neg Q\\Rightarrow\\neg P\\quad\\Longrightarrow\\quad\\neg P$$

Thus the student studied less than $10$ hours,.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 23,
    solution_overview: `Write $P$ for “the student studies at least $10$ hours” and $Q$ for “the student passes.” The professor asserts

$$P \\Rightarrow Q$$

The negation of an implication is a counterexample, not another implication:

$$\\neg(P \\Rightarrow Q) \\equiv P \\land \\neg Q$$

The contrapositive $\\neg Q \\Rightarrow \\neg P$ is equivalent to the original. The converse $Q \\Rightarrow P$ and the inverse $\\neg P \\Rightarrow \\neg Q$ are equivalent to each other and not, in general, to the original.`,
  },
  {
    id: `math-1-67`,
    case_id: `MATH 1.67`,
    title: `A contract penalty clause`,
    subsection: `1.3`,
    context: `A contract clause states: “If the contractor fails to complete the project by the deadline, then a penalty fee applies.”`,
    statements: [
      `Failing to complete the project by the deadline is sufficient for a penalty fee to apply.`,
      `The converse, “If a penalty fee applies, then the contractor missed the deadline,” must also be true simply because the original clause is true.`,
      `The contrapositive, “If no penalty fee applies, then the contractor did not fail to complete by the deadline,” is logically guaranteed by the original clause.`,
      `The inverse, “If the contractor does not fail to complete by the deadline, then no penalty fee applies,” must also be true given the original clause.`,
      `The inverse of a conditional statement is always logically equivalent to its converse, even though neither is generally equivalent to the original.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Let $F$ mean “the contractor misses the deadline” and $P$ mean “a penalty applies.” The clause is

$$F\\Rightarrow P$$

A sufficient condition is one whose truth guarantees the consequent:

$$F=\\mathrm{T}\\quad\\Longrightarrow\\quad P=\\mathrm{T}$$

Thus missing the deadline is sufficient for the penalty to apply,.

So the statement is True.`

      `**B.** → False

The converse reverses the clause:

$$P\\Rightarrow F$$

Consider an on-time contractor who is fined for faulty work. Then $F=\\mathrm{F}$ and $P=\\mathrm{T}$. The original evaluates to

$$F\\Rightarrow P=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

but the converse evaluates to

$$P\\Rightarrow F=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

The original can hold while the converse fails, so the converse is not guaranteed and.

So the statement is False.`

      `**C.** → True

Form the contrapositive by swapping and negating both parts:

$$F\\Rightarrow P
\\quad\\Longleftrightarrow\\quad
\\neg P\\Rightarrow\\neg F$$

The equivalence also follows from the shared disjunctive form:

$$F\\Rightarrow P\\equiv\\neg F\\lor P$$

$$\\neg P\\Rightarrow\\neg F
\\equiv P\\lor\\neg F
\\equiv\\neg F\\lor P$$

Therefore “no penalty implies no missed deadline” is logically guaranteed,.

So the statement is True.`

      `**D.** → False

The inverse is

$$\\neg F\\Rightarrow\\neg P$$

Use an on-time contractor who receives a penalty for faulty work:

$$F=\\mathrm{F},\\qquad P=\\mathrm{T}$$

The inverse is false,

$$\\neg F\\Rightarrow\\neg P
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F},$$

while the original clause remains true:

$$F\\Rightarrow P
=\\mathrm{F}\\Rightarrow\\mathrm{T}
=\\mathrm{T}$$

The inverse is not guaranteed by the original,.

So the statement is False.`

      `**E.** → True

The converse is $P\\Rightarrow F$. Its contrapositive is obtained by swapping and negating:

$$P\\Rightarrow F
\\quad\\Longleftrightarrow\\quad
\\neg F\\Rightarrow\\neg P$$

The right-hand formula is exactly the inverse of the original clause. Algebraically, both reduce to the same disjunction:

$$P\\Rightarrow F\\equiv\\neg P\\lor F$$

$$\\neg F\\Rightarrow\\neg P
\\equiv F\\lor\\neg P
\\equiv\\neg P\\lor F$$

Thus inverse and converse always agree with each other, though not necessarily with the original.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 24,
    solution_overview: `Write $F$ for “the contractor misses the deadline” and $P$ for “a penalty fee applies.” The clause is

$$F \\Rightarrow P$$

The original and its contrapositive form one equivalent pair:

$$F \\Rightarrow P \\equiv \\neg P \\Rightarrow \\neg F$$

The converse and the inverse form a second pair:

$$P \\Rightarrow F \\equiv \\neg F \\Rightarrow \\neg P$$

The second pair need not share a truth value with the clause. The antecedent of a conditional is a sufficient condition for the consequent.`,
  },
  {
    id: `math-1-68`,
    case_id: `MATH 1.68`,
    title: `A scholarship eligibility rule with a waiver`,
    subsection: `1.3`,
    context: `A scholarship rule: a student is eligible only if they have a GPA of at least 3.5 AND have completed at least 60 credit hours - unless the Dean grants a written waiver of the credit-hour requirement, in which case only the GPA condition needs to be met. Student M has a GPA of 3.7, has completed 50 credit hours, and has NOT received a waiver. Student N has a GPA of 3.6, has completed 45 credit hours, and HAS received a waiver.`,
    statements: [
      `Student M is eligible for the scholarship.`,
      `Student N is eligible for the scholarship.`,
      `If Student M were to receive a Dean's waiver (keeping the same GPA and credit hours), M would become eligible.`,
      `The Dean's waiver, by itself, is sufficient for eligibility, regardless of GPA.`,
      `It is possible for a student with a GPA below 3.5 to be eligible, provided they have a waiver and sufficient credit hours.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

Student M has GPA $3.7$, so $G$ is true, $50$ credits, so $C$ is false, and no waiver, so $W$ is false. Then

$$G \\land (C \\lor W) = \\mathrm{T} \\land (\\mathrm{F} \\lor \\mathrm{F}) = \\mathrm{F}$$

M is not eligible.

Set beside the claim, the computed result is

$$G \\land (C \\lor W) = \\mathrm{T} \\land (\\mathrm{F} \\lor \\mathrm{F}) = \\mathrm{F}$$

which is not what the statement asserts.

So the statement is False.`

      `**B.** → True

Student N's GPA clears the cutoff, the credit count misses its cutoff, and the waiver is present:

$$G=\\mathrm{T},\\qquad C=\\mathrm{F},\\qquad W=\\mathrm{T}$$

Evaluate the waiver bracket first and then the conjunction:

$$G\\land(C\\lor W)
=\\mathrm{T}\\land(\\mathrm{F}\\lor\\mathrm{T})
=\\mathrm{T}\\land\\mathrm{T}
=\\mathrm{T}$$

N satisfies the complete eligibility condition,.

So the statement is True.`

      `**C.** → True

With the proposed waiver, M would have

$$G=\\mathrm{T},\\qquad C=\\mathrm{F},\\qquad W=\\mathrm{T}$$

The new truth evaluation is

$$G\\land(C\\lor W)
=\\mathrm{T}\\land(\\mathrm{F}\\lor\\mathrm{T})
=\\mathrm{T}$$

The waiver replaces the missing credit-hours condition while M's GPA still satisfies the non-waivable condition. M would become eligible,.

So the statement is True.`

      `**D.** → False

A waiver makes $W=\\mathrm{T}$, but it does not alter the GPA truth value. For a student below a $3.5$ GPA,

$$G=\\mathrm{F},\\qquad W=\\mathrm{T}$$

and, regardless of the credit value $C$,

$$G\\land(C\\lor W)
=\\mathrm{F}\\land(C\\lor\\mathrm{T})
=\\mathrm{F}\\land\\mathrm{T}
=\\mathrm{F}$$

The waiver alone cannot overcome a failed GPA requirement, so it is not sufficient and.

So the statement is False.`

      `**E.** → False

If GPA is below $3.5$, then $G$ is false. For any $C$ and $W$,

$$G \\land (C \\lor W) = \\mathrm{F}$$

No mix of waiver and credits rescues a low GPA.

Set beside the claim, the computed result is

$$G \\land (C \\lor W) = \\mathrm{F}$$

which is not what the statement asserts.

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 25,
    solution_overview: `The default scholarship rule is GPA at least $3.5$ and at least $60$ credit hours. The Dean may waive only the credit-hour half. Write $G$ for the GPA test, $C$ for the credit test, and $W$ for a written waiver. Eligibility holds exactly when

$$G \\land (C \\lor W)$$

The GPA condition sits outside the bracket, so a waiver cannot replace it. Inside the bracket, credits and a waiver are alternatives.`,
  },
  {
    id: `math-1-69`,
    case_id: `MATH 1.69`,
    title: `Travel insurance payout`,
    subsection: `1.3`,
    context: `A travel insurance policy pays out for trip cancellation if and only if [ (the traveler cancels due to a documented medical emergency) OR (the airline cancels the flight) ] AND (the traveler purchased the policy at least 14 days before departure). Traveler M cancelled due to a documented medical emergency and purchased the policy 20 days before departure. Traveler N's flight was cancelled by the airline, but N purchased the policy only 5 days before departure.`,
    statements: [
      `M's claim will be paid out.`,
      `N's claim will be paid out.`,
      `If a traveler purchases the policy fewer than 14 days before departure, their claim will never be paid out, regardless of the reason for cancellation.`,
      `Purchasing the policy at least 14 days in advance is, by itself, sufficient for a claim to be paid out.`,
      `It is possible for a claim to be paid out without a documented medical emergency AND without the policy being purchased at least 14 days in advance, provided the airline cancelled the flight.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

Traveler M has a documented medical emergency and bought the policy $20$ days before departure:

$$M=\\mathrm{T},\\qquad T=\\mathrm{T}$$

Whatever the airline value $A$ is, the medical-emergency half makes the reason bracket true:

$$(M\\lor A)\\land T
=(\\mathrm{T}\\lor A)\\land\\mathrm{T}
=\\mathrm{T}\\land\\mathrm{T}
=\\mathrm{T}$$

M satisfies the payout condition,.

So the statement is True.`

      `**B.** → False

Traveler N's airline cancellation makes $A=\\mathrm{T}$, but buying only $5$ days ahead makes $T=\\mathrm{F}$. Therefore

$$(M\\lor A)\\land T
=(M\\lor\\mathrm{T})\\land\\mathrm{F}
=\\mathrm{T}\\land\\mathrm{F}
=\\mathrm{F}$$

The accepted reason cannot compensate for the failed timing conjunct. N's claim is not paid,.

So the statement is False.`

      `**C.** → True

Buying the policy fewer than $14$ days before departure makes the timing condition false:

$$T=\\mathrm{F}$$

For any truth values of the two cancellation reasons,

$$(M\\lor A)\\land T
=(M\\lor A)\\land\\mathrm{F}
=\\mathrm{F}$$

Because this condition is equivalent to payout, its false value rules out every claim, regardless of the reason.

So the statement is True.`

      `**D.** → False

To test whether timing alone is sufficient, consider a traveler who buys exactly $14$ days ahead but has neither accepted cancellation reason:

$$T=\\mathrm{T},\\qquad M=\\mathrm{F},\\qquad A=\\mathrm{F}$$

Then

$$(M\\lor A)\\land T
=(\\mathrm{F}\\lor\\mathrm{F})\\land\\mathrm{T}
=\\mathrm{F}$$

The timing condition can be true while payout is false. It is necessary but not sufficient,.

So the statement is False.`

      `**E.** → False

The proposed scenario has no medical emergency, an airline cancellation, and a late policy purchase:

$$M=\\mathrm{F},\\qquad A=\\mathrm{T},\\qquad T=\\mathrm{F}$$

Evaluate the complete payout formula:

$$(M\\lor A)\\land T
=(\\mathrm{F}\\lor\\mathrm{T})\\land\\mathrm{F}
=\\mathrm{T}\\land\\mathrm{F}
=\\mathrm{F}$$

Airline cancellation fills the reason bracket but cannot replace the timing requirement. Such a claim is not paid,.

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 26,
    solution_overview: `The policy pays if and only if an accepted cancellation reason holds and the policy was bought at least $14$ days before departure. Write $M$ for a documented medical emergency, $A$ for an airline cancellation, and $T$ for the timing test. A payout holds exactly when

$$(M \\lor A) \\land T$$

Inside the bracket the two reasons are alternatives. Outside it, $T$ is required of every claim.`,
  },
  {
    id: `math-1-70`,
    case_id: `MATH 1.70`,
    title: `Contrapositive Reasoning in a Citizenship Voting Law`,
    subsection: `1.3`,
    context: `An election law states: "If a person is a citizen, they are eligible to vote."`,
    statements: [
      `The negation of this law is: "A person is a citizen and is not eligible to vote."`,
      `John is not eligible to vote; by the contrapositive, we may conclude that John is not a citizen. This reasoning is logically valid.`,
      `Maria is a citizen who chooses not to register and therefore does not cast a vote in one election. This is a counterexample disproving the law.`,
      `The converse, "If a person is eligible to vote, they are a citizen," could be false in a country that grants voting rights to certain non-citizen long-term residents.`,
      `The inverse, "If a person is not a citizen, they are not eligible to vote," always has the same truth value as the converse.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

Let $P$ mean “the person is a citizen” and $Q$ mean “the person is eligible to vote.” Negate the law:

$$\\neg(P\\Rightarrow Q)
\\equiv\\neg(\\neg P\\lor Q)
\\equiv P\\land\\neg Q$$

This negation has the violating truth pattern

$$P=\\mathrm{T},\\qquad Q=\\mathrm{F}$$

which describes a citizen who is not eligible to vote. That is exactly the claimed negation,.

So the statement is True.`

      `**B.** → True

The contrapositive is equivalent to the citizenship rule:

$$P\\Rightarrow Q\\quad\\Longleftrightarrow\\quad\\neg Q\\Rightarrow\\neg P$$

John is not eligible, so $\\neg Q$ holds. Apply modus ponens:

$$\\neg Q,\\quad\\neg Q\\Rightarrow\\neg P\\quad\\Longrightarrow\\quad\\neg P$$

John is therefore not a citizen,.

So the statement is True.`

      `**C.** → False

Maria's citizenship gives $P=\\mathrm{T}$. Choosing not to register or cast a ballot does not remove the legal right to vote, so eligibility remains $Q=\\mathrm{T}$. The law evaluates to

$$P\\Rightarrow Q
=\\mathrm{T}\\Rightarrow\\mathrm{T}
=\\mathrm{T}$$

A counterexample would instead require

$$P\\land\\neg Q=\\mathrm{T}$$

Maria does not have that pattern. Her choice not to vote does not disprove the law,.

So the statement is False.`

      `**D.** → True

The converse is

$$Q\\Rightarrow P$$

For a non-citizen long-term resident who is legally eligible, $Q=\\mathrm{T}$ and $P=\\mathrm{F}$. Then

$$Q\\Rightarrow P
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

while the original law remains true on the same row:

$$P\\Rightarrow Q
=\\mathrm{F}\\Rightarrow\\mathrm{T}
=\\mathrm{T}$$

This possible policy separates the converse from the original, so the converse could be false and.

So the statement is True.`

      `**E.** → True

The converse is $Q\\Rightarrow P$. Its contrapositive is

$$Q\\Rightarrow P
\\quad\\Longleftrightarrow\\quad
\\neg P\\Rightarrow\\neg Q$$

The right-hand side is exactly the inverse of the original law. Both also reduce to the same disjunction:

$$Q\\Rightarrow P\\equiv\\neg Q\\lor P$$

$$\\neg P\\Rightarrow\\neg Q
\\equiv P\\lor\\neg Q
\\equiv\\neg Q\\lor P$$

Therefore the inverse always has the same truth value as the converse,.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 27,
    solution_overview: `Write $P$ for “the person is a citizen” and $Q$ for “the person is eligible to vote.” The law is

$$P \\Rightarrow Q$$

Here $Q$ is the right to vote, not the act of casting a ballot. The negation of the law is $P \\land \\neg Q$. The contrapositive $\\neg Q \\Rightarrow \\neg P$ is equivalent to the original. The converse $Q \\Rightarrow P$ and the inverse $\\neg P \\Rightarrow \\neg Q$ are equivalent to each other and not, in general, to the original.`,
  },
  {
    id: `math-1-71`,
    case_id: `MATH 1.71`,
    title: `A business memo's reasoning`,
    subsection: `1.3`,
    context: `A company memo reasons: “If we increase our marketing budget, then sales will increase. Sales have increased this quarter. Therefore, we must have increased our marketing budget.”`,
    statements: [
      `The memo's argument is logically valid.`,
      `The argument would become valid if restated as: “If we increase our marketing budget, then sales will increase. We did NOT increase our marketing budget. Therefore, sales did not increase.”`,
      `The argument would become valid if restated as: “If we increase our marketing budget, then sales will increase. Sales did NOT increase. Therefore, we did not increase our marketing budget.”`,
      `For the original memo's conclusion to be validly drawn, the premise would need to be strengthened to a biconditional: “We increase our marketing budget if and only if sales increase.”`,
      `The fallacy in the original memo is the same type as concluding “It is raining” from the premises “If it rains, the ground gets wet” and “The ground is wet.”`,
    ],
    answer_key: [false, false, true, true, true],
    tactical_explanations: [
      `**A.** → False

Validity requires that no assignment make all premises true and the conclusion false. Let sales rise because a competitor left while the marketing budget stayed unchanged:

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

Then the conditional premise is true:

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

The second premise $Q$ is true, but the conclusion $P$ is false. This countermodel shows that affirming the consequent is invalid,.

So the statement is False.`

      `**B.** → False

The restatement uses the invalid form called denying the antecedent:

$$P\\Rightarrow Q,\\quad\\neg P\\quad\\therefore\\quad\\neg Q$$

Use the same competitor example, with $P$ false and $Q$ true. Then $P\\Rightarrow Q$ and $\\neg P$ are both true, but $\\neg Q$ is false. The premises can hold while the conclusion fails,.

So the statement is False.`

      `**C.** → True

Modus tollens applies the contrapositive of the conditional. From

$$P\\Rightarrow Q$$

we have

$$\\neg Q\\Rightarrow\\neg P$$

Together with the premise $\\neg Q$, modus ponens yields

$$\\neg P$$

The restated conclusion follows from the premises,

So the statement is True.`

      `**D.** → True

A biconditional supplies both directions:

$$P\\Leftrightarrow Q\\quad\\Longleftrightarrow\\quad(P\\Rightarrow Q)\\land(Q\\Rightarrow P)$$

The observed sales increase gives $Q$, and the added direction gives

$$Q,\\quad Q\\Rightarrow P\\quad\\Longrightarrow\\quad P$$

This strengthened premise validates the memo's conclusion,.

So the statement is True.`

      `**E.** → True

Argument types are determined by form, not subject matter. The rain argument has the form

$$P\\Rightarrow Q,\\quad Q\\quad\\therefore\\quad P$$

The marketing memo has exactly the same form. Both infer the antecedent from the consequent and affirm it,

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 28,
    solution_overview: `Write $P$ for “we increased the marketing budget” and $Q$ for “sales increased.” The memo argues from

$$P \\Rightarrow Q, \\qquad Q$$

to the conclusion $P$. That form is affirming the consequent. The premise licenses $P$ to $Q$, not the reverse. A competitor leaving the market can raise sales while the budget never moves: $Q$ true and $P$ false, with $P \\Rightarrow Q$ still true.`,
  },
  {
    id: `math-1-72`,
    case_id: `MATH 1.72`,
    title: `A Counterexample to "The Sum of Two Irrationals Is Irrational"`,
    subsection: `1.3`,
    context: `Consider the claim: "The sum of two irrational numbers is always irrational," and the classical proof that there is no largest prime number.`,
    statements: [
      `√2 + (-√2) = 0 is a valid counterexample to "the sum of two irrational numbers is always irrational," since √2 and -√2 are irrational but their sum, 0, is rational`,
      `Finding this one counterexample is enough to show the claim is not a true universal statement`,
      `A proof by contradiction that there is no largest prime begins by assuming there IS a largest prime, say p, and then derives a contradiction`,
      `To prove a universal statement, it suffices to check it for $x=1$ and $x=2$.`,
      `To prove an existential statement, it suffices to exhibit one value for which the stated property holds.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Both $\\sqrt{2}$ and $-\\sqrt{2}$ are irrational, and

$$\\sqrt{2}+(-\\sqrt{2})=0$$

Zero is rational, so the pair is a counterexample.

Set beside the claim, the computed result is

$$\\sqrt{2}+(-\\sqrt{2})=0$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → True

Write the universal claim as

$$\\forall a,b\\in\\mathbb R,\\quad
(\\mathrm{Irr}(a)\\land\\mathrm{Irr}(b))
\\Rightarrow\\mathrm{Irr}(a+b)$$

Its negation asks for one counterexample:

$$\\exists a,b,\\quad
\\mathrm{Irr}(a)\\land\\mathrm{Irr}(b)
\\land\\neg\\mathrm{Irr}(a+b)$$

The pair $a=\\sqrt2$, $b=-\\sqrt2$ satisfies this existential because $a+b=0\\in\\mathbb Q$. One witness makes the negation true and the universal false,.

So the statement is True.`

      `**C.** → True

Let the target be

$$\\neg\\exists p\\in\\mathbb P\\quad
\\forall q\\in\\mathbb P,\\ q\\le p$$

A contradiction proof begins by negating that target, namely by assuming

$$\\exists p\\in\\mathbb P\\quad
\\forall q\\in\\mathbb P,\\ q\\le p$$

This says there is a largest prime $p$. The proof then constructs a prime beyond the assumed bound and obtains a contradiction. Thus the proposed opening assumption is correct and.

So the statement is True.`

      `**D.** → False

Checking two inputs establishes only

$$P(1)=\\mathrm{T},\\qquad P(2)=\\mathrm{T}$$

The universal claim requires

$$\\forall x,\\quad P(x)=\\mathrm{T}$$

These are not equivalent: one may define a property with $P(1)=P(2)=\\mathrm{T}$ but $P(3)=\\mathrm{F}$. Then both checks pass while the universal fails. Therefore checking $x=1$ and $x=2$ is insufficient,.

So the statement is False.`

      `**E.** → True

An existential statement has the form

$$\\exists x,\\quad P(x)$$

If one exhibits a specific value $a$ and verifies

$$P(a)=\\mathrm{T},$$

then $a$ is a witness and the existential statement is true. Unlike a universal proof, no other values need to be checked. Therefore one working value is sufficient and.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 29,
    solution_overview: `A universal claim $\\forall x\\, P(x)$ is proved by an argument that covers every $x$ and is disproved by one counterexample. An existential claim $\\exists x\\, P(x)$ is proved by one witness.

The stem’s claim “the sum of two irrationals is always irrational” is universal. A proof by contradiction of “there is no largest prime” begins by assuming the negation of that target.`,
  },
  {
    id: `math-1-73`,
    case_id: `MATH 1.73`,
    title: `Converse and Contrapositive of a Fish-Habitat Rule`,
    subsection: `1.3`,
    context: `A biology rule states: "If an animal is a fish, then it lives in water."`,
    statements: [
      `"This dolphin lives in water, so it must be a fish" uses the converse of the rule and is an invalid argument.`,
      `"This lizard does not live in water, so it is not a fish" uses the contrapositive of the rule and is a valid argument.`,
      `"This snake is not a fish, so it does not live in water" uses the inverse of the rule, and inverse-based reasoning is always guaranteed to be valid.`,
      `The negation of the broader claim "All fish live in water" is "There exists a fish that does not live in water."`,
      `The fact that dolphins live in water without being fish is, by itself, a valid counterexample disproving "All fish live in water."`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The converse $Q\\Rightarrow P$ is tested by an animal that lives in water but is not a fish. For a dolphin,

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

The inference from living in water to being a fish therefore uses a false converse and is invalid,

So the statement is True.`

      `**B.** → True

The contrapositive is equivalent to the fish rule:

$$P\\Rightarrow Q\\quad\\Longleftrightarrow\\quad\\neg Q\\Rightarrow\\neg P$$

The lizard supplies $\\neg Q$. Modus ponens on the contrapositive gives

$$\\neg Q,\\quad\\neg Q\\Rightarrow\\neg P\\quad\\Longrightarrow\\quad\\neg P$$

The inference is valid,

So the statement is True.`

      `**C.** → False

The inverse $\\neg P\\Rightarrow\\neg Q$ is not equivalent to the original rule. A water snake has

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

so its inverse evaluation is

$$\\neg P\\Rightarrow\\neg Q=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

This counterexample shows that inverse-based reasoning is not guaranteed,.

So the statement is False.`

      `**D.** → True

“All fish live in water” is

$$\\forall x\\,(P(x)\\Rightarrow Q(x))$$

Negate the quantifier and then the implication:

$$\\neg\\forall x\\,(P(x)\\Rightarrow Q(x))
\\equiv\\exists x\\,\\neg(P(x)\\Rightarrow Q(x))$$

$$\\equiv\\exists x\\,(P(x)\\land\\neg Q(x))$$

The final formula says that there exists a fish that does not live in water. That is exactly the claimed negation,.

So the statement is True.`

      `**E.** → False

A counterexample to $P\\Rightarrow Q$ must make $P$ true and $Q$ false. A dolphin has

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

Thus the original rule evaluates to

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

A dolphin satisfies the rule vacuously instead of refuting it,

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 30,
    solution_overview: `Write $P(x)$ for “$x$ is a fish” and $Q(x)$ for “$x$ lives in water.” The rule is

$$P(x) \\Rightarrow Q(x)$$

The converse is $Q(x) \\Rightarrow P(x)$, the inverse is $\\neg P(x) \\Rightarrow \\neg Q(x)$, and the contrapositive is $\\neg Q(x) \\Rightarrow \\neg P(x)$. Only the contrapositive is equivalent to the original. The universal “all fish live in water” is $\\forall x\\,(P(x) \\Rightarrow Q(x))$, and its negation is $\\exists x\\,(P(x) \\land \\neg Q(x))$.`,
  },
  {
    id: `math-1-74`,
    case_id: `MATH 1.74`,
    title: `Negating a Store's Early-Payment Discount Policy`,
    subsection: `1.3`,
    context: `A store policy states: "If a customer pays within 30 days, they receive a 5% discount."`,
    statements: [
      `The negation of the policy is: "A customer paid within 30 days and received the discount."`,
      `The converse, "If a customer receives the discount, they paid within 30 days," is necessarily true given the policy.`,
      `Alex paid on day 45 (after 30 days) and did not receive the discount. This is consistent with the original policy and does NOT serve as a counterexample.`,
      `The inverse, "If a customer does not pay within 30 days, they do not receive the discount," is logically guaranteed to be true by the original policy.`,
      `The contrapositive, "If a customer does not receive the discount, they did not pay within 30 days," is NOT guaranteed to be true, since only the original conditional itself carries any real guarantee.`,
    ],
    answer_key: [false, false, true, false, false],
    tactical_explanations: [
      `**A.** → False

The negation of an implication is its unique failure case:

$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$$

The offered sentence is instead

$$P\\land Q$$

which describes a punctual customer who did receive the discount. It is not the negation,

So the statement is False.`

      `**B.** → False

The converse is $Q\\Rightarrow P$. Consider a customer who pays late but receives a holiday-promotion discount:

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

The original policy remains true,

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T},$$

while the converse is false:

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

The policy does not guarantee its converse,.

So the statement is False.`

      `**C.** → True

Alex paid on day $45$, so “paid within $30$ days” is false, and Alex received no discount:

$$P=\\mathrm{F},\\qquad Q=\\mathrm{F}$$

Evaluate the policy on this row:

$$P\\Rightarrow Q
=\\mathrm{F}\\Rightarrow\\mathrm{F}
=\\mathrm{T}$$

A counterexample would require $P=\\mathrm{T}$ and $Q=\\mathrm{F}$. Alex instead has a false antecedent, so the case is consistent with the policy.

So the statement is True.`

      `**D.** → False

The inverse $\\neg P\\Rightarrow\\neg Q$ can fail while the original remains true. For a late payer who receives a promotional discount,

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

Then

$$\\neg P\\Rightarrow\\neg Q=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

but $P\\Rightarrow Q$ is true because $P$ is false. The inverse is not guaranteed,.

So the statement is False.`

      `**E.** → False

The contrapositive is logically equivalent to the original:

$$P\\Rightarrow Q\\quad\\Longleftrightarrow\\quad\\neg Q\\Rightarrow\\neg P$$

Equivalent formulas have the same truth value on every assignment. Therefore the contrapositive is guaranteed whenever the policy is,

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 31,
    solution_overview: `Write $P$ for “the customer pays within $30$ days” and $Q$ for “the customer receives a $5\\%$ discount.” The policy is

$$P \\Rightarrow Q$$

Its negation is $P \\land \\neg Q$, a punctual payer who got no discount. The contrapositive $\\neg Q \\Rightarrow \\neg P$ is equivalent to the original. The converse $Q \\Rightarrow P$ and the inverse $\\neg P \\Rightarrow \\neg Q$ are not.`,
  },
  {
    id: `math-1-75`,
    case_id: `MATH 1.75`,
    title: `Negating a Revenue-Based Audit Regulation`,
    subsection: `1.3`,
    context: `A regulation states: "If a company's annual revenue exceeds \\$1 million, then it must file an annual audit."`,
    statements: [
      `The negation of this statement is: "If a company's revenue exceeds \\$1 million, then it does not file an audit."`,
      `The converse, "If a company files an annual audit, then its revenue exceeds \\$1 million," is guaranteed true whenever the original regulation holds.`,
      `The inverse, "If a company's revenue does not exceed \\$1 million, then it does not file an audit," is logically equivalent to the original statement.`,
      `The contrapositive, "If a company does not file an audit, then its revenue does not exceed \\$1 million," is equivalent to the original and must also be true.`,
      `Company X has revenue of \\$2 million but did not file an audit. This is a valid counterexample that would prove the original regulation false.`,
    ],
    answer_key: [false, false, false, true, true],
    tactical_explanations: [
      `**A.** → False

The negation of an implication is one violating company:

$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$$

The offered sentence is the different implication

$$P\\Rightarrow\\neg Q$$

It makes a claim about every company above the threshold instead of asserting one counterexample,

So the statement is False.`

      `**B.** → False

The converse is $Q\\Rightarrow P$. Consider a company with revenue $\\$300{,}000$ that files an audit voluntarily:

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

The regulation itself is true on this row,

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T},$$

but the converse is false:

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

Voluntary filing is therefore a counterexample to the converse,.

So the statement is False.`

      `**C.** → False

The inverse is

$$\\neg P\\Rightarrow\\neg Q$$

Use the same small company that files voluntarily. Its values $P=\\mathrm{F}$ and $Q=\\mathrm{T}$ give

$$\\neg P\\Rightarrow\\neg Q
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

while the original still gives

$$P\\Rightarrow Q
=\\mathrm{F}\\Rightarrow\\mathrm{T}
=\\mathrm{T}$$

Because their truth values differ on this case, the inverse is not equivalent to the original.

So the statement is False.`

      `**D.** → True

The contrapositive swaps and negates both parts:

$$P\\Rightarrow Q\\quad\\Longleftrightarrow\\quad\\neg Q\\Rightarrow\\neg P$$

Here $\\neg Q$ means no audit filing and $\\neg P$ means revenue does not exceed \\$1 million. That is the quoted rule,

So the statement is True.`

      `**E.** → True

An implication is disproved by a case with a true hypothesis and false conclusion. Company X has

$$P=\\mathrm{T},\\qquad Q=\\mathrm{F}$$

Therefore

$$P\\Rightarrow Q=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

Company X is a valid counterexample to the regulation,

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 32,
    solution_overview: `Write $P$ for “annual revenue exceeds \\$1 million” and $Q$ for “the company files an annual audit.” The regulation is

$$P \\Rightarrow Q$$

Its negation is a single offender, not a rival if-then:

$$\\neg(P \\Rightarrow Q) \\equiv P \\land \\neg Q$$

The contrapositive $\\neg Q \\Rightarrow \\neg P$ is equivalent to the original. The converse $Q \\Rightarrow P$ and the inverse $\\neg P \\Rightarrow \\neg Q$ are not. A firm below the cutoff may still file voluntarily.`,
  },
  {
    id: `math-1-76`,
    case_id: `MATH 1.76`,
    title: `Commercial pilot license`,
    subsection: `1.3`,
    context: `To be granted a commercial pilot license, it is necessary to have logged at least 250 flight hours; the license is granted if and only if the pilot has logged at least 250 flight hours AND has passed the FAA written exam AND has passed a practical flight test. Pilot A has logged 300 flight hours, passed the written exam, but failed the practical flight test. Pilot B has logged 240 flight hours, and passed both the written exam and the practical flight test.`,
    statements: [
      `Pilot A is granted the license.`,
      `Pilot B is granted the license.`,
      `Having logged at least 250 flight hours, by itself, guarantees that a pilot is granted the license.`,
      `If a pilot fails the practical flight test, they cannot be granted the license, even if they have more than 250 hours and passed the written exam.`,
      `There exists a pilot with more than 250 flight hours who is not granted the license.`,
    ],
    answer_key: [false, false, false, true, true],
    tactical_explanations: [
      `**A.** → False

Pilot A has $300$ hours and a passed written exam but failed the practical test, so $H$ and $W$ are true and $T$ is false. Then

$$H\\land W\\land T
=\\mathrm{T}\\land\\mathrm{T}\\land\\mathrm{F}
=\\mathrm{F}$$

Because licensing is equivalent to this conjunction, Pilot A is not granted the license.

So the statement is False.`

      `**B.** → False

Pilot B has $240$ hours, so $H$ is false, and passed both exams. Then

$$H\\land W\\land T
=\\mathrm{F}\\land\\mathrm{T}\\land\\mathrm{T}
=\\mathrm{F}$$

The failed hours condition makes the entire conjunction false, so Pilot B is not granted the license.

So the statement is False.`

      `**C.** → False

If flight hours alone guaranteed the license, $H\\Rightarrow L$ would hold. Pilot A is a counterexample:

$$H=\\mathrm{T},\\qquad W=\\mathrm{T},\\qquad T=\\mathrm{F}$$

The license condition evaluates to

$$L=H\\land W\\land T
=\\mathrm{T}\\land\\mathrm{T}\\land\\mathrm{F}
=\\mathrm{F}$$

Thus

$$H\\Rightarrow L
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

Hours are necessary but not sufficient,.

So the statement is False.`

      `**D.** → True

Failing the practical test makes $T=\\mathrm{F}$. For either truth value of the other requirements,

$$H\\land W\\land T
=H\\land W\\land\\mathrm{F}
=\\mathrm{F}$$

Since the license is granted if and only if this conjunction is true,

$$\\neg T\\Rightarrow\\neg L$$

Extra hours and a passed written exam cannot change the false conjunct. The pilot cannot be licensed,.

So the statement is True.`

      `**E.** → True

Pilot A is the required witness. The hours test is true, while the practical-test condition is false:

$$300>250,\\qquad H=\\mathrm{T},\\qquad T=\\mathrm{F}$$

Therefore

$$L=H\\land W\\land T
=\\mathrm{T}\\land\\mathrm{T}\\land\\mathrm{F}
=\\mathrm{F}$$

So there exists a pilot with more than $250$ hours who is not granted the license.

So the statement is True.`
    ],
    difficulty_level: `4/5`,
    sort_order: 33,
    solution_overview: `The license is granted if and only if three tests all hold. Write $H$ for at least $250$ flight hours, $W$ for passing the written exam, and $T$ for passing the practical test. The license is granted exactly when

$$H \\land W \\land T$$

In a conjunction every conjunct is necessary and no conjunct is sufficient on its own. The stem also records that $H$ is necessary, which the formula already encodes.`,
  },
  {
    id: `math-1-77`,
    case_id: `MATH 1.77`,
    title: `Bank loan approval`,
    subsection: `1.3`,
    context: `A bank's loan approval rule states: an applicant is approved if and only if [(credit score is at least 700) OR (has a qualified co-signer)] AND (debt-to-income ratio is below 40%). Applicant P has a credit score of 650, has a qualified co-signer, and a debt-to-income ratio of 35%. Applicant Q has a credit score of 720, no co-signer, and a debt-to-income ratio of 45%.`,
    statements: [
      `Applicant P, with a credit score of 650, a qualified co-signer, and a debt-to-income ratio of 35%, is NOT approved for the loan because their credit score alone is below 700.`,
      `Applicant Q is approved for the loan.`,
      `If an applicant's credit score is at least 700, they are always approved, regardless of their debt-to-income ratio.`,
      `If an applicant's debt-to-income ratio is 40% or above, they can never be approved, even with a high credit score or a co-signer.`,
      `It is possible for an applicant with a credit score below 700 to be approved, provided they have a co-signer and a debt-to-income ratio below 40%.`,
    ],
    answer_key: [false, false, false, true, true],
    tactical_explanations: [
      `**A.** → False

Applicant P has score $650$, so $S$ is false, a qualified co-signer, so $C$ is true, and ratio $35\\%$, so $D$ is true. Then $S \\lor C$ holds and

$$(S\\lor C)\\land D
=(\\mathrm{F}\\lor\\mathrm{T})\\land\\mathrm{T}
=\\mathrm{T}\\land\\mathrm{T}
=\\mathrm{T}$$

P is approved. The low score is not a veto while $C$ holds,.

So the statement is False.`

      `**B.** → False

Applicant Q has score $720$, so $S$ is true, and ratio $45\\%$, so $D$ is false. Then

$$(S\\lor C)\\land D
=(\\mathrm{T}\\lor C)\\land\\mathrm{F}
=\\mathrm{T}\\land\\mathrm{F}
=\\mathrm{F}$$

Q is not approved.

Set beside the claim, the computed result is

$$(S\\lor C)\\land D
=(\\mathrm{T}\\lor C)\\land\\mathrm{F}
=\\mathrm{T}\\land\\mathrm{F}
=\\mathrm{F}$$

which is not what the statement asserts.

So the statement is False.`

      `**C.** → False

If a high score always guaranteed approval, $S\\Rightarrow A$ would hold. Applicant Q has

$$S=\\mathrm{T},\\qquad D=\\mathrm{F}$$

so, regardless of co-signer status,

$$A=(S\\lor C)\\land D
=(\\mathrm{T}\\lor C)\\land\\mathrm{F}
=\\mathrm{F}$$

Hence

$$S\\Rightarrow A
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

Q is a counterexample to score sufficiency,.

So the statement is False.`

      `**D.** → True

A ratio of $40\\%$ or above fails the strict ratio test:

$$D=(\\mathrm{ratio}<40\\%)=\\mathrm{F}$$

For every score and co-signer truth value,

$$(S\\lor C)\\land D
=(S\\lor C)\\land\\mathrm{F}
=\\mathrm{F}$$

The ratio condition is a required outer conjunct, so neither a high score nor a co-signer can offset its failure. Such an applicant can never be approved, making the statement True.

So the statement is True.`

      `**E.** → True

Applicant P supplies the required witness:

$$S=\\mathrm{F},\\qquad C=\\mathrm{T},\\qquad D=\\mathrm{T}$$

Evaluate the approval rule:

$$(S\\lor C)\\land D
=(\\mathrm{F}\\lor\\mathrm{T})\\land\\mathrm{T}
=\\mathrm{T}$$

P's score is below $700$, but the co-signer fills the OR bracket and the ratio clears the outer requirement. Such an approval is possible,.

So the statement is True.`
    ],
    difficulty_level: `5/5`,
    sort_order: 34,
    solution_overview: `Write $S$ for credit score at least $700$, $C$ for a qualified co-signer, and $D$ for a debt-to-income ratio below $40\\%$. Approval holds exactly when

$$(S \\lor C) \\land D$$

Inside the bracket, score and co-signer are alternatives. Outside it, $D$ is required of every applicant and cannot be offset.`,
  },
  {
    id: `math-1-78`,
    case_id: `MATH 1.78`,
    title: `Sam's Loyalty Point and the Converse of a Dessert Rule`,
    subsection: `1.3`,
    context: `A restaurant policy states: "If a customer orders dessert, they receive one loyalty point." Diner Sam received a loyalty point despite not ordering dessert; he got one as part of a birthday promotion.`,
    statements: [
      `Sam's case is exactly what's needed to disprove the converse, "If a customer receives a loyalty point, they ordered dessert."`,
      `A proof by contradiction of "not every point-earning diner ordered dessert" would begin by assuming the opposite - "every diner who received a point ordered dessert" - and then show Sam's case violates that assumption.`,
      `Sam's case also disproves the policy that ordering dessert guarantees a loyalty point.`,
      `The correctly formed negation of the original policy would require finding a diner who ordered dessert and did NOT receive a point - a completely different scenario from Sam's.`,
      `The inverse, "If a customer does not order dessert, they do not receive a point," is directly contradicted by Sam's case.`,
    ],
    answer_key: [true, true, false, true, true],
    tactical_explanations: [
      `**A.** → True

The converse $Q\\Rightarrow P$ is false when a diner receives a point without ordering dessert. Sam has

$$Q=\\mathrm{T},\\qquad P=\\mathrm{F}$$

so

$$Q\\Rightarrow P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

Sam is exactly the counterexample needed to disprove the converse,

So the statement is True.`

      `**B.** → True

The target “not every point-earning diner ordered dessert” is

$$\\exists x\\,(Q(x)\\land\\neg P(x))$$

A contradiction proof assumes its negation:

$$\\forall x\\,(Q(x)\\Rightarrow P(x))$$

Sam has $Q(S)=\\mathrm{T}$ and $P(S)=\\mathrm{F}$, so the assumed universal gives the false instance

$$Q(S)\\Rightarrow P(S)
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

Sam contradicts the assumption, exactly as the proposed proof says.

So the statement is True.`

      `**C.** → False

The original policy fails only when dessert is ordered and no point is awarded. Sam instead has

$$P=\\mathrm{F},\\qquad Q=\\mathrm{T}$$

Thus

$$P\\Rightarrow Q=\\mathrm{F}\\Rightarrow\\mathrm{T}=\\mathrm{T}$$

Sam satisfies the original policy vacuously and does not disprove it,

So the statement is False.`

      `**D.** → True

The negation of an implication keeps the hypothesis and negates the conclusion:

$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$$

This requires a diner who ordered dessert and did not receive a point. Sam has $\\neg P\\land Q$, so his birthday case has the opposite truth values. The claimed negation is correct,.

So the statement is True.`

      `**E.** → True

The inverse is $\\neg P\\Rightarrow\\neg Q$. Sam did not order dessert but did receive a point, so

$$\\neg P=\\mathrm{T},\\qquad\\neg Q=\\mathrm{F}$$

Therefore

$$\\neg P\\Rightarrow\\neg Q=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

Sam directly contradicts the inverse,

So the statement is True.`
    ],
    difficulty_level: `5/5`,
    sort_order: 35,
    solution_overview: `Write $P$ for “the diner orders dessert” and $Q$ for “the diner receives a loyalty point.” The policy is

$$P \\Rightarrow Q$$

Sam received a birthday point without ordering dessert, so $P$ is false and $Q$ is true. A conditional is refuted only by a true antecedent and a false consequent.`,
  },
  {
    id: `math-1-79`,
    case_id: `MATH 1.79`,
    title: `Nested quantifiers with a product equation`,
    subsection: `1.4`,
    context: `Consider the statement: “For every positive integer m, there exists a positive integer n such that $m \\cdot n = 100$.”`,
    statements: [
      `The statement holds when m = 4 (there exists n with 4n = 100).`,
      `The statement holds when m = 3 (there exists n with 3n = 100).`,
      `The overall statement (“for every m, there exists n...”) is true.`,
      `The correct negation of the overall statement is: “There exists a positive integer m such that for every positive integer n, $m \\cdot n \\neq 100$.”`,
      `Reversing the quantifiers to “There exists n such that for every m, $m \\cdot n = 100$” would also produce a false statement.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

For $m=4$,

$$n = \\frac{100}{4} = 25$$

which is a positive integer, and $4 \\cdot 25 = 100$. A partner exists.

Set beside the claim, the computed result is

$$n = \\frac{100}{4} = 25$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → False

For $m=3$,

$$n = \\frac{100}{3}$$

which is not an integer. The equation has only that one solution, so no positive integer $n$ works.

Set beside the claim, the computed result is

$$n = \\frac{100}{3}$$

which is not what the statement asserts.

So the statement is False.`

      `**C.** → False

A universal claim is disproved by one counterexample. Choose the positive integer $m=3$. The equation would force

$$3n=100\\quad\\Longrightarrow\\quad n=\\frac{100}{3}\\notin\\mathbb Z_{>0}$$

Thus this $m$ has no permitted positive-integer witness $n$. Therefore $\\forall m\\,\\exists n\\,(mn=100)$ fails at $m=3$,.

So the statement is False.`

      `**D.** → True

Use quantifier negation one layer at a time: $\\neg\\forall$ becomes $\\exists\\neg$, and $\\neg\\exists$ becomes $\\forall\\neg$. Hence

$$\\neg\\bigl(\\forall m\\,\\exists n\\,(mn=100)\\bigr)
\\equiv
\\exists m\\,\\forall n\\,(mn\\ne100)$$

The positive integer $m=3$ illustrates the required witness: if $3n=100$, then $n=100/3$, which is not a positive integer. Thus every permitted $n$ satisfies $3n\\ne100$. This is exactly the stated negation,.

So the statement is True.`

      `**E.** → True

The reversed quantifiers demand one fixed positive integer $n$ that works for every positive integer $m$:

$$\\exists n\\,\\forall m\\,(mn=100)$$

Apply that supposed witness first to $m=1$ and then to $m=2$:

$$1\\cdot n=100\\Rightarrow n=100,
\\qquad
2\\cdot n=100\\Rightarrow n=50$$

One number cannot equal both $100$ and $50$, so no common witness $n$ exists. The reversed statement is false,.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `The statement is $\\forall m\\, \\exists n$ such that $m \\cdot n = 100$, with $m$ and $n$ positive integers. The order matters: $n$ is allowed to depend on $m$. For a fixed $m$ the equation forces

$$n = \\frac{100}{m}$$

and that $n$ is legal only when $m$ divides $100$. Negation flips each quantifier and negates the equation. Reversing the quantifiers asks for one $n$ that works for every $m$ at once.`,
  },
  {
    id: `math-1-80`,
    case_id: `MATH 1.80`,
    title: `A theft investigation`,
    subsection: `1.4`,
    context: `A theft occurred, and exactly one of four suspects - Ann, Ben, Cara, Dan - is guilty. It is known that:

(1) If Ann is guilty, then Dan is innocent.

(2) If Ben is innocent, then Cara is innocent.

(3) Dan is guilty.

(4) If Cara is guilty, then Ann is guilty.`,
    statements: [
      `Dan is guilty.`,
      `Ann is guilty.`,
      `Clue (2) is essential to determine that Cara is innocent - without it, Cara's innocence could not be established.`,
      `Clue (1) provides no additional information here, since its antecedent (Ann is guilty) is false.`,
      `Even without knowing that exactly one suspect is guilty, clue (3) alone already tells us Dan is guilty.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

This is direct use of a premise, not a derived guess. With $D$ meaning “Dan is guilty,” clue (3) is simply

$$D$$

Therefore every assignment satisfying the clues has $D=\\mathrm{T}$. Dan is guilty.

Set beside the claim, the computed result is

$$D$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → False

Use the exactly-one constraint together with clue (3). Since Dan occupies the unique guilty position,

$$D=\\mathrm{T}
\\quad\\Longrightarrow\\quad
A=B=C=\\mathrm{F}$$

In particular $A=\\mathrm{F}$, so Ann is innocent rather than guilty,

So the statement is False.`

      `**C.** → False

Test whether clue (2) is essential by omitting it. Clue (3) still gives $D=\\mathrm{T}$, and the exactly-one condition then forces

$$D=\\mathrm{T}
\\quad\\Longrightarrow\\quad
\\neg A\\land\\neg B\\land\\neg C$$

Thus $\\neg C$ is available without using $\\neg B\\Rightarrow\\neg C$. Clue (2) is not essential for Cara’s innocence,.

So the statement is False.`

      `**D.** → True

Clue (3) and uniqueness give $A=\\mathrm{F}$ and $D=\\mathrm{T}$. Evaluate clue (1), $A\\Rightarrow\\neg D$, on that assignment:

$$A\\Rightarrow\\neg D
=
\\mathrm{F}\\Rightarrow\\mathrm{F}
=\\mathrm{T}$$

The implication is vacuously true because its antecedent is false, so it eliminates no additional roster. Clue (1) provides no new information here,.

So the statement is True.`

      `**E.** → True

Clue (3) is already the atomic assertion

$$D=\\mathrm{T}$$

No implication, contraposition, or exactly-one constraint is needed to infer its own content. The uniqueness condition is needed only to eliminate Ann, Ben, and Cara after $D$ is known. Clue (3) alone establishes Dan’s guilt,

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `Exactly one of Ann, Ben, Cara, and Dan is guilty. Write $A,B,C,D$ for the four guilt atoms. The clues are

$$A \\Rightarrow \\neg D, \\qquad \\neg B \\Rightarrow \\neg C, \\qquad D, \\qquad C \\Rightarrow A$$

Clue (3) is a plain assertion that Dan is guilty. Combined with uniqueness, Ann, Ben, and Cara are innocent.`,
  },
  {
    id: `math-1-81`,
    case_id: `MATH 1.81`,
    title: `An island of truth-tellers and liars`,
    subsection: `1.4`,
    context: `On an island, every inhabitant either always tells the truth or always lies. Two inhabitants make statements: X says, “Y always lies.” Y says, “X and I are both liars.”`,
    statements: [
      `X is a truth-teller.`,
      `Y is a truth-teller.`,
      `Y's statement (“X and I are both liars”) is false.`,
      `There are two equally valid solutions for the types of X and Y.`,
      `If X were a liar, this would lead to a logical contradiction.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Use contradiction elimination. Suppose X were a liar, so X’s claim “Y lies” would be false; then Y would be a truth-teller:

$$\\neg x\\quad\\Longrightarrow\\quad y$$

A truthful Y would make “X and I are both liars” true, forcing $\\neg x\\land\\neg y$. That gives both $y$ and $\\neg y$, an impossibility. Hence $\\neg x$ is ruled out and $x$ is true,.

So the statement is True.`

      `**B.** → False

From the contradiction in the X-liar branch, X must be a truth-teller. A truth-teller’s sentence is true, and X says that Y lies:

$$x=\\mathrm{T}
\\quad\\Longrightarrow\\quad
\\neg y=\\mathrm{T}$$

Therefore $y=\\mathrm{F}$: Y is a liar, not a truth-teller,

So the statement is False.`

      `**C.** → True

The surviving types are $x=\\mathrm{T}$ and $y=\\mathrm{F}$. Evaluate Y’s sentence “X and I are both liars,” whose formula is $\\neg x\\land\\neg y$:

$$\\neg x\\land\\neg y
=
\\mathrm{F}\\land\\mathrm{T}
=\\mathrm{F}$$

That false sentence is exactly what a liar may say. Y’s statement is false,

So the statement is True.`

      `**D.** → False

There are only two branches for X. The liar branch forces $y$ true from X’s false accusation, then forces $y$ false from truthful Y’s conjunction:

$$\\neg x\\quad\\Longrightarrow\\quad y\\land\\neg y$$

So that branch is inconsistent. The remaining branch gives $x=\\mathrm{T}$ and, from X’s truthful accusation, $y=\\mathrm{F}$. Exactly one assignment survives, not two,.

So the statement is False.`

      `**E.** → True

Assume X is a liar. X’s sentence “Y lies” must then be false, so Y is truthful. Truthful Y’s sentence “X and I are both liars” must be true, so Y must also be a liar:

$$\\neg x
\\quad\\Longrightarrow\\quad
y
\\quad\\Longrightarrow\\quad
\\neg x\\land\\neg y$$

In particular this gives $y\\land\\neg y$. The X-liar hypothesis forces a contradiction,.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `**Part 1: Setup.**

Every inhabitant is a truth-teller or a liar. Write $x$ for X being a truth-teller and $y$ for Y being a truth-teller. X claims $\\neg y$. Y claims $\\neg x \\land \\neg y$. A truth-teller's sentence is true. A liar's sentence is false.

**Part 2: Solve.**

If $x$ is false, then X's sentence is false, so $y$ is true. Then Y's sentence is true, which forces $\\neg y$. Y cannot be both a truth-teller and a liar, so X cannot be a liar.

The surviving assignment is $x$ true and $y$ false: X is a truth-teller and Y is a liar.`,
  },
  {
    id: `math-1-82`,
    case_id: `MATH 1.82`,
    title: `Quantifier order: exam scores`,
    subsection: `1.4`,
    context: `Compare two statements about a class of students and several exams: Statement 1: “There exists a student who scored above 90 on every exam.” Statement 2: “For every exam, there exists a student who scored above 90.”`,
    statements: [
      `Statement 1 logically implies Statement 2.`,
      `Statement 2 logically implies Statement 1.`,
      `The two statements are logically equivalent.`,
      `If the top scorer is different for each exam (no single student tops every exam), Statement 2 can be true while Statement 1 is false.`,
      `If there is only one exam, the two statements become logically equivalent.`,
    ],
    answer_key: [true, false, false, true, true],
    tactical_explanations: [
      `**A.** → True

Statement 1 supplies an existential witness $s_0$ before any exam is chosen:

$$\\exists s\\,\\forall e\\,G(s,e)
\\quad\\Longrightarrow\\quad
\\forall e\\,G(s_0,e)$$

For each exam $e$, choose that same $s_0$ as the witness to $\\exists s\\,G(s,e)$. Therefore

$$\\exists s\\,\\forall e\\,G(s,e)
\\quad\\Longrightarrow\\quad
\\forall e\\,\\exists s\\,G(s,e)$$

Statement 1 implies Statement 2,.

So the statement is True.`

      `**B.** → False

Disprove the implication with a quantifier countermodel. Use students $X,Y$ and exams $e_1,e_2$, with

$$G(X,e_1)=\\mathrm{T},\\quad G(X,e_2)=\\mathrm{F},$$

$$G(Y,e_1)=\\mathrm{F},\\quad G(Y,e_2)=\\mathrm{T}$$

Every exam has a witness—$X$ for $e_1$ and $Y$ for $e_2$—so $\\forall e\\,\\exists s\\,G(s,e)$ is true. Neither student clears both exams, so $\\exists s\\,\\forall e\\,G(s,e)$ is false. The reverse implication has a true premise and false conclusion in this model,.

So the statement is False.`

      `**C.** → False

Logical equivalence requires both implications. The forward direction holds by reusing Statement 1’s witness:

$$\\exists s\\,\\forall e\\,G(s,e)
\\quad\\Longrightarrow\\quad
\\forall e\\,\\exists s\\,G(s,e)$$

For the reverse direction, let $X$ clear only $e_1$ and $Y$ clear only $e_2$. Then

$$\\forall e\\,\\exists s\\,G(s,e)=\\mathrm{T},
\\qquad
\\exists s\\,\\forall e\\,G(s,e)=\\mathrm{F}$$

One direction fails in this concrete model, so the formulas are not equivalent,.

So the statement is False.`

      `**D.** → True

This is an existence claim, so one class is enough. Take two exams and two students: $X$ scores above $90$ only on $e_1$, while $Y$ scores above $90$ only on $e_2$. Then

$$\\underbrace{G(X,e_1)}_{X\\text{ witnesses }e_1},
\\qquad
\\underbrace{G(Y,e_2)}_{Y\\text{ witnesses }e_2}$$

Thus every exam has some high scorer. But $X$ fails $e_2$ and $Y$ fails $e_1$, so no single student is a witness for every exam. This class realizes Statement 2 without Statement 1,.

So the statement is True.`

      `**E.** → True

Let the exam domain be the singleton $\\{e_1\\}$. A universal over that one value has only one case, so Statement 1 becomes

$$\\exists s\\,\\forall e\\in\\{e_1\\}\\,G(s,e)
\\equiv
\\exists s\\,G(s,e_1)$$

Statement 2 becomes

$$\\forall e\\in\\{e_1\\}\\,\\exists s\\,G(s,e)
\\equiv
\\exists s\\,G(s,e_1)$$

Both quantifier orders reduce to the same formula,.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `Write $G(s,e)$ for student $s$ scoring above $90$ on exam $e$.

Statement 1 picks the student first:

$$\\exists s\\,\\forall e\\, G(s,e)$$

Statement 2 picks the exam first:

$$\\forall e\\,\\exists s\\, G(s,e)$$

In Statement 1 one student must clear every exam. In Statement 2 a different student may cover each exam.`,
  },
  {
    id: `math-1-83`,
    case_id: `MATH 1.83`,
    title: `A hiring committee's voting rule`,
    subsection: `1.4`,
    context: `A hiring committee of four reviewers (R1, R2, R3, R4) approves a candidate if at least three of the four vote yes, OR if exactly two vote yes and R1 is one of the two yes-votes (R1 has tie-breaking authority in that specific case only). For one candidate, R1 and R2 voted yes, while R3 and R4 voted no.`,
    statements: [
      `The candidate is approved.`,
      `If instead R2 and R3 had voted yes (with R1 and R4 voting no), the candidate would be approved under the same rule.`,
      `If exactly three reviewers vote yes, the candidate is always approved, regardless of which three they are.`,
      `R1's yes-vote is necessary for approval in every possible voting scenario.`,
      `There exists a scenario with exactly 2 yes-votes where the candidate is not approved.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Approval is the inclusive or of the two gates. The given votes produce $Y=2$, so gate 1 gives

$$2\\ge3\\quad\\Longrightarrow\\quad\\mathrm{F}$$

R1 is one of the two yes-votes, so both parts of gate 2 are true:

$$\\mathrm{T}\\land\\mathrm{T}=\\mathrm{T}$$

At least one gate is true. The candidate is approved,.

So the statement is True.`

      `**B.** → False

Approval requires at least one gate to be true. With only R2 and R3 voting yes, gate 1 gives

$$2\\ge3\\quad\\Longrightarrow\\quad\\mathrm{F}$$

R1 is not among the two yes-votes, so the second part of gate 2 is false:

$$\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

Both gates are false. The candidate is not approved,.

So the statement is False.`

      `**C.** → True

Gate 1 depends only on the number of yes-votes. With any three reviewers voting yes,

$$Y=3$$

and

$$3\\ge3\\quad\\Longrightarrow\\quad\\mathrm{T}$$

Gate 1 opens without consulting the reviewers' names. The candidate is approved,.

Set beside the claim, the computed result is

$$3\\ge3\\quad\\Longrightarrow\\quad\\mathrm{T}$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → False

A necessary condition is disproved by one approved case in which it is absent. Let R2, R3, and R4 vote yes while R1 votes no:

$$Y=3$$

Gate 1 still opens:

$$3\\ge3\\quad\\Longrightarrow\\quad\\mathrm{T}$$

This is an approval without R1's yes-vote. R1 is not always necessary,

So the statement is False.`

      `**E.** → True

An existential claim needs one two-vote scenario in which both approval gates fail. Let only R2 and R3 vote yes:

$$Y=2$$

Then gate 1 is false:

$$2\\ge3\\quad\\Longrightarrow\\quad\\mathrm{F}$$

R1 votes no, so gate 2 is also false:

$$\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

This witness has exactly two yes-votes and no approval,.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `A candidate is approved if at least one of two gates opens. Let $Y$ be the number of yes-votes.

Gate 1: $Y \\ge 3$, names ignored.

Gate 2: $Y = 2$ and R1 is one of the two yes-votes.

The given votes are R1 yes, R2 yes, R3 no, R4 no.`,
  },
  {
    id: `math-1-84`,
    case_id: `MATH 1.84`,
    title: `A warranty voiding clause`,
    subsection: `1.4`,
    context: `A product warranty: “The warranty is void if the product is used commercially, except if the manufacturer has explicitly approved commercial use in writing, in which case the warranty remains valid provided the product is serviced annually.” Company Z uses the product commercially, has written approval from the manufacturer, but has never had the product serviced.`,
    statements: [
      `Company Z's warranty is void.`,
      `Having written approval from the manufacturer alone is sufficient to keep the warranty valid despite commercial use.`,
      `The rule's exception requires both approval AND annual servicing to keep the warranty valid under commercial use - satisfying only one of the two is not enough.`,
      `If a company uses the product commercially without any manufacturer approval at all, the warranty could still remain valid provided they service it annually.`,
      `If Company Z had never used the product commercially at all, the annual-servicing requirement mentioned in the clause would still apply to it.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The commercial-use exception opens only when approval and annual servicing both hold. Company Z has written approval but no servicing, so

$$W\\land S=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

Because $C$ is true and the exception is false, the commercial-use clause voids Z's warranty,

So the statement is True.`

      `**B.** → False

Sufficiency of written approval would require $W$ alone to make the exception true. Company Z supplies a counterexample:

$$W=\\mathrm{T},\\qquad S=\\mathrm{F}$$

Therefore

$$W\\land S=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

The exception stays closed despite approval. Approval alone is not sufficient,.

So the statement is False.`

      `**C.** → True

The exception is a conjunction, so each condition is necessary. Approval without servicing gives

$$W\\land S=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

Servicing without approval gives

$$W\\land S=\\mathrm{F}\\land\\mathrm{T}=\\mathrm{F}$$

Satisfying only one condition never opens the exception,

So the statement is True.`

      `**D.** → False

The exception requires both written approval and servicing. If approval is absent but annual servicing occurs, then

$$W\\land S=\\mathrm{F}\\land\\mathrm{T}=\\mathrm{F}$$

The exception remains closed, and commercial use still voids the warranty,

So the statement is False.`

      `**E.** → False

This is a scope question. Annual servicing is required inside the exception that rescues commercial use; it is not a global warranty condition. If Company Z never used the product commercially, then

$$C=\\mathrm{F}$$

and the commercial-use voiding branch is inactive. Because that branch is never entered, neither its written-approval test nor its annual-servicing test is consulted. The quoted clause does not impose servicing on noncommercial use.

So the statement is False.`
    ],
    difficulty_level: `1/5`,
    sort_order: 6,
    solution_overview: `Write $C$ for commercial use, $W$ for written manufacturer approval, and $S$ for annual servicing.

If $C$ is false the voiding clause never fires. If $C$ is true the warranty is void unless $W$ and $S$ both hold.

Company Z has $C$ true, $W$ true, and $S$ false.`,
  },
  {
    id: `math-1-85`,
    case_id: `MATH 1.85`,
    title: `Five Independent Checks on Proof and Negation Technique`,
    subsection: `1.4`,
    context: `Several independent mini-scenarios testing whether a proof or negation is correctly constructed.`,
    statements: [
      `Proving "there is no smallest positive real number" by assuming such a number x exists and noting x/2 is smaller (a contradiction) is a valid proof by contradiction.`,
      `A "proof" of "√3 is irrational" that begins "Assume √3 is irrational..." and proceeds from there is a valid proof by contradiction.`,
      `The negation of "All flights are delayed and all trains are on time" is "No flight is delayed and no train is on time."`,
      `For "Some employee always arrives late" (some employee is late every day), the correct negation is "All employees are never late."`,
      `One satisfying value proves an existential claim; a universal claim needs an argument for an arbitrary value, not a finite check.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

The target is that there is no smallest positive real, so the legal opening is the opposite: suppose such an $x > 0$ exists. Then $\\frac{x}{2}$ is still positive and strictly smaller than $x$, so $x$ was not smallest. The writeup opens with the negation of the target and ends in an impossibility,

So the statement is True.`

      `**B.** → False

A contradiction proof that $\\sqrt{3}$ is irrational must assume the negation, that $\\sqrt{3}$ is rational. Opening with "assume $\\sqrt{3}$ is irrational" assumes the conclusion itself, so there is nothing left to contradict. That is not a valid proof by contradiction,

So the statement is False.`

      `**C.** → False

The original is $(\\forall f\\, D(f)) \\land (\\forall t\\, O(t))$. Negating an and yields an or, and negating "all" yields "some not":

$$\\exists f\\, \\neg D(f) \\lor \\exists t\\, \\neg O(t)$$

The offered sentence keeps the and and strengthens both halves. One on-time flight already falsifies the original while leaving that offered sentence false,.

So the statement is False.`

      `**D.** → False

"Some employee always arrives late" is $\\exists x\\, \\forall d\\, L(x,d)$. Flip both quantifiers and negate inside:

$$\\forall x\\, \\exists d\\, \\neg L(x,d)$$

Every employee has at least one on-time day. "All employees are never late" is $\\forall x\\, \\forall d\\, \\neg L(x,d)$, a stronger ban,

So the statement is False.`

      `**E.** → True

The logical idea is the difference between an existential witness and universal generalization. For an existential, one verified value $a$ is enough:

$$P(a)\\quad\\Longrightarrow\\quad\\exists x\\,P(x)$$

For a universal, checking selected values is insufficient; one must begin with an arbitrary $a$ and prove $P(a)$ without using any special feature of that choice:

$$a\\text{ arbitrary},\\ P(a)
\\quad\\Longrightarrow\\quad
\\forall x\\,P(x)$$

The two proof standards in the claim are therefore correct,.

So the statement is True.`
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `A proof by contradiction opens by assuming the opposite of the target. Negating a sentence flips "for all" into "there exists" and "and" into "or".

An existential $\\exists x\\, P(x)$ is settled by one witness. A universal $\\forall x\\, P(x)$ needs an argument that runs for an arbitrary $x$, not a finite list of successes.`,
  },
  {
    id: `math-1-86`,
    case_id: `MATH 1.86`,
    title: `Validity versus soundness`,
    subsection: `1.4`,
    context: `Consider the argument: Premise 1: All economists study human behavior. Premise 2: Some economists specialize in game theory. Conclusion: Therefore, some people who specialize in game theory study human behavior.`,
    statements: [
      `The argument is logically valid (the conclusion necessarily follows from the premises).`,
      `The argument would still be valid if Premise 2 were changed to “No economists specialize in game theory.” 39`,
      `Validity means the conclusion is guaranteed true whenever the premises are true - it does not require the premises to actually be true in reality.`,
      `If Premise 1 were false in reality, the argument could still be considered valid, even though it would then be unsound.`,
      `This argument is an example of the fallacy of “affirming the consequent.”`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Existential instantiation lets us name the witness supplied by Premise 2. For some person $a$,

$$E(a)\\land G(a)$$

Hence $E(a)$ and $G(a)$. Premise 1 applies to that same person:

$$E(a),\\quad E(a)\\Rightarrow H(a)\\quad\\Longrightarrow\\quad H(a)$$

Combining the two established properties gives

$$G(a)\\land H(a)$$

Thus the conclusion has a witness whenever the premises are true,.

So the statement is True.`

      `**B.** → False

Invalidity is shown by one model with true premises and a false conclusion. Take a world with one person $a$ and set

$$E(a)=\\mathrm{T},\\qquad H(a)=\\mathrm{T},\\qquad G(a)=\\mathrm{F}$$

Then every economist studies human behavior, and no economist specializes in game theory. But

$$\\exists x\\,(G(x)\\land H(x))$$

is false because the only person has $G(a)$ false. The modified premises can be true while the conclusion is false,.

So the statement is False.`

      `**C.** → True

Validity is a model-by-model conditional: there may be no assignment on which all premises are true and the conclusion is false. Symbolically, validity means

$$(P_1\\land P_2)\\Rightarrow C$$

holds in every model. This test does not ask whether $P_1$ or $P_2$ describes the actual world. Requiring both valid form and actually true premises is soundness, not validity. The claim states the validity standard correctly.

So the statement is True.`

      `**D.** → True

The witness derivation remains valid as a piece of logic: whenever both premises hold, Premise 2 supplies an economist-game-theorist $a$, and Premise 1 gives $H(a)$. Real-world falsity of Premise 1 changes only the soundness test:

$$\\mathrm{Sound}
=
\\mathrm{Valid}
\\land
\\mathrm{ActuallyTruePremises}$$

If Premise 1 is actually false, the second conjunct fails while the implication from premises to conclusion remains valid. The argument could therefore be valid but unsound,.

So the statement is True.`

      `**E.** → False

Affirming the consequent has the invalid form

$$P\\Rightarrow Q,\\quad Q\\quad\\therefore\\quad P$$

The given argument instead instantiates one economist-game-theorist and applies the universal premise to that same witness:

$$E(a)\\land G(a),\\quad E(a)\\Rightarrow H(a)\\quad\\Longrightarrow\\quad G(a)\\land H(a)$$

No consequent is used to recover an antecedent. This is not affirming the consequent,.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `Write $E(x)$ for "$x$ is an economist", $H(x)$ for "$x$ studies human behavior", and $G(x)$ for "$x$ specializes in game theory". The argument is

P1: $\\forall x\\,(E(x) \\Rightarrow H(x))$.

P2: $\\exists x\\,(E(x) \\land G(x))$.

Conclusion: $\\exists x\\,(G(x) \\land H(x))$.

Validity asks whether the conclusion must be true whenever the premises are true. Soundness adds that the premises are in fact true. Affirming the consequent is the invalid pattern $P \\Rightarrow Q$, $Q$, therefore $P$.`,
  },
  {
    id: `math-1-87`,
    case_id: `MATH 1.87`,
    title: `One Losing Game as a Counterexample to a Scoring Rule`,
    subsection: `1.4`,
    context: `A sports fan claims: "If a player scores over 30 points in a game, the team wins." In one game, Player X scored 35 points, but the team lost 90-95.`,
    statements: [
      `This specific game is a valid counterexample that disproves the fan's general rule.`,
      `Given this counterexample, the statement "there exists a game where a player scored over 30 points and the team did not win" is true.`,
      `Since the original rule is false, its contrapositive, "If the team does not win, then no player scored over 30 points," must also be false.`,
      `Because the original rule is false, its converse, "If the team wins, then some player scored over 30 points," is therefore also automatically false.`,
      `The inverse, "If a player does not score over 30 points, the team does not win," has a truth value that is independent of the original rule's truth value.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

An implication is false exactly when its antecedent is true and its conclusion is false. In the reported game,

$$P=\\mathrm{T},\\qquad Q=\\mathrm{F}$$

Therefore

$$P\\Rightarrow Q=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

One game with this evaluation disproves the fan's universal rule,

So the statement is True.`

      `**B.** → True

An existential claim needs one explicit witness. Let $g_0$ be the reported game, and write $P(g)$ for “some player scores over $30$” and $Q(g)$ for “the team wins.” Then

$$P(g_0)=\\mathrm{T}\\quad(35>30),
\\qquad
Q(g_0)=\\mathrm{F}\\quad(90<95)$$

Hence $P(g_0)\\land\\neg Q(g_0)$ is true, so $g_0$ witnesses $\\exists g\\,(P(g)\\land\\neg Q(g))$,.

So the statement is True.`

      `**C.** → True

The contrapositive has the same truth value as the original implication. In the reported game, the team did not win but Player X scored over $30$, so

$$\\neg Q=\\mathrm{T},\\qquad\\neg P=\\mathrm{F}$$

Thus

$$\\neg Q\\Rightarrow\\neg P=\\mathrm{T}\\Rightarrow\\mathrm{F}=\\mathrm{F}$$

The same game refutes both equivalent forms,.

So the statement is True.`

      `**D.** → False

The inference about the converse is invalid. The reported game itself gives a concrete truth assignment:

$$P=\\mathrm{T},\\qquad Q=\\mathrm{F}$$

On that assignment, compare the two directions:

$$P\\Rightarrow Q
=\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F},$$

$$Q\\Rightarrow P
=\\mathrm{F}\\Rightarrow\\mathrm{T}
=\\mathrm{T}$$

Thus the original can be false while its converse is true. Falsity does not transfer from an implication to its converse,.

So the statement is False.`

      `**E.** → True

The inverse $\\neg P \\Rightarrow \\neg Q$ pairs with the converse, not with the original. It is tested by games with no $30$-point scorer. The reported game has a $35$-point scorer, so $P$ is true and the inverse is not even evaluated. Its truth value is a separate question from the fan's false rule,

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `For a single game write $P$ for some player scoring over $30$ points and $Q$ for the team winning. The fan claims $P \\Rightarrow Q$ for every game.

An implication fails only on $P$ true and $Q$ false. The contrapositive $\\neg Q \\Rightarrow \\neg P$ always agrees with the original. The converse $Q \\Rightarrow P$ and the inverse $\\neg P \\Rightarrow \\neg Q$ form a separate pair.

In the reported game Player X scored $35$ and the team lost $90$-$95$.`,
  },
  {
    id: `math-1-88`,
    case_id: `MATH 1.88`,
    title: `A grading curve rule`,
    subsection: `1.4`,
    context: `A professor's rule: “A student receives a B or higher if and only if their exam score is at least 70 - unless the professor applies a curve, in which case a score of at least 60 suffices for a B or higher.” In a particular exam, the professor did apply a curve. Student W scored 65.`,
    statements: [
      `Student W receives a B or higher on this exam.`,
      `If the curve had not been applied, Student W would still receive a B or higher.`,
      `The curve strictly lowers the threshold needed for a B or higher - it never raises it, based on how the rule is described.`,
      `A student who scored 62 would receive a B or higher only if the curve is applied.`,
      `The phrase “if and only if” in the rule means that scoring at least 70 is both necessary and sufficient for a B or higher under all circumstances, curve or no curve.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The professor applied a curve, so the live cutoff is $s \\ge 60$. Student W scored $65$, and

$$65 \\ge 60$$

W receives a B or higher.

Set beside the claim, the computed result is

$$65 \\ge 60$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → False

Without a curve the live cutoff is $s \\ge 70$. Student W scored $65$, and

$$65 < 70$$

so the baseline biconditional denies the B. W's score sits in the band that the curve alone unlocks.

Set beside the claim, the computed result is

$$65 < 70$$

which is not what the statement asserts.

So the statement is False.`

      `**C.** → True

The baseline uses $70$. The curve replaces it with $60$. Compare:

$$60 < 70$$

Anyone with $s \\ge 70$ still has $s \\ge 60$, so a B already earned under the baseline is never taken away. The threshold moves down, not up.

Set beside the claim, the computed result is

$$60 < 70$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → True

A score of $62$ satisfies $60 \\le 62 < 70$. Under a curve the cutoff is $60$, so $62 \\ge 60$ earns the B. Without a curve the cutoff is $70$, so $62 < 70$ denies it. The B at $62$ occurs only if the curve is applied.

Record the verdict against the live claim after the calculation above is complete.

So the statement is True.`

      `**E.** → False

The baseline biconditional is a B iff $s \\ge 70$, and the unless clause replaces the cutoff by $60$ when a curve is applied. This exam used a curve, and W scored $65$, which is below $70$ and still a B. Scoring at least $70$ is not necessary in all circumstances,

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `Write $s$ for the exam score. With no curve, a B or higher holds if and only if $s \\ge 70$. With a curve, a B or higher holds if and only if $s \\ge 60$.

This exam used a curve. Student W scored $65$.`,
  },
  {
    id: `math-1-89`,
    case_id: `MATH 1.89`,
    title: `Gear teeth and coprimality`,
    subsection: `1.4`,
    context: `Two meshing gears wear evenly over time only if their tooth counts m and n are coprime, meaning gcd(m, n) = 1 (equivalently, no prime number divides both m and n). A machinist is checking two candidate gear pairs: Pair 1 has tooth counts 15 and 28. Pair 2 has tooth counts 24 and 36.`,
    statements: [
      `Pair 1 (15 and 28) is coprime, so this pair will wear evenly.`,
      `Pair 2 (24 and 36) is coprime.`,
      `The correct negation of "m and n are coprime" is: "there exists a prime p such that p divides m and p divides n."`,
      `If m and n are coprime and both are greater than 1, then m and n cannot both be even numbers.`,
      `Every coprime pair of integers greater than 1 must include at least one prime number.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Factor the two counts:

$$15 = 3 \\times 5, \\qquad 28 = 2^{2} \\times 7$$

The prime lists $\\{3,5\\}$ and $\\{2,7\\}$ are disjoint, so $\\mathrm{gcd}(15,28)=1$. Pair 1 is coprime and therefore meets the even-wear test.

Set beside the claim, the computed result is

$$15 = 3 \\times 5, \\qquad 28 = 2^{2} \\times 7$$

which is exactly what the statement asserts.

So the statement is True.`

      `**B.** → False

Factor Pair 2:

$$24 = 2^{3} \\times 3, \\qquad 36 = 2^{2} \\times 3^{2}$$

Both $2$ and $3$ appear on each side. Taking the smaller power of each shared prime gives

$$\\mathrm{gcd}(24,36) = 2^{2} \\times 3 = 12 \\ne 1$$

Pair 2 is not coprime,

So the statement is False.`

      `**C.** → True

Coprime means that every prime fails to divide at least one of the two numbers:

$$\\forall p\\,\\bigl(\\mathrm{Prime}(p)\\Rightarrow(p\\nmid m\\lor p\\nmid n)\\bigr)$$

Negating the universal flips the quantifier and both failures:

$$\\exists p\\,\\bigl(\\mathrm{Prime}(p)\\land p\\mid m\\land p\\mid n\\bigr)$$

That is exactly the quoted negation,.

So the statement is True.`

      `**D.** → True

Proof by contradiction starts by assuming the forbidden combination. If both numbers were even, then

$$2\\mid m$$

and

$$2\\mid n$$

so they would share the prime factor $2$:

$$\\mathrm{gcd}(m,n)\\ge2$$

This contradicts $\\mathrm{gcd}(m,n)=1$. A coprime pair cannot contain two even numbers,

So the statement is True.`

      `**E.** → False

Disprove the universal claim with one counterexample. Pair 1 has two composite numbers:

$$15=3\\times5,
\\qquad
28=2^{2}\\times7$$

Their prime-factor sets are disjoint, so

$$\\mathrm{gcd}(15,28)=1$$

Thus a coprime pair greater than $1$ can contain no prime number at all. This pair refutes “every coprime pair includes a prime,”.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `Two whole numbers are coprime when $\\mathrm{gcd}(m,n)=1$, equivalently when no prime divides both. Pair 1 has tooth counts $15$ and $28$. Pair 2 has tooth counts $24$ and $36$.

The negation of "coprime" is that some prime divides both. Two even numbers always share the prime $2$. Coprime numbers need not themselves be prime.`,
  },
  {
    id: `math-1-90`,
    case_id: `MATH 1.90`,
    title: `A subscription renewal and refund policy`,
    subsection: `1.4`,
    context: `A policy: “If a subscriber cancels at least 3 days before the renewal date, the subscription does not renew and no charge applies. If a subscriber cancels fewer than 3 days before the renewal date, the subscription still renews, but a partial refund is issued afterward if and only if the subscriber had used less than 10% of the service during that period.” Subscriber K cancelled 2 days before the renewal date and had used 15% of the service that period.`,
    statements: [
      `Subscriber K's subscription renews (K is charged for the next period).`,
      `Subscriber K receives a partial refund.`,
      `If K had used only 5% of the service instead, K would have received a partial refund.`,
      `If K had cancelled 4 days before the renewal date instead of 2, the subscription would not have renewed, and the 15% usage figure would then be irrelevant to any refund consideration.`,
      `The refund condition (usage below 10%) applies regardless of how many days before the renewal date the subscriber cancels.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

Apply the policy by cases on cancellation timing. K has $d=2$, so the early-cancellation test fails:

$$d=2<3$$

Therefore K enters the late branch, whose first consequence is

$$d<3\\quad\\Longrightarrow\\quad
\\text{renewal and charge}$$

The $15\\%$ usage affects only whether a refund follows; it does not undo renewal. K’s subscription renews,.

So the statement is True.`

      `**B.** → False

K cancelled $2$ days out, so the late branch applies. A partial refund is issued if and only if $u < 10\\%$. K used $15\\%$, and

$$15 < 10$$

fails. The biconditional withholds the refund.

Set beside the claim, the computed result is

$$15 < 10$$

which is not what the statement asserts.

So the statement is False.`

      `**C.** → True

K still cancelled $2$ days out, so the late branch still applies. Change only the usage to $5\\%$. Then

$$5 < 10$$

holds, so the refund side of the biconditional opens.

Set beside the claim, the computed result is

$$5 < 10$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → True

This counterfactual changes the branch selector to $d=4$. Since

$$4\\ge3,$$

the early-cancellation rule applies directly:

$$d\\ge3
\\quad\\Longrightarrow\\quad
\\text{no renewal and no charge}$$

The usage test $u<10\\%$ belongs only to the late branch $d<3$, so $u=15\\%$ is not consulted here. The stated counterfactual outcome follows,.

So the statement is True.`

      `**E.** → False

Refute “regardless of timing” with one branch counterexample. Let a subscriber cancel $4$ days before renewal and use $15\\%$ of the service. Then

$$d=4\\ge3$$

so the early branch settles the case as no renewal and no charge. The refund biconditional

$$\\text{refund}\\Leftrightarrow u<10\\%$$

is nested only under $d<3$ and is never evaluated for this subscriber. The usage condition is not timing-independent,.

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 12,
    solution_overview: `Let $d$ be the number of days between cancelling and the renewal date, and $u$ the share of the service used.

If $d \\ge 3$: no renewal and no charge. Usage is not consulted.

If $d < 3$: the subscription renews, and a partial refund is issued if and only if $u < 10\\%$.

Subscriber K cancelled $2$ days before renewal and used $15\\%$.`,
  },
  {
    id: `math-1-91`,
    case_id: `MATH 1.91`,
    title: `Negation and Violation of a Fever-Antibiotics Guideline`,
    subsection: `1.4`,
    context: `A clinical guideline states: "If a patient has a fever above 38°C, then antibiotics are prescribed."`,
    statements: [
      `The negation of the guideline is: "A patient has a fever above 38°C and is not prescribed antibiotics." If observed, this would show the guideline was violated.`,
      `A patient with a temperature of exactly 38.0°C who is not prescribed antibiotics is a valid counterexample to the guideline.`,
      `The inverse, "If a patient's fever is not above 38°C, they are not prescribed antibiotics," could be false in practice - e.g. a patient with a bacterial infection and only 37.5°C fever might still receive antibiotics.`,
      `The converse, "If a patient is prescribed antibiotics, their fever is above 38°C," is logically guaranteed by the original guideline.`,
      `A proof by contradiction of "not every patient prescribed antibiotics has a fever above 38°C" would begin by assuming the opposite - that every such patient DOES have a fever above 38°C - and then exhibit a real case (like the one in part c) that violates that assumption.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

Treat the guideline as universal over patients. Negating the implication produces an existential counterexample:

$$\\neg\\forall x\\,(P(x)\\Rightarrow Q(x))
\\equiv
\\exists x\\,(P(x)\\land\\neg Q(x))$$

For example, a patient $a$ with temperature $39^{\\circ}\\mathrm{C}$ and no antibiotic prescription would satisfy

$$39>38,
\\qquad
P(a)=\\mathrm{T},
\\qquad
Q(a)=\\mathrm{F}$$

Such a patient would witness exactly the quoted negation and violate the guideline,.

So the statement is True.`

      `**B.** → False

A counterexample needs $P$ true and $Q$ false. Compare $38.0$ with the recovered threshold:

$$38.0 > 38$$

is false, so $P$ is false. When $P$ is false the implication is idle and makes no demand about antibiotics. A missing prescription at $38.0$ is compatible with the guideline,

So the statement is False.`

      `**C.** → True

The inverse is $\\neg P \\Rightarrow \\neg Q$. A patient at $37.5^{\\circ}\\mathrm{C}$ with a bacterial infection who still receives antibiotics has $\\neg P$ true and $\\neg Q$ false. That is the unique failure row of the inverse. One such file shows the inverse can be false in practice,

So the statement is True.`

      `**D.** → False

The converse is $Q \\Rightarrow P$. The guideline is $P \\Rightarrow Q$, which points the other way. A patient at $37.5^{\\circ}\\mathrm{C}$ who receives antibiotics has $Q$ true and $P$ false, so $Q \\Rightarrow P$ fails. The original is silent on that file because $P$ never fired. The converse is not guaranteed,

So the statement is False.`

      `**E.** → True

The target is that not every patient prescribed antibiotics has a fever above $38^{\\circ}\\mathrm{C}$. A proof by contradiction of that denial opens by assuming the opposite: every such patient does have a fever above $38^{\\circ}\\mathrm{C}$. A $37.5^{\\circ}\\mathrm{C}$ patient who still receives antibiotics has $Q$ true and $P$ false, so that assumption cannot stand. The opening described is the legal first line,

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 13,
    solution_overview: `Write $P$ for a fever strictly above $38^{\\circ}\\mathrm{C}$ and $Q$ for antibiotics prescribed. The guideline is

$$P \\Rightarrow Q$$

An implication fails only on $P \\land \\neg Q$. The inverse is $\\neg P \\Rightarrow \\neg Q$. The converse is $Q \\Rightarrow P$. The test "above $38$" is a strict inequality, so a reading of exactly $38.0$ makes $P$ false.`,
  },
  {
    id: `math-1-92`,
    case_id: `MATH 1.92`,
    title: `A Weak Password That Meets a Length-Only Security Rule`,
    subsection: `1.4`,
    context: `A security policy claims: "If a password is at least 12 characters, it is classified as strong." The password "aaaaaaaaaaaa" has 12 identical letters and is not classified as strong because of its low complexity.`,
    statements: [
      `The password "aaaaaaaaaaaa" is a genuine counterexample showing that the policy is false as an absolute rule.`,
      `The converse, "If a password is strong, it is at least 12 characters," is a logically separate claim whose truth must be checked independently of the original.`,
      `An 8-character, highly randomized password not classified as strong under this system directly disproves the converse.`,
      `The inverse, "If a password is under 12 characters, it is not strong," is logically equivalent to the contrapositive - so its truth cannot be inferred from the converse.`,
      `Since the contrapositive of a false statement can sometimes still be true, we cannot determine whether "If a password is not strong, it is under 12 characters" is true or false without checking it separately from the original policy.`,
    ],
    answer_key: [true, true, false, false, false],
    tactical_explanations: [
      `**A.** → True

Invalidity of a universal implication is shown by one input with true antecedent and false consequent. For the given password $w=$ “aaaaaaaaaaaa,”

$$|w|=12
\\quad\\Longrightarrow\\quad
P(w)=\\mathrm{T}$$

but the system rejects it for low complexity, so $Q(w)=\\mathrm{F}$. Therefore

$$P(w)\\Rightarrow Q(w)
=
\\mathrm{T}\\Rightarrow\\mathrm{F}
=\\mathrm{F}$$

This concrete password is a counterexample to the absolute policy,.

So the statement is True.`

      `**B.** → True

The converse is $Q \\Rightarrow P$: if a password is classified as strong, then it is at least $12$ characters. That sentence lives with the inverse, not with the original. The twelve-a string has $Q$ false, so it never enters the converse's hypothesis. Collapse of $P \\Rightarrow Q$ does not settle $Q \\Rightarrow P$,

So the statement is True.`

      `**C.** → False

The converse $Q \\Rightarrow P$ asks something only when $Q$ is true. An $8$-character randomized password that is not classified as strong has $P$ false and $Q$ false, so the converse holds vacuously and learns nothing. The file that would refute $Q \\Rightarrow P$ is a password classified as strong and shorter than $12$. This rejected password is not that file,

So the statement is False.`

      `**D.** → False

The inverse is $\\neg P \\Rightarrow \\neg Q$. The contrapositive of the original is $\\neg Q \\Rightarrow \\neg P$. Those arrows run opposite ways. The inverse is equivalent to the converse $Q \\Rightarrow P$, not to the contrapositive. Its truth can therefore be read off the converse,

So the statement is False.`

      `**E.** → False

"If a password is not strong, it is under $12$ characters" is $\\neg Q \\Rightarrow \\neg P$, the contrapositive of the policy. A contrapositive always shares the original's truth value. The policy is false, witnessed by "aaaaaaaaaaaa": length $12$ so $P$ is true, not classified as strong so $Q$ is false. The same password shows the contrapositive false: not strong, yet length $12$. No separate check is needed,

So the statement is False.`
    ],
    difficulty_level: `2/5`,
    sort_order: 14,
    solution_overview: `Write $P$ for a password of length at least $12$ and $Q$ for the password being classified as strong. The policy claims $P \\Rightarrow Q$ for every password.

The original pairs with the contrapositive $\\neg Q \\Rightarrow \\neg P$. The converse $Q \\Rightarrow P$ pairs with the inverse $\\neg P \\Rightarrow \\neg Q$.

The password "aaaaaaaaaaaa" has length $12$ and is not classified as strong.`,
  },
  {
    id: `math-1-93`,
    case_id: `MATH 1.93`,
    title: `Factory batch inspection`,
    subsection: `1.4`,
    context: `A factory manager claims: "All 500 microchips in Batch 12 pass the stress test." During inspection, chip #317 in Batch 12 is found to have failed the stress test. Separately, Batch 13 was cancelled before production began, so it contains zero chips.`,
    statements: [
      `The manager's claim about Batch 12 is false.`,
      `The correct negation of the manager's claim is: "All chips in Batch 12 fail the stress test."`,
      `The statement "All chips in Batch 13 pass the stress test" is vacuously true.`,
      `"For every chip that failed, there exists a defect code explaining that specific failure" means exactly the same thing as "There exists a single defect code that explains every chip that failed."`,
      `The fact that chip #317 failed is, by itself, enough to prove that "some chip in Batch 12 failed" is true.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The manager’s claim is universal, so one counterexample is decisive. Let $A(x)$ mean that chip $x$ passes. Inspection gives the explicit value

$$x=317,
\\qquad
A(317)=\\mathrm{F}$$

Because chip #$317$ belongs to Batch $12$,

$$\\exists x\\in\\text{Batch 12}\\,\\neg A(x)$$

is true, which falsifies $\\forall x\\in\\text{Batch 12}\\,A(x)$. The other $499$ chips cannot repair a failed universal,.

So the statement is True.`

      `**B.** → False

The manager's claim is $\\forall x\\, A(x)$ on Batch $12$. Negating a universal produces an existential:

$$\\neg \\forall x\\, A(x) \\equiv \\exists x\\, \\neg A(x)$$

In words: at least one chip fails. The quoted sentence "all chips fail" is $\\forall x\\, \\neg A(x)$, which needs all $500$ failures. Chip #$317$ already witnesses the existential without a clean sweep,.

So the statement is False.`

      `**C.** → True

Use vacuous truth. The universal can fail only if there is a counterexample chip in Batch $13$:

$$\\neg\\forall x\\,
\\bigl(B_{13}(x)\\Rightarrow A(x)\\bigr)
\\equiv
\\exists x\\,
\\bigl(B_{13}(x)\\land\\neg A(x)\\bigr)$$

But Batch $13$ contains zero chips, so there is no value $x$ with $B_{13}(x)=\\mathrm{T}$. No counterexample witness exists, and the universal is therefore vacuously true,.

So the statement is True.`

      `**D.** → False

Quantifier order determines whether the defect code may depend on the failed chip. The first sentence is

$$\\forall f\\,\\exists c\\,E(c,f)$$

The second sentence is

$$\\exists c\\,\\forall f\\,E(c,f)$$

With two failures $f_1,f_2$, code $c_1$ may explain only $f_1$ and code $c_2$ only $f_2$. Then the first formula is true, but no single code serves both failures, so the second is false. The sentences are not equivalent,.

So the statement is False.`

      `**E.** → True

An existential claim is established by one witness. Choose the reported chip:

$$x=317$$

It has both required properties:

$$B_{12}(317)=\\mathrm{T},
\\qquad
\\neg A(317)=\\mathrm{T}$$

Hence $317$ witnesses $\\exists x\\,(B_{12}(x)\\land\\neg A(x))$. No information about the remaining chips is needed,.

So the statement is True.`
    ],
    difficulty_level: `2/5`,
    sort_order: 15,
    solution_overview: `The manager's sentence is a universal: every chip in Batch $12$ passes. Chip #$317$ in Batch $12$ failed the stress test.

Write $A(x)$ for chip $x$ passing the stress test. Negating $\\forall x\\, A(x)$ yields $\\exists x\\, \\neg A(x)$, not $\\forall x\\, \\neg A(x)$. Batch $13$ contains zero chips.

$\\forall f\\, \\exists c$ lets a defect code depend on the chip. $\\exists c\\, \\forall f$ freezes one code for every failure.`,
  },
  {
    id: `math-1-94`,
    case_id: `MATH 1.94`,
    title: `Divisibility by Six Versus Divisibility by Three`,
    subsection: `1.4`,
    context: `In number theory: "If n is divisible by 6, then n is divisible by 3."`,
    statements: [
      `The negation, "n is divisible by 6 and n is not divisible by 3," describes a situation that occurs for infinitely many integers n.`,
      `The converse, "If n is divisible by 3, then n is divisible by 6," is false - n = 9 is a counterexample (divisible by 3, not by 6).`,
      `The inverse, "If n is not divisible by 6, then n is not divisible by 3," is logically equivalent to the converse, so it is also false, with n = 9 again serving as its counterexample.`,
      `The contrapositive, "If n is not divisible by 3, then n is not divisible by 6," is false for some integers n.`,
      `Since the converse is false, the original statement "n divisible by $6 \\Rightarrow n$ divisible by 3" must also be false.`,
    ],
    answer_key: [false, true, true, false, false],
    tactical_explanations: [
      `**A.** → False

The proposed negation would need a witness with $6\\mid n$ and $3\\nmid n$. For an arbitrary integer satisfying the first condition,

$$6\\mid n
\\quad\\Longrightarrow\\quad
n=6k=3(2k)
\\quad\\Longrightarrow\\quad
3\\mid n$$

Thus $6\\mid n$ always forces the opposite of $3\\nmid n$. There is not even one witness to $6\\mid n\\land3\\nmid n$, much less infinitely many,.

So the statement is False.`

      `**B.** → True

The converse is $3 \\mid n \\Rightarrow 6 \\mid n$. Test $n = 9$:

$$9 = 3 \\times 3$$

so $3$ divides $9$. Next

$$9 = 6 \\times 1 + 3$$

so $6$ does not divide $9$. Hypothesis true and conclusion false: $9$ is a counterexample,.

Set beside the claim, the computed result is

$$9 = 6 \\times 1 + 3$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → True

The inverse is $6 \\nmid n \\Rightarrow 3 \\nmid n$. Inverse and converse share a truth value. Test $n = 9$ against the inverse: $6 \\nmid 9$ holds by the remainder $3$, while $3 \\nmid 9$ fails because $9 = 3 \\times 3$. True hypothesis and false conclusion: the inverse fails at $9$ with the converse,

So the statement is True.`

      `**D.** → False

Prove the contrapositive for an arbitrary integer. Assume $3\\nmid n$. If $6\\mid n$ also held, then for some integer $k$,

$$n=6k=3(2k),$$

which would give $3\\mid n$, contradicting the assumption. Therefore

$$3\\nmid n\\quad\\Longrightarrow\\quad6\\nmid n$$

for every integer $n$. No counterexample value exists, so the claim that the contrapositive is false for some integer is wrong,.

So the statement is False.`

      `**E.** → False

The original $6 \\mid n \\Rightarrow 3 \\mid n$ holds for every integer. The converse $3 \\mid n \\Rightarrow 6 \\mid n$ is a different implication, already refuted by $n = 9$. At $n = 9$ the original has a false hypothesis, so it holds vacuously, while the converse fails. Falsity of the converse does not leak into the original,

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `The original statement is $6 \\mid n \\Rightarrow 3 \\mid n$. If $6 \\mid n$, write

$$n = 6k = 3(2k)$$

so $3 \\mid n$ automatically.

The converse is $3 \\mid n \\Rightarrow 6 \\mid n$. The inverse is $6 \\nmid n \\Rightarrow 3 \\nmid n$. The contrapositive is $3 \\nmid n \\Rightarrow 6 \\nmid n$. Original pairs with contrapositive. Converse pairs with inverse.`,
  },
  {
    id: `math-1-95`,
    case_id: `MATH 1.95`,
    title: `ID number verification rule`,
    subsection: `1.4`,
    context: `A system rule states: if the square of an ID number is even, then the ID number itself is even. A verifier is checking two IDs: 1234 and 4321. Note that 1234^2 = 1,522,756 (even) and 4321^2 = 18,671,041 (odd).`,
    statements: [
      `Since $1234^2$ is even, the rule guarantees that 1234 itself is even - which is indeed true.`,
      `To prove the rule by contraposition, one should assume the ID number is even and derive that its square is even.`,
      `Since $4321^2$ is odd, the contrapositive form of the rule guarantees that 4321 itself is odd - which is indeed true.`,
      `The rule ("if $n^2$ is even, then n is even") and its converse ("if n is even, then $n^2$ is even") are logically the same statement.`,
      `A proof of this rule by contradiction would begin by assuming that $n^2$ is even AND n is odd, then deriving a contradiction from that assumption.`,
    ],
    answer_key: [true, false, true, false, true],
    tactical_explanations: [
      `**A.** → True

The given square $1234^{2} = 1{,}522{,}756$ is even. Rule $R$ says an even square implies an even ID, so $1234$ is even. Direct check:

$$1234 = 2 \\times 617$$

Hypothesis true and conclusion true. The rule applies in the stated direction,

So the statement is True.`

      `**B.** → False

Write $E(k)$ for “$k$ is even.” The rule and its contrapositive are

$$E(n^{2})\\Rightarrow E(n),
\\qquad
\\neg E(n)\\Rightarrow\\neg E(n^{2})$$

Thus a contraposition proof assumes $n$ is odd and derives that $n^{2}$ is odd. The proposed plan instead proves

$$E(n)\\Rightarrow E(n^{2}),$$

which reverses the original arrow and is its converse. It is not a proof by contraposition of the stated rule,.

So the statement is False.`

      `**C.** → True

The given square $4321^{2} = 18{,}671{,}041$ is odd. An odd square forces an odd ID. Direct check:

$$4321 = 2 \\times 2160 + 1$$

so $4321$ is odd. Hypothesis true and conclusion true.

Set beside the claim, the computed result is

$$4321 = 2 \\times 2160 + 1$$

which is exactly what the statement asserts.

So the statement is True.`

      `**D.** → False

Let $P$ mean “$n^{2}$ is even” and $Q$ mean “$n$ is even.” The two formulas reverse the arrow:

$$R:P\\Rightarrow Q,
\\qquad
C:Q\\Rightarrow P$$

Implication and converse are not logically equivalent forms; for the truth assignment $P=\\mathrm{F}$ and $Q=\\mathrm{T}$,

$$P\\Rightarrow Q=\\mathrm{T},
\\qquad
Q\\Rightarrow P=\\mathrm{F}$$

For integer parity, separate arithmetic proofs happen to make both directions true, but that does not make the formulas logically identical,.

So the statement is False.`

      `**E.** → True

An implication $R$ fails only on $n^{2}$ even and $n$ odd. A contradiction proof of $R$ therefore assumes exactly that pair, then derives an impossibility. From $n = 2k+1$,

$$n^{2} = 4k^{2} + 4k + 1$$

which is odd, colliding with the assumption that $n^{2}$ is even. The opening the claim describes is the legal one,.

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `The rule $R$ is: if $n^{2}$ is even, then $n$ is even. The converse $C$ is: if $n$ is even, then $n^{2}$ is even.

Contraposition of $R$ starts from $n$ odd and derives that $n^{2}$ is odd. A contradiction proof of $R$ assumes $n^{2}$ even and $n$ odd.

Given: $1234^{2} = 1{,}522{,}756$ (even) and $4321^{2} = 18{,}671{,}041$ (odd).`,
  },
  {
    id: `math-1-96`,
    case_id: `MATH 1.96`,
    title: `Negating Thales' Theorem About Right Angles in a Semicircle`,
    subsection: `1.4`,
    context: `Thales' theorem gives the universal statement: "Every triangle inscribed in a semicircle, with the diameter as one side, has a right angle at the third vertex."`,
    statements: [
      `The negation of this universal claim is: "There exists such a triangle without a right angle."`,
      `Since Thales' theorem proves the original statement true, the negation formed above must be a false statement.`,
      `The converse, "If a triangle has a right angle, it can be inscribed in a semicircle with its hypotenuse as the diameter," is also a true geometric fact.`,
      `Because both the original statement and its converse are true here, this is an example where the implication is effectively a biconditional, even though converses are not true in general.`,
      `Since the original statement is true, the inverse must also be true, because the inverse and the original are always logically equivalent to each other.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Apply quantifier and implication negation:

$$\\neg\\forall t\\,(P(t)\\Rightarrow Q(t))
\\equiv
\\exists t\\,\\neg(P(t)\\Rightarrow Q(t))
\\equiv
\\exists t\\,(P(t)\\land\\neg Q(t))$$

A hypothetical witness $t_0$ would have to be inscribed with a diameter as one side, $P(t_0)=\\mathrm{T}$, while lacking a right angle, $Q(t_0)=\\mathrm{F}$. That is exactly “there exists such a triangle without a right angle,”.

So the statement is True.`

      `**B.** → True

Thales’ theorem proves the universal statement

$$\\forall t\\,(P(t)\\Rightarrow Q(t))=\\mathrm{T}$$

Its negation is the counterexample claim

$$\\exists t\\,(P(t)\\land\\neg Q(t))$$

If that existential had a witness, the witness would falsify the proved universal. Since no such witness can coexist with the theorem, the negation is false. The claim correctly reports that truth value,.

So the statement is True.`

      `**C.** → True

Start with an arbitrary right triangle, hypotenuse $AB$, right angle at $C$. Let $M$ be the midpoint of $AB$. Then $MA = MB$ by construction, and $MC = MA$ as well. The circle centred at $M$ with radius $MA$ passes through $A$, $B$, and $C$, and $AB$ is a diameter. Every right triangle can be inscribed that way, so the converse holds,

So the statement is True.`

      `**D.** → True

Thales’ theorem proves the forward implication, while the circumcircle construction for a right triangle proves the converse:

$$P\\Rightarrow Q,
\\qquad
Q\\Rightarrow P$$

A biconditional is exactly the conjunction of those two directions:

$$P\\Leftrightarrow Q
\\equiv
(P\\Rightarrow Q)\\land(Q\\Rightarrow P)$$

Both arrows have independent geometric proofs here. Therefore this particular relationship is a biconditional,.

So the statement is True.`

      `**E.** → False

The original and inverse are

$$P\\Rightarrow Q,
\\qquad
\\neg P\\Rightarrow\\neg Q$$

They are not logically equivalent. A concrete truth assignment demonstrates the mismatch:

$$P=\\mathrm{F},\\quad Q=\\mathrm{T}
\\quad\\Longrightarrow\\quad
P\\Rightarrow Q=\\mathrm{T},
\\quad
\\neg P\\Rightarrow\\neg Q=\\mathrm{F}$$

The original is equivalent to $\\neg Q\\Rightarrow\\neg P$, its contrapositive; the inverse is equivalent to the converse. The stated reason for transferring truth is invalid,.

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 18,
    solution_overview: `Write $P(t)$ for a triangle inscribed in a semicircle with the diameter as one side, and $Q(t)$ for a right angle at the third vertex. Thales' theorem is

$$\\forall t\\,(P(t) \\Rightarrow Q(t))$$

The negation is $\\exists t\\,(P(t) \\land \\neg Q(t))$. The converse is $Q \\Rightarrow P$. The inverse $\\neg P \\Rightarrow \\neg Q$ pairs with the converse, not with the original.`,
  },
  {
    id: `math-1-97`,
    case_id: `MATH 1.97`,
    title: `A number-theory theorem states : "If a number is a perfect square, the`,
    subsection: `1.4`,
    context: `A number-theory theorem states: "If a number is a perfect square, then it has an odd number of positive divisors."`,
    statements: [
      `The correctly formed negation of the theorem is: "A number is a perfect square and it has an even number of divisors."`,
      `36 is a perfect square with divisors $\\{1,2,3,4,6,9,12,18,36\\}$ - 9 divisors (odd), which is consistent with the theorem and not a counterexample to it.`,
      `The converse, "If a number has an odd number of divisors, then it is a perfect square," is also a true statement, so both directions of the implication hold here.`,
      `Since 20 is not a perfect square and has divisors $\\{1,2,4,5,10,20\\} (6$ divisors, even), 20 is a valid counterexample disproving the original theorem.`,
      `The inverse, "If a number is not a perfect square, it has an even number of divisors," is also true in this case, since the converse is true.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Treat the theorem as universal over positive integers. Negate the quantifier and implication:

$$\\neg\\forall n\\,(S(n)\\Rightarrow O(n))
\\equiv
\\exists n\\,(S(n)\\land\\neg O(n))$$

Because a finite divisor count is either odd or even, $\\neg O(n)$ means an even number of divisors. Thus a counterexample witness would have to be a perfect square with an even divisor count. The quoted sentence has exactly that logical form,.

So the statement is True.`

      `**B.** → True

$36$ is $6^{2}$, so the hypothesis holds. The listed divisors are

$$\\{1,2,3,4,6,9,12,18,36\\}$$

nine numbers, and nine is odd. Hypothesis true and conclusion true: $36$ supports the theorem and is not a counterexample.

Set beside the claim, the computed result is

$$\\{1,2,3,4,6,9,12,18,36\\}$$

which is exactly what the statement asserts.

So the statement is True.`

      `**C.** → True

If the divisor count is odd, a leftover self-partner must exist, so $d^{2} = n$ and $n$ is a square. That is the converse: odd count $\\Rightarrow$ square. Sample $36$ has nine divisors and is a square. Sample $20$ has six divisors and is not a square. Both directions hold by the same pairing,

So the statement is True.`

      `**D.** → False

The theorem speaks only about perfect squares. $20$ sits between $4^{2} = 16$ and $5^{2} = 25$, so $20$ is not a square and the hypothesis $S$ is false. An implication with a false "if" is not refuted by $20$. A counterexample would need a square with an even divisor count,

So the statement is False.`

      `**E.** → True

The inverse is "not a square, therefore even divisor count," equivalent to the converse. With no leftover square-root partner, every divisor has a distinct mate and the count is even. Sample $20$ is not a square and has $6$ divisors, even. The inverse holds because the converse does,

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 19,
    solution_overview: `Divisors pair as $d$ with $n/d$. A divisor is its own partner only when $d^{2} = n$, that is when $n$ is a perfect square. So a square has an odd divisor count, and a non-square has an even count.

The theorem is $S \\Rightarrow O$: perfect square, therefore odd divisor count. The converse is odd count $\\Rightarrow$ square.

Sample $36 = 6^{2}$ with listed divisors $\\{1,2,3,4,6,9,12,18,36\\}$. Sample $20$ has listed divisors $\\{1,2,4,5,10,20\\}$.`,
  },
  {
    id: `math-1-98`,
    case_id: `MATH 1.98`,
    title: `Four friends and their jobs`,
    subsection: `1.4`,
    context: `Four friends - Emma, Felix, Grace, and Hugo - each have a different job: Doctor, Engineer, Teacher, or Lawyer.

(1) Emma is a doctor if and only if Felix is not an engineer.

(2) Felix is an engineer if and only if Grace is a teacher.

(3) Grace is not a teacher.

(4) Hugo is a lawyer.`,
    statements: [
      `Emma is a doctor.`,
      `Felix is a teacher, and this can be determined directly from clue (2) alone, without needing any other clues.`,
      `Grace is an engineer.`,
      `Clue (3) is redundant - the full job assignment could be determined without it.`,
      `If clue (4) were removed entirely, we could still determine that Emma is a doctor from clues (1)-(3) alone.`,
    ],
    answer_key: [true, false, true, true, true],
    tactical_explanations: [
      `**A.** → True

Use the biconditionals as equal-truth constraints. Clue (3) gives $\\neg G$. From clue (2), $F\\Leftrightarrow G$, so

$$\\neg G\\quad\\Longrightarrow\\quad\\neg F$$

Clue (1) is $E\\Leftrightarrow\\neg F$. Since $\\neg F$ is true,

$$\\neg F\\quad\\Longrightarrow\\quad E$$

Therefore Emma is the doctor,

So the statement is True.`

      `**B.** → False

Clue (2) alone says Felix is an engineer exactly when Grace is a teacher. Both sides are unset, so (2) names nobody. Even after (3) shuts Grace out of Teacher, (2) yields only that Felix is not the engineer. Pinning him to Teacher still needs Emma placed as doctor and Hugo placed as lawyer. A right job with a wrong reason fails,

So the statement is False.`

      `**C.** → True

First, clues (3), (2), and (1) force $\\neg G$, then $\\neg F$, then $E$: Emma is Doctor. Clue (4) makes Hugo Lawyer. The unused jobs for Felix and Grace are therefore

$$\\{\\text{Engineer},\\text{Teacher}\\}$$

But $\\neg F$ says Felix is not Engineer, so Felix must be Teacher. Because all four jobs are distinct, the remaining Engineer job goes to Grace,.

So the statement is True.`

      `**D.** → True

Drop clue (3) and try Grace as teacher. Then (2) makes Felix the engineer, so (1) makes $E$ false: Emma is not the doctor. Clue (4) already placed Hugo as lawyer, so the only leftover job for Emma is Doctor, contradicting $E$ false. Clues (1), (2), and (4) already forbid Grace-as-teacher, so clue (3) is redundant,

So the statement is True.`

      `**E.** → True

The chain to Emma used only (3), (2), and (1): Grace not teacher, therefore Felix not engineer, therefore Emma is the doctor. Clue (4) names Hugo as lawyer and is used only later to split Engineer from Teacher. Remove clue (4) and Emma is still the doctor,

So the statement is True.`
    ],
    difficulty_level: `3/5`,
    sort_order: 20,
    solution_overview: `**Part 1: Setup.**

Write $E$ for Emma being a doctor, $F$ for Felix being an engineer, $G$ for Grace being a teacher, and $H$ for Hugo being a lawyer. Four distinct jobs means each job is held by exactly one person. The clues are

$$(1)\\ E \\Leftrightarrow \\neg F, \\qquad (2)\\ F \\Leftrightarrow G$$

$$(3)\\ \\neg G, \\qquad (4)\\ H$$

A biconditional forces matching truth values.

**Part 2: Solve.**

From (3), $G$ is false, so (2) forces $F$ false. Then (1) forces $E$ true: Emma is the doctor. From (4), Hugo is the lawyer. The remaining jobs are Engineer and Teacher for Felix and Grace, and Felix is already barred from Engineer, so Felix is the teacher and Grace is the engineer.`,
  },
  {
    id: `math-1-99`,
    case_id: `MATH 1.99`,
    title: `A real-analysis theorem states : "If a sequence converges, then it is`,
    subsection: `1.4`,
    context: `A real-analysis theorem states: "If a sequence converges, then it is bounded."`,
    statements: [
      `The negation, "a sequence converges and is not bounded," describes an impossible situation, since the theorem holds for every sequence.`,
      `The converse, "If a sequence is bounded, then it converges," is false - the sequence (-1)ⁿ (that is, -1, 1, -1, 1,...) is bounded but does not converge, serving as a counterexample.`,
      `The inverse, "If a sequence does not converge, then it is not bounded," is logically equivalent to the converse, and is therefore also false, using the same sequence (-1)ⁿ as its counterexample.`,
      `The contrapositive, "If a sequence is not bounded, then it does not converge," is true, and is in fact the version most commonly used to prove specific unbounded sequences (like n, 2n, $n^2$) do not converge.`,
      `Because the converse is false, the original theorem itself must also be false.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

Write $C(s)$ for convergence and $B(s)$ for boundedness. Negating the universal theorem gives

$$\\neg\\forall s\\,(C(s)\\Rightarrow B(s))
\\equiv
\\exists s\\,(C(s)\\land\\neg B(s))$$

A witness would have to be one sequence that both converges and is unbounded. The theorem $C(s)\\Rightarrow B(s)$ rules out that combination for every sequence, so the described witness set is empty. The negation describes an impossible situation,.

So the statement is True.`

      `**B.** → True

The converse claims: bounded, therefore convergent. For $a_{n} = (-1)^{n}$ the terms are only $-1$ and $1$, so every term lies in $[-1,1]$ and the sequence is bounded. Odd terms stay at $-1$ and even terms stay at $1$, so no single limit exists. Bounded with no limit: the converse fails,

So the statement is True.`

      `**C.** → True

The inverse is $\\neg C\\Rightarrow\\neg B$, which is the contrapositive of the converse $B\\Rightarrow C$ and therefore shares its truth value. Use the explicit sequence

$$a_n=(-1)^n,
\\qquad
|a_n|=1\\le1$$

so it is bounded. Its even and odd subsequences have different constant values:

$$a_{2k}=1,
\\qquad
a_{2k+1}=-1$$

Thus it does not converge, making $\\neg C$ true and $\\neg B$ false. This sequence refutes the inverse as well as the converse,.

So the statement is True.`

      `**D.** → True

The contrapositive is "not bounded, therefore does not converge," equivalent to the proved theorem, hence true. For the sequences $n$, $2n$, and $n^{2}$, unboundedness is immediate, and the contrapositive then yields divergence. Both halves of the claim hold,

So the statement is True.`

      `**E.** → False

The theorem $P \\Rightarrow Q$ sits with its contrapositive. The converse $Q \\Rightarrow P$ sits with the inverse. Feed $(-1)^{n}$ to the original: the sequence does not converge, so $P$ is false and $P \\Rightarrow Q$ holds vacuously. The same sequence kills the converse. Falsity of the converse does not touch the theorem,

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 21,
    solution_overview: `The theorem is $P \\Rightarrow Q$: a sequence converges, therefore it is bounded.

The converse is $Q \\Rightarrow P$. The inverse is $\\neg P \\Rightarrow \\neg Q$. The contrapositive is $\\neg Q \\Rightarrow \\neg P$. Original pairs with contrapositive. Converse pairs with inverse.`,
  },
  {
    id: `math-1-100`,
    case_id: `MATH 1.100`,
    title: `Three inhabitants of the island`,
    subsection: `1.4`,
    context: `On the same island (truth-tellers always tell the truth, liars always lie), three inhabitants speak. J says: “Exactly one of us is a truth-teller.” K says: “J is lying.” L says: “K and I are the same type (both truth-tellers or both liars).”`,
    statements: [
      `J is a liar.`,
      `K is a truth-teller.`,
      `L is a truth-teller.`,
      `Exactly one of the three inhabitants is a truth-teller.`,
      `There is another consistent assignment of types (besides the one found) that also satisfies all three statements.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

The claim says J is a liar. Test the opposite by assuming J is a truth-teller. J's sentence must then be true, so exactly one of the three is a truth-teller. Since J already fills that one place, K and L must both be liars:

$$J=\\text{true},\\qquad K=L=\\text{false}$$

K's sentence "J is lying" is false, which fits K being a liar. But L says that K and L are the same type. Under this assignment they are both liars, so L's sentence is true. A liar cannot make a true statement, and the J-truthful case fails.

Therefore J cannot be a truth-teller and must be a liar,.

So the statement is True.`

      `**B.** → True

The claim says K is a truth-teller. From letter A, J is already forced to be a liar. K's sentence is precisely "J is lying," so its content is true:

$$\\neg J\\quad\\Rightarrow\\quad \\text{K's sentence is true}$$

An islander's type must match the truth value of the sentence spoken. K therefore cannot be a liar while making this true accusation. K is a truth-teller,.

So the statement is True.`

      `**C.** → True

The claim says L is a truth-teller. The shared forcing has J as a liar and K as a truth-teller. Try making L a liar as well:

$$J=\\text{false},\\qquad K=\\text{true},\\qquad L=\\text{false}$$

Then K would be the only truth-teller. That makes J's sentence, "Exactly one of us is a truth-teller," true. But J is already forced to be a liar, so this case is impossible.

The only alternative is $L=\\text{true}$. With K and L both truth-tellers, L's "same type" sentence is indeed true,.

So the statement is True.`

      `**D.** → False

The claim requires the final assignment to contain exactly one truth-teller. J is forced to be a liar, and K's true accusation then forces K to be a truth-teller. If L were a liar, K alone would be the one truth-teller:

$$J=0,\\qquad K=1,\\qquad L=0$$

That would make J's "exactly one" sentence true, contradicting J's liar type. Thus L must also be a truth-teller. The actual count is

$$0+1+1=2,$$

not one,.

So the statement is False.`

      `**E.** → False

The claim needs a second assignment, so split first on J's type. If J is truthful, J's sentence makes K and L liars, but then L truthfully says that K and L are the same type. That branch fails.

If J is a liar, K's accusation "J is lying" is true, so K must be truthful. Now split on L. If L is a liar, K is the unique truth-teller, which makes J's sentence true and breaks J's liar type. Hence L must be truthful:

$$J=\\text{liar},\\qquad K=L=\\text{truth-teller}$$

In this assignment J's sentence is false, K's is true, and L's is true, so it survives. Every alternative case has failed, leaving no second assignment,.

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 22,
    solution_overview: `**Part 1: Setup.**

Each islander's type must match the accuracy of what they say. Write $J$, $K$, and $L$ for being a truth-teller. J claims that exactly one of the three is a truth-teller. K claims that J is lying. L claims that $K$ and $L$ have the same type.

K's sentence is true exactly when J lies, so $J$ and $K$ have opposite types.

**Part 2: Solve.**

If $J$ is true, then exactly one truth-teller exists, namely J, so $K$ and $L$ are both false. Then L's "same type" sentence is true, which a liar cannot say. So $J$ is false.

Then K's accusation is true, so $K$ is true. If $L$ were false, $K$ would be the sole truth-teller and J's sentence would be true, which a liar cannot say. So $L$ is true.

The unique assignment is $J$ false, $K$ true, $L$ true: J a liar, K and L truth-tellers.`,
  },
  {
    id: `math-1-101`,
    case_id: `MATH 1.101`,
    title: `Conference attendance rules`,
    subsection: `1.4`,
    context: `Four colleagues - Ana, Boris, Ceci, Dmitri - are deciding whether to attend a conference.

(1) If Ana attends, then Boris does not attend.

(2) If Boris does not attend, then Ceci attends.

(3) If Ceci attends, then Dmitri does not attend - unless Ana also attends, in which case Dmitri's attendance is unrestricted.

(4) Dmitri attends.`,
    statements: [
      `Dmitri attends the conference.`,
      `The rules uniquely determine whether Ana attends.`,
      `In at least one solution consistent with the rules, exactly three of the four colleagues attend.`,
      `It is possible for both Ana and Boris to not attend simultaneously.`,
      `Without rule (3)'s “unless” exception (i.e. if Ceci attending always forced Dmitri not to attend, no exceptions), the rules would become impossible to satisfy at all given that Dmitri attends.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The claim says Dmitri attends. Rule (4) states this directly:

$$(4)\\qquad D$$

The other rules can restrict Ana, Boris, and Ceci, but none can cancel an explicit fact. For example, $\\{A,C,D\\}$ obeys (1) and (2), and Ana's presence activates the exception in (3), so rule (4) is consistent with the system. Dmitri is in every solution,.

So the statement is True.`

      `**B.** → False

The claim says the rules force one truth value for Ana. Test both values.

If $A$ is true, rule (1) gives $\\neg B$, and rule (2) then gives $C$:

$$A\\Rightarrow\\neg B\\Rightarrow C$$

Rule (4) gives $D$. Because Ana attends, the exception in rule (3) applies, so Ceci and Dmitri may attend together. Thus $\\{A,C,D\\}$ is legal.

If $A$ is false, choose $B$ true and $C$ false. Rules (1) and (2) are idle, rule (3) has false hypothesis $C\\land\\neg A$, and rule (4) gives $D$. Thus $\\{B,D\\}$ is also legal. Ana is in one valid roster and out of another,.

So the statement is False.`

      `**C.** → True

The claim only needs one valid roster with exactly three attendees. Start with Ana attending. Rule (1) forces Boris out, and then rule (2) forces Ceci in:

$$A\\Rightarrow\\neg B\\Rightarrow C$$

Rule (4) puts Dmitri in. Rule (3) normally acts when $C\\land\\neg A$ holds, but here $A$ is true, so its "unless Ana attends" exception leaves Dmitri unrestricted. The roster is

$$\\{A,C,D\\},\\qquad |\\{A,C,D\\}|=3.$$

This is a legal witness for the existence claim,.

So the statement is True.`

      `**D.** → False

The claim requires a solution with both Ana and Boris absent. Assume

$$\\neg A\\land\\neg B.$$

Rule (2) turns $\\neg B$ into $C$. Since Ana is absent, the exception in rule (3) is unavailable, so $C\\land\\neg A$ forces Dmitri out:

$$\\neg B\\overset{(2)}{\\Rightarrow}C,\\qquad
C\\land\\neg A\\overset{(3)}{\\Rightarrow}\\neg D.$$

But rule (4) requires $D$. The attempted assignment forces both $D$ and $\\neg D$, so Ana and Boris cannot both be absent,.

So the statement is False.`

      `**E.** → False

The claim says replacing rule (3) by the stricter implication would destroy every solution:

$$(3')\\qquad C\\Rightarrow\\neg D.$$

Rule (4) still gives $D$, so the contrapose of (3') forces $\\neg C$. The contrapose of rule (2), $\\neg C\\Rightarrow B$, then puts Boris in. Choose Ana out:

$$\\neg A,\\qquad B,\\qquad\\neg C,\\qquad D.$$

This is the roster $\\{B,D\\}$. Rule (1) is idle because Ana is out, rule (2) is idle because Boris is in, (3') is idle because Ceci is out, and (4) holds. At least one solution survives the stricter rule,.

So the statement is False.`
    ],
    difficulty_level: `3/5`,
    sort_order: 23,
    solution_overview: `**Part 1: Setup.**

Write $A,B,C,D$ for Ana, Boris, Ceci, Dmitri attending. The stem is

$$(1)\\ A\\Rightarrow\\neg B,\\qquad (2)\\ \\neg B\\Rightarrow C,\\qquad (4)\\ D.$$

Rule (3) is $C\\Rightarrow\\neg D$ except when Ana already attends, so

$$(3)\\ (C\\land\\neg A)\\Rightarrow\\neg D.$$

An implication whose hypothesis is false is idle. The contrapose of $P\\Rightarrow Q$ is $\\neg Q\\Rightarrow\\neg P$.

**Part 2: Solve.**

Rule (4) puts $D$ in every roster. Split on Ana.

If $A$ holds, (1) gives $\\neg B$ and (2) then gives $C$. Rule (3) is idle because $A$ is true, so $D$ may stay. The roster is $\\{A,C,D\\}$.

If $\\neg A$ holds, (3) with $D$ true forces $\\neg C$. The contrapose of (2) then forces $B$. The roster is $\\{B,D\\}$.

Both cases survive.`,
  },
  {
    id: `math-1-102`,
    case_id: `MATH 1.102`,
    title: `A Study Group's Attendance`,
    subsection: `1.4`,
    context: `Four students - Noah, Maria, Leo, and Zoe - are deciding whether to join a study session. Their attendance follows these rules:

1. If Noah joins, then Maria joins.

2. Leo joins only if Zoe joins.

3. At least one of Maria or Leo joins.

4. If Zoe joins, then Noah does not join.`,
    statements: [
      `If Noah joins, then Zoe does not join.`,
      `Leo and Noah can join the study session together.`,
      `It is possible that Maria joins but Leo does not.`,
      `If Maria does not join, then Noah does not join.`,
      `Zoe must join the study session.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The claim asks what follows if Noah joins. Rule (4) says that Zoe joining forces Noah out:

$$(4)\\qquad Z\\Rightarrow\\neg N.$$

Take its contrapositive by negating and reversing both sides:

$$\\neg(\\neg N)\\Rightarrow\\neg Z,$$

so

$$N\\Rightarrow\\neg Z.$$

Thus any roster with Noah must omit Zoe, exactly as claimed,.

So the statement is True.`

      `**B.** → False

The claim requires a valid roster containing both Leo and Noah. Assume $L\\land N$. Rule (2), "Leo joins only if Zoe joins," means

$$(2)\\qquad L\\Rightarrow Z.$$

Rule (4) then sends Zoe's attendance to Noah's absence:

$$L\\overset{(2)}{\\Rightarrow}Z
\\overset{(4)}{\\Rightarrow}\\neg N.$$

This contradicts the assumed $N$. Rules (2) and (4) therefore forbid Leo and Noah from joining together,.

So the statement is False.`

      `**C.** → True

The claim needs one solution with Maria in and Leo out. Try the roster with Maria alone:

$$N=0,\\qquad M=1,\\qquad L=0,\\qquad Z=0.$$

Rule (1) is satisfied because its hypothesis $N$ is false. Rule (2) is satisfied because Leo is out. Rule (3), $M\\lor L$, holds through Maria. Rule (4) is satisfied because Zoe is out.

Thus $\\{M\\}$ is a legal roster with Maria joining and Leo not joining,.

So the statement is True.`

      `**D.** → True

The claim asks whether Maria's absence forces Noah's absence. Rule (1) is

$$(1)\\qquad N\\Rightarrow M.$$

Its contrapositive reverses the implication and negates both parts:

$$\\neg M\\Rightarrow\\neg N.$$

If Maria is out, Noah cannot be in, because Noah's presence would immediately require Maria by rule (1). This is exactly the claimed consequence,.

So the statement is True.`

      `**E.** → False

The claim says every legal roster includes Zoe. To disprove a "must" claim, it is enough to build one legal roster with $\\neg Z$.

Let Maria join alone:

$$\\{M\\},\\qquad N=L=Z=0.$$

With Noah out, rule (1) is idle. With Leo out, rule (2) is idle. Maria satisfies rule (3), $M\\lor L$, and Zoe's absence makes rule (4) idle. This valid roster omits Zoe,.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 24,
    solution_overview: `**Part 1: Setup.**

Write $N,M,L,Z$ for Noah, Maria, Leo, Zoe joining. The stem is

$$(1)\\ N\\Rightarrow M,\\qquad (2)\\ L\\Rightarrow Z,\\qquad (3)\\ M\\lor L,\\qquad (4)\\ Z\\Rightarrow\\neg N.$$

An implication whose hypothesis is false is idle. "$P$ only if $Q$" is $P\\Rightarrow Q$. The contrapose of $P\\Rightarrow Q$ is $\\neg Q\\Rightarrow\\neg P$.

**Part 2: Solve.**

Chaining (2) then (4) gives

$$L\\Rightarrow Z\\Rightarrow\\neg N.$$

If $N$ holds, (1) gives $M$ and the contrapose of (4) gives $\\neg Z$, hence $\\neg L$ by the contrapose of (2). Rule (3) holds by $M$. The roster is $\\{N,M\\}$.

If $\\neg N$ holds, (1) and (4) are idle. Rule (3) still needs $M\\lor L$, and (2) still needs $L\\Rightarrow Z$. The legal rosters are $\\{M\\}$, $\\{M,Z\\}$, $\\{L,Z\\}$, and $\\{M,L,Z\\}$.

Five rosters survive in all.`,
  },
  {
    id: `math-1-103`,
    case_id: `MATH 1.103`,
    title: `Board Game Night`,
    subsection: `1.4`,
    context: `Four friends - Ben, Carla, Dan, and Ella - are deciding whether to play a board game. Their participation follows these rules:

1. If Ben plays, then Carla plays.

2. Dan plays only if Ella plays.

3. If Carla plays, then Dan does not play.

4. At least one of Ben or Ella plays.`,
    statements: [
      `If Ben plays, then Dan does not play.`,
      `Ben and Dan can play together.`,
      `It is possible that only Ella plays, with Ben, Carla, and Dan all sitting out.`,
      `If Dan plays, then Carla does not play.`,
      `Carla must play the game.`,
    ],
    answer_key: [true, false, true, true, false],
    tactical_explanations: [
      `**A.** → True

The claim asks what Ben's participation forces. Rule (1) sends Ben to Carla, and rule (3) sends Carla to Dan's absence:

$$B\\overset{(1)}{\\Rightarrow}C
\\overset{(3)}{\\Rightarrow}\\neg D.$$

There is no branch in which Ben plays without Carla, and no branch in which Carla and Dan both play. Therefore Ben playing always forces Dan out,.

So the statement is True.`

      `**B.** → False

The claim requires a legal roster with both Ben and Dan. Assume $B\\land D$. By rule (1), Ben forces Carla in:

$$B\\overset{(1)}{\\Rightarrow}C.$$

Then rule (3) forces Dan out:

$$C\\overset{(3)}{\\Rightarrow}\\neg D.$$

The attempted roster contains $D$ and also forces $\\neg D$. Ella's status cannot repair that collision, so Ben and Dan cannot play together,.

So the statement is False.`

      `**C.** → True

The claim needs one valid roster in which Ella is the only player. Assign

$$B=0,\\qquad C=0,\\qquad D=0,\\qquad E=1.$$

Rules (1), (2), and (3) all have false hypotheses, so none forces another player in. Rule (4), $B\\lor E$, is satisfied by Ella. Hence $\\{E\\}$ is a legal one-person roster,

So the statement is True.`

      `**D.** → True

The claim asks whether Dan playing forces Carla out. Rule (3) says

$$(3)\\qquad C\\Rightarrow\\neg D.$$

Its contrapositive negates and reverses the two parts:

$$\\neg(\\neg D)\\Rightarrow\\neg C,$$

which simplifies to

$$D\\Rightarrow\\neg C.$$

Thus any roster containing Dan must omit Carla, exactly as claimed,.

So the statement is True.`

      `**E.** → False

The claim says Carla appears in every legal roster. Test Carla's absence by letting Ella play alone:

$$\\{E\\},\\qquad B=C=D=0.$$

Ben's absence makes rule (1) idle. Dan's absence makes rule (2) idle, and Carla's absence makes rule (3) idle. Ella satisfies rule (4), which requires $B\\lor E$. This valid roster has Carla out,.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 25,
    solution_overview: `**Part 1: Setup.**

Write $B,C,D,E$ for Ben, Carla, Dan, Ella playing. The stem is

$$(1)\\ B\\Rightarrow C,\\qquad (2)\\ D\\Rightarrow E,\\qquad (3)\\ C\\Rightarrow\\neg D,\\qquad (4)\\ B\\lor E.$$

An implication whose hypothesis is false is idle. "$P$ only if $Q$" is $P\\Rightarrow Q$. The contrapose of $P\\Rightarrow Q$ is $\\neg Q\\Rightarrow\\neg P$.

**Part 2: Solve.**

Rules (1) and (3) chain as

$$B\\Rightarrow C\\Rightarrow\\neg D.$$

If $B$ holds, then $C$ is in and $D$ is out. Rule (4) already holds, so $E$ is free. The rosters are $\\{B,C\\}$ and $\\{B,C,E\\}$.

If $\\neg B$ holds, rule (4) forces $E$. Rule (3) still forbids $C$ and $D$ together, and (2) is content whenever $D$ plays because $E$ is already in. The rosters are $\\{C,E\\}$, $\\{D,E\\}$, and $\\{E\\}$.

Five rosters survive in all.`,
  },
  {
    id: `math-1-104`,
    case_id: `MATH 1.104`,
    title: `Splitting the Cooking Duty`,
    subsection: `1.4`,
    context: `Three roommates - Owen, Priya, and Quinn - are deciding who cooks dinner tonight. The arrangement follows these rules:

1. If Owen cooks, then Priya does not cook.

2. At least one of Owen or Priya cooks.

3. If Priya cooks, then Quinn also cooks.

4. Quinn cooks only if Owen does not cook.`,
    statements: [
      `If Owen cooks, then Quinn does not cook.`,
      `Owen and Priya can both cook tonight.`,
      `It is possible that neither Owen nor Priya cooks, and Quinn cooks alone.`,
      `Priya cooking guarantees that Quinn also cooks.`,
      `Owen must cook tonight.`,
    ],
    answer_key: [true, false, false, true, false],
    tactical_explanations: [
      `**A.** → True

The claim asks what follows if Owen cooks. Rule (4), "Quinn cooks only if Owen does not," translates as

$$(4)\\qquad Q\\Rightarrow\\neg O.$$

Taking the contrapositive gives

$$\\neg(\\neg O)\\Rightarrow\\neg Q,$$

so

$$O\\Rightarrow\\neg Q.$$

Therefore an evening with Owen cooking cannot also have Quinn cooking,.

So the statement is True.`

      `**B.** → False

The claim requires a legal evening with Owen and Priya both cooking. Assume $O\\land P$. Rule (1) applies as soon as Owen cooks:

$$(1)\\qquad O\\Rightarrow\\neg P.$$

The assumption $O$ therefore forces $\\neg P$, directly contradicting the assumed $P$. Quinn's status does not affect rule (1), so no assignment can contain both Owen and Priya,.

So the statement is False.`

      `**C.** → False

The claim proposes Quinn cooking alone, with both Owen and Priya absent:

$$\\neg O\\land\\neg P\\land Q.$$

Rule (2) requires at least one of Owen or Priya:

$$(2)\\qquad O\\lor P.$$

Under the proposed assignment both disjuncts are false. Although Quinn with Owen absent satisfies rule (4), satisfying one rule cannot repair the failure of rule (2). Quinn cannot cook alone under all four rules,.

So the statement is False.`

      `**D.** → True

The claim says Priya's participation guarantees Quinn's. Rule (3) is exactly the forward implication

$$(3)\\qquad P\\Rightarrow Q.$$

Starting with $P$, rule (3) immediately forces $Q$. Rule (4) then forces $\\neg O$, which is compatible with rule (2) because Priya already satisfies $O\\lor P$. There is no exception to rule (3), so Priya cooking always brings Quinn in,.

So the statement is True.`

      `**E.** → False

The claim says Owen cooks in every solution. Test the opposite by putting Priya in instead. Rule (3) then brings Quinn in:

$$P\\overset{(3)}{\\Rightarrow}Q
\\overset{(4)}{\\Rightarrow}\\neg O.$$

The resulting evening is $\\{P,Q\\}$. Rule (1) is idle because Owen is out, rule (2) is satisfied by Priya, rule (3) is satisfied by Quinn, and rule (4) is satisfied because Owen is out. This valid evening omits Owen,.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 26,
    solution_overview: `**Part 1: Setup.**

Write $O,P,Q$ for Owen, Priya, Quinn cooking. The stem is

$$(1)\\ O\\Rightarrow\\neg P,\\qquad (2)\\ O\\lor P,\\qquad (3)\\ P\\Rightarrow Q,\\qquad (4)\\ Q\\Rightarrow\\neg O.$$

An implication whose hypothesis is false is idle. "$P$ only if $Q$" is $P\\Rightarrow Q$. The contrapose of $P\\Rightarrow Q$ is $\\neg Q\\Rightarrow\\neg P$.

**Part 2: Solve.**

Rules (1) and (2) together force exactly one of $O$ or $P$.

If $O$ holds, then $\\neg P$ by (1). Rule (4) is $Q\\Rightarrow\\neg O$, so $Q$ cannot hold, and (3) is idle. The evening is $\\{O\\}$.

If $P$ holds, then $\\neg O$. Rule (3) brings $Q$, and (4) holds because Owen is away. The evening is $\\{P,Q\\}$.

Those are the only two legal evenings.`,
  },
  {
    id: `math-1-105`,
    case_id: `MATH 1.105`,
    title: `A Five-Person Day Trip`,
    subsection: `1.4`,
    context: `Five club members - Diego, Fatima, Grace, Hugo, and Iris - are deciding whether to join a day trip. Their attendance follows these rules:

1. If Diego goes, then Fatima goes.

2. Grace goes unless Hugo goes.

3. If Fatima goes, then Grace does not go.

4. At least one of Diego or Hugo goes.

5. If Iris goes, then Diego does not go.

6. Hugo goes only if Fatima does not go.`,
    statements: [
      `Diego attends the trip in at least one valid scenario.`,
      `If Fatima goes, then Hugo does not go.`,
      `Hugo must go on the trip.`,
      `It is possible for both Grace and Iris to attend together.`,
      `If Iris goes, then Fatima goes.`,
    ],
    answer_key: [false, true, true, true, false],
    tactical_explanations: [
      `**A.** → False

The claim needs at least one valid roster with Diego. Assume $D$. Rule (1) forces Fatima in, and rule (3) then forces Grace out:

$$D\\overset{(1)}{\\Rightarrow}F
\\overset{(3)}{\\Rightarrow}\\neg G.$$

Rule (2), "Grace goes unless Hugo goes," is $G\\lor H$. Since Grace is out, Hugo must go. Rule (6) then forces Fatima out:

$$\\neg G\\overset{(2)}{\\Rightarrow}H
\\overset{(6)}{\\Rightarrow}\\neg F.$$

Diego's attendance has forced both $F$ and $\\neg F$. Thus no valid roster contains Diego,.

So the statement is False.`

      `**B.** → True

The claim asks whether Fatima going forces Hugo out. Rule (6), "Hugo goes only if Fatima does not," means

$$(6)\\qquad H\\Rightarrow\\neg F.$$

Take the contrapositive:

$$\\neg(\\neg F)\\Rightarrow\\neg H,$$

which simplifies to

$$F\\Rightarrow\\neg H.$$

Therefore Fatima and Hugo cannot attend together, exactly as the claim says,.

So the statement is True.`

      `**C.** → True

The claim says Hugo appears in every valid roster. Letter A forced Diego out:

$$\\neg D.$$

Rule (4) requires at least one of Diego or Hugo, so

$$(4)\\qquad D\\lor H.$$

With the Diego disjunct false, the Hugo disjunct must be true:

$$\\neg D\\land(D\\lor H)\\Rightarrow H.$$

Every valid roster therefore contains Hugo,.

So the statement is True.`

      `**D.** → True

The claim needs one legal roster containing both Grace and Iris. Try

$$\\{G,H,I\\},\\qquad D=F=0.$$

Rule (1) is idle because Diego is out. Rule (2), $G\\lor H$, holds. Rule (3) is idle because Fatima is out. Hugo satisfies rule (4), Iris satisfies rule (5) because Diego is out, and Hugo satisfies rule (6) because Fatima is out.

All six rules hold while Grace and Iris both attend,.

So the statement is True.`

      `**E.** → False

The claim is the implication $I\\Rightarrow F$. To refute it, look for a legal roster with Iris in and Fatima out. Use

$$\\{G,H,I\\},\\qquad I=1,\\qquad F=0.$$

As rule (5) requires, Iris has Diego out. Hugo then satisfies rule (4), and rule (6) agrees with Fatima being out. Grace satisfies rule (2), while rules (1) and (3) are idle because Diego and Fatima are absent.

This valid roster makes the hypothesis $I$ true and the conclusion $F$ false,.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 27,
    solution_overview: `**Part 1: Setup.**

Write $D,F,G,H,I$ for Diego, Fatima, Grace, Hugo, Iris going. The stem is

$$(1)\\ D\\Rightarrow F,\\qquad (2)\\ G\\lor H,\\qquad (3)\\ F\\Rightarrow\\neg G,$$

$$(4)\\ D\\lor H,\\qquad (5)\\ I\\Rightarrow\\neg D,\\qquad (6)\\ H\\Rightarrow\\neg F.$$

"$P$ unless $Q$" is $\\neg Q\\Rightarrow P$, so rule (2) is the inclusive or $G\\lor H$. "$P$ only if $Q$" is $P\\Rightarrow Q$. An implication whose hypothesis is false is idle.

**Part 2: Solve.**

If $D$ holds, then $F$ by (1) and $\\neg G$ by (3). Rule (2) then forces $H$, and (6) forces $\\neg F$. That collides with $F$, so Diego never goes.

With $\\neg D$, rule (4) forces $H$, and (6) then forces $\\neg F$. Rule (2) is already held by Hugo, so $G$ is free. Rule (5) is idle once Diego is out, so $I$ is free.

The legal rosters are $\\{H\\}$, $\\{H,G\\}$, $\\{H,I\\}$, and $\\{H,G,I\\}$.`,
  },
  {
    id: `math-1-106`,
    case_id: `MATH 1.106`,
    title: `Six Interns and the Conference Talk`,
    subsection: `1.4`,
    context: `Six interns - Aiden, Bella, Caleb, Daisy, Ethan, and Faye - are deciding who will present at a conference. Their participation follows these rules:

1. If Aiden presents, then both Bella and Caleb present.

2. At least one of Daisy or Ethan presents.

3. If Bella presents, then Daisy does not present.

4. Caleb presents only if Ethan presents.

5. If Faye presents, then Aiden presents.

6. Ethan presents only if Bella does not present.`,
    statements: [
      `Aiden is forced to NOT present in every valid scenario.`,
      `It is possible for Bella to present in some valid scenario.`,
      `If Caleb presents, then Ethan also presents.`,
      `It is possible for Faye to present at the conference.`,
      `There is exactly one valid way to decide who presents, consistent with all six rules.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

The claim says Aiden is absent from every valid roster. Test the opposite by assuming $A$. Rule (1) forces both Bella and Caleb, and rule (4) sends Caleb to Ethan:

$$A\\overset{(1)}{\\Rightarrow}(B\\land C),\\qquad
C\\overset{(4)}{\\Rightarrow}E.$$

Rule (6), $E\\Rightarrow\\neg B$, then forces Bella out:

$$A\\Rightarrow C\\Rightarrow E\\Rightarrow\\neg B.$$

But rule (1) already forced $B$. Since $A$ leads to both $B$ and $\\neg B$, Aiden cannot present in any valid scenario,.

So the statement is True.`

      `**B.** → False

The claim needs one valid scenario with Bella presenting. Assume $B$. Rule (3) forces Daisy out. Rule (6) says $E\\Rightarrow\\neg B$; its contrapositive forces Ethan out when Bella is in:

$$B\\overset{(3)}{\\Rightarrow}\\neg D,\\qquad
B\\overset{\\text{contrapose of }(6)}{\\Rightarrow}\\neg E.$$

Rule (2) requires $D\\lor E$, but both choices have now been forced false:

$$\\neg D\\land\\neg E\\quad\\text{contradicts}\\quad D\\lor E.$$

No valid scenario can contain Bella,.

So the statement is False.`

      `**C.** → True

The claim asks what must happen if Caleb presents. Rule (4), "Caleb presents only if Ethan presents," translates in the only-if direction as

$$(4)\\qquad C\\Rightarrow E.$$

Starting from $C$, rule (4) immediately forces $E$. The reverse $E\\Rightarrow C$ is not promised, but the claim uses the correct forward direction. Therefore every roster with Caleb also has Ethan,.

So the statement is True.`

      `**D.** → False

The claim needs a valid roster with Faye. Assume $F$. Rule (5) forces Aiden, and rule (1) then forces Bella and Caleb:

$$F\\overset{(5)}{\\Rightarrow}A
\\overset{(1)}{\\Rightarrow}(B\\land C).$$

Caleb forces Ethan by rule (4), while Ethan forces Bella out by rule (6):

$$C\\overset{(4)}{\\Rightarrow}E
\\overset{(6)}{\\Rightarrow}\\neg B.$$

This collides with the Bella forced by rule (1). Faye's attendance creates a contradiction, so no valid roster contains Faye,.

So the statement is False.`

      `**E.** → False

The claim says exactly one valid roster exists. Two distinct legal rosters are enough to defeat uniqueness.

First take $\\{D\\}$. Daisy satisfies rule (2), and every implication in (1), (3), (4), (5), and (6) has a false hypothesis.

Next take $\\{E\\}$. Ethan satisfies rule (2). Rule (6) requires Bella to be out, which she is, and the other implications again have false hypotheses:

$$\\{D\\}\\neq\\{E\\}.$$

Both rosters satisfy all six rules, so there is more than one valid way,.

So the statement is False.`
    ],
    difficulty_level: `4/5`,
    sort_order: 28,
    solution_overview: `**Part 1: Setup.**

Write $A,B,C,D,E,F$ for Aiden, Bella, Caleb, Daisy, Ethan, Faye presenting. The stem is

$$(1)\\ A\\Rightarrow(B\\land C),\\qquad (2)\\ D\\lor E,\\qquad (3)\\ B\\Rightarrow\\neg D,$$

$$(4)\\ C\\Rightarrow E,\\qquad (5)\\ F\\Rightarrow A,\\qquad (6)\\ E\\Rightarrow\\neg B.$$

An implication whose hypothesis is false is idle. "$P$ only if $Q$" is $P\\Rightarrow Q$.

**Part 2: Solve.**

If $B$ holds, then $\\neg D$ by (3) and $\\neg E$ by the contrapose of (6). Rule (2) then has both disjuncts false, so Bella never presents.

Aiden needs Bella by (1), so Aiden is out. Faye needs Aiden by (5), so Faye is out.

The live people are $C,D,E$, still constrained by (2) and (4). The legal rosters are $\\{D\\}$, $\\{E\\}$, $\\{D,E\\}$, $\\{C,E\\}$, and $\\{C,D,E\\}$.`,
  },
  {
    id: `math-1-107`,
    case_id: `MATH 1.107`,
    title: `Assigning Paper Reviewers`,
    subsection: `1.4`,
    context: `Five researchers - Petra, Quinn, Ravi, Sana, and Theo - are being assigned to review a paper. The assignment follows these rules:

1. If Petra reviews, then Quinn does not review.

2. Ravi reviews unless Sana reviews.

3. If Quinn does not review, then Theo reviews.

4. At least one of Petra or Sana reviews.

5. If Theo reviews, then Ravi does not review.

6. Sana reviews only if Petra reviews.`,
    statements: [
      `Petra must review the paper in every valid assignment.`,
      `If Quinn reviews, then Petra does not review.`,
      `It is possible for Ravi to review the paper in some valid assignment.`,
      `In the (unique) valid assignment, both Theo and Sana review the paper.`,
      `There are multiple different valid ways to assign reviewers consistent with all six rules.`,
    ],
    answer_key: [true, true, false, true, false],
    tactical_explanations: [
      `**A.** → True

The claim says Petra reviews in every valid assignment. Test the opposite by assuming $\\neg P$. Rule (6) is $S\\Rightarrow P$, so its contrapositive gives

$$\\neg P\\overset{\\text{contrapose of }(6)}{\\Rightarrow}\\neg S.$$

Rule (4) requires at least one of Petra or Sana:

$$(4)\\qquad P\\lor S.$$

Under the assumption, both disjuncts are false. Thus Petra's absence makes rule (4) impossible to satisfy, so Petra is forced to review,.

So the statement is True.`

      `**B.** → True

The claim asks what follows if Quinn reviews. Rule (1) says

$$(1)\\qquad P\\Rightarrow\\neg Q.$$

Taking the contrapositive reverses and negates both sides:

$$\\neg(\\neg Q)\\Rightarrow\\neg P,$$

so

$$Q\\Rightarrow\\neg P.$$

Therefore Quinn's presence forces Petra's absence, exactly as claimed,

So the statement is True.`

      `**C.** → False

The claim needs at least one valid assignment with Ravi. Petra is already forced in by rule (4) together with rule (6). Rule (1) then forces Quinn out, and rule (3) forces Theo in:

$$P\\overset{(1)}{\\Rightarrow}\\neg Q
\\overset{(3)}{\\Rightarrow}T.$$

Rule (5) now applies:

$$T\\overset{(5)}{\\Rightarrow}\\neg R.$$

Thus every valid assignment forces Ravi out. Assuming Ravi in would collide with the forced $\\neg R$,.

So the statement is False.`

      `**D.** → True

The claim says the unique assignment includes both Theo and Sana. Begin with Petra, who is forced in. Rules (1) and (3) then force Quinn out and Theo in:

$$P\\overset{(1)}{\\Rightarrow}\\neg Q
\\overset{(3)}{\\Rightarrow}T.$$

Rule (5) forces Ravi out. Rule (2) requires $R\\lor S$, so Ravi's absence forces Sana in:

$$T\\overset{(5)}{\\Rightarrow}\\neg R,\\qquad
\\neg R\\land(R\\lor S)\\overset{(2)}{\\Rightarrow}S.$$

The forced assignment is $\\{P,S,T\\}$, which contains Theo and Sana,.

So the statement is True.`

      `**E.** → False

The claim requires at least two different valid assignments. Instead, each reviewer's status is forced in sequence.

Rule (4) together with rule (6) forces $P$. Then (1) gives $\\neg Q$, (3) gives $T$, and (5) gives $\\neg R$. Finally, rule (2), $R\\lor S$, gives $S$:

$$P\\Rightarrow\\neg Q\\Rightarrow T\\Rightarrow\\neg R\\Rightarrow S.$$

So every valid assignment has exactly

$$P=S=T=1,\\qquad Q=R=0.$$

This assignment satisfies rule (6) because Sana's required Petra is present. No variable remains free to create a second assignment,.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 29,
    solution_overview: `**Part 1: Setup.**

Write $P,Q,R,S,T$ for Petra, Quinn, Ravi, Sana, Theo reviewing. The stem is

$$(1)\\ P\\Rightarrow\\neg Q,\\qquad (2)\\ R\\lor S,\\qquad (3)\\ \\neg Q\\Rightarrow T,$$

$$(4)\\ P\\lor S,\\qquad (5)\\ T\\Rightarrow\\neg R,\\qquad (6)\\ S\\Rightarrow P.$$

"$P$ unless $Q$" is $\\neg Q\\Rightarrow P$, so rule (2) is the inclusive or $R\\lor S$. "$P$ only if $Q$" is $P\\Rightarrow Q$. An implication whose hypothesis is false is idle.

**Part 2: Solve.**

If $\\neg P$ holds, the contrapose of (6) gives $\\neg S$, and then (4) fails. So $P$ is forced.

Then (1) gives $\\neg Q$, (3) gives $T$, (5) gives $\\neg R$, and (2) with Ravi out forces $S$. Rule (6) holds because Petra already reviews.

The unique assignment is $\\{P,S,T\\}$.`,
  },
  {
    id: `math-1-108`,
    case_id: `MATH 1.108`,
    title: `Seven Finalists and the Tournament Roster`,
    subsection: `1.4`,
    context: `Seven finalists - Uma, Victor, Wendy, Xavier, Yara, Zane, and Bianca - are deciding whether to compete in a tournament. Their participation follows these rules:

1. Uma competes if and only if Victor competes.

2. If Victor competes, then Wendy competes.

3. Exactly one of Wendy or Xavier competes (never both, never neither).

4. If Xavier competes, then Yara does not compete.

5. At least one of Yara or Zane competes.

6. Zane competes only if Bianca does not compete.

7. If Bianca competes, then Uma competes.

8. At least four of the seven finalists compete.`,
    statements: [
      `Victor must compete in every valid roster.`,
      `It is possible for Xavier to compete in some valid roster.`,
      `If Bianca competes, then Zane does not compete.`,
      `There is exactly one valid way to build the roster, consistent with all eight rules.`,
      `It is possible for exactly six of the seven finalists to compete.`,
    ],
    answer_key: [true, false, true, false, false],
    tactical_explanations: [
      `**A.** → True

To decide whether Victor is forced in, try the opposite: assume Victor is out and see whether any roster can still meet all eight rules.

Assume $\\neg V$. Rule (1) is the biconditional $U\\Leftrightarrow V$, so Uma is out as well:

$$\\neg V \\implies \\neg U$$

Rule (7) is $B\\Rightarrow U$. Its contrapose is $\\neg U\\Rightarrow\\neg B$, so Bianca is out too:

$$\\neg U \\implies \\neg B$$

Only Wendy, Xavier, Yara, and Zane remain as possible competitors. Rule (3) says exactly one of Wendy or Xavier competes, so there are two cases.

**Case Wendy in, Xavier out.** Then the only people who can still enter are Wendy, Yara, and Zane — at most three competitors. Rule (8) needs at least four, so this case dies.

**Case Xavier in, Wendy out.** Rule (4) is $X\\Rightarrow\\neg Y$, so Yara is out. Rule (5) needs $Y\\lor Z$, and with Yara gone Zane must enter. The roster is then only Xavier and Zane — size $2$, again below four.

Both Victor-out branches break rule (8). Therefore every valid roster has Victor in,.

So the statement is True.`

      `**B.** → False

From letter A (and the overview solve), Victor competes in every valid roster. Feed that fact forward through the later rules.

Rule (2) is $V\\Rightarrow W$. With Victor in, Wendy must compete:

$$V \\implies W$$

Rule (3) says exactly one of Wendy or Xavier competes. Wendy is already in, so Xavier cannot be:

$$W \\implies \\neg X$$

Xavier is therefore out of every valid roster. The claim says some valid roster includes Xavier, which never happens,.

So the statement is False.`

      `**C.** → True

Rule (6) says "Zane competes only if Bianca does not," which is the implication

$$Z \\Rightarrow \\neg B$$

The contrapose of $P\\Rightarrow Q$ is $\\neg Q\\Rightarrow\\neg P$. Here $P=Z$ and $Q=\\neg B$, so

$$\\neg(\\neg B) \\Rightarrow \\neg Z$$

$$B \\Rightarrow \\neg Z$$

That is exactly "If Bianca competes, then Zane does not compete." The claim restates a forced consequence of rule (6),.

So the statement is True.`

      `**D.** → False

After Victor is forced in, the chain $V\\Rightarrow W$ and rule (3) also force Uma in, Wendy in, and Xavier out. The forced core is therefore

$$\\{U,V,W\\}\\qquad\\text{with }X\\text{ out}$$

The free variables are only $Y,Z,B$, subject to (5) $Y\\lor Z$ and (6) $Z\\Rightarrow\\neg B$ (Zane and Bianca cannot both enter). Listing the legal extras:

$$\\{Y\\},\\quad \\{Z\\},\\quad \\{Y,B\\},\\quad \\{Y,Z\\}$$

(The triple $\\{Y,Z,B\\}$ is illegal by (6); $\\{B\\}$ alone fails (5); $\\{Z,B\\}$ fails (6).)

Each legal extra produces a different full roster on the same core, so there are four valid rosters, not one. The claim of uniqueness fails,.

So the statement is False.`

      `**E.** → False

A roster of size exactly six would need six of the seven finalists. With the forced core $\\{U,V,W\\}$ already in and Xavier forced out, the only way to reach size six is to add all three of Yara, Zane, and Bianca:

$$\\{U,V,W,Y,Z,B\\}$$

But rule (6) is $Z\\Rightarrow\\neg B$, so Zane and Bianca cannot both compete. The extra $\\{Y,Z,B\\}$ is illegal.

The legal extras recovered above have size $1$ or $2$, so total roster sizes are only $4$ or $5$. Size six never appears,.

So the statement is False.`
    ],
    difficulty_level: `5/5`,
    sort_order: 30,
    solution_overview: `**Part 1: Setup.**

Write $U,V,W,X,Y,Z,B$ for Uma, Victor, Wendy, Xavier, Yara, Zane, Bianca competing. The stem is

$$(1)\\ U\\Leftrightarrow V,\\qquad (2)\\ V\\Rightarrow W,\\qquad (3)\\ (W\\land\\neg X)\\lor(\\neg W\\land X),$$

$$(4)\\ X\\Rightarrow\\neg Y,\\qquad (5)\\ Y\\lor Z,\\qquad (6)\\ Z\\Rightarrow\\neg B,\\qquad (7)\\ B\\Rightarrow U,$$

and (8) at least four of the seven compete.

"$P$ only if $Q$" is $P\\Rightarrow Q$. An implication whose hypothesis is false is idle.

**Part 2: Shared forcing (used by every letter).**

Try $\\neg V$: then $\\neg U$ by (1) and $\\neg B$ by the contrapose of (7). Rule (3) splits into $W\\land\\neg X$ (at most $\\{W,Y,Z\\}$, size $\\le 3$) or $X\\land\\neg W$ (then $\\neg Y$ by (4) and $Z$ by (5), size $2$). Both break (8), so Victor is forced in. Then $U$ by (1), $W$ by (2), and $\\neg X$ by (3).

Forced core: $\\{U,V,W\\}$ in, $X$ out. Among $Y,Z,B$, rules (5)–(6) allow only the extras $\\{Y\\}$, $\\{Z\\}$, $\\{Y,B\\}$, $\\{Y,Z\\}$.`,
  },
];

export const MATH_CH1_LOGIC: MathTask[] = [
  ...MATH_CH1_CORE,
  ...(ch1Exam.tasks as MathTask[]),
];
