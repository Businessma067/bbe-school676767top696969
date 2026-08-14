# English Texts explanation expand pass

KEEP: id, statements, answer_key, highlights (do not change highlights unless broken).
REWRITE: `tactical_explanations` only — make each note **about two sentences longer**.

## How to expand
- Keep the existing coach structure (`**A) statement.**` + body + Tip/Trap + closing).
- Add ~2 teaching sentences: one clarifying the trap/paraphrase, one tying back to the exact passage wording or grammar rule.
- Do NOT invent new facts. Do NOT change the verdict.
- No AI voice, no "as an AI", no green/red color talk.
- Keep UTF-8. Valid JSON.

Output: `textbook/output/texts_expl_patches/<id>.json`
Schema unchanged: `{subsection_id, tasks:[{id, tactical_explanations[5], highlights[5]}]}`
