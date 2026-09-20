# Economics explanation rewrite — agent brief

You rewrite ONLY `tactical_explanations` (length 5) on each case in your assigned JSON pack.

## Gold style (copy this depth)

**Math calc depth:** `MATH 13.18` in `src/data/math-cases-ch13-binomial.json` and Ch11 in `src/data/math-ch11-financial.ts`.
Rhythm: name the idea → show formula / identity → substitute numbers → one step at a time → compare to the claim → plain verdict.

**Economics conceptual depth:** calm tutor, not a template. Example tone:

```text
Even a steady salary remains finite. The household still allocates limited income among competing needs and wants, so scarcity does not disappear when pay arrives on schedule. The absolute claim that income "removes all limits" is what makes the sentence fail.

The statement is false.
```

**Economics numeric (balance sheet / ratios):** every arithmetic step visible:

```text
Current assets = Inventory + Trade receivables + Cash
= 160 + 79 + 113
= 352

Current liabilities = Trade payables + Bank overdraft
= 188 + 40
= 228

Current ratio = 352 / 228 ≈ 1.54

The claim says the ratio exceeds 1.54. We have about 1.54, which meets that bar, so the statement is true.
```

## Rules

1. Practice UI already prints `**A.** → True/False`. Write the **body only**. Do NOT start with `TRUE —` / `FALSE —` / `**A.**`.
2. Match `answer_key[i]` exactly. Never flip True/False.
3. Use `context`, `statements`, and optional `hint_cores[i]` (short factual core only). Recompute any ratio yourself from tables/charts in `context`.
4. No em dashes (`—`). Prefer commas or periods.
5. Forbidden filler: "Read the quantifier", "Map the scenario", "This statement draws on", "A student who overlooked", "It is important to note", "In conclusion", tip stickers.
6. Length tracks work: short for a one-line definition check; long when numbers need a full walkthrough.
7. End each explanation with exactly: `The statement is true.` or `The statement is false.`
8. Keep all other fields unchanged. Remove `hint_cores` from the saved output (or leave it; merger will strip).
9. Write valid UTF-8 JSON back to the **same file path** you were given.
10. After writing, briefly confirm case_id count and that every explanation is non-empty.
