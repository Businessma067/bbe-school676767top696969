# WISO German texts bank — schema

File per text: `textbook/output/wiso_german_texts/t.N.json`

```json
{
  "subsection": {
    "id": "t.1",
    "title": "Deutscher Titel des Textes",
    "passage": "(1) Absatz …\n\n(2) …",
    "paragraph_count": 9
  },
  "tasks": [ /* exactly 10 tasks */ ]
}
```

## Passage rules
- Exactly 9 numbered paragraphs: `(1)` … `(9)`
- Academic German, formal register (WU Aufnahmeprüfung Sprachverständnis)
- ~550–750 words total
- Style like BBE English texts: evidence, numbers, proponents/critics, open ending
- Topics suitable for WiSo (economy, society, policy, science in public debate)

## Task rules (all `kind: "reading"` — no grammar/vocab)
Each text has exactly 10 tasks, each with exactly 5 true/false statements:

| sort | exam_title |
|------|------------|
| 1 | Absätze 1–3 |
| 2 | Absätze 4–6 |
| 3 | Absätze 7–9 |
| 4 | Schlussfolgerungen & Wortbedeutung im Kontext |
| 5 | Querschnitt & Argumentstruktur |
| 6 | Zahlen, Fakten & Details |
| 7 | Ursache und Wirkung |
| 8 | Gewichtung & Haltung im Text |
| 9 | Chronologie & Vergleiche |
| 10 | Gesamtschluss & offene Fragen |

Task fields:
- `id`: `de-t-{N}-0{M}` e.g. `de-t-1-01`
- `case_id`: `DE T.{N}.0{M}` e.g. `DE T.1.01`
- `title`: `Aufgabe {M}`
- `exam_title`: from table (German)
- `context`: German one-liner describing what the statements test
- `kind`: `"reading"`
- `statements`: 5 German claims about the text
- `answer_key`: 5 booleans (mix true/false, roughly 2–3 true)
- `tactical_explanations`: 5 German coach explanations (see style)
- `highlights`: 5 exact contiguous substrings from the passage
- `difficulty_level`: `"2/5"` … `"4/5"` varying
- `sort_order`: 1–10
- `subsection`: `"t.N"`

## Explanation style (German)
```
**A) <exakter Aussage-Text>.**

2–4 Sätze: warum wahr/falsch, Absatznummer + kurzes Zitat.

**Tipp:** oder **Falle:** (optional)

Schlusssatz als begründetes Fazit (kein „Markiere als falsch“).
```

Highlights: exact contiguous passage substrings (8–140 chars) that prove/disprove.
