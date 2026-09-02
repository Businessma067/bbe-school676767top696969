import { apply } from "./_patch_batch.mjs";

apply(new URL("./23_30.json", import.meta.url), {
  "math-1-101": {
    solution_overview: `Rule (4) is a flat fact: Dmitri attends, and that holds in every solution. The only real split is Ana.

If Ana attends, rule (1) sends Boris away. Rule (2), triggered by Boris's absence, brings Ceci in. Rule (3) would normally push Dmitri out when Ceci attends, but its "unless" exception is on because Ana is here, so Dmitri is unrestricted and rule (4) is satisfied. Roster: Ana, Ceci, Dmitri (three attendees, Boris away).

If Ana stays away, rule (3) applies in its plain form, so Ceci attending would force Dmitri out. Dmitri is in, so Ceci is out. Reading rule (2) backwards: if Ceci is absent then Boris cannot be absent, which puts Boris in. Rule (1) is content because Ana is away. Roster: Boris, Dmitri (two attendees).

Both cases work, so there are exactly two solutions and they disagree about Ana. Ana and Boris are never absent together: dropping Ana forces Ceci out and then Boris in.`,
    tactical_explanations: [
      `**A.** → True

Rule (4) states "Dmitri attends" outright. Both legal rosters keep him; dropping him would violate rule (4) immediately.`,
      `**B.** → False

Ana is in one valid roster (Ana, Ceci, Dmitri) and out of the other (Boris, Dmitri). The rules leave her decision open.`,
      `**C.** → True

The Ana-attends roster is $\\{\\text{Ana},\\text{Ceci},\\text{Dmitri}\\}$, size $3$. One example is all an existence claim needs.`,
      `**D.** → False

Neither roster has both Ana and Boris missing. Trying Ana out and Boris out: rule (4) still puts Dmitri in; with Ana out, rule (3) has no exception, so Ceci must stay out; then rule (2) fails unless Boris attends. The attempt collapses into the Boris-Dmitri roster.`,
      `**E.** → False

Delete the unless-exception, so Ceci attending always forces Dmitri out. The Ana-Ceci-Dmitri roster dies because it has Ceci and Dmitri both in. The other roster is $\\{\\text{Boris},\\text{Dmitri}\\}$ with Ceci out, so the stricter rule (3) is idle and still holds. One legal roster remains; the rules do not become impossible.`,
    ],
  },
  "math-1-102": {
    solution_overview: `Write the four rules as implications and notice that a rule whose "if" part is false demands nothing:

$$\\text{(1) Noah}\\Rightarrow\\text{Maria},\\quad\\text{(2) Leo}\\Rightarrow\\text{Zoe},\\quad\\text{(3) Maria or Leo},\\quad\\text{(4) Zoe}\\Rightarrow\\neg\\,\\text{Noah}.$$

Leo brings Zoe by rule (2), and Zoe expels Noah by rule (4), so Leo and Noah can never share a session.

If Noah joins, Maria comes with him by rule (1), Zoe is excluded by rule (4) read backwards, and therefore Leo is excluded too. Rule (3) is satisfied by Maria, so there is exactly one Noah roster: $\\{\\text{Noah},\\text{Maria}\\}$.

If Noah stays out, rule (3) still needs Maria or Leo, and Leo drags Zoe along whenever he joins. The complete legal list:

| Roster | Why it is legal |
| --- | --- |
| Noah, Maria | Maria satisfies rule (3); Zoe and Leo are out |
| Maria | rules (1), (2), (4) idle; Maria satisfies rule (3) |
| Maria, Zoe | Zoe is harmless with Noah away |
| Maria, Leo, Zoe | Leo has his Zoe |
| Leo, Zoe | rule (3) satisfied by Leo |

Five legal rosters, and no student appears in all five.`,
    tactical_explanations: [
      `**A.** → True

The claimed arrow is rule (4) read backwards. The unique Noah roster $\\{\\text{Noah},\\text{Maria}\\}$ duly has no Zoe.`,
      `**B.** → False

Suppose Leo and Noah both join. Rule (2) forces Zoe in with Leo, and rule (4) then forbids Noah. The chain is Leo $\\Rightarrow$ Zoe $\\Rightarrow$ not Noah. None of the five legal rosters contains both.`,
      `**C.** → True

$\\{\\text{Maria}\\}$ is already on the legal list. Maria covers rule (3) by herself; the other three rules are idle.`,
      `**D.** → True

Turn rule (1) around: Maria absent forces Noah absent. That contrapose is equivalent to a numbered rule, so it holds in every legal roster with no extra case work.`,
      `**E.** → False

A "must join" claim fails as soon as one legal roster leaves Zoe out. The roster $\\{\\text{Maria}\\}$ is legal and omits her. Zoe appears in some of the five rosters, not all.`,
    ],
  },
  "math-1-103": {
    solution_overview: `Start with the rule that has the longest reach. Ben brings Carla in by rule (1), and Carla pushes Dan out by rule (3):

$$\\text{Ben}\\Rightarrow\\text{Carla}\\Rightarrow\\neg\\,\\text{Dan}.$$

A game with Ben in it never has Dan. Read from the other end: if Dan plays then Carla stays out, and with no Carla there can be no Ben either.

With Ben playing: Carla joins, Dan is out, rule (4) is already satisfied by Ben, so Ella may please herself. Two rosters, $\\{\\text{Ben},\\text{Carla}\\}$ and $\\{\\text{Ben},\\text{Carla},\\text{Ella}\\}$.

Without Ben: rule (4) forces Ella in. Carla and Dan cannot both play, so we may take Carla, or Dan, or neither. Three more rosters:

- $\\{\\text{Carla},\\text{Ella}\\}$
- $\\{\\text{Dan},\\text{Ella}\\}$ (rule (2) is content because Ella is there)
- $\\{\\text{Ella}\\}$

Five legal games in all. Ella alone is legal, and Carla is missing from two of the five.`,
    tactical_explanations: [
      `**A.** → True

Ben pulls Carla in and Carla shuts Dan out: Ben $\\Rightarrow$ Carla $\\Rightarrow$ not Dan. Both Ben rosters confirm Dan stays home.`,
      `**B.** → False

The same chain forbids the pair. Suppose Ben and Dan both play: rule (1) forces Carla in, and rule (3) then says Dan does not play. Neither Ben roster contains Dan.`,
      `**C.** → True

Check $\\{\\text{Ella}\\}$ against the four rules. Ben is out, so rule (1) is idle; Dan is out, so rule (2) is idle; Carla is out, so rule (3) is idle. Rule (4) needs Ben or Ella, and Ella is in.`,
      `**D.** → True

Rule (3) is Carla $\\Rightarrow$ not Dan. Contrapose: Dan $\\Rightarrow$ not Carla. The only roster containing Dan is $\\{\\text{Dan},\\text{Ella}\\}$, which has no Carla.`,
      `**E.** → False

Carla is pulled in only by rule (1), and only when Ben plays. Without Ben she may sit out. Both $\\{\\text{Ella}\\}$ and $\\{\\text{Dan},\\text{Ella}\\}$ omit her, so she is not compulsory.`,
    ],
  },
  "math-1-104": {
    solution_overview: `Rules (1) and (2) sit together and do most of the work. Rule (1) forbids Owen and Priya from both cooking; rule (2) forbids them from both sitting out. Put them together and exactly one of Owen and Priya cooks. So there are only two evenings to inspect.

Owen cooks. Priya is out by rule (1). Rule (4) says Quinn cooks only when Owen does not, so Quinn is out as well, and rule (3) is idle because Priya is not cooking. Owen cooks alone: $\\{\\text{Owen}\\}$.

Priya cooks. Owen is out. Rule (3) brings Quinn in, and rule (4) is satisfied because Owen is away: $\\{\\text{Priya},\\text{Quinn}\\}$.

That is the complete list. An evening in which Quinn cooks while neither Owen nor Priya does would break rule (2). And since no single person appears in both arrangements, nobody is obliged to cook.`,
    tactical_explanations: [
      `**A.** → True

Rule (4) says Quinn cooks only if Owen does not. Turn it around: Owen cooking means Quinn does not. Quinn is out on the $\\{\\text{Owen}\\}$ evening.`,
      `**B.** → False

Rule (1) says: if Owen cooks, then Priya does not. A night with both cooking would make that hypothesis true and the conclusion false. No later rule is allowed to override a broken numbered rule.`,
      `**C.** → False

Check $\\{\\text{Quinn}\\}$ against the four rules. Rule (2) requires Owen or Priya; neither is cooking, so rule (2) fails immediately. Quinn is not permitted to stand in for them.`,
      `**D.** → True

Rule (3) says: if Priya cooks, then Quinn also cooks. That is the claimed guarantee, and the only Priya evening the other rules allow is $\\{\\text{Priya},\\text{Quinn}\\}$.`,
      `**E.** → False

The rules insist that one of Owen and Priya cooks, not that it must be Owen. The evening $\\{\\text{Priya},\\text{Quinn}\\}$ is legal with Owen resting.`,
    ],
  },
  "math-1-105": {
    solution_overview: `Six rules, but one assumption blows up immediately.

Suppose Diego goes. Rule (1) brings Fatima. Rule (3) then pushes Grace out. Rule (2) needs Grace or Hugo, and Grace is out, so Hugo goes. Rule (6): Hugo goes only if Fatima does not, so Fatima is out. Fatima was in and then out: contradiction. Diego never goes.

Rule (4) wants Diego or Hugo, and Diego is unavailable, so Hugo goes in every scenario. Rule (6) then keeps Fatima out in every scenario. With Diego and Fatima gone, rules (1), (3), and (5) all have false "if" parts and demand nothing.

Rule (2) is already satisfied by Hugo, and no rule connects Grace with Iris, so each of them may come or not, independently:

$$\\{\\text{Hugo}\\},\\quad\\{\\text{Hugo},\\text{Grace}\\},\\quad\\{\\text{Hugo},\\text{Iris}\\},\\quad\\{\\text{Hugo},\\text{Grace},\\text{Iris}\\}.$$

Four valid rosters, every one containing Hugo, none containing Diego or Fatima.`,
    tactical_explanations: [
      `**A.** → False

Diego's chain was Diego $\\Rightarrow$ Fatima $\\Rightarrow$ no Grace $\\Rightarrow$ Hugo $\\Rightarrow$ no Fatima, a contradiction. No valid scenario includes him.`,
      `**B.** → True

Rule (6) says Hugo goes only if Fatima does not. Contrapose: Fatima going means Hugo staying home. A rule and its contrapositive are the same claim.`,
      `**C.** → True

Rule (4) needs Diego or Hugo, and Diego is off the table entirely, so the whole burden falls on Hugo. He appears in all four rosters.`,
      `**D.** → True

The roster $\\{\\text{Hugo},\\text{Grace},\\text{Iris}\\}$ is on the list. With Diego and Fatima out, rules (1) and (3) are idle, rule (2) is satisfied by Hugo, rule (4) is satisfied by Hugo, rule (5) holds because Diego is out, and rule (6) holds because Fatima is out.`,
      `**E.** → False

The claimed implication is Iris $\\Rightarrow$ Fatima. Fatima goes in no legal roster. Iris goes in $\\{\\text{Hugo},\\text{Iris}\\}$ and $\\{\\text{Hugo},\\text{Grace},\\text{Iris}\\}$. Take the latter: Iris in, Fatima out. True "if", false "then."`,
    ],
  },
  "math-1-106": {
    solution_overview: `Three of the six interns can be eliminated one after another.

Suppose Bella presents. Rule (3) removes Daisy, and rule (6) ("Ethan presents only if Bella does not") removes Ethan. Rule (2) insists on Daisy or Ethan, and both are now gone. So Bella never presents.

Rule (1) says Aiden brings both Bella and Caleb with him. Bella is impossible, so Aiden never presents.

Rule (5) says Faye can only present if Aiden does. Aiden is impossible, so Faye never presents.

That leaves Caleb, Daisy, and Ethan, with just two live rules: at least one of Daisy or Ethan (rule 2), and Caleb needs Ethan (rule 4).

- Caleb out: $\\{\\text{Daisy}\\}$, $\\{\\text{Ethan}\\}$, $\\{\\text{Daisy},\\text{Ethan}\\}$
- Caleb in, so Ethan in too: $\\{\\text{Caleb},\\text{Ethan}\\}$, $\\{\\text{Caleb},\\text{Daisy},\\text{Ethan}\\}$

Five valid rosters, comfortably more than one, and every roster containing Caleb also contains Ethan.`,
    tactical_explanations: [
      `**A.** → True

Aiden cannot present without Bella, and Bella's presence leaves rule (2) with nobody to satisfy it. The first domino knocks over the second, so Aiden is excluded everywhere.`,
      `**B.** → False

Put Bella on the roster and she takes Daisy out by rule (3) and Ethan out by rule (6), but rule (2) needs one of those two. Every Bella roster is illegal.`,
      `**C.** → True

Rule (4) is the given sentence: Caleb presents only if Ethan presents, which is Caleb $\\Rightarrow$ Ethan. Both surviving Caleb rosters include Ethan.`,
      `**D.** → False

Faye depends on Aiden by rule (5), Aiden depends on Bella by rule (1), and Bella is impossible. The dependency chain leaves Faye with no way in.`,
      `**E.** → False

Five rosters survive, among them $\\{\\text{Daisy}\\}$ and $\\{\\text{Caleb},\\text{Ethan}\\}$. Two would already be too many for a uniqueness claim.`,
    ],
  },
  "math-1-107": {
    solution_overview: `Begin with the question the rules answer most sharply: does Petra review?

Suppose she does not. Rule (6) says Sana reviews only if Petra does, so Sana is out too, and rule (4) demanded at least one of Petra and Sana. Contradiction, so Petra reviews in every valid assignment.

From there the rules fall like a row of switches:

- Rule (1): Petra in, so Quinn out.
- Rule (3): Quinn out, so Theo in.
- Rule (5): Theo in, so Ravi out.
- Rule (2): Ravi is out, so Sana must carry that rule, Sana in.
- Rule (6): Sana needs Petra, who is already in.

Reviewers: Petra, Sana, and Theo. Not reviewing: Quinn and Ravi. Every single status was forced; there was never a moment where two options both survived, so this assignment is the only one.`,
    tactical_explanations: [
      `**A.** → True

Drop Petra and rule (6) drops Sana with her, leaving rule (4) with nobody at all. Petra therefore reviews in every valid assignment.`,
      `**B.** → True

Rule (1) says: if Petra reviews, then Quinn does not. Contrapose: if Quinn reviews, then Petra does not. Combined with Petra reviewing every time, Quinn is excluded as well.`,
      `**C.** → False

The forced chain is Petra in, Quinn out, Theo in, and rule (5) then bars Ravi. Rule (2) is covered by Sana instead. There is no branch where Ravi sneaks back in.`,
      `**D.** → True

The unique assignment is $\\{\\text{Petra},\\text{Sana},\\text{Theo}\\}$. Theo is brought in by rule (3) as soon as Quinn is excluded; Sana is brought in by rule (2) once Ravi is excluded.`,
      `**E.** → False

A second assignment would need somebody whose status was a matter of choice. There is no such person: Quinn out, Theo in, Ravi out, Sana in, every status pinned by a numbered rule once Petra is forced.`,
    ],
  },
  "math-1-108": {
    solution_overview: `Rule (8), at least four competitors, is the hinge, so keep an eye on the head count.

Suppose Victor does not compete. Rule (1) then removes Uma, and rule (7) read backwards ("no Uma, no Bianca") removes Bianca. Rule (3) allows only one of Wendy and Xavier, so the pool is badly shrunken:

- Wendy in, Xavier out: only Wendy, Yara, and Zane are available, at most $3$.
- Xavier in, Wendy out: rule (4) removes Yara, rule (5) then requires Zane, and only Xavier and Zane are left, exactly $2$.

Both branches fall below the floor of four, so Victor competes. Rule (1) then brings Uma, rule (2) brings Wendy, and rule (3) therefore locks Xavier out.

The forced core is Uma, Victor, and Wendy, three people, so at least one more is needed, which rule (5) supplies in any case. Among Yara, Zane, and Bianca, rule (5) asks for Yara or Zane and rule (6) forbids Zane and Bianca together. Four combinations survive:

| Extra competitors | Roster size |
| --- | --- |
| Yara | $4$ |
| Yara and Bianca | $5$ |
| Zane | $4$ |
| Yara and Zane | $5$ |

Four rosters, of size $4$ or $5$.`,
    tactical_explanations: [
      `**A.** → True

Both no-Victor branches fall short of the four competitors in rule (8). Victor is therefore in every valid roster.`,
      `**B.** → False

Victor always competes, so rule (2) always brings Wendy in, and rule (3) permits exactly one of Wendy and Xavier. Xavier is shut out every time.`,
      `**C.** → True

Rule (6) says Zane competes only if Bianca does not. Contrapose: Bianca $\\Rightarrow$ not Zane. The four surviving extras never pair Bianca with Zane.`,
      `**D.** → False

Only Uma, Victor, Wendy, and Xavier have their fate decided. Yara, Zane, and Bianca still allow four different endings, so the roster is not unique.`,
      `**E.** → False

Six competitors means exactly one absentee, and that absentee is forced to be Xavier, which would put Yara, Zane, and Bianca in together. Rule (5) is fine, but rule (6) blocks the Zane-and-Bianca pair. The surviving extras give sizes $4$ or $5$ only.`,
    ],
  },
});
