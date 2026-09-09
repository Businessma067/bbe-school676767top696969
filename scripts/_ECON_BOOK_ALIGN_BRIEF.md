# Economics Full Course — book-aligned rebuild (Fuhrmann subsections)

## Book
Fuhrmann, Bettina: *Introduction to Business and Economics* (Jugend & Volk, 2019) — WU BBE entry exam script PDF.

## Principle
- Cover **every** book subsection `2.1`–`6.5`.
- Case **count ∝ book page weight** for that subsection (see `scripts/_fuhrmann_sub_alloc.json`).
- Explanations: live teacher voice (walk the claim, concrete scene, trap). **No exam-meta scaffolding.**
- Ch6: stepped KaTeX + full arithmetic when numbers appear (same spirit as prior ch6 peak).

## Forbidden meta (never write)
- `Hold the statement against the chapter map before you tick it`
- `before you tick`, `board check`, `In class we would…`, `Spell out the claim…`
- `stem rubric`, `exam trap` process lines, `textbook test`, `true category beside the trap`
- `TRUE —` / `FALSE —` prefixes

## Allowed teaching
- Statement-specific nouns from the claim
- Concrete counterexample for False
- Optional `Note:` only for a real concept trap (0–2 per case)
- Closer exactly: `So the statement is True.` / `False.` matching `answer_key`

## Length (ch2–5)
Per case A–E: bodies usually 220–750 chars; ≥2 letters ≥400; ≥1 ≥550; no body under 160; vary openings.

## Length (ch6)
Numeric letters: formula identity → plug numbers → KaTeX steps → compare. Non-numeric: teacher prose like ch2–5.

## Book extracts
`scripts/_fuhrmann_extract/sub_X_Y.txt` — ground statements in that subsection’s book wording. Do not invent topics outside the extract + theory md.

## Files
- `src/data/economics-cases-ch{2-6}-subtopics.json`
- Theory reference: `src/data/economics-theory/ch{2-6}.md`

## Process
One case at a time, A→E. Do not change `answer_key` unless clearly wrong vs book (prefer keep keys; rewrite explanations to match keys). New generated cases need correct keys.

## Assigned range
Follow the agent prompt.
