const fs = require('fs');
const path = 'C:/Users/bubli/Projects/bbe-school-fixed/src/data/math-ch11-financial.ts';
const src = fs.readFileSync(path, 'utf8').replace(/\r\n/g, '\n');

const parts = src.split(/\n  \{\n    id: `/);
const tasks = [];
for (let i = 1; i < parts.length; i++) {
  const block = parts[i];
  const id = block.slice(0, block.indexOf('`'));
  const diffM = block.match(/difficulty_level: `([^`]+)`/);
  const ovMarker = 'solution_overview: `';
  const ovStart = block.indexOf(ovMarker);
  if (!diffM || ovStart < 0) {
    console.log('skip', id, !!diffM, ovStart);
    continue;
  }
  const after = block.slice(ovStart + ovMarker.length);
  let end = -1;
  for (let j = 0; j < after.length; j++) {
    if (after[j] === '`' && /^`,\s/.test(after.slice(j, j + 3))) {
      end = j;
      break;
    }
  }
  if (end < 0) {
    console.log('no end', id);
    continue;
  }
  const overview = after.slice(0, end);
  tasks.push({ id, diff: diffM[1], len: overview.length, overview });
}

const easy = tasks.filter(t => t.diff === '1/5' || t.diff === '2/5');
console.log('total tasks', tasks.length);
console.log('1/5', tasks.filter(t => t.diff === '1/5').length);
console.log('2/5', tasks.filter(t => t.diff === '2/5').length);

for (const d of ['1/5', '2/5']) {
  const arr = easy.filter(t => t.diff === d).map(t => t.len).sort((a, b) => a - b);
  console.log(
    d,
    'count', arr.length,
    'min', arr[0],
    'med', arr[Math.floor(arr.length / 2)],
    'max', arr[arr.length - 1],
    'avg', Math.round(arr.reduce((a, b) => a + b, 0) / arr.length)
  );
}

console.log('--- status ---');
const need = [];
for (const t of [...easy].sort((a, b) => b.len - a.len)) {
  const target = t.diff === '1/5' ? 1100 : 1200;
  const floor = t.diff === '1/5' ? 700 : 900;
  const flag = t.len > target ? 'OVER' : t.len < floor ? 'UNDER' : 'ok';
  if (flag !== 'ok') console.log(flag, t.diff, t.id, t.len);
  if (flag === 'OVER') need.push(t);
}

fs.writeFileSync(
  'C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_ch11_over_target.json',
  JSON.stringify(need.map(t => ({ id: t.id, diff: t.diff, len: t.len, overview: t.overview })), null, 2)
);
fs.writeFileSync(
  'C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_ch11_easy_all.json',
  JSON.stringify(easy.map(t => ({ id: t.id, diff: t.diff, len: t.len, overview: t.overview })), null, 2)
);
console.log('wrote over-target', need.length, 'all easy', easy.length);
