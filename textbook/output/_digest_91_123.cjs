const fs = require('fs');
const t = JSON.parse(fs.readFileSync('textbook/output/_ch11_expand_targets_91_123.json', 'utf8'));
let out = '';
let rows = [];
for (const k of Object.keys(t)) {
  const task = t[k];
  out += '\n########## TASK ' + k + '  (' + task.subsection + ') ##########\n';
  out += 'CONTEXT: ' + task.context + '\n';
  if (task.table) out += 'TABLE: ' + JSON.stringify(task.table) + '\n';
  for (const L of Object.keys(task.letters)) {
    const d = task.letters[L];
    const cur = (d.current || '').replace(/\r/g, '');
    rows.push([k, L, d.min_chars, cur.length]);
    out += '\n--- ' + k + ' ' + L + ' | verdict=' + d.verdict + ' | min_chars=' + d.min_chars + ' | curlen=' + cur.length + '\n';
    out += 'STATEMENT: ' + d.statement + '\n';
    out += 'CURRENT:\n' + cur + '\n';
  }
}
fs.writeFileSync('textbook/output/_digest_91_123.txt', out);
console.log('rows', rows.length, 'chars', out.length);
console.log('minfloor', Math.min(...rows.map(r => r[2])), 'maxfloor', Math.max(...rows.map(r => r[2])));
const bad = rows.filter(r => r[2] !== r[3] + 80);
console.log('floors not equal cur+80:', bad.length, JSON.stringify(bad.slice(0, 10)));
