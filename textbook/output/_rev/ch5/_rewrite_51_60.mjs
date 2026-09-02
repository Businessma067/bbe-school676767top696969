import fs from "fs";

const path = new URL("./51_60.json", import.meta.url);
const data = JSON.parse(fs.readFileSync(path, "utf8"));
const orig = JSON.parse(JSON.stringify(data));

const overviews = {
  "math-5-51": `The retainer is identical on every Halcyon bill, so the extra $2400$ that Client $1$ pays is only extra AUM speaking. Let $x$ be the fee rate as a decimal and $y$ the shared retainer in dollars.

Client $2$ holds $600000$ and is charged $10800$:

$$
600000x + y = 10800
$$

Client $1$ holds $150000$ more and pays $2400$ more. The retainer cancels in that comparison:

$$
150000x = 2400
$$

$$
x = \\frac{2400}{150000} = 0.016
$$

so $1.6\\%$ of AUM. Put the rate back into Client $2$'s bill:

$$
600000(0.016) + y = 10800
$$

$$
9600 + y = 10800
$$

$$
y = 1200
$$

Client $1$ then holds $750000$ and is charged

$$
0.016(750000) + 1200 = 12000 + 1200 = 13200
$$

which is exactly $2400$ above Client $2$'s $10800$, matching the given gap.`,

  "math-5-52": `Batches $1$ and $2$ are already in millilitres, so they pin the two concentrations. Batch $3$ logged Suspension A in litres and is only an audit after the solve. Let $x$ be mg/mL in Suspension A and $y$ the same in Suspension B.

Batch $1$ mixed $500$ mL of A with $300$ mL of B for $8880$ mg:

$$
500x + 300y = 8880
$$

Batch $2$ mixed $200$ mL of A with $700$ mL of B for $12600$ mg:

$$
200x + 700y = 12600
$$

Divide both by $100$:

$$
5x + 3y = 88.8
$$

$$
2x + 7y = 126
$$

Clear $y$ by multiplying the first by $7$ and the second by $3$:

$$
35x + 21y = 621.6
$$

$$
6x + 21y = 378
$$

Subtract:

$$
29x = 243.6
$$

$$
x = \\frac{243.6}{29} = 8.4
$$

From $2x + 7y = 126$:

$$
16.8 + 7y = 126
$$

$$
7y = 109.2
$$

$$
y = 15.6
$$

Batch $3$ used $0.32$ L of A, which is $320$ mL, plus $450$ mL of B:

$$
320(8.4) + 450(15.6) = 2688 + 7020 = 9708
$$

against $9700$ mg recorded, an $8$ mg gap.`,

  "math-5-53": `Ridgeline invoices the waste-padded counts, not the usable ones, so convert first: $12\\%$ extra studs and $8\\%$ extra drywall. Let $x$ be the price of one stud and $y$ the price of one drywall sheet.

Job $1$ needed $200$ usable studs and $150$ usable sheets, so the invoice actually bought $200(1.12) = 224$ studs and $150(1.08) = 162$ sheets for $7164$:

$$
224x + 162y = 7164
$$

Job $2$ needed $350$ usable studs and $175$ usable sheets, so $350(1.12) = 392$ studs and $175(1.08) = 189$ sheets for $8946$:

$$
392x + 189y = 8946
$$

Multiply the first equation by $1.75$ so the stud counts match:

$$
392x + 283.5y = 12537
$$

Subtract Job $2$:

$$
94.5y = 3591
$$

$$
y = \\frac{3591}{94.5} = 38
$$

Back into Job $1$:

$$
224x + 162(38) = 7164
$$

$$
224x + 6156 = 7164
$$

$$
x = \\frac{1008}{224} = 4.50
$$

A stud at $4.50$ and a sheet at $38$ rebuild Job $1$ as $224(4.50) + 162(38) = 1008 + 6156 = 7164$, and Job $2$ as $392(4.50) + 189(38) = 1764 + 7182 = 8946$.

Usable cost, without waste, is $200(4.50) + 150(38) = 6600$ on Job $1$ and $350(4.50) + 175(38) = 8225$ on Job $2$. Waste cost is therefore $7164 - 6600 = 564$ on Invoice $1$ and $8946 - 8225 = 721$ on Invoice $2$.`,

  "math-5-54": `The offset is shared by both calibration points, so it disappears the moment those two rows are subtracted. Point $3$ is only a verification. Let $x$ be the scale factor and $y$ the offset, with true value $V = xR + y$.

Point $1$ read $12.4$ against a certified $56.90$:

$$
12.4x + y = 56.90
$$

Point $2$ read $31.7$ against $124.45$:

$$
31.7x + y = 124.45
$$

Subtract:

$$
19.3x = 67.55
$$

$$
x = \\frac{67.55}{19.3} = 3.50
$$

From Point $1$:

$$
12.4(3.50) + y = 56.90
$$

$$
43.40 + y = 56.90
$$

$$
y = 13.50
$$

The curve is $V = 3.50R + 13.50$. At the verification reading $45.0$:

$$
45.0(3.50) + 13.50 = 157.50 + 13.50 = 171.00
$$

against a recorded reference of $172.20$, a $1.20$ shortfall. Point $1$ itself rebuilds as $12.4(3.50) + 13.50 = 56.90$.`,

  "math-5-55": `Each shipment's mix is a ratio of a known total weight, so split kilograms before any price equation is written. Let $x$ be the price per kg of Coffee and $y$ the price per kg of Cocoa.

Shipment $1$ is $520$ kg split $3:2$:

$$
\\frac{3}{5}(520) = 312, \\qquad \\frac{2}{5}(520) = 208
$$

$$
312x + 208y = 2943.2
$$

Shipment $2$ is $800$ kg split $5:3$:

$$
\\frac{5}{8}(800) = 500, \\qquad \\frac{3}{8}(800) = 300
$$

$$
500x + 300y = 4555
$$

Divide the first by $8$ and the second by $100$:

$$
39x + 26y = 367.9
$$

$$
5x + 3y = 45.55
$$

From the second, $x = 9.11 - 0.6y$. Substitute:

$$
39(9.11 - 0.6y) + 26y = 367.9
$$

$$
355.29 - 23.4y + 26y = 367.9
$$

$$
355.29 + 2.6y = 367.9
$$

$$
2.6y = 12.61
$$

$$
y = \\frac{12.61}{2.6} = 4.85
$$

$$
x = 9.11 - 0.6(4.85) = 6.20
$$

Coffee at $6.20$ and Cocoa at $4.85$ rebuild Shipment $1$ as $312(6.20) + 208(4.85) = 1934.40 + 1008.80 = 2943.20$, and Shipment $2$ as $500(6.20) + 300(4.85) = 3100 + 1455 = 4555$.`,

  "math-5-56": `Fuel is quoted in litres per $100$ km, so rewrite every distance in hundreds of kilometres before the litres can talk. Route $3$'s Truck log is in miles and waits until the audit. Let $x$ be the Truck rate and $y$ the Van rate.

Route $1$ ran $850$ km of Truck and $620$ km of Van for $383.6$ L:

$$
8.5x + 6.2y = 383.6
$$

Route $2$ ran $500$ km of Truck and $900$ km of Van for $322$ L:

$$
5x + 9y = 322
$$

Multiply the first by $9$ and the second by $6.2$ so both carry $55.8y$:

$$
76.5x + 55.8y = 3452.4
$$

$$
31x + 55.8y = 1996.4
$$

Subtract:

$$
45.5x = 1456
$$

$$
x = \\frac{1456}{45.5} = 32
$$

From Route $2$:

$$
5(32) + 9y = 322
$$

$$
160 + 9y = 322
$$

$$
y = 18
$$

Route $3$ converts $155.3$ mi to about $250$ km of Truck, plus $400$ km of Van, hence $2.5$ and $4$ hundreds:

$$
2.5(32) + 4(18) = 80 + 72 = 152
$$

against $155$ L recorded, a $3$ L gap. Routes $1$ and $2$ rebuild as $8.5(32) + 6.2(18) = 272 + 111.6 = 383.6$ and $5(32) + 9(18) = 160 + 162 = 322$.`,

  "math-5-57": `The two allocations swap the same $27000$ and $18000$ blocks of the $45000$ fund. Adding them counts the whole fund once at each rate; subtracting them isolates the rate gap. Let $x$ be the Bond rate and $y$ the Equity rate, both in percent, with each allocation written in hundreds of dollars so a percent rate multiplies cleanly.

Current mix, $27000$ Bonds and $18000$ Equities, returns $2646$:

$$
270x + 180y = 2646
$$

The proposed swap, $18000$ Bonds and $27000$ Equities, would return $2754$:

$$
180x + 270y = 2754
$$

Add:

$$
450x + 450y = 5400
$$

$$
x + y = 12
$$

Subtract the current mix from the swap:

$$
-90x + 90y = 108
$$

$$
y - x = 1.2
$$

Then $y = x + 1.2$ into $x + y = 12$:

$$
x + (x + 1.2) = 12
$$

$$
2x = 10.8
$$

$$
x = \\frac{10.8}{2} = 5.4
$$

$$
y = 6.6
$$

Bonds at $5.4\\%$ and Equities at $6.6\\%$ rebuild the current return as $27000(0.054) + 18000(0.066) = 1458 + 1188 = 2646$, and the swap as $18000(0.054) + 27000(0.066) = 972 + 1782 = 2754$.`,

  "math-5-58": `Auto and Home share the administrative fee, so their premium difference is purely coverage. Renters coverage is missing and is recovered after that pair is known. Let $x$ be the fixed fee and $y$ the rate per $1000$ of coverage, counting Auto as $85$ units and Home as $210$ units.

Auto:

$$
x + 85y = 612.50
$$

Home:

$$
x + 210y = 1197.50
$$

Subtract Auto from Home:

$$
125y = 585
$$

$$
y = \\frac{585}{125} = 4.68
$$

Back into Auto:

$$
x + 85(4.68) = 612.50
$$

$$
x + 397.80 = 612.50
$$

$$
x = 214.70
$$

Renters paid $331.70$. If $C$ is its coverage in units of $1000$:

$$
214.70 + 4.68C = 331.70
$$

$$
4.68C = 117
$$

$$
C = \\frac{117}{4.68} = 25
$$

that is $25000$ of coverage. Auto and Home rebuild as $214.70 + 85(4.68) = 612.50$ and $214.70 + 210(4.68) = 1197.50$.`,

  "math-5-59": `Year $2$ gives each species separately. Year $6$ gives only the combined headcount, plus the rule that A adds twice what B adds each year. Let $x$ be Species A's annual net change and $y$ Species B's.

From Year $2$ to Year $6$ the combined count rises from $1340$ to $1772$, a gain of $432$ over $4$ years:

$$
4x + 4y = 432
$$

$$
x + y = 108
$$

Species A grows at twice Species B's rate:

$$
x = 2y
$$

Substitute:

$$
2y + y = 108
$$

$$
y = \\frac{108}{3} = 36
$$

$$
x = 72
$$

Four years later:

$$
A = 610 + 4(72) = 898
$$

$$
B = 730 + 4(36) = 874
$$

Those Year $6$ counts sum to $898 + 874 = 1772$, matching the combined total, and $72$ is exactly twice $36$.`,

  "math-5-60": `Days $1$ and $2$ are already in hours and are the working pair. Convert Day $3$'s $1020$ minutes only when it is time to audit. Let $x$ be Plant A's MWh per hour and $y$ Plant B's.

Day $1$ ran A for $14$ hours and B for $20$ hours, producing $3990$ MWh:

$$
14x + 20y = 3990
$$

Day $2$ ran A for $22$ hours and B for $9$ hours, producing $4072$ MWh:

$$
22x + 9y = 4072
$$

Halve Day $1$:

$$
7x + 10y = 1995
$$

Multiply that by $9$ and Day $2$ by $10$ so both carry $90y$:

$$
63x + 90y = 17955
$$

$$
220x + 90y = 40720
$$

Subtract:

$$
157x = 22765
$$

$$
x = \\frac{22765}{157} = 145
$$

From $7x + 10y = 1995$:

$$
7(145) + 10y = 1995
$$

$$
1015 + 10y = 1995
$$

$$
y = 98
$$

Day $3$ ran A for $1020$ min $= 17$ hours and B for $11$ hours:

$$
17(145) + 11(98) = 2465 + 1078 = 3543
$$

against $3553$ MWh recorded, a $10$ MWh gap. Days $1$ and $2$ rebuild as $14(145) + 20(98) = 2030 + 1960 = 3990$ and $22(145) + 9(98) = 3190 + 882 = 4072$.`,
};

