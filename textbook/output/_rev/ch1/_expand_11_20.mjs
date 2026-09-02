import path from "node:path";
import { fileURLToPath } from "node:url";
import { applyExpand } from "./_expand_apply.mjs";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "11_20.json");

const P = {
  "math-1-11": {
    ov: `**Part 1.** The set.

$A=\\{1,2,3,4,5,6\\}$. A collection partitions $A$ only when all three hold: every block nonempty, blocks pairwise disjoint, union equals $A$.

**Part 2.** The operations.

Block count is free: $\\{A\\}$ is a $1$-block partition, and six singletons is a $6$-block partition. For any set with $n\\ge 2$ elements those two constructions are different, so more than one partition always exists.

**Part 3.** The scans.

**Case $P=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$.** Pairs use distinct numbers and cover everything.

**Case $Q=\\{\\{1,2,3\\},\\{3,4,5,6\\}\\}$.** Blocks share $3$, fails pairwise disjointness.

**Case $R=\\{\\{1,2\\},\\{3,4\\},\\{5\\}\\}$.** Union misses $6$, fails coverage.`,
    letters: [
      `**A.** → True\n\nThe three pairs use distinct numbers and cover $A$. The overview already checked all three partition demands: nonempty blocks, empty pairwise intersections, union $A$. This letter reads that pass, not a new scan.\n\nThe trap is to require singletons, or equal block sizes. The definition never asks for those.\n\nThe recovered $P$ is a partition, so the statement is True.`,
      `**B.** → False\n\nBlock count is free. The overview already named two valid partitions of this six-element $A$: the one-block $\\{A\\}$ and the six-singleton partition. Forcing the number of blocks to equal $n$ would ban clumping, which the definition never does.\n\n**1.** A partition is a covering by nonempty disjoint blocks. It does not mention a preferred block count.\n\n**2.** The false figure is "six elements, so six blocks." That describes only the discrete partition, one among many.\n\n**3.** What would make the claim true? Nothing, as a general rule. Already this $A$ has at least two partitions with different block counts.\n\nThe recovered examples disagree in block count, so the statement is False.`,
      `**C.** → False\n\n$Q$ fails pairwise disjointness: the two blocks share $3$. The overview already recorded that broken condition. One failure disqualifies a partition, even though the union still equals $A$.\n\n**1.** Pairwise disjointness is not optional. Shared $3$ is a concrete witness that the blocks overlap.\n\n**2.** Coverage can hold while disjointness fails. Here it does. Checking only the union is how this false partition gets written.\n\n**3.** What would make $Q$ a partition? The shared $3$ would have to sit in only one block. The given blocks both contain it.\n\nThe recovered overlap $\\{3\\}$ kills the collection, so the statement is False.`,
      `**D.** → False\n\n$R$'s blocks are nonempty and disjoint, but the union is $\\{1,2,3,4,5\\}$, which misses $6\\in A$. The overview already flagged that hole. Coverage is the third partition demand, and a hole kills it.\n\nThe trap is to stop after checking disjointness. Two out of three is not a partition.\n\nThe recovered union misses $6$, so the statement is False.`,
      `**E.** → True\n\nFor this $A$ with $n=6\\ge 2$, the one-block partition and the six-singleton partition are two different partitions. The overview already named both constructions. The same two work for any set with at least two elements.\n\nThe trap is to think a set has only its discrete partition, or only $\\{A\\}$. Both exist as soon as $n\\ge 2$.\n\nTwo recovered partitions exist, so the statement is True.`,
    ],
  },
  "math-1-12": {
    ov: `**Part 1.** The set.

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
    letters: [
      `**A.** → True\n\nEach of five elements is an independent include-or-exclude, so the overview recovered $2^5=32$ subsets. This letter reads that count.\n\nThe trap is $5^2=25$, or $2\\times 5=10$, or $31$ by dropping the empty set. The power-set count includes $\\emptyset$ and $A$.\n\nThe recovered total is $32$, so the statement is True.`,
      `**B.** → True\n\nProper subsets are all subsets except $A$ itself. The overview already computed $32-1=31$.\n\nThe trap is to drop both $A$ and $\\emptyset$ and report $30$, mixing proper with nonempty. Proper allows $\\emptyset$ and forbids only $A$.\n\nThe recovered proper count is $31$, so the statement is True.`,
      `**C.** → False\n\nChoosing $4$ out of $5$ is choosing which one element to omit. The overview recovered $\\binom{5}{4}=5$, not $10$. The $10$ looks like $\\binom{5}{2}$, the two-element count.\n\n**1.** Five choices of which one letter to leave out give five four-element subsets.\n\n**2.** The false figure $10$ is a real binomial, the wrong one. Size $2$ is not size $4$. Also $\\binom{5}{4}=\\binom{5}{1}=5$, by symmetry, not $10$.\n\n**3.** Doubling $5$ by order would treat subsets as ordered tuples. Sets do not remember order.\n\nWhat would make $10$ honest? A different size, namely $2$. The claim asked for size $4$.\n\nThe recovered four-element count is $5$, so the statement is False.`,
      `**D.** → True\n\nNonempty subsets drop only $\\emptyset$, leaving $32-1=31$. The overview already recorded that count. It happens to match the proper count, because both drop one subset, but they drop different subsets: nonempty drops $\\emptyset$, proper drops $A$.\n\nThe trap is to think those two families are the same collection. They are the same size and not the same sets.\n\nThe recovered nonempty count is $31$, so the statement is True.`,
      `**E.** → False\n\nEven sizes $0,2,4$ add as $1+10+5=16$, not $15$. The overview already summed those binomials. For any finite set the even-sized and odd-sized subsets are equally many, here $16$ and $16$.\n\n**1.** $\\binom{5}{0}=1$, $\\binom{5}{2}=10$, $\\binom{5}{4}=5$. The sum is $16$.\n\n**2.** The false figure $15$ is one short, as if someone dropped the empty set from the even family. Size $0$ is even.\n\n**3.** Half of $32$ is $16$, not $15$. Odd sizes $1,3,5$ also sum to $16$.\n\nWhat would make $15$ honest? Nothing in this count. Dropping $\\emptyset$ would be a different, unasked family.\n\nThe recovered even-size count is $16$, so the statement is False.`,
    ],
  },
  "math-1-13": {
    ov: `**Part 1.** The sets.

Translate brackets into inequalities first.

$$A=(0,10]\\iff 0<x\\le 10,\\qquad B=[5,15)\\iff 5\\le x<15.$$

**Part 2.** The operations.

Intersection takes the tighter bounds. Union runs from the leftmost open end to the rightmost open end. Difference $A\\setminus B$ keeps points of $A$ that miss $B$. The implication $x\\in A\\Rightarrow x\\in B$ for all $x$ is $A\\subseteq B$.

**Part 3.** The scans.

Both at once: $5\\le x\\le 10$, i.e. $[5,10]$. Either: from just above $0$ up to just below $15$, i.e. $(0,15)$. Note $15$ is excluded because $B$ excludes it. In $A$ but not $B$: $0<x<5$, i.e. $(0,5)$. So $10$ sits in the intersection, while $5$ is in $B$ and therefore not in $A\\setminus B$. Any witness in $(0,5)$, say $x=1$, breaks $A\\subseteq B$.`,
    letters: [
      `**A.** → True\n\nA point sits in both intervals when the tighter bounds $5\\le x\\le 10$ hold. The overview already recovered $A\\cap B=[5,10]$. Both endpoints survive: $5$ is the closed left end of $B$ and sits in $A$, and $10$ is the closed right end of $A$ and sits in $B$.\n\nThe trap is to write $(5,10)$ by opening both ends, or $[5,10)$ by copying $B$'s open right end onto $10$.\n\nThe recovered intersection is $[5,10]$, so the statement is True.`,
      `**B.** → False\n\nUnion runs from just above $0$ to just below $15$, so $(0,15)$, not $(0,15]$. The overview already excluded $15$: it fails $x<15$ in $B$ and fails $x\\le 10$ in $A$. A union cannot include a point that both inputs excluded.\n\n**1.** The right end of the union is the more inclusive of the two right ends, but $B$ is open at $15$ and $A$ never reaches $15$. So $15$ is out.\n\n**2.** The false figure $(0,15]$ pads a closed $15$ onto an open end. Off-by-one at a bracket is still a membership error.\n\n**3.** What would make $(0,15]$ honest? $B$ would have to be $[5,15]$. The given $B$ is $[5,15)$.\n\nThe recovered union is $(0,15)$, so the statement is False.`,
      `**C.** → True\n\n$10$ is the right endpoint of $A=(0,10]$, hence $10\\in A$. Also $5\\le 10<15$, hence $10\\in B$. Both memberships hold, so $10$ sits in the recovered intersection $[5,10]$.\n\nThe trap is to treat $10$ as open because $B$ is open at $15$, a different end.\n\nThe recovered intersection contains $10$, so the statement is True.`,
      `**D.** → False\n\n$A\\setminus B$ keeps points of $A$ that miss $B$. The overview recovered that leftover as $(0,5)$. The point $5$ sits in $A$ and in $B$ (it is $B$'s closed left end), so difference deletes it.\n\n**1.** Difference requires $5\\notin B$. But $5$ is the closed left end of $B$, so $5\\in B$.\n\n**2.** The false figure is a closed leftover that keeps the boundary $5$. That boundary belongs to the overlap, not to the difference.\n\n**3.** What would make $5\\in A\\setminus B$? $B$ would have to be open at $5$. The given $B$ is $[5,15)$.\n\nThe recovered leftover is $(0,5)$, so the statement is False.`,
      `**E.** → False\n\nThe universal implication $x\\in A\\Rightarrow x\\in B$ is $A\\subseteq B$. Any witness in $(0,5)$ breaks it: $x=1$ is in $A$ and below $B$'s left end. The overview already named that leftover interval as the set of counterexamples.\n\nOne counterexample kills a universal claim. The trap is to check only the overlap $[5,10]$ and ignore the $A$-only tail.\n\nThe recovered leftover $(0,5)$ is nonempty, so the statement is False.`,
    ],
  },
  "math-1-14": {
    ov: `**Part 1.** The sets.

Three-set survey with $|A|=80$, $|B|=70$, $|C|=60$, pair totals $\\{30,25,20\\}$, and triple overlap $10$, among $150$ tourists.

**Part 2.** The operations.

Inclusion-exclusion for the union adds headlines, subtracts pair totals, adds the triple back. Pair totals still include the triple visitors, so exact-pair regions subtract $10$. Only-$A$ subtracts both pair totals from $80$, then adds the triple back once. At least two museums is three exact pairs plus the triple.

**Part 3.** The scans.

$$|A\\cup B\\cup C|=80+70+60-30-25-20+10=145.$$

Then none is $150-145=5$. Exact-pair regions are $30-10=20$, $25-10=15$, $20-10=10$. Only-$A$: $80-30-20+10=40$. At least two museums: $20+15+10+10=55$.`,
    letters: [
      `**A.** → False\n\nInclusion-exclusion on the given counts is $145$, not $155$. The overview already recovered the union $145$. The $155$ overshoots both the formula and the survey size $150$.\n\nThe trap is to add $80+70+60-10=200-10$ or to forget the $+10$ after subtracting three pairs, landing near $135$, or to add $10$ twice.\n\nThe recovered union is $145$, so the statement is False.`,
      `**B.** → True\n\nNone is survey size minus the union. The overview already formed the union $145$ and left $150-145=5$.\n\nThe trap is $150-80-70-60$ going largely negative, or using the false union $155$ and getting a negative leftover.\n\nThe recovered none-region has $5$ tourists, so the statement is True.`,
      `**C.** → False\n\nThe pair total $30$ still includes the $10$ who also saw $C$. Exact $A$ and $B$ not $C$ is $30-10=20$, not $30$. The overview already recorded that exact-pair region as $20$.\n\n**1.** "Both $A$ and $B$" in the survey headline is at-least-those-two. Exact-two subtracts the triple.\n\n**2.** The false figure $30$ copies the raw pair total. That mixes "at least $A$ and $B$" with "exactly $A$ and $B$."\n\n**3.** What would make $30$ honest? The triple would have to be $0$. The stem gives $10$ who visited all three.\n\nThe recovered exact-pair region is $20$, so the statement is False.`,
      `**D.** → False\n\nOnly-$A$ subtracts both pair totals from $80$ and adds the triple back once (it was removed twice): $80-30-20+10=40$. The claimed $80-30-20=30$ forgets the $+10$. The overview already recovered $40$.\n\n**1.** Subtracting $|A\\cap B|$ and $|A\\cap C|$ removes the triple twice, so it must be added back once.\n\n**2.** The false figure $30$ is that formula with the $+10$ dropped. Off-by-the-triple is a systematic inclusion-exclusion error, not a rounding.\n\n**3.** What would make $30$ honest? The triple would have to be $0$. It is $10$.\n\nThe recovered only-$A$ region is $40$, so the statement is False.`,
      `**E.** → False\n\nAt least two museums is the three exact-pair regions plus the triple: $20+15+10+10=55$, not $65$. The overview already summed $55$.\n\nThe trap is to add the raw pair totals $30+25+20=75$ and then subtract $10$, overshooting, or to add $20+15+10$ without the triple.\n\nThe recovered at-least-two count is $55$, so the statement is False.`,
    ],
  },
  "math-1-15": {
    ov: `**Part 1.** The sets.

Let $N=\\{1,2,3,\\ldots\\}$ and $E=\\{2,4,6,\\ldots\\}$.

**Part 2.** The operations.

Proper subset needs inclusion and inequality. Same cardinality for infinite sets is a bijection, not a size comparison copied from finite lists. The map $f(n)=2n$ is a bijection $N\\to E$. Infinite proper subsets exist.

**Part 3.** The scans.

Every even natural is natural, but $1\\in N\\setminus E$, so $E\\subsetneq N$. The map $f(n)=2n$ hits every even and is one-to-one, so $|E|=|N|$. The same formula $2n$ always outputs an even, so it is not a bijection onto the odds (those need $2n-1$). $E$ itself is infinite and still misses every odd, so it is not equal to $N$.`,
    letters: [
      `**A.** → True\n\nEvery even natural is already a natural, and $1\\in N\\setminus E$, so $E$ is a proper subset of $N$. The overview already recorded both inclusion and the missing odd $1$.\n\nProper needs both halves. Missing $1$ supplies the inequality. The trap is to think an infinite set cannot be a proper subset of another infinite set.\n\nThe recovered $E\\subsetneq N$ holds, so the statement is True.`,
      `**B.** → False\n\nFinite intuition says a proper subset is smaller. The overview already recovered a bijection $f(n)=2n$ pairing each natural with a unique even and hitting every even, so $|E|=|N|$ despite $E\\subsetneq N$. "Must have fewer" is a finite-set slogan.\n\n**1.** Cardinality for infinite sets is existence of a bijection, not a leftover-count.\n\n**2.** The leftover odds are infinite too, yet $E$ still matches $N$ in size. That is the point of the example.\n\n**3.** What would make "fewer" true? A finite $E$. The stem's $E$ is infinite.\n\nThe recovered cardinalities agree, so the statement is False.`,
      `**C.** → False\n\n$f(n)=2n$ always outputs an even: $f(1)=2$, $f(2)=4$, never an odd. The overview already identified it as the standard bijection onto the evens, not onto the odds. A bijection onto the odds would need something like $2n-1$.\n\nThe false figure is the right formula aimed at the wrong target. Even outputs cannot cover odd numbers.\n\nThe recovered map lands in $E$, so the statement is False.`,
      `**D.** → True\n\nTwo facts sit together: $E\\subsetneq N$ because odds are missing, and $f(n)=2n$ is a bijection, so $|E|=|N|$. The overview already paired those facts. That pair is exactly why "proper subset implies fewer elements" fails for infinite sets.\n\nThe trap is to grant the bijection and then still insist $E$ is smaller because it looks thinner on the line.\n\nThe recovered example is that failure of finite intuition, so the statement is True.`,
      `**E.** → False\n\n$E$ itself is the counterexample: infinite (no last even) and still missing every odd, so not equal to $N$. The overview already used $E$ as an infinite proper subset. Infinite subset does not mean "the whole set."\n\nThe trap is to think the only infinite subset of $N$ is $N$. Odds, evens, and primes are other infinite proper subsets.\n\nThe recovered $E$ is infinite and not equal to $N$, so the statement is False.`,
    ],
  },
  "math-1-16": {
    ov: `**Part 1.** The set.

$A=\\{2,4,6,8,10,12\\}$, six even numbers, nothing else.

**Part 2.** The operations.

Ask of each claim: is the thing an element (one of those six numbers) or a subset (a collection of them)? The empty set always subsets every set. Total subsets: $2^6=64$; drop $A$ itself to get $63$ proper subsets.

**Part 3.** The scans.

$6$ is on the list, so $6\\in A$. The singleton object $\\{6\\}$ is a set, not a number on the list, so $\\{6\\}\\notin A$, even though $\\{6\\}\\subseteq A$. $\\{6,8\\}$ has both members in $A$, hence a subset. $\\emptyset\\subseteq A$. Proper subsets: $64-1=63$.`,
    letters: [
      `**A.** → True\n\n$6$ is written on the roster $\\{2,4,6,8,10,12\\}$, so $6\\in A$. The overview already marked that lookup. Membership is that lookup, not a subset test.\n\nThe trap is to wait for $\\{6\\}$ and confuse this with letter B.\n\nThe recovered roster contains $6$, so the statement is True.`,
      `**B.** → False\n\n$\\{6\\}$ is a set, and $A$'s roster is six even integers, none of them a set. So $\\{6\\}\\notin A$ even though $\\{6\\}\\subseteq A$ because $6\\in A$. The overview already split those two tests.\n\n**1.** Membership asks whether one of the six written objects is the set $\\{6\\}$. None is.\n\n**2.** Subsethood asks whether $6$ sits in $A$. It does. Swapping $\\in$ for $\\subseteq$ is the trap.\n\n**3.** What would make $\\{6\\}\\in A$? $A$ would have to list that singleton as an element. The given $A$ lists numbers only.\n\nThe recovered elements are six numbers, so the statement is False.`,
      `**C.** → True\n\n$\\{6,8\\}\\subseteq A$ asks whether each of $6$ and $8$ sits on the roster; both do. The overview already marked that subset. Subsethood never asks whether the box $\\{6,8\\}$ itself appears as an element.\n\nThe trap is to require $\\{6,8\\}\\in A$, which fails for the same reason letter B fails.\n\nThe recovered roster contains both members, so the statement is True.`,
      `**D.** → True\n\n$\\emptyset$ has no member that could sit outside $A$, so $\\emptyset\\subseteq A$ vacuously. The overview already recorded that inclusion. This is not $\\emptyset\\in A$; the empty set is not one of the six even numbers.\n\nThe trap is to refuse the empty set as a subset of a number list. Vacuous inclusion does not care what $A$ contains.\n\nThe recovered inclusion holds, so the statement is True.`,
      `**E.** → True\n\nSix distinct numbers give $2^6=64$ subsets. Proper subsets drop only $A$ itself, leaving $64-1=63$. The overview already computed that count.\n\nThe trap is $2^6-2=62$ by dropping $\\emptyset$ as well, mixing proper with nonempty.\n\nThe recovered proper count is $63$, so the statement is True.`,
    ],
  },
  "math-1-17": {
    ov: `**Part 1.** The sets.

Solve first, filter second. $A=\\{x\\in\\mathbb{Z}:x^2-5x+6=0\\}$ and $B=\\{2,3\\}$.

**Part 2.** The operations.

A set-builder keeps those members of the named universe that satisfy the stated equation. Changing the universe, or adding an extra inequality, produces a different set.

**Part 3.** The scans.

$$x^2-5x+6=(x-2)(x-3)=0.$$

The roots are $x=2$ and $x=3$.

Both roots are integers, so $A=\\{2,3\\}$. The given $B=\\{2,3\\}$ is the same set, and $|A|=2$. For $C$, keep natural-number roots that also satisfy $x>2$: that drops $2$ and leaves $\\{3\\}$.`,
    letters: [
      `**A.** → True\n\nThe overview recovered $A=\\{2,3\\}$ by factoring and checking both roots against $\\mathbb{Z}$. $B$ is given as $\\{2,3\\}$. Those two rosters name the same pair. Sets ignore order.\n\nThe trap is to keep only one root from the factorisation, or to treat different writing order as inequality.\n\nThe recovered lists match, so the statement is True.`,
      `**B.** → True\n\n$3$ is an integer and the quadratic vanishes at $3$. The overview already listed $3$ in $A$. Membership is that defining test succeeding, not a second roster scan.\n\nThe trap is to wait for a printed $\\{2,3\\}$ before daring to say $3\\in A$. The builder never required a roster.\n\nThe recovered set contains $3$, so the statement is True.`,
      `**C.** → False\n\nBoth $2$ and $3$ solve the equation over $\\mathbb{Z}$, so $A=\\{2,3\\}$, not $\\{2\\}$. The overview already kept both integer roots. Keeping "only the smaller root" quietly adds an extra constraint $x<3$ that the set-builder never wrote.\n\n**1.** The quadratic is degree two. Two integer roots are the default until the universe cuts one.\n\n**2.** The false figure $\\{2\\}$ is a roster of the right kind with a legal member deleted. Smaller is not a licence to delete $3$.\n\n**3.** What would make $\\{2\\}$ honest? An extra inequality $x<3$ or $x\\le 2$ inside the builder. Neither appears.\n\nThe recovered $A$ has two members, so the statement is False.`,
      `**D.** → True\n\nTwo distinct integer roots give $|A|=2$. The overview already counted two members. Cardinality counts members, not the degree of the polynomial in some other sense.\n\nThe trap is to report $1$ after deleting a root, or $3$ by counting a repeated factor that is not there.\n\nThe recovered set has two members, so the statement is True.`,
      `**E.** → True\n\n$C$ keeps natural-number roots of the same quadratic that also satisfy $x>2$. Of the two recovered roots, $2>2$ fails and $3>2$ holds, so $C=\\{3\\}$. The extra filter is a genuine new universe-plus-inequality, not a reprint of $A$.\n\nThe trap is to keep both roots, ignoring $x>2$, or to drop $3$ as well.\n\nThe recovered $C$ is $\\{3\\}$, so the statement is True.`,
    ],
  },
  "math-1-18": {
    ov: `**Part 1.** The set.

Four letters $D=\\{w,x,y,z\\}$ mean $2^4=16$ subsets, i.e. $|\\mathcal P(D)|=16$.

**Part 2.** The operations.

A set $S$ belongs to the power set precisely when $S\\subseteq D$. Size counts use binomial coefficients. Choosing $3$ out of $4$ is choosing which one letter to omit.

**Part 3.** The scans.

Both $\\{w,x\\}$ and $D$ itself are subsets, hence elements of $\\mathcal P(D)$. Size $3$ subsets: $\\binom{4}{3}=4$. Size $2$ subsets: $\\binom{4}{2}=6$.`,
    letters: [
      `**A.** → True\n\nFour letters, each kept or left out independently, give $2^4=16$ subsets. The overview already recovered $|\\mathcal P(D)|=16$.\n\nThe trap is $4^2=16$ for the wrong reason, or $2\\times 4=8$, or $15$ by dropping $\\emptyset$.\n\nThe recovered power set has $16$ members, so the statement is True.`,
      `**B.** → True\n\n$S\\in\\mathcal P(D)$ means $S\\subseteq D$. Both $w$ and $x$ are letters of $D$, so $\\{w,x\\}\\subseteq D$ and therefore $\\{w,x\\}\\in\\mathcal P(D)$. The overview already placed that pair in the power set. That is not $\\{w,x\\}\\in D$; $D$'s elements are letters, not pairs.\n\nThe trap is to run the $D$-membership test and reject the pair.\n\nThe recovered power set contains $\\{w,x\\}$, so the statement is True.`,
      `**C.** → True\n\nEach $3$-element subset omits exactly one of the four letters, so there are four of them, matching $\\binom{4}{3}=4$. The overview already recorded that count.\n\nThe trap is $\\binom{4}{3}=12$ by order, or $6$ by copying the pair count.\n\nThe recovered three-element count is $4$, so the statement is True.`,
      `**D.** → True\n\nThe power set contains every subset of $D$, including $D$ itself, because $D\\subseteq D$. The overview already used that fact. This is $D\\in\\mathcal P(D)$, not $D\\in D$.\n\nThe trap is to refuse $D$ as a member of its power set, mixing proper subsets with all subsets.\n\nThe recovered power set contains $D$, so the statement is True.`,
      `**E.** → False\n\nThe pairs of four letters number $\\binom{4}{2}=6$, not $5$. The overview already recorded $6$. Claiming $5$ drops one pair with no justification.\n\n**1.** The six pairs are $wx,wy,wz,xy,xz,yz$.\n\n**2.** The false figure $5$ is one short. There is no distinguished pair to drop.\n\n**3.** Half of $16$ is $8$, not a reason to write $5$. Size $2$ is $\\binom{4}{2}=6$.\n\nWhat would make $5$ honest? A five-element ground set's size-$1$ count, or some other unrelated binomial. Not this $D$.\n\nThe recovered pair count is $6$, so the statement is False.`,
    ],
  },
  "math-1-19": {
    ov: `**Part 1.** The sets.

Compare $E=\\{1,2,3\\}$ with the larger $F=\\{1,2,3,4\\}$ by walking through the members.

**Part 2.** The operations.

Ordinary inclusion $X\\subseteq Y$ asks whether every member of $X$ sits in $Y$. Proper inclusion also needs $X\\ne Y$. Inclusion is reflexive: $E\\subseteq E$. Proper self-inclusion would also need $E\\ne E$, which never happens.

**Part 3.** The scans.

$\\{1,2,3\\}$ all appear in $F$, so $E\\subseteq F$. The extra element $4\\in F\\setminus E$ proves the sets differ, hence the inclusion is proper: $E\\subsetneq F$. That same $4$ is a counterexample to $F\\subseteq E$. Self-tests: $E\\subseteq E$ always. Proper self-inclusion fails.`,
    letters: [
      `**A.** → True\n\nWalk through the members of $E$: $1,2,3$ all appear in $F=\\{1,2,3,4\\}$, so $E\\subseteq F$. The overview already recorded that inclusion. A counterexample would have to be a member of $E$ missing from $F$, and there is none.\n\nThe trap is to require proper as well, or to reverse the inclusion.\n\nThe recovered inclusion holds, so the statement is True.`,
      `**B.** → True\n\nProper inclusion is $E\\subseteq F$ together with $E\\ne F$. Every member of $E$ sits in $F$, and the extra $4\\in F\\setminus E$ supplies the inequality. The overview already used $4$ as that witness.\n\nThe trap is to think proper forbids $E\\subseteq F$, or to miss $4$ and conclude the sets are equal.\n\nThe recovered inclusion is proper, so the statement is True.`,
      `**C.** → False\n\nReverse inclusion would need every member of the larger $F$ to sit in $E$. The same $4$ is now a counterexample: $4\\in F$ and $4\\notin E$. The overview already named $4$ as $F\\setminus E$. One witness kills $F\\subseteq E$.\n\nThe trap is to think inclusion is symmetric. It is not. $E\\subseteq F$ does not give $F\\subseteq E$.\n\nThe recovered leftover $\\{4\\}$ is nonempty, so the statement is False.`,
      `**D.** → True\n\n$E\\subseteq E$ is reflexive: $1,2,3$ all sit in $E$ by construction. The overview already marked that self-inclusion. This is ordinary inclusion, not proper.\n\nThe trap is to borrow the "proper" reading and refuse self-inclusion.\n\nThe recovered $E\\subseteq E$ holds, so the statement is True.`,
      `**E.** → False\n\nProper self-inclusion would need $E\\ne E$ as well. The two sides are the same list $\\{1,2,3\\}$, so the inequality half is impossible. The overview already noted that proper self-inclusion never happens.\n\n**1.** $E\\subseteq E$ holds. $E\\ne E$ fails. Proper needs both.\n\n**2.** The trap is to treat $\\subsetneq$ as a synonym of $\\subseteq$. Here the claim says proper, so inequality is required, and it fails.\n\n**3.** What would make the claim true? Nothing, for any set against itself. A different pair $E\\subsetneq F$ is proper, and that is letter B, not this letter.\n\nThe inequality half cannot hold, so the statement is False.`,
    ],
  },
  "math-1-20": {
    ov: `**Part 1.** The set.

Test the candidate $\\mathcal S=\\{\\{1,2\\},\\{3,4\\},\\{5,6\\}\\}$ against $G=\\{1,\\ldots,6\\}$ with the three partition checks.

**Part 2.** The operations.

A partition needs pairwise disjoint nonempty blocks whose union is $G$, and those blocks must be subsets of $G$. Overlap kills disjointness. An outsider such as $7$ is not a member of $G$, so a block containing $7$ cannot be a block of a partition of $G$.

**Part 3.** The scans.

Disjoint: the blocks are three different pairs, every pairwise intersection is empty. Cover: $\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=G$. Nonempty subsets of $G$: yes. So $\\mathcal S$ is a partition. The impostor $\\mathcal S'$ overlaps at $2$. Swapping in $\\{5,6,7\\}$ smuggles $7\\notin G$.`,
    letters: [
      `**A.** → True\n\nThe three pairs use distinct numbers: $1,2$ never meet $3,4$ or $5,6$, and $3,4$ never meet $5,6$. The overview already recorded every pairwise intersection empty.\n\nThe trap is to check only the triple overlap, which is weaker.\n\nThe recovered pairwise intersections are empty, so the statement is True.`,
      `**B.** → True\n\nJoin the three pairs and you get $G$. The overview already recovered $\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=G$.\n\nThe trap is to miss $6$ or to think a partition's union can be smaller than $G$. This one is not smaller.\n\nThe recovered union equals $G$, so the statement is True.`,
      `**C.** → True\n\nThe blocks of $\\mathcal S$ are nonempty, pairwise disjoint, and their union is $G$. The overview already passed all three checks, so $\\mathcal S$ partitions $G$.\n\nThe trap is to require equal block sizes or singletons. Three pairs of two already work.\n\nThe recovered collection is a partition, so the statement is True.`,
      `**D.** → False\n\n$\\mathcal S'$ overlaps at $2$: $\\{1,2\\}\\cap\\{2,3,4\\}=\\{2\\}$. The overview already named that shared $2$. Pairwise disjointness fails, so $\\mathcal S'$ is not a partition even though the union still covers $G$.\n\n**1.** One shared number is enough. Coverage cannot rescue overlap.\n\n**2.** The false figure is a collection that looks like a small edit of $\\mathcal S$ and therefore "should still work." The edit introduced an overlap.\n\n**3.** What would make $\\mathcal S'$ a partition? The $2$ would have to sit in only one block.\n\nThe recovered overlap $\\{2\\}$ kills $\\mathcal S'$, so the statement is False.`,
      `**E.** → False\n\nA block of a partition of $G$ must be a subset of $G$. Replacing $\\{5,6\\}$ by $\\{5,6,7\\}$ smuggles $7\\notin G$. The overview already flagged that outsider. Disjointness and a union that happens to cover $G$ cannot legalize an outsider.\n\n**1.** $7$ is not a member of $G$, so $\\{5,6,7\\}$ is not a subset of $G$.\n\n**2.** The false figure is a block that has grown by one number past the ground set. Partitions of $G$ cannot mention $7$.\n\n**3.** What would make the replacement legal? $7$ would have to sit in $G$. The given $G$ stops at $6$.\n\nThe recovered outsider $7$ kills the collection, so the statement is False.`,
    ],
  },
};

