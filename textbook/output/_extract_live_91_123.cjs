const fs = require('fs');
const s = fs.readFileSync('src/data/math-ch11-financial.ts', 'utf8');
const targets = Object.keys(JSON.parse(fs.readFileSync('textbook/output/_ch11_expand_targets_91_123.json', 'utf8')));
const parts = s.split(/\r?\n  \{\r?\n/).slice(1);
const out = {};
for (const p of parts) {
  const m = p.match(/id: `math-11-(\d+)`/);
  if (!m) continue;
  out[m[1]] = p;
}
console.log('blocks', parts.length, 'ids', Object.keys(out).length);
let txt = '';
for (const t of targets) {
  if (!out[t]) { console.log('MISSING', t); continue; }
  txt += '===== TASK ' + t + ' =====\n' + out[t] + '\n';
}
fs.writeFileSync('textbook/output/_live_91_123.txt', txt);
console.log('written', txt.length);
