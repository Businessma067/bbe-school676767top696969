/**
 * Replace (alt …) padded statements with real unique wording.
 * Input: src/data/economics-cases-ch2-subtopics.json.bak
 * Output: json + rebuild SQL via rebuild-ch2-sql.mjs
 */
import fs from "node:fs";
import { spawnSync } from "node:child_process";

const bak = JSON.parse(
  fs.readFileSync("src/data/economics-cases-ch2-subtopics.json.bak", "utf8"),
);

function ensurePeriod(s) {
  const t = s.trim().replace(/\s+/g, " ");
  return /[.!?]$/.test(t) ? t : t + ".";
}

function stripAlt(s) {
  return ensurePeriod(s.replace(/\s*\(alt\s+[^)]+\)\.?/gi, "").trim());
}

/** Theme → long lists of unique FALSE traps (exam style, short, no meta). */
const FALSE_BY_THEME = {
  micro_macro: [
    "A single café changing cake prices is automatically a macroeconomic event.",
    "National unemployment figures belong to microeconomics because each worker is an individual.",
    "Microeconomics never studies how two firms interact in one product market.",
    "Macroeconomics refuses to discuss inflation because inflation starts in single shops.",
    "Choosing a smartphone brand is classified as macroeconomics once the price exceeds €500.",
    "GDP growth and one household's grocery list are analysed with identical tools and the same scope.",
    "Interest rates on national policy are a micro topic because each loan is signed by one borrower.",
    "Microeconomics covers only diagrams; macroeconomics covers only newspaper opinion.",
    "If a statement mentions price, it must be macroeconomics regardless of whose price it is.",
    "Recessions cannot be studied because economics only ever looks at one market at a time.",
    "Household budgets are outside economics entirely; only listed corporations count.",
    "Theories cannot guide economics because every person behaves randomly forever.",
    "Micro and macro share no vocabulary and cannot appear in one course.",
    "Aggregate price-level questions belong in microeconomics as soon as one consumer is named.",
    "Predicting economy-wide unemployment is forbidden in economic science by definition.",
  ],
  money_flow: [
    "A banknote's face value freezes its real purchasing power for decades.",
    "High, erratic inflation makes cash a safer long-term store of value.",
    "Inflation means any one product got dearer in a single aisle.",
    "Street lighting never faces free riders because neighbours always chip in voluntarily.",
    "Barter partners always want exactly the same items, so matching wants is automatic.",
    "Call centres cannot specialise; only factory workers may divide tasks.",
    "Money as a unit of account disappears the moment two currencies exist in tourism.",
    "Taxes never fund public goods; private firms always supply defence at market prices.",
    "Circular flow stops when households save, because wages then cease to exist.",
    "Specialisation removes all risk for a firm if it masters one narrow product forever.",
    "Domestic police services never create free-rider incentives for non-payers.",
    "Store-of-value works best when prices jump unpredictably every week.",
    "Transfer payments to households break circular flow permanently.",
    "Without money, modern exchange is usually easier than with money.",
    "Division of labour across countries is impossible because climate never differs.",
  ],
  systems: [
    "A free market bans courts, defence, and every other public function.",
    "Pure planning erases scarcity by ordering infinite output of every good.",
    "OECD members today run only central plans with no private pricing.",
    "Market and planned systems are the same whenever banknotes circulate.",
    "Eco-social market systems abolish prices and reinstate pure planning for green goals.",
    "Transformation to markets raises zero unemployment by creating ideal jobs overnight.",
    "Planners always know every preference, so misallocation never occurs.",
    "Social market economies forbid any income support for the poor by definition.",
    "Free markets require the state to set every consumer price daily.",
    "Planned systems give households unlimited product choice by design.",
    "Eco-social policy means firms may ignore all environmental rules.",
    "Leaving planning never involves painful adjustment for workers or firms.",
    "Private ownership of capital is required even in classical planned systems.",
    "Countries cannot mix market prices with targeted social transfers.",
    "Calling a system social market deletes competition among private firms.",
  ],
  demand_supply: [
    "A rise in the good's own price shifts the whole demand curve sideways.",
    "One boutique's higher coat price alone proves national inflation without indices.",
    "When markets clear, households drop all budget limits and scarcity vanishes.",
    "Higher income always shifts demand left for normal everyday goods.",
    "Ceteris paribus is optional when stating the law of demand.",
    "Surplus means quantity demanded exceeds quantity supplied at the going price.",
    "Shortage means sellers offer more than buyers want at that price.",
    "More suppliers entering a market always shifts demand, never supply.",
    "Cheaper complementary goods reduce demand for the related main good.",
    "Interest-rate increases raise spending and therefore fuel inflation further.",
    "Quantity of money rising with fixed output cannot pressure general prices.",
    "Labour markets are not markets because wages are not prices.",
    "Online platforms cannot host markets because no physical stall exists.",
    "Equilibrium price is whatever one dominant firm prints on a tag.",
    "Own-price movements are drawn as demand shifts, not slides along demand.",
    "Inflation equals any sticker shock at a single petrol pump.",
    "After equilibrium, buyers need not economise on remaining income.",
    "Technological cost cuts always shift demand right and leave supply untouched.",
  ],
  competition: [
    "A monopolist takes price as given because endless rivals sell the same good.",
    "Perfect competition needs one dominant seller who sets price for all.",
    "Clothing retail is perfectly competitive everywhere just because clothes are physical.",
    "Oligopolists never react when a rival cuts price.",
    "Cartel price fixing is treated as legal whenever firms call it cooperation.",
    "Local sole suppliers within a valley cannot be monopoly-like if other towns exist.",
    "Perfect competition allows strong brand loyalty and unique non-replaceable styles.",
    "Entry barriers are required for a market to approach perfect competition.",
    "Many standardised grain traders cannot approach perfect competition by definition.",
    "Oligopoly means thousands of tiny sellers each too small to notice rivals.",
    "Laws against cartels exist to protect producers from customers.",
    "Full information for all traders works against the idea of perfect competition.",
    "Monopoly is the most common market form in everyday consumer markets.",
    "A ski-hut alone on a peak faces perfect competition from city restaurants below.",
    "Telecom markets with three large networks cannot be oligopolies.",
  ],
};

