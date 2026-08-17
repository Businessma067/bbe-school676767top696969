import fs from "fs";

const path = "src/data/math-ch1-logic.ts";
let src = fs.readFileSync(path, "utf8");

const { MATH_CH1_LOGIC } = await import("../../src/data/math-ch1-logic.ts");
// note: run from repo root: node textbook/output/_expand_tactical_1_27.mjs
const before = {};
for (const t of MATH_CH1_LOGIC) {
  if (!/^math-1-([1-9]|1[0-9]|2[0-7])$/.test(t.id)) continue;
  before[t.id] = t.tactical_explanations.map((s) => s.length);
}

const expansions = {
  "math-1-1": {
    B: (s) =>
      s +
      `\n\nCheck against the given lists: $C=\\{5,6,7,8,9\\}$, so $9\\in C$. Any correct union $A\\cup C$ is forced to contain every member of $C$, and the claimed set stops before $9$. That single missing element is enough to make the equality false.`,
    D: (s) =>
      s +
      `\n\nExplicit check: $4\\in A$ and $4\\notin C$, so the difference rule keeps $4$. The claimed set $\\{1,2,3\\}$ pretends $4$ was deleted, but nothing in $C$ justifies deleting it. So the claim is too small.`,
    E: (s) =>
      s +
      `\n\nA quick trap is to notice that $B$ and $C$ are "different lists" and call them disjoint. Disjointness is about shared members, not about looking different. Because $\\{5,6,7\\}$ sits in both, the sets are not disjoint.`,
  },
  "math-1-2": {
    C: (s) =>
      s +
      `\n\nWhy the trap fails: the set-builder uses the universe $Z$, not "positive integers." Squaring does not discard the negative root, and $-3\\in Z$ with $(-3)^2=9$, so $-3$ must stay in $A$. Writing $\\{3\\}$ quietly changes the universe.`,
    E: (s) =>
      s +
      `\n\nCompare the two filters carefully. In $A$ the universe is $Z$, so both $\\pm 3$ survive. In $C$ the universe is $N$, so the same equation is re-filtered and $-3$ is rejected. Equality would require $C$ to contain $-3$, which it cannot.`,
  },
  "math-1-3": {
    B: (s) =>
      s +
      `\n\nConcrete check against $A=\\{a,b,c\\}$: the membership list is just three letters. You will find $a\\in A$, but you will not find the set-object $\\{a,b\\}$ on that list. Confusing "$\\{a,b\\}\\subseteq A$" (true) with "$\\{a,b\\}\\in A$" (false) is the classic mix-up here.`,
    D: (s) =>
      s +
      `\n\nBy definition, $X$ is a proper subset of $Y$ only when $X\\subseteq Y$ and $X\\ne Y$. Taking $X=Y=A$ makes the second half $A\\ne A$, which is absurd. So "$A$ is a proper subset of $A$" can never hold.`,
  },
  "math-1-4": {
    B: (s) =>
      s +
      `\n\nThis is the empty-set membership trap. Subsethood ($\\emptyset\\subseteq D$) is automatic, but membership ($\\emptyset\\in D$) would require $\\emptyset$ to appear as one of the written elements $a$, $b$, or $c$. It does not, so the claim fails.`,
    D: (s) =>
      s +
      `\n\nSplit the "both" claim. Half one: $\\{a\\}\\subseteq D$ is true because $a\\in D$. Half two: $\\{a\\}\\in D$ would mean the singleton set itself is one of $a$, $b$, $c$, which it is not. One false half makes the whole compound statement false.`,
  },
  "math-1-5": {
    C: (s) =>
      s +
      `\n\nThe two differences live in opposite leftover regions: $E\\setminus F=\\{1,7\\}$ keeps only what is in $E$ but not $F$, while $F\\setminus E=\\{4,6\\}$ keeps only what is in $F$ but not $E$. Those regions never match, so equality is impossible on these numbers.`,
    E: (s) =>
      s +
      `\n\nIf a number were in both differences, it would have to be outside $F$ (to sit in $E\\setminus F$) and outside $E$ (to sit in $F\\setminus E$) while somehow belonging to both leftover piles. That contradiction forces the intersection to be empty, matching the claim.`,
  },
  "math-1-6": {
    C: (s) =>
      s +
      `\n\nWalk through $C=\\{1,2,3,4,5\\}$: drop $2$ and $4$ because they sit in $A$, but keep $1$, $3$, and $5$. The claim lists only $\\{1,3\\}$ and silently deletes $5$, even though $5\\notin A$. That is the trap.`,
    D: (s) =>
      s +
      `\n\n$B\\setminus C$ means "members of $B$ that are missing from $C$." Since $3\\in B$ and $3\\in C$, $3$ must leave. The claim copies all of $B$, as if nothing overlapped with $C$. The corrected list is $\\{6,9,12\\}$.`,
    E: (s) =>
      s +
      `\n\nCheck each candidate from $A$: $2$ and $4$ are in $C$, but $6$ is not ($C$ only goes up to $5$). Padding the intersection with $6$ invents an overlap that the given sets do not have.`,
  },
  "math-1-7": {
    D: (s) =>
      s +
      `\n\nSubsethood $E\\subseteq M$ would require every Economics student to also take Mathematics. The only-Economics count $25-12=13$ is a nonempty witness region, so the inclusion fails on the given survey numbers.`,
    E: (s) =>
      s +
      `\n\nDisjoint sets would need $|M\\cap E|=0$. The problem states the opposite: twelve students sit in both courses. That single fact already falsifies the claim, with no further arithmetic needed.`,
  },
  "math-1-8": {
    D: (s) =>
      s +
      `\n\nBecause $A$ and $B$ share nothing, subtracting $B$ does not remove any of $1$, $2$, or $3$. So $A\\setminus B$ equals $A$ itself, which is nonempty. The claim confuses "empty intersection" with "empty difference."`,
    E: (s) =>
      s +
      `\n\nThe false leap is "empty intersection ⇒ one factor is empty." These blocks $A=\\{1,2,3\\}$ and $B=\\{4,5,6\\}$ are a concrete counterexample: overlap is empty while neither set is empty. Disjointness only bans shared members; it does not erase the sets.`,
  },
  "math-1-9": {
    D: (s) =>
      s +
      `\n\nExplicitly: $X\\cap Y=\\{4,5,6\\}$, so $(X\\cap Y)^c$ is everyone in $U$ except those three. On the other side, $X^c\\cup Y^c$ joins $\\{7,8,9,10,11,12\\}$ with $\\{1,2,3,10,11,12\\}$, which is the same larger list. The two sides match.`,
    E: (s) =>
      s +
      `\n\nThe trap is writing $Y^c$ and labeling it $X^c\\cup Y^c$. Union must also keep everything from $X^c$, including $7$, $8$, and $9$ (Python-non-knowers who still may know SQL). Omitting them makes the claimed set too small.`,
  },
  "math-1-10": {
    A: (s) =>
      s +
      `\n\nRebuild the union first: $A\\cup B=\\{1,2,3,4,5,6,7,8\\}$. Complements of that union can only be $9$ and $10$. Including $8$ would require $8\\notin A\\cup B$, but $8\\in B$, so the claim's extra element is illegal.`,
    C: (s) =>
      s +
      `\n\nDe Morgan says $A^c\\cap B^c=(A\\cup B)^c=\\{9,10\\}$. Numbers like $6$, $7$, $8$ belong to $A^c$ but still sit inside $B$, so they fail the "in both complements" test and cannot appear in the intersection of complements.`,
    E: (s) =>
      s +
      `\n\n$A^c=\\{6,7,8,9,10\\}$ must contribute to the union of complements. The claimed list $\\{1,2,3,9,10\\}$ is exactly $B^c$ alone, so it drops $6$, $7$, and $8$. That is the undercount trap.`,
  },
  "math-1-11": {
    B: (s) =>
      s +
      `\n\nPartitions are allowed to clump elements. The single-block collection $\\{A\\}$ covers everything with one block, while six singletons use six blocks. Both are valid partitions of the same six-element set, so the "must equal $n$" rule is false.`,
    C: (s) =>
      s +
      `\n\nPairwise disjointness fails as soon as one shared element appears. Here $3$ sits in both blocks of $Q$, so the blocks are not pairwise disjoint. Coverage is irrelevant once that condition is already broken.`,
    D: (s) =>
      s +
      `\n\nEven though the listed blocks are nonempty and pairwise disjoint, their union stops at $\\{1,2,3,4,5\\}$. Missing $6\\in A$ means the cover condition fails, so $R$ is not a partition.`,
  },
  "math-1-12": {
    C: (s) =>
      s +
      `\n\nChoosing $4$ elements out of $5$ is the same as choosing which one element to omit, and there are five choices for the omitted element. The claim's $10$ looks like $\\binom{5}{2}$ or a double-count, but the correct binomial is $\\binom{5}{4}=5$.`,
    E: (s) =>
      s +
      `\n\nBreak the sizes: $\\binom{5}{0}=1$, $\\binom{5}{2}=10$, $\\binom{5}{4}=5$. Summing gives $16$ even-sized subsets. Saying $15$ is the classic off-by-one from forgetting the empty set or mis-adding the binomials.`,
  },
  "math-1-13": {
    B: (s) =>
      s +
      `\n\nEndpoint check: $15$ satisfies $x\\ge 5$ but fails $x<15$, so $15\\notin B$ and therefore $15\\notin A\\cup B$. The claimed interval $(0,15]$ illegally closes the right end. The correct union is the half-open $(0,15)$.`,
    D: (s) =>
      s +
      `\n\n$A\\setminus B$ keeps points of $A$ that fail membership in $B$. But $5$ is the left endpoint of $B=[5,15)$, so $5\\in B$. Once $5$ is in $B$, it is removed by the difference and cannot sit in $A\\setminus B$.`,
    E: (s) =>
      s +
      `\n\nThe claim is universal: every $x\\in A$ would need $x\\in B$, i.e. $A\\subseteq B$. Any point in $(0,5)$, such as $x=1$, is in $A$ yet below $B$'s left endpoint. One counterexample falsifies the "for all $x$" statement.`,
  },
  "math-1-14": {
    A: (s) =>
      s +
      `\n\nRun inclusion–exclusion on the given counts: $80+70+60-30-25-20+10=145$. The claim's $155$ overshoots both the correct formula and the survey size $150$, so it cannot be the union size.`,
    C: (s) =>
      s +
      `\n\nThe pair total "visited both $A$ and $B$" still includes people who also saw $C$. To get exactly $A$ and $B$ (not $C$), subtract the triple count: $30-10=20$. Leaving the raw $30$ counts some triple visitors twice in spirit and overstates the exact-pair region.`,
    D: (s) =>
      s +
      `\n\nOnly-$A$ is $|A|$ minus the $A\\cap B$ and $A\\cap C$ pair totals, then plus the triple once (because those $10$ were removed twice). So $80-30-20+10=40$. The claim's $80-30-20=30$ forgets that $+10$ correction.`,
  },
  "math-1-15": {
    B: (s) =>
      s +
      `\n\nFinite intuition says "proper subset ⇒ fewer elements," but here $f(n)=2n$ pairs each natural with a unique even and hits every even. That bijection forces $|E|=|N|$ despite $E\\subsetneq N$. The "must have fewer" claim fails for this infinite pair.`,
    C: (s) =>
      s +
      `\n\nA bijection onto the odds would need odd outputs. But $f(n)=2n$ always returns an even number, so every odd natural is missed. The formula is the standard bijection onto the *evens*, not onto the odds.`,
    E: (s) =>
      s +
      `\n\nCounterexample: $E$ itself. It is infinite (no last even) and still omits every odd natural. So an infinite subset of $N$ need not equal $N$.`,
  },
  "math-1-16": {
    B: (s) =>
      s +
      `\n\nMembership asks whether the object $\\{6\\}$ appears in the written list $\\{2,4,6,8,10,12\\}$. That list contains the number $6$, not the singleton set $\\{6\\}$. The true statement nearby is $\\{6\\}\\subseteq A$, which is a different relation.`,
    E: (s) =>
      s +
      `\n\nWith $|A|=6$, there are $2^6=64$ subsets in all. Proper subsets exclude only the full set $A$ itself, leaving $64-1=63$. The count matches the claim.`,
  },
  "math-1-17": {
    C: (s) =>
      s +
      `\n\nFactorization $(x-2)(x-3)=0$ produces two integer roots. Keeping "only the smaller root" would describe $\\{2\\}$, but $A$ is defined by the full equation over $Z$, so both $2$ and $3$ stay. The trap quietly deletes a valid root.`,
    E: (s) =>
      s +
      `\n\nNatural roots of the quadratic are still $2$ and $3$; the extra filter $x>2$ then drops $2$ and keeps only $3$. Direct check: $3\\in\\mathbb N$, $3>2$, and $3$ solves the equation, so $C=\\{3\\}$ as claimed.`,
  },
  "math-1-18": {
    E: (s) =>
      s +
      `\n\nList the pairs to see the undercount: $\\{w,x\\}$, $\\{w,y\\}$, $\\{w,z\\}$, $\\{x,y\\}$, $\\{x,z\\}$, $\\{y,z\\}$, six of them. Binomial $\\binom{4}{2}=6$ confirms the list. Claiming $5$ drops one pair with no justification.`,
    C: (s) =>
      s +
      `\n\nEquivalently, each $3$-element subset omits exactly one of $w,x,y,z$, giving four subsets. That matches $\\binom{4}{3}=4$ and supports the claim.`,
  },
  "math-1-19": {
    C: (s) =>
      s +
      `\n\n$F\\subseteq E$ would require every member of the larger set to sit in the smaller one. The extra element $4\\in F$ is absent from $E=\\{1,2,3\\}$, so reverse inclusion fails on that single witness.`,
    E: (s) =>
      s +
      `\n\nProper self-inclusion would need both $E\\subseteq E$ (true) and $E\\ne E$ (false). The inequality half is impossible, so $E\\subsetneq E$ never holds, even though ordinary $E\\subseteq E$ does.`,
  },
  "math-1-20": {
    D: (s) =>
      s +
      `\n\nPartition blocks must be pairwise disjoint. In $\\mathcal S'$ the first two blocks both contain $2$, so their intersection is nonempty. That alone disqualifies $\\mathcal S'$, even though the union still covers $G$.`,
    E: (s) =>
      s +
      `\n\nEvery block of a partition of $G$ must be a subset of $G$. The proposed block $\\{5,6,7\\}$ contains $7\\notin G$, so it is not an allowed block. Coverage and disjointness cannot rescue an element from outside $G$.`,
  },
  "math-1-21": {
    B: (s) =>
      s +
      `\n\nIf $H$ were finite it would have a largest element, say $2N$. But then $2(N+1)$ is a larger positive even still in $H$. That contradiction shows $H$ has no last member, so it is infinite.`,
    C: (s) =>
      s +
      `\n\nEquality of sets needs the same members. Odd $1$ is a natural number but not even, so $1\\in\\mathbb N\\setminus H$. Therefore $H\\ne\\mathbb N$ even though $H\\subseteq\\mathbb N$.`,
    E: (s) =>
      s +
      `\n\nProper inclusion is true ($H\\subsetneq\\mathbb N$), but the bijection $f(n)=2n$ still pairs every natural with a unique even. Same cardinality with a proper subset is exactly why the "strictly fewer" slogan fails for infinite sets.`,
  },
  "math-1-22": {
    C: (s) =>
      s +
      `\n\nSubsethood $\\{a\\}\\subseteq K$ only asks whether the member $a$ of the left-hand singleton sits in $K$. It does, by statement A. This is not the same question as "$\\{a\\}\\in K$," though that happens to be true here as well.`,
    D: (s) =>
      s +
      `\n\nNow the left-hand set is $\\{\\{a\\}\\}$, whose only member is the object $\\{a\\}$. Because $\\{a\\}$ is listed in $K$, the subset test passes. The extra braces matter: you are testing membership of $\\{a\\}$, not of $a$.`,
    E: (s) =>
      s +
      `\n\n$a$ and $\\{a\\}$ are different objects (an element versus a one-element set), so the written list of $K$ has two distinct members. Cardinality $2$ follows immediately.`,
  },
  "math-1-23": {
    D: (s) =>
      s +
      `\n\nIntersection requires membership in both $A$ and $B$. From the lists, $4$ and $5$ work, but $6$ is only in $B$. Padding $A\\cap B$ with $6$ is the trap; the true overlap is $\\{4,5\\}$.`,
    E: (s) =>
      s +
      `\n\nOnce $A\\cap B=\\{4,5\\}$, the complement in $U$ must drop $4$ and $5$ and keep everything else, including $6$, $7$, and $8$. The claimed list keeps $4$ and $5$ while omitting $6$, $7$, $8$: the opposite of a complement.`,
  },
  "math-1-24": {
    C: (s) =>
      s +
      `\n\nOrdered pairs in $A\\times B$ must have first coordinate from $A=\\{1,2\\}$. The pair $(x,2)$ starts with $x$, and $x\\notin A$, so it is excluded. The same symbols in reverse order land in $B\\times A$, a different product.`,
    D: (s) =>
      s +
      `\n\nSet equality would need the same ordered pairs on both sides. But $(2,x)\\in A\\times B$ while $(2,x)\\notin B\\times A$ (because $2\\notin B$). Different members mean $A\\times B\\ne B\\times A$, even though both have size $6$.`,
  },
  "math-1-25": {
    A: (s) =>
      s +
      `\n\n$A=(1,5)$ reaches below $3$, while $B=[3,\\infty)$ starts at $3$. Any witness in $(1,3)$, such as $x=2$, sits in $A$ but fails $x\\ge 3$, so $A\\nsubseteq B$.`,
    C: (s) =>
      s +
      `\n\n$B$ is unbounded above, so it contains numbers like $10$ that lie far outside the open interval $A=(1,5)$. That witness shows reverse inclusion $B\\subseteq A$ is false.`,
    D: (s) =>
      s +
      `\n\nFor any $x>1$, either $1<x<5$ (so $x\\in A$) or $x\\ge 5$ (hence $x\\ge 3$, so $x\\in B$). In every case $x$ lands in the union, giving $(1,\\infty)$ as claimed.`,
  },
  "math-1-26": {
    B: (s) =>
      s +
      `\n\nBy definition the two one-sided differences are joined by $\\cup$. Their intersection is empty because no element can be both "only in $A$" and "only in $B$." Replacing union by intersection therefore collapses the symmetric difference to $\\emptyset$, contradicting the four-element set in A.`,
    C: (s) =>
      s +
      `\n\nSymmetric difference excludes the overlap. Here $A\\cap B=\\{3,4\\}$, and neither $3$ nor $4$ appears in $\\{1,2,5,6\\}=A\\triangle B$. So the overlap is not a subset of the symmetric difference.`,
  },
  "math-1-27": {
    B: (s) =>
      s +
      `\n\nCoverage assignments are ordered pairs $(\\text{rep},\\text{account})$. Swapping coordinates changes which slot is the rep and which is the account, so the two written pairs are different objects. Order is essential; commutativity fails.`,
    D: (s) =>
      s +
      `\n\nMembership in a product $X\\times Y$ always means "first factor in $X$, second in $Y$." For $(\\text{Maria},\\text{Account 3})\\in\\text{Reps}\\times\\text{Accounts}$, Maria must be a rep and Account 3 an account. The claim swaps both tests and is therefore false.`,
  },
};

