# Chapter 6 — Inequalities

Inequalities on the BBE exam are almost always true/false claims about solution sets. One short stem introduces a situation, then five independent statements each claim a specific solution set or property. Your job is to mark each statement true or false on its own.

This chapter is a type-by-type teaching guide for every inequality format used in the practice sets. It covers recognition, a repeatable method for each type, fully worked examples, the traps that catch students most often, a fast plug-in check for boundaries, and a one-page cheat sheet at the end.

## Learning objectives

- Recognise each of the six inequality types that appear on the exam.
- Apply a repeatable, step-by-step method for every type.
- Build sign charts and use the wavy-curve shortcut correctly.
- Handle absolute values, radicals, compound inequalities and word problems without dropping endpoints.
- Know which values are always excluded (denominator zeros, domain restrictions).
- Use a quick numeric check to confirm or kill a claimed statement under time pressure.
- Avoid the traps that account for most wrong answers.

---

## 6.1 How the BBE true/false inequality question works

Every inequality question on the exam follows the same shape: one short stem (often “Evaluate inequality solution sets”) followed by five independent statements, labeled A–E. Each statement claims a specific solution set or property for a specific inequality. Mark each statement TRUE or FALSE independently. There is no partial-credit logic linking the five statements to each other. A question with five TRUE statements is just as valid as one with five FALSE statements.

Across the practice sets, every statement falls into one of six recurring types. Once you can identify which type you are looking at, the method to solve it is always the same. Only the numbers change. That is the real skill being tested: fast, reliable type recognition, followed by a clean, repeatable procedure.

### The six types at a glance

| Type | Recognise it by | Core tool |
| --- | --- | --- |
| Rational | A fraction of linear/quadratic factors, e.g. $\dfrac{x-3}{x+2}\le 0$ | Critical points + sign chart |
| Quadratic sign | A single quadratic compared to $0$, e.g. $x^2-x-6\ge 0$ | Factoring or discriminant test |
| Compound (double) | Two inequality signs around one quadratic, e.g. $-1\le x^2-4x\le 5$ | Split into two, solve, intersect |
| Absolute value | One or more absolute-value bars | Case split or square both sides |
| Radical | A square root $\sqrt{\,\cdot\,}$ | Domain first, then isolate and square |
| Linear word problem | A real-world setup (bills, temperature, loans) | Translate to an inequality, solve, check sign flips |

There is also a fast plug-in technique for confirming or killing a statement under time pressure. It is covered in full in section 6.10. Read it once and you can use it across every type below.

---

## 6.2 Rational inequalities (sign charts)

A rational inequality compares a fraction of factored expressions to zero, such as

$$
\frac{x-3}{x+2}\le 0
\quad\text{or}\quad
\frac{x^2-9}{x^2-16}\le 0.
$$

These can have two, three, or even four critical points, but the method never changes.

### Step-by-step method

1. Factor the numerator and denominator completely.
2. Find every critical point: values that make the numerator zero, and values that make the denominator zero. Mark the denominator’s zeros as always excluded. Division by zero is never allowed, no matter what the inequality symbol is.
3. Plot the critical points on a number line. They split the line into regions.
4. Test one number from each region in the factored expression to find its sign ($+$ or $-$). Do this for every region. Do not assume the pattern simply alternates, especially with three or more critical points.
5. Keep the regions matching the inequality: positive regions for $>$ or $\ge$, negative regions for $<$ or $\le$.
6. Decide the endpoints: a point where the numerator is zero is included if the inequality is $\le$ or $\ge$ (non-strict), and excluded if it is $<$ or $>$ (strict). A point where the denominator is zero is always excluded, regardless of the symbol.

**Example 1.** Solve $\dfrac{x-3}{x+2}\le 0$.

Critical points: numerator zero at $x=3$; denominator zero at $x=-2$ (always excluded).

| Interval | Sign |
| --- | --- |
| $(-\infty,-2)$ | $+$ |
| $(-2,3)$ | $-$ |
| $(3,\infty)$ | $+$ |

The inequality asks for $\le 0$, so keep the negative region and include $x=3$ (numerator zero, and the symbol is non-strict), but never $x=-2$.

