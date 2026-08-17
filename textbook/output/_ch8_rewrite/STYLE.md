# Chapter 8 tactical rewrite — 13.18 style

Read `scripts/bbe-tactical-explanations-memory.md` and the five explanations of `MATH 13.18` in `src/data/math-cases-ch13-binomial.json` before writing.

## What you change

Only `tactical_explanations` (five strings A–E). Keep `id`, `context`, `statements`, `answer_key`, `difficulty_level`, `solution_overview` untouched. Do not invent new math or flip a verdict.

## Header (live Chapter 8 / 13.18 convention)

```
**A.** → True
```

or `False`. Letter matches position. Verdict matches `answer_key`. Then a blank line, then the body. Close with a sentence that ends `so the statement is True.` or `so the statement is False.`

## 13.18 rhythm

1. First sentence names the idea **this letter actually needs** (substitution, domain, limit, scale factor, recovered coefficient, comparison). Do not start every letter of a task with the same lecture.
2. General formula in its own `$$...$$` only when it is not already obvious from the previous sentence.
3. Substitute the concrete numbers in a **separate** display.
4. One algebraic or arithmetic step per display. Do not cram a whole chain into one `\qquad` line unless it is a single evaluation like `5\cdot 2^{3}=5\cdot 8=40`.
5. Compare with the claimed number / inequality.
6. Verdict sentence.

Look at 13.18 A (short compute), B (short conceptual, no displays), C (long because the work is a long sum), D and E (medium formula + two substitutions). Copy that **length-tracks-work** pattern, not C's length.

## Length (user override — this is the point of the rewrite)

- Length tracks the work of **this statement**. A direct plug-in stays short. A domain/limit rule stays medium. Recovering a coefficient, then evaluating, then comparing a trap figure gets more steps.
- **Do not pad.** Strip every `Extended context check`, every pasted `**Part 1:` / `**Part 2:` / `**Part 3:` overview, every "second independent check" that only repeats the same arithmetic, every "neighbouring sides agree" flourish that the claim does not need.
- A second route is allowed **only** when it is the actual content of the claim (scale-factor statements) or when it is the shortest way to show why a false figure appeared.
- Within one task the five letters **must not** be similar in length. Easy letters should look like 13.18 B/A. Hard letters should look like 13.18 D or C. Do not aim for a 3× ratio by stuffing filler into the longest one.
- Do not copy the same paragraph across letters. If letter A already recovered `A=8`, letter B that needs `A` must still recover it (standalone rule) but in a **different** sentence shape, not a clone.

## Voice

Calm tutor English. Short and medium sentences. English outside math; math inside `$...$` / `$$...$$`. Never put English words inside math (`\text{mass}` is ok for a short tag; `\text{the mass of the block}` is not). No em dashes. No `**Watch.**` / `**Trap:**` / `**Why it fails.**`. No "It is important to note", "In conclusion", "robust". No `From Part A` / `as shown above` / `the solution gives`. No `${` anywhere. Division as `\frac{a}{b}`, never a slash, except inside `\text{}` units.

## Difficulty

`1/5` and `2/5` (especially tasks 1–10): keep explanations lean. One idea, the displays that prove it, the verdict. `3/5`–`5/5`: keep every real recovery step, still no overview dump.

## Output

Write JSON only:

```json
{
  "math-8-N": ["A body", "B body", "C body", "D body", "E body"]
}
```

Each value is the full explanation string including the `**A.** → True` header. Use real newlines inside the JSON strings. LaTeX in the parsed string uses a single backslash (`\frac`, `\qquad`, `\approx`). JSON will escape those as `\\frac`, which is correct.

Recompute every number from the context. If the old explanation and the overview disagree, trust arithmetic on the given rule.
