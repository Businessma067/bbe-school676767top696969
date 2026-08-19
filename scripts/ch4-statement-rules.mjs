/**
 * Shared validation for Ch.4 equation statements (generator + audit).
 */

export function normalizeStatement(s) {
  return s
    .replace(/^In an exam item,\s+/i, "")
    .replace(/^Suppose that\s+/i, "")
    .replace(/^Consider a case where\s+/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

const TRUE_PLUG_PATS = [
  { re: /(?:is|was|equals|gives|holds at) \$([0-9]+(?:\.[0-9]+)?)\$/i, kind: "embedded-dollar" },
  { re: /(?:is|was|equals|gives) \$\\frac\{([0-9]+)\}\{([0-9]+)\}\$/i, kind: "embedded-frac" },
  { re: /the number (?:is|itself is) \$([0-9]+)\$/i, kind: "the-number-is" },
  { re: /original (?:number|price|bill|batch|sample|wage|amount) (?:is|was) \$([0-9]+)/i, kind: "original-is" },
  { re: /Then the (?:change|number|wage|distance|length|path|frame|prize) (?:is|was) \$([0-9]+)/i, kind: "then-the" },
  { re: /Half of a number is \$([0-9]+)\$/i, kind: "half-is" },
  { re: /(?:They are|pair is) \$([0-9]+) and \$([0-9]+)\$/i, kind: "they-are-pair" },
  // Direct root plug-in — must solve the equation first
  { re: /(?:solution|implies|event at|satisfies)\s+\$x\s*=\s*\$?[0-9]/i, kind: "x-equals" },
  { re: /(?:positive|admissible|real) solution \$x\s*=\s*\$?[0-9]/i, kind: "x-equals-solution" },
  { re: /yields solution \$x\s*=\s*\$?[0-9]/i, kind: "x-equals-yields" },
  { re: /describes the event at \$x\s*=\s*\$?[0-9]/i, kind: "x-equals-event" },
  { re: /unique real solution of \$[^$]+\$ is \$x\s*=\s*\$?[0-9]/i, kind: "x-equals-unique" },
  { re: /There are \$([0-9]+)\$ distinct real (?:exponents|values|solutions)/i, kind: "count-plug" },
];

/** Pure calculation — not equation-solving topic. */
const PURE_ARITH_PATS = [
  /^(\$\\sqrt\{[^}]+\}\$|\$\\sqrt\{[^}]+\}\s*\+|\$\\sqrt\{[^}]+\}\s*equals)/i,
  /^\$\\sqrt\{[0-9]+\+[0-9]+\}\$ equals/i,
  /Converting \$[0-9]+(?:\.[0-9]+)?\$ mph to km\/h/i,
  /^The decadic logarithm of \$[0-9]+\$ equals/i,
  /^In an exam item, the decadic logarithm of \$[0-9]+\$ equals/i,
  /^The difference of squares of \$[0-9]+\$ and \$[0-9]+\$ equals/i,
  /^The sum of squares of \$[0-9]+\$ and/i,
  /^In an exam item, the (?:sum|difference) of squares/i,
  /^A right triangle has legs \$[0-9]+\$ cm and \$[0-9]+\$ cm\. The hypotenuse is/i,
  /^A triangle with base \$[0-9]+\$ cm and height \$[0-9]+\$ cm has area/i,
  /^A square has side \$[0-9]+\$ cm\. Its diagonal is/i,
  /^A train \$[0-9]+ m long passes a signal pole in \$[0-9]+ s\. Its speed is/i,
  /^An item costing \$[0-9]+\$ EUR is marked up by \$[0-9]+\\%/i,
  /^A liquid cools linearly by/i,
  /^A taxi charges \$[0-9]+\$ EUR plus \$[0-9]+(?:\.[0-9]+)?\$ EUR per km\. A \$[0-9]+ km ride costs/i,
  /^\\dfrac\{\\log_[0-9]+ [0-9]+\}\{\\log_[0-9]+ [0-9]+\} =/i,
  /^Isotope half-life \$[0-9]+ years\. After/i,
  /^A culture doubles every/i,
  /^\$[0-9]+ EUR at \$[0-9]+\\% p\.a\. compounded annually/i,
  /^Newton cooling \$T=[0-9]+e\^\{/i,
  /^For \$x\^2 [+-][0-9]+x[+-][0-9]+=0\$, the discriminant equals \$/i,
  /^In an exam item, for \$x\^2 [+-][0-9]+x[+-][0-9]+=0\$, the discriminant equals/i,
  /^Two numbers add to \$[0-9]+\$ and differ by \$[0-9]+\$/i,
  /^Mixing \$[0-9]+ L of \$[0-9]+\\% saline with \$[0-9]+ L of \$[0-9]+\\% saline yields/i,
];