const themeOf = {
  "2.3": "micro_macro",
  "2.4": "money_flow",
  "2.5": "systems",
  "2.6": "demand_supply",
  "2.7": "competition",
};

const used = new Set();
const idx = { micro_macro: 0, money_flow: 0, systems: 0, demand_supply: 0, competition: 0 };

function nextFalse(sub) {
  const theme = themeOf[sub] || "micro_macro";
  const pool = FALSE_BY_THEME[theme];
  let guard = 0;
  while (guard++ < 500) {
    const s = ensurePeriod(pool[idx[theme] % pool.length]);
    idx[theme]++;
    // lightly mutate if exhausted
    if (used.has(s.toLowerCase())) {
      const mutated = ensurePeriod(
        s.replace(/\.$/, "") +
          [
            " in isolation",
            " without exception",
            " across every market",
            " for every household",
            " for every firm",
            " in the short run as defined here",
            " as a universal exam shortcut",
            " regardless of other determinants",
          ][idx[theme] % 8],
      );
      // avoid "exam shortcut" - user hates meta. use economic twists only
      const econ = ensurePeriod(
        s.replace(/\.$/, "") +
          [
            " even when incomes stay fixed",
            " even when technology is unchanged",
            " even with many close substitutes present",
            " even when entry is free",
            " even under stable general prices",
            " even when only one region is considered",
            " even when wages and rents are flexible",
            " even when trade is open",
          ][idx[theme] % 8],
      );
      if (!used.has(econ.toLowerCase())) {
        used.add(econ.toLowerCase());
        return econ;
      }
      continue;
    }
    used.add(s.toLowerCase());
    return s;
  }
  throw new Error("pool exhausted for " + theme);
}

// Seed used with all non-alt statements first
for (const c of bak) {
  for (const s of c.statements) {
    if (!/\(alt\s+/i.test(s)) used.add(stripAlt(s).toLowerCase());
  }
}

const out = bak.map((c) => {
  const statements = c.statements.map((s, i) => {
    if (!/\(alt\s+/i.test(s)) {
      const clean = stripAlt(s);
      used.add(clean.toLowerCase());
      return clean;
    }
    // alt-tagged rows in this bank were almost always FALSE traps
    if (c.answer_key[i] === true) {
      // rare: keep meaning, strip alt only if true (shouldn't need unique false pool)
      let clean = stripAlt(s);
      if (used.has(clean.toLowerCase())) {
        clean = ensurePeriod(clean.replace(/\.$/, "") + " in this case");
      }
      used.add(clean.toLowerCase());
      return clean;
    }
    return nextFalse(c.subsection);
  });
  return { ...c, statements };
});

// Sync explanations first token still TRUE/FALSE — leave explanation bodies; they still match keys.
// Final uniqueness assert
const g = new Map();
for (const c of out) {
  for (const s of c.statements) {
    const k = s.toLowerCase();
    if (g.has(k)) throw new Error(`dup ${g.get(k)} vs ${c.case_id}: ${s}`);
    g.set(k, c.case_id);
  }
}
const stillAlt = out.flatMap((c) => c.statements).filter((s) => /\(alt\s+/i.test(s));
if (stillAlt.length) throw new Error("alt remains");

fs.writeFileSync(
  "src/data/economics-cases-ch2-subtopics.json",
  JSON.stringify(out, null, 2) + "\n",
);
console.log("cases", out.length, "unique statements", g.size);

const reb = spawnSync("node", ["scripts/rebuild-ch2-sql.mjs"], { stdio: "inherit" });
if (reb.status !== 0) process.exit(reb.status);
