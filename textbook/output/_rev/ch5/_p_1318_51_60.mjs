import { applyFile } from "./_apply_1318.mjs";

const patches = {
  "math-5-51": {
    overview: `The annual fee is a percentage of AUM plus a flat retainer that is the same for every client. Client 2 has $\\$600{,}000$ of AUM and pays $\\$10{,}800$. Client 1 has $\\$150{,}000$ more AUM and pays $\\$2{,}400$ more.

Let $r$ be the fee rate and $y$ the retainer. The retainer cancels in the difference, so

$$150000r=2400$$

$$600000r+y=10800$$`,
    bodies: [
      `The AUM gap of $\\$150{,}000$ produces a $\\$2{,}400$ fee gap, and Client 2's bill is

$$150000r=2400$$

$$600000r+y=10800$$

Then $r=0.016$ and $y=1200$. An $\\$850{,}000$ client would pay $850000(0.016)+1200=14800$, which is

$$\\frac{14800}{850000}\\approx 0.01741$$

less than $1.75\\%$ of AUM, so the statement is True.`,
      `The retainer is $1200$ out of Client 2's $10800$:

$$\\frac{1200}{10800}\\approx 0.111$$

which is more than $10\\%$, so the statement is True.`,
      `Client 1's AUM is $750000$ and the actual fee is $13200$. At $1.4\\%$ with a doubled retainer the fee would be $750000(0.014)+2400=12900$, a decrease, so the statement is True.`,
      `Client 1's effective rate is $13200/750000=1.76\\%$ and Client 2's is $10800/600000=1.80\\%$. The gap is $0.04$ percentage points, not more than $0.05$, so the statement is False.`,
      `Triple Client 2's AUM is $1{,}800{,}000$, which would fee $28800+1200=30000$. Triple Client 2's fee is $32400$, and $30000$ is not more than $32400$, so the statement is False.`,
    ],
  },

  "math-5-52": {
    overview: `Each suspension has a fixed concentration in mg/mL. Batch 3's $0.32$ L is $320$ mL.

Let $a$ be Suspension A's mg per mL and $b$ Suspension B's. Batches 1 and 2 give

$$500a+300b=8880$$

$$200a+700b=12600$$`,
    bodies: [
      `The two complete batches are

$$500a+300b=8880$$

$$200a+700b=12600$$

Eliminating $b$ recovers $a=8.4$ and $b=15.6$. Then $15.6/8.4-1\\approx 0.857$, more than $85\\%$ higher, so the statement is True.`,
      `Batch 3 is predicted at $320(8.4)+450(15.6)=9708$ mg against $9700$ mg recorded. The $8$ mg gap is $8/9700\\approx 0.082\\%$ of the recorded value, not more than $1\\%$, so the statement is False.`,
      `Doubling Batch 1's B volume gives $500(8.4)+600(15.6)=13560$ mg, which exceeds $13{,}500$ mg, so the statement is True.`,
      `Pooling Batches 1 and 2 yields $8880+12600=21480$ mg. Twice Batch 2 is $25200$ mg, and $21480<25200$, so the statement is True.`,
      `Batch 2 used $700/900$ of its volume as B. Batch 3 used $450/770$. Since $0.778>0.584$, Batch 2 used the higher B share, so the statement is True.`,
    ],
  },

  "math-5-53": {
    overview: `Every order buys $12\\%$ extra studs and $8\\%$ extra drywall beyond the usable counts. Invoices charge the as-ordered quantities.

Let $x$ be the stud price and $y$ the drywall-sheet price. Job 1 orders $224$ studs and $162$ sheets; Job 2 orders $392$ studs and $189$ sheets:

$$224x+162y=7164$$

$$392x+189y=8946$$`,
    bodies: [
      `Job 1 orders $224$ studs and $162$ sheets; Job 2 orders $392$ studs and $189$ sheets:

$$224x+162y=7164$$

$$392x+189y=8946$$

The pair recovers $x=4.50$ and $y=38$. Invoice 1's waste is $24$ studs and $12$ sheets, costing $24(4.50)+12(38)=564$, which does not exceed $\\$700$, so the statement is False.`,
      `Cutting drywall waste from $8\\%$ to $5\\%$ on Job 2 would order $183.75$ sheets instead of $189$. The saving is $5.25(38)=199.50$, more than $\\$150$, so the statement is True.`,
      `Job 2's usable material costs $350(4.50)+175(38)=8225$. Then $8225/8946\\approx 0.919$, more than $90\\%$ of the invoice, so the statement is True.`,
      `The recovered prices give $38/4.50\\approx 8.44$, more than $8$ times, so the statement is True.`,
      `Invoice 1's waste is $564$ on $6600$ of usable cost, about $8.55\\%$. Invoice 2's waste is $721$ on $8225$, about $8.77\\%$. Job 1 added the smaller percentage, so the statement is True.`,
    ],
  },

  "math-5-54": {
    overview: `The conversion is a linear calibration, true value equal to a scale factor times the reading plus an offset. Points 1 and 2 are the calibration pair; Point 3 is a check.

Let $s$ be the scale factor and $b$ the offset. The two calibration points give

$$12.4s+b=56.90$$

$$31.7s+b=124.45$$`,
    bodies: [
      `The two calibration points are

$$12.4s+b=56.90$$

$$31.7s+b=124.45$$

Subtracting isolates $s=3.50$ and then $b=13.50$. The scale exceeds $3.4$ by $0.10/3.4\\approx 2.94\\%$, more than $2.5\\%$, so the statement is True.`,
      `Doubling the offset to $27$ at a reading of $20$ predicts $3.50(20)+27=97$, which exceeds $95$, so the statement is True.`,
      `At a reading of $45$ the curve predicts $3.50(45)+13.50=171.00$ against a recorded $172.20$. The prediction sits below the recorded value, not above it, so the statement is False.`,
      `Point 2 over Point 1 is $124.45/56.90-1\\approx 1.187$, more than a $100\\%$ increase, so the statement is True.`,
      `A reading of $8.0$ predicts $3.50(8)+13.50=41.50$. Half of Point 1 is $28.45$, and $41.50$ is not less than that, so the statement is False.`,
    ],
  },

  "math-5-55": {
    overview: `Coffee and cocoa keep fixed prices per kilogram. Shipment 1's $520$ kg splits $3:2$ and Shipment 2's $800$ kg splits $5:3$.

Let $x$ be coffee's price per kg and $y$ cocoa's. The splits give $312$ kg coffee with $208$ kg cocoa, and $500$ kg coffee with $300$ kg cocoa:

$$312x+208y=2943.20$$

$$500x+300y=4555$$`,
    bodies: [
      `Shipment 1 is $312$ kg coffee with $208$ kg cocoa; Shipment 2 is $500$ kg coffee with $300$ kg cocoa:

$$312x+208y=2943.20$$

$$500x+300y=4555$$

The pair recovers $x=6.20$ and $y=4.85$. Then $6.20/4.85-1\\approx 0.278$, more than $25\\%$ more per kilogram, so the statement is True.`,
      `Shipment 1's coffee costs $312(6.20)=1934.40$ out of $2943.20$, about $65.7\\%$, more than $65\\%$, so the statement is True.`,
      `A $1:1$ split of Shipment 2 would be $400$ kg of each and would cost $400(6.20+4.85)=4420$, which is lower than $\\$4{,}555$, so the statement is True.`,
      `Cocoa across both shipments is $508(4.85)=2463.80$. Coffee across both is $812(6.20)=5034.40$. Cocoa does not exceed coffee, so the statement is False.`,
      `The gap is $6.20-4.85=1.35$, and $1.35/6.20\\approx 0.218$, less than $30\\%$ of coffee's price, so the statement is True.`,
    ],
  },

  "math-5-56": {
    overview: `Each vehicle type burns a fixed number of litres per $100$ km. Route 3 converted $155.3$ mi to $250$ km.

Let $T$ be the truck rate and $V$ the van rate, in L/$100$ km. Routes 1 and 2 give

$$8.5T+6.2V=383.6$$

$$5T+9V=322$$`,
    bodies: [
      `Fuel is litres per $100$ km. Routes 1 and 2 give

$$8.5T+6.2V=383.6$$

$$5T+9V=322$$

The pair recovers $T=32$ and $V=18$. Then $32/18-1\\approx 0.778$, more than $75\\%$ higher, so the statement is True.`,
      `Route 3 is predicted at $2.5(32)+4(18)=152$ L against $155$ L recorded. The $3$ L gap is $3/155\\approx 1.94\\%$ below the recorded value, not more than $2\\%$, so the statement is False.`,
      `Replacing Route 1's van distance with $900$ km would burn $8.5(32)+9(18)=434$ L, which exceeds $430$ L, so the statement is True.`,
      `Route 2 used $322$ L over $1400$ km, an average of $23$ L/$100$ km. That sits $5$ from the van's $18$ and $9$ from the truck's $32$, so it is closer to the van, and the statement is True.`,
      `If each type alone covered $1470$ km, the truck would burn $470.4$ L and the van $264.6$ L, summing to $735$ L. Route 1 used only $383.6$ L, so the statement is True.`,
    ],
  },

  "math-5-57": {
    overview: `The $\\$45{,}000$ fund splits between a bond portfolio and an equity portfolio, each with a fixed rate.

Let $x$ be the bond rate and $y$ the equity rate. The current and proposed allocations give

$$27000x+18000y=2646$$

$$18000x+27000y=2754$$`,
    bodies: [
      `The current and proposed allocations give

$$27000x+18000y=2646$$

$$18000x+27000y=2754$$

The pair recovers $x=0.054$ and $y=0.066$. The equity premium over the bond rate is $1.2$ percentage points, and $1.2/5.4\\approx 0.222$, more than $20\\%$ of the bond rate, so the statement is True.`,
      `The current return on $\\$45{,}000$ is

$$\\frac{2646}{45000}=0.0588$$

which is less than $6\\%$, so the statement is True.`,
      `All equities would return $45000(0.066)=2970$. The two described allocations together return $2646+2754=5400$, and $2970$ does not exceed $5400$, so the statement is False.`,
      `A $\\$22{,}500$ split of each earns $22500(0.054+0.066)=2700$. The average of $2646$ and $2754$ is also $2700$, so the statement is True.`,
      `Then $5.4/6.6\\approx 0.818$, more than $80\\%$ of the equity rate, so the statement is True.`,
    ],
  },

  "math-5-58": {
    overview: `Every policy is a fixed administrative fee plus a rate per $\\$1{,}000$ of coverage. The renters coverage amount is missing.

Let $f$ be the fee and $r$ the rate per $\\$1{,}000$. Auto is $85$ units of coverage and Home is $210$:

$$f+85r=612.50$$

$$f+210r=1197.50$$`,
    bodies: [
      `Auto is $85$ units of coverage and Home is $210$:

$$f+85r=612.50$$

$$f+210r=1197.50$$

Subtracting isolates $r=4.68$ and then $f=214.70$. The renters premium $331.70$ then reconstructs $25$ units of coverage, that is $\\$25{,}000$, which is less than $\\$30{,}000$, so the statement is True.`,
      `The fee is $214.70$ out of Auto's $612.50$, about $35\\%$, not more than $60\\%$, so the statement is False.`,
      `A $10\\%$ rate increase on Home's $210$ units adds $0.10(210)(4.68)=98.28$, which is more than $\\$75$, so the statement is True.`,
      `Home's premium per $\\$1{,}000$ is $1197.50/210\\approx 5.70$ and Auto's is $612.50/85\\approx 7.21$. Home is not twice Auto, so the statement is False.`,
      `A single combined policy would pay the fee once: $214.70+295(4.68)=1595.30$, which is less than $612.50+1197.50=1810$, so the statement is True.`,
    ],
  },

  "math-5-59": {
    overview: `Each species changes by a fixed net count each year. Species A grows at twice Species B's annual rate. Year 2 populations are $610$ and $730$; four years later the combined total is $1772$.

Let $r$ be Species B's annual change. Then A's annual change is $2r$, and the four-year combined growth gives

$$4(2r+r)=1772-1340$$

$$12r=432$$`,
    bodies: [
      `Species A grows at twice Species B's annual rate $r$. Four years of combined growth give

$$4(2r+r)=1772-1340$$

$$12r=432$$

so $r=36$ and $2r=72$. By Year 6, A is $610+4(72)=898$ and B is $730+4(36)=874$. The gap is $24$, more than $20$, so the statement is True.`,
      `If B also grew at $72$ per year, the combined Year 6 total would rise by an extra $4(36)=144$, more than $140$, so the statement is True.`,
      `From Year 2 to Year 6, A grows by $288$ and B by $144$. The ratio is $2:1$, not greater than $2.5:1$, so the statement is False.`,
      `Setting $610+72t=730+36t$ gives $t=10/3$ years after Year 2, which lies between Year 2 and Year 6, so the statement is True.`,
      `Equality arrives at Year $2+10/3\\approx 5.33$, which is not before Year 5, so the statement is False.`,
    ],
  },

  "math-5-60": {
    overview: `Each plant produces a fixed MWh per hour. Day 3 converted $1{,}020$ min to $17$ hours.

Let $x$ be Plant A's MWh per hour and $y$ Plant B's. Days 1 and 2 give

$$14x+20y=3990$$

$$22x+9y=4072$$`,
    bodies: [
      `Days 1 and 2 give

$$14x+20y=3990$$

$$22x+9y=4072$$

The pair recovers $x=145$ and $y=98$. Then $145/98-1\\approx 0.480$, more than $45\\%$ higher, so the statement is True.`,
      `Day 3 is predicted at $17(145)+11(98)=3543$ MWh against $3553$ MWh recorded. The $10$ MWh gap is $10/3553\\approx 0.281\\%$ of the recorded value, less than $0.3\\%$, so the statement is True.`,
      `Swapping the combined hours would produce $29(145)+36(98)=7733$ MWh. Days 1 and 2 together actually produced $8062$ MWh, and $7733$ does not exceed that, so the statement is False.`,
      `The combined rate is $145+98=243$. Then $2.4(98)=235.2$, and $243>235.2$, so the statement is True.`,
      `Using the recorded Day 3 figure, $3990+4072+3553=11615$, which exceeds $11{,}600$ MWh, so the statement is True.`,
    ],
  },
};

const n = applyFile("51_60.json", patches);
console.log("patched", n);
