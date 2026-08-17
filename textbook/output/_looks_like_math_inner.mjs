export function looksLikeMathInner(inner) {
  const t = inner.trim();
  if (!t) return false;

  // Two consecutive English words → narrative prose
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(t)) return false;

  // Glue words mean currency `$8,000 < 0 and $a_1$` must NOT become one math span.
  // Strip LaTeX commands first so `\exists` / `\forall` are not mistaken for English
  // "exists" / "for".
  const withoutCmds = t.replace(/\\[a-zA-Z]+/g, " ");
  if (
    /\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i.test(
      withoutCmds,
    )
  ) {
    return false;
  }

  // Answer lines: Notebook = $3.50 | Pen = $1.80. Absolute values write `|k|` unspaced.
  if (/\s\|\s/.test(t)) return false;

  // Stem-style words with no equation mark → currency mid-sentence
  if (
    !/[=<>≠≤≥]/.test(t) &&
    !/\\[a-zA-Z]+/.test(t) &&
    /\b(?:Shipment|Invoice|Account|Week|Batch|Season|Client|Fund|Route|Day|Point|Job|Branch|cost|total|mixed|price|rate|fee|balance|units?|kg|litres?|miles?)\b/i.test(
      t,
    )
  ) {
    return false;
  }

  // Multi-letter symbol tags: $PDV$, $FV$, $np$, $AB$. Currency always carries digits,
  // so a bare letter token can only come from real math.
  if (/^[A-Za-z]{2,5}$/.test(t)) return true;

  // Any 4+ letter English token without eq/compare (and not a LaTeX command) is prose
  if (/[A-Za-z]{4,}/.test(t) && !/[=<>≠≤≥]/.test(t) && !/\\[a-zA-Z]+/.test(t)) {
    return false;
  }

  // Equations / comparisons / algebra (escaped currency `\$` is fine inside)
  if (/[=<>≠≤≥+×·\-/^\\()_|:]/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  // Number lists / short rosters: $1,2,3,4,5$ or $5,6,7$ (not currency)
  if (/^[+\-]?\d+(?:\.\d+)?(?:\s*,\s*[+\-]?\d+(?:\.\d+)?)+$/.test(t)) return true;
  // Plain set braces without LaTeX commands: ${1,2,3}$ or ${a,b}$
  if (/^\{[^{}]+\}$/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  // Element rosters: $w,x,y,z$ or $m,n$
  if (/^[A-Za-z](?:\s*,\s*[A-Za-z])+$/.test(t)) return true;
  // Intervals: $[5,10]$, $(0,1]$
  if (/^[[(]\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*[\])]$/.test(t)) return true;
  // Bare answers like $360$
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true;
  // Bare math identifiers: $p$, $n$, $k$, $X$, $p_A$, $\lambda$
  if (/^(?:\\[A-Za-z]+|[A-Za-z])(?:_[A-Za-z0-9]+)?$/.test(t)) return true;
  // Short algebraic chunks (3x+2y, 160y)
  if (
    t.length <= 48 &&
    /[a-zA-Z]/.test(t) &&
    /\d/.test(t) &&
    /^[+\-\d.a-zA-Z\s×·*^/()]+$/.test(t)
  ) {
    return true;
  }
  return false;
}

/**
 * Split prose / currency / KaTeX.
 * Currency amounts like `$2,943.20` stay text; real `$x+y=1$` stays math.
 * Never let two currency signs swallow the prose between them as KaTeX.
 */
