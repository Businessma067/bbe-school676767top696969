const j = require('./_ch11_trimmed_overviews.json');
for (const id of ['math-11-103', 'math-11-6', 'math-11-26']) {
  const s = j[id];
  console.log('====', id, 'len', s.length);
  // show first dollar-ish escape
  const m = s.match(/\\+\$/);
  console.log('first \\+$ match:', m && JSON.stringify(m[0]), 'backslash count', m && m[0].length - 1);
  const m2 = s.match(/\\+%/);
  console.log('first \\+% match:', m2 && JSON.stringify(m2[0]), 'backslash count', m2 && m2[0].length - 1);
  const m3 = s.match(/\\+times/);
  console.log('first \\+times:', m3 && JSON.stringify(m3[0]));
}
