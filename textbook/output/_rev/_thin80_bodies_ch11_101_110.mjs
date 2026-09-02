import { applyBodies } from "./_thin80_apply.mjs";

const bodies = {};
function add(key, paras) {
  bodies[key] = paras.join("\n");
}

add("math-11-101:A", [
  "The statement is a claim about the periodic rate in the bakery's payment formula. The van-and-cooler loan quotes $12\\%$ per year with six equal instalments at the end of each year. Annual payments keep the annual rate intact, so the periodic rate is $r=0.12$.",
  "",
  "The overview recovered that periodic rate as $0.12$. This letter is reading the compounding clock, not inverting $1-(1.12)^{-6}$. Six year-end instalments mean six interest dates a year apart.",
  "",
  "**1.** The trap is dividing by $12$ as if the bakery paid monthly. $0.12/12=0.01$ would be the monthly rate on a different schedule. This loan has six year-end instalments, not $72$ monthly ones.",
  "",
  "**2.** A solver who used $0.12/6$ would invent a $2\\%$ period that the stem never described. A solver who used $12$ itself, rather than $0.12$, would be feeding percent into a decimal formula.",
  "",
  "The opposite verdict would need monthly or quarterly compounding. With interest charged at $12\\%$ per year, compounding annually, the recovered periodic rate is $0.12$. The payment size in letter B uses that $r$, not a monthly rewrite.",
  "",
  "The recovered periodic rate is $0.12$, so the statement is True.",
]);

add("math-11-101:B", [
  "The statement is a claim about the equal annual payment on the $\\$60{,}000$ van-and-cooler loan. Six year-end instalments at $r=0.12$ invert to about $\\$14{,}593.54$. This letter is reading that instalment, not rebuilding $1-(1.12)^{-6}$.",
  "",
  "The overview recovered the equal annual payment as about $\\$14{,}593.54$. Letter A already pinned the periodic rate. This letter asks whether that recovered payment is the number in the claim.",
  "",
  "**1.** The trap is $60{,}000/6 = 10{,}000$, which ignores interest. Splitting principal into six equal pieces is an interest-free story.",
  "",
  "**2.** Another trap is $0.12 \\times 60{,}000 = 7{,}200$, which is year-1 interest rather than the payment. Interest of $\\$7{,}200$ plus a guessed principal slice can manufacture a neighbour of $\\$14{,}593$, but the honest inversion is the recovered annuity payment.",
  "",
  "A solver who used monthly $r=0.01$ for $72$ months would quote a different instalment entirely. The opposite verdict would need a different principal, rate, or horizon. With $\\$60{,}000$ over six annual dates at $12\\%$, the recovered annual payment is about $\\$14{,}593.54$.",
  "",
  "The recovered annual payment is about $\\$14{,}593.54$, so the statement is True.",
]);

add("math-11-101:C", [
  "The statement is a claim about the interest portion of the first payment on the bakery loan. Year-1 interest is the opening balance times the rate. It does not depend on how large the instalment is.",
  "",
  "The overview recovered that first-year interest as exactly $\\$7{,}200$. The extra arithmetic is only $0.12 \\times 60{,}000$. This letter does not invert the payment formula again.",
  "",
  "**1.** Compute opening interest:",
  "",
  "$$0.12 \\times 60{,}000 = 7{,}200$$",
  "",
  "**2.** The trap is charging $12\\%$ of the instalment, $0.12 \\times 14{,}593.54 \\approx 1{,}751$, which is interest on the payment instead of on the loan. A solver who split the payment in half would report about $\\$7{,}297$ and miss the exact $\\$7{,}200$.",
  "",
  "Principal in year 1 is then $14{,}593.54-7{,}200=7{,}393.54$, which is letter D's neighbourhood. This letter stops at the interest layer. The opposite verdict would need a different opening balance or a different annual rate.",
  "",
  "The recovered first-year interest is exactly $\\$7{,}200$, so the statement is True.",
]);

