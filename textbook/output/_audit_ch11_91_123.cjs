const fs = require('fs');
const d = JSON.parse(fs.readFileSync('textbook/output/ch11_expanded_91_123.json', 'utf8'));
const targets = JSON.parse(fs.readFileSync('textbook/output/_ch11_expand_targets_91_123.json', 'utf8'));

const tasks = Object.keys(d);
let n = 0, minDisp = 999, noBlank = 0, hdrBad = 0, noCompare = 0;
const few = [];
const hdrRe = /^\*\*[A-E]\) .+\*\*  \((true|false)\)$/;

for (const t of tasks) {
  for (const L of Object.keys(d[t])) {
    n++;
    const s = d[t][L];
    const disp = (s.match(/\$\$[\s\S]*?\$\$/g) || []).length;
    if (disp < minDisp) minDisp = disp;
    if (disp < 3) few.push(t + L + ':' + disp);
    const lines = s.split('\n');
    if (lines[1] !== '') noBlank++;
    if (!hdrRe.test(lines[0])) hdrBad++;
    const body = s.split('\n').slice(2).join('\n');
    if (!/(claim|Comparing|comparing|compared|threshold|matches|match)/.test(body)) noCompare++;
    // header must equal live header exactly
    const live = (targets[t].letters[L].current || '').replace(/\r/g, '').split('\n')[0];
    if (live !== lines[0]) hdrBad++;
  }
}
console.log('tasks: ' + tasks.length + '   entries: ' + n);
console.log('min display blocks per entry: ' + minDisp + '   entries with fewer than 3: ' + few.length + (few.length ? ' -> ' + few.join(' ') : ''));
console.log('entries missing blank line after header: ' + noBlank);
console.log('header mismatches (format or vs live): ' + hdrBad);
console.log('entries lacking an explicit comparison word: ' + noCompare);
