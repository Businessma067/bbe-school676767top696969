# Chapter 1 Logic — authoring style (mirror Chapter 11)

## Goal
Produce `MathTask` objects for subsections **1.1–1.4**, 30 tasks each (120 total).

## Schema (every task)
- `id`: `math-1-N` (N global 1..120)
- `case_id`: `MATH 1.NN`
- `title`: short human title (no "Task N")
- `subsection`: `1.1` | `1.2` | `1.3` | `1.4`
- `context`: scenario / given sets / rules (KaTeX where needed)
- `statements`: exactly 5 True/False claims
- `answer_key`: 5 booleans
- `tactical_explanations`: 5 strings, each starting with `**A) …**  (true|false)` etc.
- `difficulty_level`: `1/5` … `5/5` (easy→hard within the subsection order)
- `sort_order`: 1..30 within subsection
- `solution_overview`: Chapter-11 style stepped prose (see below)

## solution_overview format (like Ch 11)
```
<restated context>

**Part 1: Setup.**
Define symbols / rewrite the given sets or propositions clearly.

**Part 2: Formula / Key facts.**   (optional — use for set identities, truth tables, quantifier negations)
State the relevant identities in KaTeX when useful.

**Part 3: Solve.**
**1.** …
**2.** …
…
Work statement-by-statement or compute shared objects once then compare.

**Answer.** A=TRUE, B=FALSE, …
```
For hard tasks, make Part 3 longer and more tutorial. Clarity > brevity.

## tactical_explanations
- Header must echo the statement text.
- True: show the matching computation / equivalence.
- False: name the trap (wrong direction of implication, ∈ vs ⊆, converse, etc.).
- Use `$...$` / `$$...$$` for all math. Never bare `\cap` outside math mode.

## Fillers (`is_filler: true`)
- Invent a **new** scenario on the given theme.
- Do **not** copy leftover PDF tasks 53–57 or any PDF wording 1:1.
- Same T/F exam format; answers must be unambiguous.

## Difficulty mix target per subsection
Roughly: 6×1/5, 8×2/5, 8×3/5, 5×4/5, 3×5/5 (adjust if PDF scores force otherwise; keep monotonic-ish ordering).

## Output
Write polished array to `textbook/output/ch1_logic_banks/{id}_POLISHED.json` (30 tasks, no stubs).
