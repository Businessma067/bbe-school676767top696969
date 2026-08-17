/** Structural + numerical audit of textbook/output/_ch8_add_79_87.mjs */
import { BATCH } from "./_ch8_add_79_87.mjs";

const problems = [];
const letters = ["A", "B", "C", "D", "E"];
const say = (m) => problems.push(m);

/* ---------------- structural ---------------- */

const wantDiff = {
  79: "5/5", 80: "2/5", 81: "4/5", 82: "1/5", 83: "3/5",
  84: "5/5", 85: "2/5", 86: "4/5", 87: "3/5",
};
const wantTrues = { 79: 2, 80: 4, 81: 1, 82: 5, 83: 3, 84: 2, 85: 4, 86: 1, 87: 3 };

if (BATCH.length !== 9) say(`expected 9 tasks, got ${BATCH.length}`);

let minExpl = Infinity, minOv = Infinity;

BATCH.forEach((t, idx) => {
  const w = (m) => say(`${t.case_id}: ${m}`);
  const n = 79 + idx;

  if (t.sort_order !== n) w(`sort_order ${t.sort_order} != ${n}`);
  if (t.id !== `math-8-${n}`) w(`id ${t.id}`);
  if (t.case_id !== `MATH 8.${n}`) w(`case_id ${t.case_id}`);
  if (t.difficulty_level !== wantDiff[n]) w(`difficulty ${t.difficulty_level} != ${wantDiff[n]}`);

  if (t.statements.length !== 5 || t.answer_key.length !== 5 || t.tactical_explanations.length !== 5)
    w("array length != 5");

  const trues = t.answer_key.filter(Boolean).length;
  if (trues !== wantTrues[n]) w(`true count ${trues} != ${wantTrues[n]}`);

  if (!t.context.includes("Evaluate each statement. Mark it TRUE or FALSE."))
    w("context missing TRUE/FALSE instruction");
  if (!/\.\s*Evaluate each statement\. Mark it TRUE or FALSE\.$/.test(t.context.trim()))
    w("context does not end with the instruction");

  // no subsections anywhere
  for (const [k, s] of [["context", t.context], ["title", t.title], ...t.statements.map((s, i) => [`stmt ${letters[i]}`, s])]) {
    if (/\n/.test(s)) w(`${k} contains a newline (subsection-like)`);
  }
  if (t.subsections !== undefined) w("has subsections field");

  const balanced = (s, label) => {
    const dd = (s.match(/\$\$/g) || []).length;
    if (dd % 2) w(`${label}: odd number of $$`);
    const single = (s.replace(/\$\$/g, "").match(/\$/g) || []).length;
    if (single % 2) w(`${label}: odd number of inline $`);
    if (s.includes("${")) w(`${label}: contains a template-interpolation sequence`);
    if (/\\\\/.test(s)) w(`${label}: double backslash found (should be single in String.raw)`);
  };

  balanced(t.context, "context");
  t.statements.forEach((s, i) => {
    balanced(s, `stmt ${letters[i]}`);
    if (/\b(true|false)\b/i.test(s)) w(`stmt ${letters[i]} leaks a verdict`);
  });

  t.tactical_explanations.forEach((ex, i) => {
    const label = `expl ${letters[i]}`;
    const head = ex.split("\n")[0];
    const m = head.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
    if (!m) return w(`${label} header malformed: ${head.slice(0, 80)}`);
    if (m[1] !== letters[i]) w(`${label} mislabelled ${m[1]}`);
    if ((m[2] === "True") !== t.answer_key[i]) w(`${label} verdict mismatch with answer_key`);
    if (ex.length < 500) w(`${label} too short (${ex.length})`);
    minExpl = Math.min(minExpl, ex.length);
    const blocks = (ex.match(/\$\$/g) || []).length / 2;
    if (blocks < 2) w(`${label} has only ${blocks} display block(s)`);
    balanced(ex, label);
    if (/This claim/.test(ex)) w(`${label} uses the banned opener phrase`);
    const last = ex.trim().split("\n").filter(Boolean).slice(-1)[0];
    const wantClose = t.answer_key[i] ? "so the statement is True." : "so the statement is False.";
    if (!last.endsWith(wantClose)) w(`${label} closing line is "${last.slice(-60)}"`);
    // second paragraph must not be a bare display block (concept-first)
    const p2 = ex.split(/\n\n+/)[1] || "";
    if (/^\$\$/.test(p2.trim())) w(`${label} opens with display math rather than a concept`);
    for (const bp of ["Let us", "We can see that", "It is clear that", "In conclusion", "As we know"])
      if (ex.includes(bp)) w(`${label} contains boilerplate "${bp}"`);
  });

  const ov = t.solution_overview || "";
  for (const part of ["**Part 1:", "**Part 2:", "**Part 3:", "**Answer.**"])
    if (!ov.includes(part)) w(`overview missing ${part}`);
  if (ov.length < 900) w(`overview too short (${ov.length})`);
  minOv = Math.min(minOv, ov.length);
  balanced(ov, "overview");
});

