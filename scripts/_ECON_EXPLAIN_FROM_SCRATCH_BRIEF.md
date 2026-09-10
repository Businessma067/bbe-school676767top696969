# Econ ch2–ch6: rewrite explanations FROM SCRATCH

## What went wrong
Letters like CASE 2.3.10 say “The sentence accurately describes microeconomics” / “Apply that definition…” without ever explaining **why this claim is true or false**. That is meta, not an explanation.

## Goal
Replace **every** `tactical_explanations[i]` in ch2–ch6 with a real explanation of **that statement**.

## Voice
- Explain the claim the way a clear teacher would explain the idea — but **do not** write as a teacher character.
- Forbidden: “I want you…”, “rehearse before the exam”, “fill the stem”, “Look —”, “Here is the catch”, “Apply that definition to the claim”, “The sentence accurately describes…”, “The wording fits…”, “In «Title»…”.
- Do explain: what the terms mean, how they apply to **these nouns** (surge pricing, bakery, balance sheet lines…), why true/false.
- No third-person textbook coldness (“The auditor’s opinion addresses…”). Just direct content prose.
- No AI em dashes (`—`). Use `.` `,` `:` `(` `)`.

## Length (mandatory per case of 5 letters)
Body = chars before final `So the statement is True/False.`

| Kind | Body chars |
|------|------------|
| Compact | 160–280 |
| Standard | 320–480 |
| Expanded | 550–900 |

Per case:
- zero bodies under 150
- ≥2 letters ≥400
- ≥1 letter ≥550
- max−min ≥250
- five different openings (first 40 chars unique within the case)

Do not clone the same paragraph shape A–E.

## Notes
- Optional `Note:` only for a real trap (micro vs macro scope, residual before depreciation, land not depreciated, buyer type vs factory origin…).
- Target **0–2 Notes per case**, not every letter.

## Math (ch6 especially)
- Numeric letters: maximally stepped KaTeX, one move per `$$…$$` or clean `aligned`.
- Labels in `\text{…}` (never bare `Share`).
- Thousands: `1{,}203` inside math.
- No nested `\text{…\text{…}}`.
- No red/broken KaTeX.

## Hard rules
1. End exactly `So the statement is True.` / `So the statement is False.` matching `answer_key[i]`.
2. Do **not** change statements, answer_key, context, title, case_id.
3. Prefer from-scratch rewrite over editing old text.
4. Save JSON indent 2 + trailing newline.

## Gold samples

Compact true (micro):
```
Surge pricing for one ride-hail platform in one district is a single-market price mechanism. Microeconomics studies households, firms, and individual markets, so that local fare spike sits in micro, not in national aggregates.

So the statement is True.
```

Expanded false (macro trap):
```
Macroeconomics is about economy-wide totals: GDP, the overall price level, unemployment for the whole country. A surge price that hits many riders in one district is still a price in one local market. Counting how many people feel the spike does not turn the question into macroeconomics.

If the same episode were used only to ask whether city-wide CPI moved, that CPI question would be macro. The statement here claims the surge itself is macro because many riders are affected, and that reason is wrong.

Note: the unit of analysis decides micro vs macro, not how many people feel the price.

So the statement is False.
```

## Validate
```bash
python3 scripts/_econ_expl_from_scratch_validate.py <file> [--from-id ...] [--to-id ...]
```
