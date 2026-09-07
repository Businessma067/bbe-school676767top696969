# Economics: maximal explanation deepen (all chapters)

## User ask
Apply the same logic as the math deepen pass to **all economics** banks: write explanations **maximally expanded in thought**, sequentially one task at a time. Prefer clear prose (“просто со словами”); add **numbers / arithmetic in separate steps** wherever the claim needs calculation. **No length floors or medians** — length follows the reasoning. When unsure, expand.

## Files (visit every task, `case_id` ascending)
1. `src/data/economics-cases-ch2-subtopics.json`
2. `src/data/economics-cases-ch3-subtopics.json`
3. `src/data/economics-cases-ch4-subtopics.json` (skip `economics-cases-ch4-pilot.json` unless it is the only source for a case)
4. `src/data/economics-cases-ch5-subtopics.json`
5. `src/data/economics-cases-ch6-subtopics.json`

## How to work (mandatory)
Process **one task at a time**. For each task:

1. Read `context` + all 5 `statements` + `answer_key` (+ chart/table data in context if any).
2. For letters **A→E** in order, rewrite `tactical_explanations[i]`:
   - Keep truth value obvious up front: `TRUE —` / `FALSE —` matching `answer_key[i]`
   - Teach the concept with calm, specific prose tied to **this** stem (not a generic template)
   - If any figure, ratio, %, identity, or comparison is needed: show each arithmetic / accounting step clearly (use `$$…$$` when helpful; otherwise plain stepped lines)
   - Closer: `The statement is true.` / `The statement is false.`
   - **Delete** boilerplate filler (“A student who overlooked…”, “matched the topic to…”, copy-paste of the full stem)
   - Do **not** change `statements`, `answer_key`, `context`, or ids
3. **Audit that task** before moving on (header/key match, closer present, no jump from claim → verdict without reasons).
4. Only then the next task.

Commit in batches of ~15–25 tasks. Push to `cursor/econ-maximal-expl-deepen-6381` (pull --rebase first). No force-push.

## Forbidden
- One-sentence “TRUE — [buzzword]. The statement is true.”
- Replacing reasoning with a length quota
- Inventing numbers not in the stem/context
- Changing keys or statements

## Done when
Every task in your assigned chapter file(s) has been visited sequentially A→E and audited.
