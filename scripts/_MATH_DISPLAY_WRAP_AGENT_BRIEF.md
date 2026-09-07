# Math display-wrap leftover pass

## Bug
KaTeX centers each `$$...$$` separately. When a previous densify pass split one logical equation across two displays like:

```tex
$$
= 70,\qquad C'_{+}(25)
$$

$$
= 45
$$
```

or

```tex
$$
AC(x)=...,\qquad AC'(x)
$$

$$
= 1-...
$$
```

the page shows a strange wrap (`= 70,` left, `C'_{+}(25)` right, `= 45` alone below).

An autofix (`scripts/_fix_math_display_wraps.py`) already merged **361** of these.

## Your job
1. Only edit the data file(s) assigned to you.
2. Search every `solution_overview`, `context`, and `tactical_explanations` entry for remaining **broken** adjacent displays:
   - A block ends with `,\\qquad LHS` or `\\qquad LHS` where LHS has **no** `=` (and is not a domain like `(x>0)`).
   - The next `$$` starts with `=`.
   - Or a block ends with `\\implies x` / `\\implies Q` and the next starts with `=`.
   - Or a single `$$` still contains `,\\qquad Something(` without completing `Something(...)=...` on the same block.
3. Fix by merging into complete equation(s) on one line (or two complete lines). Prefer:

```tex
$$
C'_{-}(25)=2\cdot25+20=70,\qquad C'_{+}(25)=45
$$
```

Do **not** merge intentional step chains that are already complete each (`LHS=...` then separate `= number` continuation is OK if there is no orphan LHS on the previous line).

4. Do **not** change answer_key, statements, True/False headers/closers, or narrative meaning.
5. Keep `$` / `$$` balanced.
6. Commit and push to `cursor/math-display-wrap-fix-6381` (pull --rebase if needed).

## Self-check
- No orphan `\\qquad LHS` followed by `$$=...$$` left in your files.
- Spot-check 3 fixed overviews render as complete equations.
