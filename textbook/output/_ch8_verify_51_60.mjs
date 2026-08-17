// Independent numeric verification of every claim planned for Ch8 tasks 8.51-8.60.
const out = [];
const chk = (label, got, want, tol = 1e-9) => {
  const ok = Math.abs(got - want) <= tol * Math.max(1, Math.abs(want));
  out.push(`${ok ? "OK  " : "FAIL"} ${label}: got ${got}, want ${want}`);
};

// 8.51 weld strength S(p)=A p^k ; S(4)=40, S(9)=135
chk("51 ratio 135/40", 135 / 40, 3.375);
const k51 = Math.log(135 / 40) / Math.log(9 / 4);
chk("51 exponent", k51, 1.5, 1e-12);
const A51 = 40 / Math.pow(4, 1.5);
chk("51 coefficient", A51, 5);
chk("51 check S(9)", A51 * Math.pow(9, 1.5), 135);
chk("51 S(16)", A51 * Math.pow(16, 1.5), 320);
chk("51 p for 400 N", Math.pow(400 / A51, 2 / 3), 18.566355, 1e-6);
chk("51 doubling factor", Math.pow(2, 1.5), 2.828427, 1e-6);
chk("51 doubling pct", (Math.pow(2, 1.5) - 1) * 100, 182.842712, 1e-6);
chk("51 S(8)", A51 * Math.pow(8, 1.5), 113.137085, 1e-6);
chk("51 p for 5000 N", Math.pow(5000 / A51, 2 / 3), 100);
chk("51 S(100)", A51 * Math.pow(100, 1.5), 5000);

// 8.52 holding power H(m)=A m^(2/3) kg-based ; H(8)=24
const A52 = 24 / Math.pow(8, 2 / 3);
chk("52 coefficient kg", A52, 6);
chk("52 tonne factor 1000^(2/3)", Math.pow(1000, 2 / 3), 100);
chk("52 tonne coefficient", A52 * Math.pow(1000, 2 / 3), 600);
chk("52 tonne law at 0.008 t", 600 * Math.pow(0.008, 2 / 3), 24);
chk("52 0.008^(2/3)", Math.pow(0.008, 2 / 3), 0.04);
chk("52 wrong coeff 6000 at 0.008t", 6000 * Math.pow(0.008, 2 / 3), 240);
chk("52 mass for 150 kN", Math.pow(150 / A52, 3 / 2), 125);
chk("52 ratio route 150/24", 150 / 24, 6.25);
chk("52 6.25^1.5", Math.pow(6.25, 1.5), 15.625);
chk("52 8*15.625", 8 * 15.625, 125);
chk("52 2^(2/3)", Math.pow(2, 2 / 3), 1.587401, 1e-6);

// 8.53 throughput T(d)=A d^-2 ; T(4)=50 ; floor 8
const A53 = 50 * 16;
chk("53 coefficient", A53, 800);
chk("53 T(8)", A53 / 64, 12.5);
chk("53 reliable radius", Math.sqrt(A53 / 8), 10);
chk("53 T(9)", A53 / 81, 9.876543, 1e-6);
chk("53 T(11)", A53 / 121, 6.611570, 1e-6);
chk("53 T(25)", A53 / 625, 1.28);
chk("53 cross-check 8/2.5^2", 8 / Math.pow(2.5, 2), 1.28);
chk("53 coeff for radius 30", 8 * 900, 7200);
chk("53 7200/800", 7200 / 800, 9);
chk("53 radius if coeff x3", Math.sqrt(3 * A53 / 8), 17.320508, 1e-6);

