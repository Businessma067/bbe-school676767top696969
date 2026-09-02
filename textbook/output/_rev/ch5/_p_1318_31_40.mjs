import { applyFile } from "./_apply_1318.mjs";

const patches = {
  "math-5-31": {
    overview: `Type A bolts and Type B hinges keep fixed per-case prices.

Let $x$ be Type A's case price and $y$ Type B's. The two invoices give

$$9x+13y=527.45$$

$$7x+19y=657.35$$`,
    bodies: [
      `Type A and Type B keep fixed case prices $x$ and $y$:

$$9x+13y=527.45$$

$$7x+19y=657.35$$

Eliminating $y$ recovers $x=18.45$. Rounding that case price up to the next whole dollar lands on $19$, so the statement is True.`,
      `The same system recovers $y=27.80$. The gap is

$$27.80-18.45=9.35$$

which sits between $9$ and $10$, so the statement is True.`,
      `Invoice 2 billed $\\$657.35$ across $7+19=26$ cases:

$$\\frac{657.35}{26}=25.282\\ldots$$

which clears $\\$24$, so the statement is True.`,
      `Swapping Invoice 1's counts would charge $13(18.45)+9(27.80)=490.05$, not $527.45$. The totals change, so the statement is False.`,
      `The two invoices together order $16$ of A and $32$ of B, and linearity says that combined order costs exactly $527.45+657.35$. There is no bulk premium in the model, so the statement is False.`,
    ],
  },

  "math-5-32": {
    overview: `Swift Cargo charges a dispatch fee plus a constant rate per mile. The competitor charges $\\$1.35$ per mile with no fee.

Let $f$ be Swift's dispatch fee and $r$ the per-mile rate. The two routes give

$$f+170r=460$$

$$f+305r=709.75$$`,
    bodies: [
      `Swift Cargo's two routes are a fee plus a per-mile rate:

$$f+170r=460$$

$$f+305r=709.75$$

The $135$-mile gap isolates $r=1.85$, and then $f+170(1.85)=460$ gives $f=145.50$. That fee sits halfway between $145$ and $146$, so the statement is True.`,
      `The recovered rate is $r=1.85$. The distance to $1.50$ is $0.35$ and the distance to $2.00$ is $0.15$, so $1.85$ is closer to $2.00$, and the statement is False.`,
      `A $250$-mile haul at $f=145.50$ and $r=1.85$ costs

$$145.50+250(1.85)=145.50+462.50=608$$

exactly $\\$608$, not five cents under, so the statement is False.`,
      `The competitor's $250$-mile price is $250(1.35)=337.50$. Swift's is $\\$608$, and the saving is

$$608-337.50=270.50$$

which is north of $\\$270$, so the statement is True.`,
      `Setting $145.50+1.85m=1.35m$ forces $145.50=-0.50m$, so $m=-291$. The lines meet at a negative mileage, so the statement is True.`,
    ],
  },

  "math-5-33": {
    overview: `Specialty drinks and pastries keep fixed prices. The printed calorie counts are unused.

Let $d$ be the drink price and $p$ the pastry price. The two till totals give

$$7d+9p=78.65$$

$$11d+4p=85.05$$`,
    bodies: [
      `Drinks and pastries keep fixed prices $d$ and $p$. The two till totals give

$$7d+9p=78.65$$

$$11d+4p=85.05$$

Eliminating $p$ recovers $d=6.35$. Tripling that price is

$$3(6.35)=19.05$$

which does not clear $\\$20$, so the statement is False.`,
      `The recovered pastry price is $p=3.80$. Four pastries cost $15.20$, while one drink and one pastry cost $6.35+3.80=10.15$. Since $15.20>10.15$, the statement is True.`,
      `Calories are a separate printed total. Without the item quantities they do not determine $d$ and $p$, so the statement is False.`,
      `Receipt 1 billed $\\$78.65$ across $7+9=16$ items:

$$\\frac{78.65}{16}=4.915625$$

which creeps past $\\$4.90$, so the statement is True.`,
      `A daily $2$-drink $2$-pastry order costs $2(6.35)+2(3.80)=20.30$. Over seven days that is $142.10$, and

$$150-142.10=7.90$$

which is less than $\\$8$, so the statement is True.`,
    ],
  },

  "math-5-34": {
    overview: `Croissants and baguettes are sold by the dozen at fixed wholesale prices.

Let $c$ be the croissant price per dozen and $b$ the baguette price per dozen. The two confirmation emails give

$$14c+11b=297.30$$

$$6c+23b=299.30$$`,
    bodies: [
      `Croissants and baguettes are priced by the dozen. The confirmation emails give

$$14c+11b=297.30$$

$$6c+23b=299.30$$

Eliminating $b$ recovers $c=13.85$. Four dozen croissants cost

$$4(13.85)=55.40$$

which blows past $\\$55$, so the statement is True.`,
      `The recovered baguette price is $b=9.40$. The per-dozen gap is

$$13.85-9.40=4.45$$

which is closer to $4$ than to $5$, so the statement is True.`,
      `Ten dozen of each would bill $10(13.85)+10(9.40)=232.50$. Croissants' share is

$$\\frac{138.50}{232.50}\\approx 0.5957$$

which is not more than three-fifths, so the statement is False.`,
      `Email 1 averages $297.30/25=11.892$ per dozen and Email 2 averages $299.30/29\\approx 10.321$. The gap is about $1.57$, which does not clear two dollars, so the statement is False.`,
      `Raising baguettes by $\\$3$ in Email 2's mix leaves croissants at $13.85$ and baguettes at $12.40$:

$$6(13.85)+23(12.40)=83.10+285.20=368.30$$

The cents digit is $30$, so the statement is True.`,
    ],
  },

  "math-5-35": {
    overview: `Each product carries a fixed profit margin per unit.

Let $f$ be the Fabric Roll margin and $y$ the Yarn Spool margin. The two quarters give

$$240f+175y=10029$$

$$310f+90y=10260.50$$`,
    bodies: [
      `Each product carries a fixed margin. The two quarters give

$$240f+175y=10029$$

$$310f+90y=10260.50$$

Eliminating $y$ recovers $f=27.35$. That margin clears $\\$27$ but not $\\$27.50$, so the statement is True.`,
      `The recovered spool margin is $y=19.80$. Doubling it gives $39.60$, which does not clear $\\$40$, so the statement is False.`,
      `Two hundred rolls and one hundred fifty spools at the recovered margins profit

$$200(27.35)+150(19.80)=5470+2970=8440$$

which clears $\\$8{,}400$ by $\\$40$, so the statement is True.`,
      `Q2 minus Q1 is $10260.50-10029=231.50$. Dropping one hundred leaves $131.50$, still a three-digit number, so the statement is True.`,
      `Five hundred rolls and no spools profit

$$500(27.35)=13675$$

exactly $\\$13{,}675$, so the statement is True.`,
    ],
  },

  "math-5-36": {
    overview: `Nitrogen and Oxygen cylinders keep fixed unit prices. Invoice 2 is a $60\\%$ scale of Invoice 1, so it restates the same line rather than adding a second independent observation.

Let $n$ be the Nitrogen price and $o$ the Oxygen price. Invoice 1 and Invoice 3 give the independent pair

$$15n+20o=699$$

$$13n+5o=326.45$$`,
    bodies: [
      `Invoice 2's counts and total are $0.6$ times Invoice 1's:

$$0.6(15)=9$$

$$0.6(20)=12$$

$$0.6(699)=419.40$$

That row is a scaled restatement, so the statement is True.`,
      `Invoice 1 with Invoice 3 recovers $n=16.40$. The distance to $\\$16$ is $0.40$ and the distance to $\\$17$ is $0.60$, so $16.40$ is closer to $16$, and the statement is False.`,
      `Four Oxygen cylinders cost $4(22.65)=90.60$. Six Nitrogen cylinders cost $6(16.40)=98.40$. Since $90.60<98.40$, the statement is True.`,
      `Doubling Invoice 3's charged total gives $2(326.45)=652.90$, which is not above $\\$655$, so the statement is False.`,
      `Invoices 1 and 3 together cover $28$ Nitrogen and $25$ Oxygen cylinders for $699+326.45=1025.45$. The blended per-cylinder figure is

$$\\frac{1025.45}{53}\\approx 19.35$$

which fails to reach $\\$20$, so the statement is True.`,
    ],
  },

  "math-5-37": {
    overview: `Each technician completes a fixed fraction of one job per hour.

Let $x$ be Alvarez's job-fraction per hour and $y$ Bianchi's. Monday and Tuesday give

$$4x+7y=0.655$$

$$9x+3y=0.900$$`,
    bodies: [
      `Each technician completes a fixed fraction of one job per hour. Monday and Tuesday give

$$4x+7y=0.655$$

$$9x+3y=0.900$$

The pair recovers $x=0.085$. Alvarez working alone would take

$$\\frac{1}{0.085}\\approx 11.76$$

hours, which rounds to $12$, not down to $11$, so the statement is False.`,
      `Bianchi's rate is $y=0.045$, so one solo job takes $1/0.045\\approx 22.22$ hours. Alvarez finishing two jobs takes $2/0.085\\approx 23.53$ hours. Bianchi's one job is shorter, so the statement is False.`,
      `Their combined hourly output is

$$0.085+0.045=0.130=\\frac{13}{100}$$

so the statement is True.`,
      `Tuesday Bianchi completed $3(0.045)=0.135$ of the job, out of $0.900$ finished, which is $0.15$. That sits closer to $1/7\\approx 0.143$ than to $1/8=0.125$, so the statement is True.`,
      `Across both days they logged $23$ hours and finished $0.655+0.900=1.555$ jobs. The average is

$$\\frac{1.555}{23}\\approx 0.0676$$

which does not quite clear $7\\%$, so the statement is True.`,
    ],
  },

  "math-5-38": {
    overview: `T-shirts and hoodies earn fixed profit per unit. Season 3's T-shirt count is missing.

Let $T$ be the T-shirt margin and $H$ the hoodie margin. Seasons 1 and 2 give

$$430T+260H=9793.50$$

$$275T+410H=10747.75$$`,
    bodies: [
      `T-shirt and hoodie margins $T$ and $H$ are fixed. Seasons 1 and 2 give

$$430T+260H=9793.50$$

$$275T+410H=10747.75$$

Eliminating $H$ recovers $T=11.65$. That figure sits closer to $12$ than to $11$, so the statement is False.`,
      `The same pair recovers $H=18.40$, which sits closer to $18$ than to $19$, so the statement is True.`,
      `Season 3 is $T_{3}(11.65)+310(18.40)=8558.25$. Then $11.65T_{3}=2854.25$, so $T_{3}=245$, which is not a multiple of ten, and the statement is False.`,
      `Season 2 outearned Season 1 by $10747.75-9793.50=954.25$. Fifty-two hoodies margin $52(18.40)=956.80$, and $954.25$ fails to cover that, so the statement is True.`,
      `Replacing Season 3's $245$ T-shirts with $260$ would profit

$$260(11.65)+310(18.40)=3029+5704=8733$$

which crosses $\\$8{,}700$ by $33$, less than $\\$40$, so the statement is True.`,
    ],
  },

  "math-5-39": {
    overview: `Every shipment is a flat handling fee plus a constant rate per kilogram. Imperial weights convert at $1\\,\\mathrm{kg}\\approx 2.2\\,\\mathrm{lb}$.

Let $f$ be the handling fee and $r$ the per-kilogram rate. Shipment 2 is $572/2.2=260$ kg, so the two complete bills give

$$f+185r=677.35$$

$$f+260r=913.60$$`,
    bodies: [
      `Shipment 2 converts as $572/2.2=260$ kg. The two complete bills are

$$f+185r=677.35$$

$$f+260r=913.60$$

Subtracting isolates $r=3.15$ and then $f=94.60$. Knocking $\\$5.40$ off that fee lands on $89.20$, so the statement is True.`,
      `The recovered rate is $r=3.15$. Tripling it gives $9.45$, just shy of $\\$9.50$, so the statement is True.`,
      `Shipment 3 is $99/2.2=45$ kg. The model predicts

$$94.60+45(3.15)=94.60+141.75=236.35$$

against a billed $\\$239.80$. The gap is $3.45$, within four dollars but not exact, so the statement is True.`,
      `Ninety-nine pounds convert to $99/2.2=45$ kg, and $45$ is not divisible by $7$, so the statement is False.`,
      `At $400$ kg the model charges

$$94.60+400(3.15)=94.60+1260=1354.60$$

which creeps past $\\$1{,}350$, so the statement is True.`,
    ],
  },

  "math-5-40": {
    overview: `The contract is a per-compute-unit price plus a per-storage-unit price. Client B's usage is exactly double Client A's in both categories, so a consistent tariff would also double the bill.

Let $c$ be the compute price and $s$ the storage price. The two invoices are

$$11c+7s=483.70$$

$$22c+14s=952.10$$

The second left-hand side is double the first, but $952.10\\neq 2(483.70)=967.40$, so no pair $(c,s)$ satisfies both invoices.`,
    bodies: [
      `Client B's usage is exactly double Client A's, so a consistent tariff would double the bill:

$$2(483.70)=967.40$$

Client B was billed $952.10$. The overshoot is $15.30$, which is $15.30/952.10\\approx 1.61\\%$ of the real total, so the statement is True.`,
      `A consistent scheme would require Client A's bill to be exactly half of Client B's $952.10$, namely $476.05$. That is the working condition, so the statement is True.`,
      `The $\\$15.30$ discrepancy on a $952.10$ bill is about $1.61\\%$. Then $1/60\\approx 1.67\\%$ and $1/50=2\\%$, so the error sits nearer to $1$-in-$60$, and the statement is True.`,
      `The hypothetical rates $14.20$ and $31.75$ would price Client A at

$$11(14.20)+7(31.75)=156.20+222.25=378.45$$

which is above $\\$375$, not just shy of it, so the statement is False.`,
      `The doubling hypothesis misses Client B by $15.30$. A $50\\%$-heavier surcharge would predict $483.70\\times 1.5=725.55$, which misses by $226.55$. Doubling is closer, so the statement is True.`,
    ],
  },
};

const n = applyFile("31_40.json", patches);
console.log("patched", n);
