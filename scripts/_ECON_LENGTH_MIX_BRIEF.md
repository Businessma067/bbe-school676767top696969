# Economics ch2–ch5: length-mix rewrite (NO uniform template)

## Why this pass exists
Previous rewrites still produced the same shape for every letter:
one short sentence → blank line → `So the statement is True/False.`

User complaint (CASE 5.3.37 screenshot): all letters look identical in length and structure.

## Goal
Replace **every** `tactical_explanations[i]` in ch2–ch5 **from scratch**.
Inside **every** case, A–E must look like **different answers**, not five clones.

## Files
- `src/data/economics-cases-ch2-subtopics.json` (122 cases)
- `src/data/economics-cases-ch3-subtopics.json` (105)
- `src/data/economics-cases-ch4-subtopics.json` (105)
- `src/data/economics-cases-ch5-subtopics.json` (244)

## HARD length rule (per case, mandatory)

Measure **body** length = chars before the final `So the statement is …` line.

For **each** case of 5 letters, you MUST hit **all three** buckets at least once:

| Bucket | Body chars | Shape |
|--------|------------|--------|
| SHORT  | 40–100     | One tight sentence (or two very short clauses). No second paragraph before the closer. |
| MEDIUM | 160–280    | One solid paragraph that teaches; may name a counterexample. |
| LONG   | 360–650    | Two or three short paragraphs. Walk the claim, give a concrete scene/counterexample, then land the verdict. |

Also required inside each case:
- `max(body) - min(body) ≥ 280`
- At least **two** letters ≥ 360 (prefer one long + one medium-long), OR one ≥ 450 and one ≥ 200
- At most **two** SHORT letters (do not make A–E all short)

Do **not** pad with filler (“In conclusion…”, “It is important to note…”). Length comes from real teaching: definitions applied to the stem’s nouns, counterexamples, contrasts.

## Forbidden template (reject if you write this for more than 1 letter in a case)
```
<one sentence restating the rule>.

So the statement is False.
```
If four letters look like that, the case FAILS even if verdicts are correct.

## Bad (CASE 5.3.37 — do not ship this shape)
All ~130–180 chars, same rhythm:
```
Identical profitability targets do not force identical orientation processes for hotel loyalty programmes.

So the statement is False.
```

## Good length mix (same case, illustrative — write your own, do not copy)
- **SHORT (~55):** `Profit goals do not lock two hotels into the same product-versus-market process.`
- **MEDIUM (~200):** one paragraph on market orientation still tracking guest expectations when rooms are “excellent”.
- **LONG (~480):** two paragraphs on product orientation building the loyalty offer from the firm’s catalogue first, why “must analyse every customer before any specs” is the market-orientation story, not product orientation, with a concrete hotel-points example.

## Other hard rules
1. **From scratch** — delete the old string; do not polish it.
2. End exactly with `So the statement is True.` or `So the statement is False.` matching `answer_key[i]` (booleans: true→True, false→False).
3. No `TRUE —` / `FALSE —` prefixes (UI already shows `A. → False`).
4. No stock phrases: Keep-tied / stem-testing / Walk the claim / Definition letters live or die / “The claim about X matches the chapter reading” / copy-pasted identical openings across letters.
5. Statement-tied nouns from that letter’s claim. FALSE needs a concrete counterexample or corrected category.
6. KaTeX `$$...$$` only when numbers/ratios need stepped math (rare in ch2–5). Otherwise plain English.
7. Do **not** change `statements`, `answer_key`, `context`, `case_id`, `title`, `subsection`, `difficulty_level`, `tier`.
8. Process one case at a time, A→E, then next case in your assigned range.
9. Save JSON: indent 2, ensure trailing newline, valid JSON.

## Self-check before finishing your range
```python
# for every case in your range:
# bodies = [len before closer]
# assert any(40<=n<=100 for n in bodies)
# assert any(160<=n<=280 for n in bodies) or any(200<=n<=350 for n in bodies)
# assert any(n>=360 for n in bodies)
# assert max(bodies)-min(bodies) >= 280
# assert openings of A–E are all different
```

## Assigned range
Follow the prompt’s case_id range only. Do not touch other cases or other chapter files.