Solution: $(-2,3]$, equivalently $-2 < x \le 3$.

**Example 2.** Solve $\dfrac{x^2-9}{x^2-16}\le 0$.

Numerator zero at $x=\pm 3$; denominator zero at $x=\pm 4$ (excluded). Four critical points means five regions to test.

| Interval | Sign |
| --- | --- |
| $(-\infty,-4)$ | $+$ |
| $(-4,-3)$ | $-$ |
| $(-3,3)$ | $+$ |
| $(3,4)$ | $-$ |
| $(4,\infty)$ | $+$ |

Keep the negative regions, plus $x=\pm 3$ (numerator zero), but never $x=\pm 4$.

Solution: $(-4,-3]\cup[3,4)$.

[[NOTE:Common trap|The number of critical points tells you how many regions to check, not a shortcut to guess the pattern. With four critical points you get five regions. Skip testing even one of them and you can easily flip a sign by mistake. Always test a real number in every single region.]]

---

## 6.3 The wavy curve rule

Testing a number in every single region always works, but it is slow, and slow costs marks under exam pressure. There is a faster rule, sometimes called the wavy curve method or method of intervals, that lets you test one region and derive every other region’s sign from it.

### Steps to use the rule

1. Set to zero: move every term to one side so the inequality compares the expression to $0$ (using $>$, $<$, $\le$, or $\ge$).
2. Find critical points: factor the numerator and denominator completely, then set each factor equal to zero to find every root and every excluded (undefined) point.
3. Plot on a number line: place the critical points in order. They split the line into open intervals.
4. Test the rightmost interval only: pick any number larger than every critical point and check the sign there.
5. Sweep leftward, alternating: starting from that known sign, imagine a continuous wavy curve threading through the critical points, swinging above the line for $+$ and below it for $-$. Each time the curve crosses a critical point, the sign flips, as long as that point comes from a factor raised to an odd power (most commonly a simple, non-repeated factor).

[[FIGURE:ineq-wavy-general|The wavy curve threads through each root, alternating above (+) and below (−) the axis. This is exactly the shape the rule produces when every factor is a simple, odd-power factor.]]

Applied to the four-critical-point example $\dfrac{x^2-9}{x^2-16}\le 0$: instead of testing all five regions individually, test only the rightmost one ($x>4$, which gives $+$), then let the curve alternate leftward across each root in turn.

[[FIGURE:ineq-wavy-four-roots|Test $x>4$ once (positive), then alternate leftward across $x=4$, $x=3$, $x=-3$, and $x=-4$. The two denominator roots (open circles) still flip the sign like any simple factor; they are just never allowed in the final answer.]]

One test instead of five, and the result matches the sign chart built earlier by direct testing. The rule is a shortcut, not a different answer.

### Important exception 1: even powers do not flip the sign

If a factor is raised to an even power, such as $(x-1)^2$, or appears inside an absolute value, the curve touches the axis at that root but bounces back to the same side instead of crossing through. The sign does not change there.

[[FIGURE:ineq-wavy-even-power|Solving $\dfrac{(x-1)^2(x+3)}{x-2}\ge 0$: the curve crosses normally at $x=-3$ and at $x=2$ (both simple factors), but merely touches and bounces at $x=1$, because $(x-1)^2$ is an even-power factor. Both sides of $x=1$ stay negative.]]

This has a subtle consequence worth remembering. At $x=1$ the expression equals exactly $0$, and $0$ satisfies $\ge 0$, so $x=1$ is a valid, isolated solution even though it sits inside an otherwise negative region. The full solution set here is

$$
(-\infty,-3]\cup\{1\}\cup(2,\infty).
$$

The point $x=1$ has to be added back in on its own, separate from the interval notation around it.

[[NOTE:Common trap|It is tempting to assume the sign simply alternates at every critical point without checking each factor’s power. An even-power factor (or an absolute value) is the one case where the curve bounces instead of crossing. Always check the power of each factor before assuming the next region flips sign.]]

### Important exception 2: denominator zeros are always excluded

