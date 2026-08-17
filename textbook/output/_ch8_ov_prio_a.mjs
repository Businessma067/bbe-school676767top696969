/** Priority A upgrades for underbuilt Chapter 8 power-function tasks. */
export const BATCH = [
  {
    id: `math-8-7`,
    case_id: `MATH 8.07`,
    title: `Survey Reach Against a Fieldwork Budget Cap`,
    context: `Usable survey responses follow $Q(x)=A x^{0.5}$, where $x>0$ measures outreach intensity. When intensity was raised from $25$ to $100$, usable responses increased by exactly $60$. The fieldwork budget caps outreach intensity at $400$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The response law is $Q(x)=12\\sqrt{x}$.`,
      `The budget cap allows at most $240$ usable responses.`,
      `A target of $180$ usable responses requires intensity $225$, so it is affordable.`,
      `Multiplying intensity by $2.25$ multiplies usable responses by $1.5$.`,
      `Raising intensity from $64$ to $81$ raises usable responses by $12.5\\%$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient, but neither observation gives a response level. The recorded *difference* must be applied to the model at both intensities. Since the square-root factors are $5$ and $10$, their difference isolates five copies of $A$.

The trap is to write $A\\sqrt{100}=60$. The $60$ is an increase, not the response at $100$, so both endpoints are required.

$$
Q(100)-Q(25)=A(10-5)=60
$$

$$
5A=60 \\quad \\Rightarrow \\quad A=12, \\qquad Q(x)=12\\sqrt{x}
$$

The recovered law is exactly $Q(x)=12\\sqrt{x}$, so the claim is true.`,
      `**B.** → True

This claim asks for a response ceiling under an intensity ceiling. From the difference calibration, $Q(x)=12\\sqrt{x}$. Because the exponent $0.5$ is positive, responses increase with intensity, so the largest feasible response occurs at the cap itself.

The trap is to treat $400$ as a response budget or to multiply it by $12$. The power-function input must first pass through the square root.

$$
0<x\\le 400, \\qquad Q(x)=12x^{0.5}
$$

$$
Q(400)=12\\sqrt{400}=12(20)=240
$$

No smaller affordable intensity can produce more than the endpoint value. The budget therefore allows at most $240$ usable responses, so the claim is true.`,
      `**C.** → True

This claim asks to invert the response law and then compare the required intensity with the budget. The calibrated model is $Q(x)=12\\sqrt{x}$, so setting the target to $180$ first determines the square root of intensity and then intensity itself.

The trap is to stop at $\\sqrt{x}=15$ and report $15$ as the required intensity. Inverting a square-root law requires a final squaring step.

$$
12\\sqrt{x}=180 \\quad \\Rightarrow \\quad \\sqrt{x}=15
$$

$$
x=15^2=225, \qquad 225\\le 400
$$

The target requires intensity $225$, which lies within the cap. Both parts of the statement match the model, so the claim is true.`,
      `**D.** → True

This claim asks for a scale effect rather than a level. For a power function with exponent $0.5$, multiplying the input by $k$ multiplies the output by $k^{0.5}$. Here the non-integer factor $2.25$ is $(1.5)^2$.

The trap is to multiply responses by $2.25$ as though the law were linear. The coefficient cancels in the ratio, but the exponent does not.

$$
\\frac{Q(2.25x)}{Q(x)}
=\\frac{12(2.25x)^{0.5}}{12x^{0.5}}
=(2.25)^{0.5}
$$

$$
(2.25)^{0.5}=\\sqrt{\\frac{9}{4}}=\\frac{3}{2}=1.5
$$

Thus a $2.25$-fold intensity change produces a $1.5$-fold response change, so the claim is true.`,
      `**E.** → True

This claim asks for the finite percentage change between two specific intensities. The calibrated law gives $Q(64)=12(8)$ and $Q(81)=12(9)$. The increase must be divided by the initial response, not by the final response or by the intensity change.

The trap is to use the relative intensity increase, $17/64\\approx26.6\\%$, as the response increase. The square root compresses that move.

$$
Q(64)=96, \\qquad Q(81)=108
$$

$$
\\frac{Q(81)-Q(64)}{Q(64)}
=\\frac{108-96}{96}
=\\frac{1}{8}=12.5\\%
$$

The finite response increase is exactly $12.5\\%$, so the statement matches the model and is true.`,
    ],
    difficulty_level: `1/5`,
    sort_order: 7,
    solution_overview: `Responses follow $Q(x)=Ax^{0.5}$, calibrated by a $60$-response increase from intensity $25$ to $100$, with $x\\le400$.

**Part 1:** Translate the difference rather than treating it as a level:

$$
A(\\sqrt{100}-\\sqrt{25})=60
$$

**Part 2:** Recover the model and its inverse:

$$
A=12, \\qquad Q(x)=12\\sqrt{x}, \\qquad x=\\left(\\frac{Q}{12}\\right)^2
$$

**Part 3:** Apply the cap, scale factors, and finite changes:

$$
Q(400)=240, \\quad Q=180\\Rightarrow x=225, \\quad (2.25)^{0.5}=1.5, \\quad \\frac{108-96}{96}=12.5\\%
$$

**Answer.** $A=12$ | ceiling $240$ responses | $180$ responses require intensity $225$`,
  },
  {
    id: `math-8-32`,
    case_id: `MATH 8.32`,
    title: `Average Product of a Square-Root Technology`,
    context: `A workshop's output follows $Y(L)=A L^{0.5}$ units, where $L>0$ is labour hours. Increasing labour from $25$ to $100$ hours increased output by exactly $60$ units. Management tracks average product $Y/L$ and compares output with a linear wage benchmark $W(L)=0.75L$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The output law is $Y(L)=12\\sqrt{L}$.`,
      `At $64$ hours, output exceeds the linear wage benchmark by $48$ units.`,
      `At $225$ hours, average product is $0.8$ unit per labour hour.`,
      `Producing $180$ units requires $225$ labour hours.`,
      `Multiplying labour hours by $2.25$ multiplies output by $1.5$ and average product by $\\frac{2}{3}$.`,
    ],
    answer_key: [true, true, true, true, true],
    tactical_explanations: [
      `**A.** → True

This claim asks for the technology coefficient from an output jump. The model must be evaluated at both labour levels because $60$ is the change in output, not either output level. The square-root factors differ by $10-5=5$.

The trap is to substitute only $L=100$ and conclude $A=6$. That silently converts a difference observation into a level observation.

$$
Y(100)-Y(25)=A\\sqrt{100}-A\\sqrt{25}=60
$$

$$
A(10-5)=60 \\quad \\Rightarrow \\quad A=12, \qquad Y(L)=12\\sqrt{L}
$$

The recovered technology is $Y(L)=12\\sqrt{L}$, so the claim is true.`,
      `**B.** → True

This claim compares curved output with a linear benchmark at the same labour input. Using the calibrated model, output at $64$ hours is $96$, while the wage benchmark is $0.75(64)=48$. Their difference is therefore $48$ units.

The trap is to compare coefficients, $12$ and $0.75$, without evaluating their different powers of $L$. One law grows with $\\sqrt L$ and the other with $L$.

$$
Y(64)=12\\sqrt{64}=12(8)=96
$$

$$
W(64)=0.75(64)=48, \qquad Y(64)-W(64)=96-48=48
$$

Output exceeds the linear benchmark by exactly $48$ units at $64$ hours, so the claim is true.`,
      `**C.** → True

This claim asks for average product at a labour level that is not a multiple of either calibration input. Average product is output divided by labour, so its exponent is $0.5-1=-0.5$. At $225$ hours the square root is $15$.

The trap is to evaluate total output, $180$, and report that number as the average. The total must still be divided by $225$ hours.

$$
\\operatorname{AP}(L)=\\frac{Y(L)}{L}
=\\frac{12L^{0.5}}{L}=12L^{-0.5}
$$

$$
\\operatorname{AP}(225)=\\frac{12}{\\sqrt{225}}
=\\frac{12}{15}=0.8
$$

Average product is $0.8$ unit per labour hour, so the claim is true.`,
      `**D.** → True

This claim asks to run the square-root technology backwards for a non-doubling target. With $Y(L)=12\\sqrt L$, a target of $180$ fixes $\\sqrt L=15$, after which the labour input must be squared.

The trap is to scale labour in the same proportion as output. A square-root production law has inverse exponent $2$, so output ratios are squared when converted to labour ratios.

$$
12\\sqrt L=180 \\quad \\Rightarrow \\quad \\sqrt L=15
$$

$$
L=15^2=225, \qquad Y(225)=12(15)=180
$$

The inversion and direct check both give $225$ labour hours, so the claim is true.`,
      `**E.** → True

This claim compares scale factors for a total and its average. Output has exponent $0.5$, while average product has exponent $-0.5$. Therefore the same $2.25$-fold labour change pushes the two quantities in opposite directions.

The trap is to assume that because total output rises, average product must rise too. Dividing by labour changes the exponent and reverses the direction.

$$
\\frac{Y(2.25L)}{Y(L)}=(2.25)^{0.5}=1.5
$$

$$
\\frac{\\operatorname{AP}(2.25L)}{\\operatorname{AP}(L)}
=(2.25)^{-0.5}=\\frac{1}{1.5}=\\frac{2}{3}
$$

Both multipliers in the statement are exact, so the claim is true.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 32,
    solution_overview: `Output is $Y(L)=AL^{0.5}$, with a $60$-unit output jump from $25$ to $100$ hours; average product is $Y/L$.

**Part 1:** Translate the jump and the derived average:

$$
A(10-5)=60, \qquad \\operatorname{AP}(L)=AL^{-0.5}
$$

**Part 2:** Recover the total, average, and inverse laws:

$$
Y(L)=12\\sqrt L, \qquad \\operatorname{AP}(L)=\\frac{12}{\\sqrt L}, \qquad L=\\left(\\frac{Y}{12}\\right)^2
$$

**Part 3:** Compare with wages and evaluate the planning targets:

$$
Y(64)-0.75(64)=48, \quad \\operatorname{AP}(225)=0.8, \quad Y=180\\Rightarrow L=225
$$

**Answer.** $A=12$ | $Y(L)=12\\sqrt L$ | $\\operatorname{AP}(225)=0.8$ | $180$ units need $225$ hours`,
  },
  {
    id: `math-8-39`,
    case_id: `MATH 8.39`,
    title: `Inspection Hours Across Growing Shipment Volumes`,
    context: `Customs inspection time follows $T(n)=A n^{0.5}$ hours for a consignment of $n>0$ shipments. Moving from a $25$-shipment consignment to a $225$-shipment consignment added exactly $60$ inspection hours. A staffing plan can supply at most $90$ inspection hours. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The inspection law is $T(n)=6\\sqrt{n}$.`,
      `The $90$-hour staffing ceiling can cover at most $225$ shipments.`,
      `Multiplying a consignment size by $2.25$ multiplies total inspection time by $1.5$.`,
      `At $144$ shipments, time per shipment is $0.5$ hour.`,
      `Total inspection time is proportional to the number of shipments.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient from the difference between two consignments. The added $60$ hours equals $T(225)-T(25)$, so both square-root factors are needed. Their values are $15$ and $5$.

The trap is to attach $60$ hours to the larger consignment alone. That would ignore the inspection time already required at $25$ shipments.

$$
T(225)-T(25)=A(\\sqrt{225}-\\sqrt{25})=60
$$

$$
A(15-5)=60 \\quad \\Rightarrow \\quad A=6, \qquad T(n)=6\\sqrt n
$$

The difference calibration produces exactly the law stated, so the claim is true.`,
      `**B.** → True

This claim asks to convert an hours ceiling into a shipment ceiling. Since $T(n)=6\\sqrt n$ is increasing, the largest feasible consignment occurs where the available $90$ hours are fully used. The resulting equation must be inverted.

The trap is to compute $90/6=15$ and call that the shipment count. Fifteen is $\\sqrt n$, not $n$.

$$
6\\sqrt n\\le90 \\quad \\Rightarrow \\quad \\sqrt n\\le15
$$

$$
n\\le15^2=225, \qquad T(225)=6(15)=90
$$

Thus the staffing ceiling covers no more than $225$ shipments, and the boundary is attainable. The claim is true.`,
      `**C.** → True

This claim asks for a non-quadrupling scale factor. For a square-root law, multiplying shipments by $k$ multiplies hours by $\\sqrt k$. The coefficient and starting consignment cancel in the ratio.

The trap is to use $2.25$ itself as the time multiplier, which would impose a proportional model rather than the stated exponent $0.5$.

$$
\\frac{T(2.25n)}{T(n)}
=\\frac{6(2.25n)^{0.5}}{6n^{0.5}}
=(2.25)^{0.5}
$$

$$
(2.25)^{0.5}=\\sqrt{\\frac94}=\\frac32=1.5
$$

The inspection-time multiplier is exactly $1.5$, so the claim is true.`,
      `**D.** → True

This claim asks for a derived average rather than total inspection time. At $144$ shipments, total time is $6\\sqrt{144}=72$ hours. Dividing by the shipment count gives one half hour per shipment.

The trap is to confuse the total $72$ with the average, or to divide the coefficient $6$ by $144$ without retaining the square-root factor.

$$
\\frac{T(n)}{n}=\\frac{6n^{0.5}}{n}=6n^{-0.5}
$$

$$
\\frac{T(144)}{144}
=\\frac{6}{\\sqrt{144}}
=\\frac{6}{12}=0.5
$$

Time per shipment is exactly $0.5$ hour at $144$ shipments, so the claim is true.`,
      `**E.** → False

This claim asks whether total time is proportional to shipment count. Proportionality requires exponent $1$ and a constant time per shipment. Here the exponent is $0.5$, and time per shipment is $6n^{-0.5}$, which falls as consignments grow.

The trap is to infer proportionality merely because both $T$ and $n$ increase. Increasing together is weaker than increasing in a constant ratio.

$$
\\frac{T(kn)}{T(n)}=k^{0.5}\\ne k \\quad \\text{for } k\\ne1
$$

$$
\\frac{T(225)}{225}=\\frac{90}{225}=0.4,
\\qquad
\\frac{T(25)}{25}=\\frac{30}{25}=1.2
$$

The per-shipment rate is not constant, so total time is not proportional to shipments. The claim is false.`,
    ],
    difficulty_level: `2/5`,
    sort_order: 39,
    solution_overview: `Inspection time is $T(n)=An^{0.5}$, and increasing a consignment from $25$ to $225$ shipments adds $60$ hours.

**Part 1:** Translate the difference and the staffing ceiling:

$$
A(15-5)=60, \qquad T(n)\\le90
$$

**Part 2:** Recover the total and average laws:

$$
T(n)=6\\sqrt n, \qquad \\frac{T(n)}n=6n^{-0.5}
$$

**Part 3:** Invert the ceiling and evaluate the scale questions:

$$
6\\sqrt n\\le90\\Rightarrow n\\le225, \quad (2.25)^{0.5}=1.5, \quad \\frac{T(144)}{144}=0.5
$$

**Answer.** $A=6$ | ceiling $225$ shipments | time per shipment falls with consignment size`,
  },
  {
    id: `math-8-41`,
    case_id: `MATH 8.41`,
    title: `Audit Cost With Economies of Scale`,
    context: `An audit practice prices engagements by $C(n)=A n^{0.75}$, where $n>0$ is the number of accounts tested. The bill rises by exactly $1900$ when engagement size rises from $16$ to $81$ accounts. A client has a $2700$ cap, while a rival quotes $R(n)=50n$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The pricing law is $C(n)=100n^{0.75}$.`,
      `The $2700$ cap covers at most $81$ accounts under the practice's schedule.`,
      `The two firms tie at $16$ accounts, and the practice is cheaper than the rival for every $n>16$.`,
      `A bill of $12500$ corresponds to an engagement of $625$ accounts.`,
      `Doubling the number of accounts raises the practice's bill by exactly $75\\%$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient from a bill difference. Because $0.75=3/4$, the exact shape factors are $16^{3/4}=8$ and $81^{3/4}=27$. Their difference, not either factor alone, multiplies $A$ to produce the $1900$ increase.

The trap is to set $A81^{0.75}=1900$. The record describes a jump between two bills.

$$
C(81)-C(16)=A(27-8)=1900
$$

$$
19A=1900 \\quad \\Rightarrow \\quad A=100,
\qquad C(n)=100n^{0.75}
$$

The recovered schedule is exactly the one in the statement, so the claim is true.`,
      `**B.** → True

This claim converts a spending cap into an account ceiling. The schedule $C(n)=100n^{3/4}$ is increasing, so the largest engagement under the cap is found by solving the boundary equation. Raising both sides to the inverse power $4/3$ completes the inversion.

The trap is to divide by $100$ and report $27$ accounts. Twenty-seven is the value of $n^{3/4}$.

$$
100n^{3/4}\\le2700 \\quad \\Rightarrow \\quad n^{3/4}\\le27
$$

$$
n\\le27^{4/3}=(\\sqrt[3]{27})^4=3^4=81
$$

The endpoint costs $C(81)=2700$, so the cap covers at most $81$ accounts. The claim is true.`,
      `**C.** → True

This claim asks for the crossover with a linear rival. A tie requires $100n^{3/4}=50n$. For positive $n$, dividing by $50n^{3/4}$ leaves an equation in $n^{1/4}$. The relative exponent also determines which firm is cheaper after the tie.

The trap is to compare $100$ with $50$ and ignore that the rival's exponent is larger.

$$
100n^{3/4}=50n
\\quad \\Rightarrow \\quad
2=n^{1/4}
\\quad \\Rightarrow \\quad n=16
$$

$$
\\frac{C(n)}{R(n)}
=\\frac{100n^{3/4}}{50n}
=2n^{-1/4}<1 \\quad \\text{when } n>16
$$

The firms tie at $16$, and the practice is cheaper beyond that point, so the claim is true.`,
      `**D.** → True

This claim asks to invert the calibrated audit schedule for a target bill. Dividing $12500$ by $100$ gives $n^{3/4}=125$. Since $125=5^3$, applying the inverse exponent $4/3$ produces the exact fourth power $5^4$.

The trap is to treat the exponent as $3/4$ during inversion instead of using its reciprocal.

$$
100n^{3/4}=12500
\\quad \\Rightarrow \\quad
n^{3/4}=125=5^3
$$

$$
n=125^{4/3}=(5^3)^{4/3}=5^4=625
$$

A direct check gives $100(625^{3/4})=100(125)=12500$. The target bill corresponds to $625$ accounts, so the claim is true.`,
      `**E.** → False

This claim asks for the percentage effect of doubling accounts. The scale multiplier is $2^{0.75}=2^{3/4}$, not $1+0.75$. Numerically it is about $1.682$, so the increase is about $68.2\\%$.

The trap is to read the exponent as a percentage response. Exponents govern multiplicative scaling through powers, not direct percentage addition.

$$
\\frac{C(2n)}{C(n)}=2^{3/4}\\approx1.6818
$$

$$
\\frac{C(2n)-C(n)}{C(n)}
=2^{3/4}-1
\\approx0.6818=68.18\\%
$$

Doubling raises the bill by about $68\\%$, not exactly $75\\%$, so the claim is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 41,
    solution_overview: `Audit cost follows $C(n)=An^{3/4}$; the bill rises by $1900$ from $16$ to $81$ accounts. The rival charges $R(n)=50n$.

**Part 1:** Use the two exact fourth-power inputs:

$$
A(81^{3/4}-16^{3/4})=A(27-8)=1900
$$

**Part 2:** Recover and compare the schedules:

$$
C(n)=100n^{3/4}, \qquad R(n)=50n, \qquad C=R\\Rightarrow n=16
$$

**Part 3:** Invert the cap and target bill:

$$
C(n)\\le2700\\Rightarrow n\\le81, \qquad C(n)=12500\\Rightarrow n=625
$$

**Answer.** $A=100$ | cap $81$ accounts | rival crossover $n=16$ | $12500$ bill at $n=625$`,
  },
  {
    id: `math-8-42`,
    case_id: `MATH 8.42`,
    title: `Airborne Particle Concentration Downwind`,
    context: `Downwind particle concentration follows $c(x)=A x^{-1.5}$ micrograms per cubic metre, where $x>0$ is distance from the stack in metres. A monitor at $4$ metres reads exactly $43.75$ more than a monitor at $16$ metres. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The concentration law is $c(x)=400x^{-1.5}$.`,
      `Concentration is at most $6.25$ precisely when the monitor is at least $16$ metres from the stack.`,
      `Halving the distance multiplies concentration by exactly $2^{1.5}=2\\sqrt{2}$.`,
      `At $100$ metres, concentration is $0.4$ microgram per cubic metre.`,
      `Doubling the distance cuts concentration by exactly $50\\%$.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient from the difference between two monitor readings. With exponent $-1.5=-3/2$, the shape factors at $4$ and $16$ metres are $1/8$ and $1/64$. Their difference is $7/64$.

The trap is to treat $43.75$ as either monitor's reading. It is the near reading minus the far reading.

$$
c(4)-c(16)
=A\\left(4^{-3/2}-16^{-3/2}\\right)
=A\\left(\\frac18-\\frac1{64}\\right)
$$

$$
A\\frac7{64}=43.75=\\frac{175}{4}
\\quad \\Rightarrow \\quad A=400
$$

Therefore $c(x)=400x^{-1.5}$, exactly as stated, so the claim is true.`,
      `**B.** → True

This claim asks for the distance threshold corresponding to a concentration ceiling. Because the exponent is negative and $A>0$, concentration falls as distance grows. Solving the boundary $c(x)=6.25$ therefore separates unsafe smaller distances from qualifying larger distances.

The trap is to reverse the inequality when interpreting a decreasing function.

$$
400x^{-3/2}=6.25
\\quad \\Rightarrow \\quad
x^{3/2}=\\frac{400}{6.25}=64
$$

$$
x=64^{2/3}=(\\sqrt[3]{64})^2=4^2=16,
\qquad c(x)\\le6.25 \\Longleftrightarrow x\\ge16
$$

The threshold and inequality direction both match the statement, so it is true.`,
      `**C.** → True

This claim asks for the exact effect of halving distance. For exponent $-1.5$, the distance multiplier $1/2$ is itself raised to $-1.5$, which reverses it and produces $2^{1.5}$. This equals $2\\sqrt2$ exactly.

The trap is to say concentration merely doubles. That would correspond to exponent $-1$, not $-1.5$.

$$
\\frac{c(x/2)}{c(x)}
=\\left(\\frac12\\right)^{-1.5}
=2^{1.5}
$$

$$
2^{1.5}=2^{3/2}=\\sqrt{2^3}=2\\sqrt2\\approx2.828
$$

Halving distance multiplies concentration by the exact factor stated, so the claim is true.`,
      `**D.** → True

This claim asks for a concentration level after the coefficient has been recovered. At $100$ metres, the denominator is $100^{1.5}=1000$, because taking the square root first gives $10$ and cubing gives $1000$.

The trap is to calculate $100^{1.5}$ as $150$ or to apply the negative exponent without taking the reciprocal.

$$
100^{1.5}=100^{3/2}=(\\sqrt{100})^3=10^3=1000
$$

$$
c(100)=400(100)^{-1.5}
=\\frac{400}{1000}=0.4
$$

The model gives $0.4$ microgram per cubic metre at $100$ metres, so the claim is true.`,
      `**E.** → False

This claim asks for the percentage reduction from doubling distance. The surviving concentration fraction is $2^{-1.5}=1/(2\\sqrt2)\\approx0.3536$. The percentage cut is one minus that fraction, about $64.6\\%$.

The trap is to confuse a negative exponent with an inverse-linear law, or to call the surviving $35.4\\%$ the percentage reduction.

$$
\\frac{c(2x)}{c(x)}
=2^{-1.5}
=\\frac{1}{2\\sqrt2}
\\approx0.3536
$$

$$
1-0.3536=0.6464\\approx64.6\\%
$$

Doubling distance cuts concentration by about $64.6\\%$, not exactly $50\\%$, so the claim is false.`,
    ],
    difficulty_level: `3/5`,
    sort_order: 42,
    solution_overview: `Concentration is $c(x)=Ax^{-3/2}$, calibrated by the difference between monitors at $4$ and $16$ metres.

**Part 1:** Translate the monitor difference:

$$
A\\left(\\frac18-\\frac1{64}\\right)=43.75
$$

**Part 2:** Recover the model and its scale law:

$$
c(x)=400x^{-3/2}, \qquad \\frac{c(kx)}{c(x)}=k^{-3/2}
$$

**Part 3:** Solve the threshold and evaluate the exact factors:

$$
c(x)\\le6.25\\Longleftrightarrow x\\ge16, \quad (1/2)^{-3/2}=2\\sqrt2, \quad c(100)=0.4
$$

**Answer.** $A=400$ | threshold $x=16$ m | halving factor $2\\sqrt2$ | $c(100)=0.4$`,
  },
  {
    id: `math-8-44`,
    case_id: `MATH 8.44`,
    title: `Market Impact of a Block Trade`,
    context: `A broker models price impact as $I(v)=A v^{0.5}$ basis points, where $v>0$ is order size as a fraction of average daily volume. Increasing an order from $0.04$ ADV to $0.09$ ADV adds exactly $6$ basis points of impact. The scaled impact charge is $vI(v)$, while a notional fee is $F(v)=30v$. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The impact law is $I(v)=60\\sqrt{v}$.`,
      `Increasing order size from $0.04$ to $0.09$ ADV multiplies impact by $1.5$.`,
      `The notional fee and scaled impact charge break even at $v=0.25$ ADV, with impact charge lower below that size.`,
      `At $v=0.16$ ADV, impact is $24$ basis points and the scaled impact charge is $3.84$.`,
      `The scaled impact charge is proportional to order size.`,
    ],
    answer_key: [true, true, true, true, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient from an impact difference. The square-root factors at $0.04$ and $0.09$ are $0.2$ and $0.3$, so the observed six-basis-point increase equals $0.1A$.

The trap is to use $I(0.09)=6$. Six is the change in impact, not the larger order's total impact.

$$
I(0.09)-I(0.04)
=A(\\sqrt{0.09}-\\sqrt{0.04})
=A(0.3-0.2)
$$

$$
0.1A=6 \\quad \\Rightarrow \\quad A=60,
\qquad I(v)=60\\sqrt v
$$

The difference calibration gives exactly the impact law stated, so the claim is true.`,
      `**B.** → True

This claim asks for the impact multiplier associated with a non-fourfold size change. The order grows by $0.09/0.04=2.25$, and a square-root impact law converts that into a multiplier of $\\sqrt{2.25}=1.5$.

The trap is to say the impact also grows $2.25$ times. That would be linear impact rather than square-root impact.

$$
\\frac{0.09}{0.04}=2.25
$$

$$
\\frac{I(0.09)}{I(0.04)}
=\\left(\\frac{0.09}{0.04}\\right)^{0.5}
=\\sqrt{2.25}=1.5
$$

Indeed, the levels are $18$ and $12$ basis points. Their ratio is $1.5$, so the claim is true.`,
      `**C.** → True

This claim asks for the break-even between a notional fee and the scaled impact charge. Since $vI(v)=60v^{3/2}$, equating it to $30v$ and dividing by positive $v$ leaves an equation in $\\sqrt v$.

The trap is to compare $I(v)$ directly with $F(v)$; the context defines the impact charge as $vI(v)$.

$$
60v^{3/2}=30v
\\quad \\Rightarrow \\quad
2\\sqrt v=1
\\quad \\Rightarrow \\quad
v=0.25
$$

$$
\\frac{vI(v)}{F(v)}
=\\frac{60v^{3/2}}{30v}
=2\\sqrt v<1 \\quad \\text{when }0<v<0.25
$$

Break-even occurs at $0.25$ ADV and impact charge is lower below it, so the claim is true.`,
      `**D.** → True

This claim asks for both impact in basis points and the scaled charge. At $v=0.16$, the square root is $0.4$, giving impact $24$. Multiplying that impact by order size gives $0.16(24)=3.84$.

The trap is to treat the impact and impact charge as the same quantity. The latter includes one additional factor of $v$.

$$
I(0.16)=60\\sqrt{0.16}=60(0.4)=24
$$

$$
vI(v)=0.16(24)=3.84
$$

Both the $24$-basis-point impact and the $3.84$ scaled charge agree with the statement, so the claim is true.`,
      `**E.** → False

This claim asks whether the scaled impact charge is linear in order size. Multiplying $I(v)=60v^{1/2}$ by $v$ gives $60v^{3/2}$, whose exponent is $1.5$, not $1$. Its per-unit charge therefore rises with size.

The trap is to see the explicit factor $v$ in $vI(v)$ and overlook the additional $v^{1/2}$ inside impact.

$$
vI(v)=v(60v^{1/2})=60v^{3/2}
$$

$$
\\frac{(2v)I(2v)}{vI(v)}
=2^{3/2}=2\\sqrt2\\ne2
$$

A proportional charge would double when size doubles; this charge grows by about $2.83$. The claim is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 44,
    solution_overview: `Impact is $I(v)=Av^{1/2}$, calibrated by the six-basis-point increase from $0.04$ to $0.09$ ADV. The scaled charge is $vI(v)$.

**Part 1:** Use the impact difference:

$$
A(0.3-0.2)=6
$$

**Part 2:** Recover impact and charge laws:

$$
I(v)=60\\sqrt v, \qquad vI(v)=60v^{3/2}, \qquad F(v)=30v
$$

**Part 3:** Evaluate scaling and break-even:

$$
\\sqrt{2.25}=1.5, \quad 60v^{3/2}=30v\\Rightarrow v=0.25, \quad I(0.16)=24
$$

**Answer.** $A=60$ bp | break-even $v=0.25$ ADV | scaled impact charge has exponent $3/2$`,
  },
  {
    id: `math-8-45`,
    case_id: `MATH 8.45`,
    title: `Allometric Energy Use Across Livestock Weights`,
    context: `Daily energy use follows $E(m)=A m^{2/3}$ units for body mass $m>0$ kilograms. A $64$ kg animal uses exactly $70$ more energy units per day than a $27$ kg animal. A herd's total use is the sum of its animals' individual uses. Evaluate each statement. Mark it TRUE or FALSE.`,
    statements: [
      `The energy law is $E(m)=10m^{2/3}$.`,
      `Doubling body mass multiplies energy use by exactly $2^{2/3}=\\sqrt[3]{4}$.`,
      `Eight $27$ kg animals use twice as much total energy as one $216$ kg animal.`,
      `Combining two equal animals into one animal of twice the mass leaves total energy use unchanged.`,
      `Energy use per kilogram is constant across body masses.`,
    ],
    answer_key: [true, true, true, false, false],
    tactical_explanations: [
      `**A.** → True

This claim asks for the coefficient from a two-point difference. The exact shape factors are $64^{2/3}=16$ and $27^{2/3}=9$, so the measured $70$-unit gap equals seven copies of $A$.

The trap is to attach $70$ to the $64$ kg animal as its total use. It is the larger animal's use minus the smaller animal's use.

$$
E(64)-E(27)
=A(64^{2/3}-27^{2/3})
=A(16-9)
$$

$$
7A=70 \\quad \\Rightarrow \\quad A=10,
\qquad E(m)=10m^{2/3}
$$

The calibrated allometric law is exactly the one in the statement, so the claim is true.`,
      `**B.** → True

This claim asks for the exact scale factor when mass doubles. The coefficient and starting mass cancel, leaving $2^{2/3}$. Writing the power as a cube root gives the equivalent exact form $\\sqrt[3]{4}$.

The trap is to interpret exponent $2/3$ as a $66.7\\%$ increase. The multiplier is a power of $2$, not $1+2/3$.

$$
\\frac{E(2m)}{E(m)}
=\\frac{10(2m)^{2/3}}{10m^{2/3}}
=2^{2/3}
$$

$$
2^{2/3}=(2^2)^{1/3}=\\sqrt[3]{4}\\approx1.587
$$

Both exact expressions in the statement describe the same multiplier, so the claim is true.`,
      `**C.** → True

This claim asks for a composed herd total, not merely one animal's use. A $27$ kg animal uses $10(9)=90$ units, so eight use $720$. Since $216=6^3$, one $216$ kg animal uses $10(6^2)=360$ units.

The trap is to combine the herd's masses first. Allometric energy is nonlinear, so eight separate animals are not equivalent to one animal with their combined mass.

$$
8E(27)=8\\left(10\\cdot27^{2/3}\\right)
=8(90)=720
$$

$$
E(216)=10(216^{1/3})^2
=10(6^2)=360,
\qquad \\frac{720}{360}=2
$$

The eight-animal herd uses exactly twice the single animal's energy, so the claim is true.`,
      `**D.** → False

This claim asks whether merging two equal animals preserves total use. Before combining, the total is $2E(m)$. One animal of mass $2m$ uses $E(2m)=2^{2/3}E(m)$, and $2^{2/3}<2$.

The trap is to use only total mass and forget that the model is applied separately to each animal before herd totals are added.

$$
E(m)+E(m)=2E(m)
$$

$$
E(2m)=2^{2/3}E(m)\\approx1.587E(m)<2E(m)
$$

For example, two $27$ kg animals use $180$ units, while one $54$ kg animal uses about $142.9$. Total use falls rather than remaining unchanged, so the claim is false.`,
      `**E.** → False

This claim asks whether energy use per kilogram is constant. Dividing the allometric law by mass reduces the exponent by one, giving $10m^{-1/3}$. The negative exponent means the per-kilogram rate falls as body mass rises.

The trap is to confuse rising total use with a constant average rate. Total energy rises, but less than proportionally.

$$
\\frac{E(m)}{m}
=\\frac{10m^{2/3}}{m}
=10m^{-1/3}
$$

$$
\\frac{E(27)}{27}=\\frac{90}{27}=\\frac{10}{3},
\qquad
\\frac{E(64)}{64}=\\frac{160}{64}=2.5
$$

The two per-kilogram values differ and the derived rate declines with mass, so the claim is false.`,
    ],
    difficulty_level: `4/5`,
    sort_order: 45,
    solution_overview: `Energy follows $E(m)=Am^{2/3}$, calibrated by the $70$-unit difference between $64$ kg and $27$ kg animals.

**Part 1:** Translate the two-point calibration:

$$
A(64^{2/3}-27^{2/3})=A(16-9)=70
$$

**Part 2:** Recover the individual and per-kilogram laws:

$$
E(m)=10m^{2/3}, \qquad \\frac{E(m)}m=10m^{-1/3}
$$

**Part 3:** Apply exact scaling and compose herd totals:

$$
\\frac{E(2m)}{E(m)}=2^{2/3}=\\sqrt[3]{4}, \quad 8E(27)=720, \quad E(216)=360
$$

**Answer.** $A=10$ | doubling factor $2^{2/3}$ | eight $27$ kg animals use twice one $216$ kg animal`,
  },
];