function applyToTask(srcText, taskId, letter, expandFn) {
  const idRe = new RegExp(`id: "${taskId}"`);
  const idMatch = idRe.exec(srcText);
  if (!idMatch) throw new Error("missing " + taskId);
  const start = idMatch.index;
  const next = srcText.indexOf('\n  {\n    id: "math-1-', start + 1);
  const end = next === -1 ? srcText.length : next;
  const block = srcText.slice(start, end);

  const letters = ["A", "B", "C", "D", "E"];
  const idx = letters.indexOf(letter);

  const teStart = block.indexOf("tactical_explanations: [");
  if (teStart < 0) throw new Error("no te " + taskId);

  const marker = `**${letter}.** →`;
  const mPos = block.indexOf(marker, teStart);
  if (mPos < 0) throw new Error("no marker " + taskId + letter);

  let qStart = mPos;
  while (qStart > teStart && block[qStart] !== '"') qStart--;
  if (block[qStart] !== '"') throw new Error("no quote start " + taskId + letter);

  let i = qStart + 1;
  let endQuote = -1;
  while (i < block.length) {
    if (block[i] === "\\") {
      i += 2;
      continue;
    }
    if (block[i] === '"') {
      endQuote = i;
      break;
    }
    i++;
  }
  if (endQuote < 0) throw new Error("no end quote " + taskId + letter);

  const task = MATH_CH1_LOGIC.find((t) => t.id === taskId);
  const oldRuntime = task.tactical_explanations[idx];
  const newRuntime = expandFn(oldRuntime);
  if (!newRuntime.startsWith(oldRuntime)) {
    throw new Error("expansion did not preserve prefix for " + taskId + letter);
  }
  if (newRuntime.length < oldRuntime.length) {
    throw new Error("shortened " + taskId + letter);
  }
  if (newRuntime.includes("—")) {
    throw new Error("em dash in " + taskId + letter);
  }

  const newLiteral = newRuntime
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");

  const newBlock = block.slice(0, qStart + 1) + newLiteral + block.slice(endQuote);
  return srcText.slice(0, start) + newBlock + srcText.slice(end);
}

let out = src;
const report = [];
for (const [taskId, map] of Object.entries(expansions)) {
  for (const [letter, fn] of Object.entries(map)) {
    const idx = "ABCDE".indexOf(letter);
    const oldLen = before[taskId][idx];
    out = applyToTask(out, taskId, letter, fn);
    const task = MATH_CH1_LOGIC.find((t) => t.id === taskId);
    const newLen = fn(task.tactical_explanations[idx]).length;
    report.push({ taskId, letter, oldLen, newLen });
  }
}

fs.writeFileSync(path, out);
console.log("WROTE", report.length, "expansions");
for (const r of report) {
  console.log(`${r.taskId} ${r.letter}: ${r.oldLen} → ${r.newLen} (+${r.newLen - r.oldLen})`);
}
