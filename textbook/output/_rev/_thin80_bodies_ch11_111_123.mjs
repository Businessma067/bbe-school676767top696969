import { applyBodies } from "./_thin80_apply.mjs";

const bodies = {};
function add(key, paras) {
  bodies[key] = paras.join("\n");
}

add("math-11-111:A", [
  "The statement is a claim about Schedule II at $9\\%$: seven due payments of $\\$95{,}000$ for the building site. Schedule I is $\\$500{,}000$ cash. Schedule III is a down payment plus an ordinary annuity. This letter reads the $9\\%$ due cost only.",
  "",
  "The overview recovered that present value as about $\\$521{,}162.27$. This letter is reading the $9\\%$ due cost, not rebuilding the six remaining discounted payments.",
  "",
  "**1.** The trap is $7 \\times 95{,}000 = 665{,}000$, the undiscounted instalments, or cash of $\\$500{,}000$ treated as if it were already Schedule II.",
  "",
  "**2.** A solver who used $13\\%$ here would be answering letter D, where Schedule II falls below cash. At $9\\%$ the recovered due cost still sits above $\\$500{,}000$.",
  "",
  "Due means the first $\\$95{,}000$ is cash today and is rate-invariant. All of the discounting sits in the wait. The opposite verdict would need a different rate or a different instalment. At $9\\%$, the recovered present value of Schedule II is about $\\$521{,}162.27$.",
  "",
  "The recovered $9\\%$ present value of Schedule II is about $\\$521{,}162.27$, so the statement is True.",
]);

add("math-11-111:B", [
  "The statement claims that at $9\\%$, the present value of Schedule III is about $\\$540{,}000$. Schedule III is $\\$150{,}000$ cash plus a ten-year ordinary annuity of $\\$60{,}000$. The round $\\$540{,}000$ is a nearby stand-in.",
  "",
  "The overview recovered about $\\$535{,}059$, not the claimed $\\$540{,}000$. This letter is reading that $9\\%$ mixed cost, not rebuilding Schedule II.",
  "",
  "**1.** The trap is $150{,}000 + 10 \\times 60{,}000$ times some loose discount, or rounding $\\$535{,}059$ up to a clean $\\$540{,}000$. The recovered $9\\%$ cost is about $\\$535{,}059$.",
  "",
  "**2.** A solver who added $150{,}000 + 600{,}000 = 750{,}000$ would skip discounting. A solver who reported Schedule II's $\\$521{,}162$ here would be answering letter A.",
  "",
  "The opposite verdict would need a recovered Schedule III cost of $\\$540{,}000$. With $\\$150{,}000$ down plus ten ordinary $\\$60{,}000$ payments at $9\\%$, the recovered present value is about $\\$535{,}059$, not $\\$540{,}000$.",
  "",
  "The recovered $9\\%$ present value of Schedule III is about $\\$535{,}059$, not $\\$540{,}000$, so the statement is False.",
]);

add("math-11-111:D", [
  "The statement rebuilds Schedule II at $13\\%$ and claims the present value is about $\\$474{,}767.23$. That is the same seven due payments of $\\$95{,}000$, now discounted harder. Letter A was the $9\\%$ figure.",
  "",
  "The overview recovered about $\\$474{,}767.23$. That figure now sits below the $\\$500{,}000$ cash price. Raising the rate from $9\\%$ to $13\\%$ cheapens the six remaining due payments enough to pull Schedule II under cash.",
  "",
  "**1.** The immediate first $\\$95{,}000$ is rate-invariant. All of the cheapening is in the wait. A solver who discounted the first payment as well would understate a due stream.",
  "",
  "**2.** A solver who reported the $9\\%$ figure $\\$521{,}162$ here would be answering letter A. A solver who used $7 \\times 95{,}000$ would skip discounting at both rates.",
  "",
  "The opposite verdict would need a $13\\%$ due cost above cash. With the recovered $\\$474{,}767.23$, Schedule II is cheaper than $\\$500{,}000$ at $13\\%$. The recovered $13\\%$ present value of Schedule II is about $\\$474{,}767.23$.",
  "",
  "The recovered $13\\%$ present value of Schedule II is about $\\$474{,}767.23$, so the statement is True.",
]);

add("math-11-112:A", [
  "The statement is a claim about Schedule II at $8\\%$: nine due payments of $\\$140{,}000$ for the imaging center. Schedule I is $\\$850{,}000$ cash. This letter reads the $8\\%$ due cost only.",
  "",
  "The overview recovered that present value as about $\\$944{,}529.45$. This letter is reading the $8\\%$ due cost, not rebuilding the eight remaining discounted payments.",
  "",
  "**1.** The trap is $9 \\times 140{,}000 = 1{,}260{,}000$, the undiscounted instalments, or cash of $\\$850{,}000$ treated as if it were already Schedule II.",
  "",
  "**2.** A solver who used $12\\%$ here would be answering a later cheaper ranking. At $8\\%$ the recovered due cost still sits well above cash.",
  "",
  "Due means the first $\\$140{,}000$ is cash today. All of the discounting sits in the wait. The opposite verdict would need a different rate or a different instalment. At $8\\%$, the recovered present value of Schedule II is about $\\$944{,}529.45$.",
  "",
  "The recovered $8\\%$ present value of Schedule II is about $\\$944{,}529.45$, so the statement is True.",
]);

