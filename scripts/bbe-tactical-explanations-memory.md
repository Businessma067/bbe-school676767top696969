# BBE tactical explanations memory

Use this file whenever you write or rewrite **tactical explanations** (`tactical_explanations` / A–E statement solutions) for BBE Math practice banks.

Goal: one stable explanation format across chapters. Students should feel the same rhythm whether they open Chapter 5, 8, 11, or 13.

**Depth / step style gold standard:** `MATH 13.18` in `src/data/math-cases-ch13-binomial.json` (Sales Call Conversions). Read that case's five explanations before rewriting any bank.

**Header / verdict gold standard for newer banks:** Chapter 11 live format in `src/data/math-ch11-financial.ts`:

```text
**A) <exact live statement text>.**  (true)
```

or `(false)`. Keep the chapter's existing header convention if the live bank already uses another one (e.g. Ch13 `**A.** → True`). Never invent a third header style inside one chapter.

---

## Where explanations live

| Chapter family | Typical file | Field |
| --- | --- | --- |
| Math Ch5 | `src/data/math-ch5-linear-equations.ts` | `tactical_explanations[5]` |
| Math Ch8 | `src/data/math-ch8-power-functions.ts` | `tactical_explanations[5]` |
| Math Ch11 | `src/data/math-ch11-financial.ts` | `tactical_explanations[5]` |
| Math Ch13 | `src/data/math-cases-ch13-binomial.json` | `tactical_explanations[5]` |

Each task also has `statements[5]`, `answer_key[5]`, and usually `solution_overview`. Explanations judge the five statements. The overview solves the shared model once for the student.

Rendered in the flashcard / practice UI with KaTeX (`$...$` inline, `$$...$$` display). Currency outside math is written as `\$3.50` in source strings.

---

## Shared model once (critical)

The practice UI concatenates `solution_overview` with all five letters. The shared setup and the shared solve live in the overview **once**. Letters must not reprint them.

**Overview**

- Translate each observation into an equation **once**. Tag those displays `(1)`, `(2)` if later algebra refers to them.
- Do **not** add a “Part 2: The model” block that reprints the same equations.
- Then solve (elimination, substitution, recovered coefficient, …) in the next part.
- Recovered values belong in the overview answer line.

**Letters A–E**

- Use the recovered values: “The overview already recovered $x=8.4$, $y=15.6$.”
- Show only the extra arithmetic this claim needs (a new mix, a ratio, a threshold).
- Do **not** redefine $x$ and $y$, rewrite the system, divide by 100, and re-run elimination under every letter.

A letter that needs a *different* model (a counterfactual mix, a halved scoring rule) still writes that new calculation in full. It does not rebuild the original system first.

This overrides any older “each letter must stand alone from the stem” rule. Compact reuse of overview values is the required style for Ch5, Ch8, Ch11, and Ch13 when the letter is reading a shared recovery.

---

## Length rule (critical)

1. **Length tracks work.** A direct lookup or one-arithmetic check stays short. A fresh scenario that uses already-recovered prices gets that extra arithmetic only. A long tail sum (like 13.18 C) still gets every term, because those terms are *this letter’s* work, not a reprint of the overview.
2. **Do not restore duplication to satisfy a length floor.** Removing a repeated system solve is required even if the letter gets shorter. New text must keep every *claim-specific* step the old text had.
3. **Extra length must buy clarity**, not filler. Add missing substitutions, missing intermediate displays, or missing comparisons for *this* claim. Do not pad with tips, slogans, or a second copy of the overview.
4. If asked only to deepen underdeveloped statements, leave already-complete ones alone unless they violate the shared-model rule above.

---

## 13.18 step format (how the math should look)

Copy this rhythm from `MATH 13.18`:

1. **Name the rule** in one calm sentence.
2. **Show the general formula** in its own display block when it is not already obvious.
3. **Substitute the concrete numbers** in a separate display.
4. **One algebraic or arithmetic step per `$$ ... $$` block.** Do not cram a whole elimination into one prose sentence or one `\qquad` chain.
5. **Show intermediate terms** when the claim depends on them (each summand, each expanded product, each eliminated equation).
6. **Compare against the claim’s threshold / figure.**
7. **Finish with a plain verdict sentence** (“… so the statement is True/False.”).

### Good pattern

```markdown
**C) <claim>.**  (true)

Clearing the cutoff means at least 13 successes out of 25. That event is the union of the mutually exclusive outcomes $X = 13, 14, \ldots, 25$, so we add the individual binomial probabilities:

$$
P(X \ge 13) = \sum_{x=13}^{25} \binom{25}{x} p^{x} (1-p)^{25-x}
$$

Side A ($n = 25$, $p = 0.3$):

$$
\binom{25}{13}(0.3)^{13}(0.7)^{12}
$$

$$
\approx 0.0115
$$

[… every needed term, each in its own display …]

$$
P(X \ge 13) \approx 0.0175 \approx 1.75\%
$$

[same for the other side if needed, then the ratio / comparison]

Since $55.53 > 50$, the statement is True.
```

### Bad pattern

```markdown
**C) <claim>.**  (true)

Using the binomial tail we get about 1.75% for A and 97% for B, ratio ≈ 55.5 > 50, so true.
```

