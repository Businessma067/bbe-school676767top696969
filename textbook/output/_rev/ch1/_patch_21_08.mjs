import { apply } from "./_patch_batch.mjs";

apply(new URL("./21_08.json", import.meta.url), {
  "math-1-21": {
    solution_overview: `Begin with the two lists as written: $\\mathbb{N}=\\{1,2,3,\\ldots\\}$ and $H=\\{2,4,6,8,\\ldots\\}$, the positive even integers.

Every even integer is already a natural number, so $H$ sits inside $\\mathbb{N}$. The reverse fails at the first odd: $1\\in\\mathbb{N}$ but $1$ is not even, so $1\\notin H$. The inclusion is therefore proper:

$$H\\subsetneq\\mathbb{N}.$$

Finiteness would require a last even, say $2N$. The next even $2(N+1)$ is still positive and even, hence still in $H$. So $H$ has no last member: it is infinite.

To compare sizes, send each natural to its double:

$$f(n)=2n.$$

If $f(n)=f(m)$ then $2n=2m$, so $n=m$ (one-to-one). Every positive even is $2k=f(k)$ for $k\\in\\mathbb{N}$ (onto). That pairing is a bijection, so $|H|=|\\mathbb{N}|$ even though $H$ is a proper subset of $\\mathbb{N}$.`,
    tactical_explanations: [
      `**A.** → True

Inclusion $H\\subseteq\\mathbb{N}$ asks only whether every even sits among the naturals. Each member of $H$ is a positive even integer, and those already appear in $\\{1,2,3,\\ldots\\}$.`,
      `**B.** → False

A finite $H$ would have a largest even. After any $2n$ the next even $2(n+1)$ is still in $H$, so there is never a last member. The list $2,4,6,8,\\ldots$ does not stop.`,
      `**C.** → False

Set equality needs the same members on both sides. The leftover $1\\in\\mathbb{N}\\setminus H$ already forces $H\\ne\\mathbb{N}$. The further odds $3,5,7,\\ldots$ are extra leftovers, but one missing element is enough.`,
      `**D.** → True

Sample values of the recovered map: $f(1)=2$, $f(2)=4$, $f(3)=6$. The bijection already checked one-to-one and onto, which is the pairing the claim describes.`,
      `**E.** → False

Proper inclusion is true (the odds are missing). The extra slogan "therefore strictly fewer elements" is a finite-set habit. The bijection $f(n)=2n$ already showed $|H|=|\\mathbb{N}|$, so same cardinality with a proper subset is exactly what infinite sets allow.`,
    ],
  },
  "math-1-22": {
    solution_overview: `Read the braces in $K=\\{a,\\{a\\}\\}$ as a list of two objects, not one object written twice.

1. the bare object $a$,
2. the singleton set $\\{a\\}$.

Those are different things: $\\{a\\}$ is a set whose only member is $a$. Two distinct listed objects give $|K|=2$.

Membership is a look-up on that list: $a$ appears, so $a\\in K$; $\\{a\\}$ appears, so $\\{a\\}\\in K$.

Subsethood tests the members of the *left-hand* set, not the left-hand set as a blob. $\\{a\\}\\subseteq K$ asks whether $a\\in K$. $\\{\\{a\\}\\}\\subseteq K$ asks whether $\\{a\\}\\in K$. Extra braces change which object you are testing.`,
    tactical_explanations: [
      `**A.** → True

The written list of $K$ opens with the bare object $a$. Membership $a\\in K$ is that first slot.`,
      `**B.** → True

The second listed object is the set $\\{a\\}$ itself, not the bare $a$. So $\\{a\\}\\in K$.`,
      `**C.** → True

Subsethood $\\{a\\}\\subseteq K$ has one member to check, namely $a$. That member is already in $K$. This is not the same question as $\\{a\\}\\in K$, even though both happen to hold here.`,
      `**D.** → True

Now the left-hand set is $\\{\\{a\\}\\}$, whose only member is the object $\\{a\\}$. Because $\\{a\\}$ is the second listed element of $K$, the subset test passes. You are testing membership of $\\{a\\}$, not of $a$.`,
      `**E.** → True

The two listed objects are an element and a one-element set containing that element. Distinct members, so $|K|=2$.`,
    ],
  },
  "math-1-23": {
    solution_overview: `Work inside $U=\\{1,2,\\ldots,10\\}$ with $A=\\{1,2,3,4,5\\}$ and $B=\\{4,5,6,7,8\\}$. Complements, unions, and intersections are all read off these three lists.

Join $A$ with $B$: $A$ contributes $1$ through $5$, and $B$ adds the new numbers $6,7,8$.

$$A\\cup B=\\{1,2,3,4,5,6,7,8\\}.$$

What $U$ still has left is $9$ and $10$:

$$(A\\cup B)^c=\\{9,10\\}.$$

Overlap: $4$ and $5$ sit in both lists; $1,2,3$ miss $B$ and $6,7,8$ miss $A$.

$$A\\cap B=\\{4,5\\}.$$

Drop those two from $U$:

$$(A\\cap B)^c=\\{1,2,3,6,7,8,9,10\\}.$$

The one-set complements are $A^c=\\{6,7,8,9,10\\}$ and $B^c=\\{1,2,3,9,10\\}$. Their intersection is $\\{9,10\\}$ and their union is $\\{1,2,3,6,7,8,9,10\\}$, matching the two complements above.`,
    tactical_explanations: [
      `**A.** → True

The complement of the union was $\\{9,10\\}$. That is the claimed set.`,
      `**B.** → True

De Morgan's first identity is $(A\\cup B)^c=A^c\\cap B^c$. Both sides were $\\{9,10\\}$.`,
      `**C.** → True

The second identity is $(A\\cap B)^c=A^c\\cup B^c$. Both sides were the eight-element set $\\{1,2,3,6,7,8,9,10\\}$.`,
      `**D.** → False

Intersection requires membership in both $A$ and $B$. The number $6$ sits in $B$ but $6\\notin A$, so padding $A\\cap B$ with $6$ is the trap. The overlap is $\\{4,5\\}$, not $\\{4,5,6\\}$.`,
      `**E.** → False

Once $A\\cap B=\\{4,5\\}$, the complement in $U$ must drop $4$ and $5$ and keep $6,7,8$. The claimed list does the opposite: it keeps $4$ and $5$ while omitting $6,7,8$.`,
    ],
  },
  "math-1-24": {
    solution_overview: `An ordered pair $(a,b)$ lands in $A\\times B$ only when the first slot comes from $A=\\{1,2\\}$ and the second from $B=\\{x,y,z\\}$. Listing them:

$$A\\times B=\\{(1,x),(1,y),(1,z),(2,x),(2,y),(2,z)\\}.$$

Six pairs, matching the product rule $|A|\\cdot|B|=2\\cdot 3=6$.

Reverse the factors and the slots swap:

$$B\\times A=\\{(x,1),(x,2),(y,1),(y,2),(z,1),(z,2)\\}.$$

Same count $3\\cdot 2=6$, but different ordered pairs, so $A\\times B\\ne B\\times A$. In particular $(x,2)$ has a letter first, which $A\\times B$ never allows.`,
    tactical_explanations: [
      `**A.** → True

The listed product has six pairs, and $2\\cdot 3=6$ matches the claim $|A\\times B|=6$.`,
      `**B.** → True

The pair $(2,x)$ has first slot $2\\in A$ and second slot $x\\in B$, so it sits in $A\\times B$. It is the fourth pair on the list above.`,
      `**C.** → False

Ordered pairs in $A\\times B$ must start with a member of $A=\\{1,2\\}$. The pair $(x,2)$ starts with the letter $x$, which belongs to $B$, not to $A$. The same symbols in reverse order live in $B\\times A$ instead.`,
      `**D.** → False

From B we have $(2,x)\\in A\\times B$. For that pair to sit in $B\\times A$ the first slot would have to come from $B=\\{x,y,z\\}$, but $2\\notin B$. Different members mean the two products are unequal, even though both have size $6$.`,
      `**E.** → True

The claim compares counts, not the pairs themselves. Both products have size $6$, so the counts match.`,
    ],
  },
  "math-1-25": {
    solution_overview: `Rewrite the set-builders as intervals: $A=(1,5)$ means $1<x<5$, and $B=[3,\\infty)$ means $x\\ge 3$.

Numbers satisfying both inequalities at once need $x\\ge 3$ and $x<5$. The point $3$ itself qualifies ($1<3<5$ and $3\\ge 3$), while $5$ is excluded because $5\\notin A$. So the overlap is $[3,5)$.

From just above $1$ onward there is always coverage: $A$ handles $(1,5)$ and $B$ handles $[3,\\infty)$, which together give

$$A\\cup B=(1,\\infty).$$

The leftover strip $A\\setminus B$ is $(1,3)$, nonempty (for instance $x=2$). That same $2$ shows $A\\nsubseteq B$. A large number such as $10$ sits in $B$ but not in $A$, so reverse inclusion fails too.`,
    tactical_explanations: [
      `**A.** → False

Subsethood $A\\subseteq B$ would need every point of $(1,5)$ to lie in $[3,\\infty)$. The leftover strip $(1,3)$ is nonempty, so the inclusion fails.`,
      `**B.** → True

The overlap recovered above is $3\\le x<5$, the interval $[3,5)$. That is the claimed set.`,
      `**C.** → False

$B=[3,\\infty)$ is unbounded above. Take $x=10$: $10\\ge 3$ puts $10$ in $B$, but $10>5$ so $10\\notin A$. Reverse inclusion fails.`,
      `**D.** → True

The joined interval was $(1,\\infty)$. For any $x>1$, either $1<x<5$ (then $x\\in A$) or $x\\ge 5$ (then $x\\ge 3$, so $x\\in B$). The left endpoint $x=1$ itself sits in neither set.`,
      `**E.** → True

Existence only needs one witness in $A\\setminus B$. Take $x=2$: $1<2<5$ but $2<3$.`,
    ],
  },
  "math-1-26": {
    solution_overview: `Symmetric difference keeps what sits in exactly one of the two sets:

$$A\\triangle B=(A\\setminus B)\\cup(B\\setminus A).$$

With $A=\\{1,2,3,4\\}$ and $B=\\{3,4,5,6\\}$:

| Piece | Result |
| --- | --- |
| $A\\cap B$ | $\\{3,4\\}$ |
| $A\\setminus B$ | $\\{1,2\\}$ |
| $B\\setminus A$ | $\\{5,6\\}$ |
| $A\\triangle B$ | $\\{1,2,5,6\\}$ |

The one-sided differences share nothing, so replacing $\\cup$ by $\\cap$ in the definition collapses to $\\emptyset$. Shared elements $\\{3,4\\}$ are excluded from the symmetric difference.

If the sets were disjoint, each difference would equal the whole set and $A\\triangle B$ would equal $A\\cup B$. Counting-wise, $|A|+|B|$ double-counts the overlap and the symmetric difference throws both copies away:

$$|A\\triangle B|=|A|+|B|-2|A\\cap B|=4+4-2\\cdot 2=4.$$`,
    tactical_explanations: [
      `**A.** → True

The table above ends at $\\{1,2,5,6\\}$, matching the claimed symmetric difference.`,
      `**B.** → False

The definition joins the two one-sided differences by $\\cup$. Their intersection is empty because nothing can be both "only in $A$" and "only in $B$". Here that is $\\{1,2\\}\\cap\\{5,6\\}=\\emptyset$, which is not the four-element set in A.`,
      `**C.** → False

Symmetric difference excludes the overlap. Neither $3$ nor $4$ appears in $\\{1,2,5,6\\}$, so $A\\cap B\\nsubseteq A\\triangle B$.`,
      `**D.** → True

If $A$ and $B$ share nothing, then every member of $A$ misses $B$ and every member of $B$ misses $A$, so $A\\setminus B=A$ and $B\\setminus A=B$. The definition then says $A\\triangle B=A\\cup B$.`,
      `**E.** → True

Each overlap element is counted in both $|A|$ and $|B|$ but is dropped from $A\\triangle B$, so both copies come off. Here $|A|=4$, $|B|=4$, $|A\\cap B|=2$, and $4+4-4=4$, matching the four-element set.`,
    ],
  },
  "math-1-27": {
    solution_overview: `A coverage assignment is an ordered pair $(\\text{rep},\\text{account})$ in the Cartesian product $\\text{Reps}\\times\\text{Accounts}$. First coordinate is the rep, second is the account.

With $5$ reps and $8$ accounts the product rule gives

$$5\\cdot 8=40$$

possible pairs. Hiring a sixth rep, still with $8$ accounts, raises the count to

$$6\\cdot 8=48.$$

If there are $r$ reps and $0$ accounts, the count is $r\\cdot 0=0$: without a second coordinate there is no assignment.

Membership $(r,a)\\in\\text{Reps}\\times\\text{Accounts}$ means $r\\in\\text{Reps}$ and $a\\in\\text{Accounts}$. Swapping the names changes the pair and usually leaves the product entirely.`,
    tactical_explanations: [
      `**A.** → True

The product count recovered above is $40$, matching the claim.`,
      `**B.** → False

The pair $(\\text{Maria},\\text{Account 3})$ puts Maria in the rep slot. Swapping coordinates produces $(\\text{Account 3},\\text{Maria})$, which treats Account 3 as the rep. Those are different objects. Order is essential.`,
      `**C.** → True

Zero accounts means the second slot cannot be filled. For any number $r$ of reps, including $r=5$ or $r=100$, the product is $r\\cdot 0=0$.`,
      `**D.** → False

Membership in $X\\times Y$ always means first factor in $X$, second in $Y$. For $(\\text{Maria},\\text{Account 3})\\in\\text{Reps}\\times\\text{Accounts}$, Maria must be a rep and Account 3 an account. The claim swaps both tests.`,
      `**E.** → True

Six reps and eight accounts give $48$ pairs, as computed above. Equivalently the new rep adds $8$ new pairs to the old $40$.`,
    ],
  },
  "math-1-28": {
    solution_overview: `The frost rule $T^2<16$ holds exactly when $-4<T<4$. Both boundaries fail, because $(-4)^2=4^2=16$ and $16$ is not less than $16$, so

$$A=(-4,4).$$

Irrigation $T\\ge-1$ allows $-1$ itself, so $B=[-1,\\infty)$.

A temperature in both must satisfy $-4<T<4$ and $T\\ge-1$. Keep the tighter limit at each end: lower limit $-1$ (included, since $(-1)^2=1<16$), upper limit $4$ (excluded).

$$A\\cap B=[-1,4).$$

$A$ covers $(-4,4)$ and $B$ carries on upward from $-1$, so together they reach every temperature above $-4$:

$$A\\cup B=(-4,\\infty).$$

Nothing at $-4$ or colder is covered. The complement of $A$ therefore collects both outer rays *and* the two endpoints $A$ missed:

$$A^c=(-\\infty,-4]\\cup[4,\\infty).$$

Subtracting irrigation from frost-safe temperatures leaves the cold-yet-safe slice $A\\setminus B=(-4,-1)$.`,
    tactical_explanations: [
      `**A.** → True

The overlap recovered above is $[-1,4)$. That is the claimed interval.`,
      `**B.** → False

Belonging to $A\\cap B$ needs both memberships. The temperature $4$ satisfies $4\\ge-1$, so it is in $B$, but $4^2=16$ is not less than $16$, so $4\\notin A$. Failing one half is enough. The same open right end of $[-1,4)$ excludes $4$.`,
      `**C.** → False

Writing $T<-4$ or $T>4$ quietly discards the two boundary temperatures. $A$ excluded them, so the complement has to collect them: $A^c=(-\\infty,-4]\\cup[4,\\infty)$. Explicitly $(-4)^2=16$ is not $<16$, so $-4\\notin A$, and likewise $4\\notin A$; both must land in $A^c$. The claimed set leaves those two points out.`,
      `**D.** → False

The union only reaches $(-4,\\infty)$. Take $T=-5$: it is not frost-safe ($25\\ge 16$) and not irrigating ($-5<-1$), yet it is a real number. One missing real is enough to show $A\\cup B\\ne\\mathbb{R}$. The same gap covers the whole ray $(-\\infty,-4]$.`,
      `**E.** → True

The leftover slice $A\\setminus B=(-4,-1)$ is nonempty. At $T=-2$ we have $(-2)^2=4<16$, so the vines are frost-safe, and $-2<-1$, so irrigation stays off.`,
    ],
  },
  "math-1-29": {
    solution_overview: `Two customer groups overlap, so split the $200$ people into the four regions of a two-set picture.

The $50$ who like both were already counted inside the $120$ and again inside the $90$. Counting them once instead of twice is inclusion-exclusion:

$$|A\\cup B|=|A|+|B|-|A\\cap B|=120+90-50=160.$$

Subtracting the overlap from each group:

| Region | Meaning | Count |
| --- | --- | --- |
| A only | likes A, not B | $120-50=70$ |
| Both | likes A and B | $50$ |
| B only | likes B, not A | $90-50=40$ |
| Neither | likes no product | $200-160=40$ |

The four regions total $70+50+40+40=200$, the whole survey.

A warning about the headline totals: $120+90=210$ exceeds the $200$ people surveyed by $10$. That excess proves the overlap is *at least* $10$; it does not measure the overlap, which the problem itself fixes at $50$.`,
    tactical_explanations: [
      `**A.** → False

A total of $170$ would mean only $40$ of the double-counted customers had been removed. All $50$ must go: the union is $160$, not $170$. The trap is treating $|A|+|B|-40$ as if only the excess over $200$ needed deleting.`,
      `**B.** → True

"Neither" is whatever the survey has left once the union is taken away: $200-160=40$.`,
      `**C.** → False

The $120$ who like Product A already contain the $50$ who like both, so A-only is $120-50=70$, not $90$. The figure $90$ would be right only if the two products shared no customers at all.`,
      `**D.** → True

Being in $A\\cap B$ means liking A *and* liking B, so each of those $50$ customers is automatically one of the $120$ in $A$. That is all $\\subseteq$ asks for.`,
      `**E.** → False

With only $200$ customers available, $120+90=210$ forces at least $10$ of them to be shared, but nothing prevents a larger overlap, and the survey reports $50$. The excess $|A|+|B|-200=10$ is only a floor on $|A\\cap B|$; any overlap from $10$ up to $\\min(120,90)=90$ could fit the headline counts.`,
    ],
  },
  "math-1-30": {
    solution_overview: `Everything here is settled by reading the three lists side by side: $A=\\{1,2,3,4\\}$, $B=\\{3,4,5,6\\}$, $C=\\{7,8,9\\}$.

Only $3$ and $4$ are written in both $A$ and $B$, and $C$ shares nothing with $A$ at all.

$$A\\cap B=\\{3,4\\}.$$

$$A\\cup B=\\{1,2,3,4,5,6\\}.$$

$$A\\setminus B=\\{1,2\\}.$$

$$B\\setminus A=\\{5,6\\}.$$

$$A\\cap C=\\emptyset.$$

The two differences point in opposite directions: subtracting sets, like subtracting numbers, is not reversible. An empty overlap is exactly what disjoint means.`,
    tactical_explanations: [
      `**A.** → True

The combined list is $\\{1,2,3,4,5,6\\}$: $A$ contributes $1,2,3,4$ and $B$ adds the new numbers $5,6$. That is the claimed union.`,
      `**B.** → True

The shared part recovered above is $\\{3,4\\}$. Walking $A$ against $B$: $1\\notin B$, $2\\notin B$, $3\\in B$, $4\\in B$.`,
      `**C.** → True

Difference $A\\setminus B$ keeps members of $A$ that miss $B$. Deleting the shared $3$ and $4$ from $\\{1,2,3,4\\}$ leaves $\\{1,2\\}$.`,
      `**D.** → False

Swapping the order changes the leftovers: $A\\setminus B=\\{1,2\\}$ while $B\\setminus A=\\{5,6\\}$. Those two sets share nothing, so they are not equal. Set difference is not commutative.`,
      `**E.** → True

Walk $C=\\{7,8,9\\}$ against $A$: $7\\notin A$, $8\\notin A$, $9\\notin A$. Empty intersection is the definition of disjoint.`,
    ],
  },
});
