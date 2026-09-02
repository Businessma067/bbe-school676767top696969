import { applyLetters } from "./_expand_apply.mjs";

const L = {
  "math-8-11": [
    `**A.** → True

Marina's harvest is a power $Y(h)=A h^{r}$ with both constants unknown, and this letter asks what the recovered exponent says about speed: whether harvest grows more slowly than watering time.

The overview already recovered $r=\\frac{1}{3}$ from the logged ratio $\\frac{6}{4}=\\bigl(\\frac{27}{8}\\bigr)^{r}$, which simplified because $27/8=(3/2)^{3}$ and $6/4=3/2$. An exponent smaller than one means that multiplying hours by $k$ multiplies harvest only by $k^{r}$, a smaller factor. Harvest grows more slowly than watering time.

This is a statement about the exponent, not about the coefficient $A=2$. Scale questions cancel $A$; the comparison of growth rates is $r$ against $1$.

**1.** A rushed solver who compared the two logged points and saw hours jump from $8$ to $27$, a factor $3.375$, while harvest jumped only from $4$ to $6$, a factor $1.5$, already has the same conclusion in a table. The exponent $r=\\frac{1}{3}$ is that observation, cleaned into a single number.

**2.** Extra arithmetic at a third watering time, not in the overview's short answer line: after $64$ hours,

$$Y(64)=2\\cdot 4=8$$

so octupling the original $8$ hours only doubles the original $4$ kg harvest. That is $8^{\\frac{1}{3}}=2$, slower than the hours.

**3.** If $r$ had been $1$, harvest would have kept pace with hours. If $r$ had been $2$, harvest would have outrun hours. The two logged pairs force $r=\\frac{1}{3}<1$. A solver who averaged $4$ and $6$ and declared linear growth has thrown the ratio away.

The recovered exponent sits below one, so the statement is True.`,

    `**B.** → False

The claim is a scale statement: doubling the watering time doubles the harvest.

The overview already recorded that doubling hours multiplies harvest by $2^{\\frac{1}{3}}$, not by $2$. The coefficient $A$ cancels in the ratio

$$\\frac{Y(2h)}{Y(h)}=2^{r}=2^{\\frac{1}{3}}\\approx 1.26$$

so a doubled watering buys about twenty-six percent more crop, not one hundred percent more.

**1.** Extra arithmetic on the logged $8$-hour harvest: doubling those $8$ hours is $16$ hours, and

$$Y(16)=2\\cdot 16^{\\frac{1}{3}}=2\\cdot 2^{\\frac{4}{3}}=2\\cdot 2\\cdot 2^{\\frac{1}{3}}=8\\cdot 2^{\\frac{1}{3}}\\approx 10.08$$

against $Y(8)=4$. The new harvest is about $10$ kg, not $8$ kg. Twice $4$ would have been $8$, and $10$ is not $8$.

**2.** A rushed solver who used exponent $1$ is telling a proportional story the two logged pairs already contradict: hours from $8$ to $27$ would have had to take harvest from $4$ to $13.5$, not to $6$. Another who used $2^{\\frac{1}{2}}$ mixed this plot with a square-root technology.

**3.** Letter C asks the reverse scale question: how many hours to double the harvest. This letter asks what doubling the hours does to the harvest. Those are inverse questions, and both fail a factor of $2$ because $r\\neq 1$.

The opposite verdict would need $r=1$. With $r=\\frac{1}{3}$, doubling hours does not double harvest.

The recovered doubling factor is $2^{\\frac{1}{3}}$, not $2$, so the statement is False.`,

    `**C.** → True

This is a reverse scale question: starting from the logged $4$ kg harvest, how much watering is needed to double it to $8$ kg, and is that more than a doubling of the logged $8$ hours.

The overview already inverted $Y(h)=8$ at $h=64$. Sixty-four hours is eight times the logged $8$ hours, which is more than a doubling. With $r=\\frac{1}{3}$, doubling the harvest means multiplying hours by $2^{3}=8$, because the inverse exponent is $3$.

The extra arithmetic is the inversion, not a re-display of $A=2$:

**1.** The recovered rule is $Y(h)=2h^{\\frac{1}{3}}$. Set the harvest equal to $8$:

$$2h^{\\frac{1}{3}}=8$$

**2.** Divide by the coefficient and cube:

$$h^{\\frac{1}{3}}=4, \\qquad h=64$$

**3.** Compare $64$ with twice the logged $8$ hours, which would have been $16$. The required $64$ sits well past $16$. A solver who reported $16$ used exponent $1$ on the reverse question, the same linear trap as letter B in the other direction.

**4.** Extra check: $Y(64)=2\\cdot 4=8$, so the inversion lands on the doubled harvest. $Y(16)\\approx 10$ was letter B's forward doubling of hours, which overshoots $8$ on the harvest scale only because that was a different question. Here the target is harvest $8$, and the hours needed are $64$.

A rushed solver who multiplied $8$ hours by $2^{\\frac{1}{3}}$ mixed the forward factor with the reverse factor. Forward is $2^{r}$; reverse is $2^{1/r}$. Those are not the same once $r\\neq 1$.

If $r$ had been greater than one, doubling the harvest would have needed less than a doubling of hours. The stem's $r=\\frac{1}{3}<1$ forces a more-than-doubling of watering.

The recovered watering time for $8$ kg is $64$ hours, more than double $8$, so the statement is True.`,

    `**D.** → False

The claim is about the slope of the harvest, not about a level: whether an extra hour adds more crop after $27$ hours than after $8$.

The overview already recorded that an extra hour adds less after $27$ hours than after $8$, because $r<1$. The recovered rule $Y(h)=2h^{\\frac{1}{3}}$ has derivative

$$Y'(h)=\\frac{2}{3}h^{-\\frac{2}{3}}$$

The leftover exponent $-\\frac{2}{3}$ is negative, so the slope itself falls as $h$ rises. Later hours buy less crop, not more.

**1.** Extra arithmetic at the two logged times, which is this letter's own comparison rather than a re-display of $Y(8)$ and $Y(27)$:

$$Y'(8)=\\frac{2}{3}\\cdot 8^{-\\frac{2}{3}}=\\frac{2}{3}\\cdot\\frac{1}{4}=\\frac{1}{6}$$

$$Y'(27)=\\frac{2}{3}\\cdot 27^{-\\frac{2}{3}}=\\frac{2}{3}\\cdot\\frac{1}{9}=\\frac{2}{27}$$

and $\\frac{1}{6}\\approx 0.167$ sits above $\\frac{2}{27}\\approx 0.074$. An extra hour after $8$ hours adds about $0.17$ kg; after $27$ hours it adds about $0.07$ kg.

**2.** A rushed solver who saw $Y(27)=6>Y(8)=4$ and concluded that later hours are more productive has confused the height of the curve with its slope. The harvest is still rising, just more slowly. Another who used $r>1$ intuition from a convex technology has the wrong recovered exponent.

**3.** Letter A said $r<1$ as a growth-rate comparison with hours. This letter is the same $r<1$ as a falling marginal product. Average product $Y/h=2h^{-\\frac{2}{3}}$ falls for the same leftover-exponent reason.

The opposite verdict would need $r>1$. With $r=\\frac{1}{3}$, later hours add less, not more.

The recovered slope is smaller at $27$ hours than at $8$, so the statement is False.`,

    `**E.** → True

The claim is about the inverse: whether the watering time needed for a given harvest is itself a power function of that harvest.

The overview already recorded the inverse $h=(Y/2)^{3}$. A nonzero power inverts to another power. Raising $Y=2h^{\\frac{1}{3}}$ to the reciprocal exponent $3$ isolates $h$ as a monomial in $Y$, coefficient $(1/2)^{3}=\\frac{1}{8}$ and exponent $3$.

That is the definition of a power function of the harvest: $h=\\frac{1}{8}Y^{3}$. There is no leftover constant, no logarithm, and no second exponent.

**1.** Extra arithmetic that uses the inverse at a new harvest, $Y=10$:

$$h=\\Bigl(\\frac{10}{2}\\Bigr)^{3}=125$$

so $10$ kg would take $125$ hours. That is a cube of a linear function of $Y$, still a power of $Y$. A solver who added a setup time, $h=5+(Y/2)^{3}$, would have left the power-function class; the stem has no setup.

**2.** A rushed solver who thought "the inverse of a root is not a power" has forgotten that a root is a power, and the inverse of $u^{r}$ is $u^{1/r}$. Another who wrote $h=\\log Y$ mixed this plot with an exponential technology.

**3.** Letters B and C used the inverse exponent $3$ as a scale factor. This letter names the inverse as a function class. The same $h\\propto Y^{3}$ is what made doubling harvest cost eight times the hours.

If $A$ had sat inside a sum, $Y=2+h^{\\frac{1}{3}}$, the inverse would not have been a power. The stem is a pure monomial.

The recovered watering time is a power of harvest, so the statement is True.`,
  ],

  "math-8-12": [
    `**A.** → True

Callers wait according to $W(n)=A n^{-\\frac{1}{2}}$ minutes, and the recorded four-agent shift of $24$ minutes is what pins $A$. This letter is a level at nine agents, asked against a threshold of $20$ minutes.

The overview already recovered $A=48$ and $W(9)=16$. Sixteen minutes sits below $20$. The recovered object is that nine-agent wait, not a new coefficient.

Nine agents are a perfect square, so the square root is $3$, and $W(9)=48/3=16$. The claim does not ask for $16$ on the nose; it asks whether the wait is less than $20$. It is.

**1.** A rushed solver who scaled the recorded $24$ minutes by $4/9$ linearly would report about $10.7$ minutes and still sit under $20$, for the wrong reason. The right scale is $W(9)/W(4)=\\sqrt{4/9}=2/3$, and $\\frac{2}{3}\\cdot 24=16$. Another who used $A=24$ would report $W(9)=8$ and still pass the threshold by accident.

**2.** Extra arithmetic at a neighbouring staffing, eight agents, which is not a perfect square:

$$W(8)=\\frac{48}{\\sqrt{8}}=6\\sqrt{8}=12\\sqrt{2}\\approx 17.0$$

still under $20$, and still not the nine-agent reading. The threshold test is about $n=9$ specifically.

**3.** Letter D will invert a $6$-minute wait past the $50$-agent cap. This letter is a legal staffing of $9$, well under the cap, with a wait of $16$. Mixing the cap into a nine-agent question is a different task.

The opposite verdict would need $W(9)\\ge 20$, which would have required $A\\ge 60$. The recorded $W(4)=24$ forces $A=48$.

The recovered wait at $9$ agents is $16$ minutes, under $20$, so the statement is True.`,

    `**B.** → True

The claim is about the inverse: whether the number of agents needed for a given wait is itself a power of that wait.

The overview already recorded $n=(48/W)^{2}$. A nonzero power inverts to another power. From $W=48 n^{-\\frac{1}{2}}$, isolate $n$ by raising both sides to $-2$, or rewrite $n^{\\frac{1}{2}}=48/W$ and square. The result is a monomial in $W$, coefficient $48^{2}=2304$ and exponent $-2$.

That is a power function of the wait. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at a new wait of $12$ minutes:

$$n=\\Bigl(\\frac{48}{12}\\Bigr)^{2}=16$$

so a $12$-minute wait needs $16$ agents. That is a square of a reciprocal, still a power of $W$. A solver who added a minimum staffing, $n=2+(48/W)^{2}$, would have left the power-function class; the stem has no such floor inside the formula, only the later cap of $50$.

**2.** A rushed solver who thought a negative exponent could not invert to a power has forgotten that $u^{-r}$ inverts to a power with exponent $-1/r$. Another who wrote $n=\\log W$ mixed this desk with an exponential technology.

**3.** Letter D uses this inverse at $W=6$ and hits $n=64$, past the cap. The inverse being a power is what makes that inversion a single monomial step rather than a numerical search.

If wait had been $W=A n^{-\\frac{1}{2}}+c$ with a leftover constant, the inverse would not have been a power. The stem is a pure monomial.

The recovered agent count is a power of the wait, so the statement is True.`,

    `**C.** → False

The claim is about the slope of wait, not about a level: whether an extra agent cuts more wait after $16$ agents than after $4$.

The overview already recorded that an extra agent cuts less wait after $16$ agents than after $4$. The recovered rule $W(n)=48n^{-\\frac{1}{2}}$ has derivative

$$W'(n)=-24 n^{-\\frac{3}{2}}$$

The size of that cut is $|W'(n)|=24 n^{-\\frac{3}{2}}$, which falls as $n$ rises because the leftover exponent is negative. Later agents still help; they help less.

**1.** Extra arithmetic at the two named staffings:

$$|W'(4)|=24\\cdot 4^{-\\frac{3}{2}}=24\\cdot\\frac{1}{8}=3$$

$$|W'(16)|=24\\cdot 16^{-\\frac{3}{2}}=24\\cdot\\frac{1}{64}=0.375$$

so an extra agent after $4$ agents cuts about $3$ minutes, and after $16$ agents only about $0.4$ minutes. The claim's "more after $16$" is the reverse of these two slopes.

**2.** A rushed solver who saw $W(16)=12<W(4)=24$ and concluded that later agents are doing more has confused a lower wait with a steeper cut. The wait is already low at $16$ agents; there is less left to cut. Another who used a linear wait $W=c-kn$ would have had a constant cut, still not a larger cut later.

**3.** Letter A was a level at $9$ agents. This letter is the slope comparison. Negative-exponent wait has falling marginal benefit of staff, which is the same $r<0$ story as a decreasing function, read on the derivative.

The opposite verdict would need a wait that became steeper as the team grew, which a reciprocal square root cannot do.

The recovered cut is smaller after $16$ agents than after $4$, so the statement is False.`,

    `**D.** → True

A six-minute wait is an inversion of the recovered rule, asked against the $50$-agent cap.

The overview already inverted $n=(48/6)^{2}=64$. Sixty-four agents exceed the cap of $50$. The extra arithmetic is that inversion, which this letter owns:

**1.** Set $W=6$ in $W=48 n^{-\\frac{1}{2}}$:

$$6=\\frac{48}{\\sqrt{n}}$$

**2.** Then $\\sqrt{n}=8$ and $n=64$.

**3.** Compare $64$ with $50$. The required team sits $14$ agents past the cap. A six-minute wait is therefore not a legal staffing on this shift.

A rushed solver who computed $n=48/6=8$ skipped the square in the inverse. Eight agents would give $W(8)\\approx 17$ minutes, not $6$. Another who compared $6$ with $W(50)$ instead of inverting would find

$$W(50)=\\frac{48}{\\sqrt{50}}\\approx 6.79$$

which is still above $6$, the same conclusion from the other side: even the largest legal team cannot reach $6$ minutes.

The opposite verdict would need a cap of $64$ or more, or a recorded wait that forced a smaller $A$. With $A=48$ and a cap of $50$, a $6$-minute wait is illegal.

The recovered staffing for $6$ minutes is $64$ agents, past $50$, so the statement is True.`,

    `**E.** → False

Doubling the recorded team is the multiplier $k=2$ on $n$, and the claim is that wait halves.

The overview already recorded that doubling the team multiplies wait by $2^{-\\frac{1}{2}}=1/\\sqrt{2}\\approx 0.707$, not by $1/2$. The coefficient $A$ cancels in the ratio

$$\\frac{W(2n)}{W(n)}=2^{-\\frac{1}{2}}$$

so wait falls by about thirty percent, not by fifty.

**1.** Extra arithmetic on the recorded four-agent shift: doubling that team is $8$ agents, and $W(8)\\approx 17.0$ against $W(4)=24$. Half of $24$ would have been $12$, and $17$ is not $12$. Directly, $24/\\sqrt{2}\\approx 17.0$, the same figure.

**2.** A rushed solver who used exponent $-1$ would have halved the wait, which is exactly the false claim. Reciprocal-linear wait is $A/n$; this desk is $A/\\sqrt{n}$. Another who used $2^{-2}=1/4$ mixed in a square in the denominator.

**3.** Letter A used a level at $9$ agents. This letter is a scale factor about doubling, independent of $A$. Whether the recorded wait had been $24$ or $40$, doubling the team would still multiply wait by $1/\\sqrt{2}$.

The opposite verdict would need exponent $-1$. With exponent $-\\frac{1}{2}$, doubling the team does not halve the wait.

The recovered doubling factor is $1/\\sqrt{2}$, not $1/2$, so the statement is False.`,
  ],

  "math-8-13": [
    `**A.** → True

Leah's well is $Q_{L}(d)=a d^{\\frac{1}{2}}$, and the logged $12$ litres a minute at $9$ metres pins $a$. This letter is a level at $4$ metres, asked against a threshold of $7$ litres a minute.

The overview already recovered $a=4$ and $Q_{L}(4)=8$. Eight litres a minute sits above $7$. Four metres is a perfect square, so the square root is $2$, and $4\\cdot 2=8$.

**1.** A rushed solver who scaled Leah's $12$ litres linearly by $4/9$ would report about $5.3$ litres and fail the threshold for the wrong reason. The right scale is $\\sqrt{4/9}=2/3$, and $\\frac{2}{3}\\cdot 12=8$. Another who used Omar's coefficient on Leah's exponent would mix the two wells.

**2.** Extra arithmetic at $1$ metre, a new depth: $Q_{L}(1)=4$, which sits below $7$. The threshold test is about $4$ metres specifically, where the recovered $8$ already clears $7$. Letter B's crossing at $8$ metres is a different depth.

**3.** Omar at $4$ metres is the logged $4$ litres a minute, below Leah's $8$. The claim is about Leah, not about who leads at $4$ metres. Mixing Omar's $4$ with the threshold $7$ would fail a question the claim did not ask.

The opposite verdict would need $Q_{L}(4)\\le 7$, which would have required $a\\le 3.5$. The logged $Q_{L}(9)=12$ forces $a=4$.

The recovered Leah flow at $4$ metres is $8$ litres a minute, above $7$, so the statement is True.`,

    `**B.** → True

Omar's well is $Q_{O}(d)=k d^{\\frac{3}{2}}$, and the logged $4$ litres a minute at $4$ metres pins $k$. This letter asks whether Omar overtakes Leah before $10$ metres.

The overview already recovered $k=\\frac{1}{2}$ and the ratio $Q_{O}/Q_{L}=d/8$, which equals $1$ at $d=8$. Eight metres is shallower than $10$. The extra arithmetic is that meeting, which this letter owns:

**1.** The recovered rules are $Q_{L}(d)=4d^{\\frac{1}{2}}$ and $Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}$. Their ratio simplifies by cancelling $d^{\\frac{1}{2}}$:

$$\\frac{Q_{O}(d)}{Q_{L}(d)}=\\frac{d}{8}$$

**2.** Set the ratio equal to $1$: $d=8$. Check the common flow,

$$Q_{L}(8)=4\\cdot 2\\sqrt{2}=8\\sqrt{2}\\approx 11.3$$

which matches $Q_{O}(8)=\\frac{1}{2}\\cdot 8\\sqrt{2}$. They meet at $8$ metres, before $10$.

**3.** A rushed solver who equated coefficients $4=1/2$ and ignored exponents would never find a meeting. Another who solved $4\\sqrt{d}=\\frac{1}{2}d$ without the remaining square root would report $d=8$ anyway by accident, or $d=64$ if the algebra slipped. The leftover power is $d^{1}$, so the unique positive meeting is $d=8$.

**4.** Extra check past $10$ metres is letter C's job. This letter only needs the meeting to sit before $10$. At $d=9$, still before $10$, the ratio is $9/8>1$, so Omar is already ahead by then.

The opposite verdict would need a meeting at $d\\ge 10$, which would have required a smaller $k$ or a larger $a$. With the two logged pairs, they meet at $8$.

The recovered crossing is $d=8$ metres, before $10$, so the statement is True.`,

    `**C.** → True

Once Omar is ahead, the claim is that he stays ahead at every greater depth. That is a uniqueness-of-crossing question, not a new meeting.

The overview already recorded that ratio $(2)$ crosses $1$ only once. Past $d=8$ the leftover factor $d/8$ exceeds $1$ and keeps climbing, because it is a positive power of $d$. A second crossing would need that ratio to come back through $1$, which a strictly increasing leftover cannot do.

**1.** Extra arithmetic at $d=16$, a doubling past the crossing:

$$Q_{L}(16)=16, \\qquad Q_{O}(16)=32$$

so Omar leads by $16$ litres a minute, twice Leah's flow. At $d=32$,

$$Q_{L}(32)=4\\sqrt{32}=16\\sqrt{2}\\approx 22.6, \\qquad Q_{O}(32)=\\frac{1}{2}\\cdot 32\\sqrt{32}=16\\cdot 4\\sqrt{2}\\approx 90.5$$

the lead has widened further. There is no later catch-up.

**2.** A rushed solver who remembered that a larger coefficient can lead on small inputs might wait for Leah's $a=4$ to "kick back in" at great depth. Coefficients do not kick back in. The larger exponent, Omar's $\\frac{3}{2}$ against Leah's $\\frac{1}{2}$, takes over after the unique crossing and stays.

**3.** Letter B found the crossing before $10$ metres. This letter says what happens after it. The two letters are the same ratio $d/8$, read on two sides of $1$.

The opposite verdict would need equal exponents, or a ratio that was not monotone. With leftover power $d^{1}$, Omar stays ahead past $d=8$.

The recovered ratio climbs through $1$ only once, so the statement is True.`,

    `**D.** → False

The claim is that the two wells together still follow a single power of depth.

The overview already recorded that the sum $4d^{\\frac{1}{2}}+\\frac{1}{2}d^{\\frac{3}{2}}$ is not a single monomial. Distinct exponents cannot be absorbed into one power. A sum of two powers is a power only when the exponents match.

**1.** Extra arithmetic that shows the sum refusing a single exponent: the ratio of the sum at $d=16$ to the sum at $d=4$ is

$$\\frac{Q_{L}(16)+Q_{O}(16)}{Q_{L}(4)+Q_{O}(4)}=\\frac{16+32}{8+4}=4$$

If the sum were $c d^{r}$, that ratio would equal $4^{r}$, so $r=1$. Checking another pair, $d=36$ against $d=4$:

$$Q_{L}(36)+Q_{O}(36)=24+108=132, \\qquad \\frac{132}{12}=11$$

while $9^{1}=9$ and $9^{\\frac{3}{2}}=27$, neither of which is $11$. No single $r$ fits both ratios.

**2.** A rushed solver who added the exponents $\\frac{1}{2}+\\frac{3}{2}=2$ and declared a square has added the wrong objects. Exponents add under multiplication of powers, not under addition of flows. Another who factored $d^{\\frac{1}{2}}\\bigl(4+\\frac{1}{2}d\\bigr)$ has a product of a power with a linear polynomial, which is still not a single power.

**3.** Letter E says Omar's flow alone is a power with exponent above one. The sum is a different object. Mixing "Omar grows faster than depth" with "the sum is a power of depth" is two claims glued together.

The opposite verdict would need matching exponents on the two wells. The stem's $\\frac{1}{2}$ and $\\frac{3}{2}$ do not match.

The recovered joint flow is a sum of two powers, so the statement is False.`,

    `**E.** → True

Omar's flow is $Q_{O}(d)=\\frac{1}{2}d^{\\frac{3}{2}}$, and the claim is that this flow grows faster than depth.

The overview already recorded that Omar's exponent $\\frac{3}{2}$ exceeds one. Flow outruns depth whenever the exponent exceeds one: multiplying depth by $k$ multiplies Omar's flow by $k^{\\frac{3}{2}}$, a larger factor than $k$.

Leah's exponent $\\frac{1}{2}$ sits below one, so Leah's flow grows more slowly than depth. The two wells disagree about speed, and this letter is about Omar.

**1.** Extra arithmetic on a doubling of Omar's logged depth: from $4$ metres to $8$ metres, depth doubles, and

$$Q_{O}(8)/Q_{O}(4)=2^{\\frac{3}{2}}=2\\sqrt{2}\\approx 2.83$$

so flow multiplies by about $2.83$, which is faster than the doubling of depth. Leah on the same doubling multiplies by $\\sqrt{2}\\approx 1.41$, slower than depth.

**2.** A rushed solver who compared coefficients $\\frac{1}{2}<4$ and declared Omar slower has compared the wrong objects. Coefficients set levels; exponents set speed. Another who saw $\\frac{3}{2}$ as "three over two, so slower than two" mixed a fraction with a comparison to $1$. The comparison that matters for "faster than depth" is to $1$, not to $2$.

**3.** Letter C used the larger exponent to keep Omar ahead past the crossing. This letter names that larger exponent as a growth-rate claim against depth itself.

The opposite verdict would need $k\\le 1$ on Omar's exponent. The stem's $\\frac{3}{2}$ sits above $1$.

The recovered Omar exponent exceeds one, so the statement is True.`,
  ],

  "math-8-14": [
    `**A.** → True

Nora bills a run as a fixed setup plus a square-root charge, $C(n)=F+A n^{\\frac{1}{2}}$. This letter asks whether that bill is a power function of the run.

The overview already recovered $F=50$ and $A=50$, so $C(n)=50+50\\sqrt{n}$. A power of the run cannot carry a leftover constant. The setup of $50$ euros kills that shape.

Two invoices were needed because two unknowns sat in the bill. Subtracting $F+4A=250$ from $F+8A=450$ isolated $A=50$, and then $F=50$. The recovered intercept is not zero.

**1.** Extra arithmetic that shows the leftover constant in a ratio: $C(16)=250$ and $C(64)=450$, so the ratio of bills is $450/250=1.8$. If the bill were $c n^{r}$, that ratio would equal $4^{r}$. Then $4^{r}=1.8$ would force $r=\\log 1.8/\\log 4\\approx 0.42$, but checking $C(36)/C(16)=350/250=1.4$ against $ (36/16)^{0.42}\\approx 1.47$ already disagrees. No single power fits.

**2.** A rushed solver who dropped the setup and called $50\\sqrt{n}$ a power has described a different bill. The stem charges the setup on every run. Another who wrote $C(n)=(50\\sqrt{n})^{1}$ and declared a power has absorbed the intercept into a wish.

**3.** Letter D and E are levels of this same affine-looking bill. Those levels exist because $F$ and $A$ were recovered. The function class is settled by $F\\neq 0$, independently of those later figures.

The opposite verdict would need $F=0$. With a $50$-euro setup, the bill is not a power of $n$.

The recovered setup of $50$ euros kills the power-function shape, so the statement is True.`,

    `**B.** → False

The claim is that if Nora prints enough copies, the total bill starts to fall.

The overview already recorded that the total bill keeps rising. The slope of the recovered bill is

$$C'(n)=25 n^{-\\frac{1}{2}}$$

which stays positive for every $n>0$. Printing more copies never turns the total downward. Unit cost can fall while the total still climbs; those are different claims, and letter C is the unit-cost one.

**1.** Extra arithmetic at a huge run: $C(10000)=50+50\\cdot 100=5050$ euros, above $C(64)=450$, above $C(16)=250$. The total is still climbing at ten thousand copies. There is no later peak in $C(n)$.

**2.** A rushed solver who watched unit cost fall and concluded that the total must eventually fall has mixed letters B and C. Spreading a setup lowers the per-copy price and still adds a positive square-root charge on every extra copy. Another who used a demand curve, where raising quantity can cut revenue, has left Nora's print shop for a different model.

**3.** Setting $C'(n)=0$ would require $25/\\sqrt{n}=0$, which never happens. A negative $A$ would have been needed for a falling total. The stem's $A=50$ is positive.

The recovered slope stays positive, so the statement is False.`,

    `**C.** → True

The claim is that a longer run is cheaper per copy.

The overview already recorded that unit cost falls. Cost per copy is

$$\\frac{C(n)}{n}=\\frac{50}{n}+50 n^{-\\frac{1}{2}}$$

Both pieces decline as the run lengthens: the setup is spread over more copies, and the leftover exponent on the variable term is negative. A longer run is cheaper per copy.

**1.** Extra arithmetic at the two invoices: $C(16)/16=250/16=15.625$ euros per copy, and $C(64)/64=450/64\\approx 7.03$ euros per copy. The fourfold run more than halves the per-copy price. At $n=36$, $C(36)/36=350/36\\approx 9.72$, sitting between those two averages, as a falling sequence should.

**2.** A rushed solver who saw the total climb from $250$ to $450$ and concluded that copies get more expensive has mixed the total with the average. Letter B's rising total is compatible with this falling average. Another who looked only at the setup piece $50/n$ and ignored the $50/\\sqrt{n}$ piece still has a falling average, just an incomplete one.

**3.** What would flip this verdict is a positive leftover exponent on the variable term after dividing by $n$, which would need the original exponent on $n$ to exceed $1$. The stem's $\\frac{1}{2}<1$, so average cost falls.

The recovered per-copy cost declines with the run, so the statement is True.`,

    `**D.** → True

This is a level at $25$ copies, asked against a threshold of $280$ euros.

The overview already evaluated $C(25)=300$. Three hundred sits above $280$. Twenty-five is a perfect square, so the square root is $5$, and $50+50\\cdot 5=300$.

**1.** A rushed solver who dropped the setup and reported $50\\cdot 5=250$ would sit below $280$ and fail the threshold for the wrong bill. The setup of $50$ is what pushes $250$ up to $300$. Another who used $F=0$ from a power-function wish has the same miss.

**2.** Extra arithmetic at $n=16$, the first invoice: $C(16)=250$, which sits below $280$. The threshold test is about $n=25$ specifically. Between $16$ and $25$ copies the bill crosses $280$, and at $25$ it has already reached $300$.

**3.** Letter E asks for a $400$ euro threshold at $36$ copies and fails. This letter's $280$ at $25$ copies is a different comparison. Mixing those two thresholds is how a solver could flip one of them by accident.

The opposite verdict would need $C(25)\\le 280$, which would have required a smaller $A$ or a smaller $F$. The two invoices force $300$.

The recovered bill at $25$ copies is $300$ euros, above $280$, so the statement is True.`,

    `**E.** → False

This is a level at $36$ copies, asked against a threshold of $400$ euros.

The overview already evaluated $C(36)=350$. Three hundred and fifty does not sit above $400$. Thirty-six is a perfect square, so the square root is $6$, and $50+50\\cdot 6=350$.

The claim wants more than $400$. The bill is $350$, which is $50$ euros light of that line, and that $50$ is exactly the setup: a solver who computed $50\\cdot 8=400$ used the eight-copy-root from the second invoice, $n=64$, not $n=36$.

**1.** Extra arithmetic that manufactures $400$: $C(64)=450$ is the second invoice, and dropping the setup from $450$ leaves $400$, which is $A\\cdot 8$. Pointing that $400$ at $n=36$ is a mix of two runs. Directly, $C(36)=350\\neq 400$.

**2.** A rushed solver who interpolated linearly between $C(16)=250$ and $C(64)=450$ at $n=36$ would report $250+200\\cdot(20/48)\\approx 333$, still not above $400$, for the wrong reason. The square-root bill is $350$.

**3.** Letter D's $300>280$ at $n=25$ does not license $350>400$ at $n=36$. Thresholds are local. The recovered $350$ sits $50$ below $400$.

The recovered bill at $36$ copies is $350$ euros, not more than $400$, so the statement is False.`,
  ],

  "math-8-15": [
    `**A.** → True

The refinery turns purity into metal by $M(u)=A u^{\\frac{3}{2}}$, then metal into strength by $S=\\frac{1}{2}M^{\\frac{2}{3}}$. This letter asks whether the composed strength is proportional to purity.

The overview already recovered $A=8$ from the audited gain of $296$ tonnes between purities $9$ and $16$, and then composed $S(u)=2u$. The inner exponent $\\frac{3}{2}$ and the outer exponent $\\frac{2}{3}$ multiply to $1$, so strength is a linear monomial in purity, coefficient $2$. That is proportionality.

**1.** The extra arithmetic this letter owns is the composition, not a re-display of $A=8$ as a fresh unknown:

$$S=\\frac{1}{2}\\bigl(8u^{\\frac{3}{2}}\\bigr)^{\\frac{2}{3}}=\\frac{1}{2}\\cdot 8^{\\frac{2}{3}}\\cdot u=\\frac{1}{2}\\cdot 4\\cdot u=2u$$

because $8^{\\frac{2}{3}}=(2^{3})^{\\frac{2}{3}}=2^{2}=4$. The coefficient $2$ is forced by $A=8$ together with the outer $\\frac{1}{2}$.

**2.** A rushed solver who added the exponents $\\frac{3}{2}+\\frac{2}{3}$ would report $S\\propto u^{\\frac{13}{6}}$ and miss proportionality. Exponents multiply under composition, not add. Another who forgot the outer $\\frac{1}{2}$ would report $S=4u$ and still have proportionality, just with the wrong coefficient. The claim is the function class, not the $2$.

**3.** Extra check at the audited purities: $S(9)=18$ and $S(16)=32$, which sit in the ratio $32/18=16/9$, equal to the purity ratio. That is the fingerprint of proportionality, and it uses $S(16)=32$, a figure the overview's answer line did not need to stress.

If the outer exponent had been anything but the reciprocal of $\\frac{3}{2}$, the composition would not have been linear. The stem's $\\frac{2}{3}$ is exactly that reciprocal.

The recovered strength is $S(u)=2u$, proportional to purity, so the statement is True.`,

    `**B.** → False

The claim is that the refinery quote and the rival quote never meet.

The overview already set $2u=1.8u+5$ and recovered the meeting at $u=25$. The extra arithmetic is that linear crossing, which this letter owns:

**1.** After composition, the refinery quotes $S(u)=2u$. The rival quotes $1.8u+5$. Set them equal:

$$2u=1.8u+5$$

**2.** Then $0.2u=5$ and $u=25$. At that purity both quotes equal $50$. They meet.

A rushed solver who compared slopes $2>1.8$ and concluded the refinery is always above, so they never meet, has forgotten the rival's intercept of $5$. A steeper line through the origin starts below an affine rival and then overtakes it. Another who set $8u^{\\frac{3}{2}}=1.8u+5$ without composing would be solving a different and harder equation, mixing metal tonnes with strength units.

**3.** Extra arithmetic on either side of $25$: at $u=16$, refinery $32$ against rival $1.8\\cdot 16+5=33.8$, so the rival still leads by $1.8$. At $u=36$, refinery $72$ against rival $1.8\\cdot 36+5=69.8$, so the refinery has overtaken. The crossing at $25$ sits between those two purities.

The opposite verdict would need parallel quotes with a gap, for example a rival $2u+5$. The stem's rival has slope $1.8\\neq 2$, so they meet once.

The recovered quotes meet at purity $25$, so the statement is False.`,

    `**C.** → False

The claim is that the rival's quote $1.8u+5$ is a power function of purity.

The overview already recorded that the rival's intercept keeps it from being a power of $u$. At purity zero the rival still equals $5$, so there is a leftover constant. A power of purity cannot carry an intercept: $A u^{r}$ is $0$ at $u=0$ whenever $r>0$, and undefined or infinite when $r\\le 0$.

**1.** Extra arithmetic in a ratio, the same test as Nora's setup: the rival at $u=10$ is $23$, at $u=20$ is $41$, and $41/23\\approx 1.78$, while $2^{r}=1.78$ would force $r\\approx 0.83$. Checking $u=40$ against $u=10$, the rival is $77$, ratio $7.7$, while $4^{0.83}\\approx 3.2$, a mismatch. No single power fits.

**2.** A rushed solver who dropped the $5$ and called $1.8u$ a power has described a different quote. The stem's rival includes the intercept. Another who wrote $1.8u^{1}+5u^{0}$ and declared "a sum of powers is a power" has confused a polynomial with a monomial.

**3.** Letter A said the refinery's composed quote is a power, in fact a proportional one. The rival is affine, not a power. Mixing those two quotes is how a solver could call both of them powers.

The opposite verdict would need the rival to have intercept $0$. The stem's intercept is $5$.

The recovered rival quote carries an intercept, so the statement is False.`,

    `**D.** → True

This is a level of the composed refinery quote at purity $36$, asked against a threshold of $70$.

The overview already evaluated $S(36)=72$. Seventy-two sits above $70$. Once $S(u)=2u$, strength at purity $36$ is $2\\cdot 36=72$.

**1.** A rushed solver who used metal instead of strength, $M(36)=8\\cdot 36^{\\frac{3}{2}}=8\\cdot 216=1728$, would blow past $70$ for the wrong quantity. Another who used the rival at $u=36$, $1.8\\cdot 36+5=69.8$, would sit just below $70$ and fail the threshold on the wrong quote.

**2.** Extra arithmetic at $u=25$, the crossing: $S(25)=50$, which sits below $70$. The threshold test is about $u=36$ specifically. Between $25$ and $36$ the refinery quote crosses $70$, and at $36$ it has reached $72$.

**3.** Letter E asks for a threshold of $20$ at $u=9$ and fails. This letter's $70$ at $u=36$ is a different comparison. The recovered $72$ is $2$ above $70$, a tight but genuine clearance.

The opposite verdict would need $S(36)\\le 70$, which would have required a composed coefficient of $70/36<2$. The audited gain forces the coefficient $2$.

The recovered strength at purity $36$ is $72$, above $70$, so the statement is True.`,

    `**E.** → False

This is a level at purity $9$, asked against a threshold of $20$.

The overview already evaluated $S(9)=18$. Eighteen does not sit above $20$. Once $S(u)=2u$, strength at purity $9$ is $2\\cdot 9=18$.

The claim wants a strength already above $20$. Eighteen sits $2$ below that line. A solver who used metal $M(9)=8\\cdot 27=216$ has left the strength stage. A solver who used $S=\\frac{1}{2}\\cdot 9^{\\frac{2}{3}}$ skipped the metal stage and the coefficient $A$.

**1.** Extra arithmetic that manufactures $20$: half of $40$, as if the audited $Q(25)=40$ from a different task had leaked in, or $S=\\frac{1}{2}M$ with $M=40$. Directly, $S(9)=18$. The rival at $u=9$ is $1.8\\cdot 9+5=21.2$, which does sit above $20$, on the wrong quote.

**2.** Letter D's $72>70$ at $u=36$ does not license $18>20$ at $u=9$. The composed line $S=2u$ passes through the origin, so small purities give small strengths. Purity $9$ is below the crossing $25$, and $18$ is below $20$.

The recovered strength at purity $9$ is $18$, not above $20$, so the statement is False.`,
  ],

  "math-8-16": [
    `**A.** → True

Peak load is $L(x)=A x^{r}$, and the doubling rule that doubling jobs multiplies load by $4$ is what pins the exponent. This letter asks whether that recovered $r$ exceeds one, so that load grows faster than the job count.

The overview already recovered $r=2$ from $2^{r}=4$. An exponent of $2$ sits above one, so multiplying jobs by $k$ multiplies load by $k^{2}$, a larger factor. Peak load grows faster than the job count.

**1.** Extra arithmetic on the recorded eight-job run: doubling those $8$ jobs is $16$ jobs, and the recovered $L(16)=128$ against $L(8)=32$ is a factor $4$, which is faster than the doubling of jobs. That is $2^{2}=4$ at a concrete pair, not a new coefficient.

**2.** A rushed solver who compared $L(8)=32$ with $8$ and saw load four times jobs at that one point has a coincidence of $A=1/2$ and $x=8$, not a growth-rate statement. Growth rate is $r$ against $1$, independent of $A$. Another who solved $2^{r}=4$ as $r=4$ mixed a multiplier with an exponent.

**3.** Letter B is the reverse scale question with $k=1/2$. Letter C is the average $L/x$. This letter is only $r>1$. If the doubling had multiplied load by $1.5$, then $r<1$ and this claim would have been false.

The recovered exponent is $2$, above one, so the statement is True.`,

    `**B.** → False

Halving the job count is the multiplier $k=\\frac{1}{2}$, and the claim is that peak load halves as well.

The overview already recorded that halving jobs quarters the load, because $r=2$ and $\\bigl(\\frac{1}{2}\\bigr)^{2}=\\frac{1}{4}$. The coefficient $A$ cancels in the ratio

$$\\frac{L(x/2)}{L(x)}=\\Bigl(\\frac{1}{2}\\Bigr)^{2}=\\frac{1}{4}$$

**1.** Extra arithmetic on the recorded run: half of $8$ jobs is $4$ jobs, and $L(4)=\\frac{1}{2}\\cdot 16=8$ against $L(8)=32$. Half of $32$ would have been $16$, and $8$ is not $16$. Load drops to a quarter, $32/4=8$.

**2.** A rushed solver who used exponent $1$ would have halved the load, which is exactly the false claim. Another who used $\\bigl(\\frac{1}{2}\\bigr)^{3}=\\frac{1}{8}$ mixed in a cube. The doubling rule $2^{r}=4$ already forced $r=2$, so the halving factor is locked.

**3.** Letter A said load outruns jobs going up. This letter is the same square going down. A square law is not symmetric with a linear guess: doubling multiplies by $4$, and halving multiplies by $1/4$, not by $1/2$.

The opposite verdict would need $r=1$. With $r=2$, halving jobs quarters load.

The recovered halving factor is $1/4$, not $1/2$, so the statement is False.`,

    `**C.** → True

The claim is that peak load per job rises as the job count rises.

The overview already recovered $L(x)=\\frac{1}{2}x^{2}$, so load per job is $\\frac{L(x)}{x}=\\frac{1}{2}x$. The leftover exponent is positive, so that average climbs with the job count. An exponent above one forces a rising average product.

**1.** Extra arithmetic at the recorded run and a neighbour: $L(8)/8=32/8=4$, and $L(10)/10=50/10=5$, already higher. At $x=16$, $L(16)/16=128/16=8$, twice the eight-job average. The average is itself a linear function of $x$, coefficient $1/2$.

**2.** A rushed solver who divided $32$ by $8$ and stopped, calling $4$ a constant average, has evaluated one point. The leftover $\\frac{1}{2}x$ is not constant. Another who used $r<1$ intuition from a square-root technology has the wrong recovered exponent.

**3.** Letter A said $r>1$ as a growth-rate comparison with $x$. This letter is the same $r>1$ as a rising average. Letter B's quartering under a halving is compatible: fewer jobs, smaller average, $L(4)/4=2$ below $L(8)/8=4$.

The opposite verdict would need $r\\le 1$. With $r=2$, load per job rises.

The recovered average $\\frac{1}{2}x$ climbs with the job count, so the statement is True.`,

    `**D.** → False

The hardware alarm trips at a peak load of $200$, and the claim is that it already trips at $16$ simultaneous jobs.

The overview already evaluated $L(16)=128$. One hundred and twenty-eight sits below $200$. Sixteen jobs are a perfect square relative to the recorded $8$ only in the scale sense $k=2$, and $32\\cdot 4=128$, not $200$.

**1.** Extra arithmetic that inverts the alarm, which this letter can use as its own check: $L(x)=200$ gives $\\frac{1}{2}x^{2}=200$, so $x^{2}=400$ and $x=20$. The alarm first trips at $20$ jobs, which sits past $16$. At $16$ jobs there is a $72$-point gap still to go.

**2.** A rushed solver who doubled the recorded $32$ because $16=2\\cdot 8$ would report $64$ and still sit below $200$, for the wrong scale. Another who used $L(16)=16^{2}=256$ dropped $A=1/2$ and would have tripped the alarm by accident.

**3.** Letter E asks for a threshold of $40$ at $10$ jobs and passes. This letter's $200$ at $16$ jobs is a different comparison. Mixing those two thresholds is how a solver could trip the alarm four jobs early.

The opposite verdict would need $L(16)\\ge 200$, which would have required $A\\ge 200/256$. The recorded $L(8)=32$ forces $A=1/2$ and $L(16)=128$.

The recovered load at $16$ jobs is $128$, below $200$, so the statement is False.`,

    `**E.** → True

This is a level at $10$ jobs, asked against a threshold of $40$.

The overview already evaluated $L(10)=50$. Fifty sits above $40$. Ten squared is $100$, and half of $100$ is $50$.

**1.** A rushed solver who scaled the recorded $32$ linearly by $10/8$ would report $40$ on the nose and still pass a weak reading of "above $40$," for the wrong reason. The square law gives $50$, which clears $40$ by $10$ points. Another who used $L(10)=10^{2}=100$ dropped $A$ and still passed.

**2.** Extra arithmetic at $x=8$, the recorded run: $L(8)=32$, which sits below $40$. The threshold test is about $x=10$ specifically. Between $8$ and $10$ jobs the load crosses $40$, and at $10$ it has reached $50$.

**3.** Letter D's alarm at $200$ is a different threshold. $50>40$ does not license $128>200$. The recovered $50$ is a clear clearance of $40$.

The recovered load at $10$ jobs is $50$, above $40$, so the statement is True.`,
  ],

  "math-8-17": [
    `**A.** → True

Usable responses follow $Q(x)=A x^{\\frac{1}{2}}$, and the recorded gain of $60$ responses between intensities $25$ and $100$ pins $A$. This letter is a slope comparison: whether an extra unit of intensity adds more usable responses at $25$ than at $100$.

The overview already recovered $A=12$ and recorded $Q'(25)>Q'(100)$. The recovered rule $Q(x)=12x^{\\frac{1}{2}}$ has derivative

$$Q'(x)=6 x^{-\\frac{1}{2}}$$

The leftover exponent is negative, so the slope itself falls as intensity rises. An extra unit adds more at $25$ than at $100$.

**1.** Extra arithmetic at the two named intensities:

$$Q'(25)=6/5=1.2, \\qquad Q'(100)=6/10=0.6$$

so an extra unit at $25$ adds $1.2$ responses, and at $100$ only $0.6$. The later unit buys half as much as the earlier one, which is $\\sqrt{100/25}=2$ in the denominator.

**2.** A rushed solver who saw $Q(100)=120>Q(25)=60$ and concluded that later intensity is more productive has confused height with slope. The survey is still gathering responses, just more slowly. Another who used $r>1$ intuition has the wrong exponent.

**3.** Letter C is the falling average $Q/x$. This letter is the falling marginal $Q'$. Both are the $r=\\frac{1}{2}<1$ story, read two ways.

The opposite verdict would need $r>1$. With $r=\\frac{1}{2}$, an extra unit adds more at $25$ than at $100$.

The recovered slope is larger at $25$ than at $100$, so the statement is True.`,

    `**B.** → False

Doubling outreach intensity is the multiplier $k=2$, and the claim is that usable responses double.

The overview already recorded that doubling intensity multiplies $Q$ by $\\sqrt{2}$, not by $2$. The coefficient $A$ cancels in the ratio

$$\\frac{Q(2x)}{Q(x)}=2^{\\frac{1}{2}}\\neq 2$$

**1.** Extra arithmetic on the recorded pair: intensity $25$ doubled is $50$, not the logged $100$. Then

$$Q(50)=12\\sqrt{50}=12\\cdot 5\\sqrt{2}=60\\sqrt{2}\\approx 84.9$$

against $Q(25)=60$. Twice $60$ would have been $120$, and $85$ is not $120$. The logged jump from $25$ to $100$ is a quadrupling, which does double $Q$ from $60$ to $120$, and that is letter A's intensity pair, not a doubling.

**2.** A rushed solver who used the quadrupling $25\\to 100$ as if it were a doubling has mixed $k=4$ with $k=2$. Another who used exponent $1$ is telling a proportional story the recorded gain already contradicts.

**3.** Letter D will cap intensity at $400$, a quadrupling of $100$, which multiplies $Q$ by $2$ and yields $240$. That later doubling of responses is a quadrupling of intensity, the same identity as here with $k=4$ rather than $k=2$.

The opposite verdict would need $r=1$. With $r=\\frac{1}{2}$, doubling intensity does not double responses.

The recovered doubling factor is $\\sqrt{2}$, not $2$, so the statement is False.`,

    `**C.** → True

The claim is that usable responses per unit of intensity fall as outreach rises.

The overview already recorded that average product $12x^{-\\frac{1}{2}}$ falls. The leftover exponent is negative, so that average declines as $x$ grows. Average and marginal product move together on a power below one.

**1.** Extra arithmetic at the two logged intensities: $Q(25)/25=60/25=2.4$ responses per unit, and $Q(100)/100=120/100=1.2$, already half as large. At the cap $x=400$, $Q(400)/400=240/400=0.6$, half again. The average is itself $12/\\sqrt{x}$.

**2.** A rushed solver who saw $Q$ rise from $60$ to $120$ and concluded that intensity is becoming more productive has mixed the total with the average. Letter A's falling slope is the same story. Another who used $r>1$ would have a rising average, the server-load story of task $16$, not this survey.

**3.** What would flip this verdict is $r>1$. The stem's $\\frac{1}{2}<1$ forces a falling average.

The recovered average $12x^{-\\frac{1}{2}}$ falls as outreach rises, so the statement is True.`,

    `**D.** → False

The budget cap is on intensity at $400$, and the claim is that this cap allows at most $200$ usable responses.

The overview already evaluated $Q(400)=240$. Two hundred and forty is not a ceiling of $200$. The extra arithmetic is that level at the largest legal intensity:

$$Q(400)=12\\cdot 20=240$$

The cap constrains $x$, not $Q$ directly. Turning a cap on $x$ into a cap on $Q$ requires evaluating the recovered rule at $x=400$, and that evaluation is $240$, which sits $40$ above $200$.

**1.** A rushed solver who used $A=10$ from a mis-divided $60/(10-4)$ wait, $60/6=10$, would report $Q(400)=200$ on the nose and make the claim true by a wrong coefficient. The recorded gain is $A(10-5)=60$, so $A=12$, not $10$. Another who capped $Q$ at $200$ by policy, rather than by the intensity cap, has rewritten the stem.

**2.** Extra check: $Q(225)=12\\cdot 15=180$, which does sit under $200$, at an intensity of $225$ well below the cap. The cap still allows the further climb from $180$ to $240$.

**3.** Letter E's $Q(81)=108>100$ is a different threshold. $240>200$ is the comparison that kills this claim.

The recovered yield at the cap is $240$ responses, not a ceiling of $200$, so the statement is False.`,

    `**E.** → True

This is a level at intensity $81$, asked against a threshold of $100$ usable responses.

The overview already evaluated $Q(81)=108$. One hundred and eight sits above $100$. Eighty-one is a perfect square, so the square root is $9$, and $12\\cdot 9=108$.

**1.** A rushed solver who used $A=10$ would report $90$ and fail the threshold on a wrong coefficient. Another who computed $12\\cdot 81=972$ skipped the root.

**2.** Extra arithmetic at $x=64$, a nearby perfect square: $Q(64)=12\\cdot 8=96$, which sits below $100$. The threshold test is about $x=81$ specifically. Between $64$ and $81$ the yield crosses $100$, and at $81$ it has reached $108$.

**3.** Letter D's $240$ at the cap is a different level. $108>100$ is a modest clearance, genuine because $A=12$ rather than $10$.

The recovered yield at intensity $81$ is $108$, above $100$, so the statement is True.`,
  ],

  "math-8-18": [
    `**A.** → True

Automated inspection costs $C(n)=a n^{2}$ and manual inspection costs $D(n)=b n$, and at $n=16$ both bills equal $256$. This letter asks whether that common reading is the only positive meeting.

The overview already recovered $a=1$, $b=16$, and $C(n)-D(n)=n(n-16)$. On $n>0$ the roots are $n=0$, outside the domain, and $n=16$. They meet only at sixteen documents.

**1.** Extra arithmetic at a neighbour on each side: at $n=15$, $C(15)=225$ and $D(15)=240$, so manual is still cheaper by $15$. At $n=17$, $C(17)=289$ and $D(17)=272$, so automated is already more expensive by $17$. The sign change of the gap is a single crossing at $16$, not a pair of crossings.

**2.** A rushed solver who saw two power functions and expected two meetings has counted degrees loosely. $n^{2}-16n=n(n-16)$ is quadratic, but one root is $0$, excluded by $n>0$. Another who set $a=b$ and ignored the recorded $256$ would never find a meeting of these two shapes except at $0$.

**3.** Letter B reads the same factor $n-16$ past $16$ and finds automated more expensive. This letter is the uniqueness of the root. Equal exponents would have been needed for no meeting or for a meeting at every $n$.

The recovered difference has a single positive root at $n=16$, so the statement is True.`,

    `**B.** → False

The claim is that the automated procedure is cheaper than the manual one at every batch above $16$ documents.

The overview already recorded that the gap $n(n-16)$ is positive for $n>16$, so $C>D$. The quadratic automated bill is the more expensive one past the meeting, not the cheaper one. Automation is cheaper only below $16$.

**1.** Extra arithmetic at $n=25$, which letter D will also use: $C(25)=625$ and $D(25)=400$, so automated is more expensive by $225$, not cheaper. At $n=20$, $C(20)=400$ and $D(20)=320$, still a more expensive automated bill by $80$.

**2.** A rushed solver who thought "machines get cheaper on large batches" has imported an economies-of-scale story the quadratic cost does not tell. A square grows faster than a line. Another who swapped $C$ and $D$ after seeing $a=1<b=16$ compared coefficients instead of the bills at large $n$. Coefficients set the crossing; past the crossing the larger exponent wins, and that larger exponent is on automated cost.

**3.** Letter A found the unique meeting. This letter reads the sign past that meeting. The claim's "cheaper" is the reverse of that sign.

The opposite verdict would need the quadratic on the manual side. With $C(n)=n^{2}$ and $D(n)=16n$, automated is more expensive for $n>16$.

The recovered gap is positive past $16$, so automated is not cheaper there, so the statement is False.`,

    `**C.** → True

The claim is that the automated procedure's cost per document rises with the batch.

The overview already recorded that automated unit cost equals $n$. From $C(n)=n^{2}$,

$$\\frac{C(n)}{n}=n$$

The leftover exponent is positive, so unit cost rises with the batch. A quadratic power forces a rising average cost.

**1.** Extra arithmetic at the meeting and past it: at $n=16$, automated unit cost is $16$ euros per document, matching the manual's constant $16$. At $n=25$, automated unit cost is $25$, already above the manual's $16$. At $n=9$, automated unit cost is $9$, below $16$, which is why automation is cheaper on small batches.

**2.** A rushed solver who divided $256$ by $16$ and called $16$ a constant automated unit cost has evaluated one point, the meeting, where the two unit costs happen to agree. The leftover $n$ is not constant. Another who used $r<1$ intuition has the wrong exponent on $C$.

**3.** Manual unit cost is $D(n)/n=16$, constant. Automated unit cost is $n$, rising. That is why they meet once and why automation loses on large batches.

The opposite verdict would need $r\\le 1$ on $C$. With $r=2$, automated cost per document rises.

The recovered automated unit cost is $n$, which rises with the batch, so the statement is True.`,

    `**D.** → False

The claim is that at $25$ documents the two procedures differ by less than $100$.

The overview already evaluated the gap $225$ at $n=25$. Two hundred and twenty-five is not less than $100$. The extra arithmetic is the two bills:

$$C(25)=625, \\qquad D(25)=400, \\qquad 625-400=225$$

**1.** A rushed solver who computed $D(25)-C(16)=400-256=144$ mixed a $25$-document manual bill with the meeting. Another who used $|25-16|\\times$ something small, as if the gap grew linearly by $9$, might report $9\\cdot 16=144$ or $9\\cdot 9=81$ and pass the "$<100$" test by a wrong gap. The factored gap is $n(n-16)=25\\cdot 9=225$.

**2.** Extra arithmetic at $n=20$, a closer neighbour: the gap is $20\\cdot 4=80$, which does sit under $100$. The claim is about $n=25$ specifically, where the gap has already reached $225$. Between $20$ and $25$ documents the gap crosses $100$.

**3.** Letter E's $C(9)=81<100$ is a level of one bill, not a gap. Mixing those two "$100$" figures is a different task.

The recovered gap at $25$ documents is $225$, not less than $100$, so the statement is False.`,

    `**E.** → True

This is a level of the automated bill at $9$ documents, asked against a threshold of $100$.

The overview already evaluated $C(9)=81$. Eighty-one sits under $100$. Nine squared is $81$, and $a=1$, so the automated bill is $81$.

**1.** A rushed solver who used $D(9)=144$ would sit above $100$ on the wrong procedure. The claim is about automated cost. Another who used $a=16$ from a swapped coefficient would report $16\\cdot 81$ and blow past $100$.

**2.** Extra arithmetic at $n=10$: $C(10)=100$ on the nose. The threshold "under $100$" is about $n=9$ specifically, one document below that round figure. At $n=8$, $C(8)=64$, still under $100$ and not the claimed batch.

**3.** Letter D's gap of $225$ at $n=25$ is a different comparison. $81<100$ is a clear clearance on the small-batch side of the meeting.

The recovered automated bill at $9$ documents is $81$, under $100$, so the statement is True.`,
  ],

  "math-8-19": [
    `**A.** → True

Warehouse throughput is $H(s)=A s^{\\frac{1}{2}}$ pallets per hour, and the recorded $16$-staff shift of $32$ pallets pins $A$. This letter asks whether throughput grows more slowly than headcount, that is whether $r<1$.

The overview already recovered $A=8$ and recorded that the exponent $\\frac{1}{2}$ sits below one. Multiplying staff by $k$ multiplies throughput by $k^{\\frac{1}{2}}$, a smaller factor. Throughput grows more slowly than headcount.

**1.** Extra arithmetic on the recorded shift: doubling those $16$ staff is $32$ staff, and $H(32)=8\\sqrt{32}=32\\sqrt{2}\\approx 45.3$ against $H(16)=32$. Throughput multiplies by about $1.41$, slower than the doubling of headcount.

**2.** A rushed solver who compared $32$ pallets with $16$ staff and saw two pallets per person has a level of the average, not a growth-rate statement. Growth rate is $r$ against $1$. Another who used $r=2$ from a different chapter's square law has the wrong exponent.

**3.** Letter B is the doubling claim, which fails for the same $r=\\frac{1}{2}$. Letter C is the ceiling, which is a different function class. This letter is only $r<1$.

The recovered exponent sits below one, so the statement is True.`,

    `**B.** → False

Doubling the headcount is $k=2$, and the claim is that throughput doubles.

The overview already recorded that doubling staff multiplies $H$ by $\\sqrt{2}$, not by $2$. The coefficient $A$ cancels in the ratio

$$\\frac{H(2s)}{H(s)}=2^{\\frac{1}{2}}\\neq 2$$

**1.** Extra arithmetic on the recorded shift, as in letter A: $H(32)\\approx 45.3$ against $H(16)=32$, not against $64$. Twice $32$ would have been $64$. A solver who used the quadrupling $16\\to 64$, where $H(64)=64$, has mixed $k=4$ with $k=2$. Quadrupling staff does double throughput; doubling staff does not.

**2.** A rushed solver who used exponent $1$ is telling a proportional story the square-root technology contradicts. Another who used $2^{\\frac{1}{3}}$ mixed in a cube root.

**3.** Letter D will check $H(64)=64$ against the cap of $80$. That $64$ is the quadrupling identity, not this letter's doubling.

The opposite verdict would need $r=1$. With $r=\\frac{1}{2}$, doubling headcount does not double throughput.

The recovered doubling factor is $\\sqrt{2}$, not $2$, so the statement is False.`,

    `**C.** → True

The service contract caps billed throughput at $80$ pallets per hour. This letter asks whether, once that ceiling binds, billed throughput is no longer a power function of staff.

The overview already recorded the two-piece billed rule $B(s)=\\min(H(s),80)$, with the cap binding from $s=100$. From that staffing onward billed throughput is the constant $80$. A horizontal cap is not $A s^{r}$, so billed throughput is no longer a power of staff.

**1.** Extra arithmetic at the bind: $8s^{\\frac{1}{2}}=80$ gives $s^{\\frac{1}{2}}=10$ and $s=100$. At $s=121$, uncapped $H(121)=8\\cdot 11=88$, but billed $B(121)=80$. The ratio $B(121)/B(100)=1$, while $H(121)/H(100)=1.1$. A constant ratio $1$ is a power only of exponent $0$, and that exponent $0$ piece does not match the uncapped exponent $\\frac{1}{2}$ on $s<100$. One function cannot be two different powers on two intervals and still be a single power on the whole domain.

**2.** A rushed solver who said "a cap is $80 s^{0}$, which is a power" has described the capped piece alone. The billed series is the minimum of two formulas, and that minimum is not itself a monomial. Another who ignored the cap and called $H(s)$ billed throughput has rewritten the contract.

**3.** Letter D checks that $s=64$ is still uncapped. Letter E checks $s=81$, also still uncapped. This letter is the function class once $s\\ge 100$.

The recovered billed rule is a two-piece minimum, not a single power, so the statement is True.`,

    `**D.** → False

The claim is that the contract ceiling is already reached with $64$ staff.

The overview already evaluated $H(64)=64$. Sixty-four pallets per hour sits below the cap of $80$. Sixty-four staff are a perfect square, so the square root is $8$, and $8\\cdot 8=64$.

**1.** Extra arithmetic that inverts the cap: $s=100$ is where $H$ hits $80$, as in letter C. Sixty-four sits $36$ staff short of that bind. At $s=81$, letter E's $H(81)=72$, still below $80$. The ceiling is not yet reached at $64$.

**2.** A rushed solver who used $H(64)=64\\cdot 8/4$ wait, or who copied $s=64$ onto $H=80$ by mixing the cap figure with the staff figure, would trip the ceiling early. Another who used $A=5$ would report $H(64)=40$ and still sit below $80$, for a wrong coefficient.

**3.** The recovered $64$ at $64$ staff is a coincidence of $A=8$ and $\\sqrt{64}=8$, not a reason the cap of $80$ has bound. The cap is $80$, not $64$.

The recovered throughput at $64$ staff is $64$ pallets per hour, below $80$, so the statement is False.`,

    `**E.** → True

This is a level at $81$ staff, asked against a threshold of $70$ pallets per hour.

The overview already evaluated $H(81)=72$. Seventy-two sits above $70$. Eighty-one is a perfect square, so the square root is $9$, and $8\\cdot 9=72$.

**1.** A rushed solver who used $A=7$ from a misread $32/\\sqrt{16}$ wait, $32/4=8$ is the right $A$. Using $A=7$ would report $63$ and fail the threshold. Another who computed $8\\cdot 81=648$ skipped the root.

**2.** Extra arithmetic at $s=64$: $H(64)=64$, which sits below $70$. The threshold test is about $s=81$ specifically. Between $64$ and $81$ staff throughput crosses $70$, and at $81$ it has reached $72$, still under the cap of $80$.

**3.** Letter D's cap test at $64$ staff is a different comparison. $72>70$ is a modest clearance, genuine, and still uncapped.

The recovered throughput at $81$ staff is $72$ pallets per hour, above $70$, so the statement is True.`,
  ],

  "math-8-20": [
    `**A.** → True

Median wait is $W(k)=A k^{-\\frac{3}{2}}$ milliseconds, and the recorded cut of $19$ ms between $4$ servers and $9$ servers pins $A$. This letter is a slope comparison: whether an extra server cuts more wait at $4$ servers than at $9$.

The overview already recovered $A=216$ and recorded $|W'(4)|>|W'(9)|$. The recovered rule $W(k)=216 k^{-\\frac{3}{2}}$ has derivative

$$W'(k)=-324 k^{-\\frac{5}{2}}$$

The size of that cut is $324 k^{-\\frac{5}{2}}$, which falls as $k$ rises because the leftover exponent is negative. An extra server cuts more wait at $4$ than at $9$.

**1.** Extra arithmetic at the two named staffings:

$$|W'(4)|=324\\cdot 4^{-\\frac{5}{2}}=324\\cdot\\frac{1}{32}=10.125$$

$$|W'(9)|=324\\cdot 9^{-\\frac{5}{2}}=324\\cdot\\frac{1}{243}=\\frac{4}{3}\\approx 1.333$$

so an extra server after $4$ servers cuts about $10$ ms, and after $9$ servers only about $1.3$ ms. The later server still helps; it helps much less.

**2.** A rushed solver who saw $W(9)=8<W(4)=27$ and concluded that later servers are doing more has confused a lower wait with a steeper cut. The wait is already low at $9$ servers; there is less left to cut. Another who used exponent $-1$ would have a milder decline of the slope.

**3.** Letters D and E are levels at $9$ and $4$ servers. This letter is the slope between those levels. Negative-exponent wait has falling marginal benefit of servers.

The opposite verdict would need a wait that became steeper as the fleet grew. A reciprocal $\\frac{3}{2}$-power cannot do that.

The recovered cut is larger at $4$ servers than at $9$, so the statement is True.`,

    `**B.** → True

The claim is about the inverse: whether the number of servers needed for a given wait is itself a power of that wait.

The overview already recorded $k=(216/W)^{\\frac{2}{3}}$. A nonzero power inverts to another power. From $W=216 k^{-\\frac{3}{2}}$, isolate $k$ by raising to the reciprocal exponent $-\\frac{2}{3}$. The result is a monomial in $W$, coefficient $216^{\\frac{2}{3}}=(6^{3})^{\\frac{2}{3}}=36$ and exponent $-\\frac{2}{3}$.

That is a power function of the wait. There is no leftover constant and no logarithm.

**1.** Extra arithmetic that uses the inverse at a new wait of $1$ ms:

$$k=\\bigl(216/1\\bigr)^{\\frac{2}{3}}=36$$

so a $1$ ms wait would need $36$ servers. That is still a power of $W$. A solver who added a minimum fleet, $k=1+(216/W)^{\\frac{2}{3}}$, would have left the power-function class; the stem has no such floor.

**2.** A rushed solver who thought a negative exponent could not invert to a power has forgotten that $u^{-r}$ inverts to a power with exponent $-1/r$. Another who wrote $k=\\log W$ mixed this service with an exponential technology.

**3.** Letters D and E use the forward rule at $k=9$ and $k=4$. This letter names the inverse as a function class. The same inverse is what would turn a wait target into a server count.

If wait had been $W=A k^{-\\frac{3}{2}}+c$ with a leftover constant, the inverse would not have been a power. The stem is a pure monomial.

The recovered server count is a power of the wait, so the statement is True.`,

    `**C.** → False

Doubling the server count is $k=2$, and the claim is that median wait halves.

The overview already recorded that doubling servers multiplies wait by $2^{-\\frac{3}{2}}=1/(2\\sqrt{2})\\approx 0.354$, not by $1/2$. The coefficient $A$ cancels in the ratio

$$\\frac{W(2k)}{W(k)}=2^{-\\frac{3}{2}}\\neq\\frac{1}{2}$$

Wait falls by about sixty-five percent, not by fifty.

**1.** Extra arithmetic on the recovered four-server wait: doubling that fleet is $8$ servers, and

$$W(8)=216\\cdot 8^{-\\frac{3}{2}}=216\\cdot\\frac{1}{16\\sqrt{2}}=\\frac{27}{2\\sqrt{2}}\\approx 9.55$$

against $W(4)=27$. Half of $27$ would have been $13.5$, and $9.55$ is not $13.5$. Wait drops by more than half, which is the opposite miss from a "not halved" claim that expected too little of a cut. The statement said halves, and the factor is not $1/2$.

**2.** A rushed solver who used exponent $-1$ would have halved the wait, which is exactly the false claim. Reciprocal-linear wait is $A/k$; this service is $A k^{-\\frac{3}{2}}$. Another who used $2^{-\\frac{1}{2}}$ mixed in a square-root wait.

**3.** Letter A used the slope. This letter is a scale factor about doubling, independent of $A$. Whether the recorded cut had been $19$ ms or $40$ ms, doubling the fleet would still multiply wait by $2^{-\\frac{3}{2}}$.

The opposite verdict would need exponent $-1$. With exponent $-\\frac{3}{2}$, doubling servers does not halve the wait.

The recovered doubling factor is $1/(2\\sqrt{2})$, not $1/2$, so the statement is False.`,

    `**D.** → False

This is a level at $9$ servers, asked against a threshold of $10$ milliseconds.

The overview already evaluated $W(9)=8$. Eight does not sit above $10$. Nine servers are a perfect cube in the $\\frac{3}{2}$ sense, $9^{\\frac{3}{2}}=27$, and $216/27=8$.

**1.** A rushed solver who used $W(9)=216/9=24$ skipped the remaining square root in the exponent. Twenty-four would have passed the "more than $10$" test on a wrong evaluation. Another who used $W(9)=19$, copying the recorded cut, mixed a difference with a level.

**2.** Extra arithmetic at $k=4$: $W(4)=27$, which does sit above $10$. The threshold test is about $k=9$ specifically. Between $4$ and $9$ servers the wait crosses $10$, and at $9$ it has already reached $8$, below the line.

**3.** Letter E asks for a threshold of $25$ at $4$ servers and passes. This letter's $10$ at $9$ servers is a different comparison. The recovered $8$ sits $2$ below $10$.

The recovered wait at $9$ servers is $8$ ms, not more than $10$, so the statement is False.`,

    `**E.** → True

This is a level at $4$ servers, asked against a threshold of $25$ milliseconds.

The overview already evaluated $W(4)=27$. Twenty-seven sits above $25$. Four servers give $4^{\\frac{3}{2}}=8$, and $216/8=27$.

**1.** A rushed solver who used $W(4)=216/4=54$ skipped part of the exponent and still passed. Another who used $W(4)=19$, copying the recorded cut, would fail the threshold on a difference rather than a level.

**2.** Extra arithmetic that checks the recorded cut: $W(4)-W(9)=27-8=19$, which is the stem's $19$ ms. That check uses both levels and confirms $W(4)=27$ rather than some nearby $26$ that might have sat under $25$.

**3.** Letter D's $8$ at $9$ servers is the other end of that cut. $27>25$ is a modest clearance, genuine because $A=216$ rather than $200$.

The recovered wait at $4$ servers is $27$ ms, above $25$, so the statement is True.`,
  ],
};

const report = applyLetters("11_20.json", L);
for (const r of report) console.log(r.id, r.wc.join("/"));