A critical point coming from the denominator still behaves normally for sign purposes. The curve crosses or bounces there exactly like any other root, following the same odd/even rule above. But regardless of how the sign behaves, and regardless of whether the inequality is strict or not ($<$, $>$, $\le$, or $\ge$), a value that makes the denominator zero can never appear in the final answer. Division by zero is undefined. The inequality symbol never overrides that.

[[NOTE:Common trap|It is easy to treat a denominator zero exactly like a numerator zero once the sign chart is built, including it in the answer whenever the symbol is ≤ or ≥. A denominator zero is excluded unconditionally, even when every other rule would seem to include it.]]

---

## 6.4 Quadratic sign inequalities

These compare a single quadratic expression to zero, such as $x^2-x-6\ge 0$ or $x^2-6x+9\ge 0$. There are two flavours you will meet: a quadratic that factors into two distinct roots, and a special case, the perfect square, that only has one repeated root. A third flavour never factors at all, and that is where the discriminant comes in.

### Method A: two distinct roots

1. Factor the quadratic into two linear factors, e.g. $x^2-x-6=(x-3)(x+2)$.
2. The roots split the number line into three regions. Because the leading coefficient is positive (opens upward), the expression is positive outside the roots and negative between them.
3. Match the sign to the inequality symbol, including endpoints for $\le/\ge$ and excluding them for $</>$.

**Example 1.** Solve $x^2-x-6\ge 0$.

Factor: $(x-3)(x+2)$. Roots at $x=-2$ and $x=3$.

Positive outside the roots (upward-opening parabola), so the solution is $x\le -2$ or $x\ge 3$. Both branches, including the roots since the symbol is $\ge$.

[[NOTE:Common trap|A quadratic that is non-negative “outside its roots” always produces two separate branches. It is tempting to report only the branch that feels more intuitive (for example only the larger values) and quietly drop the other one. Also: the sign of the expression is not the same thing as the sign of x. An expression being ≤ 0 does not tell you that x itself is negative.]]

### Method B: perfect squares (one repeated root)

An expression like $x^2-6x+9$ factors as $(x-3)^2$. A square is never negative, so $(x-3)^2\ge 0$ is true for every real number. Equality (the square equal to exactly zero) happens only at the single repeated root, $x=3$. It does not also happen at $x=-3$, even though that might look tempting by symmetry.

[[NOTE:Common trap|It is easy to assume a perfect square has two symmetric roots like a general quadratic (a and −a). A perfect square (x − a)² has exactly one repeated root at x=a, nowhere else.]]

### Method C: no real roots (discriminant test)

When a quadratic will not factor nicely, compute the discriminant $b^2-4ac$.

- If the discriminant is negative, the parabola never touches the $x$-axis at all.
- If the leading coefficient is positive, the whole parabola sits above the $x$-axis. The expression is always positive, never zero, never negative.
- If the leading coefficient is negative, the whole parabola sits below the $x$-axis. Always negative.

**Example 2.** Is $x^2-4x+5<0$ ever true?

Discriminant: $16-20=-4$ (negative). Leading coefficient is positive, so the parabola stays entirely above the $x$-axis. The expression is never less than $0$. This inequality has no solutions at all (not “infinitely many”).

[[NOTE:Common trap|A negative discriminant on a “< 0” question is easy to misread as “the parabola must dip below the axis somewhere.” It means the exact opposite: the parabola never crosses the x-axis at all.]]

---

## 6.5 Compound (double) quadratic inequalities

These have the form $a\le\text{(quadratic)}\le b$: two inequality symbols sandwiching one quadratic expression, such as $-1\le x^2-6x+8\le 3$.

### Step-by-step method

1. Split into two separate inequalities: the “left part” (quadratic $\ge a$, or $> a$) and the “right part” (quadratic $\le b$, or $< b$).
2. Solve each part completely on its own, using Type 2 methods (factoring, or the quadratic formula if the roots are not integers).
3. Intersect the two solution sets. This is the step students skip. The two halves must be combined properly, not just glanced at.
4. Carry each side’s strictness through to the final answer. If both halves are non-strict ($\le/\ge$), keep the shared endpoints. If either half is strict ($</>$), that endpoint drops out.

