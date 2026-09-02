import { applyFile } from "./_dedupe_apply.mjs";

const patches = {};
function add(id, letters) {
  patches[id] = letters;
}

add("math-11-111", [
  "**A) At a 9% annual rate, the present value of Schedule II is approximately \\$521,162.27.**  (true)\n\nSchedule II is a seven-payment annuity due of $\\$95,000$, already valued in the overview at $PV_{\\mathrm{II}} \\approx 521,162$. Seven copies of $\\$95,000$ would give the nominal $\\$665,000$ and ignore discounting. The $9\\%$ present-value factor is what pulls II above the $\\$500,000$ cash price.",
  "**B) At a 9% annual rate, the present value of Schedule III is approximately \\$540,000.00.**  (false)\n\nSchedule III is cash plus a ten-year ordinary annuity, already valued in the overview at $PV_{\\mathrm{III}} \\approx 535,059$, not $540,000$. The round $\\$540,000$ is a nearby stand-in. The recovered figure still sits above both cash and Schedule II at $9\\%$.",
  "**C) At a 9% annual rate, Schedule I is the cheapest of the three schedules.**  (true)\n\nThe overview already ranked $500,000 < 521,162 < 535,059$. Cash wins at $9\\%$. Instalments look smaller year by year, but they are not cheaper in present value at this rate.",
  "**D) At a 13% annual rate, the present value of Schedule II is approximately \\$474,767.23.**  (true)\n\nA higher rate cheapens the same annuity due, already revalued in the overview at $PV_{\\mathrm{II}} \\approx 474,767$. That figure now sits below the $\\$500,000$ cash price. The $13\\%$ clock is a genuine extra calculation, and it is the one the overview already supplied.",
  "**E) At a 13% annual rate, Schedule III becomes the cheapest of the three schedules.**  (false)\n\nThe overview already ranked $474,767 < 475,575 < 500,000$. Schedule II is cheapest at $13\\%$; III is close, about $\\$808$ behind. Closing most of the gap is not the same as winning. The ranking flip from letter C is II versus cash, not III versus everyone.",
]);

add("math-11-112", [
  "**A) At an 8% annual rate, the present value of Schedule II is approximately \\$944,529.45.**  (true)\n\nSchedule II is a nine-payment annuity due of $\\$140,000$, already valued in the overview at $PV_{\\mathrm{II}} \\approx 944,529$. Nine copies of $\\$140,000$ would give the nominal $\\$1.26$ million and ignore discounting. The $8\\%$ factor is what still leaves II well above the $\\$850,000$ cash price.",
  "**B) At an 8% annual rate, the present value of Schedule III is approximately \\$871,117.14.**  (true)\n\nSchedule III is cash plus an eleven-year ordinary annuity, already $PV_{\\mathrm{III}} \\approx 871,117$ in the overview. That sits between cash and Schedule II at $8\\%$. III is cheaper than II at this rate, but it is not cheaper than writing a check today.",
  "**C) At an 8% annual rate, Schedule I is the cheapest of the three schedules.**  (true)\n\nThe overview already ranked $850,000 < 871,117 < 944,529$. Cash wins at $8\\%$. Both instalment plans still carry a present-value premium at this modest rate.",
  "**D) At a 12% annual rate, the present value of Schedule III is approximately \\$775,015.93.**  (true)\n\nA higher rate cheapens III, already revalued in the overview at $PV_{\\mathrm{III}} \\approx 775,016$. That figure now sits well below both cash and Schedule II. The $12\\%$ clock is the extra calculation this letter needs, and the overview already has it.",
  "**E) At a 12% annual rate, Schedule II becomes the cheapest of the three schedules.**  (false)\n\nThe overview already ranked $775,016 < 835,470 < 850,000$. Schedule III is cheapest at $12\\%$, not II. II does beat cash, but III beats II. The claim picks the wrong instalment plan for the new ranking.",
]);

