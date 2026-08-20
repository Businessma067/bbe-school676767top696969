/**
 * Unique 4.2 quadratic word problems. Each scene used at most once.
 */
import { E, claim, cmpLine, item } from "./ch4-lib.mjs";

function area(id, tier, s, d, unit, scene) {
  const L = s + d;
  const A = s * L;
  return item(id, "4.2", tier, (t) => {
    const c = claim(L, t);
    return {
      statement: scene(A, d, c.phrase, unit),
      expl: E(
        t,
        `Let the shorter side be $x$. The area condition is a quadratic equation.`,
        [`$$x(x+${d})=${A}$$`, `$$x^2+${d}x-${A}=0$$`, `$$(x-${s})(x+${L})=0$$`, `$$x=${s}$$`],
        cmpLine(c, `The longer side is $${L}$ ${unit}. That length`)
      ),
    };
  });
}

function consecProd(id, tier, n, scene) {
  const p = n * (n + 1);
  return item(id, "4.2", tier, (t) => {
    const c = claim(n + 1, t);
    return {
      statement: scene(p, c.phrase),
      expl: E(
        t,
        `Let the smaller integer be $n$. Consecutive integers differ by $1$.`,
        [`$$n(n+1)=${p}$$`, `$$n^2+n-${p}=0$$`, `$$(n-${n})(n+${n + 1})=0$$`, `$$n=${n}$$`],
        cmpLine(c, `The larger integer is $${n + 1}$. That integer`)
      ),
    };
  });
}

function vieta(id, tier, r1, r2, scene) {
  const s = r1 + r2;
  const p = r1 * r2;
  const larger = Math.max(r1, r2);
  return item(id, "4.2", tier, (t) => {
    const c = claim(larger, t);
    return {
      statement: scene(p, s, c.phrase),
      expl: E(
        t,
        `The numbers are roots of $t^2-(\\text{sum})t+(\\text{product})=0$.`,
        [`$$t^2-${s}t+${p}=0$$`, `$$(t-${r1})(t-${r2})=0$$`],
        cmpLine(c, `The larger root is $${larger}$. That value`)
      ),
    };
  });
}

function recip(id, tier, n, scene) {
  const num = n * n + 1;
  return item(id, "4.2", tier, (t) => {
    const c = claim(num, t);
    return {
      statement: scene(n, num, c.phrase),
      expl: E(
        t,
        `A positive number $x$ and its reciprocal add to a single fraction.`,
        [`$$x+\\frac{1}{x}=\\frac{${num}}{${n}}$$`, `$$x^2+1=\\frac{${num}}{${n}}x$$`, `$$nx^2-${num}x+n=0$$`, `$$x=${n}$$`],
        cmpLine(c, `The numerator of the sum in lowest terms is $${num}$. That numerator`)
      ),
    };
  });
}

function noReal(id, tier, p, q, scene) {
  const D = p * p - 4 * q;
  return item(id, "4.2", tier, (t) => {
    const phrase = t ? "no real roots" : "two real roots";
    return {
      statement: scene(p, q, phrase),
      expl: E(
        t,
        `A quadratic $x^2+bx+c=0$ has real roots only when the discriminant is nonnegative.`,
        [`$$\\Delta=${p}^2-4\\cdot${q}=${D}$$`],
        t
          ? `Since $\\Delta=${D}<0$, there are no real roots. So the statement is True.`
          : `Since $\\Delta=${D}<0$, there are not two real roots. So the statement is False.`
      ),
    };
  });
}

function proj(id, tier, v0, scene) {
  const hmax = (v0 * v0) / 20;
  return item(id, "4.2", tier, (t) => {
    const c = claim(hmax, t);
    return {
      statement: scene(v0, c.phrase),
      expl: E(
        t,
        `The height model $h=v_0 t-5t^2$ is a downward parabola. The vertex is at $t=v_0/10$.`,
        [`$$t=\\frac{${v0}}{10}$$`, `$$h_{\\max}=\\frac{${v0}^2}{20}=${hmax}$$`],
        cmpLine(c, `The maximum height is $${hmax}$ m. That height`)
      ),
    };
  });
}

