/**
 * Tier 4 and tier 5 templates — long exam prose + complex equations (photo style).
 */

export function initHardTemplates(H) {
  const { hdr, mkExpl, phrase, pickClaim, claimRoot, claimCount, pm, backFrom } = H;

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
    const d = 2 + (slot % 4);
    const s = 4 + (slot % 7);
    const A = s * (s + d);
    const longer = s + d;
    const claim = pickClaim(longer, isTrue);
    return {
      key: `5area-${A}-${slot}`,
      statement: phrase(
        slot,
        `If one side of a rectangle is by $${d}$ cm longer than the other one and the rectangle's area is $${A}$ cm$^{2}$, then the length of the longer side is $${claim}$ cm.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x(x+${d})=${A}$$`, `$$x=${s}$$, longer side $${longer}$ cm.`]),
    };
  }

  function lin5PhotoCar(slot, isTrue) {
    const v = 56 + (slot % 5) * 8;
    const hrs = 1.25 + (slot % 4) * 0.25;
    const dist = Math.round(v * hrs);
    const mins = Math.round(hrs * 60);
    const st = backFrom(15, 0, mins);
    const claim = isTrue ? pm(st.h, st.m) : pm(st.h + 1, (st.m + 15) % 60);
    return {
      key: `5car-${v}-${dist}`,
      statement: phrase(
        slot,
        `A car travels at an average speed of $${v}$ km/h. At $3$ pm, it has traveled a total distance of $${dist}$ km. Then it started traveling at ${claim}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$t=${dist}/${v}=${hrs}$$ h → start ${pm(st.h, st.m)}.`]),
    };
  }

  function lin5PhotoVinegar(slot, isTrue) {
    const target = 4 + (slot % 3);
    const have = target + 2 + (slot % 4);
    const w = Math.round(((have / 100 / (target / 100) - 1) * 10)) / 10;
    const claim = pickClaim(w, isTrue, false);
    return {
      key: `5vinegar-${target}-${have}`,
      statement: phrase(
        slot,
        `A recipe calls for $${target}\\%$ vinegar. If the cook only has $1$ litre of $${have}\\%$ vinegar, he needs to mix it with $${claim}$ litres of water to get the right concentration.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{${have / 100}}{1+w}=\\frac{${target}}{100}$$`, `$$w=${w}$$`]),
    };
  }

  function lin5PhotoPrize(slot, isTrue) {
    const total = 10000 + (slot % 8) * 1500;
    const pct = 75 + (slot % 3) * 5;
    const r = pct / 100;
    const second = Math.round((total / (1 + r + r * r)) * r);
    const claim = pickClaim(second, isTrue);
    return {
      key: `5prize-${total}-${pct}`,
      statement: phrase(
        slot,
        `A prize money of $${total}$ EUR is split so that $2$nd place receives $${pct}\\%$ of $1$st and $3$rd receives $${pct}\\%$ of $2$nd (entire fund distributed). Then the prize for $2$nd place is $${claim}$ EUR.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$a(1+${r}+${r * r})=${total}$$`, `$$2\\text{nd}=${second}$$ EUR.`]),
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
    const d = 24 + (slot % 4) * 6;
    const v1 = 12 + (slot % 3) * 3;
    const v2 = 8 + (slot % 2) * 2;
    const real = Math.round((d / v1 + d / v2) * 10) / 10;
    const trap = Math.round((2 * d / (v1 + v2)) * 10) / 10;
    const claim = pickClaim(trap, isTrue, false);
    return {
      key: `5rt-${d}-${v1}-${v2}`,
      statement: phrase(
        slot,
        `A cyclist rides $${d}$ km out at $${v1}$ km/h and returns at $${v2}$ km/h. A spectator claims the round trip equals riding $${2 * d}$ km at the arithmetic mean speed $\\frac{${v1}+${v2}}{2}$ km/h, i.e. $${claim}$ hours total.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Actual $\\frac{${d}}{${v1}}+\\frac{${d}}{${v2}}=${real}$ h; mean-speed trap $${trap}$ h.`]),
    };
  }

  function lin5PoolDrain(slot, isTrue) {
    const fill = 3 + (slot % 4);
    const drain = fill + 2 + (slot % 3);
    const t = Math.round((fill * drain) / (drain - fill) * 10) / 10;
    const claim = pickClaim(t, isTrue, false);
    return {
      key: `5pool-${fill}-${drain}`,
      statement: phrase(
        slot,
        `Inlet $A$ alone fills an empty pool in $${fill}$ hours. Drain $B$ alone empties a full pool in $${drain}$ hours. With both open from empty, the pool is full for the first time after $${claim}$ hours.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{1}{${fill}}-\\frac{1}{${drain}}=\\frac{1}{t}$$`, `$$t=${t}$$`]),
    };
  }

  function lin5FatherSon(slot, isTrue) {
    const gap = 24 + (slot % 5) * 2;
    const ahead = 6 + (slot % 4);
    const son = gap - ahead;
    const bound = Math.max(1, son - 2);
    const claim = isTrue ? `greater than $${bound}$ years old` : `$${pickClaim(son, false)}$ years old`;
    return {
      key: `5age-${gap}-${ahead}`,
      statement: phrase(
        slot,
        `A father is $${gap}$ years older than his son. In $${ahead}$ years the father will be twice as old as the son will be then. The son is now ${claim}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$s+${gap}+${ahead}=2(s+${ahead})$$`, `$$s=${son}$$`]),
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
    const l1 = 150 + (slot % 4) * 30;
    const l2 = 200 + (slot % 3) * 40;
    const v1 = 60 + (slot % 3) * 12;
    const v2 = 90 + (slot % 2) * 18;
    const sec = Math.round(((l1 + l2) / (v1 + v2)) * 3.6);
    const claim = pickClaim(sec, isTrue);
    return {
      key: `4train-${l1}-${l2}-${v1}`,
      statement: phrase(
        slot,
        `Two trains $${l1}$ m and $${l2}$ m long approach each other at $${v1}$ km/h and $${v2}$ km/h. From front meeting to full pass takes $${claim}$ seconds.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Relative $${v1 + v2}$ km/h, length $${l1 + l2}$ m.`]),
    };
  }

  function rat5WorkDrain(slot, isTrue) {
    const fill = 3 + (slot % 3);
    const drain = fill + 2 + (slot % 4);
    const t = Math.round((fill * drain) / (drain - fill) * 10) / 10;
    const claim = pickClaim(t, isTrue, false);
    return {
      key: `5ratwd-${fill}-${drain}`,
      statement: phrase(
        slot,
        `Pipe $A$ fills a tank in $${fill}$ hours; pipe $B$ empties a full tank in $${drain}$ hours. With both open on an empty tank, it is full for the first time after $${claim}$ hours.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{1}{${fill}}-\\frac{1}{${drain}}=\\frac{1}{t}$$`, `$$t=${t}$$`]),
    };
  }

  function rat5Ladder(slot, isTrue) {
    const b = 3 + (slot % 4);
    const h = 4 + (slot % 3);
    const L = Math.round(Math.sqrt(b * b + h * h));
    const claim = pickClaim(L, isTrue);
    return {
      key: `5lad-${b}-${h}`,
      statement: phrase(
        slot,
        `A ladder reaches $${h}$ m up a wall when its foot is $${b}$ m from the wall. The ladder length is $${claim}$ m.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$L=\\sqrt{${b}^2+${h}^2}=${L}$$`]),
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
    const p = logExamParams(slot);
    const claimWord = isTrue ? (p.smaller ? "smaller" : "not smaller") : p.smaller ? "not smaller" : "smaller";
    const actual = p.smaller;
    const stmtTrue = (claimWord === "smaller") === actual;
    const cStr = p.C === "16/3" ? "\\frac{16}{3}" : p.C;
    return {
      key: `5photoE-${p.k}-${p.bound}-${slot}`,
      statement: phrase(
        slot,
        `The solution of $\\log \\sqrt[${p.k}]{x} + \\log \\frac{1}{x^{${p.k}}} - \\log x^2 + ${cStr} = \\frac{\\log x^2}{1 + \\log 100}$ (decadic $\\log$) is ${claimWord} than $${p.bound}$.`
      ),
      expl: mkExpl(isTrue, [
        hdr("?", isTrue).replace("?", "{L}"),
        "",
        `Combine log coefficients → $\\log x = ${p.logx}$, $x = ${Math.round(p.x * 100) / 100}$.`,
        actual ? `$x < ${p.bound}$.` : `$x \\ge ${p.bound}$.`,
      ]),
      forceTrue: stmtTrue,
    };
  }

  function log5Product(slot, isTrue) {
    const a = 2 + (slot % 6);
    const rhs = 1 + (slot % 2);
    const target = Math.pow(10, rhs);
    const root = Math.round(((-a + Math.sqrt(a * a + 4 * target)) / 2) * 100) / 100;
    const cmp = claimRoot(root, isTrue, false);
    return {
      key: `5logprod-${a}-${rhs}-${slot}`,
      statement: phrase(
        slot,
        `Every positive root of $\\log x + \\log(x+${a}) = ${rhs}$ satisfies $x$ ${cmp}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x(x+${a})=10^{${rhs}}$$`, `$$x=${root}$$`]),
    };
  }

  function exp5Subst(slot, isTrue) {
    const u1 = 2 + (slot % 4);
    const u2 = u1 + 4 + (slot % 3);
    const s = u1 + u2;
    const pr = u1 * u2;
    const roots = 2;
    const cmp = claimCount(roots, isTrue);
    return {
      key: `5esub-${s}-${pr}-${slot}`,
      statement: phrase(
        slot,
        `A model reduces to $e^{2x} - ${s}e^x + ${pr} = 0$ with $u = e^x > 0$. There are ${cmp} distinct real values of $x$.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$u^2-${s}u+${pr}=0$$`, `Two positive $u$ → two real $x$.`]),
    };
  }

  function exp4Compound(slot, isTrue) {
    const p = 40 + (slot % 6) * 12;
    const r = 3 + (slot % 4);
    const y = 3 + (slot % 3);
    const bal = Math.round(p * Math.pow(1 + r / 100, y));
    const cmp = claimRoot(y, isTrue);
    return {
      key: `4comp-${p}-${r}-${bal}`,
      statement: phrase(
        slot,
        `Every positive root $t$ of $${p}\\left(1+\\frac{${r}}{100}\\right)^t=${bal}$ satisfies $t$ ${cmp}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `Take logs or test powers → $t=${y}$.`]),
    };
  }

  const EXP_4 = [log4Complex, exp4Compound];
  const EXP_5 = [log5PhotoE, log5Product, exp5Subst, log4Complex];

  // ═══ TIER 1–2 basic (short equation stories, no plug-in claims) ═══════════

  function lin1PriceCmp(slot, isTrue) {
    const x = 5 + (slot % 6);
    const total = 2 * x + 6;
    const bound = x - 2;
    const cmp = isTrue ? `greater than $${bound}$` : `at most $${bound}$`;
    return {
      key: `1price-${total}-${x}`,
      statement: phrase(
        slot,
        `A shop doubles a price and adds a $6$ EUR surcharge; the till shows $${total}$ EUR. The original price is ${cmp} EUR.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$2p+6=${total}$$`, `$$p=${x}$$`, `${x} ${isTrue ? ">" : "≤"} ${bound}.`]),
    };
  }

  function lin1BillCmp(slot, isTrue) {
    const x = 15;
    const bound = 14;
    const cmp = isTrue ? `greater than $${bound}$` : `at most $${bound}$`;
    return {
      key: `1bill-${slot % 7}`,
      statement: phrase(
        slot,
        `After $7$ EUR is taken off a bill, half the remainder equals $4$ EUR. The original bill is ${cmp} EUR.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{x-7}{2}=4$$`, `$$x=${x}$$`, `${x} ${isTrue ? ">" : "≤"} ${bound}.`]),
    };
  }

  function lin1OddSum(slot, isTrue) {
    const n = 9 + (slot % 5) * 2;
    const sum = 3 * n + 6;
    const bound = n + 2;
    const cmp = isTrue ? `greater than $${bound}$` : `at most $${bound}$`;
    return {
      key: `1odd-${sum}-${n}`,
      statement: phrase(
        slot,
        `Three consecutive odd integers add up to $${sum}$. The largest of the three is ${cmp}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$3k+6=${sum}$$`, `$$k=${n}$$`, `Largest $${n + 4}$ ${isTrue ? ">" : "≤"} ${bound}.`]),
    };
  }

  function lin2FracBound(slot, isTrue) {
    const x = 28 + (slot % 4) * 4;
    const bound = 20;
    const cmp = isTrue ? `greater than $${bound}$` : `at most $${bound}$`;
    return {
      key: `2frac-${x}`,
      statement: phrase(
        slot,
        `Four-sevenths of a number exceed two-sevenths of the same number by $16$. The number is ${cmp}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{4}{7}n-\\frac{2}{7}n=16$$`, `$$n=${x}$$`, `${x} ${isTrue ? ">" : "≤"} ${bound}.`]),
    };
  }

  function lin2MeanBound(slot, isTrue) {
    const a = 70 + (slot % 4) * 2;
    const b = 82 + (slot % 3) * 2;
    const mean = 78;
    const c = 3 * mean - a - b;
    const bound = c - 3;
    const cmp = isTrue ? `greater than $${bound}$` : `at most $${bound}$`;
    return {
      key: `2mean-${a}-${b}-${c}`,
      statement: phrase(
        slot,
        `Three test scores average $${mean}$ points; two of them are $${a}$ and $${b}$. The third score is ${cmp}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{${a}+${b}+c}{3}=${mean}$$`, `$$c=${c}$$`, `${c} ${isTrue ? ">" : "≤"} ${bound}.`]),
    };
  }

  const LIN_1 = [lin1PriceCmp, lin1BillCmp, lin1OddSum];
  const LIN_2 = [lin1PriceCmp, lin1BillCmp, lin1OddSum, lin2FracBound, lin2MeanBound];

  return { LIN_1, LIN_2, LIN_4, LIN_5, QUAD_4, QUAD_5, RAT_4, RAT_5, EXP_4, EXP_5 };
}
