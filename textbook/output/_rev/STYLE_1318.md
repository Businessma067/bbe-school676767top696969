# 13.18 explanation mechanism — apply to Ch1, Ch5, Ch8, Ch11

Gold: `MATH 13.18` in `src/data/math-cases-ch13-binomial.json`.
Live golds already patched: `math-1-1`, `math-5-1`, `math-8-1`, `math-11-1` in this folder.

Edit **only** `solution_overview` and `tactical_explanations`.
Never change id, case_id, title, subsection, context, statements, answer_key, difficulty_level, sort_order, tables_markdown, figure, numbers, or keys.

## How 13.18 is built

**Overview = model only.** Restate the scenario in a few sentences. Name the unknowns / formula / parameters. Show the governing equation(s). Stop. Do **not** solve the five claims. Do **not** use Part 1 / Part 2 / Part 3. Do **not** dump an Answer line of recovered numbers.

**Each letter A–E stands alone** from the stem to the verdict. Do not write "the overview already", "from Part A", "as shown above", "the solution gives".

Rhythm of a letter:

1. One calm sentence naming the rule this letter needs.
2. General formula in its own `$$...$$` when it is not already obvious.
3. Substitute the concrete numbers in a **separate** display.
4. **One algebraic or arithmetic step per display.** No whole elimination crammed into one `\qquad` chain (a single evaluation like `5\cdot 2^{3}=5\cdot 8=40` is fine).
5. Compare against the claim’s figure / threshold.
6. Close with a plain sentence: `so the statement is True.` or `so the statement is False.`

Length **tracks work**. Easy lookup / one-arithmetic / conceptual letter stays short (copy 13.18 A or B). A full 2×2 plus a new mix gets every recovery step. A long sum gets every term (13.18 C). Do not pad. Do not clone paragraphs across letters. If two letters need the same recovered pair, each re-derives it in a **different sentence shape**.

Within one task the five letters must not all look the same length.

## Headers (keep the chapter’s live convention)

- Ch1 and Ch8: `**A.** → True` or `False`
- Ch5 and Ch11: `**A) <exact statement>.**  (true)` or `(false)`

Letter matches index. Verdict matches `answer_key`. Then blank line, then body.

## Voice

Calm tutor English. English outside math; math inside `$...$` / `$$...$$`. Never put English words inside math. No em/en dash. No `${`. No `**Watch.**` / `**Trap:**`. Currency outside math: `\$3.50` (JSON `\\$3.50`). KaTeX `\frac`. Digits in `$...$`. Write JSON with `JSON.stringify(arr, null, 2) + "\n"`.

## 13.18 A (short compute) — copy this density

Name the rule → general formula → substitute → compare → verdict. About 6–10 sentences plus 2–4 displays.

## 13.18 B (short conceptual)

Two or three sentences, often **no** displays, then `So the statement is True.`

## 13.18 D / E (medium)

Formula, two substitutions, comparison, verdict.

Recompute every number from the stem. Trust arithmetic, not an old writeup.