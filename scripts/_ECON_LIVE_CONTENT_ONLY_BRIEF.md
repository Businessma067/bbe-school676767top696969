# Econ ch2–ch6: living content-only explanations

## Forbidden (must be ZERO)
Any exam-method / scaffold / shared opener, including:
- Match each noun in the stem…
- If the claim's reason and the rule disagree…
- A corrected category… settles the letter…
- Ask whether the reporter uses…
- Keep period performance on the income statement…
- Classification for the item follows use, benefit timing… (stock opener)
- A swapped category or false restriction breaks…
- Words like only or never turn a limited truth…
- Customer behaviour and firm aims both matter… (stock)
- Satisfaction, share, and profit each interact…
- Owners, workers, customers, and neighbours…
- Applied here, the claim attaches the wrong…
- The amounts given for this case mean…
- actual 33. / actual growth is 10. caption lines
- fill the stem / I want you / When you hear / rehearse
- em dash `—`

## Required
Rewrite **every** `tactical_explanations[i]` so it explains **this statement** with the case nouns/numbers.
Living answer-key prose. Not teacher-character. Not method coaching.

### Length per case (5 letters)
| Kind | body chars |
|------|------------|
| Compact | 170–280 |
| Standard | 340–500 |
| Expanded | 580–950 |

- ≥2 letters ≥400
- ≥1 letter ≥550
- max−min ≥280 (really varied)
- five different openings (first 48 chars unique in the case)
- 0–2 `Note:` only for real traps

### Math (ch6)
Stepped KaTeX; `\text{…}` labels; `1{,}203`; no nested text; no bare Share; no “Actual 33.” captions.

### Closer
`So the statement is True.` / `False.` matching `answer_key`.
Do not change statements, keys, context, titles, ids.

## Validate
```bash
python3 scripts/_econ_expl_from_scratch_validate.py <file>
# also ensure no top opener appears >15 times in a chapter
```