add("math-11-113", [
  "**A) At a 7.5% annual rate, the present value of Schedule II is approximately \\$2,508,821.59.**  (true)\n\nSchedule II is the instalment plan already valued in the overview at $PV_{\\mathrm{II}} \\approx 2,508,822$. That sits above the $\\$2,400,000$ cash price. The $7.5\\%$ factor is what keeps II from beating a check written today.",
  "**B) At a 7.5% annual rate, the present value of Schedule III is approximately \\$2,250,000.00.**  (false)\n\nThe overview's $PV_{\\mathrm{III}} \\approx 2,194,722$, not $2,250,000$. The round $\\$2.25$ million is a nearby stand-in. III is still the cheapest overall at $7.5\\%$, just not at that rounder figure.",
  "**C) At a 7.5% annual rate, Schedule I is cheaper than Schedule II.**  (true)\n\nThe overview already compared $2,400,000 < 2,508,822$. Cash beats II at $7.5\\%$. That ranking is only I versus II; III can still be cheaper than both, and at this rate it is.",
  "**D) At an 11.5% annual rate, the present value of Schedule II is approximately \\$2,100,000.00.**  (false)\n\nA higher rate does cheapen II, but the overview's $11.5\\%$ value is about $\\$2,186,562$, not $\\$2,100,000$. The round $\\$2.1$ million understates the recovered present value by about $\\$87,000$.",
  "**E) At an 11.5% annual rate, Schedule I is still cheaper than Schedule II.**  (false)\n\nThe overview already ranked $2,186,562 < 2,400,000$. At $11.5\\%$ the instalments are discounted hard enough for II to beat cash. The I-versus-II ranking flips, which is the stress test this capstone is built around.",
]);

add("math-11-114", [
  "**A) The internal rate of return for this project is exactly 20%.**  (true)\n\nA one-year project is just the payoff over the outlay, already step 2 of the overview:\n\n$$\\frac{9,600}{8,000}-1 = 0.20$$\n\nNo quadratic is hiding in the background. The trap is treating $\\$1,600$ of profit as $16\\%$ of $\\$10,000$, or as $20\\%$ of something other than the $\\$8,000$ oven.",
  "**B) At an interest rate of 15%, the net present value of this project is positive.**  (true)\n\nNPV at $15\\%$ is already $347.83 > 0$ in the overview. A rate below the $20\\%$ IRR has to leave a surplus. Discounting $\\$9,600$ by $1.15$ still covers the $\\$8,000$ outlay with about $\\$348$ to spare.",
  "**C) At an interest rate of 25%, the net present value of this project is positive.**  (false)\n\nNPV at $25\\%$ is already $-320 < 0$ in the overview. A rate above the $20\\%$ IRR has to leave a shortfall. The sign flips across the IRR; it does not stay positive on both sides.",
  "**D) If the return had instead been \\$10,000, with the outlay unchanged, the internal rate of return would exceed 24%.**  (true)\n\nThe new one-year rate is the overview's extra case\n\n$$\\frac{10,000}{8,000}-1 = 0.25$$\n\nwhich clears $24\\%$. Raising the payoff by $\\$400$ lifts IRR by five points, not by a quadratic complication. A one-year project stays a single division.",
  "**E) This project has a unique internal rate of return greater than -1.**  (true)\n\nOne negative outlay followed by one positive return is the chapter's uniqueness case: exactly one $r^{*} > -1$. The recovered $20\\%$ is that unique rate. A sign-changing second return would be the multiple-root story, and this oven project does not have one.",
]);

