/** Structural + numeric verification for MATH 8.70-8.78. */
import fs from "node:fs";

const { BATCH } = await import("./_ch8_add_70_78.mjs");
const src = fs.readFileSync(new URL("./_ch8_add_70_78.mjs", import.meta.url), "utf8");

const problems = [];
const bad = (m) => problems.push(m);
const letters = ["A", "B", "C", "D", "E"];
const close = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));

/* ---------- raw source checks ---------- */
if (src.includes("${")) bad("source contains a template interpolation sequence");
// every backslash run in the source must be even-length, so each LaTeX command
// survives template-literal parsing as a single backslash
for (const m of src.matchAll(/\\+/g))
  if (m[0].length % 2)
    bad(`odd backslash run in source near: ${src.slice(Math.max(0, m.index - 40), m.index + 20)}`);
if (/subsection/.test(src)) bad("source mentions subsection");
// after parsing, no doubled backslash should remain in any field
for (const t of BATCH)
  for (const [name, s] of [["context", t.context], ["overview", t.solution_overview], ...t.statements.map((v, i) => [`stmt ${i}`, v]), ...t.tactical_explanations.map((v, i) => [`expl ${i}`, v])])
    if (s.includes("\\\\")) bad(`${t.case_id} ${name}: doubled backslash survived parsing`);

/* ---------- structural checks ---------- */
const wantDiff = ["1/5", "4/5", "2/5", "5/5", "3/5", "1/5", "4/5", "3/5", "2/5"];
const wantTrue = [4, 2, 1, 5, 3, 4, 2, 1, 5];

if (BATCH.length !== 9) bad(`expected 9 tasks, got ${BATCH.length}`);

BATCH.forEach((t, i) => {
  const n = 70 + i;
  const tag = `8.${n}`;
  if (t.id !== `math-8-${n}`) bad(`${tag}: id is ${t.id}`);
  if (t.case_id !== `MATH 8.${n}`) bad(`${tag}: case_id is ${t.case_id}`);
  if (t.sort_order !== n) bad(`${tag}: sort_order is ${t.sort_order}`);
  if (t.difficulty_level !== wantDiff[i]) bad(`${tag}: difficulty ${t.difficulty_level} != ${wantDiff[i]}`);
  if ("subsection" in t) bad(`${tag}: has a subsection field`);
  if (!t.title || t.title.length < 20) bad(`${tag}: title missing/short`);

  if (t.statements.length !== 5 || t.answer_key.length !== 5 || t.tactical_explanations.length !== 5)
    bad(`${tag}: array lengths ${t.statements.length}/${t.answer_key.length}/${t.tactical_explanations.length}`);

  const trues = t.answer_key.filter(Boolean).length;
  if (trues !== wantTrue[i]) bad(`${tag}: ${trues} trues, expected ${wantTrue[i]}`);

  if (!t.context.endsWith("Evaluate each statement. Mark it TRUE or FALSE."))
    bad(`${tag}: context does not end with the TRUE/FALSE instruction`);

  const dollars = (s) => (s.replace(/\$\$/g, "").match(/\$/g) || []).length;
  if (dollars(t.context) % 2) bad(`${tag}: odd inline $ in context`);
  t.statements.forEach((s, j) => {
    if (dollars(s) % 2) bad(`${tag}${letters[j]}: odd inline $ in statement`);
  });

  t.tactical_explanations.forEach((ex, j) => {
    const head = ex.split("\n")[0];
    const m = head.match(/^\*\*([A-E])\.\*\* → (True|False)$/);
    if (!m) return bad(`${tag}${letters[j]}: bad header "${head.slice(0, 60)}"`);
    if (m[1] !== letters[j]) bad(`${tag}${letters[j]}: header letter ${m[1]}`);
    if ((m[2] === "True") !== t.answer_key[j]) bad(`${tag}${letters[j]}: verdict mismatch`);
    if (ex.length < 500) bad(`${tag}${letters[j]}: explanation ${ex.length} chars (<500)`);
    const dd = (ex.match(/\$\$/g) || []).length;
    if (dd % 2) bad(`${tag}${letters[j]}: odd $$ count`);
    if (dd / 2 < 2) bad(`${tag}${letters[j]}: only ${dd / 2} display equations`);
    if (dollars(ex) % 2) bad(`${tag}${letters[j]}: odd inline $`);
    if (/This claim/i.test(ex)) bad(`${tag}${letters[j]}: contains "This claim"`);
    if (/the claim is (true|false)/i.test(ex)) bad(`${tag}${letters[j]}: uses "the claim is ..."`);
    const tail = ex.trim().split("\n").pop().trim();
    const want = t.answer_key[j] ? "so the statement is True." : "so the statement is False.";
    if (!tail.endsWith(want)) bad(`${tag}${letters[j]}: final sentence is "${tail.slice(-60)}"`);
  });

  const ov = t.solution_overview || "";
  for (const part of ["**Part 1:", "**Part 2:", "**Part 3:", "**Answer.**"])
    if (!ov.includes(part)) bad(`${tag}: overview missing ${part}`);
  if (ov.length < 900) bad(`${tag}: overview ${ov.length} chars (<900)`);
  if ((ov.match(/\$\$/g) || []).length % 2) bad(`${tag}: odd $$ in overview`);
  if (dollars(ov) % 2) bad(`${tag}: odd inline $ in overview`);
});

