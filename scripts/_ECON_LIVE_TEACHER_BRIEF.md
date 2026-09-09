# Economics ch2–ch5: live teacher voice (expand, don’t “state”)

## Why
Length-mix fixed the “same length” problem but left many letters as dry one-liners that *state* a rule.
User ask: expand all like a live teacher; add notes only when useful; explain longer and orally — not bare assertions.

## Goal
Replace **every** `tactical_explanations[i]` in ch2–ch5 with living classroom prose.
Talk the student through the claim the way a teacher would at the board.

## Files
- `src/data/economics-cases-ch2-subtopics.json` (122)
- `src/data/economics-cases-ch3-subtopics.json` (105)
- `src/data/economics-cases-ch4-subtopics.json` (105)
- `src/data/economics-cases-ch5-subtopics.json` (244)

## Voice (mandatory)
Write as if speaking:
- Set up the claim in plain words, then walk why it holds or fails.
- Use a concrete scene with the stem’s nouns (hotel, CRM, household, retailer…).
- Contrast the true category with the trap the statement falls into.
- Prefer “Look…”, “Here is the catch…”, “If that were true…”, “In class we would check…” sparingly — natural, not a new template.

### Forbidden “state” shape (reject)
```
Market orientation still tracks customer expectations when quality is high.

So the statement is False.
```
That is a verdict with no teaching. Expand it.

### Notes (optional, selective)
When a trap is easy to miss, add **one** short note paragraph starting with `Note:` (English).
Examples of when to add:
- two similar terms that students mix up
- a scope limit (“this is about orientation process, not profit targets”)
- a common exam mistake

When **not** to add:
- the body already made the trap clear
- true definition matches that need no aside
- do **not** put `Note:` on every letter — target roughly **0–2 notes per case**, not 5

## Length (new rules — replace the old SHORT 40–100 mandate)
Body = chars before the final `So the statement is …` line.

| Kind | Body chars | Role |
|------|------------|------|
| Compact | 180–280 | Still a full mini-lesson (2–4 sentences / one paragraph). **No** sub-150 “state” lines. |
| Standard | 300–480 | Main teaching: claim → reason → example. |
| Expanded | 500–850 | Board talk: claim, trap, counterexample, maybe a `Note:`. |

Per case mandatory:
- **zero** bodies under 160 chars
- at least **two** letters ≥ 400
- at least **one** letter ≥ 550
- `max − min ≥ 200` (still vary — do not clone five identical essays)
- openings of A–E all different

Do not pad with “It is important to note that…” filler. Length = real teaching moves.

## Other hard rules
1. From scratch preferred; if expanding old text, rewrite so it no longer reads as a polished one-liner.
2. End exactly `So the statement is True.` / `So the statement is False.` matching `answer_key[i]`.
3. No `TRUE —` / `FALSE —` prefixes.
4. No stock: Keep-tied / stem-testing / Walk the claim / Definition letters live or die / chapter-reading matches.
5. KaTeX only if numbers need stepped math (rare in ch2–5).
6. Do **not** change statements, answer_key, context, title, case_id.
7. One case at a time, A→E; save JSON indent 2 + trailing newline.

## Gold sample (CASE 5.3.37 style — write your own; do not copy verbatim)

Compact (no note):
```
Market orientation is a listening habit, not a spare tyre for bad rooms. Even when the hotel’s feature scores look excellent, the loyalty desk still has to watch what guests expect next — room types, redemption friction, partner offers. Shrugging “quality is already high, so we can ignore expectations” walks away from market orientation, not deeper into it.

So the statement is False.
```

Expanded with note:
```
Product orientation builds the loyalty catalogue from what the firm already wants to sell — points ladders, package grids, partner vouchers — and then looks for guests who will take that menu. The statement flips the order: it demands a full needs study of every customer before any specification is written. That “needs first, specs second” story is market orientation. A chain that freezes one HQ points ladder and rolls it out unchanged is product-oriented even without a guest-by-guest interview wave.

Note: do not treat “we thought about guests somehow” as proof of market orientation — the sequence (offer first vs needs first) is what the chapter tests.

So the statement is False.
```

## Validate after your range
```bash
python3 scripts/_econ_live_teacher_validate.py <file> --from-id ... --to-id ...
```
(or the script path given in the agent prompt)

## Assigned range
Only the case_id range in your prompt. Do not edit other chapters/ranges.
