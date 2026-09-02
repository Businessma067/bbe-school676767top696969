import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-21": {
    tactical_explanations: [
      "**A.** → True\n\nEvery positive even is already a natural number, so $H\\subseteq\\mathbb N$. The overview recorded that inclusion before asking whether it is proper. Subsethood does not require $H$ to contain the odds; it only requires that nothing in $H$ sit outside $\\mathbb N$. A counterexample would have to be a positive even that was not a natural, and there is none.",
      "**B.** → False\n\nIf $H$ were finite it would have a largest even $2N$, but $2(N+1)$ is still in $H$ and strictly larger. The list $2,4,6,\\ldots$ never ends, so $H$ is infinite. Finiteness is not inherited from being a subset of $\\mathbb N$; $\\mathbb N$ itself is infinite, and so is this subset.",
      "**C.** → False\n\nEquality needs the same members. Odd $1$ sits in $\\mathbb N$ and is not even, so $1\\in\\mathbb N\\setminus H$. That single witness forces $H\\ne\\mathbb N$ even though $H\\subseteq\\mathbb N$. $H=\\mathbb N$ would require every natural to be even.",
      "**D.** → True\n\n$f(n)=2n$ is one-to-one ($2n=2m$ forces $n=m$) and onto $H$ (every positive even is $f$ of half of it). That is a bijection $\\mathbb N\\to H$, which is what \"pairs every natural with exactly one even and vice versa\" says. The formula always outputs an even, so the codomain really is $H$, not $\\mathbb N$.",
      "**E.** → False\n\nProper inclusion is true: odds such as $1$ are missing. The same bijection still forces $|H|=|\\mathbb N|$. Same cardinality with a proper subset is why \"strictly fewer\" fails for infinite sets. The slogan is a finite-set habit; it would hold if $H$ were finite, which letter B already denied.",
    ],
  },
  "math-1-22": {
    tactical_explanations: [
      "**A.** → True\n\n$K$ lists two objects: the bare $a$, and the singleton $\\{a\\}$. Membership $a\\in K$ is the first of those. Braces matter: this letter asks about the unwrapped object, not about $\\{a\\}$. The two questions part company in general; here both happen to be true, which is the point of this $K$.",
      "**B.** → True\n\nThe second listed object is $\\{a\\}$ itself, so $\\{a\\}\\in K$. That is membership of a set-object, not subsethood. A roster that listed only $a$ would make this false. The extra braces on the second member are what make $K$ unusual.",
      "**C.** → True\n\n$\\{a\\}\\subseteq K$ asks whether $a\\in K$, and letter A already placed $a$ on the roster. Subsethood of a singleton is membership of its unique element. This is a different question from $\\{a\\}\\in K$, though that happens to be true here as well. In a set such as $\\{a\\}$ the $\\in$ version would fail while this $\\subseteq$ version still held.",
      "**D.** → True\n\n$\\{\\{a\\}\\}\\subseteq K$ asks whether $\\{a\\}\\in K$, which is letter B. One extra pair of braces shifts the test from $a$ to $\\{a\\}$. Miscounting braces here is the usual error: testing $a\\in K$ instead of $\\{a\\}\\in K$ answers letter C, not this one.",
      "**E.** → True\n\nThe two listed objects are different: an element and a one-element set containing that element. Two distinct members give $|K|=2$. Collapsing them because \"they both mention $a$\" would report $|K|=1$ and destroy every $\\in$ distinction the other letters use.",
    ],
  },
  "math-1-23": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already has $A\\cup B=\\{1,\\ldots,8\\}$, so $(A\\cup B)^c=\\{9,10\\}$ inside $U=\\{1,\\ldots,10\\}$. Those two sit in neither input. Including $8$ would require $8\\notin B$, which is false. Complement of a union is \"outside both.\"",
      "**B.** → True\n\nDe Morgan's first law is the overview's identity $(A\\cup B)^c=A^c\\cap B^c=\\{9,10\\}$. $6,7,8$ miss $A$ but sit in $B$, so they fail $B^c$. Intersecting complements is stricter than taking $A^c$ alone. The two sides matching is the law, not a new walk through $U$.",
      "**C.** → True\n\nSecond identity: $(A\\cap B)^c=A^c\\cup B^c=\\{1,2,3,6,7,8,9,10\\}$. Escaping an intersection takes only escaping one set, so the union of complements is large. Copying $(A\\cup B)^c$ here would undercount to $\\{9,10\\}$.",
      "**D.** → False\n\n$A\\cap B=\\{4,5\\}$, not $\\{4,5,6\\}$. The extra $6$ sits in $B$ and misses $A$. Padding an intersection with a neighbour of the overlap is the same trap as treating nearness as membership. $A$ would have to list $6$ for that extra element to survive.",
      "**E.** → False\n\nOnce $A\\cap B=\\{4,5\\}$, the complement in $U$ must drop $4$ and $5$ and keep everything else, including $6,7,8$. The claimed list keeps $4$ and $5$ while omitting $6,7,8$: the opposite of a complement. Complement of the overlap cannot contain the overlap.",
    ],
  },
  "math-1-24": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview listed six (number, letter) pairs, matching $2\\cdot 3=6$. Product size is cells, not the five distinct symbols. $(1,x)$ and $(2,x)$ are different cells even though they share a letter.",
      "**B.** → True\n\n$(2,x)$ has first slot in $A=\\{1,2\\}$ and second in $B=\\{x,y,z\\}$. Both tests succeed, and the pair appears on the overview's list. Swapping the slots would leave this product.",
      "**C.** → False\n\n$(x,2)$ starts with a letter, and $x\\notin A$. Ordered pairs treat $(2,x)$ and $(x,2)$ as different objects; the second lives in $B\\times A$. Having both symbols available somewhere is not enough unless they sit in the required slots.",
      "**D.** → False\n\n$(2,x)\\in A\\times B$ but $2\\notin B$, so that pair cannot sit in $B\\times A$. Different members mean unequal sets, even though both products have size $6$. Equal cardinality never forces equal Cartesian products when the factor order flips.",
      "**E.** → True\n\n$2\\cdot 3=6$ and $3\\cdot 2=6$. Counts agree; member lists do not. Size equality is the product rule, which is commutative. Set equality of $A\\times B$ with $B\\times A$ would need $A=B$ (or a degenerate empty factor), which these two sets are not.",
    ],
  },
  "math-1-25": {
    tactical_explanations: [
      "**A.** → False\n\n$A=(1,5)$ and $B=[3,\\infty)$. Subsethood would need every point of $(1,5)$ to satisfy $x\\ge 3$. The leftover strip $(1,3)$ is the obstruction; $x=2$ sits in $A$ and misses $B$. The inclusion would hold if $A$ had started at $3$.",
      "**B.** → True\n\nThe overview already tightened both inequalities to $[3,5)$. The lower end $3$ is closed because $3\\in A$ and $3\\in B$; the upper end $5$ stays open because $5\\notin A$. Closing $5$ would include a point $A$ excluded. Opening $3$ would throw out a point both sets contain.",
      "**C.** → False\n\n$B$ is unbounded above, so it contains numbers far past $A$. Witness $x=10$: in $B$, not in $A$. Reverse inclusion would require $B$ to stop at $5$, which $[3,\\infty)$ does not. One large witness kills $B\\subseteq A$.",
      "**D.** → True\n\nFrom just above $1$ onward there is always coverage: $A$ handles $(1,5)$, $B$ handles $[3,\\infty)$. So $A\\cup B=(1,\\infty)$. The point $1$ itself is excluded from both inputs, matching the open left end. Including $1$ would require one of the two sets to contain it, and neither does.",
      "**E.** → True\n\n$A\\setminus B=(1,3)$, which is nonempty. Explicitly $x=2$ satisfies $1<2<5$ but $2<3$. One witness is all an existence claim needs. The leftover strip would vanish only if $A$ had started at $3$, which is the failed inclusion in A.",
    ],
  },
  "math-1-26": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview's table already joined the two leftovers into $A\\triangle B=\\{1,2,5,6\\}$. Shared $3,4$ sit in both original sets, so they are excluded. Symmetric difference is \"exactly one,\" not \"at least one.\" Including $3$ would rebuild the union.",
      "**B.** → False\n\nThe definition joins the leftovers by $\\cup$, not $\\cap$. Those leftovers $\\{1,2\\}$ and $\\{5,6\\}$ are disjoint, so replacing union by intersection collapses to $\\emptyset$, contradicting the four-element set in A. Outer buckets of a Venn diagram never overlap.",
      "**C.** → False\n\nSymmetric difference *excludes* the overlap. $A\\cap B=\\{3,4\\}$ shares nothing with $\\{1,2,5,6\\}$. So $A\\cap B\\nsubseteq A\\triangle B$. The inclusion would hold only if the overlap were empty, which is the disjoint case in D.",
      "**D.** → True\n\nIf $A$ and $B$ share nothing, then $A\\setminus B=A$ and $B\\setminus A=B$, so $A\\triangle B=A\\cup B$. There is no middle bucket to discard. This is a general identity, not a scan of the given lists; the given lists are *not* disjoint, which is why A and the union differ.",
      "**E.** → True\n\n$|A|+|B|$ double-counts the overlap, and $A\\triangle B$ throws both copies away:\n\n$$|A\\triangle B|=4+4-2\\cdot 2=4.$$\n\nThat matches the four-element set in A. Subtracting the overlap only once would give the union size $6$ instead.",
    ],
  },
  "math-1-27": {
    tactical_explanations: [
      "**A.** → True\n\nAn ordered pair (rep, account) is a cell in a $5$ by $8$ grid, so $5\\cdot 8=40$ coverage assignments. Product size is cells, not $5+8=13$. Each rep can be paired with each account independently.",
      "**B.** → False\n\nCoverage pairs are ordered: first slot is the rep, second is the account. $(\\text{Maria},\\text{Account 3})$ and $(\\text{Account 3},\\text{Maria})$ are different objects; the second treats Account 3 as the rep. Order is the whole point of a Cartesian product. Commutativity would hold only if the two coordinates were the same type and the pair happened to be a diagonal, which this is not.",
      "**C.** → True\n\nZero accounts means the second factor is empty, so $r\\cdot 0=0$ for any number $r$ of reps. Without a second coordinate there is no ordered pair. Hiring more reps cannot create an account slot that does not exist.",
      "**D.** → False\n\nMembership $(r,a)\\in\\text{Reps}\\times\\text{Accounts}$ means $r\\in\\text{Reps}$ and $a\\in\\text{Accounts}$. The claim swaps both tests. That swapped reading would put Maria among the accounts, which is the same slot-reversal as letter B.",
      "**E.** → True\n\nSix reps and eight accounts: $6\\cdot 8=48$. Equivalently the new rep adds eight new pairs to the old forty. The product rule scales with either factor; growing the first factor by one multiplies by the second factor, not by $1$.",
    ],
  },
  "math-1-28": {
    tactical_explanations: [
      "**A.** → True\n\nThe overview already tightened both interval rules to $A\\cap B=[-1,4)$. The left end is closed because $-1$ passes frost-safe ($1<16$) and irrigation ($-1\\ge-1$); the right end stays open because $4^2=16$ is not strictly less than $16$. Closing $4$ would include a temperature $A$ rejects.",
      "**B.** → False\n\n$4$ sits in $B$ but fails $T^2<16$, so $4\\notin A$ and therefore $4\\notin A\\cap B$. The claimed interval $[-1,4)$ is open at $4$ for the same reason. Being in $B$ alone never rescues a temperature that $A$ rejects. The endpoint $4$ is the whole issue.",
      "**C.** → False\n\n$A=(-4,4)$ already excluded $\\pm 4$, so the complement must *collect* them: $A^c=(-\\infty,-4]\\cup[4,\\infty)$. The claimed strict inequalities $T<-4$ or $T>4$ discard those two boundary temperatures. Open-interval complements are closed on the outside; flipping both inequalities to strict is the classic miswrite.",
      "**D.** → False\n\n$A\\cup B=(-4,\\infty)$, not all of $\\mathbb R$. Take $T=-5$: not frost-safe ($25\\ge 16$) and not irrigating ($-5<-1$). One missing real is enough. The whole ray $(-\\infty,-4]$ lies outside both pieces, so the union never reaches the far cold.",
      "**E.** → True\n\n$A\\setminus B=(-4,-1)$, frost-safe yet dry. At $T=-2$ we have $4<16$ and $-2<-1$, so irrigation stays off. One witness is enough. That leftover slice would vanish if irrigation started at $-4$ instead of $-1$.",
    ],
  },
  "math-1-29": {
    tactical_explanations: [
      "**A.** → False\n\nInclusion-exclusion removes the whole overlap once: $120+90-50=160$, not $170$. The $170$ subtracts only $40$, as if only the excess over $200$ needed deleting. The correct subtraction is the given $50$. Union size $170$ would also make \"neither\" equal $30$, disagreeing with the four-region split.",
      "**B.** → True\n\nNeither is survey minus union: $200-160=40$. That leftover is whatever the $200$ still have after $160$ likers are placed. Using the false $170$ from A would report $30$ instead. The overview's four regions $70+50+40+40=200$ confirm this $40$.",
      "**C.** → False\n\nA-only is $120-50=70$, not $90$. The $90$ would be right only if the products shared nobody. Using $90$ for A-only would invent ten phantom customers and fail to rebuild the union $160$. Peel the overlap out of $A$, do not copy $|B|$.",
      "**D.** → True\n\nThe $50$ who like both already sit inside the $120$ who like $A$. That is all $A\\cap B\\subseteq A$ asks, and it holds for any pair of sets, whatever the numbers. Intersection is always a subset of each factor; the survey figures are not needed for this one.",
      "**E.** → False\n\n$120+90=210$ exceeds $200$ by $10$, which is only a *floor* on the overlap, not an exact value. Any overlap from $10$ up to $\\min(120,90)=90$ could fit the headlines, and the survey already reports $50$. \"Exactly $10$\" confuses a lower bound with a measurement.",
    ],
  },
  "math-1-30": {
    solution_overview:
      "Only $3$ and $4$ are written in both $A=\\{1,2,3,4\\}$ and $B=\\{3,4,5,6\\}$, and $C=\\{7,8,9\\}$ shares nothing with $A$ at all. From that single comparison every operation follows.\n\n$A\\cap B=\\{3,4\\}$, the shared part (**intersection**).\n\n$A\\cup B=\\{1,2,3,4,5,6\\}$, everything from either list, repeats written once (**union**).\n\n$A\\setminus B=\\{1,2\\}$, $A$ after deleting the shared part (**difference**).\n\n$B\\setminus A=\\{5,6\\}$, $B$ after deleting the same shared part.\n\n$A\\cap C=\\emptyset$, nothing in common, which is exactly what **disjoint** means.\n\nNotice that the two differences point in opposite directions: subtracting sets, like subtracting numbers, is not reversible.",
    tactical_explanations: [
      "**A.** → True\n\nThe overview already joined $A$ and $B$ into $\\{1,2,3,4,5,6\\}$. $5$ and $6$ are $B$'s newcomers; $3$ and $4$ are not second copies. Union keeps every tagged number once. Stopping at $4$ would throw $5$ and $6$ away.",
      "**B.** → True\n\nShared numbers are $3$ and $4$ only. $1,2$ miss $B$, and $5,6$ miss $A$. Intersection is that overlap, not the combined six-number list. A union-minded scan would report six instead of two.",
      "**C.** → True\n\n$A\\setminus B$ is $A$ after deleting the shared pair, so $\\{1,2\\}$. Difference deletes a member of $A$ only when it also sits in $B$. Dropping $2$ because it sits next to $3$ would be treating nearness as membership.",
      "**D.** → False\n\n$B\\setminus A=\\{5,6\\}$, while $A\\setminus B=\\{1,2\\}$. The two leftovers share nothing, so they are not equal. Difference is not commutative: the two private regions are opposite sides of the overlap. Equality would hold only if those private regions were the same set.",
      "**E.** → True\n\n$C=\\{7,8,9\\}$ shares nothing with $A=\\{1,2,3,4\\}$, so $A\\cap C=\\emptyset$. Disjointness is that empty overlap. A single shared number such as $4\\in C$ would kill it; none of $7,8,9$ appears in $A$.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/21_08.json",
  patches
);
console.log("21_08 edited", n);
