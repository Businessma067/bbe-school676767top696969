# Econ ch2–ch5: statement-only rewrite

## User ask
Rewrite every explanation in ch2–ch5 from scratch so it is tied only to that statement.
- No repetitive stock paragraphs / cloned openers.
- Varied length: short when the point is simple, longer only when the idea needs it.
- Optional `Note:` / `Tip:` / `Trap:` only for a real local trap — usually 0, at most 2 per case.
- Do not pad with repeated definitions.

## Files
- `src/data/economics-cases-ch2-subtopics.json`
- `src/data/economics-cases-ch3-subtopics.json`
- `src/data/economics-cases-ch4-subtopics.json`
- `src/data/economics-cases-ch5-subtopics.json`

## Per letter
1. Replace `tactical_explanations[i]` completely.
2. Explain this statement’s nouns/logic. For False: concrete counterexample or corrected category.
3. End exactly: `So the statement is True.` / `So the statement is False.` matching `answer_key[i]`.
4. No `TRUE —` prefixes. No em dash `—`.
5. Do not change statements, answer_key, context, title, case_id.

## Length mix (per case of 5)
Body = chars before closer.
- Every body ≥ 140
- At least one compact ≤ 300
- At least one longer ≥ 360
- max−min ≥ 160
- Five different openings (first 40 chars unique in the case)
- Chapter-wide: same first-48-char opener ≤ 12 times

## Forbidden scaffolding
- Match each noun / Walk the claim / stem-testing / settles the letter
- Never and only stretch… / The claim uses only, never, or always…
- Read against… / nouns in play…
- Teacher-meta / exam coaching / keyed true/false commentary
- Copy-pasted definition blocks reused across letters

## Tip / Trap / Note
Prefer plain prose. At most two of `Note:` / `Tip:` / `Trap:` per case.

## Validate
```bash
python3 scripts/_econ_expl_from_scratch_validate.py src/data/economics-cases-chN-subtopics.json
```
