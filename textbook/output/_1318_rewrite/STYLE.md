# 13.18 rewrite — Chapters 1, 5, 8, 11

Gold: `MATH 13.18` in `src/data/math-cases-ch13-binomial.json`. Read all five letters plus its overview before writing.

## What you change

Rewrite **both** `solution_overview` and the five `tactical_explanations`.

Keep byte-for-byte: `id`, `case_id`, `title`, `context`, `statements`, `answer_key`, `difficulty_level`, `sort_order`, `subsection`, `tables_markdown`, `figure`.

Do not flip a verdict. Recompute every number from the stem.

## Shared model once (no duplicates)

The UI concatenates overview + A–E. Equations must appear **once**.

**Overview**

- Identify the model from the stem.
- Translate shared observations into equations **once**. Tag `(1)`, `(2)` if later algebra refers to them.
- Solve only the **shared** unknowns (the pair $(x,y)$, the recovered $A$ and $r$, the listed sets, the given $P,r,n,t$).
- Do **not** add a “Part 2: The model” block that reprints Part 1.
- Do **not** pre-evaluate every statement. A number that only one letter needs lives in that letter.

**Letters A–E**

- Write only the work of **this** claim.
- Use recovered values in one short sentence (“The overview recovered $x=360$.”).
- Show the extra formula / substitution / comparison this claim needs.
- Do **not** rebuild the shared system, re-scan all three sets, or re-derive $A$ and $r$.
- Do **not** narrate other letters.

## 13.18 rhythm

1. One calm sentence naming the rule this letter needs.
2. General formula in its own `$$...$$` only if it is not already in the overview.
3. Substitute the concrete numbers in a **separate** display.
4. One algebraic or arithmetic step per display.
5. Compare with the claim.
6. Last sentence: `so the statement is True.` or `so the statement is False.` (Ch5/Ch11 may use `true`/`false` to match the live header convention).

Length tracks work. A lookup is short (like 13.18 B). A new mix or inversion gets the displays (like 13.18 A/D/E). A long sum gets every term (like 13.18 C). **Do not pad.**

## Headers (keep each chapter’s live convention)

| Chapter | Header |
| --- | --- |
| 1, 8 | `**A.** → True` |
| 5, 11 | `**A) <exact live statement text>.**  (true)` |

Verdict matches `answer_key`. Statement text in Ch5/Ch11 headers must match `statements[i]` exactly.

## Voice (forbidden)

No: em dashes; `**Watch.**` / `**Trap:**`; “A solver who”; “the fork”; “recovered isolation”; “discarded mix”; “Walking through that mix”; “yes-or-no against that number”; “The letter does not stop at naming the mix”; numbered trap essays (`**1.** **2.** **3.**`) that only restate the same point; “It is important to note”; “in conclusion”; English inside `$...$` / `$$...$$`.

Yes: calm tutor English; math in `$...$` / `$$...$$`; `\frac` not slash (except units); one backslash in KaTeX (`\frac`, `\qquad`, `\approx`); `\$` for currency outside math; no `${` anywhere.

## Overview shape (no Part 2 reprint)

Prefer a short stem recap, then the translation and the shared solve, then stop. You may use **Part 1: …** and **Part 2: Solve.** You may **not** insert a middle “Part 2: The model” that copies the same displays.

Ch8: a recovered closed form that Part 1 did not yet have (`A=2`, $Y(h)=2h^{1/3}$) may sit once after the solve. Do not reprint the unsolved translation.

## Gold fragments

**Lookup (13.18 B length)**

```
**A) The North depot currently holds 360 crates.**  (true)

The overview recovered $x=360$ as today's North holding. The claim is that same figure, so the statement is True.
```

**One extra arithmetic step (13.18 A length)**

```
**C) If 30 crates were moved from South to North instead, North would then hold 390 crates.**  (true)

This is not the overview's equalizing transfer. North starts at the recovered $x=360$ and receives $30$ crates from South:

$$360 + 30 = 390$$

The claim is $390$, so the statement is True.
```

**Formula + two substitutions (13.18 D/E)**

```
**D.** → False

For a binomial count, $X$ is the sum of $n$ independent Bernoulli trials, so

$$\mathrm{Var}(X) = np(1-p)$$

Side A:

$$\mathrm{Var}(A) = 25 \cdot 0.3 \cdot 0.7 = 5.25$$

Side B:

$$\mathrm{Var}(B) = 25 \cdot 0.68 \cdot 0.32 = 5.44$$

The claim needs $\mathrm{Var}(A)>\mathrm{Var}(B)$. We have $5.25<5.44$, so the statement is False.
```

## Output

Write JSON only, one object per task, preserving every field you were given, with new `solution_overview` and `tactical_explanations`.