// 8.54 gill area G(m)=A m^(3/4) ; G(256)=512
chk("54 256^(3/4)", Math.pow(256, 0.75), 64);
const A54 = 512 / Math.pow(256, 0.75);
chk("54 coefficient", A54, 8);
chk("54 per gram at 16", A54 * Math.pow(16, -0.25), 4);
chk("54 G(16)/16", (A54 * Math.pow(16, 0.75)) / 16, 4);
chk("54 G(81)/81", (A54 * Math.pow(81, 0.75)) / 81, 8 / 3, 1e-9);
chk("54 2*G(16)", 2 * A54 * Math.pow(16, 0.75), 128);
chk("54 G(32)", A54 * Math.pow(32, 0.75), 107.634701, 1e-6);
chk("54 32^(3/4)", Math.pow(32, 0.75), 13.454343, 1e-6);
chk("54 2^(3/4)", Math.pow(2, 0.75), 1.681793, 1e-6);
chk("54 mass for 216", Math.pow(216 / A54, 4 / 3), 81);
chk("54 G(81)", A54 * Math.pow(81, 0.75), 216);
chk("54 16^(3/4)", Math.pow(16, 0.75), 8);
chk("54 G(1)", A54 * 1, 8);
chk("54 G(16)", A54 * Math.pow(16, 0.75), 64);

// 8.55 curing strength S(t)=A sqrt(t) ; S(9)-S(4)=5
const A55 = 5 / (Math.sqrt(9) - Math.sqrt(4));
chk("55 coefficient", A55, 5);
chk("55 S(4)", A55 * 2, 10);
chk("55 S(9)", A55 * 3, 15);
chk("55 gap", A55 * 3 - A55 * 2, 5);
chk("55 S(16)", A55 * 4, 20);
chk("55 quadruple factor", Math.sqrt(4), 2);
chk("55 t for 30 MPa", Math.pow(30 / A55, 2), 36);
chk("55 S(36)", A55 * 6, 30);
chk("55 pct 4->9", ((A55 * 3 - A55 * 2) / (A55 * 2)) * 100, 50);
chk("55 (9/4)^0.5", Math.pow(9 / 4, 0.5), 1.5);

// 8.56 deflection y(L)=A L^k ; (3,18) (6,72) (9,150)
const k56 = Math.log(72 / 18) / Math.log(2);
chk("56 exponent", k56, 2, 1e-12);
const A56 = 18 / 9;
chk("56 coefficient", A56, 2);
chk("56 check y(6)", A56 * 36, 72);
chk("56 predicted y(9)", A56 * 81, 162);
chk("56 shortfall", 162 - 150, 12);
chk("56 shortfall pct", (12 / 162) * 100, 7.407407, 1e-6);
chk("56 rescaled coeff", 150 / 81, 1.851852, 1e-6);
chk("56 rescaled y(3)", (150 / 81) * 9, 16.666667, 1e-6);
chk("56 rescaled y(6)", (150 / 81) * 36, 66.666667, 1e-6);
chk("56 rescale factor", 150 / 162, 0.925926, 1e-6);
chk("56 ratio 150/18", 150 / 18, 8.333333, 1e-6);
chk("56 ln 8.3333", Math.log(150 / 18), 2.120264, 1e-6);
chk("56 ln 3", Math.log(3), 1.098612, 1e-6);
chk("56 two-point exponent", Math.log(150 / 18) / Math.log(3), 1.929947, 1e-6);
out.push(`INFO 56 two-point exponent below 2? ${Math.log(150 / 18) / Math.log(3) < 2}`);

// 8.57 mast steel M(h)=A h^k ; +20% h -> +72.8% M ; M(10)=500
chk("57 1.2^3", Math.pow(1.2, 3), 1.728);
const k57 = Math.log(1.728) / Math.log(1.2);
chk("57 exponent", k57, 3, 1e-12);
const A57 = 500 / Math.pow(10, 3);
chk("57 coefficient", A57, 0.5);
chk("57 M(12)", A57 * Math.pow(12, 3), 864);
chk("57 864/500", 864 / 500, 1.728);
chk("57 triple factor", Math.pow(3, 3), 27);
chk("57 M(30)", A57 * Math.pow(30, 3), 13500);
chk("57 1.1^3", Math.pow(1.1, 3), 1.331);
chk("57 M(11)", A57 * Math.pow(11, 3), 665.5);
chk("57 M(11)/M(10)", (A57 * Math.pow(11, 3)) / 500, 1.331);

