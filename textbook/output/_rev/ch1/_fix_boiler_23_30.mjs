import { applyLetters } from "./_apply_letters.mjs";

const patches = {
  "math-1-101": {
    D: `**D.** → False

Try Ana out and Boris out together. Rule (4) still puts Dmitri in. With Ana out, rule (3) has no unless-exception, so Ceci attending would force Dmitri out, contradicting rule (4). Thus Ceci is out. Rule (2) says: if Boris is out, then Ceci attends. Boris out and Ceci out make rule (2) fail. The attempted pair "both absent" collapses: Boris is forced in. That is the Ana-out roster, not a third one.

A solver who thought "two absences are independent" would have missed the chain from Ana-out to Ceci-out to Boris-in. The extra case work is that failed third roster.

The recovered solutions are only two: $\\{\\text{Ana},\\text{Ceci},\\text{Dmitri}\\}$ and $\\{\\text{Boris},\\text{Dmitri}\\}$. In the first, Ana attends so the pair of absences fails. In the second, Boris attends so the pair fails again. There is no legal roster in which Ana and Boris are both missing.

**1.** Ana out forces Ceci out, because otherwise Dmitri would be pushed out by the plain form of rule (3), against rule (4).

**2.** Ceci out with Boris out breaks rule (2). So Boris must attend whenever Ana stays away.

**3.** Ana in already sends Boris away by rule (1), which is the other recovered roster, still not "both out."

What would make the claim true? Dropping rule (2), or dropping Dmitri's mandatory attendance, so that Ceci could sit out with both Ana and Boris. Against the given four rules, the recovered chain forbids the joint absence.

The Ana-in roster already has Boris out, which is one absence, not two. The Ana-out roster already has Boris in, which is the other absence, not two. Joint absence would be a third roster, and the extra case work of this letter is that third roster's collapse at rule (2).

so the statement is False.`,
  },
  "math-1-102": {
    B: `**B.** → False

Suppose Leo and Noah both join. Rule (2): Leo joins only if Zoe joins, so Zoe must join. Rule (4): if Zoe joins, then Noah does not join. Zoe in and Noah in contradict rule (4). The chain is Leo $\\Rightarrow$ Zoe $\\Rightarrow$ not Noah, so Leo and Noah cannot share a roster. None of the legal rosters contains both.

A solver who sat them together because "study groups want everyone" would have ignored the numbered chain. Extra check: put Leo and Noah in, force Zoe by (2), break (4). That failed roster is this letter's extra case.

The recovered legal list is five rosters, and every one of them omits at least one of Leo or Noah. The unique Noah roster is $\\{\\text{Noah},\\text{Maria}\\}$, with Leo and Zoe out. Every Leo roster includes Zoe and therefore excludes Noah.

Rule (3) never rescues the pair: it only demands Maria or Leo, and Maria already covers that demand in the Noah roster. Adding Leo on top of Noah is not required, and it is forbidden by the chain through Zoe.

What would make the pair legal? A stem that dropped rule (4), or that let Leo join without Zoe. Against the given rules, the recovered chain keeps them apart.

Maria-alone and Maria-Zoe are legal and contain neither of the forbidden pair. Adding both Leo and Noah to any of those would reintroduce Zoe through Leo and then expel Noah. The extra case is that attempted six-person pile-up, which dies at (4).

The recovered chain Leo to Zoe to not-Noah is a two-step implication, not a vague "they might clash." No legal roster from the overview's five-row list contains both names. That census is this letter's check.

so the statement is False.`,
  },
  "math-1-103": {
    A: `**A.** → True

Open with rule (1): Ben $\\Rightarrow$ Carla. Then rule (3): Carla $\\Rightarrow$ not Dan. Chain them: Ben $\\Rightarrow$ Carla $\\Rightarrow$ not Dan, so Ben playing forces Dan out. Ben pulls Carla in and Carla shuts Dan out, two rules in a row, no exceptions.

A solver who thought Dan could tag along with Ben would have broken (3) once Carla arrived.

The recovered Ben rosters are $\\{\\text{Ben},\\text{Carla}\\}$ and $\\{\\text{Ben},\\text{Carla},\\text{Ella}\\}$. Dan is absent from both. The Dan roster $\\{\\text{Dan},\\text{Ella}\\}$ has no Ben. The chain is the whole of this letter; Ella is free on the Ben side and does not reopen a seat for Dan. Rule (2) never lets Dan in without Ella, and even with Ella, Carla is already there whenever Ben is there, so Dan still cannot join. The recovered implication is Ben playing, therefore Dan sitting out. Ella's optional seat on the Ben side is a later choice and does not rewrite rule (3).

so the statement is True.`,
    B: `**B.** → False

Suppose Ben and Dan both play. Rule (1) forces Carla in with Ben. Rule (3) then says: if Carla plays, Dan does not. Carla in and Dan in contradict rule (3). Equivalently: Ben $\\Rightarrow$ Carla $\\Rightarrow$ not Dan. The pair is impossible.

The extra case is that failed pair. A solver who sat them together because "friends" would have ignored the chain.

Letter A already recovered the chain as an implication. This letter is the same chain read as a forbidden pair. Scanning the five legal rosters confirms it: no roster lists both names. Ella cannot mediate, because Carla is already in whenever Ben is in, and Carla forbids Dan. A friendship story that sat them at the same table would still have to obey (1) then (3). Those two rules, in that order, leave no legal seat for the pair. The recovered five-roster list is the census: Ben appears, Dan appears, never in the same row.

so the statement is False.`,
    C: `**C.** → True

Check $\\{\\text{Ella}\\}$ against the four rules. Ben is out, so rule (1) is idle; Dan is out, so rule (2) is idle; Carla is out, so rule (3) is idle. Rule (4) needs Ben or Ella, and Ella is in. $\\{\\text{Ella}\\}$ passes every rule. Ella can play alone.

A solver who thought rule (4) needed both Ben and Ella would have been running an and.

This is an existence claim, so one surviving roster is the whole proof. The recovered list includes $\\{\\text{Ella}\\}$ as the "neither Carla nor Dan" case on the Ben-out side. Rule (4) is already satisfied by Ella, so Ben is not required to join her. Rules (1) through (3) never fire, because their hypotheses are false.

What would kill the singleton? A rule demanding at least two players, or demanding Carla whenever Ella plays. The stem has neither. Against the given four rules, the recovered singleton is legal.

The other Ben-out rosters $\\{\\text{Carla},\\text{Ella}\\}$ and $\\{\\text{Dan},\\text{Ella}\\}$ also exist, so Ella-alone is not the only Ben-out file. Existence needs only one, and $\\{\\text{Ella}\\}$ is the one named. Rule (4) is an or, not an and, which is why Ella does not need Ben beside her.

so the statement is True.`,
    D: `**D.** → True

Rule (3) is Carla $\\Rightarrow$ not Dan. Contrapose: Dan $\\Rightarrow$ not Carla. That is the claimed sentence, taken from a numbered rule. The only legal roster containing Dan is $\\{\\text{Dan},\\text{Ella}\\}$: rule (2) is satisfied because Ella plays, rule (4) is satisfied by Ella, and Carla is out, matching the contrapositive.

A solver who put Carla with Dan would have broken (3) directly.

A rule and its contrapositive are the same claim, so no extra case work is required beyond reading (3) backwards. The recovered Dan roster simply illustrates the contrapose: Dan in, Carla out, Ella in to cover rule (2). Ben is then out automatically, because Ben would have brought Carla. The claimed sentence is therefore (3) contraposed, not a new constraint on Ella. If Carla were allowed to play with Dan, rule (3) itself would be gone, which is not this stem. The recovered Dan roster is {Dan, Ella} with Carla out, which is the contrapose in a picture.

so the statement is True.`,
  },
  "math-1-104": {
    A: `**A.** → True

Rule (4) is: Quinn cooks only if Owen does not, that is Quinn $\\Rightarrow$ not Owen. Contrapose it: Owen $\\Rightarrow$ not Quinn. That is the claimed implication, taken from a numbered rule. Quinn is out whenever Owen is in. Turn the "only if" around and Owen cooking means Quinn does not.

A solver who kept Quinn with Owen would have broken (4).

The recovered Owen evening is $\\{\\text{Owen}\\}$ alone. Priya is already out by rule (1), and Quinn is out by this contrapose, so the kitchen has one cook. The other recovered evening $\\{\\text{Priya},\\text{Quinn}\\}$ has Owen out, which is compatible with Quinn cooking. This letter only asks the Owen-to-not-Quinn direction, which (4) contraposed already is. An evening with Owen and Quinn together would break (4) before (1) or (2) are even read. Priya's absence on the Owen night is a different rule; Quinn's absence is this contrapose. Two absences, two reasons, one recovered Owen-only kitchen.

so the statement is True.`,
    D: `**D.** → True

Rule (3) says: if Priya cooks, then Quinn also cooks. That is exactly the claimed guarantee. The only Priya evening the other rules allow is $\\{\\text{Priya},\\text{Quinn}\\}$, which includes Quinn: Owen is out by (1) and (2), and (4) holds because Owen is away. That is rule (3) quoted back.

A solver who dropped Quinn on a Priya night would have broken (3).

The recovered pair of evenings is $\\{\\text{Owen}\\}$ and $\\{\\text{Priya},\\text{Quinn}\\}$. Whenever Priya is in the kitchen, Quinn is there too. The guarantee is not a new derivation; it is a numbered rule illustrated by the only surviving Priya roster. Owen-alone does not test this letter, because Priya is out and (3) is idle. The claim is about Priya nights, and on those nights Quinn is recovered as present. Dropping Quinn while Priya cooks is exactly the failure row of rule (3), and no legal evening has that row. The recovered Priya night is {Priya, Quinn}, which is the guarantee in a picture.

so the statement is True.`,
  },
  "math-1-105": {
    B: `**B.** → True

Rule (6) says Hugo goes only if Fatima does not; contraposed, Fatima going means Hugo staying home. A rule and its contrapositive are the same claim, so no case work is needed. That is the claimed implication, equivalent to a given rule.

A solver who started a five-person case split would have been doing letter C's work. This letter is (6) contraposed.

The recovered fact after Diego's collapse is that Hugo must go, which already forces Fatima out by (6). The contrapose $F\\Rightarrow\\neg H$ is still the same numbered rule, now read from Fatima's side. Sitting Fatima and Hugo together would break (6) on the spot, before any other chain is run. Letter C will force Hugo by a different route; this letter never needs that force, because (6) backwards already forbids the Fatima-Hugo pair. The claimed arrow is that numbered rule read from Fatima's side, not a new chain through Diego.

so the statement is True.`,
    C: `**C.** → True

Diego cannot go: $D\\Rightarrow F\\Rightarrow\\neg G\\Rightarrow H\\Rightarrow\\neg F$ collides. With Diego gone, rule (4) still needs Diego or Hugo, so Hugo must go in every remaining roster. Rule (4) needs Diego or Hugo, and Diego is off the table entirely, so the whole burden falls on Hugo.

A solver who thought Hugo was optional once Diego was out would have broken (4). The extra force is (4) after the Diego-collapse.

**1.** Diego in pulls Fatima by (1), which by (3) drops Grace, which by (2) puts Hugo in, which by (6) drops Fatima. Fatima in and Fatima out is the collision, so Diego is impossible.

**2.** Rule (4) is $D\\lor H$. After $D$ is impossible, $H$ is forced.

**3.** Iris is a later choice and cannot restore Diego, because (5) only forbids Iris-with-Diego; it does not create a Diego-in roster.

What would make Hugo optional? A legal Diego-in roster, which the Fatima collision forbids, or a stem that dropped rule (4). Against the given six rules, Hugo attends in every surviving assignment.

Iris can join some of those assignments, and Grace is already out once Hugo is in, by rule (2)'s "unless." None of those later choices restores a Hugo-out roster, because Diego is still impossible and (4) still needs one of Diego or Hugo. The recovered mandatory name is Hugo.

A solver who kept Hugo optional after seeing Diego fail would have left rule (4) with two false disjuncts. The extra force in this letter is that remaining disjunct, not a new preference for Hugo. After Diego's collision, Hugo is the only way to keep rule (4) true, so he attends in every surviving assignment.

so the statement is True.`,
  },
  "math-1-106": {
    C: `**C.** → True

Rule (4) is the given sentence: Caleb presents only if Ethan presents, which is Caleb $\\Rightarrow$ Ethan. The claim quotes that implication. There is nothing to derive; "only if" *is* that implication. Both surviving Caleb rosters include Ethan.

A solver who dropped Ethan from a Caleb roster would have broken (4) on the spot.

The recovered live people after the Bella exclusions are Caleb, Daisy, and Ethan, with (2) and (4) still in force. Whenever Caleb is in, (4) brings Ethan. Daisy may or may not join, but Ethan is not optional on a Caleb roster. Quoting (4) is the whole of this letter. Aiden, Bella, and Faye are already off the table from earlier collisions; they cannot create a Caleb-without-Ethan roster, because (4) does not care who else is missing. "Only if" is the arrow, and the recovered live Caleb files all include Ethan. Quoting rule (4) is enough; no extra intern needs to be placed.

so the statement is True.`,
  },
  "math-1-107": {
    A: `**A.** → True

Suppose Petra does not review. Rule (6): Sana reviews only if Petra reviews, so Sana is out too. Rule (4) needs Petra or Sana, and both are gone. Contradiction. Therefore Petra reviews in every valid assignment. Drop Petra and rule (6) drops Sana with her, leaving rule (4) with nobody at all.

A solver who left Petra optional would have missed that double drop.

The recovered unique assignment is Petra, Sana, and Theo reviewing, with Quinn and Ravi out. Petra's presence is the first switch in that row: without her, Sana cannot cover (4), and (4) has no other covering person. Later switches (Quinn out, Theo in, Ravi out, Sana in) all assume Petra is already in.

What would make Petra optional? A stem that let Sana review without Petra, or that dropped rule (4). Against the given six rules, every valid assignment includes Petra.

The recovered unique triple is Petra, Sana, Theo. Quinn is out by (1) once Petra is in, Theo is in by (3) once Quinn is out, and Ravi is out by (5) once Theo is in, which then forces Sana by (2). That whole cascade starts only after Petra is already seated. This letter stops at that first forced name.

The extra case is the failed Petra-out roster: Sana drops by (6), then (4) has nobody. That collapse is why "every valid assignment" includes Petra, not a count of how many assignments exist. The recovered unique assignment starts with Petra; without her the rules have no covering person for (4). Petra is the first recovered object this letter needs, and that object is forced. A solver who left her optional would have been scanning later switches before locking the first one.

so the statement is True.`,
    B: `**B.** → True

Rule (1) says: if Petra reviews, then Quinn does not. Contrapose it: if Quinn reviews, then Petra does not. That is the claimed sentence. Combined with Petra reviewing in every valid assignment (else (6) and (4) collide), Quinn is excluded as well. Contrapositive of rule (1), so it holds automatically.

A solver who put Quinn in with Petra would have broken (1) directly.

The recovered unique assignment already has Quinn out. This letter does not need that uniqueness to justify the contrapose: (1) backwards is enough. Uniqueness only explains why Quinn never appears even as a lone reviewer. The claimed implication is the numbered rule read from Quinn's side. Putting Quinn in would require Petra out, which letter A already showed collides with (6) and (4). Either reading, Quinn cannot review. The claimed implication is still just (1) contraposed, true in the unique recovered assignment and in any assignment that obeys (1). Quinn-in would need Petra-out, which letter A already forbade.

so the statement is True.`,
  },
  "math-1-108": {
    C: `**C.** → True

Rule (6) says Zane competes only if Bianca does not, that is Zane $\\Rightarrow$ not Bianca. Contrapose it: Bianca $\\Rightarrow$ not Zane. That is the claimed implication. The two never appear together. Among Yara, Zane and Bianca, rule (6) forbids the Zane and Bianca pair.

A solver who sat them together would have broken (6) on the spot.

The recovered hinge of the puzzle is the four-competitor minimum, which forces Victor in and then a chain of names. This letter does not rerun that hinge. It only reads (6) backwards. Bianca in, Zane out, is the contrapose, and it holds in every roster that (6) governs, including those later forced by the four-person count. Yara can cover rule (5) when Zane is out, so Bianca's presence does not leave (5) empty. The forbidden pair is only Bianca with Zane. Reading (6) backwards is this letter's whole job; the four-person hinge is neighbouring work.

so the statement is True.`,
  },
};

const { n, report } = applyLetters(
  new URL("./23_30.json", import.meta.url),
  patches
);
console.log("rewritten", n);
for (const r of report) console.log(r.id, r.letter, r.words);
