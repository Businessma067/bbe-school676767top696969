/**
 * Tier 4 and tier 5 templates — long exam prose + complex equations (photo style).
 */

export function initHardTemplates(H) {
  const { hdr, mkExpl, phrase, pickClaim, pm, backFrom } = H;

  // ═══ 4.1 TIER 4 — multi-step word stories ═══════════════════════════════

  function lin4PrizeTax(slot, isTrue) {
    const total = 12200 + (slot % 6) * 800;
    const a = total / 2.44;
    const gross2 = Math.round(0.8 * a);
    const net = Math.round(gross2 * 0.85);
    const claim = pickClaim(net, isTrue);
    return {
      key: `4prize-${total}`,
      statement: phrase(slot, `A prize fund of $${total}$ EUR is awarded to three finishers only: $2$nd place receives $80\\%$ of $1$st place, and $3$rd place receives $80\\%$ of $2$nd place (the entire fund is distributed; nothing remains). Each winner then pays $15\\%$ tax on their own gross prize. After tax, the $2$nd-place winner receives $${claim}$ EUR net.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$2.44a=${total}$$, gross $2$nd $=${gross2}$, net $0.85\\times${gross2}=${net}$.`]),
    };
  }

  function lin4MotionMeet(slot, isTrue) {
    const D = 132 + (slot % 5) * 12;
    const v1 = 48;
    const v2 = 72;
    const gap = D - 24;
    const closeMin = Math.round((gap / 120) * 60);
    const later = closeMin - 30;
    const claim = pickClaim(later, isTrue);
    return {
      key: `4motion-${D}`,
      statement: phrase(slot, `Towns $X$ and $Y$ are $${D}$ km apart. At noon a car leaves $X$ toward $Y$ at $${v1}$ km/h. Thirty minutes later a second car leaves $Y$ toward $X$ at $${v2}$ km/h; neither stops en route. At the meeting instant, the second car has been driving for exactly $${claim}$ minutes since its $12{:}30$ pm departure.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Gap after head start $${gap}$ km; close at $120$ km/h → $${closeMin}$ min after noon; second car: $${later}$ min.`]),
    };
  }

  function lin4TripleMix(slot, isTrue) {
    const mix = Math.round(((14 * 2 + 8 * 3 + 4 * 1) / 6) * 10) / 10;
    const claim = pickClaim(mix, isTrue, false);
    return {
      key: `4mix-${slot % 9}`,
      statement: phrase(slot, `A chemist pours $2$ L of $14\\%$ acid, then $3$ L of $8\\%$ acid, then $1$ L of $4\\%$ acid into one flask (volumes add; no spillage). The final concentration by volume is $${claim}\\%$.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{14\\cdot2+8\\cdot3+4\\cdot1}{6}=${mix}\\%$$`]),
    };
  }

  function lin4DiscountVat(slot, isTrue) {
    const p0 = 300 + (slot % 4) * 40;
    const final = Math.round(p0 * 0.75 * 0.9 * 1.2);
    const claim = pickClaim(final, isTrue);
    return {
      key: `4dv-${p0}`,
      statement: phrase(slot, `A device lists at $${p0}$ EUR. The retailer applies a $25\\%$ discount, then an additional $10\\%$ off the reduced price. VAT at $20\\%$ is charged on the discounted price only. The customer pays $${claim}$ EUR.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$${p0}\\times0.75\\times0.9\\times1.2=${final}$$`]),
    };
  }

  function lin4Chase(slot, isTrue) {
    const head = 30 + (slot % 3) * 10;
    const v1 = 60;
    const v2 = 90;
    const headKm = v1 * head / 60;
    const catchMin = Math.round((headKm / 30) * 60);
    const claim = pickClaim(catchMin, isTrue);
    return {
      key: `4chase-${head}`,
      statement: phrase(slot, `Vehicle $A$ leaves a depot at $8{:}00$ at $${v1}$ km/h. Vehicle $B$ leaves the same depot at $8{:}${String(head).padStart(2, "0")}$ at $${v2}$ km/h along the same road in pursuit. From $B$'s departure until $B$ catches $A$, vehicle $B$ runs for $${claim}$ minutes.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Head start $${headKm}$ km; gap closes at $30$ km/h → $${catchMin}$ min.`]),
    };
  }

  function lin4ExamMean(slot, isTrue) {
    const mean = 77 + (slot % 4);
    const s1 = 72 + (slot % 3) * 2;
    const s3 = 81 + (slot % 5);
    const s4 = mean + 2;
    const s2 = 4 * mean - s1 - s3 - s4;
    const claim = pickClaim(s2, isTrue);
    return {
      key: `4mean-${mean}`,
      statement: phrase(slot, `On a four-problem test the class average is $${mean}$ points. Student $P$ scored $${s1}$, student $R$ scored $${s3}$, and student $S$ scored exactly $2$ points above the average. Student $Q$'s score was $${claim}$ points.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$Q=4\\cdot${mean}-${s1}-${s3}-${s4}=${s2}$$`]),
    };
  }

  const LIN_4 = [lin4PrizeTax, lin4MotionMeet, lin4TripleMix, lin4DiscountVat, lin4Chase, lin4ExamMean];

  // ═══ 4.1 TIER 5 — photo-length stories ═══════════════════════════════════

  function lin5PhotoArea(slot, isTrue) {
    const d = 3;
    const s = 5;
    const A = s * (s + d);
    const claim = pickClaim(5, isTrue);
    return {
      key: `5area-${A}`,
      statement: `If one side of a rectangle is by $${d}$ cm longer than the other one and the rectangle's area is $${A}$ cm$^{2}$, then the length of the longer side is $${claim}$ cm.`,
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x(x+${d})=${A}$$`, `$$x=${s}$$, longer side $${s + d}$ cm.`]),
    };
  }

  function lin5PhotoCar(slot, isTrue) {
    const st = backFrom(15, 0, 105);
    const claim = isTrue ? pm(st.h, st.m) : pm(2, 45);
    return {
      key: `5car-112`,
      statement: `A car travels at an average speed of $64$ km/h. At $3$ pm, it has traveled a total distance of $112$ km. Then it started traveling at ${claim}.`,
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$t=112/64=1.75$$ h $=1$ h $45$ min → start ${pm(st.h, st.m)}.`]),
    };
  }

  function lin5PhotoVinegar(slot, isTrue) {
    const claim = pickClaim(0.6, isTrue, false);
    return {
      key: `5vinegar`,
      statement: `A recipe calls for $5\\%$ vinegar. If the cook only has $1$ litre of $8\\%$ vinegar, he needs to mix it with $${claim}$ litres of water to get the right concentration.`,
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$0.08/(1+w)=0.05$$`, `$$w=0.6$$`]),
    };
  }

  function lin5PhotoPrize(slot, isTrue) {
    const claim = pickClaim(4000, isTrue);
    return {
      key: `5prize12200`,
      statement: `A prize money of $12200$ EUR is supposed to be split among the winners in a way that the $2$nd placed obtains $80\\%$ of the amount the $1$st placed obtains, and the $3$rd placed obtains $80\\%$ of the $2$nd placed. Then the prize for $2$nd place is $${claim}$ EUR.`,
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$2.44a=12200$$`, `$$a=5000$$`, `$$2\\text{nd}=4000$$ EUR.`]),
    };
  }

  function lin5BorderPath(slot, isTrue) {
    const w = 10 + (slot % 4);
    const inner = w * (w + 8);
    const path = Math.round((w + 3) * (w + 11) - inner);
    const claim = pickClaim(path, isTrue);
    return {
      key: `5path-${w}`,
      statement: phrase(slot, `A rectangular sports field measures $${w}$ m by $${w + 8}$ m. A uniform $1.5$ m maintenance strip is paved around the entire field (outer edge is rectangular; the field itself is not paved). The paved strip alone covers $${claim}$ m$^{2}$.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Outer $(${w}+3)(${w}+11)$ minus inner $${inner}$.`]),
    };
  }

  function lin5RoundTrip(slot, isTrue) {
    const real = 5;
    const trap = 4.8;
    const claim = pickClaim(Math.round(trap * 10) / 10, isTrue, false);
    return {
      key: `5rt-30`,
      statement: phrase(slot, `A cyclist rides $30$ km to a village at $15$ km/h and returns at $10$ km/h over the same road. A spectator incorrectly claims the round trip took as long as riding $60$ km at the average of the two speeds ($12.5$ km/h), i.e. $${claim}$ hours in total.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Actual $3+2=5$ h; mean-speed trap gives $4.8$ h.`]),
    };
  }

  function lin5PoolDrain(slot, isTrue) {
    const claim = pickClaim(12, isTrue);
    return {
      key: `5pool`,
      statement: phrase(slot, `Inlet $A$ alone fills an empty pool in $4$ hours. Drain $B$ alone empties a full pool in $6$ hours. With both operating from empty (no overflow), the pool is full for the first time after $${claim}$ hours.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{1}{4}-\\frac{1}{6}=\\frac{1}{12}$$`]),
    };
  }

  function lin5FatherSon(slot, isTrue) {
    const claim = pickClaim(20, isTrue);
    return {
      key: `5age`,
      statement: phrase(slot, `A father is $28$ years older than his son. In $8$ years the father will be twice as old as the son will be then. The son is now $${claim}$ years old.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$s+36=2(s+8)$$`, `$$s=20$$`]),
    };
  }

  const LIN_5 = [lin5PhotoArea, lin5PhotoCar, lin5PhotoVinegar, lin5PhotoPrize, lin5BorderPath, lin5RoundTrip, lin5PoolDrain, lin5FatherSon];

  // ═══ 4.2 TIER 4/5 ═══════════════════════════════════════════════════════

  function quad4Path(slot, isTrue) {
    const w = 9 + (slot % 3);
    const path = (w + 2) * (w + 10) - w * (w + 8);
    const claim = pickClaim(path, isTrue);
    return {
      key: `4qpath-${w}`,
      statement: phrase(slot, `A $1$ m wide running track borders a $${w}$ m by $${w + 8}$ m lawn on all sides (track outside the lawn). The track surface area alone is $${claim}$ m$^{2}$.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$(${w}+2)(${w}+10)-${w * (w + 8)}=${path}$$`]),
    };
  }

  function quad5AreaWord(slot, isTrue) {
    const d = 4 + (slot % 3);
    const s = 6 + (slot % 4);
    const A = s * (s + d);
    const claim = pickClaim(s + d, isTrue);
    return {
      key: `5qarea-${A}`,
      statement: phrase(slot, `A rectangular plot has area $${A}$ m$^{2}$. One side is exactly $${d}$ m shorter than the adjacent side (both sides measured in whole metres). The longer side is $${claim}$ m.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x(x+${d})=${A}$$`, `$$x=${s}$$, longer $${s + d}$ m.`]),
    };
  }

  function quad5Vieta(slot, isTrue) {
    const r1 = 5 + (slot % 4);
    const r2 = r1 + 7;
    const p = r1 * r2;
    const claim = pickClaim(p, isTrue);
    return {
      key: `5qvieta-${r1}-${r2}`,
      statement: phrase(slot, `Two positive numbers differ by $${r2 - r1}$ and are roots of $t^2-${r1 + r2}t+${p}=0$. Their product equals $${claim}$.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Vieta: product $=${p}$.`]),
    };
  }

  const QUAD_4 = [quad4Path];
  const QUAD_5 = [quad5AreaWord, quad5Vieta];

  // ═══ 4.3 TIER 4/5 ═══════════════════════════════════════════════════════

  function rat4Train(slot, isTrue) {
    const sec = Math.round((500 / 180) * 3.6);
    const claim = pickClaim(sec, isTrue);
    return {
      key: `4train`,
      statement: phrase(slot, `Two trains $180$ m and $320$ m long approach each other at $72$ km/h and $108$ km/h on parallel tracks. From the instant their fronts meet until they have completely passed each other takes $${claim}$ seconds.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Relative $180$ km/h, length $500$ m.`]),
    };
  }

  function rat5WorkDrain(slot, isTrue) {
    const claim = pickClaim(12, isTrue);
    return {
      key: `5ratwd`,
      statement: phrase(slot, `Pipe $A$ fills a tank in $4$ hours; pipe $B$ empties a full tank in $6$ hours. With both open on an empty tank, the tank becomes full for the first time after $${claim}$ hours.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{1}{4}-\\frac{1}{6}=\\frac{1}{12}$$`]),
    };
  }

  function rat5Ladder(slot, isTrue) {
    const claim = pickClaim(5, isTrue);
    return {
      key: `5lad`,
      statement: phrase(slot, `A ladder reaches $3$ m up a wall when its foot is $4$ m from the wall (right angle at the ground). The ladder length is $${claim}$ m.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$L=\\sqrt{9+16}=5$$`]),
    };
  }

  const RAT_4 = [rat4Train];
  const RAT_5 = [rat5WorkDrain, rat5Ladder];

  // ═══ 4.4 TIER 4/5 — complex log equations like photo E ═══════════════════

  /** Build decadic log exam equation; returns { statement, logx, x, bound, smaller } */
  function logExamParams(slot) {
    const presets = [
      { k: 3, C: "16/3", bound: 5, logx: 1 },
      { k: 4, C: "5", bound: 8, logx: 0.5 },
      { k: 5, C: "10", bound: 12, logx: 0.4 },
      { k: 3, C: "8", bound: 20, logx: 0.5 },
      { k: 6, C: "14", bound: 6, logx: 0.6 },
    ];
    const p = presets[slot % presets.length];
    const x = Math.pow(10, p.logx);
    return { ...p, x, smaller: x < p.bound };
  }

  function log4Complex(slot, isTrue) {
    const p = logExamParams(slot + 1);
    const cmp = p.smaller ? "smaller" : "not smaller";
    const claimWord = isTrue ? cmp : p.smaller ? "not smaller" : "smaller";
    const forms = [
      `The solution of $\\log \\sqrt[${p.k}]{x} + \\log \\frac{1}{x^{${p.k}}} - \\log x^2 + ${p.C === "16/3" ? "\\frac{16}{3}" : p.C} = \\frac{\\log x^2}{1 + \\log 100}$, where $\\log x$ denotes the decadic logarithm of $x$, is ${claimWord} than $${p.bound}$.`,
      `For decadic logarithms, every admissible root of $\\log(x^{1/${p.k}}) - ${p.k}\\log x - 2\\log x + ${p.C === "16/3" ? "\\frac{16}{3}" : p.C} = \\frac{2\\log x}{3}$ satisfies $x ${claimWord === "smaller" ? "<" : "\\ge"} ${p.bound}$.`,
    ];
    const actualSmaller = p.smaller;
    const stmtTrue = (claimWord === "smaller" && actualSmaller) || (claimWord === "not smaller" && !actualSmaller);
    return {
      key: `4log-${p.k}-${p.bound}-${slot}`,
      statement: phrase(slot, forms[slot % forms.length]),
      expl: mkExpl(isTrue, [
        hdr("?", isTrue).replace("?", "{L}"),
        "",
        `Use $\\log 100=2$. Combine left-hand logs:`,
        `$$\\log x = ${p.logx}$$`,
        `$$x = 10^{${p.logx}} = ${Math.round(p.x * 100) / 100}$$`,
        actualSmaller ? `$x < ${p.bound}$.` : `$x \\ge ${p.bound}$.`,
      ]),
      forceTrue: stmtTrue,
    };
  }

  function log5PhotoE(slot, isTrue) {
    const p = logExamParams(0);
    const claimWord = isTrue ? "smaller" : "not smaller";
    const actual = p.smaller;
    const stmtTrue = (claimWord === "smaller") === actual;
    return {
      key: `5photoE`,
      statement: `The solution of the equation $\\log \\sqrt[3]{x} + \\log \\frac{1}{x^3} - \\log x^2 + \\frac{16}{3} = \\frac{\\log x^2}{1 + \\log 100}$, where $\\log x$ denotes the decadic logarithm of $x$, is ${claimWord} than $5$.`,
      expl: mkExpl(isTrue, [
        hdr("?", isTrue).replace("?", "{L}"),
        "",
        `Domain: $x > 0$. With $\\log 100=2$:`,
        `$$\\left(\\frac{1}{3}-3-2\\right)\\log x + \\frac{16}{3} = \\frac{2}{3}\\log x$$`,
        `$$-\\frac{16}{3}\\log x + \\frac{16}{3} = \\frac{2}{3}\\log x$$`,
        `$$\\log x = 1,\\quad x = 10$$`,
        `$10 \\ge 5$, so the solution is not smaller than $5$.`,
      ]),
      forceTrue: stmtTrue,
    };
  }

  function log5Product(slot, isTrue) {
    const a = 3 + (slot % 3);
    const root = 20;
    const claim = pickClaim(root, isTrue);
    return {
      key: `5logprod-${a}`,
      statement: phrase(slot, `The equation $\\log x + \\log(x+${a}) = 1$ (decadic logarithms; domain $x > 0$ and $x > -${a}$) has the unique positive solution $x = ${claim}$.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x(x+${a})=10$$`, `$$x=${root}$$`]),
    };
  }

  function exp5Subst(slot, isTrue) {
    const u1 = 3;
    const u2 = 7;
    const s = u1 + u2;
    const pr = u1 * u2;
    const claim = pickClaim(2, isTrue);
    return {
      key: `5esub-${s}`,
      statement: phrase(slot, `A population model reduces to $e^{2x} - ${s}e^x + ${pr} = 0$ with substitution $u = e^x > 0$. The model admits $${claim}$ distinct real values of $x$.`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$u^2-${s}u+${pr}=0$$`, `$$(u-3)(u-7)=0$$`, `Two positive $u$ → two real $x$.`]),
    };
  }

  function exp4Compound(slot, isTrue) {
    const p = 5000;
    const r = 4;
    const y = 8;
    const bal = Math.round(p * Math.pow(1.04, y));
    const claim = pickClaim(bal, isTrue);
    return {
      key: `4comp-${p}`,
      statement: phrase(slot, `$${p}$ EUR is invested at $${r}\\%$ per annum compounded annually with no withdrawals. After $${y}$ full years the balance is $${claim}$ EUR (bank rounds to the nearest euro).`),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$${p}(1.04)^${y}=${bal}$$`]),
    };
  }

  const EXP_4 = [log4Complex, exp4Compound];
  const EXP_5 = [log5PhotoE, log5Product, exp5Subst, log4Complex];

  // ═══ TIER 1–2 basic (short) ═══════════════════════════════════════════════

  function lin1Price(slot, isTrue) {
    const x = 4 + (slot % 4);
    const total = 2 * x + 6;
    return {
      key: `1price-${total}`,
      statement: `A shop doubles a price and adds $6$ EUR. The till shows $${total}$ EUR. The original price was $${pickClaim(x, isTrue)}$ EUR.`,
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$2p+6=${total}$$`, `$$p=${x}$$`]),
    };
  }

  function lin2Bill(slot, isTrue) {
    return {
      key: `2bill`,
      statement: `After $7$ EUR is taken off a bill, half the remainder equals $4$ EUR. The original bill was $${pickClaim(15, isTrue)}$ EUR.`,
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{x-7}{2}=4$$`, `$$x=15$$`]),
    };
  }

  const LIN_1 = [lin1Price];
  const LIN_2 = [lin1Price, lin2Bill];

  return { LIN_1, LIN_2, LIN_4, LIN_5, QUAD_4, QUAD_5, RAT_4, RAT_5, EXP_4, EXP_5 };
}
