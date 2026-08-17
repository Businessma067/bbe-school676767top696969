/** Template-literal source <-> runtime string value helpers for the Ch11 bank. */
export const toValue = (source) =>
  source.replace(/\\(`|\$\{|\\)/g, (_, ch) => (ch === "\\" ? "\\" : ch));

export const toSource = (value) =>
  value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

export const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);

/** Math spans the practice renderer refuses to hand to KaTeX (value form input). */
export function blockedSpans(value) {
  const out = [];
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = displayRe.exec(value))) {
    if (hasProseWords(m[1])) out.push(m[1].trim());
  }
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  while ((m = inlineRe.exec(value))) {
    if (hasProseWords(m[1]) && /\\(?:text|mathrm|operatorname)\{/.test(m[1])) out.push(m[1].trim());
  }
  return out;
}

export function splitTasks(src) {
  const marker = /\n    id: `(math-11-\d+)`,/g;
  const starts = [];
  let m;
  while ((m = marker.exec(src))) starts.push({ id: m[1], at: m.index });
  return starts.map((s, i) => ({
    id: s.id,
    body: src.slice(s.at, i + 1 < starts.length ? starts[i + 1].at : src.length),
  }));
}

export const listField = (body, name) => {
  const block = body.match(new RegExp(`${name}: \\[([\\s\\S]*?)\\n    \\],`))?.[1] ?? "";
  return [...block.matchAll(/`((?:\\`|[^`])*)`/g)].map((x) => x[1]);
};

export const scalarField = (body, name) =>
  body.match(new RegExp(`\\n    ${name}: \`((?:\\\\\`|[^\`])*)\``))?.[1] ?? null;