function box(id, tier, a, b, x, scene) {
  const N = (x + a) * (x + b);
  return item(id, "4.2", tier, (t) => {
    const c = claim(x, t);
    return {
      statement: scene(a, b, N, c.phrase),
      expl: E(
        t,
        `Let the unknown be $x$. Expanding gives a quadratic.`,
        [`$$(x+${a})(x+${b})=${N}$$`, `$$x^2+${a + b}x+${a * b}-${N}=0$$`, `$$x^2+${a + b}x-${N - a * b}=0$$`, `$$x=${x}$$`],
        cmpLine(c, `The admissible value is $${x}$. That value`)
      ),
    };
  });
}

export function quadItems() {
  return [
    area("iris-plot", 2, 8, 4, "cm", (A, d, c, u) => `A gardener plants a rectangular iris bed of area $${A}$ cm$^{2}$. The length is $${d}$ cm more than the width. The length is ${c} ${u}.`),
    area("oak-deck", 2, 6, 3, "m", (A, d, c, u) => `A carpenter lays a rectangular oak deck of area $${A}$ m$^{2}$. Length exceeds width by $${d}$ m. The length is ${c} ${u}.`),
    area("school-mural", 1, 5, 2, "m", (A, d, c, u) => `A rectangular mural covers $${A}$ m$^{2}$. Height exceeds width by $${d}$ m. The height is ${c} ${u}.`),
    area("solar-panel", 3, 10, 5, "m", (A, d, c, u) => `A solar array is a rectangle of area $${A}$ m$^{2}$. One side is $${d}$ m longer than the other. The longer side is ${c} ${u}.`),
    area("photo-frame", 1, 7, 3, "cm", (A, d, c, u) => `A photo frame encloses $${A}$ cm$^{2}$. Length is $${d}$ cm more than width. The length is ${c} ${u}.`),
    area("pool-cover", 3, 9, 6, "m", (A, d, c, u) => `A pool cover is rectangular with area $${A}$ m$^{2}$. Length exceeds width by $${d}$ m. The length is ${c} ${u}.`),
    area("balcony", 2, 4, 2, "m", (A, d, c, u) => `A balcony floor has area $${A}$ m$^{2}$. One side is $${d}$ m longer than the adjacent side. The longer side is ${c} ${u}.`),
    area("rug", 1, 8, 2, "dm", (A, d, c, u) => `A rectangular rug covers $${A}$ dm$^{2}$. Length exceeds width by $${d}$ dm. The length is ${c} ${u}.`),
    area("parking-bay", 2, 5, 3, "m", (A, d, c, u) => `A parking bay has area $${A}$ m$^{2}$. Length is $${d}$ m more than width. The length is ${c} ${u}.`),
    area("greenhouse-floor", 3, 12, 4, "m", (A, d, c, u) => `A greenhouse floor measures $${A}$ m$^{2}$. Length exceeds width by $${d}$ m. The length is ${c} ${u}.`),
    area("poster", 1, 6, 4, "dm", (A, d, c, u) => `A poster has area $${A}$ dm$^{2}$. The longer side is $${d}$ dm more than the shorter. The longer side is ${c} ${u}.`),
    area("window", 2, 9, 3, "dm", (A, d, c, u) => `A window pane has area $${A}$ dm$^{2}$. Height exceeds width by $${d}$ dm. The height is ${c} ${u}.`),
    area("stage", 4, 11, 5, "m", (A, d, c, u) => `A stage platform covers $${A}$ m$^{2}$. Length is $${d}$ m more than width. The length is ${c} ${u}.`),
    area("sandpit", 2, 7, 5, "m", (A, d, c, u) => `A sandpit has area $${A}$ m$^{2}$. One side exceeds the other by $${d}$ m. The longer side is ${c} ${u}.`),
    area("notebook", 1, 4, 3, "cm", (A, d, c, u) => `A notebook page has area $${A}$ cm$^{2}$. Length exceeds width by $${d}$ cm. The length is ${c} ${u}.`),
    area("helipad-area", 4, 14, 6, "m", (A, d, c, u) => `A rectangular helipad covers $${A}$ m$^{2}$. Length exceeds width by $${d}$ m. The length is ${c} ${u}.`),
    area("chess-table", 2, 8, 6, "cm", (A, d, c, u) => `A chess table top has area $${A}$ cm$^{2}$. Length is $${d}$ cm more than width. The length is ${c} ${u}.`),
    area("veg-plot", 3, 10, 2, "m", (A, d, c, u) => `A vegetable plot has area $${A}$ m$^{2}$. Length exceeds width by $${d}$ m. The length is ${c} ${u}.`),
    area("billboard", 4, 15, 5, "m", (A, d, c, u) => `A billboard has area $${A}$ m$^{2}$. Height exceeds width by $${d}$ m. The height is ${c} ${u}.`),
    area("ice-rink", 5, 16, 8, "m", (A, d, c, u) => `A training rink is rectangular with area $${A}$ m$^{2}$. Length is $${d}$ m more than width. The length is ${c} ${u}.`),
    area("tapestry", 3, 9, 7, "dm", (A, d, c, u) => `A tapestry covers $${A}$ dm$^{2}$. Length exceeds width by $${d}$ dm. The length is ${c} ${u}.`),
    area("courtyard-area", 4, 13, 7, "m", (A, d, c, u) => `A courtyard has area $${A}$ m$^{2}$. Length is $${d}$ m more than width. The length is ${c} ${u}.`),
    area("stamp-area", 1, 3, 2, "cm", (A, d, c, u) => `A rectangular stamp has area $${A}$ cm$^{2}$. Length exceeds width by $${d}$ cm. The length is ${c} ${u}.`),
    area("lab-bench", 2, 6, 5, "dm", (A, d, c, u) => `A lab bench top covers $${A}$ dm$^{2}$. Length exceeds width by $${d}$ dm. The length is ${c} ${u}.`),
    area("roof-panel", 3, 8, 8, "m", (A, d, c, u) => `A roof panel has area $${A}$ m$^{2}$. Length exceeds width by $${d}$ m. The length is ${c} ${u}.`),

    consecProd("lockers-prod", 2, 12, (p, c) => `Two consecutive positive locker numbers have product $${p}$. The larger number is ${c}.`),
    consecProd("pages-prod", 1, 8, (p, c) => `Two consecutive page numbers multiply to $${p}$. The larger page is ${c}.`),
    consecProd("seats-prod", 2, 15, (p, c) => `Two consecutive seat numbers have product $${p}$. The larger is ${c}.`),
    consecProd("years-prod", 3, 20, (p, c) => `Two consecutive years have product $${p}$. The later year-number is ${c}.`),
    consecProd("houses-prod", 2, 9, (p, c) => `Two consecutive house numbers multiply to $${p}$. The larger house number is ${c}.`),
    consecProd("codes-prod", 4, 24, (p, c) => `Two consecutive access codes multiply to $${p}$. The larger code is ${c}.`),
    consecProd("tickets-prod", 1, 6, (p, c) => `Two consecutive ticket numbers have product $${p}$. The larger is ${c}.`),
    consecProd("bins-prod", 2, 11, (p, c) => `Two consecutive bin numbers multiply to $${p}$. The larger is ${c}.`),
    consecProd("desks-prod", 3, 14, (p, c) => `Two consecutive desk numbers have product $${p}$. The larger is ${c}.`),
    consecProd("rooms-prod", 2, 16, (p, c) => `Two consecutive room numbers multiply to $${p}$. The larger is ${c}.`),
    consecProd("weeks-prod", 1, 7, (p, c) => `Two consecutive week numbers have product $${p}$. The larger is ${c}.`),
    consecProd("lanes-prod", 3, 18, (p, c) => `Two consecutive lane numbers multiply to $${p}$. The larger is ${c}.`),

    vieta("garden-pair", 3, 5, 12, (p, s, c) => `Two positive lengths have product $${p}$ and sum $${s}$. The larger length is ${c}.`),
    vieta("resistors", 4, 4, 9, (p, s, c) => `Two resistances have product $${p}$ and sum $${s}$. The larger resistance is ${c}.`),
    vieta("side-pair", 2, 3, 8, (p, s, c) => `Two positive numbers have product $${p}$ and sum $${s}$. The larger is ${c}.`),
    vieta("roots-claim", 3, 6, 7, (p, s, c) => `The roots of $t^2-${s}t+${p}=0$ are positive. The larger root is ${c}.`),
    vieta("plot-sides", 4, 5, 9, (p, s, c) => `A rectangle has area $${p}$ and perimeter $${2 * s}$. The longer side is ${c}.`),
    vieta("factors-pair", 2, 4, 6, (p, s, c) => `Two positive factors of $${p}$ add to $${s}$. The larger factor is ${c}.`),
    vieta("beam-pair", 3, 8, 10, (p, s, c) => `Two beam lengths have product $${p}$ and sum $${s}$. The longer beam is ${c}.`),
    vieta("ratio-pair", 5, 6, 11, (p, s, c) => `Two positive numbers multiply to $${p}$ and add to $${s}$. The larger is ${c}.`),
    vieta("cable-pair", 3, 7, 8, (p, s, c) => `Two cable lengths have product $${p}$ and sum $${s}$. The longer cable is ${c}.`),
    vieta("tile-pair", 2, 2, 9, (p, s, c) => `Two tile sides have product $${p}$ and sum $${s}$. The longer side is ${c}.`),

    recip("recip-5", 3, 5, (n, num, c) => `A positive number $x$ and its reciprocal add to $\\frac{${num}}{${n}}$. Written as a single fraction in lowest terms, the numerator is ${c}.`),
    recip("recip-4", 2, 4, (n, num, c) => `A positive $x$ satisfies $x+\\frac{1}{x}=\\frac{${num}}{${n}}$. The numerator of that sum in lowest terms is ${c}.`),
    recip("recip-6", 4, 6, (n, num, c) => `A surveyor's scale $x$ obeys $x+\\frac{1}{x}=\\frac{${num}}{${n}}$. The numerator of the reduced fraction is ${c}.`),
    recip("recip-3", 2, 3, (n, num, c) => `A positive number plus its reciprocal equals $\\frac{${num}}{${n}}$. The numerator of that fraction is ${c}.`),
    recip("recip-8", 5, 8, (n, num, c) => `A machine ratio $x>0$ satisfies $x+\\frac{1}{x}=\\frac{${num}}{${n}}$. The numerator in lowest terms is ${c}.`),
    recip("recip-7", 4, 7, (n, num, c) => `A gear ratio $x$ obeys $x+\\frac{1}{x}=\\frac{${num}}{${n}}$. The numerator of the sum is ${c}.`),

    noReal("noreal-2-5", 2, 2, 5, (p, q, ph) => `The equation $x^2+${p}x+${q}=0$ has ${ph}.`),
    noReal("noreal-3-8", 3, 3, 8, (p, q, ph) => `A design constraint $x^2+${p}x+${q}=0$ has ${ph}.`),
    noReal("noreal-1-3", 1, 1, 3, (p, q, ph) => `The quadratic $x^2+${p}x+${q}=0$ has ${ph}.`),
    noReal("noreal-4-12", 3, 4, 12, (p, q, ph) => `The model $x^2+${p}x+${q}=0$ has ${ph}.`),
    noReal("noreal-5-20", 4, 5, 20, (p, q, ph) => `A stress equation $x^2+${p}x+${q}=0$ has ${ph}.`),
    noReal("noreal-2-6", 2, 2, 6, (p, q, ph) => `The equation $x^2+${p}x+${q}=0$ arising in a timing model has ${ph}.`),
    noReal("noreal-6-15", 4, 6, 15, (p, q, ph) => `The quadratic $x^2+${p}x+${q}=0$ has ${ph}.`),
    noReal("noreal-1-4", 1, 1, 4, (p, q, ph) => `A calibration $x^2+${p}x+${q}=0$ has ${ph}.`),

    proj("ball-20", 3, 20, (v0, c) => `A ball is thrown upward at $${v0}$ m/s with model $h=v_0 t-5t^2$. Its maximum height is ${c} m.`),
    proj("flare-10", 2, 10, (v0, c) => `A flare is launched at $${v0}$ m/s. Using $h=v_0 t-5t^2$, the peak height is ${c} m.`),
    proj("arrow-30", 4, 30, (v0, c) => `An arrow is shot upward at $${v0}$ m/s. With $h=v_0 t-5t^2$, the maximum height is ${c} m.`),
    proj("rocket-40", 5, 40, (v0, c) => `A small rocket rises at initial $${v0}$ m/s under $h=v_0 t-5t^2$. Peak height is ${c} m.`),
    proj("fountain-16", 3, 16, (v0, c) => `A fountain jet starts at $${v0}$ m/s. Model $h=v_0 t-5t^2$. The highest point is ${c} m.`),
    proj("cricket-12", 2, 12, (v0, c) => `A cricket ball is hit straight up at $${v0}$ m/s. With $h=v_0 t-5t^2$, max height is ${c} m.`),

    box("box-2-5", 2, 2, 5, 4, (a, b, N, c) => `A packing constraint reads $(x+${a})(x+${b})=${N}$ with $x>0$. Then $x$ is ${c}.`),
    box("box-1-6", 1, 1, 6, 3, (a, b, N, c) => `A window-maker uses $(x+${a})(x+${b})=${N}$. The positive $x$ is ${c}.`),
    box("box-3-4", 2, 3, 4, 5, (a, b, N, c) => `A crate size satisfies $(x+${a})(x+${b})=${N}$. The unknown $x$ is ${c}.`),
    box("box-2-7", 3, 2, 7, 3, (a, b, N, c) => `A frame workshop solves $(x+${a})(x+${b})=${N}$. Then $x$ is ${c}.`),
    box("box-4-5", 3, 4, 5, 2, (a, b, N, c) => `A tray design obeys $(x+${a})(x+${b})=${N}$. The positive $x$ is ${c}.`),
    box("box-1-8", 2, 1, 8, 4, (a, b, N, c) => `A panel size is modelled by $(x+${a})(x+${b})=${N}$. Then $x$ is ${c}.`),
    box("box-3-6", 4, 3, 6, 2, (a, b, N, c) => `A garden bed satisfies $(x+${a})(x+${b})=${N}$. The unknown $x$ is ${c}.`),
    box("box-2-8", 3, 2, 8, 5, (a, b, N, c) => `A tank footprint obeys $(x+${a})(x+${b})=${N}$. Then $x$ is ${c}.`),

    item("quad-diff-sq", "4.2", 2, (t) => {
      const x = 9;
      const c = claim(x, t);
      return {
        statement: `A positive number $x$ satisfies $x^2-16=65$. Then $x$ is ${c.phrase}.`,
        expl: E(t, `Rearrange to a difference of squares, or isolate $x^2$.`, [`$$x^2=81$$`, `$$x=9$$`], cmpLine(c, `The positive root is $9$. That value`)),
      };
    }),
    item("quad-hyp-int", "4.2", 3, (t) => {
      const c0 = 13;
      const cl = claim(c0, t);
      return {
        statement: `A right triangle has legs $5$ cm and $12$ cm. The hypotenuse is ${cl.phrase} cm.`,
        expl: E(t, `Pythagoras gives a quadratic for the hypotenuse $c$.`, [`$$c^2=5^2+12^2$$`, `$$c^2=25+144=169$$`, `$$c=13$$`], cmpLine(cl, `The hypotenuse is $13$ cm. That length`)),
      };
    }),
    item("quad-consec-sq", "4.2", 4, (t) => {
      const n = 5;
      const c = claim(n, t);
      return {
        statement: `The sum of squares of two consecutive positive integers is $61$. The smaller integer is ${c.phrase}.`,
        expl: E(t, `Let the smaller integer be $n$.`, [`$$n^2+(n+1)^2=61$$`, `$$2n^2+2n+1=61$$`, `$$n^2+n-30=0$$`, `$$(n-5)(n+6)=0$$`, `$$n=5$$`], cmpLine(c, `The smaller integer is $5$. That integer`)),
      };
    }),
    item("quad-even-prod", "4.2", 3, (t) => {
      const n = 8;
      const c = claim(n + 2, t);
      return {
        statement: `Two consecutive even positives have product $80$. The larger is ${c.phrase}.`,
        expl: E(t, `Write them as $n$ and $n+2$.`, [`$$n(n+2)=80$$`, `$$n^2+2n-80=0$$`, `$$(n-8)(n+10)=0$$`, `$$n=8$$`], cmpLine(c, `The larger is $10$. That integer`)),
      };
    }),
    item("quad-odd-prod", "4.2", 3, (t) => {
      const n = 7;
      const c = claim(n + 2, t);
      return {
        statement: `Two consecutive odd positives have product $63$. The larger is ${c.phrase}.`,
        expl: E(t, `Write them as $n$ and $n+2$.`, [`$$n(n+2)=63$$`, `$$n^2+2n-63=0$$`, `$$(n-7)(n+9)=0$$`, `$$n=7$$`], cmpLine(c, `The larger is $9$. That integer`)),
      };
    }),
    item("quad-shift-complete", "4.2", 3, (t) => {
      const larger = 8;
      const c = claim(larger, t);
      return {
        statement: `The larger root of $x^2-10x+16=0$ is ${c.phrase}.`,
        expl: E(
          t,
          `Complete the square, then take square roots.`,
          [`$$x^2-10x=-16$$`, `$$(x-5)^2-25=-16$$`, `$$(x-5)^2=9$$`, `$$x-5=\\pm 3$$`, `$$x=8\\text{ or }x=2$$`],
          cmpLine(c, `The larger root is $8$. That root`)
        ),
      };
    }),
  ];
}
