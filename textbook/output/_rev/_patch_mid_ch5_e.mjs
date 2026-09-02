import fs from "fs";
import path from "path";
import { applyMidPatches } from "./_apply_mid_ch5.mjs";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const index = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"),
);

const bodies = {
  "math-5-33:A": `The statement triples a Specialty Drink's recovered price and claims the result clears twenty dollars. Café Lumière's two till receipts recover a drink at $\\$6.35$ and a pastry at $\\$3.80$. Calorie counts are printed for reference only and do not enter the prices.

The overview already recovered a drink at $\\$6.35$. The extra arithmetic is only that triple, then the cutoff.

**1.** Triple the recovered drink price:

$$3 \\times 6.35 = 19.05$$

**2.** Compare with twenty dollars:

$$19.05 > 20$$

is false. The triple sits $\\$0.95$ short of $\\$20$.

**3.** A solver who used $6.70$ would get $20.10$ and flip the verdict. A solver who rounded $6.35$ to $7$ first would get $21$ and also flip it. The trap figure $\\$7$ is a convenience round. The recovered $6.35$ is what keeps the triple under $20$. Calories $6100$ and $5400$ do not price a drink.

The opposite verdict would need a drink above $20/3 \\approx 6.67$. With the two till totals $\\$78.65$ and $\\$85.05$ as printed, the drink is $6.35$.

Three drinks cost $\\$19.05$, which does not clear $\\$20$, so the statement is False.`,

  "math-5-33:B": `The statement compares four Pastries with one Specialty Drink plus one Pastry. The overview already recovered a drink at $6.35$ and a pastry at $3.80$. Calories still do not enter. The extra arithmetic is costing both baskets.

**1.** Four pastries:

$$4 \\times 3.80 = 15.20$$

**2.** One drink and one pastry:

$$6.35 + 3.80 = 10.15$$

**3.** Compare:

$$15.20 > 10.15$$

Four pastries cost $\\$5.05$ more. That is "quite a bit more" in the sense of the claim: more than a $50\\%$ premium on the smaller basket. A solver who compared four pastries with four drinks would be answering a different question. A solver who used $4 \\times 6.35=25.40$ against $10.15$ would still find four of something larger, but of the wrong item.

The trap is reading "quite a bit more" as a second numerical bar. The claim's inequality is four pastries versus the mixed pair, and $15.20>10.15$ is the whole comparison. The opposite verdict would need $4y \\le x+y$, so $3y \\le x$, $3(3.80)=11.40 \\le 6.35$, which fails. With $y=3.80$ and $x=6.35$, four pastries cost more.

Four pastries cost $\\$15.20$ and the mixed pair costs $\\$10.15$, so four pastries cost more, so the statement is True.`,

  "math-5-34:A": `The statement reads Email 1 as implying four dozen croissants already blow past fifty-five dollars. Email 1 confirmed $14$ dozen croissants and $11$ dozen baguettes for $\\$297.30$. Email 2 confirmed $6$ dozen croissants and $23$ dozen baguettes for $\\$299.30$.

The overview already recovered croissants at $\\$13.85$ per dozen. The extra arithmetic is only four dozen, then the cutoff.

**1.** Four dozen at the recovered croissant price:

$$4 \\times 13.85 = 55.40$$

**2.** Compare with fifty-five:

$$55.40 > 55$$

Four dozen croissants cost $\\$55.40$, which blows past fifty-five by forty cents.

**3.** A solver who used baguettes $9.40$ here would get $37.60$ and miss the claim. A solver who rounded $13.85$ down to $13$ would get $52$ and fail the cutoff. The trap figure $\\$52$ is a rounded-down dozen times four.

The opposite verdict would need a croissant dozen at or below $55/4=13.75$. With the two emails as printed, croissants are $13.85$. Email 2's similar dollar total is a different mix and does not rewrite the croissant price.

Four dozen croissants cost $\\$55.40$, which is past $\\$55$, so the statement is True.`,

  "math-5-34:B": `The statement places the per-dozen gap between croissants and baguettes closer to four dollars than to five. The overview already recovered $13.85$ and $9.40$. The extra arithmetic is the gap and the two distances.

**1.** Croissant dozen minus baguette dozen:

$$13.85 - 9.40 = 4.45$$

**2.** Distance to four dollars: $4.45-4=0.45$. Distance to five dollars: $5-4.45=0.55$.

**3.** Then $0.45 < 0.55$, so $4.45$ is closer to four.

A solver who rounded $4.45$ to $4.50$ and called that equidistant would still not prefer five. A solver who used $14-9=5$ after rounding both prices would land on five exactly and miss "closer to four." The trap figure $\\$5$ is that pair of rounded prices. Email 1's mix is croissant-heavy, so its average dozen is closer to $13.85$ than Email 2's baguette-heavy mix is; that average is not the gap.

The opposite verdict would need a gap of $4.50$ or more. With $13.85$ and $9.40$ as recovered, the gap is $4.45$, which sits nearer four.

The gap is $\\$4.45$, closer to four than to five, so the statement is True.`,

  "math-5-35:B": `The statement doubles Yarn Spool's recovered margin and claims the double just clears forty dollars. The overview already recovered Yarn at $\\$19.80$ and Fabric at $\\$27.35$. The extra arithmetic is only the double, then the cutoff.

**1.** Double the recovered Yarn margin:

$$2 \\times 19.80 = 39.60$$

**2.** Compare with forty:

$$39.60 > 40$$

is false. The double sits forty cents short of $\\$40$.

**3.** A solver who used $20$ would get $40$ exactly and treat "just clear" as equality. The recovered $19.80$ is what keeps the double under forty. A solver who doubled Fabric $27.35$ would get $54.70$ and clear forty easily, answering the wrong product.

The trap figure $\\$40$ is a round bar that $2 \\times 20$ would kiss. "Just clear" is a strict reading of above forty, and $39.60$ is not above forty. The opposite verdict would need Yarn above $20$. With the quarterly margins as recovered, Yarn is $19.80$.

Double Yarn's margin is $\\$39.60$, which does not clear $\\$40$, so the statement is False.`,

  "math-5-35:E": `The statement costs five hundred Fabric Rolls and no Yarn Spools, and claims the profit is a round $\\$13{,}675$ with no cents. This is a new mix: Fabric only, not a quarterly mix of both products.

The overview already recovered Fabric at $27.35$. The extra arithmetic is only that product.

**1.** Five hundred Fabric Rolls at the recovered Fabric margin:

$$500 \\times 27.35 = 13675$$

**2.** Split the cents: five hundred times $27$ is $13500$, and five hundred times $0.35$ is $175$.

$$13500 + 175 = 13675$$

**3.** The product is a whole-dollar $\\$13{,}675$. A solver who included even one Yarn Spool would add $19.80$ and destroy the round figure. A solver who used $500 \\times 27=13500$ after dropping the cents would miss the claim by $175$.

The trap is treating "no cents required" as a rounding instruction rather than as a description of $13675$ exactly. The opposite verdict would need a Fabric margin with a leftover cent after times $500$. With $y=27.35$, five hundred Fabric Rolls profit $\\$13{,}675$ exactly.

Five hundred Fabric Rolls profit $\\$13{,}675$ exactly, so the statement is True.`,

  "math-5-36:C": `The statement compares four Oxygen-type cylinders with six Nitrogen-type cylinders. The overview already recovered Oxygen at $22.65$ and Nitrogen at $16.40$. The extra arithmetic is costing both baskets.

**1.** Four Oxygen:

$$4 \\times 22.65 = 90.60$$

**2.** Six Nitrogen:

$$6 \\times 16.40 = 98.40$$

**3.** Compare:

$$90.60 < 98.40$$

Four Oxygen cost less than six Nitrogen by $\\$7.80$. A solver who used four and six of the same type would be answering a different question. A solver who swapped the prices would flip the inequality: $4(16.40)=65.60$ against $6(22.65)=135.90$ still has four cheaper, so that particular swap would not flip this verdict. Using $4(22.65)$ against $4(16.40)$ would be four of each, not four versus six.

Invoice 2 restating Invoice 1 at $60\\%$ scale is a dependence warning, not a third price. The opposite verdict would need $4(22.65) \\ge 6(16.40)$, so $90.60 \\ge 98.40$, which fails.

Four Oxygen cost $\\$90.60$ and six Nitrogen cost $\\$98.40$, so four Oxygen cost less, so the statement is True.`,

  "math-5-36:D": `The statement doubles Invoice 3's order exactly and claims the resulting bill lands above $\\$655$. Invoice 3 is $13$ Nitrogen and $5$ Oxygen at $\\$326.45$. Doubling at fixed prices doubles the dollars. This letter does not rebuild Nitrogen and Oxygen.

**1.** Double the printed Invoice 3 total:

$$2 \\times 326.45 = 652.90$$

**2.** Compare with $\\$655$:

$$652.90 > 655$$

is false. The doubled bill sits $\\$2.10$ short of $\\$655$.

**3.** Rebuild the double from recovered prices as a check: $26(16.40)+10(22.65)=426.40+226.50=652.90$, the same figure. A solver who doubled Invoice 1 instead would get a much larger bill and flip the verdict. A solver who used $2 \\times 328$ as a round Invoice 3 would get $656$ and also flip it. The printed $326.45$ is what keeps the double under $655$.

The opposite verdict would need Invoice 3 above $327.50$. With Invoice 3 at $\\$326.45$, twice that order is $\\$652.90$.

Double Invoice 3 is $\\$652.90$, which is not above $\\$655$, so the statement is False.`,

  "math-5-38:A": `The statement claims T-Shirt margins sit closer to eleven dollars than to twelve. Season 1 netted $\\$9{,}793.50$ on $430$ T-Shirts and $260$ Hoodies. Season 2 netted $\\$10{,}747.75$ on $275$ T-Shirts and $410$ Hoodies. Those two seasons recover the pair.

The overview already recovered T-Shirt margin at $\\$11.65$. The extra arithmetic is the two distances to eleven and to twelve.

**1.** Distance to eleven: $11.65-11=0.65$. Distance to twelve: $12-11.65=0.35$.

**2.** Then $0.35 < 0.65$, so $11.65$ is closer to twelve.

**3.** The claim has the nearer neighbour backwards. A solver who looked at the leading $11$ and stopped would call it closer to eleven as a digit story. The trap is reading the integer part as the nearer integer. Distance, not the leading digit, decides "closer."

The opposite verdict would need a T-Shirt margin below $11.50$. With Seasons 1 and 2 as printed, the margin is $11.65$, which sits closer to twelve.

T-Shirt margin $\\$11.65$ sits closer to twelve than to eleven, so the statement is False.`,

  "math-5-38:D": `The statement claims Season 2 outearned Season 1 by an amount that would just barely fail to cover exactly $52$ Hoodies' worth of margin. Season 1 netted $\\$9{,}793.50$. Season 2 netted $\\$10{,}747.75$. The overview already recovered Hoodie margin $18.40$.

**1.** Season 2 minus Season 1:

$$10747.75 - 9793.50 = 954.25$$

**2.** Fifty-two Hoodies at the recovered Hoodie margin:

$$52 \\times 18.40 = 956.80$$

**3.** Compare:

$$954.25 < 956.80$$

The earnings gap is $\\$2.55$ short of $52$ Hoodies. That is "just barely fail." A solver who used $50$ Hoodies, $920$, would find the gap covers $50$ easily and miss the $52$. A solver who used T-Shirt margin $11.65 \\times 52 \\approx 605.80$ would be covering the wrong garment. Season 3's reconstructed T-Shirt count does not enter this comparison.

The opposite verdict would need the earnings gap to reach $956.80$. With the two printed season totals, the gap is $954.25$.

Season 2's extra $\\$954.25$ fails to cover $52$ Hoodies at $\\$956.80$, so the statement is True.`,
};

const patches = [];
for (const e of index) {
  const body = bodies[`${e.id}:${e.letter}`];
  if (!body) continue;
  patches.push({
    file: e.file,
    id: e.id,
    idx: e.idx,
    letter: e.letter,
    key: e.key,
    body,
  });
}

const applied = applyMidPatches(patches);
for (const a of applied) console.log(a.id, a.letter, a.words);
console.log("applied", applied.length);
