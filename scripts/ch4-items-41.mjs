/**
 * Unique 4.1 linear word problems. Each id/scene is used at most once.
 */
import { E, claim, cmpLine, item } from "./ch4-lib.mjs";

function perim(id, tier, s, d, unit, scene) {
  const longer = s + d;
  const p = 2 * (s + longer);
  return item(id, "4.1", tier, (t) => {
    const c = claim(longer, t);
    return {
      statement: scene(p, d, c.phrase, unit),
      expl: E(
        t,
        `Let the shorter side be $s$ ${unit}. The perimeter uses both pairs of sides.`,
        [`$$2s+2(s+${d})=${p}$$`, `$$4s+${2 * d}=${p}$$`, `$$4s=${p - 2 * d}$$`, `$$s=${s}$$`],
        cmpLine(c, `The longer side is $${longer}$ ${unit}. That recovered length`)
      ),
    };
  });
}

function startTime(id, tier, v, hrs, scene) {
  const dist = v * hrs;
  const mins = Math.round(hrs * 60);
  const endH = 15;
  const startMin = endH * 60 - mins;
  const sh = Math.floor(startMin / 60);
  const sm = startMin % 60;
  const clock = `${sh}:${String(sm).padStart(2, "0")}`;
  const boundH = sh;
  const boundM = sm === 0 ? 30 : 0;
  const boundClock = sm === 0 ? `${sh}:${String(boundM).padStart(2, "0")}` : `${sh + 1}:00`;
  return item(id, "4.1", tier, (t) => {
    const phrase = t ? `before $${boundClock.replace(":", "{:}")}$ pm` : `at $${((sh + 1) % 12) || 12}{:}20$ pm`;
    return {
      statement: scene(v, dist, phrase),
      expl: E(
        t,
        `Time of travel is distance over speed. Count that duration back from $3{:}00$ pm.`,
        [`$$t=\\frac{${dist}}{${v}}=${hrs}$$`, `$$${hrs}\\text{ h}=${mins}\\text{ min}$$`, `$$15{:}00- ${mins}\\text{ min}=${clock.replace(":", "{:}")}\\text{ pm}$$`],
        t
          ? `The journey started at $${clock.replace(":", "{:}")}$ pm, which is before $${boundClock.replace(":", "{:}")}$ pm. So the statement is True.`
          : `The journey started at $${clock.replace(":", "{:}")}$ pm, not at the claimed later clock time. So the statement is False.`
      ),
    };
  });
}

function dilute(id, tier, have, target, scene) {
  // 1 L of `have`% mixed with w L water → target%
  const w = have / target - 1;
  const wDisp = Number.isInteger(w) ? String(w) : `\\frac{${have - target}}{${target}}`;
  return item(id, "4.1", tier, (t) => {
    const c = claim(w, t);
    return {
      statement: scene(have, target, c.phrase),
      expl: E(
        t,
        `Acid is conserved. One litre of the stock contributes $${have / 100}$ L of pure acid, and the mixture volume is $1+w$.`,
        [`$$\\frac{${have}/100}{1+w}=\\frac{${target}}{100}$$`, `$$${have}=${target}(1+w)$$`, `$$w=${wDisp}$$`],
        cmpLine(c, `The water volume is $${wDisp}$ L. That volume`)
      ),
    };
  });
}

function meet(id, tier, D, v1, v2, headMin, scene) {
  const headH = headMin / 60;
  const headKm = v1 * headH;
  const gap = D - headKm;
  const meetH = gap / (v1 + v2);
  const meetMin = Math.round(meetH * 60);
  const fromNoon = headMin + meetMin;
  return item(id, "4.1", tier, (t) => {
    const c = claim(fromNoon, t);
    return {
      statement: scene(D, v1, v2, headMin, c.phrase),
      expl: E(
        t,
        `The first vehicle runs alone for $${headMin}$ min, then both close the remaining gap at relative speed $${v1 + v2}$ km/h.`,
        [
          `$$\\frac{${headMin}}{60}\\cdot${v1}=${headKm}$$`,
          `$$${D}-${headKm}=${gap}$$`,
          `$$t=\\frac{${gap}}{${v1 + v2}}$$`,
          `$$t\\cdot 60=${meetMin}$$`,
        ],
        cmpLine(c, `Elapsed time since noon is $${fromNoon}$ min. That duration`)
      ),
    };
  });
}

function boat(id, tier, d, td, tu, scene) {
  const vd = d / td;
  const vu = d / tu;
  const still = (vd + vu) / 2;
  return item(id, "4.1", tier, (t) => {
    const c = claim(still, t);
    return {
      statement: scene(d, td, tu, c.phrase),
      expl: E(
        t,
        `Still-water speed is the average of the downstream and upstream speeds.`,
        [`$$v_{d}=\\frac{${d}}{${td}}=${vd}$$`, `$$v_{u}=\\frac{${d}}{${tu}}=${vu}$$`, `$$v=\\frac{${vd}+${vu}}{2}=${still}$$`],
        cmpLine(c, `The still-water speed is $${still}$ km/h. That speed`)
      ),
    };
  });
}

function age(id, tier, gap, ahead, scene) {
  // d + gap + ahead = 2(d + ahead) → d = gap - ahead
  const son = gap - ahead;
  return item(id, "4.1", tier, (t) => {
    const c = claim(son, t);
    return {
      statement: scene(gap, ahead, c.phrase),
      expl: E(
        t,
        `Let the child's present age be $d$. In $${ahead}$ years the parent is twice as old as the child will be then.`,
        [`$$d+${gap}+${ahead}=2(d+${ahead})$$`, `$$d+${gap + ahead}=2d+${2 * ahead}$$`, `$$d=${son}$$`],
        cmpLine(c, `The child is now $${son}$ years old. That age`)
      ),
    };
  });
}

function coins(id, tier, fives, twos, scene) {
  const n = fives + twos;
  const val = 5 * fives + 2 * twos;
  return item(id, "4.1", tier, (t) => {
    const c = claim(fives, t);
    return {
      statement: scene(n, val, c.phrase),
      expl: E(
        t,
        `Let $x$ be the number of $5$ EUR coins and $y$ the number of $2$ EUR coins.`,
        [`$$x+y=${n}$$`, `$$5x+2y=${val}$$`, `$$3x=${val - 2 * n}$$`, `$$x=${fives}$$`],
        cmpLine(c, `There are $${fives}$ coins of $5$ EUR. That count`)
      ),
    };
  });
}

function tank(id, tier, rate, mins, num, den, scene) {
  const filled = rate * mins;
  const cap = (filled * den) / num;
  return item(id, "4.1", tier, (t) => {
    const c = claim(cap, t);
    return {
      statement: scene(rate, mins, num, den, c.phrase),
      expl: E(
        t,
        `The pump's output in $${mins}$ min is a known fraction of the tank.`,
        [`$$\\frac{${num}}{${den}}C=${rate}\\cdot${mins}$$`, `$$C=${cap}$$`],
        cmpLine(c, `The capacity is $${cap}$ litres. That capacity`)
      ),
    };
  });
}

function rod(id, tier, short, diff, scene) {
  const total = 2 * short + diff;
  return item(id, "4.1", tier, (t) => {
    const c = claim(short, t);
    return {
      statement: scene(total, diff, c.phrase),
      expl: E(
        t,
        `Let the shorter piece be $s$. The two pieces add to the original length.`,
        [`$$s+(s+${diff})=${total}$$`, `$$2s=${total - diff}$$`, `$$s=${short}$$`],
        cmpLine(c, `The shorter piece is $${short}$ cm. That length`)
      ),
    };
  });
}

