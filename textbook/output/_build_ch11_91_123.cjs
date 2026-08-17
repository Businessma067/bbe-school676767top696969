const fs = require('fs');
const path = require('path');

const targets = JSON.parse(fs.readFileSync('textbook/output/_ch11_expand_targets_91_123.json', 'utf8'));

const files = [
  '_body_091_095.txt', '_body_096_100.txt', '_body_101_105.txt',
  '_body_106_110.txt', '_body_111_115.txt', '_body_116_120.txt', '_body_121_123.txt',
];

const bodies = {};
for (const f of files) {
  const raw = fs.readFileSync(path.join('textbook/output', f), 'utf8').replace(/\r\n/g, '\n');
  const parts = raw.split(/^@@@/m).slice(1);
  for (const p of parts) {
    const nl = p.indexOf('\n');
    const key = p.slice(0, nl).trim();
    const body = p.slice(nl + 1).replace(/\s+$/, '');
    if (bodies[key]) throw new Error('duplicate key ' + key);
    bodies[key] = body;
  }
}

const errors = [];
const out = {};
const lengths = [];
let headerMismatch = 0;

function mathBalanced(s) {
  const t = s.replace(/\\\$/g, '@');
  let i = 0;
  while (i < t.length) {
    if (t[i] === '$') {
      if (t[i + 1] === '$') {
        const j = t.indexOf('$$', i + 2);
        if (j < 0) return false;
        if (t.slice(i + 2, j).includes('$')) return false;
        i = j + 2;
      } else {
        const j = t.indexOf('$', i + 1);
        if (j < 0) return false;
        if (t[j + 1] === '$') return false;
        i = j + 1;
      }
    } else {
      i++;
    }
  }
  return true;
}

const banned = [
  [/Trap/i, 'Trap label'],
  [/\bWatch\b/i, 'Watch label'],
  [/\bTip\b/i, 'Tip label'],
  [/from \([A-E]\)/i, 'cross reference'],
  [/from Part [A-E]/i, 'cross reference'],
  [/\bpart \([a-e]\)/i, 'cross reference'],
  [/as (calculated|shown|found|computed) (above|earlier|in Step)/i, 'back reference'],
  [/\bStep \d/i, 'step reference'],
  [/\\\\/, 'double backslash'],
];

for (const taskId of Object.keys(targets)) {
  const task = targets[taskId];
  out[taskId] = {};
  for (const L of Object.keys(task.letters)) {
    const d = task.letters[L];
    const key = taskId + L;
    const body = bodies[key];
    if (!body) { errors.push(key + ': MISSING body'); continue; }

    const header = '**' + L + ') ' + d.statement + '**  (' + d.verdict + ')';
    const currentFirst = (d.current || '').replace(/\r/g, '').split('\n')[0];
    if (currentFirst.trim() !== header.trim()) {
      headerMismatch++;
      errors.push(key + ': HEADER differs from live -> live[' + currentFirst + '] built[' + header + ']');
    }

    const text = header + '\n\n' + body;
    const curLen = (d.current || '').replace(/\r/g, '').length;

    if (text.length < d.min_chars) errors.push(key + ': too short ' + text.length + ' < min ' + d.min_chars);
    if (text.length < curLen) errors.push(key + ': shorter than current ' + text.length + ' < ' + curLen);

    const bodyOnly = body;
    for (const [re, label] of banned) {
      if (re.test(bodyOnly)) errors.push(key + ': banned ' + label);
    }
    const nonAscii = bodyOnly.match(/[^\x00-\x7F]/g);
    if (nonAscii) errors.push(key + ': non-ascii ' + JSON.stringify([...new Set(nonAscii)]));
    if (!mathBalanced(text)) errors.push(key + ': unbalanced math delimiters');

    // verdict word must appear as final judgement
    if (!/statement is (true|false)\.$/.test(bodyOnly.trim())) {
      errors.push(key + ': missing closing verdict sentence');
    } else {
      const said = bodyOnly.trim().match(/statement is (true|false)\.$/)[1];
      if (said !== d.verdict) errors.push(key + ': verdict mismatch says ' + said + ' expected ' + d.verdict);
    }

    out[taskId][L] = text;
    lengths.push({ key, len: text.length, floor: d.min_chars, cur: curLen });
  }
}

const count = lengths.length;
const min = Math.min(...lengths.map(x => x.len));
const max = Math.max(...lengths.map(x => x.len));
const mean = lengths.reduce((s, x) => s + x.len, 0) / count;
const minFloorGap = Math.min(...lengths.map(x => x.len - x.floor));
const meanFloor = lengths.reduce((s, x) => s + x.floor, 0) / count;
const meanCur = lengths.reduce((s, x) => s + x.cur, 0) / count;

if (errors.length) {
  console.log('ERRORS (' + errors.length + '):');
  for (const e of errors.slice(0, 60)) console.log('  ' + e);
} else {
  console.log('no validation errors');
}

fs.writeFileSync('textbook/output/ch11_expanded_91_123.json', JSON.stringify(out, null, 2) + '\n', 'utf8');

console.log('count written: ' + count);
console.log('min length: ' + min + '  mean length: ' + mean.toFixed(1) + '  max length: ' + max);
console.log('mean floor (min_chars): ' + meanFloor.toFixed(1) + '  mean current length: ' + meanCur.toFixed(1));
console.log('smallest margin over floor: ' + minFloorGap);
const smallest = lengths.slice().sort((a, b) => (a.len - a.floor) - (b.len - b.floor)).slice(0, 5);
console.log('tightest five: ' + smallest.map(x => x.key + ' ' + x.len + '/' + x.floor).join(', '));
