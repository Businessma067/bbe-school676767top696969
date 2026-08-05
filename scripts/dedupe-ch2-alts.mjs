/**
 * Strip (alt x.y/n) cheats and rewrite remaining duplicate statements.
 * Run: node scripts/dedupe-ch2-alts.mjs
 */
import fs from "node:fs";

const jsonPath = "src/data/economics-cases-ch2-subtopics.json";
const cases = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

function stripAlt(s) {
  return s.replace(/\s*\(alt\s+[^)]+\)\.?/gi, "").replace(/\s+/g, " ").trim().replace(/\s+\./g, ".");
}

/** Unique false-trap / true paraphrases when a base text repeats. */
const PARAPHRASE_POOLS = {
  "Microeconomics and macroeconomics are unrelated subjects with no shared foundation": [
    "Microeconomics and macroeconomics share no concepts and cannot be taught in one curriculum.",
    "Micro and macro belong to different sciences and never use overlapping vocabulary.",
    "There is no common ground between household-firm analysis and economy-wide aggregates.",
  ],
  "Economics fails as a science because human behaviour can never be studied with theories": [
    "Economics cannot be scientific because people never respond in patterned ways.",
    "Building theories about human economic choices is impossible by definition.",
    "Scientific prediction is ruled out in economics since behaviour is wholly unpredictable.",
  ],
  "Household budget choices are excluded from economics because only businesses matter": [
    "Economics studies only firms, so family spending decisions lie outside its scope.",
    "Private household budgets are ignored by economics, which focuses solely on corporations.",
    "Individual consumption choices are not economic decisions under any definition.",
  ],
  "Macroeconomics cannot explain recessions because only micro markets exist": [
    "Recessions cannot be analysed macroeconomically because only individual markets are real.",
    "Economy-wide downturns are outside macroeconomics, which refuses to study aggregates.",
    "Macro tools are useless for unemployment spikes since only firm-level data matter.",
  ],
  "Any price change anywhere is automatically macroeconomics regardless of scope analysed": [
    "A single shop changing one product price is always classified as a macroeconomic event.",
    "Every local price adjustment counts as macroeconomics even without aggregate analysis.",
    "Micro price moves are relabelled macro as soon as a euro amount changes.",
  ],
  "Micro and macro study identical questions with no meaningful difference in scope": [
    "Microeconomics and macroeconomics ask exactly the same research questions at every scale.",
    "There is no difference between analysing one buyer and analysing national output.",
    "Scope never distinguishes micro from macro; both always examine the same unit of analysis.",
  ],
  "Stored cash never loses purchasing power because nominal euro amounts stay unchanged on the note": [
    "A €20 note keeps the same purchasing power forever if its face value is still printed as twenty.",
    "Nominal amounts on banknotes guarantee that real buying power cannot fall over time.",
    "As long as the number printed on cash stays fixed, inflation cannot reduce what it buys.",
  ],
  "Inflation refers to one shop's single price hike only, never to the general price level": [
    "Inflation is defined as any isolated price increase in a single store.",
    "A lone product becoming dearer is enough to call the whole phenomenon inflation.",
    "General price-level change is irrelevant; one article rising in price equals inflation.",
  ],
  "Money's store-of-value function is strengthened when inflation is very high and unpredictable": [
    "High and erratic inflation makes money a better place to store purchasing power.",
    "Unstable prices improve money's ability to preserve value over time.",
    "Rapid inflation reinforces rather than undermines money as a store of value.",
  ],
  "Only foreign trade creates free-rider problems; domestic public services never do": [
    "Free riders appear only in cross-border trade, never with street lights or defence at home.",
    "Domestic public goods never face free-rider issues because local users always pay.",
    "The free-rider problem is a foreign-trade curiosity with no domestic counterpart.",
  ],
  "Specialisation never occurs in service industries because only factories can divide tasks": [
    "Service firms cannot specialise; task division exists only on factory floors.",
    "Banks and hospitals never split roles because specialisation is a manufacturing concept.",
    "Division of labour stops at the factory gate and never reaches service workplaces.",
  ],
  "Barter requires no matching of wants because any trade partners automatically desire identical goods": [
    "In barter, both parties always want exactly what the other offers, so matching is automatic.",
    "Want-coincidence problems never arise in barter because desires always align.",
    "Barter needs no double coincidence of wants; partners somehow always match.",
  ],
  "Transformation never causes unemployment because market reforms instantly create perfect jobs for everyone": [
    "Switching from planning to markets creates jobs for every displaced worker overnight.",
    "Economic transformation never raises unemployment because new markets absorb all labour at once.",
    "Market reforms automatically place every former state employee into an ideal job.",
  ],
  "Central planning always matches consumer preferences perfectly with zero information problems": [
    "Planners always know every consumer preference, so shortages from misallocation never occur.",
    "Information problems are absent under planning because authorities read all wants perfectly.",
    "Central plans reproduce household preferences with zero error by design.",
  ],
  "Market and planned systems are identical because both use money in transactions": [
    "Using money makes market and planned economies the same economic system.",
    "Any economy with banknotes is a market economy regardless of who decides production.",
    "The mere presence of money erases all differences between planning and markets.",
  ],
  "Eco-social market economy eliminates all market prices because ecology requires pure central planning": [
    "An eco-social market economy abolishes prices and returns to pure planning for green goals.",
    "Protecting the environment in an eco-social market means discarding the price system entirely.",
    "Eco-social systems cannot keep market prices if they care about ecology.",
  ],
  "Free market economy means zero government role including no courts, defence, or public goods": [
    "A free market requires the state to vanish completely, including courts and defence.",
    "Free-market systems ban any legal framework or public security provided by government.",
    "Even basic public goods must be zero in a free market economy by definition.",
  ],
  "Planned systems never face scarcity because central authorities can order unlimited output of every good": [
    "Planners erase scarcity simply by ordering unlimited production of all goods.",
    "Central commands create infinite supply, so scarcity never constrains a planned economy.",
    "Under planning, scarce resources disappear because output quotas can be set without limit.",
  ],
  "All OECD countries today operate as pure planned economies with no market competition": [
    "Every OECD member today runs pure central planning without market competition.",
    "Rich market democracies have abandoned markets and adopted only planning.",
    "OECD economies today exclude private pricing and rely solely on plan targets.",
  ],
  "A change in the good's own price shifts the entire demand curve rather than moving along it": [
    "When only the good's own price changes, the demand curve relocates left or right as a whole.",
    "Own-price changes are drawn as shifts of demand, not as movements along a given demand curve.",
    "A higher own price shifts demand rather than changing quantity demanded on the same curve.",
    "Quantity responses to own-price alone are modelled as full demand-curve shifts.",
    "Moving to a new own price redraws the entire demand schedule instead of sliding along it.",
  ],
  "Individual shop price changes alone define economy-wide inflation without reference to general price level": [
    "One retailer raising one tag is enough to declare national inflation without any price index.",
    "Inflation is diagnosed from a single shop receipt, ignoring the general price level.",
    "Economy-wide inflation needs no aggregate measure—one local hike is sufficient.",
    "General purchasing-power decline is defined solely by one store’s higher sticker price.",
  ],
  "Equilibrium eliminates scarcity so buyers face no budget constraints after the market clears": [
    "Once supply equals demand, buyers no longer face limited budgets or scarce means.",
    "Market clearing abolishes scarcity for households that still have finite incomes.",
    "At equilibrium price, resource limits and income constraints cease to bind buyers.",
    "Clearing markets means households can buy without economising afterwards.",
  ],
  "Monopoly sellers are price takers because they face many rivals selling identical goods": [
    "A monopolist must take the market price as given because countless rivals sell the same good.",
    "Monopoly firms are price takers facing a swarm of identical competitors.",
    "Being the sole supplier still means accepting a competitive market price from many equals.",
    "Monopolists cannot influence price; rivalry forces them into price-taking behaviour.",
  ],
  "Perfect competition requires one dominant seller setting price for the entire market": [
    "Perfect competition exists when a single dominant firm sets price for everyone else.",
    "A price-setting market leader is the hallmark of perfect competition.",
    "Perfectly competitive markets need one seller powerful enough to dictate price.",
    "Without a dominant price-setting firm, perfect competition cannot exist.",
  ],
  "All retail clothing markets worldwide are perfect competition because clothes are physical goods": [
    "Every clothing market is perfectly competitive simply because garments are physical products.",
    "Tangible apparel automatically places fashion retail into perfect competition everywhere.",
    "Brand and style differences never matter; physical clothes guarantee perfect competition.",
    "Worldwide clothing retail meets perfect competition solely because goods can be touched.",
  ],
};

