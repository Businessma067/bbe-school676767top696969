# Ch8 explanations: one recovery, living language, no duplicates

Only change `tactical_explanations[5]` in the assigned `textbook/output/_ch8_v3/*.json`. Keep every other field identical.

## The bug to kill
The last pass pasted the same calibration into A, B, C, D, and E. That is wrong. Do not replay the same ratio, the same $A$, or the same composition five times.

## Split of labour
The task is **one solution in order**, not five independent exams.

- `solution_overview` already recovers the shared law (Part 1–3). That is the right home for the full calibration. Letters do **not** each rebuild $A$ and $r$ from the stem.
- **A–E read as consecutive steps.** Each letter takes the model as it stands after the previous work and only does what *this* claim still needs: a scale factor, a named level, an inverse, a cap, a comparison of exponents. Living English says why that step is true or false.
- If a letter’s claim *is* the recovery (`the coefficient is $4$`), that letter shows that recovery. The next letters do not replay it.
- A short factual reminder is enough: `The two harvests give $r=\\frac{1}{3}$ and $A=2$.` Then the new math.

Do not write `From Part A`, `as shown above`, `earlier we found`. Just use the constants as facts of the solved model.

## Voice
Both things, together:

1. **Direct living language.** Short tutor sentences. Say what the exponent means, why doubling fails, why an intercept kills a power, why a cap binds. Facts, not slogans.
2. **Real solution steps** for the claim in front of you. Displays still one algebraic step each.

No filler, no repeated context paragraph (`Harvest follows $Y(h)=Ah^{r}$ after $h>0$ hours, with both constants unknown...`) at the top of every letter. The stem already said that.

## Length
Removing a duplicated recovery is required even if that letter gets shorter. Then add only the words and displays that belong to this claim. Do not pad back to the old length.

## Format
- Header `**A.** → True` matching `answer_key`.
- Last sentence exactly `so the statement is True.` or `so the statement is False.`
- `\frac`, ASCII hyphen, no em dash, no `${`, no English inside math.
- Do not dump Part 1 / Part 2 / Part 3 into the letter.

## Gold: math-8-11

A does the full calibration and the $Y(64)$ check.

B–E do **not** recompute $r$ from $6/4=(27/8)^{r}$.

```
**A.** → True

The two harvests are the only way to unstick both unknowns. Their ratio cancels $A$:

$$
\frac{Y(27)}{Y(8)}=\frac{6}{4}=\left(\frac{27}{8}\right)^{r}
$$

$$
\frac{3}{2}=\left(\frac{3}{2}\right)^{3r}
$$

so $r=\frac{1}{3}$. Eight hours then pins the coefficient: $A\cdot 2=4$, hence $A=2$. Sixty-four hours is $2\cdot 4=8$ kilograms, which is the claimed harvest, so the statement is True.

**B.** → True

The harvest ratio already gave $r=\frac{1}{3}$. An exponent smaller than one means harvest grows more slowly than watering time: each extra hour adds less than the hour before it. One third is below one, so the statement is True.

**C.** → False

Doubling hours would double harvest only if $r=1$. With $r=\frac{1}{3}$ the scale factor is $2^{1/3}$, about $1.26$, not $2$. The harvest rises, but not in lockstep with the clock, so the statement is False.

**D.** → False

At one hour the power is $1$, so the yield is just the coefficient $A=2$. The claimed four kilograms is the eight-hour record, not the one-hour level, so the statement is False.

**E.** → True

A power with a nonzero exponent inverts to another power. From $Y=2h^{1/3}$ one gets $h=(Y/2)^{3}$, a cube of the harvest, so the statement is True.
```

(Keep A’s algebra fully split into separate `$$` blocks in the real file; the sketch above is the split of labour, not a licence to cram A.)

## Gold split for math-8-29

- **A** recovers only $A$ from $100$ hours $\to$ $40$ tonnes. That is the whole claim.
- **B** is the composition letter: one line that $A=4$ from the labour record, then recover $B$ from nine tonnes, then compose. Do not replay $10A=40$ as five displays.
- **C** uses $g=16L^{3/4}$ and shows $2^{3/4}\approx 1.68\neq 2$, with a sentence that doubling labour cannot double output when the composed exponent is below one.
- **D** uses average product $16L^{-1/4}$ and explains the negative leftover exponent in words.
- **E** inverts $g=16L^{3/4}$ and says why the inverse is still a power.

## Output
Overwrite the assigned JSON array. Valid JSON. Recompute numbers. Keep live verdicts.
