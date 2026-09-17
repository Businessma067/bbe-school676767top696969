/**
 * Repair common KaTeX / markdown math issues that break render in mock banks.
 * Safe to run on any string field (context, statements, explanations).
 */

const LATEX_CMD_AFTER_DOLLAR =
  /\$((?:dfrac|tfrac|frac|sqrt|sum|prod|int|lim|ln|log|sin|cos|tan|det|max|min|inf|sup|cdot|times|div|pm|mp|neq|leq|geq|le|ge|ne|approx|equiv|sim|simeq|propto|infty|partial|nabla|forall|exists|in|notin|subset|supset|cup|cap|land|lor|neg|lnot|rightarrow|leftarrow|Rightarrow|Leftarrow|Leftrightarrow|leftrightarrow|mapsto|to|gets|quad|qquad|hspace|vspace|left|right|bigl|bigr|Bigl|Bigr|big|Big|text|mathrm|mathbf|mathit|mathsf|operatorname|overline|underline|hat|bar|vec|dot|ddot|tilde|widehat|widetilde|binom|dbinom|choose|begin|end|alpha|beta|gamma|delta|epsilon|varepsilon|zeta|eta|theta|vartheta|iota|kappa|lambda|mu|nu|xi|pi|varpi|rho|varrho|sigma|varsigma|tau|upsilon|phi|varphi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega))\b/g;

/**
 * Pull currency euro out of math mode; normalize broken inequality macros;
 * kill USD `\$` (it breaks `$...$` parsing); rewrite bare `$t=0$` time stamps.
 */
export function scrubKatexContent(input: string): string {
  if (!input) return input;
  let s = input
    .replace(/\\not</g, "\\nless ")
    .replace(/\\not>/g, "\\ngtr ")
    .replace(/\\not\\le/g, "\\nleq ")
    .replace(/\\not\\ge/g, "\\ngeq ")
    // Accidental `\,Y_2` / `\Y_2` from JSON (undefined control sequence \Y).
    .replace(/\\Y_/g, "Y_")
    // `$€ 21$` / `$€21$` → prose EUR
    .replace(/\$€\s*([0-9]+(?:[.,][0-9]+)?)\$/g, "EUR $1")
    .replace(/\$€\s*([0-9]+)\{,\}([0-9]+)\$/g, "EUR $1,$2")
    .replace(/\$€([0-9]+(?:[.,][0-9]+)?)\$/g, "EUR $1")
    .replace(/€(?=\s*\$)/g, "EUR");

  // Currency `\$12,345.67` / `\$18.00` breaks `$...$` extractors → prose USD.
  s = s.replace(/\\\$([0-9][0-9,]*(?:\.[0-9]+)?)/g, "USD $1");

  // Nested leftovers like `$K_1 = USD 30,000$` after the pass above.
  s = s.replace(/\$K_1 = USD 30,000\$/g, "$K_1 = 30000$");
  s = s.replace(/\$K_2 = USD 55,000\$/g, "$K_2 = 55000$");
  s = s.replace(/\$K_1 = USD ([0-9,]+)\$/g, (_m, n: string) => `$K_1 = ${n.replace(/,/g, "")}$`);
  s = s.replace(/\$K_2 = USD ([0-9,]+)\$/g, (_m, n: string) => `$K_2 = ${n.replace(/,/g, "")}$`);

  // `$t=0$` / `at $t=0$` → prose (avoids brittle inline stamps in stems/tables).
  s = s.replace(/At \$t\s*=\s*0\$/g, "At time zero");
  s = s.replace(/at \$t\s*=\s*0\$/g, "at time zero");
  s = s.replace(/\$t\s*=\s*0\$/g, "time zero");
  s = s.replace(/(^|\n)at time zero\b/g, "$1At time zero");
  s = s.replace(/\ban USD\b/g, "a USD");

  // English / journalism bare `$20 billion` (odd dollar counts).
  s = s.replace(/(^|[^\\$])\$(\d[\d,]*)\s+(billion|million)\b/g, "$1USD $2 $3");

  // Bare `r = 0.08` outside math only (never inside $$...$$ or $...$).
  {
    const parts: string[] = [];
    const re = /\$\$[\s\S]*?\$\$|\$[^$]+\$/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(s))) {
      const prose = s.slice(last, m.index);
      parts.push(
        prose
          .replace(/,\s*and r = (0\.\d+)/g, ", and $r = $1$")
          .replace(/(^|[^$A-Za-z\\])\br = (0\.\d+)(?!\$)/g, "$1$r = $2$"),
      );
      parts.push(m[0]);
      last = m.index + m[0].length;
    }
    parts.push(
      s
        .slice(last)
        .replace(/,\s*and r = (0\.\d+)/g, ", and $r = $1$")
        .replace(/(^|[^$A-Za-z\\])\br = (0\.\d+)(?!\$)/g, "$1$r = $2$"),
    );
    s = parts.join("");
  }

  // Undo accidental nested dollars inside display: $$\n$r = 0.08$\n$$ → $$r = 0.08$$
  s = s.replace(/\$\$\s*\$([^$]+)\$\s*\$\$/g, (_m, inner: string) => `$$${inner}$$`);

  // `$dfrac{…}` from JS string eating `\d` — restore the backslash.
  s = s.replace(LATEX_CMD_AFTER_DOLLAR, (_m, cmd: string) => `$\\${cmd}`);

  // Euro (and bare ≈) inside $$…$$ display blocks.
  s = s.replace(/\$\$([\s\S]*?)\$\$/g, (_m, body: string) => {
    const fixed = String(body)
      .replace(/€\s*/g, "EUR ")
      .replace(/≈/g, "\\approx ")
      // strip a single nested inline wrap left inside display
      .replace(/^\s*\$([^$]+)\$\s*$/g, "$1");
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
