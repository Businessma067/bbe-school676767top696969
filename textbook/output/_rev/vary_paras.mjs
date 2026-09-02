import fs from "node:fs";

const SENT_SPLIT = /(?<=[.!?])\s+(?=[A-Z$\\])/;

function headerBody(e) {
  const m = e.match(/^(\*\*[A-E]\.\*\* → (?:True|False)\n\n)([\s\S]*)$/);
  if (!m) return { header: "", body: e };
  return { header: m[1], body: m[2] };
}

function paraCount(e) {
  const { body } = headerBody(e);
  return body.split(/\n\n+/).filter(Boolean).length;
}

function sentsOf(p) {
  return p.split(SENT_SPLIT).map((s) => s.trim()).filter(Boolean);
}

function joinParas(paras) {
  return paras.map((p) => p.trim()).filter(Boolean).join("\n\n");
}

function splitAfterFirstSent(p) {
  const s = sentsOf(p);
  if (s.length < 2) return null;
  if (s[0].length < 50 && s.length < 3) return null;
  return [s[0], s.slice(1).join(" ")];
}

function splitBeforeLastSent(p) {
  const s = sentsOf(p);
  if (s.length < 3) return splitAfterFirstSent(p);
  return [s.slice(0, -1).join(" "), s[s.length - 1]];
}

function splitAfterMath(p) {
  const i = p.indexOf("$$");
  if (i < 0) return null;
  const end = p.indexOf("$$", i + 2);
  if (end < 0) return null;
  const cut = end + 2;
  const left = p.slice(0, cut).trim();
  const right = p.slice(cut).replace(/^\n+/, "").trim();
  if (!right || right.length < 40) return null;
  return [left, right];
}

function splitThree(p) {
  const math = splitAfterMath(p);
  if (math) {
    const extra = splitAfterFirstSent(math[1]) || splitBeforeLastSent(math[1]);
    if (extra) return [math[0], extra[0], extra[1]];
  }
  const s = sentsOf(p);
  if (s.length >= 4) {
    return [s[0], s.slice(1, -1).join(" "), s[s.length - 1]];
  }
  if (s.length === 3) return [s[0], s[1], s[2]];
  return splitAfterFirstSent(p);
}

function applySplit(p, kind) {
  if (kind === 0) return [p];
  if (kind === 1) return splitAfterFirstSent(p) || [p];
  if (kind === 2) return splitBeforeLastSent(p) || [p];
  if (kind === 3) return splitAfterMath(p) || splitAfterFirstSent(p) || [p];
  return splitThree(p) || [p];
}

function flatten(e) {
  const { header, body } = headerBody(e);
  const paras = body.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
  return header + paras.join(" ");
}

function toN(e, nWanted, letterIdx, taskIdx) {
  const { header, body } = headerBody(e);
  const paras = body.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
  const flat = paras.join(" ");
  if (nWanted <= 1) return header + flat;
  if (paras.length === nWanted) return e;
  const kind = nWanted >= 3 ? 4 : 1 + ((taskIdx + letterIdx) % 3);
  const parts = applySplit(flat, kind);
  if (parts.length >= nWanted) return header + joinParas(parts.slice(0, nWanted - 1).concat([parts.slice(nWanted - 1).join(" ")]));
  if (parts.length > 1) return header + joinParas(parts);
  return header + flat;
}

const PATTERNS = [
  [1, 2, 1, 3, 2],
  [2, 1, 3, 1, 2],
  [1, 3, 2, 2, 1],
  [3, 1, 2, 1, 2],
  [2, 2, 1, 3, 1],
  [1, 2, 3, 1, 2],
  [2, 1, 1, 3, 2],
  [3, 2, 1, 2, 1],
];

function varyTask(expls, taskIdx) {
  const counts = expls.map(paraCount);
  if (new Set(counts).size > 1) return expls;
  const pattern = PATTERNS[taskIdx % PATTERNS.length];
  return expls.map((e, i) => toN(e, pattern[i], i, taskIdx));
}

function processFile(file) {
  const arr = JSON.parse(fs.readFileSync(file, "utf8"));
  arr.forEach((t, ti) => {
    t.tactical_explanations = varyTask(t.tactical_explanations, t.sort_order ?? ti);
  });
  fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
}

for (const f of process.argv.slice(2)) processFile(f);