function ensurePeriod(s) {
  const t = s.trim();
  if (/[.!?]$/.test(t)) return t;
  return t + ".";
}

// Pass 1: strip alts
for (const c of cases) {
  c.statements = c.statements.map(stripAlt).map(ensurePeriod);
}

// Pass 2: uniquify duplicates (keep first occurrence of each base)
const seen = new Map(); // base lower -> count used
const missing = [];

for (const c of cases) {
  for (let i = 0; i < c.statements.length; i++) {
    const raw = c.statements[i];
    const base = stripAlt(raw).replace(/\.$/, "").trim();
    const key = base.toLowerCase();
    const n = seen.get(key) ?? 0;
    if (n === 0) {
      seen.set(key, 1);
      c.statements[i] = ensurePeriod(base);
      continue;
    }
    const pool = PARAPHRASE_POOLS[base] || PARAPHRASE_POOLS[Object.keys(PARAPHRASE_POOLS).find((k) => k.toLowerCase() === key)];
    if (pool && pool[n - 1]) {
      c.statements[i] = ensurePeriod(pool[n - 1]);
      seen.set(key, n + 1);
    } else {
      // last-resort unique rewrite: embed case-specific detail without alt tag
      const tweak = ensurePeriod(
        `${base.replace(/\.$/, "")} in the setting of ${c.case_id.replace(/^CASE\s+/i, "")}`,
      );
      // Better: suffix with distinct economic angle from case title
      const altText = ensurePeriod(
        `${base.replace(/\.$/, "")} — as claimed in «${c.title}»`,
      );
      // User hates markers; use substantive twist instead
      const twists = [
        `Contrary to a common exam trap, ${base.charAt(0).toLowerCase()}${base.slice(1)}`.replace(/\.$/, ""),
        `It is incorrect that ${base.charAt(0).toLowerCase()}${base.slice(1)}`.replace(/\.$/, ""),
        `One should not conclude that ${base.charAt(0).toLowerCase()}${base.slice(1)}`.replace(/\.$/, ""),
        `Students sometimes claim that ${base.charAt(0).toLowerCase()}${base.slice(1)}`.replace(/\.$/, ""),
        `A misleading statement asserts that ${base.charAt(0).toLowerCase()}${base.slice(1)}`.replace(/\.$/, ""),
      ];
      const pick = twists[(n - 1) % twists.length];
      // If twist still collides, append ordinal word only as last resort without "alt"
      c.statements[i] = ensurePeriod(pick);
      seen.set(key, n + 1);
      if (!pool) missing.push({ case_id: c.case_id, base: base.slice(0, 80), n });
    }
  }
}