add("math-11-102:A", [
  "The statement is a claim about the monthly periodic rate on the dealership loan. A $9\\%$ nominal rate charged monthly is split evenly across twelve dates. The vehicle is $\\$24{,}000$ over four years, but those dollars do not enter the rate split.",
  "",
  "The overview recovered $0.09/12 = 0.0075 = 0.75\\%$. This letter is reading that monthly rate. It does not invert the $48$-month payment.",
  "",
  "**1.** Split the nominal rate across twelve months:",
  "",
  "$$0.09/12 = 0.0075 = 0.75\\%$$",
  "",
  "**2.** The trap is using $9\\%$ itself as the monthly rate, which would overstate every payment, or dividing by $52$ as if the dealer charged weekly. A solver who used $0.09/4$ would invent a quarterly clock the stem did not describe.",
  "",
  "The opposite verdict would need annual instalments, where $r=0.09$ would be the periodic rate. This loan pays monthly, so the recovered monthly rate is $0.75\\%$. Letter B's $\\$597.24$ uses that $r$, not $9\\%$ per month.",
  "",
  "The recovered monthly rate is $0.75\\%$, so the statement is True.",
]);

add("math-11-102:B", [
  "The statement is a claim about the required monthly payment on the $\\$24{,}000$ vehicle. Forty-eight months at $0.75\\%$ invert to about $\\$597.24$. This letter is reading that monthly instalment, not rebuilding the annuity factor.",
  "",
  "The overview recovered the monthly payment as about $\\$597.24$. Letter A already pinned $r=0.0075$. This letter asks whether that recovered payment is the number in the claim.",
  "",
  "**1.** The trap is $24{,}000/48 = 500$, which ignores interest. Splitting principal into forty-eight equal pieces is an interest-free story.",
  "",
  "**2.** Another trap is $0.09/12 \\times 24{,}000 = 180$, which is the first month's interest rather than the payment. A solver who used annual $r=0.09$ for four payments would quote letter E's neighbourhood, about $\\$7{,}408$, not a monthly figure.",
  "",
  "The opposite verdict would need a different principal, rate, or term. With $\\$24{,}000$ over $48$ months at $0.75\\%$ per month, the recovered monthly payment is about $\\$597.24$.",
  "",
  "The recovered monthly payment is about $\\$597.24$, so the statement is True.",
]);

add("math-11-102:C", [
  "The statement claims the total amount paid over all $48$ monthly payments is about $\\$29{,}500$. Total paid is forty-eight copies of the recovered instalment, not a round stand-in.",
  "",
  "Forty-eight copies of $\\$597.24$ are about $\\$28{,}667.57$, not the claimed $\\$29{,}500$. The extra $\\$832$ is a rounded-up stand-in.",
  "",
  "**1.** Multiply the recovered payment by the term:",
  "",
  "$$597.24 \\times 48 = 28{,}667.52$$",
  "",
  "rounding to about $\\$28{,}667.57$ in the overview.",
  "",
  "**2.** The claim's $\\$29{,}500$ is what you get by rounding the payment up to $\\$615$, or by adding a loose $\\$800$ of \"fees.\" A solver who used $500 \\times 48 + 5{,}500$ of invented interest could also manufacture $\\$29{,}500$.",
  "",
  "The opposite verdict would need a recovered total of $\\$29{,}500$. With $a \\approx 597.24$ and $n=48$, the recovered total paid is about $\\$28{,}667.57$, not $\\$29{,}500$.",
  "",
  "The recovered total paid is about $\\$28{,}667.57$, not $\\$29{,}500$, so the statement is False.",
]);

add("math-11-102:D", [
  "The statement claims the total interest paid over the life of the loan is about $\\$4{,}667.57$. Interest is total paid minus principal. Letter C already has total paid about $\\$28{,}667.57$ against a $\\$24{,}000$ vehicle.",
  "",
  "The extra arithmetic is only that subtraction. This letter does not invert the payment formula again.",
  "",
  "**1.** Subtract principal from the recovered total paid:",
  "",
  "$$28{,}667.57 - 24{,}000 = 4{,}667.57$$",
  "",
  "**2.** The trap is $9\\% \\times 4 \\times 24{,}000 = 8{,}640$ of simple interest, as if the whole principal sat for four years. Amortization pays principal down along the way, so the interest bill is the recovered $\\$4{,}667.57$, not $\\$8{,}640$.",
  "",
  "A solver who used letter C's false $\\$29{,}500$ minus $\\$24{,}000$ would report $\\$5{,}500$ and miss the claim. The opposite verdict would need a different total paid. With the recovered $48$-month outlay, total interest is about $\\$4{,}667.57$.",
  "",
  "The recovered total interest is about $\\$4{,}667.57$, so the statement is True.",
]);

