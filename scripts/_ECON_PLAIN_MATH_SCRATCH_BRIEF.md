# Economics unlocked explanations — WRITE FROM SCRATCH (math look)

## UI (already done)
Full solution is continuous plain `ExplanationProse` like math — **no boxes**, no “Statement explanation” cards. Headers injected as `**A.** → True`.

## Content — unlocked only
First `floor(n*0.35)` cases per file. Locked indices: do not touch.

| File | Unlocked |
|------|----------|
| economics-cases-ch2-subtopics.json | 122 |
| economics-cases-ch3-subtopics.json | 105 |
| economics-cases-ch4-subtopics.json | 105 |
| economics-cases-ch5-subtopics.json | 244 |
| economics-cases-ch6-subtopics.json | 218 |

## WRITE FROM SCRATCH
Do **not** edit/polish the previous text. Replace each letter’s `tactical_explanations[i]` with a brand-new explanation.

## Length diversity (mandatory inside every case A–E)
Assign a deliberate mix — e.g. short / medium / long / short / medium — so letters in one case look different:

| Kind | Body before closer | Shape |
|------|--------------------|--------|
| Short | ~50–140 chars | 1 short paragraph |
| Medium | ~180–350 chars | 2 paragraphs |
| Long | ~400–700 chars | 3–5 short paragraphs |

Within each unlocked case, use **at least two different kinds**. Across a chapter, min length should stay well below max (target stdev high; avoid every letter ~250–300).

## Format
```
TRUE — <free tutor prose, blank-line paragraphs>

So the statement is True.
```
(same for FALSE)

- Keep `TRUE —` / `FALSE —` matching `answer_key`
- End with `So the statement is True.` / `So the statement is False.`
- Statement-tied; for FALSE give a concrete counterexample
- No boxes in text; no “Statement explanation”; no robotic fillers
- No KaTeX unless a stem number needs a plain arithmetic line

## Branch
`cursor/econ-expl-plain-like-math-6381` — commit + push.
