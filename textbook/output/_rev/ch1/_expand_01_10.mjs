import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "01_10.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const P = {
  "math-1-2": {
    ov: `**Part 1.** The sets.

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
    letters: [
      `**A.** → True

Set equality asks whether two collections have the same members, not whether they were written in the same order or recovered by the same sentence. The overview recovered $A=\\{-3,3\\}$ by testing both roots of $x^2=9$ against the integers. $B$ is given as $\\{3,-3\\}$. Those two rosters name the same pair.

**1.** The integer $3$ squares to $9$, so it sits in $A$. The integer $-3$ also squares to $9$, so it sits in $A$. Nothing else in $Z$ squares to $9$.

**2.** A solver who treated "equals" as "same writing order" would reject $A=B$ because one roster starts at $3$ and the other at $-3$. Sets do not remember order.

**3.** If the universe had been the natural numbers, $-3$ would have been dropped and equality would fail. That is a different universe, not this letter.

The two recovered lists match, so the statement is True.`,

      `**B.** → True

Membership in a set-builder is a test against the defining condition, not a glance at a printed roster. The overview already listed $3$ among the integer solutions of $x^2=9$. This letter only checks that one candidate.

The number $3$ is an integer, so it clears the universe $Z$. Its square is $9$, so it clears the equation. Both halves of the builder succeed, and that is the whole membership test.

The trap is to wait for someone to reprint $A$ as $\\{3,-3\\}$ before daring to say $3\\in A$. The builder never required a roster. A student who confuses this with "the only root is $3$" is answering a different claim.

The recovered set contains $3$, so the statement is True.`,

      `**C.** → False

The claim reprints $A$ as the singleton $\\{3\\}$, "only the positive root." The overview already recovered both integer solutions, $A=\\{-3,3\\}$. Dropping $-3$ is not a rounding of a boundary. It is a member the universe $Z$ never excluded.

**1.** Square-root language in school algebra sometimes keeps only the principal (positive) root. That convention is a function $x\\mapsto\\sqrt{x}$, not a set-builder over $Z$. The builder here is "integers whose square is $9$," and $(-3)^2=9$ still holds.

**2.** The claimed roster $\\{3\\}$ would be correct only if an extra constraint $x>0$ or $x\\in N$ had been written into $A$. Neither appears. Adding an unstated filter is the same off-by-one style of error as deleting a legal member from a difference.

**3.** A solver who wrote $A=\\{3\\}$ and then checked $|A|=1$ would also break the cardinality claim in the next letter. The two mistakes travel together: hide the negative root, then count one object.

What would make the claim true? Change the universe of $A$ to the natural numbers, or add $x\\ge 0$ inside the builder. Against $Z$, both signs survive.

A second, slower trap is to solve $x=\\sqrt{9}$ on a calculator, read $3$, and copy that single output into the roster. Calculators follow the principal-square-root convention. The set-builder does not. It asks which integers satisfy an equation, and the equation is quadratic, so two roots are the default until the universe cuts one of them.

If the stem had said $A=\\{x\\in Z:x^2=9\\text{ and }x>0\\}$, the singleton would be honest. The extra inequality is exactly what is missing. Without it, reprinting $A$ as $\\{3\\}$ is a false figure: the right type of object (a roster of roots) with a member silently deleted.

The recovered $A$ has two members, so the statement is False.`,

      `**D.** → True

Cardinality counts distinct members, not distinct squares and not distinct ways of writing a number. The overview recovered two integer solutions, $-3$ and $3$. Those are two different points on the number line, so $|A|=2$.

A rushed solver might count "one equation, one size" and report $|A|=1$ because both roots square to the same $9$. Distinctness is about the objects in the set, not about the value of $x^2$. Another trap is to treat $-3$ and $3$ as "the same up to sign" and collapse them; sets do not identify a number with its opposite.

If $A$ had been built over $N$, the count would have dropped to $1$. That is a different builder. Here the universe is $Z$, and both roots remain.

The recovered set has two members, so the statement is True.`,

      `**E.** → False

This claim does not re-solve $x^2=9$. The overview already recovered the two integer roots $-3$ and $3$, then re-filtered them against a new universe: the natural numbers $N=\\{1,2,3,\\ldots\\}$. The claim says the surviving set $C$ equals $\\{3,-3\\}$. That would require both roots to live in $N$.

**1.** Membership in a set-builder is two tests, not one. First the equation must hold; second the candidate must sit in the named universe. For $C=\\{x\\in N:x^2=9\\}$, the equation still accepts both $3$ and $-3$, but $N$ is the positive counting numbers. $3$ is a natural number, so it stays. $-3$ is negative, so it fails the universe test even though its square is $9$.

**2.** The recovered set is therefore $C=\\{3\\}$, a singleton. Equality with $\\{3,-3\\}$ would need $-3\\in C$. That membership fails, so the two sets are different: one has two members, the other has one. Cardinality already separates them, $|C|=1$ while $|\\{3,-3\\}|=2$.

**3.** The trap is to treat "square equals $9$" as if the universe did not matter. Squares forget signs, and a solver who stops at the algebra writes both roots and copies them into $C$. The set-builder never gave that licence. Changing $Z$ to $N$ is a genuine extra filter, the same kind of extra filter that would appear if the builder had added $x>0$ by hand.

A different stem could have made the claim true: if $C$ had been built over $Z$, or over all nonzero integers, both roots would survive and equality with $\\{3,-3\\}$ would hold. Against $N$, the negative root is excluded by definition, not by a computational accident.

If someone argued that $-3$ is "the same size" as $3$ and should therefore count as natural, they would be confusing magnitude with membership. Natural-number membership is a one-sided test on the number line: only the positive side (and, in some conventions, zero) is allowed. Either convention still excludes $-3$.

The recovered $C$ is $\\{3\\}$, not $\\{3,-3\\}$, so the statement is False.`,
    ],
  },
  "math-1-3": {
    ov: `**Part 1.** The set.

Here $A=\\{a,b,c\\}$ has three objects.

**Part 2.** The operations.

Two different relations matter:

• $x\\in A$ means $x$ is one of those three objects.

• $S\\subseteq A$ means every object inside $S$ is also one of those three.

The **power set** $\\mathcal P(A)$ is the set of *all* subsets. Each of the three objects can be kept or left out, so there are $2^3=8$ subsets. A **proper** subset must also be unequal to $A$, so $A$ itself is never a proper subset of $A$.

**Part 3.** The scans.

$$\\mathcal P(A)=\\{\\emptyset,\\{a\\},\\{b\\},\\{c\\},\\{a,b\\},\\{a,c\\},\\{b,c\\},A\\}.$$

The two-element subsets are the three pairs $\\{a,b\\}$, $\\{a,c\\}$, $\\{b,c\\}$.`,
    letters: [
      `**A.** → True

The power set is the set of all subsets, not a list of the original letters. The overview already counted $2^3=8$ subsets by treating each of $a$, $b$, and $c$ as an independent keep-or-drop choice. This letter only reads that count.

Each letter is in or out, and the choices multiply, so eight subsets appear: the empty set, three singletons, three pairs, and $A$ itself. That matches the recovered roster of $\\mathcal P(A)$.

The trap is to count only the nonempty subsets and report $7$, or to count only the letters of $A$ and report $3$. Neither is the power set. Another slip is $3^2=9$, mixing the exponent.

The recovered power set has eight members, so the statement is True.`,

      `**B.** → False

Membership and subsethood are different questions, even when they mention the same letters. The overview listed the elements of $A$ as the three letters $a$, $b$, and $c$. The object $\\{a,b\\}$ is a set of letters, not a letter, so it does not sit on that roster.

**1.** The test $\\{a,b\\}\\in A$ asks whether one of the three written objects is the set $\\{a,b\\}$. None is. The letters $a$ and $b$ are elements; the pair of them is a different type of object.

**2.** The neighbouring test $\\{a,b\\}\\subseteq A$ is true, because both members of the pair sit in $A$. A solver who runs the subset test and then writes $\\in$ has swapped the two relations. That swap is the whole trap.

**3.** The pair $\\{a,b\\}$ does belong to the power set: the overview placed it in $\\mathcal P(A)$. Membership in $\\mathcal P(A)$ is not membership in $A$. Confusing those two "is an element of" claims is how the false verdict gets written.

A set can have other sets as elements, but only when those nested sets are written on the roster. Here $A$ is three letters and nothing nested. So $\\{a,b\\}$ is a subset of $A$ and an element of $\\mathcal P(A)$ and still not an element of $A$. Those three verdicts look similar in print and they are not interchangeable.

What would make the claim true? $A$ would have to list $\\{a,b\\}$ as one of its objects, for instance $A=\\{a,b,c,\\{a,b\\}\\}$. Then $\\{a,b\\}\\in A$ would hold, and $\\{a,b\\}\\subseteq A$ would still hold as well. The given $A$ has no such nested object.

A rushed solver often checks that $a$ and $b$ "have something to do with $A$" and writes $\\in$. The symbol $\\in$ does not mean "related." It means "is one of the three written objects." Neither object is the pair.

The recovered elements of $A$ are three letters, so the statement is False.`,

      `**C.** → True

Subsethood asks whether every member of the left-hand set sits in $A$. The empty set has no member at all, so there is no witness that could sit outside $A$. The inclusion $\\emptyset\\subseteq A$ cannot fail.

The overview placed $\\emptyset$ in $\\mathcal P(A)$, which is the same fact written as membership in the power set. This letter is the subset reading of that fact.

The trap is to demand a "reason" the empty set should count, or to confuse $\\emptyset\\subseteq A$ with $\\emptyset\\in A$. The empty set is not one of the letters $a$, $b$, $c$, so it is not an element of $A$, but it is still a subset.

Vacuous inclusion is a convention with a purpose: it keeps the power set closed and keeps $2^n$ counting honest. Dropping $\\emptyset$ would break both.

The empty set is a subset of $A$, so the statement is True.`,

      `**D.** → False

Proper inclusion is ordinary inclusion plus a genuine difference of sets. $A\\subseteq A$ always holds, because every member of $A$ sits in $A$. The extra demand $A\\ne A$ is impossible: both sides are the same three-letter list.

**1.** The recovered power set contains $A$ itself as a member, which records $A\\subseteq A$. Proper subsethood would require that member to be unequal to $A$, which it is not.

**2.** The trap is to read "subset" and "proper subset" as synonyms. Many writers use $\\subset$ for one or the other without warning. Here the claim says proper, so inequality is required, and it fails.

**3.** What would make the claim true? Nothing, for this $A$ against itself. Proper self-inclusion never holds for any set. A different pair, such as $\\{a,b\\}$ against $A$, is a proper subset, but that is not the claim.

A solver who counted "subsets of $A$ that look like $A$" and found one has found $A$ itself, which is a subset and not a proper subset.

The inequality half cannot hold, so the statement is False.`,

      `**E.** → True

A two-element subset of a three-element set is specified by which one letter is omitted. The overview already listed the three pairs $\\{a,b\\}$, $\\{a,c\\}$, and $\\{b,c\\}$. That is exactly three subsets of size $2$.

The same count is the binomial coefficient $\\binom{3}{2}=3$. Choosing two letters to keep is the same as choosing one letter to drop.

The trap is $\\binom{3}{2}=6$, doubling by order, as if the subsets were ordered pairs. Sets do not remember order, so $\\{a,b\\}$ and $\\{b,a\\}$ are one subset. Another slip is to count the three singletons instead.

The recovered list has three two-element subsets, so the statement is True.`,
    ],
  },
  "math-1-4": {
    ov: `**Part 1.** The set.

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
    letters: [
      `**A.** → True

Subsethood asks whether every member of the left-hand set sits in $D$. The empty set has no member that could fail that test, so $\\emptyset\\subseteq D$. The overview already marked that row "yes" in the subset column.

This is not a claim that the empty set is written on $D$'s roster. It is a claim about inclusion. Vacuous inclusion is what lets the power set contain $\\emptyset$ and what lets $2^3=8$ stay honest.

The trap is to refuse the empty set because it "does not look like a subset of letters." Looking like a letter is a membership test, not a subset test.

The recovered table records $\\emptyset\\subseteq D$, so the statement is True.`,

      `**B.** → False

Membership reads the written roster: $a$, $b$, $c$. None of those letters is the empty set, so $\\emptyset\\notin D$. The overview already marked that row "no" in the element column.

**1.** The symbol $\\in$ does not mean "related somehow to $D$." It means "is one of the objects listed." The empty set is a set with no letters in it, not a letter.

**2.** The neighbouring fact $\\emptyset\\subseteq D$ is true, and that is the trap. A solver who just ran letter A and then copied $\\in$ in place of $\\subseteq$ writes a false membership from a true inclusion.

**3.** What would make the claim true? $D$ would have to list $\\emptyset$ as an element, for instance $D=\\{a,b,c,\\emptyset\\}$. The given $D$ does not. Nested sets are allowed in general, but they must be written to count.

The recovered roster has three letters and no empty set, so the statement is False.`,

      `**C.** → True

Three independent include-or-exclude choices give $2^3=8$ subsets of $D$. The overview already listed all eight: empty set, three singletons, three pairs, and $D$ itself. That count includes $\\emptyset$ and $D$, which some students try to drop.

The trap is to report $7$ by excluding the empty set, or $6$ by excluding both $\\emptyset$ and $D$, or $3$ by counting only the letters. The power-set count is not the element count.

Another slip is $3^2=9$. The exponent is the size of $D$, and the base is $2$ because each element has two choices.

The recovered power set has eight members, so the statement is True.`,

      `**D.** → False

The claim is a conjunction: both $\\{a\\}\\subseteq D$ and $\\{a\\}\\in D$. A conjunction dies as soon as one half dies.

**1.** The subset half holds. The only member of $\\{a\\}$ is the letter $a$, and $a$ sits in $D$. The overview marked $\\{a\\}$ as a subset.

**2.** The membership half fails. The roster of $D$ is three letters, not a singleton set. The object $\\{a\\}$ is a set containing $a$, not the letter $a$ itself. The overview marked $\\{a\\}$ as not an element.

**3.** The trap is to treat the two symbols as interchangeable once the letter $a$ is involved. They are not. Another trap is to think "both" can be true if the nicer half is true. Logic does not average the two tests.

What would make both halves true? $D$ would need to contain the letter $a$ (so $\\{a\\}\\subseteq D$) and also contain the object $\\{a\\}$ as an element. The given three-letter $D$ has only the first.

A set can contain both an object and a singleton of that object, but only if both are written. Here $D$ contains $a$ and does not contain $\\{a\\}$. The two tests therefore split: subset yes, membership no. "Both" would need them to agree on true.

The false figure in a student's notes is often a single checkmark next to $\\{a\\}$, with no record of which symbol was tested. Re-reading the claim as two separate sentences, "$\\{a\\}\\subseteq D$" and "$\\{a\\}\\in D$", makes the split visible. The first sentence matches the overview table. The second contradicts it.

One true half and one false half make the conjunction false, so the statement is False.`,

      `**E.** → True

Every member of $D$ is, by construction, a member of $D$, so $D\\subseteq D$. That is ordinary inclusion, not proper self-inclusion. The overview marked $D$ itself as a subset and placed $D$ in the power set.

The trap is to think a set cannot be a subset of itself, borrowing the "proper" reading. The claim does not say proper. Reflexivity of $\\subseteq$ is what puts $D$ into $\\mathcal P(D)$.

If the claim had been $D\\subsetneq D$, it would fail for the same reason letter D failed in the three-letter power-set task: inequality with oneself is impossible.

The recovered table records $D\\subseteq D$, so the statement is True.`,
    ],
  },
  "math-1-5": {
    ov: `**Part 1.** The sets.

Picture the two lists side by side. $E=\\{1,3,5,7\\}$ and $F=\\{3,4,5,6\\}$.

**Part 2.** The operations.

Difference $X\\setminus Y$ keeps members of $X$ that miss $Y$. Union of the two leftover piles is the numbers that sit in exactly one of the two sets. Intersection of those leftover piles is empty: a number cannot be both "outside $F$" and "inside $F$" at once.

**Part 3.** The scans.

| | in $E$ | not in $E$ |
| --- | --- | --- |
| **in $F$** | $\\{3,5\\}$ (overlap) | $\\{4,6\\}$ |
| **not in $F$** | $\\{1,7\\}$ | outside both |

So $E\\setminus F=\\{1,7\\}$ (left column, bottom row) and $F\\setminus E=\\{4,6\\}$ (right column, top row). Their **union** is the two leftover piles together, $\\{1,4,6,7\\}$. Their **intersection** is empty.`,
    letters: [
      `**A.** → True

Difference deletes a member of $E$ only when that member also sits in $F$. The overview already placed $1$ and $7$ in the $E$-only cell, so $E\\setminus F=\\{1,7\\}$. This letter reads that cell, not a new scan.

The shared $3$ and $5$ leave because they sit in $F$. Nearness of $7$ to $F$'s $6$ is not membership, so $7$ stays. The claimed roster matches the recovered leftover.

The trap is to drop $7$ as well, treating difference as "delete anything near the other list," or to keep $3$ because it "started in $E$." Difference is a membership test against $F$, not a proximity test.

The recovered difference is $\\{1,7\\}$, so the statement is True.`,

      `**B.** → True

The opposite leftover is members of $F$ missing from $E$. The overview already placed $4$ and $6$ in the $F$-only cell, so $F\\setminus E=\\{4,6\\}$.

Shared $3$ and $5$ leave $F$ because they sit in $E$. The private $4$ and $6$ stay. That is the claimed set.

The trap is to copy $E\\setminus F$ and write $\\{1,7\\}$ again, as if difference were commutative. It is not: the leftover lives inside the set named on the left.

The recovered opposite leftover is $\\{4,6\\}$, so the statement is True.`,

      `**C.** → False

The two leftover piles are the recovered $\\{1,7\\}$ and $\\{4,6\\}$. Already $1$ sits in the first and misses the second, so the sets cannot be equal.

**1.** Difference is not commutative. $X\\setminus Y$ lives in $X$, while $Y\\setminus X$ lives in $Y$. Unless the two sets happen to be equal, the leftovers are different collections.

**2.** Both leftovers have two members, so size does not separate them. Membership does: $1\\in E\\setminus F$ and $1\\notin F\\setminus E$. One witness kills equality.

**3.** The trap is to think "both are what is left after removing the overlap, so they must match." Removing the overlap from $E$ leaves $E$'s private numbers; removing it from $F$ leaves $F$'s private numbers. Those private lists are $\\{1,7\\}$ and $\\{4,6\\}$, not the same.

What would make the claim true? $E$ and $F$ would need the same private numbers, which forces $E=F$. The given lists are not equal.

The two recovered leftovers differ, so the statement is False.`,

      `**D.** → True

Join the two leftover piles. The overview already assembled that union as $\\{1,4,6,7\\}$. Union of the outer cells never picks up the overlap $\\{3,5\\}$, because those numbers were deleted from both differences.

This combined leftover is the symmetric difference of $E$ and $F$: numbers that sit in exactly one of the two sets. The claimed roster is exactly that recovered four-element list.

The trap is to add $3$ or $5$ back in, writing the full union $E\\cup F$ by mistake, or to drop one of $4$ or $6$ in an off-by-one.

The recovered union of leftovers is $\\{1,4,6,7\\}$, so the statement is True.`,

      `**E.** → True

A number in both differences would have to be outside $F$ (to sit in $E\\setminus F$) and inside $F$ (to sit in $F\\setminus E$). That pair of demands is impossible, so the intersection of the leftovers is empty. The overview already recorded that empty cell.

This is not a fact about these particular numbers $1,3,4,5,6,7$. It is an identity: $(X\\setminus Y)\\cap(Y\\setminus X)=\\emptyset$ for any sets $X$ and $Y$. The two leftover piles are disjoint by construction.

The trap is to think that because both leftovers are nonempty, they must overlap. Nonempty does not mean overlapping. Another trap is to intersect $E$ with $F$ and report $\\{3,5\\}$, answering a different question.

The recovered intersection of leftovers is empty, so the statement is True.`,
    ],
  },
  "math-1-6": {
    ov: `**Part 1.** The sets.

The lists are $A=\\{2,4,6,8,10\\}$, $B=\\{3,6,9,12\\}$, $C=\\{1,2,3,4,5\\}$.

**Part 2.** The operations.

Intersection keeps numbers tagged in both inputs. Union keeps every tagged number once. Difference $X\\setminus Y$ keeps members of $X$ that miss $Y$.

**Part 3.** The scans.

**Shared with $B$:** scan $A$'s members against $B$: $2,4,8,10$ miss $B$; only $6$ sits in both, so $A\\cap B=\\{6\\}$.

**Union $A\\cup B$:** start from $A$'s five numbers and add $B$'s new ones $3,9,12$ ($6$ already listed), giving $\\{2,3,4,6,8,9,10,12\\}$, eight numbers ($6$ once).

**$C$ minus $A$:** scan $\\{1,2,3,4,5\\}$: drop $2$ and $4$ (both in $A$), keep $1$, $3$, and $5$, leaving $\\{1,3,5\\}$.

**$B$ minus $C$:** scan $\\{3,6,9,12\\}$: drop $3$ (the only member also in $C$), keep $6,9,12$.

**$A$ with $C$:** scan $A$ against $C$: $2$ and $4$ sit in $C$; $6,8,10$ do not ($C$ stops at $5$), so $A\\cap C=\\{2,4\\}$.`,
    letters: [
      `**A.** → True

Intersection is the stricter combine: a number has to clear both lists. The overview already scanned $A$ against $B$ and left the singleton $\\{6\\}$. This letter reads that overlap.

The even numbers $2,4,8,10$ miss $B$, and $B$'s $3,9,12$ miss $A$. Only $6$ sits in both. The claimed roster is that singleton.

The trap is to run a union and keep extras, or to include $4$ because it is even and "near" $6$. Nearness is not membership in $B$.

The recovered intersection is $\\{6\\}$, so the statement is True.`,

      `**B.** → True

Union size is not $|A|$ plus $|B|$ with the overlap counted twice. The overview already assembled eight distinct members in $A\\cup B$. The shared $6$ is one object, not two.

Inclusion-exclusion records the same count: five from $A$, four from $B$, minus the one shared, leaving eight. The claim names that recovered size.

The trap is to add $5+4=9$ and forget to subtract the overlap, or to report $7$ by dropping $6$ entirely. Union keeps the overlap once.

The recovered union has eight elements, so the statement is True.`,

      `**C.** → False

Difference $C\\setminus A$ deletes a member of $C$ only when that member also sits in $A$. The overview already recovered $C\\setminus A=\\{1,3,5\\}$. The claimed $\\{1,3\\}$ quietly deletes $5$, even though $5\\notin A$.

**1.** Scan $C=\\{1,2,3,4,5\\}$ against $A$. The numbers $2$ and $4$ sit in $A$, so they leave. The numbers $1$, $3$, and $5$ miss $A$, so they stay. Nothing in the difference rule licenses deleting $5$.

**2.** The dropped $5$ is not a rounding of a boundary. It is a member of $C$ that fails to meet $A$. Nearness to $A$'s $4$ or $6$ is not membership. This is the same off-by-one that broke a union by dropping a legal endpoint, now on a difference.

**3.** A solver who confused difference with intersection would have kept only $\\{2,4\\}$. A solver who confused it with $A\\setminus C$ would have kept $\\{6,8,10\\}$. Neither is this claim. This claim is $C$ minus $A$ with $5$ wrongly deleted.

What would make $\\{1,3\\}$ correct? $5$ would have to sit in $A$. It does not: $A$ is the even numbers from $2$ to $10$.

The recovered difference is $\\{1,3,5\\}$, so the statement is False.`,

      `**D.** → False

$B\\setminus C$ is not a copy of $B$. The overview already scanned $\\{3,6,9,12\\}$ against $C$ and left $\\{6,9,12\\}$. The claimed roster copies all of $B$ and ignores the witness $3$.

**1.** Difference deletes a member of $B$ when that member also sits in $C$. Here $3\\in C$, so $3$ must leave. The other three members of $B$ miss $C$: $6$, $9$, and $12$ all sit past $C$'s last number $5$, except $6$ which is larger than $5$ anyway. They stay.

**2.** The trap is to glance at $B$ and $C$, notice that most of $B$ looks "outside" $C$, and copy the whole of $B$. One shared number is enough to make $B\\setminus C$ strictly smaller than $B$. Another trap is to delete $6$ because it is even, mixing this letter with the $A\\cap C$ scan.

**3.** What would make the claimed copy of $B$ correct? $B$ and $C$ would have to be disjoint. They are not: they share $3$.

The recovered difference is $\\{6,9,12\\}$, so the statement is False.`,

      `**E.** → False

Intersection $A\\cap C$ keeps numbers that sit in both. The overview already scanned $A$ against $C$ and left $\\{2,4\\}$. The extra $6$ in the claim is in $A$ but not in $C$.

**1.** $C$ is $\\{1,2,3,4,5\\}$. It stops at $5$. The even number $6$ sits in $A$ and misses $C$, so it cannot survive an intersection with $C$. The numbers $2$ and $4$ sit in both.

**2.** The trap is to intersect $A$ with $B$ instead and copy the $6$ from $A\\cap B=\\{6\\}$, or to treat "$C$ is the small numbers" as if $6$ were close enough. Close is not membership. Another trap is to run a union and keep $6,8,10$.

**3.** What would make $\\{2,4,6\\}$ correct? $6$ would have to sit in $C$. Extending $C$ through $6$ would do it. The given $C$ does not.

The recovered overlap is $\\{2,4\\}$, so the statement is False.`,
    ],
  },
  "math-1-7": {
    ov: `**Part 1.** The sets.

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
    letters: [
      `**A.** → True

Adding the two headlines $30$ and $25$ counts the $12$ shared students twice. Inclusion-exclusion subtracts that overlap once. The overview already recovered $|M\\cup E|=43$. The claim names that union size.

The trap is to add $30+25=55$ and forget the subtraction, overshooting the cohort of $50$, or to subtract the overlap twice and underfill. Union keeps the overlap once.

The recovered union has $43$ students, so the statement is True.`,

      `**B.** → True

"Neither" is whoever sits outside the union. The overview already filled that region: cohort $50$ minus union $43$ leaves $7$. This letter reads that leftover, not a new inclusion-exclusion.

Those $7$ students take neither Mathematics nor Economics. They are not the only-Mathematics $18$ and not the only-Economics $13$. "Neither" is the outside of both circles.

The trap is to report $50-30-25= -5$ by subtracting both headlines without restoring the overlap, or to report $50-12=38$ by subtracting only the intersection. Neither of those is the complement of the union.

The recovered neither-region has $7$ students, so the statement is True.`,

      `**C.** → True

Only-Mathematics is the Mathematics headline minus the overlap. The overview already recovered that region as $18$. Those $18$ sit in $M$ and not in $E$.

This is $|M\\setminus E|$, not $|M|$. Copying $30$ would count the $12$ who also take Economics. The claim correctly names the $18$.

The trap is $30-12=18$ computed as $30+12=42$, adding instead of subtracting, or swapping with only-Economics $13$.

The recovered only-Mathematics region has $18$ students, so the statement is True.`,

      `**D.** → False

$E\\subseteq M$ would need every Economics student to sit in Mathematics, which is the same as the only-Economics region being empty. The overview already recovered that region as $13$. Those $13$ students are in $E$ and not in $M$, so the inclusion fails.

**1.** Subsethood of finite sets can be read off sizes when the intersection is known: $E\\subseteq M$ would force $|E\\cap M|=|E|$, hence $12=25$, which is false. The $13$ leftover is that gap.

**2.** The trap is to see $12$ shared students and think "Economics sits inside Mathematics because they overlap." Overlap is not containment. Containment would require the entire Economics circle to lie inside Mathematics.

**3.** What would make the claim true? The only-Economics count would have to be $0$, which would need $|E|=12$. The stem gives $|E|=25$.

The recovered only-Economics region is nonempty, so the statement is False.`,

      `**E.** → False

Disjointness means empty intersection. The stem already states $|M\\cap E|=12$, and the overview recorded those $12$ in the both-region. Twelve shared students are twelve too many.

The trap is to glance at $30$ and $25$ inside a cohort of $50$ and think the circles "might miss" because $30+25=55$ overshoots $50$. Overshooting is evidence of overlap, not of disjointness. Another trap is to confuse disjoint with "not equal."

What would make the claim true? The overlap would have to be $0$. The stem says it is $12$.

The recovered overlap is nonempty, so the statement is False.`,
    ],
  },
  "math-1-8": {
    ov: `**Part 1.** The sets.

The three blocks sit in separate thirds of $U=\\{1,\\ldots,9\\}$:

$$A=\\{1,2,3\\},\\quad B=\\{4,5,6\\},\\quad C=\\{7,8,9\\}.$$

**Part 2.** The operations.

Pairwise disjointness means every pair of blocks shares nothing. A **partition** of $U$ needs nonempty blocks, pairwise disjointness, and union equal to $U$. Difference $A\\setminus B$ keeps members of $A$ that miss $B$. An empty intersection never forces either set to be empty.

**Part 3.** The scans.

**Pairwise check.** Every pair of blocks uses different numbers, so $A\\cap B=A\\cap C=B\\cap C=\\emptyset$. The triple intersection is then empty too.

**Coverage.** $A\\cup B\\cup C=\\{1,\\ldots,9\\}=U$, and each block is nonempty.

**What disjointness does not say.** $A\\setminus B=A$ because nothing is shared, and both $A$ and $B$ have three elements.`,
    letters: [
      `**A.** → True

Pairwise disjointness asks every pair, not just the triple overlap. The overview already scanned each pair and found empty intersections: $A$ never meets $B$ or $C$, and $B$ never meets $C$. The three blocks occupy separate thirds of $U$.

The trap is to check only $A\\cap B\\cap C$ and call that "pairwise." A triple overlap can be empty while two of the sets still share a member. Here the stronger pairwise check also holds.

The recovered pairwise intersections are all empty, so the statement is True.`,

      `**B.** → True

A partition needs nonempty blocks, pairwise disjointness, and union $U$. The overview already recorded all three: each block has three numbers, no pair shares a number, and $A\\cup B\\cup C=U$. So $\\{A,B,C\\}$ partitions $U$.

The trap is to think a partition must use singletons, or must use equally sized blocks. The definition never requires that. Another trap is to forget nonemptiness; here none of the blocks is empty.

The recovered coverage and disjointness both hold, so the statement is True.`,

      `**C.** → True

The triple intersection sits inside every pairwise one. Once $A\\cap B=\\emptyset$, intersecting further with $C$ cannot create a member, so $A\\cap B\\cap C=\\emptyset$. The overview already noted that the triple intersection is empty.

This is weaker than pairwise disjointness, and it follows from it. The claim does not say pairwise; it names the triple. The recovered empty triple overlap matches.

The trap is to think three nonempty sets cannot have empty triple overlap. They can, and here they do, because they miss each other in pairs.

The recovered triple intersection is empty, so the statement is True.`,

      `**D.** → False

Empty intersection is not empty difference. Because $A$ and $B$ share nothing, subtracting $B$ deletes nobody from $A$. The overview already recovered $A\\setminus B=A=\\{1,2,3\\}$, which is not empty.

**1.** Difference $A\\setminus B$ asks which members of $A$ miss $B$. All three of $1,2,3$ miss $B$, so all three stay. The empty set would appear only if every member of $A$ sat in $B$, i.e. if $A\\subseteq B$. Disjoint nonempty sets are the opposite of that.

**2.** The trap is to treat "no overlap" as "nothing left." That slogan is true of $A\\cap B$, not of $A\\setminus B$. Intersection empty means the overlap pile is empty. Difference empty means the left-hand pile is gone.

**3.** What would make $A\\setminus B=\\emptyset$? We would need $A\\subseteq B$. Combined with the recovered $A\\cap B=\\emptyset$, that would force $A=\\emptyset$. But $A$ has three members.

The recovered difference is $\\{1,2,3\\}$, so the statement is False.`,

      `**E.** → False

The leap "empty intersection, so one factor is empty" is the product-zero habit from arithmetic, not a set identity. The overview already recorded that both $A$ and $B$ have three members and still miss each other.

**1.** In numbers, $xy=0$ forces $x=0$ or $y=0$. In sets, $X\\cap Y=\\emptyset$ only forces that $X$ and $Y$ share no member. Both can be large. Here each has three numbers from different thirds of $U$.

**2.** The trap is to import the zero-product rule because the empty set is written $\\emptyset$ and "feels like zero." Intersection is not multiplication. Two nonempty disjoint blocks are the standard picture of a partition, not a contradiction.

**3.** What would make the claim true? It is false as a general rule. A special case where it holds is if one of $A$ or $B$ is already empty, but that is an extra assumption, not a consequence of disjointness.

Disjointness bans shared members; it does not erase the sets. The recovered $A$ and $B$ are both nonempty, so the statement is False.`,
    ],
  },
  "math-1-9": {
    ov: `**Part 1.** The sets.

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
    letters: [
      `**A.** → True

Complement is a scan of $U$, not of $X$ rewritten backwards. The overview already dropped $1$ through $6$ from $\\{1,\\ldots,12\\}$ and left $X^c=\\{7,8,9,10,11,12\\}$. The claim names that recovered list.

People $7,8,9$ know SQL but not Python, so they still sit in $X^c$. Complement of Python is "does not know Python," not "knows nothing."

The trap is to drop $7,8,9$ as well because they sit in $Y$, writing the neither-region by mistake. Another trap is to reverse $X$ as $\\{6,5,4,3,2,1\\}$ and call that a complement.

The recovered complement is $\\{7,8,9,10,11,12\\}$, so the statement is True.`,

      `**B.** → True

Union $X\\cup Y$ covers $1$ through $9$. Complement inside a $12$-person $U$ can only be the three people who miss both skills. The overview already recovered $(X\\cup Y)^c=\\{10,11,12\\}$.

Those three know neither Python nor SQL. Everyone from $1$ to $9$ has at least one of the two skills, so they cannot sit in the complement of the union.

The trap is to keep $8$ or $9$ because they sit at the high end of $Y$, or to include $7,8,9$ from $X^c$ without intersecting with $Y^c$. Complement of a union is the neither-region, not a single complement.

The recovered outside of the union is $\\{10,11,12\\}$, so the statement is True.`,

      `**C.** → True

De Morgan identifies $(X\\cup Y)^c$ with $X^c\\cap Y^c$. Members of both complements are people who know neither Python nor SQL. The overview already listed $X^c=\\{7,8,9,10,11,12\\}$ and $Y^c=\\{1,2,3,10,11,12\\}$; their overlap is $\\{10,11,12\\}$.

People $7,8,9$ sit in $X^c$ but miss $Y^c$ because they know SQL. People $1,2,3$ sit in $Y^c$ but miss $X^c$ because they know Python. Only $10,11,12$ survive both filters.

The trap is to union the complements instead of intersecting them, which would keep $1,2,3,7,8,9$ as well. That larger list is $(X\\cap Y)^c$, a different De Morgan identity.

The recovered double-complement intersection is $\\{10,11,12\\}$, so the statement is True.`,

      `**D.** → True

The second De Morgan identity says escaping an intersection takes only escaping one of the two sets: $(X\\cap Y)^c=X^c\\cup Y^c$. Both sides name the people missing Python or missing SQL (or both).

The overview recovered $(X\\cap Y)^c=\\{1,2,3,7,8,9,10,11,12\\}$ by removing the overlap $\\{4,5,6\\}$ from $U$, and the same list is the union of the two complements. The identity holds on these lists.

This letter is not a new scan. It is the observation that the two recovered lists match. The trap is to swap union and intersection on the right-hand side and write $X^c\\cap Y^c$, which is only $\\{10,11,12\\}$.

The two recovered sides agree, so the statement is True.`,

      `**E.** → False

The union of complements must keep every member of each complement. The overview already listed $X^c=\\{7,8,9,10,11,12\\}$ and $Y^c=\\{1,2,3,10,11,12\\}$. Joining them keeps $7,8,9$ from $X^c$ as well, giving $\\{1,2,3,7,8,9,10,11,12\\}$.

**1.** The claimed list $\\{1,2,3,10,11,12\\}$ is $Y^c$ alone. It undercounts by dropping $7,8,9$, who do not know Python and therefore belong in $X^c$ and in the union of complements.

**2.** Those three people know SQL, so they sit in $Y$, but union of complements is not "outside both." It is "outside at least one." Missing Python is enough. De Morgan names this list as $(X\\cap Y)^c$, everyone except the triple $\\{4,5,6\\}$.

**3.** The trap is to copy $Y^c$ after a glance at the low end of $U$, or to confuse this union with the neither-region $\\{10,11,12\\}$. Another trap is to think $7,8,9$ "already have a skill" and should be deleted from a complement-union; that deletion would be an intersection of complements.

What would make the claimed six-person list correct? It would have to be $Y^c$, or $X^c\\cap Y^c$ if one also dropped $1,2,3$. Neither is $X^c\\cup Y^c$.

The recovered union of complements has nine people, so the statement is False.`,
    ],
  },
  "math-1-10": {
    ov: `**Part 1.** The sets.

Same De Morgan toolkit on $U=\\{1,\\ldots,10\\}$, $A=\\{1,\\ldots,5\\}$, $B=\\{4,\\ldots,8\\}$.

**Part 2.** The operations.

Complement is everyone in $U$ that a set leaves out. De Morgan: $(A\\cup B)^c=A^c\\cap B^c$ and $(A\\cap B)^c=A^c\\cup B^c$. Several false claims pad those lists with numbers that belong on the inside of a set, not the outside.

**Part 3.** The scans.

Build the pieces once:

$$A^c=\\{6,7,8,9,10\\},\\quad B^c=\\{1,2,3,9,10\\},$$

$$A\\cup B=\\{1,\\ldots,8\\}\\Rightarrow(A\\cup B)^c=\\{9,10\\},$$

$$A\\cap B=\\{4,5\\}\\Rightarrow(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

Then $A^c\\cap B^c=\\{9,10\\}$ and $A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}$, matching the two De Morgan identities.`,
    letters: [
      `**A.** → False

Putting $A$ and $B$ together covers $1$ through $8$. The overview already recovered $(A\\cup B)^c=\\{9,10\\}$. The claimed $\\{8,9,10\\}$ illegally keeps $8$, but $8\\in B$ and therefore $8\\in A\\cup B$.

**1.** Complement of a union is the neither-region. The number $8$ sits in $B$, so it sits in the union, so it cannot sit in the complement. Nearness to $9$ is not a licence to keep it.

**2.** This is the same off-by-one that pads a complement with a boundary point the set actually contains. $U$ runs to $10$, and $B$ runs to $8$, so $8$ is an endpoint of $B$, not of the outside.

**3.** What would make $\\{8,9,10\\}$ correct? $B$ would have to stop at $7$, so that $8$ missed the union. The given $B$ includes $8$.

The recovered complement of the union is $\\{9,10\\}$, so the statement is False.`,

      `**B.** → True

The second De Morgan identity says $(A\\cap B)^c=A^c\\cup B^c$. The overview already recovered both sides as $\\{1,2,3,6,7,8,9,10\\}$, by removing the overlap $\\{4,5\\}$ from $U$ and by joining the two complements. The identity holds on these lists.

Escaping an intersection takes only escaping one of the two sets. That is why $1,2,3$ (miss $B$) and $6,7,8$ (miss $A$) both survive, together with $9,10$ (miss both).

The trap is to write $A^c\\cap B^c$ on the right-hand side, which is only $\\{9,10\\}$. Swapping union and intersection is the standard De Morgan slip.

The two recovered sides agree, so the statement is True.`,

      `**C.** → False

$A^c\\cap B^c$ is "outside both," which De Morgan identifies with $(A\\cup B)^c$. The overview already recovered that as $\\{9,10\\}$. The claimed $\\{6,7,8,9,10\\}$ is $A^c$ alone: those extra $6,7,8$ miss $A$ but still sit in $B$.

**1.** Intersection of complements is the stricter filter. A number must miss $A$ and miss $B$. The numbers $6,7,8$ miss $A$ and sit in $B$, so they fail the second filter.

**2.** The trap is to copy $A^c$ and call it the double complement intersection, forgetting to pass through $B^c$. Another trap is to union the complements and keep $1,2,3$ as well, which is the other De Morgan list.

**3.** What would make $\\{6,7,8,9,10\\}$ correct? That list is $A^c$. It would match $A^c\\cap B^c$ only if $6,7,8$ also missed $B$. They do not.

The recovered intersection of complements is $\\{9,10\\}$, so the statement is False.`,

      `**D.** → True

The overlap is $A\\cap B=\\{4,5\\}$. Removing those two from $U=\\{1,\\ldots,10\\}$ leaves $(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}$. The overview already recorded that list. It keeps $A$-only, $B$-only, and neither.

The claimed roster matches. The numbers $4$ and $5$ are the only ones deleted, because they are the only ones in both $A$ and $B$.

The trap is to also delete $6,7,8$ as "near the overlap," or to keep $4$ because it starts $B$. Complement of an intersection is everyone except the overlap.

The recovered complement of the intersection matches the claim, so the statement is True.`,

      `**E.** → False

$A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$. Their union must include every member of $A^c$. The overview already joined them as $\\{1,2,3,6,7,8,9,10\\}$. The claimed $\\{1,2,3,9,10\\}$ is $B^c$ alone, so it drops $6,7,8$.

**1.** Those three numbers miss $A$, so they belong in $A^c$ and therefore in any union that includes $A^c$. They sit in $B$, which is irrelevant for a union of complements: missing one set is enough.

**2.** The trap is the same undercount as in the Python/SQL task: copying one complement and calling it the union of both. Another trap is to report the neither-region $\\{9,10\\}$.

**3.** What would make the five-person list correct? It is $B^c$. Equality with $A^c\\cup B^c$ would need $A^c\\subseteq B^c$, i.e. everyone outside $A$ also outside $B$, which is false of $6,7,8$.

The recovered union of complements has eight numbers, so the statement is False.`,
    ],
  },
};