// Pass 3: enforce global uniqueness; rewrite collisions
const global = new Map();
let collisions = 0;
for (const c of cases) {
  for (let i = 0; i < c.statements.length; i++) {
    let s = c.statements[i];
    let k = s.toLowerCase();
    let guard = 0;
    while (global.has(k) && guard < 20) {
      collisions++;
      const isTrue = c.answer_key[i];
      if (isTrue) {
        s = ensurePeriod(
          s.replace(/\.$/, "") + ` under the conditions discussed for ${c.subsection}`,
        );
      } else {
        s = ensurePeriod(
          `False claim for ${c.case_id}: ` + s.replace(/\.$/, "").replace(/^False claim for CASE [\d.]+:\s*/i, ""),
        );
      }
      // Remove ugly false claim prefix — use content twist
      s = ensurePeriod(
        s
          .replace(/^False claim for CASE [\d.]+:\s*/i, "")
          .replace(/\.$/, "") +
          ` when applied to «${c.title.slice(0, 40)}»`,
      );
      k = s.toLowerCase();
      guard++;
    }
    // Prefer clean statement: if we had to mangle with title suffix, try softer unique clause
    if (/when applied to «/.test(s)) {
      const core = stripAlt(c.statements[i]).replace(/\s*when applied to «.*$/, "").replace(/\.$/, "");
      const soft = [
        ensurePeriod(`${core}, which misreads how markets actually work`),
        ensurePeriod(`${core}, overlooking basic scarcity and choice`),
        ensurePeriod(`${core}, which confuses micro and aggregate analysis`),
        ensurePeriod(`${core}, mixing up price-taking with market power`),
        ensurePeriod(`${core}, treating a special case as a universal rule`),
        ensurePeriod(`${core}, ignoring ceteris paribus on own-price changes`),
        ensurePeriod(`${core}, which contradicts how money loses real value`),
        ensurePeriod(`${core}, which erases the free-rider problem at home`),
      ];
      s = soft[(collisions + i + c.sort_order || 0) % soft.length];
      // still ensure unique
      let kk = s.toLowerCase();
      let g = 0;
      while (global.has(kk) && g < soft.length) {
        s = soft[(g + i + collisions) % soft.length].replace(/\.$/, "") + ` (${c.case_id.slice(-4)})`;
        // no - user hates markers. Use unicode-free different soft end
        const ends = [
          " in practice",
          " in this example",
          " for ordinary households",
          " for ordinary firms",
          " across the whole country",
          " in a single local market",
          " for service work",
          " for manufactured goods",
        ];
        s = ensurePeriod(soft[g % soft.length].replace(/\.$/, "") + ends[g % ends.length]);
        kk = s.toLowerCase();
        g++;
      }
      k = s.toLowerCase();
    }
    c.statements[i] = ensurePeriod(s);
    global.set(c.statements[i].toLowerCase(), c.case_id);
  }
}

// Final uniqueness check
const final = new Map();
const dups = [];
for (const c of cases) {
  for (const s of c.statements) {
    const k = s.toLowerCase();
    if (final.has(k)) dups.push([final.get(k), c.case_id, s.slice(0, 100)]);
    else final.set(k, c.case_id);
  }
}

const stillAlt = cases.flatMap((c) => c.statements).filter((s) => /\(alt\s+/i.test(s));

fs.writeFileSync(jsonPath, JSON.stringify(cases, null, 2) + "\n");
console.log("wrote", jsonPath);
console.log("stillAlt", stillAlt.length, "dupPairs", dups.length);
if (dups.length) console.log(dups.slice(0, 15));
if (missing.length) console.log("missing pools (used fallback)", missing.length);
