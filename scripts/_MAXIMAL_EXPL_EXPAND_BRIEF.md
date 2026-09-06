# Maximal explanation expansion — ALL letters, NO exceptions

## User complaint
Explanations still jump: one compressed display, then the answer set. Example (forbidden):

```
$$\frac{3x+2}{x-1}-2=\frac{x+4}{x-1}>0$$
gives $x<-4$ or $x>1$ (pole excluded). Therefore True.
```

## Required style (every letter)
1. Header `**A.** → True/False` matching `answer_key`
2. One calm setup sentence
3. **Every algebraic step in its own `$$...$$`** (common denominator, expand, factor, critical points, sign chart / case split, compare to claim)
4. Short prose between steps only when needed
5. Closer `So the statement is True.` / `False.`
6. **Do NOT** add QED / “arithmetic already displayed…”
7. **Do NOT** change statements or answer_key
8. **Do NOT** delete useful teaching sentences — only expand math
9. No length floors — length follows the work, but **never** skip multi-step algebra

## Scope
Rewrite **every** `tactical_explanations[i]` in your assigned files. No exceptions for “already ok” unless it already has full stepped algebra (common denom / critical points / sign chart or equivalent). When unsure, expand.

## Deliverable
Overwrite explanations in place, self-check headers/keys/`$$` balance, commit + push to the working branch with a clear message.