add("math-11-112:B", [
  "The statement is a claim about Schedule III at $8\\%$: $\\$300{,}000$ cash plus an eleven-year ordinary annuity of $\\$80{,}000$. That mixed cost sits between cash and Schedule II at $8\\%$.",
  "",
  "The overview recovered about $\\$871{,}117.14$. This letter is reading that $8\\%$ mixed cost, not rebuilding Schedule II's due stream.",
  "",
  "**1.** The trap is rounding to $\\$870{,}000$ or adding $11 \\times 80{,}000$ undiscounted onto the down payment. The recovered $8\\%$ cost is about $\\$871{,}117$.",
  "",
  "**2.** A solver who reported cash $\\$850{,}000$ here would skip the annuity layer. A solver who reported Schedule II's $\\$944{,}529$ would be answering letter A.",
  "",
  "The $\\$300{,}000$ down payment does not move with the rate. The tail does. The opposite verdict would need a different annuity or a different rate. At $8\\%$, the recovered present value of Schedule III is about $\\$871{,}117.14$.",
  "",
  "The recovered $8\\%$ present value of Schedule III is about $\\$871{,}117.14$, so the statement is True.",
]);

add("math-11-112:D", [
  "The statement rebuilds Schedule III at $12\\%$ and claims the present value is about $\\$775{,}015.93$. Letter B was the $8\\%$ mixed cost. Raising the rate cheapens the eleven ordinary $\\$80{,}000$ payments.",
  "",
  "The overview recovered about $\\$775{,}015.93$. That figure now sits well below both cash and Schedule II. The $\\$300{,}000$ down payment does not move. The tail does.",
  "",
  "**1.** Raising the rate from $8\\%$ to $12\\%$ pulls III under the $\\$850{,}000$ cash price by about $\\$75{,}000$. A solver who scaled letter B by $8/12$ would miss that the down payment is rate-invariant.",
  "",
  "**2.** A solver who reported the $8\\%$ figure $\\$871{,}117$ here would be answering letter B. A solver who used $300{,}000 + 11 \\times 80{,}000$ would skip discounting at both rates.",
  "",
  "The opposite verdict would need a $12\\%$ mixed cost above cash. With the recovered $\\$775{,}015.93$, Schedule III is cheaper than $\\$850{,}000$ at $12\\%$.",
  "",
  "The recovered $12\\%$ present value of Schedule III is about $\\$775{,}015.93$, so the statement is True.",
]);

add("math-11-113:A", [
  "The statement is a claim about Schedule II at $7.5\\%$: ten due payments of $\\$340{,}000$ for the cargo vessel. Schedule I is $\\$2{,}400{,}000$ cash. This letter reads the $7.5\\%$ due cost only.",
  "",
  "The overview recovered that present value as about $\\$2{,}508{,}821.59$. That sits above the $\\$2{,}400{,}000$ cash price. This letter is reading the $7.5\\%$ due cost, not the ranking in words.",
  "",
  "**1.** The trap is $10 \\times 340{,}000 = 3{,}400{,}000$, the undiscounted instalments. This letter asks for the $7.5\\%$ due present value.",
  "",
  "**2.** A solver who reported cash $\\$2.4$ million here would skip the due stream. A solver who used a higher rate would be answering a later cheaper ranking, not this $7.5\\%$ figure.",
  "",
  "Due means the first $\\$340{,}000$ is cash today. All of the discounting sits in the nine remaining payments. The opposite verdict would need a different rate or a different instalment. At $7.5\\%$, the recovered present value of Schedule II is about $\\$2{,}508{,}821.59$.",
  "",
  "The recovered $7.5\\%$ present value of Schedule II is about $\\$2{,}508{,}821.59$, so the statement is True.",
]);

add("math-11-113:B", [
  "The statement claims that at $7.5\\%$, the present value of Schedule III is about $\\$2{,}250{,}000$. Schedule III is $\\$600{,}000$ cash plus a nine-year ordinary annuity of $\\$250{,}000$. The round $\\$2.25$ million is a nearby stand-in.",
  "",
  "The overview recovered about $\\$2{,}194{,}722$, not the claimed $\\$2{,}250{,}000$. This letter is reading that $7.5\\%$ mixed cost, not rebuilding Schedule II.",
  "",
  "**1.** The trap is rounding $\\$2{,}194{,}722$ up to a clean $\\$2.25$ million, or adding $9 \\times 250{,}000$ with a loose discount. The recovered $7.5\\%$ cost is about $\\$2{,}194{,}722$.",
  "",
  "**2.** A solver who added $600{,}000 + 2{,}250{,}000$ undiscounted would skip discounting. A solver who reported Schedule II's $\\$2{,}508{,}822$ here would be answering letter A.",
  "",
  "The opposite verdict would need a recovered Schedule III cost of $\\$2{,}250{,}000$. With $\\$600{,}000$ down plus nine ordinary $\\$250{,}000$ payments at $7.5\\%$, the recovered present value is about $\\$2{,}194{,}722$, not $\\$2{,}250{,}000$.",
  "",
  "The recovered $7.5\\%$ present value of Schedule III is about $\\$2{,}194{,}722$, not $\\$2{,}250{,}000$, so the statement is False.",
]);

