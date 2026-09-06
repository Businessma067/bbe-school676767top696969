# Deepen ALL multi-step explanations (second pass)

## User complaint
Even after the first expand pass, explanations still compress work that needs more than one step — not only inequalities. Equations, arithmetic, finance, logs, systems, probability, binomial, differentiation, etc. must all be fully unwound. “Already lengthened” letters are still not maximal.

## Rule
If a calculation needs **more than one mental step**, each step gets its own `$$…$$`. Never chain `a = b = c`, never pack several arithmetic operations into one display, never jump from setup to the final number/set.

## How to work (mandatory)
Process **one task at a time**, in order (`case_id` ascending). For each task:

1. Read `context` + all 5 `statements` + `answer_key` (+ `solution_overview` if present).
2. For letters **A→E** in order, rewrite `tactical_explanations[i]`:
   - Header `**X.** → True/False` matching `answer_key[i]`
   - Calm setup sentence
   - **Every** algebraic / arithmetic / symbolic move in its own `$$…$$`
   - Short prose between steps only when needed
   - Closer `So the statement is True.` / `So the statement is False.`
   - No QED / “arithmetic already displayed…”
   - Do **not** change statements or keys
3. **Audit that task immediately** before the next:
   - header/key match, balanced `$$`, closer present
   - no multi-op one-liners, no `a=b=c`, no “gives $x…$” after one display
4. Only then go to the next task.

Commit in batches of ~10–15 tasks. Push to `cursor/maximal-expl-all-steps-6381` (pull --rebase first).

## Expand these (examples of forbidden compression)
- `$$4\cdot18+3\cdot25+5\cdot4+20=72+75+20+20=187$$` → separate products, then sum
- `$$x=\frac{a-13}{a-6}$$` then prose sign conclusion with no intermediate inequalities
- Finance: interest factors, PV/FV, annuity sums — each formula application and each numeric plug-in step alone
- Logs/exp: change of base, exponent laws — one identity per display
- Systems/Cramer: each determinant / substitution step alone
- Probability/binomial: each factorial/`nCr`/product term alone before combining
- Differentiation: product/chain/quotient — expand before simplifying; critical-point solves stepped

## Gold depth
MATH **6.113 E** in `src/data/math-ch6-inequalities.json` (common denom → critical points → sign chart). Match that *density of steps* for every topic, not only inequalities.

## Done when
Every task in your assigned file(s) has been visited sequentially A→E and audited. When unsure, expand.
