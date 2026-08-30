/**
 * Approximate FlashcardMath split + katex render; report katex-error spans.
 * Mirrors key logic from FlashcardMath.tsx
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

function stripLatexForProseCheck(t) {
  let s = t;
  for (let n = 0; n < 4; n++) {
    const next = s.replace(/\\(?:text|mathrm|operatorname|textit|textbf|mbox|mathsf|mathbf)\s*\{[^{}]*\}/g, ' ');
    if (next === s) break;
    s = next;
  }
  return s.replace(/\\[a-zA-Z]+/g, ' ').replace(/\\[,;:!]/g, ' ');
}

function looksLikeMathInner(inner) {
  const t = inner.trim();
  if (!t) return false;
  const forProse = stripLatexForProseCheck(t);
  const hasLatexCmd = /\\[a-zA-Z]+/.test(t);
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(forProse)) return false;
  if (hasLatexCmd) return true;
  if (/^\d{1,3}(?:\\,\d{3})+(?:\.\d+)?$/.test(t)) return true;
  if (/\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|is|are|was|be|if|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i.test(forProse)) return false;
  if (/\s\|\s/.test(t)) return false;
  if (!/[=<>≠≤≥]/.test(t) && /\b(?:Shipment|Invoice|Account|Week|Batch|Season|Client|Fund|Route|Day|Point|Job|Branch|cost|total|mixed|price|rate|fee|balance|units?|kg|litres?|miles?)\b/i.test(forProse)) return false;
  if (/^[A-Za-z]{2,5}$/.test(t)) return true;
  if (/[A-Za-z]{4,}/.test(forProse) && !/[=<>≠≤≥]/.test(t)) return false;
  if (/^[+\-<>≠≤≥=×·]+$/.test(t)) return true;
  if (/[=<>≠≤≥+×·\-/^\\()_|:]/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  if (/^[+\-]?\d+(?:\.\d+)?(?:\s*,\s*[+\-]?\d+(?:\.\d+)?)+$/.test(t)) return true;
  if (/^\{[^{}]+\}$/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  if (/^[A-Za-z](?:\s*,\s*[A-Za-z])+$/.test(t)) return true;
  if (/^[[(]\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*[\])]$/.test(t)) return true;
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true;
  if (/^(?:\\[A-Za-z]+|[A-Za-z])(?:_[A-Za-z0-9]+)?$/.test(t)) return true;
  if (t.length <= 48 && /[a-zA-Z]/.test(t) && /\d/.test(t) && /^[+\-\d.a-zA-Z\s×·*^/()]+$/.test(t)) return true;
  return false;
}

const CURRENCY_RE = /\$\d+(?:(?:\\,|,)\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?!\\,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])/y;

function normalizeBrokenMathMarkup(input) {
  let s = input;

  // `$…latex…\$` mistaken closer
  {
    let out = "";
    let i = 0;
    while (i < s.length) {
      if (s[i] === "\\" && s[i + 1] === "$") {
        out += "\\$";
        i += 2;
        continue;
      }
      if (s[i] === "$" && !s.startsWith("$$", i)) {
        let j = i + 1;
        let closer = -1;
        let closerLen = 1;
        while (j < s.length) {
          if (s.startsWith("$$", j)) break;
          if (s[j] === "\\" && s[j + 1] === "$") {
            if (/\d/.test(s[j + 2] || "")) {
              j += 2;
              continue;
            }
            const inner = s.slice(i + 1, j);
            if (/\\[a-zA-Z]/.test(inner) || /[=<>≠≤≥^_]/.test(inner)) {
              closer = j;
              closerLen = 2;
              break;
            }
            j += 2;
            continue;
          }
          if (s[j] === "$") {
            closer = j;
            closerLen = 1;
            break;
          }
          j++;
        }
        if (closer !== -1) {
          out += `$${s.slice(i + 1, closer)}$`;
          i = closer + closerLen;
          continue;
        }
      }
      out += s[i];
      i++;
    }
    s = out;
  }

  s = s.replace(/\\\$([^$]*?)\\\$/g, (_m, inner) => {
    const t = inner.trim();
    if (!t) return _m;
    if (/\\[a-zA-Z]/.test(t) || /[=<>≠≤≥^_{}+*/\\]/.test(t) || /[A-Za-z]\s*\(/.test(t)) return `$${inner}$`;
    return _m;
  });
  s = s.replace(
    /\$(\d+(?:\.\d+)?)(g|kg|mm|cm)\$/g,
    (_m, num, unit) => `$${num}\\,\\mathrm{${unit}}$`,
  );
  s = s.replace(/(?<!\$)\$(\d{1,3}(?:\\,\d{3})+)(?=\s+[A-Za-z])/g, (_, nums) => `$${nums.replace(/\\,/g, ',')}`);
  return s;
}

function hasProseWords(s) {
  return /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(stripLatexForProseCheck(s));
}

