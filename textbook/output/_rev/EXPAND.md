# Expand letters — keep 3-part overview, do not repeat its arithmetic

Edit **only** `tactical_explanations`. `solution_overview` has already been restored (Part 1 / Part 2 / Part 3 + the shared solve). Do not rewrite the overview unless it is missing Part headings.

Frozen: id, case_id, title, subsection, context, statements, answer_key, difficulty_level, sort_order, tables_markdown, figure.

## The bug to fix

Letters must **not** all be one short paragraph of similar length. Easy lookups can be medium. A statement that asks a new mix, a reverse transfer, a threshold, a complement, or a comparison should run **much longer** — several paragraphs, several numbered steps of *reasoning*. Five times longer than a lookup letter is fine when the claim has that much to unpack. Never compress a rich claim into one paragraph.

Length must **vary inside each task**. If A–E look like five clones of the same word count, the rewrite failed.

## Overview already did the shared solve

Do **not** re-display the system, the elimination, `(1.006)^{12}`, $M(2)=40$, $A\cap B=\{3,4,5\}$, etc. Point at the recovered number in words: the overview recovered $x=360$, $i_m=0.006$, $M(3)=135$.

## What a letter should contain (this is the expansion)

Write like a tutor walking this **one claim** against the stem:

1. What the statement is actually asking, in the story of the stem (depots, invoices, resin block, deposit).
2. Which recovered object from the overview answers it, and why that object (North vs South, notebook vs pen, level vs scale).
3. The claim’s **own extra arithmetic only**, each new step in its own `$$` if it is new (reverse move, new mix, gap vs cutoff, complement scan). Number those extra steps `**1.**` `**2.**` when there are two or more.
4. What a rushed solver would mix up, with the wrong figure named.
5. What would have to change in the stem for the opposite verdict.
6. Close on the comparison or the meaning. Keep the chapter closer `so the statement is True.` / `False.` at the end.

Use several short and medium paragraphs. Blank lines between them. This is not one block of prose.

## Headers

- Ch1, Ch8: `**A.** → True` or `False`
- Ch5, Ch11: `**A) <exact statement>.**  (true)` or `(false)`

## Voice

Calm tutor English. Math in `$...$` / `$$...$$`. No English inside math. No em dash. No `${`. No “the overview already” as a lazy one-liner that replaces explanation — you may cite the recovered value, then keep writing. Currency `\$` (JSON `\\$`). Write `JSON.stringify(arr, null, 2) + "\n"`.

Do not flip keys. Do not shorten a letter that is already detailed; only add.

Copy the gold letters already in `math-1-1`, `math-5-1`, `math-8-1`, `math-11-1`.