**Example 1.** Solve $-1\le x^2-6x+8\le 3$.

Left part: $x^2-6x+8\ge -1$ becomes $x^2-6x+9\ge 0$, which is $(x-3)^2\ge 0$, true for every real $x$.

Right part: $x^2-6x+8\le 3$ becomes $x^2-6x+5\le 0$, which is $(x-1)(x-5)\le 0$, so $1\le x\le 5$.

Since the left part never restricts anything, the full solution is exactly the right part: $[1,5]$.

**Example 2.** A version where both halves genuinely restrict: $-4 < x^2-4x < 5$.

Left part: $x^2-4x+4>0$ becomes $(x-2)^2>0$, true for every $x$ except $x=2$ (where the square is exactly $0$).

Right part: $x^2-4x-5<0$ becomes $(x-5)(x+1)<0$, so $-1 < x < 5$.

Intersecting: $(-1,5)$, but with the single point $x=2$ removed.

Solution: $(-1,2)\cup(2,5)$.

**Example 3.** A version that splits into two separate closed intervals: $-1\le x^2-4x+2\le 4$.

Left part: $x^2-4x+3\ge 0$ becomes $(x-1)(x-3)\ge 0$, so $x\le 1$ or $x\ge 3$.

Right part: $x^2-4x-2\le 0$. By the quadratic formula, roots are $x=2\pm\sqrt{6}$, giving $2-\sqrt{6}\le x\le 2+\sqrt{6}$.

Intersecting $[2-\sqrt{6},1]$ with $[3,2+\sqrt{6}]$ gives two separate closed intervals, not one smooth range.

Solution: $[2-\sqrt{6},1]\cup[3,2+\sqrt{6}]$.

[[NOTE:Common trap|Seeing an irrational boundary like 2 ± √6 makes a single continuous interval look plausible. But each half of the compound inequality must be solved and intersected independently. This very often carves a gap right out of the middle. Similarly, when one half turns out to be true for all real numbers (a perfect square ≥ 0), it is tempting to think it must still narrow the answer somehow. It does not. The other half does all the work.]]

### Seeing the intersection: shading two number lines

Reading two interval expressions and intersecting them in your head is exactly where the mistake above creeps in. A simple picture makes it foolproof: draw the solution to each part as a shaded (hatched) band directly above a number line, then look for the $x$-values that are shaded in both bands.

[[FIGURE:ineq-compound-intersection|Left part shaded with forward slashes, right part shaded with backslashes. The intersection is only the $x$-values covered by both patterns. Here, two separate closed pieces, with a genuine gap between $x=1$ and $x=3$.]]

How to build this diagram yourself:

1. Draw one horizontal number line and mark every critical value from both parts on it (here: $2-\sqrt{6}$, $1$, $3$, $2+\sqrt{6}$, left to right).
2. Directly above the line, shade or hatch the region that solves the left part only. Use a filled dot for an included endpoint ($\le/\ge$) and an open circle for an excluded one ($</>$).
3. On a second line with the same scale, shade the region that solves the right part only, using a different hatch direction so the two are easy to tell apart.
4. Stack the two lines and look straight down through them: the intersection is wherever both hatch patterns cover the same $x$-values. Redraw just that overlap on a third line as your final answer.
5. Copy the correct open/closed circle style for each surviving endpoint from whichever original line it came from. The picture prevents the easy mistake of quietly upgrading an open circle to a closed one.

---

## 6.6 Absolute value inequalities

This is the most varied type. The method depends on exactly what is inside (and how many) absolute value bars there are. There are four common sub-patterns.

### A. Simple absolute value: |expression| compared to a number

Rewrite $|\text{expression}| > k$ as “expression $> k$ OR expression $< -k$” (for $>$ / $\ge$), or $|\text{expression}| < k$ as “$-k < \text{expression} < k$” (for $<$ / $\le$). Solve each branch.

**Example 1.** Solve $|2x+1|-3>0$.

