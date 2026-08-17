/** Source <-> value helpers for the three string literal styles used by the banks. */

export const templateToValue = (source) =>
  source.replace(/\\(`|\$\{|\\)/g, (_, ch) => (ch === "\\" ? "\\" : ch));

export const templateToSource = (value) =>
  value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

export const doubleToValue = (source) => JSON.parse(`"${source}"`);

export const doubleToSource = (value) => JSON.stringify(value).slice(1, -1);

export const singleToValue = (source) =>
  JSON.parse(`"${source.replace(/\\'/g, "'").replace(/"/g, '\\"')}"`);

export const singleToSource = (value) =>
  JSON.stringify(value)
    .slice(1, -1)
    .replace(/\\"/g, '"')
    .replace(/'/g, "\\'");

export const STYLES = {
  template: { open: "`", toValue: templateToValue, toSource: templateToSource },
  double: { open: '"', toValue: doubleToValue, toSource: doubleToSource },
  single: { open: "'", toValue: singleToValue, toSource: singleToSource },
};

/** Yields { style, source, value, index } for every string literal in the file. */
export function* literals(src, { includeTemplates = true } = {}) {
  const patterns = [
    includeTemplates ? { style: "template", re: /`((?:\\[\s\S]|[^`\\])*)`/g } : null,
    { style: "double", re: /"((?:\\.|[^"\\\n])*)"/g },
    { style: "single", re: /'((?:\\.|[^'\\\n])*)'/g },
  ].filter(Boolean);

  for (const { style, re } of patterns) {
    let m;
    re.lastIndex = 0;
    while ((m = re.exec(src))) {
      let value;
      try {
        value = STYLES[style].toValue(m[1]);
      } catch {
        continue;
      }
      yield { style, source: m[1], value, index: m.index };
    }
  }
}
