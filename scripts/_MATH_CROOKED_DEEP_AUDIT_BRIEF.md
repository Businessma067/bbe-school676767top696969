# Deep crooked-math audit (deeper pass)

## Scope
All `src/data/math*.json` and `math*.ts` explanation fields:
`solution_overview`, `tactical_explanations[*]`, letter explanations.

## What “crooked” means (same family as ε = … / = −2)
KaTeX **centers each `$$…$$` (or each aligned line) separately**, so short
continuation tails float and look crooked.

## Detection layers

### Layer A — true screenshot-class
| Reason | Meaning |
|--------|---------|
| `aligned_short_tail` | `aligned` ends with short `&= number` / tiny RHS |
| `nested_frac_display` | nested `\dfrac{-\frac…}` / `\frac{\frac}{\frac}` |
| `orphan_eq_display` / `adjacent_eq_continuation` | `$$= …$$` without LHS |

### Layer B — densify cascades (deeper)
| Reason | Meaning |
|--------|---------|
| `eq_step_cascade` | ≥3 consecutive single-eq displays (often with short results) |
| `eq_step_pair` | 2 related single-eq displays |
| FOC densify | `F'(x)=expr` then `F'(x)=0` then `x=n` as separate blocks |

### Layer C — noise / mild
Lone intentional micros (`$$Q=20$$` alone), long pedagogical probability
expansions, mild algebraic two-line `aligned`.

## Snapshot results (this branch)
See:
- `scripts/_MATH_CROOKED_DEEP_V2_QUEUE.md` — cascade-aware full queue
- `scripts/_MATH_CROOKED_DEEP_FOC.md` — FOC densify priority (Ch11 family)
- `scripts/_MATH_CROOKED_DEEP_TIERS.md` — true vs deep tiers

Approximate counts from v2 scan:
- ~1165 flagged tasks with any cascade/pair signal
- ~983 hard (`eq_step_cascade` / true crooked)
- FOC densify priority in Ch11 exam: 31 tasks

## Remediation done on this branch
1. Fixed remaining true `aligned_short_tail`: **MATH 11.115**
2. Strict FOC collapse (`scripts/_collapse_foc_cascades.py`) on Ch11 exam FOC queue
   — only symbolic `F'(var)=…` / `=0` / assigns (no point-evaluation arithmetic)

## Rewrite rule (unchanged)
Prefer one line: `LHS = mid = 0 \implies var = n`
No short `&= number` tails; no nested `\dfrac{-\frac}`.

## Clarification (user)
Do **not** smash ordinary pedagogical step ladders (probability expansions, etc.).
Only rewrite displays that look crooked like the elasticity screenshot:
short `&=` tails, phantom `& expr \\ &= result`, nested fracs, orphan `=`, FOC densify.
