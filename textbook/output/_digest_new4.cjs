const fs = require('fs');
const t = JSON.parse(fs.readFileSync('textbook/output/_ch11_expand_targets_91_123.json', 'utf8'));
let out = '';
for (const k of ['106', '111', '112', '113']) {
  const task = t[k];
  out += '\n########## TASK ' + k + '  (' + task.subsection + ') ##########\n';
  out += 'CONTEXT: ' + task.context + '\n';
  if (task.table) out += 'TABLE: ' + JSON.stringify(task.table) + '\n';
  out += 'OVERVIEW:\n' + (task.solution_overview || '').replace(/\r/g, '') + '\n';
}
fs.writeFileSync('textbook/output/_digest_new4.txt', out);
console.log('chars', out.length);
