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

Intersection keeps only the numbers that clear both lists. Scan $A$ against $B$: $1$ and $2$ miss $B$, while $3$, $4$, and $5$ sit in both, so

$$A\\cap B=\\{3,4,5\\}$$

That is the claimed set, so the statement is True.`,
      `**B.** → False

A union must contain every member of each input. Putting $A$ and $C$ together gives $1,2,3,4,5$ from $A$ and $6,7,8,9$ from $C$:

$$A\\cup C=\\{1,2,3,4,5,6,7,8,9\\}$$

The claimed set stops at $8$ and drops $9$, even though $9\\in C$. A union cannot be smaller than either input, so the statement is False.`,
      `**C.** → True

First form $A\\cap B=\\{3,4,5\\}$. The remaining filter is membership in $C$. Of that trio only $5$ sits in $C$:

$$(A\\cap B)\\cap C=\\{5\\}$$

Chaining two intersections is the same as intersecting all three sets at once, so the statement is True.`,
      `**D.** → False

Difference $A\\setminus C$ deletes a member of $A$ only when that member also sits in $C$. Scanning $A$ against $C$ leaves $1,2,3,4$, because only $5$ is shared:

$$A\\setminus C=\\{1,2,3,4\\}$$

The claim also drops $4$, but $4\\in A$ and $4\\notin C$, so the statement is False.`,
      `**E.** → False

Disjointness means the intersection is empty. Scan $B$ against $C$:

$$B\\cap C=\\{5,6,7\\}$$

Three shared numbers are three too many, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `Let $A=\\{1,2,3,4,5\\}$, $B=\\{3,4,5,6,7\\}$, and $C=\\{5,6,7,8,9\\}$.

Intersection keeps numbers that sit in both lists. Union keeps anything in at least one. Difference $X\\setminus Y$ keeps members of $X$ that are missing from $Y$. Two sets are disjoint only when they share nothing.`,
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

The equation $x^2=9$ has two roots. Test $x=3$:

$$3^2=9$$

and $3$ is an integer, so $3\\in A$. Test $x=-3$:

$$(-3)^2=9$$

and $-3$ is an integer, so $-3\\in A$. Thus

$$A=\\{-3,3\\}$$

$B=\\{3,-3\\}$ lists the same two numbers. Sets ignore order, so $A=B$, so the statement is True.`,
      `**B.** → True

Membership in a set-builder is a test, not a printed roster. $3$ is an integer and $3^2=9$, so $3\\in A$.

so the statement is True.`,
      `**C.** → False

Square-root language sometimes keeps only the positive root. Over the integers both $3$ and $-3$ satisfy $x^2=9$, so $A=\\{-3,3\\}$. The claimed roster $\\{3\\}$ drops $-3$, which the universe $Z$ never excluded.

so the statement is False.`,
      `**D.** → True

Cardinality counts distinct members, not distinct squares. The integers solving $x^2=9$ are $-3$ and $3$, two different points on the number line, so

$$\\lvert A\\rvert=2$$

so the statement is True.`,
      `**E.** → False

This letter switches the universe to the natural numbers $N=\\{1,2,3,\\ldots\\}$ and keeps solutions of $x^2=9$. Then $3\\in N$ stays, while $-3\\notin N$ is dropped, so $C=\\{3\\}$. Equality with $\\{3,-3\\}$ would require a negative natural number.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `Let $A=\\{x\\in Z:x^2=9\\}$, with $Z$ the integers, and let $B=\\{3,-3\\}$.

A set-builder keeps those members of the named universe that satisfy the stated equation. Changing the universe, or adding an extra inequality, produces a different set. Rosters that list the same members in a different order still name one set.`,
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

Each of the three letters is an independent keep-or-drop choice, so

$$\\lvert\\mathcal P(A)\\rvert=2^3=8$$

The power set therefore has $8$ elements, so the statement is True.`,
      `**B.** → False

The elements of $A$ are the letters $a$, $b$, and $c$. The object $\\{a,b\\}$ is a set of letters, not a letter, so $\\{a,b\\}\\notin A$ even though $\\{a,b\\}\\subseteq A$.

so the statement is False.`,
      `**C.** → True

The empty set has no member that could sit outside $A$, so $\\emptyset\\subseteq A$ cannot fail.

so the statement is True.`,
      `**D.** → False

Proper inclusion needs $A\\subseteq A$ and $A\\ne A$. The second half is impossible, because both sides are the same three-letter list.

so the statement is False.`,
      `**E.** → True

A two-element subset of a three-element set omits exactly one letter. The three omissions give $\\{a,b\\}$, $\\{a,c\\}$, and $\\{b,c\\}$, matching

$$\\binom{3}{2}=3$$

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `Let $A=\\{a,b,c\\}$. Membership $x\\in A$ asks whether $x$ is one of those three letters. Subsethood $S\\subseteq A$ asks whether every member of $S$ is one of those letters.

The power set $\\mathcal P(A)$ is the set of all subsets of $A$. Each of the $|A|$ elements may be kept or left out, so

$$\\lvert\\mathcal P(A)\\rvert=2^{\\lvert A\\rvert}$$

A proper subset must also be unequal to $A$.`,
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

Subsethood asks whether every member of the left-hand set sits in $D$. The empty set has no member that could fail that test, so $\\emptyset\\subseteq D$.

so the statement is True.`,
      `**B.** → False

Membership reads the written roster: $a$, $b$, $c$. None of those letters is the empty set, so $\\emptyset\\notin D$.

so the statement is False.`,
      `**C.** → True

Three independent include-or-exclude choices give

$$2^3=8$$

subsets of $D$. That count includes $\\emptyset$ and $D$ itself, so the statement is True.`,
      `**D.** → False

Split the "both" demand. $\\{a\\}\\subseteq D$ holds because its only member $a$ sits in $D$. $\\{a\\}\\in D$ fails because the roster is three letters, not a singleton set. A conjunction dies as soon as one half dies.

so the statement is False.`,
      `**E.** → True

Every member of $D$ is, by construction, a member of $D$, so $D\\subseteq D$. That is ordinary inclusion, not proper self-inclusion.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `Let $D=\\{a,b,c\\}$. An object belongs to $D$ only when it is one of the three listed letters. A collection $S$ is a subset of $D$ when every member of $S$ is one of those letters.

The power set collects every such $S$, and its size is $2^{\\lvert D\\rvert}$. Ordinary inclusion $D\\subseteq D$ always holds; membership of $D$ in $D$ would require $D$ to appear as a listed letter.`,
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

Difference deletes a member of $E$ only when that member also sits in $F$. Scanning $E$ against $F$, the shared $3$ and $5$ leave while $1$ and $7$ stay:

$$E\\setminus F=\\{1,7\\}$$

That is the claimed set, so the statement is True.`,
      `**B.** → True

The opposite leftover is members of $F$ missing from $E$. Scanning $F$ against $E$ drops $3$ and $5$ and keeps $4$ and $6$:

$$F\\setminus E=\\{4,6\\}$$

so the statement is True.`,
      `**C.** → False

The two leftover piles are $\\{1,7\\}$ and $\\{4,6\\}$. Already $1$ sits in the first and misses the second, so the sets cannot be equal. Difference is not commutative: $X\\setminus Y$ lives in $X$, while $Y\\setminus X$ lives in $Y$.

so the statement is False.`,
      `**D.** → True

Join the two leftover piles:

$$\\{1,7\\}\\cup\\{4,6\\}=\\{1,4,6,7\\}$$

Union of the outer cells never picks up the overlap $\\{3,5\\}$, because those numbers were deleted from both differences.

so the statement is True.`,
      `**E.** → True

A number in both differences would have to be outside $F$ (to sit in $E\\setminus F$) and inside $F$ (to sit in $F\\setminus E$). That is impossible, so

$$(E\\setminus F)\\cap(F\\setminus E)=\\emptyset$$

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `Let $E=\\{1,3,5,7\\}$ and $F=\\{3,4,5,6\\}$.

Difference $X\\setminus Y$ keeps members of $X$ that are missing from $Y$. The two leftover piles $E\\setminus F$ and $F\\setminus E$ live on opposite sides of the overlap and need not be equal. Their union is the symmetric leftovers; their intersection is empty because a number cannot be both outside $F$ and inside $F$.`,
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

Intersection is the stricter combine. Scan $A$ against $B$: $2,4,8,10$ miss $B$, and $B$'s $3,9,12$ miss $A$. Only $6$ sits in both, so

$$A\\cap B=\\{6\\}$$

so the statement is True.`,
      `**B.** → True

Start from $A$'s five numbers and add $B$'s newcomers $3,9,12$; the shared $6$ is not a second copy. That is eight distinct members, matching

$$\\lvert A\\cup B\\rvert=\\lvert A\\rvert+\\lvert B\\rvert-\\lvert A\\cap B\\rvert=5+4-1=8$$

so the statement is True.`,
      `**C.** → False

Scan $C=\\{1,2,3,4,5\\}$ against $A$. Drop $2$ and $4$ (both in $A$), and keep $1$, $3$, and $5$:

$$C\\setminus A=\\{1,3,5\\}$$

The claimed $\\{1,3\\}$ quietly deletes $5$, even though $5\\notin A$.

so the statement is False.`,
      `**D.** → False

$B\\setminus C$ is not a copy of $B$. Scan $\\{3,6,9,12\\}$ against $C$: drop $3$ because $3\\in C$, and keep $6,9,12$:

$$B\\setminus C=\\{6,9,12\\}$$

The claimed roster copies all of $B$ and ignores the witness $3$.

so the statement is False.`,
      `**E.** → False

Scan $A$ against $C$: $2$ and $4$ sit in $C$, while $6,8,10$ do not, because $C$ stops at $5$. So

$$A\\cap C=\\{2,4\\}$$

The extra $6$ in the claim is in $A$ but not in $C$.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `Let $A=\\{2,4,6,8,10\\}$, $B=\\{3,6,9,12\\}$, and $C=\\{1,2,3,4,5\\}$.

Intersection keeps numbers that sit in both lists. Union keeps anything in at least one, counting a shared member once. Difference $X\\setminus Y$ keeps members of $X$ that are missing from $Y$.`,
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

Adding $30+25$ counts the $12$ shared students twice. Subtracting once restores a single copy:

$$\\lvert M\\cup E\\rvert=30+25-12=43$$

so the statement is True.`,
      `**B.** → True

"Neither" is whoever sits outside the union. First form the union by inclusion-exclusion:

$$\\lvert M\\cup E\\rvert=30+25-12=43$$

Inside a cohort of $50$, the leftover is

$$50-43=7$$

so the statement is True.`,
      `**C.** → True

Only-Mathematics is the Mathematics headline minus the overlap:

$$\\lvert M\\setminus E\\rvert=30-12=18$$

Those $18$ sit in $M$ and not in $E$, so the statement is True.`,
      `**D.** → False

$E\\subseteq M$ would need the only-Economics region empty. That region is the Economics headline minus the overlap:

$$\\lvert E\\setminus M\\rvert=25-12=13$$

Those $13$ students are in $E$ and not in $M$, so the inclusion fails.

so the statement is False.`,
      `**E.** → False

Disjointness means empty intersection. The stem already states $|M\\cap E|=12$, and twelve shared students are twelve too many.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `A cohort of $50$ students has $|M|=30$ taking Mathematics, $|E|=25$ taking Economics, and overlap $|M\\cap E|=12$.

Inclusion-exclusion counts the union by adding the two headlines and subtracting the overlap once:

$$\\lvert M\\cup E\\rvert=\\lvert M\\rvert+\\lvert E\\rvert-\\lvert M\\cap E\\rvert$$

Only-Mathematics is the Mathematics headline minus the overlap. Students taking neither course sit outside the union.`,
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

The three blocks occupy separate thirds of $U$. Scan each pair: $1,2,3$ never meet $4,5,6$ or $7,8,9$, and $4,5,6$ never meet $7,8,9$. Every pairwise intersection is empty, so $A$, $B$, and $C$ are pairwise disjoint.

so the statement is True.`,
      `**B.** → True

A partition needs nonempty blocks, pairwise disjointness, and union $U$. Each block has three numbers, no pair shares a number, and

$$A\\cup B\\cup C=\\{1,2,\\ldots,9\\}=U$$

so $\\{A,B,C\\}$ partitions $U$, so the statement is True.`,
      `**C.** → True

The triple intersection sits inside every pairwise one. Once $A\\cap B=\\emptyset$, intersecting further with $C$ cannot create a member, so $A\\cap B\\cap C=\\emptyset$.

so the statement is True.`,
      `**D.** → False

Empty intersection is not empty difference. Because $A$ and $B$ share nothing, subtracting $B$ deletes nobody from $A$:

$$A\\setminus B=\\{1,2,3\\}$$

The claim treats "no overlap" as "nothing left," which would be true of $A\\cap B$, not of $A\\setminus B$.

so the statement is False.`,
      `**E.** → False

The leap "empty intersection, so one factor is empty" is the product-zero habit from arithmetic, not a set identity. Here both $A$ and $B$ have three members and still miss each other. Disjointness bans shared members; it does not erase the sets.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `Let $U=\\{1,2,\\ldots,9\\}$, $A=\\{1,2,3\\}$, $B=\\{4,5,6\\}$, and $C=\\{7,8,9\\}$.

A collection of blocks is pairwise disjoint when every pair of blocks has empty intersection. It partitions $U$ when the blocks are nonempty, pairwise disjoint, and their union is $U$. Empty intersection never forces either set itself to be empty, and it does not empty a difference.`,
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

Complement is a scan of $U$, not of $X$ rewritten backwards. Drop $1$ through $6$ from $\\{1,\\ldots,12\\}$:

$$X^c=\\{7,8,9,10,11,12\\}$$

so the statement is True.`,
      `**B.** → True

Union $X\\cup Y$ covers $1$ through $9$. Complement inside a $12$-person $U$ can only be the three people who miss both skills:

$$(X\\cup Y)^c=\\{10,11,12\\}$$

so the statement is True.`,
      `**C.** → True

De Morgan identifies $(X\\cup Y)^c$ with $X^c\\cap Y^c$. Members of both complements are people who know neither Python nor SQL. Scanning $X^c=\\{7,8,9,10,11,12\\}$ against $Y^c=\\{1,2,3,10,11,12\\}$ leaves

$$X^c\\cap Y^c=\\{10,11,12\\}$$

so the statement is True.`,
      `**D.** → True

The second De Morgan identity says escaping an intersection takes only escaping one of the two sets:

$$(X\\cap Y)^c=X^c\\cup Y^c$$

Both sides name the people missing Python or missing SQL (or both). The identity holds on these lists, so the statement is True.`,
      `**E.** → False

The union of complements must keep every member of each complement. $X^c=\\{7,8,9,10,11,12\\}$ still contributes $7,8,9$. Joining with $Y^c=\\{1,2,3,10,11,12\\}$ gives

$$X^c\\cup Y^c=\\{1,2,3,7,8,9,10,11,12\\}$$

The claimed list $\\{1,2,3,10,11,12\\}$ is $Y^c$ alone, so it undercounts.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `Among $U=\\{1,2,\\ldots,12\\}$, let $X=\\{1,2,3,4,5,6\\}$ be the Python knowers and $Y=\\{4,5,6,7,8,9\\}$ the SQL knowers. Complements are taken inside $U$: $X^c$ is everyone in $U$ missing from $X$.

De Morgan's identities swap union and intersection under complement:

$$(X\\cup Y)^c=X^c\\cap Y^c,\\qquad (X\\cap Y)^c=X^c\\cup Y^c$$`,
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

Putting $A$ and $B$ together covers $1$ through $8$:

$$A\\cup B=\\{1,2,3,4,5,6,7,8\\}$$

Complement inside $U=\\{1,\\ldots,10\\}$ is therefore $\\{9,10\\}$. The claimed $\\{8,9,10\\}$ illegally keeps $8$, but $8\\in B$ and therefore $8\\in A\\cup B$.

so the statement is False.`,
      `**B.** → True

The overlap is $A\\cap B=\\{4,5\\}$. Removing those two from $U$ leaves $\\{1,2,3,6,7,8,9,10\\}$. The same list is $A^c\\cup B^c$, because escaping an intersection takes only escaping one of the two sets. De Morgan's second law therefore holds, so the statement is True.`,
      `**C.** → False

$A^c\\cap B^c$ is "outside both," which De Morgan identifies with $(A\\cup B)^c$. Form $A\\cup B=\\{1,\\ldots,8\\}$, so the complement is $\\{9,10\\}$. The claimed $\\{6,7,8,9,10\\}$ is $A^c$ alone: those extra $6,7,8$ miss $A$ but still sit in $B$.

so the statement is False.`,
      `**D.** → True

$A\\cap B=\\{4,5\\}$. Removing those two from $U=\\{1,\\ldots,10\\}$ leaves

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}$$

That list keeps $A$-only, $B$-only, and neither, so the statement is True.`,
      `**E.** → False

$A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$. Their union must include every member of $A^c$:

$$A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}$$

The claimed $\\{1,2,3,9,10\\}$ is $B^c$ alone, so it drops $6,7,8$.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$, with complements taken inside $U$.

De Morgan's identities are

$$(A\\cup B)^c=A^c\\cap B^c,\\qquad (A\\cap B)^c=A^c\\cup B^c$$

Complement of a union is "outside both." Complement of an intersection is "outside at least one."`,
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

The three pairs $\\{1,2\\}$, $\\{3,4\\}$, $\\{5,6\\}$ use distinct numbers and cover $A=\\{1,\\ldots,6\\}$. Each block is nonempty, every pairwise intersection is empty, and the union is $A$. That is the definition of a partition.

so the statement is True.`,
      `**B.** → False

Block count is free. The same six-element $A$ admits the one-block partition $\\{A\\}$ and the six-singleton partition, both valid. Forcing "number of blocks equals $n$" would ban clumping, which the definition never does.

so the statement is False.`,
      `**C.** → False

$Q=\\{\\{1,2,3\\},\\{3,4,5,6\\}\\}$ fails pairwise disjointness: the two blocks share $3$. One broken condition already disqualifies a partition, even though the union still equals $A$.

so the statement is False.`,
      `**D.** → False

$R$'s blocks are nonempty and disjoint, but the union is $\\{1,2,3,4,5\\}$, which misses $6\\in A$. Coverage is the third partition demand, and a hole kills it.

so the statement is False.`,
      `**E.** → True

For this $A$ with $n=6\\ge 2$, the one-block partition $\\{A\\}$ and the six-singleton partition are two different partitions. The same two constructions work for any set with at least two elements.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `Let $A=\\{1,2,3,4,5,6\\}$. A collection of blocks partitions $A$ only when all three hold: every block is nonempty, the blocks are pairwise disjoint, and their union equals $A$.

Block count is free: one block $\\{A\\}$ and six singletons are both legal partitions of a six-element set. A shared member in two blocks, or a hole in the union, is enough to disqualify a candidate.`,
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

Each of five elements is an independent include-or-exclude, so

$$2^5=32$$

subsets in total, so the statement is True.`,
      `**B.** → True

Proper subsets are all subsets except $A$ itself:

$$32-1=31$$

so the statement is True.`,
      `**C.** → False

Choosing $4$ out of $5$ is choosing which one element to omit:

$$\\binom{5}{4}=5$$

not $10$. The $10$ looks like $\\binom{5}{2}$, the two-element count.

so the statement is False.`,
      `**D.** → True

Nonempty subsets drop only $\\emptyset$, leaving

$$32-1=31$$

so the statement is True.`,
      `**E.** → False

Even sizes $0,2,4$ add as

$$\\binom{5}{0}+\\binom{5}{2}+\\binom{5}{4}=1+10+5=16$$

not $15$. For any finite set the even-sized and odd-sized subsets are equally many, here $16$ and $16$.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `Let $A$ be a set with $|A|=5$. Each subset is an include-or-exclude choice for every element, so the power set has size $2^{|A|}$.

Proper subsets drop $A$ itself. Nonempty subsets drop $\\emptyset$. Subsets of a fixed size $k$ are counted by $\\binom{5}{k}$.`,
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

A point sits in both intervals when $0<x\\le 10$ and $5\\le x<15$. The tighter bounds are $5\\le x\\le 10$, i.e.

$$A\\cap B=[5,10]$$

Both endpoints survive: $5$ is the closed left end of $B$ and sits in $A$, and $10$ is the closed right end of $A$ and sits in $B$.

so the statement is True.`,
      `**B.** → False

Union runs from just above $0$ to just below $15$, so $(0,15)$, not $(0,15]$. The right end $15$ fails $x<15$ in $B$ and fails $x\\le 10$ in $A$, so $15\\notin A\\cup B$. A union cannot include a point that both inputs excluded.

so the statement is False.`,
      `**C.** → True

$10$ is the right endpoint of $A=(0,10]$, hence $10\\in A$. Also $5\\le 10<15$, hence $10\\in B$. Both memberships hold, so $10\\in A\\cap B$.

so the statement is True.`,
      `**D.** → False

