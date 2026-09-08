# Economics ch2–ch5: rewrite explanations like ch6 (teacher, free length)

## Goal
Replace **every** `tactical_explanations[i]` in ch2–ch5 from scratch.
Match ch6 quality: natural teacher voice, statement-specific, varied length, KaTeX when numbers/ratios need it.
No stock templates. No identical paragraphs reused across letters/cases.

## Files (all cases — bank is already ~35%)
- `src/data/economics-cases-ch2-subtopics.json` (122)
- `src/data/economics-cases-ch3-subtopics.json` (105)
- `src/data/economics-cases-ch4-subtopics.json` (105)
- `src/data/economics-cases-ch5-subtopics.json` (244)

## Gold sample (ch6 voice)
Short false:
```
Bank loans and trade creditors are liabilities, not equity.

So the statement is False.
```

Numeric true (step the formula):
```
Inventory share of current assets = Inventory ÷ current assets.
From the extract, Inventory = 140 and current assets = 333.

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{140}{333}
$$

$$
Share = 42.0\%
$$

42.0% is more than 32.6%.

So the statement is True.
```

## Hard rules
1. **From scratch** — do not polish old text; rewrite each letter.
2. End every letter with exactly `So the statement is True.` or `So the statement is False.` matching `answer_key[i]`.
3. **No** `TRUE —` / `FALSE —` prefixes (UI shows verdict in the header).
4. **No stock lines**, especially:
   - anything with `tied to buyer type, exchange, or orientation`
   - `whichever the stem is testing`
   - `Walk the claim…`, `Definition letters live or die…`
   - `The claim about X matches the chapter reading`
   - copy-pasted identical definitions across many letters
5. **Vary A–E inside each case**: mix short / medium / long. Easy lookups can be 1 short paragraph; numeric or subtle FALSE need more.
6. Statement-tied: use the claim’s nouns; for FALSE give a concrete counterexample or corrected category from the stem.
7. KaTeX `$$...$$` only when the stem has numbers/ratios worth showing step-by-step (like ch6). Otherwise plain teacher English.
8. Do **not** change `statements`, `answer_key`, `context`, `case_id`, `title`.
9. Process **one case at a time**, letters A→E, then next case in your assigned range.
10. After your range: save JSON (indent 2, trailing newline).

## Forbidden sameness
If two letters in the same case share the same opening sentence or the same definition paragraph, rewrite until they differ.
Across your batch, do not reuse the same closer/template sentence.
