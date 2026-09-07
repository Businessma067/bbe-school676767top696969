# Economics unlocked explanations → math style

## Scope
Only unlocked cases: first `floor(n * 0.35)` in each file (leave locked indices alone).

Files (assign one agent per batch):
- `src/data/economics-cases-ch2-subtopics.json` — first 122
- `src/data/economics-cases-ch3-subtopics.json` — first 105
- `src/data/economics-cases-ch4-subtopics.json` — first 105
- `src/data/economics-cases-ch5-subtopics.json` — first 244
- `src/data/economics-cases-ch6-subtopics.json` — first 218

## Target format (match math voice/rhythm)
UI already shows `A. → True/False`. Body should look like math *after* the letter header:

```
[Optional short setup naming the chapter test]

[Apply to THIS statement’s wording — free paragraphs]

So the statement is True.
```
or `So the statement is False.`

### Rules
1. **Keep** leading `TRUE —` / `FALSE —` matching `answer_key[i]` (UI strips it for display; audits still need it).
2. After the em-dash, write **free tutor prose** — not one flat wall of text every time.
3. **Vary length and paragraph count inside each case (A–E):**
   - Easy definition letters: 1 short paragraph + closer (~80–180 chars body before closer)
   - Medium: 2 paragraphs + closer
   - Harder / multi-part: 3–4 short paragraphs + closer (or a tiny numeric check when the stem has numbers)
4. End **every** letter with exactly: `So the statement is True.` or `So the statement is False.` (matching key).
5. No robotic padding: “settle the letter”, “nothing exotic”, “Held against the chapter test”, “The statement is true.” (old closer), duplicated definitions.
6. Statement-tied: use the claim’s nouns; for FALSE give a concrete counterexample or corrected category.
7. No KaTeX unless a ratio/number already in the stem needs a one-line arithmetic check (plain `369 / 151 ≈ 2.44` is fine).
8. Do not change `statements`, `answer_key`, `context`, `case_id`.

## Process
One task at a time, A→E, then next case. Commit on `cursor/econ-expl-math-style-6381`.
