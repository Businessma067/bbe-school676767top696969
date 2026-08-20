/**
 * Unique leftover stories for 4.2–4.4 so each skeleton appears once.
 */
import { E, claim, cmpLine, item } from "./ch4-lib.mjs";

function nitem(id, sub, tier, answer, statement, rule, steps) {
  return item(id, sub, tier, (t) => {
    const c = claim(answer, t);
    return {
      statement: statement.replaceAll("{{C}}", c.phrase),
      expl: E(t, rule, steps, cmpLine(c)),
    };
  });
}

export function expandQuad() {
  const names = [
    ["kiln-batch", "A kiln-timing model"],
    ["bridge-load", "A bridge-load model"],
    ["spring-osc", "A spring-energy model"],
    ["orbit-fit", "An orbit-fit model"],
    ["beam-stress", "A beam-stress model"],
    ["traffic-flow", "A traffic-flow model"],
    ["dose-curve", "A dose-response model"],
    ["price-quad", "A price-elasticity model"],
    ["wave-amp", "A wave-amplitude model"],
    ["soil-settle", "A soil-settlement model"],
    ["cable-sag", "A cable-sag model"],
    ["arch-rise", "An arch-rise model"],
    ["tank-pressure", "A tank-pressure model"],
    ["wing-lift", "A wing-lift model"],
    ["dam-force", "A dam-force model"],
    ["pipe-friction", "A pipe-friction model"],
    ["laser-focus", "A laser-focus model"],
    ["lens-curve", "A lens-curvature model"],
    ["market-quad", "A market-clearing model"],
    ["harvest-quad", "A harvest-yield model"],
    ["tide-height", "A tide-height model"],
    ["wind-load", "A wind-load model"],
    ["snow-pack", "A snow-pack model"],
    ["river-stage", "A river-stage model"],
    ["quarry-blast", "A quarry-blast model"],
    ["furnace-quad", "A furnace-heat model"],
    ["battery-quad", "A battery-fade model"],
    ["antenna-quad", "An antenna-gain model"],
    ["filter-quad", "A filter-response model"],
    ["servo-quad", "A servo-error model"],
    ["crane-quad", "A crane-moment model"],
    ["hull-quad", "A hull-drag model"],
    ["turbine-quad", "A turbine-power model"],
    ["solar-quad", "A solar-flux model"],
    ["glacier-quad", "A glacier-speed model"],
    ["magma-quad", "A magma-pressure model"],
    ["seismic-quad", "A seismic-fit model"],
    ["radar-quad", "A radar-range model"],
    ["sonar-quad", "A sonar-depth model"],
    ["optics-quad", "An optics-path model"],
    ["boiler-quad", "A boiler-pressure model"],
    ["rivet-quad", "A rivet-stress model"],
  ];
  const eqs = [
    [4, "x^2-x-12=0", ["$$(x-4)(x+3)=0$$", "$$x=4$$"]],
    [6, "x^2-x-30=0", ["$$(x-6)(x+5)=0$$", "$$x=6$$"]],
    [5, "x^2-2x-15=0", ["$$(x-5)(x+3)=0$$", "$$x=5$$"]],
    [8, "x^2-5x-24=0", ["$$(x-8)(x+3)=0$$", "$$x=8$$"]],
    [7, "x^2-4x-21=0", ["$$(x-7)(x+3)=0$$", "$$x=7$$"]],
    [9, "x^2-6x-27=0", ["$$(x-9)(x+3)=0$$", "$$x=9$$"]],
    [10, "x^2-7x-30=0", ["$$(x-10)(x+3)=0$$", "$$x=10$$"]],
    [6, "x^2-5x-6=0", ["$$(x-6)(x+1)=0$$", "$$x=6$$"]],
    [8, "x^2-6x-16=0", ["$$(x-8)(x+2)=0$$", "$$x=8$$"]],
    [9, "x^2-8x-9=0", ["$$(x-9)(x+1)=0$$", "$$x=9$$"]],
  ];
  const out = [];
  for (let i = 0; i < names.length; i++) {
    const [id, lead] = names[i];
    const [ans, eq, steps] = eqs[i % eqs.length];
    const tier = 1 + (i % 5);
    out.push(
      nitem(
        `xq-${id}`,
        "4.2",
        tier,
        ans,
        `${lead} reduces to $${eq}$. The positive root is {{C}}.`,
        `Factor the quadratic and keep the positive root.`,
        [`$$${eq}$$`, ...steps]
      )
    );
  }
  return out;
}

