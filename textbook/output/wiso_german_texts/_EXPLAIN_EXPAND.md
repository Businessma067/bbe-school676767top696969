# WISO German texts — expand tactical_explanations

Rewrite ONLY `tactical_explanations` (length 5) on each task.
Optionally improve `highlights` if a better exact passage substring exists.
Do NOT change: id, case_id, title, exam_title, context, kind, statements, answer_key, difficulty_level, sort_order, subsection, or the passage.

## Target quality (match BBE English Texts coach prose, in German)

Mean length per explanation: about **650–900 characters** (currently many are 230–400).

Shape:

```
**A) <exakter Aussage-Text>.**

2–4 lebendige Tutorialsätze: warum wahr/falsch.
Absatznummer nennen und kurze wörtliche Passage zitieren.
Erklären, welche Verzerrung vorliegt (bei falsch) oder warum die Paraphrase treu ist (bei wahr).

**Tipp:** oder **Falle:** (optional, nur wenn hilfreich)

Schlusssatz als begründetes Fazit — kein „Markiere als falsch“, kein nacktes (wahr)/(falsch).
```

### Verdict rules
- True: schließen, dass die Aussage dem Text entspricht, mit kurzem Warum.
- False: schließen, dass sie scheitert; Verzerrung benennen; Textfakt zitieren, der sie widerlegt.
- Banned closings: „Die Aussage trifft den Text.“ allein ohne Begründung; „Markiere…“; „So the statement holds“.

### Output
Overwrite the same file path you were given (full JSON with subsection + tasks).
Validate: every highlight ⊆ passage; explanations length 5; header `**X) <statement>**` matches statement text.
