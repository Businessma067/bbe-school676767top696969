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

### Format notes — punctuation & symbols (strict)

- Letter A–E matches index; claim repeats the **exact** statement text.
- UTF-8 only: real `'` / `'` / `—` / `→` as needed. **No** mojibake, **no** `\1`/`\2` leaks, **no** ``.

**Claim header period rule**
- Shape is `**A) <statement>.**` only when the statement does **not** already end with sentence punctuation.
- If the statement already ends with `.` `?` `!` (or those inside a final quote: `."` `?"` `!"`), do **not** add another period:
  - ✅ `**A) Direct: "X." → "Y."**`
  - ❌ `**A) Direct: "X." → "Y.".**`  ← double period before `**`

**Arrows & quotes for transforms**
- When you show A becomes B / unpacks / paraphrases / Direct→Reported, use an arrow and quote both sides:
  - ✅ `"Having been briefed by the nurse" → "The parents were briefed by the nurse and then approved the treatment."`
  - ✅ Tip form pairs: `Decide → to + base verb` (use `→`, not a bare hyphen).
  - ❌ `Having been briefed by the nurse unpacks fairly into The parents were…` (no quotes, no arrow)

**Statements**
- Same arrow/quote rules inside `statements` when the item itself is a Direct → Reported pair.
- No missing symbols, no accidental double periods, no orphan commas replacing arrows.

**Closing**
- Keep v4 reasoned conclusions (not student-click commands).
- Mid-body teaching phrases like “prefer …” are fine.
- Valid JSON. No commit.