const EQUATION_MARKERS = [
  /equation/i,
  /\\sqrt\{x/i,
  /\\log[^a-z]/i,
  /\\ln/i,
  /e\^\{/i,
  /2\^x|3\^x|4\^x|5\^x|9\^x|10\^x/i,
  /\|[^|]+\|=/,
  /\\frac\{[^}]+\}\{[^}]+\}=\\frac/,
  /Model \$\\frac/,
  /roots of \$t\^2/i,
  /roots of \$x\^2/i,
  /discriminant/i,
  /Vieta/i,
  /Let the shorter side/i,
  /perimeter is/i,
  /area is \$[0-9]+\$ cm/i,
  /travels at/i,
  /leaves \$[A-Z]\$/i,
  /years older/i,
  /coins totalling/i,
  /fills a pool/i,
  /fills in \$[0-9]+ h/i,
  /vinegar/i,
  /prize fund/i,
  /prize money/i,
  /fence forms/i,
  /consecutive integers/i,
  /digit-reversal/i,
  /swapping the digits/i,
  /admissible solution \$x=/i,
  /has positive solution \$x =/i,
  /has the unique positive solution/i,
  /yields solution \$x=/i,
  /Positions on a rail satisfy/i,
  /Equation \$\|/i,
  /population model/i,
  /substitution \$u = e\^x/i,
  /With \$u=2\^x/i,
  /decadic logarithm of \$x\$/i,
  /solution of \$\\log/i,
  /Every admissible root/i,
  /unique real solution of \$/i,
  /implies \$x =/i,
  /describes the event at \$x=/i,
  /If \$\\log_/i,
  /rectangle/i,
  /ladder with foot/i,
  /Pipe \$A\$/i,
  /Inlet fills/i,
  /Tap \$A\$/i,
  /Worker \$A\$/i,
  /plan charges/i,
  /scores average/i,
  /recipe calls for/i,
  /aluminium bar/i,
  /pump delivers/i,
  /Courier rides/i,
  /gravel path/i,
  /jacket priced/i,
  /kitchen manual/i,
  /Device lists at/i,
  /Chemist pours/i,
  /Vehicle \$A\$/i,
  /Towns \$[A-Z]\$/i,
  /running track borders/i,
  /path runs around/i,
  /path area alone/i,
  /path alone covers/i,
  /paved strip alone covers/i,
  /rectangular plot has area/i,
  /Two trains \$[0-9]+ m/i,
  /ball is thrown upward/i,
  /Three test scores/i,
  /Four-sevenths of a number/i,
  /Three consecutive odd/i,
  /product of two consecutive/i,
  /Two positive numbers have product/i,
  /positive number plus its reciprocal equals/i,
  /A job takes \$[0-9]+ h alone\. After/i,
  /A trip: \$[0-9]+ km at/i,
  /Trains \$[0-9]+ m and \$[0-9]+ m long approach/i,
  /A boat covers/i,
  /A car travels at an average speed/i,
  /A prize fund of/i,
  /A prize money of/i,
  /A rectangular sports field/i,
  /A rectangular lawn/i,
  /A device lists at/i,
  /A heated metal rod model/i,
  /Measuring time after an offset/i,
  /Every (?:positive|admissible|real) root/i,
  /satisfies \$x\$/i,
  /The equation \$[0-9]+\^x = -/i,
];