add("math-11-115", [
  "**A) The internal rate of return is approximately 10.92%.**  (true)\n\nThe two-year IRR is the overview's quadratic root $s \\approx 0.90153$, converted to $r \\approx 10.92\\%$. Averaging the two $\\$7,000$ returns against $\\$12,000$ as if they arrived at once would overstate the rate. The $s$-substitution is what keeps both years on the clock.",
  "**B) At an interest rate of 8%, the net present value of this project is positive.**  (true)\n\nNPV at $8\\%$ is already $482.85 > 0$ in the overview. A test rate below the $10.92\\%$ IRR has to leave a surplus. That sign check does not require a second quadratic.",
  "**C) At an interest rate of 12%, the net present value of this project is positive.**  (false)\n\nNPV at $12\\%$ is already $-169.64 < 0$ in the overview. Twelve percent sits above the $10.92\\%$ IRR, so the project is a little short. The sign flips across the recovered rate; it does not stay positive on both sides.",
  "**D) If the Year 2 return had instead been \\$8,000, with Year 1 unchanged at \\$7,000, the internal rate of return would exceed 13%.**  (true)\n\nA larger second return is a new quadratic, not a scale of $10.92\\%$:\n\n$$8s^{2}+7s-12=0, \\qquad s \\approx 0.863, \\qquad r \\approx 15.87\\%$$\n\nThat clears $13\\%$. Pulling an extra $\\$1,000$ into year 2 lifts IRR by about five points. Doubling the original rate to $21.84\\%$ is the different (and false) move in letter E.",
  "**E) Doubling both returns to \\$14,000 in Year 1 and \\$14,000 in Year 2, with the outlay unchanged at \\$12,000, would result in an internal rate of return of approximately 21.84%.**  (false)\n\nIRR is not linear in the returns. Doubling both payoffs while holding the outlay fixed produces a new quadratic $7s^{2}+7s-6=0$, whose admissible root is about $r \\approx 81\\%$, not $2 \\times 10.92\\% = 21.84\\%$. Twice the cash in does not mean twice the rate, because the $\\$12,000$ outlay was not doubled with them.",
]);

add("math-11-116", [
  "**A) The internal rate of return is approximately 11.98%.**  (true)\n\nThe two-year IRR is the overview's quadratic root $s \\approx 0.89304$, converted to $r \\approx 11.98\\%$. Treating the project as $\\frac{9,000+15,000}{20,000}-1 = 20\\%$ would ignore timing and overstate the rate. Year 2's larger return is discounted twice, which is why IRR sits near $12\\%$ rather than $20\\%$.",
  "**B) At a discount rate of 10%, the net present value of the project is positive.**  (true)\n\nNPV at $10\\%$ is already $578.51 > 0$ in the overview. Ten percent sits below the $11.98\\%$ IRR, so the boutique still shows a surplus. That sign check uses the recovered rate; it does not rebuild the quadratic.",
  "**C) At a discount rate of 14%, the net present value of the project is positive.**  (false)\n\nNPV at $14\\%$ is already $-563.25 < 0$ in the overview. Fourteen percent sits above the IRR, so the project is short. The sign flips across $11.98\\%$; it does not stay positive on both sides.",
  "**D) If the Year 1 return were \\$9,000 higher, with Year 2 unchanged at \\$15,000, the internal rate of return would exceed 30%.**  (true)\n\nPulling $\\$9,000$ into year 1 is a new quadratic $15s^{2}+18s-20=0$, whose admissible root is about $r \\approx 42.6\\%$. That clears $30\\%$ easily. Front-loading cash raises IRR much faster than adding the same dollars to year 2 would.",
  "**E) The sum of all cash flows, $a_0$ + $a_1$ + $a_2$, equals \\$4,000.**  (true)\n\nThe overview already added $-20,000+9,000+15,000=4,000$. A positive undiscounted total is why a positive IRR exists at all. It is not a present value, and it is not a second quadratic.",
]);

