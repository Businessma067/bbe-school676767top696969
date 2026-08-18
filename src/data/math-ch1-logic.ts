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

Intersection is the stricter of the two combining operations: a number has to clear both lists, not just one. The overview already scanned $A$ against $B$ and left $\\{3,4,5\\}$. This letter is reading that overlap, not rebuilding the scan.

**1.** $1$ and $2$ sit in $A$ but miss $B$, so they cannot survive an intersection. $6$ and $7$ sit in $B$ but miss $A$, so they cannot survive either. The three numbers that sit in both are $3$, $4$, and $5$.

**2.** Instead running a union would keep $1$ and $2$ as well and land on $\\{1,2,3,4,5,6,7\\}$, a completely different set. That is the fork: $1$ belongs to the recovered isolation, $\\{1,2,3,4,5,6,7\\}$ belongs to the discarded mix. The claim is naming the overlap, not the combined list.

**3.** Order of writing does not matter in a set, so $\\{5,4,3\\}$ would still be the same intersection. The claimed roster is exactly that overlap.

The recovered intersection is $\\{3,4,5\\}$, so the statement is True.`,
      `**B.** → False

A union is forced to contain every member of each input. The overview already assembled $A\\cup C=\\{1,2,3,4,5,6,7,8,9\\}$. The claimed set stops at $8$ and quietly drops $9$, even though $9\\in C$.

**1.** $C$ itself is $\\{5,6,7,8,9\\}$. A union can never be smaller than either input, so any version of $A\\cup C$ that ends at $8$ has thrown a real element away.

**2.** The dropped $9$ is not a rounding of a boundary. It is a member of $C$. Nearness to $8$ is not a licence to delete it.

**3.** Copying $A$'s upper end $5$ and then adding $C$ only up to $8$ is treating the union as a closed interval written by hand rather than a membership test. The recovered comparison therefore keeps $A$ and does not substitute $8$. Sets here are lists, not intervals.

The claimed roster is one element too small, so the statement is False.`,
      `**C.** → True

The triple intersection is a second filter on the pair already recovered. The overview has $A\\cap B=\\{3,4,5\\}$. Of that trio, only $5$ also sits in $C$: $3$ and $4$ sit below $C$'s range.

Chaining two intersections is the same as intersecting all three sets at once. Either route leaves the same lone survivor $\\{5\\}$.

**1.** The trap is keeping $3$ or $4$ because they "look close" to $C$'s starting point $5$. Close is not membership. $C$ begins at $5$.

**2.** Another trap is to intersect $A$ with $C$ first and forget to pass through $B$. $A\\cap C=\\{5\\}$ happens to agree here, but that is luck of these three lists, not a reason to skip $B$.

The recovered triple intersection is $\\{5\\}$, so the statement is True.`,
      `**D.** → False

Difference $A\\setminus C$ deletes a member of $A$ only when that member also sits in $C$. The overview already found $A\\setminus C=\\{1,2,3,4\\}$. The claim also drops $4$, but $4\\in A$ and $4\\notin C$, so the difference rule has no licence to delete it.

**1.** Only $5$ is shared between $A$ and $C$. That is the one number that leaves $A$. $1,2,3,4$ all stay.

**2.** Nearness to $C$'s $5$ is not membership. The claimed $\\{1,2,3\\}$ is simply one element too small, the same kind of off-by-one that broke the union in B, now on the other operation.

**3.** Confusing difference with intersection would have kept only $\\{5\\}$. The recovered isolation is checked against the claim using $\\{5\\}$, which is the figure the sessions actually produce. Confusing it with $C\\setminus A$ would have kept $\\{6,7,8,9\\}$. So the letter reads the claim against $C\\setminus A$; $\\{6,7,8,9\\}$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $C\\setminus A$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Neither is this claim; this claim is $A$ minus $C$ with $4$ wrongly deleted.

The recovered difference is $\\{1,2,3,4\\}$, so the statement is False.`,
      `**E.** → False

Disjointness is a claim about the intersection being empty, not about the two lists looking different at the ends. $B$ leans low and $C$ leans high, which is why a glance suggests they miss each other, but the overview's scan already found $B\\cap C=\\{5,6,7\\}$.

**1.** Three shared numbers are three too many. Disjointness fails as soon as one shared number appears. Here there are three.

**2.** The visual impression that the ranges point in different directions is exactly the trap. These are finite lists, not opposite rays on the line. $5,6,7$ sit in both.

**3.** If the claim had been about $A$ and a set starting at $10$, disjointness could have held. Against $C=\\{5,6,7,8,9\\}$, $B$ is not disjoint.

The recovered overlap is nonempty, so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `**Part 1: The sets.**

Start with the three lists:

$$A=\\{1,2,3,4,5\\},\\quad B=\\{3,4,5,6,7\\},\\quad C=\\{5,6,7,8,9\\}.$$

**Part 2: The operations.**

**Intersection** keeps numbers that sit in both sets; **union** keeps anything that sits in at least one; **difference** $X\\setminus Y$ keeps members of $X$ that are missing from $Y$; two sets are **disjoint** only when they share nothing.

**Part 3: Scan.**

Scan $A$ against $B$: $1$ and $2$ miss $B$, while $3$, $4$, and $5$ sit in both, so $A\\cap B=\\{3,4,5\\}$. Of those three, only $5$ is also in $C$ ($3\\notin C$ and $4\\notin C$), so $(A\\cap B)\\cap C=\\{5\\}$. Putting $A$ and $C$ together: $A$ contributes $1,2,3,4,5$ and $C$ adds $6,7,8,9$, giving $\\{1,2,3,4,5,6,7,8,9\\}$. From $A$, scan against $C$: only $5$ is shared, so $1,2,3,4$ stay and $A\\setminus C=\\{1,2,3,4\\}$. Finally scan $B$ against $C$: $5$, $6$, and $7$ sit in both, so $B\\cap C=\\{5,6,7\\}$ and they are not disjoint.`,
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

Set equality asks whether two collections have the same members, not whether they were written in the same order or recovered by the same sentence. The overview recovered $A=\\{-3,3\\}$ by testing both roots of $x^2=9$ against the integers. $B$ is given as $\\{3,-3\\}$. Those two rosters name the same pair.

**1.** The integer $3$ squares to $9$, so it sits in $A$. The integer $-3$ also squares to $9$, so it sits in $A$. Nothing else in $Z$ squares to $9$.

**2.** Treating "equals" as "same writing order" would reject $A=B$ because one roster starts at $3$ and the other at $-3$. That is the fork: $A=B$ belongs to the recovered isolation, $-3$ belongs to the discarded mix. Sets do not remember order.

**3.** If the universe had been the natural numbers, $-3$ would have been dropped and equality would fail. That is a different universe, not this letter.

The two recovered lists match.

Reading equality off the recovered pair is the whole job of this letter. The stem never asked for a preferred writing order, and it never asked for a sign convention. It asked whether $A$ and $B$ contain the same integers. They do.

so the statement is True.`,
      `**B.** → True

Membership in a set-builder is a test against the defining condition, not a glance at a printed roster. The overview already listed $3$ among the integer solutions of $x^2=9$. This letter only checks that one candidate.

The number $3$ is an integer, so it clears the universe $Z$. Its square is $9$, so it clears the equation. Both halves of the builder succeed, and that is the whole membership test.

The trap is to wait for someone to reprint $A$ as $\\{3,-3\\}$ before daring to say $3\\in A$. The builder never required a roster. A student who confuses this with "the only root is $3$" is answering a different claim.

The recovered set contains $3$.

If the claim had named $-3$ instead, the same two tests would succeed: $-3$ is an integer and $(-3)^2=9$. Naming $3$ is not a special privilege of the positive root. It is one of two legal members.

so the statement is True.`,
      `**C.** → False

The claim reprints $A$ as the singleton $\\{3\\}$, "only the positive root." The overview already recovered both integer solutions, $A=\\{-3,3\\}$. Dropping $-3$ is not a rounding of a boundary. It is a member the universe $Z$ never excluded.

**1.** Square-root language in school algebra sometimes keeps only the principal (positive) root. That convention is a function $x\\mapsto\\sqrt{x}$, not a set-builder over $Z$. The builder here is "integers whose square is $9$," and $(-3)^2=9$ still holds.

**2.** The claimed roster $\\{3\\}$ would be correct only if an extra constraint $x>0$ or $x\\in N$ had been written into $A$. Neither appears. Adding an unstated filter is the same off-by-one style of error as deleting a legal member from a difference.

**3.** Writing $A=\\{3\\}$ and then checking $|A|=1$ would also break the cardinality claim in the next letter. So the letter reads the claim against $A=\\{3\\}$; $|A|=1$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $A=\\{3\\}$ stays in the write-up. The two mistakes travel together: hide the negative root, then count one object.

What would make the claim true? Change the universe of $A$ to the natural numbers, or add $x\\ge 0$ inside the builder. Against $Z$, both signs survive.

A second, slower trap is to solve $x=\\sqrt{9}$ on a calculator, read $3$, and copy that single output into the roster. Calculators follow the principal-square-root convention. The set-builder does not. It asks which integers satisfy an equation, and the equation is quadratic, so two roots are the default until the universe cuts one of them.

If the stem had said $A=\\{x\\in Z:x^2=9\\}$ with $x>0$, the singleton would be honest. The extra inequality is exactly what is missing. Without it, reprinting $A$ as $\\{3\\}$ is a false figure: the right type of object (a roster of roots) with a member silently deleted.

The recovered $A$ has two members.

The false figure $\\{3\\}$ is a roster of the right kind with a legal member deleted. Square-root buttons and principal-root slogans are how that deletion gets excused. The builder over $Z$ never wrote those slogans. Until the universe or an extra inequality cuts a sign, both roots stay. Reprinting $A$ without $-3$ is not a convention. It is a smaller set than the one recovered.

so the statement is False.`,
      `**D.** → True

Cardinality counts distinct members, not distinct squares and not distinct ways of writing a number. The overview recovered two integer solutions, $-3$ and $3$. Those are two different points on the number line, so $|A|=2$.

It is tempting to count What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. "one equation, one size" and report $|A|=1$ because both roots square to the same $9$. Distinctness is about the objects in the set, not about the value of $x^2$. Another trap is to treat $-3$ and $3$ as "the same up to sign" and collapse them; sets do not identify a number with its opposite.

If $A$ had been built over $N$, the count would have dropped to $1$. That is a different builder. Here the universe is $Z$, and both roots remain.

The recovered set has two members.

The false figure $|A|=1$ is the count you get after silently deleting $-3$. This letter is the count before that deletion. Two names, two places on the line, two members.

so the statement is True.`,
      `**E.** → False

This claim does not re-solve $x^2=9$. The overview already recovered the two integer roots $-3$ and $3$, then re-filtered them against a new universe: the natural numbers $N=\\{1,2,3,\\ldots\\}$. The claim says the surviving set $C$ equals $\\{3,-3\\}$. That would require both roots to live in $N$.

**1.** Membership in a set-builder is two tests, not one. First the equation must hold; second the candidate must sit in the named universe. For $C=\\{x\\in N:x^2=9\\}$, the equation still accepts both $3$ and $-3$, but $N$ is the positive counting numbers. $3$ is a natural number, so it stays. $-3$ is negative, so it fails the universe test even though its square is $9$.

**2.** The recovered set is therefore $C=\\{3\\}$, a singleton. Equality with $\\{3,-3\\}$ would need $-3\\in C$. That membership fails, so the two sets are different: one has two members, the other has one. Cardinality already separates them, $|C|=1$ while $|\\{3,-3\\}|=2$.

**3.** The trap is to treat "square equals $9$" as if the universe did not matter. Squares forget signs, and stopping at the algebra writes both roots and copying them into $C$. Keeping $C$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The set-builder never gave that licence. Changing $Z$ to $N$ is a genuine extra filter, the same kind of extra filter that would appear if the builder had added $x>0$ by hand.

A different stem could have made the claim true: if $C$ had been built over $Z$, or over all nonzero integers, both roots would survive and equality with $\\{3,-3\\}$ would hold. Against $N$, the negative root is excluded by definition, not by a computational accident.

If someone argued that $-3$ is "the same size" as $3$ and should therefore count as natural, they would be confusing magnitude with membership. Natural-number membership is a one-sided test on the number line: only the positive side (and, in some conventions, zero) is allowed. Either convention still excludes $-3$.

The recovered $C$ is $\\{3\\}$, not $\\{3,-3\\}$.

This letter is that universe change. The recovered $C$ is the singleton that survives it, not the two-element roster the claim copied from $B$.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `**Part 1.** The sets.

The set-builder $A=\\{x\\in Z:x^2=9\\}$ means: solve the equation, then keep only the solutions that are **integers**. $B$ is given as $\\{3,-3\\}$.

**Part 2.** The operations.

A set-builder is a membership test against a named universe. Equality of sets is equality of members, ignoring order. Cardinality counts distinct members. Changing the universe, or adding an extra inequality, produces a different set.

**Part 3.** The scans.

$x^2=9$ has two roots, $x=3$ and $x=-3$. Check each against $Z$:

- $3\\in Z$ and $3^2=9$, keep it.
- $-3\\in Z$ and $(-3)^2=9$, keep it.

Both survive, so

$$A=\\{-3,3\\}.$$

$B$ lists the same two numbers in a different order. Cardinally, two distinct members give $|A|=2$.

Switching the universe to the **natural numbers** $N=\\{1,2,3,\\ldots\\}$ and re-filtering the same roots: $3\\in N$ stays, but $-3\\notin N$ is dropped, so only $C=\\{3\\}$ survives.`,
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

The power set is the set of all subsets, not a list of the original letters. The overview already counted $2^3=8$ subsets by treating each of $a$, $b$, and $c$ as an independent keep-or-drop choice. This letter only reads that count.

Each letter is in or out, and the choices multiply, so eight subsets appear: the empty set, three singletons, three pairs, and $A$ itself. That matches the recovered roster of $\\mathcal P(A)$.

The trap is to count only the nonempty subsets and report $7$, or to count only the letters of $A$ and report $3$. Neither is the power set. Another slip is $3^2=9$, mixing the exponent.

The recovered power set has eight members.

If the stem had asked how many letters $A$ has, the answer would be $3$. If it had asked how many nonempty subsets, the answer would be $7$. The power-set count is neither of those. It is eight, empty set included.

so the statement is True.`,
      `**B.** → False

Membership and subsethood are different questions, even when they mention the same letters. The overview listed the elements of $A$ as the three letters $a$, $b$, and $c$. The object $\\{a,b\\}$ is a set of letters, not a letter, so it does not sit on that roster.

**1.** The test $\\{a,b\\}\\in A$ asks whether one of the three written objects is the set $\\{a,b\\}$. None is. The letters $a$ and $b$ are elements; the pair of them is a different type of object.

**2.** The neighbouring test $\\{a,b\\}\\subseteq A$ is true, because both members of the pair sit in $A$. Running the subset test and then writes $\\in$ has swapped the two relations. That is why $\\in$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That swap is the whole trap.

**3.** The pair $\\{a,b\\}$ does belong to the power set: the overview placed it in $\\mathcal P(A)$. Membership in $\\mathcal P(A)$ is not membership in $A$. Confusing those two "is an element of" claims is how the false verdict gets written.

A set can have other sets as elements, but only when those nested sets are written on the roster. Here $A$ is three letters and nothing nested. So $\\{a,b\\}$ is a subset of $A$ and an element of $\\mathcal P(A)$ and still not an element of $A$. Those three verdicts look similar in print and they are not interchangeable.

What would make the claim true? $A$ would have to list $\\{a,b\\}$ as one of its objects, for instance $A=\\{a,b,c,\\{a,b\\}\\}$. Then $\\{a,b\\}\\in A$ would hold, and $\\{a,b\\}\\subseteq A$ would still hold as well. The given $A$ has no such nested object.

It is tempting to check After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. that $a$ and $b$ "have something to do with $A$" and writes $\\in$. The symbol $\\in$ does not mean "related." It means "is one of the three written objects." Neither object is the pair.

The recovered elements of $A$ are three letters.

This is the membership-versus-subset split that later letters keep meeting. The pair is a legal subset and a legal member of the power set, and it is still not a letter of $A$. One object, three different questions, only one of which this claim asked, and that one fails.

so the statement is False.`,
      `**C.** → True

Subsethood asks whether every member of the left-hand set sits in $A$. The empty set has no member at all, so there is no witness that could sit outside $A$. The inclusion $\\emptyset\\subseteq A$ cannot fail.

The overview placed $\\emptyset$ in $\\mathcal P(A)$, which is the same fact written as membership in the power set. This letter is the subset reading of that fact.

The trap is to demand a "reason" the empty set should count, or to confuse $\\emptyset\\subseteq A$ with $\\emptyset\\in A$. The empty set is not one of the letters $a$, $b$, $c$, so it is not an element of $A$, but it is still a subset.

Vacuous inclusion is a convention with a purpose: it keeps the power set closed and keeps $2^n$ counting honest. Dropping $\\emptyset$ would break both.

The empty set is a subset of $A$.

What would make $\\emptyset\\subseteq A$ fail? A member of $\\emptyset$ that missed $A$. The empty set has no such member, for this $A$ and for every other set. The claim is not special to three letters; it is the empty-set rule applied to this roster.

so the statement is True.`,
      `**D.** → False

Proper inclusion is ordinary inclusion plus a genuine difference of sets. $A\\subseteq A$ always holds, because every member of $A$ sits in $A$. The extra demand $A\\ne A$ is impossible: both sides are the same three-letter list.

**1.** The recovered power set contains $A$ itself as a member, which records $A\\subseteq A$. Proper subsethood would require that member to be unequal to $A$, which it is not.

**2.** The trap is to read "subset" and "proper subset" as synonyms. Many writers use $\\subset$ for one or the other without warning. Here the claim says proper, so inequality is required, and it fails.

**3.** What would make the claim true? Nothing, for this $A$ against itself. Proper self-inclusion never holds for any set. A different pair, such as $\\{a,b\\}$ against $A$, is a proper subset, but that is not the claim.

Counting "subsets of $A$ that look like $A$" and found one has found $A$ itself, which is a subset and not a proper subset. Once $A$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does.

The inequality half cannot hold.

A student who writes $A\\subsetneq A$ after seeing $A\\subseteq A$ in the power set has added an inequality the recovered list cannot support. The eight subsets include $A$ once, as itself, not as a strictly smaller copy.

so the statement is False.`,
      `**E.** → True

A two-element subset of a three-element set is specified by which one letter is omitted. The overview already listed the three pairs $\\{a,b\\}$, $\\{a,c\\}$, and $\\{b,c\\}$. That is exactly three subsets of size $2$.

The same count is the binomial coefficient $\\binom{3}{2}=3$. Choosing two letters to keep is the same as choosing one letter to drop.

The trap is $\\binom{3}{2}=6$, doubling by order, as if the subsets were ordered pairs. Sets do not remember order, so $\\{a,b\\}$ and $\\{b,a\\}$ are one subset. Another slip is to count the three singletons instead.

The recovered list has three two-element subsets.

If someone listed $\\{a,b\\}$, $\\{b,a\\}$, and $\\{a,c\\}$ as three different pairs and then wondered where the fourth pair went, they have already double-counted. The recovered list has three pairs because order is not a second copy.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `**Part 1.** The set.

Here $A=\\{a,b,c\\}$ has three objects.

**Part 2.** The operations.

Two different relations matter:

• $x\\in A$ means $x$ is one of those three objects.

• $S\\subseteq A$ means every object inside $S$ is also one of those three.

The **power set** $\\mathcal P(A)$ is the set of *all* subsets. Each of the three objects can be kept or left out, so there are $2^3=8$ subsets. A **proper** subset must also be unequal to $A$, so $A$ itself is never a proper subset of $A$.

**Part 3.** The scans.

$$\\mathcal P(A)=\\{\\emptyset,\\{a\\},\\{b\\},\\{c\\},\\{a,b\\},\\{a,c\\},\\{b,c\\},A\\}.$$

The two-element subsets are the three pairs $\\{a,b\\}$, $\\{a,c\\}$, $\\{b,c\\}$.`,
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

Subsethood asks whether every member of the left-hand set sits in $D$. The empty set has no member that could fail that test, so $\\emptyset\\subseteq D$. The overview already marked that row "yes" in the subset column.

This is not a claim that the empty set is written on $D$'s roster. It is a claim about inclusion. Vacuous inclusion is what lets the power set contain $\\emptyset$ and what lets $2^3=8$ stay honest.

The trap is to refuse the empty set because it "does not look like a subset of letters." Looking like a letter is a membership test, not a subset test.

The recovered table records $\\emptyset\\subseteq D$.

The same vacuous test is why $\\emptyset$ appears in every power set. Refusing $\\emptyset\\subseteq D$ would punch a hole in the recovered eight-set list. The claim is that inclusion, not a claim that $D$ contains a blank letter.

so the statement is True.`,
      `**B.** → False

Membership reads the written roster: $a$, $b$, $c$. None of those letters is the empty set, so $\\emptyset\\notin D$. The overview already marked that row "no" in the element column.

**1.** The symbol $\\in$ does not mean "related somehow to $D$." It means "is one of the objects listed." The empty set is a set with no letters in it, not a letter.

**2.** The neighbouring fact $\\emptyset\\subseteq D$ is true, and that is the trap. Just running letter A and then copying $\\in$ in place of $\\subseteq$ writes a false membership from a true inclusion. The stem's recovered values line up with $\\in$, whereas $\\subseteq$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $\\in$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**3.** What would make the claim true? $D$ would have to list $\\emptyset$ as an element, for instance $D=\\{a,b,c,\\emptyset\\}$. The given $D$ does not. Nested sets are allowed in general, but they must be written to count.

The recovered roster has three letters and no empty set.

A student coming from letter A has just accepted $\\emptyset\\subseteq D$ and is tempted to reuse the same sentence with a different symbol. The overview table exists to block that reuse: subset column yes, element column no. Two columns, two answers.

so the statement is False.`,
      `**C.** → True

Three independent include-or-exclude choices give $2^3=8$ subsets of $D$. The overview already listed all eight: empty set, three singletons, three pairs, and $D$ itself. That count includes $\\emptyset$ and $D$, which some students try to drop.

The trap is to report $7$ by excluding the empty set, or $6$ by excluding both $\\emptyset$ and $D$, or $3$ by counting only the letters. The power-set count is not the element count.

Another slip is $3^2=9$. The exponent is the size of $D$, and the base is $2$ because each element has two choices.

The recovered power set has eight members.

If the stem had asked for the number of letters in $D$, the answer would be $3$. The claim asks for the number of subsets. Those are different counts, and the recovered power set is the longer list.

so the statement is True.`,
      `**D.** → False

The claim is a conjunction: both $\\{a\\}\\subseteq D$ and $\\{a\\}\\in D$. A conjunction dies as soon as one half dies.

**1.** The subset half holds. The only member of $\\{a\\}$ is the letter $a$, and $a$ sits in $D$. The overview marked $\\{a\\}$ as a subset.

**2.** The membership half fails. The roster of $D$ is three letters, not a singleton set. The object $\\{a\\}$ is a set containing $a$, not the letter $a$ itself. The overview marked $\\{a\\}$ as not an element.

**3.** The trap is to treat the two symbols as interchangeable once the letter $a$ is involved. They are not. Another trap is to think "both" can be true if the nicer half is true. Logic does not average the two tests.

What would make both halves true? $D$ would need to contain the letter $a$ (so $\\{a\\}\\subseteq D$) and also contain the object $\\{a\\}$ as an element. The given three-letter $D$ has only the first.

A set can contain both an object and a singleton of that object, but only if both are written. Here $D$ contains $a$ and does not contain $\\{a\\}$. The two tests therefore split: subset yes, membership no. "Both" would need them to agree on true.

The false figure in a student's notes is often a single checkmark next to $\\{a\\}$, with no record of which symbol was tested. Re-reading the claim as two separate sentences, "$\\{a\\}\\subseteq D$" and "$\\{a\\}\\in D$", makes the split visible. The first sentence matches the overview table. The second contradicts it.

One true half and one false half make the conjunction false.

The word both is doing the damage. One true inclusion does not purchase a false membership. The recovered table already split those two columns for $\\{a\\}$: subset yes, element no. A conjunction with a false half is false, even when the true half is the one a student just finished checking.

so the statement is False.`,
      `**E.** → True

Every member of $D$ is, by construction, a member of $D$, so $D\\subseteq D$. That is ordinary inclusion, not proper self-inclusion. The overview marked $D$ itself as a subset and placed $D$ in the power set.

The trap is to think a set cannot be a subset of itself, borrowing the "proper" reading. The claim does not say proper. Reflexivity of $\\subseteq$ is what puts $D$ into $\\mathcal P(D)$.

If the claim had been $D\\subsetneq D$, it would fail for the same reason letter D failed in the three-letter power-set task: inequality with oneself is impossible.

The recovered table records $D\\subseteq D$.

Ordinary inclusion is allowed to compare a set with itself. Proper inclusion is not. The claim uses $\\subseteq$, so reflexivity applies, and $D$ stays a subset of $D$.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `**Part 1.** The set.

Membership table for $D=\\{a,b,c\\}$.

**Part 2.** The operations.

$x\\in D$ asks whether $x$ is one of the three written letters. $S\\subseteq D$ asks whether every member of $S$ is one of those letters. The power set collects every subset. The recurring trap is confusing $\\in$ with $\\subseteq$.

**Part 3.** The scans.

| Object | Element of $D$? | Subset of $D$? |
| --- | --- | --- |
| $a$, $b$, or $c$ | yes | (singletons are subsets) |
| $\\emptyset$ | **no** | **yes** |
| $\\{a\\}$ | **no** | **yes** |
| $D$ itself | no (not listed as an element) | **yes** |

The power set has $2^3=8$ members:

$$\\mathcal P(D)=\\{\\emptyset,\\{a\\},\\{b\\},\\{c\\},\\{a,b\\},\\{a,c\\},\\{b,c\\},D\\}.$$`,
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

Difference deletes a member of $E$ only when that member also sits in $F$. The overview already placed $1$ and $7$ in the $E$-only cell, so $E\\setminus F=\\{1,7\\}$. This letter reads that cell, not a new scan.

The shared $3$ and $5$ leave because they sit in $F$. Nearness of $7$ to $F$'s $6$ is not membership, so $7$ stays. The claimed roster matches the recovered leftover.

The trap is to drop $7$ as well, treating difference as "delete anything near the other list," or to keep $3$ because it "started in $E$." Difference is a membership test against $F$, not a proximity test.

The recovered difference is $\\{1,7\\}$.

If the claim had named $\\{1,3,7\\}$, it would have kept a shared $3$ that the difference rule deletes. The recovered leftover keeps only the $E$-only cell, and that cell is $\\{1,7\\}$.

so the statement is True.`,
      `**B.** → True

The opposite leftover is members of $F$ missing from $E$. The overview already placed $4$ and $6$ in the $F$-only cell, so $F\\setminus E=\\{4,6\\}$.

Shared $3$ and $5$ leave $F$ because they sit in $E$. The private $4$ and $6$ stay. That is the claimed set.

The trap is to copy $E\\setminus F$ and write $\\{1,7\\}$ again, as if difference were commutative. It is not: the leftover lives inside the set named on the left.

The recovered opposite leftover is $\\{4,6\\}$.

This leftover lives inside $F$, so it cannot equal the leftover that lives inside $E$ unless the two private cells happen to match. They do not. The recovered $F$-only cell is $\\{4,6\\}$, a different pair.

so the statement is True.`,
      `**C.** → False

The two leftover piles are the recovered $\\{1,7\\}$ and $\\{4,6\\}$. Already $1$ sits in the first and misses the second, so the sets cannot be equal.

**1.** Difference is not commutative. $X\\setminus Y$ lives in $X$, while $Y\\setminus X$ lives in $Y$. Unless the two sets happen to be equal, the leftovers are different collections.

**2.** Both leftovers have two members, so size does not separate them. Membership does: $1\\in E\\setminus F$ and $1\\notin F\\setminus E$. One witness kills equality.

**3.** The trap is to think "both are what is left after removing the overlap, so they must match." Removing the overlap from $E$ leaves $E$'s private numbers; removing it from $F$ leaves $F$'s private numbers. Those private lists are $\\{1,7\\}$ and $\\{4,6\\}$, not the same.

What would make the claim true? $E$ and $F$ would need the same private numbers, which forces $E=F$. The given lists are not equal.

The two recovered leftovers differ.

Equality of leftovers would be a coincidence of private cells, not a law of difference. Here the private cells are $\\{1,7\\}$ and $\\{4,6\\}$. Naming them as equal is a false figure: two real recovered sets, written as if they were one. Difference is not commutative: the leftover lives inside the set named on the left. $E\\setminus F$ can never pick up $4$ or $6$, because those numbers miss $E$. $F\\setminus E$ can never pick up False$ or $7$, because those numbers miss $F$. The two recovered leftovers therefore share no member and cannot be equal. What would make them equal? The private cells would have to match, which forces $E=F$. The given lists are not equal. Checking only the sizes, both $2$, and stopping there has skipped the membership witness False$. Size matching is not set equality. Keeping $2$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim.

so the statement is False.`,
      `**D.** → True

Join the two leftover piles. The overview already assembled that union as $\\{1,4,6,7\\}$. Union of the outer cells never picks up the overlap $\\{3,5\\}$, because those numbers were deleted from both differences.

This combined leftover is the symmetric difference of $E$ and $F$: numbers that sit in exactly one of the two sets. The claimed roster is exactly that recovered four-element list.

The trap is to add $3$ or $5$ back in, writing the full union $E\\cup F$ by mistake, or to drop one of $4$ or $6$ in an off-by-one.

The recovered union of leftovers is $\\{1,4,6,7\\}$.

A student who writes $E\\cup F$ for this union has put the overlap back. The recovered four-element list is the outer cells only. The middle cell $\\{3,5\\}$ is absent on purpose.

so the statement is True.`,
      `**E.** → True

A number in both differences would have to be outside $F$ (to sit in $E\\setminus F$) and inside $F$ (to sit in $F\\setminus E$). That pair of demands is impossible, so the intersection of the leftovers is empty. The overview already recorded that empty cell.

This is not a fact about these particular numbers $1,3,4,5,6,7$. It is an identity: $(X\\setminus Y)\\cap(Y\\setminus X)=\\emptyset$ for any sets $X$ and $Y$. The two leftover piles are disjoint by construction.

The trap is to think that because both leftovers are nonempty, they must overlap. Nonempty does not mean overlapping. Another trap is to intersect $E$ with $F$ and report $\\{3,5\\}$, answering a different question.

The recovered intersection of leftovers is empty.

This emptiness is why symmetric difference can be written as a disjoint union of the two leftovers. The recovered outer cells do not fight over a shared number. There is no shared number left to fight over.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `**Part 1.** The sets.

Picture the two lists side by side. $E=\\{1,3,5,7\\}$ and $F=\\{3,4,5,6\\}$.

**Part 2.** The operations.

Difference $X\\setminus Y$ keeps members of $X$ that miss $Y$. Union of the two leftover piles is the numbers that sit in exactly one of the two sets. Intersection of those leftover piles is empty: a number cannot be both "outside $F$" and "inside $F$" at once.

**Part 3.** The scans.

| | in $E$ | not in $E$ |
| --- | --- | --- |
| **in $F$** | $\\{3,5\\}$ (overlap) | $\\{4,6\\}$ |
| **not in $F$** | $\\{1,7\\}$ | outside both |

So $E\\setminus F=\\{1,7\\}$ (left column, bottom row) and $F\\setminus E=\\{4,6\\}$ (right column, top row). Their **union** is the two leftover piles together, $\\{1,4,6,7\\}$. Their **intersection** is empty.`,
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

The even roster $A=\\{2,4,6,8,10\\}$ is meeting the multiple-of-three roster $B=\\{3,6,9,12\\}$. Intersection asks which numbers are tagged on both lists, a stricter combine than union. This letter is that overlap cell, not the eight-number union and not the overlap of $A$ with the small-number list $C$.

Part 3 already scanned $A$ against $B$ and left the singleton $\\{6\\}$. That recovered object is what the claim names. The even numbers $2,4,8,10$ miss $B$, and $B$'s $3,9,12$ miss $A$. Only $6$ sits in both, so the intersection is a one-element set.

**1.** Running a union instead would keep $2,3,4,8,9,10,12$ as well and land on eight numbers. The recovered isolation is checked against the claim using $2,3,4,8,9,10,12$, which is the figure the sessions actually produce. That is letter B's count, not this roster.

**2.** Keeping $4$ because it is even and sits next to $6$ treats nearness as membership in $B$. Nearness is not membership. Copying $A\\cap C=\\{2,4\\}$ into this slot answers a different second set: $C$ stops at $5$, while $B$ is the multiples of three.

What would have to change for the opposite verdict is a second shared number. If $B$ had listed $4$ or $8$, the intersection would have been larger than $\\{6\\}$. If $6$ had missed $B$, the overlap would have been empty. Against the given lists, the recovered intersection is the singleton $6$, matching the claimed roster.

The recovered intersection is $\\{6\\}$, so the statement is True.`,
      `**B.** → True

Union size is not $|A|$ plus $|B|$ with the overlap counted twice. The overview already assembled eight distinct members in $A\\cup B$. The shared $6$ is one object, not two.

Inclusion-exclusion records the same count: five from $A$, four from $B$, minus the one shared, leaving eight. The claim names that recovered size.

The trap is to add $5+4=9$ and forget to subtract the overlap, or to report $7$ by dropping $6$ entirely. Union keeps the overlap once.

The recovered union has eight elements.

A student who reports $9$ has added $5+4$ and kept two copies of $6$. The recovered union writes $6$ once, and the size is eight, not nine. The extra copy is not a new even number. It is the overlap counted twice. Inclusion-exclusion subtracts that one shared member. Without the subtraction the count overshoots; with a double subtraction it undershoots. The recovered roster $\\{2,3,4,6,8,9,10,12\\}$ has eight names.

so the statement is True.`,
      `**C.** → False

Difference $C\\setminus A$ deletes a member of $C$ only when that member also sits in $A$. The overview already recovered $C\\setminus A=\\{1,3,5\\}$. The claimed $\\{1,3\\}$ quietly deletes $5$, even though $5\\notin A$.

**1.** Scan $C=\\{1,2,3,4,5\\}$ against $A$. The numbers $2$ and $4$ sit in $A$, so they leave. The numbers $1$, $3$, and $5$ miss $A$, so they stay. Nothing in the difference rule licenses deleting $5$.

**2.** The dropped $5$ is not a rounding of a boundary. It is a member of $C$ that fails to meet $A$. Nearness to $A$'s $4$ or $6$ is not membership. This is the same off-by-one that broke a union by dropping a legal endpoint, now on a difference.

**3.** Confusing difference with intersection would have kept only $\\{2,4\\}$. Once $\\{2,4\\}$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Confusing it with $A\\setminus C$ would have kept $\\{6,8,10\\}$. After isolating the unknown, the check is against $A\\setminus C$. The figure $\\{6,8,10\\}$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $A\\setminus C$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Neither is this claim. This claim is $C$ minus $A$ with $5$ wrongly deleted.

What would make $\\{1,3\\}$ correct? $5$ would have to sit in $A$. It does not: $A$ is the even numbers from $2$ to $10$.

The recovered difference is $\\{1,3,5\\}$.

The false figure $\\{1,3\\}$ is one member short of the recovered leftover. That missing $5$ is not optional. It sits in $C$, it misses $A$, and the difference rule keeps it. Reprinting the leftover without $5$ is the same kind of silent deletion as dropping a legal endpoint from a union. Nearness of $5$ to $As $4$ and $6$ is not membership in $A$. $A$ is the even numbers from $2$ to False0$, and $5$ is odd, so $5$ was never a candidate for deletion. Treating difference as 'delete anything near the other list' invented a filter the operation does not have. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered $C\\setminus A$ is $\\{1,3,5\\}$, three numbers, not two. What would make $\\{1,3\\}$ honest? $5$ would have to sit in $A$. It does not.

so the statement is False.`,
      `**D.** → False

$B\\setminus C$ is not a copy of $B$. The overview already scanned $\\{3,6,9,12\\}$ against $C$ and left $\\{6,9,12\\}$. The claimed roster copies all of $B$ and ignores the witness $3$.

**1.** Difference deletes a member of $B$ when that member also sits in $C$. Here $3\\in C$, so $3$ must leave. The other three members of $B$ miss $C$: $6$, $9$, and $12$ all sit past $C$'s last number $5$, except $6$ which is larger than $5$ anyway. They stay.

**2.** The trap is to glance at $B$ and $C$, notice that most of $B$ looks "outside" $C$, and copy the whole of $B$. One shared number is enough to make $B\\setminus C$ strictly smaller than $B$. Another trap is to delete $6$ because it is even, mixing this letter with the $A\\cap C$ scan.

**3.** What would make the claimed copy of $B$ correct? $B$ and $C$ would have to be disjoint. They are not: they share $3$.

The recovered difference is $\\{6,9,12\\}$.

Copying $B$ as the difference is a false figure with an extra $3$. The recovered leftover already deleted $3$ because $3$ sits in $C$. Putting $3$ back pretends $B$ and $C$ share nothing. They share $3$. Difference $B\\setminus C$ is not a licence to reprint $B$. It is a membership test of each member of $B$ against $C$. The witness $3$ fails that test and must leave. The other three members $6,9,12$ miss $C$ (which stops at $5$) and stay. What would make a copy of $B$ honest? $B\\cap C$ would have to be empty. The overview recovered that overlap as $\\{3\\}$. One shared number is enough.

so the statement is False.`,
      `**E.** → False

Intersection $A\\cap C$ keeps numbers that sit in both. The overview already scanned $A$ against $C$ and left $\\{2,4\\}$. The extra $6$ in the claim is in $A$ but not in $C$.

**1.** $C$ is $\\{1,2,3,4,5\\}$. It stops at $5$. The even number $6$ sits in $A$ and misses $C$, so it cannot survive an intersection with $C$. The numbers $2$ and $4$ sit in both.

**2.** The trap is to intersect $A$ with $B$ instead and copy the $6$ from $A\\cap B=\\{6\\}$, or to treat "$C$ is the small numbers" as if $6$ were close enough. Close is not membership. Another trap is to run a union and keep $6,8,10$.

**3.** What would make $\\{2,4,6\\}$ correct? $6$ would have to sit in $C$. Extending $C$ through $6$ would do it. The given $C$ does not.

The recovered overlap is $\\{2,4\\}$.

The false figure $\\{2,4,6\\}$ mixes two recovered overlaps: $\\{2,4\\}$ from $A\\cap C$ and $\\{6\\}$ from $A\\cap B$. Those are different second sets. Intersection with $C$ cannot borrow a member from the scan against $B$.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `**Part 1.** The sets.

The lists are $A=\\{2,4,6,8,10\\}$, $B=\\{3,6,9,12\\}$, $C=\\{1,2,3,4,5\\}$.

**Part 2.** The operations.

Intersection keeps numbers tagged in both inputs. Union keeps every tagged number once. Difference $X\\setminus Y$ keeps members of $X$ that miss $Y$.

**Part 3.** The scans.

**Shared with $B$:** scan $A$'s members against $B$: $2,4,8,10$ miss $B$; only $6$ sits in both, so $A\\cap B=\\{6\\}$.

**Union $A\\cup B$:** start from $A$'s five numbers and add $B$'s new ones $3,9,12$ ($6$ already listed), giving $\\{2,3,4,6,8,9,10,12\\}$, eight numbers ($6$ once).

**$C$ minus $A$:** scan $\\{1,2,3,4,5\\}$: drop $2$ and $4$ (both in $A$), keep $1$, $3$, and $5$, leaving $\\{1,3,5\\}$.

**$B$ minus $C$:** scan $\\{3,6,9,12\\}$: drop $3$ (the only member also in $C$), keep $6,9,12$.

**$A$ with $C$:** scan $A$ against $C$: $2$ and $4$ sit in $C$; $6,8,10$ do not ($C$ stops at $5$), so $A\\cap C=\\{2,4\\}$.`,
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

A cohort of $50$ students has two course lists: $30$ in Mathematics and $25$ in Economics, with $12$ people on both lists. The claim asks how many students take at least one of the two courses, which is the size of the union, not the size of the overlap and not the leftover who take neither.

The overview's region table already filled that union row as $43$. Inclusion-exclusion is how that row was built: adding the two headlines counts the $12$ shared students twice, so one copy of the overlap is subtracted. The recovered $|M\\cup E|=43$ is the object this letter is reading.

The tempting false figure is $55$, the raw sum of the headlines with the overlap counted twice. That total already overshoots the room of $50$, which is a warning that a double count has occurred. Subtracting the overlap twice would underfill, landing on $31$. Union keeps the shared $12$ once, not twice and not zero times.

A student who reports $30$ or $25$ has named a single headline rather than the join. A student who reports $12$ has named the both-region. Neither of those is the at-least-one count.

What would have to change for the opposite verdict is a different overlap. If the courses had shared $0$ students, the union would have been $55$, which cannot even fit in a cohort of $50$. If they had shared $25$, the union would have been $30$. Against the given $|M\\cap E|=12$, the recovered union size is $43$.

The recovered union has $43$ students, so the statement is True.`,
      `**B.** → True

"Neither" is whoever sits outside the union. The overview already filled that region: cohort $50$ minus union $43$ leaves $7$. This letter reads that leftover, not a new inclusion-exclusion.

Those $7$ students take neither Mathematics nor Economics. They are not the only-Mathematics $18$ and not the only-Economics $13$. "Neither" is the outside of both circles.

The trap is to report $50-30-25= -5$ by subtracting both headlines without restoring the overlap, or to report $50-12=38$ by subtracting only the intersection. Neither of those is the complement of the union.

The recovered neither-region has $7$ students.

Those seven students are not a remainder after subtracting $30$ and then $25$ from $50$. That route goes negative because it forgets that twelve people were in both headlines. The recovered route is cohort minus union: $50$ minus $43$. Neither is the outside of both circles, not a leftover from one headline.

so the statement is True.`,
      `**C.** → True

Only-Mathematics is the Mathematics headline minus the overlap. The overview already recovered that region as $18$. Those $18$ sit in $M$ and not in $E$.

This is $|M\\setminus E|$, not $|M|$. Copying $30$ would count the $12$ who also take Economics. The claim correctly names the $18$.

The trap is $30-12=18$ computed as $30+12=42$, adding instead of subtracting, or swapping with only-Economics $13$.

The recovered only-Mathematics region has $18$ students.

If the claim had named $30$, it would have counted the twelve who also take Economics. Only-Mathematics is the leftover after those twelve are removed from the Mathematics headline. The recovered leftover is $18$. Those eighteen sit in $M$ and miss $E$. That is a different region from the union and from the neither-cell.

so the statement is True.`,
      `**D.** → False

$E\\subseteq M$ would need every Economics student to sit in Mathematics, which is the same as the only-Economics region being empty. The overview already recovered that region as $13$. Those $13$ students are in $E$ and not in $M$, so the inclusion fails.

**1.** Subsethood of finite sets can be read off sizes when the intersection is known: $E\\subseteq M$ would force $|E\\cap M|=|E|$, hence $12=25$, which is false. The $13$ leftover is that gap.

**2.** The trap is to see $12$ shared students and think "Economics sits inside Mathematics because they overlap." Overlap is not containment. Containment would require the entire Economics circle to lie inside Mathematics.

**3.** What would make the claim true? The only-Economics count would have to be $0$, which would need $|E|=12$. The stem gives $|E|=25$.

The recovered only-Economics region is nonempty.

Containment would swallow the whole Economics circle. The recovered picture does not: thirteen Economics students sit outside Mathematics. Overlap False2$ is evidence of sharing, not of one set sitting inside the other. The false verdict treats sharing as swallowing. $E\\subseteq M$ is equivalent to $|E\\setminus M|=0$. The overview recovered that only-Economics region as False3$, not $0$. Those thirteen people are a concrete counterexample: they take Economics and they do not take Mathematics. One such person would have been enough. Size comparison of the headlines, $25$ versus $30$, does not decide inclusion either. A smaller set can still stick out of a larger one, and here it does. What would make the inclusion true? The stem would need $|E|=12$, so that every Economics student already sits in the overlap.

so the statement is False.`,
      `**E.** → False

Disjointness means empty intersection. The stem already states $|M\\cap E|=12$, and the overview recorded those $12$ in the both-region. Twelve shared students are twelve too many.

The trap is to glance at $30$ and $25$ inside a cohort of $50$ and think the circles "might miss" because $30+25=55$ overshoots $50$. Overshooting is evidence of overlap, not of disjointness. Another trap is to confuse disjoint with "not equal."

What would make the claim true? The overlap would have to be $0$. The stem says it is $12$.

The recovered overlap is nonempty.

Disjointness would wipe the both-region. The stem filled that region with twelve students, and the overview kept the False2$. A cohort of $50$ that can fit $30$ and $25$ only by overlapping is the opposite of a disjoint pair.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `**Part 1.** The sets.

A cohort of $50$ students, with $|M|=30$ taking Mathematics, $|E|=25$ taking Economics, and $|M\\cap E|=12$ taking both.

**Part 2.** The operations.

**Inclusion-exclusion** subtracts the double-counted overlap once. Only-Mathematics is the Mathematics headline minus the overlap. Only-Economics is the Economics headline minus the overlap. "Neither" is the cohort size minus the union. Disjointness would need overlap $0$. $E\\subseteq M$ would need the only-Economics region to be empty.

**Part 3.** The scans.

| Region | How to get it | Size |
| --- | --- | --- |
| only Mathematics | $30-12$ | **18** |
| only Economics | $25-12$ | **13** |
| both | given | **12** |
| at least one (union) | $30+25-12$ | **43** |
| neither | $50-43$ | **7** |`,
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

Pairwise disjointness asks every pair, not just the triple overlap. The overview already scanned each pair and found empty intersections: $A$ never meets $B$ or $C$, and $B$ never meets $C$. The three blocks occupy separate thirds of $U$.

The trap is to check only $A\\cap B\\cap C$ and call that "pairwise." A triple overlap can be empty while two of the sets still share a member. Here the stronger pairwise check also holds.

The recovered pairwise intersections are all empty.

Pairwise is three checks, not one. The recovered empty pairs $A\\cap B$, $A\\cap C$, and $B\\cap C$ are those three checks. A nonempty pair would have killed the claim even if the triple overlap stayed empty.

so the statement is True.`,
      `**B.** → True

A partition needs nonempty blocks, pairwise disjointness, and union $U$. The overview already recorded all three: each block has three numbers, no pair shares a number, and $A\\cup B\\cup C=U$. So $\\{A,B,C\\}$ partitions $U$.

The trap is to think a partition must use singletons, or must use equally sized blocks. The definition never requires that. Another trap is to forget nonemptiness; here none of the blocks is empty.

The recovered coverage and disjointness both hold.

The three blocks are a partition because they cut $U$ into pieces with no gaps and no shared numbers. The recovered union is all of $\\{1,\\ldots,9\\}$, and the recovered pairs share nothing. That is the definition, not a bonus property.

so the statement is True.`,
      `**C.** → True

The triple intersection sits inside every pairwise one. Once $A\\cap B=\\emptyset$, intersecting further with $C$ cannot create a member, so $A\\cap B\\cap C=\\emptyset$. The overview already noted that the triple intersection is empty.

This is weaker than pairwise disjointness, and it follows from it. The claim does not say pairwise; it names the triple. The recovered empty triple overlap matches.

The trap is to think three nonempty sets cannot have empty triple overlap. They can, and here they do, because they miss each other in pairs.

The recovered triple intersection is empty.

Triple emptiness is cheaper than pairwise emptiness. The recovered pairwise scan already paid the higher price, so the cheaper claim comes free. A different triple of sets could have empty triple overlap and still share a pair; these three do not.

so the statement is True.`,
      `**D.** → False

Empty intersection is not empty difference. Because $A$ and $B$ share nothing, subtracting $B$ deletes nobody from $A$. The overview already recovered $A\\setminus B=A=\\{1,2,3\\}$, which is not empty.

**1.** Difference $A\\setminus B$ asks which members of $A$ miss $B$. All three of $1,2,3$ miss $B$, so all three stay. The empty set would appear only if every member of $A$ sat in $B$, i.e. if $A\\subseteq B$. Disjoint nonempty sets are the opposite of that.

**2.** The trap is to treat "no overlap" as "nothing left." That slogan is true of $A\\cap B$, not of $A\\setminus B$. Intersection empty means the overlap pile is empty. Difference empty means the left-hand pile is gone.

**3.** What would make $A\\setminus B=\\emptyset$? We would need $A\\subseteq B$. Combined with the recovered $A\\cap B=\\emptyset$, that would force $A=\\emptyset$. But $A$ has three members.

The recovered difference is $\\{1,2,3\\}$.

The false figure $\\emptyset$ for $A\\setminus B$ is the recovered intersection, copied into the difference slot. Difference and intersection are opposite leftover rules when the sets miss each other: intersection empty means difference equals the left-hand set. Here that left-hand set is $\\{1,2,3\\}$. Empty difference would mean $A\\subseteq B$. Combined with the recovered empty overlap, that would force $A$ empty. But $A$ has three members in the first third of $U$. The slogan 'no overlap, nothing left' mixes two cells of the Venn diagram. No overlap empties the middle cell. Nothing left would empty the left cell. Those cells are not the same. What would make $A\\setminus B=\\emptyset$? $A$ would have to sit inside $B$, which these disjoint blocks refuse.

so the statement is False.`,
      `**E.** → False

The leap "empty intersection, so one factor is empty" is the product-zero habit from arithmetic, not a set identity. The overview already recorded that both $A$ and $B$ have three members and still miss each other.

**1.** In numbers, $xy=0$ forces $x=0$ or $y=0$. In sets, $X\\cap Y=\\emptyset$ only forces that $X$ and $Y$ share no member. Both can be large. Here each has three numbers from different thirds of $U$.

**2.** The trap is to import the zero-product rule because the empty set is written $\\emptyset$ and "feels like zero." Intersection is not multiplication. Two nonempty disjoint blocks are the standard picture of a partition, not a contradiction.

**3.** What would make the claim true? It is false as a general rule. A special case where it holds is if one of $A$ or $B$ is already empty, but that is an extra assumption, not a consequence of disjointness.

Disjointness bans shared members; it does not erase the sets. The recovered $A$ and $B$ are both nonempty.

The zero-product rule is a fact about numbers, not about sets. The recovered $A$ and $B$ are a working counterexample: three members each, overlap empty, neither set gone. Importing $xy=0$ into a Venn diagram is how this false inference gets written. Empty intersection forbids shared members. It does not forbid nonempty factors. The three-block partition of $U$ is built from three nonempty pairwise disjoint pieces, which would be illegal if the leap were a set identity. It is not a set identity. What would make 'one of them is empty' true? An extra assumption that one block is empty, which the stem does not give. Both $A=\\{1,2,3\\}$ and $B=\\{4,5,6\\}$ are sitting in the overview as three-element lists.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `**Part 1.** The sets.

The three blocks sit in separate thirds of $U=\\{1,\\ldots,9\\}$:

$$A=\\{1,2,3\\},\\quad B=\\{4,5,6\\},\\quad C=\\{7,8,9\\}.$$

**Part 2.** The operations.

Pairwise disjointness means every pair of blocks shares nothing. A **partition** of $U$ needs nonempty blocks, pairwise disjointness, and union equal to $U$. Difference $A\\setminus B$ keeps members of $A$ that miss $B$. An empty intersection never forces either set to be empty.

**Part 3.** The scans.

**Pairwise check.** Every pair of blocks uses different numbers, so $A\\cap B=A\\cap C=B\\cap C=\\emptyset$. The triple intersection is then empty too.

**Coverage.** $A\\cup B\\cup C=\\{1,\\ldots,9\\}=U$, and each block is nonempty.

**What disjointness does not say.** $A\\setminus B=A$ because nothing is shared, and both $A$ and $B$ have three elements.`,
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

Complement is a scan of $U$, not of $X$ rewritten backwards. The overview already dropped $1$ through $6$ from $\\{1,\\ldots,12\\}$ and left $X^c=\\{7,8,9,10,11,12\\}$. The claim names that recovered list.

People $7,8,9$ know SQL but not Python, so they still sit in $X^c$. Complement of Python is "does not know Python," not "knows nothing."

The trap is to drop $7,8,9$ as well because they sit in $Y$, writing the neither-region by mistake. Another trap is to reverse $X$ as $\\{6,5,4,3,2,1\\}$ and call that a complement.

The recovered complement is $\\{7,8,9,10,11,12\\}$.

People $7,8,9$ look like they 'have a skill,' and a rushed complement deletes them. They have SQL, not Python. Complement of $X$ only asks about Python. The recovered $X^c$ keeps them.

so the statement is True.`,
      `**B.** → True

Union $X\\cup Y$ covers $1$ through $9$. Complement inside a $12$-person $U$ can only be the three people who miss both skills. The overview already recovered $(X\\cup Y)^c=\\{10,11,12\\}$.

Those three know neither Python nor SQL. Everyone from $1$ to $9$ has at least one of the two skills, so they cannot sit in the complement of the union.

The trap is to keep $8$ or $9$ because they sit at the high end of $Y$, or to include $7,8,9$ from $X^c$ without intersecting with $Y^c$. Complement of a union is the neither-region, not a single complement.

The recovered outside of the union is $\\{10,11,12\\}$.

The neither-region is three people, not four or five. Padding it with $8$ or $9$ puts SQL knowers outside a union that already contains them. The recovered complement of the union stops at $\\{10,11,12\\}$.

so the statement is True.`,
      `**C.** → True

De Morgan identifies $(X\\cup Y)^c$ with $X^c\\cap Y^c$. Members of both complements are people who know neither Python nor SQL. The overview already listed $X^c=\\{7,8,9,10,11,12\\}$ and $Y^c=\\{1,2,3,10,11,12\\}$; their overlap is $\\{10,11,12\\}$.

People $7,8,9$ sit in $X^c$ but miss $Y^c$ because they know SQL. People $1,2,3$ sit in $Y^c$ but miss $X^c$ because they know Python. Only $10,11,12$ survive both filters.

The trap is to union the complements instead of intersecting them, which would keep $1,2,3,7,8,9$ as well. That larger list is $(X\\cap Y)^c$, a different De Morgan identity.

The recovered double-complement intersection is $\\{10,11,12\\}$.

Intersecting the two complements is a second filter on $X^c$. The recovered $X^c$ still contains $7,8,9$; the second filter removes them because they know SQL. What remains is the same neither-region $\\{10,11,12\\}$.

so the statement is True.`,
      `**D.** → True

The second De Morgan identity says escaping an intersection takes only escaping one of the two sets: $(X\\cap Y)^c=X^c\\cup Y^c$. Both sides name the people missing Python or missing SQL (or both).

The overview recovered $(X\\cap Y)^c=\\{1,2,3,7,8,9,10,11,12\\}$ by removing the overlap $\\{4,5,6\\}$ from $U$, and the same list is the union of the two complements. The identity holds on these lists.

This letter is not a new scan. It is the observation that the two recovered lists match. The trap is to swap union and intersection on the right-hand side and write $X^c\\cap Y^c$, which is only $\\{10,11,12\\}$.

The two recovered sides agree.

If the two sides had disagreed, De Morgan would have failed on these lists. They do not disagree. Removing $\\{4,5,6\\}$ from the twelve-person $U$ is the same list as joining $X^c$ with $Y^c$.

so the statement is True.`,
      `**E.** → False

The union of complements must keep every member of each complement. The overview already listed $X^c=\\{7,8,9,10,11,12\\}$ and $Y^c=\\{1,2,3,10,11,12\\}$. Joining them keeps $7,8,9$ from $X^c$ as well, giving $\\{1,2,3,7,8,9,10,11,12\\}$.

**1.** The claimed list $\\{1,2,3,10,11,12\\}$ is $Y^c$ alone. It undercounts by dropping $7,8,9$, who do not know Python and therefore belong in $X^c$ and in the union of complements.

**2.** Those three people know SQL, so they sit in $Y$, but union of complements is not "outside both." It is "outside at least one." Missing Python is enough. De Morgan names this list as $(X\\cap Y)^c$, everyone except the triple $\\{4,5,6\\}$.

**3.** The trap is to copy $Y^c$ after a glance at the low end of $U$, or to confuse this union with the neither-region $\\{10,11,12\\}$. Another trap is to think $7,8,9$ "already have a skill" and should be deleted from a complement-union; that deletion would be an intersection of complements.

What would make the claimed six-person list correct? It would have to be $Y^c$, or $X^c\\cap Y^c$ if one also dropped $1,2,3$. Neither is $X^c\\cup Y^c$.

The recovered union of complements has nine people.

The false figure $\\{1,2,3,10,11,12\\}$ is $Y^c$ wearing a union label. Union of complements must also keep $7,8,9$ from $X^c$. Those three know SQL and still miss Python, so missing one skill is enough. The recovered nine-person list is everyone except the Python-and-SQL overlap $\\{4,5,6\\}$. A six-person reprint has dropped a whole SQL-only block. De Morgan names this union as $(X\\cap Y)^c$: everyone who misses at least one of the two skills. The claimed six-person list also drops $7,8,9$ as if missing SQL were required, which would be an intersection of complements, the neither-region. So the false figure is not a random undercount. It is the wrong De Morgan side, $Y^c$ or $X^c\\cap Y^c$, sold under a union heading. What would make the six-person list honest? The claim would have to name $Y^c$, not $X^c\\cup Y^c$.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `**Part 1.** The sets.

Employees $1$ to $12$; Python knowers $X=\\{1,\\ldots,6\\}$; SQL knowers $Y=\\{4,\\ldots,9\\}$. Complements are "everyone else in $U$."

**Part 2.** The operations.

Complement is a scan of $U$, not of a set rewritten backwards. **De Morgan:** $(X\\cup Y)^c=X^c\\cap Y^c$ and $(X\\cap Y)^c=X^c\\cup Y^c$. Escaping a union means missing both skills. Escaping an intersection takes only missing one of the two.

**Part 3.** The scans.

| Set | Members |
| --- | --- |
| $X^c$ | $\\{7,8,9,10,11,12\\}$ |
| $Y^c$ | $\\{1,2,3,10,11,12\\}$ |
| $X\\cup Y$ | $\\{1,\\ldots,9\\}$ |
| $(X\\cup Y)^c$ | $\\{10,11,12\\}$ |
| $X\\cap Y$ | $\\{4,5,6\\}$ |
| $(X\\cap Y)^c$ | $\\{1,2,3,7,8,9,10,11,12\\}$ |`,
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

Putting $A$ and $B$ together covers $1$ through $8$. The overview already recovered $(A\\cup B)^c=\\{9,10\\}$. The claimed $\\{8,9,10\\}$ illegally keeps $8$, but $8\\in B$ and therefore $8\\in A\\cup B$.

**1.** Complement of a union is the neither-region. The number $8$ sits in $B$, so it sits in the union, so it cannot sit in the complement. Nearness to $9$ is not a licence to keep it.

**2.** This is the same off-by-one that pads a complement with a boundary point the set actually contains. $U$ runs to $10$, and $B$ runs to $8$, so $8$ is an endpoint of $B$, not of the outside.

**3.** What would make $\\{8,9,10\\}$ correct? $B$ would have to stop at $7$, so that $8$ missed the union. The given $B$ includes $8$.

The recovered complement of the union is $\\{9,10\\}$.

The false figure $\\{8,9,10\\}$ pads the neither-region with an endpoint of $B$. Complement of a union is outside both lists, and $8$ is inside $B$. Off-by-one at a closed end is still a membership error. The recovered outside is $\\{9,10\\}$ only. The number $8$ sits in $B=\\{4,5,6,7,8\\}$, so it sits in $A\\cup B$, so it cannot sit in $(A\\cup B)^c$. Nearness to $9$ is not a licence to keep it. This is the same padding error as keeping a boundary point that one of the inputs already claimed. What would make $\\{8,9,10\\}$ honest? $B$ would have to stop at $7$. The given $B$ includes $8$. Complementing $A$ alone and then trimmed to the high end would also land near this false list; that route never asked whether $8$ sits in $B$. Working from the isolated values, $A$ is the figure that is checked, not the detour that produced $B$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

so the statement is False.`,
      `**B.** → True

The second De Morgan identity says $(A\\cap B)^c=A^c\\cup B^c$. The overview already recovered both sides as $\\{1,2,3,6,7,8,9,10\\}$, by removing the overlap $\\{4,5\\}$ from $U$ and by joining the two complements. The identity holds on these lists.

Escaping an intersection takes only escaping one of the two sets. That is why $1,2,3$ (miss $B$) and $6,7,8$ (miss $A$) both survive, together with $9,10$ (miss both).

The trap is to write $A^c\\cap B^c$ on the right-hand side, which is only $\\{9,10\\}$. Swapping union and intersection is the standard De Morgan slip.

The two recovered sides agree.

The identity is not a new computation. It is the observation that two recovered lists, the complement of the overlap and the union of the complements, are the same eight numbers. Swapping to an intersection of complements would shrink that list to $\\{9,10\\}$ and break the identity.

so the statement is True.`,
      `**C.** → False

$A^c\\cap B^c$ is "outside both," which De Morgan identifies with $(A\\cup B)^c$. The overview already recovered that as $\\{9,10\\}$. The claimed $\\{6,7,8,9,10\\}$ is $A^c$ alone: those extra $6,7,8$ miss $A$ but still sit in $B$.

**1.** Intersection of complements is the stricter filter. A number must miss $A$ and miss $B$. The numbers $6,7,8$ miss $A$ and sit in $B$, so they fail the second filter.

**2.** The trap is to copy $A^c$ and call it the double complement intersection, forgetting to pass through $B^c$. Another trap is to union the complements and keep $1,2,3$ as well, which is the other De Morgan list.

**3.** What would make $\\{6,7,8,9,10\\}$ correct? That list is $A^c$. It would match $A^c\\cap B^c$ only if $6,7,8$ also missed $B$. They do not.

The recovered intersection of complements is $\\{9,10\\}$.

Copying $A^c$ into the double-complement slot is a false figure with three extra numbers. Those extras $6,7,8$ fail the 'miss $B test. The recovered intersection of complements keeps only $\\{9,10\\}$. Intersection of complements is the stricter filter: miss $A$ and miss $B$. The numbers $6,7,8$ miss $A$ and sit in $B$, so they survive $A^c$ and die in $B^c$. De Morgan identifies $A^c\\cap B^c$ with $(A\\cup B)^c$, already recovered as $\\{9,10\\}$. The claimed five-element list is $A^c$ itself. What would make that list honest? The claim would have to name $A^c$, not $A^c\\cap B^c$. Running only one complement and stopping has not intersected anything. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

so the statement is False.`,
      `**D.** → True

The overlap is $A\\cap B=\\{4,5\\}$. Removing those two from $U=\\{1,\\ldots,10\\}$ leaves $(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}$. The overview already recorded that list. It keeps $A$-only, $B$-only, and neither.

The claimed roster matches. The numbers $4$ and $5$ are the only ones deleted, because they are the only ones in both $A$ and $B$.

The trap is to also delete $6,7,8$ as "near the overlap," or to keep $4$ because it starts $B$. Complement of an intersection is everyone except the overlap.

The recovered complement of the intersection matches the claim.

If the claim had dropped $8$ as well, it would have over-deleted. The number $8$ misses $A$, so it belongs in $(A\\cap B)^c$. The recovered list keeps $A$-only, $B$-only, and neither, and $8$ is $B$-only.

so the statement is True.`,
      `**E.** → False

$A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$. Their union must include every member of $A^c$. The overview already joined them as $\\{1,2,3,6,7,8,9,10\\}$. The claimed $\\{1,2,3,9,10\\}$ is $B^c$ alone, so it drops $6,7,8$.

**1.** Those three numbers miss $A$, so they belong in $A^c$ and therefore in any union that includes $A^c$. They sit in $B$, which is irrelevant for a union of complements: missing one set is enough.

**2.** The trap is the same undercount as in the Python/SQL task: copying one complement and calling it the union of both. Another trap is to report the neither-region $\\{9,10\\}$.

**3.** What would make the five-person list correct? It is $B^c$. Equality with $A^c\\cup B^c$ would need $A^c\\subseteq B^c$, i.e. everyone outside $A$ also outside $B$, which is false of $6,7,8$.

The recovered union of complements has eight numbers.

The false figure $\\{1,2,3,9,10\\}$ is one complement pretending to be two. Union does not get to ignore $A^c$. The recovered join puts $6,7,8$ back, and the list grows to eight numbers. Those three miss $A$, so they belong in $A^c$ and in any union that includes $A^c$. Sitting in $B$ is irrelevant for a union of complements: missing one set is enough. The claimed five-element list is $B^c$ alone. What would make it honest? The claim would have to name $B^c$. Against $A^c\\cup B^c$ it is the same undercount as the Python/SQL false union: one complement sold as two. The recovered eight-number list is also $(A\\cap B)^c$, everyone except $\\{4,5\\}$.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `**Part 1.** The sets.

Same De Morgan toolkit on $U=\\{1,\\ldots,10\\}$, $A=\\{1,\\ldots,5\\}$, $B=\\{4,\\ldots,8\\}$.

**Part 2.** The operations.

Complement is everyone in $U$ that a set leaves out. De Morgan: $(A\\cup B)^c=A^c\\cap B^c$ and $(A\\cap B)^c=A^c\\cup B^c$. Several false claims pad those lists with numbers that belong on the inside of a set, not the outside.

**Part 3.** The scans.

Build the pieces once:

$$A^c=\\{6,7,8,9,10\\},\\quad B^c=\\{1,2,3,9,10\\},$$

$$A\\cup B=\\{1,\\ldots,8\\}\\Rightarrow(A\\cup B)^c=\\{9,10\\},$$

$$A\\cap B=\\{4,5\\}\\Rightarrow(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

Then $A^c\\cap B^c=\\{9,10\\}$ and $A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}$, matching the two De Morgan identities.`,
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

The three pairs use distinct numbers and cover $A$. The overview already checked all three partition demands: nonempty blocks, empty pairwise intersections, union $A$. This letter reads that pass, not a new scan.

The trap is to require singletons, or equal block sizes. The definition never asks for those.

The recovered $P$ is a partition.

Three pairs, six numbers, no repeats, no gaps: that is the recovered $P$. A partition does not have to look like singletons to count..

Six numbers, three pairs, no repeats, no gaps: the recovered $P$ meets every clause of the definition. Equal block sizes are a coincidence, not a requirement. Singletons are allowed and not required..

The recovered $P$ is three pairs that cut $A$ with no leftover number and no shared number.

so the statement is True.`,
      `**B.** → False

Block count is free. The overview already named two valid partitions of this six-element $A$: the one-block $\\{A\\}$ and the six-singleton partition. Forcing the number of blocks to equal $n$ would ban clumping, which the definition never does.

**1.** A partition is a covering by nonempty disjoint blocks. It does not mention a preferred block count.

**2.** The false figure is "six elements, so six blocks." That describes only the discrete partition, one among many.

**3.** What would make the claim true? Nothing, as a general rule. Already this $A$ has at least two partitions with different block counts.

The recovered examples disagree in block count.

The discrete partition (six singletons) and the indiscrete partition (one block $A$) are both legal and have different block counts. The claim bans one of them without licence. Block count is not in the definition. What would make 'exactly $n$ blocks' necessary? An extra sentence in the definition that is not there. The recovered examples already vary: False$ block versus $6$ blocks, both partitions of the same $A$..

Forcing block count equal to $n$ would declare the one-block partition illegal. The recovered $\\{A\\}$ is a legal partition of a six-element set: one nonempty block, nothing to be disjoint from, union $A$. The six-singleton partition is also legal and has a different count. Two recovered examples with counts False$ and $6$ already refute 'must have exactly $n$ blocks.' The definition never mentions a preferred count. Clumping is allowed. What would make the claim true as a general rule? An extra sentence that is not in the definition. No such sentence is there..

The recovered examples already vary in block count, so 'exactly $n$ blocks' cannot be required..

Two recovered partitions of the same $A$ already have different block counts, so the 'must' is false as a general rule.

so the statement is False.`,
      `**C.** → False

$Q$ fails pairwise disjointness: the two blocks share $3$. The overview already recorded that broken condition. One failure disqualifies a partition, even though the union still equals $A$.

**1.** Pairwise disjointness is not optional. Shared $3$ is a concrete witness that the blocks overlap.

**2.** Coverage can hold while disjointness fails. Here it does. Checking only the union is how this false partition gets written.

**3.** What would make $Q$ a partition? The shared $3$ would have to sit in only one block. The given blocks both contain it.

The recovered overlap $\\{3\\}$ kills the collection.

Shared $3$ is a membership witness, not a near miss. The two blocks of $Q$ both contain $3$, so they are not disjoint. Union equal to $A$ is true and irrelevant once disjointness fails. A partition needs all three conditions at once. This collection fails the second. Splitting $3$ into only one of the two blocks would repair it; the given $Q$ does not split $3$. The recovered overlap is $\\{3\\}$, one number too many for pairwise disjointness..

Overlap at $3$ is a membership fact, not a visual nearness. Both blocks of $Q$ contain $3$, so pairwise disjointness fails. The union can still equal $A$; coverage is not the failing clause. A partition needs all three clauses at once. This collection fails the second. Splitting $3$ into only one block would repair $Q$. The given $Q$ does not. The recovered overlap $\\{3\\}$ is one shared number, and one is enough to disqualify the collection. Checking only that every number of $A$ appears somewhere is how this false partition gets written.

so the statement is False.`,
      `**D.** → False

$R$'s blocks are nonempty and disjoint, but the union is $\\{1,2,3,4,5\\}$, which misses $6\\in A$. The overview already flagged that hole. Coverage is the third partition demand, and a hole kills it.

The trap is to stop after checking disjointness. Two out of three is not a partition.

The recovered union misses $6$.

Missing $6$ is a hole in $A$. Disjoint nonempty pairs do not cover a six-element set if one number is left out. The recovered union $\\{1,2,3,4,5\\}$ is not $A$. Adding a block $\\{6\\}$ would repair $R$; the given $R$ has no such block. Two of three conditions is not a partition..

A hole at $6$ means the union is not $A$. Disjoint nonempty blocks that miss a member of $A$ are not a partition of $A$. The recovered union $\\{1,2,3,4,5\\}$ is one short. Adding $\\{6\\}$ as a fourth block would repair $R$. The given $R$ has no such block. Stopping after disjointness is two out of three.

so the statement is False.`,
      `**E.** → True

For this $A$ with $n=6\\ge 2$, the one-block partition and the six-singleton partition are two different partitions. The overview already named both constructions. The same two work for any set with at least two elements.

The trap is to think a set has only its discrete partition, or only $\\{A\\}$. Both exist as soon as $n\\ge 2$.

Two recovered partitions exist.

As soon as a set has two elements, you can clump them or split them. Those are two partitions. The recovered $A$ with $n=6$ has at least those two. The claim is not special to six; it holds for every $n\\ge 2$..

Two constructions, two partitions. The recovered $A$ admits at least $\\{A\\}$ and the six singletons. Any set with two or more elements admits those two. The claim is that existence, not a count of all partitions. More than one is already true.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `**Part 1.** The set.

$A=\\{1,2,3,4,5,6\\}$. A collection partitions $A$ only when all three hold: every block nonempty, blocks pairwise disjoint, union equals $A$.

**Part 2.** The operations.

Block count is free: $\\{A\\}$ is a $1$-block partition, and six singletons is a $6$-block partition. For any set with $n\\ge 2$ elements those two constructions are different, so more than one partition always exists.

**Part 3.** The scans.

**Case $P=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$.** Pairs use distinct numbers and cover everything.

**Case $Q=\\{\\{1,2,3\\},\\{3,4,5,6\\}\\}$.** Blocks share $3$, fails pairwise disjointness.

**Case $R=\\{\\{1,2\\},\\{3,4\\},\\{5\\}\\}$.** Union misses $6$, fails coverage.`,
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

Each of five elements is an independent include-or-exclude, so the overview recovered $2^5=32$ subsets. This letter reads that count.

The trap is $5^2=25$, or $2\\times 5=10$, or $31$ by dropping the empty set. The power-set count includes $\\emptyset$ and $A$.

The recovered total is $32$.

Thirty-two includes the empty set and $A$. The recovered power-set count is $2^5$, not $5!$, not $5^2$..

Five independent two-way choices multiply to $32$. The recovered total includes $\\emptyset$ and $A$. Reporting $31$ already answers a different letter. Reporting $5$ counts elements, not subsets..

The recovered total $32$ is the power-set count, empty set included, $A$ included..

Five keep-or-drop choices multiply to $32$, empty set included. That recovered total is the power-set count this letter names.

so the statement is True.`,
      `**B.** → True

Proper subsets are all subsets except $A$ itself. The overview already computed $32-1=31$.

The trap is to drop both $A$ and $\\emptyset$ and report $30$, mixing proper with nonempty. Proper allows $\\emptyset$ and forbids only $A$.

The recovered proper count is $31$.

Proper drops $A$ only. The recovered $31$ still includes $\\emptyset$. Mixing proper with nonempty drops two different subsets and would report $30$..

Proper means unequal to $A$. The recovered $31$ keeps $\\emptyset$. Nonempty drops $\\emptyset$ and keeps $A$, a different $31$-member family. Same size, different drop. This letter drops $A$..

The recovered proper family still contains the empty set. That is allowed..

Proper keeps the empty set and drops only $A$. The recovered $31$ is that family, not the nonempty family.

so the statement is True.`,
      `**C.** → False

Choosing $4$ out of $5$ is choosing which one element to omit. The overview recovered $\\binom{5}{4}=5$, not $10$. The $10$ looks like $\\binom{5}{2}$, the two-element count.

**1.** Five choices of which one letter to leave out give five four-element subsets.

**2.** The false figure $10$ is a real binomial, the wrong one. Size $2$ is not size $4$. Also $\\binom{5}{4}=\\binom{5}{1}=5$, by symmetry, not $10$.

**3.** Doubling $5$ by order would treat subsets as ordered tuples. Sets do not remember order.

What would make $10$ honest? A different size, namely $2$. The claim asked for size $4$.

The recovered four-element count is $5$.

Five ways to omit one element is the recovered size-$4$ count. The false False0$ is $\\binom{5}{2}$, a real number for a different size. Binomial symmetry says $\\binom{5}{4}=\\binom{5}{1}=5$, never False0$. Doubling by order treats $\\{a,b,c,d\\}$ as different from a permutation of itself. Sets do not do that. What would make False0$ correct? Asking for two-element subsets. The claim asked for four-element subsets. The recovered table lists $5$ in that row..

Omit one of five elements: five four-element subsets. The recovered $\\binom{5}{4}=5$ is also $\\binom{5}{1}$. The false False0$ is $\\binom{5}{2}$, the two-element row of the same table. Those rows are not interchangeable. Doubling $5$ by order would treat a four-element set as $4!$ ordered tuples, which is not a subset count. What would make False0$ honest? Asking for subsets of size $2$. The claim asked for size $4$. The recovered table lists $5$ in the size-$4$ row and False0$ in the size-$2$ row. Copying the wrong row is the whole error..

The recovered size-$4$ row is $5$, not False0$. Wrong row of the binomial table is the whole false figure.

so the statement is False.`,
      `**D.** → True

Nonempty subsets drop only $\\emptyset$, leaving $32-1=31$. The overview already recorded that count. It happens to match the proper count, because both drop one subset, but they drop different subsets: nonempty drops $\\emptyset$, proper drops $A$.

The trap is to think those two families are the same collection. They are the same size and not the same sets.

The recovered nonempty count is $31$.

Nonempty and proper are the same size here because $|A|=5>0$, each dropping one subset. They are not the same family. The recovered nonempty count is still $31$..

Drop $\\emptyset$ from $32$ and $31$ nonempty subsets remain. The recovered nonempty family still contains $A$. Proper is the other $31$, containing $\\emptyset$ and not $A$. This letter is nonempty.

so the statement is True.`,
      `**E.** → False

Even sizes $0,2,4$ add as $1+10+5=16$, not $15$. The overview already summed those binomials. For any finite set the even-sized and odd-sized subsets are equally many, here $16$ and $16$.

**1.** $\\binom{5}{0}=1$, $\\binom{5}{2}=10$, $\\binom{5}{4}=5$. The sum is $16$.

**2.** The false figure $15$ is one short, as if someone dropped the empty set from the even family. Size $0$ is even.

**3.** Half of $32$ is $16$, not $15$. Odd sizes $1,3,5$ also sum to $16$.

What would make $15$ honest? Nothing in this count. Dropping $\\emptyset$ would be a different, unasked family.

The recovered even-size count is $16$.

Even cardinality includes $0$. Dropping the empty set from the even family is how False5$ appears. The recovered sum False+10+5=16$ keeps that empty set. Half of $32$ is False6$, matching the even-odd split for any finite set. The false figure False5$ is one short of a split that has to be equal. What would make False5$ honest? A different family, such as even sizes excluding $\\emptyset$. That family was not asked..

Size $0$ is even. The recovered even-size sum is False+10+5=16$, empty set included. The false False5$ drops that empty set from the even family. Half of $32$ is False6$, and the odd sizes False,3,5$ also sum to False6$. A finite set always splits its power set evenly between even and odd sizes. Off-by-one from False6$ to False5$ breaks that split. What would make False5$ honest? A different family, such as positive even sizes only. That family was not asked. The recovered even-size count is False6$..

The recovered even-size count is False6$, empty set included as size $0$. Half of $32$ is False6$, not False5$.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `**Part 1.** The set.

No need to name the five elements. Each subset is an include/exclude choice for every element, so $2^5=32$ subsets in total.

**Part 2.** The operations.

Proper subsets drop $A$ itself. Nonempty subsets drop $\\emptyset$. Size counts use binomial coefficients. Choosing $4$ out of $5$ is choosing which one element to leave out.

**Part 3.** The scans.

| Kind of subset | Count |
| --- | --- |
| all subsets | $32$ |
| proper ($\\ne A$) | $32-1=31$ |
| nonempty | $32-1=31$ |
| size exactly $4$ | $\\binom{5}{4}=5$ |
| even size $\\{0,2,4\\}$ | $\\binom{5}{0}+\\binom{5}{2}+\\binom{5}{4}=1+10+5=16$ |`,
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

A point sits in both intervals when the tighter bounds $5\\le x\\le 10$ hold. The overview already recovered $A\\cap B=[5,10]$. Both endpoints survive: $5$ is the closed left end of $B$ and sits in $A$, and $10$ is the closed right end of $A$ and sits in $B$.

The trap is to write $(5,10)$ by opening both ends, or $[5,10)$ by copying $B$'s open right end onto $10$.

The recovered intersection is $[5,10]$.

Closed at $5$ and closed at $10$ because each of those ends is closed in the interval that supplies it, and the other interval contains that point. The recovered intersection is the closed segment $[5,10]$, not an open one..

Tighter bounds give $5\\le x\\le 10$. Both recovered endpoints survive: $5$ closed in $B$ and inside $A$, $10$ closed in $A$ and inside $B$. Opening either end would drop a point that sits in both intervals.

so the statement is True.`,
      `**B.** → False

Union runs from just above $0$ to just below $15$, so $(0,15)$, not $(0,15]$. The overview already excluded $15$: it fails $x<15$ in $B$ and fails $x\\le 10$ in $A$. A union cannot include a point that both inputs excluded.

**1.** The right end of the union is the more inclusive of the two right ends, but $B$ is open at $15$ and $A$ never reaches $15$. So $15$ is out.

**2.** The false figure $(0,15]$ pads a closed $15$ onto an open end. Off-by-one at a bracket is still a membership error.

**3.** What would make $(0,15]$ honest? $B$ would have to be $[5,15]$. The given $B$ is $[5,15)$.

The recovered union is $(0,15)$.

The right-hand bracket is the trap. $B$ is open at False5$, and $A$ never reaches False5$, so False5$ sits in neither. Union cannot create a point both sides excluded. The recovered union is $(0,15)$, open on the right. The claimed $(0,15]$ is a false figure that closes an end the inputs left open. What would close it? Writing $B=[5,15]$. The stem wrote $[5,15)$. Off-by-a-bracket at False5$ is the same membership error as keeping $8$ in a complement of a union that already contains $8$..

The right end False5$ is open in $B$ and unreachable from $A$. Union cannot include a point both inputs excluded. The recovered union is $(0,15)$, open on the right. The claimed $(0,15]$ closes that end without licence. Off-by-a-bracket at False5$ is a membership error, the same kind as keeping an endpoint that one of the sets already claimed. What would close the right end? Writing $B=[5,15]$. The stem wrote $[5,15)$. Copying $As closed right bracket onto the union has mixed two different ends, False0$ and False5$.. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence.

The recovered union is open at False5$ because both inputs excluded False5$. Closing that end is a false figure.

so the statement is False.`,
      `**C.** → True

$10$ is the right endpoint of $A=(0,10]$, hence $10\\in A$. Also $5\\le 10<15$, hence $10\\in B$. Both memberships hold, so $10$ sits in the recovered intersection $[5,10]$.

The trap is to treat $10$ as open because $B$ is open at $15$, a different end.

The recovered intersection contains $10$.

The point $10$ is closed in $A$ and interior to $B$'s interval. Both recovered memberships hold, so $10$ is in the intersection. Openness of $B$ at $15$ does not open $A$ at $10$..

The point $10$ is closed in $A$ and strictly below $15$, so both recovered memberships hold. Openness of $B$ at $15$ does not open $A$ at $10$. $10$ sits in the recovered intersection $[5,10]$.

so the statement is True.`,
      `**D.** → False

$A\\setminus B$ keeps points of $A$ that miss $B$. The overview recovered that leftover as $(0,5)$. The point $5$ sits in $A$ and in $B$ (it is $B$'s closed left end), so difference deletes it.

**1.** Difference requires $5\\notin B$. But $5$ is the closed left end of $B$, so $5\\in B$.

**2.** The false figure is a closed leftover that keeps the boundary $5$. That boundary belongs to the overlap, not to the difference.

**3.** What would make $5\\in A\\setminus B$? $B$ would have to be open at $5$. The given $B$ is $[5,15)$.

The recovered leftover is $(0,5)$.

Difference deletes overlap. The point $5$ is $B$'s closed left end, so it sits in $B$, so it cannot sit in $A\\setminus B$. The recovered leftover is the open interval $(0,5)$, which does not include $5$. Keeping $5$ would be keeping overlap. What would include $5$ in the difference? An open $B$ at $5$. The given $B$ is closed there..

Difference deletes overlap. The point $5$ is the closed left end of $B$, so $5\\in B$, so $5\\notin A\\setminus B$. The recovered leftover is $(0,5)$, which does not include $5$. Keeping $5$ would keep a point of $B$. What would include $5$ in the difference? An open $B$ at $5$. The given $B$ is closed there. Nearness of $5$ to the leftover tail is not membership in the leftover.

so the statement is False.`,
      `**E.** → False

The universal implication $x\\in A\\Rightarrow x\\in B$ is $A\\subseteq B$. Any witness in $(0,5)$ breaks it: $x=1$ is in $A$ and below $B$'s left end. The overview already named that leftover interval as the set of counterexamples.

One counterexample kills a universal claim. The trap is to check only the overlap $[5,10]$ and ignore the $A$-only tail.

The recovered leftover $(0,5)$ is nonempty.

Inclusion $A\\subseteq B$ would need every point of $A$ to sit in $B$. The recovered $A$-only tail $(0,5)$ is a whole interval of counterexamples. Checking $x=8$ in the overlap and stopping is how the universal claim gets a false pass. One witness $x=1$ is enough to kill it..

Inclusion would swallow the $A$-only tail. The recovered tail $(0,5)$ is nonempty, and $x=1$ is a witness in $A$ missing $B$. One counterexample kills the universal implication. Checking only $x=8$ in the overlap and stopping is how the claim gets a false pass. The leftover interval is the set of counterexamples, already scanned.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `**Part 1.** The sets.

Translate brackets into inequalities first.

$$A=(0,10]\\iff 0<x\\le 10,\\qquad B=[5,15)\\iff 5\\le x<15.$$

**Part 2.** The operations.

Intersection takes the tighter bounds. Union runs from the leftmost open end to the rightmost open end. Difference $A\\setminus B$ keeps points of $A$ that miss $B$. The implication $x\\in A\\Rightarrow x\\in B$ for all $x$ is $A\\subseteq B$.

**Part 3.** The scans.

Both at once: $5\\le x\\le 10$, i.e. $[5,10]$. Either: from just above $0$ up to just below $15$, i.e. $(0,15)$. Note $15$ is excluded because $B$ excludes it. In $A$ but not $B$: $0<x<5$, i.e. $(0,5)$. So $10$ sits in the intersection, while $5$ is in $B$ and therefore not in $A\\setminus B$. Any witness in $(0,5)$, say $x=1$, breaks $A\\subseteq B$.`,
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

Inclusion-exclusion on the given counts is $145$, not $155$. The overview already recovered the union $145$. The $155$ overshoots both the formula and the survey size $150$.

The trap is to add $80+70+60-10=200-10$ or to forget the $+10$ after subtracting three pairs, landing near $135$, or to add $10$ twice.

The recovered union is $145$.

The recovered union False45$ is less than the survey size False50$, as it must be. A claimed False55$ exceeds the room. Inclusion-exclusion with these headlines and pair totals plus the triple is $80+70+60-30-25-20+10=145$. The false False55$ is ten too high, the size of the triple added twice or a pair forgotten. Either way it is not the recovered scan..

A union larger than the survey is impossible. The recovered False45$ sits under False50$. The claimed False55$ exceeds the room by five, which is already a warning. Inclusion-exclusion with these seven given counts is False45$. The extra ten in False55$ is the triple counted with the wrong weight, not a new tourist.

so the statement is False.`,
      `**B.** → True

None is survey size minus the union. The overview already formed the union $145$ and left $150-145=5$.

The trap is $150-80-70-60$ going largely negative, or using the false union $155$ and getting a negative leftover.

The recovered none-region has $5$ tourists.

Five tourists saw none of the three museums. The recovered leftover is survey minus union, $150-145$. Using $155$ as the union would make none negative, which is a warning that $155$ was already wrong..

None is the outside of the union. The recovered $5$ is $150-145$. Using $155$ as the union would make none negative, which cannot happen in a survey of $150$. The leftover is five tourists who saw none of the three museums.

so the statement is True.`,
      `**C.** → False

The pair total $30$ still includes the $10$ who also saw $C$. Exact $A$ and $B$ not $C$ is $30-10=20$, not $30$. The overview already recorded that exact-pair region as $20$.

**1.** "Both $A$ and $B$" in the survey headline is at-least-those-two. Exact-two subtracts the triple.

**2.** The false figure $30$ copies the raw pair total. That mixes "at least $A$ and $B$" with "exactly $A$ and $B$."

**3.** What would make $30$ honest? The triple would have to be $0$. The stem gives $10$ who visited all three.

The recovered exact-pair region is $20$.

Raw pair totals include the triple. Exact $A$ and $B$ not $C$ subtracts those False0$ all-three visitors. The recovered region is $20$, not $30$. Copying $30$ is the standard 'at least two' versus 'exactly two' mix. The stem's $30$ is the at-least-$A$-and-$B$ headline. The claim asked for exact $A$ and $B$. Those differ by the triple. What would make $30$ honest as an exact-pair count? Triple overlap $0$. The stem gives False0$..

At-least-$A$-and-$B$ is the headline $30$. Exact $A$ and $B$ not $C$ subtracts the False0$ who also saw $C$. The recovered exact-pair region is $20$. Copying $30$ mixes those two English sentences. The stem's $30$ includes the triple. The claim asked for exact two, which excludes the triple. What would make $30$ honest as an exact-pair count? Triple overlap $0$. The stem gives False0$ who visited all three. One of those ten is enough to separate $30$ from $20$..

The recovered exact-pair region is $20$, ten below the raw pair total, and those ten are the triple visitors..

Exact two is raw pair minus triple. The recovered $20$ is that subtraction. Copying $30$ skips it.

so the statement is False.`,
      `**D.** → False

Only-$A$ subtracts both pair totals from $80$ and adds the triple back once (it was removed twice): $80-30-20+10=40$. The claimed $80-30-20=30$ forgets the $+10$. The overview already recovered $40$.

**1.** Subtracting $|A\\cap B|$ and $|A\\cap C|$ removes the triple twice, so it must be added back once.

**2.** The false figure $30$ is that formula with the $+10$ dropped. Off-by-the-triple is a systematic inclusion-exclusion error, not a rounding.

**3.** What would make $30$ honest? The triple would have to be $0$. It is $10$.

The recovered only-$A$ region is $40$.

Only-$A$ is a three-set leftover: subtract both pair totals, then add the triple back because it was subtracted twice. The recovered $40$ is $80-30-20+10$. The claimed $30$ is that formula without the $+10$. Forgetting the inclusion-exclusion repair is a systematic error, not a rounding of $40$. What would make $30$ honest? Triple $0$, so that the $+10$ would be $+0$. The triple is False0$..

Only-$A$ is a three-set leftover. Subtract $|A\\cap B|$ and $|A\\cap C|$ from $80$, then add the triple back because those two pair totals both contained it. The recovered $40$ is $80-30-20+10$. The claimed $30$ is that formula with the $+10$ dropped. Forgetting the inclusion-exclusion repair is a systematic error, not a rounding of $40$ toward $30$. What would make $30$ honest? Triple $0$, so the $+10$ would be $+0$. The triple is False0$. Those ten people sit in only-$A$ after the double subtraction is repaired; without the repair they are wrongly missing..

The recovered only-$A$ count is $40$, ten above the claimed $30$, and those ten are the triple added back..

The $+10$ repair is the triple added back. The recovered $40$ includes it; the claimed $30$ does not.

so the statement is False.`,
      `**E.** → False

At least two museums is the three exact-pair regions plus the triple: $20+15+10+10=55$, not $65$. The overview already summed $55$.

The trap is to add the raw pair totals $30+25+20=75$ and then subtract $10$, overshooting, or to add $20+15+10$ without the triple.

The recovered at-least-two count is $55$.

At least two is exact pairs plus everyone in all three. The recovered $55$ is $20+15+10+10$. Adding raw pairs $30+25+20$ counts people in all three three times among the pairs, which is the wrong weight. The false $65$ is ten too high, again a triple-weighting slip. The recovered $55$ is the scan..

At least two museums means exact pairs plus the triple. The recovered $55$ is $20+15+10+10$. Adding raw pair totals $30+25+20$ weights the triple three times among the pairs. The false $65$ is ten too high, a triple-weighting slip. The recovered $55$ is the scan of those four regions.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `**Part 1.** The sets.

Three-set survey with $|A|=80$, $|B|=70$, $|C|=60$, pair totals $\\{30,25,20\\}$, and triple overlap $10$, among $150$ tourists.

**Part 2.** The operations.

Inclusion-exclusion for the union adds headlines, subtracts pair totals, adds the triple back. Pair totals still include the triple visitors, so exact-pair regions subtract $10$. Only-$A$ subtracts both pair totals from $80$, then adds the triple back once. At least two museums is three exact pairs plus the triple.

**Part 3.** The scans.

$$|A\\cup B\\cup C|=80+70+60-30-25-20+10=145.$$

Then none is $150-145=5$. Exact-pair regions are $30-10=20$, $25-10=15$, $20-10=10$. Only-$A$: $80-30-20+10=40$. At least two museums: $20+15+10+10=55$.`,
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

Every even natural is already a natural, and $1\\in N\\setminus E$, so $E$ is a proper subset of $N$. The overview already recorded both inclusion and the missing odd $1$.

Proper needs both halves. Missing $1$ supplies the inequality. The trap is to think an infinite set cannot be a proper subset of another infinite set.

The recovered $E\\subsetneq N$ holds.

Proper subset is inclusion plus a missing member. The recovered missing member is $1$. Evens sit inside $N$, and $N$ has odds left over. Both halves hold..

Inclusion plus a missing odd. The recovered missing member is $1$. Evens sit in $N$, and $N$ is not equal to $E$ because odds remain. Both halves of proper subset hold. Infinite sets can sit properly inside infinite sets. That is the next letter's fight, not this one's.

so the statement is True.`,
      `**B.** → False

Finite intuition says a proper subset is smaller. The overview already recovered a bijection $f(n)=2n$ pairing each natural with a unique even and hitting every even, so $|E|=|N|$ despite $E\\subsetneq N$. "Must have fewer" is a finite-set slogan.

**1.** Cardinality for infinite sets is existence of a bijection, not a leftover-count.

**2.** The leftover odds are infinite too, yet $E$ still matches $N$ in size. That is the point of the example.

**3.** What would make "fewer" true? A finite $E$. The stem's $E$ is infinite.

The recovered cardinalities agree.

A leftover can be infinite and the subset can still match the parent in cardinality. The recovered bijection $n\\mapsto 2n$ is the reason $|E|=|N|$. Finite leftover-counting would say 'odds remain, so $E$ is smaller.' That slogan is true for finite sets and false here. What would make $E$ strictly smaller in cardinality? $E$ finite. The even naturals are not finite. The claim's 'must' is the finite slogan imported into an infinite example that was built to refute it..

Cardinality is a bijection, not a leftover tally. The recovered map $n\\mapsto 2n$ is one-to-one and onto $E$, so $|E|=|N|$ even though infinitely many odds remain outside $E$. Finite leftover-counting would say those odds make $E$ smaller. That slogan is true for finite sets and false here. The example was built to refute it. What would make $E$ strictly smaller in cardinality? A finite $E$. The even naturals have no last element. The claim's 'must' imports a finite rule into an infinite picture that does not obey it. Proper subset does not force smaller cardinality once sets are infinite..

The recovered bijection shows equal cardinality. Finite leftover-counting is the slogan this example was built to refute..

Equal cardinality with a proper subset is the recovered point of $E$ inside $N$. The word 'must' is the finite slogan, and it fails.

so the statement is False.`,
      `**C.** → False

$f(n)=2n$ always outputs an even: $f(1)=2$, $f(2)=4$, never an odd. The overview already identified it as the standard bijection onto the evens, not onto the odds. A bijection onto the odds would need something like $2n-1$.

The false figure is the right formula aimed at the wrong target. Even outputs cannot cover odd numbers.

The recovered map lands in $E$.

Even outputs cannot hit odd targets. The recovered map $2n$ is a bijection onto $E$, and that is a different target from the odd naturals. The formula for odds is $2n-1$. Pointing $2n$ at the odds is a false figure: the right shape of map, the wrong landing set..

Even outputs land in $E$, never in the odds. The recovered map $2n$ is the standard bijection onto the evens. Pointing it at the odds is a false figure: the right algebraic shape, the wrong landing set. Odds need $2n-1$. $f(1)=2$ is already even, so the first output already misses the odd target.

so the statement is False.`,
      `**D.** → True

Two facts sit together: $E\\subsetneq N$ because odds are missing, and $f(n)=2n$ is a bijection, so $|E|=|N|$. The overview already paired those facts. That pair is exactly why "proper subset implies fewer elements" fails for infinite sets.

The trap is to grant the bijection and then still insist $E$ is smaller because it looks thinner on the line.

The recovered example is that failure of finite intuition.

The whole point of $E\\subsetneq N$ with $|E|=|N|$ is that finite intuition about proper subsets does not carry over. The overview recovered both facts on purpose. This letter is that moral, not a new bijection..

The moral of the example is exactly this letter: $E\\subsetneq N$ and $|E|=|N|$ together. Finite intuition about proper subsets does not survive that pair. The recovered bijection and the recovered missing $1$ are both in the overview on purpose.

so the statement is True.`,
      `**E.** → False

$E$ itself is the counterexample: infinite (no last even) and still missing every odd, so not equal to $N$. The overview already used $E$ as an infinite proper subset. Infinite subset does not mean "the whole set."

The trap is to think the only infinite subset of $N$ is $N$. Odds, evens, and primes are other infinite proper subsets.

The recovered $E$ is infinite and not equal to $N$.

Infinite subset of $N$ need not be $N$. The recovered $E$ is the standard counterexample: no last even, yet every odd is missing. Odds, primes, and powers of two are other infinite proper subsets. The claim would force all of those to equal $N$. They do not..

Infinite does not mean 'the whole parent.' The recovered $E$ is infinite and missing every odd, so $E\\ne N$. Odds, primes, and powers of two are other infinite proper subsets of $N$. The claim would force all of those to equal $N$. They do not. No last even is not the same as containing False$.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 15,
    solution_overview: `**Part 1.** The sets.

Let $N=\\{1,2,3,\\ldots\\}$ and $E=\\{2,4,6,\\ldots\\}$.

**Part 2.** The operations.

Proper subset needs inclusion and inequality. Same cardinality for infinite sets is a bijection, not a size comparison copied from finite lists. The map $f(n)=2n$ is a bijection $N\\to E$. Infinite proper subsets exist.

**Part 3.** The scans.

Every even natural is natural, but $1\\in N\\setminus E$, so $E\\subsetneq N$. The map $f(n)=2n$ hits every even and is one-to-one, so $|E|=|N|$. The same formula $2n$ always outputs an even, so it is not a bijection onto the odds (those need $2n-1$). $E$ itself is infinite and still misses every odd, so it is not equal to $N$.`,
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

$6$ is written on the roster $\\{2,4,6,8,10,12\\}$, so $6\\in A$. The overview already marked that lookup. Membership is that lookup, not a subset test.

The trap is to wait for $\\{6\\}$ and confuse this with letter B.

The recovered roster contains $6$.

Membership is a roster lookup. The number $6$ is written among the six evens. The recovered $\\in$ holds. The set $\\{6\\}$ is a different object, reserved for letter B..

Roster lookup: $6$ is written among the six evens. The recovered membership holds. The set $\\{6\\}$ is a different object, saved for the next letter. This letter asks about the number $6$, not about a box containing $6$..

The recovered roster contains the number $6$. This letter is that lookup, not a test of the singleton box.

so the statement is True.`,
      `**B.** → False

$\\{6\\}$ is a set, and $A$'s roster is six even integers, none of them a set. So $\\{6\\}\\notin A$ even though $\\{6\\}\\subseteq A$ because $6\\in A$. The overview already split those two tests.

**1.** Membership asks whether one of the six written objects is the set $\\{6\\}$. None is.

**2.** Subsethood asks whether $6$ sits in $A$. It does. Swapping $\\in$ for $\\subseteq$ is the trap.

**3.** What would make $\\{6\\}\\in A$? $A$ would have to list that singleton as an element. The given $A$ lists numbers only.

The recovered elements are six numbers.

A set of numbers does not contain sets unless those sets are written on the roster. The recovered $A$ writes six integers. The singleton $\\{6\\}$ is a subset because $6\\in A$, and it is not an element. Those two recovered verdicts look similar in print and they are not interchangeable. What would make $\\{6\\}\\in A$? A nested roster such as $\\{2,4,6,\\{6\\},\\ldots\\}$. The given $A$ has no nested objects. Swapping $\\in$ for $\\subseteq$ is the whole false verdict..

Elements of $A$ are even integers. The singleton $\\{6\\}$ is a set, not an even integer, so it is not on the roster. It is a subset, because $6$ is on the roster. The overview already split those two tests. Swapping $\\in$ for $\\subseteq$ writes a false membership from a true inclusion. What would make $\\{6\\}\\in A$? A nested roster listing that singleton as an object. The given $A$ lists six numbers and nothing nested. One object, two relations, only one of which this claim asked, and that one fails. The recovered elements are $2,4,6,8,10,12$..

The recovered elements are six numbers. A singleton set is not one of those numbers..

The recovered roster has no nested sets. The singleton box is a subset and not an element.

so the statement is False.`,
      `**C.** → True

$\\{6,8\\}\\subseteq A$ asks whether each of $6$ and $8$ sits on the roster; both do. The overview already marked that subset. Subsethood never asks whether the box $\\{6,8\\}$ itself appears as an element.

The trap is to require $\\{6,8\\}\\in A$, which fails for the same reason letter B fails.

The recovered roster contains both members.

Both $6$ and $8$ sit in $A$, so the pair is a subset. The box $\\{6,8\\}$ itself is not an element of $A$, which the claim does not ask..

Both members of the pair sit in $A$, so the pair is a subset. The box itself is not an element, which the claim does not ask. Subsethood never inspects whether the box appears as a written object.

so the statement is True.`,
      `**D.** → True

$\\emptyset$ has no member that could sit outside $A$, so $\\emptyset\\subseteq A$ vacuously. The overview already recorded that inclusion. This is not $\\emptyset\\in A$; the empty set is not one of the six even numbers.

The trap is to refuse the empty set as a subset of a number list. Vacuous inclusion does not care what $A$ contains.

The recovered inclusion holds.

Vacuous inclusion does not inspect $As members. The empty set has no witness that could sit outside. The recovered $\\emptyset\\subseteq A$ holds for this even-number $A$ and for every other set. Membership $\\emptyset\\in A$ would fail, because $\\emptyset$ is not an even integer..

Vacuous inclusion does not care that $A$ is a list of evens. The empty set has no witness that could sit outside. The recovered $\\emptyset\\subseteq A$ holds. Membership $\\emptyset\\in A$ would fail, because the empty set is not an even integer. This letter is the subset reading.

so the statement is True.`,
      `**E.** → True

Proper subsets are all subsets except the set itself. For the six even numbers $A=\\{2,4,6,8,10,12\\}$, each number is an independent keep-or-drop choice, so the power set has $64$ members. Properness then drops only $A$, leaving $63$.

Part 3 already recorded that count: total subsets $2^6=64$, proper subsets $64-1=63$. This letter is reading that recovered proper count, not testing whether $6$ is an element and not testing whether $\\emptyset\\subseteq A$. Those lookups are earlier letters. The empty set is a proper subset of $A$ because it is a subset and it is unequal to $A$. Dropping it as well would mix proper with nonempty.

The standard false figure is $62$:

$$64-2=62$$

which subtracts both $A$ and $\\emptyset$. That is the count of nonempty proper subsets, a different statistic. Another mix-up is to report $64$, the full power-set size, or $6$, the number of elements, or $63$ obtained as $7\\times 9$ with no set meaning.

What would have to change for the opposite verdict is a different ground-set size, or a definition of "proper" that also excludes $\\emptyset$. The stem's $A$ has six members, and proper means unequal to $A$. The recovered proper count is $63$, empty set included and $A$ itself excluded.

The recovered proper count is $63$, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `**Part 1.** The set.

$A=\\{2,4,6,8,10,12\\}$, six even numbers, nothing else.

**Part 2.** The operations.

Ask of each claim: is the thing an element (one of those six numbers) or a subset (a collection of them)? The empty set always subsets every set. Total subsets: $2^6=64$; drop $A$ itself to get $63$ proper subsets.

**Part 3.** The scans.

$6$ is on the list, so $6\\in A$. The singleton object $\\{6\\}$ is a set, not a number on the list, so $\\{6\\}\\notin A$, even though $\\{6\\}\\subseteq A$. $\\{6,8\\}$ has both members in $A$, hence a subset. $\\emptyset\\subseteq A$. Proper subsets: $64-1=63$.`,
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

The overview recovered $A=\\{2,3\\}$ by factoring and checking both roots against $\\mathbb{Z}$. $B$ is given as $\\{2,3\\}$. Those two rosters name the same pair. Sets ignore order.

The trap is to keep only one root from the factorisation, or to treat different writing order as inequality.

The recovered lists match.

Same two integer roots, same set. The recovered $A$ equals the given $B$. Order of writing $2,3$ versus $3,2$ is irrelevant..

Same two integer roots, same set. The recovered $A$ is $\\{2,3\\}$, matching the given $B$. Order of writing does not matter. A third root does not exist over $\\mathbb{Z}$..

The recovered $A$ is the two-element set $\\{2,3\\}$, matching $B$..

The recovered two-element set matches $B$. Equality of sets is that match, not a preferred writing order.

so the statement is True.`,
      `**B.** → True

$3$ is an integer and the quadratic vanishes at $3$. The overview already listed $3$ in $A$. Membership is that defining test succeeding, not a second roster scan.

The trap is to wait for a printed $\\{2,3\\}$ before daring to say $3\\in A$. The builder never required a roster.

The recovered set contains $3$.

The builder's two tests both succeed at $3$: integer universe, quadratic zero. The recovered $A$ contains $3$. A printed roster is not required for membership..

Two tests at $3$: integer, and quadratic zero. Both succeed. The recovered $A$ contains $3$. A printed roster is not a third test. Membership in a set-builder is the defining condition, already checked in the overview.

so the statement is True.`,
      `**C.** → False

Both $2$ and $3$ solve the equation over $\\mathbb{Z}$, so $A=\\{2,3\\}$, not $\\{2\\}$. The overview already kept both integer roots. Keeping "only the smaller root" quietly adds an extra constraint $x<3$ that the set-builder never wrote.

**1.** The quadratic is degree two. Two integer roots are the default until the universe cuts one.

**2.** The false figure $\\{2\\}$ is a roster of the right kind with a legal member deleted. Smaller is not a licence to delete $3$.

**3.** What would make $\\{2\\}$ honest? An extra inequality $x<3$ or $x\\le 2$ inside the builder. Neither appears.

The recovered $A$ has two members.

Two roots, two members. The false singleton $\\{2\\}$ deletes the legal $3$. 'Smaller root' is an extra filter the builder did not write. Factoring already produced $(x-2)(x-3)$, so both $2$ and $3$ are on the recovered list. What would make $\\{2\\}$ honest? Writing $x<3$ or $x\\le 2$ inside $A$. The stem wrote only the quadratic over $\\mathbb{Z}$. Square-root or 'principal root' slogans are the same trap as in the $x^2=9$ task: a function convention imported into a set-builder that never adopted it..

Two roots, two members. The false singleton $\\{2\\}$ deletes the legal $3$. 'Only the smaller root' is an extra inequality $x<3$ that the builder did not write. Factoring already produced $(x-2)(x-3)$, so both $2$ and $3$ are on the recovered list. What would make $\\{2\\}$ honest? Writing $x\\le 2$ or $x<3$ inside $A$. The stem wrote only the quadratic over the integers. Principal-root slogans from square-root buttons are the same trap as in $x^2=9$: a function convention imported into a set-builder that never adopted it. Against $\\mathbb{Z}$, both signs of a quadratic's roots stay until the universe cuts one. Here both are positive, and both stay. Deleting the larger is not a convention. It is a smaller set than the one recovered.

so the statement is False.`,
      `**D.** → True

Cardinality counts distinct members of the recovered set, not the degree of the polynomial and not the number of times a factor is written. The set-builder $A=\\{x\\in\\mathbb{Z}:x^2-5x+6=0\\}$ was already solved in the overview: both roots $2$ and $3$ are integers, so $A=\\{2,3\\}$.

This letter asks only for the size of that recovered pair. Two distinct points on the number line give $|A|=2$. The given $B=\\{2,3\\}$ has the same two members, so it has the same size, but this claim is not the equality $A=B$; that was letter A.

The trap is to report $1$ after deleting a root, which travels with the previous letter's false figure $A=\\{2\\}$. Deleting $3$ because it is "the larger root" is an extra filter the builder never wrote. Another trap is to report $3$, treating a quadratic as if it contributed a third phantom member, or to report the degree $2$ as a coincidence that happens to match for the wrong reason. Degree is not cardinality. A repeated root would still be one member; here the roots are distinct anyway.

What would have to change for the opposite verdict is a universe that cuts a root, or an extra inequality. Building $A$ over a universe that excludes $3$, or adding $x>3$, would leave fewer than two members. Against $\\mathbb{Z}$ with no extra cut, the recovered $A$ has two members.

The recovered set has two members, so the statement is True.`,
      `**E.** → True

$C$ keeps natural-number roots of the same quadratic that also satisfy $x>2$. Of the two recovered roots, $2>2$ fails and $3>2$ holds, so $C=\\{3\\}$. The extra filter is a genuine new universe-plus-inequality, not a reprint of $A$.

The trap is to keep both roots, ignoring $x>2$, or to drop $3$ as well.

The recovered $C$ is $\\{3\\}$.

The extra filter $x>2$ on natural-number roots keeps $3$ and drops $2$. The recovered $C$ is a singleton, a different set from $A$. That is a new universe-plus-inequality, not a reprint. Ignoring $x>2$ would copy $A$ into $C$ and break the claim. The inequality is doing real work..

The extra filter $x>2$ on natural-number roots keeps $3$ and drops $2$. The recovered $C$ is $\\{3\\}$, a different set from $A$. Ignoring $x>2$ would copy $A$ into $C$. The inequality is doing real work. $2>2$ is false, so $2$ fails the extra test even though it solves the quadratic.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `**Part 1.** The sets.

Solve first, filter second. $A=\\{x\\in\\mathbb{Z}:x^2-5x+6=0\\}$ and $B=\\{2,3\\}$.

**Part 2.** The operations.

A set-builder keeps those members of the named universe that satisfy the stated equation. Changing the universe, or adding an extra inequality, produces a different set.

**Part 3.** The scans.

$$x^2-5x+6=(x-2)(x-3)=0.$$

The roots are $x=2$ and $x=3$.

Both roots are integers, so $A=\\{2,3\\}$. The given $B=\\{2,3\\}$ is the same set, and $|A|=2$. For $C$, keep natural-number roots that also satisfy $x>2$: that drops $2$ and leaves $\\{3\\}$.`,
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

Four letters, each kept or left out independently, give $2^4=16$ subsets. The overview already recovered $|\\mathcal P(D)|=16$.

The trap is $4^2=16$ for the wrong reason, or $2\\times 4=8$, or $15$ by dropping $\\emptyset$.

The recovered power set has $16$ members.

Sixteen subsets from four independent keep-or-drop choices. The recovered $|\\mathcal P(D)|=16$ includes $\\emptyset$ and $D$..

Four keep-or-drop choices multiply to $16$. The recovered $|\\mathcal P(D)|$ includes $\\emptyset$ and $D$. Reporting $15$ drops one of those. Reporting $8$ is $2\\times 4$, the wrong arithmetic..

The recovered power set has $16$ members from four keep-or-drop choices..

Four independent choices give $16$ subsets. The recovered power-set size includes $\\emptyset$ and $D$..

The recovered total is 16 subsets, empty set included and D included.

so the statement is True.`,
      `**B.** → True

$S\\in\\mathcal P(D)$ means $S\\subseteq D$. Both $w$ and $x$ are letters of $D$, so $\\{w,x\\}\\subseteq D$ and therefore $\\{w,x\\}\\in\\mathcal P(D)$. The overview already placed that pair in the power set. That is not $\\{w,x\\}\\in D$; $D$'s elements are letters, not pairs.

The trap is to run the $D$-membership test and reject the pair.

The recovered power set contains $\\{w,x\\}$.

Power-set membership is subsethood. The pair $\\{w,x\\}$ is a subset of $D$, hence an element of $\\mathcal P(D)$. It is not an element of $D$. The recovered split is the same $\\in$ versus $\\subseteq$ split as in the three-letter tasks, now one type-level up..

Power-set membership is subsethood. The pair is a subset of four letters, hence an element of the power set. It is not an element of $D$. The recovered split is $\\in\\mathcal P(D)$ yes, $\\in D$ no. Running the $D$-membership test rejects a pair the power set is required to contain.

so the statement is True.`,
      `**C.** → True

Each $3$-element subset omits exactly one of the four letters, so there are four of them, matching $\\binom{4}{3}=4$. The overview already recorded that count.

The trap is $\\binom{4}{3}=12$ by order, or $6$ by copying the pair count.

The recovered three-element count is $4$.

Omit one of four letters: four triples. The recovered $\\binom{4}{3}=4$ is also $\\binom{4}{1}$. Order does not multiply that count..

Omit one of four letters: four triples. The recovered $\\binom{4}{3}=4$ matches $\\binom{4}{1}$. Order does not multiply that count to $12$. Copying the pair count $6$ answers a different size..

The recovered triple count is $4$, one omission for each of four letters..

Four omissions give four triples. The recovered $\\binom{4}{3}=4$ is that count.

so the statement is True.`,
      `**D.** → True

The power set contains every subset of $D$, including $D$ itself, because $D\\subseteq D$. The overview already used that fact. This is $D\\in\\mathcal P(D)$, not $D\\in D$.

The trap is to refuse $D$ as a member of its power set, mixing proper subsets with all subsets.

The recovered power set contains $D$.

Every set is a subset of itself, so every set is an element of its power set. The recovered $D\\in\\mathcal P(D)$ is that reflexivity, not $D\\in D$..

Reflexivity of $\\subseteq$ puts $D$ into $\\mathcal P(D)$. The recovered membership $D\\in\\mathcal P(D)$ is that fact, not $D\\in D$. Refusing $D$ as a member of its power set mixes all subsets with proper subsets. Proper would drop $D$; the power set does not.

so the statement is True.`,
      `**E.** → False

The pairs of four letters number $\\binom{4}{2}=6$, not $5$. The overview already recorded $6$. Claiming $5$ drops one pair with no justification.

**1.** The six pairs are $wx,wy,wz,xy,xz,yz$.

**2.** The false figure $5$ is one short. There is no distinguished pair to drop.

**3.** Half of $16$ is $8$, not a reason to write $5$. Size $2$ is $\\binom{4}{2}=6$.

What would make $5$ honest? A five-element ground set's size-$1$ count, or some other unrelated binomial. Not this $D$.

The recovered pair count is $6$.

Six pairs from four letters: $wx,wy,wz,xy,xz,yz$. The recovered $\\binom{4}{2}=6$. The false $5$ drops one pair with no rule for which pair to drop. There is no distinguished pair. Half of False6$ is $8$, which is not this row of the size table. What would make $5$ honest? A different ground set or a different size. For this $D$ and size $2$, the count is $6$. Claiming $5$ is an off-by-one on a binomial that has no reason to be odd here; $\\binom{4}{2}=6$ is even..

Six pairs: $wx,wy,wz,xy,xz,yz$. The recovered $\\binom{4}{2}=6$. The false $5$ drops one pair with no rule for which pair to drop. There is no distinguished pair among four letters. Half of False6$ is $8$, which is not this row. What would make $5$ honest? A different ground set or a different size. For this $D$ and size $2$, the count is $6$. Off-by-one on a binomial that has no reason to be odd here is a counting error, not a convention. The six pairs are all visible in a complete list, and none is extra..

The recovered pair count is $6$. The false $5$ drops a pair with no rule for which pair to drop..

Six visible pairs, none extra. The recovered $\\binom{4}{2}=6$ is not $5$.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `**Part 1.** The set.

Four letters $D=\\{w,x,y,z\\}$ mean $2^4=16$ subsets, i.e. $|\\mathcal P(D)|=16$.

**Part 2.** The operations.

A set $S$ belongs to the power set precisely when $S\\subseteq D$. Size counts use binomial coefficients. Choosing $3$ out of $4$ is choosing which one letter to omit.

**Part 3.** The scans.

Both $\\{w,x\\}$ and $D$ itself are subsets, hence elements of $\\mathcal P(D)$. Size $3$ subsets: $\\binom{4}{3}=4$. Size $2$ subsets: $\\binom{4}{2}=6$.`,
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

Walk through the members of $E$: $1,2,3$ all appear in $F=\\{1,2,3,4\\}$, so $E\\subseteq F$. The overview already recorded that inclusion. A counterexample would have to be a member of $E$ missing from $F$, and there is none.

The trap is to require proper as well, or to reverse the inclusion.

The recovered inclusion holds.

Three members of $E$, three successes in $F$. The recovered $E\\subseteq F$ has no counterexample. Reverse inclusion is a different letter..

Three successes, no counterexample. The recovered $E\\subseteq F$ is that walk through $1,2,3$. Reverse inclusion is a different letter, killed by $4$. This letter does not reverse anything..

The recovered walk through $1,2,3$ finds each in $F$. No counterexample appears.

so the statement is True.`,
      `**B.** → True

Proper inclusion is $E\\subseteq F$ together with $E\\ne F$. Every member of $E$ sits in $F$, and the extra $4\\in F\\setminus E$ supplies the inequality. The overview already used $4$ as that witness.

The trap is to think proper forbids $E\\subseteq F$, or to miss $4$ and conclude the sets are equal.

The recovered inclusion is proper.

Proper needs a leftover in the larger set. The recovered leftover is $4$. Inclusion plus that leftover is $E\\subsetneq F$. Missing $4$ would make the sets look equal and would break properness..

Proper needs leftover in the larger set. The recovered leftover is $4$. Inclusion plus that leftover is $E\\subsetneq F$. Missing $4$ would make the sets look equal and would break properness. The extra $4$ is doing the inequality work.

so the statement is True.`,
      `**C.** → False

Reverse inclusion would need every member of the larger $F$ to sit in $E$. The same $4$ is now a counterexample: $4\\in F$ and $4\\notin E$. The overview already named $4$ as $F\\setminus E$. One witness kills $F\\subseteq E$.

The trap is to think inclusion is symmetric. It is not. $E\\subseteq F$ does not give $F\\subseteq E$.

The recovered leftover $\\{4\\}$ is nonempty.

Inclusion is one-way. The recovered $4\\in F\\setminus E$ is a witness against $F\\subseteq E$. Granting $E\\subseteq F$ does not grant the reverse. Symmetry would require $E=F$, and $4$ already shows they are not equal..

Inclusion is one-way. The recovered $4\\in F\\setminus E$ kills $F\\subseteq E$. Granting $E\\subseteq F$ does not grant the reverse. Symmetry would require $E=F$, and $4$ already shows they are not equal. One witness is enough.

so the statement is False.`,
      `**D.** → True

Ordinary inclusion $E\\subseteq E$ is reflexivity: every member of $E$ sits in $E$ by construction. The set $E=\\{1,2,3\\}$ does not need a larger companion $F$ for this test. Walking through $1,2,3$ finds each of them in $E$, so there is no counterexample.

Part 3 already marked that self-inclusion among the self-tests. This letter is ordinary $\\subseteq$, not proper inclusion. Proper self-inclusion would also need $E\\ne E$, which is the next letter and which never holds. Borrowing the word "proper" from that next claim and pasting it here is the whole trap.

Refusing After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. $E\\subseteq E$ because "a set cannot be a subset of itself," mixing the proper reading with the ordinary one. Another mix-up is to look for leftover in $F$ before allowing the self-test, as if inclusion always compared two different lists. Reflexivity does not consult $F$. The extra $4\\in F\\setminus E$ is doing inequality work in letters B and C, not here.

What would have to change for the opposite verdict is a different symbol: if the claim had said $E\\subsetneq E$, it would fail for the reason the next letter records. Against ordinary $\\subseteq$, the recovered self-inclusion holds for this $E$ and for every set.

The recovered $E\\subseteq E$ holds, so the statement is True.`,
      `**E.** → False

Proper self-inclusion would need $E\\ne E$ as well. The two sides are the same list $\\{1,2,3\\}$, so the inequality half is impossible. The overview already noted that proper self-inclusion never happens.

**1.** $E\\subseteq E$ holds. $E\\ne E$ fails. Proper needs both.

**2.** The trap is to treat $\\subsetneq$ as a synonym of $\\subseteq$. Here the claim says proper, so inequality is required, and it fails.

**3.** What would make the claim true? Nothing, for any set against itself. A different pair $E\\subsetneq F$ is proper, and that is letter B, not this letter.

The inequality half cannot hold.

A set cannot be unequal to itself. Proper self-inclusion asks for $E\\subseteq E$ and $E\\ne E$. The second half is impossible. The recovered list $\\{1,2,3\\}$ is the same on both sides. The trap is a synonym confusion between $\\subseteq$ and $\\subsetneq$. Letter D used $\\subseteq$ and was true. This letter uses proper and is false. What would make proper self-inclusion true? Nothing. No set is a proper subset of itself. The true proper inclusion in this task is $E\\subsetneq F$, which compares two different recovered lists..

A set cannot be unequal to itself. Proper self-inclusion asks for $E\\subseteq E$ and $E\\ne E$. The second half is impossible. The recovered list $\\{1,2,3\\}$ is the same on both sides. Letter D used ordinary inclusion and was true. This letter uses proper and is false. The synonym confusion between $\\subseteq$ and $\\subsetneq$ is the whole trap. What would make proper self-inclusion true? Nothing. No set is a proper subset of itself. The true proper inclusion in this task is $E\\subsetneq F$, which compares two different recovered lists and is letter B, not this letter..

The recovered two sides are the same list, so inequality is impossible and proper self-inclusion fails.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `**Part 1.** The sets.

Compare $E=\\{1,2,3\\}$ with the larger $F=\\{1,2,3,4\\}$ by walking through the members.

**Part 2.** The operations.

Ordinary inclusion $X\\subseteq Y$ asks whether every member of $X$ sits in $Y$. Proper inclusion also needs $X\\ne Y$. Inclusion is reflexive: $E\\subseteq E$. Proper self-inclusion would also need $E\\ne E$, which never happens.

**Part 3.** The scans.

$\\{1,2,3\\}$ all appear in $F$, so $E\\subseteq F$. The extra element $4\\in F\\setminus E$ proves the sets differ, hence the inclusion is proper: $E\\subsetneq F$. That same $4$ is a counterexample to $F\\subseteq E$. Self-tests: $E\\subseteq E$ always. Proper self-inclusion fails.`,
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

The three pairs use distinct numbers: $1,2$ never meet $3,4$ or $5,6$, and $3,4$ never meet $5,6$. The overview already recorded every pairwise intersection empty.

The trap is to check only the triple overlap, which is weaker.

The recovered pairwise intersections are empty.

Three disjoint pairs is the recovered pairwise scan. Pairwise is three checks, not one triple check. A nonempty pair would have killed this letter even if the triple overlap stayed empty..

Three disjoint pairs is the recovered pairwise scan. Pairwise is three empty intersections, not one empty triple intersection. A nonempty pair would have killed this letter. None of these pairs share a number..

The recovered pairwise scan finds three empty intersections, one for each pair of blocks.

so the statement is True.`,
      `**B.** → True

Coverage for a candidate partition asks whether the blocks, joined, recover the ground set. Here $G=\\{1,2,3,4,5,6\\}$ and the blocks of $\\mathcal S$ are the three pairs $\\{1,2\\}$, $\\{3,4\\}$, $\\{5,6\\}$. The claim says their union equals $G$.

Part 3 already recorded that cover: $\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=G$. Every number from $1$ through $6$ appears in exactly one of those pairs, so joining them cannot miss $6$ and cannot invent a $7$. This letter is that equality, not the pairwise-disjoint check, which was the previous letter, and not the full three-part verdict that $\\mathcal S$ is a partition, which is the next letter. Coverage can hold while disjointness fails, which is how the impostor $\\mathcal S'$ in a later letter still covers $G$ even as it overlaps at $2$.

The trap is to think a partition's union is allowed to be smaller than $G$, or to miss $6$ by stopping the last pair at $\\{5\\}$. A hole would mean some member of $G$ sits in no block. This collection has no such hole. Another mix-up is to add $7$ into the union by glancing at the later outsider letter; $7$ is not in $G$ and is not in any block of $\\mathcal S$.

What would have to change for the opposite verdict is a missing number. Replacing $\\{5,6\\}$ by $\\{5\\}$ would leave $6$ uncovered, and the union would be a proper subset of $G$. Against the given three pairs, the recovered union is all of $G$.

The recovered union equals $G$, so the statement is True.`,
      `**C.** → True

The blocks of $\\mathcal S$ are nonempty, pairwise disjoint, and their union is $G$. The overview already passed all three checks, so $\\mathcal S$ partitions $G$.

The trap is to require equal block sizes or singletons. Three pairs of two already work.

The recovered collection is a partition.

All three recovered checks pass, so $\\mathcal S$ is a partition. Nonempty, disjoint, cover. Equal block sizes are a coincidence of this example, not a requirement..

All three recovered checks pass. Nonempty, disjoint, cover: $\\mathcal S$ is a partition of $G$. Equal block sizes are a coincidence of three pairs of two, not a requirement. Singletons are allowed and not required..

The recovered three checks all pass, so $\\mathcal S$ is a partition of $G$.

so the statement is True.`,
      `**D.** → False

$\\mathcal S'$ overlaps at $2$: $\\{1,2\\}\\cap\\{2,3,4\\}=\\{2\\}$. The overview already named that shared $2$. Pairwise disjointness fails, so $\\mathcal S'$ is not a partition even though the union still covers $G$.

**1.** One shared number is enough. Coverage cannot rescue overlap.

**2.** The false figure is a collection that looks like a small edit of $\\mathcal S$ and therefore "should still work." The edit introduced an overlap.

**3.** What would make $\\mathcal S'$ a partition? The $2$ would have to sit in only one block.

The recovered overlap $\\{2\\}$ kills $\\mathcal S'$.

One shared $2$ is enough. The recovered overlap $\\{1,2\\}\\cap\\{2,3,4\\}=\\{2\\}$ kills pairwise disjointness. The union of $\\mathcal S'$ can still equal $G$; coverage does not repair overlap. A small edit of a working partition is not automatically a partition. This edit introduced a repeated $2$. What would repair $\\mathcal S'$? Putting $2$ in only one block. The given middle block still contains it..

One shared $2$ kills pairwise disjointness. The recovered overlap $\\{1,2\\}\\cap\\{2,3,4\\}=\\{2\\}$ is that witness. The union of $\\mathcal S'$ can still equal $G$; coverage does not repair overlap. A small edit of a working partition is not automatically a partition. This edit introduced a repeated $2$. What would repair $\\mathcal S'$? Putting $2$ in only one block. The given middle block still contains it. Checking only that every number of $G$ appears somewhere is how this impostor gets a false pass..

Overlap at $2$ is enough. The recovered $\\mathcal S'$ fails disjointness even if the union still covers $G$.

so the statement is False.`,
      `**E.** → False

A block of a partition of $G$ must be a subset of $G$. Replacing $\\{5,6\\}$ by $\\{5,6,7\\}$ smuggles $7\\notin G$. The overview already flagged that outsider. Disjointness and a union that happens to cover $G$ cannot legalize an outsider.

**1.** $7$ is not a member of $G$, so $\\{5,6,7\\}$ is not a subset of $G$.

**2.** The false figure is a block that has grown by one number past the ground set. Partitions of $G$ cannot mention $7$.

**3.** What would make the replacement legal? $7$ would have to sit in $G$. The given $G$ stops at $6$.

The recovered outsider $7$ kills the collection.

Blocks of a partition of $G$ must be subsets of $G$. The recovered outsider $7$ sits in the proposed block $\\{5,6,7\\}$ and not in $G$. Disjointness of the other pairs cannot legalize $7$. Union covering $G$ cannot legalize $7$. The ground set is $\\{1,\\ldots,6\\}$, and $7$ is past that end. What would make the replacement legal? $G$ would have to include $7$. It does not. Smuggling an outsider is a different failure from overlap: the block is not even a subset of the set being partitioned..

Blocks of a partition of $G$ must be subsets of $G$. The recovered outsider $7$ sits in $\\{5,6,7\\}$ and not in $G$. Disjointness of the other pairs cannot legalize $7$. Union covering $G$ cannot legalize $7$. The ground set stops at $6$. What would make the replacement legal? $G$ would have to include $7$. It does not. Smuggling an outsider is a different failure from overlap: the proposed block is not even a subset of the set being partitioned. Partitions of $G$ cannot mention $7$..

An outsider cannot sit in a block of a partition of $G$. The recovered $7$ is that outsider.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 20,
    solution_overview: `**Part 1.** The set.

Test the candidate $\\mathcal S=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$ against $G=\\{1,\\ldots,6\\}$ with the three partition checks.

**Part 2.** The operations.

A partition needs pairwise disjoint nonempty blocks whose union is $G$, and those blocks must be subsets of $G$. Overlap kills disjointness. An outsider such as $7$ is not a member of $G$, so a block containing $7$ cannot be a block of a partition of $G$.

**Part 3.** The scans.

Disjoint: the blocks are three different pairs, every pairwise intersection is empty. Cover: $\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=G$. Nonempty subsets of $G$: yes. So $\\mathcal S$ is a partition. The impostor $\\mathcal S'$ overlaps at $2$. Swapping in $\\{5,6,7\\}$ smuggles $7\\notin G$.`,
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

Every positive even is already a natural number, so $H\\subseteq\\mathbb N$. Subsethood does not require $H$ to contain the odds; it only requires that nothing in $H$ sit outside $\\mathbb N$. A counterexample would have to be a positive even that was not a natural, and there is none.

Wanting $H$ to equal $\\mathbb N$ would have been answering the equality letter. That is the fork: $H$ belongs to the recovered isolation, $\\mathbb N$ belongs to the discarded mix. Equality is two inclusions. This letter is only $H$ inside $\\mathbb N$, which the recovered scan already granted.

The recovered roster of $H$ is $2,4,6,\\ldots$, each of which appears in $\\{1,2,3,\\ldots\\}$.

Subsethood is a one-way membership test. Each even is some natural $2k$ with $k\\ge 1$, so it already sits in $\\{1,2,3,\\ldots\\}$. The odds are irrelevant to this test: they would matter for equality, or for the reverse inclusion $\\mathbb N\\subseteq H$, neither of which this letter asked.

Refusing $H\\subseteq\\mathbb N$ because "H is thinner" mixed subsethood with cardinality. The opposite verdict would need a different isolation than $H\\subseteq\\mathbb N$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Thinner is letter E's slogan. This letter is only the recovered inclusion $H\\subseteq\\mathbb N$.

so the statement is True.`,
      `**B.** → False

If $H$ were finite it would have a largest even $2N$, but $2(N+1)$ is still in $H$ and strictly larger. The list $2,4,6,\\ldots$ never ends, so $H$ is infinite. Finiteness is not inherited from being a subset of $\\mathbb N$; $\\mathbb N$ itself is infinite, and so is this subset,

If $H$ were finite it would have a largest even $2N$, but $2(N+1)$ is still in $H$ and strictly larger. The list $2,4,6,\\ldots$ never ends, so $H$ is infinite. Finiteness is not inherited from being a subset of $\\mathbb N$; $\\mathbb N$ itself is infinite, and so is this subset.

Thinking "evens are every other natural, so half as many, so finite" would have mixed "half" with "finite." The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.Half of an infinite list is still infinite.

so the statement is False.`,
      `**C.** → False

Equality needs the same members. Odd $1$ sits in $\\mathbb N$ and is not even, so $1\\in\\mathbb N\\setminus H$. That single witness forces $H\\ne\\mathbb N$ even though $H\\subseteq\\mathbb N$. $H=\\mathbb N$ would require every natural to be even.

Ignoring odds because "they are not in $H$'s list" would have checked only one inclusion. The opposite verdict would need a different isolation than $H$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Equality is two inclusions. The recovered leftover $1$ already kills the reverse inclusion, and $3,5,7,\\ldots$ are extra leftovers.

What would make equality true? If $H$ had been defined as all of $\\mathbb N$, or if the universe had been the evens to begin with. Against $\\mathbb N=\\{1,2,3,\\ldots\\}$, the odds remain.

The recovered sets are unequal.

One leftover kills equality. The recovered $1\\in\\mathbb N\\setminus H$ is enough. Listing every odd is unnecessary, though each further odd is another leftover of the same kind.

Writing $H=\\mathbb N$ because both lists are infinite would have equated two infinite sets by "both go on forever." The opposite verdict would need a different isolation than $H=\\mathbb N$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does.Infinity of both is compatible with a proper inclusion, which is the next letter's point. Equality still needs matching members, and the odds do not match.

so the statement is False.`,
      `**D.** → True

The map $f(n)=2n$ is one-to-one because $2n=2m$ forces $n=m$, and it is onto $H$ because every positive even is $f$ of half of it. That is a bijection $\\mathbb N\\to H$, which is what "pairs every natural with exactly one even and vice versa" says. The formula always outputs an even, so the codomain really is $H$, not $\\mathbb N$,

The map $f(n)=2n$ is one-to-one because $2n=2m$ forces $n=m$, and it is onto $H$ because every positive even is $f$ of half of it. That is a bijection $\\mathbb N\\to H$, which is what "pairs every natural with exactly one even and vice versa" says. The formula always outputs an even, so the codomain really is $H$, not $\\mathbb N$.

Thinking $f$ missed $2$ would have forgotten $f(1)=2$. The stem's recovered values line up with $f$, whereas $f(1)=2$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $f$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Thinking $f$ hit an odd would have miscomputed $2n$. Working from the isolated values, $f$ is the figure that is checked, not the detour that produced $2n$.

so the statement is True.`,
      `**E.** → False

Proper inclusion is true: odds such as $1$ are missing, so $H\\subsetneq\\mathbb N$. The same recovered bijection $f(n)=2n$ still forces $|H|=|\\mathbb N|$. Same cardinality with a proper subset is why "strictly fewer" fails for infinite sets. The slogan is a finite-set habit; it would hold if $H$ were finite.

**1.** Finite picture: $\\{2,4,6\\}\\subsetneq\\{1,2,3,4,5,6\\}$ really does have fewer members. The slogan is true there, because a finite proper subset cannot be paired with the whole.

**2.** Infinite picture: $H\\subsetneq\\mathbb N$ and $f$ is a bijection, so the two sets can be paired. "Fewer" has no extra room to mean anything beyond "missing some members," which is already proper inclusion, not a smaller cardinal.

**3.** Writing $|H|=\\frac{1}{2}|\\mathbb N|$ as if those were finite numbers would have treated cardinality like a headcount. Once $|H|=\\frac{1}{2}|\\mathbb N|$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. For infinite sets, a bijection is the size comparison, and $f$ is that bijection. Half of an infinite list is still infinite, and here it is the same infinite size.

What would make "strictly fewer" true? If $H$ were a finite list of evens, say the first thousand. Against $H=\\{2,4,6,\\ldots\\}$, the recovered sizes match. Missing the odds is a membership fact, not a cardinal fact.

Stopping at $H\\subsetneq\\mathbb N$ and copying "therefore smaller" from finite-set homework would have skipped the pairing the overview already built. The recovered isolation is checked against the claim using $H\\subsetneq\\mathbb N$, which is the figure the sessions actually produce. The pairing is the extra object this slogan has to survive, and it does not.

The recovered $|H|$ equals the recovered $|\\mathbb N|$.

Hilbert's hotel is the same phenomenon in other clothing: an infinite set can lose infinitely many members and still pair with itself. Here the lost members are the odds, and the pairing is doubling. Finite sets cannot do that, which is why the slogan feels true in homework with six-element lists.

Computing $|\\mathbb N|-|H|$ as if those were integers would have written "$\\infty-\\infty$," which is not a number. The recovered comparison therefore keeps $|\\mathbb N|-|H|$ and does not substitute $\\infty-\\infty$. Cardinality comparison for these two sets is the recovered bijection, not a subtraction. Against that bijection, "strictly fewer" has nothing left to mean.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 21,
    solution_overview: `**Part 1: Setup.**

Same infinite-set theme with $\\mathbb N=\\{1,2,3,\\ldots\\}$ and $H=\\{2,4,6,\\ldots\\}$. **Narrative.** Every positive even is a natural number, so $H\\subseteq\\mathbb N$.

**Part 2: Relatives.**

Odd $1$ is missing, so $H\\ne\\mathbb N$ and the inclusion is proper. The list of evens never ends, after $2n$ comes $2(n+1)$, so $H$ is infinite, not finite. **Matching sizes.** $f(n)=2n$ sends each natural to a unique even and hits every even, a bijection.

**Part 3: Solve.**

Therefore $|H|=|\\mathbb N|$ even though $H\\subsetneq\\mathbb N$. The slogan “proper subset ⇒ strictly fewer elements” is a finite-set habit that does not survive here.`,
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

$K$ lists two objects: the bare $a$, and the singleton $\\{a\\}$. Membership $a\\in K$ is the first of those. Braces matter: this letter asks about the unwrapped object, not about $\\{a\\}$. The two questions part company in general; here both happen to be true.

Demanding braces around $a$ would have been answering the next letter. The recovered isolation is checked against the claim using $a$, which is the figure the sessions actually produce. That contrast is the reason the verdict goes the way it does. The recovered roster opens with the unwrapped object, so $a\\in K$ holds whether or not the singleton is also listed.

The recovered first member is $a$.

In a set such as $\\{a\\}$ the unwrapped $a$ is a member and the singleton $\\{a\\}$ is not a member of $\\{a\\}$ (it is the set itself). $K$ is the unusual roster that lists both. This letter only needs the first listing. The second listing is the next letter.

Writing $a\\in K$ only after checking $\\{a\\}\\in K$ would have run the wrong test first. The recovered comparison therefore keeps $a\\in K$ and does not substitute $\\{a\\}\\in K$. Membership of $a$ does not depend on membership of $\\{a\\}$. The recovered first slot is enough.

so the statement is True.`,
      `**B.** → True

The second listed object is $\\{a\\}$ itself, so $\\{a\\}\\in K$. That is membership of a set-object, not subsethood. A roster that listed only $a$ would make this false. The extra braces on the second member are what make $K$ unusual.

Treating $\\{a\\}$ as "just $a$ with decoration" would have collapsed the two members and reported $|K|=1$. The stem's recovered values line up with $\\{a\\}$, whereas $|K|=1$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $\\{a\\}$ stays in the write-up. Those two objects are different types: an element, and a set containing that element.

The recovered second member is $\\{a\\}$.

Nested braces are a different object, not decoration. The recovered roster is two slots, and the second slot is the set $\\{a\\}$. That is why $\\{a\\}\\in K$ holds here and would fail for $K=\\{a\\}$.

Saying "sets cannot contain sets" would have been using a restriction this stem does not have. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. $K$ is defined to contain a set. The membership test is a look-up on the written list.

If $K$ had been $\\{a\\}$ alone, this membership would fail and $|K|$ would be $1$. The extra nested object is what makes $\\{a\\}\\in K$ true. Collapsing the nest is how collapsing the nest reports the wrong cardinality in the last letter.

so the statement is True.`,
      `**C.** → True

$\\{a\\}\\subseteq K$ asks whether $a\\in K$. The roster of $K$ begins with the bare object $a$, so $a\\in K$ holds, and the singleton is a subset. This is a different question from $\\{a\\}\\in K$, though that happens to be true here as well. In a set such as $\\{a\\}$ the $\\in$ version would fail while this $\\subseteq$ version still held,

$\\{a\\}\\subseteq K$ asks whether $a\\in K$. The roster of $K$ begins with the bare object $a$, so $a\\in K$ holds, and the singleton is a subset. This is a different question from $\\{a\\}\\in K$, though that happens to be true here as well. In a set such as $\\{a\\}$ the $\\in$ version would fail while this $\\subseteq$ version still held.

Testing $\\{a\\}\\in K$ here would have been answering letter B. That is why $\\{a\\}\\in K$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Subsethood looks at members of the left-hand set.

so the statement is True.`,
      `**D.** → True

$\\{\\{a\\}\\}\\subseteq K$ asks whether $\\{a\\}\\in K$. The second listed object of $K$ is exactly $\\{a\\}$, so the test succeeds. One extra pair of braces shifts the test from $a$ to $\\{a\\}$. Miscounting braces here is the usual error: testing $a\\in K$ instead of $\\{a\\}\\in K$.

Stripping a pair of braces would have reduced this letter to $\\{a\\}\\subseteq K$, which is a different true claim about the first member. The opposite verdict would need a different isolation than $\\{a\\}\\subseteq K$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Subsethood always looks at members of the left-hand set. The left-hand set here is a singleton whose only member is $\\{a\\}$.

The recovered $\\{a\\}\\in K$ is what this subset test needs.

Left-hand braces count. $\\{\\{a\\}\\}$ has one member, and that member is $\\{a\\}$, not $a$. The subset test therefore asks the second recovered membership, $\\{a\\}\\in K$, which holds. Asking $a\\in K$ instead is a brace-count error that happens to be a different true claim.

Thinking extra braces were "just more subset" would have treated $\\{\\{a\\}\\}\\subseteq K$ as automatic from $\\{a\\}\\subseteq K$. That is the fork: $\\{\\{a\\}\\}\\subseteq K$ belongs to the recovered isolation, $\\{a\\}\\subseteq K$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does. Subsethood is not inherited by wrapping. Each left-hand set poses its own membership questions.

so the statement is True.`,
      `**E.** → True

The two listed objects are different: an element and a one-element set containing that element. Two distinct members give $|K|=2$. Collapsing them because "they both mention $a$" would report $|K|=1$ and destroy every $\\in$ distinction the other letters use.

Counting brace-strings instead of objects might have reported $3$ by counting $a$, $\\{a\\}$, and $\\{\\{a\\}\\}$. The stem's recovered values line up with $3$, whereas $\\{\\{a\\}\\}$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $3$ stays in the write-up. The last of those is not a member of $K$; it is a subset, the previous letter. Cardinality counts members, not subsets.

**1.** Distinctness is a type distinction, not a spelling distinction. $a$ is not a set (in this stem), while $\\{a\\}$ is a set. They cannot be the same object.

**2.** If the roster had been $\\{a,a\\}$, sets would still have size $1$, because repeats are not extra members. The second slot here is not a repeat of $a$; it is a different object.

**3.** What would make $|K|=1$? A roster $\\{a\\}$ with no nested singleton, or a collapse that identified an object with its singleton, which ordinary set theory does not do.

The recovered $|K|$ is $2$.

Cardinality here is a type count: one object of type "element," one object of type "singleton of that element." Those are not identified. Reporting $|K|=1$ would collapse the type distinction the other letters keep using, and then $\\{a\\}\\in K$ would become $a\\in K$ in disguise.

Reporting $|K|=3$ by counting $\\{\\{a\\}\\}$ as a member would confuse subset with membership. The recovered roster has two written objects. Subsets of $K$ include $\\{\\{a\\}\\}$, and that subset is not itself a member.

so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 22,
    solution_overview: `**Part 1: Setup.**

Read the braces carefully. In $K=\\{a,\\{a\\}\\}$ there are **two** listed objects:

1. the bare object $a$,
2. the singleton set $\\{a\\}$.

**Part 2: Relatives.**

Those are different things, so $|K|=2$.

**Part 3: Solve.**

Membership is immediate from the list: $a\\in K$ and $\\{a\\}\\in K$. Subset tests ask about *members of the left-hand set*:

• $\\{a\\}\\subseteq K$ asks whether $a\\in K$, yes.

• $\\{\\{a\\}\\}\\subseteq K$ asks whether $\\{a\\}\\in K$, yes.`,
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

The overview recovered $A\\cup B=\\{1,2,3,4,5,6,7,8\\}$ and $(A\\cup B)^{c}=\\{9,10\\}$. Complement of a union is "outside both." Including $8$ would require $8\\notin B$, which is false.

Keeping $8$ would have been copying a false companion of this task. Keeping $8$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. $8$ sits in $B$, so it sits in the union, so it is not in the complement. $U$ runs through $10$, and only $9$ and $10$ miss both lists.

The recovered complement of the union is $\\{9,10\\}$.

$U=\\{1,\\ldots,10\\}$ has ten numbers. The recovered union occupies $1$ through $8$. What remains is $9$ and $10$. That remainder is the complement of the union, not a second scan of $A$ and $B$.

Including $8$ treated the right end of $B$ as if it were already outside. That is the fork: $8$ belongs to the recovered isolation, $B$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. $8\\in B$, so $8$ is inside the union. Dropping $9$ would have thought $U$ stopped at $8$. So the letter reads the claim against $9$; $8$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $9$ stays in the write-up. The universe runs through $10$.

A complement that included $8$ would be claiming $8$ missed the union. $8$ sits in $B$, recovered as a member of $A\\cup B$. The only leftovers inside $U$ are $9$ and $10$.

so the statement is True.`,
      `**B.** → True

De Morgan's first law says the complement of a union is the intersection of the complements. The overview recovered $A^{c}=\\{6,7,8,9,10\\}$ and $B^{c}=\\{1,2,3,9,10\\}$, so the intersection is $\\{9,10\\}$, matching $(A\\cup B)^{c}$. The numbers $6,7,8$ miss $A$ but sit in $B$, so they fail $B^{c}$.

Taking a union of the complements here would have been running De Morgan's second law on the wrong side. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. Union of complements is the large set $\\{1,2,3,6,7,8,9,10\\}$, which is $(A\\cap B)^{c}$, not this letter.

The recovered $A^{c}\\cap B^{c}$ equals the recovered $(A\\cup B)^{c}$.

The identity is checked on these lists, not quoted as a slogan. $A^{c}\\cap B^{c}$ keeps only numbers missing from both. The recovered intersection of complements is $\\{9,10\\}$, matching the recovered complement of the union. That match is De Morgan's first law on this $U$.

Reporting $\\{6,7,8,9,10\\}$ copied $A^{c}$ and forgetting to intersect with $B^{c}$. After isolating the unknown, the check is against $\\{6,7,8,9,10\\}$. The figure $B^{c}$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $\\{6,7,8,9,10\\}$ stays in the write-up. $6,7,8$ sit in $B$, so they are not in $B^{c}$.

so the statement is True.`,
      `**C.** → True

De Morgan's second law says the complement of an intersection is the union of the complements. Here $A\\cap B=\\{4,5\\}$, so the complement in $U$ is $\\{1,2,3,6,7,8,9,10\\}$. Escaping an intersection takes only escaping one set, so the union of complements is large. Copying $(A\\cup B)^{c}$ here would undercount to $\\{9,10\\}$.

Wanting the same $\\{9,10\\}$ for both De Morgan identities would have collapsed union with intersection. Keeping $\\{9,10\\}$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Outside both is small; outside at least one is large.

The recovered $(A\\cap B)^{c}$ equals the recovered $A^{c}\\cup B^{c}$.

Outside at least one of $A$ or $B$ is a large set: everyone except the overlap $\\{4,5\\}$. The recovered union of complements is that large set. De Morgan's second law says it equals $(A\\cap B)^{c}$, and the recovered roster $\\{1,2,3,6,7,8,9,10\\}$ is that equality.

Reporting $\\{9,10\\}$ here copied the first De Morgan output onto the second. That is why $\\{9,10\\}$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Outside both is not outside at least one.

so the statement is True.`,
      `**D.** → False

Intersection keeps only numbers that sit in both lists. The overview recovered $A\\cap B=\\{4,5\\}$. The claimed $\\{4,5,6\\}$ pads the overlap with a neighbour. $6$ sits in $B$ and misses $A$. $A$ would have to list $6$ for that extra element to survive.

Running a union would have kept $6$ legally. The recovered isolation is checked against the claim using $6$, which is the figure the sessions actually produce. That contrast is the reason the verdict goes the way it does. This letter asked for intersection. Nearness of $6$ to $5$ is not membership in $A$.

**1.** Scan $A=\\{1,2,3,4,5\\}$ against $B=\\{4,5,6,7,8\\}$. Shared: $4$ and $5$. Not shared: $6\\in B\\setminus A$.

**2.** The false figure $\\{4,5,6\\}$ is a roster of the right kind with a member illegally added. It is the overlap plus one private member of $B$.

**3.** What would make $\\{4,5,6\\}$ the intersection? If $A$ had included $6$. The given $A$ stops at $5$.

The recovered overlap is $\\{4,5\\}$, not $\\{4,5,6\\}$.

Failed roster is the whole issue. The claimed $\\{4,5,6\\}$ is the recovered overlap plus $6$, a private member of $B$. Intersection has no licence to keep a private member. Nearness of $6$ to the overlap $5$ is not a membership test against $A$.

A union-minded scan would keep $6$ legally and would also keep $1,2,3,7,8$. That is a different operation. This letter asked for the stricter one, and the recovered stricter roster is $\\{4,5\\}$.

Padding an intersection with a neighbour is the same off-by-one style as dropping a legal member from a difference. The extra $6$ is a real member of $B$ and a non-member of $A$. Intersection keeps the first fact from saving the second. The recovered overlap stays $\\{4,5\\}$.

The false figure is a roster of the right kind with one illegal extra member. Union would have kept $6$, and also $1,2,3,7,8$. Intersection does not.

so the statement is False.`,
      `**E.** → False

Once $A\\cap B=\\{4,5\\}$, the complement in $U$ must drop $4$ and $5$ and keep everything else, including $6,7,8$. The overview recovered $(A\\cap B)^{c}=\\{1,2,3,6,7,8,9,10\\}$. The claimed list $\\{1,2,3,4,5,9,10\\}$ keeps $4$ and $5$ while omitting $6,7,8$: the opposite of a complement.

Complement of the overlap cannot contain the overlap. Complementing $A$ instead of $A\\cap B$ would have dropped $1,2,3,4,5$ and kept $6$ through $10$, a different wrong list. That is the fork: $A$ belongs to the recovered isolation, $10$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does.

**1.** The claimed roster still contains $4$ and $5$, which are exactly the members that must leave. That alone kills equality.

**2.** The claimed roster also drops $6,7,8$, which miss the overlap (they miss $A$) and therefore must sit in the complement. Two independent errors, same false list.

**3.** What would make the claimed list correct? A different overlap, for instance $A\\cap B=\\{6,7,8\\}$, which these lists do not have.

The recovered complement of the intersection is $\\{1,2,3,6,7,8,9,10\\}$.

A complement that still contains the overlap has not complemented. The claimed list keeps $4$ and $5$, the recovered overlap, and drops $6,7,8$, which miss $A$ and so miss the overlap. Both errors point the wrong way: keep what should leave, drop what should stay.

The recovered complement of $\\{4,5\\}$ inside $U$ is the eight-number list $\\{1,2,3,6,7,8,9,10\\}$. Equality with $\\{1,2,3,4,5,9,10\\}$ already fails at $4$, and again at $6$. Two witnesses, one false roster.

Two independent roster errors usually travel together: keep the overlap, drop the $A$-only and $B$-only numbers that a complement of the overlap must keep. The recovered eight-element list keeps $6,7,8$ and drops $4,5$. The claimed list does the reverse on both counts.

A complement roster that still lists the overlap has pointed the wrong way. The recovered $(A\\cap B)^{c}$ is the eight numbers that are not $4$ or $5$.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `**Part 1: Setup.**

Complements inside $U=\\{1,\\ldots,10\\}$ with $A=\\{1,\\ldots,5\\}$ and $B=\\{4,\\ldots,8\\}$.

**Part 2: Relatives.**

First the overlap and the complements:

$$A\\cap B=\\{4,5\\},\\quad A^c=\\{6,7,8,9,10\\},\\quad B^c=\\{1,2,3,9,10\\}.$$

Union of $A$ and $B$ is $\\{1,\\ldots,8\\}$, so

$$(A\\cup B)^c=\\{9,10\\}=A^c\\cap B^c,$$

which is De Morgan’s first law. Removing the overlap from $U$ gives

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}=A^c\\cup B^c,$$

De Morgan’s second law.

**Part 3: Solve.**

False claims either pad the intersection with $6$ or scramble which numbers belong in the complement of the intersection.`,
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

Product size is the number of cells in a $2$ by $3$ grid. The overview recovered $|A\\times B|=2\\cdot 3=6$ and listed the six pairs $(1,x),(1,y),(1,z),(2,x),(2,y),(2,z)$. Product size is cells, not the five distinct symbols. $(1,x)$ and $(2,x)$ are different cells even though they share a letter.

Adding $2+3=5$ would have counted symbols. The path that matches the stem therefore holds $2+3=5$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Reporting $8$ would have padded a $2\\times 4$ grid. Working from the isolated values, $8$ is the figure that is checked, not the detour that produced $2\\times 4$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered product has six ordered pairs.

Five symbols $1,2,x,y,z$ are not six cells. The product counts ordered pairs, so the same letter $x$ appears in two cells, $(1,x)$ and $(2,x)$. Those cells are different members of $A\\times B$.

Reporting $5$ counted an alphabet. That is why $5$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Reporting $2^{3}=8$ mixed exponentiation with a $2$ by $3$ grid. Working from the isolated values, $2^{3}=8$ is the figure that is checked, not the detour that produced $3$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered grid has six cells.

The recovered six pairs are cells in a rectangle, two rows by three columns. Counting the five letters that appear in those cells is a different count. Product size is the cell count, recovered as $6$.

so the statement is True.`,
      `**B.** → True

$(2,x)$ has first slot in $A=\\{1,2\\}$ and second in $B=\\{x,y,z\\}$. Both tests succeed, so $(2,x)\\in A\\times B$. Swapping the slots would exit this product: $(x,2)$ has a letter first, which $A\\times B$ never allows.

Treating pairs as unordered would keep both orientations. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Order is the whole point of a Cartesian product. The neighbouring letter is the swapped pair, and it fails.

The recovered $A\\times B$ contains $(2,x)$ among its six cells.

Slot tests are typed. First slot: is $2$ in $A$? Yes. Second slot: is $x$ in $B$? Yes. Both yes, so the pair is in the recovered product. The swapped pair $(x,2)$ fails the first test, which is why the next letter is false.

Unordered $\\{2,x\\}$ would treat the two orientations as one object. Cartesian products do not. The recovered $A\\times B$ is a set of ordered pairs.

The neighbouring swapped pair is the trap sitting next to this success. $(2,x)$ passes both slot tests. $(x,2)$ fails the first. Keeping this letter true does not keep the next letter true. Ordered pairs remember which factor came first.

so the statement is True.`,
      `**C.** → False

$(x,2)$ starts with a letter, and $x\\notin A$. Ordered pairs treat $(2,x)$ and $(x,2)$ as different objects; the second lives in $B\\times A$. Having both symbols available somewhere is not enough unless they sit in the required slots.

Checking "are $x$ and $2$ in $A\\cup B$?" would have passed a union test that this product does not use. The recovered comparison therefore keeps $x$ and does not substitute $A\\cup B$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered $A\\times B$ never has a letter in the first slot.

What would make $(x,2)$ land in $A\\times B$? If $A$ had contained $x$ and $B$ had contained $2$. The given factors are numbers then letters, not letters then numbers.

The recovered $A\\times B$ does not contain $(x,2)$.

The pair $(x,2)$ is a perfectly good ordered pair. It simply lives in the other product. The recovered $B\\times A$ contains it, and the recovered $A\\times B$ does not. Membership in a Cartesian product is two slot tests, not a check that both coordinates appear somewhere in $A\\cup B$.

Passing $(x,2)$ because "$x$ and $2$ are in the picture" ran a union test. Working from the isolated values, $(x,2)$ is the figure that is checked, not the detour that produced $2$. That contrast is the reason the verdict goes the way it does. The first slot of $A\\times B$ only accepts $1$ or $2$.

so the statement is False.`,
      `**D.** → False

$(2,x)\\in A\\times B$ but $2\\notin B$, so that pair cannot sit in $B\\times A$. Different members mean unequal sets, even though both products have size $6$. Equal cardinality never forces equal Cartesian products when the factor order flips.

Seeing $|A\\times B|=|B\\times A|$ and concluding set equality would have mixed the size letter with this letter. The recovered isolation is checked against the claim using $|A\\times B|=|B\\times A|$, which is the figure the sessions actually produce. That contrast is the reason the verdict goes the way it does. Size equality is the next claim; set equality is this claim, and it fails.

**1.** The recovered $A\\times B$ is six pairs with a number first. The recovered $B\\times A$ is six pairs with a letter first. Those two lists share no member.

**2.** What would make $A\\times B=B\\times A$? Equal factors $A=B$, or a degenerate empty factor, which these two sets are not.

The recovered products are different sets of the same size.

Same size, different members. The recovered six pairs with a number first share nothing with the recovered six pairs with a letter first. Set equality needs matching members, not matching counts. Letter E is the matching-count claim, and it is true; this letter is matching-members, and it is false.

Writing $A\\times B=B\\times A$ from $2\\cdot 3=3\\cdot 2$ mixed the commutative law for multiplication with equality of sets of pairs. That is the fork: $A\\times B=B\\times A$ belongs to the recovered isolation, $2\\cdot 3=3\\cdot 2$ belongs to the discarded mix. Multiplication of sizes is commutative. The pair-constructor is not.

so the statement is False.`,
      `**E.** → True

Counts agree by the product rule. The extra arithmetic this letter is allowed is the reverse product, not a second listing of the six pairs:

$$|B\\times A|=3\\cdot 2=6=|A\\times B|.$$

Member lists do not agree. Size equality is commutative; set equality of $A\\times B$ with $B\\times A$ would need $A=B$ (or a degenerate empty factor), which these two sets are not.

Thinking unequal sets cannot have equal size would have rejected a true count comparison. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Finite sets of the same size can still be disjoint, and these two products are disjoint.

The recovered sizes both equal $6$.

The reverse count $3\\cdot 2=6$ is this letter's own extra arithmetic. It does not relist the pairs. It only multiplies the factor sizes in the other order. Equal products of sizes give equal cardinalities, here both $6$.

Unequal sets of that common size are compatible: two disjoint six-element lists. The recovered products are those two lists. Size equality holds; the previous letter's set equality does not.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `**Part 1: Setup.**

An ordered pair $(a,b)$ lands in $A\\times B$ only when the **first** slot is from $A=\\{1,2\\}$ and the **second** from $B=\\{x,y,z\\}$.

**Part 2: Relatives.**

List them:

$$A\\times B=\\{(1,x),(1,y),(1,z),(2,x),(2,y),(2,z)\\}.$$

Six pairs, matching $|A|\\cdot|B|=2\\cdot 3=6$. Reverse the factors and the pairs flip roles:

$$B\\times A=\\{(x,1),(x,2),(y,1),(y,2),(z,1),(z,2)\\}.$$

Same count $3\\cdot 2=6$, but different ordered pairs, so the sets $A\\times B$ and $B\\times A$ are unequal.

**Part 3: Solve.**

In particular $(x,2)$ has a letter first, which $A\\times B$ never allows.`,
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

Subsethood would need every point of $(1,5)$ to satisfy $x\\ge 3$. The leftover strip $(1,3)$ is the obstruction; $x=2$ sits in $A$ and misses $B$. The inclusion would hold if $A$ had started at $3$.

Checking only the overlap $[3,5)$ would have missed the left strip. The path that matches the stem therefore holds $[3,5)$ fixed and only then reads the claim. That contrast is the reason the verdict goes the way it does. The existence letter names that strip as nonempty. One witness $2$ is enough.

The recovered $A\\setminus B=(1,3)$ is the obstruction.

The leftover strip $(1,3)$ is an interval, not a single awkward point. Every $x$ with $1<x<3$ sits in $A$ and misses $B$. The witness $2$ is one of infinitely many. Inclusion $A\\subseteq B$ would need that strip empty, which would need $A$ to start at $3$.

Checking $x=4$ only tested the overlap. The opposite verdict would need a different isolation than $x=4$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Overlap cannot obstruct subsethood. The obstruction lives where $A$ sticks out to the left of $B$.

The inclusion would hold for $A=[3,5)$ against this $B$, because that is already the recovered overlap. The given $A$ is $(1,5)$, which sticks out to the left. That stick-out is $(1,3)$, recovered as nonempty, so $A\\nsubseteq B$.

so the statement is False.`,
      `**B.** → True

Numbers satisfying both $1<x<5$ and $x\\ge 3$ form the tighter interval $[3,5)$. The lower end $3$ is closed because $3\\in A$ and $3\\in B$; the upper end $5$ stays open because $5\\notin A$. Closing $5$ would include a point $A$ excluded. Opening $3$ would throw out a point both sets contain.

Writing $(3,5)$ would have dropped $3$, which both inputs contain. The recovered comparison therefore keeps $(3,5)$ and does not substitute $3$. Endpoint arithmetic is this letter's extra work.

**1.** Check $x=3$: $1<3<5$ and $3\\ge 3$, so $3$ sits in the overlap. The claimed $[3,5)$ keeps it.

**2.** Check $x=5$: $5\\ge 3$ so $5\\in B$, but $5\\nless 5$ so $5\\notin A$. The claimed interval excludes it.

**3.** Check $x=4$: interior of both, kept. Check $x=2$: in $A$, not in $B$, excluded from the intersection.

The recovered overlap is $[3,5)$.

Endpoint arithmetic is the extra work the overlap roster needs. Closed at $3$ because both inputs contain $3$. Open at $5$ because $A$ is open at $5$ while $B$ does not care. The recovered $[3,5)$ is that combination, not a default "closed on the left, open on the right" slogan.

Writing $[3,5]$ included a point $A$ never had. The recovered comparison therefore keeps $[3,5]$ and does not substitute $A$. That contrast is the reason the verdict goes the way it does. Writing $(3,5)$ dropped a point both inputs have. That is why $(3,5)$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Either endpoint slip is a failed roster of the overlap.

so the statement is True.`,
      `**C.** → False

$B$ is unbounded above, so it contains numbers far past $A$. Witness $x=10$: in $B$, not in $A$. Reverse inclusion would require $B$ to stop at $5$, which $[3,\\infty)$ does not. One large witness kills $B\\subseteq A$.

Only looking near $4$ would have thought the intervals nested. Once $4$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The ray $[3,\\infty)$ keeps going. The recovered union $(1,\\infty)$ is larger than $A$ precisely because of this tail.

$B=[3,\\infty)$ has no right end. $A=(1,5)$ does. Any $x\\ge 5$ sits in $B$ and misses $A$. The witness $10$ is far enough that nobody confuses it with an endpoint quarrel. One such $x$ kills $B\\subseteq A$.

Comparing only the overlap $[3,5)$ saw a piece of $B$ inside $A$ and stopping. After isolating the unknown, the check is against $[3,5)$. The figure $A$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $[3,5)$ stays in the write-up. Reverse inclusion asks about all of $B$, including the unbounded tail.

Nested-looking pictures near $x=4$ hide the tail. Reverse inclusion is a claim about every point of the ray $[3,\\infty)$, including $10$, $100$, and every larger real. Each of those sits in $B$ and misses $A$. One of them is enough.

so the statement is False.`,
      `**D.** → True

From just above $1$ onward there is always coverage: $A$ handles $(1,5)$, $B$ handles $[3,\\infty)$. So

$$A\\cup B=(1,\\infty)$$

The point $1$ itself is excluded from both inputs, matching the open left end. Including $1$ would require one of the two sets to contain it, and neither does,

From just above $1$ onward there is always coverage: $A$ handles $(1,5)$, $B$ handles $[3,\\infty)$. So $A\\cup B=(1,\\infty)$. The point $1$ itself is excluded from both inputs, matching the open left end. Including $1$ would require one of the two sets to contain it, and neither does.

Closing the left end would have padded a point the recovered union misses. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Extra check: $0.5$ misses both, $1.5$ sits in $A$, $10$ sits in $B$.

so the statement is True.`,
      `**E.** → True

The recovered leftover is $A\\setminus B=(1,3)$, which is nonempty. Explicitly $x=2$ satisfies $1<2<5$ but $2<3$. One witness is all an existence claim needs. The leftover strip would vanish only if $A$ had started at $3$.

Picking $x=4$ would have landed in the overlap, which sits in $B$ and cannot witness $A\\setminus B$. The recovered comparison therefore keeps $x=4$ and does not substitute $A\\setminus B$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The witness has to sit strictly left of $3$ and strictly right of $1$.

This is the same obstruction that kills $A\\subseteq B$, now asked as an existence claim rather than an inclusion.

Existence is the leftover strip asked as a yes-no. Nonempty $(1,3)$ is already the yes. The explicit $x=2$ is a witness you can check in one line: $1<2<5$ holds, $2\\ge 3$ fails. A witness in the overlap, such as $4$, would be a failed witness because it sits in $B$.

This is the same obstruction as $A\\nsubseteq B$, now phrased so that one point is enough. Inclusion would have needed every point of $A$ to sit in $B$. Existence needs one point of $A$ that misses $B$.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `**Part 1: Setup.**

Rewrite in interval notation: $A=(1,5)$ and $B=[3,\\infty)$. **Overlap.** Numbers satisfying both $1<x<5$ and $x\\ge 3$ form $[3,5)$.

**Part 2: Relatives.**

**Joined.** From just above $1$ onward there is always coverage ($A$ handles $(1,5)$, $B$ handles $[3,\\infty)$), so $A\\cup B=(1,\\infty)$. **Left-only strip.** $A\\setminus B=(1,3)$, which is nonempty, e.g. $2$.

**Part 3: Solve.**

That same $2$ shows $A\\nsubseteq B$. A large number such as $10$ shows $B\\nsubseteq A$.`,
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

Difference $A\\setminus B$ deletes the shared $3,4$ from $A$, leaving $\\{1,2\\}$. Difference $B\\setminus A$ leaves $\\{5,6\\}$. Join the leftovers: the overview recovered $A\\triangle B=\\{1,2,5,6\\}$. Symmetric difference is "exactly one," not "at least one." Including $3$ would rebuild the union.

Reporting $\\{1,2,3,4,5,6\\}$ would have run a union. Keeping $\\{1,2,3,4,5,6\\}$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The recovered symmetric difference drops the overlap.

The recovered outer cells are $\\{1,2\\}$ and $\\{5,6\\}$.

Exactly-one is the two outer Venn cells joined. The recovered cells are $\\{1,2\\}$ and $\\{5,6\\}$, and their union is $\\{1,2,5,6\\}$. The middle cell $\\{3,4\\}$ is absent on purpose. Putting $3$ back in would rebuild $A\\cup B$.

Reporting $\\{1,2,3,4,5,6\\}$ ran a union. The path that matches the stem therefore holds $\\{1,2,3,4,5,6\\}$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Reporting $\\{1,2\\}$ ran only $A\\setminus B$ and forgetting the other leftover. That is the fork: $\\{1,2\\}$ belongs to the recovered isolation, $A\\setminus B$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The recovered symmetric difference is the two private cells joined, not the three-cell union. $3$ and $4$ sit in both inputs, so they sit in neither leftover. Deleting them from both sides is the definition, recovered as $\\{1,2,5,6\\}$.

so the statement is True.`,
      `**B.** → False

The definition joins the leftovers by $\\cup$, not $\\cap$. Those leftovers $\\{1,2\\}$ and $\\{5,6\\}$ are disjoint, so replacing union by intersection collapses to $\\emptyset$, contradicting the four-element set $\\{1,2,5,6\\}$. Outer buckets of a Venn diagram never overlap.

Writing $\\cap$ by mixing up "and" with "or" in "exactly one" would have landed on empty. The path that matches the stem therefore holds $\\cap$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. "Exactly one" is an or of two private regions.

The recovered $(A\\setminus B)\\cap(B\\setminus A)$ is empty, not the symmetric difference.

"Exactly one" in English can sound like an and: in $A$ and not in $B$, and also in $B$ and not in $A$. That double demand is unsatisfiable, which is why intersecting the leftovers yields empty. The definition uses or of the two private regions, recovered as a union.

Writing $\\cap$ in the definition would have a formula whose value on these lists is $\\emptyset$, contradicting the recovered four-element symmetric difference. The recovered comparison therefore keeps $\\cap$ and does not substitute $\\emptyset$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

Intersecting two disjoint leftovers is empty by construction. The definition's $\\cup$ is what keeps all four private numbers. Replacing that $\\cup$ by $\\cap$ is a connective slip, and the recovered value of the slipped formula is $\\emptyset$, not $\\{1,2,5,6\\}$.

so the statement is False.`,
      `**C.** → False

Symmetric difference excludes the overlap. Here $A\\cap B=\\{3,4\\}$ and $A\\triangle B=\\{1,2,5,6\\}$, which share nothing. So $A\\cap B\\nsubseteq A\\triangle B$. The inclusion would hold only if the overlap were empty.

Thinking "shared elements belong everywhere" would have put $\\{3,4\\}$ inside the symmetric difference. The opposite verdict would need a different isolation than $\\{3,4\\}$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. They belong in the union, not in "exactly one."

The recovered overlap and the recovered symmetric difference are disjoint.

Shared elements belong in the intersection and in the union. They do not belong in the symmetric difference. The recovered $\\{3,4\\}$ and $\\{1,2,5,6\\}$ are disjoint, so the inclusion $A\\cap B\\subseteq A\\triangle B$ fails at $3$ already.

The inclusion would hold if the overlap were empty, which is the hypothesis of the next letter's identity. These lists share two numbers, so this inclusion fails.

Witness $3$: in the overlap, missing from the symmetric difference. That one membership already kills the inclusion. $4$ is a second witness of the same shape. The recovered lists $\\{3,4\\}$ and $\\{1,2,5,6\\}$ share nothing.

so the statement is False.`,
      `**D.** → True

If $A$ and $B$ share nothing, then $A\\setminus B=A$ and $B\\setminus A=B$, so $A\\triangle B=A\\cup B$. There is no middle bucket to discard. This is a general identity, not a scan of the given lists; the given lists are not disjoint, which is why $A\\triangle B$ and the union differ here.

Applying the identity to these lists would have equated $\\{1,2,5,6\\}$ with $\\{1,2,3,4,5,6\\}$. The stem's recovered values line up with $\\{1,2,5,6\\}$, whereas $\\{1,2,3,4,5,6\\}$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $\\{1,2,5,6\\}$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The identity needs the disjointness hypothesis, which these lists fail.

**1.** Under disjointness the two private regions are the two whole sets, so joining them is the union.

**2.** The given $A$ and $B$ share $\\{3,4\\}$, so the identity's hypothesis is false of this pair. The implication "if disjoint, then equal to the union" can still be true as a general rule.

**3.** What would make the identity fail? Nothing, for the definition $(A\\setminus B)\\cup(B\\setminus A)$: empty overlap collapses each difference to the whole set.

The recovered identity holds; these particular lists are just not a case of it.

The identity is an implication with a hypothesis: if disjoint, then symmetric difference equals union. The hypothesis is false of the given $A$ and $B$, and the implication can still be true. Applying the identity as if these lists were disjoint is a different, false, claim.

Under a genuine disjoint pair, say $\\{1,2\\}$ and $\\{5,6\\}$, there is no middle cell, each difference equals the whole set, and joining them is the union. That is the recovered identity, not a scan of the overlapping pair in the stem.

so the statement is True.`,
      `**E.** → True

$|A|+|B|$ double-counts the overlap, and $A\\triangle B$ throws both copies away. The extra arithmetic is the factor of $2$ on the overlap:

$$|A\\triangle B|=4+4-2\\cdot 2=4.$$

That matches the four-element set $\\{1,2,5,6\\}$. Subtracting the overlap only once would give the union size $6$ instead.

Using $|A|+|B|-|A\\cap B|$ would have computed the union, the rival of letter A. The path that matches the stem therefore holds $|A|+|B|-|A\\cap B|$ fixed and only then reads the claim. Symmetric difference discards the middle twice: once from each side.

The recovered count is $4$.

The factor $2$ is this letter's extra arithmetic. Union subtracts the overlap once, because each shared element was counted twice in $|A|+|B|$ and should remain once. Symmetric difference subtracts it twice, because those shared elements should remain zero times.

On these lists: $4+4-2=6$ would be the union size. $4+4-4=4$ is the recovered $|A\\triangle B|$, matching $\\{1,2,5,6\\}$. Using the union formula here is the named wrong figure $6$.

On these lists the union size is $6$ and the symmetric-difference size is $4$. The difference of those two counts is the overlap size $2$, because union keeps one copy of each shared element and symmetric difference keeps none. The factor $2$ in the claimed formula is what produces $4$ rather than $6$.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `**Part 1: Setup.**

Symmetric difference keeps what is in **exactly one** of the two sets:

$$A\\triangle B=(A\\setminus B)\\cup(B\\setminus A).$$

With $A=\\{1,2,3,4\\}$ and $B=\\{3,4,5,6\\}$:

| Piece | Result |
| --- | --- |
| $A\\cap B$ | $\\{3,4\\}$ |
| $A\\setminus B$ | $\\{1,2\\}$ |
| $B\\setminus A$ | $\\{5,6\\}$ |
| $A\\triangle B$ | $\\{1,2,5,6\\}$ |

The one-sided differences are disjoint, so replacing $\\cup$ by $\\cap$ in the definition collapses to $\\emptyset$, wrong.

**Part 2: Relatives.**

Shared elements $\\{3,4\\}$ are *excluded* from the symmetric difference, so $A\\cap B\\nsubseteq A\\triangle B$. If the sets were disjoint, each difference would equal the whole set and $A\\triangle B$ would equal $A\\cup B$.

**Part 3: Solve.**

Counting-wise, $|A|+|B|$ double-counts the overlap, and the symmetric difference throws both copies away: $|A\\triangle B|=|A|+|B|-2|A\\cap B|=4+4-4=4$.`,
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

An ordered pair (rep, account) is a cell in a $5$ by $8$ grid. The overview recovered $5\\cdot 8=40$. Product size is cells, not $5+8=13$. Each rep can be paired with each account independently.

Reporting $13$ added. That is why $13$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Reporting $5^{8}$ or $8^{5}$ would have been counting functions, a different product. The stem's recovered values line up with $5^{8}$, whereas $8^{5}$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $5^{8}$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered coverage count is $40$.

Each of $5$ reps can be the point of contact for each of $8$ accounts, independently. That is a grid, recovered as $40$ cells. Addition $5+8=13$ would count people-plus-accounts, not assignments. Exponentiation would count functions from one set to the other, a different question the stem did not ask.

The recovered coverage count is the product, $40$.

Independence of the two coordinates is why the count multiplies. Choosing Maria does not restrict which account she covers. Five choices then eight choices, recovered as $40$ ordered pairs, not $13$ names in a room.

so the statement is True.`,
      `**B.** → False

Coverage pairs are ordered: first slot is the rep, second is the account. $(\\text{Maria},\\text{Account 3})$ and $(\\text{Account 3},\\text{Maria})$ are different objects; the second treats Account $3$ as the rep. Order is the whole point of a Cartesian product. Commutativity would hold only if the two coordinates were the same type and the pair happened to be a diagonal,

Coverage pairs are ordered: first slot is the rep, second is the account. $(\\text{Maria},\\text{Account 3})$ and $(\\text{Account 3},\\text{Maria})$ are different objects; the second treats Account $3$ as the rep. Order is the whole point of a Cartesian product. Commutativity would hold only if the two coordinates were the same type and the pair happened to be a diagonal.

Treating the pair as an unordered partnership would have accepted equality. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The firm’s coverage assignment names who calls on whom, which is ordered.

so the statement is False.`,
      `**C.** → True

Zero accounts means the second factor is empty, so $r\\cdot 0=0$ for any number $r$ of reps. Without a second coordinate there is no ordered pair. Hiring more reps cannot create an account slot that does not exist.

Thinking "lots of reps should create some assignments" would have treated empty as "unknown" rather than zero. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The product rule with a zero factor is zero.

The recovered empty-product identity is $r\\cdot 0=0$.

An ordered pair needs two coordinates. If the account-set is empty, the second coordinate has nowhere to come from. Growing the first factor cannot manufacture a second coordinate. The recovered identity $r\\cdot 0=0$ is that observation for every $r$, including a firm that hires dozens of idle reps.

Writing "unknown" for empty would have treated $0$ as missing data. The opposite verdict would need a different isolation than $0$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Empty is data: zero accounts, zero pairs.

Zero is absorbing in the product rule. Ten reps and zero accounts is still zero pairs. The recovered identity does not have an exception for "a large sales force." Without an account there is no coverage assignment to form.

so the statement is True.`,
      `**D.** → False

Membership $(r,a)\\in\\text{Reps}\\times\\text{Accounts}$ means $r\\in\\text{Reps}$ and $a\\in\\text{Accounts}$. The claim swaps both tests. That swapped reading would put Maria among the accounts. The pair (Maria, Account $3$) is in the product only under the original slot tests.

Checking "both names appear somewhere" would have passed a union test. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Slots are typed. The recovered membership rule never swaps the factors.

What would make the swapped tests correct? A product $\\text{Accounts}\\times\\text{Reps}$, which is a different set of ordered pairs.

Swapping the tests swaps the types. Maria is a rep, Account $3$ is an account. The recovered membership rule puts the rep in the first slot and the account in the second. The claim puts Maria in Accounts and Account $3$ in Reps, which is the other product's tests, and would usually fail both.

Checking "both names appear in the company" ran a union test. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Cartesian membership is slot-typed. The pair (Maria, Account $3$) is in Reps $\\times$ Accounts under the unswapped tests only.

so the statement is False.`,
      `**E.** → True

Six reps and eight accounts. The extra arithmetic is the increment from one new rep, not a second run of $5\\cdot 8$:

$$6\\cdot 8=48.$$

Equivalently the new rep adds eight new pairs to the old forty, so $40+8=48$. The product rule scales with either factor; growing the first factor by one multiplies by the second factor, not by $1$.

Reporting $41$ would have added $1$ instead of $8$. That is the fork: $41$ belongs to the recovered isolation, $8$ belongs to the discarded mix. One new person covers all eight accounts, not one extra cell.

The recovered new count is $48$.

One new rep does not add one assignment. That rep can cover each of the $8$ accounts, so the increment is $8$. Equivalently $6\\cdot 8=48$. The recovered old count $40$ plus that increment is $48$.

Reporting $41$ added people instead of cells. Once $41$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Reporting $40\\cdot 6$ reused the old product as a factor. Once $40\\cdot 6$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The product rule rebuilds from the new sizes: $6$ and $8$.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `**Part 1: Setup.**

A coverage assignment is an ordered pair $(\\text{rep},\\text{account})$ in the Cartesian product $\\text{Reps}\\times\\text{Accounts}$. **Product rule.** With $5$ reps and $8$ accounts there are

$$5\\cdot 8=40$$

possible pairs.

**Part 2: Relatives.**

Hiring a sixth rep raises the count to $6\\cdot 8=48$. **Order is the point.** First coordinate = rep, second = account. Swapping Maria with Account 3 changes the pair and usually exits the product entirely.

**Part 3: Solve.**

Membership $(r,a)\\in\\text{Reps}\\times\\text{Accounts}$ means $r\\in\\text{Reps}$ and $a\\in\\text{Accounts}$, never the reverse. **Zero accounts.** For any number $r$ of reps, $r\\cdot 0=0$: without a second coordinate there is no assignment.`,
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

Closing $4$ would include a temperature $A$ rejects,

A temperature must satisfy $-4<T<4$ and $T\\ge -1$. Keep the tighter limit at each end: the lower limit becomes $-1$ (included, because $-1$ is frost-safe: $1<16$, and irrigation allows $-1$), the upper limit stays $4$ (excluded, because $4^{2}=16$ is not strictly less than $16$). Closing $4$ would include a temperature $A$ rejects.

Endpoint arithmetic is the extra work. Writing $(-1,4)$ would have dropped $-1$, which both rules allow. The stem's recovered values line up with $(-1,4)$, whereas $-1$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $(-1,4)$ stays in the write-up.

so the statement is True.`,
      `**B.** → False

$4$ sits in $B$ because $4\\ge -1$, but it fails $T^{2}<16$, so $4\\notin A$ and therefore $4\\notin A\\cap B$. The recovered interval $[-1,4)$ is open at $4$ for the same reason. Being in $B$ alone never rescues a temperature that $A$ rejects. The endpoint $4$ is the whole issue.

Seeing $4$ on the printed interval and keeping it would have closed a right end $A$ leaves open. The stem's recovered values line up with $4$, whereas $A$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $4$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Check: $4^{2}=16$ is not strictly less than $16$.

The recovered overlap excludes $4$.

The printed overlap $[-1,4)$ shows $4$ as an endpoint and still excludes it. Seeing $4$ in the notation is not membership. $4\\in B$ is true and irrelevant once $4\\notin A$. Intersection requires both.

Closing the right end because "irrigation is on at $4$" used only $B$. The recovered comparison therefore keeps $4$ and does not substitute $B$. Frost safety is the open right end, recovered from $4^{2}=16$ not being strictly less than $16$.

Membership in an intersection is two tests, and $4$ fails the frost test. Closing $[-1,4)$ at $4$ would be rewriting $A$ as $T^{2}\\le 16$. The stem used a strict inequality. The recovered overlap stays open at $4$.

so the statement is False.`,
      `**C.** → False

$A=(-4,4)$ already excluded $\\pm 4$, so the complement must collect them. The overview recovered $A^{c}=(-\\infty,-4]\\cup[4,\\infty)$. The claimed strict inequalities $T<-4$ or $T>4$ discard those two boundary temperatures. Open-interval complements are closed on the outside; flipping both inequalities to strict is the classic miswrite.

Check $T=4$: $4^{2}=16$ is not $<16$, so $4\\notin A$, so $4$ must sit in $A^{c}$. The claimed roster drops it. The same check at $T=-4$ puts $-4$ in the complement.

**1.** Completing a strict inequality $T^{2}<16$ produces $T\\le -4$ or $T\\ge 4$, not two more strict inequalities.

**2.** Thinking "open inside means open outside" would have written $(-\\infty,-4)\\cup(4,\\infty)$. That is why $(-\\infty,-4)\\cup(4,\\infty)$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Open inside means the boundary points missed $A$, so they belong outside, with closed ends.

**3.** What would make the claimed strict complement correct? If $A$ had been $[-4,4]$, already including the endpoints. The frost rule used a strict square inequality, so the endpoints stay out of $A$.

The recovered $A^{c}$ includes $\\pm 4$.

Boundary temperatures are the whole complement quarrel. $A$ missed $\\pm 4$ because the frost inequality was strict. Complements of open intervals therefore include those endpoints: closed outer rays. The claimed $T<-4$ or $T>4$ writes open outer rays and drops two real temperatures that must sit in $A^{c}$.

Check $-4$ as well as $4$: $(-4)^{2}=16$ is not $<16$, and $-4<-1$ so irrigation is off. $-4$ misses both $A$ and $B$. It certainly misses $A$, so it belongs in $A^{c}$. The claimed strict complement drops it.

The claimed complement is the recovered $A^{c}$ with two endpoints deleted. Those endpoints are not optional. Open $A$ means $\\pm 4\\notin A$, which means $\\pm 4\\in A^{c}$. Writing strict outer inequalities silently drops two members of the complement.

so the statement is False.`,
      `**D.** → False

$A$ covers $(-4,4)$ and $B$ carries on upward from $-1$, so together they reach every temperature above $-4$. The overview recovered $A\\cup B=(-4,\\infty)$. Take $T=-5$: not frost-safe ($25\\ge 16$) and not irrigating ($-5<-1$). One missing real is enough. The whole ray $(-\\infty,-4]$ lies outside both pieces.

Thinking "irrigation runs forever, so the union is all of $\\mathbb R$" would have ignored the cold left tail. The opposite verdict would need a different isolation than $\\mathbb R$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Irrigation starts at $-1$, not at $-\\infty$. Frost safety only reaches down to just above $-4$.

**1.** $T=-4$ itself fails the frost rule and fails irrigation, so even the boundary $-4$ is missing, not only the colder ray.

**2.** $T=10$ is in the union via $B$, and $T=0$ is in via both. Coverage on the warm side does not purchase coverage on the far-cold side.

**3.** What would make the union all of $\\mathbb R$? Irrigation starting at $-\\infty$, or frost safety with no lower bound. Neither rule is written that way.

The recovered union is $(-4,\\infty)$, not $\\mathbb R$.

Irrigation's right-infinite ray does not cover the left-infinite cold. $B$ starts at $-1$. $A$ only reaches just above $-4$. Everything at $-4$ and colder misses both, so the recovered union is $(-4,\\infty)$, not $\\mathbb R$.

Writing $A\\cup B=\\mathbb R$ treated "on forever in one direction" as "on for every real." The opposite verdict would need a different isolation than $A\\cup B=\\mathbb R$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim.One direction is not two. The witness $T=-5$ is a concrete missing temperature: $25\\ge 16$ and $-5<-1$.

Warm coverage is not total coverage. $A\\cup B$ covers every temperature above $-4$ and none at $-4$ or below. Equality with $\\mathbb R$ would need that cold ray included. The recovered union $(-4,\\infty)$ is already the whole covered set, and it is a proper subset of $\\mathbb R$.

so the statement is False.`,
      `**E.** → True

The recovered leftover is $A\\setminus B=(-4,-1)$, frost-safe yet dry. At $T=-2$ we have $4<16$ and $-2<-1$, so irrigation stays off. One witness is enough. That leftover slice would vanish if irrigation started at $-4$ instead of $-1$.

Picking $T=0$ would have landed in the overlap, where irrigation is on. Keeping $T=0$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The witness has to sit in $(-4,-1)$.

Existence needs one temperature, not a description of every frost-safe dry reading. $-2$ is that temperature.

Frost-safe but dry is the open interval $(-4,-1)$. At $-2$, the square $4$ is less than $16$, and $-2$ is strictly below the irrigation start. One witness is enough for existence. $T=0$ is a failed witness: frost-safe and irrigating.

The leftover would vanish if $B$ started at $-4$ or below. The stem started irrigation at $-1$, so the recovered dry-safe slice is nonempty.

Existence needs one dry frost-safe temperature, not a policy change. $-2$ is inside the recovered $(-4,-1)$. Irrigation starts at $-1$, frost safety starts just above $-4$, and the open interval between those starts is the leftover this letter names.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 6,
    solution_overview: `**Part 1: Setup.**

The two rules are already intervals, so every question here is really a question about **endpoints**: which boundary temperature is inside, and which one is just outside. **Turn each rule into an interval**

The frost condition $T^2<16$ holds exactly when $-4<T<4$. Both boundaries fail, because $(-4)^2=4^2=16$ and $16$ is not *less* than $16$, so the frost set keeps both of its ends open:

$$A = (-4, 4)$$

The irrigation condition $T\\ge-1$ allows $-1$ itself, so $B=[-1,\\infty)$ with a closed left end. **Where both rules hold at once**

A temperature must satisfy $-4<T<4$ *and* $T\\ge-1$.

**Part 2: Relatives.**

Keep the tighter limit at each end: the lower limit becomes $-1$ (included), the upper limit stays $4$ (excluded). $$A\\cap B=[-1,4)$$

The left end is closed because $-1$ passes both rules, and the right end stays open because $4$ fails the frost rule. **Where at least one rule holds**

$A$ covers $(-4,4)$ and $B$ carries on upward from $-1$; the two pieces overlap, so together they reach every temperature above $-4$, giving $A\\cup B=(-4,\\infty)$.

**Part 3: Solve.**

Nothing at $-4$ or colder is covered. **Outside A**

The **complement** $A^c$ collects every real number that A missed: $A^c=(-\\infty,-4]\\cup[4,\\infty)$. Since $-4$ and $4$ were never in A, they land here, and both of them are included on this outer side. **Frost-safe but dry**

Subtracting one set from the other gives $A\\setminus B=(-4,-1)$, cold yet safe temperatures, such as $-2$, where irrigation stays off.`,
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

Inclusion-exclusion removes the whole overlap once. The overview recovered $|A\\cup B|=160$, from $120+90-50$. The claimed $170$ subtracts only $40$, as if only the excess over $200$ needed deleting. The correct subtraction is the given $50$. Union size $170$ would also make "neither" equal $30$, disagreeing with the four-region split.

Subtracting $200-(120+90)$ and then patched would have used the overflow $10$ instead of the measured $50$. That is the fork: $200-(120+90)$ belongs to the recovered isolation, $50$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

**1.** The overflow $210-200=10$ is a floor on the overlap, not a substitute for the measured $50$. Using $10$ as the subtraction would give $200$, which is nonsense: a union cannot be the whole survey plus the headlines.

**2.** Using $40$ as the subtraction (perhaps copying the neither-count, or the B-only count) lands on $170$. That is a named wrong figure: a real recovered region reused as if it were the overlap.

**3.** The four recovered regions $70+50+40+40=200$ rebuild the survey only when the union is $160$. A union of $170$ would force neither to be $30$, which none of the recovered cells equals.

The recovered union is $160$, not $170$.

The named wrong figure $170$ is what you get by subtracting the wrong cell. The recovered overlap is $50$. Subtracting the B-only count $40$, or the neither-count $40$, from $120+90$ lands on $170$. That is a real recovered number used in the wrong place.

The overflow $10$ is another named wrong figure: it is a floor on overlap, not the overlap, and not a legal subtraction from the headlines. The recovered union is $160$, and the four-region total $70+50+40+40=200$ confirms it. A union of $170$ would force neither to be $30$, a cell the recovered split does not contain.

so the statement is False.`,
      `**B.** → True

First the union, recovered as $160$. Neither is survey minus union: $200-160=40$. Using $170$ for the union would report $30$ instead. The four regions $70+50+40+40=200$ confirm this leftover.

The extra arithmetic is that four-region total, which does not repeat $120+90-50$ except to check the leftover. Reporting $50$ for neither would have copied the overlap. Once $50$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered neither-count is $40$.

Neither is the leftover after the recovered union. Survey $200$ minus union $160$ is $40$. That $40$ also appears as B-only, a coincidence of these headlines, not a reason to copy B-only into the neither cell.

Reporting $50$ copied the overlap. The opposite verdict would need a different isolation than $50$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Reporting $30$ used the false union $170$ from the previous letter. That is the fork: $30$ belongs to the recovered isolation, $170$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered neither-count is $40$, matching the four-region rebuild.

The coincidence that B-only is also $40$ is a trap. Neither is survey minus union, recovered as $200-160$. B-only is $|B|$ minus the overlap, recovered as $90-50$. Same number, different cells. Copying one into the other is a region mix-up.

so the statement is True.`,
      `**C.** → False

A-only peels the overlap out of $A$. The overview recovered $|A\\setminus B|=120-50=70$, not $90$. The $90$ would be right only if the products shared nobody. Using $90$ for A-only would invent ten phantom customers and fail to rebuild the union $160$.

Reporting $120$ would have kept the "both" customers in the "only" pile. Keeping $120$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Reporting $90$ copied $|B|$ onto the A-only cell. So the letter reads the claim against $90$; $|B|$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $90$ stays in the write-up.

The recovered A-only cell is $70$.

Only-A is $A$ after deleting the overlap: $120-50=70$. The claimed $90$ is $|B|$, a neighbouring headline parked on the wrong cell. Using $90$ would make A-only plus both plus B-only equal $90+50+40=180$, already overshooting the recovered union $160$ and inventing twenty customers.

Reporting $120$ forgot to peel the $50$. The recovered comparison therefore keeps $120$ and does not substitute $50$. "Only" means the private cell, not the headline.

The claimed $90$ would be A-only only if $|A\\cap B|=30$, and the stem measured $50$. Using the Product-B headline as an A-only count is a labelled swap. The recovered A-only cell is $70$.

so the statement is False.`,
      `**D.** → True

The $50$ who like both already sit inside the $120$ who like $A$. That is all $A\\cap B\\subseteq A$ asks, and it holds for any pair of sets, whatever the numbers. Intersection is always a subset of each factor; the survey figures are not needed for this one.

Thinking "we need the counts to check inclusion" would have been doing a size comparison. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Inclusion here is membership, not size. The recovered overlap is one of the four regions inside $A$'s $120$.

Inclusion $A\\cap B\\subseteq A$ does not compare $50$ with $120$. It asks whether every dual-liker is already among the Product-A likers. They are, by the meaning of intersection. The survey could have been $20$ people or $2000$; the inclusion would still hold.

Checking $50\\le 120$ and calling that the inclusion mixed size with membership. That is why $50\\le 120$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Size comparison is true here and is not the claim. The recovered overlap sits inside $A$'s $120$ as one of the four regions.

so the statement is True.`,
      `**E.** → False

$120+90=210$ exceeds $200$ by $10$, which is only a floor on the overlap, not an exact value. Any overlap from $10$ up to $\\min(120,90)=90$ could fit the headlines, and the survey already reports $50$. "Exactly $10$" confuses a lower bound with a measurement,

$120+90=210$ exceeds $200$ by $10$, which is only a floor on the overlap, not an exact value. Any overlap from $10$ up to $\\min(120,90)=90$ could fit the headlines, and the survey already reports $50$. "Exactly $10$" confuses a lower bound with a measurement.

**1.** The overflow $210-200=10$ says the overlap is at least $10$. It does not say the overlap is $10$.

**2.** The measured overlap is $50$, which sits between $10$ and $90$, so it is consistent with the headlines and is not $10$.

**3.** Treating the overflow as a unique solution would have ignored the given $50$. Once $50$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. What would make $10$ exact? If we had only the headlines and the survey size, with no measured overlap, $10$ would still be a floor, not a unique value, unless one group filled the whole survey.

The recovered overlap is $50$, not $10$, so the claimed uniqueness fails.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 7,
    solution_overview: `**Part 1: Setup.**

Two customer groups overlap, so the cleanest way to answer everything at once is to split the 200 people into the **four regions** of a two-set picture and check that the parts add back up. The key observation is that the 50 customers who like both products were already counted inside the 120 and again inside the 90.

**Part 2: Relatives.**

Counting them once instead of twice is the **inclusion-exclusion rule**:

$$|A\\cup B|=|A|+|B|-|A\\cap B|=120+90-50=160.$$

Subtracting the overlap from each group splits the survey like this:

| Region | Meaning | Count |
| --- | --- | --- |
| A only | likes A, not B | $120-50=70$ |
| Both | likes A and B | $50$ |
| B only | likes B, not A | $90-50=40$ |
| Neither | likes no product | $200-160=40$ |

The four regions total $70+50+40+40=200$, the whole survey, which confirms the arithmetic.

**Part 3: Solve.**

A warning about the headline totals: $120+90=210$ exceeds the 200 people surveyed by 10. That excess proves the overlap is **at least** 10; it does not measure the overlap, which the problem itself fixes at 50.`,
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

Putting $A$ and $B$ together keeps $1,2,3,4$ from $A$ and the newcomers $5,6$ from $B$. The shared $3,4$ are not second copies. The overview recovered $A\\cup B=\\{1,2,3,4,5,6\\}$. Stopping at $4$ would throw $5$ and $6$ away.

Reporting $\\{1,2,3,4\\}$ would have copied $A$ instead of the union. So the letter reads the claim against $\\{1,2,3,4\\}$; $A$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $\\{1,2,3,4\\}$ stays in the write-up. $C$'s $7,8,9$ do not enter this letter; the claim named $A\\cup B$ only. Padding with $7$ would import $C$, a third list the union never asked for.

Shared members appear once, not twice and not zero times. Writing six copies of $3$ and $4$ misunderstood that slogan. The recovered comparison therefore keeps $3$ and does not substitute $4$. The recovered combined list is $1$ through $6$, each written once.

Reporting $\\{1,2,3,4,5,6,7,8,9\\}$ ran a triple union $A\\cup B\\cup C$. Working from the isolated values, $\\{1,2,3,4,5,6,7,8,9\\}$ is the figure that is checked, not the detour that produced $A\\cup B\\cup C$. That contrast is the reason the verdict goes the way it does. This letter asked only for $A\\cup B$. The recovered six-element roster is the two-list combination, $C$ unused.

The recovered $A\\cup B$ is that six-element list and nothing from $C$.

Stopping at $A$, or importing $C$, would have been a different recovered object.

so the statement is True.`,
      `**B.** → True

Shared numbers are $3$ and $4$ only. $1,2$ miss $B$, and $5,6$ miss $A$. The overview recovered $A\\cap B=\\{3,4\\}$. Intersection is that overlap, not the combined six-number list. A union-minded scan would report six instead of two.

Including $5$ would have padded from $B$ because $5$ sits next to $4$. After isolating the unknown, the check is against $5$. The figure $4$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $5$ stays in the write-up. Nearness is not membership in $A$. $5\\notin A$. Mixing the recovered union with the recovered overlap is how that extra $5$ gets imported.

Two four-element lists that share a pair is the expected middle. Padding the middle to three is a failed roster. The recovered shared pair stays $\\{3,4\\}$.

The recovered union $\\{1,2,3,4,5,6\\}$ is the neighbouring letter. This letter is the stricter scan. $3$ and $4$ sit in both lists; nothing else does. That pair is the whole overlap.

The recovered overlap is the pair $\\{3,4\\}$, not a three-element pad and not the union.

Padding with $5$ is a failed roster of that pair.

so the statement is True.`,
      `**C.** → True

Difference $A\\setminus B$ deletes a member of $A$ only when it also sits in $B$. Deleting the shared pair $3,4$ leaves $A\\setminus B=\\{1,2\\}$. Dropping $2$ because it sits next to $3$ would be treating nearness as membership.

Reporting $\\{1,2,3,4\\}$ would have forgotten to delete the overlap. Keeping $\\{1,2,3,4\\}$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered $A$-only cell is $\\{1,2\\}$. $1$ and $2$ miss $B$, so they stay. $3$ and $4$ sit in $B$, so they leave.

The opposite leftover $B\\setminus A=\\{5,6\\}$ is a different set, which is the next letter. This letter is $A$ minus $B$, not $B$ minus $A$. Those two private cells are opposite sides of the overlap.

A nearness trim that dropped $2$ would be the same off-by-one as padding an intersection with $5$. Membership against $B$ is a look-up on $\\{3,4,5,6\\}$, and $2$ is not written there, so $2$ stays in $A\\setminus B$.

The recovered difference is the $A$-only cell $\\{1,2\\}$, with $2$ kept because $2\\notin B$.

so the statement is True.`,
      `**D.** → False

The overview recovered $B\\setminus A=\\{5,6\\}$ and $A\\setminus B=\\{1,2\\}$. The two leftovers share nothing, so they are not equal. Difference is not commutative: the leftover lives inside the set named on the left.

**1.** Witness $1\\in A\\setminus B$ and $1\\notin B\\setminus A$. One member kills equality. Size matching (both $2$) is not set equality. Equal size is a coincidence of these lists, not a law.

**2.** $A\\setminus B$ lives inside $A$ and can never pick up $5$ or $6$. $B\\setminus A$ lives inside $B$ and can never pick up $1$ or $2$. Thinking "deleting the overlap from each side leaves matching remainders" treated difference as a symmetric operation. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

**3.** What would make the leftovers equal? $A=B$, so that the private cells match. Empty overlap does not help: then each difference would equal the whole set, and $A$ and $B$ are still unequal.

Confusing "no overlap" with "equal leftovers" mixed disjointness with commutativity. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Disjointness would make $A\\setminus B=A$ and $B\\setminus A=B$, two still-unequal wholes. The given lists are not even disjoint: they share $\\{3,4\\}$, and the private cells on either side of that overlap are $\\{1,2\\}$ and $\\{5,6\\}$.

The recovered leftovers are opposite private cells, so the claimed equality fails.

The claimed equality would identify two disjoint two-element lists. Sets equal only when they have the same members. $1$ sits in the first leftover and misses the second, so the recovered private cells cannot be the same set. Difference names a left-hand host; swapping the host swaps the leftover.

Naming the leftovers as equal is a false figure: two real recovered sets written as if they were one.

so the statement is False.`,
      `**E.** → True

Scan $A$ against $C$: the overview recovered $A\\cap C=\\emptyset$. None of $7,8,9$ appears in $\\{1,2,3,4\\}$. Disjointness is that empty overlap. A single shared number such as $4\\in C$ would kill it.

Thinking $4$ is "close to $7$" imported an interval reading. After isolating the unknown, the check is against $4$. The figure $7$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $4$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. These are finite lists, not intervals. Visual distance on the number line is not the membership test, even when it happens to match.

Disjointness is not automatic for every set that "looks smaller." It is a scan of the two written rosters. If $C$ had listed $4$, disjointness would fail at once. Against the given $C=\\{7,8,9\\}$, nothing is shared. $B$ shares $\\{3,4\\}$ with $A$ and is not disjoint from $A$; $C$ is the list that is.

$B$ is the list that overlaps $A$. $C$ is the list that does not. Scanning the wrong neighbour, $B$ instead of $C$, would report a nonempty intersection $\\{3,4\\}$ and wrongly deny disjointness. The recovered empty overlap is $A$ against $C$, not $A$ against $B$.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `**Part 1: Setup.**

Everything here is settled by reading the three lists side by side: $A=\\{1,2,3,4\\}$, $B=\\{3,4,5,6\\}$, $C=\\{7,8,9\\}$. To settle each claim, compare those lists: shared members for intersection, the combined list for union, leftovers after deleting the shared part for each difference, and an empty overlap for disjointness. Only $3$ and $4$ are written in both A and B, and C shares nothing with A at all.

**Part 2: Relatives.**

From that single comparison every operation follows. $A\\cap B=\\{3,4\\}$, the shared part (**intersection**). $A\\cup B=\\{1,2,3,4,5,6\\}$, everything from either list, repeats written once (**union**). $A\\setminus B=\\{1,2\\}$, A after deleting the shared part (**difference**).

**Part 3: Solve.**

$B\\setminus A=\\{5,6\\}$, B after deleting the same shared part. $A\\cap C=\\emptyset$, nothing in common, which is exactly what **disjoint** means. Notice that the two differences point in opposite directions: subtracting sets, like subtracting numbers, is not reversible.`,
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

A union must contain every member of each input. The overview already assembled $A\\cup B=\\{10,20,30,40,50,60\\}$ by keeping $A$'s five multiples and the newcomer $60$ from $B$. The overlap $30,40,50$ is not written twice.

The claimed roster matches that recovered list. Union is the combined list, not the overlap.

The trap is to drop $60$ because it is the only newcomer, or to write $30,40,50$ twice as if copies counted. Sets do not keep copies.

The recovered union is $\\{10,20,30,40,50,60\\}$.

If the claim had stopped at $50$, it would have dropped the one newcomer that makes the union larger than $A$. The recovered list includes $60$ once..

The recovered union is larger than $A$ by exactly one newcomer, $60$. Dropping that newcomer would reprint $A$ under a union heading. The claimed roster keeps it..

Union is the combined list, written once. The recovered six-element roster already includes every multiple of ten that appears in $A$ or in $B$.

so the statement is True.`,
      `**B.** → True

Intersection keeps only the numbers that clear both lists. The overview already scanned $A$ against $B$ and left $\\{30,40,50\\}$. This letter reads that overlap, not a new scan.

The numbers $10$ and $20$ miss $B$, and $60$ misses $A$. Only the three shared multiples survive.

The trap is to run a union and keep $10,20,60$ as well, or to drop $30$ as a boundary. Intersection has no licence to drop a shared member.

The recovered intersection is $\\{30,40,50\\}$.

If the claim had named $\\{30,40,50,60\\}$, it would have kept a $60$ that misses $A$. Intersection has no licence for that..

Three shared multiples of ten is the whole overlap. $10$ and $20$ miss $B$; $60$ misses $A$. The recovered intersection does not borrow from either leftover..

Intersection is the overlap cell only. The recovered three shared multiples are $30,40,50$, and that is the whole of $A\\cap B$.

so the statement is True.`,
      `**C.** → True

Difference $A\\setminus B$ deletes a member of $A$ only when that member also sits in $B$. The overview already placed $10$ and $20$ in the $A$-only cell, so $A\\setminus B=\\{10,20\\}$.

Shared $30,40,50$ leave. Private $10,20$ stay. That is the claimed leftover.

The trap is to keep $30$ because it started in $A$, or to copy $B\\setminus A=\\{60\\}$ by reversing the difference.

The recovered difference is $\\{10,20\\}$.

If the claim had named $\\{10,20,30\\}$, it would have kept a shared $30$ that difference deletes..

Difference keeps the $A$-only cell. The recovered cell is $10$ and $20$, not the shared $30,40,50$ and not $B$'s private $60$..

The $A$-only cell is two numbers, not three. Shared $30$ leaves because it sits in $B$. The recovered leftover $\\{10,20\\}$ is that cell after the overlap is removed. Keeping $30$ would reprint part of the intersection under a difference heading.

so the statement is True.`,
      `**D.** → False

The opposite leftover is the recovered $B\\setminus A=\\{60\\}$, while $A\\setminus B=\\{10,20\\}$. Already the sizes disagree ($1$ versus $2$), and $10$ sits in the first leftover but not the second.

**1.** Difference is not commutative. $X\\setminus Y$ lives in $X$, while $Y\\setminus X$ lives in $Y$. Unless the two sets are equal, the leftovers are different collections.

**2.** Here $A$ has two private multiples of ten and $B$ has one private $60$. Naming those leftovers as equal is a false figure: two recovered sets written as if they were one.

**3.** Checking only that both leftovers are "what remains after removing the overlap" has described the construction, not the members. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The members are $\\{10,20\\}$ and $\\{60\\}$.

What would make the claim true? The private cells would have to match, which forces $A=B$. The given lists are not equal.

The two recovered leftovers differ.

The leftover $\\{10,20\\}$ lives inside $A$. The leftover $\\{60\\}$ lives inside $B$. Those two private cells share no multiple of ten. Equality would be a coincidence of private cells, not a law. Checking that both leftovers are nonempty and stopping there has not compared members. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. One witness False0$ already kills equality. What would make the leftovers match? $A$ and $B$ would have to be the same list. They are not: $A$ has False0,20$ that $B$ misses, and $B$ has $60$ that $A$ misses. Difference is one of the first operations that fails to commute, and this pair of lists is a clean picture of that failure. The recovered $A\\setminus B$ and $B\\setminus A$ are different sets with different sizes..

A student who writes $A\\setminus B=B\\setminus A$ as a slogan is importing commutativity from union and intersection. Union and intersection commute. Difference does not. The recovered leftovers $\\{10,20\\}$ and $\\{60\\}$ are the picture of that failure: different sizes, different members, one witness False0$ already enough. What would make them equal? The two lists would have to be the same set. They are not. $A$ owns False0$ and $20$ that $B$ never had, and $B$ owns $60$ that $A$ never had. Checking that both leftovers are 'what remains after the overlap' describes the construction and then stops. The claim asks whether the remaining members match. They do not.

so the statement is False.`,
      `**E.** → True

Disjointness means the intersection is empty. Every member of $A$ is at least $10$, while $C$ stops at $3$, so the overview recovered $A\\cap C=\\emptyset$.

There is no shared multiple of ten among $1,2,3$. Nearness of $10$ to $3$ is not membership.

The trap is to think small integers "might overlap" the low end of $A$. $A$ begins at $10$. $C$ never reaches it.

The recovered overlap is empty.

Disjointness fails as soon as one shared number appears. Here none does. $C$ is three tiny counting numbers; $A$ is five multiples of ten. The recovered empty overlap is that mismatch of ranges, not a vibe..

Ranges that do not meet cannot share a member. $C$ tops out at $3$; $A$ begins at $10$. The recovered empty overlap is that gap, not a guess..

Tiny $C$ and large $A$ miss each other because their ranges miss each other. The recovered empty intersection is disjointness, not a size comparison.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `**Part 1.** The sets.

Let $A=\\{10,20,30,40,50\\}$, $B=\\{30,40,50,60\\}$, and $C=\\{1,2,3\\}$.

**Part 2.** The operations.

Intersection keeps numbers tagged in both $A$ and $B$. Union keeps every tagged number once. Difference $A\\setminus B$ keeps the $A$-only numbers; $B\\setminus A$ keeps the $B$-only numbers. Two sets are disjoint when they share nothing.

**Part 3.** The scans.

Shared numbers are $30,40,50$. $A$-only numbers are $10,20$. $B$-only is $60$. Combined list is $\\{10,20,30,40,50,60\\}$. $A$ and $C$ share nothing.`,
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

Putting $A$ and $B$ together keeps $a,b,c,d$ from $A$ and the newcomer $e$ from $B$. The overview already assembled $A\\cup B=\\{a,b,c,d,e\\}$. The shared $c$ and $d$ are not written twice.

The claimed roster matches. Union is every letter that appears at least once.

The trap is to drop $e$, or to treat $c$ as two copies. Sets keep letters, not copies.

The recovered union is $\\{a,b,c,d,e\\}$.

The shared letters $c,d$ appear once in the recovered union, not twice. Union is a set..

Five distinct letters, each written once, is the recovered union. Shared $c$ and $d$ are not a second copy each..

Five letters in the recovered union are five membership successes: $a,b$ from $A$ only, $c,d$ from both, $e$ from $B$ only. Nothing else appears, and nothing is written twice.

so the statement is True.`,
      `**B.** → True

The letter lists $A=\\{a,b,c,d\\}$ and $B=\\{c,d,e\\}$ share a small overlap cell. Intersection keeps only the letters that appear on both rosters. This claim names that cell as $\\{c,d\\}$.

Part 3 already lined $A$ up against $B$ and recovered $A\\cap B=\\{c,d\\}$. Letters $a$ and $b$ sit in $A$ and miss $B$, so they cannot survive an intersection. Letter $e$ sits in $B$ and misses $A$, so it cannot survive either. Only $c$ and $d$ clear both tests.

The trap is to include $e$ because it sits next to $d$ on $B$'s roster, as if adjacency were membership in $A$. Adjacency is not membership. Another trap is to run a union and keep $a,b,e$ as well, reprinting letter A's five-letter list under an intersection heading. Intersection is the overlap cell only. A third mix-up is to copy $A\\setminus B=\\{a,b\\}$ into this slot; that leftover is $A$'s private letters, the opposite outer cell.

Letter $e$ is the whole of the recovered $B\\setminus A$. It is $B$-only by construction, so it is the one letter of $B$ that intersection with $A$ must drop.

What would have to change for the opposite verdict is a third shared letter. If $e$ had sat in $A$, the intersection would have been $\\{c,d,e\\}$. If $c$ had missed $B$, the overlap would have been the singleton $\\{d\\}$. Against the given lists, the recovered intersection is $\\{c,d\\}$.

The recovered intersection is $\\{c,d\\}$, so the statement is True.`,
      `**C.** → True

$A\\setminus B$ keeps $A$'s private letters. The overview already placed $a$ and $b$ in that cell, so $A\\setminus B=\\{a,b\\}$. Letters $c$ and $d$ sit in $B$, so they leave.

The trap is to keep $c$ because it started in $A$, or to copy $B\\setminus A=\\{e\\}$.

The recovered difference is $\\{a,b\\}$.

Letter $c$ looks like it 'started in $A$,' but it also sits in $B$, so difference deletes it. The recovered private pair is $a,b$ only..

Private to $A$ means $a,b$. Letters $c,d$ sit in $B$, so difference deletes them. The recovered leftover does not keep a letter just because it started in $A$..

Difference asks which letters of $A$ miss $B$. The recovered answer is $a,b$. Letters $c,d$ fail that miss-test because they sit in $B$.

so the statement is True.`,
      `**D.** → False

$B\\setminus A=\\{e\\}$, a singleton, while $A\\setminus B=\\{a,b\\}$. Different sizes already forbid equality, and $a$ sits in one leftover but not the other.

**1.** Difference lives inside the left-hand set. The leftover of $B$ can only be letters of $B$ that miss $A$, here just $e$. The leftover of $A$ is $a,b$.

**2.** Naming $\\{e\\}$ equal to $\\{a,b\\}$ is a false figure. The recovered private cells are different letters and different sizes.

**3.** The trap is the slogan "both are what remains after the overlap," which describes the construction and not the members.

What would make them equal? $A$ and $B$ would need the same private letters, hence $A=B$. They are not equal.

The two recovered leftovers differ.

A singleton $\\{e\\}$ cannot equal a pair $\\{a,b\\}$. The recovered leftovers disagree in size and in letters. The slogan that both are 'what remains after the overlap' names the construction and then stops before reading the members. Reading the members is the whole test. $e$ is not $a$. What would make them equal? $A$ and $B$ would need matching private letters. Here $A$ keeps two letters $B$ never had, and $B$ keeps one letter $A$ never had. That is the standard picture of a non-commutative difference, not a rounding error..

The recovered leftovers are $\\{a,b\\}$ and $\\{e\\}$. A pair is not a singleton. Equality of sets is equality of members, and $a$ is not $e$. The slogan that both leftovers are 'what remains after removing $c,d is true as a description of the method and false as a claim that the results match. What would make them match? $A$ and $B$ would need the same private letters. Here $A$ keeps two letters $B$ never listed, and $B$ keeps $e$ that $A$ never listed. Difference fails to commute on any overlapping pair that is not equal, and these letter lists are a small picture of that.

so the statement is False.`,
      `**E.** → True

$C=\\{x,y\\}$ shares no letter with $A=\\{a,b,c,d\\}$, so the overview recovered $A\\cap C=\\emptyset$. Disjointness is that empty overlap.

The trap is to confuse "different alphabets" as a vibe rather than a membership scan. Here the scan is short: $x$ and $y$ are not among $a,b,c,d$.

If $C$ had contained $c$, disjointness would fail. It does not.

The recovered overlap is empty.

If $C$ had been $\\{c,x\\}$, the overlap with $A$ would have been $\\{c\\}$ and disjointness would fail. The given $C$ is $\\{x,y\\}$..

Letters $x,y$ are not among $a,b,c,d$. One missing shared letter is all disjointness needs, and here both of $Cs letters miss $A$..

Disjointness is empty overlap, not 'looks different.' The recovered $A\\cap C$ is empty because $x$ and $y$ are not letters of $A$. If $C$ had included $c$, the claim would fail.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `**Part 1.** The sets.

Three letter lists $A=\\{a,b,c,d\\}$, $B=\\{c,d,e\\}$, and $C=\\{x,y\\}$.

**Part 2.** The operations.

Shared letters give the intersection. The combined list is the union, each letter once. Leftovers after a difference are the private letters. An empty overlap is disjointness.

**Part 3.** The scans.

Lining $A$ up against $B$: $c$ and $d$ appear in both, $a$ and $b$ only in $A$, and $e$ only in $B$. So $A\\cap B=\\{c,d\\}$, $A\\cup B=\\{a,b,c,d,e\\}$, $A\\setminus B=\\{a,b\\}$, and $B\\setminus A=\\{e\\}$. The third set $C=\\{x,y\\}$ shares no letter with $A$, so $A\\cap C=\\emptyset$.`,
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

Putting $A$ and $B$ together covers $1$ through $8$. The overview already recovered $(A\\cup B)^c=\\{9,10\\}$. Those two numbers sit in neither $A$ nor $B$.

The claimed roster matches. Complement of a union is the neither-region inside $U=\\{1,\\ldots,10\\}$.

The trap is to keep $8$ because it is the high end of $B$, padding the complement with a member of the union.

The recovered complement of the union is $\\{9,10\\}$.

Padding the complement with $8$ would put a member of $B$ outside the union that contains it. The recovered neither-region starts at $9$..

The neither-region inside a ten-element $U$ is $9$ and $10$ only. Number $8$ sits in $B$, so it sits in the union, so it cannot sit in the complement of the union. The recovered list does not pad that closed end..

Complement of a union is outside both. The recovered $\\{9,10\\}$ is that outside. Number $8$ is inside $B$, so it is inside the union.

so the statement is True.`,
      `**B.** → True

De Morgan's first law says $(A\\cup B)^c=A^c\\cap B^c$. The overview already listed $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$. Their intersection is $\\{9,10\\}$, matching the complement of the union.

This letter is that agreement, not a new scan. Numbers $6,7,8$ miss $A$ but sit in $B$, so they fail the intersection of complements.

The trap is to union the complements instead, keeping $1,2,3,6,7,8$ as well.

The two recovered sides agree.

Numbers $6,7,8$ look 'outside $A and a rushed intersection of complements keeps them. They sit in $B$. The recovered double-complement intersection is only $\\{9,10\\}$..

De Morgan's first law is the observation that two recovered lists match: complement of the union, and intersection of the complements. Both are $\\{9,10\\}$. Numbers $6,7,8$ miss $A$ and hit $B$, so they survive $A^c$ and die in the intersection..

Two recovered lists match: $(A\\cup B)^c$ and $A^c\\cap B^c$, both $\\{9,10\\}$. That match is De Morgan, not a new scan of $U$.

so the statement is True.`,
      `**C.** → True

The overlap is $A\\cap B=\\{4,5\\}$. Removing those two from $U$ leaves $\\{1,2,3,6,7,8,9,10\\}$. Joining $A^c$ with $B^c$ produces the same list, so $(A\\cap B)^c=A^c\\cup B^c$.

Escaping an intersection takes only escaping one of the two sets. That is why $1,2,3$ (miss $B$) and $6,7,8$ (miss $A$) both survive.

The trap is to write $A^c\\cap B^c$ on the right-hand side, which is only $\\{9,10\\}$.

The two recovered sides agree.

Swapping union and intersection on the right-hand side shrinks the list to the neither-region. The recovered De Morgan side is the eight-number list, everyone except $\\{4,5\\}$..

The eight-number list is everyone except the overlap $\\{4,5\\}$. That is complement of the intersection, and it is also the union of the complements. The recovered agreement is De Morgan's second law on these lists. Swapping to an intersection of complements would shrink the list to $\\{9,10\\}$ and break the identity..

Escaping the overlap $\\{4,5\\}$ leaves eight numbers. Joining the complements leaves the same eight. The recovered identity is that agreement..

Escaping an intersection is weaker than escaping a union. A letter or number needs only to miss one of the two sets. That is why $1,2,3$ (miss $B$) and $6,7,8$ (miss $A$) both survive, together with $9,10$ (miss both). The recovered eight-number list is that weaker filter. The stricter filter, miss both, is $\\{9,10\\}$, already used in letter A. Swapping the two filters is the standard De Morgan slip, and it would shrink this list by six numbers. What would make the eight-number list fail? If $6$ sat in $A$, it would be in the overlap and would leave the complement. The given $A$ stops at $5$. The identity $(A\\cap B)^c=A^c\\cup B^c$ is the observation that two recovered lists match, not a licence to rescan $U$ from scratch.

so the statement is True.`,
      `**D.** → True

$A^c$ is $U$ minus $A$: drop $1$ through $5$, keep $\\{6,7,8,9,10\\}$. The overview already recorded that list. Complement is a scan of the universe, not of $A$ rewritten backwards.

The trap is to also drop $6,7,8$ because they sit in $B$, writing $A^c\\cap B^c$ by mistake.

The recovered complement of $A$ is $\\{6,7,8,9,10\\}$.

Complement of $A$ still contains $B$-only numbers $6,7,8$. Those miss $A$. That is the definition..

Complement of $A$ still includes $B$-only numbers. Those miss $A$, which is the only test $A^c$ runs. The recovered $\\{6,7,8,9,10\\}$ is that scan of $U$, not a rewrite of $A$ backwards..

Scan $U$ and drop $1$ through $5$. What remains is $\\{6,7,8,9,10\\}$, including the $B$-only numbers that miss $A$. The recovered $A^c$ is that scan. Rewriting $A$ backwards would be a different, illegal operation.

so the statement is True.`,
      `**E.** → True

$A\\cap B=\\{4,5\\}$, so removing those two from $U$ leaves $(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}$. The overview already recorded that list. It keeps $A$-only, $B$-only, and neither.

The trap is to also delete $6,7,8$ as "near the overlap," or to keep $4$ because it starts $B$.

The recovered complement of the intersection matches the claim.

The eight-number list is $A$-only, $B$-only, and neither. It is not $A^c$ alone and not $(A\\cup B)^c$ alone. The recovered complement of the overlap keeps all three of those cells..

Keep $A$-only $1,2,3$, keep $B$-only $6,7,8$, keep neither $9,10$, drop only $4,5$. That is the recovered complement of the overlap. It is not $A^c$ alone and not the neither-region alone..

Everyone except $4$ and $5$ stays. The recovered eight-number list is $A$-only plus $B$-only plus neither. Dropping $6,7,8$ would mix this complement with the neither-region $\\{9,10\\}$. The claim names the eight-number list, and that is the list the overview recovered.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `**Part 1.** The sets.

Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$. A complement $X^c$ is everything in $U$ that $X$ leaves out.

**Part 2.** The operations.

De Morgan's laws say taking complements swaps union and intersection:

$$(A\\cup B)^c=A^c\\cap B^c,\\qquad (A\\cap B)^c=A^c\\cup B^c$$

Escaping a union means escaping both sets at once. Escaping an intersection takes only escaping one of them.

**Part 3.** The scans.

$A\\cup B=\\{1,\\ldots,8\\}$, so $(A\\cup B)^c=\\{9,10\\}$. $A\\cap B=\\{4,5\\}$, so $(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}$. $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$. Then $A^c\\cap B^c=\\{9,10\\}$ and $A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}$.`,
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

Odds union evens reconstructs all of $U$, so $A\\cup B=U$ and the overview recovered $(A\\cup B)^c=\\emptyset$. There is no leftover integer between $1$ and $12$.

The trap is to keep $12$ or $1$ as a "boundary outside." Both sit in $U$ and therefore in the union of odds and evens.

The recovered complement of the union is empty.

A leftover integer would have to be neither odd nor even. Inside this $U$ there is no such integer. The recovered complement of the union is empty for that reason, not because $U$ is empty..

Odds and evens together are all of $U$. Complement of that union has nowhere to live. The recovered empty complement is that coverage, not an empty universe..

Coverage of $U$ by odds and evens leaves no complement. The recovered empty set is $(A\\cup B)^c$, not $U$ itself.

so the statement is True.`,
      `**B.** → True

$A^c$ is the evens and $B^c$ is the odds, so their intersection is empty: nothing is even and odd at once. That matches $(A\\cup B)^c=\\emptyset$, which is De Morgan in this extreme case.

The trap is to think two nonempty complements must overlap. These complements are the two blocks of a partition, so they miss each other on purpose.

The two recovered sides agree.

Partition blocks are complements of each other. Intersecting a block with its complement is empty by construction. De Morgan then matches $(A\\cup B)^c=\\emptyset$..

A partition block intersected with its complement is empty. Here $A^c=B$ and $B^c=A$, so $A^c\\cap B^c=B\\cap A=\\emptyset$, matching $(A\\cup B)^c$. The recovered De Morgan check is that extreme case..

The two complements are the two blocks, so they miss each other. The recovered intersection of complements is empty, matching the empty complement of the union.

so the statement is True.`,
      `**C.** → True

$A\\cap B=\\emptyset$ because no integer is odd and even, so $(A\\cap B)^c=U$. The other side $A^c\\cup B^c$ is evens joined with odds, again $U$. Complementing the empty set relative to $U$ restores $U$ in full.

The trap is to think the complement of an empty overlap is empty. Complementing empty inside $U$ gives $U$, not $\\emptyset$.

The two recovered sides agree.

Complement of empty is the universe. That identity is what this letter is reading. Reporting $\\emptyset$ on both sides would be copying the intersection instead of complementing it. The recovered $(A\\cap B)^c$ is all twelve numbers..

Complement of the empty overlap is the whole universe. Reporting $\\emptyset$ on the right-hand side would copy the intersection instead of complementing it. The recovered $(A\\cap B)^c$ is all twelve numbers, which is also $A^c\\cup B^c$, evens joined with odds..

Complement of empty is $U$. The recovered right-hand side $A^c\\cup B^c$ is evens joined with odds, also $U$. Both sides are the twelve-element universe.

so the statement is True.`,
      `**D.** → True

Deleting the odds from $U$ leaves the evens, so the overview recovered $A^c=\\{2,4,6,8,10,12\\}$. Complement of a partition block is the other block.

The trap is to drop $2$ as a boundary or to include $1$. Complement of the odds is exactly $B$.

The recovered complement of $A$ is the evens.

The evens are $B$, and they are also $A^c$. Those two names are the same recovered list. Complement of odds is evens inside this $U$..

Delete the odds, keep the evens. The recovered $A^c$ is $B$ itself. Complement of a partition block is the other block. Including $1$ would keep an odd; dropping $2$ would lose an even..

Odds deleted from $U$ are the evens. The recovered $A^c$ is $\\{2,4,6,8,10,12\\}$, which is $B$. Dropping $2$ would punch a hole in that block. Including $1$ would keep an odd that $A$ already claimed.

so the statement is True.`,
      `**E.** → True

Removing nothing from $U$ leaves $U$, so $(A\\cap B)^c=U$. The claimed list is that full $\\{1,\\ldots,12\\}$. Complementing $\\emptyset$ relative to a universe always gives the universe back.

The trap is to report $\\emptyset$ again, copying the intersection instead of complementing it. Empty overlap is not empty complement of the overlap.

The recovered complement of the intersection is all of $U$.

This is the extreme De Morgan case: complement of nothing is everything. The claimed roster is $U$ itself. A student who writes $\\emptyset$ has answered $A\\cap B$, not $(A\\cap B)^c$. The recovered scan removes nothing from $\\{1,\\ldots,12\\}$ because there is nothing in the overlap to remove. Every integer in $U$ is odd or even, hence outside the empty intersection. That is why the complement is the full twelve-element list, not a hole..

This identity is the extreme complement: remove nothing, keep $U$. The claimed roster is $\\{1,\\ldots,12\\}$. A student who writes $\\emptyset$ has answered the intersection, not its complement. Because $A$ and $B$ partition $U$, the overlap is empty, so complementing it restores every integer from $1$ to $12$. That is why the recovered list is the full universe, not a hole and not the evens alone. What would make the complement empty? The overlap would have to be $U$, which would need every integer to be both odd and even. None is..

Because $A$ and $B$ partition $U$, their intersection is empty, so complementing that intersection cannot delete anyone. Every integer from $1$ to $12$ is odd or even, hence outside the empty overlap, hence in the recovered $(A\\cap B)^c$. That list is $U$ itself, twelve numbers, which is also $A^c\\cup B^c$ by De Morgan. Reporting $\\emptyset$ copies $A\\cap B$ into a complement slot. Reporting the evens copies $A^c$ into a complement-of-intersection slot. Neither is this claim. The claim is the full universe, and that is what the overview recovered. What would make the complement empty? The overlap would have to be all of $U$, which would require every integer to be both odd and even.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 12,
    solution_overview: `**Part 1.** The sets.

This pair of sets is special: $A$ holds every odd number of $U=\\{1,2,\\ldots,12\\}$ and $B$ holds every even one, so between them they **partition** the universe, no overlap, no gaps.

**Part 2.** The operations.

No whole number is odd and even at once, so $A\\cap B=\\emptyset$. Every whole number is one or the other, so $A\\cup B=U$. Complement of a partition block is the other block. Complementing the empty set relative to $U$ restores $U$. De Morgan's laws come through these extreme cases untouched.

**Part 3.** The scans.

Complementing $A$ removes the odds and leaves the evens, so $A^c=B=\\{2,4,6,8,10,12\\}$, and symmetrically $B^c=A$. Complementing the union leaves nothing at all, $(A\\cup B)^c=U^c=\\emptyset$, while complementing the empty intersection removes nothing, so $(A\\cap B)^c=\\emptyset^c=U$. Then $A^c\\cap B^c=B\\cap A=\\emptyset$ and $A^c\\cup B^c=B\\cup A=U$.`,
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

Putting $A$ and $B$ together covers $\\{p,q,r,s\\}$. Of the six letters in $U$ only $t$ and $u$ are left out. The overview already recovered $(A\\cup B)^c=\\{t,u\\}$.

The trap is to keep $s$ because it sits at the end of $B$, or to drop $t$. Letter $s$ sits in $B$, so it sits in the union, so it cannot sit in the complement.

The recovered outside of the union is $\\{t,u\\}$.

Letter $s$ sits in $B$, so it sits in the union, so it cannot sit in $(A\\cup B)^c$. The recovered outside is $t,u$ only..

Of six letters, four sit in the union $p,q,r,s$. The recovered outside is the other two, $t$ and $u$. Letter $s$ is not outside: it sits in $B$..

Four letters in, two letters out. The recovered complement of the union is $\\{t,u\\}$. Letter $s$ is in, because $s\\in B$.

so the statement is True.`,
      `**B.** → True

$A^c=\\{s,t,u\\}$ and $B^c=\\{p,q,t,u\\}$ share $t$ and $u$, matching $(A\\cup B)^c$. Letter $s$ fails the intersection because $s\\in B$. De Morgan's first law is that agreement.

The trap is to keep $s$ in the intersection of complements. $s$ misses $A$ and hits $B$, so one filter fails.

The two recovered sides agree.

Letter $s$ is the witness that $A^c$ is not $A^c\\cap B^c$. It misses $A$ and hits $B$..

Intersection of complements keeps letters that miss both $A$ and $B$. The recovered pair is $t,u$. Letter $s$ misses $A$ and hits $B$, so it fails the second filter..

Miss both sets, not just one. The recovered intersection of complements is $t,u$. Letter $s$ misses only $A$, so it fails. Letter $p$ misses only $B$, so it fails too. De Morgan matches this pair to $(A\\cup B)^c$.

so the statement is True.`,
      `**C.** → True

$A\\cap B=\\{r\\}$, so $(A\\cap B)^c$ is every letter of $U$ except $r$. Joining the two complements produces the same five letters $\\{p,q,s,t,u\\}$.

The trap is to also drop $s$ or $p$. Letter $p$ misses $B$ and letter $s$ misses $A$; each escapes the intersection by escaping one set.

The two recovered sides agree.

Five letters remain after deleting $r$. That is the recovered complement of a singleton overlap inside a six-letter $U$..

Delete the one shared letter $r$ and five letters remain. Joining $A^c$ with $B^c$ produces the same five. The recovered De Morgan side is that five-letter list, not the neither-pair $\\{t,u\\}$..

Five letters remain after deleting $r$. That recovered list is $(A\\cap B)^c$ and also $A^c\\cup B^c$. A two-letter neither-region would be the other De Morgan identity, the one for unions.

so the statement is True.`,
      `**D.** → True

Drop $p,q,r$ from $U$ and $\\{s,t,u\\}$ remain. The overview already recovered $A^c=\\{s,t,u\\}$. Complement does not also drop $s$ just because $s\\in B$; that would be $A^c\\cap B^c$.

The trap is to write $\\{t,u\\}$, the neither-region, in place of $A^c$.

The recovered complement of $A$ is $\\{s,t,u\\}$.

Keeping $s$ in $A^c$ is correct. Deleting $s$ would be a second filter the claim did not ask for..

Complement of $A$ keeps $s$, because $s$ misses $A$. Deleting $s$ would run a second filter the claim did not ask for. The recovered $A^c$ is $\\{s,t,u\\}$..

Three letters remain after deleting $p,q,r$. The recovered $A^c$ is $\\{s,t,u\\}$, and $s$ stays because the test is 'miss $A$,' not 'miss $A$ and miss $B$.'

so the statement is True.`,
      `**E.** → True

Remove the single shared letter $r$ from $U$ and $\\{p,q,s,t,u\\}$ stay. Letters $p$ and $q$ stay because they miss $B$; $s$ stays because it misses $A$.

The trap is to drop $s$ as well, treating complement of the intersection as complement of the union.

The recovered complement of the intersection matches the claim.

Letter $s$ is $B$-only, so it misses $A$, so it survives $(A\\cap B)^c$. Dropping it would mix this complement with the neither-region $\\{t,u\\}$..

Letter $s$ is $B$-only, so it misses $A$, so it survives complement of the intersection. Dropping $s$ would shrink the recovered five-letter list to the neither-region. The claim names the five-letter list..

The five-letter recovered list keeps $p,q$ ($A$-only), $s$ ($B$-only), and $t,u$ (neither). Dropping $s$ would delete a letter that misses $A$ and therefore survives complement of the intersection. The claim keeps $s$..

Complement of a singleton overlap inside a six-letter $U$ must have five letters. The recovered list $\\{p,q,s,t,u\\}$ is those five: $A$-only, $B$-only, and neither. Letter $r$ is the one deletion. Letter $s$ looks dangerous because it sits in $B$, but missing $A$ is enough to escape an intersection. Dropping $s$ would mix this complement with $(A\\cup B)^c=\\{t,u\\}$, the stricter outside-both filter. The two De Morgan identities are different recovered lists, two letters versus five. This claim names the five. What would make a two-letter list honest here? The claim would have to name $(A\\cup B)^c$, not $(A\\cap B)^c$..

A two-letter reprint would be the neither-region. This claim is the five-letter complement of a singleton overlap. Those two recovered lists are the two De Morgan sides, and they must not be swapped. Letter r is the only deletion; letter s stays because missing A is enough.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 13,
    solution_overview: `**Part 1.** The sets.

Six letters make up the universe $U=\\{p,q,r,s,t,u\\}$, and $A=\\{p,q,r\\}$ overlaps $B=\\{r,s\\}$ in the single letter $r$.

**Part 2.** The operations.

A letter is outside a union when it is outside both sets, and outside an intersection when it is outside at least one of them. Those are De Morgan's laws in plain words.

**Part 3.** The scans.

$$A\\cup B=\\{p,q,r,s\\},\\qquad A\\cap B=\\{r\\},\\qquad A^c=\\{s,t,u\\},\\qquad B^c=\\{p,q,t,u\\}.$$

Complementing the union leaves the two letters that no set reached, $(A\\cup B)^c=\\{t,u\\}$. Complementing the intersection removes only $r$, giving $(A\\cap B)^c=\\{p,q,s,t,u\\}$. Then $A^c\\cap B^c=\\{t,u\\}$ and $A^c\\cup B^c=\\{p,q,s,t,u\\}$.`,
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

Two choices for the first slot and three for the second give $|A\\times B|=2\\cdot 3=6$. The overview already counted six cells in the grid. Product size is the number of cells, not the number of distinct symbols used.

The trap is to add $2+3=5$, or to count the five symbols $1,2,x,y,z$ instead of the pairs.

The recovered product has six pairs.

Five symbols are not six pairs. The recovered grid has six cells because each of two numbers is paired with each of three letters..

Two rows and three columns are six cells. Adding $2+3$ counts the factor sizes, not the pairs. The recovered grid has six ordered pairs..

Product size counts cells, not symbols. Two numbers and three letters make six ordered pairs in the recovered grid. Adding the factor sizes would answer a different question.

so the statement is True.`,
      `**B.** → True

$(1,x)$ has first slot from $A$ and second from $B$, so it sits in the recovered grid, first row, first column. Both membership tests succeed.

The trap is to reverse the pair and test $(x,1)$ instead. Ordered pairs treat those as different objects.

The recovered grid contains $(1,x)$.

The true pair is number first. That is the $A\\times B$ convention in this stem..

Both slots match: $1\\in A$ and $x\\in B$. The recovered first cell is that pair. Reversing it is a different object..

The pair $(1,x)$ is the first cell of the recovered grid. First slot $1\\in A$, second slot $x\\in B$. Both tests succeed. The reversed pair is a different cell in a different grid.

so the statement is True.`,
      `**C.** → False

$(x,1)$ has a letter in the first slot, and $x\\notin A$. Ordered pairs treat $(1,x)$ and $(x,1)$ as different objects; the second lives in $B\\times A$, not in $A\\times B$.

**1.** Membership in $A\\times B$ is a two-slot test: first from $A$, second from $B$. The first slot already fails.

**2.** The false figure is the reversed pair, copied from the true pair in letter B. Reversing an ordered pair is not a set identity.

**3.** The recovered $B\\times A$ grid does contain $(x,1)$. That is a different product. Equal size does not move a pair from one product into the other.

What would make $(x,1)\\in A\\times B$? $x$ would have to sit in $A$ and $1$ in $B$. The given $A$ is $\\{1,2\\}$.

The recovered $A\\times B$ has number-first pairs only.

Reversing an ordered pair is a different object. The recovered $A\\times B$ grid is number-first: $(1,x),(1,y),(1,z),(2,x),(2,y),(2,z)$. None of those is $(x,1)$. The pair $(x,1)$ sits in the turned grid $B\\times A$, first slot a letter, second slot a number. Treating pairs as unordered two-element sets would accept both $(1,x)$ and $(x,1)$ and then wonder why the products are distinguished at all. After isolating the unknown, the check is against $(1,x)$. The figure $(x,1)$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $(1,x)$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. They are distinguished because the first coordinate is a role, not a bag. What would make $(x,1)\\in A\\times B$? $A$ would have to contain $x$. The given $A$ is $\\{1,2\\}$. Cardinality $6=6$ is a separate true claim and does not move this pair..

The recovered $A\\times B$ grid is number-first. The pair $(x,1)$ is letter-first, so it fails the first-slot test. It does sit in $B\\times A$. Treating ordered pairs as unordered two-element sets would accept both $(1,x)$ and $(x,1)$ and then erase the distinction the product was built to keep. The first coordinate is a role. What would make $(x,1)\\in A\\times B$? $A$ would have to contain the letter $x$. The given $A$ is $\\{1,2\\}$. The matching count $6=6$ is a separate true claim and does not move this pair across products.

so the statement is False.`,
      `**D.** → False

Every pair in $A\\times B$ reads (number, letter); every pair in $B\\times A$ reads (letter, number). In particular $(1,x)$ sits in the first product and cannot sit in the second, because $1\\notin B$.

**1.** Set equality needs identical members, not identical counts. The overview already noted the two products have the same size but no member in common.

**2.** The false figure is "six equals six, so the sets match." Cardinality is not identity.

**3.** A witness against equality is enough: $(1,x)\\in A\\times B$ and $(1,x)\\notin B\\times A$.

What would make $A\\times B=B\\times A$? In general $A=B$, up to trivial cases. Here $A$ is numbers and $B$ is letters.

The recovered products share no pair.

Same count, different members: that slogan is the whole point of turning the grid. The recovered $A\\times B$ and $B\\times A$ are disjoint six-element sets. Naming them equal is a false figure built from the product rule commuting as a count. Counts commute. Ordered pairs do not. A single witness $(1,x)$ sits in one product and misses the other because False$ is not a letter of $B$. Set equality cannot survive one missing witness. What would make the products equal? $A$ and $B$ would need to be the same set, up to trivial empty cases. Here one factor is numbers and the other is letters..

Same size is letter E. This letter asks whether the member lists match. They do not: every recovered $A\\times B$ pair is number-first, every recovered $B\\times A$ pair is letter-first, and $(1,x)$ is a witness in one list missing from the other. Naming the products equal is a false figure built from the product rule commuting as arithmetic. Arithmetic commutes. Ordered pairs do not. What would make $A\\times B=B\\times A$? The two factors would need to be the same set. Here one is numbers and one is letters.

so the statement is False.`,
      `**E.** → True

Size ignores order: $2\\cdot 3=6$ and $3\\cdot 2=6$. Both products hold six pairs even though the pairs themselves differ. The overview already counted six cells on each side of the turned grid.

The trap is to think unequal members force unequal sizes. Different lists can have the same length.

The recovered counts agree.

The product rule $n\\cdot m=m\\cdot n$ is why this letter is true while the previous letter is false. Size is not identity..

The product rule $2\\cdot 3=3\\cdot 2$ is why the counts agree. The turned grid still has six cells. Different names on those cells are letter D's problem, not this letter's..

Counts commute: $2\\cdot 3=3\\cdot 2$. The recovered $B\\times A$ still has six pairs. Those pairs are letter-first, so they are not the $A\\times B$ pairs, but there are still six of them. Size equality is this letter. Member equality was the previous letter, and it failed.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 14,
    solution_overview: `**Part 1.** The sets.

The task gives $A=\\{1,2\\}$ and $B=\\{x,y,z\\}$. Every claim here is about the ordered pairs formed from those two sets.

**Part 2.** The operations.

An **ordered pair** records not just which two objects were chosen but which one plays which role. The **Cartesian product** $A\\times B$ is the set of all pairs whose first entry comes from $A$ and whose second comes from $B$. Size is the product rule $|A|\\cdot|B|$. Turning the grid on its side produces $B\\times A$, same count, different members.

**Part 3.** The scans.

| $A\\times B$ | $x$ | $y$ | $z$ |
| --- | --- | --- | --- |
| **1** | $(1,x)$ | $(1,y)$ | $(1,z)$ |
| **2** | $(2,x)$ | $(2,y)$ | $(2,z)$ |

Two rows times three columns is six cells. $B\\times A$ has six completely different pairs such as $(x,1)$. The two products have the same size but no member in common.`,
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

Cartesian product size counts ordered pairs, not the symbols used to write them. Here $A$ has three letters $m,n,p$ and $B$ has two numbers $1,2$, and each letter is paired with each number, letter first.

Part 3 already listed those six letter-first pairs and recorded $|A\\times B|=6$. The product rule is that count: three choices for the first slot times two for the second. This letter is reading that recovered size, not testing whether a particular pair belongs.

The tempting false figure adds the factor sizes instead of multiplying:

$$3+2=5$$

or counts the five distinct symbols $m,n,p,1,2$ as if the product were a bag of letters and numbers. Five symbols can make six ordered pairs because each letter is reused across two numbers, and order of slots is part of the object. Another mix-up is to report $2^3=8$ or $3^2=9$, borrowing a power-set count.

What would have to change for the opposite verdict is a different factor size. If $B$ had three numbers, the product would have nine pairs. If $A$ had been a singleton, the product would have two pairs. Against three letters and two numbers, the recovered product has six letter-first pairs.

The recovered product has six pairs, so the statement is True.`,
      `**B.** → True

Membership in a Cartesian product is a two-slot test, not a size check and not a bag of two objects. The pair $(m,1)$ is being asked whether it sits in $A\\times B$, whose convention in this stem is letter first, number second.

Part 3 already listed $(m,1)$ as the first pair of the recovered $A\\times B$ roster. Both slots succeed: $m\\in A$ and $1\\in B$. That is the whole membership test. This letter is not asking how many pairs there are, which was the previous letter, and is not asking whether the reversed pair belongs, which is the next letter.

The trap is to reverse the coordinates and test $(1,m)$ instead. Ordered pairs treat those as different objects: $(1,m)$ puts a number first, and $1\\notin A$, so it fails the $A\\times B$ test even though it sits in $B\\times A$. Another mix-up is to treat $\\{m,1\\}$ as the same as $(m,1)$. A two-element set does not remember order and is not an element of a product of letters with numbers.

What would have to change for the opposite verdict is a failed slot. If $m$ were missing from $A$, or if $1$ were missing from $B$, the pair would be out. The given $A$ is $\\{m,n,p\\}$ and the given $B$ is $\\{1,2\\}$, so both slots of $(m,1)$ are legal.

The recovered $A\\times B$ contains $(m,1)$, so the statement is True.`,
      `**C.** → False

$(1,m)$ puts a number first, and $1\\notin A$. The first slot already fails, so the pair is out of $A\\times B$ (it does sit in $B\\times A$).

**1.** The recovered roster of $A\\times B$ is six letter-first pairs. None begins with $1$.

**2.** The false figure is the reverse of the true pair $(m,1)$. Order is the whole point of an ordered pair.

**3.** Equal size of $A\\times B$ and $B\\times A$ does not move $(1,m)$ into $A\\times B$.

What would make $(1,m)\\in A\\times B$? $1$ would have to sit in $A$. The given $A$ is three letters.

The recovered $A\\times B$ has no number-first pair.

The recovered roster of $A\\times B$ begins $(m,1),(m,2),\\ldots$ and never $(1,m)$. The reversed pair is a member of $B\\times A$ only. Treating ordered pairs as unordered would collapse the two products and make this letter accidentally true. They are not unordered. The first coordinate is a role. What would make $(1,m)\\in A\\times B$? The letter set $A$ would have to contain the number False$. It contains $m,n,p$..

Number-first $(1,m)$ fails the first slot because False\\notin A$. The recovered $A\\times B$ list never begins with a number. That reversed pair lives in $B\\times A$. What would make it legal in $A\\times B$? $A$ would have to contain False$. The given $A$ is $\\{m,n,p\\}$. Equal size of the two products does not relocate the pair. Order is the whole test..

The first slot of $(1,m)$ is the number False$, which is not a letter of $A$. That is the whole failure. The recovered $A\\times B$ list is letter-first throughout. The reversed pair belongs to $B\\times A$, a different product with the same size. What would make $(1,m)$ legal in $A\\times B$? $A$ would have to contain False$. It contains $m,n,p$ only. Treating pairs as unordered would hide the failure; the product does not treat them as unordered.

so the statement is False.`,
      `**D.** → False

$A\\times B$ is letter-first; $B\\times A$ is number-first. Witness: $(m,1)$ is on the first list and missing from the second, because $m\\notin B$. Set equality needs identical members, not identical counts.

The overview already displayed two disjoint six-element lists. Naming them equal is a false figure built from the shared count $6$.

The trap is "same size, same set." Cardinality is not identity.

The recovered products share no pair.

The two recovered lists share no pair. Equal length $6$ is letter E, not this letter. Naming the lists equal is the same false figure as in the number-letter product: commuting the count and commuting the members. Only the count commutes..

Letter-first versus number-first is a complete split of the two recovered lists. They share no pair. The count $6$ agrees and is a different claim. Naming the lists equal copies that count into a set identity it does not support. A witness $(m,1)$ sits in $A\\times B$ and misses $B\\times A$ because $m\\notin B$..

Set equality needs matching members. The recovered lists are letter-first versus number-first, disjoint six-element sets. The shared count $6$ is letter E. This letter is the identity claim, and one witness $(m,1)$ already kills it.

so the statement is False.`,
      `**E.** → True

The product rule is commutative as a count: $3\\cdot 2=6$ and $2\\cdot 3=6$. The counts agree while the member lists share no pair. The overview already recorded both sixes.

The trap is to report unequal sizes because the pairs look different. Different members can still number six.

The recovered counts agree.

Turn the grid and the cell count stays six. The names on the cells all change..

Turn the grid: two rows of three become three rows of two, still six cells. The recovered counts match. The names on the cells all change, which is why set equality fails while size equality holds..

Two times three equals three times two. The recovered cell counts match. Different labels on the cells do not change the count. That is why size equality holds while set equality fails.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 15,
    solution_overview: `**Part 1.** The sets.

Pair every letter of $A=\\{m,n,p\\}$ with every number of $B=\\{1,2\\}$, always keeping the letter first.

**Part 2.** The operations.

The product rule is $|A\\times B|=|A|\\cdot|B|$. A pair belongs to $A\\times B$ only when its first entry comes from $A$ and its second from $B$. Writing the product the other way round gives $B\\times A$: the same count, a different set.

**Part 3.** The scans.

$$A\\times B=\\{(m,1),(m,2),(n,1),(n,2),(p,1),(p,2)\\}.$$

Three letters with two numbers each gives $3\\cdot 2=6$ ordered pairs.

$$B\\times A=\\{(1,m),(1,n),(1,p),(2,m),(2,n),(2,p)\\},$$

six completely different pairs.`,
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

Shared $3,5,7$ leave $A$; $1$ and $9$ stay because they miss $B$. The overview already placed those two in the $A$-only bucket, so $A\\setminus B=\\{1,9\\}$.

The trap is to keep $3$ because it started in $A$, or to drop $9$ as a high end.

The recovered leftover is $\\{1,9\\}$.

Shared $3$ leaves $A$ because it sits in $B$. Difference is not 'started in $A$.'.

The $A$-only bucket is $1$ and $9$. Shared $3,5,7$ leave because they sit in $B$. The recovered leftover is that outer cell, not the overlap..

Private to $A$ means misses $B$. The recovered $A\\setminus B$ is $1$ and $9$. Shared $3$ sits in $B$, so difference deletes it. Keeping $3$ would reprint overlap under a difference heading.

so the statement is True.`,
      `**B.** → True

Difference $B\\setminus A$ lives inside $B$: it keeps $B$'s private numbers and deletes whoever also sits in $A$. On these odd-number lists, that is the opposite leftover from $A\\setminus B$, not a copy of it.

Part 3 already sorted every number into three buckets and placed $11$ and $13$ in the $B$-only cell. The shared triple $3,5,7$ leaves $B$ because those numbers sit in $A$. The private $11$ and $13$ miss $A$, so they stay. The recovered $B\\setminus A=\\{11,13\\}$ is the object the claim names.

The trap is to copy $\\{1,9\\}$, the $A$-only bucket from the previous letter, as if difference were commutative. It is not: the leftover lives inside the set named on the left. Another mix-up is to keep $3$ because it started in $B$, reprinting overlap under a difference heading. A third is to join the outer buckets and write $\\{1,9,11,13\\}$, which is the symmetric difference, a later letter.

What would have to change for the opposite verdict is a different $B$-only cell. If $11$ had sat in $A$, the leftover would have been the singleton $\\{13\\}$. If $A$ and $B$ had been disjoint, $B\\setminus A$ would have equalled $B$. Against the given lists, the recovered opposite leftover is $\\{11,13\\}$.

The recovered $B\\setminus A$ is $\\{11,13\\}$, so the statement is True.`,
      `**C.** → True

Symmetric difference joins the two outer piles. The overview already assembled $A\\triangle B=\\{1,9,11,13\\}$. Each of those four sits in exactly one of the original sets. Including $3$ would be keeping the overlap, which $A\\triangle B$ rejects.

The trap is to write the union, putting $3,5,7$ back.

The recovered symmetric difference is $\\{1,9,11,13\\}$.

Symmetric difference is the outer buckets only. The recovered four-element list has no $3,5,7$..

Join the outer buckets and you get four numbers, each in exactly one set. The recovered symmetric difference has no $3$. Putting $3$ back would be union..

Exactly-one is the two outer buckets joined. The recovered $A\\triangle B$ is $\\{1,9,11,13\\}$. The middle bucket $3,5,7$ is absent on purpose. Putting it back would be union, which is at-least-one rather than exactly-one.

so the statement is True.`,
      `**D.** → True

A number in $A\\setminus B$ is outside $B$; a number in $B\\setminus A$ is inside $B$. Those demands cannot hold together, so the intersection of the leftovers is empty. The overview already noted that the outer buckets can never overlap.

The trap is to intersect $A$ with $B$ and report $\\{3,5,7\\}$, answering a different question.

The recovered intersection of leftovers is empty.

The outer buckets are disjoint by construction: outside $B$ cannot be inside $B$. The recovered emptiness is that clash of demands, not a coincidence of these odd numbers..

Outside $B$ cannot be inside $B$. The two recovered leftovers are disjoint by that clash, not by a coincidence of these particular odds. Intersecting $A$ with $B$ instead would report the middle bucket $\\{3,5,7\\}$, a different question..

The outer buckets cannot overlap: a number cannot miss $B$ and sit in $B$. The recovered empty intersection of leftovers is that impossibility. Reporting $\\{3,5,7\\}$ would be $A\\cap B$, the middle bucket, a different operation.

so the statement is True.`,
      `**E.** → False

Union keeps the middle bucket $\\{3,5,7\\}$; symmetric difference throws it away. The overview already recorded $A\\triangle B=\\{1,9,11,13\\}$ and $A\\cup B=\\{1,3,5,7,9,11,13\\}$.

**1.** The two operations differ by exactly the overlap. Here the overlap is three numbers, so the lists cannot match.

**2.** Naming them equal is a false figure: the recovered union is three members larger.

**3.** The trap is to treat "combine $A$ and $B$" as a single operation. Combine-and-keep-the-middle is union. Combine-and-drop-the-middle is symmetric difference.

What would make $A\\triangle B=A\\cup B$? The middle bucket would have to be empty, i.e. $A$ and $B$ disjoint. They share $3,5,7$.

The recovered lists differ by the overlap.

The recovered union is three members larger than the recovered symmetric difference, and those three members are the overlap $3,5,7$. Naming the two operations equal is a false figure that puts the middle bucket back after the definition just threw it away. Union means at least one. Symmetric difference means exactly one. Those are different English sentences and different recovered lists. What would make them coincide? Empty overlap. The overview filled the middle bucket with three numbers. Coming from What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. the next task, where $A$ and $B$ are disjoint, might copy that coincidence backwards. These lists are not disjoint..

Union means at least one. Symmetric difference means exactly one. The recovered lists differ by the middle bucket $\\{3,5,7\\}$. Naming the operations equal puts that bucket back after the definition removed it. What would make them coincide? Empty overlap. The overview filled the middle bucket with three numbers. Copying the next task, where disjoint lists make the operations agree, would miss that these lists are not disjoint. The recovered union has seven members; the recovered symmetric difference has four.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `**Part 1.** The sets.

The **symmetric difference** $A\\triangle B$ keeps the numbers belonging to exactly one of the two sets, the ones the sets disagree about. $A=\\{1,3,5,7,9\\}$ and $B=\\{3,5,7,11,13\\}$.

**Part 2.** The operations.

Sort every number into one of three buckets: only in $A$, in both, only in $B$. Symmetric difference is the two outer buckets joined. Union takes all three buckets. The outer buckets can never overlap.

**Part 3.** The scans.

| Bucket | Numbers |
| --- | --- |
| Only in A, that is $A\\setminus B$ | $1,\\ 9$ |
| In both, that is $A\\cap B$ | $3,\\ 5,\\ 7$ |
| Only in B, that is $B\\setminus A$ | $11,\\ 13$ |

$$A\\triangle B=\\{1,9\\}\\cup\\{11,13\\}=\\{1,9,11,13\\}.$$

The union takes all three buckets, $A\\cup B=\\{1,3,5,7,9,11,13\\}$, so the two operations differ by exactly the middle bucket.`,
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

$A$ is evens and $B$ is odds, so they share nothing. Subtracting $B$ from $A$ therefore deletes nobody. The overview already recovered $A\\setminus B=A=\\{2,4,6\\}$.

The trap is to report $\\emptyset$, mixing empty overlap with empty difference.

The recovered difference is all of $A$.

Empty overlap empties the middle cell, not the left cell. The recovered $A\\setminus B$ is still the three evens..

No shared member means difference deletes nobody. The recovered $A\\setminus B$ is the three evens, not $\\emptyset$. Empty overlap is the middle cell, not the left cell..

Subtracting a disjoint $B$ from $A$ deletes nobody. The recovered leftover is $A$ itself, the three evens. Reporting $\\emptyset$ copies the empty overlap into the difference slot, the same mix-up as in the partition task.

so the statement is True.`,
      `**B.** → True

The same disjointness the other way: none of $B$'s odds is even, so nothing is deleted. The overview recovered $B\\setminus A=B=\\{1,3,5\\}$.

The trap is to copy $\\{2,4,6\\}$, reversing the difference.

The recovered opposite leftover is all of $B$.

The three odds all miss $A$, so they all stay. The recovered leftover is $B$ itself..

The three odds all miss $A$, so they all stay. The recovered $B\\setminus A$ is $B$ itself. Copying the evens would reverse the difference..

Subtracting a disjoint $A$ from $B$ deletes nobody. The recovered leftover is $B$ itself, the three odds. The two leftovers are the two original sets, still disjoint..

The three odds are $B$, and they all miss the evens, so difference deletes nobody. The recovered leftover is $\\{1,3,5\\}$, not a proper subset of $B$ and not the evens. Copying $\\{2,4,6\\}$ would reverse the difference and answer letter A again. Disjointness makes each leftover equal to the original set on that side. That is the point of this pair of lists: empty middle bucket, full outer buckets.

so the statement is True.`,
      `**C.** → True

With an empty middle bucket, symmetric difference is the two whole sets glued together. The overview already assembled $A\\triangle B=\\{1,2,3,4,5,6\\}$. Each of the six numbers sits in exactly one of $A$ or $B$.

The trap is to drop the evens or the odds, writing one leftover instead of both.

The recovered symmetric difference is the six numbers.

Six numbers, each in exactly one set: that is symmetric difference when the middle bucket is empty. The recovered list is $\\{1,2,3,4,5,6\\}$..

Empty middle bucket means symmetric difference is the two whole sets glued together. The recovered list is the six small integers, each in exactly one of $A$ or $B$. Dropping the evens or the odds would write one leftover instead of both..

Glue the two whole sets together and you get six numbers, each in exactly one set. The recovered symmetric difference is $\\{1,2,3,4,5,6\\}$. That list is also the union, because the middle bucket is empty.

so the statement is True.`,
      `**D.** → True

The leftovers are the two whole sets, evens and odds. No even equals an odd, so their intersection is empty. The overview already recorded disjointness of $A$ and $B$, which is the same emptiness.

The trap is to think two nonempty leftovers must overlap. Nonempty does not mean overlapping.

The recovered intersection of leftovers is empty.

Evens and odds share nothing. Their intersection is empty whether you call them $A$ and $B$ or $A\\setminus B$ and $B\\setminus A$..

Evens versus odds is the recovered disjointness. Their leftovers are the same two sets, still disjoint. Nonempty leftovers need not overlap. These two cannot overlap, because no even equals an odd..

Leftovers equal to $A$ and $B$ remain disjoint, because $A$ and $B$ were disjoint. The recovered intersection of leftovers is empty. Two nonempty sets of opposite parity cannot share a member.

so the statement is True.`,
      `**E.** → True

Usually the union is bigger than the symmetric difference because it also keeps the shared members. Here the shared part is empty, so there is nothing extra for the union to add, and both sides equal $\\{1,2,3,4,5,6\\}$. Disjointness is exactly the situation in which $A\\triangle B=A\\cup B$.

The trap is to copy the previous task, where overlap $3,5,7$ made the two operations differ. These lists have no such middle bucket.

The recovered operations coincide.

This is the special case the previous task warned about. With overlap empty, union has nothing extra to add, so it matches symmetric difference. The recovered common list is $\\{1,2,3,4,5,6\\}$. Copying the previous false verdict, where overlap made the operations differ, would miss the whole point of disjointness. Disjointness is exactly when 'at least one' and 'exactly one' become the same count of members. Here both recovered sides are the six small integers..

This is the special case the previous task named. With nothing in the middle bucket, 'at least one' and 'exactly one' keep the same members. The recovered common list is $\\{1,2,3,4,5,6\\}$. Copying the previous false verdict, where overlap $3,5,7$ made union larger, would ignore the disjointness that is the whole point of these lists. Disjointness is exactly when $A\\triangle B=A\\cup B$. Here both recovered sides are the six numbers..

When overlap is empty, at-least-one and exactly-one keep the same members. The recovered $A\\triangle B$ and $A\\cup B$ are the same six-element list. That coincidence is the definition of disjointness, not a numerical accident. In the previous task the middle bucket was nonempty, so the operations split. Here the middle bucket is empty, so they agree. What would make them split again? Any shared member. These lists have none.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 17,
    solution_overview: `**Part 1.** The sets.

$A=\\{2,4,6\\}$ contains only even numbers and $B=\\{1,3,5\\}$ only odd ones, so no number can belong to both: the sets are **disjoint**, $A\\cap B=\\emptyset$.

**Part 2.** The operations.

Disjointness makes the subtractions do nothing at all. There is no shared member to delete, so $A\\setminus B=A$ and $B\\setminus A=B$. The **symmetric difference**, the members lying in exactly one set, therefore becomes the two whole sets glued together. Usually $A\\triangle B$ is smaller than $A\\cup B$; here there is nothing shared to keep, so the two operations coincide.

**Part 3.** The scans.

$A\\setminus B=A=\\{2,4,6\\}$ and $B\\setminus A=B=\\{1,3,5\\}$.

$$A\\triangle B=\\{2,4,6\\}\\cup\\{1,3,5\\}=\\{1,2,3,4,5,6\\}=A\\cup B.$$`,
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

Adding $22+15$ counts the six two-game players twice. Subtracting once restores a single copy. The overview already recovered $|A\\cup B|=31$.

The trap is to add $22+15=37$ and forget the subtraction, or to subtract the overlap twice.

The recovered union has $31$ students.

A student who writes $37$ has kept two copies of the six two-game players. The recovered union keeps them once..

Six two-game players counted twice make $37$. Subtracting once restores $31$. The recovered union is that cleaned total, still inside the club of $40$..

Inclusion-exclusion subtracts the double-counted six. The recovered union is $31$, not $37$. That $31$ still sits inside the club of $40$. Adding the headlines without subtracting counts the two-game players twice.

so the statement is True.`,
      `**B.** → True

Chess-only is the chess headline minus the overlap. The overview already recovered $22-6=16$. Those $16$ sit in $A$ and not in $B$.

The trap is to report $22$, counting the six who also play checkers, or to swap with checkers-only $9$.

The recovered chess-only region has $16$ people.

Chess-only is not the chess headline. The recovered $16$ has already removed the six who also play checkers..

Chess-only is not the chess headline $22$. The recovered $16$ has already removed the six who also play checkers. Those sixteen sit in $A$ and miss $B$..

Only-chess is headline minus overlap. The recovered $16$ is $22-6$, people in $A$ and not in $B$. Reporting $22$ keeps the six who also play checkers. Reporting $9$ copies checkers-only or neither, different cells.

so the statement is True.`,
      `**C.** → True

Neither is the club total minus the union. The overview already formed the union $31$ and left $40-31=9$.

The trap is $40-22-15=-3$ by subtracting both headlines without restoring the overlap, or to confuse this $9$ with checkers-only, which is also $9$ by coincidence.

The recovered neither-region has $9$ people.

The matching $9$ in checkers-only is a coincidence of sizes, not the same region. Neither is outside both circles. The recovered neither-cell is club minus union, $40-31$..

Neither is outside both circles: club minus union. The recovered $9$ is $40-31$. Checkers-only is also $9$ by coincidence of sizes, a different cell: in $B$, not in $A$, still inside the union. Subtracting both headlines from $40$ without restoring the overlap goes negative and is the wrong route..

Outside both circles is club minus union. The recovered neither-count is $9$. The matching checkers-only $9$ is a different region that happens to have the same size. A negative remainder from $40-22-15$ is the route that forgot to restore the overlap.

so the statement is True.`,
      `**D.** → False

Everyone playing both games is already someone playing at least one, so $A\\cap B\\subseteq A\\cup B$ always. The overview recovered $6$ versus $31$. Intersection cannot outnumber the union that contains it.

**1.** Subsethood of the both-region inside the at-least-one region is an identity, not a coincidence of these numbers. If $x$ plays both, then $x$ plays at least one.

**2.** The false figure $6>31$ would require a region to be larger than a region that contains it. That cannot happen for finite counts, and it cannot happen for these sets.

**3.** Comparing $22$ with $15$ and then mixing those headlines with $6$ and $31$ is no longer talking about intersection versus union. After isolating the unknown, the check is against $22$. The figure $31$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $22$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

What would make the inequality true? Nothing, for any two sets. The recovered $6<31$ is the expected direction.

The recovered intersection is smaller than the union.

A region cannot outnumber a region that contains it. The both-games six are already among the at-least-one thirty-one. The false inequality $6>31$ would break that containment. It is not a close numerical miss. It is the wrong direction for any two sets, and the recovered numbers $6$ and $31$ show the expected direction with a wide gap. Comparing the headlines $22$ and False5$ and then attaching those to $\\cap$ and $\\cup$ is no longer using inclusion-exclusion. Intersection sits inside union. Always. What would make the claim true? Nothing in this stem, and nothing in the algebra of sets.. After isolating the unknown, the check is against $22$. The figure $\\cup$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $22$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The both-games six are already among the at-least-one thirty-one. A region cannot outnumber a region that contains it. The false inequality $6>31$ is the wrong direction for any two sets, not a close miss on these numbers. The recovered gap $6<31$ is the expected direction. Mixing the headlines $22$ and False5$ into this comparison replaces intersection-versus-union with a different pair of counts. What would make the claim true? Nothing in the algebra of sets. Intersection sits inside union always.

so the statement is False.`,
      `**E.** → True

Checkers-only is the checkers headline minus the overlap. The overview already recovered $15-6=9$. Those $9$ sit in $B$ and not in $A$.

The trap is to copy the neither-count $9$ without noticing it is a different region that happens to have the same size, or to report $15$.

The recovered checkers-only region has $9$ people.

Checkers-only $9$ happens to match neither $9$. Different cells, same size. The recovered checkers-only cell is $15-6$, people in $B$ and not in $A$, still inside the club's union..

Checkers-only is $15-6=9$, people in $B$ and not in $A$. Matching the neither-count $9$ is coincidence. The recovered checkers-only cell is still inside the union, not outside both circles..

Only-checkers is $15-6$. The recovered $9$ people sit in $B$ and miss $A$, inside the union. The neither-cell's $9$ sit outside the union. Same size, different membership tests.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 18,
    solution_overview: `**Part 1.** The sets.

Of $40$ students, $|A|=22$ play chess, $|B|=15$ play checkers, and $|A\\cap B|=6$ play both.

**Part 2.** The operations.

Inclusion-exclusion counts the union by adding the headlines and subtracting the overlap once. Chess-only is the chess headline minus the overlap; checkers-only is the checkers headline minus the overlap. "Neither" is the club total minus the union. The both-games group is part of the at-least-one group, so the intersection cannot outnumber the union.

**Part 3.** The scans.

$$\\lvert A\\cup B\\rvert=22+15-6=31.$$

Chess-only: $22-6=16$. Checkers-only: $15-6=9$. Neither: $40-31=9$. Intersection $6$ versus union $31$.`,
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

The letter asks how many of the $60$ students take at least one language. That is the union size, not a course headline and not the overlap. The overview recovered $|A\\cup B|=50$ by inclusion-exclusion on $|A|=34$, $|B|=28$, and the shared $12$.

This letter does not rebuild that scan. It asks whether the claimed $50$ is that recovered union.

Adding $34+28$ without subtracting would land on $62$, two copies of the bilingual $12$. Working from the isolated values, $34+28$ is the figure that is checked, not the detour that produced $12$. Another rushed move is to subtract $12$ from $60$ and call that the union; that would be a leftover, not a union.

What would change the verdict? If the overlap had been $10$ instead of $12$, the union would be $52$, not $50$. Against the given $12$, the recovered union is $50$.

The claimed $|A\\cup B|=50$ matches the recovered union, The $12$ bilingual students are the reason $34+28$ is illegal as a union count. Inclusion-exclusion is not optional decoration; it is the only way to count people once. Treating the two courses as disjoint would have reported $62$ and missed the claim. The opposite verdict would need a different isolation than $62$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim.

The recovered $50$ is also $22+12+16$, the three playing regions. That rebuild is extra arithmetic that does not repeat the overview's $34+28-12$ display. Both routes agree, which is how we know the $50$ is not a mis-subtraction.

so the statement is True.`,
      `**B.** → True

Spanish-only is the Spanish headline minus the overlap. The overview recovered $|A\\setminus B|=22$ as $34-12$. Those $22$ sit in $A$ and not in $B$.

Using $34-28$ would compare course sizes instead of removing the shared $12$. Using $34$ itself would pretend the overlap was empty. Neither of those is the only-Spanish region.

A consistency check that does not repeat the overview's union display: the three playing regions $22+12+16$ rebuild $50$. That $22$ is the piece this letter names.

The recovered Spanish-only count is $22$, Spanish-only is not "Spanish minus French as course sizes." The $12$ shared students are inside the $34$, so they have to come off the $34$, not off a comparison of $34$ with $28$.

If the overlap had been $0$, Spanish-only would have been $34$. The stem's $12$ common students are why it is $22$. Reporting $34$ would have ignored the overlap entirely. Once $34$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does.

so the statement is True.`,
      `**C.** → True

Neither is whoever sits outside the union. The overview recovered the union $50$ and the leftover $60-50=10$.

This letter's extra arithmetic is only the last subtraction from the cohort, not a second inclusion-exclusion. Subtracting both headlines from $60$ without restoring the overlap would overcount this leftover: $60-34-28=-2$, which is nonsense, and adding the $12$ back is how you return to $10$.

Reporting $60-34-28+12$ in the wrong order might still land on $10$ by luck, or might stop at $60-50$ after using $62$ for the union and report $0$. After isolating the unknown, the check is against $60-34-28+12$. The figure $0$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $60-34-28+12$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The recovered leftover is $10$.

The recovered neither-count is $10$, Neither-language is a leftover, so it lives outside the union. The extra step is $60-50$, using the recovered union, not a new inclusion-exclusion.

Computing $60-34=26$ and stopping would have treated French as invisible. That is why $60-34=26$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Computing $60-28=32$ would have treated Spanish as invisible. Keeping $60-28=32$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Both headlines have to leave before the leftover is named, and the overlap has to be restored so it is not subtracted twice.

so the statement is True.`,
      `**D.** → False

Intersection is a subset of the union, so its size cannot exceed the union size. The overview recovered $|A\\cap B|=12$ and $|A\\cup B|=50$. Already $12<50$.

The claimed $|A\\cap B|>|A\\cup B|$ would need people in both languages who somehow missed the union. That is impossible: anyone in both is in at least one.

**1.** Containment $A\\cap B\\subseteq A\\cup B$ is true of every pair of sets, whatever the survey numbers. Size comparison cannot reverse a containment.

**2.** Comparing $12$ with $34-28=6$ might have thought the overlap was "large," then jumped to "larger than the union." After isolating the unknown, the check is against $12$. The figure $34-28=6$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $12$ stays in the write-up.Large compared with the gap between headlines is not large compared with $50$.

**3.** What would make the inequality true? Nothing, for finite sets: the overlap is one of the three playing regions inside the union. Even if every Spanish student also took French, the overlap would equal the smaller headline $28$, still below the union.

Think of the $50$ union as a box and the $12$ overlap as a box inside it. An inner box cannot have more members than the outer box. The claimed inequality asks the inner box to outgrow the outer one.

Even in the extreme where every French student also takes Spanish, the overlap would be $\\min(34,28)=28$, and the union would be $34$, still $28<34$. No rearrangement of these headlines produces $|A\\cap B|>|A\\cup B|$.

Comparing $12$ with $10$ (the neither-count) and thinking "overlap beats leftover, so overlap is huge" would have been comparing the wrong pair. After isolating the unknown, the check is against $12$. The figure $10$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $12$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Huge relative to $10$ is not huge relative to $50$. The recovered $12$ sits strictly below the recovered $50$, which is the only size pair this inequality named. Spanish-only $22$ and French-only $16$ are the other two cells of that same union box; adding them to the overlap rebuilds $50$, not a number smaller than $12$.

so the statement is False.`,
      `**E.** → True

French-only peels the overlap out of $B$. The overview recovered $|B\\setminus A|=16$ as $28-12$. Spanish-only is $22$, so the three playing regions rebuild the union: $22+12+16=50$.

This $16$ is the French-side peel, not a leftover "neither" count. Computing $28-34$ would have a negative, or using $28-10$ would have mixed the neither-count into the peel. Working from the isolated values, $28-34$ is the figure that is checked, not the detour that produced $28-10$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered French-only count is $16$, French-only $16$ plus Spanish-only $22$ plus both $12$ is $50$, matching the recovered union. That rebuild uses the peel this letter names, so it is extra arithmetic rather than a second inclusion-exclusion.

Reporting $28$ for French-only would have kept the bilingual students in the "only" pile. The recovered isolation is checked against the claim using $28$, which is the figure the sessions actually produce. That contrast is the reason the verdict goes the way it does. They are not only-French; they are both.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 19,
    solution_overview: `**Part 1: Setup.**

**How many students take at least one language?** The 12 students taking both were counted twice, once among the 34 and once among the 28, so one copy has to come off:

$$|A\\cup B|=34+28-12=50.$$

**How many take just one?** Spanish minus the overlap is $34-12=22$; French minus the overlap is $28-12=16$. Together with the 12 who take both that is $22+12+16=50$, the same total as above, a good sign the pieces are right.

**Part 2: Relatives.**

**How many take nothing?** The cohort has 60 students and 50 of them sit inside the union, so $60-50=10$ take neither language.

**Part 3: Solve.**

**Could the overlap ever beat the union?** No. Taking both courses is a stronger requirement than taking at least one, so those 12 students are part of the 50 and can never outnumber them.`,
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

The five members who use both facilities appear in each headline, so one copy comes off. The overview recovered $|A\\cup B|=33$ from $20+18-5$.

Adding $20+18$ without subtracting inflates the union to $38$, two copies of the overlap. The claim is $33$, matching the recovered union, not that inflated $38$.

Subtracting $5$ from the gym size $50$ would be computing a leftover, not a union. After isolating the unknown, the check is against $5$. The figure $50$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $5$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The recovered union is $33$, The product-rule habit of adding $20+18$ is the gym version of double-counting. Five people used both, so they appear in both headlines. The recovered $33$ is the count of distinct members, not the count of memberships.

Reporting $38$ would have counted those five people twice. Keeping $38$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Reporting $15$ would have been naming pool-only, a different region. Keeping $15$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim.

so the statement is True.`,
      `**B.** → True

Pool-only is the pool headline minus the overlap. The overview recovered $|A\\setminus B|=15$ as $20-5$. Those $15$ use the pool and not the sauna.

The count would stay $20$ only if the facilities shared nobody. Using $20-18$ would compare headlines, not peel the shared $5$.

Pool-only $15$ is the pool headline after the five "both" members leave. If the sauna overlap had been $8$ instead of $5$, this count would be $12$, not $15$. Against the given $5$, it is $15$.

Reporting $20-18=2$ would have compared headlines. The opposite verdict would need a different isolation than $20-18=2$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Headline comparison is not a peel. Reporting $20$ would have kept the overlap inside "only," which is the opposite of an only-count. The path that matches the stem therefore holds $20$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered pool-only cell is the $15$ named in the claim. Neither, later, is $50-33=17$; that leftover lives outside both facilities and is not an "A only" count. Letter E's sauna-only $13$ is the matching peel on the other side.

so the statement is True.`,
      `**C.** → True

First the union of facility users, recovered as $33$. The leftover among $50$ members is $50-33=17$.

The four regions $15+5+13+17=50$ then account for the whole gym. Subtracting pool plus sauna from $50$ without restoring the five "both" members would overcount unused lockers: $50-20-18=-12$ before adding $5$ back.

Using union $38$ would report leftover $12$ instead of $17$. That is the fork: $38$ belongs to the recovered isolation, $17$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered leftover is $17$.

The recovered neither-count is $17$, The leftover $17$ is membership minus the recovered union $33$. It is not $50-20-18$. That last arithmetic subtracts the five "both" members twice and overshoots into a negative before anyone restores them.

The four-region total $15+5+13+17=50$ is extra arithmetic confirming the leftover. If the leftover had been $12$, those four numbers would overshoot or undershoot $50$.

so the statement is True.`,
      `**D.** → False

Containment $A\\cap B\\subseteq A\\cup B$ forbids the intersection from beating the union. Compare the two recovered sizes: $|A\\cap B|=5$ and $|A\\cup B|=33$. Already $5<33$.

Flipping a containment into a size comparison is the trap. The five "both" members already sit inside the $33$. They cannot outnumber the set that contains them.

**1.** Even if every sauna user also used the pool, the overlap would be $18$, still below $33$.

**2.** Comparing $5$ with $20-18=2$ might call $5$ "large" and then leap to "larger than the union." So the letter reads the claim against $5$; $20-18=2$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $5$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.Large compared with the headline gap is not large compared with $33$.

**3.** What would make $|A\\cap B|>|A\\cup B|$? A person in both who missed the union, which cannot happen. The inequality is impossible for these sets, and for any sets.

Five people sit in both facilities. Thirty-three people sit in at least one. Five cannot exceed thirty-three. The claimed inequality is a containment error dressed as a size comparison.

Thinking "both is a stricter requirement, so maybe it is a larger set" would have mixed strictness of membership tests with size. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Stricter tests produce smaller sets, or equal sets, never larger ones.

Even saturating the overlap at $\\min(20,18)=18$ still leaves $18$ below the union, which would then be $20$. The inequality never flips. Letter B's pool-only $15$ and letter E's sauna-only $13$ sit beside the $5$ inside that $33$; none of those three cells can outgrow the box they live in.

The same containment that blocked Spanish-and-French in the neighbouring cohort blocks pool-and-sauna here. The numbers changed ($5$ against $33$, not $12$ against $50$), but the shape did not: the overlap is a subset of the union, so its size cannot exceed the union size.

so the statement is False.`,
      `**E.** → True

Sauna-only peels the overlap out of $B$. The overview recovered $|B\\setminus A|=13$ as $18-5$. Pool-only is $15$, so the three playing regions sum to $15+5+13=33$, recovering the union.

This $13$ is the sauna-side peel, not a leftover "neither" count of $17$. Mixing those two leftovers is the usual swap.

Sauna-only $13$ is $18-5$, the sauna headline after the overlap leaves. Mixing this $13$ with the neither-count $17$ is the usual swap of the two leftovers on the sauna side.

Reporting $18$ would have kept the five "both" members in the "only" pile. The path that matches the stem therefore holds $18$ fixed and only then reads the claim. That contrast is the reason the verdict goes the way it does. They used the pool as well. Copying letter B's $15$ would have answered the pool-only cell. That is why $15$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does. The recovered sauna-only cell is $13$. The neither leftover $17$ is a third number, outside the gym's two facilities, and is not this peel. Adding $13$ to pool-only $15$ and overlap $5$ rebuilds the union $33$.

so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 20,
    solution_overview: `**Part 1: Setup.**

Of $50$ gym members, $20$ use the pool ($A$) and $18$ use the sauna ($B$), with $|A\\cap B|=5$ using both. The same two-set census applies:

$$|A\\cup B|=|A|+|B|-|A\\cap B|$$

Pool-only is $|A|-|A\\cap B|$.

**Part 2: Relatives.**

Sauna-only is $|B|-|A\\cap B|$.

**Part 3: Solve.**

Neither is membership minus the union. The five "both" members already sit inside the union.`,
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

Write the three-set formula and consult the recovered union. The overview substituted the survey counts and recovered $|A\\cup B\\cup C|=53$. The closing $+3$ puts back the all-three members who were subtracted once too often.

Stopping after the pairwise subtractions would leave $50$ and undercount the union. The claimed $53$ matches the recovered total, not that $50$.

Adding $30+25+20=75$ and stopping would have counted overlapping members several times. Keeping $30+25+20=75$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The union counts each person once.

The recovered union is $53$, The $+3$ at the end is easy to drop. Pairwise subtractions remove the triple group once too often, because those $3$ people sit in every pair. Putting them back is how $50$ becomes the recovered $53$.

Reporting $75$ never left the raw sum. That is why $75$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Reporting $50$ stopped one correction too soon. The opposite verdict would need a different isolation than $50$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

so the statement is True.`,
      `**B.** → True

Someone who does all three activities automatically does each pair. Those $3$ people already sit inside the pairwise totals $10$, $8$, and $7$. That is why inclusion-exclusion adds them back at the end: they were subtracted once too often.

They are not a fourth disjoint group hiding outside the pairs. Adding $3$ as an extra region on top of $10$, $8$, and $7$ would double-count the triple group. After isolating the unknown, the check is against $3$. The figure $7$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $3$ stays in the write-up.

The recovered triple sits inside every pairwise headline, The triple group is not a bonus pile sitting beside the pairs. It is already inside $|A\\cap B|$, $|A\\cap C|$, and $|B\\cap C|$. That nested containment is why the last $+3$ exists in the formula.

Drawing the triple as a fourth disjoint island would have overcounted the union by $3$. Once $3$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim.

so the statement is True.`,
      `**C.** → True

The pairwise total $|A\\cap B|=10$ still includes the cooks. Removing the triple isolates the exact-pair region. The extra arithmetic this letter needs is that single peel:

$$|A\\cap B\\cap C^{c}|=10-3=7$$

Leaving the raw $10$ mixes "at least those two" with "exactly those two." Every pairwise headline in a three-set survey needs that triple subtracted before it names an exact-pair region.

Subtracting $3$ from $30$ instead would be peeling the triple out of photography's headline, a different region. The stem's recovered values line up with $3$, whereas $30$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $3$ stays in the write-up. The claim is photography and hiking but not cooking, which is the $A\\cap B$ peel, not the $A$ peel.

The recovered exact-pair count is $7$, Exact-pair regions are pairwise totals minus the triple. The extra $10-3=7$ is this letter's own arithmetic. The overview recovered the pairwise $10$ and the triple $3$; this letter peels them.

Leaving the $10$ untouched would have been answering "at least photography and hiking," which still includes the three cooks. That is why $10$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does.

so the statement is True.`,
      `**D.** → True

The triple group is a subset of each pair, so its size cannot exceed any pairwise size. Check the three comparisons against the recovered counts:

$$3\\le 10,\\qquad 3\\le 8,\\qquad 3\\le 7$$

Hence $3\\le\\min(10,8,7)$. A triple larger than a pair would mean people in all three who somehow missed one of the pairs, which is impossible.

Comparing $3$ with the union $53$ would have a true but irrelevant inequality. Working from the isolated values, $3$ is the figure that is checked, not the detour that produced $53$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The letter asks for the min of the three pairwise sizes, and $3$ clears that bar.

The recovered triple sits at or below every pairwise size, A subset cannot outgrow any set that contains it. The triple is a subset of each pair, so $3$ cannot exceed $10$, $8$, or $7$. The min of those three pairwise sizes is $7$, and $3\\le 7$.

Comparing $3$ with $53$ would have used the union, which is the wrong comparison even though $3\\le 53$ happens to hold. Working from the isolated values, $3$ is the figure that is checked, not the detour that produced $3\\le 53$.

so the statement is True.`,
      `**E.** → False

The raw sum counts overlapping members several times. The overview recovered $|A|+|B|+|C|=75$ and $|A\\cup B\\cup C|=53$. Already $53<75$. The claimed $53>75$ is backwards.

A union matches the raw sum only when the three groups are completely separate. Here the pairwise totals $10$, $8$, and $7$ are all positive, so the union must undershoot $75$.

**1.** Inclusion-exclusion subtracts those pairwise totals and then adds the triple back, which is a net decrease from $75$ to $53$. The inequality cannot flip.

**2.** Remembering "add the triple at the end" might have thought the $+3$ could push the union above $75$. The recovered comparison therefore keeps $+3$ and does not substitute $75$. Adding $3$ after subtracting $10+8+7=25$ still leaves a net $-22$.

**3.** What would make the union larger than the raw sum? Nothing, for nonnegative overlaps. The union counts each person once; the raw sum counts some people two or three times.

The raw sum $75$ counts some people twice and the triple group three times. The union counts each person once, so it must be smaller whenever overlaps exist. Here they do: three positive pairwise totals.

Net correction: subtract $10+8+7=25$, add $3$, a decrease of $22$. Nothing in that arithmetic can push $53$ above $75$. The claimed inequality is the raw sum and the union with their roles reversed. Treating the triple $+3$ as a bonus on top of $75$ skipped the pairwise subtractions that the overview already performed. After isolating the unknown, the check is against $+3$. The figure $75$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $+3$ stays in the write-up.

If the three clubs had been pairwise disjoint, the union would have matched $75$ and the inequality would still have failed, because $>$ is strict. Positive overlaps make the gap even wider. The recovered $53$ is the smaller figure, and the claim wrote the comparison the wrong way round.

so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 21,
    solution_overview: `**Part 1: Setup.**

Three hobby groups overlap: $|A|=30$ photography, $|B|=25$ hiking, $|C|=20$ cooking, with pairwise totals $|A\\cap B|=10$, $|A\\cap C|=8$, $|B\\cap C|=7$, and triple overlap $|A\\cap B\\cap C|=3$.

**Part 2: Relatives.**

Three-set inclusion-exclusion corrects the raw sum twice, once for the pairs and once for the people counted in all three:

$$|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$$

An exact-pair region is the pairwise total minus the triple. The triple group sits inside every pair, so its size cannot exceed any pairwise size.

**Part 3: Solve.**

The union counts each person once, while $|A|+|B|+|C|$ counts overlapping members repeatedly.`,
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

Conjunction needs both halves true. The overview recovered $P$ true ($7$ is prime) and $Q$ false ($7$ is not even), so $P\\land Q$ is false. "Both prime and even" therefore fails.

An "or" would survive on the prime side alone. This letter asks for the "and." reading "both" as "at least one" would have accepted it. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence.

The recovered conjunction is false, Seven is the standard odd prime used to test "and" versus "or." Both properties would require an even prime other than the topic's $7$, and $7$ is not even. The recovered $P\\land Q$ is the false row T/F.

Knowing $2$ is even and prime would have been answering a different question about $2$, not about $7$. That is the fork: $2$ belongs to the recovered isolation, $7$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

so the statement is False.`,
      `**B.** → True

Inclusive or needs only one true side. $P$ is true, so $P\\lor Q$ is true even though $Q$ is false. Exclusive or would reject this row; mathematical "or" does not. The even side being false does no damage.

Wanting both sides true would have been running an "and." That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.The recovered disjunction holds on the prime half.

The recovered $P\\lor Q$ is true, Inclusive or is the T/F row: true on the prime side. Exclusive or would demand "prime or even but not both," which would reject this row because prime holds. Mathematics uses inclusive or unless told otherwise.

Wanting $7$ to be even as well would have been running letter A's conjunction. The path that matches the stem therefore holds $7$ fixed and only then reads the claim.

so the statement is True.`,
      `**C.** → True

The inner conjunction $P\\land Q$ is already false, and negation flips it: $\\neg(P\\land Q)$ is true. It is indeed not the case that $7$ is both prime and even.

This is $\\neg(P\\land Q)$, not $\\neg P\\land\\neg Q$. De Morgan identifies the first with $\\neg P\\lor\\neg Q$, an or of negations, which holds because $\\neg Q$ is true.

Replacing the outer "not both" by "neither" would have landed on letter D's false sentence. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence.

The recovered $\\neg(P\\land Q)$ is true, "Not both" is the negation of an "and." It is true whenever at least one half fails. Here the even half fails, so "not both" holds. It would also hold if $7$ failed to be prime, and it would fail only if $7$ were both.

De Morgan's or-of-negations, "not prime or not even," has a true second disjunct $\\neg Q$. Same truth value, different shape from "neither."

so the statement is True.`,
      `**D.** → False

"Neither prime nor even" is $\\neg P\\land\\neg Q$. But $\\neg P$ is false because $7$ is prime, so the conjunction of negations is false.

De Morgan says $\\neg(P\\land Q)\\equiv\\neg P\\lor\\neg Q$, an or of negations. Replacing that or by an and is the mix-up with $\\neg(P\\land Q)$, which was true in letter C.

**1.** $7$ is prime, so it cannot be "neither prime nor even." One true property already kills "neither."

**2.** Treating What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. "not both" as "neither." Those are De Morgan partners only after the "and" becomes an "or." Keeping the "and" is the error.

**3.** What would make "neither" true? A composite odd number such as $9$, which is not prime and not even. $7$ is prime, so it is the wrong sample.

"Neither" is the harsher sentence: not prime and not even. Seven is prime, so "neither" is already dead. Letter C's "not both" survived on the even failure alone; "neither" needs both failures.

Treating De Morgan as "keep the and when you negate" would have identified letter C with letter D. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. They are different rows: C is true, D is false. The recovered $P$ is true and the recovered $Q$ is false, so $\\neg P\\land\\neg Q$ has a false first conjunct. That is enough.

"Neither" would describe a number that fails primality and fails evenness together. Seven fails only evenness. The evenness failure is what made "not both" true; it cannot, by itself, make "neither" true. Those two English words look like cousins and they are opposite in strength: one is an or of denials, the other is an and of denials. Sample $9$ would have made this letter true; sample $7$ does not.

so the statement is False.`,
      `**E.** → False

$P\\lor Q$ is true, so its negation is false. Claiming $\\neg(P\\lor Q)$ would mean $7$ is neither prime nor even, which already fails because $7$ is prime.

This is the same false sentence as letter D, written as a negated or. De Morgan identifies $\\neg(P\\lor Q)$ with $\\neg P\\land\\neg Q$.

Negating the "or" by negating only the even half would have kept "prime or not even," which is a different sentence and happens to be true. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The letter negates the whole disjunction.

The recovered $\\neg(P\\lor Q)$ is false, Negating an or produces an and of negations. Because $7$ is prime, $\\neg P$ is false, so the and of negations is false. This letter is letter D in other clothes.

Negating $P\\lor Q$ by writing "not prime or not even" would have dropped a negation and landed on De Morgan's form of letter C, which is true. Keeping $P\\lor Q$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. The quoted sentence keeps the outer "it is not true that," which is the full $\\neg(P\\lor Q)$.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `**Part 1: Setup.**

The number $7$ is prime and is not even. Write $P$ for "$7$ is prime" and $Q$ for "$7$ is even".

**Part 2: Relatives.**

Then $P$ is true and $Q$ is false. Conjunction $\\land$ is true only when both parts are true. Inclusive disjunction $\\lor$ is true when at least one part is true.

**Part 3: Solve.**

Negation $\\neg$ flips a truth value. De Morgan identifies $\\neg(P\\land Q)$ with $\\neg P\\lor\\neg Q$, and $\\neg(P\\lor Q)$ with $\\neg P\\land\\neg Q$.`,
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

If an integer larger than $2$ were even, then $2$ would divide it as well, giving it at least three divisors. So it could not be prime. The only even prime is $2$, and the statement excludes it by $p>2$. Every remaining prime is odd.

The restriction $p>2$ is load-bearing; without it, $2$ would be a counterexample. The recovered statement is a true universal on that restricted domain.

Thinking "2 is even and prime, so the statement fails" would have ignored $p>2$. Keeping $p>2$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That is letter B's trap, not this letter's.

The recovered claim holds for every prime greater than $2$, The argument is local to each prime $p>2$: evenness would introduce the extra divisor $2$, so primality would fail. The only even prime is excluded by the domain. That is why the universal holds.

Without $p>2$ the same argument would fail at $2$, which is prime and even. The restriction is doing real work.

so the statement is True.`,
      `**B.** → False

A counterexample must live inside the domain and fail the conclusion. The test $2>2$ is false, so $2$ never enters the quantified range. It is an even prime, which looks perfect, but the statement never claimed anything about $2$.

A genuine counterexample would need to be an even prime greater than $2$, and none exists. The word "greater than $2$" is doing the work of excluding the one even prime.

**1.** Domain check: $2$ fails $p>2$, so it is not a candidate.

**2.** Conclusion check is idle once the domain check fails. Being even is irrelevant for a point outside the domain.

**3.** Dropping That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. the restriction, treats "prime" as the whole domain, and points at $2$. That would refute "every prime is odd," which is a different sentence.

What would make $2$ a counterexample? If the statement had said "every prime is odd," without $p>2$. Against the actual wording, $2$ is outside the net.

Counterexamples have to be members of the domain. $2$ fails the membership test $p>2$, so it is not available as a counterexample, however even it is.

A genuine counterexample would be an even prime strictly larger than $2$. Euclid's observation that $2$ is the unique even prime is why none exists. Pointing at $2$ is pointing at a point the sentence already carved out. The recovered domain starts at $3$, and every prime there is odd.

Testing $9$ would have left the prime domain as well as the evenness conclusion. The recovered isolation is checked against the claim using $9$, which is the figure the sessions actually produce. Testing $4$ would have left the prime domain. The path that matches the stem therefore holds $4$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The only tempting even prime is $2$, and the stem already excluded it by writing "greater than $2$." That exclusion is the content of the letter, not a footnote.

so the statement is False.`,
      `**C.** → True

Negating a universal swaps $\\forall$ for $\\exists$ and "odd" for "even," keeping $p>2$. The quoted sentence is that negation. The original is true, so this existential is false, but it is still the correctly formed negation.

Dropping $p>2$ from the negation would have produced "there exists an even prime," which is true (witness $2$) and is not the negation of the restricted statement. The recovered comparison therefore keeps $p>2$ and does not substitute $2$. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered negation is the existential named in the claim, Formation and truth are separate. The quoted existential is the correctly formed negation, and because the original is true the existential is false. Chip-style thinking: you still write "there exists a failing $p>2$," even when inspection later finds none.

Writing "there exists an even prime" without $p>2$ would have a true sentence that is not this negation. The opposite verdict would need a different isolation than $p>2$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim.

so the statement is True.`,
      `**D.** → False

This reverses the implication into its converse: every odd number above $2$ is prime. Test $9$: odd, greater than $2$, and $9=3\\cdot 3$ is not prime. One counterexample kills "every odd above $2$ is prime."

The original arrow is prime $\\Rightarrow$ odd, not the reverse. Composite odds such as $9$, $15$, and $21$ are plentiful.

**1.** $9>2$ and $9$ odd, yet $9$ is composite. That is the converse's failure row.

**2.** Thinking "the original is true, so the reverse is true" would have mixed the pairs. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Original true, converse false, is the ordinary split.

**3.** What would make the converse true? A world with no composite odds, which the integers do not supply.

The recovered converse fails at $9$, $9$ is odd, greater than $2$, and composite. That single sample kills the converse. The original arrow never claimed that oddness produces primality; it claimed that primality (above $2$) produces oddness.

$15=3\\times 5$ and $21=3\\times 7$ are further composite odds. One is enough. Testing only primes would never have seen the converse fail. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

so the statement is False.`,
      `**E.** → True

Euclid supplies infinitely many primes. Dropping the single prime $2$ leaves $3,5,7,\\ldots$, still infinite, all greater than $2$. Removing one element from an infinite set leaves an infinite set.

Finiteness would require the primes above $2$ to run out, which Euclid forbids. Thinking "throwing out $2$ might leave only finitely many" would have treated infinity as a finite pile minus one. Once $2$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered list of primes greater than $2$ is infinite, Infinite minus one is infinite. Euclid's list $2,3,5,7,\\ldots$ remains infinite after deleting $2$. The primes greater than $2$ are exactly that tail.

Thinking "the statement is about a restricted set, so maybe it is finite" would have confused a restriction with a bound. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. $p>2$ removes one prime, not all but finitely many.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `**Part 1: Setup.**

The statement is: for every prime $p>2$, $p$ is odd. A prime has exactly two positive divisors, $1$ and itself. An even integer larger than $2$ would also be divisible by $2$, hence would have at least three divisors and could not be prime.

**Part 2: Relatives.**

The domain is primes strictly greater than $2$. A counterexample must live in that domain and fail the conclusion.

**Part 3: Solve.**

Negating a universal swaps $\\forall$ for $\\exists$ and reverses the conclusion, keeping $p>2$. The converse swaps the two halves. Euclid's theorem says there are infinitely many primes.`,
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

Rule (1) is "enrolled in Advanced $\\Rightarrow$ passed Intermediate." Maria is enrolled in Advanced, so modus ponens yields the Intermediate pass. Without that pass, rule (1) would have forbidden the enrolment she currently has.

The rule does not say she passed with any particular grade. This letter only asks whether she passed Intermediate.

Thinking "only if" ran the other way, from Intermediate to Advanced, would have been using a sufficient-condition reading the rules do not give. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

The recovered Intermediate pass is forced, Maria is sitting in Advanced right now. Rule (1) is an "only if" from that enrolment back to Intermediate. Modus ponens is the whole content: the "if" fired, so the "then" is in hand.

Waiting for a grade sheet would have been answering letter E. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. This letter is pass/fail, and "passed Intermediate" is forced.

so the statement is True.`,
      `**B.** → True

Compose the two rules: Advanced $\\Rightarrow$ Intermediate $\\Rightarrow$ Principles. Maria is in Advanced, so the first arrow forces Intermediate and the second forces Principles.

Skipping Intermediate in the chain would leave Principles unforced, which the two rules do not allow. The recovered chain is two steps, and both fire.

Applying only rule (1) would have stopped at Intermediate and missed Principles. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. This letter needs both arrows.

The recovered Principles pass is forced, Two arrows fire in sequence. Advanced forces Intermediate by (1); Intermediate forces Principles by (2). Maria's current enrolment is the spark at the left end.

Applying (2) without (1) would have needed an Intermediate enrolment the stem does not state directly. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The stem states Advanced; (1) supplies Intermediate; (2) then supplies Principles.

so the statement is True.`,
      `**C.** → True

Composing the two arrows gives "enrolled in Advanced $\\Rightarrow$ passed Principles." Necessary means Advanced cannot occur without Principles, which is exactly that composed implication.

Sufficient would be the reverse arrow $P\\Rightarrow A$, which is a different claim. This letter asks for necessary, and the composed chain supplies it.

Swapping those two words would have rejected a true necessary-condition sentence. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The necessary condition is the one the arrow points at.

The recovered composed implication makes Principles necessary for Advanced, Necessary is the head of the arrow. Composing $A\\Rightarrow I\\Rightarrow P$ puts Principles at the far head, so Principles is necessary for Advanced. Maria cannot be in Advanced unless Principles was passed, even though the stem never wrote that composed sentence in one line.

Wanting Principles to enrol her in Advanced would have been reading sufficient, letter D. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

so the statement is True.`,
      `**D.** → False

Sufficient would require "passed Principles $\\Rightarrow$ enrolled in Advanced." A student may pass Principles, skip Intermediate, and never reach Advanced. Principles sits on the necessary side of the chain, not the sufficient side.

The classic swap of those two words is the trap. Passing the first course in a chain is never, by itself, a ticket to the last course.

**1.** The recovered arrows run $A\\Rightarrow I\\Rightarrow P$, left to right from enrolment. The reverse $P\\Rightarrow A$ is not supplied.

**2.** A concrete counter-model: pass Principles, fail Intermediate, never enrol in Advanced. Both numbered rules hold, and $P\\Rightarrow A$ fails.

**3.** What would make Principles sufficient for Advanced? A rule that skipped Intermediate or made Principles imply both later enrolments. The stem has no such rule.

Sufficient would let Principles alone push Maria into Advanced. The chain has a missing middle: Intermediate. A student with Principles and without Intermediate is allowed by both numbered rules and is not in Advanced.

That student is the counter-model. The recovered arrows do not reverse. Swapping "necessary" and "sufficient" is the whole error, and it is the error this chapter repeats on purpose. Maria's actual enrolment in Advanced travels the chain forward, from $A$ to $I$ to $P$. This letter asked about the backward ticket from $P$ to $A$, which the rules never printed.

Passing Principles is necessary for Intermediate, and Intermediate is necessary for Advanced, so Principles is necessary for Advanced by transitivity. Necessary is the opposite of the word the claim used. A sufficient first course would have been a course whose mere pass forced both later enrolments, and the catalogue did not write that. Maria's file travels the chain forward; this letter asked for a reverse ticket.

so the statement is False.`,
      `**E.** → False

The two rules mention only "passed" and "enrolled." No grade, mark, or "perfect" appears. From Maria's enrolment we recover two pass/fail facts, not a score.

A perfect grade is extra information the premises do not carry. Padding "passed" into "passed perfectly" would have imported a fact the registrar never recorded. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

What would make the claim true? A rule about marks, which is not in the stem. The recovered facts are two passes, nothing more.

The premises do not yield a perfect grade, "Passed" is a binary predicate in these rules. No numerical mark appears. Inferring a perfect grade from an enrolment is padding.

Writing "she must have done well, otherwise she would not be in Advanced" would have imported a story about standards the rules never mention. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The rules mention passing, and passing is all that follows.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `**Part 1: Setup.**

"You may enrol in $X$ only if you have passed $Y$" is $X\\Rightarrow Y$: $Y$ is necessary for $X$, not sufficient. Write $A$ for enrolling in Advanced Macroeconomics, $I$ for passing Intermediate, and $P$ for passing Principles.

**Part 2: Relatives.**

The two rules form the chain

$$A\\Rightarrow I\\Rightarrow P$$

Maria is enrolled in Advanced, so the arrows run left to right from that observation.

**Part 3: Solve.**

The reverse arrow $P\\Rightarrow A$ is not supplied. The rules speak only of passing and enrolling; they record no marks.`,
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

Scan $P$ against $E$. The overview recovered $P\\cap E=\\{2\\}$, the even prime in these lists. Every other prime here is odd, so it misses $E$. Intersection is that single shared number, not a claim that all primes are even.

Listing $\\{2,4\\}$ would have padded with a non-prime. The opposite verdict would need a different isolation than $\\{2,4\\}$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The recovered overlap is the singleton $\\{2\\}$.

The even primes less than $15$ are just $2$. Intersection with $E$ therefore cannot contain $4$ or $6$, which are even but not prime, and cannot contain $3$, which is prime but not even.

The recovered singleton $\\{2\\}$ is that unique overlap. Padding it is the usual error. Letter E will ask whether the whole of $P$ sits in $E$; this letter only names the overlap cell. A union of the two lists would have kept every odd prime and every even composite; that combined roster is not the claim. Difference $P\\setminus E$ is the five odd primes, the other leftover, not this intersection.

so the statement is True.`,
      `**B.** → True

Difference $P\\setminus E$ deletes a member of $P$ only when it also sits in $E$. The overview recovered $P\\setminus E=\\{3,5,7,11,13\\}$ by throwing $2$ out of $P$. Dropping $3$ as well would be treating "small" as "even."

Reporting $\\{2,3,5,7,11,13\\}$ would have forgotten to delete the overlap. The path that matches the stem therefore holds $\\{2,3,5,7,11,13\\}$ fixed and only then reads the claim. The recovered difference is the five odd primes.

The recovered $P\\setminus E$ is the five odd primes, Deleting $2$ from $P$ is the whole difference. The five leftover primes are all odd, so they miss $E$ and stay. Also deleting $3$ because "$3$ is next to $2$" would have treated nearness as evenness. Working from the isolated values, $3$ is the figure that is checked, not the detour that produced $2$. That contrast is the reason the verdict goes the way it does.

The recovered roster $\\{3,5,7,11,13\\}$ is $P$ with the overlap removed, not $P$ with the small numbers removed.

so the statement is True.`,
      `**C.** → False

A "for every" sentence needs a clean sweep, and this one stumbles at $x=2$: in $P$ and even. One counterexample inside the domain makes $\\forall x\\in P$ false. Every other prime in the list is odd, which is why the claim looks tempting; universal claims do not forgive a single exception.

Excluding $2$ by habit, copying letter D's extra hypothesis, would have made this true. That is why $2$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does. The unrestricted universal has no such extra hypothesis.

The recovered $2\\in P$ is even, Universals fail at one interior point. $2$ is in $P$ and even, so "every member of $P$ is odd" is false. The other five members being odd is a distraction, which is why the sentence looks almost true.

Letter D repairs it by excluding $2$. This letter does not exclude $2$. One exception is fatal.

so the statement is False.`,
      `**D.** → True

The extra hypothesis $x\\ne 2$ removes the even prime. What remains is $\\{3,5,7,11,13\\}$, all odd, so no remaining $x$ makes the "if" true and the "then" false. Restricting the domain is what repairs the unrestricted universal; without $x\\ne 2$ the same $2$ would still kill it.

Thinking "adding a hypothesis cannot save a false universal" would have missed that the hypothesis changes the domain. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The repaired implication never fires at $2$.

The recovered restricted claim holds on the five odd primes, The extra $x\\ne 2$ takes $2$ out of the firing line. On the remaining five primes the conclusion "odd" holds, so the implication has no false row. Restricting a domain can save a universal; it is not cheating, it is a different sentence.

Thinking the extra hypothesis was idle would have kept letter C's counterexample. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That counterexample is exactly what $x\\ne 2$ removes.

so the statement is True.`,
      `**E.** → False

$P\\subseteq E$ would need every prime in the list to be even. Already $3\\in P$ and $3\\notin E$. One miss kills the inclusion. Only the overlap $\\{2\\}$ sits inside $E$; five of the six primes lie outside.

Checking only $2$ would have thought the inclusion held. The path that matches the stem therefore holds $2$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Subsethood is a clean sweep, and $3,5,7,11,13$ are five misses.

Subsethood needs every member of $P$ to sit in $E$. Five odd primes miss $E$. One miss, $3$, already kills it; five misses are five too many.

Checking only the overlap $\\{2\\}$ would have verified a different claim, $P\\cap E\\subseteq E$, which is always true and is not $P\\subseteq E$. That is the fork: $\\{2\\}$ belongs to the recovered isolation, $P\\subseteq E$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered $P$ is the six-prime list, not the singleton from letter A.

What would make the inclusion true? A world in which every prime less than $15$ was even. That world contains only $2$, so it is not this $P$. Against the given lists, five odd primes sit outside $E$, and any one of them is a witness.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `**Part 1: Setup.**

Let $P=\\{2,3,5,7,11,13\\}$ be the primes less than $15$ and $E=\\{2,4,6,8,10,12,14\\}$ the evens less than $15$. They overlap in the single even prime $2$.

**Part 2: Relatives.**

Intersection keeps numbers in both lists. Difference $P\\setminus E$ keeps members of $P$ missing from $E$.

**Part 3: Solve.**

A sentence $\\forall x\\in P$ makes a promise about all six members, so one bad member destroys it. A subset claim $P\\subseteq E$ fails as soon as one member of $P$ sits outside $E$.`,
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

If $x>10$, then $x>5$ automatically because $10>5$. That is $P\\Rightarrow Q$, which is what "$P$ is sufficient for $Q$" means. A number past $10$ cannot fail to be past $5$. The reverse arrow is a different claim.

Swapping sufficient with necessary would have rejected this true sentence. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Sufficient names the tail of the arrow.

A number larger than $10$ is automatically larger than $5$, because $10$ itself is larger than $5$. Sufficient means that automatic push. No extra hypothesis is required.

Wanting a number between $5$ and $10$ to witness a failure of this direction would have been testing the converse. After isolating the unknown, the check is against $5$. The figure $10$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $5$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed. That strip is letter E's witness, not a hole in $P\\Rightarrow Q$. The recovered sufficient direction is the one that holds.

Necessary would be the other reading of the same arrow: $x>5$ is necessary for $x>10$. That sentence is also true, but it is not this letter. This letter only names sufficiency of the stricter cutoff.

so the statement is True.`,
      `**B.** → False

Necessary would require $Q\\Rightarrow P$: every $x>5$ would have to satisfy $x>10$. Test $x=7$:

$$7>5\\quad\\text{holds},\\qquad 7>10\\quad\\text{fails}$$

The whole interval $(5,10]$ supplies further counterexamples. $P$ is stronger than $Q$, not required by it.

**1.** $x=7$ is the named witness: $Q$ true, $P$ false.

**2.** $x=10$ itself: $10>5$ true, $10>10$ false. The closed end $10$ is another witness if $P$ is the strict $x>10$.

**3.** Thinking "larger threshold is necessary for the smaller one" would have mixed strength with necessity. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The stronger condition is sufficient, not necessary.

What would make $x>10$ necessary for $x>5$? If the two thresholds were equal, or if no reals lived in $(5,10]$. Neither is the case.

The recovered $Q\\Rightarrow P$ fails at $7$, Necessary would put $x>10$ on the required side of $x>5$. The strip $(5,10]$ is full of counterexamples. $7$ is the named one; $6$, $8$, $9$, and $10$ work the same way.

Strength and necessity run opposite to a common habit: the stricter threshold is sufficient for the weaker one, not necessary for it. $x>10$ is the stricter test.

so the statement is False.`,
      `**C.** → True

"$Q$ is necessary for $P$" is the same arrow $P\\Rightarrow Q$, read from the other end: $x>10$ cannot hold unless $x>5$ also holds. One true arrow supports two true vocabulary sentences. The necessary condition is the one the arrow points at.

Thinking "necessary means the larger number" would have wanted $x>10$ as necessary for $x>5$, which is letter B's false claim. So the letter reads the claim against $x>10$; $x>5$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $x>10$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

The recovered $P\\Rightarrow Q$ makes $x>5$ necessary for $x>10$, Reading the same true arrow from the head: $x>5$ is required for $x>10$, because nothing past $10$ can fail to be past $5$. That is letter A's arrow with the vocabulary word "necessary" instead of "sufficient."

One arrow, two true English sentences. The false English is letter B, which puts "necessary" on the tail.

so the statement is True.`,
      `**D.** → False

Equivalence needs both arrows. $P\\Rightarrow Q$ holds, but $Q\\Rightarrow P$ fails at $x=7$ (and on the whole interval $(5,10]$). So $x>5$ is strictly weaker than $x>10$. The two inequalities are not interchangeable.

Seeing both as "large $x$" would have called them equivalent. The path that matches the stem therefore holds $x$ fixed and only then reads the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Strength is not sameness: every $x>10$ is $>5$, not conversely.

Equivalence would need $x>10$ whenever $x>5$. The strip $(5,10]$ is exactly the set of points where $x>5$ holds and $x>10$ fails. Nonempty disagreement means the two predicates are not the same.

Treating them as "both large" would have ignored that strip. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Large is not a single predicate here; it has two cutoffs. Letter A bought one arrow. Letter E names a witness against the other. Two arrows would have been a biconditional, which the recovered pair is not.

What would make them equivalent? Equal cutoffs, or a restricted universe that never meets $(5,10]$. On the reals the strip is nonempty, so the predicates disagree.

so the statement is False.`,
      `**E.** → True

A counterexample to "$x>5$ implies $x>10$" must make the hypothesis true and the conclusion false. Check $x=7$: $7>5$ true, $7>10$ false. Any other point of $(5,10]$ would work equally well; $7$ is a perfectly good witness.

Testing $x=12$ would have found both sides true, which does not refute the implication. That is why $x=12$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Refutation needs the $(5,10]$ strip.

$x=7$ is inside $(5,10]$. Hypothesis of the converse true, conclusion false. That is a counterexample by definition.

$x=12$ would satisfy both sides and would not refute anything. $x=4$ would satisfy neither and would not refute anything. The witness has to sit in the strip, and $7$ does. The recovered converse $Q\\Rightarrow P$ therefore fails at this named point.

Any other interior point, $x=6$ or $x=9$ or $x=10$ itself (where $x>10$ fails and $x>5$ holds), would have done the same job. The claim named $7$, and $7$ is legal. Letter D's equivalence claim dies on this same strip; this letter only names one witness.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `**Part 1: Setup.**

Two conditions on a real number: $P$ says $x>10$ and $Q$ says $x>5$. "$P$ is sufficient for $Q$" is the arrow $P\\Rightarrow Q$. "$Q$ is necessary for $P$" is the same arrow read from the other end.

**Part 2: Relatives.**

Equivalence $P\\Leftrightarrow Q$ needs both arrows.

**Part 3: Solve.**

A counterexample to $Q\\Rightarrow P$ is a number that satisfies $Q$ and fails $P$.`,
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

P's file is score $750\\ge 700$ and ratio $35\\%<40\\%$. Both halves of $R$ hold, so P meets the bank's requirement in full. Meeting $R$ is not yet approval; that is a different claim. An "and" with two true parts is true.

Mixing this letter with letter B would have refused to say P satisfies $R$ because approval is not guaranteed. Once $R$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Satisfying $R$ and being approved are two questions.

The recovered $R$ is true for P, P's two numbers both clear their bars: $750$ is at least $700$, and $35\\%$ is below $40\\%$. Conjunction of two truths is true. The letter asks whether P satisfies $R$, not whether the bank must say yes.

Answering "we cannot be sure P satisfies $R$" would have been hedging about approval. The opposite verdict would need a different isolation than $R$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. $R$ is a file check, and P's file passes it.

so the statement is True.`,
      `**B.** → False

The wording is "approved only if $R$," i.e. $L\\Rightarrow R$. Meeting $R$ is necessary, not sufficient. P has $R$ true, but that does not force $L$. The reverse arrow $R\\Rightarrow L$ is not in the rule, so clearing the hurdle keeps the application alive without forcing a yes.

**1.** "Only if" names a necessary condition. P cleared it. Necessary conditions do not grant the prize.

**2.** Extra bank tests (identity, collateral) could still refuse P while $R$ holds. The stem never forbade those extra tests.

**3.** Treating "only if" as "if and only if" would have concluded approval. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. That is the classic strengthening of a necessary condition into a sufficient one.

What would make the claim true? A biconditional "approved if and only if $R$." The stem wrote "only if."

"Only if" is $L\\Rightarrow R$. P has $R$, which is the conclusion of that arrow, not the hypothesis. Affirming the conclusion does not yield the hypothesis. The bank can still refuse for reasons the stem never listed.

This is the same skeleton as a later memo about marketing and sales: $P\\Rightarrow Q$, $Q$, therefore $P$ is invalid. Here $L\\Rightarrow R$, $R$, therefore $L$ is the same invalid step. Q's file, which fails $R$, is a different letter: the contrapositive really does refuse Q. P's file meets $R$ and still does not force a yes.

Score $750$ and ratio $35\\%$ put P on the legal side of both gates. That is all the stem tells us about P. Approval is a further decision the "only if" rule does not make. Treating a cleared hurdle as a stamp is the error. The recovered rule is still $L\\Rightarrow R$, not $R\\Rightarrow L$.

so the statement is False.`,
      `**C.** → True

Q clears the score test $720\\ge 700$ but fails the ratio: $45\\%$ is not below $40\\%$. One false conjunct makes $R$ false. The two requirements are joined by "and," so one failure means Q does not satisfy both.

Treating the tests as an "or" would have let the score rescue Q. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered $R$ is a conjunction.

Q's ratio $45\\%$ is not below $40\\%$. Conjunction dies at one false conjunct, even though the score $720$ clears $700$. "Both required conditions" means both, not "the score one."

Letting the score override the ratio would have been running an or. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The recovered $R$ is an and. Letter B asked whether meeting $R$ forces approval; this letter only asks whether Q meets $R$, and the failed ratio already answers no. The gap $45-40=5$ percentage points is this letter's own comparison: $45$ is not below $40$, so the second conjunct is false.

so the statement is True.`,
      `**D.** → True

The contrapositive of $L\\Rightarrow R$ is $\\neg R\\Rightarrow\\neg L$. Q fails the ratio test, so $R$ is false, and the loan is not approved. Failing a necessary condition is enough to force refusal. The original "only if" is at full strength when read backwards through negation.

Thinking "we cannot conclude anything from a failed $R$" would have been thinking of a sufficient condition's failure, which is idle. That is why $R$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Necessary-condition failure is decisive.

The recovered contrapositive refuses Q, Failing a necessary condition refuses the loan. That is the contrapositive, and it is the one direction "only if" really licenses. Q fails $R$, so Q is not approved.

Thinking "maybe the bank will waive the ratio" would have been inventing a waiver the stem does not grant. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The stated rule has no waiver.

so the statement is True.`,
      `**E.** → False

A ratio below $40\\%$ is only one conjunct of $R$. An applicant with ratio $30\\%$ and score $650$ already fails the score test, so $R$ is false and approval is blocked. Even a full $R$ would still be only necessary, not sufficient. One half of $R$ never guarantees a loan.

Treating the ratio as a standalone sufficient condition would have skipped the score and skipped the "only if." The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence.Both mistakes are needed to accept this letter.

The recovered rule does not make a low ratio sufficient, A low ratio without a high enough score already fails $R$. A low ratio with a high score still only makes $R$ true, which is necessary, not sufficient. Either way, "ratio below $40\\%$ guarantees approval" is false.

Applicant Q is the wrong witness for this letter (Q's ratio is high). The witness is a low-score, low-ratio applicant, or even P, whose full $R$ still does not force $L$.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 6,
    solution_overview: `**Part 1: Setup.**

Write $R$ for the bank's requirement (credit score at least $700$ and debt-to-income ratio below $40\\%$) and $L$ for "the loan is approved." The wording is "approved only if $R$," which is the arrow

$$L\\Rightarrow R$$

So $R$ is necessary for approval; the reverse arrow $R\\Rightarrow L$ is not in the rule.

**Part 2: Relatives.**

The contrapositive $\\neg R\\Rightarrow\\neg L$ is guaranteed: fail $R$ and the loan is refused.

**Part 3: Solve.**

Because $R$ joins its two tests with "and", a single failure sinks the whole requirement.`,
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

Negating a universal produces an existential of the negated predicate. The quoted sentence is that negation, correctly formed, even though no real number actually has a negative square. Shape of the negation is a separate question from whether the negation is true.

Flipping $\\ge$ to $\\le$ instead of $<$ would have produced a different (wrong) negation. After isolating the unknown, the check is against $\\ge$. The figure $<$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $\\ge$ stays in the write-up. The recovered flip is $x^{2}<0$.

The recovered negation is $\\exists x\\,(x^{2}<0)$, The quoted existential is the mirror of the universal, with $x^{2}\\ge 0$ flipped to $x^{2}<0$. No real square is negative, so the existential is false, but the letter asked whether the negation was correctly formed, not whether it was true.

Writing $\\exists x\\,(x^{2}\\le 0)$ would have included $0$, which does not negate $\\ge 0$. That is the fork: $\\exists x\\,(x^{2}\\le 0)$ belongs to the recovered isolation, $\\ge 0$ belongs to the discarded mix. The strict flip is required.

so the statement is True.`,
      `**B.** → False

Squares of reals are never negative: $0^{2}=0$, $1^{2}=1$, $(-1)^{2}=1$. No real $x$ satisfies $x^{2}=-1$. The existence claim would succeed over the complex numbers, but the universe here is $\\mathbb R$. One missing solution in the universe is enough.

Remembering $i^{2}=-1$ would have left the stated universe. Keeping $i^{2}=-1$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. The recovered universe is the reals.

$x^{2}=-1$ has solutions in $\\mathbb C$, not in $\\mathbb R$. The universe is $\\mathbb R$, so the existence claim is false. Checking $0$, $1$, and $-1$ already shows squares landing on $0$ or $1$, never $-1$.

Leaving the universe would have answered a different course's question. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The recovered existential is empty over the reals, which is why the claim is false.

Squares of reals land in $[0,\\infty)$. The target $-1$ sits off that ray. Changing the universe to $\\mathbb C$ would make the claim true, because $i$ would be a witness. The stem named $\\mathbb R$, so that witness is unavailable.

so the statement is False.`,
      `**C.** → True

Negating an existential produces a universal of the negated predicate. To deny that some number exceeds $100$, every number must stay at or below it. The inequality flips from $>$ to $\\le$, not to $<$; $x=100$ must be included in the negation.

Writing $x<100$ would have left $100$ unaccounted for. Working from the isolated values, $x<100$ is the figure that is checked, not the detour that produced $100$. The recovered negation includes the boundary.

Denying "some $x>100$" means every $x$ satisfies the complementary inequality. Completing $>$ gives $\\le$, including $100$. Writing $x<100$ would have left a hole at $100$, and $100$ is a real number in the universe. That is the fork: $x<100$ belongs to the recovered isolation, $100$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered negation is a universal with a closed inequality. Keeping $\\exists$ and only flipped the inequality would have written another existential, which is not a negation. Once $\\exists$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Mirror the quantifier, then close the cut.

Writing $\\forall x\\,(x<100)$ would have excluded $100$, yet $100>100$ is already false, so $100$ is not a witness of the original existential and must survive in the negation. After isolating the unknown, the check is against $\\forall x\\,(x<100)$. The figure $100>100$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $\\forall x\\,(x<100)$ stays in the write-up. The closed inequality $\\le$ is the recovered complementary cut.

so the statement is True.`,
      `**D.** → True

Because $x$ is announced first, $y$ may be built from it. The recipe $y=x+1$ works for every positive $x$. The order $\\forall x\\,\\exists y$ licenses that dependence: each $x$ gets its own $y$. A bigger real always exists.

Trying to freeze one $y$ first would have been reading letter E's stronger claim. Once $y$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Dependence on $x$ is allowed here.

The recovered $\\forall x\\,\\exists y$ holds by $y=x+1$, For each positive $x$, pick $y=x+1$. Then $y>x$ holds, and $y$ is allowed to depend on $x$ because $\\exists y$ sits inside $\\forall x$. That recipe is extra arithmetic this letter is allowed: one new $y$ per $x$, not a scan the overview already displayed as a closed form.

Wanting a single $y$ for all $x$ would have been reading letter E. That is the fork: $y$ belongs to the recovered isolation, $x$ belongs to the discarded mix. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

so the statement is True.`,
      `**E.** → False

Now a single $y$ must be fixed first and then outrank every positive $x$. Whatever $y$ is offered, $x=\\max(y+1,1)$ is a positive number bigger than it. No champion exists. This is the classic quantifier-order trap: $\\exists y\\,\\forall x$ is far stronger than the true $\\forall x\\,\\exists y$.

**1.** Try $y=100$: then $x=101$ is a positive number exceeding it.

**2.** Try $y=10^{6}$: then $x=10^{6}+1$ still exceeds it. No finite champion works.

**3.** Reusing $y=x+1$ from letter D would have missed that $y$ is no longer allowed to depend on $x$. The recovered comparison therefore keeps $y=x+1$ and does not substitute $x$. The extra arithmetic here is naming, for each candidate $y$, a larger positive $x$.

What would make the reversed claim true? A largest positive real, which $\\mathbb R$ does not have.

The recovered $\\exists y\\,\\forall x$ fails, A single champion $y$ would have to exceed $1$, $2$, $100$, and every larger positive. No real number does that. For any candidate $y$, the extra arithmetic is $x=\\max(y+1,1)$, a positive real larger than $y$.

That is the order trap: $\\forall x\\,\\exists y$ is "there is always a bigger," which is true; $\\exists y\\,\\forall x$ is "there is a biggest," which is false on the positive reals.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `**Part 1: Setup.**

The universe is $\\mathbb R$.

**Part 2: Relatives.**

Negation of quantifiers follows the mirror rules

$$\\neg\\forall x\\,P(x)\\equiv\\exists x\\,\\neg P(x),\\qquad \\neg\\exists x\\,P(x)\\equiv\\forall x\\,\\neg P(x)$$

Squares of reals are never negative. Quantifier order matters: whichever variable is written first is chosen first, and later choices may depend on it.

**Part 3: Solve.**

$\\forall x\\,\\exists y$ lets $y$ be built from $x$; $\\exists y\\,\\forall x$ freezes one $y$ that must work for every $x$.`,
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

The criterion is $D\\Rightarrow S$, and $S$ demands both symptoms. Patient R holds the diagnosis, so both symptoms must be present. A diagnosis on A alone would be $D$ with $\\neg B$, which breaks the necessary condition..

Necessary means the diagnosis cannot occur without both symptoms. Patient R is already diagnosed, so both symptoms had to be present. A diagnosis on A alone would be $D$ with $\\neg B$, which breaks $D\\Rightarrow S$. The recovered necessary condition does not allow that gap. What would make the claim true? A different rule, 'diagnosed if A,' dropping B. The doctor wrote both..

R already holds the diagnosis, so the necessary condition $S$ must hold: both symptoms. A diagnosis on A alone would break that arrow. The recovered rule does not allow R to have been diagnosed without B. What would allow it? A weaker necessary condition naming only A. The doctor named both. Patient R is not a loophole. R is a case where both symptoms had to be present, even if we are not shown the chart.

so the statement is False.`,
      `**B.** → False

Patient S has A but not B, so the conjunction $S$ is false. The contrapositive $\\neg S\\Rightarrow\\neg D$ then blocks the diagnosis. Missing either half of an "and" is enough..

Patient S is missing B, so the conjunction $S$ is false. The recovered contrapositive then blocks the diagnosis. Missing either half of an 'and' is enough. Being close to having B is not having B. What would let S be diagnosed? Exhibiting B as well, and then still surviving the other exclusions. Without B the first gate never opens..

S exhibits A and not B, so the conjunction is false. The recovered contrapositive blocks diagnosis. Close to having B is not having B. One missing half of an and is enough. This is the same gate as missing A, other side. What would let S be diagnosed? Showing B as well, then still surviving the other exclusions. Without B the first gate never opens. The stem says S does not exhibit B.

so the statement is False.`,
      `**C.** → False

Sufficient would be $S\\Rightarrow D$. The doctor states the opposite: both symptoms do not guarantee the diagnosis, because other conditions must still be ruled out. So $S$ is necessary and not sufficient..

Sufficient would be $S\\Rightarrow D$: both symptoms force the diagnosis. The doctor explicitly refuses that reverse arrow. Other conditions must still be ruled out. The recovered rule is necessary and not sufficient. Naming both symptoms as sufficient is the classic swap of those two words. What would make sufficiency true? Dropping the 'however' clause. The stem keeps it..

Sufficient would force diagnosis from both symptoms. The doctor refuses that reverse arrow because other conditions must still be ruled out. The recovered rule is necessary and not sufficient. Naming both symptoms as sufficient swaps those two words. The 'however' clause is doing real work. Dropping it would make this letter true. The stem keeps it. A patient can show A and B and still wait on other tests, which is exactly the gap sufficiency would close..

The recovered necessary condition is both symptoms, and the recovered refusal of the reverse arrow is the 'however' clause. Sufficiency would close the gap the doctor left open: a patient with A and B still waiting on other tests. That living picture is what this letter denies is compatible with the rule. It is compatible. The rule is $D\\Rightarrow S$, not $S\\Rightarrow D$. Naming both symptoms as a guarantee swaps the ends of the arrow. Letter E says the same gap in 'impossible' language. This letter names the gap as a failed sufficiency claim.

so the statement is False.`,
      `**D.** → True

Missing symptom A makes the conjunction $S$ false, regardless of B. Then $\\neg S\\Rightarrow\\neg D$ blocks the diagnosis. An "and" is destroyed by either half, so no A means no diagnosis with X..

No A means the conjunction $S$ is false, regardless of B. The recovered contrapositive $\\neg S\\Rightarrow\\neg D$ then blocks X. An 'and' is destroyed by either half. This letter is the missing-A half; letter B was the missing-B half. Same gate, other side..

No A means $S$ is false, regardless of B. The recovered contrapositive then blocks X. An and is destroyed by either half. This letter is the missing-A half. Letter B was the missing-B half. Same recovered gate, other conjunct. 'Regardless of other symptoms' is the point of an and, not extra rhetoric.

so the statement is True.`,
      `**E.** → False

The doctor explicitly allows both symptoms while other conditions are still being excluded: $S$ without $D$. That open gap is what separates a necessary condition from a sufficient one..

The doctor allows both symptoms while other conditions are still being excluded: $S$ without $D$. That open gap is what separates necessary from sufficient. The recovered rule does not force diagnosis from the two symptoms alone. Claiming it is impossible is claiming sufficiency, which the stem refused. A patient can show A and B and still wait on other tests..

Both symptoms without diagnosis is allowed while other conditions are still being excluded. That open gap is what separates necessary from sufficient. Claiming it is impossible is claiming sufficiency, which the stem refused. The recovered rule leaves room for $S$ without $D$. Letter C already refused sufficiency; this letter is the same refusal in 'impossible' language. A living picture is a patient with A and B still waiting on a lab result.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 8,
    solution_overview: `**Part 1.** The setup.

Let $D$ mean diagnosed with condition X, and let $S$ mean the patient shows symptom A and symptom B.

**Part 2.** The operations.

"Diagnosed only if $S$" is the arrow $D\\Rightarrow S$: no diagnosis without both symptoms, which makes $S$ necessary. The doctor also says both symptoms do not guarantee the diagnosis, so the reverse arrow $S\\Rightarrow D$ is refused: $S$ is necessary but not sufficient. The contrapositive $\\neg S\\Rightarrow\\neg D$ blocks the diagnosis the moment either symptom is missing.

**Part 3.** The scans.

Patient R holds the diagnosis, so both symptoms must be present. Patient S has A but not B, so $S$ is false and the diagnosis is blocked. Both symptoms without diagnosis is allowed while other conditions are still being excluded.`,
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

Divisible by $3$ and by $5$ means divisible by $15$, and $15$ sits inside $\\{1,\\ldots,20\\}$. One witness is all an existential sentence needs..

One witness settles an existential. The recovered witness $15$ is in the range and divisible by $15$, hence by both $3$ and $5$. No other example is required. A universal would need every $x$; this letter is existential..

One witness settles an existential. The recovered $15$ is in $\\{1,\\ldots,20\\}$ and divisible by $3$ and by $5$. No second example is required. Searching the rest of the range is a universal habit imported into an existential claim. $15$ is enough. $30$ would be a second multiple of $15$, but it sits outside this universe.

so the statement is True.`,
      `**B.** → True

A universal implication on $\\{1,\\ldots,20\\}$ fails only at a point where the "if" holds and the "then" fails. Here the "if" is "divisible by $4$" and the "then" is "divisible by $2$." A counterexample would have to be a multiple of four in the range that is odd.

Part 3 already recorded that every multiple of $4$ in the range is even. The recovered list of those multiples is $\\{4,8,12,16,20\\}$, and each of them is even because a multiple of four can be written $4k=2(2k)$. There is no odd multiple of four among the integers, so there is none in this finite universe either. The implication therefore holds at every point of the range.

The trap is to fight the converse instead: "if even, then a multiple of four." That reverse arrow breaks at $x=2$, and it is the next letter. This letter is four-implies-even, which is the true direction. Another mix-up is to search for a counterexample at $x=15$ or at some other odd number. An odd number never triggers the "if," so it cannot kill the implication.

What would have to change for the opposite verdict is a universe containing a multiple of four that is not even. No such integer exists. Shrinking the universe cannot create a counterexample either; it can only omit some of the recovered multiples, all of which still satisfy the "then."

The recovered multiples of four are all even, so the statement is True.`,
      `**C.** → False

The flipped implication breaks at $x=2$: divisible by $2$, not by $4$. One counterexample inside the range kills a universal. Direction of the arrow is the whole issue..

The flipped implication breaks at $x=2$: even, not a multiple of $4$. One counterexample inside the range kills a universal. The recovered $2$ is that witness. Direction of the arrow is the whole issue. Letter B's true direction does not grant this reverse. What would make the reverse true? A universe with no even non-multiple of $4$, for instance only multiples of $4$. This universe contains $2,6,10,14,18$ as well..

The reverse breaks at $x=2$: even, not a multiple of $4$. One counterexample inside the range kills a universal. The recovered $2$ is that witness. Letter B's true direction does not grant this reverse. Other even witnesses $6,10,14,18$ would also work. What would make the reverse true? A universe with no even non-multiple of $4$, for instance only the multiples of $4$. This universe contains $2$. Direction of the arrow is the whole issue, and the recovered counterexample sits at the left end of the range..

The recovered counterexample $x=2$ is inside the universe, even, and not a multiple of $4$. That one point kills every universal of this reverse shape on this range. Other even non-multiples of four, $6,10,14,18$, would also work; one is enough. Letter B's true direction, four implies even, is a different arrow and remains true. Equivalence of the two implications would need both arrows. Only one holds. The false figure is 'even means multiple of four,' a school slogan that $2$ already refutes among the integers, and this universe includes $2$.

so the statement is False.`,
      `**D.** → True

An implication fails only where the "if" holds and the "then" fails, so its negation is "some prime in the range is even":

$$\\exists x\\,(\\mathrm{Prime}(x)\\land\\mathrm{Even}(x))$$

The quoted sentence is that negation, still restricted to $\\{1,\\ldots,20\\}$..

Negating a universal implication produces an existential failure case: some prime in the range is even. The quoted sentence is that negation, still restricted to $\\{1,\\ldots,20\\}$. The recovered form is $\\exists x\\,(\\mathrm{Prime}(x)\\land\\mathrm{Even}(x))$, not 'no primes are odd' and not 'all primes are even.'.

Negating a universal implication produces an existential failure case: some prime in the range is even. The quoted sentence is that negation, still restricted to $\\{1,\\ldots,20\\}$. The recovered form is not 'no primes are odd' and not 'all primes are even.' Those would be different, stronger or unrelated claims. This letter asks whether the quoted sentence is the correct negation, not yet whether that negation is true, which is letter E.

so the statement is True.`,
      `**E.** → True

The negation asks for an even prime in the range, and $2$ is one: divisors $1$ and $2$ only, and even. So the negated statement is true in this universe..

The even prime $2$ sits in the range. Divisors $1$ and $2$ only, and even. So the negated statement is true in this universe. The recovered witness is $2$. Without $2$ in the universe the existential negation would fail; with $2$ it holds. This letter asks whether that negation is true, not merely whether it is the correct negation, which was letter D..

The even prime $2$ sits in the range. Divisors $1$ and $2$ only, and even. So the negated statement is true in this universe. The recovered witness is $2$. Without $2$ in the universe the existential would fail; with $2$ it holds. This letter asks whether that negation is true, not merely whether it is the correct negation. Letter D settled the form. This letter settles the truth. One even prime is all an existential needs.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `**Part 1.** The setup.

The universe is the finite set $\\{1,2,\\ldots,20\\}$.

**Part 2.** The operations.

An existential sentence needs one working example. A universal sentence is destroyed by one counterexample. An implication $P\\Rightarrow Q$ fails only where $P$ holds and $Q$ fails, so its negation is an existential $P\\land\\neg Q$.

**Part 3.** The scans.

$15$ sits in the range and is divisible by $3$ and $5$. Every multiple of $4$ in the range is even. $x=2$ is even and not a multiple of $4$. The negation of "all primes are odd" is "some prime is even," and $2$ is that even prime in the range.`,
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

Banned means $v\\ge 3$. Person T has $v=2$, so $2\\ge 3$ fails and T is not banned. The biconditional "member iff not banned" then forces membership..

Banned means $v\\ge 3$. Person T has $2$, so $2\\ge 3$ fails. The recovered biconditional then forces membership. Not banned is exactly member. There is no third status. T is a member because the count sits below the cutoff, not because of an unstated appeal..

Banned means $v\\ge 3$. Person T has $2$, below the cutoff, so not banned. The recovered biconditional then forces membership. There is no third status and no appeal. T is a member because the count sits below $3$, not because $2$ is close to $3$ in some softer sense. Thresholds do not average.

so the statement is True.`,
      `**B.** → False

Person U has $v=4$, and $4\\ge 3$, so U is banned. The same biconditional makes banned the exact opposite of member, so U is not a member..

Person U has $4$, and $4\\ge 3$, so U is banned. The recovered biconditional makes banned the exact opposite of member, so U is not a member. A high violation count cannot be rescued by some other unstated factor. The rule named only the cutoff..

Person U has $4$, which meets $v\\ge 3$, so U is banned, hence not a member. The recovered biconditional makes those exact opposites. A high count cannot be rescued by an unstated factor. The rule named only the cutoff. U is the other side of T: above the line versus below it.

so the statement is False.`,
      `**C.** → True

"Member iff not banned" means the two lists never overlap and never leave a gap: every person is in exactly one of them. That is the definition of complementary sets..

Member iff not banned means the two lists never overlap and never leave a gap. The recovered picture is complementary sets: every person is in exactly one of them. That is the definition of complementary, not a coincidence of T and U..

Member iff not banned means the two lists never overlap and never leave a gap. Every person is in exactly one of them. The recovered picture is complementary sets. That is the definition, not a coincidence of T and U. A person cannot be both member and banned, and cannot be neither, under this biconditional.

so the statement is True.`,
      `**D.** → False

"Three or more" includes $v=3$. Check $3\\ge 3$: true, so a person with exactly $3$ violations is banned, hence not a member. Once banned means $v\\ge 3$, the count $v=3$ is not discretionary..

Three or more includes $3$. Check $3\\ge 3$: true, so a person with exactly $3$ violations is banned, hence not a member. Once banned means $v\\ge 3$, the count $v=3$ is not discretionary. The false claim treats $3$ as a maybe. The recovered rule has no maybe. What would make $v=3$ ambiguous? A different cutoff, such as 'more than $3$,' or an extra unstated factor. The stem wrote $3$ or more, and that is a closed test. Exactly $3$ is on the banned side, not on the fence..

Three or more includes $3$. Check $3\\ge 3$: true, so exactly $3$ is banned, hence not a member. The recovered rule has no maybe at the boundary. Treating $v=3$ as discretionary is a false figure: a closed test sold as an open one. What would make $v=3$ ambiguous? A different cutoff such as 'more than $3$,' or an extra unstated factor. The stem wrote $3$ or more, a closed test. Exactly $3$ is on the banned side, not on the fence. Letter E asks whether any $v$ is ambiguous; this letter checks the most tempting $v$ and finds it decided..

The recovered cutoff $v\\ge 3$ is a closed test. Exactly $3$ meets it, so exactly $3$ is banned. Treating the boundary as a maybe is a false figure: a fence sold as a fog. What would make $v=3$ discretionary? Writing 'more than $3 or adding an unstated review. The stem wrote $3$ or more, and that phrase includes $3$. Letter E then asks whether any count is left open; after this letter the answer is already no at the most tempting count. Counts $0,1,2$ are members; $3$ and above are banned. The partition of the number line at $3$ has no interior hole.

so the statement is False.`,
      `**E.** → False

For each integer $v$, the test $v\\ge 3$ returns a definite yes or no. Counts $0,1,2$ are members; counts $3,4,5,\\ldots$ are banned. No $v$ is left undecided..

For each integer $v$, the test $v\\ge 3$ returns a definite yes or no. Counts $0,1,2$ are members; counts $3,4,5,\\ldots$ are banned. No $v$ is left undecided. The recovered rule is a complete partition of the possible counts. Existence of an ambiguous $v$ would need a hole in that partition. There is no hole. Letter D already checked the boundary $v=3$ and found it banned, not ambiguous..

For each integer $v$, the test $v\\ge 3$ returns a definite yes or no. Counts $0,1,2$ are members; counts $3,4,5,\\ldots$ are banned. No $v$ is left undecided. The recovered rule is a complete partition of the possible counts. Existence of an ambiguous $v$ would need a hole in that partition. There is no hole. Letter D already checked the boundary $v=3$ and found it banned, not ambiguous. 'Genuinely ambiguous from the given rule alone' would require the rule not to mention a cutoff for some $v$. It mentions $v\\ge 3$ for all of them.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `**Part 1.** The setup.

The club rule is a biconditional: a person is a member if and only if they are not on the banned list. The banned list is the people with $3$ or more rule violations. Writing $v$ for the violation count, banned means $v\\ge 3$, and membership is the exact opposite.

**Part 2.** The operations.

Because the two conditions are exact opposites, the two lists never overlap and never leave a gap. For each integer $v$, the test $v\\ge 3$ returns a definite yes or no.

**Part 3.** The scans.

Person T has $v=2$, so not banned, hence a member. Person U has $v=4$, so banned, hence not a member. Counts $0,1,2$ are members; counts $3,4,5,\\ldots$ are banned. Exactly $3$ is banned.`,
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

A universal $\\forall x\\,P(x)$ is false as soon as one $x$ has $\\neg P(x)$. That one counterexample is a complete disproof. Nothing further is required..

A universal dies at one counterexample. Nothing further is required. The recovered method is that one-witness disproof, not a need to check every prime. Confirming examples never do this job; that is letter E..

A universal dies at one counterexample. Nothing further is required. The recovered method is that one-witness disproof. Confirming examples never do this job; that is letter E, the reverse. You do not need to inspect $3,5,7$ once $2$ is on the table. One failure is a complete disproof of 'all.'.

The recovered method is one-witness disproof of a universal. You do not need a second even prime. One failure is a complete disproof of 'all.'

so the statement is True.`,
      `**B.** → True

A counterexample to "all primes are odd" must be prime and fail to be odd. The number $2$ has divisors $1$ and $2$ only, so it is prime, and it is even. Both halves succeed..

A counterexample must be prime and fail to be odd. The number $2$ has divisors $1$ and $2$ only, so it is prime, and it is even. Both halves succeed. The recovered witness is $2$. Some other even composite would fail the prime half and would not be a counterexample..

A counterexample must be prime and fail to be odd. The number $2$ has divisors $1$ and $2$ only, so it is prime, and it is even. Both halves succeed. The recovered witness is $2$. An even composite such as $4$ would fail the prime half and would not be a counterexample. $9$ is odd and composite, useless here. $2$ is the unique even prime, and it is enough.

so the statement is True.`,
      `**C.** → True

$P\\Rightarrow Q$ fails only in the case $P\\land\\neg Q$. A contradiction proof assumes that unique failure case and derives an impossibility, showing the failure cannot occur. The description in the statement is that method..

An implication fails only on $P\\land\\neg Q$. A contradiction proof assumes that unique failure case and derives an impossibility. The description in the statement is that method. Opening with the conclusion instead is letter D's mistake, a different method..

An implication fails only on $P\\land\\neg Q$. A contradiction proof assumes that unique failure case and derives an impossibility. The description in the statement is that method. Opening with the conclusion instead is letter D's mistake. This letter is the correct opening described in the abstract; letter D is the incorrect opening on $\\sqrt{2}$.

so the statement is True.`,
      `**D.** → False

To prove "$\\sqrt{2}$ is irrational" by contradiction, assume the negation: $\\sqrt{2}$ is rational, so $\\sqrt{2}=\\frac{a}{b}$ in lowest terms. Assuming irrationality at the start would assume the conclusion rather than its opposite..

To prove $\\sqrt{2}$ is irrational by contradiction, assume the negation: $\\sqrt{2}$ is rational, so $\\sqrt{2}=a/b$ in lowest terms. Assuming irrationality at the start would assume the conclusion rather than its opposite. The recovered legal opening is the rational case. Opening with the target itself leaves nothing to contradict. That is not a contradiction proof. It is restating the claim and stopping. What would make the described opening legal? A different target, such as proving $\\sqrt{2}$ is rational, whose negation is irrationality. The target here is irrationality, so the opening must be rationality..

To prove irrationality by contradiction, assume rationality: $\\sqrt{2}=a/b$ in lowest terms. Assuming irrationality at the start would assume the conclusion rather than its opposite. The recovered legal opening is the rational case. Opening with the target itself leaves nothing to contradict. That is not a contradiction proof. It is restating the claim and stopping. What would make the described opening legal? A different target, such as proving rationality, whose negation is irrationality. The target here is irrationality, so the opening must be rationality. The classic writeup begins 'suppose $\\sqrt{2}$ is rational,' not 'suppose it is irrational.'.

The recovered legal opening is 'suppose $\\sqrt{2}$ is rational.' Opening with the conclusion is not a contradiction proof. It is restating the claim. The classic writeup begins with a fraction in lowest terms, not with the word irrational. What would make the described opening legal? Proving the opposite target. The target here is irrationality, so the opening must be rationality. Letter A's smallest-positive proof shows the correct pattern: assume the thing you want to kill. This writeup assumes the thing you want to keep.

so the statement is False.`,
      `**E.** → False

One confirming example never proves a universal claim. The odd prime $3$ fits "all primes are odd" and still leaves $2$ untested. Checking finitely many favourable cases never rules out a later counterexample..

One confirming example never proves a universal. The odd prime $3$ fits 'all primes are odd' and still leaves $2$ untested. Checking finitely many favourable cases never rules out a later counterexample. The recovered lesson is the reverse of letter A: one counterexample kills a universal, one success does not prove one. Existential claims are the ones settled by a single success..

One confirming example never proves a universal. The odd prime $3$ fits 'all primes are odd' and still leaves $2$ untested. Checking finitely many favourable cases never rules out a later counterexample. The recovered lesson is the reverse of letter A: one counterexample kills a universal, one success does not prove one. Existential claims are the ones settled by a single success. This claim is universal, so a pile of odd primes is not a proof. Letter B's $2$ is sitting unexamined in any such pile.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `**Part 1.** The setup.

A universal claim $\\forall x\\,P(x)$ is false as soon as one $x$ has $\\neg P(x)$. One counterexample is a complete disproof. The reverse does not work: a pile of confirming examples never proves a universal.

**Part 2.** The operations.

A contradiction proof of an implication assumes the unique failure case $P\\land\\neg Q$ and derives an impossibility. To prove a claim by contradiction, assume its negation, not the claim itself.

**Part 3.** The scans.

The number $2$ is prime and even, so it disproves "all primes are odd." A contradiction proof of "$\\sqrt{2}$ is irrational" assumes $\\sqrt{2}$ is rational, not irrational. The odd prime $3$ fits "all primes are odd" and still leaves $2$ untested.`,
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

The rule is $P\\Rightarrow Q$. An implication is false only in the row $P$ true, $Q$ false, i.e. rain and an uncancelled picnic. The quoted negation is that unique failure case..

An implication is false only in the row $P$ true, $Q$ false. The quoted negation is rain and an uncancelled picnic, that unique failure case. The recovered $\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$ is that row, not another if-then rule, and not the inverse..

An implication is false only in the row rain and uncancelled picnic. The quoted negation is that unique failure case. The recovered $\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$ is that row, not another if-then, not the inverse, not the converse. One rainy uncancelled picnic would violate the organizer. A dry cancellation would not.

so the statement is True.`,
      `**B.** → False

The converse $Q\\Rightarrow P$ reads the rule backwards. On a dry venue-conflict day, $P$ is false and $Q$ is true: the original holds vacuously, while the converse fails. The organizer never promised that rain is the only cancelling cause..

The converse $Q\\Rightarrow P$ reads the rule backwards. On a dry venue-conflict day, $P$ is false and $Q$ is true: the original holds vacuously, while the converse fails. The organizer never promised that rain is the only cancelling cause. The recovered test day is already a counterexample to the converse. Equivalence would need both arrows. Only one is given..

The converse reads the rule backwards: cancelled, therefore rain. On a dry venue-conflict day, $P$ is false and $Q$ is true: the original holds vacuously, the converse fails. The organizer never promised that rain is the only cancelling cause. The recovered test day is already a counterexample to the converse. Equivalence would need both arrows. Only one is given. Letter E's contrapositive is the safe rewrite; this converse is not.

so the statement is False.`,
      `**C.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$. On that same dry cancelled day, $\\neg P$ is true and $\\neg Q$ is false, so the inverse fails while the original still holds. Inverse pairs with converse, not with the original..

The inverse is $\\neg P\\Rightarrow\\neg Q$. On that same dry cancelled day, $\\neg P$ is true and $\\neg Q$ is false, so the inverse fails while the original still holds. Inverse pairs with converse, not with the original. The recovered table already marks inverse as not following from the rule. Equivalence with the original is a false figure..

The inverse is no rain, therefore not cancelled. On that same dry cancelled day, the inverse fails while the original still holds. Inverse pairs with converse, not with the original. The recovered table already marks inverse as not following from the rule. Equivalence with the original is a false figure. Letter D will assign that day in detail; this letter is the nonequivalence.

so the statement is False.`,
      `**D.** → True

Assign the venue-conflict day: rain false, cancelled true. The inverse demanded "no rain, so no cancellation" and the cancellation happened, so the inverse is broken. The original $P\\Rightarrow Q$ is true whenever $P$ is false, so a dry cancellation never tests the organizer's promise..

Assign the venue-conflict day: rain false, cancelled true. The inverse demanded 'no rain, so no cancellation' and the cancellation happened, so the inverse is broken. The original $P\\Rightarrow Q$ is true whenever $P$ is false, so a dry cancellation never tests the organizer's promise. The recovered test day is built to separate those two. This letter is that separation, not a new assignment of truth values..

Venue-conflict day: rain false, cancelled true. The inverse demanded no cancellation and the cancellation happened, so the inverse is broken. The original $P\\Rightarrow Q$ is true whenever $P$ is false, so a dry cancellation never tests the organizer's promise. The recovered test day is built to separate those two. This letter is that separation. The original promised something only about rainy days. This day was dry. The inverse promised something about dry days, and this day broke it..

The recovered test day is dry and cancelled. The original promised nothing about dry days, so it survives. The inverse promised no cancellation on dry days, so it dies. That split is the whole letter. A rainy uncancelled picnic would have killed the original instead; this day was not rainy. Venue conflict is a second cancelling cause the organizer never ruled out. The converse would have required rain as the only cause; the inverse would have required dry weather to save the picnic. Neither relative is the original, and this day is built to show that.

so the statement is True.`,
      `**E.** → True

Swap and negate: $\\neg Q\\Rightarrow\\neg P$, "if the picnic was not cancelled, then it did not rain." That is the contrapositive, which always shares the original's truth value. Once the organizer's rule is granted, this rewriting comes free with it..

Swap and negate: $\\neg Q\\Rightarrow\\neg P$, if the picnic was not cancelled, then it did not rain. That is the contrapositive, which always shares the original's truth value. Once the organizer's rule is granted, this rewriting comes free with it. The recovered table marks that row yes. Converse and inverse do not come free; this one does..

Swap and negate: if not cancelled, then no rain. That is the contrapositive, which always shares the original's truth value. Once the organizer's rule is granted, this rewriting comes free. The recovered table marks that row yes. Converse and inverse do not come free; this one does. It is the same promise in a different coat, not a new meteorological claim.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 12,
    solution_overview: `**Part 1.** The setup.

The organizer's promise is a conditional: it fires only when it rains. Write $P$ for "it rains" and $Q$ for "the picnic is cancelled", so the rule is $P\\Rightarrow Q$.

**Part 2.** The operations.

A conditional makes no promise at all when its "if" part is false. The only way the rule can be broken is $\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$. The contrapositive always agrees with the original. The converse and inverse do not.

**Part 3.** The scans.

On the venue-conflict day it did not rain ($P$ false) but the picnic was cancelled ($Q$ true). The inverse breaks; the original promised nothing, because it never rained, so it comes through untouched.`,
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

Inclusive "or" means at least one of $X,Y$. The $15$ both-buyers have both true, so they satisfy "at least one" and stay inside the count. Exclusive or would drop those $15$; mathematical or does not..

Inclusive or means at least one of $X,Y$. The $15$ both-buyers have both true, so they satisfy at least one and stay inside the count. Exclusive or would drop those $15$; mathematical or does not. The recovered inclusive reading keeps them. This letter is the meaning of 'or,' not yet the count $60$..

Inclusive or means at least one. The $15$ both-buyers have both true, so they stay inside. Exclusive or would drop those $15$; mathematical or does not. The recovered inclusive reading keeps them. This letter is the meaning of or, not yet the count $60$, which is letter B.

so the statement is True.`,
      `**B.** → True

Adding $40$ and $35$ counts the $15$ both-buyers twice, so subtract them once:

$$\\lvert X\\cup Y\\rvert=40+35-15=60$$.

Adding $40$ and $35$ counts the $15$ both-buyers twice, so subtract them once. The recovered inclusive union is $60$. That $60$ includes the $15$, matching letter A's reading. Reporting $75$ forgets the subtraction. Reporting $45$ answers the exclusive count, the next letter..

Adding $40$ and $35$ counts the $15$ twice, so subtract once. The recovered inclusive union is $60$. That $60$ includes the $15$, matching letter A's reading. Reporting $75$ forgets the subtraction. Reporting $45$ answers the exclusive count, letter C. Inclusion-exclusion is the same arithmetic as in the chess-club task, now on shoppers..

The recovered inclusive count is $60$, both-buyers included once. Reporting $45$ answers XOR. Reporting $75$ forgets the subtraction.

so the statement is True.`,
      `**C.** → True

Exclusive or keeps only the two outer regions. X-only is $40-15=25$ and Y-only is $35-15=20$, so

$$25+20=45$$

Equivalently, drop the both-buyers from the inclusive union: $60-15=45$..

Exclusive or keeps only the two outer regions. X-only is $40-15=25$ and Y-only is $35-15=20$, so $25+20=45$. Equivalently, drop the both-buyers from the inclusive union: $60-15=45$. The recovered XOR count is $45$. This is a different connective from letter B, and the two recovered counts $60$ and $45$ must not be swapped..

Exclusive or keeps only the two outer regions: $25+20=45$. Dropping both-buyers from the inclusive $60$ is the same $45$. The recovered XOR count is $45$. This is a different connective from letter B, and the two recovered counts $60$ and $45$ must not be swapped. Exactly one is not at least one. The $15$ both-buyers are the difference between those two recovered numbers.

so the statement is True.`,
      `**D.** → True

The four truth rows of $P\\Leftrightarrow Q$ are TT true, FF true, TF false, FT false. The two true rows are exactly the rows where $P$ and $Q$ agree. "Always the same truth value" is that description..

The four truth rows of $P\\Leftrightarrow Q$ are TT true, FF true, TF false, FT false. The two true rows are exactly the rows where $P$ and $Q$ agree. Always the same truth value is that description. The recovered biconditional is agreement, not 'at least one true,' which is letter E's false figure..

A biconditional is true when both parts agree: both true or both false. The recovered description is agreement of truth values. The mixed rows are false. 'Always the same truth value' is that four-row picture, not 'at least one true,' which is letter E.

so the statement is True.`,
      `**E.** → False

"At least one true" is the truth condition for $P\\lor Q$, not for $P\\Leftrightarrow Q$. The mixed row $P$ true, $Q$ false has at least one true part, yet the biconditional is false there..

At least one true is the truth condition for $P\\lor Q$, not for $P\\Leftrightarrow Q$. The mixed row $P$ true, $Q$ false has at least one true part, yet the biconditional is false there. The recovered connective is agreement of truth values. Naming it as a disguised or is a false figure. What would make 'at least one true' the right condition? An inclusive or, letter A, not a biconditional. The four-row table already shows two agreement rows and two disagreement rows, and only agreement makes $\\Leftrightarrow$ true..

At least one true is the truth condition for or, not for a biconditional. The mixed row, one true and one false, has at least one true part, yet $\\Leftrightarrow$ is false there. The recovered connective is agreement. Naming it as a disguised or is a false figure. What would make 'at least one true' the right condition? An inclusive or, letter A, not a biconditional. The four-row table already shows two agreement rows and two disagreement rows, and only agreement makes the biconditional true. Letter D named that agreement correctly; this letter names the wrong connective's condition..

The recovered biconditional is agreement of truth values, two true rows and two false rows. 'At least one true' is or's condition, true on three rows. Those connectives disagree on the mixed rows. Naming a biconditional as an or is a false figure. Letter A already fixed inclusive or as at least one. This letter's claim copies that condition onto $\\Leftrightarrow$. Item-level: $P$ true and $Q$ false has at least one true part and a false biconditional. That mixed row is the witness. What would make 'at least one true' honest here? Replacing the biconditional by an inclusive or. The stem asked about a biconditional.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 13,
    solution_overview: `**Part 1.** The setup.

With $|X|=40$, $|Y|=35$ and $|X\\cap Y|=15$, the survey splits into $15$ both-buyers, $25$ who bought only X, and $20$ who bought only Y.

**Part 2.** The operations.

Inclusive "or" means at least one, so both-buyers stay inside. Exclusive "or" keeps exactly one. A biconditional is true when both parts agree and false the moment their truth values differ.

**Part 3.** The scans.

Inclusive union: $|X\\cup Y|=40+35-15=60$. Exclusive count: $25+20=45$. The mixed row of a biconditional, one true and one false, has at least one true part and a false biconditional.`,
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

K cleared attendance ($85\\%\\ge 80\\%$) but scored $48<50$, so $F$ is false and $A\\land F$ collapses. One false conjunct makes the whole pass condition false. Near-misses do not count: $48$ is not $50$..

K cleared attendance and missed the exam cutoff. One false conjunct makes the whole pass condition false. Near-misses do not count: $48$ is not $50$. The recovered $A\\land F$ is false for K. A high attendance cannot repair a $48$. Thresholds do not average..

K cleared attendance and missed the exam cutoff. One false conjunct sinks the pass condition. Near-misses do not count: $48$ is not $50$. The recovered $A\\land F$ is false for K. High attendance cannot repair a $48$. Thresholds do not average. Letter D is this same cutoff in general language; this letter is K's file.

so the statement is False.`,
      `**B.** → False

L's $90$ clears the exam, but $75\\%<80\\%$ fails attendance. The conjunction never lets the strong half rescue the weak half, so L does not pass..

L's $90$ clears the exam, but $75\\%<80\\%$ fails attendance. The recovered conjunction never lets the strong half rescue the weak half, so L does not pass. This is the other missing half from letter A. Compensation is letter C, and it fails for the same reason..

L's $90$ clears the exam, but $75\\%$ fails attendance. The recovered conjunction never lets the strong half rescue the weak half. Compensation is letter C, and it fails for the same recovered reason. L is the other missing half from letter A. Two students, two different failed gates, same false pass.

so the statement is False.`,
      `**C.** → False

Compensation would let a high exam score repair low attendance. L is the test file: $90$ on the exam with $75\\%$ attendance still yields $A$ false, so $A\\land F$ is false. Exam points cannot repair attendance..

Compensation would let a high exam score repair low attendance. L is the test file: $90$ on the exam with $75\\%$ attendance still yields $A$ false, so $A\\land F$ is false. Exam points cannot repair attendance. The recovered rule checks two thresholds, not a weighted sum. What would make compensation true? A different rule that averages the two numbers. The stem wrote an and..

Compensation would let a high exam repair low attendance. L is the test file: $90$ with $75\\%$ still yields $A$ false, so the and is false. Exam points cannot repair attendance. The recovered rule checks two thresholds, not a weighted sum. What would make compensation true? A different rule that averages the two numbers. The stem wrote an and. Letter E will show that this and can even reverse an average ranking.

so the statement is False.`,
      `**D.** → True

A score below $50$ makes $F$ false, whether the score is $49$ or $10$. For K, $48<50$ already falsifies $F$, so $A\\land F$ is false even though attendance cleared. A threshold recognises no near-misses..

A score below $50$ makes $F$ false, whether the score is $49$ or $10$. For K, $48<50$ already falsifies $F$, so $A\\land F$ is false even though attendance cleared. A threshold recognises no near-misses. The recovered cutoff is $50$, not 'close to $50$.' This letter is the exam half of the and; letter A already applied it to K..

A score below $50$ makes $F$ false, whether $49$ or $10$. For K, $48<50$ already falsifies $F$. A threshold recognises no near-misses. The recovered cutoff is $50$, not 'close to $50$.' This letter is the exam half of the and in general; letter A already applied it to K. 'No matter how close' is the point of a cutoff, not extra rhetoric.

so the statement is True.`,
      `**E.** → True

Compare $(80\\%,50)$ with $(79\\%,100)$. The first clears both tests and passes; the second fails on attendance, yet looks far stronger on an average. Because the rule checks two thresholds instead of one average, reversals like this really can happen..

Compare $(80\\%,50)$ with $(79\\%,100)$. The first clears both tests and passes; the second fails on attendance, yet looks far stronger on an average. Because the rule checks two thresholds instead of one average, reversals like this really can happen. The recovered rule is not an average. A student who 'did better overall' can still fail one gate. That is the point of an and of two cutoffs, not a bug in the wording..

Compare $(80\\%,50)$ with $(79\\%,100)$. The first clears both tests and passes; the second fails attendance, yet looks far stronger on an average. Because the rule checks two thresholds instead of one average, reversals like this really can happen. The recovered rule is not an average. A student who did better overall can still fail one gate. That is the point of an and of two cutoffs, not a bug in the wording. K and L already show two different failed gates; this letter notes that a passer can look weaker than a failer on a blended number the rule never computes..

The recovered rule never adds attendance to exam score. A passer at $(80,50)$ can look weaker than a failer at $(79,100)$ on any blended average the rule does not compute. That reversal is not a bug. It is what two separate thresholds do. K failed the exam gate; L failed the attendance gate; a third student can clear both by a whisker and still 'look worse' than L. The claim is that such a pair can exist, and the recovered and of two cutoffs is exactly the mechanism that allows it. An average rule would have ranked $(79,100)$ above $(80,50)$ and passed the stronger-looking file. This rule does not average.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 14,
    solution_overview: `**Part 1.** The setup.

Passing is governed by an and: attendance of at least $80\\%$ and a final score of at least $50$. Writing $A$ and $F$ for those two conditions, pass holds exactly when $A\\land F$ holds.

**Part 2.** The operations.

The words "if and only if" mean the list is complete. And $\\land$ is unforgiving: one false part sinks the whole condition. The rule never adds the two numbers together.

**Part 3.** The scans.

Student K: $85\\%$ attendance so $A$ true; $48$ on the final so $F$ false; K does not pass. Student L: $75\\%$ attendance so $A$ false; $90$ on the final so $F$ true; L does not pass. A student at $(80\\%,50)$ passes while a student at $(79\\%,100)$ fails.`,
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

The filter is $\\neg S\\land\\neg O$. Item M is on sale, so $\\neg S$ is already false, and a false conjunct hides M. Being in stock does not rescue an on-sale item..

The filter is $\\neg S\\land\\neg O$. Item M is on sale, so $\\neg S$ is already false, and a false conjunct hides M. Being in stock does not rescue an on-sale item. The recovered AND hides M. Letter E's K is the item that passes both halves..

The filter is not-sale and in-stock. Item M is on sale, so the first half fails, and M is hidden. Being in stock does not rescue an on-sale item. The recovered AND hides M. Letter E's K is the item that passes both halves. M is the sale-side failure.

so the statement is False.`,
      `**B.** → False

Item N is out of stock, so $\\neg O$ fails. The same conjunction fails on the other half, so N is hidden too. Not being on sale is not enough..

Item N is out of stock, so $\\neg O$ fails. The same conjunction fails on the other half, so N is hidden too. Not being on sale is not enough. The recovered filter is both halves, not one. This is M's story on the other conjunct..

Item N is out of stock, so the second half fails. The recovered filter hides N too. Not being on sale is not enough. This is M's story on the other conjunct. One false half of an and is enough, the same unforgiving and as in the passing-course task.

so the statement is False.`,
      `**C.** → False

De Morgan requires the connective to flip: $\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$, not $\\neg S\\lor\\neg O$. On item M, the wrong OR form would display M (in stock), while the real AND hides M. Two formulas that disagree on one item are not equivalent..

De Morgan requires the connective to flip: $\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$, not $\\neg S\\lor\\neg O$. On item M, the wrong OR form would display M (in stock), while the real AND hides M. Two formulas that disagree on one item are not equivalent. The recovered rewrite is the AND. Keeping the OR is a false figure: the NOT moved in and the connective stayed, which is the standard De Morgan slip. What would make the OR form equivalent? Nothing; it is a different connective. Item M is the witness that they disagree..

De Morgan requires the connective to flip: negated or becomes and of negations, not or of negations. On item M, the wrong OR form would display M (in stock), while the real AND hides M. Two formulas that disagree on one item are not equivalent. The recovered rewrite is the AND. Keeping the OR is a false figure: the NOT moved in and the connective stayed, the standard De Morgan slip. What would make the OR form equivalent? Nothing; it is a different connective. Item M is the witness that they disagree. An OR of negations would display almost the whole catalogue, since nearly every item fails at most one of the two tests..

The recovered rewrite is AND of the two negations. Keeping OR after the NOT moves in is the standard De Morgan slip, and item M is the witness that the two formulas disagree: in stock, on sale, hidden by AND, displayed by the wrong OR. Almost the whole catalogue would pass an OR of negations, because nearly every item fails at most one of the two tests. The filter was written to hide sale items and out-of-stock items, both, which is AND. Letter D names that AND in English. This letter refuses the OR form. Two formulas that disagree on M are not equivalent.

so the statement is False.`,
      `**D.** → True

Push the NOT inside with the connective flip:

$$\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$$

In English that is "not on sale and not out of stock," i.e. neither on sale nor out of stock..

Push the NOT inside with the connective flip and you get not on sale and not out of stock, i.e. neither on sale nor out of stock. The recovered De Morgan identity is that AND. This letter is the correct rewrite; letter C was the incorrect one. They are not interchangeable..

Push the NOT inside with the connective flip and you get neither on sale nor out of stock. The recovered De Morgan identity is that AND. This letter is the correct rewrite; letter C was the incorrect one. They are not interchangeable. In English the filter shows an item only if it is clearance-free and in stock, both.

so the statement is True.`,
      `**E.** → True

Item K is not on sale and is in stock, so both $\\neg S$ and $\\neg O$ hold. The filter displays K..

Item K is not on sale and is in stock, so both $\\neg S$ and $\\neg O$ hold. The recovered filter displays K. M failed the first half, N failed the second, K passes both. That is the neither-nor reading of the AND. Displaying K is not a licence to display M or N..

Item K is not on sale and is in stock, so both halves hold. The recovered filter displays K. M failed the first half, N the second, K passes both. That is the neither-nor reading of the AND. Displaying K is not a licence to display M or N. K is the one item among the three that sits in the displayed region.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 15,
    solution_overview: `**Part 1.** The setup.

Let $S$ mean the item is on sale and $O$ mean the item is out of stock. The filter displays an item when $\\neg(S\\lor O)$ is true.

**Part 2.** The operations.

De Morgan's law turns a negated OR into an AND of the two negations: $\\neg(S\\lor O)\\equiv\\neg S\\land\\neg O$. The connective flips as the NOT moves in. Keeping the OR would be the wrong rewrite.

**Part 3.** The scans.

M is on sale, so $\\neg S$ is false, hidden. N is out of stock, so $\\neg O$ is false, hidden. K is neither on sale nor out of stock, so both halves hold, displayed.`,
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

From $P\\Rightarrow Q$, the contrapositive is $\\neg Q\\Rightarrow\\neg P$: no rate rise, therefore inflation does not exceed $10\\%$, i.e. at most $10\\%$. That is the quoted sentence. "Not above $10$" and "at most $10$" are the same cutoff..

From $P\\Rightarrow Q$, the contrapositive is $\\neg Q\\Rightarrow\\neg P$: no rate rise, therefore inflation does not exceed $10\\%$, i.e. at most $10\\%$. That is the quoted sentence. Not above $10$ and at most $10$ are the same cutoff. The recovered contrapositive is that rewriting, which always agrees with the original..

The contrapositive is no rate rise, therefore inflation at most $10\\%$. Not above $10$ and at most $10$ are the same cutoff. The recovered rewriting always agrees with the original. This is the one safe relative. Converse and inverse are not safe, later letters.

so the statement is True.`,
      `**B.** → False

The converse $Q\\Rightarrow P$ would say every rate rise comes from inflation above $10\\%$. A currency-defence rise at $4\\%$ inflation has $Q$ true and $P$ false: the original is untouched (because $P$ is false), while the converse fails..

The converse $Q\\Rightarrow P$ would say every rate rise comes from inflation above False0\\%$. A currency-defence rise at $4\\%$ inflation has $Q$ true and $P$ false: the original is untouched (because $P$ is false), while the converse fails. The recovered counter-scenario separates converse from original. Equivalence would need both arrows. Only one is given. Necessary versus sufficient in the later letters is this same swap..

The converse would say every rate rise comes from inflation above False0\\%$. A currency-defence rise at $4\\%$ has $Q$ true and $P$ false: original untouched, converse fails. The recovered counter-scenario separates converse from original. Equivalence would need both arrows. Only one is given. Necessary versus sufficient in later letters is this same swap of ends of the arrow.

so the statement is False.`,
      `**C.** → True

"$P$ is sufficient for $Q$" means $P\\Rightarrow Q$. The given rule is exactly that arrow: inflation above $10\\%$ forces a rate rise. $P$ alone guarantees $Q$..

$P$ is sufficient for $Q$ means $P\\Rightarrow Q$. The given rule is exactly that arrow: inflation above $10\\%$ forces a rate rise. $P$ alone guarantees $Q$. The recovered reading is sufficiency of high inflation for a rise, not necessity. Necessity would be the converse, letter D..

Sufficient means $P\\Rightarrow Q$. The given rule is that arrow: high inflation forces a rise. The recovered reading is sufficiency of $P$ for $Q$, not necessity. Necessity would be the converse, letter D. $P$ alone guarantees $Q$. That is what sufficient means at the left end of the arrow.

so the statement is True.`,
      `**D.** → False

"$P$ is necessary for $Q$" would be $Q\\Rightarrow P$, the converse. The given arrow points the other way: $Q$ is necessary for $P$, not $P$ for $Q$. The rule does not force high inflation whenever rates rise..

$P$ is necessary for $Q$ would be $Q\\Rightarrow P$, the converse. The given arrow points the other way: $Q$ is necessary for $P$, not $P$ for $Q$. The rule does not force high inflation whenever rates rise. The recovered labels sit at opposite ends of the arrow. Swapping necessary and sufficient is the same error as treating the converse as the original. A $4\\%$ currency-defence rise is again a picture of $Q$ without $P$..

Necessary for a rate rise would be $Q\\Rightarrow P$, the converse. The given arrow points the other way. The rule does not force high inflation whenever rates rise. The recovered labels sit at opposite ends of the arrow. Swapping necessary and sufficient is the same error as treating the converse as the original. A $4\\%$ currency-defence rise is again a picture of $Q$ without $P$. Letter B already refused that converse; this letter is the same refusal in the vocabulary of necessary and sufficient.

so the statement is False.`,
      `**E.** → False

Observing a rate rise ($Q$ true) and inferring inflation above $10\\%$ ($P$ true) is affirming the consequent. The premises give $P\\Rightarrow Q$, never $Q\\Rightarrow P$. Walking backwards along the arrow is the classic trap..

Observing a rate rise ($Q$ true) and inferring inflation above False0\\%$ ($P$ true) is affirming the consequent. The premises give $P\\Rightarrow Q$, never $Q\\Rightarrow P$. Walking backwards along the arrow is the classic trap. The recovered original does not licence that reverse step. A valid conclusion from a rate rise would need the converse, which letter B already refused. The $4\\%$ defence rise is a concrete case where $Q$ holds and $P$ fails, so the inference is not only invalid in form but false in that picture..

Observing a rate rise and inferring high inflation is affirming the consequent. The premises give $P\\Rightarrow Q$, never $Q\\Rightarrow P$. Walking backwards along the arrow is the classic trap. The recovered original does not licence that reverse step. A valid conclusion from a rate rise would need the converse, which letter B already refused. The $4\\%$ defence rise is a concrete case where $Q$ holds and $P$ fails, so the inference is not only invalid in form but false in that picture. This letter is the fallacy name for the reverse walk letters B and D already blocked..

Walking backwards along $P\\Rightarrow Q$ is affirming the consequent. The recovered original does not licence inferring high inflation from a rate rise. A $4\\%$ currency-defence rise is $Q$ without $P$, so the inference is false in that picture as well as invalid in form. Letters B and D already refused the converse in two vocabularies. This letter names the fallacy. A valid conclusion from a rate rise would need $Q\\Rightarrow P$, which is not given. Quiet years when inflation stays low still allow other reasons to raise rates. The rule is silent about those years.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 16,
    solution_overview: `**Part 1.** The setup.

$P$: a country's inflation rate exceeds $10\\%$. $Q$: the central bank raises interest rates. The given rule is $P\\Rightarrow Q$.

**Part 2.** The operations.

High inflation forces a rate rise. The contrapositive $\\neg Q\\Rightarrow\\neg P$ always carries the same truth value. The converse $Q\\Rightarrow P$ is a different claim. In $P\\Rightarrow Q$, $P$ is sufficient for $Q$ and $Q$ is necessary for $P$.

**Part 3.** The scans.

A bank may raise rates at $4\\%$ inflation to defend a sliding currency, which leaves the rule intact and the converse in ruins. Observing a rate rise and inferring high inflation is affirming the consequent.`,
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

The first link is $P\\Leftrightarrow Q$ and $P$ is given true. Agreement forbids $Q$ from being false, so $Q$ is true. A biconditional is a two-way weld; a true $P$ cannot sit next to a false $Q$..

The first link is $P\\Leftrightarrow Q$ and $P$ is given true. Agreement forbids $Q$ from being false, so $Q$ is true. A biconditional is a two-way weld; a true $P$ cannot sit next to a false $Q$. The recovered chain carries truth from $P$ into $Q$. This letter is the first step; letter B is the second..

The first link and a true $P$ force $Q$ true. A biconditional is a two-way weld; a true $P$ cannot sit next to a false $Q$. The recovered chain carries truth from $P$ into $Q$. This letter is the first step; letter B is the second. Agreement is the whole content of $\\Leftrightarrow$.

so the statement is True.`,
      `**B.** → True

The second link is $Q\\Leftrightarrow R$. From $P\\Leftrightarrow Q$ and $P$ true, $Q$ is true, so $R$ must be true as well. The extra fact "$P$ is true" has now travelled the whole chain..

The second link is $Q\\Leftrightarrow R$. From $P\\Leftrightarrow Q$ and $P$ true, $Q$ is true, so $R$ must be true as well. The extra fact that $P$ is true has now travelled the whole chain. The recovered $R$ is true. Skipping the middle and jumping to letter E's weaker end-link would leave $R$ unsettled; the given middle link settles it..

The second link then forces $R$ true. The extra fact that $P$ is true has travelled the whole chain. The recovered $R$ is true. Skipping the middle and jumping to letter E's weaker end-link would leave $R$ unsettled; the given middle link settles it. Two welds, one truth, three true propositions.

so the statement is True.`,
      `**C.** → True

If $P$ agrees with $Q$ and $Q$ agrees with $R$, then $P$ agrees with $R$. In symbols, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$ yield $P\\Leftrightarrow R$. The first and third must share a truth value..

If $P$ agrees with $Q$ and $Q$ agrees with $R$, then $P$ agrees with $R$. In symbols, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$ yield $P\\Leftrightarrow R$. The first and third must share a truth value. The recovered chain forces that unstated link. It is weaker than the pair it came from, which is letter E's warning, but it does hold..

If $P$ agrees with $Q$ and $Q$ agrees with $R$, then $P$ agrees with $R$. The recovered chain forces that unstated link $P\\Leftrightarrow R$. It is weaker than the pair it came from, which is letter E's warning, but it does hold. The first and third must share a truth value, here both true.

so the statement is True.`,
      `**D.** → True

Biconditionals work in both directions, so the chain can be walked from either end. If $R$ were false, $Q\\Leftrightarrow R$ would force $Q$ false, and $P\\Leftrightarrow Q$ would force $P$ false..

Biconditionals work in both directions, so the chain can be walked from either end. If $R$ were false, $Q\\Leftrightarrow R$ would force $Q$ false, and $P\\Leftrightarrow Q$ would force $P$ false. The recovered chain pulls both ways. This letter is the far-end pull; letters A and B were the near-end push..

Biconditionals work in both directions, so the chain can be walked from either end. If $R$ were false, $Q$ would be false, then $P$ would be false. The recovered chain pulls both ways. This letter is the far-end pull; letters A and B were the near-end push. The same welds run in reverse.

so the statement is True.`,
      `**E.** → False

$P\\Leftrightarrow R$ alone does not mention $Q$. The assignment $P$ true, $R$ true, $Q$ false satisfies $P\\Leftrightarrow R$ while breaking $P\\Leftrightarrow Q$. Knowing only the end link leaves the middle free..

Knowing only $P\\Leftrightarrow R$ does not mention $Q$. The assignment $P$ true, $R$ true, $Q$ false satisfies $P\\Leftrightarrow R$ while breaking $P\\Leftrightarrow Q$. Knowing only the end link leaves the middle free. The recovered derived link is weaker than the pair it came from. The given task has both middle links, which is why A through D hold, but this letter asks whether the end link alone would pin $Q$. It would not. A true-true pair at the ends with a false middle is the standard picture of that gap. What would pin $Q$? One of the original links involving $Q$, which this letter's hypothesis does not supply..

Knowing only $P\\Leftrightarrow R$ does not mention $Q$. The assignment $P$ true, $R$ true, $Q$ false satisfies the end link while breaking $P\\Leftrightarrow Q$. Knowing only the end link leaves the middle free. The recovered derived link is weaker than the pair it came from. The given task has both middle links, which is why A through D hold, but this letter asks whether the end link alone would pin $Q$. It would not. A true-true pair at the ends with a false middle is the standard picture of that gap. What would pin $Q$? One of the original links involving $Q$, which this letter's hypothesis does not supply. Matching ends are not a chain..

Matching ends are not a chain. The recovered derived link $P\\Leftrightarrow R$ mentions only $P$ and $R$, so $Q$ is free. $1-true at the ends with a false middle satisfies the end link and breaks both given welds that mention $Q$. The given task has those welds, which is why A through D hold. This letter asks whether the end link alone would pin $Q$. It would not. What would pin $Q$? One original link involving $Q$. The hypothesis of this letter does not supply one. A chain of two biconditionals is stronger than its end link, and this letter is that drop in strength.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 17,
    solution_overview: `**Part 1.** The setup.

A biconditional $A\\Leftrightarrow B$ is a two-way link: $A$ and $B$ must always carry the same truth value. Here two links are given, $P\\Leftrightarrow Q$ and $Q\\Leftrightarrow R$, so the three propositions are welded into one chain $P\\Leftrightarrow Q\\Leftrightarrow R$, and the extra fact that $P$ is true travels along it.

**Part 2.** The operations.

A true $P$ forces $Q$ true through the first link, and a true $Q$ forces $R$ true through the second. The unstated link $P\\Leftrightarrow R$ holds as well. Pulling the chain from the far end works just as smoothly.

**Part 3.** The scans.

$P$ true forces $Q$ true and $R$ true. A false $R$ would drag $Q$ and then $P$ down. On its own, $P\\Leftrightarrow R$ leaves $Q$ free: $P$ and $R$ both true with $Q$ false satisfies the end link without the middle.`,
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

"Cancelled unless $S$" is a one-way promise with an escape hatch. If the hatch fails, cancellation is required. The recovered translation is $\\neg S\\Rightarrow C$: if the rain does not stop before 6 PM, the concert is cancelled.

The unless-clause names $S$ as the escape. It does not name a second promise that a timely stop forces the show to proceed. Those are different English jobs, and the stem wrote only the first.

Writing $S\\Rightarrow\\neg C$ would have turned the escape into a guarantee. Once $S\\Rightarrow\\neg C$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That formula is the false relative in the neighbouring letter, and the recovered rule never asserted it. A 5 PM stop plus a power failure has $S$ true and $C$ true: $\\neg S\\Rightarrow C$ is idle because its antecedent is false, while $S\\Rightarrow\\neg C$ fails outright.

What would make a different translation correct? If the organizer had said "cancelled if and only if the rain continues," then both arrows would be signed. The stem signed one arrow.

The recovered implication is $\\neg S\\Rightarrow C$.

so the statement is True.`,
      `**B.** → False

$S\\Rightarrow\\neg C$ would say that stopping rain guarantees the concert happens. A 5 PM stop plus a power failure has $S$ true and $C$ true: $S\\lor C$ (the rule) holds, while $S\\Rightarrow\\neg C$ fails. Stopping rain removes one reason to cancel, not every reason. Not an equivalent form,

Stopping rain removes one reason to cancel, not every reason. A 5 PM stop plus a power failure has $S$ true and $C$ true: $S\\lor C$ still holds, while $S\\Rightarrow\\neg C$ fails. That extra scenario is this letter's own arithmetic of cases, not a second translation of the unless-clause.

Treating unless as if-and-only-if would have accepted $S\\Rightarrow\\neg C$ as equivalent. The opposite verdict would need a different isolation than $S\\Rightarrow\\neg C$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Equivalence would require the concert to be impossible after a timely stop, which the rule never said.

What would make $S\\Rightarrow\\neg C$ equivalent? A second promise that the concert proceeds whenever the rain stops. The stem wrote one unless-clause, not that second promise. The recovered rule is silent once $S$ is true, and silence is not $\\neg C$.

so the statement is False.`,
      `**C.** → True

The recovered rule is $\\neg S\\Rightarrow C$. The identity $A\\Rightarrow B\\equiv\\neg A\\lor B$ rewrites that implication without adding a new promise:

$$\\neg(\\neg S)\\lor C\\equiv S\\lor C.$$

OR is symmetric, so $C\\lor S$ is the same formula. This is the unless-rule in different clothing, not a stronger claim that the concert happens.

Inclusive or allows a timely stop and a cancellation together. That is exactly the power-failure day the overview left open: $S$ true, $C$ true, and $S\\lor C$ still true. Exclusive or would forbid that day, but the identity uses inclusive or.

**1.** Reading $C\\lor S$ as "cancelled, or else the rain stopped, and not both" imported exclusive or. The opposite verdict would need a different isolation than $C\\lor S$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered formula does not.

**2.** Thinking $C\\lor S$ guaranteed a concert on dry evenings would have smuggled $S\\Rightarrow\\neg C$ back in. That is the fork: $C\\lor S$ belongs to the recovered isolation, $S\\Rightarrow\\neg C$ belongs to the discarded mix. Disjunction only forbids the pair $\\neg S$ and $\\neg C$: rain continuing and the show going ahead. It is silent about every other combination.

**3.** What would make $C\\lor S$ inequivalent? A second signed clause that cancelled the concert only when rain continued, or that forced the concert whenever rain stopped. The stem signed neither.

The recovered $S\\lor C$ is the original rule, rewritten.

so the statement is True.`,
      `**D.** → False

Once $S$ is true, the antecedent $\\neg S$ of the rule is false, so the implication is silent. It does not assert $\\neg C$. A power cut can still cancel the concert after the rain stops. No guarantee that the concert happens. Reading a rescue into the escape clause is the trap,

Once $S$ is true, the antecedent $\\neg S$ of the recovered rule is false, so the implication is idle. It does not assert $\\neg C$. A power cut can still cancel the concert after the rain stops. No guarantee that the concert happens.

Reading a rescue into the escape clause is the trap. "Unless the rain stops" is not "if the rain stops, the show goes on." The recovered silence on $S$-true days is the whole content of this letter.

Wanting a guarantee would have needed $S\\Rightarrow\\neg C$, which letter B already rejected as inequivalent. The opposite verdict would need a different isolation than $S\\Rightarrow\\neg C$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. What would change the verdict is an extra clause "and if the rain stops, the concert proceeds." The stem has no such clause.

so the statement is False.`,
      `**E.** → True

The recovered implication is $\\neg S\\Rightarrow C$. Its contrapositive is $\\neg C\\Rightarrow S$: if the concert is not cancelled, the rain must have stopped before 6 PM. A concert that went ahead is proof of $S$. Contrapositive is the one relative that always shares the original's truth value.

**1.** Negate both halves and swap. From $\\neg S\\Rightarrow C$ that is $\\neg C\\Rightarrow\\neg(\\neg S)$, which simplifies to $\\neg C\\Rightarrow S$. The recovered list already named this as the third outfit of the same rule.

**2.** A concert that went ahead with rain still falling would be $\\neg C$ together with $\\neg S$. That pair falsifies $\\neg S\\Rightarrow C$, so it is not a model of the rule. The organizer's promise therefore really does force $S$ from $\\neg C$.

**3.** Writing $\\neg C\\Rightarrow\\neg S$ negated without swapping and produced a different arrow. The path that matches the stem therefore holds $\\neg C\\Rightarrow\\neg S$ fixed and only then reads the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Writing $S\\Rightarrow\\neg C$ produced the converse of the recovered rule, which the power-failure day already kills. That is why $S\\Rightarrow\\neg C$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

What would make this rewriting fail? A rule that was not an implication, or a biconditional that also forced cancellation whenever rain stopped. Against the recovered one-way unless-clause, the contrapositive is guaranteed.

The recovered $\\neg C\\Rightarrow S$ is the original promise, read backwards.

A dry evening that still cancels for a power cut has $S$ true and $C$ true. The contrapositive never speaks about that evening, because $\\neg C$ is false there. The evenings the contrapositive constrains are the ones where the concert went ahead. Those evenings cannot have $\\neg S$, or the original unless-rule would already be broken.

If someone argues "maybe it rained and they held the concert under a tent," they are proposing $\\neg C$ with $\\neg S$. That pair is exactly the forbidden cell of $\\neg S\\Rightarrow C$. The organizer's rule does not leave a tent-clause. Until the stem adds one, a going-ahead concert is proof that the rain stopped in time.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 18,
    solution_overview: `**Part 1: Setup.**

“Cancelled **unless** the rain stops” is a promise with an escape clause. The escape clause is $S$ (“the rain stops before 6 PM”), and if the escape clause does not apply, the cancellation is guaranteed:

$$\\neg S \\Rightarrow C$$

That single implication can be dressed in three outfits, all saying the same thing:

• $\\neg S \\Rightarrow C$, the rain does not stop, so the concert is cancelled;

• $S \\lor C$, at least one of “the rain stopped” and “the concert was cancelled” is true, using $A \\Rightarrow B \\equiv \\neg A \\lor B$;

• $\\neg C \\Rightarrow S$, the contrapositive: a concert that went ahead proves the rain stopped in time.

**Part 2: Relatives.**

**What the rule never covers** is the day the rain *does* stop.

**Part 3: Solve.**

There the promise falls silent, so the concert may go ahead, or be cancelled for a completely unrelated reason, say a power failure. Any reading that forbids that second possibility, such as $S \\Rightarrow \\neg C$, is claiming more than the organizer ever said.`,
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

Rider P is a 70-year-old with no disability and income $\\$18{,}000$. The recovered rule is a gate and a bracket:

$$A\\land(D\\lor L).$$

Age $70\\ge 65$ makes $A$ true. No disability makes $D$ false. Income $\\$18{,}000<\\$20{,}000$ makes $L$ true, so the bracket $D\\lor L$ holds on the income half. Then

$$A\\land(D\\lor L)=\\mathrm{T}\\land(\\mathrm{F}\\lor\\mathrm{T})=\\mathrm{T}.$$

Disability is not required once $L$ holds. The bracket is an or.

Wanting both hardship tests would have been running an and inside the bracket. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. That is a different rule. The recovered P row is a yes: age plus low income, disability unused.

The recovered table pays P.

P's income sits $\\$2{,}000$ under the cutoff, which is why $L$ is true. Raise that income to $\\$20{,}000$ exactly and $L$ would fail; the stem used a strict "below $\\$20{,}000$." P would then need a disability to fill the bracket, and P has none. The given $\\$18{,}000$ is safely inside $L$, so the recovered yes does not sit on a knife-edge.

The neighbouring rider Q qualifies by the other token in the same bracket. That is a different file. This letter is P's file only: age plus low income, disability unused.

so the statement is True.`,
      `**B.** → False

Q is $67$, has a qualifying disability, and earns $\\$50{,}000$. Then $A$ is true, $D$ is true, and $L$ is false, so $D\\lor L$ is true on the disability half. Q does qualify. The claim that income above $\\$20{,}000$ blocks Q ignores the OR in the bracket. Failing $L$ while $D$ holds leaves the OR true,

Q is $67$, has a qualifying disability, and earns $\\$50{,}000$. Then $A$ is true, $D$ is true, and $L$ is false, so $D\\lor L$ is true on the disability half. Q does qualify. The claim that income above $\\$20{,}000$ blocks Q ignores the OR in the bracket.

Failing $L$ while $D$ holds leaves the OR true. Income is one interchangeable option, not a veto. Treating the bracket as an and would have denied Q. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The recovered table row for Q is a yes.

What would make the claim true? A rule that joined disability and income by and, or that put income outside the bracket as a second gate. The stem put income inside an or with disability.

so the statement is False.`,
      `**C.** → False

The claim says an income above $\\$20{,}000$ automatically disqualifies a senior, even with a qualifying disability. Rider Q is the counterexample sitting in the recovered table: age $67$ so $A$ true, disability so $D$ true, income $\\$50{,}000$ so $L$ false. The bracket $D\\lor L$ still holds on the disability half, and the conjunction is true. Q qualifies.

Income is one of two interchangeable options inside the or. Failing $L$ while $D$ holds leaves the or true. High income is survivable.

**1.** Reading "AND (disability OR income)" as "AND disability AND income" would have made high income fatal. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That rewrite turns the recovered or into an and, and it would flip Q from yes to no.

**2.** Automatic disqualification would require $L$ to sit outside the bracket as a second gate, the way $A$ does. The stem put $L$ inside the or with $D$. Nothing outside the bracket can be substituted for age; either token inside the bracket can be substituted for the other.

**3.** What would make the claim true? A rule that joined disability and income by and, or that listed income as a veto. Against $A\\land(D\\lor L)$, Q's $\\$50{,}000$ is irrelevant once $D$ is true.

The recovered Q row is a yes, so high income is not an automatic bar.

Q's $\\$50{,}000$ is not a rounding of the cutoff. It is more than twice $\\$20{,}000$, and the discount still applies. That is the point of an or: one token can fail badly while the other holds. A rule that treated income as a veto would have unpaid Q, and the recovered table would show a no in that row.

If the claim had said "having an income above $\\$20{,}000$ and no disability disqualifies a senior," it would be true. The extra "even if they have a qualifying disability" is what makes the sentence false. Disability is the escape hatch inside the bracket, and Q used it.

so the statement is False.`,
      `**D.** → True

The claim asks whether some 70-year-old with no disability and income $\\$25{,}000$ fails the discount. That rider is not P and not Q; it is the third row the overview invented to empty the bracket.

Age $70$ makes $A$ true. No disability makes $D$ false. Income $\\$25{,}000$ sits $\\$5{,}000$ above the cutoff, so $L$ is false. Then $D\\lor L$ fails and the conjunction is false. Age opens the gate; it does not fill the bracket.

P has income $\\$18{,}000$ and qualifies. This invented rider has $\\$25{,}000$ and does not. The $\\$7{,}000$ gap from P is the extra arithmetic that empties the bracket: $\\$18{,}000$ is below $\\$20{,}000$, $\\$25{,}000$ is not.

Thinking "70 years is enough" would have been answering the next letter. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Sufficiency of age is a different claim. Existence of a failing 70-year-old is this one, and the recovered third row is exactly that witness.

Existence here is a modelling question, not a scan of P or Q. The stem gave two riders who both qualify. To show that a 70-year-old can fail, a third file has to be written. The overview already wrote it: $A$ true, $D$ false, $L$ false.

Answering from P alone would have said every 70-year-old qualifies, because P does. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. P has $L$ true. Strip $L$ by crossing the $\\$20{,}000$ line and keep disability off, and the recovered conjunction dies. That is why the scenario exists, and why it is not P.

The $\\$7{,}000$ gap from P is not a rounding story. P is below the cutoff and this invented rider is above it. Disability stays off in both files, age stays $70$ in both, and only $L$ flips. That single flip is enough to empty the bracket and produce the failing 70-year-old the claim asked for.

so the statement is True.`,
      `**E.** → False

Sufficiency of age would mean every rider with $A$ true gets the discount, whatever sits in the bracket. The recovered formula is $A\\land(D\\lor L)$. Age alone makes $A$ true and leaves the bracket untouched.

The invented 70-year-old with no disability and income $\\$25{,}000$ has $A$ true and $D\\lor L$ false, so the conjunction fails. Being at least $65$ is necessary, not sufficient. P and Q both needed a filled bracket as well as age.

**1.** A ticket that skipped the hardship tests would need a different rule, for instance Discount $\\Leftrightarrow A$. The stem wrote the bracket.

**2.** Seeing P and Q both qualify and concluding "age is enough" sampled only the two given files. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Both of those files have a true bracket. The third recovered row is the file that separates necessity from sufficiency.

**3.** What would make age sufficient? Dropping the bracket, or filling it automatically for every senior. Against the recovered rule, a senior with empty bracket is unpaid.

The recovered third row is the witness that age is not a free pass.

Necessary versus sufficient is the whole split. Every paid rider in the recovered table has $A$ true, so age is necessary. Not every rider with $A$ true is paid, so age is not sufficient. One direction of the recovered biconditional Discount $\\Leftrightarrow A\\land(D\\lor L)$ uses $A$ as a gate, never as the whole ticket.

If the transit authority had written "65 or older," with no hardship tests, this letter would be true. The stem wrote the hardship tests. The invented $\\$25{,}000$ file is what those tests do to a senior who meets none of them.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 19,
    solution_overview: `**Part 1: Setup.**

The discount rule has one gate and one bracket: a rider must be at least 65 **and** satisfy at least one of the two hardship conditions.

**Part 2: Relatives.**

Writing $A$ for the age test, $D$ for a qualifying disability and $L$ for income below \\$20,000,

$$\\text{Discount} \\Leftrightarrow A \\land (D \\lor L)$$

The bracket is an **or**, so $D$ and $L$ are interchangeable and either one alone fills it.

**Part 3: Solve.**

The age test sits outside the bracket, where nothing can substitute for it.

| Rider | $A$ (65+) | $D$ (disability) | $L$ (income < \\$20k) | $D \\lor L$ | Discount? |
| --- | --- | --- | --- | --- | --- |
| P, 70, none, \\$18,000 | true | false | true | true | **yes** |
| Q, 67, yes, \\$50,000 | true | true | false | true | **yes** |
| 70, none, \\$25,000 | true | false | false | false | **no** |

The third row is not one of the given riders; it is a rider we invent to see what happens when the bracket is empty and only the age gate is passed.`,
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

The claim ranges over the positive integers, so the first domino is $n=1$. Check both sides of the closed form:

$$1=\\frac{1\\cdot 2}{2}=1.$$

They agree, so the recovered base case holds.

Starting at $n=0$ would be a different domain: the stem said positive integers, and the empty sum is not the object under test. Starting at $n=2$ would skip the first positive integer and leave $n=1$ unproved.

Thinking the base case was $n=10$ would have been doing the sanity check in the last letter, not the inductive start. The path that matches the stem therefore holds $n=10$ fixed and only then reads the claim. That contrast is the reason the verdict goes the way it does. The number $55$ is a later check of the formula, not the first falling domino.

The recovered base is $n=1$, and both sides equal $1$.

The two sides of the base case are not a slogan. The left side at $n=1$ is the single summand $1$. The right side is a product divided by $2$. They happen to agree, which is why the first domino falls. A mismatch at $n=1$ would stop the whole induction, no matter how pretty the $k\\to k+1$ algebra looked later.

Verifying $n=1$ by quoting the closed form without computing $\\frac{1\\cdot 2}{2}$ would have skipped the check the claim actually made. The stem's recovered values line up with $n=1$, whereas $\\frac{1\\cdot 2}{2}$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $n=1$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The claim is that the equality holds at $1$, and the recovered arithmetic is $1=1$.

so the statement is True.`,
      `**B.** → True

After the recovered base $n=1$, infinitely many remaining $n$ have to be covered. Induction covers them with one algebraic step: assume the formula at $n=k$, then prove it at $n=k+1$. That is the inductive step as stated.

Checking $k$ and $k+1$ as two numerical examples is not the same as a general step from $k$ to $k+1$. Two numbers topple two more dominoes by hand and say nothing about the rest of the line.

**1.** Writing "check $n=2$ next" without algebra would have been extending the finite list in the neighbouring letter, not running induction. The opposite verdict would need a different isolation than $n=2$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Five numerical checks are evidence. The general step is a proof.

**2.** The induction hypothesis is not "the formula looks plausible at $k$." It is the exact equality $1+\\cdots+k=k(k+1)/2$, used as a licence to replace the left-hand block when $k+1$ is appended.

**3.** What would make a different inductive step correct? A claim about even $n$ only, which would step from $k$ to $k+2$, or a claim starting at $n=0$. Against positive integers and this closed form, the neighbour of $k$ is $k+1$.

The recovered method is base plus the $k\\to k+1$ step.

Induction is not "the pattern continues." It is a licence: if the equality is true at $k$, then appending $k+1$ produces the equality at $k+1$, for an arbitrary positive integer $k$. That licence, stacked on the recovered base, covers $n=2$, then $n=3$, and so on without a leftover integer.

Five numerical checks, or even a thousand, would still leave infinitely many unchecked $n$. The neighbouring letter is exactly that mistake. This letter is the description of the step that replaces those checks. The algebra of the step is the next true letter; the job here is to name the step correctly.

so the statement is True.`,
      `**C.** → False

Checking $n=1,2,3,4,5$ confirms five instances and says nothing about $n=6$. A proof by induction needs the general step from $k$ to $k+1$. Five numerical checks are evidence, not a complete inductive proof. Infinitely many unchecked $n$ remain,

Checking $n=1,2,3,4,5$ confirms five instances and says nothing about $n=6$. A proof by induction needs the general step from $k$ to $k+1$. Five numerical checks are evidence, not a complete inductive proof. Infinitely many unchecked $n$ remain.

Thinking "five is enough to see the pattern" would have been doing empirical science, not induction. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. What would make five checks a complete proof? A domain with only five positive integers, which is not $\\mathbb N$.

The recovered method is base plus general step. A finite checklist is neither piece, except that $n=1$ happens to be the base and is not enough on its own.

so the statement is False.`,
      `**D.** → True

Assume the recovered formula at $n=k$ and add the next term. The extra algebra this letter is allowed is the one-step expansion to the formula at $n=k+1$:

$$\\frac{k(k+1)}{2}+(k+1)=\\frac{k(k+1)+2(k+1)}{2}$$

$$=\\frac{(k+1)(k+2)}{2}.$$

That is the closed form with $n$ replaced by $k+1$, so the inductive step holds.

Stopping after writing $\\frac{k(k+1)}{2}+(k+1)$ without a common denominator would have left the step unfinished. The recovered isolation is checked against the claim using $\\frac{k(k+1)}{2}+(k+1)$, which is the figure the sessions actually produce. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Factoring out $k+1$ is the extra move: the two terms $k(k+1)$ and $2(k+1)$ share the factor $k+1$, and what remains is $k+2$ in the numerator.

**1.** The left side after appending is $1+\\cdots+k+(k+1)$, not a new series built from scratch. The induction hypothesis replaces the first $k$ terms.

**2.** Checking the identity only at $k=4$ would have a numerical instance, not a proof for every $k$. That is the fork: $k=4$ belongs to the recovered isolation, $k$ belongs to the discarded mix. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The algebra does not mention a particular $k$.

The recovered calculation is the neighbouring-domino step.

The common-denominator line is the one place it is tempting to drop a $2$. Writing $\\frac{k(k+1)}{2}+(k+1)$ as $\\frac{k(k+1)+(k+1)}{2}$ would be missing the factor that turns $k+1$ into $2(k+1)$. Then the numerator would be $(k+1)(k+1)=(k+1)^2$, which is not the triangular formula at $k+1$.

The recovered target is $\\frac{(k+1)(k+2)}{2}$, matching $n=k+1$ in the original closed form. That match is why the neighbouring domino falls. Checking the same algebra at a single $k$, say $k=3$, can catch an arithmetic slip, but it is not a substitute for keeping $k$ unspecified.

The recovered inductive step is that one algebraic neighbour, not a second full induction and not a stack of numerical checks. Once the base $n=1$ holds, this calculation is what pushes the equality from every $k$ to $k+1$. A dropped factor of $2$ on the added term is the named wrong figure that would land on $(k+1)^2/2$ instead of the triangular form.

so the statement is True.`,
      `**E.** → True

Substitute $n=10$ into the recovered closed form:

$$\\frac{10\\cdot 11}{2}=55.$$

That is a sanity check on the formula, not a substitute for the inductive step. Adding $1$ through $10$ by hand would agree, but the formula is the point of the check.

Treating $n=10$ as a base case would have started the induction too late. The opposite verdict would need a different isolation than $n=10$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered base is $n=1$; $55$ is a later numerical reading.

Thinking "$55$ proves the claim for all $n$" would have confused a check with a proof. The stem's recovered values line up with $55$, whereas $n$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $55$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. One true instance never covers infinitely many remaining $n$. The inductive step is what covers them.

The recovered value at $n=10$ is $55$.

Hand addition $1+2+\\cdots+10=55$ agrees with the closed form, which is why $55$ is a useful check. It is still one instance. The inductive proof is what makes $55$ expected rather than lucky.

Starting the induction at $n=10$ would have left $n=1$ through $n=9$ to a different argument. The stem's recovered values line up with $n=10$, whereas $n=9$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $n=10$ stays in the write-up. That contrast is the reason the verdict goes the way it does. The recovered base is $n=1$. This letter never claims that $55$ proves the formula; it claims that the formula, already under proof, evaluates to $55$ at $n=10$.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 20,
    solution_overview: `**Part 1: Setup.**

The claim packs infinitely many cases into one formula:

$$1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$$

**Induction** proves such a claim with two moves, like a line of dominoes: knock over the first one (the **base case**), then show that any falling domino knocks over its neighbour (the **inductive step**). **Base case, $n = 1$.** The left side is just $1$, and the right side is $\\frac{1 \\cdot 2}{2} = 1$.

**Part 2: Relatives.**

They agree, so the first domino falls. **Inductive step.** Assume the formula holds at some $n = k$, this assumption is called the *induction hypothesis*, and add the next number to both sides:

$$1 + 2 + \\cdots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1) = \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}$$

The result is the original formula with $n$ replaced by $k+1$, so the neighbouring domino really does fall.

**Part 3: Solve.**

**Why examples are no substitute.** Checking $n = 1, 2, 3, 4, 5$ topples five dominoes by hand and says nothing about the sixth; the inductive step is what covers all of them at once. As a sanity check on the formula itself, $n = 10$ gives $\\frac{10 \\cdot 11}{2} = 55$.`,
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

Take $P$ as "inflation increases" and $Q$ as "unemployment decreases." The original claim is $P\\Rightarrow Q$. The quoted sentence, "for unemployment to decrease, inflation must increase," makes $P$ necessary for $Q$, which is $Q\\Rightarrow P$. That is the converse, not an equivalent form.

"Must" is necessity vocabulary. Necessity sits at the head of the arrow. Here it puts inflation at the head of $Q\\Rightarrow P$, which reverses the recovered arrow.

**1.** A model with falling unemployment and stable inflation has $Q$ true and $P$ false. Then $P\\Rightarrow Q$ holds (false antecedent) while $Q\\Rightarrow P$ fails. The original can be true while this rewriting is false.

**2.** Hearing "must" and thinking "sufficient" would have kept the original arrow. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Sufficient names the tail. The dictionary in the overview already placed "P must happen for Q" on the converse row.

**3.** What would make the quoted sentence equivalent? If the original had been $Q\\Rightarrow P$, or a biconditional $P\\Leftrightarrow Q$. The stem wrote a one-way "if inflation, then unemployment."

The recovered original is $P\\Rightarrow Q$. The claim names the converse.

English "must" is the trap that keeps reversing arrows in this chapter. In "for $Q$ to happen, $P$ must happen," the necessity label sits on $P$, so the arrow runs $Q\\Rightarrow P$. In the original, the necessity label sits on $Q$: if inflation increases, unemployment decreases, so falling unemployment is required of an inflation-increase day.

A second model: inflation increases and unemployment falls. Both the original and the converse hold that day, so it does not separate them. The separating day is unemployment falling without inflation. The original allows it (false $P$); the converse forbids it. Equivalence would need them to agree on every day, including that one.

so the statement is False.`,
      `**B.** → True

"$P$ is sufficient for $Q$" is $P\\Rightarrow Q$. The original claim is "if inflation increases, then unemployment decreases," the same arrow. Sufficient names the tail of the arrow. This is equivalent wording, not a stronger claim.

Swapping sufficient with necessary would have landed on the converse $Q\\Rightarrow P$, which the neighbouring letter already rejected. The opposite verdict would need a different isolation than $Q\\Rightarrow P$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered dictionary puts "P is sufficient for Q" on the original row and "P is necessary for Q" on the converse row.

The claim does not say that inflation is the only route to falling unemployment. Sufficiency never claimed uniqueness. It claimed that an inflation increase is enough, which is exactly $P\\Rightarrow Q$.

The recovered original is this sufficient-condition sentence.

Sufficient never said "necessary and sufficient." Inflation increasing is enough for unemployment to fall, according to the original. Other days might still see unemployment fall, and the original is silent about those days because $P$ is false there.

The recovered dictionary row is "P is sufficient for Q" mapped to $P\\Rightarrow Q$. This letter is that row, filled with the inflation-unemployment words. Swapping the labels "sufficient" and "necessary" is how the converse sneaks back in.

so the statement is True.`,
      `**C.** → False

"$Q$ can only decrease if $P$" is "$Q$ only if $P$," i.e. $Q\\Rightarrow P$. Again the converse. The original does not restrict unemployment decreases to inflation-increase days. "Only if" is the phrase most often misread as the original arrow,

"$Q$ can only decrease if $P$" is "$Q$ only if $P$," i.e. $Q\\Rightarrow P$. Again the converse. The original does not restrict unemployment decreases to inflation-increase days. "Only if" is the phrase most often misread as the original arrow.

Treating "only if" as "if" would have accepted this as equivalent. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. "Can only" is necessity language pointing at $P$ for $Q$, which reverses the recovered arrow.

What would make it equivalent? If the original had been $Q\\Rightarrow P$. The stem's claim is $P\\Rightarrow Q$.

so the statement is False.`,
      `**D.** → True

Negate both halves of $P\\Rightarrow Q$ and swap: $\\neg Q\\Rightarrow\\neg P$, "if unemployment does not decrease, then inflation does not increase." That is the contrapositive of the original, hence equivalent. It is the one rewriting that always matches.

Negating without swapping would have written the inverse $\\neg P\\Rightarrow\\neg Q$, which pairs with the converse and is not equivalent. The path that matches the stem therefore holds $\\neg P\\Rightarrow\\neg Q$ fixed and only then reads the claim. That contrast is the reason the verdict goes the way it does. Inverse and converse stand or fall together; original and contrapositive stand or fall together.

**1.** The recovered dictionary already listed "if not Q, then not P" on the equivalent row. This letter is that row, filled with the inflation-unemployment words.

**2.** A day with rising inflation and unemployment that fails to fall has $P$ true and $Q$ false, which kills both the original and this rewriting together. A day with falling unemployment and no inflation increase kills only the converse.

The recovered contrapositive is $\\neg Q\\Rightarrow\\neg P$.

Contrapositive is not a second economic story. It is the same story read from a day when unemployment failed to fall. On such a day the original forbids an inflation increase, which is exactly $\\neg Q\\Rightarrow\\neg P$.

Writing "if inflation does not increase, then unemployment does not decrease" wrote the inverse, $\\neg P\\Rightarrow\\neg Q$. Once $\\neg P\\Rightarrow\\neg Q$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. That sentence pairs with the converse. The recovered split is the same two-pair split as the contract and study-hours tasks: original with contrappositive, converse with inverse.

A day of rising inflation and falling unemployment satisfies original and contrappositive together. A day of stable inflation and falling unemployment satisfies the original (false $P$) and kills the converse. Those two days already show why contrappositive tracks the original and converse does not. This letter is the tracking pair, filled with unemployment-does-not-decrease language.

so the statement is True.`,
      `**E.** → True

"$Q$ is necessary for $P$" is $P\\Rightarrow Q$: the arrow points at the necessary condition. Falling unemployment is named as necessary for inflation to increase, which is exactly the original implication. Necessary names the head of the arrow.

Putting "necessary" on inflation would have been reading letter A's converse. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. One true arrow, two true vocabulary sentences: sufficient on $P$, necessary on $Q$.

The claim does not say unemployment must fall for other reasons, and it does not say inflation is the only cause. It says that if inflation increases, unemployment decreases, rewritten as a necessity label on $Q$.

The recovered original is this necessary-condition sentence.

The necessity label on $Q$ is easy to misplace. "A necessary condition for inflation to increase" names what must hold when $P$ holds, namely $Q$. It does not name a necessary condition for unemployment to decrease. That other necessity sentence is letter A, the converse.

One true implication, two true vocabulary sentences. Sufficient on the tail $P$, necessary on the head $Q$. The recovered original is both of those sentences and neither of the converse pair.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 21,
    solution_overview: `**Part 1: Setup.**

Every statement here is the same claim in different clothing, so the work is translation rather than calculation. Take $P$ = “inflation increases” and $Q$ = “unemployment decreases”; the original is $P \\Rightarrow Q$.

**Part 2: Relatives.**

Only two sentences are ever equivalent to $P \\Rightarrow Q$: the statement itself, and its contrapositive $\\neg Q \\Rightarrow \\neg P$.

**Part 3: Solve.**

The converse $Q \\Rightarrow P$ is a different claim no matter how natural it sounds in English. **A dictionary for the awkward phrases:**

| English phrase | Symbols |
| --- | --- |
| “$P$ is sufficient for $Q$” | $P \\Rightarrow Q$ |
| “$Q$ is necessary for $P$” | $P \\Rightarrow Q$ |
| “$P$ is necessary for $Q$”, “$P$ must happen for $Q$ to happen” | $Q \\Rightarrow P$ |
| “$Q$ only if $P$”, “$Q$ can only happen if $P$” | $Q \\Rightarrow P$ |
| “if not $Q$, then not $P$” | $\\neg Q \\Rightarrow \\neg P$ |

The pattern worth memorising: **the necessary condition is the one the arrow points at, and the sufficient condition is the one it starts from.**`,
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

The log gives $D\\Rightarrow C$ and, today, $D$ true: Flight 202 is delayed. Modus ponens yields $C$. Flight 305 is cancelled today. Rule (1) is loaded and its trigger has fired. No other clue is needed for this one conclusion.

Waiting for clue (2) would have been answering the overtime letter. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Cancellation does not need overtime. Clue (2) mentions $O$, which this letter never asks about.

What would block the cancellation conclusion? If (3) had recorded an on-time Flight 202, rule (1) would be idle. The log recorded a delay.

The recovered cascade starts $D\\longrightarrow C$. This letter stops at $C$.

Today's delay is the observation (3). Without (3), rule (1) would be an unloaded implication, silent about whether 305 cancelled. With (3), the trigger is live. That is all modus ponens needs for this one conclusion.

A crew shortage could cancel 305 on some other day. Today is not that other day. Today Flight 202 is delayed, so today the log forces cancellation. The recovered first arrow is enough.

so the statement is True.`,
      `**B.** → True

From $D\\Rightarrow C$ and $D$ true, cancellation $C$ follows. Premise (2) is $C\\Rightarrow O$. Modus ponens again yields $O$. The ground crew works overtime today. The recovered cascade is $D\\longrightarrow C\\longrightarrow O$.

Firing only the first modus ponens would have stopped at cancellation. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Overtime needs the second arrow. Both arrows are in the log, and today's delay loads them in sequence.

Thinking overtime could fail while 305 was cancelled would have broken (2). That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Once $C$ is true, (2) forbids $\\neg O$.

The recovered chain pins $O$ true.

The second modus ponens is not optional colour. $O$ is not mentioned in (1) or (3). Cancellation is an intermediate fact, recovered from the first arrow, then fed into (2). Drop either arrow and overtime is no longer forced.

Writing $D\\Rightarrow O$ as a single remembered slogan would have skipped the intermediate $C$. After isolating the unknown, the check is against $D\\Rightarrow O$. The figure $C$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $D\\Rightarrow O$ stays in the write-up. The log never wrote $D\\Rightarrow O$. It wrote two implications and one observation, and the recovered cascade is their composition.

so the statement is True.`,
      `**C.** → True

Clues (1) and (3) mention only $D$ and $C$. From those two you obtain $C$ and then stop: the letter $O$ never appears. Without (2) there is no bridge from cancellation to overtime. Clue (2) is the indispensable bridge.

Thinking "cancelled flights always mean overtime" would have imported a background fact. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. In this log, overtime is mentioned only in (2). Drop (2) and a model with $D$ true, $C$ true, and $O$ false satisfies the remaining clues.

**1.** Essential here means: the overtime conclusion is not a consequence of (1) and (3) alone. It is a consequence of (1), (2), and (3) together. That is a claim about derivability, not a claim that (2) is the only interesting sentence in the log.

**2.** Letter A still follows from (1) and (3) without (2). Cancellation does not need the bridge. Overtime does. Mixing those two conclusions is how mixing those conclusions decides (2) is optional.

**3.** What would make (2) inessential? A third clue that already asserted $O$, or a rewritten (1) that ran from delay straight to overtime. The given (1) stops at cancellation.

The recovered cascade uses (2) as the second arrow, and without that arrow overtime is free.

Derivability is the test. From (1) and (3) you can write $C$, and you cannot write $O$, because $O$ is not a logical consequence of those two sentences. Adding (2) creates the missing consequence. That is what "essential" means here: not "interesting," not "about overtime," but load-bearing for the overtime conclusion.

If the log had also contained "the crew always works overtime on delay days," then (2) would be redundant for this conclusion. It does not. The three clues are two arrows and a delay, and only the second arrow mentions overtime.

so the statement is True.`,
      `**D.** → False

If $D$ is false, rule (1) has a false antecedent and is silent. It does not yield $\\neg C$. Inferring "no delay, so no cancellation" is the inverse of (1), which is not equivalent. A crew shortage could still cancel Flight $305$. The guarantee claimed here does not exist,

If $D$ is false, rule (1) has a false antecedent and is silent. It does not yield $\\neg C$. Inferring "no delay, so no cancellation" is the inverse of (1), which is not equivalent. A crew shortage could still cancel Flight $305$. The guarantee claimed here does not exist.

Treating (1) as a biconditional would have accepted the inverse. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The recovered rule is one-way. What would make the claim true is $D\\Leftrightarrow C$, which the log does not state.

Silence on a quiet day for Flight $202$ is the same idle-antecedent fact as the rain-stop day in the concert task.

so the statement is False.`,
      `**E.** → False

From (3), $D$ is true. Then (1) forces $C$, and (2) forces $O$. Any assignment with $O$ false would have to break (2) once $C$ is true. There is no model of (1), (2), and (3) in which the crew is off duty. The three clues leave no leftover freedom,

From (3), $D$ is true. Then (1) forces $C$, and (2) forces $O$. Any assignment with $O$ false would have to break (2) once $C$ is true. There is no model of (1), (2), and (3) in which the crew is off duty. The three clues leave no leftover freedom.

Dropping (2) would have found such a scenario, which is why (2) is essential in letter C. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. With all three clues, overtime is pinned. The extra case work is: try $O$ false, derive $C$ false from (2)'s contrapositive, then $D$ false from (1)'s contrapositive, contradicting (3).

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 22,
    solution_overview: `**Part 1: Setup.**

Three facts sit in the log: two rules and one observation. $$D \\Rightarrow C, \\qquad C \\Rightarrow O, \\qquad D \\text{ is true}$$

with $D$ = Flight 202 is delayed, $C$ = Flight 305 is cancelled, $O$ = the ground crew works overtime.

**Part 2: Relatives.**

The engine is **modus ponens**: when you know “if $A$ then $B$” and you also know $A$, you may write down $B$. Fire it twice and the facts cascade, the delay is real, so rule (1) hands over the cancellation; the cancellation is now real, so rule (2) hands over the overtime. $$D \\;\\longrightarrow\\; C \\;\\longrightarrow\\; O$$

Two further checks are worth making.

**Part 3: Solve.**

**Is any clue load-bearing?** Rules (1) and (3) mention only $D$ and $C$, the word “overtime” never appears in them, so without rule (2) the reasoning stops dead at the cancellation. **What would a quiet day tell us?** If Flight 202 ran on time, rule (1) would have a false “if” part and would simply fall silent: Flight 305 could still be cancelled by a crew shortage.`,
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

The professor asserts $P\\Rightarrow Q$: at least 10 hours buys a pass. An implication is false in exactly one row, $P$ true and $Q$ false. That row is a student who studied at least 10 hours and did not pass, which is $P\\land\\neg Q$. The quoted negation matches that unique failure.

It is a single counterexample, not another if-then rule. Writing "if they study 10 hours then they fail" would have produced $P\\Rightarrow\\neg Q$, a rival policy, not the negation of this one. That is why $P\\Rightarrow\\neg Q$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The recovered negation is the failure row $P\\land\\neg Q$. Anna, who skips studying and still passes, is a different row and is not this letter's witness.

Negation of an implication is not an implication. It is the existence of a counterexample of a specific shape: hours put in, exam failed. A student who studied $9$ hours and failed does not negate the professor's claim, because $P$ is false of that student. A student who studied $10$ hours and passed confirms the claim rather than breaking it.

The recovered unique false row is $P\\land\\neg Q$. The quoted sentence is that row in English. Rival rewritings such as "nobody who studies $10$ hours passes" are different policies.

so the statement is True.`,
      `**B.** → False

The converse is $Q\\Rightarrow P$. Anna: $P$ false (no studying), $Q$ true (pass). Then $Q\\Rightarrow P$ fails, while $P\\Rightarrow Q$ holds because its antecedent is false. A true original does not force a true converse. The professor never said that *only* $10$-hour students pass,

The converse is $Q\\Rightarrow P$. Anna: $P$ false (no studying), $Q$ true (pass). Then $Q\\Rightarrow P$ fails, while $P\\Rightarrow Q$ holds because its antecedent is false. A true original does not force a true converse. The professor never said that *only* $10$-hour students pass.

Anna is the extra file this letter needs. She does not repeat the overview's pairing chart; she instantiates the converse's failure row. Thinking "the professor's claim is true, so every relative is true" would have mixed the pairs. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

so the statement is False.`,
      `**C.** → True

Anna is $P$ false, $Q$ true. The converse "every passer studied $10$ hours" is false of her. The original only constrains students with $P$ true, so she is outside its scope. She is a counterexample to the converse and not to the original. Both halves of the statement hold,

Anna is $P$ false, $Q$ true. The converse "every passer studied $10$ hours" is false of her. The original only constrains students with $P$ true, so she is outside its scope. She is a counterexample to the converse and not to the original. Both halves of the statement hold.

Using Anna against the original would have been testing the idle row. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. False "if" cannot refute $P\\Rightarrow Q$.

so the statement is True.`,
      `**D.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$. The contrapositive is $\\neg Q\\Rightarrow\\neg P$. The arrows run opposite ways. Anna makes the inverse false ($\\neg P$ true, $\\neg Q$ false) and leaves the contrapositive untouched (she is not a failure). They are not equivalent; the inverse pairs with the converse,

The inverse is $\\neg P\\Rightarrow\\neg Q$. The contrapositive is $\\neg Q\\Rightarrow\\neg P$. The arrows run opposite ways. Anna makes the inverse false ($\\neg P$ true, $\\neg Q$ false) and leaves the contrapositive untouched (she is not a failure). They are not equivalent; the inverse pairs with the converse.

Treating inverse and contrapositive as two names for "the backwards one" would have accepted this letter. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Swap-and-negate of the original is the contrapositive, not the inverse.

What would make them equivalent? Nothing in general: Anna already separates them. Inverse false, contrapositive idle-to-true.

so the statement is False.`,
      `**E.** → True

From a known failure $\\neg Q$, the recovered contrapositive $\\neg Q\\Rightarrow\\neg P$ yields $\\neg P$: the student studied less than 10 hours. That is modus tollens on the professor's claim. The inference is valid because the contrapositive inherits the original's guarantee.

Concluding "they studied at least 10 hours" from a failure would have run the original forward from a false $Q$, which is not licensed. That is why $Q$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. False $Q$ does not tell you $P$. It tells you $\\neg P$, once the contrapositive is in hand.

**1.** Anna is not a counterexample to this inference. Anna passed, so $\\neg Q$ is false of her and modus tollens never fires.

**2.** A student who put in 10 hours and failed would kill the professor's claim itself. Then the contrapositive would fail with it. This letter assumes the claim, then reads a failure.

**3.** What would make the conclusion invalid? Using the converse, "every passer studied 10 hours," on a failure. The converse is about passers, not failers, and the overview already showed it can fail while the original holds.

The recovered contrapositive licenses $\\neg P$ from $\\neg Q$.

Modus tollens is contrappositive plus the known $\\neg Q$. The professor's claim, assumed true, becomes $\\neg Q\\Rightarrow\\neg P$, and a recorded fail loads the antecedent. The hours conclusion is $\\neg P$, under $10$ hours, not "we have no information."

Saying "maybe they studied $10$ hours and the professor was wrong" has dropped the standing assumption that the claim holds. The recovered isolation is checked against the claim using $10$, which is the figure the sessions actually produce. This letter is an inference from the claim, not a test of the claim. Anna still does not affect it: she is a passer, so $\\neg Q$ is false of her.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 23,
    solution_overview: `**Part 1: Setup.**

$P$ = “the student studies at least 10 hours”, $Q$ = “the student passes”. The professor asserts $P \\Rightarrow Q$: ten hours buys a pass. **Breaking that promise** takes one very specific student, one who put in the hours and failed anyway. In symbols the negation is $P \\land \\neg Q$, and note that it is not another if-then rule but a single counterexample.

**Part 2: Relatives.**

**Anna has the opposite shape:** she did not study ($P$ false) yet passed ($Q$ true). Feed her to each version of the claim in turn. The **original** never speaks about students who skipped the studying, so Anna falls outside its scope and it survives her intact.

**Part 3: Solve.**

The **converse** $Q \\Rightarrow P$, “every passer studied 10 hours”, is refuted by her on the spot. The **inverse** $\\neg P \\Rightarrow \\neg Q$, “skip the hours and you fail”, is refuted by her too. That is no coincidence: converse and inverse are contrapositives of each other, so they always stand or fall together. The **contrapositive** $\\neg Q \\Rightarrow \\neg P$, “anyone who failed studied under 10 hours”, is untouched, and it is the one form the professor's claim actually guarantees.`,
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

The clause is $F\\Rightarrow P$: miss the deadline, then a penalty applies. "$F$ is sufficient for $P$" is that same arrow. Missing the deadline is enough, on its own, to trigger the fee. Sufficient names the tail of the signed clause, not every other breach.

Wanting lateness to be necessary as well would have been reading the converse. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Necessity of $F$ for $P$ would mean every penalty proves a missed deadline, which the clause never said.

The recovered original is this sufficient-condition sentence. Other breaches can still trigger fees; sufficiency of lateness does not forbid them.

Sufficiency of lateness does not say lateness is the only way to be fined. A quality breach can still trigger $P$ while $F$ is false. That situation leaves $F\\Rightarrow P$ true (false antecedent) and is exactly why the converse can fail.

The recovered clause is one signed arrow. This letter only checks that the English word "sufficient" names the tail of that arrow. It does.

so the statement is True.`,
      `**B.** → False

The converse $P\\Rightarrow F$ would make every penalty a proof of lateness. An on-time but faulty job has $F$ false and $P$ true: the original holds because its antecedent is false, while the converse fails. The clause does not guarantee the converse. Contracts fine people for other things.

That faulty-but-punctual job is extra case work. Thinking "penalty means late" imported the converse as if it were signed. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. It was not.

**1.** The recovered pairing already split original-plus-contrapositive from converse-plus-inverse. Signing $F\\Rightarrow P$ buys the first pair, not the second.

**2.** What would make the converse true whenever the clause is true? A biconditional $F\\Leftrightarrow P$, "penalty if and only if late." The stem signed one direction.

The recovered on-time faulty job is the witness that converse can fail.

The clause is a promise about late jobs, not a taxonomy of every penalty. A penalty for a safety violation on an on-time job is compatible with the signed $F\\Rightarrow P$ and incompatible with $P\\Rightarrow F$. That is the extra file this letter needs, and it is the same file that later kills the inverse.

Equivalence of converse with original would hold only for a biconditional. The stem did not sign "penalty if and only if late." Signing one direction never purchases the reverse direction.

A penalty on an on-time job is not a loophole in the clause. It is a situation the clause never addressed. The signed arrow constrains late jobs only. Treating every penalty as evidence of lateness is extra law, recovered as the converse $P\\Rightarrow F$, which this extra file falsifies while leaving $F\\Rightarrow P$ standing.

The recovered second pair is that extra law together with the inverse. This letter is the converse half. Signing the original never purchased it.

so the statement is False.`,
      `**C.** → True

Swap and negate the recovered clause $F\\Rightarrow P$ to get $\\neg P\\Rightarrow\\neg F$: no penalty, therefore the contractor did not miss the deadline. That is the contrapositive, so it is guaranteed by the clause. Signing the clause commits you to this rewriting too.

Writing $\\neg F\\Rightarrow\\neg P$ would have produced the inverse, which lives in the other pair. Keeping $\\neg F\\Rightarrow\\neg P$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Inverse is a promise that punctual work is never fined, and the clause never made that promise.

The recovered first pair is original together with this contrapositive. Both true, or both false. The signed clause is true, so this rewriting is true.

No-penalty days are the days the contrapositive constrains. If no fee applies, the contractor cannot have missed the deadline, or the signed clause would already have triggered a fee. That is $\\neg P\\Rightarrow\\neg F$, recovered as the partner of $F\\Rightarrow P$.

A punctual but faulty job that is still fined has $P$ true, so the contrapositive's antecedent $\\neg P$ is false and the rewriting is idle. Idle is not false. The inverse, by contrast, is false of that job.

so the statement is True.`,
      `**D.** → False

The inverse $\\neg F\\Rightarrow\\neg P$ says punctual contractors are never fined. The same on-time faulty job has $\\neg F$ true and $P$ true, so the inverse fails while the original stands. The inverse is a promise about other breaches that the clause never made.

Thinking "finish on time and you are safe" would have signed a different contract. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The recovered clause is silent about quality, safety, and every breach except lateness.

**1.** Inverse pairs with converse. The faulty-but-punctual job kills both together. Killing the inverse does not touch $F\\Rightarrow P$.

**2.** What would make the inverse true given the clause? Adding "and the only penalty trigger is lateness." That extra uniqueness is exactly what the stem omitted.

The recovered inverse is $\\neg F\\Rightarrow\\neg P$, and the extra job is a counterexample.

Punctual-and-safe is not the only way $\\neg F$ can hold. Punctual-and-faulty is another, and on that file $P$ can still be true. The inverse claims that every $\\neg F$ day is a $\\neg P$ day. One fined punctual job kills it.

The recovered second pair is converse with inverse. This letter is the inverse half of that pair. The original clause is in the other pair and survives the extra job.

The inverse would be a warranty: finish by the deadline and you will not be fined, whatever else goes wrong. Contracts do not give that warranty unless they write it. The recovered clause wrote only the lateness trigger. The extra file is an on-time quality breach with a fee, $\\neg F$ true and $P$ true, which is the inverse's forbidden cell.

Pairing with the converse is why this inverse fails exactly when letter B fails. One extra job, two false relatives, original untouched.

so the statement is False.`,
      `**E.** → True

The converse $P\\Rightarrow F$ has contrapositive $\\neg F\\Rightarrow\\neg P$, which is the inverse. Those two always share a truth value. Neither pair is equivalent to the original $F\\Rightarrow P$ in general. The pairing described is a general fact about conditionals.

The faulty-but-punctual job makes converse and inverse false together, while the signed clause stays true. That is the pair-split this chapter keeps repeating: original with contrapositive, converse with inverse.

Thinking inverse tracked the original would have been using the wrong pair. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Swap-and-negate of the converse is the inverse, not swap-and-negate of the original.

The recovered pairing holds for this clause and for every other conditional.

The pairing is mechanical: swap and negate the converse, and the inverse appears. Truth values therefore travel together, for this contract and for every other conditional, including ones that have nothing to do with deadlines.

What the pairing does not do is attach that shared value to the signed clause. The extra faulty-but-punctual job is a witness that the shared value can be false while $F\\Rightarrow P$ stays true. A country with no penalties except lateness would make converse and inverse true together; that would still be a coincidence of extra promises, not a law of the signed clause.

Calling the pairing "always" is correct and still modest. It does not say the inverse is true. It says the inverse agrees with the converse, true or false together. The recovered extra job makes them false together here. A lateness-only penalty schedule would make them true together. Either way they move as a pair, and either way they can peel off from the signed clause.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 24,
    solution_overview: `**Part 1: Setup.**

With $F$ = “the contractor misses the deadline” and $P$ = “a penalty fee applies”, the clause is the conditional $F \\Rightarrow P$: condition first, promised consequence second. From any conditional you can build three relatives, and they fall into **two equivalence pairs**.

**Part 2: Relatives.**

The first pair holds the original clause together with its contrapositive:

$$F \\Rightarrow P \\;\\equiv\\; \\neg P \\Rightarrow \\neg F$$

The second pair holds the converse together with the inverse:

$$P \\Rightarrow F \\;\\equiv\\; \\neg F \\Rightarrow \\neg P$$

The second pairing is easy to verify: swap and negate the two halves of the converse $P \\Rightarrow F$ and the inverse falls out. So converse and inverse always share a truth value, but that shared value has nothing to do with the truth of the clause itself. **Why the second pair can fail here.** Contracts punish other breaches too.

**Part 3: Solve.**

A contractor who finishes on time but delivers faulty work can still be fined: $F$ false, $P$ true. That one situation makes the converse and the inverse false together, while the clause the parties actually signed stands untouched.`,
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

Eligibility is the recovered $G\\land(C\\lor W)$. Student M has GPA $3.7$ so $G$ true, credits $50<60$ so $C$ false, and no waiver so $W$ false. Then $C\\lor W$ is false, and the conjunction fails. M is not eligible. The GPA sits outside the bracket and cannot fill it.

Letting $3.7$ override the credit shortfall would have treated GPA as filling the bracket. Keeping $3.7$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. It does not. The unless-clause waives credits, not GPA, and M has not even received that waiver.

The recovered M row is a no: true outer conjunct, empty bracket.

M is $10$ credits short and has no waiver. GPA $3.7$ clears $G$ and cannot be spent as a substitute for the missing credits. The recovered formula puts $G$ outside the bracket on purpose: the Dean's unless-clause waives $C$, not $G$, and M has not received even that waiver.

Paying M because $3.7$ "looks strong" would have been grading a transcript instead of evaluating $G\\land(C\\lor W)$. Working from the isolated values, $3.7$ is the figure that is checked, not the detour that produced $G\\land(C\\lor W)$. That contrast is the reason the verdict goes the way it does. Strength of GPA above $3.5$ is already fully used once $G$ is true. The empty bracket remains empty.

so the statement is False.`,
      `**B.** → True

Student N has GPA $3.6$ so $G$ true, credits $45<60$ so $C$ false, and a waiver so $W$ true. Then $C\\lor W$ is true and the conjunction holds. N is eligible despite being $15$ credits short. The waiver exists for exactly that shortfall.

Denying N because $45<60$ would have ignored the unless-clause. Once $45<60$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. Credits and waiver are alternatives inside the recovered bracket. Either one fills it.

The recovered N row is a yes.

N is $15$ credits short, worse than M on credits, and still eligible. The difference is $W$. The waiver is not a hint; it is a token inside the recovered or. Once $W$ is true, $C$ can fail by any margin.

Comparing $45$ with $50$ and thinking N was in worse shape than M would have ranked the wrong coordinate. So the letter reads the claim against $45$; $50$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $45$ stays in the write-up. That contrast is the reason the verdict goes the way it does. Credits matter only when $W$ is false. N's $W$ is true. The recovered N row is a yes for that reason.

so the statement is True.`,
      `**C.** → True

Keep M's GPA $3.7$ and $50$ credits, and set $W$ true. Then $C\\lor W$ becomes true while $G$ stays true, so $G\\land(C\\lor W)$ turns true. M would become eligible. The waiver is the one thing missing from M's file.

This is extra arithmetic on M's recovered file: flip one bit, $W$. Nothing else changes. Thinking M's $50$ credits were an independent veto would have missed that credits live inside the or with the waiver. The path that matches the stem therefore holds $50$ fixed and only then reads the claim. That contrast is the reason the verdict goes the way it does.

N already has that bit flipped and is eligible. Granting M the same waiver puts M on N's side of the table, GPA still above $3.5$.

M-with-waiver is not a new student. It is M's recovered file with one bit flipped. GPA stays $3.7$, credits stay $50$, and $W$ becomes true. Then the bracket fills and the conjunction turns true, matching N's recovered yes.

Thinking $50$ credits were below a hard floor, waiver or not, would have put $C$ outside the bracket. So the letter reads the claim against $50$; $C$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $50$ stays in the write-up. The stem put $C$ inside the or with $W$. That is why this hypothetical changes the verdict on M.

so the statement is True.`,
      `**D.** → False

A waiver fills only the bracket $C\\lor W$. It cannot make $G$ true. A student with GPA $3.0$ and a waiver has $G$ false, so the conjunction is false no matter how $W$ is set. The Dean waives the credit-hour requirement, nothing else. The waiver is never sufficient on its own,

A waiver fills only the bracket $C\\lor W$. It cannot make $G$ true. A student with GPA $3.0$ and a waiver has $G$ false, so the conjunction is false no matter how $W$ is set. The Dean waives the credit-hour requirement, nothing else. The waiver is never sufficient on its own.

That $3.0$ student is extra case work, not M or N. Both given students have GPA at least $3.5$. The stem's "unless" sentence even says that with a waiver, only the GPA condition needs to be met, which still requires the GPA condition.

Treating a Dean's letter as a golden ticket would have skipped $G$. The path that matches the stem therefore holds $G$ fixed and only then reads the claim. $G$ sits outside the bracket.

so the statement is False.`,
      `**E.** → False

GPA below $3.5$ makes $G$ false. Credits and waiver live inside the bracket and cannot repair a false outer conjunct. Even $W$ true and $C$ true leave $G\\land(C\\lor W)$ false when $G$ is false. No such eligible student exists. $G$ guards every entrance.

Stacking waiver plus $60$ credits as a substitute for GPA would have been moving those tokens outside the bracket. The recovered isolation is checked against the claim using $60$, which is the figure the sessions actually produce. The recovered formula does not allow that move. The stem's unless-sentence even says that with a waiver, only the GPA condition needs to be met, which still requires the GPA condition.

**1.** Invent a student with GPA $3.0$, $60$ credits, and a waiver. Then $C$ and $W$ are both true, so the bracket is true, and $G$ is still false. The conjunction is false.

**2.** Both given students M and N have GPA at least $3.5$. Sampling only those two files never tests a weak GPA. This letter is the weak-GPA file the overview already ruled out.

**3.** What would make a sub-$3.5$ student eligible? Putting $G$ inside the bracket with $C$ and $W$, so that a waiver could cover GPA too. The Dean's waiver, as written, covers credits only.

The recovered $G$ is a non-negotiable outer conjunct.

The claim stacks waiver and sufficient credits as if they could outvote a weak GPA. Both of those tokens live in $C\\lor W$. A false $G$ makes the outer and false no matter how true the bracket is. That is a failed existence claim: there is no file in which $G$ is false and eligibility is true.

The Dean's letter, read slowly, already said so: with a waiver, only the GPA condition needs to be met. "Only the GPA condition" still names a condition. A $3.0$ student with a waiver and $60$ credits meets every token except $G$, and still fails.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 25,
    solution_overview: `**Part 1: Setup.**

Read this rule slowly, because the waiver does less than it first appears to. The default requirement is “GPA at least 3.5 **and** at least 60 credit hours”, and the Dean may waive **only the credit-hour half**. So with $G$, $C$ and $W$ for the GPA condition, the credit condition and the waiver:

$$\\text{Eligible} \\Leftrightarrow G \\land (C \\lor W)$$

The GPA condition sits **outside** the bracket, where no waiver can reach it.

**Part 2: Relatives.**

Inside the bracket, credits and waiver are alternatives, either one is enough. **Student M** (GPA 3.7, 50 credits, no waiver): $G$ is true, but $C$ and $W$ are both false, so the bracket is empty and **M is not eligible**. Grant M a waiver and nothing else changes: the bracket fills and M becomes eligible.

**Part 3: Solve.**

**Student N** (GPA 3.6, 45 credits, waiver granted): $G$ is true and the waiver fills the bracket, so **N is eligible** despite being 15 credits short. The two limits of the waiver follow from the shape of the formula. A waiver alone can never carry a student with a weak GPA, and no combination of credits and waivers rescues a GPA below 3.5, because a false $G$ makes the whole conjunction false.`,
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

Payout is the recovered $(M\\lor A)\\land T$. Traveler M has a documented medical emergency so $M$ true, and purchased $20$ days out with $20\\ge 14$, so $T$ true. Both hurdles cleared:

$$(M\\lor A)\\land T=\\mathrm{T}\\land\\mathrm{T}=\\mathrm{T}.$$

The reason bracket is an or; medical emergency alone fills it. An airline cancel is not required.

Wanting an airline cancel as well would have been running an and inside the bracket. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered M file is paid.

M bought $6$ days earlier than the cutoff. That gap is comfortable; the recovered $T$ is not sitting on day $14$ itself. Medical emergency fills the reason bracket without help from an airline cancel. The recovered and of two true halves pays the claim.

Wanting both $M$ and $A$ would have rewritten the or as an and. Working from the isolated values, $M$ is the figure that is checked, not the detour that produced $A$. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The policy lists two accepted reasons as alternatives. M used one.

Airline cancellation is unused in M's file, and that is allowed. The recovered or needs one accepted reason, not two. M's medical emergency is that one reason, and the recovered $20\\ge 14$ is the timing gate. Both true, payout true.

so the statement is True.`,
      `**B.** → False

Traveler N has an airline cancellation so $A$ true, hence $M\\lor A$ true, and purchased $5$ days out, so $T$ false. Then $(M\\lor A)\\land T$ is false. N is not paid. An impeccable reason does not repair a late purchase. $T$ sits outside the bracket, joined by AND.

Paying N out of sympathy for the airline cancel would have skipped the $14$-day gate. That is why $14$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered N row is a no.

Five days is $9$ days short of the cutoff. That gap is this letter's own comparison, not a second scan of M.

N's reason is as official as a reason gets: the airline cancelled. The recovered bracket is therefore true. The recovered $T$ is false because $5<14$. AND with a false conjunct is false, so the payout is no.

Sympathy for N is not a connective. The $14$-day gate sits outside the bracket on purpose, so that an accepted reason cannot override a late purchase. The recovered N row is that design in one file.

so the statement is False.`,
      `**C.** → True

$T$ sits outside the bracket, joined by AND. If the policy was bought fewer than $14$ days out, $T$ is false and the whole condition is false. The reason for cancellation is never reached. A late purchase blocks every claim, medical or airline.

N is the named instance: $5<14$, unpaid. The extra generality is that the same block hits a medical-emergency late buyer, not only an airline-cancel late buyer. Invent a traveler with $M$ true, $A$ false, and purchase at $5$ days: the bracket is true and $T$ is still false, so still unpaid.

Thinking a documented emergency could override timing would have moved $M$ outside the bracket. That is why $M$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered formula keeps $T$ as a non-negotiable outer conjunct.

Late purchase is a universal block, not a block for airline cancels only. Invent a medical-emergency buyer at $5$ days: $M$ true, $T$ false, unpaid, same as N. Invent an airline-cancel buyer at $13$ days: still $T$ false, still unpaid. The cutoff is $14$ days, recovered as a closed threshold $T\\Leftrightarrow$ (purchase day $\\ge 14$).

Paying a $13$-day buyer would have treated $14$ as approximate. Working from the isolated values, $13$ is the figure that is checked, not the detour that produced $14$. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The policy used a number. N at $5$ days is only the named instance of a rule that applies to every late file.

so the statement is True.`,
      `**D.** → False

Early purchase makes $T$ true but leaves the reason bracket empty unless $M$ or $A$ holds. A change of mind $30$ days out has $T$ true and $M\\lor A$ false, so no payout. Timing is necessary, not sufficient. One hurdle of two is not a free pass.

That change-of-mind traveler is extra case work. M and N both had an accepted reason; this invented traveler has timing without a reason.

**1.** Sufficiency of $T$ would mean $(M\\lor A)\\land T$ collapses to $T$. That would drop the reason bracket. The policy kept both hurdles.

**2.** Seeing M paid after buying $20$ days out and concluding "early purchase is enough" sampled a file that also had $M$ true. After isolating the unknown, the check is against $20$. The figure $M$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $20$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Strip the medical emergency and the recovered bracket goes empty.

**3.** What would make timing sufficient? A policy that paid any early buyer, reason irrelevant. The stem's if-and-only-if still demands $M$ or $A$.

The recovered empty-bracket early buyer is unpaid.

M is a tempting false friend for sufficiency. M bought early and was paid, so early purchase looks like enough. M also had a documented emergency. Strip that emergency, keep the $20$-day purchase, and the recovered bracket goes empty. The invented change-of-mind traveler is that stripped file: $T$ true, $M\\lor A$ false, unpaid.

Sufficiency of timing would make the reason bracket decorative. The policy's if-and-only-if keeps both hurdles. Early purchase is necessary, matching letter C's late-purchase block, and it is not sufficient, matching this empty-bracket file.

Necessary and sufficient split the two hurdles. Letter C already used $T$ as a necessary outer conjunct: late purchase kills every claim. This letter asks whether $T$ is also sufficient. The change-of-mind traveler at $30$ days is the file that says no: timing without a listed reason, recovered bracket empty, unpaid.

so the statement is False.`,
      `**E.** → False

The claim asks for a payout with $\\neg M$ and $\\neg T$, using only $A$. Even with $A$ true, $\\neg T$ still falsifies the outer AND. Traveler N is this pattern (airline cancel, late purchase) and receives nothing. An accepted reason substitutes for the other reason, never for the purchase date,

The claim asks for a payout with $\\neg M$ and $\\neg T$, using only $A$. Even with $A$ true, $\\neg T$ still falsifies the outer AND. Traveler N is this pattern (airline cancel, late purchase) and receives nothing. An accepted reason substitutes for the other reason, never for the purchase date.

Thinking "airline cancel is so official it overrides timing" would have moved $A$ outside the bracket. Keeping $A$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The recovered formula keeps $T$ as a non-negotiable outer conjunct.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 26,
    solution_overview: `**Part 1: Setup.**

The policy sets two independent hurdles, and both must be cleared:

$$\\text{Payout} \\Leftrightarrow (M \\lor A) \\land T$$

where $M$ = a documented medical emergency, $A$ = the airline cancelled the flight, $T$ = the policy was bought at least 14 days before departure. Inside the bracket sits an **or**, so the two accepted reasons for cancelling are interchangeable. Outside it sits an **and**, which makes the 14-day timing condition non-negotiable: it applies to every claim, whatever the reason behind it.

**Part 2: Relatives.**

**Traveler M**, medical emergency, so the bracket is true; bought 20 days out, so $T$ is true. Both hurdles cleared: **the claim is paid.**

**Traveler N**, airline cancellation, so the bracket is true; bought only 5 days out, so $T$ is false.

**Part 3: Solve.**

The second hurdle fails: **nothing is paid**, however blameless the cancellation was. N's file is the general lesson in miniature. An accepted *reason* can substitute for the other reason, never for the *timing*, and the trade does not work the other way either: buying early with no accepted reason, say a simple change of mind, leaves the bracket empty and the claim unpaid.`,
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

The law is $P\\Rightarrow Q$ with $Q$ equal to eligibility, not the act of voting. Its unique failure is $P\\land\\neg Q$: a citizen who is not eligible to vote. The quoted sentence is that failure case, so it is the correct negation.

Writing "a citizen who does not vote" would have swapped eligibility for turnout, which is the Maria trap in a neighbouring letter. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Staying home does not make $Q$ false.

The recovered negation is the barred-citizen row, not a turnout story.

Eligibility is the predicate $Q$, recovered as holding the right, not using it. A citizen barred from the rolls is $P\\land\\neg Q$, the unique failure of $P\\Rightarrow Q$. A citizen who skips an election is $P\\land Q$ still, because skipping does not remove the right.

The quoted negation is the barred-citizen row. Rival sentences about turnout, registration, or "a citizen who does not vote" test a different predicate and would not negate the law as written.

so the statement is True.`,
      `**B.** → True

John has $\\neg Q$ (not eligible). The recovered contrapositive $\\neg Q\\Rightarrow\\neg P$ yields $\\neg P$: John is not a citizen. That is modus tollens on the law. The conclusion is validly drawn because the contrapositive inherits the law's truth.

Concluding "John is a citizen" from ineligibility would have run the arrow backwards. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Ineligibility of a citizen is exactly the failure row of the law, so a true law forbids that pair and forces $\\neg P$.

Maria, who is eligible and stays home, never triggers this inference: her $Q$ is still true.

John's ineligibility is $\\neg Q$. The law, assumed true, supplies $\\neg Q\\Rightarrow\\neg P$. Modus tollens writes $\\neg P$: John is not a citizen. That is valid reasoning from the law, not a sociological claim about why John stayed off the rolls.

Concluding "John might still be a citizen who forgot to register" has swapped eligibility for turnout again. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Forgetting to register, in this stem, does not make $Q$ false. $Q$ false means barred. A barred citizen would already have broken the law, so a true law forbids that pair.

so the statement is True.`,
      `**C.** → False

$Q$ is eligibility, not the act of voting. Maria is a citizen who keeps her eligibility whether or not she registers. She has $P$ true and $Q$ true, which satisfies $P\\Rightarrow Q$. A counterexample would need a citizen barred from voting. Staying home does not flip $Q$,

Q is eligibility, not the act of voting. Maria is a citizen who keeps her eligibility whether or not she registers. She has $P$ true and $Q$ true, which satisfies $P\\Rightarrow Q$. A counterexample would need a citizen barred from voting. Staying home does not flip $Q$.

Treating "did not cast a vote" as $\\neg Q$ would have manufactured a false counterexample. The recovered isolation is checked against the claim using $\\neg Q$, which is the figure the sessions actually produce. That contrast is the reason the verdict goes the way it does. The recovered $Q$ is the right, not the turnout. Maria is law-abiding on both coordinates.

What would make Maria a counterexample? A law about actually voting, or a country that strips eligibility from citizens who skip registration. The stem's $Q$ is eligibility.

so the statement is False.`,
      `**D.** → True

A non-citizen long-term resident who may vote has $Q$ true and $P$ false. That is exactly how $Q\\Rightarrow P$ fails. The original law never forbids eligibility for non-citizens, so the converse can be false in such a country. The original only forces eligibility for citizens,

A non-citizen long-term resident who may vote has $Q$ true and $P$ false. That is exactly how $Q\\Rightarrow P$ fails. The original law never forbids eligibility for non-citizens, so the converse can be false in such a country. The original only forces eligibility for citizens.

That resident is extra case work the stem invites. Thinking "the law is true, so only citizens vote" would have smuggled in the converse. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

so the statement is True.`,
      `**E.** → True

The inverse $\\neg P\\Rightarrow\\neg Q$ has contrapositive $Q\\Rightarrow P$, the converse. Those two always agree. The long-term resident who may vote has $Q$ true and $P$ false, which makes both converse and inverse false together. In a country with no such residents both could be true together. Shared truth value is the pairing, not a claim that either is true here.

Thinking inverse tracks the original would have been using the wrong pair. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Original tracks the contrapositive. Inverse tracks the converse.

**1.** Swap and negate $\\neg P\\Rightarrow\\neg Q$ and $Q\\Rightarrow P$ falls out. That algebraic check does not use the citizenship story. The resident is only a witness that the shared value can be false while the law stays true.

**2.** The law $P\\Rightarrow Q$ never forbids non-citizen eligibility. It only forces eligibility for citizens. So converse and inverse are extra claims about non-citizens, free to fail.

**3.** What would make inverse track the original? A biconditional "eligible if and only if a citizen." The stem wrote one arrow.

The recovered pairing is converse with inverse.

Shared truth value is not shared truth. Converse and inverse can both be false, as with the long-term resident who may vote, or both true, as in a country that ties eligibility tightly to citizenship. Either way they agree with each other, and either way they can disagree with the original law.

The resident file has $Q$ true and $P$ false. That kills $Q\\Rightarrow P$ and also kills $\\neg P\\Rightarrow\\neg Q$, because $\\neg P$ is true while $\\neg Q$ is false. The original $P\\Rightarrow Q$ is idle-to-true of that resident (false $P$). The recovered pairing is that agreement between the second pair, not a claim that non-citizens are barred.

so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 27,
    solution_overview: `**Part 1: Setup.**

$P$ = “the person is a citizen”, $Q$ = “the person is **eligible** to vote”. The law is $P \\Rightarrow Q$. **The word to watch is “eligible”.** $Q$ is about holding the right, not about using it.

**Part 2: Relatives.**

Registering, queueing and marking a ballot are later choices, and skipping them does not make $Q$ false. Maria, a citizen who stays home, therefore has $P$ true and $Q$ true, a perfectly law-abiding pair, not a violation. **Breaking the law** would take a citizen who is barred from voting, $P \\land \\neg Q$. That case, and nothing else, is the negation of $P \\Rightarrow Q$.

**Part 3: Solve.**

**Reasoning safely with the law.** The contrapositive $\\neg Q \\Rightarrow \\neg P$ is guaranteed, so John's ineligibility really does prove he is not a citizen. The converse $Q \\Rightarrow P$ is not guaranteed, and in a country where long-term residents may vote it is plainly false: eligible, yet not a citizen. The inverse $\\neg P \\Rightarrow \\neg Q$ says exactly what that converse says, swap and negate its halves and the converse comes back, so those two always rise and fall together.`,
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

The memo's skeleton is: $P\\Rightarrow Q$, $Q$, therefore $P$. That is affirming the consequent. A rival leaving the market can make $Q$ true while $P$ stays false: both premises hold and the conclusion fails. The premise licenses traffic in one direction only, and walking back along the arrow is not allowed. Invalid,

The memo's skeleton is: $P\\Rightarrow Q$, $Q$, therefore $P$. That is affirming the consequent. A rival leaving the market can make $Q$ true while $P$ stays false: both premises hold and the conclusion fails. The premise licenses traffic in one direction only, and walking back along the arrow is not allowed. Invalid.

Thinking "sales rose, so the budget must have risen" would have been repeating the memo. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The extra case is the departing competitor.

so the statement is False.`,
      `**B.** → False

The restatement is $P\\Rightarrow Q$, $\\neg P$, therefore $\\neg Q$: the inverse. The same rival-exit story has $\\neg P$ true and $Q$ true, so $\\neg Q$ is false. Still invalid. From "we did not increase the budget" the original conditional says nothing about sales. Concluding that sales fell is another walk in the wrong direction,

The restatement is $P\\Rightarrow Q$, $\\neg P$, therefore $\\neg Q$: the inverse. The same rival-exit story has $\\neg P$ true and $Q$ true, so $\\neg Q$ is false. Still invalid. From "we did not increase the budget" the original conditional says nothing about sales. Concluding that sales fell is another walk in the wrong direction.

Thinking "denying the if-part is safer" would have swapped one fallacy for another. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Inverse is not modus tollens.

so the statement is False.`,
      `**C.** → True

Now the premises are $P\\Rightarrow Q$ and $\\neg Q$, concluding $\\neg P$. That is modus tollens, equivalently running the contrapositive $\\neg Q\\Rightarrow\\neg P$. Valid. From "sales did not rise" to "the budget did not rise" is the one reshuffle that is safe.

Mixing this with letter B would have denied $P$ and concluded $\\neg Q$. So the letter reads the claim against $P$; $\\neg Q$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $P$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered safe move denies $Q$ and concludes $\\neg P$.

The original memo affirmed $Q$ and concluded $P$, which is the illegal reverse walk. This restatement flips the observed fact to $\\neg Q$ and walks the legal contrapose. A departing competitor cannot produce "sales did not rise" while the implication $P\\Rightarrow Q$ holds and $P$ is true; if sales stayed flat, the budget cannot have been increased. That is why this rewrite is valid and the original memo is not.

The original memo observed $Q$ and walked backwards. This letter observes $\\neg Q$ and walks the contrapose, which is the one legal reverse. Mixing the two directions is how a student copies letter B's inverse and calls it a repair. The recovered safe skeleton is $P\\Rightarrow Q$, $\\neg Q$, therefore $\\neg P$.

so the statement is True.`,
      `**D.** → True

The memo needs the missing arrow $Q\\Rightarrow P$. Upgrading the premise to $P\\Leftrightarrow Q$ supplies both directions. Then observing $Q$ really does force $P$, and the original conclusion follows. A biconditional is the cheapest honest way to buy the converse alongside the original.

Keeping $P\\Rightarrow Q$ and still wanted $P$ from $Q$ would have been affirming the consequent again. So the letter reads the claim against $P\\Rightarrow Q$; $Q$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $P\\Rightarrow Q$ stays in the write-up. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The extra repair is the second arrow, not a louder first arrow.

**1.** Original skeleton: $P\\Rightarrow Q$, $Q$, therefore $P$. Invalid, because $Q$ can arrive by other routes.

**2.** With $P\\Leftrightarrow Q$, the reverse $Q\\Rightarrow P$ is now a premise. Observing $Q$ yields $P$ by a legal modus ponens on that reverse arrow.

**3.** A one-way strengthening such as "sales increase only if we increase the budget" is exactly $Q\\Rightarrow P$, which would also repair the memo. The claim names the biconditional, which includes that reverse and keeps the original $P\\Rightarrow Q$. Both repairs work; the biconditional is the one named.

What would leave the memo invalid? Keeping a one-way "if budget then sales" after observing sales. That is the unrepaired stem. Against a biconditional rewrite, the recovered conclusion $P$ follows.

A competitor leaving the market is then no longer a counter-model, because $Q$ without $P$ would break the new reverse arrow. That is the whole point of buying $Q\\Rightarrow P$: it outlaws the extra-cause story that made the original memo invalid. The cheapest honest upgrade is the one the claim named.

The recovered original skeleton is invalid precisely because that extra-cause story is allowed. A biconditional deletes the story. Observing sales then really does force the budget increase, which is the memo's conclusion, now legally drawn.

so the statement is True.`,
      `**E.** → True

"If it rains, the ground gets wet; the ground is wet; therefore it is raining" is $P\\Rightarrow Q$, $Q$, therefore $P$. Same form as the memo. A sprinkler plays the role of the departing competitor. Same fallacy, different story. Wet ground does not prove rain any more than rising sales prove a bigger marketing budget,

"If it rains, the ground gets wet; the ground is wet; therefore it is raining" is $P\\Rightarrow Q$, $Q$, therefore $P$. Same form as the memo. A sprinkler plays the role of the departing competitor. Same fallacy, different story. Wet ground does not prove rain any more than rising sales prove a bigger marketing budget.

Thinking the weather story was modus ponens would have started from rain rather than from wet ground. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 28,
    solution_overview: `**Part 1: Setup.**

Strip the memo down to its skeleton, with $P$ = “we increased the marketing budget” and $Q$ = “sales increased”:

premise $P \\Rightarrow Q$; premise $Q$; conclusion $P$. That is the classic error called **affirming the consequent**. The premise licenses traffic in one direction only, and walking back along the arrow is not allowed.

**Part 2: Relatives.**

Concretely: a competitor may have left the market, lifting sales while the budget never moved. No premise is violated, yet the conclusion is false, which is exactly what “invalid” means.

**Part 3: Solve.**

**Which reshuffles are safe?**

From $\\neg P$ (no extra budget) to $\\neg Q$ (no sales growth) is the **inverse**, the same mistake in a different hat, and the departing competitor refutes it too. From $\\neg Q$ (sales did not rise) to $\\neg P$ (the budget did not rise) is **modus tollens**, and it is valid, because it merely runs the contrapositive $\\neg Q \\Rightarrow \\neg P$ forwards. **The repair.** What the memo helps itself to is the missing direction $Q \\Rightarrow P$, and the cheapest way to buy it honestly is to upgrade the premise to a biconditional $P \\Leftrightarrow Q$, which contains both arrows at once.`,
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

which is rational. Two irrational inputs, rational sum: the universal claim fails on this pair. Both numbers qualify as inputs, and the promised property fails on a legitimate pair.

Rejecting $-\\sqrt{2}$ as "not a real irrational" would have been inventing a restriction. Keeping $-\\sqrt{2}$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Negatives of irrationals are irrational.

The recovered pair is the classical cancellation. Other pairs such as $\\sqrt{8}+(-\\sqrt{8})$ would also work, but existence of one counterexample is the whole job. The claim named this pair, and the arithmetic lands on a rational.

Zero is $0/1$, a ratio of integers, so it is rational by the definition this chapter uses. Neither input was rational, so the "always irrational" promise fails on a legal pair, not on a trick about zero being "not a number." The recovered arithmetic is a cancellation, and cancellation to a rational is allowed.

so the statement is True.`,
      `**B.** → True

A $\\forall$ claim dies at the first counterexample. The pair $\\sqrt{2}$ and $-\\sqrt{2}$ is that counterexample, so no further pairs need be checked. One failure shows the statement is not a true universal. A claim carrying the word "always" is destroyed by a single failure.

Wanting a second pair such as $\\sqrt{8}+(-\\sqrt{8})$ would have been collecting evidence, not finishing a disproof. The path that matches the stem therefore holds $\\sqrt{8}+(-\\sqrt{8})$ fixed and only then reads the claim.

Letter A exhibited the pair. This letter only records the quantifier fact: universals do not survive a single miss. Proving the claim would have required an argument covering every irrational pair, which is the opposite workload. Disproof is the cheap direction, and it is already finished.

Checking a thousand other irrational sums that stay irrational would not restore the word "always." The recovered counterexample is enough, and further examples are optional illustration, not extra proof. Universals die at the first miss; they are not averaged. Letter A named the pair; this letter only records that one pair is the whole disproof.

so the statement is True.`,
      `**C.** → True

The target is "there is no largest prime." Its negation is "there is a largest prime." A contradiction proof opens with that negation, names the supposed largest prime $p$, and derives a contradiction. That is the correct first line. Opening with "there is no largest prime" would assume the conclusion,

The target is "there is no largest prime." Its negation is "there is a largest prime." A contradiction proof opens with that negation, names the supposed largest prime $p$, and derives a contradiction. That is the correct first line. Opening with "there is no largest prime" would assume the conclusion.

Opening by exhibiting a big prime would have been proving existence of large primes, a different theorem. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

so the statement is True.`,
      `**D.** → False

Checking $x=1$ and $x=2$ proves those two instances only. Let $P(x)$ be $x^{2}<9$: it holds at $1$ and $2$ and fails at $3$. A universal claim needs an argument covering every $x$, not a two-point checklist. Any finite checklist leaves unchecked values that may fail,

Checking $x=1$ and $x=2$ proves those two instances only. Let $P(x)$ be $x^{2}<9$: it holds at $1$ and $2$ and fails at $3$. A universal claim needs an argument covering every $x$, not a two-point checklist. Any finite checklist leaves unchecked values that may fail.

The extra sample $P(x):x^{2}<9$ is this letter's own arithmetic, not a scan from the overview. Thinking two checks cover $\\mathbb N$ would have treated a finite list as a universal proof. Once $\\mathbb N$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

so the statement is False.`,
      `**E.** → True

An $\\exists$ claim asks for one witness. Exhibiting a single $x$ with $P(x)$ true completes the proof. That is the standard existence argument, the mirror image of using one counterexample to kill a $\\forall$ claim. "There exists" asks for one witness and nothing more.

Demanding a second witness would have been proving a stronger "at least two" claim. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The neighbouring universal about irrational sums needed one counterexample to die. An existential needs one example to live. Those two lopsided facts are the overview's table. This letter is the existence half of that table, not a second run of the $\\sqrt{2}$ pair.

Euclid's proof that there is no largest prime is a different job: it proves a universal by contradiction, which is the expensive direction. Existence stays cheap. One witness finishes it. This letter is that cheap direction, named in the overview table's existence row. One witness, one finished proof; a second witness would be a different, stronger claim.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 29,
    solution_overview: `**Part 1: Setup.**

Two lopsided facts drive this whole task: **one example can destroy a “for all” claim but can never establish one**, while for a “there exists” claim a single example is the entire job.

| Claim | To prove it | To disprove it |
| --- | --- | --- |
| $\\forall x\\, P(x)$ | an argument covering every $x$ | one counterexample |
| $\\exists x\\, P(x)$ | one witness | an argument covering every $x$ |

**The irrational sums.** “The sum of two irrational numbers is always irrational” is a $\\forall$ claim, so one bad pair finishes it. Take $\\sqrt2$ and $-\\sqrt2$: both are irrational, and

$$\\sqrt2 + (-\\sqrt2) = 0,$$

which is rational, since $0 = \\tfrac{0}{1}$.

**Part 2: Relatives.**

The word “always” cannot survive that.

**Part 3: Solve.**

**The largest prime.** A **proof by contradiction** always opens with the negation of the target. The target “there is no largest prime” is negated by “there is a largest prime, call it $p$”, so that is the first line; the proof then manufactures a prime larger than $p$ and the assumption collapses.`,
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

The given rule is $P\\Rightarrow Q$. The dolphin argument runs the other way: it lives in water, therefore it must be a fish, which is $Q\\Rightarrow P$. Plug the dolphin in: $Q$ is true and $P$ is false. An implication with a true "if" and a false "then" is false, so the converse fails and the argument is invalid,

The given rule is $P\\Rightarrow Q$. The dolphin argument runs the other way: it lives in water, therefore it must be a fish, which is $Q\\Rightarrow P$. Plug the dolphin in: $Q$ is true and $P$ is false. An implication with a true "if" and a false "then" is false, so the converse fails and the argument is invalid.

Thinking "water animal, so fish" would have been repeating the invalid converse. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

so the statement is True.`,
      `**B.** → True

The lizard argument starts from "does not live in water" ($\\neg Q$) and concludes "is not a fish" ($\\neg P$). That is the contrapositive $\\neg Q\\Rightarrow\\neg P$, which is equivalent to the given rule, so the argument is valid. From "no water" to "no fish" is the one form logically identical to the biology rule,

The lizard argument starts from "does not live in water" ($\\neg Q$) and concludes "is not a fish" ($\\neg P$). That is the contrapositive $\\neg Q\\Rightarrow\\neg P$, which is equivalent to the given rule, so the argument is valid. From "no water" to "no fish" is the one form logically identical to the biology rule.

Thinking this was the converse would have mixed swap-only with swap-and-negate. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

so the statement is True.`,
      `**C.** → False

The snake argument starts from "not a fish" ($\\neg P$) and concludes "does not live in water" ($\\neg Q$). That is the inverse. A water snake is not a fish and still lives in water: $\\neg P$ true, $Q$ true, so $\\neg Q$ false. The inverse therefore has a true hypothesis and a false conclusion. Inverse reasoning is not guaranteed. The first half of the claim (this is the inverse) is right; the "always valid" half is not,

The snake argument starts from "not a fish" ($\\neg P$) and concludes "does not live in water" ($\\neg Q$). That is the inverse. A water snake is not a fish and still lives in water: $\\neg P$ true, $Q$ true, so $\\neg Q$ false. The inverse therefore has a true hypothesis and a false conclusion. Inverse reasoning is not guaranteed. The first half of the claim (this is the inverse) is right; the "always valid" half is not.

Accepting both halves would have treated inverse as contrapositive. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Water snakes are extra case work the stem invites.

so the statement is False.`,
      `**D.** → True

"All fish live in water" is $\\forall x\\,(P(x)\\Rightarrow Q(x))$. Negate by flipping the quantifier and rewriting the implication as its failure case:

$$\\neg\\forall x\\,(P(x)\\Rightarrow Q(x))\\equiv\\exists x\\,(P(x)\\land\\neg Q(x))$$

In words: there exists a fish that does not live in water. That is the quoted sentence.

Writing "all fish do not live in water" would have negated to another universal. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

The dolphin, lizard, and snake files test converse, contrapose, and inverse of the original rule. This letter is a different job: negate the universal "all fish live in water." The recovered negation is an existential failure case, not a rival "no fish live in water." One dry fish would suffice, whether or not such a fish exists in nature. The claim only asks for the correct form.

"All fish do not live in water" would be $\\forall x\\,(P(x)\\Rightarrow\\neg Q(x))$, a different universal. Negation of "all" is "some not," which is the recovered existential. Form, not zoology, is the test. The dolphin and snake files are other relatives; they are not this negation.

so the statement is True.`,
      `**E.** → False

A counterexample to $\\forall x\\,(P(x)\\Rightarrow Q(x))$ must satisfy $P$ and fail $Q$: some fish that does not live in water. The dolphin is not a fish, so $P$ is already false. It therefore never enters the "if" half of the universal claim, and living in water cannot refute "all fish live in water." The dolphin is the reverse of what is needed,

A counterexample to $\\forall x\\,(P(x)\\Rightarrow Q(x))$ must satisfy $P$ and fail $Q$: some fish that does not live in water. The dolphin is not a fish, so $P$ is already false. It therefore never enters the "if" half of the universal claim, and living in water cannot refute "all fish live in water." The dolphin is the reverse of what is needed.

Using the dolphin against the original would have been using the converse's witness on the original. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Letter A correctly uses the dolphin against the converse; this letter incorrectly uses it against the original.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 30,
    solution_overview: `**Part 1: Setup.**

The rule is $P(x) \\Rightarrow Q(x)$: if $x$ is a fish, then $x$ lives in water. Each animal below tests a different way of using it. **Dolphin**, “it lives in water, so it must be a fish” argues from $Q$ back to $P$.

**Part 2: Relatives.**

That is the **converse**, and the dolphin refutes it in person: it lives in water and is a mammal. **Lizard**, “it does not live in water, so it is not a fish” argues from $\\neg Q$ to $\\neg P$. That is the **contrapositive**, the one form logically equivalent to the rule, so the argument is airtight. **Snake**, “it is not a fish, so it does not live in water” argues from $\\neg P$ to $\\neg Q$, the **inverse**.

**Part 3: Solve.**

Water snakes exist, so this pattern is unreliable. **Negating the universal claim.** “All fish live in water” is $\\forall x\\,(P(x) \\Rightarrow Q(x))$, and its negation is

$$\\exists x\\,(P(x) \\land \\neg Q(x)),$$

a fish that does not live in water. That is the shape any counterexample must have, which is exactly why the dolphin, with $P$ false and $Q$ true, cannot serve as one: it is the mirror image of what is needed.`,
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

The policy is $P\\Rightarrow Q$. The unique failure row is $P$ true and $Q$ false, that is $P\\land\\neg Q$: paid on time and did *not* get the discount. The offered sentence keeps both halves true ($P\\land Q$). That is the policy being honoured, not denied. The trap is flipping the wrong half of the conjunction,

The policy is $P\\Rightarrow Q$. The unique failure row is $P$ true and $Q$ false, that is $P\\land\\neg Q$: paid on time and did *not* get the discount. The offered sentence keeps both halves true ($P\\land Q$). That is the policy being honoured, not denied. The trap is flipping the wrong half of the conjunction.

Thinking "paid and discounting" sounded like a negation because it restates the policy would have confused restatement with denial. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

so the statement is False.`,
      `**B.** → False

The policy $P\\Rightarrow Q$ constrains only punctual payers. It never says the discount arrives *only* through prompt payment. A late payer who still gets a holiday $5\\%$ has $P$ false and $Q$ true. Then $P\\Rightarrow Q$ holds (false antecedent), while the converse $Q\\Rightarrow P$ fails. One such customer separates the two,

The policy $P\\Rightarrow Q$ constrains only punctual payers. It never says the discount arrives *only* through prompt payment. A late payer who still gets a holiday $5\\%$ has $P$ false and $Q$ true. Then $P\\Rightarrow Q$ holds (false antecedent), while the converse $Q\\Rightarrow P$ fails. One such customer separates the two.

That holiday customer is extra case work. Thinking the policy locked the converse would have signed a different store rule. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

so the statement is False.`,
      `**C.** → True

Alex paid on day $45$. Compare with the $30$-day line: $45>30$, so $P$ is false. Alex did not receive the discount, so $Q$ is false. An implication $P\\Rightarrow Q$ is true whenever $P$ is false, whatever $Q$ does. Alex therefore sits outside the policy's promise and cannot serve as a counterexample. A counterexample would need $P$ true and $Q$ false.

The extra arithmetic is $45>30$, which is this letter's own comparison, not a scan of a roster. Treating day $45$ as "almost day $30$" would have folded Alex into $P$. So the letter reads the claim against $45$; $P$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $45$ stays in the write-up.

**1.** Hypothesis check: paying within $30$ days? Day $45$ fails, so $P$ is false.

**2.** Failure row of the policy is on-time payment with no discount. Alex is late with no discount, which is $\\neg P\\land\\neg Q$, the idle-idle row, not the failure row.

**3.** What would make Alex a counterexample? Paying on day $20$ with no discount, or rewriting "within $30$" as "within $45$." Against the printed cutoff, $45$ is late.

The recovered policy never promised anything to late payers. Consistency with the policy is exactly that silence. Alex does not refute it.

A customer who paid on day $20$ and still missed the discount would be the genuine counterexample. Alex is five days past the cutoff, not five days inside it. Nearness to day $30$ is not membership in $P$. The recovered comparison $45>30$ keeps Alex idle for the original implication.

The policy's unique failure is punctual payment with no discount. Alex is late with no discount, a different row. Folding day $45$ into "within $30$" would rewrite the cutoff. Against the printed $30$, Alex is consistent with the rule and is not a counterexample.

so the statement is True.`,
      `**D.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: pay late and you get nothing. The policy never speaks about late payers. A holiday promotion can still give a late payer the $5\\%$, making $\\neg P$ true and $Q$ true, so the inverse fails while the policy stands. The inverse forbids discounts to late payers, which the store is free to hand out anyway,

The inverse is $\\neg P\\Rightarrow\\neg Q$: pay late and you get nothing. The policy never speaks about late payers. A holiday promotion can still give a late payer the $5\\%$, making $\\neg P$ true and $Q$ true, so the inverse fails while the policy stands. The inverse forbids discounts to late payers, which the store is free to hand out anyway.

Thinking "late means no discount" would have signed the inverse, not the policy. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

so the statement is False.`,
      `**E.** → False

This statement denies the single rewriting that *is* guaranteed. "No discount, therefore the payment was late" is the contrapositive $\\neg Q\\Rightarrow\\neg P$, which always carries the same truth value as the policy. Claiming that "only the original itself" is guaranteed is exactly wrong: the contrapositive is locked to it. The contrapositive does hold,

This statement denies the single rewriting that *is* guaranteed. "No discount, therefore the payment was late" is the contrapositive $\\neg Q\\Rightarrow\\neg P$, which always carries the same truth value as the policy. Claiming that "only the original itself" is guaranteed is exactly wrong: the contrapositive is locked to it. The contrapositive does hold.

Treating all three relatives as optional extras would have dropped the one relative that is not optional. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 31,
    solution_overview: `**Part 1: Setup.**

$P$ = “the customer pays within 30 days”, $Q$ = “the customer gets the 5% discount”, and the policy is $P \\Rightarrow Q$. **The negation trap.** To deny a promise you keep its condition and destroy its result:

$$\\neg(P \\Rightarrow Q) \\equiv P \\land \\neg Q$$

A customer who paid on time **and** received the discount is the policy being honoured, not broken; that sentence is $P \\land Q$, and slipping it in as the negation is exactly the mistake the first statement invites.

**Part 2: Relatives.**

**Alex** paid on day 45 and received nothing, so $P$ is false and $Q$ is false. The policy makes promises only about punctual payers, so Alex falls outside it entirely, no violation, and no counterexample.

**Part 3: Solve.**

**Which rewritings survive?** Only the contrapositive $\\neg Q \\Rightarrow \\neg P$, “no discount, therefore the payment was late”, is guaranteed. The converse $Q \\Rightarrow P$ and the inverse $\\neg P \\Rightarrow \\neg Q$ both assume the discount can arrive *only* through punctuality, and a holiday promotion handing 5% to a late payer breaks both while leaving the policy untouched.`,
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

The regulation is $P\\Rightarrow Q$: revenue above $\\$1$ million forces an audit. Its negation is the single failure row $P\\land\\neg Q$: some company with revenue above $\\$1$ million that did not file. The quoted sentence is $P\\Rightarrow\\neg Q$, a rival rule about *every* large company. That is a different (and stronger) claim, not $\\neg(P\\Rightarrow Q)$. A rival "if then not" rule is the classic wrong shape,

The regulation is $P\\Rightarrow Q$: revenue above $\\$1$ million forces an audit. Its negation is the single failure row $P\\land\\neg Q$: some company with revenue above $\\$1$ million that did not file. The quoted sentence is $P\\Rightarrow\\neg Q$, a rival rule about *every* large company. That is a different (and stronger) claim, not $\\neg(P\\Rightarrow Q)$. A rival "if then not" rule is the classic wrong shape.

Negating by keeping "if" and flipping "then" would have written that rival rule. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Negation of an implication is a conjunction, not a new implication.

so the statement is False.`,
      `**B.** → False

The converse claims that filing an audit forces revenue above $\\$1$ million. Take a firm with $\\$300{,}000$ of revenue that files voluntarily: $P$ false, $Q$ true. Then $Q\\Rightarrow P$ fails, while the original $P\\Rightarrow Q$ is idle because the revenue gate never opened. The regulation does not lock the converse. Only large firms file is a claim the regulation never made,

The converse claims that filing an audit forces revenue above $\\$1$ million. Take a firm with $\\$300{,}000$ of revenue that files voluntarily: $P$ false, $Q$ true. Then $Q\\Rightarrow P$ fails, while the original $P\\Rightarrow Q$ is idle because the revenue gate never opened. The regulation does not lock the converse. Only large firms file is a claim the regulation never made.

That voluntary small filer is extra case work. The extra arithmetic is $300{,}000<1{,}000{,}000$, which places the firm below $P$.

so the statement is False.`,
      `**C.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: revenue at most 1 million dollars, therefore no audit. The same voluntary filer has $\\neg P$ true and $\\neg Q$ false. True hypothesis, false conclusion: the inverse fails. Equivalence would require matching truth values in every scenario; this one split already separates them. The inverse tells small companies not to file, which the regulation never said.

Identifying inverse with original would have mixed the pairs. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence.

The original pairs with the contrapositive. The inverse pairs with the converse. A 300,000-dollar firm that files anyway is idle for $P\\Rightarrow Q$ (hypothesis false) and fatal for $\\neg P\\Rightarrow\\neg Q$. One such firm is enough to show the inverse is not the regulation. What would make them equivalent? A biconditional "audit if and only if revenue exceeds 1 million dollars." The stem wrote a one-way rule for large firms.

Letter B used the same small filer against the converse. Inverse and converse share a truth value, so the same file does double duty. It still does not touch the original regulation, whose hypothesis never fired. Equivalence of inverse with original would have required that idle file to break $P\\Rightarrow Q$, which it does not.

The recovered pairing chart puts the inverse with the converse, not with the original. A one-way rule for large firms never told small firms they must skip audits. The 300,000-dollar voluntary filer is exactly why that extra promise is false. Original and inverse live in opposite pairs; knocking down the inverse does not knock down the regulation, and claiming they are equivalent is the pairing error this letter names. The recovered original is a one-way rule about large firms; the inverse is a one-way rule about small firms. Those are different promises.

so the statement is False.`,
      `**D.** → True

Swap and negate: "no audit, therefore revenue does not exceed 1 million dollars." That sentence is $\\neg Q\\Rightarrow\\neg P$, the contrapositive, so it is equivalent to the regulation and must hold with it. This is the one rewriting that inherits the regulation's truth.

Writing $\\neg P\\Rightarrow\\neg Q$ would have produced the inverse, letter C. That is why $\\neg P\\Rightarrow\\neg Q$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

The recovered pairing is original with contrapose, converse with inverse. Letter C's voluntary filer does not touch this contrapose: that firm filed, so $\\neg Q$ is false and the contrapose is idle. A genuine test of the contrapose would be a non-filer, who must then sit at or below 1 million dollars if the regulation holds. Equivalence is the pairing, not a new arithmetic check.

Company X in letter E, a non-filer above the threshold, would break both the original and this contrapose together, which is exactly what equivalence predicts. The inverse in letter C does not travel with them. This letter is the one relative that must share the regulation's truth value.

so the statement is True.`,
      `**E.** → True

Company X has revenue 2 million dollars. Compare with the threshold: $2>1$, so $P$ is true. X did not file an audit, so $Q$ is false. That is exactly $P\\land\\neg Q$, the unique failure of $P\\Rightarrow Q$. One such company is enough to prove the regulation false. Revenue 2 million dollars with no audit is the shape the negation calls for.

The extra arithmetic is $2>1$, this letter's own threshold check. Using X against the converse would have had the wrong shape: X has $P$ true, which is the original's hypothesis, not the converse's. That is why $P$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. That contrast is the reason the verdict goes the way it does.

A counterexample has to sit inside the "if" and fail the "then." X does both. A 300,000-dollar voluntary filer, used against the inverse, is the opposite shape and would not refute the original. Changing $2$ to $1$ would put X on the boundary, where "exceeds" fails and $P$ is false. Against 2 million dollars, the recovered comparison $2>1$ puts X in the failure row.

One offender is the whole negation. The regulation is a universal promise about large firms, and X is a named large firm that skipped the audit. That is $P\\land\\neg Q$, matching the recovered failure shape.

The extra comparison $2>1$ is this letter's own threshold check, not a reprint of the overview's algebra. Sitting at 1 million dollars even would have failed "exceeds" and left $P$ false. X is above the line and skipped the filing, so the original is false if X is observed. One such offender is the recovered negation's shape, and X is named in the stem. The extra arithmetic $2>1$ is this letter's own threshold check. A firm at exactly 1 million dollars would have failed "exceeds" and would not be this witness.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 32,
    solution_overview: `**Part 1: Setup.**

$P$ = “a company's annual revenue exceeds \\$1 million”, $Q$ = “the company files an annual audit”. The regulation is $P \\Rightarrow Q$. **Negating a rule does not produce another rule.** A regulation is overturned by a single offender, so

$$\\neg(P \\Rightarrow Q) \\equiv P \\land \\neg Q$$

that is, *some* company with revenue above \\$1 million filed no audit.

**Part 2: Relatives.**

The sentence “if revenue exceeds \\$1 million, then no audit is filed” is a rival regulation binding *every* large company; that is a far stronger claim, and not the negation at all. **Small companies may still audit.** Nothing forbids a firm with \\$300,000 of revenue from filing voluntarily, giving $Q$ true with $P$ false.

**Part 3: Solve.**

That case is fatal to the converse $Q \\Rightarrow P$ (“filing proves high revenue”) and equally fatal to the inverse $\\neg P \\Rightarrow \\neg Q$, while the regulation itself is untouched. **Company X**, at \\$2 million with no audit, has $P$ true and $Q$ false, precisely the shape the negation calls for, so it really does prove the regulation broken. Meanwhile the contrapositive $\\neg Q \\Rightarrow \\neg P$ is the only rewriting that inherits the regulation's truth.`,
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

One failed conjunct denies the license. $300$ hours notwithstanding, A is not licensed.

Letting hours override the failed practical would have been running an or. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The recovered grant condition is an and of three.

The overview's table already marked A's practical column false. This letter only reads that row. Hours are necessary, and they are not sufficient: A's extra $50$ hours do not repair $T$. Letter C will name that sufficiency error in general; here the named pilot is already a no.

The recovered grant condition is a three-part and. One false conjunct is a denial, however strong the other two look. $300$ hours and a passed written exam do not rewrite a failed practical. The recovered three-part and dies at $T$, which is this letter's only extra evaluation.

so the statement is False.`,
      `**B.** → False

Pilot B has $240$ hours ($H$ false) but passed both exams. Hours are necessary: $240<250$ already kills the conjunction, so B is not licensed. Both exams cannot repair a shortfall of $10$ hours. The hours gate is not optional.

The extra arithmetic is $240<250$, a $10$-hour shortfall. Rounding $240$ up to $250$ would have folded B into $H$. So the letter reads the claim against $240$; $H$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $240$ stays in the write-up.

A's failure was the practical. B's failure is the hours. Opposite missing conjuncts, same denied license. The recovered biconditional demands all three parts. Ten hours below the cutoff is still below the cutoff.

Passing both exams does not create a waiver. Necessity of $H$ is the opening sentence of the stem, and $240<250$ is this letter's own comparison. B is a no for a different reason than A, and both reasons are fatal. Rounding $240$ up would invent a tenth hour the logbook does not have. The recovered hours gate is a strict comparison, and B sits on the wrong side of $250$.

so the statement is False.`,
      `**C.** → False

Necessary means: no license unless $H$ holds. Sufficient would mean: $H$ alone forces a license, regardless of $W$ and $T$. Pilot A has $H$ true ($300\\ge 250$) and still fails because $T$ is false. Hours by themselves never grant the license. Hours are one requirement of three.

Treating "necessary" as "enough" would have licensed A. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Letter A already refused A.

The opening sentence of the stem says hours are necessary, which is the $H$ conjunct, not a solo ticket. The "if and only if" then joins hours to two exams. Pilot A is the recovered witness that extra hours without a practical pass still yield no license. Sufficiency of $H$ would have licensed A; it did not.

Necessary and sufficient split on A's file: hours are present, license is absent. That split is the whole letter. Licensing everyone with $250$ or more hours would have dropped $W$ and $T$ from the recovered formula. The stem's recovered values line up with $250$, whereas $T$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $250$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

so the statement is False.`,
      `**D.** → True

The grant condition is the conjunction $H\\land W\\land T$. If the practical test fails, $T$ is false, and a false conjunct makes the whole conjunction false even when $H$ and $W$ both hold. Pilot A is that row: $300$ hours, written passed, practical failed, unlicensed. Failing the practical test is an absolute bar,

The grant condition is the conjunction $H\\land W\\land T$. If the practical test fails, $T$ is false, and a false conjunct makes the whole conjunction false even when $H$ and $W$ both hold. Pilot A is that row: $300$ hours, written passed, practical failed, unlicensed. Failing the practical test is an absolute bar.

Inventing a waiver for the practical would have been rewriting the iff. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The recovered formula has no waiver.

so the statement is True.`,
      `**E.** → True

The claim is existential: some pilot with more than $250$ hours is still unlicensed. Pilot A's file is the witness: $300$ hours, written passed, practical failed. $H$ is true and $T$ is false, so $H\\land W\\land T$ fails. That one file proves such a pilot exists.

Wanting a second witness would have been proving "at least two." The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence.Existence needs A, and A is in the stem.

Pilot B cannot serve as this witness, because $240$ is not more than $250$. The extra comparison $300>250$ is this letter's own check, and it holds. Letter A already refused A's license; this letter only records that the refused pilot still cleared the hours gate. One such file is the whole existential.

The claim does not ask how many such pilots exist, and it does not ask whether B is licensed. It asks whether the combination "hours over $250$, still unlicensed" occurs. A's row is that combination.

so the statement is True.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 33,
    solution_overview: `**Part 1: Setup.**

“If and only if” fixes the requirements exactly: flight hours, written exam and practical test, all three joined by **and**.

**Part 2: Relatives.**

$$\\text{Licensed} \\Leftrightarrow H \\land W \\land T$$

In a conjunction every part is **necessary** and no part is **sufficient** on its own, a single failure anywhere sinks the application, however strong the other results are. (The opening sentence of the task says the hours are necessary; that is true, and it is all they are.)

| Pilot | $H$ (250+ hours) | $W$ (written exam) | $T$ (practical test) | Licensed? |
| --- | --- | --- | --- | --- |
| A, 300 hours | true | true | **false** | no |
| B, 240 hours | **false** | true | true | no |

Both applicants fail, for opposite reasons.

**Part 3: Solve.**

Pilot A is worth keeping in view: a pilot well past 250 hours who still walks away without a license.`,
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

P is approved. The claim that credit score alone blocks P ignores the OR in the bracket.

Treating the bracket as an and would have denied P. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The recovered P row is a yes.

The claimed reason "score alone is below $700$" would have been correct if the rule had demanded score and co-signer. The recovered rule demands score or co-signer, then the ratio. P's co-signer fills the bracket, and $35<40$ fills $D$. The low score is idle, not fatal.

Q will fail for the opposite reason, a ratio outside the outer and. This letter is only P, and P's recovered row is approved. Treating a false $S$ as a veto ignores the or. The claimed "because their credit score alone is below $700$" names the wrong connective.

so the statement is False.`,
      `**B.** → False

Q's file: credit score $720$, so $S$ holds; no co-signer, so $C$ is false; debt-to-income $45\\%$, so $D$ is false. The bracket is true ($S$ alone fills it), but the outer AND still needs $D$:

$$(S\\lor C)\\land D=\\mathrm{T}\\land\\mathrm{F}=\\mathrm{F}$$

Q is not approved. The excellent score cannot buy off the ratio,

Q's file: credit score $720$, so $S$ holds; no co-signer, so $C$ is false; debt-to-income $45\\%$, so $D$ is false. The bracket is true ($S$ alone fills it), but the outer AND still needs $D$. Q is not approved. The excellent score cannot buy off the ratio.

Paying Q on the strength of $720$ would have skipped the outer conjunct. That is why $720$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The extra arithmetic is $45\\%\\ge 40\\%$, which falsifies $D$.

so the statement is False.`,
      `**C.** → False

A score of at least $700$ makes $S$ true, which fills $S\\lor C$. Approval still requires the outer conjunct $D$: ratio below $40\\%$. Applicant Q is the check: $720\\ge 700$ but $45\\%\\ge 40\\%$. The score cannot override a failed ratio, so "always approved regardless of DTI" is false.

Q is the named witness. Inventing a waiver for DTI would have rewritten the recovered formula. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence.

The outer "and" is the absolute gate. Inside the bracket, score and co-signer substitute for each other. Outside the bracket, nothing substitutes for $D$. Q has a strong score and still fails because $45$ is not below $40$. That is this letter's own comparison, and it kills the "always" claim.

"Regardless of DTI" would delete the outer conjunct. The recovered formula keeps it. Q is the named file that has $S$ true and $D$ false, which is exactly the shape that slogan cannot allow. A score of $720$ fills the bracket and still loses to $45\\%$ against $40\\%$.

so the statement is False.`,
      `**D.** → True

The approval formula is $(S\\lor C)\\land D$. If the ratio is $40\\%$ or above, $D$ is false, and $(S\\lor C)\\land\\mathrm{F}=\\mathrm{F}$ no matter whether $S$ or $C$ holds. A $720$ score or a co-signer can fill the bracket and still leave the outer AND false. A ratio of $40\\%$ or above is an absolute bar,

The approval formula is $(S\\lor C)\\land D$. If the ratio is $40\\%$ or above, $D$ is false, and $(S\\lor C)\\land\\mathrm{F}=\\mathrm{F}$ no matter whether $S$ or $C$ holds. A $720$ score or a co-signer can fill the bracket and still leave the outer AND false. A ratio of $40\\%$ or above is an absolute bar.

Q is again the witness: $45\\%$ with a $720$ score, denied. A co-signer would not have saved Q either, because $D$ sits outside the bracket.

so the statement is True.`,
      `**E.** → True

Applicant P is the witness: score $650<700$ so $S$ is false; a qualified co-signer so $C$ is true; ratio $35\\%<40\\%$ so $D$ is true. Then

$$(S\\lor C)\\land D=(\\mathrm{F}\\lor\\mathrm{T})\\land\\mathrm{T}=\\mathrm{T}$$

A score below $700$ is allowed whenever the co-signer fills the OR and the ratio clears $40\\%$.

Denying every sub-$700$ file would have ignored the OR. Once $700$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. P is the extra case that the OR exists for.

Letter A already recovered P as approved. This letter names the general possibility that P illustrates: low score, co-signer present, ratio in range. Drop the co-signer, and the same $650$ would fail the bracket. Drop the ratio, and even a co-signer would not save a $45\\%$ file (that is Q's shape, with a high score instead). Against P's actual file, the recovered formula returns true.

The or inside the bracket is why a score below $700$ is not an automatic no. P is the extra case the or was written for, and the claim only asks whether that case can be approved. It can.

Existence here is illustrated by P's recovered row: $650$, co-signer, $35\\%$. Change any one of those three and the possibility can die. Against the actual file, the recovered formula is true, so a sub-$700$ approval is possible.

Q cannot illustrate this possibility: Q's score is already at least $700$, and Q fails $D$. The extra case is a low score rescued by the or, which is P, not Q. The recovered P row is the witness the claim asked for. Score-or-co-signer is why a file below $700$ can still clear the bracket when $C$ and $D$ hold.

so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 34,
    solution_overview: `**Part 1: Setup.**

The approval rule mixes both connectives, and the bracket is where the meaning lives:

$$\\text{Approved} \\Leftrightarrow (S \\lor C) \\land D$$

with $S$ = credit score at least 700, $C$ = a qualified co-signer, $D$ = debt-to-income ratio below 40%. **Inside the bracket**, score and co-signer are alternatives; an **or** is satisfied by either one, so a weak score is not fatal when a co-signer is present. **Outside the bracket**, $D$ is chained on with **and**, which turns the debt ratio into an absolute requirement that nothing can offset.

**Part 2: Relatives.**

**Applicant P**, score 650, so $S$ is false, but the co-signer makes $C$ true and the bracket holds; the 35% ratio makes $D$ true. Both parts hold, so **P is approved**, and the low score never comes up again.

**Part 3: Solve.**

**Applicant Q**, score 720, so the bracket holds easily; the 45% ratio makes $D$ false. The excellent score cannot buy off the ratio, so **Q is denied**. The pair demonstrates both halves of the rule at once: a below-700 score is survivable, a ratio of 40% or more never is.`,
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

The converse is $Q\\Rightarrow P$: every loyalty-point diner ordered dessert. Sam received a point ($Q$ true) as a birthday promotion and did not order dessert ($P$ false). True "if", false "then": $Q\\Rightarrow P$ fails on Sam. That is the unique failure row of the converse. He is the ideal refutation,

The converse is $Q\\Rightarrow P$: every loyalty-point diner ordered dessert. Sam received a point ($Q$ true) as a birthday promotion and did not order dessert ($P$ false). True "if", false "then": $Q\\Rightarrow P$ fails on Sam. That is the unique failure row of the converse. He is the ideal refutation.

Using Sam against the original policy would have been answering letter C, which is the opposite shape. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

so the statement is True.`,
      `**B.** → True

The target is "not every point-earning diner ordered dessert." Its opposite is "every diner who received a point ordered dessert," which is $Q\\Rightarrow P$. Assume that opposite. Sam received a point without ordering dessert, so the assumption is false. That is a correctly opened proof by contradiction, with Sam as the colliding case,

The target is "not every point-earning diner ordered dessert." Its opposite is "every diner who received a point ordered dessert," which is $Q\\Rightarrow P$. Assume that opposite. Sam received a point without ordering dessert, so the assumption is false. That is a correctly opened proof by contradiction, with Sam as the colliding case.

Opening by assuming the original policy would have been contradicting the wrong sentence. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

so the statement is True.`,
      `**C.** → False

The original policy is $P\\Rightarrow Q$: order dessert, get a point. It fails only on dessert with no point. Sam skipped dessert and still got a birthday point: $\\neg P\\land Q$. The policy never promised anything about diners who skip dessert, so Sam does not touch $P\\Rightarrow Q$. To kill $P\\Rightarrow Q$ you need $P\\land\\neg Q$; Sam offers the opposite pair.

Thinking "Sam got a point strangely, so the policy is broken" would have used the converse's witness on the original. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

Sam's shape is $Q$ without $P$. That is the failure of the converse "point guarantees dessert" and of the inverse "no dessert, no point." It is not the failure of "dessert guarantees a point." The restaurant can still honour every dessert order and run a birthday promotion on the side. What would make Sam a counterexample to the original? A dessert order with no point. That is not Sam's file.

The policy is a one-way promise to dessert-orderers. Birthday points are an extra source of $Q$, which breaks the converse and leaves the original idle. Using Sam against the original is the classic mix-up of those two arrows.

Sam would refute "every point-earner ordered dessert." That is a different policy, the converse. The stem's policy never said that. The recovered failure shape for the original is dessert with no point, and Sam is the opposite pair. Birthday $Q$ without dessert is idle for $P\\Rightarrow Q$ and fatal for $Q\\Rightarrow P$. This letter is the original, so Sam is the wrong witness. The recovered policy survives Sam; the converse does not. Mixing those two arrows is how a birthday point gets misread as a policy breach.

so the statement is False.`,
      `**D.** → True

Negating $P\\Rightarrow Q$ produces $P\\land\\neg Q$: a diner who ordered dessert and did not receive a point. Sam's coordinates are the opposite pair (no dessert, got a point). Finding Sam therefore cannot be the correctly formed negation of the policy. The diner who would negate the policy differs from Sam in both coordinates,

Negating $P\\Rightarrow Q$ produces $P\\land\\neg Q$: a diner who ordered dessert and did not receive a point. Sam's coordinates are the opposite pair (no dessert, got a point). Finding Sam therefore cannot be the correctly formed negation of the policy. The diner who would negate the policy differs from Sam in both coordinates.

Writing Sam's shape as the negation would have negated to the converse's failure row. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

so the statement is True.`,
      `**E.** → True

The inverse says: skip dessert, therefore receive no point. Sam skipped dessert ($\\neg P$ true) and still received a birthday point ($\\neg Q$ false). True hypothesis, false conclusion: the inverse is false, and Sam is the witness. The inverse promises no point to anyone skipping dessert, and Sam walked out with one,

The inverse says: skip dessert, therefore receive no point. Sam skipped dessert ($\\neg P$ true) and still received a birthday point ($\\neg Q$ false). True hypothesis, false conclusion: the inverse is false, and Sam is the witness. The inverse promises no point to anyone skipping dessert, and Sam walked out with one.

Thinking the inverse travelled with the original would have expected the original to die with Sam. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. It does not; inverse pairs with converse, and both die on Sam.

so the statement is True.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 35,
    solution_overview: `**Part 1: Setup.**

$P$ = “the diner orders dessert”, $Q$ = “the diner receives a loyalty point”, and the policy is $P \\Rightarrow Q$. Sam's birthday point gives him $P$ false, $Q$ true. Everything in this task turns on comparing **Sam's shape** with the shape each statement needs.

**Part 2: Relatives.**

To refute a conditional you need its “if” half true and its “then” half false. For the **converse** $Q \\Rightarrow P$ (“every point-earner ordered dessert”) that means a point without dessert, Sam exactly.

**Part 3: Solve.**

For the **inverse** $\\neg P \\Rightarrow \\neg Q$ (“no dessert, no point”) it means no dessert but a point anyway, Sam again. For the **original policy** it would mean dessert with no point, $P \\land \\neg Q$, which is not Sam at all; the restaurant's promise therefore stands. The contradiction argument mentioned in the statements is the same observation in formal dress: to prove “not every point-earning diner ordered dessert”, assume the opposite, that is the converse $Q \\Rightarrow P$, then produce Sam and watch the assumption die.`,
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

The inner existential is satisfied at $m=4$. $4$ divides $100$, which is what that $n$ needs.

Reporting $n=100/4$ as a non-integer would have misdivided. The path that matches the stem therefore holds $n=100/4$ fixed and only then reads the claim.

This letter does not settle the outer "for every $m$." It only checks one instance. Letter C will use $m=3$, which has no integer partner. At $m=4$ the recovered partner $25$ works, so this inner existential holds.

The order of quantifiers allows $n$ to depend on $m$. For this $m$, the dependence is $n=100/m=25$. That is a positive integer, so the inner $\\exists n$ is true at $m=4$. A different $m$ is a different inner question. Success here is not a proof of the outer universal. Letter C will kill that universal at $m=3$; this letter only records that $m=4$ has a partner.

so the statement is True.`,
      `**B.** → False

Fix $m=3$. The inner claim asks for a positive integer $n$ with $3n=100$. Solving gives $n=100/3$, which is not an integer. No other $n$ can satisfy a linear equation with a unique root, so $m=3$ has no partner. $100/3$ is not a whole number, and the equation offers no second candidate,

Fix $m=3$. The inner claim asks for a positive integer $n$ with $3n=100$. Solving gives $n=100/3$, which is not an integer. No other $n$ can satisfy a linear equation with a unique root, so $m=3$ has no partner. $100/3$ is not a whole number, and the equation offers no second candidate.

The extra arithmetic is $100/3$, this letter's own division. Rounding to $33$ would have checked $3\\cdot 33=99\\ne 100$. Working from the isolated values, $33$ is the figure that is checked, not the detour that produced $3\\cdot 33=99\\ne 100$.

so the statement is False.`,
      `**C.** → False

The overall claim is $\\forall m\\,\\exists n:\\, mn=100$: every positive integer $m$ must have some positive integer partner $n$. At $m=3$ that partner would have to be $100/3$, which is not an integer. One failing $m$ is enough, so the "for every $m$" sentence is false. "For every" admits no exceptions.

Seeing $m=4$ work and concluding the universal holds would have treated one success as a clean sweep. The path that matches the stem therefore holds $m=4$ fixed and only then reads the claim.

Letter A recovered a working partner at $m=4$. Universals are not proved by a single success. They are disproved by a single failure, and $m=3$ is that failure: $n=100/3$ is not a positive integer, and the equation $3n=100$ has no other solution. The recovered overall statement is therefore false.

Divisors of $100$ would all work as $m$; $3$ is not among them. One non-divisor is enough to kill "for every positive integer $m$." The inner success at $m=4$ is a different letter. "For every" has no majority exception.

so the statement is False.`,
      `**D.** → True

Pushing a negation through nested quantifiers flips each one and negates the core: $\\forall$ becomes $\\exists$, $\\exists$ becomes $\\forall$, and $mn=100$ becomes $mn\\ne 100$. The witness $m=3$ works: for every positive integer $n$, $3n\\ne 100$. The sentence given is the correct negation, and $m=3$ is the witness it promises.

Writing "for every $m$ there is no $n$" would have kept $\\forall m$ and only flipped the inner piece. So the letter reads the claim against $m$; $\\forall m$ is what the other mix manufactures. The claim's wording is tested on the recovered side of that fork, which is why $m$ stays in the write-up. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

**1.** $\\neg\\forall m\\,\\exists n\\,P(m,n)$ is $\\exists m\\,\\forall n\\,\\neg P(m,n)$. That is the quoted form with $P$ as equality to $100$.

**2.** At $m=3$, $3n=100$ forces a non-integer, so $3n\\ne 100$ for every positive integer $n$.

**3.** A weaker negation such as "there exists $m$ for which some $n$ fails" would be true of almost every $m$ and would not capture the nested failure. The inner $\\forall n$ is required, because the original inner $\\exists n$ is what failed.

Letter C already used $m=3$ to kill the universal. This letter only records that the same $m$ is the existential witness in the correctly flipped negation.

Keeping $\\forall m$ and writing "there is no $n$" would still be a universal, which is the wrong outer quantifier. The recovered negation opens with $\\exists m$, and $m=3$ fills that opening. For that $m$, every positive integer $n$ misses $100$, which is the inner $\\forall n$.

The extra check is that $3n=100$ has a unique real solution, not an integer, so the inner "for every $n$" really does hold. Form of the negation plus that witness is this letter's own work, not a reprint of letter A's $m=4$ success. Flipping both quantifiers and the equation is the recovered negation, and $m=3$ is its witness. Letter C used that $m$ to kill the universal; this letter records the matching existential form. The two letters share a witness and ask different questions.

so the statement is True.`,
      `**E.** → True

With the quantifiers reversed, a single $n$ must work for every $m$ at once: $m=1$ demands $n=100$ and $m=2$ demands $n=50$. No number is both. The original allowed $n$ to depend on $m$; the reversal freezes one $n$ for all $m$. The reversed statement is false. Same symbols, opposite strength,

With the quantifiers reversed, a single $n$ must work for every $m$ at once: $m=1$ demands $n=100$ and $m=2$ demands $n=50$. No number is both. The original allowed $n$ to depend on $m$; the reversal freezes one $n$ for all $m$. The reversed statement is false. Same symbols, opposite strength.

The extra arithmetic is those two demanded $n$ values, $100$ and $50$, which cannot coincide. Reusing $n=25$ from $m=4$ would have missed $m=1$. That is the fork: $n=25$ belongs to the recovered isolation, $m=1$ belongs to the discarded mix. That contrast is the reason the verdict goes the way it does.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 1,
    solution_overview: `**Part 1: Setup.**

The statement is $\\forall m\\, \\exists n : m \\cdot n = 100$, and the order matters: **first** someone hands you $m$, **then** you go hunting for a matching $n$. So the choice of $n$ is allowed to depend on $m$. For a given $m$ the equation forces $n = \\frac{100}{m}$, and that is a legal answer only when $m$ **divides** 100.

**Part 2: Relatives.**

$m = 4$: $n = 25$, a positive integer, and $4 \\cdot 25 = 100$. Fine. $m = 3$: $n = \\frac{100}{3} = 33.\\overline{3}$, not an integer, and no other value can rescue it, since the equation has just one solution.

**Part 3: Solve.**

So $m = 3$ has no partner, and one failure is enough to sink a “for every” claim: **the overall statement is false.**

**Negating it** flips each quantifier and negates the equation:

$$\\neg\\big(\\forall m\\, \\exists n : mn = 100\\big) \\equiv \\exists m\\, \\forall n : mn \\neq 100$$

and $m = 3$ is a ready-made witness for that. **Swapping the quantifiers** produces a much bolder claim, $\\exists n\\, \\forall m : mn = 100$: one fixed $n$ serving every $m$ at once. Since $m = 1$ demands $n = 100$ while $m = 2$ demands $n = 50$, no such $n$ exists, so the reversed statement is false as well.`,
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

Clue (3) is the atomic sentence "Dan is guilty," not an implication. No other clue is needed to read that sentence. Combined with "exactly one of Ann, Ben, Cara, Dan is guilty," Dan occupies the unique guilty slot. Statement A asks only about Dan, which clue (3) already settles,

Clue (3) is the atomic sentence "Dan is guilty," not an implication. No other clue is needed to read that sentence. Combined with "exactly one of Ann, Ben, Cara, Dan is guilty," Dan occupies the unique guilty slot. Statement A asks only about Dan, which clue (3) already settles.

Waiting for the if-then clues would have been doing extra work this letter does not need. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

so the statement is True.`,
      `**B.** → False

The setup says exactly one of the four is guilty. Clue (3) names Dan as guilty. Uniqueness then clears Ann, Ben, and Cara. Ann is therefore innocent. The claim that Ann is guilty contradicts both clue (3) and the "exactly one" constraint. The guilty slot holds one person and Dan occupies it.

Thinking Ann could share guilt would have dropped "exactly one." The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

Clue (1), "if Ann is guilty then Dan is innocent," has a false hypothesis once Ann is cleared, so it holds vacuously and adds nothing. The recovered table already marks Ann innocent from uniqueness plus clue (3). This letter only reads Ann's cell. Changing the stem to "at least one guilty" would reopen sharing; the stem said exactly one.

Ben and Cara are cleared by the same uniqueness, but they are other letters. Ann's guilt would require two guilty people, Dan and Ann, which the setup forbids. The recovered guilty name is Dan, and only Dan.

so the statement is False.`,
      `**C.** → False

Cara's innocence is forced without opening clue (2). Clue (3) makes Dan guilty; "exactly one guilty" then makes Cara innocent. Clue (2) says: if Ben is innocent, then Cara is innocent. After uniqueness, Ben is already innocent, so clue (2) holds, but it is not the step that established Cara's innocence. Dropping clue (2) leaves Cara still innocent,

Cara's innocence is forced without opening clue (2). Clue (3) makes Dan guilty; "exactly one guilty" then makes Cara innocent. Clue (2) says: if Ben is innocent, then Cara is innocent. After uniqueness, Ben is already innocent, so clue (2) holds, but it is not the step that established Cara's innocence. Dropping clue (2) leaves Cara still innocent.

Thinking (2) was the only path to Cara would have missed the counting. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The extra observation is that (2) is consistent but redundant for Cara.

so the statement is False.`,
      `**D.** → True

With Ann innocent, clue (1) has a false "if" part, so it is automatically satisfied and produces nothing. Its contrapositive $D\\Rightarrow\\neg A$ could in principle have cleared Ann, but the counting had already done that job. A conditional with a false antecedent yields no new fact about anyone. Clue (1) adds no information in this puzzle,

With Ann innocent, clue (1) has a false "if" part, so it is automatically satisfied and produces nothing. Its contrapositive $D\\Rightarrow\\neg A$ could in principle have cleared Ann, but the counting had already done that job. A conditional with a false antecedent yields no new fact about anyone. Clue (1) adds no information in this puzzle.

Deriving Ann's innocence from (1) would have been using a redundant route. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The recovered route is clue (3) plus uniqueness.

so the statement is True.`,
      `**E.** → True

Clue (3) asserts Dan's guilt with no "if." Even if the "exactly one guilty" constraint were dropped, clue (3) would still say Dan is guilty. Uniqueness is used only to clear Ann, Ben, and Cara. Dan's guilt does not depend on it. Clue (3) is a flat assertion rather than a conditional,

Clue (3) asserts Dan's guilt with no "if." Even if the "exactly one guilty" constraint were dropped, clue (3) would still say Dan is guilty. Uniqueness is used only to clear Ann, Ben, and Cara. Dan's guilt does not depend on it. Clue (3) is a flat assertion rather than a conditional.

Thinking dropping uniqueness would unsettle Dan would have been mixing Dan's guilt with the others' innocence. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 2,
    solution_overview: `**Part 1: Setup.**

Four suspects, exactly one guilty, and one clue that simply hands the answer over. **Clue (3) is not a conditional at all.** It is a plain assertion: Dan is guilty.

**Part 2: Relatives.**

Combine it with “exactly one of the four is guilty” and the whole picture is fixed before the if-then clues are even read.

| Suspect | Verdict | Where it comes from |
| --- | --- | --- |
| Dan | **guilty** | clue (3), stated outright |
| Ann | innocent | only one can be guilty, and Dan holds that place |
| Ben | innocent | same reason |
| Cara | innocent | same reason |

**Do the conditional clues add anything?** Check each against the verdicts. Clue (1), $A \\Rightarrow \\neg D$, has a false “if” part, so it is automatically satisfied and yields nothing new. Clue (2), $\\neg B \\Rightarrow \\neg C$, only re-confirms Cara's innocence, which the counting had already given us.

**Part 3: Solve.**

Clue (4), $C \\Rightarrow A$, is likewise vacuous with $C$ false. All three are consistent with the solution, and all three are redundant here.`,
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

Suppose X is a liar. Then X's sentence "$Y$ always lies" is false, so Y is a truth-teller. A truth-teller's sentence must be true, so $\\neg x\\land\\neg y$ holds, which requires $\\neg y$ and makes Y a liar. Y cannot be both. The liar-X case is impossible, so X is a truth-teller..

Suppose X is a liar. Then X's sentence is false, so Y is a truth-teller. A truth-teller's sentence must be true, so both are liars, which makes Y a liar. Y cannot be both. The liar-X case is impossible, so X is a truth-teller. The recovered Case 1 collapse is that contradiction on Y. This letter is that surviving type for X, not yet Y's type..

The recovered Case 1 collapse is a contradiction on Y: forced truthful and forced a liar. That kills liar-X, so X is a truth-teller. This letter is X's type in the unique surviving assignment. Y's type is letter B.

so the statement is True.`,
      `**B.** → False

Suppose Y is a truth-teller. Then Y's sentence is true: both X and Y are liars. That requires Y to be a liar, contradicting the opening assumption. So Y is not a truth-teller..

Suppose Y is a truth-teller. Then Y's sentence is true: both X and Y are liars. That requires Y to be a liar, contradicting the opening assumption. So Y is not a truth-teller. The recovered unique solution has Y a liar. A truth-telling Y is the other collapsed case, visible already in Case 1 and again by this direct assumption..

The recovered unique solution has Y a liar. Assuming Y truthful immediately requires Y to be a liar, which is impossible. Direct assumption or Case 1 both kill truthful-Y. The surviving picture is X truthful, Y lying. This letter is Y's type.

so the statement is False.`,
      `**C.** → True

Y said that X and Y are both liars. If that sentence were true, Y would be a liar, so the sentence would be false. A sentence cannot be true and false, so Y's statement is false..

Y said that X and Y are both liars. If that sentence were true, Y would be a liar, so the sentence would be false. A sentence cannot be true and false, so Y's statement is false. The recovered Case 2 already made Y a liar, whose sentence had to be false. This letter is that forced falsity of the conjunction, independent of X's type in the surviving assignment, though the surviving assignment agrees..

Y's conjunction cannot be true, because its truth would make Y a liar, hence the conjunction false. The recovered sentence is false. The surviving assignment agrees: Y is a liar, so the sentence had to be false. A true 'we are both liars' is a self-defeating sentence in anyone's mouth, and here it is in a liar's mouth, which is consistent.

so the statement is True.`,
      `**D.** → False

Two types for X can be tested. X a liar forces Y to be both a truth-teller and a liar: contradiction. X a truth-teller forces Y to be a liar, and Y's false conjunction is consistent because $\\neg x$ is already false. One surviving assignment is not two..

Two types for X can be tested. X a liar forces Y to be both a truth-teller and a liar: contradiction. X a truth-teller forces Y to be a liar, and Y's false conjunction is consistent because $\\neg x$ is already false. One surviving assignment is not two. The recovered uniqueness is that Case 1 dies and Case 2 lives. 'Equally valid solutions' would need both cases to survive. They do not. The island puzzle is forced, not a fork..

One surviving assignment is not two. The recovered uniqueness is Case 1 dead, Case 2 alive. Equally valid solutions would need both cases to survive. They do not. The island puzzle is forced: X truthful, Y lying. Testing both types for X is the method; finding only one consistent type is the result. A fork would have been two consistent pictures. There is one.

so the statement is False.`,
      `**E.** → True

A lying X makes "Y always lies" false, so Y would have to be truthful; but a truthful Y's sentence demands that Y be a liar. The two demands on Y cannot both hold, so the opening assumption that X lies must be rejected..

A lying X makes 'Y always lies' false, so Y would have to be truthful; but a truthful Y's sentence demands that Y be a liar. The two demands on Y cannot both hold, so the opening assumption that X lies must be rejected. The recovered Case 1 is that contradiction. This letter is the same collapse as letter A, now named as a contradiction from the liar-X hypothesis. What would make liar-X possible? A different sentence from Y that did not claim Y was a liar. The given Y-sentence does claim that, and it clashes with Y being forced truthful..

The recovered Case 1 is that clash on Y. Liar-X forces Y truthful, and Y's sentence then forces Y a liar. Those two demands cannot hold together, so liar-X is rejected. This letter names that collapse as a contradiction from the liar-X hypothesis. What would make liar-X possible? A Y-sentence that did not claim Y was a liar. The given sentence does, and it clashes with Y being forced truthful. Letter A is the same collapse, now read as X's type; this letter is the contradiction that produces that type..

The recovered unique picture is X truthful and Y lying. Liar-X is not a second picture. It is a contradiction on Y, and it is rejected. Two equally valid solutions would have required Case 1 to survive. It does not. This letter is that rejection, named as a contradiction from the liar-X hypothesis. Letter A is the same collapse read as X's type.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 3,
    solution_overview: `**Part 1.** The setup.

Every islander is either a truth-teller, whose every sentence is true, or a liar, whose every sentence is false. Write $x$ for "X is a truth-teller" and $y$ for "Y is a truth-teller". X's sentence claims $\\neg y$; Y's sentence claims $\\neg x \\land \\neg y$.

**Part 2.** The operations.

There are only two possibilities for X, so test them both. A case that forces someone to be both a truth-teller and a liar is impossible.

**Part 3.** The scans.

Case 1: X is a liar. Then X's sentence is false, so Y is a truth-teller. But a truth-teller's sentence must be true, so $\\neg x \\land \\neg y$ holds, making Y a liar. Y cannot be both. This case is impossible.

Case 2: X is a truth-teller. Then Y is a liar, and Y's false conjunction is consistent because $\\neg x$ is already false. This case works.

One case collapses and one survives: X tells the truth and Y lies, which also makes Y's sentence "X and I are both liars" false.`,
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

Statement 1 is $\\exists s\\,\\forall e\\, G(s,e)$. Fix that student $s_0$, then pick an arbitrary exam $e$: $G(s_0,e)$ holds, so $\\forall e\\,\\exists s\\, G(s,e)$ follows at once. Hand that same student to whichever exam you are asked about..

Statement 1 is a student who clears every exam. Fix that student $s_0$, then pick an arbitrary exam $e$: $G(s_0,e)$ holds, so Statement 2 follows at once. Hand that same student to whichever exam you are asked about. The recovered implication is that reuse, not a new search for a different student per exam. $S_1$ is stronger, so it yields $S_2$..

The recovered implication is reuse of one student. $S_1$ is stronger, so it yields $S_2$. Hand $s_0$ to every exam and Statement 2 holds. No extra search is required. Quantifier order here goes from student-first to exam-first by forgetting that the student is the same one.

so the statement is True.`,
      `**B.** → False

Two exams, two students: X tops Exam 1 only, Y tops Exam 2 only. Each exam has a high scorer, so Statement 2 is true, yet nobody clears both exams, so Statement 1 fails. A single such class is enough. The reverse arrow does not hold..

Two exams, two students: X tops Exam 1 only, Y tops Exam 2 only. Each exam has a high scorer, so Statement 2 is true, yet nobody clears both exams, so Statement 1 fails. A single such class is enough. The reverse arrow does not hold. The recovered counterexample is a rotating top scorer. Quantifier order is the whole difference: the student is allowed to change in $S_2$ and not in $S_1$. What would make the reverse true? A class in which the high scorer is forced to be the same person, for instance a single student in the class. The stem's comparison is for a general class, and a two-student rotating class is legal..

The recovered counterexample is a rotating top scorer: each exam covered, nobody covering all. That kills the reverse arrow. Quantifier order is the whole difference. What would make the reverse true? Forcing the high scorer to be the same person, for instance a class of one. A two-student two-exam class is a legal class, and it splits $S_2$ true from $S_1$ false. Letter D names that split in the stem's words. This letter is the implication that fails..

The recovered rotating class is two exams, two students, each exam covered, nobody covering both. That is $S_2$ true and $S_1$ false. The reverse arrow is not a law of quantifiers. Student-first is strictly stronger than exam-first once there are two exams. A class of one student would collapse them; a class of two with a rotating top scorer splits them. The stem's comparison is for a general class. This split is legal.

so the statement is False.`,
      `**C.** → False

Equivalence needs both arrows. Statement 1 implies Statement 2, but a two-student class with a different top scorer on each exam sends Statement 2 true and Statement 1 false, so the arrow back is missing. Same predicates, different quantifier order..

Equivalence needs both arrows. Statement 1 implies Statement 2, but a two-student class with a different top scorer on each exam sends Statement 2 true and Statement 1 false, so the arrow back is missing. Same predicates, different quantifier order. The recovered nonequivalence is letter A's arrow plus letter B's missing reverse. Two statements that share $G$ and disagree in order are not the same claim..

Equivalence needs both arrows. The recovered pair is letter A's arrow plus letter B's missing reverse. Same $G$, different order, not the same claim. A two-exam rotating class is already a nonequivalence witness. With many exams the split only gets easier. Singleton exam domains are letter E, where they do become equivalent.

so the statement is False.`,
      `**D.** → True

"Each exam has a high scorer, but the high scorer keeps changing" is exactly that split: Statement 2 can be true while Statement 1 is false. One class with a rotating top scorer is a witness..

Each exam has a high scorer, but the high scorer keeps changing: that is exactly Statement 2 true and Statement 1 false. One class with a rotating top scorer is a witness. The recovered split is letter B's class, now named in the stem's own words. This letter is that witness, not a second implication test..

The recovered split is Statement 2 true, Statement 1 false, on a class whose top scorer keeps changing. That is this letter's witness, the same rotating class as letter B, now in the stem's phrasing. One class is enough for an 'if ... can be true while ...' claim.

so the statement is True.`,
      `**E.** → True

Restrict the exam domain to a singleton $\\{e_1\\}$. Then $\\forall e\\, G(s,e)$ and the inner existential in Statement 2 both collapse to $G(s,e_1)$. With a single exam there is nothing for the two quantifiers to disagree about: both statements shrink to $\\exists s\\; G(s,e_1)$..

Restrict the exam domain to a singleton $\\{e_1\\}$. Then $\\forall e\\, G(s,e)$ and the inner existential in Statement 2 both collapse to $G(s,e_1)$. With a single exam there is nothing for the two quantifiers to disagree about: both statements shrink to $\\exists s\\; G(s,e_1)$. The recovered collapse is that agreement on a singleton domain. Rotating top scorers need at least two exams to exist. One exam makes the order irrelevant. What would keep them nonequivalent? Two or more exams, which is letter B's picture..

The recovered collapse on a singleton exam domain is that both statements become 'some student scored above $90$ on that one exam.' Rotating top scorers need two exams. One exam makes order irrelevant. What would keep them nonequivalent? Two or more exams, letter B's picture. This letter is the special case where the two quantifier prefixes agree because there is nothing to prefix over.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 4,
    solution_overview: `**Part 1.** The setup.

Write $G(s,e)$ for "student $s$ scored above $90$ on exam $e$". Statement 1 picks the student first: $S_1$ is $\\exists s\\,\\forall e\\; G(s,e)$. Statement 2 names the exam first: $S_2$ is $\\forall e\\,\\exists s\\; G(s,e)$.

**Part 2.** The operations.

In $S_1$ one student must survive every exam. In $S_2$ a different student may cover each exam. Quantifier order is the whole difference.

**Part 3.** The scans.

$S_1$ implies $S_2$ by handing the same student to every exam. The reverse fails on a two-exam class with a rotating top scorer. With a single exam both statements shrink to $\\exists s\\; G(s,e_1)$.`,
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

The given votes are R1 yes, R2 yes, R3 no, R4 no, so $Y=2$. Gate 1 asks $Y\\ge 3$: $2\\ge 3$ fails. Gate 2 asks whether $Y=2$ and R1 is among the yes-votes: both hold, so gate 2 opens. The candidate is approved..

The given votes are R1 yes, R2 yes, R3 no, R4 no, so $Y=2$. Gate 1 asks $Y\\ge 3$: $2\\ge 3$ fails. Gate 2 asks whether $Y=2$ and R1 is among the yes-votes: both hold, so gate 2 opens. The recovered table's middle-with-R1 row is approval. This candidate is that row. Names matter only at $Y=2$, and here R1 is inside..

The recovered middle-with-R1 row is approval. This candidate is $Y=2$ with R1 inside, gate 2 open. Names matter only at two votes, and here the named reviewer is in. Gate 1 is shut and does not need to open. One open gate is enough.

so the statement is True.`,
      `**B.** → False

The tie-breaking power is written for R1 by name, not for any two reviewers. With yes-votes from R2 and R3 the count is still $2$, so gate 1 stays shut, and R1 voted no, so gate 2 stays shut. Same $Y=2$ as the given candidate, but R1's absence flips the outcome..

The tie-breaking power is written for R1 by name, not for any two reviewers. With yes-votes from R2 and R3 the count is still $2$, so gate 1 stays shut, and R1 voted no, so gate 2 stays shut. Same $Y=2$ as the given candidate, but R1's absence flips the outcome. The recovered table's middle-without-R1 row is rejection. This counterfactual is that row. What would approve R2-and-R3? A rule that let any two yes-votes suffice, or a gate 1 at $Y\\ge 2$. The stem's gate 2 names R1 only..

The recovered middle-without-R1 row is rejection. R2-and-R3 is that row: same $Y=2$, R1 outside, both gates shut. The tie-break is written for R1 by name. What would approve this pair? A rule that let any two yes-votes suffice. The stem's gate 2 names R1 only. Same count as the given candidate, opposite outcome, because the name is missing..

The recovered R2-and-R3 row is $Y=2$ with R1 outside, both gates shut, rejected. Same count as the given approved candidate, opposite outcome, because the named tie-break is missing. Gate 2 is not 'any two yes-votes.' It is two yes-votes including R1. What would approve this pair? Rewriting gate 2 to ignore names, or dropping the count to $Y\\ge 2$ as gate 1. The stem does neither.

so the statement is False.`,
      `**C.** → True

Gate 1 is $Y\\ge 3$, and names are ignored there. Any three yes-votes give $Y=3$, which meets that count, so gate 1 opens no matter which three reviewers they are..

Gate 1 is $Y\\ge 3$, and names are ignored there. Any three yes-votes give $Y=3$, which meets that count, so gate 1 opens no matter which three reviewers they are. The recovered table's top row is approval for any names. R1's special power lives only in the two-vote rows. This letter is the count-only gate..

The recovered top row is approval for any three names. Gate 1 ignores names. This letter is the count-only gate. R1's special power lives only in the two-vote rows. Three yes-votes never consult gate 2.

so the statement is True.`,
      `**D.** → False

"Necessary in every scenario" is a strong claim, and one counter-scenario sinks it: yes-votes from R2, R3 and R4 give $Y=3$, gate 1 opens, and R1 voted no. R1 is decisive only in the two-vote case..

Necessary in every scenario is a strong claim, and one counter-scenario sinks it: yes-votes from R2, R3 and R4 give $Y=3$, gate 1 opens, and R1 voted no. R1 is decisive only in the two-vote case. The recovered table already shows a three-vote approval with R1 outside. What would make R1 necessary always? Dropping gate 1, so that only gate 2 could approve. The stem keeps gate 1, which ignores names..

The recovered three-vote approval with R1 outside sinks 'necessary in every scenario.' R1 is decisive only at $Y=2$. What would make R1 always necessary? Dropping gate 1. The stem keeps gate 1, which ignores names. One counter-scenario is enough, and $\\{R2,R3,R4\\}$ is that scenario.

so the statement is False.`,
      `**E.** → True

Yes from R2 and R3 only: $2<3$ closes gate 1, and R1's absence closes gate 2. That is one scenario with exactly two yes-votes and no approval, which is all an "there exists" claim needs..

Yes from R2 and R3 only: $2<3$ closes gate 1, and R1's absence closes gate 2. That is one scenario with exactly two yes-votes and no approval, which is all a 'there exists' claim needs. The recovered middle-without-R1 row is that scenario. Letter B used the same row as a counterfactual about the given candidate. This letter only needs existence of some two-vote rejection, and that row supplies it..

The recovered middle-without-R1 row is a two-vote rejection. Existence of that row is all this letter needs. Letter B used the same row as a counterfactual about the given candidate. This letter only needs 'there exists.' R2-and-R3 supplies it. Two yes-votes are not automatically approval; they are approval only with R1 inside.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 5,
    solution_overview: `**Part 1.** The setup.

The committee rule has two independent gates, and a candidate is approved the moment one of them opens. Let $Y$ be the number of yes-votes. Gate 1: $Y\\ge 3$, names ignored. Gate 2: $Y=2$ and R1 is one of the two, name matters.

**Part 2.** The operations.

Three or four yes-votes always open gate 1. Exactly two yes-votes open gate 2 only when R1 is inside. One or zero yes-votes open neither gate.

**Part 3.** The scans.

This candidate: R1 yes, R2 yes, R3 no, R4 no, so $Y=2$. Gate 1 closed, gate 2 open, approved. Yes from R2 and R3 only: both gates closed, rejected. Yes from R2, R3, R4: gate 1 opens even if R1 votes no.`,
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

Company Z uses the product commercially ($C$ true), has written approval ($W$ true), and has never serviced it ($S$ false). The rescue needs $W$ and $S$ together, and $S$ is missing, so the rescue never opens. Commercial use puts Z inside the voiding clause. The warranty is void..

Company Z uses the product commercially, has written approval, and has never serviced it. The rescue needs $W$ and $S$ together, and $S$ is missing, so the rescue never opens. Commercial use puts Z inside the voiding clause. The recovered warranty is void. Half of an and rescues nothing. Z is the living picture of $W$ true and $S$ false..

The recovered rescue never opened: $W$ true, $S$ false, $C$ true. Commercial use plus a failed rescue voids the warranty. Half of an and rescues nothing. Z is the living picture. Letter B will name approval-alone as insufficient using this same file.

so the statement is True.`,
      `**B.** → False

Approval is one half of the rescue, and half of an "and" rescues nothing. Z has $W$ true and $S$ false, so $W\\land S$ is false. Z is the living counterexample: written approval in hand, warranty gone..

Approval is one half of the rescue, and half of an and rescues nothing. Z has $W$ true and $S$ false, so $W\\land S$ is false. Z is the living counterexample: written approval in hand, warranty gone. The recovered rescue never opened. What would make approval alone sufficient? Dropping the servicing half from the exception. The stem wrote both. Letter C names that both-halves demand in general; this letter is Z as the witness that one half is not enough..

The recovered rescue needs both halves. Z has approval and not servicing, so approval alone is not sufficient. What would make approval alone sufficient? Dropping $S$ from the exception. The stem wrote both. Letter C names that both-halves demand in general. This letter is Z as the witness.

so the statement is False.`,
      `**C.** → True

The rescue formula is $W$ and $S$: both halves of the exception must hold. Approval without servicing leaves the conjunction false; servicing without approval does the same. Satisfying only one of the two is not enough..

The rescue formula is $W$ and $S$: both halves of the exception must hold. Approval without servicing leaves the conjunction false; servicing without approval does the same. Satisfying only one of the two is not enough. The recovered exception is an and, not an or. Z already showed approval without servicing. A company with servicing and no written approval would show the other missing half, letter D's picture..

The recovered exception is an and, not an or. One missing half sinks it. Z already showed approval without servicing. Servicing without approval is the other missing half, letter D. Satisfying only one of the two is not enough, which is this letter's sentence. The 'and' in $W\\land S$ is doing the work.

so the statement is True.`,
      `**D.** → False

Servicing appears only inside the exception, and the exception opens with written approval. Without approval, $W$ is false, so $W\\land S$ is false even if $S$ is true. Annual servicing is not an independent escape hatch..

Servicing appears only inside the exception, and the exception opens with written approval. Without approval, $W$ is false, so $W\\land S$ is false even if $S$ is true. Annual servicing is not an independent escape hatch. The recovered rescue still needs $W$. What would make servicing-without-approval work? A different exception that listed $S$ alone, or an or of $W$ and $S$. The stem wrote $W$ and $S$ inside an exception that itself opens only after commercial use with approval..

The recovered rescue still needs $W$. Servicing without approval never opens the exception. Annual servicing is not an independent hatch. What would make it independent? An exception that listed $S$ alone, or an or. The stem wrote $W$ and $S$ inside a commercial-use exception. Without $W$, the nested and is false even if $S$ is true.

so the statement is False.`,
      `**E.** → False

The servicing requirement sits inside an exception to the commercial-use clause. If Z never used the product commercially, $C$ is false and that clause never fires. Nothing in the quoted warranty then asks for annual servicing..

The servicing requirement sits inside an exception to the commercial-use clause. If Z never used the product commercially, $C$ is false and that clause never fires. Nothing in the quoted warranty then asks for annual servicing. The recovered $C$-false region does not mention $S$. Applying the annual-servicing requirement to a non-commercial user reads a nested exception as a standing duty. It is not a standing duty. It is a half of a rescue that never opens if $C$ is false..

The recovered $C$-false region does not mention $S$. Servicing is a half of a rescue that never opens if there is no commercial use. Applying it to a non-commercial user reads a nested exception as a standing duty. It is not a standing duty. If Z never used the product commercially, the voiding clause never fires, and nothing in the quoted warranty then asks for annual servicing. Letter D nested $S$ inside $W$; this letter nests the whole rescue inside $C$..

The recovered nesting is $S$ inside $W$ inside $C$. If $C$ is false, the whole commercial-use clause is idle, and annual servicing is never asked. Reading that nested half as a standing duty applies a rescue condition to people who never entered the danger the rescue was written for. Non-commercial use never voids the warranty under this clause, so there is nothing for servicing to save. Letter D nested $S$ inside $W$ on the commercial side. This letter nests the rescue inside $C$ itself.

so the statement is False.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 6,
    solution_overview: `**Part 1.** The setup.

Let $C$ mean the product is used commercially, $W$ mean the manufacturer approved commercial use in writing, and $S$ mean the product is serviced every year.

**Part 2.** The operations.

If $C$ is false the clause never fires. If $C$ is true the warranty is void unless the rescue clause applies, and the rescue needs $W$ and $S$ together. One missing half sinks the whole rescue.

**Part 3.** The scans.

Company Z: $C$ true, $W$ true, $S$ false, so $W\\land S$ is false and the warranty is void. Written approval alone does not rescue. Servicing without approval does not rescue. If $C$ is false, servicing is never asked.`,
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

The target is "there is no smallest positive real," so the legal opening is the opposite: suppose such an $x>0$ exists. Then $\\frac{x}{2}$ is still positive and strictly smaller than $x$, so $x$ was not smallest after all. The proof opens with the negation of the target and ends in an impossibility..

The target is 'there is no smallest positive real,' so the legal opening is the opposite: suppose such an $x>0$ exists. Then $x/2$ is still positive and strictly smaller than $x$, so $x$ was not smallest after all. The recovered proof opens with the negation of the target and ends in an impossibility. That is a valid contradiction proof. Opening with the target itself would be letter B's mistake on a different claim..

The recovered proof opens with the negation of the target and ends in an impossibility. That is a valid contradiction proof. Assume a smallest positive $x$, produce $x/2$ still positive and smaller, contradiction. Opening with the target itself would be letter B's mistake on a different claim. This letter is the correct pattern.

so the statement is True.`,
      `**B.** → False

A contradiction proof of "$\\sqrt{3}$ is irrational" must assume the negation: $\\sqrt{3}=\\frac{p}{q}$ in lowest terms. Opening with "assume $\\sqrt{3}$ is irrational" assumes the conclusion itself. There is then nothing left to contradict..

A contradiction proof of '$\\sqrt{3}$ is irrational' must assume the negation: $\\sqrt{3}=p/q$ in lowest terms. Opening with 'assume $\\sqrt{3}$ is irrational' assumes the conclusion itself. There is then nothing left to contradict. The recovered legal opening is rationality, as with $\\sqrt{2}$ in the earlier task. This writeup assumes the conclusion and is not a contradiction proof. What would make that opening legal? A different target, proving rationality. The target here is irrationality..

The recovered legal opening is rationality, a fraction in lowest terms. Opening with irrationality assumes the conclusion. There is then nothing left to contradict. What would make that opening legal? Proving rationality. The target here is irrationality. Letter A's smallest-positive writeup shows the correct pattern on a different sentence. This writeup is the incorrect pattern.

so the statement is False.`,
      `**C.** → False

The original is $(\\forall f\\,D(f))\\land(\\forall t\\,O(t))$. Negating an AND yields an OR, and negating "all" yields "some not":

$$\\exists f\\,\\neg D(f)\\ \\lor\\ \\exists t\\,\\neg O(t)$$

The offered sentence keeps the AND and strengthens both halves. One on-time flight already falsifies the original while leaving that offered sentence false..

The original is all flights delayed and all trains on time. Negating an AND yields an OR, and negating 'all' yields 'some not': some flight is on time, or some train is delayed. The offered sentence keeps the AND and strengthens both halves to 'no flight delayed and no train on time.' One on-time flight already falsifies the original while leaving that offered sentence false, so the offered sentence is not the negation. The recovered negation is an or of existential failures, not a double ban. De Morgan plus quantifier flip is the whole rewrite..

The recovered negation is an or of existential failures: some flight on time, or some train delayed. The offered sentence keeps and and strengthens both halves. One on-time flight already falsifies the original while leaving the offered sentence false, so the offered sentence is not the negation. De Morgan plus quantifier flip is the whole rewrite. 'No flight delayed and no train on time' is a much stronger claim, not a negation..

The recovered negation is some flight on time or some train delayed, an or of two existentials. The offered double ban 'no delayed flight and no on-time train' is a different, stronger sentence. One on-time flight falsifies the original and does not make the offered sentence true, so the offered sentence cannot be the negation. De Morgan flips and to or; quantifier flip turns all into some-not. Both flips are required. The offered sentence performs neither.

so the statement is False.`,
      `**D.** → False

"Some employee always arrives late" is $\\exists x\\,\\forall d\\,L(x,d)$. Flip both quantifiers and negate inside: $\\forall x\\,\\exists d\\,\\neg L(x,d)$, every employee has at least one on-time day. "All employees are never late" is $\\forall x\\,\\forall d\\,\\neg L(x,d)$, a much stronger ban..

Some employee always arrives late is $\\exists x\\,\\forall d\\,L(x,d)$. Flip both quantifiers and negate inside: $\\forall x\\,\\exists d\\,\\neg L(x,d)$, every employee has at least one on-time day. 'All employees are never late' is $\\forall x\\,\\forall d\\,\\neg L(x,d)$, a much stronger ban. The recovered correct negation is the weaker 'each person has an on-time day,' not a universal never. One on-time day per employee already kills 'some employee is late every day.' Requiring nobody ever late is more than the negation needs..

The recovered correct negation is every employee has an on-time day, not nobody is ever late. Flip both quantifiers and negate inside. One on-time day per employee already kills 'some employee is late every day.' Requiring nobody ever late is more than the negation needs. The false figure is a double universal ban sold as the negation of an existential-universal. Those are different strengths.

so the statement is False.`,
      `**E.** → True

An existential $\\exists x\\, P(x)$ is settled by exhibiting one value that works. A universal $\\forall x\\, P(x)$ is not settled by any finite list of successes, because unchecked values remain; it needs an argument that runs for an arbitrary $x$..

An existential is settled by exhibiting one value that works. A universal is not settled by any finite list of successes, because unchecked values remain; it needs an argument that runs for an arbitrary $x$. The recovered pair of standards is that split. Letter A's smallest-positive proof is a universal-style argument (no such $x$). One example of a small positive real would not prove there is no smallest. One example would prove an existential such as 'there is a positive real.'.

The recovered pair of standards: one witness for existential, an arbitrary-value argument for universal. A finite list of successes never proves a universal, because unchecked values remain. Letter A's no-smallest-positive claim is universal-style. One small positive real would not prove there is no smallest. One example would prove the existential 'there is a positive real.' This letter is that split, not a particular proof.

so the statement is True.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `**Part 1.** The setup.

Two ideas do most of the work here. A proof by contradiction must open by assuming the opposite of what you want to prove. Negating a sentence flips "for all" into "there exists" and "and" into "or".

**Part 2.** The operations.

An existential claim is settled by one witness. A universal claim needs an argument that runs for an arbitrary value, not a finite list of successes.

**Part 3.** The scans.

Assuming a smallest positive $x$ and noting $x/2$ is smaller is a legal contradiction opening. Assuming $\\sqrt{3}$ is irrational in order to prove it is irrational assumes the conclusion. The negation of "all flights delayed and all trains on time" is an or of existential failures, not a double "no." The negation of "some employee is always late" is "every employee has an on-time day," not "nobody is ever late."`,
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

Premise 2 gives a person $a$ who is an economist and a game theorist. Premise 1 says every economist studies human behaviour, so $H(a)$ follows. Then $G(a)\\land H(a)$, which is the conclusion. The same three steps work for any $a$ supplied by Premise 2, so the argument is valid..

Premise 2 gives a person $a$ who is an economist and a game theorist. Premise 1 says every economist studies human behaviour, so $H(a)$ follows. Then $G(a)\\land H(a)$, which is the conclusion. The same three steps work for any $a$ supplied by Premise 2, so the argument is valid. The recovered derivation does not inspect whether the premises are true in the real world. That inspection is soundness, letter D..

The recovered derivation takes a witness economist-game-theorist from P2, applies P1, and gets a game theorist who studies human behaviour. That is the conclusion. The same three steps work for any such witness. Validity does not inspect the real world. Soundness does, letter D. This letter is valid form.

so the statement is True.`,
      `**B.** → False

Replace Premise 2 by "no economists specialize in game theory." Picture a world with economists who all study human behaviour and with nobody at all in game theory. Both modified premises hold, yet the conclusion $\\exists x\\,(G(x)\\land H(x))$ fails because there is no game theorist. Premises true, conclusion false: the modified argument is invalid..

Replace Premise 2 by 'no economists specialize in game theory.' Picture a world with economists who all study human behaviour and with nobody at all in game theory. Both modified premises hold, yet the conclusion fails because there is no game theorist. Premises true, conclusion false: the modified argument is invalid. The recovered counter-world is empty of game theorists. Validity of the original used Premise 2 as a witness-supplier. Removing that witness-supply breaks the derivation. The number $39$ in the stem is stray text, not a count used here..

The recovered counter-world has economists who study human behaviour and no game theorists at all. Modified P2 plus P1 hold, conclusion fails: invalid. The original used P2 as a witness-supplier. Removing that supply breaks the derivation. The stray $39$ in the stem is not used. Empty-of-game-theorists is enough. Validity is about all worlds where the premises hold, and this world is one where they hold and the conclusion does not..

The recovered counter-world is empty of game theorists. Modified premises hold, conclusion fails, so the modified argument is invalid. The original's validity used P2 to supply a witness. 'No economists specialize in game theory' removes that supply. Validity is about every world where the premises hold. This world is one of them, and the conclusion is false in it. That is the definition of invalid. The original argument is not this modified one; letter A already found the original valid.

so the statement is False.`,
      `**C.** → True

Validity asks only: whenever the premises are true, must the conclusion be true? It does not inspect whether Premise 1 or Premise 2 actually holds in the real world. Soundness is the stricter label that adds "and the premises are in fact true.".

Validity asks only: whenever the premises are true, must the conclusion be true? It does not inspect whether Premise 1 or Premise 2 actually holds in the real world. Soundness is the stricter label that adds 'and the premises are in fact true.' The recovered distinction is that split. This letter is the definition; letter D applies it when Premise 1 is false in reality..

The recovered distinction: validity is the implication from premises to conclusion, soundness adds true premises. This letter is that definition. Letter D applies it when P1 is false in reality: still valid, no longer sound. Reality is not a third premise. It is the extra demand in soundness.

so the statement is True.`,
      `**D.** → True

Validity is about the derivation from the premises: it never inspects whether Premise 1 is true in the real world. If Premise 1 happened to be false, the argument would remain valid and lose soundness, because soundness needs valid form and true premises..

Validity is about the derivation from the premises: it never inspects whether Premise 1 is true in the real world. If Premise 1 happened to be false, the argument would remain valid and lose soundness, because soundness needs valid form and true premises. The recovered labels split: valid, unsound. A false premise does not turn a valid form invalid. It turns a sound argument unsound..

The recovered labels split: valid, unsound, if P1 is false in reality. A false premise does not turn a valid form invalid. It turns a sound argument unsound. Validity never inspected P1's real-world truth. Letter C named that; this letter applies it. The derivation in letter A still goes through as a derivation, even if P1 happens to be false of actual economists.

so the statement is True.`,
      `**E.** → False

Affirming the consequent is the invalid pattern $P\\Rightarrow Q$, $Q$, therefore $P$. The given premises are a universal implication about economists and an existential about game theory, with no bare consequent used to recover the antecedent. An instance of affirming the consequent would be invalid, so the label does not fit..

Affirming the consequent is the invalid pattern $P\\Rightarrow Q$, $Q$, therefore $P$. The given premises are a universal implication about economists and an existential about game theory, with no bare consequent used to recover the antecedent. An instance of affirming the consequent would be invalid, so the label does not fit. The recovered argument is valid, letter A, and affirming the consequent is an invalid pattern. Those cannot be the same. The form here is 'all $E$ are $H$, some $E$ are $G$, therefore some $G$ are $H$,' a standard valid syllogism shape, not $Q$ therefore $P$..

The recovered argument is a valid syllogism shape, not $Q$ therefore $P$. Affirming the consequent is an invalid pattern. Letter A already found this argument valid, so that label cannot fit. The premises are a universal about economists and an existential about game theory, with no bare consequent used to recover an antecedent. 'All $E$ are $H$, some $E$ are $G$, therefore some $G$ are $H is not affirming the consequent.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 8,
    solution_overview: `**Part 1.** The setup.

Write $E(x)$ for "$x$ is an economist", $H(x)$ for "$x$ studies human behaviour", and $G(x)$ for "$x$ specializes in game theory". The argument is P1: $\\forall x\\,(E(x)\\Rightarrow H(x))$. P2: $\\exists x\\,(E(x)\\land G(x))$. Conclusion: $\\exists x\\,(G(x)\\land H(x))$.

**Part 2.** The operations.

Validity asks only: whenever the premises are true, must the conclusion be true? Soundness adds that the premises are in fact true. Affirming the consequent is the invalid pattern $P\\Rightarrow Q$, $Q$, therefore $P$.

**Part 3.** The scans.

From P2 take a person $a$ who is economist and game theorist; P1 gives $H(a)$; then $G(a)\\land H(a)$. Replacing P2 by "no economists specialize in game theory" allows a world with no game theorists, so the modified argument is invalid. False P1 would lose soundness and keep validity.`,
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

The fan's rule is: if a player scores over $30$, the team wins. In the given game Player X scored $35$, so the hypothesis holds, and the team lost $90$-$95$, so the conclusion fails. That is the one combination an implication forbids..

The fan's rule is: if a player scores over $30$, the team wins. In the given game Player X scored $35$, so the hypothesis holds, and the team lost $90$-$95$, so the conclusion fails. That is the one combination an implication forbids. The recovered game is a genuine counterexample. A win with a $35$-point scorer would have fit the rule. This game is a loss..

The recovered game is $P$ true, $Q$ false: $35$ points, a loss. That is the one row an implication forbids. A win with a $35$-point scorer would have fit the rule. This game is a loss. One such game kills the fan's universal. Letter B will keep the same facts as an existential success.

so the statement is True.`,
      `**B.** → True

The existential asks for one game in which some player scored over $30$ and the team did not win. The reported game has a $35$-point scorer and a $90$-$95$ loss, which is exactly that pair of facts. An "there exists" sentence needs a single example, and this game supplies it..

The existential asks for one game in which some player scored over $30$ and the team did not win. The reported game has a $35$-point scorer and a $90$-$95$ loss, which is exactly that pair of facts. An 'there exists' sentence needs a single example, and this game supplies it. The recovered witness is the same game that killed the fan's universal rule. Letter A was the universal dying; this letter is the existential living on the same facts..

The recovered witness is the same game: over $30$ and a loss. An existential needs one example. Letter A was the universal dying on these facts; this letter is the existential living on them. 'There exists a game where ...' is settled. No second loss is required.

so the statement is True.`,
      `**C.** → True

The contrapositive is the same claim wearing different clothes, so it dies with the original. You can also read it off the game: the team did not win, yet a player scored $35$, exactly what "no win means nobody over $30$" forbids..

The contrapositive is the same claim wearing different clothes, so it dies with the original. You can also read it off the game: the team did not win, yet a player scored $35$, exactly what 'no win means nobody over $30 forbids. The recovered contrapositive fails on the same $P$ true, $Q$ false row. Letter E's inverse does not automatically fail with the original; this relative does..

The recovered contrapositive fails on the same row: no win, yet a $35$-point scorer. The contrapositive always agrees with the original, so it dies with it. Letter E's inverse does not automatically die. This relative does. Same clothes, same truth value, same failure.

so the statement is True.`,
      `**D.** → False

Falsity does not spread to all four relatives. The converse sits in the other pair, and deciding it would take a game the team won. The reported game is a defeat, so $Q$ is false and the converse is idle. Falsity of $P\\Rightarrow Q$ therefore does not force falsity of $Q\\Rightarrow P$..

Falsity does not spread to all four relatives. The converse sits in the other pair, and deciding it would take a game the team won. The reported game is a defeat, so $Q$ is false and the converse is idle. Falsity of $P\\Rightarrow Q$ therefore does not force falsity of $Q\\Rightarrow P$. The recovered game does not test the converse at all. A later win without a $30$-point scorer would kill the converse; a later win with a $35$-point scorer would fit it. Neither is this game. Automatically false is the false figure: spreading one failure to an untested relative..

The recovered game is a defeat, so $Q$ is false and the converse is idle. Falsity of $P\\Rightarrow Q$ does not force falsity of $Q\\Rightarrow P$. Automatically false is the false figure: spreading one failure to an untested relative. A later win without a $30$-point scorer would kill the converse; a later win with a $35$-point scorer would fit it. Neither is this game. Letter E's inverse is the partner of this converse, also untested here..

The recovered game cannot test the converse, because the team lost. $Q$ is false, so $Q\\Rightarrow P$ is idle, vacuously true in this one game and unsettled as a general rule. Spreading the original's failure onto the converse is a false figure. The four relatives are two pairs. Failure of one pair does not settle the other. A later win is what would test $Q\\Rightarrow P$. This game is not a win.

so the statement is False.`,
      `**E.** → True

The inverse $\\neg P\\Rightarrow\\neg Q$ pairs with the converse, not with the original. It is tested by games with no $30$-point scorer. The reported game has a $35$-point scorer, so $P$ is true and the inverse is not even evaluated. Its truth value is a separate question from the fan's false rule..

The inverse $\\neg P\\Rightarrow\\neg Q$ pairs with the converse, not with the original. It is tested by games with no $30$-point scorer. The reported game has a $35$-point scorer, so $P$ is true and the inverse is not even evaluated. Its truth value is a separate question from the fan's false rule. The recovered independence is that other pair. Letter D's converse is the partner of this inverse. Neither is forced by the original's failure. A game with no $30$-point scorer that the team still won would kill the inverse; this game cannot speak to it..

The recovered independence is the other pair: inverse with converse, not with the original. This game has a $35$-point scorer, so $P$ is true and the inverse is not even evaluated. A game with no $30$-point scorer that the team still won would kill the inverse; this game cannot speak to it. The original's failure does not settle this relative. Letter D said the same of the converse. The four relatives are two pairs, not one blob of falsity.

so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 9,
    solution_overview: `**Part 1.** The setup.

For a single game let $P$ mean "some player scored over $30$ points" and $Q$ mean "the team won". The fan claims $P\\Rightarrow Q$ for every game.

**Part 2.** The operations.

An implication has exactly one way of failing: true hypothesis, false conclusion. The contrapositive $\\neg Q\\Rightarrow\\neg P$ always agrees with the original. The converse $Q\\Rightarrow P$ and the inverse $\\neg P\\Rightarrow\\neg Q$ form a separate pair, independent of the original.

**Part 3.** The scans.

Player X scored $35$ and the team lost $90$-$95$: $P$ true, $Q$ false, so the fan's rule fails, and so does its contrapositive. The reported game is a defeat, so the converse is idle. The inverse is tested by games with no $30$-point scorer, which this game is not.`,
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

The task states that the professor did apply a curve, so the live cut-off is $s\\ge 60$. Student W scored $65$, and $65\\ge 60$ holds. Curve on, so the bar sits at $60$, and $65$ clears it. W gets the B..

The task states that the professor did apply a curve, so the live cut-off is $s\\ge 60$. Student W scored $65$, and $65\\ge 60$ holds. Curve on, so the bar sits at $60$, and $65$ clears it. W gets the B. The recovered active cutoff is $60$, not $70$. Letter B will turn the curve off and drop W below the baseline bar..

The recovered active cutoff is $60$, curve on, $65\\ge 60$, W gets the B. The baseline $70$ is not live on this exam. Letter B will turn the curve off and drop W below $70$. This letter is the actual exam.

so the statement is True.`,
      `**B.** → False

Without a curve the live cut-off is $s\\ge 70$. Student W scored $65$, and $65<70$, so the baseline biconditional denies the B. W's $65$ sits in the band $60\\le s<70$ that the curve alone unlocks..

Without a curve the live cut-off is $s\\ge 70$. Student W scored $65$, and $65<70$, so the baseline biconditional denies the B. W's $65$ sits in the band $60\\le s<70$ that the curve alone unlocks. The recovered no-curve outcome is no B. This letter is the counterfactual with the curve off. The same $65$ that passed letter A fails here because the active cutoff moved back to $70$..

The recovered no-curve outcome is no B: $65<70$. The same $65$ that passed letter A fails here because the active cutoff moved back to $70$. W sits in the band $60\\le s<70$ that the curve alone unlocks. This letter is that counterfactual. The curve is doing real work for W.

so the statement is False.`,
      `**C.** → True

The baseline uses $70$; the curve replaces it with $60$. Compare: $60<70$, so the threshold moves down, not up. Anyone with $s\\ge 70$ still has $s\\ge 60$, so a B already earned under the baseline is never taken away..

The baseline uses $70$; the curve replaces it with $60$. Compare: $60<70$, so the threshold moves down, not up. Anyone with $s\\ge 70$ still has $s\\ge 60$, so a B already earned under the baseline is never taken away. The recovered curve strictly lowers the bar. Raising it would be a different rule. This letter is that direction, not W's particular $65$..

The recovered curve strictly lowers the bar from $70$ to $60$. Anyone already at $70$ still clears $60$, so a baseline B is never taken away. Raising the bar would be a different rule. This letter is that direction, not W's particular $65$. The unless clause is a drop, not a hike.

so the statement is True.`,
      `**D.** → True

A score of $62$ satisfies $60\\le 62<70$. Under a curve the cut-off is $60$, so $62\\ge 60$ earns the B. Without a curve the cut-off is $70$, so $62<70$ denies it. The B at $62$ therefore occurs only if the curve is applied..

A score of $62$ satisfies $60\\le 62<70$. Under a curve the cut-off is $60$, so $62\\ge 60$ earns the B. Without a curve the cut-off is $70$, so $62<70$ denies it. The B at $62$ therefore occurs only if the curve is applied. The recovered band $60\\le s<70$ is the curve-only region. W's $65$ sits in the same band, letter A versus letter B. This letter names $62$ as another point of that band..

The recovered band $60\\le s<70$ is the curve-only region. $62$ sits in it, as does W's $65$. Under a curve, $62$ earns the B; without, it does not. The B at $62$ occurs only if the curve is applied. Letter A versus B is the same band at $65$. This letter names $62$ as another point of that band.

so the statement is True.`,
      `**E.** → False

The baseline biconditional is $B$ iff $s\\ge 70$, and the "unless" clause replaces the cut-off by $60$ when a curve is applied. This exam used a curve, and W scored $65$, which is below $70$ and still a B. So "at least $70$ is necessary in all circumstances" is false..

The baseline biconditional is $B$ iff $s\\ge 70$, and the unless clause replaces the cut-off by $60$ when a curve is applied. This exam used a curve, and W scored $65$, which is below $70$ and still a B. So 'at least $70$ is necessary in all circumstances' is false. The recovered exception is doing real work. If and only if in the baseline is not a freeze that survives the unless clause. What would make $70$ necessary always? Dropping the curve exception. The stem wrote the exception, and this exam used it..

The recovered exception is doing real work: W is below $70$ and still a B because the curve is on. 'At least $70$ is necessary in all circumstances' freezes the baseline biconditional through the unless clause, which the stem does not allow. What would make $70$ necessary always? Dropping the curve exception. The stem wrote it, and this exam used it. If and only if in the baseline is the no-curve rule, not a freeze. Letter C already noted the bar drops; this letter notes that $70$ is then not necessary..

The recovered exception moved the live cutoff to $60$, so $65$ is a B below $70$. Necessity of $70$ in all circumstances is false on this exam. The baseline iff is the no-curve rule. The unless clause replaces it when a curve is applied, and a curve was applied. Freezing $70$ through that clause pretends the exception is decorative. It is not. Letters A through D all use the dropped bar. This letter refuses to ignore it.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 10,
    solution_overview: `**Part 1.** The setup.

Writing $s$ for the score, the baseline rule (no curve) is $B$ if and only if $s\\ge 70$. When a curve is applied the bar drops by ten points: $B$ if and only if $s\\ge 60$.

**Part 2.** The operations.

If and only if runs in both directions: clearing the active cut-off earns the grade, missing it denies the grade. Scores in $60\\le s<70$ earn a B only when the curve is on.

**Part 3.** The scans.

This exam used a curve and W scored $65$, so $65\\ge 60$ earns the B. Without a curve, $65<70$ would deny it. A student at $62$ is in the same band. Clearing $70$ still clears $60$, so the curve never raises the bar.`,
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

The prime lists $\\{3,5\\}$ and $\\{2,7\\}$ are disjoint, so $\\mathrm{gcd}(15,28)=1$. Coprime tooth counts wear evenly, so Pair 1 passes..

Factor the two counts: $15=3\\times 5$ and $28=2^2\\times 7$. The prime lists $\\{3,5\\}$ and $\\{2,7\\}$ are disjoint, so $\\mathrm{gcd}(15,28)=1$. Coprime tooth counts wear evenly, so Pair 1 passes. The recovered gcd is $1$. Sharing no prime is the test, not 'looking different.'.

The recovered gcd is $1$. Disjoint prime lists $\\{3,5\\}$ and $\\{2,7\\}$ are the test. Pair 1 wears evenly. Sharing no prime is coprimality, not 'looking different' or 'one is odd.' Both could have been odd; here one is even. The even one, $28$, contributes only the prime $2$, which $15$ does not have.

so the statement is True.`,
      `**B.** → False

Factor Pair 2:

$$24=2^3\\times 3,\\qquad 36=2^2\\times 3^2$$

Both $2$ and $3$ appear on each side. Taking the smaller power of each shared prime gives $\\mathrm{gcd}(24,36)=2^2\\times 3=12\\ne 1$. Pair 2 is not coprime..

Factor Pair 2: $24=2^3\\times 3$ and $36=2^2\\times 3^2$. Both $2$ and $3$ appear on each side. Taking the smaller power of each shared prime gives $\\mathrm{gcd}(24,36)=12\\ne 1$. Pair 2 is not coprime. The recovered gcd is False2$. Sharing two primes is more than enough to fail. Letter A's disjoint prime lists are the contrast. These lists overlap..

The recovered gcd is False2$, not False$. Shared $2$ and $3$ are more than enough to fail. Pair 2 is not coprime. Letter A's disjoint lists are the contrast. These lists overlap in two primes. Taking min powers $2^2$ and $3^1$ is False2$. Any shared prime would have been enough; here there are two.

so the statement is False.`,
      `**C.** → True

Coprime means: for every prime $p$, $p$ does not divide both $m$ and $n$. Negating a universal claim produces an existential one: there exists a prime $p$ such that $p$ divides $m$ and $p$ divides $n$..

Coprime means: for every prime $p$, $p$ does not divide both $m$ and $n$. Negating a universal claim produces an existential one: there exists a prime $p$ such that $p$ divides $m$ and $p$ divides $n$. The recovered negation is that existential. Pair 2 is a witness that such a $p$ can exist, namely $2$ or $3$. This letter is the form of the negation, not a claim about a particular pair..

The recovered negation is existential: some prime divides both. Pair 2 is a witness that such a $p$ can exist. This letter is the form of the negation, not a verdict on a pair. Coprime is a universal 'no prime divides both'; its negation is existence of such a prime. That is the quantifier flip, the same flip as in the prime-odd tasks.

so the statement is True.`,
      `**D.** → True

Given $\\mathrm{gcd}(m,n)=1$ with both greater than $1$, suppose both were even. Then the prime $2$ would divide each of them, forcing $\\mathrm{gcd}(m,n)\\ge 2$ and contradicting $\\mathrm{gcd}=1$. So a coprime pair is never two even numbers..

Given $\\mathrm{gcd}(m,n)=1$ with both greater than $1$, suppose both were even. Then the prime $2$ would divide each of them, forcing $\\mathrm{gcd}(m,n)\\ge 2$ and contradicting $\\mathrm{gcd}=1$. So a coprime pair is never two even numbers. The recovered ban on two evens is that shared $2$. Pair 1 is odd-and-even, which is allowed. Two odds can be coprime or not; two evens cannot be coprime..

The recovered ban on two evens is a shared $2$. If both were even, gcd would be at least $2$, contradicting coprime. Pair 1 is odd-and-even, which is allowed. Two odds can be coprime ($9$ and $25$) or not ($9$ and $15$). Two evens cannot be coprime. The hypothesis already has both greater than $1$, so $1$ is not in play. Two evens each greater than $1$ share $2$.

so the statement is True.`,
      `**E.** → False

Coprime means no shared prime factor, not "at least one of $m,n$ is prime." Pair 1 is the counterexample: $15=3\\times 5$ and $28=2^2\\times 7$ are both composite, yet $\\mathrm{gcd}(15,28)=1$..

Coprime means no shared prime factor, not 'at least one of $m,n$ is prime.' Pair 1 is the counterexample: False5=3\\times 5$ and $28=2^2\\times 7$ are both composite, yet $\\mathrm{gcd}(15,28)=1$. The recovered Pair 1 is two composites that still miss each other in primes. The false figure is 'coprime implies one factor is prime,' which would ban Pair 1. What would make the claim true? A different definition, such as 'at least one is prime.' Coprimality is about shared primes, not about either number being prime. $9$ and $4$ are another composite coprime pair; False5$ and $28$ already suffice..

The recovered Pair 1 is two composites that still miss each other in primes. Coprime means no shared prime, not 'at least one is prime.' The false figure would ban False5$ and $28$. What would make the claim true? A different definition. $9$ and $4$ are another composite coprime pair; False5$ and $28$ already suffice. $8$ and $9$ as well. Plenty of counterexamples. Pair 1 is the one the stem already factored..

The recovered Pair 1 is False5$ and $28$, both composite, gcd False$. Coprime is empty shared primes, not 'one factor is prime.' Plenty of counterexamples exist: $9$ and $4$, $8$ and $9$, False5$ and $28$. The stem already factored the last of those. The false figure would ban Pair 1 after letter A just accepted it as coprime. Those two letters cannot both hold if 'must include a prime' is the definition. It is not the definition.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 11,
    solution_overview: `**Part 1.** The setup.

Two whole numbers are coprime when $\\mathrm{gcd}(m,n)=1$, equivalently when no prime divides both. Pair 1 has tooth counts $15$ and $28$. Pair 2 has tooth counts $24$ and $36$.

**Part 2.** The operations.

The quickest test is to break each number into prime factors and look for anything shared. The negation of "coprime" is "there exists a prime dividing both." Two even numbers always share the prime $2$. Coprime numbers need not themselves be prime.

**Part 3.** The scans.

$15=3\\times 5$ and $28=2^2\\times 7$ share no prime, so $\\mathrm{gcd}(15,28)=1$. $24=2^3\\times 3$ and $36=2^2\\times 3^2$ share $2$ and $3$, so $\\mathrm{gcd}(24,36)=12\\ne 1$. Pair 1 is two composites that are still coprime.`,
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

K cancelled $2$ days before renewal. The early branch needs $d\\ge 3$; here $2<3$, so K is in the late branch. Late branch: the subscription still renews (and a charge applies). Usage $15\\%$ is irrelevant to whether it renews; usage is consulted only for the later refund test..

K cancelled $2$ days before renewal. The early branch needs $d\\ge 3$; here $2<3$, so K is in the late branch. Late branch: the subscription still renews and a charge applies. Usage $15\\%$ is irrelevant to whether it renews; usage is consulted only for the later refund test. The recovered branch is late, so renewal holds. Letter B will ask about the refund, a different gate..

The recovered branch is late, $d=2<3$, so renewal holds. Usage is not consulted for renewal. Letter B will ask about the refund, a different gate on the same late branch. Early cancellation would have been letter D. This letter is K's actual timing.

so the statement is True.`,
      `**B.** → False

K cancelled $2$ days out, so $d<3$ and the late branch applies. A partial refund is issued if and only if $u<10\\%$. K used $15\\%$ of the service, and $15<10$ is false. The biconditional therefore withholds the refund..

K cancelled $2$ days out, so $d<3$ and the late branch applies. A partial refund is issued if and only if $u<10\\%$. K used False5\\%$ of the service, and False5<10$ is false. The biconditional therefore withholds the refund. The recovered usage test fails. Near-misses do not count: False5\\%$ is not below False0\\%$. Letter C will drop usage to $5\\%$ and open the refund. This letter is K's actual False5\\%$..

The recovered usage test fails: False5\\%$ is not below False0\\%$. The biconditional withholds the refund. Near-misses do not count. Letter C will drop usage to $5\\%$ and open the refund, same timing. This letter is K's actual False5\\%$. Late branch is already fixed by letter A; this is the nested refund gate.

so the statement is False.`,
      `**C.** → True

K still cancelled $2$ days out, so $d<3$ and the late branch still applies. Change only the usage to $5\\%$. Then $5\\%<10\\%$ holds, so the refund side of that biconditional opens..

K still cancelled $2$ days out, so $d<3$ and the late branch still applies. Change only the usage to $5\\%$. Then $5\\%<10\\%$ holds, so the refund side of that biconditional opens. The recovered counterfactual keeps the late branch and flips only $u$. Timing $d=2$ is unchanged, so renewal still happens, letter A, and the refund now happens as well. Low usage is necessary and sufficient for the refund inside the late branch, not a replacement for timing..

The recovered counterfactual keeps late branch and flips only $u$ to $5\\%$. Then $u<10\\%$ holds and the refund opens. Timing $d=2$ is unchanged, so renewal still happens. Low usage is necessary and sufficient for the refund inside the late branch, not a replacement for timing. This letter is that nested iff, with $u$ flipped. Letter B was the same nest with K's real $15\\%$.

so the statement is True.`,
      `**D.** → True

Change only the timing to $4$ days: $4\\ge 3$, so K moves into the early branch. Early branch: no renewal and no charge. The $15\\%$ usage figure is never read, because the refund biconditional sits only in the late branch..

Change only the timing to $4$ days: $4\\ge 3$, so K moves into the early branch. Early branch: no renewal and no charge. The $15\\%$ usage figure is never read, because the refund biconditional sits only in the late branch. The recovered early branch ignores $u$. Usage is nested inside late cancellation. An early cancel never consults it. Letter E will claim the usage test applies regardless of timing; this letter is the picture that it does not..

The recovered early branch ignores $u$. At $d=4$ there is no renewal, no charge, and no refund question. Usage is nested inside late cancellation. Letter E will claim the usage test applies regardless of timing; this letter is the picture that it does not. Move only the clock, leave $15\\%$ in place, and that $15\\%$ is never read. The late-branch iff never fires.

so the statement is True.`,
      `**E.** → False

The $10\\%$ usage test is written only in the late-cancellation paragraph ($d<3$). If a subscriber cancels $3$ or more days ahead, the early branch settles everything by timing: no renewal, no charge, and no refund question..

The False0\\%$ usage test is written only in the late-cancellation paragraph ($d<3$). If a subscriber cancels $3$ or more days ahead, the early branch settles everything by timing: no renewal, no charge, and no refund question. The recovered usage test is nested, not global. Claiming it applies regardless of how many days before renewal the subscriber cancels reads a nested biconditional as a standing duty. Letter D already moved K to $d=4$ and found usage irrelevant. This letter is that nesting in general language. What would make usage global? Writing the False0\\%$ test outside both branches. The stem wrote it only in the late branch..

The recovered usage test is nested, not global. Early cancel, $d\\ge 3$, never consults $u$. Claiming it applies regardless of days reads a nested biconditional as a standing duty. Letter D already moved K to $d=4$ and found usage irrelevant. This letter is that nesting in general. What would make usage global? Writing the False0\\%$ test outside both branches. The stem wrote it only in the late branch. Timing first, usage only if late..

The recovered policy reads timing first. Early cancel never consults usage. Late cancel consults usage only for the nested refund iff. Claiming the False0\\%$ test applies regardless of days treats that nest as a standing duty. It is not. Letter D already moved K to $4$ days and found False5\\%$ unread. This letter is that nesting in general. What would make usage global? Writing it outside both branches. The stem wrote it only in the late paragraph.

so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 12,
    solution_overview: `**Part 1.** The setup.

Let $d$ be the number of days between cancelling and the renewal date, and $u$ the share of the service used.

**Part 2.** The operations.

Branch 1, cancelled early, $d\\ge 3$: no renewal and no charge. Usage is never mentioned in this branch. Branch 2, cancelled late, $d<3$: the subscription renews and the subscriber is charged. Afterwards a partial refund is issued exactly when $u<10\\%$. Because this is an if and only if, low usage both triggers the refund and is required for it.

**Part 3.** The scans.

K cancelled $2$ days out, so $d<3$, late branch: the subscription renews. K used $15\\%$, so $u<10\\%$ fails and there is no refund. At $5\\%$ usage the refund would open. At $d=4$ the early branch would apply and usage would never be read.`,
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

The guideline on the ward is a one-way promise: if a patient has a fever above $38^{\\circ}\\mathrm{C}$, then antibiotics are prescribed. Write $P$ for that strict fever test and $Q$ for the prescription. The overview recovered the implication $P\\Rightarrow Q$, and the unique failure of an implication is the row $P\\land\\neg Q$.

This letter asks whether the quoted sentence is that failure row, not whether such a patient has already been observed.

**1.** Fever strictly above $38^{\\circ}\\mathrm{C}$ makes $P$ true. Withholding antibiotics makes $Q$ false. Together those two facts are $P\\land\\neg Q$, matching the quoted sentence.

**2.** Negating by writing another if-then, "if fever then no antibiotics," would have produced $P\\Rightarrow\\neg Q$, a rival rule about every high-fever patient. That is why $P\\Rightarrow\\neg Q$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The true negation is a single observed violation, not a new policy.

Observing one such patient would show the guideline was broken. No other truth-table row can do that: a patient without fever, or a patient who did receive antibiotics, leaves $P\\Rightarrow Q$ intact.

The recovered failure case is $P\\land\\neg Q$, matching the quoted sentence, so the statement is True.`,
      `**B.** → False

The guideline fires only when the fever is above $38^{\\circ}\\mathrm{C}$. That recovered test is a strict inequality $T>38$, not the closed test $T\\ge 38$. Boundary temperatures are where rushed readings quietly change the predicate, and this letter is entirely about that boundary.

The claimed counterexample is a patient at exactly $38.0^{\\circ}\\mathrm{C}$ who is not prescribed antibiotics. Compare that reading with the recovered threshold before calling the file a refutation. A counterexample has to sit inside the hypothesis and fail the conclusion. Sitting on the printed number $38$ feels as if it should count, which is why the trap is tempting.

**1.** The comparison $38.0>38$ is false, so $P$ is false for this patient. When $P$ is false, the implication $P\\Rightarrow Q$ is idle: it makes no demand about antibiotics. Whether $Q$ is true or false, the guideline holds vacuously on this file. No antibiotics at $38.0$ is compatible with the rule, because the rule never switched on.

**2.** A genuine counterexample needs $P$ true and $Q$ false together: fever strictly above $38$ and no antibiotics. A patient at $38.1$ with no prescription would be that file. A patient at $38.0$ with no prescription is not. The $0.1$ gap is the whole content of the word "above."

**3.** Treating What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. "above $38$" as "at least $38$," folding the boundary into $P$. That misread would make $38.0$ a counterexample. The stem's wording is "above," and the recovered $P$ excludes the boundary. Another rushed move is to treat a thermometer rounding to $38.0$ as if it were already $38.1$. Rounding is not membership in $T>38$.

What would have to change for the opposite verdict? If the guideline had said "at least $38^{\\circ}\\mathrm{C}$" or "$38$ or higher," then $P$ would be true at $38.0$ and a missing prescription would break it. Against the actual wording, $38.0$ sits on the idle side of the arrow. The same idle-side fact would hold at $37.9$ or at $38.0$ equally: both fail $T>38$.

The recovered $P$ is a strict inequality, so the statement is False.`,
      `**C.** → True

The inverse of the guideline is $\\neg P\\Rightarrow\\neg Q$: if the fever is not above $38^{\\circ}\\mathrm{C}$, then antibiotics are not prescribed. That sentence is a different implication from the recovered $P\\Rightarrow Q$. Original and inverse live in opposite equivalence pairs, so the clinic can obey the guideline while routinely violating the inverse.

The letter supplies a concrete file: a patient at $37.5^{\\circ}\\mathrm{C}$ with a bacterial infection who still receives antibiotics. That is not a high-fever case, and it is not a missing-prescription case. It is a low-grade temperature with a prescription, which is the inverse's failure shape and the original's idle row at the same time.

**1.** Compare $37.5$ with the recovered threshold. The test $37.5>38$ fails, so $P$ is false and $\\neg P$ is true. Antibiotics were prescribed, so $Q$ is true and $\\neg Q$ is false.

**2.** The inverse therefore has a true "if" and a false "then" on this file. That is the unique failure row of $\\neg P\\Rightarrow\\neg Q$. One such file is enough to show the inverse can be false in practice.

**3.** The original guideline is silent here. Its hypothesis $P$ never fired, so $P\\Rightarrow Q$ holds vacuously on the same patient. The inverse can be false in practice while the guideline still holds. That is the whole point of the two equivalence pairs: knocking down the inverse does not knock down the original.

Thinking "inverse means the original backwards, so it must travel with the guideline" would have expected this file to break the original as well. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. It does not. The original only constrains patients whose fever is strictly above $38$. A $37.5$ reading never enters that constraint.

What would make the inverse true in this clinic is a second rule forbidding antibiotics whenever the fever is not above $38$. The stem never wrote that second rule. Ordinary bacterial cases at $37.5$ are exactly why it would be a bad extra promise: the clinic has reasons to prescribe that have nothing to do with crossing $38$. Treating $37.5$ as "close enough to $38$" would also have misplaced this file into $P$, which is a different error from mixing up inverse and original, but it would still hide the idle row. The stem's recovered values line up with $37.5$, whereas $P$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $37.5$ stays in the write-up. That contrast is the reason the verdict goes the way it does.

The $37.5$ bacterial file is a genuine failure of the inverse and a non-event for the guideline, so the statement is True.`,
      `**D.** → False

The converse of the guideline is $Q\\Rightarrow P$: if a patient is prescribed antibiotics, then the fever is above $38^{\\circ}\\mathrm{C}$. The overview recovered $P\\Rightarrow Q$, which points the other way. Converses are not free gifts of true implications. Signing a one-way promise about high-fever patients does not sign a one-way promise about who is allowed to receive antibiotics.

The same $37.5^{\\circ}\\mathrm{C}$ bacterial patient who receives antibiotics is the witness. That file was used in letter C against the inverse; here it is reused against the converse, which is legitimate because inverse and converse share a truth value. The extra work is to check the converse's own failure shape, $Q$ true and $P$ false.

**1.** Antibiotics were prescribed, so $Q$ is true. The fever $37.5$ is not above $38$, so $P$ is false. True "if" and false "then": $Q\\Rightarrow P$ fails on this file.

**2.** The original guideline only constrains high-fever patients. It says nothing about who may receive antibiotics when the fever is $37.5$. A clinic that treats bacterial infection at low-grade temperatures obeys $P\\Rightarrow Q$ and breaks $Q\\Rightarrow P$ at the same time. The two arrows are independent.

**3.** Treating What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. an implication as if it also forced its converse, reading "antibiotics, therefore high fever" out of "high fever, therefore antibiotics." Those are opposite arrows. The recovered pair puts the original with its contrapositive, not with this converse. Another rushed move is to think the $37.5$ patient is "too close to $38$ to count." Close is not membership in $T>38$.

For the converse to be guaranteed, the stem would have needed a biconditional: antibiotics if and only if fever above $38$. The guideline is only one direction. The $37.5$ patient who is treated anyway is allowed by the original and fatal to the converse. A patient at $39$ who is treated would satisfy both arrows and would not separate them. Separation needs the $Q$ without $P$ file, which is exactly the bacterial case already named.

The recovered implication does not lock $Q\\Rightarrow P$, so the statement is False.`,
      `**E.** → True

The target sentence is "not every patient prescribed antibiotics has a fever above $38^{\\circ}\\mathrm{C}$." That is the denial of the universal $Q\\Rightarrow P$ (every treated patient has a high fever). A proof by contradiction of a denial opens by assuming the thing being denied.

The claim describes that opening: assume every such patient does have a fever above $38$, then exhibit a real case that assumption cannot allow.

**1.** The opposite of the target is "every patient prescribed antibiotics has a fever above $38$." That is exactly the assumption named in the letter.

**2.** The $37.5^{\\circ}\\mathrm{C}$ patient who still receives antibiotics has $Q$ true and $P$ false, so the assumed universal is false. That file is a legal colliding case.

The opening described is the legal way to start a contradiction proof of the target. It does not yet finish the proof; it only names the correct first line and a case that first line cannot survive.

The recovered proof shape matches the claim, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 13,
    solution_overview: `**Part 1: Setup.**

The guideline is $P\\Rightarrow Q$: $P$ = fever above $38^{\\circ}\\mathrm{C}$, $Q$ = antibiotics prescribed.

**Part 2: Relatives.**

An implication fails only on $P\\land\\neg Q$. The inverse is $\\neg P\\Rightarrow\\neg Q$, the converse is $Q\\Rightarrow P$, and the contrapositive is $\\neg Q\\Rightarrow\\neg P$. "Above $38$" is a strict inequality, so a reading of exactly $38.0$ makes $P$ false.

**Part 3: Solve.**

A proof by contradiction of a claim opens by assuming the opposite of that claim.`,
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

Write $P$ for "the password has at least $12$ characters" and $Q$ for "it is classified as strong." The policy claims $P\\Rightarrow Q$ for every password. The stem hands over one concrete string: "aaaaaaaaaaaa".

Count the letters: twelve identical a's, so length $12$ and $P$ is true. The system does not classify it as strong, so $Q$ is false. That is the unique failure row of $P\\Rightarrow Q$.

One such password is enough to show the policy is false as an absolute rule. Other long mixed passwords that happen to be classified as strong cannot rescue a universal implication after a single $P\\land\\neg Q$ witness.

Thinking "counterexample must be shorter than $12$" would be hunting the converse instead. Once $12$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. This letter is about the original policy, and the twelve-a string is exactly its failure shape.

The recovered witness has $P$ true and $Q$ false, so the statement is True.`,
      `**B.** → True

The converse is $Q\\Rightarrow P$: if a password is classified as strong, then it is at least $12$ characters. That sentence lives in the other equivalence pair, with the inverse, not with the original policy.

The twelve-a string collapsed $P\\Rightarrow Q$. Collapse of one pair never decides the other pair. Settling the converse needs either a strong password shorter than $12$ characters, or a proof that no such password exists. Neither is supplied by "aaaaaaaaaaaa," which is long and not strong.

Thinking "the policy is false, so every relative is false" would have condemned the converse automatically. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. Relatives travel in pairs, not as a block of four.

The recovered objects that kill the policy are length $12$ with $Q$ false. Those objects sit on the original's failure row $P\\land\\neg Q$. The converse fails only on $Q\\land\\neg P$: a classified-strong password that is still short. The twelve-a file has $Q$ false, so it never even enters the converse's "if" slot. Vacuous holding on that one file is not a proof of the converse, and it is not a refutation either.

What would settle the converse the other way? A system that labels some $8$-character string as strong, or a second rule that forbids any strong label below length $12$. The stem supplies neither. Length-only collapse of the original therefore leaves $Q\\Rightarrow P$ as unpaid work.

Independence here is not a slogan. It is a mismatch of failure shapes: the recovered password witnesses one pair and is silent on the other.

The original's contrapositive, "not strong, therefore under $12$ characters," falls with the original at the same twelve-a file. That is still the first pair. The converse is not in that pair, so it is not settled by watching the policy collapse.

so the statement is True.`,
      `**C.** → False

The converse $Q\\Rightarrow P$ asks something only when $Q$ is true, that is, only of passwords that are classified as strong. An $8$-character, highly randomized password that is not classified as strong has $P$ false and $Q$ false. Randomness and rejection are two different coordinates, and this letter mixes them.

**1.** On that password the converse has a false antecedent, so it holds vacuously and learns nothing. False "if" cannot refute an implication. The same vacuous hold would apply to a $4$-character rejected password or a $20$-character rejected password: once $Q$ is false, $Q\\Rightarrow P$ is idle.

**2.** The file that would refute $Q\\Rightarrow P$ is a password that is classified as strong ($Q$ true) and is shorter than $12$ characters ($P$ false). High randomization with a rejected classification is the opposite shape: $Q$ is false, so the converse is not even tested. Strength in the ordinary English sense (lots of entropy) is not the predicate $Q$. $Q$ is the system's classification.

**3.** Confusing The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. "short and rejected" with "short and accepted." Only the accepted short password is a counterexample to "strong implies length at least $12$." The stem never exhibits such a password. Another rushed move is to think the original's failure at "aaaaaaaaaaaa" already kills the converse. That string is long and not strong, which is $P\\land\\neg Q$, the original's failure row, not the converse's.

What would have to change: if the system had classified that $8$-character random string as strong, then $Q$ would be true, $P$ false, and the converse would die. Against the given classification, the $8$-character rejection is idle for the converse. Length $8$ is doing no work here except to make $P$ false, which is the idle side of $Q\\Rightarrow P$.

The offered password does not disprove $Q\\Rightarrow P$, so the statement is False.`,
      `**D.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: under $12$ characters, therefore not strong. The contrapositive of the original is $\\neg Q\\Rightarrow\\neg P$: not strong, therefore under $12$ characters. Those two arrows run opposite ways.

The inverse is equivalent to the converse $Q\\Rightarrow P$, not to the contrapositive. The contrapositive travels with the original policy. Because the inverse pairs with the converse, its truth can be read off the converse. Both halves of the claim reverse that pairing: they say the inverse is equivalent to the contrapositive, and therefore that its truth cannot be inferred from the converse.

**1.** Pairing chart: original with contrapositive; converse with inverse. The claim swaps those pairs.

**2.** If the converse were settled, the inverse would be settled automatically, which is the opposite of "cannot be inferred from the converse."

Memorizing "all four relatives are different" would miss that two pairs always share a truth value. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The letter's "so" clause is the wrong pairing, twice.

The inverse is not equivalent to the contrapositive, so the statement is False.`,
      `**E.** → False

"If a password is not strong, it is under $12$ characters" is $\\neg Q\\Rightarrow\\neg P$, the contrapositive of the policy. A contrapositive always shares the original's truth value. No separate check is needed once the original is settled.

The policy is false, witnessed by "aaaaaaaaaaaa": length $12$ so $P$ is true, not classified as strong so $Q$ is false. The same password shows the contrapositive false: not strong, yet length $12$, so "under $12$" fails.

The claim says the contrapositive of a false statement can sometimes still be true, so we cannot determine this sentence without checking it separately. That is the one rewriting that cannot float free. Original false forces contrapositive false.

Thinking "false statements have mixed relatives" would have gone looking for a new password. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The twelve-a string already kills both members of the first pair.

The recovered contrapositive is false with the original, so the statement is False.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 14,
    solution_overview: `**Part 1: Setup.**

Write $P$ for "the password has at least $12$ characters" and $Q$ for "it is classified as strong." The policy claims $P\\Rightarrow Q$ for every password.

**Part 2: Relatives.**

The original pairs with the contrapositive $\\neg Q\\Rightarrow\\neg P$. The converse $Q\\Rightarrow P$ pairs with the inverse $\\neg P\\Rightarrow\\neg Q$.

**Part 3: Solve.**

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

The manager's sentence is a universal: every one of the $500$ chips in Batch $12$ passes the stress test. Inspection found chip #$317$ in Batch $12$ failed. A universal claim fails as soon as one member of the domain fails it.

The other $499$ chips have no bearing on that verdict. Even if all of them passed, the one failed chip is enough. The recovered counterexample is that single numbered chip, not a census of the batch.

Wanting "most chips pass, so the claim is roughly true" would be using a different standard. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. Universals do not admit a majority exception.

Batch $13$ is a different story, empty and idle. This letter is only Batch $12$, which has a named inhabitant that failed. Changing the stem so that #$317$ passed, or so that it belonged to another batch, would remove the witness. Against the given inspection, the recovered failure is already on the roster.

The manager's universal is therefore false as a claim about Batch $12$.

so the statement is True.`,
      `**B.** → False

The manager's claim is $\\forall x\\,\\mathrm{Pass}(x)$ on Batch $12$. Negating a universal produces an existential, not another universal:

$$\\neg\\forall x\\,\\mathrm{Pass}(x)\\equiv\\exists x\\,\\neg\\mathrm{Pass}(x)$$

In words: at least one chip fails. Chip #$317$ already witnesses that existential. The quoted negation, "all chips in Batch $12$ fail," is $\\forall x\\,\\neg\\mathrm{Pass}(x)$, which needs all $500$ failures. That is a much stronger sentence: it claims a clean sweep of failures, not the existence of one.

**1.** Those two sentences part company as soon as some chips pass and some fail. One failure makes the existential true and the "all fail" universal false. If $499$ chips passed and only #$317$ failed, "not all pass" is true and "all fail" is false. That mixed batch is the ordinary inspection outcome, and it already kills the manager without killing every chip.

**2.** Replacing After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. $\\exists$ with $\\forall$ when flipping a universal, copying the word "all" from the original and only changing "pass" to "fail." Negation changes the quantifier as well as the predicate. Another rushed move is to think chip #$317$ proves every chip failed. One numbered failure is the existential witness, not a census.

What would make the quoted sentence the correct negation? Nothing in this logic: "all fail" is stronger than "not all pass." The correct negation is the weaker existential, which chip #$317$ already supplies. For "all fail" to be the right reading, the manager would have had to claim "some chip passes," whose negation really is "all fail." That is not the manager's sentence.

The recovered negation is "at least one fails," not "all fail," so the statement is False.`,
      `**C.** → True

Batch $13$ was cancelled before production, so it contains zero chips. The sentence "all chips in Batch $13$ pass" is a universal over an empty domain.

To falsify that universal you would have to point at a chip in Batch $13$ that failed. There is no such chip, because there are no chips at all. A universal cannot be made false when the domain supplies no candidate counterexample.

That is exactly the situation described by vacuously true. The empty batch is not a trick about cancelled paperwork; it is the logical fact that $\\forall$ over $\\emptyset$ has no failing witness.

Thinking "no chips means the claim is false, because nothing passed" would be requiring a positive example, which is the standard for existentials, not universals. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does.

The recovered empty-domain universal is vacuously true, so the statement is True.`,
      `**D.** → False

Sentence 1 is $\\forall f\\,\\exists c\\,\\mathrm{Explains}(c,f)$: after the failed chip is named, a defect code may be chosen for that chip. Sentence 2 is $\\exists c\\,\\forall f\\,\\mathrm{Explains}(c,f)$: one code is chosen first and must cover every failure.

Quantifier order is the whole difference. The first allows the code to depend on the chip; the second freezes one code for the whole batch. English can hide that order behind similar-looking "there is a code" talk, which is why the two sentences sound interchangeable until the variables are written in order.

**1.** Ten failures with ten different codes make sentence 1 true (each failure gets its own code) and sentence 2 false (no single code covers all ten). That mixed-code batch is allowed by "for every failure there exists a code" and forbidden by "there exists a code for every failure."

**2.** One master code that happens to explain every failure would make both sentences true. That special case is a coincidence, not a translation. The stem never forces a master code.

**3.** Treating $\\forall\\exists$ and $\\exists\\forall$ as interchangeable would call those two English sentences "the same thing." After isolating the unknown, the check is against $\\forall\\exists$. The figure $\\exists\\forall$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $\\forall\\exists$ stays in the write-up.They are not. Dependence on the order of "for every" and "there exists" is the classic trap. Another rushed move is to think chip #$317$'s own defect code already names a master code for the batch. A code that explains #$317$ need not explain any other chip.

What would make them equivalent? Only a world in which one code happens to explain every failure, which is a special case of sentence 1, not a translation of it. Swapping the quantifiers in the other direction, $\\exists c\\,\\forall f$ implying $\\forall f\\,\\exists c$, is valid, but that is a one-way implication, not sameness.

The two recovered quantifier orders are different claims, so the statement is False.`,
      `**E.** → True

"Some chip in Batch $12$ failed" is $\\exists x\\,\\neg\\mathrm{Pass}(x)$. An existential is proved by exhibiting one witness. Chip #$317$ is in Batch $12$ and failed the stress test, which is that witness.

Nothing else about the batch matters: not the other $499$ chips, not Batch $13$, not defect codes. Existence claims do not require a second example, and they do not require a universal companion.

Wanting a full list of failures before accepting "some failed" would be proving a stronger sentence than the one asked. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Another rushed move is to think you must first prove the manager's universal false by some other route. Chip #$317$ is already the witness; the existential is the manager's negation, and it is proved by exhibition.

What would make the claim false? A world in which #$317$ was not in Batch $12$, or did not fail. The stem places that chip in Batch $12$ and records the failure.

The recovered witness is chip #$317$, so the statement is True.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 15,
    solution_overview: `**Part 1: Setup.**

The manager's sentence is a universal: every chip in Batch $12$ passes. Universal claims fail at one counterexample.

**Part 2: Relatives.**

Negating $\\forall x\\,\\mathrm{Pass}(x)$ yields $\\exists x\\,\\neg\\mathrm{Pass}(x)$, not $\\forall x\\,\\neg\\mathrm{Pass}(x)$. Batch $13$ is empty. A universal over an empty domain is vacuously true: there is no member that could fail it.

**Part 3: Solve.**

Quantifier order: $\\forall f\\,\\exists c$ lets the code depend on the chip; $\\exists c\\,\\forall f$ freezes one code for every failure. An existential is proved by one witness.`,
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

The original number-theory rule is $6\\mid n\\Rightarrow 3\\mid n$. If $6$ divides $n$, write $n=6k=3(2k)$. Then $2k$ is an integer, so $3$ divides $n$ automatically. The pair "divisible by $6$ and not by $3$" is empty.

The letter claims that empty situation occurs for infinitely many integers $n$. Empty is not infinite. The negation of a true universal implication never happens, let alone happens infinitely often.

Negating $P\\Rightarrow Q$ as $P\\land\\neg Q$ and then assuming that form must be populated would be confusing "correctly formed negation" with "the negation is true." After isolating the unknown, the check is against $P\\Rightarrow Q$. The figure $P\\land\\neg Q$ is the other route's landing point. The claim's wording is tested on the recovered side of that fork, which is why $P\\Rightarrow Q$ stays in the write-up.The form $6\\mid n$ and $3\\nmid n$ is the correct shape of the negation, and that shape has no integer inhabitants.

What would make the claim true? A world in which some multiple of $6$ avoided $3$, which the factorization $n=3(2k)$ forbids.

The recovered pairing is empty, so the statement is False.`,
      `**B.** → True

The converse claims: if $n$ is divisible by $3$, then $n$ is divisible by $6$. That is $3\\mid n\\Rightarrow 6\\mid n$, a different arrow from the recovered original.

Test $n=9$. Division by $3$:

$$9=3\\times 3$$

so $3$ divides $9$. Division by $6$:

$$9=6\\times 1+3$$

so $6$ does not divide $9$. Hypothesis true, conclusion false: $9$ is a perfectly good counterexample.

The reason is that $6$ also demands a factor $2$, and $9$ is odd. Any odd multiple of $3$ (such as $15$ or $21$) would work equally well; the letter names $9$, which is enough.

Thinking "divisible by $3$ is almost divisible by $6$" would have treated nearness as divisibility. The stem's recovered values line up with $3$, whereas $6$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $3$ stays in the write-up. Remainder $3$ is not remainder $0$.

The recovered converse fails at $n=9$, so the statement is True.`,
      `**C.** → True

The inverse is $6\\nmid n\\Rightarrow 3\\nmid n$: if $6$ does not divide $n$, then $3$ does not divide $n$. Inverse and converse always share a truth value, so a counterexample to one is a counterexample to the other.

Test $n=9$ again, now against the inverse. The hypothesis $6\\nmid 9$ is true, as the remainder $3$ already showed. The conclusion $3\\nmid 9$ is false, because $9=3\\times 3$. True hypothesis, false conclusion: the inverse fails at $9$.

That matches the already-false converse. Both halves of the claim hold: the inverse is equivalent to the converse, and $n=9$ serves both.

Thinking they needed a new integer for the inverse would have gone hunting. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The same odd multiple of $3$ does both jobs, because the two sentences are contrapose of each other.

The recovered inverse fails at $9$ with the converse, so the statement is True.`,
      `**D.** → False

The original $6\\mid n\\Rightarrow 3\\mid n$ holds for every integer, by the factorization $n=6k=3(2k)$. Its contrapositive is $3\\nmid n\\Rightarrow 6\\nmid n$, the same implication in other clothes. A statement true for every integer cannot fail for some $n$.

Directly: a number untouched by $3$ cannot be a multiple of $6$, because every multiple of $6$ is a multiple of $3$. No such $n$ exists.

Thinking "contrapositive is a different claim, so it might fail even if the original holds" would be breaking the one pairing that never breaks. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Original and contrapositive always march together.

What would make the contrapositive false? An integer not divisible by $3$ yet divisible by $6$. That integer would also kill the original, which the factorization $n=6k=3(2k)$ forbids. No extra search is needed: the original's proof is the contrapositive's proof.

The recovered contrapositive is true for every integer, so the statement is False.`,
      `**E.** → False

The original $6\\mid n\\Rightarrow 3\\mid n$ holds for every integer $n$. The converse $3\\mid n\\Rightarrow 6\\mid n$ is a different implication, already refuted by $n=9$. Falsity of the converse never leaks into the original.

The two statements are independent: they live in opposite equivalence pairs. Thinking "if the reverse arrow fails, the forward arrow fails" is mixing up those pairs. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. That is the classic mix-up this chapter is built to catch.

**1.** The original says a stronger condition (divisible by $6$) forces a weaker one (divisible by $3$). That direction is cheap: extra factors can only help. The converse says the weaker condition forces the stronger, which asks for a factor of $2$ that $9$ does not have.

**2.** Check $n=9$ against both arrows. For the original: $6$ does not divide $9$, so the hypothesis is false and the implication holds vacuously. For the converse: $3$ divides $9$ and $6$ does not, so the converse fails. One integer, two different verdicts.

**3.** The same split occurs at $15$, $21$, $27$, any odd multiple of $3$. The original stays true on that infinite family because its hypothesis is false there. The converse dies on that family because its hypothesis is true there.

What would make the original false? An integer divisible by $6$ but not by $3$, which the factorization forbids. Nine is divisible by $3$ and not by $6$, which is the converse's failure shape, the opposite of the original's. A second rushed move is to think "divisibility claims stand or fall as a block." $6\\mid n\\Rightarrow 3\\mid n$ can be true while $3\\mid n\\Rightarrow 6\\mid n$ is false, and that is the ordinary situation for a strictly stronger condition implying a weaker one.

The recovered original remains true,

Nine is the converse failure, not the original failure. The recovered original stays true for every integer, including that nine, because its hypothesis is false there.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 16,
    solution_overview: `**Part 1: Setup.**

The original statement is $6\\mid n\\Rightarrow 3\\mid n$. If $6\\mid n$, write $n=6k=3(2k)$, so $3\\mid n$ automatically.

**Part 2: Relatives.**

The converse is $3\\mid n\\Rightarrow 6\\mid n$, the inverse is $6\\nmid n\\Rightarrow 3\\nmid n$, and the contrapositive is $3\\nmid n\\Rightarrow 6\\nmid n$.

**Part 3: Solve.**

Original pairs with contrapositive; converse pairs with inverse. A number divisible by $3$ but not by $2$ (such as $9$) tests the second pair.`,
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

The given square is $1234^{2}=1{,}522{,}756$, which ends in $6$, so it is even. Rule $R$ says: even square implies even ID. Applying it in the stated direction gives that $1234$ itself is even.

Direct check: $1234=2\\times 617$. Hypothesis true, conclusion true: the rule is used correctly on this ID. The letter is not proving $R$ from scratch; it is firing the recovered implication on a file where the hypothesis holds.

Running the converse here would have started from "1234 is even" and deduced the square is even, which is also true but is a different rule. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. This letter uses $R$ in the direction written: even square, therefore even ID.

The recovered rule applies to $1234$ in the stated direction, so the statement is True.`,
      `**B.** → False

The rule is $n^{2}$ even $\\Rightarrow$ $n$ even. Contraposition starts from the denial of the conclusion and derives the denial of the hypothesis: assume $n$ is odd, derive that $n^{2}$ is odd.

The plan in the claim assumes $n$ even and derives that $n^{2}$ is even. That proves the converse $C$, not $R$. The opening assumption is the wrong half of the implication. This is a labelling error, not an algebra error: the even-to-even calculation is correct for $C$ and mislabelled as contraposition of $R$.

**1.** Contraposition of $R$: start from $n$ odd, conclude $n^{2}$ odd. Write $n=2k+1$, expand $n^{2}=4k^{2}+4k+1$, and read off the remainder $1$.

**2.** Direct proof of $C$: start from $n$ even, conclude $n^{2}$ even. Write $n=2k$, expand $n^{2}=4k^{2}$. Those are opposite opening lines and opposite expansions.

**3.** Thinking "assume the even case, because evenness is the topic" would have proved the easier converse and labelled it contraposition of $R$. Keeping $R$ is the whole of this check; a rounded or relabelled stand-in would be a different letter. The arithmetic already on the page is the one that belongs to the wording of the claim. Labels matter: the same even-to-even algebra is a correct proof of $C$ and a mislabelled proof of $R$. Another rushed move is to think "contrapositive means swap the two even facts." Swapping without negating produces the converse, which is exactly this letter's plan.

What would make the claimed plan correct? If the target had been $C$ rather than $R$, or if the plan had opened with $n$ odd. Against $R$, opening with $n$ even is the wrong door.

The recovered IDs do not rescue the label either. $1234$ is even with an even square, which is a file for $C$, not a contrapose of $R$. $4321$ is odd with an odd square, which is the contrapose of $C$. Neither file is the opening "assume even, derive even square" dressed as a contrapose of $R$.

The recovered contraposition of $R$ still opens with $n$ odd, so the claimed plan is the wrong proof of the wrong relative.

so the statement is False.`,
      `**C.** → True

The given square $4321^{2}=18{,}671{,}041$ ends in $1$, so it is odd. The fact doing the work is "$n^{2}$ odd implies $n$ odd," which is the contrapositive of the converse $C$ ($n$ even implies $n^{2}$ even), and also the direct reading of "odd square, therefore odd ID."

An odd square really does force an odd ID. Direct check: $4321=2\\times 2160+1$, remainder $1$, so $4321$ is odd. Hypothesis (odd square) true, conclusion (odd ID) true.

Applying $R$ itself here would be stuck: $R$ speaks only about even squares, and this square is odd, so $R$ is idle. The opposite verdict would need a different isolation than $R$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The letter correctly names the contrapositive direction that handles odd squares.

The neighbouring file $1234$ is the even-square case and is idle for this sentence. Swapping the two IDs would make the odd-square rule silent. Against $4321$, the recovered odd-square implication fires and matches the odd remainder. The last digit $1$ is already enough to read oddness; the full square $18{,}671{,}041$ is listed only to confirm that digit.

so the statement is True.`,
      `**D.** → False

Rule $R$ is $n^{2}$ even $\\Rightarrow$ $n$ even. Its converse $C$ is $n$ even $\\Rightarrow$ $n^{2}$ even. They point opposite ways. Both happen to be true for integers, but two true statements with two proofs are still two statements, not "logically the same."

$C$ is proved from $n=2k$, giving $n^{2}=4k^{2}$. $R$ is proved from $n=2k+1$, giving $n^{2}$ odd, which is the contrapositive route. Different opening assumptions, different algebra.

Treating What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. "both true" as "logically the same." Logical sameness would mean each is equivalent to the other as formulas, which would make $R$ equivalent to its converse in general, false for an arbitrary implication.

On integers the two arrows happen to travel together because evenness of $n$ and of $n^{2}$ are equivalent. That is a number-theory coincidence, not a law of implication. A different predicate, such as "if $n$ is divisible by $4$, then $n$ is even," is true while its converse is not. The stem's $R$ and $C$ still have two names, two proofs, and two opening lines.

The recovered $R$ and $C$ remain distinct implications.

so the statement is False.`,
      `**E.** → True

An implication $R$ fails only on $n^{2}$ even and $n$ odd. A contradiction proof of $R$ therefore assumes exactly that pair, then derives an impossibility.

From $n=2k+1$ one gets

$$n^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1$$

which is odd, colliding with the assumption that $n^{2}$ is even. The opening the claim describes is the legal one: assume the failure row, then watch it collapse.

Opening by assuming $n$ even would be proving $C$ again. The recovered comparison therefore keeps $n$ and does not substitute $C$. Contradiction proofs of an implication open on the unique false row of that implication.

What would make this opening wrong? If the claim had been a contradiction proof of $C$, the opening pair would be $n$ even and $n^{2}$ odd, which is a different row. The letter names $n^{2}$ even and $n$ odd, which is $R$'s row, not $C$'s.

The recovered contradiction opening matches the claim, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 17,
    solution_overview: `**Part 1: Setup.**

Two statements are in play:

$$R:\\ n^2\\text{ even}\\Rightarrow n\\text{ even},\\qquad C:\\ n\\text{ even}\\Rightarrow n^2\\text{ even}$$

$C$ is the converse of $R$.

**Part 2: Relatives.**

Contraposition of $R$ starts from $n$ odd and derives $n^2$ odd. A contradiction proof of $R$ assumes $n^2$ even and $n$ odd.

**Part 3: Solve.**

Given: $1234^2=1{,}522{,}756$ (even) and $4321^2=18{,}671{,}041$ (odd).`,
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

Thales' theorem is a universal implication: every triangle inscribed in a semicircle with the diameter as one side has a right angle at the third vertex. Write $P(t)$ for that inscription and $Q(t)$ for the right angle. The theorem is $\\forall t\\,(P(t)\\Rightarrow Q(t))$.

Negating a universal implication yields $\\exists t\\,(P(t)\\land\\neg Q(t))$: there exists such a triangle without a right angle. To deny a claim about every triangle you need only promise a single misbehaving triangle.

The quoted sentence is that existential. Correct formation is about shape. The theorem later shows no such triangle exists, which makes the negation false, not incorrectly formed.

Negating by writing "every such triangle lacks a right angle" would have produced another universal. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Universals negate to existentials.

The recovered negation is the existential named in the claim, so the statement is True.`,
      `**B.** → True

Thales' theorem establishes the original universal. A statement and its negation cannot both hold, so the existential "there exists such a triangle without a right angle" must be false.

The theorem is proved, so the misbehaving triangle the negation demands does not exist. A proved statement always leaves its negation false. That is not extra geometry; it is the relation between a sentence and its negation.

Thinking "the negation is correctly formed, so it might still be true" would be confusing formation with truth. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Letter A settled formation; this letter settles truth value.

What would make the negation true? A triangle inscribed on a diameter with a non-right third angle. Thales' theorem says that triangle does not exist. Correct formation plus a theorem is a false existential, not an open question.

The recovered theorem leaves its negation false, so the statement is True.`,
      `**C.** → True

The converse is: if a triangle has a right angle, it can be inscribed in a semicircle with its hypotenuse as the diameter. Start with an arbitrary right triangle, hypotenuse $AB$, right angle at $C$. Let $M$ be the midpoint of $AB$.

Then $MA=MB$ by construction, and a classical theorem gives $MC=MA$ as well. The circle centred at $M$ with radius $MA$ therefore passes through $A$, $B$, and $C$, and $AB$ is a diameter. Every right triangle can be inscribed that way. That is a genuine extra construction, not a reread of Thales' theorem.

This is extra geometry, not a free gift of Thales' theorem. The overview recovered the original $P\\Rightarrow Q$; this letter proves $Q\\Rightarrow P$ by the midpoint construction. The two directions use different ideas: Thales starts from a diameter and produces a right angle; the converse starts from a right angle and produces a diameter.

Thinking "converses always fail" would have rejected a true geometric converse on principle. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Most converses fail; this one happens to be a theorem. Another rushed move is to think the converse is "the same picture as Thales, so it comes for free." The midpoint has to be introduced and the equalities $MA=MB=MC$ have to be used. Without $M$, there is no circle to name.

What would make the converse false? A right triangle that could not be placed with its hypotenuse as a diameter of a circle through the third vertex. The midpoint construction shows no such triangle exists. A non-right triangle can still be inscribed in some circle, but not with a side as diameter in the Thales sense, which is a different claim.

The recovered converse holds by the midpoint construction,

The midpoint M is extra geometry this letter is allowed. Thales does not hand over that construction; the construction has to be named and used.

so the statement is True.`,
      `**D.** → True

Thales' theorem gives $P\\Rightarrow Q$: inscribed on a diameter, therefore a right angle. The midpoint construction gives $Q\\Rightarrow P$: a right angle, therefore inscribable on the hypotenuse as diameter. Both directions hold, so here $P\\Leftrightarrow Q$.

That is a proved geometric fact, not a free gift of every implication. Most converses fail, which is why the letter is careful to say "even though converses are not true in general." This pair is an example of a biconditional that had to be earned twice, once in each direction.

Thinking "biconditional means we only proved one arrow" would have missed the converse work in letter C. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Both arrows are present, so the implication is effectively a biconditional on this geometric pair.

The recovered pair is $P\\Leftrightarrow Q$, so the statement is True.`,
      `**E.** → False

The inverse is $\\neg P\\Rightarrow\\neg Q$: not inscribed that way, therefore no right angle. That sentence is equivalent to the converse, never to the original. The original pairs with the contrapositive.

Truth of Thales' theorem therefore does not hand over the inverse. Here the inverse is true only because the midpoint construction makes the converse true, which then carries the inverse with it. The claimed reason ("inverse always equivalent to the original") is false.

Treating all four relatives as clones of the original would have accepted this letter. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The pairing chart is the whole content: original with contrapositive, converse with inverse.

A triangle that is not inscribed on a diameter can still have a right angle for other reasons, or fail to have one. That freedom is why the inverse is not a free gift of Thales. The recovered pairing puts the inverse with the converse. Sharing a truth value with the original would require a biconditional from the start, which this letter's reason never supplied.

The recovered inverse is not equivalent to the original.

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 18,
    solution_overview: `**Part 1: Setup.**

Thales' theorem is $\\forall t\\,(P(t)\\Rightarrow Q(t))$: every triangle inscribed in a semicircle with the diameter as one side has a right angle at the third vertex. Negation is $\\exists t\\,(P(t)\\land\\neg Q(t))$.

**Part 2: Relatives.**

The converse $Q\\Rightarrow P$ is the midpoint construction: the circle centred at the midpoint of the hypotenuse with that radius passes through all three vertices.

**Part 3: Solve.**

Both directions give a biconditional. The inverse $\\neg P\\Rightarrow\\neg Q$ pairs with the converse, not with the original.`,
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

The theorem is $S\\Rightarrow O$: perfect square, therefore an odd number of positive divisors. Negating an implication keeps the "if" and rejects the "then": $S\\land\\neg O$, a perfect square with an even divisor count. That is the quoted sentence.

Correct formation is about shape. The pairing argument later shows no integer actually fits that shape, so the negation is a false sentence with the right form. This letter only asks whether the form is right.

Wanting the negation to be "if square then even count" would have written another implication $S\\Rightarrow\\neg O$. Once $S\\Rightarrow\\neg O$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. The true negation is a single counterexample shape, not a rival theorem.

Sample $36$ has nine divisors, odd, so it is not a witness of $S\\land\\neg O$. Sample $20$ is not a square, so it is not a witness either. The form can be correct while remaining empty of examples. Emptiness is a later letter's news. Here the recovered negation is still $S\\land\\neg O$.

so the statement is True.`,
      `**B.** → True

$36$ is $6^{2}$, so the hypothesis "perfect square" holds. The listed divisors are $1,2,3,4,6,9,12,18,36$: nine numbers, and nine is odd. Hypothesis true and conclusion true: $36$ supports the theorem.

A counterexample would need a square with an even divisor count, which this is not. Count the list:

$$9=2\\times 4+1$$

odd, as the leftover square-root partner $6$ predicts. Counting $8$ by dropping $36$ itself, or $10$ by double-counting $6$, would have thought they had found a counterexample. The stem's recovered values line up with $8$, whereas $6$ is the number you get only after that mix. The claim's wording is tested on the recovered side of that fork, which is why $8$ stays in the write-up. The given roster has nine members.

What would make $36$ a counterexample? An even count on this square, which would require the leftover partner $6$ not to be listed. It is listed. The theorem is supported, not threatened.

The recovered example is consistent with the theorem, so the statement is True.`,
      `**C.** → True

Divisors pair as $d$ with $n/d$. A divisor is its own partner only when $n$ is a perfect square. So if the divisor count is odd, that leftover partner must exist, and $n$ is a square. That is the converse: odd count $\\Rightarrow$ square.

It sits beside the original theorem $S\\Rightarrow O$. Both directions hold here, by the same pairing. This is extra number theory on the recovered pairing, not a free gift of the original arrow.

**1.** If $n$ is not a square, every $d$ has a partner $n/d\\ne d$, so the list comes in pairs and the count is even. The contrapositive of the converse is therefore true, which is the same as the converse being true.

**2.** Sample $36$: nine divisors, leftover partner $6$, odd count, and $36$ is a square. Sample $20$: six divisors, no leftover, even count, and $20$ is not a square. Both samples match the converse.

**3.** Thinking "converses always fail" would have rejected this one on principle. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The leftover square-root partner is why this converse is true. Another rushed move is to think "odd count could come from some other leftover." The only way a divisor is its own partner is $d^{2}=n$.

What would make the converse false? A non-square with an odd divisor count, which would require a self-partner that was not a square root. The pairing forbids that.

The original theorem is $S\\Rightarrow O$. This letter is the reverse arrow $O\\Rightarrow S$. They are two sentences that happen to be jointly true, which is why both directions of the implication hold. Treating "both true" as "the same sentence" would be answering letter D of a neighbouring ID-parity task. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Here the pairing really does buy the converse.

The recovered pairing therefore licenses the converse as well as the original.

so the statement is True.`,
      `**D.** → False

The theorem speaks only about perfect squares. $20$ sits between $4^{2}=16$ and $5^{2}=25$, so $20$ is not a square and the hypothesis $S$ is false. Its divisors number $6$, even, as the pairing for non-squares predicts.

An implication with a false "if" is not tested, let alone refuted, by $20$. A counterexample to $S\\Rightarrow O$ would need $S$ true and $O$ false: a square with an even divisor count.

**1.** The six divisors $\\{1,2,4,5,10,20\\}$ confirm even count for a non-square, which supports the inverse, not a refutation of the original. Even count on a non-square is what the pairing promised.

**2.** Treating What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. a non-square with an even list as if it broke "square $\\Rightarrow$ odd count." That is the inverse's success shape, not a counterexample to the theorem. Another rushed move is to think $20$ is "close to $16$ and $25$, so almost a square." Close is not membership in $S$.

**3.** Compare $36$ from letter B: square, odd count, supports the theorem. Compare $20$: non-square, even count, idle for the theorem. The two samples are not interchangeable.

The recovered $20$ never fires the hypothesis, so the statement is False.`,
      `**E.** → True

The inverse is "not a square, therefore even divisor count," equivalent to the converse. $20$ is not a square and has $6$ divisors, even, matching it. The pairing argument gives the same conclusion in general: with no leftover square-root partner, every divisor has a distinct mate and the count is even.

The inverse holds here because the converse does. Thinking they needed a separate proof for the inverse would have missed the pairing: converse true forces inverse true. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

What would make the inverse false? A non-square with an odd divisor count, the same monster that would kill the converse. The pairing argument shows that monster does not exist, which is why $20$'s even list is typical rather than exceptional.

The recovered inverse holds with the converse, so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 19,
    solution_overview: `**Part 1: Setup.**

Divisors pair as $d$ with $n/d$. A divisor is its own partner only when $d^{2}=n$, that is when $n$ is a perfect square. So a square has an odd divisor count (the square-root partner stands alone), and a non-square has an even count.

**Part 2: Relatives.**

The theorem is $S\\Rightarrow O$: perfect square, therefore odd divisor count. The converse is odd count $\\Rightarrow$ square.

**Part 3: Solve.**

The inverse is not a square $\\Rightarrow$ even count. Negation of the theorem is $S\\land\\neg O$. Sample $36=6^{2}$; sample $20$ sits between $4^{2}$ and $5^{2}$.`,
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

Four friends, four distinct jobs. Open clue (3): Grace is not a teacher. Clue (2) is a biconditional, so "Felix is an engineer" must match "Grace is a teacher." The right-hand side is false, therefore Felix is not an engineer.

Clue (1) is "Emma is a doctor $\\Leftrightarrow$ Felix is not an engineer." The right-hand side is now true, so Emma is a doctor. Each link is forced; there is no other job for her.

The overview recovered that chain. This letter only asks Emma's job, which the chain pins before Hugo is ever used.

Starting from clue (4) and trying to place Emma among the leftovers would have been doing extra work. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That contrast is the reason the verdict goes the way it does. The path to Emma never mentions Hugo.

The recovered assignment makes Emma the doctor, so the statement is True.`,
      `**B.** → False

Felix does teach in the surviving assignment, but the justification attached to the claim is broken. Clue (2) connects two unknowns and on its own names nobody: it only says Felix is an engineer exactly when Grace is a teacher. A biconditional with both sides unset is a constraint, not a naming.

Even with clue (3) shutting Grace out of Teacher, clue (2) yields only "Felix is not the engineer." Pinning him to Teacher still needs Emma placed as doctor by clue (1) and Hugo placed as lawyer by clue (4), so that Engineer and Teacher are the two remaining jobs and Felix is barred from Engineer. Until those two placements happen, Felix could still be Doctor or Lawyer in a world that had not yet used (1) and (4).

**1.** Clue (2) alone: two biconditional sides, both unknown. No name is forced. Grace might be the teacher and Felix the engineer, or neither, and clue (2) is equally happy with both matching-true and matching-false.

**2.** Clues (2) and (3): Felix is not Engineer. Two jobs still open besides Doctor and Lawyer, which have not been assigned yet. "Not Engineer" is not "is Teacher."

**3.** The trap is treating a correct conclusion as if a single clue delivered it. A right job with a wrong reason makes the whole statement false. Another trap is to read "if and only if" as "Felix is the engineer," dropping the right-hand side.

What would make the claim true? A clue that named Felix as teacher outright. Clue (2) is not that clue. The recovered job happens to be Teacher, which is why the letter is tempting: the destination is right and the route is wrong.

The recovered job for Felix is Teacher, but not from clue (2) alone, so the statement is False.`,
      `**C.** → True

Clue (3) says Grace is not a teacher, so clue (2) forces Felix not to be an engineer, and clue (1) then makes Emma the doctor. Clue (4) places Hugo as the lawyer. Two jobs remain, Engineer and Teacher, for Felix and Grace, and Felix is already barred from Engineer.

With Doctor taken by Emma and Lawyer by Hugo, Grace engineers. That is extra placement after Emma's job was recovered: split the last two jobs using Felix's ban.

Giving Grace Teacher despite clue (3) would have broken the opening fact. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Giving her Lawyer would have collided with Hugo. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

Felix then takes Teacher, the last remaining job. The recovered permutation is Emma doctor, Felix teacher, Grace engineer, Hugo lawyer. This letter only names Grace's cell in that permutation. Swapping Grace with Felix would restore Felix as engineer and Grace as teacher, which clue (3) forbids.

The leftover job recovered for Grace is Engineer.

so the statement is True.`,
      `**D.** → True

Drop clue (3) and try Grace as teacher. Clue (2) then makes Felix the engineer. Clue (1) then makes "Emma is a doctor" false, so Emma is not the doctor. Clue (4) already placed Hugo as lawyer, so the only job left for Emma is Doctor. That contradicts "Emma is not a doctor."

The attempted Grace-as-teacher assignment is therefore impossible from (1), (2), and (4) alone. Clues (1), (2), and (4) already forbid Grace-as-teacher. The attempted assignment collapses without clue (3). So clue (3) is redundant: the full job assignment can be determined without it.

This is extra case work, not a reread of the main chain. The main chain used (3) as a convenient starter. Convenience is not necessity. Starting from (4) instead, Hugo is lawyer; then the Grace-as-teacher trial still collides with Emma's leftover job as above.

Thinking "every numbered clue must be load-bearing" would have kept (3) out of habit. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Redundancy is a logical fact about the remaining clues, not a comment on how the puzzle was written. Another rushed move is to drop (3) and then claim the assignment is underdetermined. It is not: the collision on Emma still forces Grace not to be the teacher, which is the content of (3), recovered from the other three clues.

What would make (3) essential? A puzzle in which Grace-as-teacher did not force Emma into a missing job. Here clue (4) tying up Lawyer is what makes Emma's leftover job collide. Without (4) the redundancy argument would fail, which is a different letter.

The recovered assignment is forced even without clue (3), so the statement is True.`,
      `**E.** → True

The chain to Emma's job used only clues (3), (2), and (1): Grace not teacher $\\Rightarrow$ Felix not engineer $\\Rightarrow$ Emma is doctor. Clue (4) names Hugo as lawyer and is used only later to split Engineer from Teacher between Felix and Grace.

Remove clue (4) and Emma is still the doctor. The path never mentioned Hugo. Two jobs among Felix and Grace might then be less settled, but this letter only asks whether Emma's job is still determined.

Thinking "losing any clue loses every placement" would have dropped Emma as well. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Load-bearing is local: clue (4) is load-bearing for Hugo and for the Felix/Grace split, not for Emma.

The recovered path to Emma never uses clue (4), so the statement is True.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 20,
    solution_overview: `**Part 1: Setup.**

Four friends, four distinct jobs.

**Part 2: Relatives.**

The clues are two biconditionals and two facts:

$$(1)\\ \\text{Emma doctor}\\Leftrightarrow\\text{Felix not engineer}$$

$$(2)\\ \\text{Felix engineer}\\Leftrightarrow\\text{Grace teacher}$$

$$(3)\\ \\text{Grace is not a teacher},\\qquad (4)\\ \\text{Hugo is a lawyer}$$

A biconditional forces matching truth values. Clue (3) supplies a fixed truth value that can start a chain.

**Part 3: Solve.**

Jobs are a permutation: each job is held by exactly one person.`,
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

The theorem says: if a sequence converges, then it is bounded. Its negation would be a sequence that converges and is not bounded. Because the theorem is proved for every sequence, that combination never occurs.

The theorem holds for every sequence, so nothing can converge while running off to infinity. The description picks out an empty collection. Empty is the correct inhabitant count for the negation of a true universal.

Thinking "negation of a theorem must happen sometimes" would be confusing "correctly formed" with "true." That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.The negation is correctly formed and false.

What would populate that collection? A convergent unbounded sequence. The theorem says that object does not exist, which is why the letter calls the situation impossible.

The recovered pairing "convergent and unbounded" is impossible, so the statement is True.`,
      `**B.** → True

The converse claims: bounded, therefore convergent. For $a_{n}=(-1)^{n}$ the terms are only $-1$ and $1$, so every term lies in $[-1,1]$ and the sequence is bounded. It never settles near a single limit: odd terms stay at $-1$ and even terms stay at $1$, two different values.

Bounded with no limit: the converse fails, and this sequence is the witness. The overview recovered that oscillating example; this letter only checks that it has the converse's failure shape, $Q$ true and $P$ false.

**1.** Boundedness: every term satisfies $-1\\le a_{n}\\le 1$. No term escapes any bound of size $1$ or more.

**2.** Divergence: if a limit $L$ existed, both the odd subsequence and the even subsequence would have to approach $L$. They approach $-1$ and $1$ instead, so no single $L$ works.

Thinking "bounded sequences look convergent" would have missed the two subsequences. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. Oscillation inside a closed interval is bounded divergence. Another rushed move is to think the converse fails only for unbounded sequences. Unbounded sequences kill the inverse's conclusion, not the converse.

The recovered sequence is bounded and divergent, so the statement is True.`,
      `**C.** → True

The inverse is "does not converge, therefore not bounded," equivalent to the converse. The same sequence $(-1)^{n}$ diverges (alternating) and stays inside $[-1,1]$ (bounded). Hypothesis of the inverse true, conclusion false.

The inverse is false for the same reason the converse is, with the same witness. Inverse and converse always share a truth value. No new sequence is required.

Going looking for an unbounded divergent sequence (such as $a_{n}=n$) would have found a file that satisfies the inverse rather than refuting it. That is why $a_{n}=n$ is written before the verdict: it is the recovered figure, not a shop-floor rewrite of it. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. The refuting file must be divergent and bounded, which is exactly the oscillation already in hand.

**1.** Write $P$ for convergence and $Q$ for boundedness. The theorem is $P\\Rightarrow Q$. The inverse is $\\neg P\\Rightarrow\\neg Q$. Failure of the inverse is $\\neg P\\land Q$: diverges, yet bounded.

**2.** The recovered oscillation has $\\neg P$ (no limit) and $Q$ (values in $\\{-1,1\\}$). That is the inverse's unique failure row. The converse $Q\\Rightarrow P$ fails on the same row, which is why one sequence does double duty.

**3.** The original theorem is idle on this file: $P$ is false, so $P\\Rightarrow Q$ holds vacuously. Knocking down the inverse does not knock down the theorem. That is the pairing, not a new analysis fact.

What would make the inverse true? Every divergent sequence would have to be unbounded. The stem's oscillation is the standard reason that extra promise is false. Replacing $(-1)^{n}$ by $n$ would have been illustrating divergence with unboundedness, which supports the inverse instead of breaking it. Working from the isolated values, $(-1)^{n}$ is the figure that is checked, not the detour that produced $n$.

The original theorem survives this file because its hypothesis never fires. The converse and the inverse do not survive, because their hypotheses do fire: boundedness for the converse, divergence for the inverse. Same witness, two names, one truth value for that pair.

The recovered inverse therefore falls with the converse at $(-1)^{n}$. Bounded divergence is the whole of this letter: not a new sequence, and not a claim about the original theorem.

so the statement is True.`,
      `**D.** → True

The contrapositive is "not bounded, therefore does not converge," equivalent to the proved theorem, hence true. For the sequences $n$, $2n$, and $n^{2}$, unboundedness is immediate ($n\\to\\infty$), and the contrapositive then yields divergence without a separate $\\varepsilon$-argument.

Both halves of the claim hold: the contrapositive is true, and it is genuinely the version used to prove those specific sequences diverge. This is extra commentary on usefulness, not a second proof of the theorem.

Thinking "contrapositive is just a rewriting, so it cannot be the usual proof" would have rejected the second half. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Analysts really do argue "unbounded, therefore divergent" on $n$, $2n$, and $n^{2}$.

The recovered contrapositive is true and used that way, so the statement is True.`,
      `**E.** → False

The theorem $P\\Rightarrow Q$ (convergent $\\Rightarrow$ bounded) sits with its contrapositive. The converse $Q\\Rightarrow P$ sits with the inverse. Falsity of the converse, witnessed by $(-1)^{n}$, does not touch the theorem.

A convergent sequence is still bounded; some bounded sequences (this oscillating one) fail to converge. The original theorem remains true. Falsity does not leak across the two pairs.

**1.** Feed $(-1)^{n}$ to the original: the sequence does not converge, so $P$ is false and $P\\Rightarrow Q$ holds vacuously. The same sequence kills the converse because $Q$ is true and $P$ is false.

**2.** Feed a convergent sequence, say $a_{n}=1/n$, to the original: it converges and is bounded, so both sides hold. That file cannot settle the converse.

**3.** Thinking "if boundedness does not force convergence, then convergence does not force boundedness" would have mixed the arrows. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. That is the same pair-mix as in the divisibility task: converse false, original true. Another rushed move is to think the oscillation is a counterexample to "convergent implies bounded." Oscillation is not convergent, so it never enters that hypothesis.

The recovered theorem stays true, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 21,
    solution_overview: `**Part 1: Setup.**

The theorem is $P\\Rightarrow Q$: a sequence converges, therefore it is bounded. Negation would be a sequence that converges and is unbounded.

**Part 2: Relatives.**

The converse is $Q\\Rightarrow P$ (bounded, therefore convergent). The inverse is $\\neg P\\Rightarrow\\neg Q$. The contrapositive is $\\neg Q\\Rightarrow\\neg P$.

**Part 3: Solve.**

Original pairs with contrapositive; converse pairs with inverse. The oscillating sequence $a_n=(-1)^n$ is bounded and does not converge.`,
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

Suppose J tells the truth. Then "exactly one truth-teller" is true, and J is that one, so K and L are both liars. L said "K and I are the same type." Both liars really are the same type, so L's sentence would be true. A liar cannot say a true sentence.

The J-truthful branch is impossible, so J is a liar. That is the recovered first collapse. This letter only asks J's type, which that collapse pins.

Starting by believing J would have been in the dead branch. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The contradiction on L is the reason J cannot tell the truth.

K's accusation and L's count are later letters. They are not needed to finish J. Once the truthful-J branch dies, J is a liar in every surviving assignment. Changing L's line so that two liars would not be "the same type" would reopen the branch. Against the given lines, the recovered type for J is liar.

so the statement is True.`,
      `**B.** → True

From the dead J-truthful branch, J is a liar. K's sentence is "J is lying," which is then true. A true sentence can come only from a truth-teller. K is a truth-teller.

Equivalently, K talks about J, so J and K always have opposite types: K's sentence is true exactly when J lies. Once J is a liar, K is forced to be a truth-teller.

Thinking "K accused J, so K is a liar too" would have missed that an accusation of lying is true when the target really lies. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

The recovered opposite-types fact is special to K's wording, not to L. L talks about matching K, which is a later constraint. This letter only needs K's sentence evaluated on a lying J. The evaluation is true, so K tells the truth. If K had said "J tells the truth," the same lying J would have made K a liar. The actual wording is an accusation of lying, and that accusation holds.

so the statement is True.`,
      `**C.** → True

J's sentence is false, so the count of truth-tellers cannot be exactly one, and K is already one, so a second is needed and L is all that is left. L's own sentence then checks out: K and L really are the same type.

If L were a liar instead, K would be the sole truth-teller and J's "exactly one" claim would become true, which a liar cannot say. That second collapse forces L to be a truth-teller. The two constraints work together: J's false count forbids a unique truth-teller, and K is already a truth-teller, so L cannot be a liar.

**1.** Surviving types so far: J liar, K truth-teller. Remaining question: L.

**2.** L a liar would make the truth-teller count equal $1$, restoring J's sentence. J is a liar, so J's sentence cannot be restored. L cannot be a liar.

**3.** L a truth-teller makes the count $2$, keeps J's sentence false, and makes L's "same type as K" sentence true, which a truth-teller is allowed to say.

Stopping after placing J and K would have left L open. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The count constraint, J's false sentence, closes L. Another rushed move is to think L could still be either type because L's sentence is about K, not about J. L's sentence is satisfied in the truth-teller case and the count constraint independently forbids the liar case.

What would leave L free? If J had said "at least one truth-teller," both L-types might survive. J said "exactly one," and that exact count is already used up by K unless L joins. The recovered type for L is therefore truth-teller, matching K.

so the statement is True.`,
      `**D.** → False

J said "exactly one of us is a truth-teller." J is a liar, so that count is wrong. In the surviving assignment K and L are both truth-tellers, so the actual count is two, not one.

"Exactly one" is J's own line, and a liar's sentence has to be false. The real count is two. Copying J's words as the answer would have been trusting a liar. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence.

What would make the claim true? A surviving assignment with K as the sole truth-teller, which the L-collapse forbids. Count one is J's line, and J is a liar, so the count cannot be one.

The three recovered types are liar, truth-teller, truth-teller. That is two truth-tellers. Copying J's census after placing J as a liar is the same error as treating a false sentence as data. Letter A already forced J's type; this letter only counts the surviving truth-tellers and refuses J's number.

so the statement is False.`,
      `**E.** → False

The J-truthful branch died on L's sentence. In the surviving branch J is a liar, so K's "J is lying" is true and K is a truth-teller. The count of truth-tellers is then not exactly one, so L must also be a truth-teller.

If instead L were a liar, K would be the sole truth-teller and J's "exactly one" would become true, which a liar cannot say. Every alternative closes. The assignment is unique: J liar, K and L truth-tellers.

**1.** Eight type triples exist in the abstract. The J-truthful half (four triples) dies because L's "same type" sentence would then be true of two liars. That leaves four triples with J a liar.

**2.** Among those, K must be a truth-teller, because K said J is lying and that is now true. Two triples remain: L truth-teller or L liar.

**3.** L liar restores "exactly one truth-teller," making J's sentence true. J is a liar, so that triple dies. One triple remains.

Thinking "three people, eight type assignments, surely two survive" would have skipped the two collapses. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Both leftover branches die. Another rushed move is to flip K and L while keeping J a liar: K a liar would make "J is lying" false, but J is a liar, so K's accusation would be true, which a liar K cannot say.

The recovered assignment is unique, so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 22,
    solution_overview: `**Part 1: Setup.**

Each islander's type must match the accuracy of what they say: a truth-teller's sentence is true, a liar's sentence is false.

**Part 2: Relatives.**

J says "exactly one of us is a truth-teller." K says "J is lying." L says "K and I are the same type."

K talks about J, so K's sentence is true exactly when J lies: J and K always have opposite types. Test the two branches for J.

**Part 3: Solve.**

A liar cannot say a true sentence, and a truth-teller cannot say a false one.`,
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

Rule (4) states it outright: Dmitri attends. Split on Ana. If Ana attends, rule (1) sends Boris away, rule (2) brings Ceci, and the unless-clause of (3) leaves Dmitri free, matching rule (4). If Ana stays away, Ceci cannot attend (else (3) would push Dmitri out), so Boris is forced in by (2), and Dmitri still attends. Both legal rosters keep Dmitri,

Rule (4) states it outright: Dmitri attends. Split on Ana. If Ana attends, rule (1) sends Boris away, rule (2) brings Ceci, and the unless-clause of (3) leaves Dmitri free, matching rule (4). If Ana stays away, Ceci cannot attend (else (3) would push Dmitri out), so Boris is forced in by (2), and Dmitri still attends. Both legal rosters keep Dmitri.

Thinking Dmitri's attendance depended on Ana would have missed that rule (4) is a flat fact. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

so the statement is True.`,
      `**B.** → False

Two legal rosters survive. Ana in: {Ana, Ceci, Dmitri}, because (1) drops Boris, (2) brings Ceci, and the unless-clause saves Dmitri. Ana out: {Boris, Dmitri}, because (3) then forbids Ceci, and (2) forces Boris in. Ana is in one roster and out of the other. The rules leave her decision open. Uniqueness would require the two cases to agree about Ana,

Two legal rosters survive. Ana in: {Ana, Ceci, Dmitri}, because (1) drops Boris, (2) brings Ceci, and the unless-clause saves Dmitri. Ana out: {Boris, Dmitri}, because (3) then forbids Ceci, and (2) forces Boris in. Ana is in one roster and out of the other. The rules leave her decision open. Uniqueness would require the two cases to agree about Ana.

Seeing Dmitri in both and concluding everyone is unique would have over-read rule (4). The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Dmitri is unique; Ana is not.

What would make Ana unique? A fifth rule naming her, or deleting the unless-clause in a way that killed one of the two cases. Against the four given rules, both cases live.

so the statement is False.`,
      `**C.** → True

The claim asks for at least one legal roster of size $3$. The Ana-in case puts Ana, Ceci and Dmitri in the room with Boris away: three attendees. Check the rules: (1) holds (Boris out), (2) holds (Ceci in), (3) is waived by Ana, (4) holds. One example is all an existence claim needs. The other legal roster has size $2$, which is irrelevant to an "at least one" claim,

The claim asks for at least one legal roster of size $3$. The Ana-in case puts Ana, Ceci and Dmitri in the room with Boris away: three attendees. Check the rules: (1) holds (Boris out), (2) holds (Ceci in), (3) is waived by Ana, (4) holds. One example is all an existence claim needs. The other legal roster has size $2$, which is irrelevant to an "at least one" claim.

Averaging the two sizes and reporting "about $2.5$" would have been answering a different question. Once $2.5$ is isolated, the statement is a yes-or-no against that number, and that is all this letter asks. The arithmetic already on the page is the one that belongs to the wording of the claim. That contrast is the reason the verdict goes the way it does. Existence needs one roster of three, and the Ana-in roster is that one.

so the statement is True.`,
      `**D.** → False

Try Ana out and Boris out together. Rule (4) still puts Dmitri in. With Ana out, rule (3) has no unless-exception, so Ceci attending would force Dmitri out, contradicting rule (4). Thus Ceci is out. Rule (2) says: if Boris is out, then Ceci attends. Boris out and Ceci out make rule (2) fail. The attempted pair "both absent" collapses: Boris is forced in. That is the Ana-out roster, not a third one.

Thinking "two absences are independent" would have missed the chain from Ana-out to Ceci-out to Boris-in. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The extra case work is that failed third roster.

The recovered solutions are only two: $\\{\\text{Ana},\\text{Ceci},\\text{Dmitri}\\}$ and $\\{\\text{Boris},\\text{Dmitri}\\}$. In the first, Ana attends so the pair of absences fails. In the second, Boris attends so the pair fails again. There is no legal roster in which Ana and Boris are both missing.

**1.** Ana out forces Ceci out, because otherwise Dmitri would be pushed out by the plain form of rule (3), against rule (4).

**2.** Ceci out with Boris out breaks rule (2). So Boris must attend whenever Ana stays away.

**3.** Ana in already sends Boris away by rule (1), which is the other recovered roster, still not "both out."

What would make the claim true? Dropping rule (2), or dropping Dmitri's mandatory attendance, so that Ceci could sit out with both Ana and Boris. Against the given four rules, the recovered chain forbids the joint absence.

The Ana-in roster already has Boris out, which is one absence, not two. The Ana-out roster already has Boris in, which is the other absence, not two. Joint absence would be a third roster, and the extra case work of this letter is that third roster's collapse at rule (2).

so the statement is False.`,
      `**E.** → False

Delete the unless-exception, so Ceci attending always forces Dmitri out. The Ana-in roster had Ceci and Dmitri both in, so that case dies. The Ana-out roster is {Boris, Dmitri} with Ceci out. Rule (3) is idle because Ceci is absent, so the stricter version still holds. One legal roster remains. The trap is thinking the unless-clause is load-bearing for every solution, when the Ana-out case never uses it,

Delete the unless-exception, so Ceci attending always forces Dmitri out. The Ana-in roster had Ceci and Dmitri both in, so that case dies. The Ana-out roster is {Boris, Dmitri} with Ceci out. Rule (3) is idle because Ceci is absent, so the stricter version still holds. One legal roster remains. The trap is thinking the unless-clause is load-bearing for every solution, when the Ana-out case never uses it.

Concluding "impossible" would have checked only the Ana-in case. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Impossibility needs every case to die. The Ana-out case survives the stricter (3).

so the statement is False.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 23,
    solution_overview: `**Part 1: Setup.**

Rule (4) is a flat fact, **Dmitri attends**, and it holds in every solution. The only real question is Ana, so split on her. **Case A: Ana attends.** Rule (1) sends Boris away. Rule (2), triggered by Boris's absence, brings Ceci in. Rule (3) would normally push Dmitri out when Ceci attends, but its "unless" exception is switched on precisely because Ana is here, so Dmitri is unrestricted and rule (4) is satisfied.

**Part 2: Relatives.**

Roster: **Ana, Ceci, Dmitri**, three attendees, Boris away. **Case B: Ana stays away.** Now rule (3) applies in its plain form, so Ceci attending would force Dmitri out. Dmitri is in, so **Ceci is out**. Reading rule (2) backwards, if Ceci is absent then Boris cannot be absent, puts Boris in, and rule (1) is content because Ana is away.

**Part 3: Solve.**

Roster: **Boris, Dmitri**, two attendees. Both cases work, so there are exactly two solutions and they disagree about Ana. Two things follow. Ana and Boris are never absent together: dropping Ana forces Ceci out and then Boris in. And deleting rule (3)'s exception would kill only Case A, since the Case B roster contains no Ceci and so satisfies the stricter rule untouched.`,
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

Rule (4) says: if Zoe joins, then Noah does not. Contrapose it: if Noah joins, then Zoe does not. That is the claimed implication, taken from a numbered rule. A rule and its contrapositive never disagree. If Noah joins, Maria comes by (1) and Zoe is out by this contrapositive,

Rule (4) says: if Zoe joins, then Noah does not. Contrapose it: if Noah joins, then Zoe does not. That is the claimed implication, taken from a numbered rule. A rule and its contrapositive never disagree. If Noah joins, Maria comes by (1) and Zoe is out by this contrapositive.

Thinking they needed a new derivation beyond contraposing (4) would have been doing extra work. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter is (4) swapped and negated.

so the statement is True.`,
      `**B.** → False

Suppose Leo and Noah both join. Rule (2): Leo joins only if Zoe joins, so Zoe must join. Rule (4): if Zoe joins, then Noah does not join. Zoe in and Noah in contradict rule (4). The chain is Leo $\\Rightarrow$ Zoe $\\Rightarrow$ not Noah, so Leo and Noah cannot share a roster. None of the legal rosters contains both.

Sitting them together because "study groups want everyone" would have ignored the numbered chain. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Extra check: put Leo and Noah in, force Zoe by (2), break (4). That failed roster is this letter's extra case.

The recovered legal list is five rosters, and every one of them omits at least one of Leo or Noah. The unique Noah roster is $\\{\\text{Noah},\\text{Maria}\\}$, with Leo and Zoe out. Every Leo roster includes Zoe and therefore excludes Noah.

Rule (3) never rescues the pair: it only demands Maria or Leo, and Maria already covers that demand in the Noah roster. Adding Leo on top of Noah is not required, and it is forbidden by the chain through Zoe.

What would make the pair legal? A stem that dropped rule (4), or that let Leo join without Zoe. Against the given rules, the recovered chain keeps them apart.

Maria-alone and Maria-Zoe are legal and contain neither of the forbidden pair. Adding both Leo and Noah to any of those would reintroduce Zoe through Leo and then expel Noah. The extra case is that attempted six-person pile-up, which dies at (4).

The recovered chain Leo to Zoe to not-Noah is a two-step implication, not a vague "they might clash." No legal roster from the overview's five-row list contains both names. That census is this letter's check.

so the statement is False.`,
      `**C.** → True

Try the roster {Maria}. Noah is out, so rule (1) is idle; Leo is out, so rule (2) is idle; Zoe is out, so rule (4) is idle. Rule (3) asks for Maria or Leo, and Maria is in, so all four rules hold. Maria on her own is legal. Possible,

Try the roster {Maria}. Noah is out, so rule (1) is idle; Leo is out, so rule (2) is idle; Zoe is out, so rule (4) is idle. Rule (3) asks for Maria or Leo, and Maria is in, so all four rules hold. Maria on her own is legal. Possible.

Thinking rule (3) needed both Maria and Leo would have been running an and. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. The recovered (3) is an or.

so the statement is True.`,
      `**D.** → True

Rule (1) says: if Noah joins, then Maria joins. Contrapose it: if Maria does not join, then Noah does not join. That is the claimed sentence, equivalent to a given rule, so it holds in every legal roster. No case work is required; a rule and its contrapositive never disagree,

Rule (1) says: if Noah joins, then Maria joins. Contrapose it: if Maria does not join, then Noah does not join. That is the claimed sentence, equivalent to a given rule, so it holds in every legal roster. No case work is required; a rule and its contrapositive never disagree.

Starting a case split on Maria would have been doing letter C's work. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. This letter is just (1) contraposed.

so the statement is True.`,
      `**E.** → False

Rule (3) needs Maria or Leo. Maria alone satisfies it, and with Noah, Leo, and Zoe all out, rules (1), (2), and (4) are idle. The roster {Maria} is legal and omits Zoe. A "must join" claim fails as soon as one legal roster leaves Zoe out. Zoe appears in some legal rosters, not all,

Rule (3) needs Maria or Leo. Maria alone satisfies it, and with Noah, Leo, and Zoe all out, rules (1), (2), and (4) are idle. The roster {Maria} is legal and omits Zoe. A "must join" claim fails as soon as one legal roster leaves Zoe out. Zoe appears in some legal rosters, not all.

Seeing Zoe in a Leo roster and concluding she is required would have mixed "appears sometimes" with "appears always." After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.Letter C's {Maria} is the witness that she is not required.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 24,
    solution_overview: `**Part 1: Setup.**

Four students, four rules:

$$(1)\\ N\\Rightarrow M,\\qquad (2)\\ L\\Rightarrow Z,\\qquad (3)\\ M\\lor L,\\qquad (4)\\ Z\\Rightarrow\\neg N$$

A rule whose "if" part is false demands nothing.

**Part 2: Relatives.**

Chaining (2) then (4) gives $L\\Rightarrow Z\\Rightarrow\\neg N$.

**Part 3: Solve.**

Contrapositives of (1) and (4) are available whenever the originals are.`,
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

Open with rule (1): Ben $\\Rightarrow$ Carla. Then rule (3): Carla $\\Rightarrow$ not Dan. Chain them: Ben $\\Rightarrow$ Carla $\\Rightarrow$ not Dan, so Ben playing forces Dan out. Ben pulls Carla in and Carla shuts Dan out, two rules in a row, no exceptions.

Thinking Dan could tag along with Ben would have broken (3) once Carla arrived. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered Ben rosters are $\\{\\text{Ben},\\text{Carla}\\}$ and $\\{\\text{Ben},\\text{Carla},\\text{Ella}\\}$. Dan is absent from both. The Dan roster $\\{\\text{Dan},\\text{Ella}\\}$ has no Ben. The chain is the whole of this letter; Ella is free on the Ben side and does not reopen a seat for Dan. Rule (2) never lets Dan in without Ella, and even with Ella, Carla is already there whenever Ben is there, so Dan still cannot join. The recovered implication is Ben playing, therefore Dan sitting out. Ella's optional seat on the Ben side is a later choice and does not rewrite rule (3).

so the statement is True.`,
      `**B.** → False

Suppose Ben and Dan both play. Rule (1) forces Carla in with Ben. Rule (3) then says: if Carla plays, Dan does not. Carla in and Dan in contradict rule (3). Equivalently: Ben $\\Rightarrow$ Carla $\\Rightarrow$ not Dan. The pair is impossible.

The extra case is that failed pair. Sitting them together because "friends" would have ignored the chain. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence.

Letter A already recovered the chain as an implication. This letter is the same chain read as a forbidden pair. Scanning the five legal rosters confirms it: no roster lists both names. Ella cannot mediate, because Carla is already in whenever Ben is in, and Carla forbids Dan. A friendship story that sat them at the same table would still have to obey (1) then (3). Those two rules, in that order, leave no legal seat for the pair. The recovered five-roster list is the census: Ben appears, Dan appears, never in the same row.

so the statement is False.`,
      `**C.** → True

Check $\\{\\text{Ella}\\}$ against the four rules. Ben is out, so rule (1) is idle; Dan is out, so rule (2) is idle; Carla is out, so rule (3) is idle. Rule (4) needs Ben or Ella, and Ella is in. $\\{\\text{Ella}\\}$ passes every rule. Ella can play alone.

Thinking rule (4) needed both Ben and Ella would have been running an and. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

This is an existence claim, so one surviving roster is the whole proof. The recovered list includes $\\{\\text{Ella}\\}$ as the "neither Carla nor Dan" case on the Ben-out side. Rule (4) is already satisfied by Ella, so Ben is not required to join her. Rules (1) through (3) never fire, because their hypotheses are false.

What would kill the singleton? A rule demanding at least two players, or demanding Carla whenever Ella plays. The stem has neither. Against the given four rules, the recovered singleton is legal.

The other Ben-out rosters $\\{\\text{Carla},\\text{Ella}\\}$ and $\\{\\text{Dan},\\text{Ella}\\}$ also exist, so Ella-alone is not the only Ben-out file. Existence needs only one, and $\\{\\text{Ella}\\}$ is the one named. Rule (4) is an or, not an and, which is why Ella does not need Ben beside her.

so the statement is True.`,
      `**D.** → True

Rule (3) is Carla $\\Rightarrow$ not Dan. Contrapose: Dan $\\Rightarrow$ not Carla. That is the claimed sentence, taken from a numbered rule. The only legal roster containing Dan is $\\{\\text{Dan},\\text{Ella}\\}$: rule (2) is satisfied because Ella plays, rule (4) is satisfied by Ella, and Carla is out, matching the contrapositive.

Putting Carla with Dan would have broken (3) directly. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

A rule and its contrapositive are the same claim, so no extra case work is required beyond reading (3) backwards. The recovered Dan roster simply illustrates the contrapose: Dan in, Carla out, Ella in to cover rule (2). Ben is then out automatically, because Ben would have brought Carla. The claimed sentence is therefore (3) contraposed, not a new constraint on Ella. If Carla were allowed to play with Dan, rule (3) itself would be gone, which is not this stem. The recovered Dan roster is {Dan, Ella} with Carla out, which is the contrapose in a picture.

so the statement is True.`,
      `**E.** → False

Carla is pulled in only by rule (1), and only when Ben plays. Without Ben, rule (4) still needs Ella, and Carla may sit out. {Ella} and {Dan, Ella} are both legal and omit Carla. A "must play" claim fails on either roster. Carla is required only as Ben's companion,

Carla is pulled in only by rule (1), and only when Ben plays. Without Ben, rule (4) still needs Ella, and Carla may sit out. {Ella} and {Dan, Ella} are both legal and omit Carla. A "must play" claim fails on either roster. Carla is required only as Ben's companion.

Seeing Carla in the Ben rosters and concluding she is compulsory would have mixed those rosters with the full list. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Two of the five recovered rosters omit her.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 25,
    solution_overview: `**Part 1: Setup.**

Start with the rule that has the longest reach. Ben brings Carla in by rule (1), and Carla pushes Dan out by rule (3):

$$\\text{Ben} \\Rightarrow \\text{Carla} \\Rightarrow \\neg\\,\\text{Dan}.$$

So a game with Ben in it never has Dan. Read from the other end the same fact says: if Dan plays then Carla stays out, which is rule (3)'s contrapositive, and with no Carla there can be no Ben either. **With Ben playing:** Carla joins, Dan is out, rule (4) is already satisfied by Ben, so Ella may please herself.

**Part 2: Relatives.**

Two rosters. **Without Ben:** rule (4) forces Ella in. Carla and Dan cannot both play, so we may take Carla, or Dan, or neither.

**Part 3: Solve.**

Three rosters, and in the Dan one rule (2) is content because Ella is there. The complete list:

• {Ben, Carla}

• {Ben, Carla, Ella}

• {Carla, Ella}

• {Dan, Ella}

• {Ella}

Two things are worth reading off that list. Ella alone is legal, since with Ben, Carla and Dan away three of the rules ask for nothing and Ella satisfies rule (4) by herself. And Carla is missing from two of the five rosters, so nobody can call her compulsory.`,
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

Rule (4) is: Quinn cooks only if Owen does not, that is Quinn $\\Rightarrow$ not Owen. Contrapose it: Owen $\\Rightarrow$ not Quinn. That is the claimed implication, taken from a numbered rule. Quinn is out whenever Owen is in. Turn the "only if" around and Owen cooking means Quinn does not.

Keeping Quinn with Owen would have broken (4). That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

The recovered Owen evening is $\\{\\text{Owen}\\}$ alone. Priya is already out by rule (1), and Quinn is out by this contrapose, so the kitchen has one cook. The other recovered evening $\\{\\text{Priya},\\text{Quinn}\\}$ has Owen out, which is compatible with Quinn cooking. This letter only asks the Owen-to-not-Quinn direction, which (4) contraposed already is. An evening with Owen and Quinn together would break (4) before (1) or (2) are even read. Priya's absence on the Owen night is a different rule; Quinn's absence is this contrapose. Two absences, two reasons, one recovered Owen-only kitchen.

so the statement is True.`,
      `**B.** → False

Rule (1) says: if Owen cooks, then Priya does not. A night with both cooking would make that hypothesis true and the conclusion false, violating rule (1) on the spot. No later rule is allowed to override a broken numbered rule. Never both. Rule (1) blocks that pairing in a single line,

Rule (1) says: if Owen cooks, then Priya does not. A night with both cooking would make that hypothesis true and the conclusion false, violating rule (1) on the spot. No later rule is allowed to override a broken numbered rule. Never both. Rule (1) blocks that pairing in a single line.

Sitting them together because rule (2) wants at least one would have mixed "at least one" with "both allowed." (1) and (2) together force exactly one, not both. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

so the statement is False.`,
      `**C.** → False

Check {Quinn} against the four rules. Rule (2) requires Owen or Priya; neither is cooking, so rule (2) fails immediately. Rule (1) is idle (Owen out). Rule (3) is idle (Priya out). Rule (4) holds, but a single broken numbered rule is enough. Quinn cannot cook alone. Rule (2) demands Owen or Priya every night,

Check {Quinn} against the four rules. Rule (2) requires Owen or Priya; neither is cooking, so rule (2) fails immediately. Rule (1) is idle (Owen out). Rule (3) is idle (Priya out). Rule (4) holds, but a single broken numbered rule is enough. Quinn cannot cook alone. Rule (2) demands Owen or Priya every night.

Thinking Quinn could cover the kitchen would have treated (2) as optional. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The extra case is that failed singleton roster.

so the statement is False.`,
      `**D.** → True

Rule (3) says: if Priya cooks, then Quinn also cooks. That is exactly the claimed guarantee. The only Priya evening the other rules allow is $\\{\\text{Priya},\\text{Quinn}\\}$, which includes Quinn: Owen is out by (1) and (2), and (4) holds because Owen is away. That is rule (3) quoted back.

Dropping Quinn on a Priya night would have broken (3). After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered pair of evenings is $\\{\\text{Owen}\\}$ and $\\{\\text{Priya},\\text{Quinn}\\}$. Whenever Priya is in the kitchen, Quinn is there too. The guarantee is not a new derivation; it is a numbered rule illustrated by the only surviving Priya roster. Owen-alone does not test this letter, because Priya is out and (3) is idle. The claim is about Priya nights, and on those nights Quinn is recovered as present. Dropping Quinn while Priya cooks is exactly the failure row of rule (3), and no legal evening has that row. The recovered Priya night is {Priya, Quinn}, which is the guarantee in a picture.

so the statement is True.`,
      `**E.** → False

Rules (1) and (2) together force exactly one of Owen or Priya. The Priya evening is {Priya, Quinn}: rule (3) brings Quinn, rule (4) holds because Owen is out, and rule (1) is idle. That legal evening omits Owen. Owen therefore is not required every night. The rules insist that one of Owen and Priya cooks, not that it must be Owen,

Rules (1) and (2) together force exactly one of Owen or Priya. The Priya evening is {Priya, Quinn}: rule (3) brings Quinn, rule (4) holds because Owen is out, and rule (1) is idle. That legal evening omits Owen. Owen therefore is not required every night. The rules insist that one of Owen and Priya cooks, not that it must be Owen.

Seeing the {Owen} night and concluding Owen is compulsory would have ignored the other legal night. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence. Two evenings, Owen on one of them.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 26,
    solution_overview: `**Part 1: Setup.**

Rules (1) and (2) sit together and do most of the work. Rule (1) forbids Owen and Priya from both cooking; rule (2) forbids them from both sitting out. Put them together and you get the pivot of the whole puzzle:

**exactly one of Owen and Priya cooks.**

So there are only two evenings to inspect. **Owen cooks.** Priya is out by rule (1).

**Part 2: Relatives.**

Rule (4) says Quinn cooks only when Owen does not, so Quinn is out as well, and rule (3) is idle because Priya is not cooking. Owen cooks alone: {Owen}. **Priya cooks.** Owen is out.

**Part 3: Solve.**

Rule (3) brings Quinn in, and rule (4) is satisfied because Owen is away: {Priya, Quinn}. That is the complete list. Notice what it rules out, an evening in which Quinn cooks while neither Owen nor Priya does would break rule (2), which insists that one of those two is always in the kitchen. And since no single person appears in both arrangements, nobody is obliged to cook.`,
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

Suppose Diego goes. Rule (1) brings Fatima. Rule (3) then pushes Grace out. Rule (2) needs Grace or Hugo, so Hugo goes. Rule (6): Hugo goes only if Fatima does not, so Fatima is out. Line 1 put Fatima in and the last line took her out. The assumption is impossible, so Diego never goes. There is no scenario for the claim to point at,

Suppose Diego goes. Rule (1) brings Fatima. Rule (3) then pushes Grace out. Rule (2) needs Grace or Hugo, so Hugo goes. Rule (6): Hugo goes only if Fatima does not, so Fatima is out. Line 1 put Fatima in and the last line took her out. The assumption is impossible, so Diego never goes. There is no scenario for the claim to point at.

The extra case is that collapsed Diego-in chain. Leaving Diego optional would have missed the collision on Fatima. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

so the statement is False.`,
      `**B.** → True

Rule (6) says Hugo goes only if Fatima does not; contraposed, Fatima going means Hugo staying home. A rule and its contrapositive are the same claim, so no case work is needed. That is the claimed implication, equivalent to a given rule.

Starting a five-person case split would have been doing letter C's work. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. This letter is (6) contraposed.

The recovered fact after Diego's collapse is that Hugo must go, which already forces Fatima out by (6). The contrapose $F\\Rightarrow\\neg H$ is still the same numbered rule, now read from Fatima's side. Sitting Fatima and Hugo together would break (6) on the spot, before any other chain is run. Letter C will force Hugo by a different route; this letter never needs that force, because (6) backwards already forbids the Fatima-Hugo pair. The claimed arrow is that numbered rule read from Fatima's side, not a new chain through Diego.

so the statement is True.`,
      `**C.** → True

Diego cannot go: $D\\Rightarrow F\\Rightarrow\\neg G\\Rightarrow H\\Rightarrow\\neg F$ collides. With Diego gone, rule (4) still needs Diego or Hugo, so Hugo must go in every remaining roster. Rule (4) needs Diego or Hugo, and Diego is off the table entirely, so the whole burden falls on Hugo.

Thinking Hugo was optional once Diego was out would have broken (4). What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The extra force is (4) after the Diego-collapse.

**1.** Diego in pulls Fatima by (1), which by (3) drops Grace, which by (2) puts Hugo in, which by (6) drops Fatima. Fatima in and Fatima out is the collision, so Diego is impossible.

**2.** Rule (4) is $D\\lor H$. After $D$ is impossible, $H$ is forced.

**3.** Iris is a later choice and cannot restore Diego, because (5) only forbids Iris-with-Diego; it does not create a Diego-in roster.

What would make Hugo optional? A legal Diego-in roster, which the Fatima collision forbids, or a stem that dropped rule (4). Against the given six rules, Hugo attends in every surviving assignment.

Iris can join some of those assignments, and Grace is already out once Hugo is in, by rule (2)'s "unless." None of those later choices restores a Hugo-out roster, because Diego is still impossible and (4) still needs one of Diego or Hugo. The recovered mandatory name is Hugo.

Keeping Hugo optional after seeing Diego fail would have left rule (4) with two false disjuncts. The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The extra force in this letter is that remaining disjunct, not a new preference for Hugo. After Diego's collision, Hugo is the only way to keep rule (4) true, so he attends in every surviving assignment.

so the statement is True.`,
      `**D.** → True

Diego is impossible, so Fatima is out by the same collapse ($H$ is forced and then (6) keeps Fatima out). Test {Hugo, Grace, Iris}: rules (1) and (3) are idle, rule (2) is satisfied because Hugo is in, rule (4) is satisfied by Hugo, rule (5) holds because Diego is out, and rule (6) holds because Fatima is out. All six hold, so Grace and Iris can attend together,

Diego is impossible, so Fatima is out by the same collapse ($H$ is forced and then (6) keeps Fatima out). Test {Hugo, Grace, Iris}: rules (1) and (3) are idle, rule (2) is satisfied because Hugo is in, rule (4) is satisfied by Hugo, rule (5) holds because Diego is out, and rule (6) holds because Fatima is out. All six hold, so Grace and Iris can attend together.

Thinking Grace and Iris conflicted would have invented a rule the stem does not contain. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The extra case is that legal triple.

so the statement is True.`,
      `**E.** → False

The claimed implication is Iris $\\Rightarrow$ Fatima. Hugo is always in (Diego is impossible, so (4) forces Hugo), and rule (6) then keeps Fatima out of every legal roster. Iris goes in {Hugo, Iris} and {Hugo, Grace, Iris}. Take {Hugo, Grace, Iris}: Iris in, Fatima out. True "if", false "then." The implication fails,

The claimed implication is Iris $\\Rightarrow$ Fatima. Hugo is always in (Diego is impossible, so (4) forces Hugo), and rule (6) then keeps Fatima out of every legal roster. Iris goes in {Hugo, Iris} and {Hugo, Grace, Iris}. Take {Hugo, Grace, Iris}: Iris in, Fatima out. True "if", false "then." The implication fails.

Chaining Iris to Diego to Fatima would have been using (5) backwards incorrectly: (5) is Iris $\\Rightarrow$ not Diego, which we already have, and it does not bring Fatima in. The opposite verdict would need a different isolation than $\\Rightarrow$, and the stem does not supply one. The arithmetic already on the page is the one that belongs to the wording of the claim. Fatima is banned by Hugo plus (6).

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 27,
    solution_overview: `**Part 1: Setup.**

Five members, six rules:

**Part 2: Relatives.**

$$(1)\\ D\\Rightarrow F,\\qquad (2)\\ G\\lor H,\\qquad (3)\\ F\\Rightarrow\\neg G$$

$$(4)\\ D\\lor H,\\qquad (5)\\ I\\Rightarrow\\neg D,\\qquad (6)\\ H\\Rightarrow\\neg F$$

Chaining Diego in through (1), (3), (2), (6) produces a collision on Fatima.

**Part 3: Solve.**

Rule (6) contraposed is $F\\Rightarrow\\neg H$.`,
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

Suppose Aiden presents. Rule (1) then forces both Bella and Caleb in. Bella in triggers rule (3) (Daisy out) and rule (6) (Ethan out). Rule (2) needs Daisy or Ethan, and both are now out. Contradiction. So Aiden never presents, in every valid scenario. Aiden cannot present without Bella, and Bella's presence leaves rule (2) with nobody to satisfy it,

Suppose Aiden presents. Rule (1) then forces both Bella and Caleb in. Bella in triggers rule (3) (Daisy out) and rule (6) (Ethan out). Rule (2) needs Daisy or Ethan, and both are now out. Contradiction. So Aiden never presents, in every valid scenario. Aiden cannot present without Bella, and Bella's presence leaves rule (2) with nobody to satisfy it.

The extra case is that failed Aiden-in roster. Leaving Aiden optional would have missed the empty (2). After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

so the statement is True.`,
      `**B.** → False

Put Bella on the roster. Rule (3): Bella $\\Rightarrow$ not Daisy, so Daisy is out. Rule (6): Ethan presents only if Bella does not, so Ethan is out. Rule (2) still needs Daisy or Ethan. Both missing: every Bella roster is illegal. Bella cannot present in any valid scenario. The collision is immediate,

Put Bella on the roster. Rule (3): Bella $\\Rightarrow$ not Daisy, so Daisy is out. Rule (6): Ethan presents only if Bella does not, so Ethan is out. Rule (2) still needs Daisy or Ethan. Both missing: every Bella roster is illegal. Bella cannot present in any valid scenario. The collision is immediate.

Sitting Bella with Ethan would have broken (6). The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Sitting Bella with Daisy would have broken (3). The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. There is no third partner who repairs (2).

so the statement is False.`,
      `**C.** → True

Rule (4) is the given sentence: Caleb presents only if Ethan presents, which is Caleb $\\Rightarrow$ Ethan. The claim quotes that implication. There is nothing to derive; "only if" *is* that implication. Both surviving Caleb rosters include Ethan.

Dropping Ethan from a Caleb roster would have broken (4) on the spot. The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered live people after the Bella exclusions are Caleb, Daisy, and Ethan, with (2) and (4) still in force. Whenever Caleb is in, (4) brings Ethan. Daisy may or may not join, but Ethan is not optional on a Caleb roster. Quoting (4) is the whole of this letter. Aiden, Bella, and Faye are already off the table from earlier collisions; they cannot create a Caleb-without-Ethan roster, because (4) does not care who else is missing. "Only if" is the arrow, and the recovered live Caleb files all include Ethan. Quoting rule (4) is enough; no extra intern needs to be placed.

so the statement is True.`,
      `**D.** → False

Rule (5) says Faye $\\Rightarrow$ Aiden. Rule (1) says Aiden $\\Rightarrow$ Bella (and Caleb). Bella is already impossible: she would remove Daisy by rule (3) and Ethan by rule (6), leaving rule (2) with nobody. So Aiden is out, and therefore Faye is out. Faye depends on Aiden, Aiden depends on Bella, and Bella is impossible,

Rule (5) says Faye $\\Rightarrow$ Aiden. Rule (1) says Aiden $\\Rightarrow$ Bella (and Caleb). Bella is already impossible: she would remove Daisy by rule (3) and Ethan by rule (6), leaving rule (2) with nobody. So Aiden is out, and therefore Faye is out. Faye depends on Aiden, Aiden depends on Bella, and Bella is impossible.

Putting Faye in without Aiden would have broken (5). The stem's recovered values are the ones that decide the verdict here. The write-up therefore keeps that isolation in view until the true-or-false sentence. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The extra chain is Faye to Aiden to Bella to empty (2).

so the statement is False.`,
      `**E.** → False

After Bella, Aiden, and Faye are excluded, the live people are Caleb, Daisy, and Ethan, with rule (2) (Daisy or Ethan) and rule (4) (Caleb $\\Rightarrow$ Ethan). Five rosters survive: {Daisy}, {Ethan}, {Daisy, Ethan}, {Caleb, Ethan}, {Caleb, Daisy, Ethan}. Five is already more than one, so uniqueness fails,

After Bella, Aiden, and Faye are excluded, the live people are Caleb, Daisy, and Ethan, with rule (2) (Daisy or Ethan) and rule (4) (Caleb $\\Rightarrow$ Ethan). Five rosters survive: {Daisy}, {Ethan}, {Daisy, Ethan}, {Caleb, Ethan}, {Caleb, Daisy, Ethan}. Five is already more than one, so uniqueness fails.

Seeing "lots of people excluded" and concluding "only one roster left" would have missed that three live people with a mild or-constraint still generate five legal subsets. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. The extra count is those five.

so the statement is False.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 28,
    solution_overview: `**Part 1: Setup.**

Six interns, six rules:

$$(1)\\ A\\Rightarrow(B\\land C),\\qquad (2)\\ D\\lor E,\\qquad (3)\\ B\\Rightarrow\\neg D$$

$$(4)\\ C\\Rightarrow E,\\qquad (5)\\ F\\Rightarrow A,\\qquad (6)\\ E\\Rightarrow\\neg B$$

Bella in would remove Daisy by (3) and Ethan by (6), leaving (2) empty.

**Part 2: Relatives.**

Aiden needs Bella by (1). Faye needs Aiden by (5).

**Part 3: Solve.**

The live people after those exclusions are Caleb, Daisy, and Ethan, with (2) and (4) still in force.`,
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

Suppose Petra does not review. Rule (6): Sana reviews only if Petra reviews, so Sana is out too. Rule (4) needs Petra or Sana, and both are gone. Contradiction. Therefore Petra reviews in every valid assignment. Drop Petra and rule (6) drops Sana with her, leaving rule (4) with nobody at all.

Leaving Petra optional would have missed that double drop. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

The recovered unique assignment is Petra, Sana, and Theo reviewing, with Quinn and Ravi out. Petra's presence is the first switch in that row: without her, Sana cannot cover (4), and (4) has no other covering person. Later switches (Quinn out, Theo in, Ravi out, Sana in) all assume Petra is already in.

What would make Petra optional? A stem that let Sana review without Petra, or that dropped rule (4). Against the given six rules, every valid assignment includes Petra.

The recovered unique triple is Petra, Sana, Theo. Quinn is out by (1) once Petra is in, Theo is in by (3) once Quinn is out, and Ravi is out by (5) once Theo is in, which then forces Sana by (2). That whole cascade starts only after Petra is already seated. This letter stops at that first forced name.

The extra case is the failed Petra-out roster: Sana drops by (6), then (4) has nobody. That collapse is why "every valid assignment" includes Petra, not a count of how many assignments exist. The recovered unique assignment starts with Petra; without her the rules have no covering person for (4). Petra is the first recovered object this letter needs, and that object is forced. Leaving her optional would have been scanning later switches before locking the first one. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict.

so the statement is True.`,
      `**B.** → True

Rule (1) says: if Petra reviews, then Quinn does not. Contrapose it: if Quinn reviews, then Petra does not. That is the claimed sentence. Combined with Petra reviewing in every valid assignment (else (6) and (4) collide), Quinn is excluded as well. Contrapositive of rule (1), so it holds automatically.

Putting Quinn in with Petra would have broken (1) directly. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

The recovered unique assignment already has Quinn out. This letter does not need that uniqueness to justify the contrapose: (1) backwards is enough. Uniqueness only explains why Quinn never appears even as a lone reviewer. The claimed implication is the numbered rule read from Quinn's side. Putting Quinn in would require Petra out, which letter A already showed collides with (6) and (4). Either reading, Quinn cannot review. The claimed implication is still just (1) contraposed, true in the unique recovered assignment and in any assignment that obeys (1). Quinn-in would need Petra-out, which letter A already forbade.

so the statement is True.`,
      `**C.** → False

Petra is forced (else (6) and (4) collide). Then rule (1) drops Quinn. Rule (3): Quinn out $\\Rightarrow$ Theo in. Rule (5): Theo in $\\Rightarrow$ Ravi out. Rule (2) is then carried by Sana, not by Ravi. There is no legal assignment in which Ravi reviews. There is no branch where Ravi sneaks back in once Theo is forced,

Petra is forced (else (6) and (4) collide). Then rule (1) drops Quinn. Rule (3): Quinn out $\\Rightarrow$ Theo in. Rule (5): Theo in $\\Rightarrow$ Ravi out. Rule (2) is then carried by Sana, not by Ravi. There is no legal assignment in which Ravi reviews. There is no branch where Ravi sneaks back in once Theo is forced.

The extra chain is Petra to not-Quinn to Theo to not-Ravi. Sitting Ravi with Theo would have broken (5). That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure.

so the statement is False.`,
      `**D.** → True

Petra is forced. Then: rule (1) excludes Quinn; rule (3) brings Theo; rule (5) excludes Ravi; rule (2), with Ravi out, brings Sana; rule (6) is content because Petra already reviews. The unique assignment is therefore {Petra, Sana, Theo}. Both Theo and Sana review. Theo is brought in by rule (3); Sana is brought in by rule (2),

Petra is forced. Then: rule (1) excludes Quinn; rule (3) brings Theo; rule (5) excludes Ravi; rule (2), with Ravi out, brings Sana; rule (6) is content because Petra already reviews. The unique assignment is therefore {Petra, Sana, Theo}. Both Theo and Sana review. Theo is brought in by rule (3); Sana is brought in by rule (2).

Dropping Sana would have left (2) with Ravi already out. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does. Dropping Theo would have left (3) with Quinn already out. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

so the statement is True.`,
      `**E.** → False

Every status is pinned by a numbered rule once Petra is forced: Quinn out by (1), Theo in by (3), Ravi out by (5), Sana in by (2). No reviewer is left with a free yes/no choice. A second valid assignment would need at least one optional person. There is none, so uniqueness holds and "multiple different valid ways" is false,

Every status is pinned by a numbered rule once Petra is forced: Quinn out by (1), Theo in by (3), Ravi out by (5), Sana in by (2). No reviewer is left with a free yes/no choice. A second valid assignment would need at least one optional person. There is none, so uniqueness holds and "multiple different valid ways" is false.

Thinking Iris-style optional people existed here would have been copying a different puzzle. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. This row of switches has no leftover free bit.

so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 29,
    solution_overview: `**Part 1: Setup.**

Begin with the question the rules answer most sharply: does Petra review?

Suppose she does not. Rule (6) says Sana reviews only if Petra does, so Sana is out too, and rule (4) demanded at least one of Petra and Sana.

**Part 2: Relatives.**

Contradiction, so **Petra reviews in every valid assignment**. From there the rules fall like a row of switches:

• **Rule (1):** Petra in, so Quinn out.

• **Rule (3):** Quinn out, so Theo in.

• **Rule (5):** Theo in, so Ravi out.

• **Rule (2):** Ravi is out, so Sana must carry that rule, Sana in.

• **Rule (6):** Sana needs Petra, who is already in. ✓

**Reviewers: Petra, Sana and Theo.

**Part 3: Solve.**

Not reviewing: Quinn and Ravi.**

Every single status was forced; there was never a moment where two options both survived, so this assignment is the **only** one. In particular Ravi is squeezed out by the chain every time, and Quinn, whom Petra always excludes, never reviews either.`,
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

Without Victor the roster also loses Uma (by (1)) and Bianca (by (7) read backwards). Wendy in and Xavier out leaves at most Wendy, Yara and Zane (size $\\le 3$). Xavier in and Wendy out removes Yara by rule (4), forces Zane by rule (5), and yields only Xavier and Zane (size $2$). Both fall short of four, so Victor must compete,

Without Victor the roster also loses Uma (by (1)) and Bianca (by (7) read backwards). Wendy in and Xavier out leaves at most Wendy, Yara and Zane (size $\\le 3$). Xavier in and Wendy out removes Yara by rule (4), forces Zane by rule (5), and yields only Xavier and Zane (size $2$). Both fall short of four, so Victor must compete.

The extra arithmetic is those two size counts, $3$ and $2$, both below the recovered threshold $4$ from rule (8). Skipping (8) would have left Victor optional. After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

so the statement is True.`,
      `**B.** → False

Victor always competes (else the head count under (8) fails). Rule (2) then always brings Wendy in, and rule (3) permits exactly one of Wendy and Xavier. Xavier is shut out every time. No roster contains him. Rule (3) allows exactly one of Wendy or Xavier, and Wendy is already in,

Victor always competes (else the head count under (8) fails). Rule (2) then always brings Wendy in, and rule (3) permits exactly one of Wendy and Xavier. Xavier is shut out every time. No roster contains him. Rule (3) allows exactly one of Wendy or Xavier, and Wendy is already in.

Sitting Xavier with Wendy would have broken (3). The recovered isolation is the quantity this letter compares with the claim. The write-up therefore keeps that isolation in view until the true-or-false sentence. The letter does not stop at naming the mix; it shows where that mix lands, then returns to the recovered figure. Sitting Xavier without Wendy would have needed Victor out, which (8) forbids. That reading is a different question from the one the statement actually asks. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. That contrast is the reason the verdict goes the way it does.

so the statement is False.`,
      `**C.** → True

Rule (6) says Zane competes only if Bianca does not, that is Zane $\\Rightarrow$ not Bianca. Contrapose it: Bianca $\\Rightarrow$ not Zane. That is the claimed implication. The two never appear together. Among Yara, Zane and Bianca, rule (6) forbids the Zane and Bianca pair.

Sitting them together would have broken (6) on the spot. The discarded mix answers a neighbouring question; this letter stays with the recovered isolation. The write-up therefore keeps that isolation in view until the true-or-false sentence.

The recovered hinge of the puzzle is the four-competitor minimum, which forces Victor in and then a chain of names. This letter does not rerun that hinge. It only reads (6) backwards. Bianca in, Zane out, is the contrapose, and it holds in every roster that (6) governs, including those later forced by the four-person count. Yara can cover rule (5) when Zane is out, so Bianca's presence does not leave (5) empty. The forbidden pair is only Bianca with Zane. Reading (6) backwards is this letter's whole job; the four-person hinge is neighbouring work.

so the statement is True.`,
      `**D.** → False

The forced core is Uma, Victor, Wendy in and Xavier out. Among Yara, Zane and Bianca, rule (5) asks for Yara or Zane and rule (6) forbids Zane with Bianca, leaving four extras: {Yara}, {Zane}, {Yara, Bianca}, {Yara, Zane}. Four legal rosters is already more than one. Only four of the seven have their fate decided,

The forced core is Uma, Victor, Wendy in and Xavier out. Among Yara, Zane and Bianca, rule (5) asks for Yara or Zane and rule (6) forbids Zane with Bianca, leaving four extras: {Yara}, {Zane}, {Yara, Bianca}, {Yara, Zane}. Four legal rosters is already more than one. Only four of the seven have their fate decided.

Seeing a large forced core and concluding uniqueness would have missed those four extras. What the sessions produce, not a later rewrite of those sessions, is what the claim is measured against. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed. The extra count is four, not one.

so the statement is False.`,
      `**E.** → False

With the forced core Uma, Victor, Wendy already in and Xavier already out, a size-$6$ roster would need all three of Yara, Zane and Bianca; rule (5) is fine, but rule (6) blocks the Zane and Bianca pair, so six is unreachable. The surviving extras are only {Yara}, {Zane}, {Yara, Bianca} and {Yara, Zane}, giving sizes $4$ or $5$,

With the forced core Uma, Victor, Wendy already in and Xavier already out, a size-$6$ roster would need all three of Yara, Zane and Bianca; rule (5) is fine, but rule (6) blocks the Zane and Bianca pair, so six is unreachable. The surviving extras are only {Yara}, {Zane}, {Yara, Bianca} and {Yara, Zane}, giving sizes $4$ or $5$.

The extra arithmetic is $3+3=6$ for the attempted full extra, which (6) forbids, versus $3+1$ or $3+2$ for the legal extras. Counting "six people sounds possible" would have skipped (6). After the unknown is isolated, the claim is just that comparison, nothing else. Lining the isolated unknown up with the claim's threshold is the last step, and it is the step that writes the verdict. Walking through that mix and then discarding it is how the recovered comparison is confirmed.

so the statement is False.`,
    ],
    difficulty_level: `5/5`,
    sort_order: 30,
    solution_overview: `**Part 1: Setup.**

Seven finalists, eight rules.

**Part 2: Relatives.**

The hinge is (8): at least four competitors. Write the live constraints:

$$(1)\\ U\\Leftrightarrow V,\\qquad (2)\\ V\\Rightarrow W,\\qquad (3)\\ \\text{exactly one of }W,X$$

$$(4)\\ X\\Rightarrow\\neg Y,\\qquad (5)\\ Y\\lor Z,\\qquad (6)\\ Z\\Rightarrow\\neg B,\\qquad (7)\\ B\\Rightarrow U$$

If Victor is out, (1) removes Uma and (7) removes Bianca, after which (3) cannot reach four people.

**Part 3: Solve.**

Rule (6) contraposed is $B\\Rightarrow\\neg Z$.`,
  },
];
