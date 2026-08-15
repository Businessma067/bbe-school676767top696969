/** Standalone mirror of FlashcardMath currency/math split rules for audit. */
function indexOfUnescapedDollar(text, from = 0) {
  for (let i = from; i < text.length; i++) {
    if (text[i] !== "$") continue;
    let bs = 0;
    for (let j = i - 1; j >= 0 && text[j] === "\\"; j--) bs++;
    if (bs % 2 === 0) return i;
  }
  return -1;
}

const CURRENCY_RE =
  /\$\d+(?:,\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])/y;

function looksLikeMathInner(inner) {
  const t = inner.trim();
  if (!t) return false;
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(t)) return false;
  if (
    /\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i.test(
      t,
    )
  )
    return false;
  if (t.includes("|")) return false;
  if (/[A-Za-z]{4,}/.test(t) && !/[=<>≠≤≥]/.test(t) && !/\\[a-zA-Z]+/.test(t))
    return false;
  if (/[=<>≠≤≥+×·\-/^\\()_]/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true;
  return false;
}

function splitMath(input) {
  const text = input;
  const parts = [];
  let i = 0;
  let buf = "";
  const flush = () => {
    if (buf) {
      parts.push({ type: "text", value: buf });
      buf = "";
    }
  };
  while (i < text.length) {
    if (text[i] === "\\" && text[i + 1] === "$") {
      buf += "\\$";
      i += 2;
      continue;
    }
    if (text[i] === "$") {
      CURRENCY_RE.lastIndex = i;
      const cur = CURRENCY_RE.exec(text);
      if (cur && cur.index === i) {
        const afterMath = indexOfUnescapedDollar(text, i + cur[0].length);
        const between = afterMath === -1 ? "" : text.slice(i + 1, afterMath);
        if (!(afterMath !== -1 && looksLikeMathInner(between))) {
          buf += cur[0];
          i += cur[0].length;
          continue;
        }
      }
      const end = indexOfUnescapedDollar(text, i + 1);
      if (end !== -1) {
        const inner = text.slice(i + 1, end);
        if (looksLikeMathInner(inner)) {
          flush();
          parts.push({ type: "inline", value: inner.trim() });
          i = end + 1;
          continue;
        }
      }
    }
    buf += text[i];
    i += 1;
  }
  flush();
  return parts;
}

const cases = [
  [
    "OLD",
    "Here $a_0$ = -$8,000 < 0 and $a_1$ = $9,600 > 0, so the condition is satisfied.",
  ],
  [
    "NEW",
    "Here $a_0 = -\\$8{,}000 < 0$ and $a_1 = \\$9{,}600 > 0$, so the condition is satisfied.",
  ],
  [
    "STEPS",
    "Identify $a = \\$8{,}000$ (amount invested) and $b = \\$9{,}600$ (amount returned).",
  ],
  ["GIVEN", "• $S_0 = \\$6{,}000$"],
];

for (const [name, s] of cases) {
  const parts = splitMath(s);
  const glued = parts.some((p) => p.type !== "text" && /\band\b/i.test(p.value));
  console.log("---", name, glued ? "FAIL" : "OK");
  console.log(parts.map((p) => `${p.type}:${JSON.stringify(p.value)}`).join(" | "));
}