add("math-11-117", [
  "**A) The internal rate of return of Project X is exactly 15%.**  (true)\n\nX is a one-year project, already $\\frac{17,250}{15,000}-1 = 0.15$ in the overview. No timing puzzle is hiding in a second year. The trap is mixing Y's larger dollar payoff into X's rate.",
  "**B) The internal rate of return of Project Y is exactly 12.5%.**  (true)\n\nY is also one year, already $\\frac{24,750}{22,000}-1 = 0.125$ in the overview. A bigger dollar profit does not mean a bigger rate: Y invests more. The $12.5\\%$ figure is Y's own division, not a scaled copy of X.",
  "**C) Based on the internal rate of return criterion, Project Y should be preferred over Project X.**  (false)\n\nThe overview already ranked $15\\% > 12.5\\%$. IRR prefers X. Y's larger payoff is attractive in dollars and still loses on rate, because it needs a $\\$22,000$ outlay to earn that payoff.",
  "**D) At an interest rate of 11%, Project X has positive net present value while Project Y has negative net present value.**  (false)\n\nEleven percent sits below both IRRs, so both NPVs are positive. The overview already recorded $NPV_X \\approx 541$ and $NPV_Y \\approx 297$. A split sign would require a test rate between $12.5\\%$ and $15\\%$, and $11\\%$ is not in that gap.",
  "**E) If Project Y's payoff had instead been \\$25,000, with the outlay unchanged at \\$22,000, its internal rate of return would exceed that of Project X.**  (false)\n\nThe new one-year rate is $\\frac{25,000}{22,000}-1 \\approx 13.64\\%$, still below X's $15\\%$. An extra $\\$250$ of payoff helps Y, but not enough to overtake X. The ranking of IRRs does not flip at that nearby payoff.",
]);

add("math-11-118", [
  "**A) At r = 8%, the net present value of the project is approximately \\$4,012.**  (true)\n\nThe overview already discounted the mixed cash flows at $8\\%$ and recovered $A \\approx 4,012$. Year 1 is an outflow, so it enters with a minus sign. Skipping that $-\\$3,000$ would overstate NPV by about $\\$2,778$.",
  "**B) At r = 12%, the net present value of the project is positive.**  (false)\n\nNPV at $12\\%$ is already $-445 < 0$ in the overview. Twelve percent sits above this project's IRR, so the upgrade is a little short. The sign at $8\\%$ does not carry over to $12\\%$.",
  "**C) The internal rate of return of this project lies between 12% and 15%.**  (false)\n\nNPV is already negative at $12\\%$ and more negative at $15\\%$, so the IRR sits below $12\\%$, between the positive $8\\%$ value and the negative $12\\%$ value. Placing it above $12\\%$ ignores the sign change that has already happened.",
  "**D) At r = 15%, the net present value of the project is approximately -\\$3,424.**  (true)\n\nThe overview already evaluated $A \\approx -3,424$ at $15\\%$. That is a deeper shortfall than at $12\\%$, as expected once the test rate is even farther above IRR. The dollar figure is a discounted cash-flow total, not a new root-finding exercise.",
  "**E) $a_1$, $a_2$, and $a_3$ are all positive.**  (false)\n\nYear 1 is a $\\$3,000$ installation outflow, so $a_1 = -3,000$. The overview's NPV displays already carry that minus. The uniqueness shortcut that needs every later cash flow positive does not apply here, which is why this project is a sign-change example rather than a one-root slogan.",
]);

add("math-11-119", [
  "**A) The internal rate of return is approximately 14.5%.**  (false)\n\nThe two-year IRR is the overview's quadratic root $s \\approx 0.90270$, converted to $r \\approx 10.78\\%$, not $14.5\\%$. The extra four points would need a smaller outlay or larger returns than the espresso line actually has. The recovered rate is about $10.8\\%$.",
  "**B) At an interest rate of 9%, the net present value of the project is negative.**  (false)\n\nNPV at $9\\%$ is already $879 > 0$ in the overview. Nine percent sits below the $10.78\\%$ IRR, so the machines still show a surplus. The claim has the sign backwards.",
  "**C) At an interest rate of 13%, the net present value of the project is negative.**  (true)\n\nNPV at $13\\%$ is already $-1,045 < 0$ in the overview. Thirteen percent sits above the IRR, so the project is short. The sign check uses the recovered rate; it does not rebuild the quadratic.",
  "**D) If the Year 2 return had instead been \\$20,000, with Year 1 unchanged at \\$16,000, the internal rate of return would exceed the internal rate of return of the original project.**  (false)\n\nCutting year 2 from $\\$24,000$ to $\\$20,000$ is a weaker project, not a stronger one. The new quadratic $10s^{2}+8s-17=0$ has admissible root $r \\approx 3.75\\%$, well below the original $10.78\\%$. A smaller later return lowers IRR.",
  "**E) Reducing the initial outlay to \\$30,000, with returns unchanged at \\$16,000 and \\$24,000, would lower the internal rate of return.**  (false)\n\nPaying less for the same returns raises IRR. The new quadratic $12s^{2}+8s-15=0$ has exact root $s = \\frac{20}{24}$, so $r = 20\\%$, about nine points above the original $10.78\\%$. The ranking in the claim is backwards.",
]);

