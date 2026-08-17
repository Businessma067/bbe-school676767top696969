const fs = require('fs');
const katex = require('katex');
const data = JSON.parse(fs.readFileSync('textbook/output/ch11_expanded_91_123.json', 'utf8'));

let blocks = 0, bad = 0;
const failures = [];
for (const t of Object.keys(data)) {
  for (const L of Object.keys(data[t])) {
    const s = data[t][L];
    const display = s.match(/\$\$([\s\S]*?)\$\$/g) || [];
    const stripped = s.replace(/\$\$[\s\S]*?\$\$/g, '');
    const inline = stripped.replace(/\\\$/g, '@').match(/\$[^$\n]+\$/g) || [];
    const all = display.map(x => [x.slice(2, -2), true])
      .concat(inline.map(x => [x.slice(1, -1).replace(/@/g, '\\$'), false]));
    for (const [expr, disp] of all) {
      blocks++;
      try {
        katex.renderToString(expr, { displayMode: disp, throwOnError: true });
      } catch (e) {
        bad++;
        failures.push(t + L + ' :: ' + expr.slice(0, 90) + ' :: ' + e.message.slice(0, 120));
      }
    }
  }
}
console.log('math expressions checked: ' + blocks);
console.log('render failures: ' + bad);
for (const f of failures.slice(0, 30)) console.log('  ' + f);