export function expandRat() {
  const jobs = [
    ["cistern-ab", "A village cistern", 6, 12, 4],
    ["vat-ab", "A brewery vat", 4, 12, 3],
    ["trough-ab", "A cattle trough", 3, 6, 2],
    ["basin-ab", "A fountain basin", 5, 20, 4],
    ["hopper-ab", "A grain hopper", 8, 24, 6],
    ["silo-ab", "A farm silo", 10, 15, 6],
    ["barrel-ab", "A rain barrel", 8, 8, 4],
    ["pool-ab", "A plunge pool", 12, 6, 4],
    ["well-ab", "A well cistern", 9, 18, 6],
    ["tank-ab", "A roof tank", 5, 5, 2.5],
    ["pond-ab", "An ornamental pond", 20, 30, 12],
    ["sump-ab", "A cellar sump", 4, 6, 2.4],
  ];
  const out = [];
  const verbs = [
    (obj, a, b, c) => `${obj} is filled by inlet $A$ in $${a}$ h and by inlet $B$ in $${b}$ h. Open together from empty, it fills in ${c} hours.`,
    (obj, a, b, c) => `Working alone, pump $A$ would fill ${obj.toLowerCase()} in $${a}$ h and pump $B$ in $${b}$ h. Together they need ${c} hours.`,
    (obj, a, b, c) => `${obj} starts empty. Tap $A$ needs $${a}$ h alone and tap $B$ needs $${b}$ h alone. Both open, fill time is ${c} hours.`,
  ];
  let k = 0;
  for (const [id, obj, a, b, t0] of jobs) {
    if (!Number.isInteger(t0)) continue;
    const cphrase = "{{C}}";
    const stmtFn = verbs[k % verbs.length];
    k++;
    out.push(
      nitem(
        `rw-${id}`,
        "4.3",
        2 + (k % 3),
        t0,
        stmtFn(obj, a, b, cphrase),
        `Add the two filling rates.`,
        [`$$\\frac{1}{${a}}+\\frac{1}{${b}}=\\frac{1}{t}$$`, `$$t=${t0}$$`]
      )
    );
  }

  const absEqs = [
    ["2x-4", 6, 5, -1, 4],
    ["2x+2", 8, 3, -5, -15],
    ["3x-3", 9, 4, -2, -8],
    ["x-4", 10, 14, -6, -84],
    ["4x-8", 12, 5, -1, -5],
    ["x+5", 9, 4, -14, -56],
    ["3x+6", 12, 2, -6, -12],
    ["5x-10", 15, 5, -1, -5],
    ["2x-10", 8, 9, 1, 9],
    ["x-1", 7, 8, -6, -48],
    ["4x+4", 16, 3, -5, -15],
    ["3x-9", 6, 5, 1, 5],
    ["2x+6", 10, 2, -8, -16],
    ["x+2", 8, 6, -10, -60],
    ["5x-5", 20, 5, -3, -15],
    ["3x+3", 15, 4, -6, -24],
    ["2x-2", 14, 8, -6, -48],
    ["4x-4", 20, 6, -4, -24],
    ["x-8", 4, 12, 4, 48],
    ["6x-12", 18, 5, -1, -5],
  ];
  const absLeads = [
    "Survey marks on a beam satisfy",
    "A robot's coordinate $x$ obeys",
    "Cable-sensor positions satisfy",
    "A track offset $x$ satisfies",
    "Docking marks obey",
    "A laser alignment uses",
    "Fence-post positions satisfy",
    "A crane trolley obeys",
    "Rail-weld positions satisfy",
    "A conveyor index $x$ obeys",
    "Bridge-joint marks satisfy",
    "A mill-head coordinate obeys",
    "Pipeline stakes satisfy",
    "A gantry position $x$ obeys",
    "Quay-fender marks satisfy",
    "A hoist coordinate obeys",
    "Tunnel-ring marks satisfy",
    "A lathe offset $x$ obeys",
    "Siding-buffer positions satisfy",
    "A plotter coordinate obeys",
  ];
  for (let i = 0; i < absEqs.length; i++) {
    const [expr, rhs, r1, r2, prod] = absEqs[i];
    const lead = absLeads[i];
    out.push(
      nitem(
        `abs-${i}-${expr}`,
        "4.3",
        3,
        prod,
        `${lead} $|${expr}|=${rhs}$. The product of the two roots is {{C}}.`,
        `Split into the two linear cases and multiply the roots.`,
        [`$$${expr}=${rhs}\\Rightarrow x=${r1}$$`, `$$${expr}=-${rhs}\\Rightarrow x=${r2}$$`, `$$${r1}\\cdot(${r2})=${prod}$$`]
      )
    );
  }

  const rads = [
    ["well-depth", "A well-depth model", "x+3", 4, 13],
    ["mast-height", "A mast-height model", "x+5", 6, 31],
    ["shaft", "A shaft-clearance model", "x+2", 5, 23],
    ["pit", "A pit-depth model", "x+7", 4, 9],
    ["tower", "A tower-survey model", "x+8", 5, 17],
    ["chimney", "A chimney-height model", "x+1", 7, 48],
    ["silo-rad", "A silo-gauge model", "x+12", 8, 52],
    ["mine", "A mine-shaft model", "x+0", 9, 81],
    ["quarry", "A quarry-face model", "x+11", 6, 25],
    ["cliff", "A cliff-drop model", "x+15", 7, 34],
    ["canyon", "A canyon-span model", "x+6", 8, 58],
    ["gully", "A gully-depth model", "x+9", 5, 16],
    ["trench", "A trench-cut model", "x+4", 6, 32],
    ["bore", "A borehole model", "x+16", 4, 0],
    ["caisson", "A caisson-depth model", "x+20", 6, 16],
    ["pile", "A pile-length model", "x+10", 9, 71],
    ["pier", "A pier-height model", "x+13", 5, 12],
    ["abutment", "An abutment model", "x+18", 7, 31],
    ["culvert", "A culvert model", "x+14", 4, 2],
    ["weir", "A weir-head model", "x+21", 5, 4],
  ];
  for (const [id, lead, inside, k, x] of rads) {
    if (x <= 0) continue;
    out.push(
      nitem(
        `rad-${id}`,
        "4.3",
        2,
        x,
        `${lead} uses $\\sqrt{${inside}}=${k}$. Every admissible $x$ is {{C}}.`,
        `Square both sides after checking the domain.`,
        [`$$${inside}=${k * k}$$`, `$$x=${x}$$`]
      )
    );
  }

  const crosses = [
    ["2", "x-4", "3", "x", 12],
    ["3", "x-5", "5", "x", 12.5],
    ["1", "x-6", "2", "x", 12],
    ["4", "x-3", "6", "x", 9],
    ["2", "x-8", "5", "x", 40 / 3],
    ["3", "x-2", "6", "x", 4],
    ["1", "x-3", "4", "x", 4],
    ["5", "x-4", "8", "x", 32 / 3],
    ["2", "x-6", "3", "x", 18],
    ["4", "x-5", "7", "x", 35 / 3],
    ["3", "x-7", "4", "x", 28],
    ["1", "x-2", "3", "x", 3],
    ["5", "x-6", "9", "x", 13.5],
    ["2", "x-1", "5", "x", 5 / 3],
    ["4", "x-8", "5", "x", 40],
    ["3", "x-9", "6", "x", 18],
    ["1", "x-8", "2", "x", 16],
    ["5", "x-2", "7", "x", 7],
    ["2", "x-9", "4", "x", 18],
    ["3", "x-4", "8", "x", 32 / 5],
  ];
  const crossLeads = [
    "A mixing ratio",
    "A gear-ratio model",
    "A similar-triangle model",
    "A lens-ratio model",
    "A dose-ratio model",
    "A map-scale model",
    "A flow-ratio model",
    "A cost-ratio model",
    "A pressure-ratio model",
    "A density-ratio model",
    "A voltage-divider model",
    "A recipe-ratio model",
    "A shadow-ratio model",
    "A current-divider model",
    "A strain-ratio model",
    "A dilution-ratio model",
    "A similar-figure model",
    "A harmonic-ratio model",
    "A lever-ratio model",
    "A similar-polygon model",
  ];
  for (let i = 0; i < crosses.length; i++) {
    const [n1, d1, n2, d2, x] = crosses[i];
    if (!Number.isInteger(x) || x <= 0) continue;
    out.push(
      nitem(
        `cx-${i}`,
        "4.3",
        3,
        x,
        `${crossLeads[i]} uses $\\frac{${n1}}{${d1}}=\\frac{${n2}}{${d2}}$. Every admissible $x$ is {{C}}.`,
        `Cross-multiply and solve, excluding zeros of the denominators.`,
        [`$$${n1}\\cdot ${d2}=${n2}\\cdot(${d1})$$`, `$$x=${x}$$`]
      )
    );
  }

  const drains = [
    ["cellar-in", 4, 6, 12],
    ["dock-in", 3, 6, 6],
    ["lock-in", 5, 10, 10],
    ["harbour-in", 6, 12, 12],
    ["quay-in", 8, 24, 12],
    ["basin-in", 4, 8, 8],
    ["sump-in", 5, 15, 7.5],
    ["pit-in", 6, 18, 9],
    ["hold-in", 10, 20, 20],
    ["vat-in", 8, 12, 24],
  ];
  const drainLeads = [
    "A cellar tank",
    "A dry dock",
    "A canal lock",
    "A harbour basin",
    "A quay tank",
    "A fountain basin",
    "A pump sump",
    "A service pit",
    "A ship hold",
    "A brewery vat",
  ];
  for (let i = 0; i < drains.length; i++) {
    const [id, fill, drain, t0] = drains[i];
    if (!Number.isInteger(t0)) continue;
    out.push(
      nitem(
        `dr-${id}`,
        "4.3",
        4,
        t0,
        `${drainLeads[i]} has an inlet that fills in $${fill}$ h and an outlet that empties in $${drain}$ h. Both open from empty, it fills in {{C}} hours.`,
        `Net rate is fill minus drain.`,
        [`$$\\frac{1}{${fill}}-\\frac{1}{${drain}}=\\frac{1}{t}$$`, `$$t=${t0}$$`]
      )
    );
  }

  const moreJobs = [
    ["lake-cistern", "A lakeside cistern", 12, 4, 3],
    ["mill-pond", "A mill pond", 15, 10, 6],
    ["ice-bath", "An ice bath", 9, 18, 6],
    ["dye-vat", "A dye vat", 6, 3, 2],
    ["oil-tank", "An oil tank", 20, 5, 4],
    ["ink-well", "An inkwell reservoir", 8, 24, 6],
    ["coolant", "A coolant tank", 10, 10, 5],
    ["slurry", "A slurry pit", 12, 12, 6],
    ["mash-tun", "A mash tun", 4, 12, 3],
    ["wort-kettle", "A wort kettle", 5, 20, 4],
    ["brine-tank", "A brine tank", 8, 8, 4],
    ["serum-bath", "A serum bath", 6, 12, 4],
  ];
  for (const [id, obj, a, b, t0] of moreJobs) {
    out.push(
      nitem(
        `rw2-${id}`,
        "4.3",
        3,
        t0,
        `${obj} would be filled by channel $A$ in $${a}$ h and by channel $B$ in $${b}$ h. Both channels open from empty, fill time is {{C}} hours.`,
        `Add the two filling rates.`,
        [`$$\\frac{1}{${a}}+\\frac{1}{${b}}=\\frac{1}{t}$$`, `$$t=${t0}$$`]
      )
    );
  }

  const morePart = [
    ["barn-paint", "A barn-painting job takes $12$ h alone. After $3$ h, the remaining work needs {{C}} more hours.", 9],
    ["road-crew", "A road crew finishes a stretch in $10$ h alone. After $4$ h, the remainder needs {{C}} more hours.", 6],
    ["wall-render", "Rendering a wall takes $8$ h alone. After $5$ h, the remainder needs {{C}} more hours.", 3],
    ["hedge-cut", "Cutting a hedge takes $9$ h alone. After $6$ h, the remainder needs {{C}} more hours.", 3],
    ["path-lay", "Laying a path takes $15$ h alone. After $5$ h, the remainder needs {{C}} more hours.", 10],
    ["fence-stain", "Staining a fence takes $7$ h alone. After $2$ h, the remainder needs {{C}} more hours.", 5],
    ["deck-oil", "Oiling a deck takes $6$ h alone. After $1$ h, the remainder needs {{C}} more hours.", 5],
    ["gutter-clear", "Clearing gutters takes $4$ h alone. After $1$ h, the remainder needs {{C}} more hours.", 3],
    ["roof-felt", "Felting a roof takes $11$ h alone. After $5$ h, the remainder needs {{C}} more hours.", 6],
    ["drive-resurface", "Resurfacing a drive takes $14$ h alone. After $6$ h, the remainder needs {{C}} more hours.", 8],
    ["shed-paint", "Painting a shed takes $5$ h alone. After $2$ h, the remainder needs {{C}} more hours.", 3],
    ["loft-insulate", "Insulating a loft takes $9$ h alone. After $4$ h, the remainder needs {{C}} more hours.", 5],
    ["yard-sweep", "Sweeping a yard takes $3$ h alone. After $1$ h, the remainder needs {{C}} more hours.", 2],
    ["dock-caulk", "Caulking a dock takes $16$ h alone. After $6$ h, the remainder needs {{C}} more hours.", 10],
    ["pier-paint", "Painting a pier takes $18$ h alone. After $8$ h, the remainder needs {{C}} more hours.", 10],
    ["gate-weld", "Welding a gate takes $6$ h alone. After $4$ h, the remainder needs {{C}} more hours.", 2],
  ];
  for (const [id, stmt, ans] of morePart) {
    out.push(
      nitem(`pt-${id}`, "4.3", 2, ans, stmt, `The remaining fraction of the job is done at the original rate.`, [`$$t=${ans}$$`])
    );
  }

  return out;
}

