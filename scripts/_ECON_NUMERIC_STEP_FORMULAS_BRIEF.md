# Economics numeric letters — stepped formulas like math

## User ask
Where numbers must be calculated, show the work **through formulas**, format them clearly, and make the calculation **maximally detailed** (not one compressed line).

## UI
`ExplanationProse` now renders `$...$` / `$$...$$` via KaTeX (same as math).

## Scope
Unlocked only (`floor(n*0.35)`). Focus files with numeric stems:
1. **Primary:** `src/data/economics-cases-ch6-subtopics.json` — first **218** cases (many ratios, %, balance-sheet arithmetic)
2. **Also:** numeric unlocked letters in Ch2 (first 122) and Ch5 (first 244) when the statement/context has quantities to check
3. Ch3/Ch4: only if a letter truly needs arithmetic (rare)

For each letter that needs a number check, rewrite `tactical_explanations[i]` **from scratch** for that letter (keep non-numeric letters as they are unless clearly wrong).

## Format (match math depth)
```
TRUE — Name the ratio / growth / identity in words.

$$
\text{Current ratio} = \frac{\text{current assets}}{\text{current liabilities}}
$$

Plug in the table figures — one step per display:

$$
\frac{352}{228}
$$

$$
\approx 1.54
$$

Compare to the claim’s hurdle (e.g. “exceeds 1.54”).

So the statement is True.
```

### Rules
- Keep `TRUE —` / `FALSE —` + closer `So the statement is True/False.`
- **Never** compress `a = b = c` or `352 ÷ 228 ≈ 1.54` into one prose sentence when multiple steps exist
- Each algebraic/arithmetic move gets its own `$$…$$`
- Escape currency dollars in prose as `\$` if needed so KaTeX does not eat them
- Percent growth: show `(Y2-Y1)/Y1`, then the decimal, then `%`
- FALSE: show the computed value and why it misses the hurdle
- Preserve `statements` / `answer_key` / `context` / `case_id`

## Branch
`cursor/econ-numeric-step-formulas-6381` — commit + push.
