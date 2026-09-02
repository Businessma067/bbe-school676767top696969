import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-11-81": [
    `Ms. Delgado needs a single deposit today that will grow into the oven bill of \\$5,000 in three years at 7%. The overview recovered that deposit as about \\$4,081.49. This letter is reading that present amount, not rebuilding the three-year growth factor.

**1.** The trap is treating the \\$5,000 as if it were already a present bill, or subtracting three years of simple 7% interest and landing near \\$3,950. Neither of those is a compound discount.

**2.** Another wrong split is dividing by $1.07$ once, as if the wait were a single year. Three annual credits, not one.

The recovered deposit is about \\$4,081.49, so the statement is True.`,

    `The claim asks what happens to today's oven-fund deposit if the bakery's account pays 5% instead of 7%. The future bill is still \\$5,000 in three years. A weaker credit does less of the compounding work, so more cash has to sit in the account today. Lowering the rate raises the required deposit. It does not lower it.

The overview recovered the 7% deposit as about \\$4,081.49. At 5% the same three-year bill needs about \\$4,319.19. That 5% figure sits about \\$237.70 above the 7% figure, not below it.

**1.** Present value moves opposite to the rate. The oven price is locked. A smaller growth factor leaves a larger share of that \\$5,000 to be funded in cash today. A solver who thought "worse rate, smaller number" was thinking of a future-value problem, where a lower rate grows a fixed deposit by less. This problem is the reverse: the future pile is fixed and the deposit is the unknown.

**2.** The trap figure is \\$4,081.49 itself, reused as if the rate did not enter the discount. Another wrong figure is \\$3,750, which is \\$5,000 minus three times 7% of \\$5,000, then somehow reused at 5%. Neither of those is the 5% deposit.

**3.** A third mix-up is dividing \\$5,000 by $1.05$ once or twice, as if the wait were one year or two. Three annual credits, not one and not two. Cutting the rate without cutting the wait is what this letter tests.

**4.** The opposite verdict would need a different story. If the stem had asked for the future value of a fixed \\$4,081.49 deposit, then dropping the rate to 5% would indeed produce a lower year-3 balance. If the target itself had fallen when the rate fell, the deposit could move either way. Neither of those is the stem. The oven still costs \\$5,000 in three years.

**5.** How far would the rate have to rise, not fall, to push the deposit below \\$4,081.49? Any rate above 7% would do that, because more compounding means less cash today. Five percent is the wrong side of 7%. The ranking $4{,}319.19 > 4{,}081.49$ is the whole comparison.

The recovered 5% deposit is about \\$4,319.19, which is higher than \\$4,081.49, so the statement is False.`,

    `Interest on the oven fund is the target minus the deposit that grows into it. The overview recovered the 7% deposit as about \\$4,081.49, so the interest is

$$5{,}000-4{,}081.49=918.51$$

The claim writes \\$928.51, which is \\$10 too high.

**1.** The extra ten dollars is a transcription slip on an otherwise correct subtraction. A solver who started from \\$4,071.49, or who subtracted from \\$5,010, would manufacture that extra ten.

**2.** Simple interest of $0.07 \\times 3 \\times 5{,}000 = 1{,}050$ is a different wrong figure entirely. The claim is close to the recovered \\$918.51, not to that simple-interest overstatement.

The recovered interest is \\$918.51, not \\$928.51, so the statement is False.`,

    `Present value is linear in the future bill when the rate and the horizon stay fixed. The overview recovered a three-year 7% deposit of about \\$4,081.49 for a \\$5,000 oven. Doubling the oven price to \\$10,000 therefore doubles the deposit:

$$2 \\times 4{,}081.49 = 8{,}162.98$$

That is exactly the claimed \\$8,162.98.

**1.** The trap is thinking that a larger target has to be discounted "harder," as if the growth factor itself changed. The factor $(1.07)^3$ is the same for both bills. Only the numerator doubles.

**2.** The opposite verdict would need the rate or the wait to change with the oven price. The stem holds both fixed.

Doubling the target doubles the recovered deposit, so the statement is True.`,

    `The claim says that waiting six years instead of three, at the same 7%, would cut today's deposit in half. Doubling the wait squares the growth factor. It does not halve the present value.

The overview recovered the three-year deposit as about \\$4,081.49. At six years the same \\$5,000 bill needs about \\$3,331.71. Half of \\$4,081.49 would be about \\$2,040.75. Extra years help, but not by half.

**1.** Exact halving would require the three-year growth factor to equal 2, because then six years would be a factor of 4 and the six-year deposit would be one-fourth of the undiscounted bill, which is half of the three-year deposit only if $(1.07)^3=2$. The recovered three-year factor is about $1.225$, well short of 2. Rule of 72 at 7% points to a doubling time near 10 years, not 3.

**2.** The trap figure is \\$2,040.75, the literal half. Another wrong figure is \\$0, as if six years at 7% paid the whole oven. Neither is the six-year deposit of about \\$3,331.71.

**3.** A solver who multiplied the three-year deposit by 2, confusing a longer wait with a larger present bill, would overshoot in the other direction. More time to compound means less cash today, but the drop from \\$4,081.49 to \\$3,331.71 is only about 18%, not 50%.

**4.** The opposite verdict would need a much higher rate, high enough that three years really did double the money. At 7% that is not the story. The oven is still \\$5,000; only the wait changed.

The recovered six-year deposit is about \\$3,331.71, not half of \\$4,081.49, so the statement is False.`,
  ],

  "math-11-82": [
    `The designer plants \\$6,500 today at 6% and leaves it for five years. The overview recovered that five-year balance as about \\$8,698.47. This letter is reading that accumulated value, not rebuilding $(1.06)^5$.

**1.** The trap is $6{,}500 \\times 1.30 = 8{,}450$, five years of simple 6%. Compounding adds the extra \\$248.47 that the claim includes.

**2.** Another wrong clock is ten years, which would report the later pile of about \\$11,640.51. This letter asks for year 5 only.

The recovered five-year balance is about \\$8,698.47, so the statement is True.`,

    `Interest in the first five years is the recovered balance minus the original deposit. The overview has $F(5) \\approx 8{,}698.47$, so

$$8{,}698.47-6{,}500=2{,}198.47$$

That is the claimed five-year interest.

**1.** The trap is quoting 6% of \\$6,500 times 5, which is \\$1,950 of simple interest and misses the extra \\$248.47 from compounding.

**2.** This letter is not the second five-year block. Years 6 through 10 earn about \\$2,942.04 on a larger base. The claim names the first block only.

The recovered first-block interest is \\$2,198.47, so the statement is True.`,

    `The claim says the ten-year balance is exactly double the five-year balance. Compound growth is exponential in time. Doubling the wait squares the growth factor. It does not double the pile.

The overview recovered $F(5) \\approx 8{,}698.47$ and $F(10) \\approx 11{,}640.51$. Double the five-year value would be about \\$17,396.94. The ten-year pile sits far below that double.

**1.** Exact doubling of the balance would require $(1.06)^5=2$, so that ten years would be a factor of 4 on the original \\$6,500. The five-year factor is about $1.338$, not 2. Five years at 6% turns \\$1 into about \\$1.34, not into \\$2. Rule of 72 at 6% points to a doubling time near 12 years, not 5.

**2.** The trap figure is \\$17,396.94, twice the five-year balance. Another wrong figure is \\$13,000, twice the original deposit with no interest. Neither is the recovered ten-year balance of about \\$11,640.51.

**3.** A solver who added another \\$2,198.47 of first-block interest onto the five-year pile would get about \\$10,897, still short of the true ten-year value, because the second block earns more than the first. That is letter D. This letter only asks whether the ten-year pile is double the five-year pile. It is not.

**4.** The opposite verdict would need a rate high enough that five years really doubled the money. At 6% that is not the designer's account. The deposit is still \\$6,500; only the wait doubled.

The recovered ten-year balance is about \\$11,640.51, not double \\$8,698.47, so the statement is False.`,

    `The claim ranks the two five-year interest blocks and says the second is smaller. Interest in years 6 through 10 is the ten-year pile minus the five-year pile. The overview recovered those piles as about \\$11,640.51 and \\$8,698.47, so the second block is

$$11{,}640.51-8{,}698.47=2{,}942.04$$

The first block is \\$2,198.47. Then $2{,}942.04 > 2{,}198.47$. The ranking in the claim is backwards.

**1.** The second block is larger because it earns 6% on a larger opening balance. Year 6 begins with about \\$8,698 already in the account, not with the original \\$6,500. The same 6% applied to a bigger base produces more dollars of interest even though the rate never changed.

**2.** The trap is treating interest as a flat dollar amount per year, as if each five-year window contributed the same \\$2,198.47. That is simple interest. Compounding makes later windows richer in dollars.

**3.** Another mix-up is comparing the second block with the ten-year interest of about \\$5,140.51 and calling the second block "smaller than the total," which is true but is not the comparison the claim asks for. The claim compares the two five-year windows with each other.

**4.** The opposite verdict would need a declining balance, a withdrawal, or a falling rate in the second window. The stem has none of those. The designer leaves the money in at a constant 6%.

**5.** The claimed \\$2,942.04 for the second block is actually the correct second-block interest. The error is only the word SMALLER. The dollar figure is right; the ranking is wrong.

The second five years earn about \\$2,942.04, more than the first period's \\$2,198.47, so the statement is False.`,

    `The claim says that cutting the rate from 6% to 3% would cut the five-year balance in half. Halving the rate does not halve a compounded balance, because the principal is still returned in full.

The overview recovered the 6% five-year pile as about \\$8,698.47. At 3% the same \\$6,500 grows to about \\$7,535.28. Half of \\$8,698.47 would be about \\$4,349.24, which is less than the original deposit. A lower rate still grows the money. It cannot shrink the account below the \\$6,500 that was put in.

**1.** Future value is principal plus interest. Cutting the interest rate cuts the interest, not the principal. Even at a 0% rate the five-year "balance" would still be \\$6,500, already above the claimed half. Three percent is not zero, so the pile sits higher still, near \\$7,535.

**2.** The trap figure is \\$4,349.24, the literal half. Another wrong figure is \\$3,250, half the original deposit. Both treat the whole balance as if it were interest. Most of \\$8,698.47 is still the original \\$6,500.

**3.** A solver who halved the 6% rate inside the growth factor and wrote $(1.03)^5$ as half of $(1.06)^5$ would also miss. The factors are about $1.159$ and $1.338$. Their ratio is not $1/2$.

**4.** The opposite verdict would need a model in which the entire pile scaled with the rate, as if there were no principal. That is not compound interest. The designer's \\$6,500 is still in the account at either rate.

The recovered 3% five-year balance is about \\$7,535.28, not half of \\$8,698.47, so the statement is False.`,
  ],

  "math-11-83": [
    `The clinic puts \\$2,000 at the end of each year for six years at 5%. The overview recovered that ordinary-annuity future value as about \\$13,603.84. This letter is reading that six-year fund, not rebuilding the annuity factor.

**1.** The trap is $2{,}000 \\times 6 = 12{,}000$, the deposits with no interest. Compounding adds the extra \\$1,603.84.

**2.** Another wrong clock is twelve years, which would report about \\$31,834. This letter asks for six years only.

The recovered six-year fund is about \\$13,603.84, so the statement is True.`,

    `Interest on the equipment fund is future value minus total deposits. The overview recovered $F_6 \\approx 13{,}603.84$, and six deposits total \\$12,000, so the interest is

$$13{,}603.84-12{,}000=1{,}603.84$$

The claim writes \\$1,703.84, which is \\$100 too high.

**1.** The extra hundred is a transcription slip. A solver who started from \\$13,703.84, or who counted seven deposits of \\$2,000, would manufacture that extra \\$100.

**2.** This letter is not the present-value figure of about \\$10,151.40. Interest is a future-value residual, not a discount.

The recovered interest is \\$1,603.84, not \\$1,703.84, so the statement is False.`,

    `The claim asks for the present-value equivalent of the six-year fund and writes \\$18,230.45. Discounting a future pile divides by the growth factor. The overview recovered $F_6 \\approx 13{,}603.84$ and the present-value equivalent $P_6 \\approx 10{,}151.40$. The claimed \\$18,230.45 is larger than the future value itself.

**1.** A present value of a future pile has to sit below that pile whenever the rate is positive. A figure above \\$13,603.84 cannot be a discount of that pile. The signature of the error is multiplying by $(1.05)^6$ instead of dividing:

$$13{,}603.84 \\times 1.340096 \\approx 18{,}230$$

That is how \\$18,230.45 appears. It is a future-on-future, not a present value.

**2.** The recovered present value of about \\$10,151.40 is also the ordinary-annuity present value of six \\$2,000 withdrawals at 5%. Either route, discounting $F_6$ or summing the discounted deposits, lands near \\$10,151. The claim's figure is not on that route.

**3.** The trap is treating "equivalent" as "grown forward," as if present value meant a larger later pile. Present value means a smaller today pile that grows into the known future fund.

**4.** The opposite verdict would need a negative rate, so that discounting would raise the number. The clinic's account pays a positive 5%.

The recovered present-value equivalent is about \\$10,151.40, not \\$18,230.45, so the statement is False.`,

    `Future value of an ordinary annuity is linear in the annual deposit when the rate and the horizon stay fixed. A 50% increase in the deposit, from \\$2,000 to \\$3,000, should raise the six-year fund by exactly 50%. The overview recovered $F_6 \\approx 13{,}603.84$, so

$$13{,}603.84 \\times 1.5 = 20{,}405.76$$

The claim writes \\$21,405.76, which is \\$1,000 too high. The 50% scale is the right idea. The arithmetic on that scale is not.

**1.** The extra thousand is a transcription slip on an otherwise correct proportion. A solver who added \\$1,000 to \\$20,405.76, or who treated seven deposits of \\$3,000, would manufacture it.

**2.** Linearity would fail only if the rate or the number of deposits changed with the deposit size. The stem holds both fixed. The error is not conceptual. It is the printed dollar figure.

The 50% scale of the recovered fund is \\$20,405.76, not \\$21,405.76, so the statement is False.`,

    `The claim says that doubling the number of annual deposits to 12 years would leave a future value less than double the six-year fund. Extra years add extra deposits and extra compounding. A growing annuity more than doubles when its horizon doubles.

The overview recovered $F_6 \\approx 13{,}603.84$. At 12 years the same \\$2,000 deposits grow to about \\$31,834.24. Double the six-year value is about \\$27,207.68. The twelve-year pile sits above that double, not below it.

**1.** Years 7 through 12 are six more deposits of \\$2,000, and those later deposits themselves earn interest, and the original six-year pile keeps compounding for six more years. All three effects push $F_{12}$ above $2 F_6$. The claim has the inequality backwards.

**2.** The trap figure is \\$27,207.68, twice the six-year fund, treated as a ceiling. Another wrong figure is \\$24,000, twelve deposits with no interest. The recovered twelve-year fund of about \\$31,834 sits above both.

**3.** A solver who thought "later deposits have less time to grow, so doubling the term must underperform a double" has a true piece of timing intuition and the wrong global comparison. Later deposits do grow less than early ones, but there are more of them, and the early pile keeps growing. The net is more than double, not less.

**4.** The opposite verdict would need a declining deposit, a withdrawal program, or a negative rate. The clinic keeps depositing \\$2,000 a year at a positive 5%.

The recovered twelve-year fund is about \\$31,834.24, more than double \\$13,603.84, so the statement is False.`,
  ],

  "math-11-84": [
    `The logistics company puts \\$3,500 at the end of each year for ten years at 8%. The overview recovered that ordinary-annuity future value as about \\$50,702.97. This letter is reading that ten-year fleet fund, not rebuilding the annuity factor.

**1.** The trap is $3{,}500 \\times 10 = 35{,}000$, the deposits with no interest. Compounding adds the extra \\$15,702.97.

**2.** Another wrong clock is twenty years, which would report about \\$160,167. This letter asks for ten years only.

The recovered ten-year fund is about \\$50,702.97, so the statement is True.`,

    `Interest on the fleet fund is future value minus total deposits. The overview recovered $F_{10} \\approx 50{,}702.97$, and ten deposits total \\$35,000, so the interest is

$$50{,}702.97-35{,}000=15{,}702.97$$

That is the claimed interest.

**1.** The trap is quoting 8% of \\$35,000, which is \\$2,800 of one-year simple interest, or $8\\% \\times 10 \\times 35{,}000$ as if the whole principal sat for ten years from day one. Deposits arrive over time, so neither shortcut is the recovered \\$15,702.97.

The recovered interest is \\$15,702.97, so the statement is True.`,

    `The claim says that extending the deposit period to 20 years would leave a future value less than double the ten-year fund. Extra years add extra deposits and extra compounding. A growing annuity much more than doubles when its horizon doubles.

The overview recovered $F_{10} \\approx 50{,}702.97$. At 20 years the same \\$3,500 deposits grow to about \\$160,166.87. Double the ten-year value is about \\$101,405.94. The twenty-year pile sits far above that double, not below it.

**1.** Years 11 through 20 are ten more deposits of \\$3,500, those later deposits earn interest, and the original ten-year pile keeps compounding for ten more years at 8%. All three effects push $F_{20}$ well above $2 F_{10}$. The claim has the inequality backwards.

**2.** The trap figure is \\$101,405.94, twice the ten-year fund, treated as a ceiling. Another wrong figure is \\$70,000, twenty deposits with no interest. The recovered twenty-year fund of about \\$160,167 sits above both, by a wide margin, because $(1.08)^{20}$ is already about $4.66$.

**3.** A solver who thought later deposits have less time to grow, so doubling the term must underperform a double, has a true piece of timing intuition and the wrong global comparison. At 8% for twenty years the early money has a long time to snowball. The net is more than triple the ten-year fund, not less than double.

**4.** The opposite verdict would need a declining deposit, a withdrawal, or a rate near zero. The fleet account keeps taking \\$3,500 a year at 8%.

The recovered twenty-year fund is about \\$160,166.87, far more than double \\$50,702.97, so the statement is False.`,

    `The claim says the interest-only portion of the ten-year fund exceeds the \\$35,000 of principal deposited. The overview recovered interest of about \\$15,702.97. Compare it with the principal:

$$15{,}702.97 < 35{,}000$$

Interest is large, but it is still smaller than the principal that produced it.

**1.** The trap is comparing interest with a single year's deposit of \\$3,500, or with the last payment, and calling that "more than principal." Principal here means the ten-year total of \\$35,000.

**2.** At 8% for ten years an ordinary annuity has not yet reached the point where interest outruns cumulative deposits. That crossover would need a longer horizon or a higher rate.

The recovered interest of \\$15,702.97 does not exceed \\$35,000, so the statement is False.`,

    `The claim raises the fleet account from 8% to 10% and asks whether the ten-year future value then clears \\$55,000. Rebuild the ordinary annuity at the new rate. That extra arithmetic is this letter's own work.

**1.** At 10% the ten-year fund is about \\$55,780.97. Then

$$55{,}780.97 > 55{,}000$$

The higher-rate fund clears the cutoff by about \\$781.

**2.** The overview's 8% fund was about \\$50,702.97, which sits below \\$55,000. The rate increase is what carries the fund over the line. A solver who reused \\$50,702.97 against the \\$55,000 cutoff would call the claim false and miss the 10% rebuild.

**3.** The trap figure is \\$53,500, a round stand-in between the two rates, or \\$35,000 \\times 1.10^{10} \\approx 90{,}780$, which treats the whole principal as if it had been deposited on day one. Neither is the 10% annuity value of about \\$55,781.

**4.** The opposite verdict would need a cutoff above about \\$55,781, or a smaller rate increase. At 10% for ten years the recovered fund does exceed \\$55,000.

The recovered 10% ten-year fund is about \\$55,780.97, so the statement is True.`,
  ],

  "math-11-85": [
    `The retiree wants \\$2,400 at the end of each year for 15 years from an account earning 4.5%. The overview recovered the ordinary-annuity present value as about \\$25,775.15. This letter is reading that required deposit, not rebuilding the annuity factor.

**1.** The trap is $2{,}400 \\times 15 = 36{,}000$, the undiscounted withdrawals. Discounting is what cuts that pile down to about \\$25,775.

**2.** Another wrong clock is 30 years, which would report about \\$39,092. This letter asks for 15 years only.

The recovered deposit is about \\$25,775.15, so the statement is True.`,

    `The claim compares the \\$36,000 of nominal withdrawals with today's required deposit of about \\$25,775.15. The overview recovered both figures. Then

$$36{,}000 > 25{,}775.15$$

Future dollars are discounted, so the account does not need to hold the full \\$36,000 today. The gap is the meaning of a positive 4.5% rate over 15 years.

**1.** The trap is reading the inequality backwards, as if a present value had to exceed the undiscounted total. That would require a negative rate.

The recovered deposit sits below the \\$36,000 of nominal withdrawals, so the statement is True.`,

    `The claim says that extending withdrawals to 30 years would exactly double the present value to about \\$51,550.30. Later withdrawals are discounted harder, so doubling the term does not double present value.

The overview recovered $P_{15} \\approx 25{,}775.15$ and $P_{30} \\approx 39{,}091.65$. Double the fifteen-year figure would be \\$51,550.30. Years 16 through 30 still add value, just not another full copy of the first 15 years.

**1.** A withdrawal in year 30 is discounted by $(1.045)^{30} \\approx 3.75$, so it is worth only about 27 cents on the dollar today. A withdrawal in year 1 is worth about 96 cents on the dollar. The second 15 years cannot be worth as much, in present value, as the first 15 years. That is why $P_{30}$ is about \\$39,092 rather than \\$51,550.

**2.** The trap figure is \\$51,550.30, twice the fifteen-year present value. Another wrong figure is \\$72,000, thirty undiscounted withdrawals. Neither is the recovered 30-year present value.

**3.** A solver who thought "twice the checks, twice the fund" was treating the withdrawals as a present bill. They are a future stream. Time is the discount, and the later half of the stream is the cheaper half in present-value terms.

**4.** The opposite verdict would need a 0% rate, so that every withdrawal counted at face value and 30 years would be exactly double 15 years. The account earns 4.5%, not 0%.

The recovered 30-year present value is about \\$39,091.65, not \\$51,550.30, so the statement is False.`,

    `The gap between nominal withdrawals and today's deposit is the total discount. The overview recovered $36{,}000 - 25{,}775.15 = 10{,}224.85$. The claim writes \\$11,224.85, which is \\$1,000 too high.

**1.** The extra thousand is a transcription slip. A solver who started from \\$26,775.15, or who added an extra year's \\$2,400 and then mixed the subtraction, would manufacture a nearby wrong gap.

**2.** This letter is not the 30-year comparison. It is only the 15-year discount, and that discount is about \\$10,225, not \\$11,225.

The recovered gap is \\$10,224.85, not \\$11,224.85, so the statement is False.`,

    `The claim says that a higher interest rate would raise the required present-value deposit above \\$25,775.15. A higher rate discounts future withdrawals more, so less cash is needed today. The ranking in the claim is backwards.

The overview recovered the 4.5% deposit as about \\$25,775.15. At 6% the same 15-year plan needs about \\$23,309.40. Then $23{,}309.40 < 25{,}775.15$. The required deposit falls, it does not rise.

**1.** Present value of a withdrawal stream moves opposite to the rate. The retiree's annual check is still \\$2,400. A larger growth factor means the account earns more while the checks are going out, so a smaller opening balance can support the same withdrawals. A solver who thought "higher rate, higher number" was thinking of a future-value problem, or of the interest dollars earned, not of the deposit required today.

**2.** The trap figure is something above \\$25,775, as if the 6% present value had to sit near the undiscounted \\$36,000. Another wrong figure is \\$2,400 / 0.06 = 40{,}000, the perpetuity value, which is a different (infinite) plan. Neither is the 15-year 6% annuity of about \\$23,309.

**3.** The opposite verdict would need a lower rate, not a higher one. Dropping from 4.5% toward 0% would push the deposit up toward \\$36,000. Raising the rate pushes it down.

**4.** How the first-year interest changes is a separate story: a smaller opening balance at a higher rate can produce either more or less dollar interest in year 1. This letter only asks about the required deposit. That deposit falls when the rate rises.

The recovered 6% deposit is about \\$23,309.40, lower than \\$25,775.15, so the statement is False.`,
  ],
};

const { n, counts } = applyLetters("81_90.json", patches);
console.log("patched", n);
for (const c of counts) console.log(c.id, c.L, c.wc, c.key);