Rewrite as $|2x+1|>3$, which splits into: $2x+1>3$ (so $x>1$) or $2x+1<-3$ (so $x<-2$).

Solution: $x<-2$ or $x>1$.

### B. Sum or difference of two distances: $|x-a|\pm|x-b|$

The expressions inside the bars change sign at $x=a$ and $x=b$. Split the number line into three regions around these two points, rewrite the absolute values without bars in each region, and solve the resulting (now bar-free) inequality region by region.

**Example 2.** Solve $|x-1|+|x+2|\le 5$.

Critical points at $x=1$ and $x=-2$, giving three regions.

- $x<-2$: expression becomes $-2x-1$. Solving $-2x-1\le 5$ gives $x\ge -3$, so this region contributes $[-3,-2)$.
- $-2\le x\le 1$: expression collapses to a constant, $3$. Since $3\le 5$ always, this whole region is included.
- $x>1$: expression becomes $2x+1$. Solving $2x+1\le 5$ gives $x\le 2$, so this region contributes $(1,2]$.

Combining all three pieces: $[-3,2]$.

[[NOTE:Common trap|The middle region, between the two critical points, always collapses to a constant. It is the piece most often forgotten entirely. Always check it as its own case, separately from the two outer branches. It is also possible for one of the three regions to contribute nothing at all. Never assume a region works just because its neighbour does.]]

### C. Absolute value vs. absolute value: $|\text{expr}_1|$ compared to $|\text{expr}_2|$

This is the one case where squaring both sides is always safe with no case-splitting needed, because both sides are automatically non-negative. Square both sides, expand, and solve the resulting quadratic inequality with Type 2 methods.

**Example 3.** Solve $|3x-1|<|x+5|$.

Square both sides: $(3x-1)^2<(x+5)^2$.

Expand: $9x^2-6x+1 < x^2+10x+25$, so $8x^2-16x-24<0$, then $x^2-2x-3<0$, then $(x-3)(x+1)<0$.

Solution: $-1 < x < 3$.

[[NOTE:Common trap|Comparing two absolute values is one of the few places where squaring is unconditionally safe. The risk here is not a missed case. It is an arithmetic slip while expanding the squares. Double-check every term.]]

### D. Nested absolute values: $||\text{expr}|-k|$ compared to a number

Peel off one layer at a time, working from the outside in. First resolve the outer bars into a compound inequality on $|\text{expr}|$, then resolve that inner absolute value the normal way.

**Example 4.** Solve $||x-2|-3|<2$.

Outer layer first: $-2 < |x-2|-3 < 2$, so $1 < |x-2| < 5$.

Left part, $|x-2|>1$, excludes $1\le x\le 3$ (keeping $x<1$ or $x>3$).

Right part, $|x-2|<5$, restricts to $-3 < x < 7$.

Combining (removing $[1,3]$ from $(-3,7)$): $(-3,1)\cup(3,7)$.

[[NOTE:Common trap|With nested absolute values, it is natural to get the regions right but forget to carry each layer’s strictness (≤ vs <) all the way through to the final endpoints. Always check each boundary point directly in the original inequality.]]

---

## 6.7 Radical (square root) inequalities

These involve one or more square roots, such as $\sqrt{x+4}>x-2$. They demand more care than any other type, because squaring both sides is only valid when both sides are known to be non-negative, and the domain of the square root itself is a restriction you must track from the very first step.

### Step-by-step method (single radical)

1. Find the domain first: whatever is inside the square root must be $\ge 0$.
2. If the inequality is $\sqrt{\cdots} >$ (something), split into two cases based on whether that “something” (the non-radical side) is negative or non-negative:
   - Case 1: the other side is negative. A square root is always $\ge 0$, so it is automatically greater than any negative number. The entire domain slice in this case is a solution with no further work.
   - Case 2: the other side is non-negative. Both sides are now non-negative, so squaring is safe. Square, solve the resulting polynomial inequality, and intersect with this case’s condition.
3. Union the results of both cases together.

**Example 1.** Solve $\sqrt{x+4}>x-2$.

Domain: $x+4\ge 0$, so $x\ge -4$.