add("math-11-114:A", [
  "The statement claims the internal rate of return for the bakery oven is exactly $20\\%$. The oven costs $\\$8{,}000$ and returns $\\$9{,}600$ in one year. A one-year project is the payoff over the outlay, minus one.",
  "",
  "The overview recovered $9{,}600/8{,}000 - 1 = 0.20 = 20\\%$. No quadratic is hiding in the background. This letter is reading that one-year IRR.",
  "",
  "**1.** Compute the one-year return on outlay:",
  "",
  "$$9600/8000 - 1 = 0.20$$",
  "",
  "**2.** The trap is $(9{,}600-8{,}000)/9{,}600$, which would report $16.7\\%$ of the payoff rather than of the outlay, or quoting a $20\\%$ profit as if it needed a two-year model.",
  "",
  "The opposite verdict would need a different payoff or a different outlay. With $\\$9{,}600$ on $\\$8{,}000$ in one year, the recovered IRR is exactly $20\\%$. Letters B and C then test NPV on either side of that $20\\%$.",
  "",
  "The recovered IRR is exactly $20\\%$, so the statement is True.",
]);

add("math-11-114:B", [
  "The statement claims that at $15\\%$, the net present value of the oven project is positive. Fifteen percent sits below the recovered $20\\%$ IRR, so a conventional one-year project has to show a surplus.",
  "",
  "NPV at $15\\%$ is $-8{,}000 + 9{,}600/1.15 \\approx 347.83$, which is positive. This letter is the sign test, not a second IRR solve.",
  "",
  "**1.** Discount the single payoff at $15\\%$ and subtract the outlay:",
  "",
  "$$-8000 + 9600/1.15 \\approx 347.83$$",
  "",
  "**2.** The trap is thinking any rate below $20\\%$ could still produce a negative NPV if the dollars were small. For a conventional one-year project, NPV and IRR agree: test rates below IRR give positive NPV.",
  "",
  "A solver who used $9{,}600/1.20$ would be testing the IRR itself and reporting zero. A solver who skipped the outlay would report a huge surplus. The recovered $15\\%$ NPV is about $\\$347.83$, positive.",
  "",
  "The recovered $15\\%$ NPV is about $\\$347.83$, positive, so the statement is True.",
]);

add("math-11-114:C", [
  "The statement claims that at $25\\%$, the net present value of the oven project is positive. Twenty-five percent sits above the recovered $20\\%$ IRR, so a conventional one-year project has to show a shortfall.",
  "",
  "NPV at $25\\%$ is $-8{,}000 + 9{,}600/1.25 = -320$, which is negative. The claim wants a surplus. The recovered sign is a shortfall.",
  "",
  "**1.** Discount the single payoff at $25\\%$ and subtract the outlay:",
  "",
  "$$-8000 + 9600/1.25 = -320$$",
  "",
  "**2.** The trap is mixing this letter with letter B and reporting a surplus at every test rate, or using $9{,}600/1.20$ which would be the IRR zero. Twenty-five percent sits above $20\\%$, so NPV is negative.",
  "",
  "The opposite verdict would need a test rate below $20\\%$. With $r=0.25$, the recovered $25\\%$ NPV is $-\\$320$. The statement says positive, which is the wrong sign.",
  "",
  "The recovered $25\\%$ NPV is $-\\$320$, so the statement is False.",
]);

add("math-11-115:A", [
  "The statement claims the two-year vehicle-upgrade IRR is about $10.92\\%$. The outlay is $\\$12{,}000$, with $\\$7{,}000$ at the end of each of two years. The IRR equation is the quadratic $7s^2 + 7s - 12 = 0$.",
  "",
  "The overview recovered $s \\approx 0.90153$ and $r \\approx 10.92\\%$. This letter is reading that rate. It does not rebuild the quadratic from scratch.",
  "",
  "**1.** The trap is $(7{,}000+7{,}000)/12{,}000 - 1 = 16.7\\%$, which ignores timing, or treating the project as one year of $\\$7{,}000$. Two years of discounting pull the IRR down to about $10.92\\%$.",
  "",
  "**2.** A solver who used $7{,}000/12{,}000 = 58\\%$ would have quoted a one-year stub. A solver who averaged the two $\\$7{,}000$ payoffs as a perpetuity would invent a different rate entirely.",
  "",
  "The opposite verdict would need a different pair of cash flows. With two equal $\\$7{,}000$ returns on $\\$12{,}000$, the recovered IRR is about $10.92\\%$. Letters B and C then test NPV on either side of that rate.",
  "",
  "The recovered IRR is about $10.92\\%$, so the statement is True.",
]);

add("math-11-115:B", [
  "The statement claims that at $8\\%$, the net present value of the vehicle upgrade is positive. Eight percent sits below the recovered $10.92\\%$ IRR, so a conventional project has to show a surplus.",
  "",
  "NPV at $8\\%$ is about $\\$482.85$, positive. The recovered pieces are $7{,}000/1.08 \\approx 6{,}481$ and $7{,}000/1.1664 \\approx 6{,}001$, totalling about $\\$12{,}483$ against the $\\$12{,}000$ outlay.",
  "",
  "**1.** Discount both returns at $8\\%$ and net against the outlay. The surplus is about $\\$483$.",
  "",
  "**2.** The trap is mixing this letter with letter C's $12\\%$ shortfall, or reporting the undiscounted $14{,}000-12{,}000=2{,}000$ as if it were already NPV. Timing is what cuts $2{,}000$ down to about $\\$483$.",
  "",
  "The opposite verdict would need a test rate above $10.92\\%$. With $r=0.08$, the recovered $8\\%$ NPV is about $\\$482.85$, positive. Letter C's $12\\%$ test sits on the other side of that IRR and is a different sign, not a reason to call $8\\%$ a shortfall.",
  "",
  "The recovered $8\\%$ NPV is about $\\$482.85$, positive, so the statement is True.",
]);