const titles = new Set(BATCH.map((t) => t.title));
if (titles.size !== BATCH.length) say("duplicate titles");

/* ---------------- numerical ---------------- */

const close = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
const chk = (name, cond) => { if (!cond) say(`NUMERIC ${name}`); };

// 8.79 mill/dryer
{
  const k = Math.log(2.25) / Math.log(1.5);
  chk("79 k=2", close(k, 2));
  const rk = Math.log(8) / Math.log(2);
  const r = rk / k;
  chk("79 r=1.5", close(r, 1.5));
  const B = 16 / Math.pow(4, r);
  chk("79 B=2", close(B, 2));
  const A = 320 / Math.pow(16, k);
  chk("79 A=1.25", close(A, 1.25));
  const E = (v) => A * Math.pow(B * Math.pow(v, r), k);
  chk("79 composite = 5v^3", close(E(3), 5 * 27) && close(E(4), 320));
  chk("79 E(6)=1080 not <1000", close(E(6), 1080) && !(E(6) < 1000));
  chk("79 E(9)=3645", close(E(9), 3645));
  const vAt2560 = Math.cbrt(2560 / 5);
  chk("79 v(2560)=8, not >9", close(vAt2560, 8) && !(vAt2560 > 9));
}

// 8.80 membranes
{
  const TA = (p) => 12 * Math.sqrt(p);
  const TB = (p) => 3 * p;
  chk("80 A: TA(4)=2*TB(4)", close(TA(4), 24) && close(TB(4), 12) && close(TA(4) / TB(4), 2));
  chk("80 B: cross at 16", close(TA(16), TB(16)) && close(TA(16), 48));
  let cOk = true;
  for (let p = 16.01; p <= 30; p += 0.01) if (!(TB(p) > TA(p))) cOk = false;
  chk("80 C: B leads above 16", cOk);
  const pB = 70 / 3;
  chk("80 D: B hits 70 inside range", pB > 2 && pB < 30 && TB(30) > 70);
  const pA = Math.pow(70 / 12, 2);
  chk("80 E: A never hits 70 in range", pA > 30 && TA(30) < 70);
  chk("80 E value", close(TA(30), 65.7267, 1e-4));
}

