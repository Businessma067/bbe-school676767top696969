# Chapter 4 bank generation — style lock (mandatory)

Follow `scripts/FC-STYLE-LOCK.md` exactly.

## Hard rules from user history
- Context MUST end with: `Evaluate the following economic assertions:`
- Academic Title Case titles
- One formal sentence per statement; TRUE — / FALSE — explanations
- Book theory only for THAT subsection; use textbook wording
- NO “the book”, “according to the book”, “(alt…)”
- NO narrative proper names: Tina, Steve, AT&S, T&S Computer Services, named board directors, specific stock-exchange listing anecdotes as exam-name quizzes
- Neutral scenes only (~25% of contexts): “a neighbourhood bakery”, “two consultants”, “a manufacturing corporation”, etc.
- Zero near-duplicates within a case (no synonym twins)
- Subtle traps on 5/5; still use book concepts — not trick wording alone

## Difficulty
- Use EXACT `difficulty_level` from the slot plan
- 5/5 = nuanced distinctions (e.g. post-issue price rises ≠ issuer finance; limited vs general partner; capital vs revenue expenditure matching; high gearing)
- 2–4/5 = clear core definitions with one or two careful traps

## Answer keys
- Use EXACT `answer_key` boolean array from the slot (do not put all TRUEs first)
- Explanations must match each T/F

## Output format
Write a JSON array of exactly 50 case objects to the assigned file path. Each:
```
{
  "subsection": "4.X",
  "case_id": "CASE 4.X.NN",
  "title": "...",
  "context": "... Evaluate the following economic assertions:",
  "statements": ["...", "...", "...", "...", "..."],
  "answer_key": [bool, bool, bool, bool, bool],
  "tactical_explanations": ["TRUE — ...", ...],
  "difficulty_level": "N/5",
  "tier": "full"
}
```
