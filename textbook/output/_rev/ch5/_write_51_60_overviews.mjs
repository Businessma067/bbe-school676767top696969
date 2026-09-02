import fs from "fs";

const path = new URL("./51_60.json", import.meta.url);
const data = JSON.parse(fs.readFileSync(path, "utf8"));

const overviews = {
  "math-5-51": `The retainer is identical on every Halcyon bill, so the extra $2400$ that Client $1$ pays is only the extra AUM speaking. Let $x$ be the fee rate as a decimal and $y$ the shared retainer in dollars.

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
0.016(750000) + 1200 = 13200
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
5x + 3y = 88.8, \\qquad 2x + 7y = 126
$$

Clear $y$ by multiplying the first by $7$ and the second by $3$:

$$
35x + 21y = 621.6, \\qquad 6x + 21y = 378
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

A stud at $4.50$ and a sheet at $38$ rebuild Job $1$ as $224(4.50) + 162(38) = 1008 + 6156 = 7164$, and Job $2$ as $392(4.50) + 189(38) = 1764 + 7182 = 8946$.`,

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
39x + 26y = 367.9, \\qquad 5x + 3y = 45.55
$$

From the second, $x = 9.11 - 0.6y$. Substitute:

$$
39(9.11 - 0.6y) + 26y = 367.9
$$

$$
355.29 - 23.4y + 26y = 367.9
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
x = \\frac{10.8}{2} = 5.4, \\qquad y = 6.6
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
y = \\frac{108}{3} = 36, \\qquad x = 72
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

for (const task of data) {
  if (!overviews[task.id]) {
    throw new Error(`missing overview for ${task.id}`);
  }
  task.solution_overview = overviews[task.id];
}

const forbidden = [
  "Part 1: Building the system",
  "Part 2: The model",
  "Part 3: Solve",
  "**Answer.**",
  "—",
  "${",
];

const ids = [];
for (const task of data) {
  ids.push(task.id);
  for (const needle of forbidden) {
    if (task.solution_overview.includes(needle)) {
      throw new Error(`${task.id} still contains ${JSON.stringify(needle)}`);
    }
  }
  if (!task.solution_overview.includes("\\frac")) {
    throw new Error(`${task.id} missing \\frac`);
  }
}

fs.writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
console.log(ids.join("\n"));
console.log("wrote", data.length, "tasks");