add("math-11-103:A", [
  "The statement is a claim about the equal annual payment on the restaurant renovation loan. Five year-end instalments at $10\\%$ on $\\$45{,}000$ invert to about $\\$11{,}870.89$. This letter is reading that renovation instalment.",
  "",
  "The overview recovered the equal annual payment as about $\\$11{,}870.89$. This letter does not rebuild $1-(1.10)^{-5}$. It only asks whether that recovered payment is the number in the claim.",
  "",
  "**1.** The trap is $45{,}000/5 = 9{,}000$, which ignores interest. Splitting principal into five equal pieces is an interest-free story.",
  "",
  "**2.** Another trap is $0.10 \\times 45{,}000 = 4{,}500$, which is year-1 interest rather than the payment. A solver who added $\\$4{,}500$ onto $\\$9{,}000$ would report $\\$13{,}500$ and overshoot. A solver who used six years would quote the bakery-loan neighbourhood from the previous task.",
  "",
  "The opposite verdict would need a different principal, rate, or horizon. With $\\$45{,}000$ over five annual dates at $10\\%$, the recovered annual payment is about $\\$11{,}870.89$.",
  "",
  "The recovered annual payment is about $\\$11{,}870.89$, so the statement is True.",
]);

add("math-11-103:B", [
  "The statement claims the interest portion of the first payment is $\\$5{,}000$. Year-1 interest is the opening balance times the rate. The renovation loan opens at $\\$45{,}000$ and charges $10\\%$ annually.",
  "",
  "Year-1 interest is $0.10 \\times 45{,}000 = 4{,}500$. The claim writes $\\$5{,}000$, which is $10\\%$ of a round $\\$50{,}000$ loan that this renovation is not.",
  "",
  "**1.** Compute opening interest on the actual principal:",
  "",
  "$$0.10 \\times 45{,}000 = 4{,}500$$",
  "",
  "**2.** The extra $\\$500$ is the tell. A solver who rounded the loan up to $\\$50{,}000$, or who took $10\\%$ of a $\\$50{,}000$ stand-in, would manufacture $\\$5{,}000$. A solver who charged $10\\%$ of the $\\$11{,}870.89$ instalment would undershoot at about $\\$1{,}187$.",
  "",
  "The opposite verdict would need an opening balance of $\\$50{,}000$. With $\\$45{,}000$ at $10\\%$, the recovered first-year interest is $\\$4{,}500$, not $\\$5{,}000$.",
  "",
  "The recovered first-year interest is $\\$4{,}500$, not $\\$5{,}000$, so the statement is False.",
]);

add("math-11-104:A", [
  "The statement is a claim about the combined present-value factor on the franchise buy-in. Ten payments, first one due immediately, at $11\\%$, is an annuity due. The factor is $1$ plus nine discounted ordinary payments.",
  "",
  "The overview recovered that combined present-value factor as about $6.537048$. This letter is reading the factor, not the payment. The $\\$150{,}000$ buy-in is divided by this factor in letter B.",
  "",
  "**1.** The trap is the ordinary ten-year annuity factor $1-(1.11)^{-10}$ over $0.11$, about $5.889$, which omits the immediate first payment. Due means the first payment is cash today, so the factor is larger.",
  "",
  "**2.** A solver who used $10$ itself would be an undiscounted count. A solver who used $1.11 \\times 5.889$ and rounded carelessly could still land near $6.537$, which is a check, not a reason to quote $5.889$ here.",
  "",
  "The opposite verdict would need ordinary timing. With a ten-payment due stream at $11\\%$, the recovered combined factor is about $6.537048$.",
  "",
  "The recovered combined factor is about $6.537048$, so the statement is True.",
]);

