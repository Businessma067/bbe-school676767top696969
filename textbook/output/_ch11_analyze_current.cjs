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
  if (!diffM || ovStart < 0) continue;
  const after = block.slice(ovStart + ovMarker.length);
  let end = -1;
  for (let j = 0; j < after.length; j++) {
    if (after[j] === '`' && /^`,\s/.test(after.slice(j, j + 3))) {
      end = j;
      break;
    }
  }
  if (end < 0) continue;
  const overview = after.slice(0, end);
  const stripped = overview.replace(/\n*\*\*Answer\.\*\*[^\n]*/g, '').replace(/\s+$/g, '');
  tasks.push({
    id,
    diff: diffM[1],
    len: overview.length,
    strippedLen: stripped.length,
    hasAnswer: /\*\*Answer\.\*\*/.test(overview),
    overview,
    stripped,
  });
}

const easy = tasks.filter((t) => t.diff === '1/5' || t.diff === '2/5');
console.log('easy', easy.length, 'with Answer', easy.filter((t) => t.hasAnswer).length);

for (const d of ['1/5', '2/5']) {
  const arr = easy.filter((t) => t.diff === d);
  const lens = arr.map((t) => t.len).sort((a, b) => a - b);
  const slens = arr.map((t) => t.strippedLen).sort((a, b) => a - b);
  console.log(d, 'raw min/med/max', lens[0], lens[Math.floor(lens.length / 2)], lens[lens.length - 1]);
  console.log(d, 'stripped min/med/max', slens[0], slens[Math.floor(slens.length / 2)], slens[slens.length - 1]);
}

console.log('\n--- need work (over after strip, or has Answer) ---');
const need = [];
for (const t of easy) {
  const target = t.diff === '1/5' ? 1100 : 1200;
  if (t.hasAnswer || t.strippedLen > target) {
    need.push(t);
    console.log(
      t.diff,
      t.id,
      'raw',
      t.len,
      'stripped',
      t.strippedLen,
      t.strippedLen > target ? 'OVER' : 'strip-only'
    );
  }
}

fs.writeFileSync(
  'C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/_ch11_easy_current.json',
  JSON.stringify(
    easy.map((t) => ({
      id: t.id,
      diff: t.diff,
      len: t.len,
      strippedLen: t.strippedLen,
      hasAnswer: t.hasAnswer,
      overview: t.overview,
      stripped: t.stripped,
    })),
    null,
    2
  )
);
console.log('need', need.length);
