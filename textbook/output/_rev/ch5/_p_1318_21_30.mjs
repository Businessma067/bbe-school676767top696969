import { applyFile } from "./_apply_1318.mjs";

const patches = {
  "math-5-21": {
    overview: `The flyer claims a $\\$30$ signup fee and $\\$45$ per month. Maria's and Jason's actual totals are the data.

Let $x$ be the signup fee actually charged and $y$ the actual monthly rate. The two payment histories give

$$x+6y=284$$

$$x+10y=448$$`,
    bodies: [
      `Subtracting Maria from Jason isolates the monthly rate:

$$4y=164$$

$$y=41$$

Then $x+6(41)=284$ gives $x=38$. The flyer claimed $\\$30$, so the statement is False.`,
      `The four extra months between Jason and Maria cost $448-284=164$:

$$4y=164$$

$$y=41$$

Since $41<45$, members pay less per month than the flyer states, so the statement is True.`,
      `The flyer's advertised rule at six months is

$$30+6(45)=30+270=300$$

Maria actually paid $\\$284$. Since $284<300$, her total does not exceed the flyer figure, so the statement is False.`,
      `Jason's listed total is already $\\$448$, and $448>400$. Rebuilding at $x=38$ and $y=41$ gives $38+10(41)=448$ as well, so the statement is True.`,
      `Dropping the recovered signup fee and paying only $y=41$ for twelve months:

$$12\\times 41=492$$

so the statement is True.`,
    ],
  },

  "math-5-22": {
    overview: `Basic and Premium are flat monthly plans with no connection fee.

Let $x$ be the Basic monthly price and $y$ the Premium monthly price. The two household mixes give

$$4x+3y=169$$

$$2x+7y=255$$`,
    bodies: [
      `Double Household 2 and subtract Household 1:

$$(4x+14y)-(4x+3y)=510-169$$

$$11y=341$$

$$y=31$$

Then $4x+93=169$ gives $x=19$. Basic is $\\$19$ per month, so the statement is True.`,
      `The same two household equations recover $y=31$, not $\\$35$. Premium is $\\$31$ per month, so the statement is False.`,
      `Household 2 billed $\\$255$ and Household 1 billed $\\$169$. Double Household 1 is $338$, and $255<338$, so Household 2 is not more than double, and the statement is False.`,
      `Equal cost for $n$ months of only Basic versus only Premium would require $nx=ny$, hence $x=y$. The recovered prices are $19$ and $31$, which are not equal, so the statement is False.`,
      `Five months of each plan, at $x=19$ and $y=31$, cost

$$5(19)+5(31)=95+155=250$$

so the statement is True.`,
    ],
  },

  "math-5-23": {
    overview: `Neither receipt is a loyalty ticket, so the printed totals are undiscounted. Bread and eggs have listed prices; apples and almond milk do not.

Let $x$ be the apple price per pound and $y$ the almond-milk price per carton. Stripping the known items leaves

$$5x+3y=42$$

$$2x+5y=39.60$$`,
    bodies: [
      `Receipt 1's unknown items total $50-3.60-4.40=42$, and Receipt 2's unknown items total $43.20-3.60=39.60$:

$$5x+3y=42$$

$$2x+5y=39.60$$

Eliminating $x$ recovers $y=6$ and then $x=4.80$. Apples are $\\$4.80$ per pound, so the statement is True.`,
      `The same leftover system recovers $x=4.80$ and $y=6$. Almond milk costs more per unit than apples, not less, so the statement is False.`,
      `Five pounds of apples cost $5(4.80)=24$. Four cartons of milk cost $4(6)=24$. The two baskets match, so the statement is True.`,
      `A $5\\%$ loyalty discount on Receipt 1's $\\$50$ would charge

$$50\\times 0.95=47.50$$

That is not less than $\\$47$, so the statement is False.`,
      `Ten pounds of apples and two cartons of milk cost

$$10(4.80)+2(6)=48+12=60$$

That equals $\\$60$, so it is not more than $\\$60$, and the statement is False.`,
    ],
  },

  "math-5-24": {
    overview: `The standard plan is a fixed connection fee plus a constant rate per unit. Customer service's $\\$0.24$ rate is a claim. Solar Offset has no fee and charges $\\$0.29$ per unit.

Let $f$ be the connection fee and $r$ the standard per-unit rate. The two bills give

$$f+240r=83.40$$

$$f+380r=112.80$$`,
    bodies: [
      `The $140$-unit gap between the bills isolates the rate:

$$140r=29.40$$

$$r=0.21$$

Then $f+240(0.21)=83.40$ gives $f=33$. The connection fee is $\\$33$, so the statement is True.`,
      `The recovered rate is $r=0.21$, not the $\\$0.24$ customer service claimed, so the statement is False.`,
      `At $f=33$ and $r=0.21$, two hundred eighty units cost

$$33+280(0.21)=33+58.80=91.80$$

Since $91.80<95$, the statement is True.`,
      `Solar Offset costs $0.29u$ and the standard plan costs $33+0.21u$. Solar is cheaper only when $0.08u<33$, that is $u<412.5$. At low usage the standard plan is cheaper, so Solar is not cheaper at every positive usage, and the statement is False.`,
      `At $500$ units, Solar Offset is $0.29(500)=145$ and the standard plan is $33+500(0.21)=138$. Solar is more expensive there, so the statement is False.`,
    ],
  },

  "math-5-25": {
    overview: `Off-peak tables have no service fee. Peak tables add $10\\%$ before the bill is printed. Table 8's printed total is $\\$46$ above Table 5's $\\$174$.

Let $p$ be the pasta price and $a$ the appetizer price. Table 5 is already food-only. Table 8's food subtotal is $220/1.10=200$, so

$$6p+4a=174$$

$$5p+7a=200$$`,
    bodies: [
      `Table 5 is already food-only. Table 8 printed $174+46=220$, and stripping the $10\\%$ fee leaves the food system

$$6p+4a=174$$

$$5p+7a=200$$

Eliminating $a$ recovers $p=19$. Pasta is $\\$19$, so the statement is True.`,
      `The same pair recovers $a=15$. An appetizer costs less than a pasta dish, not more, so the statement is False.`,
      `Table 8's pre-fee subtotal is $220/1.10=200$. Table 5's total is $174$, and

$$200-174=26$$

so the statement is True.`,
      `Adding the $10\\%$ peak fee to Table 5's $\\$174$:

$$174\\times 1.10=191.40$$

so the statement is True.`,
      `Four pasta and four appetizers at $p=19$ and $a=15$ cost $76+60=136$ before the fee. With $10\\%$ added:

$$136\\times 1.10=149.60$$

which is less than $\\$150$, so the statement is True.`,
    ],
  },

  "math-5-26": {
    overview: `Unit weights are distractors. Only counts and shipment cost fix the prices.

Let $x$ be Item M's unit price and $y$ Item N's. The two shipments give

$$110x+80y=4470$$

$$70x+150y=5520$$`,
    bodies: [
      `Only counts and cost fix the prices. The two shipments give

$$110x+80y=4470$$

$$70x+150y=5520$$

Dividing by $10$ and eliminating $y$ recovers $x=21$. Item M costs $\\$21$ per unit, so the statement is True.`,
      `The same two cost equations recover $y=27$, not $\\$30$. Item N costs $\\$27$ per unit, so the statement is False.`,
      `Shipment 1 averages $4470/190\\approx 23.53$ per unit and Shipment 2 averages $5520/220=25.09$. The averages are not equal, so the statement is False.`,
      `At the recovered price $y=27$, one hundred fifty units of N cost

$$150\\times 27=4050$$

so the statement is True.`,
      `The weights never enter the pricing equations. Shipment 1 is cheaper because it is a different mix at the same unit prices, not because it is lighter, so the statement is False.`,
    ],
  },

  "math-5-27": {
    overview: `Each bundle is $2$ Standard plus $5$ Premium. Job 1 billed seven bundles; Job 2 listed units directly.

Let $x$ be the Standard unit price and $y$ the Premium unit price. Expanding Job 1's bundles gives

$$14x+35y=1946$$

$$13x+21y=1301$$`,
    bodies: [
      `Job 1 is seven bundles of $2$ Standard and $5$ Premium, so $14$ Standard and $35$ Premium:

$$14x+35y=1946$$

$$13x+21y=1301$$

Eliminating $x$ recovers $y=44$ and then $x=29$. Standard planting is $\\$29$ per unit, so the statement is True.`,
      `The recovered Premium price is $y=44$, not $\\$50$, so the statement is False.`,
      `Each of Job 1's seven bundles holds $2$ Standard and $5$ Premium, so the job is

$$7\\times 2=14$$

Standard units and $7\\times 5=35$ Premium units, and the statement is True.`,
      `Job 1's Premium slice at $y=44$ is $35(44)=1540$. Job 2's whole invoice is $\\$1{,}301$, and $1540>1301$, so the statement is True.`,
      `The new mix at $x=29$ and $y=44$ costs

$$8(29)+19(44)=232+836=1068$$

which matches the quoted total, so the statement is True.`,
    ],
  },

  "math-5-28": {
    overview: `Reimbursement is a per-diem plus a mileage rate. One of the three reports is inconsistent with the other two.

Let $x$ be the per-diem and $y$ the mileage rate. Working from Reports 1 and 2, which share a consistent pair,

$$5x+150y=323$$

$$3x+250y=245$$

Report 3 is treated as the erroneous row.`,
    bodies: [
      `Reports 1 and 2, treated as the consistent pair, give

$$5x+150y=323$$

$$3x+250y=245$$

Eliminating $x$ recovers $y=0.32$ and then $x=55$. The per-diem is $\\$55$ per day, so the statement is True.`,
      `The recovered mileage rate is $y=0.32$, not Finance's $\\$0.40$, so the statement is False.`,
      `Seven meal days at $x=55$ already cost $385$, before any miles. Report 3 lists only $\\$120$, which cannot cover those days, so the statement is True.`,
      `Report 1 billed $\\$323$ and Report 2 billed $\\$245$. The gap is $78$, which is not more than $\\$80$, so the statement is False.`,
      `Reports 1 and 2 together reimbursed

$$323+245=568$$

which is at least $\\$550$, so the statement is True.`,
    ],
  },

  "math-5-29": {
    overview: `Each widget type takes a fixed number of labour-hours. Week 1 is complete. Week 2's note says $58$ units with $8$ more B than A. Week 3's A count is missing.

Let $a$ be hours per Widget A and $b$ hours per Widget B. Week 1 and the reconstructed Week 2 counts give

$$35a+20b=445$$

$$25a+33b=505$$`,
    bodies: [
      `Week 2's note is $A+B=58$ and $B=A+8$, so $A=25$ and $B=33$. Together with Week 1,

$$35a+20b=445$$

$$25a+33b=505$$

the hours system recovers $a=7$. Widget A takes $7$ hours, so the statement is True.`,
      `The same two weeks recover $b=10$, not $12$. Widget B takes $10$ hours, so the statement is False.`,
      `Week 2 produced $58$ units with $8$ more B than A:

$$A+(A+8)=58$$

$$A=25,\\qquad B=33$$

so the statement is True.`,
      `Week 1 used $35(7)+20(10)=445$ hours. Raising only A's time by $20\\%$ gives $35(8.4)+200=494$, whereas $20\\%$ of the whole week would be $534$. The totals do not match, so the statement is False.`,
      `Week 3 logged $15$ of B and $290$ hours. With $a=7$ and $b=10$,

$$7A+10(15)=290$$

$$7A=140$$

$$A=20$$

so the statement is True.`,
    ],
  },

  "math-5-30": {
    overview: `X and Y sell at company-wide prices. Two of the three branch rows are consistent; the third is a data-entry error.

Let $x$ be Product X's price and $y$ Product Y's. North and South reconcile, so

$$85x+70y=4145$$

$$55x+95y=3875$$

East is the row that will be checked against this pair.`,
    bodies: [
      `North and South reconcile, so they are the working pair:

$$85x+70y=4145$$

$$55x+95y=3875$$

The consistent prices are $x=29$ and $y=24$. Product X is $\\$29$, so the statement is True.`,
      `The recovered Y price is $y=24$, not $\\$28$, so the statement is False.`,
      `East's mix at the recovered prices is

$$65(29)+50(24)=1885+1200=3085$$

East reported $\\$3{,}200$, which does not match, so the statement is False.`,
      `The same East rebuild is $\\$3{,}085$, so correcting the reported revenue to the derived prices gives that figure, and the statement is True.`,
      `North reported $\\$4{,}145$. South and East together reported $3875+3200=7075$. North does not exceed that combined figure, so the statement is False.`,
    ],
  },
};

const n = applyFile("21_30.json", patches);
console.log("patched", n);
