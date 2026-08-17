const fs = require('fs');
const path = 'C:/Users/bubli/Projects/bbe-school-fixed/src/data/math-ch11-financial.ts';
const raw = fs.readFileSync(path, 'utf8');
const nl = raw.includes('\r\n') ? '\r\n' : '\n';
let out = raw.replace(/\r\n/g, '\n');

/**
 * Overviews as they must appear inside the .ts template literals
 * (double-backslash LaTeX escapes: \\$, \\%, \\times, etc.).
 * Built via JSON so escaping is unambiguous.
 */
const trimmed = JSON.parse(fs.readFileSync(
  'C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_ch11_trimmed_overviews.json',
  'utf8'
));

function replaceOverview(id, newOv) {
  const marker = `id: \`${id}\``;
  const idPos = out.indexOf(marker);
  if (idPos < 0) throw new Error('missing id ' + id);
  const nextId = out.indexOf('\n  {\n    id: `', idPos + 1);
  const ovMarker = 'solution_overview: `';
  const ovStart = out.indexOf(ovMarker, idPos);
  if (ovStart < 0 || (nextId > 0 && ovStart > nextId)) throw new Error('overview not in task ' + id);
  const contentStart = ovStart + ovMarker.length;
  const after = out.slice(contentStart);
  let end = -1;
  for (let j = 0; j < after.length; j++) {
    if (after[j] === '`' && /^`,\s/.test(after.slice(j, j + 3))) {
      end = j;
      break;
    }
  }
  if (end < 0) throw new Error('no end ' + id);
  const oldOv = after.slice(0, end);
  out = out.slice(0, contentStart) + newOv + out.slice(contentStart + end);
  return { oldLen: oldOv.length, newLen: newOv.length };
}

for (const [id, ov] of Object.entries(trimmed)) {
  // sanity: must contain double-backslash dollars like the rest of the file
  if (ov.includes('\\$') === false && ov.includes('$')) {
    // ok if no dollar amounts
  }
  if (/[^\\]\\\$/.test(' ' + ov) || /(^|[^\\])\$[0-9]/.test(ov)) {
    // soft check only
  }
  const res = replaceOverview(id, ov);
  console.log(id, res.oldLen, '->', res.newLen, 'has \\\\$', ov.includes('\\$'));
}

const final = nl === '\r\n' ? out.replace(/\n/g, '\r\n') : out;
fs.writeFileSync(path, final);

// verify escapes on a sample
const check = fs.readFileSync(path, 'utf8');
const i = check.indexOf('id: `math-11-103`');
const o = check.indexOf('solution_overview: `', i);
const snippet = check.slice(o, o + 120);
console.log('snippet:', JSON.stringify(snippet));