add("math-11-104:B", [
  "The statement is a claim about the required equal due payment $a$ on the $\\$150{,}000$ franchise. Divide the buy-in by the recovered due factor from letter A.",
  "",
  "The extra arithmetic is $150{,}000 / 6.537048 \\approx 22{,}946.14$. The overview recovered that due payment. This letter does not rebuild the factor from scratch.",
  "",
  "**1.** Divide the buy-in by the recovered due factor:",
  "",
  "$$150{,}000 / 6.537048 \\approx 22{,}946.14$$",
  "",
  "**2.** The trap is $150{,}000/10 = 15{,}000$, which ignores both interest and the immediate first payment, or the ordinary payment of about $\\$25{,}470$ from letter C, which waits a year to start and therefore has to be larger.",
  "",
  "A solver who used factor $5.889$ would quote that larger ordinary payment here. The opposite verdict would need ordinary timing or a different buy-in. With the due factor $6.537048$, the recovered equal due payment is about $\\$22{,}946.14$.",
  "",
  "The recovered equal due payment is about $\\$22{,}946.14$, so the statement is True.",
]);

add("math-11-104:E", [
  "The statement claims the total of all $10$ annuity-due payments combined is about $\\$220{,}000$. Total cash outlay is ten copies of the recovered due payment, not a round $\\$22{,}000$ times ten.",
  "",
  "Ten copies of $\\$22{,}946.14$ are about $\\$229{,}461.39$, not the claimed $\\$220{,}000$. The round $\\$220{,}000$ is ten copies of $\\$22{,}000$.",
  "",
  "**1.** Multiply the recovered due payment by ten:",
  "",
  "$$22{,}946.14 \\times 10 \\approx 229{,}461$$",
  "",
  "**2.** A solver who rounded the payment down to $\\$22{,}000$, or who used $22{,}000 \\times 10$, would land on the claim. A solver who reported present value $\\$150{,}000$ here would be answering the buy-in, not the undiscounted cash outlay.",
  "",
  "The opposite verdict would need a recovered payment of $\\$22{,}000$. With $a \\approx 22{,}946.14$, the recovered total of the ten due payments is about $\\$229{,}461.39$, not $\\$220{,}000$.",
  "",
  "The recovered total of the ten due payments is about $\\$229{,}461.39$, not $\\$220{,}000$, so the statement is False.",
]);

add("math-11-105:B", [
  "The statement claims the first four payments are each exactly $\\$10{,}000$, totalling $\\$40{,}000$. The landscaping loan commits to $\\$10{,}000$ at the end of each year until a smaller final payment settles the rest. This letter is a count, not a second inversion of the $4.966$ threshold.",
  "",
  "Four full payments total $\\$40{,}000$. The overview already has that schedule: $10{,}000$ a year until the last (smaller) instalment. Letter C recovers that last payment; this letter stops after year four.",
  "",
  "**1.** Four copies of the committed payment:",
  "",
  "$$4 \\times 10{,}000 = 40{,}000$$",
  "",
  "**2.** The trap is counting five full $\\$10{,}000$ payments, which is letter D's total before the smaller fifth instalment is used. A solver who included the recovered $\\$9{,}682.53$ here would be answering the life-of-loan total, not the first four years.",
  "",
  "The opposite verdict would need a different committed payment or fewer than four full years. With $\\$10{,}000$ a year for the first four dates, the first four payments total $\\$40{,}000$.",
  "",
  "The first four payments total $\\$40{,}000$, so the statement is True.",
]);

add("math-11-105:D", [
  "The statement claims the total amount paid over the entire life of the loan is about $\\$49{,}682.53$. That total is four full payments plus the recovered final instalment. Five copies of $\\$10{,}000$ would overstate the total by about $\\$317$.",
  "",
  "Four full payments plus the recovered final instalment are $40{,}000 + 9{,}682.53 = 49{,}682.53$. Letter C already recovered that last payment. This letter only adds it to letter B's $\\$40{,}000$.",
  "",
  "**1.** Add the recovered stub to the four full payments:",
  "",
  "$$40{,}000 + 9{,}682.53 = 49{,}682.53$$",
  "",
  "**2.** The trap is $5 \\times 10{,}000 = 50{,}000$, which ignores that the last payment is smaller. A solver who used $4 \\times 10{,}000 + 10{,}000$ would be that same five-copy overstatement.",
  "",
  "The opposite verdict would need a final payment of $\\$10{,}000$. With the recovered stub $9{,}682.53$, the recovered life-of-loan total is about $\\$49{,}682.53$.",
  "",
  "The recovered life-of-loan total is about $\\$49{,}682.53$, so the statement is True.",
]);