Case 1 ($x<2$, right side negative): every domain value here works automatically, so $-4\le x < 2$.

Case 2 ($x\ge 2$, right side non-negative): square safely,

$$
x+4 > x^2-4x+4
\quad\Rightarrow\quad
x^2-5x < 0
\quad\Rightarrow\quad
x(x-5)<0
\quad\Rightarrow\quad
0 < x < 5.
$$

Combined with $x\ge 2$: $2\le x < 5$.

Union: $[-4,2)\cup[2,5)=[-4,5)$.

### When the inequality is $\sqrt{\cdots} <$ (something) instead

Here the right side must be non-negative for the inequality to have any chance of holding (a square root can never be less than a negative number), so that requirement becomes part of the domain restriction immediately. There is no “automatic” case to worry about.

### Two radicals: sum or difference

When two square roots are involved, one squaring step is never enough. Isolate one radical on its own side, square once (checking that the remaining side is non-negative first), simplify, then repeat: isolate and square again. Every squaring step introduces a fresh side-condition that must be solved and intersected in. Do not stop after the first square.

**Example 2.** Solve $\sqrt{2x+3}-\sqrt{x+1}>1$.

Domain: $x\ge -1$. Rewrite as $\sqrt{2x+3}>1+\sqrt{x+1}$. The right side is at least $1$, so squaring is valid:

$$
2x+3 > 1+2\sqrt{x+1}+(x+1)
\quad\Rightarrow\quad
x+1 > 2\sqrt{x+1}.
$$

Let $v=\sqrt{x+1}\ge 0$, so $x+1=v^2$. The inequality becomes $v^2>2v$, so $v(v-2)>0$, hence $v>2$ (since $v\ge 0$).

So $\sqrt{x+1}>2$ means $x+1>4$, hence $x>3$.

### A harder double-radical case with two roots to compare

After two rounds of squaring, the quadratic formula may hand back two roots, but a domain restriction picked up along the way (for example $x\ge -1$) can rule one of them out. For instance, if $x^2-2x-11>0$ gives roots $1\pm 2\sqrt{3}$, then since $1-2\sqrt{3}\approx -2.46$ is below the required $x\ge -1$, only the larger root matters.

Correct solution boundary: $x > 1+2\sqrt{3}$, not the smaller, irrelevant root.

[[NOTE:Common trap|The three biggest radical-inequality mistakes: (1) squaring before checking that both sides are non-negative, which can introduce false solutions; (2) stopping after one squaring step when two radicals are present; and (3) after the quadratic formula hands back two roots, picking the smaller one without checking it against the domain restrictions collected along the way. When in doubt, plug a test value from your proposed answer directly back into the original (unsquared) inequality.]]

---

## 6.8 Linear inequalities in word problems

These describe a real situation (a phone bill, a store membership, a loan, a temperature conversion) and ask you to translate it into an inequality, solve it, and check specific claims about it. The algebra is simple (always linear), but the setup and the sign-flip rule are where marks are lost.

### Step-by-step method

1. Translate the situation into an inequality. Identify what quantity is being compared (a total cost, a balance, a converted temperature) and what threshold it must meet.
2. Isolate the variable exactly as you would with any linear inequality.
3. Watch for a negative coefficient: whenever a quantity decreases as the variable increases (a bill going down per point redeemed, a loan balance going down per payment), isolating the variable means dividing by a negative number, and that flips the inequality direction.
4. Check specific numeric claims by direct substitution. This is almost always faster than re-deriving the general solution.

**Example 1.** A $\$400$ bill drops by $\$0.50$ per loyalty point redeemed ($x$ points). The customer wants the bill $\le \$250$.

Set up: $400-0.5x\le 250$, so $-0.5x\le -150$.

Dividing both sides by $-0.5$ (negative) flips the inequality: $x\ge 300$.

So the minimum number of points to redeem is $300$, not “$x\le 300$”, which is the easy mistake here.

**Example 2.** Unit conversion: $C=\dfrac{5}{9}(F-32)$, safety limit $C\le 30$.

Solving $\dfrac{5}{9}(F-32)\le 30$ gives $F-32\le 54$, so $F\le 86$.

