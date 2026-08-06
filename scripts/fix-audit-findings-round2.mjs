/**
 * Round-2 fixes from deep Ch2–6 audit:
 * - remaining near-paraphrases (ch2/ch3/ch4)
 * - ch5.4 retailer-prefix clones (same claim body)
 * - leftover identical absolute-share skeleton (80/400)
 * - sync patches into part sources, then caller runs merges
 */
import fs from "node:fs";

function load(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}
function save(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

function replaceExact(cases, replacements) {
  let n = 0;
  for (const c of cases) {
    for (let i = 0; i < (c.statements?.length || 0); i++) {
      for (const [from, to] of replacements) {
        if (c.statements[i] === from) {
          c.statements[i] = to;
          n++;
          break;
        }
      }
    }
  }
  return n;
}

function replaceInCase(cases, caseId, from, to) {
  const c = cases.find((x) => x.case_id === caseId);
  if (!c) return 0;
  let n = 0;
  for (let i = 0; i < c.statements.length; i++) {
    if (c.statements[i] === from) {
      c.statements[i] = to;
      n++;
    }
  }
  return n;
}

/** Diversify "For {topic} {q}, {identical body}" clones with rotating paraphrases. */
function diversifyForPrefixClones(cases) {
  const bodyAlts = [
    {
      match:
        /^for .+?, businesses may create wishes and needs by continuously developing new products and advertising them, not only by responding to existing customer demand\.$/i,
      alts: [
        (prefix) =>
          `${prefix}, continuous product launches and advertising can stimulate new wishes beyond demand customers already held.`,
        (prefix) =>
          `${prefix}, firms may generate additional wants through successive product introductions and promotional campaigns rather than only meeting prior needs.`,
        (prefix) =>
          `${prefix}, marketing-led development of new offers can create wishes that did not exist before the campaign.`,
      ],
    },
    {
      match:
        /^for .+?, businesses only respond to existing customer needs and never influence wishes through new products or advertising activity\.$/i,
      alts: [
        (prefix) =>
          `${prefix}, firms never shape demand and solely follow needs that customers already expressed without any promotional influence.`,
        (prefix) =>
          `${prefix}, advertising and new launches leave customer wishes unchanged and add no stimulated wants.`,
        (prefix) =>
          `${prefix}, demand is treated as fixed: sellers neither create wishes nor alter needs through marketing.`,
      ],
    },
    {
      match:
        /^for .+?, all advertising is automatically ethical whenever it increases sales\.$/i,
      alts: [
        (prefix) =>
          `${prefix}, higher sales alone prove that every promotional message was ethical.`,
        (prefix) =>
          `${prefix}, any campaign that raises turnover is treated as ethically acceptable by definition.`,
      ],
    },
    {
      match:
        /^for .+?, advertising is sometimes carried out in ways that are regarded as unethical when it manipulates consumers rather than informing them fairly\.$/i,
      alts: [
        (prefix) =>
          `${prefix}, some promotional practices are judged unethical when they manipulate buyers instead of informing them fairly.`,
        (prefix) =>
          `${prefix}, manipulative persuasion in advertising can fall outside ethical marketing conduct.`,
      ],
    },
    {
      match:
        /^for .+?, consumers often spend more than they initially intended when promotional messages trigger extra purchases beyond the original shopping plan\.$/i,
      alts: [
        (prefix) =>
          `${prefix}, promotional prompts frequently push actual spending above what shoppers planned to allocate.`,
        (prefix) =>
          `${prefix}, campaigns can add unplanned buys so outlays exceed the budget shoppers set beforehand.`,
      ],
    },
    {
      match:
        /^for .+?, many people spend more money than they can afford because marketing and easy purchasing channels encourage additional unplanned buying\.$/i,
      alts: [
        (prefix) =>
          `${prefix}, persuasive promotion and frictionless buying channels can drive spending beyond affordable limits.`,
        (prefix) =>
          `${prefix}, households may exceed what they can afford when marketing nudges extra impulse purchases.`,
      ],
    },
  ];

  let n = 0;
  const seen = new Map(); // key = matched pattern index + normalized body → count

  for (const c of cases) {
    for (let i = 0; i < c.statements.length; i++) {
      const s = c.statements[i];
      if (!/^For /i.test(s)) continue;
      const comma = s.indexOf(", ");
      if (comma < 0) continue;
      const prefix = s.slice(0, comma);
      for (let pi = 0; pi < bodyAlts.length; pi++) {
        const rule = bodyAlts[pi];
        if (!rule.match.test(s)) continue;
        const key = `${pi}::${s.slice(comma + 2).toLowerCase()}`;
        const count = seen.get(key) || 0;
        seen.set(key, count + 1);
        if (count === 0) break; // keep first occurrence
        const alt = rule.alts[(count - 1) % rule.alts.length];
        c.statements[i] = alt(prefix);
        n++;
        break;
      }
    }
  }
  return n;
}

// --- Ch2: keep a-sides distinct; patches already on b-sides in subtopics; mirror into parts ---
const ch2Repls = [
  [
    "Barter requires double coincidence of wants, which money as medium of exchange helps overcome.",
    "Without money, exchange under barter fails unless each party wants exactly what the other offers at the same moment.",
  ],
  [
    "Opportunity cost is the benefit of the next-best alternative given up when one option is chosen.",
    "Choosing one course of action means forgoing the benefit that the next-best feasible alternative would have delivered.",
  ],
  [
    "Nationwide statistics on total car sales after a bonus programme would be macroeconomic analysis.",
    "Totals for national car sales after an incentive scheme belong to macroeconomic rather than firm-level analysis.",
  ],
  [
    "Consumer sovereignty improves when households choose among competing mobile plans.",
    "Households exercising choice across rival mobile tariffs illustrate stronger consumer sovereignty in the market.",
  ],
];

// --- Ch3 remaining pairs ---
const ch3Repls = [
  [
    "Their technical troubleshooting supplies labour as human resources.",
    "Staff time spent diagnosing faults counts as the labour input for the repair venture.",
  ],
  [
    "Technical troubleshooting supplies labour as human resources.",
    "Hands-on technical fault-finding by staff is counted as the labour factor among the firm's resources.",
  ],
  [
    "Diagnostic tools and software licences represent technology in their service model.",
    "Repair kits and licensed diagnostic apps form the technology layer of the service offer.",
  ],
  [
    "Diagnostic tools and software licences represent technology in the service model.",
    "Diagnostic equipment and licensed software count as technology supporting the service offer.",
  ],
  [
    "Online order fulfilment by a warehouse is tertiary logistics.",
    "Warehouse pick-and-pack for e-commerce orders is classified as a tertiary logistics activity.",
  ],
  [
    "Online order fulfilment from a warehouse is tertiary logistics.",
    "Picking and dispatching online orders from a warehouse belongs to tertiary logistics services.",
  ],
  [
    "A town relying on one employer shows community stake in that firm's survival.",
    "Local jobs concentrating on a single company give the community a direct interest in that firm's continuity.",
  ],
];

const ch3Balance = [
  // Keep meaning, diversify wording of the two near-mirror SME tests
  [
    "CASE 3.4.38",
    "Balance sheet figures are ignored for medium status when turnover qualifies.",
    "Meeting the turnover threshold for medium size does not let the firm ignore the balance-sheet criterion entirely.",
  ],
  [
    "CASE 3.4.39",
    "Turnover figures are ignored for medium status when balance sheet qualifies.",
    "Passing the balance-sheet test alone does not drop the turnover test from the medium-size classification.",
  ],
];

const ch4Repls = [
  [
    "Partners need a partnership agreement to settle rights, responsibilities, and the division of profits and losses.",
    "A written partnership agreement is used to define partners' rights, duties, and how profit and loss are shared.",
  ],
  [
    "Intended use is irrelevant when comparing a bank loan with a bond for buying production materials.",
    "Whether materials are bought with a bank loan or a bond issue does not by itself decide which source is suitable; matching maturity and conditions still matters.",
  ],
  [
    "Revenue expenditure on production materials must be financed exclusively through twenty-year mortgage loans.",
    "Day-to-day materials spend should not be funded only by ultra-long mortgage borrowing; financing maturity should fit the use of funds.",
  ],
];

let summary = {};

function patchPath(path, repls) {
  const cases = load(path);
  const n = replaceExact(cases, repls);
  save(path, cases);
  summary[path] = (summary[path] || 0) + n;
  console.log(path, "exact-repl", n);
}

for (const p of [
  "src/data/economics-cases-ch2-subtopics.json",
  "src/data/ch2-part-2.1-2.2.json",
  "src/data/ch2-part-2.3-2.4.json",
  "src/data/ch2-part-2.5-2.6.json",
  "src/data/ch2-part-2.7.json",
]) {
  if (fs.existsSync(p)) patchPath(p, ch2Repls);
}

for (const p of [
  "src/data/economics-cases-ch3-subtopics.json",
  "src/data/ch3-part-3.1-3.3.json",
  "src/data/ch3-part-3.4-3.6.json",
]) {
  if (fs.existsSync(p)) {
    const cases = load(p);
    let n = replaceExact(cases, ch3Repls);
    for (const [id, from, to] of ch3Balance) n += replaceInCase(cases, id, from, to);
    save(p, cases);
    summary[p] = (summary[p] || 0) + n;
    console.log(p, "ch3", n);
  }
}

for (const p of [
  "scripts/ch4-part-4.2.json",
  "scripts/ch4-part-4.6.json",
  "src/data/economics-cases-ch4-subtopics.json",
]) {
  if (fs.existsSync(p)) patchPath(p, ch4Repls);
}

// Ch5.4 diversify
{
  const p = "scripts/ch5-part-5.4.json";
  const cases = load(p);
  let n = diversifyForPrefixClones(cases);
  // Soft TOC fix: 5.4.57 lean into responsibility/sustainability
  n += replaceInCase(
    cases,
    "CASE 5.4.57",
    "For car-hire firms in household durable-goods sectors, many people spend more money than they can afford because marketing and easy purchasing channels encourage additional unplanned buying.",
    "For car-hire firms, spending beyond affordable limits under promotional pressure is one of the consumption risks that responsible businesses and consumers should recognise.",
  );
  save(p, cases);
  summary[p] = n;
  console.log(p, "diversify+toc", n);
}

// Ch5.5 leftover 80/400 skeleton + weak 5.3.40 wording
{
  const p55 = "scripts/ch5-part-5.5.json";
  const cases = load(p55);
  let n = 0;
  // Diversify any remaining identical 20%-share skeletons (same figures elsewhere)
  const shareHits = [];
  for (const c of cases) {
    for (let i = 0; i < c.statements.length; i++) {
      if (/holds a 20 per cent absolute market share/i.test(c.statements[i]) && /\b80\b/.test(c.statements[i]) && /\b400\b/.test(c.statements[i])) {
        shareHits.push({ id: c.case_id, i, s: c.statements[i] });
      }
    }
  }
  const shareAlts = [
    null, // keep first
    "A producer with 48 million euros of sales in a 240 million euro market holds a 20 per cent absolute market share.",
    "Sales of 125 million euros in a 625 million euro market imply a 20 per cent absolute market share.",
  ];
  for (let k = 1; k < shareHits.length; k++) {
    const h = shareHits[k];
    const c = cases.find((x) => x.case_id === h.id);
    c.statements[h.i] = shareAlts[k] || shareAlts[shareAlts.length - 1];
    n++;
  }
  save(p55, cases);
  summary[p55] = n;
  console.log(p55, "share-skeleton", n);
}

{
  const p53 = "scripts/ch5-part-5.3.json";
  if (fs.existsSync(p53)) {
    const cases = load(p53);
    let n = 0;
    n += replaceInCase(
      cases,
      "CASE 5.3.40",
      "Loyalty programmes at hotel loyalty programmes preserve complete customer anonymity while still delivering personalised coupons.",
      "Under market orientation, a hotel shapes offers from guest preferences rather than pushing a standard product unchanged.",
    );
    // Also try softer variants if exact string differs slightly
    for (const c of cases) {
      if (c.case_id !== "CASE 5.3.40") continue;
      for (let i = 0; i < c.statements.length; i++) {
        if (/hotel loyalty programmes preserve complete customer anonymity/i.test(c.statements[i])) {
          c.statements[i] =
            "Under market orientation, a hotel shapes offers from guest preferences rather than pushing a standard product unchanged.";
          n++;
        }
      }
    }
    save(p53, cases);
    summary[p53] = n;
    console.log(p53, "toc-weak", n);
  }
}

console.log("DONE", summary);
