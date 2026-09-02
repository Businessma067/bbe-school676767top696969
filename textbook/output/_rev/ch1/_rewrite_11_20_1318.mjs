import { patchFile } from "../_apply_1318.mjs";

patchFile("ch1/11_20.json", {
  "math-1-11": {
    solution_overview: `Let $A=\\{1,2,3,4,5,6\\}$. A collection of blocks partitions $A$ only when all three hold: every block is nonempty, the blocks are pairwise disjoint, and their union equals $A$.

Block count is free: one block $\\{A\\}$ and six singletons are both legal partitions of a six-element set. A shared member in two blocks, or a hole in the union, is enough to disqualify a candidate.`,
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
  },
  "math-1-12": {
    solution_overview: `Let $A$ be a set with $|A|=5$. Each subset is an include-or-exclude choice for every element, so the power set has size $2^{|A|}$.

Proper subsets drop $A$ itself. Nonempty subsets drop $\\emptyset$. Subsets of a fixed size $k$ are counted by $\\binom{5}{k}$.`,
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
  },
  "math-1-13": {
    solution_overview: `Translate the brackets into inequalities. $A=(0,10]$ means $0<x\\le 10$, and $B=[5,15)$ means $5\\le x<15$.

Intersection takes the tighter bounds that satisfy both. Union takes the outer bounds that satisfy at least one, without closing an endpoint that both inputs excluded. Difference $A\\setminus B$ is the part of $A$ that $B$ has not yet started.`,
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
  },
  "math-1-14": {
    solution_overview: `A survey of $150$ tourists has $|A|=80$, $|B|=70$, $|C|=60$, pair totals $|A\\cap B|=30$, $|B\\cap C|=25$, $|A\\cap C|=20$, and triple overlap $|A\\cap B\\cap C|=10$.

Three-set inclusion-exclusion counts the union by adding the headlines, subtracting the pair totals, then adding the triple back once:

$$\\lvert A\\cup B\\cup C\\rvert=\\lvert A\\rvert+\\lvert B\\rvert+\\lvert C\\rvert-\\lvert A\\cap B\\rvert-\\lvert B\\cap C\\rvert-\\lvert A\\cap C\\rvert+\\lvert A\\cap B\\cap C\\rvert$$

Pair totals still include the triple visitors. An exact-pair region subtracts the triple; an only-$A$ region subtracts both pair totals and adds the triple back once.`,
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
  },
  "math-1-15": {
    solution_overview: `Let $N=\\{1,2,3,\\ldots\\}$ and $E=\\{2,4,6,\\ldots\\}$. For finite sets a proper subset is strictly smaller. For infinite sets, equal cardinality means a bijection exists, even if one set sits properly inside the other.

The map $f(n)=2n$ is the standard pairing of each natural with an even. A different target (the odds) needs a different formula.`,
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
  },
  "math-1-16": {
    solution_overview: `Let $A=\\{2,4,6,8,10,12\\}$, six even numbers and nothing else.

Membership $x\\in A$ asks whether $x$ is one of those six numbers. Subsethood $S\\subseteq A$ asks whether every member of $S$ is one of those numbers. The two questions disagree as soon as the left-hand object is a set rather than a number.

A set of $n$ elements has $2^n$ subsets. Proper subsets drop $A$ itself.`,
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
  },
  "math-1-17": {
    solution_overview: `Let $A=\\{x\\in\\mathbb{Z}:x^2-5x+6=0\\}$ and $B=\\{2,3\\}$.

Solve the quadratic first, then keep those roots that lie in the named universe. The same equation with a tighter universe, or with an extra inequality, produces a different set.`,
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
  },
  "math-1-18": {
    solution_overview: `Let $D=\\{w,x,y,z\\}$. Four letters mean $2^4$ subsets, which is the size of the power set $\\mathcal P(D)$.

A set $S$ belongs to $\\mathcal P(D)$ precisely when $S\\subseteq D$. Subsets of a fixed size $k$ are counted by $\\binom{4}{k}$.`,
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
  },
  "math-1-19": {
    solution_overview: `Let $E=\\{1,2,3\\}$ and $F=\\{1,2,3,4\\}$.

Ordinary inclusion $X\\subseteq Y$ asks whether every member of $X$ sits in $Y$. Proper inclusion $X\\subsetneq Y$ needs that inclusion and $X\\ne Y$. Subsethood is not symmetric. Ordinary self-inclusion always holds; proper self-inclusion would need $X\\ne X$.`,
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
  },
  "math-1-20": {
    solution_overview: `Let $G=\\{1,2,3,4,5,6\\}$ and $\\mathcal S=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$.

A collection partitions $G$ when the blocks are nonempty subsets of $G$, pairwise disjoint, and their union equals $G$. An overlap, a hole, or an outsider smuggled into a block is enough to fail.`,
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
  },
});
