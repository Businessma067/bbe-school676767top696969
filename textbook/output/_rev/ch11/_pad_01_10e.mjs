import fs from "node:fs";

const path = "textbook/output/_rev/ch11/01_10.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function insertBeforeClose(letter, extra) {
  const parts = letter.replace(/\n+$/, "").split(/\n\n/);
  const last = parts.pop();
  if (!/the statement is (?:True|False)\.\s*$/.test(last)) {
    throw new Error("no closer: " + last.slice(-80));
  }
  return [...parts, extra.trim(), last].join("\n\n");
}

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const extras = {
  "math-11-5": {
    2: `A clinic treasurer who booked $\\$15,840$ would be using the nominal quote as a once-a-year credit. The four quarterly dates add $\\$17.81$ on this principal. That extra is small, but it is exactly the difference between the printed 5.6% and the recovered 5.72% applied to $\\$15,000$.`,
  },
  "math-11-7": {
    0: `The exact product is $(1.075)^{2} = 1.155625$, so $15.5625\\%$ rounds to $15.56\\%$ with no leftover. A table that printed $15.6\\%$ would still be this conversion. A table that printed $15.00\\%$ would not.`,
    1: `The quarterly conversion sits $0.31$ of a point above the semi-annual $15.56\\%$. That $0.31$ is letter E's first gap. This letter only names the quarterly yield itself.`,
    2: `The monthly conversion sits $0.21$ of a point above quarterly. Together with letter B, the three yields $15.56$, $15.87$, $16.08$ are the ladder letter D will read upward and letter E will read as shrinking steps.`,
    3: `Nothing in the stem lowers the quote as $n$ rises. A bank that cut the nominal rate on the monthly product could reverse the ladder. This bank does not. The 15% quote is shared, so the ladder rises.`,
  },
  "math-11-8": {
    2: `A rounded $\\$7,280$ would still be this balance. A rounded $\\$7,000$ would not. The claim keeps the cents, $60$, which match $4,000 \\times 1.8194$ as Part 3.2 rounded them.`,
  },
  "math-11-9": {
    0: `If the fund had compounded annually, the required quote would have been a little higher than $5.92\\%$, because annual compounding is the weaker clock. The stem compounds quarterly, and the recovered quote is $5.92\\%$.`,
    4: `No compounding formula is required for this letter. Start $\\$50,000$, finish $\\$80,000$, gain $\\$30,000$, which is $60\\%$ of the start. The $65\\%$ cutoff is five points above that exact $60\\%$.`,
  },
  "math-11-10": {
    0: `A loan officer who filed (a) as more expensive because $10.80$ is the larger print would have the ranking backwards after conversion. The recovered pair is $10.80\\%$ against $10.81\\%$, and (a) is cheaper.

On a $\\$50,000$ one-year balance the extra on (b) is only about $\\$6.50$. Tiny as money, it is still the wrong direction for this claim. The claim said (a) has the higher effective rate. It does not.

If (b) had compounded annually at $10.40\\%$, then (a) really would have been higher. The stem pays (b) quarterly, and that is what flips the ranking.`,
    3: `Reading this letter next to C is useful: C said a lower nominal does not make (b) cheaper. D says a higher nominal does not make (a) dearer. Both are the same $10.80\\%$ versus $10.81\\%$ ranking, worded from opposite sides.

A borrower who signed (a) thinking it was the expensive option would have overpaid relative to that belief and underpaid relative to (b). The recovered cost ranking favors (a).`,
    4: `The $0.013$ point gap is about one-eighth of a $0.10$ point, and about one-fourth of the $0.05$ cutoff. No reasonable rounding of $10.8127\\%$ against $10.80\\%$ can manufacture a $0.05$ point spread. The two effective rates really are that close.`,
  },
};

for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  t.tactical_explanations = t.tactical_explanations.map((letter, i) => {
    if (!ex[i]) return letter;
    return insertBeforeClose(letter, ex[i]);
  });
}

fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  if (t.id === "math-11-1") continue;
  const wcs = t.tactical_explanations.map(wc);
  console.log(t.id, wcs.join(", "));
}
