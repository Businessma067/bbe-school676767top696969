/**
 * Unique 4.3 rational / radical / absolute-value stories.
 * Train-passing appears at most once per distinct physical setup.
 */
import { E, claim, cmpLine, item } from "./ch4-lib.mjs";

export function ratItems() {
  return [
    item("rat-trains-oppose", "4.3", 4, (t) => {
      const l1 = 90;
      const l2 = 150;
      const v1 = 54;
      const v2 = 90;
      const relMs = ((v1 + v2) * 1000) / 3600;
      const sec = Math.round((l1 + l2) / relMs);
      const c = claim(sec, t);
      return {
        statement: `A freight train $${l1}$ m long and a passenger train $${l2}$ m long approach on parallel tracks at $${v1}$ km/h and $${v2}$ km/h. Timing starts when the noses meet and stops when the trains no longer overlap. That interval is ${c.phrase} seconds.`,
        expl: E(
          t,
          `The trains must cover the sum of their lengths at relative speed.`,
          [
            `$$L=${l1}+${l2}=${l1 + l2}$$`,
            `$$v=${v1}+${v2}=${v1 + v2}\\text{ km/h}=${relMs}\\text{ m/s}$$`,
            `$$t=\\frac{${l1 + l2}}{${relMs}}=${sec}$$`,
          ],
          cmpLine(c, `The passing interval is $${sec}$ s. That duration`)
        ),
      };
    }),
    item("rat-trains-overtake", "4.3", 5, (t) => {
      const l1 = 100;
      const l2 = 140;
      const v1 = 72;
      const v2 = 108;
      const relMs = ((v2 - v1) * 1000) / 3600;
      const sec = Math.round((l1 + l2) / relMs);
      const c = claim(sec, t);
      return {
        statement: `On the same track a slower train $${l1}$ m long runs at $${v1}$ km/h. A faster train $${l2}$ m long runs at $${v2}$ km/h in the same direction. Time from the faster nose drawing level with the slower tail until the faster tail clears the slower nose is ${c.phrase} seconds.`,
        expl: E(
          t,
          `Overtaking uses relative speed $v_2-v_1$ and combined length.`,
          [
            `$$L=${l1}+${l2}=${l1 + l2}$$`,
            `$$v=${v2}-${v1}=${v2 - v1}\\text{ km/h}=${relMs}\\text{ m/s}$$`,
            `$$t=\\frac{${l1 + l2}}{${relMs}}=${sec}$$`,
          ],
          cmpLine(c, `The overtaking time is $${sec}$ s. That duration`)
        ),
      };
    }),
    item("rat-train-platform", "4.3", 3, (t) => {
      const L = 160;
      const P = 80;
      const v = 20;
      const sec = (L + P) / v;
      const c = claim(sec, t);
      return {
        statement: `A train $${L}$ m long passes an $${P}$ m platform at $72$ km/h, which is $20$ m/s. Time from entering the platform until leaving it is ${c.phrase} seconds.`,
        expl: E(
          t,
          `The train must cover its own length plus the platform length.`,
          [`$$s=${L}+${P}=${L + P}$$`, `$$t=\\frac{${L + P}}{${v}}=${sec}$$`],
          cmpLine(c, `The time is $${sec}$ s. That duration`)
        ),
      };
    }),
    item("rat-pipes-garden", "4.3", 3, (t) => {
      const c = claim(4, t);
      return {
        statement: `Hose $A$ fills a garden tank in $6$ hours. Hose $B$ fills the same tank in $12$ hours. Open together from empty, they fill it in ${c.phrase} hours.`,
        expl: E(t, `Add the filling rates.`, [`$$\\frac{1}{6}+\\frac{1}{12}=\\frac{1}{t}$$`, `$$\\frac{1}{4}=\\frac{1}{t}$$`, `$$t=4$$`], cmpLine(c, `Together they need $4$ h. That duration`)),
      };
    }),
    item("rat-pipes-cellar", "4.3", 4, (t) => {
      const c = claim(12, t);
      return {
        statement: `Pipe $A$ fills an empty cellar tank in $4$ hours. Pipe $B$ empties a full tank in $6$ hours. Both run from empty. The tank first becomes full after ${c.phrase} hours.`,
        expl: E(t, `Net rate is fill minus drain.`, [`$$\\frac{1}{4}-\\frac{1}{6}=\\frac{1}{t}$$`, `$$\\frac{1}{12}=\\frac{1}{t}$$`, `$$t=12$$`], cmpLine(c, `The tank fills in $12$ h. That duration`)),
      };
    }),
    item("rat-workers-barn", "4.3", 2, (t) => {
      const c = claim(3, t);
      return {
        statement: `Farmer $A$ paints a barn in $5$ days, farmer $B$ in $7.5$ days. Working together they finish in ${c.phrase} days.`,
        expl: E(t, `Add the work rates. Use $7.5=\\frac{15}{2}$.`, [`$$\\frac{1}{5}+\\frac{2}{15}=\\frac{1}{t}$$`, `$$\\frac{3}{15}+\\frac{2}{15}=\\frac{1}{t}$$`, `$$\\frac{1}{3}=\\frac{1}{t}$$`, `$$t=3$$`], cmpLine(c, `Together they need $3$ days. That duration`)),
      };
    }),
    item("rat-partial-roof", "4.3", 2, (t) => {
      const c = claim(4, t);
      return {
        statement: `A roofer finishes a job alone in $6$ hours. After $2$ hours at that rate, the remaining work needs ${c.phrase} more hours.`,
        expl: E(t, `Two sixths are done, so four sixths remain.`, [`$$1-\\frac{2}{6}=\\frac{2}{3}$$`, `$$\\frac{2}{3}\\cdot 6=4$$`], cmpLine(c, `Four hours remain. That duration`)),
      };
    }),
    item("rat-abs-rail", "4.3", 3, (t) => {
      const c = claim(4, t);
      return {
        statement: `Marker positions satisfy $|3x-6|=9$. The two admissible positions add to ${c.phrase}.`,
        expl: E(t, `Split the absolute-value equation into two linear cases.`, [`$$3x-6=9\\Rightarrow x=5$$`, `$$3x-6=-9\\Rightarrow x=-1$$`, `$$5+(-1)=4$$`], cmpLine(c, `The sum is $4$. That sum`)),
      };
    }),
    item("rat-abs-prod", "4.3", 4, (t) => {
      const c = claim(-8, t);
      return {
        statement: `The equation $|2x+2|=6$ has two roots. Their product is ${c.phrase}.`,
        expl: E(t, `The two cases are $2x+2=\\pm 6$.`, [`$$2x+2=6\\Rightarrow x=2$$`, `$$2x+2=-6\\Rightarrow x=-4$$`, `$$2\\cdot(-4)=-8$$`], cmpLine(c, `The product is $-8$. That product`)),
      };
    }),
    item("rat-cross-hole", "4.3", 4, (t) => {
      const c = claim(10, t);
      return {
        statement: `Every admissible root of $\\frac{2}{x-5}=\\frac{4}{x}$ satisfies $x$ is ${c.phrase}.`,
        expl: E(t, `Cross-multiply, excluding $x=0$ and $x=5$.`, [`$$2x=4(x-5)$$`, `$$2x=4x-20$$`, `$$x=10$$`], cmpLine(c, `The root is $10$. That value`)),
      };
    }),
    item("rat-ladder-barn", "4.3", 2, (t) => {
      const c = claim(13, t);
      return {
        statement: `A ladder stands with its foot $5$ m from a barn wall and reaches $12$ m up the wall. The ladder length is ${c.phrase} m.`,
        expl: E(t, `The ladder is the hypotenuse.`, [`$$L=\\sqrt{5^2+12^2}$$`, `$$L=\\sqrt{169}=13$$`], cmpLine(c, `The ladder is $13$ m. That length`)),
      };
    }),
    item("rat-sqrt-well", "4.3", 2, (t) => {
      const c = claim(12, t);
      return {
        statement: `Every admissible root of $\\sqrt{x+4}=4$ satisfies $x$ is ${c.phrase}.`,
        expl: E(t, `Square both sides after requiring $x+4\\ge 0$.`, [`$$x+4=16$$`, `$$x=12$$`], cmpLine(c, `The root is $12$. That value`)),
      };
    }),
    item("rat-boats-pass", "4.3", 5, (t) => {
      const c = claim(12, t);
      return {
        statement: `Two canal boats $40$ m and $80$ m long meet at $10$ m/s relative speed. From the instant the bows meet until they no longer overlap lasts ${c.phrase} seconds.`,
        expl: E(t, `Combined length over relative speed.`, [`$$t=\\frac{40+80}{10}=12$$`], cmpLine(c, `The interval is $12$ s. That duration`)),
      };
    }),
    item("rat-cyclists-pass", "4.3", 4, (t) => {
      const c = claim(3, t);
      return {
        statement: `Two cyclists, each $2$ m long, need $2$ m of extra clearance and close at $2$ m/s. Passing time from first overlap to last clearance is ${c.phrase} seconds.`,
        expl: E(t, `They must cover $2+2+2=6$ m at $2$ m/s.`, [`$$t=\\frac{6}{2}=3$$`], cmpLine(c, `The passing time is $3$ s. That duration`)),
      };
    }),
  ];
}
