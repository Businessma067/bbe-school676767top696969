import fs from "fs";
import path from "path";
import { applyMidPatches } from "./_apply_mid_ch5.mjs";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";
const index = JSON.parse(
  fs.readFileSync(path.join(root, "textbook/output/_rev/_mid_ch5_index.json"), "utf8"),
);

const bodies = {
  "math-5-44:B": `The statement claims the per-metre gap $x-y$ is more than $145\\%$ of the wire price. The overview already recovered cedar wood $x=27$ and galvanized wire $y=11$. The extra arithmetic is the gap and the ratio.

**1.** Wood minus wire:

$$27 - 11 = 16$$

**2.** Gap as a share of wire:

$$\\frac{16}{11} \\approx 1.4545$$

**3.** Then $1.4545 > 1.45$. The gap is just over $145\\%$ of wire's price. A solver who used $16/27 \\approx 59\\%$ against wood would be using the wrong base. A solver who rounded $1.4545$ down to $1.45$ would fail a strict "more than." The trap figure $59\\%$ is the gap over wood.

Project 3 being a scaled repeat of another project does not rewrite $27$ and $11$. The opposite verdict would need $16/11 \\le 1.45$, so a gap of $15.95$ or less. With $x=27$ and $y=11$, the gap is $16$.

The gap is about $145.45\\%$ of the wire price, which exceeds $145\\%$, so the statement is True.`,

  "math-5-44:E": `The statement claims Project 3's cost per total metre installed is higher than Project 1's. Project 3 used $10$ m wood and $40$ m wire for $\\$710$. Project 1 used $18$ m wood and $24$ m wire for $\\$750$. The extra arithmetic is the two averages.

**1.** Project 3: $10+40=50$ m at $\\$710$, so $710/50=14.20$ per metre.

**2.** Project 1: $18+24=42$ m at $\\$750$, so $750/42 \\approx 17.86$ per metre.

**3.** Compare: $14.20 < 17.86$. Project 3 is *lower* per metre, not higher. Project 3 is wire-heavy, and wire is cheaper per metre at $11$ versus wood at $27$, so the average falls.

A solver who compared totals $710$ and $750$ without dividing by metres would still find Project 3 smaller, but that is not a per-metre comparison. The trap figure $710$ versus $750$ is the un-normalized totals. The claim is per total metre installed.

The opposite verdict would need Project 3's mix to be wood-heavier than Project 1's. With $40$ of $50$ metres as wire, Project 3's average is $14.20$.

Project 3's $\\$14.20$ per metre is less than Project 1's $\\$17.86$, so the statement is False.`,

  "math-5-45:A": `The statement claims Boat A alone would take more than $7$ hours to cover the $356$ km stretch. The overview already recovered Boat A's speed at $48$ km/h and Boat B at $77$ km/h. The extra arithmetic is that quotient.

**1.** Time for A alone on $356$ km:

$$\\frac{356}{48} \\approx 7.417$$

**2.** Then $7.417 > 7$. About $7$ hours and $25$ minutes.

**3.** A solver who used Boat B's $77$ km/h would get about $4.62$ hours and fail the cutoff. A solver who used $250/48 \\approx 5.21$ would be using the other stretch. The trap figure $5.21$ is the $250$ km meeting stretch, not the $356$ km stretch the claim named.

The opposite verdict would need A's speed above $356/7 \\approx 50.86$ km/h. With $A=48$, the solo time exceeds $7$ hours.

Boat A needs about $7.42$ hours for $356$ km, which is more than $7$ hours, so the statement is True.`,

  "math-5-45:D": `The statement claims the combined distance both boats would cover in $3$ hours exceeds the $356$ km stretch. The overview already recovered $48$ and $77$ km/h. The extra arithmetic is three hours of combined speed, not the head-start meeting.

**1.** Combined speed:

$$48 + 77 = 125$$

**2.** Three hours at that combined speed:

$$3 \\times 125 = 375$$

**3.** Compare with $356$ km:

$$375 > 356$$

In $3$ hours they cover $19$ km more than that stretch. This is not the head-start scenario; it is both boats travelling simultaneously for $3$ hours. A solver who gave B a $3$-hour head start and then one more hour of A, which is the stem's second meeting, would be answering a different clock. The trap is mixing the stem's $3$-hour head start into this simultaneous $3$-hour run.

The opposite verdict would need $3(48+77) \\le 356$, so a combined speed of about $118.7$ km/h or less. With $125$ km/h combined, three hours is $375$ km.

Three hours of combined travel is $375$ km, which exceeds $356$ km, so the statement is True.`,

  "math-5-45:E": `The statement claims Boat B's speed is more than $60\\%$ higher than Boat A's. The overview already recovered $A=48$ and $B=77$. The extra arithmetic is the relative increase.

**1.** Speed gap:

$$77 - 48 = 29$$

**2.** Gap over A's speed:

$$\\frac{29}{48} \\approx 0.6042$$

**3.** About $60.4\\%$, which exceeds $60\\%$. A solver who used $77/48 \\approx 1.604$ and then reported $160\\%$ would have forgotten to subtract $1$. "Higher than" is the relative increase, $60.4\\%$. A solver who used $29/77 \\approx 38\\%$ against B would be using the wrong base. The trap figure $160\\%$ is the ratio left as a multiple instead of an increase.

The opposite verdict would need $B \\le 1.60A=76.8$. Recovered $B=77$ sits just above that.

B is about $60.4\\%$ faster than A, which is more than $60\\%$, so the statement is True.`,

  "math-5-46:B": `The statement claims Barley's per-tonne advantage over Wheat is more than $25\\%$ of Wheat's per-tonne profit. The overview already recovered Wheat $95$ and Barley $120$. Season 3's reconstructed Wheat tonnage does not enter this ratio.

**1.** Barley minus Wheat:

$$120 - 95 = 25$$

**2.** Gap over Wheat:

$$\\frac{25}{95} \\approx 0.2632$$

**3.** About $26.3\\%$, which exceeds $25\\%$. A solver who used $25/120 \\approx 20.8\\%$ against Barley would fail the cutoff. The trap figure $20.8\\%$ is the gap over the wrong crop. A solver who treated $\\$25$ as already $25\\%$ of $\\$100$ would skip Wheat's actual $95$.

The opposite verdict would need a gap of $23.75$ or less on a $\\$95$ Wheat margin. With $120$ and $95$, the gap is $25$.

Barley's $\\$25$ advantage is about $26.3\\%$ of Wheat's $\\$95$, which exceeds $25\\%$, so the statement is True.`,

  "math-5-46:E": `The statement claims Season 2's profit per tonne of total output exceeds Season 1's. Season 1 is $240$ t Wheat and $160$ t Barley for $\\$42{,}000$. Season 2 is $180$ t Wheat and $260$ t Barley for $\\$48{,}300$. The extra arithmetic is the two averages. Recovered $95$ and $120$ are not re-solved here; they already sit inside those printed totals.

**1.** Season 1: $240+160=400$ t at $\\$42{,}000$, so $42000/400=105$ per tonne.

**2.** Season 2: $180+260=440$ t at $\\$48{,}300$, so $48300/440=109.772\\ldots$ per tonne.

**3.** Compare: $109.77 > 105$. Season 2 is Barley-heavier, and Barley pays $120$ versus Wheat's $95$, so the average rises.

A solver who compared totals $48300>42000$ without dividing by tonnes would be ranking size, not intensity. Season 3's reconstructed $180$ t of Wheat is a third season and is not in this comparison.

The opposite verdict would need Season 2 to be Wheat-heavier than Season 1. With $260$ t of Barley against Season 1's $160$ t, Season 2's profit per tonne is higher.

Season 2's about $\\$109.77$ per tonne exceeds Season 1's $\\$105$, so the statement is True.`,

  "math-5-47:B": `The statement claims the current age gap $x-y$ is more than $45\\%$ of the elder employee's current age. The overview already recovered elder $47$ and younger $19$. The extra arithmetic is the gap over $47$.

**1.** Current gap:

$$47 - 19 = 28$$

**2.** Gap over the elder:

$$\\frac{28}{47} \\approx 0.5957$$

**3.** About $59.6\\%$, which exceeds $45\\%$. A solver who used $28/19 \\approx 147\\%$ against the younger would still exceed $45\\%$ but would be using the wrong base. A solver who used the five-years-ago gap $42-14=28$ over $42 \\approx 67\\%$ would be answering a past-age question. The trap figure $45\\%$ is a round bar well below $59.6\\%$.

The opposite verdict would need the gap to be $0.45 \\times 47=21.15$ or less. With ages $47$ and $19$, the gap is $28$.

The gap $28$ is about $59.6\\%$ of $47$, which exceeds $45\\%$, so the statement is True.`,

  "math-5-47:D": `The statement claims that ten years ago the sum of their ages was less than $40$. The overview already recovered $47$ and $19$. The extra arithmetic is subtracting ten from each, then adding.

**1.** Ages ten years ago:

$$47-10=37, \\qquad 19-10=9$$

**2.** Sum:

$$37 + 9 = 46$$

**3.** Compare with $40$:

$$46 < 40$$

is false. The sum is $46$, six above the cutoff. Note $46$ is also $47+19-20$, current sum minus twenty years of living. A solver who subtracted ten only from the elder would get $37+19=56$. A solver who used five years ago, $42+14=56$, would be at the stem's triple moment, not ten years ago. The trap figure $56$ is the five-year-ago sum.

The opposite verdict would need a current sum below $60$. With $47+19=66$, ten years ago is $46$.

Ten years ago the ages summed to $46$, which is not less than $40$, so the statement is False.`,

  "math-5-47:E": `The statement claims there was a point more than $4$ years ago when the elder was exactly three times the younger. The stem already says that five years ago the elder was exactly three times the younger: $42=3 \\times 14$. Five years is more than four years. This letter is reading that stem condition against a "more than $4$ years ago" cutoff, not re-solving the ages.

**1.** The triple is at $t=-5$ years.

**2.** Compare with the cutoff of $4$ years ago:

$$5 > 4$$

**3.** The triple sits one year past the cutoff. A solver who used the nine-years-forward double instead would be answering a future question. The double is at $t=+9$, which is not "more than $4$ years ago." A solver who required an integer number of years beyond five would miss that five already qualifies.

The opposite verdict would need the triple to fall at $4$ years ago or more recently. The stem pins it at five years ago.

The triple occurred five years ago, which is more than four years ago, so the statement is True.`,

  "math-5-48:B": `The statement claims the dollar markup on Product B is more than $80\\%$ of the dollar markup on Product A. Crestline marks A up $32\\%$ and B up $18\\%$ over wholesale. The overview already recovered wholesale $A=55$ and $B=80$.

**1.** Dollar markup on A:

$$55 \\times 0.32 = 17.60$$

**2.** Dollar markup on B:

$$80 \\times 0.18 = 14.40$$

**3.** Ratio:

$$\\frac{14.40}{17.60} = 0.8181\\ldots$$

about $81.8\\%$, which exceeds $80\\%$. B's percentage markup is smaller, but B's wholesale is larger, so the dollar markups are close, with B still a bit below A. A solver who compared $18\\%$ with $80\\%$ of $32\\%$ would be mixing percentage points with dollar markups. The trap figure $18/32=56\\%$ is the rate ratio, not the dollar ratio.

The opposite verdict would need $14.40 \\le 0.80 \\times 17.60=14.08$. Recovered markups sit just above that.

B's dollar markup $\\$14.40$ is more than $80\\%$ of A's $\\$17.60$, so the statement is True.`,

  "math-5-48:C": `The statement claims Order 1's total retail markup exceeds $\\$150$. Order 1 is $8$ of A and $5$ of B. Markup per A is $17.60$, per B is $14.40$.

**1.** Markup on A's units:

$$8 \\times 17.60 = 140.80$$

**2.** Markup on B's units:

$$5 \\times 14.40 = 72.00$$

**3.** Combined markup:

$$140.80 + 72.00 = 212.80$$

Then $212.80 > 150$. Order 1's retail minus wholesale $8(55)+5(80)=840$ is the same $212.80$. A solver who reported $32\\%$ of the retail ticket would be applying A's rate to the whole order. The two rates differ. The trap figure $32\\%$ of retail is a one-rate story.

The opposite verdict would need Order 1's mix to carry less than $\\$150$ of markup. With $8$ and $5$ at $17.60$ and $14.40$, the markup is $212.80$.

Order 1's markup is $\\$212.80$, which exceeds $\\$150$, so the statement is True.`,

  "math-5-48:D": `The statement raises Order 3's Product B from $12$ to $15$ units, Product A unchanged at $3$, and claims the retail total would increase by more than $\\$280$. Retail B is $80 \\times 1.18=94.40$. The extra arithmetic is three extra B at that retail price.

**1.** Three extra B at retail:

$$3 \\times 94.40 = 283.20$$

**2.** Compare with $\\$280$:

$$283.20 > 280$$

**3.** The increment is three times B's retail price, not three times wholesale. A solver who used $3 \\times 80=240$ wholesale would fail the $\\$280$ cutoff. A solver who used $3 \\times 72.60$ after swapping products would also fail. The trap figure $240$ is wholesale on the extra units.

Product A unchanged means those $3$ units add $0$ to the increment. The opposite verdict would need retail B at or below $280/3 \\approx 93.33$. With retail B at $94.40$, three extra units add $283.20$.

Three extra B add $\\$283.20$, which is more than $\\$280$, so the statement is True.`,

  "math-5-48:E": `The statement claims the wholesale cost ratio $B:A$ is greater than the retail price ratio $B:A$. Wholesale $A=55$, $B=80$. Retail A is $55 \\times 1.32=72.60$. Retail B is $80 \\times 1.18=94.40$.

**1.** Wholesale ratio:

$$\\frac{80}{55} \\approx 1.4545$$

**2.** Retail ratio:

$$\\frac{94.40}{72.60} \\approx 1.3003$$

**3.** Compare:

$$1.4545 > 1.3003$$

A has the larger percentage markup, so retail A is pulled up more than retail B, which shrinks the $B:A$ ratio at retail relative to wholesale. A solver who compared $18\\%$ with $32\\%$ as if those were the price ratios would be answering a different question. The trap figure $32/18$ is a rate ratio, not a price ratio.

The opposite verdict would need B's markup percentage to exceed A's, which would inflate retail B/A above wholesale B/A. The stem marks A at $32\\%$ and B at $18\\%$.

Wholesale $B/A$ exceeds retail $B/A$, so the statement is True.`,

  "math-5-49:B": `The statement claims the Ravens earned more than $45\\%$ of their total points from draws alone. The Falcons had $75$ points. The Ravens had $8$ fewer, so $67$ points, from $7$ wins and $6$ draws. The overview already recovered a win at $7$ points and a draw at $3$.

**1.** Ravens' draw points:

$$6 \\times 3 = 18$$

**2.** Share of Ravens' total:

$$\\frac{18}{67} \\approx 0.2687$$

**3.** About $26.9\\%$, which is not more than $45\\%$. Wins still supply $7 \\times 7=49$ of the $67$ points. A solver who used $6/14 \\approx 43\\%$ of *matches* that were draws would sit near $45\\%$ and might accept the claim. The trap figure $43\\%$ is match share, not point share. The claim is points, not matches.

The opposite verdict would need draw points above $0.45 \\times 67 \\approx 30.15$, which would take more than $10$ draws at $3$ points. The Ravens had $6$ draws.

Ravens' draw share is about $27\\%$ of points, not more than $45\\%$, so the statement is False.`,
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
