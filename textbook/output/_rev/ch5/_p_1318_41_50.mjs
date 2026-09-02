import { applyFile } from "./_apply_1318.mjs";

const patches = {
  "math-5-41": {
    overview: `Fund A pays $5.25\\%$ and Fund B pays $3.75\\%$. Fund B's balance is $\\$4{,}000$ more than twice Fund A's, and the combined simple return is $\\$762$.

Let $x$ be Fund A's balance and $y$ Fund B's. The notes give

$$y=2x+4000$$

$$0.0525x+0.0375y=762$$`,
    bodies: [
      `Substitute $y=2x+4000$ into the return equation:

$$0.0525x+0.0375(2x+4000)=762$$

$$0.1275x=612$$

$$x=4800,\\qquad y=13600$$

Fund A earns $0.0525(4800)=252$ and Fund B earns $0.0375(13600)=510$. Triple A's interest is $756$, and $510<756$, so the statement is False.`,
      `Raising A's rate to $6.75\\%$ with the recovered balances gives

$$0.0675(4800)+0.0375(13600)=324+510=834$$

which is above $\\$800$, so the statement is True.`,
      `The combined trust is $4800+13600=18400$. The $\\$762$ return is

$$\\frac{762}{18400}\\approx 0.0414$$

which is more than $4\\%$, so the statement is True.`,
      `An even $\\$9{,}200$ split at the original rates would earn

$$9200(0.0525+0.0375)=9200(0.09)=828$$

which sits $\\$66$ from $\\$762$, not within $\\$5$, so the statement is False.`,
      `Relative to the smaller balance,

$$\\frac{13600-4800}{4800}=\\frac{8800}{4800}\\approx 1.833$$

which exceeds $180\\%$, so the statement is True.`,
    ],
  },

  "math-5-42": {
    overview: `Each stock solution has a fixed salt concentration. Batch volumes split according to the stated A:B ratio.

Let $a$ be Solution A's grams per litre and $b$ Solution B's. Batch 1 is $6$ L of A and $4$ L of B; Batch 2 is $10$ L of A and $2$ L of B:

$$6a+4b=144$$

$$10a+2b=184$$`,
    bodies: [
      `Batch 1 recorded $144$ g and Batch 2 recorded $184$ g:

$$144+184=328$$

which exceeds $300$ g, so the statement is True.`,
      `The two complete batches recover $a=16$ and $b=12$. Then

$$\\frac{12}{16}=0.75$$

so B is $75\\%$ of A's concentration, more than $70\\%$, and the statement is True.`,
      `Batch 3 is $2$ L of A and $6$ L of B. The model predicts $2(16)+6(12)=104$ g against $109$ g recorded. If A's $2$ L is held fixed,

$$32+12B=109$$

$$B\\approx 6.42$$

which is closer to $6.4$ L than to $6.0$ L, so the statement is True.`,
      `A $3:1$ mix with total volume $V$ has $0.75V$ of A and $0.25V$ of B. Setting the salt to $130$ g:

$$0.75V(16)+0.25V(12)=15V=130$$

$$V\\approx 8.67$$

not $7.5$ L, so the statement is False.`,
      `Batch 2 used $10/12$ of its volume as A. Batch 1 used $6/10$. Since $5/6>3/5$, Batch 2 used the higher A share, so the statement is True.`,
    ],
  },

  "math-5-43": {
    overview: `Pay is a base hourly wage plus a fixed overtime premium on hours beyond $40$. Overtime therefore pays base plus premium.

Let $b$ be the base wage and $p$ the overtime premium. The two gross pays give

$$40b+2.5(b+p)=765$$

$$40b+7(b+p)=882$$`,
    bodies: [
      `Pay is base $b$ plus overtime at $b+p$. The two gross figures give

$$40b+2.5(b+p)=765$$

$$40b+7(b+p)=882$$

The pair recovers $b=17.50$ and $p=8.50$, so overtime pays $26$ per hour. Employee A's $2.5$ overtime hours earned $65$, and $10\\%$ of that is $6.50$, which exceeds $\\$6$, so the statement is True.`,
      `Employee B's overtime pay is $7(26)=182$ out of $882$:

$$\\frac{182}{882}\\approx 0.206$$

which is not more than $40\\%$, so the statement is False.`,
      `Combined actual gross is $765+882=1647$. Two people working $45$ hours at the base with no premium would earn $2(45)(17.50)=1575$. Since $1647>1575$, the statement is True.`,
      `A $15\\%$ rise in the base with no premium would pay Employee A $42.5(17.50)(1.15)=855.3125$, which is more than $765$, not a decrease, so the statement is False.`,
      `The overtime-hour ratio is $7/2.5=2.8$. The gross-pay ratio is $882/765\\approx 1.15$. Since $2.8>1.15$, the statement is True.`,
    ],
  },

  "math-5-44": {
    overview: `Wood and wire fencing keep fixed prices per metre. Project 2 is a $1.5$ scale of Project 1, so it restates the same line.

Let $x$ be the wood price per metre and $y$ the wire price per metre. Project 1 and Project 3 give the independent pair

$$18x+24y=750$$

$$10x+40y=710$$`,
    bodies: [
      `Project 1 with Project 3 recovers $x=27$ and $y=11$. Replacing Project 3's wood with $20$ m would cost

$$20(27)+40(11)=540+440=980$$

which exceeds $\\$950$, so the statement is True.`,
      `The recovered gap is $27-11=16$. Then $16/11\\approx 1.455$, which is more than $145\\%$ of the wire price, so the statement is True.`,
      `Combining the two projects costs $750+710$ because prices are linear. The hypothetical total is not less than the sum, so the statement is False.`,
      `Raising wire by $\\$2$ adds $24(2)=48$ to Project 1. Then $48/750=0.064$, a $6.4\\%$ increase, not more than $15\\%$, so the statement is False.`,
      `Project 3 averages $710/50=14.20$ per metre. Project 1 averages $750/42\\approx 17.86$. Project 3 is cheaper per metre, so the statement is False.`,
    ],
  },

  "math-5-45": {
    overview: `The boats travel at constant speeds. On the $250$ km stretch they start together and meet after $2$ hours. On the $356$ km stretch, Boat B has a $3$-hour head start and they meet $1$ hour after Boat A starts, so B has been moving for $4$ hours.

Let $x$ be Boat A's speed and $y$ Boat B's. The two meetings give

$$2x+2y=250$$

$$x+4y=356$$`,
    bodies: [
      `Dividing the first meeting by $2$ gives $x+y=125$. With $x+4y=356$, the pair is $x=48$ and $y=77$. Boat A alone on $356$ km would take

$$\\frac{356}{48}\\approx 7.42$$

hours, more than $7$, so the statement is True.`,
      `When they meet on the $250$ km stretch, A has covered $96$ km and B has covered $154$ km. The difference is $58$ km, which is less than half of $250$, so the statement is True.`,
      `Raising both speeds by $20\\%$ raises the closing speed from $125$ to $150$ km/h. Closing $250$ km then takes $250/150\\approx 1.67$ hours, which is not below $1.5$, so the statement is False.`,
      `In $3$ hours the two boats together cover $3(48+77)=375$ km, which exceeds $356$, so the statement is True.`,
      `Boat B's speed over A's is $77/48-1\\approx 0.604$, more than $60\\%$ higher, so the statement is True.`,
    ],
  },

  "math-5-46": {
    overview: `Wheat and barley earn fixed profit per tonne. Season 3's wheat tonnage is missing.

Let $w$ be wheat profit per tonne and $b$ barley profit per tonne. Seasons 1 and 2 give

$$240w+160b=42000$$

$$180w+260b=48300$$`,
    bodies: [
      `The two complete seasons recover $w=95$ and $b=120$. Replacing Season 1's wheat with $260$ t would profit

$$260(95)+160(120)=24700+19200=43900$$

which does not exceed $\\$44{,}000$, so the statement is False.`,
      `Barley's advantage is $120-95=25$, and $25/95\\approx 0.263$, more than $25\\%$ of wheat's margin, so the statement is True.`,
      `Season 3 is $95T+120(300)=53100$, so $T=180$. Season 3's total tonnage is $180+300=480$ and Season 2's is $440$. Season 3 is larger, so the statement is False.`,
      `An extra $40$ t of wheat at $95$ per tonne would add $3800$, which is more than $\\$3{,}500$, so the recorded $\\$53{,}100$ would have been understated by that amount, and the statement is True.`,
      `Season 2 averages $48300/440\\approx 109.77$ per tonne. Season 1 averages $42000/400=105$. Season 2 is higher, so the statement is True.`,
    ],
  },

  "math-5-47": {
    overview: `Five years ago the elder was three times the younger. Nine years from now the elder will be twice the younger.

Let $x$ be the elder's current age and $y$ the younger's. Those two snapshots give

$$x-5=3(y-5)$$

$$x+9=2(y+9)$$`,
    bodies: [
      `Five years ago the elder was three times the younger, and nine years from now twice:

$$x-5=3(y-5)$$

$$x+9=2(y+9)$$

The pair recovers $x=47$ and $y=19$. Fifteen years from now they will be $62$ and $34$. Double $34$ is $68$, and $62<68$, so the statement is True.`,
      `The current gap is $47-19=28$, and $28/47\\approx 0.596$, more than $45\\%$ of the elder's age, so the statement is True.`,
      `In $4.5$ years they will be $51.5$ and $23.5$. Then $2.5(23.5)=58.75$, and $51.5$ is not more than $58.75$, so the statement is False.`,
      `Ten years ago the ages were $37$ and $9$, which sum to $46$, not less than $40$, so the statement is False.`,
      `Setting $x-t=3(y-t)$ with the recovered ages gives $t=5$. That point is more than $4$ years ago, so the statement is True.`,
    ],
  },

  "math-5-48": {
    overview: `Product A is marked up $32\\%$ and Product B $18\\%$ over wholesale. Order 2 is exactly double Order 1, so it restates the same line.

Let $x$ be A's wholesale cost and $y$ B's. Order 1 and Order 3 give

$$8(1.32x)+5(1.18y)=1052.80$$

$$3(1.32x)+12(1.18y)=1350.60$$`,
    bodies: [
      `Product A is marked up $32\\%$ and Product B $18\\%$. Order 1 and Order 3 give

$$8(1.32x)+5(1.18y)=1052.80$$

$$3(1.32x)+12(1.18y)=1350.60$$

The pair recovers $x=55$ and $y=80$, so A retails at $72.60$ and B at $94.40$. Swapping the markups would retail A at $64.90$ and B at $105.60$, and Order 3 would then bill $1461.90$, an increase, so the statement is False.`,
      `B's dollar markup is $0.18(80)=14.40$ and A's is $0.32(55)=17.60$. Then $14.40/17.60=0.818$, more than $80\\%$, so the statement is True.`,
      `Order 1's total markup is $8(17.60)+5(14.40)=212.80$, which exceeds $\\$150$, so the statement is True.`,
      `Three extra units of B at the retail price $94.40$ add $283.20$, which is more than $\\$280$, so the statement is True.`,
      `The wholesale ratio is $80/55\\approx 1.455$ and the retail ratio is $94.40/72.60\\approx 1.300$. The wholesale ratio is larger, so the statement is True.`,
    ],
  },

  "math-5-49": {
    overview: `A win is worth a fixed $w$ points and a draw a fixed $d$; a loss is worth $0$. The Falcons scored $75$ points. The Ravens scored $8$ fewer.

Let $w$ be points for a win and $d$ points for a draw. The two records give

$$9w+4d=75$$

$$7w+6d=67$$`,
    bodies: [
      `A win is worth $w$ and a draw $d$. The Falcons scored $75$ and the Ravens $67$:

$$9w+4d=75$$

$$7w+6d=67$$

The pair recovers $w=7$ and $d=3$. If a draw were half a win, $d$ would be $3.5$ and the Falcons would score $9(7)+4(3.5)=77$, which is more than $75$, so the statement is True.`,
      `The Ravens' $18$ draw points out of $67$ are about $26.9\\%$, not more than $45\\%$, so the statement is False.`,
      `Under $2$ per win and $1$ per draw, the Falcons score $22$ and the Ravens score $20$. The Falcons still finish ahead, so the statement is True.`,
      `The Falcons' win points over draw points are $63/12=5.25$, which does not exceed $15$, so the statement is False.`,
      `Twelve wins and one draw at $w=7$ and $d=3$ score $87$. That is only $12$ above $75$, not more than $20$, so the statement is False.`,
    ],
  },

  "math-5-50": {
    overview: `Each metal has a fixed mass per litre. Batch 3 converted $2.5$ gal to $9.5$ L.

Let $a$ be Metal A's kg per litre and $b$ Metal B's. Batches 1 and 2 give

$$12a+8b=182.4$$

$$5a+15b=209$$`,
    bodies: [
      `The two complete batches recover $a=7.6$ and $b=11.4$. Replacing Batch 1's B volume with $10$ L would mass

$$12(7.6)+10(11.4)=91.2+114=205.2$$

which exceeds $200$ kg, so the statement is True.`,
      `Then $11.4/7.6=1.5$, so B is exactly $50\\%$ denser than A, not more than $50\\%$ denser, and the statement is False.`,
      `Batch 3 is predicted at $9.5(7.6)+6(11.4)=140.6$ kg against $147.0$ kg recorded. The $6.4$ kg gap is $6.4/147\\approx 4.35\\%$ of the recorded mass, more than $4\\%$, so the statement is True.`,
      `If Batch 3's A volume were $10$ L, the model would predict $10(7.6)+6(11.4)=144.4$ kg. The gap to $147.0$ is $2.6$ kg, not within $2$ kg, so the statement is False.`,
      `Mass is linear in volume, so combining the two batches just adds $182.4+209.0$, and the statement is True.`,
    ],
  },
};

const n = applyFile("41_50.json", patches);
console.log("patched", n);