add("math-11-115:C", [
  "The statement claims that at $12\\%$, the net present value of the vehicle upgrade is positive. Twelve percent sits above the recovered $10.92\\%$ IRR, so the recovered sign is a shortfall.",
  "",
  "NPV at $12\\%$ is about $-\\$169.64$, negative. The recovered pieces are $7{,}000/1.12 = 6{,}250$ and $7{,}000/1.2544 \\approx 5{,}580$, totalling about $\\$11{,}830$ against the $\\$12{,}000$ outlay.",
  "",
  "**1.** Discount both returns at $12\\%$ and net against the outlay. The shortfall is about $\\$170$.",
  "",
  "**2.** The trap is copying letter B's surplus onto this higher test rate, or using $7{,}000/1.1092$ which would be near the IRR zero. Twelve percent sits above $10.92\\%$, so NPV is negative.",
  "",
  "The opposite verdict would need a test rate below the IRR. With $r=0.12$, the recovered $12\\%$ NPV is about $-\\$169.64$. The statement says positive, which is the wrong sign.",
  "",
  "The recovered $12\\%$ NPV is about $-\\$169.64$, so the statement is False.",
]);

add("math-11-116:A", [
  "The statement claims the boutique project's IRR is about $11.98\\%$. The outlay is $\\$20{,}000$, with $\\$9{,}000$ at the end of Year 1 and $\\$15{,}000$ at the end of Year 2. The IRR equation becomes $15s^2 + 9s - 20 = 0$.",
  "",
  "The overview recovered $s \\approx 0.89304$ and $r \\approx 11.98\\%$. Treating the project as $(9{,}000+15{,}000)/20{,}000 - 1 = 20\\%$ would ignore timing.",
  "",
  "**1.** The trap is that $20\\%$ undiscounted return, or averaging $9$ and $15$ against $20$ as a one-year $20\\%$. Two years of discounting pull the IRR down to about $11.98\\%$.",
  "",
  "**2.** A solver who used only the Year-2 $\\$15{,}000$ over $\\$20{,}000$ would quote $25\\%$ with the wrong clock. The recovered pair of discount factors is what pins $11.98\\%$.",
  "",
  "The opposite verdict would need a different cash-flow pair. With $\\$9{,}000$ then $\\$15{,}000$ on $\\$20{,}000$, the recovered IRR is about $11.98\\%$. Letters B and C test NPV on either side of that rate.",
  "",
  "The recovered IRR is about $11.98\\%$, so the statement is True.",
]);

add("math-11-116:B", [
  "The statement claims that at a $10\\%$ discount rate, the boutique project's NPV is positive. Ten percent sits below the recovered $11.98\\%$ IRR, so a conventional project has to show a surplus.",
  "",
  "NPV at $10\\%$ is about $\\$578.51$, positive. The recovered pieces are $9{,}000/1.10 \\approx 8{,}182$ and $15{,}000/1.21 \\approx 12{,}397$, totalling about $\\$20{,}579$ against the $\\$20{,}000$ outlay.",
  "",
  "**1.** Discount both returns at $10\\%$ and net against the outlay. The surplus is about $\\$579$.",
  "",
  "**2.** The trap is reporting the undiscounted $24{,}000-20{,}000=4{,}000$ as if it were already NPV, or copying letter C's $14\\%$ shortfall onto this lower test rate.",
  "",
  "The opposite verdict would need a test rate above $11.98\\%$. With $r=0.10$, the recovered $10\\%$ NPV is about $\\$578.51$, positive. Letter C's $14\\%$ test sits on the other side of that IRR and is a different sign, not a reason to call $10\\%$ a shortfall.",
  "",
  "The recovered $10\\%$ NPV is about $\\$578.51$, positive, so the statement is True.",
]);

add("math-11-116:C", [
  "The statement claims that at a $14\\%$ discount rate, the boutique project's NPV is positive. Fourteen percent sits above the recovered $11.98\\%$ IRR, so the recovered sign is a shortfall.",
  "",
  "NPV at $14\\%$ is about $-\\$563.25$, negative. The recovered pieces are $9{,}000/1.14 \\approx 7{,}895$ and $15{,}000/1.2996 \\approx 11{,}542$, totalling about $\\$19{,}437$ against the $\\$20{,}000$ outlay.",
  "",
  "**1.** Discount both returns at $14\\%$ and net against the outlay. The shortfall is about $\\$563$.",
  "",
  "**2.** The trap is copying letter B's surplus onto this higher test rate, or using $11.98\\%$ which would be near the IRR zero. Fourteen percent sits above $11.98\\%$, so NPV is negative.",
  "",
  "The opposite verdict would need a test rate below the IRR. With $r=0.14$, the recovered $14\\%$ NPV is about $-\\$563.25$. The statement says positive, which is the wrong sign.",
  "",
  "The recovered $14\\%$ NPV is about $-\\$563.25$, so the statement is False.",
]);