function wc(s) {
  return s.replace(/\*\*/g, "").split(/\s+/).filter(Boolean).length;
}

function inject(letter, extra) {
  if (!extra) return letter;
  const block = extra + "\n\nso the statement is ";
  if (/so the statement is (True|False)\.\s*$/.test(letter)) {
    return letter.replace(/,?\s*so the statement is (True|False)\.\s*$/, ".\n\n" + extra + "\n\nso the statement is $1.");
  }
  throw new Error("no closer");
}

const EX = {
  "math-1-2": [
    "Reading equality off the recovered pair is the whole job of this letter. The stem never asked for a preferred writing order, and it never asked for a sign convention. It asked whether $A$ and $B$ contain the same integers. They do.",
    "If the claim had named $-3$ instead, the same two tests would succeed: $-3$ is an integer and $(-3)^2=9$. Naming $3$ is not a special privilege of the positive root. It is one of two legal members.",
    "The false figure $\\{3\\}$ is a roster of the right kind with a legal member deleted. Square-root buttons and principal-root slogans are how that deletion gets excused. The builder over $Z$ never wrote those slogans. Until the universe or an extra inequality cuts a sign, both roots stay. Reprinting $A$ without $-3$ is not a convention. It is a smaller set than the one recovered.",
    "The false figure $|A|=1$ is the count you get after silently deleting $-3$. This letter is the count before that deletion. Two names, two places on the line, two members.",
    "A later letter will change the universe to $N$ and then the singleton becomes honest. This letter has not changed the universe. The recovered $A$ is still the two-element set over $Z$.",
  ],
  "math-1-3": [
    "If the stem had asked how many letters $A$ has, the answer would be $3$. If it had asked how many nonempty subsets, the answer would be $7$. The power-set count is neither of those. It is eight, empty set included.",
    "This is the membership-versus-subset split that later letters keep meeting. The pair is a legal subset and a legal member of the power set, and it is still not a letter of $A$. One object, three different questions, only one of which this claim asked, and that one fails.",
    "What would make $\\emptyset\\subseteq A$ fail? A member of $\\emptyset$ that missed $A$. The empty set has no such member, for this $A$ and for every other set. The claim is not special to three letters; it is the empty-set rule applied to this roster.",
    "A student who writes $A\\subsetneq A$ after seeing $A\\subseteq A$ in the power set has added an inequality the recovered list cannot support. The eight subsets include $A$ once, as itself, not as a strictly smaller copy.",
    "If someone listed $\\{a,b\\}$, $\\{b,a\\}$, and $\\{a,c\\}$ as three different pairs and then wondered where the fourth pair went, they have already double-counted. The recovered list has three pairs because order is not a second copy.",
  ],
  "math-1-4": [
    "The same vacuous test is why $\\emptyset$ appears in every power set. Refusing $\\emptyset\\subseteq D$ would punch a hole in the recovered eight-set list. The claim is that inclusion, not a claim that $D$ contains a blank letter.",
    "A student coming from letter A has just accepted $\\emptyset\\subseteq D$ and is tempted to reuse the same sentence with a different symbol. The overview table exists to block that reuse: subset column yes, element column no. Two columns, two answers.",
    "If the stem had asked for the number of letters in $D$, the answer would be $3$. The claim asks for the number of subsets. Those are different counts, and the recovered power set is the longer list.",
    "The word both is doing the damage. One true inclusion does not purchase a false membership. The recovered table already split those two columns for $\\{a\\}$: subset yes, element no. A conjunction with a false half is false, even when the true half is the one a student just finished checking.",
    "Ordinary inclusion is allowed to compare a set with itself. Proper inclusion is not. The claim uses $\\subseteq$, so reflexivity applies, and $D$ stays a subset of $D$.",
  ],
  "math-1-5": [
    "If the claim had named $\\{1,3,7\\}$, it would have kept a shared $3$ that the difference rule deletes. The recovered leftover keeps only the $E$-only cell, and that cell is $\\{1,7\\}$.",
    "This leftover lives inside $F$, so it cannot equal the leftover that lives inside $E$ unless the two private cells happen to match. They do not. The recovered $F$-only cell is $\\{4,6\\}$, a different pair.",
    "Equality of leftovers would be a coincidence of private cells, not a law of difference. Here the private cells are $\\{1,7\\}$ and $\\{4,6\\}$. Naming them as equal is a false figure: two real recovered sets, written as if they were one. Difference is not commutative: the leftover lives inside the set named on the left. $E\\setminus F$ can never pick up $4$ or $6$, because those numbers miss $E$. $F\\setminus E$ can never pick up $1$ or $7$, because those numbers miss $F$. The two recovered leftovers therefore share no member and cannot be equal. What would make them equal? The private cells would have to match, which forces $E=F$. The given lists are not equal. A solver who checks only the sizes, both $2$, and stops there has skipped the membership witness $1$. Size matching is not set equality.",
    "A student who writes $E\\cup F$ for this union has put the overlap back. The recovered four-element list is the outer cells only. The middle cell $\\{3,5\\}$ is absent on purpose.",
    "This emptiness is why symmetric difference can be written as a disjoint union of the two leftovers. The recovered outer cells do not fight over a shared number. There is no shared number left to fight over.",
  ],
  "math-1-6": [
    "If the claim had named $\\{6,8\\}$, it would have kept an $8$ that misses $B$. Intersection has no licence for that. The recovered overlap is the singleton $6$ only.",
    "A student who reports $9$ has added $5+4$ and kept two copies of $6$. The recovered union writes $6$ once, and the size is eight, not nine. The extra copy is not a new even number. It is the overlap counted twice. Inclusion-exclusion subtracts that one shared member. Without the subtraction the count overshoots; with a double subtraction it undershoots. The recovered roster $\\{2,3,4,6,8,9,10,12\\}$ has eight names.",
    "The false figure $\\{1,3\\}$ is one member short of the recovered leftover. That missing $5$ is not optional. It sits in $C$, it misses $A$, and the difference rule keeps it. Reprinting the leftover without $5$ is the same kind of silent deletion as dropping a legal endpoint from a union. Nearness of $5$ to $A$'s $4$ and $6$ is not membership in $A$. $A$ is the even numbers from $2$ to $10$, and $5$ is odd, so $5$ was never a candidate for deletion. A solver who treated difference as 'delete anything near the other list' invented a filter the operation does not have. The recovered $C\\setminus A$ is $\\{1,3,5\\}$, three numbers, not two. What would make $\\{1,3\\}$ honest? $5$ would have to sit in $A$. It does not.",
    "Copying $B$ as the difference is a false figure with an extra $3$. The recovered leftover already deleted $3$ because $3$ sits in $C$. Putting $3$ back pretends $B$ and $C$ share nothing. They share $3$. Difference $B\\setminus C$ is not a licence to reprint $B$. It is a membership test of each member of $B$ against $C$. The witness $3$ fails that test and must leave. The other three members $6,9,12$ miss $C$ (which stops at $5$) and stay. What would make a copy of $B$ honest? $B\\cap C$ would have to be empty. The overview recovered that overlap as $\\{3\\}$. One shared number is enough.",
    "The false figure $\\{2,4,6\\}$ mixes two recovered overlaps: $\\{2,4\\}$ from $A\\cap C$ and $\\{6\\}$ from $A\\cap B$. Those are different second sets. Intersection with $C$ cannot borrow a member from the scan against $B$.",
  ],
  "math-1-7": [
    "A student who writes $55$ has kept two copies of the twelve shared students. The recovered union keeps them once, and $43$ is that cleaned total. It still sits inside the cohort of $50$. Inclusion-exclusion is not optional decoration here. Without the subtraction the count would exceed the room.",
    "Those seven students are not a remainder after subtracting $30$ and then $25$ from $50$. That route goes negative because it forgets that twelve people were in both headlines. The recovered route is cohort minus union: $50$ minus $43$. Neither is the outside of both circles, not a leftover from one headline.",
    "If the claim had named $30$, it would have counted the twelve who also take Economics. Only-Mathematics is the leftover after those twelve are removed from the Mathematics headline. The recovered leftover is $18$. Those eighteen sit in $M$ and miss $E$. That is a different region from the union and from the neither-cell.",
    "Containment would swallow the whole Economics circle. The recovered picture does not: thirteen Economics students sit outside Mathematics. Overlap $12$ is evidence of sharing, not of one set sitting inside the other. The false verdict treats sharing as swallowing. $E\\subseteq M$ is equivalent to $|E\\setminus M|=0$. The overview recovered that only-Economics region as $13$, not $0$. Those thirteen people are a concrete counterexample: they take Economics and they do not take Mathematics. One such person would have been enough. Size comparison of the headlines, $25$ versus $30$, does not decide inclusion either. A smaller set can still stick out of a larger one, and here it does. What would make the inclusion true? The stem would need $|E|=12$, so that every Economics student already sits in the overlap.",
    "Disjointness would wipe the both-region. The stem filled that region with twelve students, and the overview kept the $12$. A cohort of $50$ that can fit $30$ and $25$ only by overlapping is the opposite of a disjoint pair.",
  ],
  "math-1-8": [
    "Pairwise is three checks, not one. The recovered empty pairs $A\\cap B$, $A\\cap C$, and $B\\cap C$ are those three checks. A nonempty pair would have killed the claim even if the triple overlap stayed empty.",
    "The three blocks are a partition because they cut $U$ into pieces with no gaps and no shared numbers. The recovered union is all of $\\{1,\\ldots,9\\}$, and the recovered pairs share nothing. That is the definition, not a bonus property.",
    "Triple emptiness is cheaper than pairwise emptiness. The recovered pairwise scan already paid the higher price, so the cheaper claim comes free. A different triple of sets could have empty triple overlap and still share a pair; these three do not.",
    "The false figure $\\emptyset$ for $A\\setminus B$ is the recovered intersection, copied into the difference slot. Difference and intersection are opposite leftover rules when the sets miss each other: intersection empty means difference equals the left-hand set. Here that left-hand set is $\\{1,2,3\\}$. Empty difference would mean $A\\subseteq B$. Combined with the recovered empty overlap, that would force $A$ empty. But $A$ has three members in the first third of $U$. The slogan 'no overlap, nothing left' mixes two cells of the Venn diagram. No overlap empties the middle cell. Nothing left would empty the left cell. Those cells are not the same. What would make $A\\setminus B=\\emptyset$? $A$ would have to sit inside $B$, which these disjoint blocks refuse.",
    "The zero-product rule is a fact about numbers, not about sets. The recovered $A$ and $B$ are a working counterexample: three members each, overlap empty, neither set gone. Importing $xy=0$ into a Venn diagram is how this false inference gets written. Empty intersection forbids shared members. It does not forbid nonempty factors. The three-block partition of $U$ is built from three nonempty pairwise disjoint pieces, which would be illegal if the leap were a set identity. It is not a set identity. What would make 'one of them is empty' true? An extra assumption that one block is empty, which the stem does not give. Both $A=\\{1,2,3\\}$ and $B=\\{4,5,6\\}$ are sitting in the overview as three-element lists.",
  ],
  "math-1-9": [
    "People $7,8,9$ look like they 'have a skill,' and a rushed complement deletes them. They have SQL, not Python. Complement of $X$ only asks about Python. The recovered $X^c$ keeps them.",
    "The neither-region is three people, not four or five. Padding it with $8$ or $9$ puts SQL knowers outside a union that already contains them. The recovered complement of the union stops at $\\{10,11,12\\}$.",
    "Intersecting the two complements is a second filter on $X^c$. The recovered $X^c$ still contains $7,8,9$; the second filter removes them because they know SQL. What remains is the same neither-region $\\{10,11,12\\}$.",
    "If the two sides had disagreed, De Morgan would have failed on these lists. They do not disagree. Removing $\\{4,5,6\\}$ from the twelve-person $U$ is the same list as joining $X^c$ with $Y^c$.",
    "The false figure $\\{1,2,3,10,11,12\\}$ is $Y^c$ wearing a union label. Union of complements must also keep $7,8,9$ from $X^c$. Those three know SQL and still miss Python, so missing one skill is enough. The recovered nine-person list is everyone except the Python-and-SQL overlap $\\{4,5,6\\}$. A six-person reprint has dropped a whole SQL-only block. De Morgan names this union as $(X\\cap Y)^c$: everyone who misses at least one of the two skills. The claimed six-person list also drops $7,8,9$ as if missing SQL were required, which would be an intersection of complements, the neither-region. So the false figure is not a random undercount. It is the wrong De Morgan side, $Y^c$ or $X^c\\cap Y^c$, sold under a union heading. What would make the six-person list honest? The claim would have to name $Y^c$, not $X^c\\cup Y^c$.",
  ],
  "math-1-10": [
    "The false figure $\\{8,9,10\\}$ pads the neither-region with an endpoint of $B$. Complement of a union is outside both lists, and $8$ is inside $B$. Off-by-one at a closed end is still a membership error. The recovered outside is $\\{9,10\\}$ only. The number $8$ sits in $B=\\{4,5,6,7,8\\}$, so it sits in $A\\cup B$, so it cannot sit in $(A\\cup B)^c$. Nearness to $9$ is not a licence to keep it. This is the same padding error as keeping a boundary point that one of the inputs already claimed. What would make $\\{8,9,10\\}$ honest? $B$ would have to stop at $7$. The given $B$ includes $8$. A solver who complemented $A$ alone and then trimmed to the high end would also land near this false list; that route never asked whether $8$ sits in $B$.",
    "The identity is not a new computation. It is the observation that two recovered lists, the complement of the overlap and the union of the complements, are the same eight numbers. Swapping to an intersection of complements would shrink that list to $\\{9,10\\}$ and break the identity.",
    "Copying $A^c$ into the double-complement slot is a false figure with three extra numbers. Those extras $6,7,8$ fail the 'miss $B$' test. The recovered intersection of complements keeps only $\\{9,10\\}$. Intersection of complements is the stricter filter: miss $A$ and miss $B$. The numbers $6,7,8$ miss $A$ and sit in $B$, so they survive $A^c$ and die in $B^c$. De Morgan identifies $A^c\\cap B^c$ with $(A\\cup B)^c$, already recovered as $\\{9,10\\}$. The claimed five-element list is $A^c$ itself. What would make that list honest? The claim would have to name $A^c$, not $A^c\\cap B^c$. A solver who ran only one complement and stopped has not intersected anything.",
    "If the claim had dropped $8$ as well, it would have over-deleted. The number $8$ misses $A$, so it belongs in $(A\\cap B)^c$. The recovered list keeps $A$-only, $B$-only, and neither, and $8$ is $B$-only.",
    "The false figure $\\{1,2,3,9,10\\}$ is one complement pretending to be two. Union does not get to ignore $A^c$. The recovered join puts $6,7,8$ back, and the list grows to eight numbers. Those three miss $A$, so they belong in $A^c$ and in any union that includes $A^c$. Sitting in $B$ is irrelevant for a union of complements: missing one set is enough. The claimed five-element list is $B^c$ alone. What would make it honest? The claim would have to name $B^c$. Against $A^c\\cup B^c$ it is the same undercount as the Python/SQL false union: one complement sold as two. The recovered eight-number list is also $(A\\cap B)^c$, everyone except $\\{4,5\\}$.",
  ],
};

for (const t of arr) {
  const p = P[t.id];
  if (!p) continue;
  const extras = EX[t.id] || [];
  t.solution_overview = p.ov;
  t.tactical_explanations = p.letters.map((L, i) => inject(L, extras[i] || ""));
  const counts = t.tactical_explanations.map(wc);
  console.log(t.id, counts.join(","), "ovPart", t.solution_overview.includes("**Part 1"));
  for (const L of t.tactical_explanations) {
    if (L.includes("\u2014") || L.includes("${")) throw new Error(t.id + " bad char");
  }
}

fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
console.log("wrote", fp);
