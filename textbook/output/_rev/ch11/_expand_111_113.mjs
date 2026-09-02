import { applyLetters } from "./_expand_apply.mjs";

const patches = {
  "math-11-111": [
    `Schedule II is seven due payments of \\$95,000. At 9% the overview recovered that present value as about \\$521,162.27. This letter is reading the 9% due cost.

**1.** The trap is $7 \\times 95{,}000 = 665{,}000$, the undiscounted instalments, or cash of \\$500,000 treated as if it were already Schedule II.

The recovered 9% present value of Schedule II is about \\$521,162.27, so the statement is True.`,

    `Schedule III is \\$150,000 cash plus a ten-year ordinary annuity of \\$60,000. At 9% the overview recovered about \\$535,059, not the claimed \\$540,000. The round \\$540,000 is a nearby stand-in.

**1.** The trap is $150{,}000 + 10 \\times 60{,}000 \\times$ some loose discount, or rounding \\$535,059 up to a clean \\$540,000. The recovered 9% cost is about \\$535,059.

The recovered 9% present value of Schedule III is about \\$535,059, not \\$540,000, so the statement is False.`,

    `The recovered present values at 9% are $PV_{\\mathrm{II}} \\approx 521{,}162$ and $PV_{\\mathrm{III}} \\approx 535{,}059$. Cash is \\$500,000. Then $500{,}000 < 521{,}162 < 535{,}059$. Instalments look smaller year by year, but they are not cheaper in present value at this rate.

**1.** Schedule I wins because 9% is not a high enough opportunity cost to make waiting attractive. Most of Schedule II's cash is still in the future, but not far enough in the future, and not discounted hard enough, to undercut \\$500,000 today.

**2.** The trap is ranking by the first check, \\$95,000 versus \\$150,000 versus \\$500,000, and calling II or III cheapest. Present value is the ranking tool, and at 9% cash is cheapest.

**3.** Letter E will flip the ranking of II against cash at 13%. This letter is the 9% snapshot only. At 9%, Schedule I is cheapest of the three.

The recovered 9% ranking has cash cheapest, so the statement is True.`,

    `Rebuild the same annuity due at 13%. The overview recovered about \\$474,767.23. That figure now sits below the \\$500,000 cash price.

**1.** Raising the rate from 9% to 13% cheapens the six remaining due payments enough to pull Schedule II under cash. The immediate first \\$95,000 is rate-invariant. All of the cheapening is in the wait.

The recovered 13% present value of Schedule II is about \\$474,767.23, so the statement is True.`,

    `Rebuild Schedule III at 13%. The overview recovered about \\$475,575. Then $474{,}767 < 475{,}575 < 500{,}000$. Schedule II is cheapest at 13%. III is close, about \\$808 behind. Cash is last.

**1.** Both instalment schedules beat cash at 13%, because waiting is now valuable. They do not beat each other by much. Schedule II's seven due payments of \\$95,000 just edge out III's mix of \\$150,000 down plus ten ordinary \\$60,000 payments.

**2.** The trap is seeing III's smaller annual check of \\$60,000 and calling it cheapest, or seeing III's \\$150,000 down and calling it dearest. At 13% the recovered ranking is II, then III, then cash. The claim names III as cheapest, which is the wrong order of two close instalment schedules.

**3.** The \\$808 gap between II and III is small enough that a rounding slip could swap them, which is why this letter has to cite the recovered pair rather than a feel for which schedule "looks" cheaper. The overview's 13% figures keep II in front.

**4.** The opposite verdict would need III's ordinary tail to discount harder than it does, or II's due payments to discount less. With the recovered 13% present values, Schedule III is not the cheapest.

The recovered 13% ranking has Schedule II cheapest, not III, so the statement is False.`,
  ],

  "math-11-112": [
    `Schedule II is nine due payments of \\$140,000. At 8% the overview recovered that present value as about \\$944,529.45. This letter is reading the 8% due cost.

**1.** The trap is $9 \\times 140{,}000 = 1{,}260{,}000$, the undiscounted instalments, or cash of \\$850,000 treated as if it were already Schedule II.

The recovered 8% present value of Schedule II is about \\$944,529.45, so the statement is True.`,

    `Schedule III is \\$300,000 cash plus an eleven-year ordinary annuity of \\$80,000. At 8% the overview recovered about \\$871,117.14. That sits between cash and Schedule II at 8%.

**1.** The trap is rounding to \\$870,000 or adding $11 \\times 80{,}000$ undiscounted onto the down payment. The recovered 8% cost is about \\$871,117.

The recovered 8% present value of Schedule III is about \\$871,117.14, so the statement is True.`,

    `The recovered present values at 8% are $PV_{\\mathrm{II}} \\approx 944{,}529$ and $PV_{\\mathrm{III}} \\approx 871{,}117$. Cash is \\$850,000. Then $850{,}000 < 871{,}117 < 944{,}529$. Discounting is not strong enough at 8% to make waiting cheaper than paying today.

**1.** Schedule III is close to cash, about \\$21,117 above, because \\$300,000 of it is already cash today. Schedule II is all instalments and sits much higher. Neither instalment schedule undercuts \\$850,000 at 8%.

**2.** The trap is ranking by annual cash outlay and calling II or III cheapest. Present value at 8% keeps cash first.

The recovered 8% ranking has cash cheapest, so the statement is True.`,

    `Rebuild Schedule III at 12%. The overview recovered about \\$775,015.93. That figure now sits well below both cash and Schedule II.

**1.** Raising the rate from 8% to 12% cheapens the eleven ordinary \\$80,000 payments enough to pull III under the \\$850,000 cash price by about \\$75,000. The \\$300,000 down payment does not move. The tail does.

The recovered 12% present value of Schedule III is about \\$775,015.93, so the statement is True.`,

    `Rebuild Schedule II at 12%. The overview recovered about \\$835,470. Then $775{,}016 < 835{,}470 < 850{,}000$. Schedule III is cheapest at 12%, not II. Both instalment schedules beat cash. III beats II by about \\$60,000.

**1.** Why III wins at 12% when it lost at 8%: more of III's cash is later (eleven ordinary payments starting in a year), so a higher rate helps III more than it helps II (whose first \\$140,000 is immediate). Cash does not benefit at all. The ranking III, then II, then cash is the 12% snapshot.

**2.** The trap is importing letter 111's 13% ranking, where II just edged III, and assuming the same order here. The payment mix is different. Here III's smaller, later tail is the cheaper present value at 12%.

**3.** The opposite verdict would need II's due payments to discount below III's mix. With the recovered 12% pair, Schedule II is not the cheapest.

The recovered 12% ranking has Schedule III cheapest, not II, so the statement is False.`,
  ],

  "math-11-113": [
    `Schedule II is ten due payments of \\$340,000. At 7.5% the overview recovered that present value as about \\$2,508,821.59. That sits above the \\$2,400,000 cash price.

**1.** The trap is $10 \\times 340{,}000 = 3{,}400{,}000$, the undiscounted instalments. This letter asks for the 7.5% due present value.

The recovered 7.5% present value of Schedule II is about \\$2,508,821.59, so the statement is True.`,

    `Schedule III is \\$600,000 cash plus a nine-year ordinary annuity of \\$250,000. At 7.5% the overview recovered about \\$2,194,722, not the claimed \\$2,250,000. The round \\$2.25 million is a nearby stand-in.

**1.** The trap is rounding \\$2,194,722 up to a clean \\$2.25 million, or adding $9 \\times 250{,}000$ with a loose discount. The recovered 7.5% cost is about \\$2,194,722.

The recovered 7.5% present value of Schedule III is about \\$2,194,722, not \\$2,250,000, so the statement is False.`,

    `Cash is \\$2,400,000. Schedule II is about \\$2,508,822. Then $2{,}400{,}000 < 2{,}508{,}822$. This ranking is only I versus II. III can still be cheaper than both, and at 7.5% it is, at about \\$2,194,722.

**1.** The claim does not ask whether I is cheapest overall. It asks whether I beats II. At 7.5% it does. A solver who saw III win overall and then denied the I-versus-II ranking would mix two questions.

The recovered 7.5% pair has cash cheaper than Schedule II, so the statement is True.`,

    `A higher rate does cheapen II, but not to the claimed \\$2,100,000. At 11.5% the overview recovered about \\$2,186,562. The round \\$2.1 million understates the recovered present value by about \\$87,000.

**1.** The trap is rounding to a clean \\$2.1 million that sits even further below cash, making the flip in letter E look larger than it is. The recovered 11.5% cost is about \\$2,186,562.

The recovered 11.5% present value of Schedule II is about \\$2,186,562, not \\$2,100,000, so the statement is False.`,

    `Compare the 11.5% present value with cash: $2{,}186{,}562 < 2{,}400{,}000$. At 11.5% the instalments are discounted hard enough for II to beat cash. The I-versus-II ranking flips from letter C.

**1.** That flip is the same mechanism as in the fleet-purchase task: present value of a due stream falls as the rate rises. At 7.5% II was about \\$108,822 dearer than cash. At 11.5% it is about \\$213,438 cheaper. The cash price never moved.

**2.** The trap is using the claimed \\$2,100,000 from letter D, which also sits below cash, so the ranking would survive the slip. The recovered figure to cite is about \\$2,186,562.

**3.** Schedule III remains cheapest overall at 11.5%, about \\$1,957,766, but this letter only ranks I against II. II now beats cash.

**4.** The opposite verdict would need an 11.5% present value still above \\$2,400,000, which would need larger due payments. With ten due payments of \\$340,000, the recovered 11.5% cost is about \\$2,186,562, below cash.

At 11.5% the recovered Schedule II present value sits below \\$2,400,000, so the statement is False.`,
  ],
};

const { n, counts } = applyLetters("111_120.json", patches);
console.log("patched", n);
for (const c of counts) console.log(c.id, c.L, c.wc, c.key);
