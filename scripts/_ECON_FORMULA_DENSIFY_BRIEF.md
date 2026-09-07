# Economics: densify over-split formula displays

## User complaint
Numeric explanations look like one word/token per line — each tiny value in its own `$$…$$` (CA=276, then Inventory=119, then =157, …). Avoid that vertical stretch. Do **not** crush everything into one opaque sentence, but **merge related micro-steps**.

## Bad (screenshot pattern)
```
Plug in the table figures — one step per display:

$$
CA = 276
$$

$$
Inventory = 119
$$

$$
CA - Inventory = 276 - 119
$$

$$
= 157
$$

$$
CL = 132
$$

$$
\frac{157}{132}
$$
```

## Good (readable, denser)
```
TRUE — Quick ratio = (current assets − inventory) ÷ current liabilities.

From the extract: CA = 276, inventory = 119, CL = 132.

$$
CA - Inventory = 276 - 119 = 157
$$

$$
\text{Quick ratio} = \frac{157}{132} \approx 1.19
$$

Compare to the claim’s hurdle.

So the statement is True.
```

## Density rules
- Prefer **2–4** `$$` displays for a typical ratio/% letter (not 6–12)
- Put named inputs in **one prose sentence** when they are just lookups
- A single `$$` may contain a short chain like `276 - 119 = 157` or `\frac{157}{132} \approx 1.19`
- Keep the definition formula separate when useful: `\text{Quick ratio} = \frac{CA - Inv}{CL}`
- Still end with `So the statement is True/False.` and keep `TRUE —` / `FALSE —`
- No robotic “one step per display” filler lines

## Scope
Unlocked only: first `floor(n*0.35)` cases. Process **sequentially** case-by-case, A→E. Rewrite every letter that has `$$` or over-split arithmetic. Non-formula letters: leave unless clearly broken.

Files: economics-cases-ch2…ch6-subtopics.json

## Branch
`cursor/econ-formula-densify-6381`