That compresses too many calculations into prose. Split them.

---

## Header and truth rules

1. Preserve the **exact live statement text** inside the header.
2. Preserve the live `answer_key` verdict. Do not flip True/False to make the writeup nicer.
3. Recompute every number independently. If an old explanation contains a false claim, fix the math; do not copy the error forward.
4. If a model is underdetermined (three reports, two unknowns), keep the live verdict but make the **working assumption explicit** (“treat Reports 1 and 2 as the trusted pair…”). Do not pretend uniqueness is proven from the stem alone.
5. Never invent a stronger conclusion than the arithmetic supports (e.g. a higher basket total does not by itself prove both unit prices rose).

---

## Voice and formatting

Do:

- Calm tutor English. Short and medium sentences.
- English outside math; math inside `$...$` / `$$...$$`.
- Escape currency as `\$12.00` outside math.
- Use one backslash in KaTeX commands inside the string content: `\frac`, `\qquad`, `\approx`.
- Keep verdict language plain: “so the statement is true/false.”

**Never put English words inside math.** The practice renderer sends a `$…$` / `$$…$$` span to KaTeX only when it holds pure math; a span with two consecutive English words is printed as raw LaTeX instead. So `$$\text{discount factor} = e^{-rt}$$` reaches the student as literal `\text{discount factor} = e^{-rt}`.

Write it the 13.18 way instead: symbols and numbers inside the display, names and units in the sentence around it.

```markdown
The one-year discount factor is the reciprocal of the growth factor:

$$\frac{PDV}{K} = (1+r)^{-t}$$

The effective rate sits $0.24$ percentage points above the nominal rate.
```

Not:

```markdown
$$\text{discount factor} = (1+r)^{-t}$$

$$\Delta \approx 0.24 \text{ percentage points}$$
```

`\mathrm{}` / `\text{}` are still fine for short symbol tags with no prose inside them: `R_{\mathrm{ann}}`, `PDV_{\mathrm{cont}}`, `\mathrm{SD}(A)`.

Avoid:

- Em dashes and dash piles.
- `**Watch.**`, `**Why it fails.**`, `**Trap:**`, tip spam, coaching stickers.
- AI filler (“It is important to note”, “In conclusion”, “robust”, “comprehensive”).
- Fake enthusiasm.
- Prose rendered as math, or math that swallows English.
- Over-escaped LaTeX that reaches KaTeX as `\\frac` / line-break scars.

---

## Chapter-specific notes

### Linear systems (Ch5)

- Overview path: translate each row once (tagged) → solve. Never reprint the two equations as a separate “model” part.
- Peel shared fees/taxes first when the stem requires it.
- For “new mix / new order” statements, recompute with the recovered prices; do not average old totals and do not re-solve the original invoices.

### Financial math (Ch11)

- Name the formula ($i = r/n$, effective rate, FV, annuity, IRR, …) before substituting.
- Keep periodic rate, number of periods, and money units explicit.
- Threshold claims (“more than”, “less than”, “approximately”) need the computed gap shown.

### Binomial (Ch13)

- `MATH 13.18` is the depth reference for every chapter.
- Single-point PMF, event vs exact, tails, mean, variance, SD, and ratios each get their own derivation when used.
- Upper/lower tails that the claim needs must list the material terms, not jump to a black-box result.

### Power functions / other chapters

- Same shared-overview rule: levels and scale factors recovered in the overview are not rebuilt in every letter.
- In Ch8, “Part 2: The model” may keep a *recovered* closed form that Part 1 did not yet have (calibrated $A$, $r$, composed $C(n)$). Do not keep it if it only reprints the Part 1 translation.
- Match that chapter’s live header convention.

---

## Rewrite workflow

1. Read the live task: `context`, tables, `statements`, `answer_key`, current `tactical_explanations`, `solution_overview`.
2. Read `MATH 13.18` if the depth target is unclear.
3. Confirm the overview translates and solves the shared model once, without reprinting the same equations.
4. For each letter, decide the *extra* work (lookup / one check / new mix / long sum). Do not count the shared solve again.
5. Write the letter against the overview values, with every claim-specific step shown.
6. Validate:
   - header matches statement + verdict
   - `$` / `$$` balance
   - no second copy of the shared system / elimination
   - no tip labels / em dashes
   - KaTeX commands not over-escaped
   - recomputed numbers match the verdict

---

## Quick do / don’t

| Do | Don’t |
| --- | --- |
| Follow 13.18 step-per-display depth for *this letter’s* work | Compress a multi-step *claim* check into one paragraph |
| Point at overview recoveries in one line | Rebuild the shared system under A, then again under B, C, D, E |
| Show the extra arithmetic the claim needs | Reprint “Part 2: The model” after already translating the rows |
| Compare explicitly to the claim | End with a bare True/False and no check |
| Escape `\$` outside math; `\frac` inside math | Leave `\\frac` scars or unpaired `$` |
| Make underdetermined assumptions explicit | Fake uniqueness the stem does not give |

---

## How to use this memory

In Cursor, point at this file when asking for explanation work, for example:

> Follow `scripts/bbe-tactical-explanations-memory.md`. Solve the shared model in the overview once; each letter only does that claim’s extra arithmetic.

That is enough to keep one explanation format across math practice banks.