const tacticals = {
  "math-5-51": [
    `**A.** → True

A client with AUM of $850000$ pays $1.6\\%$ plus the $1200$ retainer:

$$
0.016(850000) + 1200 = 13600 + 1200 = 14800
$$

As a share of AUM:

$$
\\frac{14800}{850000} \\approx 0.01741
$$

About $1.741\\%$ sits under the $1.75\\%$ line.`,

    `**B.** → True

The retainer of $1200$ against Client $2$'s printed fee of $10800$ is the share

$$
\\frac{1200}{10800} = \\frac{1}{9} \\approx 0.111
$$

About $11.1\\%$ of that bill is the flat fee, which exceeds $10\\%$.`,

    `**C.** → True

Client $1$'s actual fee on $750000$ is the stem-solve $13200$. Cut the rate to $1.4\\%$ and double the retainer to $2400$:

$$
0.014(750000) + 2400 = 10500 + 2400 = 12900
$$

Twelve thousand nine hundred is $300$ below the actual $13200$.`,

    `**D.** → False

Effective rate is total fee over AUM, retainer included. Client $1$ pays $\\frac{13200}{750000} = 0.0176$ and Client $2$ pays $\\frac{10800}{600000} = 0.0180$. The gap is

$$
0.0180 - 0.0176 = 0.0004
$$

which is $0.04$ percentage points, short of $0.05$. The same retainer spreads thinner over Client $1$'s larger base.`,

    `**E.** → False

Triple Client $2$'s AUM is $1800000$. At $1.6\\%$ plus $1200$:

$$
0.016(1800000) + 1200 = 28800 + 1200 = 30000
$$

Triple Client $2$'s fee is $3(10800) = 32400$. The $30000$ bill is less than $32400$ because the retainer is not tripled.`,
  ],

  "math-5-52": [
    `**A.** → True

Suspension B at $15.6$ mg/mL against Suspension A at $8.4$ mg/mL has relative increase

$$
\\frac{15.6 - 8.4}{8.4} = \\frac{7.2}{8.4} = \\frac{6}{7} \\approx 0.857
$$

About $85.7\\%$ is more than $85\\%$ higher.`,

    `**B.** → False

Batch $3$'s predicted content is $9708$ mg against $9700$ mg recorded, an $8$ mg gap. As a share of the recorded value:

$$
\\frac{8}{9700} \\approx 0.000825
$$

About $0.0825\\%$ is far below $1\\%$ of the recorded total.`,

    `**C.** → True

Doubling Batch $1$'s Suspension B from $300$ mL to $600$ mL, with A still at $500$ mL, gives

$$
500(8.4) + 600(15.6) = 4200 + 9360 = 13560
$$

Thirteen thousand five hundred sixty milligrams exceeds $13500$.`,

    `**D.** → True

Pooling the two batches adds the recorded contents:

$$
8880 + 12600 = 21480
$$

Twice Batch $2$ alone is $2(12600) = 25200$. Because $21480 < 25200$, the pooled total stays below a doubled Batch $2$.`,

    `**E.** → True

Volume share of B is B over the whole batch. Batch $2$ used $700$ mL of B in $900$ mL total:

$$
\\frac{700}{900} \\approx 0.778
$$

Batch $3$ used $450$ mL of B with $320$ mL of A, so $450$ in $770$:

$$
\\frac{450}{770} \\approx 0.584
$$

Batch $2$'s roughly $78\\%$ B exceeds Batch $3$'s roughly $58\\%$.`,
  ],

  "math-5-53": [
    `**A.** → False

Invoice $1$'s waste cost from the stem solve is $564$. Five hundred sixty-four dollars of waste does not exceed $700$.`,

    `**B.** → True

Job $2$ still orders $392$ studs. Cut the drywall waste allowance from $8\\%$ to $5\\%$:

$$
175(1.05) = 183.75
$$

Studs at $4.50$ and sheets at $38$ then bill

$$
392(4.50) = 1764
$$

$$
183.75(38) = 6982.50
$$

$$
1764 + 6982.50 = 8746.50
$$

The drop from the actual $8946$ is

$$
8946 - 8746.50 = 199.50
$$

which is more than $150$.`,

    `**C.** → True

Job $2$'s usable-material cost from the stem solve is $8225$. Ninety percent of the as-ordered $8946$ is

$$
0.90(8946) = 8051.40
$$

Usable cost of $8225$ exceeds that $8051.40$ benchmark.`,

    `**D.** → True

The sheet price over the stud price is

$$
\\frac{38}{4.50} \\approx 8.444
$$

Eight studs cost $8(4.50) = 36$, and one sheet at $38$ costs more than those eight studs, so the ratio clears $8$.`,

    `**E.** → True

Waste as a percentage of usable cost is $(I - U)/U$. Job $1$'s add-on is $\\frac{564}{6600} \\approx 0.0855$. Job $2$'s add-on is $\\frac{721}{8225} \\approx 0.0877$. Job $1$'s roughly $8.55\\%$ is smaller than Job $2$'s roughly $8.77\\%$.`,
  ],

  "math-5-54": [
    `**A.** → True

The scale factor $3.50$ relative to $3.4$ is the excess

$$
\\frac{3.50 - 3.40}{3.40} = \\frac{0.10}{3.40} \\approx 0.0294
$$

About $2.94\\%$ is more than $2.5\\%$ above $3.4$.`,

    `**B.** → True

Keep the scale $3.50$ and double the offset from $13.50$ to $27$. At a reading of $20$:

$$
3.50(20) + 27 = 70 + 27 = 97
$$

Ninety-seven exceeds $95$.`,

    `**C.** → False

The curve predicts $171.00$ at reading $45.0$, while the recorded reference is $172.20$. The prediction sits $1.20$ below the reference, not above it. Relative to $172.20$ that shortfall is only about $0.70\\%$, so the curve does not exceed the recorded value at all.`,

    `**D.** → True

The certified true values rise from $56.90$ at Point $1$ to $124.45$ at Point $2$. The relative increase is

$$
\\frac{124.45 - 56.90}{56.90} = \\frac{67.55}{56.90} \\approx 1.187
$$

A $118.7\\%$ rise is more than a doubling.`,

    `**E.** → False

At a reading of $8.0$ the curve $V = 3.50R + 13.50$ gives

$$
3.50(8.0) + 13.50 = 28 + 13.50 = 41.5
$$

Half of Point $1$'s certified $56.90$ is $28.45$. The predicted $41.5$ stays well above $28.45$ because the offset keeps the curve off the origin.`,
  ],

  "math-5-55": [
    `**A.** → True

Coffee's premium over Cocoa is

$$
\\frac{6.20 - 4.85}{4.85} = \\frac{1.35}{4.85} \\approx 0.278
$$

About $27.8\\%$ more per kilogram exceeds a $25\\%$ premium.`,

    `**B.** → True

Shipment $1$'s $312$ kg of Coffee at $6.20$ cost $1934.40$. As a share of the $2943.20$ invoice:

$$
\\frac{1934.40}{2943.20} \\approx 0.657
$$

Coffee accounts for about $65.7\\%$ of that shipment, which clears $65\\%$.`,

    `**C.** → True

A $1:1$ split of the same $800$ kg puts $400$ kg in each commodity:

$$
400(6.20) + 400(4.85) = 2480 + 1940 = 4420
$$

Four thousand four hundred twenty is below the actual $4555$, because $100$ kg moves out of the dearer Coffee.`,

    `**D.** → False

Coffee across both shipments is $312 + 500 = 812$ kg, costing $812(6.20) = 5034.40$. Cocoa is $208 + 300 = 508$ kg, costing $508(4.85) = 2463.80$. Cocoa's $2463.80$ falls well short of Coffee's $5034.40$.`,

    `**E.** → True

The price gap is $6.20 - 4.85 = 1.35$. Thirty percent of Coffee's price is

$$
0.30(6.20) = 1.86
$$

The $1.35$ gap stays under $1.86$, about $21.8\\%$ of Coffee rather than $30\\%$.`,
  ],

  "math-5-56": [
    `**A.** → True

The Truck at $32$ L per $100$ km against the Van at $18$ has excess

$$
\\frac{32 - 18}{18} = \\frac{14}{18} \\approx 0.778
$$

About $77.8\\%$ higher than the Van exceeds a $75\\%$ gap.`,

    `**B.** → False

Route $3$ predicts $152$ L against $155$ L recorded, a $3$ L shortfall. As a share of the recorded value:

$$
\\frac{3}{155} \\approx 0.0194
$$

About $1.94\\%$ below the log does not clear $2\\%$.`,

    `**C.** → True

Keep Route $1$'s $850$ km of Truck and stretch the Van to $900$ km:

$$
8.5(32) + 9(18) = 272 + 162 = 434
$$

Four hundred thirty-four litres exceeds $430$ L.`,

    `**D.** → True

Route $2$ used $322$ L over $500 + 900 = 1400$ km, so the fleet average is

$$
\\frac{322}{14} = 23
$$

litres per $100$ km. Distance to the Van's $18$ is $5$; distance to the Truck's $32$ is $9$. The average sits closer to the Van.`,

    `**E.** → True

If each vehicle alone covered the combined $1470$ km, that is $14.7$ hundreds of kilometres at each rate:

$$
14.7(32) + 14.7(18) = 470.4 + 264.6 = 735
$$

Route $1$'s actual $383.6$ L is far below those two full-distance runs of $735$ L.`,
  ],

  "math-5-57": [
    `**A.** → True

The equity premium over the bond rate is $6.6 - 5.4 = 1.2$. Relative to the bond rate:

$$
\\frac{1.2}{5.4} = \\frac{2}{9} \\approx 0.222
$$

About $22.2\\%$ of the bond rate exceeds a $20\\%$ relative gap.`,

    `**B.** → True

The current mix returns $2646$ on $45000$. That blended rate is

$$
\\frac{2646}{45000} = 0.0588
$$

which is $5.88\\%$, under $6\\%$.`,

    `**C.** → False

The entire $45000$ at the equity rate of $6.6\\%$ returns

$$
45000(0.066) = 2970
$$

The two described allocations together return $2646 + 2754 = 5400$. A single all-equity year of $2970$ is well short of that $5400$ double-count.`,

    `**D.** → True

A $\\frac{50}{50}$ split puts $22500$ in Bonds and $22500$ in Equities. At the two rates:

$$
22500(0.054) = 1215
$$

$$
22500(0.066) = 1485
$$

$$
1215 + 1485 = 2700
$$

The average of the two described allocations is

$$
\\frac{2646 + 2754}{2} = \\frac{5400}{2} = 2700
$$

The even split matches that average exactly, which is what adding-and-halving two linear mixes of the same fund has to do.`,

    `**E.** → True

The bond rate as a fraction of the equity rate is

$$
\\frac{5.4}{6.6} = \\frac{9}{11} \\approx 0.818
$$

Eighty percent of $6.6$ is $5.28$, and $5.4 > 5.28$. Bonds earn about $81.8\\%$ of the equity rate.`,
  ],

  "math-5-58": [
    `**A.** → True

Renters coverage from the stem solve is $25$ units of $1000$, which is $25000$. That amount sits below $30000$.`,

    `**B.** → False

The fee of $214.70$ as a share of the Auto premium of $612.50$ is

$$
\\frac{214.70}{612.50} \\approx 0.351
$$

About $35\\%$ of that premium is the fee, well short of $60\\%$. Sixty percent of $612.50$ would be $367.50$.`,

    `**C.** → True

A $10\\%$ rise in the rate of $4.68$ adds $0.468$ per coverage unit. On the Home policy's $210$ units, with the fee unchanged:

$$
210(0.468) = 98.28
$$

That $98.28$ increase exceeds $75$.`,

    `**D.** → False

Effective premium per $1000$ is the whole premium over coverage units. Home is $\\frac{1197.50}{210} \\approx 5.70$ and Auto is $\\frac{612.50}{85} \\approx 7.21$. Home's figure is the lower of the two, not more than twice Auto's, because the same $214.70$ fee is spread over more units.`,

    `**E.** → True

A single policy covering both amounts pays the fee once over $85 + 210 = 295$ units:

$$
214.70 + 295(4.68) = 214.70 + 1380.60 = 1595.30
$$

Two separate policies total $612.50 + 1197.50 = 1810$. The combined bill of $1595.30$ is lower by exactly one $214.70$ fee.`,
  ],

  "math-5-59": [
    `**A.** → True

By Year $6$ the populations are $898$ for A and $874$ for B. The gap is

$$
898 - 874 = 24
$$

Twenty-four individuals exceed a $20$ lead.`,

    `**B.** → True

If Species B also grew at A's $72$ per year, then B at Year $6$ would be $730 + 4(72) = 1018$. Combined with A's $898$ that is $1916$. The excess over the actual $1772$ is

$$
1916 - 1772 = 144
$$

One hundred forty-four extra individuals clear the $140$ line.`,

    `**C.** → False

Over the same four years A adds $4(72) = 288$ and B adds $4(36) = 144$. The growth ratio is

$$
\\frac{288}{144} = 2
$$

A $2:1$ ratio is the annual-rate ratio itself, and $2$ does not exceed $2.5$.`,

    `**D.** → True

At Year $2$ the difference $A - B$ is $610 - 730 = -120$. At Year $6$ it is $898 - 874 = 24$. A difference that moves from negative to positive across a window of linear growth must cross zero in between, so the populations were equal at some moment between Year $2$ and Year $6$.`,

    `**E.** → False

From Year $2$, A closes a $120$ gap while gaining $36$ a year on B, which takes $\\frac{120}{36} = \\frac{10}{3}$ years. The crossover is at Year $2 + \\frac{10}{3} \\approx 5.33$. At Year $5$ itself, $A = 610 + 72(3) = 826$ and $B = 730 + 36(3) = 838$, so A is still behind and the overtake is not before Year $5$.`,
  ],

  "math-5-60": [
    `**A.** → True

Plant A at $145$ MWh per hour against Plant B at $98$ gives

$$
\\frac{145 - 98}{98} = \\frac{47}{98} \\approx 0.480
$$

About $48\\%$ above B exceeds a $45\\%$ lead.`,

    `**B.** → True

Day $3$ predicts $3543$ MWh against $3553$ MWh recorded, a $10$ MWh gap. As a share of the recorded value:

$$
\\frac{10}{3553} \\approx 0.00281
$$

About $0.281\\%$ of the recorded total sits inside a $0.3\\%$ window.`,

    `**C.** → False

Swapping the two-day hour totals gives Plant A $29$ hours and Plant B $36$ hours:

$$
29(145) + 36(98) = 4205 + 3528 = 7733
$$

The actual Days $1$ and $2$ total is $3990 + 4072 = 8062$. The swap yields $7733$, which is below $8062$ because hours move from the faster plant to the slower one.`,

    `**D.** → True

The combined rate is $145 + 98 = 243$. Two-point-four times Plant B is

$$
2.4(98) = 235.2
$$

The pair at $243$ exceeds $235.2$. Equivalently $\\frac{243}{98} \\approx 2.48$, above the factor $2.4$.`,

    `**E.** → True

Using Day $3$ as recorded, the three printed totals add as

$$
3990 + 4072 + 3553 = 11615
$$

Eleven thousand six hundred fifteen MWh exceeds $11600$ by $15$ MWh.`,
  ],
};