export function isPureArithmetic(stmt) {
  const s = stmt.replace(/^In an exam item,\s+/i, "").replace(/^Suppose that\s+/i, "");
  return PURE_ARITH_PATS.some((re) => re.test(s));
}

export function requiresEquationTopic(stmt, subsection) {
  if (isPureArithmetic(stmt)) return false;
  if (EQUATION_MARKERS.some((re) => re.test(stmt))) return true;

  if (subsection === "4.4") {
    return /\\log|\\ln|e\^|2\^|3\^|5\^|10\^/i.test(stmt) && /=/.test(stmt);
  }
  if (subsection === "4.2") {
    return /x\^2|x\^{2}|quadratic|consecutive|rectangle|fence|projectile|roots of/i.test(stmt);
  }
  if (subsection === "4.3") {
    return /\\sqrt|\\frac|\\|/i.test(stmt) || /fills in|ladder|Equation|Model \$\\frac|Positions on a rail/i.test(stmt);
  }
  // 4.1 linear word problems
  return /travels|leaves|years older|coins|pool|vinegar|prize|path|fence|worker|plan charges|scores|recipe|bar|pump|courier|jacket|manual|towns|vehicle|chemist|device|four-sevenths|consecutive odd|perimeter|area|boat|car|train|discount|saline|chase|meet|depot|exam|student|score|wage|rod|till|shop doubles/i.test(
    stmt
  );
}

export function isPluginTrue(stmt, isTrue, subsection) {
  if (!isTrue) return null;

  // Log/exp comparison claims (photo style) — not plug-in
  if (/smaller than|not smaller than|greater than \$[0-9]+\$|less than \$[0-9]+\$|exceeds \$|at least two distinct|more than one distinct/i.test(stmt)) {
    return null;
  }

  // Word problems needing a model + solve — allow exact numeric claims only if non-trivial
  const wordEqStory =
    /rectangle|area is|perimeter|consecutive|product of two|fence forms|reciprocal equals|roots of \$|path runs|path alone|ladder|pipe|tap|inlet|vinegar|prize fund|prize money|travels at|leaves \$|years older|coins totalling|worker \$|Together they need|meet \$|catch|downstream|upstream|still water|saline|concentration|discount|VAT|chemist pours|vehicle \$|towns \$|depot|exam item.*average|scores average|aluminium bar|pump delivers|gravel path|kitchen manual|phone plan|round trip|mean-speed trap|Positions on a rail|Equation \$\||Model \$\\frac/i.test(
      stmt
    );
  if (wordEqStory) return null;

  if (["4.1", "4.2", "4.3"].includes(subsection)) {
    const hasExplicitEq = /equation|discriminant|quadratic|factor|Vieta|roots of/i.test(stmt);
    const trivialArith =
      /^(Half of a number is|A scale shows|The (?:sum|product|difference) of|If .* then .* is \$[0-9]+\.$)/i.test(stmt) ||
      (/Then the (?:change|number) was \$[0-9]+\.$/.test(stmt) && !/equation/i.test(stmt));
    if (
      !trivialArith &&
      (hasExplicitEq ||
        /times a number|increased by|decreased by|per hour|per cent|area|perimeter|rectangle|tank|pipe|wage|purse|rod|batch|sample/i.test(
          stmt
        ))
    ) {
      return null;
    }
  }
  for (const p of TRUE_PLUG_PATS) {
    if (p.re.test(stmt)) return p.kind;
  }
  return null;
}

/** Returns rejection reason or null if OK. */
export function validateStatement(stmt, isTrue, subsection) {
  if (isPureArithmetic(stmt)) return "pure-arithmetic";
  if (!requiresEquationTopic(stmt, subsection)) return "not-equations-topic";
  const plug = isPluginTrue(stmt, isTrue, subsection);
  if (plug) return `plugin-true:${plug}`;
  return null;
}
