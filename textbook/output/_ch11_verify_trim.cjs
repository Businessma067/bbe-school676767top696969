const fs = require('fs');
const p = 'C:/Users/bubli/Projects/bbe-school-fixed/src/data/math-ch11-financial.ts';
const s = fs.readFileSync(p, 'utf8');
console.log('bytes', s.length);
console.log('lines', s.split(/\r?\n/).length);
console.log('tasks', (s.match(/id: `math-11-/g) || []).length);
console.log('CRLF pairs', (s.match(/\r\n/g) || []).length);

const ids = ['math-11-103', 'math-11-101', 'math-11-81', 'math-11-1'];
for (const id of ids) {
  const i = s.indexOf('id: `' + id + '`');
  const o = s.indexOf('solution_overview: `', i);
  const a = s.slice(o + 'solution_overview: `'.length);
  let end = -1;
  for (let j = 0; j < a.length; j++) {
    if (a[j] === '`' && /^`,\s/.test(a.slice(j, j + 3))) {
      end = j;
      break;
    }
  }
  const ov = a.slice(0, end);
  console.log('\n====', id, 'len', ov.length, '====');
  console.log(ov.slice(0, 180).replace(/\r/g, ''));
  console.log('...');
  console.log(ov.slice(-120).replace(/\r/g, ''));
}
