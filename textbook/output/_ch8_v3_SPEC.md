# Chapter 8 rewrite v3 — tasks 11–97 only (keep 1–10)

## What the student sees
English True/False bank. Five statements. Stem is a short story plus a power-function model that is **not** fully numeric: hide \(A\) and/or \(r\), give one or two facts (a level, a ratio, a difference, a cap). Close the stem with: `Evaluate each statement. Mark it TRUE or FALSE.`

Take the Ben/wheat exam as **one** reference, not a template:
- Recover the unknown first, then every claim uses it.
- Mix **verbal** claims (exponent vs 1, extra hour / marginal, inverse is a power, doubling input vs doubling output, never meets, stays ahead, not a power because of an intercept) with **numeric** claims.
- About **2 of 5** statements per task are numeric examples (a named input vs a named output, “more than 8 kg”, “under seven minutes”, “ahead by more than five points”). The other **3** are prose/property. Across the 87 tasks this should sit near 30–40% numeric statements, not 0% and not 80%.
- Do **not** stamp every task with the same five: “r>0.5 / evaluate 2x / neighbour extra hour / inverse is a power / must more than double”. Rotate. Some tasks have no derivative. Some have no inverse. Some have two curves. Some have a cap. Some have composition. Some have F+A x^r.

## Diversity (mandatory)
Each task a **different** setting. Do not clone farming. Use the existing title’s world if it is already distinct (telescope, kiln, weld, weir, bike-share, dye plume, …) but rewrite the stem and claims. No two tasks in a batch may share the same statement skeleton.

Math variety to hit across the bank: unknown r from a scale; unknown A from a level; both from two levels; A from a **difference**; two power laws racing; composition of two powers; negative exponent; F plus a power; min/cap; inverse vs a ceiling; unit cost / average product; change of units; logs when the scale is not a clean power.

Hard enough: recovering constants is almost always required before a True/False. Prefer exact powers (4,8,9,16,25,27,32,64,81) where you can, but some later tasks should need \(\ln\) or a decimal approximation. Wrong-number traps are good (claiming the shape factor as the level, reading +125% as ×1.25, linear scaling).

## Explanations (tactical)
Exactly five strings, letters A–E.
- First line: `**A.** → True` or `**B.** → False` matching the key.
- Start **immediately with the fact** for that statement (which observation, which cancellation). No throat-clearing, no “Extended context check”.
- Length tracks work: a one-line scale can be short; a recovery-plus-compose must show the steps.
- Display math: put a whole algebraic chain on **one** line when it fits (`r=1/3 \qquad A=2 \qquad Y(64)=8`). Do not split `= n/2` onto its own display.
- Last sentence **must** end with exactly `so the statement is True.` or `so the statement is False.`
- Fractions `\frac`. No em dash. No `${`. ASCII hyphen only.

## Overview
`solution_overview`: short restatement, then **Part 1: Building the model.** / **Part 2: The model.** tagged equations / **Part 3: Solve.** / **Answer.** line. Do not dump the overview into tactical explanations.

## Output JSON
Array of objects: `id, case_id, title, context, statements[5], answer_key[5], tactical_explanations[5], difficulty_level, sort_order, solution_overview`.
Keep `id`, `case_id`, `sort_order`. Keep difficulty within one notch of the old one unless the old was 1/5 — those may become 2/5 or 3/5. KaTeX must compile. Mix of true/false, not all true.