// 8.81 three points
{
  const pts = [[2, 5], [8, 40], [32, 360]];
  const expo = (i, j) => Math.log(pts[j][1] / pts[i][1]) / Math.log(pts[j][0] / pts[i][0]);
  chk("81 A: low pair r=1.5", close(expo(0, 1), 1.5));
  chk("81 B: high pair differs", !close(expo(1, 2), 1.5) && close(expo(1, 2), 1.5849625, 1e-6));
  chk("81 C: high pair larger", expo(1, 2) > expo(0, 1));
  const A = 5 / Math.pow(2, 1.5);
  const pred = A * Math.pow(32, 1.5);
  chk("81 D: predicts 320 not 340", close(pred, 320, 1e-9) && !close(pred, 340, 1e-9));
  chk("81 A const", close(A, 1.7677670, 1e-6));
  chk("81 E: outer pair 1.5425", close(expo(0, 2), 1.5424813, 1e-6) && !close(expo(0, 2), 1.5));
  chk("81 E logs", close(Math.log(72), 4.2766661, 1e-6) && close(Math.log(16), 2.7725887, 1e-6));
  chk("81 E strictly between local exponents", expo(0, 2) > 1.5 && expo(0, 2) < expo(1, 2));
}

// 8.82 berry farm
{
  const R = (x) => 12 * Math.sqrt(x);
  const C = (x) => 2 * x;
  chk("82 A", close(R(9), 36));
  chk("82 B", close(C(9), 18) && close(R(9) - C(9), 18));
  chk("82 C", close(R(4) - C(4), 16));
  chk("82 D", close(R(36), 72) && close(C(36), 72) && close(R(36) - C(36), 0));
  chk("82 E", close(R(18) / R(9), Math.SQRT2));
  chk("82 R(18)", close(R(18), 50.9116882, 1e-6));
  chk("82 sqrt108", close(Math.sqrt(108), 10.3923048, 1e-6));
}

// 8.83 snow
{
  const T = (d) => 0.5 * Math.pow(d, 4 / 3);
  const dInv = (t) => Math.pow(2 * t, 0.75);
  chk("83 A", close(T(8), 8));
  chk("83 B inverse", close(dInv(T(13)), 13) && close(dInv(8), 8));
  chk("83 C", T(13) <= 16 && close(T(13), 15.2836, 1e-4) && close(dInv(16), 13.4543, 1e-4));
  chk("83 D", close(T(15), 18.4966, 1e-4) && !(T(15) > 20));
  chk("83 D unit trap", close(T(150), 398.4934, 1e-4));
  chk("83 E", close(T(16) / T(8), Math.pow(2, 4 / 3)) && !close(T(16) / T(8), Math.pow(2, 0.75)));
  chk("83 E values", close(Math.pow(2, 4 / 3), 2.5198421, 1e-6) && close(Math.pow(2, 0.75), 1.6817928, 1e-6));
  chk("83 T(16)", close(T(16), 20.1587, 1e-4));
}

// 8.84 indexation
{
  const M1 = 960000 * (100 / 100);
  const M2 = 2700000 * (100 / 125);
  chk("84 deflated", close(M1, 960000) && close(M2, 2160000));
  const r = Math.log(M2 / M1) / Math.log(27 / 8);
  chk("84 A r=2/3", close(r, 2 / 3));
  const rNom = Math.log(2700000 / 960000) / Math.log(27 / 8);
  chk("84 B nominal r", close(rNom, 0.8501132, 1e-6) && !(rNom > 0.9));
  chk("84 B logs", close(Math.log(2.8125), 1.0340738, 1e-6) && close(Math.log(3.375), 1.2163953, 1e-6));
  chk("84 B ratio", close(2700000 / 960000, 2.8125) && 2.8125 > 2.25);
  const A = M1 / Math.pow(8, 2 / 3);
  chk("84 C A=240000", close(A, 240000));
  chk("84 C check pt2", close(A * Math.pow(27, 2 / 3), 2160000));
  const real64 = A * Math.pow(64, 2 / 3);
  chk("84 D real 3.84m, nominal 4.8m", close(real64, 3840000) && close(real64 * 1.25, 4800000));
  chk("84 E", close(Math.pow(2, 2 / 3), 1.5874011, 1e-6) && Math.pow(2, 2 / 3) - 1 > 0.5);
}