add("math-11-117:A", [
  "The statement claims the IRR of Project X is exactly $15\\%$. Project X is a one-year use of surplus cash: invest $\\$15{,}000$ now, receive $\\$17{,}250$ in one year. No timing puzzle is hiding in a second year.",
  "",
  "The overview recovered $17{,}250/15{,}000 - 1 = 15\\%$. This letter is reading that one-year IRR. Project Y is a different one-year project in letter B.",
  "",
  "**1.** Compute X's return on outlay:",
  "",
  "$$17250/15000 - 1 = 0.15$$",
  "",
  "**2.** The trap is $(17{,}250-15{,}000)/17{,}250 \\approx 13\\%$, profit over payoff rather than over outlay. A solver who used Y's $\\$22{,}000$ here would be answering the wrong project.",
  "",
  "The opposite verdict would need a different X payoff. With $\\$17{,}250$ on $\\$15{,}000$ in one year, the recovered IRR of Project X is exactly $15\\%$. Letter C then ranks X above Y even though Y makes more dollars.",
  "",
  "The recovered IRR of Project X is exactly $15\\%$, so the statement is True.",
]);

add("math-11-117:B", [
  "The statement claims the IRR of Project Y is exactly $12.5\\%$. Project Y is also one year: invest $\\$22{,}000$ now, receive $\\$24{,}750$ in one year. A bigger dollar profit does not mean a bigger rate, because Y invests more.",
  "",
  "The overview recovered $24{,}750/22{,}000 - 1 = 12.5\\%$. Y's profit is $\\$2{,}750$ on $\\$22{,}000$. X's profit is $\\$2{,}250$ on $\\$15{,}000$. Y makes more dollars and a worse rate.",
  "",
  "**1.** Compute Y's return on outlay:",
  "",
  "$$24750/22000 - 1 = 0.125$$",
  "",
  "**2.** The trap is ranking by dollar profit and quoting something above $15\\%$ for Y, or using $(24{,}750-22{,}000)/24{,}750 \\approx 11.1\\%$ against the payoff. That is letter C's ranking neighbourhood, not a different IRR.",
  "",
  "The opposite verdict would need a different Y payoff. With $\\$24{,}750$ on $\\$22{,}000$ in one year, the recovered IRR of Project Y is exactly $12.5\\%$.",
  "",
  "The recovered IRR of Project Y is exactly $12.5\\%$, so the statement is True.",
]);

add("math-11-118:A", [
  "The statement claims that at $r=8\\%$, the manufacturing upgrade's NPV is about $\\$4{,}012$. The outlay is $\\$45{,}000$, year 1 is a $\\$3{,}000$ installation outflow, then $\\$28{,}000$ and $\\$35{,}000$ of returns. Year 1 enters with a minus sign.",
  "",
  "The overview recovered NPV about $\\$4{,}012$. The recovered pieces are about $-2{,}778$, $+24{,}005$, and $+27{,}784$ around the $-45{,}000$ outlay. Net is about $\\$4{,}012$.",
  "",
  "**1.** A solver who treated year 1 as an inflow would overstate NPV by about $\\$5{,}556$. The stem lists $a_1$ as a cash outflow.",
  "",
  "**2.** A solver who reported the undiscounted $-45{,}000-3{,}000+28{,}000+35{,}000=15{,}000$ would skip discounting. Timing is what cuts that $15{,}000$ down to about $\\$4{,}012$.",
  "",
  "The opposite verdict would need a different test rate or a sign flip on year 1. At $8\\%$, the recovered NPV is about $\\$4{,}012$. Letters B and D sit at higher rates where the surplus disappears.",
  "",
  "The recovered $8\\%$ NPV is about $\\$4{,}012$, so the statement is True.",
]);

add("math-11-118:B", [
  "The statement claims that at $r=12\\%$, the manufacturing upgrade's NPV is positive. Twelve percent sits above this project's IRR, so the recovered sign is a shortfall.",
  "",
  "NPV at $12\\%$ is about $-\\$445$, negative. The recovered pieces are about $-2{,}679$, $+22{,}321$, and $+24{,}912$ around $-45{,}000$. Net is about $-\\$445$. The claim wants a surplus.",
  "",
  "**1.** The trap is copying letter A's $8\\%$ surplus onto this higher test rate. Raising the rate from $8\\%$ to $12\\%$ is what flips the sign.",
  "",
  "**2.** A solver who treated year 1 as an inflow would still overstate, perhaps enough to manufacture a surplus at $12\\%$. The stem lists $a_1=-3{,}000$.",
  "",
  "The opposite verdict would need a test rate below the IRR, as in letter A. With $r=0.12$, the recovered $12\\%$ NPV is negative. The statement says positive, which is the wrong sign.",
  "",
  "The recovered $12\\%$ NPV is negative, so the statement is False.",
]);

add("math-11-118:D", [
  "The statement claims that at $r=15\\%$, the manufacturing upgrade's NPV is about $-\\$3{,}424$. That is a deeper shortfall than letter B's $12\\%$ figure of about $\\$445$.",
  "",
  "The overview recovered that $15\\%$ NPV as about $-\\$3{,}424$. This letter is reading the deeper shortfall, not rebuilding the $8\\%$ surplus.",
  "",
  "**1.** The trap is reporting the $12\\%$ shortfall of about $\\$445$ as if it were already the $15\\%$ figure, or dropping the minus sign. The recovered $15\\%$ NPV is about $-\\$3{,}424$.",
  "",
  "**2.** A solver who used $8\\%$ here would quote letter A's surplus with the wrong sign. A solver who skipped the year-1 outflow would understate the shortfall.",
  "",
  "Raising the rate from $12\\%$ to $15\\%$ deepens the shortfall by about $\\$3{,}000$. The opposite verdict would need a different test rate. At $15\\%$, the recovered NPV is about $-\\$3{,}424$.",
  "",
  "The recovered $15\\%$ NPV is about $-\\$3{,}424$, so the statement is True.",
]);

