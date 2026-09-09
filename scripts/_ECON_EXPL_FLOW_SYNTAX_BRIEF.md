# Economics explanations — prose flow + syntax pass

## Goal
Natural teacher paragraphs (not one sentence per paragraph). Fix stray periods / broken line breaks.

## Already done
- `cleanExplanation` no longer turns em dashes into periods
- Most tiny paragraphs were merged

## Your job (assigned case range)
For each case, letters A→E:
1. Ensure body is 1–2 flowing paragraphs (math `$$` blocks separate; verdict line alone at end).
2. Fix syntax: glued `$$Text`, double periods, orphan fragments, missing spaces after commas/periods.
3. Keep teacher voice; no stock templates.
4. Closer: `So the statement is True.` / `False.` matching `answer_key`.
5. Do not change statements / answer_key / context.

One case at a time. Commit + push on `cursor/econ-expl-prose-flow-6381`.
