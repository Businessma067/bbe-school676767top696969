/**
 * Repair common KaTeX / markdown math issues that break render in mock banks.
 * Safe to run on any string field (context, statements, explanations).
 */

const LATEX_CMD_AFTER_DOLLAR =
  /\$((?:dfrac|tfrac|frac|sqrt|sum|prod|int|lim|ln|log|sin|cos|tan|det|max|min|inf|sup|cdot|times|div|pm|mp|neq|leq|geq|le|ge|ne|approx|equiv|sim|simeq|propto|infty|partial|nabla|forall|exists|in|notin|subset|supset|cup|cap|land|lor|neg|lnot|rightarrow|leftarrow|Rightarrow|Leftarrow|Leftrightarrow|leftrightarrow|mapsto|to|gets|quad|qquad|hspace|vspace|left|right|bigl|bigr|Bigl|Bigr|big|Big|text|mathrm|mathbf|mathit|mathsf|operatorname|overline|underline|hat|bar|vec|dot|ddot|tilde|widehat|widetilde|binom|dbinom|choose|begin|end|alpha|beta|gamma|delta|epsilon|varepsilon|zeta|eta|theta|vartheta|iota|kappa|lambda|mu|nu|xi|pi|varpi|rho|varrho|sigma|varsigma|tau|upsilon|phi|varphi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega))\b/g;

/** Pull currency euro out of math mode; normalize broken inequality macros. */
export function scrubKatexContent(input: string): string {
  if (!input) return input;
  let s = input
    .replace(/\\not</g, "\\nless ")
    .replace(/\\not>/g, "\\ngtr ")
    .replace(/\\not\\le/g, "\\nleq ")
    .replace(/\\not\\ge/g, "\\ngeq ")
    // `$€ 21$` / `$€21$` → prose EUR
    .replace(/\$€\s*([0-9]+(?:[.,][0-9]+)?)\$/g, "EUR $1")
    .replace(/\$€\s*([0-9]+)\{,\}([0-9]+)\$/g, "EUR $1,$2")
    .replace(/\$€([0-9]+(?:[.,][0-9]+)?)\$/g, "EUR $1")
    .replace(/€(?=\s*\$)/g, "EUR");

  // `$dfrac{…}` from JS string eating `\d` — restore the backslash.
  s = s.replace(LATEX_CMD_AFTER_DOLLAR, (_m, cmd: string) => `$\\${cmd}`);

  // Euro (and bare ≈) inside $$…$$ display blocks.
  s = s.replace(/\$\$([\s\S]*?)\$\$/g, (_m, body: string) => {
    const fixed = String(body)
      .replace(/€\s*/g, "EUR ")
      .replace(/≈/g, "\\approx ");
    return `$$${fixed}$$`;
  });

  return s.replace(/\n{3,}/g, "\n\n").replace(/[ \t]+\n/g, "\n");
}

export function scrubKatexDeep(value: unknown): unknown {
  if (typeof value === "string") return scrubKatexContent(value);
  if (Array.isArray(value)) return value.map(scrubKatexDeep);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = scrubKatexDeep(v);
    }
    return out;
  }
  return value;
}