add("math-11-118:E", [
  "The statement claims $a_1$, $a_2$, and $a_3$ are all positive. Year 1 is a $\\$3{,}000$ installation outflow, so $a_1 = -3{,}000$. The uniqueness shortcut that needs every later cash flow positive does not apply here.",
  "",
  "The stem lists year 1 as a cash outflow caused by installation disruption, then net returns of $\\$28{,}000$ and $\\$35{,}000$. Only the last two later flows are positive.",
  "",
  "**1.** The trap is reading \"net returns of $\\$28{,}000$ and $\\$35{,}000$\" back onto year 1, or treating a disruption cost as if it were already netted into the outlay. The stem lists $a_1$ as a cash outflow.",
  "",
  "**2.** A solver who folded $-3{,}000$ into the $\\$45{,}000$ outlay would then call $a_1$ missing rather than negative. The recovered $a_1$ is negative, which is why Descartes' sign pattern is not the all-positive later-flow shortcut.",
  "",
  "The opposite verdict would need year 1 to be a return. With $a_1=-3{,}000$, the three later cash flows are not all positive.",
  "",
  "The recovered $a_1$ is negative, so the statement is False.",
]);

add("math-11-119:B", [
  "The statement claims that at $9\\%$, the espresso-line project's NPV is negative. Nine percent sits below the recovered $10.78\\%$ IRR, so a conventional project has to show a surplus. The claim's negative sign is backwards.",
  "",
  "NPV at $9\\%$ is about $\\$879$, positive. The recovered pieces are $16{,}000/1.09 \\approx 14{,}679$ and $24{,}000/1.1881 \\approx 20{,}200$, totalling about $\\$34{,}879$ against the $\\$34{,}000$ outlay.",
  "",
  "**1.** Discount both returns at $9\\%$ and net against the outlay. The surplus is about $\\$879$.",
  "",
  "**2.** The trap is mixing this letter with letter C's $13\\%$ shortfall, or thinking any two-year project at $9\\%$ must be negative because $9\\%$ looks \"high.\" Nine percent is still below $10.78\\%$.",
  "",
  "The opposite verdict would need a test rate above the IRR. With $r=0.09$, the recovered $9\\%$ NPV is about $\\$879$, positive. The statement says negative, which is the wrong sign.",
  "",
  "The recovered $9\\%$ NPV is about $\\$879$, positive, so the statement is False.",
]);

add("math-11-119:C", [
  "The statement claims that at $13\\%$, the espresso-line project's NPV is negative. Thirteen percent sits above the recovered $10.78\\%$ IRR, so a conventional project has to show a shortfall.",
  "",
  "NPV at $13\\%$ is about $-\\$1{,}045$, negative. The recovered pieces are $16{,}000/1.13 \\approx 14{,}159$ and $24{,}000/1.2769 \\approx 18{,}796$, totalling about $\\$32{,}955$ against the $\\$34{,}000$ outlay.",
  "",
  "**1.** Discount both returns at $13\\%$ and net against the outlay. The shortfall is about $\\$1{,}045$.",
  "",
  "**2.** The trap is copying letter B's $9\\%$ surplus onto this higher test rate, or using $10.78\\%$ which would be near the IRR zero. Thirteen percent sits above $10.78\\%$, so NPV is negative.",
  "",
  "The opposite verdict would need a test rate below the IRR. With $r=0.13$, the recovered $13\\%$ NPV is about $-\\$1{,}045$. The statement's negative sign matches that shortfall.",
  "",
  "The recovered $13\\%$ NPV is about $-\\$1{,}045$, so the statement is True.",
]);

add("math-11-120:A", [
  "The statement claims that at $r=15\\%$, the warehouse-automation NPV is $\\$0$ to the nearest dollar. Fifteen percent zeroes the project, which is the definition of IRR. Letters B and C are the off-IRR tests.",
  "",
  "Discount both returns at $15\\%$: $22{,}000/1.15 + 27{,}600/1.3225 = 19{,}130.43 + 20{,}869.57 = 40{,}000$. NPV is $\\$0$ to the nearest dollar. The overview recovered that zero.",
  "",
  "**1.** The two discounted returns add to the $\\$40{,}000$ outlay on the nose, to the nearest dollar. That is the IRR check, not a nearby test rate.",
  "",
  "**2.** The trap is testing $10\\%$ or $20\\%$ and reporting those NPVs as if they were already zero. Letters B and C are those off-IRR tests. This letter is the zero itself.",
  "",
  "The opposite verdict would need a different pair of returns. With $\\$22{,}000$ then $\\$27{,}600$ on $\\$40{,}000$, the recovered $15\\%$ NPV is $\\$0$ to the nearest dollar.",
  "",
  "The recovered $15\\%$ NPV is $\\$0$, so the statement is True.",
]);

