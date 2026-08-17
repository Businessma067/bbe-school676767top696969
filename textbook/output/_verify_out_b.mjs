import fs from 'node:fs';

const inp = JSON.parse(fs.readFileSync('textbook/output/_other_batch_b.json', 'utf8'));
const out = JSON.parse(fs.readFileSync('textbook/output/_other_out_b.json', 'utf8'));

let fail = 0;
const bad = (m) => { console.log('FAIL ' + m); fail++; };

if (inp.length !== out.length) bad(`count ${inp.length} vs ${out.length}`);

out.forEach((o, k) => {
  if (o.i !== k) bad(`index order at ${k}: got ${o.i}`);
  const src = inp[o.i];
  const t = o.text;
  if (t.length < src.min_chars) bad(`${src.caseId} ${src.letter}: ${t.length} < ${src.min_chars}`);
  const l1a = src.text.split('\n')[0], l1b = t.split('\n')[0];
  if (l1a !== l1b) bad(`${src.caseId} ${src.letter}: first line changed\n  ${l1a}\n  ${l1b}`);
  for (const rc of src.rawChunks) if (t.includes(rc)) bad(`${src.caseId} ${src.letter}: rawChunk survives: ${rc}`);
  if (t.includes('—')) bad(`${src.caseId} ${src.letter}: em dash`);
  if (/\\{2}/.test(t)) bad(`${src.caseId} ${src.letter}: double backslash`);
  // \text{ or \operatorname{ containing two consecutive 3+ letter words, or any words at all
  const texts = [...t.matchAll(/\\(?:text|operatorname|mathrm)\{([^}]*)\}/g)].map(m => m[1]);
  for (const inner of texts) {
    if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(inner) || /[a-z]{3,}/.test(inner)) bad(`${src.caseId} ${src.letter}: prose in text{}: "${inner}"`);
  }
  // \$ inside math spans
  const spans = [...t.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m => m[1]);
  const inline = [...t.replace(/\$\$[\s\S]*?\$\$/g, '').matchAll(/(?<!\\)\$([^$\n]+)\$/g)].map(m => m[1]);
  for (const s of [...spans, ...inline]) {
    if (s.includes('\\$')) bad(`${src.caseId} ${src.letter}: \\$ inside math: ${s}`);
    if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s.replace(/\\[a-zA-Z]+/g, ''))) bad(`${src.caseId} ${src.letter}: two words in math span: ${s.trim()}`);
  }
  // display block count preserved (>=)
  const dOld = (src.text.match(/\$\$/g) || []).length / 2;
  const dNew = (spans.length);
  if (dNew < dOld) bad(`${src.caseId} ${src.letter}: display blocks ${dOld} -> ${dNew}`);
  console.log(`${src.caseId} ${src.letter}: len ${src.text.length} -> ${t.length} (min ${src.min_chars}), displays ${dOld} -> ${dNew}`);
});

console.log(fail === 0 ? 'ALL CHECKS PASSED' : `${fail} FAILURES`);