const EX = {
  "math-1-11": [
    "Three pairs, six numbers, no repeats, no gaps: that is the recovered $P$. A partition does not have to look like singletons to count.",
    "The discrete partition (six singletons) and the indiscrete partition (one block $A$) are both legal and have different block counts. The claim bans one of them without licence. Block count is not in the definition. What would make 'exactly $n$ blocks' necessary? An extra sentence in the definition that is not there. The recovered examples already vary: $1$ block versus $6$ blocks, both partitions of the same $A$.",
    "Shared $3$ is a membership witness, not a near miss. The two blocks of $Q$ both contain $3$, so they are not disjoint. Union equal to $A$ is true and irrelevant once disjointness fails. A partition needs all three conditions at once. This collection fails the second. Splitting $3$ into only one of the two blocks would repair it; the given $Q$ does not split $3$. The recovered overlap is $\\{3\\}$, one number too many for pairwise disjointness.",
    "Missing $6$ is a hole in $A$. Disjoint nonempty pairs do not cover a six-element set if one number is left out. The recovered union $\\{1,2,3,4,5\\}$ is not $A$. Adding a block $\\{6\\}$ would repair $R$; the given $R$ has no such block. Two of three conditions is not a partition.",
    "As soon as a set has two elements, you can clump them or split them. Those are two partitions. The recovered $A$ with $n=6$ has at least those two. The claim is not special to six; it holds for every $n\\ge 2$.",
  ],
  "math-1-12": [
    "Thirty-two includes the empty set and $A$. The recovered power-set count is $2^5$, not $5!$, not $5^2$.",
    "Proper drops $A$ only. The recovered $31$ still includes $\\emptyset$. Mixing proper with nonempty drops two different subsets and would report $30$.",
    "Five ways to omit one element is the recovered size-$4$ count. The false $10$ is $\\binom{5}{2}$, a real number for a different size. Binomial symmetry says $\\binom{5}{4}=\\binom{5}{1}=5$, never $10$. Doubling by order treats $\\{a,b,c,d\\}$ as different from a permutation of itself. Sets do not do that. What would make $10$ correct? Asking for two-element subsets. The claim asked for four-element subsets. The recovered table lists $5$ in that row.",
    "Nonempty and proper are the same size here because $|A|=5>0$, each dropping one subset. They are not the same family. The recovered nonempty count is still $31$.",
    "Even cardinality includes $0$. Dropping the empty set from the even family is how $15$ appears. The recovered sum $1+10+5=16$ keeps that empty set. Half of $32$ is $16$, matching the even-odd split for any finite set. The false figure $15$ is one short of a split that has to be equal. What would make $15$ honest? A different family, such as even sizes excluding $\\emptyset$. That family was not asked.",
  ],
  "math-1-13": [
    "Closed at $5$ and closed at $10$ because each of those ends is closed in the interval that supplies it, and the other interval contains that point. The recovered intersection is the closed segment $[5,10]$, not an open one.",
    "The right-hand bracket is the trap. $B$ is open at $15$, and $A$ never reaches $15$, so $15$ sits in neither. Union cannot create a point both sides excluded. The recovered union is $(0,15)$, open on the right. The claimed $(0,15]$ is a false figure that closes an end the inputs left open. What would close it? Writing $B=[5,15]$. The stem wrote $[5,15)$. Off-by-a-bracket at $15$ is the same membership error as keeping $8$ in a complement of a union that already contains $8$.",
    "The point $10$ is closed in $A$ and interior to $B$'s interval. Both recovered memberships hold, so $10$ is in the intersection. Openness of $B$ at $15$ does not open $A$ at $10$.",
    "Difference deletes overlap. The point $5$ is $B$'s closed left end, so it sits in $B$, so it cannot sit in $A\\setminus B$. The recovered leftover is the open interval $(0,5)$, which does not include $5$. Keeping $5$ would be keeping overlap. What would include $5$ in the difference? An open $B$ at $5$. The given $B$ is closed there.",
    "Inclusion $A\\subseteq B$ would need every point of $A$ to sit in $B$. The recovered $A$-only tail $(0,5)$ is a whole interval of counterexamples. Checking $x=8$ in the overlap and stopping is how the universal claim gets a false pass. One witness $x=1$ is enough to kill it.",
  ],
  "math-1-14": [
    "The recovered union $145$ is less than the survey size $150$, as it must be. A claimed $155$ exceeds the room. Inclusion-exclusion with these headlines and pair totals plus the triple is $80+70+60-30-25-20+10=145$. The false $155$ is ten too high, the size of the triple added twice or a pair forgotten. Either way it is not the recovered scan.",
    "Five tourists saw none of the three museums. The recovered leftover is survey minus union, $150-145$. Using $155$ as the union would make none negative, which is a warning that $155$ was already wrong.",
    "Raw pair totals include the triple. Exact $A$ and $B$ not $C$ subtracts those $10$ all-three visitors. The recovered region is $20$, not $30$. Copying $30$ is the standard 'at least two' versus 'exactly two' mix. The stem's $30$ is the at-least-$A$-and-$B$ headline. The claim asked for exact $A$ and $B$. Those differ by the triple. What would make $30$ honest as an exact-pair count? Triple overlap $0$. The stem gives $10$.",
    "Only-$A$ is a three-set leftover: subtract both pair totals, then add the triple back because it was subtracted twice. The recovered $40$ is $80-30-20+10$. The claimed $30$ is that formula without the $+10$. Forgetting the inclusion-exclusion repair is a systematic error, not a rounding of $40$. What would make $30$ honest? Triple $0$, so that the $+10$ would be $+0$. The triple is $10$.",
    "At least two is exact pairs plus everyone in all three. The recovered $55$ is $20+15+10+10$. Adding raw pairs $30+25+20$ counts people in all three three times among the pairs, which is the wrong weight. The false $65$ is ten too high, again a triple-weighting slip. The recovered $55$ is the scan.",
  ],
  "math-1-15": [
    "Proper subset is inclusion plus a missing member. The recovered missing member is $1$. Evens sit inside $N$, and $N$ has odds left over. Both halves hold.",
    "A leftover can be infinite and the subset can still match the parent in cardinality. The recovered bijection $n\\mapsto 2n$ is the reason $|E|=|N|$. Finite leftover-counting would say 'odds remain, so $E$ is smaller.' That slogan is true for finite sets and false here. What would make $E$ strictly smaller in cardinality? $E$ finite. The even naturals are not finite. The claim's 'must' is the finite slogan imported into an infinite example that was built to refute it.",
    "Even outputs cannot hit odd targets. The recovered map $2n$ is a bijection onto $E$, and that is a different target from the odd naturals. The formula for odds is $2n-1$. Pointing $2n$ at the odds is a false figure: the right shape of map, the wrong landing set.",
    "The whole point of $E\\subsetneq N$ with $|E|=|N|$ is that finite intuition about proper subsets does not carry over. The overview recovered both facts on purpose. This letter is that moral, not a new bijection.",
    "Infinite subset of $N$ need not be $N$. The recovered $E$ is the standard counterexample: no last even, yet every odd is missing. Odds, primes, and powers of two are other infinite proper subsets. The claim would force all of those to equal $N$. They do not.",
  ],
  "math-1-16": [
    "Membership is a roster lookup. The number $6$ is written among the six evens. The recovered $\\in$ holds. The set $\\{6\\}$ is a different object, reserved for letter B.",
    "A set of numbers does not contain sets unless those sets are written on the roster. The recovered $A$ writes six integers. The singleton $\\{6\\}$ is a subset because $6\\in A$, and it is not an element. Those two recovered verdicts look similar in print and they are not interchangeable. What would make $\\{6\\}\\in A$? A nested roster such as $\\{2,4,6,\\{6\\},\\ldots\\}$. The given $A$ has no nested objects. Swapping $\\in$ for $\\subseteq$ is the whole false verdict.",
    "Both $6$ and $8$ sit in $A$, so the pair is a subset. The box $\\{6,8\\}$ itself is not an element of $A$, which the claim does not ask.",
    "Vacuous inclusion does not inspect $A$'s members. The empty set has no witness that could sit outside. The recovered $\\emptyset\\subseteq A$ holds for this even-number $A$ and for every other set. Membership $\\emptyset\\in A$ would fail, because $\\emptyset$ is not an even integer.",
    "Six keep-or-drop choices give $64$ subsets. Proper drops $A$ only, leaving $63$. The recovered count includes $\\emptyset$. Dropping $\\emptyset$ as well would mix proper with nonempty and report $62$.",
  ],
  "math-1-17": [
    "Same two integer roots, same set. The recovered $A$ equals the given $B$. Order of writing $2,3$ versus $3,2$ is irrelevant.",
    "The builder's two tests both succeed at $3$: integer universe, quadratic zero. The recovered $A$ contains $3$. A printed roster is not required for membership.",
    "Two roots, two members. The false singleton $\\{2\\}$ deletes the legal $3$. 'Smaller root' is an extra filter the builder did not write. Factoring already produced $(x-2)(x-3)$, so both $2$ and $3$ are on the recovered list. What would make $\\{2\\}$ honest? Writing $x<3$ or $x\\le 2$ inside $A$. The stem wrote only the quadratic over $\\mathbb{Z}$. Square-root or 'principal root' slogans are the same trap as in the $x^2=9$ task: a function convention imported into a set-builder that never adopted it.",
    "Two distinct members, cardinality $2$. The recovered $|A|$ is not the degree, not the number of factors counted with multiplicity in some other ring, just the size of $\\{2,3\\}$.",
    "The extra filter $x>2$ on natural-number roots keeps $3$ and drops $2$. The recovered $C$ is a singleton, a different set from $A$. That is a new universe-plus-inequality, not a reprint. Ignoring $x>2$ would copy $A$ into $C$ and break the claim. The inequality is doing real work.",
  ],
  "math-1-18": [
    "Sixteen subsets from four independent keep-or-drop choices. The recovered $|\\mathcal P(D)|=16$ includes $\\emptyset$ and $D$.",
    "Power-set membership is subsethood. The pair $\\{w,x\\}$ is a subset of $D$, hence an element of $\\mathcal P(D)$. It is not an element of $D$. The recovered split is the same $\\in$ versus $\\subseteq$ split as in the three-letter tasks, now one type-level up.",
    "Omit one of four letters: four triples. The recovered $\\binom{4}{3}=4$ is also $\\binom{4}{1}$. Order does not multiply that count.",
    "Every set is a subset of itself, so every set is an element of its power set. The recovered $D\\in\\mathcal P(D)$ is that reflexivity, not $D\\in D$.",
    "Six pairs from four letters: $wx,wy,wz,xy,xz,yz$. The recovered $\\binom{4}{2}=6$. The false $5$ drops one pair with no rule for which pair to drop. There is no distinguished pair. Half of $16$ is $8$, which is not this row of the size table. What would make $5$ honest? A different ground set or a different size. For this $D$ and size $2$, the count is $6$. Claiming $5$ is an off-by-one on a binomial that has no reason to be odd here; $\\binom{4}{2}=6$ is even.",
  ],
  "math-1-19": [
    "Three members of $E$, three successes in $F$. The recovered $E\\subseteq F$ has no counterexample. Reverse inclusion is a different letter.",
    "Proper needs a leftover in the larger set. The recovered leftover is $4$. Inclusion plus that leftover is $E\\subsetneq F$. Missing $4$ would make the sets look equal and would break properness.",
    "Inclusion is one-way. The recovered $4\\in F\\setminus E$ is a witness against $F\\subseteq E$. Granting $E\\subseteq F$ does not grant the reverse. Symmetry would require $E=F$, and $4$ already shows they are not equal.",
    "Reflexivity of $\\subseteq$ does not need a larger set. The recovered $E\\subseteq E$ is the same three numbers sitting in themselves. Proper is a stricter tag, unused by this claim.",
    "A set cannot be unequal to itself. Proper self-inclusion asks for $E\\subseteq E$ and $E\\ne E$. The second half is impossible. The recovered list $\\{1,2,3\\}$ is the same on both sides. The trap is a synonym confusion between $\\subseteq$ and $\\subsetneq$. Letter D used $\\subseteq$ and was true. This letter uses proper and is false. What would make proper self-inclusion true? Nothing. No set is a proper subset of itself. The true proper inclusion in this task is $E\\subsetneq F$, which compares two different recovered lists.",
  ],
  "math-1-20": [
    "Three disjoint pairs is the recovered pairwise scan. Pairwise is three checks, not one triple check. A nonempty pair would have killed this letter even if the triple overlap stayed empty.",
    "The recovered union is all of $G$. Coverage is that equality, not a vague 'about six numbers.' Missing $6$ would be letter D's hole, and this collection does not have that hole.",
    "All three recovered checks pass, so $\\mathcal S$ is a partition. Nonempty, disjoint, cover. Equal block sizes are a coincidence of this example, not a requirement.",
    "One shared $2$ is enough. The recovered overlap $\\{1,2\\}\\cap\\{2,3,4\\}=\\{2\\}$ kills pairwise disjointness. The union of $\\mathcal S'$ can still equal $G$; coverage does not repair overlap. A small edit of a working partition is not automatically a partition. This edit introduced a repeated $2$. What would repair $\\mathcal S'$? Putting $2$ in only one block. The given middle block still contains it.",
    "Blocks of a partition of $G$ must be subsets of $G$. The recovered outsider $7$ sits in the proposed block $\\{5,6,7\\}$ and not in $G$. Disjointness of the other pairs cannot legalize $7$. Union covering $G$ cannot legalize $7$. The ground set is $\\{1,\\ldots,6\\}$, and $7$ is past that end. What would make the replacement legal? $G$ would have to include $7$. It does not. Smuggling an outsider is a different failure from overlap: the block is not even a subset of the set being partitioned.",
  ],
};

applyExpand(fp, P, EX);