$A\\setminus B$ keeps points of $A$ that miss $B$. The leftover of $A$ below $B$ is $(0,5)$. The point $5$ sits in $A$ and in $B$ (it is $B$'s closed left end), so difference deletes it. $5\\in A\\setminus B$ would require $5\\notin B$.

so the statement is False.`,
      `**E.** → False

The universal implication $x\\in A\\Rightarrow x\\in B$ is $A\\subseteq B$. Any witness in $(0,5)$ breaks it: $x=1$ is in $A$ and below $B$'s left end. One counterexample kills the inclusion.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `Translate the brackets into inequalities. $A=(0,10]$ means $0<x\\le 10$, and $B=[5,15)$ means $5\\le x<15$.

Intersection takes the tighter bounds that satisfy both. Union takes the outer bounds that satisfy at least one, without closing an endpoint that both inputs excluded. Difference $A\\setminus B$ is the part of $A$ that $B$ has not yet started.`,
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

Inclusion-exclusion on the given counts is

$$80+70+60-30-25-20+10=145$$

not $155$. The $155$ overshoots both the formula and the survey size $150$.

so the statement is False.`,
      `**B.** → True

"None" is survey size minus the union. First form the union:

$$80+70+60-30-25-20+10=145$$

Then

$$150-145=5$$

so the statement is True.`,
      `**C.** → False

The pair total $30$ still includes the $10$ who also saw $C$. Exact $A$ and $B$ not $C$ is

$$30-10=20$$

not $30$. Leaving the raw $30$ mixes "at least those two" with "exactly those two."

so the statement is False.`,
      `**D.** → False

Only-$A$ subtracts both pair totals from $80$ and adds the triple back once (it was removed twice):

$$80-30-20+10=40$$

The claimed $80-30-20=30$ forgets the $+10$.

so the statement is False.`,
      `**E.** → False

At least two museums is the three exact-pair regions plus the triple. Exact pairs are $30-10=20$, $25-10=15$, and $20-10=10$, so

$$20+15+10+10=55$$

not $65$.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `A survey of $150$ tourists has $|A|=80$, $|B|=70$, $|C|=60$, pair totals $|A\\cap B|=30$, $|B\\cap C|=25$, $|A\\cap C|=20$, and triple overlap $|A\\cap B\\cap C|=10$.

Three-set inclusion-exclusion counts the union by adding the headlines, subtracting the pair totals, then adding the triple back once:

$$\\lvert A\\cup B\\cup C\\rvert=\\lvert A\\rvert+\\lvert B\\rvert+\\lvert C\\rvert-\\lvert A\\cap B\\rvert-\\lvert B\\cap C\\rvert-\\lvert A\\cap C\\rvert+\\lvert A\\cap B\\cap C\\rvert$$

Pair totals still include the triple visitors. An exact-pair region subtracts the triple; an only-$A$ region subtracts both pair totals and adds the triple back once.`,
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

Every even natural is already a natural, and $1\\in N\\setminus E$, so $E$ is a proper subset of $N$. Proper needs both inclusion and inequality; missing the odd $1$ supplies the inequality.

so the statement is True.`,
      `**B.** → False

Finite intuition says a proper subset is smaller. The map $f(n)=2n$ pairs each natural with a unique even and hits every even, so $|E|=|N|$ despite $E\\subsetneq N$. "Must have fewer" is a finite-set slogan.

so the statement is False.`,
      `**C.** → False

$f(n)=2n$ always outputs an even: $f(1)=2$, $f(2)=4$, never an odd. So it is the standard bijection onto the evens, not onto the odds. A bijection onto the odds would need something like $2n-1$.

so the statement is False.`,
      `**D.** → True

Two facts sit together: $E\\subsetneq N$ because odds are missing, and $f(n)=2n$ is a bijection, so $|E|=|N|$. That pair is exactly why "proper subset implies fewer elements" fails for infinite sets.

so the statement is True.`,
      `**E.** → False

$E$ itself is the counterexample: infinite (no last even) and still missing every odd, so not equal to $N$. Infinite subset does not mean "the whole set."

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 15,
    solution_overview: `Let $N=\\{1,2,3,\\ldots\\}$ and $E=\\{2,4,6,\\ldots\\}$. For finite sets a proper subset is strictly smaller. For infinite sets, equal cardinality means a bijection exists, even if one set sits properly inside the other.

The map $f(n)=2n$ is the standard pairing of each natural with an even. A different target (the odds) needs a different formula.`,
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

$6$ is written on the roster $\\{2,4,6,8,10,12\\}$, so $6\\in A$. Membership is that lookup, not a subset test.

so the statement is True.`,
      `**B.** → False

$\\{6\\}$ is a set, and $A$'s roster is six even integers, none of them a set. So $\\{6\\}\\notin A$ even though $\\{6\\}\\subseteq A$ because $6\\in A$.

so the statement is False.`,
      `**C.** → True

$\\{6,8\\}\\subseteq A$ asks whether each of $6$ and $8$ sits on the roster; both do. Subsethood never asks whether the box $\\{6,8\\}$ itself appears as an element.

so the statement is True.`,
      `**D.** → True

$\\emptyset$ has no member that could sit outside $A$, so $\\emptyset\\subseteq A$ vacuously. This is not $\\emptyset\\in A$; the empty set is not one of the six even numbers.

so the statement is True.`,
      `**E.** → True

Six distinct numbers give $2^6=64$ subsets. Proper subsets drop only $A$ itself, leaving

$$64-1=63$$

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `Let $A=\\{2,4,6,8,10,12\\}$, six even numbers and nothing else.

Membership $x\\in A$ asks whether $x$ is one of those six numbers. Subsethood $S\\subseteq A$ asks whether every member of $S$ is one of those numbers. The two questions disagree as soon as the left-hand object is a set rather than a number.

A set of $n$ elements has $2^n$ subsets. Proper subsets drop $A$ itself.`,
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

Factor the quadratic:

$$x^2-5x+6=(x-2)(x-3)=0$$

so the roots are $x=2$ and $x=3$. Both are integers, hence

$$A=\\{2,3\\}$$

The given $B=\\{2,3\\}$ is the same set, so the statement is True.`,
      `**B.** → True

$3$ is an integer and the quadratic vanishes at $3$:

$$3^2-5\\cdot 3+6=9-15+6=0$$

so $3\\in A$. Membership is that defining test succeeding, not a second roster scan.

so the statement is True.`,
      `**C.** → False

Both $2$ and $3$ solve the equation over $\\mathbb{Z}$, so $A=\\{2,3\\}$, not $\\{2\\}$. Keeping "only the smaller root" quietly adds an extra constraint $x<3$ that the set-builder never wrote.

so the statement is False.`,
      `**D.** → True

Two distinct integer roots give

$$\\lvert A\\rvert=2$$

Cardinality counts members, not the degree of the polynomial in some other sense.

so the statement is True.`,
      `**E.** → True

$C$ keeps natural-number roots of the same quadratic that also satisfy $x>2$. Of the two roots, $2>2$ fails and $3>2$ holds, so $C=\\{3\\}$.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `Let $A=\\{x\\in\\mathbb{Z}:x^2-5x+6=0\\}$ and $B=\\{2,3\\}$.

Solve the quadratic first, then keep those roots that lie in the named universe. The same equation with a tighter universe, or with an extra inequality, produces a different set.`,
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

Four letters, each kept or left out independently, give

$$2^4=16$$

subsets, so $|\\mathcal P(D)|=16$.

so the statement is True.`,
      `**B.** → True

$S\\in\\mathcal P(D)$ means $S\\subseteq D$. Both $w$ and $x$ are letters of $D$, so $\\{w,x\\}\\subseteq D$ and therefore $\\{w,x\\}\\in\\mathcal P(D)$. That is not $\\{w,x\\}\\in D$; $D$'s elements are letters, not pairs.

so the statement is True.`,
      `**C.** → True

Each $3$-element subset omits exactly one of the four letters, so there are four of them, matching

$$\\binom{4}{3}=4$$

so the statement is True.`,
      `**D.** → True

The power set contains every subset of $D$, including $D$ itself, because $D\\subseteq D$. This is $D\\in\\mathcal P(D)$, not $D\\in D$.

so the statement is True.`,
      `**E.** → False

The pairs of four letters number

$$\\binom{4}{2}=6$$

not $5$. Claiming $5$ drops one pair with no justification.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Let $D=\\{w,x,y,z\\}$. Four letters mean $2^4$ subsets, which is the size of the power set $\\mathcal P(D)$.

A set $S$ belongs to $\\mathcal P(D)$ precisely when $S\\subseteq D$. Subsets of a fixed size $k$ are counted by $\\binom{4}{k}$.`,
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

Walk through the members of $E$: $1,2,3$ all appear in $F=\\{1,2,3,4\\}$, so $E\\subseteq F$. A counterexample would have to be a member of $E$ missing from $F$, and there is none.

so the statement is True.`,
      `**B.** → True

Proper inclusion is $E\\subseteq F$ together with $E\\ne F$. Every member of $E$ sits in $F$, and the extra $4\\in F\\setminus E$ supplies the inequality. So $E\\subsetneq F$.

so the statement is True.`,
      `**C.** → False

Reverse inclusion would need every member of the larger $F$ to sit in $E$. The same $4$ is now a counterexample: $4\\in F$ and $4\\notin E$. One witness kills $F\\subseteq E$.

so the statement is False.`,
      `**D.** → True

$E\\subseteq E$ is reflexive: $1,2,3$ all sit in $E$ by construction. This is ordinary inclusion, not proper.

so the statement is True.`,
      `**E.** → False

Proper self-inclusion would need $E\\ne E$ as well. The two sides are the same list $\\{1,2,3\\}$, so the inequality half is impossible.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Let $E=\\{1,2,3\\}$ and $F=\\{1,2,3,4\\}$.

Ordinary inclusion $X\\subseteq Y$ asks whether every member of $X$ sits in $Y$. Proper inclusion $X\\subsetneq Y$ needs that inclusion and $X\\ne Y$. Subsethood is not symmetric. Ordinary self-inclusion always holds; proper self-inclusion would need $X\\ne X$.`,
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

The three pairs use distinct numbers: $1,2$ never meet $3,4$ or $5,6$, and $3,4$ never meet $5,6$. Every pairwise intersection is empty.

so the statement is True.`,
      `**B.** → True

Join the three pairs:

$$\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=\\{1,2,3,4,5,6\\}=G$$

so the union of the blocks equals $G$, so the statement is True.`,
      `**C.** → True

The blocks of $\\mathcal S$ are nonempty, pairwise disjoint, and their union is $G$. All three partition conditions hold, so $\\mathcal S$ partitions $G$.

so the statement is True.`,
      `**D.** → False

$\\mathcal S'=\\{\\{1,2\\},\\{2,3,4\\},\\{5,6\\}\\}$ overlaps at $2$:

$$\\{1,2\\}\\cap\\{2,3,4\\}=\\{2\\}$$

Pairwise disjointness fails, so $\\mathcal S'$ is not a partition even though the union still covers $G$.

so the statement is False.`,
      `**E.** → False

A block of a partition of $G$ must be a subset of $G$. Replacing $\\{5,6\\}$ by $\\{5,6,7\\}$ smuggles $7\\notin G$. Disjointness and a union that happens to cover $G$ cannot legalize an outsider.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `Let $G=\\{1,2,3,4,5,6\\}$ and $\\mathcal S=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$.

A collection partitions $G$ when the blocks are nonempty subsets of $G$, pairwise disjoint, and their union equals $G$. An overlap, a hole, or an outsider smuggled into a block is enough to fail.`,
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

Every positive even is already a natural number, so $H\\subseteq\\mathbb N$. Subsethood does not require $H$ to contain the odds; it only requires that nothing in $H$ sit outside $\\mathbb N$. A counterexample would have to be a positive even that was not a natural, and there is none, so the statement is True.`,
      `**B.** → False

If $H$ were finite it would have a largest even $2N$, but $2(N+1)$ is still in $H$ and strictly larger. The list $2,4,6,\\ldots$ never ends, so $H$ is infinite. Finiteness is not inherited from being a subset of $\\mathbb N$; $\\mathbb N$ itself is infinite, and so is this subset, so the statement is False.`,
      `**C.** → False

Equality needs the same members. Odd $1$ sits in $\\mathbb N$ and is not even, so $1\\in\\mathbb N\\setminus H$. That single witness forces $H\\ne\\mathbb N$ even though $H\\subseteq\\mathbb N$. $H=\\mathbb N$ would require every natural to be even, so the statement is False.`,
      `**D.** → True

The map $f(n)=2n$ is one-to-one because $2n=2m$ forces $n=m$, and it is onto $H$ because every positive even is $f$ of half of it. That is a bijection $\\mathbb N\\to H$, which is what "pairs every natural with exactly one even and vice versa" says. The formula always outputs an even, so the codomain really is $H$, not $\\mathbb N$, so the statement is True.`,
      `**E.** → False

Proper inclusion is true: odds such as $1$ are missing. The same bijection $f(n)=2n$ still forces $|H|=|\\mathbb N|$. Same cardinality with a proper subset is why "strictly fewer" fails for infinite sets. The slogan is a finite-set habit; it would hold if $H$ were finite, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `Let $\\mathbb N=\\{1,2,3,\\ldots\\}$ and let $H=\\{2,4,6,\\ldots\\}$ be the positive even integers.

Subsethood $H\\subseteq\\mathbb N$ asks whether every even is a natural. Equality needs the same members. Finiteness would require a largest even. Cardinality of infinite sets is decided by bijections: the map

$$f(n)=2n$$

sends each natural to a unique even. For infinite sets, a proper subset can still have the same cardinality as the whole.`,
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

$K$ lists two objects: the bare $a$, and the singleton $\\{a\\}$. Membership $a\\in K$ is the first of those. Braces matter: this letter asks about the unwrapped object, not about $\\{a\\}$. The two questions part company in general; here both happen to be true, so the statement is True.`,
      `**B.** → True

The second listed object is $\\{a\\}$ itself, so $\\{a\\}\\in K$. That is membership of a set-object, not subsethood. A roster that listed only $a$ would make this false. The extra braces on the second member are what make $K$ unusual, so the statement is True.`,
      `**C.** → True

$\\{a\\}\\subseteq K$ asks whether $a\\in K$. The roster of $K$ begins with the bare object $a$, so $a\\in K$ holds, and the singleton is a subset. This is a different question from $\\{a\\}\\in K$, though that happens to be true here as well. In a set such as $\\{a\\}$ the $\\in$ version would fail while this $\\subseteq$ version still held, so the statement is True.`,
      `**D.** → True

$\\{\\{a\\}\\}\\subseteq K$ asks whether $\\{a\\}\\in K$. The second listed object of $K$ is exactly $\\{a\\}$, so the test succeeds. One extra pair of braces shifts the test from $a$ to $\\{a\\}$. Miscounting braces here is the usual error: testing $a\\in K$ instead of $\\{a\\}\\in K$, so the statement is True.`,
      `**E.** → True

The two listed objects are different: an element and a one-element set containing that element. Two distinct members give $|K|=2$. Collapsing them because "they both mention $a$" would report $|K|=1$ and destroy every $\\in$ distinction the other letters use, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 22,
    solution_overview: `Read the braces carefully. In $K=\\{a,\\{a\\}\\}$ there are two listed objects: the bare object $a$, and the singleton set $\\{a\\}$. Those are different things.

Membership $\\in$ reads the roster. Subsethood $S\\subseteq K$ asks whether every member of $S$ sits in $K$. In particular $\\{x\\}\\subseteq K$ is the same test as $x\\in K$. Cardinality counts distinct members.`,
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

Union $A\\cup B$ keeps every number in at least one of the two lists:

$$A\\cup B=\\{1,2,3,4,5,6,7,8\\}$$

Complement inside $U=\\{1,\\ldots,10\\}$ is whatever remains:

$$(A\\cup B)^c=\\{9,10\\}$$

Including $8$ would require $8\\notin B$, which is false. Complement of a union is "outside both," so the statement is True.`,
      `**B.** → True

De Morgan's first law says the complement of a union is the intersection of the complements:

$$(A\\cup B)^c=A^c\\cap B^c$$

Scan $U$: $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$, so the intersection is $\\{9,10\\}$, matching $(A\\cup B)^c$. The numbers $6,7,8$ miss $A$ but sit in $B$, so they fail $B^c$, so the statement is True.`,
      `**C.** → True

De Morgan's second law says the complement of an intersection is the union of the complements:

$$(A\\cap B)^c=A^c\\cup B^c$$

Here $A\\cap B=\\{4,5\\}$, so the complement in $U$ is $\\{1,2,3,6,7,8,9,10\\}$. Escaping an intersection takes only escaping one set, so the union of complements is large. Copying $(A\\cup B)^c$ here would undercount to $\\{9,10\\}$, so the statement is True.`,
      `**D.** → False

Intersection keeps only numbers that sit in both lists. Scan $A$ against $B$: $4$ and $5$ are shared, while $6$ sits in $B$ and misses $A$:

$$A\\cap B=\\{4,5\\}$$

The claimed $\\{4,5,6\\}$ pads the overlap with a neighbour. $A$ would have to list $6$ for that extra element to survive, so the statement is False.`,
      `**E.** → False

Once $A\\cap B=\\{4,5\\}$, the complement in $U$ must drop $4$ and $5$ and keep everything else, including $6,7,8$:

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}$$

The claimed list keeps $4$ and $5$ while omitting $6,7,8$: the opposite of a complement. Complement of the overlap cannot contain the overlap, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `Complements are taken inside $U=\\{1,\\ldots,10\\}$ with $A=\\{1,\\ldots,5\\}$ and $B=\\{4,\\ldots,8\\}$.

De Morgan's two identities are

$$(A\\cup B)^c=A^c\\cap B^c,\\qquad (A\\cap B)^c=A^c\\cup B^c$$

Complement of a union is "outside both." Complement of an intersection is "outside at least one." Intersection itself keeps only the shared members.`,
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

Product size is the number of cells in a $2$ by $3$ grid:

$$|A\\times B|=2\\cdot 3=6$$

The six pairs are $(1,x),(1,y),(1,z),(2,x),(2,y),(2,z)$. Product size is cells, not the five distinct symbols. $(1,x)$ and $(2,x)$ are different cells even though they share a letter, so the statement is True.`,
      `**B.** → True

$(2,x)$ has first slot in $A=\\{1,2\\}$ and second in $B=\\{x,y,z\\}$. Both tests succeed, so $(2,x)\\in A\\times B$. Swapping the slots would exit this product: $(x,2)$ has a letter first, which $A\\times B$ never allows. A solver who treated pairs as unordered would keep both orientations, so the statement is True.`,
      `**C.** → False

$(x,2)$ starts with a letter, and $x\\notin A$. Ordered pairs treat $(2,x)$ and $(x,2)$ as different objects; the second lives in $B\\times A$. Having both symbols available somewhere is not enough unless they sit in the required slots, so the statement is False.`,
      `**D.** → False

$(2,x)\\in A\\times B$ but $2\\notin B$, so that pair cannot sit in $B\\times A$. Different members mean unequal sets, even though both products have size $6$. Equal cardinality never forces equal Cartesian products when the factor order flips, so the statement is False.`,
      `**E.** → True

Counts agree by the product rule:

$$|B\\times A|=3\\cdot 2=6=|A\\times B|$$

Member lists do not agree. Size equality is commutative; set equality of $A\\times B$ with $B\\times A$ would need $A=B$ (or a degenerate empty factor), which these two sets are not, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `An ordered pair $(a,b)$ lands in $A\\times B$ only when the first slot is from $A=\\{1,2\\}$ and the second from $B=\\{x,y,z\\}$.

The product rule gives the count:

$$|A\\times B|=|A|\\cdot|B|$$

Reversing the factors produces $B\\times A$, whose pairs have a letter first. Same count does not force equal sets: $(2,x)$ and $(x,2)$ are different ordered pairs.`,
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

Subsethood would need every point of $(1,5)$ to satisfy $x\\ge 3$. The leftover strip $(1,3)$ is the obstruction; $x=2$ sits in $A$ and misses $B$. The inclusion would hold if $A$ had started at $3$, so the statement is False.`,
      `**B.** → True

Numbers satisfying both $1<x<5$ and $x\\ge 3$ form the tighter interval $[3,5)$:

$$A\\cap B=[3,5)$$

The lower end $3$ is closed because $3\\in A$ and $3\\in B$; the upper end $5$ stays open because $5\\notin A$. Closing $5$ would include a point $A$ excluded. Opening $3$ would throw out a point both sets contain, so the statement is True.`,
      `**C.** → False

$B$ is unbounded above, so it contains numbers far past $A$. Witness $x=10$: in $B$, not in $A$. Reverse inclusion would require $B$ to stop at $5$, which $[3,\\infty)$ does not. One large witness kills $B\\subseteq A$, so the statement is False.`,
      `**D.** → True

From just above $1$ onward there is always coverage: $A$ handles $(1,5)$, $B$ handles $[3,\\infty)$. So

$$A\\cup B=(1,\\infty)$$

The point $1$ itself is excluded from both inputs, matching the open left end. Including $1$ would require one of the two sets to contain it, and neither does, so the statement is True.`,
      `**E.** → True

$A\\setminus B=(1,3)$, which is nonempty. Explicitly $x=2$ satisfies $1<2<5$ but $2<3$. One witness is all an existence claim needs. The leftover strip would vanish only if $A$ had started at $3$, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `Rewrite in interval notation: $A=(1,5)$ and $B=[3,\\infty)$.

Intersection keeps numbers that satisfy both inequalities. Union keeps numbers that satisfy at least one. Difference $A\\setminus B$ is the leftover strip of $A$ to the left of $B$. Subsethood $A\\subseteq B$ fails as soon as a point of $A$ misses $B$.`,
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

Difference $A\\setminus B$ deletes the shared $3,4$ from $A$, leaving $\\{1,2\\}$. Difference $B\\setminus A$ leaves $\\{5,6\\}$. Join the leftovers:

$$A\\triangle B=\\{1,2\\}\\cup\\{5,6\\}=\\{1,2,5,6\\}$$

Symmetric difference is "exactly one," not "at least one." Including $3$ would rebuild the union, so the statement is True.`,
      `**B.** → False

The definition joins the leftovers by $\\cup$, not $\\cap$. Those leftovers $\\{1,2\\}$ and $\\{5,6\\}$ are disjoint, so replacing union by intersection collapses to $\\emptyset$, contradicting the four-element set $\\{1,2,5,6\\}$. Outer buckets of a Venn diagram never overlap, so the statement is False.`,
      `**C.** → False

Symmetric difference excludes the overlap. Here $A\\cap B=\\{3,4\\}$ and $A\\triangle B=\\{1,2,5,6\\}$, which share nothing. So $A\\cap B\\nsubseteq A\\triangle B$. The inclusion would hold only if the overlap were empty, so the statement is False.`,
      `**D.** → True

If $A$ and $B$ share nothing, then $A\\setminus B=A$ and $B\\setminus A=B$, so

$$A\\triangle B=A\\cup B$$

There is no middle bucket to discard. This is a general identity, not a scan of the given lists; the given lists are not disjoint, which is why $A\\triangle B$ and the union differ here, so the statement is True.`,
      `**E.** → True

$|A|+|B|$ double-counts the overlap, and $A\\triangle B$ throws both copies away:

$$|A\\triangle B|=4+4-2\\cdot 2$$

$$=4$$

That matches the four-element set $\\{1,2,5,6\\}$. Subtracting the overlap only once would give the union size $6$ instead, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `Symmetric difference keeps what is in exactly one of the two sets:

$$A\\triangle B=(A\\setminus B)\\cup(B\\setminus A)$$

With $A=\\{1,2,3,4\\}$ and $B=\\{3,4,5,6\\}$, the overlap is $A\\cap B$, the two leftovers are $A\\setminus B$ and $B\\setminus A$, and those leftovers are joined by union, not intersection. Shared elements are excluded. If the sets are disjoint, each difference equals the whole set. Counting-wise,

$$|A\\triangle B|=|A|+|B|-2|A\\cap B|$$`,
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

An ordered pair (rep, account) is a cell in a $5$ by $8$ grid:

$$5\\cdot 8=40$$

Product size is cells, not $5+8=13$. Each rep can be paired with each account independently, so the statement is True.`,
      `**B.** → False

Coverage pairs are ordered: first slot is the rep, second is the account. $(\\text{Maria},\\text{Account 3})$ and $(\\text{Account 3},\\text{Maria})$ are different objects; the second treats Account $3$ as the rep. Order is the whole point of a Cartesian product. Commutativity would hold only if the two coordinates were the same type and the pair happened to be a diagonal, so the statement is False.`,
      `**C.** → True

Zero accounts means the second factor is empty, so $r\\cdot 0=0$ for any number $r$ of reps. Without a second coordinate there is no ordered pair. Hiring more reps cannot create an account slot that does not exist, so the statement is True.`,
      `**D.** → False

Membership $(r,a)\\in\\text{Reps}\\times\\text{Accounts}$ means $r\\in\\text{Reps}$ and $a\\in\\text{Accounts}$. The claim swaps both tests. That swapped reading would put Maria among the accounts. The pair (Maria, Account $3$) is in the product only under the original slot tests, so the statement is False.`,
      `**E.** → True

Six reps and eight accounts:

$$6\\cdot 8=48$$

Equivalently the new rep adds eight new pairs to the old forty. The product rule scales with either factor; growing the first factor by one multiplies by the second factor, not by $1$, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `A coverage assignment is an ordered pair $(\\text{rep},\\text{account})$ in the Cartesian product $\\text{Reps}\\times\\text{Accounts}$.

The product rule gives the count:

$$|\\text{Reps}\\times\\text{Accounts}|=(\\text{number of reps})\\cdot(\\text{number of accounts})$$

First coordinate is the rep, second is the account. Membership $(r,a)\\in\\text{Reps}\\times\\text{Accounts}$ means $r\\in\\text{Reps}$ and $a\\in\\text{Accounts}$. An empty factor forces the product to be empty.`,
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

A temperature must satisfy $-4<T<4$ and $T\\ge-1$. Keep the tighter limit at each end: the lower limit becomes $-1$ (included, because $-1$ is frost-safe: $1<16$, and irrigation allows $-1$), the upper limit stays $4$ (excluded, because $4^2=16$ is not strictly less than $16$):

$$A\\cap B=[-1,4)$$

Closing $4$ would include a temperature $A$ rejects, so the statement is True.`,
      `**B.** → False

$4$ sits in $B$ because $4\\ge-1$, but it fails $T^2<16$, so $4\\notin A$ and therefore $4\\notin A\\cap B$. The interval $[-1,4)$ is open at $4$ for the same reason. Being in $B$ alone never rescues a temperature that $A$ rejects. The endpoint $4$ is the whole issue, so the statement is False.`,
      `**C.** → False

$A=(-4,4)$ already excluded $\\pm 4$, so the complement must collect them:

$$A^c=(-\\infty,-4]\\cup[4,\\infty)$$

The claimed strict inequalities $T<-4$ or $T>4$ discard those two boundary temperatures. Open-interval complements are closed on the outside; flipping both inequalities to strict is the classic miswrite, so the statement is False.`,
      `**D.** → False

$A$ covers $(-4,4)$ and $B$ carries on upward from $-1$, so together they reach every temperature above $-4$:

$$A\\cup B=(-4,\\infty)$$

Take $T=-5$: not frost-safe ($25\\ge 16$) and not irrigating ($-5<-1$). One missing real is enough. The whole ray $(-\\infty,-4]$ lies outside both pieces, so the statement is False.`,
      `**E.** → True

$A\\setminus B=(-4,-1)$, frost-safe yet dry. At $T=-2$ we have $4<16$ and $-2<-1$, so irrigation stays off. One witness is enough. That leftover slice would vanish if irrigation started at $-4$ instead of $-1$, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `The frost set is $A=\\{T\\in\\mathbb R:T^2<16\\}=(-4,4)$ and the irrigation set is $B=\\{T\\in\\mathbb R:T\\ge-1\\}=[-1,\\infty)$.

Intersection keeps temperatures that pass both rules; the tighter bound wins at each end, and an endpoint is included only if it passes both tests. Union covers temperatures that pass at least one rule. Complement $A^c$ collects every real that $A$ missed, including the endpoints $A$ excluded. Difference $A\\setminus B$ is frost-safe yet dry.`,
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

Inclusion-exclusion removes the whole overlap once:

$$|A\\cup B|=120+90-50$$

$$=160$$

The claimed $170$ subtracts only $40$, as if only the excess over $200$ needed deleting. The correct subtraction is the given $50$. Union size $170$ would also make "neither" equal $30$, disagreeing with the four-region split, so the statement is False.`,
      `**B.** → True

First the union:

$$|A\\cup B|=120+90-50=160$$

Neither is survey minus union:

$$200-160=40$$

Using $170$ for the union would report $30$ instead. The four regions $70+50+40+40=200$ confirm this leftover, so the statement is True.`,
      `**C.** → False

A-only peels the overlap out of $A$:

$$|A\\setminus B|=120-50=70$$

not $90$. The $90$ would be right only if the products shared nobody. Using $90$ for A-only would invent ten phantom customers and fail to rebuild the union $160$, so the statement is False.`,
      `**D.** → True

The $50$ who like both already sit inside the $120$ who like $A$. That is all $A\\cap B\\subseteq A$ asks, and it holds for any pair of sets, whatever the numbers. Intersection is always a subset of each factor; the survey figures are not needed for this one, so the statement is True.`,
      `**E.** → False

$120+90=210$ exceeds $200$ by $10$, which is only a floor on the overlap, not an exact value. Any overlap from $10$ up to $\\min(120,90)=90$ could fit the headlines, and the survey already reports $50$. "Exactly $10$" confuses a lower bound with a measurement, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `A survey of $200$ customers has $|A|=120$ who like product A, $|B|=90$ who like product B, and $|A\\cap B|=50$ who like both.

Inclusion-exclusion counts each liker once:

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

A-only is $|A|-|A\\cap B|$. Neither is survey size minus the union. Intersection is always a subset of each factor. The excess $|A|+|B|-200$ is only a floor on the overlap, not a measurement of it.`,
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

Putting $A$ and $B$ together keeps $1,2,3,4$ from $A$ and the newcomers $5,6$ from $B$. The shared $3,4$ are not second copies:

$$A\\cup B=\\{1,2,3,4,5,6\\}$$

Stopping at $4$ would throw $5$ and $6$ away, so the statement is True.`,
      `**B.** → True

Shared numbers are $3$ and $4$ only. $1,2$ miss $B$, and $5,6$ miss $A$:

$$A\\cap B=\\{3,4\\}$$

Intersection is that overlap, not the combined six-number list. A union-minded scan would report six instead of two, so the statement is True.`,
      `**C.** → True

Difference $A\\setminus B$ deletes a member of $A$ only when it also sits in $B$. Deleting the shared pair $3,4$ leaves

$$A\\setminus B=\\{1,2\\}$$

Dropping $2$ because it sits next to $3$ would be treating nearness as membership, so the statement is True.`,
      `**D.** → False

$B\\setminus A=\\{5,6\\}$, while $A\\setminus B=\\{1,2\\}$. The two leftovers share nothing, so they are not equal. Difference is not commutative: the two private regions are opposite sides of the overlap. Equality would hold only if those private regions were the same set, so the statement is False.`,
      `**E.** → True

Scan $A$ against $C$:

$$A\\cap C=\\emptyset$$

None of $7,8,9$ appears in $\\{1,2,3,4\\}$. Disjointness is that empty overlap. A single shared number such as $4\\in C$ would kill it, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `Let $A=\\{1,2,3,4\\}$, $B=\\{3,4,5,6\\}$, and $C=\\{7,8,9\\}$.

Union keeps every tagged number once. Intersection keeps the shared part. Difference $X\\setminus Y$ keeps members of $X$ missing from $Y$; the two directions $A\\setminus B$ and $B\\setminus A$ are opposite private regions. Two sets are disjoint when their intersection is empty.`,
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

A union must contain every member of each input. Putting $A$ and $B$ together gives $10,20,30,40,50$ from $A$ and the newcomer $60$ from $B$:

$$A\\cup B=\\{10,20,30,40,50,60\\}$$

The overlap $30,40,50$ is not written twice. That is the claimed set, so the statement is True.`,
      `**B.** → True

Intersection keeps only the numbers that clear both lists. Scan $A$ against $B$: $10$ and $20$ miss $B$, while $30,40,50$ sit in both, and $60$ misses $A$. So

$$A\\cap B=\\{30,40,50\\}$$

so the statement is True.`,
      `**C.** → True

Difference $A\\setminus B$ deletes a member of $A$ only when that member also sits in $B$. Scanning $A$ against $B$ leaves $10,20$, because $30,40,50$ are shared:

$$A\\setminus B=\\{10,20\\}$$

so the statement is True.`,
      `**D.** → False

The opposite leftover is $B\\setminus A=\\{60\\}$, while $A\\setminus B=\\{10,20\\}$. Already the sizes disagree ($1$ versus $2$), and $10$ sits in the first leftover but not the second. Difference is not commutative.

so the statement is False.`,
      `**E.** → True

Disjointness means the intersection is empty. Every member of $A$ is at least $10$, while $C$ stops at $3$, so $A\\cap C=\\emptyset$.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `Let $A=\\{10,20,30,40,50\\}$, $B=\\{30,40,50,60\\}$, and $C=\\{1,2,3\\}$.

Intersection keeps numbers tagged in both $A$ and $B$. Union keeps every tagged number once. Difference $A\\setminus B$ keeps the $A$-only numbers; $B\\setminus A$ keeps the $B$-only numbers. Two sets are disjoint when they share nothing.`,
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

Putting $A$ and $B$ together keeps $a,b,c,d$ from $A$ and the newcomer $e$ from $B$:

$$A\\cup B=\\{a,b,c,d,e\\}$$

The shared $c$ and $d$ are not written twice, so the statement is True.`,
      `**B.** → True

Shared letters are $c$ and $d$ only. $a$ and $b$ miss $B$, and $e$ misses $A$, so

$$A\\cap B=\\{c,d\\}$$

so the statement is True.`,
      `**C.** → True

$A\\setminus B$ keeps $A$'s private letters. $c$ and $d$ sit in $B$, so they leave, and $a,b$ stay:

$$A\\setminus B=\\{a,b\\}$$

so the statement is True.`,
      `**D.** → False

$B\\setminus A=\\{e\\}$, a singleton, while $A\\setminus B=\\{a,b\\}$. Different sizes already forbid equality, and $a$ sits in one leftover but not the other.

so the statement is False.`,
      `**E.** → True

$C=\\{x,y\\}$ shares no letter with $A=\\{a,b,c,d\\}$, so $A\\cap C=\\emptyset$. Disjointness is that empty overlap.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `Let $A=\\{a,b,c,d\\}$, $B=\\{c,d,e\\}$, and $C=\\{x,y\\}$.

Lining $A$ up against $B$, shared letters form the intersection, every letter written once forms the union, and each set's private letters form the two differences. Disjointness of $A$ and $C$ is empty overlap.`,
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

Putting $A$ and $B$ together covers $1$ through $8$:

$$A\\cup B=\\{1,2,3,4,5,6,7,8\\}$$

Complement inside $U=\\{1,\\ldots,10\\}$ is therefore $\\{9,10\\}$. Those two numbers sit in neither $A$ nor $B$.

so the statement is True.`,
      `**B.** → True

De Morgan's first law says $(A\\cup B)^c=A^c\\cap B^c$. Form $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$. Their intersection is $\\{9,10\\}$, matching the complement of the union $A\\cup B=\\{1,\\ldots,8\\}$.

so the statement is True.`,
      `**C.** → True

The overlap is $A\\cap B=\\{4,5\\}$. Removing those two from $U$ leaves $\\{1,2,3,6,7,8,9,10\\}$. Joining $A^c=\\{6,7,8,9,10\\}$ with $B^c=\\{1,2,3,9,10\\}$ produces the same list, so $(A\\cap B)^c=A^c\\cup B^c$.

so the statement is True.`,
      `**D.** → True

$A^c$ is $U$ minus $A$: drop $1$ through $5$, keep

$$A^c=\\{6,7,8,9,10\\}$$

Complement is a scan of the universe, not of $A$ rewritten backwards.

so the statement is True.`,
      `**E.** → True

$A\\cap B=\\{4,5\\}$, so removing those two from $U$ leaves

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}$$