function odds(id, tier, n, scene) {
  const max = n + 4;
  const sum = 3 * n + 6;
  return item(id, "4.1", tier, (t) => {
    const c = claim(max, t);
    return {
      statement: scene(sum, c.phrase),
      expl: E(
        t,
        `Three consecutive odd integers may be written $n$, $n+2$, $n+4$.`,
        [`$$3n+6=${sum}$$`, `$$3n=${sum - 6}$$`, `$$n=${n}$$`],
        cmpLine(c, `The largest is $${max}$. That integer`)
      ),
    };
  });
}

function fracNum(id, tier, x, scene) {
  return item(id, "4.1", tier, (t) => {
    const c = claim(x, t);
    return {
      statement: scene(c.phrase),
      expl: E(
        t,
        `Let the unknown be $x$. Four sevenths minus two sevenths leaves two sevenths of $x$.`,
        [`$$\\frac{4}{7}x-\\frac{2}{7}x=16$$`, `$$\\frac{2}{7}x=16$$`, `$$x=56$$`],
        cmpLine(c, `The number is $${x}$. That value`)
      ),
    };
  });
}

function trip(id, tier, d, v1, v2, scene) {
  const t1 = d / v1;
  const t2 = d / v2;
  const tot = t1 + t2;
  const totDisp = Number.isInteger(tot) ? String(tot) : tot.toFixed(1).replace(/\.0$/, "");
  return item(id, "4.1", tier, (t) => {
    const c = claim(tot, t);
    return {
      statement: scene(d, v1, v2, c.phrase),
      expl: E(
        t,
        `Each leg lasts distance over speed. Add the two times.`,
        [`$$\\frac{${d}}{${v1}}=${t1}$$`, `$$\\frac{${d}}{${v2}}=${t2}$$`, `$$T=${t1}+${t2}=${totDisp}$$`],
        cmpLine(c, `The round trip lasts $${totDisp}$ hours. That duration`)
      ),
    };
  });
}

function pathArea(id, tier, w, extra, b, scene) {
  const inner = w * (w + extra);
  const outer = (w + 2 * b) * (w + extra + 2 * b);
  const area = outer - inner;
  return item(id, "4.1", tier, (t) => {
    const c = claim(area, t);
    return {
      statement: scene(w, w + extra, b, c.phrase),
      expl: E(
        t,
        `Path area is the outer rectangle minus the inner lawn.`,
        [
          `$$(${w}+${2 * b})(${w + extra}+${2 * b})-${inner}$$`,
          `$$${w + 2 * b}\\cdot${w + extra + 2 * b}-${inner}$$`,
          `$$=${area}$$`,
        ],
        cmpLine(c, `The path covers $${area}$ m$^{2}$. That area`)
      ),
    };
  });
}

function discount(id, tier, p0, scene) {
  const after1 = (p0 * 3) / 4;
  const after2 = (after1 * 9) / 10;
  const final = (after2 * 6) / 5;
  return item(id, "4.1", tier, (t) => {
    const c = claim(final, t);
    return {
      statement: scene(p0, c.phrase),
      expl: E(
        t,
        `Apply the two discounts in order, then add VAT of one fifth of the discounted price.`,
        [
          `$$${p0}\\cdot\\frac{3}{4}=${after1}$$`,
          `$$${after1}\\cdot\\frac{9}{10}=${after2}$$`,
          `$$${after2}\\cdot\\frac{6}{5}=${final}$$`,
        ],
        cmpLine(c, `The customer pays $${final}$ EUR. That total`)
      ),
    };
  });
}

function mean3(id, tier, a, b, mean, scene) {
  const c0 = 3 * mean - a - b;
  return item(id, "4.1", tier, (t) => {
    const c = claim(c0, t);
    return {
      statement: scene(mean, a, b, c.phrase),
      expl: E(
        t,
        `The mean of three scores is the given class average.`,
        [`$$\\frac{${a}+${b}+c}{3}=${mean}$$`, `$$${a}+${b}+c=${3 * mean}$$`, `$$c=${c0}$$`],
        cmpLine(c, `The third score is $${c0}$. That score`)
      ),
    };
  });
}

function digits(id, tier, tens, units, scene) {
  const n = 10 * tens + units;
  const rev = 10 * units + tens;
  const diff = rev - n;
  return item(id, "4.1", tier, (t) => {
    const c = claim(diff, t);
    return {
      statement: scene(tens, units, c.phrase),
      expl: E(
        t,
        `The original number is $10\\cdot${tens}+${units}$. The reversed number is $10\\cdot${units}+${tens}$.`,
        [`$$${rev}-${n}=${diff}$$`],
        cmpLine(c, `The increase is $${diff}$. That increase`)
      ),
    };
  });
}

function chase(id, tier, v1, v2, headMin, scene) {
  const headKm = (v1 * headMin) / 60;
  const catchH = headKm / (v2 - v1);
  const catchMin = Math.round(catchH * 60);
  return item(id, "4.1", tier, (t) => {
    const c = claim(catchMin, t);
    return {
      statement: scene(v1, v2, headMin, c.phrase),
      expl: E(
        t,
        `The leader's head start is a gap. The pursuer closes it at relative speed $${v2 - v1}$ km/h.`,
        [`$$\\frac{${headMin}}{60}\\cdot${v1}=${headKm}$$`, `$$t=\\frac{${headKm}}{${v2 - v1}}$$`, `$$t\\cdot 60=${catchMin}$$`],
        cmpLine(c, `The chase lasts $${catchMin}$ min. That duration`)
      ),
    };
  });
}

function mix(id, tier, v1, c1, v2, c2, scene) {
  const mixv = (v1 * c1 + v2 * c2) / (v1 + v2);
  const mixR = Math.round(mixv * 10) / 10;
  return item(id, "4.1", tier, (t) => {
    const c = claim(mixR, t);
    return {
      statement: scene(v1, c1, v2, c2, c.phrase),
      expl: E(
        t,
        `Salt is conserved. Divide total salt by total volume.`,
        [
          `$$${v1}\\cdot${c1}+${v2}\\cdot${c2}=${v1 * c1 + v2 * c2}$$`,
          `$$${v1}+${v2}=${v1 + v2}$$`,
          `$$\\frac{${v1 * c1 + v2 * c2}}{${v1 + v2}}=${mixR}$$`,
        ],
        cmpLine(c, `The mixture is $${mixR}\\%$. That concentration`)
      ),
    };
  });
}

function twice(id, tier, x, add, scene) {
  // 2x + add = rhs
  const rhs = 2 * x + add;
  return item(id, "4.1", tier, (t) => {
    const c = claim(x, t);
    return {
      statement: scene(add, rhs, c.phrase),
      expl: E(
        t,
        `Let the unknown be $x$. Twice that number plus $${add}$ equals $${rhs}$.`,
        [`$$2x+${add}=${rhs}$$`, `$$2x=${rhs - add}$$`, `$$x=${x}$$`],
        cmpLine(c, `The number is $${x}$. That value`)
      ),
    };
  });
}

