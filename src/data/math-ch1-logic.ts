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
    title: "Exam-Style",
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

Intersection keeps only elements that sit in both $A$ and $B$.

$$A=\\{1,2,3,4,5\\}$$

$$B=\\{3,4,5,6,7\\}$$

Test each member of $A$:

$$1\\in A$$

$$1\\notin B$$

$$2\\in A$$

$$2\\notin B$$

$$3\\in A$$

$$3\\in B$$

$$4\\in A$$

$$4\\in B$$

$$5\\in A$$

$$5\\in B$$

Collect the keepers:

$$A\\cap B=\\{3,4,5\\}$$

The claimed roster is

$$\\{3,4,5\\}$$

The computed roster matches the claim.

So the statement is True.`,
      `**B.** → False

Union keeps every element that sits in $A$ or in $C$ (or both).

$$A=\\{1,2,3,4,5\\}$$

$$C=\\{5,6,7,8,9\\}$$

Members coming from $A$:

$$1\\in A\\cup C$$

$$2\\in A\\cup C$$

$$3\\in A\\cup C$$

$$4\\in A\\cup C$$

$$5\\in A\\cup C$$

Members that $C$ adds beyond $A$:

$$6\\in C$$

$$6\\notin A$$

$$7\\in C$$

$$7\\notin A$$

$$8\\in C$$

$$8\\notin A$$

$$9\\in C$$

$$9\\notin A$$

So the full union is

$$A\\cup C=\\{1,2,3,4,5,6,7,8,9\\}$$

The claim lists

$$\\{1,2,3,4,5,6,7,8\\}$$

It drops $9$, but $9\\in C$, so the claim is incomplete.

So the statement is False.`,
      `**C.** → True

An element of $(A\\cap B)\\cap C$ must sit in all three lists. First form the pairwise intersection:

$$A=\\{1,2,3,4,5\\}$$

$$B=\\{3,4,5,6,7\\}$$

$$A\\cap B=\\{3,4,5\\}$$

Now test those three against $C=\\{5,6,7,8,9\\}$:

$$3\\notin C$$

$$4\\notin C$$

$$5\\in C$$

Therefore

$$(A\\cap B)\\cap C=\\{5\\}$$

The claim is that same singleton.

So the statement is True.`,
      `**D.** → False

Difference $A\\setminus C$ keeps members of $A$ that miss $C$.

$$A=\\{1,2,3,4,5\\}$$

$$C=\\{5,6,7,8,9\\}$$

$$1\\in A$$

$$1\\notin C$$

$$2\\in A$$

$$2\\notin C$$

$$3\\in A$$

$$3\\notin C$$

$$4\\in A$$

$$4\\notin C$$

$$5\\in A$$

$$5\\in C$$

So only $5$ is removed:

$$A\\setminus C=\\{1,2,3,4\\}$$

The claim lists

$$\\{1,2,3\\}$$

It drops $4$, but $4\\in A$ and $4\\notin C$.

So the statement is False.`,
      `**E.** → False

Disjointness requires an empty intersection. List the two sets:

$$B=\\{3,4,5,6,7\\}$$

$$C=\\{5,6,7,8,9\\}$$

Test shared membership:

$$5\\in B$$

$$5\\in C$$

$$6\\in B$$

$$6\\in C$$

$$7\\in B$$

$$7\\in C$$

$$B\\cap C=\\{5,6,7\\}$$

The intersection is nonempty, so $B$ and $C$ are not disjoint.

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

Recover $A$ from the set-builder. Solve the defining equation in the integers:

$$x^{2}=9$$

$$x^{2}-9=0$$

$$(x-3)(x+3)=0$$

$$x-3=0$$

$$x=3$$

or

$$x+3=0$$

$$x=-3$$

Both roots are integers, so

$$A=\\{-3,3\\}$$

$B$ is given as $\\{3,-3\\}$. Compare membership both ways:

$$-3\\in B$$

$$3\\in B$$

$$3\\in A$$

$$-3\\in A$$

Sets ignore order, so $A=B$.

So the statement is True.`,
      `**B.** → True

From the set-builder,

$$x^{2}=9$$

gives the integer roots $\\pm 3$, so

$$A=\\{-3,3\\}$$

Test the claimed element:

$$3^{2}=9$$

$$3\\in Z$$

$$3\\in A$$

Alternatively, read the roster directly:

$$3\\in\\{-3,3\\}$$

So the statement is True.`,
      `**C.** → False

From the set-builder the integer roots are $\\pm 3$:

$$(-3)^{2}=9$$

$$-3\\in Z$$

$$3^{2}=9$$

$$3\\in Z$$

$$A=\\{-3,3\\}$$

The claim reprints $A$ as $\\{3\\}$ only. Then

$$A=\\{-3,3\\}$$

$$\\{3\\}=\\{3\\}$$

$$A\\neq\\{3\\}$$

because $-3$ sits in $A$ but not in $\\{3\\}$.

So the statement is False.`,
      `**D.** → True

Cardinality counts distinct members. The set-builder yields

$$A=\\{-3,3\\}$$

Those two integers are distinct:

$$-3\\neq 3$$

$$|A|=2$$

So the statement is True.`,
      `**E.** → False

Filter the same equation by $N=\\{1,2,3,\\ldots\\}$ instead of $Z$. Candidates from

$$x^{2}=9$$

are still $\\pm 3$, but

$$3\\in N$$

$$-3\\notin N$$

so the natural-number set-builder yields

$$C=\\{3\\}$$

The claim equates $C$ with $\\{3,-3\\}$. Compare:

$$C=\\{3\\}$$

$$\\{3,-3\\}=\\{-3,3\\}$$

$$C\\neq\\{3,-3\\}$$

So the statement is False.`,
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

Here $A=\\{a,b,c\\}$ has three ground elements. Each may be included or omitted independently when building a subset:

$$|A|=3$$

$$|\\mathcal{P}(A)|=2^{|A|}$$

$$|\\mathcal{P}(A)|=2^{3}$$

$$2^{3}=8$$

The power set therefore has $8$ elements.

So the statement is True.`,
      `**B.** → False

The elements of $A$ are the letters $a$, $b$, and $c$:

$$A=\\{a,b,c\\}$$

The object $\\{a,b\\}$ is a set of letters, not a letter:

$$\\{a,b\\}\\neq a$$

$$\\{a,b\\}\\neq b$$

$$\\{a,b\\}\\neq c$$

$$\\{a,b\\}\\notin A$$

It is a subset of $A$, so

$$\\{a,b\\}\\subseteq A$$

$$\\{a,b\\}\\in\\mathcal{P}(A)$$

but that is not the claim.

So the statement is False.`,
      `**C.** → True

Subsethood asks whether every member of the left-hand set sits in $A$. The empty set has no members at all, so the implication

$$\\forall x\\,(x\\in\\emptyset\\Rightarrow x\\in A)$$

is vacuously true. Hence

$$\\emptyset\\subseteq A$$

So the statement is True.`,
      `**D.** → False

Proper inclusion needs ordinary inclusion plus a genuine difference:

$$X\\subsetneq Y\\iff(X\\subseteq Y)\\wedge(X\\neq Y)$$

Check each half for $X=Y=A$:

$$A\\subseteq A$$

$$A=A$$

$$A\\neq A$$

is false. Therefore $A$ is not a proper subset of $A$.

So the statement is False.`,
      `**E.** → True

Two-element subsets of a three-element set are counted by

$$\\binom{3}{2}=\\frac{3!}{2!\\,1!}$$

$$3!=3\\cdot 2\\cdot 1$$

$$3!=6$$

$$2!=2\\cdot 1$$

$$2!=2$$

$$1!=1$$

$$\\binom{3}{2}=\\frac{6}{2\\cdot 1}$$

$$\\binom{3}{2}=\\frac{6}{2}$$

$$\\binom{3}{2}=3$$

Listing them confirms the count:

$$\\{a,b\\}$$

$$\\{a,c\\}$$

$$\\{b,c\\}$$

Exactly three such subsets.

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

Subsethood of $\\emptyset$ is vacuous: there is no witness that could sit outside $D$.

$$\\forall x\\,(x\\in\\emptyset\\Rightarrow x\\in D)$$

holds for every set $D$. With

$$D=\\{a,b,c\\}$$

we conclude

$$\\emptyset\\subseteq D$$

So the statement is True.`,
      `**B.** → False

Membership asks whether the object itself appears on the roster of $D$:

$$D=\\{a,b,c\\}$$

The three members are the letters $a$, $b$, and $c$:

$$\\emptyset\\neq a$$

$$\\emptyset\\neq b$$

$$\\emptyset\\neq c$$

$$\\emptyset\\notin D$$

So the statement is False.`,
      `**C.** → True

The number of subsets is the size of the power set:

$$|D|=3$$

$$|\\mathcal{P}(D)|=2^{|D|}$$

$$|\\mathcal{P}(D)|=2^{3}$$

$$2^{3}=8$$

So $D$ has exactly $8$ subsets.

So the statement is True.`,
      `**D.** → False

Check the two claims separately. First inclusion:

$$\\{a\\}\\subseteq D$$

because $a\\in D=\\{a,b,c\\}$. That half is true. Next membership:

$$\\{a\\}\\neq a$$

$$\\{a\\}\\neq b$$

$$\\{a\\}\\neq c$$

$$\\{a\\}\\notin D$$

The conjunction “both are true” fails because the membership half is false.

So the statement is False.`,
      `**E.** → True

Every set is a subset of itself. With $D=\\{a,b,c\\}$, the condition

$$\\forall x\\,(x\\in D\\Rightarrow x\\in D)$$

holds for each of $a$, $b$, and $c$. Hence

$$D\\subseteq D$$

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

Difference $E\\setminus F$ keeps members of $E$ that miss $F$.

$$E=\\{1,3,5,7\\}$$

$$F=\\{3,4,5,6\\}$$

$$1\\in E$$

$$1\\notin F$$

$$3\\in E$$

$$3\\in F$$

$$5\\in E$$

$$5\\in F$$

$$7\\in E$$

$$7\\notin F$$

$$E\\setminus F=\\{1,7\\}$$

So the statement is True.`,
      `**B.** → True

Difference $F\\setminus E$ keeps members of $F$ that miss $E$.

$$F=\\{3,4,5,6\\}$$

$$E=\\{1,3,5,7\\}$$

$$3\\in F$$

$$3\\in E$$

$$4\\in F$$

$$4\\notin E$$

$$5\\in F$$

$$5\\in E$$

$$6\\in F$$

$$6\\notin E$$

$$F\\setminus E=\\{4,6\\}$$

So the statement is True.`,
      `**C.** → False

From the previous two computations:

$$E\\setminus F=\\{1,7\\}$$

$$F\\setminus E=\\{4,6\\}$$

Compare the rosters:

$$1\\in E\\setminus F$$

$$1\\notin F\\setminus E$$

Already

$$E\\setminus F\\neq F\\setminus E$$

So the statement is False.`,
      `**D.** → True

Form the two differences, then unite them:

$$E\\setminus F=\\{1,7\\}$$

$$F\\setminus E=\\{4,6\\}$$

$$1\\in(E\\setminus F)\\cup(F\\setminus E)$$

$$7\\in(E\\setminus F)\\cup(F\\setminus E)$$

$$4\\in(E\\setminus F)\\cup(F\\setminus E)$$

$$6\\in(E\\setminus F)\\cup(F\\setminus E)$$

$$(E\\setminus F)\\cup(F\\setminus E)=\\{1,4,6,7\\}$$

So the statement is True.`,
      `**E.** → True

Intersect the two differences:

$$E\\setminus F=\\{1,7\\}$$

$$F\\setminus E=\\{4,6\\}$$

$$1\\notin\\{4,6\\}$$

$$7\\notin\\{4,6\\}$$

$$4\\notin\\{1,7\\}$$

$$6\\notin\\{1,7\\}$$

$$(E\\setminus F)\\cap(F\\setminus E)=\\emptyset$$

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

Intersection keeps elements in both $A$ and $B$.

$$A=\\{2,4,6,8,10\\}$$

$$B=\\{3,6,9,12\\}$$

$$2\\in A$$

$$2\\notin B$$

$$4\\in A$$

$$4\\notin B$$

$$6\\in A$$

$$6\\in B$$

$$8\\in A$$

$$8\\notin B$$

$$10\\in A$$

$$10\\notin B$$

$$A\\cap B=\\{6\\}$$

So the statement is True.`,
      `**B.** → True

Use the inclusion-exclusion count. First the three sizes:

$$|A|=5$$

$$|B|=4$$

$$|A\\cap B|=1$$

because $A\\cap B=\\{6\\}$. Then

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

$$|A|+|B|=5+4$$

$$5+4=9$$

$$|A\\cup B|=9-1$$

$$|A\\cup B|=8$$

So the statement is True.`,
      `**C.** → False

Difference $C\\setminus A$ keeps members of $C$ that miss $A$.

$$C=\\{1,2,3,4,5\\}$$

$$A=\\{2,4,6,8,10\\}$$

$$1\\in C$$

$$1\\notin A$$

$$2\\in C$$

$$2\\in A$$

$$3\\in C$$

$$3\\notin A$$

$$4\\in C$$

$$4\\in A$$

$$5\\in C$$

$$5\\notin A$$

$$C\\setminus A=\\{1,3,5\\}$$

The claim lists $\\{1,3\\}$, which drops $5$.

So the statement is False.`,
      `**D.** → False

Difference $B\\setminus C$ keeps members of $B$ that miss $C$.

$$B=\\{3,6,9,12\\}$$

$$C=\\{1,2,3,4,5\\}$$

$$3\\in B$$

$$3\\in C$$

$$6\\in B$$

$$6\\notin C$$

$$9\\in B$$

$$9\\notin C$$

$$12\\in B$$

$$12\\notin C$$

$$B\\setminus C=\\{6,9,12\\}$$

The claim lists $\\{3,6,9,12\\}$, which still includes $3$.

So the statement is False.`,
      `**E.** → False

Intersection of $A$ and $C$:

$$A=\\{2,4,6,8,10\\}$$

$$C=\\{1,2,3,4,5\\}$$

$$2\\in A$$

$$2\\in C$$

$$4\\in A$$

$$4\\in C$$

$$6\\in A$$

$$6\\notin C$$

$$8\\in A$$

$$8\\notin C$$

$$10\\in A$$

$$10\\notin C$$

$$A\\cap C=\\{2,4\\}$$

The claim lists $\\{2,4,6\\}$, which incorrectly keeps $6$.

So the statement is False.`,
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

Apply inclusion-exclusion with the given counts:

$$|M|=30$$

$$|E|=25$$

$$|M\\cap E|=12$$

$$|M\\cup E|=|M|+|E|-|M\\cap E|$$

$$|M|+|E|=30+25$$

$$30+25=55$$

$$|M\\cup E|=55-12$$

$$|M\\cup E|=43$$

So the statement is True.`,
      `**B.** → True

The cohort has $50$ students, and the previous letter gives

$$|M\\cup E|=43$$

Students in neither course sit in the complement of the union:

$$|U\\setminus(M\\cup E)|=|U|-|M\\cup E|$$

$$|U|=50$$

$$50-43=7$$

So the statement is True.`,
      `**C.** → True

Only-Mathematics is Mathematics minus the overlap:

$$|M\\setminus E|=|M|-|M\\cap E|$$

$$|M|=30$$

$$|M\\cap E|=12$$

$$30-12=18$$

$$|M\\setminus E|=18$$

So the statement is True.`,
      `**D.** → False

Inclusion $E\\subseteq M$ would require every Economics student to also take Mathematics, so in particular

$$|E|\\le|M|$$

and more strongly

$$E\\cap M=E$$

$$|E\\cap M|=|E|$$

But the data give

$$|E\\cap M|=12$$

$$|E|=25$$

$$12\\neq 25$$

so $E\\not\\subseteq M$.

So the statement is False.`,
      `**E.** → False

Disjointness requires empty intersection:

$$|M\\cap E|=0$$

The given overlap is

$$|M\\cap E|=12$$

$$12\\neq 0$$