That list keeps $A$-only, $B$-only, and neither.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$. A complement $X^c$ is everything in $U$ that $X$ leaves out.

De Morgan's laws say taking complements swaps union and intersection:

$$(A\\cup B)^c=A^c\\cap B^c,\\qquad (A\\cap B)^c=A^c\\cup B^c$$

Escaping a union means escaping both sets at once. Escaping an intersection takes only escaping one of them.`,
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

$$(A\\cup B)^c=U^c=\\emptyset$$

There is no leftover integer between $1$ and $12$.

so the statement is True.`,
      `**B.** → True

$A^c$ is the evens and $B^c$ is the odds, so their intersection is empty: nothing is even and odd at once. That matches $(A\\cup B)^c=\\emptyset$, which is De Morgan in this extreme case.

so the statement is True.`,
      `**C.** → True

$A\\cap B=\\emptyset$ because no integer is odd and even, so $(A\\cap B)^c=U$. The other side $A^c\\cup B^c$ is evens joined with odds, again $U$. Complementing the empty set relative to $U$ restores $U$ in full.

so the statement is True.`,
      `**D.** → True

Deleting the odds from $U$ leaves the evens, so

$$A^c=\\{2,4,6,8,10,12\\}$$

Complement of a partition block is the other block.

so the statement is True.`,
      `**E.** → True

Removing nothing from $U$ leaves $U$, so $(A\\cap B)^c=U$. The claimed list is that full $\\{1,\\ldots,12\\}$. Complementing $\\emptyset$ relative to a universe always gives the universe back.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `Let $U=\\{1,2,\\ldots,12\\}$, with $A=\\{1,3,5,7,9,11\\}$ the odds and $B=\\{2,4,6,8,10,12\\}$ the evens.

This pair partitions $U$: no overlap, no gaps. No whole number is odd and even at once, so $A\\cap B=\\emptyset$. Every whole number in $U$ is one or the other, so $A\\cup B=U$. Complements of partition blocks swap the two blocks. De Morgan's identities still apply in these extreme cases.`,
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

Putting $A$ and $B$ together covers $\\{p,q,r,s\\}$. Of the six letters in $U$ only $t$ and $u$ are left out:

$$(A\\cup B)^c=\\{t,u\\}$$

so the statement is True.`,
      `**B.** → True

$A^c=\\{s,t,u\\}$ and $B^c=\\{p,q,t,u\\}$ share $t$ and $u$, matching $(A\\cup B)^c$. Letter $s$ fails the intersection because $s\\in B$. De Morgan's first law is that agreement.

so the statement is True.`,
      `**C.** → True

$A\\cap B=\\{r\\}$, so $(A\\cap B)^c$ is every letter of $U$ except $r$. Joining the two complements $A^c=\\{s,t,u\\}$ and $B^c=\\{p,q,t,u\\}$ produces the same five letters $\\{p,q,s,t,u\\}$.

so the statement is True.`,
      `**D.** → True

Drop $p,q,r$ from $U$ and $\\{s,t,u\\}$ remain:

$$A^c=\\{s,t,u\\}$$

Complement does not also drop $s$ just because $s\\in B$; that would be $A^c\\cap B^c$.

so the statement is True.`,
      `**E.** → True

Remove the single shared letter $r$ from $U$ and $\\{p,q,s,t,u\\}$ stay. $p$ and $q$ stay because they miss $B$; $s$ stays because it misses $A$.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `Let $U=\\{p,q,r,s,t,u\\}$, $A=\\{p,q,r\\}$, and $B=\\{r,s\\}$. Complements are taken inside $U$.

De Morgan says a letter is outside a union when it is outside both sets, and outside an intersection when it is outside at least one of them.`,
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

Two choices for the first slot and three for the second give

$$\\lvert A\\times B\\rvert=2\\cdot 3=6$$

Product size is the number of cells, not the number of distinct symbols used.

so the statement is True.`,
      `**B.** → True

$(1,x)$ has first slot from $A$ and second from $B$, so $(1,x)\\in A\\times B$. Both membership tests succeed.

so the statement is True.`,
      `**C.** → False

$(x,1)$ has a letter in the first slot, and $x\\notin A$. Ordered pairs treat $(1,x)$ and $(x,1)$ as different objects; the second lives in $B\\times A$, not in $A\\times B$.

so the statement is False.`,
      `**D.** → False

Every pair in $A\\times B$ reads (number, letter); every pair in $B\\times A$ reads (letter, number). In particular $(1,x)$ sits in the first product and cannot sit in the second, because $1\\notin B$. Equal size does not rescue set equality.

so the statement is False.`,
      `**E.** → True

Size ignores order:

$$2\\cdot 3=6,\\qquad 3\\cdot 2=6$$

Both products hold six pairs even though the pairs themselves differ.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `Let $A=\\{1,2\\}$ and $B=\\{x,y,z\\}$. An ordered pair records which object plays which role. The Cartesian product $A\\times B$ is the set of all pairs whose first entry comes from $A$ and whose second comes from $B$.

The product rule counts the cells:

$$\\lvert A\\times B\\rvert=\\lvert A\\rvert\\cdot\\lvert B\\rvert$$

Turning the product around gives $B\\times A$, the same count and a different set of pairs.`,
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

Three letters with two numbers each give

$$3\\cdot 2=6$$

ordered pairs, so $|A\\times B|=6$.

so the statement is True.`,
      `**B.** → True

$(m,1)$ has $m\\in A$ and $1\\in B$, so both slots of $A\\times B$ are filled correctly. Membership is that two-slot test.

so the statement is True.`,
      `**C.** → False

$(1,m)$ puts a number first, and $1\\notin A$. The first slot already fails, so the pair is out of $A\\times B$ (it does sit in $B\\times A$).

so the statement is False.`,
      `**D.** → False

$A\\times B$ is letter-first; $B\\times A$ is number-first. Witness: $(m,1)$ is on the first list and missing from the second, because $m\\notin B$. Set equality needs identical members, not identical counts.

so the statement is False.`,
      `**E.** → True

The product rule is commutative as a count:

$$3\\cdot 2=6,\\qquad 2\\cdot 3=6$$

The counts agree while the member lists share no pair.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 15,
    solution_overview: `Let $A=\\{m,n,p\\}$ and $B=\\{1,2\\}$. Pair every letter of $A$ with every number of $B$, always keeping the letter first. The product rule is $|A\\times B|=|A|\\cdot|B|$.

A pair belongs to $A\\times B$ only when its first entry comes from $A$ and its second from $B$. Writing the product the other way round gives six different pairs: the same count, a different set.`,
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

Shared $3,5,7$ leave $A$; $1$ and $9$ stay because they miss $B$:

$$A\\setminus B=\\{1,9\\}$$

so the statement is True.`,
      `**B.** → True

The opposite leftover deletes the same shared triple from $B$ and keeps $B$'s private numbers:

$$B\\setminus A=\\{11,13\\}$$

so the statement is True.`,
      `**C.** → True

Symmetric difference joins the two outer piles:

$$A\\triangle B=\\{1,9\\}\\cup\\{11,13\\}=\\{1,9,11,13\\}$$

Each of those four sits in exactly one of the original sets. Including $3$ would be keeping the overlap, which $A\\triangle B$ rejects.

so the statement is True.`,
      `**D.** → True

A number in $A\\setminus B$ is outside $B$; a number in $B\\setminus A$ is inside $B$. Those demands cannot hold together, so

$$(A\\setminus B)\\cap(B\\setminus A)=\\emptyset$$

so the statement is True.`,
      `**E.** → False

Union keeps the middle bucket $\\{3,5,7\\}$; symmetric difference throws it away. So

$$A\\triangle B=\\{1,9,11,13\\}\\ne\\{1,3,5,7,9,11,13\\}=A\\cup B$$

The two operations agree only when the overlap is empty, which it is not.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `Let $A=\\{1,3,5,7,9\\}$ and $B=\\{3,5,7,11,13\\}$.

The symmetric difference $A\\triangle B$ keeps the numbers belonging to exactly one of the two sets. It is the union of the two leftover piles $A\\setminus B$ and $B\\setminus A$. Union keeps the overlap as well; symmetric difference throws the overlap away. The two leftover piles cannot overlap.`,
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

$$A\\setminus B=A=\\{2,4,6\\}$$

so the statement is True.`,
      `**B.** → True

The same disjointness the other way: none of $B$'s odds is even, so nothing is deleted:

$$B\\setminus A=B=\\{1,3,5\\}$$

so the statement is True.`,
      `**C.** → True

With an empty middle bucket, symmetric difference is the two whole sets glued together:

$$A\\triangle B=\\{2,4,6\\}\\cup\\{1,3,5\\}=\\{1,2,3,4,5,6\\}$$

Each of the six numbers sits in exactly one of $A$ or $B$.

so the statement is True.`,
      `**D.** → True

The leftovers are the two whole sets, evens and odds. No even equals an odd, so their intersection is empty.

so the statement is True.`,
      `**E.** → True

Usually the union is bigger than the symmetric difference because it also keeps the shared members. Here the shared part is empty, so there is nothing extra for the union to add, and both sides equal $\\{1,2,3,4,5,6\\}$. Disjointness is exactly the situation in which $A\\triangle B=A\\cup B$.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `Let $A=\\{2,4,6\\}$ and $B=\\{1,3,5\\}$. Evens and odds share nothing, so the sets are disjoint: $A\\cap B=\\emptyset$.

Disjointness makes subtraction delete nobody. Symmetric difference then glues the two whole sets together, which is also the union, because there is no overlap to discard.`,
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

Adding $22+15$ counts the six two-game players twice. Subtracting once restores a single copy:

$$\\lvert A\\cup B\\rvert=22+15-6=31$$

so the statement is True.`,
      `**B.** → True

Chess-only is the chess headline minus the overlap:

$$22-6=16$$

Those $16$ sit in $A$ and not in $B$.

so the statement is True.`,
      `**C.** → True

Neither is the club total minus the union. First form the union:

$$22+15-6=31$$

Then

$$40-31=9$$

so the statement is True.`,
      `**D.** → False

Everyone playing both games is already someone playing at least one, so $A\\cap B\\subseteq A\\cup B$ always. Here $6<31$. Intersection cannot outnumber the union that contains it.

so the statement is False.`,
      `**E.** → True

Checkers-only is the checkers headline minus the overlap:

$$15-6=9$$

Those $9$ sit in $B$ and not in $A$.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `Of $40$ students, $|A|=22$ play chess, $|B|=15$ play checkers, and $|A\\cap B|=6$ play both.

Inclusion-exclusion counts the union by adding the headlines and subtracting the overlap once:

$$\\lvert A\\cup B\\rvert=\\lvert A\\rvert+\\lvert B\\rvert-\\lvert A\\cap B\\rvert$$

Chess-only is the chess headline minus the overlap; checkers-only is the checkers headline minus the overlap. "Neither" is the club total minus the union. The both-games group is part of the at-least-one group, so the intersection cannot outnumber the union.`,
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

Inclusion-exclusion counts each bilingual student once. Plug in the headlines $|A|=34$, $|B|=28$ and the overlap $12$:

$$|A\\cup B|=34+28-12$$

$$=50$$

Adding $34+28$ without subtracting would count the $12$ shared students twice. The claim is $|A\\cup B|=50$, so the statement is True.`,
      `**B.** → True

Spanish-only peels the overlap out of $A$:

$$|A\\setminus B|=34-12=22$$

Those $22$ sit in $A$ and not in $B$. Using $34-28$ would compare course sizes instead of removing the shared $12$, so the statement is True.`,
      `**C.** → True

Neither is whoever sits outside the union. First recover the union:

$$|A\\cup B|=34+28-12=50$$

Then subtract from the cohort of $60$:

$$60-50=10$$

Subtracting both headlines from $60$ without restoring the overlap would overcount this leftover, so the statement is True.`,
      `**D.** → False

Intersection is a subset of the union, so its size cannot exceed the union size. Here $|A\\cap B|=12$ and

$$|A\\cup B|=34+28-12=50$$

Already $12<50$. The claimed $|A\\cap B|>|A\\cup B|$ would need people in both languages who somehow missed the union, which is impossible, so the statement is False.`,
      `**E.** → True

French-only peels the overlap out of $B$:

$$|B\\setminus A|=28-12=16$$

Spanish-only is $34-12=22$, so the three playing regions rebuild the union: $22+12+16=50$. The claim is exactly $16$ in $B$ only, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Of $60$ students, $34$ take Spanish ($A$) and $28$ take French ($B$), with $|A\\cap B|=12$ in both.

Two-set counting uses inclusion-exclusion:

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

Spanish-only is $|A|-|A\\cap B|$. French-only is $|B|-|A\\cap B|$. Neither is the cohort minus the union. The overlap sits inside the union, so it cannot outnumber it.`,
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

The five members who use both facilities appear in each headline, so one copy comes off:

$$|A\\cup B|=20+18-5$$

$$=33$$

Adding $20+18$ without subtracting inflates the union to $38$, two copies of the overlap. The claim is $33$, so the statement is True.`,
      `**B.** → True

Pool-only is the pool headline minus the overlap:

$$|A\\setminus B|=20-5=15$$

Those $15$ use the pool and not the sauna. The count would stay $20$ only if the facilities shared nobody, so the statement is True.`,
      `**C.** → True

First the union of facility users:

$$|A\\cup B|=20+18-5=33$$

The leftover among $50$ members is

$$50-33=17$$

The four regions $15+5+13+17=50$ then account for the whole gym. Subtracting pool plus sauna from $50$ without restoring the five "both" members would overcount unused lockers, so the statement is True.`,
      `**D.** → False

Containment $A\\cap B\\subseteq A\\cup B$ forbids the intersection from beating the union. Compare the two sizes:

$$|A\\cap B|=5,\\qquad |A\\cup B|=20+18-5=33$$

Already $5<33$. Flipping a containment into a size comparison is the trap, so the statement is False.`,
      `**E.** → True

Sauna-only peels the overlap out of $B$:

$$|B\\setminus A|=18-5=13$$

Pool-only is $20-5=15$, so the three playing regions sum to $15+5+13=33$, recovering the union. This $13$ is the sauna-side peel, not a leftover "neither" count, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 20,
    solution_overview: `Of $50$ gym members, $20$ use the pool ($A$) and $18$ use the sauna ($B$), with $|A\\cap B|=5$ using both.

The same two-set census applies:

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

Pool-only is $|A|-|A\\cap B|$. Sauna-only is $|B|-|A\\cap B|$. Neither is membership minus the union. The five "both" members already sit inside the union.`,
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

Write the three-set formula and substitute the survey counts:

$$|A\\cup B\\cup C|=30+25+20-10-8-7+3$$

$$=53$$

The closing $+3$ puts back the all-three members who were subtracted once too often. Stopping after the pairwise subtractions would leave $50$ and undercount the union, so the statement is True.`,
      `**B.** → True

Someone who does all three activities automatically does each pair. Those $3$ people already sit inside the pairwise totals $10$, $8$, and $7$. That is why inclusion-exclusion adds them back at the end: they were subtracted once too often. They are not a fourth disjoint group hiding outside the pairs, so the statement is True.`,
      `**C.** → True

The pairwise total $|A\\cap B|=10$ still includes the cooks. Removing the triple isolates the exact-pair region:

$$|A\\cap B\\cap C^c|=10-3=7$$

Leaving the raw $10$ mixes "at least those two" with "exactly those two." Every pairwise headline in a three-set survey needs that triple subtracted before it names an exact-pair region, so the statement is True.`,
      `**D.** → True

The triple group is a subset of each pair, so its size cannot exceed any pairwise size. Check the three comparisons:

$$3\\le 10,\\qquad 3\\le 8,\\qquad 3\\le 7$$

Hence $3\\le\\min(10,8,7)$. A triple larger than a pair would mean people in all three who somehow missed one of the pairs, which is impossible, so the statement is True.`,
      `**E.** → False

The raw sum counts overlapping members several times:

$$|A|+|B|+|C|=30+25+20=75$$

The union counts each person once:

$$|A\\cup B\\cup C|=30+25+20-10-8-7+3=53$$

Already $53<75$. The claimed $53>75$ is backwards. A union matches the raw sum only when the three groups are completely separate, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 21,
    solution_overview: `Three hobby groups overlap: $|A|=30$ photography, $|B|=25$ hiking, $|C|=20$ cooking, with pairwise totals $|A\\cap B|=10$, $|A\\cap C|=8$, $|B\\cap C|=7$, and triple overlap $|A\\cap B\\cap C|=3$.

Three-set inclusion-exclusion corrects the raw sum twice, once for the pairs and once for the people counted in all three:

$$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$$

An exact-pair region is the pairwise total minus the triple. The triple group sits inside every pair, so its size cannot exceed any pairwise size. The union counts each person once, while $|A|+|B|+|C|$ counts overlapping members repeatedly.`,
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

Conjunction needs both halves true. Here $P$ is true ($7$ is prime) and $Q$ is false ($7$ is not even), so

$$P\\land Q=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

"Both prime and even" therefore fails. An "or" would survive on the prime side alone, so the statement is False.`,
      `**B.** → True

Inclusive or needs only one true side. $P$ is true, so

$$P\\lor Q=\\mathrm{T}\\lor\\mathrm{F}=\\mathrm{T}$$

even though $Q$ is false. Exclusive or would reject this row; mathematical "or" does not. The even side being false does no damage, so the statement is True.`,
      `**C.** → True

The inner conjunction $P\\land Q$ is already false, and negation flips it:

$$\\neg(P\\land Q)=\\neg\\mathrm{F}=\\mathrm{T}$$

It is indeed not the case that $7$ is both prime and even. This is $\\neg(P\\land Q)$, not $\\neg P\\land\\neg Q$, so the statement is True.`,
      `**D.** → False

"Neither prime nor even" is $\\neg P\\land\\neg Q$. But $\\neg P$ is false because $7$ is prime, so

$$\\neg P\\land\\neg Q=\\mathrm{F}\\land\\mathrm{T}=\\mathrm{F}$$

De Morgan says $\\neg(P\\land Q)\\equiv\\neg P\\lor\\neg Q$, an or of negations. Replacing that or by an and is the mix-up with $\\neg(P\\land Q)$, so the statement is False.`,
      `**E.** → False

$P\\lor Q$ is true, so its negation is false:

$$\\neg(P\\lor Q)\\equiv\\neg P\\land\\neg Q=\\mathrm{F}$$

Claiming this would mean $7$ is neither prime nor even, which already fails because $7$ is prime, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `The number $7$ is prime and is not even. Write $P$ for "$7$ is prime" and $Q$ for "$7$ is even". Then $P$ is true and $Q$ is false.

