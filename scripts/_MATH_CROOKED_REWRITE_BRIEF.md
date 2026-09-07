# Crooked display rewrite brief

## Goal
Rewrite explanation math so KaTeX does not show crooked stacked `&= number` tails or nested `\dfrac{-\frac{...}}{...}` displays.

## Rules
1. Prefer **one display line** with a full chain: `LHS = mid = result`.
2. Do **not** use `\begin{aligned}...\end{aligned}` only to put a short numeric `&= -2` (or `&= 0.35`) on the next line.
3. Nested fractions in elasticity etc.: rewrite as
   `\varepsilon = \left(-\dfrac{1}{2}\right)\cdot\dfrac{80}{20} = -2`
   (not `\dfrac{-\frac12\cdot 80}{20}` split across aligned lines).
4. Keep meaning, answer_key, True/False closers, headers.
5. Fix only the assigned `case_id` fields listed in the queue item.
6. Clean garbled leftover short displays that repeat an already-stated result without purpose.

## Process
One task per agent turn. Load task from JSON, rewrite flagged fields, save JSON (preserve formatting via json dump indent=2 if file already uses that).