/* ---------- numeric checks ---------- */
const num = [];
const chk = (label, cond) => {
  num.push(`${cond ? "ok  " : "FAIL"} ${label}`);
  if (!cond) bad(`numeric: ${label}`);
};

// 8.70  C(L) = 2.5 L^2
const C = (L) => 2.5 * L ** 2;
chk("70A C(4)=40", C(4) === 40);
chk("70B C(2L)/C(L)=4", close(C(6) / C(3), 4) && close(C(10) / C(5), 4));
chk("70B levels 22.5/90/62.5/250", C(3) === 22.5 && C(6) === 90 && C(5) === 62.5 && C(10) === 250);
chk("70C C(6)=90 and 1.5^2=2.25", C(6) === 90 && close(C(6) / C(4), 2.25));
chk("70D C(L)/L not constant: 10,15,20", C(4) / 4 === 10 && C(6) / 6 === 15 && C(8) / 8 === 20);
chk("70E +50% length => +125% cloth", close((C(6) / C(4) - 1) * 100, 125));
chk("70 aux C(2)=10, C(8)=160", C(2) === 10 && C(8) === 160);

// 8.71  P(v) = B v^3, tunnel: P(12)=216
const B71 = 216 / 12 ** 3;
const P71 = (v) => B71 * v ** 3;
const D71 = (v) => B71 * v ** 2;
chk("71A B=0.125", B71 === 0.125);
chk("71A D(12)=18 and 18*12=216", D71(12) === 18 && D71(12) * 12 === 216);
chk("71A 216/144=1.5", close(216 / 144, 1.5));
chk("71B P(18)=729 (not 324)", P71(18) === 729 && 216 * 1.5 === 324);
chk("71B 18^3=5832, 1.5^3=3.375", 18 ** 3 === 5832 && close(1.5 ** 3, 3.375));
chk("71C 1.25^3=1.953125 => +95.3% > 80%", close(1.25 ** 3, 1.953125) && (1.25 ** 3 - 1) * 100 > 80);
chk("71C P(15)=421.875", close(P71(15), 421.875));
chk("71D cap = 4000^(1/3) ~ 15.87 < 16", close(500 / B71, 4000) && Math.cbrt(4000) < 16 && Math.cbrt(4000) > 15.8);
chk("71D P(15)<500<P(16)=512", P71(15) < 500 && 500 < P71(16) && P71(16) === 512);
chk("71E drag x4 but power x8", close(D71(24) / D71(12), 4) && close(P71(24) / P71(12), 8));
chk("71E D(24)=72, P(24)=1728", D71(24) === 72 && P71(24) === 1728);

// 8.72  S(t) = 4000 t^-2.5
const S72 = (t) => 4000 * t ** -2.5;
chk("72A S(4)=125, 4^2.5=32", S72(4) === 125 && 4 ** 2.5 === 32);
chk("72B 2^-2.5 ~ 0.1768 (not 0.25)", close(2 ** -2.5, 0.1767766952966369, 1e-9));
chk("72B S(8)~22.10 and 8^2.5~181.02", close(S72(8), 22.0970869120796, 1e-6) && close(8 ** 2.5, 181.019, 1e-5));
chk("72B ratio S(8)/S(4)=2^-2.5", close(S72(8) / S72(4), 2 ** -2.5));
chk("72B extra half power removes ~29%", close(1 - 2 ** -2.5 / 0.25, 0.29289, 1e-4));
chk("72C S(16)=3.90625, 16^2.5=1024", S72(16) === 3.90625 && 16 ** 2.5 === 1024);
chk("72C distractor 4000/256=15.625 is 4x", 4000 / 256 === 15.625 && close(15.625 / S72(16), 4));
chk("72C 125/32=3.90625", 125 / 32 === 3.90625);
chk("72D S(40)~0.395, S(100)=0.04", close(S72(40), 0.3952847, 1e-6) && close(S72(100), 0.04));
chk("72E coefficient cancels in ratio", close((8000 * 8 ** -2.5) / (8000 * 4 ** -2.5), 2 ** -2.5));