Conjunction $\\land$ is true only when both parts are true. Inclusive disjunction $\\lor$ is true when at least one part is true. Negation $\\neg$ flips a truth value. De Morgan identifies $\\neg(P\\land Q)$ with $\\neg P\\lor\\neg Q$, and $\\neg(P\\lor Q)$ with $\\neg P\\land\\neg Q$.`,
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

If an integer larger than $2$ were even, then $2$ would divide it as well, giving it at least three divisors. So it could not be prime. The only even prime is $2$, and the statement excludes it by $p>2$. Every remaining prime is odd. The restriction $p>2$ is load-bearing; without it, $2$ would be a counterexample, so the statement is True.`,
      `**B.** → False

A counterexample must live inside the domain and fail the conclusion. The test $2>2$ is false, so $2$ never enters the quantified range. It is an even prime, which looks perfect, but the statement never claimed anything about $2$. A genuine counterexample would need to be an even prime greater than $2$, and none exists, so the statement is False.`,
      `**C.** → True

Negating a universal swaps $\\forall$ for $\\exists$ and "odd" for "even," keeping $p>2$:

$$\\neg\\big(\\forall\\ \\text{prime } p>2,\\ p\\text{ is odd}\\big)\\equiv\\exists\\ \\text{prime } p>2\\text{ with } p\\text{ even}$$

The quoted sentence is that negation. The original is true, so this existential is false, but it is still the correctly formed negation, so the statement is True.`,
      `**D.** → False

This reverses the implication into its converse: every odd number above $2$ is prime. Test $9$: odd, greater than $2$, and $9=3\\cdot 3$ is not prime. One counterexample kills "every odd above $2$ is prime." The original arrow is prime $\\Rightarrow$ odd, not the reverse, so the statement is False.`,
      `**E.** → True

Euclid supplies infinitely many primes. Dropping the single prime $2$ leaves $3,5,7,\\ldots$, still infinite, all greater than $2$. Removing one element from an infinite set leaves an infinite set. Finiteness would require the primes above $2$ to run out, which Euclid forbids, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `The statement is: for every prime $p>2$, $p$ is odd. A prime has exactly two positive divisors, $1$ and itself. An even integer larger than $2$ would also be divisible by $2$, hence would have at least three divisors and could not be prime.

The domain is primes strictly greater than $2$. A counterexample must live in that domain and fail the conclusion. Negating a universal swaps $\\forall$ for $\\exists$ and reverses the conclusion, keeping $p>2$. The converse swaps the two halves. Euclid's theorem says there are infinitely many primes.`,
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

Rule (1) is "enrolled in Advanced $\\Rightarrow$ passed Intermediate." Maria is enrolled in Advanced, so modus ponens yields the Intermediate pass:

$$A\\Rightarrow I,\\qquad A\\text{ true}\\quad\\Rightarrow\\quad I\\text{ true}$$

Without that pass, rule (1) would have forbidden the enrolment she currently has. The rule does not say she passed with any particular grade, so the statement is True.`,
      `**B.** → True

Compose the two rules: Advanced $\\Rightarrow$ Intermediate $\\Rightarrow$ Principles. Maria is in Advanced, so the first arrow forces Intermediate and the second forces Principles:

$$A\\Rightarrow I\\Rightarrow P$$

Skipping Intermediate in the chain would leave Principles unforced, which the two rules do not allow, so the statement is True.`,
      `**C.** → True

Composing the two arrows gives "enrolled in Advanced $\\Rightarrow$ passed Principles." Necessary means Advanced cannot occur without Principles, which is exactly that composed implication. Sufficient would be the reverse arrow $P\\Rightarrow A$, which is a different claim, so the statement is True.`,
      `**D.** → False

Sufficient would require "passed Principles $\\Rightarrow$ enrolled in Advanced." A student may pass Principles, skip Intermediate, and never reach Advanced. Principles sits on the necessary side of the chain, not the sufficient side. The classic swap of those two words is the trap, so the statement is False.`,
      `**E.** → False

The two rules mention only "passed" and "enrolled." No grade, mark, or "perfect" appears. From Maria's enrolment we recover two pass/fail facts, not a score. A perfect grade is extra information the premises do not carry, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `"You may enrol in $X$ only if you have passed $Y$" is $X\\Rightarrow Y$: $Y$ is necessary for $X$, not sufficient. Write $A$ for enrolling in Advanced Macroeconomics, $I$ for passing Intermediate, and $P$ for passing Principles. The two rules form the chain

$$A\\Rightarrow I\\Rightarrow P$$

Maria is enrolled in Advanced, so the arrows run left to right from that observation. The reverse arrow $P\\Rightarrow A$ is not supplied. The rules speak only of passing and enrolling; they record no marks.`,
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

Scan $P$ against $E$. The only shared number is $2$, the even prime in these lists:

$$P\\cap E=\\{2\\}$$

Every other prime here is odd, so it misses $E$. Intersection is that single shared number, not a claim that all primes are even, so the statement is True.`,
      `**B.** → True

Difference $P\\setminus E$ deletes a member of $P$ only when it also sits in $E$. Throwing $2$ out of $P$ leaves the five odd primes:

$$P\\setminus E=\\{3,5,7,11,13\\}$$

Dropping $3$ as well would be treating "small" as "even," so the statement is True.`,
      `**C.** → False

A "for every" sentence needs a clean sweep, and this one stumbles at $x=2$: in $P$ and even. One counterexample inside the domain makes $\\forall x\\in P$ false. Every other prime in the list is odd, which is why the claim looks tempting; universal claims do not forgive a single exception, so the statement is False.`,
      `**D.** → True

The extra hypothesis $x\\ne 2$ removes the even prime. What remains is $\\{3,5,7,11,13\\}$, all odd, so no remaining $x$ makes the "if" true and the "then" false. Restricting the domain is what repairs the unrestricted universal; without $x\\ne 2$ the same $2$ would still kill it, so the statement is True.`,
      `**E.** → False

$P\\subseteq E$ would need every prime in the list to be even. Already $3\\in P$ and $3\\notin E$. One miss kills the inclusion. Only the overlap $\\{2\\}$ sits inside $E$; five of the six primes lie outside, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `Let $P=\\{2,3,5,7,11,13\\}$ be the primes less than $15$ and $E=\\{2,4,6,8,10,12,14\\}$ the evens less than $15$. They overlap in the single even prime $2$.

Intersection keeps numbers in both lists. Difference $P\\setminus E$ keeps members of $P$ missing from $E$. A sentence $\\forall x\\in P$ makes a promise about all six members, so one bad member destroys it. A subset claim $P\\subseteq E$ fails as soon as one member of $P$ sits outside $E$.`,
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

If $x>10$, then $x>5$ automatically because $10>5$. That is $P\\Rightarrow Q$, which is what "$P$ is sufficient for $Q$" means. A number past $10$ cannot fail to be past $5$. The reverse arrow is a different claim, so the statement is True.`,
      `**B.** → False

Necessary would require $Q\\Rightarrow P$: every $x>5$ would have to satisfy $x>10$. Test $x=7$:

$$7>5\\quad\\text{holds},\\qquad 7>10\\quad\\text{fails}$$

The whole interval $(5,10]$ supplies further counterexamples. $P$ is stronger than $Q$, not required by it, so the statement is False.`,
      `**C.** → True

"$Q$ is necessary for $P$" is the same arrow $P\\Rightarrow Q$, read from the other end: $x>10$ cannot hold unless $x>5$ also holds. One true arrow supports two true vocabulary sentences. The necessary condition is the one the arrow points at, so the statement is True.`,
      `**D.** → False

Equivalence needs both arrows. $P\\Rightarrow Q$ holds, but $Q\\Rightarrow P$ fails at $x=7$ (and on the whole interval $(5,10]$). So $x>5$ is strictly weaker than $x>10$. The two inequalities are not interchangeable, so the statement is False.`,
      `**E.** → True

A counterexample to "$x>5$ implies $x>10$" must make the hypothesis true and the conclusion false. Check $x=7$:

$$7>5\\quad\\text{true},\\qquad 7>10\\quad\\text{false}$$

Any other point of $(5,10]$ would work equally well; $7$ is a perfectly good witness, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `Two conditions on a real number: $P$ says $x>10$ and $Q$ says $x>5$. "$P$ is sufficient for $Q$" is the arrow $P\\Rightarrow Q$. "$Q$ is necessary for $P$" is the same arrow read from the other end. Equivalence $P\\Leftrightarrow Q$ needs both arrows. A counterexample to $Q\\Rightarrow P$ is a number that satisfies $Q$ and fails $P$.`,
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

P's file is score $750\\ge 700$ and ratio $35\\%<40\\%$. Both halves of $R$ hold, so P meets the bank's requirement in full. Meeting $R$ is not yet approval; that is a different claim. An "and" with two true parts is true, so the statement is True.`,
      `**B.** → False

The wording is "approved only if $R$," i.e. $L\\Rightarrow R$. Meeting $R$ is necessary, not sufficient. P has $R$ true, but that does not force $L$. The reverse arrow $R\\Rightarrow L$ is not in the rule, so clearing the hurdle keeps the application alive without forcing a yes, so the statement is False.`,
      `**C.** → True

Q clears the score test $720\\ge 700$ but fails the ratio: $45\\%$ is not below $40\\%$. One false conjunct makes $R$ false. The two requirements are joined by "and," so one failure means Q does not satisfy both, so the statement is True.`,
      `**D.** → True

The contrapositive of $L\\Rightarrow R$ is $\\neg R\\Rightarrow\\neg L$. Q fails the ratio test, so $R$ is false, and the loan is not approved. Failing a necessary condition is enough to force refusal. The original "only if" is at full strength when read backwards through negation, so the statement is True.`,
      `**E.** → False

A ratio below $40\\%$ is only one conjunct of $R$. An applicant with ratio $30\\%$ and score $650$ already fails the score test, so $R$ is false and approval is blocked. Even a full $R$ would still be only necessary, not sufficient. One half of $R$ never guarantees a loan, so the statement is False.`,
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

Negating a universal produces an existential of the negated predicate:

$$\\neg\\forall x\\,(x^2\\ge 0)\\equiv\\exists x\\,(x^2<0)$$

The quoted sentence is that negation, correctly formed, even though no real number actually has a negative square. Shape of the negation is a separate question from whether the negation is true, so the statement is True.`,
      `**B.** → False

Squares of reals are never negative: $0^2=0$, $1^2=1$, $(-1)^2=1$. No real $x$ satisfies $x^2=-1$. The existence claim would succeed over the complex numbers, but the universe here is $\\mathbb R$. One missing solution in the universe is enough, so the statement is False.`,
      `**C.** → True

Negating an existential produces a universal of the negated predicate:

$$\\neg\\exists x\\,(x>100)\\equiv\\forall x\\,(x\\le 100)$$

To deny that some number exceeds $100$, every number must stay at or below it. The inequality flips from $>$ to $\\le$, not to $<$; $x=100$ must be included in the negation, so the statement is True.`,
      `**D.** → True

Because $x$ is announced first, $y$ may be built from it. The recipe $y=x+1$ works for every positive $x$. The order $\\forall x\\,\\exists y$ licenses that dependence: each $x$ gets its own $y$. A bigger real always exists, so the statement is True.`,
      `**E.** → False

Now a single $y$ must be fixed first and then outrank every positive $x$. Whatever $y$ is offered, $x=\\max(y+1,1)$ is a positive number bigger than it. No champion exists. This is the classic quantifier-order trap: $\\exists y\\,\\forall x$ is far stronger than the true $\\forall x\\,\\exists y$, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `The universe is $\\mathbb R$. Negation of quantifiers follows the mirror rules

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

The criterion is $D\\Rightarrow S$, and $S$ demands both symptoms. Patient R holds the diagnosis, so both symptoms must be present. A diagnosis on A alone would be $D$ with $\\neg B$, which breaks the necessary condition.

so the statement is False.`,
      `**B.** → False

Patient S has A but not B, so the conjunction $S$ is false. The contrapositive $\\neg S\\Rightarrow\\neg D$ then blocks the diagnosis. Missing either half of an "and" is enough.

so the statement is False.`,
      `**C.** → False

Sufficient would be $S\\Rightarrow D$. The doctor states the opposite: both symptoms do not guarantee the diagnosis, because other conditions must still be ruled out. So $S$ is necessary and not sufficient.

so the statement is False.`,
      `**D.** → True

Missing symptom A makes the conjunction $S$ false, regardless of B. Then $\\neg S\\Rightarrow\\neg D$ blocks the diagnosis. An "and" is destroyed by either half, so no A means no diagnosis with X.

so the statement is True.`,
      `**E.** → False

The doctor explicitly allows both symptoms while other conditions are still being excluded: $S$ without $D$. That open gap is what separates a necessary condition from a sufficient one.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 8,
    solution_overview: `Let $D$ mean diagnosed with condition X, and let $S$ mean the patient shows symptom A and symptom B.

"Diagnosed only if $S$" is the arrow $D\\Rightarrow S$: no diagnosis without both symptoms, which makes $S$ necessary. The doctor also says both symptoms do not guarantee the diagnosis, so the reverse arrow $S\\Rightarrow D$ is refused: $S$ is necessary but not sufficient.

The contrapositive $\\neg S\\Rightarrow\\neg D$ blocks the diagnosis the moment either symptom is missing.`,
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

Divisible by $3$ and by $5$ means divisible by $15$, and $15$ sits inside $\\{1,\\ldots,20\\}$. One witness is all an existential sentence needs.

so the statement is True.`,
      `**B.** → True

Every multiple of four can be written $4k=2(2k)$, hence even. In this range the multiples of four are $\\{4,8,12,16,20\\}$, all even, so the implication holds everywhere.

so the statement is True.`,
      `**C.** → False

The flipped implication breaks at $x=2$: divisible by $2$, not by $4$. One counterexample inside the range kills a universal. Direction of the arrow is the whole issue.

so the statement is False.`,
      `**D.** → True

An implication fails only where the "if" holds and the "then" fails, so its negation is "some prime in the range is even":

$$\\exists x\\,(\\mathrm{Prime}(x)\\land\\mathrm{Even}(x))$$

The quoted sentence is that negation, still restricted to $\\{1,\\ldots,20\\}$.

so the statement is True.`,
      `**E.** → True

The negation asks for an even prime in the range, and $2$ is one: divisors $1$ and $2$ only, and even. So the negated statement is true in this universe.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `The universe is the finite set $\\{1,2,\\ldots,20\\}$. An existential sentence needs one working example. A universal sentence is destroyed by one counterexample.

An implication $P\\Rightarrow Q$ fails only where $P$ holds and $Q$ fails, so its negation is an existential $P\\land\\neg Q$.`,
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

Banned means $v\\ge 3$. Person T has $v=2$, so $2\\ge 3$ fails and T is not banned. The biconditional "member iff not banned" then forces membership.

so the statement is True.`,
      `**B.** → False

Person U has $v=4$, and $4\\ge 3$, so U is banned. The same biconditional makes banned the exact opposite of member, so U is not a member.

so the statement is False.`,
      `**C.** → True

"Member iff not banned" means the two lists never overlap and never leave a gap: every person is in exactly one of them. That is the definition of complementary sets.

so the statement is True.`,
      `**D.** → False

"Three or more" includes $v=3$. Check $3\\ge 3$: true, so a person with exactly $3$ violations is banned, hence not a member. Once banned means $v\\ge 3$, the count $v=3$ is not discretionary.

so the statement is False.`,
      `**E.** → False

For each integer $v$, the test $v\\ge 3$ returns a definite yes or no. Counts $0,1,2$ are members; counts $3,4,5,\\ldots$ are banned. No $v$ is left undecided.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `The club rule is a biconditional: a person is a member if and only if they are not on the banned list. The banned list is the people with $3$ or more rule violations. Writing $v$ for the violation count, banned means $v\\ge 3$, and membership is the exact opposite.

Because the two conditions are exact opposites, the two lists never overlap and never leave a gap.`,
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

A universal $\\forall x\\,P(x)$ is false as soon as one $x$ has $\\neg P(x)$. That one counterexample is a complete disproof. Nothing further is required.

so the statement is True.`,
      `**B.** → True

A counterexample to "all primes are odd" must be prime and fail to be odd. The number $2$ has divisors $1$ and $2$ only, so it is prime, and it is even. Both halves succeed.

so the statement is True.`,
      `**C.** → True

$P\\Rightarrow Q$ fails only in the case $P\\land\\neg Q$. A contradiction proof assumes that unique failure case and derives an impossibility, showing the failure cannot occur. The description in the statement is that method.

so the statement is True.`,
      `**D.** → False

To prove "$\\sqrt{2}$ is irrational" by contradiction, assume the negation: $\\sqrt{2}$ is rational, so $\\sqrt{2}=\\frac{a}{b}$ in lowest terms. Assuming irrationality at the start would assume the conclusion rather than its opposite.

so the statement is False.`,
      `**E.** → False

One confirming example never proves a universal claim. The odd prime $3$ fits "all primes are odd" and still leaves $2$ untested. Checking finitely many favourable cases never rules out a later counterexample.

so the statement is False.`,
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

The rule is $P\\Rightarrow Q$. An implication is false only in the row $P$ true, $Q$ false, i.e. rain and an uncancelled picnic. The quoted negation is that unique failure case.

so the statement is True.`,
      `**B.** → False

The converse $Q\\Rightarrow P$ reads the rule backwards. On a dry venue-conflict day, $P$ is false and $Q$ is true: the original holds vacuously, while the converse fails. The organizer never promised that rain is the only cancelling cause.

so the statement is False.`,
      `**C.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$. On that same dry cancelled day, $\\neg P$ is true and $\\neg Q$ is false, so the inverse fails while the original still holds. Inverse pairs with converse, not with the original.

so the statement is False.`,
      `**D.** → True

Assign the venue-conflict day: rain false, cancelled true. The inverse demanded "no rain, so no cancellation" and the cancellation happened, so the inverse is broken. The original $P\\Rightarrow Q$ is true whenever $P$ is false, so a dry cancellation never tests the organizer's promise.

so the statement is True.`,
      `**E.** → True

Swap and negate: $\\neg Q\\Rightarrow\\neg P$, "if the picnic was not cancelled, then it did not rain." That is the contrapositive, which always shares the original's truth value. Once the organizer's rule is granted, this rewriting comes free with it.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 12,
    solution_overview: `Write $P$ for "it rains" and $Q$ for "the picnic is cancelled." The organizer's rule is $P\\Rightarrow Q$.

A conditional makes no promise when its "if" part is false. The unique failure is rain with an uncancelled picnic:

$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$$

The contrapositive $\\neg Q\\Rightarrow\\neg P$ always shares the original's truth value. The converse $Q\\Rightarrow P$ and the inverse $\\neg P\\Rightarrow\\neg Q$ are a different pair.`,
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

Inclusive "or" means at least one of $X,Y$. The $15$ both-buyers have both true, so they satisfy "at least one" and stay inside the count. Exclusive or would drop those $15$; mathematical or does not.

so the statement is True.`,
      `**B.** → True

Adding $40$ and $35$ counts the $15$ both-buyers twice, so subtract them once:

$$\\lvert X\\cup Y\\rvert=40+35-15=60$$

so the statement is True.`,
      `**C.** → True

Exclusive or keeps only the two outer regions. X-only is $40-15=25$ and Y-only is $35-15=20$, so

$$25+20=45$$

Equivalently, drop the both-buyers from the inclusive union: $60-15=45$.

so the statement is True.`,
      `**D.** → True

The four truth rows of $P\\Leftrightarrow Q$ are TT true, FF true, TF false, FT false. The two true rows are exactly the rows where $P$ and $Q$ agree. "Always the same truth value" is that description.

so the statement is True.`,
      `**E.** → False

"At least one true" is the truth condition for $P\\lor Q$, not for $P\\Leftrightarrow Q$. The mixed row $P$ true, $Q$ false has at least one true part, yet the biconditional is false there.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 13,
    solution_overview: `A survey of $100$ consumers has $|X|=40$, $|Y|=35$, and $|X\\cap Y|=15$. Inclusive "or" means at least one; exclusive "or" means exactly one.

Inclusion-exclusion counts the inclusive union:

$$\\lvert X\\cup Y\\rvert=\\lvert X\\rvert+\\lvert Y\\rvert-\\lvert X\\cap Y\\rvert$$

A biconditional $P\\Leftrightarrow Q$ is true when $P$ and $Q$ agree, and false the moment their truth values differ.`,
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

K cleared attendance ($85\\%\\ge 80\\%$) but scored $48<50$, so $F$ is false and $A\\land F$ collapses. One false conjunct makes the whole pass condition false. Near-misses do not count: $48$ is not $50$.

so the statement is False.`,
      `**B.** → False

L's $90$ clears the exam, but $75\\%<80\\%$ fails attendance. The conjunction never lets the strong half rescue the weak half, so L does not pass.

so the statement is False.`,
      `**C.** → False

Compensation would let a high exam score repair low attendance. L is the test file: $90$ on the exam with $75\\%$ attendance still yields $A$ false, so $A\\land F$ is false. Exam points cannot repair attendance.

so the statement is False.`,
      `**D.** → True

A score below $50$ makes $F$ false, whether the score is $49$ or $10$. For K, $48<50$ already falsifies $F$, so $A\\land F$ is false even though attendance cleared. A threshold recognises no near-misses.

so the statement is True.`,
      `**E.** → True

Compare $(80\\%,50)$ with $(79\\%,100)$. The first clears both tests and passes; the second fails on attendance, yet looks far stronger on an average. Because the rule checks two thresholds instead of one average, reversals like this really can happen.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 14,
    solution_overview: `Passing is governed by an "and": attendance of at least $80\\%$ and a final score of at least $50$. Writing $A$ and $F$ for those two conditions, the student passes if and only if $A\\land F$.

The words "if and only if" mean the list is complete. One false part sinks the whole condition, however comfortably the other part is satisfied. The rule never adds or averages the two numbers.`,
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

The filter is $\\neg S\\land\\neg O$. Item M is on sale, so $\\neg S$ is already false, and a false conjunct hides M. Being in stock does not rescue an on-sale item.

so the statement is False.`,
      `**B.** → False

Item N is out of stock, so $\\neg O$ fails. The same conjunction fails on the other half, so N is hidden too. Not being on sale is not enough.

so the statement is False.`,
      `**C.** → False

De Morgan requires the connective to flip: $\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$, not $\\neg S\\lor\\neg O$. On item M, the wrong OR form would display M (in stock), while the real AND hides M. Two formulas that disagree on one item are not equivalent.

so the statement is False.`,
      `**D.** → True

Push the NOT inside with the connective flip:

$$\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$$

In English that is "not on sale and not out of stock," i.e. neither on sale nor out of stock.

so the statement is True.`,
      `**E.** → True

Item K is not on sale and is in stock, so both $\\neg S$ and $\\neg O$ hold. The filter displays K.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 15,
    solution_overview: `Let $S$ mean the item is on sale and $O$ mean the item is out of stock. The filter displays an item when $\\neg(S\\lor O)$ is true.

De Morgan's law turns a negated OR into an AND of the two negations:

$$\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$$

So the filter shows an item only if it is neither on sale nor out of stock.`,
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

From $P\\Rightarrow Q$, the contrapositive is $\\neg Q\\Rightarrow\\neg P$: no rate rise, therefore inflation does not exceed $10\\%$, i.e. at most $10\\%$. That is the quoted sentence. "Not above $10$" and "at most $10$" are the same cutoff.

so the statement is True.`,
      `**B.** → False

The converse $Q\\Rightarrow P$ would say every rate rise comes from inflation above $10\\%$. A currency-defence rise at $4\\%$ inflation has $Q$ true and $P$ false: the original is untouched (because $P$ is false), while the converse fails.

so the statement is False.`,
      `**C.** → True

"$P$ is sufficient for $Q$" means $P\\Rightarrow Q$. The given rule is exactly that arrow: inflation above $10\\%$ forces a rate rise. $P$ alone guarantees $Q$.

so the statement is True.`,
      `**D.** → False

"$P$ is necessary for $Q$" would be $Q\\Rightarrow P$, the converse. The given arrow points the other way: $Q$ is necessary for $P$, not $P$ for $Q$. The rule does not force high inflation whenever rates rise.

so the statement is False.`,
      `**E.** → False

Observing a rate rise ($Q$ true) and inferring inflation above $10\\%$ ($P$ true) is affirming the consequent. The premises give $P\\Rightarrow Q$, never $Q\\Rightarrow P$. Walking backwards along the arrow is the classic trap.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 16,
    solution_overview: `$P$: a country's inflation rate exceeds $10\\%$. $Q$: the central bank raises interest rates. The given rule is $P\\Rightarrow Q$.

High inflation forces a rate rise. The rule says nothing about what else might cause one. The contrapositive $\\neg Q\\Rightarrow\\neg P$ always carries the same truth value. In $P\\Rightarrow Q$, $P$ is sufficient for $Q$, while $Q$ is necessary for $P$.`,
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

The first link is $P\\Leftrightarrow Q$ and $P$ is given true. Agreement forbids $Q$ from being false, so $Q$ is true. A biconditional is a two-way weld; a true $P$ cannot sit next to a false $Q$.

so the statement is True.`,
      `**B.** → True

The second link is $Q\\Leftrightarrow R$. From $P\\Leftrightarrow Q$ and $P$ true, $Q$ is true, so $R$ must be true as well. The extra fact "$P$ is true" has now travelled the whole chain.

so the statement is True.`,
      `**C.** → True

If $P$ agrees with $Q$ and $Q$ agrees with $R$, then $P$ agrees with $R$. In symbols, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$ yield $P\\Leftrightarrow R$. The first and third must share a truth value.

so the statement is True.`,
      `**D.** → True

Biconditionals work in both directions, so the chain can be walked from either end. If $R$ were false, $Q\\Leftrightarrow R$ would force $Q$ false, and $P\\Leftrightarrow Q$ would force $P$ false.

so the statement is True.`,
      `**E.** → False

$P\\Leftrightarrow R$ alone does not mention $Q$. The assignment $P$ true, $R$ true, $Q$ false satisfies $P\\Leftrightarrow R$ while breaking $P\\Leftrightarrow Q$. Knowing only the end link leaves the middle free.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 17,
    solution_overview: `A biconditional $A\\Leftrightarrow B$ is a two-way link: $A$ and $B$ must carry the same truth value, and the link can be read from either end.

Here two links are given, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$, so the three propositions are welded into one chain. A fact about $P$ travels along the chain. The derived end-to-end link $P\\Leftrightarrow R$ mentions only $P$ and $R$, so on its own it leaves $Q$ free.`,
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