const frozenKeys = [
  "id",
  "case_id",
  "title",
  "subsection",
  "context",
  "statements",
  "answer_key",
  "difficulty_level",
  "sort_order",
  "tables_markdown",
  "figure",
];

for (const [i, t] of data.entries()) {
  if (!overviews[t.id]) throw new Error("missing overview " + t.id);
  if (!tacticals[t.id] || tacticals[t.id].length !== 5) {
    throw new Error(t.id + " tactical count");
  }
  t.solution_overview = overviews[t.id];
  t.tactical_explanations = tacticals[t.id];
  const o = orig[i];
  for (const k of Object.keys(o)) {
    if (k === "solution_overview" || k === "tactical_explanations") continue;
    if (JSON.stringify(o[k]) !== JSON.stringify(t[k])) {
      throw new Error(t.id + " mutated " + k);
    }
  }
  for (const k of frozenKeys) {
    if (JSON.stringify(o[k] ?? null) !== JSON.stringify(t[k] ?? null)) {
      throw new Error(t.id + " froze " + k);
    }
  }
}

const letters = ["A", "B", "C", "D", "E"];
const forbidden = [
  "Part 1:",
  "Part 2:",
  "Part 3:",
  "Building the model",
  "**Answer.**",
  "—",
  "–",
  "${",
  "so the statement is True",
  "so the statement is False",
  "so the statement is true",
  "so the statement is false",
  "The recovered law is",
];

