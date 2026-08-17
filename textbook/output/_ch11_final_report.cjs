const fs = require('fs');
const src = fs.readFileSync('C:/Users/bubli/Projects/bbe-school-fixed/src/data/math-ch11-financial.ts', 'utf8').replace(/\r\n/g, '\n');
const parts = src.split(/\n  \{\n    id: `/);
const examples = ['math-11-103', 'math-11-101'];
// before lengths from earlier analysis
const before = {
  'math-11-103': 1537,
  'math-11-101': 1389,
  'math-11-65': 1400,
  'math-11-81': 1302,
};
let t15 = 0, t25 = 0;
for (let i = 1; i < parts.length; i++) {
  const block = parts[i];
  const id = block.slice(0, block.indexOf('`'));
  const diffM = block.match(/difficulty_level: `([^`]+)`/);
  if (!diffM || (diffM[1] !== '1/5' && diffM[1] !== '2/5')) continue;
  const ovStart = block.indexOf('solution_overview: `');
  const after = block.slice(ovStart + 'solution_overview: `'.length);
  let end = -1;
  for (let j = 0; j < after.length; j++) {
    if (after[j] === '`' && /^`,\s/.test(after.slice(j, j + 3))) { end = j; break; }
  }
  const ov = after.slice(0, end);
  const b = before[id];
  if (b && ov.length < b) {
    if (diffM[1] === '1/5') t15++; else t25++;
  }
  if (examples.includes(id) || id === 'math-11-65') {
    console.log(diffM[1], id, 'before', b, 'after', ov.length);
  }
  if (/\*\*Answer\.\*\*/.test(ov)) console.log('ANSWER LEAK', id);
}
console.log('content trimmed approx among tracked:', t15, t25);