"Cancelled unless $S$" means: if the exception $S$ fails, cancellation occurs. That is $\\neg S\\Rightarrow C$. If the rain does not stop before 6 PM, the concert is cancelled. The unless-clause is an escape, not a two-way guarantee. This translation is the rule in implication form, so the statement is True.`,
      `**B.** → False

$S\\Rightarrow\\neg C$ would say that stopping rain guarantees the concert happens. A 5 PM stop plus a power failure has $S$ true and $C$ true: $S\\lor C$ (the rule) holds, while $S\\Rightarrow\\neg C$ fails. Stopping rain removes one reason to cancel, not every reason. Not an equivalent form, so the statement is False.`,
      `**C.** → True

Rewrite $\\neg S\\Rightarrow C$ as an OR. The identity is $A\\Rightarrow B\\equiv\\neg A\\lor B$, so

$$\\neg(\\neg S)\\lor C\\equiv S\\lor C$$

OR is symmetric, so $C\\lor S$ is the same formula. This is the rule in different clothing, not a stronger promise, so the statement is True.`,
      `**D.** → False

Once $S$ is true, the antecedent $\\neg S$ of the rule is false, so the implication is silent. It does not assert $\\neg C$. A power cut can still cancel the concert after the rain stops. No guarantee that the concert happens. Reading a rescue into the escape clause is the trap, so the statement is False.`,
      `**E.** → True

The contrapositive of $\\neg S\\Rightarrow C$ is $\\neg C\\Rightarrow S$. If the concert is not cancelled, the rain must have stopped before 6 PM. A concert that went ahead proves $S$. This is the one relative that always shares the original's truth value, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 18,
    solution_overview: `"Cancelled unless the rain stops" is a promise with an escape clause. Write $C$ for "the concert is cancelled" and $S$ for "the rain stops before 6 PM." If the escape $S$ fails, cancellation is guaranteed:

$$\\neg S\\Rightarrow C$$

The rewrite $A\\Rightarrow B\\equiv\\neg A\\lor B$ turns this into $S\\lor C$. The contrapositive is $\\neg C\\Rightarrow S$. When $S$ is true the original implication is silent, so it does not assert $\\neg C$.`,
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

Rider P: age $70\\ge 65$, so $A$ is true; no disability, so $D$ is false; income $\\$18{,}000<\\$20{,}000$, so $L$ is true. Then $D\\lor L$ holds on the income half, and the conjunction holds:

$$A\\land(D\\lor L)=\\mathrm{T}\\land(\\mathrm{F}\\lor\\mathrm{T})=\\mathrm{T}$$

The bracket is an or; income alone fills it. Disability is not required once $L$ holds, so the statement is True.`,
      `**B.** → False

Q is $67$, has a qualifying disability, and earns $\\$50{,}000$. Then $A$ is true, $D$ is true, and $L$ is false, so $D\\lor L$ is true on the disability half. Q does qualify. The claim that income above $\\$20{,}000$ blocks Q ignores the OR in the bracket. Failing $L$ while $D$ holds leaves the OR true, so the statement is False.`,
      `**C.** → False

Q is the counterexample: income $\\$50{,}000$ fails $L$, yet $D$ is true, so the discount still applies. The income threshold is only one of two interchangeable options inside $D\\lor L$. An income above $\\$20{,}000$ disqualifies nobody by itself, so the statement is False.`,
      `**D.** → True

Invent the rider: age $70$ ($A$ true), no disability, income $\\$25{,}000$ so both bracket options are false. Then $D\\lor L$ fails and the conjunction is false. That $70$-year-old does not qualify, so the scenario exists. Age opens the gate; it does not fill the bracket, so the statement is True.`,
      `**E.** → False

Age alone makes $A$ true but leaves the bracket untouched. A $70$-year-old with no disability and income $\\$25{,}000$ has $A$ true and $D\\lor L$ false, so the conjunction fails. Being at least $65$ is necessary, not sufficient. A ticket that skipped the hardship tests would need a different rule, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 19,
    solution_overview: `The discount applies to riders who are at least $65$ and satisfy at least one of two hardship tests. Write $A$ for age at least $65$, $D$ for a qualifying disability, and $L$ for income below $\\$20{,}000$:

$$\\text{Discount}\\Leftrightarrow A\\land(D\\lor L)$$

The bracket is an or, so $D$ and $L$ are interchangeable. The age test sits outside the bracket, where nothing can substitute for it. Rider P is $70$, no disability, income $\\$18{,}000$. Rider Q is $67$, has a disability, income $\\$50{,}000$.`,
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

The claim ranges over the positive integers, so the first domino is $n=1$. Check both sides:

$$1=\\frac{1\\cdot 2}{2}=1$$

Right base case, correctly verified. Starting at $n=0$ would be a different domain; starting at $n=2$ would skip the first positive integer, so the statement is True.`,
      `**B.** → True

After verifying $n=1$, the remaining infinitely many $n$ are covered by one step: assume the formula at $n=k$, then prove it at $n=k+1$. That is the inductive step as stated. Checking $k$ and $k+1$ as two numerical examples is not the same as a general step from $k$ to $k+1$, so the statement is True.`,
      `**C.** → False

Checking $n=1,2,3,4,5$ confirms five instances and says nothing about $n=6$. A proof by induction needs the general step from $k$ to $k+1$. Five numerical checks are evidence, not a complete inductive proof. Infinitely many unchecked $n$ remain, so the statement is False.`,
      `**D.** → True

Assume the formula at $n=k$ and add the next term. One algebraic step at a time:

$$\\frac{k(k+1)}{2}+(k+1)=\\frac{k(k+1)+2(k+1)}{2}$$

$$=\\frac{(k+1)(k+2)}{2}$$

That is the formula at $n=k+1$, so the inductive step holds, so the statement is True.`,
      `**E.** → True

Substitute $n=10$ into the closed form:

$$\\frac{10\\cdot 11}{2}=55$$

That is a sanity check on the formula, not a substitute for the inductive step. Adding $1$ through $10$ by hand would agree, but the formula is the point, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 20,
    solution_overview: `The claim is that for every positive integer $n$,

$$1+2+\\cdots+n=\\frac{n(n+1)}{2}$$

Induction uses two moves: a base case at the first positive integer $n=1$, and an inductive step that assumes the formula at $n=k$ and proves it at $n=k+1$. Checking finitely many numerical values is evidence, not a complete inductive proof. Substituting a particular $n$ into the closed form is a sanity check, not a substitute for the step.`,
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

"For $Q$ to happen, $P$ must happen" makes $P$ necessary for $Q$, which is $Q\\Rightarrow P$. The original is $P\\Rightarrow Q$. That is the converse, not an equivalent form. Inflation *must* increase for unemployment to decrease is the reverse arrow, so the statement is False.`,
      `**B.** → True

"$P$ is sufficient for $Q$" is $P\\Rightarrow Q$. The original claim is "if inflation increases, then unemployment decreases," the same arrow. Sufficient names the tail of the arrow. Equivalent wording, not a stronger claim, so the statement is True.`,
      `**C.** → False

"$Q$ can only decrease if $P$" is "$Q$ only if $P$," i.e. $Q\\Rightarrow P$. Again the converse. The original does not restrict unemployment decreases to inflation-increase days. "Only if" is the phrase most often misread as the original arrow, so the statement is False.`,
      `**D.** → True

Negate both halves and swap: $\\neg Q\\Rightarrow\\neg P$, "if unemployment does not decrease, then inflation does not increase." That is the contrapositive of $P\\Rightarrow Q$, hence equivalent. It is the one rewriting that always matches, so the statement is True.`,
      `**E.** → True

"$Q$ is necessary for $P$" is $P\\Rightarrow Q$: the arrow points at the necessary condition. Falling unemployment is named as necessary for inflation to increase, which is exactly the original implication. Necessary names the head of the arrow, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 21,
    solution_overview: `Take $P$ = "inflation increases" and $Q$ = "unemployment decreases". The original claim is $P\\Rightarrow Q$.

Only two sentences are equivalent to $P\\Rightarrow Q$: the statement itself, and its contrapositive $\\neg Q\\Rightarrow\\neg P$. The converse $Q\\Rightarrow P$ is a different claim. Vocabulary: "$P$ is sufficient for $Q$" is $P\\Rightarrow Q$; "$Q$ is necessary for $P$" is $P\\Rightarrow Q$; "$P$ must happen for $Q$" and "$Q$ only if $P$" are $Q\\Rightarrow P$. The necessary condition is the one the arrow points at; the sufficient condition is the one it starts from.`,
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

Premises: $D\\Rightarrow C$ and $D$ true (Flight $202$ delayed). Modus ponens yields $C$. Flight $305$ is cancelled today. Rule (1) is loaded and its trigger has fired. No other clue is needed for this one conclusion, so the statement is True.`,
      `**B.** → True

From $D\\Rightarrow C$ and $D$ true, cancellation $C$ follows. Premise (2) is $C\\Rightarrow O$. Modus ponens again yields $O$. The ground crew works overtime today. The cascade is $D\\to C\\to O$, so the statement is True.`,
      `**C.** → True

Clues (1) and (3) mention only $D$ and $C$. From those two you obtain $C$ and then stop: the letter $O$ never appears. Without (2) there is no bridge from cancellation to overtime. Clue (2) is the indispensable bridge, so the statement is True.`,
      `**D.** → False

If $D$ is false, rule (1) has a false antecedent and is silent. It does not yield $\\neg C$. Inferring "no delay, so no cancellation" is the inverse of (1), which is not equivalent. A crew shortage could still cancel Flight $305$. The guarantee claimed here does not exist, so the statement is False.`,
      `**E.** → False

From (3), $D$ is true. Then (1) forces $C$, and (2) forces $O$. Any assignment with $O$ false would have to break (2) once $C$ is true. There is no model of (1), (2), and (3) in which the crew is off duty. The three clues leave no leftover freedom, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 22,
    solution_overview: `Three facts sit in the log. Write $D$ for Flight $202$ delayed, $C$ for Flight $305$ cancelled, and $O$ for overtime:

$$D\\Rightarrow C,\\qquad C\\Rightarrow O,\\qquad D\\text{ is true}$$

Modus ponens: from $A\\Rightarrow B$ and $A$, infer $B$. Rules (1) and (3) mention only $D$ and $C$. If $D$ is false, rule (1) has a false antecedent and is silent.`,
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

The professor asserts $P\\Rightarrow Q$. The unique false row is $P$ true and $Q$ false: studied at least $10$ hours and did not pass. That is $P\\land\\neg Q$, matching the quoted negation. It is a single counterexample, not another if-then rule, so the statement is True.`,
      `**B.** → False

The converse is $Q\\Rightarrow P$. Anna: $P$ false (no studying), $Q$ true (pass). Then $Q\\Rightarrow P$ fails, while $P\\Rightarrow Q$ holds because its antecedent is false. A true original does not force a true converse. The professor never said that *only* $10$-hour students pass, so the statement is False.`,
      `**C.** → True

Anna is $P$ false, $Q$ true. The converse "every passer studied $10$ hours" is false of her. The original only constrains students with $P$ true, so she is outside its scope. She is a counterexample to the converse and not to the original. Both halves of the statement hold, so the statement is True.`,
      `**D.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$. The contrapositive is $\\neg Q\\Rightarrow\\neg P$. The arrows run opposite ways. Anna makes the inverse false ($\\neg P$ true, $\\neg Q$ false) and leaves the contrapositive untouched (she is not a failure). They are not equivalent; the inverse pairs with the converse, so the statement is False.`,
      `**E.** → True

From a known failure $\\neg Q$, the contrapositive $\\neg Q\\Rightarrow\\neg P$ yields $\\neg P$: the student studied less than $10$ hours. That is modus tollens on the professor's claim. The inference is valid because the contrapositive inherits the original's guarantee, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 23,
    solution_overview: `Write $P$ for "the student studies at least $10$ hours" and $Q$ for "the student passes." The professor asserts $P\\Rightarrow Q$.

The unique false row of an implication is $P\\land\\neg Q$. The converse is $Q\\Rightarrow P$, the inverse is $\\neg P\\Rightarrow\\neg Q$, and the contrapositive is $\\neg Q\\Rightarrow\\neg P$. The original pairs with the contrapositive; the converse pairs with the inverse. Anna: no studying ($P$ false) yet passed ($Q$ true).`,
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

The clause is $F\\Rightarrow P$: miss the deadline, then a penalty applies. "$F$ is sufficient for $P$" is that same arrow. Missing the deadline is enough, on its own, to trigger the fee. Sufficient names the tail of the signed clause, not every other breach, so the statement is True.`,
      `**B.** → False

The converse $P\\Rightarrow F$ would make every penalty a proof of lateness. An on-time but faulty job has $F$ false and $P$ true: the original holds, the converse fails. The clause does not guarantee the converse. Contracts fine people for other things, so the statement is False.`,
      `**C.** → True

Swap and negate: $\\neg P\\Rightarrow\\neg F$, "no penalty, therefore the contractor did not miss the deadline." That is the contrapositive of $F\\Rightarrow P$, so it is guaranteed by the clause. Signing the clause commits you to this rewriting too, so the statement is True.`,
      `**D.** → False

The inverse $\\neg F\\Rightarrow\\neg P$ says punctual contractors are never fined. The same on-time faulty job has $\\neg F$ true and $P$ true, so the inverse fails while the original stands. The inverse is a promise about *other* breaches that the clause never made, so the statement is False.`,
      `**E.** → True

The converse $P\\Rightarrow F$ has contrapositive $\\neg F\\Rightarrow\\neg P$, which is the inverse. Those two always share a truth value. Neither pair is equivalent to the original $F\\Rightarrow P$ in general. The pairing described is a general fact about conditionals, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 24,
    solution_overview: `Write $F$ for "the contractor misses the deadline" and $P$ for "a penalty fee applies." The clause is $F\\Rightarrow P$.

Relatives fall into two equivalence pairs:

$$F\\Rightarrow P\\equiv\\neg P\\Rightarrow\\neg F$$

$$P\\Rightarrow F\\equiv\\neg F\\Rightarrow\\neg P$$

"$F$ is sufficient for $P$" is the original arrow. Contracts can punish other breaches, so $F$ false and $P$ true is possible.`,
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

Eligibility is $G\\land(C\\lor W)$. Student M: GPA $3.7$ so $G$ true; credits $50<60$ so $C$ false; no waiver so $W$ false. Then $C\\lor W$ is false, and the conjunction fails. M is not eligible. The GPA sits outside the bracket and cannot fill it, so the statement is False.`,
      `**B.** → True

Student N: GPA $3.6$ so $G$ true; credits $45<60$ so $C$ false; waiver granted so $W$ true. Then $C\\lor W$ is true and the conjunction holds. N is eligible despite being $15$ credits short. The waiver exists for exactly that shortfall, so the statement is True.`,
      `**C.** → True

Keep M's GPA $3.7$ and $50$ credits, and set $W$ true. Then $C\\lor W$ becomes true while $G$ stays true, so $G\\land(C\\lor W)$ turns true. M would become eligible. The waiver is the one thing missing from M's file, so the statement is True.`,
      `**D.** → False

A waiver fills only the bracket $C\\lor W$. It cannot make $G$ true. A student with GPA $3.0$ and a waiver has $G$ false, so the conjunction is false no matter how $W$ is set. The Dean waives the credit-hour requirement, nothing else. The waiver is never sufficient on its own, so the statement is False.`,
      `**E.** → False

GPA below $3.5$ makes $G$ false. Credits and waiver live inside the bracket and cannot repair a false outer conjunct. Even $W$ true and $C$ true leave $G\\land(C\\lor W)$ false when $G$ is false. No such eligible student exists. $G$ guards every entrance, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 25,
    solution_overview: `The default requirement is GPA at least $3.5$ and at least $60$ credit hours. The Dean may waive only the credit-hour half. Write $G$, $C$, and $W$ for those three tests:

$$\\text{Eligible}\\Leftrightarrow G\\land(C\\lor W)$$

The GPA condition sits outside the bracket, where no waiver can reach it. Inside the bracket, credits and waiver are alternatives. Student M: GPA $3.7$, $50$ credits, no waiver. Student N: GPA $3.6$, $45$ credits, waiver granted.`,
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

Payout is $(M\\lor A)\\land T$. Traveler M: documented medical emergency so $M$ true; purchased $20$ days out, and $20\\ge 14$, so $T$ true. Both hurdles cleared:

$$(M\\lor A)\\land T=\\mathrm{T}\\land\\mathrm{T}=\\mathrm{T}$$

The reason bracket is an or; medical emergency alone fills it, so the statement is True.`,
      `**B.** → False

Traveler N: airline cancellation so $A$ true, hence $M\\lor A$ true; purchased $5$ days out, so $T$ false. Then $(M\\lor A)\\land T$ is false. N is not paid. An impeccable reason does not repair a late purchase. $T$ sits outside the bracket, joined by AND, so the statement is False.`,
      `**C.** → True

$T$ sits outside the bracket, joined by AND. If the policy was bought fewer than $14$ days out, $T$ is false and the whole condition is false. The reason for cancellation is never reached. A late purchase blocks every claim, medical or airline, so the statement is True.`,
      `**D.** → False

Early purchase makes $T$ true but leaves the reason bracket empty unless $M$ or $A$ holds. A change of mind $30$ days out has $T$ true and $M\\lor A$ false, so no payout. Timing is necessary, not sufficient. One hurdle of two is not a free pass, so the statement is False.`,
      `**E.** → False

The claim asks for a payout with $\\neg M$ and $\\neg T$, using only $A$. Even with $A$ true, $\\neg T$ still falsifies the outer AND. Traveler N is this pattern (airline cancel, late purchase) and receives nothing. An accepted reason substitutes for the other reason, never for the purchase date, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 26,
    solution_overview: `The policy sets two independent hurdles, and both must be cleared:

$$\\text{Payout}\\Leftrightarrow(M\\lor A)\\land T$$

where $M$ is a documented medical emergency, $A$ is airline cancellation, and $T$ is purchase at least $14$ days before departure. Inside the bracket sits an or, so the two accepted reasons are interchangeable. Outside it sits an and, which makes the $14$-day timing non-negotiable. Traveler M: medical emergency, bought $20$ days out. Traveler N: airline cancellation, bought $5$ days out.`,
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

The law is $P\\Rightarrow Q$. Its unique failure is $P\\land\\neg Q$: a citizen who is not eligible to vote. The quoted sentence is that failure case, so it is the correct negation. Eligibility, not the act of voting, is the predicate $Q$, so the statement is True.`,
      `**B.** → True

John has $\\neg Q$ (not eligible). The contrapositive $\\neg Q\\Rightarrow\\neg P$ yields $\\neg P$: John is not a citizen. That is modus tollens on the law. The conclusion is validly drawn because the contrapositive inherits the law's truth, so the statement is True.`,
      `**C.** → False

$Q$ is eligibility, not the act of voting. Maria is a citizen who keeps her eligibility whether or not she registers. She has $P$ true and $Q$ true, which satisfies $P\\Rightarrow Q$. A counterexample would need a citizen barred from voting. Staying home does not flip $Q$, so the statement is False.`,
      `**D.** → True

A non-citizen long-term resident who may vote has $Q$ true and $P$ false. That is exactly how $Q\\Rightarrow P$ fails. The original law never forbids eligibility for non-citizens, so the converse can be false in such a country. The original only forces eligibility for citizens, so the statement is True.`,
      `**E.** → True

The inverse $\\neg P\\Rightarrow\\neg Q$ has contrapositive $Q\\Rightarrow P$, the converse. Those two always agree. The long-term resident who may vote makes both false together. In a country with no such residents both could be true together. Shared truth value is the pairing, not a claim that either is true here, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 27,
    solution_overview: `Write $P$ for "the person is a citizen" and $Q$ for "the person is eligible to vote." The law is $P\\Rightarrow Q$.

$Q$ is about holding the right, not about using it. The unique failure of $P\\Rightarrow Q$ is $P\\land\\neg Q$. The contrapositive $\\neg Q\\Rightarrow\\neg P$ is guaranteed. The converse $Q\\Rightarrow P$ and the inverse $\\neg P\\Rightarrow\\neg Q$ form the other pair and always share a truth value.`,
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

The memo's skeleton is: $P\\Rightarrow Q$, $Q$, therefore $P$. That is affirming the consequent. A rival leaving the market can make $Q$ true while $P$ stays false: both premises hold and the conclusion fails. The premise licenses traffic in one direction only, and walking back along the arrow is not allowed. Invalid, so the statement is False.`,
      `**B.** → False

The restatement is $P\\Rightarrow Q$, $\\neg P$, therefore $\\neg Q$: the inverse. The same rival-exit story has $\\neg P$ true and $Q$ true, so $\\neg Q$ is false. Still invalid. From "we did not increase the budget" the original conditional says nothing about sales. Concluding that sales fell is another walk in the wrong direction, so the statement is False.`,
      `**C.** → True

Now the premises are $P\\Rightarrow Q$ and $\\neg Q$, concluding $\\neg P$. That is modus tollens, equivalently running the contrapositive $\\neg Q\\Rightarrow\\neg P$. Valid. From "sales did not rise" to "the budget did not rise" is the one reshuffle that is safe, so the statement is True.`,
      `**D.** → True

The memo needs the missing arrow $Q\\Rightarrow P$. Upgrading the premise to $P\\Leftrightarrow Q$ supplies both directions. Then observing $Q$ really does force $P$, and the original conclusion follows. A biconditional is the cheapest honest way to buy the converse alongside the original, so the statement is True.`,
      `**E.** → True

"If it rains, the ground gets wet; the ground is wet; therefore it is raining" is $P\\Rightarrow Q$, $Q$, therefore $P$. Same form as the memo. A sprinkler plays the role of the departing competitor. Same fallacy, different story. Wet ground does not prove rain any more than rising sales prove a bigger marketing budget, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 28,
    solution_overview: `Strip the memo to $P$ = "we increased the marketing budget" and $Q$ = "sales increased." The original argument is: premise $P\\Rightarrow Q$, premise $Q$, conclusion $P$. That form is affirming the consequent.

Safe traffic on $P\\Rightarrow Q$ is modus ponens ($P$, therefore $Q$) and modus tollens ($\\neg Q$, therefore $\\neg P$). The inverse is $\\neg P$, therefore $\\neg Q$. A biconditional $P\\Leftrightarrow Q$ supplies both arrows. The same skeleton with rain and wet ground is the same fallacy.`,
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

$\\sqrt{2}$ is not a ratio of integers, so irrational; $-\\sqrt{2}$ likewise. Their sum is

$$\\sqrt{2}+(-\\sqrt{2})=0=\\frac{0}{1}$$

which is rational. Two irrational inputs, rational sum: the universal claim fails on this pair. Both numbers qualify as inputs, and the promised property fails on a legitimate pair, so the statement is True.`,
      `**B.** → True

A $\\forall$ claim dies at the first counterexample. The pair $\\sqrt{2}$ and $-\\sqrt{2}$ is that counterexample, so no further pairs need be checked. One failure shows the statement is not a true universal. A claim carrying the word "always" is destroyed by a single failure, so the statement is True.`,
      `**C.** → True

The target is "there is no largest prime." Its negation is "there is a largest prime." A contradiction proof opens with that negation, names the supposed largest prime $p$, and derives a contradiction. That is the correct first line. Opening with "there is no largest prime" would assume the conclusion, so the statement is True.`,
      `**D.** → False

Checking $x=1$ and $x=2$ proves those two instances only. Let $P(x)$ be $x^{2}<9$: it holds at $1$ and $2$ and fails at $3$. A universal claim needs an argument covering every $x$, not a two-point checklist. Any finite checklist leaves unchecked values that may fail, so the statement is False.`,
      `**E.** → True

An $\\exists$ claim asks for one witness. Exhibiting a single $x$ with $P(x)$ true completes the proof. That is the standard existence argument, the mirror image of using one counterexample to kill a $\\forall$ claim. "There exists" asks for one witness and nothing more, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 29,
    solution_overview: `A universal $\\forall x\\,P(x)$ is proved by an argument covering every $x$, and disproved by one counterexample. An existential $\\exists x\\,P(x)$ is proved by one witness. A proof by contradiction of a claim opens with the negation of that claim.

The irrational-sum claim is a universal about every pair of irrationals. Euclid's "no largest prime" is proved by assuming a largest prime $p$ and manufacturing a larger one.`,
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

The given rule is $P\\Rightarrow Q$. The dolphin argument runs the other way: it lives in water, therefore it must be a fish, which is $Q\\Rightarrow P$. Plug the dolphin in: $Q$ is true and $P$ is false. An implication with a true "if" and a false "then" is false, so the converse fails and the argument is invalid, so the statement is True.`,
      `**B.** → True

The lizard argument starts from "does not live in water" ($\\neg Q$) and concludes "is not a fish" ($\\neg P$). That is the contrapositive $\\neg Q\\Rightarrow\\neg P$, which is equivalent to the given rule, so the argument is valid. From "no water" to "no fish" is the one form logically identical to the biology rule, so the statement is True.`,
      `**C.** → False

The snake argument starts from "not a fish" ($\\neg P$) and concludes "does not live in water" ($\\neg Q$). That is the inverse. A water snake is not a fish and still lives in water: $\\neg P$ true, $Q$ true, so $\\neg Q$ false. The inverse therefore has a true hypothesis and a false conclusion. Inverse reasoning is not guaranteed. The first half of the claim (this is the inverse) is right; the "always valid" half is not, so the statement is False.`,
      `**D.** → True