// 8.73  R(m) = A m^0.75, R(16)-R(1) = 112
const A73 = 112 / (16 ** 0.75 - 1);
const R73 = (m) => A73 * m ** 0.75;
chk("73A A=16", close(A73, 16));
chk("73A 16^0.75=8, R(1)=16, R(16)=128, gap 112", close(16 ** 0.75, 8) && close(R73(1), 16) && close(R73(16), 128) && close(R73(16) - R73(1), 112));
chk("73B R(81)=432, 81^0.75=27", close(R73(81), 432) && close(81 ** 0.75, 27));
chk("73B ratio (81/16)^0.75=27/8=3.375", close((81 / 16) ** 0.75, 3.375) && close(128 * 3.375, 432));
chk("73C R(m)/m at 1 is 16, at 16 is 8 (exactly half)", close(R73(1) / 1, 16) && close(R73(16) / 16, 8));
chk("73D R=250 => m=2.5^4=39.0625 > 30", close((250 / 16) ** (4 / 3), 39.0625) && close(R73(39.0625), 250) && 39.0625 > 30);
chk("73D 15.625=2.5^3", close(2.5 ** 3, 15.625));
chk("73E 2*R(16)=256 > R(32)~215.3", close(2 * R73(16), 256) && close(R73(32), 215.2694, 1e-5) && 256 > R73(32));
chk("73E difference ~41", close(2 * R73(16) - R73(32), 40.73, 1e-3));
chk("73E 2^0.75~1.682", close(2 ** 0.75, 1.681792, 1e-6));

// 8.74  Q(r) = K r^4, Q(0.5)=2
const K74 = 2 / 0.5 ** 4;
const Q74 = (r) => K74 * r ** 4;
chk("74A K=32, 0.5^4=0.0625", K74 === 32 && 0.5 ** 4 === 0.0625);
chk("74B Q(1)=32 and 2^4=16", Q74(1) === 32 && close(Q74(1) / Q74(0.5), 16));
chk("74C 1.1^4=1.4641 => +46.41%", close(1.1 ** 4, 1.4641, 1e-12));
chk("74C Q(0.55)~2.928", close(Q74(0.55), 2.9282, 1e-4) && close(Q74(0.55) / Q74(0.5), 1.4641, 1e-9));
chk("74D halving gives 1/16, Q(0.25)=0.125", close(Q74(0.25) / Q74(0.5), 1 / 16) && close(Q74(0.25), 0.125));
chk("74E doubling flow needs r=0.125^(1/4)~0.5946 (+18.9%)", close(0.125 ** 0.25, 0.5946035575, 1e-9) && close(Q74(0.125 ** 0.25), 4) && close(2 ** 0.25, 1.189207, 1e-6));
chk("74E sqrt(2)-1 ~ 41.4%", close(Math.SQRT2 - 1, 0.414213, 1e-6));

// 8.75  H(d) = 720 d^-2
const H75 = (d) => 720 / d ** 2;
chk("75A H(6)=20, H(1)=720, H(2)=180", H75(6) === 20 && H75(1) === 720 && H75(2) === 180);
chk("75B barrier: 720/5=144 => d=12", 720 / 5 === 144 && Math.sqrt(144) === 12 && H75(12) === 5);
chk("75C doubling quarters", close(H75(12) / H75(6), 0.25) && close(H75(6) / H75(3), 0.25));
chk("75D H(3)=80 (not 40)", H75(3) === 80 && close(H75(3) / H75(6), 4));
chk("75E H(100)=0.072, H(1000)=0.00072", close(H75(100), 0.072) && close(H75(1000), 0.00072));

