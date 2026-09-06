# Chapter 10 hard exam rewrite — brief

## Goal
Rewrite ALL Chapter 10 tasks **from scratch**. Every statement must be exam/olympiad-hard for exponential & logarithmic functions. Then write matching teacher explanations in **Ch7/Ch9 voice**.

## Forbidden (auto-reject)
- Anything readable off a graph/table without calculation (“is the graph a straight line?”, “is it decreasing?”, “it meets the axis at …”, “the asymptote is visible”)
- Trivial identities: $\ln e=1$, $e^{\ln a}=a$, $kv=k\cdot v$, $\log(ab)=\log a+\log b$ stated alone
- One-step “$\log_2 8=3$” style
- Padding / length floors / median targets — **length follows the claim only**

## Required difficulty
Each of the 5 statements must force real work: multi-step equation, change of base + algebra, recover force from table then compare thresholds, invert nested logs/exps, solve for crossing times, piecewise continuous matching, competing rates, domain+range traps that need solving — not eyeballing.

Mix stem kinds: `graph`, `table`, `symbolic`, `parametric`, `nested`, `hybrid`, `text_dense`, `piecewise`, `applied_letter`, `rebuild`, `domain_tangled`.

Graphs (via `ch10_svg.py`): nice ticks 1,2,5,10 / 1,2,3,4,5; clear strict curves; statements must still need calculation from the figure numbers, never “what colour is the curve”.

## Explanation voice (match Ch7/Ch9)
```
**A.** → True

<calm rule in one sentence>

$$
<general formula>
$$

$$
<substitute>
$$

$$
<compare / conclude>
$$

So the statement is True.
```
- Shared recovery once in `solution_overview`
- Letters use recovered values; do not reprint the whole model
- Header must match `answer_key`; closer must match header
- No length floors

## Task dict schema (returned by builders)
```python
{
  "title": str,
  "context": str,  # ends with "Evaluate each statement. Mark it TRUE or FALSE."
  "statements": [str]*5,
  "answer_key": [bool]*5,
  "tactical_explanations": [str]*5,  # full Ch7 voice, headers A–E
  "solution_overview": str,
  "stem_kind": str,
  # optional:
  "figure": data_uri from ch10_svg,
  "tables_markdown": str,
}
```

## Counts
- 10.1 exponential: 44 → `build_exp_tasks()`, `EXP_COUNT=44`
- 10.2 logarithmic: 49 → `build_log_tasks()`, `LOG_COUNT=49`
- 10.3 mixed exam: 30 → `build_mixed_tasks()`, `MIXED_COUNT=30`

## Math correctness
Double-check every True/False with actual arithmetic. Prefer concrete numbers that work cleanly (`e^{\ln 2}`, powers of 2, $\ln 2$, factors like $800,1024,1/8$) OR fully letter-level with clean algebra.

## Output
Overwrite the assigned builder module completely. Keep the public API (`EXP_COUNT`/`build_exp_tasks` etc.). Run a local self-check: count, 5 letters, header/key match, no forbidden phrases.