"All fish live in water" is $\\forall x\\,(P(x)\\Rightarrow Q(x))$. Negate by flipping the quantifier and rewriting the implication as its failure case:

$$\\neg\\forall x\\,(P(x)\\Rightarrow Q(x))\\equiv\\exists x\\,(P(x)\\land\\neg Q(x))$$

In words: there exists a fish that does not live in water. That is the quoted sentence, so the statement is True.`,
      `**E.** → False

A counterexample to $\\forall x\\,(P(x)\\Rightarrow Q(x))$ must satisfy $P$ and fail $Q$: some fish that does not live in water. The dolphin is not a fish, so $P$ is already false. It therefore never enters the "if" half of the universal claim, and living in water cannot refute "all fish live in water." The dolphin is the reverse of what is needed, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 30,
    solution_overview: `Write $P$ for "is a fish" and $Q$ for "lives in water." The biology rule is $P\\Rightarrow Q$.

The converse is $Q\\Rightarrow P$, the inverse is $\\neg P\\Rightarrow\\neg Q$, and the contrapositive is $\\neg Q\\Rightarrow\\neg P$. Negating the universal "all fish live in water" produces $\\exists x\\,(P(x)\\land\\neg Q(x))$: a fish that does not live in water. A counterexample to the universal must have $P$ true and $Q$ false.`,
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

The policy is $P\\Rightarrow Q$. The unique failure row is $P$ true and $Q$ false, that is $P\\land\\neg Q$: paid on time and did *not* get the discount. The offered sentence keeps both halves true ($P\\land Q$). That is the policy being honoured, not denied. The trap is flipping the wrong half of the conjunction, so the statement is False.`,
      `**B.** → False

The policy $P\\Rightarrow Q$ constrains only punctual payers. It never says the discount arrives *only* through prompt payment. A late payer who still gets a holiday $5\\%$ has $P$ false and $Q$ true. Then $P\\Rightarrow Q$ holds (false antecedent), while the converse $Q\\Rightarrow P$ fails. One such customer separates the two, so the statement is False.`,
      `**C.** → True

Alex paid on day $45$. Compare with the $30$-day line: $45>30$, so $P$ is false. Alex did not receive the discount, so $Q$ is false. An implication $P\\Rightarrow Q$ is true whenever $P$ is false, whatever $Q$ does. Alex therefore sits outside the policy's promise and cannot serve as a counterexample. A counterexample would need $P$ true and $Q$ false, so the statement is True.`,
      `**D.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: pay late and you get nothing. The policy never speaks about late payers. A holiday promotion can still give a late payer the $5\\%$, making $\\neg P$ true and $Q$ true, so the inverse fails while the policy stands. The inverse forbids discounts to late payers, which the store is free to hand out anyway, so the statement is False.`,
      `**E.** → False

This statement denies the single rewriting that *is* guaranteed. "No discount, therefore the payment was late" is the contrapositive $\\neg Q\\Rightarrow\\neg P$, which always carries the same truth value as the policy. Claiming that "only the original itself" is guaranteed is exactly wrong: the contrapositive is locked to it. The contrapositive does hold, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 31,
    solution_overview: `Write $P$ for "the customer pays within $30$ days" and $Q$ for "the customer gets the $5\\%$ discount." The policy is $P\\Rightarrow Q$.

Negation is the unique failure row $P\\land\\neg Q$. The converse is $Q\\Rightarrow P$, the inverse is $\\neg P\\Rightarrow\\neg Q$, and the contrapositive is $\\neg Q\\Rightarrow\\neg P$. The original pairs with the contrapositive. Alex paid on day $45$ and received nothing, so $P$ false and $Q$ false.`,
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

The regulation is $P\\Rightarrow Q$: revenue above $\\$1$ million forces an audit. Its negation is the single failure row $P\\land\\neg Q$: some company with revenue above $\\$1$ million that did not file. The quoted sentence is $P\\Rightarrow\\neg Q$, a rival rule about *every* large company. That is a different (and stronger) claim, not $\\neg(P\\Rightarrow Q)$. A rival "if then not" rule is the classic wrong shape, so the statement is False.`,
      `**B.** → False

The converse claims that filing an audit forces revenue above $\\$1$ million. Take a firm with $\\$300{,}000$ of revenue that files voluntarily: $P$ false, $Q$ true. Then $Q\\Rightarrow P$ fails, while the original $P\\Rightarrow Q$ is idle because the revenue gate never opened. The regulation does not lock the converse. Only large firms file is a claim the regulation never made, so the statement is False.`,
      `**C.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: revenue at most $\\$1$ million, therefore no audit. The same voluntary filer has $\\neg P$ true and $\\neg Q$ false. True hypothesis, false conclusion: the inverse fails. Equivalence would require matching truth values in every scenario; this one split already separates them. The inverse tells small companies not to file, which the regulation never said, so the statement is False.`,
      `**D.** → True

Swap and negate: "no audit, therefore revenue does not exceed $\\$1$ million." That sentence is $\\neg Q\\Rightarrow\\neg P$, the contrapositive, so it is equivalent to the regulation and must hold with it. This is the one rewriting that inherits the regulation's truth, so the statement is True.`,
      `**E.** → True

Company X has revenue $\\$2$ million. Compare with the threshold: $2>1$, so $P$ is true. X did not file an audit, so $Q$ is false. That is exactly $P\\land\\neg Q$, the unique failure of $P\\Rightarrow Q$. One such company is enough to prove the regulation false. Revenue $\\$2$ million with no audit is the shape the negation calls for, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 32,
    solution_overview: `Write $P$ for "annual revenue exceeds $\\$1$ million" and $Q$ for "the company files an annual audit." The regulation is $P\\Rightarrow Q$.

Negation is a single offender $P\\land\\neg Q$, not a rival rule $P\\Rightarrow\\neg Q$. The converse is $Q\\Rightarrow P$ and the inverse is $\\neg P\\Rightarrow\\neg Q$; both fail if a small firm files voluntarily. The contrapositive $\\neg Q\\Rightarrow\\neg P$ inherits the regulation's truth. Company X has revenue $\\$2$ million and did not file.`,
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

Pilot A's file: $300\\ge 250$ so $H$ is true; written exam passed so $W$ is true; practical test failed so $T$ is false. Then

$$H\\land W\\land T=\\mathrm{T}\\land\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

One failed conjunct denies the license. $300$ hours notwithstanding, A is not licensed, so the statement is False.`,
      `**B.** → False

Pilot B has $240$ hours ($H$ false) but passed both exams. Hours are necessary: $240<250$ already kills the conjunction, so B is not licensed. Both exams cannot repair a shortfall of $10$ hours. The hours gate is not optional, so the statement is False.`,
      `**C.** → False

Necessary means: no license unless $H$ holds. Sufficient would mean: $H$ alone forces a license, regardless of $W$ and $T$. Pilot A has $H$ true ($300\\ge 250$) and still fails because $T$ is false. Hours by themselves never grant the license. Hours are one requirement of three, so the statement is False.`,
      `**D.** → True

The grant condition is the conjunction $H\\land W\\land T$. If the practical test fails, $T$ is false, and a false conjunct makes the whole conjunction false even when $H$ and $W$ both hold. Pilot A is that row: $300$ hours, written passed, practical failed, unlicensed. Failing the practical test is an absolute bar, so the statement is True.`,
      `**E.** → True

The claim is existential: some pilot with more than $250$ hours is still unlicensed. Pilot A's file is the witness: $300$ hours, written passed, practical failed. $H$ is true and $T$ is false, so $H\\land W\\land T$ fails. That one file proves such a pilot exists, so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 33,
    solution_overview: `The license is granted if and only if three tests all hold. Write $H$ for at least $250$ flight hours, $W$ for the written exam, and $T$ for the practical test:

$$\\text{Licensed}\\Leftrightarrow H\\land W\\land T$$

In a conjunction every part is necessary and no part is sufficient on its own. Pilot A: $300$ hours, written passed, practical failed. Pilot B: $240$ hours, both exams passed.`,
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

The $650$ score does fail $S$, but $C$ is true, and an OR needs only one true part. With the $35\\%$ ratio also satisfied:

$$(S\\lor C)\\land D=(\\mathrm{F}\\lor\\mathrm{T})\\land\\mathrm{T}=\\mathrm{T}$$

P is approved. The claim that credit score alone blocks P ignores the OR in the bracket, so the statement is False.`,
      `**B.** → False

Q's file: credit score $720$, so $S$ holds; no co-signer, so $C$ is false; debt-to-income $45\\%$, so $D$ is false. The bracket is true ($S$ alone fills it), but the outer AND still needs $D$:

$$(S\\lor C)\\land D=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

Q is not approved. The excellent score cannot buy off the ratio, so the statement is False.`,
      `**C.** → False

A score of at least $700$ makes $S$ true, which fills $S\\lor C$. Approval still requires the outer conjunct $D$: ratio below $40\\%$. Applicant Q is the check: $720\\ge 700$ but $45\\%\\ge 40\\%$. The score cannot override a failed ratio, so "always approved regardless of DTI" is false, so the statement is False.`,
      `**D.** → True

The approval formula is $(S\\lor C)\\land D$. If the ratio is $40\\%$ or above, $D$ is false, and $(S\\lor C)\\land\\mathrm{F}=\\mathrm{F}$ no matter whether $S$ or $C$ holds. A $720$ score or a co-signer can fill the bracket and still leave the outer AND false. A ratio of $40\\%$ or above is an absolute bar, so the statement is True.`,
      `**E.** → True

Applicant P is the witness: score $650<700$ so $S$ is false; a qualified co-signer so $C$ is true; ratio $35\\%<40\\%$ so $D$ is true. Then

$$(S\\lor C)\\land D=(\\mathrm{F}\\lor\\mathrm{T})\\land\\mathrm{T}=\\mathrm{T}$$

A score below $700$ is allowed whenever the co-signer fills the OR and the ratio clears $40\\%$, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 34,
    solution_overview: `The approval rule mixes both connectives:

$$\\text{Approved}\\Leftrightarrow(S\\lor C)\\land D$$

with $S$ = credit score at least $700$, $C$ = a qualified co-signer, $D$ = debt-to-income ratio below $40\\%$. Inside the bracket, score and co-signer are alternatives. Outside the bracket, $D$ is chained on with and, so the ratio is an absolute requirement. Applicant P: score $650$, co-signer, ratio $35\\%$. Applicant Q: score $720$, no co-signer, ratio $45\\%$.`,
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

The converse is $Q\\Rightarrow P$: every loyalty-point diner ordered dessert. Sam received a point ($Q$ true) as a birthday promotion and did not order dessert ($P$ false). True "if", false "then": $Q\\Rightarrow P$ fails on Sam. That is the unique failure row of the converse. He is the ideal refutation, so the statement is True.`,
      `**B.** → True

The target is "not every point-earning diner ordered dessert." Its opposite is "every diner who received a point ordered dessert," which is $Q\\Rightarrow P$. Assume that opposite. Sam received a point without ordering dessert, so the assumption is false. That is a correctly opened proof by contradiction, with Sam as the colliding case, so the statement is True.`,
      `**C.** → False

The original policy is $P\\Rightarrow Q$: order dessert, get a point. It fails only on dessert with no point. Sam skipped dessert and still got a birthday point: $\\neg P\\land Q$. The policy never promised anything about diners who skip dessert, so Sam does not touch $P\\Rightarrow Q$. To kill $P\\Rightarrow Q$ you need $P\\land\\neg Q$; Sam offers the opposite pair, so the statement is False.`,
      `**D.** → True

Negating $P\\Rightarrow Q$ produces $P\\land\\neg Q$: a diner who ordered dessert and did not receive a point. Sam's coordinates are the opposite pair (no dessert, got a point). Finding Sam therefore cannot be the correctly formed negation of the policy. The diner who would negate the policy differs from Sam in both coordinates, so the statement is True.`,
      `**E.** → True

The inverse says: skip dessert, therefore receive no point. Sam skipped dessert ($\\neg P$ true) and still received a birthday point ($\\neg Q$ false). True hypothesis, false conclusion: the inverse is false, and Sam is the witness. The inverse promises no point to anyone skipping dessert, and Sam walked out with one, so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 35,
    solution_overview: `Write $P$ for "the diner orders dessert" and $Q$ for "the diner receives a loyalty point." The policy is $P\\Rightarrow Q$. Sam's birthday point gives him $P$ false and $Q$ true.

To refute a conditional you need its "if" half true and its "then" half false. The converse is $Q\\Rightarrow P$, the inverse is $\\neg P\\Rightarrow\\neg Q$, and the original fails only on $P\\land\\neg Q$. A contradiction proof of "not every point-earner ordered dessert" opens by assuming the converse.`,
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

The inner claim at $m=4$ asks for a positive integer $n$ with $4n=100$. Dividing gives $n=25$, and $25$ is a positive integer. Check:

$$4\\cdot 25=100$$

The inner existential is satisfied at $m=4$. $4$ divides $100$, which is what that $n$ needs, so the statement is True.`,
      `**B.** → False

Fix $m=3$. The inner claim asks for a positive integer $n$ with $3n=100$. Solving gives $n=100/3$, which is not an integer. No other $n$ can satisfy a linear equation with a unique root, so $m=3$ has no partner. $100/3$ is not a whole number, and the equation offers no second candidate, so the statement is False.`,
      `**C.** → False

The overall claim is $\\forall m\\,\\exists n:\\, mn=100$: every positive integer $m$ must have some positive integer partner $n$. At $m=3$ that partner would have to be $100/3$, which is not an integer. One failing $m$ is enough, so the "for every $m$" sentence is false. "For every" admits no exceptions, so the statement is False.`,
      `**D.** → True

Pushing a negation through nested quantifiers flips each one and negates the core: $\\forall$ becomes $\\exists$, $\\exists$ becomes $\\forall$, and $mn=100$ becomes $mn\\ne 100$. The witness $m=3$ works: for every positive integer $n$, $3n\\ne 100$. The sentence given is the correct negation, and $m=3$ is the witness it promises, so the statement is True.`,
      `**E.** → True

With the quantifiers reversed, a single $n$ must work for every $m$ at once: $m=1$ demands $n=100$ and $m=2$ demands $n=50$. No number is both. The original allowed $n$ to depend on $m$; the reversal freezes one $n$ for all $m$. The reversed statement is false. Same symbols, opposite strength, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `The statement is $\\forall m\\,\\exists n:\\, m\\cdot n=100$ over positive integers. First $m$ is given, then $n$ may depend on $m$. For a given $m$ the equation forces $n=100/m$, which is a legal answer only when $m$ divides $100$.

Negation flips each quantifier and the equation:

$$\\neg(\\forall m\\,\\exists n:\\, mn=100)\\equiv\\exists m\\,\\forall n:\\, mn\\ne 100$$

Reversing the quantifiers produces $\\exists n\\,\\forall m:\\, mn=100$: one fixed $n$ serving every $m$ at once.`,
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

Clue (3) is the atomic sentence "Dan is guilty," not an implication. No other clue is needed to read that sentence. Combined with "exactly one of Ann, Ben, Cara, Dan is guilty," Dan occupies the unique guilty slot. Statement A asks only about Dan, which clue (3) already settles, so the statement is True.`,
      `**B.** → False

The setup says exactly one of the four is guilty. Clue (3) names Dan as guilty. Uniqueness then clears Ann, Ben, and Cara. Ann is therefore innocent. The claim that Ann is guilty contradicts both clue (3) and the "exactly one" constraint. The guilty slot holds one person and Dan occupies it, so the statement is False.`,
      `**C.** → False

Cara's innocence is forced without opening clue (2). Clue (3) makes Dan guilty; "exactly one guilty" then makes Cara innocent. Clue (2) says: if Ben is innocent, then Cara is innocent. After uniqueness, Ben is already innocent, so clue (2) holds, but it is not the step that established Cara's innocence. Dropping clue (2) leaves Cara still innocent, so the statement is False.`,
      `**D.** → True

With Ann innocent, clue (1) has a false "if" part, so it is automatically satisfied and produces nothing. Its contrapositive $D\\Rightarrow\\neg A$ could in principle have cleared Ann, but the counting had already done that job. A conditional with a false antecedent yields no new fact about anyone. Clue (1) adds no information in this puzzle, so the statement is True.`,
      `**E.** → True

Clue (3) asserts Dan's guilt with no "if." Even if the "exactly one guilty" constraint were dropped, clue (3) would still say Dan is guilty. Uniqueness is used only to clear Ann, Ben, and Cara. Dan's guilt does not depend on it. Clue (3) is a flat assertion rather than a conditional, so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `Exactly one of Ann, Ben, Cara, Dan is guilty. The clues are:

$$(1)\\ A\\Rightarrow\\neg D,\\qquad (2)\\ \\neg B\\Rightarrow\\neg C,\\qquad (3)\\ D,\\qquad (4)\\ C\\Rightarrow A$$

Clue (3) is a plain assertion, not a conditional. Combined with uniqueness, it fills the unique guilty slot and clears the other three. A conditional with a false antecedent yields no new fact.`,
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

Suppose X is a liar. Then X's sentence "$Y$ always lies" is false, so Y is a truth-teller. A truth-teller's sentence must be true, so $\\neg x\\land\\neg y$ holds, which requires $\\neg y$ and makes Y a liar. Y cannot be both. The liar-X case is impossible, so X is a truth-teller.

so the statement is True.`,
      `**B.** → False

Suppose Y is a truth-teller. Then Y's sentence is true: both X and Y are liars. That requires Y to be a liar, contradicting the opening assumption. So Y is not a truth-teller.

so the statement is False.`,
      `**C.** → True

Y said that X and Y are both liars. If that sentence were true, Y would be a liar, so the sentence would be false. A sentence cannot be true and false, so Y's statement is false.

so the statement is True.`,
      `**D.** → False

Two types for X can be tested. X a liar forces Y to be both a truth-teller and a liar: contradiction. X a truth-teller forces Y to be a liar, and Y's false conjunction is consistent because $\\neg x$ is already false. One surviving assignment is not two.

so the statement is False.`,
      `**E.** → True

A lying X makes "Y always lies" false, so Y would have to be truthful; but a truthful Y's sentence demands that Y be a liar. The two demands on Y cannot both hold, so the opening assumption that X lies must be rejected.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `Every islander is either a truth-teller, whose every sentence is true, or a liar, whose every sentence is false. Write $x$ for "X is a truth-teller" and $y$ for "Y is a truth-teller".

X's sentence claims $\\neg y$. Y's sentence claims $\\neg x\\land\\neg y$. Each type assignment must make a truth-teller's sentence true and a liar's sentence false.`,
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

Statement 1 is $\\exists s\\,\\forall e\\, G(s,e)$. Fix that student $s_0$, then pick an arbitrary exam $e$: $G(s_0,e)$ holds, so $\\forall e\\,\\exists s\\, G(s,e)$ follows at once. Hand that same student to whichever exam you are asked about.

so the statement is True.`,
      `**B.** → False

Two exams, two students: X tops Exam 1 only, Y tops Exam 2 only. Each exam has a high scorer, so Statement 2 is true, yet nobody clears both exams, so Statement 1 fails. A single such class is enough. The reverse arrow does not hold.

so the statement is False.`,
      `**C.** → False

Equivalence needs both arrows. Statement 1 implies Statement 2, but a two-student class with a different top scorer on each exam sends Statement 2 true and Statement 1 false, so the arrow back is missing. Same predicates, different quantifier order.

so the statement is False.`,
      `**D.** → True

"Each exam has a high scorer, but the high scorer keeps changing" is exactly that split: Statement 2 can be true while Statement 1 is false. One class with a rotating top scorer is a witness.

so the statement is True.`,
      `**E.** → True

Restrict the exam domain to a singleton $\\{e_1\\}$. Then $\\forall e\\, G(s,e)$ and the inner existential in Statement 2 both collapse to $G(s,e_1)$. With a single exam there is nothing for the two quantifiers to disagree about: both statements shrink to $\\exists s\\; G(s,e_1)$.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `Write $G(s,e)$ for "student $s$ scored above $90$ on exam $e$". Statement 1 picks the student first:

$$S_1:\\ \\exists s\\,\\forall e\\; G(s,e)$$

Statement 2 names the exam first, so the student is allowed to change:

$$S_2:\\ \\forall e\\,\\exists s\\; G(s,e)$$

In $S_1$ one student must survive every exam. In $S_2$ a different student may cover each exam.`,
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

The given votes are R1 yes, R2 yes, R3 no, R4 no, so $Y=2$. Gate 1 asks $Y\\ge 3$: $2\\ge 3$ fails. Gate 2 asks whether $Y=2$ and R1 is among the yes-votes: both hold, so gate 2 opens. The candidate is approved.

so the statement is True.`,
      `**B.** → False

The tie-breaking power is written for R1 by name, not for any two reviewers. With yes-votes from R2 and R3 the count is still $2$, so gate 1 stays shut, and R1 voted no, so gate 2 stays shut. Same $Y=2$ as the given candidate, but R1's absence flips the outcome.

so the statement is False.`,
      `**C.** → True

Gate 1 is $Y\\ge 3$, and names are ignored there. Any three yes-votes give $Y=3$, which meets that count, so gate 1 opens no matter which three reviewers they are.

so the statement is True.`,
      `**D.** → False

"Necessary in every scenario" is a strong claim, and one counter-scenario sinks it: yes-votes from R2, R3 and R4 give $Y=3$, gate 1 opens, and R1 voted no. R1 is decisive only in the two-vote case.

so the statement is False.`,
      `**E.** → True

Yes from R2 and R3 only: $2<3$ closes gate 1, and R1's absence closes gate 2. That is one scenario with exactly two yes-votes and no approval, which is all an "there exists" claim needs.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `The committee rule has two independent gates, and a candidate is approved the moment one of them opens. Let $Y$ be the number of yes-votes.

Gate 1: $Y\\ge 3$. Only the count matters; names are ignored.

Gate 2: $Y=2$ and R1 is one of the two. Here the name matters.

R1's special power lives only in the two-vote rows. With three yes-votes the count alone decides.`,
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

Company Z uses the product commercially ($C$ true), has written approval ($W$ true), and has never serviced it ($S$ false). The rescue needs $W$ and $S$ together, and $S$ is missing, so the rescue never opens. Commercial use puts Z inside the voiding clause. The warranty is void.

so the statement is True.`,
      `**B.** → False

Approval is one half of the rescue, and half of an "and" rescues nothing. Z has $W$ true and $S$ false, so $W\\land S$ is false. Z is the living counterexample: written approval in hand, warranty gone.

so the statement is False.`,
      `**C.** → True

The rescue formula is $W$ and $S$: both halves of the exception must hold. Approval without servicing leaves the conjunction false; servicing without approval does the same. Satisfying only one of the two is not enough.

so the statement is True.`,
      `**D.** → False

Servicing appears only inside the exception, and the exception opens with written approval. Without approval, $W$ is false, so $W\\land S$ is false even if $S$ is true. Annual servicing is not an independent escape hatch.

so the statement is False.`,
      `**E.** → False

The servicing requirement sits inside an exception to the commercial-use clause. If Z never used the product commercially, $C$ is false and that clause never fires. Nothing in the quoted warranty then asks for annual servicing.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 6,
    solution_overview: `Let $C$ mean the product is used commercially, $W$ mean the manufacturer approved commercial use in writing, and $S$ mean the product is serviced every year.

If $C$ is false the clause never fires. If $C$ is true the warranty is void unless the rescue clause applies, and the rescue needs $W$ and $S$ together. For a commercially used product the warranty survives exactly when both halves hold:

$$W\\land S$$

One missing half sinks the whole rescue.`,
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

The target is "there is no smallest positive real," so the legal opening is the opposite: suppose such an $x>0$ exists. Then $\\frac{x}{2}$ is still positive and strictly smaller than $x$, so $x$ was not smallest after all. The proof opens with the negation of the target and ends in an impossibility.

so the statement is True.`,
      `**B.** → False

A contradiction proof of "$\\sqrt{3}$ is irrational" must assume the negation: $\\sqrt{3}=\\frac{p}{q}$ in lowest terms. Opening with "assume $\\sqrt{3}$ is irrational" assumes the conclusion itself. There is then nothing left to contradict.

so the statement is False.`,
      `**C.** → False

The original is $(\\forall f\\,D(f))\\land(\\forall t\\,O(t))$. Negating an AND yields an OR, and negating "all" yields "some not":

$$\\exists f\\,\\neg D(f)\\ \\lor\\ \\exists t\\,\\neg O(t)$$

The offered sentence keeps the AND and strengthens both halves. One on-time flight already falsifies the original while leaving that offered sentence false.

so the statement is False.`,
      `**D.** → False

"Some employee always arrives late" is $\\exists x\\,\\forall d\\,L(x,d)$. Flip both quantifiers and negate inside: $\\forall x\\,\\exists d\\,\\neg L(x,d)$, every employee has at least one on-time day. "All employees are never late" is $\\forall x\\,\\forall d\\,\\neg L(x,d)$, a much stronger ban.

so the statement is False.`,
      `**E.** → True

An existential $\\exists x\\, P(x)$ is settled by exhibiting one value that works. A universal $\\forall x\\, P(x)$ is not settled by any finite list of successes, because unchecked values remain; it needs an argument that runs for an arbitrary $x$.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `Two ideas do most of the work here. A proof by contradiction must open by assuming the opposite of what you want to prove. Negating a sentence flips "for all" into "there exists" and "and" into "or".

An existential claim is settled by one witness. A universal claim needs an argument that runs for an arbitrary value, not a finite list of successes.`,
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