add("math-11-120", [
  "**A) At r = 15%, the net present value of the project is \\$0, to the nearest dollar.**  (true)\n\nThe overview already discounted both returns at $15\\%$ and they cover the $\\$40,000$ outlay on the nose: $A = 0$. That is the definition of IRR. Fifteen percent is not a nearby test rate here; it is the rate that zeroes the project.",
  "**B) At an interest rate of 10%, the net present value of the project is positive.**  (true)\n\nNPV at $10\\%$ is already $2,810 > 0$ in the overview. A test rate below the $15\\%$ IRR has to leave a surplus. That sign check does not require a second quadratic.",
  "**C) At an interest rate of 20%, the net present value of the project is negative.**  (true)\n\nNPV at $20\\%$ is already $-2,500 < 0$ in the overview. Twenty percent sits above IRR, so the warehouse automation is short. The signs at $10\\%$, $15\\%$, and $20\\%$ are the standard NPV profile around a unique positive root.",
  "**D) The sum of all the project's cash flows, $a_0$ + $a_1$ + $a_2$, equals \\$9,600.**  (true)\n\nThe overview already added $-40,000+22,000+27,600=9,600$. A positive undiscounted total is why the unique IRR is positive. It is not a present value.",
  "**E) This project has a unique internal rate of return greater than -1.**  (true)\n\nOne negative outlay followed by two positive returns is the chapter's uniqueness case. The recovered $15\\%$ is that unique admissible root; the other quadratic root sits below $-1$ and is discarded. The sign pattern, not a second NPV table, is what guarantees uniqueness.",
]);

add("math-11-121", [
  "**A) The internal rate of return is approximately 10.69%.**  (true)\n\nThe two-year IRR is the overview's quadratic root $s \\approx 0.90346$, converted to $r \\approx 10.69\\%$. Averaging $\\$34,000$ and $\\$42,000$ against $\\$65,000$ as a one-year rate would overstate the return. The $s$-substitution is what keeps both rental years on the clock.",
  "**B) At an interest rate of 9%, the net present value of the project is positive.**  (true)\n\nNPV at $9\\%$ is already $1,543 > 0$ in the overview. Nine percent sits below the $10.69\\%$ IRR, so the renovation still shows a surplus. That sign check uses the recovered rate.",
  "**C) At an interest rate of 12%, the net present value of the project is positive.**  (false)\n\nNPV at $12\\%$ is already $-1,161 < 0$ in the overview. Twelve percent sits above IRR, so the project is short. The sign flips across $10.69\\%$; it does not stay positive on both sides.",
  "**D) Doubling both returns to \\$68,000 in Year 1 and \\$84,000 in Year 2, with the outlay unchanged at \\$65,000, would more than double the internal rate of return.**  (true)\n\nDoubling the inflows while holding the outlay fixed is a new quadratic, not $2 \\times 10.69\\%$. The admissible root jumps well past $21\\%$, because the same $\\$65,000$ now buys twice the rental stream. IRR more than doubles precisely because the outlay was not doubled with the returns.",
  "**E) If the outlay were reduced to \\$60,000, with returns unchanged, the internal rate of return would be lower than the internal rate of return of the original project.**  (false)\n\nPaying $\\$5,000$ less for the same rents raises IRR, it does not lower it. A smaller $|a_0|$ in the quadratic lifts the admissible root above $10.69\\%$. The ranking in the claim is backwards.",
]);

