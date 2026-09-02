import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";

function ch1Words(s) {
  return s
    .replace(/^\*\*[A-E]\.\*\* → (True|False)\s*/, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

const patches = [
  {
    file: "textbook/output/_rev/ch1/01_10.json",
    id: "math-1-6",
    letter: "A",
    idx: 0,
    key: true,
    body: [
      "The even roster $A=\\{2,4,6,8,10\\}$ is meeting the multiple-of-three roster $B=\\{3,6,9,12\\}$. Intersection asks which numbers are tagged on both lists, a stricter combine than union. This letter is that overlap cell, not the eight-number union and not the overlap of $A$ with the small-number list $C$.",
      "Part 3 already scanned $A$ against $B$ and left the singleton $\\{6\\}$. That recovered object is what the claim names. The even numbers $2,4,8,10$ miss $B$, and $B$'s $3,9,12$ miss $A$. Only $6$ sits in both, so the intersection is a one-element set.",
      "**1.** A solver who ran a union instead would keep $2,3,4,8,9,10,12$ as well and land on eight numbers. That is letter B's count, not this roster.",
      "**2.** Keeping $4$ because it is even and sits next to $6$ treats nearness as membership in $B$. Nearness is not membership. Copying $A\\cap C=\\{2,4\\}$ into this slot answers a different second set: $C$ stops at $5$, while $B$ is the multiples of three.",
      "What would have to change for the opposite verdict is a second shared number. If $B$ had listed $4$ or $8$, the intersection would have been larger than $\\{6\\}$. If $6$ had missed $B$, the overlap would have been empty. Against the given lists, the recovered intersection is the singleton $6$, matching the claimed roster.",
      "The recovered intersection is $\\{6\\}$, so the statement is True.",
    ].join("\n\n"),
  },
  {
    file: "textbook/output/_rev/ch1/01_10.json",
    id: "math-1-7",
    letter: "A",
    idx: 0,
    key: true,
    body: [
      "A cohort of $50$ students has two course lists: $30$ in Mathematics and $25$ in Economics, with $12$ people on both lists. The claim asks how many students take at least one of the two courses, which is the size of the union, not the size of the overlap and not the leftover who take neither.",
      "The overview's region table already filled that union row as $43$. Inclusion-exclusion is how that row was built: adding the two headlines counts the $12$ shared students twice, so one copy of the overlap is subtracted. The recovered $|M\\cup E|=43$ is the object this letter is reading.",
      "The tempting false figure is $55$, the raw sum of the headlines with the overlap counted twice. That total already overshoots the room of $50$, which is a warning that a double count has occurred. Subtracting the overlap twice would underfill, landing on $31$. Union keeps the shared $12$ once, not twice and not zero times.",
      "A student who reports $30$ or $25$ has named a single headline rather than the join. A student who reports $12$ has named the both-region. Neither of those is the at-least-one count.",
      "What would have to change for the opposite verdict is a different overlap. If the courses had shared $0$ students, the union would have been $55$, which cannot even fit in a cohort of $50$. If they had shared $25$, the union would have been $30$. Against the given $|M\\cap E|=12$, the recovered union size is $43$.",
      "The recovered union has $43$ students, so the statement is True.",
    ].join("\n\n"),
  },
  {
    file: "textbook/output/_rev/ch1/08_17.json",
    id: "math-1-52",
    letter: "B",
    idx: 1,
    key: true,
    body: [
      "A universal implication on $\\{1,\\ldots,20\\}$ fails only at a point where the \"if\" holds and the \"then\" fails. Here the \"if\" is \"divisible by $4$\" and the \"then\" is \"divisible by $2$.\" A counterexample would have to be a multiple of four in the range that is odd.",
      "Part 3 already recorded that every multiple of $4$ in the range is even. The recovered list of those multiples is $\\{4,8,12,16,20\\}$, and each of them is even because a multiple of four can be written $4k=2(2k)$. There is no odd multiple of four among the integers, so there is none in this finite universe either. The implication therefore holds at every point of the range.",
      "The trap is to fight the converse instead: \"if even, then a multiple of four.\" That reverse arrow breaks at $x=2$, and it is the next letter. This letter is four-implies-even, which is the true direction. Another mix-up is to search for a counterexample at $x=15$ or at some other odd number. An odd number never triggers the \"if,\" so it cannot kill the implication.",
      "What would have to change for the opposite verdict is a universe containing a multiple of four that is not even. No such integer exists. Shrinking the universe cannot create a counterexample either; it can only omit some of the recovered multiples, all of which still satisfy the \"then.\"",
      "The recovered multiples of four are all even, so the statement is True.",
    ].join("\n\n"),
  },
  {
    file: "textbook/output/_rev/ch1/09_18.json",
    id: "math-1-32",
    letter: "B",
    idx: 1,
    key: true,
    body: [
      "The letter lists $A=\\{a,b,c,d\\}$ and $B=\\{c,d,e\\}$ share a small overlap cell. Intersection keeps only the letters that appear on both rosters. This claim names that cell as $\\{c,d\\}$.",
      "Part 3 already lined $A$ up against $B$ and recovered $A\\cap B=\\{c,d\\}$. Letters $a$ and $b$ sit in $A$ and miss $B$, so they cannot survive an intersection. Letter $e$ sits in $B$ and misses $A$, so it cannot survive either. Only $c$ and $d$ clear both tests.",
      "The trap is to include $e$ because it sits next to $d$ on $B$'s roster, as if adjacency were membership in $A$. Adjacency is not membership. Another trap is to run a union and keep $a,b,e$ as well, reprinting letter A's five-letter list under an intersection heading. Intersection is the overlap cell only. A third mix-up is to copy $A\\setminus B=\\{a,b\\}$ into this slot; that leftover is $A$'s private letters, the opposite outer cell.",
      "Letter $e$ is the whole of the recovered $B\\setminus A$. It is $B$-only by construction, so it is the one letter of $B$ that intersection with $A$ must drop.",
      "What would have to change for the opposite verdict is a third shared letter. If $e$ had sat in $A$, the intersection would have been $\\{c,d,e\\}$. If $c$ had missed $B$, the overlap would have been the singleton $\\{d\\}$. Against the given lists, the recovered intersection is $\\{c,d\\}$.",
      "The recovered intersection is $\\{c,d\\}$, so the statement is True.",
    ].join("\n\n"),
  },
  {
    file: "textbook/output/_rev/ch1/09_18.json",
    id: "math-1-37",
    letter: "A",
    idx: 0,
    key: true,
    body: [
      "Cartesian product size counts ordered pairs, not the symbols used to write them. Here $A$ has three letters $m,n,p$ and $B$ has two numbers $1,2$, and each letter is paired with each number, letter first.",
      "Part 3 already listed those six letter-first pairs and recorded $|A\\times B|=6$. The product rule is that count: three choices for the first slot times two for the second. This letter is reading that recovered size, not testing whether a particular pair belongs.",
      "The tempting false figure adds the factor sizes instead of multiplying:",
      "$$3+2=5$$",
      "or counts the five distinct symbols $m,n,p,1,2$ as if the product were a bag of letters and numbers. Five symbols can make six ordered pairs because each letter is reused across two numbers, and order of slots is part of the object. Another mix-up is to report $2^3=8$ or $3^2=9$, borrowing a power-set count.",
      "What would have to change for the opposite verdict is a different factor size. If $B$ had three numbers, the product would have nine pairs. If $A$ had been a singleton, the product would have two pairs. Against three letters and two numbers, the recovered product has six letter-first pairs.",
      "The recovered product has six pairs, so the statement is True.",
    ].join("\n\n"),
  },
  {
    file: "textbook/output/_rev/ch1/09_18.json",
    id: "math-1-37",
    letter: "B",
    idx: 1,
    key: true,
    body: [
      "Membership in a Cartesian product is a two-slot test, not a size check and not a bag of two objects. The pair $(m,1)$ is being asked whether it sits in $A\\times B$, whose convention in this stem is letter first, number second.",
      "Part 3 already listed $(m,1)$ as the first pair of the recovered $A\\times B$ roster. Both slots succeed: $m\\in A$ and $1\\in B$. That is the whole membership test. This letter is not asking how many pairs there are, which was the previous letter, and is not asking whether the reversed pair belongs, which is the next letter.",
      "The trap is to reverse the coordinates and test $(1,m)$ instead. Ordered pairs treat those as different objects: $(1,m)$ puts a number first, and $1\\notin A$, so it fails the $A\\times B$ test even though it sits in $B\\times A$. Another mix-up is to treat $\\{m,1\\}$ as the same as $(m,1)$. A two-element set does not remember order and is not an element of a product of letters with numbers.",
      "What would have to change for the opposite verdict is a failed slot. If $m$ were missing from $A$, or if $1$ were missing from $B$, the pair would be out. The given $A$ is $\\{m,n,p\\}$ and the given $B$ is $\\{1,2\\}$, so both slots of $(m,1)$ are legal.",
      "The recovered $A\\times B$ contains $(m,1)$, so the statement is True.",
    ].join("\n\n"),
  },
  {
    file: "textbook/output/_rev/ch1/09_18.json",
    id: "math-1-38",
    letter: "B",
    idx: 1,
    key: true,
    body: [
      "Difference $B\\setminus A$ lives inside $B$: it keeps $B$'s private numbers and deletes whoever also sits in $A$. On these odd-number lists, that is the opposite leftover from $A\\setminus B$, not a copy of it.",
      "Part 3 already sorted every number into three buckets and placed $11$ and $13$ in the $B$-only cell. The shared triple $3,5,7$ leaves $B$ because those numbers sit in $A$. The private $11$ and $13$ miss $A$, so they stay. The recovered $B\\setminus A=\\{11,13\\}$ is the object the claim names.",
      "The trap is to copy $\\{1,9\\}$, the $A$-only bucket from the previous letter, as if difference were commutative. It is not: the leftover lives inside the set named on the left. Another mix-up is to keep $3$ because it started in $B$, reprinting overlap under a difference heading. A third is to join the outer buckets and write $\\{1,9,11,13\\}$, which is the symmetric difference, a later letter.",
      "What would have to change for the opposite verdict is a different $B$-only cell. If $11$ had sat in $A$, the leftover would have been the singleton $\\{13\\}$. If $A$ and $B$ had been disjoint, $B\\setminus A$ would have equalled $B$. Against the given lists, the recovered opposite leftover is $\\{11,13\\}$.",
      "The recovered $B\\setminus A$ is $\\{11,13\\}$, so the statement is True.",
    ].join("\n\n"),
  },
  {
    file: "textbook/output/_rev/ch1/11_20.json",
    id: "math-1-16",
    letter: "E",
    idx: 4,
    key: true,
    body: [
      "Proper subsets are all subsets except the set itself. For the six even numbers $A=\\{2,4,6,8,10,12\\}$, each number is an independent keep-or-drop choice, so the power set has $64$ members. Properness then drops only $A$, leaving $63$.",
      "Part 3 already recorded that count: total subsets $2^6=64$, proper subsets $64-1=63$. This letter is reading that recovered proper count, not testing whether $6$ is an element and not testing whether $\\emptyset\\subseteq A$. Those lookups are earlier letters. The empty set is a proper subset of $A$ because it is a subset and it is unequal to $A$. Dropping it as well would mix proper with nonempty.",
      "The standard false figure is $62$:",
      "$$64-2=62$$",
      "which subtracts both $A$ and $\\emptyset$. That is the count of nonempty proper subsets, a different statistic. Another mix-up is to report $64$, the full power-set size, or $6$, the number of elements, or $63$ obtained as $7\\times 9$ with no set meaning.",
      "What would have to change for the opposite verdict is a different ground-set size, or a definition of \"proper\" that also excludes $\\emptyset$. The stem's $A$ has six members, and proper means unequal to $A$. The recovered proper count is $63$, empty set included and $A$ itself excluded.",
      "The recovered proper count is $63$, so the statement is True.",
    ].join("\n\n"),
  },
  {
    file: "textbook/output/_rev/ch1/11_20.json",
    id: "math-1-17",
    letter: "D",
    idx: 3,
    key: true,
    body: [
      "Cardinality counts distinct members of the recovered set, not the degree of the polynomial and not the number of times a factor is written. The set-builder $A=\\{x\\in\\mathbb{Z}:x^2-5x+6=0\\}$ was already solved in the overview: both roots $2$ and $3$ are integers, so $A=\\{2,3\\}$.",
      "This letter asks only for the size of that recovered pair. Two distinct points on the number line give $|A|=2$. The given $B=\\{2,3\\}$ has the same two members, so it has the same size, but this claim is not the equality $A=B$; that was letter A.",
      "The trap is to report $1$ after deleting a root, which travels with the previous letter's false figure $A=\\{2\\}$. Deleting $3$ because it is \"the larger root\" is an extra filter the builder never wrote. Another trap is to report $3$, treating a quadratic as if it contributed a third phantom member, or to report the degree $2$ as a coincidence that happens to match for the wrong reason. Degree is not cardinality. A repeated root would still be one member; here the roots are distinct anyway.",
      "What would have to change for the opposite verdict is a universe that cuts a root, or an extra inequality. Building $A$ over a universe that excludes $3$, or adding $x>3$, would leave fewer than two members. Against $\\mathbb{Z}$ with no extra cut, the recovered $A$ has two members.",
      "The recovered set has two members, so the statement is True.",
    ].join("\n\n"),
  },
  {
    file: "textbook/output/_rev/ch1/11_20.json",
    id: "math-1-19",
    letter: "D",
    idx: 3,
    key: true,
    body: [
      "Ordinary inclusion $E\\subseteq E$ is reflexivity: every member of $E$ sits in $E$ by construction. The set $E=\\{1,2,3\\}$ does not need a larger companion $F$ for this test. Walking through $1,2,3$ finds each of them in $E$, so there is no counterexample.",
      "Part 3 already marked that self-inclusion among the self-tests. This letter is ordinary $\\subseteq$, not proper inclusion. Proper self-inclusion would also need $E\\ne E$, which is the next letter and which never holds. Borrowing the word \"proper\" from that next claim and pasting it here is the whole trap.",
      "A rushed solver refuses $E\\subseteq E$ because \"a set cannot be a subset of itself,\" mixing the proper reading with the ordinary one. Another mix-up is to look for leftover in $F$ before allowing the self-test, as if inclusion always compared two different lists. Reflexivity does not consult $F$. The extra $4\\in F\\setminus E$ is doing inequality work in letters B and C, not here.",
      "What would have to change for the opposite verdict is a different symbol: if the claim had said $E\\subsetneq E$, it would fail for the reason the next letter records. Against ordinary $\\subseteq$, the recovered self-inclusion holds for this $E$ and for every set.",
      "The recovered $E\\subseteq E$ holds, so the statement is True.",
    ].join("\n\n"),
  },
  {
    file: "textbook/output/_rev/ch1/11_20.json",
    id: "math-1-20",
    letter: "B",
    idx: 1,
    key: true,
    body: [
      "Coverage for a candidate partition asks whether the blocks, joined, recover the ground set. Here $G=\\{1,2,3,4,5,6\\}$ and the blocks of $\\mathcal S$ are the three pairs $\\{1,2\\}$, $\\{3,4\\}$, $\\{5,6\\}$. The claim says their union equals $G$.",
      "Part 3 already recorded that cover: $\\{1,2\\}\\cup\\{3,4\\}\\cup\\{5,6\\}=G$. Every number from $1$ through $6$ appears in exactly one of those pairs, so joining them cannot miss $6$ and cannot invent a $7$. This letter is that equality, not the pairwise-disjoint check, which was the previous letter, and not the full three-part verdict that $\\mathcal S$ is a partition, which is the next letter. Coverage can hold while disjointness fails, which is how the impostor $\\mathcal S'$ in a later letter still covers $G$ even as it overlaps at $2$.",
      "The trap is to think a partition's union is allowed to be smaller than $G$, or to miss $6$ by stopping the last pair at $\\{5\\}$. A hole would mean some member of $G$ sits in no block. This collection has no such hole. Another mix-up is to add $7$ into the union by glancing at the later outsider letter; $7$ is not in $G$ and is not in any block of $\\mathcal S$.",
      "What would have to change for the opposite verdict is a missing number. Replacing $\\{5,6\\}$ by $\\{5\\}$ would leave $6$ uncovered, and the union would be a proper subset of $G$. Against the given three pairs, the recovered union is all of $G$.",
      "The recovered union equals $G$, so the statement is True.",
    ].join("\n\n"),
  },
];

function apply() {
  const byFile = new Map();
  const applied = [];
  for (const p of patches) {
    const file = p.file.replace(/\\/g, "/");
    if (!byFile.has(file)) {
      byFile.set(file, JSON.parse(fs.readFileSync(path.join(root, file), "utf8")));
    }
    const arr = byFile.get(file);
    const t = arr.find((x) => x.id === p.id);
    if (!t) throw new Error("missing " + p.id);
    const old = t.tactical_explanations[p.idx];
    const header = old.split("\n")[0];
    if (!header.startsWith("**" + p.letter + ".")) {
      throw new Error("header mismatch " + p.id + " " + p.letter + " got " + header);
    }
    const body = p.body.trim();
    const want = p.key ? "so the statement is True." : "so the statement is False.";
    if (!body.includes(want)) throw new Error("missing closer " + p.id + " " + p.letter);
    if (body.includes("\u2014") || body.includes("\u2013")) {
      throw new Error("dash " + p.id + " " + p.letter);
    }
    if (body.includes("${")) throw new Error("interpol " + p.id + " " + p.letter);
    const paras = body.split(/\n\n+/);
    const openings = paras.map((x) => x.slice(0, 80));
    const dupOpen = openings.filter((x, i) => openings.indexOf(x) !== i);
    if (dupOpen.length) throw new Error("dup opening " + p.id + " " + p.letter);
    const next = header + "\n\n" + body;
    const wc = ch1Words(next);
    if (wc < 180 || wc > 280) {
      throw new Error("word count " + wc + " out of range for " + p.id + " " + p.letter);
    }
    t.tactical_explanations[p.idx] = next;
    applied.push({
      id: p.id,
      letter: p.letter,
      words: wc,
      key: p.key,
      header,
    });
  }
  for (const [file, arr] of byFile) {
    fs.writeFileSync(path.join(root, file), JSON.stringify(arr, null, 2) + "\n");
  }
  return applied;
}

const applied = apply();
for (const row of applied) {
  console.log(row.id, row.letter, row.words, row.header);
}
console.log("applied", applied.length);
