import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-5-35": [
    `The statement places Fabric Roll's recovered margin above $\\$27$ but not above $\\$27.50$.

The overview already recovered the Fabric margin at $\\$27.35$. Then $27 < 27.35 < 27.50$.

A solver who rounded $27.35$ to $27$ would fail the first inequality. A solver who rounded to $27.50$ would fail the second. The recovered cents are what sit in the gap.

Fabric's margin is $\\$27.35$, which clears $\\$27$ but not $\\$27.50$, so the statement is True.`,

    `The statement doubles Yarn Spool's recovered margin and claims the double just clears forty dollars.

The overview already recovered Yarn at $\\$19.80$. The extra arithmetic is only the double.

$$2 \\times 19.80 = 39.60$$

Then $39.60 > 40$ is false. The double sits forty cents short of $\\$40$.

A solver who used $20$ would get $40$ exactly and treat "just clear" as equality. The recovered $19.80$ is what keeps the double under forty.

Double Yarn's margin is $\\$39.60$, which does not clear $\\$40$, so the statement is False.`,

    `This letter is a new mix: $200$ Fabric Rolls and $150$ Yarn Spools, compared with an $\\$8{,}400$ profit cutoff, "only by a slender margin."

The overview already has Fabric $27.35$ and Yarn $19.80$. The extra arithmetic is costing the mix.

**1.** Two hundred Fabric Rolls:

$$200 \\times 27.35 = 5470$$

**2.** One hundred fifty Yarn Spools:

$$150 \\times 19.80 = 2970$$

**3.** Add and compare with $\\$8{,}400$:

$$5470 + 2970 = 8440$$

Then $8440 > 8400$. The mix clears the cutoff by $\\$40$, which is slender relative to an $\\$8{,}400$ bar: about half a percent.

A solver who used Q1's mix scaled to $200$ rolls would keep Q1's yarn ratio and miss this letter's $150$ spools. A solver who rounded to $27$ and $20$ would get $5400+3000=8400$ exactly, which does not "clear" a strict cutoff. The recovered cents are what produce the slender $\\$40$ overshoot.

What would have to change for the opposite verdict? If Fabric were $27.00$, the mix would be $5400+2970=8370$, under $8400$. The two quarters force $27.35$, and $200$/$150$ is then $8440$.

The new mix profits $\\$8{,}440$, which clears $\\$8{,}400$ by $\\$40$, so the statement is True.`,

    `The statement looks at the dollar gap between Q2's and Q1's total profit, and claims that even after dropping the smallest hundred from that gap, a three-digit number remains.

**1.** Profit gap:

$$10260.50 - 10029.00 = 231.50$$

**2.** Drop the smallest hundred, meaning subtract $100$:

$$231.50 - 100 = 131.50$$

**3.** $131.50$ is still three-digit. The claim holds.

A solver who dropped the hundreds place entirely, reporting $31.50$, would have a two-digit leftover and flip the verdict. "Dropped the smallest hundred from it" is subtract $100$, not strip the hundreds digit. A solver who used $10260.50-10029=231.50$ and called $231$ already three-digit without dropping would be answering a weaker claim that is also true.

The reduced gap is $131.50$, still three-digit, so the statement is True.`,

    `The statement costs five hundred Fabric Rolls and no Yarn Spools, and claims the profit is a round $\\$13{,}675$ with no cents.

The overview already recovered Fabric at $27.35$. The extra arithmetic is only that product.

$$500 \\times 27.35 = 13675$$

The product is a whole-dollar $\\$13{,}675$. Five hundred times $27$ is $13{,}500$, and five hundred times $0.35$ is $175$, and $13500+175=13675$ with no leftover cents.

A solver who included even one Yarn Spool would add $19.80$ and destroy the round figure. The claim is Fabric only.

Five hundred Fabric Rolls profit $\\$13{,}675$ exactly, so the statement is True.`,
  ],

  "math-5-36": [
    `The statement claims Invoice 2 restates Invoice 1 at $60\\%$ scale, rather than giving independent evidence.

Invoice 1 is $15$ Nitrogen and $20$ Oxygen at $\\$699$. Invoice 2 is $9$ Nitrogen and $12$ Oxygen at $\\$419.40$.

**1.** Quantity scale:

$$\\frac{9}{15} = 0.60, \\qquad \\frac{12}{20} = 0.60$$

**2.** Dollar scale:

$$\\frac{419.40}{699} = 0.60$$

Every column of Invoice 2 is $0.60$ times Invoice 1. The second invoice is a scaled copy, not a second independent mix. It cannot isolate a second unknown. The overview used Invoice 1 with Invoice 3, which is a genuinely different mix ($13$ Nitrogen and $5$ Oxygen).

A solver who treated all three rows as independent would be over-counting information. Two of the three rows are the same line.

Invoice 2 is Invoice 1 at $60\\%$ scale, so the statement is True.`,

    `The statement claims Nitrogen-type cylinders are priced closer to $\\$17$ than to $\\$16$.

The overview already recovered Nitrogen at $\\$16.40$. Distance to $17$ is $0.60$. Distance to $16$ is $0.40$. Then $0.40 < 0.60$, so $16.40$ is closer to $16$.

The claim has the nearer neighbour backwards. A solver who rounded $16.40$ to $16.50$ and called that equidistant would still not prefer $17$.

Nitrogen at $\\$16.40$ sits closer to $\\$16$ than to $\\$17$, so the statement is False.`,

    `The statement compares four Oxygen-type cylinders with six Nitrogen-type cylinders.

The overview already recovered Oxygen at $22.65$ and Nitrogen at $16.40$. The extra arithmetic is costing both baskets.

**1.** Four Oxygen:

$$4 \\times 22.65 = 90.60$$

**2.** Six Nitrogen:

$$6 \\times 16.40 = 98.40$$

**3.** Compare:

$$90.60 < 98.40$$

Four Oxygen cost less than six Nitrogen by $\\$7.80$. A solver who used four and six of the same type would be answering a different question. A solver who swapped the prices would flip the inequality.

Four Oxygen cost $\\$90.60$ and six Nitrogen cost $\\$98.40$, so four Oxygen cost less, so the statement is True.`,

    `The statement doubles Invoice 3's order exactly and claims the resulting bill lands above $\\$655$.

Invoice 3 is $13$ Nitrogen and $5$ Oxygen at $\\$326.45$. Doubling at fixed prices doubles the dollars.

$$2 \\times 326.45 = 652.90$$

Then $652.90 > 655$ is false. The doubled bill sits $\\$2.10$ short of $\\$655$.

A solver who doubled Invoice 1 instead would get $1398$, far above $655$. A solver who used $2 \\times 328$ as a round Invoice 3 would get $656$ and flip the verdict. The printed $326.45$ is what keeps the double under $655$.

Double Invoice 3 is $\\$652.90$, which is not above $\\$655$, so the statement is False.`,

    `The statement blends Invoices 1 and 3 together, cylinders and dollars alike, and claims the resulting per-cylinder price fails to reach $\\$20$.

**1.** Combined cylinders:

$$(15+20) + (13+5) = 35 + 18 = 53$$

**2.** Combined dollars:

$$699.00 + 326.45 = 1025.45$$

**3.** Per-cylinder blend:

$$\\frac{1025.45}{53} \\approx 19.348$$

Then $19.35 < 20$. The blend fails to reach $\\$20$. Invoice 1's own average $699/35=19.97$ already sits just under $20$, and Invoice 3 is lighter on the dearer Oxygen, which pulls the blend down further.

A solver who used Invoice 2 as well would be triple-counting Invoice 1's information, because Invoice 2 is a scaled copy. A solver who divided $1025.45$ by $35$, forgetting Invoice 3's $18$ cylinders, would get about $29$ and overshoot $20$.

The blended per-cylinder price is about $\\$19.35$, which does not reach $\\$20$, so the statement is True.`,
  ],
};

applyLetters("31_40.json", patches);
console.log("applied 35-36");