add("math-11-106:A", [
  "The statement is a claim about Option B at $10\\%$: seven beginning-of-year payments of $\\$100{,}000$, an annuity due. Option A is $\\$500{,}000$ cash today. This letter reads Option B's present cost, not the ranking.",
  "",
  "The overview recovered that present value as about $\\$535{,}526.07$. This letter is reading the $10\\%$ due cost, not rebuilding the six remaining discounted payments.",
  "",
  "**1.** The trap is $7 \\times 100{,}000 = 700{,}000$, the undiscounted instalments, or the ordinary seven-year present value that omits the immediate first payment.",
  "",
  "**2.** A solver who reported Option A's $\\$500{,}000$ here would be reading cash. A solver who used $13\\%$ would be answering a later cheaper ranking, not the $10\\%$ figure in this claim.",
  "",
  "Due means the first $\\$100{,}000$ is cash today and is rate-invariant. All of the discounting sits in the six remaining payments. The opposite verdict would need a different rate or a different instalment. At $10\\%$, the recovered present value of Option B is about $\\$535{,}526.07$.",
  "",
  "The recovered $10\\%$ present value of Option B is about $\\$535{,}526.07$, so the statement is True.",
]);

add("math-11-106:B", [
  "The statement claims that at a $10\\%$ annual rate, Option A is the cheaper choice. Option A is $\\$500{,}000$ cash today. Option B at $10\\%$ is the recovered due cost from letter A, about $\\$535{,}526.07$.",
  "",
  "Then $535{,}526.07 > 500{,}000$. The lump sum wins at $10\\%$. This letter is the comparison, not a second inversion of the due factor.",
  "",
  "**1.** Compare cash with the recovered due present value:",
  "",
  "$$535{,}526.07 > 500{,}000$$",
  "",
  "**2.** Instalments look smaller year by year, but they are not cheaper in present value at this rate. The extra $\\$35{,}526$ is the cost of stretching the same fleet purchase across seven due payments when money is only worth $10\\%$.",
  "",
  "A solver who compared $\\$700{,}000$ of undiscounted instalments with cash would still prefer A, but for the wrong reason. At a higher rate Option B can fall below cash; that is a later letter. At $10\\%$ the recovered ranking has Option A cheaper.",
  "",
  "The recovered $10\\%$ ranking has Option A cheaper, so the statement is True.",
]);

add("math-11-107:B", [
  "The statement claims the savings account balance after $4$ years is about $\\$4{,}700$. The owner deposits $\\$250$ each quarter, and the bank converts that intra-year pattern into a $\\$1{,}030$ year-end equivalent at $8\\%$.",
  "",
  "Four years of the recovered $\\$1{,}030$ year-end equivalent grow to about $\\$4{,}641.30$, not the claimed $\\$4{,}700$. The round $\\$4{,}700$ is a nearby stand-in.",
  "",
  "**1.** The trap is $1{,}030 \\times 4$ plus a loose interest guess, or $250 \\times 16 = 4{,}000$ plus $\\$700$ of invented interest. The recovered four-year ordinary-annuity pile of $\\$1{,}030$ a year at $8\\%$ is about $\\$4{,}641$.",
  "",
  "**2.** Letter D's simplified $\\$1{,}000$ year-end annuity grows to about $\\$4{,}506$, which sits below $\\$4{,}641$, not at $\\$4{,}700$. Rounding $\\$4{,}641$ up to a clean $\\$4{,}700$ is how the claim is manufactured.",
  "",
  "The opposite verdict would need a recovered four-year balance of $\\$4{,}700$. With the $\\$1{,}030$ equivalent at $8\\%$ for four years, the recovered balance is about $\\$4{,}641.30$, not $\\$4{,}700$.",
  "",
  "The recovered four-year balance is about $\\$4{,}641.30$, not $\\$4{,}700$, so the statement is False.",
]);

