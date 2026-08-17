# Expand Ch8 tactical explanations (11–97 only)

Follow `scripts/bbe-tactical-explanations-memory.md`. Gold depth: MATH 13.18.

## What to change
Only `tactical_explanations[5]`. Keep `id`, `case_id`, `title`, `context`, `statements`, `answer_key`, `difficulty_level`, `sort_order`, `solution_overview` byte-for-byte.

## Length
- **Never shorten.** Each letter’s character count must be ≥ the current letter.
- Length tracks work. Recovery + a numeric check, composition, inverse, two curves, $F+Ax^{r}$, a cap, or a log should land about **3–4×** the current compressed writeup.
- A pure comparison after the needed constant is recovered (e.g. $r<1$, “not a power because of an intercept”) can be **~2×**: still start from the stem facts, still show the algebra, then stop. Do not pad.
- Extra length must buy missing substitutions, missing intermediate displays, or missing comparisons. No slogans, no tips, no repeated summaries.

## Rhythm (13.18)
1. Start from the **stem facts** for *this* letter. Name the model in one sentence.
2. General formula in its own `$$` when it is not obvious.
3. Substitute the concrete numbers in a **separate** display.
4. **One algebraic or arithmetic step per `$$` block.** Do not pack a whole elimination into `\qquad` chains.
5. Show intermediate terms the claim depends on.
6. Compare against the claim’s number or wording.
7. Last sentence exactly: `so the statement is True.` or `so the statement is False.`

Header stays `**A.** → True` / `**B.** → False` matching `answer_key`.

Each letter **stands alone**. Re-derive $A$ and/or $r$ inside any letter that needs them. Never write “From Part A”, “as shown above”, “the solution gives”.

Within one letter, do not restate the same conclusion three times. Cross-letter recovery repeat is required (standalone), but vary the entry sentence.

## Math / voice
- English outside math. Pure math inside `$` / `$$`. No `\text{...prose...}`.
- Fractions `\frac`. ASCII hyphen. No em dash. No `${`.
- Do not dump Part 1 / Part 2 / Part 3 into the letter.
- Recompute every number. Keep the live verdict.

## Gold: math-8-11 A (recovery + level)

Current (too compressed): one `\qquad` chain plus a one-line $Y(64)$.

Target:

```
**A.** → True

Harvest follows $Y(h)=A h^{r}$ after $h>0$ hours, with both constants unknown. The recorded pairs are $Y(8)=4$ and $Y(27)=6$. The claim is a third level, $Y(64)=8$, so both constants must be recovered first.

The ratio of the two harvests cancels $A$:

$$
\frac{Y(27)}{Y(8)}=\frac{A\cdot 27^{r}}{A\cdot 8^{r}}
$$

$$
\frac{6}{4}=\left(\frac{27}{8}\right)^{r}
$$

$$
\frac{3}{2}=\left(\frac{27}{8}\right)^{r}
$$

Because $\frac{27}{8}=\left(\frac{3}{2}\right)^{3}$,

$$
\frac{3}{2}=\left(\left(\frac{3}{2}\right)^{3}\right)^{r}=\left(\frac{3}{2}\right)^{3r}
$$

The bases match, so the exponents match:

$$
3r=1
$$

$$
r=\frac{1}{3}
$$

The eight-hour harvest then pins $A$:

$$
A\cdot 8^{\frac{1}{3}}=4
$$

$$
8^{\frac{1}{3}}=2
$$

$$
A\cdot 2=4
$$

$$
A=2
$$

The recovered law is $Y(h)=2h^{\frac{1}{3}}$. At sixty-four hours:

$$
Y(64)=2\cdot 64^{\frac{1}{3}}
$$

$$
64^{\frac{1}{3}}=4
$$

$$
Y(64)=2\cdot 4=8
$$

The claimed harvest is $8$ kilograms, so the statement is True.
```

Letters B–E of the same task still start from $Y(8)=4$ and $Y(27)=6$, but they stop once the claim is checked (B: recover $r$, compare with $1$; C: recover $r$, then $2^{r}$ vs $2$; D: recover $A$, then $Y(1)$; E: recover both, invert). Do not recompute $Y(64)$ inside B–E.

## Output
Overwrite the assigned `textbook/output/_ch8_v3/<file>.json` with a valid JSON array of the same objects, expanded explanations only.