function sanitizeMathSource(src) {
  const raw = src.trim();
  if (!raw) return [];
  if (!hasProseWords(raw)) return [{ kind: 'math', value: raw }];
  const noted = raw.match(/^(.+?=.+?)\s*(\([\s\S]*\))\s*$/);
  if (noted) {
    const eq = noted[1].trim();
    const note = noted[2].trim();
    if (!hasProseWords(eq)) return [{ kind: 'math', value: eq }, { kind: 'text', value: ` ${note}` }];
  }
  const leadEq = raw.match(/^([A-Za-z0-9.\s+\-*/^=()]+?=\s*[+\-]?\d+(?:\.\d+)?)(?=\s|\)|$)/);
  if (leadEq && !hasProseWords(leadEq[1])) {
    const rest = raw.slice(leadEq[1].length).trim();
    return rest ? [{ kind: 'math', value: leadEq[1].trim() }, { kind: 'text', value: ` ${rest}` }] : [{ kind: 'math', value: leadEq[1].trim() }];
  }
  return [{ kind: 'text', value: raw }];
}

function splitMath(input) {
  const text = normalizeBrokenMathMarkup(
    input.replace(/\\\(/g, '$').replace(/\\\)/g, '$').replace(/\\\[/g, '$$').replace(/\\\]/g, '$$'),
  );
  const parts = [];
  let i = 0;
  let buf = '';
  const flush = () => { if (buf) { parts.push({ type: 'text', value: buf }); buf = ''; } };
  while (i < text.length) {
    if (text.startsWith('$$', i)) {
      const end = text.indexOf('$$', i + 2);
      if (end !== -1) {
        flush();
        parts.push({ type: 'display', value: text.slice(i + 2, end).trim() });
        i = end + 2;
        continue;
      }
    }
    if (text[i] === '\\' && text[i + 1] === '$') { buf += '\\$'; i += 2; continue; }
    if (text[i] === '$') {
      CURRENCY_RE.lastIndex = i;
      const cur = CURRENCY_RE.exec(text);
      if (cur && cur.index === i) {
        const afterMath = indexOfUnescapedDollar(text, i + cur[0].length);
        const between = afterMath === -1 ? '' : text.slice(i + 1, afterMath);
        if (!(afterMath !== -1 && looksLikeMathInner(between))) {
          buf += cur[0].replace(/\\,/g, ',');
          i += cur[0].length;
          continue;
        }
      }
      const end = indexOfUnescapedDollar(text, i + 1);
      if (end !== -1) {
        const inner = text.slice(i + 1, end);
        if (looksLikeMathInner(inner)) {
          flush();
          parts.push({ type: 'inline', value: inner.trim() });
          i = end + 1;
          continue;
        }
      }
    }
    buf += text[i];
    i += 1;
  }
  flush();
  if (parts.length === 0) parts.push({ type: 'text', value: text });
  return parts;
}

function renderErrors(text) {
  const errors = [];
  for (const part of splitMath(text)) {
    if (part.type === 'text') continue;
    const chunks = sanitizeMathSource(part.value);
    for (const chunk of chunks) {
      if (chunk.kind !== 'math') continue;
      try {
        const html = katex.renderToString(chunk.value, {
          throwOnError: false,
          displayMode: part.type === 'display',
          strict: 'ignore',
        });
        if (html.includes('katex-error')) {
          const m = html.match(/title="([^"]*)"/);
          errors.push({ inner: chunk.value.slice(0, 120), err: (m && m[1]) || 'error' });
        }
      } catch (e) {
        errors.push({ inner: chunk.value.slice(0, 120), err: String(e.message || e).slice(0, 120) });
      }
    }
  }
  return errors;
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
        if (n === '\\') { buf += '\\'; j += 2; continue; }
        if (n === '$') { buf += '$'; j += 2; continue; }
        if (n === '`') { buf += '`'; j += 2; continue; }
        buf += n; j += 2; continue;
      }
      if (src[j] === '$' && src[j + 1] === '{') {
        hasInterp = true;
        let d = 1; j += 2;
        while (j < src.length && d) { if (src[j] === '{') d++; else if (src[j] === '}') d--; j++; }
        buf += ' '; continue;
      }
      buf += src[j++];
    }
    if (!hasInterp) out.push(buf);
    i = j;
  }
  return out;
}

function collect(obj, acc = []) {
  if (typeof obj === 'string') { acc.push(obj); return acc; }
  if (Array.isArray(obj)) { for (const v of obj) collect(v, acc); return acc; }
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (['id', 'case_id', 'answers', 'sort_order'].includes(k)) continue;
      collect(v, acc);
    }
  }
  return acc;
}

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (['node_modules', '__pycache__'].includes(ent.name)) continue;
      walk(p, acc);
    } else if (/\.(json|ts)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const allErrors = [];
const files = walk('src/data').filter((p) => /math-|economics-|how-it-works|english\//.test(p) && !/SCHEMA|math-chapters/.test(p));

for (const file of files) {
  let texts = [];
  if (file.endsWith('.json')) {
    try { texts = collect(JSON.parse(fs.readFileSync(file, 'utf8'))); } catch { continue; }
  } else {
    texts = extractBacktickStrings(fs.readFileSync(file, 'utf8'));
  }
  for (const text of texts) {
    if (!text || !text.includes('$')) continue;
    for (const e of renderErrors(text)) {
      allErrors.push({ file, ...e });
    }
  }
}

const byFile = {};
for (const e of allErrors) byFile[e.file] = (byFile[e.file] || 0) + 1;
console.log(JSON.stringify({ total: allErrors.length, byFile, sample: allErrors.slice(0, 60) }, null, 2));
fs.writeFileSync('/tmp/flashcard-render-errors.json', JSON.stringify(allErrors, null, 2));
