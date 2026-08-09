# English Grammar explanation style (v2)

Rewrite ONLY `tactical_explanations` (and keep `solution_overview` unused by UI — leave as-is).
KEEP statements, answer_key, highlights, ids, difficulty, sort_order unchanged.

## Per-statement shape

```
**A) <exact statement text>.**

2–4 living tutorial sentences (always — never shorten just to add/remove Tip/Trap).

[optional Tip or Trap — see rules]

Closing verdict lead-in sentence (required).
```

### Closing verdict (required, every item)
Do NOT end with bare `(true)` / `(false)`.
Write a natural one-sentence lead-in to the result, e.g.:
- true: `So the statement holds: present perfect correctly marks the open time span.`
- false: `So the statement is false: repair to "…".`

The last sentence must clearly land on true vs false for this letter.

### Tip / Trap (optional — analyze each item)
- Use **Trap:** only when the false wording is a real near-miss / exam trap (looks plausible). Prefer mid/hard items (difficulty 3–5). Soft false that is obviously wrong → no Trap label; just explain, then closing verdict.
- Use **Tip:** only when a short memorable cue adds something the body did not already say. Easy obvious trues → usually no Tip.
- If Tip/Trap would merely restate the paragraph, omit it. Omitting must NOT cut the main sentences.

### Format notes
- Letter A–E matches index; claim repeats the exact statement.
- UTF-8, no mojibake. Valid JSON. No commit.
