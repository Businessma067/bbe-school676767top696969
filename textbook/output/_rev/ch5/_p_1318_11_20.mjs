import { applyFile } from "./_apply_1318.mjs";

const patches = {
  "math-5-11": {
    overview: `Ana paid $\\$32$ for $4$ tacos and $3$ burritos. Ben ordered $2$ tacos and $5$ burritos and paid $\\$5$ more than Ana.

Let $x$ be the taco price and $y$ the burrito price. Ben's total is $32+5=37$, so the two receipts give

$$4x+3y=32$$

$$2x+5y=37$$`,
    bodies: [
      `Ana's receipt and Ben's $\\$5$ gap give

$$4x+3y=32$$

$$2x+5y=37$$

Double the second and subtract the first:

$$7y=42$$

$$y=6$$

Ben's five burritos alone cost $5(6)=30$. Ana's whole order was $\\$32$, and $30<32$, so the statement is False.`,
      `From $4x+3y=32$ and $2x+5y=37$, doubling Ben's row and subtracting Ana's isolates $y=6$. Then $4x+18=32$ gives $x=3.50$. The gap is

$$6-3.50=2.50$$

A burrito sits $\\$2.50$ above a taco, so the statement is True.`,
      `The recovered pair is $x=3.50$ and $y=6$. Dropping one burrito from Ana's order leaves

$$4(3.50)+2(6)=14+12=26$$

Since $26<28$, the statement is True.`,
      `Ben paid $\\$5$ more than Ana's $\\$32$:

$$32+5=37$$

Rebuilding his mix at $x=3.50$ and $y=6$ confirms $2(3.50)+5(6)=37$. Since $37$ does not exceed $40$, the statement is False.`,
      `A $6$-and-$6$ mix matches neither receipt, so recover $x=3.50$ and $y=6$ from $4x+3y=32$ and $2x+5y=37$, then cost the new mix:

$$6(3.50)+6(6)=21+36=57$$

so the statement is True.`,
    ],
  },

  "math-5-12": {
    overview: `Hardcovers are priced exactly $\\$5$ above paperbacks. The desk sold $400$ paperbacks and $220$ hardcovers for $\\$8{,}540$ combined. Staff count and loyalty share are unused.

Let $x$ be the paperback price and $y$ the hardcover price. The gap and the revenue give

$$y=x+5$$

$$400x+220y=8540$$`,
    bodies: [
      `The pricing rule and the combined revenue are

$$y=x+5$$

$$400x+220y=8540$$

Substitute:

$$400x+220(x+5)=8540$$

$$620x+1100=8540$$

$$620x=7440$$

$$x=12$$

A paperback at $\\$12$ fits the $\\$5$ gap, so the statement is True.`,
      `Substituting $y=x+5$ into $400x+220y=8540$ recovers $x=12$, so

$$y=12+5=17$$

Hardcovers are $\\$17$, which is not above $\\$18$, so the statement is False.`,
      `The recovered paperback price is $x=12$. Selling $100$ extra paperbacks, hardcovers unchanged, adds

$$100\\times 12=1200$$

so the statement is True.`,
      `From $y=x+5$ and the revenue row, $x=12$ and $y=17$. Three hardcovers and two paperbacks cost

$$3(17)+2(12)=51+24=75$$

That equals $\\$75$, so it is not less than $\\$75$, and the statement is False.`,
      `At the recovered hardcover price $y=17$, three hundred ten hardcovers alone would bring

$$310\\times 17=5270$$

That is far below the reported $\\$8{,}540$, so the statement is False.`,
    ],
  },

  "math-5-13": {
    overview: `The Standard plan's base fee and overage rate are not printed; they have to be read off March and April. Basic is $\\$15$ plus $\\$2$ per GB, and Premium is a flat $\\$40$.

Let $x$ be Standard's monthly base and $y$ the Standard overage rate per GB. The two Standard bills give

$$x+8y=62$$

$$x+3y=47$$`,
    bodies: [
      `Subtracting the two Standard bills isolates the overage rate:

$$(x+8y)-(x+3y)=62-47$$

$$5y=15$$

$$y=3$$

Then $x+9=47$ gives $x=38$. Basic's base is only $\\$15$, so Standard's base is higher, not lower, and the statement is False.`,
      `The $\\$15$ gap between March and April is $5$ GB of overage:

$$5y=15$$

$$y=3$$

The Standard overage rate is $\\$3$ per GB, so the statement is True.`,
      `Standard recovers as $x=38$ and $y=3$. Ten GB of overage would bill

$$38+10(3)=38+30=68$$

so the statement is True.`,
      `A Standard customer with $5$ GB of overage pays $38+5(3)=53$. Premium is a flat $\\$40$, and $53>40$, so switching to Premium saves money and the statement is True.`,
      `Basic at $8$ GB is $15+8(2)=31$. Standard's March bill for the same $8$ GB is $\\$62$. Since $31<62$, Basic is cheaper, so the statement is True.`,
    ],
  },

  "math-5-14": {
    overview: `Every charged total includes an $8\\%$ occupancy tax, so the pre-tax room revenue is the charged figure divided by $1.08$. Standard rooms and suites keep fixed pre-tax nightly rates.

Let $x$ be the Standard pre-tax rate and $y$ the Suite pre-tax rate. Weekend 1 charged $\\$2{,}419.20$ and Weekend 2 charged $\\$3{,}099.60$, so the pre-tax system is

$$10x+4y=\\frac{2419.20}{1.08}=2240$$

$$7x+9y=\\frac{3099.60}{1.08}=2870$$`,
    bodies: [
      `Weekend 1's charged total includes $8\\%$ tax. Stripping that tax leaves

$$\\frac{2419.20}{1.08}=2240$$

so the statement is True.`,
      `After dividing both charged totals by $1.08$,

$$10x+4y=2240$$

$$7x+9y=2870$$

the pair is $x=140$ and $y=210$. The gap is

$$210-140=70$$

not $\\$200$, so the statement is False.`,
      `Six Standard rooms pre-tax cost $6(140)=840$. Four Suites cost $4(210)=840$. The two bookings cost the same, so six Standards are not cheaper, and the statement is False.`,
      `A Suite's pre-tax rate is $y=210$. Adding the $8\\%$ tax:

$$210\\times 1.08=226.80$$

so the statement is True.`,
      `One extra Suite at the recovered pre-tax rate adds

$$210$$

to Weekend 2's pre-tax revenue, so the statement is True.`,
    ],
  },

  "math-5-15": {
    overview: `January and February are actual counts; March is only a forecast and is not used to recover today's unit costs.

Let $x$ be Component A's unit cost and $y$ Component B's. The two actual rows give

$$150x+90y=3150$$

$$130x+140y=3660$$`,
    bodies: [
      `The actual inventory equations are

$$150x+90y=3150$$

$$130x+140y=3660$$

Dividing by $30$ and $10$ and eliminating $y$ recovers $x=12$. Component A's unit cost is $\\$12$, so the statement is True.`,
      `The same January/February system recovers $y=15$, not $\\$18$. The forecast row is unused. The claim overstates B's cost, so the statement is False.`,
      `At the actual costs $x=12$ and $y=15$, March's $200$ A and $100$ B would be worth

$$200(12)+100(15)=2400+1500=3900$$

The forecast lists $\\$4{,}700$, which is higher, so the statement is True.`,
      `Valuing March's quantities at the actual costs gives $\\$3{,}900$, not the forecast $\\$4{,}700$, so the statement is False.`,
      `January recorded $\\$3{,}150$ and February recorded $\\$3{,}660$:

$$3150+3660=6810$$

so the statement is True.`,
    ],
  },

  "math-5-16": {
    overview: `Both workers completed $40$ regular hours. The contract requires overtime at $1.5$ times the regular wage; the payroll rows show what was actually paid.

Let $x$ be the regular hourly wage and $y$ the overtime rate actually paid. The two pay packets give

$$40x+6y=704$$

$$40x+2y=608$$`,
    bodies: [
      `Subtracting the two payroll rows cancels regular pay:

$$4y=96$$

$$y=24$$

Then $40x+48=608$ gives $x=14$. The contract would have paid $1.5(14)=21$ for overtime, and $24\\neq 21$, so the statement is False.`,
      `From $40x+6y=704$ and $40x+2y=608$, the regular wage is $x=14$. That is $\\$14$ per hour, so the statement is True.`,
      `The actual overtime rate is $y=24$ and the contract rate is $21$. Worker 2 had $2$ overtime hours, so the overpayment is

$$2(24-21)=6$$

so the statement is True.`,
      `A third worker at the rates actually used, $x=14$ and $y=24$, with $4$ overtime hours earns

$$40(14)+4(24)=560+96=656$$

so the statement is True.`,
      `Under the contract, overtime is $1.5(14)=21$. The same $40+4$ hours then pay

$$40(14)+4(21)=560+84=644$$

so the statement is True.`,
    ],
  },

  "math-5-17": {
    overview: `May's $\\$56.10$ includes a $10\\%$ late penalty on the whole bill, so the underlying water charge is $56.10/1.10$. June has no penalty. The billing office's $\\$18$ fee and $\\$1.85$ rate are a claim, not inputs.

Let $x$ be the fixed monthly charge and $y$ the rate per cubic metre. After peeling May's penalty,

$$x+18y=51$$

$$x+25y=65$$`,
    bodies: [
      `May's underlying charge is $56.10/1.10=51$. Subtracting the two clean bills:

$$7y=14$$

$$y=2$$

Then $x+36=51$ gives $x=15$. The office claimed $\\$18$, so the statement is False.`,
      `The $7\\,\\mathrm{m}^{3}$ gap between June and the peeled May bill is

$$7y=14$$

$$y=2$$

The rate is $\\$2.00$ per cubic metre, so the statement is True.`,
      `May's billed $\\$56.10$ already includes a $10\\%$ late penalty on the entire charge:

$$\\frac{56.10}{1.10}=51$$

so the statement is True.`,
      `From $x=15$ and $y=2$, a $40\\,\\mathrm{m}^{3}$ month bills

$$15+40(2)=15+80=95$$

not $\\$85$, so the statement is False.`,
      `Applying the same $10\\%$ penalty to June's $\\$65$ gives

$$65\\times 1.10=71.50$$

so the statement is True.`,
    ],
  },

  "math-5-18": {
    overview: `Each company charges its own base fare plus a constant per-kilometre rate. CityCab's $20\\,\\mathrm{km}$ ride cost $\\$12$ more than its $8\\,\\mathrm{km}$ ride. MetroX's $15\\,\\mathrm{km}$ ride cost $\\$15$ more than its $5\\,\\mathrm{km}$ ride.

Let $c$ and $r$ be CityCab's base and rate, and $m$ and $s$ MetroX's. The four observations give

$$c+8r=14$$

$$c+20r=26$$

$$m+5s=13.50$$

$$m+15s=28.50$$`,
    bodies: [
      `CityCab's $12\\,\\mathrm{km}$ gap between the two rides isolates $r=1$, so $c=6$. MetroX's $10\\,\\mathrm{km}$ gap isolates $s=1.50$, so $m=6$. A $10\\,\\mathrm{km}$ ride then costs

$$6+10(1)=16$$

on CityCab and $6+10(1.50)=21$ on MetroX. CityCab is cheaper, so the statement is True.`,
      `CityCab: $c+8r=14$ and $c+20r=26$ recover $c=6$. MetroX: $m+5s=13.50$ and $m+15s=28.50$ recover $m=6$. Both bases are $\\$6.00$, so the statement is True.`,
      `Both companies share the $\\$6$ base, but MetroX's rate $s=1.50$ exceeds CityCab's $r=1$. For any positive distance MetroX is strictly more expensive, so it is not cheaper under $4\\,\\mathrm{km}$, and the statement is False.`,
      `CityCab's recovered rule is $6+r$ with $r=1$. Thirty kilometres cost

$$6+30(1)=36$$

so the statement is True.`,
      `Setting $6+d=6+1.50d$ forces $d=0$. There is no $5\\,\\mathrm{km}$ distance at which the fares match, so the statement is False.`,
    ],
  },

  "math-5-19": {
    overview: `Each vendor quotes two bundles at its own pair of unit prices. Bramble needs $40$ of X and $30$ of Y next month.

Let $x_A,y_A$ be Vendor A's prices and $x_B,y_B$ Vendor B's. The four bundle totals give

$$20x_A+15y_A=450$$

$$25x_A+12y_A=441$$

$$20x_B+15y_B=460$$

$$25x_B+12y_B=467$$`,
    bodies: [
      `Vendor A's two bundles recover $x_A$ and $y_A$ from

$$20x_A+15y_A=450$$

$$25x_A+12y_A=441$$

which give $x_A=9$. Vendor B's two bundles recover $x_B=11$. Since $9<11$, Vendor A is cheaper on X, so the statement is True.`,
      `The same four bundle equations give $y_A=18$ and $y_B=16$. Since $16<18$, Vendor B is cheaper on Y, so the statement is True.`,
      `The upcoming mix is $40$ of X and $30$ of Y. At the recovered prices,

$$40(9)+30(18)=360+540=900$$

for Vendor A and $40(11)+30(16)=920$ for Vendor B. Vendor A is cheaper overall, so the statement is True.`,
      `Switching the $40$/$30$ order to Vendor B raises the total from $\\$900$ to $\\$920$, an increase of $\\$20$, not a reduction, so the statement is False.`,
      `Sixty units of Y only cost $60(18)=1080$ at Vendor A and $60(16)=960$ at Vendor B. Vendor B is cheaper, so the statement is True.`,
    ],
  },

  "math-5-20": {
    overview: `Alpha and Beta sell Product P and Service Q at the same market prices. Combined Q1 revenue is $\\$27{,}200$, and Beta earned $\\$1{,}000$ more than Alpha. Headcount growth is unused.

Let $p$ be the price of P and $q$ the price of Q. Alpha's revenue is $13100$ and Beta's is $14100$, so

$$150p+80q=13100$$

$$100p+130q=14100$$`,
    bodies: [
      `Beta earned $\\$1{,}000$ more than Alpha and the two revenues sum to $\\$27{,}200$, so Alpha has $13100$ and Beta $14100$:

$$150p+80q=13100$$

$$100p+130q=14100$$

The unique pair is $p=50$ and $q=70$, so the statement is True.`,
      `Beta earned $\\$1{,}000$ more than Alpha, so Beta's Q1 revenue is larger, and the statement is True.`,
      `Alpha's P revenue is $150(50)=7500$. A $10\\%$ rise in P's price, volumes unchanged, adds $750$, which is not $10\\%$ of Alpha's whole $13100$. The statement is False.`,
      `After that $10\\%$ P increase Alpha would have $13100+750=13850$. Beta's Q1 total is $14100$, and $13850<14100$, so the statement is False.`,
      `Beta's Q subscriptions bring $130(70)=9100$. Alpha's entire P line is $150(50)=7500$. Since $9100>7500$, the statement is True.`,
    ],
  },
};

const n = applyFile("11_20.json", patches);
console.log("patched", n);