export function expandExp() {
  const out = [];
  const logs = [
    [2, 3, 8, "A binary counter"],
    [2, 4, 16, "A memory-page model"],
    [2, 5, 32, "A chessboard-doubling model"],
    [2, 6, 64, "A cell-split model"],
    [3, 2, 9, "A ternary code"],
    [3, 3, 27, "A cube-volume model"],
    [3, 4, 81, "A base-three register"],
    [4, 2, 16, "A base-four counter"],
    [4, 3, 64, "A packed-word model"],
    [5, 2, 25, "A base-five scale"],
    [5, 3, 125, "A cubic-base-five model"],
    [10, 2, 100, "A decadic meter"],
    [10, 1, 10, "A decade step"],
    [8, 2, 64, "An octal register"],
    [9, 2, 81, "A base-nine scale"],
    [6, 2, 36, "A base-six counter"],
    [7, 2, 49, "A base-seven scale"],
    [2, 1, 2, "A single-bit model"],
    [2, 2, 4, "A two-bit model"],
    [3, 1, 3, "A one-trit model"],
  ];
  for (const [b, e, x, lead] of logs) {
    out.push(
      nitem(
        `lg-${b}-${e}`,
        "4.4",
        e <= 2 ? 1 : e === 3 ? 2 : 3,
        x,
        `${lead} uses $\\log_{${b}} x=${e}$. Then $x$ is {{C}}.`,
        `Rewrite the logarithm in exponential form.`,
        [`$$x=${b}^{${e}}$$`, `$$x=${x}$$`]
      )
    );
  }
  const moreLogs = [
    [2, 0, 1, "A zero-exponent log model"],
    [4, 1, 4, "A four-identity log"],
    [5, 1, 5, "A five-identity log"],
    [8, 1, 8, "An eight-identity log"],
    [9, 1, 9, "A nine-identity log"],
    [6, 1, 6, "A six-identity log"],
    [7, 1, 7, "A seven-identity log"],
    [10, 0, 1, "A decadic-zero log"],
    [3, 0, 1, "A ternary-zero log"],
    [8, 0, 1, "An octal-zero log"],
    [9, 0, 1, "A nine-zero log"],
    [6, 0, 1, "A six-zero log"],
    [7, 0, 1, "A seven-zero log"],
    [5, 0, 1, "A five-zero log"],
    [4, 0, 1, "A four-zero log"],
    [2, 9, 512, "skip"],
  ];
  const moreExps = [
    ["2^{x+2}=32", 3, "A plus-two doubling model"],
    ["2^{x+3}=64", 3, "A plus-three doubling model"],
    ["3^{x+2}=81", 2, "A plus-two triple model"],
    ["5^{x+1}=125", 2, "A plus-one five model"],
    ["4^{x+1}=64", 2, "A plus-one four model"],
    ["2^{x-2}=8", 5, "A minus-two doubling model"],
    ["3^{x-1}=9", 3, "A minus-one triple model"],
    ["10^{x-2}=10", 3, "A minus-two decade model"],
    ["2^{3x}=8", 1, "A triple-exponent two model"],
    ["3^{2x}=81", 2, "A double-exponent three model"],
    ["5^{2x}=25", 1, "A double-exponent five model"],
    ["2^{2x}=16", 2, "A double-exponent two model"],
    ["4^{2x}=16", 1, "A double-exponent four model"],
  ];
  for (const [eq, ans, lead] of moreExps) {
    out.push(
      nitem(
        `ex2-${eq}`,
        "4.4",
        3,
        ans,
        `${lead} uses $${eq}$. Every real $x$ is {{C}}.`,
        `Rewrite both sides with the same base and equate exponents.`,
        [`$$${eq}$$`, `$$x=${ans}$$`]
      )
    );
  }
  for (const [b, e, x, lead] of moreLogs) {
    if (lead === "skip" || x > 125) continue;
    out.push(
      nitem(
        `lg2-${b}-${e}`,
        "4.4",
        1,
        x,
        `${lead} uses $\\log_{${b}} x=${e}$. Then $x$ is {{C}}.`,
        `Rewrite the logarithm in exponential form.`,
        [`$$x=${b}^{${e}}$$`, `$$x=${x}$$`]
      )
    );
  }

  const exps = [
    ["2^x=8", 3, "A doubling clock"],
    ["2^x=16", 4, "A fold-count model"],
    ["2^x=32", 5, "A binary-growth model"],
    ["2^x=4", 2, "A pair-split model"],
    ["3^x=9", 2, "A triple-square model"],
    ["3^x=27", 3, "A cubic-triple model"],
    ["3^x=81", 4, "A four-step ternary model"],
    ["5^x=25", 2, "A five-square model"],
    ["5^x=125", 3, "A five-cube model"],
    ["4^x=64", 3, "A four-cube model"],
    ["4^x=4", 1, "A four-to-four model"],
    ["10^x=10", 1, "A decade-identity model"],
    ["10^x=1000", 3, "A thousand-step model"],
    ["7^x=49", 2, "A seven-square model"],
    ["8^x=8", 1, "An octal-identity model"],
    ["9^x=81", 2, "A nine-square model"],
    ["6^x=36", 2, "A six-square model"],
    ["2^{x+1}=16", 3, "A shifted-doubling model"],
    ["2^{x-1}=8", 4, "A delayed-doubling model"],
    ["3^{x+1}=81", 3, "A shifted-triple model"],
  ];
  for (const [eq, ans, lead] of exps) {
    out.push(
      nitem(
        `ex-${eq}`,
        "4.4",
        2,
        ans,
        `${lead} uses $${eq}$. Every real $x$ is {{C}}.`,
        `Rewrite both sides with the same base and equate exponents.`,
        [`$$${eq}$$`, `$$x=${ans}$$`]
      )
    );
  }

  const mixes = [
    ["4^x=2^{x+2}", 2, "A voltage-scale model"],
    ["9^x=3^{x+1}", 1, "A similar-triangle exponential"],
    ["8^x=2^{x+2}", 1, "An octal-binary model"],
    ["25^x=5^{x+1}", 1, "A five-square exponential"],
    ["27^x=3^{x+3}", 1.5, "A three-cube exponential"],
    ["16^x=2^{x+4}", 4 / 3, "A sixteen-binary model"],
    ["4^x=8^{x-1}", 3, "A four-eight model"],
    ["9^x=27^{x-1}", 3, "A nine-twenty-seven model"],
    ["2^{2x}=8^{x-1}", 3, "A double-vs-eight model"],
    ["5^{2x}=25^{x-1}", -1, "skip"],
  ];
  for (const [eq, ans, lead] of mixes) {
    if (!Number.isInteger(ans) || ans <= 0) continue;
    out.push(
      nitem(
        `mx-${eq}`,
        "4.4",
        4,
        ans,
        `${lead} uses $${eq}$. Every real $x$ is {{C}}.`,
        `Write both sides as powers of one base, then equate exponents.`,
        [`$$${eq}$$`, `$$x=${ans}$$`]
      )
    );
  }

  const lns = [
    [2, 5, 7, "A cooling offset"],
    [3, 4, 7, "A growth offset"],
    [5, 2, 7, "A decay offset"],
    [6, 3, 9, "A delay offset"],
    [8, 4, 12, "A lag offset"],
    [1, 8, 9, "A start offset"],
    [10, 2, 12, "A long offset"],
    [4, 6, 10, "A mid offset"],
    [7, 5, 12, "A late offset"],
    [9, 3, 12, "A wide offset"],
  ];
  for (const [s, m, x, lead] of lns) {
    out.push(
      nitem(
        `ln-${s}-${m}`,
        "4.4",
        2,
        x,
        `${lead} uses $\\ln(x-${s})=\\ln ${m}$. Every admissible $x$ is {{C}}.`,
        `The natural logarithm is one-to-one, and the argument must stay positive.`,
        [`$$x-${s}=${m}$$`, `$$x=${x}$$`]
      )
    );
  }

  const negs = [
    [2, 3],
    [2, 5],
    [3, 4],
    [3, 7],
    [5, 2],
    [5, 6],
    [4, 1],
    [7, 3],
    [8, 5],
    [10, 2],
  ];
  for (const [b, k] of negs) {
    out.push(
      item(`neg-${b}-${k}`, "4.4", 2, (t) => {
        const phrase = t ? "no real solution" : "one real solution";
        return {
          statement: `The equation $${b}^x=-${k}$ has ${phrase}.`,
          expl: E(
            t,
            `An exponential with positive base never takes a negative value.`,
            [`$$${b}^x>0$$`],
            t
              ? `The right-hand side is negative, so there is no real $x$. So the statement is True.`
              : `There is no real solution, so the claim of one real solution is false. So the statement is False.`
          ),
        };
      })
    );
  }

  const counts = [
    ["e^{2x}-5e^x+6=0", 2, 3, 2],
    ["e^{2x}-4e^x+3=0", 1, 3, 2],
    ["e^{2x}-6e^x+8=0", 2, 4, 2],
    ["2^{2x}-6\\cdot 2^x+8=0", 2, 4, 2],
    ["2^{2x}-5\\cdot 2^x+4=0", 1, 4, 2],
  ];
  for (const [eq, u1, u2, n] of counts) {
    out.push(
      item(`cnt-${eq}`, "4.4", 4, (t) => {
        const c = claim(n, t);
        return {
          statement: `After the substitution $u=e^x$ or $u=2^x$ as appropriate, $${eq}$ has ${c.phrase} real solutions for $x$.`,
          expl: E(
            t,
            `The quadratic in $u$ has two positive roots, and the exponential is one-to-one, so each $u$ gives one $x$.`,
            [`$$u=${u1}\\text{ or }u=${u2}$$`],
            cmpLine(c, `There are $${n}$ real solutions. That count`)
          ),
        };
      })
    );
  }
  return out;
}