// 8.58 energy E(q)=A q^0.6 ; E(32)=40 ; average = E/q
chk("58 32^0.6", Math.pow(32, 0.6), 8, 1e-12);
const A58 = 40 / Math.pow(32, 0.6);
chk("58 coefficient", A58, 5, 1e-12);
chk("58 avg at 32", 40 / 32, 1.25);
chk("58 avg law at 32", A58 * Math.pow(32, -0.4), 1.25, 1e-12);
chk("58 wrong avg law at 32", A58 * Math.pow(32, 0.4), 20, 1e-12);
chk("58 32^0.4", Math.pow(32, 0.4), 4, 1e-12);
chk("58 avg at 1", A58 * 1, 5, 1e-12);
chk("58 2^0.6", Math.pow(2, 0.6), 1.515717, 1e-6);
chk("58 2^0.6 pct", (Math.pow(2, 0.6) - 1) * 100, 51.571657, 1e-6);
chk("58 64^0.6", Math.pow(64, 0.6), 12.125733, 1e-6);
chk("58 E(64)", A58 * Math.pow(64, 0.6), 60.628664, 1e-6);
chk("58 1024^0.6", Math.pow(1024, 0.6), 64, 1e-9);
chk("58 E(1024)", A58 * Math.pow(1024, 0.6), 320, 1e-9);
chk("58 avg at 1024", 320 / 1024, 0.3125);

// 8.59 chain V(r)=A1 r^1.5 ; P(V)=A2 V^(2/3) ; V(4)=64, P(27)=27
chk("59 4^1.5", Math.pow(4, 1.5), 8);
const A1 = 64 / Math.pow(4, 1.5);
chk("59 A1", A1, 8);
chk("59 27^(2/3)", Math.pow(27, 2 / 3), 9);
const A2 = 27 / Math.pow(27, 2 / 3);
chk("59 A2", A2, 3);
const P = (r) => A2 * Math.pow(A1 * Math.pow(r, 1.5), 2 / 3);
chk("59 V(9)", A1 * Math.pow(9, 1.5), 216);
chk("59 216^(2/3)", Math.pow(216, 2 / 3), 36);
chk("59 P at r=9", P(9), 108);
chk("59 composed coeff 8^(2/3)", Math.pow(8, 2 / 3), 4);
chk("59 P(r)=12r at r=4", P(4), 48);
chk("59 P(r)=12r at r=8", P(8), 96);
chk("59 P(r)=12r at r=1", P(1), 12);
chk("59 V(4) energy via P(64)", A2 * Math.pow(64, 2 / 3), 48);
chk("59 doubling factor", P(2 * 5) / P(5), 2);
chk("59 claimed 2^(13/6)", Math.pow(2, 3 / 2) * Math.pow(2, 2 / 3), 4.489848, 1e-6);
chk("59 P(9)/9", P(9) / 9, 12);

// 8.60 jack capacity C(d)=A d^2 ; C(4)=80 ; cap 320
const A60 = 80 / 16;
chk("60 coefficient", A60, 5);
chk("60 C(6)", A60 * 36, 180);
chk("60 ratio route", 80 * Math.pow(1.5, 2), 180);
chk("60 d at cap", Math.sqrt(320 / A60), 8);
chk("60 C(7)", A60 * 49, 245);
chk("60 C(8)", A60 * 64, 320);
chk("60 C(9)", A60 * 81, 405);
chk("60 405/320", 405 / 320, 1.265625);
chk("60 1.125^2", Math.pow(1.125, 2), 1.265625);
chk("60 C(2)", A60 * 4, 20);
chk("60 halving factor", (A60 * 4) / (A60 * 16), 0.25);

console.log(out.join("\n"));
const fails = out.filter((l) => l.startsWith("FAIL"));
console.log(`\n${out.length} checks, ${fails.length} failures`);
if (fails.length) process.exitCode = 1;
