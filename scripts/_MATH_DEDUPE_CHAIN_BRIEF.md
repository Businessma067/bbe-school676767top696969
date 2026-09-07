# Math: remove duplicate steps + light equality-chain merge

## User ask
Explanations still show **repeated identical steps** after the expand pass (e.g. `20+1=21` twice; whole arithmetic chains repeated). Also, **tiny equality fragments** that are clearly one continuous evaluation were split across many displays:

```
$$\frac{p_x}{p_y}$$
$$= \frac{2}{4}$$
$$= \frac{1}{2}$$
```

should become one display (or match the inline style already used nearby):

$$\frac{p_x}{p_y}=\frac{2}{4}=\frac{1}{2}$$

**Do not** fully compress real multi-step algebra back into one line. Keep maximal step detail. Only:
1. delete exact duplicate / repeated steps
2. join short continued `=` fragments that belong to the **same** evaluation

Do **not** change statements, answer keys, truth value, or teaching substance.

## How to work (mandatory)
Process **one task at a time**, `case_id` ascending. For each task, letters A→E:

1. Read explanation.
2. Remove consecutive identical `$$…$$` blocks (keep first).
3. Remove immediate repeated blocks of 2+ displays (A B A B → A B).
4. Remove skip-one repeats: `LHS=expr` / `expr=val` / `LHS=val` / `expr=val` → drop the second `expr=val` (and second `LHS=val` if present).
5. Merge only when a display is a short continuation starting with `=` (or a lone short number/fraction) and the previous display is the start of the **same** simple evaluation — join into one `$$… = … = …$$`.
6. Do **not** merge distinct algebra moves (common denom, factoring, critical points, sign charts, case splits, different LHS).
7. Audit headers/keys/closers still valid; `$$` balanced.
8. Next task only after audit.

Commit batches ~15–25 tasks. Push to `cursor/expl-dedupe-repeat-steps-6381` (pull --rebase first). No force-push.

## Gold “keep depth”
Rational inequality steps stay separate (common denom → critical points → sign chart). Only kill stuttering duplicates and silly one-token `=` lines.

## Done when
Every task in your assigned file(s) visited sequentially A→E.
