# English Grammar explanation style (v4)

Rewrite ONLY `tactical_explanations` (leave `solution_overview` as-is).
KEEP statements, answer_key, highlights, ids, difficulty, sort_order unchanged.

## Per-statement shape

```
**A) <exact statement text>.**

2–4 living tutorial sentences (always).

[optional Tip or Trap]

Closing verdict sentence (required) — a reasoned CONCLUSION, not a student command.
```

### Closing verdict (required)
Do NOT end with bare `(true)` / `(false)`.

Ban these voices entirely:
- Stamp: `So the statement holds…` / `So the statement is false: repair to…`
- Imperative / button-push: `Keep this` / `Accept the line` / `Mark it wrong` / `Reject this` / `Call it wrong` / `Strike…`
- UI-coach: anything that sounds like telling the learner what to click or score

Write **one natural conclusion** that grows out of the body you just wrote — as if finishing the reasoning aloud. The true/false call must still be obvious from the sentence.

**True** — conclude that the grammar works / the wording stands / the pattern fits, with a short why tied to this item, e.g.:
- `The open span from April to now is exactly what present perfect marks, so the wording stands.`
- `Continuous background plus simple interrupt is the right pairing here, so the sentence is sound.`
- `Past perfect correctly places the earlier action first, so this line holds.`

**False** — conclude that the wording fails / doesn’t hold, and give the repaired sentence in quotes when a clean fix exists, e.g.:
- `Finished-time last Tuesday needs past simple, so this doesn’t hold — "Maya finished her chemistry lab report last Tuesday."`
- `"Used to" takes a bare infinitive, so the line fails; the sound version is "Leo used to swim before school every morning."`
- `A deadline with by calls for future perfect, so plain will falls short: "By next Friday, the volunteers will have planted fifty saplings."`

Vary the phrasing across the bank. Ground every close in **this** item’s point — no copy-paste stamp.

### Tip / Trap (optional)
- Keep existing Tip/Trap unless clearly broken; focus the rewrite on the closing.
- Trap: only on real near-miss falses. Tip: only when it adds a cue the body didn’t already say.
- Omitting Tip/Trap must NOT cut the main sentences.

### Format notes
- Letter A–E matches index; claim repeats the exact statement.
- UTF-8, no mojibake. Valid JSON. No commit.
- Mid-body teaching phrases like “prefer …” or “the fix is …” are fine; the **last paragraph** must be a conclusion, not an order to the student.
