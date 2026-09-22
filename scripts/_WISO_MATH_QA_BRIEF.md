# WiSo Math DE Overlay QA Brief

## Goal
Review **every** German overlay task in one chapter. Fix formatting errors, translation garble, math/logic mismatches, and incomplete explanations.

## Files
- German overlay (edit this): `src/data/wiso/math-de-ch{N}.json`
- English source of truth (read-only unless math/logic bug): `/tmp/wiso-math-en/ch{N}.json`

## Per-task checklist
1. Garble / nonsense DE (Bewerbung, Verbriefung, Mehrwertsteuer, Logbuch, leftover English).
2. Faithful translation; keep KaTeX identical; Richtig↔True, Falsch↔False.
3. Formatting: balanced `$`, no placeholders.
4. Logic consistency with EN answer_key.
5. Completeness: verdict + key steps + „Die Aussage ist richtig/falsch.“
6. Preferred terms: Verdopplungszeit, natürlicher Logarithmus, Behauptung/Aussage, rekonstruieren, Niveau, ganze Zahl; Evaluate each → Bewerte jede Aussage. Markiere sie mit Richtig oder Falsch.

## How to fix
Rewrite broken DE from EN; do not change answer_key in overlay; write report to `/tmp/wiso-math-qa-ch{N}-report.md`.