function tickets(id, tier, a, ch, nA, nC, scene) {
  const total = a * nA + ch * nC;
  return item(id, "4.1", tier, (t) => {
    const c = claim(a, t);
    return {
      statement: scene(ch, nA, nC, total, c.phrase),
      expl: E(
        t,
        `Let an adult ticket cost $a$ EUR. Child tickets are given, and the till total is known.`,
        [`$$${nA}a+${nC}\\cdot${ch}=${total}$$`, `$$${nA}a=${total - nC * ch}$$`, `$$a=${a}$$`],
        cmpLine(c, `An adult ticket costs $${a}$ EUR. That price`)
      ),
    };
  });
}

function iso(id, tier, equal, base, scene) {
  const p = 2 * equal + base;
  return item(id, "4.1", tier, (t) => {
    const c = claim(equal, t);
    return {
      statement: scene(p, base, c.phrase),
      expl: E(
        t,
        `An isosceles triangle has two equal sides $s$ and base $${base}$.`,
        [`$$2s+${base}=${p}$$`, `$$2s=${p - base}$$`, `$$s=${equal}$$`],
        cmpLine(c, `Each equal side is $${equal}$ cm. That length`)
      ),
    };
  });
}

function wage(id, tier, gross, scene) {
  const net = (gross * 4) / 5;
  return item(id, "4.1", tier, (t) => {
    const c = claim(gross, t);
    return {
      statement: scene(net, c.phrase),
      expl: E(
        t,
        `After a $\\frac{1}{5}$ tax the worker keeps $\\frac{4}{5}$ of the gross wage $g$.`,
        [`$$\\frac{4}{5}g=${net}$$`, `$$g=${gross}$$`],
        cmpLine(c, `The gross wage is $${gross}$ EUR. That wage`)
      ),
    };
  });
}

function prize(id, tier, total, scene) {
  const W = (total * 25) / 61;
  const gross2 = (W * 4) / 5;
  const net = (gross2 * 17) / 20;
  const Wr = Math.round(W);
  const g2r = Math.round(gross2);
  const netr = Math.round(net);
  return item(id, "4.1", tier, (t) => {
    const c = claim(netr, t);
    return {
      statement: scene(total, c.phrase),
      expl: E(
        t,
        `Let $W$ be the winner's gross prize. Runner-up gross is $\\frac{4}{5}W$ and third is $\\frac{16}{25}W$.`,
        [
          `$$W+\\frac{4}{5}W+\\frac{16}{25}W=${total}$$`,
          `$$\\frac{61}{25}W=${total}$$`,
          `$$W=${Wr}$$`,
          `$$\\frac{4}{5}\\cdot${Wr}=${g2r}$$`,
          `$$\\frac{17}{20}\\cdot${g2r}=${netr}$$`,
        ],
        cmpLine(c, `The runner-up net is $${netr}$ EUR. That amount`)
      ),
    };
  });
}

