export const ASSERT = "Evaluate the following economic assertions:";

const CONTEXT_OVERRIDES = {
  "3.1.01":
    "Analyze how businesses classify human resources among the factors of production used to create goods and services. " +
    ASSERT,
  "3.1.02":
    "Consider a wine-growing business that uses hillside vineyards, seasonal pickers, leased bottling equipment, and specialist fermentation know-how. " +
    ASSERT,
  "3.2.01":
    "Review the primary, secondary, and tertiary sectors as stages from extraction through manufacturing to services. " +
    ASSERT,
  "3.2.10":
    "Review the definition of gross domestic product as a measure of overall economic activity within a country. " +
    ASSERT,
  "3.3.01":
    "Review how profit-oriented businesses relate revenues to costs and expenses. " + ASSERT,
  "3.3.09":
    "Analyze the main aim of not-for-profit organisations when they pursue a mission rather than owner profit. " +
    ASSERT,
};

export function fixContext(raw, subsection, caseNum) {
  const key = `${subsection}.${String(caseNum).padStart(2, "0")}`;
  if (CONTEXT_OVERRIDES[key]) return CONTEXT_OVERRIDES[key];

  let c = raw.trim();
  if (c.endsWith(ASSERT)) return c;

  c = c.replace(/:\s*$/, "").trim();
  c = c.replace(/\s*(Evaluate|Analyze|Assess|Review|Classify|Contrast)\s*$/i, "").trim();

  const claims = c.match(/^Evaluate claims about (.+)$/i);
  if (claims) {
    return `Review ${claims[1].replace(/:$/, "").trim()}. ${ASSERT}`;
  }

  const isScene =
    /^(A |An |After |Tina |AT&S |Startup |Greenpeace |Red Cross volunteers|Red Cross |Investors |Founders )/.test(
      c,
    );

  if (isScene) {
    if (!/^Consider /i.test(c)) {
      if (/^A /i.test(c)) c = `Consider a ${c.slice(2)}`;
      else if (/^An /i.test(c)) c = `Consider an ${c.slice(3)}`;
      else if (/^After /i.test(c)) c = `Consider how, after ${c.slice(6)}`;
      else if (/^Tina and Steve /i.test(c)) c = `Consider how ${c.toLowerCase()}`;
      else if (/^AT&S /i.test(c)) c = `Consider how ${c}`;
      else if (/^Startup founders /i.test(c)) {
        c =
          "Consider startup founders who expect profit as compensation for the risk they have invested";
      } else if (/^Greenpeace /i.test(c)) c = `Consider how ${c}`;
      else if (/^Red Cross volunteers /i.test(c)) c = `Consider how ${c}`;
      else if (/^Red Cross /i.test(c)) c = `Consider how a ${c.slice(10)}`;
      else if (/^Investors /i.test(c)) {
        c = "Consider how investors treat retained profit as reward for capital placed at risk";
      } else if (/^Founders /i.test(c)) {
        c = `Consider how ${c.toLowerCase()}`;
      }
    }
    if (!c.endsWith(".")) c += ".";
    return `${c} ${ASSERT}`;
  }

  if (/^(Analyze|Assess|Evaluate|Review|Classify|Contrast) /i.test(c)) {
    let stem = c;
    if (/^Assess /i.test(stem)) stem = `Review ${stem.slice(6).trimStart()}`;
    else if (/^Evaluate how /i.test(stem)) stem = `Analyze ${stem.slice(9).trimStart()}`;
    else if (/^Evaluate whether /i.test(stem)) stem = `Analyze ${stem.slice(9).trimStart()}`;
    else if (/^Evaluate /i.test(stem)) stem = `Review ${stem.slice(9).trimStart()}`;
    else if (/^Classify /i.test(stem)) stem = `Analyze how to classify ${stem.slice(9).trimStart()}`;
    else if (/^Contrast /i.test(stem)) stem = `Review ${stem.slice(9).trimStart()}`;
    if (!stem.endsWith(".")) stem += ".";
    return `${stem} ${ASSERT}`;
  }

  if (!c.endsWith(".")) c += ".";
  return `${c} ${ASSERT}`;
}

const TITLE_OVERRIDES = {
  "3.1.01": "Labour as a Factor of Production",
  "3.1.03": "Land and Natural Resources",
  "3.1.04": "Capital in Production",
  "3.1.06": "Entrepreneurship as a Factor of Production",
  "3.1.07": "Knowledge and Technology as Factors",
  "3.2.10": "Gross Domestic Product Definition",
  "3.2.35": "GDP as an Economic Activity Indicator",
  "3.3.09": "Not-for-Profit Organisation Aims",
};

export function fixTitle(raw, subsection, caseNum) {
  const key = `${subsection}.${String(caseNum).padStart(2, "0")}`;
  if (TITLE_OVERRIDES[key]) return TITLE_OVERRIDES[key];
  return raw
    .split(/\s+/)
    .map((w) => {
      if (/^(AT&S|GDP|EU|NPO|PCB|IT|WWF|NGO|Red Cross)$/i.test(w)) return w.toUpperCase() === "AT&S" ? "AT&S" : w;
      if (/^(and|or|as|in|on|at|to|for|of|the|a|an|versus|vs)$/i.test(w)) return w.toLowerCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ")
    .replace(/\bAt&s\b/g, "AT&S")
    .replace(/\bGdp\b/g, "GDP")
    .replace(/\bEu\b/g, "EU")
    .replace(/\bNpo\b/g, "NPO")
    .replace(/\bPcb\b/g, "PCB")
    .replace(/\bIt\b/g, "IT")
    .replace(/\bWwf\b/g, "WWF")
    .replace(/\bNgo\b/g, "NGO");
}

export function validateContextStyle(context, caseId) {
  const errors = [];
  if (!context.endsWith(ASSERT)) errors.push(`${caseId}: context must end with required assertion phrase`);
  if (/Evaluate claims about/i.test(context)) errors.push(`${caseId}: forbidden 'Evaluate claims about' pattern`);
  if (/\bEvaluate:\s*$/i.test(context)) errors.push(`${caseId}: forbidden short Evaluate ending`);
  if (/\bAnalyze:\s*$/i.test(context)) errors.push(`${caseId}: forbidden short Analyze ending`);
  if (/:\./.test(context)) errors.push(`${caseId}: malformed colon before period`);
  return errors;
}