// 8.85 elasticity
{
  const Q = (v) => 18 * Math.pow(v, 0.4);
  chk("85 A elasticity", close((1e-6 + 1) * 0 + 0.4, 0.4));
  // numeric elasticity check
  const v0 = 7, h = 1e-6;
  const el = (v0 / Q(v0)) * ((Q(v0 + h) - Q(v0 - h)) / (2 * h));
  chk("85 A numeric elasticity", close(el, 0.4, 1e-6));
  chk("85 B", close(Math.pow(1.01, 0.4), 1.0039880, 1e-6));
  chk("85 C", close(Math.pow(2, 0.4), 1.3195079, 1e-6) && !close(Math.pow(2, 0.4), 1.4, 1e-3));
  chk("85 D", close(Math.pow(32, 0.4), 4) && close(Q(32) / Q(1), 4) && close(Q(1), 18) && close(Q(32), 72));
  const Q2 = (v) => 5 * Math.pow(v, 0.4);
  const el2 = (v0 / Q2(v0)) * ((Q2(v0 + h) - Q2(v0 - h)) / (2 * h));
  chk("85 E coefficient-free", close(el2, 0.4, 1e-6));
}

// 8.86 allocation
{
  const C = (x) => x * x + 3 * (40 - x) * (40 - x);
  let best = Infinity, bx = null;
  for (let x = 0; x <= 40; x += 0.0001) { const c = C(x); if (c < best) { best = c; bx = x; } }
  chk("86 optimum x=30", close(bx, 30, 1e-4));
  chk("86 min 1200", close(best, 1200, 1e-6));
  chk("86 A false", !close(bx, 20, 1e-3));
  chk("86 C false", !close(best, 1400, 1e-6));
  chk("86 D even split 1600", close(C(20), 1600) && !(C(20) < 1500));
  chk("86 E marginals equal", close(2 * 30, 60) && close(6 * 10, 60) && close(2 * 30 - 6 * 10, 0));
  chk("86 quadratic form", close(C(30), 4 * 900 - 240 * 30 + 4800));
  chk("86 even marginals", close(2 * 20, 40) && close(6 * 20, 120));
}

// 8.87 counterfactual
{
  const A = 240 / Math.pow(16, 0.75);
  const A2 = 240 / Math.pow(16, 1.25);
  chk("87 A", close(A, 30));
  chk("87 B", close(A2, 7.5));
  const H = (n) => A * Math.pow(n, 0.75);
  const H2 = (n) => A2 * Math.pow(n, 1.25);
  chk("87 C", close(H(81), 810) && close(H2(81), 1822.5) && H2(81) - H(81) > 1000 && close(H2(81) - H(81), 1012.5));
  chk("87 D", H2(4) < H(4) && close(H(4), 84.8528, 1e-4) && close(H2(4), 42.4264, 1e-4));
  // unique crossing
  let crossings = 0;
  for (let n = 0.01; n <= 400; n += 0.01) {
    const a = H(n) - H2(n), b = H(n + 0.01) - H2(n + 0.01);
    if (a === 0 || a * b < 0) crossings++;
  }
  chk("87 E unique crossing at 16", crossings === 1 && close(H(16), H2(16)) && close(H(16), 240));
  chk("87 E values at 32", close(H(32), 403.6303, 1e-4) && close(H2(32), 570.8199, 1e-4));
}

console.log("tasks:", BATCH.length);
console.log("difficulty sequence:", BATCH.map((t) => t.difficulty_level).join(" "));
console.log("true counts:", BATCH.map((t) => t.answer_key.filter(Boolean).length).join(","));
console.log("shortest explanation:", minExpl, "| shortest overview:", minOv);
console.log(
  "display blocks per explanation (min per task):",
  BATCH.map((t) => Math.min(...t.tactical_explanations.map((e) => (e.match(/\$\$/g) || []).length / 2))).join(",")
);
console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "no problems found");
process.exit(problems.length ? 1 : 0);
