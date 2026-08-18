/**
 * Chapter 1 — Logic (subsections 1.1-1.4).
 * Every task is sourced from LOGIC.pdf, except a small proportional set of new
 * fillers (same abstract set-theory / logic style) added where the source
 * material was thin (mostly 1.1 and 1.2). Explanations follow the Ch11 tutorial
 * style: solution_overview gives the shared setup once; tactical_explanations
 * carry the per-statement (A-E) reasoning, with no duplication between the two.
 */

import type { MathTask } from "@/data/math-chapters";

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
] as const;

export const MATH_CH1_LOGIC: MathTask[] = [
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

Intersection keeps the elements that sit in both $A$ and $B$. Testing the members of $A$ against $B$ leaves $3$, $4$, and $5$:

$$A \\cap B = \\{3,4,5\\}$$

The claim is that same roster, so the statement is True.`,
      `**B.** → False

Union keeps every element of $A$ or $C$. The roster of $A$ is $1,2,3,4,5$ and $C$ adds $6,7,8,9$, so

$$A \\cup C = \\{1,2,3,4,5,6,7,8,9\\}$$

The claim stops at $8$ and drops $9\\in C$, so the statement is False.`,
      `**C.** → True

An element of $(A\\cap B)\\cap C$ must sit in all three lists. The numbers in both $A$ and $B$ are $3,4,5$. Of those, only $5$ sits in $C$:

$$(A \\cap B) \\cap C = \\{5\\}$$

The claim is that same roster, so the statement is True.`,
      `**D.** → False

Difference $A\\setminus C$ keeps members of $A$ that miss $C$. From $A$, only $5$ also sits in $C$, so

$$A \\setminus C = \\{1,2,3,4\\}$$

The claim drops $4$, but $4\\in A$ and $4\\notin C$, so the statement is False.`,
      `**E.** → False

Disjointness requires $B\\cap C=\\emptyset$. The shared members are $5$, $6$, and $7$:

$$B \\cap C = \\{5,6,7\\}$$

The intersection is nonempty, so the statement is False.`,
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

The overview recovered $A=\\{-3,3\\}$. $B$ is given as $\\{3,-3\\}$. Sets ignore order, so the two rosters are the same collection, so the statement is True.`,
      `**B.** → True

The overview recovered $A=\\{-3,3\\}$. The integer $3$ sits on that roster, so $3\\in A$, so the statement is True.`,
      `**C.** → False

The overview recovered $A=\\{-3,3\\}$. The claim reprints $A$ as the singleton $\\{3\\}$ and drops $-3$, even though $(-3)^{2}=9$ and $-3\\in Z$. The two sets are unequal, so the statement is False.`,
      `**D.** → True

The overview recovered two distinct members, $-3$ and $3$, so

$$\\lvert A \\rvert = 2$$

The claim is that same count, so the statement is True.`,
      `**E.** → False

The same roots $3$ and $-3$ must now pass the universe $N=\\{1,2,3,\\ldots\\}$. The root $3$ is natural, but $-3$ is not, so

$$C=\\{3\\}$$

The claim equals $C$ with $\\{3,-3\\}$. Those sets differ, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `The set-builder $A=\\{x\\in Z:x^{2}=9\\}$ keeps the integer solutions of $x^{2}=9$. $B$ is given as $\\{3,-3\\}$.

A set-builder is a membership test against a named universe. Equality of sets is equality of members, ignoring order. Cardinality counts distinct members. Changing the universe produces a different set.

The equation $x^{2}=9$ has roots $x=3$ and $x=-3$. Both are integers, so

$$A=\\{-3,3\\}.$$`,
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

Each of the three objects can be kept or left out, so

$$\\lvert \\mathcal{P}(A) \\rvert = 2^{3} = 8$$

The claim is $8$, so the statement is True.`,
      `**B.** → False

The elements of $A$ are the three letters $a$, $b$, and $c$. The object $\\{a,b\\}$ is a set of letters, not a letter, so $\\{a,b\\}\\notin A$. The pair is a subset of $A$ and therefore an element of $\\mathcal{P}(A)$, but that is not this claim, so the statement is False.`,
      `**C.** → True

Subsethood asks whether every member of the left-hand set sits in $A$. The empty set has no member at all, so there is no witness that could sit outside $A$. Hence $\\emptyset\\subseteq A$, so the statement is True.`,
      `**D.** → False

Proper inclusion is ordinary inclusion plus a genuine difference of sets. $A\\subseteq A$ always holds, but the extra demand $A\\ne A$ is impossible. So $A$ is not a proper subset of $A$, so the statement is False.`,
      `**E.** → True

A two-element subset of a three-element set is counted by

$$\\binom{3}{2} = 3$$

The three subsets are $\\{a,b\\}$, $\\{a,c\\}$, and $\\{b,c\\}$. The claim is $3$, so the statement is True.`,
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

The empty set has no member that could sit outside $D$, so $\\emptyset\\subseteq D$, so the statement is True.`,
      `**B.** → False

The elements of $D$ are the letters $a$, $b$, and $c$. The empty set is not one of those three objects, so $\\emptyset\\notin D$, so the statement is False.`,
      `**C.** → True

Each of the three letters can be kept or left out, so the number of subsets is

$$2^{3} = 8$$

The claim is $8$, so the statement is True.`,
      `**D.** → False

The singleton $\\{a\\}$ is a subset of $D$ because $a\\in D$. It is not an element of $D$, because the elements are letters rather than singletons. The claim needs both $\\{a\\}\\subseteq D$ and $\\{a\\}\\in D$. The second fails, so the statement is False.`,
      `**E.** → True

Every member of $D$ sits in $D$, so $D\\subseteq D$, so the statement is True.`,
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

The overview recovered $E\\setminus F=\\{1,7\\}$. The claim is that same roster, so the statement is True.`,
      `**B.** → True

The overview recovered $F\\setminus E=\\{4,6\\}$. The claim is that same roster, so the statement is True.`,
      `**C.** → False

The overview recovered $E\\setminus F=\\{1,7\\}$ and $F\\setminus E=\\{4,6\\}$. Those two sets are unequal, so the statement is False.`,
      `**D.** → True

The overview recovered the two leftover piles $\\{1,7\\}$ and $\\{4,6\\}$. Their union is

$$(E \\setminus F) \\cup (F \\setminus E) = \\{1,4,6,7\\}$$

The claim is that same roster, so the statement is True.`,
      `**E.** → True

The leftover piles $\\{1,7\\}$ and $\\{4,6\\}$ share no members, so

$$(E \\setminus F) \\cap (F \\setminus E) = \\emptyset$$

The claim is that same empty intersection, so the statement is True.`,
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

Intersection keeps elements in both $A$ and $B$. The only shared number is $6$:

$$A \\cap B = \\{6\\}$$

The claim matches, so the statement is True.`,
      `**B.** → True

Writing the distinct members of $A$ or $B$ gives

$$A \\cup B = \\{2,3,4,6,8,9,10,12\\}$$

which has $8$ elements, so the statement is True.`,
      `**C.** → False

Difference $C\\setminus A$ keeps members of $C$ that miss $A$:

$$C \\setminus A = \\{1,3,5\\}$$

The claim drops $5$, so the statement is False.`,
      `**D.** → False

Difference $B\\setminus C$ keeps members of $B$ that miss $C$:

$$B \\setminus C = \\{6,9,12\\}$$

The claim keeps $3$, but $3\\in C$, so the statement is False.`,
      `**E.** → False

Intersection keeps elements in both $A$ and $C$:

$$A \\cap C = \\{2,4\\}$$

The claim includes $6$, but $6\\notin C$, so the statement is False.`,
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

The overview recovered $\\lvert M \\cup E \\rvert = 43$. The claim is that same figure, so the statement is True.`,
      `**B.** → True

The overview recovered a union of $43$ among $50$ students. The remainder is

$$50 - 43 = 7$$

The claim is $7$, so the statement is True.`,
      `**C.** → True

Only Mathematics is the Mathematics headline minus the overlap:

$$\\lvert M \\setminus E \\rvert = 30 - 12 = 18$$

The claim is $18$, so the statement is True.`,
      `**D.** → False

The inclusion $E\\subseteq M$ would require every Economics student to sit in $M$, hence $\\lvert M \\cap E \\rvert = \\lvert E \\rvert$. The given overlap is $12$ and $\\lvert E \\rvert = 25$, so $12 \\ne 25$, so the statement is False.`,
      `**E.** → False

Disjointness requires $\\lvert M \\cap E \\rvert = 0$. The overlap is given as $12$, so the statement is False.`,
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

The three blocks occupy $\\{1,2,3\\}$, $\\{4,5,6\\}$, and $\\{7,8,9\\}$ with no shared integers, so

$$A \\cap B = \\emptyset, \\qquad A \\cap C = \\emptyset, \\qquad B \\cap C = \\emptyset$$

Every pair is disjoint, so the statement is True.`,
      `**B.** → True

The blocks are nonempty and pairwise disjoint. Their union is

$$A \\cup B \\cup C = \\{1,2,3,4,5,6,7,8,9\\} = U$$

so $\\{A,B,C\\}$ is a partition of $U$, so the statement is True.`,
      `**C.** → True

Pairwise disjointness already forces the triple intersection to be empty:

$$A \\cap B \\cap C = \\emptyset$$

so the statement is True.`,
      `**D.** → False

Difference $A\\setminus B$ keeps members of $A$ that miss $B$. None of $1,2,3$ sits in $B$, so

$$A \\setminus B = \\{1,2,3\\}$$

The claim is $\\emptyset$, so the statement is False.`,
      `**E.** → False

An empty intersection does not force a factor empty. Here $A\\cap B=\\emptyset$ even though both $A=\\{1,2,3\\}$ and $B=\\{4,5,6\\}$ are nonempty, so the statement is False.`,
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

The overview recovered $X^{c}=\\{7,8,9,10,11,12\\}$. The claim is that same roster, so the statement is True.`,
      `**B.** → True

The union is $X\\cup Y=\\{1,2,\\ldots,9\\}$. Complementing in $U$ leaves

$$(X \\cup Y)^{c} = \\{10,11,12\\}$$

The claim is that same roster, so the statement is True.`,
      `**C.** → True

The overview recovered $X^{c}=\\{7,8,9,10,11,12\\}$ and $Y^{c}=\\{1,2,3,10,11,12\\}$. Their intersection is

$$X^{c} \\cap Y^{c} = \\{10,11,12\\}$$

The claim is that same roster, so the statement is True.`,
      `**D.** → True

De Morgan's law says the complement of an intersection is the union of the complements:

$$(X \\cap Y)^{c} = X^{c} \\cup Y^{c}$$

This identity holds for every pair of sets. Checking the recovered lists: $X\\cap Y=\\{4,5,6\\}$, so the left side is $\\{1,2,3,7,8,9,10,11,12\\}$, which matches $X^{c}\\cup Y^{c}$, so the statement is True.`,
      `**E.** → False

The overview recovered $X^{c}=\\{7,8,9,10,11,12\\}$ and $Y^{c}=\\{1,2,3,10,11,12\\}$. Their union is

$$X^{c} \\cup Y^{c} = \\{1,2,3,7,8,9,10,11,12\\}$$

The claim drops $7,8,9$, so the statement is False.`,
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

The union is $A\\cup B=\\{1,2,\\ldots,8\\}$. Complementing in $U$ leaves

$$(A \\cup B)^{c} = \\{9,10\\}$$

The claim includes $8$, but $8\\in B$, so the statement is False.`,
      `**B.** → True

De Morgan's law says

$$(A \\cap B)^{c} = A^{c} \\cup B^{c}$$

This identity holds for every pair of sets, so the statement is True.`,
      `**C.** → False

The overview recovered $A^{c}=\\{6,7,8,9,10\\}$ and $B^{c}=\\{1,2,3,9,10\\}$. Their intersection is

$$A^{c} \\cap B^{c} = \\{9,10\\}$$

The claim keeps $6,7,8$, which sit in $B$ and therefore miss $B^{c}$, so the statement is False.`,
      `**D.** → True

The intersection is $A\\cap B=\\{4,5\\}$. Complementing in $U$ leaves

$$(A \\cap B)^{c} = \\{1,2,3,6,7,8,9,10\\}$$

The claim is that same roster, so the statement is True.`,
      `**E.** → False

The overview recovered $A^{c}=\\{6,7,8,9,10\\}$ and $B^{c}=\\{1,2,3,9,10\\}$. Their union is

$$A^{c} \\cup B^{c} = \\{1,2,3,6,7,8,9,10\\}$$

The claim drops $6,7,8$, so the statement is False.`,
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

The blocks $\\{1,2\\}$, $\\{3,4\\}$, and $\\{5,6\\}$ are nonempty and pairwise disjoint, and

$$\\{1,2\\} \\cup \\{3,4\\} \\cup \\{5,6\\} = A$$

so $P$ is a partition of $A$, so the statement is True.`,
      `**B.** → False

A partition need not have one block per element. The one-block collection $\\{A\\}$ is a partition of $A$, and the pairing $\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$ is another, with $3$ blocks rather than $6$. The claim requires every partition to have exactly $6$ blocks, so the statement is False.`,
      `**C.** → False

The two blocks of $Q$ both contain $3$:

$$\\{1,2,3\\} \\cap \\{3,4,5,6\\} = \\{3\\}$$

The overlap is nonempty, so $Q$ is not a partition, so the statement is False.`,
      `**D.** → False

The union of the blocks of $R$ is

$$\\{1,2\\} \\cup \\{3,4\\} \\cup \\{5\\} = \\{1,2,3,4,5\\}$$

which misses $6\\in A$, so $R$ is not a partition of $A$, so the statement is False.`,
      `**E.** → True

The overview recorded two distinct partitions of any set with $n\\ge 2$ elements: the one-block collection $\\{A\\}$, and the collection of $n$ singletons. So more than one partition always exists, so the statement is True.`,
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

The overview recovered $2^{5}=32$ subsets. The claim is $32$, so the statement is True.`,
      `**B.** → True

Proper subsets are all subsets except $A$ itself:

$$32 - 1 = 31$$

The claim is $31$, so the statement is True.`,
      `**C.** → False

The number of $4$-element subsets of a $5$-element set is

$$\\binom{5}{4} = 5$$

The claim is $10$, so the statement is False.`,
      `**D.** → True

Nonempty subsets are all subsets except $\\emptyset$:

$$32 - 1 = 31$$

The claim is $31$, so the statement is True.`,
      `**E.** → False

The even sizes available in a $5$-element set are $0$, $2$, and $4$:

$$\\binom{5}{0} + \\binom{5}{2} + \\binom{5}{4} = 1 + 10 + 5 = 16$$

The claim is $15$, so the statement is False.`,
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

The lower bound of the intersection is the stricter of $x>0$ and $x\\ge 5$, hence $x\\ge 5$. The upper bound is the stricter of $x\\le 10$ and $x<15$, hence $x\\le 10$. So

$$A \\cap B = [5,10]$$

The claim matches, so the statement is True.`,
      `**B.** → False

The union runs from just above $0$ to just below $15$:

$$A \\cup B = (0,15)$$

The claim is $(0,15]$, which includes $15$. But $15\\notin B$ because $B$ is open at $15$, and $15\\notin A$, so the statement is False.`,
      `**C.** → True

The point $10$ satisfies $0<10\\le 10$, so $10\\in A$. It also satisfies $5\\le 10<15$, so $10\\in B$. Hence $10\\in A\\cap B$, so the statement is True.`,
      `**D.** → False

The point $5$ satisfies $0<5\\le 10$, so $5\\in A$. It also satisfies $5\\le 5<15$, so $5\\in B$. Difference $A\\setminus B$ cannot keep a point of $B$, so $5\\notin A\\setminus B$, so the statement is False.`,
      `**E.** → False

The claim is $A\\subseteq B$. A counterexample is $x=1$:

$$1 \\in A, \\qquad 1 \\notin B$$

because $1<5$. The implication fails, so the statement is False.`,
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

The overview recovered $\\lvert A \\cup B \\cup C \\rvert = 145$. The claim is $155$, so the statement is False.`,
      `**B.** → True

The overview recovered a union of $145$ among $150$ tourists. The remainder is

$$150 - 145 = 5$$

The claim is $5$, so the statement is True.`,
      `**C.** → False

The pairwise total $\\lvert A \\cap B \\rvert = 30$ still includes the $10$ visitors to all three museums. The exact $A$-and-$B$-only region is

$$30 - 10 = 20$$

The claim is $30$, so the statement is False.`,
      `**D.** → False

Only Museum $A$ excludes $B$ and $C$. Subtracting both pair totals from $\\lvert A \\rvert$ double-subtracts the triple, so add it back:

$$\\lvert A \\setminus (B \\cup C) \\rvert = 80 - 30 - 20 + 10 = 40$$

The claim computes $80-30-20=30$ and never adds $10$, so the statement is False.`,
      `**E.** → False

At least two museums means the three exact-pair regions plus the triple:

$$30 - 10 = 20, \\qquad 25 - 10 = 15, \\qquad 20 - 10 = 10$$

$$20 + 15 + 10 + 10 = 55$$

The claim is $65$, so the statement is False.`,
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

Every positive even is a natural number, so $E\\subseteq N$. The odd $1$ sits in $N$ but not in $E$, so $E\\ne N$. The inclusion is proper, so the statement is True.`,
      `**B.** → False

The overview recovered a bijection $f(n)=2n$ from $N$ onto $E$, so $\\lvert E \\rvert = \\lvert N \\rvert$ even though $E$ is a proper subset of $N$. The finite-set slogan does not apply here, so the statement is False.`,
      `**C.** → False

The formula $f(n)=2n$ always outputs an even integer, so its image is $E$, not the odd naturals. A bijection $N$ onto the odds would be $n\\mapsto 2n-1$. The claimed correspondence is the wrong codomain, so the statement is False.`,
      `**D.** → True

Every positive even is a natural, but $1\\in N\\setminus E$, so $E\\subsetneq N$. The overview recovered $\\lvert E \\rvert = \\lvert N \\rvert$. Same cardinality with a proper subset is exactly why the finite-set slogan fails for infinite sets, so the statement is True.`,
      `**E.** → False

The set $E$ itself is an infinite subset of $N$ that is not equal to $N$, because $1\\in N\\setminus E$. So not every infinite subset of $N$ equals $N$, so the statement is False.`,
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

The number $6$ sits on the roster of $A$, so $6\\in A$, so the statement is True.`,
      `**B.** → False

The elements of $A$ are the six even numbers. The singleton $\\{6\\}$ is a set, not a number, so $\\{6\\}\\notin A$, so the statement is False.`,
      `**C.** → True

Both $6$ and $8$ sit in $A$, so $\\{6,8\\}\\subseteq A$, so the statement is True.`,
      `**D.** → True

The empty set has no member that could sit outside $A$, so $\\emptyset\\subseteq A$, so the statement is True.`,
      `**E.** → True

An $n$-element set has $2^{n}$ subsets, so here

$$2^{6} = 64$$

Proper subsets exclude $A$ itself:

$$64 - 1 = 63$$

The claim is $63$, so the statement is True.`,
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

The overview recovered $A=\\{2,3\\}$. $B$ is given as $\\{2,3\\}$. The two rosters match, so the statement is True.`,
      `**B.** → True

The overview recovered $A=\\{2,3\\}$. The integer $3$ sits on that roster, so $3\\in A$, so the statement is True.`,
      `**C.** → False

The overview recovered $A=\\{2,3\\}$. The claim reprints $A$ as the singleton $\\{2\\}$ and drops $3$, even though $3$ is an integer root. The two sets are unequal, so the statement is False.`,
      `**D.** → True

The overview recovered two distinct members, $2$ and $3$, so

$$\\lvert A \\rvert = 2$$

The claim is that same count, so the statement is True.`,
      `**E.** → True

The same roots $2$ and $3$ must now pass $x\\in\\mathbb{N}$ and $x>2$. The root $2$ fails $x>2$. The root $3$ is natural and strictly larger than $2$, so

$$C=\\{3\\}$$

The claim is that same singleton, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `The set-builder $A=\\{x\\in\\mathbb{Z}:x^{2}-5x+6=0\\}$ keeps the integer solutions of the quadratic. $B$ is given as $\\{2,3\\}$.

A set-builder keeps those members of the named universe that satisfy the stated equation. Changing the universe, or adding an extra inequality, produces a different set.

Factor the quadratic:

$$x^{2} - 5x + 6 = (x-2)(x-3) = 0.$$

The roots are $x=2$ and $x=3$. Both are integers, so

$$A=\\{2,3\\}.$$`,
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

Each of the four letters can be kept or left out, so

$$\\lvert \\mathcal{P}(D) \\rvert = 2^{4} = 16$$

The claim is $16$, so the statement is True.`,
      `**B.** → True

Both $w$ and $x$ sit in $D$, so $\\{w,x\\}\\subseteq D$. Membership in the power set is subsethood of $D$, hence $\\{w,x\\}\\in\\mathcal{P}(D)$, so the statement is True.`,
      `**C.** → True

Choosing $3$ letters out of $4$ is choosing which one letter to omit:

$$\\binom{4}{3} = 4$$

The claim is $4$, so the statement is True.`,
      `**D.** → True

Every set is a subset of itself, so $D\\subseteq D$. Therefore $D\\in\\mathcal{P}(D)$, so the statement is True.`,
      `**E.** → False

The number of $2$-element subsets of a $4$-element set is

$$\\binom{4}{2} = 6$$

The claim is $5$, so the statement is False.`,
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

Each of $1$, $2$, and $3$ sits in $F$, so $E\\subseteq F$, so the statement is True.`,
      `**B.** → True

Each of $1$, $2$, and $3$ sits in $F$, so $E\\subseteq F$. The extra integer $4$ sits in $F$ but not in $E$, so $E\\ne F$. The inclusion is proper, so the statement is True.`,
      `**C.** → False

The integer $4$ sits in $F$ but not in $E$, so $F\\not\\subseteq E$, so the statement is False.`,
      `**D.** → True

Every member of $E$ sits in $E$, so $E\\subseteq E$, so the statement is True.`,
      `**E.** → False

Proper inclusion needs $E\\subseteq E$ and $E\\ne E$. The inequality $E\\ne E$ is impossible, so $E$ is not a proper subset of $E$, so the statement is False.`,
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

The three blocks occupy $\\{1,2\\}$, $\\{3,4\\}$, and $\\{5,6\\}$ with no shared integers, so they are pairwise disjoint, so the statement is True.`,
      `**B.** → True

The union of the blocks is

$$\\{1,2\\} \\cup \\{3,4\\} \\cup \\{5,6\\} = \\{1,2,3,4,5,6\\} = G$$

so the statement is True.`,
      `**C.** → True

The blocks $\\{1,2\\}$, $\\{3,4\\}$, and $\\{5,6\\}$ are nonempty and pairwise disjoint, and their union is $G$. Those are the three partition checks, so $\\mathcal{S}$ is a partition of $G$, so the statement is True.`,
      `**D.** → False

The first two blocks of $\\mathcal{S}'$ both contain $2$:

$$\\{1,2\\} \\cap \\{2,3,4\\} = \\{2\\}$$

The overlap is nonempty, so $\\mathcal{S}'$ is not a partition, so the statement is False.`,
      `**E.** → False

The replacement block $\\{5,6,7\\}$ contains $7$, and $7\\notin G$. A partition of $G$ cannot use a block that fails to be a subset of $G$, so the statement is False.`,
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

Subsethood only requires that every member of $H$ already sit in $\\mathbb{N}$. Each positive even is $2k$ for some integer $k\\ge 1$, hence a natural number. There is no positive even outside $\\mathbb{N}$, so the statement is True.`,
      `**B.** → False

A finite set of positive evens would have a largest member $2N$. Then $2(N+1)$ is still even and strictly larger:

$$2(N+1)=2N+2>2N$$

so it would also sit in $H$. The roster $2,4,6,\\ldots$ never ends, so $H$ is infinite. Being a subset of $\\mathbb{N}$ does not make $H$ finite, so the statement is False.`,
      `**C.** → False

Equality of sets needs the same members. The overview already has the leftover $1\\in\\mathbb{N}\\setminus H$. That one odd already forces $H\\neq\\mathbb{N}$, so the statement is False.`,
      `**D.** → True

The overview's map $f(n)=2n$ is one-to-one because $2n=2m$ forces $n=m$. It is onto $H$ because every positive even $2k$ equals $f(k)$. That is a bijection $\\mathbb{N}\\to H$, which is what pairing every natural with exactly one even (and vice versa) means, so the statement is True.`,
      `**E.** → False

The overview already has the leftover $1\\in\\mathbb{N}\\setminus H$, so the inclusion is proper: $H\\subsetneq\\mathbb{N}$. The same bijection $f(n)=2n$ still pairs the two sets, so they have the same cardinality. For infinite sets, a proper subset need not be strictly smaller. The claim treats a finite-set slogan as a law, so the statement is False.`,
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

Membership $a\\in K$ asks whether the unwrapped object $a$ is on the roster of $K$. The first listed object is exactly $a$, so $a\\in K$, so the statement is True.`,
      `**B.** → True

The second listed object is the singleton $\\{a\\}$ itself, so $\\{a\\}\\in K$. That is membership of a set-object, not subsethood. Braces matter: $\\{a\\}$ is not the same object as $a$, so the statement is True.`,
      `**C.** → True

Subsethood $\\{a\\}\\subseteq K$ asks whether the only member of $\\{a\\}$, namely $a$, sits in $K$. The roster of $K$ begins with $a$, so $a\\in K$ and the singleton is a subset, so the statement is True.`,
      `**D.** → True

Subsethood $\\{\\{a\\}\\}\\subseteq K$ asks whether the only member of $\\{\\{a\\}\\}$, namely $\\{a\\}$, sits in $K$. The second listed object of $K$ is $\\{a\\}$, so $\\{a\\}\\in K$ and the test succeeds, so the statement is True.`,
      `**E.** → True

The two listed objects are distinct: an element and a one-element set containing that element. Two distinct members give

$$\\lvert K\\rvert=2,$$

so the statement is True.`,
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

The claim is that same list, so the statement is True.`,
      `**B.** → True

De Morgan's first law says the complement of a union is the intersection of the complements. The overview listed $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$, so

$$A^c\\cap B^c=\\{9,10\\}.$$

Numbers $6,7,8$ miss $A$ but sit in $B$, so they fail $B^c$. The intersection matches $(A\\cup B)^c$, so the statement is True.`,
      `**C.** → True

De Morgan's second law says the complement of an intersection is the union of the complements. The overview listed $A\\cap B=\\{4,5\\}$, so removing those two from $U$ leaves

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

Joining the complements gives the same list:

$$A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}.$$

The two sides agree, so the statement is True.`,
      `**D.** → False

Intersection keeps only numbers that sit in both lists. The overview listed $A\\cap B=\\{4,5\\}$. The claimed $\\{4,5,6\\}$ pads the overlap with $6$, and $6$ sits in $B$ but misses $A$. The lists do not match, so the statement is False.`,
      `**E.** → False

The overview listed $A\\cap B=\\{4,5\\}$, so the complement in $U$ must drop $4$ and $5$ and keep everything else:

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

The claimed list $\\{1,2,3,4,5,9,10\\}$ keeps $4$ and $5$ while omitting $6,7,8$. That is the opposite of a complement, so the statement is False.`,
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

The overview already counted $\\lvert A\\times B\\rvert=2\\cdot 3=6$ by the product rule. Product size is the number of cells in a $2$ by $3$ grid, not the five distinct symbols $1,2,x,y,z$. The claim is that same figure $6$, so the statement is True.`,
      `**B.** → True

Membership in $A\\times B$ is a two-slot test. For $(2,x)$ the first slot $2$ sits in $A=\\{1,2\\}$ and the second slot $x$ sits in $B=\\{x,y,z\\}$. Both tests succeed, so $(2,x)\\in A\\times B$, so the statement is True.`,
      `**C.** → False

The pair $(x,2)$ puts a letter in the first slot, and $x\\notin A$. Ordered pairs treat $(2,x)$ and $(x,2)$ as different objects; the second lives in $B\\times A$, not in $A\\times B$. The first slot already fails, so the statement is False.`,
      `**D.** → False

Set equality needs identical members, not identical counts. The pair $(2,x)$ sits in $A\\times B$, but $2\\notin B$, so that pair cannot sit in $B\\times A$. One missing witness already forces $A\\times B\\neq B\\times A$, so the statement is False.`,
      `**E.** → True

Size ignores order. The reverse product is

$$\\lvert B\\times A\\rvert=3\\cdot 2=6=\\lvert A\\times B\\rvert.$$

The counts agree even though the member lists do not, so the statement is True.`,
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

Subsethood would need every point of $(1,5)$ to satisfy $x\\ge 3$. The leftover strip $(1,3)$ is the obstruction. Explicitly $x=2$ sits in $A$ because $1<2<5$, and it misses $B$ because $2<3$. One witness kills $A\\subseteq B$, so the statement is False.`,
      `**B.** → True

Numbers satisfying both $1<x<5$ and $x\\ge 3$ form the tighter interval $[3,5)$. The lower end $3$ is closed because $3\\in A$ and $3\\in B$. The upper end $5$ stays open because $5\\notin A$. The claimed interval is that overlap, so the statement is True.`,
      `**C.** → False

$B$ is unbounded above, so it contains numbers far past $A$. Witness $x=10$: in $B$ because $10\\ge 3$, and not in $A$ because $10\\ge 5$. One large witness kills $B\\subseteq A$, so the statement is False.`,
      `**D.** → True

From just above $1$ onward there is always coverage: $A$ handles $(1,5)$ and $B$ handles $[3,\\infty)$. The point $1$ itself is excluded from both inputs, so

$$A\\cup B=(1,\\infty).$$

The claim is that same interval, so the statement is True.`,
      `**E.** → True

Existence needs one point of $A$ that misses $B$. Take $x=2$: it satisfies $1<2<5$ but $2<3$, so $2\\in A\\setminus B$. The leftover strip $(1,3)$ is nonempty, so the statement is True.`,
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

The overview already joined the leftovers $A\\setminus B=\\{1,2\\}$ and $B\\setminus A=\\{5,6\\}$ into $A\\triangle B=\\{1,2,5,6\\}$. Symmetric difference is "exactly one," not "at least one": the overlap $\\{3,4\\}$ is absent on purpose. The claim is that same four-element list, so the statement is True.`,
      `**B.** → False

The definition joins the leftovers by $\\cup$, not $\\cap$. Those leftovers $\\{1,2\\}$ and $\\{5,6\\}$ are disjoint, so

$$(A\\setminus B)\\cap(B\\setminus A)=\\emptyset,$$

which is not the four-element set $\\{1,2,5,6\\}$. Outer buckets of a Venn diagram never overlap, so the statement is False.`,
      `**C.** → False

Symmetric difference excludes the overlap. The overview listed $A\\cap B=\\{3,4\\}$ and $A\\triangle B=\\{1,2,5,6\\}$, which share nothing. Already $3\\in A\\cap B$ and $3\\notin A\\triangle B$, so $A\\cap B\\nsubseteq A\\triangle B$, so the statement is False.`,
      `**D.** → True

If $A$ and $B$ share nothing, then $A\\setminus B=A$ and $B\\setminus A=B$, so $A\\triangle B=A\\cup B$. There is no middle bucket to discard. This is a general identity; the given lists are not disjoint, but the implication still holds, so the statement is True.`,
      `**E.** → True

The sum $\\lvert A\\rvert+\\lvert B\\rvert$ double-counts the overlap, and $A\\triangle B$ throws both copies away:

$$\\lvert A\\triangle B\\rvert=\\lvert A\\rvert+\\lvert B\\rvert-2\\lvert A\\cap B\\rvert=4+4-2\\cdot 2=4.$$

That matches the four-element set $\\{1,2,5,6\\}$, so the statement is True.`,
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

The overview already counted $5\\cdot 8=40$ ordered pairs. Product size is cells, not $5+8=13$ people-plus-accounts. The claim is that same figure $40$, so the statement is True.`,
      `**B.** → False

Coverage pairs are ordered: first slot is the rep, second is the account. The pair (Maria, Account $3$) and the pair (Account $3$, Maria) are different objects; the second treats Account $3$ as the rep. Order is the whole point of a Cartesian product, so the statement is False.`,
      `**C.** → True

Zero accounts means the second factor is empty, so

$$r\\cdot 0=0$$

for any number $r$ of reps. Without a second coordinate there is no ordered pair. Hiring more reps cannot create an account slot that does not exist, so the statement is True.`,
      `**D.** → False

Membership in the product means the first slot is a rep and the second slot is an account. The claim swaps both tests, putting Maria among the accounts and Account $3$ among the reps. Those are the tests for the reversed product, so the statement is False.`,
      `**E.** → True

Six reps and eight accounts. The extra arithmetic is the increment from one new rep:

$$6\\cdot 8=48.$$

Equivalently the new rep adds eight new pairs to the old forty, so $40+8=48$. The claim is $48$, so the statement is True.`,
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

The claim is that same interval, so the statement is True.`,
      `**B.** → False

The temperature $4$ sits in $B$ because $4\\ge -1$, but it fails $T^2<16$:

$$4^2=16,$$

and $16$ is not strictly less than $16$, so $4\\notin A$ and therefore $4\\notin A\\cap B$. The overlap $[-1,4)$ is open at $4$ for the same reason, so the statement is False.`,
      `**C.** → False

$A=(-4,4)$ already excluded $\\pm 4$, so the complement must collect them:

$$A^c=(-\\infty,-4]\\cup[4,\\infty).$$

The claimed strict inequalities $T<-4$ or $T>4$ drop those two boundary temperatures. Check $T=4$: $4^2=16$ is not strictly less than $16$, so $4\\notin A$ and $4$ must sit in $A^c$. The claimed roster drops it, so the statement is False.`,
      `**D.** → False

$A$ covers $(-4,4)$ and $B$ carries on upward from $-1$, so together they reach every temperature above $-4$:

$$A\\cup B=(-4,\\infty).$$

Take $T=-5$: not frost-safe ($25\\ge 16$) and not irrigating ($-5<-1$). The whole ray $(-\\infty,-4]$ lies outside both pieces, so the union is not all of $\\mathbb{R}$, so the statement is False.`,
      `**E.** → True

Frost-safe yet dry is the leftover $A\\setminus B=(-4,-1)$. At $T=-2$ we have $4<16$ and $-2<-1$, so irrigation stays off. One witness is enough, so the statement is True.`,
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

The overview already formed the union $160$ by subtracting the given overlap $50$ once. The claimed $170$ subtracts only $40$ from $120+90$, as if a neighbouring region were the overlap. The correct subtraction is the measured $50$, so $\\lvert A\\cup B\\rvert=160\\neq 170$, so the statement is False.`,
      `**B.** → True

Neither is the survey minus the union. The overview recovered $\\lvert A\\cup B\\rvert=160$, so

$$200-160=40.$$

The claim is $40$, so the statement is True.`,
      `**C.** → False

A-only peels the overlap out of $A$:

$$\\lvert A\\setminus B\\rvert=120-50=70.$$

The claimed $90$ would be right only if the products shared nobody, or if $\\lvert B\\rvert$ were copied onto the A-only cell. The lists do not match, so the statement is False.`,
      `**D.** → True

The $50$ who like both already sit inside the $120$ who like $A$. That is all $A\\cap B\\subseteq A$ asks, and it holds for any pair of sets. Intersection is always a subset of each factor, so the statement is True.`,
      `**E.** → False

The overflow $120+90-200=10$ is only a floor on the overlap, not an exact value. Any overlap from $10$ up to $\\min(120,90)=90$ could fit the headlines, and the survey already reports $50$. "Exactly $10$" confuses a lower bound with a measurement, so the statement is False.`,
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

The claimed roster matches, so the statement is True.`,
      `**B.** → True

Intersection keeps only the shared numbers. The overview's scan left $3$ and $4$ in both lists, while $1,2$ miss $B$ and $5,6$ miss $A$, so

$$A\\cap B=\\{3,4\\}.$$

The claimed overlap matches, so the statement is True.`,
      `**C.** → True

Difference $A\\setminus B$ deletes a member of $A$ only when it also sits in $B$. Deleting the shared pair $3,4$ leaves

$$A\\setminus B=\\{1,2\\}.$$

The numbers $1$ and $2$ miss $B$, so they stay. The claimed leftover matches, so the statement is True.`,
      `**D.** → False

The opposite leftover lives inside $B$:

$$B\\setminus A=\\{5,6\\},$$

while $A\\setminus B=\\{1,2\\}$. Already $1$ sits in the first leftover and misses the second. Difference is not commutative, so the statement is False.`,
      `**E.** → True

Disjointness means the intersection is empty. None of $7,8,9$ appears in $\\{1,2,3,4\\}$, so

$$A\\cap C=\\emptyset.$$

The two lists share nothing, so the statement is True.`,
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

The claimed roster matches, so the statement is True.`,
      `**B.** → True

Intersection keeps only the numbers that clear both lists. The overview's scan left $\\{30,40,50\\}$. The numbers $10$ and $20$ miss $B$, and $60$ misses $A$. The claimed overlap matches, so the statement is True.`,
      `**C.** → True

Difference $A\\setminus B$ deletes a member of $A$ only when that member also sits in $B$. Shared $30,40,50$ leave; private $10,20$ stay:

$$A\\setminus B=\\{10,20\\}.$$

The claimed leftover matches, so the statement is True.`,
      `**D.** → False

The opposite leftover is $B\\setminus A=\\{60\\}$, while $A\\setminus B=\\{10,20\\}$. The sizes already disagree ($1$ versus $2$), and $10$ sits in the first leftover but not the second. Difference is not commutative, so the statement is False.`,
      `**E.** → True

Disjointness means the intersection is empty. Every member of $A$ is at least $10$, while $C$ stops at $3$, so

$$A\\cap C=\\emptyset.$$

There is no shared multiple of ten among $1,2,3$, so the statement is True.`,
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

The claimed roster matches, so the statement is True.`,
      `**B.** → True

Intersection keeps only the letters that appear on both rosters. Letters $a$ and $b$ sit in $A$ and miss $B$; letter $e$ sits in $B$ and misses $A$. Only $c$ and $d$ clear both tests:

$$A\\cap B=\\{c,d\\}.$$

The claimed overlap matches, so the statement is True.`,
      `**C.** → True

Difference $A\\setminus B$ keeps $A$'s private letters. Letters $c$ and $d$ sit in $B$, so they leave:

$$A\\setminus B=\\{a,b\\}.$$

The claimed leftover matches, so the statement is True.`,
      `**D.** → False

The opposite leftover is the singleton $B\\setminus A=\\{e\\}$, while $A\\setminus B=\\{a,b\\}$. Different sizes already forbid equality, and $a$ sits in one leftover but not the other. Difference is not commutative, so the statement is False.`,
      `**E.** → True

$C=\\{x,y\\}$ shares no letter with $A=\\{a,b,c,d\\}$, so

$$A\\cap C=\\emptyset.$$

Disjointness is that empty overlap, so the statement is True.`,
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

Those two numbers sit in neither $A$ nor $B$. The claim is that same list, so the statement is True.`,
      `**B.** → True

De Morgan's first law says $(A\\cup B)^c=A^c\\cap B^c$. The overview listed $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$, so

$$A^c\\cap B^c=\\{9,10\\}.$$

Numbers $6,7,8$ miss $A$ but sit in $B$, so they fail the intersection of complements. The two sides agree, so the statement is True.`,
      `**C.** → True

The overview listed $A\\cap B=\\{4,5\\}$. Removing those two from $U$ leaves

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

Joining $A^c$ with $B^c$ produces the same list, so $(A\\cap B)^c=A^c\\cup B^c$, so the statement is True.`,
      `**D.** → True

$A^c$ is $U$ minus $A$: drop $1$ through $5$, keep $\\{6,7,8,9,10\\}$. The overview already recorded that list. Complement is a scan of the universe, not of $A$ rewritten backwards. The claim matches, so the statement is True.`,
      `**E.** → True

The overview listed $A\\cap B=\\{4,5\\}$, so removing those two from $U$ leaves

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

That list keeps $A$-only, $B$-only, and neither. The claim is that same eight-number roster, so the statement is True.`,
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

There is no leftover integer between $1$ and $12$, so the statement is True.`,
      `**B.** → True

$A^c$ is the evens and $B^c$ is the odds, so their intersection is empty: nothing is even and odd at once. That matches $(A\\cup B)^c=\\emptyset$, which is De Morgan in this extreme case:

$$A^c\\cap B^c=B\\cap A=\\emptyset.$$

The two sides agree, so the statement is True.`,
      `**C.** → True

$A\\cap B=\\emptyset$, so $(A\\cap B)^c=U$. The other side $A^c\\cup B^c$ is evens joined with odds, again $U$. Complementing the empty set relative to $U$ restores $U$ in full, so the statement is True.`,
      `**D.** → True

Deleting the odds from $U$ leaves the evens, so

$$A^c=\\{2,4,6,8,10,12\\}.$$

Complement of a partition block is the other block, which is $B$. The claim matches that list, so the statement is True.`,
      `**E.** → True

Removing nothing from $U$ leaves $U$, so

$$(A\\cap B)^c=\\emptyset^c=U=\\{1,2,3,4,5,6,7,8,9,10,11,12\\}.$$

The claimed list is that full universe. Complementing $\\emptyset$ relative to a universe always gives the universe back, so the statement is True.`,
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

Letter $s$ sits in $B$, so it sits in the union and cannot sit in the complement. The claim matches, so the statement is True.`,
      `**B.** → True

The overview listed $A^c=\\{s,t,u\\}$ and $B^c=\\{p,q,t,u\\}$. Their intersection is $\\{t,u\\}$, matching $(A\\cup B)^c$. Letter $s$ fails the intersection because $s\\in B$. De Morgan's first law is that agreement, so the statement is True.`,
      `**C.** → True

The overview listed $A\\cap B=\\{r\\}$, so $(A\\cap B)^c$ is every letter of $U$ except $r$. Joining the two complements produces the same five letters $\\{p,q,s,t,u\\}$. Letter $p$ misses $B$ and letter $s$ misses $A$; each escapes the intersection by escaping one set. The two sides agree, so the statement is True.`,
      `**D.** → True

Drop $p,q,r$ from $U$ and $\\{s,t,u\\}$ remain. The overview already recorded $A^c=\\{s,t,u\\}$. Complement does not also drop $s$ just because $s\\in B$; that would be $A^c\\cap B^c$. The claim matches, so the statement is True.`,
      `**E.** → True

Remove the single shared letter $r$ from $U$ and $\\{p,q,s,t,u\\}$ stay. Letters $p$ and $q$ stay because they miss $B$; $s$ stays because it misses $A$. The claimed five-letter list matches $(A\\cap B)^c$, so the statement is True.`,
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

The overview already counted $\\lvert A\\times B\\rvert=2\\cdot 3=6$. Product size is the number of cells, not the number of distinct symbols used. Two rows and three columns are six ordered pairs, so the statement is True.`,
      `**B.** → True

The pair $(1,x)$ has first slot from $A$ and second from $B$, so both membership tests succeed. Ordered pairs treat $(1,x)$ and $(x,1)$ as different objects; this letter is the number-first pair, so $(1,x)\\in A\\times B$, so the statement is True.`,
      `**C.** → False

The pair $(x,1)$ has a letter in the first slot, and $x\\notin A$. The first slot already fails, so the pair is out of $A\\times B$ (it does sit in $B\\times A$). Ordered pairs treat $(1,x)$ and $(x,1)$ as different objects, so the statement is False.`,
      `**D.** → False

Every pair in $A\\times B$ reads (number, letter); every pair in $B\\times A$ reads (letter, number). In particular $(1,x)$ sits in the first product and cannot sit in the second, because $1\\notin B$. Set equality needs identical members, not identical counts, so the statement is False.`,
      `**E.** → True

Size ignores order: $2\\cdot 3=6$ and $3\\cdot 2=6$. Both products hold six pairs even though the pairs themselves differ:

$$\\lvert A\\times B\\rvert=\\lvert B\\times A\\rvert=6.$$

The counts agree, so the statement is True.`,
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

The overview already counted $3\\cdot 2=6$ letter-first pairs. Product size counts ordered pairs, not the five symbols $m,n,p,1,2$. Three letters with two numbers each give six cells, so the statement is True.`,
      `**B.** → True

Membership in $A\\times B$ is a two-slot test. For $(m,1)$ both slots succeed: $m\\in A$ and $1\\in B$. That is the letter-first convention in this stem, so $(m,1)\\in A\\times B$, so the statement is True.`,
      `**C.** → False

The pair $(1,m)$ puts a number first, and $1\\notin A$. The first slot already fails, so the pair is out of $A\\times B$ (it does sit in $B\\times A$). The product $A\\times B$ is six letter-first pairs; none begins with $1$, so the statement is False.`,
      `**D.** → False

$A\\times B$ is letter-first; $B\\times A$ is number-first. Witness: $(m,1)$ is on the first list and missing from the second, because $m\\notin B$. Set equality needs identical members, not identical counts. The two products share no pair, so the statement is False.`,
      `**E.** → True

The product rule is commutative as a count:

$$3\\cdot 2=6,\\qquad 2\\cdot 3=6.$$

The counts agree while the member lists share no pair, so the statement is True.`,
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

Shared $3,5,7$ leave $A$; $1$ and $9$ stay because they miss $B$. The overview already placed those two in the $A$-only bucket, so $A\\setminus B=\\{1,9\\}$. The claimed leftover matches, so the statement is True.`,
      `**B.** → True

Difference $B\\setminus A$ lives inside $B$. The shared triple $3,5,7$ leaves $B$ because those numbers sit in $A$. The private $11$ and $13$ miss $A$, so they stay:

$$B\\setminus A=\\{11,13\\}.$$

The claimed leftover matches, so the statement is True.`,
      `**C.** → True

Symmetric difference joins the two outer piles. The overview listed $A\\setminus B=\\{1,9\\}$ and $B\\setminus A=\\{11,13\\}$, so

$$A\\triangle B=\\{1,9,11,13\\}.$$

Each of those four sits in exactly one of the original sets. Including $3$ would keep the overlap, which $A\\triangle B$ rejects. The claim matches, so the statement is True.`,
      `**D.** → True

A number in $A\\setminus B$ is outside $B$; a number in $B\\setminus A$ is inside $B$. Those demands cannot hold together, so

$$(A\\setminus B)\\cap(B\\setminus A)=\\emptyset.$$

The two leftover piles are disjoint by construction, so the statement is True.`,
      `**E.** → False

Union keeps the middle bucket $\\{3,5,7\\}$; symmetric difference throws it away:

$$A\\triangle B=\\{1,9,11,13\\},\\qquad A\\cup B=\\{1,3,5,7,9,11,13\\}.$$

The two operations differ by exactly the overlap. They would agree only if $A$ and $B$ were disjoint. They share $3,5,7$, so the statement is False.`,
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

Empty overlap empties the middle cell, not the left cell. The claimed leftover matches, so the statement is True.`,
      `**B.** → True

None of $B$'s odds is even, so nothing is deleted:

$$B\\setminus A=B=\\{1,3,5\\}.$$

The three odds all miss $A$, so they all stay. The claimed leftover matches, so the statement is True.`,
      `**C.** → True

With an empty middle bucket, symmetric difference is the two whole sets glued together:

$$A\\triangle B=\\{2,4,6\\}\\cup\\{1,3,5\\}=\\{1,2,3,4,5,6\\}.$$

Each of the six numbers sits in exactly one of $A$ or $B$. The claim matches, so the statement is True.`,
      `**D.** → True

The leftovers are the two whole sets, evens and odds. No even equals an odd, so their intersection is empty:

$$(A\\setminus B)\\cap(B\\setminus A)=A\\cap B=\\emptyset.$$

Two nonempty leftovers need not overlap, so the statement is True.`,
      `**E.** → True

Here the shared part is empty, so there is nothing extra for the union to add:

$$A\\triangle B=\\{1,2,3,4,5,6\\}=A\\cup B.$$

Disjointness is exactly the situation in which $A\\triangle B=A\\cup B$, so the statement is True.`,
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

Adding $22+15$ counts the six two-game players twice. Subtracting once restores a single copy. The overview already recovered $\\lvert A\\cup B\\rvert=31$. The claim is that same figure, so the statement is True.`,
      `**B.** → True

Chess-only is the chess headline minus the overlap:

$$22-6=16.$$

Those $16$ sit in $A$ and not in $B$. Reporting $22$ would keep the six who also play checkers. The claim is $16$, so the statement is True.`,
      `**C.** → True

Neither is the club total minus the union. The overview recovered the union $31$, so

$$40-31=9.$$

The leftover outside both circles is $9$, so the statement is True.`,
      `**D.** → False

Everyone playing both games is already someone playing at least one, so $A\\cap B\\subseteq A\\cup B$ always. Compare the two sizes: $\\lvert A\\cap B\\rvert=6$ and $\\lvert A\\cup B\\rvert=31$. Already $6<31$. Intersection cannot outnumber the union that contains it, so the statement is False.`,
      `**E.** → True

Checkers-only is the checkers headline minus the overlap:

$$15-6=9.$$

Those $9$ sit in $B$ and not in $A$, still inside the union. The neither-cell's $9$ sit outside the union. Same size, different membership tests. The claim is the checkers-only count $9$, so the statement is True.`,
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

The overview recovered $|A\\cup B|=50$. The claim is that same figure, so the statement is True.`,
      `**B.** → True

Spanish-only peels the overlap out of $A$:

$$34-12=22$$

The claim is $22$, so the statement is True.`,
      `**C.** → True

Neither is the leftover outside the union. The overview recovered $|A\\cup B|=50$, and the cohort has $60$ students:

$$60-50=10$$

The claim is $10$, so the statement is True.`,
      `**D.** → False

The intersection is a subset of the union, so its size cannot exceed the union size. The overview recovered $|A\\cap B|=12$ and $|A\\cup B|=50$:

$$12<50$$

The claim needs $|A\\cap B|>|A\\cup B|$. The inequality runs the other way, so the statement is False.`,
      `**E.** → True

French-only peels the overlap out of $B$:

$$28-12=16$$

The claim is $16$, so the statement is True.`,
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

The overview recovered $|A\\cup B|=33$. The claim is that same figure, so the statement is True.`,
      `**B.** → True

Pool-only peels the overlap out of $A$:

$$20-5=15$$

The claim is $15$, so the statement is True.`,
      `**C.** → True

Neither is the leftover outside the union. The overview recovered $|A\\cup B|=33$, and the gym has $50$ members:

$$50-33=17$$

The claim is $17$, so the statement is True.`,
      `**D.** → False

The intersection is a subset of the union, so its size cannot exceed the union size. The overview recovered $|A\\cap B|=5$ and $|A\\cup B|=33$:

$$5<33$$

The claim needs $|A\\cap B|>|A\\cup B|$. The inequality runs the other way, so the statement is False.`,
      `**E.** → True

Sauna-only peels the overlap out of $B$:

$$18-5=13$$

The claim is $13$, so the statement is True.`,
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

The overview recovered $|A\\cup B\\cup C|=53$. The claim is that same figure, so the statement is True.`,
      `**B.** → True

Anyone who does all three activities does each pair, so those $3$ people already sit inside $|A\\cap B|$, $|A\\cap C|$, and $|B\\cap C|$. The claim is that containment, so the statement is True.`,
      `**C.** → True

The pairwise total $|A\\cap B|=10$ still includes the cooks. Removing the triple isolates photography and hiking but not cooking:

$$10-3=7$$

The claim is $7$, so the statement is True.`,
      `**D.** → True

The triple group is a subset of each pair, so its size cannot exceed any pairwise size:

$$3\\le 10,\\qquad 3\\le 8,\\qquad 3\\le 7$$

Hence $3\\le\\min(10,8,7)$. The claimed inequality holds, so the statement is True.`,
      `**E.** → False

The overview recovered $|A|+|B|+|C|=75$ on the way to $|A\\cup B\\cup C|=53$. Already $53<75$. The claim needs $53>75$. The inequality runs the other way, so the statement is False.`,
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

Conjunction needs both halves true. The overview recovered $P$ true and $Q$ false, so

$$P\\land Q$$

is false. The claim is that $7$ is both prime and even, so the statement is False.`,
      `**B.** → True

Inclusive or needs only one true side. The overview recovered $P$ true, so

$$P\\lor Q$$

is true even though $Q$ is false. The claim is that $7$ is prime or even, so the statement is True.`,
      `**C.** → True

The inner conjunction $P\\land Q$ is already false, and negation flips it:

$$\\neg(P\\land Q)$$

is true. It is not the case that $7$ is both prime and even, so the statement is True.`,
      `**D.** → False

"Neither prime nor even" is $\\neg P\\land\\neg Q$. The overview recovered $P$ true, so $\\neg P$ is false and the conjunction of negations is false. Seven is prime, so the statement is False.`,
      `**E.** → False

The overview recovered $P\\lor Q$ true, so its negation is false:

$$\\neg(P\\lor Q)$$

fails. De Morgan identifies this with $\\neg P\\land\\neg Q$, which already fails because $7$ is prime, so the statement is False.`,
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

The overview showed that every prime $p>2$ is odd: the only even prime is $2$, which the domain excludes. The claim is that same statement, so the statement is True.`,
      `**B.** → False

A counterexample must live in the domain and fail the conclusion. The test $2>2$ is false, so $2$ never enters the quantified range. It is an even prime, but the statement never claimed anything about $2$, so the statement is False.`,
      `**C.** → True

Negating $\\forall p>2\\,(\\mathrm{Prime}(p)\\Rightarrow\\mathrm{Odd}(p))$ produces an existential with the conclusion flipped, still restricted to $p>2$:

$$\\exists p>2\\,(\\mathrm{Prime}(p)\\land\\mathrm{Even}(p))$$

The quoted sentence is that negation, so the statement is True.`,
      `**D.** → False

The converse says every odd number greater than $2$ is prime. Test $9$:

$$9>2,\\qquad 9=3\\cdot 3$$

The number $9$ is odd and composite. One counterexample kills the converse, so the statement is False.`,
      `**E.** → True

Euclid supplies infinitely many primes. Dropping the single prime $2$ leaves $3,5,7,\\ldots$, still infinite, all greater than $2$. Removing one element from an infinite set leaves an infinite set, so the statement is True.`,
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

The overview recovered that Maria has passed Intermediate Macroeconomics. The claim is that same fact, so the statement is True.`,
      `**B.** → True

The overview recovered that Maria has passed Principles of Economics. The claim is that same fact, so the statement is True.`,
      `**C.** → True

Composing the two arrows gives $A\\Rightarrow P$: Advanced cannot occur without Principles. That is what "Principles is necessary for Advanced" means, so the statement is True.`,
      `**D.** → False

Sufficient would require $P\\Rightarrow A$. A student may pass Principles, skip Intermediate, and never reach Advanced. The recovered chain runs $A\\Rightarrow I\\Rightarrow P$, not the reverse, so the statement is False.`,
      `**E.** → False

The two rules mention only "passed" and "enrolled." No grade, mark, or "perfect" appears. From Maria's enrolment we recover two pass/fail facts, not a score, so the statement is False.`,
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

The claim is that singleton, so the statement is True.`,
      `**B.** → True

Difference $P\\setminus E$ deletes a member of $P$ only when it also sits in $E$. Throwing $2$ out of $P$ leaves

$$P\\setminus E=\\{3,5,7,11,13\\}$$

The claim is that roster, so the statement is True.`,
      `**C.** → False

A universal on $P$ fails at one interior point. The member $x=2$ sits in $P$ and is even, so "every member of $P$ is odd" is false. One counterexample is enough, so the statement is False.`,
      `**D.** → True

The extra hypothesis $x\\ne 2$ removes the even prime. What remains is $\\{3,5,7,11,13\\}$, all odd, so the implication has no false row. Restricting the domain repairs the unrestricted universal, so the statement is True.`,
      `**E.** → False

Subsethood needs every member of $P$ to sit in $E$. Already $3\\in P$ and $3\\notin E$. One miss kills the inclusion, so the statement is False.`,
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

The overview recovered $P\\Rightarrow Q$: a number past $10$ cannot fail to be past $5$. That is what "$P$ is sufficient for $Q$" means, so the statement is True.`,
      `**B.** → False

Necessary would require $Q\\Rightarrow P$: every $x>5$ would have to satisfy $x>10$. Test $x=7$: $7>5$ holds and $7>10$ fails. The whole interval $(5,10]$ supplies further counterexamples, so the statement is False.`,
      `**C.** → True

"$Q$ is necessary for $P$" is the same recovered arrow $P\\Rightarrow Q$ read from the other end: $x>10$ cannot hold unless $x>5$ also holds. The necessary condition is the one the arrow points at, so the statement is True.`,
      `**D.** → False

Equivalence needs both arrows. The overview recovered $P\\Rightarrow Q$, but $Q\\Rightarrow P$ fails at $x=7$ and on the whole interval $(5,10]$. The two inequalities are not interchangeable, so the statement is False.`,
      `**E.** → True

A counterexample to $Q\\Rightarrow P$ must make $x>5$ true and $x>10$ false. Check $x=7$: $7>5$ holds and $7>10$ fails. The named witness sits in $(5,10]$, so the statement is True.`,
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

Applicant P has score $750\\ge 700$ and ratio $35\\%<40\\%$. Both halves of $R$ hold, so P satisfies both required conditions. The claim is that file check, so the statement is True.`,
      `**B.** → False

The recovered rule is $L\\Rightarrow R$. Meeting $R$ is necessary, not sufficient. P has $R$ true, but that does not force $L$. The reverse arrow $R\\Rightarrow L$ is not in the rule, so the statement is False.`,
      `**C.** → True

Applicant Q clears the score test $720\\ge 700$ but fails the ratio: $45\\%$ is not below $40\\%$. One false conjunct makes $R$ false. Q does not satisfy both required conditions, so the statement is True.`,
      `**D.** → True

The contrapositive of $L\\Rightarrow R$ is $\\neg R\\Rightarrow\\neg L$. Q fails the ratio test, so $R$ is false, and the loan is not approved. Failing a necessary condition forces refusal, so the statement is True.`,
      `**E.** → False

A ratio below $40\\%$ is only one conjunct of $R$. An applicant with ratio $30\\%$ and score $650$ already fails the score test, so $R$ is false and approval is blocked. Even a full $R$ would still be only necessary, not sufficient, so the statement is False.`,
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

The quoted sentence is that negation, so the statement is True.`,
      `**B.** → False

Squares of reals land in $[0,\\infty)$. No real $x$ satisfies $x^{2}=-1$. The existence claim would succeed over $\\mathbb C$, but the universe here is $\\mathbb R$, so the statement is False.`,
      `**C.** → True

Negating an existential produces a universal of the negated predicate. The inequality $>$ flips to $\\le$, including the boundary $100$:

$$\\neg\\exists x\\,(x>100)\\equiv\\forall x\\,(x\\le 100)$$

The quoted sentence is that negation, so the statement is True.`,
      `**D.** → True

Because $x$ is announced first, $y$ may be built from it. The recipe $y=x+1$ works for every $x>0$:

$$x+1>x$$

Each $x$ gets its own $y$, so the statement is True.`,
      `**E.** → False

Now a single $y$ must be fixed first and then outrank every positive $x$. Whatever $y$ is offered,

$$x=\\max(y+1,1)$$

is a positive number bigger than it. No champion exists, so the statement is False.`,
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

The criterion is $D\\Rightarrow S$, and $S$ demands both symptoms. Patient R holds the diagnosis, so both symptoms must be present. A diagnosis on A alone would be $D$ with $\\neg B$, which breaks the necessary condition, so the statement is False.`,
      `**B.** → False

Patient S has A but not B, so the conjunction $S$ is false. The contrapositive $\\neg S\\Rightarrow\\neg D$ then blocks the diagnosis. Missing either half of an "and" is enough, so the statement is False.`,
      `**C.** → False

Sufficient would be $S\\Rightarrow D$. The doctor states the opposite: both symptoms do not guarantee the diagnosis, because other conditions must still be ruled out. $S$ is necessary and not sufficient, so the statement is False.`,
      `**D.** → True

Missing symptom A makes the conjunction $S$ false, regardless of B. Then $\\neg S\\Rightarrow\\neg D$ blocks the diagnosis. An "and" is destroyed by either half, so no A means no diagnosis with X, so the statement is True.`,
      `**E.** → False

The doctor explicitly allows both symptoms while other conditions are still being excluded: $S$ without $D$. That open gap is what separates a necessary condition from a sufficient one. Claiming the gap is impossible is claiming sufficiency, so the statement is False.`,
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

Divisible by $3$ and by $5$ means divisible by $15$, and $15$ sits inside $\\{1,\\ldots,20\\}$. One witness is all an existential needs, so the statement is True.`,
      `**B.** → True

A counterexample would have to be a multiple of $4$ in the range that is not even. Every multiple of $4$ can be written $4k=2(2k)$, so it is even. The list in this universe is $\\{4,8,12,16,20\\}$, each even. There is no odd multiple of four, so the statement is True.`,
      `**C.** → False

The flipped implication breaks at $x=2$: divisible by $2$, not by $4$. One counterexample inside the range kills a universal, so the statement is False.`,
      `**D.** → True

An implication fails only where the "if" holds and the "then" fails, so the negation of $\\forall x\\,(\\mathrm{Prime}(x)\\Rightarrow\\mathrm{Odd}(x))$ is

$$\\exists x\\,(\\mathrm{Prime}(x)\\land\\mathrm{Even}(x))$$

still restricted to $\\{1,\\ldots,20\\}$. The quoted sentence is that negation, so the statement is True.`,
      `**E.** → True

The negation asks for an even prime in the range, and $2$ is one: divisors $1$ and $2$ only, and even. One witness settles the existential, so the statement is True.`,
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

Banned means $v\\ge 3$. Person T has $v=2$, so $2\\ge 3$ fails and T is not banned. The biconditional "member iff not banned" then forces membership, so the statement is True.`,
      `**B.** → False

Person U has $v=4$, and $4\\ge 3$, so U is banned. The same biconditional makes banned the exact opposite of member, so U is not a member, so the statement is False.`,
      `**C.** → True

"Member iff not banned" means the two lists never overlap and never leave a gap: every person is in exactly one of them. That is the definition of complementary sets, so the statement is True.`,
      `**D.** → False

"Three or more" includes $v=3$. Check $3\\ge 3$: true, so a person with exactly $3$ violations is banned, hence not a member. The count $v=3$ is not discretionary, so the statement is False.`,
      `**E.** → False

For each integer $v$, the test $v\\ge 3$ returns a definite yes or no. Counts $0,1,2$ are members; counts $3,4,5,\\ldots$ are banned. No $v$ is left undecided, so the statement is False.`,
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

A universal $\\forall x\\,P(x)$ is false as soon as one $x$ has $\\neg P(x)$. That one counterexample is a complete disproof. Nothing further is required, so the statement is True.`,
      `**B.** → True

A counterexample to "all primes are odd" must be prime and fail to be odd. The number $2$ has divisors $1$ and $2$ only, so it is prime, and it is even. Both halves succeed, so the statement is True.`,
      `**C.** → True

$P\\Rightarrow Q$ fails only in the case $P\\land\\neg Q$. A contradiction proof assumes that unique failure case and derives an impossibility, showing the failure cannot occur. The description in the statement is that method, so the statement is True.`,
      `**D.** → False

To prove "$\\sqrt{2}$ is irrational" by contradiction, assume the negation: $\\sqrt{2}$ is rational, so $\\sqrt{2}=\\frac{a}{b}$ in lowest terms. Assuming irrationality at the start would assume the conclusion rather than its opposite, so the statement is False.`,
      `**E.** → False

One confirming example never proves a universal claim. The odd prime $3$ fits "all primes are odd" and still leaves $2$ untested. Checking finitely many favourable cases never rules out a later counterexample, so the statement is False.`,
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

The overview recovered that $P\\Rightarrow Q$ fails only as $P\\land\\neg Q$: rain and an uncancelled picnic. The quoted negation is that unique failure case, so the statement is True.`,
      `**B.** → False

The converse $Q\\Rightarrow P$ reads the rule backwards. On the overview's dry venue-conflict day, $P$ is false and $Q$ is true: the original holds, while the converse fails. The organizer never promised that rain is the only cancelling cause, so the statement is False.`,
      `**C.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$. On that same dry cancelled day, $\\neg P$ is true and $\\neg Q$ is false, so the inverse fails while the original still holds. Inverse pairs with converse, not with the original, so the statement is False.`,
      `**D.** → True

On the venue-conflict day, rain is false and cancelled is true. The inverse demanded "no rain, so no cancellation," and the cancellation happened, so the inverse is broken. The original $P\\Rightarrow Q$ is true whenever $P$ is false, so a dry cancellation never tests the organizer's promise, so the statement is True.`,
      `**E.** → True

Swap and negate: $\\neg Q\\Rightarrow\\neg P$, "if the picnic was not cancelled, then it did not rain." That is the contrapositive, which always shares the original's truth value. Once the organizer's rule is granted, this rewriting comes with it, so the statement is True.`,
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

Inclusive "or" means at least one of $X,Y$. The $15$ both-buyers have both true, so they satisfy "at least one" and stay inside the count. Exclusive or would drop those $15$; mathematical or does not, so the statement is True.`,
      `**B.** → True

Adding $40$ and $35$ counts the $15$ both-buyers twice, so subtract them once:

$$|X\\cup Y|=40+35-15=60$$

The claim is $60$, so the statement is True.`,
      `**C.** → True

Exclusive or keeps only the two outer regions. X-only is $40-15=25$ and Y-only is $35-15=20$, so

$$25+20=45$$

The claim is $45$, so the statement is True.`,
      `**D.** → True

The four truth rows of $P\\Leftrightarrow Q$ are TT true, FF true, TF false, FT false. The two true rows are exactly the rows where $P$ and $Q$ agree. "Always the same truth value" is that description, so the statement is True.`,
      `**E.** → False

"At least one true" is the truth condition for $P\\lor Q$, not for $P\\Leftrightarrow Q$. The mixed row $P$ true, $Q$ false has at least one true part, yet the biconditional is false there, so the statement is False.`,
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

Student K cleared attendance ($85\\%\\ge 80\\%$) but scored $48<50$, so $F$ is false and $A\\land F$ collapses. One false conjunct makes the whole pass condition false. Near-misses do not count: $48$ is not $50$, so the statement is False.`,
      `**B.** → False

Student L's $90$ clears the exam, but $75\\%<80\\%$ fails attendance. The conjunction never lets the strong half rescue the weak half, so L does not pass, so the statement is False.`,
      `**C.** → False

Compensation would let a high exam score repair low attendance. Student L is the test file: $90$ on the exam with $75\\%$ attendance still yields $A$ false, so $A\\land F$ is false. Exam points cannot repair attendance, so the statement is False.`,
      `**D.** → True

A score below $50$ makes $F$ false, whether the score is $49$ or $10$. For K, $48<50$ already falsifies $F$, so $A\\land F$ is false even though attendance cleared. A threshold recognises no near-misses, so the statement is True.`,
      `**E.** → True

Compare $(80\\%,50)$ with $(79\\%,100)$. The first clears both tests and passes; the second fails on attendance, yet looks far stronger on an average. Because the rule checks two thresholds instead of one average, reversals like this can happen, so the statement is True.`,
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

The filter is $\\neg S\\land\\neg O$. Item M is on sale, so $\\neg S$ is already false, and a false conjunct hides M. Being in stock does not rescue an on-sale item, so the statement is False.`,
      `**B.** → False

Item N is out of stock, so $\\neg O$ fails. The same conjunction fails on the other half, so N is hidden too. Not being on sale is not enough, so the statement is False.`,
      `**C.** → False

The overview recovered $\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$, not $\\neg S\\lor\\neg O$. On item M, the wrong OR form would display M (in stock), while the real AND hides M. Two formulas that disagree on one item are not equivalent, so the statement is False.`,
      `**D.** → True

The overview recovered $\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$. In English that is "not on sale and not out of stock," i.e. neither on sale nor out of stock. The claim is that rewrite, so the statement is True.`,
      `**E.** → True

Item K is not on sale and is in stock, so both $\\neg S$ and $\\neg O$ hold. The filter displays K, so the statement is True.`,
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

From $P\\Rightarrow Q$, the contrapositive is $\\neg Q\\Rightarrow\\neg P$: no rate rise, therefore inflation does not exceed $10\\%$, i.e. at most $10\\%$. That is the quoted sentence. "Not above $10$" and "at most $10$" are the same cutoff, so the statement is True.`,
      `**B.** → False

The converse $Q\\Rightarrow P$ would say every rate rise comes from inflation above $10\\%$. A currency-defence rise at $4\\%$ inflation has $Q$ true and $P$ false: the original is untouched because $P$ is false, while the converse fails. Equivalence would need both arrows, so the statement is False.`,
      `**C.** → True

"$P$ is sufficient for $Q$" means $P\\Rightarrow Q$. The given rule is exactly that arrow: inflation above $10\\%$ forces a rate rise. $P$ alone guarantees $Q$, so the statement is True.`,
      `**D.** → False

"$P$ is necessary for $Q$" would be $Q\\Rightarrow P$, the converse. The given arrow points the other way: $Q$ is necessary for $P$, not $P$ for $Q$. The rule does not force high inflation whenever rates rise, so the statement is False.`,
      `**E.** → False

Observing a rate rise ($Q$ true) and inferring inflation above $10\\%$ ($P$ true) is affirming the consequent. The premises give $P\\Rightarrow Q$, never $Q\\Rightarrow P$. A $4\\%$ defence rise is a case where $Q$ holds and $P$ fails, so the statement is False.`,
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

The overview recovered that $Q$ is true from $P\\Leftrightarrow Q$ and $P$ true. The claim is that same fact, so the statement is True.`,
      `**B.** → True

The overview recovered that $R$ is true from $Q\\Leftrightarrow R$ and $Q$ true. The claim is that same fact, so the statement is True.`,
      `**C.** → True

If $P$ agrees with $Q$ and $Q$ agrees with $R$, then $P$ agrees with $R$. In symbols, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$ yield $P\\Leftrightarrow R$. The first and third must share a truth value, so the statement is True.`,
      `**D.** → True

Biconditionals work in both directions, so the chain can be walked from either end. If $R$ were false, $Q\\Leftrightarrow R$ would force $Q$ false, and $P\\Leftrightarrow Q$ would force $P$ false, so the statement is True.`,
      `**E.** → False

$P\\Leftrightarrow R$ alone does not mention $Q$. The assignment $P$ true, $R$ true, $Q$ false satisfies $P\\Leftrightarrow R$ while breaking $P\\Leftrightarrow Q$. Knowing only the end link leaves the middle free, so the statement is False.`,
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

The claim is that same implication, so the statement is True.`,
      `**B.** → False

$S \\Rightarrow \\neg C$ would say that a timely stop guarantees the concert. The overview’s rule is silent once $S$ is true. A 5 PM stop plus a power failure has $S$ true and $C$ true: $\\neg S \\Rightarrow C$ holds while $S \\Rightarrow \\neg C$ fails, so the statement is False.`,
      `**C.** → True

Apply the overview identity to $\\neg S \\Rightarrow C$:

$$\\neg(\\neg S) \\lor C \\equiv S \\lor C$$

OR is symmetric, so $C \\lor S$ is the same formula. Inclusive or still allows $S$ and $C$ together, so the statement is True.`,
      `**D.** → False

Once $S$ is true, the antecedent $\\neg S$ is false, so $\\neg S \\Rightarrow C$ does not assert $\\neg C$. A power cut can still cancel the concert after the rain stops, so the statement is False.`,
      `**E.** → True

The contrapositive of $\\neg S \\Rightarrow C$ swaps and negates both sides:

$$\\neg C \\Rightarrow S$$

A concert that went ahead has $\\neg C$, so the rain must have stopped before 6 PM. Contrapositive shares the original truth value, so the statement is True.`,
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

P qualifies, so the statement is True.`,
      `**B.** → False

Rider Q is $67$, has a qualifying disability, and earns \\$50,000. Then $A$ is true, $D$ is true, and $L$ is false, so $D \\lor L$ holds on the disability half:

$$A \\land (D \\lor L) = \\mathrm{T} \\land (\\mathrm{T} \\lor \\mathrm{F}) = \\mathrm{T}$$

Q does qualify. High income is not a veto while $D$ is true, so the statement is False.`,
      `**C.** → False

Automatic disqualification by income would require $L$ to sit outside the bracket as a second gate. The overview put $L$ inside an or with $D$. Rider Q has $A$ true, $D$ true, and $L$ false, so $D \\lor L$ still holds and Q qualifies, so the statement is False.`,
      `**D.** → True

Take a $70$-year-old with no disability and income \\$25,000. Then $A$ is true, $D$ is false, and $L$ is false because \\$25,000 is above the cutoff, so

$$D \\lor L = \\mathrm{F} \\lor \\mathrm{F} = \\mathrm{F}$$

and the conjunction fails. That rider does not qualify, so the statement is True.`,
      `**E.** → False

Sufficiency of age would mean every rider with $A$ true gets the discount. The formula is $A \\land (D \\lor L)$, so age leaves the bracket untouched. A $70$-year-old with no disability and income \\$25,000 has $A$ true and $D \\lor L$ false, so the discount fails. Age is necessary, not sufficient, so the statement is False.`,
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

The first positive integer is $n=1$. The left side is $1$, and the right side is

$$\\frac{1 \\cdot 2}{2} = 1$$

The two sides agree, so the statement is True.`,
      `**B.** → True

The inductive step is the neighbour-to-neighbour move: assume the formula at $n=k$, then prove it at $n=k+1$. That is the standard inductive step for this claim, so the statement is True.`,
      `**C.** → False

Checking $n=1,2,3,4,5$ verifies five instances. Induction on the positive integers also needs the inductive step, which covers every later $n$ at once. Five examples leave $n=6$ untouched, so the statement is False.`,
      `**D.** → True

Assume the formula at $n=k$:

$$1+2+\\cdots+k=\\frac{k(k+1)}{2}$$

Add the next term:

$$1+2+\\cdots+k+(k+1)=\\frac{k(k+1)}{2}+(k+1)$$

$$=\\frac{k(k+1)+2(k+1)}{2}$$

$$=\\frac{(k+1)(k+2)}{2}$$

That is the formula at $n=k+1$, so the statement is True.`,
      `**E.** → True

Substitute $n=10$ into the closed form:

$$\\frac{10 \\cdot 11}{2}=55$$

The claimed sum is $55$, so the statement is True.`,
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

That is the converse of $P \\Rightarrow Q$, not an equivalent form, so the statement is False.`,
      `**B.** → True

“A sufficient condition for unemployment to decrease is that inflation increases” makes $P$ sufficient for $Q$:

$$P \\Rightarrow Q$$

That is the original claim, so the statement is True.`,
      `**C.** → False

“Unemployment can only decrease if inflation increases” is $Q$ only if $P$, which is

$$Q \\Rightarrow P$$

That is the converse, not an equivalent of $P \\Rightarrow Q$, so the statement is False.`,
      `**D.** → True

“If unemployment does not decrease, then inflation does not increase” is

$$\\neg Q \\Rightarrow \\neg P$$

That is the contrapositive of $P \\Rightarrow Q$, so the statement is True.`,
      `**E.** → True

“A necessary condition for inflation to increase is that unemployment decreases” makes $Q$ necessary for $P$, which is

$$P \\Rightarrow Q$$

That is the original claim, so the statement is True.`,
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

The overview recovered $C$ from $D$ and $D \\Rightarrow C$. Flight 305 is cancelled today, so the statement is True.`,
      `**B.** → True

The overview recovered $O$ from $C$ and $C \\Rightarrow O$. The ground crew works overtime today, so the statement is True.`,
      `**C.** → True

Statements (1) and (3) mention only $D$ and $C$. Without (2) the chain stops at the cancellation and never names overtime, so $O$ cannot be concluded, so the statement is True.`,
      `**D.** → False

If Flight 202 is not delayed, the antecedent of $D \\Rightarrow C$ is false, so (1) is silent. It does not assert $\\neg C$. Flight 305 can still be cancelled for another reason, so the statement is False.`,
      `**E.** → False

The overview’s chain forces $O$ from (1), (2), and (3). There is no model of those three facts in which the crew does not work overtime, so the statement is False.`,
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

The overview’s negation is $P \\land \\neg Q$: a student who studied at least $10$ hours and did not pass. That is the claimed sentence, so the statement is True.`,
      `**B.** → False

The converse is $Q \\Rightarrow P$. It is equivalent to the inverse, not to $P \\Rightarrow Q$. A student can pass without the $10$ hours, so the converse need not hold, so the statement is False.`,
      `**C.** → True

Anna has $\\neg P$ and $Q$. The original $P \\Rightarrow Q$ is silent when $P$ is false, so she is not a counterexample to it. The converse $Q \\Rightarrow P$ has a true antecedent and a false consequent, so she refutes the converse, so the statement is True.`,
      `**D.** → False

The inverse is $\\neg P \\Rightarrow \\neg Q$. The contrapositive is $\\neg Q \\Rightarrow \\neg P$. Those two are converses of each other, not equivalents. The inverse matches the converse, not the contrapositive, so the statement is False.`,
      `**E.** → True

The contrapositive is $\\neg Q \\Rightarrow \\neg P$. From a failure ($\\neg Q$) it concludes that the student studied less than $10$ hours. That inference is licensed by the original claim, so the statement is True.`,
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

In $F \\Rightarrow P$, the antecedent $F$ is sufficient for $P$. Missing the deadline is therefore sufficient for a penalty, so the statement is True.`,
      `**B.** → False

The converse is $P \\Rightarrow F$. A contractor who finishes on time but delivers faulty work can still be fined: $F$ false and $P$ true. That case keeps the original clause true while the converse fails, so the statement is False.`,
      `**C.** → True

The contrapositive of $F \\Rightarrow P$ is $\\neg P \\Rightarrow \\neg F$: if no penalty applies, the contractor did not miss the deadline. It is equivalent to the original clause, so the statement is True.`,
      `**D.** → False

The inverse is $\\neg F \\Rightarrow \\neg P$. It belongs to the converse pair, not to the original. On-time completion with a fine for faulty work has $\\neg F$ and $P$, which refutes the inverse while the clause stands, so the statement is False.`,
      `**E.** → True

Swapping and negating both sides of the converse $P \\Rightarrow F$ produces the inverse $\\neg F \\Rightarrow \\neg P$. Those two are contrapositives of each other, so they always share a truth value, even though neither is equivalent to $F \\Rightarrow P$ in general, so the statement is True.`,
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

M is not eligible, so the statement is False.`,
      `**B.** → True

Student N has GPA $3.6$, so $G$ is true, $45$ credits, so $C$ is false, and a waiver, so $W$ is true. Then $C \\lor W$ holds and

$$G \\land (C \\lor W) = \\mathrm{T}$$

N is eligible, so the statement is True.`,
      `**C.** → True

Give M a waiver and keep GPA $3.7$ with $50$ credits. Then $G$ is still true and $W$ fills the bracket, so $G \\land (C \\lor W)$ becomes true. M would be eligible, so the statement is True.`,
      `**D.** → False

A waiver fills only $C \\lor W$. The formula still requires $G$. A student with GPA below $3.5$ and a waiver has $G$ false, so the conjunction fails, so the statement is False.`,
      `**E.** → False

If GPA is below $3.5$, then $G$ is false. For any $C$ and $W$,

$$G \\land (C \\lor W) = \\mathrm{F}$$

No mix of waiver and credits rescues a low GPA, so the statement is False.`,
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

Traveler M has a documented medical emergency, so $M$ is true, and bought the policy $20$ days out, so $T$ is true. Then

$$(M \\lor A) \\land T = \\mathrm{T}$$

The claim is paid, so the statement is True.`,
      `**B.** → False

Traveler N has an airline cancellation, so $A$ is true, but bought the policy only $5$ days out, so $T$ is false. Then

$$(M \\lor A) \\land T = \\mathrm{F}$$

The claim is not paid, so the statement is False.`,
      `**C.** → True

If the policy is bought fewer than $14$ days before departure, $T$ is false. Then $(M \\lor A) \\land T$ is false for every reason $M$ or $A$. No payout is possible, so the statement is True.`,
      `**D.** → False

The timing test $T$ is one conjunct, not the whole ticket. A traveler who buys $14$ days ahead but cancels for a reason other than $M$ or $A$ has an empty bracket, so the payout fails, so the statement is False.`,
      `**E.** → False

Airline cancellation fills only the bracket. The formula still requires $T$. Without the $14$-day purchase, $(M \\lor A) \\land T$ is false even when $A$ is true, so the statement is False.`,
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

The overview’s negation is $P \\land \\neg Q$: a citizen who is not eligible to vote. That is the claimed sentence, so the statement is True.`,
      `**B.** → True

The contrapositive is $\\neg Q \\Rightarrow \\neg P$. John is not eligible, so $\\neg Q$ holds, and we may conclude that John is not a citizen. That is modus ponens on the contrapositive, so the statement is True.`,
      `**C.** → False

Maria is a citizen who chooses not to register. Eligibility $Q$ is the right, not the act of voting, so $Q$ remains true. The pair $P$ true and $Q$ true satisfies $P \\Rightarrow Q$ and is not a counterexample, so the statement is False.`,
      `**D.** → True

The converse is $Q \\Rightarrow P$. A country that lets certain non-citizen residents vote has $Q$ true and $P$ false, which refutes the converse while leaving $P \\Rightarrow Q$ untouched, so the statement is True.`,
      `**E.** → True

The inverse $\\neg P \\Rightarrow \\neg Q$ is the contrapositive of the converse $Q \\Rightarrow P$. Those two always share a truth value, so the statement is True.`,
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

The memo concludes $P$ from $P \\Rightarrow Q$ and $Q$. That is affirming the consequent, which is invalid. Sales can rise for another reason, so the statement is False.`,
      `**B.** → False

The restatement argues from $P \\Rightarrow Q$ and $\\neg P$ to $\\neg Q$. That is denying the antecedent, the inverse inference. The same competitor example has $\\neg P$ and $Q$, so $\\neg Q$ need not follow, so the statement is False.`,
      `**C.** → True

The restatement argues from $P \\Rightarrow Q$ and $\\neg Q$ to $\\neg P$. That is modus tollens: it runs the contrapositive $\\neg Q \\Rightarrow \\neg P$ forward. The inference is valid, so the statement is True.`,
      `**D.** → True

The missing direction is $Q \\Rightarrow P$. A biconditional $P \\Leftrightarrow Q$ supplies both arrows, and then $Q$ really does yield $P$. That is the strengthening the original conclusion needs, so the statement is True.`,
      `**E.** → True

“If it rains, the ground gets wet” with “the ground is wet” concluding “it is raining” is the same form: $P \\Rightarrow Q$ and $Q$, therefore $P$. Both arguments affirm the consequent, so the statement is True.`,
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

Zero is rational, so the pair is a counterexample, so the statement is True.`,
      `**B.** → True

A universal statement is false as soon as one counterexample exists. One pair of irrationals that sum to a rational is enough, so the statement is True.`,
      `**C.** → True

A proof by contradiction assumes the negation of the target. The target “there is no largest prime” is negated by “there is a largest prime, say $p$.” That is the opening line, so the statement is True.`,
      `**D.** → False

Checking $x=1$ and $x=2$ verifies two instances of a universal claim. Every other $x$ is still untested, so two examples do not constitute a proof, so the statement is False.`,
      `**E.** → True

An existential claim $\\exists x\\, P(x)$ is proved by exhibiting one value at which $P$ holds. That one witness is the whole job, so the statement is True.`,
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

“This dolphin lives in water, so it must be a fish” argues from $Q$ to $P$. That is the converse. A dolphin is a counterexample to the converse, so the argument is invalid, so the statement is True.`,
      `**B.** → True

“This lizard does not live in water, so it is not a fish” argues from $\\neg Q$ to $\\neg P$. That is the contrapositive, which is equivalent to the rule, so the argument is valid, so the statement is True.`,
      `**C.** → False

“This snake is not a fish, so it does not live in water” argues from $\\neg P$ to $\\neg Q$, the inverse. Inverse reasoning is not equivalent to $P \\Rightarrow Q$. Water snakes exist, so the pattern is not guaranteed, so the statement is False.`,
      `**D.** → True

The overview’s negation of $\\forall x\\,(P(x) \\Rightarrow Q(x))$ is $\\exists x\\,(P(x) \\land \\neg Q(x))$: a fish that does not live in water. That is the claimed sentence, so the statement is True.`,
      `**E.** → False

A counterexample to “all fish live in water” must be a fish that does not live in water. A dolphin has $\\neg P$ and $Q$, the opposite shape, so it does not refute the rule, so the statement is False.`,
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

“A customer paid within $30$ days and received the discount” is $P \\land Q$, which is the policy being honoured. The negation is $P \\land \\neg Q$, so the statement is False.`,
      `**B.** → False

The converse is $Q \\Rightarrow P$. A holiday promotion can give the discount to a late payer: $Q$ true and $P$ false. That keeps the policy true while the converse fails, so the statement is False.`,
      `**C.** → True

Alex paid on day $45$ and received no discount, so $P$ is false and $Q$ is false. The policy $P \\Rightarrow Q$ is silent when $P$ is false, so Alex is consistent with it and is not a counterexample, so the statement is True.`,
      `**D.** → False

The inverse is $\\neg P \\Rightarrow \\neg Q$. It is equivalent to the converse, not to the policy. A late payer who still receives a promotional discount refutes the inverse while the original stands, so the statement is False.`,
      `**E.** → False

The contrapositive $\\neg Q \\Rightarrow \\neg P$ is equivalent to $P \\Rightarrow Q$, so it is guaranteed whenever the policy is. The claim that only the original carries any guarantee is wrong, so the statement is False.`,
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

“If revenue exceeds \\$1 million, then the company does not file” is $P \\Rightarrow \\neg Q$, a rival rule for every large company. The negation is $P \\land \\neg Q$, one offender, so the statement is False.`,
      `**B.** → False

The converse is $Q \\Rightarrow P$. A company with revenue \\$300,000 that files voluntarily has $Q$ true and $P$ false, which refutes the converse while the regulation stands, so the statement is False.`,
      `**C.** → False

The inverse is $\\neg P \\Rightarrow \\neg Q$. It matches the converse, not $P \\Rightarrow Q$. Voluntary filing by a small company has $\\neg P$ and $Q$, so the inverse fails, so the statement is False.`,
      `**D.** → True

The contrapositive of $P \\Rightarrow Q$ is $\\neg Q \\Rightarrow \\neg P$: if a company does not file an audit, then its revenue does not exceed \\$1 million. That form is equivalent to the regulation, so the statement is True.`,
      `**E.** → True

Company X has revenue \\$2 million and filed no audit, so $P$ is true and $Q$ is false. That is exactly $P \\land \\neg Q$, which refutes $P \\Rightarrow Q$, so the statement is True.`,
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

$$H \\land W \\land T = \\mathrm{F}$$

Pilot A is not granted the license, so the statement is False.`,
      `**B.** → False

Pilot B has $240$ hours, so $H$ is false, and passed both exams. Then

$$H \\land W \\land T = \\mathrm{F}$$

Pilot B is not granted the license, so the statement is False.`,
      `**C.** → False

Hours alone make $H$ true and leave $W$ and $T$ untouched. The formula still requires both exams. $H$ is necessary, not sufficient, so the statement is False.`,
      `**D.** → True

If the practical test is failed, $T$ is false. Then $H \\land W \\land T$ is false for every $H$ and $W$. Extra hours and a passed written exam cannot rescue a failed practical, so the statement is True.`,
      `**E.** → True

Pilot A has $300$ hours, so $H$ is true, and failed the practical test, so $T$ is false. That is a pilot with more than $250$ hours who is not licensed, so the statement is True.`,
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

$$(S \\lor C) \\land D = \\mathrm{T}$$

P is approved. The low score is not a veto while $C$ holds, so the statement is False.`,
      `**B.** → False

Applicant Q has score $720$, so $S$ is true, and ratio $45\\%$, so $D$ is false. Then

$$(S \\lor C) \\land D = \\mathrm{F}$$

Q is not approved, so the statement is False.`,
      `**C.** → False

Score at least $700$ fills only the bracket. The formula still requires $D$. Applicant Q has $S$ true and $D$ false, so Q is denied, so the statement is False.`,
      `**D.** → True

A ratio of $40\\%$ or above makes $D$ false, because the rule needs a ratio strictly below $40\\%$. Then $(S \\lor C) \\land D$ is false for every $S$ and $C$. Neither a high score nor a co-signer offsets it, so the statement is True.`,
      `**E.** → True

Applicant P has score $650$, a co-signer, and ratio $35\\%$. Then $S$ is false, $C$ is true, and $D$ is true, so $(S \\lor C) \\land D$ holds. That is an approval with score below $700$, so the statement is True.`,
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

The converse is $Q \\Rightarrow P$. Sam has $Q$ true and $P$ false, which is exactly the counterexample the converse needs, so the statement is True.`,
      `**B.** → True

“Not every point-earning diner ordered dessert” is the negation of the converse $Q \\Rightarrow P$. A proof by contradiction assumes that converse, then produces Sam, who has $Q$ and $\\neg P$, and the assumption fails, so the statement is True.`,
      `**C.** → False

The original policy fails only on $P \\land \\neg Q$: dessert with no point. Sam has $\\neg P$ and $Q$, the opposite shape, so he is consistent with $P \\Rightarrow Q$, so the statement is False.`,
      `**D.** → True

The negation of $P \\Rightarrow Q$ is $P \\land \\neg Q$: a diner who ordered dessert and did not receive a point. That is not Sam’s birthday case, so the statement is True.`,
      `**E.** → True

The inverse is $\\neg P \\Rightarrow \\neg Q$. Sam has $\\neg P$ and $Q$, so the inverse has a true antecedent and a false consequent. Sam refutes it, so the statement is True.`,
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

which is a positive integer, and $4 \\cdot 25 = 100$. A partner exists, so the statement is True.`,
      `**B.** → False

For $m=3$,

$$n = \\frac{100}{3}$$

which is not an integer. The equation has only that one solution, so no positive integer $n$ works, so the statement is False.`,
      `**C.** → False

A “for every $m$” claim fails as soon as one $m$ has no partner. For $m=3$ there is no positive integer $n$ with $3n=100$, so the overall statement is false, so the statement is False.`,
      `**D.** → True

Negating $\\forall m\\, \\exists n : mn=100$ flips both quantifiers and the matrix:

$$\\exists m\\, \\forall n : mn \\neq 100$$

That is the claimed sentence, so the statement is True.`,
      `**E.** → True

The reversed claim is $\\exists n\\, \\forall m : mn=100$: one fixed $n$ serving every $m$. Then $m=1$ would need $n=100$ while $m=2$ would need $n=50$, so no such $n$ exists. The reversed statement is false, so the statement is True.`,
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

The overview recovered $D$ from clue (3). Dan is guilty, so the statement is True.`,
      `**B.** → False

Exactly one suspect is guilty, and that place is already held by Dan. Ann is therefore innocent, so the statement is False.`,
      `**C.** → False

Cara’s innocence already follows from clue (3) together with uniqueness: Dan is guilty, so Cara is not. Clue (2) is not needed for that conclusion, so the statement is False.`,
      `**D.** → True

Clue (1) is $A \\Rightarrow \\neg D$. Ann is innocent, so the antecedent $A$ is false and the implication is automatically true. It does not constrain the completed roster any further, so the statement is True.`,
      `**E.** → True

Clue (3) is the atomic sentence $D$. Uniqueness is not required to read it: (3) alone already says that Dan is guilty, so the statement is True.`,
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

The overview recovered that X is a truth-teller. The claim is that same type, so the statement is True.`,
      `**B.** → False

The overview recovered that Y is a liar. The claim is that Y is a truth-teller, so the statement is False.`,
      `**C.** → True

The overview recovered that Y is a liar, so Y's sentence is false. Y claimed that X and Y are both liars. That conjunction is therefore false, so the statement is True.`,
      `**D.** → False

The overview recovered one surviving assignment: X a truth-teller and Y a liar. The liar-X case collapsed. One consistent picture is not two, so the statement is False.`,
      `**E.** → True

The overview recovered that a lying X forces Y to be both a truth-teller and a liar. Those two demands cannot hold together, so the liar-X hypothesis is a contradiction, so the statement is True.`,
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

If Statement 1 holds, some student $s_0$ satisfies $G(s_0,e)$ for every exam $e$. That same $s_0$ may be handed to each exam in turn, which is Statement 2. Statement 1 therefore implies Statement 2, so the statement is True.`,
      `**B.** → False

Take two exams and two students: X tops Exam 1 only, Y tops Exam 2 only. Each exam has a high scorer, so Statement 2 holds, yet nobody clears both exams, so Statement 1 fails. The reverse implication does not hold, so the statement is False.`,
      `**C.** → False

Equivalence needs both directions. Statement 1 implies Statement 2, but a two-student class with a different top scorer on each exam makes Statement 2 true and Statement 1 false. The reverse arrow is missing, so the statements are not equivalent, so the statement is False.`,
      `**D.** → True

If each exam has a high scorer, but the high scorer keeps changing, then Statement 2 can hold while Statement 1 fails. One class with a rotating top scorer is a witness, so the statement is True.`,
      `**E.** → True

Restrict the exam domain to a singleton $\\{e_1\\}$. Then $\\forall e\\, G(s,e)$ collapses to $G(s,e_1)$, and Statement 2 likewise collapses to $\\exists s\\, G(s,e_1)$. Both statements become the same sentence, so the statement is True.`,
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

The given votes produce $Y = 2$. Gate 1 needs $Y \\ge 3$, and $2 \\ge 3$ fails. Gate 2 needs $Y = 2$ with R1 among the yes-votes, and both hold, so gate 2 opens. The candidate is approved, so the statement is True.`,
      `**B.** → False

Yes-votes from R2 and R3 still give $Y = 2$, so gate 1 stays shut. R1 voted no, so gate 2 stays shut. Both gates are closed, so the candidate is not approved, so the statement is False.`,
      `**C.** → True

Any three yes-votes give $Y = 3$. Gate 1 is $Y \\ge 3$ and ignores names, so gate 1 opens no matter which three reviewers they are. The candidate is then approved, so the statement is True.`,
      `**D.** → False

Yes-votes from R2, R3, and R4 give $Y = 3$ with R1 voting no. Gate 1 opens on the count alone, so approval occurs without R1. R1's yes-vote is not necessary in every scenario, so the statement is False.`,
      `**E.** → True

Yes-votes from R2 and R3 only give $Y = 2$ with R1 outside. Gate 1 stays shut because $2 < 3$, and gate 2 stays shut because R1 is missing. That is one two-vote scenario with no approval, so the statement is True.`,
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

Company Z uses the product commercially, so $C$ is true. The rescue needs $W \\land S$. Z has $W$ true and $S$ false, so the conjunction fails and the rescue never opens. Commercial use with a failed rescue voids the warranty, so the statement is True.`,
      `**B.** → False

The rescue is $W \\land S$, so written approval is only one half. Company Z has $W$ true and $S$ false, and the warranty is void. Approval alone is not sufficient, so the statement is False.`,
      `**C.** → True

The exception is $W \\land S$. Approval without servicing leaves the conjunction false, and servicing without approval does the same. Both halves are required, so the statement is True.`,
      `**D.** → False

Without written approval, $W$ is false, so $W \\land S$ is false even if $S$ is true. Servicing is not an independent escape from commercial use, so the statement is False.`,
      `**E.** → False

Annual servicing sits inside the exception to the commercial-use clause. If Z never used the product commercially, $C$ is false and that clause never fires. Nothing in the quoted warranty then asks for annual servicing, so the statement is False.`,
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

The target is that there is no smallest positive real, so the legal opening is the opposite: suppose such an $x > 0$ exists. Then $\\frac{x}{2}$ is still positive and strictly smaller than $x$, so $x$ was not smallest. The writeup opens with the negation of the target and ends in an impossibility, so the statement is True.`,
      `**B.** → False

A contradiction proof that $\\sqrt{3}$ is irrational must assume the negation, that $\\sqrt{3}$ is rational. Opening with "assume $\\sqrt{3}$ is irrational" assumes the conclusion itself, so there is nothing left to contradict. That is not a valid proof by contradiction, so the statement is False.`,
      `**C.** → False

The original is $(\\forall f\\, D(f)) \\land (\\forall t\\, O(t))$. Negating an and yields an or, and negating "all" yields "some not":

$$\\exists f\\, \\neg D(f) \\lor \\exists t\\, \\neg O(t)$$

The offered sentence keeps the and and strengthens both halves. One on-time flight already falsifies the original while leaving that offered sentence false, so the statement is False.`,
      `**D.** → False

"Some employee always arrives late" is $\\exists x\\, \\forall d\\, L(x,d)$. Flip both quantifiers and negate inside:

$$\\forall x\\, \\exists d\\, \\neg L(x,d)$$

Every employee has at least one on-time day. "All employees are never late" is $\\forall x\\, \\forall d\\, \\neg L(x,d)$, a stronger ban, so the statement is False.`,
      `**E.** → True

The overview recovered the two standards: one witness settles an existential, and a universal needs an argument that runs for an arbitrary $x$. The claim is that same split, so the statement is True.`,
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

Premise 2 gives a person $a$ who is an economist and a game theorist. Premise 1 says every economist studies human behavior, so $H(a)$ follows. Then $G(a) \\land H(a)$, which is the conclusion. The same three steps work for any witness supplied by Premise 2, so the argument is valid, so the statement is True.`,
      `**B.** → False

Replace Premise 2 by "no economists specialize in game theory." Picture a world where every economist studies human behavior and nobody specializes in game theory. Both modified premises hold, yet the conclusion $\\exists x\\,(G(x) \\land H(x))$ fails because there is no game theorist. Premises true and conclusion false means the modified argument is invalid, so the statement is False.`,
      `**C.** → True

The overview recovered that validity asks only whether the conclusion must be true whenever the premises are true, and does not inspect the real world. Soundness is the stricter label that also requires the premises to be true in fact. The claim is that same distinction, so the statement is True.`,
      `**D.** → True

Validity is about the derivation from the premises. It never inspects whether Premise 1 is true in the real world. If Premise 1 happened to be false, the argument would remain valid and lose soundness, because soundness needs valid form and true premises, so the statement is True.`,
      `**E.** → False

Affirming the consequent is $P \\Rightarrow Q$, $Q$, therefore $P$. The given premises are a universal about economists and an existential about game theory, with no bare consequent used to recover an antecedent. The form is "all $E$ are $H$, some $E$ are $G$, therefore some $G$ are $H$," which is not that invalid pattern, so the statement is False.`,
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

Player X scored $35$, so $P$ is true, and the team lost $90$-$95$, so $Q$ is false. That is the one combination an implication forbids. One such game disproves the fan's universal rule, so the statement is True.`,
      `**B.** → True

The existential asks for one game in which some player scored over $30$ and the team did not win. The reported game has a $35$-point scorer and a $90$-$95$ loss, which is that pair of facts. One witness settles an existential, so the statement is True.`,
      `**C.** → True

The contrapositive always agrees with the original, so it dies with the original. The same game shows it directly: the team did not win, yet a player scored $35$, which $\\neg Q \\Rightarrow \\neg P$ forbids, so the statement is True.`,
      `**D.** → False

The converse $Q \\Rightarrow P$ sits in the other pair. The reported game is a defeat, so $Q$ is false and the converse is idle. Falsity of $P \\Rightarrow Q$ does not force falsity of $Q \\Rightarrow P$, so the statement is False.`,
      `**E.** → True

The inverse $\\neg P \\Rightarrow \\neg Q$ pairs with the converse, not with the original. It is tested by games with no $30$-point scorer. The reported game has a $35$-point scorer, so $P$ is true and the inverse is not even evaluated. Its truth value is a separate question from the fan's false rule, so the statement is True.`,
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

W receives a B or higher, so the statement is True.`,
      `**B.** → False

Without a curve the live cutoff is $s \\ge 70$. Student W scored $65$, and

$$65 < 70$$

so the baseline biconditional denies the B. W's score sits in the band that the curve alone unlocks, so the statement is False.`,
      `**C.** → True

The baseline uses $70$. The curve replaces it with $60$. Compare:

$$60 < 70$$

Anyone with $s \\ge 70$ still has $s \\ge 60$, so a B already earned under the baseline is never taken away. The threshold moves down, not up, so the statement is True.`,
      `**D.** → True

A score of $62$ satisfies $60 \\le 62 < 70$. Under a curve the cutoff is $60$, so $62 \\ge 60$ earns the B. Without a curve the cutoff is $70$, so $62 < 70$ denies it. The B at $62$ occurs only if the curve is applied, so the statement is True.`,
      `**E.** → False

The baseline biconditional is a B iff $s \\ge 70$, and the unless clause replaces the cutoff by $60$ when a curve is applied. This exam used a curve, and W scored $65$, which is below $70$ and still a B. Scoring at least $70$ is not necessary in all circumstances, so the statement is False.`,
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

The prime lists $\\{3,5\\}$ and $\\{2,7\\}$ are disjoint, so $\\mathrm{gcd}(15,28)=1$. Pair 1 is coprime and therefore meets the even-wear test, so the statement is True.`,
      `**B.** → False

Factor Pair 2:

$$24 = 2^{3} \\times 3, \\qquad 36 = 2^{2} \\times 3^{2}$$

Both $2$ and $3$ appear on each side. Taking the smaller power of each shared prime gives

$$\\mathrm{gcd}(24,36) = 2^{2} \\times 3 = 12 \\ne 1$$

Pair 2 is not coprime, so the statement is False.`,
      `**C.** → True

Coprime means: for every prime $p$, $p$ does not divide both $m$ and $n$. Negating a universal produces an existential: there exists a prime $p$ such that $p$ divides $m$ and $p$ divides $n$. That is the quoted negation, so the statement is True.`,
      `**D.** → True

Given $\\mathrm{gcd}(m,n)=1$ with both greater than $1$, suppose both were even. Then $2$ would divide each of them, forcing $\\mathrm{gcd}(m,n) \\ge 2$ and contradicting $\\mathrm{gcd}=1$. A coprime pair is never two even numbers, so the statement is True.`,
      `**E.** → False

Coprime means no shared prime factor, not that at least one of $m$ or $n$ is prime. Pair 1 is a counterexample: $15 = 3 \\times 5$ and $28 = 2^{2} \\times 7$ are both composite, yet $\\mathrm{gcd}(15,28)=1$, so the statement is False.`,
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

K cancelled $2$ days before renewal. The early branch needs $d \\ge 3$, and $2 < 3$, so K is in the late branch. Late cancellation renews the subscription (and a charge applies). Usage is consulted only for the later refund test, so the statement is True.`,
      `**B.** → False

K cancelled $2$ days out, so the late branch applies. A partial refund is issued if and only if $u < 10\\%$. K used $15\\%$, and

$$15 < 10$$

fails. The biconditional withholds the refund, so the statement is False.`,
      `**C.** → True

K still cancelled $2$ days out, so the late branch still applies. Change only the usage to $5\\%$. Then

$$5 < 10$$

holds, so the refund side of the biconditional opens, so the statement is True.`,
      `**D.** → True

Change only the timing to $4$ days. Then $4 \\ge 3$, so K moves into the early branch: no renewal and no charge. The $15\\%$ usage figure is never read, because the refund biconditional sits only in the late branch, so the statement is True.`,
      `**E.** → False

The $10\\%$ usage test is written only in the late-cancellation paragraph $d < 3$. If a subscriber cancels $3$ or more days ahead, the early branch settles everything by timing: no renewal, no charge, and no refund question. The usage test is not global, so the statement is False.`,
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

The unique failure of $P \\Rightarrow Q$ is $P \\land \\neg Q$: fever strictly above $38^{\\circ}\\mathrm{C}$ and no antibiotics. That is the quoted sentence. Observing one such patient would show the guideline was violated, so the statement is True.`,
      `**B.** → False

A counterexample needs $P$ true and $Q$ false. Compare $38.0$ with the recovered threshold:

$$38.0 > 38$$

is false, so $P$ is false. When $P$ is false the implication is idle and makes no demand about antibiotics. A missing prescription at $38.0$ is compatible with the guideline, so the statement is False.`,
      `**C.** → True

The inverse is $\\neg P \\Rightarrow \\neg Q$. A patient at $37.5^{\\circ}\\mathrm{C}$ with a bacterial infection who still receives antibiotics has $\\neg P$ true and $\\neg Q$ false. That is the unique failure row of the inverse. One such file shows the inverse can be false in practice, so the statement is True.`,
      `**D.** → False

The converse is $Q \\Rightarrow P$. The guideline is $P \\Rightarrow Q$, which points the other way. A patient at $37.5^{\\circ}\\mathrm{C}$ who receives antibiotics has $Q$ true and $P$ false, so $Q \\Rightarrow P$ fails. The original is silent on that file because $P$ never fired. The converse is not guaranteed, so the statement is False.`,
      `**E.** → True

The target is that not every patient prescribed antibiotics has a fever above $38^{\\circ}\\mathrm{C}$. A proof by contradiction of that denial opens by assuming the opposite: every such patient does have a fever above $38^{\\circ}\\mathrm{C}$. A $37.5^{\\circ}\\mathrm{C}$ patient who still receives antibiotics has $Q$ true and $P$ false, so that assumption cannot stand. The opening described is the legal first line, so the statement is True.`,
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

Count the letters: twelve identical a's, so length $12$ and $P$ is true. The system does not classify it as strong, so $Q$ is false. That is the unique failure row of $P \\Rightarrow Q$. One such password shows the policy is false as an absolute rule, so the statement is True.`,
      `**B.** → True

The converse is $Q \\Rightarrow P$: if a password is classified as strong, then it is at least $12$ characters. That sentence lives with the inverse, not with the original. The twelve-a string has $Q$ false, so it never enters the converse's hypothesis. Collapse of $P \\Rightarrow Q$ does not settle $Q \\Rightarrow P$, so the statement is True.`,
      `**C.** → False

The converse $Q \\Rightarrow P$ asks something only when $Q$ is true. An $8$-character randomized password that is not classified as strong has $P$ false and $Q$ false, so the converse holds vacuously and learns nothing. The file that would refute $Q \\Rightarrow P$ is a password classified as strong and shorter than $12$. This rejected password is not that file, so the statement is False.`,
      `**D.** → False

The inverse is $\\neg P \\Rightarrow \\neg Q$. The contrapositive of the original is $\\neg Q \\Rightarrow \\neg P$. Those arrows run opposite ways. The inverse is equivalent to the converse $Q \\Rightarrow P$, not to the contrapositive. Its truth can therefore be read off the converse, so the statement is False.`,
      `**E.** → False

"If a password is not strong, it is under $12$ characters" is $\\neg Q \\Rightarrow \\neg P$, the contrapositive of the policy. A contrapositive always shares the original's truth value. The policy is false, witnessed by "aaaaaaaaaaaa": length $12$ so $P$ is true, not classified as strong so $Q$ is false. The same password shows the contrapositive false: not strong, yet length $12$. No separate check is needed, so the statement is False.`,
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

The manager claims every one of the $500$ chips in Batch $12$ passes. Inspection found chip #$317$ in Batch $12$ failed. A universal fails as soon as one member of the domain fails it. The other $499$ chips have no bearing on that verdict, so the statement is True.`,
      `**B.** → False

The manager's claim is $\\forall x\\, A(x)$ on Batch $12$. Negating a universal produces an existential:

$$\\neg \\forall x\\, A(x) \\equiv \\exists x\\, \\neg A(x)$$

In words: at least one chip fails. The quoted sentence "all chips fail" is $\\forall x\\, \\neg A(x)$, which needs all $500$ failures. Chip #$317$ already witnesses the existential without a clean sweep, so the statement is False.`,
      `**C.** → True

Batch $13$ was cancelled before production, so it contains zero chips. To falsify "all chips in Batch $13$ pass" you would have to point at a chip in Batch $13$ that failed. There is no such chip. A universal over an empty domain is vacuously true, so the statement is True.`,
      `**D.** → False

"For every failed chip there exists a defect code" is $\\forall f\\, \\exists c$. "There exists a single defect code that explains every failure" is $\\exists c\\, \\forall f$. The first lets the code depend on the chip. The second freezes one code for the whole batch. Ten failures with ten different codes make the first true and the second false, so the statements are not the same, so the statement is False.`,
      `**E.** → True

"Some chip in Batch $12$ failed" is $\\exists x\\, \\neg A(x)$. An existential is proved by one witness. Chip #$317$ is in Batch $12$ and failed the stress test, which is that witness. Nothing else about the batch is required, so the statement is True.`,
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

If $6$ divides $n$, then $n = 6k = 3(2k)$, so $3$ divides $n$ automatically. The pair "$6 \\mid n$ and $3 \\nmid n$" is empty. An empty situation does not occur for infinitely many integers, so the statement is False.`,
      `**B.** → True

The converse is $3 \\mid n \\Rightarrow 6 \\mid n$. Test $n = 9$:

$$9 = 3 \\times 3$$

so $3$ divides $9$. Next

$$9 = 6 \\times 1 + 3$$

so $6$ does not divide $9$. Hypothesis true and conclusion false: $9$ is a counterexample, so the statement is True.`,
      `**C.** → True

The inverse is $6 \\nmid n \\Rightarrow 3 \\nmid n$. Inverse and converse share a truth value. Test $n = 9$ against the inverse: $6 \\nmid 9$ holds by the remainder $3$, while $3 \\nmid 9$ fails because $9 = 3 \\times 3$. True hypothesis and false conclusion: the inverse fails at $9$ with the converse, so the statement is True.`,
      `**D.** → False

The original $6 \\mid n \\Rightarrow 3 \\mid n$ holds for every integer by the factorization $n = 6k = 3(2k)$. Its contrapositive $3 \\nmid n \\Rightarrow 6 \\nmid n$ is the same implication in other clothes. A statement true for every integer cannot fail for some $n$, so the statement is False.`,
      `**E.** → False

The original $6 \\mid n \\Rightarrow 3 \\mid n$ holds for every integer. The converse $3 \\mid n \\Rightarrow 6 \\mid n$ is a different implication, already refuted by $n = 9$. At $n = 9$ the original has a false hypothesis, so it holds vacuously, while the converse fails. Falsity of the converse does not leak into the original, so the statement is False.`,
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

Hypothesis true and conclusion true. The rule applies in the stated direction, so the statement is True.`,
      `**B.** → False

The rule is $n^{2}$ even $\\Rightarrow$ $n$ even. Contraposition starts from the denial of the conclusion: assume $n$ is odd, derive that $n^{2}$ is odd. The claimed plan assumes $n$ even and derives that $n^{2}$ is even. That proves the converse $C$, not $R$, so the statement is False.`,
      `**C.** → True

The given square $4321^{2} = 18{,}671{,}041$ is odd. An odd square forces an odd ID. Direct check:

$$4321 = 2 \\times 2160 + 1$$

so $4321$ is odd. Hypothesis true and conclusion true, so the statement is True.`,
      `**D.** → False

Rule $R$ is $n^{2}$ even $\\Rightarrow$ $n$ even. Its converse $C$ is $n$ even $\\Rightarrow$ $n^{2}$ even. They point opposite ways. Both happen to be true for integers, but two true statements with two proofs are still two statements, not logically the same formula, so the statement is False.`,
      `**E.** → True

An implication $R$ fails only on $n^{2}$ even and $n$ odd. A contradiction proof of $R$ therefore assumes exactly that pair, then derives an impossibility. From $n = 2k+1$,

$$n^{2} = 4k^{2} + 4k + 1$$

which is odd, colliding with the assumption that $n^{2}$ is even. The opening the claim describes is the legal one, so the statement is True.`,
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

Negating a universal implication $\\forall t\\,(P(t) \\Rightarrow Q(t))$ yields $\\exists t\\,(P(t) \\land \\neg Q(t))$: there exists such a triangle without a right angle. The quoted sentence is that existential. Correct formation is about shape, so the statement is True.`,
      `**B.** → True

Thales' theorem establishes the original universal. A statement and its negation cannot both hold, so the existential "there exists such a triangle without a right angle" is false. A proved statement always leaves its negation false, so the statement is True.`,
      `**C.** → True

Start with an arbitrary right triangle, hypotenuse $AB$, right angle at $C$. Let $M$ be the midpoint of $AB$. Then $MA = MB$ by construction, and $MC = MA$ as well. The circle centred at $M$ with radius $MA$ passes through $A$, $B$, and $C$, and $AB$ is a diameter. Every right triangle can be inscribed that way, so the converse holds, so the statement is True.`,
      `**D.** → True

Thales' theorem gives $P \\Rightarrow Q$. The midpoint construction gives $Q \\Rightarrow P$. Both directions hold, so here $P \\Leftrightarrow Q$. Most converses fail; this pair is a biconditional earned twice, once in each direction, so the statement is True.`,
      `**E.** → False

The inverse is $\\neg P \\Rightarrow \\neg Q$. That sentence is equivalent to the converse, never to the original. The original pairs with the contrapositive. Truth of Thales' theorem does not hand over the inverse by logical equivalence with the original, so the statement is False.`,
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

The theorem is $S \\Rightarrow O$. Negating an implication keeps the hypothesis and rejects the conclusion: $S \\land \\neg O$, a perfect square with an even divisor count. That is the quoted sentence. Correct formation is about shape, so the statement is True.`,
      `**B.** → True

$36$ is $6^{2}$, so the hypothesis holds. The listed divisors are

$$\\{1,2,3,4,6,9,12,18,36\\}$$

nine numbers, and nine is odd. Hypothesis true and conclusion true: $36$ supports the theorem and is not a counterexample, so the statement is True.`,
      `**C.** → True

If the divisor count is odd, a leftover self-partner must exist, so $d^{2} = n$ and $n$ is a square. That is the converse: odd count $\\Rightarrow$ square. Sample $36$ has nine divisors and is a square. Sample $20$ has six divisors and is not a square. Both directions hold by the same pairing, so the statement is True.`,
      `**D.** → False

The theorem speaks only about perfect squares. $20$ sits between $4^{2} = 16$ and $5^{2} = 25$, so $20$ is not a square and the hypothesis $S$ is false. An implication with a false "if" is not refuted by $20$. A counterexample would need a square with an even divisor count, so the statement is False.`,
      `**E.** → True

The inverse is "not a square, therefore even divisor count," equivalent to the converse. With no leftover square-root partner, every divisor has a distinct mate and the count is even. Sample $20$ is not a square and has $6$ divisors, even. The inverse holds because the converse does, so the statement is True.`,
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

The overview recovered that Emma is the doctor. The claim is that same job, so the statement is True.`,
      `**B.** → False

Clue (2) alone says Felix is an engineer exactly when Grace is a teacher. Both sides are unset, so (2) names nobody. Even after (3) shuts Grace out of Teacher, (2) yields only that Felix is not the engineer. Pinning him to Teacher still needs Emma placed as doctor and Hugo placed as lawyer. A right job with a wrong reason fails, so the statement is False.`,
      `**C.** → True

The overview recovered that Grace is the engineer. The claim is that same job, so the statement is True.`,
      `**D.** → True

Drop clue (3) and try Grace as teacher. Then (2) makes Felix the engineer, so (1) makes $E$ false: Emma is not the doctor. Clue (4) already placed Hugo as lawyer, so the only leftover job for Emma is Doctor, contradicting $E$ false. Clues (1), (2), and (4) already forbid Grace-as-teacher, so clue (3) is redundant, so the statement is True.`,
      `**E.** → True

The chain to Emma used only (3), (2), and (1): Grace not teacher, therefore Felix not engineer, therefore Emma is the doctor. Clue (4) names Hugo as lawyer and is used only later to split Engineer from Teacher. Remove clue (4) and Emma is still the doctor, so the statement is True.`,
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

The negation of the theorem would be a sequence that converges and is not bounded. The theorem holds for every sequence, so that combination never occurs. The description picks out an empty collection, so the statement is True.`,
      `**B.** → True

The converse claims: bounded, therefore convergent. For $a_{n} = (-1)^{n}$ the terms are only $-1$ and $1$, so every term lies in $[-1,1]$ and the sequence is bounded. Odd terms stay at $-1$ and even terms stay at $1$, so no single limit exists. Bounded with no limit: the converse fails, so the statement is True.`,
      `**C.** → True

The inverse is "does not converge, therefore not bounded," equivalent to the converse. The same sequence $(-1)^{n}$ diverges and stays inside $[-1,1]$. Hypothesis of the inverse true, conclusion false. Inverse and converse share a truth value, so the statement is True.`,
      `**D.** → True

The contrapositive is "not bounded, therefore does not converge," equivalent to the proved theorem, hence true. For the sequences $n$, $2n$, and $n^{2}$, unboundedness is immediate, and the contrapositive then yields divergence. Both halves of the claim hold, so the statement is True.`,
      `**E.** → False

The theorem $P \\Rightarrow Q$ sits with its contrapositive. The converse $Q \\Rightarrow P$ sits with the inverse. Feed $(-1)^{n}$ to the original: the sequence does not converge, so $P$ is false and $P \\Rightarrow Q$ holds vacuously. The same sequence kills the converse. Falsity of the converse does not touch the theorem, so the statement is False.`,
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

The overview recovered that J is a liar. The claim is that same type, so the statement is True.`,
      `**B.** → True

The overview recovered that K is a truth-teller. The claim is that same type, so the statement is True.`,
      `**C.** → True

The overview recovered that L is a truth-teller. The claim is that same type, so the statement is True.`,
      `**D.** → False

The overview recovered J a liar and K, L truth-tellers, so the truth-teller count is $2$. J's sentence claimed the count was $1$, and a liar's sentence is false. The actual count is two, not one, so the statement is False.`,
      `**E.** → False

The overview recovered one surviving assignment: J a liar, K and L truth-tellers. The J-truthful branch and the L-liar branch both collapsed. One consistent picture is not two, so the statement is False.`,
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

Rule (4) already asserts $D$. Both recovered rosters include Dmitri, so the statement is True.`,
      `**B.** → False

Uniqueness about Ana would need the two recovered rosters to agree on $A$. One has Ana in and the other has Ana out, so the statement is False.`,
      `**C.** → True

The Ana-in roster is $\\{A,C,D\\}$, which has size $3$. An existence claim needs one legal witness, so the statement is True.`,
      `**D.** → False

The recovered rosters are $\\{A,C,D\\}$ and $\\{B,D\\}$. The first still has Ana; the second still has Boris. Neither has both absent, so the statement is False.`,
      `**E.** → False

Drop the exception in (3), so $C\\Rightarrow\\neg D$ with no escape. Rule (4) keeps $D$ true, and that forces $\\neg C$. The Ana-in roster had both $C$ and $D$, so it dies. The Ana-out roster $\\{B,D\\}$ already has Ceci out, so the stricter (3) is idle and still holds. One legal roster remains, so the statement is False.`,
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

The contrapose of rule (4) is $N\\Rightarrow\\neg Z$. That is the claimed implication, so the statement is True.`,
      `**B.** → False

The overview recovered the chain $L\\Rightarrow Z\\Rightarrow\\neg N$. Leo joining already forces Noah out, so the statement is False.`,
      `**C.** → True

The overview recovered $\\{M\\}$ as a legal roster: Maria in, Leo out. One witness is enough, so the statement is True.`,
      `**D.** → True

The contrapose of rule (1) is $\\neg M\\Rightarrow\\neg N$. That is the claimed implication, so the statement is True.`,
      `**E.** → False

The overview recovered $\\{M\\}$ as legal, and that roster omits Zoe. A "must join" claim fails on one counterexample, so the statement is False.`,
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

The overview recovered $B\\Rightarrow C\\Rightarrow\\neg D$. Ben playing therefore forces Dan out, so the statement is True.`,
      `**B.** → False

The same recovered chain is $B\\Rightarrow\\neg D$. Ben and Dan cannot both play, so the statement is False.`,
      `**C.** → True

The overview recovered $\\{E\\}$ as a legal roster: Ella in, and Ben, Carla, and Dan out. One witness is enough, so the statement is True.`,
      `**D.** → True

The contrapose of rule (3) is $D\\Rightarrow\\neg C$. That is the claimed implication, so the statement is True.`,
      `**E.** → False

The overview recovered $\\{E\\}$ and $\\{D,E\\}$, both of which omit Carla. A "must play" claim fails on either roster, so the statement is False.`,
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

The contrapose of rule (4) is $O\\Rightarrow\\neg Q$. That is the claimed implication, so the statement is True.`,
      `**B.** → False

Rule (1) is $O\\Rightarrow\\neg P$. Both cooking would make the hypothesis true and the conclusion false, so the statement is False.`,
      `**C.** → False

Rule (2) requires $O\\lor P$. The attempted evening $\\{Q\\}$ has neither Owen nor Priya, which breaks (2), so the statement is False.`,
      `**D.** → True

Rule (3) is $P\\Rightarrow Q$. That is the claimed guarantee, so the statement is True.`,
      `**E.** → False

The overview recovered $\\{P,Q\\}$ as a legal evening, and that evening omits Owen. A "must cook" claim fails on one counterexample, so the statement is False.`,
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

The overview recovered that Diego's chain collides on Fatima, so $D$ is false in every legal roster. There is no valid scenario in which Diego attends, so the statement is False.`,
      `**B.** → True

The contrapose of rule (6) is $F\\Rightarrow\\neg H$. That is the claimed implication, so the statement is True.`,
      `**C.** → True

The overview recovered $\\neg D$ in every roster, so rule (4) forces $H$ throughout. Hugo attends in every surviving assignment, so the statement is True.`,
      `**D.** → True

The overview recovered $\\{H,G,I\\}$ as a legal roster. Grace and Iris both attend there, so the statement is True.`,
      `**E.** → False

The claim needs $I\\Rightarrow F$. The recovered roster $\\{H,G,I\\}$ has Iris in and Fatima out, so the statement is False.`,
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

The overview recovered that Aiden needs Bella and that Bella is impossible. Aiden is therefore out of every legal roster, so the statement is True.`,
      `**B.** → False

The overview recovered that Bella removes Daisy by (3) and Ethan by (6), leaving rule (2) empty. No legal roster contains Bella, so the statement is False.`,
      `**C.** → True

Rule (4) is $C\\Rightarrow E$. That is the claimed implication, so the statement is True.`,
      `**D.** → False

The overview recovered that Faye needs Aiden and that Aiden is already out. Faye is therefore out of every legal roster, so the statement is False.`,
      `**E.** → False

The overview recovered five legal rosters. Uniqueness needs exactly one, so the statement is False.`,
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

The overview recovered that dropping Petra also drops Sana and then breaks rule (4). Petra therefore reviews in every valid assignment, so the statement is True.`,
      `**B.** → True

The contrapose of rule (1) is $Q\\Rightarrow\\neg P$. That is the claimed implication, so the statement is True.`,
      `**C.** → False

The overview recovered the unique assignment $\\{P,S,T\\}$, with Ravi out. There is no legal assignment in which Ravi reviews, so the statement is False.`,
      `**D.** → True

The overview recovered the unique assignment $\\{P,S,T\\}$. Both Theo and Sana review there, so the statement is True.`,
      `**E.** → False

The overview recovered one assignment, with every reviewer pinned by a numbered rule. Multiple valid ways would need a second surviving row, so the statement is False.`,
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

The overview recovered that every Victor-out roster has size at most $3$, which breaks rule (8). Victor therefore competes in every valid roster, so the statement is True.`,
      `**B.** → False

The overview recovered that Victor always competes, so Wendy always competes by (2). Rule (3) then keeps Xavier out of every roster, so the statement is False.`,
      `**C.** → True

The contrapose of rule (6) is $B\\Rightarrow\\neg Z$. That is the claimed implication, so the statement is True.`,
      `**D.** → False

The overview recovered four legal extras on top of the forced core. Four rosters is already more than one, so the statement is False.`,
      `**E.** → False

A size-$6$ roster would need the extra $\\{Y,Z,B\\}$. Rule (6) forbids Zane with Bianca, so that extra is illegal. The recovered extras have size $1$ or $2$ on a core of $3$, hence totals $4$ or $5$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 30,
    solution_overview: `**Part 1: Setup.**

Write $U,V,W,X,Y,Z,B$ for Uma, Victor, Wendy, Xavier, Yara, Zane, Bianca competing. The stem is

$$(1)\\ U\\Leftrightarrow V,\\qquad (2)\\ V\\Rightarrow W,\\qquad (3)\\ (W\\land\\neg X)\\lor(\\neg W\\land X),$$

$$(4)\\ X\\Rightarrow\\neg Y,\\qquad (5)\\ Y\\lor Z,\\qquad (6)\\ Z\\Rightarrow\\neg B,\\qquad (7)\\ B\\Rightarrow U,$$

and (8) at least four of the seven compete.

"$P$ only if $Q$" is $P\\Rightarrow Q$. An implication whose hypothesis is false is idle.

**Part 2: Solve.**

If $\\neg V$ holds, then $\\neg U$ by (1) and $\\neg B$ by the contrapose of (7). Rule (3) then splits:

- $W$ and $\\neg X$ leave at most $W,Y,Z$, hence size at most $3$.
- $X$ and $\\neg W$ drop $Y$ by (4) and force $Z$ by (5), hence size $2$.

Both sit under four, so Victor must compete. Then $U$ holds by (1), $W$ holds by (2), and $\\neg X$ holds by (3).

The forced core is $U,V,W$ in and $X$ out. Among $Y,Z,B$, rule (5) needs $Y\\lor Z$ and rule (6) forbids $Z$ with $B$. The legal extras are $\\{Y\\}$, $\\{Z\\}$, $\\{Y,B\\}$, and $\\{Y,Z\\}$.`,
  },
];
