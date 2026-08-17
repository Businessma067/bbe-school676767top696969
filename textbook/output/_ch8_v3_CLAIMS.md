# Ch8 claims: textual questions, not numbers-as-words

Rewrite `statements`, `answer_key`, and matching `tactical_explanations` in the assigned `textbook/output/_ch8_v3/*.json`. Keep `id`, `case_id`, `title`, `context` (except: if the stem spells a number as English words, you may switch that number to `$digits$`; do not rewrite the story), `difficulty_level`, `sort_order`, `solution_overview` unless a Part 3 line names a claim you deleted.

## What the user meant
“Textual” is the **question type**, not writing `sixty-four` instead of `$64$`.

Bad (plug-in / formula dump / numbers as words):
- `Sixty-four hours of watering give eight kilograms.`
- `The material stage is $m(L)=4L^{1/2}$.`
- `Finished output as a function of labour is $g=16L^{3/4}$.`
- `The coefficient of the capacity law is $A=2$.`

Good (property / comparison). Digits stay in math if a threshold is needed:
- `The exponent is smaller than one, so harvest grows more slowly than watering time.`
- `If she doubles the watering time, she doubles the harvest.`
- `An extra hour adds more crop after twenty-seven hours than after eight.`
- `The watering time needed for a given harvest is itself a power function of that harvest.`
- `After $64$ hours the harvest is already more than $7$ kilograms.`  (numeric threshold, not a spelled-out table lookup)

## Mix
About **3 verbal / 2 numeric** per task. Numeric ones should be thresholds or comparisons (`more than`, `under`, `ahead by`), not “the output at this input is exactly this formula/number”. No two tasks in the batch may share the same five-skeleton.

Rotate verbal types: exponent vs 1, doubling vs lockstep, extra unit / marginal, inverse is a power, intercept so not a power, never meets / stays ahead, unit cost falls, change of units, cap binds, composition is a power, average product falls.

## Keys and explanations
Recompute True/False. Sequential style: shared recovery stays in overview; each letter only does this claim’s step, living English plus that math. Header `**A.** → True`. Closer `so the statement is True.` / `False.` `\frac`, no em dash, no `${`.

## Gold: math-8-11
Stem facts unchanged: $Y(8)=4$, $Y(27)=6$ ⇒ $r=1/3$, $A=2$.

Statements:
1. The exponent is smaller than one, so harvest grows more slowly than watering time. (T)
2. If she doubles the watering time, she doubles the harvest. (F)
3. To double the four-kilogram harvest she must more than double the watering time. (T: need $h=64$, which is $8\times 8$, not $2\times 8$)
4. An extra hour adds more crop after twenty-seven hours of watering than it does after eight. (F: $r<1$)
5. The watering time needed for a given harvest is itself a power function of that harvest. (T)

## Gold: math-8-29
Do **not** ask whether the recovered formula equals a displayed formula.

1. Material grows more slowly than labour hours. (T, $r=1/2<1$)
2. Doubling labour hours doubles finished output. (F)
3. Finished output per labour hour falls as labour rises. (T)
4. The labour needed for a given finished count is itself a power of that count. (T)
5. After $81$ labour hours, finished output is already above $400$ units. (T: $g=16\cdot 81^{3/4}=16\cdot 27=432$)

## Output
Overwrite the JSON array. Valid JSON.
