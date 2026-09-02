import path from "node:path";
import { fileURLToPath } from "node:url";
import { applyExpand } from "./_expand_apply.mjs";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "09_18.json");

const P = {
  "math-1-31": {
    ov: `**Part 1.** The sets.

Let $A=\\{10,20,30,40,50\\}$, $B=\\{30,40,50,60\\}$, and $C=\\{1,2,3\\}$.

**Part 2.** The operations.

Intersection keeps numbers tagged in both $A$ and $B$. Union keeps every tagged number once. Difference $A\\setminus B$ keeps the $A$-only numbers; $B\\setminus A$ keeps the $B$-only numbers. Two sets are disjoint when they share nothing.

**Part 3.** The scans.

Shared numbers are $30,40,50$. $A$-only numbers are $10,20$. $B$-only is $60$. Combined list is $\\{10,20,30,40,50,60\\}$. $A$ and $C$ share nothing.`,
    letters: [
      `**A.** → True

A union must contain every member of each input. The overview already assembled $A\\cup B=\\{10,20,30,40,50,60\\}$ by keeping $A$'s five multiples and the newcomer $60$ from $B$. The overlap $30,40,50$ is not written twice.

The claimed roster matches that recovered list. Union is the combined list, not the overlap.

The trap is to drop $60$ because it is the only newcomer, or to write $30,40,50$ twice as if copies counted. Sets do not keep copies.

The recovered union is $\\{10,20,30,40,50,60\\}$, so the statement is True.`,
      `**B.** → True

Intersection keeps only the numbers that clear both lists. The overview already scanned $A$ against $B$ and left $\\{30,40,50\\}$. This letter reads that overlap, not a new scan.

The numbers $10$ and $20$ miss $B$, and $60$ misses $A$. Only the three shared multiples survive.

The trap is to run a union and keep $10,20,60$ as well, or to drop $30$ as a boundary. Intersection has no licence to drop a shared member.

The recovered intersection is $\\{30,40,50\\}$, so the statement is True.`,
      `**C.** → True

Difference $A\\setminus B$ deletes a member of $A$ only when that member also sits in $B$. The overview already placed $10$ and $20$ in the $A$-only cell, so $A\\setminus B=\\{10,20\\}$.

Shared $30,40,50$ leave. Private $10,20$ stay. That is the claimed leftover.

The trap is to keep $30$ because it started in $A$, or to copy $B\\setminus A=\\{60\\}$ by reversing the difference.

The recovered difference is $\\{10,20\\}$, so the statement is True.`,
      `**D.** → False

The opposite leftover is the recovered $B\\setminus A=\\{60\\}$, while $A\\setminus B=\\{10,20\\}$. Already the sizes disagree ($1$ versus $2$), and $10$ sits in the first leftover but not the second.

**1.** Difference is not commutative. $X\\setminus Y$ lives in $X$, while $Y\\setminus X$ lives in $Y$. Unless the two sets are equal, the leftovers are different collections.

**2.** Here $A$ has two private multiples of ten and $B$ has one private $60$. Naming those leftovers as equal is a false figure: two recovered sets written as if they were one.

**3.** A solver who checks only that both leftovers are "what remains after removing the overlap" has described the construction, not the members. The members are $\\{10,20\\}$ and $\\{60\\}$.

What would make the claim true? The private cells would have to match, which forces $A=B$. The given lists are not equal.

The two recovered leftovers differ, so the statement is False.`,
      `**E.** → True

Disjointness means the intersection is empty. Every member of $A$ is at least $10$, while $C$ stops at $3$, so the overview recovered $A\\cap C=\\emptyset$.

There is no shared multiple of ten among $1,2,3$. Nearness of $10$ to $3$ is not membership.

The trap is to think small integers "might overlap" the low end of $A$. $A$ begins at $10$. $C$ never reaches it.

The recovered overlap is empty, so the statement is True.`,
    ],
  },
  "math-1-32": {
    ov: `**Part 1.** The sets.

Three letter lists $A=\\{a,b,c,d\\}$, $B=\\{c,d,e\\}$, and $C=\\{x,y\\}$.

**Part 2.** The operations.

Shared letters give the intersection. The combined list is the union, each letter once. Leftovers after a difference are the private letters. An empty overlap is disjointness.

**Part 3.** The scans.

Lining $A$ up against $B$: $c$ and $d$ appear in both, $a$ and $b$ only in $A$, and $e$ only in $B$. So $A\\cap B=\\{c,d\\}$, $A\\cup B=\\{a,b,c,d,e\\}$, $A\\setminus B=\\{a,b\\}$, and $B\\setminus A=\\{e\\}$. The third set $C=\\{x,y\\}$ shares no letter with $A$, so $A\\cap C=\\emptyset$.`,
    letters: [
      `**A.** → True

Putting $A$ and $B$ together keeps $a,b,c,d$ from $A$ and the newcomer $e$ from $B$. The overview already assembled $A\\cup B=\\{a,b,c,d,e\\}$. The shared $c$ and $d$ are not written twice.

The claimed roster matches. Union is every letter that appears at least once.

The trap is to drop $e$, or to treat $c$ as two copies. Sets keep letters, not copies.

The recovered union is $\\{a,b,c,d,e\\}$, so the statement is True.`,
      `**B.** → True

Shared letters are $c$ and $d$ only. The overview already recovered $A\\cap B=\\{c,d\\}$. Letters $a$ and $b$ miss $B$, and $e$ misses $A$.

The trap is to include $e$ because it sits next to $d$ in $B$, or to run a union. Intersection is the overlap cell only.

The recovered intersection is $\\{c,d\\}$, so the statement is True.`,
      `**C.** → True

$A\\setminus B$ keeps $A$'s private letters. The overview already placed $a$ and $b$ in that cell, so $A\\setminus B=\\{a,b\\}$. Letters $c$ and $d$ sit in $B$, so they leave.

The trap is to keep $c$ because it started in $A$, or to copy $B\\setminus A=\\{e\\}$.

The recovered difference is $\\{a,b\\}$, so the statement is True.`,
      `**D.** → False

$B\\setminus A=\\{e\\}$, a singleton, while $A\\setminus B=\\{a,b\\}$. Different sizes already forbid equality, and $a$ sits in one leftover but not the other.

**1.** Difference lives inside the left-hand set. The leftover of $B$ can only be letters of $B$ that miss $A$, here just $e$. The leftover of $A$ is $a,b$.

**2.** Naming $\\{e\\}$ equal to $\\{a,b\\}$ is a false figure. The recovered private cells are different letters and different sizes.

**3.** The trap is the slogan "both are what remains after the overlap," which describes the construction and not the members.

What would make them equal? $A$ and $B$ would need the same private letters, hence $A=B$. They are not equal.

The two recovered leftovers differ, so the statement is False.`,
      `**E.** → True

$C=\\{x,y\\}$ shares no letter with $A=\\{a,b,c,d\\}$, so the overview recovered $A\\cap C=\\emptyset$. Disjointness is that empty overlap.

The trap is to confuse "different alphabets" as a vibe rather than a membership scan. Here the scan is short: $x$ and $y$ are not among $a,b,c,d$.

If $C$ had contained $c$, disjointness would fail. It does not.

The recovered overlap is empty, so the statement is True.`,
    ],
  },
  "math-1-33": {
    ov: `**Part 1.** The sets.

Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$. A complement $X^c$ is everything in $U$ that $X$ leaves out.

**Part 2.** The operations.

De Morgan's laws say taking complements swaps union and intersection:

$$(A\\cup B)^c=A^c\\cap B^c,\\qquad (A\\cap B)^c=A^c\\cup B^c$$

Escaping a union means escaping both sets at once. Escaping an intersection takes only escaping one of them.

**Part 3.** The scans.

$A\\cup B=\\{1,\\ldots,8\\}$, so $(A\\cup B)^c=\\{9,10\\}$. $A\\cap B=\\{4,5\\}$, so $(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}$. $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$. Then $A^c\\cap B^c=\\{9,10\\}$ and $A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}$.`,
    letters: [
      `**A.** → True

Putting $A$ and $B$ together covers $1$ through $8$. The overview already recovered $(A\\cup B)^c=\\{9,10\\}$. Those two numbers sit in neither $A$ nor $B$.

The claimed roster matches. Complement of a union is the neither-region inside $U=\\{1,\\ldots,10\\}$.

The trap is to keep $8$ because it is the high end of $B$, padding the complement with a member of the union.

The recovered complement of the union is $\\{9,10\\}$, so the statement is True.`,
      `**B.** → True

De Morgan's first law says $(A\\cup B)^c=A^c\\cap B^c$. The overview already listed $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$. Their intersection is $\\{9,10\\}$, matching the complement of the union.

This letter is that agreement, not a new scan. Numbers $6,7,8$ miss $A$ but sit in $B$, so they fail the intersection of complements.

The trap is to union the complements instead, keeping $1,2,3,6,7,8$ as well.

The two recovered sides agree, so the statement is True.`,
      `**C.** → True

The overlap is $A\\cap B=\\{4,5\\}$. Removing those two from $U$ leaves $\\{1,2,3,6,7,8,9,10\\}$. Joining $A^c$ with $B^c$ produces the same list, so $(A\\cap B)^c=A^c\\cup B^c$.

Escaping an intersection takes only escaping one of the two sets. That is why $1,2,3$ (miss $B$) and $6,7,8$ (miss $A$) both survive.

The trap is to write $A^c\\cap B^c$ on the right-hand side, which is only $\\{9,10\\}$.

The two recovered sides agree, so the statement is True.`,
      `**D.** → True

$A^c$ is $U$ minus $A$: drop $1$ through $5$, keep $\\{6,7,8,9,10\\}$. The overview already recorded that list. Complement is a scan of the universe, not of $A$ rewritten backwards.

The trap is to also drop $6,7,8$ because they sit in $B$, writing $A^c\\cap B^c$ by mistake.

The recovered complement of $A$ is $\\{6,7,8,9,10\\}$, so the statement is True.`,
      `**E.** → True

$A\\cap B=\\{4,5\\}$, so removing those two from $U$ leaves $(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}$. The overview already recorded that list. It keeps $A$-only, $B$-only, and neither.

The trap is to also delete $6,7,8$ as "near the overlap," or to keep $4$ because it starts $B$.

The recovered complement of the intersection matches the claim, so the statement is True.`,
    ],
  },
  "math-1-34": {
    ov: `**Part 1.** The sets.

This pair of sets is special: $A$ holds every odd number of $U=\\{1,2,\\ldots,12\\}$ and $B$ holds every even one, so between them they **partition** the universe, no overlap, no gaps.

**Part 2.** The operations.

No whole number is odd and even at once, so $A\\cap B=\\emptyset$. Every whole number is one or the other, so $A\\cup B=U$. Complement of a partition block is the other block. Complementing the empty set relative to $U$ restores $U$. De Morgan's laws come through these extreme cases untouched.

**Part 3.** The scans.

Complementing $A$ removes the odds and leaves the evens, so $A^c=B=\\{2,4,6,8,10,12\\}$, and symmetrically $B^c=A$. Complementing the union leaves nothing at all, $(A\\cup B)^c=U^c=\\emptyset$, while complementing the empty intersection removes nothing, so $(A\\cap B)^c=\\emptyset^c=U$. Then $A^c\\cap B^c=B\\cap A=\\emptyset$ and $A^c\\cup B^c=B\\cup A=U$.`,
    letters: [
      `**A.** → True

Odds union evens reconstructs all of $U$, so $A\\cup B=U$ and the overview recovered $(A\\cup B)^c=\\emptyset$. There is no leftover integer between $1$ and $12$.

The trap is to keep $12$ or $1$ as a "boundary outside." Both sit in $U$ and therefore in the union of odds and evens.

The recovered complement of the union is empty, so the statement is True.`,
      `**B.** → True

$A^c$ is the evens and $B^c$ is the odds, so their intersection is empty: nothing is even and odd at once. That matches $(A\\cup B)^c=\\emptyset$, which is De Morgan in this extreme case.

The trap is to think two nonempty complements must overlap. These complements are the two blocks of a partition, so they miss each other on purpose.

The two recovered sides agree, so the statement is True.`,
      `**C.** → True

$A\\cap B=\\emptyset$ because no integer is odd and even, so $(A\\cap B)^c=U$. The other side $A^c\\cup B^c$ is evens joined with odds, again $U$. Complementing the empty set relative to $U$ restores $U$ in full.

The trap is to think the complement of an empty overlap is empty. Complementing empty inside $U$ gives $U$, not $\\emptyset$.

The two recovered sides agree, so the statement is True.`,
      `**D.** → True

Deleting the odds from $U$ leaves the evens, so the overview recovered $A^c=\\{2,4,6,8,10,12\\}$. Complement of a partition block is the other block.

The trap is to drop $2$ as a boundary or to include $1$. Complement of the odds is exactly $B$.

The recovered complement of $A$ is the evens, so the statement is True.`,
      `**E.** → True

Removing nothing from $U$ leaves $U$, so $(A\\cap B)^c=U$. The claimed list is that full $\\{1,\\ldots,12\\}$. Complementing $\\emptyset$ relative to a universe always gives the universe back.

The trap is to report $\\emptyset$ again, copying the intersection instead of complementing it. Empty overlap is not empty complement of the overlap.

The recovered complement of the intersection is all of $U$, so the statement is True.`,
    ],
  },
  "math-1-35": {
    ov: `**Part 1.** The sets.

Six letters make up the universe $U=\\{p,q,r,s,t,u\\}$, and $A=\\{p,q,r\\}$ overlaps $B=\\{r,s\\}$ in the single letter $r$.

**Part 2.** The operations.

A letter is outside a union when it is outside both sets, and outside an intersection when it is outside at least one of them. Those are De Morgan's laws in plain words.

**Part 3.** The scans.

$$A\\cup B=\\{p,q,r,s\\},\\qquad A\\cap B=\\{r\\},\\qquad A^c=\\{s,t,u\\},\\qquad B^c=\\{p,q,t,u\\}.$$

Complementing the union leaves the two letters that no set reached, $(A\\cup B)^c=\\{t,u\\}$. Complementing the intersection removes only $r$, giving $(A\\cap B)^c=\\{p,q,s,t,u\\}$. Then $A^c\\cap B^c=\\{t,u\\}$ and $A^c\\cup B^c=\\{p,q,s,t,u\\}$.`,
    letters: [
      `**A.** → True

Putting $A$ and $B$ together covers $\\{p,q,r,s\\}$. Of the six letters in $U$ only $t$ and $u$ are left out. The overview already recovered $(A\\cup B)^c=\\{t,u\\}$.

The trap is to keep $s$ because it sits at the end of $B$, or to drop $t$. Letter $s$ sits in $B$, so it sits in the union, so it cannot sit in the complement.

The recovered outside of the union is $\\{t,u\\}$, so the statement is True.`,
      `**B.** → True

$A^c=\\{s,t,u\\}$ and $B^c=\\{p,q,t,u\\}$ share $t$ and $u$, matching $(A\\cup B)^c$. Letter $s$ fails the intersection because $s\\in B$. De Morgan's first law is that agreement.

The trap is to keep $s$ in the intersection of complements. $s$ misses $A$ and hits $B$, so one filter fails.

The two recovered sides agree, so the statement is True.`,
      `**C.** → True

$A\\cap B=\\{r\\}$, so $(A\\cap B)^c$ is every letter of $U$ except $r$. Joining the two complements produces the same five letters $\\{p,q,s,t,u\\}$.

The trap is to also drop $s$ or $p$. Letter $p$ misses $B$ and letter $s$ misses $A$; each escapes the intersection by escaping one set.

The two recovered sides agree, so the statement is True.`,
      `**D.** → True

Drop $p,q,r$ from $U$ and $\\{s,t,u\\}$ remain. The overview already recovered $A^c=\\{s,t,u\\}$. Complement does not also drop $s$ just because $s\\in B$; that would be $A^c\\cap B^c$.

The trap is to write $\\{t,u\\}$, the neither-region, in place of $A^c$.

The recovered complement of $A$ is $\\{s,t,u\\}$, so the statement is True.`,
      `**E.** → True

Remove the single shared letter $r$ from $U$ and $\\{p,q,s,t,u\\}$ stay. Letters $p$ and $q$ stay because they miss $B$; $s$ stays because it misses $A$.

The trap is to drop $s$ as well, treating complement of the intersection as complement of the union.

The recovered complement of the intersection matches the claim, so the statement is True.`,
    ],
  },
  "math-1-36": {
    ov: `**Part 1.** The sets.

The task gives $A=\\{1,2\\}$ and $B=\\{x,y,z\\}$. Every claim here is about the ordered pairs formed from those two sets.

**Part 2.** The operations.

An **ordered pair** records not just which two objects were chosen but which one plays which role. The **Cartesian product** $A\\times B$ is the set of all pairs whose first entry comes from $A$ and whose second comes from $B$. Size is the product rule $|A|\\cdot|B|$. Turning the grid on its side produces $B\\times A$, same count, different members.

**Part 3.** The scans.

| $A\\times B$ | $x$ | $y$ | $z$ |
| --- | --- | --- | --- |
| **1** | $(1,x)$ | $(1,y)$ | $(1,z)$ |
| **2** | $(2,x)$ | $(2,y)$ | $(2,z)$ |

Two rows times three columns is six cells. $B\\times A$ has six completely different pairs such as $(x,1)$. The two products have the same size but no member in common.`,
    letters: [
      `**A.** → True

Two choices for the first slot and three for the second give $|A\\times B|=2\\cdot 3=6$. The overview already counted six cells in the grid. Product size is the number of cells, not the number of distinct symbols used.

The trap is to add $2+3=5$, or to count the five symbols $1,2,x,y,z$ instead of the pairs.

The recovered product has six pairs, so the statement is True.`,
      `**B.** → True

$(1,x)$ has first slot from $A$ and second from $B$, so it sits in the recovered grid, first row, first column. Both membership tests succeed.

The trap is to reverse the pair and test $(x,1)$ instead. Ordered pairs treat those as different objects.

The recovered grid contains $(1,x)$, so the statement is True.`,
      `**C.** → False

$(x,1)$ has a letter in the first slot, and $x\\notin A$. Ordered pairs treat $(1,x)$ and $(x,1)$ as different objects; the second lives in $B\\times A$, not in $A\\times B$.

**1.** Membership in $A\\times B$ is a two-slot test: first from $A$, second from $B$. The first slot already fails.

**2.** The false figure is the reversed pair, copied from the true pair in letter B. Reversing an ordered pair is not a set identity.

**3.** The recovered $B\\times A$ grid does contain $(x,1)$. That is a different product. Equal size does not move a pair from one product into the other.

What would make $(x,1)\\in A\\times B$? $x$ would have to sit in $A$ and $1$ in $B$. The given $A$ is $\\{1,2\\}$.

The recovered $A\\times B$ has number-first pairs only, so the statement is False.`,
      `**D.** → False

Every pair in $A\\times B$ reads (number, letter); every pair in $B\\times A$ reads (letter, number). In particular $(1,x)$ sits in the first product and cannot sit in the second, because $1\\notin B$.

**1.** Set equality needs identical members, not identical counts. The overview already noted the two products have the same size but no member in common.

**2.** The false figure is "six equals six, so the sets match." Cardinality is not identity.

**3.** A witness against equality is enough: $(1,x)\\in A\\times B$ and $(1,x)\\notin B\\times A$.

What would make $A\\times B=B\\times A$? In general $A=B$, up to trivial cases. Here $A$ is numbers and $B$ is letters.

The recovered products share no pair, so the statement is False.`,
      `**E.** → True

Size ignores order: $2\\cdot 3=6$ and $3\\cdot 2=6$. Both products hold six pairs even though the pairs themselves differ. The overview already counted six cells on each side of the turned grid.

The trap is to think unequal members force unequal sizes. Different lists can have the same length.

The recovered counts agree, so the statement is True.`,
    ],
  },
  "math-1-37": {
    ov: `**Part 1.** The sets.

Pair every letter of $A=\\{m,n,p\\}$ with every number of $B=\\{1,2\\}$, always keeping the letter first.

**Part 2.** The operations.

The product rule is $|A\\times B|=|A|\\cdot|B|$. A pair belongs to $A\\times B$ only when its first entry comes from $A$ and its second from $B$. Writing the product the other way round gives $B\\times A$: the same count, a different set.

**Part 3.** The scans.

$$A\\times B=\\{(m,1),(m,2),(n,1),(n,2),(p,1),(p,2)\\}.$$

Three letters with two numbers each gives $3\\cdot 2=6$ ordered pairs.

$$B\\times A=\\{(1,m),(1,n),(1,p),(2,m),(2,n),(2,p)\\},$$

six completely different pairs.`,
    letters: [
      `**A.** → True

Three letters with two numbers each give $3\\cdot 2=6$ ordered pairs. The overview already listed those six letter-first pairs. The product rule is that count.

The trap is $3+2=5$, or counting the five symbols instead of the pairs.

The recovered product has six pairs, so the statement is True.`,
      `**B.** → True

$(m,1)$ has $m\\in A$ and $1\\in B$, so both slots of $A\\times B$ are filled correctly. The overview listed $(m,1)$ first in the recovered roster.

The trap is to reverse the pair. Membership is a two-slot test, not a bag of two objects.

The recovered $A\\times B$ contains $(m,1)$, so the statement is True.`,
      `**C.** → False

$(1,m)$ puts a number first, and $1\\notin A$. The first slot already fails, so the pair is out of $A\\times B$ (it does sit in $B\\times A$).

**1.** The recovered roster of $A\\times B$ is six letter-first pairs. None begins with $1$.

**2.** The false figure is the reverse of the true pair $(m,1)$. Order is the whole point of an ordered pair.

**3.** Equal size of $A\\times B$ and $B\\times A$ does not move $(1,m)$ into $A\\times B$.

What would make $(1,m)\\in A\\times B$? $1$ would have to sit in $A$. The given $A$ is three letters.

The recovered $A\\times B$ has no number-first pair, so the statement is False.`,
      `**D.** → False

$A\\times B$ is letter-first; $B\\times A$ is number-first. Witness: $(m,1)$ is on the first list and missing from the second, because $m\\notin B$. Set equality needs identical members, not identical counts.

The overview already displayed two disjoint six-element lists. Naming them equal is a false figure built from the shared count $6$.

The trap is "same size, same set." Cardinality is not identity.

The recovered products share no pair, so the statement is False.`,
      `**E.** → True

The product rule is commutative as a count: $3\\cdot 2=6$ and $2\\cdot 3=6$. The counts agree while the member lists share no pair. The overview already recorded both sixes.

The trap is to report unequal sizes because the pairs look different. Different members can still number six.

The recovered counts agree, so the statement is True.`,
    ],
  },
  "math-1-38": {
    ov: `**Part 1.** The sets.

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
    letters: [
      `**A.** → True

Shared $3,5,7$ leave $A$; $1$ and $9$ stay because they miss $B$. The overview already placed those two in the $A$-only bucket, so $A\\setminus B=\\{1,9\\}$.

The trap is to keep $3$ because it started in $A$, or to drop $9$ as a high end.

The recovered leftover is $\\{1,9\\}$, so the statement is True.`,
      `**B.** → True

The opposite leftover deletes the same shared triple from $B$ and keeps $B$'s private numbers. The overview already placed $11$ and $13$ in the $B$-only bucket.

The trap is to copy $\\{1,9\\}$, as if difference were commutative.

The recovered opposite leftover is $\\{11,13\\}$, so the statement is True.`,
      `**C.** → True

Symmetric difference joins the two outer piles. The overview already assembled $A\\triangle B=\\{1,9,11,13\\}$. Each of those four sits in exactly one of the original sets. Including $3$ would be keeping the overlap, which $A\\triangle B$ rejects.

The trap is to write the union, putting $3,5,7$ back.

The recovered symmetric difference is $\\{1,9,11,13\\}$, so the statement is True.`,
      `**D.** → True

A number in $A\\setminus B$ is outside $B$; a number in $B\\setminus A$ is inside $B$. Those demands cannot hold together, so the intersection of the leftovers is empty. The overview already noted that the outer buckets can never overlap.

The trap is to intersect $A$ with $B$ and report $\\{3,5,7\\}$, answering a different question.

The recovered intersection of leftovers is empty, so the statement is True.`,
      `**E.** → False

Union keeps the middle bucket $\\{3,5,7\\}$; symmetric difference throws it away. The overview already recorded $A\\triangle B=\\{1,9,11,13\\}$ and $A\\cup B=\\{1,3,5,7,9,11,13\\}$.

**1.** The two operations differ by exactly the overlap. Here the overlap is three numbers, so the lists cannot match.

**2.** Naming them equal is a false figure: the recovered union is three members larger.

**3.** The trap is to treat "combine $A$ and $B$" as a single operation. Combine-and-keep-the-middle is union. Combine-and-drop-the-middle is symmetric difference.

What would make $A\\triangle B=A\\cup B$? The middle bucket would have to be empty, i.e. $A$ and $B$ disjoint. They share $3,5,7$.

The recovered lists differ by the overlap, so the statement is False.`,
    ],
  },
  "math-1-39": {
    ov: `**Part 1.** The sets.

$A=\\{2,4,6\\}$ contains only even numbers and $B=\\{1,3,5\\}$ only odd ones, so no number can belong to both: the sets are **disjoint**, $A\\cap B=\\emptyset$.

**Part 2.** The operations.

Disjointness makes the subtractions do nothing at all. There is no shared member to delete, so $A\\setminus B=A$ and $B\\setminus A=B$. The **symmetric difference**, the members lying in exactly one set, therefore becomes the two whole sets glued together. Usually $A\\triangle B$ is smaller than $A\\cup B$; here there is nothing shared to keep, so the two operations coincide.

**Part 3.** The scans.

$A\\setminus B=A=\\{2,4,6\\}$ and $B\\setminus A=B=\\{1,3,5\\}$.

$$A\\triangle B=\\{2,4,6\\}\\cup\\{1,3,5\\}=\\{1,2,3,4,5,6\\}=A\\cup B.$$`,
    letters: [
      `**A.** → True

$A$ is evens and $B$ is odds, so they share nothing. Subtracting $B$ from $A$ therefore deletes nobody. The overview already recovered $A\\setminus B=A=\\{2,4,6\\}$.

The trap is to report $\\emptyset$, mixing empty overlap with empty difference.

The recovered difference is all of $A$, so the statement is True.`,
      `**B.** → True

The same disjointness the other way: none of $B$'s odds is even, so nothing is deleted. The overview recovered $B\\setminus A=B=\\{1,3,5\\}$.

The trap is to copy $\\{2,4,6\\}$, reversing the difference.

The recovered opposite leftover is all of $B$, so the statement is True.`,
      `**C.** → True

With an empty middle bucket, symmetric difference is the two whole sets glued together. The overview already assembled $A\\triangle B=\\{1,2,3,4,5,6\\}$. Each of the six numbers sits in exactly one of $A$ or $B$.

The trap is to drop the evens or the odds, writing one leftover instead of both.

The recovered symmetric difference is the six numbers, so the statement is True.`,
      `**D.** → True

The leftovers are the two whole sets, evens and odds. No even equals an odd, so their intersection is empty. The overview already recorded disjointness of $A$ and $B$, which is the same emptiness.

The trap is to think two nonempty leftovers must overlap. Nonempty does not mean overlapping.

The recovered intersection of leftovers is empty, so the statement is True.`,
      `**E.** → True

Usually the union is bigger than the symmetric difference because it also keeps the shared members. Here the shared part is empty, so there is nothing extra for the union to add, and both sides equal $\\{1,2,3,4,5,6\\}$. Disjointness is exactly the situation in which $A\\triangle B=A\\cup B$.

The trap is to copy the previous task, where overlap $3,5,7$ made the two operations differ. These lists have no such middle bucket.

The recovered operations coincide, so the statement is True.`,
    ],
  },
  "math-1-40": {
    ov: `**Part 1.** The sets.

Of $40$ students, $|A|=22$ play chess, $|B|=15$ play checkers, and $|A\\cap B|=6$ play both.

**Part 2.** The operations.

Inclusion-exclusion counts the union by adding the headlines and subtracting the overlap once. Chess-only is the chess headline minus the overlap; checkers-only is the checkers headline minus the overlap. "Neither" is the club total minus the union. The both-games group is part of the at-least-one group, so the intersection cannot outnumber the union.

**Part 3.** The scans.

$$\\lvert A\\cup B\\rvert=22+15-6=31.$$

Chess-only: $22-6=16$. Checkers-only: $15-6=9$. Neither: $40-31=9$. Intersection $6$ versus union $31$.`,
    letters: [
      `**A.** → True

Adding $22+15$ counts the six two-game players twice. Subtracting once restores a single copy. The overview already recovered $|A\\cup B|=31$.

The trap is to add $22+15=37$ and forget the subtraction, or to subtract the overlap twice.

The recovered union has $31$ students, so the statement is True.`,
      `**B.** → True

Chess-only is the chess headline minus the overlap. The overview already recovered $22-6=16$. Those $16$ sit in $A$ and not in $B$.

The trap is to report $22$, counting the six who also play checkers, or to swap with checkers-only $9$.

The recovered chess-only region has $16$ people, so the statement is True.`,
      `**C.** → True

Neither is the club total minus the union. The overview already formed the union $31$ and left $40-31=9$.

The trap is $40-22-15=-3$ by subtracting both headlines without restoring the overlap, or to confuse this $9$ with checkers-only, which is also $9$ by coincidence.

The recovered neither-region has $9$ people, so the statement is True.`,
      `**D.** → False

Everyone playing both games is already someone playing at least one, so $A\\cap B\\subseteq A\\cup B$ always. The overview recovered $6$ versus $31$. Intersection cannot outnumber the union that contains it.

**1.** Subsethood of the both-region inside the at-least-one region is an identity, not a coincidence of these numbers. If $x$ plays both, then $x$ plays at least one.

**2.** The false figure $6>31$ would require a region to be larger than a region that contains it. That cannot happen for finite counts, and it cannot happen for these sets.

**3.** A solver who compared $22$ with $15$ and then mixed those headlines with $6$ and $31$ is no longer talking about intersection versus union.

What would make the inequality true? Nothing, for any two sets. The recovered $6<31$ is the expected direction.

The recovered intersection is smaller than the union, so the statement is False.`,
      `**E.** → True

Checkers-only is the checkers headline minus the overlap. The overview already recovered $15-6=9$. Those $9$ sit in $B$ and not in $A$.

The trap is to copy the neither-count $9$ without noticing it is a different region that happens to have the same size, or to report $15$.

The recovered checkers-only region has $9$ people, so the statement is True.`,
    ],
  },
};

const EX = {
  "math-1-31": [
    "If the claim had stopped at $50$, it would have dropped the one newcomer that makes the union larger than $A$. The recovered list includes $60$ once.",
    "If the claim had named $\\{30,40,50,60\\}$, it would have kept a $60$ that misses $A$. Intersection has no licence for that.",
    "If the claim had named $\\{10,20,30\\}$, it would have kept a shared $30$ that difference deletes.",
    "The leftover $\\{10,20\\}$ lives inside $A$. The leftover $\\{60\\}$ lives inside $B$. Those two private cells share no multiple of ten. Equality would be a coincidence of private cells, not a law. A solver who checks that both leftovers are nonempty and stops there has not compared members. One witness $10$ already kills equality. What would make the leftovers match? $A$ and $B$ would have to be the same list. They are not: $A$ has $10,20$ that $B$ misses, and $B$ has $60$ that $A$ misses. Difference is one of the first operations that fails to commute, and this pair of lists is a clean picture of that failure. The recovered $A\\setminus B$ and $B\\setminus A$ are different sets with different sizes.",
    "Disjointness fails as soon as one shared number appears. Here none does. $C$ is three tiny counting numbers; $A$ is five multiples of ten. The recovered empty overlap is that mismatch of ranges, not a vibe.",
  ],
  "math-1-32": [
    "The shared letters $c,d$ appear once in the recovered union, not twice. Union is a set.",
    "Letter $e$ is the whole of $B\\setminus A$. It cannot survive $A\\cap B$.",
    "Letter $c$ looks like it 'started in $A$,' but it also sits in $B$, so difference deletes it. The recovered private pair is $a,b$ only.",
    "A singleton $\\{e\\}$ cannot equal a pair $\\{a,b\\}$. The recovered leftovers disagree in size and in letters. The slogan that both are 'what remains after the overlap' names the construction and then stops before reading the members. Reading the members is the whole test. $e$ is not $a$. What would make them equal? $A$ and $B$ would need matching private letters. Here $A$ keeps two letters $B$ never had, and $B$ keeps one letter $A$ never had. That is the standard picture of a non-commutative difference, not a rounding error.",
    "If $C$ had been $\\{c,x\\}$, the overlap with $A$ would have been $\\{c\\}$ and disjointness would fail. The given $C$ is $\\{x,y\\}$.",
  ],
  "math-1-33": [
    "Padding the complement with $8$ would put a member of $B$ outside the union that contains it. The recovered neither-region starts at $9$.",
    "Numbers $6,7,8$ look 'outside $A$' and a rushed intersection of complements keeps them. They sit in $B$. The recovered double-complement intersection is only $\\{9,10\\}$.",
    "Swapping union and intersection on the right-hand side shrinks the list to the neither-region. The recovered De Morgan side is the eight-number list, everyone except $\\{4,5\\}$.",
    "Complement of $A$ still contains $B$-only numbers $6,7,8$. Those miss $A$. That is the definition.",
    "The eight-number list is $A$-only, $B$-only, and neither. It is not $A^c$ alone and not $(A\\cup B)^c$ alone. The recovered complement of the overlap keeps all three of those cells.",
  ],
  "math-1-34": [
    "A leftover integer would have to be neither odd nor even. Inside this $U$ there is no such integer. The recovered complement of the union is empty for that reason, not because $U$ is empty.",
    "Partition blocks are complements of each other. Intersecting a block with its complement is empty by construction. De Morgan then matches $(A\\cup B)^c=\\emptyset$.",
    "Complement of empty is the universe. That identity is what this letter is reading. Reporting $\\emptyset$ on both sides would be copying the intersection instead of complementing it. The recovered $(A\\cap B)^c$ is all twelve numbers.",
    "The evens are $B$, and they are also $A^c$. Those two names are the same recovered list. Complement of odds is evens inside this $U$.",
    "This is the extreme De Morgan case: complement of nothing is everything. The claimed roster is $U$ itself. A student who writes $\\emptyset$ has answered $A\\cap B$, not $(A\\cap B)^c$. The recovered scan removes nothing from $\\{1,\\ldots,12\\}$ because there is nothing in the overlap to remove. Every integer in $U$ is odd or even, hence outside the empty intersection. That is why the complement is the full twelve-element list, not a hole.",
  ],
  "math-1-35": [
    "Letter $s$ sits in $B$, so it sits in the union, so it cannot sit in $(A\\cup B)^c$. The recovered outside is $t,u$ only.",
    "Letter $s$ is the witness that $A^c$ is not $A^c\\cap B^c$. It misses $A$ and hits $B$.",
    "Five letters remain after deleting $r$. That is the recovered complement of a singleton overlap inside a six-letter $U$.",
    "Keeping $s$ in $A^c$ is correct. Deleting $s$ would be a second filter the claim did not ask for.",
    "Letter $s$ is $B$-only, so it misses $A$, so it survives $(A\\cap B)^c$. Dropping it would mix this complement with the neither-region $\\{t,u\\}$.",
  ],
  "math-1-36": [
    "Five symbols are not six pairs. The recovered grid has six cells because each of two numbers is paired with each of three letters.",
    "The true pair is number first. That is the $A\\times B$ convention in this stem.",
    "Reversing an ordered pair is a different object. The recovered $A\\times B$ grid is number-first: $(1,x),(1,y),(1,z),(2,x),(2,y),(2,z)$. None of those is $(x,1)$. The pair $(x,1)$ sits in the turned grid $B\\times A$, first slot a letter, second slot a number. A solver who treats pairs as unordered two-element sets would accept both $(1,x)$ and $(x,1)$ and then wonder why the products are distinguished at all. They are distinguished because the first coordinate is a role, not a bag. What would make $(x,1)\\in A\\times B$? $A$ would have to contain $x$. The given $A$ is $\\{1,2\\}$. Cardinality $6=6$ is a separate true claim and does not move this pair.",
    "Same count, different members: that slogan is the whole point of turning the grid. The recovered $A\\times B$ and $B\\times A$ are disjoint six-element sets. Naming them equal is a false figure built from the product rule commuting as a count. Counts commute. Ordered pairs do not. A single witness $(1,x)$ sits in one product and misses the other because $1$ is not a letter of $B$. Set equality cannot survive one missing witness. What would make the products equal? $A$ and $B$ would need to be the same set, up to trivial empty cases. Here one factor is numbers and the other is letters.",
    "The product rule $n\\cdot m=m\\cdot n$ is why this letter is true while the previous letter is false. Size is not identity.",
  ],
  "math-1-37": [
    "The six recovered pairs are letter-first. That count is $3\\times 2$, not $3+2$.",
    "Both slots match the $A\\times B$ convention: letter, then number.",
    "The recovered roster of $A\\times B$ begins $(m,1),(m,2),\\ldots$ and never $(1,m)$. The reversed pair is a member of $B\\times A$ only. Treating ordered pairs as unordered would collapse the two products and make this letter accidentally true. They are not unordered. The first coordinate is a role. What would make $(1,m)\\in A\\times B$? The letter set $A$ would have to contain the number $1$. It contains $m,n,p$.",
    "The two recovered lists share no pair. Equal length $6$ is letter E, not this letter. Naming the lists equal is the same false figure as in the number-letter product: commuting the count and commuting the members. Only the count commutes.",
    "Turn the grid and the cell count stays six. The names on the cells all change.",
  ],
  "math-1-38": [
    "Shared $3$ leaves $A$ because it sits in $B$. Difference is not 'started in $A$.'",
    "Private to $B$ means $11$ and $13$, not $1$ and $9$. Those live in the other leftover.",
    "Symmetric difference is the outer buckets only. The recovered four-element list has no $3,5,7$.",
    "The outer buckets are disjoint by construction: outside $B$ cannot be inside $B$. The recovered emptiness is that clash of demands, not a coincidence of these odd numbers.",
    "The recovered union is three members larger than the recovered symmetric difference, and those three members are the overlap $3,5,7$. Naming the two operations equal is a false figure that puts the middle bucket back after the definition just threw it away. Union means at least one. Symmetric difference means exactly one. Those are different English sentences and different recovered lists. What would make them coincide? Empty overlap. The overview filled the middle bucket with three numbers. A solver coming from the next task, where $A$ and $B$ are disjoint, might copy that coincidence backwards. These lists are not disjoint.",
  ],
  "math-1-39": [
    "Empty overlap empties the middle cell, not the left cell. The recovered $A\\setminus B$ is still the three evens.",
    "The three odds all miss $A$, so they all stay. The recovered leftover is $B$ itself.",
    "Six numbers, each in exactly one set: that is symmetric difference when the middle bucket is empty. The recovered list is $\\{1,2,3,4,5,6\\}$.",
    "Evens and odds share nothing. Their intersection is empty whether you call them $A$ and $B$ or $A\\setminus B$ and $B\\setminus A$.",
    "This is the special case the previous task warned about. With overlap empty, union has nothing extra to add, so it matches symmetric difference. The recovered common list is $\\{1,2,3,4,5,6\\}$. Copying the previous false verdict, where overlap made the operations differ, would miss the whole point of disjointness. Disjointness is exactly when 'at least one' and 'exactly one' become the same count of members. Here both recovered sides are the six small integers.",
  ],
  "math-1-40": [
    "A student who writes $37$ has kept two copies of the six two-game players. The recovered union keeps them once.",
    "Chess-only is not the chess headline. The recovered $16$ has already removed the six who also play checkers.",
    "The matching $9$ in checkers-only is a coincidence of sizes, not the same region. Neither is outside both circles. The recovered neither-cell is club minus union, $40-31$.",
    "A region cannot outnumber a region that contains it. The both-games six are already among the at-least-one thirty-one. The false inequality $6>31$ would break that containment. It is not a close numerical miss. It is the wrong direction for any two sets, and the recovered numbers $6$ and $31$ show the expected direction with a wide gap. A solver who compared the headlines $22$ and $15$ and then attached those to $\\cap$ and $\\cup$ is no longer using inclusion-exclusion. Intersection sits inside union. Always. What would make the claim true? Nothing in this stem, and nothing in the algebra of sets.",
    "Checkers-only $9$ happens to match neither $9$. Different cells, same size. The recovered checkers-only cell is $15-6$, people in $B$ and not in $A$, still inside the club's union.",
  ],
};

applyExpand(fp, P, EX);
