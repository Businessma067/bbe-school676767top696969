/**
 * Tier 4 and tier 5 — long exam prose + complex equations (photo style).
 * Small numbers, fractions, no parentheses/hints in statements.
 */

export function initHardTemplates(H) {
  const { hdr, mkExpl, phrase, claimEmbed, claimRoot, claimCount, claimAntiPlug, pm, backFrom, fracStr } = H;

  // ═══ 4.1 TIER 4 ═══════════════════════════════════════════════════════════

  function lin4PrizeTax(slot, isTrue) {
    const total = 48 * (3 + (slot % 4));
    const gross1 = Math.round((total * 25) / 61);
    const gross2 = Math.round((gross1 * 4) / 5);
    const net = Math.round((gross2 * 17) / 20);
    const cmp = isTrue ? claimAntiPlug(net, true) : claimEmbed(net, false);
    return {
      key: `4prize-${total}`,
      statement: phrase(
        slot,
        `A city marathon pays exactly three cash prizes that use the full fund of $${total}$ EUR and leave nothing unallocated. The winner receives amount $W$ EUR. The runner-up receives $\\frac{4}{5}$ of $W$, and third place receives $\\frac{4}{5}$ of the runner-up amount. Before any prize is handed over, $\\frac{3}{20}$ of that person's gross prize is withheld as tax. After tax, the runner-up receives ${cmp} EUR net.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Let $W$ be the winner's gross prize. Then runner-up gross is $\\frac{4}{5}W$ and third gross is $\\frac{16}{25}W$.`,
          `$$W+\\frac{4}{5}W+\\frac{16}{25}W=${total}$$`,
          `$$\\frac{61}{25}W=${total}$$`,
          `$$W=${gross1}$$`,
          `Runner-up gross $=${gross2}$ EUR; net after $\\frac{3}{20}$ tax $=${net}$ EUR.`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  function lin4MotionMeet(slot, isTrue) {
    const D = 84 + (slot % 5) * 12;
    const v1 = 48;
    const v2 = 72;
    const headKm = v1 / 2;
    const gap = D - headKm;
    const closeMin = Math.round((gap / (v1 + v2)) * 60);
    const later = closeMin - 30;
    const cmp = isTrue ? claimAntiPlug(later, true) : claimEmbed(later, false);
    return {
      key: `4motion-${D}`,
      statement: phrase(
        slot,
        `Towns $P$ and $Q$ lie $${D}$ km apart on a straight highway. At noon a car leaves $P$ towards $Q$ at $${v1}$ km/h and keeps constant speed. At $12{:}30$ pm a second car leaves $Q$ towards $P$ at $${v2}$ km/h, also without stopping. When the two cars meet, the second car has been driving for ${cmp} minutes since its $12{:}30$ pm departure.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `In $\\frac{1}{2}$ h the first car covers $${headKm}$ km, leaving $${gap}$ km between the cars.`,
          `$$\\frac{${gap}}{${v1}+${v2}}=\\frac{${gap}}{120}$$ hours until meeting`,
          `Meeting is $${closeMin}$ min after noon, so the second car drove $${later}$ min.`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  function lin4TripleMix(slot, isTrue) {
    const mix = Math.round(((7 * 2 + 4 * 3 + 2 * 1) / 6) * 10) / 10;
    const cmp = isTrue ? claimAntiPlug(mix, true, false) : claimEmbed(mix, false, false);
    return {
      key: `4mix-${slot % 9}`,
      statement: phrase(
        slot,
        `A laboratory assistant pours $2$ L of $7\\%$ acid solution into an empty flask, then adds $3$ L of $4\\%$ solution, and finally $1$ L of $2\\%$ solution. The three volumes combine with no loss. The resulting acidity by volume is ${cmp}\\%.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Total acid amount divided by total volume $6$ L:`,
          `$$\\frac{7\\cdot2+4\\cdot3+2\\cdot1}{6}=\\frac{28}{6}$$`,
          `$$\\approx ${mix}\\%$$`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  function lin4DiscountVat(slot, isTrue) {
    const p0 = 48 + (slot % 4) * 12;
    const final = Math.round(p0 * 0.75 * 0.9 * 1.2);
    const cmp = isTrue ? claimAntiPlug(final, true) : claimEmbed(final, false);
    return {
      key: `4dv-${p0}`,
      statement: phrase(
        slot,
        `An electronics shop lists a headset at $${p0}$ EUR. The shop first reduces the price by $\\frac{1}{4}$, then takes an additional $\\frac{1}{10}$ off the reduced tag. Value-added tax at $\\frac{1}{5}$ of the discounted price is added at the till. The customer pays ${cmp} EUR in total.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `After $\\frac{1}{4}$ off: $${Math.round(p0 * 0.75)}$ EUR.`,
          `After further $\\frac{1}{10}$ off: $${Math.round(p0 * 0.75 * 0.9)}$ EUR.`,
          `$$${Math.round(p0 * 0.75 * 0.9)}\\times1.2=${final}$$ EUR with VAT.`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  function lin4Chase(slot, isTrue) {
    const head = 20 + (slot % 3) * 10;
    const v1 = 60;
    const v2 = 90;
    const headKm = v1 * (head / 60);
    const catchMin = Math.round((headKm / 30) * 60);
    const cmp = isTrue ? claimAntiPlug(catchMin, true) : claimEmbed(catchMin, false);
    return {
      key: `4chase-${head}`,
      statement: phrase(
        slot,
        `Two couriers leave the same depot along one road. Courier $A$ departs at $8{:}00$ at $${v1}$ km/h. Courier $B$ leaves the same depot at $8{:}${String(head).padStart(2, "0")}$ at $${v2}$ km/h and chases $A$. From $B$'s start until $B$ catches $A$, courier $B$ is on the road for ${cmp} minutes.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Head start distance $${headKm}$ km.`,
          `Relative speed closes the gap at $30$ km/h:`,
          `$$t=\\frac{${headKm}}{30}\\text{ h}=${catchMin}\\text{ min}$$`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  function lin4ExamMean(slot, isTrue) {
    const mean = 12 + (slot % 4);
    const s1 = 10 + (slot % 3);
    const s3 = 14 + (slot % 2);
    const s4 = mean + 1;
    const s2 = 4 * mean - s1 - s3 - s4;
    const cmp = isTrue ? claimAntiPlug(s2, true) : claimEmbed(s2, false);
    return {
      key: `4mean-${mean}`,
      statement: phrase(
        slot,
        `On a four-question quiz the class average is $${mean}$ points. Student $P$ earned $${s1}$ points, student $R$ earned $${s3}$ points, and student $S$ scored exactly one point above the class average. Student $Q$'s score was ${cmp} points.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `$$\\frac{P+Q+R+S}{4}=${mean}$$`,
          `With $P=${s1}$, $R=${s3}$, $S=${s4}$:`,
          `$$Q=4\\cdot${mean}-${s1}-${s3}-${s4}=${s2}$$`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  const LIN_4 = [lin4PrizeTax, lin4MotionMeet, lin4TripleMix, lin4DiscountVat, lin4Chase, lin4ExamMean];

  // ═══ 4.1 TIER 5 — photo-length stories ═══════════════════════════════════

  function lin5PhotoArea(slot, isTrue) {
    const d = 3;
    const s = 5;
    const A = 40;
    const longer = 8;
    const cmp = isTrue ? claimAntiPlug(longer, true) : claimEmbed(longer, false);
    return {
      key: `5area-${A}-${slot}`,
      statement: phrase(
        slot,
        `If one side of a rectangle is by $${d}$ cm longer than the other one and the rectangle's area is $${A}$ cm$^{2}$, then the length of the longer side is ${cmp} cm.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Let the shorter side be $x$ cm. Then the longer side is $x+${d}$ cm.`,
          `$$x(x+${d})=${A}$$`,
          `$$x^2+${d}x-${A}=0$$`,
          `$$x=${s}$$`,
          `Longer side $=${longer}$ cm.`,
        ],
        undefined,
        "quadratic"
      ),
    };
  }

  function lin5PhotoCar(slot, isTrue) {
    const v = 64;
    const dist = 112;
    const st = backFrom(15, 0, 105);
    const claim = isTrue ? pm(st.h, st.m) : pm(2, 45);
    return {
      key: `5car-112`,
      statement: phrase(
        slot,
        `A car travels at an average speed of $${v}$ km/h. At $3$ pm, it has traveled a total distance of $${dist}$ km. Then it started traveling at ${claim}.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Elapsed time since departure:`,
          `$$t=\\frac{${dist}}{${v}}=\\frac{7}{4}$$ h $=1$ h $45$ min.`,
          `Counting back from $3$ pm gives ${pm(st.h, st.m)}.`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  function lin5PhotoVinegar(slot, isTrue) {
    const w = 0.6;
    const cmp = isTrue ? claimAntiPlug(w, true, false) : claimEmbed(w, false, false);
    return {
      key: `5vinegar`,
      statement: phrase(
        slot,
        `A recipe calls for $5\\%$ vinegar. If the cook only has $1$ litre of $8\\%$ vinegar, he needs to mix it with ${cmp} litres of water to get the right concentration.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Pure vinegar in $1$ L of $8\\%$ stock: $0.08$ L.`,
          `$$\\frac{0.08}{1+w}=\\frac{5}{100}$$`,
          `$$w=\\frac{3}{5}$$ L water.`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  function lin5PhotoPrize(slot, isTrue) {
    const total = 480;
    const gross1 = Math.round((total * 25) / 61);
    const gross2 = Math.round((gross1 * 4) / 5);
    const cmp = isTrue ? claimAntiPlug(gross2, true) : claimEmbed(gross2, false);
    return {
      key: `5prize480`,
      statement: phrase(
        slot,
        `A prize money of $${total}$ EUR is supposed to be split among the winners in a way that the $2$nd placed obtains $\\frac{4}{5}$ of the amount the $1$st placed obtains, and the $3$rd placed obtains $\\frac{4}{5}$ of the $2$nd placed. Then the prize for $2$nd place is ${cmp} EUR.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Let first prize be $a$ EUR.`,
          `$$a+\\frac{4}{5}a+\\frac{16}{25}a=${total}$$`,
          `$$\\frac{61}{25}a=${total}$$`,
          `$$a=${gross1}$$`,
          `Second place $=\\frac{4}{5}a=${gross2}$ EUR.`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  function lin5BorderPath(slot, isTrue) {
    const w = 8 + (slot % 3);
    const inner = w * (w + 6);
    const path = (w + 2) * (w + 8) - inner;
    const cmp = isTrue ? claimAntiPlug(path, true) : claimEmbed(path, false);
    return {
      key: `5path-${w}`,
      statement: phrase(
        slot,
        `A rectangular sports field measures $${w}$ m by $${w + 6}$ m. A uniform $\\frac{3}{2}$ m maintenance strip is paved around the entire outer edge; the inner field itself stays unpaved. The paved strip alone covers ${cmp} m$^{2}$.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Outer rectangle $(${w}+3)$ m by $(${w}+9)$ m minus inner $${inner}$ m$^{2}$:`,
          `$$(${w}+3)(${w}+9)-${inner}=${path}$$`,
        ],
        undefined,
        "quadratic"
      ),
    };
  }

  function lin5RoundTrip(slot, isTrue) {
    const d = 30;
    const v1 = 15;
    const v2 = 10;
    const real = 5;
    const trap = 4.8;
    const cmp = isTrue ? claimAntiPlug(trap, true, false) : claimEmbed(trap, false, false);
    return {
      key: `5rt-30`,
      statement: phrase(
        slot,
        `A courier rides $${d}$ km to a village at $${v1}$ km/h and returns along the same road at $${v2}$ km/h. A clerk claims the round trip lasts as long as riding $${2 * d}$ km at the average $\\frac{${v1}+${v2}}{2}$ km/h, i.e. ${cmp} hours in total.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Actual time out plus back:`,
          `$$\\frac{${d}}{${v1}}+\\frac{${d}}{${v2}}=2+3=5$$ h.`,
          `Mean-speed shortcut gives $\\frac{60}{12.5}=4.8$ h.`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  function lin5PoolDrain(slot, isTrue) {
    const cmp = isTrue ? claimAntiPlug(12, true) : claimEmbed(12, false);
    return {
      key: `5pool`,
      statement: phrase(
        slot,
        `Inlet $A$ alone fills an empty pool in $4$ hours. Drain $B$ alone empties a full pool in $6$ hours. Both run together from an empty pool. The pool is full for the first time after ${cmp} hours.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Net fill rate per hour:`,
          `$$\\frac{1}{4}-\\frac{1}{6}=\\frac{1}{12}$$`,
          `$$t=12$$ h.`,
        ],
        undefined,
        "rational"
      ),
    };
  }

  function lin5FatherSon(slot, isTrue) {
    const son = 20;
    const cmp = isTrue ? claimAntiPlug(son, true) : claimEmbed(son, false);
    return {
      key: `5age`,
      statement: phrase(
        slot,
        `A father is $28$ years older than his son. In $8$ years the father will be twice as old as the son will be then. The son is now ${cmp} years old.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Let son's present age be $s$ years.`,
          `$$s+28+8=2(s+8)$$`,
          `$$s+36=2s+16$$`,
          `$$s=20$$`,
        ],
        undefined,
        "linear"
      ),
    };
  }

  const LIN_5 = [lin5PhotoArea, lin5PhotoCar, lin5PhotoVinegar, lin5PhotoPrize, lin5BorderPath, lin5RoundTrip, lin5PoolDrain, lin5FatherSon];

  // ═══ 4.2 TIER 4/5 ═══════════════════════════════════════════════════════

  function quad4Path(slot, isTrue) {
    const w = 8 + (slot % 2);
    const path = (w + 2) * (w + 8) - w * (w + 6);
    const cmp = isTrue ? claimAntiPlug(path, true) : claimEmbed(path, false);
    return {
      key: `4qpath-${w}`,
      statement: phrase(
        slot,
        `A $\\frac{3}{2}$ m wide running track borders a $${w}$ m by $${w + 6}$ m lawn on all sides; the track lies outside the grass. The track surface area alone is ${cmp} m$^{2}$.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$(${w}+3)(${w}+9)-${w * (w + 6)}=${path}$$`], undefined, "quadratic"),
    };
  }

  function quad5AreaWord(slot, isTrue) {
    const d = 4;
    const s = 6;
    const A = 60;
    const longer = 10;
    const cmp = isTrue ? claimAntiPlug(longer, true) : claimEmbed(longer, false);
    return {
      key: `5qarea-${A}`,
      statement: phrase(
        slot,
        `A rectangular plot must have area exactly $${A}$ m$^{2}$. One side is $${d}$ m shorter than the adjacent side, and both side lengths are whole metres. The longer side is ${cmp} m.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$x(x+${d})=${A}$$`, `$$x=${s}$$, longer $${longer}$ m.`], undefined, "quadratic"),
    };
  }

  function quad5Vieta(slot, isTrue) {
    const r1 = 5;
    const r2 = 12;
    const p = 60;
    const cmp = isTrue ? claimAntiPlug(p, true) : claimEmbed(p, false);
    return {
      key: `5qvieta-${r1}-${r2}`,
      statement: phrase(
        slot,
        `Two positive numbers differ by $7$ and are the two roots of $t^2-17t+p=0$. Their product is ${cmp}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `By Vieta's formulas, product $=${p}$.`], undefined, "quadratic"),
    };
  }

  const QUAD_4 = [quad4Path];
  const QUAD_5 = [quad5AreaWord, quad5Vieta];

  // ═══ 4.3 TIER 4/5 ═══════════════════════════════════════════════════════

  function rat4Train(slot, isTrue) {
    const l1 = 120 + (slot % 3) * 30;
    const l2 = 180 + (slot % 2) * 40;
    const sec = Math.round(((l1 + l2) / 180) * 3.6);
    const cmp = isTrue ? claimAntiPlug(sec, true) : claimEmbed(sec, false);
    return {
      key: `4train-${l1}-${l2}`,
      statement: phrase(
        slot,
        `Two trains of lengths $${l1}$ m and $${l2}$ m move towards each other on parallel tracks at $72$ km/h and $108$ km/h. Timing starts when the fronts meet and stops when neither train overlaps the other. That passing interval lasts ${cmp} seconds.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Combined length $${l1 + l2}$ m; relative speed $180$ km/h $=50$ m/s.`,
          `$$t=\\frac{${l1 + l2}}{50}=${sec}$$ s.`,
        ],
        undefined,
        "rational"
      ),
    };
  }

  function rat5WorkDrain(slot, isTrue) {
    const cmp = isTrue ? claimAntiPlug(12, true) : claimEmbed(12, false);
    return {
      key: `5ratwd`,
      statement: phrase(
        slot,
        `Pipe $A$ fills an empty tank in $4$ hours. Pipe $B$ empties a full tank in $6$ hours. Both operate from empty with no overflow. The tank becomes full for the first time after ${cmp} hours.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{1}{4}-\\frac{1}{6}=\\frac{1}{12}$$`], undefined, "rational"),
    };
  }

  function rat5Ladder(slot, isTrue) {
    const cmp = isTrue ? claimAntiPlug(5, true) : claimEmbed(5, false);
    return {
      key: `5lad`,
      statement: phrase(
        slot,
        `A ladder touches a wall $3$ m above ground while its foot stands $4$ m from the wall along level ground. The ladder length is ${cmp} m.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$L=\\sqrt{3^2+4^2}=5$$`], undefined, "radical"),
    };
  }

  const RAT_4 = [rat4Train];
  const RAT_5 = [rat5WorkDrain, rat5Ladder];

  // ═══ 4.4 TIER 4/5 — complex log equations like photo E ═══════════════════

  function logExamParams(slot) {
    const presets = [
      { k: 3, bound: 5, logx: 1, x: 10 },
      { k: 4, bound: 8, logx: 0.5, x: Math.sqrt(10) },
      { k: 5, bound: 12, logx: 0.4, x: Math.pow(10, 0.4) },
    ];
    const p = presets[slot % presets.length];
    return { ...p, smaller: p.x < p.bound };
  }

  function logPhotoStmt(k, bound, claimWord) {
    return `The solution of the equation $\\log \\sqrt[${k}]{x} + \\log \\frac{1}{x^{${k}}} - \\log x^2 + \\frac{16}{3} = \\frac{\\log x^2}{1 + \\log 100}$, where $\\log x$ denotes the decadic logarithm of $x$, is ${claimWord} than $${bound}$.`;
  }

  function log4Complex(slot, isTrue) {
    const p = logExamParams(slot + 1);
    const claimWord = isTrue ? (p.smaller ? "smaller" : "not smaller") : p.smaller ? "not smaller" : "smaller";
    const stmtTrue = (claimWord === "smaller") === p.smaller;
    return {
      key: `4log-${p.k}-${p.bound}-${slot}`,
      statement: phrase(slot, logPhotoStmt(p.k, p.bound, claimWord)),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Use $\\log 100=2$ on the right-hand side.`,
          `Combine coefficients of $\\log x$ on the left:`,
          `$$\\log x = ${p.logx}$$`,
          `$$x = 10^{${p.logx}} = ${Math.round(p.x * 100) / 100}$$`,
          p.smaller ? `$x < ${p.bound}$.` : `$x \\ge ${p.bound}$.`,
        ],
        undefined,
        "explog"
      ),
      forceTrue: stmtTrue,
    };
  }

  function log5PhotoE(slot, isTrue) {
    const p = logExamParams(0);
    const claimWord = isTrue ? (p.smaller ? "smaller" : "not smaller") : p.smaller ? "not smaller" : "smaller";
    const stmtTrue = (claimWord === "smaller") === p.smaller;
    return {
      key: `5photoE`,
      statement: phrase(slot, logPhotoStmt(3, 5, claimWord)),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `Domain requires $x>0$. With $\\log 100=2$:`,
          `$$\\left(\\frac{1}{3}-3-2\\right)\\log x + \\frac{16}{3} = \\frac{2}{3}\\log x$$`,
          `$$\\log x = 1$$`,
          `$$x = 10$$`,
          `$10 \\ge 5$, so the root is not smaller than $5$.`,
        ],
        undefined,
        "explog"
      ),
      forceTrue: stmtTrue,
    };
  }

  function log5Product(slot, isTrue) {
    const a = 3;
    const rhs = 1;
    const root = 2;
    const cmp = claimRoot(root, isTrue);
    return {
      key: `5logprod-${a}-${rhs}`,
      statement: phrase(
        slot,
        `Every positive root of $\\log x + \\log(x+${a}) = ${rhs}$ satisfies $x$ ${cmp}.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `$$\\log(x(x+${a}))=1$$`,
          `$$x(x+${a})=10$$`,
          `$$x=${root}$$`,
        ],
        undefined,
        "explog"
      ),
    };
  }

  function exp5Subst(slot, isTrue) {
    const cmp = claimCount(2, isTrue);
    return {
      key: `5esub-20-21`,
      statement: phrase(
        slot,
        `A heated metal rod model leads to $e^{2x} - 10e^x + 21 = 0$ after substitution $u=e^x$ with $u>0$. There are ${cmp} distinct real values of $x$.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `$$u^2-10u+21=0$$`,
          `$$(u-3)(u-7)=0$$`,
          `Two positive $u$ give two real $x$.`,
        ],
        undefined,
        "explog"
      ),
    };
  }

  function exp4Compound(slot, isTrue) {
    const p = 48;
    const bal = Math.round(p * Math.pow(1.04, 3));
    const cmp = claimRoot(3, isTrue);
    return {
      key: `4comp-${p}-${bal}`,
      statement: phrase(
        slot,
        `A savings account starts with $${p}$ EUR and earns $4\\%$ per year compounded once annually. After three full years the balance satisfies $t$ ${cmp} years in the exponent model $${p}\\cdot1.04^t=${bal}$.`
      ),
      expl: mkExpl(
        isTrue,
        [
          hdr("?", isTrue).replace("?", "{L}"),
          "",
          `$$1.04^3 \\approx ${(bal / p).toFixed(3)}$$`,
          `$$t=3$$ years.`,
        ],
        undefined,
        "explog"
      ),
    };
  }

  const EXP_4 = [log4Complex, exp4Compound];
  const EXP_5 = [log5PhotoE, log5Product, exp5Subst, log4Complex];

  // ═══ TIER 1–2 ═══════════════════════════════════════════════════════════

  function lin1PriceCmp(slot, isTrue) {
    const x = 5 + (slot % 4);
    const total = 2 * x + 6;
    const bound = x - 2;
    const cmp = isTrue ? `greater than $${bound}$` : `at most $${bound}$`;
    return {
      key: `1price-${total}-${x}`,
      statement: phrase(
        slot,
        `A shop doubles a price and adds a $6$ EUR surcharge; the till shows $${total}$ EUR. The original price is ${cmp} EUR.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$2p+6=${total}$$`, `$$p=${x}$$`], undefined, "linear"),
    };
  }

  function lin1BillCmp(slot, isTrue) {
    const cmp = isTrue ? `greater than $14$` : `at most $14$`;
    return {
      key: `1bill-${slot % 7}`,
      statement: phrase(
        slot,
        `After $7$ EUR is taken off a bill, half the remainder equals $4$ EUR. The original bill is ${cmp} EUR.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{x-7}{2}=4$$`, `$$x=15$$`], undefined, "linear"),
    };
  }

  function lin1OddSum(slot, isTrue) {
    const n = 9 + (slot % 4) * 2;
    const sum = 3 * n + 6;
    const max = n + 4;
    const bound = max - 2;
    const cmp = isTrue ? `greater than $${bound}$` : `at most $${bound}$`;
    return {
      key: `1odd-${sum}-${n}`,
      statement: phrase(
        slot,
        `Three consecutive odd integers add up to $${sum}$. The largest of the three is ${cmp}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$3k+6=${sum}$$`, `Largest $${max}$.`], undefined, "linear"),
    };
  }

  function lin2FracBound(slot, isTrue) {
    const x = 28;
    const cmp = isTrue ? `greater than $20$` : `at most $20$`;
    return {
      key: `2frac-${x}`,
      statement: phrase(
        slot,
        `Four-sevenths of a number exceed two-sevenths of the same number by $16$. The number is ${cmp}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$\\frac{4}{7}n-\\frac{2}{7}n=16$$`, `$$n=28$$`], undefined, "linear"),
    };
  }

  function lin2MeanBound(slot, isTrue) {
    const a = 10;
    const b = 14;
    const mean = 12;
    const c = 12;
    const cmp = isTrue ? `greater than $10$` : `at most $10$`;
    return {
      key: `2mean-${a}-${b}-${c}`,
      statement: phrase(
        slot,
        `Three test scores average $${mean}$ points; two of them are $${a}$ and $${b}$. The third score is ${cmp}.`
      ),
      expl: mkExpl(isTrue, [hdr("?", isTrue).replace("?", "{L}"), "", `$$c=3\\cdot${mean}-${a}-${b}=12$$`], undefined, "linear"),
    };
  }

  const LIN_1 = [lin1PriceCmp, lin1BillCmp, lin1OddSum];
  const LIN_2 = [lin1PriceCmp, lin1BillCmp, lin1OddSum, lin2FracBound, lin2MeanBound];

  return { LIN_1, LIN_2, LIN_4, LIN_5, QUAD_4, QUAD_5, RAT_4, RAT_5, EXP_4, EXP_5 };
}