add("math-11-107:C", [
  "The statement claims the account balance after $3$ years is about $\\$3{,}500$. Three years of the same $\\$1{,}030$ year-end equivalent at $8\\%$ are a shorter ordinary annuity than letter B's four-year pile.",
  "",
  "Three years of the equivalent grow to about $\\$3{,}343.79$, not the claimed $\\$3{,}500$. Three copies of $\\$1{,}030$ plus a little interest do not land on a round $\\$3{,}500$.",
  "",
  "**1.** The trap is $1{,}030 \\times 3 + 410$ of invented interest, or $250 \\times 12 = 3{,}000$ plus $\\$500$. The recovered three-year pile is about $\\$3{,}344$.",
  "",
  "**2.** A solver who took three-quarters of letter B's $\\$4{,}641$ would report about $\\$3{,}481$, a neighbour of $\\$3{,}500$, and miss that an annuity is not a linear fraction of a longer annuity.",
  "",
  "The opposite verdict would need a recovered three-year balance of $\\$3{,}500$. With the $\\$1{,}030$ equivalent at $8\\%$ for three years, the recovered balance is about $\\$3{,}343.79$, not $\\$3{,}500$.",
  "",
  "The recovered three-year balance is about $\\$3{,}343.79$, not $\\$3{,}500$, so the statement is False.",
]);

add("math-11-107:D", [
  "The statement treats the four $\\$250$ deposits as a flat $\\$1{,}000$ year-end deposit and claims the resulting four-year balance is about $\\$4{,}506.11$. Dropping intra-year interest replaces the $\\$1{,}030$ equivalent with $\\$1{,}000$.",
  "",
  "Four years of that lower annuity grow to about $\\$4{,}506.11$. That figure is a lower bound, the calculation you get if the quarterly deposits earn nothing until December 31.",
  "",
  "**1.** The trap is thinking the simplified calculation should match the correct $\\$4{,}641$. It is supposed to sit below, and it does, by the intra-year premium in letter E.",
  "",
  "**2.** A solver who used $1{,}000 \\times 4 = 4{,}000$ would skip interest. A solver who used the $\\$1{,}030$ equivalent here would be answering letter B, not this lower-bound rewrite.",
  "",
  "The opposite verdict would need a different simplified annuity. With $\\$1{,}000$ at year-end for four years at $8\\%$, the recovered simplified four-year balance is about $\\$4{,}506.11$. The correct $\\$1{,}030$ path stays in letter B.",
  "",
  "The recovered simplified four-year balance is about $\\$4{,}506.11$, so the statement is True.",
]);

add("math-11-108:A", [
  "The statement is a claim about the required monthly payment on the $\\$200{,}000$ mortgage. A $6\\%$ nominal rate charged monthly is $0.5\\%$ per month for $240$ months. This letter is reading that monthly instalment.",
  "",
  "The overview recovered the payment as about $\\$1{,}432.86$. This letter does not rebuild $1-(1.005)^{-240}$. Letter B will use the same payment to value the remaining $180$ months.",
  "",
  "**1.** The trap is $200{,}000 / 240 \\approx 833$, which ignores interest. Splitting principal into $240$ equal pieces is an interest-free story.",
  "",
  "**2.** Another trap is $0.005 \\times 200{,}000 = 1{,}000$, which is the first month's interest rather than the payment. A solver who used $6\\%$ as a monthly rate would invent an enormous instalment.",
  "",
  "The opposite verdict would need a different principal, rate, or term. With $\\$200{,}000$ over $240$ months at $0.5\\%$ per month, the recovered monthly payment is about $\\$1{,}432.86$.",
  "",
  "The recovered monthly payment is about $\\$1{,}432.86$, so the statement is True.",
]);

add("math-11-108:B", [
  "The statement claims the outstanding balance immediately after the $60$th monthly payment is about $\\$169{,}799.20$. Five years leave $180$ payments, valued as an ordinary annuity at $0.5\\%$ per month.",
  "",
  "The overview recovered that outstanding balance as about $\\$169{,}799.20$. This letter is reading the remaining-term present value, not a second inversion of the original $240$-month payment.",
  "",
  "**1.** Guessing that one quarter of the term pays off one quarter of the principal would report $\\$150{,}000$ remaining. Early mortgage years are interest-heavy, so more than three-quarters of the principal is still outstanding.",
  "",
  "**2.** A solver who used $200{,}000 - 60 \\times 1{,}432.86 \\approx 114{,}000$ would treat every payment as pure principal and undershoot badly. The recovered $\\$169{,}799$ is the interest-heavy fact.",
  "",
  "The opposite verdict would need a linear principal clock. With $180$ remaining payments at $0.5\\%$ per month, the recovered balance after the $60$th payment is about $\\$169{,}799.20$.",
  "",
  "The recovered balance after the $60$th payment is about $\\$169{,}799.20$, so the statement is True.",
]);