add("math-11-120:B", [
  "The statement claims that at $10\\%$, the warehouse project's NPV is positive. Ten percent sits below the recovered $15\\%$ IRR, so a conventional project has to show a surplus.",
  "",
  "NPV at $10\\%$ is about $\\$2{,}810$, positive. The recovered pieces are $22{,}000/1.10 = 20{,}000$ and $27{,}600/1.21 \\approx 22{,}810$, totalling about $\\$42{,}810$ against the $\\$40{,}000$ outlay.",
  "",
  "**1.** Discount both returns at $10\\%$ and net against the outlay. The surplus is about $\\$2{,}810$.",
  "",
  "**2.** The trap is reporting letter A's zero here, or copying letter C's $20\\%$ shortfall onto this lower test rate. Ten percent sits five points below IRR.",
  "",
  "The opposite verdict would need a test rate above $15\\%$. With $r=0.10$, the recovered $10\\%$ NPV is about $\\$2{,}810$, positive. Letter C's $20\\%$ shortfall of $\\$2{,}500$ is the mirror image on the other side of the IRR, not a reason to call $10\\%$ a shortfall.",
  "",
  "The recovered $10\\%$ NPV is about $\\$2{,}810$, positive, so the statement is True.",
]);

add("math-11-120:C", [
  "The statement claims that at $20\\%$, the warehouse project's NPV is negative. Twenty percent sits above the recovered $15\\%$ IRR, so a conventional project has to show a shortfall.",
  "",
  "NPV at $20\\%$ is $-\\$2{,}500$, negative. The recovered pieces are $22{,}000/1.20 \\approx 18{,}333$ and $27{,}600/1.44 \\approx 19{,}167$, totalling $\\$37{,}500$ against the $\\$40{,}000$ outlay. The shortfall is exactly $\\$2{,}500$.",
  "",
  "**1.** Discount both returns at $20\\%$ and net against the outlay. The shortfall is $\\$2{,}500$ on the nose.",
  "",
  "**2.** The trap is reporting letter A's zero here, or copying letter B's surplus onto this higher test rate. Twenty percent sits five points above IRR.",
  "",
  "The opposite verdict would need a test rate below $15\\%$. With $r=0.20$, the recovered $20\\%$ NPV is $-\\$2{,}500$. The statement's negative sign matches that shortfall. Letter B's $10\\%$ surplus is the mirror image, not a reason to call $20\\%$ a surplus.",
  "",
  "The recovered $20\\%$ NPV is $-\\$2{,}500$, so the statement is True.",
]);

add("math-11-120:D", [
  "The statement claims the sum of all the project's cash flows, $a_0+a_1+a_2$, equals $\\$9{,}600$. That is the undiscounted total, a zero-rate NPV, not a present value at $10\\%$ or $15\\%$.",
  "",
  "Add the three cash flows at a zero rate: $-40{,}000 + 22{,}000 + 27{,}600 = 9{,}600$. A positive undiscounted total is why the unique IRR is positive. It is not a present value.",
  "",
  "**1.** Sum the three signed cash flows:",
  "",
  "$$-40000 + 22000 + 27600 = 9600$$",
  "",
  "**2.** The trap is reporting NPV at $10\\%$ as if it were the undiscounted sum, or using $22{,}000 + 27{,}600$ without the outlay. The recovered sum is $\\$9{,}600$.",
  "",
  "The opposite verdict would need a different outlay or a different pair of returns. With $-40{,}000$, $22{,}000$, and $27{,}600$ as written, the recovered cash-flow sum is $\\$9{,}600$.",
  "",
  "The recovered cash-flow sum is $\\$9{,}600$, so the statement is True.",
]);

add("math-11-121:A", [
  "The statement claims the rental-unit renovation IRR is about $10.69\\%$. The outlay is $\\$65{,}000$, with $\\$34{,}000$ then $\\$42{,}000$ of net rent. The two-year IRR equation becomes $42s^2 + 34s - 65 = 0$.",
  "",
  "The overview recovered $s \\approx 0.90346$ and $r \\approx 10.69\\%$. Averaging the two rents against $\\$65{,}000$ as a one-year rate would overstate the return.",
  "",
  "**1.** The trap is $(34{,}000+42{,}000)/65{,}000 - 1 \\approx 16.9\\%$, which ignores that half the cash arrives a year later. Two years of discounting pull the IRR down to about $10.69\\%$.",
  "",
  "**2.** A solver who used only Year-2 $\\$42{,}000$ over $\\$65{,}000$ would quote about $35\\%$ with the wrong clock. The recovered quadratic is what pins $10.69\\%$.",
  "",
  "The opposite verdict would need a different rent pair. With $\\$34{,}000$ then $\\$42{,}000$ on $\\$65{,}000$, the recovered IRR is about $10.69\\%$. Letters B and C test NPV on either side of that rate.",
  "",
  "The recovered IRR is about $10.69\\%$, so the statement is True.",
]);

add("math-11-121:B", [
  "The statement claims that at $9\\%$, the renovation project's NPV is positive. Nine percent sits below the recovered $10.69\\%$ IRR, so a conventional project has to show a surplus.",
  "",
  "NPV at $9\\%$ is about $\\$1{,}543$, positive. The recovered pieces are $34{,}000/1.09 \\approx 31{,}193$ and $42{,}000/1.1881 \\approx 35{,}351$, totalling about $\\$66{,}543$ against the $\\$65{,}000$ outlay.",
  "",
  "**1.** Discount both rents at $9\\%$ and net against the outlay. The surplus is about $\\$1{,}543$.",
  "",
  "**2.** The trap is copying letter C's $12\\%$ shortfall onto this lower test rate, or reporting the undiscounted $76{,}000-65{,}000=11{,}000$ as if it were already NPV.",
  "",
  "The opposite verdict would need a test rate above $10.69\\%$. With $r=0.09$, the recovered $9\\%$ NPV is about $\\$1{,}543$, positive. Letter C's $12\\%$ test sits on the other side of that IRR and is a different sign, not a reason to call $9\\%$ a shortfall.",
  "",
  "The recovered $9\\%$ NPV is about $\\$1{,}543$, positive, so the statement is True.",
]);