Premise 2 gives a person $a$ who is an economist and a game theorist. Premise 1 says every economist studies human behaviour, so $H(a)$ follows. Then $G(a)\\land H(a)$, which is the conclusion. The same three steps work for any $a$ supplied by Premise 2, so the argument is valid.

so the statement is True.`,
      `**B.** → False

Replace Premise 2 by "no economists specialize in game theory." Picture a world with economists who all study human behaviour and with nobody at all in game theory. Both modified premises hold, yet the conclusion $\\exists x\\,(G(x)\\land H(x))$ fails because there is no game theorist. Premises true, conclusion false: the modified argument is invalid.

so the statement is False.`,
      `**C.** → True

Validity asks only: whenever the premises are true, must the conclusion be true? It does not inspect whether Premise 1 or Premise 2 actually holds in the real world. Soundness is the stricter label that adds "and the premises are in fact true."

so the statement is True.`,
      `**D.** → True

Validity is about the derivation from the premises: it never inspects whether Premise 1 is true in the real world. If Premise 1 happened to be false, the argument would remain valid and lose soundness, because soundness needs valid form and true premises.

so the statement is True.`,
      `**E.** → False

Affirming the consequent is the invalid pattern $P\\Rightarrow Q$, $Q$, therefore $P$. The given premises are a universal implication about economists and an existential about game theory, with no bare consequent used to recover the antecedent. An instance of affirming the consequent would be invalid, so the label does not fit.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `Write $E(x)$ for "$x$ is an economist", $H(x)$ for "$x$ studies human behaviour", and $G(x)$ for "$x$ specializes in game theory". The argument is

P1: $\\forall x\\,(E(x)\\Rightarrow H(x))$.

P2: $\\exists x\\,(E(x)\\land G(x))$.

Conclusion: $\\exists x\\,(G(x)\\land H(x))$.

Validity asks only: whenever the premises are true, must the conclusion be true? Soundness adds that the premises are in fact true. Affirming the consequent is the invalid pattern $P\\Rightarrow Q$, $Q$, therefore $P$.`,
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

The fan's rule is: if a player scores over $30$, the team wins. In the given game Player X scored $35$, so the hypothesis holds, and the team lost $90$-$95$, so the conclusion fails. That is the one combination an implication forbids.

so the statement is True.`,
      `**B.** → True

The existential asks for one game in which some player scored over $30$ and the team did not win. The reported game has a $35$-point scorer and a $90$-$95$ loss, which is exactly that pair of facts. An "there exists" sentence needs a single example, and this game supplies it.

so the statement is True.`,
      `**C.** → True

The contrapositive is the same claim wearing different clothes, so it dies with the original. You can also read it off the game: the team did not win, yet a player scored $35$, exactly what "no win means nobody over $30$" forbids.

so the statement is True.`,
      `**D.** → False

Falsity does not spread to all four relatives. The converse sits in the other pair, and deciding it would take a game the team won. The reported game is a defeat, so $Q$ is false and the converse is idle. Falsity of $P\\Rightarrow Q$ therefore does not force falsity of $Q\\Rightarrow P$.

so the statement is False.`,
      `**E.** → True

The inverse $\\neg P\\Rightarrow\\neg Q$ pairs with the converse, not with the original. It is tested by games with no $30$-point scorer. The reported game has a $35$-point scorer, so $P$ is true and the inverse is not even evaluated. Its truth value is a separate question from the fan's false rule.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `For a single game let $P$ mean "some player scored over $30$ points" and $Q$ mean "the team won". The fan claims $P\\Rightarrow Q$ for every game.

An implication has exactly one way of failing: true hypothesis, false conclusion. The contrapositive $\\neg Q\\Rightarrow\\neg P$ always agrees with the original. The converse $Q\\Rightarrow P$ and the inverse $\\neg P\\Rightarrow\\neg Q$ form a separate pair, independent of the original.`,
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

The task states that the professor did apply a curve, so the live cut-off is $s\\ge 60$. Student W scored $65$, and $65\\ge 60$ holds. Curve on, so the bar sits at $60$, and $65$ clears it. W gets the B.

so the statement is True.`,
      `**B.** → False

Without a curve the live cut-off is $s\\ge 70$. Student W scored $65$, and $65<70$, so the baseline biconditional denies the B. W's $65$ sits in the band $60\\le s<70$ that the curve alone unlocks.

so the statement is False.`,
      `**C.** → True

The baseline uses $70$; the curve replaces it with $60$. Compare: $60<70$, so the threshold moves down, not up. Anyone with $s\\ge 70$ still has $s\\ge 60$, so a B already earned under the baseline is never taken away.

so the statement is True.`,
      `**D.** → True

A score of $62$ satisfies $60\\le 62<70$. Under a curve the cut-off is $60$, so $62\\ge 60$ earns the B. Without a curve the cut-off is $70$, so $62<70$ denies it. The B at $62$ therefore occurs only if the curve is applied.

so the statement is True.`,
      `**E.** → False

The baseline biconditional is $B$ iff $s\\ge 70$, and the "unless" clause replaces the cut-off by $60$ when a curve is applied. This exam used a curve, and W scored $65$, which is below $70$ and still a B. So "at least $70$ is necessary in all circumstances" is false.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `Writing $s$ for the score, the baseline rule (no curve) is $B$ if and only if $s\\ge 70$. When a curve is applied the bar drops by ten points: $B$ if and only if $s\\ge 60$.

"If and only if" runs in both directions: clearing the active cut-off earns the grade, missing it denies the grade. Scores in $60\\le s<70$ earn a B only when the curve is on.`,
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

$$15=3\\times 5,\\qquad 28=2^2\\times 7$$

The prime lists $\\{3,5\\}$ and $\\{2,7\\}$ are disjoint, so $\\mathrm{gcd}(15,28)=1$. Coprime tooth counts wear evenly, so Pair 1 passes.

so the statement is True.`,
      `**B.** → False

Factor Pair 2:

$$24=2^3\\times 3,\\qquad 36=2^2\\times 3^2$$

Both $2$ and $3$ appear on each side. Taking the smaller power of each shared prime gives $\\mathrm{gcd}(24,36)=2^2\\times 3=12\\ne 1$. Pair 2 is not coprime.

so the statement is False.`,
      `**C.** → True

Coprime means: for every prime $p$, $p$ does not divide both $m$ and $n$. Negating a universal claim produces an existential one: there exists a prime $p$ such that $p$ divides $m$ and $p$ divides $n$.

so the statement is True.`,
      `**D.** → True

Given $\\mathrm{gcd}(m,n)=1$ with both greater than $1$, suppose both were even. Then the prime $2$ would divide each of them, forcing $\\mathrm{gcd}(m,n)\\ge 2$ and contradicting $\\mathrm{gcd}=1$. So a coprime pair is never two even numbers.

so the statement is True.`,
      `**E.** → False

Coprime means no shared prime factor, not "at least one of $m,n$ is prime." Pair 1 is the counterexample: $15=3\\times 5$ and $28=2^2\\times 7$ are both composite, yet $\\mathrm{gcd}(15,28)=1$.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `Two whole numbers are coprime when $\\mathrm{gcd}(m,n)=1$, equivalently when no prime divides both. The quickest test is to break each number into prime factors and look for anything shared.

Pair 1 has tooth counts $15$ and $28$. Pair 2 has tooth counts $24$ and $36$. The negation of "coprime" is "there exists a prime dividing both." Two even numbers always share the prime $2$. Coprime numbers need not themselves be prime.`,
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

K cancelled $2$ days before renewal. The early branch needs $d\\ge 3$; here $2<3$, so K is in the late branch. Late branch: the subscription still renews (and a charge applies). Usage $15\\%$ is irrelevant to whether it renews; usage is consulted only for the later refund test.

so the statement is True.`,
      `**B.** → False

K cancelled $2$ days out, so $d<3$ and the late branch applies. A partial refund is issued if and only if $u<10\\%$. K used $15\\%$ of the service, and $15<10$ is false. The biconditional therefore withholds the refund.

so the statement is False.`,
      `**C.** → True

K still cancelled $2$ days out, so $d<3$ and the late branch still applies. Change only the usage to $5\\%$. Then $5\\%<10\\%$ holds, so the refund side of that biconditional opens.

so the statement is True.`,
      `**D.** → True

Change only the timing to $4$ days: $4\\ge 3$, so K moves into the early branch. Early branch: no renewal and no charge. The $15\\%$ usage figure is never read, because the refund biconditional sits only in the late branch.

so the statement is True.`,
      `**E.** → False

The $10\\%$ usage test is written only in the late-cancellation paragraph ($d<3$). If a subscriber cancels $3$ or more days ahead, the early branch settles everything by timing: no renewal, no charge, and no refund question.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 12,
    solution_overview: `Let $d$ be the number of days between cancelling and the renewal date, and $u$ the share of the service used.

Branch 1, cancelled early, $d\\ge 3$: no renewal and no charge. Usage is never mentioned in this branch.

Branch 2, cancelled late, $d<3$: the subscription renews and the subscriber is charged. Afterwards a partial refund is issued exactly when $u<10\\%$. Because this is an "if and only if", low usage both triggers the refund and is required for it.`,
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

The guideline is $P\\Rightarrow Q$: fever above $38^{\\circ}\\mathrm{C}$ forces antibiotics. An implication fails only on $P\\land\\neg Q$. The quoted sentence is exactly that row: a patient with fever above $38^{\\circ}\\mathrm{C}$ who is not prescribed antibiotics. Observing such a patient would violate the guideline. That is the unique failure case, not another if-then rule, so the statement is True.`,
      `**B.** → False

"Above $38$" is a strict inequality. A reading of $38.0^{\\circ}\\mathrm{C}$ is not above $38$, so $P$ is false. The guideline $P\\Rightarrow Q$ is then idle, whatever the prescription. A counterexample needs $P$ true and $Q$ false: fever strictly above $38$ and no antibiotics. This patient never fires the hypothesis. The trap is the word *above*, so the statement is False.`,
      `**C.** → True

The inverse is $\\neg P\\Rightarrow\\neg Q$: fever not above $38$, therefore no antibiotics. A patient at $37.5^{\\circ}\\mathrm{C}$ with a bacterial infection who still receives antibiotics has $\\neg P$ true and $\\neg Q$ false. That is the failure row of the inverse. Such patients are ordinary in a clinic, so the inverse can be false in practice while the original guideline still holds, so the statement is True.`,
      `**D.** → False

The converse is $Q\\Rightarrow P$: antibiotics, therefore fever above $38$. The $37.5^{\\circ}\\mathrm{C}$ patient who receives antibiotics has $Q$ true and $P$ false. True "if", false "then": the converse fails. The original guideline only constrains high-fever patients, so it does not lock this converse. The trap is treating an implication as if it also forced its converse, so the statement is False.`,
      `**E.** → True

The target is "not every patient prescribed antibiotics has a fever above $38^{\\circ}\\mathrm{C}$." Its opposite is "every such patient does have a fever above $38^{\\circ}\\mathrm{C}$," which is the assumption the claim describes. A patient at $37.5^{\\circ}\\mathrm{C}$ who still receives antibiotics is a case that assumption cannot allow. The opening described is the legal way to start a contradiction proof, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 13,
    solution_overview: `The guideline is $P\\Rightarrow Q$: $P$ = fever above $38^{\\circ}\\mathrm{C}$, $Q$ = antibiotics prescribed. An implication fails only on $P\\land\\neg Q$.

The inverse is $\\neg P\\Rightarrow\\neg Q$, the converse is $Q\\Rightarrow P$, and the contrapositive is $\\neg Q\\Rightarrow\\neg P$. "Above $38$" is a strict inequality, so a reading of exactly $38.0$ makes $P$ false. A proof by contradiction of a claim opens by assuming the opposite of that claim.`,
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

Count the letters in "aaaaaaaaaaaa": twelve identical a's, so length $12$ and $P$ is true. The system does not classify it as strong, so $Q$ is false. That is the unique failure row of $P\\Rightarrow Q$. One such password is enough to show the policy is false as an absolute rule. Other long passwords cannot rescue it, so the statement is True.`,
      `**B.** → True

The converse $Q\\Rightarrow P$ ("strong, therefore at least $12$ characters") lives in the other equivalence pair. Collapse of the original $P\\Rightarrow Q$ does not decide it. Settling the converse needs a strong password shorter than $12$ characters, or a proof that none exists. Neither is supplied by "aaaaaaaaaaaa," so the statement is True.`,
      `**C.** → False

The converse $Q\\Rightarrow P$ asks something only when $Q$ is true, that is, only of passwords that *are* classified as strong. An $8$-character password that is not strong has $P$ false and $Q$ false. False antecedent: the converse holds vacuously on that password and learns nothing. Only a *strong* short password would refute $Q\\Rightarrow P$, so the statement is False.`,
      `**D.** → False

The inverse $\\neg P\\Rightarrow\\neg Q$ is equivalent to the converse $Q\\Rightarrow P$, not to the contrapositive $\\neg Q\\Rightarrow\\neg P$. The contrapositive travels with the original policy. Because the inverse pairs with the converse, its truth *can* be read off the converse. Both halves of the claim reverse that pairing, so the statement is False.`,
      `**E.** → False

"If a password is not strong, it is under $12$ characters" is $\\neg Q\\Rightarrow\\neg P$, the contrapositive of the policy. A contrapositive always shares the original's truth value. The policy is false (witness "aaaaaaaaaaaa"), so this sentence is false too. The same password shows it: not strong, yet length $12$, so "under $12$" fails. No separate check is needed, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 14,
    solution_overview: `Write $P$ for "the password has at least $12$ characters" and $Q$ for "it is classified as strong." The policy claims $P\\Rightarrow Q$ for every password.

The original pairs with the contrapositive $\\neg Q\\Rightarrow\\neg P$. The converse $Q\\Rightarrow P$ pairs with the inverse $\\neg P\\Rightarrow\\neg Q$. The password "aaaaaaaaaaaa" has length $12$ and is not classified as strong.`,
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

The manager claims that all $500$ chips in Batch $12$ pass. Inspection found chip #$317$ in Batch $12$ failed. A universal claim fails as soon as one member fails it. The other $499$ chips have no bearing on that verdict. The manager is wrong, so the statement is True.`,
      `**B.** → False

The manager's claim is $\\forall x\\,\\mathrm{Pass}(x)$ on Batch $12$. Negating a universal gives an existential:

$$\\neg\\forall x\\,\\mathrm{Pass}(x)\\equiv\\exists x\\,\\neg\\mathrm{Pass}(x)$$

"at least one chip fails." Chip #$317$ already witnesses that. "All chips fail" would be $\\forall x\\,\\neg\\mathrm{Pass}(x)$, which needs all $500$ failures and is a different sentence. The trap is replacing $\\exists$ with $\\forall$ when flipping a universal, so the statement is False.`,
      `**C.** → True

Batch $13$ was cancelled before production, so it contains zero chips. To falsify "all chips in Batch $13$ pass" you would have to point at a chip in Batch $13$ that failed. There is no such chip, so the universal cannot be made false. No chips means no possible failures. That is exactly the situation described by *vacuously true*, so the statement is True.`,
      `**D.** → False

Sentence 1 is $\\forall f\\,\\exists c\\,\\mathrm{Explains}(c,f)$: after the chip is named, a code may be chosen. Sentence 2 is $\\exists c\\,\\forall f\\,\\mathrm{Explains}(c,f)$: one code is chosen first and must cover every failure. Ten failures with ten different codes make sentence 1 true and sentence 2 false. Quantifier order is the whole difference, so the statement is False.`,
      `**E.** → True

"Some chip in Batch $12$ failed" is $\\exists x\\,\\neg\\mathrm{Pass}(x)$. Chip #$317$ is in Batch $12$ and failed the stress test, which is one witness for that existential. Existence claims are proved by exhibiting one example. Nothing else about the batch matters, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 15,
    solution_overview: `The manager's sentence is a universal: every chip in Batch $12$ passes. Universal claims fail at one counterexample. Negating $\\forall x\\,\\mathrm{Pass}(x)$ yields $\\exists x\\,\\neg\\mathrm{Pass}(x)$, not $\\forall x\\,\\neg\\mathrm{Pass}(x)$.

Batch $13$ is empty. A universal over an empty domain is vacuously true: there is no member that could fail it. Quantifier order: $\\forall f\\,\\exists c$ lets the code depend on the chip; $\\exists c\\,\\forall f$ freezes one code for every failure. An existential is proved by one witness.`,
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

If $6\\mid n$, write $n=6k=3(2k)$. Then $2k$ is an integer, so $3\\mid n$ automatically. The pair "divisible by $6$ and not by $3$" is empty. The claim says that empty situation occurs for infinitely many $n$. Empty is not infinite. The negation of a true universal implication never happens, so the statement is False.`,
      `**B.** → True

The converse claims: if $n$ is divisible by $3$, then $n$ is divisible by $6$. Test $n=9$: $9=3\\times 3$, so $3$ divides $9$, but $9=6\\times 1+3$, so $6$ does not. Hypothesis true, conclusion false. $9$ is a perfectly good counterexample. The reason is that $6$ also demands a factor $2$, and $9$ is odd, so the statement is True.`,
      `**C.** → True

The inverse is $6\\nmid n\\Rightarrow 3\\nmid n$. Test $n=9$: $6\\nmid 9$ (hypothesis true), yet $3\\mid 9$, so $3\\nmid 9$ is false. True hypothesis, false conclusion: the inverse fails at $9$, matching the already-false converse. Inverse and converse always march together. Both halves of the claim hold, so the statement is True.`,
      `**D.** → False

The original is $6\\mid n\\Rightarrow 3\\mid n$, proved by $n=6k=3(2k)$. Its contrapositive is $3\\nmid n\\Rightarrow 6\\nmid n$, the same implication in other clothes. A statement true for every integer cannot fail for some $n$. Directly: a number untouched by $3$ cannot be a multiple of $6$. No such $n$ exists, so the statement is False.`,
      `**E.** → False

The original $6\\mid n\\Rightarrow 3\\mid n$ holds for every integer $n$. The converse $3\\mid n\\Rightarrow 6\\mid n$ is a different implication, already refuted by $n=9$. Falsity of the converse never leaks into the original. The two statements are independent, and the original remains true. That is the classic mix-up of the two equivalence pairs, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `The original statement is $6\\mid n\\Rightarrow 3\\mid n$. If $6\\mid n$, write $n=6k=3(2k)$, so $3\\mid n$ automatically.

The converse is $3\\mid n\\Rightarrow 6\\mid n$, the inverse is $6\\nmid n\\Rightarrow 3\\nmid n$, and the contrapositive is $3\\nmid n\\Rightarrow 6\\nmid n$. Original pairs with contrapositive; converse pairs with inverse. A number divisible by $3$ but not by $2$ (such as $9$) tests the second pair.`,
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

The given square is $1234^{2}=1{,}522{,}756$, which ends in $6$, so it is even. Rule $R$ says: even square implies even ID. Applying it in the stated direction gives that $1234$ is even. Direct check: $1234=2\\times 617$. Hypothesis true, conclusion true: the rule is used correctly on this ID, so the statement is True.`,
      `**B.** → False

The rule is $n^{2}$ even $\\Rightarrow$ $n$ even. Contraposition starts from the denial of the conclusion ($n$ odd) and derives the denial of the hypothesis ($n^{2}$ odd). The plan in the claim assumes $n$ even and derives that $n^{2}$ is even. That proves the converse $C$, not $R$. The opening assumption is the wrong half of the implication, so the statement is False.`,
      `**C.** → True

The fact doing the work is "$n^{2}$ odd implies $n$ odd," the contrapositive of "$n$ even implies $n^{2}$ even." An odd square really does force an odd ID, and $4321=2\\times 2160+1$ confirms it. The given square $4321^{2}=18{,}671{,}041$ ends in $1$, so it is odd. The conclusion holds, so the statement is True.`,
      `**D.** → False

Rule $R$ is $n^{2}$ even $\\Rightarrow$ $n$ even. Its converse $C$ is $n$ even $\\Rightarrow$ $n^{2}$ even. They point opposite ways. $C$ is proved from $n=2k$, giving $n^{2}=4k^{2}$. $R$ is proved from $n=2k+1$, giving $n^{2}$ odd. Two true statements with two proofs are still two statements, not "logically the same." The trap is treating "both true" as "logically the same," so the statement is False.`,
      `**E.** → True

An implication $R$ fails only on $n^{2}$ even and $n$ odd. A contradiction proof of $R$ therefore assumes exactly that pair, then derives an impossibility. From $n=2k+1$ one gets $n^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1$, odd, colliding with "$n^{2}$ even." The opening the claim describes is the legal one, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `Two statements are in play:

$$R:\\ n^2\\text{ even}\\Rightarrow n\\text{ even},\\qquad C:\\ n\\text{ even}\\Rightarrow n^2\\text{ even}$$

$C$ is the converse of $R$. Contraposition of $R$ starts from $n$ odd and derives $n^2$ odd. A contradiction proof of $R$ assumes $n^2$ even and $n$ odd. Given: $1234^2=1{,}522{,}756$ (even) and $4321^2=18{,}671{,}041$ (odd).`,
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

The theorem is $\\forall t\\,(P(t)\\Rightarrow Q(t))$: every such inscribed triangle has a right angle at the third vertex. Negating a universal implication yields $\\exists t\\,(P(t)\\land\\neg Q(t))$, one inscribed triangle without a right angle. To deny a claim about every triangle you need only promise a single misbehaving triangle. Correctly formed, so the statement is True.`,
      `**B.** → True

Thales' theorem establishes the original universal. A statement and its negation cannot both hold, so the existential "there exists such a triangle without a right angle" must be false. The theorem is proved, so the misbehaving triangle the negation demands does not exist. A proved statement always leaves its negation false, so the statement is True.`,
      `**C.** → True

Start with an arbitrary right triangle, hypotenuse $AB$, right angle at $C$. Let $M$ be the midpoint of $AB$. Then $MA=MB$ by construction, and a classical theorem gives $MC=MA$ as well. The circle centred at $M$ with radius $MA$ therefore passes through $A$, $B$, and $C$, and $AB$ is a diameter. Every right triangle can be inscribed that way, so the converse is true, so the statement is True.`,
      `**D.** → True

Thales' theorem gives $P\\Rightarrow Q$: inscribed on a diameter, therefore a right angle. The midpoint construction gives $Q\\Rightarrow P$: a right angle, therefore inscribable on the hypotenuse as diameter. Both directions hold, so here $P\\Leftrightarrow Q$. That is a proved geometric fact, not a free gift of every implication. Most converses fail, so the statement is True.`,
      `**E.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: not inscribed that way, therefore no right angle. That sentence is equivalent to the converse, never to the original. The original pairs with the contrapositive. Truth of Thales' theorem therefore does not hand over the inverse; here the inverse is true only because the midpoint construction makes the converse true. The claimed reason ("inverse always equivalent to the original") is false, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 18,
    solution_overview: `Thales' theorem is $\\forall t\\,(P(t)\\Rightarrow Q(t))$: every triangle inscribed in a semicircle with the diameter as one side has a right angle at the third vertex.

Negation is $\\exists t\\,(P(t)\\land\\neg Q(t))$. The converse $Q\\Rightarrow P$ is the midpoint construction: the circle centred at the midpoint of the hypotenuse with that radius passes through all three vertices. Both directions give a biconditional. The inverse $\\neg P\\Rightarrow\\neg Q$ pairs with the converse, not with the original.`,
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

The theorem is $S\\Rightarrow O$: perfect square, therefore an odd number of positive divisors. Negating an implication keeps the "if" and rejects the "then": $S\\land\\neg O$, a perfect square with an even divisor count. That is the quoted sentence. Correct formation is about shape; the pairing argument later shows no integer actually fits it, so the statement is True.`,
      `**B.** → True

$36$ is $6^{2}$, so the hypothesis "perfect square" holds. The listed divisors are $1,2,3,4,6,9,12,18,36$: nine, which is odd. Hypothesis true and conclusion true: $36$ supports the theorem. A counterexample would need a square with an even divisor count, which this is not, so the statement is True.`,
      `**C.** → True

Divisors pair as $d$ with $n/d$. A divisor is its own partner only when $n$ is a perfect square. So if the divisor count is odd, that leftover partner must exist, and $n$ is a square. That is the converse, and it sits beside the original theorem. Both directions hold here, so the statement is True.`,
      `**D.** → False

The theorem speaks only about perfect squares. $20$ sits between $4^{2}=16$ and $5^{2}=25$, so $20$ is not a square and the hypothesis is false. Its divisors number $6$, even, as the pairing for non-squares predicts. An implication with a false "if" is not tested, let alone refuted, by $20$. The trap is treating a non-square with an even list as if it broke "square $\\Rightarrow$ odd count," so the statement is False.`,
      `**E.** → True

The inverse is "not a square, therefore even divisor count," equivalent to the converse. $20$ is not a square and has $6$ divisors, even, matching it. The pairing argument gives the same conclusion in general: with no leftover square-root partner, every divisor has a distinct mate and the count is even. The inverse holds here because the converse does, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 19,
    solution_overview: `Divisors pair as $d$ with $n/d$. A divisor is its own partner only when $d^{2}=n$, that is when $n$ is a perfect square. So a square has an odd divisor count (the square-root partner stands alone), and a non-square has an even count.

