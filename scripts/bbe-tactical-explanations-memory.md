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

## Length rule (critical)

1. **Length tracks work.** A direct lookup or one-arithmetic check stays short. A 2×2 solve plus a fresh scenario check gets the full model, solve, and check. A long tail sum (like 13.18 C) gets every term.
2. **Never shorten existing good text.** When rewriting a live bank, the previous explanation is a **floor**. Replacement is allowed only if the new text is **at least as long** and keeps every meaningful step the old text had.
3. **Extra length must buy clarity**, not filler. Add missing setup, missing substitutions, missing intermediate displays, or missing comparisons. Do not pad with tips, slogans, or repeated summaries.
4. If asked only to deepen underdeveloped statements, leave already-complete ones alone unless they violate a hard rule below.

---

## One explanation = one complete path

Every letter A–E must stand alone from the original scenario to the verdict.

Do:

- Start from the given context / table / rates / totals.
- Define the unknowns in words, then write the equations.
- Derive any recovered values needed for *this* statement.
- Check the claim with explicit arithmetic or comparison.
- Close with a plain sentence that states True or False.

Do not:

- Write “From Part A”, “as shown above”, “earlier”, “the solution gives”.
- Assume the student already solved the system somewhere else.
- Jump from “let $x$ be …” straight to a final number with no displays.
- Leak the whole answer key or turn the overview into five copies of itself.

Compact reuse is allowed only as a **one-line origin after a real derivation already appears in that same explanation**, for example: “From the two invoice equations above, $x = 3.50$ and $y = 1.80$.” Even then, prefer re-deriving when the statement itself needs those values.

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
- Use one backslash in KaTeX commands inside the string content: `\frac`, `\qquad`, `\text`, `\approx`.
- Keep verdict language plain: “so the statement is true/false.”

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

- Typical path: translate → system → elimination or substitution → statement check.
- Peel shared fees/taxes first when the stem requires it.
- For “new mix / new order” statements, recompute with the recovered prices; do not average old totals.

### Financial math (Ch11)

- Name the formula ($i = r/n$, effective rate, FV, annuity, IRR, …) before substituting.
- Keep periodic rate, number of periods, and money units explicit.
- Threshold claims (“more than”, “less than”, “approximately”) need the computed gap shown.

### Binomial (Ch13)

- `MATH 13.18` is the depth reference for every chapter.
- Single-point PMF, event vs exact, tails, mean, variance, SD, and ratios each get their own derivation when used.
- Upper/lower tails that the claim needs must list the material terms, not jump to a black-box result.

### Power functions / other chapters

- Same standalone + step-display rules.
- Match that chapter’s live header convention.

---

## Rewrite workflow

1. Read the live task: `context`, tables, `statements`, `answer_key`, current `tactical_explanations`, `solution_overview`.
2. Read `MATH 13.18` if the depth target is unclear.
3. For each letter, decide the real work count (lookup / one check / full solve / long sum).
4. Write a standalone explanation at that depth.
5. If replacing an existing explanation, keep length ≥ old length and keep every useful step.
6. Validate:
   - header matches statement + verdict
   - `$` / `$$` balance
   - no `From Part A` scaffolding
   - no tip labels / em dashes
   - KaTeX commands not over-escaped
   - recomputed numbers match the verdict

---

## Quick do / don’t

| Do | Don’t |
| --- | --- |
| Follow 13.18 step-per-display depth | Compress a multi-step solve into one paragraph |
| Keep previous text as a length floor | Shorten a live explanation “for cleanliness” |
| Derive unknowns inside the letter that needs them | Say “from Part A” or “the solution gives” |
| Compare explicitly to the claim | End with a bare True/False and no check |
| Escape `\$` outside math; `\frac` inside math | Leave `\\frac` scars or unpaired `$` |
| Make underdetermined assumptions explicit | Fake uniqueness the stem does not give |

---

## How to use this memory

In Cursor, point at this file when asking for explanation work, for example:

> Follow `scripts/bbe-tactical-explanations-memory.md` and rewrite Ch8 tactical explanations like 13.18. Only lengthen; never shorten.

That is enough to keep one explanation format across math practice banks.
