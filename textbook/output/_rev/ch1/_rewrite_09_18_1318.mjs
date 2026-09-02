import { patchFile } from "../_apply_1318.mjs";

patchFile("ch1/09_18.json", {
  "math-1-31": {
    solution_overview: `Let $A=\\{10,20,30,40,50\\}$, $B=\\{30,40,50,60\\}$, and $C=\\{1,2,3\\}$.

Intersection keeps numbers tagged in both $A$ and $B$. Union keeps every tagged number once. Difference $A\\setminus B$ keeps the $A$-only numbers; $B\\setminus A$ keeps the $B$-only numbers. Two sets are disjoint when they share nothing.`,
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
  },
  "math-1-32": {
    solution_overview: `Let $A=\\{a,b,c,d\\}$, $B=\\{c,d,e\\}$, and $C=\\{x,y\\}$.

Lining $A$ up against $B$, shared letters form the intersection, every letter written once forms the union, and each set's private letters form the two differences. Disjointness of $A$ and $C$ is empty overlap.`,
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
  },
  "math-1-33": {
    solution_overview: `Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$. A complement $X^c$ is everything in $U$ that $X$ leaves out.

De Morgan's laws say taking complements swaps union and intersection:

$$(A\\cup B)^c=A^c\\cap B^c,\\qquad (A\\cap B)^c=A^c\\cup B^c$$

Escaping a union means escaping both sets at once. Escaping an intersection takes only escaping one of them.`,
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
  },
  "math-1-34": {
    solution_overview: `Let $U=\\{1,2,\\ldots,12\\}$, with $A=\\{1,3,5,7,9,11\\}$ the odds and $B=\\{2,4,6,8,10,12\\}$ the evens.

This pair partitions $U$: no overlap, no gaps. No whole number is odd and even at once, so $A\\cap B=\\emptyset$. Every whole number in $U$ is one or the other, so $A\\cup B=U$. Complements of partition blocks swap the two blocks. De Morgan's identities still apply in these extreme cases.`,
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
  },
  "math-1-35": {
    solution_overview: `Let $U=\\{p,q,r,s,t,u\\}$, $A=\\{p,q,r\\}$, and $B=\\{r,s\\}$. Complements are taken inside $U$.

De Morgan says a letter is outside a union when it is outside both sets, and outside an intersection when it is outside at least one of them.`,
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
  },
  "math-1-36": {
    solution_overview: `Let $A=\\{1,2\\}$ and $B=\\{x,y,z\\}$. An ordered pair records which object plays which role. The Cartesian product $A\\times B$ is the set of all pairs whose first entry comes from $A$ and whose second comes from $B$.

The product rule counts the cells:

$$\\lvert A\\times B\\rvert=\\lvert A\\rvert\\cdot\\lvert B\\rvert$$

Turning the product around gives $B\\times A$, the same count and a different set of pairs.`,
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
  },
  "math-1-37": {
    solution_overview: `Let $A=\\{m,n,p\\}$ and $B=\\{1,2\\}$. Pair every letter of $A$ with every number of $B$, always keeping the letter first. The product rule is $|A\\times B|=|A|\\cdot|B|$.

A pair belongs to $A\\times B$ only when its first entry comes from $A$ and its second from $B$. Writing the product the other way round gives six different pairs: the same count, a different set.`,
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
  },
  "math-1-38": {
    solution_overview: `Let $A=\\{1,3,5,7,9\\}$ and $B=\\{3,5,7,11,13\\}$.

The symmetric difference $A\\triangle B$ keeps the numbers belonging to exactly one of the two sets. It is the union of the two leftover piles $A\\setminus B$ and $B\\setminus A$. Union keeps the overlap as well; symmetric difference throws the overlap away. The two leftover piles cannot overlap.`,
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
  },
  "math-1-39": {
    solution_overview: `Let $A=\\{2,4,6\\}$ and $B=\\{1,3,5\\}$. Evens and odds share nothing, so the sets are disjoint: $A\\cap B=\\emptyset$.

Disjointness makes subtraction delete nobody. Symmetric difference then glues the two whole sets together, which is also the union, because there is no overlap to discard.`,
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
  },
  "math-1-40": {
    solution_overview: `Of $40$ students, $|A|=22$ play chess, $|B|=15$ play checkers, and $|A\\cap B|=6$ play both.

Inclusion-exclusion counts the union by adding the headlines and subtracting the overlap once:

$$\\lvert A\\cup B\\rvert=\\lvert A\\rvert+\\lvert B\\rvert-\\lvert A\\cap B\\rvert$$

Chess-only is the chess headline minus the overlap; checkers-only is the checkers headline minus the overlap. "Neither" is the club total minus the union. The both-games group is part of the at-least-one group, so the intersection cannot outnumber the union.`,
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
  },
});