// 8.76  r(t) = 2 t^(1/3); S = 4 pi r^2; V = (4/3) pi r^3
const r76 = (t) => 2 * Math.cbrt(t);
const S76 = (t) => 4 * Math.PI * r76(t) ** 2;
const V76 = (t) => (4 / 3) * Math.PI * r76(t) ** 3;
chk("76A V(t) = (32pi/3) t", close(V76(8), (32 * Math.PI / 3) * 8) && close(V76(16), (32 * Math.PI / 3) * 16));
chk("76A V(16)/V(8)=2", close(V76(16) / V76(8), 2));
chk("76A V(8)~268.1, V(16)~536.2", close(V76(8), 268.0826, 1e-4) && close(V76(16), 536.1651, 1e-4));
chk("76B S(t) = 16 pi t^(2/3)", close(S76(8), 16 * Math.PI * 8 ** (2 / 3)) && close(S76(8), 201.0619, 1e-4));
chk("76C 2^(1/3)~1.2599, r(16)~5.04", close(2 ** (1 / 3), 1.259921, 1e-6) && close(r76(16), 5.0397, 1e-4));
chk("76C r doubles at 8x time: r(64)=8", close(r76(64), 8) && close(r76(8), 4));
chk("76D r(8)=4 (not 6); r=6 at t=27", close(r76(8), 4) && close(r76(27), 6));
chk("76E S/V = 1.5 t^(-1/3) = 3/r", close(S76(8) / V76(8), 0.75) && close(S76(64) / V76(64), 0.375) && close(S76(8) / V76(8), 3 / r76(8)));
chk("76E ratio halves 8 -> 64", close((S76(64) / V76(64)) / (S76(8) / V76(8)), 0.5));
chk("76 scale 2^(2/3)~1.587", close(2 ** (2 / 3), 1.587401, 1e-6));

// 8.77  m(l) = 2.7 l^3 kg, l in metres; L = 100 l cm
const m77 = (l) => 2.7 * l ** 3;
const mKg = (L) => 2.7e-6 * L ** 3;
const mG = (L) => 0.0027 * L ** 3;
chk("77A 2.7/100^3 = 2.7e-6", close(2.7 / 100 ** 3, 2.7e-6));
chk("77A m(2 m)=21.6 = mKg(200)", close(m77(2), 21.6) && close(mKg(200), 21.6));
chk("77B wrong /100 gives 0.027 => 216000 kg (1e4 too big)", close(0.027 * 200 ** 3, 216000) && close(216000 / 21.6, 1e4));
chk("77C grams coefficient is 2.7e-3 not 2.7e-6", close(1000 * 2.7e-6, 0.0027) && close(mG(200), 21600));
chk("77D m(0.5 m)=0.3375 kg = 337.5 g", close(m77(0.5), 0.3375) && close(mKg(50), 0.3375) && close(mG(50), 337.5));
chk("77E ratio 8 in every unit system", close(m77(2) / m77(1), 8) && close(mG(2 * 30) / mG(30), 8) && close(mKg(200) / mKg(100), 8) && close(m77(1), 2.7));

// 8.78  P(n) = A n^r from 4^r=8, 9^r=27, P(4)=40
const r78 = Math.log(8) / Math.log(4);
const A78 = 40 / 4 ** r78;
const P78 = (n) => A78 * n ** r78;
chk("78A r=1.5 from 4^r=8", close(r78, 1.5) && close(4 ** 1.5, 8));
chk("78A ln8/ln4 ~ 2.0794/1.3863", close(Math.log(8), 2.0794, 1e-4) && close(Math.log(4), 1.3863, 1e-4));
chk("78B second ratio 9^1.5=27 agrees", close(9 ** 1.5, 27));
chk("78B 16^1.5 = 64 = 8*8", close(16 ** 1.5, 64));
chk("78C A=5, P(4)=40", close(A78, 5) && close(P78(4), 40));
chk("78D P(16)=320 = 40*8", close(P78(16), 320) && close(40 * 8, 320));
chk("78E P(9)=135 and 27^(2/3)=9", close(P78(9), 135) && close(27 ** (2 / 3), 9) && close(P78(1), 5));

/* ---------- report ---------- */
console.log(num.join("\n"));
console.log("\ntasks:", BATCH.length);
console.log("difficulties:", BATCH.map((t) => t.difficulty_level).join(" "));
console.log("true counts:", BATCH.map((t) => t.answer_key.filter(Boolean).length).join(" "));
console.log("min explanation chars:", Math.min(...BATCH.flatMap((t) => t.tactical_explanations.map((e) => e.length))));
console.log("min display eqs per explanation:", Math.min(...BATCH.flatMap((t) => t.tactical_explanations.map((e) => (e.match(/\$\$/g) || []).length / 2))));
console.log("min overview chars:", Math.min(...BATCH.map((t) => t.solution_overview.length)));
console.log("\n" + (problems.length ? "PROBLEMS:\n" + problems.join("\n") : "NO PROBLEMS FOUND"));