add("math-11-121:C", [
  "The statement claims that at $12\\%$, the renovation project's NPV is positive. Twelve percent sits above the recovered $10.69\\%$ IRR, so the recovered sign is a shortfall.",
  "",
  "NPV at $12\\%$ is about $-\\$1{,}161$, negative. The recovered pieces are $34{,}000/1.12 \\approx 30{,}357$ and $42{,}000/1.2544 \\approx 33{,}482$, totalling about $\\$63{,}839$ against the $\\$65{,}000$ outlay.",
  "",
  "**1.** Discount both rents at $12\\%$ and net against the outlay. The shortfall is about $\\$1{,}161$.",
  "",
  "**2.** The trap is copying letter B's surplus onto this higher test rate, or using $10.69\\%$ which would be near the IRR zero. Twelve percent sits above $10.69\\%$, so NPV is negative.",
  "",
  "The opposite verdict would need a test rate below the IRR. With $r=0.12$, the recovered $12\\%$ NPV is about $-\\$1{,}161$. The statement says positive, which is the wrong sign.",
  "",
  "The recovered $12\\%$ NPV is about $-\\$1{,}161$, so the statement is False.",
]);

add("math-11-122:A", [
  "The statement claims the limiting internal rate of return of Option 1 is $12\\%$. Option 1 is a level $\\$6{,}000$ perpetuity on a $\\$50{,}000$ outlay, the full software version that pays forever. Option 2 is a two-year stub, a different clock.",
  "",
  "A level $\\$6{,}000$ perpetuity on $\\$50{,}000$ is $6{,}000/50{,}000 = 12\\%$. That is the infinite-horizon IRR, not a two-year stub.",
  "",
  "**1.** Compute the perpetuity yield:",
  "",
  "$$6000/50000 = 0.12$$",
  "",
  "**2.** The trap is treating Option 1 as if it were Option 2's two-year stub, which has a large negative IRR. Forever of $\\$6{,}000$ on $\\$50{,}000$ is $12\\%$. A solver who used $6{,}000 \\times 2 / 50{,}000$ would be answering a two-year undiscounted return.",
  "",
  "The opposite verdict would need a different annual return or a different outlay. With $\\$6{,}000$ forever on $\\$50{,}000$, the recovered limiting IRR of Option 1 is $12\\%$.",
  "",
  "The recovered limiting IRR of Option 1 is $12\\%$, so the statement is True.",
]);

add("math-11-123:A", [
  "The statement claims Design A's IRR is about $11.04\\%$. Design A is a two-year solar project: invest $\\$120{,}000$, with $\\$54{,}000$ then $\\$88{,}000$ of net returns. The two-year equation becomes $44s^2 + 27s - 60 = 0$.",
  "",
  "The overview recovered $s \\approx 0.90057$ and $r_A \\approx 11.04\\%$. Treating $\\$54{,}000+\\$88{,}000$ against $\\$120{,}000$ as a one-year $18\\%$ return would ignore timing.",
  "",
  "**1.** The trap is that $18\\%$ undiscounted return, or averaging $54$ and $88$ against $120$. Two years of discounting pull A's IRR down to about $11.04\\%$.",
  "",
  "**2.** A solver who used Design B's one-year $16\\%$ here would be answering letter B. A's longer clock is why a larger dollar payoff can still post a lower rate than B.",
  "",
  "The opposite verdict would need a different A cash-flow pair. With $\\$54{,}000$ then $\\$88{,}000$ on $\\$120{,}000$, the recovered IRR of Design A is about $11.04\\%$.",
  "",
  "The recovered IRR of Design A is about $11.04\\%$, so the statement is True.",
]);

add("math-11-123:B", [
  "The statement claims Design B's IRR is exactly $16\\%$. Design B is a one-year solar project: invest $\\$70{,}000$, receive $\\$81{,}200$ in one year. No quadratic is required. B's shorter clock is why a smaller dollar payoff can still post a higher rate than A.",
  "",
  "The overview recovered $81{,}200/70{,}000 - 1 = 16\\%$. This letter is reading that one-year IRR. Design A's $11.04\\%$ is letter A's object.",
  "",
  "**1.** Compute B's return on outlay:",
  "",
  "$$81200/70000 - 1 = 0.16$$",
  "",
  "**2.** The trap is $(81{,}200-70{,}000)/81{,}200 \\approx 13.8\\%$, profit over payoff, or thinking B must have a lower rate because it invests less. The recovered IRR is exactly $16\\%$.",
  "",
  "The opposite verdict would need a different B payoff. With $\\$81{,}200$ on $\\$70{,}000$ in one year, the recovered IRR of Design B is exactly $16\\%$. Ranking A against B is a later letter.",
  "",
  "The recovered IRR of Design B is exactly $16\\%$, so the statement is True.",
]);

const r = applyBodies(bodies);
console.log("111-123 applied", r.n, "wrote", r.wrote);
if (r.errors.length) console.log("ERRORS", r.errors);
const bad = r.stats.filter((s) => !s.ok);
console.log("out of range", bad.map((s) => s.key + " " + s.wc).join(", ") || 0);