The equivalent Fahrenheit safety limit is $86^\circ\mathrm{F}$, not simply “$30^\circ\mathrm{F}$.” Different unit scales have different zero points and different scale factors, so a numeric threshold does not carry over unchanged between them. You have to actually solve the inequality to find the converted limit.

**Example 3.** Percentage surcharge: total $=1.2B$, must stay under $\$300$.

$1.2B < 300$. Since $1.2$ is positive, dividing both sides by $1.2$ keeps the direction the same: $B < 250$.

Contrast this with the loyalty-points example above. There the coefficient being isolated was negative, so the direction flipped. Here it is positive, so it does not. Always check the sign of the number you are dividing by.

[[NOTE:Common trap|Dividing or multiplying an inequality by a negative number always flips the inequality symbol. This is the single most commonly forgotten rule in word problems, especially whenever the setup describes something that decreases as the variable increases (a bill going down, a loan balance shrinking). Also watch for strict vs. non-strict wording: “under $300” excludes $300 itself, so a value that lands exactly on the boundary fails a strict inequality even though it looks close enough.]]

---

## 6.9 Master trap list

If you only have five minutes before the exam, read this section.

| Type | Trap to remember |
| --- | --- |
| Rational | A value that makes the denominator zero is always excluded, no matter what the inequality symbol is, and even though the sign still alternates normally across that point. |
| Rational | The wavy-curve rule only alternates automatically across odd-power (simple) factors. An even-power factor makes the curve bounce, not cross, so the sign stays the same on both sides. |
| Quadratic sign | “Expression $\le 0$” restricts $x$ to an interval. It says nothing about whether $x$ itself is positive or negative. |
| Quadratic sign | A perfect square $(x-a)^2$ has one repeated root at $x=a$, not two symmetric roots like $a\pm$ something. |
| Quadratic sign | A negative discriminant on a “$< 0$” claim means no solutions at all, not “infinitely many.” |
| Compound | Solve and intersect both halves independently. An irrational boundary can tempt you into reporting one smooth interval when the true answer has a gap. |
| Compound | If one half is true for all real $x$, the other half does all the restricting. It does not narrow things further on its own. |
| Absolute value | The middle region between two critical points (for $|x-a|\pm|x-b|$) usually collapses to a constant. Do not skip checking it. |
| Absolute value | For nested bars, work outside-in one layer at a time, and carry each layer’s strictness through to the final endpoints. |
| Radical | Never square before confirming both sides are non-negative. Split into cases first if the non-radical side could be negative. |
| Radical | Two radicals need two rounds of isolating-and-squaring. Stopping after one is the most common shortcut error. |
| Radical | After the quadratic formula gives two roots, check both against every domain restriction collected along the way before picking one. |
| Word problems | Dividing or multiplying by a negative number flips the inequality direction. This happens whenever a quantity decreases as the variable increases. |
| Word problems | Strict inequalities ($<$ or $>$) exclude their own boundary value, even when a substitution lands exactly on it. |

---

## 6.10 The quick-check method

Every worked example in this guide is solved with the proper method: factoring, sign charts, case splits, and so on. But there is a second, much faster tool worth having ready on exam day: the quick check. It will not teach you a method, and it cannot replace one, but it is the single fastest way to catch a mistake before you commit to an answer.

### What it is

A quick check is simply substituting one specific, convenient number into the original inequality, before any algebra, squaring, or case-splitting, and seeing whether the resulting statement is true or false. It tells you whether one particular value belongs to the solution set. Nothing more.

### When to use it

- To verify a boundary value. After solving, pick an endpoint of your interval and plug it into the original inequality to confirm it should be included (closed) or excluded (open).
- To sanity-test a claimed statement fast. On the exam, a true/false statement often names a specific number or a short interval. Testing one representative value from inside (or outside) that interval is usually faster than re-deriving the full solution from scratch.
- To catch a sign error. If your derived interval and a quick numeric test disagree, you have found a mistake. Go back through the method rather than trusting either answer blindly.
- Right after squaring both sides (radical or absolute-value types). Squaring can introduce false solutions, so testing a value in the original, unsquared inequality is the most reliable way to confirm it truly belongs.

