# Sequential per-task explanation expansion

## How to work (mandatory)
Process **one task at a time, in order** (`case_id` ascending). For each task:

1. Read `context` + all 5 `statements` + `answer_key`.
2. For letters A→E in order:
   - Rewrite `tactical_explanations[i]` with **maximal stepped algebra**
   - Every algebraic move in its own `$$...$$`
   - Header `**X.** → True/False` must match `answer_key[i]`
   - Closer `So the statement is True.` / `False.`
   - No QED / “arithmetic already displayed…”
   - Do **not** change statements or keys
3. **Audit that task immediately** before moving on:
   - headers/keys match
   - `$$` balanced
   - no one-line jump (`expr = simplified > 0` then “gives answer”)
   - rational inequalities show: bring to one side → common denom → critical points → sign chart → set
4. Only then go to the next task.

Commit in batches of ~10–15 tasks (or one subsection) with messages naming the range, e.g. `Ch6: expand explanations MATH 6.01–6.15`.
Push after each batch to `cursor/expand-all-expl-steps-6381` (pull --rebase first).

## Forbidden compressed pattern
```
$$\frac{3x+2}{x-1}-2=\frac{x+4}{x-1}>0$$
gives $x<-4$ or $x>1$. Therefore True.
```

## Gold depth
See MATH 6.113 E on this branch (common denom steps + critical points + sign table).

## Done when
Every task in your assigned file(s) has been visited sequentially and audited.
