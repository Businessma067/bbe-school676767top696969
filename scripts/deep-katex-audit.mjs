/**
 * Exhaustive KaTeX/authoring audit across all practice content.
 * Emits /tmp/deep-katex-audit.json
 */
import katex from 'katex';
import fs from 'fs';
import path from 'path';

function indexOfUnescapedDollar(text, from = 0) {
  for (let i = from; i < text.length; i++) {
    if (text[i] !== '$') continue;
    let bs = 0;
    for (let j = i - 1; j >= 0 && text[j] === '\\'; j--) bs++;
    if (bs % 2 === 0) return i;
  }
  return -1;
}

function extractBacktickStrings(src) {
  const out = [];
  for (let i = 0; i < src.length; i++) {
    if (src[i] !== '`') continue;
    let j = i + 1, buf = '', hasInterp = false;
    while (j < src.length) {
      if (src[j] === '`') break;
      if (src[j] === '\\' && j + 1 < src.length) {
        const n = src[j + 1];
        if (n === 'n') { buf += '\n'; j += 2; continue; }
        if (n === 't') { buf += '\t'; j += 2; continue; }
        if (n === '\\') { buf += '\\'; j += 2; continue; }
        if (n === '$') { buf += '$'; j += 2; continue; }
        if (n === '`') { buf += '`'; j += 2; continue; }
        buf += n; j += 2; continue;
      }
      if (src[j] === '$' && src[j + 1] === '{') {
        hasInterp = true;
        let d = 1; j += 2;
        while (j < src.length && d) {
          if (src[j] === '{') d++;
          else if (src[j] === '}') d--;
          j++;
        }
        buf += ' ';
        continue;
      }
      buf += src[j++];
    }
    if (!hasInterp) out.push(buf);
    i = j;
  }
  return out;
}

function collectStrings(obj, acc = [], path = '') {
  if (typeof obj === 'string') {
    acc.push({ path, text: obj });
    return acc;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => collectStrings(v, acc, `${path}[${i}]`));
    return acc;
  }
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (['id', 'case_id', 'subsection', 'difficulty_level', 'tier', 'answers', 'sort_order', 'true_false', 'placeholder'].includes(k)) continue;
      collectStrings(v, acc, path ? `${path}.${k}` : k);
    }
  }
  return acc;
}

function stripMath(s) {
  return s
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/(?<!\\)\$[^$]*\$/g, ' ');
}

function extractMathSpans(text) {
  const spans = [];
  let i = 0;
  while (i < text.length) {
    if (text.startsWith('$$', i)) {
      const end = text.indexOf('$$', i + 2);
      if (end === -1) {
        spans.push({ type: 'unclosed-display', inner: text.slice(i + 2, i + 120), raw: text.slice(i, i + 80) });
        break;
      }
      spans.push({ type: 'display', inner: text.slice(i + 2, end).trim(), raw: text.slice(i, Math.min(end + 2, i + 100)) });
      i = end + 2;
      continue;
    }
    if (text[i] === '\\' && text[i + 1] === '$') { i += 2; continue; }
    if (text[i] === '$') {
      const end = indexOfUnescapedDollar(text, i + 1);
      if (end === -1) {
        spans.push({ type: 'unclosed-inline', inner: text.slice(i + 1, i + 120), raw: text.slice(i, i + 80) });
        break;
      }
      spans.push({ type: 'inline', inner: text.slice(i + 1, end), raw: text.slice(i, Math.min(end + 1, i + 100)) });
      i = end + 1;
      continue;
    }
    i++;
  }
  return spans;
}

function stripLatexForProseCheck(t) {
  let s = t;
  for (let n = 0; n < 4; n++) {
    const next = s.replace(/\\(?:text|mathrm|operatorname|textit|textbf|mbox|mathsf|mathbf)\s*\{[^{}]*\}/g, ' ');
    if (next === s) break;
    s = next;
  }
  return s.replace(/\\[a-zA-Z]+/g, ' ').replace(/\\[,;:!]/g, ' ');
}

function hasProseWords(s) {
  return /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(stripLatexForProseCheck(s));
}

