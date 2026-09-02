# Deduplicate + thicken \u2014 keep original notebook style

Edit **only** `solution_overview` and `tactical_explanations`.
Never change id, case_id, title, subsection, context, statements, answer_key, difficulty_level, sort_order, tables_markdown, figure, numbers, or keys.

## What went wrong

The Full Solution panel concatenates overview + A\u2013E. Students currently see the same system solved five or six times, and the same closing sentence over and over. That is the duplicate. Keep the original **look** (Part 1/2/3, numbered steps, `$$` displays, bullets, `**A.** \u2192 True` or `**A) \u2026**  (true)` headers). Change only what repeats.

## Overview

Keep Part 1 / Part 2 / Part 3 and the shared solve. That is the one place the recovered coefficients, rates, or set-scan live.

Delete a first paragraph that merely copies the stem. Do not add a new literary opening.

Do not verdict A\u2013E inside the overview.

## Letters

Each letter does **its extra step only**.

Do **not** re-derive a display that the overview already produced (`x=360`, `i=0.006`, `(1.006)^{12}`, `A\\cap B=\\{3,4,5\\}`, the same two-equation system). One short pointer is enough: the overview already recovered $x=360$, so this letter can start from there.

Do **the claim's own extra arithmetic in full**, with `$$` if it is new (a reverse transfer, a different side length, a gap against a cutoff, a complement scan that the overview did not spell out).

If two letters would show the same extra display, keep it in the first letter that needs it; the later letter may cite that result in words.

After stripping duplicates, if a letter is thinner than about four sentences, **add explanatory prose**: what a rushed solver would mix up, why the recovered number forces this verdict, what would have to change for the opposite verdict. That extra text is the point of this pass. Do not pad with "the claim names X" / "so the statement is True/False" / "matches the claim".

## Still banned as closers

- "The claim names X"
- "matches the claim" / "as claimed"
- "so the statement is True/False" / "hence the statement holds/fails"

Close on the comparison, the trap, or the meaning instead.

## Keep

KaTeX `\\frac`, digits in `$...$`, no em/en dash, no `${`. Headers must still match `answer_key`. Write back with `JSON.stringify(arr, null, 2) + "\\n"`.