const issues = [];
const openings = [];

for (const t of data) {
  openings.push([t.id, t.solution_overview.split("\n")[0].slice(0, 100)]);
  const texts = [t.solution_overview, ...t.tactical_explanations];
  for (const [j, text] of texts.entries()) {
    for (const n of forbidden) {
      if (text.includes(n)) {
        issues.push(t.id + " [" + j + "] contains " + JSON.stringify(n));
      }
    }
  }
  if (!t.solution_overview.includes("\\frac")) {
    issues.push(t.id + " overview missing \\\\frac");
  }
  const lens = [];
  for (let i = 0; i < 5; i++) {
    const want = t.answer_key[i] ? "True" : "False";
    const head = `**${letters[i]}.** → ${want}`;
    if (!t.tactical_explanations[i].startsWith(head)) {
      issues.push(t.id + " header mismatch " + letters[i]);
    }
    const prose = t.tactical_explanations[i]
      .replace(/\$\$[\s\S]*?\$\$/g, " ")
      .replace(/\$[^$]+\$/g, " ")
      .replace(/\*\*[^*]+\*\*/g, " ")
      .replace(/→/g, " ");
    const words = prose.trim().split(/\s+/).filter(Boolean);
    lens.push(words.length);
    if (words.length < 12) {
      issues.push(t.id + " " + letters[i] + " short prose " + words.length);
    }
  }
  const minL = Math.min(...lens);
  const maxL = Math.max(...lens);
  if (maxL - minL < 8) {
    issues.push(t.id + " letter lengths too similar " + lens.join(","));
  }
}

if (issues.length) {
  console.error(issues.join("\n"));
  process.exit(1);
}

fs.writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
console.log("wrote", data.map((t) => t.id).join(", "));
console.log("count", data.length);
for (const [id, open] of openings) console.log(id, open);