function tryRender(inner, display = false) {
  try {
    const html = katex.renderToString(inner, { throwOnError: false, displayMode: display, strict: 'ignore' });
    if (html.includes('katex-error')) {
      const m = html.match(/title="([^"]*)"/);
      return { ok: false, err: (m && m[1]) || 'katex-error' };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, err: String(e.message || e).slice(0, 200) };
  }
}

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (['node_modules', '__pycache__', 'economics-theory'].includes(ent.name)) continue;
      walk(p, acc);
    } else if (/\.(json|ts)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const files = walk('src/data').filter(
  (p) =>
    /math-|economics-|how-it-works|english\//.test(p) &&
    !/SCHEMA|math-chapters|custom-mock|routeTree/.test(p),
);

const findings = {
  katexError: [],
  unclosedDollar: [],
  braceDollarLeft: [], // ${...}$
  bareBraceMath: [], // ${math} without closing $
  currencySwallow: [], // $digits … prose … $
  bareProbFraction: [],
  parenSlashOutside: [],
  latexOutsideMath: [],
  proseInMath: [],
  gluedDisplayProse: [],
  oddDollarCount: [],
  doubleEscapedCurrency: [],
  unitsGlued: [],
  fracNoBraces: [],
};

let fields = 0, spans = 0;

for (const file of files) {
  let items = [];
  if (file.endsWith('.json')) {
    let data;
    try { data = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { continue; }
    items = collectStrings(data).map((x) => ({ ...x, file }));
  } else {
    const texts = extractBacktickStrings(fs.readFileSync(file, 'utf8'));
    items = texts.map((t, i) => ({ file, path: `tmpl[${i}]`, text: t }));
  }

  // Also scan raw file for ${ patterns (JSON-escaped)
  const raw = fs.readFileSync(file, 'utf8');
  if (/\$\{/.test(raw) && !/math-chapters/.test(file)) {
    const re = /\$\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
    let m;
    while ((m = re.exec(raw))) {
      const inner = m[1];
      if (/^[a-zA-Z_][a-zA-Z0-9_.]*$/.test(inner.trim())) continue; // JS template
      const after = raw[m.index + m[0].length];
      const before = raw[m.index - 1];
      // ${...}$ wrapped
      if (after === '$' || (raw.startsWith('$$', m.index - 1))) {
        findings.braceDollarLeft.push({
          file,
          sample: m[0].slice(0, 100) + (after === '$' ? '$' : ''),
        });
      } else if (/[=<>≤≥≠\\+\-*/^]|\\le|\\ge|\\frac|x\b/.test(inner)) {
        findings.bareBraceMath.push({ file, sample: m[0].slice(0, 100) });
      }
    }
  }

  for (const { path: loc, text } of items) {
    if (!text) continue;
    fields++;

    // odd unescaped $
    let dollars = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== '$') continue;
      let bs = 0;
      for (let j = i - 1; j >= 0 && text[j] === '\\'; j--) bs++;
      if (bs % 2 === 0) dollars++;
    }
    // count $$ as pairs of 2
    const displayPairs = (text.match(/\$\$/g) || []).length;
    // rough: if odd after removing $$, flag
    const withoutDisplay = text.replace(/\$\$/g, '');
    let inlineDollars = 0;
    for (let i = 0; i < withoutDisplay.length; i++) {
      if (withoutDisplay[i] !== '$') continue;
      let bs = 0;
      for (let j = i - 1; j >= 0 && withoutDisplay[j] === '\\'; j--) bs++;
      if (bs % 2 === 0) inlineDollars++;
    }
    if (inlineDollars % 2 === 1) {
      // might be currency — check
      const sample = text.match(/(?<!\\)\$[^$]{0,60}/);
      findings.oddDollarCount.push({
        file,
        loc,
        sample: (sample && sample[0] || text.slice(0, 80)).replace(/\n/g, '\\n').slice(0, 100),
      });
    }

    // currency swallow: $digits ... english ... $
    {
      const re = /(?<!\\)\$(\d{1,3}(?:,\d{3})*(?:\.\d+)?)([^$]{1,120}?)(?<!\\)\$/g;
      let m;
      while ((m = re.exec(text))) {
        const between = m[1] + m[2];
        if (/[A-Za-z]{3,}/.test(m[2]) && !/^[\d,.]+$/.test(between.trim())) {
          // if between looks like math (has = etc and short) skip
          if (m[2].length < 8 && /[=<>]/.test(m[2])) continue;
          findings.currencySwallow.push({
            file,
            loc,
            sample: m[0].replace(/\n/g, '\\n').slice(0, 120),
          });
        }
      }
    }

    // bare prob fractions outside math
    {
      const stripped = stripMath(text);
      const re = /\b(equals|is|of)\s+(exactly\s+)?(\d+)\s*\/\s*(\d+)\b/gi;
      let m;
      while ((m = re.exec(stripped))) {
        findings.bareProbFraction.push({
          file,
          loc,
          sample: m[0],
        });
      }
      const re2 = /\(([A-Za-z0-9.\\+\-]+)\s*\/\s*([A-Za-z0-9.\\+\-]+)\)/g;
      while ((m = re2.exec(stripped))) {
        // skip difficulty 4/5 style already stripped from fields
        if (/^\d+$/.test(m[1]) && /^\d+$/.test(m[2])) {
          findings.parenSlashOutside.push({
            file,
            loc,
            sample: m[0],
            ctx: stripped.slice(Math.max(0, m.index - 30), m.index + 40).replace(/\n/g, ' '),
          });
        }
      }
    }

    // latex outside math
    {
      const stripped = stripMath(text);
      if (/\\(?:frac|dfrac|cdot|times|leq|geq|le|ge|neq|approx|binom|sqrt|left|right|mid|cup|cap|infty|mathrm|text)\b/.test(stripped)) {
        const m = stripped.match(/\\(?:frac|dfrac|cdot|times|leq|geq|le|ge|neq|approx|binom|sqrt|left|right|mid|cup|cap|infty|mathrm|text)\b/);
        findings.latexOutsideMath.push({
          file,
          loc,
          sample: m[0],
          ctx: stripped.slice(Math.max(0, stripped.indexOf(m[0]) - 20), stripped.indexOf(m[0]) + 40).replace(/\n/g, ' '),
        });
      }
    }

    // glued display prose
    if (/\$\$\s*[\(\[][^$]*?,\s*[A-Za-z][^$]*?\$\$/.test(text)) {
      const m = text.match(/\$\$\s*[\(\[][^$]*?,\s*[A-Za-z][^$]*?\$\$/);
      findings.gluedDisplayProse.push({
        file,
        loc,
        sample: m[0].replace(/\n/g, '\\n').slice(0, 120),
      });
    }

    // double-escaped currency in RUNTIME text (\\\\$ means two backslashes before $)
    if (/\\\\\$\d/.test(text)) {
      findings.doubleEscapedCurrency.push({
        file,
        loc,
        sample: text.match(/\\\\\$\d[\d,.]*/)?.[0],
      });
    }

    // units glued $362g$
    if (/\$\d+(?:\.\d+)?(?:g|kg|mm|cm|m|km|ml|L)\$/.test(text)) {
      const m = text.match(/\$\d+(?:\.\d+)?(?:g|kg|mm|cm|m|km|ml|L)\$/);
      findings.unitsGlued.push({ file, loc, sample: m[0] });
    }

    // math spans render
    for (const span of extractMathSpans(text)) {
      spans++;
      if (span.type.startsWith('unclosed')) {
        const cur = /^\$\d/.test(span.raw);
        findings.unclosedDollar.push({
          file,
          loc,
          currencyLike: cur,
          sample: span.raw.replace(/\n/g, '\\n').slice(0, 100),
        });
        continue;
      }
      // prose in math
      if (hasProseWords(span.inner)) {
        // skip currency-like starting with digits+comma thousands that swallowed — already currencySwallow
        if (!/^\d{1,3}(?:,\d{3})+/.test(span.inner.trim())) {
          findings.proseInMath.push({
            file,
            loc,
            type: span.type,
            sample: span.inner.replace(/\n/g, ' ').slice(0, 120),
          });
        }
      }
      if (/\\frac\s+[^{]/.test(span.inner)) {
        findings.fracNoBraces.push({ file, loc, sample: span.raw.slice(0, 80) });
      }
      const r = tryRender(span.inner, span.type === 'display');
      if (!r.ok) {
        findings.katexError.push({
          file,
          loc,
          err: r.err,
          sample: span.raw.replace(/\n/g, '\\n').slice(0, 140),
          inner: span.inner.slice(0, 140),
        });
      }
    }
  }
}

const summary = {};
for (const [k, v] of Object.entries(findings)) {
  summary[k] = v.length;
}

const out = {
  files: files.length,
  fields,
  spans,
  summary,
  findings: Object.fromEntries(
    Object.entries(findings).map(([k, v]) => [k, v.slice(0, 40)]),
  ),
};
fs.writeFileSync('/tmp/deep-katex-audit.json', JSON.stringify({ ...out, findings }, null, 2));
console.log(JSON.stringify({ files: out.files, fields, spans, summary }, null, 2));
console.log('--- top samples ---');
for (const [k, v] of Object.entries(findings)) {
  if (!v.length) continue;
  console.log(`\n## ${k} (${v.length})`);
  for (const e of v.slice(0, 8)) {
    console.log(' ', (e.file || '').split('/').pop(), e.loc || '', '|', (e.sample || e.inner || e.err || '').toString().slice(0, 110));
  }
}
