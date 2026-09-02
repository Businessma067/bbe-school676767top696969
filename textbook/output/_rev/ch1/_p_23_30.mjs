import { applyPatches } from "./_apply_dedupe.mjs";

const patches = {
  "math-1-101": {
    tactical_explanations: [
      "**A.** → True\n\nRule (4) states it outright: Dmitri attends. Case A (Ana in) and Case B (Ana out) are the only two legal rosters, and both keep Dmitri because dropping him would violate rule (4) immediately. It needs no derivation and holds in both solutions.",
      "**B.** → False\n\nThe overview already built two legal rosters: {Ana, Ceci, Dmitri} and {Boris, Dmitri}. Ana is in one and out of the other. The rules leave her decision open. Uniqueness would require the two cases to agree about Ana, and they do not.",
      "**C.** → True\n\nThe claim asks for at least one legal roster of size $3$. Case A puts Ana, Ceci and Dmitri in the room with Boris away: three attendees. One example is all an existence claim needs. The other legal roster has size $2$, which is irrelevant to an \"at least one\" claim.",
      "**D.** → False\n\nTry Ana out and Boris out together. Rule (4) still puts Dmitri in. With Ana out, rule (3) has no unless-exception, so Ceci attending would force Dmitri out, contradicting rule (4). Thus Ceci is out. Rule (2) says: if Boris is out, then Ceci attends. Boris out and Ceci out make rule (2) fail. The attempted pair \"both absent\" collapses: Boris is forced in. That is Case B, not a third roster.",
      "**E.** → False\n\nDelete the unless-exception, so Ceci attending always forces Dmitri out. Case A had Ceci and Dmitri both in, so Case A dies. Case B is {Boris, Dmitri} with Ceci out. Rule (3) is idle because Ceci is absent, so the stricter version still holds. One legal roster remains. The trap is thinking the unless-clause is load-bearing for every solution, when Case B never uses it.",
    ],
  },
  "math-1-102": {
    tactical_explanations: [
      "**A.** → True\n\nRule (4) says: if Zoe joins, then Noah does not. Contrapose it: if Noah joins, then Zoe does not. That is the claimed implication, taken from a numbered rule. A rule and its contrapositive never disagree. The single Noah roster, {Noah, Maria}, duly has no Zoe in it.",
      "**B.** → False\n\nSuppose Leo and Noah both join. Rule (2): Leo joins only if Zoe joins, so Zoe must join. Rule (4): if Zoe joins, then Noah does not join. Zoe in and Noah in contradict rule (4). The chain is Leo $\\Rightarrow$ Zoe $\\Rightarrow$ not Noah, so Leo and Noah cannot share a roster. None of the five legal rosters contains both.",
      "**C.** → True\n\nTry the roster {Maria}. Noah is out, so rule (1) is idle; Leo is out, so rule (2) is idle; Zoe is out, so rule (4) is idle. Rule (3) asks for Maria or Leo, and Maria is in, so all four rules hold. Maria on her own is legal. Possible.",
      "**D.** → True\n\nRule (1) says: if Noah joins, then Maria joins. Contrapose it: if Maria does not join, then Noah does not join. That is the claimed sentence, equivalent to a given rule, so it holds in every legal roster. No case work is required; a rule and its contrapositive never disagree.",
      "**E.** → False\n\nRule (3) needs Maria or Leo. Maria alone satisfies it, and with Noah, Leo, and Zoe all out, rules (1), (2), and (4) are idle. The roster {Maria} is legal and omits Zoe. A \"must join\" claim fails as soon as one legal roster leaves Zoe out. Zoe appears in some of the five rosters, not all.",
    ],
  },
  "math-1-103": {
    tactical_explanations: [
      "**A.** → True\n\nOpen with rule (1): Ben $\\Rightarrow$ Carla. Then rule (3): Carla $\\Rightarrow$ not Dan. Chain them: Ben $\\Rightarrow$ Carla $\\Rightarrow$ not Dan, so Ben playing forces Dan out. Ben pulls Carla in and Carla shuts Dan out, two rules in a row, no exceptions. Both Ben rosters confirm it.",
      "**B.** → False\n\nSuppose Ben and Dan both play. Rule (1) forces Carla in with Ben. Rule (3) then says: if Carla plays, Dan does not. Carla in and Dan in contradict rule (3). Equivalently: Ben $\\Rightarrow$ Carla $\\Rightarrow$ not Dan. The two Ben rosters are {Ben, Carla} and {Ben, Carla, Ella}; neither contains Dan. The pair is impossible.",
      "**C.** → True\n\nCheck {Ella} against the four rules. Ben is out, so rule (1) is idle; Dan is out, so rule (2) is idle; Carla is out, so rule (3) is idle. Rule (4) needs Ben or Ella, and Ella is in. {Ella} passes every rule. Ella can play alone.",
      "**D.** → True\n\nRule (3) is Carla $\\Rightarrow$ not Dan. Contrapose: Dan $\\Rightarrow$ not Carla. That is the claimed sentence, taken from a numbered rule. The only legal roster containing Dan is {Dan, Ella}: rule (2) is satisfied because Ella plays, rule (4) is satisfied by Ella, and Carla is out, matching the contrapositive.",
      "**E.** → False\n\nCarla is pulled in only by rule (1), and only when Ben plays. Without Ben, rule (4) still needs Ella, and Carla may sit out. {Ella} and {Dan, Ella} are both legal and omit Carla. A \"must play\" claim fails on either roster. Carla is required only as Ben's companion.",
    ],
  },
  "math-1-104": {
    tactical_explanations: [
      "**A.** → True\n\nRule (4) is: Quinn cooks only if Owen does not, that is Quinn $\\Rightarrow$ not Owen. Contrapose it: Owen $\\Rightarrow$ not Quinn. That is the claimed implication, taken from a numbered rule. Quinn is out whenever Owen is in. Turn the \"only if\" around and Owen cooking means Quinn does not.",
      "**B.** → False\n\nRule (1) says: if Owen cooks, then Priya does not. A night with both cooking would make that hypothesis true and the conclusion false, violating rule (1) on the spot. No later rule is allowed to override a broken numbered rule. Never both. Rule (1) blocks that pairing in a single line.",
      "**C.** → False\n\nCheck {Quinn} against the four rules. Rule (2) requires Owen or Priya; neither is cooking, so rule (2) fails immediately. Rule (1) is idle (Owen out). Rule (3) is idle (Priya out). Rule (4) holds, but a single broken numbered rule is enough. Quinn cannot cook alone. Rule (2) demands Owen or Priya every night.",
      "**D.** → True\n\nRule (3) says: if Priya cooks, then Quinn also cooks. That is exactly the claimed guarantee. The only Priya evening the other rules allow is {Priya, Quinn}, which includes Quinn. That is rule (3) quoted back, and the arrangement it produces satisfies the other three rules as well.",
      "**E.** → False\n\nRules (1) and (2) together force exactly one of Owen or Priya. The Priya evening is {Priya, Quinn}: rule (3) brings Quinn, rule (4) holds because Owen is out, and rule (1) is idle. That legal evening omits Owen. Owen therefore is not required every night. The rules insist that one of Owen and Priya cooks, not that it must be Owen.",
    ],
  },
  "math-1-105": {
    tactical_explanations: [
      "**A.** → False\n\nDiego's attendance forces Fatima in through rule (1) and then straight back out through rules (3), (2) and (6). Spell the collision: Diego $\\Rightarrow$ Fatima $\\Rightarrow$ no Grace $\\Rightarrow$ Hugo $\\Rightarrow$ no Fatima, contradicting Fatima's presence. No branch survives, so there is no scenario for the claim to point at. Diego never goes.",
      "**B.** → True\n\nRule (6) says Hugo goes only if Fatima does not; contraposed, Fatima going means Hugo staying home. A rule and its contrapositive are the same claim, so no case work is needed. That is the claimed implication, equivalent to a given rule.",
      "**C.** → True\n\nDiego is impossible, as in A. With Diego gone, rule (4) still needs Diego or Hugo, so Hugo must go in every remaining roster. He appears in all four rosters the overview listed. Rule (4) needs Diego or Hugo, and Diego is off the table entirely, so the whole burden falls on Hugo.",
      "**D.** → True\n\nDiego is already impossible, so Fatima is out by the same collapse, and Hugo is forced by rule (4). Test {Hugo, Grace, Iris}: rules (1) and (3) are idle, rule (2) is satisfied because Hugo is in, rule (4) is satisfied by Hugo, rule (5) holds because Diego is out, and rule (6) holds because Fatima is out. All six hold, so Grace and Iris can attend together.",
      "**E.** → False\n\nThe claimed implication is Iris $\\Rightarrow$ Fatima. Fatima goes in no legal roster (Hugo is always in, and rule (6) then keeps Fatima out). Iris goes in {Hugo, Iris} and {Hugo, Grace, Iris}. Take {Hugo, Grace, Iris}: Iris in, Fatima out. True \"if\", false \"then.\" The implication fails, and Iris never forces Fatima.",
    ],
  },
  "math-1-106": {
    tactical_explanations: [
      "**A.** → True\n\nSuppose Aiden presents. Rule (1) then forces both Bella and Caleb in. Bella in triggers rule (3) (Daisy out) and rule (6) (Ethan out). Rule (2) needs Daisy or Ethan, and both are now out. Contradiction. So Aiden never presents, in every valid scenario. Aiden cannot present without Bella, and Bella's presence leaves rule (2) with nobody to satisfy it.",
      "**B.** → False\n\nPut Bella on the roster. Rule (3): Bella $\\Rightarrow$ not Daisy, so Daisy is out. Rule (6): Ethan presents only if Bella does not, so Ethan is out. Rule (2) still needs Daisy or Ethan. Both missing: every Bella roster is illegal. Bella cannot present in any valid scenario. The collision is immediate.",
      "**C.** → True\n\nRule (4) is the given sentence: Caleb presents only if Ethan presents, which is Caleb $\\Rightarrow$ Ethan. The claim quotes that implication. Both surviving Caleb rosters, {Caleb, Ethan} and {Caleb, Daisy, Ethan}, include Ethan. There is nothing to derive; \"only if\" *is* that implication.",
      "**D.** → False\n\nRule (5) says Faye $\\Rightarrow$ Aiden. Rule (1) says Aiden $\\Rightarrow$ Bella (and Caleb). Bella is already impossible: she would remove Daisy by rule (3) and Ethan by rule (6), leaving rule (2) with nobody. So Aiden is out, and therefore Faye is out. Faye depends on Aiden, Aiden depends on Bella, and Bella is impossible.",
      "**E.** → False\n\nAfter Bella, Aiden, and Faye are excluded, the live people are Caleb, Daisy, and Ethan, with rule (2) (Daisy or Ethan) and rule (4) (Caleb $\\Rightarrow$ Ethan). Five rosters survive: {Daisy}, {Ethan}, {Daisy, Ethan}, {Caleb, Ethan}, {Caleb, Daisy, Ethan}. Five is already more than one, so uniqueness fails.",
    ],
  },
  "math-1-107": {
    tactical_explanations: [
      "**A.** → True\n\nSuppose Petra does not review. Rule (6): Sana reviews only if Petra reviews, so Sana is out too. Rule (4) needs Petra or Sana, and both are gone. Contradiction. Therefore Petra reviews in every valid assignment. Drop Petra and rule (6) drops Sana with her, leaving rule (4) with nobody at all.",
      "**B.** → True\n\nRule (1) says: if Petra reviews, then Quinn does not. Contrapose it: if Quinn reviews, then Petra does not. That is the claimed sentence. Combined with Petra reviewing in every valid assignment, Quinn is excluded as well. Contrapositive of rule (1), so it holds automatically, with a bonus: Quinn never reviews.",
      "**C.** → False\n\nFrom Petra in, rule (1) drops Quinn. Rule (3): Quinn out $\\Rightarrow$ Theo in. Rule (5): Theo in $\\Rightarrow$ Ravi out. The chain is the same in the only surviving assignment. Rule (2) is then carried by Sana, not by Ravi. There is no legal assignment in which Ravi reviews. There is no branch where Ravi sneaks back in once Theo is forced.",
      "**D.** → True\n\nPetra is forced, as in A. Then: rule (1) excludes Quinn; rule (3) brings Theo; rule (5) excludes Ravi; rule (2), with Ravi out, brings Sana; rule (6) is content because Petra already reviews. The unique assignment is therefore {Petra, Sana, Theo}. Both Theo and Sana review. Theo is brought in by rule (3); Sana is brought in by rule (2).",
      "**E.** → False\n\nEvery status is pinned by a numbered rule once Petra is forced: Quinn out by (1), Theo in by (3), Ravi out by (5), Sana in by (2). No reviewer is left with a free yes/no choice. A second valid assignment would need at least one optional person. There is none, so uniqueness holds and \"multiple different valid ways\" is false.",
    ],
  },
  "math-1-108": {
    tactical_explanations: [
      "**A.** → True\n\nWithout Victor the roster also loses Uma and Bianca, and neither remaining branch can scrape together the four competitors rule (8) insists on. Wendy in and Xavier out leaves at most Wendy, Yara and Zane (size $\\le 3$); Xavier in and Wendy out removes Yara by rule (4), forces Zane by rule (5), and yields only Xavier and Zane (size $2$). Both fall short of four, so Victor must compete.",
      "**B.** → False\n\nVictor always competes, so rule (2) always brings Wendy in, and rule (3) permits exactly one of Wendy and Xavier. Xavier is shut out every time. No roster contains him. Rule (3) allows exactly one of Wendy or Xavier, and Wendy is already in.",
      "**C.** → True\n\nRule (6) says Zane competes only if Bianca does not, that is Zane $\\Rightarrow$ not Bianca. Contrapose it: Bianca $\\Rightarrow$ not Zane. That is the claimed implication. The four surviving extras never pair Bianca with Zane. The two never appear together, and in the four rosters Bianca only ever turns up alongside Yara.",
      "**D.** → False\n\nThe forced core is Uma, Victor, Wendy in and Xavier out. Among Yara, Zane and Bianca, rule (5) asks for Yara or Zane and rule (6) forbids Zane with Bianca, leaving four extras: {Yara}, {Zane}, {Yara, Bianca}, {Yara, Zane}. Four legal rosters is already more than one. Only four of the seven have their fate decided.",
      "**E.** → False\n\nWith the forced core Uma, Victor, Wendy already in and Xavier already out, a size-$6$ roster would need all three of Yara, Zane and Bianca; rule (5) is fine, but rule (6) blocks the Zane and Bianca pair, so six is unreachable. The surviving extras are only {Yara}, {Zane}, {Yara, Bianca} and {Yara, Zane}, giving sizes $4$ or $5$. Sizes four and five are all that is available.",
    ],
  },
};

const n = applyPatches(
  "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_rev/ch1/23_30.json",
  patches
);
console.log("23_30 edited", n);
