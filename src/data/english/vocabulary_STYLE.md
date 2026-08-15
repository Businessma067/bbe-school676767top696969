# English Vocabulary authoring and explanation style

Vocabulary is a topic bank, not a reading chapter. Statements may draw their
meaning and examples from `texts.json`, but they must stand on their own without
opening a passage.

## Level and domain balance

- Target **C1–C2** vocabulary throughout. Do not spend task slots on elementary
  contrasts such as `lend/borrow`, `accept/except`, `advice/advise`,
  `affect/effect`, or similarly transparent A2–B1 items.
- Prefer lexically dense near-misses: fine connotation, register, selectional
  restrictions, specialist collocation, and less transparent morphology.
- Exactly 20% of the complete bank should use business or economics settings:
  all 150 statements in `v.3`, plus six statements in each of `v.1`, `v.2`,
  `v.4`, `v.5`, and `v.6` (180 of 900 total).
- The remaining 80% should range across science, history, public policy,
  environment, technology, medicine, culture, law, and general academic life.
- A business word used in a scientific or civic example does not make the item
  business-themed; classify by the situation the complete statement describes.

## Task contract

- Six subsections (`v.1`–`v.6`), 30 tasks per subsection.
- Every task has exactly five statements, answers, explanations, and highlights.
- `solution_overview` gives one concise strategy for the five-item set.
- A highlight is the exact word or phrase being tested and must be a
  case-sensitive substring of its statement.
- Do not reuse an identical statement anywhere in the bank.
- Keep each task internally varied; do not test the same lexical item twice in
  one task.
- Difficulty follows `sort_order`: 1–6 = `1/5`, 7–12 = `2/5`,
  13–18 = `3/5`, 19–24 = `4/5`, 25–30 = `5/5`.

## Subsection focus

- `v.1` Confusable Pairs: distinguish forms that learners commonly swap.
- `v.2` Usage in Context: decide whether a highlighted item fits its sentence.
- `v.3` Business Collocations: test natural fixed and semi-fixed combinations.
- `v.4` Academic & Formal Vocabulary: test meaning, register, and formal usage.
- `v.5` Near-Synonyms & Nuance: distinguish overlap, connotation, and selection.
- `v.6` Word Formation & Affixes: test derivation, part of speech, and affix
  meaning in complete sentences.

## Statement design

- Use quoted target words or phrases rather than claiming they are italicised.
- A statement must contain enough context to decide true or false.
- False items should be plausible near-misses: reversed meanings, wrong
  collocations, register mismatch, incorrect derivation, or overstrong claims.
- Avoid trivia, obscure dictionary edge cases, and facts not taught by the item.
- Prefer contexts and domains already present in the 16 Texts passages:
  economics, work, policy, technology, trade, finance, sustainability, and
  public institutions.
- Balance true and false answers without making the sequence predictable.

## Per-statement explanation

Use the Grammar v4 coach structure:

```text
**A) <exact statement text>.**

2–4 living tutorial sentences. Define or contrast the tested item, explain the
decisive context clue or word-building rule, and connect that reasoning to this
exact sentence.

[optional **Tip:** or **Trap:** line]

One natural closing verdict that makes true/false unambiguous.
```

Rules:

- Letter A–E must match the statement index.
- Copy the statement exactly in the bold header. Add a final period only when
  the statement does not already end in sentence punctuation.
- Never use thin stubs such as `TRUE. Correct definition.` or
  `FALSE. Incorrect usage.`
- Do not lead with a bare `TRUE` / `FALSE`; the reasoning comes first.
- Define both sides of a confusable or near-synonym contrast.
- For a collocation, name the natural combination and explain why the distractor
  sounds non-idiomatic.
- For usage in context, point to the words around the target that license or
  contradict its meaning.
- For word formation, identify the base, affix, resulting part of speech, and
  the slot required by the sentence.
- Use Tip/Trap only when it adds a reusable cue.
- End with a reasoned conclusion, not an instruction to click or mark an answer.
- Preserve UTF-8 punctuation; do not introduce mojibake.

## Solution overview

Write 2–3 sentences that teach the shared strategy for the task. It must name
the contrasts or signals that matter in these five statements without revealing
the answers as a bare key.

## Patch schema

Agent patches live in `textbook/output/vocab_patches/v.N.json`:

```json
{
  "subsection_id": "v.N",
  "tasks": [
    {
      "id": "en-v-N-01",
      "solution_overview": "...",
      "tactical_explanations": ["...", "...", "...", "...", "..."]
    }
  ]
}
```

Statements, answer keys, highlights, ids, difficulty, and order remain owned by
the input draft. A polish pass rewrites only `solution_overview` and
`tactical_explanations`.
