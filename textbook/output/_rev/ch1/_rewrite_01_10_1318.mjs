import { patchFile } from "../_apply_1318.mjs";

patchFile("ch1/01_10.json", {
  "math-1-2": {
    solution_overview: `Let $A=\\{x\\in Z:x^2=9\\}$, with $Z$ the integers, and let $B=\\{3,-3\\}$.

A set-builder keeps those members of the named universe that satisfy the stated equation. Changing the universe, or adding an extra inequality, produces a different set. Rosters that list the same members in a different order still name one set.`,
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
  },
  "math-1-3": {
    solution_overview: `Let $A=\\{a,b,c\\}$. Membership $x\\in A$ asks whether $x$ is one of those three letters. Subsethood $S\\subseteq A$ asks whether every member of $S$ is one of those letters.

The power set $\\mathcal P(A)$ is the set of all subsets of $A$. Each of the $|A|$ elements may be kept or left out, so

$$\\lvert\\mathcal P(A)\\rvert=2^{\\lvert A\\rvert}$$

A proper subset must also be unequal to $A$.`,
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
  },
  "math-1-4": {
    solution_overview: `Let $D=\\{a,b,c\\}$. An object belongs to $D$ only when it is one of the three listed letters. A collection $S$ is a subset of $D$ when every member of $S$ is one of those letters.

The power set collects every such $S$, and its size is $2^{\\lvert D\\rvert}$. Ordinary inclusion $D\\subseteq D$ always holds; membership of $D$ in $D$ would require $D$ to appear as a listed letter.`,
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
  },
  "math-1-5": {
    solution_overview: `Let $E=\\{1,3,5,7\\}$ and $F=\\{3,4,5,6\\}$.

Difference $X\\setminus Y$ keeps members of $X$ that are missing from $Y$. The two leftover piles $E\\setminus F$ and $F\\setminus E$ live on opposite sides of the overlap and need not be equal. Their union is the symmetric leftovers; their intersection is empty because a number cannot be both outside $F$ and inside $F$.`,
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
  },
  "math-1-6": {
    solution_overview: `Let $A=\\{2,4,6,8,10\\}$, $B=\\{3,6,9,12\\}$, and $C=\\{1,2,3,4,5\\}$.

Intersection keeps numbers that sit in both lists. Union keeps anything in at least one, counting a shared member once. Difference $X\\setminus Y$ keeps members of $X$ that are missing from $Y$.`,
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
  },
  "math-1-7": {
    solution_overview: `A cohort of $50$ students has $|M|=30$ taking Mathematics, $|E|=25$ taking Economics, and overlap $|M\\cap E|=12$.

Inclusion-exclusion counts the union by adding the two headlines and subtracting the overlap once:

$$\\lvert M\\cup E\\rvert=\\lvert M\\rvert+\\lvert E\\rvert-\\lvert M\\cap E\\rvert$$

Only-Mathematics is the Mathematics headline minus the overlap. Students taking neither course sit outside the union.`,
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
  },
  "math-1-8": {
    solution_overview: `Let $U=\\{1,2,\\ldots,9\\}$, $A=\\{1,2,3\\}$, $B=\\{4,5,6\\}$, and $C=\\{7,8,9\\}$.

A collection of blocks is pairwise disjoint when every pair of blocks has empty intersection. It partitions $U$ when the blocks are nonempty, pairwise disjoint, and their union is $U$. Empty intersection never forces either set itself to be empty, and it does not empty a difference.`,
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
  },
  "math-1-9": {
    solution_overview: `Among $U=\\{1,2,\\ldots,12\\}$, let $X=\\{1,2,3,4,5,6\\}$ be the Python knowers and $Y=\\{4,5,6,7,8,9\\}$ the SQL knowers. Complements are taken inside $U$: $X^c$ is everyone in $U$ missing from $X$.

De Morgan's identities swap union and intersection under complement:

$$(X\\cup Y)^c=X^c\\cap Y^c,\\qquad (X\\cap Y)^c=X^c\\cup Y^c$$`,
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
  },
  "math-1-10": {
    solution_overview: `Let $U=\\{1,2,\\ldots,10\\}$, $A=\\{1,2,3,4,5\\}$, and $B=\\{4,5,6,7,8\\}$, with complements taken inside $U$.

De Morgan's identities are

$$(A\\cup B)^c=A^c\\cap B^c,\\qquad (A\\cap B)^c=A^c\\cup B^c$$

Complement of a union is "outside both." Complement of an intersection is "outside at least one."`,
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
  },
});
