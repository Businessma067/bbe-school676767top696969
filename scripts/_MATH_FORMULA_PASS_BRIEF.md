# Math formula pass (all chapters)

## Two jobs

### A) Remove RULE formulas from explanations (and stems if present)
A **rule formula** is a general textbook identity with almost no concrete numbers from the stem, shown before plugging in — e.g.

```tex
$$i_m=\frac{r}{12}$$
$$FV=P(1+i)^{nt}$$
$$(a+b)^2=a^2+2ab+b^2$$
```

These teach the rule. **Delete those display blocks** (and the one short sentence that only introduces that rule block, if it becomes empty).  
**Keep** the concrete calculation that uses the stem’s numbers/letters.

Do **not** rewrite the pedagogical prose from scratch. Do **not** change `statements`, `answer_key`, titles, figures, or True/False.

### B) Expand compressed calculation chains (step-by-step)
Where the letter jumps from a setup to a final number in one `$$`, split into intermediate displays (one algebraic idea per `$$`), Ch7 style.  
Do **not** invent new narrative, padding, or length floors. Only un-compress the math that is already implied.

## Voice unchanged
Keep headers `**A.** → True/False` and closers `So the statement is True/False.` matching the key.

## Scope per agent
Only the files you are assigned. Commit and push to `cursor/math-audit-rules-steps-6381` (rebase if needed).

## Self-check
- answer_key unchanged
- no new abstract rule-only first displays of the form `i=r/n`, `FV=P(1+i)^{nt}`, etc. without stem digits
- `$` / `$$` balanced
- header/closer still match keys
