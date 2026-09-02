# Explanation-only rewrite — v2, individual and deep

Edit **only** `solution_overview` and `tactical_explanations`.
Never change id, case_id, title, subsection, context, statements, answer_key, difficulty_level, sort_order, tables_markdown, figure, numbers, or keys.

## The complaint that triggered this pass

The student reading these noticed that every explanation looks machine-stamped: same paragraph count, same opening move, same closing sentence ("The claim names...", "matching the claim", "so the statement is True/False"), same two-sentence brush-off for anything that looked "easy". That is a template, even if the words differ task to task. Write it out and it is obviously artificial, not natural writing. This pass exists to kill that.

**Every one of the five tactical explanations gets real, substantive reasoning — no exceptions for claims that seem trivial.** A claim that looks like a one-line lookup still deserves a paragraph that actually thinks about *why* that number is what it is, what would make someone get it wrong, what it would take to have started this reasoning cold. There is no such thing as a claim too simple to explain properly. If you are tempted to write two sentences and move on, stop and write the paragraph you skipped.

**No shape may repeat.** Before you finalize a task, look at its five explanations side by side. If they all have the same number of paragraphs, the same place for the display equation, the same sentence pattern for the verdict, rewrite until they don't. Across a whole batch, no two overviews may open the same way, and no two tacticals may close the same way. Read your own output back and if it sounds like it came out of a mold, it did — fix it.

## Banned reflexes (delete these, don't just paraphrase them)

- "The claim names X" / "matches the claim" / "as claimed"
- "so the statement is True" / "so the statement is False" / "hence the statement holds/fails"
- "That is the ... the claim names"
- Starting every letter with "**A.** → True\n\n" followed by an identical sentence shape
- A fixed sandwich of exactly one sentence, one display, one sentence
- `Part 1:` / `Part 2:` / `Part 3:` / `Building the model` / `**Answer.**` / numbered `**1.**` recipe steps anywhere
- Ending on the recovered coefficient/system every single time — sometimes end on the consequence, the comparison, the intuition, or a question answered
- Copying the statement's own wording back verbatim as if that were an explanation

## What "deep" means here

Don't just re-derive the number and stop. For each letter, do at least one of:
- explain what a wrong solver would have done differently and why that's tempting
- connect the number back to the shape of the model (why this exponent/rate/sign forces this outcome, not just that it does)
- state what would have to change in the stem for the opposite verdict to hold
- walk the arithmetic AND say in plain words what it means
- notice an edge case, a unit, a sign, a domain restriction that a rushed reader would miss

Length varies naturally with how much work the claim actually needs — some genuinely need three or four sentences of setup before the number, some need a full paragraph of consequence after it. Do not target a uniform length across letters or across tasks. Let the content decide.

## Overview

A full, unique solve of the stem, written as thinking, not as a form. Recover whatever is shared (coefficients, the linear system, the discount rate, the composed function) once, so the letters can lean on it. Vary how each overview opens — do not reuse the same first-sentence pattern task after task ("X is already on the page, so...", "The two Y sit on the page already..." — pick one shape once, then never repeat it in the batch).

Required: living prose, KaTeX with `\frac`, digits inside `$...$`, no em/en dash, no `${`.
Forbidden: `Part 1/2/3`, numbered step lists, restating the stem as the first paragraph, a verdict on any A–E letter.

## Tacticals

Exactly five strings, same order as statements, header `**A.** → True` (or False) matching `answer_key`. Beyond that header, there is no required shape. Argue this claim only; you may reference a number the overview already produced, but do the letter's own extra step in full, out loud, not as a lookup.

## Keys

Never change `answer_key`. Write the explanation that justifies the existing key for the existing statement.