### When not to rely on it

- As your only method. A single test tells you about a single number. It cannot reveal the shape of an entire solution set (how many intervals there are, where they start and end) on its own.
- Near a region boundary you have not identified yet. If you do not already know where the critical points are, a handful of random tests can easily miss a narrow interval entirely.

**Example 1.** Claim: “$x=4$ satisfies $\dfrac{x^2-9}{x^2-16}\le 0$.”

Rather than rebuilding the whole sign chart, substitute $x=4$ directly into the original expression: $\dfrac{16-9}{16-16}=\dfrac{7}{0}$, undefined.

An undefined expression can never satisfy any inequality. The claim is FALSE, and this single substitution confirms it immediately, without needing the full sign chart.

**Example 2.** Claim: “$x=2$ satisfies $-4 < x^2-4x < 5$.”

Substitute directly: $2^2-4(2)=4-8=-4$. Checking both halves: is $-4 < -4$ true? No. The left side is strict ($<$), and $-4$ is not strictly less than $-4$.

The claim is FALSE, caught in one substitution, even though $x=2$ might look like it should work at a glance.

[[NOTE:Common trap|A quick check that comes back TRUE only proves that one number works. It never proves the rest of a claimed interval is correct. Use it to confirm a specific claim or to disprove one (a single failure is enough to kill a statement), not as a substitute for solving the inequality properly.]]

---

## 6.11 Summary cheat sheet

### Rational: $\dfrac{\text{factor}}{\text{factor}}\gtrless 0$

- Find zeros of numerator and denominator.
- Denominator zeros are always excluded.
- Wavy curve: test the rightmost region once, then alternate leftward. Odd-power factors cross; even-power factors bounce (no flip).
- Keep regions matching the symbol; include numerator zeros only if $\le/\ge$.

### Quadratic sign: $\text{(quadratic)}\gtrless 0$

- Two roots: outside-the-roots is positive, between-the-roots is negative (for an upward parabola).
- Perfect square: one repeated root; always $\ge 0$.
- No real roots: check discriminant sign + leading coefficient to know if it is always positive or always negative.

### Compound: $a\gtrless\text{(quadratic)}\gtrless b$

- Split into left part and right part.
- Solve each independently.
- Intersect. Do not assume a single smooth interval; shade both on a number line and look for the overlap.
- Non-strict endpoints survive if both sides allow them; a strict inequality can carve out a single excluded point.

### Absolute value

- $|\text{expr}| > k$ means $\text{expr} > k$ OR $\text{expr} < -k$. $|\text{expr}| < k$ means $-k < \text{expr} < k$.
- $|x-a|\pm|x-b|$: split at $a$ and $b$, check all three regions including the middle.
- $|\text{expr}_1|$ vs $|\text{expr}_2|$: safe to square directly, no case split needed.
- Nested bars: peel off outside-in, one layer at a time.

### Radical: $\sqrt{\text{expr}}\gtrless\text{(something)}$

- Domain first: inside the root $\ge 0$.
- If comparing to something that could be negative, split into cases before squaring.
- Two radicals: isolate one, square, simplify, isolate the other, square again.
- After squaring, check every boundary directly in the original (unsquared) inequality.

### Word problems

- Translate the situation into an inequality first. Identify what is being compared to what threshold.
- Isolate the variable.
- Dividing/multiplying by a negative number flips the direction.
- Strict wording (“under”, “less than”) excludes the boundary value itself.

### Quick-check method

- Substitute one specific number straight into the original inequality, with no algebra first.
- Use it to verify a boundary, sanity-test a claim, or catch a sign error. Never as your only method.
- One failing test is enough to disprove a claimed statement; one passing test only confirms that single number.

**Working order on exam day.** Identify the type, run the matching method, then quick-check any endpoint or named value the statement claims.

**Self-check.** Can you list the six types and their core tools? For a rational inequality, can you say which endpoints are included and which are always excluded? For a compound inequality, do you remember to intersect rather than glance? For radicals, do you write the domain before squaring?
