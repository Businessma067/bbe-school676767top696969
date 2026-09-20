# WISO Economics — book-aligned cases (Wirtschaft verstehen 2026)

## Book
WU Wien: *Wirtschaft verstehen. Aufnahmeprüfung 2026* (Bachelor WISO 2026/27).
Extracts: `scripts/_wiso_extract/sub_X_Y.txt`
Theory: `src/data/wiso-economics-theory/ch{1-4}.md`

## Exam format
Same as BBE: each case has a short German stem + **exactly 5** independent Wahr/Falsch statements.

## What to do
1. Read the assigned WISO subsection extract first. Only test claims that this subsection actually teaches.
2. Look at the mapped BBE English cases. For each:
   - **Keep + translate** if the claim is in this WISO subsection (use the book's German terms).
   - **Rephrase** if the idea is close but BBE wording is US/UK (sole trader, corporation) or not in this book.
   - **Drop** if the topic is not in this WISO subsection (do not smuggle Fuhrmann-only material).
3. **Generate new** cases for book topics that BBE does not cover, until you hit the target count.
4. Write **teacher explanations from scratch**, one statement at a time. No templates, no shared openers, no scripts.

## Output
Write valid UTF-8 JSON array to the assigned file path.
Each object:

```json
{
  "subsection": "1.1",
  "case_id": "WISO 1.1.01",
  "title": "Kurzer deutscher Titel",
  "context": "Bewerten Sie die folgenden Aussagen zum Thema …:",
  "statements": ["…", "…", "…", "…", "…"],
  "answer_key": [false, true, true, false, true],
  "tactical_explanations": ["…", "…", "…", "…", "…"],
  "difficulty_level": "2/5",
  "tier": "full"
}
```

`case_id` runs `WISO {subsection}.{nn}` from `.01` upward, zero-padded.

## Language
- All titles, stems, statements, explanations in **correct German** (Sie-form is fine; stay consistent inside a case).
- Use the book's terms: Güter, privater Haushalt, Unternehmen, Knappheit, Opportunitätskosten, Wirtschaftskreislauf, BIP, Rechtsform, Einzelunternehmen, OG, KG, GmbH, AG, Genossenschaft, Eigenkapital, Fremdkapital, Marketing-Mix, digitale Transformation, Plattform, Wirtschaftsinformatik.
- Austrian company law for ch 3.2, not UK sole trader / US corporation unless the book itself uses that comparison.
- No anglicisms the book does not use. No em dash (`—`).

## Keys
- Mix true/false; never 5× true or 5× false.
- Absolute words (nur, immer, nie, alle) are usually the trap when the book gives a limited rule.
- Do not invent numbers, laws, or definitions that are not in the extract. Statistics from the book may be used; do not require rote memorisation of exact figures unless the claim is clearly about the book's qualitative point.

## Explanations (teacher voice)
Gold tone: calm tutor, this statement, this scene, then the verdict.

```text
Ein regelmässiges Gehalt bleibt endlich. Der Haushalt verteilt weiterhin begrenztes Einkommen auf konkurrierende Bedürfnisse, also verschwindet Knappheit nicht am Zahltag. Die absolute Behauptung, Einkommen hebe alle Grenzen auf, macht den Satz falsch.

Die Aussage ist falsch.
```

Rules:
1. Practice UI already prints **A.** → Wahr/Falsch. Write the **body only**. Do NOT start with `WAHR —` / `FALSCH —` / `**A.**`.
2. Match `answer_key[i]` exactly. Never flip True/False after writing.
3. End each explanation with exactly: `Die Aussage ist wahr.` or `Die Aussage ist falsch.`
4. No exam-meta: "bevor du ankreuzt", "Prüfungsfalle", "Lies den Quantor", "In der Klasse würden wir".
5. Forbidden filler: "Es ist wichtig zu beachten", "Zusammenfassend", "Diese Aussage bezieht sich auf".
6. Length tracks work: short for a one-line definition; long when a mechanism needs a walkthrough.
   Per case: no body under 160 chars; ≥2 letters ≥400; ≥1 letter ≥550; vary openings (first 40 chars unique in the case).
7. Numeric letters (Zinsen, BIP-Logik, Kennzahlen): show the formula/identity, plug numbers, compare to the claim.
8. Optional `Note:` only for a real concept trap (0–2 per case).

## Difficulty
Increase inside the subsection: first third 1–2/5, middle 2–3/5, last third 3–5/5.

## After writing
Confirm case_id count equals the assigned target, every explanation non-empty, every closer matches the key, and German is grammatical.