add("math-11-122", [
  "**A) The limiting internal rate of return of Option 1 is 12%.**  (true)\n\nA level $\\$6,000$ perpetuity on a $\\$50,000$ outlay is $\\frac{6,000}{50,000} = 0.12$, already in the overview. That is the infinite-horizon IRR, not a two-year stub. Option 2's sign-changing cash flows are a different project.",
  "**B) The internal rate of return of Option 2 is approximately -58.84%.**  (true)\n\nOption 2 is the two-year stub whose quadratic the overview already solved to $r \\approx -58.84\\%$. A negative IRR is what you get when the two $\\$6,000$ returns cannot cover a $\\$50,000$ outlay. The other root sits below $-1$ and is discarded.",
  "**C) Option 2 has a unique internal rate of return greater than -1.**  (true)\n\nThe overview kept the unique admissible root $r \\approx -58.84\\% > -1$ and threw away the root below $-1$. Uniqueness here is the quadratic's one valid discount factor, not a claim that the rate is positive.",
  "**D) The sum of Option 2's cash flows, $a_0$ + $a_1$ + $a_2$, equals -\\$40,000.**  (false)\n\nThe overview already added $-50,000+6,000+6,000=-38,000$, not $-40,000$. The extra $\\$2,000$ would require dropping $\\$1,000$ from each return. A negative undiscounted total is why IRR is negative; the exact total is $-\\$38,000$.",
  "**E) If Option 2's Year 2 return were removed entirely, leaving only $a_0 = -\\$50,000$ and $a_1 = \\$6,000$, its internal rate of return would be even lower than Option 2's own internal rate of return.**  (true)\n\nA one-year stub is $\\frac{6,000}{50,000}-1 = -88\\%$, already compared in the overview with $-58.84\\%$. Losing year 2 makes a bad project worse. The extra year of $\\$6,000$ is what lifts the stub from $-88\\%$ to $-59\\%$.",
]);

add("math-11-123", [
  "**A) The internal rate of return of Design A is approximately 11.04%.**  (true)\n\nDesign A is the two-year quadratic the overview already solved to $r_A \\approx 11.04\\%$. Treating $\\$54,000+\\$88,000$ against $\\$120,000$ as a one-year $18\\%$ return would ignore timing. Year 2's larger payoff is discounted twice, which is why A's IRR sits near $11\\%$.",
  "**B) The internal rate of return of Design B is exactly 16%.**  (true)\n\nDesign B is a one-year project, already $\\frac{81,200}{70,000}-1 = 0.16$ in the overview. No quadratic is required. B's shorter clock is why a smaller dollar payoff can still post a higher rate than A.",
  "**C) Based on the internal rate of return criterion, Design B should be preferred over Design A.**  (true)\n\nThe overview already ranked $16\\% > 11.04\\%$. IRR prefers B. A's larger total cash in is spread over two years; B's single-year $16\\%$ wins the rate comparison.",
  "**D) At a discount rate of 13%, Design A has negative net present value while Design B still has positive net present value.**  (true)\n\nThirteen percent sits between the two IRRs, so the signs split. The overview already recorded $NPV_A \\approx -3,295 < 0$ and $NPV_B \\approx 1,858 > 0$. That split is exactly what a test rate between $11\\%$ and $16\\%$ has to produce.",
  "**E) If Design A's Year 1 return were \\$10,000 lower, with Year 2 unchanged at \\$88,000, its internal rate of return would still exceed Design B's 16%.**  (false)\n\nCutting A's year-1 return makes a weaker two-year project, so its IRR falls further below $11\\%$, not above B's $16\\%$. A smaller early payoff cannot overtake a one-year $16\\%$ design. The ranking would widen in B's favour, not reverse.",
]);

const n = applyFile("111_120.json", patches);
const n2 = applyFile("121_123.json", patches);
console.log("patched", n, n2);
