# Merge `$$= continuation$$` leftovers (content pass)

## Bug
Step densify left many chains as separate displays:

```tex
$$
\varepsilon=\dfrac{-\frac12\cdot80}{20}
$$

$$
=-2
$$

KaTeX centers each block → floating `= -2`. Renderer already coalesces some;
this pass rewrites the **data** so every bank is clean at source.

## Autofix already ran
`scripts/_merge_eq_continuations.py` folds adjacent `$$…$$` + `$$=…$$` into
`\begin{aligned}…\end{aligned}`.

## Your job
1. Only edit assigned file(s).
2. `git pull --rebase` on `cursor/math-merge-eq-continuations-6381`.
3. Rescan for remaining real pairs: display block followed (only whitespace) by a display that starts with `=`.
4. Skip if already inside `\begin{aligned}`.
5. Merge leftovers the same way (aligned on `=`). Do not change answer_key, headers, closers, or narrative meaning.
6. Commit + push to `cursor/math-merge-eq-continuations-6381`.

## Self-check
- No remaining orphan `$$=…$$` right after another `$$` in your files.
- `$` / `$$` balanced; `\begin{aligned}` closed.