add("math-11-109:A", [
  "The statement claims the smallest whole number of yearly payments needed to retire the $\\$120{,}000$ equipment loan is $n=9$. The company pays a fixed $\\$25{,}000$ at the end of each year at $14\\%$ until a smaller final payment clears the rest.",
  "",
  "The payoff threshold is about $8.508$ years, so the first integer that works is $9$. Rounding $8.51$ down to $8$ would leave a residual unpaid. The overview recovered $n=9$.",
  "",
  "**1.** The trap is treating $8.508$ as $8$, because it is closer to $8$ than to $9$. The inequality is $n \\ge 8.508$, so $9$ is the smallest whole number that retires the loan.",
  "",
  "**2.** A solver who used $120{,}000/25{,}000 = 4.8$ would ignore interest and undercount the years. Interest keeps the balance alive longer than a principal-only split.",
  "",
  "The opposite verdict would need a threshold at or below $8$. With the recovered $8.508$-year cutoff, eight full payments are not enough. The recovered smallest whole number of payments is $9$.",
  "",
  "The recovered smallest whole number of payments is $9$, so the statement is True.",
]);

add("math-11-109:D", [
  "The statement claims the total amount actually paid over the life of the loan is about $\\$210{,}000$. The recovered life-of-loan total is eight full $\\$25{,}000$ payments plus a smaller final instalment of about $\\$13{,}100.16$.",
  "",
  "That sum is $8 \\times 25{,}000 + 13{,}100.16 = 213{,}100.16$, not the claimed $\\$210{,}000$. The round $\\$210{,}000$ is nine copies of something near $\\$23{,}333$, or $200{,}000$ plus a round $\\$10{,}000$ stub.",
  "",
  "**1.** Add the recovered stub to eight full payments:",
  "",
  "$$200{,}000 + 13{,}100.16 = 213{,}100.16$$",
  "",
  "**2.** The trap is rounding the final payment down to $\\$10{,}000$ and writing $200{,}000 + 10{,}000$, or rounding the whole total to a clean $\\$210{,}000$. Nine copies of $\\$25{,}000$ would overstate at $\\$225{,}000$.",
  "",
  "The opposite verdict would need a recovered total of $\\$210{,}000$. With eight full payments plus $\\$13{,}100.16$, the recovered amount actually paid is about $\\$213{,}100.16$, not $\\$210{,}000$.",
  "",
  "The recovered amount actually paid is about $\\$213{,}100.16$, not $\\$210{,}000$, so the statement is False.",
]);

add("math-11-110:A", [
  "The statement is a claim about the required annuity-due payment on the $\\$90{,}000$ equipment loan. Eight payments, first one due immediately, at $12\\%$, invert to about $\\$16{,}176.12$. The separate reserve fund is a different component.",
  "",
  "The overview recovered that due instalment as about $\\$16{,}176.12$. This letter is reading the due payment. It does not rebuild the ordinary eight-year factor.",
  "",
  "**1.** The trap is the ordinary eight-year payment, which would be larger because it waits a year to start. Due means the first $\\$16{,}176.12$ is cash today.",
  "",
  "**2.** A solver who used $90{,}000/8 = 11{,}250$ would ignore interest. A solver who used $0.12 \\times 90{,}000 = 10{,}800$ would be quoting year-1 interest on an ordinary loan, not a due instalment.",
  "",
  "The opposite verdict would need ordinary timing. With eight beginning-of-year payments at $12\\%$ on $\\$90{,}000$, the recovered annuity-due payment is about $\\$16{,}176.12$. The reserve fund does not mix into this letter.",
  "",
  "The recovered annuity-due payment is about $\\$16{,}176.12$, so the statement is True.",
]);

const r = applyBodies(bodies);
console.log("101-110 applied", r.n, "wrote", r.wrote);
if (r.errors.length) console.log("ERRORS", r.errors);
const bad = r.stats.filter((s) => !s.ok);
console.log("out of range", bad.map((s) => s.key + " " + s.wc).join(", ") || 0);