so $M$ and $E$ are not disjoint.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `A cohort of $50$ students has $\\lvert M \\rvert = 30$ taking Mathematics, $\\lvert E \\rvert = 25$ taking Economics, and $\\lvert M \\cap E \\rvert = 12$ taking both.

Inclusion-exclusion for two sets is

Substitute the given sizes:

$$30 + 25 - 12 = 43$$

so $\\lvert M \\cup E \\rvert = 43$. Only-Mathematics is $\\lvert M \\rvert$ minus the overlap. Neither course is the cohort size minus the union. $E\\subseteq M$ would require the overlap to equal $\\lvert E \\rvert$. Disjointness would require the overlap to be empty.`,
  },
  {
    id: `math-1-8`,
    case_id: `MATH 1.08`,
    title: `Pairwise Disjoint Blocks and a Partition of U`,
    subsection: `1.1`,
    context: `Let $U = \\{1, 2..., 9\\}$, and let $A = \\{1, 2, 3\\}$, $B = \\{4, 5, 6\\}$, $C = \\{7, 8, 9\\}$.`,
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

Pairwise disjointness means every pairwise intersection is empty.

$$A=\\{1,2,3\\}$$

$$B=\\{4,5,6\\}$$

$$C=\\{7,8,9\\}$$

$$A\\cap B=\\emptyset$$

$$A\\cap C=\\emptyset$$

$$B\\cap C=\\emptyset$$

All three pairwise intersections are empty.

So the statement is True.`,
      `**B.** → True

A partition needs pairwise disjoint nonempty blocks whose union is $U$. From the previous letter the three sets are pairwise disjoint. Their union is

$$A\\cup B=\\{1,2,3,4,5,6\\}$$

$$A\\cup B\\cup C=\\{1,2,3,4,5,6,7,8,9\\}$$

$$U=\\{1,2,\\ldots,9\\}$$

$$A\\cup B\\cup C=U$$

Each block is nonempty, so $\\{A,B,C\\}$ partitions $U$.

So the statement is True.`,
      `**C.** → True

The triple intersection sits inside every pairwise intersection:

$$A\\cap B\\cap C\\subseteq A\\cap B$$

But

$$A\\cap B=\\emptyset$$

so

$$A\\cap B\\cap C=\\emptyset$$

So the statement is True.`,
      `**D.** → False

Difference $A\\setminus B$ keeps members of $A$ that miss $B$:

$$A=\\{1,2,3\\}$$

$$B=\\{4,5,6\\}$$

$$1\\in A$$

$$1\\notin B$$

$$2\\in A$$

$$2\\notin B$$

$$3\\in A$$

$$3\\notin B$$

$$A\\setminus B=\\{1,2,3\\}$$

$$A\\setminus B\\neq\\emptyset$$

So the statement is False.`,
      `**E.** → False

An empty intersection does not force either factor to be empty. Here

$$A\\cap B=\\emptyset$$

but

$$A=\\{1,2,3\\}$$

$$A\\neq\\emptyset$$

$$B=\\{4,5,6\\}$$

$$B\\neq\\emptyset$$

so the claimed implication fails.

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

The universe is $U=\\{1,2,\\ldots,12\\}$ and

$$X=\\{1,2,3,4,5,6\\}$$

Complement keeps the members of $U$ that miss $X$:

$$7\\notin X$$

$$8\\notin X$$

$$9\\notin X$$

$$10\\notin X$$

$$11\\notin X$$

$$12\\notin X$$

$$X^{c}=\\{7,8,9,10,11,12\\}$$

So the statement is True.`,
      `**B.** → True

First form the union:

$$X=\\{1,2,3,4,5,6\\}$$

$$Y=\\{4,5,6,7,8,9\\}$$

$$X\\cup Y=\\{1,2,3,4,5,6,7,8,9\\}$$

Complement relative to $U=\\{1,2,\\ldots,12\\}$:

$$10\\notin X\\cup Y$$

$$11\\notin X\\cup Y$$

$$12\\notin X\\cup Y$$

$$(X\\cup Y)^{c}=\\{10,11,12\\}$$

So the statement is True.`,
      `**C.** → True

Form each complement, then intersect:

$$X^{c}=\\{7,8,9,10,11,12\\}$$

$$Y=\\{4,5,6,7,8,9\\}$$

$$Y^{c}=\\{1,2,3,10,11,12\\}$$

Shared members:

$$10\\in X^{c}$$

$$10\\in Y^{c}$$

$$11\\in X^{c}$$

$$11\\in Y^{c}$$

$$12\\in X^{c}$$

$$12\\in Y^{c}$$

$$X^{c}\\cap Y^{c}=\\{10,11,12\\}$$

So the statement is True.`,
      `**D.** → True

De Morgan’s law for complements says

$$(X\\cap Y)^{c}=X^{c}\\cup Y^{c}$$

Verify by computing both sides. First the intersection:

$$X\\cap Y=\\{4,5,6\\}$$

$$(X\\cap Y)^{c}=\\{1,2,3,7,8,9,10,11,12\\}$$

From earlier,

$$X^{c}=\\{7,8,9,10,11,12\\}$$

$$Y^{c}=\\{1,2,3,10,11,12\\}$$

$$X^{c}\\cup Y^{c}=\\{1,2,3,7,8,9,10,11,12\\}$$

The two sides match.

So the statement is True.`,
      `**E.** → False

From earlier,

$$X^{c}=\\{7,8,9,10,11,12\\}$$

$$Y^{c}=\\{1,2,3,10,11,12\\}$$

Unite them:

$$1\\in Y^{c}$$

$$2\\in Y^{c}$$

$$3\\in Y^{c}$$

$$7\\in X^{c}$$

$$8\\in X^{c}$$

$$9\\in X^{c}$$

$$10\\in X^{c}$$

$$11\\in X^{c}$$

$$12\\in X^{c}$$

$$X^{c}\\cup Y^{c}=\\{1,2,3,7,8,9,10,11,12\\}$$

The claim lists $\\{1,2,3,10,11,12\\}$, which drops $7,8,9$.

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

First form the union:

$$A=\\{1,2,3,4,5\\}$$

$$B=\\{4,5,6,7,8\\}$$

$$A\\cup B=\\{1,2,3,4,5,6,7,8\\}$$

Complement relative to $U=\\{1,2,\\ldots,10\\}$:

$$9\\notin A\\cup B$$

$$10\\notin A\\cup B$$

$$(A\\cup B)^{c}=\\{9,10\\}$$

The claim lists $\\{8,9,10\\}$. But

$$8\\in B$$

$$8\\in A\\cup B$$

$$8\\notin(A\\cup B)^{c}$$

So the statement is False.`,
      `**B.** → True

De Morgan’s law for complements states

$$(A\\cap B)^{c}=A^{c}\\cup B^{c}$$

Compute both sides. Intersection:

$$A\\cap B=\\{4,5\\}$$

$$(A\\cap B)^{c}=\\{1,2,3,6,7,8,9,10\\}$$

Complements:

$$A^{c}=\\{6,7,8,9,10\\}$$

$$B^{c}=\\{1,2,3,9,10\\}$$

$$A^{c}\\cup B^{c}=\\{1,2,3,6,7,8,9,10\\}$$

The two sides agree.

So the statement is True.`,
      `**C.** → False

Form the complements, then intersect:

$$A^{c}=\\{6,7,8,9,10\\}$$

$$B^{c}=\\{1,2,3,9,10\\}$$

$$6\\in A^{c}$$

$$6\\notin B^{c}$$

$$7\\in A^{c}$$

$$7\\notin B^{c}$$

$$8\\in A^{c}$$

$$8\\notin B^{c}$$

$$9\\in A^{c}$$

$$9\\in B^{c}$$

$$10\\in A^{c}$$

$$10\\in B^{c}$$

$$A^{c}\\cap B^{c}=\\{9,10\\}$$

The claim lists $\\{6,7,8,9,10\\}$, which is $A^{c}$ rather than the intersection.

So the statement is False.`,
      `**D.** → True

Intersection first:

$$A\\cap B=\\{4,5\\}$$

Complement in $U=\\{1,2,\\ldots,10\\}$ removes $4$ and $5$:

$$1\\notin A\\cap B$$

$$2\\notin A\\cap B$$

$$3\\notin A\\cap B$$

$$6\\notin A\\cap B$$

$$7\\notin A\\cap B$$

$$8\\notin A\\cap B$$

$$9\\notin A\\cap B$$

$$10\\notin A\\cap B$$

$$(A\\cap B)^{c}=\\{1,2,3,6,7,8,9,10\\}$$

So the statement is True.`,
      `**E.** → False

Unite the complements:

$$A^{c}=\\{6,7,8,9,10\\}$$

$$B^{c}=\\{1,2,3,9,10\\}$$

$$1\\in B^{c}$$

$$2\\in B^{c}$$

$$3\\in B^{c}$$

$$6\\in A^{c}$$

$$7\\in A^{c}$$

$$8\\in A^{c}$$

$$9\\in A^{c}$$

$$10\\in A^{c}$$

$$A^{c}\\cup B^{c}=\\{1,2,3,6,7,8,9,10\\}$$

The claim lists $\\{1,2,3,9,10\\}$, which drops $6,7,8$.

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

Check the three partition axioms for

$$P=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$$

on $A=\\{1,2,3,4,5,6\\}$. Nonempty blocks:

$$\\{1,2\\}\\neq\\emptyset$$

$$\\{3,4\\}\\neq\\emptyset$$

$$\\{5,6\\}\\neq\\emptyset$$

Pairwise disjoint:

$$\\{1,2\\}\\cap\\{3,4\\}=\\emptyset$$

$$\\{1,2\\}\\cap\\{5,6\\}=\\emptyset$$

$$\\{3,4\\}\\cap\\{5,6\\}=\\emptyset$$

Union covers $A$:

$$\\{1,2\\}\\cup\\{3,4\\}=\\{1,2,3,4\\}$$

$$\\{1,2,3,4\\}\\cup\\{5,6\\}=\\{1,2,3,4,5,6\\}$$

$$\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=A$$

All three axioms hold.

So the statement is True.`,
      `**B.** → False

The claim says every partition must have exactly $n$ blocks when $|A|=n$. But the partition

$$P=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$$

of a $6$-element set has only $3$ blocks. Another valid partition is the single-block collection

$$\\{A\\}$$

which has $1$ block, not $6$. So the number of blocks need not equal $|A|$.

So the statement is False.`,
      `**C.** → False

For

$$Q=\\{\\{1,2,3\\},\\{3,4,5,6\\}\\}$$

check pairwise disjointness:

$$\\{1,2,3\\}\\cap\\{3,4,5,6\\}=\\{3\\}$$

$$\\{3\\}\\neq\\emptyset$$

The blocks share $3$, so $Q$ is not a partition.

So the statement is False.`,
      `**D.** → False

For

$$R=\\{\\{1,2\\},\\{3,4\\},\\{5\\}\\}$$

the union is

$$\\{1,2\\}\\cup\\{3,4\\}=\\{1,2,3,4\\}$$

$$\\{1,2,3,4\\}\\cup\\{5\\}=\\{1,2,3,4,5\\}$$

But

$$A=\\{1,2,3,4,5,6\\}$$

$$6\\notin\\{1,2,3,4,5\\}$$

so the union misses $6$ and $R$ is not a partition.

So the statement is False.`,
      `**E.** → True

For $n\\ge 2$, at least two partitions exist. One is the single block

$$\\{A\\}$$

Another splits off one element:

$$\\{\\{a\\},A\\setminus\\{a\\}\\}$$

for any fixed $a\\in A$. These are distinct because one has $1$ block and the other has $2$. Hence more than one partition exists.

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

The number of subsets equals the power-set size:

$$|A|=5$$

$$|\\mathcal{P}(A)|=2^{|A|}$$

$$|\\mathcal{P}(A)|=2^{5}$$

$$2^{5}=32$$

So the statement is True.`,
      `**B.** → True

Proper subsets are all subsets except $A$ itself:

$$|\\mathcal{P}(A)|=2^{5}$$

$$2^{5}=32$$

$$|\\mathcal{P}(A)|-1=32-1$$

$$32-1=31$$

So the statement is True.`,
      `**C.** → False

Subsets of size $4$ are counted by

$$\\binom{5}{4}=\\frac{5!}{4!\\,1!}$$

$$5!=5\\cdot 4\\cdot 3\\cdot 2\\cdot 1$$

$$5!=120$$

$$4!=24$$

$$1!=1$$

$$\\binom{5}{4}=\\frac{120}{24\\cdot 1}$$

$$\\binom{5}{4}=\\frac{120}{24}$$

$$\\binom{5}{4}=5$$

The claim says $10$, but the count is $5$.

So the statement is False.`,
      `**D.** → True

Nonempty subsets exclude only $\\emptyset$:

$$|\\mathcal{P}(A)|=32$$

$$|\\mathcal{P}(A)|-1=32-1$$

$$32-1=31$$

So the statement is True.`,
      `**E.** → False

Even-sized subsets have size $0$, $2$, or $4$:

$$\\binom{5}{0}=1$$

$$\\binom{5}{2}=\\frac{5\\cdot 4}{2\\cdot 1}$$

$$5\\cdot 4=20$$

$$2\\cdot 1=2$$

$$\\frac{20}{2}=10$$

$$\\binom{5}{2}=10$$

$$\\binom{5}{4}=5$$

Sum:

$$1+10=11$$

$$11+5=16$$

The even-sized count is $16$, not $15$.

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

Write the interval conditions:

$$A=(0,10]\\iff 0<x\\le 10$$

$$B=[5,15)\\iff 5\\le x<15$$

Membership in both requires both inequalities:

$$0<x\\le 10$$

$$5\\le x<15$$

The stricter lower bound is $5$, and the stricter upper bound is $10$:

$$5\\le x\\le 10$$

$$A\\cap B=[5,10]$$

So the statement is True.`,
      `**B.** → False

Union membership requires at least one of

$$0<x\\le 10$$

$$5\\le x<15$$

The leftmost points come from $A$, so $x>0$. The rightmost points come from $B$, so $x<15$. At the right endpoint of $A$:

$$10\\in A$$

$$10<15$$

so $10$ is included. But $15$ itself fails $x<15$, and points with $x=15$ are excluded. Also $A$ never includes $0$. Hence

$$A\\cup B=(0,15)$$

The claim writes $(0,15]$, which incorrectly includes $15$.

So the statement is False.`,
      `**C.** → True

Test $x=10$ against both intervals:

$$0<10\\le 10$$

so $10\\in A$. And

$$5\\le 10<15$$

so $10\\in B$. Therefore

$$10\\in A\\cap B$$

So the statement is True.`,
      `**D.** → False

Difference $A\\setminus B$ needs $x\\in A$ and $x\\notin B$. Test $x=5$:

$$5\\le 5<15$$

so $5\\in B$. Therefore

$$5\\notin A\\setminus B$$

even though $5\\in A$ because $0<5\\le 10$.

So the statement is False.`,
      `**E.** → False

The implication $x\\in A\\Rightarrow x\\in B$ fails if some point of $A$ misses $B$. Take

$$x=1$$

$$0<1\\le 10$$

so $1\\in A$. But

$$5\\le 1<15$$

is false, so $1\\notin B$. The implication does not hold for all $x$.

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

$$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|B\\cap C|-|A\\cap C|+|A\\cap B\\cap C|$$

Plug in the survey counts one term at a time:

$$|A|=80$$

$$|B|=70$$

$$|C|=60$$

$$|A|+|B|=80+70$$

$$80+70=150$$

$$150+|C|=150+60$$

$$150+60=210$$

$$|A\\cap B|=30$$

$$210-30=180$$

$$|B\\cap C|=25$$

$$180-25=155$$

$$|A\\cap C|=20$$

$$155-20=135$$

$$|A\\cap B\\cap C|=10$$

$$135+10=145$$

$$|A\\cup B\\cup C|=145$$

The claim says $155$, which is not the computed value.

So the statement is False.`,
      `**B.** → True

From the previous letter,

$$|A\\cup B\\cup C|=145$$

Tourists outside all three museums:

$$150-|A\\cup B\\cup C|=150-145$$

$$150-145=5$$

So the statement is True.`,
      `**C.** → False

Exactly $A$ and $B$ but not $C$ is the pairwise overlap minus the triple:

$$|A\\cap B\\setminus C|=|A\\cap B|-|A\\cap B\\cap C|$$

$$|A\\cap B|=30$$

$$|A\\cap B\\cap C|=10$$

$$30-10=20$$

The claim says $30$, which forgets to remove the triple overlap.

So the statement is False.`,
      `**D.** → False

Only Museum A excludes visitors who also saw $B$ or $C$. The correct count is

$$|A\\setminus(B\\cup C)|=|A|-|A\\cap B|-|A\\cap C|+|A\\cap B\\cap C|$$

because the triple was subtracted twice in the two pairwise terms:

$$|A|=80$$

$$|A\\cap B|=30$$

$$80-30=50$$

$$|A\\cap C|=20$$

$$50-20=30$$

$$|A\\cap B\\cap C|=10$$

$$30+10=40$$

The claim’s arithmetic $80-30-20=30$ omits the $+$ triple correction, so it is wrong.

So the statement is False.`,
      `**E.** → False

At least two museums means the three “exactly-two” regions plus the triple. Exactly-two counts:

$$|A\\cap B\\setminus C|=30-10$$

$$30-10=20$$

$$|B\\cap C\\setminus A|=25-10$$

$$25-10=15$$

$$|A\\cap C\\setminus B|=20-10$$

$$20-10=10$$

$$|A\\cap B\\cap C|=10$$

Sum:

$$20+15=35$$

$$35+10=45$$

$$45+10=55$$

The claim says $65$, which is too large.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `A survey of $150$ tourists records $\\lvert A \\rvert = 80$, $\\lvert B \\rvert = 70$, $\\lvert C \\rvert = 60$, pairwise totals $\\lvert A \\cap B \\rvert = 30$, $\\lvert B \\cap C \\rvert = 25$, $\\lvert A \\cap C \\rvert = 20$, and $\\lvert A \\cap B \\cap C \\rvert = 10$.

Three-set inclusion-exclusion is

$$80 + 70 + 60 - 30 - 25 - 20 + 10 = 145$$

Pair totals still include the triple, so an exact-pair region subtracts $10$. Only-$A$ subtracts both pair totals from $\\lvert A \\rvert$ and adds the triple back once.`,
  },
  {
    id: `math-1-15`,
    case_id: `MATH 1.15`,
    title: `Infinite sets and cardinality`,
    subsection: `1.1`,
    context: `Let $N = \\{1, 2, 3...\\}$ be the natural numbers and $E = \\{2, 4, 6...\\}$ be the even natural numbers.`,
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

Every even natural is a natural number:

$$E=\\{2,4,6,\\ldots\\}$$

$$N=\\{1,2,3,\\ldots\\}$$

$$E\\subseteq N$$

Properness needs a witness in $N\\setminus E$. Take

$$1\\in N$$

$$1\\notin E$$

so

$$E\\neq N$$

$$E\\subsetneq N$$

So the statement is True.`,
      `**B.** → False

For infinite sets, a proper subset can still be equinumerous with the whole set. The map

$$f:N\\to E,\\qquad f(n)=2n$$

is a bijection:

$$f(1)=2$$

$$f(2)=4$$

$$f(3)=6$$

and every even arises uniquely. Hence

$$|E|=|N|$$

even though $E\\subsetneq N$. The finite-set slogan “proper subset $\\Rightarrow$ strictly smaller” fails here.

So the statement is False.`,
      `**C.** → False

The rule $f(n)=2n$ sends naturals to even naturals:

$$f(1)=2$$

$$f(2)=4$$

$$f(3)=6$$

$$f(N)=\\{2,4,6,\\ldots\\}$$

$$E=\\{2,4,6,\\ldots\\}$$

$$f(N)=E$$

The odd naturals are $\\{1,3,5,\\ldots\\}$, which is not $E$. So $f$ is a bijection $N\\to E$, not a bijection onto the odds.

So the statement is False.`,
      `**D.** → True

We already have

$$E\\subsetneq N$$

and a bijection $n\\mapsto 2n$ showing

$$|E|=|N|$$

That pair of facts is exactly a counterexample to the finite-set intuition that a proper subset must be strictly smaller.

So the statement is True.`,
      `**E.** → False

The even numbers form an infinite subset of $N$:

$$E=\\{2,4,6,\\ldots\\}$$

$$E\\subseteq N$$

$$E\\neq N$$

because $1\\notin E$. So an infinite subset need not equal $N$.

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

Membership asks whether the object sits on the roster.

$$A=\\{2,4,6,8,10,12\\}$$

$$6\\in\\{2,4,6,8,10,12\\}$$

$$6\\in A$$

So the statement is True.`,
      `**B.** → False

The singleton $\\{6\\}$ is a set, not the number $6$:

$$\\{6\\}\\neq 2$$

$$\\{6\\}\\neq 4$$

$$\\{6\\}\\neq 6$$

$$\\{6\\}\\neq 8$$

$$\\{6\\}\\neq 10$$

$$\\{6\\}\\neq 12$$

$$\\{6\\}\\notin A$$

So the statement is False.`,
      `**C.** → True

Subsethood asks whether every member of $\\{6,8\\}$ sits in $A$:

$$6\\in A$$

$$8\\in A$$

$$\\{6,8\\}\\subseteq A$$

So the statement is True.`,
      `**D.** → True

The empty set has no members that could sit outside $A$:

$$\\forall x\\,(x\\in\\emptyset\\Rightarrow x\\in A)$$

$$\\emptyset\\subseteq A$$

So the statement is True.`,
      `**E.** → True

Proper subsets are all subsets except $A$ itself:

$$|A|=6$$

$$|\\mathcal{P}(A)|=2^{|A|}$$

$$|\\mathcal{P}(A)|=2^{6}$$

$$2^{6}=64$$

$$|\\mathcal{P}(A)|-1=64-1$$

$$64-1=63$$

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

Solve the quadratic over the integers:

$$x^{2}-5x+6=0$$

$$(x-2)(x-3)=0$$

$$x-2=0$$

$$x=2$$

or

$$x-3=0$$

$$x=3$$

Both roots are integers, so

$$A=\\{2,3\\}$$

$B$ is given as $\\{2,3\\}$. Compare membership:

$$2\\in B$$

$$3\\in B$$

$$2\\in A$$

$$3\\in A$$

$$A=B$$

So the statement is True.`,
      `**B.** → True

From the factorization,

$$(x-2)(x-3)=0$$

one root is $x=3$. Check directly:

$$3^{2}=9$$

$$5\\cdot 3=15$$

$$9-15=-6$$

$$-6+6=0$$

$$3\\in\\mathbb{Z}$$

$$3\\in A$$

So the statement is True.`,
      `**C.** → False

Both roots belong in $A$:

$$2^{2}-5\\cdot 2+6=4-10+6$$

$$4-10=-6$$

$$-6+6=0$$

$$3^{2}-5\\cdot 3+6=9-15+6$$

$$9-15=-6$$

$$-6+6=0$$

$$A=\\{2,3\\}$$

The claim reprints $A$ as $\\{2\\}$ only:

$$A\\neq\\{2\\}$$

So the statement is False.`,
      `**D.** → True

The two distinct integer roots give

$$A=\\{2,3\\}$$

$$2\\neq 3$$

$$|A|=2$$

So the statement is True.`,
      `**E.** → True

Restrict to natural numbers with $x>2$:

$$x^{2}-5x+6=0$$

still yields candidates $2$ and $3$. The extra filter $x>2$ drops $2$:

$$2>2$$

is false, while

$$3>2$$

holds and $3\\in\\mathbb{N}$. Hence

$$C=\\{3\\}$$

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

Power-set size for a four-element ground set:

$$|D|=4$$

$$|\\mathcal{P}(D)|=2^{|D|}$$

$$|\\mathcal{P}(D)|=2^{4}$$

$$2^{4}=16$$

So the statement is True.`,
      `**B.** → True

$\\{w,x\\}$ is a subset of $D=\\{w,x,y,z\\}$:

$$w\\in D$$

$$x\\in D$$

$$\\{w,x\\}\\subseteq D$$

Every subset is an element of the power set:

$$\\{w,x\\}\\in\\mathcal{P}(D)$$

So the statement is True.`,
      `**C.** → True

Three-element subsets are counted by

$$\\binom{4}{3}=\\frac{4!}{3!\\,1!}$$

$$4!=4\\cdot 3\\cdot 2\\cdot 1$$

$$4!=24$$

$$3!=6$$

$$1!=1$$

$$\\binom{4}{3}=\\frac{24}{6\\cdot 1}$$

$$\\binom{4}{3}=\\frac{24}{6}$$

$$\\binom{4}{3}=4$$

So the statement is True.`,
      `**D.** → True

Every set is a subset of itself:

$$D\\subseteq D$$

Therefore

$$D\\in\\mathcal{P}(D)$$

So the statement is True.`,
      `**E.** → False

Two-element subsets are counted by

$$\\binom{4}{2}=\\frac{4\\cdot 3}{2\\cdot 1}$$

$$4\\cdot 3=12$$

$$2\\cdot 1=2$$

$$\\frac{12}{2}=6$$

$$\\binom{4}{2}=6$$

The claim says $5$, which is not the count.

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

Check each member of $E$ against $F$:

$$E=\\{1,2,3\\}$$

$$F=\\{1,2,3,4\\}$$

$$1\\in F$$

$$2\\in F$$

$$3\\in F$$

$$E\\subseteq F$$

So the statement is True.`,
      `**B.** → True

Ordinary inclusion holds from the previous letter:

$$E\\subseteq F$$

A witness for properness is

$$4\\in F$$

$$4\\notin E$$

$$E\\neq F$$

$$E\\subsetneq F$$

So the statement is True.`,
      `**C.** → False

Inclusion $F\\subseteq E$ would require every member of $F$ to sit in $E$. But

$$4\\in F$$

$$4\\notin E$$

$$F\\not\\subseteq E$$

So the statement is False.`,
      `**D.** → True

Every set is a subset of itself:

$$\\forall x\\,(x\\in E\\Rightarrow x\\in E)$$

$$E\\subseteq E$$

So the statement is True.`,
      `**E.** → False

Proper inclusion also needs inequality:

$$E\\subseteq E$$

$$E=E$$

$$E\\neq E$$

is false. Therefore

$$E\\not\\subsetneq E$$

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

The blocks are $\\{1,2\\}$, $\\{3,4\\}$, and $\\{5,6\\}$. Pairwise intersections:

$$\\{1,2\\}\\cap\\{3,4\\}=\\emptyset$$

$$\\{1,2\\}\\cap\\{5,6\\}=\\emptyset$$

$$\\{3,4\\}\\cap\\{5,6\\}=\\emptyset$$

All three are empty, so the blocks are pairwise disjoint.

So the statement is True.`,
      `**B.** → True

Unite the blocks step by step:

$$\\{1,2\\}\\cup\\{3,4\\}=\\{1,2,3,4\\}$$

$$\\{1,2,3,4\\}\\cup\\{5,6\\}=\\{1,2,3,4,5,6\\}$$

$$G=\\{1,2,3,4,5,6\\}$$

$$\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=G$$

So the statement is True.`,
      `**C.** → True

A partition needs nonempty pairwise-disjoint blocks whose union is the ground set. Check each axiom for $\\mathcal{S}=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$:

$$\\{1,2\\}\\neq\\emptyset$$

$$\\{3,4\\}\\neq\\emptyset$$

$$\\{5,6\\}\\neq\\emptyset$$

$$\\{1,2\\}\\cap\\{3,4\\}=\\emptyset$$

$$\\{1,2\\}\\cap\\{5,6\\}=\\emptyset$$

$$\\{3,4\\}\\cap\\{5,6\\}=\\emptyset$$

$$\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=G$$

All three axioms hold, so $\\mathcal{S}$ is a partition of $G$.

So the statement is True.`,
      `**D.** → False

For $\\mathcal{S}'=\\{\\{1,2\\},\\{2,3,4\\},\\{5,6\\}\\}$ check the first two blocks:

$$\\{1,2\\}\\cap\\{2,3,4\\}=\\{2\\}$$

$$\\{2\\}\\neq\\emptyset$$

The blocks are not pairwise disjoint, so $\\mathcal{S}'$ is not a partition.

So the statement is False.`,
      `**E.** → False

Replacing $\\{5,6\\}$ by $\\{5,6,7\\}$ produces a block containing $7$. But

$$G=\\{1,2,3,4,5,6\\}$$

$$7\\notin G$$

A partition of $G$ cannot contain an element outside $G$. The modified collection is not a partition of $G$.

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

Every positive even integer is a natural number:

$$H=\\{2,4,6,8,\\ldots\\}$$

$$H\\subseteq\\mathbb{N}$$

So the statement is True.`,
      `**B.** → False

$H$ has no largest element and continues indefinitely:

$$2\\in H$$

$$4\\in H$$

$$6\\in H$$

and so on. An infinite listing cannot be a finite set, so $H$ is infinite.

So the statement is False.`,
      `**C.** → False

Equality of sets needs matching membership. Take

$$1\\in\\mathbb{N}$$

$$1\\notin H$$

$$H\\neq\\mathbb{N}$$

So the statement is False.`,
      `**D.** → True

Define $f:\\mathbb{N}\\to H$ by $f(n)=2n$. Check the first few values:

$$f(1)=2$$

$$f(2)=4$$

$$f(3)=6$$

Every even arises uniquely as $2n$ for $n\\in\\mathbb{N}$, so $f$ is a bijection.

So the statement is True.`,
      `**E.** → False

Although

$$H\\subsetneq\\mathbb{N}$$

the bijection $f(n)=2n$ shows each natural pairs with a unique even:

$$f(1)=2$$

$$f(2)=4$$

$$f(3)=6$$

$$|H|=|\\mathbb{N}|$$

A proper subset of an infinite set need not be strictly smaller.

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

Read the roster of $K$:

$$K=\\{a,\\{a\\}\\}$$

The first listed object is $a$ itself:

$$a\\in K$$

So the statement is True.`,
      `**B.** → True

Read the second listed object on the roster:

$$K=\\{a,\\{a\\}\\}$$

$$\\{a\\}\\in K$$

So the statement is True.`,
      `**C.** → True

Subsethood of $\\{a\\}$ needs its only member to sit in $K$:

$$K=\\{a,\\{a\\}\\}$$

$$a\\in K$$

$$\\{a\\}\\subseteq K$$

So the statement is True.`,
      `**D.** → True

The set $\\{\\{a\\}\\}$ has the single member $\\{a\\}$. From letter B,

$$\\{a\\}\\in K$$

so

$$\\{\\{a\\}\\}\\subseteq K$$

So the statement is True.`,
      `**E.** → True

The two listed objects are distinct:

$$a\\neq\\{a\\}$$

(one is an object, the other is a set containing that object). Therefore

$$|K|=2$$

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
    context: `Let $U = \\{1, 2..., 10\\}$ be the universal set, $A = \\{1, 2, 3, 4, 5\\}$, and $B = \\{4, 5, 6, 7, 8\\}$.`,
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

First form the union:

$$A=\\{1,2,3,4,5\\}$$

$$B=\\{4,5,6,7,8\\}$$

$$A\\cup B=\\{1,2,3,4,5,6,7,8\\}$$

Complement in $U=\\{1,2,\\ldots,10\\}$:

$$9\\notin A\\cup B$$

$$10\\notin A\\cup B$$

$$(A\\cup B)^{c}=\\{9,10\\}$$

So the statement is True.`,
      `**B.** → True

De Morgan: complement of a union is the intersection of complements. Compute both sides.

$$(A\\cup B)^{c}=\\{9,10\\}$$

$$A^{c}=\\{6,7,8,9,10\\}$$

$$B^{c}=\\{1,2,3,9,10\\}$$

$$A^{c}\\cap B^{c}=\\{9,10\\}$$

The two sides match.

So the statement is True.`,
      `**C.** → True

De Morgan for intersections:

$$A\\cap B=\\{4,5\\}$$

$$(A\\cap B)^{c}=\\{1,2,3,6,7,8,9,10\\}$$

$$A^{c}=\\{6,7,8,9,10\\}$$

$$B^{c}=\\{1,2,3,9,10\\}$$

$$A^{c}\\cup B^{c}=\\{1,2,3,6,7,8,9,10\\}$$

The two sides match.

So the statement is True.`,
      `**D.** → False

Intersection keeps shared members:

$$4\\in A$$

$$4\\in B$$

$$5\\in A$$

$$5\\in B$$

$$6\\in B$$

$$6\\notin A$$

$$A\\cap B=\\{4,5\\}$$

The claim lists $\\{4,5,6\\}$, which incorrectly keeps $6$.

So the statement is False.`,
      `**E.** → False

From letter C,

$$(A\\cap B)^{c}=\\{1,2,3,6,7,8,9,10\\}$$

The claim lists $\\{1,2,3,4,5,9,10\\}$. Compare:

$$4\\in A\\cap B$$

$$4\\notin(A\\cap B)^{c}$$

yet $4$ appears in the claim, so the claim is wrong.

So the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `**Part 1: The sets.**

Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$.

**Part 2: The operations.**

Complement $X^c$ is $U\\setminus X$. Union keeps members of at least one set; intersection keeps members of both. The shared pieces are

$$A\\cap B=\\{4,5\\},\\qquad A^c=\\{6,7,8,9,10\\},\\qquad B^c=\\{1,2,3,9,10\\}.$$

De Morgan's laws swap union with intersection under complements:

`,
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

Cartesian-product size multiplies the factor sizes:

$$|A|=2$$

$$|B|=3$$

$$|A\\times B|=|A|\\cdot|B|$$

$$|A|\\cdot|B|=2\\cdot 3$$

$$2\\cdot 3=6$$

$$|A\\times B|=6$$

So the statement is True.`,
      `**B.** → True

An ordered pair $(a,b)$ sits in $A\\times B$ when $a\\in A$ and $b\\in B$:

$$2\\in A$$

$$x\\in B$$

$$(2,x)\\in A\\times B$$

So the statement is True.`,
      `**C.** → False

For $(x,2)$ the first coordinate would need to sit in $A$:

$$x\\notin A$$

because $A=\\{1,2\\}$. Already

$$(x,2)\\notin A\\times B$$

So the statement is False.`,
      `**D.** → False

Compare a sample pair from each product:

$$(1,x)\\in A\\times B$$

The first coordinate of $(1,x)$ is $1\\notin B=\\{x,y,z\\}$, so

$$(1,x)\\notin B\\times A$$

Hence

$$A\\times B\\neq B\\times A$$

So the statement is False.`,
      `**E.** → True

Cardinality of the reversed product:

$$|B|=3$$

$$|A|=2$$

$$|B\\times A|=|B|\\cdot|A|$$

$$3\\cdot 2=6$$

$$|B\\times A|=6$$

From letter A,

$$|A\\times B|=6$$

so the two products have equal size.

So the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `**Part 1: The sets.**

Let $A=\\{1,2\\}$ and $B=\\{x,y,z\\}$. Every claim here is about ordered pairs formed from those two sets.

**Part 2: The operations.**

An ordered pair $(a,b)$ lands in $A\\times B$ only when the first slot is from $A$ and the second from $B$. Size is the product rule

$$2\\cdot 3$$

$$=6.$$

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

Write the defining inequalities:

$$A=\\{x\\in\\mathbb{R}:1<x<5\\}$$

$$B=\\{x\\in\\mathbb{R}:x\\ge 3\\}$$

Take a point of $A$ below $3$:

$$x=2$$

$$1<2<5$$

so $2\\in A$. But

$$2\\ge 3$$

is false, so $2\\notin B$. Therefore

$$A\\not\\subseteq B$$

So the statement is False.`,
      `**B.** → True

Membership in both requires

$$1<x<5$$

$$x\\ge 3$$

The stricter lower bound is $3$, and the upper bound stays strict at $5$:

$$3\\le x<5$$

$$A\\cap B=[3,5)$$

So the statement is True.`,
      `**C.** → False

Inclusion $B\\subseteq A$ fails for large $x$. Take

$$x=6$$

$$6\\ge 3$$

so $6\\in B$. But

$$1<6<5$$

is false, so $6\\notin A$. Hence

$$B\\not\\subseteq A$$

So the statement is False.`,
      `**D.** → True

Union membership needs at least one of

$$1<x<5$$

$$x\\ge 3$$

If $x\\le 1$, both fail. If $1<x<3$, the first holds. If $x\\ge 3$, the second holds. Hence every $x>1$ is covered:

$$A\\cup B=(1,\\infty)$$

So the statement is True.`,
      `**E.** → True

From letter A, the witness

$$x=2$$

satisfies

$$1<2<5$$

$$2\\in A$$

$$2\\notin B$$

so such a real exists.

So the statement is True.`,
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

Compute each difference, then unite:

$$A=\\{1,2,3,4\\}$$

$$B=\\{3,4,5,6\\}$$

$$1\\in A$$

$$1\\notin B$$

$$2\\in A$$

$$2\\notin B$$

$$3\\in A$$

$$3\\in B$$

$$4\\in A$$

$$4\\in B$$

$$A\\setminus B=\\{1,2\\}$$

$$5\\in B$$

$$5\\notin A$$

$$6\\in B$$

$$6\\notin A$$

$$B\\setminus A=\\{5,6\\}$$

$$A\\triangle B=\\{1,2,5,6\\}$$

So the statement is True.`,
      `**B.** → False

Symmetric difference is defined with a union of differences, not an intersection:

$$A\\triangle B=(A\\setminus B)\\cup(B\\setminus A)$$

Intersecting the differences would give

$$(A\\setminus B)\\cap(B\\setminus A)=\\emptyset$$

always, which is not the symmetric difference. The claimed rewrite is false.

So the statement is False.`,
      `**C.** → False

The intersection and the symmetric difference are disjoint by construction. Here

$$A\\cap B=\\{3,4\\}$$

$$A\\triangle B=\\{1,2,5,6\\}$$

$$3\\notin A\\triangle B$$

so

$$A\\cap B\\not\\subseteq A\\triangle B$$

So the statement is False.`,
      `**D.** → True

If $A\\cap B=\\emptyset$, then

$$A\\setminus B=A$$

$$B\\setminus A=B$$

$$A\\triangle B=A\\cup B$$

So the statement is True.`,
      `**E.** → True

Count with the formula. First the ingredients:

$$|A|=4$$

$$|B|=4$$

$$|A\\cap B|=2$$

$$2\\cdot|A\\cap B|=2\\cdot 2$$

$$2\\cdot 2=4$$

$$|A|+|B|=4+4$$

$$4+4=8$$

$$|A\\triangle B|=8-4$$

$$8-4=4$$

Alternatively from the roster $\\{1,2,5,6\\}$:

$$|A\\triangle B|=4$$

The identity holds.

So the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `**Part 1: The sets.**

Symmetric difference keeps what sits in exactly one of the two sets:

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

Coverage assignments are ordered pairs from a $5$-element set times an $8$-element set:

$$|\\mathrm{Reps}|=5$$

$$|\\mathrm{Accounts}|=8$$

$$|\\mathrm{Reps}\\times\\mathrm{Accounts}|=|\\mathrm{Reps}|\\cdot|\\mathrm{Accounts}|$$

$$5\\cdot 8=40$$

So the statement is True.`,
      `**B.** → False

Ordered pairs care about order. The two pairs

$$(\\mathrm{Maria},\\mathrm{Account\\ 3})$$

$$(\\mathrm{Account\\ 3},\\mathrm{Maria})$$

have swapped coordinates, so they are different ordered pairs (and only the first has the correct types for $\\mathrm{Reps}\\times\\mathrm{Accounts}$).

So the statement is False.`,
      `**C.** → True

If there are $0$ accounts, write

$$|\\mathrm{Accounts}|=0$$

$$|\\mathrm{Reps}\\times\\mathrm{Accounts}|=|\\mathrm{Reps}|\\cdot 0$$

$$|\\mathrm{Reps}|\\cdot 0=0$$

for any finite number of reps. No ordered pairs exist.

So the statement is True.`,
      `**D.** → False

Membership $(a,b)\\in X\\times Y$ means $a\\in X$ and $b\\in Y$. For

$$(\\mathrm{Maria},\\mathrm{Account\\ 3})\\in\\mathrm{Reps}\\times\\mathrm{Accounts}$$

we need

$$\\mathrm{Maria}\\in\\mathrm{Reps}$$

$$\\mathrm{Account\\ 3}\\in\\mathrm{Accounts}$$

The claim swaps the two memberships, so it is false.

So the statement is False.`,
      `**E.** → True

With $6$ reps and $8$ accounts:

$$6\\cdot 8=48$$

$$|\\mathrm{Reps}\\times\\mathrm{Accounts}|=48$$

So the statement is True.`,
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

Rewrite $A$ from the quadratic inequality:

$$T^{2}<16$$

$$|T|<4$$

$$-4<T<4$$

$$A=(-4,4)$$

And

$$B=[-1,\\infty)$$

Intersection requires both:

$$-4<T<4$$

$$T\\ge -1$$

The stricter lower bound is $-1$, and the upper bound stays strict:

$$-1\\le T<4$$

$$A\\cap B=[-1,4)$$

So the statement is True.`,
      `**B.** → False

Test $T=4$ against $A$:

$$4^{2}=16$$

$$16<16$$

is false, so $4\\notin A$. Already

$$4\\notin A\\cap B$$

So the statement is False.`,
      `**C.** → False

The complement of the open interval $A=(-4,4)$ includes the endpoints:

$$A^{c}=(-\\infty,-4]\\cup[4,\\infty)$$

The claim writes $T<-4$ or $T>4$, which is

$$(-\\infty,-4)\\cup(4,\\infty)$$

That drops $T=-4$ and $T=4$, so the claim is false.

So the statement is False.`,
      `**D.** → False

Union of $A=(-4,4)$ and $B=[-1,\\infty)$:

$$A\\cup B=(-4,\\infty)$$

A witness outside the union is

$$T=-5$$

$$-5\\notin A$$

$$-5\\notin B$$

$$A\\cup B\\neq\\mathbb{R}$$

So the statement is False.`,
      `**E.** → True

Frost-safe but not irrigating means $T\\in A\\setminus B$:

$$A\\setminus B=(-4,-1)$$

Pick

$$T=-2$$

$$-4<-2<4$$

so $-2\\in A$. And

$$-2\\ge -1$$

is false, so $-2\\notin B$. Such a temperature exists.

So the statement is True.`,
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

Inclusion-exclusion for two sets:

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

$$|A|=120$$

$$|B|=90$$

$$|A|+|B|=120+90$$

$$120+90=210$$

$$|A\\cap B|=50$$

$$210-50=160$$

$$|A\\cup B|=160$$

The claim says $170$, which is not the computed value.

So the statement is False.`,
      `**B.** → True

Customers liking neither product:

$$|U|-|A\\cup B|=200-160$$

$$200-160=40$$

So the statement is True.`,
      `**C.** → False

Only Product A is $A$ minus the overlap:

$$|A\\setminus B|=|A|-|A\\cap B|$$

$$120-50=70$$

$$|A\\setminus B|=70$$

The claim says $90$, which is wrong.

So the statement is False.`,
      `**D.** → True

Every element of an intersection sits in each factor:

$$A\\cap B\\subseteq A$$

by the definition of intersection.

So the statement is True.`,
      `**E.** → False

The excess

$$|A|+|B|-|U|=120+90-200$$

$$210-200=10$$

is only a lower bound on $|A\\cap B|$: inclusion-exclusion forces

$$|A\\cap B|\\ge 10$$

but larger overlaps (such as the given $50$) are also possible. The arithmetic does not prove that the overlap is exactly $10$.

So the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `**Part 1: The sets.**

Among $200$ customers, $\\lvert A\\rvert=120$ like Product A, $\\lvert B\\rvert=90$ like Product B, and $\\lvert A\\cap B\\rvert=50$ like both.

**Part 2: The operations.**

The $50$ dual-likers sit inside each headline, so inclusion-exclusion subtracts the overlap once:

$$120+90-50$$

$$=160.$$

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

Unite $A$ and $B$:

$$A=\\{1,2,3,4\\}$$

$$B=\\{3,4,5,6\\}$$

$$1\\in A\\cup B$$

$$2\\in A\\cup B$$

$$3\\in A\\cup B$$

$$4\\in A\\cup B$$

$$5\\in A\\cup B$$

$$6\\in A\\cup B$$

$$A\\cup B=\\{1,2,3,4,5,6\\}$$

So the statement is True.`,
      `**B.** → True

Shared members:

$$3\\in A$$

$$3\\in B$$

$$4\\in A$$

$$4\\in B$$

$$1\\in A$$

$$1\\notin B$$

$$2\\in A$$

$$2\\notin B$$

$$A\\cap B=\\{3,4\\}$$

So the statement is True.`,
      `**C.** → True

Difference keeps members of $A$ that miss $B$:

$$1\\in A$$

$$1\\notin B$$

$$2\\in A$$

$$2\\notin B$$

$$3\\in A$$

$$3\\in B$$

$$4\\in A$$

$$4\\in B$$

$$A\\setminus B=\\{1,2\\}$$

So the statement is True.`,
      `**D.** → False

Compute the opposite difference:

$$5\\in B$$

$$5\\notin A$$

$$6\\in B$$

$$6\\notin A$$

$$B\\setminus A=\\{5,6\\}$$

From letter C,

$$A\\setminus B=\\{1,2\\}$$

$$\\{5,6\\}\\neq\\{1,2\\}$$

so the two differences are unequal.

So the statement is False.`,
      `**E.** → True

Disjointness needs empty intersection:

$$A=\\{1,2,3,4\\}$$

$$C=\\{7,8,9\\}$$

$$1\\notin C$$

$$2\\notin C$$

$$3\\notin C$$

$$4\\notin C$$

$$A\\cap C=\\emptyset$$

So the statement is True.`,
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

Unite the two rosters.

$$A={10,20,30,40,50}$$

$$B={30,40,50,60}$$

$$10\\in A\\cup B$$

$$20\\in A\\cup B$$

$$30\\in A\\cup B$$

$$40\\in A\\cup B$$

$$50\\in A\\cup B$$

$$60\\in A\\cup B$$

$$A\\cup B={10,20,30,40,50,60}$$

So the statement is True.`,
      `**B.** → True

Test membership in both sets.

$$A={10,20,30,40,50}$$

$$B={30,40,50,60}$$

$$10\\in A$$

$$10\\notin B$$

$$20\\in A$$

$$20\\notin B$$

$$30\\in A$$

$$30\\in B$$

$$40\\in A$$

$$40\\in B$$

$$50\\in A$$

$$50\\in B$$

$$A\\cap B={30,40,50}$$

So the statement is True.`,
      `**C.** → True

Difference keeps members of $A$ that miss $B$.

$$A={10,20,30,40,50}$$

$$B={30,40,50,60}$$

$$10\\in A$$

$$10\\notin B$$

$$20\\in A$$

$$20\\notin B$$

$$30\\in A$$

$$30\\in B$$

$$40\\in A$$

$$40\\in B$$

$$50\\in A$$

$$50\\in B$$

$$A\\setminus B={10,20}$$

So the statement is True.`,
      `**D.** → False

Difference keeps members of $B$ that miss $A$.

$$B={30,40,50,60}$$

$$A={10,20,30,40,50}$$

$$30\\in B$$

$$30\\in A$$

$$40\\in B$$

$$40\\in A$$

$$50\\in B$$

$$50\\in A$$

$$60\\in B$$

$$60\\notin A$$

$$B\\setminus A={60}$$

From the previous letter,

$$A\\setminus B=\\{10,20\\}$$

$$\\{60\\}\\neq\\{10,20\\}$$

So the statement is False.`,
      `**E.** → True

Test membership in both sets.

$$A={10,20,30,40,50}$$

$$C={1,2,3}$$

$$10\\in A$$

$$10\\notin C$$

$$20\\in A$$

$$20\\notin C$$

$$30\\in A$$

$$30\\notin C$$

$$40\\in A$$

$$40\\notin C$$

$$50\\in A$$

$$50\\notin C$$

$$A\\cap C=\\emptyset$$

The intersection is empty, so $A$ and $C$ are disjoint.

So the statement is True.`,
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

Unite the two rosters.

$$A={a,b,c,d}$$

$$B={c,d,e}$$

$$a\\in A\\cup B$$

$$b\\in A\\cup B$$

$$c\\in A\\cup B$$

$$d\\in A\\cup B$$

$$e\\in A\\cup B$$

$$A\\cup B={a,b,c,d,e}$$

So the statement is True.`,
      `**B.** → True

Test membership in both sets.

$$A={a,b,c,d}$$

$$B={c,d,e}$$

$$a\\in A$$

$$a\\notin B$$

$$b\\in A$$

$$b\\notin B$$

$$c\\in A$$

$$c\\in B$$

$$d\\in A$$

$$d\\in B$$

$$A\\cap B={c,d}$$

So the statement is True.`,
      `**C.** → True

Difference keeps members of $A$ that miss $B$.

$$A={a,b,c,d}$$

$$B={c,d,e}$$

$$a\\in A$$

$$a\\notin B$$

$$b\\in A$$

$$b\\notin B$$

$$c\\in A$$

$$c\\in B$$

$$d\\in A$$

$$d\\in B$$

$$A\\setminus B={a,b}$$

So the statement is True.`,
      `**D.** → False

Difference keeps members of $B$ that miss $A$.

$$B={c,d,e}$$

$$A={a,b,c,d}$$

$$c\\in B$$

$$c\\in A$$

$$d\\in B$$

$$d\\in A$$

$$e\\in B$$

$$e\\notin A$$

$$B\\setminus A={e}$$

From the previous letter,

$$A\\setminus B=\\{a,b\\}$$

$$\\{e\\}\\neq\\{a,b\\}$$

So the statement is False.`,
      `**E.** → True

Test membership in both sets.

$$A={a,b,c,d}$$

$$C={x,y}$$

$$a\\in A$$

$$a\\notin C$$

$$b\\in A$$

$$b\\notin C$$

$$c\\in A$$

$$c\\notin C$$

$$d\\in A$$

$$d\\notin C$$

$$A\\cap C=\\emptyset$$

The intersection is empty, so $A$ and $C$ are disjoint.

So the statement is True.`,
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

First form the union:

$$A=\\{1,2,3,4,5\\}$$

$$B=\\{4,5,6,7,8\\}$$

$$A\\cup B=\\{1,2,3,4,5,6,7,8\\}$$

Complement in $U=\\{1,2,\\ldots,10\\}$:

$$9\\notin A\\cup B$$

$$10\\notin A\\cup B$$

$$(A\\cup B)^{c}=\\{9,10\\}$$

So the statement is True.`,
      `**B.** → True

De Morgan for unions. Left side from letter A:

$$(A\\cup B)^{c}=\\{9,10\\}$$

Complements:

$$A^{c}=\\{6,7,8,9,10\\}$$

$$B^{c}=\\{1,2,3,9,10\\}$$

$$A^{c}\\cap B^{c}=\\{9,10\\}$$

The two sides match.

So the statement is True.`,
      `**C.** → True

Intersection first:

$$A\\cap B=\\{4,5\\}$$

$$(A\\cap B)^{c}=\\{1,2,3,6,7,8,9,10\\}$$

$$A^{c}=\\{6,7,8,9,10\\}$$

$$B^{c}=\\{1,2,3,9,10\\}$$

$$A^{c}\\cup B^{c}=\\{1,2,3,6,7,8,9,10\\}$$

The two sides match.

So the statement is True.`,
      `**D.** → True

Complement of $A$ in $U=\\{1,2,\\ldots,10\\}$:

$$A=\\{1,2,3,4,5\\}$$

$$6\\notin A$$

$$7\\notin A$$

$$8\\notin A$$

$$9\\notin A$$

$$10\\notin A$$

$$A^{c}=\\{6,7,8,9,10\\}$$

So the statement is True.`,
      `**E.** → True

Intersection:

$$A\\cap B=\\{4,5\\}$$

Complement in $U=\\{1,2,\\ldots,10\\}$ removes $4$ and $5$:

$$(A\\cap B)^{c}=\\{1,2,3,6,7,8,9,10\\}$$

which matches the claim.

So the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `**Part 1: The sets.**

Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$. A complement $X^c$ is everything in $U$ that $X$ leaves out.

**Part 2: The operations.**

De Morgan's laws say taking complements swaps union and intersection:

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

$A$ is the odds and $B$ the evens in $U=\\{1,2,\\ldots,12\\}$:

$$A\\cup B=\\{1,2,3,4,5,6,7,8,9,10,11,12\\}$$

$$A\\cup B=U$$

$$(A\\cup B)^{c}=\\emptyset$$

So the statement is True.`,
      `**B.** → True

De Morgan for unions. Left side:

$$(A\\cup B)^{c}=\\emptyset$$

Complements:

$$A^{c}=B=\\{2,4,6,8,10,12\\}$$

$$B^{c}=A=\\{1,3,5,7,9,11\\}$$

$$A^{c}\\cap B^{c}=\\emptyset$$

The two sides match.

So the statement is True.`,
      `**C.** → True

Odds and evens are disjoint:

$$A\\cap B=\\emptyset$$

$$(A\\cap B)^{c}=U$$

$$A^{c}=\\{2,4,6,8,10,12\\}$$

$$B^{c}=\\{1,3,5,7,9,11\\}$$

$$A^{c}\\cup B^{c}=U$$

The two sides match.

So the statement is True.`,
      `**D.** → True

Complement of the odds is the evens:

$$A=\\{1,3,5,7,9,11\\}$$

$$A^{c}=\\{2,4,6,8,10,12\\}$$

So the statement is True.`,
      `**E.** → True

From letter C,

$$A\\cap B=\\emptyset$$

$$(A\\cap B)^{c}=U=\\{1,2,3,4,5,6,7,8,9,10,11,12\\}$$

So the statement is True.`,
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

Union first:

$$A=\\{p,q,r\\}$$

$$B=\\{r,s\\}$$

$$A\\cup B=\\{p,q,r,s\\}$$

Complement in $U=\\{p,q,r,s,t,u\\}$:

$$t\\notin A\\cup B$$

$$u\\notin A\\cup B$$

$$(A\\cup B)^{c}=\\{t,u\\}$$

So the statement is True.`,
      `**B.** → True

Left side from letter A:

$$(A\\cup B)^{c}=\\{t,u\\}$$

$$A^{c}=\\{s,t,u\\}$$

$$B^{c}=\\{p,q,t,u\\}$$

$$A^{c}\\cap B^{c}=\\{t,u\\}$$

The two sides match.

So the statement is True.`,
      `**C.** → True

Intersection:

$$A\\cap B=\\{r\\}$$

$$(A\\cap B)^{c}=\\{p,q,s,t,u\\}$$

$$A^{c}=\\{s,t,u\\}$$

$$B^{c}=\\{p,q,t,u\\}$$

$$A^{c}\\cup B^{c}=\\{p,q,s,t,u\\}$$

The two sides match.

So the statement is True.`,
      `**D.** → True

Complement of $A=\\{p,q,r\\}$ in $U$:

$$s\\notin A$$

$$t\\notin A$$

$$u\\notin A$$

$$A^{c}=\\{s,t,u\\}$$

So the statement is True.`,
      `**E.** → True

Intersection:

$$A\\cap B=\\{r\\}$$

Complement in $U=\\{p,q,r,s,t,u\\}$ removes $r$:

$$(A\\cap B)^{c}=\\{p,q,s,t,u\\}$$

which matches the claim.

So the statement is True.`,
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

Cartesian-product size:

$$|A|=2$$

$$|B|=3$$

$$|A\\times B|=|A|\\cdot|B|$$

$$2\\cdot 3=6$$

$$|A\\times B|=6$$

So the statement is True.`,
      `**B.** → True

Check coordinates:

$$1\\in A$$

$$x\\in B$$

$$(1,x)\\in A\\times B$$

So the statement is True.`,
      `**C.** → False

First coordinate must sit in $A$:

$$x\\notin A$$

$$(x,1)\\notin A\\times B$$

So the statement is False.`,
      `**D.** → False

Sample pair:

$$(1,x)\\in A\\times B$$

$$1\\notin B$$

$$(1,x)\\notin B\\times A$$

$$A\\times B\\neq B\\times A$$

So the statement is False.`,
      `**E.** → True

Reversed product size:

$$|B|=3$$

$$|A|=2$$

$$3\\cdot 2=6$$

$$|B\\times A|=6$$

$$|A\\times B|=6$$

so the sizes agree.

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `**Part 1: The sets.**

The task gives $A=\\{1,2\\}$ and $B=\\{x,y,z\\}$. Every claim here is about the ordered pairs formed from those two sets.

**Part 2: The operations.**

An ordered pair records which object plays which role. The Cartesian product $A\\times B$ is the set of all pairs whose first entry comes from $A$ and whose second comes from $B$. Size is the product rule

$$2\\cdot 3$$

$$=6.$$

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

Cartesian-product size:

$$|A|=3$$

$$|B|=2$$

$$|A\\times B|=|A|\\cdot|B|$$

$$3\\cdot 2=6$$

$$|A\\times B|=6$$

So the statement is True.`,
      `**B.** → True

Check coordinates:

$$m\\in A$$

$$1\\in B$$

$$(m,1)\\in A\\times B$$

So the statement is True.`,
      `**C.** → False

First coordinate must sit in $A=\\{m,n,p\\}$:

$$1\\notin A$$

$$(1,m)\\notin A\\times B$$

So the statement is False.`,
      `**D.** → False

Sample pair:

$$(m,1)\\in A\\times B$$

$$m\\notin B$$

$$(m,1)\\notin B\\times A$$

$$A\\times B\\neq B\\times A$$

So the statement is False.`,
      `**E.** → True

Reversed product size:

$$|B|=2$$

$$|A|=3$$

$$2\\cdot 3=6$$

$$|B\\times A|=6$$

$$|A\\times B|=6$$

So the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 15,
    solution_overview: `**Part 1: The sets.**

Pair every letter of $A=\\{m,n,p\\}$ with every number of $B=\\{1,2\\}$, always keeping the letter first.

**Part 2: The operations.**

The product rule is $\\lvert A\\times B\\rvert=\\lvert A\\rvert\\cdot\\lvert B\\rvert$. A pair belongs to $A\\times B$ only when its first entry comes from $A$ and its second from $B$. Writing the product the other way round gives $B\\times A$: the same count, a different set.

$$\\lvert A\\times B\\rvert=3\\cdot 2$$

$$=6.$$`,
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

Difference keeps members of $A$ that miss $B$.

$$A={1,3,5,7,9}$$

$$B={3,5,7,11,13}$$

$$1\\in A$$

$$1\\notin B$$

$$3\\in A$$

$$3\\in B$$

$$5\\in A$$

$$5\\in B$$

$$7\\in A$$

$$7\\in B$$

$$9\\in A$$

$$9\\notin B$$

$$A\\setminus B={1,9}$$

So the statement is True.`,
      `**B.** → True

Difference keeps members of $B$ that miss $A$.

$$B={3,5,7,11,13}$$

$$A={1,3,5,7,9}$$

$$3\\in B$$

$$3\\in A$$

$$5\\in B$$

$$5\\in A$$

$$7\\in B$$

$$7\\in A$$

$$11\\in B$$

$$11\\notin A$$

$$13\\in B$$

$$13\\notin A$$

$$B\\setminus A={11,13}$$

So the statement is True.`,
      `**C.** → True

Symmetric difference unites the two differences:

$$A\\setminus B=\\{1,9\\}$$

$$B\\setminus A=\\{11,13\\}$$

$$A\\triangle B=\\{1,9,11,13\\}$$

So the statement is True.`,
      `**D.** → True

Intersect the differences:

$$A\\setminus B=\\{1,9\\}$$

$$B\\setminus A=\\{11,13\\}$$

$$1\\notin\\{11,13\\}$$

$$9\\notin\\{11,13\\}$$

$$(A\\setminus B)\\cap(B\\setminus A)=\\emptyset$$

So the statement is True.`,
      `**E.** → False

The union is larger because it still contains the overlap:

$$A\\cup B=\\{1,3,5,7,9,11,13\\}$$

$$A\\triangle B=\\{1,9,11,13\\}$$

$$3\\in A\\cup B$$

$$3\\notin A\\triangle B$$

$$A\\triangle B\\neq A\\cup B$$

So the statement is False.`,
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

Difference keeps members of $A$ that miss $B$.

$$A={2,4,6}$$

$$B={1,3,5}$$

$$2\\in A$$

$$2\\notin B$$

$$4\\in A$$

$$4\\notin B$$

$$6\\in A$$

$$6\\notin B$$

$$A\\setminus B={2,4,6}$$

So the statement is True.`,
      `**B.** → True

Difference keeps members of $B$ that miss $A$.

$$B={1,3,5}$$

$$A={2,4,6}$$

$$1\\in B$$

$$1\\notin A$$

$$3\\in B$$

$$3\\notin A$$

$$5\\in B$$

$$5\\notin A$$

$$B\\setminus A={1,3,5}$$

So the statement is True.`,
      `**C.** → True

Unite the differences:

$$A\\setminus B=\\{2,4,6\\}$$

$$B\\setminus A=\\{1,3,5\\}$$

$$A\\triangle B=\\{1,2,3,4,5,6\\}$$

So the statement is True.`,
      `**D.** → True

Intersect the differences:

$$\\{2,4,6\\}\\cap\\{1,3,5\\}=\\emptyset$$

So the statement is True.`,
      `**E.** → True

Because $A\\cap B=\\emptyset$,

$$A\\setminus B=A$$

$$B\\setminus A=B$$

$$A\\triangle B=A\\cup B$$

and both equal $\\{1,2,3,4,5,6\\}$.

So the statement is True.`,
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

Inclusion-exclusion:

$$|A|=22$$

$$|B|=15$$

$$|A\\cap B|=6$$

$$|A|+|B|=22+15$$

$$22+15=37$$

$$37-6=31$$

$$|A\\cup B|=31$$

So the statement is True.`,
      `**B.** → True

Only $A$ is $A$ minus the overlap:

$$|A\\setminus B|=|A|-|A\\cap B|$$

$$22-6=16$$

$$|A\\setminus B|=16$$

So the statement is True.`,
      `**C.** → True

Neither club:

$$|U|-|A\\cup B|=40-31$$

$$40-31=9$$

So the statement is True.`,
      `**D.** → False

Compare intersection and union sizes:

$$|A\\cap B|=6$$

$$|A\\cup B|=31$$

$$6>31$$

is false.

So the statement is False.`,
      `**E.** → True

Only $B$ is $B$ minus the overlap:

$$|B\\setminus A|=|B|-|A\\cap B|$$

$$15-6=9$$

$$|B\\setminus A|=9$$

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `**Part 1: The sets.**

Of $40$ students, $\\lvert A\\rvert=22$ play chess, $\\lvert B\\rvert=15$ play checkers, and $\\lvert A\\cap B\\rvert=6$ play both.

**Part 2: The operations.**

Inclusion-exclusion counts the union by adding the headlines and subtracting the overlap once:

$$\\lvert A\\cup B\\rvert=22+15-6$$

$$=31.$$

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

Inclusion-exclusion:

$$|A|=34$$

$$|B|=28$$

$$|A\\cap B|=12$$

$$|A|+|B|=34+28$$

$$34+28=62$$

$$62-12=50$$

$$|A\\cup B|=50$$

So the statement is True.`,
      `**B.** → True

Only $A$ is $A$ minus the overlap:

$$|A\\setminus B|=|A|-|A\\cap B|$$

$$34-12=22$$

$$|A\\setminus B|=22$$

So the statement is True.`,
      `**C.** → True

Neither club:

$$|U|-|A\\cup B|=60-50$$

$$60-50=10$$

So the statement is True.`,
      `**D.** → False

Compare intersection and union sizes:

$$|A\\cap B|=12$$

$$|A\\cup B|=50$$

$$12>50$$

is false.

So the statement is False.`,
      `**E.** → True

Only $B$ is $B$ minus the overlap:

$$|B\\setminus A|=|B|-|A\\cap B|$$

$$28-12=16$$

$$|B\\setminus A|=16$$

So the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `Of $60$ students, $|A|=34$ take Spanish, $|B|=28$ take French, and $|A\\cap B|=12$ take both.

Inclusion-exclusion counts each student once:

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

$$|A\\cup B|=34+28-12$$

$$=50$$

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

Inclusion-exclusion:

$$|A|=20$$

$$|B|=18$$

$$|A\\cap B|=5$$

$$|A|+|B|=20+18$$

$$20+18=38$$

$$38-5=33$$

$$|A\\cup B|=33$$

So the statement is True.`,
      `**B.** → True

Only $A$ is $A$ minus the overlap:

$$|A\\setminus B|=|A|-|A\\cap B|$$

$$20-5=15$$

$$|A\\setminus B|=15$$

So the statement is True.`,
      `**C.** → True

Neither club:

$$|U|-|A\\cup B|=50-33$$

$$50-33=17$$

So the statement is True.`,
      `**D.** → False

Compare intersection and union sizes:

$$|A\\cap B|=5$$

$$|A\\cup B|=33$$

$$5>33$$

is false.

So the statement is False.`,
      `**E.** → True

Only $B$ is $B$ minus the overlap:

$$|B\\setminus A|=|B|-|A\\cap B|$$

$$18-5=13$$

$$|B\\setminus A|=13$$

So the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 20,
    solution_overview: `Of $50$ gym members, $|A|=20$ use the pool, $|B|=18$ use the sauna, and $|A\\cap B|=5$ use both.

Inclusion-exclusion counts each member once:

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

$$|A\\cup B|=20+18-5$$

$$=33$$

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

Three-set inclusion-exclusion:

$$|A|=30$$

$$|B|=25$$

$$|C|=20$$

$$|A|+|B|=30+25$$

$$30+25=55$$

$$55+20=75$$

$$|A\\cap B|=10$$

$$75-10=65$$

$$|A\\cap C|=8$$

$$65-8=57$$

$$|B\\cap C|=7$$

$$57-7=50$$

$$|A\\cap B\\cap C|=3$$

$$50+3=53$$

$$|A\\cup B\\cup C|=53$$

So the statement is True.`,
      `**B.** → True

The triple intersection sits inside every pairwise intersection by definition:

$$A\\cap B\\cap C\\subseteq A\\cap B$$

$$A\\cap B\\cap C\\subseteq A\\cap C$$

$$A\\cap B\\cap C\\subseteq B\\cap C$$

So every all-three member is counted in each pairwise count.

So the statement is True.`,
      `**C.** → True

Exactly photography and hiking but not cooking:

$$|A\\cap B\\setminus C|=|A\\cap B|-|A\\cap B\\cap C|$$

$$10-3=7$$

So the statement is True.`,
      `**D.** → True

The triple cannot exceed any pairwise count:

$$|A\\cap B\\cap C|=3$$

$$|A\\cap B|=10$$

$$|A\\cap C|=8$$

$$|B\\cap C|=7$$

$$\\min(10,8,7)=7$$

$$3\\le 7$$

So the statement is True.`,
      `**E.** → False

Compare the union to the raw sum:

$$|A\\cup B\\cup C|=53$$

$$|A|+|B|+|C|=30+25+20$$

$$30+25=55$$

$$55+20=75$$

$$53>75$$

is false. The union is smaller than the raw sum because overlaps are subtracted.

So the statement is False.`,
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

Let $P$ mean “$7$ is prime” and $E$ mean “$7$ is even”. Given facts:

$$P$$

$$\\neg E$$

The conjunction requires both:

$$P\\wedge E$$

But $\\neg E$ holds, so $P\\wedge E$ is false.

So the statement is False.`,
      `**B.** → True

The disjunction $P\\vee E$ is true whenever at least one disjunct is true. Here

$$P$$

holds, so

$$P\\vee E$$

is true.

So the statement is True.`,
      `**C.** → True

Negation of the conjunction:

$$\\neg(P\\wedge E)$$

From letter A, $P\\wedge E$ is false, so its negation is true. Equivalently by De Morgan:

$$\\neg P\\vee\\neg E$$

and $\\neg E$ holds.

So the statement is True.`,
      `**D.** → False

“Neither prime nor even” is

$$\\neg P\\wedge\\neg E$$

But $P$ is true, so $\\neg P$ is false, and the conjunction fails.

So the statement is False.`,
      `**E.** → False

Negation of the disjunction:

$$\\neg(P\\vee E)$$

From letter B, $P\\vee E$ is true, so the negation is false. Equivalently:

$$\\neg P\\wedge\\neg E$$

which fails because $P$ holds.

So the statement is False.`,
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

The universal claim is: every prime $p>2$ is odd. The only even prime is $2$, which is excluded by $p>2$. Every larger prime is odd, so the claim holds.

So the statement is True.`,
      `**B.** → False

A counterexample would be a prime $p>2$ that is even. The number $2$ fails the hypothesis $p>2$:

$$2>2$$

is false. So $2$ is outside the quantified domain and is not a counterexample.

So the statement is False.`,
      `**C.** → True

Negating $\\forall p\\,(p\\text{ prime }\\wedge p>2\\Rightarrow p\\text{ odd})$ yields

$$\\exists p\\,(p\\text{ prime }\\wedge p>2\\wedge p\\text{ even})$$

which is exactly the claimed negation.

So the statement is True.`,
      `**D.** → False

The converse would say every odd $n>2$ is prime. A counterexample is

$$n=9$$

$$9>2$$

$$9\\text{ is odd}$$

$$9=3\\cdot 3$$

so $9$ is not prime. The converse fails.

So the statement is False.`,
      `**E.** → True

Euclid’s theorem supplies infinitely many primes. Removing the single prime $2$ still leaves infinitely many primes, all of which are greater than $2$.

So the statement is True.`,
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

$$A = \\mathrm{T},\\quad A\\Rightarrow I\\quad\\Longrightarrow\\quad I$$

$$= \\mathrm{T}$$

Maria has passed Intermediate.

So the statement is True.`,
      `**B.** → True

Let $P$ mean that Maria passed Principles. The two prerequisite rules form

$$A\\Rightarrow I,$$

$$I\\Rightarrow P$$

Since Maria has $A=\\mathrm{T}$, apply the implications in order:

$$A = \\mathrm{T}\\Longrightarrow I$$

$$= \\mathrm{T}\\Longrightarrow P$$

$$= \\mathrm{T}$$

The second rule therefore forces Maria to have passed Principles.

So the statement is True.`,
      `**C.** → True

Compose the prerequisite implications:

$$A\\Rightarrow I,\\quad I\\Rightarrow P \\quad\\Longrightarrow\\quad A\\Rightarrow P$$

The resulting arrow says that whenever Advanced enrolment is true, passing Principles must also be true:

$$A = \\mathrm{T}\\quad\\Longrightarrow\\quad P$$

$$= \\mathrm{T}$$

That makes Principles a necessary condition for Advanced enrolment.

So the statement is True.`,
      `**D.** → False

Calling Principles sufficient for Advanced would reverse the established chain and require

$$P\\Rightarrow A$$

Consider a student who passed Principles but never passed Intermediate and is not enrolled in Advanced:

$$P = \\mathrm{T},$$

$$I$$

$$= \\mathrm{F},$$

$$A$$

$$= \\mathrm{F}$$

Both original rules hold vacuously because their antecedents are false, but the proposed reverse implication evaluates as

$$P\\Rightarrow A = \\mathrm{T}\\Rightarrow\\mathrm{F}$$

$$= \\mathrm{F}$$

Passing Principles alone is not sufficient for Advanced enrolment.

So the statement is False.`,
      `**E.** → False

The rules permit only the pass/fail chain

$$A(M) = \\mathrm{T}\\Longrightarrow I(M)$$

$$= \\mathrm{T}\\Longrightarrow P(M)$$

$$= \\mathrm{T}$$

Here $P(M)=\\mathrm{T}$ means only “Maria passed Principles.” It does not encode any numerical grade:

$$P(M) = \\mathrm{T}\\not\\Rightarrow \\mathrm{Grade}(M)$$

$$= 100\\%$$

Maria could have earned any passing mark. A perfect grade cannot be inferred.

So the statement is False.`,
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

Intersection keeps only elements that sit in both $P$ and $E$.

$$P=\\{2,3,5,7,11,13\\}$$

$$E=\\{2,4,6,8,10,12,14\\}$$

$$2\\in P,\\ 2\\in E$$

$$3\\in P,\\ 3\\notin E$$

$$5\\in P,\\ 5\\notin E$$

$$7\\in P,\\ 7\\notin E$$

$$11\\in P,\\ 11\\notin E$$

$$13\\in P,\\ 13\\notin E$$

$$P\\cap E=\\{2\\}$$

$$\\{2\\}$$

The computed roster matches the claim.

So the statement is True.`,
      `**B.** → True

Difference $P\\setminus E$ keeps members of $P$ that miss $E$.

$$P=\\{2,3,5,7,11,13\\}$$

$$E=\\{2,4,6,8,10,12,14\\}$$

$$2\\in P,\\ 2\\in E$$

$$3\\in P,\\ 3\\notin E$$

$$5\\in P,\\ 5\\notin E$$

$$7\\in P,\\ 7\\notin E$$

$$11\\in P,\\ 11\\notin E$$

$$13\\in P,\\ 13\\notin E$$

$$P\\setminus E=\\{3,5,7,11,13\\}$$

$$\\{3,5,7,11,13\\}$$

The computed roster matches the claim.

So the statement is True.`,
      `**C.** → False

A universal claim over $P$ must work for every listed prime. Test the member $x=2$:

$$2\\in P$$

$$\\mathrm{Odd}(2)=\\mathrm{F}$$

Equivalently, its universal implication has the false row

$$2\\in P\\Rightarrow\\mathrm{Odd}(2) = \\mathrm{T}\\Rightarrow\\mathrm{F}$$

$$= \\mathrm{F}$$

This one counterexample disproves “every $x\\in P$ is odd,”.

So the statement is False.`,
      `**D.** → True

The antecedent restricts attention to members of $P$ other than $2$:

$$\\{x\\in P:x\\ne2\\}=\\{3,5,7,11,13\\}$$

Every number in that set has the form $2k+1$, so each makes the conclusion “$x$ is odd” true. At $x=2$, the extra condition is false:

$$(2\\in P\\land2\\ne2)\\Rightarrow\\mathrm{Odd}(2) = \\mathrm{F}\\Rightarrow\\mathrm{F}$$

$$= \\mathrm{T}$$

Thus no $x$ gives a true antecedent and false conclusion. The universal implication is True.

So the statement is True.`,
      `**E.** → False

The subset claim means

$$P\\subseteq E\\quad\\Longleftrightarrow\\quad \\forall x\\,(x\\in P\\Rightarrow x\\in E)$$

Choose $x=3$. The membership values are

$$3\\in P = \\mathrm{T}$$

$$3\\in E$$

$$= \\mathrm{F}$$

so the required implication evaluates as

$$3\\in P\\Rightarrow3\\in E = \\mathrm{T}\\Rightarrow\\mathrm{F}$$

$$= \\mathrm{F}$$

One member of $P$ outside $E$ disproves the subset claim.

So the statement is False.`,
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

holds for every real $x$. Since a sufficient condition is the antecedent of a guaranteed implication, $x>10$ is sufficient for $x>5$.

So the statement is True.`,
      `**B.** → False

Necessity of $x>10$ for $x>5$ would require $Q\\Rightarrow P$. Test $x=7$ in the hypothesis:

$$7>5$$

Now test the required conclusion:

$$7\\not>10$$

This witness makes $Q$ true and $P$ false. The implication $Q\\Rightarrow P$ fails.

So the statement is False.`,
      `**C.** → True

“$x>5$ is necessary for $x>10$” means that whenever $x>10$ holds, $x>5$ must hold:

$$x>10\\Rightarrow x>5$$

There is no real number with the forbidden truth pattern

$$x>10 = \\mathrm{T},$$

$$x>5$$

$$= \\mathrm{F}$$

because every number above $10$ is automatically above $5$. Therefore $x>5$ is a necessary condition for $x>10$.

So the statement is True.`,
      `**D.** → False

Equivalence requires both implications to hold:

$$P\\Leftrightarrow Q\\quad\\Longleftrightarrow\\quad(P\\Rightarrow Q)\\land(Q\\Rightarrow P)$$

The overview recovered $P\\Rightarrow Q$. For the reverse direction, use $x=7$:

$$7>5,$$

$$7\\not>10$$

Thus $Q\\Rightarrow P$ fails. The two conditions are not equivalent.

So the statement is False.`,
      `**E.** → True

A counterexample to $Q\\Rightarrow P$ must satisfy $Q\\land\\neg P$. For $x=7$,

$$7>5$$

but

$$7\\not>10$$

The named value makes the hypothesis true and the conclusion false. It is a counterexample.

That matches the claim.

So the statement is True.`,
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

$$R(P) = \\mathrm{T}\\land\\mathrm{T}$$

$$= \\mathrm{T}$$

The claim says P satisfies both required conditions.

So the statement is True.`,
      `**B.** → False

Let $L$ mean “the loan is approved” and $R$ mean “both required tests hold.” The bank gives only

$$L\\Rightarrow R$$

Applicant P has $R(P)=\\mathrm{T}$, but that truth value does not determine $L(P)$. Both rows

$$L(P) = \\mathrm{T},\\ R(P)$$

$$= \\mathrm{T}$$

$$\\text{and}$$

$$L(P)$$

$$= \\mathrm{F},\\ R(P)$$

$$= \\mathrm{T}$$

satisfy $L\\Rightarrow R$. Concluding approval would use the unsupported converse

$$R\\Rightarrow L$$

so P's approval cannot be concluded and.

So the statement is False.`,
      `**C.** → True

Conjunction fails when either required test fails. Applicant Q clears the score test:

$$720\\ge 700$$

The ratio test fails:

$$45\\%\\not<40\\%$$

Thus

$$R(Q) = \\mathrm{T}\\land\\mathrm{F}$$

$$= \\mathrm{F}$$

The claim says Q does not satisfy both required conditions.

So the statement is True.`,
      `**D.** → True

The contrapositive gives a valid inference from a failed necessary condition:

$$L\\Rightarrow R\\quad\\Longleftrightarrow\\quad\\neg R\\Rightarrow\\neg L$$

Applicant Q fails the ratio test, so the full requirement is false:

$$R(Q) = \\mathrm{T}\\land\\mathrm{F}$$

$$= \\mathrm{F}$$

Applying the contrapositive gives

$$\\neg R(Q)\\Rightarrow\\neg L(Q)$$

Q's loan is therefore not approved.

So the statement is True.`,
      `**E.** → False

A ratio below $40\\%$ is only one part of the required conjunction. Consider an applicant with score $650$ and ratio $30\\%$:

$$650\\ge700 = \\mathrm{F},$$

$$30\\%<40\\%$$

$$= \\mathrm{T}$$

The full requirement evaluates to

$$R = \\mathrm{F}\\land\\mathrm{T}$$

$$= \\mathrm{F}$$

The contrapositive of $L\\Rightarrow R$ then gives $\\neg R\\Rightarrow\\neg L$, so this applicant cannot be approved. A low ratio does not guarantee approval.

So the statement is False.`,
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

That matches the claim.

$$\\forall x\\, (x^2 \\ge 0)$$

$$\\exists x\\, (x^2 < 0)$$

So the statement is True.`,
      `**B.** → False

For every real number, squaring produces a nonnegative result:

$$\\forall x\\in\\mathbb R,$$

$$x^{2}\\ge0$$

But the proposed witness would have to satisfy

$$x^{2}=-1<0$$

which contradicts that fact. Hence the real solution set is empty:

$$\\{x\\in\\mathbb R:x^{2} = -1\\}$$

$$= \\varnothing$$

The existential statement has no real witness, so it is False.

So the statement is False.`,
      `**C.** → True

Negating an existential produces a universal of the negated predicate. The inequality $>$ flips to $\\le$, including the boundary $100$:

$$\\neg\\exists x\\,(x>100)\\equiv\\forall x\\,(x\\le 100)$$

The quoted sentence is that negation.

That matches the claim.

$$\\exists x\\, (x > 100)$$

$$\\forall x\\, (x \\le 100)$$

So the statement is True.`,
      `**D.** → True

Because $x$ is announced first, $y$ may be built from it. The recipe $y=x+1$ works for every $x>0$:

$$x+1>x$$

Each $x$ gets its own $y$.

That matches the claim.

$$\\forall x > 0\\, \\exists y\\, (y > x)$$

So the statement is True.`,
      `**E.** → False

Now a single $y$ must be fixed first and then outrank every positive $x$. Whatever $y$ is offered,

$$x=\\max(y+1,1)$$

is a positive number bigger than it. No champion exists.

That conflicts with the claim.

$$\\exists y\\, \\forall x > 0\\, (y > x)$$

So the statement is False.`,
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

The claim allows R to have symptom A without symptom B, which contradicts the required conjunction.

So the statement is False.`,
      `**B.** → False

The contrapositive blocks diagnosis when the required symptom conjunction fails. Patient S has A but not B, so

$$A(S)\\land B(S) = \\mathrm{T}\\land\\mathrm{F}$$

$$= \\mathrm{F}$$

From the criterion,

$$\\neg(A\\land B)\\Rightarrow\\neg D$$

Patient S therefore cannot be diagnosed with condition X.

So the statement is False.`,
      `**C.** → False

Let $S=A\\land B$ mean that both symptoms are present. Calling $S$ sufficient would require the reverse implication

$$S\\Rightarrow D$$

The doctor explicitly allows a patient whose two symptoms are present but whose diagnosis is withheld while other conditions are checked:

$$S = \\mathrm{T},$$

$$D$$

$$= \\mathrm{F}$$

For that allowed case,

$$S\\Rightarrow D = \\mathrm{T}\\Rightarrow\\mathrm{F}$$

$$= \\mathrm{F}$$

Both symptoms are necessary but not sufficient for diagnosis.

So the statement is False.`,
      `**D.** → True

The contrapositive blocks diagnosis whenever the required conjunction is false. If symptom A is absent, then for either truth value of B,

$$A\\land B = \\mathrm{F}\\land B$$

$$= \\mathrm{F}$$

Therefore

$$\\neg(A\\land B)\\Rightarrow\\neg D$$

No other symptom can repair the missing A requirement.

So the statement is True.`,
      `**E.** → False

The criterion gives $D\\Rightarrow(A\\land B)$, but it explicitly denies the converse. A patient may have both symptoms while another condition prevents diagnosis:

$$A\\land B = \\mathrm{T},$$

$$D$$

$$= \\mathrm{F}$$

This possibility satisfies the doctor's one-way rule because

$$D\\Rightarrow(A\\land B) = \\mathrm{F}\\Rightarrow\\mathrm{T}$$

$$= \\mathrm{T}$$

yet it directly refutes the claim that such a patient is impossible. Therefore.

So the statement is False.`,
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
    context: `The universe is the set of integers from 1 to 20, i.e. $\\{1, 2..., 20\\}$.`,
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

Need a multiple of both $3$ and $5$ in $\\{1,\\ldots,20\\}$:

$$3\\cdot 5=15$$

$$15\\in\\{1,\\ldots,20\\}$$

$$15\\div 3=5$$

$$15\\div 5=3$$

so $15$ is divisible by both. The existential holds.

So the statement is True.`,
      `**B.** → True

If $4\\mid x$, write

$$x=4k$$

$$4k=2\\cdot(2k)$$

$$2\\mid x$$

The implication holds for every $x$ in the universe.

So the statement is True.`,
      `**C.** → False

Counterexample:

$$x=2$$

$$2\\div 2=1$$

so $2\\mid 2$. But

$$2\\div 4$$

is not an integer, so $4\\nmid 2$. The implication fails.

So the statement is False.`,
      `**D.** → True

Negate the universal implication:

$$\\neg\\forall x\\,(\\mathrm{Prime}(x)\\Rightarrow\\mathrm{Odd}(x))$$

$$\\equiv\\exists x\\,\\neg(\\mathrm{Prime}(x)\\Rightarrow\\mathrm{Odd}(x))$$

$$\\equiv\\exists x\\,(\\mathrm{Prime}(x)\\wedge\\neg\\mathrm{Odd}(x))$$

$$\\equiv\\exists x\\,(\\mathrm{Prime}(x)\\wedge\\mathrm{Even}(x))$$

So the statement is True.`,
      `**E.** → True

Witness:

$$x=2$$

$$\\mathrm{Prime}(2)$$

$$\\mathrm{Even}(2)$$

$$2\\in\\{1,\\ldots,20\\}$$

so the existential negation holds.

So the statement is True.`,
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

$$B(v)\\Leftrightarrow(v\\ge3),$$

$$M(v)\\Leftrightarrow\\neg B(v)$$

For Person T, $v=2$, so

$$B(2) = (2\\ge3)$$

$$= \\mathrm{F}$$

and therefore

$$M(2) = \\neg B(2)$$

$$= \\neg\\mathrm{F}$$

$$= \\mathrm{T}$$

Person T is a member.

So the statement is True.`,
      `**B.** → False

Person U has four violations. Evaluate the banned-list test first:

$$B(4) = (4\\ge3)$$

$$= \\mathrm{T}$$

Membership is exactly the negation of banned status, so

$$M(4) = \\neg B(4)$$

$$= \\neg\\mathrm{T}$$

$$= \\mathrm{F}$$

U is not a member. The claim that U is a member is therefore False.

So the statement is False.`,
      `**C.** → True

The biconditional gives, for every person $x$,

$$M(x)\\Leftrightarrow\\neg B(x)$$

If $B(x)=\\mathrm{T}$, then $M(x)=\\mathrm{F}$; if $B(x)=\\mathrm{F}$, then $M(x)=\\mathrm{T}$. Thus

$$M\\cap B = \\varnothing,$$

$$M\\cup B$$

$$= U$$

where $U$ is the set of all people under the rule. Those two equations say the membership and banned lists are complementary.

So the statement is True.`,
      `**D.** → False

At the boundary value $v=3$, “three or more” is already satisfied:

$$B(3) = (3\\ge3)$$

$$= \\mathrm{T}$$

The membership biconditional then gives

$$M(3) = \\neg B(3)$$

$$= \\neg\\mathrm{T}$$

$$= \\mathrm{F}$$

There is no second allowed outcome depending on unstated factors: exactly three violations forces banned status.

So the statement is False.`,
      `**E.** → False

Every possible integer violation count lies on exactly one side of the cutoff:

$$v<3\\quad\\text{or}\\quad v\\ge3$$

The resulting classifications are

$$v<3\\Rightarrow B(v) = \\mathrm{F},\\ M(v)$$

$$= \\mathrm{T}$$

$$v\\ge3\\Rightarrow B(v) = \\mathrm{T},\\ M(v)$$

$$= \\mathrm{F}$$

No count leaves either truth value undetermined. Therefore no genuinely ambiguous violation count exists.

So the statement is False.`,
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

Exhibiting one such $x$ makes the existential negation true and the original universal false. Therefore one counterexample is sufficient.

So the statement is True.`,
      `**B.** → True

The number $2$ is prime because its only positive divisors are $1$ and $2$. It is even, so it is not odd. The counterexample condition evaluates to

$$\\mathrm{Prime}(2)\\land\\neg\\mathrm{Odd}(2) = \\mathrm{T}\\land\\mathrm{T}$$

$$= \\mathrm{T}$$

Equivalently, the universal implication fails at $2$:

$$\\mathrm{Prime}(2)\\Rightarrow\\mathrm{Odd}(2) = \\mathrm{T}\\Rightarrow\\mathrm{F}$$

$$= \\mathrm{F}$$

Thus $2$ is a valid counterexample.

So the statement is True.`,
      `**C.** → True

To prove an implication by contradiction, negate the implication:

$$\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$$

Thus the proof assumes both

$$P = \\mathrm{T},$$

$$Q$$

$$= \\mathrm{F}$$

and derives a contradiction. That shows the only truth assignment that could make $P\\Rightarrow Q$ false is impossible, so the implication must hold. The described method is correct, making the statement True.

So the statement is True.`,
      `**D.** → False

Let $R$ be the target “$\\sqrt2$ is irrational.” A contradiction proof starts from its negation:

$$\\neg R:\\quad \\sqrt2\\in\\mathbb Q$$

That means assuming integers $a,b$ with $b\\ne0$ and

$$\\sqrt2=\\frac{a}{b}$$

usually chosen in lowest terms, and then deriving an impossibility. Starting with $R$ would assume the very conclusion being proved. Therefore the proposed starting assumption is wrong.

So the statement is False.`,
      `**E.** → False

One favourable example proves only an existential statement:

$$P(a)=\\mathrm{T}\\quad\\Longrightarrow\\quad\\exists x\\,P(x)$$

It does not establish the universal

$$\\forall x\\,P(x)$$

For example, $3$ is prime and odd, but that successful check leaves $2$ untested, and $2$ is prime but not odd. A single confirming case cannot rule out a counterexample elsewhere.

So the statement is False.`,
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

$$\\neg(P\\Rightarrow Q) \\equiv\\neg(\\neg P\\lor Q) \\equiv P\\land\\neg Q$$

This formula is true exactly when it rains and the picnic is not cancelled:

$$P\\land\\neg Q = \\mathrm{T}\\land\\mathrm{T}$$

$$= \\mathrm{T}$$

The quoted sentence is precisely the negation.

So the statement is True.`,
      `**B.** → False

One truth assignment separates an implication from its converse.

$$(p,q)=(F,T)$$

$$p\\rightarrow q$$

$$= F\\rightarrow T$$

$$= T$$

$$q\\rightarrow p$$

$$= T\\rightarrow F$$

$$= F$$

The two implications disagree on this assignment.

So the statement is False.`,
      `**C.** → False

The inverse $\\neg P\\Rightarrow\\neg Q$ fails on a dry day when the picnic is cancelled for another reason. For the venue-conflict day,

$$\\neg P\\Rightarrow\\neg Q = \\mathrm{T}\\Rightarrow\\mathrm{F}$$

$$= \\mathrm{F}$$

The original remains true:

$$P\\Rightarrow Q = \\mathrm{F}\\Rightarrow\\mathrm{T}$$

$$= \\mathrm{T}$$

One situation separates their truth values. The inverse is not equivalent to the original.

So the statement is False.`,
      `**D.** → True

An implication is false only when its hypothesis is true and its conclusion is false. On the venue-conflict day, $P$ is false and $Q$ is true, so

$$\\neg P\\Rightarrow\\neg Q = \\mathrm{T}\\Rightarrow\\mathrm{F}$$

$$= \\mathrm{F}$$

while

$$P\\Rightarrow Q = \\mathrm{F}\\Rightarrow\\mathrm{T}$$

$$= \\mathrm{T}$$

The day contradicts the inverse but not the organizer's rule.

So the statement is True.`,
      `**E.** → True

Form the contrapositive by swapping the two propositions and negating both:

$$P\\Rightarrow Q \\quad\\Longleftrightarrow\\quad \\neg Q\\Rightarrow\\neg P$$

Here this becomes

$$\\text{picnic not cancelled}\\Rightarrow\\text{no rain}$$

The equivalence can also be checked algebraically:

$$\\neg Q\\Rightarrow\\neg P \\equiv Q\\lor\\neg P \\equiv\\neg P\\lor Q \\equiv P\\Rightarrow Q$$

The quoted contrapositive is guaranteed whenever the original rule holds.

So the statement is True.`,
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

Inclusive disjunction $X\\vee Y$ is true when $X$ holds, when $Y$ holds, and when both hold. For a both-buyer:

$$X=\\mathrm{T}$$

$$Y=\\mathrm{T}$$

$$X\\vee Y=\\mathrm{T}\\vee\\mathrm{T}$$

$$X\\vee Y=\\mathrm{T}$$

So all $15$ both-buyers satisfy “bought X or Y.”

So the statement is True.`,
      `**B.** → True

Inclusive union count:

$$|X|=40$$

$$|Y|=35$$

$$|X\\cap Y|=15$$

$$|X|+|Y|=40+35$$

$$40+35=75$$

$$75-15=60$$

$$|X\\cup Y|=60$$

So the statement is True.`,
      `**C.** → True

Exclusive or keeps only the outer regions:

$$40-15=25$$

$$35-15=20$$

$$25+20=45$$

So the statement is True.`,
      `**D.** → True

A biconditional is true exactly on matching truth values:

$$\\mathrm{T}\\Leftrightarrow\\mathrm{T}=\\mathrm{T}$$

$$\\mathrm{F}\\Leftrightarrow\\mathrm{F}=\\mathrm{T}$$

$$\\mathrm{T}\\Leftrightarrow\\mathrm{F}=\\mathrm{F}$$

$$\\mathrm{F}\\Leftrightarrow\\mathrm{T}=\\mathrm{F}$$

So the statement is True.`,
      `**E.** → False

“At least one true” is disjunction, not a biconditional. On

$$P=\\mathrm{T}$$

$$Q=\\mathrm{F}$$

$$P\\vee Q=\\mathrm{T}$$

but

$$P\\Leftrightarrow Q=\\mathrm{F}$$

So the statement is False.`,
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

Pass iff attendance and exam both meet thresholds. For K:

$$85\\ge 80$$

$$48\\ge 50$$

is false. The conjunction fails, so K does not pass.

So the statement is False.`,
      `**B.** → False

For L:

$$75\\ge 80$$

is false, even though

$$90\\ge 50$$

The conjunction fails, so L does not pass.

So the statement is False.`,
      `**C.** → False

The rule is a biconditional with a conjunction — both conjuncts are required. A high exam score cannot replace missing attendance.

So the statement is False.`,
      `**D.** → True

If attendance holds but the exam fails the cutoff, the conjunction is false, so the student does not pass.

So the statement is True.`,
      `**E.** → True

Compare Student X (attendance $80$, exam $50$) with Student Y (attendance $79$, exam $100$).

$$80\\ge 80$$

$$50\\ge 50$$

$$\\mathrm{Pass}(X)=\\mathrm{T}$$

$$79\\ge 80$$

is false, so

$$\\mathrm{Pass}(Y)=\\mathrm{F}$$

Combined averages:

$$80+50=130$$

$$\\frac{130}{2}=65$$

$$79+100=179$$

$$\\frac{179}{2}=89.5$$

$$65<89.5$$

Yet X passes and Y fails, so a lower combined average can still pass.

So the statement is True.`,
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

Filter displays iff $\\neg(S\\vee O)$. Item M is on sale and in stock:

$$S=\\mathrm{T}$$

$$O=\\mathrm{F}$$

$$S\\vee O=\\mathrm{T}\\vee\\mathrm{F}$$

$$S\\vee O=\\mathrm{T}$$

$$\\neg(S\\vee O)=\\mathrm{F}$$

M is not displayed.

So the statement is False.`,
      `**B.** → False

Item N is not on sale and out of stock:

$$S=\\mathrm{F}$$

$$O=\\mathrm{T}$$

$$S\\vee O=\\mathrm{F}\\vee\\mathrm{T}$$

$$S\\vee O=\\mathrm{T}$$

$$\\neg(S\\vee O)=\\mathrm{F}$$

N is not displayed.

So the statement is False.`,
      `**C.** → False

De Morgan expands a negated disjunction as a conjunction:

$$\\neg(S\\vee O)\\equiv\\neg S\\wedge\\neg O$$

The claim writes $\\neg S\\vee\\neg O$ instead. Those are not equivalent: on $S=\\mathrm{T}$, $O=\\mathrm{F}$,

$$\\neg(S\\vee O)=\\mathrm{F}$$

$$\\neg S\\vee\\neg O=\\mathrm{F}\\vee\\mathrm{T}=\\mathrm{T}$$

So the statement is False.`,
      `**D.** → True

Correct De Morgan form:

$$\\neg(S\\vee O)\\equiv\\neg S\\wedge\\neg O$$

Displayed items are neither on sale nor out of stock.

So the statement is True.`,
      `**E.** → True

Item K: not on sale and in stock:

$$S=\\mathrm{F}$$

$$O=\\mathrm{F}$$

$$\\neg S=\\mathrm{T}$$

$$\\neg O=\\mathrm{T}$$

$$\\neg S\\wedge\\neg O=\\mathrm{T}$$

so K is displayed.

So the statement is True.`,
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

$$P\\Rightarrow Q \\quad\\Longleftrightarrow\\quad \\neg Q\\Rightarrow\\neg P$$

The negation of the strict inequality is

$$\\neg(\\mathrm{inflation}>10\\%)\\equiv \\mathrm{inflation}\\le10\\%$$

Therefore the contrapositive says “if rates are not raised, inflation is at most $10\\%$,” exactly as claimed.

So the statement is True.`,
      `**B.** → False

One truth assignment separates an implication from its converse.

$$(p,q)=(F,T)$$

$$p\\rightarrow q$$

$$= F\\rightarrow T$$

$$= T$$

$$q\\rightarrow p$$

$$= T\\rightarrow F$$

$$= F$$

The two implications disagree on this assignment.

So the statement is False.`,
      `**C.** → True

"$P$ is sufficient for $Q$" means that every time $P$ is true, $Q$ must be true:

$$P\\Rightarrow Q$$

Here $P$ is the event $\\mathrm{inflation}>10\\%$ and $Q$ is the bank raising rates. The given rule is exactly

$$P\\Longrightarrow Q$$

Thus the truth pattern $P=\\mathrm{T},Q=\\mathrm{F}$ is ruled out by the premise. Inflation above $10\\%$ is sufficient for a rate rise.

So the statement is True.`,
      `**D.** → False

Calling high inflation necessary for a rate rise would require

$$Q\\Rightarrow P$$

That is the converse of the given rule. A rate rise for currency defence at $4\\%$ inflation has

$$Q = \\mathrm{T},$$

$$P$$

$$= \\mathrm{F}$$

so the proposed necessity evaluates as

$$Q\\Rightarrow P = \\mathrm{T}\\Rightarrow\\mathrm{F}$$

$$= \\mathrm{F}$$

The original $P\\Rightarrow Q$ remains true on this row because $P$ is false. High inflation is not established as necessary.

So the statement is False.`,
      `**E.** → False

The attempted inference has the form

$$P\\Rightarrow Q,$$

$$Q,$$

$$\\therefore P$$

which affirms the consequent. Use a possible currency-defence rise at $4\\%$ inflation:

$$P = \\mathrm{F},$$

$$Q$$

$$= \\mathrm{T}$$

Then both premises are true,

$$P\\Rightarrow Q = \\mathrm{F}\\Rightarrow\\mathrm{T}$$

$$= \\mathrm{T},$$

$$Q$$

$$= \\mathrm{T},$$

while the conclusion $P$ is false. The conclusion does not follow.

So the statement is False.`,
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

$$P\\Leftrightarrow Q = \\mathrm{T}\\Leftrightarrow Q$$

$$= \\mathrm{T} \\quad\\Longrightarrow\\quad Q$$

$$= \\mathrm{T}$$

The second proposition is therefore true.

So the statement is True.`,
      `**B.** → True

Letter A gives $Q=\\mathrm{T}$. The second biconditional forces $R$ to match $Q$:

$$Q\\Leftrightarrow R = \\mathrm{T}\\Leftrightarrow R$$

$$= \\mathrm{T}$$

The only matching value is

$$R=\\mathrm{T}$$

Thus the truth of the first proposition travels through both links to the third proposition.

So the statement is True.`,
      `**C.** → True

Biconditional agreement is transitive: matching through the same middle truth value makes the endpoints match. Thus

$$(P\\Leftrightarrow Q)\\land(Q\\Leftrightarrow R)\\Rightarrow(P\\Leftrightarrow R)$$

The premises provide both links. The first and third propositions must have the same truth value.

So the statement is True.`,
      `**D.** → True

Biconditionals force equal truth values in either direction. If $R$ were false, the second link gives

$$Q\\Leftrightarrow R,\\quad R = \\mathrm{F}\\quad\\Longrightarrow\\quad Q$$

$$= \\mathrm{F}$$

The first link then gives

$$P\\Leftrightarrow Q,\\quad Q = \\mathrm{F}\\quad\\Longrightarrow\\quad P$$

$$= \\mathrm{F}$$

Thus a false third proposition would force the first false.

So the statement is True.`,
      `**E.** → False

A claim of sufficiency is disproved by one assignment that satisfies the known condition and fails the conclusion. Choose

$$P = \\mathrm{T},$$

$$Q$$

$$= \\mathrm{F},$$

$$R$$

$$= \\mathrm{T}$$

Then

$$P\\Leftrightarrow R=\\mathrm{T}$$

but $Q$ does not match either endpoint. Knowing only that $P$ and $R$ match leaves $Q$ free.

So the statement is False.`,
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

“Cancelled unless rain stops” means cancellation occurs when the stop fails:

$$\\neg S\\Rightarrow C$$

So the statement is True.`,
      `**B.** → False

The converse of $\\neg S\\Rightarrow C$ is $C\\Rightarrow\\neg S$, not $S\\Rightarrow\\neg C$. Check $S\\Rightarrow\\neg C$: that would say a stop forces the concert to run, which the rule never promises.

So the statement is False.`,
      `**C.** → True

Material implication rewrite:

$$\\neg S\\Rightarrow C\\equiv S\\vee C$$

(or $C\\vee S$). The two forms are equivalent.

So the statement is True.`,
      `**D.** → False

If $S$ holds, $\\neg S\\Rightarrow C$ is vacuously true whether or not $C$ holds. The concert might still be cancelled for other reasons. So a stop does not guarantee the concert happens.

So the statement is False.`,
      `**E.** → True

Contrapositive of $\\neg S\\Rightarrow C$:

$$\\neg C\\Rightarrow\\neg(\\neg S)$$

$$\\neg C\\Rightarrow S$$

If the concert is not cancelled, the rain must have stopped before 6 PM.

So the statement is True.`,
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

Discount requires age and (disability or low income). For P:

$$70\\ge 65$$

$$\\mathrm{disability}=\\mathrm{F}$$

$$18000<20000$$

$$\\mathrm{disability}\\vee\\mathrm{low\\ income}=\\mathrm{F}\\vee\\mathrm{T}$$

$$=\\mathrm{T}$$

$$\\mathrm{age}\\wedge(\\mathrm{disability}\\vee\\mathrm{low\\ income})=\\mathrm{T}$$

P qualifies.

So the statement is True.`,
      `**B.** → False

For Q: age and disability hold, income is high. The inner disjunction is

$$\\mathrm{disability}\\vee\\mathrm{low\\ income}=\\mathrm{T}\\vee\\mathrm{F}$$

$$=\\mathrm{T}$$

so the full conjunction still holds. Q does qualify; the claim is false.

So the statement is False.`,
      `**C.** → False

A senior with disability and income above $\\$20{,}000$ still satisfies the inner disjunction via disability. High income alone does not disqualify.

So the statement is False.`,
      `**D.** → True

Take age $70$, no disability, income $\\$25{,}000$:

$$70\\ge 65$$

$$\\mathrm{disability}=\\mathrm{F}$$

$$25000<20000$$

is false, so

$$\\mathrm{disability}\\vee\\mathrm{low\\ income}=\\mathrm{F}$$

The conjunction fails, so the rider does not qualify. Such a scenario exists.

So the statement is True.`,
      `**E.** → False

Age alone is not sufficient: the second conjunct may still fail. The previous letter’s rider is a counterexample.

So the statement is False.`,
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
    context: `Consider the claim: "For all positive integers n, 1 + 2 +.. + n = n(n+1)/2."`,
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

Base case $n=1$. Left side is $1$. Right side:

$$1+1=2$$

$$1\\cdot 2=2$$

$$\\frac{2}{2}=1$$

$$\\frac{1\\cdot(1+1)}{2}=1$$

The two sides agree.

So the statement is True.`,
      `**B.** → True

Write

$$P(n):\\quad 1+2+\\cdots+n=\\frac{n(n+1)}{2}$$

The inductive step is the implication

$$P(k)\\Rightarrow P(k+1)$$

for arbitrary $k\\ge 1$. Together with the base case, that implication propagates the formula through every positive integer.

So the statement is True.`,
      `**C.** → False

Checking five values only establishes

$$P(1)\\land P(2)\\land P(3)\\land P(4)\\land P(5)$$

A complete induction also needs

$$\\forall k\\ge 1,\\quad P(k)\\Rightarrow P(k+1)$$

Without that bridge, $P(6)$ is unproved.

So the statement is False.`,
      `**D.** → True

Assume $P(k)$:

$$1+2+\\cdots+k=\\frac{k(k+1)}{2}$$

Add $k+1$:

$$\\frac{k(k+1)}{2}+(k+1)$$

$$k+1=\\frac{2(k+1)}{2}$$

$$\\frac{k(k+1)}{2}+\\frac{2(k+1)}{2}=\\frac{k(k+1)+2(k+1)}{2}$$

$$k(k+1)+2(k+1)=(k+1)(k+2)$$

$$\\frac{(k+1)(k+2)}{2}$$

which is $P(k+1)$.

So the statement is True.`,
      `**E.** → True

Substitute $n=10$:

$$10+1=11$$

$$10\\cdot 11=110$$

$$\\frac{110}{2}=55$$

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

Original: $I\\Rightarrow U$ (inflation up $\\Rightarrow$ unemployment down). The claim “for $U$, inflation must increase” is $U\\Rightarrow I$, the converse. Not equivalent.

So the statement is False.`,
      `**B.** → True

“Sufficient for $U$ that $I$” means $I\\Rightarrow U$, which is exactly the original.

So the statement is True.`,
      `**C.** → False

“$U$ only if $I$” means $U\\Rightarrow I$, again the converse. Not equivalent.

So the statement is False.`,
      `**D.** → True

Contrapositive of $I\\Rightarrow U$:

$$\\neg U\\Rightarrow\\neg I$$

which matches the claim. Equivalent.

So the statement is True.`,
      `**E.** → True

“Necessary for $I$ that $U$” means $I\\Rightarrow U$, the original. Equivalent.

So the statement is True.`,
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

From (1) and (3):

$$D_{202}\\Rightarrow C_{305}$$

$$D_{202}$$

$$C_{305}$$

So the statement is True.`,
      `**B.** → True

From letter A and (2):

$$C_{305}\\Rightarrow O$$

$$C_{305}$$

$$O$$

So the statement is True.`,
      `**C.** → True

Without (2), we only reach $C_{305}$ from (1) and (3). Overtime $O$ is not forced. So (2) is essential for the overtime conclusion.

So the statement is True.`,
      `**D.** → False

Statement (1) is $D_{202}\\Rightarrow C_{305}$. Its converse would be $\\neg D_{202}\\Rightarrow\\neg C_{305}$, which is not given. A non-delay does not guarantee that 305 runs.

So the statement is False.`,
      `**E.** → False

From (1)–(3), modus ponens forces $C_{305}$ and then $O$. Every model of the three premises has overtime, so no counter-scenario exists.

So the statement is False.`,
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

Original: $S\\Rightarrow P$. Negation:

$$\\neg(S\\Rightarrow P)\\equiv S\\wedge\\neg P$$

So the statement is True.`,
      `**B.** → False

An implication does not entail its converse $P\\Rightarrow S$.

So the statement is False.`,
      `**C.** → True

Anna: $\\neg S$ and $P$. That falsifies $P\\Rightarrow S$, so it counters the converse.

So the statement is True.`,
      `**D.** → False

Inverse $\\neg S\\Rightarrow\\neg P$ is equivalent to the converse, not to the contrapositive. The contrapositive is $\\neg P\\Rightarrow\\neg S$, which matches the original.

So the statement is False.`,
      `**E.** → True

Contrapositive:

$$\\neg P\\Rightarrow\\neg S$$

From not passing, conclude studied less than $10$ hours.

So the statement is True.`,
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

“Fails deadline $\\Rightarrow$ penalty” makes missing the deadline sufficient for a penalty.

So the statement is True.`,
      `**B.** → False

The converse is not forced by an implication.

So the statement is False.`,
      `**C.** → True

Contrapositive:

$$\\neg\\mathrm{Penalty}\\Rightarrow\\neg\\mathrm{Missed}$$

equivalent to the original.

So the statement is True.`,
      `**D.** → False

The inverse is not forced by the original.

So the statement is False.`,
      `**E.** → True

Inverse $\\Leftrightarrow$ converse always, and neither needs to match the original.

So the statement is True.`,
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

Without a waiver, need GPA $\\ge 3.5$ and credits $\\ge 60$. For M:

$$3.7\\ge 3.5$$

$$50\\ge 60$$

is false, and there is no waiver. M is not eligible.

So the statement is False.`,
      `**B.** → True

N has a waiver, so only GPA is required:

$$3.6\\ge 3.5$$

N is eligible.

So the statement is True.`,
      `**C.** → True

If M received a waiver with the same GPA $3.7\\ge 3.5$, only the GPA gate remains, so M would be eligible.

So the statement is True.`,
      `**D.** → False

A waiver drops only the credit-hour requirement. GPA below $3.5$ still blocks eligibility.

So the statement is False.`,
      `**E.** → False

Even with a waiver, GPA $\\ge 3.5$ is still required. A GPA below $3.5$ cannot be eligible.

So the statement is False.`,
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

Payout iff $(\\mathrm{Med}\\vee\\mathrm{Airline})\\wedge\\mathrm{Early}$. For M:

$$\\mathrm{Med}=\\mathrm{T}$$

$$\\mathrm{Early}=\\mathrm{T}$$

$$(\\mathrm{Med}\\vee\\mathrm{Airline})=\\mathrm{T}$$

$$\\mathrm{T}\\wedge\\mathrm{T}=\\mathrm{T}$$

M is paid.

So the statement is True.`,
      `**B.** → False

For N:

$$\\mathrm{Airline}=\\mathrm{T}$$

$$\\mathrm{Early}=\\mathrm{F}$$

$$(\\mathrm{Med}\\vee\\mathrm{Airline})=\\mathrm{T}$$

$$\\mathrm{T}\\wedge\\mathrm{F}=\\mathrm{F}$$

N is not paid.

So the statement is False.`,
      `**C.** → True

If $\\mathrm{Early}$ fails, the outer conjunction fails no matter what the cancellation reason is. No payout.

So the statement is True.`,
      `**D.** → False

Early purchase alone leaves $(\\mathrm{Med}\\vee\\mathrm{Airline})$ possibly false. Not sufficient.

So the statement is False.`,
      `**E.** → False

Without Med and without Early, need Airline for the first disjunct, but Early still fails, so the conjunction fails. Impossible.

So the statement is False.`,
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

Negation of $C\\Rightarrow V$:

$$C\\wedge\\neg V$$

So the statement is True.`,
      `**B.** → True

Contrapositive $\\neg V\\Rightarrow\\neg C$ is valid reasoning from ineligibility to non-citizenship.

So the statement is True.`,
      `**C.** → False

Not casting a vote is not the same as being ineligible. Maria can be a citizen and eligible yet not vote. Not a counterexample to $C\\Rightarrow V$.

So the statement is False.`,
      `**D.** → True

The converse $V\\Rightarrow C$ can fail if non-citizens are granted voting rights.

So the statement is True.`,
      `**E.** → True

Inverse $\\neg C\\Rightarrow\\neg V$ is equivalent to the converse, so they share a truth value.

So the statement is True.`,
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

The memo uses $M\\Rightarrow S$ and $S$ to conclude $M$. That affirms the consequent and is invalid.

So the statement is False.`,
      `**B.** → False

The restatement uses $M\\Rightarrow S$ and $\\neg M$ to conclude $\\neg S$. That denies the antecedent and is also invalid.

So the statement is False.`,
      `**C.** → True

The restatement uses $M\\Rightarrow S$ and $\\neg S$ to conclude $\\neg M$. That is modus tollens (contrapositive form) and is valid.

So the statement is True.`,
      `**D.** → True

A biconditional $M\\Leftrightarrow S$ would let $S$ recover $M$.

So the statement is True.`,
      `**E.** → True

Same affirming-the-consequent pattern as inferring rain from “if rain then wet” and “ground is wet.”

So the statement is True.`,
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

Zero is rational, so the pair counters the universal claim.

So the statement is True.`,
      `**B.** → True

One counterexample falsifies a universal.

So the statement is True.`,
      `**C.** → True

Contradiction proofs assume a largest prime $p$ and derive a larger prime.

So the statement is True.`,
      `**D.** → False

Checking $x=1$ and $x=2$ does not prove a universal.

So the statement is False.`,
      `**E.** → True

One witness proves an existential.

So the statement is True.`,
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

“Lives in water $\\Rightarrow$ fish” is the converse of “fish $\\Rightarrow$ lives in water.” Affirming the consequent is invalid.

So the statement is True.`,
      `**B.** → True

“Not in water $\\Rightarrow$ not a fish” is the contrapositive — valid.

So the statement is True.`,
      `**C.** → False

“Not a fish $\\Rightarrow$ not in water” is the inverse and is not valid reasoning from the rule.

So the statement is False.`,
      `**D.** → True

Negation of $\\forall x\\,(F(x)\\Rightarrow W(x))$ is $\\exists x\\,(F(x)\\wedge\\neg W(x))$.

So the statement is True.`,
      `**E.** → False

Dolphins live in water without being fish; that counters the converse, not “all fish live in water.”

So the statement is False.`,
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

Negation of $P\\Rightarrow D$ is $P\\wedge\\neg D$, not $P\\wedge D$.

So the statement is False.`,
      `**B.** → False

The converse is not forced.

So the statement is False.`,
      `**C.** → True

Alex: $\\neg P$ and $\\neg D$. The original $P\\Rightarrow D$ is vacuously safe.

So the statement is True.`,
      `**D.** → False

The inverse is not forced by the original.

So the statement is False.`,
      `**E.** → False

The contrappositive $\\neg D\\Rightarrow\\neg P$ is equivalent to the original, so it is guaranteed.

So the statement is False.`,
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

Negation of $R\\Rightarrow A$ is $R\\wedge\\neg A$, not another implication.

So the statement is False.`,
      `**B.** → False

Converse not forced.

So the statement is False.`,
      `**C.** → False

Inverse not equivalent to the original.

So the statement is False.`,
      `**D.** → True

Contrapositive $\\neg A\\Rightarrow\\neg R$ is equivalent.

So the statement is True.`,
      `**E.** → True

Company X: revenue $\\$2$M and no audit is $R\\wedge\\neg A$, which falsifies $R\\Rightarrow A$.

So the statement is True.`,
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

License iff hours and written and practical. Pilot A failed practical:

$$\\mathrm{Practical}=\\mathrm{F}$$

so the conjunction fails. A is not granted.

So the statement is False.`,
      `**B.** → False

Pilot B has only $240$ hours:

$$240\\ge 250$$

is false. B is not granted.

So the statement is False.`,
      `**C.** → False

Hours alone omit written and practical. Not sufficient.

So the statement is False.`,
      `**D.** → True

Failing practical falsifies one conjunct, so the license cannot be granted.

So the statement is True.`,
      `**E.** → True

Pilot A has $300>250$ hours yet is not granted — such a pilot exists.

So the statement is True.`,
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

Approval iff $(\\mathrm{score}\\ge 700\\vee\\mathrm{cosign})\\wedge(\\mathrm{DTI}<40\\%)$. For P:

$$650\\ge 700$$

is false, but

$$\\mathrm{cosign}=\\mathrm{T}$$

$$35<40$$

so

$$(\\mathrm{F}\\vee\\mathrm{T})\\wedge\\mathrm{T}=\\mathrm{T}$$

P is approved. The claim that P is not approved is false.

So the statement is False.`,
      `**B.** → False

For Q:

$$720\\ge 700$$

$$45<40$$

is false. The conjunction fails. Q is not approved.

So the statement is False.`,
      `**C.** → False

Score $\\ge 700$ still needs $\\mathrm{DTI}<40\\%$. Not always approved.

So the statement is False.`,
      `**D.** → True

If $\\mathrm{DTI}\\ge 40\\%$, the second conjunct fails, so approval is impossible.

So the statement is True.`,
      `**E.** → True

P is exactly such an applicant: score below $700$, co-signer, $\\mathrm{DTI}<40\\%$, and approved.

So the statement is True.`,
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

Sam: $\\neg\\mathrm{Dessert}$ and $\\mathrm{Point}$. That falsifies the converse $\\mathrm{Point}\\Rightarrow\\mathrm{Dessert}$.

So the statement is True.`,
      `**B.** → True

Contradiction proof of “not every point-earner ordered dessert” assumes every point-earner ordered dessert.

So the statement is True.`,
      `**C.** → False

The original $D\\Rightarrow\\mathrm{Point}$ is not falsified by getting a point without dessert.

So the statement is False.`,
      `**D.** → True

Negation of $D\\Rightarrow\\mathrm{Point}$ needs a diner with dessert and no point.

So the statement is True.`,
      `**E.** → True

Sam directly falsifies the inverse $\\neg D\\Rightarrow\\neg\\mathrm{Point}$.

So the statement is True.`,
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

For $m=4$:

$$4\\cdot n=100$$

$$n=\\frac{100}{4}$$

$$n=25$$

$$25\\in\\mathbb{Z}^{+}$$

so a witness exists.

So the statement is True.`,
      `**B.** → False

For $m=3$:

$$3\\cdot n=100$$

$$n=\\frac{100}{3}$$

which is not an integer. No positive integer $n$ works.

So the statement is False.`,
      `**C.** → False

Since $m=3$ fails, the universal “for every $m$” is false.

So the statement is False.`,
      `**D.** → True

Negation of $\\forall m\\,\\exists n\\,(mn=100)$ is

$$\\exists m\\,\\forall n\\,(mn\\neq 100)$$

So the statement is True.`,
      `**E.** → True

A single $n$ cannot satisfy $m\\cdot n=100$ for every positive $m$. The reversed quantifiers are also false.

So the statement is True.`,
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

Clue (3) states Dan is guilty. With exactly one guilty party, Dan is the culprit.

So the statement is True.`,
      `**B.** → False

If Ann were guilty, (1) would force Dan innocent, contradicting (3). So Ann is not guilty.

So the statement is False.`,
      `**C.** → False

From (3) and exactly one guilty, Cara is already innocent without (2). So (2) is not essential for Cara’s innocence.

So the statement is False.`,
      `**D.** → True

Ann is innocent, so (1)’s antecedent is false and (1) is vacuously true — it adds no new constraint once Ann is cleared.

So the statement is True.`,
      `**E.** → True

Clue (3) alone asserts Dan is guilty, even without the uniqueness premise.

So the statement is True.`,
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

If Y were a truth-teller, then “X and I are both liars” would be true, forcing Y to be a liar — contradiction. So Y is a liar. Then X’s “Y always lies” is true, so X is a truth-teller.

So the statement is True.`,
      `**B.** → False

From letter A, Y is a liar.

So the statement is False.`,
      `**C.** → True

Y’s sentence claims both are liars, but X is a truth-teller, so the sentence is false.

So the statement is True.`,
      `**D.** → False

The unique consistent assignment is X truth-teller, Y liar.

So the statement is False.`,
      `**E.** → True

If X were a liar, then “Y always lies” is false, so Y is a truth-teller. Then Y’s sentence is true, forcing both liars — contradiction.

So the statement is True.`,
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

$$\\exists s\\,\\forall e\\,G(s,e) \\quad\\Longrightarrow\\quad \\forall e\\,G(s_0,e)$$

For each exam $e$, choose that same $s_0$ as the witness to $\\exists s\\,G(s,e)$. Therefore

$$\\exists s\\,\\forall e\\,G(s,e) \\quad\\Longrightarrow\\quad \\forall e\\,\\exists s\\,G(s,e)$$

Statement 1 implies Statement 2.

So the statement is True.`,
      `**B.** → False

Disprove the implication with a quantifier countermodel. Use students $X,Y$ and exams $e_1,e_2$, with

$$G(X,e_1) = \\mathrm{T},\\quad G(X,e_2)$$

$$= \\mathrm{F},$$

$$G(Y,e_1) = \\mathrm{F},\\quad G(Y,e_2)$$

$$= \\mathrm{T}$$

Every exam has a witness—$X$ for $e_1$ and $Y$ for $e_2$—so $\\forall e\\,\\exists s\\,G(s,e)$ is true. Neither student clears both exams, so $\\exists s\\,\\forall e\\,G(s,e)$ is false. The reverse implication has a true premise and false conclusion in this model.

So the statement is False.`,
      `**C.** → False

Logical equivalence requires both implications. The forward direction holds by reusing Statement 1’s witness:

$$\\exists s\\,\\forall e\\,G(s,e) \\quad\\Longrightarrow\\quad \\forall e\\,\\exists s\\,G(s,e)$$

For the reverse direction, let $X$ clear only $e_1$ and $Y$ clear only $e_2$. Then

$$\\forall e\\,\\exists s\\,G(s,e) = \\mathrm{T},$$

$$\\exists s\\,\\forall e\\,G(s,e)$$

$$= \\mathrm{F}$$

One direction fails in this concrete model, so the formulas are not equivalent.

So the statement is False.`,
      `**D.** → True

This is an existence claim, so one class is enough. Take two exams and two students: $X$ scores above $90$ only on $e_1$, while $Y$ scores above $90$ only on $e_2$. Then

$$\\underbrace{G(X,e_1)}_{X\\text{ witnesses }e_1},$$

$$\\underbrace{G(Y,e_2)}_{Y\\text{ witnesses }e_2}$$

Thus every exam has some high scorer. But $X$ fails $e_2$ and $Y$ fails $e_1$, so no single student is a witness for every exam. This class realizes Statement 2 without Statement 1.

So the statement is True.`,
      `**E.** → True

Let the exam domain be the singleton $\\{e_1\\}$. A universal over that one value has only one case, so Statement 1 becomes

$$\\exists s\\,\\forall e\\in\\{e_1\\}\\,G(s,e) \\equiv \\exists s\\,G(s,e_1)$$

Statement 2 becomes

$$\\forall e\\in\\{e_1\\}\\,\\exists s\\,G(s,e) \\equiv \\exists s\\,G(s,e_1)$$

Both quantifier orders reduce to the same formula.

So the statement is True.`,
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

Yes votes: R1, R2 — exactly two, and R1 is among them. The tie-break clause approves.

So the statement is True.`,
      `**B.** → False

Yes votes R2, R3 — exactly two, but R1 is not among them. Neither clause fires. Not approved.

So the statement is False.`,
      `**C.** → True

Any three yes votes meet the “at least three” clause.

So the statement is True.`,
      `**D.** → False

Three yes votes among R2,R3,R4 approve without R1. So R1’s yes is not always necessary.

So the statement is False.`,
      `**E.** → True

The R2+R3 scenario has exactly two yes votes and no approval.

So the statement is True.`,
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

Commercial use with approval but no annual service fails the exception’s servicing requirement. Warranty is void.

So the statement is True.`,
      `**B.** → False

Approval alone is not enough — annual servicing is also required.

So the statement is False.`,
      `**C.** → True

The exception needs both approval and annual servicing.

So the statement is True.`,
      `**D.** → False

Without approval, commercial use voids the warranty; annual service does not replace approval.

So the statement is False.`,
      `**E.** → False

The servicing clause appears only inside the commercial-use exception. Non-commercial use does not trigger it.

So the statement is False.`,
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
      `A "proof" of "√3 is irrational" that begins "Assume √3 is irrational." and proceeds from there is a valid proof by contradiction.`,
      `The negation of "All flights are delayed and all trains are on time" is "No flight is delayed and no train is on time."`,
      `For "Some employee always arrives late" (some employee is late every day), the correct negation is "All employees are never late."`,
      `One satisfying value proves an existential claim; a universal claim needs an argument for an arbitrary value, not a finite check.`,
    ],
    answer_key: [true, false, false, false, true],
    tactical_explanations: [
      `**A.** → True

Assuming a least positive $x$ and forming $x/2$ yields a smaller positive — a correct contradiction setup.

So the statement is True.`,
      `**B.** → False

Assuming the claim (“√3 irrational”) begs the question; contradiction proofs assume the opposite.

So the statement is False.`,
      `**C.** → False

Negation of $A\\wedge B$ is $\\neg A\\vee\\neg B$, not $\\neg A\\wedge\\neg B$.

So the statement is False.`,
      `**D.** → False

Negation of “some employee is always late” is “every employee is on time on some day,” not a swapped quantifier mess.

So the statement is False.`,
      `**E.** → True

One witness proves $\\exists$; a universal needs a general argument.

So the statement is True.`,
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

From “all economists study behavior” and “some economists do game theory,” those game theorists study behavior. Valid.

So the statement is True.`,
      `**B.** → False

Changing Premise 2 to “no economists do game theory” removes the existential witness; the conclusion no longer follows.

So the statement is False.`,
      `**C.** → True

Validity is about form, not whether premises are true in the real world.

So the statement is True.`,
      `**D.** → True

Validity can hold with false premises; soundness would fail.

So the statement is True.`,
      `**E.** → False

This is a valid categorical syllogism, not affirming the consequent.

So the statement is False.`,
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

$Score>30$ and loss falsifies $Score>30\\Rightarrow Win$.

So the statement is True.`,
      `**B.** → True

The same game witnesses $\\exists$ (score$>30$ and not win).

So the statement is True.`,
      `**C.** → True

A false implication has a false contrappositive as well.

So the statement is True.`,
      `**D.** → False

Converse may still be true or false independently; falsity of the original does not decide it.

So the statement is False.`,
      `**E.** → True

Inverse $\\Leftrightarrow$ converse, so they share a truth value.

So the statement is True.`,
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

Curve applied, so threshold $60$. Score $65\\ge 60$, so W gets B or higher.

So the statement is True.`,
      `**B.** → False

Without the curve, threshold $70$. Score $65<70$, so W would not get B or higher.

So the statement is False.`,
      `**C.** → True

The curve replaces $70$ with $60$, a strictly lower threshold.

So the statement is True.`,
      `**D.** → True

Score $62$ is below $70$ but at least $60$, so it needs the curve.

So the statement is True.`,
      `**E.** → False

Under a curve, $70$ is no longer necessary — $60$ suffices. The iff is not absolute under all circumstances.

So the statement is False.`,
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

$$15 = 3 \\times 5,$$

$$28$$

$$= 2^{2} \\times 7$$

The prime lists $\\{3,5\\}$ and $\\{2,7\\}$ are disjoint, so $\\mathrm{gcd}(15,28)=1$. Pair 1 is coprime and therefore meets the even-wear test.

That matches the claim.

So the statement is True.`,
      `**B.** → False

Factor Pair 2:

$$24 = 2^{3} \\times 3,$$

$$36$$

$$= 2^{2} \\times 3^{2}$$

Both $2$ and $3$ appear on each side. Taking the smaller power of each shared prime gives

$$\\mathrm{gcd}(24,36) = 2^{2} \\times 3$$

$$= 12 \\ne 1$$

Pair 2 is not coprime.

So the statement is False.`,
      `**C.** → True

Coprime means that every prime fails to divide at least one of the two numbers:

$$\\forall p\\,\\bigl(\\mathrm{Prime}(p)\\Rightarrow(p\\nmid m\\lor p\\nmid n)\\bigr)$$

Negating the universal flips the quantifier and both failures:

$$\\exists p\\,\\bigl(\\mathrm{Prime}(p)\\land p\\mid m\\land p\\mid n\\bigr)$$

That is exactly the quoted negation.

So the statement is True.`,
      `**D.** → True

Proof by contradiction starts by assuming the forbidden combination. If both numbers were even, then

$$2\\mid m$$

and

$$2\\mid n$$

so they would share the prime factor $2$:

$$\\mathrm{gcd}(m,n)\\ge2$$

This contradicts $\\mathrm{gcd}(m,n)=1$. A coprime pair cannot contain two even numbers.

So the statement is True.`,
      `**E.** → False

Disprove the universal claim with one counterexample. Pair 1 has two composite numbers:

$$15 = 3\\times5,$$

$$28$$

$$= 2^{2}\\times7$$

Their prime-factor sets are disjoint, so

$$\\mathrm{gcd}(15,28)=1$$

Thus a coprime pair greater than $1$ can contain no prime number at all. This pair refutes “every coprime pair includes a prime,”.

So the statement is False.`,
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

Cancel at $2$ days $<3$, so the subscription still renews.

So the statement is True.`,
      `**B.** → False

Refund requires usage $<10\\%$. Usage $15\\%$ fails, so no refund.

So the statement is False.`,
      `**C.** → True

With usage $5\\%<10\\%$ and late cancel, the refund biconditional pays.

So the statement is True.`,
      `**D.** → True

Cancel at $4$ days $\\ge 3$: no renewal and no charge; usage is irrelevant.

So the statement is True.`,
      `**E.** → False

The refund clause applies only to the late-cancel branch, not to early cancels.

So the statement is False.`,
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

Negation of $F\\Rightarrow A$ is $F\\wedge\\neg A$.

So the statement is True.`,
      `**B.** → False

Exactly $38.0$ is not above $38$, so the antecedent fails; not a counterexample.

So the statement is False.`,
      `**C.** → True

The inverse can fail independently of the original.

So the statement is True.`,
      `**D.** → False

The converse is not guaranteed by the original.

So the statement is False.`,
      `**E.** → True

Contradiction proof of “not every antibiotic patient has fever $>38$” assumes every such patient does.

So the statement is True.`,
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

Length $12$ yet not strong falsifies “length$\\ge 12\\Rightarrow$ strong.”

So the statement is True.`,
      `**B.** → True

Converse is a separate claim.

So the statement is True.`,
      `**C.** → False

An $8$-character weak password does not touch the policy’s antecedent.

So the statement is False.`,
      `**D.** → False

Inverse $\\Leftrightarrow$ converse, not the original.

So the statement is False.`,
      `**E.** → False

Contrapositive of a false implication is also false; it is determined.

So the statement is False.`,
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

$$x = 317,$$

$$A(317)$$

$$= \\mathrm{F}$$

Because chip #$317$ belongs to Batch $12$,

$$\\exists x\\in\\text{Batch 12}\\,\\neg A(x)$$

is true, which falsifies $\\forall x\\in\\text{Batch 12}\\,A(x)$. The other $499$ chips cannot repair a failed universal.

So the statement is True.`,
      `**B.** → False

The manager's claim is $\\forall x\\, A(x)$ on Batch $12$. Negating a universal produces an existential:

$$\\neg \\forall x\\, A(x) \\equiv \\exists x\\, \\neg A(x)$$

In words: at least one chip fails. The quoted sentence "all chips fail" is $\\forall x\\, \\neg A(x)$, which needs all $500$ failures. Chip #$317$ already witnesses the existential without a clean sweep.

So the statement is False.`,
      `**C.** → True

Use vacuous truth. The universal can fail only if there is a counterexample chip in Batch $13$:

$$\\neg\\forall x\\, \\bigl(B_{13}(x)\\Rightarrow A(x)\\bigr) \\equiv \\exists x\\, \\bigl(B_{13}(x)\\land\\neg A(x)\\bigr)$$

But Batch $13$ contains zero chips, so there is no value $x$ with $B_{13}(x)=\\mathrm{T}$. No counterexample witness exists, and the universal is therefore vacuously true.

So the statement is True.`,
      `**D.** → False

Quantifier order determines whether the defect code may depend on the failed chip. The first sentence is

$$\\forall f\\,\\exists c\\,E(c,f)$$

The second sentence is

$$\\exists c\\,\\forall f\\,E(c,f)$$

With two failures $f_1,f_2$, code $c_1$ may explain only $f_1$ and code $c_2$ only $f_2$. Then the first formula is true, but no single code serves both failures, so the second is false. The sentences are not equivalent.

So the statement is False.`,
      `**E.** → True

An existential claim is established by one witness. Choose the reported chip:

$$x=317$$

It has both required properties:

$$B_{12}(317) = \\mathrm{T},$$

$$\\neg A(317)$$

$$= \\mathrm{T}$$

Hence $317$ witnesses $\\exists x\\,(B_{12}(x)\\land\\neg A(x))$. No information about the remaining chips is needed.

So the statement is True.`,
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

$$6\\mid n \\quad\\Longrightarrow\\quad n = 6k$$

$$= 3(2k) \\quad\\Longrightarrow\\quad 3\\mid n$$

Thus $6\\mid n$ always forces the opposite of $3\\nmid n$. There is not even one witness to $6\\mid n\\land3\\nmid n$, much less infinitely many.

So the statement is False.`,
      `**B.** → True

One truth assignment separates an implication from its converse.

$$(p,q)=(F,T)$$

$$p\\rightarrow q$$

$$= F\\rightarrow T$$

$$= T$$

$$q\\rightarrow p$$

$$= T\\rightarrow F$$

$$= F$$

The two implications disagree on this assignment.

So the statement is True.`,
      `**C.** → True

One truth assignment separates an implication from its converse.

$$(p,q)=(F,T)$$

$$p\\rightarrow q$$

$$= F\\rightarrow T$$

$$= T$$

$$q\\rightarrow p$$

$$= T\\rightarrow F$$

$$= F$$

The two implications disagree on this assignment.

So the statement is True.`,
      `**D.** → False

Prove the contrapositive for an arbitrary integer. Assume $3\\nmid n$. If $6\\mid n$ also held, then for some integer $k$,

$$n = 6k$$

$$= 3(2k),$$

which would give $3\\mid n$, contradicting the assumption. Therefore

$$3\\nmid n\\quad\\Longrightarrow\\quad6\\nmid n$$

for every integer $n$. No counterexample value exists, so the claim that the contrapositive is false for some integer is wrong.

So the statement is False.`,
      `**E.** → False

One truth assignment separates an implication from its converse.

$$(p,q)=(F,T)$$

$$p\\rightarrow q$$

$$= F\\rightarrow T$$

$$= T$$

$$q\\rightarrow p$$

$$= T\\rightarrow F$$

$$= F$$

The two implications disagree on this assignment.

So the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `The original statement is $6 \\mid n \\Rightarrow 3 \\mid n$. If $6 \\mid n$, write

$$n=6k$$

$$=3(2k)$$

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

Hypothesis true and conclusion true. The rule applies in the stated direction.

$$1234^2$$

So the statement is True.`,
      `**B.** → False

Write $E(k)$ for “$k$ is even.” The rule and its contrapositive are

$$E(n^{2})\\Rightarrow E(n),$$

$$\\neg E(n)\\Rightarrow\\neg E(n^{2})$$

Thus a contraposition proof assumes $n$ is odd and derives that $n^{2}$ is odd. The proposed plan instead proves

$$E(n)\\Rightarrow E(n^{2}),$$

which reverses the original arrow and is its converse. It is not a proof by contraposition of the stated rule.

So the statement is False.`,
      `**C.** → True

The given square $4321^{2}=18{,}671{,}041$ is odd. Direct parity check:

$$2\\cdot 2160=4320$$

$$4320+1=4321$$

so $4321$ is odd. Hypothesis true and conclusion true.

So the statement is True.`,
      `**D.** → False

One truth assignment separates an implication from its converse.

$$(p,q)=(F,T)$$

$$p\\rightarrow q$$

$$= F\\rightarrow T$$

$$= T$$

$$q\\rightarrow p$$

$$= T\\rightarrow F$$

$$= F$$

The two implications disagree on this assignment.

So the statement is False.`,
      `**E.** → True

A contradiction proof of $E(n^{2})\\Rightarrow E(n)$ assumes $n^{2}$ even and $n$ odd. Write

$$n=2k+1$$

$$n^{2}=(2k+1)^{2}$$

$$(2k+1)^{2}=4k^{2}+4k+1$$

$$4k^{2}+4k\\text{ is even}$$

$$4k^{2}+4k+1\\text{ is odd}$$

so $n^{2}$ is odd, colliding with the even-square assumption.

So the statement is True.`,
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

Negation of $\\forall$ triangles $T$ with property $R(T)$ is $\\exists T\\,\\neg R(T)$.

So the statement is True.`,
      `**B.** → True

A true universal has a false negation.

So the statement is True.`,
      `**C.** → True

The geometric converse (right triangle inscribed with hypotenuse as diameter) is also a standard theorem.

So the statement is True.`,
      `**D.** → True

When both $P\\Rightarrow Q$ and $Q\\Rightarrow P$ hold, we have $P\\Leftrightarrow Q$.

So the statement is True.`,
      `**E.** → False

Inverse is not always equivalent to the original; here the inverse need not follow from Thales alone.

So the statement is False.`,
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
    title: `A number-theory theorem states: "If a number is a perfect square, then it has an odd number of positive divisors."`,
    subsection: `1.4`,
    context: `A number-theory theorem states: "If a number is a perfect square, then it has an odd number of positive divisors."`,
    statements: [
      `The correctly formed negation of the theorem is: "A number is a perfect square and it has an even number of divisors."`,
      `36 is a perfect square with divisors $\\{1,2,3,4,6,9,12,18,36\\}$ - 9 divisors (odd), which is consistent with the theorem and not a counterexample to it.`,
      `The converse, "If a number has an odd number of divisors, then it is a perfect square," is also a true statement, so both directions of the implication hold here.`,
      `Since 20 is not a perfect square and has divisors $\\{1,2,4,5,10,20\\}$ (6 divisors, even), 20 is a valid counterexample disproving the original theorem.`,
      `The inverse, "If a number is not a perfect square, it has an even number of divisors," is also true in this case, since the converse is true.`,
    ],
    answer_key: [true, true, true, false, true],
    tactical_explanations: [
      `**A.** → True

Negation of $Sq\\Rightarrow OddDiv$ is $Sq\\wedge\\neg OddDiv$.

So the statement is True.`,
      `**B.** → True

Count divisors of $36$:

$$1,2,3,4,6,9,12,18,36$$

Nine divisors — odd — consistent with the theorem.

So the statement is True.`,
      `**C.** → True

The converse is also a theorem: odd divisor count characterizes squares.

So the statement is True.`,
      `**D.** → False

$20$ not being square with even divisor count is consistent with the theorem, not a counterexample to $Sq\\Rightarrow OddDiv$.

So the statement is False.`,
      `**E.** → True

With both directions true, the inverse matches as well.

So the statement is True.`,
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

From (3), Grace is not a teacher:

$$\\neg G$$

Clue (2) says $F\\Leftrightarrow G$, so

$$F=\\mathrm{F}$$

Clue (1) says $E\\Leftrightarrow\\neg F$. Since $\\neg F$ holds,

$$E=\\mathrm{T}$$

Emma is the doctor.

So the statement is True.`,
      `**B.** → False

Clue (2) alone is only $F\\Leftrightarrow G$. Without a value for $G$, Felix’s job is not fixed. The claim that (2) alone makes Felix the teacher is false.

So the statement is False.`,
      `**C.** → True

Felix is not the engineer. Hugo is the lawyer by (4). Emma is the doctor. The only remaining job for Grace is engineer.

So the statement is True.`,
      `**D.** → True

Drop clue (3) and try $G=\\mathrm{T}$. Then (2) forces $F=\\mathrm{T}$ and (1) forces $E=\\mathrm{F}$. Hugo is the lawyer, Felix the engineer, Grace the teacher — so Emma would have to be the doctor, contradicting $E=\\mathrm{F}$. Thus $G=\\mathrm{T}$ is impossible, and $\\neg G$ is forced even without (3). Clue (3) is redundant.

So the statement is True.`,
      `**E.** → True

From (1)–(3) as in letter A, Emma is already forced to be the doctor before using (4).

So the statement is True.`,
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
    title: `A real-analysis theorem states: "If a sequence converges, then it is bounded."`,
    subsection: `1.4`,
    context: `A real-analysis theorem states: "If a sequence converges, then it is bounded."`,
    statements: [
      `The negation, "a sequence converges and is not bounded," describes an impossible situation, since the theorem holds for every sequence.`,
      `The converse, "If a sequence is bounded, then it converges," is false - the sequence (-1)ⁿ (that is, -1, 1, -1, 1...) is bounded but does not converge, serving as a counterexample.`,
      `The inverse, "If a sequence does not converge, then it is not bounded," is logically equivalent to the converse, and is therefore also false, using the same sequence (-1)ⁿ as its counterexample.`,
      `The contrapositive, "If a sequence is not bounded, then it does not converge," is true, and is in fact the version most commonly used to prove specific unbounded sequences (like n, 2n, $n^2$) do not converge.`,
      `Because the converse is false, the original theorem itself must also be false.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

The theorem forbids a convergent unbounded sequence, so the negation describes an impossibility.

So the statement is True.`,
      `**B.** → True

$(-1)^{n}$ is bounded but does not converge — converse fails.

So the statement is True.`,
      `**C.** → True

Inverse $\\Leftrightarrow$ converse, so the inverse is also false.

So the statement is True.`,
      `**D.** → True

Contrapositive “unbounded $\\Rightarrow$ divergent” is equivalent and true.

So the statement is True.`,
      `**E.** → False

A false converse does not falsify the original theorem.

So the statement is False.`,
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

$$J = \\text{true},$$

$$K$$

$$= L$$

$$= \\text{false}$$

K's sentence "J is lying" is false, which fits K being a liar. But L says that K and L are the same type. Under this assignment they are both liars, so L's sentence is true. A liar cannot make a true statement, and the J-truthful case fails.

Therefore J cannot be a truth-teller and must be a liar.

So the statement is True.`,
      `**B.** → True

The claim says K is a truth-teller. From letter A, J is already forced to be a liar. K's sentence is precisely "J is lying," so its content is true:

$$\\neg J\\quad\\Rightarrow\\quad \\text{K's sentence is true}$$

An islander's type must match the truth value of the sentence spoken. K therefore cannot be a liar while making this true accusation. K is a truth-teller.

So the statement is True.`,
      `**C.** → True

The claim says L is a truth-teller. The shared forcing has J as a liar and K as a truth-teller. Try making L a liar as well:

$$J = \\text{false},$$

$$K$$

$$= \\text{true},$$

$$L$$

$$= \\text{false}$$

Then K would be the only truth-teller. That makes J's sentence, "Exactly one of us is a truth-teller," true. But J is already forced to be a liar, so this case is impossible.

The only alternative is $L=\\text{true}$. With K and L both truth-tellers, L's "same type" sentence is indeed true.

So the statement is True.`,
      `**D.** → False

From letters A–C the forced types are:

$$J\\text{ is a liar}$$

$$K\\text{ is a truth-teller}$$

$$L\\text{ is a truth-teller}$$

Count the truth-tellers:

$$0+1=1$$

$$1+1=2$$

Exactly two inhabitants are truth-tellers, not one. So the claim is false.

So the statement is False.`,
      `**E.** → False

The claim needs a second assignment, so split first on J's type. If J is truthful, J's sentence makes K and L liars, but then L truthfully says that K and L are the same type. That branch fails.

If J is a liar, K's accusation "J is lying" is true, so K must be truthful. Now split on L. If L is a liar, K is the unique truth-teller, which makes J's sentence true and breaks J's liar type. Hence L must be truthful:

$$J = \\text{liar},$$

$$K$$

$$= L$$

$$= \\text{truth-teller}$$

In this assignment J's sentence is false, K's is true, and L's is true, so it survives. Every alternative case has failed, leaving no second assignment.

So the statement is False.`,
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

$$(4)$$

$$D$$

The other rules can restrict Ana, Boris, and Ceci, but none can cancel an explicit fact. For example, $\\{A,C,D\\}$ obeys (1) and (2), and Ana's presence activates the exception in (3), so rule (4) is consistent with the system. Dmitri is in every solution.

So the statement is True.`,
      `**B.** → False

The claim says the rules force one truth value for Ana. Test both values.

If $A$ is true, rule (1) gives $\\neg B$, and rule (2) then gives $C$:

$$A\\Rightarrow\\neg B\\Rightarrow C$$

Rule (4) gives $D$. Because Ana attends, the exception in rule (3) applies, so Ceci and Dmitri may attend together. Thus $\\{A,C,D\\}$ is legal.

If $A$ is false, choose $B$ true and $C$ false. Rules (1) and (2) are idle, rule (3) has false hypothesis $C\\land\\neg A$, and rule (4) gives $D$. Thus $\\{B,D\\}$ is also legal. Ana is in one valid roster and out of another.

So the statement is False.`,
      `**C.** → True

The claim only needs one valid roster with exactly three attendees. Start with Ana attending. Rule (1) forces Boris out, and then rule (2) forces Ceci in:

$$A\\Rightarrow\\neg B\\Rightarrow C$$

Rule (4) puts Dmitri in. Rule (3) normally acts when $C\\land\\neg A$ holds, but here $A$ is true, so its "unless Ana attends" exception leaves Dmitri unrestricted. The roster is

$$\\{A,C,D\\},$$

$$|\\{A,C,D\\}|=3.$$

This is a legal witness for the existence claim.

So the statement is True.`,
      `**D.** → False

The claim requires a solution with both Ana and Boris absent. Assume

$$\\neg A\\land\\neg B.$$

Rule (2) turns $\\neg B$ into $C$. Since Ana is absent, the exception in rule (3) is unavailable, so $C\\land\\neg A$ forces Dmitri out:

$$\\neg B\\overset{(2)}{\\Rightarrow}C,$$

$$C\\land\\neg A\\overset{(3)}{\\Rightarrow}\\neg D.$$

But rule (4) requires $D$. The attempted assignment forces both $D$ and $\\neg D$, so Ana and Boris cannot both be absent.

So the statement is False.`,
      `**E.** → False

The claim says replacing rule (3) by the stricter implication would destroy every solution:

$$(3')$$

$$C\\Rightarrow\\neg D.$$

Rule (4) still gives $D$, so the contrapose of (3') forces $\\neg C$. The contrapose of rule (2), $\\neg C\\Rightarrow B$, then puts Boris in. Choose Ana out:

$$\\neg A,$$

$$B,$$

$$\\neg C,$$

$$D.$$

This is the roster $\\{B,D\\}$. Rule (1) is idle because Ana is out, rule (2) is idle because Boris is in, (3') is idle because Ceci is out, and (4) holds. At least one solution survives the stricter rule.

So the statement is False.`,
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

$$(4)$$

$$Z\\Rightarrow\\neg N.$$

Take its contrapositive by negating and reversing both sides:

$$\\neg(\\neg N)\\Rightarrow\\neg Z,$$

so

$$N\\Rightarrow\\neg Z.$$

Thus any roster with Noah must omit Zoe, exactly as claimed.

So the statement is True.`,
      `**B.** → False

The claim requires a valid roster containing both Leo and Noah. Assume $L\\land N$. Rule (2), "Leo joins only if Zoe joins," means

$$(2)$$

$$L\\Rightarrow Z.$$

Rule (4) then sends Zoe's attendance to Noah's absence:

$$L\\overset{(2)}{\\Rightarrow}Z \\overset{(4)}{\\Rightarrow}\\neg N.$$

This contradicts the assumed $N$. Rules (2) and (4) therefore forbid Leo and Noah from joining together.

So the statement is False.`,
      `**C.** → True

The claim needs one solution with Maria in and Leo out. Try the roster with Maria alone:

$$N = 0,$$

$$M$$

$$= 1,$$

$$L$$

$$= 0,$$

$$Z$$

$$= 0.$$

Rule (1) is satisfied because its hypothesis $N$ is false. Rule (2) is satisfied because Leo is out. Rule (3), $M\\lor L$, holds through Maria. Rule (4) is satisfied because Zoe is out.

Thus $\\{M\\}$ is a legal roster with Maria joining and Leo not joining.

So the statement is True.`,
      `**D.** → True

The claim asks whether Maria's absence forces Noah's absence. Rule (1) is

$$(1)$$

$$N\\Rightarrow M.$$

Its contrapositive reverses the implication and negates both parts:

$$\\neg M\\Rightarrow\\neg N.$$

If Maria is out, Noah cannot be in, because Noah's presence would immediately require Maria by rule (1). This is exactly the claimed consequence.

So the statement is True.`,
      `**E.** → False

The claim says every legal roster includes Zoe. To disprove a "must" claim, it is enough to build one legal roster with $\\neg Z$.

Let Maria join alone:

$$\\{M\\},$$

$$N = L$$

$$= Z$$

$$= 0.$$

With Noah out, rule (1) is idle. With Leo out, rule (2) is idle. Maria satisfies rule (3), $M\\lor L$, and Zoe's absence makes rule (4) idle. This valid roster omits Zoe.

So the statement is False.`,
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

$$B\\overset{(1)}{\\Rightarrow}C \\overset{(3)}{\\Rightarrow}\\neg D.$$

There is no branch in which Ben plays without Carla, and no branch in which Carla and Dan both play. Therefore Ben playing always forces Dan out.

So the statement is True.`,
      `**B.** → False

The claim requires a legal roster with both Ben and Dan. Assume $B\\land D$. By rule (1), Ben forces Carla in:

$$B\\overset{(1)}{\\Rightarrow}C.$$

Then rule (3) forces Dan out:

$$C\\overset{(3)}{\\Rightarrow}\\neg D.$$

The attempted roster contains $D$ and also forces $\\neg D$. Ella's status cannot repair that collision, so Ben and Dan cannot play together.

So the statement is False.`,
      `**C.** → True

The claim needs one valid roster in which Ella is the only player. Assign

$$B = 0,$$

$$C$$

$$= 0,$$

$$D$$

$$= 0,$$

$$E$$

$$= 1.$$

Rules (1), (2), and (3) all have false hypotheses, so none forces another player in. Rule (4), $B\\lor E$, is satisfied by Ella. Hence $\\{E\\}$ is a legal one-person roster.

So the statement is True.`,
      `**D.** → True

The claim asks whether Dan playing forces Carla out. Rule (3) says

$$(3)$$

$$C\\Rightarrow\\neg D.$$

Its contrapositive negates and reverses the two parts:

$$\\neg(\\neg D)\\Rightarrow\\neg C,$$

which simplifies to

$$D\\Rightarrow\\neg C.$$

Thus any roster containing Dan must omit Carla, exactly as claimed.

So the statement is True.`,
      `**E.** → False

The claim says Carla appears in every legal roster. Test Carla's absence by letting Ella play alone:

$$\\{E\\},$$

$$B = C$$

$$= D$$

$$= 0.$$

Ben's absence makes rule (1) idle. Dan's absence makes rule (2) idle, and Carla's absence makes rule (3) idle. Ella satisfies rule (4), which requires $B\\lor E$. This valid roster has Carla out.

So the statement is False.`,
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

$$(4)$$

$$Q\\Rightarrow\\neg O.$$

Taking the contrapositive gives

$$\\neg(\\neg O)\\Rightarrow\\neg Q,$$

so

$$O\\Rightarrow\\neg Q.$$

Therefore an evening with Owen cooking cannot also have Quinn cooking.

So the statement is True.`,
      `**B.** → False

The claim requires a legal evening with Owen and Priya both cooking. Assume $O\\land P$. Rule (1) applies as soon as Owen cooks:

$$(1)$$

$$O\\Rightarrow\\neg P.$$

The assumption $O$ therefore forces $\\neg P$, directly contradicting the assumed $P$. Quinn's status does not affect rule (1), so no assignment can contain both Owen and Priya.

So the statement is False.`,
      `**C.** → False

The claim proposes Quinn cooking alone, with both Owen and Priya absent:

$$\\neg O\\land\\neg P\\land Q.$$

Rule (2) requires at least one of Owen or Priya:

$$(2)$$

$$O\\lor P.$$

Under the proposed assignment both disjuncts are false. Although Quinn with Owen absent satisfies rule (4), satisfying one rule cannot repair the failure of rule (2). Quinn cannot cook alone under all four rules.

So the statement is False.`,
      `**D.** → True

The claim says Priya's participation guarantees Quinn's. Rule (3) is exactly the forward implication

$$(3)$$

$$P\\Rightarrow Q.$$

Starting with $P$, rule (3) immediately forces $Q$. Rule (4) then forces $\\neg O$, which is compatible with rule (2) because Priya already satisfies $O\\lor P$. There is no exception to rule (3), so Priya cooking always brings Quinn in.

So the statement is True.`,
      `**E.** → False

The claim says Owen cooks in every solution. Test the opposite by putting Priya in instead. Rule (3) then brings Quinn in:

$$P\\overset{(3)}{\\Rightarrow}Q \\overset{(4)}{\\Rightarrow}\\neg O.$$

The resulting evening is $\\{P,Q\\}$. Rule (1) is idle because Owen is out, rule (2) is satisfied by Priya, rule (3) is satisfied by Quinn, and rule (4) is satisfied because Owen is out. This valid evening omits Owen.

So the statement is False.`,
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

$$D\\overset{(1)}{\\Rightarrow}F \\overset{(3)}{\\Rightarrow}\\neg G.$$

Rule (2), "Grace goes unless Hugo goes," is $G\\lor H$. Since Grace is out, Hugo must go. Rule (6) then forces Fatima out:

$$\\neg G\\overset{(2)}{\\Rightarrow}H \\overset{(6)}{\\Rightarrow}\\neg F.$$

Diego's attendance has forced both $F$ and $\\neg F$. Thus no valid roster contains Diego.

So the statement is False.`,
      `**B.** → True

The claim asks whether Fatima going forces Hugo out. Rule (6), "Hugo goes only if Fatima does not," means

$$(6)$$

$$H\\Rightarrow\\neg F.$$

Take the contrapositive:

$$\\neg(\\neg F)\\Rightarrow\\neg H,$$

which simplifies to

$$F\\Rightarrow\\neg H.$$

Therefore Fatima and Hugo cannot attend together, exactly as the claim says.

So the statement is True.`,
      `**C.** → True

The claim says Hugo appears in every valid roster. Letter A forced Diego out:

$$\\neg D.$$

Rule (4) requires at least one of Diego or Hugo, so

$$(4)$$

$$D\\lor H.$$

With the Diego disjunct false, the Hugo disjunct must be true:

$$\\neg D\\land(D\\lor H)\\Rightarrow H.$$

Every valid roster therefore contains Hugo.

So the statement is True.`,
      `**D.** → True

The claim needs one legal roster containing both Grace and Iris. Try

$$\\{G,H,I\\},$$

$$D = F$$

$$= 0.$$

Rule (1) is idle because Diego is out. Rule (2), $G\\lor H$, holds. Rule (3) is idle because Fatima is out. Hugo satisfies rule (4), Iris satisfies rule (5) because Diego is out, and Hugo satisfies rule (6) because Fatima is out.

All six rules hold while Grace and Iris both attend.

So the statement is True.`,
      `**E.** → False

The claim is the implication $I\\Rightarrow F$. To refute it, look for a legal roster with Iris in and Fatima out. Use

$$\\{G,H,I\\},$$

$$I = 1,$$

$$F$$

$$= 0.$$

As rule (5) requires, Iris has Diego out. Hugo then satisfies rule (4), and rule (6) agrees with Fatima being out. Grace satisfies rule (2), while rules (1) and (3) are idle because Diego and Fatima are absent.

This valid roster makes the hypothesis $I$ true and the conclusion $F$ false.

So the statement is False.`,
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

$$A\\overset{(1)}{\\Rightarrow}(B\\land C),$$

$$C\\overset{(4)}{\\Rightarrow}E.$$

Rule (6), $E\\Rightarrow\\neg B$, then forces Bella out:

$$A\\Rightarrow C\\Rightarrow E\\Rightarrow\\neg B.$$

But rule (1) already forced $B$. Since $A$ leads to both $B$ and $\\neg B$, Aiden cannot present in any valid scenario.

So the statement is True.`,
      `**B.** → False

The claim needs one valid scenario with Bella presenting. Assume $B$. Rule (3) forces Daisy out. Rule (6) says $E\\Rightarrow\\neg B$; its contrapositive forces Ethan out when Bella is in:

$$B\\overset{(3)}{\\Rightarrow}\\neg D,$$

$$B\\overset{\\text{contrapose of }(6)}{\\Rightarrow}\\neg E.$$

Rule (2) requires $D\\lor E$, but both choices have now been forced false:

$$\\neg D\\land\\neg E\\quad\\text{contradicts}\\quad D\\lor E.$$

No valid scenario can contain Bella.

So the statement is False.`,
      `**C.** → True

The claim asks what must happen if Caleb presents. Rule (4), "Caleb presents only if Ethan presents," translates in the only-if direction as

$$(4)$$

$$C\\Rightarrow E.$$

Starting from $C$, rule (4) immediately forces $E$. The reverse $E\\Rightarrow C$ is not promised, but the claim uses the correct forward direction. Therefore every roster with Caleb also has Ethan.

So the statement is True.`,
      `**D.** → False

The claim needs a valid roster with Faye. Assume $F$. Rule (5) forces Aiden, and rule (1) then forces Bella and Caleb:

$$F\\overset{(5)}{\\Rightarrow}A \\overset{(1)}{\\Rightarrow}(B\\land C).$$

Caleb forces Ethan by rule (4), while Ethan forces Bella out by rule (6):

$$C\\overset{(4)}{\\Rightarrow}E \\overset{(6)}{\\Rightarrow}\\neg B.$$

This collides with the Bella forced by rule (1). Faye's attendance creates a contradiction, so no valid roster contains Faye.

So the statement is False.`,
      `**E.** → False

The claim says exactly one valid roster exists. Two distinct legal rosters are enough to defeat uniqueness.

First take $\\{D\\}$. Daisy satisfies rule (2), and every implication in (1), (3), (4), (5), and (6) has a false hypothesis.

Next take $\\{E\\}$. Ethan satisfies rule (2). Rule (6) requires Bella to be out, which she is, and the other implications again have false hypotheses:

$$\\{D\\}\\neq\\{E\\}.$$

Both rosters satisfy all six rules, so there is more than one valid way.

So the statement is False.`,
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

$$(4)$$

$$P\\lor S.$$

Under the assumption, both disjuncts are false. Thus Petra's absence makes rule (4) impossible to satisfy, so Petra is forced to review.

So the statement is True.`,
      `**B.** → True

The claim asks what follows if Quinn reviews. Rule (1) says

$$(1)$$

$$P\\Rightarrow\\neg Q.$$

Taking the contrapositive reverses and negates both sides:

$$\\neg(\\neg Q)\\Rightarrow\\neg P,$$

so

$$Q\\Rightarrow\\neg P.$$

Therefore Quinn's presence forces Petra's absence, exactly as claimed.

So the statement is True.`,
      `**C.** → False

The claim needs at least one valid assignment with Ravi. Petra is already forced in by rule (4) together with rule (6). Rule (1) then forces Quinn out, and rule (3) forces Theo in:

$$P\\overset{(1)}{\\Rightarrow}\\neg Q \\overset{(3)}{\\Rightarrow}T.$$

Rule (5) now applies:

$$T\\overset{(5)}{\\Rightarrow}\\neg R.$$

Thus every valid assignment forces Ravi out. Assuming Ravi in would collide with the forced $\\neg R$.

So the statement is False.`,
      `**D.** → True

The claim says the unique assignment includes both Theo and Sana. Begin with Petra, who is forced in. Rules (1) and (3) then force Quinn out and Theo in:

$$P\\overset{(1)}{\\Rightarrow}\\neg Q \\overset{(3)}{\\Rightarrow}T.$$

Rule (5) forces Ravi out. Rule (2) requires $R\\lor S$, so Ravi's absence forces Sana in:

$$T\\overset{(5)}{\\Rightarrow}\\neg R,$$

$$\\neg R\\land(R\\lor S)\\overset{(2)}{\\Rightarrow}S.$$

The forced assignment is $\\{P,S,T\\}$, which contains Theo and Sana.

So the statement is True.`,
      `**E.** → False

The claim requires at least two different valid assignments. Instead, each reviewer's status is forced in sequence.

Rule (4) together with rule (6) forces $P$. Then (1) gives $\\neg Q$, (3) gives $T$, and (5) gives $\\neg R$. Finally, rule (2), $R\\lor S$, gives $S$:

$$P\\Rightarrow\\neg Q\\Rightarrow T\\Rightarrow\\neg R\\Rightarrow S.$$

So every valid assignment has exactly

$$P = S$$

$$= T$$

$$= 1,$$

$$Q$$

$$= R$$

$$= 0.$$

This assignment satisfies rule (6) because Sana's required Petra is present. No variable remains free to create a second assignment.

So the statement is False.`,
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

Both Victor-out branches break rule (8). Therefore every valid roster has Victor in.

So the statement is True.`,
      `**B.** → False

From letter A (and the overview solve), Victor competes in every valid roster. Feed that fact forward through the later rules.

Rule (2) is $V\\Rightarrow W$. With Victor in, Wendy must compete:

$$V \\implies W$$

Rule (3) says exactly one of Wendy or Xavier competes. Wendy is already in, so Xavier cannot be:

$$W \\implies \\neg X$$

Xavier is therefore out of every valid roster. The claim says some valid roster includes Xavier, which never happens.

So the statement is False.`,
      `**C.** → True

Rule (6) says "Zane competes only if Bianca does not," which is the implication

$$Z \\Rightarrow \\neg B$$

The contrapose of $P\\Rightarrow Q$ is $\\neg Q\\Rightarrow\\neg P$. Here $P=Z$ and $Q=\\neg B$, so

$$\\neg(\\neg B) \\Rightarrow \\neg Z$$

$$B \\Rightarrow \\neg Z$$

That is exactly "If Bianca competes, then Zane does not compete." The claim restates a forced consequence of rule (6).

So the statement is True.`,
      `**D.** → False

After Victor is forced in, the chain $V\\Rightarrow W$ and rule (3) also force Uma in, Wendy in, and Xavier out. The forced core is therefore

$$\\{U,V,W\\}$$

$$\\text{with }X\\text{ out}$$

The free variables are only $Y,Z,B$, subject to (5) $Y\\lor Z$ and (6) $Z\\Rightarrow\\neg B$ (Zane and Bianca cannot both enter). Listing the legal extras:

$$\\{Y\\},\\quad \\{Z\\},\\quad \\{Y,B\\},\\quad \\{Y,Z\\}$$

(The triple $\\{Y,Z,B\\}$ is illegal by (6); $\\{B\\}$ alone fails (5); $\\{Z,B\\}$ fails (6).)

Each legal extra produces a different full roster on the same core, so there are four valid rosters, not one. The claim of uniqueness fails.

So the statement is False.`,
      `**E.** → False

A roster of size exactly six would need six of the seven finalists. With the forced core $\\{U,V,W\\}$ already in and Xavier forced out, the only way to reach size six is to add all three of Yara, Zane, and Bianca:

$$\\{U,V,W,Y,Z,B\\}$$

But rule (6) is $Z\\Rightarrow\\neg B$, so Zane and Bianca cannot both compete. The extra $\\{Y,Z,B\\}$ is illegal.

The legal extras recovered above have size $1$ or $2$, so total roster sizes are only $4$ or $5$. Size six never appears.

So the statement is False.`,
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