The theorem is $S\\Rightarrow O$: perfect square, therefore odd divisor count. The converse is odd count $\\Rightarrow$ square. The inverse is not a square $\\Rightarrow$ even count. Negation of the theorem is $S\\land\\neg O$. Sample $36=6^{2}$; sample $20$ sits between $4^{2}$ and $5^{2}$.`,
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

Open clue (3): Grace is not a teacher. Clue (2) is a biconditional, so "Felix is an engineer" must match "Grace is a teacher." The right-hand side is false, therefore Felix is not an engineer. Clue (1) is "Emma is a doctor $\\Leftrightarrow$ Felix is not an engineer." The right-hand side is now true, so Emma is a doctor. Each link is forced; there is no other job for her, so the statement is True.`,
      `**B.** → False

Felix does teach, but the justification attached to the claim is broken. Clue (2) connects two unknowns and on its own names nobody; even with clue (3) it yields only "Felix is not the engineer," and pinning him to Teacher needs Emma placed by clue (1) and Hugo placed by clue (4). The trap is treating a correct conclusion as if a single clue delivered it. A right job with a wrong reason makes the statement false, so the statement is False.`,
      `**C.** → True

Clue (3) says Grace is not a teacher, so clue (2) forces Felix not to be an engineer, and clue (1) then makes Emma the doctor. Clue (4) places Hugo as the lawyer. Two jobs remain, Engineer and Teacher, for Felix and Grace, and Felix is already barred from Engineer. With Doctor taken by Emma and Lawyer by Hugo, Grace engineers, so the statement is True.`,
      `**D.** → True

Drop clue (3) and try Grace as teacher. Clue (2) then makes Felix the engineer. Clue (1) then makes "Emma is a doctor" false. Clue (4) already placed Hugo as lawyer, so the only job left for Emma is Doctor. That contradicts "Emma is not a doctor." Clues (1), (2), and (4) already forbid Grace-as-teacher, so clue (3) is redundant, so the statement is True.`,
      `**E.** → True

The chain to Emma's job used only clues (3), (2), and (1): Grace not teacher $\\Rightarrow$ Felix not engineer $\\Rightarrow$ Emma is doctor. Clue (4) names Hugo as lawyer and is used only later to split Engineer from Teacher between Felix and Grace. Remove clue (4) and Emma is still the doctor. The path never mentioned Hugo, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 20,
    solution_overview: `Four friends, four distinct jobs. The clues are two biconditionals and two facts:

$$(1)\\ \\text{Emma doctor}\\Leftrightarrow\\text{Felix not engineer}$$

$$(2)\\ \\text{Felix engineer}\\Leftrightarrow\\text{Grace teacher}$$

$$(3)\\ \\text{Grace is not a teacher},\\qquad (4)\\ \\text{Hugo is a lawyer}$$

A biconditional forces matching truth values. Clue (3) supplies a fixed truth value that can start a chain. Jobs are a permutation: each job is held by exactly one person.`,
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

The theorem says: if a sequence converges, then it is bounded. Its negation would be a sequence that converges and is not bounded. Because the theorem is proved for every sequence, that combination never occurs. The theorem holds for every sequence, so nothing can converge while running off to infinity. The description picks out an empty collection, so the statement is True.`,
      `**B.** → True

The converse claims: bounded, therefore convergent. For $a_{n}=(-1)^{n}$ the terms are only $-1$ and $1$, so every term lies in $[-1,1]$ and the sequence is bounded. It never settles near a single limit: odd and even subsequences stay at different values. Bounded with no limit: the converse fails, and this sequence is the witness, so the statement is True.`,
      `**C.** → True

The inverse is "does not converge, therefore not bounded," equivalent to the converse. The same sequence $(-1)^{n}$ diverges (alternating) and stays inside $[-1,1]$ (bounded). Hypothesis of the inverse true, conclusion false. The inverse is false for the same reason the converse is, with the same witness. Inverse and converse always share a truth value, so the statement is True.`,
      `**D.** → True

The contrapositive is "not bounded, therefore does not converge," equivalent to the proved theorem, hence true. For the sequences $n$, $2n$, and $n^{2}$, unboundedness is immediate ($n\\to\\infty$), and the contrapositive then yields divergence without a separate $\\varepsilon$-argument. Both halves of the claim hold: true, and genuinely useful, so the statement is True.`,
      `**E.** → False

The theorem $P\\Rightarrow Q$ (convergent $\\Rightarrow$ bounded) sits with its contrapositive. The converse $Q\\Rightarrow P$ sits with the inverse. Falsity of the converse (witness $(-1)^{n}$) does not touch the theorem. A convergent sequence is still bounded; some bounded sequences (this one) fail to converge. The original theorem remains true. Falsity does not leak across the two pairs, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 21,
    solution_overview: `The theorem is $P\\Rightarrow Q$: a sequence converges, therefore it is bounded. Negation would be a sequence that converges and is unbounded.

The converse is $Q\\Rightarrow P$ (bounded, therefore convergent). The inverse is $\\neg P\\Rightarrow\\neg Q$. The contrapositive is $\\neg Q\\Rightarrow\\neg P$. Original pairs with contrapositive; converse pairs with inverse. The oscillating sequence $a_n=(-1)^n$ is bounded and does not converge.`,
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

Suppose J tells the truth. Then "exactly one truth-teller" is true, and J is that one, so K and L are both liars. L said "K and I are the same type." Both liars really are the same type, so L's sentence would be true. A liar cannot say a true sentence. The J-truthful branch is impossible, so J is a liar, so the statement is True.`,
      `**B.** → True

Suppose J tells the truth. Then K and L are both liars, but L's "same type" sentence would be true, which a liar cannot say. So J is a liar. K's sentence is "J is lying," which is then true. A true sentence can come only from a truth-teller. K is a truth-teller. Equivalently, K talks about J, so J and K always have opposite types, so the statement is True.`,
      `**C.** → True

J's sentence is false, so the count of truth-tellers cannot be exactly one, and K is already one, so a second is needed and L is all that is left. L's own sentence then checks out: K and L really are the same type. If L were a liar instead, K would be the sole truth-teller and J's "exactly one" claim would become true, which a liar cannot say, so the statement is True.`,
      `**D.** → False

J said "exactly one of us is a truth-teller." J is a liar, so that count is wrong. In the surviving assignment K and L are both truth-tellers, so the actual count is two, not one. "Exactly one" is J's own line, and a liar's sentence has to be false. The real count is two, so the statement is False.`,
      `**E.** → False

The J-truthful branch died on L's sentence. In the surviving branch J is a liar, so K's "J is lying" is true and K is a truth-teller. The count of truth-tellers is then not exactly one, so L must also be a truth-teller. If instead L were a liar, K would be the sole truth-teller and J's "exactly one" would become true, which a liar cannot say. Every alternative closes. The assignment is unique, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 22,
    solution_overview: `Each islander's type must match the accuracy of what they say: a truth-teller's sentence is true, a liar's sentence is false. J says "exactly one of us is a truth-teller." K says "J is lying." L says "K and I are the same type."

K talks about J, so K's sentence is true exactly when J lies: J and K always have opposite types. Test the two branches for J. A liar cannot say a true sentence, and a truth-teller cannot say a false one.`,
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

Rule (4) states it outright: Dmitri attends. Split on Ana. If Ana attends, rule (1) sends Boris away, rule (2) brings Ceci, and the unless-clause of (3) leaves Dmitri free, matching rule (4). If Ana stays away, Ceci cannot attend (else (3) would push Dmitri out), so Boris is forced in by (2), and Dmitri still attends. Both legal rosters keep Dmitri, so the statement is True.`,
      `**B.** → False

Two legal rosters survive. Ana in: {Ana, Ceci, Dmitri}, because (1) drops Boris, (2) brings Ceci, and the unless-clause saves Dmitri. Ana out: {Boris, Dmitri}, because (3) then forbids Ceci, and (2) forces Boris in. Ana is in one roster and out of the other. The rules leave her decision open. Uniqueness would require the two cases to agree about Ana, so the statement is False.`,
      `**C.** → True

The claim asks for at least one legal roster of size $3$. The Ana-in case puts Ana, Ceci and Dmitri in the room with Boris away: three attendees. Check the rules: (1) holds (Boris out), (2) holds (Ceci in), (3) is waived by Ana, (4) holds. One example is all an existence claim needs. The other legal roster has size $2$, which is irrelevant to an "at least one" claim, so the statement is True.`,
      `**D.** → False

Try Ana out and Boris out together. Rule (4) still puts Dmitri in. With Ana out, rule (3) has no unless-exception, so Ceci attending would force Dmitri out, contradicting rule (4). Thus Ceci is out. Rule (2) says: if Boris is out, then Ceci attends. Boris out and Ceci out make rule (2) fail. The attempted pair "both absent" collapses: Boris is forced in. That is the Ana-out roster, not a third one, so the statement is False.`,
      `**E.** → False

Delete the unless-exception, so Ceci attending always forces Dmitri out. The Ana-in roster had Ceci and Dmitri both in, so that case dies. The Ana-out roster is {Boris, Dmitri} with Ceci out. Rule (3) is idle because Ceci is absent, so the stricter version still holds. One legal roster remains. The trap is thinking the unless-clause is load-bearing for every solution, when the Ana-out case never uses it, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 23,
    solution_overview: `Write $A,B,C,D$ for attendance of Ana, Boris, Ceci, Dmitri. The rules translate as:

$$(1)\\ A\\Rightarrow\\neg B,\\qquad (2)\\ \\neg B\\Rightarrow C$$

$$(3)\\ C\\Rightarrow\\neg D\\text{ unless }A,\\qquad (4)\\ D$$

Rule (4) is a flat fact. Split on Ana. When Ana is out, rule (3) has no unless-exception, so Ceci attending would force Dmitri out. When Ana is in, the unless-clause leaves Dmitri unrestricted.`,
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

Rule (4) says: if Zoe joins, then Noah does not. Contrapose it: if Noah joins, then Zoe does not. That is the claimed implication, taken from a numbered rule. A rule and its contrapositive never disagree. If Noah joins, Maria comes by (1) and Zoe is out by this contrapositive, so the statement is True.`,
      `**B.** → False

Suppose Leo and Noah both join. Rule (2): Leo joins only if Zoe joins, so Zoe must join. Rule (4): if Zoe joins, then Noah does not join. Zoe in and Noah in contradict rule (4). The chain is Leo $\\Rightarrow$ Zoe $\\Rightarrow$ not Noah, so Leo and Noah cannot share a roster. None of the legal rosters contains both, so the statement is False.`,
      `**C.** → True

Try the roster {Maria}. Noah is out, so rule (1) is idle; Leo is out, so rule (2) is idle; Zoe is out, so rule (4) is idle. Rule (3) asks for Maria or Leo, and Maria is in, so all four rules hold. Maria on her own is legal. Possible, so the statement is True.`,
      `**D.** → True

Rule (1) says: if Noah joins, then Maria joins. Contrapose it: if Maria does not join, then Noah does not join. That is the claimed sentence, equivalent to a given rule, so it holds in every legal roster. No case work is required; a rule and its contrapositive never disagree, so the statement is True.`,
      `**E.** → False

Rule (3) needs Maria or Leo. Maria alone satisfies it, and with Noah, Leo, and Zoe all out, rules (1), (2), and (4) are idle. The roster {Maria} is legal and omits Zoe. A "must join" claim fails as soon as one legal roster leaves Zoe out. Zoe appears in some legal rosters, not all, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 24,
    solution_overview: `Four students, four rules:

$$(1)\\ N\\Rightarrow M,\\qquad (2)\\ L\\Rightarrow Z,\\qquad (3)\\ M\\lor L,\\qquad (4)\\ Z\\Rightarrow\\neg N$$

A rule whose "if" part is false demands nothing. Chaining (2) then (4) gives $L\\Rightarrow Z\\Rightarrow\\neg N$. Contrapositives of (1) and (4) are available whenever the originals are.`,
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

Open with rule (1): Ben $\\Rightarrow$ Carla. Then rule (3): Carla $\\Rightarrow$ not Dan. Chain them: Ben $\\Rightarrow$ Carla $\\Rightarrow$ not Dan, so Ben playing forces Dan out. Ben pulls Carla in and Carla shuts Dan out, two rules in a row, no exceptions, so the statement is True.`,
      `**B.** → False

Suppose Ben and Dan both play. Rule (1) forces Carla in with Ben. Rule (3) then says: if Carla plays, Dan does not. Carla in and Dan in contradict rule (3). Equivalently: Ben $\\Rightarrow$ Carla $\\Rightarrow$ not Dan. The pair is impossible, so the statement is False.`,
      `**C.** → True

Check {Ella} against the four rules. Ben is out, so rule (1) is idle; Dan is out, so rule (2) is idle; Carla is out, so rule (3) is idle. Rule (4) needs Ben or Ella, and Ella is in. {Ella} passes every rule. Ella can play alone, so the statement is True.`,
      `**D.** → True

Rule (3) is Carla $\\Rightarrow$ not Dan. Contrapose: Dan $\\Rightarrow$ not Carla. That is the claimed sentence, taken from a numbered rule. The only legal roster containing Dan is {Dan, Ella}: rule (2) is satisfied because Ella plays, rule (4) is satisfied by Ella, and Carla is out, matching the contrapositive, so the statement is True.`,
      `**E.** → False

Carla is pulled in only by rule (1), and only when Ben plays. Without Ben, rule (4) still needs Ella, and Carla may sit out. {Ella} and {Dan, Ella} are both legal and omit Carla. A "must play" claim fails on either roster. Carla is required only as Ben's companion, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 25,
    solution_overview: `Four friends, four rules:

$$(1)\\ B\\Rightarrow C,\\qquad (2)\\ D\\Rightarrow E,\\qquad (3)\\ C\\Rightarrow\\neg D,\\qquad (4)\\ B\\lor E$$

Chaining (1) then (3) gives $B\\Rightarrow C\\Rightarrow\\neg D$. The contrapositive of (3) is $D\\Rightarrow\\neg C$. Rule (4) is satisfied by either Ben or Ella.`,
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

Rule (4) is: Quinn cooks only if Owen does not, that is Quinn $\\Rightarrow$ not Owen. Contrapose it: Owen $\\Rightarrow$ not Quinn. That is the claimed implication, taken from a numbered rule. Quinn is out whenever Owen is in. Turn the "only if" around and Owen cooking means Quinn does not, so the statement is True.`,
      `**B.** → False

Rule (1) says: if Owen cooks, then Priya does not. A night with both cooking would make that hypothesis true and the conclusion false, violating rule (1) on the spot. No later rule is allowed to override a broken numbered rule. Never both. Rule (1) blocks that pairing in a single line, so the statement is False.`,
      `**C.** → False

Check {Quinn} against the four rules. Rule (2) requires Owen or Priya; neither is cooking, so rule (2) fails immediately. Rule (1) is idle (Owen out). Rule (3) is idle (Priya out). Rule (4) holds, but a single broken numbered rule is enough. Quinn cannot cook alone. Rule (2) demands Owen or Priya every night, so the statement is False.`,
      `**D.** → True

Rule (3) says: if Priya cooks, then Quinn also cooks. That is exactly the claimed guarantee. The only Priya evening the other rules allow is {Priya, Quinn}, which includes Quinn: Owen is out by (1) and (2), and (4) holds because Owen is away. That is rule (3) quoted back, so the statement is True.`,
      `**E.** → False

Rules (1) and (2) together force exactly one of Owen or Priya. The Priya evening is {Priya, Quinn}: rule (3) brings Quinn, rule (4) holds because Owen is out, and rule (1) is idle. That legal evening omits Owen. Owen therefore is not required every night. The rules insist that one of Owen and Priya cooks, not that it must be Owen, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 26,
    solution_overview: `Three roommates, four rules:

$$(1)\\ O\\Rightarrow\\neg P,\\qquad (2)\\ O\\lor P,\\qquad (3)\\ P\\Rightarrow Q,\\qquad (4)\\ Q\\Rightarrow\\neg O$$

Rules (1) and (2) together force exactly one of Owen or Priya. Rule (4) contraposed is $O\\Rightarrow\\neg Q$.`,
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

Suppose Diego goes. Rule (1) brings Fatima. Rule (3) then pushes Grace out. Rule (2) needs Grace or Hugo, so Hugo goes. Rule (6): Hugo goes only if Fatima does not, so Fatima is out. Line 1 put Fatima in and the last line took her out. The assumption is impossible, so Diego never goes. There is no scenario for the claim to point at, so the statement is False.`,
      `**B.** → True

Rule (6) says Hugo goes only if Fatima does not; contraposed, Fatima going means Hugo staying home. A rule and its contrapositive are the same claim, so no case work is needed. That is the claimed implication, equivalent to a given rule, so the statement is True.`,
      `**C.** → True

Diego cannot go: $D\\Rightarrow F\\Rightarrow\\neg G\\Rightarrow H\\Rightarrow\\neg F$ collides. With Diego gone, rule (4) still needs Diego or Hugo, so Hugo must go in every remaining roster. Rule (4) needs Diego or Hugo, and Diego is off the table entirely, so the whole burden falls on Hugo, so the statement is True.`,
      `**D.** → True

Diego is impossible, so Fatima is out by the same collapse ($H$ is forced and then (6) keeps Fatima out). Test {Hugo, Grace, Iris}: rules (1) and (3) are idle, rule (2) is satisfied because Hugo is in, rule (4) is satisfied by Hugo, rule (5) holds because Diego is out, and rule (6) holds because Fatima is out. All six hold, so Grace and Iris can attend together, so the statement is True.`,
      `**E.** → False

The claimed implication is Iris $\\Rightarrow$ Fatima. Hugo is always in (Diego is impossible, so (4) forces Hugo), and rule (6) then keeps Fatima out of every legal roster. Iris goes in {Hugo, Iris} and {Hugo, Grace, Iris}. Take {Hugo, Grace, Iris}: Iris in, Fatima out. True "if", false "then." The implication fails, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 27,
    solution_overview: `Five members, six rules:

$$(1)\\ D\\Rightarrow F,\\qquad (2)\\ G\\lor H,\\qquad (3)\\ F\\Rightarrow\\neg G$$

$$(4)\\ D\\lor H,\\qquad (5)\\ I\\Rightarrow\\neg D,\\qquad (6)\\ H\\Rightarrow\\neg F$$

Chaining Diego in through (1), (3), (2), (6) produces a collision on Fatima. Rule (6) contraposed is $F\\Rightarrow\\neg H$.`,
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

Suppose Aiden presents. Rule (1) then forces both Bella and Caleb in. Bella in triggers rule (3) (Daisy out) and rule (6) (Ethan out). Rule (2) needs Daisy or Ethan, and both are now out. Contradiction. So Aiden never presents, in every valid scenario. Aiden cannot present without Bella, and Bella's presence leaves rule (2) with nobody to satisfy it, so the statement is True.`,
      `**B.** → False

Put Bella on the roster. Rule (3): Bella $\\Rightarrow$ not Daisy, so Daisy is out. Rule (6): Ethan presents only if Bella does not, so Ethan is out. Rule (2) still needs Daisy or Ethan. Both missing: every Bella roster is illegal. Bella cannot present in any valid scenario. The collision is immediate, so the statement is False.`,
      `**C.** → True

Rule (4) is the given sentence: Caleb presents only if Ethan presents, which is Caleb $\\Rightarrow$ Ethan. The claim quotes that implication. There is nothing to derive; "only if" *is* that implication. Both surviving Caleb rosters include Ethan, so the statement is True.`,
      `**D.** → False

Rule (5) says Faye $\\Rightarrow$ Aiden. Rule (1) says Aiden $\\Rightarrow$ Bella (and Caleb). Bella is already impossible: she would remove Daisy by rule (3) and Ethan by rule (6), leaving rule (2) with nobody. So Aiden is out, and therefore Faye is out. Faye depends on Aiden, Aiden depends on Bella, and Bella is impossible, so the statement is False.`,
      `**E.** → False

After Bella, Aiden, and Faye are excluded, the live people are Caleb, Daisy, and Ethan, with rule (2) (Daisy or Ethan) and rule (4) (Caleb $\\Rightarrow$ Ethan). Five rosters survive: {Daisy}, {Ethan}, {Daisy, Ethan}, {Caleb, Ethan}, {Caleb, Daisy, Ethan}. Five is already more than one, so uniqueness fails, so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 28,
    solution_overview: `Six interns, six rules:

$$(1)\\ A\\Rightarrow(B\\land C),\\qquad (2)\\ D\\lor E,\\qquad (3)\\ B\\Rightarrow\\neg D$$

$$(4)\\ C\\Rightarrow E,\\qquad (5)\\ F\\Rightarrow A,\\qquad (6)\\ E\\Rightarrow\\neg B$$

Bella in would remove Daisy by (3) and Ethan by (6), leaving (2) empty. Aiden needs Bella by (1). Faye needs Aiden by (5). The live people after those exclusions are Caleb, Daisy, and Ethan, with (2) and (4) still in force.`,
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

Suppose Petra does not review. Rule (6): Sana reviews only if Petra reviews, so Sana is out too. Rule (4) needs Petra or Sana, and both are gone. Contradiction. Therefore Petra reviews in every valid assignment. Drop Petra and rule (6) drops Sana with her, leaving rule (4) with nobody at all, so the statement is True.`,
      `**B.** → True

Rule (1) says: if Petra reviews, then Quinn does not. Contrapose it: if Quinn reviews, then Petra does not. That is the claimed sentence. Combined with Petra reviewing in every valid assignment (else (6) and (4) collide), Quinn is excluded as well. Contrapositive of rule (1), so it holds automatically, so the statement is True.`,
      `**C.** → False

Petra is forced (else (6) and (4) collide). Then rule (1) drops Quinn. Rule (3): Quinn out $\\Rightarrow$ Theo in. Rule (5): Theo in $\\Rightarrow$ Ravi out. Rule (2) is then carried by Sana, not by Ravi. There is no legal assignment in which Ravi reviews. There is no branch where Ravi sneaks back in once Theo is forced, so the statement is False.`,
      `**D.** → True

Petra is forced. Then: rule (1) excludes Quinn; rule (3) brings Theo; rule (5) excludes Ravi; rule (2), with Ravi out, brings Sana; rule (6) is content because Petra already reviews. The unique assignment is therefore {Petra, Sana, Theo}. Both Theo and Sana review. Theo is brought in by rule (3); Sana is brought in by rule (2), so the statement is True.`,
      `**E.** → False

Every status is pinned by a numbered rule once Petra is forced: Quinn out by (1), Theo in by (3), Ravi out by (5), Sana in by (2). No reviewer is left with a free yes/no choice. A second valid assignment would need at least one optional person. There is none, so uniqueness holds and "multiple different valid ways" is false, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 29,
    solution_overview: `Five researchers, six rules:

$$(1)\\ P\\Rightarrow\\neg Q,\\qquad (2)\\ R\\lor S,\\qquad (3)\\ \\neg Q\\Rightarrow T$$

$$(4)\\ P\\lor S,\\qquad (5)\\ T\\Rightarrow\\neg R,\\qquad (6)\\ S\\Rightarrow P$$

If Petra is out, (6) drops Sana and (4) is empty. From Petra in, the remaining rules act as a chain of forced switches.`,
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

Without Victor the roster also loses Uma (by (1)) and Bianca (by (7) read backwards). Wendy in and Xavier out leaves at most Wendy, Yara and Zane (size $\\le 3$). Xavier in and Wendy out removes Yara by rule (4), forces Zane by rule (5), and yields only Xavier and Zane (size $2$). Both fall short of four, so Victor must compete, so the statement is True.`,
      `**B.** → False

Victor always competes (else the head count under (8) fails). Rule (2) then always brings Wendy in, and rule (3) permits exactly one of Wendy and Xavier. Xavier is shut out every time. No roster contains him. Rule (3) allows exactly one of Wendy or Xavier, and Wendy is already in, so the statement is False.`,
      `**C.** → True

Rule (6) says Zane competes only if Bianca does not, that is Zane $\\Rightarrow$ not Bianca. Contrapose it: Bianca $\\Rightarrow$ not Zane. That is the claimed implication. The two never appear together. Among Yara, Zane and Bianca, rule (6) forbids the Zane and Bianca pair, so the statement is True.`,
      `**D.** → False

The forced core is Uma, Victor, Wendy in and Xavier out. Among Yara, Zane and Bianca, rule (5) asks for Yara or Zane and rule (6) forbids Zane with Bianca, leaving four extras: {Yara}, {Zane}, {Yara, Bianca}, {Yara, Zane}. Four legal rosters is already more than one. Only four of the seven have their fate decided, so the statement is False.`,
      `**E.** → False

With the forced core Uma, Victor, Wendy already in and Xavier already out, a size-$6$ roster would need all three of Yara, Zane and Bianca; rule (5) is fine, but rule (6) blocks the Zane and Bianca pair, so six is unreachable. The surviving extras are only {Yara}, {Zane}, {Yara, Bianca} and {Yara, Zane}, giving sizes $4$ or $5$, so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 30,
    solution_overview: `Seven finalists, eight rules. The hinge is (8): at least four competitors. Write the live constraints:

$$(1)\\ U\\Leftrightarrow V,\\qquad (2)\\ V\\Rightarrow W,\\qquad (3)\\ \\text{exactly one of }W,X$$

$$(4)\\ X\\Rightarrow\\neg Y,\\qquad (5)\\ Y\\lor Z,\\qquad (6)\\ Z\\Rightarrow\\neg B,\\qquad (7)\\ B\\Rightarrow U$$

If Victor is out, (1) removes Uma and (7) removes Bianca, after which (3) cannot reach four people. Rule (6) contraposed is $B\\Rightarrow\\neg Z$.`,
  },
];
