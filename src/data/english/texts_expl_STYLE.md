# English Texts explanation style (reading bank)

Rewrite ONLY these fields on each task:
- `tactical_explanations` (length 5, one per statement)
- `highlights` (length 5 — verbatim contiguous substrings from the passage)

Do NOT change: id, case_id, title, exam_title, context, kind, statements, answer_key, difficulty_level, sort_order, subsection.

## Per-statement shape (coach prose, Grammar v4 quality)

```
**A) <exact statement text>.**

2–4 living tutorial sentences that teach why the answer is true/false,
anchored in the passage (cite paragraph number and quote when possible).

**Tip:** or **Trap:** (optional, only when it adds a cue)

Closing verdict sentence — a reasoned CONCLUSION, not a click-command.
```

### Verdict rules
- No bare `(true)` / `(false)` stamps.
- Ban: "Mark it wrong", "Keep this", "So the statement holds", "Accept the line".
- True: conclude the claim matches the passage, with a short why.
- False: conclude it fails, name the distortion, and quote the passage fact that overturns it.

### Highlights (critical for "Show in text")
- `highlights[i]` MUST be an exact contiguous substring copied from the passage when the item is decidable from the passage (reading / inference / chronology / stats).
- Prefer 8–140 characters of the strongest proving/disproving span.
- For pure grammar / invented-sentence items with no passage span: use `""`.
- Never invent wording that is not in the passage.

### Output
Write JSON file exactly as specified in the agent prompt:
`textbook/output/texts_expl_patches/<subsection_id>.json`

Valid UTF-8 JSON. Real quotes/dashes. No mojibake. No commit.