export function linearItems() {
  return [
    perim("iris-wire", 1, 8, 4, "m", (p, d, c, u) => `A gardener fences a rectangular iris bed with exactly $${p}$ m of wire. The length is $${d}$ m more than the width. The length is ${c} ${u}.`),
    perim("oak-patio", 1, 6, 3, "m", (p, d, c, u) => `A carpenter builds a rectangular oak patio and uses $${p}$ m of edging. One side exceeds the adjacent side by $${d}$ m. The longer side is ${c} ${u}.`),
    perim("mural", 2, 5, 2, "m", (p, d, c, u) => `An art class paints a rectangular mural whose border tape measures $${p}$ m. Height exceeds width by $${d}$ m. The height is ${c} ${u}.`),
    perim("splashback", 1, 7, 5, "cm", (p, d, c, u) => `A tiler outlines a rectangular kitchen splashback with $${p}$ cm of trim. Length exceeds width by $${d}$ cm. The length is ${c} ${u}.`),
    perim("helipad", 2, 10, 4, "m", (p, d, c, u) => `A rectangular helipad is marked with $${p}$ m of paint along all four sides. Length is $${d}$ m more than width. The length is ${c} ${u}.`),
    perim("whiteboard", 1, 9, 3, "dm", (p, d, c, u) => `A classroom whiteboard has perimeter $${p}$ dm. The horizontal side is $${d}$ dm longer than the vertical side. The horizontal side is ${c} ${u}.`),
    perim("greenhouse", 3, 12, 6, "m", (p, d, c, u) => `A rectangular greenhouse foundation uses $${p}$ m of timber. Length exceeds width by $${d}$ m. The length is ${c} ${u}.`),
    perim("postage", 1, 4, 2, "cm", (p, d, c, u) => `A rectangular stamp has perimeter $${p}$ cm. One side is $${d}$ cm longer than the other. The longer side is ${c} ${u}.`),
    perim("courtyard", 2, 11, 5, "m", (p, d, c, u) => `A hotel courtyard is rectangular and fenced with $${p}$ m of rail. Length exceeds width by $${d}$ m. The length is ${c} ${u}.`),
    perim("pond", 2, 8, 6, "m", (p, d, c, u) => `A rectangular ornamental pond has a stone rim of $${p}$ m. The longer side is $${d}$ m more than the shorter. That longer side is ${c} ${u}.`),

    startTime("courier-van", 2, 64, 1.5, (v, dist, ph) => `A courier van averages $${v}$ km/h and has covered $${dist}$ km by $3$ pm. It started traveling ${ph}.`),
    startTime("tram", 1, 32, 1.25, (v, dist, ph) => `A tram runs at $${v}$ km/h and by $3$ pm has travelled $${dist}$ km from the depot. It left the depot ${ph}.`),
    startTime("ferry", 2, 24, 2, (v, dist, ph) => `A harbour ferry holds $${v}$ km/h. At $3$ pm it is $${dist}$ km from the morning berth. It cast off ${ph}.`),
    startTime("coach", 3, 80, 1.75, (v, dist, ph) => `An intercity coach averages $${v}$ km/h. By $3$ pm the odometer shows $${dist}$ km on this leg. The coach started ${ph}.`),
    startTime("cyclist", 1, 20, 1.5, (v, dist, ph) => `A cyclist rides at $${v}$ km/h and by $3$ pm has covered $${dist}$ km. The ride began ${ph}.`),
    startTime("glider-tow", 4, 96, 1.25, (v, dist, ph) => `A tow plane flies at $${v}$ km/h. At $3$ pm it is $${dist}$ km from the airfield. Take-off was ${ph}.`),

    dilute("vinegar-8-4", 2, 8, 4, (h, tgt, c) => `A cook has $1$ litre of $${h}\\%$ vinegar and must obtain $${tgt}\\%$ acidity by adding water. The water needed is ${c} litres.`),
    dilute("juice-12-4", 1, 12, 4, (h, tgt, c) => `A barista dilutes $1$ litre of $${h}\\%$ cordial to $${tgt}\\%$. The volume of water to add is ${c} litres.`),
    dilute("acid-15-5", 3, 15, 5, (h, tgt, c) => `A lab technician has $1$ litre of $${h}\\%$ acid and needs $${tgt}\\%$. Water to add is ${c} litres.`),
    dilute("bleach-10-2", 2, 10, 2, (h, tgt, c) => `A cleaner holds $1$ litre of $${h}\\%$ bleach and wants $${tgt}\\%$. The water to pour in is ${c} litres.`),
    dilute("syrup-9-3", 1, 9, 3, (h, tgt, c) => `A soda fountain starts with $1$ litre of $${h}\\%$ syrup and aims for $${tgt}\\%$. Water required is ${c} litres.`),

    meet("towns-pq", 3, 120, 48, 72, 30, (D, v1, v2, h, c) => `Towns $P$ and $Q$ lie $${D}$ km apart. At noon a car leaves $P$ for $Q$ at $${v1}$ km/h. At $12{:}${h}$ a second car leaves $Q$ for $P$ at $${v2}$ km/h. Time from noon until they meet is ${c} minutes.`),
    meet("canal-boats", 4, 96, 16, 24, 15, (D, v1, v2, h, c) => `Two lock gates are $${D}$ km apart on a canal. At noon a barge leaves the west lock at $${v1}$ km/h. $${h}$ min later a launch leaves the east lock at $${v2}$ km/h towards it. They meet ${c} minutes after noon.`),
    meet("ridge-hikers", 3, 18, 4, 5, 30, (D, v1, v2, h, c) => `Two trailheads are $${D}$ km apart. At noon a hiker starts east at $${v1}$ km/h. $${h}$ min later a second hiker starts west at $${v2}$ km/h. They meet ${c} minutes after noon.`),
    meet("runway-service", 4, 36, 40, 50, 12, (D, v1, v2, h, c) => `Service vehicles start from opposite ends of a $${D}$ km service road. At noon one rolls at $${v1}$ km/h; $${h}$ min later the other rolls at $${v2}$ km/h. They meet ${c} minutes after noon.`),
    meet("ski-lifts", 5, 12, 6, 8, 20, (D, v1, v2, h, c) => `Two ski lodges are $${D}$ km apart. At noon a snowmobile leaves the lower lodge at $${v1}$ km/h. $${h}$ min later another leaves the upper lodge at $${v2}$ km/h. Meeting time after noon is ${c} minutes.`),

    boat("rower-elbe", 3, 12, 2, 3, (d, td, tu, c) => `A rower covers $${d}$ km downstream in $${td}$ h and the same $${d}$ km upstream in $${tu}$ h. Speed in still water is ${c} km/h.`),
    boat("kayak-loire", 2, 18, 2, 6, (d, td, tu, c) => `A kayak travels $${d}$ km with the current in $${td}$ h and back upstream in $${tu}$ h. Still-water speed is ${c} km/h.`),
    boat("punt-cam", 4, 8, 1, 4, (d, td, tu, c) => `A punt goes $${d}$ km downriver in $${td}$ h and returns in $${tu}$ h. Speed in still water is ${c} km/h.`),
    boat("scull-thames", 3, 24, 2, 6, (d, td, tu, c) => `A racing scull covers $${d}$ km with the tide in $${td}$ h and against the tide in $${tu}$ h. Still-water speed is ${c} km/h.`),

    age("mother-daughter", 2, 24, 6, (g, a, c) => `A mother is $${g}$ years older than her daughter. In $${a}$ years the mother will be twice as old as the daughter will be then. The daughter is now ${c} years old.`),
    age("coach-athlete", 3, 20, 4, (g, a, c) => `A coach is $${g}$ years older than an athlete. In $${a}$ years the coach will be twice the athlete's age then. The athlete is now ${c} years old.`),
    age("aunt-nephew", 2, 28, 8, (g, a, c) => `An aunt is $${g}$ years older than her nephew. In $${a}$ years she will be twice as old as he will be. The nephew is now ${c} years old.`),
    age("tutor-pupil", 1, 18, 6, (g, a, c) => `A tutor is $${g}$ years older than a pupil. In $${a}$ years the tutor will be twice the pupil's age then. The pupil is now ${c} years old.`),
    age("captain-cadet", 4, 22, 6, (g, a, c) => `A ship's captain is $${g}$ years older than a cadet. In $${a}$ years the captain will be twice the cadet's age then. The cadet is now ${c} years old.`),

    coins("till-cafe", 2, 8, 12, (n, val, c) => `A cafe till holds only $2$ EUR and $5$ EUR coins: $${n}$ coins totalling $${val}$ EUR. The number of $5$ EUR coins is ${c}.`),
    coins("bus-fare", 1, 5, 10, (n, val, c) => `A bus driver's pouch has $${n}$ coins of $2$ EUR and $5$ EUR, worth $${val}$ EUR in all. There are ${c} coins of $5$ EUR.`),
    coins("museum-shop", 3, 11, 9, (n, val, c) => `A museum shop drawer contains $${n}$ coins of $2$ EUR and $5$ EUR adding to $${val}$ EUR. The count of $5$ EUR coins is ${c}.`),
    coins("ferry-kiosk", 2, 6, 14, (n, val, c) => `A ferry kiosk has $${n}$ coins, only $2$ EUR and $5$ EUR, summing to $${val}$ EUR. The number of $5$ EUR coins is ${c}.`),

    tank("pump-cellar", 2, 12, 10, 1, 3, (r, m, n, d, c) => `A cellar pump delivers $${r}$ L/min. After $${m}$ min the tank is $\\frac{${n}}{${d}}$ full. Capacity is ${c} litres.`),
    tank("fountain", 1, 8, 15, 1, 2, (r, m, n, d, c) => `A fountain pump fills at $${r}$ L/min. After $${m}$ min the basin is $\\frac{${n}}{${d}}$ full. The basin holds ${c} litres.`),
    tank("dairy-vat", 3, 20, 12, 2, 5, (r, m, n, d, c) => `A dairy vat is filled at $${r}$ L/min. After $${m}$ min it is $\\frac{${n}}{${d}}$ full. Capacity is ${c} litres.`),
    tank("rain-cistern", 2, 6, 20, 1, 4, (r, m, n, d, c) => `Rainwater is pumped at $${r}$ L/min into a cistern. After $${m}$ min the cistern is $\\frac{${n}}{${d}}$ full. It holds ${c} litres.`),

    rod("aluminium-bar", 1, 18, 8, (tot, d, c) => `An aluminium bar $${tot}$ cm long is cut into two pieces; one piece is $${d}$ cm longer than the other. The shorter piece is ${c} cm.`),
    rod("copper-pipe", 2, 25, 10, (tot, d, c) => `A copper pipe of $${tot}$ cm is sawn into two lengths differing by $${d}$ cm. The shorter length is ${c} cm.`),
    rod("oak-beam", 2, 40, 16, (tot, d, c) => `An oak beam $${tot}$ cm long is split into two parts; one part exceeds the other by $${d}$ cm. The shorter part is ${c} cm.`),
    rod("ribbon", 1, 12, 6, (tot, d, c) => `A ribbon of $${tot}$ cm is cut so one piece is $${d}$ cm longer than the other. The shorter piece is ${c} cm.`),

    odds("quiz-odds", 1, 9, (sum, c) => `Three consecutive odd integers add to $${sum}$. The largest is ${c}.`),
    odds("lockers", 2, 15, (sum, c) => `Locker numbers that are three consecutive odd integers sum to $${sum}$. The largest locker number is ${c}.`),
    odds("pages", 1, 7, (sum, c) => `Three consecutive odd page numbers add to $${sum}$. The last of them is ${c}.`),
    odds("seats", 3, 21, (sum, c) => `Three consecutive odd seat numbers sum to $${sum}$. The largest is ${c}.`),

    fracNum("exam-sevenths", 2, 56, (c) => `Four-sevenths of a number exceed two-sevenths of the same number by $16$. The number is ${c}.`),
    twice("twice-plus-7", 1, 11, 7, (add, rhs, c) => `Twice a number plus $${add}$ equals $${rhs}$. The number is ${c}.`),
    twice("twice-plus-9", 1, 8, 9, (add, rhs, c) => `Nine more than twice a number equals $${rhs}$. The number is ${c}.`),
    twice("twice-plus-5", 2, 14, 5, (add, rhs, c) => `Twice a warehouse code plus $${add}$ equals $${rhs}$. The code is ${c}.`),
    twice("twice-plus-12", 2, 9, 12, (add, rhs, c) => `A serial number satisfies: twice the number plus $${add}$ is $${rhs}$. The number is ${c}.`),
    twice("twice-plus-3", 1, 16, 3, (add, rhs, c) => `Three more than twice a score equals $${rhs}$. The score is ${c}.`),

    trip("village-post", 3, 36, 18, 12, (d, v1, v2, c) => `A post rider goes $${d}$ km to a village at $${v1}$ km/h and returns at $${v2}$ km/h. The round trip lasts ${c} hours.`),
    trip("market-cart", 2, 24, 12, 8, (d, v1, v2, c) => `A cart travels $${d}$ km to market at $${v1}$ km/h and back at $${v2}$ km/h. Total time is ${c} hours.`),
    trip("island-ferry", 3, 30, 15, 10, (d, v1, v2, c) => `A ferry covers $${d}$ km out at $${v1}$ km/h and the same $${d}$ km back at $${v2}$ km/h. The round trip lasts ${c} hours.`),
    trip("hill-bike", 4, 20, 10, 5, (d, v1, v2, c) => `A cyclist rides $${d}$ km uphill at $${v1}$ km/h and down the same road at $${v2}$ km/h. Total time is ${c} hours.`),

    pathArea("gravel-lawn", 3, 8, 4, 1, (w, L, b, c) => `A rectangular lawn $${w}$ m by $${L}$ m is surrounded by a uniform $${b}$ m gravel path. The path alone covers ${c} m$^{2}$.`),
    pathArea("paved-garden", 4, 10, 6, 2, (w, L, b, c) => `A garden $${w}$ m by $${L}$ m has a paved strip $${b}$ m wide all around. The paving covers ${c} m$^{2}$.`),
    pathArea("moat-keep", 5, 12, 8, 1, (w, L, b, c) => `A keep $${w}$ m by $${L}$ m is ringed by a $${b}$ m walkway. The walkway area is ${c} m$^{2}$.`),
    pathArea("frame-pitch", 3, 6, 3, 1, (w, L, b, c) => `A practice pitch $${w}$ m by $${L}$ m has a $${b}$ m runoff strip around it. The runoff covers ${c} m$^{2}$.`),

    discount("headset-shop", 4, 80, (p0, c) => `A headset lists at $${p0}$ EUR. The shop first takes off $\\frac{1}{4}$, then $\\frac{1}{10}$ of the reduced tag, then adds VAT of $\\frac{1}{5}$ of the discounted price. The customer pays ${c} EUR.`),
    discount("jacket-boutique", 5, 120, (p0, c) => `A jacket is tagged $${p0}$ EUR. After $\\frac{1}{4}$ off, then $\\frac{1}{10}$ off the new tag, VAT of $\\frac{1}{5}$ is added. The till total is ${c} EUR.`),
    discount("lens-optician", 4, 200, (p0, c) => `An optician lists a lens at $${p0}$ EUR, knocks off $\\frac{1}{4}$, then $\\frac{1}{10}$ of the remainder, then adds $\\frac{1}{5}$ VAT. The customer pays ${c} EUR.`),

    mean3("quiz-three", 2, 8, 10, 12, (m, a, b, c) => `On a three-question quiz the class average is $${m}$. Student $P$ scored $${a}$ and student $Q$ scored $${b}$. Student $R$'s score is ${c} points.`),
    mean3("lab-reports", 3, 14, 16, 15, (m, a, b, c) => `Three lab reports average $${m}$ points. The first two scores are $${a}$ and $${b}$. The third score is ${c} points.`),
    mean3("sprint-times", 2, 9, 11, 10, (m, a, b, c) => `Three sprint scores average $${m}$. Two of them are $${a}$ and $${b}$. The remaining score is ${c}.`),
    mean3("recital", 1, 6, 8, 9, (m, a, b, c) => `Three recital marks average $${m}$. Two marks are $${a}$ and $${b}$. The third mark is ${c}.`),

    digits("two-digit-27", 2, 2, 7, (te, u, c) => `A two-digit number has tens digit $${te}$ and units digit $${u}$. Swapping the digits increases the number by ${c}.`),
    digits("two-digit-18", 1, 1, 8, (te, u, c) => `A number has tens digit $${te}$ and units $${u}$. Reversing the digits increases it by ${c}.`),
    digits("two-digit-36", 3, 3, 6, (te, u, c) => `From tens digit $${te}$ and units $${u}$, swapping digits raises the value by ${c}.`),
    digits("two-digit-45", 2, 4, 5, (te, u, c) => `A ticket code is the two-digit number with tens $${te}$ and units $${u}$. Digit reversal increases it by ${c}.`),

    chase("police-van", 4, 60, 90, 10, (v1, v2, h, c) => `A van leaves at $2$ pm at $${v1}$ km/h. Police pursue from the same place at $2{:}${String(h).padStart(2, "0")}$ at $${v2}$ km/h. They catch the van after ${c} minutes of chasing.`),
    chase("mail-bike", 3, 20, 30, 15, (v1, v2, h, c) => `A mail bike leaves at $${v1}$ km/h. $${h}$ min later a scooter chases at $${v2}$ km/h. The scooter catches up after ${c} minutes.`),
    chase("freight-car", 5, 50, 80, 12, (v1, v2, h, c) => `Freight leaves a yard at $${v1}$ km/h. After $${h}$ min a faster car follows at $${v2}$ km/h. Catch-up time is ${c} minutes.`),
    chase("school-bus", 3, 40, 60, 9, (v1, v2, h, c) => `A school bus rolls at $${v1}$ km/h. $${h}$ min later a parent drives the same road at $${v2}$ km/h. The parent catches the bus after ${c} minutes.`),

    mix("saline-lab", 3, 2, 10, 3, 20, (v1, c1, v2, c2, c) => `A chemist pours $${v1}$ L of $${c1}\\%$ saline, then $${v2}$ L of $${c2}\\%$ saline. The resulting concentration is ${c}\\%.`),
    mix("paint-shop", 2, 4, 15, 6, 35, (v1, c1, v2, c2, c) => `A painter mixes $${v1}$ L of $${c1}\\%$ pigment with $${v2}$ L of $${c2}\\%$ pigment. The blend is ${c}\\% pigment.`),
    mix("antifreeze", 4, 2, 30, 2, 10, (v1, c1, v2, c2, c) => `A mechanic mixes $${v1}$ L of $${c1}\\%$ antifreeze with $${v2}$ L of $${c2}\\%$ antifreeze. The mixture is ${c}\\%.`),
    mix("coffee-blend", 2, 1, 8, 3, 16, (v1, c1, v2, c2, c) => `A cafe mixes $${v1}$ L of $${c1}\\%$ concentrate with $${v2}$ L of $${c2}\\%$ concentrate. The drink is ${c}\\% concentrate.`),

    tickets("cinema", 2, 12, 5, 4, 6, (ch, nA, nC, tot, c) => `A cinema sells $${nA}$ adult and $${nC}$ child tickets. A child ticket costs $${ch}$ EUR and the till shows $${tot}$ EUR. An adult ticket costs ${c} EUR.`),
    tickets("ferry-deck", 3, 18, 8, 3, 5, (ch, nA, nC, tot, c) => `A ferry desk sells $${nA}$ adult and $${nC}$ child fares. Child fare is $${ch}$ EUR; the batch totals $${tot}$ EUR. Adult fare is ${c} EUR.`),
    tickets("concert", 4, 25, 10, 2, 4, (ch, nA, nC, tot, c) => `A concert booth sells $${nA}$ adult and $${nC}$ student tickets. A student ticket is $${ch}$ EUR and the group pays $${tot}$ EUR. An adult ticket is ${c} EUR.`),
    tickets("museum-gate", 1, 9, 4, 5, 3, (ch, nA, nC, tot, c) => `A museum gate takes $${nA}$ adult and $${nC}$ child tickets. Child price $${ch}$ EUR, total $${tot}$ EUR. Adult price is ${c} EUR.`),

    iso("banner", 1, 10, 8, (p, b, c) => `An isosceles banner has perimeter $${p}$ cm and base $${b}$ cm. Each equal side is ${c} cm.`),
    iso("roof-truss", 3, 13, 10, (p, b, c) => `An isosceles roof truss has perimeter $${p}$ m and base $${b}$ m. Each equal rafter is ${c} m.`),
    iso("warning-sign", 2, 7, 6, (p, b, c) => `An isosceles warning triangle has perimeter $${p}$ dm and base $${b}$ dm. Each equal side is ${c} dm.`),
    iso("garden-bed", 2, 9, 12, (p, b, c) => `An isosceles flower bed has perimeter $${p}$ m and base $${b}$ m. Each equal side is ${c} m.`),

    wage("clerk", 2, 40, (net, c) => `After a $\\frac{1}{5}$ tax a clerk takes home $${net}$ EUR. The gross wage is ${c} EUR.`),
    wage("apprentice", 1, 20, (net, c) => `An apprentice keeps $\\frac{4}{5}$ of pay and receives $${net}$ EUR net. Gross pay is ${c} EUR.`),
    wage("guide", 3, 60, (net, c) => `A tour guide is taxed $\\frac{1}{5}$ and nets $${net}$ EUR. Gross pay is ${c} EUR.`),

    prize("city-marathon", 5, 244, (tot, c) => `A city marathon splits $${tot}$ EUR into three gross prizes: winner $W$, runner-up $\\frac{4}{5}W$, third $\\frac{16}{25}W$. Then $\\frac{3}{20}$ tax is withheld from each. The runner-up's net is ${c} EUR.`),
    prize("chess-open", 5, 122, (tot, c) => `A chess open awards $${tot}$ EUR as $W$, $\\frac{4}{5}W$, and $\\frac{16}{25}W$, then withholds $\\frac{3}{20}$ tax. Runner-up net is ${c} EUR.`),
    prize("school-fete", 4, 183, (tot, c) => `A school fete prize fund of $${tot}$ EUR is split $W$, $\\frac{4}{5}W$, $\\frac{16}{25}W$ with $\\frac{3}{20}$ tax. Runner-up net is ${c} EUR.`),

    // extra unique linear relations to reach 165
    item("lin-half-then-8", "4.1", 1, (t) => {
      const x = 18;
      const c = claim(x, t);
      return {
        statement: `Half of a number, increased by $8$, equals $17$. The number is ${c.phrase}.`,
        expl: E(t, `Let the number be $x$.`, [`$$\\frac{x}{2}+8=17$$`, `$$\\frac{x}{2}=9$$`, `$$x=18$$`], cmpLine(c, `The number is $18$. That value`)),
      };
    }),
    item("lin-third-minus", "4.1", 2, (t) => {
      const x = 24;
      const c = claim(x, t);
      return {
        statement: `A third of a number minus $5$ equals $3$. The number is ${c.phrase}.`,
        expl: E(t, `Let the number be $x$.`, [`$$\\frac{x}{3}-5=3$$`, `$$\\frac{x}{3}=8$$`, `$$x=24$$`], cmpLine(c, `The number is $24$. That value`)),
      };
    }),
    item("lin-sum-diff-pair", "4.1", 2, (t) => {
      const larger = 17;
      const c = claim(larger, t);
      return {
        statement: `Two numbers add to $30$ and differ by $4$. The larger number is ${c.phrase}.`,
        expl: E(t, `Let the numbers be $x>y$. Then $x+y=30$ and $x-y=4$.`, [`$$2x=34$$`, `$$x=17$$`], cmpLine(c, `The larger number is $17$. That value`)),
      };
    }),
    item("lin-consecutive-three", "4.1", 1, (t) => {
      const mid = 11;
      const c = claim(mid, t);
      return {
        statement: `Three consecutive integers add to $33$. The middle integer is ${c.phrase}.`,
        expl: E(t, `Write the integers as $n-1$, $n$, $n+1$.`, [`$$3n=33$$`, `$$n=11$$`], cmpLine(c, `The middle integer is $11$. That value`)),
      };
    }),
    item("lin-even-triple", "4.1", 2, (t) => {
      const max = 14;
      const c = claim(max, t);
      return {
        statement: `Three consecutive even integers add to $36$. The largest is ${c.phrase}.`,
        expl: E(t, `Write them as $n$, $n+2$, $n+4$.`, [`$$3n+6=36$$`, `$$n=10$$`], cmpLine(c, `The largest is $14$. That value`)),
      };
    }),
    item("lin-phone-bill", "4.1", 2, (t) => {
      const bill = 8 + 2 * 12;
      const c = claim(bill, t);
      return {
        statement: `A plan charges $8$ EUR per month plus $2$ EUR per extra hour. With $12$ extra hours the bill is ${c.phrase} EUR.`,
        expl: E(t, `The bill is a linear function of extra hours $h$.`, [`$$8+2\\cdot 12=32$$`], cmpLine(c, `The bill is $32$ EUR. That total`)),
      };
    }),
    item("lin-taxi-eq", "4.1", 3, (t) => {
      const km = 9;
      const c = claim(km, t);
      return {
        statement: `A taxi charges $5$ EUR plus $2$ EUR per km. A ride costs $23$ EUR. The distance is ${c.phrase} km.`,
        expl: E(t, `Let distance be $d$ km.`, [`$$5+2d=23$$`, `$$2d=18$$`, `$$d=9$$`], cmpLine(c, `The distance is $9$ km. That distance`)),
      };
    }),
    item("lin-books-shelf", "4.1", 1, (t) => {
      const n = 7;
      const c = claim(n, t);
      return {
        statement: `Seven more than three times the number of books on a shelf equals $28$. The number of books is ${c.phrase}.`,
        expl: E(t, `Let $n$ be the number of books.`, [`$$3n+7=28$$`, `$$3n=21$$`, `$$n=7$$`], cmpLine(c, `There are $7$ books. That count`)),
      };
    }),
    item("lin-angle-supp", "4.1", 2, (t) => {
      const x = 55;
      const c = claim(x, t);
      return {
        statement: `Two supplementary angles differ by $70^{\\circ}$. The smaller angle is ${c.phrase} degrees.`,
        expl: E(t, `Let the smaller angle be $x$. Then the larger is $x+70$, and they sum to $180$.`, [`$$x+(x+70)=180$$`, `$$2x=110$$`, `$$x=55$$`], cmpLine(c, `The smaller angle is $55^{\\circ}$. That measure`)),
      };
    }),
    item("lin-comp-angles", "4.1", 1, (t) => {
      const x = 35;
      const c = claim(x, t);
      return {
        statement: `Two complementary angles differ by $20^{\\circ}$. The smaller is ${c.phrase} degrees.`,
        expl: E(t, `Let the smaller angle be $x$. Complementary angles sum to $90$.`, [`$$x+(x+20)=90$$`, `$$2x=70$$`, `$$x=35$$`], cmpLine(c, `The smaller angle is $35^{\\circ}$. That measure`)),
      };
    }),
    item("lin-avg-speed-split", "4.1", 4, (t) => {
      const ttot = 5;
      const c = claim(ttot, t);
      return {
        statement: `A driver covers $60$ km at $20$ km/h and then $60$ km at $30$ km/h. Total time is ${c.phrase} hours.`,
        expl: E(t, `Add the two legs.`, [`$$\\frac{60}{20}=3$$`, `$$\\frac{60}{30}=2$$`, `$$T=5$$`], cmpLine(c, `Total time is $5$ hours. That duration`)),
      };
    }),
    item("lin-remain-work-hours", "4.1", 3, (t) => {
      const need = 4;
      const c = claim(need, t);
      return {
        statement: `A job takes $6$ hours alone. After $2$ hours at that rate, the remaining work still needs ${c.phrase} more hours.`,
        expl: E(t, `In $2$ hours the worker finishes $\\frac{2}{6}=\\frac{1}{3}$ of the job, so $\\frac{2}{3}$ remains.`, [`$$\\frac{2}{3}\\cdot 6=4$$`], cmpLine(c, `Four hours remain. That duration`)),
      };
    }),
    item("lin-scale-map", "4.1", 2, (t) => {
      const real = 36;
      const c = claim(real, t);
      return {
        statement: `On a map $2$ cm represents $9$ km. A road that measures $8$ cm on the map has real length ${c.phrase} km.`,
        expl: E(t, `The scale gives a linear equation in the real length $x$.`, [`$$\\frac{2}{9}=\\frac{8}{x}$$`, `$$2x=72$$`, `$$x=36$$`], cmpLine(c, `The road is $36$ km. That length`)),
      };
    }),
    item("lin-share-ratio", "4.1", 3, (t) => {
      const a = 18;
      const c = claim(a, t);
      return {
        statement: `Two partners share $30$ EUR in the ratio $3:2$. The larger share is ${c.phrase} EUR.`,
        expl: E(t, `Let the parts be $3k$ and $2k$.`, [`$$3k+2k=30$$`, `$$5k=30$$`, `$$k=6$$`, `$$3k=18$$`], cmpLine(c, `The larger share is $18$ EUR. That amount`)),
      };
    }),
    item("lin-temp-linear", "4.1", 2, (t) => {
      const T = 42;
      const c = claim(T, t);
      return {
        statement: `A kiln cools $4^{\\circ}$C every minute from $90^{\\circ}$C. After $12$ minutes the temperature is ${c.phrase} degrees.`,
        expl: E(t, `Temperature falls linearly.`, [`$$T=90-4\\cdot 12$$`, `$$T=42$$`], cmpLine(c, `The temperature is $42^{\\circ}$C. That reading`)),
      };
    }),
    item("lin-markup-eq", "4.1", 2, (t) => {
      const price = 48;
      const c = claim(price, t);
      return {
        statement: `An item costs $40$ EUR and is marked up by $20\\%$. The shelf price is ${c.phrase} EUR.`,
        expl: E(t, `Shelf price is cost times $1.2$.`, [`$$40\\cdot\\frac{6}{5}=48$$`], cmpLine(c, `The shelf price is $48$ EUR. That price`)),
      };
    }),
    item("lin-water-inflow", "4.1", 2, (t) => {
      const tmin = 8;
      const c = claim(tmin, t);
      return {
        statement: `An empty $96$ L tank is filled at $12$ L/min. It is full after ${c.phrase} minutes.`,
        expl: E(t, `Time is capacity over rate.`, [`$$t=\\frac{96}{12}=8$$`], cmpLine(c, `The tank fills in $8$ min. That duration`)),
      };
    }),
    item("lin-perimeter-iso-right", "4.1", 4, (t) => {
      const leg = 12;
      const c = claim(leg, t);
      return {
        statement: `An isosceles right triangle has hypotenuse $12\\sqrt{2}$ cm. Each leg is ${c.phrase} cm.`,
        expl: E(t, `In an isosceles right triangle the hypotenuse is $s\\sqrt{2}$.`, [`$$s\\sqrt{2}=12\\sqrt{2}$$`, `$$s=12$$`], cmpLine(c, `Each leg is $12$ cm. That length`)),
      };
    }),
    item("lin-average-ages", "4.1", 2, (t) => {
      const child = 20;
      const c = claim(child, t);
      return {
        statement: `The average age of a parent and child is $28$ years. The parent is $36$. The child is ${c.phrase} years old.`,
        expl: E(t, `The mean of the two ages is $28$.`, [`$$\\frac{36+d}{2}=28$$`, `$$36+d=56$$`, `$$d=20$$`], cmpLine(c, `The child is $20$ years old. That age`)),
      };
    }),
    item("lin-hotel-nights", "4.1", 2, (t) => {
      const n = 5;
      const c = claim(n, t);
      return {
        statement: `A hotel bill is $40$ EUR plus $18$ EUR per night. The total is $130$ EUR. The stay lasts ${c.phrase} nights.`,
        expl: E(t, `Let $n$ be the number of nights.`, [`$$40+18n=130$$`, `$$18n=90$$`, `$$n=5$$`], cmpLine(c, `The stay is $5$ nights. That count`)),
      };
    }),
    item("lin-printer-pages", "4.1", 1, (t) => {
      const mins = 4;
      const c = claim(mins, t);
      return {
        statement: `A printer has already made $20$ pages and then prints $10$ pages per minute. When the stack reaches $60$ pages, the extra printing time is ${c.phrase} minutes.`,
        expl: E(t, `Let $t$ be the extra minutes.`, [`$$20+10t=60$$`, `$$10t=40$$`, `$$t=4$$`], cmpLine(c, `The extra time is $4$ min. That duration`)),
      };
    }),
    item("lin-bridge-walk", "4.1", 2, (t) => {
      const tmin = 24;
      const c = claim(tmin, t);
      return {
        statement: `A walker covers a $6$ km bridge at $15$ km/h. The crossing time is ${c.phrase} minutes.`,
        expl: E(t, `Time in hours is distance over speed; convert to minutes.`, [`$$t=\\frac{6}{15}=\\frac{2}{5}$$`, `$$\\frac{2}{5}\\cdot 60=24$$`], cmpLine(c, `The crossing lasts $24$ min. That duration`)),
      };
    }),
    item("lin-savings-weeks", "4.1", 2, (t) => {
      const w = 8;
      const c = claim(w, t);
      return {
        statement: `A student has $12$ EUR and saves $6$ EUR each week. The pot reaches $60$ EUR after ${c.phrase} weeks.`,
        expl: E(t, `Let $w$ be the number of weeks.`, [`$$12+6w=60$$`, `$$6w=48$$`, `$$w=8$$`], cmpLine(c, `It takes $8$ weeks. That count`)),
      };
    }),
    item("lin-fence-three-sides", "4.1", 3, (t) => {
      const depth = 18;
      const c = claim(depth, t);
      return {
        statement: `A farmer has $50$ m of railing for a rectangular pen against a barn, so only three sides are fenced. The width along the barn is $14$ m. The depth into the field is ${c.phrase} m.`,
        expl: E(t, `Three-sided fence: $2\\ell+14=50$.`, [`$$2\\ell=36$$`, `$$\\ell=18$$`], cmpLine(c, `The depth is $18$ m. That length`)),
      };
    }),
    item("lin-mixture-milk", "4.1", 3, (t) => {
      const w = 2;
      const c = claim(w, t);
      return {
        statement: `$6$ litres of milk containing $8\\%$ fat are mixed with water to obtain $6\\%$ fat. The water added is ${c.phrase} litres.`,
        expl: E(
          t,
          `Fat is conserved. The original fat is $0.08\\cdot 6$, and the mixture volume is $6+w$.`,
          [`$$0.08\\cdot 6=0.06(6+w)$$`, `$$0.48=0.36+0.06w$$`, `$$0.12=0.06w$$`, `$$w=2$$`],
          cmpLine(c, `Two litres of water are added. That volume`)
        ),
      };
    }),
    item("lin-crate-boxes", "4.1", 1, (t) => {
      const n = 11;
      const c = claim(n, t);
      return {
        statement: `After $4$ boxes are taken from a crate, three times the remainder equals $21$. The crate first held ${c.phrase} boxes.`,
        expl: E(t, `Let $n$ be the original count.`, [`$$3(n-4)=21$$`, `$$n-4=7$$`, `$$n=11$$`], cmpLine(c, `The crate held $11$ boxes. That count`)),
      };
    }),
    item("lin-bus-stops", "4.1", 2, (t) => {
      const s = 9;
      const c = claim(s, t);
      return {
        statement: `A bus already made $3$ stops and then makes $2$ stops every $5$ minutes. After $15$ more minutes the total stop count is ${c.phrase}.`,
        expl: E(t, `Stops increase linearly with the extra time.`, [`$$3+2\\cdot\\frac{15}{5}=3+6=9$$`], cmpLine(c, `There are $9$ stops in all. That count`)),
      };
    }),
    item("lin-orchestra", "4.1", 2, (t) => {
      const v = 12;
      const c = claim(v, t);
      return {
        statement: `Violins outnumber cellos by $5$. Together there are $19$ of these instruments. The number of violins is ${c.phrase}.`,
        expl: E(t, `Let $v$ be violins and $c$ cellos.`, [`$$v=c+5$$`, `$$v+c=19$$`, `$$2c+5=19$$`, `$$c=7$$`, `$$v=12$$`], cmpLine(c, `There are $12$ violins. That count`)),
      };
    }),
    item("lin-postage-stamps", "4.1", 1, (t) => {
      const x = 8;
      const c = claim(x, t);
      return {
        statement: `Five times a stamp collection, minus $7$, equals $33$. The number of stamps is ${c.phrase}.`,
        expl: E(t, `Let $x$ be the number of stamps.`, [`$$5x-7=33$$`, `$$5x=40$$`, `$$x=8$$`], cmpLine(c, `There are $8$ stamps. That count`)),
      };
    }),
    item("lin-ladder-against", "4.1", 3, (t) => {
      const foot = 9;
      const c = claim(foot, t);
      return {
        statement: `A $15$ m ladder leans so that height $h$ and foot distance $d$ satisfy $h=12$ and $d$ is the remaining Pythagorean leg. The foot is ${c.phrase} m from the wall.`,
        expl: E(t, `The ladder is the hypotenuse of a right triangle.`, [`$$d^2+12^2=15^2$$`, `$$d^2+144=225$$`, `$$d^2=81$$`, `$$d=9$$`], cmpLine(c, `The foot is $9$ m from the wall. That distance`)),
      };
    }),
    item("lin-shop-doubles", "4.1", 2, (t) => {
      const x = 6;
      const c = claim(x, t);
      return {
        statement: `A shop doubles a price and then adds $6$ EUR; the till shows $18$ EUR. The original price is ${c.phrase} EUR.`,
        expl: E(t, `Let the original price be $x$.`, [`$$2x+6=18$$`, `$$2x=12$$`, `$$x=6$$`], cmpLine(c, `The original price is $6$ EUR. That price`)),
      };
    }),
    item("lin-recipe-grams", "4.1", 2, (t) => {
      const need = 21;
      const c = claim(need, t);
      return {
        statement: `A kitchen list uses $12$ g of yeast for $8$ loaves. Baking $14$ loaves at the same rate needs ${c.phrase} g of yeast.`,
        expl: E(t, `Yeast scales linearly with the loaf count.`, [`$$\\frac{12}{8}=\\frac{y}{14}$$`, `$$y=21$$`], cmpLine(c, `The baker needs $21$ g. That mass`)),
      };
    }),
    item("lin-clock-hands-not", "4.1", 3, (t) => {
      const x = 28;
      const c = claim(x, t);
      return {
        statement: `A number decreased by $4$ is a third of $72$. The number is ${c.phrase}.`,
        expl: E(t, `Let the number be $x$.`, [`$$x-4=\\frac{72}{3}$$`, `$$x-4=24$$`, `$$x=28$$`], cmpLine(c, `The number is $28$. That value`)),
      };
    }),
    item("lin-team-jerseys", "4.1", 1, (t) => {
      const n = 16;
      const c = claim(n, t);
      return {
        statement: `A coach orders jerseys so that four less than twice the squad size equals $28$. The squad size is ${c.phrase}.`,
        expl: E(t, `Let $n$ be the squad size.`, [`$$2n-4=28$$`, `$$2n=32$$`, `$$n=16$$`], cmpLine(c, `The squad has $16$ players. That count`)),
      };
    }),
    item("lin-pool-depth", "4.1", 2, (t) => {
      const d = 2;
      const c = claim(d, t);
      return {
        statement: `A rectangular pool has volume $48$ m$^{3}$, length $8$ m and width $3$ m. The uniform depth is ${c.phrase} m.`,
        expl: E(t, `Volume is length times width times depth.`, [`$$8\\cdot 3\\cdot d=48$$`, `$$24d=48$$`, `$$d=2$$`], cmpLine(c, `The depth is $2$ m. That depth`)),
      };
    }),
    item("lin-exchange", "4.1", 3, (t) => {
      const n = 3;
      const c = claim(n, t);
      return {
        statement: `$5$ notebooks cost as much as $3$ pens plus $6$ EUR. A pen costs $3$ EUR. A notebook costs ${c.phrase} EUR.`,
        expl: E(t, `Let a notebook cost $n$ EUR.`, [`$$5n=3\\cdot 3+6$$`, `$$5n=15$$`, `$$n=3$$`], cmpLine(c, `A notebook costs $3$ EUR. That price`)),
      };
    }),
  ];
}
